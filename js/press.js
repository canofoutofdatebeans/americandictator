/* ============================================================
   AMERICAN DICTATOR, press.js
   THE PRESS ROOM, twelve outlets you can sue, buy or capture.

   The Press was one meter. This turns it into a room full of
   individual publications, each with a STANCE toward you from
   hostile (0) to captured (100), and three ways to move it:

     SUE            lawfare. The suit is usually weak and that is the
                    point, it cows them and costs them a legal budget.
     SETTLE / BUY   pay them to come onside. Their stance jumps toward
                    friendly; the coverage softens; it is a payoff and
                    everyone eventually knows it.
     INSTALL ALLY   put a friend of the President in the editor's chair.
                    The outlet is effectively yours. Big Press control,
                    and the institutions notice.

   Plus a free ENEMY OF THE PEOPLE attack, pure red meat for the base,
   and it hardens the outlet against you.

   Friendly outlets nudge the Press meter up each month; hostile ones
   drag it down. And the Press is the MEGAPHONE: the Press meter itself
   feeds back into the Base and the Street every month, a press you
   control amplifies your message (Base up) and legitimises the
   crackdown (Street up), while a hostile press dispirits the movement
   and inflames the cities. Deterministic from the seed, off the card
   RNG stream, same pattern as the Senate.
   ============================================================ */

/* Fictional outlets only, no real mastheads. `reach` weights how much
   the outlet moves the Press meter each month. */
/* Each outlet now has a TEMPERAMENT and its own price. How they answer:
     mercenary  takes the cheque; a settle is cheap and works, coverage melts.
     lapdog     already onside; cheap to own outright.
     crusader   lives for this. Suing BACKFIRES (a prize and a subscriber spike);
                a settle offer gets PRINTED. Only installing your own editor works.
     chaos      a platform/podcast: wild, unpredictable swings either way.
     wire       straight-news middle; moderate, buyable, cowable.
   price = settle cost, legal = suit cost, both in the tens of millions. */
AD.OUTLETS_SEED = [
  { id: 'scream',   name: 'The National Scream', type: 'Tabloid',        reach: 3, stance: 82, temperament: 'lapdog',    price: 0.015, legal: 0.01, tell: 'Prints whatever you feed it.' },
  { id: 'beacon',   name: 'The Beacon',          type: 'Paper of record', reach: 3, stance: 14, temperament: 'crusader',  price: 0.05,  legal: 0.04, tell: 'Lives for the Pulitzer.' },
  { id: 'amalg',    name: 'Amalgamated News',    type: 'Cable',          reach: 3, stance: 70, temperament: 'mercenary', price: 0.03,  legal: 0.02, tell: 'Follows the ad money.' },
  { id: 'meridian', name: 'The Meridian',        type: 'Cable',          reach: 3, stance: 22, temperament: 'crusader',  price: 0.045, legal: 0.035, tell: 'Would frame your lawsuit.' },
  { id: 'wire',     name: 'Union Wire Service',  type: 'Wire',           reach: 2, stance: 40, temperament: 'wire',      price: 0.025, legal: 0.02, tell: 'Just the facts, mostly.' },
  { id: 'ledger',   name: 'The Evening Ledger',  type: 'Paper',          reach: 2, stance: 30, temperament: 'mercenary', price: 0.02,  legal: 0.015, tell: 'A struggling balance sheet.' },
  { id: 'feed',     name: 'The Feed',            type: 'Platform',       reach: 3, stance: 55, temperament: 'chaos',     price: 0.04,  legal: 0.03, tell: 'Nobody controls the algorithm.' },
  { id: 'clarion',  name: 'The Clarion',         type: 'Paper',          reach: 1, stance: 48, temperament: 'mercenary', price: 0.015, legal: 0.012, tell: 'Would like to be owned.' },
  { id: 'dispatch', name: 'Prairie Dispatch',    type: 'Regional',       reach: 1, stance: 62, temperament: 'lapdog',    price: 0.012, legal: 0.01, tell: 'Roots for the home team.' },
  { id: 'gazette',  name: 'The Metro Gazette',   type: 'Paper',          reach: 1, stance: 26, temperament: 'crusader',  price: 0.04,  legal: 0.03, tell: 'Has an investigations desk.' },
  { id: 'pod',      name: 'The Basement Hour',   type: 'Podcast',        reach: 1, stance: 74, temperament: 'chaos',     price: 0.02,  legal: 0.015, tell: 'One microphone, no editor.' },
  { id: 'weekly',   name: 'The Republic Weekly', type: 'Magazine',       reach: 2, stance: 18, temperament: 'crusader',  price: 0.045, legal: 0.035, tell: 'Nine-thousand-word takedowns.' }
];

AD.makePress = function () {
  return AD.OUTLETS_SEED.map(o => ({ ...o, sued: false, owned: false }));
};

/* Suing an outlet is its legal budget; settling is its price; installing an
   editor is a flat operation. All in the tens of millions. */
AD.pressCostFor = function (run, o, action) {
  if (!action) return 0;
  if (action.id === 'sue') return o.legal || 0.02;
  if (action.id === 'settle') return o.price || 0.03;
  return action.cost || 0;
};

AD.PRESS_TELLS = true;   // tells live on each outlet

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
    id: 'attack', label: 'Declare Fake News', icon: '📢',
    blurb: 'Call them out by name. The base roars; the newsroom digs in, or frames it.',
    can: () => true,
    run (run, o) {
      const t = o.temperament;
      const jit = AD.reactJitter(run, 3);
      if (t === 'crusader') {
        o.stance = AD.clamp(o.stance - 12, 0, 100);
        return { base: 7, press: -5, courts: -1, street: -1, auth: 2, res: o.name + ' prints your insult on the masthead and adds twenty thousand subscribers by Friday. The base roars anyway.' };
      }
      if (t === 'chaos') {
        const swing = jit;   // could harden or, perversely, help
        o.stance = AD.clamp(o.stance - 8 + swing, 0, 100);
        return { base: 7, press: -3, street: -1, auth: 2, res: o.name + ' reacts in some way no strategist predicted. The clip does numbers. Nobody is sure whose.' };
      }
      o.stance = AD.clamp(o.stance - (t === 'lapdog' ? 4 : 9), 0, 100);
      return { base: 7, press: -4, courts: -1, street: -1, auth: 2, res: 'You name ' + o.name + ' from the podium. The base eats it up; the newsroom hardens a notch.' };
    }
  },
  {
    id: 'sue', label: 'Sue Them', icon: '⚖️',
    blurb: 'A weak suit, filed loudly. The process is the punishment. Usually.',
    can: o => !o.owned,
    run (run, o) {
      const t = o.temperament;
      o.sued = true;
      if (t === 'crusader') {
        o.stance = AD.clamp(o.stance - 6, 0, 100);   // a suit is a gift to a crusader
        return { base: -1, press: -5, courts: -7, congress: -1, auth: 1, res: 'The suit against ' + o.name + ' is thin, and they know it. They win a press-freedom prize, headline a gala, and run the documents in full.' };
      }
      const cow = (t === 'mercenary' ? 16 : t === 'wire' ? 13 : t === 'chaos' ? 8 + AD.reactJitter(run, 6) : 12);
      o.stance = AD.clamp(o.stance + cow, 0, 100);
      return { base: 5, press: -3, courts: -6, congress: -2, auth: 3, res: 'The filing lands on ' + o.name + ' and the legal budget does the rest. The coverage softens within the week.' };
    }
  },
  {
    id: 'settle', label: 'Settle / Buy Onside', icon: '💸',
    blurb: 'Pay them off. On the ones with a price, the tough coverage simply vanishes.',
    can: o => !o.owned,
    run (run, o) {
      const t = o.temperament;
      if (t === 'crusader') {
        o.stance = AD.clamp(o.stance + AD.reactJitter(run, 1), 0, 100);   // does nothing
        return { base: -2, press: -6, courts: -3, auth: -1, res: o.name + ' publishes your settlement offer, in full, under the headline you least wanted. The money is spent and the point is made.' };
      }
      o.sued = false;
      const boost = (t === 'mercenary' ? 20 : t === 'lapdog' ? 22 : t === 'chaos' ? 12 + AD.reactJitter(run, 6) : 16);
      o.stance = AD.clamp(Math.max(o.stance, 55) + boost, 0, 100);
      return { base: 2, press: 6, courts: -3, congress: -3, auth: 2, res: o.name + ' takes the arrangement and the hard edges melt off the coverage overnight.' };
    }
  },
  {
    id: 'install', label: 'Install an Ally', icon: '🪑', cost: 0.06, needsAuth: 30,
    blurb: 'A friend of the President takes the editor\'s chair. It is yours now.',
    can: o => !o.owned,
    run (run, o) {
      const fighter = o.temperament === 'crusader';
      o.owned = true; o.stance = 100; o.temperament = 'lapdog'; o.tell = 'Yours now.';
      return fighter
        ? { base: 4, press: 9, courts: -6, street: -5, congress: -5, auth: 4, res: 'Taking ' + o.name + ' means a newsroom walkout, a documentary, and a very bad week, but the editor\'s chair is yours.' }
        : { base: 4, press: 9, courts: -5, street: -4, congress: -4, auth: 4, res: 'A friend of the office slides into the editor\'s chair at ' + o.name + '. It is yours now.' };
    }
  }
];

AD.pressAction = id => AD.PRESS_ACTIONS.find(a => a.id === id);

AD.pressActionAvailable = function (run, o, action) {
  if (!action.can(o)) return { ok: false, reason: 'Already yours.' };
  const cost = AD.pressCostFor(run, o, action);
  if (cost && run.cash < cost) return { ok: false, reason: 'You cannot afford it.' };
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
  const cost = AD.pressCostFor(run, o, action);
  if (cost) run.cash = Math.round((run.cash - cost) * 100) / 100;
  const eff = action.run(run, o) || {};
  const res = eff.res; delete eff.res;
  const deltas = AD.applySenateEffect(run, eff);   // shared meter/cash/auth applier
  run.stats = run.stats || {};
  run.stats.pressActions = (run.stats.pressActions || 0) + 1;
  return { ok: true, action, outlet: o, deltas, res };
};

/* Monthly: the balance of the room nudges the Press meter. Mild by design, 
   the real value of the room is the instant jump from an action. */
AD.pressTick = function (run) {
  const out = { deltas: {} };
  if (!run.press || !run.press.length || run.locked.press) return out;
  let net = 0;
  run.press.forEach(o => {
    if (o.owned || o.stance >= 65) net += o.reach;
    else if (o.stance <= 30) net -= o.reach;
  });
  // Neutral by default, the starting room sits inside the dead zone, so a
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
  // punishment side made zero-base the dominant death, the press is a
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
