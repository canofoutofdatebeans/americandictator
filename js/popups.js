/* ============================================================
   AMERICAN DICTATOR, popups.js
   THE POP-UP POOL, 200 self-contained section crises drawn at
   random (no repeats within a run) so no two playthroughs feel alike.
   Written by section, assembled here. Consumed by AD.sectionEventFor
   (see sections.js). `who` is a cast-id string, resolved to the cast
   object at load. GENERATED FILE, do not hand-edit; regenerate instead.
   ============================================================ */

AD.SECTION_POOL = [
 {
  "id": "p-economy-1",
  "section": "economy",
  "who": "treas",
  "title": "Sticker Shock",
  "text": "The Treasury Secretary slides a grocery receipt across the desk like it's a subpoena. Eggs are up sixty percent and the cable shows have started doing man-on-the-street segments outside supermarkets. \"Sir, people are angry, and angry people watch the news.\"",
  "choices": [
   {
    "label": "Announce a decree freezing all grocery prices by Friday",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "Shelves empty out over the weekend as stores simply stop restocking the frozen items."
   },
   {
    "label": "Let the Federal Reserve raise rates and take the political hit",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 3,
     "auth": 0
    },
    "res": "Inflation cools by spring. Nobody remembers who fixed it, only who let it happen."
   },
   {
    "label": "Order the Bureau of Labor Statistics to just publish a lower number",
    "eff": {
     "base": 5,
     "press": -7,
     "courts": -4,
     "auth": 3
    },
    "res": "The real prices stay the same. The only thing that changes is who you can trust."
   },
   {
    "label": "Rebrand inflation as Freedom Pricing on national television",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "A gallon of milk now costs eleven dollars and a small amount of patriotism."
   }
  ]
 },
 {
  "id": "p-economy-2",
  "section": "economy",
  "who": "labor",
  "title": "The Last Whistle",
  "text": "Vantage Steel is closing its Dunmore plant, the one you stood in front of during the campaign with your sleeves rolled up. Three thousand jobs, one photo op, gone in the same afternoon. \"They're moving the line to Guatemala,\" the Labor Secretary says. \"The workers found out from a text message.\"",
  "choices": [
   {
    "label": "Blame it publicly on a foreign trade conspiracy against Dunmore",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "Vantage Steel issues a statement. It changes nothing except who gets blamed at the bar."
   },
   {
    "label": "Fund a real retraining and relocation program through Congress",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "auth": 0
    },
    "res": "It costs money and takes years and actually helps eleven hundred families. Nobody's filming that."
   },
   {
    "label": "Nationalize the plant by executive order and dare the courts to stop you",
    "eff": {
     "base": 5,
     "courts": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "The plant reopens under a new sign. The steel it makes has nowhere profitable to go."
   },
   {
    "label": "Personally call the plant manager and ask him to just not close it",
    "eff": {
     "base": 3,
     "press": -1,
     "auth": 1
    },
    "wild": true,
    "res": "The manager is very polite. The plant closes exactly on schedule."
   }
  ]
 },
 {
  "id": "p-economy-3",
  "section": "economy",
  "who": "state",
  "title": "The Cobalt Curtain",
  "text": "Chairman Wei has banned all exports of rare-earth cobalt in retaliation for last month's tariffs. Every battery factory in the Rust Belt has about six weeks of stockpile left. \"We built the whole electric vehicle plan on a mineral we don't mine,\" the Secretary of State admits.",
  "choices": [
   {
    "label": "Declare a National Mineral Emergency and seize private stockpiles",
    "eff": {
     "base": 4,
     "courts": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "Companies hide what cobalt they have left rather than hand it over."
   },
   {
    "label": "Quietly negotiate a supply deal with a friendlier mineral-rich nation",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 2,
     "auth": 0
    },
    "res": "It works, it's boring, and it takes eight months of unglamorous phone calls."
   },
   {
    "label": "Threaten to invade a mineral-rich ally to secure the supply yourself",
    "eff": {
     "base": 5,
     "press": -6,
     "congress": -4,
     "auth": 3
    },
    "res": "The ally requests an emergency summit. So does everyone else on the continent."
   },
   {
    "label": "Announce a crash program to mine cobalt from an old landfill in Ohio",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The landfill yields four batteries' worth of cobalt and a great deal of methane."
   }
  ]
 },
 {
  "id": "p-economy-4",
  "section": "economy",
  "who": "fed",
  "title": "Coin Toss",
  "text": "The token called FreedomCoin, which you may or may not have mentioned favorably at a rally, has lost ninety-one percent of its value overnight. The Federal Reserve Chair is holding a printout of angry retirees on a forum called r/rugged. \"Sir, some of these people put in their pension.\"",
  "choices": [
   {
    "label": "Announce the government will personally guarantee FreedomCoin's value",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "The Treasury is now on the hook for a currency invented by a man named Chad."
   },
   {
    "label": "Refer the exchange to regulators and let the losses stand",
    "eff": {
     "base": -4,
     "courts": 4,
     "press": 3,
     "auth": -1
    },
    "res": "Nobody gets their money back, but the next scam is a little smaller for it."
   },
   {
    "label": "Blame a rival nation's central bank for orchestrating the crash",
    "eff": {
     "base": 5,
     "press": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "The accusation is baseless and extremely popular."
   },
   {
    "label": "Launch a second, sturdier coin called FreedomCoin Plus",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": 0.1,
     "auth": 2
    },
    "wild": true,
    "res": "It also crashes, but it takes a full eleven days, which some call progress."
   }
  ]
 },
 {
  "id": "p-economy-5",
  "section": "economy",
  "who": "treas",
  "title": "Too Big to Fail Again",
  "text": "Continental Trust, the sixth-largest bank in the country, is quietly insolvent. If it opens Monday without a rescue, the Treasury Secretary says, \"we're looking at a run that makes the last one look like a bake sale.\"",
  "choices": [
   {
    "label": "Bail it out overnight and let the CEO keep his bonus",
    "eff": {
     "base": 3,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "The bank survives. The bonus becomes a recurring news segment for a month."
   },
   {
    "label": "Force a structured wind-down with executives losing their jobs",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 3,
     "auth": -1
    },
    "res": "It is fair, orderly, and satisfying to precisely nobody watching their 401k."
   },
   {
    "label": "Bail it out and quietly staff the new board with your donors",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "auth": 3
    },
    "res": "The bank is saved. So, generously, are several of your friends."
   },
   {
    "label": "Address the nation holding a small ceramic piggy bank for reassurance",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Markets stabilize. The piggy bank sells out at three separate gift shops."
   }
  ]
 },
 {
  "id": "p-economy-6",
  "section": "economy",
  "who": "labor",
  "title": "Everybody Out",
  "text": "Rail workers, port crews, and airline mechanics have all walked out on the same Tuesday, in what the union calls a coincidence and the Labor Secretary calls \"the most coordinated coincidence I've ever seen.\"",
  "choices": [
   {
    "label": "Order the National Guard to run the trains and ports yourself",
    "eff": {
     "base": 4,
     "street": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "Freight moves again, badly, driven by soldiers who have never seen a rail yard."
   },
   {
    "label": "Sit down with union leadership and negotiate a real contract",
    "eff": {
     "base": -3,
     "congress": 4,
     "street": 4,
     "auth": -1
    },
    "res": "It takes eleven hours and a lot of bad coffee, but the trains run on time again."
   },
   {
    "label": "Declare the strike illegal and threaten mass firings",
    "eff": {
     "base": 5,
     "street": -7,
     "courts": -4,
     "auth": 3
    },
    "res": "Half the workforce comes back terrified. The other half becomes a folk song."
   },
   {
    "label": "Personally drive a forklift at the port for the cameras",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "You move one pallet, badly, and it becomes the most-watched clip of the year."
   }
  ]
 },
 {
  "id": "p-economy-7",
  "section": "economy",
  "who": "cos",
  "title": "The Handshake That Wasn't",
  "text": "The historic trade deal with Meridia was signed this morning with great fanfare, three flags, and a fountain pen shaped like an eagle. The Chief of Staff has just discovered that the actual document contains zero binding provisions. \"It's a photo,\" she says. \"We signed a photo.\"",
  "choices": [
   {
    "label": "Call it historic anyway and move on before anyone reads it",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "Analysts eventually notice. By then the news cycle has moved three times over."
   },
   {
    "label": "Admit it was symbolic and promise a real deal by year's end",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "Nobody applauds honesty, but the actual negotiators finally get a real mandate."
   },
   {
    "label": "Claim Meridia is secretly backing out and threaten new tariffs",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "Meridia's ambassador is baffled. The base is thrilled regardless."
   },
   {
    "label": "Reframe the eagle pen itself as the historic achievement",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The pen sells out in the gift shop within the hour."
   }
  ]
 },
 {
  "id": "p-economy-8",
  "section": "economy",
  "who": "treas",
  "title": "The Brie Tariff",
  "text": "In retaliation for an unrelated fishing dispute, you have imposed a four hundred percent tariff on imported soft cheese. The Treasury Secretary reports that domestic brie production is, and has always been, effectively zero. \"Sir, we're taxing a product that does not exist here.\"",
  "choices": [
   {
    "label": "Extend the tariff to all soft cheeses on principle",
    "eff": {
     "base": 4,
     "press": -3,
     "congress": -3,
     "auth": 2
    },
    "res": "Cheese boards nationwide grow noticeably sadder and more patriotic."
   },
   {
    "label": "Quietly drop the tariff before restaurant lobbyists organize",
    "eff": {
     "base": -3,
     "congress": 3,
     "press": 2,
     "auth": -1
    },
    "res": "Brie returns to shelves. The fishing dispute remains completely unresolved."
   },
   {
    "label": "Announce a federal subsidy to launch American brie farming",
    "eff": {
     "base": 5,
     "courts": -3,
     "press": -4,
     "auth": 3
    },
    "res": "A pilot brie farm opens in Nebraska. Experts remain deeply skeptical."
   },
   {
    "label": "Declare cheddar the only cheese a true patriot needs",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Cheddar sales spike eleven percent. Somewhere, a French minister sighs."
   }
  ]
 },
 {
  "id": "p-economy-9",
  "section": "economy",
  "who": "energy",
  "title": "A Little Something for Chad",
  "text": "The new clean-energy subsidy program has, entirely by coincidence, sent ninety percent of its funds to a solar company owned by your largest donor, a man named Chad Bellwether. \"It'll come out,\" the Energy Secretary warns. \"These things always come out.\"",
  "choices": [
   {
    "label": "Insist the company simply had the best application",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -3,
     "auth": 2
    },
    "res": "Reporters find the golf photos within the week. The base does not care."
   },
   {
    "label": "Open the subsidy program to a genuine competitive bid",
    "eff": {
     "base": -4,
     "congress": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "Chad Bellwether's company loses the rebid to a firm in Nevada with actual engineers."
   },
   {
    "label": "Give Bellwether a second, larger contract to prove there's nothing to hide",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -5,
     "auth": 3
    },
    "res": "There is, in fact, something to hide. It is now twice as large."
   },
   {
    "label": "Rename the program after a fictional average American named Chad",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The real Chad Bellwether finds this hilarious. Nobody else does."
   }
  ]
 },
 {
  "id": "p-economy-10",
  "section": "economy",
  "who": "energy",
  "title": "Pain at the Pump",
  "text": "Gas has crossed six dollars a gallon after a pipeline fire, and the Energy Secretary says truckers are threatening a blockade of the capital beltway. \"This is the number that ends presidencies,\" she says flatly.",
  "choices": [
   {
    "label": "Order the strategic reserve drained entirely to crash the price",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -3,
     "auth": 2
    },
    "res": "Prices dip for six weeks. The reserve is now dangerously, quietly empty."
   },
   {
    "label": "Invest the windfall tax revenue into public transit instead",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "It helps in three years. It helps nobody sitting in traffic tonight."
   },
   {
    "label": "Blame the pipeline fire on foreign sabotage without evidence",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -3,
     "auth": 3
    },
    "res": "The accusation dominates the news cycle. The pipeline was, in fact, just old."
   },
   {
    "label": "Personally fill a stranger's tank on camera and call it solved",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "One very lucky driver gets free gas for a day. Everyone else still pays six dollars."
   }
  ]
 },
 {
  "id": "p-economy-11",
  "section": "economy",
  "who": "treas",
  "title": "The Missing Chip",
  "text": "A single flooded factory in Chosan has halted global semiconductor supply, and car plants across three states have gone dark. \"Every truck we can't build,\" the Treasury Secretary says, \"is a headline we can't afford.\"",
  "choices": [
   {
    "label": "Seize domestic chip inventory and redirect it to favored automakers",
    "eff": {
     "base": 4,
     "courts": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "Two plants restart immediately. Six others sue by Thursday afternoon."
   },
   {
    "label": "Fast-track permits for new domestic chip fabrication plants",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "Construction starts within the month. The plants won't produce a single chip for two years."
   },
   {
    "label": "Announce a total ban on chip exports to Chosan's rivals as leverage",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "It changes nothing about the flood. It changes a great deal about the relationship."
   },
   {
    "label": "Suggest cars simply ship without infotainment screens for now",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Buyers are furious. Dealers discover a surprising number of people don't want a screen."
   }
  ]
 },
 {
  "id": "p-economy-12",
  "section": "economy",
  "who": "treas",
  "title": "The House of Cards",
  "text": "Home prices in six major metros have doubled in eighteen months, and the Treasury Secretary is holding a chart shaped uncomfortably like the one from two thousand eight. \"Sir, everyone who can afford one is buying three.\"",
  "choices": [
   {
    "label": "Blame immigrants and investors equally and loudly",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "It is a satisfying explanation. It is also, mostly, not the reason."
   },
   {
    "label": "Tighten mortgage lending rules to cool the market gradually",
    "eff": {
     "base": -4,
     "congress": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "New buyers thank you quietly. Current homeowners watching their equity do not."
   },
   {
    "label": "Ban all corporate purchases of single-family homes by decree",
    "eff": {
     "base": 5,
     "courts": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "Every major real estate firm sues within the week. The base loves the fight."
   },
   {
    "label": "Suggest young people simply ask their parents for a bigger loan",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The clip goes viral for all the wrong reasons and several right ones."
   }
  ]
 },
 {
  "id": "p-economy-13",
  "section": "economy",
  "who": "labor",
  "title": "The Pension Problem",
  "text": "The Interstate Teamsters Pension Fund is nine billion dollars short, and half a million retirees are about to learn their checks are shrinking. \"They worked forty years for this,\" the Labor Secretary says. \"They didn't do anything wrong.\"",
  "choices": [
   {
    "label": "Quietly let the fund cut benefits and blame the fund managers",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "Retirees get smaller checks. The fund managers get a very stern letter."
   },
   {
    "label": "Push a federal backstop bill through Congress to cover the gap",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "auth": -1
    },
    "res": "It costs taxpayers billions and saves half a million retirements. Both things are true."
   },
   {
    "label": "Order the Treasury to print the shortfall quietly overnight",
    "eff": {
     "base": 5,
     "courts": -4,
     "press": -5,
     "auth": 3
    },
    "res": "Checks arrive on time. Economists spend the next year explaining why that's alarming."
   },
   {
    "label": "Host a televised bingo night for retirees to boost morale",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Morale is briefly excellent. The nine billion dollar gap remains exactly nine billion."
   }
  ]
 },
 {
  "id": "p-economy-14",
  "section": "economy",
  "who": "treas",
  "title": "Currency Chicken",
  "text": "President Volkov has called the dollar \"a dying relic\" on state television and deliberately devalued the ruble-adjacent Solyanka to undercut American exports. \"He's trying to bait you into a public response,\" the Treasury Secretary warns. \"Don't take the bait.\"",
  "choices": [
   {
    "label": "Fire back on social media calling him a broke tyrant",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "Markets twitch. Volkov, delighted, replies within the hour."
   },
   {
    "label": "Let the Treasury respond through quiet diplomatic channels only",
    "eff": {
     "base": -4,
     "congress": 3,
     "press": 2,
     "auth": 0
    },
    "res": "The exchange rate stabilizes within a week. Nobody applauds the silence that did it."
   },
   {
    "label": "Order a symbolic mass sell-off of Solyanka bonds to punish him",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -4,
     "auth": 3
    },
    "res": "It costs the Treasury more than it costs Volkov, but it makes for a great headline."
   },
   {
    "label": "Mail Volkov a single novelty coin labeled World's Second Best Currency",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "State media never mentions it. Your own press office won't stop."
   }
  ]
 },
 {
  "id": "p-economy-15",
  "section": "economy",
  "who": "state",
  "title": "Don't Buy American",
  "text": "A grassroots boycott of American goods has spread across three continents after your last tariff speech, and Secretary of State reports that a beloved soda brand has been pulled from shelves in Meridia entirely. \"It's the soda, sir. They're boycotting the soda.\"",
  "choices": [
   {
    "label": "Declare the boycotting countries economic enemies of America",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "The boycott spreads. So, oddly, does domestic soda pride."
   },
   {
    "label": "Have the Secretary of State quietly walk back the tariff speech",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "The boycott fades within a month. Nobody at home notices it ever happened."
   },
   {
    "label": "Launch a counter-boycott of Meridian imports out of spite",
    "eff": {
     "base": 5,
     "courts": -3,
     "press": -5,
     "auth": 3
    },
    "res": "Meridian imports are mostly bananas. Grocery prices rise slightly for no strategic gain."
   },
   {
    "label": "Ship the soda company's mascot on a goodwill tour personally",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The mascot is well received. The soda remains banned."
   }
  ]
 },
 {
  "id": "p-economy-16",
  "section": "economy",
  "who": "labor",
  "title": "The Jobs Report",
  "text": "The monthly jobs report shows a net loss for the first time in three years, and the Labor Secretary has the unenviable job of walking it into the Oval Office. \"We can spin the internals,\" she says carefully, \"but the headline number is the headline number.\"",
  "choices": [
   {
    "label": "Declare the report fake and demand the bureau chief resign",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "The chief resigns under pressure. The next report is worse and now nobody trusts it either way."
   },
   {
    "label": "Present the real numbers honestly with a plan to address them",
    "eff": {
     "base": -4,
     "congress": 3,
     "press": 4,
     "auth": -1
    },
    "res": "Economists respect the candor. The base wanted a villain, not a spreadsheet."
   },
   {
    "label": "Blame the losses entirely on the previous administration",
    "eff": {
     "base": 5,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "The previous administration left office two years ago. It doesn't matter."
   },
   {
    "label": "Redefine part-time and unemployed as differently employed",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The new number looks great. The line at the food bank looks the same."
   }
  ]
 },
 {
  "id": "p-economy-17",
  "section": "economy",
  "who": "labor",
  "title": "Fifteen and Fighting",
  "text": "A coalition of fast-food workers is demanding a federal minimum wage hike to twenty-two dollars, and the Labor Secretary reports the restaurant lobby is threatening mass layoffs in response. \"Both sides think they're bluffing,\" she says. \"Neither side is.\"",
  "choices": [
   {
    "label": "Side loudly with small business and call the workers ungrateful",
    "eff": {
     "base": 4,
     "street": -5,
     "congress": -3,
     "auth": 2
    },
    "res": "The restaurant lobby is thrilled. The workers plan a much bigger march."
   },
   {
    "label": "Negotiate a phased, modest increase both sides can tolerate",
    "eff": {
     "base": -4,
     "congress": 4,
     "street": 3,
     "auth": -1
    },
    "res": "Nobody is thrilled. Both sides, grudgingly, go back to work."
   },
   {
    "label": "Promise the full twenty-two dollars by executive order tomorrow",
    "eff": {
     "base": 5,
     "courts": -5,
     "congress": -4,
     "auth": 3
    },
    "res": "The order is popular and almost certainly illegal. The lawsuits begin immediately."
   },
   {
    "label": "Suggest workers negotiate their own raises directly with managers",
    "eff": {
     "base": 3,
     "press": -3,
     "street": -2,
     "auth": 1
    },
    "wild": true,
    "res": "A viral video shows exactly how that conversation tends to go."
   }
  ]
 },
 {
  "id": "p-economy-18",
  "section": "economy",
  "who": "treas",
  "title": "Nothing Moves",
  "text": "Dockworkers at the Port of Harlow have shut down loading over a pay dispute, and the Treasury Secretary says forty percent of the country's imported goods are now sitting on ships offshore. \"Every day this goes on,\" he says, \"is a day of empty shelves in six weeks.\"",
  "choices": [
   {
    "label": "Send in federal contractors to load the ships yourselves",
    "eff": {
     "base": 4,
     "street": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "The contractors are slow and inexperienced. The dockworkers are furious for entirely different reasons now."
   },
   {
    "label": "Fund an independent mediator to settle the pay dispute fairly",
    "eff": {
     "base": -3,
     "congress": 4,
     "street": 4,
     "auth": -1
    },
    "res": "It takes two weeks and a fair contract. The ships finally start moving."
   },
   {
    "label": "Invoke an emergency labor law to force workers back immediately",
    "eff": {
     "base": 5,
     "street": -7,
     "courts": -4,
     "auth": 3
    },
    "res": "The port reopens under protest. The dispute simply moves underground."
   },
   {
    "label": "Personally negotiate over speakerphone from the Resolute Desk",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The call lasts four hours and accomplishes almost nothing, loudly."
   }
  ]
 },
 {
  "id": "p-economy-19",
  "section": "economy",
  "who": "treas",
  "title": "A Friendly Monopoly",
  "text": "Regulators have opened an antitrust probe into Halcyon Systems, a tech giant whose CEO happened to donate generously to your last two campaigns. \"The evidence is genuinely damning,\" the Treasury Secretary says. \"So is the timing of your calls with him.\"",
  "choices": [
   {
    "label": "Order the probe quietly shelved as a professional courtesy",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "auth": 2
    },
    "res": "The probe disappears. A very persistent journalist does not."
   },
   {
    "label": "Let the regulators do their job without interference",
    "eff": {
     "base": -3,
     "courts": 4,
     "congress": 3,
     "auth": 0
    },
    "res": "Halcyon Systems is fined heavily. The CEO stops taking your calls."
   },
   {
    "label": "Announce the probe was politically motivated by career bureaucrats",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -4,
     "auth": 3
    },
    "res": "The regulators are reassigned. Halcyon Systems sends a very generous thank-you gift."
   },
   {
    "label": "Suggest Halcyon simply rename itself to sound less monopolistic",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Halcyon Systems becomes Halcyon Friendly Systems. The market share stays identical."
   }
  ]
 },
 {
  "id": "p-economy-20",
  "section": "economy",
  "who": "press",
  "title": "Down Bad",
  "text": "Your three a.m. post calling a major automaker \"a disgrace and a scam\" has wiped forty billion dollars off its stock in ninety minutes, and the Press Secretary is fielding calls from every business desk in the country. \"Sir, they want to know if that was intentional.\"",
  "choices": [
   {
    "label": "Double down and post that the company deserved worse",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 2
    },
    "res": "The stock drops further. Your base calls it accountability."
   },
   {
    "label": "Quietly delete the post and say nothing further",
    "eff": {
     "base": -3,
     "press": 3,
     "congress": 2,
     "auth": -1
    },
    "res": "The stock partially recovers. The deletion becomes its own small scandal."
   },
   {
    "label": "Claim the market crash proves the company was corrupt all along",
    "eff": {
     "base": 5,
     "courts": -4,
     "press": -5,
     "auth": 3
    },
    "res": "There is no evidence of corruption. There is now a Congressional inquiry into your post."
   },
   {
    "label": "Post a photo of yourself buying the company's car anyway",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The stock ticks up two percent. Nobody quite understands why it worked."
   }
  ]
 },
 {
  "id": "p-economy-21",
  "section": "economy",
  "who": "treas",
  "title": "The Ceiling",
  "text": "Congress has deadlocked on raising the debt ceiling, and the Treasury Secretary says the government runs out of accounting tricks in eleven days. \"After that,\" she says, \"we're choosing between paying soldiers and paying bondholders.\"",
  "choices": [
   {
    "label": "Threaten to mint a novelty trillion-dollar coin and dare them to object",
    "eff": {
     "base": 4,
     "courts": -4,
     "congress": -4,
     "auth": 3
    },
    "res": "The coin is legally dubious and enormously popular. Congress folds within days out of sheer embarrassment."
   },
   {
    "label": "Work the phones with congressional leaders for a bipartisan deal",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "auth": -1
    },
    "res": "The deal is unglamorous, on time, and nobody outside Washington notices it happened."
   },
   {
    "label": "Blame the opposition party for holding troops' pay hostage",
    "eff": {
     "base": 5,
     "press": -4,
     "congress": -4,
     "auth": 2
    },
    "res": "The opposition blames you right back. The deadline gets closer either way."
   },
   {
    "label": "Suggest paying bondholders in commemorative coins instead of cash",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "Bondholders are unamused. The coins are, admittedly, quite handsome."
   }
  ]
 },
 {
  "id": "p-economy-22",
  "section": "economy",
  "who": "ag",
  "title": "The Farm Check",
  "text": "Soybean farmers across four states are staring at a rival's retaliatory tariffs and a harvest they can't sell. The Agriculture Secretary proposes an emergency bailout check, then adds quietly, \"Last time we did this, it went mostly to the biggest operations, not the family farms.\"",
  "choices": [
   {
    "label": "Send the checks out fast and let the details sort themselves later",
    "eff": {
     "base": 4,
     "press": -3,
     "congress": -3,
     "auth": 2
    },
    "res": "Checks arrive within the week. So do the stories about which farms got the biggest ones."
   },
   {
    "label": "Design a targeted program that actually favors small family farms",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "It takes three extra weeks of paperwork and reaches the farmers who needed it most."
   },
   {
    "label": "Route extra bailout funds through a foundation run by a major donor",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -5,
     "auth": 3
    },
    "res": "The donor's foundation takes a healthy administrative fee. Farmers get what's left."
   },
   {
    "label": "Hold a hay-bale photo op and promise the checks are basically in the mail",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The hay bale photographs beautifully. The checks are not, in fact, in the mail."
   }
  ]
 },
 {
  "id": "p-economy-23",
  "section": "economy",
  "who": "treas",
  "title": "Cheap Steel",
  "text": "Foundry Nation is dumping subsidized steel on the American market at half the domestic price, and three more mills are threatening to close by winter. \"It's illegal under trade law,\" the Treasury Secretary says, \"and also working exactly as intended for them.\"",
  "choices": [
   {
    "label": "Slap emergency tariffs on all steel imports immediately",
    "eff": {
     "base": 4,
     "congress": -3,
     "press": -3,
     "auth": 2
    },
    "res": "Domestic mills cheer. Every industry that buys steel to build things quietly groans."
   },
   {
    "label": "File a formal trade complaint through the proper international channel",
    "eff": {
     "base": -3,
     "congress": 3,
     "courts": 3,
     "auth": -1
    },
    "res": "It's the correct process. It also takes eighteen months nobody's mills have."
   },
   {
    "label": "Announce a total trade embargo on Foundry Nation over steel alone",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -4,
     "auth": 3
    },
    "res": "Foundry Nation retaliates on soybeans within the hour. This was not about soybeans."
   },
   {
    "label": "Hold a rally at a steel mill wearing a hard hat for the cameras",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The hard hat photographs great. The mill closes anyway two months later."
   }
  ]
 },
 {
  "id": "p-economy-24",
  "section": "economy",
  "who": "cos",
  "title": "Buy American (Terms and Conditions Apply)",
  "text": "The new Buy American initiative launches tomorrow with flags, fireworks, and a jingle. The Chief of Staff has just discovered the official launch merchandise, hats included, is manufactured entirely overseas. \"We can still cancel the shipment,\" she says. \"It's already on a boat.\"",
  "choices": [
   {
    "label": "Launch it anyway and hope nobody checks the tags",
    "eff": {
     "base": 4,
     "press": -5,
     "congress": -3,
     "auth": 2
    },
    "res": "Someone checks the tags within the hour. The jingle plays on regardless."
   },
   {
    "label": "Delay the launch and source the merchandise domestically",
    "eff": {
     "base": -3,
     "congress": 3,
     "press": 3,
     "auth": -1
    },
    "res": "The launch happens three weeks late, hats included, tags actually accurate."
   },
   {
    "label": "Claim the foreign factory is secretly American-owned",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "It is not American-owned. The claim is repeated at the rally regardless."
   },
   {
    "label": "Rebrand the hats as Buy American Adjacent",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "auth": 1
    },
    "wild": true,
    "res": "The hats sell out. The phrase becomes an unfortunate meme by dinner."
   }
  ]
 },
 {
  "id": "p-money-1",
  "section": "money",
  "who": "treas",
  "title": "The Sovereign Wealth Suitor",
  "text": "A fund from a \"friendly Gulf monarchy\" wants to buy your family's golf resorts at triple market value. Your Treasury Secretary keeps saying \"no strings attached\" like the phrase erases the strings. \"They just want to be your partner,\" she says, sliding over the term sheet.",
  "choices": [
   {
    "label": "Sign it, wire the cash",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.7,
     "auth": 1
    },
    "res": "The money clears by Friday. Reporters start counting your sand traps."
   },
   {
    "label": "Route it into a blind trust",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0.1,
     "auth": -1
    },
    "res": "Boring, legal, and nobody throws you a parade for it."
   },
   {
    "label": "Take the cash AND the naming rights",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The eighteenth hole is now called Number One Hole. Subtle."
   },
   {
    "label": "Insist on being paid in gold bars",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.5,
     "auth": 1
    },
    "wild": true,
    "res": "Customs has several questions about the pallet."
   }
  ]
 },
 {
  "id": "p-money-2",
  "section": "money",
  "who": "son",
  "title": "The Memecoin Launch",
  "text": "Your son wants to drop a presidential memecoin before you've even finished your morning briefing. \"It's not a bribe, Dad, it's a community,\" he says, already wearing a hoodie with the logo. Whales are lining up to buy in at a price only they'll ever see again.",
  "choices": [
   {
    "label": "Let him launch it, take the cut",
    "eff": {
     "base": 3,
     "press": -4,
     "courts": -3,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The chart goes vertical, then sideways, then into a group chat about lawsuits."
   },
   {
    "label": "Shut it down before it starts",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 3,
     "cash": 0,
     "auth": 0
    },
    "res": "Your son sulks. Ethics lawyers exhale for the first time in weeks."
   },
   {
    "label": "Launch it AND a companion NFT set",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "cash": 0.7,
     "auth": 2
    },
    "res": "Somewhere a man mortgages his house for a cartoon eagle jpeg."
   },
   {
    "label": "Rename it after your dog",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.4,
     "street": 2
    },
    "wild": true,
    "res": "Dog-coin outperforms the actual currency by Tuesday."
   }
  ]
 },
 {
  "id": "p-money-3",
  "section": "money",
  "who": "lawyer",
  "title": "The Sweetheart Lot",
  "text": "A developer wants to sell you a beachfront parcel for a dollar, then quietly rezone the rest of the coastline around it. Your lawyer calls it \"a gift with excellent timing.\" She does not blink while saying this.",
  "choices": [
   {
    "label": "Buy the dollar lot, approve the zoning",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -5,
     "cash": 0.5,
     "auth": 1
    },
    "res": "You now own a beach. Also several new enemies at the planning office."
   },
   {
    "label": "Pay full market price, recuse yourself",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 3,
     "cash": -0.1,
     "auth": 0
    },
    "res": "The developer is baffled. Your net worth barely moves."
   },
   {
    "label": "Take the lot and flip the whole peninsula",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -6,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The peninsula is now called a resort. The word coastline is now historical."
   },
   {
    "label": "Demand payment in beachfront cabanas instead",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "You own eleven cabanas and no idea what to do with them."
   }
  ]
 },
 {
  "id": "p-money-4",
  "section": "money",
  "who": "ag",
  "title": "The Shell Game",
  "text": "Your Attorney General needs a signature to formalize a holding company that, on paper, exists only to receive foreign consulting fees. \"It's a formality,\" she says, tapping the folder. \"The formality just happens to launder some money.\"",
  "choices": [
   {
    "label": "Sign it without reading",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -6,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The paperwork vanishes into a filing cabinet in a state nobody visits."
   },
   {
    "label": "Refuse and shred the folder",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 5,
     "cash": 0,
     "auth": -1
    },
    "res": "The AG looks disappointed but files nothing illegal today."
   },
   {
    "label": "Sign it and add two more shells",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -7,
     "cash": 0.7,
     "auth": 2
    },
    "res": "You now have a corporate family tree no auditor wants to climb."
   },
   {
    "label": "Name the shell company after yourself, unhidden",
    "eff": {
     "base": 2,
     "press": -3,
     "cash": 0.3,
     "congress": -2
    },
    "wild": true,
    "res": "Subtlety was never really your brand anyway."
   }
  ]
 },
 {
  "id": "p-money-5",
  "section": "money",
  "who": "cos",
  "title": "The Ethics File",
  "text": "The Office of Government Ethics has quietly opened a file on your finances. Your Chief of Staff wants to know if you'd like to \"get ahead of it\" before a reporter does. \"Ahead of it\" is doing a lot of work in that sentence.",
  "choices": [
   {
    "label": "Bury the file, reassign the investigator",
    "eff": {
     "base": 2,
     "press": -6,
     "courts": -5,
     "cash": 0.3,
     "auth": 2
    },
    "res": "The investigator is now Deputy Assistant to the Assistant Deputy somewhere cold."
   },
   {
    "label": "Release your finances voluntarily",
    "eff": {
     "base": -4,
     "press": 6,
     "congress": 4,
     "cash": 0,
     "auth": -1
    },
    "res": "The numbers are boring. Boring is, for once, a win."
   },
   {
    "label": "Bury the file and audit the reporter instead",
    "eff": {
     "base": 3,
     "press": -7,
     "courts": -6,
     "cash": 0.2,
     "auth": 2
    },
    "res": "The reporter's taxes are suddenly very interesting to the IRS."
   },
   {
    "label": "Rebrand the file as performance art",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.2,
     "auth": 1
    },
    "wild": true,
    "res": "A gallery in Berlin offers to exhibit your bank statements."
   }
  ]
 },
 {
  "id": "p-money-6",
  "section": "money",
  "who": "cos",
  "title": "The Speaking Fee",
  "text": "A trade association wants to pay you four hundred thousand dollars for a twenty-minute \"keynote\" the week after you sign their favorite tax carve-out. Your Chief of Staff insists this is \"just how the circuit works.\"",
  "choices": [
   {
    "label": "Take the fee, give the speech",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "Twenty minutes of applause, four hundred thousand dollars, zero notes taken."
   },
   {
    "label": "Decline the fee, sign the bill on the merits",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "The association is confused. Confusion, it turns out, is free."
   },
   {
    "label": "Take the fee and add a book deal",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The book is called Winning, and it is mostly acknowledgments."
   },
   {
    "label": "Demand the fee be paid in exposure",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "auth": 1
    },
    "wild": true,
    "res": "Exposure, it turns out, is not legal tender, but you take it anyway."
   }
  ]
 },
 {
  "id": "p-money-7",
  "section": "money",
  "who": "amb",
  "title": "The Tower License",
  "text": "A foreign developer wants to slap your name on a half-built luxury tower in a country with a spotty human rights record. Your Ambassador there calls it \"a branding opportunity with excellent margins.\" He does not mention the scaffolding collapse.",
  "choices": [
   {
    "label": "License the name, collect the fee",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The tower is renamed by Thursday. The scaffolding remains unresolved."
   },
   {
    "label": "Decline the license entirely",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 3,
     "cash": 0,
     "auth": 0
    },
    "res": "The developer finds another name to slap on it. Somehow it's fine."
   },
   {
    "label": "License the name AND a hotel wing",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "There are now two buildings with your name and one working elevator."
   },
   {
    "label": "Insist the tower be shaped like your face",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "street": 1
    },
    "wild": true,
    "res": "Air traffic control asks that the nose be reconsidered."
   }
  ]
 },
 {
  "id": "p-money-8",
  "section": "money",
  "who": "treas",
  "title": "The Loophole",
  "text": "Your Treasury team drafted a tax provision so specific it effectively applies to one family trust in America. Yours. \"It reads generally,\" the Secretary insists, \"to any qualifying multi-property hospitality entity with exactly your characteristics.\"",
  "choices": [
   {
    "label": "Slip it into the must-pass bill",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -3,
     "congress": -3,
     "cash": 0.6,
     "auth": 1
    },
    "res": "Nobody reads page four hundred and twelve. You read it three times."
   },
   {
    "label": "Strike the provision yourself",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "Your accountant weeps quietly in the next room."
   },
   {
    "label": "Slip it in and widen it retroactively",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -4,
     "congress": -4,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The refund check arrives before anyone finishes reading the bill."
   },
   {
    "label": "Rename the loophole after a fake constituent",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "auth": 1
    },
    "wild": true,
    "res": "A man named Gary Loophole does not exist, and yet here we are."
   }
  ]
 },
 {
  "id": "p-money-9",
  "section": "money",
  "who": "son",
  "title": "The Family Contract",
  "text": "Your son's startup, which has never shipped a product, just won a nine-figure federal contract to \"modernize\" something nobody can quite define. Reporters have started using the word nepotism like it's new information.",
  "choices": [
   {
    "label": "Let the contract stand",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The startup hires a receptionist. Progress, of a kind."
   },
   {
    "label": "Cancel it and open real bidding",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": -0.1,
     "auth": 0
    },
    "res": "Your son does not speak to you for a week. Worth it, probably."
   },
   {
    "label": "Let it stand and add a second contract",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The startup now has two contracts and still no product."
   },
   {
    "label": "Have him rebrand as a nonprofit",
    "eff": {
     "base": 2,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "Nonprofits, it turns out, can still buy a very nice boat."
   }
  ]
 },
 {
  "id": "p-money-10",
  "section": "money",
  "who": "cos",
  "title": "The Gifted Yacht",
  "text": "A shipping magnate \"gifted\" you a two-hundred-foot yacht, insisting it's \"just a loan, indefinitely, forever.\" Your Chief of Staff has already renamed it in the briefing book to avoid saying the word gift out loud.",
  "choices": [
   {
    "label": "Accept the yacht, dock it quietly",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.5,
     "auth": 1
    },
    "res": "The yacht is now technically a museum, which is technically not a bribe."
   },
   {
    "label": "Refuse it, report the offer",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "The magnate is stunned. Refusing gifts is apparently rare."
   },
   {
    "label": "Accept it and the matching helicopter",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.7,
     "auth": 2
    },
    "res": "You now arrive at climate summits by helicopter. The optics team quits."
   },
   {
    "label": "Rename the yacht Executive Time",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "street": 1
    },
    "wild": true,
    "res": "Executive Time is spotted off three different coastlines in one week."
   }
  ]
 },
 {
  "id": "p-money-11",
  "section": "money",
  "who": "lawyer",
  "title": "The Grateful Envelope",
  "text": "A man you pardoned last spring left a duffel bag \"for the foundation\" with your body man. Nobody asked which foundation. Your lawyer suggests, gently, that duffel bags of cash are \"an optics issue at minimum.\"",
  "choices": [
   {
    "label": "Keep it, say nothing",
    "eff": {
     "base": 2,
     "press": -6,
     "courts": -6,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The bag disappears into a safe that does not appear on any inventory."
   },
   {
    "label": "Return it and report the pardon-seeker",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 5,
     "cash": 0,
     "auth": -1
    },
    "res": "The man is furious. The lawyer, for once, looks relieved."
   },
   {
    "label": "Keep it and ask if there's more coming",
    "eff": {
     "base": 3,
     "press": -7,
     "courts": -7,
     "cash": 0.8,
     "auth": 2
    },
    "res": "There is, in fact, more coming. Regularly, it turns out."
   },
   {
    "label": "Donate it to a foundation you just invented",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "The foundation's sole listed employee is you."
   }
  ]
 },
 {
  "id": "p-money-12",
  "section": "money",
  "who": "home",
  "title": "The Block Booking",
  "text": "A foreign delegation just booked out your entire hotel for a state visit, at a nightly rate your own staff calls \"aspirational.\" Your Homeland Security advisor notes, flatly, that the Constitution has opinions about this.",
  "choices": [
   {
    "label": "Accept the booking at full rate",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -5,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The lobby smells like fresh money and mild constitutional violation."
   },
   {
    "label": "Redirect them to a competitor hotel",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 5,
     "congress": 3,
     "cash": 0,
     "auth": -1
    },
    "res": "Your general manager is heartbroken. The Constitution, less so."
   },
   {
    "label": "Accept it and upsell the presidential suite",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -6,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The suite rents for more than most people's houses. Weekly."
   },
   {
    "label": "Comp the room and bill them for the minibar",
    "eff": {
     "base": 2,
     "press": -3,
     "cash": 0.3,
     "auth": 1
    },
    "wild": true,
    "res": "The minibar bill alone funds a small embassy."
   }
  ]
 },
 {
  "id": "p-money-13",
  "section": "money",
  "who": "treas",
  "title": "The National Crypto Reserve",
  "text": "Your Treasury Secretary proposes the government hold a \"strategic reserve\" of a coin that, coincidentally, you personally hold a great deal of. \"It's forward-thinking,\" she says. \"It's also your coin,\" you say. She does not disagree.",
  "choices": [
   {
    "label": "Announce the reserve",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.7,
     "auth": 1
    },
    "res": "Your holdings triple in value the moment the press release drops."
   },
   {
    "label": "Scrap the idea entirely",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "The market yawns. Your portfolio yawns with it."
   },
   {
    "label": "Announce it and buy more first",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "Timing, as they say, is everything, and yours was impeccable."
   },
   {
    "label": "Rename the reserve after the Treasury building",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "FortKnoxCoin trends for six hours, then quietly for legal reasons stops."
   }
  ]
 },
 {
  "id": "p-money-14",
  "section": "money",
  "who": "spy",
  "title": "The Early Word",
  "text": "Your intelligence briefer let slip, almost certainly by accident, a detail about a merger review that hasn't been announced. Your broker is one text message away from knowing exactly what to buy before the market does.",
  "choices": [
   {
    "label": "Send the text",
    "eff": {
     "base": 2,
     "press": -6,
     "courts": -6,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The trade clears. The SEC's algorithm, unfortunately, also notices patterns."
   },
   {
    "label": "Delete the message, brief no one",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 5,
     "cash": 0,
     "auth": 0
    },
    "res": "Nothing happens, which is exactly the point of the exercise."
   },
   {
    "label": "Send it and loop in two donors",
    "eff": {
     "base": 3,
     "press": -7,
     "courts": -7,
     "cash": 0.8,
     "auth": 2
    },
    "res": "Three portfolios bloom overnight. One analyst asks too many questions."
   },
   {
    "label": "Trade the opposite direction as a decoy",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "auth": 1
    },
    "wild": true,
    "res": "The decoy loses money, which is somehow the most convincing part."
   }
  ]
 },
 {
  "id": "p-money-15",
  "section": "money",
  "who": "girl",
  "title": "The Charity Gala",
  "text": "Your daughter's foundation raised eleven million dollars at last night's gala. Records show two million went to a scholarship fund, and nine million went to \"operations,\" a category that mostly consists of the gala itself.",
  "choices": [
   {
    "label": "Let the books stand as filed",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -5,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The scholarship fund gets a nice plaque. The rest gets a nicer party."
   },
   {
    "label": "Order a full independent audit",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 5,
     "congress": 3,
     "cash": 0,
     "auth": -1
    },
    "res": "The audit is brutal. The plaque, mercifully, survives."
   },
   {
    "label": "Fold two more relatives onto the board",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -6,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The foundation now employs more Family than actual staff."
   },
   {
    "label": "Rename it the Presidential Excellence Fund",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "Excellence, per the filings, costs quite a lot to administer."
   }
  ]
 },
 {
  "id": "p-money-16",
  "section": "money",
  "who": "cos",
  "title": "The Membership Auction",
  "text": "Your golf club has started quietly auctioning memberships to lobbyists at absurd markups, with a whispered promise of \"access.\" Your Chief of Staff wants your sign-off on the price list before Monday's tee times.",
  "choices": [
   {
    "label": "Approve the price list",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The waitlist fills with men who have never once broken ninety."
   },
   {
    "label": "Cap membership fees at market rate",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "The club is suddenly much less profitable and much less interesting."
   },
   {
    "label": "Approve it and add a lobbyist-only tier",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The new tier includes a locker and, apparently, your phone number."
   },
   {
    "label": "Sell memberships in a raffle instead",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "street": 2
    },
    "wild": true,
    "res": "A retired schoolteacher wins a locker next to a defense contractor."
   }
  ]
 },
 {
  "id": "p-money-17",
  "section": "money",
  "who": "social",
  "title": "The Merch Line",
  "text": "Your social media director wants to launch a limited-edition sneaker, watch, and commemorative Bible bundle, sold exclusively through a company you happen to own. \"Patriotism,\" she says, \"at a healthy markup.\"",
  "choices": [
   {
    "label": "Launch the bundle",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -3,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The Bibles sell out. Nobody checks who printed them, or where."
   },
   {
    "label": "Donate the profits to charity instead",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 3,
     "cash": 0.1,
     "auth": 0
    },
    "res": "Sales dip the moment profit stops flowing your way. Curious."
   },
   {
    "label": "Launch it and add a cologne",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -4,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The cologne is called Authority. It smells vaguely of leather and lawsuits."
   },
   {
    "label": "Sell the sneakers only to Congress members",
    "eff": {
     "base": 2,
     "press": -3,
     "cash": 0.3,
     "congress": -3
    },
    "wild": true,
    "res": "Half the House is now wearing matching shoes to work."
   }
  ]
 },
 {
  "id": "p-money-18",
  "section": "money",
  "who": "state",
  "title": "The Golden Visa",
  "text": "Your State Department floats a new investment-visa program with an unusually generous exception: applicants who invest directly in your family's properties clear the line in half the time. Your Secretary of State calls it \"a pilot program.\"",
  "choices": [
   {
    "label": "Approve the fast lane",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -5,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The waitlist for your properties is suddenly much shorter, and much wealthier."
   },
   {
    "label": "Strip the exception before approving",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "The program passes clean. Somehow that feels almost disappointing to your accountant."
   },
   {
    "label": "Approve it and widen the exception",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -6,
     "cash": 0.8,
     "auth": 2
    },
    "res": "Half the applicants now list your buildings as their entire investment thesis."
   },
   {
    "label": "Require applicants to also buy the sneakers",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "Immigration law and footwear merge in a way no one anticipated."
   }
  ]
 },
 {
  "id": "p-money-19",
  "section": "money",
  "who": "son",
  "title": "The Podcast Empire",
  "text": "Your son's new podcast network wants \"access packages\" sold to guests who want a sit-down interview with you. The going rate for a friendly thirty minutes is steep, and climbing. \"It's just content,\" he says.",
  "choices": [
   {
    "label": "Approve the access packages",
    "eff": {
     "base": 2,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The interview schedule now reads like a very expensive dating app."
   },
   {
    "label": "Make all interviews free and equal",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 3,
     "cash": 0,
     "auth": 0
    },
    "res": "Bookings plummet. So, notably, does the network's revenue."
   },
   {
    "label": "Approve it and add a VIP after-party tier",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The after-party tier includes a photo, a handshake, and a very large invoice."
   },
   {
    "label": "Barter interviews for equity stakes instead",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "You now co-own three startups you can't fully explain."
   }
  ]
 },
 {
  "id": "p-money-20",
  "section": "money",
  "who": "treas",
  "title": "The Face Coin",
  "text": "The Mint wants to strike a commemorative coin featuring your profile, sold at a steep premium to collectors, with royalties routed straight to your personal account. Your Treasury Secretary swears this is \"totally normal for a Mint.\"",
  "choices": [
   {
    "label": "Approve the coin, take the royalty",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The coin sells out in an hour. Numismatists have feelings about it."
   },
   {
    "label": "Approve the coin, waive the royalty",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 3,
     "cash": 0,
     "auth": 0
    },
    "res": "The Mint profits. You do not. Somehow this is the headline anyway."
   },
   {
    "label": "Approve it and mint a gold edition too",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The gold edition costs more than most people's cars."
   },
   {
    "label": "Put your dog on the reverse side",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "street": 2
    },
    "wild": true,
    "res": "The dog coin outsells the president coin within the week."
   }
  ]
 },
 {
  "id": "p-money-21",
  "section": "money",
  "who": "lawyer",
  "title": "The Blind Trust That Isn't",
  "text": "Your \"blind trust\" trustee just called to ask, quote, \"which properties would you like to buy this quarter.\" Your lawyer reminds you that the entire premise of a blind trust is that you're not supposed to know that.",
  "choices": [
   {
    "label": "Keep giving direction, quietly",
    "eff": {
     "base": 2,
     "press": -6,
     "courts": -6,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The trust performs suspiciously well for something that can't see."
   },
   {
    "label": "Hand real control to an independent trustee",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 5,
     "congress": 3,
     "cash": 0,
     "auth": -1
    },
    "res": "Your portfolio grows boring. Your lawyer sleeps for the first time in months."
   },
   {
    "label": "Keep directing it and expand the portfolio",
    "eff": {
     "base": 3,
     "press": -7,
     "courts": -7,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The trust that isn't blind now can't see even more properties."
   },
   {
    "label": "Rename the trust Definitely Blind LLC",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": 0.4,
     "auth": 1
    },
    "wild": true,
    "res": "The name fools exactly no one, least of all the auditors."
   }
  ]
 },
 {
  "id": "p-money-22",
  "section": "money",
  "who": "hist",
  "title": "The Library Fund",
  "text": "Foreign billionaires are lining up to fund your future presidential library, no strings attached, except for the ones who mention it right before a regulatory decision goes their way. Your in-house historian calls the pattern \"a coincidence worth studying.\"",
  "choices": [
   {
    "label": "Accept every donation",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "cash": 0.6,
     "auth": 1
    },
    "res": "The library's groundbreaking features an unusually international guest list."
   },
   {
    "label": "Cap donations and disclose all donors",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 4,
     "cash": 0,
     "auth": 0
    },
    "res": "Fundraising slows to a crawl. The plaque wall gets much less interesting."
   },
   {
    "label": "Accept every donation and add a wing per billionaire",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.8,
     "auth": 2
    },
    "res": "The library now has forty wings and roughly four actual books."
   },
   {
    "label": "Sell naming rights to the gift shop too",
    "eff": {
     "base": 2,
     "press": -2,
     "cash": 0.3,
     "auth": 1
    },
    "wild": true,
    "res": "The gift shop generates more revenue than the archive it's attached to."
   }
  ]
 },
 {
  "id": "p-phone-1",
  "section": "phone",
  "who": "cos",
  "title": "The Sleepy Ally",
  "text": "Your Chief of Staff wakes you at 3 AM because you already dialed Prime Minister Halvorsen and she is now on the line asking why you are shouting about a border incursion. \"Mr. President,\" she says, \"it is a raccoon.\" Your Chief of Staff mouths the words hang up now while holding the phone at arm's length.",
  "choices": [
   {
    "label": "Order her to mobilize troops against the raccoon",
    "eff": {
     "base": 5,
     "press": -6,
     "auth": 3
    },
    "res": "Seventeen soldiers surround a dumpster. The raccoon wins."
   },
   {
    "label": "Apologize, hang up, let the woman sleep",
    "eff": {
     "base": -4,
     "press": 5,
     "auth": 0
    },
    "res": "She forgives you. She also mutes your number."
   },
   {
    "label": "Accuse her of harboring the raccoon as a spy",
    "eff": {
     "base": 5,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "A minor ally is now a major headache."
   },
   {
    "label": "Put the raccoon on a first-name basis and offer it asylum",
    "eff": {
     "base": 4,
     "press": 2,
     "street": 3,
     "auth": 1
    },
    "res": "The raccoon, Gerald, now has a security detail.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-2",
  "section": "phone",
  "who": "press",
  "title": "Tonight's Talking Points",
  "text": "Cable anchor Chip Bellamy calls twenty minutes before airtime demanding you personally dictate tonight's chyron. \"Give me something with teeth,\" he says, \"the ratings are down and my producer is threatening to replace me with a golden retriever.\" Your press secretary is already sweating through her blazer.",
  "choices": [
   {
    "label": "Feed him a scandal that does not technically exist yet",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "The chyron reads BREAKING and nothing else is true."
   },
   {
    "label": "Decline, refer him to the actual press office",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 2,
     "auth": 0
    },
    "res": "The golden retriever gets the segment. It does great."
   },
   {
    "label": "Feed him a scandal about a named senator",
    "eff": {
     "base": 5,
     "congress": -5,
     "press": -2,
     "auth": 3
    },
    "res": "The senator finds out live, on air, from Chip."
   },
   {
    "label": "Offer to co-host, unscripted, right now",
    "eff": {
     "base": 4,
     "press": -2,
     "street": 4,
     "auth": 1
    },
    "res": "Ratings triple. Nobody can explain what was said.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-3",
  "section": "phone",
  "who": "state",
  "title": "A Medal You Did Not Earn",
  "text": "Chairman Chen calls to congratulate you on brokering peace in a regional conflict you have never heard of. \"Your diplomacy,\" he says warmly, \"will be remembered for generations.\" Your national security adviser is frantically googling which conflict this could possibly be.",
  "choices": [
   {
    "label": "Accept the credit and hint at a Nobel campaign",
    "eff": {
     "base": 5,
     "press": -5,
     "auth": 2
    },
    "res": "You now owe Chairman Chen a favor for a war you did not end."
   },
   {
    "label": "Admit you have no idea what he is talking about",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 3,
     "auth": -1
    },
    "res": "Chen is delighted. Confusion, it turns out, he respects."
   },
   {
    "label": "Accept the credit and demand a summit in your honor",
    "eff": {
     "base": 5,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "The summit is scheduled. The war, still ongoing, is not invited."
   },
   {
    "label": "Ask Chen to just email you the details later",
    "eff": {
     "base": 3,
     "press": 2,
     "street": 2,
     "auth": 1
    },
    "res": "The email never comes. Neither does clarity.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-4",
  "section": "phone",
  "who": "treas",
  "title": "The Donor on Line One",
  "text": "Bradlee Wickham, who personally funded four billboards and a marching band, calls to remind you that a certain environmental regulation is \"killing American jobs, or at least killing my quarterly numbers.\" He has already donated to your re-election twice this year. Your Treasury Secretary is holding up a sign that says CONFLICT OF INTEREST.",
  "choices": [
   {
    "label": "Promise to gut the regulation by Friday",
    "eff": {
     "base": 4,
     "courts": -5,
     "auth": 2
    },
    "res": "Friday comes. So does a lawsuit."
   },
   {
    "label": "Thank him for his support and change nothing",
    "eff": {
     "base": -3,
     "courts": 5,
     "congress": 3,
     "auth": 0
    },
    "res": "The billboards come down. The marching band disbands."
   },
   {
    "label": "Gut the regulation and name it after him",
    "eff": {
     "base": 5,
     "courts": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "The Wickham Act poisons a river within the month."
   },
   {
    "label": "Ask him to just buy the river instead",
    "eff": {
     "base": 3,
     "cash": 1.5,
     "street": -2,
     "auth": 1
    },
    "res": "He buys the river. He is thrilled. The fish are not.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-5",
  "section": "phone",
  "who": "amb",
  "title": "The Insulted Emir",
  "text": "The Emir, whom you called \"a guy in a robe with too much oil money\" at a rally last week, is on the line and audibly not laughing. \"You will apologize,\" he says, \"or the pipeline deal is finished.\" Your ambassador is behind you, silently praying.",
  "choices": [
   {
    "label": "Apologize lavishly and promise him a state dinner",
    "eff": {
     "base": 4,
     "press": -4,
     "auth": 2
    },
    "res": "He accepts. The robe comment becomes a t-shirt in his country."
   },
   {
    "label": "Offer a measured, professional apology and end the call",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 2,
     "auth": 0
    },
    "res": "The pipeline survives. Nobody is entertained."
   },
   {
    "label": "Double down and call him a guy in a robe again, to his face, on the call",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "The pipeline deal is dead. Oil prices notice immediately."
   },
   {
    "label": "Compliment the robe specifically, ask where he got it",
    "eff": {
     "base": 4,
     "press": 1,
     "street": 3,
     "auth": 1
    },
    "res": "He tells you. It is from a mall. You are both delighted.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-6",
  "section": "phone",
  "who": "press",
  "title": "The Leaked Call",
  "text": "A recording of last night's call, in which you referred to three world leaders as \"the sad one, the loud one, and Steve,\" has leaked to every network simultaneously. Your press secretary is holding four ringing phones and answering none of them. \"Steve is not amused,\" she reports.",
  "choices": [
   {
    "label": "Claim the recording is fake, AI generated, deeply flattering to Steve",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -2,
     "auth": 2
    },
    "res": "Steve releases his own recording. It is real."
   },
   {
    "label": "Own it, apologize to all three, mostly Steve",
    "eff": {
     "base": -4,
     "press": 5,
     "street": 2,
     "auth": -1
    },
    "res": "Steve accepts. He was, it turns out, having a rough week."
   },
   {
    "label": "Leak a worse recording of someone else to bury the story",
    "eff": {
     "base": 5,
     "press": -4,
     "congress": -4,
     "auth": 3
    },
    "res": "It works for six hours. Then that leaks too."
   },
   {
    "label": "Start referring to yourself as Steve in solidarity",
    "eff": {
     "base": 4,
     "street": 4,
     "press": -1,
     "auth": 1
    },
    "res": "Confusing. Also, weirdly, it polls well.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-7",
  "section": "phone",
  "who": "fbi",
  "title": "Hostage Line",
  "text": "The FBI's hostage negotiator is mid-call with a man holding three bank tellers when someone patches you in by mistake. \"This is the President,\" you say, unable to help yourself, and the negotiator's face goes the color of printer paper. The gunman, delighted, asks if you can livestream this.",
  "choices": [
   {
    "label": "Agree, this could be great television",
    "eff": {
     "base": 5,
     "street": -4,
     "courts": -3,
     "auth": 2
    },
    "res": "Ratings are historic. So is the FBI's incident report."
   },
   {
    "label": "Hang up immediately and let the professional work",
    "eff": {
     "base": -4,
     "courts": 5,
     "street": 2,
     "auth": -1
    },
    "res": "The tellers go home safely. Nobody remembers your cameo."
   },
   {
    "label": "Negotiate personally, offer the gunman a pardon",
    "eff": {
     "base": 4,
     "courts": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "Precedent set. Every bank in the country takes note."
   },
   {
    "label": "Sing happy birthday to whoever is closest to a birthday in the bank",
    "eff": {
     "base": 3,
     "street": 3,
     "press": 2,
     "auth": 1
    },
    "res": "Everyone is confused enough to calm down slightly.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-8",
  "section": "phone",
  "who": "gen",
  "title": "The Green Light, Sort Of",
  "text": "General Ostrander calls for authorization on a strike he has already, technically, begun preparing. \"Sir, I need a yes or no in the next ninety seconds,\" he says. You were in the middle of watching a bass fishing documentary and have retained roughly forty percent of what he just said.",
  "choices": [
   {
    "label": "Say yes with total confidence, ask questions later",
    "eff": {
     "base": 5,
     "congress": -6,
     "press": -3,
     "auth": 3
    },
    "res": "The strike proceeds. So does the congressional hearing."
   },
   {
    "label": "Ask him to brief you properly before deciding",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 2,
     "auth": 0
    },
    "res": "The window closes. The general is livid. The Constitution, less so."
   },
   {
    "label": "Say yes and add two more targets you just thought of",
    "eff": {
     "base": 5,
     "congress": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Nobody asked for the second target. Or the third."
   },
   {
    "label": "Put him on hold to finish watching the fishing show",
    "eff": {
     "base": 3,
     "street": 2,
     "congress": -2,
     "auth": 1
    },
    "res": "The general waits. The bass, unfortunately, gets away.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-9",
  "section": "phone",
  "who": "social",
  "title": "The Favor",
  "text": "Silicon Valley's Trent Halloway calls to ask, very casually, if you could just have his competitor's app \"looked into\" by regulators. \"Nothing crazy,\" he says, \"just a little friendly antitrust attention.\" He also mentions he is hosting a fundraiser next month, unprompted.",
  "choices": [
   {
    "label": "Promise to sic the regulators on the competitor",
    "eff": {
     "base": 4,
     "courts": -5,
     "auth": 2
    },
    "res": "The competitor's app mysteriously fails three audits."
   },
   {
    "label": "Tell him regulators do not work that way, hang up",
    "eff": {
     "base": -3,
     "courts": 5,
     "congress": 2,
     "auth": 0
    },
    "res": "Halloway is baffled that money did not immediately work."
   },
   {
    "label": "Promise the favor and ask for a bigger fundraiser",
    "eff": {
     "base": 4,
     "courts": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "The favor is granted. The optics are catastrophic."
   },
   {
    "label": "Ask Halloway to build you an app instead",
    "eff": {
     "base": 3,
     "street": 2,
     "press": 2,
     "auth": 1
    },
    "res": "He builds it in a weekend. It tracks something concerning.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-10",
  "section": "phone",
  "who": "state",
  "title": "Wrong Country",
  "text": "Mid-call with a foreign minister, you confidently thank Belgium for its support in the Pacific theater. There is a long pause. \"Mr. President,\" the minister says carefully, \"we are Bolivia.\" Your chief of staff has physically left the room.",
  "choices": [
   {
    "label": "Insist you meant Bolivia the whole time",
    "eff": {
     "base": 4,
     "press": -4,
     "auth": 2
    },
    "res": "Bolivia is not convinced. Neither is Belgium, who heard about this."
   },
   {
    "label": "Apologize for the mix-up like an adult",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 2,
     "auth": 0
    },
    "res": "The minister accepts graciously. The clip airs anyway."
   },
   {
    "label": "Blame your staff, loudly, on the call",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 3
    },
    "res": "Your staff hears every word. Morale, an already fragile resource, drops."
   },
   {
    "label": "Ask him to just tell you which country you are actually talking to for the rest of the call",
    "eff": {
     "base": 3,
     "street": 3,
     "press": 1,
     "auth": 1
    },
    "res": "He does. It helps. Slightly.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-11",
  "section": "phone",
  "who": "usher",
  "title": "Butt Dial",
  "text": "Your usher informs you, in a tone of great personal suffering, that your pocket dialed a national investigative reporter during a very unflattering forty-minute rant about the Vice President. The reporter is still on the line. She says, \"Please, continue.\"",
  "choices": [
   {
    "label": "Keep talking, she is basically press pool anyway",
    "eff": {
     "base": 5,
     "press": -5,
     "auth": 2
    },
    "res": "The forty minutes become a forty-minute front page story."
   },
   {
    "label": "Hang up immediately and call your lawyer",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 2,
     "auth": 0
    },
    "res": "The story runs anyway, headlined WHAT HE DIDN'T KNOW WE HEARD."
   },
   {
    "label": "Keep talking and go further, name specifics",
    "eff": {
     "base": 5,
     "press": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "The specifics become the headline. The Vice President reads it twice."
   },
   {
    "label": "Ask her out to lunch to talk about it off the record",
    "eff": {
     "base": 4,
     "press": 1,
     "street": 2,
     "auth": 1
    },
    "res": "She accepts. Nothing about this is off the record.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-12",
  "section": "phone",
  "who": "amb",
  "title": "Many Happy Returns",
  "text": "President Volkov calls to wish you a happy birthday, his voice warm as fresh asphalt. \"Sixty years old,\" he says, \"what a fragile age for a man with so many enemies.\" He then asks, still warmly, whether your missile defense codes have \"held up well\" this year.",
  "choices": [
   {
    "label": "Laugh it off and invite him to the inauguration next year",
    "eff": {
     "base": 4,
     "press": -4,
     "auth": 2
    },
    "res": "He accepts the invite. Your security team does not sleep for a week."
   },
   {
    "label": "End the call and brief the National Security Council",
    "eff": {
     "base": -4,
     "courts": 5,
     "street": 1,
     "auth": 0
    },
    "res": "Nothing happens. The paranoia was, this time, correctly earned as a drill."
   },
   {
    "label": "Threaten him back, mention his birthday is coming up too",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -3,
     "auth": 3
    },
    "res": "Volkov's birthday is in December. He remembers this call vividly."
   },
   {
    "label": "Sing happy birthday to yourself while he listens",
    "eff": {
     "base": 3,
     "street": 3,
     "press": 1,
     "auth": 1
    },
    "res": "Deeply strange. Volkov, for once, has nothing to say.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-13",
  "section": "phone",
  "who": "spy",
  "title": "A Call From Someone You Admire",
  "text": "Field Marshal Baako, a man you have privately called \"efficient\" at three separate dinners, calls to offer \"friendly advice on managing dissent.\" Your intelligence director listens on mute, visibly composing his resignation letter in his head.",
  "choices": [
   {
    "label": "Take detailed notes, thank him sincerely",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -3,
     "auth": 3
    },
    "res": "The notes leak eighteen months later. They read exactly as bad as you fear."
   },
   {
    "label": "Politely decline the advice and end the call",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 3,
     "auth": -1
    },
    "res": "Baako is offended. Your intelligence director exhales for the first time in ten minutes."
   },
   {
    "label": "Ask him to send the advice in writing, on letterhead",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "The letterhead is real. So, eventually, is the subpoena for it."
   },
   {
    "label": "Pivot the call to asking about his skincare routine",
    "eff": {
     "base": 3,
     "street": 3,
     "press": 1,
     "auth": 1
    },
    "res": "He shares it, unprompted and at length. It involves a lot of egg whites.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-14",
  "section": "phone",
  "who": "home",
  "title": "Wrong Number",
  "text": "You dial what you believe is the Secretary of Homeland Security and instead reach a retired dental hygienist named Carol in Toledo. Forty minutes later, you know all about her grandson's soccer season and she knows more about the nuclear posture review than several senators. Your chief usher is standing in the doorway, unsure what to do with any of this.",
  "choices": [
   {
    "label": "Invite Carol to the White House for coffee",
    "eff": {
     "base": 4,
     "press": -3,
     "street": 3,
     "auth": 2
    },
    "res": "Carol comes. Carol has opinions about the drapes."
   },
   {
    "label": "Apologize, hang up, actually dial the Secretary",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 2,
     "auth": 0
    },
    "res": "The Secretary is confused why you already know about the posture review."
   },
   {
    "label": "Ask Carol what she thinks you should do about the posture review",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -2,
     "auth": 2
    },
    "res": "Carol's advice is, alarmingly, adopted at the next briefing."
   },
   {
    "label": "Give Carol a made-up official title on the spot",
    "eff": {
     "base": 4,
     "street": 4,
     "congress": -2,
     "auth": 1
    },
    "res": "Special Envoy Carol now has a parking spot at the Pentagon.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-15",
  "section": "phone",
  "who": "fed",
  "title": "The Chairman's Ultimatum",
  "text": "Federal Reserve Chairman Otis Brandt calls to inform you, again, that you cannot simply \"ask nicely\" for a rate cut. \"Independence,\" he says, \"is sort of the whole point of me.\" You have already posted that he is \"weak, sleepy, and possibly a spy\" four times this week.",
  "choices": [
   {
    "label": "Demand the cut anyway and threaten to fire him",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -3,
     "auth": 3
    },
    "res": "Markets do not love the threat. Neither, technically, does the law."
   },
   {
    "label": "Accept his independence and hang up graciously",
    "eff": {
     "base": -4,
     "courts": 5,
     "congress": 2,
     "auth": -1
    },
    "res": "Rates stay put. So does your blood pressure, mostly."
   },
   {
    "label": "Demand the cut and leak his home address to a talk radio host",
    "eff": {
     "base": 5,
     "courts": -6,
     "street": -3,
     "auth": 3
    },
    "res": "Brandt hires more security. The rate stays the same anyway."
   },
   {
    "label": "Offer to trade him the rate cut for tickets to a fishing trip",
    "eff": {
     "base": 3,
     "street": 2,
     "courts": -2,
     "auth": 1
    },
    "res": "He declines. He does, however, recommend a good lake.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-16",
  "section": "phone",
  "who": "girl",
  "title": "Dial a Psychic",
  "text": "Your daughter, as a joke, programs a psychic hotline into your phone under the contact name NATIONAL SECURITY ADVISER. Madame Delphine, on the other end, informs you that \"a man with a mustache will betray you before the harvest moon.\" Your actual national security adviser has a mustache.",
  "choices": [
   {
    "label": "Fire the mustached adviser preemptively, just in case",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -2,
     "auth": 3
    },
    "res": "He was, until this moment, extremely loyal."
   },
   {
    "label": "Hang up, have a laugh, call your daughter to complain",
    "eff": {
     "base": -3,
     "street": 3,
     "press": 1,
     "auth": -1
    },
    "res": "Your daughter is unrepentant. It was worth it."
   },
   {
    "label": "Ask Madame Delphine for policy advice too, while you have her",
    "eff": {
     "base": 4,
     "street": -3,
     "press": -2,
     "auth": 2
    },
    "res": "Her forecast is wrong. Your Cabinet finds out you asked."
   },
   {
    "label": "Put Madame Delphine on retainer as an official adviser",
    "eff": {
     "base": 4,
     "press": -2,
     "street": 4,
     "auth": 1
    },
    "res": "She is, unnervingly, right about several things later.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-17",
  "section": "phone",
  "who": "son",
  "title": "Business Opportunity",
  "text": "Your son patches through a call with a man named Chaz who wants to discuss \"a really exciting energy deal, super above board, barely any Kazakhstan involvement.\" Your son is already calling him partner. Your White House counsel has started drinking at his desk.",
  "choices": [
   {
    "label": "Take the meeting, hear Chaz out fully",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -3,
     "auth": 2
    },
    "res": "Chaz's above-board deal is, in fact, below several boards."
   },
   {
    "label": "Shut it down and tell your son to stop taking these calls",
    "eff": {
     "base": -4,
     "courts": 5,
     "press": 2,
     "auth": -1
    },
    "res": "Your son sulks. Chaz finds another family member to call."
   },
   {
    "label": "Take the meeting and cut your son in as a consultant",
    "eff": {
     "base": 5,
     "courts": -6,
     "congress": -3,
     "auth": 3
    },
    "res": "Consultant is doing a lot of work in that sentence."
   },
   {
    "label": "Ask Chaz to just explain what he actually does, slowly",
    "eff": {
     "base": 3,
     "street": 2,
     "press": 1,
     "auth": 1
    },
    "res": "He cannot. This tells you everything.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-18",
  "section": "phone",
  "who": "spy",
  "title": "Everything Is Being Recorded",
  "text": "Your intelligence chief warns you mid-dial that the foreign president you are about to call, President Alenko, is known to record and eventually leak every single call for leverage. You call anyway, because he has good gossip about a mutual rival. He answers already laughing.",
  "choices": [
   {
    "label": "Talk freely, the gossip is worth the risk",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -3,
     "auth": 2
    },
    "res": "The gossip was great. The transcript, six months later, is not."
   },
   {
    "label": "Keep the call brief and painfully professional",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 3,
     "auth": 0
    },
    "res": "Alenko is bored. Boring is, for once, the strategy."
   },
   {
    "label": "Talk freely and add your own gossip about a senator",
    "eff": {
     "base": 5,
     "press": -6,
     "congress": -4,
     "auth": 3
    },
    "res": "That senator finds out from Alenko's memoir, eventually."
   },
   {
    "label": "Ask Alenko to send you a copy of the recording for your own scrapbook",
    "eff": {
     "base": 3,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "He sends it. It is, somehow, worse than you remembered.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-19",
  "section": "phone",
  "who": "social",
  "title": "The Folk Hero Prankster",
  "text": "A man calling himself The Duke of Toledo has prank called the White House switchboard eleven times this month doing an uncanny impression of a foreign head of state. This time he gets through to you directly, mid-impression, and the internet has already declared him a national treasure. Your social media director is holding up a phone showing four million views.",
  "choices": [
   {
    "label": "Play along on air, make him famous officially",
    "eff": {
     "base": 5,
     "press": -4,
     "street": 4,
     "auth": 2
    },
    "res": "The Duke of Toledo gets a talk show. You get a headache."
   },
   {
    "label": "Have the switchboard tightened up and move on",
    "eff": {
     "base": -3,
     "street": -2,
     "congress": 3,
     "auth": 0
    },
    "res": "The pranks stop. So, unfortunately, does the only fun anyone was having."
   },
   {
    "label": "Offer him a real government job as a reward",
    "eff": {
     "base": 5,
     "congress": -4,
     "street": 3,
     "auth": 2
    },
    "res": "The Duke of Toledo is now, somehow, a deputy press liaison."
   },
   {
    "label": "Do your own impression back at him, unprompted",
    "eff": {
     "base": 4,
     "street": 5,
     "press": -2,
     "auth": 1
    },
    "res": "It goes viral. It is not, by any measure, a good impression.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-20",
  "section": "phone",
  "who": "gov",
  "title": "Guard for the Parade",
  "text": "Governor Ellsbury calls asking to borrow the National Guard, not for an emergency, but for optics, mostly, at his state fair ribbon cutting. \"Tanks really pop on local news,\" he explains. Your Secretary of Defense's aide is visibly praying somewhere off camera.",
  "choices": [
   {
    "label": "Approve it, tanks at a ribbon cutting sounds fun",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -2,
     "auth": 2
    },
    "res": "The ribbon is cut. The tank backs over a funnel cake stand."
   },
   {
    "label": "Deny the request, the Guard is not a parade float",
    "eff": {
     "base": -3,
     "congress": 4,
     "courts": 2,
     "auth": 0
    },
    "res": "The ribbon cutting proceeds with, tragically, only scissors."
   },
   {
    "label": "Approve it and throw in a flyover for good measure",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "The flyover rattles every window in the county."
   },
   {
    "label": "Offer him your own personal marching band instead",
    "eff": {
     "base": 3,
     "street": 3,
     "press": 1,
     "auth": 1
    },
    "res": "You do not have a marching band. You will now need to find one.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-21",
  "section": "phone",
  "who": "mayor",
  "title": "The Bailout Call",
  "text": "Mayor Denise Okafor calls at dinner to explain that her city is, technically, out of money, and could really use just a little federal something, no strings, we are not picky. She has been mayor for six weeks. The debt predates her by a decade.",
  "choices": [
   {
    "label": "Wire the money immediately, be a hero",
    "eff": {
     "base": 4,
     "congress": -5,
     "cash": -2.5,
     "auth": 2
    },
    "res": "The check clears. So does none of the underlying problem."
   },
   {
    "label": "Explain the proper appropriations process and hang up",
    "eff": {
     "base": -3,
     "congress": 5,
     "courts": 2,
     "auth": 0
    },
    "res": "The city stays broke. The process, at least, is respected."
   },
   {
    "label": "Wire double the money and demand a statue in return",
    "eff": {
     "base": 5,
     "congress": -6,
     "cash": -3.5,
     "auth": 3
    },
    "res": "The statue is unflattering. It is also, technically, load bearing."
   },
   {
    "label": "Offer to personally audit the city budget over the phone right now",
    "eff": {
     "base": 3,
     "street": 2,
     "congress": 2,
     "auth": 1
    },
    "res": "You find fourteen errors and no solutions. Everyone is exhausted.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-phone-22",
  "section": "phone",
  "who": "pastor",
  "title": "Prayer Line",
  "text": "Pastor Michael Rourke wants you to join his radio broadcast live, right now, for a spontaneous prayer for the nation that his producer has apparently scripted in advance. \"Just say what's in your heart,\" he says, holding up cue cards you cannot see but can absolutely hear rustling.",
  "choices": [
   {
    "label": "Read every cue card word for word, hearty and loud",
    "eff": {
     "base": 5,
     "press": -4,
     "street": 3,
     "auth": 2
    },
    "res": "The nation is blessed. The nation also notices the rustling."
   },
   {
    "label": "Offer a brief, sincere, unscripted word and sign off",
    "eff": {
     "base": -3,
     "press": 4,
     "street": 1,
     "auth": -1
    },
    "res": "Short and dignified. Ratings, unfortunately, disagree with dignity."
   },
   {
    "label": "Go off script and turn it into a campaign speech",
    "eff": {
     "base": 5,
     "press": -4,
     "congress": -3,
     "auth": 3
    },
    "res": "Pastor Rourke did not clear this with the FCC. Nobody did."
   },
   {
    "label": "Ask the whole listening audience to pray for your golf handicap specifically",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "Prayers are, apparently, answered. Your handicap improves by two strokes.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-1",
  "section": "press",
  "who": "press",
  "title": "Three Sources, One Nightmare",
  "text": "The Beacon-Herald says three independent sources confirm you personally approved a plan to replace the National Guard with mall security. Two of the sources are the same guy, using different email addresses.",
  "choices": [
   {
    "label": "Call it a coordinated hoax",
    "eff": {
     "base": 4,
     "press": -6,
     "auth": 3
    },
    "res": "You invent the phrase \"fake-sourcing\" and it trends by lunch."
   },
   {
    "label": "Confirm the boring true parts and move on",
    "eff": {
     "base": -4,
     "press": 6,
     "congress": 2,
     "auth": -1
    },
    "res": "The story shrinks to one paragraph and everyone forgets it by Thursday."
   },
   {
    "label": "Sue the Beacon-Herald into bankruptcy",
    "eff": {
     "base": 4,
     "press": -7,
     "courts": -3,
     "auth": 2
    },
    "res": "The lawsuit fails, but the legal fees alone dent their masthead."
   },
   {
    "label": "Announce the mall security guards get federal pensions",
    "eff": {
     "base": 5,
     "cash": -6,
     "street": 3,
     "press": -3
    },
    "res": "Seventeen mall cops become folk heroes overnight.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-2",
  "section": "press",
  "who": "press",
  "title": "A Picture Worth One Thousand Angry Words",
  "text": "A photo of you laughing at a state funeral is everywhere. You were laughing at an aide's ringtone. The aide has since changed both his ringtone and his career plans.",
  "choices": [
   {
    "label": "Insist the photo was doctored by grief itself",
    "eff": {
     "base": 3,
     "press": -5,
     "auth": 2
    },
    "res": "Nobody can technically disprove that grief has photo editing software."
   },
   {
    "label": "Release the full video showing the ringtone",
    "eff": {
     "base": -3,
     "press": 5,
     "street": 2,
     "auth": -1
    },
    "res": "The clip is mildly funny and the story dies quietly of context."
   },
   {
    "label": "Ban cameras within fifty feet of any casket",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -2,
     "auth": 2
    },
    "res": "Funeral homes now require a permit and a metal detector."
   },
   {
    "label": "Claim you were actually crying, just with teeth showing",
    "eff": {
     "base": 4,
     "press": -2,
     "street": -1,
     "auth": 1
    },
    "res": "A tabloid runs the headline WEEPS WITH TEETH SHOWING.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-3",
  "section": "press",
  "who": "press",
  "title": "Someone In This Building Has a Burner Phone",
  "text": "Transcripts of a senior staff meeting appear online within the hour, typos and all. Whoever leaked it also quietly fixed your grammar, which somehow feels worse.",
  "choices": [
   {
    "label": "Blame it on Deep State grammar nerds",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "Copy editors nationwide report a spike in hate mail."
   },
   {
    "label": "Order a quiet, lawful internal review",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "Two aides quit rather than sit through the interviews."
   },
   {
    "label": "Polygraph the entire senior staff live on camera",
    "eff": {
     "base": 3,
     "press": -6,
     "street": -3,
     "auth": 3
    },
    "res": "Ratings are terrific. Staff morale is not."
   },
   {
    "label": "Leak a second, fake transcript to muddy the water",
    "eff": {
     "base": 5,
     "press": -4,
     "cash": -2
    },
    "res": "Three news outlets now retract three different stories.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-4",
  "section": "press",
  "who": "poll",
  "title": "The Number Nobody Wants to Say Out Loud",
  "text": "A new poll puts your approval at twenty-two percent, statistically tied with a regional soup recall. Your pollster describes the soup as \"surging.\"",
  "choices": [
   {
    "label": "Declare all polling a foreign plot",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 3
    },
    "res": "Pollsters begin traveling with private security."
   },
   {
    "label": "Acknowledge the number and outline a real plan",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 2,
     "auth": -1
    },
    "res": "Policy wonks nod approvingly. Nobody else notices."
   },
   {
    "label": "Commission your own poll of only relatives",
    "eff": {
     "base": 3,
     "press": -5,
     "cash": -3
    },
    "res": "Your uncle reports ninety-one percent approval, unprompted."
   },
   {
    "label": "Challenge the soup to a public rematch",
    "eff": {
     "base": 5,
     "street": 2,
     "press": -2
    },
    "res": "The soup cannot legally respond, and somehow still wins.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-5",
  "section": "press",
  "who": "writer",
  "title": "Late Night Does a Bit",
  "text": "A sketch show airs a full musical number about your cabinet meetings, performed entirely with puppets. The puppet playing you sings admirably off key, which is the entire joke.",
  "choices": [
   {
    "label": "Threaten the network's broadcast license",
    "eff": {
     "base": 4,
     "press": -7,
     "courts": -2,
     "auth": 3
    },
    "res": "Lawyers on both sides buy vacation homes."
   },
   {
    "label": "Send the puppet a gracious fan letter",
    "eff": {
     "base": -4,
     "press": 6,
     "street": 2,
     "auth": -1
    },
    "res": "The clip goes viral for being, against all odds, gracious."
   },
   {
    "label": "Demand equal airtime for a rebuttal puppet",
    "eff": {
     "base": 3,
     "press": -5,
     "cash": -2
    },
    "res": "Your rebuttal puppet is widely agreed to be less charming."
   },
   {
    "label": "Buy the puppet outright",
    "eff": {
     "base": 5,
     "cash": -5,
     "press": -2
    },
    "res": "The puppet is now a paid administration spokesperson. It still sings off key.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-6",
  "section": "press",
  "who": "press",
  "title": "The Correction You Refuse to Print",
  "text": "The Ledger asks you to correct a claim that unemployment is at \"the lowest number ever invented.\" They have the actual numbers. You have the confidence.",
  "choices": [
   {
    "label": "Refuse, and repeat the number louder",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "The number does not become more true, but it does become more famous."
   },
   {
    "label": "Quietly issue the correction yourself",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 1,
     "auth": -1
    },
    "res": "One line in tomorrow's briefing. Nobody notices except everyone who matters."
   },
   {
    "label": "Demand the Ledger correct their correction",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -2
    },
    "res": "A corrections war breaks out. Nobody wins. Everyone is exhausted."
   },
   {
    "label": "Introduce a brand new, unverifiable number",
    "eff": {
     "base": 5,
     "press": -3,
     "street": 1
    },
    "res": "\"Lowest number ever imagined\" enters the national lexicon.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-7",
  "section": "press",
  "who": "press",
  "title": "A Reporter Asks An Actual Question",
  "text": "At today's briefing, a reporter from a small regional paper asks a specific, well-researched, unanswerable question about the budget. The room goes silent. Somebody's phone starts recording.",
  "choices": [
   {
    "label": "Call her question fake and her paper smaller",
    "eff": {
     "base": 3,
     "press": -6,
     "auth": 2
    },
    "res": "Her subscriber count triples out of spite."
   },
   {
    "label": "Actually answer as best you can",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 2,
     "auth": -1
    },
    "res": "You are wrong about two numbers but right about the spirit of the thing."
   },
   {
    "label": "Revoke her press credentials on the spot",
    "eff": {
     "base": 4,
     "press": -7,
     "courts": -3,
     "auth": 2
    },
    "res": "A hundred other reporters now ask nothing but that exact question."
   },
   {
    "label": "Answer entirely in the form of a haiku",
    "eff": {
     "base": 4,
     "press": -3,
     "street": 2
    },
    "res": "Poetry critics are unexpectedly moved.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-8",
  "section": "press",
  "who": "social",
  "title": "The Video Where You Confess Everything",
  "text": "A hyperreal deepfake shows you calmly announcing your resignation to \"pursue a soup empire.\" It is extremely convincing. Even your chief of staff paused for a second.",
  "choices": [
   {
    "label": "Declare all video evidence of you fake, forever",
    "eff": {
     "base": 5,
     "press": -6,
     "auth": 3
    },
    "res": "You have accidentally invented a permanent alibi for everything."
   },
   {
    "label": "Post a real, boring video calmly debunking it",
    "eff": {
     "base": -4,
     "press": 6,
     "street": 2,
     "auth": -1
    },
    "res": "The debunk gets eleven percent of the views the fake got."
   },
   {
    "label": "Sue the video platform over the concept of video",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -3,
     "cash": -2
    },
    "res": "Legal scholars write papers about it. The video stays up."
   },
   {
    "label": "Announce you're launching a soup line, actually",
    "eff": {
     "base": 5,
     "cash": 3,
     "press": -2
    },
    "res": "Preorders exceed your actual approval rating.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-9",
  "section": "press",
  "who": "press",
  "title": "Your Favorite Network Wants A Favor",
  "text": "A famously friendly network offers you a full hour, no hard questions, in exchange for exclusive access to the Easter Egg Roll. Their words: \"softball doesn't begin to cover it.\"",
  "choices": [
   {
    "label": "Do the interview and trash every other outlet in it",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "The other outlets run a joint segment titled \"Softball, Actually.\""
   },
   {
    "label": "Give equal access to a fair mix of outlets",
    "eff": {
     "base": -3,
     "press": 5,
     "congress": 1,
     "auth": -1
    },
    "res": "Coverage is fair, balanced, and utterly forgettable."
   },
   {
    "label": "Give the friendly network permanent exclusive access",
    "eff": {
     "base": 4,
     "press": -6,
     "street": -2
    },
    "res": "Every other reporter now covers the Egg Roll from a nearby parking lot."
   },
   {
    "label": "Let a child reporter run the whole interview",
    "eff": {
     "base": 5,
     "press": 1,
     "street": 3
    },
    "res": "An eight year old asks noticeably better questions than anyone on staff.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-10",
  "section": "press",
  "who": "social",
  "title": "Presidential Typo Sparks National Confusion",
  "text": "Your official statement about \"defending our nation's sovreignty\" misspells sovereignty. It is already a hashtag, a t-shirt, and reportedly a minor cryptocurrency.",
  "choices": [
   {
    "label": "Claim the misspelling is a secret code for patriots",
    "eff": {
     "base": 5,
     "press": -4,
     "auth": 2
    },
    "res": "A thousand people now believe you communicate exclusively in typos."
   },
   {
    "label": "Delete it, repost it correctly, say nothing else",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 1,
     "auth": -1
    },
    "res": "Boring. Effective. Financially devastating to the t-shirt guy."
   },
   {
    "label": "Fire the intern who typed it",
    "eff": {
     "base": 3,
     "press": -5,
     "street": -2
    },
    "res": "The intern gets a book deal within the week."
   },
   {
    "label": "Trademark the misspelling yourself",
    "eff": {
     "base": 5,
     "cash": 4,
     "press": -3
    },
    "res": "You now own \"sovreignty\" in eleven merchandise categories.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-11",
  "section": "press",
  "who": "writer",
  "title": "He Wrote It All Down",
  "text": "Your former deputy chief of staff has a tell-all book out. Chapter titles include \"The Blender Incident\" and \"Nobody Told Him What NATO Stood For.\" Preorders are brisk.",
  "choices": [
   {
    "label": "Call the aide a bitter, disgraced liar on television",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 3
    },
    "res": "Book sales double. You are, once again, his marketing department."
   },
   {
    "label": "Confirm the blender story and laugh it off",
    "eff": {
     "base": -4,
     "press": 6,
     "street": 2,
     "auth": -1
    },
    "res": "You come across as a good sport for once. It unsettles your staff deeply."
   },
   {
    "label": "Have his non-disclosure agreement enforced in court",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -3,
     "cash": -2
    },
    "res": "The lawsuit becomes chapter two of the paperback edition."
   },
   {
    "label": "Write your own competing tell-all about him",
    "eff": {
     "base": 5,
     "press": -2,
     "cash": 2
    },
    "res": "Two books, one feud, infinite content.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-12",
  "section": "press",
  "who": "press",
  "title": "You Really Should Not Have Let Them Film That",
  "text": "The documentary crew you invited for \"unprecedented access\" caught eleven unguarded minutes of you yelling at a printer. Editors are reportedly \"spoiled for choice.\"",
  "choices": [
   {
    "label": "Claim the footage was staged by the printer company",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "The printer company issues a statement that is somehow more dignified than yours."
   },
   {
    "label": "Let the footage air, add a self-deprecating clip",
    "eff": {
     "base": -3,
     "press": 5,
     "street": 3,
     "auth": -1
    },
    "res": "You become, briefly, relatable. It will not last."
   },
   {
    "label": "Buy the entire documentary and shelve it",
    "eff": {
     "base": 4,
     "press": -6,
     "cash": -6
    },
    "res": "Bootleg copies circulate within a week regardless."
   },
   {
    "label": "Hold a press conference to formally apologize to the printer",
    "eff": {
     "base": 5,
     "press": -2,
     "street": 2
    },
    "res": "The printer cannot accept the apology, being a printer.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-13",
  "section": "press",
  "who": "social",
  "title": "Forty Seconds That Will Not Die",
  "text": "A forty-second clip of you mispronouncing \"infrastructure\" as \"in-fraw-structure\" three different ways in one sentence has one hundred million views and counting.",
  "choices": [
   {
    "label": "Insist the pronunciation is regional and correct",
    "eff": {
     "base": 4,
     "press": -4,
     "auth": 2
    },
    "res": "Linguists politely disagree, at length, in several op-eds."
   },
   {
    "label": "Make a self-aware joke about it at the next presser",
    "eff": {
     "base": -3,
     "press": 5,
     "street": 3,
     "auth": -1
    },
    "res": "The clip's second life is you laughing at yourself. Mildly charming."
   },
   {
    "label": "Ban the word infrastructure from official statements",
    "eff": {
     "base": 3,
     "press": -5,
     "congress": -2
    },
    "res": "Bills now describe roads as \"the long hard flat things.\""
   },
   {
    "label": "Release a remix single of the clip",
    "eff": {
     "base": 5,
     "cash": 3,
     "street": 2,
     "press": -2
    },
    "res": "It charts. You are now, technically, a recording artist.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-14",
  "section": "press",
  "who": "press",
  "title": "The Ticker That Will Not Stop Counting",
  "text": "A cable network now runs a live, permanent lower-third counter of your false statements. It ticked past four thousand this morning, during a segment about the weather.",
  "choices": [
   {
    "label": "Call the counter itself the four thousandth lie",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "Meta-lies are apparently still lies. The counter does not care."
   },
   {
    "label": "Start being genuinely more careful with your claims",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 2,
     "auth": -1
    },
    "res": "The counter's growth rate slows. Somewhere, a fact-checker weeps with boredom."
   },
   {
    "label": "Demand the network install a matching counter for your rivals",
    "eff": {
     "base": 3,
     "press": -5,
     "congress": -1
    },
    "res": "Their counter starts at zero and stays infuriatingly low."
   },
   {
    "label": "Have the counter's exact number declared classified",
    "eff": {
     "base": 5,
     "press": -4,
     "courts": -3,
     "auth": 2
    },
    "res": "The counter now just reads CLASSIFIED, which is somehow worse.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-15",
  "section": "press",
  "who": "writer",
  "title": "They've Already Written Your Obituary",
  "text": "A major paper's advance obituary desk drafts obituaries for sitting leaders in case of sudden events. Yours has leaked. Aides note it is \"surprisingly fair.\"",
  "choices": [
   {
    "label": "Demand the obituary writer be fired for morbidity",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "Every obituary writer in the country now works from an undisclosed location."
   },
   {
    "label": "Request to review it for factual accuracy only",
    "eff": {
     "base": -3,
     "press": 4,
     "congress": 1,
     "auth": -1
    },
    "res": "You correct your birthplace. Everything else stands."
   },
   {
    "label": "Publish your own, far more flattering obituary preemptively",
    "eff": {
     "base": 4,
     "press": -6,
     "street": -2
    },
    "res": "Two obituaries now circulate. Neither is comforting."
   },
   {
    "label": "Attend your own mock funeral for the publicity",
    "eff": {
     "base": 5,
     "press": -3,
     "street": 3,
     "auth": -1
    },
    "res": "Attendance is strong. The eulogies are pointed.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-16",
  "section": "press",
  "who": "press",
  "title": "The Mic Was Very Much On",
  "text": "Between segments, a hot mic catches you telling an aide that the visiting delegation \"smells like a rental car.\" The delegation has requested clarification, in writing.",
  "choices": [
   {
    "label": "Claim it was a compliment in another language",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "No such language exists. This does not slow the claim down at all."
   },
   {
    "label": "Call the ambassador and apologize personally",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "The ambassador accepts graciously, and never quite lets you forget it."
   },
   {
    "label": "Deny microphones were ever near you at any point",
    "eff": {
     "base": 3,
     "press": -5,
     "cash": -3
    },
    "res": "Audio engineers nationwide begin drinking heavily."
   },
   {
    "label": "Send the delegation a crate of air freshener as a gift",
    "eff": {
     "base": 5,
     "street": -2,
     "press": -3
    },
    "res": "The delegation is unclear whether this is an apology or an escalation.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-17",
  "section": "press",
  "who": "press",
  "title": "The Badge War",
  "text": "You've revoked the press credentials of a reporter for asking \"too many follow-ups.\" A judge is not thrilled about the First Amendment implications, apparently.",
  "choices": [
   {
    "label": "Revoke five more passes for good measure",
    "eff": {
     "base": 4,
     "press": -7,
     "courts": -4,
     "auth": 3
    },
    "res": "The briefing room is now mostly empty chairs and one very stubborn intern."
   },
   {
    "label": "Restore the pass and issue a quiet apology",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 3,
     "auth": -2
    },
    "res": "The reporter accepts. Her follow-up questions get even sharper out of spite."
   },
   {
    "label": "Appeal the judge's ruling all the way up",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -4,
     "cash": -3
    },
    "res": "You lose at every level, which somehow becomes its own news cycle."
   },
   {
    "label": "Create a whole new press pass tier called Very Good Reporters",
    "eff": {
     "base": 5,
     "press": -3,
     "auth": 2
    },
    "res": "Nobody applies. You remain the tier's only member.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-18",
  "section": "press",
  "who": "opp",
  "title": "Your Rival Has Thoughts, In Writing, With Footnotes",
  "text": "Your chief political rival publishes a scathing op-ed titled \"A Modest Proposal for Competence.\" It has footnotes. It is, several aides admit privately, well argued.",
  "choices": [
   {
    "label": "Write a furious rebuttal calling them a traitor",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 2
    },
    "res": "The rebuttal has zero footnotes and several typos."
   },
   {
    "label": "Address the substance in a calm public statement",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 2,
     "auth": -1
    },
    "res": "You concede one point. It feels like surgery without anesthesia."
   },
   {
    "label": "Demand the paper print a same-length response daily",
    "eff": {
     "base": 3,
     "press": -5,
     "congress": -1
    },
    "res": "The paper agrees, then buries your response next to the crossword."
   },
   {
    "label": "Challenge the rival to a public footnote-writing contest",
    "eff": {
     "base": 5,
     "press": -2,
     "street": 1
    },
    "res": "Nobody understands the rules. Everyone watches anyway.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-19",
  "section": "press",
  "who": "fbi",
  "title": "The Dossier Nobody Asked For",
  "text": "A career civil servant files a formal whistleblower complaint alleging you used the Situation Room to watch a soap opera finale. The complaint includes a rating: \"compelling television, questionable statecraft.\"",
  "choices": [
   {
    "label": "Discredit the whistleblower as a bitter fan of a rival show",
    "eff": {
     "base": 4,
     "press": -5,
     "auth": 3
    },
    "res": "The rival show's ratings spike. Yours, less so."
   },
   {
    "label": "Cooperate fully with the review",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 3,
     "auth": -2
    },
    "res": "The review clears you of wrongdoing and confirms you have, in fact, seen the finale."
   },
   {
    "label": "Classify the entire complaint as a national security matter",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -4,
     "auth": 2
    },
    "res": "Congress now wants to know what's so secret about a soap opera."
   },
   {
    "label": "Invite the whistleblower to watch the next finale with you",
    "eff": {
     "base": 5,
     "press": -2,
     "street": 2
    },
    "res": "They accept. It is, reportedly, a lovely evening.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-20",
  "section": "press",
  "who": "press",
  "title": "Everyone Has A Price, Allegedly",
  "text": "An aide reports that a mid-tier journalist known for tough coverage is \"gettable\" for a cabinet-adjacent job and a nice office. It is, legally speaking, extremely bad.",
  "choices": [
   {
    "label": "Do it quietly and deny it forever if asked",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -3,
     "auth": 3
    },
    "res": "He takes the job. His old colleagues never quite trust him, or you, again."
   },
   {
    "label": "Refuse and report the offer as inappropriate",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 3,
     "auth": -1
    },
    "res": "Nothing happens, except your integrity, briefly, is intact."
   },
   {
    "label": "Offer the job publicly just to see who else bites",
    "eff": {
     "base": 3,
     "press": -6,
     "congress": -2
    },
    "res": "Fourteen journalists apply. None of them were the tough ones."
   },
   {
    "label": "Hire him, then immediately assign him to weather",
    "eff": {
     "base": 5,
     "press": -4,
     "street": 1
    },
    "res": "His forecasts get more aggressive fact-checking than your entire cabinet.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-21",
  "section": "press",
  "who": "writer",
  "title": "The Impression That Won't Quit",
  "text": "A comedian's impression of you, all squint and mumble, has become more recognizable than you are. Small children reportedly now do it better than the comedian.",
  "choices": [
   {
    "label": "Sue the comedian for theft of your personality",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -3,
     "auth": 2
    },
    "res": "Legal scholars note a personality cannot, strictly, be stolen. The suit is dismissed with visible amusement."
   },
   {
    "label": "Do the impression back at a public event, self-deprecating",
    "eff": {
     "base": -4,
     "press": 6,
     "street": 3,
     "auth": -1
    },
    "res": "It gets the biggest laugh of the week, at your own expense, which turns out to be rare and valuable."
   },
   {
    "label": "Ban the comedian from all future press events",
    "eff": {
     "base": 3,
     "press": -6,
     "street": -2
    },
    "res": "The comedian just does the impression from outside the barricade, louder."
   },
   {
    "label": "Hire the comedian as your new speechwriter",
    "eff": {
     "base": 5,
     "press": -3,
     "cash": -3
    },
    "res": "Your speeches are suddenly much funnier and noticeably less coherent.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-press-22",
  "section": "press",
  "who": "social",
  "title": "The Internet Runs A Caption Contest",
  "text": "A photo of you squinting at a folder labeled URGENT, held upside down, has spawned a national caption contest. Current leader: \"Man Discovers Gravity Still Applies to Paper.\"",
  "choices": [
   {
    "label": "Demand the platform remove every entry",
    "eff": {
     "base": 4,
     "press": -6,
     "auth": 2
    },
    "res": "The removal itself wins the caption contest for irony."
   },
   {
    "label": "Pick your favorite entry and share it yourself",
    "eff": {
     "base": -3,
     "press": 5,
     "street": 3,
     "auth": -1
    },
    "res": "You are, for one afternoon, in on the joke. It goes over surprisingly well."
   },
   {
    "label": "Sue the platform for emotional distress",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -3,
     "cash": -2
    },
    "res": "The judge, reportedly, wants to enter the contest herself."
   },
   {
    "label": "Announce a cash prize for the winning caption",
    "eff": {
     "base": 5,
     "cash": -4,
     "press": -2,
     "street": 2
    },
    "res": "Entries increase four hundred percent. Quality does not.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-1",
  "section": "war",
  "who": "gen",
  "title": "The Volkovia Ping",
  "text": "A radar station near the border picked up something Tuesday night. Explosion, missile test, or General Osei's birthday fireworks, nobody's sure. The Joint Chiefs want a decision before the coffee gets cold.",
  "choices": [
   {
    "label": "Call it an act of war and mobilize the fleet",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -3,
     "street": -4,
     "auth": 4
    },
    "res": "The fleet moves. The evidence does not."
   },
   {
    "label": "Order a real investigation before saying anything",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 5,
     "courts": 4,
     "auth": 0
    },
    "res": "Nothing happened. Everyone is furious it took so long to find out."
   },
   {
    "label": "Leak that it was definitely an attack, facts pending",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -4,
     "street": -3,
     "auth": 2
    },
    "res": "The leak becomes the story. The story becomes the war."
   },
   {
    "label": "Blame a rogue weather balloon and demand NOAA apologize to the nation",
    "eff": {
     "base": 3,
     "press": -3,
     "cash": -2,
     "street": 2,
     "auth": 1
    },
    "res": "NOAA apologizes. Meteorologists quietly update their resumes.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-2",
  "section": "war",
  "who": "gen",
  "title": "The General Wants a Parade",
  "text": "General Halbrook wants tanks down Pennsylvania Avenue \"to remind the world we still have tanks.\" The Pentagon estimates the parade will cost more than several small wars.",
  "choices": [
   {
    "label": "Approve the full parade, tanks and all",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -2,
     "street": -3,
     "cash": -5,
     "auth": 3
    },
    "res": "The tanks arrive. So does the pothole bill."
   },
   {
    "label": "Order a modest flyover instead, save the money",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "Three jets fly by. Nobody claps."
   },
   {
    "label": "Double the parade, add a missile float shaped like your face",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "street": -4,
     "cash": -8,
     "auth": 3
    },
    "res": "The float is a hit with exactly one demographic: you."
   },
   {
    "label": "Let General Halbrook ride in on a horse instead of a tank",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 2,
     "cash": -1,
     "auth": 1
    },
    "res": "The horse steals the headlines. General Halbrook requests a promotion for the horse.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-3",
  "section": "war",
  "who": "gen",
  "title": "The Drone Is Waiting",
  "text": "A drone has a target in its sights somewhere near the Osei-Volkov border. Intelligence is \"pretty sure\" it's a weapons convoy and \"somewhat less sure\" it's a wedding.",
  "choices": [
   {
    "label": "Give the order, better safe than sorry",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -6,
     "street": -4,
     "auth": 4
    },
    "res": "The convoy is destroyed. So, reportedly, was the cake."
   },
   {
    "label": "Hold fire until intelligence is certain",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 6,
     "press": 4,
     "auth": 0
    },
    "res": "The convoy turns out to be a wedding. The bride sends a strongly worded letter."
   },
   {
    "label": "Strike now and strike again to be thorough",
    "eff": {
     "base": 5,
     "courts": -7,
     "street": -5,
     "press": -4,
     "auth": 3
    },
    "res": "Two strikes, one convoy, zero weddings actually found."
   },
   {
    "label": "Outsource the decision to a coin flip, broadcast live",
    "eff": {
     "base": 3,
     "press": -4,
     "street": 1,
     "cash": 1,
     "auth": 2
    },
    "res": "The coin lands on heads. Military ethicists resign as a body.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-4",
  "section": "war",
  "who": "state",
  "title": "General Osei's Tuesday Coup",
  "text": "General Osei has seized the palace in an allied nation, citing \"vibes\" and a strong desire to be addressed as Supreme Commander. Washington must decide whether to recognize him.",
  "choices": [
   {
    "label": "Recognize Osei immediately, he seems efficient",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -3,
     "street": -3,
     "auth": 3
    },
    "res": "Osei sends a thank-you fruit basket. Democracy sends its regrets."
   },
   {
    "label": "Condemn the coup, support the ousted government",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 5,
     "courts": 3,
     "auth": 0
    },
    "res": "The statement is issued. Osei is unmoved and, frankly, still in charge."
   },
   {
    "label": "Quietly arm Osei in exchange for base access",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -4,
     "street": -3,
     "cash": 3,
     "auth": 3
    },
    "res": "You get a base. Osei gets a private army. History gets an asterisk."
   },
   {
    "label": "Invite Osei to Camp David to talk it out over golf",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "cash": -2,
     "auth": 1
    },
    "res": "Osei cheats at golf and somehow you both agree that's fine.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-5",
  "section": "war",
  "who": "state",
  "title": "Six Tourists and a Grievance",
  "text": "Six American tourists have been taken by a militia in the hills claiming you personally owe them an apology for something your grandfather may or may not have said in 1961.",
  "choices": [
   {
    "label": "Send in special forces, no negotiation",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -3,
     "street": -4,
     "auth": 4
    },
    "res": "The tourists are rescued. Two goats are not."
   },
   {
    "label": "Negotiate quietly through back channels",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "The tourists come home. Nobody gets to see the cool rescue footage."
   },
   {
    "label": "Publicly threaten the militia's entire country",
    "eff": {
     "base": 4,
     "press": -5,
     "street": -4,
     "courts": -3,
     "auth": 3
    },
    "res": "The militia digs in. The country's ambassador digs up a lawyer."
   },
   {
    "label": "Apologize on their behalf for whatever grandpa said",
    "eff": {
     "base": 2,
     "press": 2,
     "street": -2,
     "cash": -1,
     "auth": -1
    },
    "res": "Nobody knows what he said either. The apology airs anyway.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-6",
  "section": "war",
  "who": "state",
  "title": "The Supreme Guide Wants to Buy Jets",
  "text": "The Supreme Guide of a nation under six different sanctions regimes wants to buy fighter jets, cash up front, no questions, \"for defensive birdwatching purposes.\"",
  "choices": [
   {
    "label": "Approve the sale, cash is cash",
    "eff": {
     "base": 4,
     "congress": -5,
     "courts": -4,
     "street": -2,
     "cash": 8,
     "auth": 3
    },
    "res": "The jets ship out. The birdwatching claim ages poorly within a week."
   },
   {
    "label": "Block the sale and refer it to the sanctions office",
    "eff": {
     "base": -3,
     "congress": 5,
     "courts": 5,
     "press": 3,
     "auth": 0
    },
    "res": "The sale is blocked. The Supreme Guide finds another supplier by Thursday."
   },
   {
    "label": "Sell the jets and throw in a training package",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -4,
     "street": -3,
     "cash": 6,
     "auth": 3
    },
    "res": "The training package includes things nobody wanted written down."
   },
   {
    "label": "Sell him decommissioned biplanes and call it a discount",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": 4,
     "street": 1,
     "auth": 1
    },
    "res": "The Supreme Guide is furious. The biplanes are, technically, delivered.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-7",
  "section": "war",
  "who": "gen",
  "title": "Shots Near the Fence",
  "text": "Soldiers on both sides of a disputed border exchanged fire overnight over what a report describes only as \"a goat-related misunderstanding.\"",
  "choices": [
   {
    "label": "Reinforce the border with three additional divisions",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -2,
     "street": -3,
     "auth": 3
    },
    "res": "The border is secure. The goat's whereabouts remain unknown."
   },
   {
    "label": "Open a hotline with the other side to de-escalate",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "The hotline works. Both sides agree the goat started it."
   },
   {
    "label": "Order a symbolic show of force, tanks at the fence line",
    "eff": {
     "base": 4,
     "street": -4,
     "courts": -3,
     "press": -3,
     "auth": 3
    },
    "res": "The tanks arrive. The goat, unbothered, returns to graze between them."
   },
   {
    "label": "Offer to personally mediate the goat dispute",
    "eff": {
     "base": 2,
     "press": 1,
     "street": 1,
     "cash": -1,
     "auth": 1
    },
    "res": "You mediate. The goat is awarded joint custody.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-8",
  "section": "war",
  "who": "spy",
  "title": "The Grid Flickers",
  "text": "Half the power grid in three states went dark for eleven minutes. Cybersecurity says it could be Volkovia, could be a teenager in a basement, could be both.",
  "choices": [
   {
    "label": "Publicly blame Volkovia and prepare retaliatory strikes",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -4,
     "street": -3,
     "auth": 4
    },
    "res": "Volkovia denies everything. The teenager keeps a low profile."
   },
   {
    "label": "Launch a forensic investigation before naming a culprit",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 5,
     "courts": 4,
     "auth": 0
    },
    "res": "The teenager is found. He is grounded, not extradited."
   },
   {
    "label": "Retaliate with a cyberattack of your own, no proof needed",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "street": -3,
     "auth": 3
    },
    "res": "The counterattack hits the wrong grid. In Ohio."
   },
   {
    "label": "Announce the blackout was a scheduled drill all along",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "cash": -1,
     "auth": 2
    },
    "res": "Nobody believes it. The lie becomes oddly comforting anyway.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-9",
  "section": "war",
  "who": "spy",
  "title": "Volkov Tests a Missile, Badly",
  "text": "President Volkov test-launched a new missile that, per satellite footage, wobbled, spun twice, and landed in his own country's wheat field. State media calls it a triumph.",
  "choices": [
   {
    "label": "Respond with a bigger test of your own, same week",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -2,
     "street": -2,
     "cash": -6,
     "auth": 4
    },
    "res": "Your missile also wobbles. Nobody reports it."
   },
   {
    "label": "Quietly note the failure and stand down",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "Volkov's wheat field yield is up nine percent from the fertilizer."
   },
   {
    "label": "Mock Volkov publicly and threaten a preemptive strike",
    "eff": {
     "base": 5,
     "press": -5,
     "street": -4,
     "courts": -3,
     "auth": 3
    },
    "res": "Volkov, humiliated, promises a second test. Bigger wheat field."
   },
   {
    "label": "Send Volkov a condolence card for the wheat field",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 1,
     "cash": -1,
     "auth": 1
    },
    "res": "Volkov is not amused. The card gets more coverage than the missile.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-10",
  "section": "war",
  "who": "state",
  "title": "A Peace Deal Nobody Asked You to Ruin",
  "text": "Your negotiators have quietly finished a peace deal ending a decade-old conflict. It is, unfortunately, boring television.",
  "choices": [
   {
    "label": "Announce you'll add \"tougher\" terms live on air, deal be damned",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -4,
     "street": -4,
     "auth": 3
    },
    "res": "The deal collapses on live television. Ratings, admittedly, are strong."
   },
   {
    "label": "Let the negotiators sign it quietly and take the win",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 5,
     "courts": 3,
     "auth": 1
    },
    "res": "The war ends. The broadcast gets nine viewers, all relieved."
   },
   {
    "label": "Hold the signing hostage until they add your name to it",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "street": -3,
     "auth": 3
    },
    "res": "The deal is renamed after you. The other side reconsiders everything."
   },
   {
    "label": "Turn the signing ceremony into a game show",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "cash": 2,
     "auth": 1
    },
    "res": "The rebels win a toaster. Peace holds, somehow, out of spite.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-11",
  "section": "war",
  "who": "spy",
  "title": "A Defector Wants Asylum",
  "text": "A senior official from the Supreme Guide's government has shown up at an embassy with a flash drive and a request for a nice house in Florida.",
  "choices": [
   {
    "label": "Grant asylum and parade him on television immediately",
    "eff": {
     "base": 4,
     "congress": -3,
     "courts": -2,
     "street": -2,
     "auth": 3
    },
    "res": "The Supreme Guide is enraged. The defector loves the attention."
   },
   {
    "label": "Debrief him quietly through proper channels first",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "courts": 4,
     "auth": 0
    },
    "res": "The flash drive is mostly vacation photos and one useful map."
   },
   {
    "label": "Leak his identity to pressure his old government",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "street": -2,
     "auth": 2
    },
    "res": "The pressure works. So does the assassination attempt, nearly."
   },
   {
    "label": "Trade him for two pandas, no questions asked",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": -4,
     "street": 1,
     "auth": 1
    },
    "res": "The pandas arrive. The defector is deeply insulted by the exchange rate.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-12",
  "section": "war",
  "who": "amb",
  "title": "Ships in the Narrow Water",
  "text": "A Volkovian destroyer and a US carrier group are close enough in the strait to exchange strongly worded flag signals. Neither side wants to blink first.",
  "choices": [
   {
    "label": "Order the carrier group to hold position, guns ready",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -3,
     "street": -3,
     "auth": 4
    },
    "res": "Nobody blinks. Everyone's fuel gauge drops alarmingly."
   },
   {
    "label": "Reroute the carrier group to avoid the confrontation",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "The ships pass safely. The admiral is quietly disappointed."
   },
   {
    "label": "Order a live-fire exercise right there, for emphasis",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -4,
     "street": -4,
     "auth": 3
    },
    "res": "The exercise is very loud and very close. Volkov sends a formal complaint and a louder one."
   },
   {
    "label": "Challenge the Volkovian captain to a chess match by radio",
    "eff": {
     "base": 3,
     "press": -1,
     "street": 1,
     "cash": -1,
     "auth": 1
    },
    "res": "You win. The captain claims his queen was jammed by radar.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-13",
  "section": "war",
  "who": "state",
  "title": "A Rebellion Needs an Allowance",
  "text": "A rebel coalition fighting the Supreme Guide's government wants weapons, cash, and \"moral support,\" in that order.",
  "choices": [
   {
    "label": "Fund them fully, covertly, no oversight",
    "eff": {
     "base": 5,
     "congress": -6,
     "courts": -5,
     "street": -3,
     "cash": -7,
     "auth": 4
    },
    "res": "The rebellion advances. So does the paper trail."
   },
   {
    "label": "Offer humanitarian aid only, no weapons",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 4,
     "courts": 3,
     "auth": 0
    },
    "res": "The rebels are grateful for the blankets and unimpressed by the strategy."
   },
   {
    "label": "Fund them and their two rival rebel factions too, hedge your bets",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -4,
     "street": -3,
     "cash": -8,
     "auth": 3
    },
    "res": "The three factions now spend more time fighting each other than the government."
   },
   {
    "label": "Fund them with a telethon",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": 5,
     "street": 1,
     "auth": 1
    },
    "res": "The telethon raises millions. A celebrity host now claims to be a foreign policy expert.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-14",
  "section": "war",
  "who": "spy",
  "title": "A Modest Proposal from the Basement",
  "text": "A staffer, speaking very quietly with the door closed, suggests a \"small incident\" might be arranged to justify the war everyone already wants.",
  "choices": [
   {
    "label": "Approve it, deniably, off the books",
    "eff": {
     "base": 5,
     "congress": -6,
     "courts": -7,
     "street": -4,
     "auth": 3
    },
    "res": "The incident happens. So, eventually, does the investigation."
   },
   {
    "label": "Fire the staffer and report the suggestion",
    "eff": {
     "base": -5,
     "congress": 6,
     "press": 6,
     "courts": 5,
     "auth": -1
    },
    "res": "The staffer is gone. The war, for now, waits for a real reason."
   },
   {
    "label": "Approve it and expand the plan to two incidents, for redundancy",
    "eff": {
     "base": 5,
     "courts": -8,
     "press": -6,
     "street": -5,
     "auth": 3
    },
    "res": "Redundancy achieved. So has a federal case, eventually."
   },
   {
    "label": "Stage a fake incident using actors and a rented tank",
    "eff": {
     "base": 3,
     "press": -4,
     "cash": -3,
     "street": -1,
     "auth": 2
    },
    "res": "The actors are convincing. The rental company wants the tank back.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-15",
  "section": "war",
  "who": "amb",
  "title": "The Summit You'd Rather Skip",
  "text": "The annual alliance summit is this weekend. Attendance means group photos and shared communiques. Skipping means everyone talks about you anyway, just less politely.",
  "choices": [
   {
    "label": "Skip it and hold a rally instead, bigger crowd",
    "eff": {
     "base": 5,
     "congress": -3,
     "courts": -1,
     "street": -2,
     "auth": 3
    },
    "res": "The alliance notices. The rally crowd does not care."
   },
   {
    "label": "Attend, sign the communique, smile for the photo",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "The photo is unremarkable. The alliance holds, barely noticing you."
   },
   {
    "label": "Attend and refuse to sign anything, on principle, unspecified",
    "eff": {
     "base": 4,
     "courts": -3,
     "press": -4,
     "street": -2,
     "auth": 2
    },
    "res": "The photo is awkward. The principle is never actually named."
   },
   {
    "label": "Send a cardboard cutout in your place",
    "eff": {
     "base": 3,
     "press": -3,
     "street": 1,
     "cash": -1,
     "auth": 1
    },
    "res": "The cutout is treated with more diplomatic respect than expected.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-16",
  "section": "war",
  "who": "gen",
  "title": "Space Force Wants a Flag on the Moon",
  "text": "The newly minted Space Force wants to plant a flag with your face on it on the lunar surface, \"for deterrence.\"",
  "choices": [
   {
    "label": "Fund the mission in full, launch by next quarter",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -2,
     "street": -2,
     "cash": -8,
     "auth": 3
    },
    "res": "The flag reaches orbit. The face is, per NASA, \"recognizable from low orbit only.\""
   },
   {
    "label": "Redirect the budget to an actual research mission",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 4,
     "courts": 2,
     "auth": 0
    },
    "res": "The research mission launches quietly. Nobody sees your face anywhere."
   },
   {
    "label": "Also add a laser, deterrence needs a laser",
    "eff": {
     "base": 5,
     "courts": -4,
     "press": -5,
     "street": -3,
     "cash": -8,
     "auth": 3
    },
    "res": "The laser works fine. Seventeen countries file formal objections anyway."
   },
   {
    "label": "Crowdfund the flag mission",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": 4,
     "street": 1,
     "auth": 1
    },
    "res": "The crowdfunding succeeds. Backers receive a certificate and mild regret.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-17",
  "section": "war",
  "who": "press",
  "title": "Naming Rights",
  "text": "Your communications team suggests the ongoing conflict abroad be officially renamed after you, \"for legacy purposes.\"",
  "choices": [
   {
    "label": "Approve the renaming immediately, full ceremony",
    "eff": {
     "base": 5,
     "congress": -3,
     "courts": -2,
     "street": -3,
     "auth": 4
    },
    "res": "The war has your name on it now. So does every casualty report."
   },
   {
    "label": "Decline, wars shouldn't have your name on them",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 5,
     "courts": 2,
     "auth": -1
    },
    "res": "The war keeps its old, boring name. History remains unimpressed either way."
   },
   {
    "label": "Rename it and commission a commemorative coin",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -2,
     "street": -2,
     "cash": -3,
     "auth": 3
    },
    "res": "The coin is minted. The war continues, now with merchandise."
   },
   {
    "label": "Let the public vote on the name instead",
    "eff": {
     "base": 3,
     "press": -2,
     "street": 2,
     "cash": -1,
     "auth": 1
    },
    "res": "The public votes for something unprintable. It is quietly overruled.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-18",
  "section": "war",
  "who": "gen",
  "title": "The Very Big Button",
  "text": "Aides have installed a large red button on your desk, \"for morale,\" they say, though it is connected to something that used to require three keys and a general's handshake.",
  "choices": [
   {
    "label": "Threaten to press it on television, see what happens",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -4,
     "street": -4,
     "auth": 4
    },
    "res": "Nobody presses anything. Everybody sleeps a little worse."
   },
   {
    "label": "Have the button removed and the protocol restored",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 5,
     "press": 4,
     "auth": -1
    },
    "res": "The button is gone. The desk looks strangely empty."
   },
   {
    "label": "Press it partway, \"just to test it,\" in front of reporters",
    "eff": {
     "base": 5,
     "courts": -6,
     "street": -5,
     "press": -5,
     "auth": 3
    },
    "res": "It was, mercifully, unplugged. The footage is not reassuring anyone."
   },
   {
    "label": "Replace it with a button that just orders pizza",
    "eff": {
     "base": 2,
     "press": 1,
     "cash": -2,
     "street": 1,
     "auth": 1
    },
    "res": "The pizza arrives. Morale, against all odds, genuinely improves.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-19",
  "section": "war",
  "who": "gen",
  "title": "A Man in a Very Nice Suit",
  "text": "A private military contractor offers to handle \"the whole Volkov situation\" for a flat fee, no congressional oversight, no paperwork, no questions.",
  "choices": [
   {
    "label": "Hire the contractor, cash up front, keep it quiet",
    "eff": {
     "base": 5,
     "congress": -6,
     "courts": -5,
     "street": -3,
     "cash": -8,
     "auth": 3
    },
    "res": "The situation is handled. Nobody can say exactly how."
   },
   {
    "label": "Decline and route the matter through the Pentagon",
    "eff": {
     "base": -3,
     "congress": 5,
     "courts": 4,
     "press": 3,
     "auth": 0
    },
    "res": "The Pentagon takes it slow. The man in the suit takes his business elsewhere."
   },
   {
    "label": "Hire the contractor and give him a second contract, unrelated",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -4,
     "street": -3,
     "cash": -8,
     "auth": 3
    },
    "res": "Both contracts get handled. Neither shows up in any budget."
   },
   {
    "label": "Negotiate his fee down using his own tactics",
    "eff": {
     "base": 2,
     "cash": 3,
     "street": -1,
     "press": -1,
     "auth": 1
    },
    "res": "He respects the hustle. He also doubles his rate next time.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-20",
  "section": "war",
  "who": "treas",
  "title": "An Island Is for Sale",
  "text": "A small Pacific nation is willing to sell a strategically located island for a naval base, if the price is right and the paperwork stays vague.",
  "choices": [
   {
    "label": "Buy it outright, announce a new base by Friday",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -3,
     "street": -2,
     "cash": -8,
     "auth": 3
    },
    "res": "The base is built. The locals are, notably, not consulted."
   },
   {
    "label": "Negotiate a lease instead of an outright purchase",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 4,
     "courts": 3,
     "auth": 0
    },
    "res": "The lease is signed. It is, everyone admits, the boring correct choice."
   },
   {
    "label": "Buy it and three neighboring islands, just in case",
    "eff": {
     "base": 4,
     "courts": -4,
     "press": -4,
     "street": -2,
     "cash": -8,
     "auth": 3
    },
    "res": "You now own four islands and a rapidly worsening relationship with the region."
   },
   {
    "label": "Try to trade Guam's extra ferry for it",
    "eff": {
     "base": 2,
     "press": -1,
     "cash": 2,
     "street": 1,
     "auth": 1
    },
    "res": "The offer is declined. The ferry captain is relieved.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-21",
  "section": "war",
  "who": "gen",
  "title": "The Submarine Stopped Calling",
  "text": "A US submarine near Volkovian waters missed its last two scheduled check-ins. It could be a comms failure. It could be worse. Nobody wants to say which out loud.",
  "choices": [
   {
    "label": "Mobilize the fleet and demand answers from Volkov immediately",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -3,
     "street": -3,
     "auth": 4
    },
    "res": "The fleet mobilizes. The submarine, it turns out, had a dead radio."
   },
   {
    "label": "Quietly dispatch a recovery vessel and wait",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 3,
     "courts": 4,
     "auth": -1
    },
    "res": "The submarine surfaces on schedule three hours later. Nobody tells the press."
   },
   {
    "label": "Announce publicly that a US sub may be missing, presumed provoked",
    "eff": {
     "base": 5,
     "press": -6,
     "street": -4,
     "courts": -3,
     "auth": 3
    },
    "res": "Global markets panic for six hours. The radio, again, was just dead."
   },
   {
    "label": "Send a strongly worded fax to the submarine",
    "eff": {
     "base": 2,
     "press": 1,
     "cash": -1,
     "street": 1,
     "auth": 1
    },
    "res": "Submarines do not have fax machines. This is now widely known.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-war-22",
  "section": "war",
  "who": "gen",
  "title": "The General Quits, Loudly",
  "text": "General Halbrook has resigned in protest of \"the direction of this administration's foreign policy,\" and is giving interviews about it, which is new.",
  "choices": [
   {
    "label": "Publicly attack Halbrook's character on television",
    "eff": {
     "base": 5,
     "congress": -4,
     "courts": -2,
     "street": -3,
     "press": -4,
     "auth": 3
    },
    "res": "Halbrook responds with a book deal. The book deal responds with sales."
   },
   {
    "label": "Accept the resignation gracefully, wish him well",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 5,
     "courts": 2,
     "auth": -1
    },
    "res": "Halbrook leaves quietly. Reporters find him disappointingly gracious too."
   },
   {
    "label": "Strip Halbrook of his pension out of spite",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -5,
     "street": -3,
     "auth": 3
    },
    "res": "The pension is gone. So is any remaining goodwill from the entire officer corps."
   },
   {
    "label": "Offer Halbrook a talk show to keep him busy",
    "eff": {
     "base": 3,
     "press": -2,
     "cash": -3,
     "street": 1,
     "auth": 1
    },
    "res": "Halbrook accepts. His ratings, infuriatingly, beat yours.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-1",
  "section": "street",
  "who": "mayor",
  "title": "Camp Constitution",
  "text": "Protesters have occupied Liberty Square in downtown Columbus for six days, renamed it Camp Constitution, and installed a raccoon named Steve as honorary mayor. Steve is polling better than the actual mayor.",
  "choices": [
   {
    "label": "Send in the force",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "street": -6,
     "auth": 4
    },
    "res": "The camp is cleared by dawn. Steve is released without charges, which is more than can be said for everyone else."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 6,
     "press": 4,
     "congress": 3
    },
    "res": "You send porta-potties instead of riot shields, and the story becomes about your surprising decency."
   },
   {
    "label": "The worse idea",
    "eff": {
     "base": 5,
     "street": -8,
     "press": -6,
     "courts": -5,
     "auth": 3
    },
    "res": "You have the square bulldozed at 3 AM. Camp Constitution reopens two blocks over as Camp Constitution Two."
   },
   {
    "label": "Buy the square outright",
    "eff": {
     "base": 3,
     "cash": -5,
     "street": -2,
     "press": -2
    },
    "res": "You purchase Liberty Square for eleven million dollars and rename it the National Toy Museum. Attendance disappoints.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-2",
  "section": "street",
  "who": "vp",
  "title": "Everybody's Out",
  "text": "Twelve unions call a coordinated general strike. Garbage piles up, trains stop, and a barista in Toledo becomes a folk hero overnight for refusing to make your press secretary an oat milk latte.",
  "choices": [
   {
    "label": "Declare the strike illegal",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "street": -6,
     "auth": 4
    },
    "res": "Organizers are arrested by dinnertime. The garbage stays right where it is."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -5,
     "street": 5,
     "congress": 4,
     "press": 3,
     "auth": 1
    },
    "res": "You open negotiations and offer modest concessions. The trains run again, grudgingly."
   },
   {
    "label": "Bus in strikebreakers",
    "eff": {
     "base": 4,
     "street": -7,
     "press": -5,
     "courts": -4,
     "auth": 2
    },
    "res": "The strikebreakers cannot find the depot, then cannot find each other, then go home."
   },
   {
    "label": "Declare a surprise national holiday",
    "eff": {
     "base": 3,
     "cash": -3,
     "press": -2
    },
    "res": "You announce National Worker Appreciation Day, effective immediately, so the strike now looks like everyone simply took the day off.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-3",
  "section": "street",
  "who": "press",
  "title": "The Pool Incident",
  "text": "Bodycam footage of an officer using considerable force to confiscate a child's inflatable pool for \"blocking a fire hydrant\" reaches forty million views before your morning briefing even starts.",
  "choices": [
   {
    "label": "Back the officer",
    "eff": {
     "base": 5,
     "press": -5,
     "street": -6,
     "courts": -3,
     "auth": 3
    },
    "res": "You call critics soft on crime. The pool remains in evidence storage indefinitely."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "press": 5,
     "street": 4,
     "congress": 2
    },
    "res": "You order an independent review and a public apology. The child gets the pool back, slightly deflated."
   },
   {
    "label": "Promote the officer on live television",
    "eff": {
     "base": 4,
     "press": -7,
     "street": -8,
     "courts": -4,
     "auth": 3
    },
    "res": "The ceremony is well attended by exactly the wrong crowd for the optics you wanted."
   },
   {
    "label": "Mail the kid a signed pool",
    "eff": {
     "base": 2,
     "cash": -1,
     "press": -1,
     "street": -1
    },
    "res": "You send an autographed inflatable pool with a note reading \"no hard feelings.\" The internet is not appeased.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-4",
  "section": "street",
  "who": "gen",
  "title": "The Rally in Your Honour",
  "text": "A militia calling itself the Minutemen Redux plans a torchlit rally \"in support of the President,\" featuring camouflage, energy drinks, and a bounce house shaped like an eagle.",
  "choices": [
   {
    "label": "Let them march, no restrictions",
    "eff": {
     "base": 5,
     "press": -5,
     "street": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "The eagle bounce house deflates mid-rally. Photographs of the collapse outlive the rally itself."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 4,
     "press": 4,
     "congress": 3
    },
    "res": "You quietly ask them to cancel and thank them for their support instead. Most comply, muttering."
   },
   {
    "label": "Send an official honor guard",
    "eff": {
     "base": 4,
     "street": -6,
     "press": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Photographs of soldiers standing beside camouflage enthusiasts run on every front page by morning."
   },
   {
    "label": "Send a signed cooler of energy drinks",
    "eff": {
     "base": 3,
     "cash": -2,
     "press": -2
    },
    "res": "The gift is well received. Several attendees do not sleep for three days.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-5",
  "section": "street",
  "who": "home",
  "title": "Down Comes the General",
  "text": "A crowd topples the statue of a long-dead general outside the old courthouse, drags it four blocks, and drops it into the fountain, where it now appears to be swimming.",
  "choices": [
   {
    "label": "Arrest everyone on camera",
    "eff": {
     "base": 4,
     "press": -5,
     "street": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Forty arrests are made. The statue remains in the fountain, doing the backstroke."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -3,
     "street": 5,
     "press": 4,
     "congress": 3
    },
    "res": "You quietly agree the statue can be relocated to a museum. The fountain is drained and cleaned."
   },
   {
    "label": "Order it rebuilt twice as large",
    "eff": {
     "base": 5,
     "street": -7,
     "press": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "The new statue is delivered by crane at midnight under armed guard. It is toppled again within the week."
   },
   {
    "label": "Declare the fountain a historic swimming exhibit",
    "eff": {
     "base": 3,
     "cash": -2,
     "press": -2
    },
    "res": "Tourists now pay five dollars to view the general mid-crawl-stroke. He does not object.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-6",
  "section": "street",
  "who": "mayor",
  "title": "Curfew Call",
  "text": "Mayor Delgado wants a citywide curfew after three nights of unrest. Your advisors are split between \"yes, obviously\" and \"that is how you get a much bigger protest.\"",
  "choices": [
   {
    "label": "Impose the curfew, hard",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -4,
     "street": -5,
     "auth": 4
    },
    "res": "The curfew holds for one night before ten thousand people decide 9 PM is a suggestion."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 3,
     "congress": 3
    },
    "res": "You decline the curfew and let the city police itself. It mostly does."
   },
   {
    "label": "Curfew plus a checkpoint on every block",
    "eff": {
     "base": 5,
     "street": -7,
     "press": -6,
     "courts": -5,
     "auth": 3
    },
    "res": "Traffic grinds to a halt citywide. So does everything else, including sympathy for you."
   },
   {
    "label": "Curfew, but only for pigeons",
    "eff": {
     "base": 2,
     "press": -1,
     "street": -1
    },
    "res": "The Pigeon Curfew Ordinance is, legal scholars confirm, completely unenforceable and mostly a joke that lands.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-7",
  "section": "street",
  "who": "fbi",
  "title": "Papers, Please",
  "text": "Overnight raids target undocumented workers at a produce warehouse, sweeping up several actual citizens who simply forgot their wallets, including a retired judge.",
  "choices": [
   {
    "label": "Expand the raids",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -5,
     "street": -6,
     "auth": 4
    },
    "res": "The retired judge is released with an apology letter. The warehouse never reopens."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -5,
     "street": 6,
     "press": 5,
     "congress": 3
    },
    "res": "You suspend the raids pending review. The produce, sadly, continues to rot on schedule."
   },
   {
    "label": "Raid the courthouse too, for good measure",
    "eff": {
     "base": 4,
     "street": -7,
     "courts": -7,
     "press": -6,
     "auth": 3
    },
    "res": "Several judges are detained for four hours before anyone checks their badges."
   },
   {
    "label": "Offer the judge a formal state apology basket",
    "eff": {
     "base": 2,
     "cash": -2,
     "press": -1
    },
    "res": "The basket contains a fruit selection sourced from the very warehouse that was raided.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-8",
  "section": "street",
  "who": "cos",
  "title": "Take a Knee, Take a Stand",
  "text": "Half the stadium kneels during the anthem at the championship game while the other half boos loud enough to be heard on the broadcast. Your chief of staff wants a statement before halftime.",
  "choices": [
   {
    "label": "Demand the league punish them",
    "eff": {
     "base": 5,
     "press": -5,
     "street": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "The league declines, citing a contract you did not read. You look it up; it is airtight."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 4,
     "press": 4,
     "congress": 2
    },
    "res": "You say nothing at all, which turns out to be the least newsworthy option on the table."
   },
   {
    "label": "Threaten the league's broadcast rights",
    "eff": {
     "base": 5,
     "congress": -5,
     "press": -6,
     "street": -3,
     "auth": 3
    },
    "res": "Three networks quietly explore moving future games out of the country."
   },
   {
    "label": "Attend the next game and kneel yourself, ironically",
    "eff": {
     "base": 3,
     "press": -2,
     "street": -1
    },
    "res": "Nobody can agree on what your kneeling meant, including you.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-9",
  "section": "street",
  "who": "gov",
  "title": "The Caravan That Wasn't",
  "text": "Cable news reports a \"massive caravan\" approaching the southern border. On closer inspection it is a church youth group's minibus tour, but the panic is already trending.",
  "choices": [
   {
    "label": "Deploy troops to the border immediately",
    "eff": {
     "base": 5,
     "cash": -4,
     "press": -5,
     "courts": -3,
     "auth": 4
    },
    "res": "Three thousand soldiers greet a church minibus and a very confused youth pastor."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "press": 5,
     "street": 3,
     "congress": 3
    },
    "res": "You clarify the facts publicly. The panic deflates, and so does the news cycle."
   },
   {
    "label": "Declare a formal border emergency anyway",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "The emergency declaration outlives the minibus by several months."
   },
   {
    "label": "Invite the youth group to the White House",
    "eff": {
     "base": 2,
     "cash": -2,
     "press": 1
    },
    "res": "Seventeen teenagers tour the Rose Garden. Two of them ask surprisingly good questions.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-10",
  "section": "street",
  "who": "lawyer",
  "title": "The Quad Won't Quit",
  "text": "Students at three major universities occupy the administration buildings and issue a list of demands that includes, alongside tuition reform, \"better vending machine snacks.\"",
  "choices": [
   {
    "label": "Send federal agents to clear the quads",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "street": -6,
     "auth": 4
    },
    "res": "The occupation ends. So, within a semester, does most of the alumni giving."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 4,
     "congress": 3
    },
    "res": "You let the universities handle it and quietly note the vending machine demand has real merit."
   },
   {
    "label": "Threaten to pull all federal research funding",
    "eff": {
     "base": 5,
     "congress": -5,
     "press": -6,
     "courts": -3,
     "auth": 3
    },
    "res": "Several deans call in a panic. Several more call to say they had already resigned."
   },
   {
    "label": "Restock the vending machines yourself",
    "eff": {
     "base": 2,
     "cash": -3,
     "street": 1
    },
    "res": "The snacks are excellent. The other demands remain unaddressed.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-11",
  "section": "street",
  "who": "state",
  "title": "Eighteen Wheels of Fury",
  "text": "Truckers blockade the interstate for three states running, protesting a new fuel tax by parking, honking, and grilling an enormous quantity of bratwurst directly on the shoulder.",
  "choices": [
   {
    "label": "Order the highway cleared by force",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -3,
     "street": -5,
     "auth": 3
    },
    "res": "Tow trucks arrive to tow trucks. The bratwurst is confiscated as evidence."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "congress": 4,
     "press": 3
    },
    "res": "You suspend the fuel tax pending review. The interstate reopens by dinner, smelling of bratwurst."
   },
   {
    "label": "Deputize the state police to seize the rigs",
    "eff": {
     "base": 4,
     "street": -6,
     "press": -5,
     "courts": -4,
     "auth": 3
    },
    "res": "Impounding four hundred semi trucks turns out to require a lot filled with, currently, four hundred semi trucks."
   },
   {
    "label": "Send a case of mustard as a peace offering",
    "eff": {
     "base": 2,
     "cash": -1,
     "press": -1
    },
    "res": "The truckers accept the mustard and remain parked on principle.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-12",
  "section": "street",
  "who": "home",
  "title": "A Monument to Yourself",
  "text": "You want a two-hundred-foot statue of yourself erected on the National Mall. Engineers say it is structurally possible. Everyone else says it is a terrible idea.",
  "choices": [
   {
    "label": "Fast-track construction, ignore objections",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "congress": -4,
     "auth": 3
    },
    "res": "The statue rises on schedule. Pigeons claim the head within a week."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 4,
     "street": 2
    },
    "res": "You quietly shelve the idea and let it die in committee, where these things go to rest."
   },
   {
    "label": "Make it three hundred feet, out of gold",
    "eff": {
     "base": 5,
     "cash": -8,
     "press": -6,
     "congress": -4,
     "auth": 3
    },
    "res": "The gold cladding is stripped by scrap thieves before the ribbon-cutting."
   },
   {
    "label": "Build it, but let citizens vote on the pose",
    "eff": {
     "base": 3,
     "cash": -4,
     "press": -1
    },
    "res": "The winning pose, chosen by public vote, is you riding a moose. Construction proceeds.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-13",
  "section": "street",
  "who": "gen",
  "title": "Calling Up the Guard",
  "text": "Unrest in four cities has your generals recommending a full National Guard call-up. It is the kind of decision that looks great in a briefing and terrible on a front page.",
  "choices": [
   {
    "label": "Full call-up, all four cities",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "street": -6,
     "auth": 4
    },
    "res": "Twelve thousand troops deploy. The photographs of soldiers on Main Street run for a week straight."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -5,
     "street": 6,
     "press": 4,
     "congress": 3
    },
    "res": "You rely on local police and community leaders instead. It is slower, and it works."
   },
   {
    "label": "Call up the Guard and federalize local police too",
    "eff": {
     "base": 4,
     "congress": -5,
     "courts": -4,
     "street": -6,
     "auth": 3
    },
    "res": "Local chiefs resent the takeover. Two resign publicly, at length, on camera."
   },
   {
    "label": "Deploy the Guard, but only for cleanup duty",
    "eff": {
     "base": 3,
     "cash": -2,
     "press": -1
    },
    "res": "Soldiers spend the week picking up litter. It is oddly effective at calming everyone down.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-14",
  "section": "street",
  "who": "gov",
  "title": "When the Counter-Protest Counter-Protests",
  "text": "A rally you organized in your own support draws a counter-protest, which draws a counter-counter-protest, and now nobody at the scene remembers which side they started on.",
  "choices": [
   {
    "label": "Send police to protect only your supporters",
    "eff": {
     "base": 4,
     "press": -5,
     "street": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "The optics of one-sided protection outlive the rally by weeks in every news cycle."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 4,
     "congress": 2
    },
    "res": "You call for calm on all sides and mean it, which confuses absolutely everyone."
   },
   {
    "label": "Send police to arrest the counter-protesters only",
    "eff": {
     "base": 5,
     "street": -6,
     "press": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Jail intake processes people by which sign they were holding, which is not a legal category."
   },
   {
    "label": "Cancel the rally, blame a scheduling conflict",
    "eff": {
     "base": 2,
     "press": -1,
     "street": 1
    },
    "res": "Everyone goes home confused but, notably, not fighting.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-15",
  "section": "street",
  "who": "mayor",
  "title": "Mayor Delgado Says No",
  "text": "Mayor Delgado publicly refuses to enforce your latest street order, standing on the courthouse steps and reading the Constitution aloud through a bullhorn to a very engaged crowd.",
  "choices": [
   {
    "label": "Remove her from office by federal order",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -6,
     "congress": -4,
     "auth": 4
    },
    "res": "The removal order triggers a lawsuit that will outlast your entire term, possibly your life."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 5,
     "congress": 3
    },
    "res": "You quietly rescind the order rather than fight a mayor with a bullhorn and the Constitution."
   },
   {
    "label": "Cut off all federal funding to her city",
    "eff": {
     "base": 4,
     "congress": -4,
     "street": -5,
     "press": -5,
     "auth": 3
    },
    "res": "The city's roads go unrepaired. Mayor Delgado's approval rating does not."
   },
   {
    "label": "Challenge her to a public debate on the courthouse steps",
    "eff": {
     "base": 3,
     "press": -2,
     "street": -1
    },
    "res": "She agrees immediately and brings note cards. You did not bring note cards.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-16",
  "section": "street",
  "who": "social",
  "title": "The Woman With the Sign",
  "text": "A single woman standing silently outside your motorcade route holding a hand-lettered sign becomes the most-shared image of the month, somehow more viral than anything your team produces.",
  "choices": [
   {
    "label": "Have her removed from the route",
    "eff": {
     "base": 4,
     "press": -6,
     "street": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "Removing one silent woman with a sign generates roughly forty times her original audience."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -3,
     "press": 5,
     "street": 4,
     "congress": 2
    },
    "res": "You wave at her on the way past. It is a small gesture and it works, somewhat."
   },
   {
    "label": "Have your team produce a rival viral moment",
    "eff": {
     "base": 4,
     "cash": -3,
     "press": -5,
     "street": -2
    },
    "res": "The rival moment is widely mocked as staged, because it was, in fact, staged."
   },
   {
    "label": "Invite her in for coffee",
    "eff": {
     "base": 2,
     "cash": -1,
     "press": -1
    },
    "res": "She accepts, keeps the sign the entire time, and it becomes the second most-shared image of the month.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-17",
  "section": "street",
  "who": "cos",
  "title": "The March of the Locals",
  "text": "A labour march winds through the capital demanding higher wages, better hours, and, inexplicably, a national holiday for the vernal equinox.",
  "choices": [
   {
    "label": "Order the march dispersed",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -3,
     "street": -5,
     "auth": 3
    },
    "res": "The march regroups two blocks later, now with a new grievance and a bigger crowd."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "congress": 4,
     "press": 3
    },
    "res": "You meet with union leaders and offer real concessions. The equinox holiday stays on the wish list."
   },
   {
    "label": "Order the march dispersed with mounted police",
    "eff": {
     "base": 5,
     "street": -7,
     "press": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Horses and marchers do not mix well. Neither, it turns out, does the footage."
   },
   {
    "label": "Grant the equinox holiday, nothing else",
    "eff": {
     "base": 3,
     "cash": -3,
     "street": -1
    },
    "res": "Workers get a spring holiday and no raise. They notice the trade immediately.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-18",
  "section": "street",
  "who": "vet",
  "title": "Honk If You Love Order",
  "text": "A \"Patriot Convoy\" of pickup trucks and flags circles the capital for the third straight day, gridlocking traffic in your support and, increasingly, in your way.",
  "choices": [
   {
    "label": "Have police escort them indefinitely",
    "eff": {
     "base": 4,
     "cash": -2,
     "press": -4,
     "street": -3,
     "auth": 3
    },
    "res": "The escort budget balloons. The convoy shows no sign of ending, or of leaving."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 4,
     "press": 4,
     "congress": 2
    },
    "res": "You thank them publicly and ask them to head home. Most, eventually, do."
   },
   {
    "label": "Order the convoy to escalate into the capital",
    "eff": {
     "base": 5,
     "street": -6,
     "press": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "Downtown gridlock reaches a new personal best. Delivery drivers are furious, on camera."
   },
   {
    "label": "Award the convoy a ceremonial parade permit",
    "eff": {
     "base": 3,
     "cash": -2,
     "press": -1
    },
    "res": "The permit makes the gridlock official and, somehow, legal.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-19",
  "section": "street",
  "who": "gov",
  "title": "Governor Frost Says Absolutely Not",
  "text": "Governor Frost refuses your order to accept federal troops in her state, citing state sovereignty, several court precedents, and a tone that suggests she has been waiting for this fight.",
  "choices": [
   {
    "label": "Deploy the troops over her objection",
    "eff": {
     "base": 5,
     "courts": -6,
     "congress": -4,
     "press": -5,
     "auth": 4
    },
    "res": "The deployment triggers an immediate lawsuit and a very quotable press conference from Frost."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "street": 3
    },
    "res": "You stand down and let the state handle it. Frost, unexpectedly, thanks you publicly."
   },
   {
    "label": "Threaten to cut all federal funding to her state",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -5,
     "street": -3,
     "auth": 3
    },
    "res": "Frost calls your bluff on statewide television. It was, in fact, mostly a bluff."
   },
   {
    "label": "Challenge Frost to settle it over a steak dinner",
    "eff": {
     "base": 2,
     "cash": -2,
     "press": -1
    },
    "res": "Dinner is cordial. The troop order remains unresolved by dessert.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-20",
  "section": "street",
  "who": "pastor",
  "title": "Sitting at the Gates",
  "text": "A coalition of clergy sits down in front of the palace gates, singing hymns in shifts, refusing to move until you meet with them about a housing bill you have ignored for months.",
  "choices": [
   {
    "label": "Have them removed by force",
    "eff": {
     "base": 4,
     "press": -6,
     "street": -5,
     "courts": -3,
     "auth": 3
    },
    "res": "Footage of clergy being carried off mid-hymn is, tactically, about as bad as it sounds."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 5,
     "congress": 3
    },
    "res": "You meet with them within the hour. The housing bill finally moves out of committee."
   },
   {
    "label": "Have them arrested for trespassing",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -6,
     "street": -6,
     "auth": 3
    },
    "res": "Bail is posted within minutes by a rival congregation, purely out of spite for your administration."
   },
   {
    "label": "Send out folding chairs and lemonade",
    "eff": {
     "base": 2,
     "cash": -1,
     "street": 1
    },
    "res": "The sit-in becomes noticeably more comfortable and considerably longer.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-21",
  "section": "street",
  "who": "vet",
  "title": "Ashes on the Steps",
  "text": "A veteran burns a flag on the capitol steps in protest of a benefits cut, drawing outrage from some, applause from others, and a swarm of cameras from absolutely everyone.",
  "choices": [
   {
    "label": "Push for immediate prosecution",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -5,
     "street": -5,
     "auth": 3
    },
    "res": "The prosecution reopens a decades-old free speech fight nobody wanted reopened this week."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "street": 5,
     "press": 5,
     "congress": 3
    },
    "res": "You restore the benefits cut publicly and let the legal question rest. It works."
   },
   {
    "label": "Push for a constitutional amendment banning flag burning",
    "eff": {
     "base": 5,
     "congress": -5,
     "courts": -4,
     "press": -4,
     "auth": 3
    },
    "res": "The amendment effort stalls in committee, as such efforts reliably have for decades."
   },
   {
    "label": "Send the veteran a replacement flag, gift-wrapped",
    "eff": {
     "base": 2,
     "cash": -1,
     "press": -1
    },
    "res": "He accepts the flag graciously and burns it again the following week, on principle.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-street-22",
  "section": "street",
  "who": "fbi",
  "title": "The Ballad of Cooper Vance",
  "text": "A folk singer named Cooper Vance is arrested for performing an unlicensed protest song outside a federal building, and the song promptly triples in popularity because of it.",
  "choices": [
   {
    "label": "Press full charges, make an example",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -6,
     "street": -5,
     "auth": 3
    },
    "res": "The trial gives the song a second chorus and Vance a record deal."
   },
   {
    "label": "The sensible move",
    "eff": {
     "base": -4,
     "press": 5,
     "street": 5,
     "congress": 2
    },
    "res": "Charges are quietly dropped. The song, having made its point, slides down the charts on schedule."
   },
   {
    "label": "Have him barred from performing anywhere federal",
    "eff": {
     "base": 4,
     "courts": -4,
     "press": -5,
     "street": -5,
     "auth": 3
    },
    "res": "Vance performs from a rowboat just offshore of federal jurisdiction, to a very large crowd."
   },
   {
    "label": "Invite Cooper Vance to headline your rally",
    "eff": {
     "base": 3,
     "cash": -3,
     "press": -2
    },
    "res": "He accepts, then performs the exact protest song at your rally, word for word.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-1",
  "section": "congress",
  "who": "speaker",
  "title": "Take A Stand (Any Stand)",
  "text": "Speaker Grimsby needs your position on the Agricultural Modernization Act before the floor vote in one hour. You have not read it. Nobody has read it. That is apparently not the deadline's concern.",
  "choices": [
   {
    "label": "Announce you wrote the bill yourself, personally, by hand, with a quill.",
    "eff": {
     "base": 4,
     "congress": -2,
     "press": -4,
     "auth": 3
    },
    "res": "The quill claim ages poorly once someone finds the typewriter font underneath."
   },
   {
    "label": "Ask for forty eight hours to actually read the thing.",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "Congress respects due diligence. The base respects none of this at all."
   },
   {
    "label": "Commit publicly to whatever position the evening polls favor.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -5,
     "auth": 2
    },
    "res": "Your official position changes four times before the vote even opens."
   },
   {
    "label": "Declare the bill \"spiritually correct\" and let staff sort the details.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -3,
     "street": 2
    },
    "res": "Spiritually correct becomes a permanent category in your press briefings.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-2",
  "section": "congress",
  "who": "opp",
  "title": "Rumblings Of The I-Word",
  "text": "Rep. Vandersloot is quietly collecting signatures for an impeachment inquiry. Quietly, meaning she has told six reporters and one very chatty barista.",
  "choices": [
   {
    "label": "Threaten to primary every signer with your own hand-picked challenger.",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -5,
     "auth": 4
    },
    "res": "Three signers fold immediately. Three signers hold a press conference about the threat instead."
   },
   {
    "label": "Cooperate fully and hand over every document requested.",
    "eff": {
     "base": -3,
     "congress": 6,
     "press": 5,
     "courts": 3,
     "auth": 0
    },
    "res": "The inquiry fizzles from a shortage of scandal, which itself becomes a small scandal."
   },
   {
    "label": "Leak fake documents suggesting Vandersloot is the actual criminal.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -4,
     "auth": 2
    },
    "res": "The leak is traced straight back to your office printer, ink cartridge and all."
   },
   {
    "label": "Invite Vandersloot to a nationally televised \"friendship summit.\"",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "She accepts. It airs directly opposite the World Cup final.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-3",
  "section": "congress",
  "who": "treas",
  "title": "The Lights Are About To Go Off",
  "text": "Treasury Secretary Boone informs you that government funding lapses at midnight unless Congress passes something, anything, before then.",
  "choices": [
   {
    "label": "Order agencies to stay open anyway and bill it to \"vibes.\"",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -4,
     "auth": 3
    },
    "res": "The Government Accountability Office writes a strongly worded memo. You have it framed."
   },
   {
    "label": "Sign the ugly bipartisan stopgap, compromises and all.",
    "eff": {
     "base": -4,
     "congress": 6,
     "press": 3,
     "auth": -1
    },
    "res": "Nobody is thrilled by the stopgap. Nobody is furloughed either."
   },
   {
    "label": "Let it shut down on purpose and blame the Speaker by name.",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -4,
     "auth": 2
    },
    "res": "Federal workers miss a paycheck. Your approval rating, somehow, does not."
   },
   {
    "label": "Pay \"essential\" staff out of the White House gift shop till.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -2,
     "cash": -3
    },
    "res": "The gift shop till has forty one dollars in it. This does not go far.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-4",
  "section": "congress",
  "who": "treas",
  "title": "A Little Extra For The President's Column",
  "text": "The budget draft has room, Secretary Boone says, for exactly one shameless line item. You have been thinking, for some time now, about fountains.",
  "choices": [
   {
    "label": "Order the fountain line inserted and dare anyone to strike it.",
    "eff": {
     "base": 4,
     "congress": -3,
     "press": -3,
     "auth": 3
    },
    "res": "The fountains get built. Reporters call them the Vanity Basins forever after."
   },
   {
    "label": "Cut your pet project and let the money go to actual infrastructure.",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "courts": 2,
     "auth": -1
    },
    "res": "Several bridges get fixed. Nobody thanks you for it, obviously."
   },
   {
    "label": "Pad three more line items while everyone is distracted by the first.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -5,
     "auth": 2
    },
    "res": "Auditors eventually find all four. There are think pieces about each one."
   },
   {
    "label": "Rename the fountain line \"Veterans Water Initiative.\"",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "No veteran asked for this. Several veterans are now, quite reasonably, annoyed.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-5",
  "section": "congress",
  "who": "opp",
  "title": "Senator Fitch Has A Number In Mind",
  "text": "Senator Fitch will deliver the deciding vote for a new dam in his state, in exchange for a statue of himself and a modest cabinet appointment for his nephew.",
  "choices": [
   {
    "label": "Give him the dam only, skip the statue and nephew, and threaten his committee seat.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "auth": 3
    },
    "res": "Fitch votes yes, furious, and starts referring to you as \"the landlord\" in interviews."
   },
   {
    "label": "Refuse the whole deal and whip the vote the honest way.",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 4,
     "auth": -1
    },
    "res": "It takes six extra days. The bill passes clean regardless."
   },
   {
    "label": "Give him everything, including the nephew's cabinet seat.",
    "eff": {
     "base": 4,
     "congress": -3,
     "press": -5,
     "auth": 2
    },
    "res": "The nephew is twenty two and now, somehow, oversees nuclear regulation."
   },
   {
    "label": "Counter-offer with a llama instead of a statue.",
    "eff": {
     "base": 3,
     "congress": -1,
     "press": -3,
     "cash": -2
    },
    "res": "Fitch accepts the llama. Nobody involved is proud of this negotiation.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-6",
  "section": "congress",
  "who": "opp",
  "title": "Senator Alcott Discovers The Phone Book",
  "text": "Senator Alcott has been reading the Delaware phone book aloud on the Senate floor for six hours to block your bill. He is currently somewhere in the L's.",
  "choices": [
   {
    "label": "Change the chamber rules mid-filibuster to shut him up.",
    "eff": {
     "base": 4,
     "congress": -6,
     "courts": -3,
     "auth": 4
    },
    "res": "It works immediately. It also becomes the exact rule used against you next term."
   },
   {
    "label": "Let him finish, then win the vote cleanly on the merits.",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "He finishes at three in the morning. The bill passes four minutes later."
   },
   {
    "label": "Send in a rival senator to filibuster the filibuster.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -3,
     "auth": 2
    },
    "res": "The chamber now contains two grown men reading phone books at once."
   },
   {
    "label": "Order pizza for the entire chamber to \"keep morale up.\"",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -1,
     "street": 2
    },
    "res": "Alcott eats the pizza and keeps right on reading. Poorly aimed bribe.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-7",
  "section": "congress",
  "who": "ag",
  "title": "They Want Deputy Chief Of Staff Pruett",
  "text": "A House committee has subpoenaed your deputy chief of staff, Ms. Pruett, who happens to know where several bodies, financial and otherwise, are buried.",
  "choices": [
   {
    "label": "Invoke executive privilege and dare them to enforce it.",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -5,
     "auth": 3
    },
    "res": "Your lawyers love this argument. The contempt vote happens anyway, immediately."
   },
   {
    "label": "Let Pruett testify and prepare her honestly.",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 4,
     "press": 2,
     "auth": -1
    },
    "res": "She testifies well. It is boring television, which is exactly the best outcome."
   },
   {
    "label": "Send a decoy staffer to testify in Pruett's place.",
    "eff": {
     "base": 3,
     "congress": -3,
     "courts": -4,
     "press": -4,
     "auth": 2
    },
    "res": "The decoy is unmasked within nine minutes by his own forgotten name tag."
   },
   {
    "label": "Have Pruett claim sudden, dramatic, career-saving laryngitis.",
    "eff": {
     "base": 2,
     "congress": -2,
     "courts": -2,
     "press": -1
    },
    "res": "She whispers \"no comment\" forty separate times. Somehow worse than talking.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-8",
  "section": "congress",
  "who": "ag",
  "title": "Judge Kessling Has A Past",
  "text": "Your nominee for the appellate bench, Judge Kessling, once wrote a college newspaper column titled \"Why Tuesdays Should Be Illegal.\" Senators are, unfortunately, extremely interested.",
  "choices": [
   {
    "label": "Ram the confirmation through committee before anyone reads further.",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": 3,
     "auth": 4
    },
    "res": "Kessling is confirmed. The Tuesday column becomes a cable news chyron for weeks."
   },
   {
    "label": "Withdraw the nomination and pick someone gloriously boring instead.",
    "eff": {
     "base": -4,
     "congress": 5,
     "courts": 4,
     "press": 2,
     "auth": -1
    },
    "res": "The new nominee has never had an opinion about weekdays. Confirmed unanimously."
   },
   {
    "label": "Have Kessling publicly defend the Tuesday column as \"visionary.\"",
    "eff": {
     "base": 3,
     "congress": -3,
     "courts": -3,
     "press": -4
    },
    "res": "Visionary is generous. Confirmed anyway, but barely, and bitterly."
   },
   {
    "label": "Nominate a second, decoy judge to split the outrage in half.",
    "eff": {
     "base": 3,
     "congress": -2,
     "courts": -2,
     "press": -2
    },
    "res": "Congress now dislikes two judges equally. Efficient, in its own way.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-9",
  "section": "congress",
  "who": "speaker",
  "title": "A Rider Nobody Wants To Own",
  "text": "Your must-pass infrastructure bill has picked up a rider defunding llama import tariffs, inserted by persons unknown. It is now, somehow, everyone's problem.",
  "choices": [
   {
    "label": "Force the whole bill through, rider and all, and blame the llama lobby.",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "The bill passes. The llama import lobby, it turns out, is real and quite furious."
   },
   {
    "label": "Strip the rider and pass the clean infrastructure bill.",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "courts": 2,
     "auth": -1
    },
    "res": "Roads get fixed. The mystery of the llama rider goes forever unsolved."
   },
   {
    "label": "Add a second rider to distract from the first.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -4,
     "auth": 2
    },
    "res": "There are now two mystery riders and zero answers about either."
   },
   {
    "label": "Announce publicly that you personally have always loved llamas.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "This satisfies absolutely no one and confuses nearly everyone.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-10",
  "section": "congress",
  "who": "opp",
  "title": "The Sylvia P. Renwick Memorial Post Office Incident",
  "text": "A routine bill renaming a small post office after a beloved local librarian has, somehow, become a three week floor brawl over unrelated decades-old grudges.",
  "choices": [
   {
    "label": "Force a vote and publicly shame every \"no\" as anti-librarian.",
    "eff": {
     "base": 4,
     "congress": -3,
     "press": -3,
     "auth": 3
    },
    "res": "It passes. Several members remain deeply aggrieved about being called anti-librarian."
   },
   {
    "label": "Broker a quiet deal to let it pass without further drama.",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 2,
     "auth": -1
    },
    "res": "The post office gets its name. Nobody notices, which is exactly the win."
   },
   {
    "label": "Attach your own name to the building as a co-honoree.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -4,
     "auth": 2
    },
    "res": "It is now the Renwick-and-You Memorial Post Office. Renwick's family is livid."
   },
   {
    "label": "Propose renaming it after your dog instead.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "The dog polls better across the aisle than you do. Mildly concerning.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-11",
  "section": "congress",
  "who": "opp",
  "title": "Senator Duchamp Finds Her Moment",
  "text": "Senator Duchamp delivers a two hour floor speech cataloguing your every failure, timed perfectly for prime time, complete with poster board props.",
  "choices": [
   {
    "label": "Cut her microphone on a technicality mid-speech.",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -4,
     "auth": 4
    },
    "res": "The clip of her mic dying gets ten times the views the speech ever would have."
   },
   {
    "label": "Let her finish, then respond calmly with facts the next day.",
    "eff": {
     "base": -3,
     "congress": 3,
     "press": 4,
     "auth": -1
    },
    "res": "Your rebuttal is accurate and, tragically, watched by almost nobody."
   },
   {
    "label": "Schedule a competing speech of your own at the exact same time.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -3,
     "auth": 2
    },
    "res": "Split-screen coverage all evening. Both speeches lose the ratings war."
   },
   {
    "label": "Send her a fruit basket \"in the spirit of bipartisanship.\"",
    "eff": {
     "base": 3,
     "congress": -1,
     "press": -2,
     "street": 2
    },
    "res": "She holds up the fruit basket on the floor as Exhibit A of something.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-12",
  "section": "congress",
  "who": "speaker",
  "title": "Representative Okafor Switches Teams",
  "text": "A previously reliable ally, Rep. Okafor, announces she is crossing the aisle, citing \"conscience,\" which is never a good sign for anyone involved.",
  "choices": [
   {
    "label": "Publicly strip her committee assignments before the press conference even ends.",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -4,
     "auth": 4
    },
    "res": "She finishes the press conference anyway, now with an extra grievance to cite."
   },
   {
    "label": "Thank her for her service and wish her well publicly.",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "auth": -1
    },
    "res": "Classy, and utterly useless at stopping two more from following her."
   },
   {
    "label": "Leak an old memo suggesting she was always secretly disloyal.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -5,
     "auth": 2
    },
    "res": "The memo is real, and dated well before you even took office."
   },
   {
    "label": "Offer her old seat to whoever primaries against her hardest.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "You now have a very loud, very untested ally where a quiet one used to be.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-13",
  "section": "congress",
  "who": "speaker",
  "title": "Chairman Tolliver Grows A Spine",
  "text": "Committee Chairman Tolliver, previously reliable furniture, refuses to advance your bill without changes. He has, apparently, read it. All of it.",
  "choices": [
   {
    "label": "Threaten to strip his gavel in front of the full committee.",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -3,
     "auth": 4
    },
    "res": "He folds instantly. He also never trusts you again and tells everyone why."
   },
   {
    "label": "Accept his amendments, since they were reasonable anyway.",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "courts": 2,
     "auth": -1
    },
    "res": "The bill is better for it. Painfully, embarrassingly better."
   },
   {
    "label": "Go around him and push the bill through a different committee.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -3,
     "auth": 2
    },
    "res": "Tolliver calls it a coup on cable news. He is not entirely wrong."
   },
   {
    "label": "Invite Tolliver to Camp David to \"talk it out\" over the weekend.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -1,
     "street": 1
    },
    "res": "He returns with more amendments, not fewer. Camp David badly backfired.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-14",
  "section": "congress",
  "who": "treas",
  "title": "A Very Specific Bridge To Nowhere In Particular",
  "text": "A major donor wants an earmark for a bridge connecting his two private properties. There is no town nearby. There is no river. There is a golf cart path.",
  "choices": [
   {
    "label": "Order it inserted and dare an auditor to ever find it.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -4,
     "auth": 3
    },
    "res": "An auditor finds it in about four minutes. It has his name on the blueprints."
   },
   {
    "label": "Tell the donor no and redirect the funds to an actual bridge.",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "The donor is cold to you at the next fundraiser. A real bridge gets built."
   },
   {
    "label": "Approve it, and add a second bridge for his other golf cart path.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -5,
     "cash": -2,
     "auth": 2
    },
    "res": "Two bridges to nowhere now exist. Local news calls it \"the sprawl.\""
   },
   {
    "label": "Rebrand it as a \"resilience corridor\" and hope nobody looks closer.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "cash": -1
    },
    "res": "Somebody looks closer immediately. It remains, unmistakably, a golf cart path.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-15",
  "section": "congress",
  "who": "ag",
  "title": "The Hearing Room Has Bad Lighting And Worse Questions",
  "text": "You are called to testify before an oversight committee about, depending on which member you ask, absolutely everything you have ever done.",
  "choices": [
   {
    "label": "Answer every question with \"that's classified,\" true or not.",
    "eff": {
     "base": 3,
     "congress": -4,
     "courts": -3,
     "press": -3,
     "auth": 3
    },
    "res": "Half of it was never classified. Now it is a headline about lying under oath."
   },
   {
    "label": "Answer everything honestly and let the chips fall where they land.",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 4,
     "courts": 3,
     "auth": -1
    },
    "res": "It is a rough afternoon. It is also, mercifully, over by dinner."
   },
   {
    "label": "Bring a prepared \"gotcha\" moment to embarrass your questioner instead.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -4,
     "auth": 2
    },
    "res": "The gotcha backfires when she produces the same document, dated earlier."
   },
   {
    "label": "Answer every question with a folksy anecdote about your grandfather's farm.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "Nobody learns a single fact. The ratings, inexplicably, spike anyway.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-16",
  "section": "congress",
  "who": "speaker",
  "title": "A Small Amendment About Forever",
  "text": "A group of allies quietly proposes repealing term limits, framed gently as \"modernizing continuity of leadership.\" What they mean is you, staying, indefinitely.",
  "choices": [
   {
    "label": "Whip votes hard and push it through committee this very week.",
    "eff": {
     "base": 5,
     "congress": -6,
     "courts": -5,
     "press": -5,
     "auth": 4
    },
    "res": "It clears committee. The phrase \"forever president\" starts trending and never fades."
   },
   {
    "label": "Publicly reject the idea and ask them to withdraw it entirely.",
    "eff": {
     "base": -5,
     "congress": 6,
     "press": 5,
     "courts": 4,
     "auth": -2
    },
    "res": "The republic exhales a small, quiet sigh. Your base exhales a much heavier one."
   },
   {
    "label": "Let it advance quietly while denying you ever asked for it.",
    "eff": {
     "base": 4,
     "congress": -5,
     "press": -6,
     "courts": -4,
     "auth": 3
    },
    "res": "Nobody believes the denial for a second. The bill advances regardless."
   },
   {
    "label": "Suggest a \"compromise\" of just one extra term, as a treat.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -3,
     "street": 2
    },
    "res": "One extra term instantly becomes the new baseline demand for next cycle.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-17",
  "section": "congress",
  "who": "speaker",
  "title": "National Appreciation Of The President Day",
  "text": "A junior congressman, eager to be noticed, introduces a resolution creating a federal holiday in your honor. It already, alarmingly, has a jingle.",
  "choices": [
   {
    "label": "Endorse it loudly and lean on leadership to fast-track it.",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -4,
     "auth": 3
    },
    "res": "It passes. The jingle plays in every federal building for the next decade."
   },
   {
    "label": "Ask him to withdraw it gently, this is a bit much.",
    "eff": {
     "base": -3,
     "congress": 3,
     "press": 3,
     "auth": -1
    },
    "res": "He withdraws, visibly disappointed. The jingle, mercifully, dies with it."
   },
   {
    "label": "Suggest the holiday also include mandatory parades.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -4,
     "auth": 2
    },
    "res": "Attendance at the mandatory parades is, generously described, sparse."
   },
   {
    "label": "Propose naming it after the country's founding instead, but keep your jingle.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "Technically not a holiday for you anymore. The jingle remains, inexplicably, about you.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-18",
  "section": "congress",
  "who": "opp",
  "title": "A Strongly Worded Piece Of Paper",
  "text": "The opposition introduces a censure motion, mostly symbolic and entirely humiliating, over a comment you made about a foreign leader's haircut.",
  "choices": [
   {
    "label": "Whip your own members to vote it down unanimously.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "It fails cleanly on party lines, which becomes its own kind of headline."
   },
   {
    "label": "Issue a genuine apology and let the whole motion fade quietly.",
    "eff": {
     "base": -4,
     "congress": 4,
     "press": 4,
     "auth": -1
    },
    "res": "The apology works. The haircut comment is forgotten within the week."
   },
   {
    "label": "Double down on the haircut comment during the floor debate.",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -5,
     "auth": 2
    },
    "res": "The foreign leader responds publicly with a comment about your hairline."
   },
   {
    "label": "Send the foreign leader a gift certificate to a barbershop as a peace offering.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "It is somehow received as a graver insult than the original comment.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-19",
  "section": "congress",
  "who": "speaker",
  "title": "The Minority Leaves The Building",
  "text": "Furious over a scheduling trick, the opposition walks out of the chamber entirely, denying quorum and, worse, taking most of the coffee with them.",
  "choices": [
   {
    "label": "Send the sergeant-at-arms to physically retrieve them.",
    "eff": {
     "base": 4,
     "congress": -5,
     "courts": -3,
     "press": -4,
     "auth": 4
    },
    "res": "They are retrieved. They are also, immediately, suing about how."
   },
   {
    "label": "Delay the vote and negotiate their honest return.",
    "eff": {
     "base": -3,
     "congress": 5,
     "press": 3,
     "auth": -1
    },
    "res": "They return in two days. The vote happens, eventually, cleanly, and on record."
   },
   {
    "label": "Hold the vote anyway and claim quorum by creative counting.",
    "eff": {
     "base": 3,
     "congress": -5,
     "courts": -5,
     "press": -4,
     "auth": 3
    },
    "res": "The creative counting does not survive its first court filing."
   },
   {
    "label": "Order pizza to the chamber and livestream yourself eating alone, waiting.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "The livestream is oddly compelling. It resolves absolutely nothing legislatively.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-20",
  "section": "congress",
  "who": "speaker",
  "title": "Nine Hundred Pages, Zero Readers",
  "text": "The omnibus bill runs nine hundred pages, is due for a vote in three hours, and the only person who has read all of it is, allegedly, an intern named Diaz.",
  "choices": [
   {
    "label": "Push the vote anyway, Diaz can field questions if it comes up.",
    "eff": {
     "base": 4,
     "congress": -4,
     "courts": -2,
     "press": -3,
     "auth": 3
    },
    "res": "It comes up. Diaz becomes, briefly, the most powerful person in the building."
   },
   {
    "label": "Delay the vote until members actually get to read the thing.",
    "eff": {
     "base": -4,
     "congress": 5,
     "press": 4,
     "courts": 2,
     "auth": -1
    },
    "res": "The delay is boring. The bill that eventually passes is much less embarrassing."
   },
   {
    "label": "Add another two hundred pages while everyone is looking elsewhere.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -4,
     "auth": 2
    },
    "res": "Diaz asks for a raise. Diaz, frankly, deserves the raise."
   },
   {
    "label": "Have staff summarize it into a single friendly infographic instead.",
    "eff": {
     "base": 3,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "The infographic omits several important funding cuts, entirely on purpose.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-21",
  "section": "congress",
  "who": "speaker",
  "title": "A Vote At An Hour Nobody Should Be Voting",
  "text": "Leadership schedules the final vote for two in the morning, banking on half of Congress being too tired, or too something else, to object properly.",
  "choices": [
   {
    "label": "Keep the two a.m. slot and whip hard through the exhaustion.",
    "eff": {
     "base": 4,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "It passes. Several members later claim they don't remember voting at all."
   },
   {
    "label": "Move it to a reasonable daytime hour instead.",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 3,
     "auth": -1
    },
    "res": "The vote happens transparently, in daylight, like a functioning government."
   },
   {
    "label": "Move it even later, to four a.m., just to be safe.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -4,
     "auth": 2
    },
    "res": "Two senators sleep through it entirely. Their votes stay contested for a month."
   },
   {
    "label": "Supply the chamber with unlimited coffee to \"keep it fair.\"",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 1
    },
    "res": "The coffee does not keep it fair. It just keeps everyone awake to complain.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-congress-22",
  "section": "congress",
  "who": "speaker",
  "title": "Team Building At The Worst Possible Time",
  "text": "Your party's caucus retreat, meant to build unity before a crucial vote, has devolved into a three way argument over a canoeing accident and a karaoke machine.",
  "choices": [
   {
    "label": "Cancel the retreat and order everyone back to the Capitol immediately.",
    "eff": {
     "base": 3,
     "congress": -4,
     "press": -3,
     "auth": 3
    },
    "res": "They return unified in exactly one thing, resentment of you personally."
   },
   {
    "label": "Let them finish, hash it out, and come back cohesive.",
    "eff": {
     "base": -3,
     "congress": 4,
     "press": 2,
     "auth": -1
    },
    "res": "They return two days later, genuinely closer than before. Astonishing, honestly."
   },
   {
    "label": "Join the retreat personally to \"restore morale\" yourself.",
    "eff": {
     "base": 3,
     "congress": -3,
     "press": -4,
     "auth": 2
    },
    "res": "Your karaoke selection becomes the most memorable, and worst, part of the trip."
   },
   {
    "label": "Send a motivational singing telegram in your place instead.",
    "eff": {
     "base": 2,
     "congress": -2,
     "press": -2,
     "street": 2
    },
    "res": "The singing telegram earns more respect from the caucus than you would have.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-1",
  "section": "base",
  "who": "poll",
  "title": "Name The Enemy",
  "text": "Internal polling shows the base doesn't want policy, they want a villain. Your pollster is holding a shortlist of names your speechwriters clearly wrote after midnight.",
  "choices": [
   {
    "label": "Read the name off the card, slowly, for the cameras.",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -3,
     "street": -3,
     "auth": 3
    },
    "res": "The villain, a startled municipal clerk, gets three death threats before lunch."
   },
   {
    "label": "Say the real problems are complicated and no single person is to blame.",
    "eff": {
     "base": -4,
     "press": 6,
     "congress": 4,
     "courts": 3,
     "auth": 0
    },
    "res": "The crowd boos in the specific way crowds boo homework."
   },
   {
    "label": "Name the clerk, her husband, and her golden retriever.",
    "eff": {
     "base": 5,
     "press": -7,
     "courts": -5,
     "street": -4,
     "auth": 3
    },
    "res": "The retriever's Wikipedia page is vandalized within the hour."
   },
   {
    "label": "Blame a cloud formation shaped like your predecessor.",
    "eff": {
     "base": 3,
     "street": 4,
     "press": -2,
     "auth": 1
    },
    "res": "Meteorologists are now considered part of the conspiracy.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-2",
  "section": "base",
  "who": "social",
  "title": "The Banned Bear",
  "text": "A children's picture book about a bear who shares his honey with woodland creatures of different backgrounds has been flagged by three Facebook groups as, quote, grooming propaganda. Your social media director wants a statement before lunch.",
  "choices": [
   {
    "label": "Demand the bear be pulled from every library in the country.",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "auth": 2
    },
    "res": "The bear's author receives a book deal three times the size of his advance."
   },
   {
    "label": "Say it's a book about a bear sharing honey and leave it there.",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 4,
     "congress": 3,
     "auth": 0
    },
    "res": "A cable pundit calls you soft on bears."
   },
   {
    "label": "Demand the bear be pulled, the author investigated, and the honey rebranded.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -5,
     "auth": 3
    },
    "res": "Honey sales in your strongest counties triple out of spite."
   },
   {
    "label": "Announce the bear was secretly a decorated war hero and pardon him.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "The bear, being fictional, accepts the pardon graciously.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-3",
  "section": "base",
  "who": "cos",
  "title": "The Merch Problem",
  "text": "Your chief of staff reports the online store is out of stock on the item outselling everything else three to one: a mug with your face photoshopped onto a bald eagle mid-screech.",
  "choices": [
   {
    "label": "Rush order fifty thousand more, mark them limited edition.",
    "eff": {
     "base": 4,
     "cash": 4,
     "press": -3,
     "courts": -2,
     "auth": 2
    },
    "res": "They sell out in eleven minutes and several arrive already cracked."
   },
   {
    "label": "Ask for merch that's dignified. A tasteful tie clip, maybe.",
    "eff": {
     "base": -4,
     "press": 3,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "The tie clip sells four units, all to your lawyer."
   },
   {
    "label": "Add a matching mug of your opponent, weeping.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "cash": 5,
     "auth": 2
    },
    "res": "A federal ethics office opens a file it will never close."
   },
   {
    "label": "Put your face on the eagle AND the flag AND a monster truck.",
    "eff": {
     "base": 4,
     "cash": 3,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "The monster truck version is recalled for structural reasons unrelated to your face.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-4",
  "section": "base",
  "who": "writer",
  "title": "The Chant",
  "text": "Last night's rally crowd, unprompted, developed a chant calling for the jailing of a sitting federal judge. Your speechwriter caught it on video and cannot stop replaying it.",
  "choices": [
   {
    "label": "Lead the chant yourself at the next rally, slower, so everyone can join in.",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -4,
     "auth": 3
    },
    "res": "The judge requests, and receives, a security detail."
   },
   {
    "label": "Tell the crowd that's not how courts work and ask them to stop.",
    "eff": {
     "base": -5,
     "press": 5,
     "courts": 6,
     "congress": 3,
     "auth": 0
    },
    "res": "You are booed off stage nine minutes early."
   },
   {
    "label": "Add a second verse naming the judge's law clerks.",
    "eff": {
     "base": 5,
     "courts": -7,
     "press": -5,
     "street": -3,
     "auth": 3
    },
    "res": "Two clerks quietly withdraw from public life."
   },
   {
    "label": "Claim the chant is actually about a minor league mascot with the same name.",
    "eff": {
     "base": 4,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "The mascot, a confused raccoon, declines to comment.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-5",
  "section": "base",
  "who": "social",
  "title": "The Basement Theory",
  "text": "A sizable share of your base has become convinced the Vice President is a hologram operated from a basement in a state that does not, strictly speaking, have basements due to the water table. Your social director wants guidance.",
  "choices": [
   {
    "label": "Wink about it at a press conference and let it grow.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -2,
     "street": -3,
     "auth": 2
    },
    "res": "Hologram merchandise outsells actual merchandise."
   },
   {
    "label": "State plainly that the Vice President is a real, physical person.",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 3,
     "courts": 2,
     "auth": 0
    },
    "res": "Believers conclude this is exactly what a hologram would say."
   },
   {
    "label": "Suggest maybe there are TWO holograms, working in shifts.",
    "eff": {
     "base": 5,
     "press": -6,
     "street": -4,
     "auth": 3
    },
    "res": "A basement in that basement-free state is placed under surveillance by amateurs."
   },
   {
    "label": "Have the actual Vice President do a live juggling act to prove corporeality.",
    "eff": {
     "base": 3,
     "street": 3,
     "press": -1,
     "auth": 1
    },
    "res": "He drops a bowling pin on live television and the theory somehow strengthens.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-6",
  "section": "base",
  "who": "press",
  "title": "Saint Of The Parking Lot",
  "text": "A man who was mildly inconvenienced at a DMV three states away has been canonized by your base as a martyr of the movement, complete with candles and a hashtag. He seems bewildered by all of it. Your press secretary needs a line.",
  "choices": [
   {
    "label": "Invite him on stage and award him a medal you invented an hour ago.",
    "eff": {
     "base": 4,
     "press": -3,
     "courts": -2,
     "cash": 2,
     "auth": 2
    },
    "res": "He accepts the medal, still visibly unsure what he did."
   },
   {
    "label": "Note gently that a long DMV line is not, historically, martyrdom.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "You are accused of disrespecting his sacrifice."
   },
   {
    "label": "Declare a national holiday in his honor and rename the DMV.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "cash": -3,
     "auth": 3
    },
    "res": "The DMV, now renamed, still has a long line."
   },
   {
    "label": "Reveal he is, coincidentally, your third cousin.",
    "eff": {
     "base": 3,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "Genealogists find no such relation and are ignored.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-7",
  "section": "base",
  "who": "home",
  "title": "The Boycott List",
  "text": "Your base wants a coffee chain boycotted for the crime of putting a rainbow sprinkle on a seasonal donut. Your Homeland Security advisor, baffled that this landed on her desk, forwards it to you anyway.",
  "choices": [
   {
    "label": "Tweet the chain's name and call it un-American donutry.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -2,
     "cash": 2,
     "auth": 2
    },
    "res": "The chain's stock dips for a day and its donut sells out for a week."
   },
   {
    "label": "Say a sprinkle is not a threat to the republic.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "You are accused of taking the sprinkle's side."
   },
   {
    "label": "Name three more chains and a bakery that once used a rainbow napkin.",
    "eff": {
     "base": 5,
     "press": -5,
     "cash": 3,
     "street": -3,
     "auth": 2
    },
    "res": "The bakery, family owned since 1962, closes within the month."
   },
   {
    "label": "Announce a rival, patriotic donut with no sprinkles, only stars.",
    "eff": {
     "base": 4,
     "cash": 3,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "The stars are reportedly difficult to bite through.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-8",
  "section": "base",
  "who": "ag",
  "title": "The Wrong Fold",
  "text": "A viral photo shows a stadium volunteer folding the flag with, according to your base, one fold too few. Your Attorney General's office has received forty formal complaints demanding federal charges.",
  "choices": [
   {
    "label": "Call for the volunteer's name to be released publicly.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -4,
     "auth": 3
    },
    "res": "The volunteer, seventeen years old, gets pulled from school for a week."
   },
   {
    "label": "Say folding a flag wrong isn't a crime.",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 3,
     "courts": 5,
     "auth": 0
    },
    "res": "A congressman calls you weak on flag matters."
   },
   {
    "label": "Propose a federal Flag Folding Standards Board with subpoena power.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -5,
     "cash": -2,
     "auth": 3
    },
    "res": "The board's first hearing runs four hours over a single fold."
   },
   {
    "label": "Personally refold the flag on live television, incorrectly, with confidence.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "Nobody dares mention that yours has the same fold count.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-9",
  "section": "base",
  "who": "pastor",
  "title": "The Missing Manger",
  "text": "A shopping mall three states over replaced its nativity display with a generic holiday tree, and your base has decided this is the opening battle of a coordinated national assault on the season itself.",
  "choices": [
   {
    "label": "Declare a War on Christmas emergency and demand the manger's return.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -2,
     "auth": 3
    },
    "res": "The mall reinstates the manger and reports record foot traffic."
   },
   {
    "label": "Note that malls change decorations every year and always have.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "You're accused of hating both Christmas and malls."
   },
   {
    "label": "Demand a loyalty pledge from every retailer's holiday decor.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -4,
     "cash": -2,
     "auth": 3
    },
    "res": "A hardware store's inflatable snowman is investigated for insufficient reverence."
   },
   {
    "label": "Personally deliver a manger to the mall on a flatbed truck, live.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "One of the wise men falls off near the food court.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-10",
  "section": "base",
  "who": "son",
  "title": "The Frog In The Suit",
  "text": "A cartoon frog wearing your suit and tie has become the unofficial mascot of your movement, appearing on flags, tattoos, and one very committed man's minivan. Your son thinks it's hilarious and wants it official.",
  "choices": [
   {
    "label": "Adopt the frog as the campaign's official mascot.",
    "eff": {
     "base": 5,
     "press": -3,
     "courts": -2,
     "cash": 3,
     "auth": 2
    },
    "res": "Frog merchandise outperforms your actual merchandise within a week."
   },
   {
    "label": "Say a political movement shouldn't be represented by a cartoon frog.",
    "eff": {
     "base": -4,
     "press": 3,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "The base decides you, personally, are not the frog's biggest fan, and that's suspicious."
   },
   {
    "label": "Have the frog appear at the next rally in a full costume, waving.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "street": -2,
     "auth": 2
    },
    "res": "A child in the front row cries, out of either fear or delight, unclear which."
   },
   {
    "label": "Legally trademark the frog before anyone else can profit off it.",
    "eff": {
     "base": 3,
     "cash": 4,
     "press": -2,
     "auth": 1
    },
    "res": "A lawsuit from an unrelated frog-based cereal brand follows within days.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-11",
  "section": "base",
  "who": "poll",
  "title": "Too Moderate, Apparently",
  "text": "A state legislator nobody has heard of is polling at six percent against you in a primary nobody scheduled, running to your right on a platform your pollster describes only as louder.",
  "choices": [
   {
    "label": "Attack him personally, nightly, until he goes away.",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -2,
     "auth": 3
    },
    "res": "His fundraising triples off the attention alone."
   },
   {
    "label": "Ignore him and focus on governing.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 3,
     "courts": 2,
     "auth": 0
    },
    "res": "Your base decides silence means he's right."
   },
   {
    "label": "Out-flank him with a policy even he calls extreme.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -4,
     "congress": -3,
     "auth": 3
    },
    "res": "He pivots to calling you a copycat, correctly."
   },
   {
    "label": "Offer him a made-up ambassadorship to a country with no coastline.",
    "eff": {
     "base": 3,
     "congress": 2,
     "press": -2,
     "auth": 1
    },
    "res": "He accepts, delighted, and is never heard from again.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-12",
  "section": "base",
  "who": "pastor",
  "title": "Pastor Combs Wants A Favor",
  "text": "Pastor Combs of the twelve thousand seat Liberty Now Arena Church is prepared to endorse you from the pulpit this Sunday. He would also like a word about a zoning variance for his new parking structure.",
  "choices": [
   {
    "label": "Approve the variance quietly and take the endorsement.",
    "eff": {
     "base": 4,
     "press": -3,
     "courts": -3,
     "cash": -2,
     "auth": 2
    },
    "res": "The parking structure goes up next to a wetland nobody mentions again."
   },
   {
    "label": "Decline the favor and ask for the endorsement on its own merits.",
    "eff": {
     "base": -4,
     "press": 4,
     "courts": 4,
     "congress": 2,
     "auth": 0
    },
    "res": "Pastor Combs endorses your primary opponent instead, tearfully."
   },
   {
    "label": "Approve the variance, plus a tax exemption, plus a second parking structure.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -5,
     "cash": -4,
     "auth": 3
    },
    "res": "The wetland is now, officially, a parking structure."
   },
   {
    "label": "Ask Pastor Combs to baptize you again, on stage, for the ratings.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "The water, per several eyewitnesses, was suspiciously warm.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-13",
  "section": "base",
  "who": "vp",
  "title": "The Loyalty Quiz",
  "text": "A prominent supporter has published a twelve question purity test online. Your Vice President scored an eight out of twelve and is currently being called a squish by people who cannot define the word.",
  "choices": [
   {
    "label": "Take the quiz publicly and answer every question at maximum extremity.",
    "eff": {
     "base": 4,
     "press": -4,
     "congress": -2,
     "auth": 3
    },
    "res": "You score twelve out of twelve and mildly frighten your own staff."
   },
   {
    "label": "Say purity tests are corrosive to any real coalition.",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 3,
     "courts": 2,
     "auth": 0
    },
    "res": "The quiz's author writes a scathing follow-up titled Told You So."
   },
   {
    "label": "Publish your OWN thirty question test and make the Vice President retake it.",
    "eff": {
     "base": 5,
     "press": -5,
     "congress": -3,
     "auth": 3
    },
    "res": "He scores lower this time, on a test you wrote."
   },
   {
    "label": "Declare the quiz itself a deep state psy-op and demand its retraction.",
    "eff": {
     "base": 3,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "The quiz's traffic quadruples overnight.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-14",
  "section": "base",
  "who": "girl",
  "title": "The Rumour",
  "text": "Your press aide has heard, secondhand, that a rumour is spreading through the base that you personally wrestled and defeated a mountain lion in your twenties. It is not true. She wants to know what to do with it.",
  "choices": [
   {
    "label": "Neither confirm nor deny, and let the legend grow.",
    "eff": {
     "base": 4,
     "press": -3,
     "courts": -1,
     "auth": 2
    },
    "res": "A commemorative coin featuring the mountain lion sells briskly."
   },
   {
    "label": "Issue a flat, boring denial. You have never fought a mountain lion.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 1,
     "auth": 0
    },
    "res": "The denial is itself taken as further proof of the fight."
   },
   {
    "label": "Confirm it, add a bear, and say you let the bear live out of mercy.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -2,
     "auth": 3
    },
    "res": "A wildlife group requests, politely, that you stop."
   },
   {
    "label": "Produce a witness, an elderly man who claims he was there.",
    "eff": {
     "base": 3,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "The witness cannot recall which state the mountain existed in.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-15",
  "section": "base",
  "who": "social",
  "title": "The Hoax",
  "text": "A fabricated headline claiming your opponent wants to tax rainwater is spreading through the base at a pace your social media director calls, admiringly, unprecedented.",
  "choices": [
   {
    "label": "Share it yourself with the caption some people say.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -2,
     "street": -2,
     "auth": 2
    },
    "res": "A fact checker's correction gets a tenth of the hoax's reach."
   },
   {
    "label": "Publicly correct the record. Nobody is taxing rainwater.",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 2,
     "courts": 3,
     "auth": 0
    },
    "res": "You're accused of fact checking your own side, a cardinal sin."
   },
   {
    "label": "Add a follow-up claiming he wants to tax SNOW too.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -3,
     "street": -3,
     "auth": 3
    },
    "res": "A meteorologist is heckled at a grocery store for reasons she never learns."
   },
   {
    "label": "Claim you personally intercepted the rainwater tax bill and shredded it.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "No such bill has ever existed, a detail nobody requests.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-16",
  "section": "base",
  "who": "lawyer",
  "title": "Banning A Word",
  "text": "A word, previously unremarkable, has been declared offensive by a faction of your base after a rival used it in a speech. Your lawyer needs to know whether the federal government can, in fact, ban a word. It cannot.",
  "choices": [
   {
    "label": "Announce you're exploring every legal option to ban it.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -4,
     "auth": 3
    },
    "res": "The word's dictionary lookups spike nine hundred percent."
   },
   {
    "label": "Explain, patiently, that the First Amendment exists.",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 6,
     "congress": 2,
     "auth": 0
    },
    "res": "You are accused of loving the word personally."
   },
   {
    "label": "Ban the word from federal buildings and also its near synonyms.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -6,
     "auth": 3
    },
    "res": "A thesaurus is briefly, sincerely, treated as contraband."
   },
   {
    "label": "Invent a new word to replace it and mandate its use in your speeches.",
    "eff": {
     "base": 3,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "Nobody, including you, can pronounce it consistently.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-17",
  "section": "base",
  "who": "vet",
  "title": "Buck Wants A Blessing",
  "text": "A militia leader who goes by Buck has shown up at three rallies now with two dozen armed men in matching vests, and he'd like a public nod from you. Your veterans affairs liaison, herself a veteran, is uneasy about the optics.",
  "choices": [
   {
    "label": "Give Buck a shout-out from the stage as real patriots.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -3,
     "street": -3,
     "auth": 3
    },
    "res": "Buck's group triples in size within the month."
   },
   {
    "label": "Decline to acknowledge Buck's group at all.",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 4,
     "congress": 2,
     "auth": -1
    },
    "res": "Buck calls you a fraud into a livestream microphone."
   },
   {
    "label": "Invite Buck's men to serve as unofficial rally security.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -5,
     "street": -4,
     "auth": 3
    },
    "res": "A reporter is briefly detained by men with no legal authority to detain anyone."
   },
   {
    "label": "Give Buck a ceremonial title with no actual power, like Field Marshal Emeritus.",
    "eff": {
     "base": 4,
     "street": 2,
     "press": -2,
     "auth": 2
    },
    "res": "Buck has business cards printed within the hour.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-18",
  "section": "base",
  "who": "poll",
  "title": "The Great Latte Panic",
  "text": "Your pollster reports a growing belief among the base that coastal elites are quietly relocating small batch coffee roasters into every town in the country to, in the words of one respondent, replace real Americans with people who say artisanal.",
  "choices": [
   {
    "label": "Warn darkly, at your next rally, about the coffee coming for their diners.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -2,
     "street": -3,
     "auth": 2
    },
    "res": "A diner three towns over reports a forty percent bump in coffee sales, ironically from curiosity."
   },
   {
    "label": "Point out that coffee shops are not, in fact, a demographic threat.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 2,
     "auth": 0
    },
    "res": "You are accused of siding with oat milk."
   },
   {
    "label": "Propose a tariff on pretentious beverages as defined by a committee you'll appoint.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "cash": -2,
     "auth": 3
    },
    "res": "The committee cannot agree on what counts as pretentious and holds seven meetings on the subject."
   },
   {
    "label": "Open a rival diner themed coffee stand at your next rally, charging nine dollars a cup.",
    "eff": {
     "base": 3,
     "cash": 2,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "It sells out, at the exact price point it was mocking.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-19",
  "section": "base",
  "who": "state",
  "title": "Fire The Egghead",
  "text": "A well credentialed advisor at the State Department has, in a briefing, used the word nuance three separate times. Your base wants her gone by sundown.",
  "choices": [
   {
    "label": "Fire her publicly and cite her elitist vocabulary.",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -2,
     "congress": -2,
     "auth": 3
    },
    "res": "The department's next three hires are noticeably worse at their jobs and considerably louder about it."
   },
   {
    "label": "Keep her. Nuance, you note, is generally useful in foreign policy.",
    "eff": {
     "base": -4,
     "press": 5,
     "congress": 3,
     "courts": 2,
     "auth": 0
    },
    "res": "A talk radio host spends an entire segment mocking the word nuance itself."
   },
   {
    "label": "Fire her, then fire the two colleagues who defended her.",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -3,
     "congress": -3,
     "auth": 3
    },
    "res": "The department's remaining staff stop using multisyllabic words in meetings, out of caution."
   },
   {
    "label": "Reassign her to a windowless office studying a single, extremely minor treaty.",
    "eff": {
     "base": 3,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "She finishes a definitive report on it that nobody will ever read.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-20",
  "section": "base",
  "who": "cos",
  "title": "The Fifty Foot You",
  "text": "A grassroots committee, nine people, one of them your cousin, has raised enough in small donations to commission a fifty foot statue of you at a highway rest stop. Your chief of staff needs a decision on the unveiling.",
  "choices": [
   {
    "label": "Attend the unveiling and pose for photos at the base of the statue.",
    "eff": {
     "base": 5,
     "press": -3,
     "courts": -1,
     "cash": 1,
     "auth": 2
    },
    "res": "Several drivers report the statue's expression is unsettling from certain highway angles."
   },
   {
    "label": "Ask them to donate the money to actual road repair instead.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 2,
     "courts": 1,
     "auth": 0
    },
    "res": "The committee is baffled and mildly hurt."
   },
   {
    "label": "Approve the statue, plus a second one at the state line, waving.",
    "eff": {
     "base": 5,
     "press": -5,
     "cash": 1,
     "auth": 3
    },
    "res": "The waving statue's arm detaches in a windstorm within a month."
   },
   {
    "label": "Request the statue be made fifteen feet taller than originally planned.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "It now requires its own zoning exception, which is, of course, granted.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-21",
  "section": "base",
  "who": "girl",
  "title": "The Face On His Arm",
  "text": "A superfan has tattooed a startlingly accurate portrait of your face on his forearm, and he is at the rope line right now, sleeve rolled up, hoping you'll notice. Your aide isn't sure this is a normal thing that happens.",
  "choices": [
   {
    "label": "Sign the tattoo itself, in permanent marker, on live television.",
    "eff": {
     "base": 5,
     "press": -3,
     "courts": -1,
     "auth": 2
    },
    "res": "A tattoo parlor three states away reports a sudden, specific spike in business."
   },
   {
    "label": "Politely tell him that's a lot of commitment for a politician.",
    "eff": {
     "base": -4,
     "press": 3,
     "congress": 1,
     "courts": 1,
     "auth": 0
    },
    "res": "He looks genuinely wounded, and so, somehow, does the base."
   },
   {
    "label": "Invite him on stage to show off the tattoo to the whole arena.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -2,
     "street": -2,
     "auth": 2
    },
    "res": "Forty people ask the same tattoo artist for the same design by morning."
   },
   {
    "label": "Get a small, discreet tattoo of his face in return.",
    "eff": {
     "base": 4,
     "street": 3,
     "press": -2,
     "auth": 1
    },
    "res": "It is, by all accounts, a poor likeness.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-base-22",
  "section": "base",
  "who": "son",
  "title": "The Chant Leader Wants A Cabinet Seat",
  "text": "The man who has led the crowd chant at every single rally for the past year, a role with no formal title and no qualifications beyond an enormous voice, would like to be considered for Secretary of Something. Your son thinks it's a great idea.",
  "choices": [
   {
    "label": "Appoint him to a real cabinet position with a straight face.",
    "eff": {
     "base": 5,
     "press": -5,
     "courts": -3,
     "congress": -3,
     "cash": -2,
     "auth": 3
    },
    "res": "His first policy memo is, word for word, a chant."
   },
   {
    "label": "Thank him for his service and explain the job requires, at minimum, relevant experience.",
    "eff": {
     "base": -4,
     "press": 4,
     "congress": 3,
     "courts": 2,
     "auth": 0
    },
    "res": "He leads the crowd in a chant about your ingratitude that afternoon."
   },
   {
    "label": "Appoint him AND make chant leading an official government function with a budget.",
    "eff": {
     "base": 5,
     "press": -6,
     "congress": -4,
     "cash": -4,
     "auth": 3
    },
    "res": "The Office of Chant Leadership requests additional staff within a week."
   },
   {
    "label": "Name him Vice Chant Leader Emeritus and let the actual job stay vacant.",
    "eff": {
     "base": 3,
     "street": 2,
     "press": -2,
     "auth": 1
    },
    "res": "He is thrilled; nobody can explain what the title means.",
    "wild": true
   }
  ]
 },
 {
  "id": "p-pardon-1",
  "section": "pardon",
  "who": "lawyer",
  "title": "The Founder's Circle",
  "text": "Counsel explains that Trevor Bulwark, founder of the collapsed Pinnacle Retirement Trust, siphoned eighty million dollars from retirees to buy a fleet of jet skis. \"He says he's spiritually rehabilitated,\" the lawyer notes. \"He also says he'd like his yacht back.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "congress": -3,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Bulwark opens Pinnacle Retirement Trust Two under a slightly different logo."
   },
   {
    "label": "Refuse, let him sweat",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "congress": 3
    },
    "res": "The retirees get a fraction of their money back and a strongly worded letter."
   },
   {
    "label": "Pardon and name him Director of Retirement Security",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -5,
     "congress": -4,
     "cash": 0.3,
     "auth": 3
    },
    "res": "Bulwark's first policy memo recommends more jet skis for everyone."
   },
   {
    "label": "Pardon him, but he repays every retiree by hand at an ATM, filmed live",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 2,
     "courts": -2,
     "cash": -0.2,
     "auth": 1
    },
    "res": "The livestream gets more viewers than the State of the Union."
   }
  ]
 },
 {
  "id": "p-pardon-2",
  "section": "pardon",
  "who": "ag",
  "title": "Target Rich Environment",
  "text": "The Attorney General reads the file on General Marcus Thorne, convicted for ordering a strike on a wedding he called \"target rich.\" Thorne's clemency letter is four pages of grievance and one photo of himself saluting. \"He's popular with the base,\" the AG says, \"in the way a firework is popular.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -6,
     "congress": -4,
     "auth": 3
    },
    "res": "Thorne holds a homecoming rally at a bowling alley he insists is \"strategically significant.\""
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 5,
     "congress": 4
    },
    "res": "The families of the dead issue a statement. Almost nobody reads it."
   },
   {
    "label": "Pardon and appoint him Special Envoy for Peace",
    "eff": {
     "base": 4,
     "courts": -7,
     "press": -6,
     "congress": -5,
     "auth": 3
    },
    "res": "His first act abroad is to ask a foreign minister if he \"wants problems.\""
   },
   {
    "label": "Pardon him, on the condition he write an apology memoir",
    "wild": true,
    "eff": {
     "base": 3,
     "press": -1,
     "courts": -3,
     "cash": 0.1
    },
    "res": "The memoir sells briskly under the title \"I'd Do It Again, Probably.\""
   }
  ]
 },
 {
  "id": "p-pardon-3",
  "section": "pardon",
  "who": "lawyer",
  "title": "A Friend of the Family",
  "text": "Sal Marchetti, convicted on eleven counts of racketeering, has apparently been a \"dear friend and generous supporter for decades,\" according to the clemency petition his lawyer definitely did not write for him. \"He sends his regards,\" the lawyer says, \"and a very large ham.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "congress": -3,
     "cash": 0.5,
     "auth": 2
    },
    "res": "The ham was, in fact, stuffed with cash. Nobody asks where the cash came from."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "congress": 3
    },
    "res": "Marchetti's associates express their disappointment through several small, deniable fires."
   },
   {
    "label": "Pardon and appoint him Ambassador to Malta",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -5,
     "cash": 0.4,
     "auth": 3
    },
    "res": "The Maltese government files a formal, extremely polite complaint."
   },
   {
    "label": "Pardon him in exchange for the family calzone recipe",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 1,
     "courts": -2,
     "cash": 0.2
    },
    "res": "The recipe is real. It is also, unmistakably, a threat."
   }
  ]
 },
 {
  "id": "p-pardon-4",
  "section": "pardon",
  "who": "cj",
  "title": "Bull in a China Shop",
  "text": "Sheriff \"Bull\" Haney planted evidence on dozens of defendants and ran a private toll booth for undocumented drivers passing through his county. His supporters call it \"old school policing.\" The Chief Justice calls it several federal crimes. \"He wants his badge back,\" the Justice says, \"specifically.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -4,
     "congress": -2,
     "auth": 2,
     "cash": 0.2
    },
    "res": "Bull gets his badge back and a t-shirt that says \"Reinstated.\""
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 5,
     "congress": 3,
     "street": 3
    },
    "res": "His victims finally get a hearing that isn't rigged."
   },
   {
    "label": "Pardon and appoint him Border Czar",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -5,
     "street": -4,
     "auth": 3
    },
    "res": "Toll booths appear at three more county lines within the week."
   },
   {
    "label": "Pardon him, reassign to guarding the White House gift shop",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 0,
     "courts": -2,
     "auth": 1
    },
    "res": "He is, disturbingly, very good at upselling mugs."
   }
  ]
 },
 {
  "id": "p-pardon-5",
  "section": "pardon",
  "who": "ag",
  "title": "Offshore and Onside",
  "text": "Chip Renfro, a major donor, hid roughly two billion dollars from the IRS across nine shell companies named after his golf handicap. \"He'd like to call it a filing error,\" the AG says, \"a two billion dollar filing error.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "courts": -4,
     "press": -4,
     "congress": -4,
     "cash": 0.6,
     "auth": 2
    },
    "res": "Renfro immediately opens a tenth shell company, this one named after your approval rating."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "congress": 4
    },
    "res": "The IRS actually collects, for once, and nobody thanks them."
   },
   {
    "label": "Pardon and name him Treasury Advisor on Tax Simplification",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -5,
     "congress": -4,
     "cash": 0.5,
     "auth": 3
    },
    "res": "His simplification plan is one page long and benefits exactly one taxpayer."
   },
   {
    "label": "Pardon him in exchange for a ten percent \"processing fee\"",
    "wild": true,
    "eff": {
     "base": 3,
     "cash": 0.8,
     "press": -2,
     "courts": -3
    },
    "res": "It is, by any definition, a bribe. It is also, technically, processed."
   }
  ]
 },
 {
  "id": "p-pardon-6",
  "section": "pardon",
  "who": "son",
  "title": "To the Moon and Back to Prison",
  "text": "Dex Bramwell rug-pulled forty thousand investors out of his CoinDaddy token, then bought a submarine. \"He says the technology was ahead of its time,\" your son reports, grinning. \"He also says he'll cut you in on CoinDaddy Two.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -4,
     "congress": -2,
     "cash": 0.3,
     "auth": 2
    },
    "res": "CoinDaddy Two launches within the hour. It crashes within the day."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "street": 3
    },
    "res": "Forty thousand people get roughly eleven cents each and a lesson."
   },
   {
    "label": "Pardon and appoint him Crypto Czar",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "cash": 0.4,
     "auth": 3
    },
    "res": "His first regulatory guidance is a single rocket-ship emoji."
   },
   {
    "label": "Accept the pardon fee paid entirely in his worthless coin",
    "wild": true,
    "eff": {
     "base": 3,
     "cash": -0.1,
     "press": 1,
     "courts": -2
    },
    "res": "The coin is worth nothing by dinner. The submarine, somehow, is real."
   }
  ]
 },
 {
  "id": "p-pardon-7",
  "section": "pardon",
  "who": "press",
  "title": "The Freezer Full of Twenties",
  "text": "Representative Delbert Cranch was caught with four hundred thousand dollars in cash stuffed inside his kitchen freezer, wrapped, he insists, \"for freshness.\" The press secretary reads the clemency request aloud with visible physical discomfort.",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "congress": -5,
     "courts": -4,
     "press": -4,
     "auth": 2,
     "cash": 0.2
    },
    "res": "Cranch buys a second, larger freezer."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "congress": 4
    },
    "res": "Cranch is expelled from Congress and, reportedly, evicted by his own freezer repair bill."
   },
   {
    "label": "Pardon and appoint him to chair the Ethics Committee",
    "eff": {
     "base": 5,
     "congress": -7,
     "courts": -5,
     "press": -6,
     "auth": 3
    },
    "res": "His opening remarks are, somehow, about proper freezer organization."
   },
   {
    "label": "Pardon him, but the freezer goes to the Smithsonian",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 0,
     "courts": -2
    },
    "res": "It is now the museum's most visited exhibit."
   }
  ]
 },
 {
  "id": "p-pardon-8",
  "section": "pardon",
  "who": "son",
  "title": "Family Business",
  "text": "Your cousin Wade faked his own kidnapping for the insurance payout, then posted photos from the \"captivity\" at a resort in Cabo. \"He says family sticks together,\" your son reports. \"He also says the resort has a great swim-up bar.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 3,
     "courts": -5,
     "press": -5,
     "congress": -3,
     "auth": 2,
     "cash": 0.2
    },
    "res": "Wade thanks you at Thanksgiving, loudly, in front of cameras you didn't invite."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 5,
     "congress": 3
    },
    "res": "Wade does actual time. The family group chat goes quiet for a month."
   },
   {
    "label": "Pardon and make him a FEMA regional liaison",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -6,
     "auth": 3,
     "cash": 0.2
    },
    "res": "His first disaster briefing includes a suspicious number of swim-up bar recommendations."
   },
   {
    "label": "Pardon him, but he must fake-get-found alive on live television, for real this time",
    "wild": true,
    "eff": {
     "base": 3,
     "press": -2,
     "courts": -2
    },
    "res": "The ratings are excellent. The credibility is not."
   }
  ]
 },
 {
  "id": "p-pardon-9",
  "section": "pardon",
  "who": "fbi",
  "title": "Evidence Room Discount",
  "text": "Detective Ray Kessler planted evidence on suspects he didn't like and took cash from a cartel for the ones he did. The FBI director slides the file across the desk. \"He's asking for a full pardon and, I want to stress this, his old parking spot.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -4,
     "street": -3,
     "auth": 2
    },
    "res": "Kessler gets his badge, his spot, and immediately a new client."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 5,
     "street": 4
    },
    "res": "Nine wrongful convictions get reopened because of the case against him."
   },
   {
    "label": "Pardon and appoint him head of Internal Affairs",
    "eff": {
     "base": 5,
     "courts": -7,
     "press": -6,
     "street": -5,
     "auth": 3
    },
    "res": "Internal Affairs complaints against Internal Affairs quadruple."
   },
   {
    "label": "Pardon him, reassign to evidence room inventory, permanently",
    "wild": true,
    "eff": {
     "base": 3,
     "courts": -2,
     "press": 0
    },
    "res": "He is, it turns out, extremely good at organizing stolen goods."
   }
  ]
 },
 {
  "id": "p-pardon-10",
  "section": "pardon",
  "who": "vp",
  "title": "The Courthouse Standoff",
  "text": "Colonel Gid Strother held a county courthouse at gunpoint for six hours over a zoning dispute. The Vice President delivers the clemency petition personally, wearing, for reasons unexplained, a camouflage tie. \"His men love him,\" the VP says. \"So do the polls.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -5,
     "congress": -3,
     "street": -3,
     "auth": 3
    },
    "res": "Strother holds a victory rally at the same courthouse, armed, again."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 5,
     "street": 4
    },
    "res": "The county clerk he threatened finally gets to sleep through the night."
   },
   {
    "label": "Pardon and appoint him official Border Militia Liaison",
    "eff": {
     "base": 5,
     "courts": -7,
     "press": -6,
     "street": -5,
     "auth": 3
    },
    "res": "Three more courthouses report similar \"zoning disputes\" within a month."
   },
   {
    "label": "Pardon him, on the condition his militia switch to competitive quilting",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 1,
     "street": 1,
     "courts": -2
    },
    "res": "The quilts are, against all odds, quite good."
   }
  ]
 },
 {
  "id": "p-pardon-11",
  "section": "pardon",
  "who": "girl",
  "title": "The Buffalo Returns",
  "text": "Chad \"The Buffalo\" Merkins stormed the Capitol wearing horns and a vest that said nothing in particular. He's become a folk hero to people who own at least one flag on a pole in their yard. \"He wants his horns back from evidence,\" your press aide says. \"He misses them.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 5,
     "courts": -5,
     "press": -5,
     "congress": -4,
     "auth": 3
    },
    "res": "The horns are returned. Merkins wears them to brunch."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -4,
     "press": 5,
     "courts": 5,
     "congress": 4
    },
    "res": "Merkins serves his sentence and writes a strongly worded, poorly spelled memoir from prison."
   },
   {
    "label": "Pardon and make him official Capitol tour guide",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -7,
     "congress": -5,
     "auth": 3,
     "cash": 0.1
    },
    "res": "His tour includes a detailed reenactment. Twice daily. With horns."
   },
   {
    "label": "Pardon him, then sell the horns as official merchandise",
    "wild": true,
    "eff": {
     "base": 4,
     "cash": 0.3,
     "press": -2
    },
    "res": "They sell out in an hour. Merkins demands royalties."
   }
  ]
 },
 {
  "id": "p-pardon-12",
  "section": "pardon",
  "who": "cos",
  "title": "The Insulin Markup",
  "text": "Marlon Vance, pharmaceutical CEO and reliable fundraiser, tripled insulin prices during a supply shortage he personally created. His clemency letter describes it as \"responsive pricing.\" The Chief of Staff describes it, privately, as \"a crime with a PowerPoint.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 3,
     "press": -5,
     "courts": -4,
     "street": -4,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Vance immediately announces \"responsive pricing\" for three more drugs."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 4,
     "street": 5
    },
    "res": "Insulin prices actually drop. Vance calls it \"government overreach.\""
   },
   {
    "label": "Pardon and appoint him a health cost advisor",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "street": -5,
     "cash": 0.5,
     "auth": 3
    },
    "res": "His cost-cutting recommendation is, somehow, higher prices."
   },
   {
    "label": "Pardon him, but he delivers insulin door to door for a week",
    "wild": true,
    "eff": {
     "base": 2,
     "press": 2,
     "street": 1,
     "cash": -0.1
    },
    "res": "He hates every second of it. The photos are, admittedly, great."
   }
  ]
 },
 {
  "id": "p-pardon-13",
  "section": "pardon",
  "who": "pastor",
  "title": "The Last of the Eagles",
  "text": "Duke Callahan hunted the final breeding pair of a protected bald eagle colony because, in his words, \"one of them looked at me funny.\" Even the pastor seems uneasy relaying the request. \"He's asking for forgiveness,\" the pastor says, \"and his rifle back.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "press": -4,
     "courts": -3,
     "street": -2,
     "auth": 2
    },
    "res": "Callahan gets his rifle back. The colony does not get its eagles back."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "street": 3
    },
    "res": "Conservationists call it a rare win. Callahan calls it \"persecution.\""
   },
   {
    "label": "Pardon and appoint him Wildlife Commissioner",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -5,
     "street": -4,
     "auth": 3
    },
    "res": "His first policy proposal shortens the endangered species list by removing species."
   },
   {
    "label": "Pardon him, but he must wear an eagle costume at every rally",
    "wild": true,
    "eff": {
     "base": 3,
     "press": -1,
     "street": -1
    },
    "res": "He wears it. He hates it. The crowd, disturbingly, loves it."
   }
  ]
 },
 {
  "id": "p-pardon-14",
  "section": "pardon",
  "who": "pastor",
  "title": "The Ark Fund",
  "text": "Reverend Silas Thorpe convinced his congregation to hand over their retirement savings to build a literal, seaworthy ark, then used the money to buy a smaller, non-seaworthy yacht. \"He says the Lord moves in mysterious ways,\" the pastor sighs. \"Mostly toward his yacht.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -4,
     "congress": -2,
     "cash": 0.3,
     "auth": 2
    },
    "res": "Thorpe announces Ark Fund Two, \"this time with a real boat.\""
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 5,
     "street": 3
    },
    "res": "His congregation gets restitution and, finally, some skepticism."
   },
   {
    "label": "Pardon and name him Faith Advisor to the Administration",
    "eff": {
     "base": 5,
     "courts": -6,
     "press": -6,
     "cash": 0.3,
     "auth": 3
    },
    "res": "His first sermon to staff is, unmistakably, a fundraising pitch."
   },
   {
    "label": "Pardon him in exchange for a personal blessing",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 0,
     "courts": -2
    },
    "res": "The blessing is oddly specific and involves a tithe."
   }
  ]
 },
 {
  "id": "p-pardon-15",
  "section": "pardon",
  "who": "lawyer",
  "title": "Nineteen Years",
  "text": "Odell Pruitt served nineteen years for a robbery that DNA evidence now proves he didn't commit. His lawyer, unusually quiet, just slides the folder across. \"There's no clever angle here,\" she says. \"He's just innocent.\"",
  "choices": [
   {
    "label": "Leave him where he is",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -5,
     "street": -4,
     "auth": 2
    },
    "res": "The base cheers \"law and order.\" Pruitt stays in a cell that was never his to occupy."
   },
   {
    "label": "Free him",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 6,
     "street": 5
    },
    "res": "Pruitt walks out into a world nineteen years gone. The base calls it soft."
   },
   {
    "label": "Commute quietly, take no credit, no press release",
    "eff": {
     "base": 2,
     "press": 1,
     "courts": 2,
     "street": 1
    },
    "res": "He's free, but the record still calls him a convict. Nobody notices either way."
   },
   {
    "label": "Free him, but only if he thanks you by name on camera",
    "wild": true,
    "eff": {
     "base": 1,
     "press": -1,
     "courts": 1
    },
    "res": "He does it through gritted teeth. Nineteen years bought a very short speech."
   }
  ]
 },
 {
  "id": "p-pardon-16",
  "section": "pardon",
  "who": "cj",
  "title": "For the Insurance",
  "text": "Nadia Volkov burned down her own rent-controlled building for the insurance payout, displacing forty families in the process. The Chief Justice reviews the file with a flat expression. \"She's calling it a 'renovation delay,'\" he says.",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "courts": -5,
     "press": -5,
     "street": -4,
     "congress": -2,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Volkov buys a second building. Insiders expect a second fire."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 4,
     "street": 5
    },
    "res": "The forty families get restitution. Volkov gets what's coming to her."
   },
   {
    "label": "Pardon and appoint her to a housing affordability task force",
    "eff": {
     "base": 5,
     "courts": -7,
     "press": -6,
     "street": -6,
     "cash": 0.3,
     "auth": 3
    },
    "res": "Her first recommendation involves matches, metaphorically, she insists."
   },
   {
    "label": "Pardon her, on the condition she rebuilds it herself, by hand",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 0,
     "street": 1,
     "cash": -0.1
    },
    "res": "She is, it turns out, a genuinely terrible carpenter."
   }
  ]
 },
 {
  "id": "p-pardon-17",
  "section": "pardon",
  "who": "writer",
  "title": "The Memo",
  "text": "Ingrid Halvorsen leaked an internal memo proving a company covered up contaminated drinking water, and was convicted of \"theft of government property\" for the paper it was printed on. \"There's no version of this where she's the villain,\" your speechwriter admits, \"which is a problem for the speech.\"",
  "choices": [
   {
    "label": "Leave her to rot",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -4,
     "street": -4,
     "auth": 2
    },
    "res": "The base calls her a traitor. The water is still contaminated."
   },
   {
    "label": "Free her",
    "eff": {
     "base": -5,
     "press": 7,
     "courts": 5,
     "street": 6,
     "auth": -1
    },
    "res": "Halvorsen walks free and immediately keeps whistleblowing. The base is furious."
   },
   {
    "label": "Pardon her quietly, no press release, no credit",
    "eff": {
     "base": 2,
     "press": 2,
     "courts": 2,
     "street": 1
    },
    "res": "She's free. Nobody in your base ever finds out, which is the point."
   },
   {
    "label": "Free her, but classify the fact that you did it",
    "wild": true,
    "eff": {
     "base": 1,
     "press": -2,
     "courts": 1
    },
    "res": "The pardon is real. The paperwork proving it does not officially exist."
   }
  ]
 },
 {
  "id": "p-pardon-18",
  "section": "pardon",
  "who": "ag",
  "title": "The Kennel",
  "text": "Chester Voss, a reliable donor, ran a dogfighting ring out of a barn he described in fundraising emails as a \"wellness retreat.\" The Attorney General reads the charge sheet with visible distaste. \"He'd like it gone before the midterms,\" she says.",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "street": -3,
     "congress": -2,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Voss reopens the barn. The sign now says \"wellness retreat, phase two.\""
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 5,
     "courts": 4,
     "street": 5
    },
    "res": "The dogs are rehomed. Voss's fundraising emails get noticeably quieter."
   },
   {
    "label": "Pardon and appoint him a rural development advisor",
    "eff": {
     "base": 4,
     "press": -6,
     "courts": -6,
     "street": -5,
     "cash": 0.3,
     "auth": 3
    },
    "res": "His first proposal involves federal funding for \"wellness retreats.\""
   },
   {
    "label": "Pardon him, on the condition he personally adopts every dog",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 1,
     "street": 1,
     "cash": -0.1
    },
    "res": "He now owns forty dogs and, reportedly, hates every one of them equally."
   }
  ]
 },
 {
  "id": "p-pardon-19",
  "section": "pardon",
  "who": "cj",
  "title": "Eunice",
  "text": "Eunice Radley, seventy eight, is serving a life sentence for selling a small amount of marijuana under a law that's since been repealed everywhere except her file. \"She's not asking for money or a title,\" the Chief Justice notes. \"Just to see her yard again.\"",
  "choices": [
   {
    "label": "Leave her where she is",
    "eff": {
     "base": 4,
     "press": -5,
     "courts": -4,
     "street": -4,
     "auth": 2
    },
    "res": "The base applauds toughness. Eunice misses another birthday behind bars."
   },
   {
    "label": "Free her",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 6,
     "street": 5
    },
    "res": "Eunice sees her yard again. The base grumbles about \"soft on crime.\""
   },
   {
    "label": "Release her only if she thanks you on camera",
    "eff": {
     "base": 2,
     "press": 1,
     "courts": 2,
     "street": 1
    },
    "res": "She does, politely, through tears that are not entirely gratitude."
   },
   {
    "label": "Free her, then hire her to bake for the White House",
    "wild": true,
    "eff": {
     "base": 2,
     "press": 1,
     "cash": -0.1,
     "street": 1
    },
    "res": "Her pie is, by unanimous staff vote, better than the White House chef's."
   }
  ]
 },
 {
  "id": "p-pardon-20",
  "section": "pardon",
  "who": "writer",
  "title": "A More Perfect Forgery",
  "text": "Percival Ott sold three museums a forged draft of the Declaration of Independence, hand-aged with tea bags and, allegedly, real dedication to craft. \"He's not sorry,\" the speechwriter reports. \"He's proud. He wants that noted in the pardon.\"",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 3,
     "courts": -4,
     "press": -4,
     "congress": -2,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Ott immediately begins work on a forged Bill of Rights."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -3,
     "press": 4,
     "courts": 4,
     "congress": 3
    },
    "res": "The museums get their money back. Ott gets an actual, unforged sentence."
   },
   {
    "label": "Pardon and appoint him Curator of the National Archives",
    "eff": {
     "base": 4,
     "courts": -6,
     "press": -6,
     "congress": -4,
     "cash": 0.3,
     "auth": 3
    },
    "res": "Attendance is up. So, quietly, is the archive's forgery count."
   },
   {
    "label": "Pardon him, but he forges a flattering biography of you instead",
    "wild": true,
    "eff": {
     "base": 3,
     "press": -2,
     "courts": -2,
     "cash": 0.2
    },
    "res": "It's a bestseller. Historians note it is, at minimum, seventy percent fiction."
   }
  ]
 },
 {
  "id": "p-pardon-21",
  "section": "pardon",
  "who": "fbi",
  "title": "Standing Near the Trash Can",
  "text": "Marcus Ibe was charged with domestic terrorism for standing near a burning trash can at a peaceful rally he didn't start and tried to put out. \"He put out the fire,\" the FBI director says. \"That's in the report. Nobody read that part.\"",
  "choices": [
   {
    "label": "Leave him to rot",
    "eff": {
     "base": 5,
     "press": -6,
     "courts": -5,
     "street": -5,
     "auth": 2
    },
    "res": "The base calls him a menace. He remains in prison for extinguishing a trash fire."
   },
   {
    "label": "Free him",
    "eff": {
     "base": -5,
     "press": 7,
     "courts": 6,
     "street": 6,
     "auth": -1
    },
    "res": "Ibe walks free. The base insists this proves the system is \"rigged for criminals.\""
   },
   {
    "label": "Release him quietly, but the terrorism charge stays on his record",
    "eff": {
     "base": 2,
     "press": 2,
     "courts": 2,
     "street": 2
    },
    "res": "He's out, but every background check for the rest of his life flags him as a threat."
   },
   {
    "label": "Free him, then offer him a reality show about it",
    "wild": true,
    "eff": {
     "base": 2,
     "press": -1,
     "cash": 0.1,
     "street": 1
    },
    "res": "The pilot is called \"Trash Fire.\" It gets picked up for a full season."
   }
  ]
 },
 {
  "id": "p-pardon-22",
  "section": "pardon",
  "who": "lawyer",
  "title": "The Sugar Pill Doctor",
  "text": "Dr. Warrick Slate sold thousands of cancer patients chemotherapy pills that were, on lab analysis, mostly sugar. \"He's calling it a 'placebo-adjacent business model,'\" his lawyer reads aloud, then sets the paper down like it's radioactive.",
  "choices": [
   {
    "label": "Sign the pardon",
    "eff": {
     "base": 3,
     "press": -6,
     "courts": -5,
     "street": -4,
     "congress": -2,
     "cash": 0.4,
     "auth": 2
    },
    "res": "Slate announces a new line of \"wellness-adjacent\" pills within the week."
   },
   {
    "label": "Refuse",
    "eff": {
     "base": -4,
     "press": 6,
     "courts": 5,
     "street": 5
    },
    "res": "The victims finally get their day in court, and their money back."
   },
   {
    "label": "Pardon and appoint him to the FDA advisory board",
    "eff": {
     "base": 4,
     "press": -7,
     "courts": -6,
     "street": -5,
     "cash": 0.3,
     "auth": 3
    },
    "res": "His first vote is against stricter pill labeling requirements."
   },
   {
    "label": "Pardon him, on the condition he takes his own pills first",
    "wild": true,
    "eff": {
     "base": 3,
     "press": 1,
     "street": 1,
     "courts": -2
    },
    "res": "He takes them without hesitation. This tells you everything."
   }
  ]
 }
];

/* Resolve the who-id strings to cast objects so the card renders like any
   other. Runs at load (after cards.js has defined AD.CAST). */
(function () {
  (AD.SECTION_POOL || []).forEach(function (c) {
    c.who = (AD.CAST && AD.CAST[c.who]) || (AD.CAST && AD.CAST.cos) || c.who;
  });
})();
