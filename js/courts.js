/* ============================================================
   AMERICAN DICTATOR, courts.js
   THE BENCH, ten judges you can lean on, buy, or remove.

   The Courts were one meter. This turns them into named judges,
   each with an ALIGNMENT toward you from hostile (0) to captured
   (100), and three ways to move it:

     PRESSURE     free. Attack the judge by name. Intimidation nudges
                  them your way and the base loves the disrespect, 
                  but it chips at judicial independence.
     BUY          a very understanding judge is an affordable judge.
                  Cash flips their alignment friendly. Everyone
                  eventually smells it.
     SACK & PACK  impeach and remove a hostile judge; a hand-picked
                  loyalist takes the robe. Big Courts control, and the
                  whole legal profession revolts.

   A favourable bench nudges the Courts meter up each month; a hostile
   one drags it down (inside the systemic management cap, so it can
   never cascade). Capturing the Courts pillar falls the whole bench
   into line. Deterministic from the seed, off the card RNG stream.
   ============================================================ */

/* Fictional judges. `weight` = how much this seat moves the Courts meter. */
AD.JUDGES_SEED = [
  { id: 'stone',   name: 'Chief Justice Stone',   court: 'High Court', weight: 3, align: 40 },
  { id: 'ambry',   name: 'Justice Ambry',         court: 'High Court', weight: 3, align: 66 },
  { id: 'voss',         name: 'Justice Voss',          court: 'High Court', weight: 3, align: 30 },
  { id: 'kerrey',  name: 'Justice Kerrey',        court: 'High Court', weight: 3, align: 72 },
  { id: 'delph',   name: 'Justice Delph',         court: 'High Court', weight: 3, align: 22 },
  { id: 'mott',    name: 'Justice Mott',          court: 'High Court', weight: 3, align: 58 },
  { id: 'reyes',   name: 'Judge Reyes',           court: 'Circuit',    weight: 2, align: 18 },
  { id: 'hale',    name: 'Judge Hale',            court: 'Circuit',    weight: 2, align: 48 },
  { id: 'okafor',  name: 'Judge Okafor',          court: 'Circuit',    weight: 2, align: 26 },
  { id: 'vane',    name: 'Judge Vane',            court: 'District',   weight: 1, align: 10 }
];

AD.makeCourts = function () {
  return AD.JUDGES_SEED.map(j => ({ id: j.id, name: j.name, court: j.court, weight: j.weight, align: j.align, appointee: false }));
};

AD.ensureCourts = function (run) {
  if (!run.judges || !run.judges.length) run.judges = AD.makeCourts();
  return run.judges;
};

AD.judgeById = (run, id) => (run.judges || []).find(j => j.id === id);

AD.judgeStance = function (j) {
  if (j.align >= 80) return { key: 'captured', label: j.appointee ? 'Yours' : 'In the pocket' };
  if (j.align >= 60) return { key: 'friendly', label: 'Favourable' };
  if (j.align >= 40) return { key: 'neutral',  label: 'Swing' };
  if (j.align >= 20) return { key: 'critical', label: 'Critical' };
  return { key: 'hostile', label: 'Hostile' };
};

AD.courtsSummary = function (run) {
  const j = AD.ensureCourts(run);
  const friendly = j.filter(x => x.align >= 60).length;
  const hostile  = j.filter(x => x.align < 40).length;
  const appointees = j.filter(x => x.appointee).length;
  return { friendly, hostile, appointees, total: j.length };
};

/* ---------- the actions --------------------------------------------------- */
AD.COURT_ACTIONS = [
  {
    id: 'pressure', label: 'Pressure', icon: '📢',
    blurb: 'Attack the judge by name at 3am. Intimidation, and the base cheers.',
    run (run, j) {
      j.align = AD.clamp(j.align + 8, 0, 100);
      return { base: 3, courts: 1, press: -2, street: -1, auth: 2 };
    }
  },
  {
    id: 'buy', label: 'Buy Them', icon: '💸', cost: 0.5,
    blurb: 'A very understanding judge, with a very understanding mortgage.',
    run (run, j) {
      j.align = AD.clamp(Math.max(j.align, 55) + 20, 0, 100);
      return { base: 2, courts: 5, press: -4, congress: -2, auth: 2 };
    }
  },
  {
    id: 'sack', label: 'Sack & Pack', icon: '🗑️', cost: 0.6, needsAuth: 45,
    blurb: 'Impeach the judge; a loyalist takes the robe. The bar association faints.',
    can: j => j.align < 60,
    run (run, j) {
      j.align = 96; j.appointee = true; j.name = 'Justice ' + AD.COURT_LOYALISTS[(j.id.length + run.month) % AD.COURT_LOYALISTS.length];
      return { base: 5, courts: 8, congress: -6, press: -6, street: -4, auth: 4 };
    }
  }
];

AD.COURT_LOYALISTS = ['Grubb', 'Prowse', 'Tolliver', 'Sisk', 'Klump', 'Rickert', 'Doggett', 'Corley'];

AD.courtAction = id => AD.COURT_ACTIONS.find(a => a.id === id);

AD.courtActionAvailable = function (run, j, action) {
  if (action.can && !action.can(j)) return { ok: false, reason: 'Already favourable.' };
  if (action.cost && run.cash < action.cost) return { ok: false, reason: 'You cannot afford it.' };
  if (action.needsAuth && run.authority < action.needsAuth)
    return { ok: false, reason: 'Requires Authority ' + action.needsAuth + '.' };
  return { ok: true };
};

AD.doCourtAction = function (run, judgeId, actionId) {
  const j = AD.judgeById(run, judgeId);
  const action = AD.courtAction(actionId);
  if (!j || !action) return { ok: false, reason: 'No such action.' };
  const avail = AD.courtActionAvailable(run, j, action);
  if (!avail.ok) return avail;
  if (action.cost) run.cash = Math.round((run.cash - action.cost) * 100) / 100;
  const eff = action.run(run, j) || {};
  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.courtActions = (run.stats.courtActions || 0) + 1;
  return { ok: true, action, judge: j, deltas };
};

/* Monthly: the balance of the bench nudges the Courts meter. Runs inside the
   systemic management cap in engine.advance(), so it can never cascade. */
AD.courtsTick = function (run) {
  const out = { deltas: {} };
  if (!run.judges || !run.judges.length || run.locked.courts) return out;
  let net = 0;
  run.judges.forEach(j => {
    if (j.align >= 62) net += j.weight;
    else if (j.align <= 34) net -= j.weight;
  });
  let move = 0;
  if (net >= 6) move = 1;
  else if (net <= -8) move = -1;
  if (move) {
    const before = run.meters.courts;
    run.meters.courts = AD.clamp(before + move, 0, 100);
    if (run.meters.courts !== before) out.deltas.courts = run.meters.courts - before;
  }
  return out;
};
