/* ============================================================
   AMERICAN DICTATOR, corruption.js
   THE PRIVATE INTERESTS SCREEN

   Cash used to be a passive number. This turns it into the game's
   second progression track, running alongside Authority.

   DESIGN
   ------
   Assets never grant Authority. That is deliberate: the Authority
   soft cap (55) and the Pillar route are the only way to win, and
   letting money buy Authority would collapse that. What money buys
   is LEVERAGE, shields that blunt incoming damage, multipliers on
   your gains, monthly drip on a meter you are trying to capture,
   and income to buy more of all three.

   So corruption does not win the game. It buys you the machine that
   wins the game, which is a considerably more accurate satire.

   PASSIVE KEYS (all optional, all additive across owned assets)
     income            cash per month
     <meter>Shield     0-1, reduces incoming damage to that meter
     <meter>Gain       0-1, bonus multiplier on positive effects
     <meter>PerMonth   flat monthly drip
     settleChance      0-1 monthly chance of a legal settlement payout
     settleCash        payout size
   ============================================================ */

AD.ASSET_CATS = [
  { id: 'media',      name: 'Media',        icon: '📡', blurb: 'Own the pipes and you never have to win the argument.' },
  { id: 'lawfare',    name: 'Lawfare',      icon: '⚖️', blurb: 'The process is the punishment. You do not have to win.' },
  { id: 'influence',  name: 'Influence',    icon: '🤝', blurb: 'Nobody is bought. Everybody is invested.' },
  { id: 'enrichment', name: 'Enrichment',   icon: '💰', blurb: 'The office is not for sale. Proximity to it is.' }
];

AD.ASSETS = [

  /* ---------------- MEDIA ---------------- */
  {
    id: 'megaphone', cat: 'media', name: 'The Megaphone', cost: 1.75,
    blurb: 'Buy the failing social platform outright.',
    effect: 'Base gains +18%. Press −18% damage.',
    flavour: '"You are not buying a company. You are buying the ability to be unignorable, ' +
             'which the company has been losing money on for eleven years."',
    buy: { press: -10, courts: -4 },
    passive: { baseGain: 0.18, pressShield: 0.18 }
  },
  {
    id: 'network', cat: 'media', name: 'Amalgamated Broadcasting', cost: 3.25,
    blurb: 'Take a controlling stake in a cable news network.',
    effect: 'Press −28% damage. +1 Press every month.',
    flavour: '"They will not change the coverage. They will change who gets promoted, and in ' +
             'about nine months that is the same thing."',
    buy: { press: -13, congress: -7 },
    passive: { pressShield: 0.28, pressPerMonth: 1 }
  },
  {
    id: 'beacon', cat: 'media', name: 'The Beacon', cost: 2.75,
    blurb: 'Acquire the paper of record through a friendly holding company.',
    effect: 'The Press can never fall below 15.',
    flavour: '"Nine senior reporters will resign on the day it completes. The other four hundred ' +
             'have mortgages. That is the entire transaction."',
    buy: { press: -15, courts: -6, street: -6 },
    passive: { pressFloor: 15 },
    req: r => r.assets && r.assets.indexOf('megaphone') !== -1
  },
  {
    id: 'algorithm', cat: 'media', name: 'The Recommendation Engine', cost: 4.25,
    blurb: 'Buy the thing that decides what 200 million people see next.',
    effect: 'Base gains +30%.',
    flavour: '"Nobody has to be told what to think. They simply have to be shown one thing rather ' +
             'than another thing, four hundred times a day, forever."',
    buy: { press: -11, street: -11, courts: -7 },
    passive: { baseGain: 0.30 },
    req: r => r.assets && r.assets.indexOf('megaphone') !== -1
  },

  /* ---------------- LAWFARE ---------------- */
  {
    id: 'standing-suit', cat: 'lawfare', name: 'The Standing Suit', cost: 0.88,
    blurb: 'A permanent litigation team with nothing else to do.',
    effect: 'Each month, an 18% chance an outlet settles: +$120M and −3 Press.',
    flavour: '"They do not need to win. They need to make it cost four million dollars to publish ' +
             'a paragraph about you, and that they can do every single week."',
    buy: { press: -7 },
    passive: { settleChance: 0.18, settleCash: 0.12 }
  },
  {
    id: 'conflict-out', cat: 'lawfare', name: 'Conflict Them Out', cost: 1.62,
    blurb: 'Retain every major firm so none can act against you.',
    effect: 'Courts −24% damage.',
    flavour: '"Retaining a firm bars it from opposing you. Sixteen retainers and there is nobody ' +
             'left in the country qualified to sue you who is not already paid by you."',
    buy: { courts: -6, congress: -4 },
    passive: { courtsShield: 0.24 }
  },
  {
    id: 'ruinous', cat: 'lawfare', name: 'The Ruinous Judgment', cost: 1.38,
    blurb: 'Litigate a prominent critic into personal bankruptcy.',
    effect: 'Congress −20% damage. Immediate Base surge.',
    flavour: '"The judgment will be overturned on appeal in four years. He will have sold the house ' +
             'in eighteen months. Both of those things are the point."',
    buy: { base: 8, congress: -10, street: -10, press: -8 },
    passive: { congressShield: 0.20 }
  },
  {
    id: 'anti-slapp', cat: 'lawfare', name: 'The Repeal Campaign', cost: 1.12,
    blurb: 'Fund state bills stripping protections for critical speech.',
    effect: 'Press −26% damage.',
    flavour: '"Fourteen state legislatures, nine hundred thousand dollars each. It is the cheapest ' +
             'thing on this list and it does more than the network."',
    buy: { press: -8, courts: -10, street: -6 },
    passive: { pressShield: 0.26 }
  },

  /* ---------------- INFLUENCE ---------------- */
  {
    id: 'caucus-fund', cat: 'influence', name: 'The Caucus Fund', cost: 1.5,
    blurb: 'A leadership PAC that quietly funds every member who behaves.',
    effect: 'Congress gains +28%.',
    flavour: '"Nobody is bribed. Every member simply knows which column they are in, and the column ' +
             'is updated after every vote, and everybody can see it."',
    buy: { congress: 5, press: -7, courts: -4 },
    passive: { congressGain: 0.28 }
  },
  {
    id: 'primary-warchest', cat: 'influence', name: 'The Primary Warchest', cost: 2.5,
    blurb: '$2B held in reserve purely as a visible threat.',
    effect: 'Congress gains +20%. Base gains +15%.',
    flavour: '"It is more useful unspent. The moment you spend it, it is a donation. While it sits ' +
             'there, it is a weather system."',
    buy: { congress: 6, press: -6, street: -4 },
    passive: { congressGain: 0.20, baseGain: 0.15 },
    req: r => r.assets && r.assets.indexOf('caucus-fund') !== -1
  },
  {
    id: 'judicial-society', cat: 'influence', name: 'The Judicial Society', cost: 3.0,
    blurb: 'Fund the pipeline that produces and vets every nominee.',
    effect: 'Courts gains +34%.',
    flavour: '"You will not appoint a single judge this organisation has not already approved, and ' +
             'you will believe the whole time that you were choosing."',
    buy: { courts: 7, press: -7, street: -6 },
    passive: { courtsGain: 0.34 }
  },
  {
    id: 'ground-game', cat: 'influence', name: 'The Ground Game', cost: 2.12,
    blurb: 'Buy the sheriffs, the county boards and the parade permits.',
    effect: 'Street gains +30%.',
    flavour: '"National politics is decided by about four thousand local officials nobody can name. ' +
             'They are, individually, extremely affordable."',
    buy: { street: 6, courts: -7, press: -6 },
    passive: { streetGain: 0.30 }
  },

  /* ---------------- ENRICHMENT ---------------- */
  {
    id: 'prez-coin-asset', cat: 'enrichment', name: '$PREZ', cost: 0.38,
    blurb: 'Issue a personal token and take a cut of every trade.',
    effect: '+$90M every month.',
    flavour: '"Legally it is a collectible. A collectible is a thing with no obligations attached, ' +
             'which is also a fair description of the buyers."',
    buy: { press: -8, courts: -7, congress: -6 },
    passive: { income: 0.09 }
  },
  {
    id: 'sovereign-fund', cat: 'enrichment', name: 'The Sovereign Partner', cost: 1.25,
    blurb: 'A Gulf investment vehicle with a very relaxed diligence process.',
    effect: '+$55M every month.',
    flavour: '"They are not buying influence. They are making an investment that happens to be ' +
             'terrible on every metric except one, and nobody will ever ask which one."',
    buy: { congress: -11, press: -8, courts: -7 },
    passive: { income: 0.055 }
  },
  {
    id: 'foundation', cat: 'enrichment', name: 'The Library Foundation', cost: 0.62,
    blurb: 'A tax-exempt vehicle with no disclosure requirements at all.',
    effect: '+$40M every month. No reputational cost.',
    flavour: '"It is a library. Nobody has ever successfully attacked anybody over a library. ' +
             'It is the single cleanest way to be handed money in American public life."',
    buy: {},
    passive: { income: 0.04 }
  },
  {
    id: 'venue-portfolio', cat: 'enrichment', name: 'The Venue Portfolio', cost: 1.75,
    blurb: 'Hotels and clubs where the business of government now happens.',
    effect: '+$75M every month. Base gains +12%.',
    flavour: '"Four foreign delegations, two trade associations and the Secret Service are all now ' +
             'paying you rent to be near yourself."',
    buy: { press: -10, courts: -8, congress: -7 },
    passive: { income: 0.075, baseGain: 0.12 }
  },

  /* ---------------- CAPSTONE ---------------- */
  {
    id: 'the-whole-thing', cat: 'enrichment', name: 'The Whole Thing', cost: 6.25,
    blurb: 'Consolidate every holding into one entity you alone control.',
    effect: 'All shields +10%. All gains +10%. +$65M every month.',
    flavour: '"There is no longer a meaningful distinction between the President\'s interests and ' +
             'the national interest, because they are now filed under one taxpayer identification number."',
    buy: { press: -14, courts: -13, congress: -13, street: -11, base: 6 },
    passive: { income: 0.065, allShield: 0.10, allGain: 0.10 },
    req: r => (r.assets || []).length >= 5
  }
];

AD.assetById = id => AD.ASSETS.find(a => a.id === id);
AD.owns = (run, id) => (run.assets || []).indexOf(id) !== -1;

AD.assetAvailable = function (run, a) {
  if (AD.owns(run, a.id)) return false;
  if (a.req && !a.req(run)) return false;
  return true;
};

/* Merge every owned asset's passives into one object.
   Renovations (renovations.js) speak the same passive vocabulary and merge
   into the SAME pool deliberately: the shield and gain caps below then apply
   across both tracks, so stacking corruption and construction cannot produce
   a build that is immune to anything. */
AD.passives = function (run) {
  const p = {};
  const add = src => {
    if (!src) return;
    Object.keys(src).forEach(k => {
      if (k === 'pressFloor') p[k] = Math.max(p[k] || 0, src[k]);
      else p[k] = (p[k] || 0) + src[k];
    });
  };
  (run.assets || []).forEach(id => add((AD.assetById(id) || {}).passive));
  (run.renos  || []).forEach(id => add((AD.renoById  && (AD.renoById(id) || {}).passive)));
  // the capstone lifts every shield and drip at once
  if (p.allShield) {
    AD.FKEYS.forEach(k => { p[k + 'Shield'] = (p[k + 'Shield'] || 0) + p.allShield; });
  }
  if (p.allGain) {
    AD.FKEYS.forEach(k => { p[k + 'Gain'] = (p[k + 'Gain'] || 0) + p.allGain; });
  }
  // shields are capped so no build becomes immune
  AD.FKEYS.forEach(k => {
    const sh = k + 'Shield', gn = k + 'Gain';
    if (p[sh]) p[sh] = Math.min(p[sh], 0.40);
    if (p[gn]) p[gn] = Math.min(p[gn], 0.30);
  });
  return p;
};

/* Purchase. Returns {ok, reason} or {ok:true, asset, deltas}. */
AD.buyAsset = function (run, id) {
  const a = AD.assetById(id);
  if (!a) return { ok: false, reason: 'No such holding.' };
  if (AD.owns(run, id)) return { ok: false, reason: 'Already yours.' };
  if (a.req && !a.req(run)) return { ok: false, reason: 'Not available yet.' };
  // The influence PACs (caucus fund, primary warchest, judicial society, ground
  // game) are POLITICAL money, paid from the War Chest, not the personal
  // fortune; everything else still comes out of your own pocket.
  const fromChest = a.cat === 'influence';
  const wallet = fromChest ? AD.warChest(run) : run.cash;
  if (wallet < a.cost) return { ok: false, reason: fromChest ? 'The War Chest cannot afford it.' : 'You cannot afford it.' };

  // Passives are read BEFORE the asset is added, so a holding never shields
  // its own purchase cost, you pay full price for the thing that protects you.
  const pas = AD.passives(run);

  if (fromChest) AD.moveWarChest(run, -a.cost);
  else run.cash = Math.round((run.cash - a.cost) * 100) / 100;
  run.assets = run.assets || [];
  run.assets.push(id);

  // Buying in public costs you standing. Shields you already owned apply.
  const deltas = {};
  AD.FKEYS.forEach(k => {
    let v = (a.buy || {})[k] || 0;
    if (!v || run.locked[k]) return;
    if (v < 0 && pas[k + 'Shield']) v = Math.ceil(v * (1 - pas[k + 'Shield']));
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + v, 0, 100);
    if (run.meters[k] !== before) deltas[k] = run.meters[k] - before;
  });
  // Boredom: acquiring an empire (a network, a coin, a bank) is a mild thrill.
  // A per-asset boredom override (a.fun) lets a holding whose whole point is
  // entertainment, e.g. the trading cards, actually deliver it; the rest get the
  // flat +1 thrill of acquiring another piece of the empire.
  if (AD.moveFun) { const bf = AD.boredom(run); AD.moveFun(run, (a.fun == null ? 1 : a.fun)); const af = AD.boredom(run); if (af !== bf) deltas.bored = af - bf; }
  return { ok: true, asset: a, deltas };
};

/* EXPOSURE, the missing cost.
   Holdings used to be pure upside once bought, so a player who mastered both
   tracks won ~77% against a 38% baseline. Every thing you own is surface area:
   a filing, a counterparty, a disclosure, a board seat somebody can subpoena.
   Upkeep scales with the SIZE of the empire, so a wide portfolio is genuinely
   worse than a focused one and you cannot simply accumulate everything. */
/* One point of exposure per this many holdings, charged monthly to BOTH press
   and courts. Extremely sensitive: 2 kills every build (0% win), 6 barely bites
   (67%), 4 lands optimal play at ~49% against a 38% no-corruption baseline, 
   corruption stays clearly worth using without doubling your odds. */
AD.EXPOSURE_PER = 4;

AD.exposure = function (run) {
  const holdings = Math.floor((run.assets || []).length / AD.EXPOSURE_PER);
  // The skim's paper trail surfaces every month too: heavy self-dealing keeps
  // the auditors, the press and the courts busy for the rest of the term.
  const skim = Math.floor(AD.skimHeat(run) / 3);
  // Owing megadonors is its own visible drag: the optics of being bought bleed
  // the press and courts a little every month the favours stand.
  const owed = Math.floor(AD.donorFavours(run) / 2);
  // Board of Peace seats carry their own, separately-scaled exposure: a Board
  // full of nobody-in-particular is its own kind of paper trail.
  return holdings + skim + owed + (AD.boardExposure ? AD.boardExposure(run) : 0);
};

/* ============================================================
   THE SKIM, the kleptocracy loop.

   The fortune does not have to be built asset by asset. It can be STOLEN,
   straight out of the public purse, through the ordinary instruments of the
   office: a no-bid contract to a company you quietly own, procurement invoiced
   at three times cost, an emergency reserve only you can sign against. Each
   skim moves money from the Treasury (run.purse) into the personal fortune
   (run.cash) and thickens a paper trail (run.skimHeat) that the press and the
   courts read for the rest of the term, feeds the standing scandal, and makes
   the NEXT theft cost more, because the auditors are already looking.

   The Living Treasury gives this its teeth: money skimmed is money the regime
   no longer has to pay the army and the apparatus. Rob the treasury and you may
   reach the fortune, but you will do it with the institutions in open revolt,
   which is exactly how a kleptocrat ends: rich, and run out of town. */
AD.skimHeat = run => (run && run.skimHeat) || 0;
AD.bumpSkim = function (run, n) {
  run.skimHeat = AD.clamp(AD.skimHeat(run) + n, 0, 20);
  return run.skimHeat;
};

AD.SKIM_METHODS = [
  { id: 'nobid', label: 'A No-Bid Contract', take: 2, heat: 1, needsAuth: 0,
    eff: { press: -4, courts: -3, congress: -2 },
    blurb: 'Steer a federal contract to a company you quietly own. Small, deniable, repeatable.',
    line: 'A contract is awarded without a competition, to a bidder of one. It is clean money by the time it reaches you.' },
  { id: 'procure', label: 'Inflated Procurement', take: 4, heat: 2, needsAuth: 25,
    eff: { press: -6, courts: -5, congress: -4, street: -2 },
    blurb: 'Buy the government something at triple the price and keep the difference. The invoice is a work of art.',
    line: 'The government pays three times over for something it half needed, and the overpayment finds its way home.' },
  { id: 'reserve', label: 'The Strategic Freedom Reserve', take: 8, heat: 3, needsAuth: 40,
    eff: { courts: -12, press: -12, congress: -10, street: -9, base: 3, auth: 4 },
    blurb: 'Declare a national emergency, never say which, and route the whole appropriation into a reserve only you can sign against.',
    line: 'An emergency nobody can name empties into an account only you control. The base cheers the strength; everyone else reaches for a subpoena.' }
];
AD.skimMethod = id => AD.SKIM_METHODS.find(m => m.id === id);

AD.skimAvailable = function (run, method) {
  if (!method) return { ok: false, reason: 'No such method.' };
  if (method.needsAuth && run.authority < method.needsAuth)
    return { ok: false, reason: 'Requires Authority ' + method.needsAuth + '.' };
  if (AD.purse(run) < method.take)
    return { ok: false, reason: 'The Treasury does not hold that much.' };
  return { ok: true };
};

/* Each accumulated point of skim heat makes the next theft's institutional
   damage this much worse, so the tenth skim is a bloodbath even if the first
   was quiet. */
AD.SKIM_COST_RAMP = 0.06;

AD.doSkim = function (run, methodId) {
  const method = AD.skimMethod(methodId);
  const avail = AD.skimAvailable(run, method);
  if (!avail.ok) return avail;
  run.stats = run.stats || {};
  // the transfer: public purse -> personal fortune
  AD.movePurse(run, -method.take);
  run.cash = Math.round((run.cash + method.take) * 100) / 100;
  if (run.cash > (run.stats.peakCash || 0)) run.stats.peakCash = run.cash;
  // the institutional cost is read off the trail BEFORE this skim thickens it
  const mult = 1 + AD.skimHeat(run) * AD.SKIM_COST_RAMP;
  AD.bumpSkim(run, method.heat);
  // The money trail feeds the standing scandal (cay heat) point for point, so a
  // few big thefts push it toward the finale that can end the run outright: a
  // President can survive taking the country apart and be finished by an audit.
  if (AD.bumpHeat) AD.bumpHeat(run, method.heat);
  const eff = {};
  Object.keys(method.eff).forEach(k => {
    eff[k] = (k === 'base' || k === 'auth' || method.eff[k] > 0) ? method.eff[k] : Math.round(method.eff[k] * mult);
  });
  eff.fun = 4;                                                     // getting away with it is a thrill
  const deltas = AD.applySenateEffect(run, eff);
  run.stats.skims = (run.stats.skims || 0) + 1;
  run.stats.skimmed = Math.round(((run.stats.skimmed || 0) + method.take) * 100) / 100;
  run.stats.diverted = 1;                                         // parity with the old one-time flag
  return { ok: true, method, take: method.take, deltas, skimHeat: AD.skimHeat(run) };
};

/* ============================================================
   CAMPAIGN FINANCE, the War Chest, filled.

   The War Chest pays for the political machine (the influence PACs, the
   primaries, the re-election ad blitz), and this is where it fills. Three ways
   up the ladder from clean to captured: the base gives in fives, a ballroom
   gives at fifty thousand a plate, and a single billionaire gives more than the
   rest of the quarter combined, against a favour that is now owed. The favour is
   the string: while it stands it bleeds the press and courts every month (see
   AD.exposure), and it is cleared only by doing what the donor paid for. */
AD.CAMPAIGN_ACTIONS = [
  { id: 'smalldollar', kind: 'raise', label: 'Small-Dollar Drive',
    blurb: 'Ask the base for five dollars each. Clean money, and there is a great deal of it when they love you.',
    line: 'The email goes out, the base answers in fives and tens, and it adds up to a number the consultants did not believe.' },
  { id: 'fundraiser', kind: 'raise', label: 'Hold a Fundraiser', take: 2, needBase: 40, eff: { press: -3, base: 1 },
    blurb: 'A rubber-chicken dinner at fifty thousand a plate. The photographs are the price.',
    line: 'A ballroom of people who want things writes cheques for the privilege of being seen writing them.' },
  { id: 'megadonor', kind: 'raise', label: 'Court a Megadonor', take: 6, favour: 1, eff: { press: -4, courts: -3, base: 1 },
    blurb: 'One billionaire, one wire, one unspoken understanding. The chest swells and a favour is now owed.',
    line: 'A single wire clears, larger than the rest of the quarter combined. Nothing is written down. Everything is understood.' },
  { id: 'bidding', kind: 'repay', label: 'Do the Donors’ Bidding', eff: { press: 4, courts: 3, base: -4, street: -3 },
    blurb: 'Clear one favour by handing a donor exactly the policy he paid for. The optics improve; the people notice.',
    line: 'A regulation quietly dies, a contract quietly lands, and one wealthy man stops returning your calls because he no longer needs to.' }
];
AD.campaignAction = id => AD.CAMPAIGN_ACTIONS.find(a => a.id === id);

AD.campaignAvailable = function (run, a) {
  if (!a) return { ok: false, reason: 'No such move.' };
  if (a.kind === 'repay') return AD.donorFavours(run) > 0 ? { ok: true } : { ok: false, reason: 'You owe no favours.' };
  if (a.needBase && (run.meters.base || 0) < a.needBase) return { ok: false, reason: 'The base is too cold to give.' };
  return { ok: true };
};

AD.campaignTake = function (run, a) {
  // the small-dollar drive scales with the warmth of the base; the rest are flat
  if (a.id === 'smalldollar') return Math.max(1, Math.round((run.meters.base || 50) / 22));
  return a.take || 0;
};

AD.doCampaign = function (run, id) {
  const a = AD.campaignAction(id);
  const avail = AD.campaignAvailable(run, a);
  if (!avail.ok) return avail;
  run.stats = run.stats || {};
  if (a.kind === 'repay') {
    run.donorFavours = Math.max(0, AD.donorFavours(run) - 1);
    const deltas = AD.applySenateEffect(run, Object.assign({ fun: 1 }, a.eff));
    run.stats.favoursDone = (run.stats.favoursDone || 0) + 1;
    return { ok: true, action: a, deltas, line: a.line, repaid: true };
  }
  const take = AD.campaignTake(run, a);
  AD.moveWarChest(run, take);
  if (a.favour) run.donorFavours = AD.donorFavours(run) + a.favour;
  const deltas = a.eff ? AD.applySenateEffect(run, Object.assign({ fun: 2 }, a.eff)) : {};
  deltas.warChest = take;
  run.stats.raised = Math.round(((run.stats.raised || 0) + take) * 100) / 100;
  return { ok: true, action: a, take, deltas, line: a.line, favour: a.favour || 0 };
};

/* Monthly tick: income, drips, settlements, exposure. From Engine.advance(). */
AD.corruptionTick = function (run) {
  // The skim's paper trail cools slowly once you stop stealing, ~1 point every
  // few months. Runs BEFORE the no-holdings early return, so a pure skimmer who
  // owns nothing still recovers over time.
  if (run.skimHeat > 0 && AD.rng() < 0.22) run.skimHeat = Math.max(0, run.skimHeat - 1);
  const p = AD.passives(run);
  const out = { cash: 0, deltas: {}, settled: false };
  const hasBoard = AD.boardMembers && AD.boardMembers(run).length;
  if ((!run.assets || !run.assets.length) && !hasBoard) return out;

  // Board dues land first, so they show up in the same monthly line as the
  // rest of the private income.
  if (AD.boardTick) {
    const bi = AD.boardTick(run);
    if (bi) out.cash += bi;
  }

  const exp = AD.exposure(run);
  if (exp) {
    ['press', 'courts'].forEach(k => {
      if (run.locked[k]) return;
      const before = run.meters[k];
      run.meters[k] = AD.clamp(before - exp, 0, 100);
      if (run.meters[k] !== before) out.deltas[k] = (out.deltas[k] || 0) + (run.meters[k] - before);
    });
  }

  if (p.income) {
    run.cash = Math.round((run.cash + p.income) * 100) / 100;
    out.cash += p.income;
  }
  if (p.settleChance && AD.rng() < p.settleChance) {
    const amt = p.settleCash || 0.3;
    run.cash = Math.round((run.cash + amt) * 100) / 100;
    out.cash += amt; out.settled = true;
    if (!run.locked.press) {
      const before = run.meters.press;
      run.meters.press = AD.clamp(before - 3, 0, 100);
      if (run.meters.press !== before) out.deltas.press = run.meters.press - before;
    }
  }
  AD.FKEYS.forEach(k => {
    const v = p[k + 'PerMonth'];
    if (!v || run.locked[k]) return;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before + v, 0, 100);
    if (run.meters[k] !== before) out.deltas[k] = (out.deltas[k] || 0) + (run.meters[k] - before);
  });
  if (p.pressFloor && !run.locked.press && run.meters.press < p.pressFloor) {
    run.meters.press = p.pressFloor;
  }
  if (run.cash > (run.stats.peakCash || 0)) run.stats.peakCash = run.cash;
  return out;
};

/* Applied to every choice's effects, from Engine.choose(). */
AD.applyPassivesToEffect = function (run, eff) {
  if (!run.assets || !run.assets.length) return eff;
  const p = AD.passives(run);
  AD.FKEYS.forEach(k => {
    const v = eff[k];
    if (!v) return;
    if (v < 0 && p[k + 'Shield']) eff[k] = Math.ceil(v * (1 - p[k + 'Shield']));
    else if (v > 0 && p[k + 'Gain']) eff[k] = Math.round(v * (1 + p[k + 'Gain']));
  });
  return eff;
};

/* ============================================================
   THE STRATEGIC FREEDOM RESERVE, the one-time heist.

   The single most lucrative and most dangerous thing you can do with
   the office: go on television, declare a national emergency about a
   threat you never quite specify, and route the appropriation into a
   discretionary reserve only you can sign against. Five billion
   dollars, gone before anyone can name the emergency it was for.

   Once per game. The base barely notices, an emergency is an
   emergency, but the courts, the press, Congress and the street all
   go to war over it at once, and you will spend months digging out.
   ============================================================ */
AD.canDivert = run => !(run.flags && run.flags.divertedFunds);

AD.DIVERT_AMOUNT = 5;   // $B added to the fortune

AD.divertFunds = function (run) {
  if (!AD.canDivert(run)) return { ok: false, reason: 'You can only do that once.' };
  run.flags = run.flags || {};
  run.flags.divertedFunds = true;
  // The institutions go to war; the base shrugs. Routed through the shared
  // applier so any shields you own blunt the blow, a reason to build the
  // machine before you pull the lever.
  const deltas = AD.applySenateEffect(run, {
    courts: -20, press: -20, congress: -18, street: -16, base: 3, auth: 5, fun: 6
  });
  run.cash = Math.round((run.cash + AD.DIVERT_AMOUNT) * 100) / 100;
  if (run.cash > (run.stats.peakCash || 0)) run.stats.peakCash = run.cash;
  run.stats = run.stats || {}; run.stats.diverted = 1;
  return { ok: true, deltas, amount: AD.DIVERT_AMOUNT };
};
