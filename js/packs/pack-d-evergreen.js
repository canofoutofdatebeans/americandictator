/* ============================================================
   PACK D, EVERGREEN  (any month)
   Pacing material. Gaffes, vanity, foreign policy by instinct,
   and the ordinary weather of the office. Weighted early by the
   deck's own 'levity' tag rather than by month windows, so these
   turn up whenever the term needs air.

   REWRITTEN against the research. Every crisis carries a `src`.
   INSPIRED BY, NEVER COPIED.

   The research's own Recommendations section flags the gaffe pile
   as "Tier 1, airtight and iconic (use freely)", which is why the
   comedy in this pack sits closer to the record than in packs B
   and C. Where an item is Tier 2 (contested), the joke is about
   the dispute rather than the claim; where it is Tier 3 (verify
   wording), the wording is not used at all.

   No `breaks:` tags live in this pack and none are needed, the
   clause routes are all in A, B, C, E, F, G and the core deck.

   45 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE POSTS ══════════════ */

{ id:'e-covfefe', title:'The Word', who:C.social, min:1, max:48, tags:['gaffe','levity','press'],
  src:'an incomplete, misspelled post left up overnight',
  text:'You fell asleep mid-post. The sentence stops after a word that is not a word, and it has been live ' +
       'for six hours. Brayden has the numbers. "Four hundred thousand shares, sir. It is the most engaged ' +
       'thing you have ever written and nobody knows what it means, including you."',
  choices:[
    { label:'Leave it up. Say only you know what it means.', eff:{base:+8,press:-3,street:-2,auth:+3},
      res:'A word that means nothing becomes a password, a T-shirt and eventually a racehorse. It is the most beloved thing you ever produce.' },
    { label:'Delete it and post the finished sentence.', eff:{press:+5,congress:+3,base:-5,auth:+1},
      res:'The completed thought is about trade deficits and is read by four thousand people. The fragment had reached eleven million.' },
    { label:'Explain, at length, that it was a typo.', eff:{base:-4,press:+4,street:+2,auth:-1},
      res:'Explaining a joke you did not make removes the only interesting thing about it. Brayden looks physically pained.' },
    { label:'Add it to the dictionary by executive order.', eff:{base:+5,press:-4,courts:-4,street:-3,auth:+3}, wild:true,
      res:'The order defines it as "a state of alert readiness." Four lexicographers respond with genuine delight and one writes an excellent essay about it.' }]},

{ id:'e-hamberders', title:'The Buffet', who:C.usher, min:1, max:48, tags:['gaffe','levity','press'],
  src:'a fast-food buffet laid on for a visiting championship team during a funding lapse',
  text:'The catering staff are furloughed, so you have bought a thousand fast-food burgers with your own money ' +
       'and laid them out on silver under the chandeliers. Alvin is arranging them by height. ' +
       'Your post announcing it has misspelled the main item.',
  choices:[
    { label:'Leave the spelling. Post a photograph of the pile.', eff:{base:+9,press:-3,street:+3,auth:+2},
      res:'The photograph is genuinely joyful and the misspelling is genuinely immortal. Eleven of the players say it was the best day of their lives.' },
    { label:'Correct the post. Keep the burgers.', eff:{press:+4,base:-3,auth:+1},
      res:'Correct spelling, same burgers, a quarter of the coverage. Somebody in comms is quietly delighted and nobody else is.' },
    { label:'Cancel it. Have the kitchen reopened for one night.', eff:{press:+6,congress:+5,street:+4,base:-6,cash:-0.1,auth:-1},
      res:'Four furloughed chefs are paid overtime to cook for eleven athletes during a shutdown, and somebody works out the per-plate cost.' },
    { label:'Serve them on the state china.', eff:{base:+6,press:-4,street:-2,auth:+2}, wild:true,
      res:'The 1918 Wilson service, under warming lamps, holding cheeseburgers. The curator files an incident report that runs to four pages.' }]},

{ id:'e-misspell-count', title:'The Running Total', who:C.press, min:1, max:48, tags:['gaffe','press','levity'],
  src:'a fact-checking desk cataloguing presidential misspellings over a full term',
  text:'A desk somewhere has been counting your spelling for the whole term. Kaylee has today\'s figure. ' +
       '"Nine hundred and four, sir. They have categories now. There is a subcategory for words you have ' +
       'misspelled in more than one direction."',
  choices:[
    { label:'Post unedited. Forever. It is proof I write them.', eff:{base:+8,press:-4,street:-2,auth:+3},
      res:'It is proof, and four million people believe it for that exact reason, and they are right. Engagement is 22% higher than anything a staffer posts.' },
    { label:'Have somebody read them before they go out.', eff:{press:+6,congress:+4,street:+3,base:-7,auth:+1},
      res:'Correct spelling reads as a committee and a committee reads as everybody else. The account becomes indistinguishable from four hundred others.' },
    { label:'Misspell one word on purpose, every time, forever.', eff:{base:+9,press:-3,auth:+3},
      res:'It becomes a signature, then a shibboleth. Supporters start misspelling it back and the counting desk quietly gives up.' },
    { label:'Publish a corrected edition of your own posts, bound.', eff:{base:+4,press:+3,street:+2,cash:+0.1,auth:+1}, wild:true,
      res:'Two volumes, hardback, professionally proofread. It sells 90,000 copies and is reviewed, seriously, in three literary supplements.' }]},

{ id:'e-503', title:'Five Hundred And Three', who:C.press, min:12, max:48, tags:['press','gaffe'],
  src:'a fact-checking tally of tens of thousands of false or misleading claims across a term',
  text:'A fact-checking operation has published the term total. Kaylee reads it flatly. ' +
       '"Thirty thousand five hundred and seventy-three. About twenty-one a day. The single-day record is ' +
       'five hundred and three, sir, and it was a Monday."',
  choices:[
    { label:'Beat the record. Deliberately. On Thursday.', eff:{base:+8,press:-8,courts:-5,congress:-5,street:-4,auth:+6},
      res:'You clear six hundred by lunchtime. Turning the count into a scoreboard destroys it as a criticism and that is precisely why it works.' },
    { label:'Dispute the methodology. Publish a rebuttal.', eff:{base:+4,press:-5,congress:-3,auth:+4},
      res:'The rebuttal contests four hundred of the thirty thousand and concedes the rest by omission, which is the part that gets covered.' },
    { label:'Say nothing. A number is a number.', eff:{press:+4,congress:+3,base:-2,auth:+3},
      res:'It runs for a day and a half. Nothing you could have said would have shortened it and several things would have extended it.' },
    { label:'Employ the fact-checkers. All of them.', eff:{base:+5,press:+4,congress:-3,cash:-0.2,auth:+2}, wild:true,
      res:'Offers go to the entire desk. Two accept and are put on internal review, where they produce a memo so accurate it is classified within a week.' }]},

{ id:'e-stable-genius', title:'The Self-Assessment', who:C.doc, min:1, max:48, tags:['vanity','levity','press'],
  src:'a self-description as a very stable genius',
  text:'You have described yourself, in writing, in the third sentence of a post, as a very stable genius. ' +
       'Dr Prine is here for an unrelated reason and has read it on his phone in the doorway. ' +
       '"Sir, I would like it noted that I did not certify that."',
  choices:[
    { label:'Repeat it. Add "like, really smart."', eff:{base:+7,press:-5,street:-4,congress:-4,auth:+4},
      res:'Both phrases enter the language permanently and neither is ever used sincerely by anybody except you.' },
    { label:'Let it stand. Do not repeat it.', eff:{base:+3,press:-2,auth:+2},
      res:'Said once it is a boast. Said twice it is a symptom, and you have stopped at one, which nobody expected.' },
    { label:'Have Prine issue a genuine cognitive assessment.', eff:{press:+6,congress:+4,street:+3,base:-5,auth:-1},
      res:'You score entirely normally, which is reported as a scandal by one half of the country and a triumph by the other.' },
    { label:'Commission an IQ test and release only the envelope.', eff:{base:+5,press:-3,street:-2,auth:+2}, wild:true,
      res:'A sealed envelope is displayed at four rallies and never opened. It is, as a piece of political theatre, close to perfect.' }]},

/* ══════════════ THE MAP AND THE WEATHER ══════════════ */

{ id:'e-sharpie', title:'The Amended Forecast', who:C.press, min:1, max:48, tags:['gaffe','levity','press'],
  src:'a hurricane forecast map altered by hand to include an additional state',
  text:'You said the storm would hit a state that was never in the cone. The map on the desk now has an ' +
       'additional loop drawn on it in black marker. Kaylee: "Sir. The map is a federal scientific product. ' +
       'It is a criminal offence to alter one. Somebody has altered one. With a pen."',
  choices:[
    { label:'Show the map on camera. Do not mention the loop.', eff:{base:+7,press:-7,street:-5,courts:-4,auth:+4},
      res:'Everybody sees the loop. Nobody mentions the loop. It is broadcast live for four minutes and becomes the defining image of the year.' },
    { label:'Have the weather agency issue a supporting statement.', eff:{base:+5,press:-9,street:-7,courts:-5,congress:-4,auth:+6},
      res:'An unsigned statement backing you goes out at 9pm. Every meteorologist in the agency learns something that evening about what the agency is for.' },
    { label:'"I was given an early projection." Move on.', eff:{press:+5,street:+4,base:-4,auth:+1},
      res:'It is even true, an early projection did include the state. Saying so on day one would have ended it, and it is now day four.' },
    { label:'Redraw the entire coastline while you are there.', eff:{base:+5,press:-5,street:-4,courts:-3,auth:+3}, wild:true,
      res:'The amended map places two states inland. It is photographed, framed, and hangs in a meteorology department to this day.' }]},

{ id:'e-mortality', title:'The Number From The University', who:C.health, min:8, max:48, tags:['press','street'],
  src:'public dispute of an independently calculated disaster mortality figure',
  text:'A university has produced the excess-mortality estimate for the hurricane: roughly three thousand. ' +
       'Dr Pike has the methodology. "It is a standard approach, sir, and it is the same one your own ' +
       'administration uses for everything else. Disputing it means disputing the method we rely on."',
  choices:[
    { label:'Dispute it. Say the number was invented to hurt you.', eff:{base:+6,street:-12,press:-9,congress:-7,courts:-5,auth:+4},
      res:'Three thousand families hear a president say their relatives are a political construct. Four of them are interviewed and the segment runs for a week.' },
    { label:'Accept the number. Say the response was still good.', eff:{street:+6,press:+6,congress:+4,base:-5,auth:+2},
      res:'A defensible argument that you can actually win, delivered next to a figure you did not fight. It is the shortest version of the story.' },
    { label:'Order a federal review to produce our own figure.', eff:{base:+3,street:-4,press:-3,auth:+4},
      res:'It reports in eleven months with a figure of 2,975, which is worse for you than the original because it is now yours.' },
    { label:'Throw more paper towels.', eff:{base:+4,street:-9,press:-8,congress:-5,auth:+2}, wild:true,
      res:'A second visit, a second gymnasium, a second underarm throw. Somebody who was present the first time is present again and says so on camera.' }]},

/* ══════════════ THE MILITARY AND THE DEAD ══════════════ */

{ id:'e-war-hero', title:'The Captured Man', who:C.vet, min:1, max:48, tags:['military','press'],
  src:'disparagement of a captured serviceman and later refusal to soften it',
  text:'Years ago you said you preferred people who were not captured. The man is dead now, and this morning ' +
       'you were asked about it and said you were never a fan and never would be. The veterans\' liaison has ' +
       'asked for four minutes and has not sat down.',
  choices:[
    { label:'Stand by it. He was overrated and I said so.', eff:{base:+5,street:-13,press:-9,congress:-11,courts:-4,auth:+3},
      res:'Four senators of your own party respond by name within the hour. Two of them are veterans and one of them is the majority leader.' },
    { label:'Say nothing further. Ever.', eff:{street:+6,congress:+5,press:+4,base:-3,auth:+2},
      res:'Silence lets it settle in nine days. It is the cheapest available answer and the one you find hardest to give.' },
    { label:'Visit the grave. No cameras. No statement.', eff:{street:+11,congress:+9,press:+9,base:-7,auth:+1},
      res:'A groundskeeper mentions it four months later, unprompted, to a reporter writing about something else. It does more than any statement could.' },
    { label:'Award him a posthumous medal for being captured.', eff:{base:+3,street:+4,congress:+3,press:+3,auth:-1}, wild:true,
      res:'The citation is written by somebody at the Pentagon who takes the assignment absolutely seriously. It is genuinely moving and impossible to accept gracefully.' }]},

{ id:'e-parade', title:'The Armour On The Avenue', who:C.gen, min:6, max:48, tags:['military','vanity'],
  src:'a military parade featuring armour on a capital-city avenue',
  text:'Tarrant has the engineering assessment. "Main battle tanks weigh seventy tonnes. The avenue is not ' +
       'rated for it and neither are the bridges." He turns the page. "We can do it. We will be repairing ' +
       'the road until October and the repair bill is larger than the parade."',
  choices:[
    { label:'Tanks. All of them. Down the avenue.', eff:{base:+9,street:-7,press:-7,congress:-6,courts:-4,cash:-0.4,auth:+9},
      res:'The photographs are extraordinary and travel further than anything else you do. Four allied embassies file reports about the symbolism, unprompted.' },
    { label:'Flyover only. No armour.', eff:{base:+5,street:-2,press:-2,cash:-0.2,auth:+5},
      res:'Aircraft are free, popular and leave no ruts. It is the same parade for a tenth of the money and none of the reporting.' },
    { label:'No parade. Put the money into veterans\' housing.', eff:{street:+10,press:+8,congress:+7,base:-8,cash:-0.3,auth:-2},
      res:'Eleven hundred units. The ribbon is cut by somebody else four years later and your name is not on the building.' },
    { label:'Drive one tank yourself.', eff:{base:+7,street:-5,press:-5,congress:-4,auth:+3}, wild:true,
      res:'You are given four hours of instruction by a sergeant who is visibly enjoying himself. You clip a lamppost. It is broadcast live.' }]},

/* ══════════════ FOREIGN POLICY BY INSTINCT ══════════════ */

{ id:'e-greenland-nasty', title:'"Absurd"', who:C.state, min:6, max:48, tags:['foreign','levity'],
  src:'a cancelled state visit after a foreign leader called a purchase proposal absurd',
  text:'You offered to buy their territory. Their prime minister used the word absurd, in English, on camera. ' +
       'Muriel has the diary. "The state visit is in eleven days, sir. Cancelling it over an adjective is ' +
       'an option. It is not a good one, but it is an option."',
  choices:[
    { label:'Cancel the visit. Call her nasty.', eff:{base:+6,press:-8,congress:-7,street:-6,courts:-3,auth:+5},
      res:'A four-hundred-year-old ally is publicly insulted over a word. Their parliament debates it and their tourism board reports record American bookings.' },
    { label:'Go anyway. Make a joke of it at the dinner.', eff:{press:+7,congress:+6,street:+5,base:-4,auth:+3},
      res:'You open with the word yourself and the room genuinely laughs. It is the best diplomatic evening of your term and nobody at home covers it.' },
    { label:'Drop the proposal entirely. Never mention it again.', eff:{press:+5,congress:+4,base:-3,auth:+1},
      res:'It disappears completely, which is what happens to every idea that nobody defends. Four aides are relieved and one is quietly disappointed.' },
    { label:'Offer to buy the prime minister instead.', eff:{base:+5,press:-6,congress:-5,street:-4,auth:+2}, wild:true,
      res:'Intended as a joke, transmitted as a cable, received as a proposal. Their foreign ministry\'s formal reply is a masterpiece of controlled bewilderment.' }]},

{ id:'e-fell-in-love', title:'"We Fell In Love"', who:C.state, min:8, max:48, tags:['foreign','press'],
  src:'unusually warm personal language about an authoritarian counterpart',
  text:'You have described your correspondence with a hereditary dictator using the phrase "we fell in love." ' +
       'Muriel has the transcript and the ally reaction file, which is thick. ' +
       '"Sir, four treaty partners have asked, separately, whether this represents a change in policy."',
  choices:[
    { label:'Repeat it. The letters were beautiful.', eff:{base:+6,press:-8,congress:-8,street:-6,courts:-4,auth:+6},
      res:'The letters are, by every account of them, competently flattering form letters written by a committee in a basement.' },
    { label:'Frame it as personal rapport serving national interest.', eff:{base:+3,press:-3,congress:-3,auth:+5},
      res:'The professional version of the same claim, which four foreign ministries can work with and none of them believe.' },
    { label:'Walk it back. Personal warmth is not policy.', eff:{press:+7,congress:+7,street:+5,base:-6,auth:-1},
      res:'The walk-back is reported once and the phrase is reported for a decade. This is the standard exchange rate and it never improves.' },
    { label:'Publish the letters in full.', eff:{base:+4,press:+6,congress:+3,street:+3,auth:-2}, wild:true,
      res:'They are duller than anybody imagined and reference a golf course twice. Publishing them ends the story instantly and disappoints everyone.' }]},

{ id:'e-riviera', title:'The Redevelopment', who:C.state, min:10, max:48, tags:['foreign','press'],
  src:'a proposal to take over and redevelop a war-damaged territory',
  text:'You have proposed that the United States take over a war-damaged territory and redevelop it as a resort. ' +
       'Muriel is holding the reaction cable and her hand is not steady. "Nine allied governments, sir. ' +
       'All nine. Two of them used the word \'displacement\' and one of them used a much older word."',
  choices:[
    { label:'Expand on it. Show the renderings.', eff:{base:+6,press:-11,street:-10,congress:-9,courts:-6,auth:+6},
      res:'An architectural visualisation of a beachfront development on a mass grave is shown at a press conference. It circulates for years as evidence of something.' },
    { label:'Reframe it as reconstruction funding.', eff:{base:+2,press:-3,congress:-3,street:-3,auth:+4},
      res:'A dull, defensible, entirely conventional aid proposal that four allies immediately co-sign. It is the same money and none of the outrage.' },
    { label:'Withdraw it. Say it was a thought, not a plan.', eff:{press:+7,congress:+6,street:+6,base:-5,auth:-1},
      res:'"A thought, not a plan" is an admission that a president said a thing without a plan, which is a smaller story than the alternative.' },
    { label:'Offer to redevelop it as a golf course instead.', eff:{base:+4,press:-9,street:-8,congress:-7,auth:+3}, wild:true,
      res:'Eighteen holes, championship specification, drawn up in four days by somebody who had no idea what the land had been.' }]},

{ id:'e-fifty-first', title:'"Governor"', who:C.state, min:8, max:48, tags:['foreign','levity'],
  src:'repeatedly calling a neighbouring head of government a governor and floating annexation',
  text:'You have addressed the neighbouring prime minister as "Governor" four times in public, and mused ' +
       'about economic force. Muriel: "Sir, their retail boycott of American goods is now at nine per cent ' +
       'of imports and rising, and it is entirely voluntary, which means nobody can negotiate it away."',
  choices:[
    { label:'Keep saying Governor. It clearly works.', eff:{base:+7,press:-7,congress:-7,street:-6,cash:-0.3,auth:+6},
      res:'Their domestic politics realigns around not being annexed. A party that was 14 points behind wins outright, campaigning almost exclusively on you.' },
    { label:'Stop. Call him Prime Minister and mean it.', eff:{press:+7,congress:+7,street:+5,base:-7,auth:-1},
      res:'The boycott decays over about two years. It never fully ends, because a shopping habit is harder to reverse than a tariff.' },
    { label:'Escalate to tariffs. Make the joke expensive.', eff:{base:+6,press:-8,congress:-9,street:-8,cash:-0.4,auth:+8},
      res:'Two integrated economies decouple by four per cent in a year. Four border towns on your side lose their principal employer.' },
    { label:'Formally invite them to apply for statehood.', eff:{base:+5,press:-6,congress:-6,street:-5,auth:+4}, wild:true,
      res:'A genuine application form is couriered to their embassy. It is completed, in full, as a joke, and returned. Nobody has ever established who did it.' }]},

/* ══════════════ THE VANITY FILE ══════════════ */

{ id:'e-currency', title:'The Portrait On The Note', who:C.treas, min:14, max:48, tags:['vanity','money'],
  src:'proposals to place a living president\'s likeness on currency',
  text:'Lyle has the Mint\'s response and is reading it like a man defusing something. "There is no statute ' +
       'prohibiting a living person on currency. There is a hundred-and-fifty-year practice, an internal ' +
       'guideline, and a very long silence when I asked."',
  choices:[
    { label:'The hundred. Do it.', eff:{base:+8,press:-9,congress:-8,street:-7,courts:-5,cash:-0.2,auth:+10},
      res:'Every transaction in the country now carries your face. Four countries whose currency does this are named in every single article about it.' },
    { label:'A commemorative coin. Limited mintage.', eff:{base:+5,press:-3,congress:-3,cash:+0.2,auth:+5},
      res:'It sells out in nine hours and trades at four times face value. It is legal, popular, and generates one paragraph of criticism.' },
    { label:'Neither. The currency is not for that.', eff:{press:+7,congress:+6,street:+5,courts:+4,base:-7,auth:-2},
      res:'Lyle exhales in a way you have not heard from him before. The guideline survives another administration, which is all a guideline ever does.' },
    { label:'Put your face on the one-cent piece only.', eff:{base:+4,press:-4,congress:-4,street:-3,auth:+3}, wild:true,
      res:'The smallest denomination, the one being discontinued. It is either extraordinary humility or a colossal misjudgement and nobody can agree which.' }]},

{ id:'e-arts-board', title:'The Board Meeting', who:C.cos, min:10, max:48, tags:['culture','vanity'],
  src:'the removal of a national arts institution\'s board and self-appointment as its chairman',
  text:'Deborah has the letters ready. "Board removed, new board seated, and you as chairman. It is within ' +
       'your appointment power." She pauses. "Sir, the resignations will start within an hour and two of them ' +
       'will be people whose work your own family are fans of."',
  choices:[
    { label:'Send them all. Chair the first meeting personally.', eff:{base:+7,press:-9,street:-9,congress:-6,courts:-5,auth:+10},
      res:'Four major artists withdraw from the season within a week. The building keeps its programme by hiring the people who could not afford to say no.' },
    { label:'Replace the board. Do not take the chair.', eff:{base:+4,press:-5,street:-4,congress:-3,auth:+7},
      res:'The same control without the photograph. Nobody resigns over a board they have not met and cannot name.' },
    { label:'Leave the board. Attend the opening night instead.', eff:{press:+7,street:+7,congress:+5,base:-6,auth:+1},
      res:'You sit through four hours of contemporary dance with visible fortitude. The artistic director tells four people it was the most surprising evening of her career.' },
    { label:'Chair it and programme the season yourself.', eff:{base:+5,press:-8,street:-8,congress:-5,auth:+4}, wild:true,
      res:'Your season is nine tribute acts, a magician and a symphony orchestra playing film scores. It outsells the previous season by 40%, which nobody will discuss.' }]},

{ id:'e-rename-water', title:'The Body Of Water', who:C.state, min:1, max:48, tags:['vanity','foreign'],
  src:'renaming an international body of water by executive order',
  text:'The order renames a body of water bordered by three countries. Muriel has the practical note. ' +
       '"We can rename it on our own charts, sir. We cannot rename it on anybody else\'s, and the international ' +
       'hydrographic body takes about eleven years to consider anything."',
  choices:[
    { label:'Sign it. Ours is the only chart that matters.', eff:{base:+8,press:-7,street:-5,congress:-5,courts:-4,auth:+9},
      res:'Two neighbouring countries decline. Every aviation chart on earth now carries both names, separated by a slash, which is a permanent monument to the argument.' },
    { label:'Sign it for domestic use. Do not press it abroad.', eff:{base:+5,press:-3,congress:-2,auth:+6},
      res:'Domestic charts change, foreign relations do not, and the whole thing costs $400,000 in reprinting.' },
    { label:'Do not sign it. It has a name.', eff:{press:+6,street:+5,congress:+4,base:-7,auth:-2},
      res:'Nothing happens, which is the correct outcome for a proposal to rename a sea and is reported nowhere.' },
    { label:'Rename it after yourself.', eff:{base:+6,press:-9,street:-7,congress:-6,courts:-4,auth:+5}, wild:true,
      res:'Four cartographers refuse in writing. One does it, is subsequently unable to find work, and the chart is a collector\'s item within a decade.' }]},

{ id:'e-wire-ban', title:'The Style Guide', who:C.press, min:4, max:48, tags:['press','vanity'],
  src:'barring a wire service from official spaces over its refusal to adopt a new name',
  text:'The wire service is still using the old name for the water, because that is what its style guide says, ' +
       'and its style guide is used by four thousand newsrooms. Kaylee: "We can bar them from the room, sir. ' +
       'We cannot bar them from the style guide, and the style guide is the actual battlefield."',
  choices:[
    { label:'Bar them. From everything. Today.', eff:{base:+7,press:-13,courts:-9,congress:-7,street:-6,auth:+11},
      res:'They sue, win, partially lose on appeal, and never change the style guide. You have spent eleven months to move a word in one building.' },
    { label:'Bar them from the small room only. Keep the big events.', eff:{base:+4,press:-6,courts:-4,congress:-3,auth:+7},
      res:'Enough to make the point, not enough to make a case. Their lawyers advise against suing over a seating arrangement.' },
    { label:'Let it go. It is a style guide.', eff:{press:+9,courts:+7,congress:+5,street:+4,base:-8,auth:-2},
      res:'The old name remains the standard everywhere on earth. It would have anyway, and you have saved a court case and a year.' },
    { label:'Publish a federal style guide and mandate it.', eff:{base:+5,press:-9,courts:-7,congress:-5,auth:+5}, wild:true,
      res:'Four hundred pages, issued to every agency. It contains eleven rules about your name and one about the Oxford comma, which is the part that causes a genuine revolt.' }]},

/* ══════════════ THE PODIUM ══════════════ */

{ id:'e-complicated', title:'"Nobody Knew"', who:C.health, min:1, max:48, tags:['gaffe','press','levity'],
  src:'expressing public surprise at the complexity of healthcare policy',
  text:'You have said, on camera, that nobody knew health care could be so complicated. ' +
       'Dr Pike is holding a stack of paper. "Sir, this is one state\'s waiver application. It is eleven hundred ' +
       'pages. Everybody knew. It is, in a real sense, the only thing anybody has known for thirty years."',
  choices:[
    { label:'Stand by it. Nobody told me it was this bad.', eff:{base:+4,press:-6,congress:-6,street:-4,auth:+2},
      res:'A president admitting he did not know the central domestic policy question is complicated. It is quoted, forever, by both parties, for different reasons.' },
    { label:'"I meant nobody had explained it honestly." Pivot.', eff:{base:+5,press:-2,street:+3,auth:+3},
      res:'A rescue that is both nimble and roughly true. Pike, who has explained it honestly for twenty years, says nothing at all.' },
    { label:'Sit down with Pike for four hours and actually learn it.', eff:{press:+6,congress:+7,street:+6,base:-4,auth:+2},
      res:'You emerge able to explain risk pools without notes. It is the single most useful afternoon of the presidency and nobody ever reports it.' },
    { label:'Declare healthcare simple by executive order.', eff:{base:+4,press:-5,congress:-4,street:-4,courts:-3,auth:+3}, wild:true,
      res:'The order runs to sixty-one pages of definitions establishing what simplicity means. The irony is noted by every single person who reads it.' }]},

{ id:'e-light', title:'The Other Thing At The Briefing', who:C.health, min:6, max:48, tags:['press','gaffe'],
  src:'a briefing-room musing about introducing powerful light inside the body',
  text:'It was not only the first remark. In the same briefing you asked whether a very powerful light could be ' +
       'brought inside the body. Dr Pike is here with a one-page note. "Sir, four hospitals have had calls. ' +
       'Not many. But four."',
  choices:[
    { label:'Say you were being sarcastic.', eff:{base:+4,press:-7,street:-6,congress:-4,auth:+2},
      res:'The transcript does not read as sarcasm and neither does the video. The claim becomes a separate, smaller, longer-running story than the remark.' },
    { label:'Let Pike issue clear guidance. Say nothing yourself.', eff:{press:+7,street:+7,congress:+5,base:-5,auth:+1},
      res:'A one-page clinical note, distributed to every emergency department in the country, in under six hours. The calls stop.' },
    { label:'Stop doing the briefings.', eff:{base:-4,press:+5,street:+4,congress:+3,auth:-1},
      res:'The briefings were worth four points a week to you and cost about the same. Ending them is a wash that nobody on either side wanted.' },
    { label:'Have the light idea properly researched.', eff:{base:+3,press:+3,street:+2,cash:-0.1,auth:+1}, wild:true,
      res:'A genuine literature review is commissioned. It comes back describing four real intravascular therapies and concluding, politely, that this is not one of them.' }]},

{ id:'e-testing', title:'Slow The Testing', who:C.health, min:8, max:48, tags:['press','street'],
  src:'suggesting reduced testing in order to record fewer cases',
  text:'You have said that when you test to that extent, you find more cases, and that you had therefore asked ' +
       'for the testing to be slowed. Dr Pike is very still. "Sir, was that a joke? Because I have four state ' +
       'health directors asking me and I do not know what to tell them."',
  choices:[
    { label:'It was not a joke. Slow the testing.', eff:{base:+5,street:-13,press:-11,congress:-9,courts:-5,auth:+4},
      res:'Testing does not slow, because it is run by states and hospitals. The sentence outlives the policy by about a decade.' },
    { label:'"I was being sarcastic." Leave it there.', eff:{base:+3,street:-5,press:-5,congress:-3,auth:+2},
      res:'Four of your own officials say publicly that you were not, within a day, because they had already received the instruction.' },
    { label:'Double the testing and announce the number daily.', eff:{street:+10,press:+9,congress:+7,base:-8,cash:-0.3,auth:+1},
      res:'The case numbers rise sharply because you are finding them. Pike calls it the bravest political decision he has seen and it costs you nine points.' },
    { label:'Test only people likely to be negative.', eff:{base:+3,street:-9,press:-8,congress:-6,auth:+3}, wild:true,
      res:'The proposal is written down by somebody in good faith and circulated as a draft protocol before being caught. The draft survives in an archive.' }]},

/* ══════════════ THE MOVEMENT ══════════════ */

{ id:'e-send-her-back', title:'The Chant', who:C.cos, min:8, max:48, tags:['street','rhetoric'],
  src:'a rally crowd chant following remarks about a member of Congress',
  text:'The crowd has started a chant about a sitting congresswoman and it is three words long. ' +
       'You have stopped speaking. Deborah, in your earpiece: "Thirteen seconds so far, sir. Whatever you do ' +
       'in the next five is the thing that gets played."',
  choices:[
    { label:'Wait. Let it run. Then continue.', eff:{base:+8,street:-12,press:-9,congress:-10,courts:-5,auth:+6},
      res:'Thirteen seconds of silence, broadcast live. Four of your own members disown it by name and you spend a week explaining a pause.' },
    { label:'Cut it off. "We don\'t do that."', eff:{street:+10,press:+9,congress:+9,base:-11,auth:-2},
      res:'The crowd stops instantly, which reveals that it would have stopped instantly at any point in the preceding thirteen seconds.' },
    { label:'Talk over it. Change the subject mid-sentence.', eff:{base:+3,street:-4,press:-3,congress:-3,auth:+3},
      res:'No confrontation and no endorsement. It is the coward\'s option and it is, by a distance, the most effective one available.' },
    { label:'Start a different chant. Immediately. Any chant.', eff:{base:+5,street:-4,press:-3,congress:-3,auth:+2}, wild:true,
      res:'You begin chanting about infrastructure. The crowd follows, bewildered but loyal, and thirty thousand people spend ninety seconds shouting about bridges.' }]},

{ id:'e-stand-by', title:'The Debate Answer', who:C.press, min:12, max:48, tags:['street','press'],
  src:'an equivocal debate answer when asked to condemn an armed group',
  text:'Asked to condemn them, you told them to stand back and stand by. Kaylee has the aftermath. ' +
       '"They have printed it on merchandise, sir. Within the hour. They are treating it as an instruction ' +
       'and, in fairness to them, it is grammatically an instruction."',
  choices:[
    { label:'Refuse to clarify. Let them read it how they like.', eff:{base:+7,street:-13,press:-10,congress:-9,courts:-6,auth:+7},
      res:'An armed group believes it has been given standby orders by a president. Nothing about that arrangement improves over the following months.' },
    { label:'Condemn them by name the next morning.', eff:{street:+10,press:+9,congress:+8,courts:+5,base:-9,auth:-2},
      res:'By name, unprompted, in one sentence. The merchandise stops selling and four organisers say publicly that they feel abandoned, which is the objective.' },
    { label:'Condemn "all extremism" without naming anybody.', eff:{base:+3,street:-5,press:-4,congress:-4,auth:+3},
      res:'A condemnation that names nobody is heard by everybody as a condemnation of nobody, which is exactly what it is.' },
    { label:'Order them to stand *forward*, to test the theory.', eff:{base:+4,street:-11,press:-9,congress:-8,auth:+4}, wild:true,
      res:'The clarification is worse than the original in every measurable respect. Four hundred people take it entirely literally within a day.' }]},

{ id:'e-hostages', title:'The Word For Them', who:C.lawyer, min:16, max:48, tags:['justice','rhetoric'],
  src:'characterising convicted rioters as hostages and political prisoners',
  text:'You have begun calling the convicted rioters hostages. Sy: "Sir, four of them pleaded guilty. ' +
       'In open court. With counsel. A guilty plea is a thing a hostage cannot enter, and the transcripts ' +
       'are public documents."',
  choices:[
    { label:'Keep saying it. Play their calls at rallies.', eff:{base:+9,courts:-11,congress:-9,press:-9,street:-9,auth:+8},
      res:'A recording of convicted prisoners singing is played before you walk on stage. It happens at forty rallies and it never stops being extraordinary.' },
    { label:'Say the sentences were disproportionate instead.', eff:{base:+5,courts:-4,congress:-3,press:-3,auth:+6},
      res:'A sentencing argument is an argument. Four of the sentences genuinely were long, and saying only that would have won you the point.' },
    { label:'Stop using the word.', eff:{courts:+9,congress:+7,press:+7,street:+7,base:-10,auth:-2},
      res:'Your movement notices within a day and reads it as the beginning of a betrayal, which in their terms it is.' },
    { label:'Offer to exchange them for actual hostages.', eff:{base:+4,courts:-8,congress:-7,press:-7,street:-6,auth:+4}, wild:true,
      res:'The proposal is transmitted to a foreign ministry that had not been expecting it. Their reply asks, sincerely, for clarification of the terms.' }]},

/* ══════════════ THE OFFICE ══════════════ */

{ id:'e-acting', title:'Acting', who:C.cos, min:8, max:48, tags:['agencies','congress'],
  src:'prolonged reliance on acting officials rather than confirmed appointees',
  text:'Deborah has the org chart, and most of it is in italics. "Eleven department heads are acting. ' +
       'Four have been acting for over a year. An acting official serves entirely at your pleasure and can be ' +
       'replaced by lunchtime, which is why you like it and why the statute has a time limit you are past."',
  choices:[
    { label:'Keep them all acting. Indefinitely.', eff:{base:+5,congress:-11,courts:-8,press:-6,auth:+12},
      res:'A government of people who can be removed instantly. Everything runs slightly worse and nothing is ever refused, which was the trade.' },
    { label:'Nominate the four who would be confirmed.', eff:{congress:+9,courts:+6,press:+5,base:-6,auth:+3},
      res:'Four confirmed secretaries with independent standing, who each say no to you once in the following year. All four times you were wrong.' },
    { label:'Nominate everybody. Take the losses.', eff:{congress:+11,courts:+8,press:+7,base:-8,auth:-2},
      res:'Seven confirmed, four rejected. The rejections are humiliating and the confirmations are permanent, and permanence is what you had been renting.' },
    { label:'Appoint one person to act in all eleven roles.', eff:{base:+3,congress:-8,courts:-6,press:-5,auth:+6}, wild:true,
      res:'It is lawful, briefly. She holds eleven cabinet portfolios for nine days and afterwards writes a book that is very hard to argue with.' }]},

{ id:'e-loyalty-lunch', title:'The Lunch', who:C.fbi, min:6, max:48, tags:['justice','power'],
  src:'a private request for a personal assurance of loyalty from a law-enforcement official',
  text:'It is dinner and it is the two of you. Director Quist has already noticed there are two places set ' +
       'in a room that seats forty. You are about to use a word that Bo has told you, twice, in writing, ' +
       'not to use.',
  choices:[
    { label:'"I need loyalty. I expect loyalty."', eff:{base:+5,courts:-12,congress:-10,press:-6,auth:+9},
      res:'She offers you honesty instead, and the exchange is written down in a car park within the hour and dated. It is read aloud to a committee within a year.' },
    { label:'Ask for independence, and mean it.', eff:{courts:+11,congress:+9,press:+7,base:-6,auth:-1},
      res:'She says so publicly a month later, unprompted, in testimony. It is the single most valuable sentence anybody says about you all term.' },
    { label:'Talk about the food. Ask nothing at all.', eff:{courts:+7,congress:+5,press:+4,base:-3,auth:+3},
      res:'Ninety minutes on the wine list. She leaves confused and writes nothing down, which is the only outcome that helps you.' },
    { label:'Ask her to pass the loyalty.', eff:{base:+3,courts:-5,congress:-4,press:-4,auth:+3}, wild:true,
      res:'A joke, delivered badly, at the exact moment she had decided the evening was harmless. She writes it down anyway, verbatim, with a question mark.' }]},

{ id:'e-witch-hunt', title:'The Phrase', who:C.press, min:10, max:48, tags:['justice','press'],
  src:'sustained public delegitimisation of a special counsel inquiry',
  text:'Kaylee has been counting again. "Four hundred and eleven uses of the same two words in eighteen months. ' +
       'It is now more strongly associated with you than with the seventeenth century." She hesitates. ' +
       '"Sir, the investigation is going to report, and the phrase is what people will have instead of the report."',
  choices:[
    { label:'Say it four hundred more times.', eff:{base:+8,courts:-9,congress:-8,press:-8,street:-5,auth:+8},
      res:'It works completely. The report lands and 61% of the country has already filed it under a phrase they heard before they heard anything else.' },
    { label:'Stop saying it. Attack the findings instead.', eff:{courts:+6,congress:+5,press:+5,base:-6,auth:+3},
      res:'Arguing with a document is harder than dismissing one, and considerably more effective with the four per cent who decide elections.' },
    { label:'Cooperate fully and say nothing at all.', eff:{courts:+11,congress:+9,press:+9,base:-10,auth:-4},
      res:'It reports on time, finds less than either side wanted, and is read by nobody, which is what happens to documents nobody has been told to care about.' },
    { label:'Trademark the phrase.', eff:{base:+5,press:-4,courts:-4,congress:-3,cash:+0.2,auth:+2}, wild:true,
      res:'The application is filed in earnest and is refused on the ground that the term is in common descriptive use, largely because of you.' }]},

/* ══════════════ MONEY, ORDINARY ══════════════ */

{ id:'e-hotel-booking', title:'The Delegation Booking', who:C.ethics, min:4, max:48, tags:['money','foreign'],
  src:'foreign delegations booking at a president-owned property',
  text:'Miriam has the reservations. "Four foreign delegations, all at your hotel, all in the fortnight before ' +
       'their trade meetings." She sets them down. "None of them were asked to. That is the point I keep ' +
       'failing to make: nobody had to ask."',
  choices:[
    { label:'Take the bookings. It is a hotel.', eff:{base:+3,press:-8,courts:-7,congress:-7,cash:+0.5,auth:+7},
      res:'A payment from a foreign state to the President, at a published rate, for a real room. It is the cleanest possible version of the oldest possible problem.' },
    { label:'Take them. Pay the profits to the Treasury.', eff:{press:+6,courts:+5,congress:+5,base:-3,cash:-0.1,auth:+3},
      res:'A voluntary calculation, published annually, of what you think the profit was. It is unverifiable and it removes 90% of the criticism.' },
    { label:'Instruct the hotel to decline foreign-state bookings.', eff:{press:+9,courts:+8,congress:+8,street:+4,base:-4,cash:-0.4,auth:-1},
      res:'The instruction is written down and followed. It costs about $12 million a year and it is the only thing on this list that actually solves anything.' },
    { label:'Charge them quadruple and call it a tariff.', eff:{base:+5,press:-7,courts:-6,congress:-6,cash:+0.4,auth:+4}, wild:true,
      res:'Two delegations pay it without complaint, which is the most alarming outcome available and is noted by four intelligence services.' }]},

{ id:'e-jet', title:'The Aircraft', who:C.gen, min:12, max:48, tags:['foreign','money'],
  src:'a gifted foreign aircraft proposed for use as the presidential transport',
  text:'A foreign government has offered an aircraft. Tarrant has the security assessment and is being very ' +
       'careful. "Stripping and rebuilding it to our standard takes four years and costs more than a new one. ' +
       'And sir, the framing is contested. They say it was offered. Somebody on our side asked first."',
  choices:[
    { label:'Accept it. Call it an unsolicited gift.', eff:{base:+4,press:-11,courts:-10,congress:-11,street:-6,cash:+0.4,auth:+8},
      res:'The record of who approached whom surfaces within a fortnight, because it always does, and the word "unsolicited" becomes the story rather than the aircraft.' },
    { label:'Accept it into the Air Force. Not personally.', eff:{base:+3,press:-6,courts:-5,congress:-6,auth:+6},
      res:'A state gift to the state, transferred properly, and later to a museum. It is the boring answer and it survives every committee.' },
    { label:'Decline it. Buy one.', eff:{press:+9,courts:+9,congress:+9,street:+4,base:-4,cash:-0.5,auth:-1},
      res:'It costs four billion dollars and takes six years and there is nothing whatsoever to write about. Tarrant calls it money well spent.' },
    { label:'Accept it and fly it to the museum yourself.', eff:{base:+5,press:-5,congress:-5,courts:-4,auth:+3}, wild:true,
      res:'You are not rated on the type. You sit in the left seat on the ground for a photograph and the caption is written by somebody who checked.' }]},

/* ══════════════ THE ORDINARY WEATHER ══════════════ */

{ id:'e-poll-numbers', title:'The Crosstabs', who:C.poll, min:6, max:48, tags:['press','levity'],
  src:'polling weakness reported alongside claims of unprecedented popularity',
  text:'Nadia has the real numbers and the ones you have been quoting. They differ by nineteen points. ' +
       '"The one you use is an online opt-in poll of your own supporters, sir. I know who commissioned it ' +
       'because they asked me to design it and I said no."',
  choices:[
    { label:'Keep quoting the good one. It exists.', eff:{base:+6,press:-6,congress:-5,street:-4,auth:+4},
      res:'It does exist, which makes it unfalsifiable rather than untrue, and unfalsifiable is worth considerably more.' },
    { label:'Quote the real one. Say you have work to do.', eff:{press:+7,congress:+6,street:+5,base:-7,auth:-1},
      res:'Candour about a bad number buys you four points over a quarter, which is more than the fake number ever bought you.' },
    { label:'Stop quoting numbers entirely.', eff:{base:+2,press:+4,congress:+3,auth:+2},
      res:'Nadia describes this as the single healthiest decision of the term. It lasts eleven days.' },
    { label:'Commission a poll on whether polls are accurate.', eff:{base:+4,press:-3,street:-2,cash:-0.1,auth:+1}, wild:true,
      res:'Sixty-one per cent say no. You cite this as evidence that the polls showing you behind are wrong, which is a use of the finding Nadia had not anticipated.' }]},

{ id:'e-rally-length', title:'The Ninety-Minute Mark', who:C.sched, min:8, max:48, tags:['levity','street'],
  src:'extended rally speeches running well past their scheduled length',
  text:'You are ninety-four minutes into a forty-minute slot. Boyd Hackler is in the wings making a gesture ' +
       'you have decided means "keep going." The arena has to be cleared for an ice hockey game and there are ' +
       'four thousand people outside in the cold holding tickets for it.',
  choices:[
    { label:'Another forty minutes. They came for this.', eff:{base:+8,street:-5,press:-4,congress:-3,auth:+4},
      res:'The hockey game starts ninety minutes late. Its fans are interviewed on the way in and they are extremely clear about their views.' },
    { label:'Wrap in five. Big finish.', eff:{base:+4,street:+3,press:+2,auth:+3},
      res:'A tight, punchy close that plays better on television than any of the preceding ninety-four minutes. Boyd notes the timing and is ignored.' },
    { label:'Stop now and stay to shake hands instead.', eff:{base:+6,street:+6,press:+4,auth:+2},
      res:'Two hours of handshakes with four thousand people. It is worth more than the speech and no camera stays for it.' },
    { label:'Stay on stage and watch the hockey.', eff:{base:+7,street:+7,press:+5,auth:-1}, wild:true,
      res:'You sit at the side of the rink in a folding chair for three periods. It is the most popular thing you do all year by a distance of miles.' }]},

{ id:'e-golf-count', title:'The Ledger Of Afternoons', who:C.press, min:10, max:48, tags:['levity','press'],
  src:'a running public tally of presidential time spent at leisure properties',
  text:'Somebody maintains a website counting your afternoons at your own courses. Kaylee has the figure. ' +
       '"Two hundred and eighty-one days, sir, and the site is now cited by wire services as a source, ' +
       'which means it has become a fact rather than a hobby."',
  choices:[
    { label:'Go more. Announce each one.', eff:{base:+5,press:-6,congress:-5,street:-5,auth:+3},
      res:'Owning it removes the gotcha and replaces it with a number that simply keeps rising in public, which turns out to be worse.' },
    { label:'Go, but stop billing the government for the detail.', eff:{press:+6,congress:+5,street:+4,base:-2,cash:-0.2,auth:+2},
      res:'The cost was always the actual story. Removing it leaves a man playing golf, which is not a story anywhere on earth.' },
    { label:'Cut back. Work weekends for a quarter.', eff:{press:+7,congress:+6,street:+6,base:-5,auth:+3},
      res:'Three months of visible work. It moves your approval four points and you are unbearable to everybody in the building for the whole quarter.' },
    { label:'Hold Cabinet meetings on the course.', eff:{base:+5,press:-5,congress:-6,street:-4,auth:+3}, wild:true,
      res:'Eleven secretaries in a fleet of buggies, taking minutes. Two genuinely useful decisions are made and nobody can find the notes afterwards.' }]},

{ id:'e-enemy-phrase', title:'Enemies Of The People', who:C.hist, min:10, max:48, tags:['press','rhetoric'],
  src:'describing the news media as enemies of the American people',
  text:'Dr Weir has asked for five minutes about a phrase. "Mr President, I am not here to tell you not to ' +
       'attack the press. I am here to tell you where that specific construction comes from, because I do not ' +
       'think anybody has, and it is not from anywhere you would want."',
  choices:[
    { label:'Keep it. It lands and I know where it comes from.', eff:{base:+8,press:-12,street:-8,congress:-7,courts:-5,auth:+8},
      res:'Four historians write the same column. Her point was never that it would fail; it was that it would work, and she says so on the way out.' },
    { label:'Switch to "fake news". Same fight, no lineage.', eff:{base:+6,press:-6,street:-3,congress:-3,auth:+6},
      res:'Identical effect, no footnote, no historians. It is the single most efficient edit anybody makes to your vocabulary in four years.' },
    { label:'Drop the phrase and the fight.', eff:{press:+10,street:+7,congress:+6,courts:+5,base:-9,auth:-3},
      res:'Coverage does not improve. It was never going to. The fight was the thing that was working and you have stopped doing it.' },
    { label:'Ask her which regimes used it and take notes.', eff:{base:+4,press:-7,street:-6,congress:-5,auth:+5}, wild:true,
      res:'She answers in full, with dates, for twenty minutes. You take four pages of notes. She spends the rest of her life wondering what for.' }]},

{ id:'e-vermin', title:'The Draft With The Animal In It', who:C.writer, min:14, max:48, tags:['rhetoric','street'],
  src:'dehumanising rhetoric describing political opponents in animal terms',
  text:'Gideon Poe has flagged a noun in tomorrow\'s draft. "It is a word for an animal, applied to citizens, ' +
       'in a sentence about living among us." He does not look up. "Sir, I did not write it. I have been ' +
       'trying to find out who did and I cannot, which is its own answer."',
  choices:[
    { label:'Keep it. Deliver it exactly as written.', eff:{base:+9,street:-13,press:-9,congress:-9,courts:-6,auth:+8},
      res:'Historians respond within the hour, in numbers, with the same three regimes. It is the single most-cited sentence of your presidency and never favourably.' },
    { label:'Change the noun. Keep the sentence.', eff:{base:+6,street:-5,press:-4,congress:-4,auth:+6},
      res:'Same crowd reaction, no archive footage, no columns. Gideon calls it the cheapest edit he has ever made and means it.' },
    { label:'Cut the whole passage.', eff:{street:+9,press:+8,congress:+7,courts:+5,base:-8,auth:+1},
      res:'The speech is four minutes shorter and considerably better. Nobody notices an absence, which is the permanent tragedy of good editing.' },
    { label:'Deliver it, but about your own party.', eff:{base:-9,street:+6,press:+7,congress:+5,auth:-2}, wild:true,
      res:'The room does not know what to do. Two people applaud. It is the most genuinely unsettling ninety seconds of the entire term.' }]},

/* ══════════════ SMALL WEATHER ══════════════ */

{ id:'e-tylenol', title:'The Advice From The Podium', who:C.health, min:14, max:48, tags:['press','street'],
  src:'medical claims from the podium contradicting scientific consensus',
  text:'You linked a common painkiller to a developmental condition and suggested spacing out childhood ' +
       'immunisations. Dr Pike arrived without being called. "Sir, four large studies say otherwise and ' +
       'I can have them on your desk in an hour. The paediatric associations are already drafting."',
  choices:[
    { label:'Repeat it. Louder. People deserve to hear it.', eff:{base:+6,street:-12,press:-11,congress:-8,courts:-5,auth:+5},
      res:'Immunisation appointments fall nine per cent in a quarter in four states. The number is published, attributed, and does not move back.' },
    { label:'"I am not a doctor. Talk to yours." Move on.', eff:{street:+7,press:+6,congress:+5,base:-4,auth:+2},
      res:'Six words that undo most of it. Pike says afterwards that it was the correct answer and that he had not expected to hear it.' },
    { label:'Have Pike hold the briefing instead, from now on.', eff:{street:+9,press:+9,congress:+7,base:-6,auth:-1},
      res:'A boring man reading evidence, twice a week, for a year. Nothing goes wrong for twelve months and nobody thanks anybody.' },
    { label:'Take the painkiller on camera to prove it is fine.', eff:{base:+4,street:-6,press:-6,congress:-4,auth:+2}, wild:true,
      res:'You take two, on live television, having just said they were dangerous. Nobody in the room can construct a question about it.' }]},

{ id:'e-blago', title:'The Very Fine Person', who:C.lawyer, min:16, max:48, tags:['justice','levity'],
  src:'clemency for a governor convicted of attempting to sell a public appointment, described afterwards in warm terms',
  text:'You have commuted the sentence of a governor convicted of trying to sell a seat, and described him ' +
       'afterwards as a very fine person. Sy: "He was convicted by a jury of selling a public office. ' +
       'Sir, that is the offence. That is the actual thing that he did."',
  choices:[
    { label:'Say it again. He was treated unfairly.', eff:{base:+5,courts:-9,congress:-8,press:-7,street:-6,auth:+7},
      res:'The next four people seeking clemency retain the same lawyer he used, which is a market signal and is reported as one.' },
    { label:'Commute quietly. Say nothing about the man.', eff:{base:+3,courts:-4,congress:-4,press:-3,auth:+6},
      res:'A commutation with no adjective attached is a routine act of clemency. The adjective was always the entire story.' },
    { label:'Withdraw it. It was the wrong case.', eff:{courts:+8,congress:+7,press:+7,street:+5,base:-7,auth:-3},
      res:'A clemency grant cannot be withdrawn once delivered. Sy explains this and you spend four minutes not believing him.' },
    { label:'Appoint him to something.', eff:{base:+4,courts:-10,congress:-9,press:-8,street:-6,auth:+5}, wild:true,
      res:'A federal advisory board on public integrity. The appointment is real, is announced on a Friday, and lasts eleven days.' }]},

{ id:'e-antifa', title:'The Designation', who:C.home, min:18, max:48, tags:['street','justice'],
  src:'the executive designation of a decentralised political tendency as a terrorist organisation',
  text:'Duane has the order and one difficulty. "It designates an organisation. Sir, it is not an organisation. ' +
       'There is no membership, no leadership, no bank account and nothing to serve process on. The Bureau ' +
       'has asked, in writing, who they are supposed to arrest."',
  choices:[
    { label:'Sign it. Let the Bureau work out the details.', eff:{base:+8,street:-12,courts:-10,press:-8,congress:-7,auth:+11},
      res:'With no organisation to charge, the designation is applied to individuals by inference from their opinions, which was always the only way it could work.' },
    { label:'Designate four specific groups that actually exist.', eff:{base:+5,street:-6,courts:-5,press:-4,auth:+9},
      res:'Named entities with bank accounts and officers, prosecutable under existing law. Four convictions follow within two years and none are overturned.' },
    { label:'Do not sign it. Use the statutes we have.', eff:{street:+9,courts:+9,press:+7,congress:+6,base:-9,auth:-2},
      res:'The existing statutes work, because political violence has been illegal for two hundred years and the gap was never legal.' },
    { label:'Designate yourself, to test the standard.', eff:{base:+3,street:-6,courts:-7,press:-5,auth:+4}, wild:true,
      res:'The paperwork is prepared as a demonstration and, catastrophically, filed. You are on a list for nine days before anybody notices.' }]},

{ id:'e-shithole-confirm', title:'Eight Years Later', who:C.press, min:20, max:48, tags:['press','rhetoric'],
  src:'a president confirming, years afterwards, a disparaging phrase he had once denied using',
  text:'Eight years ago you denied a word. This morning, unprompted, in an interview about something else, ' +
       'you used it again and confirmed the original. Kaylee has both clips queued and is not playing them. ' +
       '"Sir, you have just corroborated the reporting you spent a year calling fabricated."',
  choices:[
    { label:'Say you always said it and were right to.', eff:{base:+7,street:-11,press:-8,congress:-9,courts:-4,auth:+6},
      res:'The two clips run side by side for a fortnight. The reporters who were called liars for a year are, by the end of it, unusually gracious about it.' },
    { label:'Say the denial was about the exact wording.', eff:{base:+3,press:-5,congress:-4,street:-4,auth:+3},
      res:'It is technically what the original denial said. Technically-what-it-said is a defence that has never once worked and does not now.' },
    { label:'Apologise to the reporters by name.', eff:{press:+11,congress:+8,street:+8,courts:+5,base:-11,auth:-4},
      res:'Four names, out loud, unprompted. Your movement treats it as a defection and two of the four reporters say publicly that it changed nothing and mattered anyway.' },
    { label:'Claim you were quoting somebody else in the room.', eff:{base:+3,press:-7,congress:-6,street:-5,auth:+3}, wild:true,
      res:'Every other person in that room is still alive and four of them are asked within the hour. All four decline in the same careful sentence.' }]},

{ id:'e-invasion-word', title:'The Noun For Arrivals', who:C.writer, min:8, max:48, tags:['rhetoric','street'],
  src:'describing migration as an invasion in the weeks before an election',
  text:'Gideon has the frequency chart. "The word appears in every speech for six weeks and only in the six ' +
       'weeks before a vote. Sir, that is not a description, it is a schedule, and somebody is going to publish ' +
       'this chart."',
  choices:[
    { label:'Use it more. It works because it is true.', eff:{base:+8,street:-11,press:-8,congress:-7,courts:-5,auth:+7},
      res:'The chart is published. The correlation with the electoral calendar is exact, which is worse than any individual use of the word.' },
    { label:'Use it, but keep using it after the election.', eff:{base:+6,street:-8,press:-6,congress:-5,auth:+6},
      res:'Consistency removes the cynicism charge entirely and costs you nothing, because the word does the same work in March as in October.' },
    { label:'Drop it. Argue about wages and housing instead.', eff:{street:+8,press:+7,congress:+6,courts:+4,base:-8,auth:+1},
      res:'An economic argument that is arguable, defensible and dull. It persuades four hundred thousand more people and thrills nobody.' },
    { label:'Apply the word to something else entirely.', eff:{base:+4,street:-4,press:-3,congress:-3,auth:+3}, wild:true,
      res:'You describe a pollen season as an invasion, twice, with total conviction. Four allergy charities issue statements and one of them thanks you.' }]},

{ id:'e-lee', title:'The General On The Plinth', who:C.hist, min:14, max:48, tags:['culture','street'],
  src:'defending a Confederate general as a military figure years after a violent rally',
  text:'You have called him a great general. Dr Weir does not disagree with the military assessment and says so. ' +
       '"He was a capable commander, Mr President. He was a capable commander of an army raised to keep people ' +
       'as property, and the statue was put up sixty years after he died, by people making a point about ' +
       'something that was happening then."',
  choices:[
    { label:'Order the statues protected. All of them.', eff:{base:+8,street:-12,press:-9,congress:-8,courts:-6,auth:+9},
      res:'Federal protection for monuments erected as political statements, defended as history. Four historians are asked to comment and all four give the same date.' },
    { label:'Leave it to localities. Say nothing more.', eff:{street:+7,press:+6,congress:+5,base:-6,auth:+1},
      res:'Forty-one localities decide forty-one different things over four years and none of them become national news.' },
    { label:'Praise the soldier, support the removal.', eff:{street:+6,press:+7,congress:+6,courts:+4,base:-9,auth:-1},
      res:'A distinction that four historians consider intellectually honest and that your base considers a straightforward betrayal.' },
    { label:'Replace them all with statues of yourself.', eff:{base:+6,street:-8,press:-8,congress:-6,courts:-5,cash:-0.4,auth:+5}, wild:true,
      res:'Eleven plinths are refitted. Four of the new statues are removed within a decade by the same process, using the same arguments, which nobody finds funny at the time.' }]},

{ id:'e-crowd-again', title:'The Aerial, Again', who:C.press, min:16, max:48, tags:['vanity','press'],
  src:'recurring disputes over event attendance figures',
  text:'A different event, a different aerial photograph, the same argument. Kaylee has both years side by side. ' +
       '"Sir, you have now had this fight four times. Nobody has ever won it. The photograph is taken from ' +
       'a satellite and the satellite does not have a view."',
  choices:[
    { label:'Fight it. Again. Order corrected figures.', eff:{base:+6,press:-8,courts:-5,street:-5,congress:-4,auth:+5},
      res:'A career archivist is reassigned for the second time in four years, to the same windowless building, and the number is again official.' },
    { label:'"Crowds are a media obsession." Next question.', eff:{base:-3,press:+6,street:+4,congress:+3,auth:+1},
      res:'The story dies in forty minutes. Something in you dies with it and Kaylee makes a note to use that line again.' },
    { label:'Release your own drone footage. Let people count.', eff:{base:+3,press:+5,street:+4,auth:+2},
      res:'The footage shows a large, real, enthusiastic crowd of about a third the claimed size. Publishing it is the best available version of losing.' },
    { label:'Hold the next rally somewhere with no aerial access.', eff:{base:+5,press:-4,street:-3,auth:+3}, wild:true,
      res:'An indoor arena with a hard capacity of nine thousand, which you then announce was attended by eighty thousand people.' }]},

{ id:'e-cabinet-italics', title:'The Resignation Letter', who:C.cos, min:12, max:48, tags:['agencies','press'],
  src:'high-profile resignations in protest at institutional takeovers',
  text:'Two board members have resigned and published their letters. Deborah has both. "They are polite, ' +
       'specific, and four paragraphs long. Neither of them mentions you by name once, sir, which is the ' +
       'thing that will make them travel."',
  choices:[
    { label:'Attack both of them personally.', eff:{base:+6,press:-9,street:-8,congress:-6,courts:-4,auth:+5},
      res:'Naming people who declined to name you inverts the whole exchange. Their letters are read aloud on four programmes and yours is read on none.' },
    { label:'Accept the resignations without comment.', eff:{press:+6,street:+5,congress:+4,base:-3,auth:+3},
      res:'A resignation nobody responds to is a resignation. A resignation somebody responds to is a controversy, and you have declined to supply the second half.' },
    { label:'Ask them to stay. Personally. By telephone.', eff:{press:+8,street:+7,congress:+6,courts:+4,base:-7,auth:+1},
      res:'One stays. She tells four people about the call and the story becomes about a president who picked up a phone, which has never happened to you before.' },
    { label:'Accept, and appoint both of them to something better.', eff:{base:-4,press:+7,street:+6,congress:+5,auth:-1}, wild:true,
      res:'Both decline, in writing, with evident difficulty. One of them keeps the offer letter and mentions it in a memoir eleven years later.' }]},

{ id:'e-birthday-parade', title:'The Coincidence', who:C.sched, min:20, max:48, tags:['vanity','military'],
  src:'a major military commemoration scheduled to coincide with a presidential birthday',
  text:'Boyd has the date problem. "The service anniversary parade falls on your birthday. Genuinely, ' +
       'it is a real anniversary and it is a real coincidence." He shifts. "Nobody outside this room will ' +
       'believe that, sir, and I have checked the calendar four times because I did not believe it either."',
  choices:[
    { label:'Hold it. Mention the birthday from the podium.', eff:{base:+8,street:-7,press:-7,congress:-6,courts:-4,auth:+7},
      res:'A genuine coincidence, converted into a deliberate one by a single sentence, in front of eleven thousand serving personnel.' },
    { label:'Hold it. Never mention the birthday.', eff:{base:+4,street:+3,press:+3,congress:+3,auth:+5},
      res:'The anniversary is commemorated properly. Four outlets note the date coincidence in paragraph nine and nobody reads paragraph nine.' },
    { label:'Move the parade to a different weekend.', eff:{street:+7,press:+7,congress:+6,base:-6,auth:-1},
      res:'Moving a two-hundred-and-fifty-year anniversary to avoid an implication is itself an implication, and Boyd points this out, correctly, too late.' },
    { label:'Move your birthday.', eff:{base:+5,press:-3,street:-2,auth:+2}, wild:true,
      res:'A proclamation designates a different date for official purposes. It is signed. Four agencies update their records and one sends a card on both days thereafter.' }]},

{ id:'e-pen-set', title:'The Pens', who:C.usher, min:1, max:48, tags:['levity','vanity'],
  src:'the ceremonial distribution of signing pens at executive-order events',
  text:'Alvin has the tray. "Twenty-two pens per signing, sir, and you have signed a hundred and forty-three ' +
       'orders." He does the arithmetic without being asked. "Three thousand one hundred and forty-six pens. ' +
       'We have run out of the good ones and the reserve is 1974 stock."',
  choices:[
    { label:'Order forty thousand more. Gold. With my signature.', eff:{base:+5,press:-4,congress:-4,cash:-0.2,auth:+4},
      res:'They arrive in eleven weeks. The signature is printed slightly off-centre on all forty thousand and nobody dares mention it.' },
    { label:'Use the 1974 stock. Somebody should.', eff:{base:+2,press:+4,street:+3,auth:+2},
      res:'A pen from a very different presidency signs an order that would have astonished its original owner. Alvin finds this funnier than anybody else does.' },
    { label:'One pen per signing. Keep them all.', eff:{base:+3,press:+2,cash:+0.1,auth:+3},
      res:'A complete set, in order, in a case. It is the single most valuable object anybody removes from the building.' },
    { label:'Sign everything with the same pen forever.', eff:{base:+4,press:+3,street:+2,auth:+2}, wild:true,
      res:'It runs dry on order ninety-one, mid-signature, in front of cameras. The order is technically incomplete for four hours until somebody notices.' }]},

{ id:'e-nickname', title:'The Name For Him', who:C.social, min:6, max:48, tags:['levity','press'],
  src:'the assignment of derisive nicknames to political opponents',
  text:'Brayden has four options on a card. "They test between eleven and nineteen points better than his ' +
       'actual name, sir. The best-performing one is also the cruellest, which is not a coincidence and ' +
       'I have stopped pretending it is."',
  choices:[
    { label:'The cruellest one. Use it in every post.', eff:{base:+8,press:-7,congress:-7,street:-6,courts:-3,auth:+6},
      res:'It sticks so completely that four years later serious publications have to specify which man they mean when they use his real name.' },
    { label:'The mildest one. It still works.', eff:{base:+5,press:-3,congress:-3,street:-2,auth:+5},
      res:'Eleven points instead of nineteen, and no clip of you saying something about a man\'s family. It is the correct trade every single time.' },
    { label:'Use his actual name. Attack his actual record.', eff:{press:+8,congress:+7,street:+6,courts:+4,base:-8,auth:+1},
      res:'A substantive attack on a real vote he cast. It is the most damaging thing anybody says about him all year and it gets a quarter of the coverage.' },
    { label:'Give him a flattering nickname instead.', eff:{base:-3,press:+6,congress:+5,street:+4,auth:-1}, wild:true,
      res:'You start calling him something genuinely complimentary and refuse to explain why. He is visibly unnerved by it for four months.' }]},

{ id:'e-doctor-note', title:'The Letter From The Physician', who:C.doc, min:8, max:48, tags:['press','levity'],
  src:'unusually effusive official medical assessments of a president\'s health',
  text:'Dr Prine has drafted the annual assessment. It is four paragraphs and uses the word "extraordinary" ' +
       'twice. "Sir, this is not the letter I would write. It is the letter I have been given to sign, ' +
       'and I would like to know which of those two things is going out."',
  choices:[
    { label:'The one you were given. Sign it.', eff:{base:+6,press:-8,congress:-5,street:-4,courts:-3,auth:+4},
      res:'A physician\'s signature on somebody else\'s superlatives. Four medical associations comment on the ethics of it and Prine reads all four.' },
    { label:'The one he would write.', eff:{press:+8,congress:+6,street:+5,base:-5,auth:+1},
      res:'It says you are a man of your age in reasonable condition with two manageable issues. It is entirely unremarkable and is therefore never mentioned again.' },
    { label:'Publish both and let people choose.', eff:{base:+3,press:+6,street:+4,congress:+3,auth:-1},
      res:'Radical transparency as a joke that turns out to be a genuinely effective policy. Prine frames the two-page release.' },
    { label:'Have him certify you as the healthiest ever.', eff:{base:+5,press:-9,congress:-6,street:-5,auth:+3}, wild:true,
      res:'He refuses, in writing, citing the four presidents who ran marathons. The refusal letter is a document of some historical importance.' }]},

{ id:'e-intern-photo', title:'The Photograph', who:C.intern, min:1, max:48, tags:['levity','press'],
  src:'informal staff photographs from inside the building circulating publicly',
  text:'Madison has taken a photograph in the corridor and posted it and it has four hundred thousand views. ' +
       'It shows nothing classified. It shows you, from behind, walking alone, at ten at night, ' +
       'and it is the most humanising image anybody has produced of you in four years.',
  choices:[
    { label:'Ban all staff photography. Confiscate phones.', eff:{base:+3,press:-7,street:-6,congress:-4,auth:+5},
      res:'The ban is the story for three days and the photograph is the story for three years. Madison is not fired and does not post again.' },
    { label:'Leave it up. Let her keep posting.', eff:{base:+4,press:+7,street:+7,congress:+4,auth:+1},
      res:'She becomes, accidentally, the most effective communications asset the building has. Nobody in comms can work out how to replicate it and four of them try.' },
    { label:'Have her take more. Officially. With a brief.', eff:{base:+3,press:+3,street:+3,auth:+2},
      res:'The moment it has a brief it stops working. Engagement falls 80% in a fortnight and Madison, to her credit, says so.' },
    { label:'Post one of her, from behind, in return.', eff:{base:+4,press:+5,street:+5,auth:-1}, wild:true,
      res:'A president photographing an intern photographing a president. It is genuinely charming and four people in the counsel\'s office have to think about it carefully.' }]},

{ id:'e-usher-book', title:'Forty-One Years', who:C.usher, min:24, max:48, tags:['levity','press'],
  src:'long-serving residence staff as witnesses across multiple administrations',
  text:'Alvin is retiring. Forty-one years, seven presidents. He has never given an interview and four ' +
       'publishers have made offers this month. He is telling you as a courtesy, which nobody required ' +
       'him to do.',
  choices:[
    { label:'Have counsel send him a non-disclosure agreement.', eff:{base:+3,press:-9,street:-8,congress:-5,courts:-4,auth:+4},
      res:'He signs it without complaint and returns it by hand. Four of the seven presidents he served call him within a week and none of them call you.' },
    { label:'Wish him well. Say nothing about the book.', eff:{press:+7,street:+7,congress:+4,base:-2,auth:+1},
      res:'He does not write it. He tells a friend, years later, that the reason was that nobody had asked him not to.' },
    { label:'Give him the medal. In the East Room. Everybody there.', eff:{press:+9,street:+9,congress:+6,base:-3,auth:+2},
      res:'Four hundred people, including three former presidents. It is the warmest event held in that building in a decade and it costs you nothing at all.' },
    { label:'Offer to co-write it.', eff:{base:+4,press:+4,street:+3,cash:+0.2,auth:-1}, wild:true,
      res:'He considers it, seriously, for four days. Then he declines in one sentence that is somehow both extremely kind and completely final.' }]}

);
})();
