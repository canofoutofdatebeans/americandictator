/* ============================================================
   AMERICAN DICTATOR, econmoves.js
   THE ECONOMY, ONE COUNTRY AT A TIME.

   The Economy room shipped a hundred nations and three buttons:
   impose, raise, lift. Every outcome came from one of SEVEN shared
   `kind` profiles, so a hundred countries produced seven answers and
   the room felt like a spreadsheet with a flag on it.

   This file gives every one of the hundred three things of its own:

     good    what they actually sell you. The shared tariff line reads
             it back, so even "Impose Tariff" is about avocados, or
             chips, or gas, or rum, depending on who you hit.

     bite    THE RETALIATION. Written per country and replacing the
             seven shared profiles: what THEY do when the tariff
             matures. Germany does not answer like Guatemala.

     moves   TWO bespoke economic operations that exist only against
             that country. This is where the room stops being a list.

   EVERY ACTION HERE TOUCHES THE REST OF THE GAME. That is the point
   of AD.econImpact (economy.js), which every move routes through:

     the five meters + Authority   the usual
     RELATIONS with that country   which then leaks into Congress,
                                   the Press, the Base and the Street
                                   every single month via
                                   AD.diplomacyTick, AND hardens or
                                   softens that country's own bite
     the MARKET                    an immediate shock to the S&P and
                                   to the President's personal
                                   business index
     the TREASURY                  which is what pays for the War Room
     BOREDOM                       a trade war is television; a swap
                                   line is paperwork

   So there is no such thing as a purely economic decision in here.
   Squeeze Taiwan and the Diplomacy room gets worse, the market drops,
   the Treasury gains, and four meters bleed for the rest of the term.

   Country names are real, everything else is invented. Loaded after
   economy.js and nations.js, which own the merge target.
   ============================================================ */

(function () {

/* M(icon, label, blurb, eff, extra, res)
     eff    meters: base/congress/courts/press/street/auth/cash
     extra  rel   relations delta with this country (the diplomacy hook)
            purse Treasury $B (positive = revenue, negative = cost)
            mkt   immediate market shock, in per cent
            fun   Boredometer charge (positive = less bored) */
function M (icon, label, blurb, eff, extra, res) {
  return { icon, label, blurb, eff, res,
           rel: extra.rel || 0, purse: extra.purse || 0,
           mkt: extra.mkt || 0, fun: (extra.fun == null ? 2 : extra.fun) };
}

/* E(id, region, good, biteEff, biteLine, ...moves) */
const DATA = {};
function E (id, region, good, biteEff, biteLine) {
  DATA[id] = { region, good,
               bite: { eff: biteEff, line: biteLine },
               moves: Array.prototype.slice.call(arguments, 5) };
}

/* ================= EUROPE ================= */

E('germany', 'europe', 'cars, machine tools and quiet exasperation',
  { street: -6, base: -7, press: -4, cash: -0.3, mkt: -4, purse: -28 },
  `they retaliate with surgical precision on bourbon, motorcycles and one specific brand of jeans, all made in states you carried`,
  M('\u{1F697}', 'Threaten the Car Tariff', 'Twenty-five per cent on every vehicle they ship. Announce it, do not do it.',
    { base: 6, press: -3, congress: -3, auth: 3 }, { rel: -14, purse: 6, mkt: -3 },
    `Three German carmakers announce American plants within a fortnight. Two of them were already building the plants. All three send you the ribbon-cutting invitation.`),
  M('\u{1F6E2}\u{FE0F}', 'Force Them to Buy Your Gas', 'They can have the pipeline or the alliance. Not both.',
    { base: 5, press: -2, congress: -2, auth: 3, cash: 0.2 }, { rel: -9, purse: 26, mkt: 2 },
    `They cancel the eastern pipeline and buy American liquefied gas at nearly double the price, and every energy executive who donated to you sends a note that is almost tasteful.`));

E('uk', 'europe', 'financial services, gin and a very old grudge',
  { street: -4, base: -6, press: -5, cash: -0.2, mkt: -3, purse: -22 },
  `they say nothing at all, extremely loudly, and quietly sign a trade deal with somebody else on the same afternoon`,
  M('\u{1F5DE}\u{FE0F}', 'Dangle the Free Trade Deal', 'Promise the deal. Never quite sign it. Renew the promise annually.',
    { base: 4, press: 2, congress: 2, auth: 1 }, { rel: 6, purse: 4, mkt: 1 },
    `The greatest trade deal in history is announced for a fourth consecutive year. The text remains, as ever, at an advanced stage of preparation.`),
  M('\u{1F48A}', 'Demand They Open the Health Service', 'Your pharmaceutical donors want the pricing. Put it on the table.',
    { base: 3, press: -6, street: -5, congress: -4, auth: 2, cash: 0.4 }, { rel: -16, purse: 12, mkt: 1 },
    `You ask a country to put its most beloved institution into a trade negotiation. Their entire political spectrum unites against you within six hours, which has not happened there since 1940.`));

E('france', 'europe', 'wine, aircraft parts and an attitude',
  { street: -5, base: -6, press: -4, cash: -0.3, mkt: -3, purse: -24 },
  `they tariff your whiskey and your soybeans and then hold a press conference about cultural sovereignty that is, annoyingly, quite good`,
  M('\u{1F377}', 'Tariff the Wine', 'A hundred per cent on champagne. Say ours is better.',
    { base: 5, press: -3, street: -2, auth: 2 }, { rel: -13, purse: 9, mkt: -1 },
    `American importers, restaurants and sommeliers, none of whom are French, absorb the entire cost. A bottle that cost forty dollars costs eighty, and Paris does not notice.`),
  M('\u{1F4F1}', 'Kill the Digital Tax', 'They want to tax your tech giants. Threaten everything they export.',
    { base: 4, press: -4, congress: -3, courts: -2, auth: 3, cash: 0.3 }, { rel: -11, purse: 7, mkt: 2 },
    `Four American technology companies avoid a three per cent levy. In exchange the alliance spends a year discussing cheese, publicly, at the highest level.`));

E('italy', 'europe', 'olive oil, luxury goods and eleven governments',
  { street: -5, base: -6, press: -3, cash: -0.2, mkt: -2, purse: -18 },
  `they retaliate on almonds and denim and then invite you to dinner, which somehow costs you more`,
  M('\u{1F9C0}', 'Tariff the Parmesan', 'A hard rate on cheese, wine and handbags. The base will not feel it.',
    { base: 5, press: -3, street: -3, auth: 2 }, { rel: -12, purse: 8, mkt: -1 },
    `Italian food gets expensive in American restaurants and the base, which eats Italian food, discovers the concept of tariff incidence at a table for four.`),
  M('\u{1F6A2}', 'Buy the Port Back from Beijing', 'A rival power owns a Mediterranean harbour. Outbid them.',
    { base: 3, press: 3, congress: 3, auth: 2 }, { rel: 9, purse: -34, mkt: 1 },
    `You spend thirty-four billion dollars of public money to own a dock, which is either the most far-sighted move of the term or a very large boat park, depending entirely on the next twenty years.`));

E('spain', 'europe', 'olives, solar panels and a shrug',
  { street: -4, base: -5, press: -3, cash: -0.2, mkt: -2, purse: -16 },
  `they take it to a trade tribunal, win, and then remind you about it annually for a decade`,
  M('\u{1FAD2}', 'Tariff the Olives', 'A ruling nobody understands. A rate nobody expected.',
    { base: 4, press: -2, street: -2, auth: 2 }, { rel: -10, purse: 6, mkt: -1 },
    `A trade case brought by two American growers reshapes an industry that employs a quarter of a million Spaniards, and the two growers are, on inspection, one family.`),
  M('\u{2600}\u{FE0F}', 'Block the Solar Imports', 'Cheap panels are killing your donors. Make them expensive.',
    { base: 5, street: -4, press: -4, congress: -2, auth: 3 }, { rel: -8, purse: 11, mkt: -2 },
    `The cost of putting a solar panel on an American roof rises by forty per cent, which protects two thousand manufacturing jobs and ends about thirty thousand installation ones.`));

E('netherlands', 'europe', 'the machine that makes every chip on Earth',
  { street: -6, base: -5, press: -4, congress: -3, cash: -0.4, mkt: -7, purse: -26 },
  `they slow the servicing contracts, and every chip fabrication plant on your soil quietly discovers what a single point of failure feels like`,
  M('\u{1F52C}', 'Ban the Machine Exports', 'Stop them selling the lithography tools east. All of them.',
    { base: 4, press: -3, congress: -4, courts: -2, auth: 4 }, { rel: -12, purse: -8, mkt: -6 },
    `You cost a Dutch company a third of its revenue to slow a rival by eighteen months. Both things happen exactly as predicted and the company never fully forgives you.`),
  M('\u{1F3E6}', 'Close the Tax Sandwich', 'Their structures park a trillion of your corporate profit. End it.',
    { base: 4, press: 5, congress: -6, courts: 3, auth: 2, cash: -0.5 }, { rel: -6, purse: 40, mkt: -3 },
    `Forty billion comes home in one quarter and every large donor you have calls the same week. It is the most fiscally responsible thing you do and it costs you more friends than any of the wars.`));

E('belgium', 'europe', 'chocolate, pharmaceuticals and committee minutes',
  { street: -3, base: -4, press: -3, cash: -0.1, mkt: -2, purse: -12 },
  `they file a complaint through three institutions, two of which you have never heard of, and win in all three`,
  M('\u{1F36B}', 'Tariff the Chocolate', 'A specific rate on a specific pleasure. Purely to make a point.',
    { base: 4, press: -2, street: -2, auth: 2 }, { rel: -9, purse: 4, mkt: -1 },
    `A tariff on chocolate is announced eleven days before Valentine's Day by an administration that did not check the calendar, and the coverage writes itself for a fortnight.`),
  M('\u{1F4CA}', 'Bill Them for the Headquarters', 'Everybody meets in their city. Send a bill for the privilege.',
    { base: 5, press: -4, congress: -3, auth: 3, cash: 0.2 }, { rel: -13, purse: 9, mkt: 0 },
    `You invoice a host country for hosting. Their reply is a single page listing what the hosting has cost them since 1949, and it is longer than your invoice.`));

E('switzerland', 'europe', 'watches, drugs and everybody else money',
  { street: -3, base: -4, press: -4, congress: -3, cash: -0.5, mkt: -4, purse: -20 },
  `nothing visible happens, and then over eighteen months an enormous amount of money quietly stops being anywhere you can reach it`,
  M('\u{1F48A}', 'Cap the Drug Prices at Their Level', 'They pay a third of what you do. Force the same price at home.',
    { base: 8, street: 6, press: 4, congress: -7, courts: -4, auth: 3, cash: -0.6 }, { rel: -10, purse: -14, mkt: -5 },
    `The price of insulin in your country falls by half, the pharmaceutical lobby spends a hundred million against you, and it is the single most popular thing you do in four years.`),
  M('\u{1F5C4}\u{FE0F}', 'Demand the Account Names', 'Threaten the banks until the filing cabinet opens.',
    { base: 3, press: 3, congress: -6, courts: 2, auth: 3, cash: -0.3 }, { rel: -15, purse: 24, mkt: -2 },
    `Twenty-four billion in unpaid tax comes home. So does a list of names, and the awkwardness of the list is measured in how many people on it have attended a fundraiser of yours.`));

E('sweden', 'europe', 'flat-pack furniture and unshakeable calm',
  { street: -3, base: -4, press: -3, cash: -0.1, mkt: -2, purse: -13 },
  `they respond with a fourteen-page evidence-based position paper, which is the most aggressive thing anybody has ever done to you`,
  M('\u{1F6E9}\u{FE0F}', 'Force the Fighter Jet Deal', 'They want to sell their own aircraft. Insist they buy yours.',
    { base: 5, press: -2, congress: 2, auth: 3, cash: 0.3 }, { rel: -8, purse: 18, mkt: 2 },
    `A country with its own excellent aerospace industry buys forty American jets, and their own industry lays off six hundred people, and their newspapers print both facts side by side.`),
  M('\u{1F4B3}', 'Attack the Cashless Economy', 'They barely use paper money. Call it surveillance. Loudly.',
    { base: 4, press: -3, street: 1, auth: 1 }, { rel: -6, purse: 0, mkt: 0 },
    `You warn thirty thousand rally-goers about a Scandinavian payments system none of them will ever use, and it lands harder than anything else you say that night.`));

E('norway', 'europe', 'oil, salmon and a sovereign fund the size of a planet',
  { street: -3, base: -4, press: -3, cash: -0.2, mkt: -3, purse: -15 },
  `their fund rebalances out of three American sectors on a Tuesday morning and does not issue a statement about it`,
  M('\u{1F41F}', 'Tariff the Salmon', 'A rate on farmed fish. To protect Alaska. Allegedly.',
    { base: 4, press: -2, street: -2, auth: 2 }, { rel: -9, purse: 5, mkt: -1 },
    `The price of a supermarket salmon fillet rises by two dollars forty, which the base notices, and Alaskan landings rise by almost nothing at all, which the base does not.`),
  M('\u{1F4B0}', 'Court the Sovereign Fund', 'A trillion looking for a home. Offer it American infrastructure.',
    { base: 2, press: 4, congress: 4, auth: 2, cash: 0.3 }, { rel: 11, purse: 32, mkt: 4 },
    `The largest pool of money on Earth agrees to fund American ports and grids, on their terms, with their governance rules, which your own team quietly describes as adult supervision.`));

E('ireland', 'europe', 'the tax address of every company you own stock in',
  { street: -3, base: -4, press: -3, congress: -5, cash: -0.4, mkt: -4, purse: -19 },
  `nothing happens for two quarters and then three American companies redomicile somewhere even harder to tax, and stay there`,
  M('\u{1F4B8}', 'Repatriate the Profits', 'A one-off rate to bring the offshore trillion home.',
    { base: 6, press: 3, congress: -5, courts: 1, auth: 3, cash: 0.4 }, { rel: -14, purse: 55, mkt: 3 },
    `Six hundred billion comes home and almost all of it goes into share buybacks rather than the factories you promised, which everybody in the room knew on the day you signed it.`),
  M('\u{1F9EA}', 'Onshore the Drug Plants', 'Ninety per cent of your medicine is made there. Threaten it home.',
    { base: 5, street: 3, press: -3, congress: -3, auth: 3 }, { rel: -12, purse: -18, mkt: -3 },
    `You threaten a tariff on the country that manufactures your antibiotics, and your own health secretary spends the following week explaining supply chains to you using a whiteboard.`));

E('austria', 'europe', 'skiing, crystal and a lingering identity problem',
  { street: -2, base: -3, press: -2, cash: -0.1, mkt: -1, purse: -9 },
  `they respond by correcting your geography in the communiqué, in the footnotes, three separate times`,
  M('\u{1F3BF}', 'Tariff the Ski Equipment', 'Nobody in your base owns any. Free money.',
    { base: 3, press: -2, auth: 2 }, { rel: -8, purse: 3, mkt: 0 },
    `A tariff aimed at an alpine luxury industry lands almost entirely on Colorado resorts, which is the third time this has happened to you and the third time nobody mentioned it beforehand.`),
  M('\u{1F3E6}', 'Chase the Old Money', 'Their private banks hold accounts nobody has audited since the 1940s.',
    { base: 2, press: 4, courts: 2, congress: -3, auth: 2 }, { rel: -10, purse: 13, mkt: -1 },
    `An audit of accounts older than most countries produces thirteen billion, several restitution cases, and one file that three governments ask you, politely and separately, to leave alone.`));

E('poland', 'europe', 'coal, soldiers and genuine enthusiasm for you',
  { street: -3, base: -4, press: -2, cash: -0.1, mkt: -2, purse: -11 },
  `they do not retaliate at all, they just look hurt, in public, at length, and it plays badly everywhere`,
  M('\u{2622}\u{FE0F}', 'Sell Them the Reactors', 'Six American nuclear plants. Financed by them, built by you.',
    { base: 6, press: 3, congress: 4, street: 2, auth: 3, cash: 0.4 }, { rel: 14, purse: 42, mkt: 5 },
    `Forty-two billion of American engineering work lands in four states you need, and the plants will be finished about nine years after anybody involved leaves office.`),
  M('\u{1F6E2}\u{FE0F}', 'Make Them Your Gas Terminal', 'Route the whole region energy through their coast. Yours.',
    { base: 5, press: 2, congress: 3, auth: 3 }, { rel: 11, purse: 27, mkt: 3 },
    `A single Baltic terminal turns a country that was buying its heat from its historic enemy into a customer of yours, permanently, which is the rare occasion where the money and the strategy point the same way.`));

E('russia', 'europe', 'gas, grain and a very cold shoulder',
  { street: -6, base: -5, press: -4, congress: -4, cash: -0.3, mkt: -5, purse: -30 },
  `they do not retaliate economically at all, they simply do something else, somewhere else, that costs you far more than a tariff ever could`,
  M('\u{1F91D}', 'Quietly Ease the Sanctions', 'A technical exemption. On a Friday. For a friend of a friend.',
    { base: 4, press: -7, congress: -8, courts: -6, auth: 2, cash: 1.1 }, { rel: 18, purse: 9, mkt: 2 },
    `An oligarch aluminium empire comes off the list six weeks before a plant is announced in a state you lost by four points. Both facts are public. Neither is ever connected in a courtroom.`),
  M('\u{1F6E2}\u{FE0F}', 'Cap the Oil Price', 'Not an embargo. A ceiling. Enforced through the insurers.',
    { base: 3, press: 4, congress: 5, street: 2, auth: 3 }, { rel: -17, purse: 14, mkt: -2 },
    `You choke a war economy through the London insurance market rather than a blockade, which works, and which is impossible to put on a hat.`));

E('turkey', 'europe', 'steel, drones and a foot in every door',
  { street: -4, base: -5, press: -3, cash: -0.3, mkt: -4, purse: -21 },
  `their currency collapses, which hurts them enormously and hurts three American banks almost as much, and then they buy the Russian missiles anyway`,
  M('\u{1FA96}', 'Kick Them Off the Jet Programme', 'They bought the wrong air defence. Take the aircraft back.',
    { base: 5, press: -2, congress: 3, courts: -1, auth: 4 }, { rel: -19, purse: -12, mkt: -1 },
    `You remove a NATO ally from a fighter programme it helped build, and eight hundred parts suppliers in that country find replacement customers within a year, none of them yours.`),
  M('\u{1F4B1}', 'Double the Steel Tariff by Post', 'Announce it at midnight. Watch their currency do the rest.',
    { base: 6, press: -4, congress: -3, courts: -2, auth: 4 }, { rel: -22, purse: 8, mkt: -4 },
    `A single overnight message costs a G20 economy a fifth of its currency by lunchtime, and an American pastor is released from a prison there eleven days later, which you regard as proof of method.`));

E('ukraine', 'europe', 'grain, titanium and an unbelievable amount of gratitude',
  { street: -4, base: -3, press: -6, congress: -7, cash: -0.2, mkt: -2, purse: -14 },
  `there is no retaliation, only a very quiet European rearmament programme that your defence industry will spend a decade being locked out of`,
  M('\u{26CF}\u{FE0F}', 'Take Half the Minerals', 'Sign the rare earths deal. Fifty per cent. In perpetuity.',
    { base: 6, press: -5, congress: -5, courts: -4, auth: 4, cash: 0.5 }, { rel: -12, purse: 30, mkt: 2 },
    `A country under invasion signs away half of what is under its soil in exchange for continuing to receive weapons it was already promised, and both sides call it a partnership on camera.`),
  M('\u{1F33E}', 'Underwrite the Grain Corridor', 'Insure the ships yourself. Feed four continents. Take the credit.',
    { base: 2, press: 6, congress: 5, street: 4, auth: 2 }, { rel: 15, purse: -22, mkt: 3 },
    `Wheat prices fall across Africa and the Middle East because an American insurance guarantee made a shipping lane viable, and roughly nobody at home ever finds out you did it.`));

E('denmark', 'europe', 'pork, wind turbines and an island you keep mentioning',
  { street: -3, base: -4, press: -3, cash: -0.1, mkt: -2, purse: -12 },
  `they cancel a wind farm contract with an American firm, cite commercial reasons, and let everybody draw their own conclusions`,
  M('\u{1F4A8}', 'Kill the Offshore Wind Contracts', 'Cancel the permits. Say the turbines cause problems.',
    { base: 5, street: -4, press: -5, courts: -3, congress: -2, auth: 3 }, { rel: -14, purse: -9, mkt: -3 },
    `Eleven billion of already-financed projects stop overnight, four thousand construction jobs go, and you tell a rally that the turbines were driving the whales insane.`),
  M('\u{1F5FA}\u{FE0F}', 'Offer for Greenland, In Writing', 'Not a joke this time. A number, a lawyer, and a deadline.',
    { base: 7, press: -6, congress: -5, courts: -3, auth: 3 }, { rel: -24, purse: -6, mkt: -1 },
    `A formal written offer for the territory of a founding ally arrives at a foreign ministry that has to invent a filing category for it. The refusal is one sentence and is framed in the lobby.`));

E('finland', 'europe', 'icebreakers, forestry and a very long border',
  { street: -2, base: -3, press: -2, cash: -0.1, mkt: -1, purse: -9 },
  `they simply keep building icebreakers, which you need, and gently raise the price by exactly what your tariff cost them`,
  M('\u{1F6A2}', 'Buy the Icebreaker Fleet', 'You have two. They build the best. Order eleven.',
    { base: 5, press: 3, congress: 4, auth: 3 }, { rel: 13, purse: -27, mkt: 2 },
    `You buy an Arctic capability your own yards stopped being able to build in 1978, from a country of five and a half million people, and it is unambiguously the correct decision.`),
  M('\u{1F332}', 'Blame Their Forests for Your Fires', 'Announce a forestry partnership nobody asked for.',
    { base: 3, press: -3, street: -1, auth: 1 }, { rel: -5, purse: -2, mkt: 0 },
    `A joint forest management initiative is announced with a country whose forests are wet, cold and nothing like yours. It produces one report. The report is in Finnish.`));

E('greece', 'europe', 'shipping, feta and a great deal of history',
  { street: -3, base: -3, press: -2, cash: -0.1, mkt: -2, purse: -10 },
  `their shipping registry, which moves a fifth of world trade, becomes noticeably slower at approving American-flagged charters`,
  M('\u{2693}', 'Lease the Whole Harbour', 'A hundred years, one signature, one Mediterranean port.',
    { base: 5, press: -2, congress: 2, courts: -2, auth: 4 }, { rel: 7, purse: -19, mkt: 1 },
    `You secure a naval position that three empires fought over, by cheque, and the only opposition comes from a fishing cooperative that turns out to be extremely well organised.`),
  M('\u{1F6A2}', 'Squeeze the Shipowners', 'Sanction the tankers moving somebody else oil.',
    { base: 4, press: 2, congress: 3, auth: 3 }, { rel: -11, purse: 7, mkt: -2 },
    `Forty tankers owned by nine Greek families are designated in one morning. Eleven of them change flag by Thursday, which tells you precisely how much of world shipping is a filing cabinet.`));

E('portugal', 'europe', 'cork, wine and a mid-Atlantic runway',
  { street: -2, base: -3, press: -2, cash: -0.1, mkt: -1, purse: -8 },
  `they say nothing and begin, very slowly, to discuss the basing agreement renewal with a tone you have not heard before`,
  M('\u{1F6EC}', 'Renew the Azores Lease Hard', 'Halve the rent. Remind them who pays for the alliance.',
    { base: 4, press: -3, congress: -2, auth: 3 }, { rel: -12, purse: 6, mkt: 0 },
    `You save four hundred million a year on a runway that has refuelled every American operation since 1943, and a very old friendship acquires an invoice attached to it.`),
  M('\u{1F52C}', 'Fund the Lithium Mine', 'Europe biggest deposit is under their hills. Get there first.',
    { base: 3, press: -2, street: -1, congress: 2, auth: 2, cash: 0.2 }, { rel: 8, purse: -15, mkt: 2 },
    `American money opens a battery-metal mine in a country that would rather it were somewhere else, and three villages become the most photographed places in the Iberian peninsula.`));

E('hungary', 'europe', 'cars, paprika and a governing philosophy you admire',
  { street: -2, base: -3, press: -2, cash: -0.1, mkt: -1, purse: -8 },
  `they do not retaliate, they praise you, at length, which your own press then plays back next to the list of what their government has dismantled`,
  M('\u{1F4B1}', 'Give Them the Tax Treaty Back', 'Restore the arrangement your own Treasury cancelled.',
    { base: 4, press: -5, congress: -5, courts: -3, auth: 2, cash: 0.3 }, { rel: 16, purse: -7, mkt: 1 },
    `A tax treaty terminated on technical grounds is restored on political ones, and the technical grounds, which were real, are never mentioned again by anybody.`),
  M('\u{1F3ED}', 'Route the Battery Plants There', 'Cheap labour, no unions, no questions. Your donors will love it.',
    { base: 4, street: -5, press: -4, congress: -3, auth: 2, cash: 0.5 }, { rel: 12, purse: 9, mkt: 2 },
    `Three battery plants that were going to Ohio go to central Europe instead, on your recommendation, and you find out at the same time as Ohio does.`));

E('poland2', 'europe', 'ports, transit and a shared border with the problem',
  { street: -2, base: -3, press: -3, congress: -3, cash: -0.1, mkt: -1, purse: -7 },
  `three small governments quietly begin buying their next generation of air defence from somebody who is not you`,
  M('\u{1F50C}', 'Fund the Grid Disconnection', 'Cut them off the old eastern power system. Permanently.',
    { base: 3, press: 4, congress: 5, auth: 3 }, { rel: 17, purse: -13, mkt: 1 },
    `Three countries leave an electricity grid controlled from a hostile capital in a single synchronised weekend, financed by you, and the switchover takes eleven seconds.`),
  M('\u{1F4B3}', 'Invoice Them for the Air Policing', 'Somebody has to fly those patrols. Put a price on it.',
    { base: 5, press: -4, congress: -4, street: -2, auth: 3 }, { rel: -18, purse: 5, mkt: -1 },
    `You bill three of the most exposed democracies in Europe for their own airspace, and the bill is smaller than the cost of the press conference announcing it.`));

E('serbia', 'europe', 'raspberries, minerals and development land',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -6 },
  `nothing whatsoever happens, because they were never trading with you in any meaningful volume, and the base is told it was a triumph`,
  M('\u{1F3D7}\u{FE0F}', 'License the Family Name to the Site', 'A ruin with a view. A ninety-nine-year lease. A brand.',
    { base: 3, press: -7, congress: -6, courts: -6, auth: 1, cash: 1.5 }, { rel: 14, purse: 0, mkt: 1 },
    `A protected national monument is quietly de-listed six weeks before a lease is signed with a company bearing your family name, and the de-listing paperwork is nine lines long.`),
  M('\u{26CF}\u{FE0F}', 'Take the Lithium Concession', 'Europe largest deposit, and a government that needs friends.',
    { base: 4, press: -3, street: -2, congress: 2, auth: 3, cash: 0.3 }, { rel: 11, purse: -17, mkt: 2 },
    `You win a mining concession that thirty thousand people marched against, and the protests continue every Saturday for the rest of your term in a city you will never visit.`));

E('belarus', 'europe', 'potash, tractors and political prisoners',
  { street: -2, base: -2, press: -3, congress: -3, cash: -0.1, mkt: -1, purse: -5 },
  `they shrug, sell the fertiliser east at a discount, and the world price of everything you eat goes up by four per cent anyway`,
  M('\u{1F33F}', 'Lift the Potash Sanctions', 'Fertiliser prices are killing your farmers. Quietly relent.',
    { base: 4, street: 4, press: -5, congress: -5, courts: -3, auth: 2 }, { rel: 15, purse: 11, mkt: 3 },
    `The price of fertiliser falls, your farm states exhale, and a dictatorship gets its hard currency back, and all three of those sentences are the same sentence.`),
  M('\u{1F513}', 'Trade Sanctions for Prisoners', 'Fifty people out. One commodity exemption in.',
    { base: 3, press: 3, congress: -3, courts: -2, auth: 3 }, { rel: 9, purse: 4, mkt: 1 },
    `Fifty people walk out of a prison because of a fertiliser licence, which is a genuinely good outcome achieved by a method nobody involved wants described in detail.`));

E('iceland', 'europe', 'fish, aluminium and geothermal heat',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -4 },
  `they smelt the aluminium for somebody else instead, and your can manufacturers notice within a quarter`,
  M('\u{1F41F}', 'Tariff the Cod', 'A rate on white fish. For New England. Allegedly.',
    { base: 3, press: -2, street: -2, auth: 2 }, { rel: -9, purse: 2, mkt: 0 },
    `The price of a fish supper rises across the eastern seaboard and the New England fleet, which has fourteen boats left, reports no measurable benefit whatsoever.`),
  M('\u{1F30B}', 'Buy the Geothermal Technology', 'They heat an entire country from the ground. Licence it.',
    { base: 2, press: 4, street: 3, congress: 3, auth: 1 }, { rel: 12, purse: -8, mkt: 2 },
    `You licence a heating technology from a country smaller than Wichita and it goes on to warm four American cities, which nobody credits you for, because it works.`));

E('luxembourg', 'europe', 'a stock exchange and eleven thousand letterboxes',
  { street: -1, base: -2, press: -3, congress: -4, cash: -0.3, mkt: -2, purse: -9 },
  `the structures simply move to another jurisdiction over a long weekend, and your Treasury loses the visibility it had`,
  M('\u{1F4C2}', 'Force the Beneficial Ownership Registry', 'Make them publish who actually owns what.',
    { base: 2, press: 6, courts: 4, congress: -7, auth: 2, cash: -0.7 }, { rel: -13, purse: 21, mkt: -2 },
    `The registry opens and holds for nine hours before somebody notices three names on it that appear on your own donor list, and one on your family Christmas card.`),
  M('\u{1F6F0}\u{FE0F}', 'Buy the Satellite Slots', 'A grand duchy quietly owns half the orbital positions. Acquire them.',
    { base: 3, press: -2, congress: 2, auth: 3, cash: 0.2 }, { rel: 8, purse: -23, mkt: 2 },
    `You acquire orbital real estate from a country you could drive across in ninety minutes, and it is the single most strategically sensible purchase of the term.`));

E('malta', 'europe', 'a flag of convenience and a passport catalogue',
  { street: -1, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -3 },
  `four hundred sanctioned tankers reflag there in a fortnight and your entire enforcement effort becomes a paperwork exercise`,
  M('\u{1F6A2}', 'Deflag the Shadow Fleet', 'Sanction every tanker on their registry. All of them.',
    { base: 4, press: 3, congress: 3, auth: 4 }, { rel: -16, purse: 6, mkt: -2 },
    `You take four hundred ships off a registry in one action, and three hundred and sixty of them are back on a different one before the press release has finished loading.`),
  M('\u{1F6C2}', 'Copy the Passport Scheme', 'They sell citizenship. Announce an American version at a premium.',
    { base: 5, press: -6, congress: -6, courts: -5, auth: 2, cash: 1.2 }, { rel: 6, purse: 18, mkt: 1 },
    `You launch a five-million-dollar residency card modelled on a scheme you spent two years calling a security disaster, and the first eleven buyers are, on inspection, from countries you have banned.`));

E('vatican', 'europe', 'nothing at all, which is the whole point',
  { street: -5, base: -3, press: -6, courts: -2, cash: 0, mkt: 0, purse: 0 },
  `there is no economic retaliation, because there is no economy, only a two-sentence homily that follows you into every obituary`,
  M('\u{1F3E6}', 'Audit the Bank', 'The smallest bank in the world, and the strangest ledger.',
    { base: 2, press: 2, courts: 2, congress: -2, auth: 2 }, { rel: -12, purse: 3, mkt: 0 },
    `An American audit of a hundred-acre sovereign bank produces four hundred pages, three referrals and a formal note from a monsignor that is, in its way, devastating.`),
  M('\u{1F54A}\u{FE0F}', 'Ask for the Blessing on the Budget', 'Have the Pontiff endorse your tax bill. Publicly.',
    { base: -2, press: -6, street: -6, congress: -3, auth: -2 }, { rel: -18, purse: 0, mkt: -1, fun: 1 },
    `You ask for a moral endorsement of a tax bill and receive, instead, a widely translated reflection on the treatment of the poor that your opponents put on billboards within a week.`));

E('sanmarino', 'europe', 'stamps, and a tourist tax on a hill',
  { street: -1, base: -1, press: -1, cash: 0, mkt: 0, purse: -1 },
  `both of their heads of state issue a joint statement of regret, which is twice as many as anybody else manages`,
  M('\u{1F4EE}', 'Tariff the Stamps', 'Their principal export is postage. Impose a rate.',
    { base: 3, press: -2, auth: 1 }, { rel: -8, purse: 1, mkt: 0, fun: 4 },
    `The world's fifth-smallest country is placed under American trade measures over commemorative postage, and their entire trade delegation, who is one woman, handles it with enormous grace.`),
  M('\u{1F3F0}', 'Open a Consulate on the Mountain', 'Nine hundred staff. Sixty-one square kilometres. Why not.',
    { base: 2, press: -3, congress: -3, auth: 1 }, { rel: 10, purse: -4, mkt: 0, fun: 3 },
    `You open a diplomatic mission with more personnel than the host country has civil servants, in a republic that has been fine without one since the year 301.`));

E('czechia', 'europe', 'cars, beer and precision machinery',
  { street: -3, base: -3, press: -2, cash: -0.1, mkt: -2, purse: -10 },
  `they redirect an entire automotive supply chain westward over three quarters and never mention it once`,
  M('\u{2622}\u{FE0F}', 'Win the Reactor Contract', 'They are choosing a nuclear supplier. Make it not be Russia.',
    { base: 5, press: 3, congress: 4, auth: 3, cash: 0.3 }, { rel: 13, purse: 26, mkt: 4 },
    `An American consortium wins a contract that was going east, which is worth twenty-six billion and about four thousand jobs, and it is announced on a Friday and covered by nobody.`),
  M('\u{1F37A}', 'Tariff the Beer', 'A rate on imported lager, to protect domestic brewing.',
    { base: 3, press: -2, street: -3, auth: 2 }, { rel: -9, purse: 3, mkt: -1 },
    `A tariff on European lager raises the price of a bar round across your own base by about eighty cents, which is the single most efficient way ever devised to make somebody notice a trade policy.`));

E('romania', 'europe', 'grain, gas and a Black Sea coastline',
  { street: -2, base: -3, press: -2, cash: -0.1, mkt: -1, purse: -8 },
  `they quietly slow the transit approvals for your equipment heading east, and nobody can prove it is deliberate`,
  M('\u{1F6E2}\u{FE0F}', 'Develop the Black Sea Gas', 'Their offshore field, your drilling technology, everybody wins.',
    { base: 4, press: 2, congress: 3, auth: 3, cash: 0.3 }, { rel: 12, purse: 23, mkt: 3 },
    `An American consortium unlocks a gas field that ends a region dependence on a hostile supplier, and the ribbon is cut by four prime ministers who agree on nothing else.`),
  M('\u{1F5F3}\u{FE0F}', 'Fund the Friendly Party', 'Their election was annulled once already. Pick a side, generously.',
    { base: 5, press: -6, congress: -5, courts: -6, auth: 4 }, { rel: -8, purse: -6, mkt: -2 },
    `Money moves into a foreign election through four intermediaries and one foundation. It works. A memo describing how it worked is later found on a domestic strategist laptop.`));

/* ================= THE AMERICAS ================= */

E('canada', 'americas', 'lumber, energy, aluminium and everything else quietly',
  { street: -8, base: -9, press: -5, congress: -3, cash: -0.4, mkt: -5, purse: -34 },
  `they target bourbon, orange juice and maple syrup with the precision of people who have studied your electoral map, and then their citizens simply stop crossing the border, for years`,
  M('\u{1F332}', 'Tariff the Lumber, Again', 'Forty years of the same dispute. Lose it again, louder.',
    { base: 5, street: -5, press: -3, courts: -2, auth: 3 }, { rel: -14, purse: 11, mkt: -2 },
    `The price of framing an American house rises by nine thousand dollars, the housing starts number falls, and the tribunal rules against you for the seventh consecutive time.`),
  M('\u{1F52B}', 'Threaten the Whole Trade Pact', 'Tear up the agreement you personally negotiated. Say it was terrible.',
    { base: 7, street: -6, congress: -6, press: -5, courts: -3, auth: 4 }, { rel: -22, purse: -14, mkt: -6 },
    `You threaten to destroy a treaty you signed, praised and called the best deal in history, and the clip of you calling it the best deal in history is played immediately afterwards, every single time.`));

E('greenland', 'americas', 'rare earths, fish and fifty-six thousand people',
  { street: -2, base: -3, press: -4, cash: -0.1, mkt: -1, purse: -4 },
  `they sign a minerals partnership with the European Union instead, on better terms, and post the signing photograph`,
  M('\u{26CF}\u{FE0F}', 'Buy the Mineral Rights Instead', 'Not the island. The contents. Considerably cheaper.',
    { base: 4, press: -2, congress: 2, auth: 3, cash: 0.3 }, { rel: 6, purse: -21, mkt: 2 },
    `You get the rare earths without owning the ice, which is what everybody advised in the first place, and which makes for a much worse rally line and a much better decade.`),
  M('\u{1F6A2}', 'Open the Northwest Passage', 'The ice is going. Claim the shipping lane before anybody else does.',
    { base: 5, press: -4, street: -3, congress: -2, auth: 4 }, { rel: -9, purse: 16, mkt: 2 },
    `You assert navigation rights through a passage that exists because of a phenomenon your own administration declines to name, and the press conference contains a truly heroic amount of not saying it.`));

E('mexico', 'americas', 'avocados, car parts and half of your refrigerator',
  { street: -9, base: -8, press: -4, congress: -3, cash: -0.5, mkt: -6, purse: -32 },
  `they wave the tomatoes through customs very slowly indeed, and every supermarket south of Nashville runs out of everything at once`,
  M('\u{1F951}', 'Tariff the Avocados', 'Twenty-five per cent on produce, announced in February.',
    { base: 6, street: -6, press: -3, auth: 3 }, { rel: -13, purse: 14, mkt: -3 },
    `Guacamole becomes a luxury good four days before the largest football game of the year, and the base learns about tariff incidence at a checkout in Texas.`),
  M('\u{1F4B5}', 'Tax the Remittances', 'Skim the money workers send home. Not a tax. A fee.',
    { base: 7, street: -7, courts: -4, press: -4, congress: -3, auth: 4 }, { rel: -19, purse: 22, mkt: -2 },
    `You take a slice of sixty billion dollars sent home by people who already paid income tax on it, and about a third of that money immediately starts travelling by bus instead.`));

E('brazil', 'americas', 'soy, beef, coffee and orange juice',
  { street: -7, base: -6, press: -4, cash: -0.3, mkt: -4, purse: -26 },
  `they sell the entire soy crop east instead, permanently, and your farm states never get that market back, not in your lifetime`,
  M('\u{2696}\u{FE0F}', 'Tariff Them Over a Trial', 'Their court is prosecuting an ally. Punish two hundred million people.',
    { base: 6, press: -6, congress: -5, courts: -6, street: -4, auth: 4 }, { rel: -26, purse: 12, mkt: -4 },
    `A fifty per cent rate is imposed on an entire continent-sized economy because one man there is on trial, and their president polling rises eleven points inside a fortnight.`),
  M('\u{2615}', 'Exempt the Coffee, Quietly', 'The rate is hurting diners in your own states. Carve it out at midnight.',
    { base: -4, street: 5, press: 3, congress: 2, auth: -1 }, { rel: 8, purse: -6, mkt: 2 },
    `A Friday-night exemption for coffee, beef and orange juice arrives eleven weeks after the tariff and is announced by nobody, and breakfast quietly gets cheaper again.`));

E('argentina', 'americas', 'beef, lithium and a currency crisis on a subscription',
  { street: -4, base: -4, press: -3, cash: -0.2, mkt: -3, purse: -14 },
  `they default, again, and this time some of what they default on is yours`,
  M('\u{1FA99}', 'Open the Swap Line', 'Twenty billion for an ideological soulmate. Arranged over a weekend.',
    { base: 5, press: -5, congress: -8, courts: -2, auth: 2, cash: 0.4 }, { rel: 22, purse: -20, mkt: 3 },
    `You lend twenty billion dollars to a government your own farmers compete against, and the following week they sell a record soy harvest into the market your farmers were counting on.`),
  M('\u{1F404}', 'Open the Beef Quota', 'Quadruple their access. Feed the cities. Enrage the ranchers.',
    { base: -5, street: 5, press: 3, congress: -4, auth: -1 }, { rel: 16, purse: 4, mkt: 1 },
    `The price of ground beef falls by a dollar a pound in every American city and rises, politically, to the top of every cattle association agenda in the mountain west by the following morning.`));

E('chile', 'americas', 'copper, lithium and very good wine',
  { street: -4, base: -4, press: -3, cash: -0.2, mkt: -4, purse: -15 },
  `the copper price spikes, which raises the cost of every wire, motor and building in your own country within two months`,
  M('\u{1F50B}', 'Lock Up the Lithium', 'Long-term offtake on the salt flats. Before anybody else gets there.',
    { base: 4, press: -3, congress: 2, courts: -2, auth: 3, cash: 0.4 }, { rel: 7, purse: -25, mkt: 3 },
    `You secure two decades of battery metal, one Andean valley gets considerably drier, and both of those are somebody else problem in somebody else decade.`),
  M('\u{1F304}', 'Tariff the Copper', 'Fifty per cent, to bring smelting home. Announce it before checking.',
    { base: 5, street: -6, press: -4, congress: -3, auth: 3 }, { rel: -15, purse: 13, mkt: -6 },
    `You put fifty per cent on the metal every American factory needs, in order to protect three smelters, two of which closed in 2003 and one of which is a museum.`));

E('peru', 'americas', 'copper, blueberries and somebody else megaport',
  { street: -3, base: -3, press: -2, cash: -0.1, mkt: -2, purse: -10 },
  `the new deep-water port opens on schedule anyway and starts shipping straight across the Pacific, cutting you out entirely`,
  M('\u{1F6A2}', 'Tariff the Port You Did Not Build', 'A rival built a megaport on your continent. Punish the landlord.',
    { base: 4, press: -3, congress: -3, auth: 3 }, { rel: -14, purse: 7, mkt: -2 },
    `You sanction a country for accepting an investment you declined to make, and the port opens anyway, on time, with an extremely cheerful ambassador who is not yours.`),
  M('\u{1FAD0}', 'Buy the Whole Blueberry Crop', 'Out-contract everybody. Your supermarkets, their farms, one signature.',
    { base: 2, street: 3, press: 2, congress: 2, auth: 1 }, { rel: 12, purse: -9, mkt: 1 },
    `You guarantee a harvest and American berries are cheap all winter, which is the kind of thing that decides an election and the kind of thing nobody ever campaigns on.`));

E('colombia', 'americas', 'coffee, flowers and a very long partnership',
  { street: -4, base: -4, press: -3, cash: -0.2, mkt: -2, purse: -12 },
  `they let a cooperation agreement lapse quietly, and within a year your own agencies are reading about the region from newspapers`,
  M('\u{1F4B8}', 'Freeze the Aid Over One Plane', 'They refused a deportation flight. Suspend everything, before lunch.',
    { base: 6, press: -4, street: -3, congress: -3, courts: -3, auth: 4 }, { rel: -21, purse: 9, mkt: -2 },
    `A sixty-year alliance goes to the brink and back inside nine hours over one aircraft carrying one hundred and four people, and both sides declare complete victory.`),
  M('\u{1F490}', 'Guarantee the Flower Corridor', 'Eighty per cent of your roses land in Miami. Underwrite it.',
    { base: -2, street: 3, press: 3, congress: 3, auth: 1 }, { rel: 14, purse: -7, mkt: 1 },
    `Valentine's Day is saved by a logistics guarantee signed in November, and the only people who ever find out are eleven thousand cargo handlers and one very relieved florist association.`));

E('venezuela', 'americas', 'the largest oil reserves on Earth, and nothing else',
  { street: -5, base: -4, press: -3, cash: -0.2, mkt: -4, purse: -13 },
  `the crude goes east at a discount, your Gulf refineries, which are built specifically for that heavy grade, sit idle, and gasoline goes up anyway`,
  M('\u{1F6E2}\u{FE0F}', 'License One Company Back In', 'A single carve-out for a single oil major. Purely technical.',
    { base: 3, press: -6, congress: -6, courts: -4, auth: 2, cash: 0.9 }, { rel: 17, purse: 15, mkt: 3 },
    `One American oil company receives an exemption from a sanctions regime built to remove the government it is now paying, and the licence is four pages long and signed on a Saturday.`),
  M('\u{1F6AB}', 'Sanction the Shadow Tankers', 'Designate every vessel moving their crude. All ninety of them.',
    { base: 5, press: 2, congress: 2, street: -3, auth: 4 }, { rel: -20, purse: 6, mkt: -3 },
    `Ninety tankers are designated in a morning. Sixty of them reflag by Friday, eleven simply switch off their transponders, and the oil arrives exactly where it was always going.`));

E('cuba', 'americas', 'cigars, rum, doctors and sixty years of argument',
  { street: -3, base: -3, press: -3, cash: -0.1, mkt: -1, purse: -6 },
  `nothing measurable happens, because there has not been a trade relationship to damage since 1962, and the base is told it was devastating`,
  M('\u{1F6AC}', 'Re-Embargo Everything', 'Reverse the thaw. All of it. By memorandum. On a Friday.',
    { base: 6, press: -4, street: -3, congress: -3, auth: 3 }, { rel: -24, purse: 3, mkt: -1 },
    `Four painstaking years of opening close in a single afternoon. Havana absorbs it with the weary competence of a government that has outlasted eleven of your predecessors.`),
  M('\u{1F3E8}', 'Licence a Resort on the Beach', 'The embargo has exceptions. Find one shaped like a hotel.',
    { base: 2, press: -7, congress: -6, courts: -6, auth: 1, cash: 1.3 }, { rel: 15, purse: 2, mkt: 1 },
    `A licence is granted for a beachfront development to a company that shares three directors with a company that shares a surname with you, and the file is closed in eleven working days.`));

E('panama', 'americas', 'a canal, a flag registry and forty thousand ships',
  { street: -4, base: -4, press: -3, cash: -0.2, mkt: -5, purse: -18 },
  `the transit fees for American-flagged vessels are reviewed, upward, and every shipping insurer on Earth reprices the same afternoon`,
  M('\u{1F6A2}', 'Demand Free Transit for Your Navy', 'You built it. You want the ships through for nothing.',
    { base: 6, press: -4, congress: -4, courts: -4, auth: 4 }, { rel: -23, purse: 4, mkt: -3 },
    `You demand free passage through a waterway handed over by a treaty your own country signed and ratified, and the Panamanian foreign ministry replies by simply publishing the treaty.`),
  M('\u{1F5C4}\u{FE0F}', 'Force the Port Sale', 'A rival power operates both ends. Make them sell to a friend.',
    { base: 5, press: -3, congress: 2, courts: -3, auth: 4, cash: 0.4 }, { rel: -12, purse: -19, mkt: 2 },
    `Two container terminals change hands for nineteen billion dollars in a transaction brokered by people who all know each other, and the strategic logic is real and so is the finder fee.`));

E('panama2', 'americas', 'the transit fee, which is the entire business',
  { street: -3, base: -3, press: -2, cash: -0.1, mkt: -4, purse: -14 },
  `they raise the slot auction reserve price, and the cost of everything on a shelf in your country goes up by a fraction of a cent, four hundred million times`,
  M('\u{1F4CF}', 'Audit the Locks', 'Send accountants, not marines. Announce the findings before reading them.',
    { base: 5, press: -3, congress: -3, courts: -2, auth: 3, cash: 0.3 }, { rel: -13, purse: 8, mkt: -1 },
    `Your auditors report that the canal is well run, profitable and entirely legal. You announce that the findings are devastating, and nobody reads past the headline, which was the plan.`),
  M('\u{1F4A7}', 'Fund the New Reservoir', 'Drought is closing the locks. Pay for the water. Own the goodwill.',
    { base: -2, press: 4, congress: 4, street: 2, auth: 2 }, { rel: 19, purse: -16, mkt: 3 },
    `You fund the water supply of the most important shipping lane on Earth, which secures your access for forty years and produces precisely one photograph of a lake.`));

E('guatemala', 'americas', 'coffee, bananas and a very long queue',
  { street: -3, base: -3, press: -3, cash: -0.1, mkt: -1, purse: -6 },
  `they simply stop accepting the flights, and the whole arrangement, which was never written down properly, evaporates`,
  M('\u{1F4DD}', 'Pay Them to Take the Asylum Seekers', 'A safe third country. It is not safe. It is third.',
    { base: 5, press: -6, courts: -7, congress: -4, street: -3, auth: 4 }, { rel: 11, purse: -8, mkt: 0 },
    `A country with no functioning asylum system agrees to host asylum seekers from countries it does not border. Three federal judges read the agreement the next morning with visible difficulty.`),
  M('\u{1F34C}', 'Protect the Banana Company', 'An American firm wants its land dispute resolved. Lean on them.',
    { base: 3, press: -5, street: -4, courts: -4, congress: -3, auth: 3, cash: 0.6 }, { rel: -12, purse: 5, mkt: 1 },
    `An American fruit company gets a favourable ruling in a foreign land case after a phone call, which is a sentence that has caused four coups on that isthmus and everybody in the room knows it.`));

E('haiti', 'americas', 'garments, mangoes and almost nothing else left',
  { street: -3, base: -2, press: -4, cash: -0.1, mkt: -1, purse: -3 },
  `there is no retaliation, there is only a further collapse, and then a migration surge that lands on your own coastline within two seasons`,
  M('\u{1F4C4}', 'End the Protected Status', 'Half a million people, deportable at midnight, by signature.',
    { base: 6, press: -8, street: -8, courts: -7, congress: -5, auth: 4 }, { rel: -18, purse: 2, mkt: -2 },
    `Half a million people who have worked and paid tax in your country for a decade become deportable overnight. Their employers, mostly in states you won, write to you jointly and are not answered.`),
  M('\u{1F455}', 'Save the Garment Preference', 'One trade programme is the entire formal economy. Renew it.',
    { base: -3, press: 5, street: 4, congress: 3, courts: 2, auth: 1 }, { rel: 16, purse: -4, mkt: 1 },
    `You renew a trade preference that keeps thirty thousand people in wages, at a cost to your Treasury of four billion, and it is the least reported decision of your entire administration.`));

E('elsalvador', 'americas', 'coffee, remittances and forty thousand prison beds',
  { street: -2, base: -2, press: -3, cash: -0.1, mkt: -1, purse: -4 },
  `they keep the men you sent and stop answering the phone about them, which turns out to be the worst possible outcome for you`,
  M('\u{1F512}', 'Rent the Mega-Prison', 'Six million a year. They will hold anybody you send. No questions.',
    { base: 8, press: -7, courts: -9, congress: -6, street: -4, auth: 6 }, { rel: 21, purse: -6, mkt: -1 },
    `You subcontract incarceration to a foreign strongman with forty thousand beds and no interest in paperwork. A judge orders one man returned, and the government explains that it no longer has custody of him, which is true.`),
  M('\u{20BF}', 'Bless the Bitcoin Experiment', 'They made a volatile asset legal tender. Endorse it. Warmly.',
    { base: 4, press: -4, congress: -4, courts: -2, auth: 1, cash: 0.7 }, { rel: 14, purse: 3, mkt: 2 },
    `You endorse a national currency experiment that your own Treasury has described in writing as a systemic risk, and a wallet connected to your family gains eleven per cent that week.`));

E('nicaragua', 'americas', 'coffee, gold and a family business with a flag',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -4 },
  `they nationalise the American-owned gold mine within a month and put out a statement thanking you for the clarity`,
  M('\u{1F3C5}', 'Congratulate Him on the Result', 'Ninety-eight per cent. Send warm public congratulations.',
    { base: 5, press: -6, congress: -5, courts: -4, street: -3, auth: 3 }, { rel: 18, purse: 2, mkt: 0 },
    `You congratulate a man who jailed all seven of his opponents before polling day, and your own State Department quietly deletes the fraud statement it had already drafted.`),
  M('\u{26CF}\u{FE0F}', 'Sanction the Gold', 'Their entire hard currency comes out of one mine. Close it.',
    { base: 4, press: 3, congress: 3, street: -2, auth: 3 }, { rel: -22, purse: 4, mkt: -1 },
    `You cut off a dictatorship gold revenue, which works, and which also ends four thousand jobs in the poorest province in the country, and both of those facts are in the same memo.`));

E('bahamas', 'americas', 'sun, rum, and a great deal of other people money',
  { street: -2, base: -2, press: -3, congress: -3, cash: -0.2, mkt: -2, purse: -5 },
  `the offshore structures relocate to a different island over a bank holiday weekend and your Treasury loses sight of them entirely`,
  M('\u{1F3DD}\u{FE0F}', 'Licence the Island Next to the Resort', 'Not policy. An acquisition. Somehow charged to the government.',
    { base: 3, press: -7, congress: -6, courts: -6, auth: 1, cash: 1.6 }, { rel: 9, purse: -7, mkt: 1 },
    `A private island changes hands in a transaction that is either a national security asset or a nine-hole extension, depending entirely on which of your two lawyers is speaking that day.`),
  M('\u{1F5C3}\u{FE0F}', 'Force Open the Offshore Registry', 'Make them publish who owns the companies. All of them.',
    { base: 2, press: 5, courts: 4, congress: -6, auth: 2, cash: -0.8 }, { rel: -15, purse: 17, mkt: -2 },
    `Seventeen billion in unpaid tax comes home and the published list of owners turns out to contain two members of your own cabinet, which the press notices at approximately the same moment you do.`));

/* ================= ASIA AND THE PACIFIC ================= */

E('china', 'asia', 'everything in your house, and the medicine in your cabinet',
  { street: -9, base: -8, press: -5, congress: -4, cash: -0.6, mkt: -9, purse: -48 },
  `they buy their soybeans from Brazil instead, permanently, and target the retaliation state by state with a precision that suggests somebody there has studied your electoral college harder than you have`,
  M('\u{1F9F2}', 'Cut Off the Rare Earths Fight', 'They control ninety per cent of the processing. Try to break it.',
    { base: 5, press: -3, congress: 3, street: -4, courts: -2, auth: 4, cash: -0.4 }, { rel: -24, purse: -30, mkt: -7 },
    `You spend thirty billion trying to build in four years a refining industry they spent thirty years perfecting, and in the meantime every magnet, motor and missile you make still comes through them.`),
  M('\u{1F4F1}', 'Sell Them the Chips Anyway', 'Reverse your own export ban for a fee. Fifteen per cent of revenue.',
    { base: 3, press: -6, congress: -7, courts: -5, auth: 2, cash: 1.2 }, { rel: 19, purse: 26, mkt: 5 },
    `You take a cut of the sale of advanced processors to a strategic rival, as a condition of licensing the sale, which several constitutional lawyers describe as an export tax and everybody else describes as something shorter.`));

E('japan', 'asia', 'cars, machine tools and immaculate manners',
  { street: -6, base: -6, press: -4, congress: -3, cash: -0.4, mkt: -5, purse: -30 },
  `they do not retaliate at all, they simply stop buying your Treasury bonds for one quiet quarter, and your borrowing costs move more than any tariff could have`,
  M('\u{1F3ED}', 'Take the Investment Pledge', 'Five hundred and fifty billion, announced. Directed by you.',
    { base: 8, press: -4, congress: -3, courts: -3, auth: 4, cash: 0.4 }, { rel: -7, purse: 55, mkt: 6 },
    `An ally commits half a trillion dollars to projects you personally select, which is either the greatest deal in the history of trade or a headline number attached to a memorandum, and it will be nine years before anybody can tell which.`),
  M('\u{1F697}', 'Reopen the 1980s Car Fight', 'Say they flood you with cars and buy none of yours.',
    { base: 5, press: -3, street: -3, congress: -2, auth: 3 }, { rel: -15, purse: 9, mkt: -3 },
    `A grievance from 1987 is delivered as breaking news. Their automakers, who employ a hundred and ten thousand Americans in states you carried, are baffled and then quietly, expensively furious.`));

E('india', 'asia', 'generic medicine, software and a billion consumers',
  { street: -6, base: -5, press: -4, cash: -0.4, mkt: -5, purse: -28 },
  `they tariff your almonds, your apples and your motorcycles, and then quietly go on buying discounted oil from exactly the country you asked them not to`,
  M('\u{1F48A}', 'Tariff the Generic Drugs', 'Half your prescriptions come from there. Do it anyway.',
    { base: 4, street: -8, press: -6, courts: -3, congress: -4, auth: 3 }, { rel: -18, purse: 15, mkt: -4 },
    `The price of nine of the ten most prescribed medicines in your country rises within a quarter, and your own health department writes you a memo containing the phrase avoidable deaths.`),
  M('\u{1F6E2}\u{FE0F}', 'Punish Them for the Discounted Oil', 'An extra twenty-five per cent for buying from the wrong people.',
    { base: 6, press: -4, congress: -3, street: -3, auth: 4 }, { rel: -25, purse: 18, mkt: -3 },
    `You penalise a country of one and a half billion people for buying cheap crude, and within a month they buy slightly more of it, from the same place, at a slightly larger discount.`));

E('skorea', 'asia', 'ships, chips, cars and your entire phone',
  { street: -5, base: -5, press: -4, cash: -0.3, mkt: -5, purse: -26 },
  `they slow-walk the shipbuilding partnership you badly need, and your own naval yards, which cannot build a frigate on time, notice within a year`,
  M('\u{1F6A2}', 'Buy Their Shipbuilding', 'They build a warship in half the time. Bring the yards here.',
    { base: 6, street: 5, press: 3, congress: 4, auth: 3, cash: 0.3 }, { rel: 14, purse: -21, mkt: 4 },
    `Korean shipyards begin building American hulls in Philadelphia, which is the most useful industrial policy of your term and takes eleven seconds of the evening news.`),
  M('\u{1F4B0}', 'Quintuple the Garrison Bill', 'Multiply the existing figure by five. Do not explain the arithmetic.',
    { base: 6, press: -4, congress: -4, courts: -1, auth: 4, cash: 0.3 }, { rel: -20, purse: 12, mkt: -2 },
    `You quintuple the bill for an American garrison on the doorstep of a nuclear state using a number nobody in the Pentagon recognises, and Seoul negotiates for eighteen months and settles at the old figure plus inflation.`));

E('australia', 'asia', 'iron ore, beef and unshakeable loyalty',
  { street: -4, base: -5, press: -4, cash: -0.2, mkt: -3, purse: -18 },
  `they say nothing, do nothing, and then sign a critical minerals agreement with somebody else, and the somebody else is not who you would like`,
  M('\u{26CF}\u{FE0F}', 'Sign the Critical Minerals Pact', 'They have the gallium and the rare earths. Lock it in for a decade.',
    { base: 4, press: 4, congress: 5, auth: 3, cash: 0.3 }, { rel: 17, purse: -18, mkt: 5 },
    `You secure a decade of the metals that make every semiconductor and every guided weapon, from an ally who would probably have given them to you for free if anybody had asked politely.`),
  M('\u{1F41F}', 'Tariff the Steel of Your Closest Ally', 'They run a trade deficit with you. Tariff them regardless.',
    { base: 5, press: -5, congress: -4, street: -2, auth: 3 }, { rel: -19, purse: 7, mkt: -2 },
    `You penalise one of the handful of countries on Earth that buys more from you than it sells you, and their trade minister sends a one-page letter containing only the actual figures.`));

E('indonesia', 'asia', 'nickel, palm oil and seventeen thousand islands',
  { street: -4, base: -4, press: -3, cash: -0.2, mkt: -3, purse: -16 },
  `they ban the export of raw nickel entirely, which triples the cost of every battery you make and doubles the value of everything they refine`,
  M('\u{1F50B}', 'Cut the Nickel Deal', 'Every battery needs it. They have most of it. Sign for twenty years.',
    { base: 4, press: -2, congress: 2, street: 2, auth: 3, cash: 0.3 }, { rel: 15, purse: -24, mkt: 4 },
    `You secure two decades of battery metal from a country that until recently you could not reliably locate on a map, and the deal is signed the same week a resort licence with your surname on it clears planning.`),
  M('\u{1F334}', 'Ban the Palm Oil', 'Deforestation, allegedly. Also your own soy growers asked.',
    { base: 4, press: 2, street: -3, congress: -2, auth: 3 }, { rel: -17, purse: 9, mkt: -2 },
    `You ban an import on environmental grounds at the direct request of the domestic industry that competes with it, and both the environmental case and the lobbying are entirely real.`));

E('taiwan', 'asia', 'the chips inside literally everything',
  { street: -7, base: -6, press: -5, congress: -4, cash: -0.5, mkt: -11, purse: -22 },
  `nothing at all happens for six weeks, and then a single fabrication plant reschedules one production run, and the price of every device on Earth moves`,
  M('\u{1F3ED}', 'Force the Fabs to Arizona', 'Move the most valuable industry on Earth. Onto your soil.',
    { base: 7, street: 4, press: -3, congress: 3, courts: -2, auth: 4, cash: 0.4 }, { rel: -9, purse: -40, mkt: 6 },
    `Forty billion in subsidy moves three plants and about eight per cent of the capacity, and the other ninety-two per cent stays exactly where it was, on an island, ninety miles from a very large navy.`),
  M('\u{1F5E3}\u{FE0F}', 'Accuse Them of Stealing the Business', 'Say on camera that they took an industry from you.',
    { base: 5, press: -5, congress: -5, street: -3, courts: -2, auth: 2 }, { rel: -27, purse: 4, mkt: -8 },
    `You accuse the one democracy whose survival depends on your guarantee of theft, in an election year, and their market drops four per cent in a morning while a very large government to the west reads the transcript twice.`));

E('thailand', 'asia', 'rice, rubber and an enormous amount of hospitality',
  { street: -3, base: -3, press: -2, cash: -0.1, mkt: -2, purse: -11 },
  `they pivot their entire export strategy toward the regional bloc you refused to join, and it works, and they never come back`,
  M('\u{1F35A}', 'Tariff the Rice', 'Protect two thousand Arkansas growers. Charge everybody else.',
    { base: 4, street: -4, press: -3, congress: -2, auth: 2 }, { rel: -13, purse: 8, mkt: -1 },
    `The price of rice in every American supermarket rises to protect a domestic crop that supplies about a fifth of demand, and two thousand growers are delighted and three hundred million people pay for it.`),
  M('\u{1F91D}', 'Broker Their Border Ceasefire', 'Two neighbours are shooting. Mention tariffs eleven times.',
    { base: 6, press: 4, congress: 3, auth: 3 }, { rel: 18, purse: 0, mkt: 1 },
    `Two governments stop firing after a call in which you mention trade rates eleven times and peace twice, and both credit you effusively, having correctly identified this as the cheapest concession available.`));

E('nkorea', 'asia', 'coal, missiles and a rather limited catalogue',
  { street: -2, base: -2, press: -3, cash: 0, mkt: -1, purse: -2 },
  `there is no retaliation of any economic kind, and instead something is tested, over water, on a Sunday, at four in the morning your time`,
  M('\u{1F3D6}\u{FE0F}', 'Pitch Him the Beachfront', 'Show him a property video in the meeting. An actual video.',
    { base: 6, press: -4, congress: -4, courts: -2, auth: 2, cash: 0.3 }, { rel: 16, purse: 0, mkt: 1, fun: 5 },
    `You play a four-minute property sizzle reel to a nuclear-armed hereditary dictator, on an iPad, with a soundtrack, and describe his coastline as having tremendous condo potential. He watches all of it.`),
  M('\u{1F6A2}', 'Interdict the Ship-to-Ship Transfers', 'Their entire economy is forty tankers meeting at night.',
    { base: 4, press: 2, congress: 3, auth: 4 }, { rel: -19, purse: 3, mkt: -1 },
    `You board and detain the transfers that keep a sanctioned economy fuelled, which works about a third of the time, and the other two thirds are recorded by satellite and filed and nothing further happens.`));

E('vietnam', 'asia', 'furniture, textiles and the factory everybody moved to',
  { street: -5, base: -4, press: -3, cash: -0.3, mkt: -4, purse: -19 },
  `the factories that left China for Vietnam simply leave Vietnam for somewhere else, and none of them come to you, not one`,
  M('\u{1F4E6}', 'Hit the Transshipment Rate', 'Forty per cent on anything that is really Chinese with a new label.',
    { base: 6, press: -3, congress: -2, street: -4, auth: 4 }, { rel: -18, purse: 16, mkt: -3 },
    `You impose a punitive rate on goods that pass through, and the paperwork required to prove a sofa is genuinely Vietnamese runs to nine pages and is completed, from now on, nine million times a year.`),
  M('\u{26F3}', 'Approve the Resort Permit', 'A one-and-a-half-billion-dollar development. Cleared in a fortnight.',
    { base: 3, press: -6, congress: -6, courts: -5, auth: 1, cash: 1.7 }, { rel: 20, purse: 2, mkt: 2 },
    `A single-party state clears a permit in fourteen days that takes anybody else eleven years, for a development bearing your family name, in the same month its tariff rate is under review.`));

E('philippines', 'asia', 'call centres, nurses and a contested sea',
  { street: -4, base: -3, press: -3, cash: -0.2, mkt: -2, purse: -12 },
  `they review the basing agreement, out loud, in public, and every planner in your Pacific command has a very bad month`,
  M('\u{1FA7A}', 'Recruit Their Nurses Wholesale', 'Your hospitals are short. Take twenty thousand of theirs.',
    { base: 3, street: 5, press: 3, congress: 2, courts: -2, auth: 2 }, { rel: -9, purse: -5, mkt: 2 },
    `Twenty thousand nurses arrive and your emergency departments get measurably better, and eleven provincial hospitals in the Philippines get measurably worse, which nobody at the signing mentions.`),
  M('\u{1F6A2}', 'Pay for the Coast Guard Fleet', 'They are being rammed weekly. Fund the hulls.',
    { base: 3, press: 3, congress: 4, auth: 4 }, { rel: 21, purse: -14, mkt: 1 },
    `You fund a small navy for the price of one of your own destroyers, and it changes the balance in the most contested water on the planet, and it is covered by nobody at all.`));

E('singapore', 'asia', 'refining, shipping and the world entrepot',
  { street: -3, base: -3, press: -3, cash: -0.2, mkt: -4, purse: -14 },
  `they say something extremely polite about the rules-based order that is quoted approvingly in forty capitals and functions as a public dismantling of your entire position`,
  M('\u{1F5A5}\u{FE0F}', 'Chase the Smuggled Chips', 'Half your banned processors go through their port. Audit it.',
    { base: 3, press: 2, congress: 3, courts: 2, auth: 3 }, { rel: -11, purse: 6, mkt: -2 },
    `An audit finds that a shipping hub the size of a city has been the route for a great many prohibited processors, and the resulting enforcement drive relocates the trade to a different hub in eleven days.`),
  M('\u{1F3E6}', 'Make It Your Regional Treasury Hub', 'Anchor the whole Asian dollar business there. Formally.',
    { base: 1, press: 3, congress: 4, auth: 2, cash: 0.3 }, { rel: 16, purse: 19, mkt: 4 },
    `You entrench the dollar in Asian trade settlement through one small island, which is worth more to American power than three carrier groups and is understood by roughly nine people.`));

E('malaysia', 'asia', 'palm oil, semiconductors and a signature on the tarmac',
  { street: -3, base: -3, press: -2, cash: -0.2, mkt: -3, purse: -13 },
  `they route the chip packaging business to a neighbour, and it takes eleven years and does not come back`,
  M('\u{270D}\u{FE0F}', 'Sign It on the Tarmac', 'No lawyers, no annexes, no reading. A table, two pens, one camera.',
    { base: 5, press: -3, congress: -3, courts: -2, auth: 2, cash: 0.2 }, { rel: 13, purse: 7, mkt: 2 },
    `Two heads of government sign a trade agreement on an airport apron before either delegation has seen the final text, and it takes four hundred days and two arbitration panels to establish what it says.`),
  M('\u{1F9EA}', 'Onshore the Chip Packaging', 'The finishing step nobody thinks about. Bring it home.',
    { base: 4, street: 3, press: -2, congress: 2, auth: 3 }, { rel: -12, purse: -17, mkt: 3 },
    `You subsidise the least glamorous step in the entire semiconductor process, which turns out to be the step that actually controls the supply, and it is the smartest thing you do all year and gets nine seconds of coverage.`));

E('cambodia', 'asia', 'garments, and whatever else is asked for',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -5 },
  `they cannot retaliate and do not try, and the effect is simply that four hundred thousand people in one industry lose their jobs in a season`,
  M('\u{1F4E8}', 'Halve the Rate for a Nomination', 'They will write the Nobel letter. You will halve their tariff.',
    { base: 5, press: -6, congress: -5, courts: -4, auth: 2, cash: 0.2 }, { rel: 19, purse: -5, mkt: 1, fun: 4 },
    `A government facing a ruinous rate discovers that one letter to a committee in Oslo costs nothing at all. The rate is halved within the week and everybody involved is delighted and nobody involved is fooled.`),
  M('\u{1F4DE}', 'Shut Down the Scam Compounds', 'Their border towns are running the fraud that empties your voters accounts.',
    { base: 4, street: 5, press: 4, congress: 3, courts: 2, auth: 3 }, { rel: -14, purse: 8, mkt: 1 },
    `You seize fourteen billion in laundered proceeds from an industry built on calling retired Americans about their car warranty, and it is the most popular thing you do that never appears on a hat.`));

E('nzealand', 'asia', 'lamb, dairy and a total absence of drama',
  { street: -2, base: -3, press: -3, cash: -0.1, mkt: -1, purse: -7 },
  `they join a trade bloc with everybody except you, and their dairy exports rise, and nobody there ever mentions it again`,
  M('\u{1F411}', 'Tariff the Lamb', 'A rate on a country that buys more from you than it sells.',
    { base: 4, press: -4, congress: -3, street: -2, auth: 2 }, { rel: -14, purse: 4, mkt: -1 },
    `You penalise one of four countries on Earth running a trade deficit with you, and their trade minister posts the actual numbers, politely, and a late-night host reads them out to a standing ovation.`),
  M('\u{1F6F0}\u{FE0F}', 'Lease the Launch Site', 'Small rockets, southern sky, cheap orbits. Take the whole pad.',
    { base: 3, press: 2, congress: 3, auth: 3, cash: 0.2 }, { rel: 11, purse: -11, mkt: 3 },
    `You acquire access to the best small-launch site in the southern hemisphere for the price of a single fighter jet, and it puts eleven American satellites up in a year.`));

E('pakistan', 'asia', 'textiles, cricket bats and a nuclear arsenal',
  { street: -3, base: -3, press: -3, congress: -3, cash: -0.2, mkt: -2, purse: -9 },
  `they simply take the port deal from the other superpower instead, and the other superpower is delighted, and says so`,
  M('\u{1FA99}', 'Take the Crypto Venture', 'Their central authorities and your family firm, in one agreement.',
    { base: 5, press: -8, congress: -8, courts: -7, auth: 2, cash: 1.4 }, { rel: 22, purse: 3, mkt: 2 },
    `A nuclear-armed government signs a digital currency arrangement with a company bearing your family name in the same month it nominates you for a peace prize, and nobody will ever be able to prove those were one thing.`),
  M('\u{26CF}\u{FE0F}', 'Take the Minerals Instead of the Aid', 'Cancel the assistance. Sign the mining concession.',
    { base: 4, press: -3, congress: -2, street: -2, auth: 3, cash: 0.4 }, { rel: -8, purse: 13, mkt: 1 },
    `You replace six hundred million a year in assistance with a mining concession worth rather more, which is a better deal for you by every measure and a worse one for about forty million people.`));

E('bangladesh', 'asia', 'the shirt you are wearing, and probably the flag',
  { street: -4, base: -3, press: -3, cash: -0.2, mkt: -2, purse: -7 },
  `four million garment workers lose hours, the industry relocates to two other countries in eighteen months, and your own retailers raise prices anyway`,
  M('\u{1F455}', 'Tariff the T-Shirts', 'Thirty-seven per cent on the garment trade. Announced with a chart.',
    { base: 4, street: -6, press: -4, congress: -3, auth: 3 }, { rel: -16, purse: 11, mkt: -2 },
    `You impose a punishing rate on a country whose entire export economy is clothing, using a formula your own economists cannot reconstruct, and a plain white shirt in your own country goes up a dollar ten.`),
  M('\u{1F30A}', 'Fund the Sea Walls', 'A third of the country floods. Build the barriers. Take the credit.',
    { base: -3, press: 5, street: 3, congress: 3, courts: 2, auth: 2 }, { rel: 20, purse: -12, mkt: 1 },
    `You fund coastal defences for a hundred and seventy million people, which is the largest humanitarian act of your presidency, and you never once mention it at a rally because it does not work as a rally line.`));

E('afghanistan', 'asia', 'nothing you can legally buy',
  { street: -2, base: -2, press: -3, congress: -2, cash: 0, mkt: 0, purse: -2 },
  `there is no trade to retaliate against, and instead the lithium under their mountains is quietly signed away to somebody who did stay in the room`,
  M('\u{1F4B5}', 'Unfreeze Some of the Reserves', 'Seven billion of their money sits in your banks. Release a slice.',
    { base: -3, press: 4, street: 3, congress: -4, courts: 2, auth: 1 }, { rel: 17, purse: -7, mkt: 0 },
    `You release enough of a frozen central bank to stop a famine, and are attacked for it from every direction simultaneously, and it stops the famine.`),
  M('\u{26CF}\u{FE0F}', 'Bid for the Lithium Anyway', 'A trillion in minerals under a government you do not recognise.',
    { base: 4, press: -5, congress: -5, courts: -4, auth: 3, cash: 0.5 }, { rel: 12, purse: -9, mkt: 1 },
    `An American consortium opens negotiations with a government your own State Department will not name out loud, and the minutes are kept in a way that will be very interesting to a committee in about six years.`));

E('myanmar', 'asia', 'jade, rubies and an industrial-scale fraud sector',
  { street: -2, base: -2, press: -3, cash: -0.1, mkt: -1, purse: -4 },
  `the junta shrugs, sells the jade north at a discount, and the scam call centres double in size within the year`,
  M('\u{1F48E}', 'Ban the Jade Trade', 'The generals fund themselves from one gemstone. Cut it off.',
    { base: 3, press: 4, congress: 3, courts: 2, auth: 3 }, { rel: -18, purse: 4, mkt: 0 },
    `You cut a junta principal revenue stream, which is unambiguously correct, and the trade reroutes through a neighbouring border town in about nine weeks and continues at ninety per cent of volume.`),
  M('\u{1F4F5}', 'Raid the Scam Compounds', 'Fifty thousand trafficked people, running fraud against your voters.',
    { base: 5, street: 6, press: 5, congress: 4, courts: 3, auth: 4 }, { rel: -12, purse: 11, mkt: 1 },
    `A joint operation frees several thousand trafficked workers and seizes eleven billion, and the same compounds are operating from a different jurisdiction before the press conference has finished.`));

E('mongolia', 'asia', 'copper, coal and an enormous amount of sky',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -5 },
  `the copper goes south, because there is only one road, and there has only ever been one road`,
  M('\u{1F40E}', 'Trade Rare Earths for a Yurt', 'The minerals, a ceremonial tent, and a horse named after you.',
    { base: 4, press: -2, congress: 2, auth: 2, cash: 0.4 }, { rel: 18, purse: -8, mkt: 2, fun: 4 },
    `A landlocked democracy hands you a mineral concession, a ceremonial tent and a horse with your name on it, and the horse is the only part of the arrangement that ever makes the evening news, which they predicted.`),
  M('\u{1F686}', 'Fund the Third Neighbour Railway', 'They are between two giants. Build them a way out.',
    { base: 2, press: 3, congress: 3, auth: 3 }, { rel: 22, purse: -19, mkt: 1 },
    `You fund a railway that gives a country of three and a half million people its first route to market that does not run through somebody who owns it, and it takes eleven years and outlives four administrations.`));

E('srilanka', 'asia', 'tea, garments and a harbour that belongs to somebody else',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -6 },
  `the port lease extends by another twenty years to the current holder, and your navy reads about it in the trade press`,
  M('\u{1F3D7}\u{FE0F}', 'Refinance the Port Debt', 'Assume the loan. Take the harbour. Call it different when you do it.',
    { base: 4, press: -4, congress: -3, courts: -3, auth: 3, cash: 0.3 }, { rel: 13, purse: -22, mkt: 2 },
    `You offer to assume a small country debts in exchange for its deepest harbour, which is exactly what you spent four years accusing a rival of doing, and a reporter says so, and you call the question nasty.`),
  M('\u{1F375}', 'Guarantee the Tea Crop', 'One crop, one country, one very long-term contract.',
    { base: 1, press: 3, street: 2, congress: 2, auth: 1 }, { rel: 15, purse: -6, mkt: 1 },
    `You underwrite an entire national crop for four years, which stabilises a currency, prevents a second collapse, and is discussed publicly by exactly nobody.`));

E('kazakhstan', 'asia', 'uranium, oil and a seat at whichever table',
  { street: -3, base: -3, press: -2, cash: -0.2, mkt: -3, purse: -12 },
  `the uranium, forty per cent of the world supply, goes on a different train, and every nuclear plant you own recalculates its fuel contracts`,
  M('\u{2622}\u{FE0F}', 'Lock Up the Uranium', 'They mine nearly half the world supply. Buy a decade of it.',
    { base: 4, press: 2, congress: 4, auth: 4, cash: 0.3 }, { rel: 16, purse: -26, mkt: 4 },
    `You secure ten years of reactor fuel from a country most of your cabinet cannot spell, which quietly removes the single largest vulnerability in your entire energy system.`),
  M('\u{1F58B}\u{FE0F}', 'Add Them to the Accords for a Photograph', 'Sign them into a peace deal with a country they never fought.',
    { base: 6, press: -3, congress: -2, auth: 3 }, { rel: 12, purse: 0, mkt: 1, fun: 4 },
    `You expand a historic peace agreement by adding a nation that has had entirely normal relations with the other signatory since 1992, and the word historic is used nine times and is doing enormous work.`));

E('uzbekistan', 'asia', 'cotton, gas and a president who has read your book',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -6 },
  `the gas contracts go north and east, as they always did, and the whole thing is forgotten within a quarter`,
  M('\u{1F9F5}', 'Take the Hundred Billion Pledge', 'Announce it as cash. It is commitments. Over ten years.',
    { base: 5, press: -3, congress: -2, auth: 3, cash: 0.3 }, { rel: 17, purse: 12, mkt: 2 },
    `A country with an economy smaller than Nebraska commits a hundred billion over a decade, and you announce it as a hundred billion, and the distinction survives roughly one news cycle.`),
  M('\u{1F30A}', 'Fund the Aral Sea Restoration', 'A sea your century killed. Spend money bringing some of it back.',
    { base: -2, press: 5, street: 3, congress: 2, auth: 1 }, { rel: 21, purse: -14, mkt: 0 },
    `You fund the partial restoration of a sea that vanished, and a fishing town that has been ninety miles from water since 1987 lands a catch, and it is the single best photograph of your presidency.`));

E('tuvalu', 'asia', 'a domain name and eleven thousand people',
  { street: -1, base: -1, press: -2, cash: 0, mkt: 0, purse: -1 },
  `they simply relocate their entire government to a server and their entire population somewhere else, and send you the invoice for neither`,
  M('\u{1F310}', 'Buy the Domain Rights', 'Their national suffix is worth more than their economy. Acquire it.',
    { base: 3, press: -2, congress: -2, auth: 1, cash: 0.4 }, { rel: -9, purse: 3, mkt: 1, fun: 3 },
    `You purchase a two-letter internet suffix from a sinking country for a fraction of what it earns, and every video platform on Earth quietly becomes an American tenant.`),
  M('\u{1F30A}', 'Fund the Sea Wall Instead', 'Eleven thousand people, four metres above the water, and falling.',
    { base: -3, press: 6, street: 4, congress: 3, auth: 1 }, { rel: 25, purse: -5, mkt: 0 },
    `You pay for the barrier that keeps a nation above water, which costs less than one week of the parade budget, and their Prime Minister says thank you in a speech nobody in your country ever sees.`));

E('heard', 'asia', 'fish, ice, and no one whatsoever',
  { street: 0, base: -1, press: -1, cash: 0, mkt: 0, purse: 0 },
  `the penguins issue no statement, file no complaint and change no behaviour, and the base is told it was a decisive win`,
  M('\u{1F427}', 'Tariff Them Again, Harder', 'The first rate produced no response. Clearly it was too low.',
    { base: 5, press: -3, congress: -2, auth: 1 }, { rel: -5, purse: 0, mkt: 0, fun: 5 },
    `Trade measures are doubled against a territory with no people, no port and no exports, on the reasoning that the previous measures did not work, which is technically unfalsifiable.`),
  M('\u{1F41F}', 'Claim the Fishing Rights', 'There is actually a fishery down there. Claim all of it.',
    { base: 3, press: -3, congress: -2, courts: -2, auth: 2, cash: 0.2 }, { rel: -8, purse: 4, mkt: 0, fun: 3 },
    `You assert exclusive rights over a sub-Antarctic toothfish fishery, which turns out to be genuinely valuable, and four governments send lawyers, and one sends a boat.`));

E('penguin', 'asia', 'a second set of penguins, apparently',
  { street: 0, base: -1, press: -1, cash: 0, mkt: 0, purse: 0 },
  `nothing. Again. A different nothing, from a different empty island, filed alongside the first one`,
  M('\u{1F3F4}', 'Plant a Flag on It', 'Nobody lives there. Somebody should own it. It might as well be you.',
    { base: 4, press: -3, congress: -2, courts: -1, auth: 2 }, { rel: -6, purse: 0, mkt: 0, fun: 5 },
    `A flag is planted on an uninhabited rock by a crew of four, filmed on a phone, and the resulting territorial claim is contested by two governments who cannot quite believe they are doing this.`),
  M('\u{1F9CA}', 'Sell the Iceberg Water', 'Bottle it. Brand it. Charge nine dollars.',
    { base: 3, press: -4, congress: -3, courts: -2, auth: 1, cash: 0.9 }, { rel: -4, purse: 1, mkt: 1, fun: 4 },
    `Antarctic meltwater is bottled under a licensed family brand and sold at nine dollars a bottle, and the marketing describes it as untouched by man, which is the only entirely accurate claim in the campaign.`));

/* ================= THE MIDDLE EAST AND THE CAUCASUS ================= */

E('saudi', 'mideast', 'oil, and a chequebook with no visible floor',
  { street: -9, base: -8, press: -4, congress: -3, cash: -0.5, mkt: -6, purse: -30 },
  `they cut production by a million barrels a day, gasoline hits six dollars, and they explain that it was a purely commercial decision, at length, warmly`,
  M('\u{1F6E2}\u{FE0F}', 'Demand They Open the Taps', 'Call the Crown Prince. Ask for a million more barrels. Before the midterms.',
    { base: 6, street: 6, press: -4, congress: -3, courts: -2, auth: 3 }, { rel: -12, purse: 9, mkt: 4 },
    `You ask a foreign monarchy to lower your own petrol prices ahead of an election, out loud, on a recorded line, and they do it, and everyone understands exactly what has been traded.`),
  M('\u{1F3E6}', 'Take the Fund Into the Family Firm', 'Two billion of sovereign money into a business run by your relatives.',
    { base: 3, press: -9, congress: -9, courts: -7, auth: 1, cash: 2.2 }, { rel: 24, purse: 6, mkt: 3 },
    `A state fund places two billion dollars with an investment firm founded four months earlier by a member of your family with no track record, whose own advisory board voted against it, and it goes through anyway.`));

E('uae', 'mideast', 'oil, towers, aluminium and enormous patience',
  { street: -5, base: -5, press: -4, congress: -3, cash: -0.4, mkt: -4, purse: -22 },
  `the data centre investment goes to a rival jurisdiction, along with about a hundred and forty billion dollars, and they are extremely gracious about it`,
  M('\u{1F5A5}\u{FE0F}', 'Sell Them the AI Chips', 'A desert full of data centres. Waive the export controls.',
    { base: 4, press: -5, congress: -6, courts: -4, auth: 3, cash: 0.9 }, { rel: 21, purse: 34, mkt: 6 },
    `You authorise the export of half a million advanced processors to a country that shares a border, a language and several holding companies with people you are trying to keep them away from.`),
  M('\u{1FA99}', 'Take the Stablecoin Deal', 'Their fund settles a two-billion investment in your family coin.',
    { base: 2, press: -8, congress: -8, courts: -7, auth: 1, cash: 1.8 }, { rel: 19, purse: 2, mkt: 2 },
    `A foreign state fund settles a two billion dollar transaction using a digital token issued by a company your children own, which earns a fee on every single unit in circulation, forever.`));

E('israel', 'mideast', 'defence technology, diamonds and a long wish list',
  { street: -6, base: -5, press: -5, congress: -6, cash: -0.3, mkt: -3, purse: -18 },
  `there is no retaliation, only a very quiet conversation in your own legislature about whether any of this can be conditioned, which is the loudest thing that could possibly happen`,
  M('\u{1F6E1}\u{FE0F}', 'Fund the Interceptor Line', 'They fire more than they can build. Pay for the production run.',
    { base: 5, press: -3, congress: 5, street: -4, courts: -2, auth: 3 }, { rel: 18, purse: -24, mkt: 1 },
    `You fund an air defence production line at a cost of twenty-four billion, which saves a great many lives on one side of a line and changes nothing whatsoever on the other.`),
  M('\u{1F4CB}', 'Condition the Aid', 'Attach terms to the assistance. Actual terms, in writing.',
    { base: -6, press: 6, street: 7, congress: -8, courts: 3, auth: -2 }, { rel: -21, purse: 5, mkt: -2 },
    `You attach written conditions to military assistance for the first time in fifty years, and your own party splits down the middle in an afternoon, and the conditions hold for eleven weeks.`));

E('qatar', 'mideast', 'gas, a broadcaster, and a very large aircraft',
  { street: -4, base: -4, press: -5, congress: -4, cash: -0.3, mkt: -3, purse: -16 },
  `the mediation channel they run, the one your own negotiators depend on, becomes noticeably slower to answer, and three hostage files stall`,
  M('\u{2708}\u{FE0F}', 'Accept the Aircraft', 'Take the wide-body as a gift. Log it as a library donation.',
    { base: 5, press: -9, congress: -8, courts: -7, auth: 2, cash: 0.9 }, { rel: 20, purse: -2, mkt: 1 },
    `Four hundred million dollars of aircraft changes hands and is recorded as a contribution to a library with no site and no architect, and it needs two billion in retrofitting before it can carry you anywhere.`),
  M('\u{1F4FA}', 'Lean on the Broadcaster', 'Their network coverage annoys you. Make it a condition of the base.',
    { base: 5, press: -7, courts: -5, congress: -4, street: -3, auth: 4 }, { rel: -16, purse: 4, mkt: -1 },
    `You make the editorial line of a foreign news channel a term of a military basing agreement, which is exactly the thing you spend every other week accusing other governments of doing.`));

E('iran', 'mideast', 'oil, pistachios and a great deal of defiance',
  { street: -4, base: -3, press: -3, cash: -0.2, mkt: -4, purse: -12 },
  `the crude sails east through a shadow fleet nobody can quite designate fast enough, and the price of everything you drive rises for reasons your voters cannot trace back to you`,
  M('\u{1F513}', 'Unfreeze the Six Billion for Prisoners', 'Their money, in a Swiss account, for five of your citizens.',
    { base: -4, press: 5, congress: -7, courts: 2, street: 3, auth: 1 }, { rel: 16, purse: -6, mkt: 0 },
    `Five Americans come home and six billion dollars of Iranian money moves from one restricted account to another restricted account, and both of those facts are true and only one of them fits on a graphic.`),
  M('\u{1F6A2}', 'Sanction the Shadow Fleet', 'Designate every tanker moving their crude. Every last one.',
    { base: 6, press: 2, congress: 3, street: -3, auth: 4 }, { rel: -25, purse: 8, mkt: -3 },
    `You designate two hundred vessels in a morning, and about seventy of them go dark, change name, change flag and continue, which is roughly the historical success rate of doing this.`));

E('syria', 'mideast', 'rubble, and whatever can be dug out from under it',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -3 },
  `the reconstruction contracts go to two Gulf states and one rival power, and none of them are yours, and the concrete alone is worth forty billion`,
  M('\u{1F91D}', 'Lift the Sanctions After One Meeting', 'Thirty-four minutes in a room. End a decade of sanctions.',
    { base: 6, press: -3, congress: -6, courts: -3, auth: 3, cash: 0.4 }, { rel: 26, purse: 7, mkt: 2 },
    `You end a sanctions regime that took eleven years to build after a single meeting in which, by your own account, you liked the guy, and two of your own agencies learn about it from the wire copy.`),
  M('\u{1F3D7}\u{FE0F}', 'Take the Reconstruction Contracts', 'Forty billion of concrete. American firms only.',
    { base: 4, press: -4, congress: -4, courts: -3, auth: 3, cash: 0.8 }, { rel: 13, purse: 21, mkt: 2 },
    `American construction firms win the rebuilding of cities that American ordnance did not destroy, which is an important distinction that survives about four hours of international coverage.`));

E('iraq', 'mideast', 'oil, dates and two decades of your own decisions',
  { street: -4, base: -3, press: -3, congress: -3, cash: -0.2, mkt: -3, purse: -14 },
  `they settle their oil sales in another currency for one quarter, purely as a demonstration, and every economist you employ has a bad week`,
  M('\u{1F6E2}\u{FE0F}', 'Demand the Oil as Repayment', 'Say it plainly. We spent the money. We take the crude.',
    { base: 6, press: -6, congress: -5, courts: -7, street: -4, auth: 4, cash: 0.6 }, { rel: -27, purse: 17, mkt: -2 },
    `You state as policy that a country you invaded should pay you in oil, and every lawyer in the building explains that this is the exact thing the laws of war exist to prevent, and you call them weak.`),
  M('\u{1F50C}', 'Wire Their Grid to the Gulf', 'They buy their power from Iran. Fund the alternative.',
    { base: 3, press: 3, congress: 4, auth: 3 }, { rel: 19, purse: -18, mkt: 1 },
    `You spend eighteen billion connecting a country electricity grid to somewhere other than its neighbour, which removes a rival principal source of leverage and produces no photograph anybody wants.`));

E('jordan', 'mideast', 'phosphates, patience and a great deal of other people problems',
  { street: -3, base: -2, press: -3, cash: -0.1, mkt: -1, purse: -6 },
  `the intelligence cooperation, which is the best in the region and entirely voluntary, becomes noticeably less forthcoming, and nobody says why`,
  M('\u{1F9F3}', 'Ask the King to Take Everybody', 'Suggest, in the Oval Office, that he absorb two million more people.',
    { base: 5, press: -6, street: -5, congress: -4, courts: -3, auth: 2 }, { rel: -24, purse: 2, mkt: -1 },
    `You ask a monarch whose country is already a third refugees to take a population the size of his capital, and his face in the photograph becomes the entire foreign policy of the Middle East.`),
  M('\u{1F4A7}', 'Fund the Desalination Line', 'They are running out of water. Build the pipe. Own the goodwill.',
    { base: -2, press: 4, congress: 4, street: 2, auth: 3 }, { rel: 23, purse: -16, mkt: 1 },
    `You build a water pipeline for the most reliable partner you have in the region, which secures a border, a peace treaty and an intelligence relationship, for less than the cost of one week of the parade.`));

E('lebanon', 'mideast', 'a banking sector that ate itself, and very good food',
  { street: -2, base: -2, press: -3, cash: -0.1, mkt: -1, purse: -4 },
  `there is nothing left to retaliate with, and the vacuum you leave is filled within a season by the exact organisation you were trying to squeeze`,
  M('\u{1F3D7}\u{FE0F}', 'Promise to Rebuild the Port', 'Offer American reconstruction. Name three contractors you admire.',
    { base: 4, press: -5, congress: -5, courts: -4, auth: 2, cash: 0.8 }, { rel: 11, purse: -6, mkt: 1 },
    `You pledge to rebuild a devastated harbour and name three firms in the same breath, two of which have your mobile number, and the pledge is never funded and the firms are briefly very happy.`),
  M('\u{1F4B3}', 'Sanction the Money Exchangers', 'One militia runs on nine currency houses. Close all nine.',
    { base: 4, press: 2, congress: 3, street: -2, auth: 4 }, { rel: -13, purse: 5, mkt: -1 },
    `You designate nine exchange houses and the cash flow stops for eleven days, and then resumes through a different nine, in the same street, under different names, staffed by the same people.`));

E('yemen', 'mideast', 'nothing, and a shipping lane everybody needs',
  { street: -3, base: -2, press: -3, cash: -0.1, mkt: -3, purse: -5 },
  `the strait closes to your flagged shipping for a fortnight, and the insurance premium on every container going through the canal triples`,
  M('\u{1F6A2}', 'Reopen the Strait by Force', 'Twelve per cent of world trade. Escort it, whatever it costs.',
    { base: 5, street: -3, press: -3, congress: -3, courts: -2, auth: 4 }, { rel: -14, purse: -26, mkt: 4 },
    `You spend twenty-six billion escorting container ships through a strait, and the shipping insurers cut their premiums, and the saving to the world economy is roughly nine times what it cost you and lands entirely on other countries.`),
  M('\u{1F35E}', 'Fund the Famine Relief', 'Seventeen million people. The largest hunger crisis on Earth.',
    { base: -4, press: 6, street: 5, congress: 2, courts: 2, auth: 1 }, { rel: 18, purse: -11, mkt: 0 },
    `You fund the largest famine relief operation in the world at a cost of eleven billion, and it saves an unknowable number of lives, and it is worth exactly zero points in every poll you commission.`));

E('azerbaijan', 'mideast', 'oil, gas and a corridor everybody wants',
  { street: -3, base: -3, press: -2, cash: -0.2, mkt: -2, purse: -10 },
  `the gas goes north instead of west, and three European countries you spent four years weaning off Russian energy quietly go back on it`,
  M('\u{1F6E3}\u{FE0F}', 'Name the Corridor After Yourself', 'Broker the route. Put your name in the treaty text. In perpetuity.',
    { base: 8, press: -4, congress: -3, courts: -2, auth: 4, cash: 0.4 }, { rel: 22, purse: 11, mkt: 2, fun: 4 },
    `A transit corridor between two former enemies is formally named after you, in the signed agreement, forever, and it is the most durable thing your presidency produces, and it is a road.`),
  M('\u{1F6E2}\u{FE0F}', 'Route Their Gas to Europe', 'Fund the pipeline. Break somebody else monopoly for a decade.',
    { base: 4, press: 3, congress: 4, auth: 3, cash: 0.3 }, { rel: 17, purse: -20, mkt: 3 },
    `You fund a pipeline that ends a rival energy leverage over four European democracies, which is worth more strategically than any of the wars and is understood by about nine people in your own building.`));

E('armenia', 'mideast', 'brandy, software and a very difficult neighbourhood',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -4 },
  `they sign a security arrangement with their old patron again, reluctantly, because you left them no other door`,
  M('\u{1F1FA}\u{1F1F8}', 'Make Them Sign in Your Building', 'Two enemies, one table, your room, your cameras, your framing.',
    { base: 6, press: 3, congress: 3, auth: 3 }, { rel: 24, purse: 0, mkt: 1 },
    `Two governments that have fought three wars sign a framework in your building, because you offered the room and neither could afford to refuse the venue, and you spend the press conference discussing the carpet.`),
  M('\u{1F4BB}', 'Buy Their Engineers', 'Thirty thousand software developers, and a visa programme aimed at them.',
    { base: -2, street: 2, press: 3, congress: -3, courts: -2, auth: 2, cash: 0.2 }, { rel: -8, purse: 7, mkt: 2 },
    `You recruit a third of a small country technology workforce with a bespoke visa route, and your own tech sector gains, and theirs is set back a generation in about eleven months.`));

E('georgia2', 'mideast', 'wine, manganese and a naming problem',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -5 },
  `their ruling party passes the foreign agents law anyway, and the country stops being one you can call about anything`,
  M('\u{1F377}', 'Tariff Their Wine by Mistake', 'Meant for the other one. Signed anyway. Never corrected.',
    { base: 3, press: -3, congress: -2, auth: -1 }, { rel: -11, purse: 2, mkt: 0, fun: 4 },
    `A trade measure intended for a domestic industry is applied to a sovereign country with a similar name, and rather than correct it, the administration defends it for a full quarter on the record.`),
  M('\u{1F5F3}\u{FE0F}', 'Sanction the Ruling Family', 'One family owns the government. Designate all of them.',
    { base: 3, press: 4, congress: 4, courts: 2, auth: 3 }, { rel: -22, purse: 3, mkt: -1 },
    `You designate a billionaire and his circle, who between them own a parliament, and the parliament responds by passing the exact law you sanctioned them to prevent, four days later, unanimously.`));

/* ================= AFRICA ================= */

E('egypt', 'africa', 'cotton, gas and a canal',
  { street: -4, base: -3, press: -3, congress: -3, cash: -0.2, mkt: -4, purse: -13 },
  `the canal transit priority for your naval traffic quietly slips down the queue, and four deployments arrive a fortnight late for reasons nobody will put in writing`,
  M('\u{1F6A2}', 'Demand Free Canal Passage', 'Your warships, their waterway, no fee. Announce it as settled.',
    { base: 6, press: -4, congress: -4, courts: -3, auth: 4 }, { rel: -21, purse: 6, mkt: -2 },
    `You announce that American vessels will transit free, and the canal authority replies that it has received no such request, and both statements remain on the record indefinitely.`),
  M('\u{1F4B5}', 'Keep the Aid Flowing Anyway', 'Human rights conditions exist. Waive them. Again.',
    { base: 3, press: -5, congress: -4, courts: -4, street: -3, auth: 2 }, { rel: 19, purse: -9, mkt: 1 },
    `You waive the conditions on one and a third billion dollars for the fourteenth consecutive year, using a national security exemption drafted for emergencies and used, now, as a calendar item.`));

E('libya', 'africa', 'light sweet crude, and two competing governments',
  { street: -3, base: -2, press: -3, cash: -0.1, mkt: -3, purse: -8 },
  `the oil terminals close for a month, the price of light crude spikes, and both governments blame each other and neither blames you`,
  M('\u{1F9CA}', 'Buy the Frozen Billions', 'Forty billion in sanctioned assets. Propose a discount and a fee.',
    { base: 4, press: -6, congress: -6, courts: -6, auth: 2, cash: 1.9 }, { rel: 14, purse: 12, mkt: 1 },
    `You propose unfreezing a dead regime fortune at a discount, with the spread handled by an intermediary who has attended three of your weddings, and the Treasury lawyers write the word no in bold, four times.`),
  M('\u{1F6E2}\u{FE0F}', 'Back One Side for the Oil', 'Pick the general with the terminals. Call it stability.',
    { base: 4, press: -5, congress: -5, courts: -4, street: -3, auth: 4, cash: 0.5 }, { rel: -9, purse: 15, mkt: 2 },
    `You back the faction that controls the crude, which restores production within a quarter and extends the civil war by about four years, and only the first of those makes the announcement.`));

E('nigeria', 'africa', 'oil, film and two hundred and thirty million people',
  { street: -4, base: -3, press: -3, cash: -0.2, mkt: -3, purse: -12 },
  `they sell the crude east, join the rival development bank, and the largest economy on the continent stops taking your calls first`,
  M('\u{1F4F6}', 'Wire the Whole Country', 'Fund the fibre backbone. Own the standard for a generation.',
    { base: 2, press: 4, congress: 3, auth: 3, cash: 0.3 }, { rel: 23, purse: -28, mkt: 3 },
    `You lay the fibre that connects two hundred and thirty million people, on American standards, with American equipment, which is the single largest strategic win available on the continent and takes four seconds of coverage.`),
  M('\u{1F4B8}', 'Sanction the Oil Ministry', 'The theft is industrial. So is the response.',
    { base: 4, press: 3, congress: 3, courts: 2, street: -2, auth: 4 }, { rel: -20, purse: 7, mkt: -2 },
    `You designate an entire ministry over four hundred thousand barrels a day of stolen crude, which is real, and the theft continues at three hundred and eighty thousand barrels a day.`));

E('kenya', 'africa', 'tea, flowers and a listening post',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -6 },
  `they take the rival infrastructure loan instead, and the railway gets built, and it is not built by you`,
  M('\u{1F37F}', 'Sign the First African Trade Deal', 'A proper agreement, on the continent, for the first time.',
    { base: 2, press: 5, congress: 4, street: 2, auth: 2, cash: 0.2 }, { rel: 22, purse: 14, mkt: 3 },
    `You sign the first comprehensive American trade agreement with a sub-Saharan economy, which takes three years, forty negotiators and one signing photograph nobody at home ever sees.`),
  M('\u{1F5FA}\u{FE0F}', 'Rent the Airbase Cheaper', 'Renegotiate the counter-terror basing agreement. Downward.',
    { base: 4, press: -3, congress: -3, auth: 3, cash: 0.2 }, { rel: -15, purse: 5, mkt: 0 },
    `You halve what you pay for a base that flies every operation in the Horn of Africa, and the saving is forty million a year, and the relationship costs you rather more than that within eighteen months.`));

E('ethiopia', 'africa', 'coffee, textiles and the dam that owns the Nile',
  { street: -3, base: -2, press: -3, cash: -0.1, mkt: -2, purse: -7 },
  `they finish the dam anyway, on their own money, and every drop of leverage you thought you had turns out to have been imaginary`,
  M('\u{1F4A5}', 'Suggest Somebody Blows Up the Dam', 'Muse aloud that a neighbour will probably just destroy it.',
    { base: 5, press: -7, congress: -6, courts: -4, street: -4, auth: 2 }, { rel: -28, purse: 3, mkt: -2 },
    `You publicly speculate that one country will bomb another infrastructure, as a prediction rather than a threat, a distinction that survives precisely none of the translations, and Addis Ababa recalls its ambassador the same day.`),
  M('\u{2615}', 'Guarantee the Coffee Preference', 'One trade programme, four hundred thousand smallholders.',
    { base: -2, press: 4, street: 3, congress: 3, auth: 1 }, { rel: 20, purse: -6, mkt: 1 },
    `You renew a duty-free arrangement that keeps four hundred thousand coffee farms viable, at a cost to your Treasury of six billion, and it is announced in a footnote to a footnote.`));

E('southafrica', 'africa', 'platinum, gold, cars and an excellent legal system',
  { street: -4, base: -3, press: -4, cash: -0.2, mkt: -4, purse: -13 },
  `the platinum group metals, which every catalytic converter on Earth requires and which they control, are quietly redirected, and your car industry discovers it within a quarter`,
  M('\u{1F4FA}', 'Ambush Them With a Video', 'Dim the Oval Office lights. Play four minutes you found online.',
    { base: 7, press: -6, congress: -4, courts: -4, street: -5, auth: 3 }, { rel: -26, purse: 2, mkt: -2, fun: 4 },
    `You dim the lights on a visiting head of state and play unverified footage on a screen wheeled in beforehand. He watches politely, waits for the lights, and answers with facts, and the clip does numbers on two continents for opposite reasons.`),
  M('\u{2699}\u{FE0F}', 'Lock Up the Platinum Group', 'Every catalytic converter needs it. Sign for a decade.',
    { base: 3, press: 2, congress: 3, street: 2, auth: 3, cash: 0.3 }, { rel: 14, purse: -19, mkt: 4 },
    `You secure ten years of the six metals nobody has heard of that every vehicle on Earth requires, from a country you spent the previous month insulting, which their trade minister mentions, once, drily.`));

E('rwanda', 'africa', 'coltan, coffee and an immaculate capital',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -5 },
  `the minerals keep moving through anyway, relabelled at the border as they always were, and the only measurable change is the paperwork`,
  M('\u{26CF}\u{FE0F}', 'Sign the Minerals-for-Peace Deal', 'They stop fighting next door. You get first refusal on the ground.',
    { base: 6, press: -4, congress: -4, courts: -3, auth: 3, cash: 0.9 }, { rel: 21, purse: 16, mkt: 2 },
    `A peace agreement is signed whose central provision is a mining annexe. It stops some of the killing, which is more than the last four attempts managed, and it is impossible to say humanitarian and cobalt in one sentence with a straight face.`),
  M('\u{2708}\u{FE0F}', 'Pay Them to Take the Deportees', 'A migration agreement with a country nobody has been deported to before.',
    { base: 5, press: -6, courts: -7, congress: -4, street: -3, auth: 4 }, { rel: 16, purse: -7, mkt: 0 },
    `You pay a small African state to receive people removed from your country who have no connection to it, and the first flight is challenged in three courts and departs at four in the morning anyway.`));

E('somalia', 'africa', 'livestock, remittances and a very long coastline',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -3 },
  `the remittance corridor closes, a third of household income across the country disappears in a quarter, and the recruitment numbers for everybody you are fighting go up`,
  M('\u{1F4B8}', 'Keep the Remittance Corridor Open', 'Your banks want out. Guarantee it. Keep a country fed.',
    { base: -2, press: 4, street: 3, congress: 2, courts: 3, auth: 1 }, { rel: 19, purse: -5, mkt: 0 },
    `You underwrite the money transfer channel that carries a third of a country household income, which costs five billion in guarantees and prevents a famine that would have cost you rather more than that.`),
  M('\u{1F6A2}', 'Take the Port Concession', 'A deep-water harbour on the Gulf of Aden. Sign a long lease.',
    { base: 4, press: -2, congress: 2, auth: 4, cash: 0.3 }, { rel: 12, purse: -13, mkt: 1 },
    `You lease a harbour on one of the most important sea lanes on Earth for less than the price of a frigate, and three other powers who wanted it find out from the trade press.`));

E('drc', 'africa', 'cobalt, copper and every battery you will ever own',
  { street: -4, base: -3, press: -3, cash: -0.2, mkt: -5, purse: -11 },
  `the cobalt continues east, as it has for twenty years, and the price of every battery in your economy is set by somebody who is not you`,
  M('\u{1F50C}', 'Cobalt for a Ceasefire', 'Broker the peace. Take the concession. Announce them together.',
    { base: 6, press: -4, congress: -4, courts: -4, auth: 4, cash: 1.2 }, { rel: 20, purse: 22, mkt: 4 },
    `You end a war and acquire a mineral supply chain at the same signing ceremony, which the press release calls historic and your own trade representative calls, off the record, the deal of the century for one of the parties.`),
  M('\u{1F6AB}', 'Ban the Artisanal Cobalt', 'Children are in those pits. Ban it and watch the price triple.',
    { base: -2, press: 6, street: 4, congress: 2, courts: 3, auth: 1, cash: -0.4 }, { rel: -12, purse: -14, mkt: -5 },
    `You ban hand-dug cobalt on humanitarian grounds, which is right, and which removes the income of about two hundred thousand families, which is also right there in the impact assessment nobody read out.`));

E('morocco', 'africa', 'phosphates, cars and a disputed map',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -2, purse: -7 },
  `they route the fertiliser to Europe and Brazil instead, and your own farmers pay eleven per cent more for phosphate the following season`,
  M('\u{1F5FA}\u{FE0F}', 'Recognise the Map', 'Settle a forty-five-year sovereignty dispute. As a side payment.',
    { base: 5, press: -4, congress: -4, courts: -3, auth: 3 }, { rel: 24, purse: 4, mkt: 1 },
    `You resolve a forty-five-year territorial question by social media post, as the price of an unrelated agreement in a different region, and it holds, and nobody is happy, which several diplomats insist is the definition of a settlement.`),
  M('\u{1F33F}', 'Lock In the Phosphate', 'Three quarters of the world reserves. One long contract.',
    { base: 3, street: 3, press: 2, congress: 2, auth: 3, cash: 0.3 }, { rel: 17, purse: -15, mkt: 3 },
    `You secure the fertiliser that grows a third of the world food from a kingdom holding three quarters of the known reserves, which is either excellent planning or an enormous single point of failure, and it is both.`));

E('tunisia', 'africa', 'olive oil, dates and a democracy going backwards',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -4 },
  `the migration cooperation lapses, the departures resume, and the boats arrive on somebody else beaches, which becomes your problem within two elections`,
  M('\u{1F6A4}', 'Pay Them to Stop the Boats', 'Wire the money. Do not ask a single follow-up question.',
    { base: 4, press: -6, courts: -5, congress: -3, street: -3, auth: 3 }, { rel: 18, purse: -9, mkt: 0 },
    `You wire a struggling government a great deal of money to prevent departures from its coastline, and take considerable care never to ask about method, and the numbers fall, and everybody stops counting.`),
  M('\u{1FAD2}', 'Tariff the Olive Oil', 'Protect four hundred California growers. Charge everybody else.',
    { base: 3, street: -3, press: -2, congress: -2, auth: 2 }, { rel: -13, purse: 3, mkt: -1 },
    `A tariff protecting four hundred Californian producers raises the price of olive oil for three hundred million people, and the four hundred producers are, on closer inspection, one cooperative.`));

E('ghana', 'africa', 'gold, cocoa and a great deal of goodwill',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -2, purse: -5 },
  `the gold refining moves to the Gulf, permanently, and the cocoa contracts go to a Swiss trading house that will not be answering your calls`,
  M('\u{1F36B}', 'Guarantee the Cocoa Price', 'Every chocolate bar you eat starts there. Underwrite the floor.',
    { base: -1, street: 3, press: 4, congress: 3, auth: 1 }, { rel: 21, purse: -11, mkt: 2 },
    `You guarantee a price floor for eight hundred thousand cocoa farmers, which stabilises the world chocolate supply and is announced, appropriately, nowhere near Easter.`),
  M('\u{2708}\u{FE0F}', 'Land the Deportation Flights', 'People from four other countries. Sort the paperwork afterwards.',
    { base: 4, press: -6, courts: -7, congress: -4, street: -3, auth: 3 }, { rel: 13, purse: -4, mkt: 0 },
    `A country agrees to receive deportees who have never been there from nations it has no treaty with, and two federal judges block it twice, and the flights depart at four in the morning while the third appeal is being typed.`));

E('zimbabwe', 'africa', 'tobacco, platinum and diamonds nobody can trace',
  { street: -2, base: -2, press: -2, cash: -0.1, mkt: -1, purse: -4 },
  `the diamonds go through three intermediaries and one shell company registered above a chip shop, exactly as they did before, at the same volume`,
  M('\u{1F48E}', 'Lift the Sanctions for the Concession', 'Relief, in exchange for a stake nobody will be able to trace.',
    { base: 3, press: -7, congress: -6, courts: -6, auth: 2, cash: 1.5 }, { rel: 22, purse: 6, mkt: 1 },
    `A designation is quietly lifted six weeks after a diamond concession changes hands through three intermediaries and a company registered in another hemisphere, and nobody can connect the two, and everybody can count.`),
  M('\u{1F33E}', 'Buy the Tobacco Crop', 'Their entire hard currency, and your own growers competition.',
    { base: -3, press: 2, street: -2, congress: -3, auth: 1, cash: 0.3 }, { rel: 16, purse: -8, mkt: 1 },
    `You buy an entire national tobacco harvest, which stabilises a currency, undercuts your own Carolina growers, and produces a set of letters from two senators that you have framed, unread.`));

/* ---------- merge ----------
   economy.js owns AD.ECON_NATIONS and every mechanic that reads it, so this
   file only ever decorates rows that already exist. A nation with no entry
   here still works: economy.js falls back to the old seven `kind` profiles. */
let attached = 0;
(AD.ECON_NATIONS || []).forEach(n => {
  const d = DATA[n.id];
  if (!d) return;
  n.region = d.region;
  n.good = d.good;
  n.bite = d.bite;
  n.moves = d.moves;
  attached++;
});
AD.ECON_DECORATED = attached;

/* Regions, in the order the Economy front page shows them. Labels are kept
   short: the tab strip has to survive a 375px phone without wrapping. */
AD.ECON_REGIONS = [
  ['all', 'All 100'],
  ['europe', 'Europe'],
  ['americas', 'Americas'],
  ['asia', 'Asia'],
  ['mideast', 'Mid East'],
  ['africa', 'Africa']
];

})();
