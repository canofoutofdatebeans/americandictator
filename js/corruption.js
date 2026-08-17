/* ============================================================
   AMERICAN DICTATOR — corruption.js
   THE PRIVATE INTERESTS SCREEN

   Cash used to be a passive number. This turns it into the game's
   second progression track, running alongside Authority.

   DESIGN
   ------
   Assets never grant Authority. That is deliberate: the Authority
   soft cap (55) and the Pillar route are the only way to win, and
   letting money buy Authority would collapse that. What money buys
   is LEVERAGE — shields that blunt incoming damage, multipliers on
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

/* Merge every owned asset's passives into one object. */
AD.passives = function (run) {
  const p = {};
  (run.assets || []).forEach(id => {
    const a = AD.assetById(id);
    if (!a || !a.passive) return;
    Object.keys(a.passive).forEach(k => {
      if (k === 'pressFloor') p[k] = Math.max(p[k] || 0, a.passive[k]);
      else p[k] = (p[k] || 0) + a.passive[k];
    });
  });
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
  if (run.cash < a.cost) return { ok: false, reason: 'You cannot afford it.' };

  // Passives are read BEFORE the asset is added, so a holding never shields
  // its own purchase cost — you pay full price for the thing that protects you.
  const pas = AD.passives(run);

  run.cash = Math.round((run.cash - a.cost) * 100) / 100;
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
  return { ok: true, asset: a, deltas };
};

/* Monthly tick: income, drips, settlements. Called from Engine.advance(). */
AD.corruptionTick = function (run) {
  const p = AD.passives(run);
  const out = { cash: 0, deltas: {}, settled: false };
  if (!run.assets || !run.assets.length) return out;

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
