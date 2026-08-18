/* ============================================================
   AMERICAN DICTATOR — economy.js
   THE ECONOMY — tariffs and diplomacy.

   Two halves of foreign economic policy, sharing the War Room's
   fictional nations, so a country you can invade you can also
   trade-war or summit.

   TARIFFS — they feel like winning and end in tears.
     Slapping a tariff is an instant Base + Authority spike (we are
     finally getting tough) and a small customs windfall. Then, a
     couple of months later, it BACKFIRES — retaliation, boycotts,
     a price shock, a market crash — as one nasty delayed event, the
     way a war resolves into a quagmire. Before it lands you can
     RAISE it (bigger spike now, worse crash sooner) or LIFT it
     (dodge the crash, but the base sees you cave). Tariffing an ally
     hurts more than a rival; "Liberation Day" tariffs everyone at
     once for the biggest spike and the biggest crash in the game.

   DIPLOMACY — a few silly options, one grown-up one.
     Pick a fictional leader and pick your approach. The bombastic
     plays (fall in love with a strongman, call an ally "Governor",
     do the deal on the ninth green) thrill the base and appal the
     institutions; the one normal option per leader is dull, costs
     you the base, and actually works. Diplomacy moves RELATIONS,
     and good relations soften that nation's tariff backfire — the
     one thread tying the two halves together.

   Rationed to two summits a month; deterministic off the card RNG.
   ============================================================ */

AD.SUMMITS_PER_MONTH = 2;

/* Shared nation roster (ids match the War Room). `kind` sets the tariff
   backfire profile. */
AD.ECON_NATIONS = [
  { id: 'cathay',   name: 'China',            leader: 'Chairman Chen',      kind: 'rival',    blurb: 'Our biggest rival. Everything is made there.' },
  { id: 'glacia',   name: 'Iran',            leader: 'Premier Ostrov',     kind: 'rival',    blurb: 'Sanctioned, defiant, and not a friend.' },
  { id: 'rusalka',  name: 'Russia',           leader: 'President Volkov',   kind: 'strongman',blurb: 'A strong guy. Very strong. You get along.' },
  { id: 'northland',name: 'Canada',         leader: 'Prime Minister Aas', kind: 'ally',     blurb: 'A four-hundred-year ally. Rich. Polite.' },
  { id: 'baldoro',  name: 'Panama',       leader: 'President Marchetti',kind: 'ally',     blurb: 'Sunny, friendly, a lot of nice hotels.' },
  { id: 'qadira',   name: 'Qatar',            leader: 'the Emir',           kind: 'oil',      blurb: 'An ocean of oil. A very large aircraft.' },
  { id: 'hermit',   name: 'North Korea',leader: 'the Supreme Guide', kind: 'rogue',    blurb: 'Isolated, unpredictable, missiles.' },
  { id: 'penguin',  name: 'the Heard Islands',leader: 'no one',            kind: 'joke',     blurb: 'Population: penguins. GDP: fish.' }
];
AD.econNation = id => AD.ECON_NATIONS.find(n => n.id === id);

/* Tariff backfire by nation kind: the instant hit is always base-positive; the
   delayed backfire varies. */
AD.TARIFF_PROFILE = {
  rival:     { impose: { base: 7, press: -3, courts: -2, cash: 0.2, auth: 4 },
               backfire: { street: -8, base: -6, congress: -3, cash: -0.3 },
               hit: 'surgical retaliation on four farm states you won; the soybeans rot in the silos.' },
  oil:       { impose: { base: 6, press: -3, cash: 0.2, auth: 4 },
               backfire: { street: -9, base: -8, cash: -0.4 },
               hit: 'a price shock; a gallon of gas hits nine dollars and the base is furious in a way it cannot articulate.' },
  ally:      { impose: { base: 8, press: -4, courts: -2, cash: 0.1, auth: 4 },
               backfire: { street: -6, base: -9, press: -4, cash: -0.3 },
               hit: 'a voluntary consumer boycott that no negotiation can end; their citizens simply stop buying American, for years.' },
  strongman: { impose: { base: 5, press: -2, cash: 0.2, auth: 3 },
               backfire: { base: -3, cash: -0.2 },
               hit: 'a shrug and a warm phone call; he does not retaliate, which is somehow worse for you.' },
  rogue:     { impose: { base: 6, press: -3, courts: -1, auth: 4 },
               backfire: { street: -3, base: -2 },
               hit: 'almost nothing; they barely traded with you to begin with, and the base never finds out.' },
  joke:      { impose: { base: 4, press: -1, auth: 2 },
               backfire: {},
               hit: 'no response whatsoever; the penguins issue no statement, and the base cheers anyway.' }
};

AD.ensureEconomy = function (run) {
  if (!run.tariffs) run.tariffs = [];
  if (!run.relations) run.relations = {};
  return run;
};
AD.relations = (run, id) => (run.relations && run.relations[id] !== undefined) ? run.relations[id] : 50;
AD.tariffOn = (run, id) => (run.tariffs || []).find(t => t.id === id);

function econRng (seed) {
  let s = (AD.Seed ? AD.Seed.hash(String(seed)) : 0x9e3779b9) || 1;
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ---------- tariffs ---------- */
AD.imposeTariff = function (run, id) {
  const n = AD.econNation(id);
  if (!n || AD.tariffOn(run, id)) return { ok: false, reason: 'Already tariffed.' };
  AD.ensureEconomy(run);
  const prof = AD.TARIFF_PROFILE[n.kind];
  const rng = econRng((run.seed || 'X') + id + run.month);
  const eff = Object.assign({}, prof.impose);
  const deltas = AD.applySenateEffect(run, eff);
  run.tariffs.push({ id, rate: 1, backfireAt: run.month + 2 + Math.floor(rng() * 2), fired: false });
  run.stats = run.stats || {}; run.stats.tariffs = (run.stats.tariffs || 0) + 1;
  return { ok: true, nation: n, deltas, action: 'impose' };
};

AD.raiseTariff = function (run, id) {
  const t = AD.tariffOn(run, id); const n = AD.econNation(id);
  if (!t || t.fired) return { ok: false, reason: 'Cannot raise.' };
  t.rate++;
  const rng = econRng((run.seed || 'X') + id + 'r' + run.month);
  t.backfireAt = run.month + 1 + Math.floor(rng() * 1);   // sooner
  const deltas = AD.applySenateEffect(run, { base: 6, press: -3, courts: -2, auth: 3 });
  return { ok: true, nation: n, deltas, action: 'raise' };
};

AD.liftTariff = function (run, id) {
  const t = AD.tariffOn(run, id); const n = AD.econNation(id);
  if (!t) return { ok: false, reason: 'No tariff.' };
  run.tariffs = run.tariffs.filter(x => x.id !== id);
  // Chickening out before the crash costs face; lifting a spent one is a mild win.
  const deltas = t.fired
    ? AD.applySenateEffect(run, { press: 3, street: 2 })
    : AD.applySenateEffect(run, { base: -6, press: 2, congress: 2 });
  return { ok: true, nation: n, deltas, action: 'lift', caved: !t.fired };
};

/* Liberation Day: tariff every un-tariffed nation at once for the biggest spike
   and — when they all backfire together — the biggest crash in the game. */
AD.liberationDay = function (run) {
  AD.ensureEconomy(run);
  const targets = AD.ECON_NATIONS.filter(n => !AD.tariffOn(run, n.id));
  if (!targets.length) return { ok: false, reason: 'Everyone is already tariffed.' };
  const rng = econRng((run.seed || 'X') + 'libday' + run.month);
  targets.forEach(n => run.tariffs.push({ id: n.id, rate: 1, backfireAt: run.month + 2 + Math.floor(rng() * 2), fired: false, libday: true }));
  run.stats = run.stats || {}; run.stats.tariffs = (run.stats.tariffs || 0) + targets.length;
  run.flags = run.flags || {}; run.flags.liberationDay = true;
  const deltas = AD.applySenateEffect(run, { base: 14, press: -6, courts: -4, congress: -4, cash: 0.4, auth: 6 });
  return { ok: true, count: targets.length, deltas };
};

/* Monthly: mature tariffs backfire once, softened by good relations. Called
   from Engine.advance(). Returns any backfires so the turn loop can front-page
   the biggest one. */
AD.economyTick = function (run) {
  const out = { backfires: [] };
  if (!run.tariffs || !run.tariffs.length) return out;
  run.tariffs.forEach(t => {
    if (t.fired || run.month < t.backfireAt) return;
    const n = AD.econNation(t.id);
    const prof = AD.TARIFF_PROFILE[n.kind];
    // relations soften the retaliation; a raised tariff hits harder
    const rel = AD.relations(run, t.id);
    const relMult = AD.clamp(1.3 - (rel / 100) * 0.6, 0.7, 1.3);
    const rateMult = 1 + (t.rate - 1) * 0.35;
    const eff = {};
    Object.keys(prof.backfire).forEach(k => {
      eff[k] = (k === 'cash') ? Math.round(prof.backfire[k] * relMult * rateMult * 100) / 100
                              : Math.round(prof.backfire[k] * relMult * rateMult);
    });
    const deltas = AD.applySenateEffect(run, eff);
    t.fired = true;
    out.backfires.push({ nation: n, deltas, libday: !!t.libday,
      hit: prof.hit, res: 'The tariff on ' + n.name + ' has backfired: ' + prof.hit });
  });
  // when several backfire the same month, that IS the market crash
  out.crash = out.backfires.length >= 3;
  return out;
};

/* ---------- diplomacy ---------- */
/* Each leader: a few silly (Trump-voice) approaches and one normal one.
   `rel` moves relations with that nation. Effects go through the shared applier. */
AD.DIPLOMACY = {
  cathay: [
    { label: 'Praise his strength. Concede on everything.', silly: true, eff: { base: 4, press: -3, courts: -2 }, rel: 10,
      res: 'He is delighted. Your negotiators learn what you gave away by reading the China newspapers.' },
    { label: 'Threaten fire and fury, live on TV.', silly: true, eff: { base: 8, street: -4, press: -3, cash: -0.2 }, rel: -15,
      res: 'Markets wobble, the base roars, and precisely nothing is resolved. Everything is simply louder now.' },
    { label: 'Do the trade deal on the ninth green.', silly: true, eff: { base: 3, cash: 0.3, courts: -3 }, rel: 6,
      res: 'A framework is agreed between the sand trap and the pin. Nobody can subsequently locate the paperwork.' },
    { label: 'Send the trade team to negotiate a real, dull agreement.', normal: true, eff: { base: -4, press: 6, congress: 5 }, rel: 6,
      res: 'Forty pages, tariffs down four per cent, no photo op. The best deal of your term. It trends for nine minutes.' }
  ],
  rusalka: [
    { label: 'Tell him you fell in love.', silly: true, eff: { base: 5, press: -4, courts: -2 }, rel: 12,
      res: 'The letters are called beautiful. On inspection they are competent form letters. The romance is genuine and one-sided.' },
    { label: 'Believe him over your own intelligence agencies.', silly: true, eff: { base: 6, congress: -5, street: -4, press: -4 }, rel: 15,
      res: 'You side with a foreign strongman against your own services, at a podium, on camera. It is quoted for a decade.' },
    { label: 'Ask him, quietly, about the guest book.', silly: true, eff: { base: 3, cayHeat: -2 }, rel: -8,
      res: 'He laughs. It is the only time anyone makes Saint Ambrose smaller by mentioning it.' },
    { label: 'A cautious, verified arms agreement.', normal: true, eff: { base: -5, press: 7, congress: 5 }, rel: 6,
      res: 'Trust, but verify. Bipartisan, boring, and it outlives your presidency — which nothing else with his name near it does.' }
  ],
  northland: [
    { label: 'Call him Governor. Float annexation.', silly: true, eff: { base: 6, press: -4, street: -3 }, rel: -18,
      res: 'Their politics realigns around not being annexed. A party fourteen points behind wins outright, campaigning entirely on you.' },
    { label: 'Offer to buy their autonomous territory.', silly: true, eff: { base: 4, press: -3 }, rel: -10,
      res: 'The Prime Minister calls it absurd, in English, on camera. You call her nasty. A four-century alliance debates it in parliament.' },
    { label: 'Reaffirm the alliance and mean it.', normal: true, eff: { base: -4, congress: 6, press: 5, street: 4 }, rel: 12,
      res: 'A joint statement, a handshake, a functioning alliance. The least interesting thing you do all month.' }
  ],
  glacia: [
    { label: 'Envy his palace. Admire his lack of elections.', silly: true, eff: { base: 3, press: -3, congress: -2 }, rel: 8,
      res: 'He gives you a tour. You are visibly, publicly envious of a man who never has to campaign. Everyone notices.' },
    { label: 'Match his military parade with a bigger one.', silly: true, eff: { base: 7, congress: -4, courts: -3, street: -2, cash: -0.4 }, rel: -6,
      res: 'Tanks the avenue cannot bear, down the avenue. The photographs travel further than any policy you sign.' },
    { label: 'Quiet back-channel de-escalation.', normal: true, eff: { base: -4, press: 6, courts: 4 }, rel: 8,
      res: 'Two envoys in a neutral capital lower the temperature by a degree. Nobody has ever clapped for a degree.' }
  ],
  qadira: [
    { label: 'Accept the gift. The very large, flying gift.', silly: true, eff: { base: 2, press: -6, courts: -6, congress: -6, cash: 0.5 }, rel: 10,
      res: 'An aircraft, unsolicited, they say. Somebody finds the email where you asked first. The word "unsolicited" becomes the story.' },
    { label: 'Golf diplomacy and a hotel deal.', silly: true, eff: { base: 3, cash: 0.4, press: -3 }, rel: 8,
      res: 'A resort is announced during the state visit. Four ethics offices open files during the toast.' },
    { label: 'A straight energy agreement, fully disclosed.', normal: true, eff: { base: -3, press: 6, congress: 4 }, rel: 6,
      res: 'Barrels for dollars, on paper, in public. The cleanest deal available and boring beyond the power of words.' }
  ],
  hermit: [
    { label: 'Meet him. No agenda. Just the photograph.', silly: true, eff: { base: 6, press: -4, courts: -2 }, rel: 12,
      res: 'You cross the border and shake his hand for the cameras. Nothing is agreed. He gets the one thing he wanted, which was the handshake.' },
    { label: 'Threaten total destruction, then send a warm note.', silly: true, eff: { base: 7, street: -3, press: -3 }, rel: -4,
      res: 'Fire and fury on Monday, a love letter on Friday. The whiplash is the policy, and it is genuinely unclear whether it is working.' },
    { label: 'Coordinate sanctions with allies. Slowly.', normal: true, eff: { base: -4, congress: 6, press: 5 }, rel: 2,
      res: 'Patient, multilateral, unglamorous pressure. It polls at nothing and works at a pace no camera can capture.' }
  ],
  baldoro: [
    { label: 'Insult their national dish at the state dinner.', silly: true, eff: { base: 4, press: -4 }, rel: -10,
      res: 'You call the signature dish overrated, at the table, to the chef. A whole incident. Their tourism board reports record American bookings anyway.' },
    { label: 'A warm, ordinary state visit.', normal: true, eff: { base: -3, press: 5, congress: 4 }, rel: 10,
      res: 'Toasts, a motorcade, a communiqué nobody reads. Diplomacy working exactly as designed, invisible as always.' }
  ],
  penguin: [
    { label: 'Formally recognise the penguins.', silly: true, eff: { base: 4, press: -2 }, rel: 6,
      res: 'The United States extends full diplomatic recognition to a colony of birds. An ambassador is, appallingly, appointed.' },
    { label: 'Leave the penguins alone.', normal: true, eff: { base: -1, press: 2 }, rel: 4,
      res: 'You decline to have a foreign policy toward penguins. It is, on reflection, the correct call.' }
  ]
};

AD.summitsLeft = run => (run.summits === undefined ? AD.SUMMITS_PER_MONTH : run.summits);

AD.doSummit = function (run, nationId, index) {
  const n = AD.econNation(nationId);
  const list = AD.DIPLOMACY[nationId];
  if (!n || !list || !list[index]) return { ok: false, reason: 'No such summit.' };
  if (AD.summitsLeft(run) <= 0) return { ok: false, reason: 'No summits left this month.' };
  AD.ensureEconomy(run);
  const a = list[index];
  run.summits = AD.summitsLeft(run) - 1;
  const eff = Object.assign({}, a.eff);
  if (eff.cayHeat && AD.bumpHeat) { AD.bumpHeat(run, eff.cayHeat); delete eff.cayHeat; }
  const deltas = AD.applySenateEffect(run, eff);
  run.relations[nationId] = AD.clamp(AD.relations(run, nationId) + (a.rel || 0), 0, 100);
  run.stats = run.stats || {}; run.stats.summits = (run.stats.summits || 0) + 1;
  return { ok: true, nation: n, approach: a, deltas };
};

/* Refill the monthly summit allowance. Called from Engine.advance(). */
AD.summitTick = function (run) { run.summits = AD.SUMMITS_PER_MONTH; };

AD.relationLabel = function (v) {
  if (v >= 75) return 'Warm';
  if (v >= 55) return 'Friendly';
  if (v >= 40) return 'Correct';
  if (v >= 22) return 'Frosty';
  return 'Hostile';
};
