/* ============================================================
   AMERICAN DICTATOR — press.js
   THE PRESS ROOM — twelve outlets you can sue, buy or capture.

   The Press was one meter. This turns it into a room full of
   individual publications, each with a STANCE toward you from
   hostile (0) to captured (100), and three ways to move it:

     SUE            lawfare. The suit is usually weak and that is the
                    point — it cows them and costs them a legal budget.
     SETTLE / BUY   pay them to come onside. Their stance jumps toward
                    friendly; the coverage softens; it is a payoff and
                    everyone eventually knows it.
     INSTALL ALLY   put a friend of the President in the editor's chair.
                    The outlet is effectively yours. Big Press control,
                    and the institutions notice.

   Plus a free ENEMY OF THE PEOPLE attack — pure red meat for the base,
   and it hardens the outlet against you.

   Friendly outlets nudge the Press meter up each month; hostile ones
   drag it down. And the Press is the MEGAPHONE: the Press meter itself
   feeds back into the Base and the Street every month — a press you
   control amplifies your message (Base up) and legitimises the
   crackdown (Street up), while a hostile press dispirits the movement
   and inflames the cities. Deterministic from the seed, off the card
   RNG stream — same pattern as the Senate.
   ============================================================ */

/* Fictional outlets only — no real mastheads. `reach` weights how much
   the outlet moves the Press meter each month. */
AD.OUTLETS_SEED = [
  { id: 'scream',   name: 'The National Scream', type: 'Tabloid',     reach: 3, stance: 82 },
  { id: 'beacon',   name: 'The Beacon',          type: 'Paper of record', reach: 3, stance: 14 },
  { id: 'amalg',    name: 'Amalgamated News',    type: 'Cable',       reach: 3, stance: 70 },
  { id: 'meridian', name: 'The Meridian',        type: 'Cable',       reach: 3, stance: 22 },
  { id: 'wire',     name: 'Union Wire Service',  type: 'Wire',        reach: 2, stance: 40 },
  { id: 'ledger',   name: 'The Evening Ledger',  type: 'Paper',       reach: 2, stance: 30 },
  { id: 'feed',     name: 'The Feed',            type: 'Platform',    reach: 3, stance: 55 },
  { id: 'clarion',  name: 'The Clarion',         type: 'Paper',       reach: 1, stance: 48 },
  { id: 'dispatch', name: 'Prairie Dispatch',    type: 'Regional',    reach: 1, stance: 62 },
  { id: 'gazette',  name: 'The Metro Gazette',   type: 'Paper',       reach: 1, stance: 26 },
  { id: 'pod',      name: 'The Basement Hour',   type: 'Podcast',     reach: 1, stance: 74 },
  { id: 'weekly',   name: 'The Republic Weekly', type: 'Magazine',    reach: 2, stance: 18 }
];

AD.makePress = function () {
  return AD.OUTLETS_SEED.map(o => ({ ...o, sued: false, owned: false }));
};

AD.ensurePress = function (run) {
  if (!run.press || !run.press.length) run.press = AD.makePress();
  return run.press;
};

AD.outletById = (run, id) => (run.press || []).find(o => o.id === id);

AD.pressStance = function (o) {
  if (o.owned || o.stance >= 80) return { key: 'captured', label: o.owned ? 'Yours' : 'In the tank' };
  if (o.stance >= 60) return { key: 'friendly', label: 'Friendly' };
  if (o.stance >= 40) return { key: 'neutral',  label: 'Neutral' };
  if (o.stance >= 20) return { key: 'critical', label: 'Critical' };
  return { key: 'hostile', label: 'Hostile' };
};

AD.pressSummary = function (run) {
  const p = AD.ensurePress(run);
  const friendly = p.filter(o => o.stance >= 60 || o.owned).length;
  const hostile  = p.filter(o => o.stance < 40 && !o.owned).length;
  const owned    = p.filter(o => o.owned).length;
  return { friendly, hostile, owned, total: p.length };
};

/* ---------- the actions --------------------------------------------------- */
AD.PRESS_ACTIONS = [
  {
    id: 'attack', label: 'Enemy of the People', icon: '📢',
    blurb: 'Call them out by name. The base roars; the newsroom digs in.',
    can: () => true,
    run (run, o) {
      o.stance = AD.clamp(o.stance - 10, 0, 100);          // hardens against you
      return { base: 7, press: -4, courts: -1, street: -1, auth: 2 };
    }
  },
  {
    id: 'sue', label: 'Sue Them', icon: '⚖️', cost: 0.4,
    blurb: 'A weak suit, filed loudly. The process is the punishment.',
    can: o => !o.owned,
    run (run, o) {
      o.sued = true;
      o.stance = AD.clamp(o.stance + 14, 0, 100);          // cowed toward compliance
      return { base: 5, press: -3, courts: -6, congress: -2, auth: 3 };
    }
  },
  {
    id: 'settle', label: 'Settle / Buy Onside', icon: '💸', cost: 0.6,
    blurb: 'Pay them. The suit vanishes; so does the tough coverage.',
    can: o => !o.owned,
    run (run, o) {
      o.sued = false;
      o.stance = AD.clamp(Math.max(o.stance, 55) + 18, 0, 100);
      return { base: 2, press: 6, courts: -3, congress: -3, cash: 0, auth: 2 };
    }
  },
  {
    id: 'install', label: 'Install an Ally', icon: '🪑', cost: 0.9, needsAuth: 40,
    blurb: 'A friend of the President takes the editor\'s chair. It is yours now.',
    can: o => !o.owned,
    run (run, o) {
      o.owned = true;
      o.stance = 100;
      return { base: 4, press: 9, courts: -5, street: -4, congress: -4, auth: 4 };
    }
  }
];

AD.pressAction = id => AD.PRESS_ACTIONS.find(a => a.id === id);

AD.pressActionAvailable = function (run, o, action) {
  if (!action.can(o)) return { ok: false, reason: 'Already yours.' };
  if (action.cost && run.cash < action.cost) return { ok: false, reason: 'You cannot afford it.' };
  if (action.needsAuth && run.authority < action.needsAuth)
    return { ok: false, reason: 'Requires Authority ' + action.needsAuth + '.' };
  return { ok: true };
};

AD.doPressAction = function (run, outletId, actionId) {
  const o = AD.outletById(run, outletId);
  const action = AD.pressAction(actionId);
  if (!o || !action) return { ok: false, reason: 'No such action.' };
  const avail = AD.pressActionAvailable(run, o, action);
  if (!avail.ok) return avail;
  if (action.cost) run.cash = Math.round((run.cash - action.cost) * 100) / 100;
  const eff = action.run(run, o) || {};
  const deltas = AD.applySenateEffect(run, eff);   // shared meter/cash/auth applier
  run.stats = run.stats || {};
  run.stats.pressActions = (run.stats.pressActions || 0) + 1;
  return { ok: true, action, outlet: o, deltas };
};

/* Monthly: the balance of the room nudges the Press meter. Mild by design —
   the real value of the room is the instant jump from an action. */
AD.pressTick = function (run) {
  const out = { deltas: {} };
  if (!run.press || !run.press.length || run.locked.press) return out;
  let net = 0;
  run.press.forEach(o => {
    if (o.owned || o.stance >= 65) net += o.reach;
    else if (o.stance <= 30) net -= o.reach;
  });
  // Neutral by default — the starting room sits inside the dead zone, so a
  // player who never opens this screen pays nothing. Only a room you have
  // actively made lopsided drifts the meter, and only by a point. (An earlier
  // -1/mo baseline drain cascaded into Base collapse for inattentive play.)
  let move = 0;
  if (net >= 8) move = 1;
  else if (net <= -14) move = -1;
  if (move) {
    const before = run.meters.press;
    run.meters.press = AD.clamp(before + move, 0, 100);
    if (run.meters.press !== before) out.deltas.press = run.meters.press - before;
  }

  // THE MEGAPHONE. The Press meter feeds the Base and the Street every month.
  // A press you dominate amplifies the movement and legitimises the forces on
  // the street; a hostile press does the reverse. Read off the meter, so it
  // applies to EVERY run whether or not the player ever opens this screen, and
  // it is zero across the whole neutral band (the starting Press of ~52 sits in
  // it) so it never becomes a passive drain that spirals the Base.
  // Asymmetric on purpose: dominating the press is a real, repeatable reward
  // for the Base and the Street, but a hostile press only bites once it is
  // nearly at zero (where the run is already lost to zero-press). A stronger
  // punishment side made zero-base the dominant death — the press is a
  // megaphone you WANT, not a second way to starve the movement.
  const pv = run.meters.press;
  let bd = 0, sd = 0;
  if (pv >= 80)      { bd = 2;  sd = 1; }
  else if (pv >= 64) { bd = 1;  sd = 1; }
  else if (pv <= 24) { bd = -1; sd = -1; }
  const nudge = (k, d) => {
    if (!d || run.locked[k]) return;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + d, 0, 100);
    if (run.meters[k] !== before) out.deltas[k] = (out.deltas[k] || 0) + (run.meters[k] - before);
  };
  nudge('base', bd);
  nudge('street', sd);
  return out;
};
