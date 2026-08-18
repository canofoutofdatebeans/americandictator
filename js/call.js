/* ============================================================
   AMERICAN DICTATOR — call.js
   THE PHONE — executive time.

   A screen with three address books — Allies, The Press, Enemies —
   and a long list of people to call under each. Pick who, pick what
   to say, and the country's ratings move accordingly.

   The register is deliberate: the President speaks in the bombastic,
   superlative, grievance-and-greatness voice the brief asks for. It
   is a STYLE, not a person — every name in the address book is
   fictional, like everything else in the game.

   Calls are free but rationed: two a month (AD.CALLS_PER_MONTH),
   refilled each time the clock ticks, so the phone is a monthly
   decision and not a base-farming button. Effects are smaller than a
   policy card's — it is a phone call, not an executive order — and
   the SAME action lands very differently depending on who you rang:
   telling an enemy they are a loser is red meat; telling an ally the
   same thing chills your own caucus.
   ============================================================ */

AD.CALLS_PER_MONTH = 2;

/* Fictional address book. `cat`: 'ally' | 'press' | 'enemy'. */
AD.CALL_BOOK = [
  // ---- allies ----
  { id: 'vp',     cat: 'ally', name: 'Vice President Danforth', note: 'loyal, mostly' },
  { id: 'cos',    cat: 'ally', name: 'Chief of Staff Krank',    note: 'holding it together' },
  { id: 'broom',  cat: 'ally', name: 'Czar Vandermeer',         note: 'the efficiency man' },
  { id: 'pastor', cat: 'ally', name: 'Reverend Muncy',          note: 'says grace at rallies' },
  { id: 'anchor', cat: 'ally', name: 'Brick Tandy',             note: 'your favourite anchor' },
  { id: 'volkov', cat: 'ally', name: 'President Volkov',         note: 'of Rusalka; a strong guy' },
  { id: 'son',    cat: 'ally', name: 'Trent Jr.',               note: 'the boy' },

  // ---- the press ----
  { id: 'beacon-ed',  cat: 'press', name: 'Editor of The Beacon',   note: 'enemy of the people' },
  { id: 'meridian-a', cat: 'press', name: 'Anchor at The Meridian', note: 'fake news, low ratings' },
  { id: 'wire',       cat: 'press', name: 'The Wire Service Desk',   note: 'they get it wrong' },
  { id: 'gazette',    cat: 'press', name: 'Publisher, Metro Gazette',note: 'failing, big trouble' },
  { id: 'feed',       cat: 'press', name: 'The Feed\'s Editors',     note: 'they suppress you' },
  { id: 'weekly',     cat: 'press', name: 'The Republic Weekly',     note: 'a total disaster' },

  // ---- enemies ----
  { id: 'opp',    cat: 'enemy', name: 'Leader Ruiz-Bloom',   note: 'the opposition; sad' },
  { id: 'gov',    cat: 'enemy', name: 'Governor Vasquez-Moore',note: 'running her state into the ground' },
  { id: 'judge',  cat: 'enemy', name: 'so-called Judge Vane', note: 'a disgrace to the robe' },
  { id: 'chen',   cat: 'enemy', name: 'Chairman Chen',        note: 'of Cathay; very tough' },
  { id: 'ostrov', cat: 'enemy', name: 'Premier Ostrov',       note: 'of Glacia; not a friend' },
  { id: 'pundit', cat: 'enemy', name: 'the pundit Nate Brill',note: 'nobody watches him' },
  { id: 'speaker',cat: 'enemy', name: 'the other Speaker',    note: 'weak, ineffective' }
];

AD.callTargetById = id => AD.CALL_BOOK.find(t => t.id === id);

/* ---------- what to say --------------------------------------------------
   Each action has a `line(target)` that returns the President's quote in
   the requested voice, and an `eff(cat)` that returns the meter effect for
   the category of person on the other end of the line. --------------------- */
AD.CALL_ACTIONS = [
  {
    id: 'admire', label: 'Admire Them', icon: '🫡',
    line: t => '"' + t.name.replace(/^(President|Vice President|Chief of Staff|Czar|Reverend|Governor|Leader|Chairman|Premier) /, '') +
      ', you are fantastic — one of the all-time greats, everybody says it, believe me."',
    eff: cat => cat === 'ally'  ? { congress: 3, base: 2, press: 1 }
             : cat === 'press' ? { press: 4, base: -1 }
             : { base: -5, press: 4, courts: 3, congress: 2 },
    tail: cat => cat === 'enemy'
      ? ' Your base cannot believe you were nice to them, and says so.'
      : ' They are, briefly, delighted.'
  },
  {
    id: 'complain', label: 'Complain About Everything', icon: '😤',
    line: () => '"Everything is a disaster, it is very unfair, nobody has been treated worse than me, ' +
      'nobody, it is a witch hunt, total scam, sad!"',
    eff: cat => cat === 'ally'  ? { base: 4, congress: -3, press: -2 }
             : cat === 'press' ? { base: 5, press: -4 }
             : { base: 6, press: -3, street: -2, courts: -1, auth: 1 },
    tail: () => ' Forty minutes of grievance. The base eats it up.'
  },
  {
    id: 'losers', label: 'Tell Them They\'re Losers', icon: '👎',
    line: t => '"You are a total loser, a disaster, everybody knows it. Low energy. Sad! ' +
      'People are saying you are the worst, ' + t.name.split(' ').pop() + ', the worst."',
    eff: cat => cat === 'ally'  ? { base: 6, congress: -7, press: -3 }
             : cat === 'press' ? { base: 7, press: -6, courts: -2, auth: 2 }
             : { base: 9, press: -4, congress: -3, street: -2, courts: -1, auth: 3 },
    tail: cat => cat === 'ally'
      ? ' You just did that to your own side. The caucus goes quiet.'
      : ' The base roars. The clip is everywhere by lunchtime.'
  },
  {
    id: 'greatness', label: 'Explain How Great You Are', icon: '🦅',
    line: () => '"Nobody has done more than me, ever, in the history of this country, probably ever. ' +
      'The best economy, the best everything. A lot of people are saying it. Tremendous."',
    eff: cat => cat === 'ally'  ? { base: 4, press: -2, auth: 2 }
             : cat === 'press' ? { base: 4, press: -4, auth: 2 }
             : { base: 5, press: -3, courts: -1, auth: 2 },
    tail: () => ' It goes on for a while. It always does.'
  },
  {
    id: 'ramble', label: 'Ramble For 40 Minutes', icon: '🌀',
    line: () => '"...and the wind, you know, they say the wind, and the boats, the sharks, the batteries — ' +
      'a lot of people don\'t know this — and the late great somebody, tremendous guy..."',
    eff: cat => cat === 'ally'  ? { base: 5, press: -3, congress: -2, auth: 1 }
             : cat === 'press' ? { base: 5, press: -5, auth: 1 }
             : { base: 5, press: -4, courts: -1, street: -1, auth: 1 },
    tail: () => ' Nobody on the call can find a way to end it.'
  }
];

AD.callAction = id => AD.CALL_ACTIONS.find(a => a.id === id);

AD.callsLeft = run => (run.calls === undefined ? AD.CALLS_PER_MONTH : run.calls);

/* Make the call. Returns {ok, reason} or {ok:true, target, action, deltas, line}. */
AD.doCall = function (run, targetId, actionId) {
  const t = AD.callTargetById(targetId);
  const a = AD.callAction(actionId);
  if (!t || !a) return { ok: false, reason: 'Wrong number.' };
  if (AD.callsLeft(run) <= 0) return { ok: false, reason: 'No more calls this month.' };

  run.calls = AD.callsLeft(run) - 1;
  const eff = a.eff(t.cat) || {};
  const deltas = AD.applySenateEffect(run, eff);   // shared meter/cash/auth applier
  run.stats = run.stats || {};
  run.stats.calls = (run.stats.calls || 0) + 1;
  return {
    ok: true, target: t, action: a, deltas,
    line: a.line(t) + (a.tail ? a.tail(t.cat) : '')
  };
};

/* Refill the monthly allowance. Called from Engine.advance(). */
AD.callTick = function (run) {
  run.calls = AD.CALLS_PER_MONTH;
};
