/* ============================================================
   AMERICAN DICTATOR, wartargets.js
   THE OTHER NINETY.

   war.js ships ten hand-built countries and the six SHARED operations
   (sabre-rattle, cut a deal, buy/annex, strike, invade, regime change).
   This file takes the War Room to A HUNDRED countries.

   ONE WORLD. The roster here is the same hundred nations the State
   Department uses (AD.ECON_NATIONS), so the country you insulted at a
   summit on Tuesday is the country you can threaten on Wednesday, and the
   two rooms cannot quietly drift apart as content gets added. The ten in
   war.js keep their own ids because saved games key alliances and
   conquests off them.

   HOW A COUNTRY REACTS DIFFERENTLY. Four separate things, so no two
   targets play the same:

     1. WHICH OPS EXIST. `ops` is the menu. A nuclear great power can be
        rattled, dealt with, or, if you are out of your mind, invaded, but
        never quietly regime-changed. A microstate can be bought. Most
        countries offer four of the six; no two lists here are identical.

     2. HOW THE SHARED OPS RESOLVE. strength, nukes and posture already
        drive that in war.js. On top of them every country carries its own
        tuning: `fold` (how likely they are to cave to a threat), `risk`
        (how badly a strike can go wrong there) and `bias` (how a long war
        there actually ends). Rattling Luxembourg is not rattling Türkiye.

     3. WHAT IT PAYS. `trade` if you deal, `resource` if you take it, and
        an `annexCost` if it is small enough to simply buy.

     4. THE SIGNATURE. One operation that exists ONLY for that country,
        written for that country: the canal, the chips, the banks, the
        Pontiff, the rake, the aircraft. This is the point of the file.
        Signatures are once per term, so they are a decision and not a
        button you farm.

   Every leader is a fictional stand-in and every incident is invented or
   reshaped past recognition. The country names are real, which is the
   joke. Loaded after war.js, which owns the merge target.
   ============================================================ */

(function () {

/* ---------- the two little builders ------------------------------------
   Rows read left to right as: who they are, what you may do, what it is
   worth, what they are, and the one thing only they offer. */

/* S(icon, label, cost, blurb, eff, res, extra)
   A signature operation. `cost` is TREASURY billions (war is not paid for
   out of the President's pocket; that is what the Corruption room is for).
   `eff` is a normal effect object: base/congress/courts/press/street/auth
   move meters, `cash` moves the President's PERSONAL wealth, `fun` is the
   Boredometer charge (positive = less bored). `extra` can carry needsAuth,
   ally/conquer markers, or `ongoing` to start a real war. */
function S (icon, label, cost, blurb, eff, res, extra) {
  const op = { id: 'sig', bespoke: true, once: true, icon, label, cost, blurb, eff, res };
  if (extra) Object.keys(extra).forEach(k => { op[k] = extra[k]; });
  return op;
}

/* W(id, name, leader, grade, ops, trade, resource, tell, sig, tune)
     grade   '2 defiant'  or  '3 defiant nuke'   (strength, posture, nukes)
     ops     space separated subset of the six shared operations
     trade   $B/month to the Treasury if you ALLY
     resource $B/month to the Treasury if you TAKE it
     tune    optional { annexCost, fold, risk, bias, region } */
const OUT = [];
function W (id, name, leader, grade, ops, trade, resource, tell, sig, tune) {
  const g = grade.split(/\s+/);
  const t = tune || {};
  const row = {
    id, name, leader,
    strength: +g[0], posture: g[1], nukes: g.indexOf('nuke') !== -1,
    ops: ops.split(/\s+/),
    tell, sig,
    region: t.region || 'world'
  };
  if (trade)    row.tradeIncome = trade;
  if (resource) row.resource = resource;
  if (t.annexCost) row.annexCost = t.annexCost;
  else if (row.ops.indexOf('annex') !== -1) row.annexCost = Math.max(4, (resource || 2) * 3);
  if (t.fold != null) row.fold = t.fold;   // 0..1 chance a sabre-rattle makes them cave
  if (t.risk != null) row.risk = t.risk;   // 0..1 chance a strike goes badly wrong
  if (t.bias != null) row.bias = t.bias;   // -0.3..+0.3 on the odds of winning a war there
  OUT.push(row);
  return row;
}

/* ================= EUROPE ================= */

W('germany', 'Germany', 'the Chancellor', '2 defiant', 'sabre ally strike', 14, 0,
  `The engine of Europe. Builds the cars, pays the bills, sighs at you.`,
  S('🧾', 'Invoice Them for NATO', 0, `Put a dollar figure on forty years of alliance and read it out at the podium.`,
    { base: 5, press: -4, congress: -3, courts: -1, auth: 2, cash: 0.2, fun: 2 },
    `You bill Germany for its own defence using a number your staff first hear at the same moment the Chancellor does. It is never paid. It is never forgotten either, and it surfaces in every European election for the next nine years.`),
  { region: 'europe', fold: 0.2, risk: 0.5 });

W('uk', 'the United Kingdom', 'the Prime Minister', '3 defiant nuke', 'sabre ally strike', 16, 0,
  `The special relationship. The emphasis moves around a bit.`,
  S('👑', 'Demand a Second State Visit', 0, `Gold carriage, trumpets, the lot. Again. Nobody has ever asked for a second one.`,
    { base: 6, press: -3, congress: -2, auth: 2, fun: 3 },
    `A constitutional monarchy that has never done this twice for anybody does it twice for you. You are carried up the Mall behind four horses, waving, and it is genuinely the happiest anyone has seen you all term.`),
  { region: 'europe', fold: 0.15, risk: 0.6 });

W('france', 'France', 'the President', '3 defiant nuke', 'sabre ally strike', 13, 0,
  `Proud, prickly, and holding the other European bomb.`,
  S('☔', 'Skip the Cemetery in the Rain', 0, `The weather is bad. The helicopter is grounded. The cameras are not.`,
    { base: -1, press: -6, street: -5, congress: -3, auth: -1, fun: -1 },
    `Every other head of state present walks to the graves in the rain. You stay at the residence. The photograph of the empty chair does more damage than any policy you sign that year, and you never quite work out why.`),
  { region: 'europe', fold: 0.15, risk: 0.55 });

W('italy', 'Italy', 'the Prime Minister', '2 fragile', 'sabre ally strike', 9, 0,
  `Charming, chaotic, and always between governments.`,
  S('🍝', 'Bill Them Before the Pasta Gets Cold', 0, `A demand for back payment, delivered as a dinner toast.`,
    { base: 5, press: -3, street: -2, congress: -2, auth: 2, cash: 0.1, fun: 2 },
    `The line is perfect. Three ministries respond in writing by morning, the alliance holds because it always does, and a Roman newspaper runs your face on a plate of tagliatelle for a fortnight.`),
  { region: 'europe', risk: 0.34, fold: 0.45 });

W('spain', 'Spain', 'the Prime Minister', '2 fragile', 'sabre ally strike', 8, 0,
  `Sun, ports, and a relaxed attitude to your deadlines.`,
  S('🚪', 'Threaten to Throw Them Out', 0, `Suggest, out loud, that an ally who underpays could simply be expelled.`,
    { base: 6, press: -4, congress: -4, courts: -2, auth: 3, fun: 2 },
    `You propose expelling a member of an alliance that has no expulsion mechanism, a fact your own lawyers explain to you afterwards, slowly. Madrid announces a spending increase within the month and takes eleven years to deliver it.`),
  { region: 'europe', risk: 0.36, fold: 0.5 });

W('netherlands', 'the Netherlands', 'the Prime Minister', '1 fragile', 'sabre ally annex strike', 9, 5,
  `Small, low, rich, and quietly holding the world by the throat.`,
  S('🔬', 'Seize the Chip Machines', 0, `One company there makes the machine that makes every advanced chip on Earth.`,
    { base: 4, press: -5, congress: -5, courts: -4, auth: 3, cash: -0.3, fun: 2 },
    `You move against a single Dutch firm and the price of every phone, car and missile on the planet changes by Thursday. Three allied governments discover they have a spine. Beijing sends a thank-you note it declines to sign.`),
  { region: 'europe', risk: 0.38, fold: 0.6, annexCost: 40 });

W('belgium', 'Belgium', 'the Prime Minister', '1 fragile', 'sabre ally annex', 6, 3,
  `The capital of Europe, and the world capital of committees.`,
  S('🏢', 'Move the Alliance Headquarters', 0, `Announce the whole thing is relocating. To a property with your name on it.`,
    { base: 5, press: -5, congress: -5, courts: -3, auth: 3, cash: 0.6, fun: 3 },
    `Twenty-nine governments are informed that their joint headquarters is moving to a building whose lease you personally benefit from. Fourteen of them assume it is a translation error and request clarification.`),
  { region: 'europe', risk: 0.3, fold: 0.55 });

W('switzerland', 'Switzerland', 'the President', '1 fragile', 'sabre ally', 11, 0,
  `Neutral, discreet, and holding everybody money. Possibly yours.`,
  S('🏦', 'Freeze the Banks', 0, `Threaten the one thing they actually care about and watch neutrality evaporate.`,
    { base: 4, press: -4, congress: -3, courts: -3, auth: 4, cash: 0.5, fun: 2 },
    `Two hundred years of studied neutrality end in a nine-minute phone call. Zurich gives you everything you ask for and then quietly, professionally, moves a great deal of money somewhere you will never find it.`),
  { region: 'europe', risk: 0.42, fold: 0.75 });

W('sweden', 'Sweden', 'the Prime Minister', '2 fragile', 'sabre ally strike', 8, 0,
  `Cold, rich, calm, and almost impossible to rattle.`,
  S('🎤', 'Free the Rapper', 0, `An American recording artist is in a Stockholm cell. Make it a diplomatic incident.`,
    { base: 7, press: -4, congress: -3, courts: -4, street: 2, auth: 1, fun: 3 },
    `You personally threaten a Nordic democracy over a nightclub scuffle. Their justice ministry replies, politely, that it does not take instructions. The rapper is released on schedule anyway and thanks the courts, not you.`),
  { region: 'europe', risk: 0.28, fold: 0.35 });

W('norway', 'Norway', 'the Prime Minister', '1 fragile', 'sabre ally annex', 7, 6,
  `The world largest piggy bank. Still, somehow, mostly about fish.`,
  S('🏅', 'Call Oslo About the Prize', 0, `Ring the committee yourself. Explain, at length, why this year is the year.`,
    { base: 6, press: -6, congress: -3, street: -2, auth: 1, fun: 3 },
    `A five-person Norwegian committee receives a call from the President of the United States making his own case for a peace prize. They minute it. The minutes leak. They give it to a nurse.`),
  { region: 'europe', risk: 0.26, fold: 0.6, annexCost: 55 });

W('ireland', 'Ireland', 'the Taoiseach', '1 fragile', 'sabre ally annex', 10, 4,
  `Where every American company keeps its profits and its charm.`,
  S('💸', 'Repatriate the Profits', 0, `Threaten the tax arrangement half your own donors depend on.`,
    { base: 5, press: -3, congress: -6, courts: -2, auth: 3, cash: -0.4, fun: 1 },
    `You move against the arrangement that parks a trillion dollars of American profit in a country of five million people. Your own donors call inside the hour. The arrangement survives, slightly renamed.`),
  { region: 'europe', risk: 0.24, fold: 0.55, annexCost: 38 });

W('austria', 'Austria', 'the Chancellor', '1 fragile', 'sabre ally annex', 5, 3,
  `Landlocked, alpine, and extremely tired of the kangaroo joke.`,
  S('🦘', 'Confuse It With Australia, In Writing', 0, `Not a slip of the tongue. A signed document.`,
    { base: 3, press: -4, congress: -2, auth: -1, fun: 2 },
    `A formal communiqué congratulates Austria on its excellent beaches and its marsupials. Vienna replies with a formal communiqué congratulating you on your excellent kangaroos. It is the warmest exchange of your presidency.`),
  { region: 'europe', risk: 0.22, fold: 0.6, annexCost: 26 });

W('poland', 'Poland', 'the President', '2 fragile', 'sabre ally strike', 7, 0,
  `One of the very few allies genuinely pleased to see you.`,
  S('🏰', 'Name the Base After Yourself', 0, `They offered. They actually offered. Accept immediately.`,
    { base: 8, press: -3, congress: -2, courts: -1, auth: 3, fun: 3 },
    `A sovereign government offers to name a permanent military installation after you, in writing, as an inducement. You accept before the sentence is finished. It gets built. There is a sign. You visit the sign.`),
  { region: 'europe', risk: 0.32, fold: 0.3, bias: 0.1 });

W('denmark', 'Denmark', 'the Prime Minister', '1 fragile', 'sabre ally annex strike', 6, 4,
  `Small, cheerful, and holding the deed to something you want.`,
  S('🛫', 'Cancel the State Visit Over an Island', 0, `They said the island was not for sale. Cancel the whole trip, publicly.`,
    { base: 6, press: -5, congress: -4, courts: -2, auth: 2, fun: 3 },
    `You cancel a state visit to a founding ally because they declined to sell you territory. Copenhagen response is one word long and does not translate cleanly. Their tourism board reports a record year.`),
  { region: 'europe', risk: 0.27, fold: 0.5, annexCost: 34 });

W('finland', 'Finland', 'the President', '2 fragile', 'sabre ally strike', 5, 0,
  `Long border, longer memory, world-class at winter.`,
  S('🍂', 'Order Them to Rake the Forests', 0, `Credit them, publicly, with a forest technique they have never heard of.`,
    { base: 3, press: -3, street: -1, auth: -1, fun: 3 },
    `You attribute to Finland a method of forest management Finland does not use, has never used, and now cannot stop talking about. The entire country spends a week photographing itself holding rakes. It is the happiest week of the alliance.`),
  { region: 'europe', risk: 0.29, fold: 0.35 });

W('greece', 'Greece', 'the Prime Minister', '1 fragile', 'sabre ally annex strike', 5, 3,
  `Invented democracy. Would quite like it back.`,
  S('⚓', 'Take the Naval Base Outright', 0, `Stop renting the Mediterranean port. Simply keep it.`,
    { base: 5, press: -4, congress: -4, courts: -4, auth: 4, fun: 2 },
    `You convert a leased harbour into an American one by announcement. It is a superb deal and a terrible precedent, and every other country hosting your bases reads the news that morning very carefully indeed.`),
  { region: 'europe', risk: 0.31, fold: 0.5, annexCost: 28 });

W('portugal', 'Portugal', 'the Prime Minister', '1 fragile', 'sabre ally annex', 4, 3,
  `Quiet, coastal, and doing rather better than you assume.`,
  S('🛬', 'Annex the Azores for the Runway', 0, `A mid-Atlantic airstrip you cannot do without, with nine islands attached.`,
    { base: 5, press: -4, congress: -3, courts: -3, auth: 3, fun: 2 },
    `You take nine inhabited islands because one of them has a runway. The runway was already yours under a treaty signed in 1951, a point somebody raises at the ceremony, quietly, and much too late.`),
  { region: 'europe', risk: 0.21, fold: 0.6, annexCost: 24 });

W('hungary', 'Hungary', 'the Prime Minister', '2 defiant', 'sabre ally regime', 4, 3,
  `A small country with an enormous influence on your speechwriters.`,
  S('📕', 'Import Their Model Wholesale', 0, `Have your counsel translate their judicial reforms. All of them.`,
    { base: 7, press: -7, courts: -8, congress: -4, auth: 5, fun: 2 },
    `A European government that hollowed out its own courts over a decade sends you the paperwork, annotated, with the difficult parts helpfully marked. Four of your own senators develop an urgent interest in the ceiling.`),
  { region: 'europe', risk: 0.33, fold: 0.25 });

W('poland2', 'the Baltic States', 'three Prime Ministers', '1 fragile', 'sabre ally strike', 4, 0,
  `Three small democracies who take the guarantee extremely literally.`,
  S('💳', 'Put the Guarantee on a Payment Plan', 0, `Make mutual defence sound like a subscription that can lapse.`,
    { base: 5, press: -5, congress: -5, courts: -2, street: -2, auth: 2, fun: 2 },
    `Three capitals spend a fortnight asking whether they are covered and do not get an answer. Somewhere a general staff four hundred miles east reads the same silence and files it, carefully, for later.`),
  { region: 'europe', risk: 0.44, fold: 0.45 });

W('serbia', 'Serbia', 'the President', '2 defiant', 'sabre ally strike regime', 3, 3,
  `Nurses a grievance beautifully. Has excellent development land.`,
  S('🏗️', 'Build the Tower on the Bombed Ministry', 0, `A ruin left standing as a memorial. Perfect footprint. Great views.`,
    { base: 4, press: -7, congress: -6, courts: -5, auth: 1, cash: 1.4, fun: 2 },
    `A building your own air force destroyed, preserved for a quarter of a century as a monument, is leased to a company bearing your family name for a luxury development. The groundbreaking is catered.`),
  { region: 'europe', risk: 0.46, fold: 0.3 });

W('belarus', 'Belarus', 'the Marshal', '2 defiant', 'sabre strike regime invade', 0, 4,
  `A dictatorship with a hostage problem and a fertiliser monopoly.`,
  S('🤝', 'Trade the Prisoners for the Potash', 0, `They release political prisoners. You lift the sanctions on the fertiliser.`,
    { base: 4, press: -2, congress: -4, courts: -2, auth: 3, cash: 0.3, fun: 2 },
    `Fifty people walk out of a prison in exchange for a commodity exemption. It is a genuinely good outcome reached by a genuinely grubby method, and neither your staff nor you can decide how to feel about it.`),
  { region: 'europe', fold: 0.35, risk: 0.4 });

W('iceland', 'Iceland', 'the Prime Minister', '0 fragile', 'sabre ally annex', 2, 2,
  `Volcanoes, fish, and a parliament older than most countries.`,
  S('🌋', 'Buy the Whole Island as a Test Case', 0, `Three hundred and eighty thousand people. How hard can it be.`,
    { base: 5, press: -4, congress: -3, courts: -2, auth: 2, cash: -0.4, fun: 3 },
    `You table a formal offer for an entire NATO member. Their parliament, which has been sitting since the year 930, debates it for eleven minutes and then moves to the next item, which is fishing quotas.`),
  { region: 'europe', risk: 0.18, fold: 0.7, annexCost: 14 });

W('luxembourg', 'Luxembourg', 'the Prime Minister', '0 fragile', 'sabre ally annex', 5, 1,
  `A grand duchy the size of a county with the balance sheet of a continent.`,
  S('📂', 'Audit the Shell Companies', 0, `Open the filing cabinet. Discover whose names are in it.`,
    { base: 3, press: 4, congress: -5, courts: 2, auth: 1, cash: -0.6, fun: -1 },
    `The audit is a triumph of transparency for about nine hours, until somebody notices the pattern of names in it, three of which are on your Christmas card list and one of which is on your birth certificate.`),
  { region: 'europe', risk: 0.16, fold: 0.75, annexCost: 11 });

W('malta', 'Malta', 'the Prime Minister', '0 fragile', 'sabre ally annex', 2, 1,
  `A rock in the Mediterranean that sells citizenship by the unit.`,
  S('🛂', 'Sell Them the Passports Back', 0, `They sell nationality to strangers. Offer to do the same, at scale.`,
    { base: 4, press: -5, congress: -5, courts: -4, auth: 1, cash: 1.1, fun: 2 },
    `You propose an American version of a scheme you have repeatedly called disgraceful, at four times the price, administered by people you know. The press release calls it a partnership. The legal memo calls it a problem.`),
  { region: 'europe', risk: 0.14, fold: 0.8, annexCost: 8 });

W('vatican', 'the Holy See', 'the Pontiff', '0 defiant', 'sabre ally', 0, 0,
  `A hundred acres, no army, and two thousand years of practice.`,
  S('🕊️', 'Demand a Papal Endorsement', 0, `Ask the Pontiff, on the record, to say something nice about your policy.`,
    { base: -2, press: -6, street: -6, congress: -3, courts: -2, auth: -2, fun: 1 },
    `You ask the head of a church of one and a quarter billion people to endorse your border policy. He responds with a two-sentence homily about walls and bridges that does not mention your name and does not need to.`),
  { region: 'europe', fold: 0.02, risk: 0.9 });

W('sanmarino', 'San Marino', 'the Captains Regent', '0 fragile', 'sabre annex strike', 0, 1,
  `Sixty-one square kilometres and two heads of state, at all times.`,
  S('🏔️', 'Buy It Outright With a Signing Bonus', 0, `A cash offer for the entire republic. Both presidents included.`,
    { base: 4, press: -3, congress: -2, auth: 1, cash: -0.2, fun: 3 },
    `You make a cash offer for the world oldest republic. The two Captains Regent, who job-share the presidency and rotate every six months, reply jointly that they are flattered and that the answer is no, twice.`),
  { region: 'europe', risk: 0.12, fold: 0.85, annexCost: 4 });

W('czechia', 'Czechia', 'the Prime Minister', '1 fragile', 'sabre ally strike', 5, 0,
  `Beer, physics, and a very dry sense of humour about all of this.`,
  S('🗺️', 'Claim Credit for the Whole Country', 0, `Announce that it largely exists because of you. Personally.`,
    { base: 4, press: -3, congress: -2, auth: 1, fun: 2 },
    `You take personal credit for a nation-state founded in 1918, split in 1993, and never at any stage advised by you. Prague issues a statement thanking you, sincerely, in a tone nobody in your office can decode.`),
  { region: 'europe', risk: 0.23, fold: 0.5 });

W('romania', 'Romania', 'the President', '1 fragile', 'sabre ally strike regime', 4, 0,
  `A long border with the war, and a court that keeps cancelling elections.`,
  S('🗳️', 'Annul the Election on Their Behalf', 0, `Their court threw out a result. Say publicly which result you would prefer.`,
    { base: 5, press: -6, congress: -5, courts: -6, auth: 4, fun: 2 },
    `You intervene by name in the internal election of an allied democracy, and it works. It works so well that a lawyer somewhere writes a memo about doing the identical thing at home, and mails it to your counsel.`),
  { region: 'europe', risk: 0.35, fold: 0.45 });

W('turkey', 'Türkiye', 'the President', '2 defiant', 'sabre ally strike regime', 8, 5,
  `Straddles two continents and one extremely important strait.`,
  S('✉️', 'Send the Letter', 0, `One page. Written by you. Contains the phrase do not be a fool.`,
    { base: 6, press: -4, congress: -4, courts: -2, auth: 1, fun: 4 },
    `You send a head of state a letter that reads like a note passed in a classroom, signed with your full name and an exclamation mark. He reportedly puts it in the bin. It is published in full within the week and is, unarguably, the most memorable document of your presidency.`),
  { region: 'europe', fold: 0.2, risk: 0.5 });

/* ================= THE AMERICAS ================= */

W('mexico', 'Mexico', 'the President', '2 defiant', 'sabre ally strike regime', 11, 6,
  `The neighbour, the factory floor, and the campaign prop.`,
  S('🧱', 'Send Them the Invoice for the Wall', 0, `Not a slogan this time. An actual bill, with a number and a due date.`,
    { base: 8, press: -5, street: -4, congress: -4, courts: -2, auth: 3, fun: 3 },
    `A sovereign government receives a formal demand for construction costs on its neighbour side of the border. The President replies in flawless English that they will not be paying it, and the clip of you insisting they will plays on a loop for a decade.`),
  { region: 'americas', fold: 0.3, risk: 0.45 });

W('brazil', 'Brazil', 'the President', '2 defiant', 'sabre ally strike', 10, 7,
  `A continent of its own, and thoroughly aware of it.`,
  S('⚖️', 'Tariff Them Over a Friend Trial', 0, `Their supreme court is prosecuting an ally of yours. Punish the whole economy.`,
    { base: 6, press: -5, congress: -4, courts: -6, street: -3, auth: 3, cash: -0.3, fun: 2 },
    `You impose a fifty per cent tariff on two hundred million people because one of them is on trial. Their currency wobbles, their president polling rises eleven points, and coffee gets expensive in every diner in your own base.`),
  { region: 'americas', risk: 0.37, fold: 0.3 });

W('argentina', 'Argentina', 'the President', '1 fragile', 'sabre ally', 6, 0,
  `Great steak, world-class defaults, permanent drama.`,
  S('🪚', 'Wire Them the Bailout Personally', 0, `Twenty billion for an ideological soulmate, arranged over a weekend.`,
    { base: 5, press: -5, congress: -7, courts: -2, auth: 2, cash: 0.4, fun: 2 },
    `You extend a twenty billion dollar lifeline to a government you like the vibe of, while your own farmers, who compete directly with theirs, watch the announcement live from a tractor. Two of your senators call it the most expensive tweet in history.`),
  { region: 'americas', risk: 0.19, fold: 0.6, bias: 0.05 });

W('venezuela', 'Venezuela', 'the Comandante', '2 wildcard', 'sabre strike invade regime', 0, 14,
  `Sitting on the largest proven oil reserves on the planet, and broke.`,
  S('💰', 'Put a Bounty on the Comandante', 0, `Fifty million dollars, announced from the podium, for one man.`,
    { base: 7, press: -4, congress: -3, courts: -5, street: -2, auth: 4, cash: -0.5, fun: 4 },
    `The United States offers a private reward for a sitting head of state. It is technically a law enforcement action and it is functionally a wanted poster. He puts it on a billboard in Caracas and doubles his own security budget.`),
  { region: 'americas', fold: 0.25, risk: 0.5, bias: 0.05 });

W('cuba', 'Cuba', 'the First Secretary', '1 defiant', 'sabre strike regime annex', 0, 3,
  `Ninety miles away and sixty years into the argument.`,
  S('🚬', 'Re-Embargo the Cigars', 0, `Reverse the thaw. All of it. On a Friday, by memorandum.`,
    { base: 6, press: -4, congress: -3, courts: -1, auth: 3, fun: 2 },
    `Everything opened over four painstaking years closes in a single afternoon. Havana absorbs it with the weary competence of a government that has survived eleven of your predecessors, and the cigars go up in price everywhere except Cuba.`),
  { region: 'americas', risk: 0.48, fold: 0.2, annexCost: 30 });

W('colombia', 'Colombia', 'the President', '1 fragile', 'sabre ally strike', 6, 4,
  `Coffee, cocaine, and a deportation flight in the air right now.`,
  S('✈️', 'Turn the Deportation Flight Around', 0, `They refused the plane. Threaten tariffs, visas and sanctions before lunch.`,
    { base: 7, press: -4, street: -3, congress: -3, courts: -3, auth: 4, fun: 3 },
    `A sixty-year alliance goes to the brink and back inside nine hours over one aircraft with one hundred and four people on it. Both sides declare total victory. The plane lands where it was always going to land.`),
  { region: 'americas', risk: 0.25, fold: 0.65 });

W('panama2', 'the Canal Authority', 'the Administrator', '0 fragile', 'sabre ally annex strike', 8, 11,
  `Not a country. A corporation that owns the most important ditch on Earth.`,
  S('📏', 'Audit the Locks', 0, `Send accountants, not marines. Find that the fees are, in your view, a scandal.`,
    { base: 5, press: -3, congress: -3, courts: -2, auth: 3, cash: 0.5, fun: 1 },
    `Your auditors report that the canal is well run, profitably managed and entirely legal under a treaty your own country signed. You announce that the findings are devastating and nobody reads past the headline, which is exactly the plan.`),
  { region: 'americas', risk: 0.17, fold: 0.7, annexCost: 40 });

W('guatemala', 'Guatemala', 'the President', '0 fragile', 'sabre ally annex strike', 3, 2,
  `Poor, patient, and next in line to be asked for a favour.`,
  S('📝', 'Rent Them as a Safe Third Country', 0, `Pay them to take asylum seekers who have never set foot there.`,
    { base: 5, press: -6, courts: -6, congress: -4, street: -3, auth: 3, cash: -0.2, fun: 1 },
    `A country with no functioning asylum system agrees to host asylum seekers from countries it shares no border with. The agreement is signed at eleven at night. Three federal judges read it the following morning with visible difficulty.`),
  { region: 'americas', risk: 0.2, fold: 0.75, annexCost: 16 });

W('haiti', 'Haiti', 'the interim President', '0 fragile', 'sabre ally strike', 2, 1,
  `A state in pieces, and a diaspora your rallies keep mentioning.`,
  S('📄', 'Revoke the Status of Half a Million', 0, `End the protected status with a signature. Immediately, not gradually.`,
    { base: 6, press: -7, street: -7, courts: -6, congress: -4, auth: 3, fun: 1 },
    `Half a million people who have lived, worked and paid tax in your country for a decade become deportable at midnight. Their employers, mostly in states you won, write to you jointly. You do not reply.`),
  { region: 'americas', risk: 0.15, fold: 0.85 });

W('elsalvador', 'El Salvador', 'the young President', '1 fragile', 'sabre ally regime', 4, 2,
  `A very young president with a very large prison and an open invitation.`,
  S('🔒', 'Rent the Mega-Prison', 0, `Six million dollars a year. They will hold anybody you send. No questions.`,
    { base: 8, press: -7, courts: -9, congress: -5, street: -4, auth: 6, fun: 3 },
    `You subcontract incarceration to a foreign strongman with a forty-thousand-bed facility and no interest in paperwork. A judge orders one man returned. The government explains that it no longer has custody of him, which is, appallingly, true.`),
  { region: 'americas', risk: 0.13, fold: 0.2 });

W('nicaragua', 'Nicaragua', 'the Commander', '1 defiant', 'sabre strike regime', 0, 2,
  `A revolution that became a family business. You take notes.`,
  S('🎖️', 'Congratulate Him on the Re-Election', 0, `He won ninety-eight per cent. Send warm public congratulations.`,
    { base: 5, press: -6, congress: -5, courts: -4, street: -3, auth: 3, fun: 2 },
    `You publicly congratulate a man who jailed all seven of his opponents before polling day. Your own State Department had a statement drafted calling the election a fraud. It is quietly deleted from the server.`),
  { region: 'americas', risk: 0.43, fold: 0.25 });

W('bahamas', 'the Bahamas', 'the Prime Minister', '0 fragile', 'sabre ally annex', 3, 2,
  `Sun, offshore banking, and a runway forty minutes from your resort.`,
  S('⛳', 'Buy the Island Next to the Resort', 0, `Not a policy. An acquisition. Charged, somehow, to the government.`,
    { base: 3, press: -6, congress: -6, courts: -5, auth: 0, cash: 1.6, fun: 2 },
    `A private island changes hands in a transaction that is either a national security asset or a nine-hole extension, depending entirely on which of your two lawyers is speaking. The ribbon is cut by your son.`),
  { region: 'americas', risk: 0.11, fold: 0.85, annexCost: 12 });

W('chile', 'Chile', 'the President', '1 fragile', 'sabre ally annex strike', 5, 8,
  `A very long, very thin country sitting on the battery of the future.`,
  S('🔋', 'Take the Lithium', 0, `Secure the salt flats before anybody else does. Ownership optional.`,
    { base: 5, press: -4, congress: -4, courts: -4, street: -2, auth: 4, cash: 0.4, fun: 2 },
    `You secure a mineral concession by means your own trade lawyers describe as novel. Every electric vehicle on Earth gets marginally cheaper and one Andean valley gets a great deal drier, which is somebody else problem in somebody else decade.`),
  { region: 'americas', risk: 0.39, fold: 0.55, annexCost: 45 });

W('peru', 'Peru', 'the President', '1 fragile', 'sabre ally strike', 4, 5,
  `Ancient, unstable, and now hosting somebody else deep-water port.`,
  S('🚢', 'Tariff the Port You Did Not Build', 0, `A rival power built a megaport on your continent. Punish the landlord.`,
    { base: 5, press: -3, congress: -3, courts: -2, auth: 3, cash: -0.2, fun: 2 },
    `You place tariffs on a country for accepting an investment you declined to make. The port opens anyway, on schedule, with a ribbon and a very cheerful ambassador who is not yours.`),
  { region: 'americas', risk: 0.28, fold: 0.6 });

/* ================= ASIA AND THE PACIFIC ================= */

W('japan', 'Japan', 'the Prime Minister', '2 fragile', 'sabre ally strike', 15, 0,
  `Old ally, deep pockets, immaculate manners, infinite patience.`,
  S('📜', 'Have Them Nominate You', 0, `Ask the Prime Minister, personally, to write the Nobel letter. Then mention it.`,
    { base: 6, press: -5, congress: -3, street: -2, auth: 1, fun: 3 },
    `An allied head of government is asked by the President of the United States to nominate him for a peace prize, and does. You mention it forty-one times in public. He mentions it never, which is somehow worse.`),
  { region: 'asia', risk: 0.35, fold: 0.55 });

W('india', 'India', 'the Prime Minister', '3 defiant nuke', 'sabre ally strike', 12, 0,
  `Enormous, rising, and tariffs absolutely everything that moves.`,
  S('🕊️', 'Claim You Settled Their War', 0, `Two nuclear neighbours stopped shooting. Take the credit, repeatedly, everywhere.`,
    { base: 7, press: -4, congress: -3, street: -2, auth: 2, fun: 3 },
    `You announce that you personally ended a confrontation between two nuclear powers. One of them thanks you warmly. The other denies you were involved at all, in writing, four separate times, which you cite as further proof.`),
  { region: 'asia', fold: 0.2, risk: 0.6 });

W('skorea', 'South Korea', 'the President', '2 fragile', 'sabre ally strike', 13, 0,
  `Hosts your troops, buys your weapons, builds your phones.`,
  S('🧮', 'Bill Them Five Billion for the Troops', 0, `Multiply the existing figure by five. Do not explain the arithmetic.`,
    { base: 6, press: -4, congress: -4, courts: -1, auth: 3, cash: 0.3, fun: 2 },
    `You quintuple the bill for an American garrison on the doorstep of a nuclear state, using a number nobody in the Pentagon recognises. Seoul negotiates for eighteen months and settles at roughly the old figure plus inflation.`),
  { region: 'asia', risk: 0.3, fold: 0.4 });

W('australia', 'Australia', 'the Prime Minister', '2 fragile', 'sabre ally strike', 9, 0,
  `Loyal, distant, upside down, entirely unbothered.`,
  S('📞', 'Hang Up on the Prime Minister', 0, `Twenty-five minutes into a scheduled hour, decide you have heard enough.`,
    { base: 4, press: -5, congress: -4, street: -2, auth: 0, fun: 3 },
    `You terminate a call with the leader of your most reliable ally thirty-five minutes early, telling him it is the worst call you have had all day, having earlier that morning spoken to a dictator. The transcript surfaces within the fortnight.`),
  { region: 'asia', risk: 0.45, fold: 0.4 });

W('indonesia', 'Indonesia', 'the President', '2 fragile', 'sabre ally strike', 8, 6,
  `Seventeen thousand islands, and a resort development on two of them.`,
  S('🏖️', 'Sign the Deal With the Resort Attached', 0, `A trade agreement, and coincidentally a golf complex with your name on it.`,
    { base: 4, press: -6, congress: -6, courts: -5, auth: 2, cash: 1.5, fun: 2 },
    `A bilateral trade framework is signed the same week a licensing agreement clears for two developments bearing your surname. Your counsel describes the timing as a coincidence, and technically nobody can prove otherwise, which is the entire business model.`),
  { region: 'asia', risk: 0.4, fold: 0.55 });

W('taiwan', 'Taiwan', 'the President', '2 fragile', 'sabre ally', 18, 0,
  `Makes the chips the entire world runs on. Extremely nervous.`,
  S('🧩', 'Accuse Them of Stealing the Chip Business', 0, `Say out loud that they took an industry away from you, and want it back.`,
    { base: 5, press: -5, congress: -5, courts: -2, street: -3, auth: 2, cash: -0.4, fun: 2 },
    `You accuse the one democracy whose survival depends on your guarantee of theft, on camera, in an election year. Their stock market drops four per cent in a morning and a very large government somewhere to the west reads the transcript twice.`),
  { region: 'asia', risk: 0.52, fold: 0.7, bias: -0.1 });

W('thailand', 'Thailand', 'the Prime Minister', '1 fragile', 'sabre ally strike', 6, 3,
  `Beaches, exports, relentless hospitality, and a border skirmish.`,
  S('🏆', 'Claim the Peace Deal', 0, `A ceasefire happened near you. Announce that it happened because of you.`,
    { base: 6, press: -4, congress: -2, auth: 2, fun: 3 },
    `Two neighbours stop shooting after a phone call in which you mention tariffs eleven times and peace twice. Both governments credit you effusively, having correctly identified this as the cheapest concession available to them.`),
  { region: 'asia', risk: 0.41, fold: 0.6 });

W('vietnam', 'Vietnam', 'the General Secretary', '2 fragile', 'sabre ally strike', 9, 5,
  `Communist, capitalist, and building your golf course as we speak.`,
  S('⛳', 'Open the Golf Course Outside Hanoi', 0, `A one-and-a-half-billion-dollar resort. Approved in record time. Yours.`,
    { base: 4, press: -6, congress: -6, courts: -5, auth: 1, cash: 1.7, fun: 2 },
    `A single-party state clears a permit in a fortnight that takes eleven years for anybody else, for a development bearing your family name, in the same month its tariff rate is reviewed. Everybody involved calls it unrelated with a completely straight face.`),
  { region: 'asia', risk: 0.43, fold: 0.5 });

W('philippines', 'the Philippines', 'the President', '1 fragile', 'sabre ally strike', 6, 4,
  `A treaty ally, a contested sea, and a body count.`,
  S('👏', 'Praise the Drug War', 0, `Tell him, on a recorded call, that he is doing an unbelievable job.`,
    { base: 5, press: -7, courts: -6, street: -5, congress: -4, auth: 3, fun: 2 },
    `You congratulate a head of state on a campaign that has killed thousands of people without trial. The call is transcribed, as calls are. Your own ambassador reads it the next morning and requests reassignment.`),
  { region: 'asia', risk: 0.49, fold: 0.5 });

W('singapore', 'Singapore', 'the Prime Minister', '1 fragile', 'sabre ally', 12, 0,
  `Immaculate, tiny, wealthy, and available at short notice.`,
  S('🏨', 'Hold the Summit at the Hotel', 0, `Neutral ground, world media, and a venue that bills by the suite.`,
    { base: 6, press: -2, congress: -2, auth: 2, cash: 0.4, fun: 3 },
    `A historic summit is convened in seventy-two hours in a hotel that turns out to have a corporate relationship nobody discloses until the invoices are filed. The communiqué is four sentences long. Three of them are adjectives.`),
  { region: 'asia', risk: 0.2, fold: 0.7 });

W('malaysia', 'Malaysia', 'the Prime Minister', '1 fragile', 'sabre ally strike', 6, 4,
  `Palm oil, semiconductors, and a signature ready on the tarmac.`,
  S('✍️', 'Sign the Trade Deal on the Tarmac', 0, `No lawyers, no annexes, no reading. Just a table, two pens and a camera.`,
    { base: 5, press: -3, congress: -3, courts: -2, auth: 2, cash: 0.2, fun: 3 },
    `Two heads of government sign a trade agreement on an airport apron before either delegation has seen the final text. It is a wonderful photograph. It takes four hundred days and two arbitration panels to work out what it says.`),
  { region: 'asia', risk: 0.33, fold: 0.7 });

W('cambodia', 'Cambodia', 'the Prime Minister', '0 fragile', 'sabre ally strike annex', 3, 2,
  `Small, cheap, and willing to write any letter you would like.`,
  S('📨', 'Trade Tariff Relief for a Nomination', 0, `They will nominate you for the peace prize. You will halve their rate.`,
    { base: 5, press: -6, congress: -5, courts: -4, auth: 2, cash: 0.2, fun: 3 },
    `A government facing a ruinous tariff discovers that a single letter to a committee in Oslo costs nothing at all. The rate is halved within the week. The letter is beautiful. Everybody involved is delighted and nobody involved is fooled.`),
  { region: 'asia', risk: 0.18, fold: 0.8, annexCost: 16 });

W('nzealand', 'New Zealand', 'the Prime Minister', '1 fragile', 'sabre ally annex', 4, 2,
  `Small, decent, extremely far away, and quietly excellent at everything.`,
  S('🐑', 'Tariff the Sheep', 0, `Impose a punitive rate on a country running a trade deficit with you.`,
    { base: 4, press: -4, congress: -3, courts: -2, auth: 2, cash: -0.1, fun: 2 },
    `You penalise one of the four countries on Earth that buys more from you than it sells. Their trade minister sends a polite letter containing the actual figures. It is read aloud on a late-night show and gets a standing ovation.`),
  { region: 'asia', risk: 0.16, fold: 0.65, annexCost: 18 });

W('pakistan', 'Pakistan', 'the Prime Minister', '2 wildcard nuke', 'sabre ally strike', 5, 4,
  `Nuclear, unpredictable, and enormously generous with nominations.`,
  S('🪙', 'Take the Nomination and the Crypto Deal', 0, `They nominate you for peace. Your family firm signs a digital assets venture.`,
    { base: 6, press: -7, congress: -7, courts: -6, auth: 2, cash: 1.3, fun: 3 },
    `A nuclear-armed government nominates you for the Nobel Peace Prize in the same month a company bearing your family name signs a digital currency agreement with its central authorities. Two things happened. Nobody will ever be able to prove they were one thing.`),
  { region: 'asia', fold: 0.35, risk: 0.65 });

W('bangladesh', 'Bangladesh', 'the Chief Adviser', '0 fragile', 'sabre ally strike', 3, 2,
  `Makes the shirt you are wearing. Probably the flag too.`,
  S('👕', 'Tariff the T-Shirts', 0, `A thirty-seven per cent rate on the garment industry. Announced by chart.`,
    { base: 4, press: -4, street: -5, congress: -3, auth: 2, cash: -0.2, fun: 1 },
    `You place a punishing tariff on a country whose entire export economy is clothing, using a rate calculated by a formula your own economists cannot reconstruct. The price of a plain white shirt in your own country rises by a dollar ten.`),
  { region: 'asia', risk: 0.22, fold: 0.8 });

W('afghanistan', 'Afghanistan', 'the Emir', '1 wildcard', 'sabre strike regime invade', 0, 3,
  `Twenty years, two trillion dollars, and an airfield you keep mentioning.`,
  S('🛩️', 'Ask For the Airbase Back', 0, `Demand the return of one specific runway. From the people who now own it.`,
    { base: 6, press: -4, congress: -4, courts: -2, street: -3, auth: 3, fun: 3 },
    `You formally request the return of an air base from a government you refuse to recognise, on the grounds that it is close to somewhere else you are worried about. They decline in a two-line statement that is, infuriatingly, quite well written.`),
  { region: 'asia', fold: 0.15, risk: 0.7, bias: -0.2 });

W('myanmar', 'Myanmar', 'the General', '1 defiant', 'sabre strike regime', 0, 3,
  `A junta, a civil war, and a scam industry with a call centre.`,
  S('📵', 'Praise the General for His Efficiency', 0, `Compliment a junta on how quickly it gets things done.`,
    { base: 5, press: -6, courts: -4, congress: -5, street: -3, auth: 3, fun: 2 },
    `You describe a military government mid-civil-war as impressively decisive. Within a fortnight the compliment appears, translated, on billboards in a capital city, over a photograph of you that nobody in your office approved.`),
  { region: 'asia', risk: 0.55, fold: 0.3 });

W('mongolia', 'Mongolia', 'the President', '0 fragile', 'sabre ally annex', 3, 5,
  `Between two enormous problems, sitting on a fortune in rare earths.`,
  S('🐎', 'Trade Rare Earths for a Yurt', 0, `They have the minerals. They also have a horse and a ceremonial tent for you.`,
    { base: 4, press: -2, congress: -2, auth: 2, cash: 0.4, fun: 3 },
    `A landlocked democracy hands you a mineral concession, a ceremonial tent and a horse named after you. The horse is the only part of the arrangement that ever appears on the evening news, which the Mongolians correctly predicted.`),
  { region: 'asia', risk: 0.19, fold: 0.75, annexCost: 30 });

W('srilanka', 'Sri Lanka', 'the President', '0 fragile', 'sabre ally annex strike', 3, 3,
  `Tea, tourists, and a deep-water port that belongs to somebody else now.`,
  S('🏗️', 'Foreclose on the Port', 0, `They borrowed from a rival and could not pay. Offer to take the debt. And the port.`,
    { base: 5, press: -4, congress: -3, courts: -3, auth: 3, cash: 0.3, fun: 2 },
    `You offer to assume a small country debts in exchange for its deepest harbour, which is precisely what you have spent four years accusing a rival power of doing. A reporter points this out. You call the question nasty.`),
  { region: 'asia', risk: 0.26, fold: 0.75, annexCost: 22 });

W('kazakhstan', 'Kazakhstan', 'the President', '1 fragile', 'sabre ally annex', 5, 7,
  `Ninth largest country on Earth. Uranium, oil, and a spare seat at your table.`,
  S('🖋️', 'Add Them to the Accords for a Photograph', 0, `Sign them into a peace framework with a country they were never at war with.`,
    { base: 6, press: -3, congress: -2, auth: 3, fun: 3 },
    `You expand a historic peace agreement by adding a nation that has had normal relations with the other signatory since 1992. The ceremony is magnificent. The word historic is used nine times and is doing an enormous amount of work.`),
  { region: 'asia', risk: 0.24, fold: 0.65, annexCost: 40 });

W('uzbekistan', 'Uzbekistan', 'the President', '1 fragile', 'sabre ally annex', 4, 4,
  `Cotton, gas, and a president who has read your book.`,
  S('🧵', 'Take the Cotton Deal', 0, `A hundred billion in commitments, announced now, delivered over a decade.`,
    { base: 5, press: -3, congress: -2, auth: 3, cash: 0.3, fun: 2 },
    `A country with a GDP smaller than Nebraska commits to a hundred billion dollars of purchases over ten years. You announce it as a hundred billion dollars. The distinction survives roughly one news cycle and is never mentioned again.`),
  { region: 'asia', risk: 0.21, fold: 0.7, annexCost: 26 });

W('tuvalu', 'Tuvalu', 'the Prime Minister', '0 fragile', 'sabre ally annex strike', 0, 1,
  `Eleven thousand people, four metres above sea level, and falling.`,
  S('🌊', 'Buy the Country Before It Sinks', 0, `Make an offer while there is still something above the waterline to buy.`,
    { base: 4, press: -6, street: -5, congress: -3, courts: -2, auth: 1, cash: -0.1, fun: 2 },
    `You offer to purchase a sovereign nation on the explicit grounds that it is going underwater. Their Prime Minister replies that they would rather you simply stopped, which your delegation writes down without understanding.`),
  { region: 'asia', risk: 0.09, fold: 0.9, annexCost: 5 });

W('penguin2', 'the Penguin Territories', 'no one', '0 fragile', 'sabre strike annex', 0, 1,
  `A second uninhabited landmass. Somehow it also got tariffed.`,
  S('🐧', 'Tariff the Penguins Twice', 0, `The first tariff was on the other penguins. These are different penguins.`,
    { base: 5, press: -4, congress: -2, auth: 1, fun: 4 },
    `Trade measures are imposed on a second territory with no people, no economy and no exports, because a spreadsheet had a row for it. A marine biologist gives eleven interviews in one day and enjoys every single one.`),
  { region: 'asia', risk: 0.06, fold: 0.95, annexCost: 4 });

/* ================= THE MIDDLE EAST, THE CAUCASUS AND AFRICA ================= */

W('saudi', 'Saudi Arabia', 'the Crown Prince', '2 fragile', 'sabre ally', 22, 12,
  `An ocean of oil, a very warm handshake, and a chequebook with no floor.`,
  S('⚔️', 'Take the Sword Dance and the Arms Deal', 0, `Four hundred billion in announcements. Dance first, itemise never.`,
    { base: 7, press: -6, congress: -5, courts: -4, auth: 3, cash: 1.8, fun: 3 },
    `You announce the largest arms package in history and dance with a ceremonial sword on state television. Reporters spend two years trying to add the figure up and reach roughly a fifth of it. By then there is a golf tournament.`),
  { region: 'mideast', risk: 0.44, fold: 0.6 });

W('uae', 'the UAE', 'the Sheikh', '1 fragile', 'sabre ally annex', 17, 8,
  `Towers, sovereign wealth, and air conditioning as a philosophy.`,
  S('🏦', 'Let the Sovereign Fund Into the Family Firm', 0, `Two billion, from a state fund, into a business run by your relatives.`,
    { base: 3, press: -8, congress: -8, courts: -6, auth: 1, cash: 2.2, fun: 2 },
    `A foreign government fund places two billion dollars with an investment firm founded four months earlier by a member of your family with no track record whatsoever. Its own advisory board voted against it. It went through anyway.`),
  { region: 'mideast', risk: 0.27, fold: 0.7, annexCost: 60 });

W('israel', 'Israel', 'the Prime Minister', '2 defiant nuke', 'sabre ally strike', 10, 0,
  `A close ally with a long memory and a considerably longer wish list.`,
  S('🏛️', 'Move the Embassy', 0, `Every predecessor promised it and none of them did it. Do it in an afternoon.`,
    { base: 8, press: -5, street: -5, congress: -3, courts: -2, auth: 4, fun: 3 },
    `You do in one signature what six presidents deferred for twenty-two years. Your base is ecstatic, three capitals recall their ambassadors, and the actual building turns out to be a refurbished consulate with a new plaque on it.`),
  { region: 'mideast', fold: 0.25, risk: 0.55 });

W('syria', 'Syria', 'the transitional President', '1 wildcard', 'sabre ally strike regime', 2, 4,
  `A country rebuilding from rubble, under management nobody expected.`,
  S('🤲', 'Lift the Sanctions After One Meeting', 0, `Thirty-four minutes in a room. Announce the end of a decade of sanctions.`,
    { base: 6, press: -3, congress: -5, courts: -3, auth: 3, cash: 0.4, fun: 3 },
    `You end a sanctions regime that took eleven years to build after a single meeting in which, by your own account, you liked the guy. Two of your own agencies learn about it from the wire copy.`),
  { region: 'mideast', fold: 0.55, risk: 0.5 });

W('iraq', 'Iraq', 'the Prime Minister', '1 fragile', 'sabre ally strike invade', 4, 9,
  `Two American wars, a fragile parliament, and an enormous amount of oil.`,
  S('🛢️', 'Keep the Oil', 0, `Say the quiet part on camera. We spent the money. We should take the oil.`,
    { base: 6, press: -6, congress: -5, courts: -6, street: -4, auth: 4, cash: 0.6, fun: 2 },
    `You state, as policy, that a country you invaded should pay you in crude. Every lawyer in the building explains that this is the specific thing the laws of war exist to prevent. You describe them as very weak people.`),
  { region: 'mideast', risk: 0.58, fold: 0.6, bias: -0.1 });

W('jordan', 'Jordan', 'the King', '1 fragile', 'sabre ally', 5, 0,
  `A small kingdom holding a very large amount of everybody else problems.`,
  S('🧳', 'Ask the King to Take Everybody', 0, `Suggest, in the Oval Office, that he simply accept two million more people.`,
    { base: 5, press: -6, street: -5, congress: -4, courts: -3, auth: 2, fun: 1 },
    `You ask a monarch whose country is already a third refugees to absorb a population the size of his capital. He says, carefully, that it is a matter for the region. His face, in the photograph, is the entire foreign policy of the Middle East.`),
  { region: 'mideast', risk: 0.34, fold: 0.7 });

W('lebanon', 'Lebanon', 'the President', '0 fragile', 'sabre ally strike', 2, 1,
  `A functioning state on paper. A car park with a flag in practice.`,
  S('🏗️', 'Promise to Rebuild the Port', 0, `Offer American reconstruction. Mention which construction firms you admire.`,
    { base: 4, press: -5, congress: -5, courts: -4, auth: 2, cash: 0.8, fun: 1 },
    `You pledge to rebuild a devastated harbour and name three contractors in the same breath, two of which have your phone number. The pledge is never funded. The contractors are, briefly, extremely happy.`),
  { region: 'mideast', risk: 0.53, fold: 0.8 });

W('yemen', 'Yemen', 'the Council President', '1 wildcard', 'sabre strike invade', 0, 2,
  `A war nobody can explain and a shipping lane everybody needs.`,
  S('📱', 'Plan the Strike on a Group Chat', 0, `Discuss timings, targets and weather in a consumer messaging app. Add a journalist.`,
    { base: 3, press: -8, congress: -7, courts: -5, street: -4, auth: -2, fun: 4 },
    `Live operational details are discussed in a commercial chat group that, by an administrative miracle, contains the editor of a magazine. Nobody resigns. Everybody involved says it was not classified, in a tone that suggests they know.`),
  { region: 'mideast', fold: 0.4, risk: 0.6 });

W('egypt', 'Egypt', 'the Field Marshal', '2 defiant', 'sabre ally strike', 7, 4,
  `A field marshal, a canal, and forty years of American cheques.`,
  S('🫅', 'Call Him My Favourite Dictator', 0, `Say it out loud, in a room with reporters in it, apparently as a compliment.`,
    { base: 5, press: -6, congress: -4, courts: -3, street: -3, auth: 2, fun: 4 },
    `You summon an allied head of state by calling for your favourite dictator in a room that contains eleven journalists. He does not hear it. They all do. The phrase outlives both of your administrations.`),
  { region: 'mideast', risk: 0.47, fold: 0.35 });

W('libya', 'Libya', 'the interim Prime Minister', '1 wildcard', 'sabre strike regime invade', 0, 6,
  `Two governments, one oilfield, and forty billion frozen somewhere.`,
  S('🧊', 'Offer to Buy the Frozen Billions', 0, `Forty billion in sanctioned assets. Propose a discount and a finder fee.`,
    { base: 4, press: -6, congress: -6, courts: -6, auth: 2, cash: 1.9, fun: 2 },
    `You propose unfreezing a dead regime fortune at a discount, with the difference handled by an intermediary who has been to three of your weddings. The Treasury lawyers write the word no in a memo, in bold, four times.`),
  { region: 'mideast', fold: 0.4, risk: 0.6 });

W('nigeria', 'Nigeria', 'the President', '2 defiant', 'sabre ally strike invade', 6, 7,
  `Africa largest economy, largest population, and largest headache.`,
  S('📯', 'Threaten Invasion Over Religion', 0, `Warn, publicly, that you may go in guns-a-blazing. Use those words.`,
    { base: 7, press: -6, congress: -5, courts: -4, street: -3, auth: 4, fun: 3 },
    `You threaten military action against a country of two hundred and thirty million people in a social media post written at six in the morning. Their government replies with a statement so measured it makes the post sound worse.`),
  { region: 'africa', fold: 0.3, risk: 0.55, bias: -0.15 });

W('kenya', 'Kenya', 'the President', '1 fragile', 'sabre ally strike', 5, 3,
  `Stable, ambitious, and hosting your listening posts for a very modest fee.`,
  S('🍽️', 'Designate Them a Major Ally at Dinner', 0, `Upgrade an entire relationship between courses, without telling anybody first.`,
    { base: 4, press: -2, congress: -3, courts: -1, auth: 3, fun: 2 },
    `You elevate a country to major non-NATO ally status during a state dinner, surprising your own Secretary of State, who learns of it while holding a bread roll. It is, everybody agrees afterwards, a perfectly sensible policy.`),
  { region: 'africa', risk: 0.29, fold: 0.65 });

W('ethiopia', 'Ethiopia', 'the Prime Minister', '2 defiant', 'sabre ally strike', 4, 4,
  `A hundred and twenty million people and the dam that controls the Nile.`,
  S('💥', 'Suggest Somebody Blows Up the Dam', 0, `Muse aloud that a neighbour will probably just destroy it. Say it twice.`,
    { base: 5, press: -7, congress: -6, courts: -4, street: -4, auth: 2, fun: 3 },
    `You publicly speculate that one country will bomb another country infrastructure, as a prediction rather than a threat, which is a distinction that survives exactly none of the translations. Addis Ababa recalls its ambassador the same day.`),
  { region: 'africa', risk: 0.5, fold: 0.3 });

W('southafrica', 'South Africa', 'the President', '2 defiant', 'sabre ally strike', 6, 8,
  `Gold, platinum, grievance, and an excellent constitutional court.`,
  S('📺', 'Ambush Them With a Video in the Oval', 0, `Dim the lights mid-meeting and play a montage you found online.`,
    { base: 7, press: -6, congress: -4, courts: -4, street: -4, auth: 3, fun: 4 },
    `You dim the lights on a visiting head of state and play four minutes of unverified footage on a screen your staff wheeled in earlier. He watches politely, waits for the lights, and answers with facts. The clip does numbers on both continents, for opposite reasons.`),
  { region: 'africa', risk: 0.36, fold: 0.3 });

W('rwanda', 'Rwanda', 'the President', '1 defiant', 'sabre ally regime', 4, 5,
  `Immaculate capital, uncomfortable questions, and a great deal of coltan.`,
  S('⛏️', 'Sign the Minerals-for-Peace Deal', 0, `They stop fighting next door. You get first refusal on what comes out of the ground.`,
    { base: 6, press: -4, congress: -4, courts: -3, auth: 3, cash: 0.9, fun: 2 },
    `A peace agreement is signed whose central provision is a mining annexe. It genuinely stops some of the killing, which is more than the last four attempts managed, and it is impossible to say the words humanitarian and cobalt in the same sentence with a straight face.`),
  { region: 'africa', risk: 0.42, fold: 0.4 });

W('somalia', 'Somalia', 'the President', '1 wildcard', 'sabre strike invade', 0, 2,
  `A coastline, a famine, and a few hundred of your troops nobody voted on.`,
  S('📤', 'Withdraw Everyone by Post', 0, `Order the pull-out in a single message. Do not tell the commanders first.`,
    { base: 5, press: -5, congress: -6, courts: -3, street: -2, auth: 2, cash: 0.2, fun: 2 },
    `Seven hundred personnel learn they are leaving from a public announcement. They are moved next door and flown back in on rotation for two more years at four times the cost, which is described throughout as a full withdrawal.`),
  { region: 'africa', fold: 0.45, risk: 0.6 });

W('drc', 'the DR Congo', 'the President', '1 fragile', 'sabre ally strike', 3, 9,
  `Every battery on Earth starts here, and almost none of the money stays.`,
  S('🔌', 'Cobalt for a Ceasefire', 0, `Broker the peace. Take the concession. Announce them in the same sentence.`,
    { base: 6, press: -4, congress: -4, courts: -4, auth: 4, cash: 1.2, fun: 2 },
    `You end a war and acquire a mineral supply chain in one signing ceremony, which the press release calls historic and your own trade representative calls, off the record, the deal of the century for exactly one of the parties.`),
  { region: 'africa', risk: 0.47, fold: 0.6 });

W('morocco', 'Morocco', 'the King', '1 fragile', 'sabre ally annex', 5, 3,
  `A kingdom with a disputed map and an excellent sense of timing.`,
  S('🗺️', 'Recognise the Map', 0, `Sign away a forty-year territorial dispute in exchange for one handshake elsewhere.`,
    { base: 5, press: -4, congress: -4, courts: -3, auth: 3, fun: 2 },
    `You resolve a forty-five-year sovereignty question by tweet, as the price of an unrelated agreement in another region entirely. It holds. Nobody is happy, which several diplomats insist is the definition of a successful settlement.`),
  { region: 'africa', risk: 0.25, fold: 0.6, annexCost: 24 });

W('tunisia', 'Tunisia', 'the President', '0 fragile', 'sabre ally strike', 3, 2,
  `The one democracy that came out of it, now going the other way.`,
  S('🚤', 'Trade Debt Relief for a Migration Deal', 0, `Pay them to stop the boats. Do not ask what stopping means.`,
    { base: 4, press: -6, courts: -5, congress: -3, street: -3, auth: 3, cash: -0.2, fun: 1 },
    `You wire a struggling government a great deal of money to prevent departures from its coastline, and you take considerable care never to ask a single follow-up question about method. The numbers fall. Everybody stops counting.`),
  { region: 'africa', risk: 0.31, fold: 0.7 });

W('ghana', 'Ghana', 'the President', '0 fragile', 'sabre ally', 3, 2,
  `Stable, gold-rich, and increasingly asked for favours.`,
  S('🛬', 'Ask Them to Take the Deportees', 0, `People from four other countries. Land the plane. Sort the paperwork later.`,
    { base: 4, press: -6, courts: -7, congress: -4, street: -3, auth: 3, fun: 1 },
    `A country agrees to receive deportees who have never been there, from nations it has no treaty with. Two federal judges block it, twice. The flights depart at four in the morning while the third appeal is still being typed.`),
  { region: 'africa', risk: 0.17, fold: 0.75 });

W('zimbabwe', 'Zimbabwe', 'the President', '1 defiant', 'sabre strike regime', 0, 4,
  `Ruined currency, immaculate diamonds, and a sanctions list with a way around it.`,
  S('💎', 'Lift the Sanctions for the Concession', 0, `Sanctions relief, in exchange for a stake nobody will be able to trace.`,
    { base: 3, press: -7, congress: -6, courts: -6, auth: 2, cash: 1.5, fun: 2 },
    `A sanctions designation is quietly lifted six weeks after a diamond concession changes hands through three intermediaries and a company registered above a chip shop in another hemisphere. Nobody can connect the two. Everybody can count.`),
  { region: 'africa', risk: 0.45, fold: 0.35 });

W('azerbaijan', 'Azerbaijan', 'the President', '2 defiant', 'sabre ally strike', 6, 6,
  `Oil, gas, a won war, and a corridor everybody wants.`,
  S('🛣️', 'Name the Peace Corridor After Yourself', 0, `Broker the route. Then put your own name on it, in the treaty text.`,
    { base: 8, press: -4, congress: -3, courts: -2, auth: 4, cash: 0.4, fun: 4 },
    `A transit corridor between two former enemies is formally named after you, in the signed agreement, in perpetuity. It is the single most durable thing your presidency produces and it is, essentially, a road.`),
  { region: 'mideast', risk: 0.48, fold: 0.4 });

W('armenia', 'Armenia', 'the Prime Minister', '0 fragile', 'sabre ally strike', 3, 2,
  `Small, landlocked, out-gunned, and out of options.`,
  S('🕯️', 'Make Them Sign in the Cabinet Room', 0, `Two enemies, one table, your building, your cameras, your framing.`,
    { base: 6, press: -2, congress: -2, auth: 3, fun: 3 },
    `Two governments that have fought three wars sign a framework in your building because you offered the room and neither could afford to refuse the venue. It is a real achievement. You spend the press conference talking about the carpet.`),
  { region: 'mideast', risk: 0.23, fold: 0.75 });

W('georgia2', 'Georgia', 'the Prime Minister', '0 fragile', 'sabre ally strike', 3, 2,
  `A Black Sea democracy sliding sideways, and a permanent naming problem.`,
  S('🍑', 'Confuse It With the State, Repeatedly', 0, `Congratulate them on their peaches and their electoral votes.`,
    { base: 3, press: -4, congress: -2, courts: -1, auth: -1, fun: 3 },
    `You congratulate a sovereign Caucasian republic on carrying itself for you by two points, and thank it for its sixteen electoral votes. Their ambassador accepts the compliment with tremendous grace and asks, gently, for a written copy.`),
  { region: 'mideast', risk: 0.38, fold: 0.8 });

/* ================= THE ORIGINAL TEN =================
   war.js built these ten by hand and saved games key alliances and conquests
   off their ids, so they are not rebuilt here. They are only given the two
   things this file adds: a region for the front-screen filter, and the one
   signature operation that belongs to nobody else. */
const TEN = {
  cathay: ['asia', { fold: 0.05, risk: 0.75, bias: -0.25 },
    S('🚢', 'Blockade the Strait', 140, `Park a carrier group across the shipping lane and call it an exercise.`,
      { base: 7, press: -5, street: -5, congress: -5, courts: -2, auth: 4, cash: -0.4, fun: 4 },
      `Forty per cent of the world container traffic stops for nine days. Every insurer on Earth reprices at once, three economies you had never previously thought about enter recession, and your own ports fill up with ships full of nothing.`)],
  rus: ['europe', { fold: 0.08, risk: 0.7, bias: -0.2 },
    S('🎙️', 'Believe Him Over Your Own Agencies', 0, `Stand beside him and say you find the denial very compelling.`,
      { base: 6, congress: -7, courts: -3, press: -6, street: -5, auth: 2, fun: 3 },
      `You side with a foreign strongman against your own intelligence services, at a podium, on camera, in front of the world press. It is quoted for a decade. It is the clip they open the documentary with.`)],
  iran: ['mideast', { fold: 0.2, risk: 0.6 },
    S('📄', 'Tear Up the Deal, Live', 0, `Rip the agreement on camera and call it the worst deal ever signed.`,
      { base: 8, press: -4, street: -3, congress: -4, courts: -2, auth: 3, fun: 3 },
      `The inspectors leave within the week. The centrifuges do not. You have traded verified restraint for an unverified grievance and one genuinely excellent rally clip, which is a trade you would make again.`)],
  hermit: ['asia', { fold: 0.25, risk: 0.7 },
    S('🚸', 'Meet Him at the Border', 0, `Step across the line for a handshake and a photograph. No agenda.`,
      { base: 9, press: -2, congress: -3, courts: -1, auth: 2, fun: 4 },
      `You become the first sitting President to stand on that soil. Nothing whatsoever is agreed, nothing is signed, and nothing is dismantled. The photograph is, undeniably, extraordinary.`)],
  ukrania: ['europe', { fold: 0.5, risk: 0.45, bias: 0.05 },
    S('☎️', 'Withhold the Package for a Favour', 0, `Freeze the aid until one specific announcement is made about somebody.`,
      { base: 4, congress: -9, courts: -7, press: -6, street: -3, auth: 3, fun: 2 },
      `The hold is discovered by an official whose entire job is writing things down. Everything that happens to you for the following two years traces back to one phone call and one very careful memorandum.`)],
  greenland: ['americas', { fold: 0.7, risk: 0.35 },
    S('📣', 'Announce the Purchase Anyway', 0, `Declare the acquisition complete before anybody has agreed to sell.`,
      { base: 7, press: -5, congress: -4, courts: -3, auth: 3, cash: -0.5, fun: 3 },
      `You announce ownership of an island that is not for sale, belonging to an ally who was never asked. Fifty-six thousand residents learn of their new nationality from television, in their second language.`)],
  northland: ['americas', { fold: 0.45, risk: 0.3 },
    S('🗳️', 'Call the Referendum', 60, `Put statehood to a vote up there, funded quietly from down here.`,
      { base: 8, press: -6, congress: -6, courts: -5, street: -3, auth: 4, cash: -0.6, fun: 3 },
      `The referendum fails by sixty points and permanently realigns their politics around not being you. A party fourteen points behind wins outright, campaigning on nothing else whatsoever, and thanks you by name in the victory speech.`)],
  baldoro: ['americas', { fold: 0.75, risk: 0.2 },
    S('🌊', 'Retake the Canal', 90, `Send the Corps of Engineers and a legal opinion nobody asked for.`,
      { base: 7, press: -5, street: -4, congress: -5, courts: -6, auth: 5, cash: 0.4, fun: 4 },
      `You reclaim a waterway handed over by treaty a quarter of a century ago. Shipping insurers reprice overnight, which is the only part of the operation anybody in the room actually understands.`)],
  qadira: ['mideast', { fold: 0.8, risk: 0.33 },
    S('🛩️', 'Accept the Aircraft', 0, `Take the wide-body as a gift and log it as a library donation.`,
      { base: 5, press: -8, congress: -7, courts: -6, auth: 2, cash: 0.9, fun: 3 },
      `Four hundred million dollars of aircraft changes hands and is recorded as a contribution to a library that does not yet exist and has no site. You fly on it within the month. It needs two billion in retrofitting.`)],
  penguin: ['asia', { fold: 0.95, risk: 0.08 },
    S('📃', 'Declare War on the Penguins', 0, `A formal declaration of hostilities against an uninhabited territory.`,
      { base: 6, press: -3, congress: -2, auth: 1, fun: 4 },
      `Congress is formally notified of hostilities against a landmass with no human population. The notification is filed, stamped, entered in the record, and never spoken of again by any of the eleven people who signed it.`)]
};

/* ---------- merge ---------- */
(AD.WAR_TARGETS || []).forEach(t => {
  const p = TEN[t.id];
  if (!p) return;
  t.region = p[0];
  Object.keys(p[1]).forEach(k => { t[k] = p[1][k]; });
  t.sig = p[2];
});
OUT.forEach(row => {
  if (AD.WAR_TARGETS.some(t => t.id === row.id)) return;   // never shadow an original
  AD.WAR_TARGETS.push(row);
});


/* Regions, in the order the front-screen filter shows them. */
/* Labels are kept SHORT because the tab strip sits on a 375px phone and a
   two-word region title wraps to three lines there. */
AD.WAR_REGIONS = [
  ['all', 'All 100'],
  ['europe', 'Europe'],
  ['americas', 'Americas'],
  ['asia', 'Asia'],
  ['mideast', 'Mid East'],
  ['africa', 'Africa']
];

})();
