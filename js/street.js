/* ============================================================
   AMERICAN DICTATOR, street.js
   PUBLIC ORDER, the cities, the unrest, and the forces you
   send to shut it down before it gets out of hand.

   The Street was one meter. This turns it into a map of cities,
   each with an UNREST level that climbs on its own every month.
   Protests feed themselves: the hotter a city, the faster it grows.
   Let the country's total unrest run and the Street meter, your
   grip on public order, bleeds out.

   Four responses per city, and every one moves all five power
   centres, Authority and cash:

     FEDERAL FORCE   send in the standing protective force. Fast,
                     effective, and the base is delighted.
     ICE-STYLE SWEEP the hard option: mass arrests and removals.
                     Crushes the unrest, revolts the courts and press.
     CURFEW          cheap crowd-control. Buys time, moves little.
     NEGOTIATE       concede and de-escalate. The base hates it; the
                     press and courts approve.

   Suppression RAISES your grip on the street (that is the Street
   meter climbing toward the "Boots on Main Street" pillar). Letting
   cities burn lowers it. Capturing the Street pillar ends all unrest.
   Same deterministic, off-the-card-rng pattern as the Senate.
   ============================================================ */

/* Fictional cities. `pop` weights how much a city's unrest matters to the
   national Street meter. */
AD.CITIES_SEED = [
  { id: 'portsmouth', name: 'Portsmouth',   pop: 3, unrest: 34 },
  { id: 'lakeside',   name: 'Lake City',    pop: 3, unrest: 28 },
  { id: 'granite',    name: 'Granite Falls',pop: 2, unrest: 20 },
  { id: 'harbor',     name: 'Harbor Heights',pop: 3, unrest: 40 },
  { id: 'delacroix',  name: 'Delacroix',    pop: 2, unrest: 26 },
  { id: 'summit',     name: 'Summit',       pop: 2, unrest: 16 },
  { id: 'rivertown',  name: 'Rivertown',    pop: 1, unrest: 22 },
  { id: 'crestview',  name: 'Crestview',    pop: 1, unrest: 12 },
  { id: 'ironside',   name: 'Ironside',     pop: 2, unrest: 30 },
  { id: 'baymont',    name: 'Baymont',      pop: 1, unrest: 18 }
];

AD.makeStreet = function () {
  return AD.CITIES_SEED.map(c => ({ ...c, occupied: 0 }));  // occupied = months a force stays parked
};

AD.ensureStreet = function (run) {
  if (!run.streets || !run.streets.length) run.streets = AD.makeStreet();
  return run.streets;
};

AD.cityById = (run, id) => (run.streets || []).find(c => c.id === id);

AD.cityHeat = function (c) {
  if (c.unrest >= 75) return { key: 'boiling',  label: 'Boiling over' };
  if (c.unrest >= 50) return { key: 'unrest',   label: 'Unrest' };
  if (c.unrest >= 28) return { key: 'simmering',label: 'Simmering' };
  if (c.unrest >= 12) return { key: 'quiet',    label: 'Quiet' };
  return { key: 'held', label: c.occupied ? 'Occupied' : 'Held' };
};

AD.streetSummary = function (run) {
  const s = AD.ensureStreet(run);
  const boiling = s.filter(c => c.unrest >= 75).length;
  const hot = s.filter(c => c.unrest >= 50).length;
  const total = s.reduce((a, c) => a + c.unrest * c.pop, 0);
  const max = s.reduce((a, c) => a + 100 * c.pop, 0);
  return { boiling, hot, national: Math.round((total / max) * 100), occupied: s.filter(c => c.occupied).length };
};

/* ---------- the responses ------------------------------------------------- */
AD.STREET_ACTIONS = [
  {
    id: 'force', label: 'Federal Force', icon: '🚚', cost: 0.2,
    blurb: 'Send in the standing protective force. Fast, and the base loves it.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 35, 0, 100);
      c.occupied = 3;
      if (AD.remember) AD.remember(run, 'city', { where: c.name }, 14);
      return { street: 6, base: 5, courts: -5, press: -4, auth: 3 };
    }
  },
  {
    id: 'sweep', label: 'ICE-Style Sweep', icon: '🛂', cost: 0.3,
    blurb: 'Mass arrests and removals. It ends the protest and starts a lawsuit.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 55, 0, 100);
      c.occupied = 4;
      // A city remembers who sent them (see memory.js).
      if (AD.remember) AD.remember(run, 'city', { where: c.name }, 12);
      return { street: 8, base: 8, courts: -9, press: -7, congress: -3, auth: 4 };
    }
  },
  {
    id: 'curfew', label: 'Curfew', icon: '🌙',
    blurb: 'Cheap crowd control. Buys a night, moves little.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 20, 0, 100);
      c.occupied = 1;
      return { street: 4, base: 3, courts: -3, press: -3, auth: 2 };
    }
  },
  {
    id: 'negotiate', label: 'Negotiate', icon: '🤝',
    blurb: 'Concede and de-escalate. The base calls it weakness.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 30, 0, 100);
      return { street: 2, base: -5, press: 6, courts: 5, congress: 3, auth: -2 };
    }
  }
];

AD.streetAction = id => AD.STREET_ACTIONS.find(a => a.id === id);

AD.streetActionAvailable = function (run, c, action) {
  if (action.cost && run.cash < action.cost) return { ok: false, reason: 'You cannot afford it.' };
  if (action.needsAuth && run.authority < action.needsAuth)
    return { ok: false, reason: 'Requires Authority ' + action.needsAuth + '.' };
  return { ok: true };
};

AD.doStreetAction = function (run, cityId, actionId) {
  const c = AD.cityById(run, cityId);
  const action = AD.streetAction(actionId);
  if (!c || !action) return { ok: false, reason: 'No such action.' };
  const avail = AD.streetActionAvailable(run, c, action);
  if (!avail.ok) return avail;
  if (action.cost) run.cash = Math.round((run.cash - action.cost) * 100) / 100;
  const eff = action.run(run, c) || {};
  /* BOREDOM. Public order was the only room whose actions never moved the
     Boredometer. A televised crackdown is a spectacle he enjoys; sitting down
     to negotiate is another dull afternoon of governing. Only supplied when the
     action did not already carry its own charge. */
  if (eff.fun == null) eff.fun = { force: 3, sweep: 4, curfew: 2, negotiate: -2 }[action.id] || 1;
  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.streetActions = (run.stats.streetActions || 0) + 1;
  return { ok: true, action, city: c, deltas };
};

/* Monthly: unrest climbs (protests feed themselves), occupied cities stay
   calm a while, and high national unrest drags the Street meter down. */
AD.streetTick = function (run) {
  const out = { deltas: {} };
  if (!run.streets || !run.streets.length) return out;

  if (run.locked.street) {                 // captured: nothing moves in an American city
    run.streets.forEach(c => { c.unrest = AD.clamp(c.unrest - 6, 0, 100); });
    return out;
  }

  // Unrest still climbs and protests still feed themselves, the "boiling over"
  // list is meant to grow so there is always something to send a force to, but
  // it climbs on the half-beat, so an untended country reaches the election
  // tense, not in flames.
  const grow = (run.month % 2) === 0;
  run.streets.forEach(c => {
    if (c.occupied > 0) { c.occupied--; return; }        // a parked force holds it a while
    if (grow) c.unrest = AD.clamp(c.unrest + 1 + Math.floor(c.unrest / 45), 0, 100);
  });

  // Only a country you have let genuinely boil bleeds the Street meter, and
  // only by a point. Slow growth alone rarely reaches this floor in one term,
  // so neglect is a manageable nuisance, never a death spiral. The pressure to
  // engage comes from the free Street+Base the forces hand you, not a tax.
  const sum = AD.streetSummary(run);
  if (sum.national > 62) {
    const before = run.meters.street;
    run.meters.street = AD.clamp(before - 1, 0, 100);
    if (run.meters.street !== before) out.deltas.street = run.meters.street - before;
  }
  return out;
};
