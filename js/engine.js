/* ============================================================
   AMERICAN DICTATOR, engine.js
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
    }
    if (run.vpAmbition === undefined) run.vpAmbition = 0;
    // Migrate saves written before second terms existed.
    if (run.term === undefined) {
      run.term = 1;
      run.termStart = 1;
      run.termLength = run.maxMonths;
    }
    if (!run.stats) run.stats = { grabs: 0, restraints: 0, timeouts: 0, peakCash: run.cash, briefings: 0, bought: 0 };
    if (!run.assets) run.assets = [];      // saves written before the corruption track
    if (!run.clauses) run.clauses = [];    // saves written before the constitution ledger
    if (!run.renos) run.renos = [];        // saves written before the residence track
    if (!run.senate || !run.senate.length) run.senate = AD.makeSenate(run); // pre-senate saves
    if (!run.press || !run.press.length) run.press = AD.makePress();       // pre-press saves
    if (!run.streets || !run.streets.length) run.streets = AD.makeStreet(); // pre-street saves
    if (!run.wars) run.wars = [];           // pre-war saves
    if (typeof run.purse !== 'number') run.purse = AD.START_PURSE;   // pre-treasury saves
    // Boredometer migration. Pre-flip saves stored run.fun = ENTERTAINMENT
    // (high was good); the meter is now run.bored = BOREDOM (low is good), so an
    // old save's value is carried across inverted rather than reset.
    if (typeof run.bored !== 'number') {
      run.bored = (typeof run.fun === 'number') ? AD.clamp(100 - run.fun, 0, 100) : AD.BORED_START;
      delete run.fun;
    }
    if (!run.allies) run.allies = {};       // pre-alliance saves
    if (!run.conquests) run.conquests = {}; // pre-conquest saves
    if (!run.judges || !run.judges.length) run.judges = AD.makeCourts(); // pre-courts saves
    if (!run.tariffs) run.tariffs = [];      // pre-economy saves
    if (!run.relations) run.relations = {};
    if (!run.pardoned) run.pardoned = [];    // pre-pardon saves
    if (!run.doctrineOffered) run.doctrineOffered = [];
    if (!run.wounded) run.wounded = {};
    if (!run.memories) run.memories = [];   // pre-callback saves

    this.run = run;
    this.card = null;
    this.lastScore = null;
    this.lastDrift = null;
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

    // The last November of a term always wins, but WHICH November card it is
    // depends on the term, so this must go through the term-aware scheduler.
    // Term one gets the Re-election (survivable); term two gets the finale.
    if (AD.termMonth(run) >= run.termLength - 1) {
      // Once the election card has been shown, an election FOLLOW-UP (the
      // concede-or-contest decision) queued by its resolution takes precedence.
      if (run.flags.electionShown && run.queue.length) {
        this.card = run.queue.shift();
        return this.card;
      }
      const c = AD.scriptedFor(run);
      if (c) run.flags.electionShown = true;
      this.card = c;
      return this.card;
    }

    // Forced beats (pillar backlash, the second inaugural) jump the queue.
    if (run.queue.length) {
      this.card = run.queue.shift();
      return this.card;
    }

    const scripted = AD.scriptedFor(run);
    if (scripted) { this.card = scripted; return this.card; }

    // A due CALLBACK, something you did months ago coming back with your own
    // words attached, outranks the random deck. See memory.js.
    if (AD.callbackFor) {
      const cb = AD.callbackFor(run);
      if (cb) { this.card = cb; return this.card; }
    }

    // A bored President stops waiting and does something himself.
    if (AD.wanderFor) {
      const w = AD.wanderFor(run);
      if (w) { this.card = w; return this.card; }
    }

    // A subsystem in an extreme state generates its own bespoke crisis.
    const reactive = AD.reactiveFor(run);
    if (reactive) { this.card = reactive; return this.card; }

    // Section pop-ups: a live system (economy, pardons, phone, war room,
    // street, press, congress, base, money) reaches out, paced to punctuate.
    // Checked BEFORE the scandal and the random deck so nothing starves them.
    if (AD.sectionEventFor) {
      const section = AD.sectionEventFor(run);
      if (section) { this.card = section; return this.card; }
    }

    // The Saint Ambrose scandal now yields to the pop-ups above.
    if (AD.cayFor) {
      const cay = AD.cayFor(run);
      if (cay) { this.card = cay; return this.card; }
    }

    let card = AD.pickCard(run);

    // Deck exhausted late in a long term, recycle everything except the
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
    if (card.sfx) out.sfx = card.sfx;        // a card can name its own sound
    out.wasWild = !!choice.wild;             // the President's reaction reads this (voice.js)
    const baseAtStart = run.meters.base;     // enforce the per-decision base creep cap below

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
      if (d.secondTerm) {                   // re-election won, the run continues
        out.secondTerm = this.beginSecondTerm(d.secondTerm);
        return out;
      }
      eff = Object.assign({}, d.eff);
      out.res = d.res;
      out.tabloid = d.tabloid || null;
    } else {
      eff = Object.assign({}, choice.eff || {});
      // AD.ct returns the localized resolution line, or the English one written on
      // the card when there is no translation for this language.
      out.res = (AD.ct ? AD.ct(card, 'res', index) : choice.res) || '';
    }

    /* --- Cost --- */
    if (choice.cost) run.cash -= choice.cost;

    /* --- The Saint Ambrose arc. Heat is charged separately from the meters,
           so a choice can be cheap tonight and expensive for two years. --- */
    if (choice.cayHeat) {
      out.cayHeat = AD.bumpHeat(run, choice.cayHeat);
      out.cayDelta = choice.cayHeat;
    }

    /* --- Doctrines, then owned holdings, reshape the effect before it lands.
           Order matters: doctrines are constitutional theory, corruption is
           money, and money gets the last word. --- */
    AD.applyDoctrines(run, eff);
    AD.applyPassivesToEffect(run, eff);

    /* The base rewards offence and chaos, see AD.applyBaseAppetite. This runs
       AFTER money (a bought media empire multiplies the reach of the red meat)
       and BEFORE the meters land, so the amplified figure is what the crowd
       actually feels and what the resolution reports. */
    AD.applyBaseAppetite(eff, choice);

    /* THE BASE MISREADS YOU. Occasionally the restrained, correct choice is
       received as devastating strength and helps you anyway. See misread.js. */
    if (AD.applyMisread) AD.applyMisread(run, choice, eff, out);

    /* THE SPECTACLE. The wild, silly option keeps the easily-bored President
       entertained; every other, more sober choice is another dull afternoon that
       bores him a little. Feeding the base hard also amuses him. He must stay
       AT OR BELOW the boredom ceiling by the end, or he loses interest and
       wanders off. Low Boredometer is good. */
    if (AD.moveFun) {
      const spice = choice.wild ? 6 : ((eff.base || 0) >= 6 ? 1 : -1);
      const beforeBored = AD.boredom(run);
      AD.moveFun(run, spice);                       // positive spice = LESS bored
      const bd = AD.boredom(run) - beforeBored;
      if (bd) out.deltas.bored = bd;                // surfaces as a 🥱 delta chip
    }

    /* --- Apply to meters --- */
    AD.FKEYS.forEach(k => {
      if (run.locked[k]) return;                 // captured pillars are frozen
      const before = run.meters[k];
      let delta = eff[k] || 0;

      /* THE BASE MOVES IN INCHES (see AD.BASE_GAIN_SCALE). Every base delta,
         up or down, is scaled so a headline +7 lands as well under a point.
         Scaling BOTH directions keeps the base economy proportional: if only
         gains shrank, the unscaled losses would crater the movement. */
      if (k === 'base' && delta) delta = delta * AD.BASE_GAIN_SCALE;

      /* INSTITUTIONAL RESISTANCE, the last stretch of a capture is the
         hardest. A branch that is already mostly yours resists each further
         point; the die-hards are the ones left. Without this the deck's sheer
         volume of positive options made capture nearly automatic (optimal play
         hit a 94% win rate on the 300-card deck). Applies to gains only, and
         only to capturable branches, the Base has its own dynamics. */
      const f = AD.faction(k);
      if (delta > 0 && f.capturable) {
        if (before >= AD.RESIST_HARD)      delta = Math.ceil(delta * AD.RESIST_HARD_MULT);
        else if (before >= AD.RESIST_SOFT) delta = Math.ceil(delta * AD.RESIST_SOFT_MULT);
      }

      let after = AD.clamp(before + delta, 0, 100);
      // The base creeps, never jumps, cap how far a single decision can raise it.
      if (k === 'base' && after > before + AD.BASE_RISE_CAP) after = before + AD.BASE_RISE_CAP;
      if (k === 'base' && AD.hasDoctrine(run, 'cult')) after = Math.max(34, after);

      /* GUARDRAIL, no single decision is the killing blow (see AD.DECISION_FLOOR).
         A meter that was healthy can't be shoved below the survival floor by one
         choice, and no choice ever zeroes a live meter. A surprising −14 leaves
         you critical with a turn to recover, not dead on the spot. */
      if (delta < 0 && before > 0) {
        if (before >= AD.DECISION_FLOOR && after < AD.DECISION_FLOOR) { after = AD.DECISION_FLOOR; out.closeCall = k; }
        if (after <= 0) { after = 1; out.closeCall = k; }
      }

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
      // NB: authCapped lives on `out`, not `out.deltas`, deltas is persisted
      // into the crisis log and must only ever contain meter keys.
    }

    /* --- Constitutional breaches --- */
    if (choice.breaks) {
      const b = AD.recordBreach(run, choice.breaks);
      if (b) {
        out.breach = b;
        if (b.complete) {
          out.deltas.cash = (out.deltas.cash || 0) + b.bounty;
          out.tabloid = b.tabloid;               // Russia settles up
        }
      }
    }

    /* --- Story flags & forced follow-ups --- */
    if (choice.flag) run.flags[choice.flag] = true;
    if (card.flag)   run.flags[card.flag] = true;
    // Reactive/system cards can carry a side effect that mutates a subsystem
    // directly (purge the named rebel senator, start the deflection war, etc.).
    if (typeof choice.act === 'function') { try { choice.act(run); } catch (e) {} }

    /* THE GAME REMEMBERS. A choice carrying `remember` files a memory that
       comes back months later as its own crisis, naming what you actually did.
       See memory.js. */
    if (choice.remember && AD.remember) {
      const rm = choice.remember;
      AD.remember(run, rm.type, rm.data || {}, rm.delay);
    }
    if (choice.queue) choice.queue.forEach(id => {
      const c = AD.CARDS.find(x => x.id === id);
      if (c) run.queue.push(c);
    });

    // THE BASE CREEPS. Enforce the cap on the TOTAL rise this decision produced
    //, the choice's own effect PLUS any base a side-effect (a tariff, a war, a
    // pardon) added, so nothing can leap the movement forward more than
    // AD.BASE_RISE_CAP in a single turn.
    if (!run.locked.base && run.meters.base > baseAtStart + AD.BASE_RISE_CAP) {
      run.meters.base = baseAtStart + AD.BASE_RISE_CAP;
      out.deltas.base = run.meters.base - baseAtStart;
    }

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

    // 3. Total authority, but ONLY a second-term president can consummate it.
    //    A first term is near-impossible to win: hitting Authority 100 in term one
    //    makes you dominant, not dictator, you must be re-elected with all of it
    //    behind you and finish the job in a second term. So term one holds the
    //    coronation and plays on toward the election.
    if (run.authority >= 100) {
      if (run.term >= 2) { out.ending = 'dictator'; this.finish(out.ending); return out; }
      run.flags = run.flags || {};
      if (!run.flags.brinkShown) {
        run.flags.brinkShown = true;
        out.tabloid = {
          head: 'ONE TERM IS NOT ENOUGH',
          sub: 'Total control of the machinery, and a Constitution that still, technically, expires in November',
          body: 'You have every lever in your hand. But the office is, on paper, still temporary, and a ' +
                'first-term strongman is just a president having a very good year. To make it permanent you ' +
                'have to win it again, with all of this behind you, and then never hand it back. Survive to the election.'
        };
      }
    }

    // 4. New doctrine crossed? Queue it as a three-way DECISION card (sign /
    //    bin / the comedy option) rather than granting it silently.
    const newDoc = AD.checkDoctrineUnlock(run);
    if (newDoc) run.queue.push(AD.buildDoctrineCard(run, newDoc));

    AD.saveRun(run);
    return out;
  },

  /* ---------- SECOND TERM -------------------------------------------------
     Winning re-election does not end the run, it restarts the arc on a
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
    // twice the runway, so it has to cost more than it gives, otherwise the
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
        body: 'This is the outcome nobody had a plan for. Not stolen, not blocked, not postponed, voted for, ' +
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

    // First-run training wheels: floor the dying meter, don't end the term.
    if (AD.inGrace(run)) {
      run.meters[dead.key] = 20;
      return {
        saved: dead.key,
        tabloid: {
          head: 'A CLOSE ONE',
          sub: 'Training term, ' + dead.name.toLowerCase() + ' pulled back from the brink',
          body: 'In a real administration that would have been the end of it. For your first few months the ' +
                'guardrails are on: a power centre that hits zero is quietly restored so you can see what a ' +
                'mistake costs without the mistake costing you the presidency. The guardrails come off shortly. ' +
                'Watch which meter nearly went, that is the one the country will actually use against you.'
        }
      };
    }

    if (AD.hasDoctrine(run, 'immunity') && !run.shieldUsed) {
      run.shieldUsed = true;
      run.meters[dead.key] = 22;
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
    // A COLLAPSE IS NO LONGER FATAL. The term runs its full course to the
    // election; a power centre that hits zero is floored and left wounded (which
    // drags hard on your ballot standing), but it does not end the presidency.
    // The voters, not a single zeroed meter, decide a first term.
    run.wounded = run.wounded || {};
    const firstTime = !run.wounded[dead.key];
    run.wounded[dead.key] = (run.wounded[dead.key] || 0) + 1;
    run.meters[dead.key] = AD.COLLAPSE_FLOOR;
    if (!firstTime) return { saved: dead.key };
    return {
      saved: dead.key,
      tabloid: {
        head: dead.short + ' COLLAPSES',
        sub: dead.name + ' hits bottom; the administration limps on toward the ballot',
        body: 'In an older, more decisive republic this would have been the end of it. It is not the end of it. ' +
              'The ' + dead.name.toLowerCase() + ' has turned on you completely and you are still, technically, ' +
              'the President, which is the kind of technicality this whole enterprise runs on. It will cost you at ' +
              'the election. Everything costs you at the election now. That is what the election is for.'
      }
    };
  },

  /* ---------- ADVANCE ----------------------------------------------------- */
  /* Returns an ending id if the passage of time alone killed you. */
  advance () {
    const run = this.run;
    if (run.over) return null;
    run.month += 1;

    // Snapshot the meters so we can tell the player what the PASSAGE OF TIME did
    // to them this month (base decay, backlash, tick drains) as a plain-language
    // brief, nothing here is the player's choice, so it should never be a
    // surprise. Filled in at the end of advance() as this.lastDrift.
    const preTurn = {}; AD.FKEYS.forEach(k => { preTurn[k] = run.meters[k]; });

    // Standing Emergency: a point of authority every month, for nothing.
    // Still raw authority, so it grinds against the soft cap like everything else.
    if (AD.hasDoctrine(run, 'emergency')) {
      run.rawAuth += 1;
      AD.recomputeAuthority(run);
    }

    // A movement that is not fed every single month cools off on its own.
    // NB: deliberately NOT harsher in term two, 95 months of accelerated
    // decay made zero-base swallow 40% of all endings.
    if (!run.locked.base) {
      let b = run.meters.base + AD.BASE_DECAY;
      if (AD.hasDoctrine(run, 'cult')) b = Math.max(34, b);
      run.meters.base = AD.clamp(b, 0, 100);
    }

    // VP AMBITION, the non-fatal replacement for the old max-base death. A
    // movement running hot lets the Vice President's stock rise; a cooler base,
    // or humbling him via the rivalry event, brings it back down. It never ends
    // the game on its own, it surfaces as a manageable crisis (see reactive.js).
    if (!run.locked.base) {
      const b = run.meters.base;
      let a = run.vpAmbition || 0;
      if (b >= 85) a += 5; else if (b >= 72) a += 2; else a -= 3;
      run.vpAmbition = AD.clamp(a, 0, 100);
    }

    /* Historic difficulty: everything sags on its own. */
    const drift = this.diff().drift;
    if (drift) {
      AD.FKEYS.forEach(k => {
        if (run.locked[k] || k === 'base') return;
        run.meters[k] = AD.clamp(run.meters[k] + drift, 0, 100);
      });
    }

    /* ESCALATING BACKLASH, the core difficulty curve.
       Every branch you capture costs you 1 point per month on the branch you
       are currently closest to capturing. The institution with the most to
       lose fights hardest, and it fights harder for every colleague it has
       already watched fall. It targets rather than carpet-bombs, so the
       pressure is predictable enough to plan around and specific enough to
       make the third pillar the hardest thing in the game. */
    /* Backlash has three sources, added (never multiplied, compounding them
       gave Historic 4-6 points of drain a month and made capture impossible):

       1. PILLARS , every branch taken makes the next one fight harder.
       2. TERM    , a second term is permanently worse.
       3. AUTHORITY, the continuous brake. Resistance scales with how
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

    // Holdings pay out, drip and settle before the survival checks, then the
    // residence sends its bill, which is charged AFTER income so a mint can
    // pay for the ballroom in the same month it earns.
    this.lastTick = AD.corruptionTick(run);
    this.lastUpkeep = AD.renovationTick(run);
    /* ── THE SYSTEMIC GUARDRAIL ─────────────────────────────────────────────
       The one recurring hazard, fixed once. The three management-screen ticks
       below (the caucus, the press room, public order) each drain a meter when
       their system is neglected. Individually each is now mild, but they STACK,
       and stacked background drain forces a player to spend card-choices
       defending institutions until the Base, which cools on its own every month,
       collapses unfed. That cascade got hand-patched three separate times, once
       per screen. This caps their COMBINED monthly loss to any single meter at
       AD.MGMT_LOSS_CAP, so no present or future combination of these opt-in
       systems can ever be the thing that starves a meter to death. Background
       systems create pressure; only a DECISION lands the killing blow.
       (The intended costs above, base decay, backlash, exposure, Residence
       scrutiny, are the real difficulty curve and are deliberately NOT capped.) */
    const preMgmt = {};
    AD.FKEYS.forEach(k => { preMgmt[k] = run.meters[k]; });
    this.lastSenate = AD.senateTick(run);
    this.lastPress = AD.pressTick(run);
    this.lastStreet = AD.streetTick(run);
    this.lastCourts = AD.courtsTick(run);
    AD.FKEYS.forEach(k => {
      const loss = preMgmt[k] - run.meters[k];
      if (loss > AD.MGMT_LOSS_CAP) run.meters[k] = preMgmt[k] - AD.MGMT_LOSS_CAP;
    });
    AD.callTick(run);   // refill the monthly phone allowance
    AD.rallyTick(run);  // refill the monthly rally allowance
    AD.summitTick(run); // refill the monthly summit allowance
    if (AD.pardonTick) AD.pardonTick(run);   // and the monthly clemency allowance

    /* THE WORLD'S OPINION LEAKS INWARD. Standing feeds Congress, the Press, the
       Base and the Street every month, small, so a term of insults is a slow
       puncture in four rooms at once. See diplomacy.js. */
    if (AD.diplomacyTick) this.lastDiplo = AD.diplomacyTick(run);
    this.lastEcon = AD.economyTick(run);  // matured tariffs backfire
    if (AD.marketTick) AD.marketTick(run); // move the S&P and the family business
    this.lastWar = AD.warTick(run);   // ongoing wars resolve into victory or quagmire
    // A story hot enough to leak does damage without needing a card.
    this.lastLeak = AD.cayTick(run);

    // Crossing the fortune line is announced once, and does not end the run, 
    // it is banked and cashed in at whatever ending you eventually reach.
    this.pendingFortune = null;
    if (!run.flags.fortune && run.cash >= AD.wealthGoal(run)) {
      run.flags.fortune = true;
      this.pendingFortune = {
        head: 'THE FORTUNE SECURED',
        sub: 'Personal fortune passes $' + AD.wealthGoal(run) + 'bn while in office; disclosure filed on a Friday',
        body: 'The figure is not disputed, concealed or even especially hidden. It is on a form, ' +
              'signed, in a public archive, and it is larger than the annual budget of eleven ' +
              'federal agencies. Whatever else happens now, removal, defeat, a third term, ' +
              'it happens to a man who has already won the other game entirely.'
      };
    }

    // What the month did on its own, net meter drift + the named causes, so the
    // next card can carry a one-line "since last month" brief.
    this.lastDrift = AD.monthBrief(run, preTurn, this);

    // The clock can starve a meter to death without you choosing anything.
    const collapse = this.checkCollapse();
    if (collapse.ending) { this.finish(collapse.ending); return collapse.ending; }
    this.pendingShield = collapse.saved ? collapse.tabloid : null;

    /* THE PRESIDENT WANDERS OFF. Boredom above AD.BORED_DANGER is not a losing
       SCORE (that is the end-of-term ceiling), it is a losing STATE: three
       straight months that bored and he resigns mid-term, wanders off, and does
       something silly instead of the job. Warned the first two months, so like
       every death in this game it comes from sustained neglect and never from
       one surprise. The Phone is the lever that resets the streak. */
    this.pendingBored = null;
    if (!run.over && AD.boredom(run) > AD.BORED_DANGER) {
      run.boredStreak = (run.boredStreak || 0) + 1;
      if (run.boredStreak >= AD.BORED_DANGER_MONTHS) { this.finish('bored'); return 'bored'; }
      const left = AD.BORED_DANGER_MONTHS - run.boredStreak;
      this.pendingBored = {
        head: run.boredStreak === 1 ? 'THE PRESIDENT IS RESTLESS' : 'THE PRESIDENT IS BARELY IN THE ROOM',
        sub: 'Boredom at ' + AD.boredom(run) + ', over the danger line for ' + run.boredStreak +
             (run.boredStreak === 1 ? ' month' : ' months') + '; ' + left +
             (left === 1 ? ' more and he walks' : ' more and he walks'),
        body: 'He has stopped reading the folders. He is asking who else is on the schedule and whether any of ' +
              'it is interesting. ' + (left === 1
                ? 'One more month this bored and he resigns, wanders off, and finds his own entertainment. Get him on the Phone.'
                : 'Two more months this bored and he is gone. The Phone is the fastest way to bring him back into the room.')
      };
    } else if (!run.over) {
      run.boredStreak = 0;
    }

    // A directed crisis (see objectives.js) that missed its deadline resolves
    // here, once a month, after everything else the passage of time did.
    if (AD.tickObjectiveExpiry) AD.tickObjectiveExpiry(run);

    AD.saveRun(run);
    return null;
  },

  /* ---------- FINISH ------------------------------------------------------ */
  finish (endingId) {
    const run = this.run;
    if (run.over) return this.lastScore;      // score and file each term exactly once

    /* THE SECOND OBJECTIVE. The fortune is cashed in at whatever ending you
       reached: it upgrades a win to 'the-full-set' and converts a loss into
       'the-fortune'. Ten billion dollars is a parachute, and it should be, 
       that is the whole joke. */
    if (run.cash >= AD.wealthGoal(run) && endingId !== 'the-fortune' && endingId !== 'the-full-set') {
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

    if (AD.inGrace(run)) {
      out.push({ level: 'good', text: 'Training term: the guardrails are on for ' +
        (run.graceUntil - run.month + 1) + ' more month' + (run.graceUntil - run.month === 0 ? '' : 's') +
        '. Nothing can end your presidency yet.' });
    }

    if ((run.vpAmbition || 0) >= 60 && !run.locked.base) {
      out.push({ level: 'warn', text: 'The Vice President is polling above you inside the base.' });
    }

    AD.FACTIONS.forEach(f => {
      if (run.locked[f.key]) return;
      const v = run.meters[f.key];
      if (v <= 16 && f.lowWarn) out.push({ key: f.key, level: 'crit', text: f.lowWarn });
      else if (f.capturable && v >= 85) out.push({ key: f.key, level: 'good', text: f.pillar + ' is within reach.' });
    });

    // The Cay only speaks up once it is genuinely running, so it reads as a
    // story that grew rather than a permanent piece of furniture.
    const heat = AD.cayHeat(run);
    if (heat >= AD.CAY_LEAK_AT) {
      out.push({ level: heat >= 7 ? 'crit' : 'warn',
        text: 'Saint Ambrose is ' + AD.cayLabel(run).toLowerCase() + '. It leads again tonight.' });
    }

    if (run.rawAuth > AD.SOFT_CAP && Object.keys(run.locked).length < 2) {
      out.push({ level: 'warn', text: 'Decisions alone cannot carry you past ' + AD.SOFT_CAP +
        '. The rest has to be taken from a branch of government.' });
    }
    return out.slice(0, 2);
  }
};

/* ============================================================
   THE MONTHLY BRIEF, "what changed while you weren't choosing."
   Turns a month's passive drift (base decay, backlash, tick drains,
   backfires, war resolutions, holdings) into a short, plain-language
   line so the passage of time is never a silent surprise. Returns
   null when nothing noteworthy happened. Consumed by ui.showBrief.
   ============================================================ */
AD.monthBrief = function (run, pre, eng) {
  const drift = {};
  AD.FKEYS.forEach(k => { const d = run.meters[k] - (pre[k] || 0); if (d) drift[k] = d; });
  const causes = [];
  const name = k => AD.faction(k).name.toLowerCase();

  if (drift.base < 0) causes.push('the base cooled');
  if (run.pressureOn && drift[run.pressureOn] < 0) causes.push('backlash pressed ' + name(run.pressureOn));
  if (eng.lastEcon && eng.lastEcon.backfires && eng.lastEcon.backfires.length) {
    causes.push('a tariff on ' + eng.lastEcon.backfires[0].nation.name + ' backfired');
  }
  if (eng.lastWar && eng.lastWar.resolved && eng.lastWar.resolved.length) {
    const w = eng.lastWar.resolved[0];
    causes.push('the war in ' + w.target.name + (w.won ? ' was won' : ' turned into a quagmire'));
  }
  if (eng.lastTick && eng.lastTick.deltas && (eng.lastTick.deltas.press < 0 || eng.lastTick.deltas.courts < 0)) {
    causes.push('your holdings drew scrutiny');
  }
  if (eng.lastUpkeep && eng.lastUpkeep.arrears) causes.push('the Residence bills came due');
  if (eng.lastTick && eng.lastTick.cash > 0.001) causes.push('holdings paid out');

  if (!Object.keys(drift).length && !causes.length) return null;
  return { drift, causes: causes.slice(0, 3) };
};
