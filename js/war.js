/* ============================================================
   AMERICAN DICTATOR — war.js
   THE WAR ROOM — declare war on anyone, for any reason at all.

   Pick a country and pick a pretext. There is no requirement that
   the pretext be good, or true, or connected to anything the country
   has done. The five reasons on offer are: you want their resources,
   you are bored, you do not like their leader, you are trying to
   impress somebody, and — the useful one — you need a war to bury a
   scandal at home.

   Declaring is immediate and juicy: the base rallies, Authority
   jumps, and the institutions that were never asked revolt. The war
   then goes ONGOING and resolves over the following months into
   either a VICTORY (cash, base, a parade) or a QUAGMIRE (body bags,
   the street turns, the courts wake up). A weak country and high
   Authority make victory likely; a great power is a coin-flip at best.

   The "deflect" pretext knocks the Saint Ambrose heat down hard — a
   war really will push a scandal off the front page, which is the
   entire reason presidents reach for one.

   Every country and leader is fictional. Resolution uses a war-local
   deterministic rng so it never perturbs the card-draw stream.
   ============================================================ */

/* Fictional targets. strength 0-3 (0 = uninhabited joke), loot = cash on
   victory (higher for the resource-rich). */
AD.WAR_TARGETS = [
  { id: 'cathay',   name: 'China',            leader: 'Chairman Chen',   strength: 3, loot: 0.6, blurb: 'A great power. Very tough. Everybody says it.' },
  { id: 'glacia',   name: 'Iran',            leader: 'Premier Ostrov',  strength: 3, loot: 0.5, blurb: 'Sanctioned, defiant, and not a friend.' },
  { id: 'qadira',   name: 'Qatar',            leader: 'the Emir',        strength: 2, loot: 1.2, blurb: 'Sitting on an ocean of oil. Weak army.' },
  { id: 'ukrania',  name: 'Ukraine',           leader: 'President Bohdan', strength: 2, loot: 0.4, blurb: 'Contested borders, a lot of grain.' },
  { id: 'hermit',   name: 'North Korea',leader: 'the Supreme Guide',strength: 2, loot: 0.3, blurb: 'Isolated, unpredictable, missiles.' },
  { id: 'baldoro',  name: 'Panama',       leader: 'President Marchetti',strength: 1, loot: 0.5, blurb: 'Small, sunny, a lot of nice hotels.' },
  { id: 'northland',name: 'Canada',         leader: 'Prime Minister Aas',strength: 1, loot: 0.7, blurb: 'Peaceful, rich, owns an autonomous territory you want.' },
  { id: 'penguin',  name: 'the Heard Islands',leader: 'no one',         strength: 0, loot: 0.1, blurb: 'Uninhabited. Population: penguins. Zero army.' }
];

AD.warTargetById = id => AD.WAR_TARGETS.find(t => t.id === id);

AD.WAR_PRETEXTS = [
  {
    id: 'resources', label: 'Take Their Resources', icon: '💰',
    line: t => 'We are going to take the ' + (t.loot >= 1 ? 'oil' : 'resources') + '. It is going to be beautiful.',
    eff: { base: 4, auth: 2, cash: -0.2 }, loot: true
  },
  {
    id: 'boredom', label: 'You\'re Bored', icon: '🥱',
    line: () => 'Frankly, nothing was happening. A little war livens things up. Very exciting.',
    eff: { base: 5, press: -3, courts: -2, auth: 2 }
  },
  {
    id: 'leader', label: 'You Dislike Their Leader', icon: '😤',
    line: t => (t.leader === 'no one' ? 'I don\'t like the look of those penguins.' :
      'I have never liked ' + t.leader + '. Weak. Overrated. Total lightweight.'),
    eff: { base: 4, street: -2, auth: 3 }
  },
  {
    id: 'impress', label: 'To Impress Someone', icon: '😎',
    line: () => 'People are going to be very impressed. The most impressed they have ever been.',
    eff: { base: 3, auth: 4, press: -2 }
  },
  {
    id: 'deflect', label: 'Deflect From a Scandal', icon: '📰',
    line: () => 'Look over there! Nobody is talking about the other thing now, are they. Sad!',
    eff: { base: 5, press: -4, courts: -2, auth: 3 }, deflect: 5
  }
];

AD.warPretextById = id => AD.WAR_PRETEXTS.find(p => p.id === id);

AD.ensureWars = function (run) { if (!run.wars) run.wars = []; return run.wars; };
AD.atWarWith = (run, targetId) => (run.wars || []).some(w => w.target === targetId && !w.done);

/* war-local deterministic rng, off the shared card stream */
function warRng (seed) {
  let s = (AD.Seed ? AD.Seed.hash(String(seed)) : 0x9e3779b9) || 1;
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Declare. Immediate effect + a new ongoing war. Returns {ok,...} shape. */
AD.declareWar = function (run, targetId, pretextId) {
  const t = AD.warTargetById(targetId);
  const p = AD.warPretextById(pretextId);
  if (!t || !p) return { ok: false, reason: 'No such war.' };
  if (AD.atWarWith(run, targetId)) return { ok: false, reason: 'Already at war with ' + t.name + '.' };
  AD.ensureWars(run);

  // The base rallies to any flag; the institutions that were never consulted do not.
  const base = { base: 7, auth: 5, street: 2, congress: -5, courts: -6, press: -5, cash: -0.4 };
  const eff = Object.assign({}, base);
  Object.keys(p.eff).forEach(k => { eff[k] = (eff[k] || 0) + p.eff[k]; });
  const deltas = AD.applySenateEffect(run, eff);

  // The useful pretext: a war really does bury a scandal.
  let heat = null;
  if (p.deflect && AD.bumpHeat) heat = AD.bumpHeat(run, -p.deflect);

  run.wars.push({ target: targetId, pretext: pretextId, months: 0, done: false, loot: !!p.loot });
  run.warLog = run.warLog || [];
  run.warLog.push({ name: t.name, pretext: p.id, won: null });
  run.stats = run.stats || {};
  run.stats.wars = (run.stats.wars || 0) + 1;
  return { ok: true, target: t, pretext: p, deltas, heat, line: p.line(t) };
};

/* Monthly: ongoing wars resolve over a few months into victory or quagmire.
   A weak target and high Authority make victory likely. Returns any resolution
   so the UI/turn loop can surface it. */
AD.warTick = function (run) {
  const out = { resolved: [] };
  if (!run.wars || !run.wars.length) return out;

  run.wars.forEach(w => {
    if (w.done) return;
    w.months++;
    const t = AD.warTargetById(w.target);
    const rng = warRng((run.seed || 'X') + w.target + w.months);
    // chance to resolve rises each month it drags on
    if (rng() > 0.35 + w.months * 0.15 && w.months < 5) return;   // still ongoing

    w.done = true;
    const winChance = AD.clamp(0.5 + (run.authority - 50) * 0.004 + (3 - t.strength) * 0.12, 0.12, 0.92);
    const won = rng() < winChance;
    let eff, res;
    if (won) {
      eff = { base: 6, street: 4, auth: 3, courts: -1, cash: w.loot ? t.loot : 0.2 };
      res = 'Victory in ' + t.name + '. ' + (w.loot ? 'The resources are ours. ' : '') + 'There will be a parade.';
    } else {
      eff = { base: -6, street: -7, courts: -5, press: -4, congress: -3, cash: -0.3, auth: -2 };
      res = 'The war in ' + t.name + ' has become a quagmire. The body bags are on the news and the street has turned.';
    }
    w.won = won;
    const rec = (run.warLog || []).slice().reverse().find(x => x.name === t.name && x.won === null);
    if (rec) rec.won = won;
    const deltas = AD.applySenateEffect(run, eff);
    out.resolved.push({ target: t, won, res, deltas });
  });

  // drop resolved wars from the active list after surfacing them once
  run.wars = run.wars.filter(w => !w.done);
  return out;
};

AD.warStatus = function (run) {
  const active = (run.wars || []).filter(w => !w.done);
  return { active: active.length, list: active };
};
