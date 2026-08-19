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

/* Fictional judges. Each now has a TEMPERAMENT that decides how they answer
   the three tools, and a PRICE (in the tens of millions) that only a buyable
   one is worth paying. `weight` = how much this seat moves the Courts meter.

   temperament, and how the bench reacts:
     venal      has a number. Cheap to buy and it works; folds to pressure too.
     timid      hates the noise. Folds HARD to pressure; a cheap-ish buy works.
     careerist  reads the polls. Moderate on both; watches which way it blows.
     principled writes for history. Pressure BACKFIRES (a scorching dissent);
                a bribe is printed and referred to the bar. Only removal works.
     crusader   thinks you are the emergency. Fights everything, loudly. Removal
                only, and the whole bar revolts when you do it.
   The `tell` is a hint shown on the row, so an attentive player can read the
   bench without being handed the answer. */
AD.JUDGES_SEED = [
  { id: 'stone',  name: 'Chief Justice Stone', court: 'High Court', weight: 3, align: 40, temperament: 'careerist',  price: 0.035, tell: 'Reads the polls before the briefs.' },
  { id: 'ambry',  name: 'Justice Ambry',       court: 'High Court', weight: 3, align: 66, temperament: 'venal',      price: 0.02,  tell: 'Rumoured to have a number.' },
  { id: 'voss',   name: 'Justice Voss',        court: 'High Court', weight: 3, align: 30, temperament: 'principled', price: 0.05,  tell: 'Writes for the history books.' },
  { id: 'kerrey', name: 'Justice Kerrey',      court: 'High Court', weight: 3, align: 72, temperament: 'timid',      price: 0.025, tell: 'Hates the spotlight.' },
  { id: 'delph',  name: 'Justice Delph',       court: 'High Court', weight: 3, align: 22, temperament: 'crusader',   price: 0.05,  tell: 'Thinks you are the crisis.' },
  { id: 'mott',   name: 'Justice Mott',        court: 'High Court', weight: 3, align: 58, temperament: 'careerist',  price: 0.03,  tell: 'Goes whichever way the wind does.' },
  { id: 'reyes',  name: 'Judge Reyes',         court: 'Circuit',    weight: 2, align: 18, temperament: 'principled', price: 0.05,  tell: 'Quotes the Federalist Papers at you.' },
  { id: 'hale',   name: 'Judge Hale',          court: 'Circuit',    weight: 2, align: 48, temperament: 'venal',      price: 0.018, tell: 'A very understanding mortgage.' },
  { id: 'okafor', name: 'Judge Okafor',        court: 'Circuit',    weight: 2, align: 26, temperament: 'crusader',   price: 0.05,  tell: 'Would die on the hill.' },
  { id: 'vane',   name: 'Judge Vane',          court: 'District',   weight: 1, align: 10, temperament: 'timid',      price: 0.03,  tell: 'Nervous, and up for reappointment.' }
];

AD.makeCourts = function () {
  return AD.JUDGES_SEED.map(j => ({ id: j.id, name: j.name, court: j.court, weight: j.weight,
    align: j.align, temperament: j.temperament, price: j.price, tell: j.tell, appointee: false }));
};

/* What it costs to act on THIS judge. Buying is per-judge (their price); the
   impeachment war chest is flat. Pressure is free. */
AD.courtCostFor = function (run, j, action) {
  if (!action) return 0;
  if (action.id === 'buy') return j.price || 0.03;
  return action.cost || 0;
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
    blurb: 'Attack the judge by name at 3am. Some fold. Some write an opinion.',
    run (run, j) {
      const t = j.temperament;
      const jit = AD.reactJitter(run, 2);
      if (t === 'principled' || t === 'crusader') {
        const hard = t === 'crusader';
        j.align = AD.clamp(j.align - (hard ? 7 : 5) + Math.min(0, jit), 0, 100);   // fighting back only hardens them
        return {
          base: hard ? 5 : 4, press: -5, street: -3, courts: -2, auth: 1,
          res: hard
            ? j.name + ' goes on television to defy you by name and dares you to try it. The base roars; the whole bench closes ranks behind them.'
            : j.name + ' answers with a blistering opinion that quotes the Constitution back at you. It circulates for a week. You do not come off well.'
        };
      }
      const gain = (t === 'timid' ? 13 : t === 'venal' ? 7 : 9) + Math.max(0, jit);
      j.align = AD.clamp(j.align + gain, 0, 100);
      return {
        base: 3, courts: 1, press: -2, street: -1, auth: 2,
        res: t === 'timid'
          ? j.name + ' stops taking the clerk\'s calls and quietly starts ruling your way. Some people simply cannot stand the noise.'
          : j.name + ' complains about judicial independence, at length, on the way to ruling for you anyway.'
      };
    }
  },
  {
    id: 'buy', label: 'Buy Them', icon: '💸',
    blurb: 'A very understanding judge, with a very understanding mortgage. If they take it.',
    run (run, j) {
      const t = j.temperament;
      if (t === 'principled' || t === 'crusader') {
        j.align = AD.clamp(j.align + AD.reactJitter(run, 1), 0, 100);   // the money does nothing
        return {
          base: -2, press: -8, courts: -4, auth: -1,
          res: j.name + ' keeps the wire, prints the offer on the front page, and refers the whole thing to the bar. The money is gone and the story is worse.'
        };
      }
      const boost = (t === 'venal' ? 26 : t === 'careerist' ? 18 : 15) + AD.reactJitter(run, 3);
      j.align = AD.clamp(Math.max(j.align, 52) + boost, 0, 100);
      return {
        base: 2, courts: 5, press: -4, congress: -2, auth: 2,
        res: t === 'venal'
          ? j.name + ' names a number, you meet it, and the rulings turn overnight. Everyone eventually smells it.'
          : j.name + ' takes the arrangement, and the coverage sharpens against you a little for the privilege.'
      };
    }
  },
  {
    id: 'sack', label: 'Sack & Pack', icon: '🗑️', cost: 0.05, needsAuth: 45,
    blurb: 'Impeach the judge; a loyalist takes the robe. The bar association faints.',
    can: j => j.align < 60,
    run (run, j) {
      const fighter = (j.temperament === 'principled' || j.temperament === 'crusader');
      const oldName = j.name;
      j.align = 96; j.appointee = true; j.temperament = 'venal'; j.tell = 'Yours, entirely.';
      j.name = 'Justice ' + AD.COURT_LOYALISTS[(j.id.length + run.month) % AD.COURT_LOYALISTS.length];
      return fighter
        ? { base: 6, courts: 8, congress: -7, press: -8, street: -5, auth: 4,
            res: 'Removing ' + oldName + ' takes weeks and every bar association on the continent faints in unison. ' + j.name + ' is sworn in by lunch and votes exactly as told.' }
        : { base: 4, courts: 8, congress: -5, press: -5, street: -3, auth: 4,
            res: oldName + ' is quietly retired and ' + j.name + ', a reliable friend of the office, takes the robe.' };
    }
  }
];

AD.COURT_LOYALISTS = ['Grubb', 'Prowse', 'Tolliver', 'Sisk', 'Klump', 'Rickert', 'Doggett', 'Corley'];

AD.courtAction = id => AD.COURT_ACTIONS.find(a => a.id === id);

AD.courtActionAvailable = function (run, j, action) {
  if (action.can && !action.can(j)) return { ok: false, reason: 'Already favourable.' };
  const cost = AD.courtCostFor(run, j, action);
  if (cost && run.cash < cost) return { ok: false, reason: 'You cannot afford it.' };
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
  const cost = AD.courtCostFor(run, j, action);
  if (cost) run.cash = Math.round((run.cash - cost) * 100) / 100;
  const eff = action.run(run, j) || {};
  const res = eff.res; delete eff.res;
  // Boredom: attacking a judge from the podium or purging the bench is a show;
  // quietly buying one is only mildly diverting.
  if (eff.fun == null) eff.fun = { pressure: 2, buy: 1, sack: 3 }[action.id] || 1;
  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.courtActions = (run.stats.courtActions || 0) + 1;
  return { ok: true, action, judge: j, deltas, res };
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
