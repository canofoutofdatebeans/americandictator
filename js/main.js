/* ============================================================
   AMERICAN DICTATOR, main.js
   Bootstrap, input wiring, and the turn loop that ties the
   engine to the UI.
   ============================================================ */

AD.Game = {

  setup: null,      // in-progress character creation
  pending: null,    // queued overlays to show after a resolution

  /* ---------- boot ---------- */
  init () {
    const U = AD.UI;
    U.settings = AD.loadSettings();
    AD.Music.init(U.settings);
    this.applySettings();
    this.buildSetupScreen();
    this.buildHowTo();
    AD.UI.installOverlayCloses();
    this.wire();

    const bt = U.el('build-tag'); if (bt) bt.textContent = 'build ' + AD.BUILD;
    this.refreshTitle();
    U.show('title');
  },

  applySettings () {
    const s = AD.UI.settings;
    document.documentElement.setAttribute('data-motion', s.motion ? 'off' : 'on');
    document.documentElement.setAttribute('data-cb', s.cb ? 'on' : 'off');
    ['timer', 'motion', 'clean', 'pack', 'cb', 'haptics', 'music'].forEach(k => {
      const el = AD.UI.el('opt-' + k);
      if (el) el.checked = !!s[k];
    });
    this.applyMute();
  },

  /* The master mute button silences BOTH the sound-effects synth and the
     background music, and is honoured on every future cue. */
  applyMute () {
    const s = AD.UI.settings;
    AD.Audio.muted = !!s.muted;
    // One source of truth for whether music should be audible: on only when the
    // master mute is off AND the music setting is on. setOn(false) also flips the
    // internal flag, so a later tap can't quietly resume a muted term.
    if (AD.Music) AD.Music.setOn(!s.muted && !!s.music);
    const btn = AD.UI.el('mute-btn');
    if (btn) { btn.textContent = s.muted ? '🔇' : '🔊'; btn.classList.toggle('muted', !!s.muted); }
  },

  toggleMute () {
    AD.UI.settings.muted = !AD.UI.settings.muted;
    AD.saveSettings(AD.UI.settings);
    this.applyMute();
  },

  /* Fire a short vibration on capable devices, gated on the setting and the
     reduce-motion preference. A no-op on desktop. */
  haptic (pattern) {
    const s = AD.UI.settings;
    if (!s || !s.haptics || s.motion) return;
    if (navigator.vibrate) { try { navigator.vibrate(pattern); } catch (e) {} }
  },

  /* ---------- character creation ---------- */
  buildSetupScreen () {
    this.setup = {
      name: '', party: '', color: AD.PARTY_COLORS[0],
      portrait: { hair: 0, skin: 0, tie: 0, suit: 0, build: 2, sex: 0 },
      difficulty: 'standard',
      mutators: [],
      legacy: AD.inheritance('standard')   // the mess the last administration left (scales with difficulty)
    };
    AD.UI.renderInheritance(this.setup.legacy);
    AD.UI.el('mutators').innerHTML = AD.MUTATORS.map(m =>
      `<button type="button" class="mut" data-mut="${m.id}" title="${m.blurb}">${m.glyph} ${m.label}</button>`).join('');
    AD.UI.el('swatches').innerHTML = AD.PARTY_COLORS.map((c, i) =>
      `<div class="sw ${i === 0 ? 'on' : ''}" data-color="${c}" style="background:${c}"></div>`).join('');
    AD.UI.el('diff-hint').textContent = AD.DIFFS.standard.hint;
    this.paintPortrait();
  },

  paintPortrait () {
    AD.UI.el('portrait-slot').innerHTML =
      AD.UI.portraitSVG(this.setup.portrait, this.setup.color);
  },

  buildHowTo () {
    AD.UI.el('howto-body').innerHTML = `
      <h4>Two Ways to Win</h4>
      <p><b>Take the country</b> (Authority 100) or <b>take the money</b> (a personal fortune, $12B to
      $20B depending on difficulty). Doing both is the best ending in the game. You get a full term,
      then an election: win it for a second term, and the second term decides everything.</p>

      <h4>The Winning Move (read this one)</h4>
      <p>Authority from <em>decisions</em> is <b>hard capped at ${AD.SOFT_CAP}</b>, the white line on
      the bar. The rest of the way to 100 can only come from <b>capturing branches</b>: drive
      <b>Congress</b>, <b>The Courts</b>, <b>The Press</b> or <b>The Street</b> up to 100 and it
      becomes a captured <b>Pillar</b>, worth <b>+22 Authority that ignores the cap</b>. You need
      about <b>three</b>. So the winning play is to <b>commit</b>: pick three branches and push them
      hard, feeding the base just enough to survive. Spreading yourself thin across every system,
      reacting to whatever lands, is exactly how you end up <em>merely President</em>, which is a loss.</p>

      <h4>The Five Power Centres</h4>
      <ul>
        <li><b>🔥 The Base</b>, your fuel, and it cools by <b>${Math.abs(AD.BASE_DECAY)} every month</b>
        unless you feed it. At <b>0</b> you are primaried out and your term is over, so keep it fed.
        A roaring base powers your transgressions and your Authority. The Base cannot be captured.</li>
        <li><b>🏛️ Congress</b>, <b>⚖️ The Courts</b>, <b>📰 The Press</b>, <b>🪧 The Street</b>, 
        at <b>0</b> each one ends your term in its own way. At <b>100</b> each becomes a
        <b>Pillar</b>: permanently captured, frozen, immune to everything, and worth
        <b>+25 Authority</b> that ignores the cap.</li>
      </ul>

      <h4>Pillars &amp; Backlash</h4>
      <p>Two pillars plus a maxed-out cap is a win. Four pillars is a win on its own. But every
      capture triggers a <b>backlash</b>, the institutions you have <em>not</em> taken can see
      exactly what happened to the one you did, and they start defending themselves.</p>

      <h4>Doctrines</h4>
      <p>Cross an Authority threshold and you unlock a permanent legal theory that changes the rules.
      There are five. The third one gives you a point of Authority every month for nothing, which is
      also how it works in real life.</p>

      <h4>The Other Objective: the Fortune</h4>
      <p>There are two ways to win. Take the country, or take the money. Tap the cash figure to
      open <b>Private Interests</b> and spend your fortune on platforms, lawsuits, senators,
      judges and income streams.</p>
      <p>Holdings never grant Authority, money cannot buy the presidency outright. What it buys
      is <b>leverage</b>: shields that blunt incoming damage, multipliers on your gains, a monthly
      drip on the branch you are trying to capture, and the income to buy more of all three.</p>
      <p>The target scales with difficulty, <b>$12B</b> on Rookie, <b>$15B</b> on Standard, <b>$20B</b> on Historic.
      Reaching it doesn't end your term, it is banked and cashed in at
      whatever ending you reach. It upgrades a win, and it <em>converts a loss into a win</em>.
      You can be removed from office and still come out ahead.</p>

      <h4>The Clock</h4>
      <p>Forty-eight months. The Midterms land around month 23 and are scored on whatever you chose
      to make them about. The Election is the final card and there are three doors out of it, 
      one of them only opens above Authority 62.</p>`;
  },

  /* ---------- start / resume ---------- */
  /* Guard the one action that destroys a saved term. If a term is in progress,
     make the player confirm before a New Term overwrites it. This is the other
     half of the "I lost my progress" fix: the save was always there, but it was
     too easy to start over on top of it. */
  begin () {
    const saved = AD.loadRun();
    if (saved && !saved.over) {
      const esc = s => String(s || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
      this.confirm({
        title: 'Abandon your current term?',
        msg: 'A term is already in progress: <b>Pres. ' + esc(saved.president || saved.name) + '</b>, ' + AD.dateLabel(saved.month) +
             '. Starting a new one <b>erases it for good</b>. Use <b>Resume Term</b> on the title screen to go back to it instead.',
        yes: 'Abandon and start new',
        onYes: () => this._begin()
      });
      return;
    }
    this._begin();
  },

  _begin () {
    clearTimeout(this.endingTimer); this.endingTimer = null;
    this.pending = []; this.awaitingAdvance = false; this.drawAfterOverlays = false;
    const s = this.setup;
    const name = (AD.UI.el('in-name').value || '').trim() || 'Ronald J. Trumbull';
    const party = (AD.UI.el('in-party').value || '').trim() || 'The Patriot Party';
    const typed = (AD.UI.el('in-seed').value || '').trim();
    const run = AD.newRun({
      name, party, color: s.color, portrait: s.portrait,
      difficulty: s.difficulty, legacy: s.legacy, mutators: s.mutators,
      seed: typed || undefined
    });
    AD.Seed.set(run.seed);                 // same seed + same choices = same term
    AD.Engine.start(run);
    AD.Engine.applyInheritance(run);    // start the term in the country you were left
    AD.applyMutators(run, s.mutators);  // optional modifiers reshape the opening
    // First-ever run on this browser gets a short training grace (see AD.inGrace).
    if (!AD.store.read(AD.PLAYED_KEY, false)) {
      run.graceUntil = run.month + 4;
      AD.store.write(AD.PLAYED_KEY, true);
    }
    AD.saveRun(run);
    this.enterGame();
  },

  resume () {
    clearTimeout(this.endingTimer); this.endingTimer = null;
    this.pending = []; this.awaitingAdvance = false; this.drawAfterOverlays = false;
    const saved = AD.loadRun();
    if (!saved) return;
    AD.Seed.restore(saved);                // land on the same RNG position
    AD.Engine.start(saved);
    this.enterGame();
  },

  /* Rebuild the title menu around whether a term is in progress. When there is
     a live save, RESUME becomes the headline action (top of the menu, primary
     styling, showing who and when), and starting fresh is demoted to a plain
     "New Term". When there is no save, Take the Oath is the primary action.
     This is what makes returning to a term obvious instead of hidden. */
  refreshTitle () {
    const U = AD.UI;
    const cont = U.el('btn-continue');
    const fresh = document.querySelector('#screen-title [data-act="new"]');
    if (!cont || !fresh) return;
    const saved = AD.loadRun();
    if (saved && !saved.over) {
      cont.hidden = false;
      cont.classList.add('btn-primary');
      cont.textContent = '';
      const lead = document.createElement('span'); lead.className = 'btn-lead'; lead.textContent = 'Resume Term';
      const sub = document.createElement('small');
      sub.textContent = 'Pres. ' + (saved.president || saved.name || 'You') + ' · ' + AD.dateLabel(saved.month);
      cont.append(lead, sub);
      const menu = cont.parentNode;
      if (menu && menu.firstElementChild !== cont) menu.insertBefore(cont, menu.firstElementChild);
      fresh.classList.remove('btn-primary'); fresh.classList.add('btn-ghost'); fresh.textContent = 'New Term';
    } else {
      cont.hidden = true;
      cont.classList.remove('btn-primary');
      fresh.classList.add('btn-primary'); fresh.classList.remove('btn-ghost'); fresh.textContent = 'Take the Oath';
    }
  },

  enterGame () {
    AD.UI.show('game');
    AD.UI.renderHUD();
    this.nextCard();
    // First term ever: teach before the clock starts.
    setTimeout(() => AD.Tutorial.start(false), 260);
  },

  nextCard () {
    const card = AD.Engine.draw();
    if (!card) { this.finishRun('merely-president'); return; }
    AD.UI.renderCard(card);
    AD.UI.showBrief(AD.Engine.lastDrift);   // what the passing month did on its own
  },

  /* ---------- a decision ---------- */
  decide (index, expired) {
    AD.UI.stopTimer();
    const out = AD.Engine.choose(index);

    if (out.ending) {
      // choose() already called Engine.finish(), so the scorecard exists now.
      // Capture it immediately rather than reading engine state later, by the
      // time the ending screen animates in, the player may have started a new run.
      this.pending = [];
      this.awaitingAdvance = false;
      AD.UI.renderResolution(out, expired, true);
      this.scheduleEnding(AD.Engine.lastScore);
      return;
    }

    // Queued overlays are NOT shown on a timer, a timed popup can land after
    // the player has already tapped through to the next crisis. They gate the
    // turn instead: "Next Crisis" plays them out first, then advances.
    this.pending = [];
    this.awaitingAdvance = true;
    if (out.tabloid)  this.pending.push({ type: 'tabloid',  data: out.tabloid });
    if (out.doctrine) this.pending.push({ type: 'doctrine', data: out.doctrine });

    /* --- audio + haptics: the most significant thing that happened, once --- */
    const A = AD.Audio;
    this.haptic(out.pillar ? [0, 40, 30, 70] : 12);
    if (out.pillar)        { A.play('pillar'); AD.UI.captureFlash(out.pillar); }
    else if (out.sfx)      A.play(out.sfx);
    else if (out.breach)   A.play('clause');
    else if (out.doctrine) A.play('doctrine');
    else if (out.deltas.cash > 0) A.play('money');
    else {
      const net = AD.FKEYS.reduce((a, k) => a + (out.deltas[k] || 0), 0);
      A.play(net >= 6 ? 'good' : net <= -6 ? 'bad' : 'stamp');
    }

    // Re-election won: the clock has already jumped to the second term, so
    // this turn must NOT advance again on top of it.
    if (out.secondTerm) {
      this.awaitingAdvance = false;
      this.drawAfterOverlays = true;      // the clock already moved; just deal the card
      this.pending.unshift({ type: 'tabloid', data: out.secondTerm.tabloid });
      AD.UI.renderResolution({ res: 'You are re-elected President of the United States.', deltas: {} }, false);
      AD.UI.renderHUD();
      return;
    }

    AD.UI.renderResolution(out, expired);
  },

  /* Shows the next queued overlay. Returns false when the queue is empty. */
  flushPending () {
    if (!this.pending || !this.pending.length) return false;
    const next = this.pending.shift();
    if (next.type === 'tabloid') AD.UI.showTabloid(next.data);
    else AD.UI.showDoctrine(next.data);
    return true;
  },

  /* Called when an overlay closes mid-turn: play the rest of the queue, then
     let the month tick over, but only if this turn hasn't ticked already.
     The Immunity Shield front page is raised *after* advance(), so closing it
     must not advance a second time. */
  continueTurn () {
    if (this.flushPending()) return;
    if (this.awaitingAdvance) { this.advance(); return; }
    // Second term: beginSecondTerm() already moved the clock, so deal rather
    // than tick. Without this the turn would dead-end after the front page.
    if (this.drawAfterOverlays) {
      this.drawAfterOverlays = false;
      AD.UI.renderHUD();
      this.nextCard();
    }
  },

  timeout () {
    const card = AD.Engine.card;
    const ok = card.choices.map((c, i) => AD.Engine.canAfford(c) ? i : -1).filter(i => i >= 0);
    this.decide(ok[Math.floor(Math.random() * ok.length)], true);
  },

  advance () {
    this.awaitingAdvance = false;
    if (!AD.Engine.run || AD.Engine.run.over) return;   // never tick a finished term
    const timeEnding = AD.Engine.advance();             // the clock alone can kill you
    AD.UI.renderHUD();
    if (timeEnding) { this.showEnding(AD.Engine.lastScore); return; }
    if (AD.Engine.pendingFortune) {           // crossed $10B this month
      AD.UI.showTabloid(AD.Engine.pendingFortune);
      AD.Engine.pendingFortune = null;
    } else if (AD.Engine.pendingShield) {     // the shield fired on the monthly tick
      AD.UI.showTabloid(AD.Engine.pendingShield);
      AD.Engine.pendingShield = null;
    } else if (AD.Engine.lastWar && AD.Engine.lastWar.resolved.length) {
      // a war resolved this month, front-page it
      const w = AD.Engine.lastWar.resolved[0];
      AD.UI.showTabloid(w.won
        ? { head: 'VICTORY', sub: 'The war in ' + w.target.name + ' is declared won; a parade is announced', body: w.res }
        : { head: 'QUAGMIRE', sub: 'The war in ' + w.target.name + ' turns; the street turns with it', body: w.res });
      AD.Engine.lastWar = null;
    }
    else if (AD.Engine.lastEcon && AD.Engine.lastEcon.backfires.length) {
      const bf = AD.Engine.lastEcon;
      AD.UI.showTabloid(bf.crash
        ? { head: 'THE MARKET CRACKS', sub: 'The tariffs land at once; worst week for stocks since the pandemic',
            body: 'Everything you tariffed retaliated in the same fortnight. Retirement accounts evaporated, the price of everything rose, and the base is furious in a way it cannot articulate. It felt, at the time, like winning.' }
        : { head: 'IT BACKFIRED', sub: 'The tariff on ' + bf.backfires[0].nation.name + ' comes home',
            body: 'The retaliation has arrived: ' + bf.backfires[0].hit + ' The tariff felt like strength for exactly as long as it took to land.' });
      AD.Engine.lastEcon = null;
    }
    const leak = AD.Engine.lastLeak;
    AD.UI.showLeak(leak && leak.leak);
    if (leak && leak.leak) AD.Audio.play('bad');
    this.nextCard();
  },

  /* Hold on the final resolution for a beat, then slam the ending down.
     The handle is cleared whenever a new run starts so a pending ending can
     never land on top of one. */
  scheduleEnding (score) {
    clearTimeout(this.endingTimer);
    this.endingTimer = setTimeout(() => {
      this.endingTimer = null;
      this.showEnding(score);
    }, 1500);
  },

  showEnding (score) {
    if (!score) return;
    clearTimeout(this.endingTimer); this.endingTimer = null;
    AD.Audio.play(score.win ? 'win' : 'collapse');
    this.lastEnding = score.endingId;
    AD.UI.stopTimer();
    AD.UI.renderEnding(score);
    AD.UI.el('btn-continue').hidden = true;
  },

  /* ---------- corruption ---------- */
  buyAsset (id) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.buyAsset(run, id);
    if (!r.ok) return;
    run.stats.bought = (run.stats.bought || 0) + 1;
    AD.saveRun(run);
    // Inline feedback, NOT a tabloid overlay: stacking an overlay on the
    // corruption panel would let its close handler advance the turn.
    AD.UI.renderCorruption(r.asset);
    AD.UI.renderHUD();
    // buying can starve a meter to death like anything else
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) {
      AD.Engine.finish(collapse.ending);
      this.pending = [];
      setTimeout(() => this.showEnding(AD.Engine.lastScore), 900);
    }
  },

  /* ---------- generic confirmation ----------
     A single reusable "are you sure?" gate. Stash the yes-callback and
     paint the modal; the act() dispatcher fires it on confirm-yes. */
  confirm (opts) {
    const U = AD.UI;
    this._confirmYes = opts.onYes || null;
    U.el('confirm-title').textContent = opts.title || 'Are you sure?';
    U.el('confirm-msg').innerHTML = opts.msg || '';
    U.el('confirm-yes').textContent = opts.yes || 'Do It';
    U.overlay('confirm', true);
  },

  /* ---------- the Strategic Freedom Reserve (money diversion) ---------- */
  divertConfirm () {
    const run = AD.Engine.run;
    if (!run || run.over || !AD.canDivert(run)) return;
    this.confirm({
      title: 'Declare the emergency?',
      msg: 'You will pull <b>+$' + AD.DIVERT_AMOUNT.toFixed(0) + 'B</b> into a reserve only you can touch, ' +
           'and start four fires at once. The <b>courts</b> will move to freeze it, the <b>press</b> will hunt ' +
           'the paper trail, <b>Congress</b> will subpoena, and the <b>street</b> will fill. The base will not ' +
           'care. You can only do this <b>once</b>, and there is no putting it back.',
      yes: 'Declare it',
      onYes: () => this.doDivert()
    });
  },

  doDivert () {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.divertFunds(run);
    if (!r.ok) return;
    run.stats.bought = (run.stats.bought || 0) + 0; // untouched; kept for parity
    AD.Audio.play('money');
    this.haptic([30, 40, 30]);
    AD.saveRun(run);
    // Inline feedback only, a tabloid overlay stacked on the corruption
    // panel would let its close handler advance the turn (see buyAsset).
    AD.UI.renderCorruption();
    AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) {
      AD.Engine.finish(collapse.ending);
      this.pending = [];
      setTimeout(() => this.showEnding(AD.Engine.lastScore), 900);
    }
  },

  /* ---------- the residence ---------- */
  courtAction (judgeId, actionId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doCourtAction(run, judgeId, actionId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(actionId === 'sack' ? 'gavel' : actionId === 'buy' ? 'money' : 'bad');
    AD.UI.renderCourts(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  econTariff (action, nationId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    let r;
    if (action === 'impose') r = AD.imposeTariff(run, nationId);
    else if (action === 'raise') r = AD.raiseTariff(run, nationId);
    else if (action === 'lift') r = AD.liftTariff(run, nationId);
    else if (action === 'libday') r = AD.liberationDay(run);
    if (!r || !r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(action === 'libday' ? 'tabloid' : action === 'lift' ? 'good' : 'bad');
    const line = action === 'libday'
        ? '<b>Liberation Day.</b> You have tariffed the entire world at once. The base has never been happier. The bill arrives in a couple of months.'
      : action === 'impose'
        ? '<b>Tariff imposed on ' + r.nation.name + '.</b> It feels like winning. In a couple of months it will not.'
      : action === 'raise'
        ? '<b>Doubling down on ' + r.nation.name + '.</b> A bigger spike now, a worse crash sooner.'
      : r.caved
        ? '<b>Backed off ' + r.nation.name + '.</b> You dodged the crash, and the base watched you cave.'
        : '<b>Lifted the tariff on ' + r.nation.name + '.</b> Quiet de-escalation.';
    AD.UI.renderEconomy({ line });
    AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  econSummit (nationId, index) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doSummit(run, nationId, index);
    if (!r || !r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(r.approach.normal ? 'summit' : 'stamp');
    const line = '<b>' + r.nation.leader + ':</b> ' + AD.clean(r.approach.res, AD.UI.settings.clean);
    AD.UI.renderEconomy({ line });
    AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  doRally (stuntId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doRally(run, stuntId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play('rally');
    AD.UI.renderBasepop(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  warOp (targetId, opId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doWarOp(run, targetId, opId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play('war');
    AD.UI.renderWar(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  makeCall (targetId, actionId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doCall(run, targetId, actionId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(actionId === 'losers' || actionId === 'complain' ? 'bad' : actionId === 'admire' ? 'good' : 'stamp');
    AD.UI.renderCall(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  pressAction (outletId, actionId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doPressAction(run, outletId, actionId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(actionId === 'settle' || actionId === 'install' ? 'money' : actionId === 'attack' ? 'bad' : 'stamp');
    AD.UI.renderPress(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  breakClauseAction (id) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.breakClause(run, id);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play('clause');
    this.haptic(12);
    // Floor any meter this pushed to zero (non-fatal), then repaint.
    AD.Engine.checkCollapse();
    AD.UI.renderConstitution(r);
    AD.UI.renderHUD();
  },

  pardonAction (id) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doPardon(run, id);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(r.pardon.saint ? 'good' : (r.pardon.eff.cash ? 'money' : 'stamp'));
    this.haptic(12);
    AD.UI.renderPardons(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  streetAction (cityId, actionId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doStreetAction(run, cityId, actionId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(actionId === 'sweep' ? 'stamp' : actionId === 'negotiate' ? 'good' : 'bad');
    AD.UI.renderStreet(r); AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) { AD.Engine.finish(collapse.ending); this.pending = []; setTimeout(() => this.showEnding(AD.Engine.lastScore), 900); }
  },

  senateAction (senId, actionId) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.doSenateAction(run, senId, actionId);
    if (!r.ok) return;
    AD.saveRun(run);
    AD.Audio.play(actionId === 'sack' ? 'gavel' : actionId === 'humiliate' ? 'betray' : 'good');
    AD.UI.renderSenate(r);
    AD.UI.renderHUD();
    // an action can starve a meter to death like anything else
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) {
      AD.Engine.finish(collapse.ending);
      this.pending = [];
      setTimeout(() => this.showEnding(AD.Engine.lastScore), 900);
    }
  },

  buildReno (id) {
    const run = AD.Engine.run;
    if (!run || run.over) return;
    const r = AD.buildReno(run, id);
    if (!r.ok) return;
    run.stats.built = (run.stats.built || 0) + 1;
    AD.saveRun(run);
    AD.Audio.play('build');
    // Same rule as buyAsset: inline feedback only. Stacking a tabloid overlay
    // on top of this panel would let its close handler advance the turn.
    AD.UI.renderResidence(r.reno);
    AD.UI.renderHUD();
    const collapse = AD.Engine.checkCollapse();
    if (collapse.ending) {
      AD.Engine.finish(collapse.ending);
      this.pending = [];
      setTimeout(() => this.showEnding(AD.Engine.lastScore), 900);
    }
  },

  copyDossier () {
    const txt = AD.UI._dossierShare || '';
    const done = () => { const b = document.querySelector('[data-act="dossier-copy"]'); if (b) { b.textContent = 'Copied!'; setTimeout(() => { b.textContent = 'Copy to Share'; }, 1600); } };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(txt).then(done, done);
    else {
      const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta);
      ta.select(); try { document.execCommand('copy'); } catch (e) {} document.body.removeChild(ta); done();
    }
  },

  /* ---------- input ---------- */
  wire () {
    const U = AD.UI;

    /* Save-on-exit. The run is already written after every decision, but if the
       app is closed or backgrounded mid-turn (before a choice) that last look
       would be lost. These fire on tab-hide, page unload, and the Capacitor
       app-pause event, so leaving the app never costs progress. */
    const persist = () => { const r = AD.Engine.run; if (r && !r.over) AD.saveRun(r); };
    document.addEventListener('visibilitychange', () => { if (document.hidden) persist(); });
    window.addEventListener('pagehide', persist);
    window.addEventListener('beforeunload', persist);
    document.addEventListener('pause', persist, false);   // Capacitor: app sent to background

    document.addEventListener('click', e => {
      AD.Audio.unlock();                   // browsers gate audio on first gesture
      AD.Music.start();                    // background marches begin on first tap

      const choice = e.target.closest('.choice');
      if (choice && !choice.disabled) { this.decide(+choice.dataset.choice, false); return; }

      const sw = e.target.closest('.sw');
      if (sw) {
        document.querySelectorAll('.sw').forEach(x => x.classList.remove('on'));
        sw.classList.add('on');
        this.setup.color = sw.dataset.color;
        this.paintPortrait();
        return;
      }

      const port = e.target.closest('[data-port]');
      if (port) {
        const k = port.dataset.port;
        this.setup.portrait[k] = (this.setup.portrait[k] + 1) % AD.PORTRAIT[k].length;
        this.paintPortrait();
        return;
      }

      const diff = e.target.closest('[data-diff]');
      if (diff) {
        document.querySelectorAll('#seg-diff button').forEach(b => b.classList.remove('on'));
        diff.classList.add('on');
        this.setup.difficulty = diff.dataset.diff;
        U.el('diff-hint').textContent = AD.DIFFS[diff.dataset.diff].hint;
        // the inherited country is harsher on harder settings, refresh the banner
        this.setup.legacy = AD.inheritance(diff.dataset.diff);
        U.renderInheritance(this.setup.legacy);
        return;
      }

      const mut = e.target.closest('[data-mut]');
      if (mut) {
        const id = mut.dataset.mut;
        const arr = this.setup.mutators;
        const i = arr.indexOf(id);
        if (i === -1) arr.push(id); else arr.splice(i, 1);
        mut.classList.toggle('on', i === -1);
        return;
      }

      const buy = e.target.closest('[data-buy]');
      if (buy && !buy.disabled) { this.buyAsset(buy.dataset.buy); return; }

      const build = e.target.closest('[data-build]');
      if (build && !build.disabled) { this.buildReno(build.dataset.build); return; }

      const pardon = e.target.closest('[data-pardon]');
      if (pardon && !pardon.disabled) { this.pardonAction(pardon.dataset.pardon); return; }

      const breakc = e.target.closest('[data-breakclause]');
      if (breakc && !breakc.disabled) { this.breakClauseAction(breakc.dataset.breakclause); return; }

      // Clicking a power-centre tile opens its management screen.
      const manage = e.target.closest('[data-manage]');
      if (manage) { this.act(AD.FAC_SCREEN[manage.dataset.manage]); return; }

      const sentab = e.target.closest('[data-sentab]');
      if (sentab) { AD.UI.senTab = sentab.dataset.sentab; AD.UI.renderSenate(); return; }

      const senact = e.target.closest('[data-senact]');
      if (senact && !senact.disabled) { this.senateAction(senact.dataset.sen, senact.dataset.senact); return; }

      const pressact = e.target.closest('[data-pressact]');
      if (pressact && !pressact.disabled) { this.pressAction(pressact.dataset.outlet, pressact.dataset.pressact); return; }

      const streetact = e.target.closest('[data-streetact]');
      if (streetact && !streetact.disabled) { this.streetAction(streetact.dataset.city, streetact.dataset.streetact); return; }

      const calltab = e.target.closest('[data-calltab]');
      if (calltab) { AD.UI.callTab = calltab.dataset.calltab; AD.UI.renderCall(); return; }

      const callsay = e.target.closest('[data-callsay]');
      if (callsay && !callsay.disabled) { this.makeCall(callsay.dataset.callwho, callsay.dataset.callsay); return; }

      const warbtn = e.target.closest('[data-warop]');
      if (warbtn && !warbtn.disabled) { this.warOp(warbtn.dataset.wartarget, warbtn.dataset.warop); return; }

      const courtact = e.target.closest('[data-courtact]');
      if (courtact && !courtact.disabled) { this.courtAction(courtact.dataset.judge, courtact.dataset.courtact); return; }

      const stunt = e.target.closest('[data-stunt]');
      if (stunt && !stunt.disabled) { this.doRally(stunt.dataset.stunt); return; }

      const econtab = e.target.closest('[data-econtab]');
      if (econtab) { AD.UI.econTab = econtab.dataset.econtab; AD.UI.renderEconomy(); return; }

      const econtariff = e.target.closest('[data-econtariff]');
      if (econtariff && !econtariff.disabled) { this.econTariff(econtariff.dataset.econtariff, econtariff.dataset.nation); return; }

      const summit = e.target.closest('[data-summit]');
      if (summit && !summit.disabled) { this.econSummit(summit.dataset.nation, +summit.dataset.summit); return; }

      const act = e.target.closest('[data-act]');
      if (act) this.act(act.dataset.act);
    });

    ['timer', 'motion', 'clean', 'pack', 'cb', 'haptics', 'music'].forEach(k => {
      const el = U.el('opt-' + k);
      if (!el) return;
      el.addEventListener('change', () => {
        U.settings[k] = el.checked;
        AD.saveSettings(U.settings);
        this.applySettings();   // applyMute() is the single owner of Music.setOn
        if (k === 'pack' && U.current === 'game' && AD.Engine.card) U.renderCard(AD.Engine.card);
      });
    });

    // Number keys pick a choice.
    document.addEventListener('keydown', e => {
      if (U.current !== 'game') return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= 4) {          // every crisis carries a 4th wildcard option
        const b = document.querySelector(`.choice[data-choice="${n - 1}"]`);
        if (b && !b.disabled && !U.el('card').hidden) b.click();
      }
      if (e.key === 'Enter' && !U.el('resolution').hidden) this.act('next');
    });
  },

  act (what) {
    const U = AD.UI;
    switch (what) {
      case 'new':
        U.el('in-name').value = ''; U.el('in-party').value = '';
        this.buildSetupScreen(); U.show('setup'); break;

      case 'begin':    this.begin(); break;
      case 'continue': this.resume(); break;
      case 'title':    this.refreshTitle(); U.show('title'); break;
      // Play out any front pages / doctrine unlocks before the month ticks.
      case 'next':     this.continueTurn(); break;

      case 'mute':     this.toggleMute(); break;
      case 'pause':    U.overlay('pause', true); U.pauseTimer(); break;
      case 'resume':
        U.overlay('pause', false);
        if (AD.Engine.card && U.el('card') && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'tut-next':  AD.Tutorial.next(); break;
      case 'tut-skip':  AD.Tutorial.finish(); break;
      case 'replay-tutorial':
        // works from the title screen: start a run, then teach on top of it
        try { localStorage.removeItem(AD.TUT_KEY); } catch (e) {}
        this.act('new');
        break;

      case 'constitution':
        if (U.current !== 'game' || !AD.Engine.run) break;
        U.pauseTimer(); U.renderConstitution(); U.overlay('constitution', true); break;
      case 'constitution-close':
        U.overlay('constitution', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'corruption':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderCorruption(); U.overlay('corruption', true); break;
      case 'corruption-close':
        U.overlay('corruption', false);
        // resume the clock only if a crisis is actually on screen
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;
      case 'divert':
        this.divertConfirm();
        break;
      case 'confirm-yes':
        U.overlay('confirm', false);
        { const fn = this._confirmYes; this._confirmYes = null; if (fn) fn(); }
        break;
      case 'confirm-no':
        U.overlay('confirm', false);
        this._confirmYes = null;
        break;

      case 'senate':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderSenate(); U.overlay('senate', true); break;
      case 'senate-close':
        U.overlay('senate', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'press':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderPress(); U.overlay('press', true); break;
      case 'press-close':
        U.overlay('press', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'street':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderStreet(); U.overlay('street', true); break;
      case 'street-close':
        U.overlay('street', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'call':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderCall(); U.overlay('call', true); break;
      case 'call-close':
        U.overlay('call', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'war':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderWar(); U.overlay('war', true); break;
      case 'war-close':
        U.overlay('war', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'courts':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderCourts(); U.overlay('courts', true); break;
      case 'courts-close':
        U.overlay('courts', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'basepop':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderBasepop(); U.overlay('basepop', true); break;
      case 'basepop-close':
        U.overlay('basepop', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'economy':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderEconomy(); U.overlay('economy', true); break;
      case 'economy-close':
        U.overlay('economy', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'pardon':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderPardons(); U.overlay('pardon', true); break;
      case 'pardon-close':
        U.overlay('pardon', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'renovations':
        if (U.current !== 'game' || !AD.Engine.run || AD.Engine.run.over) break;
        U.pauseTimer(); U.renderResidence(); U.overlay('renovations', true); break;
      case 'renovations-close':
        U.overlay('renovations', false);
        if (AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'dossier':
        if (!AD.Engine.lastScore) break;
        U.renderDossier(AD.Engine.lastScore); U.overlay('dossier', true); break;
      case 'dossier-close': U.overlay('dossier', false); break;
      case 'dossier-copy': this.copyDossier(); break;

      case 'log':      U.renderLog(); U.overlay('log', true); break;
      case 'log-close':U.overlay('log', false); break;

      case 'settings': U.overlay('settings', true); U.pauseTimer(); break;
      case 'settings-close':
        U.overlay('settings', false);
        if (U.current === 'game' && AD.Engine.card && !U.el('card').hidden) U.resumeTimer();
        break;

      case 'howto':      U.overlay('howto', true); break;
      case 'howto-close':U.overlay('howto', false); break;

      // On the ending screen these overlays are just the front page being
      // re-read, so they must never advance a run that is already over.
      case 'tabloid-close':
        U.overlay('tabloid', false);
        if (U.current === 'game') this.continueTurn();
        break;

      case 'doctrine-close':
        U.overlay('doctrine', false);
        if (U.current === 'game') this.continueTurn();
        break;

      case 'resign':
        U.overlay('pause', false);
        this.showEnding(AD.Engine.finish('merely-president'));
        break;

      case 'library':  U.renderLibrary(); U.show('library'); break;
      case 'wipe':
        AD.saveLibrary([]); U.renderLibrary(); break;

      case 'read-paper':
        if (AD.Engine.lastScore) U.renderFrontPage(AD.Engine.lastScore);
        break;
      case 'paper-close': U.overlay('paper', false); break;
    }
  }
};

document.addEventListener('DOMContentLoaded', () => AD.Game.init());
