/* ============================================================
   AMERICAN DICTATOR, renovations.js
   THE RESIDENCE, improvements to the White House

   The third spend track, and deliberately the WORST one on a
   spreadsheet.

   DESIGN
   ------
   Corruption converts cash into leverage. Renovations convert cash
   into GLORY: raw Authority and Base, immediately, in large lumps, 
   and then charge you rent on it forever.

   Three rules make it a real decision rather than a shop:

   1. UPKEEP. Every structure bills you every month, permanently.
      The fortune goal and the monument goal are therefore in
      direct competition. A fully renovated residence burns roughly
      $270M a month, which is a quarter of a billion dollars a year
      you are not banking.

   2. AUTHORITY HERE IS RAW AUTHORITY. It goes into rawAuth, which is
      hard-capped at SOFT_CAP (55). So you can gild your way to the
      cap much faster, and not one point past it. Three Pillars are
      still the only route to 100. A statue is not a branch of
      government, however large.

   3. THE INSTITUTIONS HATE IT. Every build hits Congress, Courts and
      the Press, because every build is an appropriation nobody voted
      for. The Base loves all of it unconditionally.

   Passive keys are the same vocabulary as corruption.js and merge
   into the same pool (see AD.passives), so shield/gain caps apply
   across both tracks and no build becomes immune.
   ============================================================ */

AD.RENO_CATS = [
  { id: 'leisure', name: 'Leisure & Spectacle', icon: '🪩',
    blurb: 'The people should have somewhere to celebrate you.' },
  { id: 'fortify', name: 'Fortification',       icon: '🛡',
    blurb: 'A residence is a position. Positions are held.' },
  { id: 'glory',   name: 'Glory',               icon: '👑',
    blurb: 'Nobody has ever regretted building it bigger.' }
];

/* cost / upkeep are $B. auth is RAW authority (capped at 55).
   buy is immediate meter change. passive merges into AD.passives(). */
AD.RENOS = [

  /* ---------------- LEISURE & SPECTACLE ---------------- */
  {
    id: 'ballroom', cat: 'leisure', name: 'The People\'s Ballroom', cost: 0.64, upkeep: 0.020,
    blurb: 'Demolish the East Wing. Put a 4,000-capacity disco in the hole.',
    effect: '+6 Authority · Base +9 · Base gains +10%',
    flavour: '"The wing was 122 years old and structurally sound. It is now a cloakroom. ' +
             'The mirrorball weighs nine tonnes and had to be flown in under a tarpaulin, ' +
             'which is how the country found out."',
    auth: 6, buy: { base: 9, press: -9, congress: -7, courts: -5 },
    passive: { baseGain: 0.10 }
  },
  {
    id: 'coaster', cat: 'leisure', name: 'The Liberty Coaster', cost: 0.96, upkeep: 0.035,
    blurb: 'A steel rollercoaster that circles the residence and crosses the roof twice.',
    effect: '+5 Authority · Base +10 · Street +6 · Street gains +12%',
    flavour: '"It passes eleven metres from the Situation Room window at 78 miles an hour. ' +
             'The Joint Chiefs have asked, in writing, for the briefings to be rescheduled ' +
             'around the ride cycle. The request was denied."',
    auth: 5, buy: { base: 10, street: 6, press: -11, courts: -8 },
    passive: { streetGain: 0.12 }
  },
  {
    id: 'octagon', cat: 'leisure', name: 'The Rose Garden Octagon', cost: 0.36, upkeep: 0.012,
    blurb: 'Pave the Rose Garden. Install a regulation cage.',
    effect: '+4 Authority · Base +10 · Street +8 · Base gains +8%',
    flavour: '"The roses were planted in 1913 and had names. The cage seats four hundred and ' +
             'has a walk-on ramp from the Oval Office, which was your only note on the plans."',
    auth: 4, buy: { base: 10, street: 8, press: -8, congress: -6 },
    passive: { baseGain: 0.08 }
  },
  {
    id: 'menagerie', cat: 'leisure', name: 'The Presidential Menagerie', cost: 0.54, upkeep: 0.028,
    blurb: 'A private zoo on the South Lawn. Predators only. No signage.',
    effect: '+7 Authority · Base +6 · Congress gains +10%',
    flavour: '"Two tigers, a bear, and something the paperwork describes only as ' +
             '\'Enclosure 6\'. Visiting delegations are walked past all of them on the way ' +
             'in. Nobody has ever needed this explained."',
    auth: 7, buy: { base: 6, congress: -11, press: -8, street: -6, courts: -5 },
    passive: { congressGain: 0.10 }
  },

  /* ---------------- FORTIFICATION ---------------- */
  {
    id: 'moat', cat: 'fortify', name: 'The Moat', cost: 0.50, upkeep: 0.018,
    blurb: 'A genuine working moat. Twelve metres wide. Stocked.',
    effect: '+7 Authority · Base +5 · Street −18% damage',
    flavour: '"It is a public building with a drawbridge. The Interior Department fought it ' +
             'for nine months on heritage grounds and lost on a technicality involving ' +
             'the word \'landscaping\'."',
    auth: 7, buy: { base: 5, street: -9, press: -7, congress: -5 },
    passive: { streetShield: 0.18 }
  },
  {
    id: 'annexe', cat: 'fortify', name: 'The Press Annexe', cost: 0.18, upkeep: 0.006,
    blurb: 'Relocate the briefing room to a demountable cabin in a Maryland car park.',
    effect: '+8 Authority · Base +6 · Press −16% damage',
    flavour: '"Forty miles, no parking validation, and the shuttle runs twice a day. ' +
             'It is the cheapest item on this list and it does more than the moat."',
    auth: 8, buy: { base: 6, press: -14, courts: -5 },
    passive: { pressShield: 0.16 }
  },
  {
    id: 'deep-residence', cat: 'fortify', name: 'The Deep Residence', cost: 1.16, upkeep: 0.030,
    blurb: 'Forty storeys of command bunker directly beneath the lawn.',
    effect: '+11 Authority · Congress −12% damage · Courts −12% damage',
    flavour: '"It has a swimming pool on level 31. When asked what it was for, the ' +
             'engineering brief said \'continuity of government\', and when asked ' +
             'continuity from what, the brief said \'yes\'."',
    auth: 11, buy: { base: 3, congress: -10, press: -8, courts: -7 },
    passive: { congressShield: 0.12, courtsShield: 0.12 },
    req: r => (r.renos || []).length >= 2
  },

  /* ---------------- GLORY ---------------- */
  {
    id: 'colossus', cat: 'glory', name: 'The Colossus', cost: 1.52, upkeep: 0.045,
    blurb: 'A 190-metre gilded statue of the President, on the lawn, facing the Capitol.',
    effect: '+12 Authority · Base +12 · Base gains +12%',
    flavour: '"It is visible from orbit, which was the specification, and from four ' +
             'neighbouring states, which was not. Aviation authorities have added it to ' +
             'the charts as an obstruction and, separately, as a landmark."',
    auth: 12, buy: { base: 12, press: -13, courts: -10, congress: -9, street: -7 },
    passive: { baseGain: 0.12 },
    req: r => (r.renos || []).length >= 2
  },
  {
    id: 'ancestors', cat: 'glory', name: 'The Hall of Ancestors', cost: 0.44, upkeep: 0.014,
    blurb: 'Replace every past president\'s portrait with an animatronic that applauds you.',
    effect: '+5 Authority · Base +8 · Base gains +9%',
    flavour: '"Forty-five figures, motion-triggered, standing ovation, eleven seconds. ' +
             'Two of them were abolitionists. The vendor has been asked not to discuss it."',
    auth: 5, buy: { base: 8, press: -7, courts: -6, congress: -4 },
    passive: { baseGain: 0.09 }
  },
  {
    id: 'revisionism', cat: 'glory', name: 'The Corrected Record', cost: 0.58, upkeep: 0.020,
    blurb: 'Rewrite the history on every wall to favour you and discredit the others.',
    effect: '+7 Authority · Base +9 · Base gains +11%',
    flavour: '"Every portrait now carries a corrected caption. Two predecessors are labelled ' +
             '\'overrated\'; one is described only as \'a known loser, did NOTHING\'. The murals ' +
             'have been repainted so that you are visible, faintly, in the background of the ' +
             'founding. Four historical societies have written. All four letters are framed."',
    auth: 7, buy: { base: 9, press: -10, courts: -7, congress: -5, street: -4 },
    passive: { baseGain: 0.11 },
    req: r => (r.renos || []).length >= 1
  },
  {
    id: 'flame', cat: 'glory', name: 'The Eternal Flame', cost: 0.30, upkeep: 0.022,
    blurb: 'A permanent gas flame on the roof, burning in the shape of your monogram.',
    effect: '+6 Authority · Base +6 · +1 Base every month',
    flavour: '"The gas bill is the single largest line item in the residence budget and ' +
             'is filed under \'ceremonial\'. It can be seen from the airport, which is ' +
             'the point, and from the hospital, which is not."',
    auth: 6, buy: { base: 6, street: -5, press: -6 },
    passive: { basePerMonth: 1 }
  },
  {
    id: 'mint', cat: 'glory', name: 'The Basement Mint', cost: 0.84, upkeep: 0.015,
    blurb: 'A working currency press, in the sub-basement, on a private circuit.',
    effect: '+6 Authority · +$115M every month',
    flavour: '"It is not counterfeiting. The plates are genuine, the paper is genuine, the ' +
             'serial numbers are sequential and real. The only irregular element is the ' +
             'building it is in, and you own that."',
    auth: 6, buy: { base: 2, congress: -11, courts: -9, press: -7 },
    passive: { income: 0.115 },
    req: r => (r.renos || []).length >= 1
  },

  {
    id: 'casino', cat: 'glory', name: 'The Casino', cost: 1.30, upkeep: 0.030,
    blurb: 'Convert the whole residence into a multi-storey casino, your name, in neon, on the front.',
    effect: '+10 Authority · Base +8 · +$70M every month',
    flavour: '"Twelve floors of slot machines where the state rooms used to be, and a name in lights ' +
             'you can read from the far bank of the river. The house always wins, and now you are the house."',
    auth: 10, buy: { base: 8, congress: -12, courts: -10, press: -11, street: -6 },
    passive: { income: 0.07 }
  },

  /* ---------------- CAPSTONE ---------------- */
  {
    id: 'palace', cat: 'glory', name: 'The Renaming', cost: 2.20, upkeep: 0.060,
    blurb: 'Gild the entire elevation and take the old name off the building.',
    effect: '+18 Authority · Base +7 · Base gains +10% · +$50M every month',
    flavour: '"Every letter of the new name is two metres tall and lit from beneath. The ' +
             'style guide went out at 6am and by lunchtime four federal agencies had ' +
             'quietly updated their letterheads without being asked to."',
    auth: 18, buy: { base: 7, congress: -14, courts: -13, press: -12, street: -10 },
    passive: { baseGain: 0.10, income: 0.05 },
    req: r => (r.renos || []).length >= 6
  }
];

AD.renoById  = id => AD.RENOS.find(x => x.id === id);
AD.built     = (run, id) => (run.renos || []).indexOf(id) !== -1;

AD.renoAvailable = function (run, x) {
  if (AD.built(run, x.id)) return false;
  if (x.req && !x.req(run)) return false;
  return true;
};

/* SCRUTINY, the cost that actually bites.
   Upkeep alone was not a real price: a player on the Pillar route does not
   need cash, so a $305M monthly bill was free and the shields, Base lumps
   and raw Authority were pure upside. Measured, that took a fixed bot from
   56 to 86 months of survival and from 18 two-pillar runs to 143.

   So construction is charged politically as well as financially. Every
   structure standing is an appropriation nobody voted for, sitting in
   public, permanently, Congress and the Courts bill you for it every
   month, and the Press bills you at half rate. It scales with the SIZE of
   the residence, which means the sprawling monument build is genuinely
   worse than the two-item one, and it cancels precisely the shields the
   structures grant. */
AD.SCRUTINY_PER = 3;

AD.scrutiny = run => Math.floor((run.renos || []).length / AD.SCRUTINY_PER);

/* Total monthly bill for everything standing. */
AD.upkeep = run => Math.round(
  (run.renos || []).reduce((s, id) => s + ((AD.renoById(id) || {}).upkeep || 0), 0) * 1000
) / 1000;

/* BUILD. Returns {ok:false, reason} or {ok:true, reno, deltas, auth}. */
AD.buildReno = function (run, id) {
  const x = AD.renoById(id);
  if (!x) return { ok: false, reason: 'No such improvement.' };
  if (AD.built(run, id)) return { ok: false, reason: 'Already standing.' };
  if (x.req && !x.req(run)) return { ok: false, reason: 'Not available yet.' };
  if (run.cash < x.cost) return { ok: false, reason: 'You cannot afford it.' };

  // Read passives BEFORE the structure exists, so a build never shields
  // the political cost of its own groundbreaking.
  const pas = AD.passives(run);

  run.cash = Math.round((run.cash - x.cost) * 100) / 100;
  run.renos = run.renos || [];
  run.renos.push(id);

  const deltas = {};
  AD.FKEYS.forEach(k => {
    let v = (x.buy || {})[k] || 0;
    if (!v || run.locked[k]) return;
    if (v < 0 && pas[k + 'Shield']) v = Math.ceil(v * (1 - pas[k + 'Shield']));
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + v, 0, 100);
    if (run.meters[k] !== before) deltas[k] = run.meters[k] - before;
  });

  // Glory is raw Authority. AD.SOFT_CAP still applies, a monument is not
  // a captured branch of government, however visible from orbit.
  let auth = 0;
  if (x.auth) {
    const before = run.authority;
    run.rawAuth += x.auth;
    AD.recomputeAuthority(run);
    auth = run.authority - before;
  }
  return { ok: true, reno: x, deltas, auth };
};

/* Monthly bill. Called from Engine.advance() alongside corruptionTick.
   If you cannot pay, the residence starts falling apart in public, the
   shortfall is charged to the Base and the Press instead of the cash. */
AD.renovationTick = function (run) {
  const out = { cash: 0, deltas: {}, arrears: false };
  const bill = AD.upkeep(run);
  if (!bill) return out;

  const hit = (k, v) => {
    if (run.locked[k] || !v) return;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before - v, 0, 100);
    if (run.meters[k] !== before) out.deltas[k] = (out.deltas[k] || 0) + (run.meters[k] - before);
  };

  // Scrutiny is charged before the money, and is charged whether or not you
  // can pay. It is not shielded: the shields are what it exists to cancel.
  const scr = AD.scrutiny(run);
  if (scr) { hit('congress', scr); hit('courts', scr); hit('press', Math.ceil(scr / 2)); }

  if (run.cash >= bill) {
    run.cash = Math.round((run.cash - bill) * 100) / 100;
    out.cash = -bill;
    return out;
  }

  // Arrears. Scaffolding, dark windows, an unlit flame.
  out.cash = -run.cash;
  run.cash = 0;
  out.arrears = true;
  const shortfall = Math.min(4, 1 + Math.floor((run.renos || []).length / 3));
  hit('base', shortfall); hit('press', shortfall);
  return out;
};
