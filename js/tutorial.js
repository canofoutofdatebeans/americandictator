/* ============================================================
   AMERICAN DICTATOR — tutorial.js
   A spotlight walkthrough that runs on a player's first term.

   It teaches in the order a player actually needs things:
   what you want -> how a turn works -> what can kill you ->
   the one rule that decides the game -> the optional tracks.

   Runs once (localStorage), skippable at any point, and
   replayable from the title menu.
   ============================================================ */

AD.TUT_KEY = 'americandictator.tutorial.v1';

AD.Tutorial = {
  step: 0,
  active: false,

  STEPS: [
    { target: null, title: 'You have four years.',
      body: 'You are the President. The objective is not to govern well — it is to still be ' +
            'holding the country when the term ends, and to have taken as much of it as you can.<br><br>' +
            '<b>There are two ways to win.</b> Take the country (Authority 100), or take the money — a personal ' +
            'fortune whose target scales with difficulty ($12B / $15B / $20B). ' +
            'Doing both is the best ending in the game.' },

    { target: '#card', title: 'A crisis a month.',
      body: 'Somebody walks into your office with a problem. Forty-eight of these a term, ' +
            'drawn from 347 hand-written crises, so no two administrations look alike.<br><br>' +
            'Read who is talking. Deborah wants you to survive. Chet wants your job.' },

    { target: '#choices', title: 'Four ways out. Always.',
      body: 'Every crisis offers the same four flavours:<br><br>' +
            '<b>1 · The power grab</b> — big Authority, big Base, and it wrecks two institutions.<br>' +
            '<b>2 · The professional move</b> — safe, small, faintly disappointing.<br>' +
            '<b>3 · The worse idea</b> — funnier and more extreme.<br>' +
            '<b>4 · The wildcard</b> — genuinely absurd. It always costs you something and almost ' +
            'never advances you. It is there because it is funny, not because it is smart.' },

    { target: '#factions', title: 'Five power centres.',
      body: 'These are the only things that can end you. <b>If any one hits zero, your term is over</b> — ' +
            'and each one ends it differently. Congress impeaches. The Courts enjoin everything. ' +
            'The Press breaks every story at once. The Street stops going to work.<br><br>' +
            'Watch the red ones. The game will warn you before they kill you.' },

    { target: '#factions', title: 'The Base is your fuel.',
      body: '🔥 <b>The Base powers everything you do.</b><br><br>' +
            'A roaring base rewards your most transgressive choices and feeds your Authority. Keep it hot.<br><br>' +
            'The only danger is at <b>0</b> — let it collapse and you are primaried out. It also cools by ' +
            '<b>3 every month</b> on its own, so it needs feeding. Fuel, not a trap.' },

    { target: '.authority-wrap', title: 'Authority is how you win.',
      body: 'Reach <b>100</b> and the republic is yours.<br><br>' +
            'But see that white line at 55? <b>Authority earned from decisions is hard capped there.</b> ' +
            'You can be incrementally authoritarian for four years and you will stop dead at 55.' },

    { target: '#pillar-row', title: 'The rest has to be taken.',
      body: 'The last 45 points come only from <b>Pillars</b>. Drive Congress, the Courts, the Press or ' +
            'the Street up to <b>100</b> and you capture it: frozen, immune, and worth +22 Authority that ' +
            'ignores the cap.<br><br>' +
            'A dictatorship costs <b>three of the four</b>. And every branch you take makes the next one ' +
            'fight harder — so plan which three.' },

    { target: '#const-chip', title: 'The Constitution is a scoreboard.',
      body: 'Sixteen clauses. Certain choices break one, and each is worth score.<br><br>' +
            'Break <b>all sixteen</b> and an unbidden payment arrives from Russia — itemised by clause, ' +
            'through four intermediary banks, with a note. Tap here any time to see the ledger.' },

    { target: '#hud-cash', title: 'And the money.',
      body: 'Tap your fortune to open <b>Private Interests</b>: buy platforms, sue critics into bankruptcy, ' +
            'fund the judicial pipeline, run a foundation.<br><br>' +
            'Holdings never grant Authority — money cannot buy the presidency. It buys <b>leverage</b>: ' +
            'shields, multipliers and income. Reach the fortune target and even losing the country counts as a win.' },

    { target: '#reno-chip', title: 'And the building itself.',
      body: 'The other place to spend it. <b>The Residence</b> — a ballroom where the East Wing was, ' +
            'a rollercoaster over the roof, a statue of you visible from orbit.<br><br>' +
            'Every structure pays <b>Authority the moment it tops out</b> — but it bills you every ' +
            'month forever, and the more of it stands, the harder Congress and the Courts come at you. ' +
            'Glory is the most expensive thing on the menu.' },

    { target: '#choices', title: 'That is everything.',
      body: 'Keep five meters alive. Take three branches. Keep the base fed.<br><br>' +
            'Your first crisis is waiting. <b>Good luck, Mr President.</b>' }
  ],

  shouldRun () {
    try { return !localStorage.getItem(AD.TUT_KEY); } catch (e) { return false; }
  },
  markDone () {
    try { localStorage.setItem(AD.TUT_KEY, '1'); } catch (e) {}
  },

  start (force) {
    if (!force && !this.shouldRun()) return false;
    this.step = 0;
    this.active = true;
    AD.UI.stopTimer();                    // never run the clock during teaching
    this.render();
    return true;
  },

  next () {
    this.step++;
    if (this.step >= this.STEPS.length) return this.finish();
    this.render();
  },

  finish () {
    this.active = false;
    this.markDone();
    const ov = document.getElementById('ov-tutorial');
    if (ov) ov.hidden = true;
    // hand the clock back
    if (AD.Engine.card && !document.getElementById('card').hidden) AD.UI.startTimer(AD.Engine.card);
  },

  render () {
    const s = this.STEPS[this.step];
    const ov = document.getElementById('ov-tutorial');
    const spot = document.getElementById('tut-spot');
    const box = document.getElementById('tut-box');
    ov.hidden = false;

    /* Fill the content FIRST so the box has its true height before we place it —
       positioning off a stale height was half the old messiness. */
    document.getElementById('tut-step').textContent =
      'STEP ' + (this.step + 1) + ' OF ' + this.STEPS.length;
    document.getElementById('tut-title').textContent = s.title;
    document.getElementById('tut-body').innerHTML = s.body;
    document.getElementById('tut-next').textContent =
      this.step === this.STEPS.length - 1 ? 'Take the first decision' : 'Next';

    /* Placement. The box is always positioned by an explicit pixel `top` with
       `bottom:auto`, so it can never get both edges pinned at once (which used
       to stretch it into a mess when a target sat low on the screen). */
    const margin = 14;
    const boxH = box.offsetHeight;
    const clampTop = t => Math.max(margin, Math.min(t, window.innerHeight - boxH - margin));
    const el = s.target ? document.querySelector(s.target) : null;

    if (el) {
      const r = el.getBoundingClientRect();
      const pad = 6;
      spot.hidden = false;
      spot.style.left   = (r.left - pad) + 'px';
      spot.style.top    = (r.top - pad) + 'px';
      spot.style.width  = (r.width + pad * 2) + 'px';
      spot.style.height = (r.height + pad * 2) + 'px';
      const roomBelow = window.innerHeight - r.bottom - margin;
      const roomAbove = r.top - margin;
      // sit below the highlight when it fits (or when there's simply more room
      // there); otherwise sit above it. Either way, clamp on-screen.
      const top = (roomBelow >= boxH || roomBelow >= roomAbove)
        ? clampTop(r.bottom + margin)
        : clampTop(r.top - margin - boxH);
      box.style.top = top + 'px';
      box.style.bottom = 'auto';
    } else {
      // No target: dead-centre, measured in pixels (no transform tricks that
      // would fight the box's horizontal centring).
      spot.hidden = true;
      box.style.top = Math.max(margin, (window.innerHeight - boxH) / 2) + 'px';
      box.style.bottom = 'auto';
    }
  }
};
