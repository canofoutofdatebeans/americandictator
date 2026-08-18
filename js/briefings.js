/* ============================================================
   AMERICAN DICTATOR — briefings.js
   The fourth Chief of Staff Pack feature: a short read on what a
   decision actually cost you, in Deborah Krank's voice.

   Generated from the state of the board rather than written per
   card, so it stays correct as the deck grows.
   ============================================================ */

AD.BRIEFERS = [
  { name: 'Deborah Krank', role: 'Chief of Staff', sil: '🗂' },
  { name: 'Nadia Fisk',    role: 'Pollster',       sil: '📊' },
  { name: 'Sy Feltman',    role: 'Personal Counsel',sil: '💼' }
];

/* Returns { who, lines[] } or null if there is nothing worth saying. */
AD.briefing = function (run, out) {
  const lines = [];
  const d = out.deltas || {};
  const cap = AD.DIFFS[run.difficulty].capture;

  /* --- the headline movement --- */
  let biggest = null, mag = 0;
  AD.FKEYS.forEach(k => {
    if (d[k] && Math.abs(d[k]) > mag) { mag = Math.abs(d[k]); biggest = k; }
  });
  if (biggest) {
    const f = AD.faction(biggest);
    lines.push(d[biggest] > 0
      ? `That bought you ${f.name.toLowerCase()} — ${d[biggest]} points of it, which is more than most weeks deliver.`
      : `That cost you ${Math.abs(d[biggest])} points of ${f.name.toLowerCase()}. Worth knowing before the next one lands.`);
  }

  /* --- the branch closest to falling over --- */
  let weak = null, low = 101;
  AD.FACTIONS.forEach(f => {
    if (run.locked[f.key]) return;
    if (run.meters[f.key] < low) { low = run.meters[f.key]; weak = f; }
  });
  if (weak && low <= 30) {
    lines.push(`${weak.name} is at ${low}. ${low <= 16
      ? 'One more bad month and that is the whole administration.'
      : 'I would stop feeding that one to the wolves.'}`);
  }

  /* --- the branch closest to being taken --- */
  let near = null, high = -1;
  AD.FACTIONS.forEach(f => {
    if (!f.capturable || run.locked[f.key]) return;
    if (run.meters[f.key] > high) { high = run.meters[f.key]; near = f; }
  });
  if (near && high >= cap - 22) {
    lines.push(`${near.name} is ${cap - high} points from capture. That is ${near.pillar} — and it is worth more than anything on this desk.`);
  }

  /* --- the cap --- */
  if (out.authCapped) {
    lines.push(`Authority is pinned at ${AD.SOFT_CAP}. Nothing you decide in this room moves it now. You need a branch.`);
  }

  /* --- the base band --- */
  if (!run.locked.base) {
    const b = run.meters.base;
    if (b <= 30) {
      lines.push(`The base is at ${b} and it drops ${Math.abs(AD.BASE_DECAY)} a month on its own. Feed it or it will find someone who does.`);
    }
  }

  /* --- pressure --- */
  const pillars = Object.keys(run.locked).length;
  if (pillars && run.pressureOn) {
    const f = AD.faction(run.pressureOn);
    lines.push(`${f.name} is absorbing the backlash from what we have already taken — ${pillars * (AD.DIFFS[run.difficulty].pressureMult || 1)} a month, every month, until we take it too.`);
  }

  /* --- money --- */
  if (d.cash && Math.abs(d.cash) >= 0.5) {
    lines.push(d.cash > 0
      ? `Personal position up $${d.cash.toFixed(1)}B. Nobody has asked. Somebody eventually will.`
      : `That was $${Math.abs(d.cash).toFixed(1)}B of your own money. I have noted it as a campaign expense.`);
  }

  if (!lines.length) return null;
  run.stats.briefings = (run.stats.briefings || 0) + 1;
  return {
    who: AD.BRIEFERS[0],
    lines: lines.slice(0, 3)
  };
};
