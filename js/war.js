/* ============================================================
   AMERICAN DICTATOR, war.js
   THE WAR ROOM, a ladder of options against every country.

   The room used to offer the same five "pretexts" for every target and
   then flip a coin. Now each country has its own CHARACTER, some are
   nuclear, one is an ally, and a hidden POSTURE decides whether they
   fold when you lean on them or call your bluff, and every country
   offers a graduated ladder of operations:

     SABRE-RATTLE  free. Threats and troop movements. The fragile ones
                   fold and pay tribute; the defiant and the nuclear
                   call your bluff and cost you a little standing.
     TARGETED STRIKE  a limited operation. Clean and spectacular against
                   a weak target; against a nuclear power it can escalate
                   into a real war or misfire into a catastrophe.
     FULL INVASION  the big commitment. Immediate flag-rally, then an
                   ONGOING war that resolves over months into victory or
                   quagmire, scaled by strength, nukes and Authority.
     REGIME CHANGE  a covert operation to install a friendly government.
                   Huge if it works and the resources flow; a scandal if
                   it is exposed, and the defiant ones usually expose it.

   Attacking an ALLY carries a steep diplomatic surcharge. Outcomes lean
   on the management reaction RNG (AD.reactRoll, off the card stream) so
   the same move never plays the same way twice. Every country and leader
   is fictional. Ongoing wars resolve on a war-local deterministic rng.
   ============================================================ */

/* strength 0-3 (0 = uninhabited joke), loot = cash on a win. nukes raises the
   danger of striking/invading; ally makes any attack expensive; posture drives
   how they answer a threat. */
AD.WAR_TARGETS = [
  { id: 'cathay',   name: 'China',            leader: 'Chairman Chen',      strength: 3, loot: 0.6, nukes: true,  posture: 'defiant',  tell: 'Will call your bluff.' },
  { id: 'glacia',   name: 'Iran',             leader: 'Premier Ostrov',     strength: 3, loot: 0.5, nukes: true,  posture: 'wildcard', tell: 'Genuinely unpredictable.' },
  { id: 'qadira',   name: 'Qatar',            leader: 'the Emir',           strength: 2, loot: 1.2, nukes: false, posture: 'fragile',  tell: 'Rich, and would rather pay.' },
  { id: 'ukrania',  name: 'Ukraine',          leader: 'President Bohdan',   strength: 2, loot: 0.4, nukes: false, posture: 'proxy',    tell: 'Someone bigger has their back.' },
  { id: 'hermit',   name: 'North Korea',      leader: 'the Supreme Guide',  strength: 2, loot: 0.3, nukes: true,  posture: 'wildcard', tell: 'Missiles and no phone number.' },
  { id: 'baldoro',  name: 'Panama',           leader: 'President Marchetti',strength: 1, loot: 0.5, nukes: false, posture: 'fragile',  tell: 'Small, sunny, folds fast.' },
  { id: 'northland',name: 'Canada',           leader: 'Prime Minister Aas', strength: 1, loot: 0.7, nukes: false, ally: true, posture: 'fragile', tell: 'An ally. This gets expensive.' },
  { id: 'penguin',  name: 'the Heard Islands',leader: 'no one',             strength: 0, loot: 0.1, nukes: false, posture: 'fragile',  tell: 'Population: penguins.' }
];

AD.warTargetById = id => AD.WAR_TARGETS.find(t => t.id === id);

AD.ensureWars = function (run) { if (!run.wars) run.wars = []; return run.wars; };
AD.atWarWith = (run, targetId) => (run.wars || []).some(w => w.target === targetId && !w.done);

/* ---------- the operations ------------------------------------------------ */
AD.WAR_OPS = [
  {
    id: 'sabre', label: 'Sabre-Rattle', icon: '🗣️',
    blurb: 'Threats and troop movements. Some fold and pay. Some call your bluff.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      const folds = t.posture === 'fragile' || (t.strength <= 1 && t.posture !== 'defiant');
      if (folds && roll > 0.15) {
        const tribute = Math.round((0.03 + t.loot * 0.12) * 100) / 100;
        return { base: 4, auth: 3, press: -1, cash: tribute,
          res: t.leader + ' folds within the hour, offering concessions, a trade "deal", and a very respectful statement. You pocket the tribute and the win.' };
      }
      return { base: 3, press: -2, courts: -1, auth: 1,
        res: t.leader + ' calls your bluff on live television and does not move an inch. The base likes the swagger; nothing actually changes.' };
    }
  },
  {
    id: 'strike', label: 'Targeted Strike', icon: '🎯', cost: 0.03,
    blurb: 'A limited operation. Clean on the weak. A gamble on a nuclear power.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      if (t.nukes && roll < 0.30) {
        return { base: 2, street: -6, courts: -5, press: -6, congress: -4, auth: -2,
          res: 'The strike lands on a nuclear power and does not stay small. Retaliation is immediate, the markets crater, and "miscalculation" is on every screen.' };
      }
      if (t.strength >= 2 && roll < 0.42) {
        return { base: 6, auth: 3, courts: -3, press: -3, street: -2, ongoing: true,
          res: 'The "limited" strike on ' + t.name + ' does not stay limited. They mobilise, and it is a real war now.' };
      }
      const loot = t.loot >= 1 ? 0.08 : 0;
      return { base: 7, auth: 4, courts: -3, press: -3, street: -1, cash: loot,
        res: 'A clean, televised strike on ' + t.name + '. The footage is spectacular and, for tonight at least, nobody is shooting back.' };
    }
  },
  {
    id: 'invade', label: 'Full Invasion', icon: '⚔️', cost: 0.05, needsAuth: 40,
    blurb: 'The big one. An immediate flag-rally, then an ongoing war to win or lose.',
    run (run, t) {
      return { base: 7, auth: 5, street: 2, congress: -5, courts: -6, press: -5, cash: -0.05, ongoing: true,
        res: 'You order the full invasion of ' + t.name + '. The base rallies to the flag; the institutions you never consulted do not.' };
    }
  },
  {
    id: 'regime', label: 'Regime Change', icon: '🕵️', cost: 0.05, needsAuth: 45,
    blurb: 'A covert operation to install a friend. Huge if it holds, a scandal if it leaks.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      const exposeRisk = t.posture === 'defiant' ? 0.5 : t.strength >= 3 ? 0.48 : t.posture === 'wildcard' ? 0.4 : 0.26;
      if (roll < exposeRisk) {
        return { base: -2, press: -7, courts: -6, congress: -4, auth: -1,
          res: 'The operation in ' + t.name + ' is exposed. There are documents, there are hearings, and there is a genuinely terrible week.' };
      }
      return { base: 5, auth: 5, courts: -3, press: -3, cash: t.loot,
        res: 'A friendly government takes power in ' + t.name + ' overnight, expressing immediate and fulsome gratitude. The resources begin to flow your way.' };
    }
  }
];

AD.warOpById = id => AD.WAR_OPS.find(o => o.id === id);

/* War is paid for out of the NATIONAL TREASURY (run.purse), not the President's
   personal wealth, and it is expensive: costs scale with the target's strength,
   from tens of billions for a limited strike to hundreds of billions to invade a
   great power. Sabre-rattling is free. */
AD.warOpCostFor = function (run, t, op) {
  if (!op || !t) return 0;
  const s = t.strength || 0;
  if (op.id === 'strike') return 20 + s * 15;    // $20B .. $65B
  if (op.id === 'invade') return 60 + s * 60;    // $60B .. $240B
  if (op.id === 'regime') return 50 + s * 40;    // $50B .. $170B
  return 0;                                       // sabre
};

AD.warOpAvailable = function (run, t, op) {
  if (!op) return { ok: false, reason: 'No such operation.' };
  if (AD.atWarWith(run, t.id)) return { ok: false, reason: 'Already at war with ' + t.name + '.' };
  const cost = AD.warOpCostFor(run, t, op);
  if (cost && AD.purse(run) < cost) return { ok: false, reason: 'The Treasury cannot afford it.' };
  if (op.needsAuth && run.authority < op.needsAuth) return { ok: false, reason: 'Requires Authority ' + op.needsAuth + '.' };
  return { ok: true };
};

/* Start an ongoing war record (shared by the invasion op and the compatibility
   AD.declareWar used by section events). */
function startWar (run, t, loot) {
  AD.ensureWars(run);
  run.wars.push({ target: t.id, months: 0, done: false, loot: loot !== false });
  run.warLog = run.warLog || [];
  run.warLog.push({ name: t.name, won: null });
  run.stats = run.stats || {};
  run.stats.wars = (run.stats.wars || 0) + 1;
}

AD.doWarOp = function (run, targetId, opId) {
  const t = AD.warTargetById(targetId);
  const op = AD.warOpById(opId);
  if (!t || !op) return { ok: false, reason: 'No such operation.' };
  const avail = AD.warOpAvailable(run, t, op);
  if (!avail.ok) return avail;

  const cost = AD.warOpCostFor(run, t, op);
  if (cost) AD.movePurse(run, -cost);          // war is paid from the Treasury

  const eff = op.run(run, t) || {};
  let res = eff.res; delete eff.res;
  const ongoing = eff.ongoing; delete eff.ongoing;

  // Attacking an ally is diplomatically ruinous, on top of whatever else happens.
  if (t.ally && op.id !== 'sabre') {
    eff.street = (eff.street || 0) - 3;
    eff.press = (eff.press || 0) - 3;
    eff.congress = (eff.congress || 0) - 3;
    res += ' Moving on an ally carries a diplomatic price, and it is steep.';
  }

  const deltas = AD.applySenateEffect(run, eff);
  if (ongoing) startWar(run, t);
  run.stats = run.stats || {};
  run.stats.warOps = (run.stats.warOps || 0) + 1;
  return { ok: true, target: t, op, deltas, res, ongoing };
};

/* Compatibility shim: section events and reactive crises call AD.declareWar to
   start a straight invasion. Keeps that path working (and now it actually fires,
   the old version rejected the unknown 'incident' pretext and did nothing). */
AD.declareWar = function (run, targetId) {
  const t = AD.warTargetById(targetId);
  if (!t) return { ok: false, reason: 'No such war.' };
  if (AD.atWarWith(run, targetId)) return { ok: false, reason: 'Already at war with ' + t.name + '.' };
  const deltas = AD.applySenateEffect(run, { base: 7, auth: 5, street: 2, congress: -5, courts: -6, press: -5 });
  startWar(run, t);
  return { ok: true, target: t, deltas, line: 'War declared on ' + t.name + '.' };
};

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

/* Monthly: ongoing wars resolve over a few months into victory or quagmire. A
   weak target and high Authority make victory likely; nukes drag it down. */
AD.warTick = function (run) {
  const out = { resolved: [] };
  if (!run.wars || !run.wars.length) return out;

  run.wars.forEach(w => {
    if (w.done) return;
    w.months++;
    const t = AD.warTargetById(w.target);
    const rng = warRng((run.seed || 'X') + w.target + w.months);
    if (rng() > 0.35 + w.months * 0.15 && w.months < 5) return;   // still ongoing

    w.done = true;
    const winChance = AD.clamp(
      0.5 + (run.authority - 50) * 0.004 + (3 - t.strength) * 0.12 - (t.nukes ? 0.12 : 0),
      0.10, 0.92);
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

  run.wars = run.wars.filter(w => !w.done);
  return out;
};

AD.warStatus = function (run) {
  const active = (run.wars || []).filter(w => !w.done);
  return { active: active.length, list: active };
};
