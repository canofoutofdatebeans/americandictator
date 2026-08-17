/* ============================================================
   AMERICAN DICTATOR — engine.js
   The rules. Draw a card, apply a choice, work out whether the
   republic just changed shape.

   TURN FLOW
   ---------
   draw()      -> the crisis for this month
   choose(i)   -> applies effects, returns everything that happened
   advance()   -> month++, passive ticks, ready for the next draw
   ============================================================ */

AD.Engine = {

  run: null,
  card: null,

  start (run) {
    // Migrate saves written before authority was split into raw/pillar.
    if (run.rawAuth === undefined) {
      run.rawAuth = run.authority || 0;
      run.pillarAuth = 0;
      run.baseHigh = 0;
    }
    // Migrate saves written before second terms existed.
    if (run.term === undefined) {
      run.term = 1;
      run.termStart = 1;
      run.termLength = run.maxMonths;
    }
    if (!run.stats) run.stats = { grabs: 0, restraints: 0, timeouts: 0, peakCash: run.cash, briefings: 0, bought: 0 };
    if (!run.assets) run.assets = [];      // saves written before the corruption track
    if (!run.clauses) run.clauses = [];    // saves written before the constitution ledger

    this.run = run;
    this.card = null;
    this.lastScore = null;
    return run;
  },

  /* ---------- Inheritance -------------------------------------------------
     Applied once, at the very start of a run, from the previous
     administration's wreckage. */
  applyInheritance (run) {
    const inh = run.legacy;
    if (!inh || !inh.mods) return;
    AD.FKEYS.forEach(k => {
      if (inh.mods[k]) run.meters[k] = AD.clamp(run.meters[k] + inh.mods[k], 8, 100);
    });
  },

  diff () { return AD.DIFFS[this.run.difficulty] || AD.DIFFS.standard; },

  /* ---------- DRAW ------------------------------------------------------- */
  draw () {
    const run = this.run;

    // The last November of a term always wins — but WHICH November card it is
    // depends on the term, so this must go through the term-aware scheduler.
    // Term one gets the Re-election (survivable); term two gets the finale.
    if (AD.termMonth(run) >= run.termLength - 1) {
      this.card = AD.scriptedFor(run);
      return this.card;
    }

    // Forced beats (pillar backlash, the second inaugural) jump the queue.
    if (run.queue.length) {
      this.card = run.queue.shift();
      return this.card;
    }

    const scripted = AD.scriptedFor(run);
    if (scripted) { this.card = scripted; return this.card; }

    let card = AD.pickCard(run);

    // Deck exhausted late in a long term — recycle everything except the
    // most recent handful so nothing repeats back to back.
    if (!card) {
      run.seen = run.seen.slice(-8);
      card = AD.pickCard(run);
    }
    this.card = card;
    return card;
  },

  /* ---------- Is a choice available? -------------------------------------- */
  /* Gated on cash, and on Authority for the doors that only open late. */
  canAfford (choice) {
    if (choice.cost && this.run.cash < choice.cost) return false;
    if (choice.needsAuth && this.run.authority < choice.needsAuth) return false;
    return true;
  },

  /* ---------- CHOOSE ------------------------------------------------------ */
  choose (index) {
    const run = this.run;
    const card = this.card;

    const out = {
      res: '', deltas: {}, tabloid: null, doctrine: null,
      pillar: null, ending: null, shieldSaved: null
    };

    // A finished term accepts no further decisions. Without this, a stray tap
    // during the ending animation would score and file the same run twice.
    if (!run || run.over || !card) return out;
    const choice = card.choices[index];
    if (!choice) return out;

    /* --- Dynamic events (midterms, election) compute their own outcome --- */
    let eff;
    if (card.dynamic) {
      const d = card.dynamic(run, index);
      if (d.ending) {                       // election resolves straight to an ending
        out.ending = d.ending;
        out.res = choice.label;
        this.finish(out.ending);
        return out;
      }
      if (d.secondTerm) {                   // re-election won — the run continues
        out.secondTerm = this.beginSecondTerm(d.secondTerm);
        return out;
      }
      eff = Object.assign({}, d.eff);
      out.res = d.res;
      out.tabloid = d.tabloid || null;
    } else {
      eff = Object.assign({}, choice.eff || {});
      out.res = choice.res || '';
    }

    /* --- Cost --- */
    if (choice.cost) run.cash -= choice.cost;

    /* --- Doctrines, then owned holdings, reshape the effect before it lands.
           Order matters: doctrines are constitutional theory, corruption is
           money, and money gets the last word. --- */
    AD.applyDoctrines(run, eff);
    AD.applyPassivesToEffect(run, eff);

    /* --- Apply to meters --- */
    AD.FKEYS.forEach(k => {
      if (run.locked[k]) return;                 // captured pillars are frozen
      const before = run.meters[k];
      let delta = eff[k] || 0;

      /* INSTITUTIONAL RESISTANCE — the last stretch of a capture is the
         hardest. A branch that is already mostly yours resists each further
         point; the die-hards are the ones left. Without this the deck's sheer
         volume of positive options made capture nearly automatic (optimal play
         hit a 94% win rate on the 300-card deck). Applies to gains only, and
         only to capturable branches — the Base has its own dynamics. */
      const f = AD.faction(k);
      if (delta > 0 && f.capturable) {
        if (before >= AD.RESIST_HARD)      delta = Math.ceil(delta * AD.RESIST_HARD_MULT);
        else if (before >= AD.RESIST_SOFT) delta = Math.ceil(delta * AD.RESIST_SOFT_MULT);
      }

      let after = AD.clamp(before + delta, 0, 100);
      if (k === 'base' && AD.hasDoctrine(run, 'cult')) after = Math.max(34, after);
      run.meters[k] = after;
      if (after !== before) out.deltas[k] = after - before;
    });

    /* --- Cash & Authority --- */
    if (eff.cash) {
      const b = run.cash;
      run.cash = Math.max(0, Math.round((run.cash + eff.cash) * 10) / 10);
      if (run.cash !== b) out.deltas.cash = Math.round((run.cash - b) * 10) / 10;
    }
    if (eff.auth) {
      const b = run.authority;
      run.rawAuth += eff.auth;                 // decisions only ever move rawAuth
      AD.recomputeAuthority(run);
      if (run.authority !== b) out.deltas.auth = run.authority - b;
      else if (eff.auth > 0) out.authCapped = true;   // grinding against the ceiling
      // NB: authCapped lives on `out`, not `out.deltas` — deltas is persisted
      // into the crisis log and must only ever contain meter keys.
    }

    /* --- Constitutional breaches --- */
    if (choice.breaks) {
      const b = AD.recordBreach(run, choice.breaks);
      if (b) {
        out.breach = b;
        if (b.complete) {
          out.deltas.cash = (out.deltas.cash || 0) + b.bounty;
          out.tabloid = b.tabloid;               // Rusalka settles up
        }
      }
    }

    /* --- Story flags & forced follow-ups --- */
    if (choice.flag) run.flags[choice.flag] = true;
    if (card.flag)   run.flags[card.flag] = true;
    if (choice.queue) choice.queue.forEach(id => {
      const c = AD.CARDS.find(x => x.id === id);
      if (c) run.queue.push(c);
    });

    /* --- Play-style stats (drive achievements and briefings) --- */
    const rawAuthGain = (choice.eff && choice.eff.auth) || 0;
    if (rawAuthGain >= 5) run.stats.grabs++;
    else if (rawAuthGain <= 0) run.stats.restraints++;
    if (run.cash > run.stats.peakCash) run.stats.peakCash = run.cash;

    /* --- Log it --- */
    run.log.unshift({
      month: run.month, date: AD.dateLabel(run.month),
      title: card.title, choice: choice.label,
      deltas: Object.assign({}, out.deltas)
    });
    if (!card.scripted) run.seen.push(card.id);

    /* ================= RESOLUTION CHECKS ================= */

    // 1. A power centre captured -> Pillar. (Checked before collapse: taking a
    //    branch on the same turn you lose another one still counts.)
    const captured = AD.FACTIONS.find(f =>
      f.capturable && !run.locked[f.key] && run.meters[f.key] >= this.diff().capture);
    if (captured) {
      run.locked[captured.key] = true;
      run.meters[captured.key] = 100;
      const b = run.authority;
      run.pillarAuth += this.diff().pillarValue;   // pillars bypass the soft cap
      AD.recomputeAuthority(run);
      out.deltas.auth = (out.deltas.auth || 0) + (run.authority - b);
      out.pillar = captured.key;
      out.tabloid = {
        head: captured.pillar.toUpperCase(),
        sub: captured.pillarLine,
        body: 'What was once a check is now a department. Observers noted that no law was changed, ' +
              'no vote was held and no emergency was declared. The institution simply stopped saying no, ' +
              'and once an institution stops saying no there is no procedure for making it start again.'
      };
      run.queue.push(AD.backlashFor(captured.key));
    }

    // 2. A power centre collapsed.
    const collapse = this.checkCollapse();
    if (collapse.ending) { out.ending = collapse.ending; this.finish(out.ending); return out; }
    if (collapse.saved) { out.shieldSaved = collapse.saved; out.tabloid = collapse.tabloid; }

    // 3. Total authority.
    if (run.authority >= 100) { out.ending = 'dictator'; this.finish(out.ending); return out; }

    // 4. New doctrine?
    out.doctrine = AD.checkDoctrineUnlock(run);

    AD.saveRun(run);
    return out;
  },

  /* ---------- SECOND TERM -------------------------------------------------
     Winning re-election does not end the run — it restarts the arc on a
     harder setting. The honeymoon is over, the backlash intensifies
     permanently, and the deck's month windows reset so term two plays like a
     term rather than an epilogue. */
  beginSecondTerm (how) {
    const run = this.run;
    run.term = 2;
    run.termStart = run.maxMonths + 1;
    run.month = run.termStart;
    run.maxMonths = run.termStart + run.termLength - 1;

    // The country has now watched you do all of this once. A second term is
    // twice the runway, so it has to cost more than it gives — otherwise the
    // extra 48 months just hand you the win.
    const hit = how === 'contested' ? -16 : -11;
    AD.FKEYS.forEach(k => {
      if (run.locked[k] || k === 'base') return;
      run.meters[k] = AD.clamp(run.meters[k] + hit, 6, 100);
    });
    run.meters.base = AD.clamp(run.meters.base + 8, 0, 100);   // a mandate is a mandate

    run.rawAuth += how === 'contested' ? 14 : 10;
    AD.recomputeAuthority(run);

    run.termPressureBonus = 1;      // every institution now pushes back permanently harder
    run.seen = [];                  // the deck reopens for a second term
    run.flags.lastAddress = null;
    run.queue = [AD.EVENTS.secondTermOpener];

    AD.saveRun(run);
    return {
      how,
      tabloid: how === 'contested' ? {
        head: 'CERTIFIED, EVENTUALLY',
        sub: 'Second term confirmed after nineteen days, sixty-one filings and four state boards changing their minds',
        body: 'It was never called on election night and it was never conceded. It was resolved by attrition, ' +
              'in county offices, by people whose names nobody will remember. The margin in the end was 0.3%. ' +
              'The margin that mattered was the number of officials who decided the fight was not worth their job.'
      } : {
        head: 'FOUR MORE YEARS',
        sub: 'Re-elected. Outright. By people who watched the whole first term and asked for another one',
        body: 'This is the outcome nobody had a plan for. Not stolen, not blocked, not postponed — voted for, ' +
              'in daylight, by a majority of a country that had four years of evidence in front of it. ' +
              'Every institutional argument for restraint assumed the public would eventually object. ' +
              'The public has now been asked directly and has declined to.'
      }
    };
  },

  /* ---------- Has anything hit zero? -------------------------------------- */
  /* Shared by choose() and advance() so the Immunity Shield works either way.
     Returns {ending} or {saved, tabloid} or {}. */
  checkCollapse () {
    const run = this.run;
    const dead = AD.FACTIONS.find(f => !run.locked[f.key] && run.meters[f.key] <= 0);
    if (!dead) return {};

    if (AD.hasDoctrine(run, 'immunity') && !run.shieldUsed) {
      run.shieldUsed = true;
      run.meters[dead.key] = 22;
      if (dead.key === 'base') run.baseHigh = 0;
      return {
        saved: dead.key,
        tabloid: {
          head: 'NO CASE TO ANSWER',
          sub: 'Immunity Shield invoked; ' + dead.name.toLowerCase() + ' crisis quietly resolved overnight',
          body: 'The filing was two pages long and cited a single precedent. Because the act was official, ' +
                'no court may inquire into the motive behind it. Because no court may inquire into the motive, ' +
                'there is nothing left to investigate. The matter is closed. It was closed before it opened.'
        }
      };
    }
    return { ending: AD.zeroEnding(dead.key) };
  },

  /* ---------- ADVANCE ----------------------------------------------------- */
  /* Returns an ending id if the passage of time alone killed you. */
  advance () {
    const run = this.run;
    if (run.over) return null;
    run.month += 1;

    // Standing Emergency: a point of authority every month, for nothing.
    // Still raw authority, so it grinds against the soft cap like everything else.
    if (AD.hasDoctrine(run, 'emergency')) {
      run.rawAuth += 1;
      AD.recomputeAuthority(run);
    }

    // A movement that is not fed every single month cools off on its own.
    // NB: deliberately NOT harsher in term two — 95 months of accelerated
    // decay made zero-base swallow 40% of all endings.
    if (!run.locked.base) {
      let b = run.meters.base + AD.BASE_DECAY;
      if (AD.hasDoctrine(run, 'cult')) b = Math.max(34, b);
      run.meters.base = AD.clamp(b, 0, 100);
    }

    /* Historic difficulty: everything sags on its own. */
    const drift = this.diff().drift;
    if (drift) {
      AD.FKEYS.forEach(k => {
        if (run.locked[k] || k === 'base') return;
        run.meters[k] = AD.clamp(run.meters[k] + drift, 0, 100);
      });
    }

    /* ESCALATING BACKLASH — the core difficulty curve.
       Every branch you capture costs you 1 point per month on the branch you
       are currently closest to capturing. The institution with the most to
       lose fights hardest, and it fights harder for every colleague it has
       already watched fall. It targets rather than carpet-bombs, so the
       pressure is predictable enough to plan around and specific enough to
       make the third pillar the hardest thing in the game. */
    /* Backlash has three sources, added (never multiplied — compounding them
       gave Historic 4-6 points of drain a month and made capture impossible):

       1. PILLARS   — every branch taken makes the next one fight harder.
       2. TERM      — a second term is permanently worse.
       3. AUTHORITY — the continuous brake. Resistance scales with how
          authoritarian you have actually become, not just with what you have
          formally captured. Without this, a 300-card deck lets a focused player
          grind any single meter to 100 unopposed (optimal play hit 95%).
          This is also the thematically true one: the country reacts to what
          you are, not to your paperwork. */
    const authPressure = Math.floor(run.authority / AD.AUTH_PRESSURE_DIV);
    const pressure = Object.keys(run.locked).length * (this.diff().pressureMult || 1)
                     + (run.termPressureBonus || 0)
                     + authPressure;
    if (pressure) {
      let target = null, high = -1;
      AD.FACTIONS.forEach(f => {
        if (!f.capturable || run.locked[f.key]) return;
        if (run.meters[f.key] > high) { high = run.meters[f.key]; target = f.key; }
      });
      if (target) {
        run.meters[target] = AD.clamp(run.meters[target] - pressure, 0, 100);
        run.pressureOn = target;
      }
    } else run.pressureOn = null;

    // Holdings pay out, drip and settle before the survival checks.
    this.lastTick = AD.corruptionTick(run);

    // Crossing the fortune line is announced once, and does not end the run —
    // it is banked and cashed in at whatever ending you eventually reach.
    this.pendingFortune = null;
    if (!run.flags.fortune && run.cash >= AD.WEALTH_GOAL) {
      run.flags.fortune = true;
      this.pendingFortune = {
        head: 'TEN FIGURES',
        sub: 'Personal fortune passes $10bn while in office; disclosure filed on a Friday',
        body: 'The figure is not disputed, concealed or even especially hidden. It is on a form, ' +
              'signed, in a public archive, and it is larger than the annual budget of eleven ' +
              'federal agencies. Whatever else happens now — removal, defeat, a third term — ' +
              'it happens to a man who has already won the other game entirely.'
      };
    }

    // The Understudy fuse: three consecutive months of a movement that has
    // outgrown you and the Vice President accepts the nomination.
    if (run.meters.base >= AD.BASE_DANGER) run.baseHigh = (run.baseHigh || 0) + 1;
    else run.baseHigh = 0;
    if (run.baseHigh >= AD.BASE_FUSE) { this.finish('max-base'); return 'max-base'; }

    // The clock can starve a meter to death without you choosing anything.
    const collapse = this.checkCollapse();
    if (collapse.ending) { this.finish(collapse.ending); return collapse.ending; }
    this.pendingShield = collapse.saved ? collapse.tabloid : null;

    AD.saveRun(run);
    return null;
  },

  /* ---------- FINISH ------------------------------------------------------ */
  finish (endingId) {
    const run = this.run;
    if (run.over) return this.lastScore;      // score and file each term exactly once

    /* THE SECOND OBJECTIVE. The fortune is cashed in at whatever ending you
       reached: it upgrades a win to 'the-full-set' and converts a loss into
       'the-fortune'. Ten billion dollars is a parachute, and it should be —
       that is the whole joke. */
    if (run.cash >= AD.WEALTH_GOAL && endingId !== 'the-fortune' && endingId !== 'the-full-set') {
      const e = AD.ENDINGS[endingId];
      endingId = (e && e.win) ? 'the-full-set' : 'the-fortune';
    }

    run.over = true;
    run.endingId = endingId;
    AD.clearRun();

    const card = AD.scoreRun(run, endingId);
    // Achievements are evaluated BEFORE the library is written, so tests that
    // count past administrations don't include the one that just ended.
    card.freshAchievements = AD.checkAchievements(run, card).map(a => a.id);

    const lib = AD.loadLibrary();
    lib.unshift(card);
    AD.saveLibrary(lib);
    AD.recordChaos(endingId);                 // the country gets harder to govern

    this.lastScore = card;
    return card;
  },

  /* ---------- Warnings shown under the meters ----------------------------- */
  warnings () {
    const run = this.run, out = [];

    if (run.baseHigh > 0) {
      const left = AD.BASE_FUSE - run.baseHigh;
      out.push({ level: 'crit', text: 'The crowd is chanting a name that is not quite yours. ' +
        left + ' month' + (left === 1 ? '' : 's') + ' before the Vice President accepts.' });
    }

    AD.FACTIONS.forEach(f => {
      if (run.locked[f.key]) return;
      const v = run.meters[f.key];
      if (v <= 16 && f.lowWarn) out.push({ key: f.key, level: 'crit', text: f.lowWarn });
      else if (f.key === 'base' && v >= 88 && !run.baseHigh) out.push({ key: f.key, level: 'warn', text: f.highWarn });
      else if (f.capturable && v >= 85) out.push({ key: f.key, level: 'good', text: f.pillar + ' is within reach.' });
    });

    if (run.rawAuth > AD.SOFT_CAP && Object.keys(run.locked).length < 2) {
      out.push({ level: 'warn', text: 'Decisions alone cannot carry you past ' + AD.SOFT_CAP +
        '. The rest has to be taken from a branch of government.' });
    }
    return out.slice(0, 2);
  }
};
