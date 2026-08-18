/* ============================================================
   AMERICAN DICTATOR — state.js
   Core data shapes, faction definitions, difficulty, persistence.
   Loaded first. Everything hangs off the global AD namespace.
   ============================================================ */

window.AD = window.AD || {};

/* ---------- Factions ------------------------------------------------------
   Five power centres. Four of them are CAPTURABLE: drive one to 100 and it
   stops being a threat and becomes a Pillar of the regime (+25 Authority).
   THE BASE is not capturable — it is fuel. It kills you at 0 (you get
   primaried) AND at 100 (the movement decides it doesn't need you).
-------------------------------------------------------------------------- */
AD.FACTIONS = [
  {
    key: 'base', name: 'The Base', short: 'BASE', icon: '🔥', capturable: false,
    blurb: 'Your people. Loud, loyal, and one betrayal from finding someone louder.',
    lowWarn: 'The rallies are getting smaller.',
    highWarn: 'They are chanting a name. It is not quite yours.'
  },
  {
    key: 'congress', name: 'Congress', short: 'CONGRESS', icon: '🏛️', capturable: true,
    pillar: 'The Enabling Caucus',
    pillarLine: 'Both chambers now pass whatever arrives, unread, by voice vote.',
    blurb: 'A co-partisan majority that would rather not be asked any questions.',
    lowWarn: 'Committee chairs are using the word "subpoena" conversationally.'
  },
  {
    key: 'courts', name: 'The Courts', short: 'COURTS', icon: '⚖️', capturable: true,
    pillar: 'The Robed Rubber Stamp',
    pillarLine: 'The judiciary now rules on the emergency docket, unsigned, in your favour, overnight.',
    blurb: 'Nine people in robes and nine hundred people in district courts.',
    lowWarn: 'A judge in Rhode Island has enjoined your breakfast.'
  },
  {
    key: 'press', name: 'The Press', short: 'PRESS', icon: '📰', capturable: true,
    pillar: 'The Ministry of Truthiness',
    pillarLine: 'Every outlet now runs your statements as news, in full, without a byline.',
    blurb: 'Enemies of the people, plus three cable channels that adore you.',
    lowWarn: 'Four newsrooms are working on the same story and it is about you.'
  },
  {
    key: 'street', name: 'The Street', short: 'STREET', icon: '🪧', capturable: true,
    pillar: 'Boots on Main Street',
    pillarLine: 'Nothing moves in an American city without a permit signed in your office.',
    blurb: 'Public order. Whether the country keeps showing up to work.',
    lowWarn: 'Three cities are describing themselves as "ungovernable."'
  }
];

AD.FKEYS = AD.FACTIONS.map(f => f.key);
/* Which power centres have a live management screen behind the meter tile. */
AD.FAC_SCREEN = { congress: 'senate' };
AD.faction = k => AD.FACTIONS.find(f => f.key === k);

/* ---------- Authority ------------------------------------------------------
   Authority has two components and this is the central rule of the game:

     rawAuth     — earned one decision at a time. HARD CAPPED at SOFT_CAP.
     pillarAuth  — earned only by capturing a power centre outright.

   authority = min(SOFT_CAP, rawAuth) + pillarAuth

   SOFT_CAP is 55 and a pillar is worth 22, so 55 + 22 + 22 = 99. One short.
   That single missing point is the whole design: no amount of incremental
   authoritarianism gets you there, and neither do two captured branches.
   A dictatorship costs THREE of the four. Grinding is not a strategy.
-------------------------------------------------------------------------- */
AD.SOFT_CAP = 55;

AD.recomputeAuthority = function (run) {
  run.rawAuth = Math.max(0, run.rawAuth);
  run.authority = AD.clamp(Math.min(AD.SOFT_CAP, run.rawAuth) + run.pillarAuth, 0, 100);
  return run.authority;
};

/* The Base is fatal at the top as well as the bottom, but not instantly:
   it takes BASE_FUSE consecutive months above BASE_DANGER for the movement
   to finish choosing somebody else. That runway is your warning. */
/* Institutional resistance thresholds. Gains on a capturable branch are cut to
   70% above RESIST_SOFT and 40% above RESIST_HARD — the last quarter of taking
   an institution is where the people who will actually refuse are. */
AD.RESIST_SOFT = 58;  AD.RESIST_SOFT_MULT = 0.80;
/* HARD_MULT is the single most sensitive constant in the game: 0.60 → 43% win,
   0.55 → 23%, 0.50 → 5%. Retune it in 0.01 steps, never 0.05. */
AD.RESIST_HARD = 76;  AD.RESIST_HARD_MULT = 0.58;

/* Backlash also scales continuously with Authority: pressure gains one point
   per this many points of Authority. Lower = harsher, and it is SHARP — 45
   adds a second point at Authority 90 and drops optimal play from 38% to 22%. */
AD.AUTH_PRESSURE_DIV = 50;

/* ---------- The second objective ------------------------------------------
   There are two ways to win. Take the country (Authority 100), or take the
   money ($10B). Reaching the fortune does not end the run — it is banked, and
   it is cashed in at whatever ending you eventually reach:
     win  + fortune -> 'the-full-set'   (both)
     loss + fortune -> 'the-fortune'    (you lost the country and kept the money)
   Which is, on the evidence, the more historically common outcome.
-------------------------------------------------------------------------- */
AD.WEALTH_GOAL = 10;

AD.BASE_DANGER = 95;
AD.BASE_FUSE = 3;
AD.BASE_DECAY = -3;      // a movement that isn't fed every month cools off

/* ---------- The Base's appetite ------------------------------------------
   The movement is, by design and per the brief, largely far-right and
   poorly served by the education system it keeps voting to defund. It does
   not reward good governance. It rewards TRANSGRESSION — the more
   institutions a choice offends, the more the crowd loves it — and it
   rewards CHAOS, so the deliberately absurd wildcard options land better
   with the base than their raw numbers suggest.

   Mechanically: a choice that pleases the base (base > 0) while damaging
   institutions gets its base gain multiplied, once per offended power
   centre. Wildcards get an extra bump. The multiplier is capped so a single
   card cannot vault the movement to the fatal ceiling on its own. */
AD.BASE_APPETITE   = 0.11;   // extra base gain per offended institution
AD.BASE_WILD_BONUS = 0.38;   // the crowd loves the silly, chaotic option
AD.BASE_APPETITE_CAP = 1.8;  // hard ceiling on the total multiplier

AD.applyBaseAppetite = function (eff, choice) {
  const b = eff.base || 0;
  if (b <= 0) return eff;                 // only ever amplifies red meat, never punishes
  let offended = 0;
  ['congress', 'courts', 'press', 'street'].forEach(k => { if ((eff[k] || 0) < 0) offended++; });
  let mult = 1;
  if (offended >= 2) mult += AD.BASE_APPETITE * offended;   // transgression
  if (choice && choice.wild) mult += AD.BASE_WILD_BONUS;    // chaos
  mult = Math.min(mult, AD.BASE_APPETITE_CAP);
  if (mult > 1) eff.base = Math.round(b * mult);
  return eff;
};

/* ---------- Authority ranks ---------------------------------------------- */
AD.RANKS = [
  { at: 0,   name: 'Duly Elected President' },
  { at: 15,  name: 'Norm-Curious' },
  { at: 30,  name: 'Strongman-Adjacent' },
  { at: 45,  name: 'Elected Strongman' },
  { at: 60,  name: 'Competitive Authoritarian' },
  { at: 78,  name: 'Dictator, Pending Paperwork' },
  { at: 95,  name: 'President-for-Life (Provisional)' }
];
AD.rankFor = a => AD.RANKS.filter(r => a >= r.at).pop().name;

/* ---------- Difficulty ---------------------------------------------------- */
/* pillarValue is tuned against AD.SOFT_CAP (55) to set how many branches a
   dictatorship costs: rookie 2 (55+52=107), standard 3 (55+44=99 — one short),
   historic 2 but on a 40-month clock with every meter sagging underneath you. */
AD.DIFFS = {
  rookie: {
    id: 'rookie', label: 'Rookie', months: 48, capture: 90, pillarValue: 26, timer: 20,
    startCash: 4, drift: 0,
    hint: 'Ninety is a capture, and two of them is enough. The institutions are tired.'
  },
  standard: {
    id: 'standard', label: 'Standard', months: 48, capture: 100, pillarValue: 22, timer: 14,
    startCash: 3, drift: 0,
    hint: 'One term, and a dictatorship costs three of the four branches. The intended experience.'
  },
  historic: {
    // pillarValue 23 puts two pillars at 46, so a win needs rawAuth 54 of a
    // possible 55 — effectively "max out everything AND take two branches, or
    // take three." 22 makes it impossible; 25 makes it easy. It is a cliff.
    id: 'historic', label: 'Historic', months: 40, capture: 100, pillarValue: 23, timer: 10,
    startCash: 2, drift: 0, pressureMult: 2,
    hint: 'Forty months, three branches, ten seconds a decision — and every institution you take ' +
          'makes the next one fight twice as hard.'
  }
};

/* ---------- Portrait options --------------------------------------------- */
AD.PORTRAIT = {
  hair: ['#e8c766', '#d9d3c4', '#8a6a3c', '#3c3128', '#b5442e', '#f2ead6'],
  skin: ['#e8a86b', '#f0c9a0', '#c98650', '#8d5a34', '#5e3a22', '#ffbd63'],
  tie:  ['#c8342f', '#2d5fa8', '#e0b33a', '#2f7a52', '#6b3f8f', '#1b1b1b'],
  suit: ['#1c2230', '#2b2b2b', '#31384a', '#43301f', '#0f2a24', '#4a1f27']
};
AD.PARTY_COLORS = ['#c8342f', '#2d5fa8', '#e0b33a', '#2f7a52', '#6b3f8f', '#e07a2d'];

/* ---------- Default settings --------------------------------------------- */
AD.DEFAULT_SETTINGS = { timer: true, motion: false, clean: false, pack: false };

/* ---------- A fresh run --------------------------------------------------- */
AD.newRun = function (opts) {
  const d = AD.DIFFS[opts.difficulty] || AD.DIFFS.standard;
  return {
    v: 1,
    seed: opts.seed || (AD.Seed ? AD.Seed.make() : null),
    rngSteps: 0,
    president: opts.name || 'Ronald J. Trumbull',
    party: opts.party || 'The Patriot Party',
    color: opts.color || AD.PARTY_COLORS[0],
    portrait: opts.portrait || { hair: 0, skin: 0, tie: 0, suit: 0 },
    difficulty: d.id,

    /* ---- the clock -----------------------------------------------------
       A term runs `termLength` months. Winning re-election starts a SECOND
       term: termStart jumps forward, maxMonths extends, and `month` keeps
       counting so the Library can report a full eight-year administration. */
    month: 1,
    term: 1,
    termStart: 1,
    termLength: d.months,
    maxMonths: d.months,        // last month of the CURRENT term

    // Press is by far the most-attacked meter in the deck (+2110 / -3351 across
    // 302 crises) and Courts is second (+966 / -1909). Starting Press at 47 made
    // zero-press 71% of all random-play endings; raising both to 52 brings that
    // to ~47% and lands optimal play at ~39%.
    meters: { base: 62, congress: 55, courts: 52, press: 52, street: 56 },
    locked: {},                 // key -> true once captured
    cash: d.startCash,
    authority: 0,
    rawAuth: 0,                 // earned by decisions — capped at AD.SOFT_CAP
    pillarAuth: 0,              // earned only by capturing power centres
    baseHigh: 0,                // consecutive months the Base has been too hot
    doctrines: [],              // ids of unlocked doctrines
    shieldUsed: false,          // Immunity Shield consumed?
    seen: [],                   // card ids already played
    flags: {},                  // story flags set by choices
    queue: [],                  // forced next cards (scripted beats)
    log: [],                    // {month, title, choice, deltas}
    assets: [],                 // owned corruption holdings — see corruption.js
    renos: [],                  // structures built on the residence — see renovations.js
    senate: [],                 // the 100-seat chamber — see senate.js
    clauses: [],                // constitutional clauses broken — see constitution.js
    stats: { grabs: 0, restraints: 0, timeouts: 0, peakCash: d.startCash, briefings: 0, bought: 0, built: 0 },
    over: false,
    legacy: opts.legacy || null // inherited wreckage — see AD.inheritance()
  };
};

/* ---------- The persistent world -------------------------------------------
   "The longer the country has been ungoverned, the harder it is to govern."
   Every administration leaves the next one a worse country. A failed term
   scars the branch that broke; a successful dictatorship leaves an office
   that everyone has already learned to fear.
-------------------------------------------------------------------------- */
AD.SCARS = {
  'zero-courts':  { courts: -15, note: 'The judiciary spent the last administration saying no, and it has not forgotten how.' },
  'zero-press':   { press: -15,  note: 'Every newsroom in the country is still running the last President\'s documents.' },
  'zero-congress':{ congress: -15,note: 'The chamber that removed your predecessor is in no mood to be charmed.' },
  'zero-street':  { street: -15, note: 'The general strike ended eleven weeks ago. Nobody has quite gone back to normal.' },
  'zero-base':    { base: -12,   note: 'The movement has been burned once and it is watching you for the same tells.' },
  'max-base':     { base: -8, congress: -6, note: 'Your Vice President is now a private citizen with 91% approval and a podcast.' },
  'peaceful-transfer': { base: -6, note: 'Your party lost. Twice, if you count the mood.' },
  'merely-president':  { press: -5, street: -5, note: 'Four years of norm-breaking with nothing to show for it has left everyone tired and nobody afraid.' },
  'the-count':    { courts: -10, street: -8, note: 'The last administration tried to have the count set aside. The clerks remember which ones held.' },
  'the-standoff': { street: -12, congress: -8, note: 'For eleven days this country had two presidents. It is still arguing about which one it had.' },
  'the-refusal':  { congress: -10, courts: -8, note: 'Somebody in this building said "no, sir" and it worked. That is now a thing people know can be done.' },
  'dictator':     { base: -5, congress: -12, courts: -12, press: -12, street: -12,
                    note: 'You inherit an office that was already bent into a new shape — and a country that has watched it happen once.' },
  'indefinite':   { courts: -12, street: -12, note: 'The emergency your predecessor declared has still not formally ended.' },
  'certified':    { courts: -12, congress: -10, note: 'The last result was certified before it was counted. Every board in the country lawyered up afterwards.' },
  'second-term-consolidation': { press: -10, street: -8, note: 'Your predecessor did all of this and then won anyway. That is the part people cannot get past.' },
  'third-term':   { congress: -14, courts: -14, press: -12, street: -12, base: -6,
                    note: 'The Twenty-Second Amendment is still in the Constitution. It is simply no longer load-bearing.' },
  'two-terms':    { note: 'Your predecessor served eight years and left on time. The bar is, annoyingly, quite high.' },
  'the-succession': { base: -10, note: 'The movement already has a President it likes. You are the sequel nobody asked for.' },
  'the-cay':      { press: -12, street: -10, congress: -8,
                    note: 'Nobody in this country has stopped asking about an island, and they have had four years of practice.' }
};

AD.CHAOS_KEY = 'americandictator.chaos.v1';
AD.CHAOS_CAP = 3;    // a long save file must stay winnable — this is the floor of hope
AD.CHAOS_DRAG = 2;   // points per chaos level, institutions only

/* Builds the inheritance for a new run from the previous administration.
   Returns null on a clean slate. */
AD.inheritance = function () {
  const lib = AD.loadLibrary();
  if (!lib.length) return null;
  const last = lib[0];
  const scar = AD.SCARS[last.endingId] || {};
  const chaos = AD.clamp(AD.store.read(AD.CHAOS_KEY, 0), 0, AD.CHAOS_CAP);

  const mods = {};
  AD.FKEYS.forEach(k => {
    // The scar from the last term, plus a general drag for every consecutive
    // term the country has spent being governed badly.
    // The drag spares THE BASE: institutions inherit the mess, but your
    // movement is yours and starts fresh. Dragging it too made every long
    // save-file spiral into unwinnable and zero-base swallowed the endings.
    const v = (scar[k] || 0) - (k === 'base' ? 0 : chaos * AD.CHAOS_DRAG);
    if (v) mods[k] = v;
  });
  return {
    from: last.president, endingId: last.endingId,
    note: scar.note || 'The country you inherit has been governed recently, and it shows.',
    chaos, mods
  };
};

/* Called on every finish: a country that keeps ending up like this gets
   harder to govern. A clean two-term exit resets the counter. */
AD.recordChaos = function (endingId) {
  const calm = endingId === 'two-terms' || endingId === 'peaceful-transfer';
  const n = calm ? 0 : AD.clamp(AD.store.read(AD.CHAOS_KEY, 0) + 1, 0, AD.CHAOS_CAP);
  AD.store.write(AD.CHAOS_KEY, n);
  return n;
};

/* ---------- Persistence --------------------------------------------------- */
AD.SAVE_KEY = 'americandictator.save.v1';
AD.LIB_KEY  = 'americandictator.library.v1';
AD.SET_KEY  = 'americandictator.settings.v1';

AD.store = {
  read(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch (e) { return fallback; }
  },
  write(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* private mode */ }
  },
  drop(key) { try { localStorage.removeItem(key); } catch (e) {} }
};

AD.saveRun     = run => run && !run.over ? AD.store.write(AD.SAVE_KEY, run) : AD.store.drop(AD.SAVE_KEY);
AD.loadRun     = ()  => AD.store.read(AD.SAVE_KEY, null);
AD.clearRun    = ()  => AD.store.drop(AD.SAVE_KEY);
AD.loadLibrary = ()  => AD.store.read(AD.LIB_KEY, []);
AD.saveLibrary = l   => AD.store.write(AD.LIB_KEY, l.slice(0, 40));
AD.loadSettings = () => Object.assign({}, AD.DEFAULT_SETTINGS, AD.store.read(AD.SET_KEY, {}));
AD.saveSettings = s  => AD.store.write(AD.SET_KEY, s);

/* ---------- Small helpers -------------------------------------------------- */
AD.clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));
AD.MONTHS = ['January','February','March','April','May','June',
             'July','August','September','October','November','December'];
AD.YEAR_WORDS = ['Year One','Year Two','Year Three','Year Four',
                 'Year Five','Year Six','Year Seven','Year Eight'];

/* Month counted from the start of the CURRENT term. Card gating, the Midterms
   and the Address are all term-relative, so a second term has the same shape
   as the first rather than falling off the end of every min/max window. */
AD.termMonth = run => run.month - (run.termStart || 1) + 1;

AD.dateLabel = function (month) {
  const i = (month - 1) % 12;
  const y = Math.floor((month - 1) / 12);
  return AD.MONTHS[i] + ', ' + (AD.YEAR_WORDS[y] || 'Year ' + (y + 1));
};

/* Swap salty words out when Clean Language is on. */
AD.SALT = [
  [/\bshit\b/gi, 'shhh—'], [/\bshitty\b/gi, 'rotten'], [/\bass\b/gi, 'rear'],
  [/\bbastard\b/gi, 'gentleman'], [/\bdamn\b/gi, 'darn'], [/\bhell\b/gi, 'heck'],
  [/\bbastards\b/gi, 'gentlemen'], [/\bpiss\b/gi, 'irk'], [/\bcrap\b/gi, 'nonsense']
];
AD.clean = function (str, on) {
  if (!on || !str) return str;
  let s = str; AD.SALT.forEach(([re, rep]) => { s = s.replace(re, rep); }); return s;
};
