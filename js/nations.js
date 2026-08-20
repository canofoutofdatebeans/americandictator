/* ============================================================
   AMERICAN DICTATOR, nations.js
   THE OTHER SIXTY-FIVE.

   economy.js ships the top thirty economies plus five running gags.
   This file takes the roster to A HUNDRED countries, chosen for being
   the ones an American presidency of this description actually collides
   with: the allies it insults, the neighbours it threatens to buy, the
   small states it discovers on a map, and the four separate places it
   promises peace in.

   Every nation here gets its own summit options, same shape as the
   originals: at least one bombastic play and one grown-up one that is
   dull, costs the base, and actually works.

   Display names are real. EVERY leader is a fictional stand-in and every
   incident is invented or so heavily reshaped as to be fictional; the
   satire is aimed at a style of governing, never at a named living
   person. Loaded after economy.js, which owns the merge target.
   ============================================================ */

(function () {

/* Local copies of economy.js's balance helpers so this file can be read on
   its own. Same shapes, same defaults. */
const ins = (label, res, eff, rel) => ({ label, res, silly: true, insult: true,
  eff: eff || { base: 4, press: -3, street: -2 }, rel: (rel == null ? -12 : rel) });
const sil = (label, res, eff, rel) => ({ label, res, silly: true,
  eff: eff || { base: 4, press: -3 }, rel: (rel == null ? 0 : rel) });
const nrm = (label, res, eff, rel) => ({ label, res, normal: true,
  eff: eff || { base: -3, press: 5, congress: 4 }, rel: (rel == null ? 7 : rel) });

/* id, name, leader (fictional), kind, blurb, and the summit menu. */
const MORE = [

/* ---------------- Europe ---------------- */
['ukraine','Ukraine','President Zoryan','partner','At war, out of money, and very good at asking.', [
  ins('Ask what they have done for you lately, on the call.','You suggest, in a friendly way, that assistance and a personal favour might travel together. A transcript exists. Transcripts always exist.',{base:5,press:-5,congress:-6,courts:-4},-16),
  nrm('Send the package Congress already approved.','You simply release funds that were already voted. It is the least dramatic act of your presidency and the only one a historian will thank you for.')]],
['denmark','Denmark','the Prime Minister','ally','Small, cheerful, and in possession of something you want.', [
  ins('Offer to buy Greenland. Cash. Today.','You table a real offer for an island that is not for sale. The Prime Minister calls it absurd; you cancel a state visit in retaliation, which makes it, briefly, an international incident about property.',{base:6,press:-4,street:-2},-16),
  nrm('Sign the Arctic cooperation annexe instead.','You get basing rights, research access and everything you actually wanted, without owning a single fjord. Nobody covers it.')]],
['greenland','Greenland','the Premier','partner','Fifty-six thousand people, an ice sheet, and your full attention.', [
  sil('Fly over it and describe it as "essentially empty."','Fifty-six thousand residents watch a foreign head of state describe their homeland as vacant. The tourism board reports a record year.',{base:4,press:-3},-10),
  nrm('Negotiate a minerals partnership on their terms.','They keep sovereignty, you get rare earths, and the deal outlives you. It is signed in a room with eleven people in it.')]],
['finland','Finland','the President','ally','Long border, longer memory, excellent at winter.', [
  sil('Suggest they rake the forest floor to stop wildfires.','You publicly credit Finland with a forest-management technique Finland has never heard of. Finnish social media spends a delighted week photographing itself holding rakes.',{base:4,press:-3},-8),
  nrm('Fast-track their defence integration.','Signed, ratified, effective. The most consequential alliance decision of the year takes forty minutes.')]],
['greece','Greece','the Prime Minister','ally','Invented democracy, would like you to return it.', [
  ins('Tell them they invented democracy and "then kind of let it go."','It is the single most cutting thing you have ever said and you meant it as small talk. Their foreign ministry frames it.',{base:4,press:-3,street:-2},-11),
  nrm('Renew the naval basing agreement.','A Mediterranean port stays open to your fleet for another decade. It costs a signature.')]],
['portugal','Portugal','the Prime Minister','ally','Quiet, coastal, and doing considerably better than you assume.', [
  sil('Confuse it with Spain, twice, in the same toast.','You toast the wrong country, correct yourself into a third country, and land on "the whole Iberian situation." The Prime Minister raises a glass to that.',{base:3,press:-3},-7),
  nrm('Extend the Azores basing rights.','A mid-Atlantic runway you cannot do without stays yours for twenty more years.')]],
['hungary','Hungary','the Prime Minister','strongman','Small country, enormous influence on your speechwriters.', [
  sil('Praise their model openly as the future.','You describe a European government that has hollowed out its own courts as "doing it the right way." Four of your own senators pretend not to have heard.',{base:6,press:-4,courts:-3},14),
  nrm('Keep it to trade and leave the theory alone.','You discuss agricultural quotas for ninety minutes. Your staff visibly relax.')]],
['poland2','the Baltic States','three Prime Ministers','ally','Three small democracies who take the guarantee very literally.', [
  ins('Ask, publicly, whether they are "paid up."','You make a mutual-defence guarantee sound like a subscription. Three capitals spend a week seeking clarification and do not receive it.',{base:5,press:-4,street:-2},-15),
  nrm('Reaffirm the guarantee without conditions.','You say the words plainly and mean them. It costs you nothing at home and buys a decade of quiet on a very long border.')]],
['serbia','Serbia','the President','strongman','Balkan, proud, playing three great powers at once.', [
  sil('Announce a peace deal that was already signed.','You take credit for an economic agreement negotiated over four years by people whose names you do not know. Both delegations smile through it.',{base:5,press:-3},4),
  nrm('Broker the actual, boring normalisation step.','A border crossing reopens. Two hundred thousand people notice. Nobody else does.')]],
['belarus','Belarus','the Marshal','rogue','A strongman, a border, and someone else pulling the string.', [
  sil('Compliment his election result.','You congratulate a man on a result nobody outside his own ministry believes. He thanks you sincerely, which is worse.',{base:4,press:-4,courts:-2},10),
  nrm('Impose the targeted sanctions the file recommends.','Nine names, frozen accounts, no speech. It is effective and utterly unshareable.')]],

/* ---------------- The Americas ---------------- */
['venezuela','Venezuela','the Comandante','rogue','Oil, collapse, and a recurring invitation to intervene.', [
  ins('Say all options are on the table, gesturing at a map.','You imply an invasion during a photo opportunity about hurricanes. Four allies request urgent clarification. The Pentagon requests a meeting.',{base:6,press:-4,street:-3},-16),
  nrm('Back the negotiated transition everyone else backs.','Sanctions relief for elections, in stages, verified. It is slow, it is unglamorous, and it moves.')]],
['cuba','Cuba','the First Secretary','rogue','Ninety miles away and forever mid-argument.', [
  sil('Reverse the thaw in a single morning post.','Decades of careful diplomacy are undone before breakfast in under three hundred characters. Miami is delighted; the sugar market is not.',{base:7,press:-4,street:-2},-14),
  nrm('Keep the embassy open and the flights running.','Nothing changes and nothing breaks, which in this file counts as a triumph.')]],
['colombia','Colombia','the President','partner','Your closest South American ally, until a post about it.', [
  ins('Threaten tariffs over a deportation flight, at 6am.','A decades-old alliance is renegotiated by post before either foreign ministry is awake. Coffee futures move. Both sides declare victory and quietly restore the status quo.',{base:6,press:-4,street:-2},-14),
  nrm('Renew the counter-narcotics agreement.','Money, training, shared intelligence. It works, it is boring, and it has never once trended.')]],
['panama2','the Canal Authority','the Administrator','partner','Runs the ditch you keep saying is yours.', [
  ins('Announce you are taking the canal back.','You claim a waterway handed over by treaty a quarter-century ago. Shipping insurers reprice overnight, which is the only part anyone in the room understands.',{base:7,press:-4,street:-3},-18),
  nrm('Negotiate transit-fee relief for US shipping.','A four per cent discount, signed, real. It saves more money than the annexation would have and fits in one paragraph.')]],
['guatemala','Guatemala','the President','partner','A migration route with a country attached, in your briefings.', [
  sil('Announce a "safe third country" deal they have not agreed to.','You announce their consent before they have given it. They ratify it three weeks later anyway, having discovered the alternative.',{base:5,press:-3,street:-2},-9),
  nrm('Fund the development programme that reduces the flow.','Roads, jobs, and courts in three provinces. The numbers fall. No one campaigns on it because it took four years.')]],
['haiti','Haiti','the interim President','partner','A country your administration mentions only in the worst context.', [
  ins('Use a word about their country you will spend a month denying.','A single adjective in a closed meeting leaks within an hour, and it is the one thing from this presidency that a school textbook will actually quote.',{base:3,press:-8,street:-6,congress:-4},-20),
  nrm('Extend the protected status and say nothing else.','Sixty thousand people keep their homes and their jobs. You never mention it again, which is the kindest thing about it.')]],
['elsalvador','El Salvador','the young President','strongman','Very online, very popular, very hard to embarrass.', [
  sil('Ask him how he did the prison thing.','You take governing notes from a man whose approval rating is built on a facility that international monitors are not permitted to enter. He is happy to walk you through it.',{base:6,press:-5,courts:-4},12),
  nrm('Sign the ordinary security-cooperation memo.','Training, extraditions, shared files. Everything in it is legal and none of it is a photograph.')]],
['nicaragua','Nicaragua','the Commander','rogue','A revolution that stayed exactly as long as it liked.', [
  sil('Praise his longevity in office, admiringly.','You compliment a man for never leaving. Two of your own party issue statements. The compliment was sincere, which is the problem.',{base:4,press:-4,congress:-3},8),
  nrm('Sanction the officials the report names.','Eleven names, no speech, real effect.')]],
['bahamas','the Bahamas','the Prime Minister','ally','Sun, banking, and a great many of your neighbours.', [
  sil('Suggest, on camera, that you might buy an island.','You float a personal property acquisition during an official visit about hurricane relief. The Prime Minister laughs. You do not.',{base:3,press:-4,courts:-2},-8),
  nrm('Deliver the hurricane package on schedule.','Aid arrives early and works. It is covered for one day.')]],
['chile','Chile','the President','partner','Copper, lithium, and an economy that ignores your advice.', [
  sil('Ask whether they would sell you the lithium outright.','You attempt to purchase a national resource in the way one buys a car. Their finance minister explains sovereignty twice, patiently.',{base:4,press:-3},-8),
  nrm('Sign the critical-minerals supply agreement.','Long-term, at market rate, mutually profitable. Your own industry celebrates quietly for a decade.')]],
['peru','Peru','the President','partner','Has had more presidents than you have had summits.', [
  sil('Congratulate the wrong president by name.','You congratulate a head of state who left office in February. Their embassy issues a correction so gentle it reads as pity.',{base:3,press:-3},-6),
  nrm('Renew the trade preferences quietly.','Asparagus, textiles, and a functioning relationship nobody has to think about.')]],

/* ---------------- Asia-Pacific ---------------- */
['vietnam','Vietnam','the General Secretary','partner','Where the factories went when the tariffs landed.', [
  sil('Take credit for their entire manufacturing boom.','You claim personal responsibility for an industrial migration caused entirely by your own tariffs on somebody else. It is, technically, true.',{base:6,press:-3},4),
  nrm('Upgrade the partnership and open the market.','Twenty pages, real access, mutual gain. Signed in a room with a fan in it.')]],
['philippines','the Philippines','the President','partner','Old ally, new alignment, permanent typhoons.', [
  sil('Praise their drug crackdown without reading the file.','You endorse a policy with a body count on live television, having been briefed on it in a corridor. Two ambassadors resign within a month.',{base:5,press:-5,courts:-4,street:-3},10),
  nrm('Renew the basing agreement and the aid.','Nine sites, storm relief, and a shared coastline. It costs a signature and buys a decade.')]],
['singapore','Singapore','the Prime Minister','ally','Small, immaculate, and quietly indispensable.', [
  sil('Hold your big summit there because the hotel is nice.','A historic meeting is sited primarily on the quality of the function space. The photographs are magnificent. The communiqué is one page and says nothing.',{base:6,press:-2},6),
  nrm('Deepen the naval logistics agreement.','Your fleet keeps a place to refuel in the most strategically useful port on Earth.')]],
['malaysia','Malaysia','the Prime Minister','partner','Chips, palm oil, and a long institutional memory.', [
  sil('Confuse their sovereign fund scandal with a compliment.','You praise a national investment fund chiefly famous for a spectacular fraud. The room does not correct you, which you take as agreement.',{base:3,press:-3},-6),
  nrm('Sign the semiconductor supply annexe.','Fabs, tariffs down, a supply chain that survives the next crisis.')]],
['cambodia','Cambodia','the Prime Minister','partner','Small, poor, and hit with a tariff rate nobody can explain.', [
  ins('Announce a forty-nine per cent tariff and cite a formula.','A formula that divides a trade deficit by imports is presented to the world as economics. Nine economists resign from an advisory board in one afternoon.',{base:6,press:-5,street:-3},-15),
  nrm('Cut the rate to something a person could defend.','You quietly replace the number with one derived from actual analysis. Nobody notices, which is the entire benefit.')]],
['nzealand','New Zealand','the Prime Minister','ally','Five million people, forty million sheep, zero patience.', [
  sil('Mix them up with Australia in a joint press conference.','You thank the wrong Prime Minister for the wrong thing in the wrong accent. Both of them let it go, which is somehow the most withering possible response.',{base:3,press:-3},-6),
  nrm('Renew the intelligence-sharing arrangement.','A very small country hands you a very large amount of the Pacific.')]],
['pakistan','Pakistan','the Prime Minister','partner','Nuclear, essential, and permanently unimpressed.', [
  sil('Offer to mediate their oldest dispute, unprompted.','You volunteer to solve a seventy-year territorial conflict at a press availability. One side thanks you; the other issues a same-day denial that you were ever asked.',{base:5,press:-3,street:-2},-9),
  nrm('Restore the security assistance with conditions.','Money, audited, tied to specific benchmarks. It works about half the time, which here is excellent.')]],
['bangladesh','Bangladesh','the Chief Adviser','partner','Makes your clothes, floods every year, asks for very little.', [
  sil('Praise the garment industry without mentioning the wages.','You celebrate low prices at length in a factory. The wage figure is in the briefing you did not open.',{base:3,press:-4,street:-2},-7),
  nrm('Fund the climate-adaptation package.','Sea walls and drainage for a delta of a hundred and seventy million people. It is the highest-return money in the entire budget.')]],
['afghanistan','Afghanistan','the Emir','rogue','The war that ended, and how it ended.', [
  sil('Invite them to the presidential retreat for the anniversary.','You schedule a peace summit at a country residence for a September date, and cancel it only after somebody says the date out loud.',{base:4,press:-6,congress:-5,street:-3},-10),
  nrm('Process the visas you already promised.','Interpreters who worked for your forces get out. It takes eight months and one signature and saves a specific, countable number of lives.')]],
['myanmar','Myanmar','the General','rogue','A coup, a civil war, and a letter you found charming.', [
  sil('Reply warmly to the General letter.','You describe correspondence from a military junta as "a very beautiful letter." Your own State Department declines to release it.',{base:4,press:-5,courts:-2},10),
  nrm('Keep the sanctions on the generals in place.','Nothing changes and nothing is conceded. It is the correct answer and it makes no news.')]],
['mongolia','Mongolia','the President','partner','Landlocked between two problems, delighted you called.', [
  sil('Accept the horse.','You are gifted a horse on a state visit and name it, on camera, after yourself. It cannot leave the country. You visit it twice.',{base:5,press:-1},6),
  nrm('Sign the "third neighbour" minerals deal.','A country wedged between two rivals gets a third option, and you get copper.')]],

/* ---------------- Middle East & Africa ---------------- */
['syria','Syria','the transitional President','rogue','A war, a withdrawal, and a phone call about it.', [
  ins('Announce the withdrawal by post, without telling the generals.','Your own commanders learn of a troop movement from a public post. Allies on the ground learn from the same post. A Defense Secretary resigns in writing, politely, which is worse.',{base:6,press:-5,congress:-5,street:-3},-14),
  nrm('Draw down on a timetable the Pentagon wrote.','The same soldiers come home four months later, in order, having handed over properly. It is the same policy and nobody covers it.')]],
['iraq','Iraq','the Prime Minister','partner','Still there, still complicated, still your problem.', [
  ins('Say out loud that you should have kept the oil.','You describe a sovereign nation as a missed acquisition, at a podium, to service members. It is quoted at you for twenty years.',{base:5,press:-4,street:-3},-13),
  nrm('Fund the stabilisation programme.','Electricity in three provinces. Attacks fall by a third. It never once leads a broadcast.')]],
['jordan','Jordan','the King','ally','The steadiest hand in the region and the smallest budget.', [
  sil('Ask him to take "a few more" refugees as a favour.','You ask the country already hosting the most refugees per head on Earth to absorb more, as a personal favour, in front of cameras. He agrees to consider it, with a smile of pure diplomacy.',{base:4,press:-3,street:-2},-9),
  nrm('Renew the aid compact for five years.','Predictable money for the most reliable partner you have. It buys more security per dollar than anything else you sign.')]],
['lebanon','Lebanon','the President','partner','A state, several other states inside it, and no budget.', [
  sil('Suggest the port explosion looked like an attack.','You speculate publicly about the cause of a catastrophe while bodies are still being recovered. Your own defence officials contradict you within the hour.',{base:3,press:-6,street:-4},-12),
  nrm('Route the aid through the army, not the ministries.','It arrives, it is accounted for, and it does not vanish. A rare, quiet success.')]],
['yemen','Yemen','the Council President','rogue','The war nobody films and everybody funds.', [
  sil('Discuss the strike timings in a group chat.','Operational details are shared on a commercial messaging app, in a group that turns out to contain a journalist. Everyone involved describes it as "not a breach."',{base:4,press:-7,congress:-5,courts:-3},-12),
  nrm('Back the ceasefire the envoys negotiated.','A truce holds for eleven months. Nobody can name the envoy who did it.')]],
['egypt','Egypt','the Field Marshal','strongman','A canal, a peace treaty, and a leader you like.', [
  sil('Call him "my favourite dictator," in front of staff.','You use the word affectionately and mean it as a compliment. Two aides hear it. It is in print within a week and neither of you ever denies it.',{base:5,press:-5,courts:-3},12),
  nrm('Tie the aid to the detainee list.','You raise eleven names privately and nine of them are released. You never mention it publicly, which is precisely why it worked.')]],
['libya','Libya','the interim Prime Minister','rogue','Two governments, one coastline, no functioning answer.', [
  sil('Confuse it with a country three thousand miles away.','You address a Libyan delegation about a conflict in a different hemisphere for four full minutes. Nobody interrupts a President.',{base:3,press:-4},-8),
  nrm('Back the UN process and stop the arms flow.','The flights slow. The front line freezes. It is genuinely progress and it photographs as nothing.')]],
['nigeria','Nigeria','the President','partner','Africa biggest economy, and rising whether you notice or not.', [
  sil('Mispronounce it, twice, at the joint press conference.','You attempt the name of the most populous nation in Africa twice, land somewhere new both times, and move on. The clip does very well there.',{base:3,press:-4},-8),
  nrm('Sign the security and energy partnership.','Counter-terror cooperation and gas. Both sides get what they came for.')]],
['kenya','Kenya','the President','partner','Your steadiest partner on the continent.', [
  sil('Announce a trade deal live before the terms exist.','You declare an agreement complete during the arrival ceremony. Trade negotiators on both sides learn of their own success from the podium and spend nine months inventing it.',{base:4,press:-2},2),
  nrm('Finish the agreement properly.','Signed a year later, tariff-free in eleven categories, durable. Nobody attends the signing.')]],
['ethiopia','Ethiopia','the Prime Minister','partner','A dam, a war, and a Nobel that aged badly.', [
  sil('Suggest, out loud, that somebody may blow up the dam.','You speculate about a military strike on a hydroelectric project during an unrelated call, and it is on speaker. Three foreign ministries respond before you have hung up.',{base:4,press:-5,street:-3},-14),
  nrm('Mediate the water-sharing framework.','Three countries and one river, agreed in cubic metres. It prevents a war and gets ninety seconds of coverage.')]],
['southafrica','South Africa','the President','partner','Thriving, argumentative, unimpressed by volume.', [
  ins('Play them a video in the Oval Office to prove your point.','You ambush a visiting head of state with a screen and a compilation. He watches it politely, disputes it calmly, and leaves having won the day on every network including yours.',{base:5,press:-5,street:-3},-15),
  nrm('Keep the trade preferences and drop it.','Cars, citrus and platinum keep flowing. The argument evaporates the moment nobody performs it.')]],
['rwanda','Rwanda','the President','strongman','Immaculate capital, uncomfortable questions.', [
  sil('Praise the cleanliness of the streets at length.','You compliment a government on tidiness for six minutes and on nothing else. It is received exactly as intended, by everyone, in both directions.',{base:4,press:-3},8),
  nrm('Back the regional peace framework.','Troops step back from a border. It holds for two years. Nobody claps.')]],
['somalia','Somalia','the President','rogue','A coastline, a militia, and a permanent counter-terror file.', [
  sil('Pull the troops out by post, then put them back.','You announce a withdrawal publicly, reverse it eleven months later, and describe both decisions as strength. Both times, the people on the ground find out from television.',{base:4,press:-4,congress:-3},-10),
  nrm('Keep the advisory mission and fund the coastguard.','Piracy falls. Nobody notices a thing that does not happen.')]],
['drc','the DR Congo','the President','partner','Where the cobalt is. That is the entire briefing you read.', [
  sil('Propose a minerals-for-security swap on the spot.','You offer protection in exchange for mining rights, in public, using the word "deal" eleven times. It sounds exactly like what it is.',{base:5,press:-4,courts:-3},-6),
  nrm('Fund the supply-chain audit instead.','You find out where the cobalt actually comes from and who dug it. The answer is bad and now, at least, it is written down.')]],

/* ---------------- Small states, running gags ---------------- */
['iceland','Iceland','the Prime Minister','ally','Volcanoes, fish, and three hundred thousand people.', [
  sil('Cancel on them at four hours notice.','You call off a visit to a NATO ally on the morning of, citing scheduling. The Prime Minister uses the free afternoon productively and says so.',{base:3,press:-3},-9),
  nrm('Attend and sign the Arctic monitoring pact.','You get radar coverage of the entire North Atlantic gap for the price of one lunch.')]],
['luxembourg','Luxembourg','the Prime Minister','ally','Smaller than most of your golf courses. Richer per head than all of them.', [
  sil('Ask if it is a country or a bank.','You pose the question sincerely, at a working dinner, to the Prime Minister. He answers "yes," and the table decides that is the end of it.',{base:3,press:-2},-5),
  nrm('Settle the digital-tax dispute.','Two paragraphs end a four-year argument worth billions.')]],
['malta','Malta','the Prime Minister','ally','A rock, a harbour, and a passport shop.', [
  sil('Ask about buying a passport, hypothetically, for a friend.','You inquire about citizenship-by-investment on behalf of an unnamed acquaintance. Everyone at the table understands the acquaintance is not real.',{base:3,press:-4,courts:-2},-7),
  nrm('Close the migrant-rescue coordination gap.','Two navies agree who answers the radio. It saves a specific number of people every winter.')]],
['vatican','the Holy See','the Pontiff','ally','No army, no economy, and considerably more moral authority than you.', [
  ins('Get into a public argument about walls.','You take on the Pope, on doctrine, in writing, and lose in front of a billion people who were not previously paying attention.',{base:4,press:-6,street:-4},-14),
  nrm('Take the meeting and say very little.','Twenty minutes, no cameras, a gift exchanged. You emerge looking statesmanlike purely by proximity.')]],
['sanmarino','San Marino','the Captains Regent','joke','Two heads of state, six months each, thirty-three thousand citizens.', [
  sil('Tariff them at ten per cent for the deficit.','A country of thirty-three thousand people is placed under trade measures by the largest economy on Earth. Their entire trade delegation is one person, and she is very gracious about it.',{base:4,press:-3},-8),
  nrm('Exempt them and move on.','The measure is quietly lifted. Nobody is told and nobody asks.')]],
['tuvalu','Tuvalu','the Prime Minister','joke','Eleven thousand people and a rising sea.', [
  ins('Suggest they simply move somewhere else.','You propose relocating an entire nation as a practical solution, at a summit about the thing causing it. The Prime Minister replies in one sentence that is quoted for a decade.',{base:3,press:-6,street:-4},-16),
  nrm('Fund the sea wall and the migration pathway.','A country gets another forty years and its people get somewhere to go. It costs less than one aircraft.')]],
['czechia','Czechia','the Prime Minister','ally','Central, industrial, and quietly excellent at everything.', [
  sil('Call it Czechoslovakia in the joint statement.','You use the name of a country that stopped existing before half its population was born. The correction is issued by their embassy, gently, in two languages.',{base:3,press:-3},-7),
  nrm('Sign the armoured-vehicle procurement deal.','They build them, you buy them, both parliaments approve. Done in a fortnight.')]],
['romania','Romania','the President','ally','Black Sea frontier, and more useful to you than you have noticed.', [
  sil('Ask if it is near Rome.','You pose the question during the briefing, sincerely, twice. The desk officer answers twice.',{base:2,press:-3},-6),
  nrm('Expand the air base and the missile site.','You gain the most forward radar coverage in the alliance for the cost of a runway extension.')]],
['kazakhstan','Kazakhstan','the President','partner','Enormous, resource-rich, and used to being underestimated.', [
  sil('Quote the film at the state dinner.','You do the accent from a twenty-year-old comedy at a head of state. He has heard it approximately nine thousand times and laughs anyway, out of statecraft.',{base:4,press:-3},-8),
  nrm('Sign the uranium and transit agreement.','Fuel for your reactors and a corridor that bypasses two rivals.')]],
['azerbaijan','Azerbaijan','the President','strongman','Gas, a frozen conflict, and a very good lobbying budget.', [
  sil('Announce you personally ended a war you had not been briefed on.','You claim credit for a ceasefire brokered by three other countries over eighteen months. Two of those countries issue statements. You repeat the claim.',{base:6,press:-3},6),
  nrm('Back the corridor deal both sides can live with.','A road opens between two capitals that have not spoken in thirty years.')]],
['armenia','Armenia','the Prime Minister','partner','Small, landlocked, and running out of friends.', [
  sil('Confuse them with the country they are at war with.','You thank the wrong delegation for the wrong concession in the wrong conflict. Neither side corrects you, for opposite reasons.',{base:3,press:-4},-9),
  nrm('Fund the border-monitoring mission.','Forty observers and a satellite feed. The shooting stops.')]],
['georgia2','Georgia','the Prime Minister','partner','The country, not the state, and tired of explaining that.', [
  sil('Congratulate them on the peach harvest.','You praise a fruit crop belonging to a US state to the head of government of a Caucasian republic. Your own ambassador closes her eyes.',{base:3,press:-3},-7),
  nrm('Back the EU accession package.','A small democracy gets a path and a deadline. It is the whole ballgame there and it takes you one sentence.')]],
['uzbekistan','Uzbekistan','the President','partner','Reforming, cotton-rich, and courting everyone at once.', [
  sil('Praise the cotton without asking who picks it.','You celebrate an export industry with a documented forced-labour history, at length, in a warehouse.',{base:3,press:-4,street:-2},-6),
  nrm('Tie the trade preferences to the labour audit.','Independent monitors get access. The practice measurably declines. It takes six years.')]],
['srilanka','Sri Lanka','the President','partner','Defaulted, recovering, strategically placed.', [
  sil('Ask whether the port belongs to somebody else now.','You inquire, publicly, whether a rival power owns their harbour. It is a fair question and an appalling way to ask it.',{base:4,press:-3},-8),
  nrm('Join the debt-restructuring framework.','Creditors align, the economy breathes, a rival loses a foothold. Three things at once, no photograph.')]],
['morocco','Morocco','the King','ally','Old ally, older kingdom, exceptional negotiators.', [
  sil('Trade recognition of a territorial claim for a normalisation deal.','You settle a fifty-year sovereignty dispute as a bargaining chip in a different negotiation entirely, by post, on a Thursday.',{base:6,press:-4,courts:-2},10),
  nrm('Renew the free-trade agreement.','Phosphates, cars and a functioning relationship on the Atlantic edge of Africa.')]],
['tunisia','Tunisia','the President','partner','The one democracy from that spring, and it is wobbling.', [
  sil('Say nothing at all about the constitution.','A president dissolves a parliament and rewrites a constitution, and you are asked for comment eleven times. You decline eleven times. The silence is itself the policy.',{base:2,press:-4,courts:-3},4),
  nrm('Condition the loan support on the courts.','The judiciary keeps its independence, narrowly, and the money still lands.')]],
['ghana','Ghana','the President','partner','Stable, democratic, and rarely on your desk.', [
  sil('Promise a visit for four years running.','You announce a state visit annually and cancel it annually. Their foreign ministry keeps the file open out of what can only be described as optimism.',{base:2,press:-3},-6),
  nrm('Actually go, and sign the power deal.','Grid investment, gas turbines, and eleven million people with reliable electricity.')]],
['zimbabwe','Zimbabwe','the President','rogue','Sanctioned, mineral-rich, and waiting you out.', [
  sil('Muse about lifting sanctions for a lithium concession.','You suggest, in a room with note-takers, that human-rights measures might be tradeable for mining rights. It is written down verbatim.',{base:4,press:-5,courts:-4},8),
  nrm('Keep the targeted measures and renew the food aid.','The generals stay frozen out and nobody starves. Both halves matter.')]],
['penguin','the Penguin Territories','no one','joke','Uninhabited. Tariffed. Twice.', [
  sil('Tariff the penguins again, at a higher rate.','A landmass with no human population and no exports is placed under a second, steeper tariff. A wire reporter asks whether it is a joke. Nobody in the room is able to confirm that it is.',{base:5,press:-4},-4),
  nrm('Quietly remove them from the list.','A staffer deletes one line from a spreadsheet. The Republic is, in a small way, restored.')]]
];

/* ---- merge into the roster and the summit table ---- */
MORE.forEach(function (n) {
  const id = n[0];
  if (AD.ECON_NATIONS.some(x => x.id === id)) return;      // never shadow an original
  AD.ECON_NATIONS.push({ id: id, name: n[1], leader: n[2], kind: n[3], blurb: n[4] });
  AD.DIPLOMACY[id] = n[5];
});

})();
