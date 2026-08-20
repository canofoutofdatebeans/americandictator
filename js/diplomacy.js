/* ============================================================
   AMERICAN DICTATOR, diplomacy.js
   THE STATE DEPARTMENT.

   Diplomacy used to be a tab inside the Economy, which framed it as a
   trade sub-feature. It is not. It is the room that touches every other
   room, and this file is what makes that true rather than just claimed.

   STANDING
   --------
   Every nation carries a relation, 0-100 (see AD.relations). The world's
   opinion of you is the weighted average of the ones that matter, and it
   is tracked in three blocs because they pull in opposite directions:

     allies     the democracies. Cheap to keep, expensive to lose.
     strongmen  the ones your base likes you liking.
     rogues     sanctioned, isolated, and very available.

   WHAT IT TOUCHES (AD.diplomacyTick, run monthly from Engine.advance)
     Congress   allies onside gives your caucus cover; humiliation abroad
                is quoted at you in committee
     Press      foreign coverage bleeds into domestic coverage
     Base       friendship with strongmen thrills them; alliance
                maintenance bores them
     Street     a country nobody will work with feels it at home
     Economy    already wired: relations soften tariff backfire
     War Room   allies fight alongside you, or decline to
     Board      a country you are on good terms with is likelier to join

   None of these are large per month. They compound, which is the point:
   a term of insults is a slow leak in four rooms at once.
   ============================================================ */

AD.DIPLO_BLOCS = {
  allies:    ['ally', 'partner'],
  strongmen: ['strongman', 'oil'],
  rogues:    ['rogue', 'joke']
};

/* The nations that actually move the needle: the ones with real weight. */
AD.diploBlocOf = function (n) {
  if (!n) return null;
  let found = null;
  Object.keys(AD.DIPLO_BLOCS).forEach(b => {
    if (AD.DIPLO_BLOCS[b].indexOf(n.kind) !== -1) found = b;
  });
  return found;
};

/* Average relation per bloc, plus an overall. 50 is neutral. */
AD.diploStanding = function (run) {
  const out = { allies: 50, strongmen: 50, rogues: 50, overall: 50, worst: null, best: null };
  if (!AD.ECON_NATIONS) return out;
  const sums = {}, counts = {};
  let lo = 101, hi = -1;
  AD.ECON_NATIONS.forEach(n => {
    const b = AD.diploBlocOf(n);
    if (!b) return;
    const r = AD.relations(run, n.id);
    sums[b] = (sums[b] || 0) + r;
    counts[b] = (counts[b] || 0) + 1;
    if (r < lo) { lo = r; out.worst = n; }
    if (r > hi) { hi = r; out.best = n; }
  });
  let total = 0, tc = 0;
  Object.keys(AD.DIPLO_BLOCS).forEach(b => {
    if (counts[b]) { out[b] = Math.round(sums[b] / counts[b]); total += sums[b]; tc += counts[b]; }
  });
  out.overall = tc ? Math.round(total / tc) : 50;
  return out;
};

/* How many nations sit below/above the thresholds that matter. */
AD.diploCounts = function (run) {
  const c = { hostile: 0, cold: 0, warm: 0, close: 0 };
  (AD.ECON_NATIONS || []).forEach(n => {
    const r = AD.relations(run, n.id);
    if (r < 25) c.hostile++;
    else if (r < 45) c.cold++;
    else if (r < 70) c.warm++;
    else c.close++;
  });
  return c;
};

/* ---------- the monthly bleed ----------------------------------------------
   This is the part that makes Diplomacy a real room rather than a screen of
   flavour: standing leaks into four other meters, every month, small. */
AD.diplomacyTick = function (run) {
  const out = { deltas: {}, notes: [] };
  if (!AD.ECON_NATIONS) return out;
  const st = AD.diploStanding(run);
  const counts = AD.diploCounts(run);

  const bump = (k, v, why) => {
    if (!v || run.locked[k]) return;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + v, 0, 100);
    if (run.meters[k] !== before) {
      out.deltas[k] = (out.deltas[k] || 0) + (run.meters[k] - before);
      if (why) out.notes.push(why);
    }
  };

  /* ALLIES give your own caucus cover to back you, or take it away. */
  if (st.allies >= 65)      bump('congress', 1, 'allies onside');
  else if (st.allies <= 30) bump('congress', -1, 'the alliance is a running sore');

  /* Foreign coverage is coverage. A president nobody abroad will stand next to
     is covered that way at home too. */
  if (st.overall >= 68)      bump('press', 1, 'good notices abroad');
  else if (st.overall <= 32) bump('press', -1, 'isolated, and covered as isolated');

  /* The base does not care about alliances and cares enormously about you being
     photographed with a strongman. */
  if (st.strongmen >= 70)    bump('base', 1.2, 'the strongman photographs land well');
  if (st.allies >= 75)       bump('base', -0.8, 'summitry bores them');

  /* A country that has fallen out with everybody feels it on its own streets. */
  if (counts.hostile >= 12)  bump('street', -1, counts.hostile + ' governments now openly hostile');
  else if (counts.close >= 25) bump('street', 1, 'the world is, broadly, calm about you');

  return out;
};

/* Allies who will actually turn up. Read by the War Room. */
AD.willingAllies = function (run) {
  return (AD.ECON_NATIONS || []).filter(n =>
    AD.diploBlocOf(n) === 'allies' && AD.relations(run, n.id) >= 65);
};

/* Relations tilt whether a country takes a Board of Peace seat: a country you
   have insulted will not be bought, and one you are close to is easier. */
AD.diploBoardShift = function (run, nationId) {
  const r = AD.relations(run, nationId);
  if (r >= 70) return 1;      // warmer: more likely
  if (r <= 25) return -1;     // insulted: will not take the call
  return 0;
};

/* Label for a single relation. */
AD.relLabel = function (r) {
  if (r >= 80) return { key: 'close',   label: 'Close' };
  if (r >= 65) return { key: 'warm',    label: 'Warm' };
  if (r >= 45) return { key: 'neutral', label: 'Correct' };
  if (r >= 25) return { key: 'cold',    label: 'Cold' };
  return { key: 'hostile', label: 'Hostile' };
};
