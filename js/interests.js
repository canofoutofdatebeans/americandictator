/* ============================================================
   AMERICAN DICTATOR, interests.js
   THE ROTATING PORTFOLIO.

   corruption.js holds the seventeen structural holdings, the ones that
   buy leverage and never go away. This file is the OTHER kind of money:
   a hundred-odd deals that come and go, the opportunistic stuff a
   presidency of this description actually generates.

   Four new families:
     hospitality  towers and resorts in places nobody else will build
     appointments relatives and personal lawyers, given titles
     licensing    the name, rented out, on anything
     ventures     coins, cards, offerings, and one aircraft

   ROTATION. Only a slice of the pool is on the market at a time. The
   window turns over every AD.INTEREST_REFRESH_MONTHS months, and which
   deals are offered is seeded off the run seed plus the window index,
   so it is deterministic per run (a shared seed shows a friend the same
   opportunities) but never the same twice in a row.

   Everything here is fiction. The satire is aimed at a STYLE of
   self-dealing, not at any named living person, and every counterparty,
   country deal and family member is invented.
   ============================================================ */

AD.INTEREST_REFRESH_MONTHS = 2;   // the market turns over this often
AD.INTEREST_SLOTS = 8;            // how many rotating deals are offered at once

/* Extra shop categories, appended to the structural four. */
AD.ASSET_CATS.push(
  { id: 'hospitality', name: 'Hospitality', icon: '\u{1F3E8}', blurb: 'A tower goes up. Whose money went into it is a question for later, and for somebody else.' },
  { id: 'appointments', name: 'Appointments', icon: '\u{1F454}', blurb: 'Nepotism is when they do it. This is a talent pipeline.' },
  { id: 'licensing',   name: 'Licensing',    icon: '\u{270D}\u{FE0F}', blurb: 'You are not selling anything. You are renting out the name, which costs nothing to make more of.' },
  { id: 'ventures',    name: 'Ventures',     icon: '\u{1FA99}', blurb: 'Every one of these is a serious financial product and every one of them is also a joke.' }
);

/* Compact spec: [id, cat, name, cost, blurb, effect, passive, buy, flavour]
   Costs are in $B, same scale as the structural holdings. */
const D = [

/* ---------------- HOSPITALITY: build it where nobody else will ---------------- */
['tower-volkovia','hospitality','Volkov Tower, Moscow',1.4,
 'Break ground on a tower in a capital under sanction.',
 'Income +$70M/mo. Press -12% damage.',
 {income:0.07,pressShield:0.12},{press:-8,congress:-6,courts:-5},
 'The financing is described as "domestic." Four of the five banks involved share a single postal address in a city with no river.'],
['tower-gulf','hospitality','The Gulf Residences',1.1,
 'A branded resort funded entirely by a sovereign wealth fund.',
 'Income +$60M/mo.',{income:0.06},{press:-5,courts:-4},
 'A fund with no shareholders and one signatory buys eleven floors off-plan. Nobody involved has seen the site.'],
['tower-warzone','hospitality','The Riviera Project',1.8,
 'A beachfront development on a coastline that is currently a war.',
 'Income +$90M/mo. Street -8% damage.',{income:0.09,streetShield:0.08},{press:-11,street:-8,courts:-6},
 'You unveil a rendering of a luxury marina where a displacement camp currently is. The rendering includes a fountain.'],
['tower-golf-scotland','hospitality','The Links at Craigmoor',0.75,
 'A championship course on protected dunes, permits pending forever.',
 'Income +$35M/mo. Boredometer improves.',{income:0.035},{press:-4,courts:-3},
 'An environmental review concludes the dunes are irreplaceable. Construction begins the following Tuesday.'],
['tower-capital','hospitality','The Old Post Office Hotel',0.95,
 'Lease a federal landmark from the government you run.',
 'Income +$55M/mo. Courts -10% damage.',{income:0.055,courtsShield:0.10},{press:-7,courts:-7,congress:-5},
 'You are simultaneously the tenant and the landlord. The lease forbids exactly this, in a clause your own agency declines to read aloud.'],
['tower-belgrade','hospitality','The Balkan Grand',0.85,
 'A hotel on a bombed ministry site, offered at a nominal price.',
 'Income +$45M/mo.',{income:0.045},{press:-6,courts:-4},
 'A ruined ministry is handed over for a symbolic sum on a ninety-nine-year lease. The symbolism is not lost on anyone.'],
['tower-jakarta','hospitality','Two Towers, Jakarta',0.9,
 'Twin towers with a state-backed partner and a new toll road.',
 'Income +$50M/mo.',{income:0.05},{press:-5,congress:-4},
 'The government builds a motorway to the site at public expense. Officially it serves a village of two hundred.'],
['tower-dubai','hospitality','The Vertical City',1.6,
 'The tallest branded residence in the hemisphere.',
 'Income +$85M/mo. Base gains +6%.',{income:0.085,baseGain:0.06},{press:-6,courts:-4},
 'Two hundred and eleven floors, of which eleven are structurally necessary. The rest are, in the brochure, "aspirational."'],
['tower-arctic','hospitality','Northern Lights Lodge',0.65,
 'A luxury lodge on newly accessible tundra.',
 'Income +$30M/mo.',{income:0.03},{press:-4,street:-3},
 'The permafrost is melting, which is described in the prospectus as "improved site access."'],
['tower-casino-riverboat','hospitality','The Liberty Riverboat',0.55,
 'A floating casino in a state that just legalised floating casinos.',
 'Income +$28M/mo. +1 Base every month.',{income:0.028,basePerMonth:1},{press:-4,congress:-3},
 'The legislation passed in eleven days. Three legislators later join the board, which they describe as a coincidence and a promotion.'],

/* ---------------- APPOINTMENTS: the talent pipeline ---------------- */
['appt-son-envoy','appointments','Trent Jr., Special Envoy',0.3,
 'Make the boy a special envoy. To everywhere. With a plane.',
 'Income +$50M/mo. Congress -10% damage.',{income:0.05,congressShield:0.10},{press:-7,congress:-6,courts:-4},
 'He has no security clearance, no brief and no language. He returns from every trip with a memorandum of understanding and a watch.'],
['appt-daughter-advisor','appointments','Ivy, Senior Adviser',0.25,
 'An unpaid West Wing role, which is the expensive kind.',
 'Income +$45M/mo. Press -10% damage.',{income:0.045,pressShield:0.10},{press:-6,congress:-5,courts:-3},
 'The salary is zero, which is emphasised constantly. Eleven trademarks are granted in a foreign market that same quarter.'],
['appt-inlaw-peace','appointments','Chaz, Peace Portfolio',0.35,
 'Hand a relative the entire Middle East. And the opioid crisis. And infrastructure.',
 'Income +$60M/mo. Courts -8% damage.',{income:0.06,courtsShield:0.08},{press:-8,congress:-6,courts:-5},
 'A property developer in his thirties is given four intractable problems at once, on the theory that nobody has tried a fresh pair of eyes.'],
['appt-lawyer-ag','appointments','Sy Feltman, Acting AG',0.45,
 'Install your personal lawyer as the nation’s lawyer.',
 'Courts -18% damage. Income +$40M/mo.',{courtsShield:0.18,income:0.04},{press:-9,courts:-10,congress:-7},
 'The man who wrote your non-disclosure agreements now decides which investigations proceed. He has recused himself from nothing.'],
['appt-lawyer-counsel','appointments','The White House Counsel',0.3,
 'Not the government’s lawyer. Yours, with the government’s letterhead.',
 'Courts -12% damage.',{courtsShield:0.12},{press:-5,courts:-6},
 'He explains, in writing, that the office cannot have a conflict of interest with itself. The memo is nine pages and cites nothing.'],
['appt-fixer','appointments','The Fixer, Deputy Chief',0.2,
 'The man who handles things gets a badge and an office.',
 'Income +$35M/mo. Settlement luck up.',{income:0.035,settleChance:0.10,settleCash:0.3},{press:-5,courts:-4},
 'He now has a government email address, which he does not use, and a government phone, which he uses for everything.'],
['appt-doctor','appointments','Physician to the President',0.15,
 'A doctor who describes your health in superlatives.',
 'Base gains +8%.',{baseGain:0.08},{press:-4,courts:-2},
 'The letter describes your health as "astonishing" and was, on later examination, dictated by the patient.'],
['appt-nephew-ambassador','appointments','A Nephew in Europe',0.4,
 'An ambassadorship for a relative who has been there on holiday.',
 'Income +$50M/mo.',{income:0.05},{press:-6,congress:-5},
 'The confirmation hearing runs eleven minutes. He is asked to name the capital and does so, correctly, on the second attempt.'],
['appt-donor-postmaster','appointments','A Donor at the Post',0.35,
 'Put a major donor in charge of the mail. All of it.',
 'Press -10% damage. +1 Congress every month.',{pressShield:0.10,congressPerMonth:1},{press:-7,street:-5,courts:-3},
 'Nine hundred sorting machines are decommissioned for efficiency. Efficiency is not subsequently observed.'],
['appt-family-trust','appointments','The Blind Trust',0.5,
 'A trust run by your own children, which is legally blind.',
 'All damage -6%. Income +$40M/mo.',{allShield:0.06,income:0.04},{press:-8,courts:-6,congress:-4},
 'The trustees are your children. The trust is described as blind. Everyone involved can see perfectly.'],

/* ---------------- LICENSING: rent the name ---------------- */
['lic-steaks','licensing','The Steaks',0.1,'Put the name on a mail-order meat business.',
 'Income +$15M/mo. The base eats it up.',{income:0.015},{press:-3,base:2,street:-1},
 'They are sold through a catalogue retailer for two months and then quietly are not.'],
['lic-water','licensing','The Bottled Water',0.08,'A branded water, served exclusively at your own properties.',
 'Income +$12M/mo. Served at your own properties.',{income:0.012},{press:-2,base:1,courts:-1},
 'It is the same water. The bottle costs more than the water and the label costs more than the bottle.'],
['lic-bible','licensing','The Patriot Edition',0.12,'A bible with the founding documents bound in the back.',
 'Income +$20M/mo. +1 Base every month.',{income:0.02,basePerMonth:1},{press:-5,street:-3},
 'It retails at fifty-nine dollars and ninety-nine cents. Two separate denominations issue statements. Sales double.'],
['lic-sneakers','licensing','The Gold High-Tops',0.09,'A limited sneaker drop announced at a trade show.',
 'Income +$14M/mo. A genuine culture-cross.',{income:0.014},{press:-3,base:3,street:1},
 'One thousand pairs, gold, announced to a crowd that boos and then buys every pair inside two hours.'],
['lic-cologne','licensing','The Fragrance',0.07,'A cologne named after a legal concept.',
 'Income +$10M/mo.',{income:0.01},{press:-2,base:1,congress:-1},
 'The notes are listed as leather, cedar and "victory." It smells, according to every review, of a rental car.'],
['lic-university','licensing','The Leadership Institute',0.3,'An unaccredited school selling seminars.',
 'Income +$40M/mo.',{income:0.04},{press:-7,courts:-6},
 'Attendees pay thirty-five thousand dollars to be photographed beside a cardboard version of you. The lawsuit takes six years.'],
['lic-guitar','licensing','The Signature Guitar',0.06,'A commemorative instrument in three finishes.',
 'Income +$9M/mo. Rally merch.',{income:0.009},{press:-2,base:2,street:1},
 'It is playable, technically, in the way that a shoe is technically a hammer.'],
['lic-watches','licensing','The Timepiece Collection',0.11,'A gold watch with your signature on the face.',
 'Income +$18M/mo.',{income:0.018},{press:-3,base:1,courts:-2},
 'Priced at a hundred thousand dollars. The movement inside costs eleven.'],
['lic-cards','licensing','The Digital Trading Cards',0.05,'Collectible cards of you as an astronaut, a cowboy, a superhero.',
 'Income +$8M/mo. The base cannot get enough, and neither can he.',{income:0.008},{press:-4,base:3},
 'Forty-five thousand of them sell in twelve hours. In one you are a fighter pilot. In one you are, inexplicably, a chef.',6],
['lic-anthem','licensing','The Patriot Anthem',0.04,'A recorded anthem sold as a download.',
 'Income +$6M/mo. +1 Base every month.',{income:0.006,basePerMonth:1},{press:-3,base:1,street:1},
 'It charts. It is performed by a choir of people awaiting sentencing, which the sleeve notes describe as "moving."'],

/* ---------------- VENTURES: serious financial products ---------------- */
['ven-coin','ventures','$PREZ',0.4,'Launch a personal memecoin the week before inauguration.',
 'Income +$70M/mo. Massive exposure.',{income:0.07},{press:-9,courts:-8,congress:-6},
 'Eighty per cent of the supply is held by entities you control. It moons, craters and moons again before the swearing-in.'],
['ven-coin2','ventures','$PREZ2',0.35,'A second coin, for the spouse, launched two days later.',
 'Income +$55M/mo.',{income:0.055},{press:-8,courts:-7},
 'Nobody can explain why there are two. The second one briefly outperforms the first, which is treated as a rebuke.'],
['ven-stablecoin','ventures','The Family Stablecoin',0.6,'A dollar-pegged token issued by a company you part-own.',
 'Income +$80M/mo. Courts -10% damage.',{income:0.08,courtsShield:0.10},{press:-9,congress:-8,courts:-6},
 'A sovereign fund buys two billion dollars of it in a single transaction, for reasons the prospectus does not require it to state.'],
['ven-spac','ventures','The Media SPAC',0.7,'Take your own platform public through a blank-cheque vehicle.',
 'Income +$75M/mo. Press -12% damage.',{income:0.075,pressShield:0.12},{press:-8,courts:-7,congress:-5},
 'The company has fewer users than a mid-sized university and a valuation larger than an airline.'],
['ven-jet','ventures','The Gifted Aircraft',0.9,
 'Accept a wide-body jet as a gift from a foreign government.',
 'Income +$40M/mo. All damage -5%.',{income:0.04,allShield:0.05},{press:-11,congress:-9,courts:-8},
 'It is worth four hundred million dollars. It is described as a donation to a library that does not yet exist, and it will fly you personally in the meantime.'],
['ven-fund','ventures','The Sovereign Co-Fund',1.2,
 'A joint investment vehicle with a state that has business before you.',
 'Income +$95M/mo.',{income:0.095},{press:-9,congress:-8,courts:-7},
 'You put in nothing and take two per cent of everything. The partner describes this, sincerely, as generous terms.'],
['ven-crypto-mine','ventures','The Mining Operation',0.5,
 'A crypto mine on cheap federal power in a deregulated county.',
 'Income +$60M/mo. Street -6% damage.',{income:0.06,streetShield:0.06},{press:-6,street:-5,courts:-4},
 'It draws more electricity than the county it sits in. Residential bills rise eleven per cent and the operation is declared a jobs miracle.'],
['ven-nft','ventures','The Second Card Drop',0.15,
 'Another card series, this time with a physical piece of a suit.',
 'Income +$22M/mo.',{income:0.022},{press:-4,base:2,courts:-1},
 'Each card contains a swatch allegedly cut from a suit you wore. The suit would need to have been roughly the size of a barn.'],
['ven-bank','ventures','The Friendly Bank',0.8,
 'A controlling interest in a bank that keeps lending to you.',
 'Income +$70M/mo. Settlement luck way up.',{income:0.07,settleChance:0.18,settleCash:0.5},{press:-7,congress:-7,courts:-6},
 'Its risk committee approves every application it receives from one particular borrower, which its own auditors describe as "a pattern."'],
['ven-arms','ventures','The Defence Brokerage',1.0,
 'A middleman position on every foreign weapons sale.',
 'Income +$100M/mo.',{income:0.10},{press:-10,congress:-8,courts:-7,street:-6},
 'You take a point on both ends of every deal. Both ends are, in three cases, the same country.']
];

AD.ROTATING_ASSETS = D.map(d => ({
  id: d[0], cat: d[1], name: d[2], cost: d[3], blurb: d[4], effect: d[5],
  passive: d[6], buy: d[7], flavour: '"' + d[8] + '"', fun: d[9], rotating: true
}));

/* Everything in the shop, structural + rotating. */
AD.ASSETS = AD.ASSETS.concat(AD.ROTATING_ASSETS);

/* ---------- the rotating window --------------------------------------------
   Which deals are on the market right now. Deterministic off the run seed and
   the window index, so a shared seed shows a friend the same opportunities,
   but the offer changes every couple of months. Anything already owned drops
   out and frees a slot. */
AD.interestWindow = run => Math.floor((run.month || 1) / AD.INTEREST_REFRESH_MONTHS);

AD.monthsToRefresh = function (run) {
  const per = AD.INTEREST_REFRESH_MONTHS;
  return per - ((run.month || 1) % per);
};

function winRng (seedStr) {
  let h = 2166136261;
  const s = String(seedStr);
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return function () { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}

AD.offeredInterests = function (run) {
  const pool = AD.ROTATING_ASSETS.filter(a => !AD.owns(run, a.id));
  const rng = winRng((run.seed || 'SEED') + ':' + AD.interestWindow(run));
  const shuffled = pool.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const t = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = t;
  }
  return shuffled.slice(0, AD.INTEREST_SLOTS);
};
