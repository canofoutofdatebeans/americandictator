/* ============================================================
   AMERICAN DICTATOR, senate.js
   THE CAUCUS, 100 senators you have to keep in line.

   Congress was one meter. This turns it into a hundred people.

   DESIGN
   ------
   One hundred seats, split like a real narrow trifecta: 53 of your
   own party, 47 opposition. The opposition almost never approves and
   cannot really be won, they are there to be fought, not flipped.
   Your own party is the actual game: every own-party senator carries
   a LOYALTY (0-100), it drifts DOWN on its own every month, and once
   the caucus average sags the whole Congress meter starts to bleed.
   So the chamber is a thing you have to keep whipped.

   Four things you can do to any senator, and every one of them moves
   all five power centres, your Authority and your cash:

     ACKNOWLEDGE  a gracious word and a favour. Loyalty up. Cheap,
                  quiet, keeps the caucus intact.
     HUMILIATE    attack them in public. Their loyalty craters, your
                  caucus is chilled, but the base loves the cruelty.
     SUE          lawfare. Costs money, cows the target, and the fear
                  ripples: every other wavering own-party senator
                  falls back into line.
     END CAREER   force them out. A hand-picked loyalist takes the
                  seat. Enormous base surge, the institutions revolt.

   The senate is generated deterministically from the run seed via a
   SEPARATE rng, so it never touches AD.rng() and never changes which
   cards you draw or breaks a shared-seed run.
   ============================================================ */

AD.SENATE_SIZE = 100;
AD.SENATE_OWN  = 53;          // a 53-47 trifecta, per the research

/* Fictional throughout, no real senators, no real states. */
AD.SEN_FIRST = [
  'Wade','Cyrus','Dot','Merle','Lurleen','Hank','Bobby','Junior','Earl','Sue-Ann',
  'Delbert','Roy','Cletus','Peggy','Gil','Marlene','Buck','Dwayne','Coy','Verna',
  'Chip','Tammy','Boyd','Rhonda','Clint','Darlene','Hoyt','Brenda','Travis','Faye',
  'Randy','Loretta','Jeb','Connie','Dale','Wanda','Vernon','Sherry','Odell','Kaye',
  'Lamar','Trish','Guy','Nadine','Skip','Bev','Orville','Deenie'
];
AD.SEN_LAST = [
  'Prowse','Ferko','Tolliver','Blunt','Crick','Dabney','Speck','Hagg','Mabry','Cudd',
  'Vint','Roper','Sisk','Yancey','Toomey','Grubb','Pruett','Ashby','Klump','Rickert',
  'Sturm','Doggett','Wickers','Fenn','Corley','Mott','Trask','Blevins','Peevy','Sump',
  'Hasty','Croom','Vandal','Lott','Skagg','Purdy','Reddick','Boak','Cass','Hovis',
  'Wren','Dill','Pflug','Snead','Ruck','Mize','Cobb','Tharp','Gass','Vroom'
];
AD.SEN_STATE = [
  'Alamosa','Bexar','Cascade','Dellwood','Ellery','Fordham','Gorse','Hallow','Ironwood',
  'Junction','Kettle','Loam','Marrow','Nettle','Osprey','Pallid','Quarry','Ridgeline',
  'Sallow','Tallgrass','Umber','Verdance','Warhawk','Xanadu','Yellowknee','Ziegler',
  'Acheron','Bramble','Copperhead','Drywell','Everglade','Flintlock','Gullane','Harrow',
  'Inkwell','Jubilee','Kudzu','Lodestone','Muster','Nadir','Overlook','Pinion','Quill',
  'Rampart','Sorghum','Tumbleweed','Undertow','Vesper','Whetstone','Yonder'
];

/* Why an own-party senator is wavering, flavour on the row, and a hint at
   what an ACKNOWLEDGE is actually buying. */
AD.SEN_GRIPES = [
  'wants a committee gavel', 'is up for re-election in a swing state',
  'took a "principled" stand on the budget', 'has not been invited to the residence',
  'is furious about a district project that got cut', 'gave an interview using the word "concerns"',
  'thinks the last order went too far', 'is being courted by the other side',
  'wants an ambassadorship for a donor', 'objected to a nominee, quietly',
  'has a primary challenger you did not fund', 'is writing a book',
  'voted present on the confirmation', 'keeps meeting the opposition leader for lunch',
  'wants the base to stop calling their office'
];

/* A tiny, self-contained deterministic rng seeded off the run, kept OUT of
   the shared AD.rng() stream on purpose. */
function senRng (seed) {
  let s = (AD.Seed ? AD.Seed.hash(String(seed) + ':senate') : 0x9e3779b9) || 1;
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Build the chamber once, deterministically. 50 states, two seats each. */
AD.makeSenate = function (run) {
  const rng = senRng(run.seed || 'DEFAULT');
  const pick = arr => arr[Math.floor(rng() * arr.length)];

  // Decide, per state, how the two seats split, until we hit exactly 53 own.
  const states = AD.SEN_STATE.slice(0, 50);
  const seats = [];
  let own = 0;
  states.forEach(st => { seats.push({ st, party: 'x' }, { st, party: 'x' }); });
  // fill own seats first (deep-red states get both), then opposition
  const order = seats.map((_, i) => i).sort(() => rng() - 0.5);
  order.forEach(i => { if (own < AD.SENATE_OWN) { seats[i].party = 'own'; own++; } else seats[i].party = 'opp'; });

  const usedNames = new Set();
  const uniqName = () => {
    let f, l, key, tries = 0;
    do { f = pick(AD.SEN_FIRST); l = pick(AD.SEN_LAST); key = f + l; tries++; }
    while (usedNames.has(key) && tries < 40);
    usedNames.add(key);
    return { first: f, last: l };
  };

  return seats.map((seat, i) => {
    const nm = uniqName();
    const own = seat.party === 'own';
    // own party: mostly loyal, a tail of the restless. opposition: mostly hostile.
    const loyalty = own
      ? Math.round(55 + rng() * 35)      // 55-90
      : Math.round(8 + rng() * 30);      // 8-38
    // TEMPERAMENT decides how each senator answers the four tools (see below).
    // Own party leans loyalist/careerist, with a tail of cowards and the odd
    // maverick who FIGHTS. Opposition is mostly zealots with a few flippable
    // opportunists. Deterministic off the senate rng, hidden until you engage.
    const r = rng();
    let temperament;
    if (own) temperament = r < 0.40 ? 'loyalist' : r < 0.72 ? 'careerist' : r < 0.88 ? 'coward' : 'maverick';
    else     temperament = r < 0.82 ? 'zealot' : 'opportunist';
    // Sueing a senator now costs a per-person legal budget in the tens of
    // millions; the fighters lawyer up and cost more.
    const suePrice = Math.round((temperament === 'maverick' ? 0.035 + rng() * 0.015   // dear, but capped at $50M
                              : temperament === 'zealot'   ? 0.03 + rng() * 0.02
                              : 0.01 + rng() * 0.02) * 1000) / 1000;
    return {
      id: 'sen-' + i,
      first: nm.first, last: nm.last,
      state: seat.st,
      party: seat.party,                 // 'own' | 'opp'
      loyalty,
      temperament,
      suePrice,
      gripe: own && loyalty < 70 ? pick(AD.SEN_GRIPES) : null,
      sued: false,
      gone: false,
      appointee: false                   // true once they replaced a sacked seat
    };
  });
};

/* A short read on how a senator will take being handled, shown on the row so an
   attentive whip can tell a folder from a fighter without being told the maths. */
AD.SEN_TELLS = {
  loyalist:    'True believer. Loves a photo.',
  careerist:   'Wants something. Always.',
  coward:      'Scares easily.',
  maverick:    'Likes a camera and a grudge.',
  zealot:      'Hates you on principle.',
  opportunist: 'Could be tempted across.'
};

AD.ensureSenate = function (run) {
  if (!run.senate || !run.senate.length) run.senate = AD.makeSenate(run);
  return run.senate;
};

AD.senatorById = (run, id) => (run.senate || []).find(s => s.id === id);

/* Mood label from party + loyalty + flags. */
AD.senMood = function (s) {
  if (s.gone)  return { key: 'gone',    label: 'Removed' };
  if (s.party === 'opp') {
    if (s.loyalty >= 55) return { key: 'flipped', label: 'Flipped to you' };
    if (s.loyalty >= 30) return { key: 'hostile', label: 'Opposition' };
    return { key: 'hostile', label: 'Hostile' };
  }
  if (s.loyalty >= 72) return { key: 'loyal',    label: 'Loyal' };
  if (s.loyalty >= 45) return { key: 'wavering', label: 'Wavering' };
  return { key: 'rebel', label: 'Out of line' };
};

/* Whip-count summary for the header and the warning system. */
AD.senateSummary = function (run) {
  const s = AD.ensureSenate(run);
  const live = s.filter(x => !x.gone);
  const own = live.filter(x => x.party === 'own');
  const opp = live.filter(x => x.party === 'opp');
  const avgOwn = own.length ? own.reduce((a, x) => a + x.loyalty, 0) / own.length : 0;
  const outOfLine = own.filter(x => x.loyalty < 45).length;
  return {
    own: own.length, opp: opp.length,
    avgOwn: Math.round(avgOwn),
    outOfLine,
    flipped: opp.filter(x => x.loyalty >= 55).length
  };
};

/* ---------- the four actions ---------------------------------------------
   Each returns a base effect object; party and loyalty tune it. Effects are
   applied through AD.applySenateEffect, which clamps the meters, moves cash
   and Authority, and reports deltas, exactly like buying a holding. */
/* The ripple: fear pulls every OTHER wavering own-party senator toward the line.
   Fires only when the target was actually cowed (not when they fought back). */
function sueRipple (run, s, strength) {
  (run.senate || []).forEach(o => {
    if (o.id === s.id || o.gone || o.party !== 'own') return;
    if (o.loyalty < 60) o.loyalty = AD.clamp(o.loyalty + strength, 0, 100);
  });
}

AD.SENATE_ACTIONS = [
  {
    id: 'acknowledge', label: 'Acknowledge', icon: '🤝',
    blurb: 'A private word, a favour, a photo. Most fall back in line.',
    can: (run, s) => !s.gone,
    run (run, s) {
      const t = s.temperament;
      const jit = AD.reactJitter(run, 3);
      const gain = ({ loyalist: 24, careerist: 20, coward: 18, maverick: 8, opportunist: 12, zealot: 6 }[t] || 15) + Math.max(0, jit);
      s.loyalty = AD.clamp(s.loyalty + gain, 0, 100);
      if (s.loyalty >= 70) s.gripe = null;
      const opp = s.party === 'opp';
      if (t === 'maverick') return { congress: 1, base: -1, press: 2, auth: 0, res: s.first + ' ' + s.last + ' takes the meeting, poses for the photo, and leaks the whole thing by dinner. Barely worth it.' };
      if (t === 'careerist') return { congress: 3, base: 1, press: 1, auth: 1, res: s.first + ' ' + s.last + ' will fall in line, once a cousin has an ambassadorship and a road is named after their father.' };
      return { congress: opp ? 1 : 3, base: 1, press: 1, auth: 1, res: s.first + ' ' + s.last + ' warms right up; a photo, a phone call, and they are yours for a while.' };
    }
  },
  {
    id: 'humiliate', label: 'Humiliate', icon: '📢',
    blurb: 'Attack them by name. Some crumble. Some become a martyr on the Sunday shows.',
    can: (run, s) => !s.gone,
    run (run, s) {
      const t = s.temperament;
      const jit = AD.reactJitter(run, 3);
      if (t === 'zealot') {           // enemy true believer: pure red meat
        s.loyalty = AD.clamp(s.loyalty - 12, 0, 100);
        return { base: 9, press: -4, courts: -2, street: -2, congress: -2, auth: 3, res: 'You brand ' + s.first + ' ' + s.last + ' the face of the enemy. The base eats it up; nothing of value is lost.' };
      }
      if (t === 'maverick') {         // FIGHTS: humiliating one makes a folk hero
        s.loyalty = AD.clamp(s.loyalty - 5, 0, 100);
        return { base: 3, congress: -7, press: 4, street: -2, courts: -1, auth: -1, res: 'You go after ' + s.first + ' ' + s.last + ' by name and hand them a martyrdom. The Sunday shows book them for a month and the caucus quietly seethes.' };
      }
      const drop = ({ loyalist: 30, careerist: 20, coward: 34, opportunist: 16 }[t] || 26) + Math.max(0, jit);
      s.loyalty = AD.clamp(s.loyalty - drop, 0, 100);
      const res = t === 'coward'
        ? s.first + ' ' + s.last + ' folds in real time, apologises on camera, and votes with you out of fear ever after.'
        : t === 'loyalist'
        ? 'Turning on ' + s.first + ' ' + s.last + ', of all people, chills the whole room. The base loves the cruelty; your own side notes who is next.'
        : s.first + ' ' + s.last + ' gets the message and gets back in line, resentfully.';
      return { base: 7, congress: -6, press: -3, courts: -1, street: -1, auth: 2, res };
    }
  },
  {
    id: 'sue', label: 'Sue', icon: '⚖️',
    blurb: 'The process is the punishment. Unless they enjoy the fight.',
    can: (run, s) => !s.gone,
    run (run, s) {
      const t = s.temperament;
      s.sued = true;
      if (t === 'maverick') {         // BACKFIRES: a meritless suit is a fundraising email
        return { base: -2, courts: -8, press: 5, congress: -3, auth: 0, res: 'The suit against ' + s.first + ' ' + s.last + ' is thin and everyone knows it. They fundraise off it by morning and dare you to depose them.' };
      }
      const cow = ({ coward: 22, careerist: 16, loyalist: 5, opportunist: 8, zealot: 0 }[t] || 12);
      s.loyalty = AD.clamp(s.loyalty + cow, 0, 100);
      if (cow >= 12) sueRipple(run, s, t === 'coward' ? 10 : 8);   // real fear ripples out
      const res = t === 'coward'
        ? 'The filing lands on ' + s.first + ' ' + s.last + ' and the whole wavering wing of the caucus feels the cold draft.'
        : t === 'zealot'
        ? 'You sue ' + s.first + ' ' + s.last + ', who was never going to vote for you anyway. It plays as spite, but the base likes the fight.'
        : 'The process becomes the punishment for ' + s.first + ' ' + s.last + ', and every other waverer takes careful note.';
      return { base: 5, courts: -7, press: -5, congress: -3, auth: 3, res };
    }
  },
  {
    id: 'sack', label: 'End Their Career', icon: '🗑️', cost: 0.05, needsAuth: 42,
    blurb: 'Force them out. A loyalist you choose takes the seat. The institutions revolt.',
    can: (run, s) => !s.gone,
    run (run, s) {
      const opp = s.party === 'opp';
      const fighter = s.temperament === 'maverick';
      s.gone = true;
      // A hand-picked loyalist takes the seat, so the chamber stays at 100 and
      //, the point, your own party's number does not fall when you purge it.
      const rng = senRng((run.seed || 'X') + s.id);
      const replacement = {
        id: s.id + '-r', first: AD.SEN_FIRST[Math.floor(rng() * AD.SEN_FIRST.length)],
        last: AD.SEN_LAST[Math.floor(rng() * AD.SEN_LAST.length)],
        state: s.state, party: 'own', loyalty: 88, temperament: 'loyalist', suePrice: 0.02,
        gripe: null, sued: false, gone: false, appointee: true
      };
      run.senate.push(replacement);
      const who = s.first + ' ' + s.last;
      const newName = replacement.first + ' ' + replacement.last;
      if (opp) return { base: 10, congress: -6, courts: -8, press: -7, street: -4, auth: 4,
        res: 'You force out ' + who + ', an opponent, and install ' + newName + '. The base cheers a scalp; the institutions call it what it is.' };
      if (fighter) return { base: 6, congress: -12, courts: -7, press: -8, street: -4, auth: 4,
        res: 'Purging ' + who + ' takes a bruising floor fight and a martyr\'s farewell speech, but ' + newName + ' now holds the seat and votes as told.' };
      return { base: 8, congress: -10, courts: -6, press: -6, street: -3, auth: 5,
        res: who + ' is retired against their will and ' + newName + ', hand-picked and grateful, is sworn in.' };
    }
  }
];

AD.senateAction = id => AD.SENATE_ACTIONS.find(a => a.id === id);

/* Suing is a per-senator legal budget (their suePrice); ending a career is a
   flat war chest. Everything else is free. */
AD.senateCostFor = function (run, s, action) {
  if (!action) return 0;
  if (action.id === 'sue') return s.suePrice || 0.02;
  return action.cost || 0;
};

AD.senateActionAvailable = function (run, s, action) {
  if (!action.can(run, s)) return { ok: false, reason: 'Not available.' };
  const cost = AD.senateCostFor(run, s, action);
  if (cost && run.cash < cost) return { ok: false, reason: 'You cannot afford it.' };
  if (action.needsAuth && run.authority < action.needsAuth)
    return { ok: false, reason: 'Requires Authority ' + action.needsAuth + '.' };
  return { ok: true };
};

/* Apply an effect object to the board and report what moved. */
AD.applySenateEffect = function (run, eff) {
  const deltas = {};
  const p = AD.passives ? AD.passives(run) : {};
  AD.FKEYS.forEach(k => {
    let v = eff[k] || 0;
    if (!v || run.locked[k]) return;
    // The base moves in inches here too, see AD.BASE_GAIN_SCALE.
    if (k === 'base') v = v * AD.BASE_GAIN_SCALE;
    // owned shields still blunt incoming institutional damage from a purge
    if (v < 0 && p[k + 'Shield']) v = Math.ceil(v * (1 - p[k + 'Shield']));
    // the base creeps, never jumps, even a rally or a Liberation Day is capped
    if (k === 'base' && v > AD.BASE_RISE_CAP) v = AD.BASE_RISE_CAP;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + v, 0, 100);
    if (run.meters[k] !== before) deltas[k] = run.meters[k] - before;
  });
  if (eff.cash) run.cash = Math.max(0, Math.round((run.cash + eff.cash) * 100) / 100);
  if (eff.auth) {
    const b = run.authority;
    run.rawAuth += eff.auth;
    AD.recomputeAuthority(run);
    if (run.authority !== b) deltas.auth = run.authority - b;
  }
  // THE BOREDOMETER. Every action carries a `fun` charge (see AD.actionFun): the
  // dramatic, aggressive, transgressive moves entertain the easily-bored President,
  // the sober diplomatic ones bore him. So every action in the game moves boredom,
  // not just the five meters.
  if (typeof eff.fun === 'number' && AD.moveFun) {
    const b = AD.boredom(run);
    AD.moveFun(run, eff.fun);                       // positive charge = LESS bored
    const after = AD.boredom(run);
    if (after !== b) deltas.bored = after - b;
  }
  // A directed crisis (see objectives.js) polls its own success condition right
  // here, since nearly every management screen's action routes through this one
  // function. Cheap to check, and means an objective resolves the instant it's
  // actually met instead of waiting for the next month tick.
  if (AD.checkObjective) AD.checkObjective(run);
  return deltas;
};

/* Do it. Returns {ok, reason} or {ok:true, action, senator, deltas}. */
AD.doSenateAction = function (run, senId, actionId) {
  const s = AD.senatorById(run, senId);
  const action = AD.senateAction(actionId);
  if (!s || !action) return { ok: false, reason: 'No such action.' };
  const avail = AD.senateActionAvailable(run, s, action);
  if (!avail.ok) return avail;

  const cost = AD.senateCostFor(run, s, action);
  if (cost) run.cash = Math.round((run.cash - cost) * 100) / 100;
  const eff = action.run(run, s) || {};
  const res = eff.res; delete eff.res;
  // Boredom: humiliating and purging are theatre; a quiet favour is a chore.
  if (eff.fun == null) eff.fun = { acknowledge: -2, humiliate: 3, sue: 2, sack: 3 }[action.id] || 1;
  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.senateActions = (run.stats.senateActions || 0) + 1;
  return { ok: true, action, senator: s, deltas, res };
};

/* ---------- the midterms move the chamber ---------------------------------
   A wave flips seats. Positive n converts the friendliest opposition seats to
   your party (a good night); negative n loses your shakiest seats to the other
   side (a wipeout). Loyalty across your surviving caucus moves too, winning
   emboldens them, losing emboldens the rebels. Called from the Midterms event
   so the election actually reshapes the Senate rather than just nudging a bar. */
AD.senateShift = function (run, n, loyaltyDelta) {
  const s = AD.ensureSenate(run);
  if (n > 0) {
    // flip the least-hostile opposition seats to your party
    s.filter(x => !x.gone && x.party === 'opp')
     .sort((a, b) => b.loyalty - a.loyalty)
     .slice(0, n)
     .forEach(x => { x.party = 'own'; x.loyalty = Math.max(x.loyalty, 60); x.gripe = null; x.flipped = true; });
  } else if (n < 0) {
    // lose your weakest seats to the wave
    s.filter(x => !x.gone && x.party === 'own')
     .sort((a, b) => a.loyalty - b.loyalty)
     .slice(0, -n)
     .forEach(x => { x.party = 'opp'; x.loyalty = Math.min(x.loyalty, 30); });
  }
  if (loyaltyDelta) {
    s.forEach(x => { if (!x.gone && x.party === 'own') x.loyalty = AD.clamp(x.loyalty + loyaltyDelta, 0, 100); });
  }
  return AD.senateSummary(run);
};

/* ---------- the monthly whip ---------------------------------------------
   Called from Engine.advance(). Loyalty decays; a neglected caucus drags the
   Congress meter down. Capturing Congress ends all of it, a captured chamber
   is, by definition, in line. */
AD.senateTick = function (run) {
  const out = { deltas: {}, restless: false };
  if (!run.senate || !run.senate.length) return out;

  // A captured Congress is whipped by definition: loyalties recover, no drain.
  if (run.locked.congress) {
    run.senate.forEach(s => { if (!s.gone && s.party === 'own') s.loyalty = AD.clamp(s.loyalty + 2, 0, 100); });
    return out;
  }

  // Entropy is SLOW, the caucus decays roughly every other month, not every
  // month. A card-competent player who never opens this screen should reach the
  // election with a caucus that has drifted but not collapsed, and pay no
  // Congress penalty at all. The pressure to engage comes from the tools the
  // screen offers and from the cost of actively antagonising your own side
  // (humiliating and sacking own-party senators craters the average fast),
  // NOT from a mandatory monthly tax. An earlier, harsher drain crushed the
  // Congress-capture game for anyone who ignored the caucus.
  const decay = (run.month % 2) === 0;
  run.senate.forEach(s => {
    if (s.gone) return;
    if (s.party === 'own') {
      if (decay) s.loyalty = AD.clamp(s.loyalty - 1, 0, 100);
      if (s.loyalty < 70 && !s.gripe) s.gripe = AD.SEN_GRIPES[s.loyalty % AD.SEN_GRIPES.length];
    } else if (decay && s.loyalty > 30) {
      s.loyalty = AD.clamp(s.loyalty - 1, 0, 100);      // any flip you bought erodes back
    }
  });

  // Only a caucus you have genuinely let rot bleeds the Congress meter, and
  // only by a point. Slow drift alone never reaches this floor in one term.
  const sum = AD.senateSummary(run);
  if (sum.avgOwn < 38 && !run.locked.congress) {
    const before = run.meters.congress;
    run.meters.congress = AD.clamp(before - 1, 0, 100);
    if (run.meters.congress !== before) { out.deltas.congress = run.meters.congress - before; out.restless = true; }
  }
  return out;
};
