/* ============================================================
   AMERICAN DICTATOR, state.js
   Core data shapes, faction definitions, difficulty, persistence.
   Loaded first. Everything hangs off the global AD namespace.
   ============================================================ */

window.AD = window.AD || {};
AD.BUILD = '127';   // bumped every deploy; shown on the title so a stale cache is obvious

/* ---------- Factions ------------------------------------------------------
   Five power centres. Four of them are CAPTURABLE: drive one to 100 and it
   stops being a threat and becomes a Pillar of the regime (+25 Authority).
   THE BASE is not capturable, it is fuel. It is fatal only at 0 (you get
   primaried out); a roaring base powers your transgressions and Authority.
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
AD.FAC_SCREEN = { congress: 'senate', press: 'press', street: 'street', courts: 'courts', base: 'basepop' };
AD.faction = k => AD.FACTIONS.find(f => f.key === k);

/* ---------- Authority ------------------------------------------------------
   Authority has two components and this is the central rule of the game:

     rawAuth   , earned one decision at a time. HARD CAPPED at SOFT_CAP.
     pillarAuth, earned only by capturing a power centre outright.

   authority = min(SOFT_CAP, rawAuth) + pillarAuth

   SOFT_CAP is 55 and a pillar is worth 22, so 55 + 22 + 22 = 99. One short.
   That single missing point is the whole design: no amount of incremental
   authoritarianism gets you there, and neither do two captured branches.
   A dictatorship costs THREE of the four. Grinding is not a strategy.
-------------------------------------------------------------------------- */
AD.SOFT_CAP = 55;

/* Authority reflects your ACTUAL GRIP, not just paper power. Your earned raw
   authority is capped at the soft cap, but when the country turns on you (the
   five meters crater) your real authority is DRAGGED DOWN with it, and it climbs
   back as the meters recover. So the number rises and falls with the state of
   the game instead of sitting frozen at the cap while everything else collapses.
   Captured pillars count as 100 (a branch you own is not turning on you). */
AD.AUTH_HEALTH_BASE = 50;   // meter average at/above which there is no drag
AD.AUTH_DRAG = 0.8;         // authority lost per point the average falls below the base

AD.recomputeAuthority = function (run) {
  run.rawAuth = Math.max(0, run.rawAuth);
  let a = Math.min(AD.SOFT_CAP, run.rawAuth) + run.pillarAuth;
  if (run.meters) {
    let sum = 0;
    AD.FKEYS.forEach(k => { sum += run.locked[k] ? 100 : (run.meters[k] || 0); });
    const avg = sum / AD.FKEYS.length;
    if (avg < AD.AUTH_HEALTH_BASE) a -= Math.round((AD.AUTH_HEALTH_BASE - avg) * AD.AUTH_DRAG);
  }
  run.authority = AD.clamp(a, 0, 100);
  return run.authority;
};

/* First-run training wheels: a brand-new player gets a few months where a
   meter that hits zero is floored instead of fatal, so they can make a mistake
   and watch the consequence without an instant loss. Set only in the real
   begin() flow for a first-ever run, bots and normal runs never have it. */
AD.inGrace = run => !!(run.graceUntil && run.month <= run.graceUntil);

/* Institutional resistance thresholds. Gains on a capturable branch are cut to
   70% above RESIST_SOFT and 40% above RESIST_HARD, the last quarter of taking
   an institution is where the people who will actually refuse are. */
AD.RESIST_SOFT = 58;  AD.RESIST_SOFT_MULT = 0.80;
/* HARD_MULT is the single most sensitive constant in the game: 0.60 → 43% win,
   0.55 → 23%, 0.50 → 5%. Retune it in 0.01 steps, never 0.05. */
AD.RESIST_HARD = 76;  AD.RESIST_HARD_MULT = 0.58;

/* Backlash also scales continuously with Authority: pressure gains one point
   per this many points of Authority. Lower = harsher, and it is SHARP, 45
   adds a second point at Authority 90 and drops optimal play from 38% to 22%. */
AD.AUTH_PRESSURE_DIV = 50;

/* The systemic guardrail on the management-screen ticks. See engine.advance().
   The caucus, press room and public order ticks combined can never remove more
   than this many points from any single meter in one month, so background
   drains create pressure but never deliver the killing blow. Raising it lets
   neglect bite harder; 3 keeps the screens as opt-in leverage, not a tax. */
AD.MGMT_LOSS_CAP = 3;

/* The same principle for CARD DECISIONS: no single choice may be the killing
   blow. A healthy meter (>= the floor) can't be pushed below the floor by one
   decision, and no decision ever zeroes a live meter outright. You always get a
   turn to react, death comes from sustained neglect (decay + ticks bleeding a
   meter to zero over several months), never one surprise card. */
AD.DECISION_FLOOR = 8;

/* ---------- The second objective ------------------------------------------
   There are two ways to win. Take the country (Authority 100), or take the
   money ($10B). Reaching the fortune does not end the run, it is banked, and
   it is cashed in at whatever ending you eventually reach:
     win  + fortune -> 'the-full-set'   (both)
     loss + fortune -> 'the-fortune'    (you lost the country and kept the money)
   Which is, on the evidence, the more historically common outcome.
-------------------------------------------------------------------------- */
AD.WEALTH_GOAL = 15;   // fallback; the live target is per-run, see AD.wealthGoal
/* The fortune target scales with difficulty: rookie 12, standard 15, historic 20. */
AD.wealthGoal = run => (run && run.wealthGoal) || AD.WEALTH_GOAL;

/* ---------- two purses ----------------------------------------------------
   run.cash is the President's PERSONAL WEALTH (the fortune goal, and what pays
   for bribes, the residence and private holdings, tens of millions to billions).
   run.purse is the NATIONAL TREASURY, a separate, much larger pool in the
   hundreds of billions that funds WARS and is moved by TARIFFS and the economy.
   A dictator can, of course, quietly move money from one to the other. */
/* Each calendar month of the presidency is THREE cards: the clock (and every
   monthly tick, decay, the market, war resolution) advances only on the third. */
AD.CARDS_PER_MONTH = 3;

/* The deliberate quiet between crises. Every story card is a pop-up, and this
   is how long the player gets to go and actually work the management rooms
   before the next one lands. Skippable from the countdown bar. */
AD.CRISIS_GAP_MS = 30000;

/* ---------- THE SPECTACLE (the President's boredom) -----------------------
   The President is easily bored. run.bored (0-100) is HOW BORED he is: sober,
   sensible governing runs it up; the dumb, loud, silly, transgressive moves
   bring it back down. LOW IS GOOD. To WIN, the Boredometer must be at or below
   the difficulty ceiling at the end, otherwise the President loses interest,
   wanders off, and simply does not finish the job. */
AD.BORED_START = 50;
/* The ceiling you must be AT OR BELOW when the term ends. Harder difficulty
   tolerates less boredom. (These mirror the old entertainment floors: an
   entertainment floor of F is exactly a boredom ceiling of 100 - F.) */
AD.BOREDOM_MAX = { rookie: 50, standard: 30, historic: 10 };
AD.boredCeiling = run => {
  const v = AD.BOREDOM_MAX[(run && run.difficulty)];
  return typeof v === 'number' ? v : 30;
};
AD.boredom = run => (run && typeof run.bored === 'number') ? run.bored : AD.BORED_START;
AD.entertained = run => AD.boredom(run) <= AD.boredCeiling(run);

/* Move the BOREDOMETER directly. Positive = MORE bored (bad). */
AD.moveBored = function (run, d) {
  run.bored = AD.clamp(AD.boredom(run) + d, 0, 100);
  return run.bored;
};
/* The entertainment-facing alias every content file already calls: a positive
   `fun` charge means "this amused him", which LOWERS the Boredometer. Keeping
   this wrapper means none of the several dozen `eff.fun` charges scattered
   through the management screens had to flip sign when the meter was flipped. */
AD.moveFun = function (run, d) { return AD.moveBored(run, -d); };

/* The revolving cabinet door, tallied so the Dossier/Front Page can name a
   number ("your 4th Secretary of Homeland Security this term"). Tracked
   separately from the Senate purge count (r.stats.grabs is broader). */
AD.bumpCabinetChurn = function (run, n) {
  run.stats = run.stats || {};
  run.stats.cabinetChurn = (run.stats.cabinetChurn || 0) + (n || 1);
};

/* The Truth Index: how far official statements have drifted from reality.
   0 = scrupulously accurate, 100 = pure fabrication. Not a HUD meter (the
   HUD is already full); it's tracked quietly and only surfaces in the
   Dossier/Front Page recap, so a handful of cards can move it without any
   new always-visible UI. */
AD.moveTruth = function (run, d) {
  run.stats = run.stats || {};
  const cur = run.stats.truthIndex == null ? 50 : run.stats.truthIndex;
  run.stats.truthIndex = AD.clamp(cur + d, 0, 100);
  return run.stats.truthIndex;
};

AD.START_PURSE = 500;   // $500B in the national coffers at inauguration
AD.purse = run => (run && typeof run.purse === 'number') ? run.purse : AD.START_PURSE;
/* Spend from / add to the treasury, clamped at zero, two-decimal rounded. */
AD.movePurse = function (run, delta) {
  run.purse = Math.max(0, Math.round((AD.purse(run) + delta) * 100) / 100);
  return run.purse;
};

/* THE BASE MOVES IN INCHES. Every base delta a card or action produces is
   multiplied by this before it lands, so a headline +7 becomes well under a
   point. Building a movement is the work of a whole term, rally by rally,
   never a two-card spike. The Base is stored as a FLOAT and only rounded for
   display, so a run of +0.6s genuinely accumulates instead of rounding to 0. */
AD.BASE_GAIN_SCALE = 0.13;

AD.BASE_DECAY = -0.4;    // a movement that isn't fed every month cools off

/* The base CREEPS, it never jumps. No single action, card, rally, pardon,
   tariff, war, may raise the Base by more than this in one go. A movement is
   built rally by rally, not seized in an afternoon; combined with the decay
   above it makes a maxed base a term-long project, not a two-card spike.
   After BASE_GAIN_SCALE this is the hard per-action ceiling: one single point,
   and most actions land between 0.3 and 1.0. */
AD.BASE_RISE_CAP = 1;

/* A term now always runs its full course to an ELECTION, instead of ending the
   moment a meter hits zero. A power centre that collapses is floored here and
   left WOUNDED (a lasting drag on the ballot), but the president survives to
   face the voters. The election is the sole judge of a first term. */
AD.COLLAPSE_FLOOR = 12;      // where a zeroed meter is held instead of ending the run
AD.CAMPAIGN_BOOST = 2;       // $B war chest granted going into an election run

/* ---------- The Base's appetite ------------------------------------------
   The movement is, by design and per the brief, largely far-right and
   poorly served by the education system it keeps voting to defund. It does
   not reward good governance. It rewards TRANSGRESSION, the more
   institutions a choice offends, the more the crowd loves it, and it
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
  const wild = !!(choice && choice.wild);
  // Net effect on the four institutions. Positive means the choice HELPS them,
  // i.e. it is the sensible, grown-up, common-sense move.
  let offended = 0, net = 0;
  ['congress', 'courts', 'press', 'street'].forEach(k => {
    const v = eff[k] || 0; net += v; if (v < 0) offended++;
  });

  // THE BASE ARE STUPID AND MEAN. They only ever reward transgression, lies and
  // silliness. A common-sense choice (net-good for the institutions, and not a
  // wildcard) can NEVER please them: it always costs base, however the card was
  // written. Honesty reads to the movement as weakness.
  if (net > 0 && !wild) {
    eff.base = Math.min(eff.base || 0, -2);
    return eff;
  }

  // Otherwise the base can be fed, but only red meat (a positive base value on a
  // transgressive or silly choice). Amplify it for every institution offended,
  // and again if the choice is pure chaos.
  const b = eff.base || 0;
  if (b <= 0) return eff;
  let mult = 1;
  if (offended >= 1) mult += AD.BASE_APPETITE * offended;   // transgression
  if (wild) mult += AD.BASE_WILD_BONUS;                     // chaos
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
   dictatorship costs: rookie 2 (55+52=107), standard 3 (55+44=99, one short),
   historic 2 but on a 40-month clock with every meter sagging underneath you. */
AD.DIFFS = {
  rookie: {
    id: 'rookie', label: 'Rookie', months: 48, capture: 90, pillarValue: 26, timer: 120,
    startCash: 4, drift: 0, wealthGoal: 12, inheritMult: 0.5,
    hint: 'Ninety is a capture, and two of them is enough. The institutions are tired.'
  },
  standard: {
    id: 'standard', label: 'Standard', months: 48, capture: 100, pillarValue: 22, timer: 60,
    startCash: 3, drift: 0, wealthGoal: 15, inheritMult: 1,
    hint: 'One term, and a dictatorship costs three of the four branches. The intended experience.'
  },
  historic: {
    // pillarValue 23 puts two pillars at 46, so a win needs rawAuth 54 of a
    // possible 55, effectively "max out everything AND take two branches, or
    // take three." 22 makes it impossible; 25 makes it easy. It is a cliff.
    id: 'historic', label: 'Historic', months: 40, capture: 100, pillarValue: 23, timer: 30,
    startCash: 2, drift: 0, pressureMult: 2, wealthGoal: 20, inheritMult: 1.6,
    hint: 'Forty months, three branches, twenty seconds a decision, and every institution you take ' +
          'makes the next one fight twice as hard.'
  }
};

/* ---------- Portrait options --------------------------------------------- */
/* ---------- Run modifiers (mutators) --------------------------------------
   Optional toggles chosen at setup that reshape the country you start with,
   for variety without a new difficulty. Applied once, after inheritance, at
   the very start of a term. `mods` shifts the opening meters; `cash` shifts
   the opening fortune; `heat` seeds the Saint Ambrose scandal; `flag` marks
   the run so systems can react. Stackable, pick as many as you like. */
AD.MUTATORS = [
  { id: 'landslide', label: 'Landslide', glyph: '🎉',
    blurb: 'You won by forty points. The whole country starts warmer to you.',
    mods: { base: 10, congress: 8, courts: 6, street: 6, press: 4 } },
  { id: 'recession', label: 'Recession', glyph: '📉',
    blurb: 'The economy is in freefall the day you arrive. Less cash, angrier streets.',
    mods: { street: -10, congress: -6 }, cash: -1.5, flag: 'mutRecession' },
  { id: 'wartime', label: 'Wartime', glyph: '💥',
    blurb: 'You inherit a shooting war. The base rallies; the institutions do not.',
    mods: { base: 8, street: -6, congress: -8, courts: -4 }, flag: 'mutWartime' },
  { id: 'scandal', label: 'Scandal-Plagued', glyph: '🗞️',
    blurb: 'Saint Ambrose is already leaking on day one. The press is hunting from the start.',
    mods: { press: -8, base: 4 }, heat: 6, flag: 'mutScandal' },
  { id: 'thinice', label: 'Thin Ice', glyph: '🧊',
    blurb: 'A hostile establishment and a wary base. Every institution starts against you.',
    mods: { base: -8, congress: -5, courts: -5, press: -5, street: -5 }, flag: 'mutThinIce' }
];
AD.mutatorById = id => AD.MUTATORS.find(m => m.id === id);

/* Apply the chosen mutators to a freshly-started run (after inheritance). */
AD.applyMutators = function (run, ids) {
  (ids || []).forEach(id => {
    const m = AD.mutatorById(id);
    if (!m) return;
    if (m.mods) AD.FKEYS.forEach(k => { if (m.mods[k]) run.meters[k] = AD.clamp(run.meters[k] + m.mods[k], 8, 100); });
    if (m.cash) run.cash = Math.max(0, Math.round((run.cash + m.cash) * 100) / 100);
    if (m.heat && AD.bumpHeat) AD.bumpHeat(run, m.heat);
    if (m.flag) { run.flags = run.flags || {}; run.flags[m.flag] = true; }
  });
  run.mutators = (ids || []).slice();
};

AD.PORTRAIT = {
  hair: ['#e8c766', '#d9d3c4', '#8a6a3c', '#3c3128', '#b5442e', '#f2ead6'],
  /* The last entry is not a human skin tone and is not meant to be. It is
     the shade a man arrives at after a decade of committing to a bit. */
  skin: ['#e8a86b', '#f0c9a0', '#c98650', '#8d5a34', '#5e3a22', '#ffbd63', '#ff8a1f'],
  tie:  ['#c8342f', '#2d5fa8', '#e0b33a', '#2f7a52', '#6b3f8f', '#1b1b1b'],
  suit: ['#1c2230', '#2b2b2b', '#31384a', '#43301f', '#0f2a24', '#4a1f27'],
  build: [0.82, 0.91, 1.0, 1.13, 1.28],   // horizontal body scale: slim -> large (default idx 2)
  sex:  ['male', 'female']                 // female = longer hair, open collar, no tie
};
AD.PARTY_COLORS = ['#c8342f', '#2d5fa8', '#e0b33a', '#2f7a52', '#6b3f8f', '#e07a2d'];

/* ---------- Default settings --------------------------------------------- */
AD.DEFAULT_SETTINGS = { timer: true, motion: false, clean: false, pack: false, cb: false, haptics: true, music: true, muted: false };

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
    portrait: opts.portrait || { hair: 0, skin: 0, tie: 0, suit: 0, build: 2, sex: 0 },
    difficulty: d.id,
    mutators: opts.mutators || [],

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
    cash: d.startCash,                            // personal wealth (the fortune)
    purse: AD.START_PURSE,                         // national treasury (wars, tariffs)
    bored: AD.BORED_START,                         // the Boredometer: how BORED he is (low is good)
    sp500: 5000,                                   // the market index, tracked monthly
    biz: 100,                                       // the President's own business index
    marketHistory: [{ m: 0, sp: 5000, biz: 100 }], // for the Economy trading chart
    wealthGoal: d.wealthGoal || AD.WEALTH_GOAL,   // fortune target for this run
    authority: 0,
    rawAuth: 0,                 // earned by decisions, capped at AD.SOFT_CAP
    pillarAuth: 0,              // earned only by capturing power centres
    vpAmbition: 0,              // how far the Vice President has outgrown you (0-100)
    doctrines: [],              // ids of unlocked doctrines
    doctrineOffered: [],        // doctrines already offered (signed or binned)
    wounded: {},                // power centres that have collapsed to the floor
    shieldUsed: false,          // Immunity Shield consumed?
    seen: [],                   // card ids already played
    flags: {},                  // story flags set by choices
    queue: [],                  // forced next cards (scripted beats)
    log: [],                    // {month, title, choice, deltas}
    assets: [],                 // owned corruption holdings, see corruption.js
    renos: [],                  // structures built on the residence, see renovations.js
    senate: [],                 // the 100-seat chamber, see senate.js
    press: [],                  // the press room, see press.js
    streets: [],                // the cities and their unrest, see street.js
    wars: [],                   // ongoing wars, see war.js
    judges: [],                 // the bench, see courts.js
    tariffs: [],                // active tariffs, see economy.js
    pardoned: [],               // ids of people pardoned, see pardons.js
    relations: {},              // diplomacy standing by nation, see economy.js
    clauses: [],                // constitutional clauses broken, see constitution.js
    stats: { grabs: 0, restraints: 0, timeouts: 0, peakCash: d.startCash, briefings: 0, bought: 0, built: 0,
      cabinetChurn: 0,           // cabinet officials fired/replaced this term, see pack-j-cabinet.js
      truthIndex: 50 },          // 0-100, how far official statements drift from reality; see dossier.js
    over: false,
    legacy: opts.legacy || null // inherited wreckage, see AD.inheritance()
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
  'peaceful-transfer': { base: -6, note: 'Your party lost. Twice, if you count the mood.' },
  'merely-president':  { press: -5, street: -5, note: 'Four years of norm-breaking with nothing to show for it has left everyone tired and nobody afraid.' },
  'the-count':    { courts: -10, street: -8, note: 'The last administration tried to have the count set aside. The clerks remember which ones held.' },
  'the-standoff': { street: -12, congress: -8, note: 'For eleven days this country had two presidents. It is still arguing about which one it had.' },
  'the-refusal':  { congress: -10, courts: -8, note: 'Somebody in this building said "no, sir" and it worked. That is now a thing people know can be done.' },
  'dictator':     { base: -5, congress: -12, courts: -12, press: -12, street: -12,
                    note: 'You inherit an office that was already bent into a new shape, and a country that has watched it happen once.' },
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
AD.CHAOS_CAP = 3;    // a long save file must stay winnable, this is the floor of hope
AD.CHAOS_DRAG = 2;   // points per chaos level, institutions only

/* Builds the inheritance for a new run from the previous administration.
   Returns null on a clean slate. */
AD.inheritance = function (difficulty) {
  const lib = AD.loadLibrary();
  if (!lib.length) return null;
  const last = lib[0];
  const scar = AD.SCARS[last.endingId] || {};
  const chaos = AD.clamp(AD.store.read(AD.CHAOS_KEY, 0), 0, AD.CHAOS_CAP);
  // The country you inherit is worse on harder settings and gentler on easier
  // ones: Rookie halves the wreckage, Standard leaves it, Historic deepens it.
  const d = AD.DIFFS[difficulty] || AD.DIFFS.standard;
  const mult = d.inheritMult == null ? 1 : d.inheritMult;

  const mods = {};
  AD.FKEYS.forEach(k => {
    // The scar from the last term, plus a general drag for every consecutive
    // term the country has spent being governed badly, all scaled by difficulty.
    // The drag spares THE BASE: institutions inherit the mess, but your
    // movement is yours and starts fresh. Dragging it too made every long
    // save-file spiral into unwinnable and zero-base swallowed the endings.
    const raw = (scar[k] || 0) - (k === 'base' ? 0 : chaos * AD.CHAOS_DRAG);
    const v = Math.round(raw * mult);
    if (v) mods[k] = v;
  });
  return {
    from: last.president, endingId: last.endingId, difficulty: d.id,
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
AD.PLAYED_KEY = 'americandictator.played.v1';   // has this browser ever played?

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

/* Compact "why is this disabled" badge for management-screen buttons.
   Turns a full reason sentence into a tiny lock hint the eye can read at a
   glance, while the button's title keeps the full sentence for hover. */
AD.reasonBadge = function (reason) {
  if (!reason) return '';
  const m = /Authority\s+(\d+)/i.exec(reason);
  if (m) return '🔒 Auth ' + m[1];
  if (/afford|cannot pay|cash/i.test(reason)) return '🔒 $';
  if (/already|yours|owned/i.test(reason)) return '✓';
  if (/once|twice|spent/i.test(reason)) return '✓ done';
  return '🔒';
};
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

/* ---------- management-screen randomness ----------------------------------
   Buying a judge, humiliating a senator or suing an outlet no longer plays out
   the same way every time. These give the management screens their own private
   stream of luck, seeded off the run so a term is reproducible, but kept ENTIRELY
   separate from AD.rng(): touching this never shifts the card sequence, so a
   shared-seed run still draws the identical crises. The state lives on run._rx,
   so it survives save/load. */
AD.reactRoll = function (run) {
  let s = (run._rx == null)
    ? (((AD.Seed && AD.Seed.hash) ? AD.Seed.hash(String(run.seed || 'X') + ':react') : 0x9e3779b9) | 0)
    : run._rx;
  s = (s + 0x6D2B79F5) | 0;
  let t = Math.imul(s ^ (s >>> 15), 1 | s);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  run._rx = s;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};
/* A signed integer jitter in [-mag, +mag]. */
AD.reactJitter = function (run, mag) { return Math.round((AD.reactRoll(run) * 2 - 1) * mag); };
/* True with probability p. */
AD.reactChance = function (run, p) { return AD.reactRoll(run) < p; };

/* Money is tracked in billions. Payoffs and suits now run in the tens of
   millions, so format sub-billion figures as $NNM and larger ones as $N.NB. */
AD.fmtCash = function (b) {
  if (b == null) return '';
  const m = Math.round(b * 1000);
  if (Math.abs(m) < 1000) return '$' + m + 'M';
  const bn = m / 1000;
  return '$' + (m % 1000 === 0 ? bn.toFixed(0) : bn.toFixed(1)) + 'B';
};

/* Swap salty words out when Clean Language is on. */
AD.SALT = [
  [/\bshit\b/gi, 'shhh, '], [/\bshitty\b/gi, 'rotten'], [/\bass\b/gi, 'rear'],
  [/\bbastard\b/gi, 'gentleman'], [/\bdamn\b/gi, 'darn'], [/\bhell\b/gi, 'heck'],
  [/\bbastards\b/gi, 'gentlemen'], [/\bpiss\b/gi, 'irk'], [/\bcrap\b/gi, 'nonsense']
];
AD.clean = function (str, on) {
  if (!on || !str) return str;
  let s = str; AD.SALT.forEach(([re, rep]) => { s = s.replace(re, rep); }); return s;
};
