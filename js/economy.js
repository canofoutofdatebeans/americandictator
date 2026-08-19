/* ============================================================
   AMERICAN DICTATOR, economy.js
   THE ECONOMY, tariffs and diplomacy.

   Two halves of foreign economic policy, sharing the War Room's
   fictional nations, so a country you can invade you can also
   trade-war or summit.

   TARIFFS, they feel like winning and end in tears.
     Slapping a tariff is an instant Base + Authority spike (we are
     finally getting tough) and a small customs windfall. Then, a
     couple of months later, it BACKFIRES, retaliation, boycotts,
     a price shock, a market crash, as one nasty delayed event, the
     way a war resolves into a quagmire. Before it lands you can
     RAISE it (bigger spike now, worse crash sooner) or LIFT it
     (dodge the crash, but the base sees you cave). Tariffing an ally
     hurts more than a rival; "Liberation Day" tariffs everyone at
     once for the biggest spike and the biggest crash in the game.

   DIPLOMACY, a few silly options, one grown-up one.
     Pick a fictional leader and pick your approach. The bombastic
     plays (fall in love with a strongman, call an ally "Governor",
     do the deal on the ninth green) thrill the base and appal the
     institutions; the one normal option per leader is dull, costs
     you the base, and actually works. Diplomacy moves RELATIONS,
     and good relations soften that nation's tariff backfire, the
     one thread tying the two halves together.

   Rationed to two summits a month; deterministic off the card RNG.
   ============================================================ */

AD.SUMMITS_PER_MONTH = 2;

/* Shared nation roster (ids match the War Room). `kind` sets the tariff
   backfire profile. */
AD.ECON_NATIONS = [
  /* The top 30 economies by GDP (the United States is you), followed by five
     signature nations kept for the running gags. Display names are real;
     every leader is a fictional stand-in. */
  { id: 'china',      name: 'China',          leader: 'Chairman Chen',        kind: 'rival',    blurb: 'Our biggest rival. Everything is made there.' },
  { id: 'germany',    name: 'Germany',        leader: 'the Chancellor',       kind: 'ally',     blurb: 'Europe’s engine. Builds the cars, pays the bills, sighs a lot.' },
  { id: 'japan',      name: 'Japan',          leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Old ally, deep pockets, immaculate manners.' },
  { id: 'india',      name: 'India',          leader: 'the Prime Minister',   kind: 'partner',  blurb: 'Enormous, rising, tariffs everything that moves.' },
  { id: 'uk',         name: 'the United Kingdom', leader: 'the Prime Minister', kind: 'ally',   blurb: 'The special relationship. Emphasis drifts year to year.' },
  { id: 'france',     name: 'France',         leader: 'the President',        kind: 'ally',     blurb: 'Proud, prickly, makes better wine than it admits you make.' },
  { id: 'italy',      name: 'Italy',          leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Charming, chaotic, forever between governments.' },
  { id: 'canada',     name: 'Canada',         leader: 'Prime Minister Aas',   kind: 'ally',     blurb: 'A four-hundred-year ally. Rich. Polite. Right there.' },
  { id: 'brazil',     name: 'Brazil',         leader: 'the President',        kind: 'partner',  blurb: 'A continent of its own, and it knows it.' },
  { id: 'russia',     name: 'Russia',         leader: 'President Volkov',     kind: 'strongman',blurb: 'A strong guy. Very strong. You get along.' },
  { id: 'mexico',     name: 'Mexico',         leader: 'the President',        kind: 'partner',  blurb: 'The neighbour, the factory floor, the campaign prop.' },
  { id: 'skorea',     name: 'South Korea',    leader: 'the President',        kind: 'ally',     blurb: 'Hosts your troops, buys your weapons, builds your phones.' },
  { id: 'australia',  name: 'Australia',      leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Loyal, distant, upside down, unbothered.' },
  { id: 'spain',      name: 'Spain',          leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Sun, ports, and a relaxed relationship with your urgency.' },
  { id: 'indonesia',  name: 'Indonesia',      leader: 'the President',        kind: 'partner',  blurb: 'Seventeen thousand islands. Nobody has counted them at you before.' },
  { id: 'netherlands',name: 'the Netherlands',leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Small, low, rich, and very good at not drowning.' },
  { id: 'turkey',     name: 'Türkiye',        leader: 'the President',        kind: 'strongman',blurb: 'Straddles two continents and one very important strait.' },
  { id: 'saudi',      name: 'Saudi Arabia',   leader: 'the Crown Prince',     kind: 'oil',      blurb: 'An ocean of oil and a very warm handshake.' },
  { id: 'switzerland',name: 'Switzerland',    leader: 'the President',        kind: 'ally',     blurb: 'Neutral, discreet, holds everyone’s money including possibly yours.' },
  { id: 'poland',     name: 'Poland',         leader: 'the President',        kind: 'ally',     blurb: 'One of the few allies genuinely glad to see you.' },
  { id: 'taiwan',     name: 'Taiwan',         leader: 'the President',        kind: 'partner',  blurb: 'Makes the chips the entire world runs on. Nervous.' },
  { id: 'belgium',    name: 'Belgium',        leader: 'the Prime Minister',   kind: 'ally',     blurb: 'The capital of Europe. Also the fries. Mostly the fries.' },
  { id: 'argentina',  name: 'Argentina',      leader: 'the President',        kind: 'partner',  blurb: 'Great steak, world-class defaults, permanent drama.' },
  { id: 'sweden',     name: 'Sweden',         leader: 'the Prime Minister',   kind: 'ally',     blurb: 'Cold, rich, calm, and impossible to rattle.' },
  { id: 'ireland',    name: 'Ireland',        leader: 'the Taoiseach',        kind: 'ally',     blurb: 'Where every American company keeps its profits and its charm.' },
  { id: 'austria',    name: 'Austria',        leader: 'the Chancellor',       kind: 'ally',     blurb: 'Landlocked, alpine, and tired of the kangaroo joke.' },
  { id: 'thailand',   name: 'Thailand',       leader: 'the Prime Minister',   kind: 'partner',  blurb: 'Beaches, exports, and relentless hospitality.' },
  { id: 'uae',        name: 'the UAE',        leader: 'the Sheikh',           kind: 'oil',      blurb: 'Towers, sovereign wealth, and air-conditioning as a way of life.' },
  { id: 'israel',     name: 'Israel',         leader: 'the Prime Minister',   kind: 'ally',     blurb: 'A close ally with a long memory and a longer wish list.' },
  { id: 'norway',     name: 'Norway',         leader: 'the Prime Minister',   kind: 'ally',     blurb: 'The world’s biggest piggy bank. Still likes fish.' },

  /* --- Beyond the top 30: kept for the running gags. --- */
  { id: 'qatar',      name: 'Qatar',          leader: 'the Emir',             kind: 'oil',      blurb: 'An ocean of gas. A very large aircraft.' },
  { id: 'nkorea',     name: 'North Korea',    leader: 'the Supreme Guide',    kind: 'rogue',    blurb: 'Isolated, unpredictable, missiles, one wanted handshake.' },
  { id: 'iran',       name: 'Iran',           leader: 'the Grand Marshal',    kind: 'rogue',    blurb: 'Sanctioned, defiant, fond of a parade.' },
  { id: 'panama',     name: 'Panama',         leader: 'President Marchetti',  kind: 'ally',     blurb: 'Sunny, friendly, and in charge of a canal you keep mentioning.' },
  { id: 'heard',      name: 'the Heard Islands', leader: 'no one',            kind: 'joke',     blurb: 'Population: penguins. GDP: fish. Tariffed anyway.' }
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
  partner:   { impose: { base: 7, press: -3, cash: 0.2, auth: 4 },
               backfire: { street: -7, base: -7, congress: -2, cash: -0.4 },
               hit: 'a supply shock \u2014 shelves thin out and prices jump, and the base feels it at the checkout weeks before it hears it on the news.' },
  joke:      { impose: { base: 4, press: -1, auth: 2 },
               backfire: {},
               hit: 'no response whatsoever; the penguins issue no statement, and the base cheers anyway.' }
};

AD.ensureEconomy = function (run) {
  if (!run.tariffs) run.tariffs = [];
  if (!run.relations) run.relations = {};
  if (typeof run.sp500 !== 'number') run.sp500 = 5000;      // pre-market saves
  if (typeof run.biz !== 'number') run.biz = 100;
  if (!run.marketHistory) run.marketHistory = [{ m: run.month - 1 || 0, sp: run.sp500, biz: run.biz }];
  return run;
};

/* Monthly: move the market. The S&P drifts up on a calm month and is dragged
   down by open tariffs, ongoing wars and a collapsing street; the President's
   own BUSINESS index is a higher-beta bet on the same market that ALSO jumps
   with his personal wealth (a good corruption month lifts the family firm). Both
   are recorded so the Economy screen can chart them. Uses a market-local rng,
   off the card stream, so a shared seed still draws identical crises. */
AD.marketTick = function (run) {
  AD.ensureEconomy(run);
  const rng = econRng((run.seed || 'X') + 'market' + run.month);
  let spPct = 0.006;                                        // gentle bull drift
  spPct -= (run.tariffs || []).filter(t => !t.fired).length * 0.006;
  spPct -= (run.wars || []).filter(w => !w.done).length * 0.012;
  spPct += (((run.meters && run.meters.street) || 50) - 50) * 0.0004;
  spPct += (rng() - 0.5) * 0.05;                            // noise / volatility
  run.sp500 = Math.max(600, Math.round(run.sp500 * (1 + spPct)));

  const cashDelta = (run.cash || 0) - (run._prevCash == null ? (run.cash || 0) : run._prevCash);
  run._prevCash = run.cash || 0;
  let bizPct = spPct * 1.5 + (rng() - 0.5) * 0.06 + AD.clamp(cashDelta * 0.03, -0.12, 0.2);
  run.biz = Math.max(5, Math.round(run.biz * (1 + bizPct) * 10) / 10);

  run.marketHistory = run.marketHistory || [];
  run.marketHistory.push({ m: run.month, sp: run.sp500, biz: run.biz });
  if (run.marketHistory.length > 60) run.marketHistory = run.marketHistory.slice(-60);
  return { sp: run.sp500, biz: run.biz };
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
  eff.fun = 2;             // a trade war is entertaining television
  const deltas = AD.applySenateEffect(run, eff);
  AD.movePurse(run, 18);   // customs revenue flows into the Treasury
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
  const deltas = AD.applySenateEffect(run, { base: 6, press: -3, courts: -2, auth: 3, fun: 3 });
  return { ok: true, nation: n, deltas, action: 'raise' };
};

AD.liftTariff = function (run, id) {
  const t = AD.tariffOn(run, id); const n = AD.econNation(id);
  if (!t) return { ok: false, reason: 'No tariff.' };
  run.tariffs = run.tariffs.filter(x => x.id !== id);
  // Chickening out before the crash costs face; lifting a spent one is a mild win.
  const deltas = t.fired
    ? AD.applySenateEffect(run, { press: 3, street: 2, fun: -2 })
    : AD.applySenateEffect(run, { base: -6, press: 2, congress: 2, fun: -2 });
  return { ok: true, nation: n, deltas, action: 'lift', caved: !t.fired };
};

/* Liberation Day: tariff every un-tariffed nation at once for the biggest spike
   and, when they all backfire together, the biggest crash in the game. */
AD.liberationDay = function (run) {
  AD.ensureEconomy(run);
  const targets = AD.ECON_NATIONS.filter(n => !AD.tariffOn(run, n.id));
  if (!targets.length) return { ok: false, reason: 'Everyone is already tariffed.' };
  const rng = econRng((run.seed || 'X') + 'libday' + run.month);
  targets.forEach(n => run.tariffs.push({ id: n.id, rate: 1, backfireAt: run.month + 2 + Math.floor(rng() * 2), fired: false, libday: true }));
  run.stats = run.stats || {}; run.stats.tariffs = (run.stats.tariffs || 0) + targets.length;
  run.flags = run.flags || {}; run.flags.liberationDay = true;
  const deltas = AD.applySenateEffect(run, { base: 14, press: -6, courts: -4, congress: -4, cash: 0.4, auth: 6, fun: 5 });
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
    AD.movePurse(run, -Math.round(35 * relMult * rateMult));   // the crash guts customs revenue
    t.fired = true;
    out.backfires.push({ nation: n, deltas, libday: !!t.libday,
      hit: prof.hit, res: 'The tariff on ' + n.name + ' has backfired: ' + prof.hit });
  });
  // when several backfire the same month, that IS the market crash
  out.crash = out.backfires.length >= 3;
  return out;
};

/* ---------- diplomacy ---------- */
/* Each leader offers a few bombastic plays, ONE required Trump-style insult
   (flagged `insult`, unique to that country), and one grown-up option that is
   dull, costs the base, and actually works. `rel` moves relations, which soften
   that nation's tariff backfire, the one thread tying the two halves together.
   Helpers keep the table readable and the balance consistent. */
function dIns (label, res, eff, rel) {
  return { label, res, silly: true, insult: true,
           eff: eff || { base: 4, press: -3, street: -2 }, rel: (rel == null ? -12 : rel) };
}
function dSil (label, res, eff, rel) {
  return { label, res, silly: true, eff: eff || { base: 4, press: -3 }, rel: (rel == null ? 0 : rel) };
}
function dNrm (label, res, eff, rel) {
  return { label, res, normal: true, eff: eff || { base: -3, press: 5, congress: 4 }, rel: (rel == null ? 7 : rel) };
}

AD.DIPLOMACY = {
  china: [
    dSil(`Praise his strength. Concede on everything.`, `He is delighted. Your negotiators learn what you gave away by reading the Chinese newspapers.`, { base: 4, press: -3, courts: -2 }, 10),
    dIns(`Tell them they've been ripping us off for thirty years, the greatest theft in the history of the world.`, `Fire and fury, live and uncut. Markets wobble, the base roars, and precisely nothing is resolved. Everything is simply louder now.`, { base: 8, street: -4, press: -3, cash: -0.2 }, -15),
    dSil(`Do the trade deal on the ninth green.`, `A framework is agreed between the sand trap and the pin. Nobody can subsequently locate the paperwork.`, { base: 3, cash: 0.3, courts: -3 }, 6),
    dNrm(`Send the trade team to negotiate a real, dull agreement.`, `Forty pages, tariffs down four per cent, no photo op. The best deal of your term. It trends for nine minutes.`, { base: -4, press: 6, congress: 5 }, 6)
  ],
  germany: [
    dIns(`Call them freeloaders who owe us "vast sums" for their protection.`, `You put a dollar figure on decades of alliance, live, and read it aloud. The Chancellor reads it back to you slowly. The number was invented and is now, somehow, policy.`, { base: 5, press: -3, street: -2 }, -14),
    dNrm(`Reaffirm the alliance and split the burden on paper.`, `A joint communiqué, a modest cost-sharing table, a functioning partnership. The least interesting and most useful hour of your month.`, null, 9)
  ],
  japan: [
    dIns(`Say they flood us with cars and buy none of ours, "not fair, very unfair."`, `An old grievance from the 1980s delivered as breaking news. Their automakers, who employ half of Ohio, are baffled and then quietly, expensively furious.`, { base: 4, press: -3, street: -2 }, -12),
    dNrm(`Renew the alliance and the trade terms, quietly.`, `Bows, a signed annexe, no drama. It works so smoothly that no one covers it.`, null, 9)
  ],
  india: [
    dIns(`Call their tariffs "the highest in the world, a total disgrace."`, `You are not entirely wrong, which is what makes it land. A billion people trend a nickname for you by lunchtime.`, { base: 5, press: -3, street: -2 }, -12),
    dNrm(`Cut a genuine market-access deal, section by section.`, `Dull, technical, mutually grudging, and real. Both sides claim it as a loss at home, which is how you know it was fair.`, null, 8)
  ],
  uk: [
    dIns(`Announce the special relationship is "not that special anymore."`, `A tabloid runs your face on a corgi. The relationship survives, as it always does, purely out of habit and shared enemies.`, { base: 4, press: -3, street: -2 }, -13),
    dNrm(`Sign the boring, durable free-trade agreement.`, `Ministers in shirtsleeves, a dry signing, a deal that outlives three of their governments and two of yours.`, null, 9)
  ],
  france: [
    dIns(`Say their wine is fine but ours is "frankly better, and they know it."`, `A sommelier is quietly dispatched to the UN. The insult lands precisely nowhere and yet the base is thrilled by it.`, { base: 4, press: -3, street: -2 }, -12),
    dNrm(`Coordinate on defence and let them save face.`, `You let the President give the press conference. In exchange you get everything you actually wanted. Nobody notices, which is the point.`, null, 9)
  ],
  italy: [
    dIns(`Tell them to pay the NATO bill "before the pasta gets cold."`, `The line is beautiful; the diplomacy is rubble. Three ministries respond, and the pasta, reportedly, was fine.`, { base: 5, press: -3, street: -2 }, -12),
    dNrm(`Settle the accounts over a warm state dinner.`, `Toasts, a motorcade, a communiqué no one reads. The alliance holds, deliciously.`, null, 9)
  ],
  canada: [
    dIns(`Call him Governor. Float annexation as the 51st state.`, `Their politics realigns around not being annexed. A party fourteen points behind wins outright, campaigning entirely on you.`, { base: 6, press: -4, street: -3 }, -18),
    dSil(`Offer to buy their autonomous northern territory.`, `The Prime Minister calls it absurd, in English, on camera. You call him nasty. A four-century alliance debates it in parliament.`, { base: 4, press: -3 }, -10),
    dNrm(`Reaffirm the alliance and mean it.`, `A joint statement, a handshake, a functioning alliance. The least interesting thing you do all month.`, { base: -4, congress: 6, press: 5, street: 4 }, 12)
  ],
  brazil: [
    dIns(`Call the rainforest "very overrated, lots of bugs, tremendous humidity."`, `Environmental ministers from forty nations respond at once. You have accidentally convened a global summit, about bugs.`, { base: 4, press: -3, street: -2 }, -12),
    dNrm(`Strike a straight commodities-for-tech deal.`, `Soy and jets, on paper, in public. It clears customs and no one claps.`, null, 8)
  ],
  russia: [
    dSil(`Tell him you fell in love.`, `The letters are called beautiful. On inspection they are competent form letters. The romance is genuine and one-sided.`, { base: 5, press: -4, courts: -2 }, 12),
    dSil(`Believe him over your own intelligence agencies.`, `You side with a foreign strongman against your own services, at a podium, on camera. It is quoted for a decade.`, { base: 6, congress: -5, street: -4, press: -4 }, 15),
    dIns(`Tell Volkov, to his face, that his army looked "weak, very weak, sad."`, `It is the only true thing you say to him all year. He takes it with a small, cold smile you find yourself thinking about later.`, { base: 5, press: -2, street: -2 }, -10),
    dNrm(`A cautious, verified arms agreement.`, `Trust, but verify. Bipartisan, boring, and it outlives your presidency, which nothing else with his name near it does.`, { base: -5, press: 7, congress: 5 }, 6)
  ],
  mexico: [
    dIns(`Announce, again, that they will pay for the wall, "one way or the other."`, `The President replies, in flawless English, that they will not. The clip of you insisting they will plays on a loop for a decade.`, { base: 6, press: -4, street: -2 }, -14),
    dNrm(`Quietly renew the trade pact that runs both economies.`, `Nobody campaigns on it and everybody depends on it. Signed on a Tuesday, saves a million jobs, trends nowhere.`, null, 9)
  ],
  skorea: [
    dIns(`Call them a "money machine" that pays us nothing.`, `The country that hosts your troops and buys your weapons is billed as a freeloader. Their defence ministry sends a politely itemised invoice.`, { base: 5, press: -3, street: -2 }, -13),
    dNrm(`Renew the basing and trade agreement as written.`, `A handshake, a signature, a firm alliance held for another year. Deeply, usefully boring.`, null, 9)
  ],
  australia: [
    dIns(`Call it the "downside-down country" and hang up twenty minutes early.`, `The abrupt end leaks within the hour. An entire continent decides, cheerfully, that you are a joke, and gets on with the barbecue.`, { base: 4, press: -3, street: -2 }, -12),
    dNrm(`Reaffirm the security pact over a long, warm call.`, `You stay on the line this time. The pact deepens; the base never hears about it.`, null, 9)
  ],
  spain: [
    dIns(`Blame the siesta for why "they can never close a deal."`, `You insult an entire nation's relationship with the afternoon. Tourism to Spain, inexplicably, goes up.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Do a quiet ports-and-defence arrangement.`, `Access for investment, initialled at lunch, effective for years. The lunch was the hard part.`, null, 8)
  ],
  indonesia: [
    dIns(`Call it "a lot of islands, nobody's even counted them all."`, `There are, in fact, about seventeen thousand, and their foreign ministry names a representative sample of them at you in a very long statement.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Sign a resources-and-access framework.`, `Nickel for market access, disclosed and dull. It funds three factories and zero headlines.`, null, 8)
  ],
  netherlands: [
    dIns(`Ask, live, why a country "that low" needs so many boats.`, `You have insulted sea level itself. Dutch engineers, the finest on Earth at not drowning, are not amused and say so in flawless English.`, { base: 4, press: -3, street: -2 }, -12),
    dNrm(`Coordinate on trade and flood tech, sincerely.`, `They teach you something about water; you sign something about chips. Everyone comes out ahead and unquoted.`, null, 9)
  ],
  turkey: [
    dIns(`Call the name change "a total branding disaster."`, `You lecture a strongman on rebranding. He controls a very important strait, does not need the advice, and mentions the strait.`, { base: 5, press: -3, street: -2 }, -12),
    dNrm(`Cut a hard-nosed deal over the strait and the base.`, `Neither of you smiles. Both of you sign. It holds precisely as long as it is useful to you both.`, null, 6)
  ],
  saudi: [
    dIns(`Remind them, out loud, who they'd call "if things ever got hairy."`, `You price protection at a lectern, with a chart. The oil market moves before you reach the end of the sentence.`, { base: 5, press: -3, street: -2 }, -10),
    dSil(`Do the sword dance. Hold the enormous glowing orb.`, `You dance, you glow, you hold the orb. It is not clear what was agreed, but the pictures are, everyone concedes, spectacular.`, { base: 5, press: -3, cash: 0.3 }, 8),
    dNrm(`A straight arms-and-energy agreement, fully disclosed.`, `Barrels and jets, itemised, in public. The cleanest deal available and boring beyond the power of words.`, { base: -3, press: 6, congress: 4 }, 6)
  ],
  switzerland: [
    dIns(`Call them "the world's cashier" and demand a cut.`, `The most discreet country on Earth is discussed loudly. Several accounts you would rather not discuss are, somewhere, quietly noted.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Negotiate a calm banking-and-trade accord.`, `Nothing leaks, which is the entire product. You get terms; they get silence; the vault door closes.`, null, 8)
  ],
  poland: [
    dIns(`Insist they thank us daily, "and they do, believe me."`, `You demand gratitude from one of the few allies actually grateful to you. It is unnecessary and it lands with a thud.`, { base: 4, press: -3, street: -2 }, -10),
    dNrm(`Expand the basing deal they actually want.`, `They ask for more troops; you say yes. A rare summit where both sides leave happy and no one performs.`, null, 10)
  ],
  taiwan: [
    dIns(`Say they "stole our chip business, frankly."`, `You accuse the world's chip supplier of theft while every American gadget depends on them. The markets, humourless, react instantly.`, { base: 4, press: -3, street: -3 }, -12),
    dNrm(`Deepen the quiet security-and-silicon understanding.`, `Nothing is announced and everything is agreed. The most important handshake of the year has no photograph.`, null, 8)
  ],
  belgium: [
    dIns(`Call the capital of Europe "a hellhole, I've heard."`, `You insult a city you flew over once. Its residents, and their world-historic fries, respond with a shrug that somehow wounds you.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Work the deal through the EU institutions there.`, `Endless committees, one durable outcome. You hate the process and keep the result.`, null, 8)
  ],
  argentina: [
    dIns(`Say they "default more than they pay, sad country, great steak."`, `The steak line saves it. Their economy minister frames the insult and hangs it beside the last eight defaults.`, { base: 4, press: -3, street: -2 }, -10),
    dNrm(`Back a stabilisation-and-trade package.`, `Dollars for reform, on paper, fingers crossed. It might even hold this time. It has to hold sometime.`, null, 8)
  ],
  sweden: [
    dIns(`Call them "very cold, very rich, and very ungrateful."`, `A famously unbothered nation remains unbothered. They assemble a flat-pack response and mail it to you; some assembly required.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Sign the defence-and-tech pact cleanly.`, `Minimalist, functional, built to last, faintly Scandinavian. It just works, like their furniture, mostly.`, null, 9)
  ],
  ireland: [
    dIns(`Say every American company hides there, "and I get it, but no."`, `You are not wrong about the tax rate, which is the problem. Half your own donors' logos are, technically, in Dublin.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Quietly bless the investment status quo.`, `You say nothing, they change nothing, the money stays put. Everyone's accountant sleeps soundly.`, null, 8)
  ],
  austria: [
    dIns(`Confuse them with Australia on purpose. Twice.`, `You do the kangaroo bit at a landlocked alpine nation. They correct you, coldly, in three languages, and mean it in a fourth.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Hold a correct, neutral, tidy summit.`, `Everything runs on time. Nothing is memorable. The Chancellor considers this the highest possible compliment.`, null, 8)
  ],
  thailand: [
    dIns(`Call it "a beautiful place that owes us for basically everything."`, `You invoice a country for its own history. Their tourism board, professionals to the end, offers you a discounted spa package.`, { base: 4, press: -3, street: -2 }, -11),
    dNrm(`Renew the trade-and-tourism arrangement.`, `Warm, mutual, uneventful. Signed poolside; benefits both economies; makes no news at all.`, null, 8)
  ],
  uae: [
    dIns(`Admire the towers, then ask "who's really paying for them."`, `You compliment and accuse in one breath, your signature move. A very tall building is, somewhere, named after someone who is not you, and it nags at you.`, { base: 4, press: -3, street: -2 }, -10),
    dSil(`Let the sovereign fund invest in… a project of yours.`, `A fund the size of a small ocean takes an interest in your family's next development. Four ethics offices open files during the ribbon-cutting.`, { base: 2, press: -5, courts: -5, congress: -4, cash: 0.5 }, 8),
    dNrm(`Sign a straight energy-and-investment treaty.`, `Disclosed, itemised, unglamorous. The lawyers are thrilled; the base is asleep.`, { base: -3, press: 6, congress: 4 }, 6)
  ],
  israel: [
    dIns(`Remind them "nobody has done more for you than me. Nobody."`, `You turn an alliance into a favour with a receipt. Even your friends there wince at the accounting.`, { base: 5, press: -3, street: -2 }, -10),
    dNrm(`Coordinate quietly and let them lead the podium.`, `They announce it; you arranged it; the region stays one degree cooler. Nobody claps for a degree.`, null, 8)
  ],
  norway: [
    dIns(`Marvel that "all that oil money, and they still send us fish."`, `You mock the richest fund on Earth for also liking salmon. They buy another one per cent of the world and say nothing.`, { base: 4, press: -3, street: -2 }, -10),
    dNrm(`Talk energy and the Arctic, sensibly.`, `Cod, gas, and glaciers, all on the agenda, all handled. You leave with a deal and a sweater.`, null, 9)
  ],
  qatar: [
    dSil(`Accept the gift. The very large, flying gift.`, `An aircraft, unsolicited, they say. Somebody finds the email where you asked first. The word "unsolicited" becomes the whole story.`, { base: 2, press: -6, courts: -6, congress: -6, cash: 0.5 }, 10),
    dSil(`Golf diplomacy and a hotel deal.`, `A resort is announced during the state visit. Four ethics offices open files during the toast.`, { base: 3, cash: 0.4, press: -3 }, 8),
    dIns(`Call the whole Gulf "very rich, very small, and lucky we like them."`, `You shrink an entire region to a remark about its bank balance. The jet offer is, notably, not withdrawn.`, { base: 4, press: -3, street: -2 }, -8),
    dNrm(`A straight energy agreement, fully disclosed.`, `Gas for dollars, on paper, in public. The cleanest deal available and boring beyond the power of words.`, { base: -3, press: 6, congress: 4 }, 6)
  ],
  nkorea: [
    dSil(`Meet him. No agenda. Just the photograph.`, `You cross the line and shake his hand for the cameras. Nothing is agreed. He gets the one thing he wanted, which was the handshake.`, { base: 6, press: -4, courts: -2 }, 12),
    dIns(`Nickname him "Little Rocket Man," then send a warm note by Friday.`, `Fire and fury on Monday, a love letter on Friday. The whiplash is the policy, and it is genuinely unclear whether it is working.`, { base: 7, street: -3, press: -3 }, -4),
    dNrm(`Coordinate sanctions with allies. Slowly.`, `Patient, multilateral, unglamorous pressure. It polls at nothing and works at a pace no camera can capture.`, { base: -4, congress: 6, press: 5 }, 2)
  ],
  iran: [
    dIns(`Call their big parade "weak" and promise a far bigger one.`, `You answer a military parade with a threat to out-parade it. Tanks the avenue cannot bear are ordered down the avenue. The photos travel further than any policy.`, { base: 7, congress: -4, courts: -3, street: -2, cash: -0.4 }, -8),
    dSil(`Envy the palace. Admire the lack of elections.`, `He gives you a tour. You are visibly, publicly envious of a man who never has to campaign. Everyone notices.`, { base: 3, press: -3, congress: -2 }, 6),
    dNrm(`Quiet back-channel de-escalation.`, `Two envoys in a neutral capital lower the temperature by a degree. Nobody has ever clapped for a degree.`, { base: -4, press: 6, courts: 4 }, 8)
  ],
  panama: [
    dIns(`Announce, out of nowhere, that "we're taking the canal back."`, `You claim a sovereign waterway on live television. Shipping insurers panic, an ally reels, and the canal remains, pointedly, theirs.`, { base: 6, press: -4, street: -3 }, -14),
    dSil(`Insult their national dish at the state dinner.`, `You call the signature dish overrated, at the table, to the chef. A whole incident. Their tourism board reports record American bookings anyway.`, { base: 4, press: -4 }, -10),
    dNrm(`A warm, ordinary state visit.`, `Toasts, a motorcade, a communiqué nobody reads. Diplomacy working exactly as designed, invisible as always.`, { base: -3, press: 5, congress: 4 }, 10)
  ],
  heard: [
    dIns(`Formally condemn the penguins as "not team players."`, `The State Department issues a démarche to a colony of flightless birds. The birds do not respond. The base considers this a decisive win.`, { base: 4, press: -2 }, -4),
    dSil(`Formally recognise the penguins.`, `The United States extends full diplomatic recognition to a colony of birds. An ambassador is, appallingly, appointed.`, { base: 4, press: -2 }, 6),
    dNrm(`Leave the penguins alone.`, `You decline to have a foreign policy toward penguins. It is, on reflection, the correct call.`, { base: -1, press: 2 }, 4)
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
  // Boredom: the bombastic, base-thrilling summit play is fun; sober diplomacy bores him.
  if (eff.fun == null) eff.fun = ((a.eff && (a.eff.base || 0) >= 4)) ? 2 : -1;
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
