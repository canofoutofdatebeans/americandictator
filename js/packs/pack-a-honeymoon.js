/* ============================================================
   PACK A — THE HONEYMOON  (term months 1–14)
   Transition, confirmations, the first hundred days, and the
   dawning realisation that the building is full of people.
   40 crises. See WRITING-GUIDE.md before editing.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

{ id:'a-transition', title:'The Transition', who:C.cos, min:1, max:5, tags:['power','agencies'],
  text:'Four thousand political appointments. Deborah has a spreadsheet with two columns: "competent" and "loyal." ' +
       'The overlap column exists. It contains eleven names.',
  choices:[
    { label:'Loyal. All four thousand. Competence is teachable.', eff:{base:+8,congress:-6,street:-6,press:-5,auth:+9},
      res:'By March the Department of Agriculture is being run by a man who ran a podcast about it. Nothing he does can be overruled by anyone who knows better, because there is nobody left who knows better.' },
    { label:'Competent. They can be made loyal later.', eff:{congress:+6,street:+6,press:+5,base:-7,auth:-2},
      res:'The government functions. Eleven months later four of them testify against you, which is the exact risk Deborah priced in and you declined to pay.' },
    { label:'Loyal at the top, competent underneath. Let them fight.', eff:{base:+4,congress:+2,courts:-3,auth:+5},
      res:'Every agency now has a chain of command and a shadow chain of command. Nothing moves fast, but nothing moves without you either.' },
    { label:'Fill all four thousand posts by lottery from the applicant pile.', eff:{base:+2,congress:-4,courts:-4,press:+1,auth:+2}, wild:true,
      res:'A retired dentist runs the Federal Aviation Administration for nine months and is, by every internal measure, the best administrator it has had in twenty years.' }]},

{ id:'a-confirmation', title:'The Confirmation', who:C.speaker, min:2, max:10, tags:['congress'],
  text:'Your nominee for Attorney General cannot name the three branches of government. He got two. ' +
       'He has been extremely loyal for eleven years and the hearing is on Thursday.',
  choices:[
    { label:'Push him through. Whip every vote personally.', eff:{base:+7,congress:-9,press:-5,auth:+6},
      res:'Confirmed 51–50 on the Vice President\'s tie-break. Four of your own senators voted yes while telling reporters, on background, that it was a mistake.' },
    { label:'Pull him. Nominate someone with a law degree.', eff:{congress:+8,courts:+6,press:+5,base:-6},
      res:'The replacement is confirmed 82–18 and spends the next three years telling you what you cannot do.' },
    { label:'Install him as "acting" and never send a nomination.', eff:{congress:-6,courts:-7,base:+5,auth:+11},breaks:'consent',
      res:'Acting officials require no confirmation and can serve, with the right paperwork, indefinitely. You have discovered that the Senate\'s advice-and-consent role is optional if nobody insists.', flag:'acting' },
    { label:'Have him confirmed as something else. Anything else.', eff:{base:+1,congress:+2,press:-3,street:-3,auth:+3}, wild:true,
      res:'He is confirmed 71-29 as Deputy Secretary of Commerce, a post with no duties, and holds it happily for four years without incident.' }]},

{ id:'a-hundred-days', title:'The Hundred Days', who:C.press, min:3, max:8, tags:['press'],
  text:'The hundred-day mark is Friday. Every outlet is preparing a scorecard. ' +
       'Kaylee has counted the accomplishments and would like to discuss the definition of the word.',
  choices:[
    { label:'Count every executive order as an accomplishment.', eff:{base:+6,press:-6,auth:+2},
      res:'"One hundred and forty-three historic actions." Eleven of them are proclamations about awareness months. The number is repeated for four years.' },
    { label:'Admit it\'s been slow. Blame the opposition.', eff:{base:+5,press:-2,congress:-4,auth:+1},
      res:'A grievance framing that lands with everyone who already agreed and nobody who did not.' },
    { label:'Do something enormous by Thursday.', eff:{base:+8,courts:-8,congress:-5,street:-5,auth:+8},
      res:'A sweeping order is drafted in nine hours by people who have not slept. Three of its provisions contradict each other. All of them take effect.' },
    { label:'Declare the first hundred days a rounding error and start again.', eff:{base:+3,congress:-4,street:-1,auth:+2}, wild:true,
      res:'You hold a second inauguration on day 101. It is not legally anything. Four thousand people attend and it is, everyone agrees, a better party than the first.' }]},

{ id:'a-residence', title:'The Residence', who:C.usher, min:1, max:12, tags:['levity','vanity'],
  text:'Alvin would like to know your preferences for the private residence. ' +
       'He has served four presidents. He is holding a small notebook and radiating the calm of a man who has seen things.',
  choices:[
    { label:'Gold. All of it. Bring in my own decorator.', eff:{base:+5,press:-4,cash:-0.2,auth:+2},
      res:'The Blue Room is now a different colour, which required a written finding that the Blue Room\'s name is descriptive rather than binding.' },
    { label:'Change nothing. It\'s a museum, not a house.', eff:{press:+6,street:+4,base:-3},
      res:'Alvin says "very good, sir" in a tone that a historian would later describe as audible relief.' },
    { label:'Install a television in every room. Every room.', eff:{base:+4,press:-3,street:-2,auth:+1},
      res:'Forty-one screens. Aides learn to time bad news to the commercial breaks, which becomes an actual, documented feature of how the government now operates.' },
    { label:'Ask Alvin to decide. Give him a budget and leave.', eff:{base:-3,congress:+1,press:+1}, wild:true,
      res:'Alvin, who has served four presidents and never been asked anything, redecorates with total confidence. It is the most tasteful the residence has looked since 1962.' }]},

{ id:'a-briefing-book', title:'The Briefing Book', who:C.spy, min:2, max:14, tags:['security'],
  text:'"The Presidential Daily Brief. Fourteen pages, classified, prepared overnight by nine hundred people." ' +
       'Errol Hance sets it down. "You have not opened one in six weeks. I am required to tell you that."',
  choices:[
    { label:'"Give it to me in one page. With pictures."', eff:{base:+3,street:-4,press:-4,auth:+2},
      res:'It becomes one page with pictures. Nine hundred analysts now compete for four bullet points, and the ones who learn to flatter get more of them.' },
    { label:'Read it. Every morning. Actually read it.', eff:{street:+6,press:+5,congress:+4,base:-2,auth:+1},
      res:'You become the best-informed person in the building, which is a genuine and unglamorous advantage that pays off twice over the next four years.' },
    { label:'Cancel it. Watch television instead.', eff:{base:+4,street:-8,congress:-6,press:-5,auth:+3},
      res:'For eleven months the foreign policy of the United States is downstream of a morning show, and three allied intelligence services adjust their sharing arrangements accordingly.' },
    { label:'Have it read to you as a podcast by a professional voice actor.', eff:{base:+1,congress:+1,press:-3,street:-1,auth:+2}, wild:true,
      res:'You listen to all fourteen pages every morning while exercising. Comprehension is measurably higher than any president in a decade. Nobody can decide whether to be impressed.' }]},

{ id:'a-first-trip', title:'The First Trip', who:C.state, min:4, max:16, tags:['foreign'],
  text:'Tradition says the first foreign visit goes to your closest ally. ' +
       'Muriel has the itinerary. You have been looking at a different itinerary, from a country with better hotels.',
  choices:[
    { label:'Break tradition. Go where they roll out the gold carpet.', eff:{base:+6,press:-4,street:-3,cash:+0.3,auth:+3},
      res:'A sword dance, an orb, and $110 billion in announced deals of which $14 billion is real. The ally you skipped notices, and remembers, for eleven years.' },
    { label:'The ally. It\'s tradition for a reason.', eff:{press:+6,congress:+5,street:+4,base:-4},
      res:'A dull, warm, useful visit. The joint statement contains the word "enduring" four times and is entirely accurate.' },
    { label:'Go to a summit and lecture everyone.', eff:{base:+7,press:-5,street:-4,congress:-4,auth:+4},
      res:'You are filmed pushing past a prime minister to reach the front of a group photograph. The clip is nine seconds and outlives every policy discussed at the summit.' },
    { label:'Go to a diner in Ohio and call it a foreign trip.', eff:{base:+3,congress:-4,street:+1,auth:+1}, wild:true,
      res:'Four networks cover it live because they have nothing else. A waitress asks you a question about her insurance that nobody in your administration can answer.' }]},

{ id:'a-portrait', title:'The Portrait', who:C.photog, min:1, max:14, tags:['vanity','levity'],
  text:'Renata Silk needs the official portrait for every federal building in the country. ' +
       'She has taken four hundred frames. You have looked at all four hundred. You have concerns about three hundred and ninety-eight.',
  choices:[
    { label:'Reshoot. Different light. I know what I look like.', eff:{base:+4,press:-3,cash:-0.1,auth:+1},
      res:'Eleven more sessions. The final image is retouched to a degree that a wire service describes, in a caption, as "provided by the White House."' },
    { label:'Pick one. It\'s a wall in a post office.', eff:{press:+4,street:+3,base:-2},
      res:'Renata exhales. The portrait is good. Nobody ever mentions it again, which is what a portrait is for.' },
    { label:'Use a photo of the crowd instead. Of my crowd.', eff:{base:+7,press:-5,auth:+2},
      res:'Federal buildings now display a photograph of a rally where a portrait should be. It is technically compliant with the regulation, which specifies "a likeness."' },
    { label:'Use a child\'s crayon drawing of you. Have it framed.', eff:{base:+2,press:-1,auth:-2}, wild:true,
      res:'It hangs in nine thousand federal buildings. The child is eleven. It is the single most liked decision of your first year and it cost forty dollars.' }]},

{ id:'a-oath-cards', title:'The Cards', who:C.gen, min:3, max:20, tags:['military','security'],
  text:'A military aide hands you the card and explains the authentication codes. ' +
       'The briefing takes four minutes. There is no second person in the chain. There has never been a second person in the chain.',
  choices:[
    { label:'"Four minutes? That\'s it?" Ask for more briefings.', eff:{street:+6,press:+5,congress:+4,base:-2,auth:+1},
      res:'You spend a day at a facility underground learning exactly what the number means. You are quieter for about a week afterwards.' },
    { label:'Take the card. Mention it at a rally.', eff:{base:+5,street:-9,press:-5,congress:-6,auth:+4},
      res:'You describe the briefing in general terms to a crowd of eleven thousand. Two allied governments issue statements. One adversary does not, which is worse.' },
    { label:'"Who else can stop this?" Ask the actual question.', eff:{street:+4,congress:+3,courts:+2,auth:+6},
      res:'The honest answer is: procedurally, nobody. You now know that and so does everyone who watched you ask.' },
    { label:'Ask if the card can have a picture of the dog on it.', eff:{base:+2,press:-3,street:-1,auth:-1}, wild:true,
      res:'The request goes up four levels of the Pentagon and comes back approved, because nobody at any level was willing to be the person who said no to it.' }]},

{ id:'a-ethics-briefing', title:'The Ethics Briefing', who:C.ethics, min:2, max:16, tags:['money'],
  text:'Miriam Applewhite has a slide deck about divestment, blind trusts and the emoluments clause. ' +
       'She has given this briefing to six presidents. "Sir, the previous five signed at the first slide."',
  choices:[
    { label:'Sign nothing. The president cannot have a conflict of interest.', eff:{base:+3,press:-5,courts:-6,congress:-5,cash:+0.6,auth:+7},
      res:'It is a legal position with actual support in the statutes and no support at all in the last fifty years of practice. She resigns in March.', flag:'noDivest' },
    { label:'Blind trust. Run by your children.', eff:{base:+3,press:-4,courts:-2,cash:+0.3,auth:+3},
      res:'The trust is blind in the sense that you are not permitted to see it, and sighted in the sense that you are told about it at dinner.' },
    { label:'Full divestment. Do it properly.', eff:{press:+9,courts:+7,congress:+6,base:-4,cash:-0.9},
      res:'It costs you a fortune and buys you something you will not appreciate until the second year, when there is simply no story.' },
    { label:'Sign everything, then ask her to audit you quarterly. Publicly.', eff:{base:-8,congress:+3,courts:+3,press:+4,auth:-2,cash:-0.6}, wild:true,
      res:'Miriam Applewhite does not resign in March. She stays six years and her quarterly reports are the most boring documents in Washington, which is precisely their value.' }]},

{ id:'a-nickname', title:'The Nickname', who:C.social, min:2, max:20, tags:['levity','base'],
  text:'Brayden has workshopped seven nicknames for the opposition leader. ' +
       'Four are libellous, two are incomprehensible, and one is genuinely, disgracefully funny.',
  choices:[
    { label:'The funny one. Use it in every speech from now on.', eff:{base:+8,press:-5,street:-4,auth:+2},
      res:'It sticks so thoroughly that news anchors start using it by accident. She is still being introduced with it at events nine years later.' },
    { label:'Use her actual name. It\'s more insulting somehow.', eff:{press:+5,congress:+4,base:-3,auth:+1},
      res:'Treating an opponent as a person is now such an unusual tactic that it is covered as a strategy.' },
    { label:'Nickname the entire opposition party instead.', eff:{base:+6,press:-4,congress:-5,street:-3,auth:+3},
      res:'You have converted forty million individuals into a single object with a stupid name. This is more efficient and considerably worse.' },
    { label:'Nickname yourself first. Get ahead of it.', eff:{base:+3,press:-2,street:-2,auth:+1}, wild:true,
      res:'You workshop it live at a rally and the crowd rejects three before landing on one. It sticks, it is affectionate, and no opponent can now use it against you.' }]},

{ id:'a-cabinet-first', title:'The First Cabinet Meeting', who:C.cos, min:2, max:12, tags:['power'],
  text:'Twenty-two people around a table, all confirmed, all yours. ' +
       'Deborah has an agenda with eleven items. The first item is "Introductions." The meeting is scheduled for ninety minutes.',
  choices:[
    { label:'Skip the agenda. Talk for ninety minutes.', eff:{base:+4,congress:-4,street:-3,press:-4,auth:+3},
      res:'Nothing is decided. Twenty-two department heads leave having learned only what pleases you, which they will use as a decision-making framework for four years.' },
    { label:'Work the agenda. All eleven items.', eff:{congress:+6,street:+5,press:+4,base:-3,auth:+2},
      res:'It runs four hours and produces nine actual decisions. It is the most productive meeting of the administration and it is never repeated.' },
    { label:'Ask each of them what they will do if a court blocks them.', eff:{courts:-6,congress:-4,base:+4,auth:+9},
      res:'Nineteen give lawyerly answers. Three give the answer you were listening for. Those three get everything they ask for from now on.' },
    { label:'Hold it in a diner. All twenty-two of you. One booth at a time.', eff:{base:+2,congress:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'Twenty-two cabinet officials in a roadside diner for four hours. It is chaotic, it is photographed constantly, and nine actual decisions get made.' }]},

{ id:'a-family-office', title:'The West Wing Office', who:C.girl, min:3, max:20, tags:['money','vanity'],
  text:'Ivy would like a West Wing office, a security clearance, and an unpaid title. ' +
       'She is genuinely capable, which makes this harder rather than easier.',
  choices:[
    { label:'Give her all three. Nepotism is just trust with paperwork.', eff:{base:+3,press:-5,congress:-5,courts:-4,auth:+5},
      res:'She is good at the job. That the job could not have been obtained by anyone who is not your daughter remains true regardless, and everyone in the building knows it.', flag:'family' },
    { label:'Advisory role. No clearance, no office.', eff:{press:+3,congress:+2,base:-2,auth:+1},
      res:'She takes the meeting anyway, from a chair by the door, and is more effective than several confirmed officials.' },
    { label:'"Not in this building." Keep the family out.', eff:{press:+8,congress:+6,courts:+5,base:-6},
      res:'It is the correct decision and it costs you the only person in the world who would have told you the truth in a small room.' },
    { label:'Give her a real job in a department, at the bottom, under a fake name.', eff:{base:+1,congress:+2,courts:+1,press:-2,street:-3,auth:+2}, wild:true,
      res:'She spends fourteen months as a GS-9 analyst under the name \'Iris Vance\' and produces a memo on procurement fraud that saves the government $2 billion.' }]},

{ id:'a-first-veto', title:'The First Veto', who:C.speaker, min:6, max:24, tags:['congress'],
  text:'A bipartisan bill has passed both chambers with 71 votes. It is popular, sensible, and contains one paragraph ' +
       'that limits something you would like to do. Hal has counted: they have the votes to override.',
  choices:[
    { label:'Veto it anyway. Make them override you.', eff:{base:+6,congress:-9,press:-4,auth:+4},
      res:'They override, 74–26. You have established that your veto is not a real constraint, which is a fact about you they now all know.' },
    { label:'Sign it. Issue a signing statement voiding that paragraph.', eff:{congress:-5,courts:-8,press:-5,base:+4,auth:+11},breaks:'takecare',
      res:'You signed a law and announced you would not follow part of it. No court will hear it for two years. In the meantime the paragraph does not exist.', flag:'signingStatement' },
    { label:'Sign it clean. Bank the goodwill.', eff:{congress:+9,press:+6,street:+5,base:-5,auth:-2},
      res:'You get a genuinely bipartisan photograph and a favour you can call in exactly once.' },
    { label:'Veto it in person, in the chamber, with a speech.', eff:{base:+3,congress:-6,press:+1,street:+1,auth:+3}, wild:true,
      res:'No president has vetoed a bill from the floor of the House. There is no procedure for it and no procedure preventing it. The override vote is delayed nine days by sheer confusion.' }]},

{ id:'a-vetting', title:'The Vetting', who:C.fbi, min:4, max:20, tags:['security','press'],
  text:'Marla Quist has background files on eleven senior appointees. Four cannot hold a clearance. ' +
       'One of the four already has one, granted over the Bureau\'s written objection, by you.',
  choices:[
    { label:'Override all four. The president grants clearances.', eff:{base:+5,press:-8,congress:-7,street:-5,auth:+8},
      res:'Constitutionally you are correct. Eighteen months later one of them leaves a folder in an unlocked drawer at a private club, and it is discovered by a member.' },
    { label:'Drop the four. Quietly, on a Friday.', eff:{press:+5,congress:+5,base:-4,auth:+1},
      res:'They resign to "spend time with family." Two of them are back in the building by autumn on contracts that require no clearance at all.' },
    { label:'Override them and investigate the Bureau for leaking.', eff:{base:+7,press:-9,courts:-7,congress:-6,auth:+11},
      res:'The leak inquiry finds nothing and terrifies everyone, which was the deliverable. Quist begins writing everything down in a way she did not previously.' },
    { label:'Grant clearances to all eleven and to the janitor, for fairness.', eff:{base:+2,congress:-6,press:-6,street:-4,auth:+3}, wild:true,
      res:'The janitor holds a Top Secret clearance for four years, uses it never, and is the only one of the twelve who is never the subject of an inquiry.' }]},

{ id:'a-tour', title:'The Tour', who:C.hist, min:2, max:22, tags:['levity','vanity'],
  text:'Dr. Weir is walking you through the building\'s history. She stops at a desk. ' +
       '"Six presidents used this. Two of them wrote resignation letters at it." She waits. She is clearly not finished.',
  choices:[
    { label:'"Which two?" Actually ask.', eff:{press:+4,street:+4,congress:+3,auth:+1},
      res:'She tells you, at length, with dates. You listen for forty minutes. She will later be one of the few people who says something kind about you on the record.' },
    { label:'Replace the desk. Bring in something bigger.', eff:{base:+5,press:-4,auth:+2},
      res:'The new desk is eleven inches wider and has your name inlaid on the front, facing outward, so that visitors can read it while seated opposite you.' },
    { label:'Have her removed from the tour rotation.', eff:{base:+2,press:-5,street:-4,auth:+3},
      res:'The White House Historian is not, it turns out, a political appointment. She continues working there for eleven years and writes the definitive account of your presidency.', flag:'weirAngry' },
    { label:'Ask her to keep going. Cancel the afternoon.', eff:{base:-3,congress:+2,press:+1,street:+1,auth:-2}, wild:true,
      res:'Four hours with the White House Historian. You learn what happened to the two who wrote resignation letters at that desk. It changes, very slightly, how you sit at it.' }]},

{ id:'a-speechwriter', title:'The Draft', who:C.writer, min:3, max:24, tags:['press','base'],
  text:'Gideon Poe has written you a genuinely great speech — historical, generous, quotable, the kind that gets carved into things. ' +
       'It is also, he concedes, "not really in your voice."',
  choices:[
    { label:'Deliver it word for word.', eff:{press:+9,street:+7,congress:+6,base:-8,auth:-2},
      res:'It is the best-reviewed forty minutes of your presidency. Your base watches it in silence and concludes, correctly, that you did not write it.' },
    { label:'Deliver it, then go off-script for twenty minutes.', eff:{base:+7,press:-5,street:-3,auth:+3},
      res:'The carved-in-stone paragraph and the improvised riff about a television host appear in the same transcript. Historians will use both.' },
    { label:'Bin it. "Give me a list of enemies and I\'ll do the rest."', eff:{base:+9,press:-7,street:-6,congress:-4,auth:+4},
      res:'Poe writes lists for another eleven months and then leaves to write a book. The book is very good and you are in all of it.' },
    { label:'Have Gideon deliver it himself. You sit in the audience.', eff:{base:-4,congress:+2,press:+2,street:+2,auth:-2}, wild:true,
      res:'The Chief Speechwriter delivers the address from the podium while the President watches from row four. Nobody has ever done this. It is electrifying and it is never repeated.' }]},

{ id:'a-inaugural-gift', title:'The Gift Log', who:C.ethics, min:4, max:22, tags:['money','levity'],
  text:'Foreign governments have sent 1,100 inaugural gifts. Anything over $480 belongs to the American people. ' +
       'Item 402 is a solid gold horse. Item 403 is a second, larger, solid gold horse.',
  choices:[
    { label:'Log them all. Buy the horses back at valuation.', eff:{press:+6,congress:+4,cash:-0.4,auth:+1},
      res:'Entirely legal, fully documented, and it costs you $600,000 for two gold horses you did not want and cannot display anywhere.' },
    { label:'Keep them. Log them as "displayed at a residence."', eff:{base:+3,press:-5,courts:-4,cash:+0.5,auth:+4},
      res:'The residence is yours. The display is a corridor. The horses are, by any ordinary use of the word, kept.' },
    { label:'Auction them. Donate it. Make a whole event of it.', eff:{press:+7,base:+5,street:+4,cash:+0.1,auth:+2},
      res:'The horses raise $2.1 million for veterans and you get to stand next to a gold horse on television. Everybody wins, including, unusually, everybody.' },
    { label:'Keep the two gold horses. Give everything else to a school raffle.', eff:{base:+2,press:-2,street:-1,auth:+1,cash:+0.2}, wild:true,
      res:'Eleven hundred diplomatic gifts raffled off in a school gymnasium. A ceremonial dagger from a Gulf state is won by a twelve-year-old and there is a brief international incident.' }]},

{ id:'a-golf', title:'The Course', who:C.sched, min:3, max:30, tags:['levity','money'],
  text:'Boyd has the weekend schedule. Eleven of your last fourteen weekends have been at a property you own, ' +
       'billed to the government at the going rate, paid to you.',
  choices:[
    { label:'Keep going. It\'s a secure site I already understand.', eff:{base:+2,press:-5,street:-4,cash:+0.4,auth:+3},
      res:'The Secret Service pays you rent to protect you at your own hotel. This is legal, documented, and appears in a GAO report as a line item.' },
    { label:'Charge the government one dollar a year.', eff:{press:+7,congress:+5,base:+3,cash:-0.2},
      res:'A cheap, showy, effective gesture that removes the entire story for the price of a sandwich.' },
    { label:'Go somewhere you don\'t own. Anywhere.', eff:{press:+5,street:+4,base:-3,cash:-0.1},
      res:'Camp David is described by three separate aides as "fine, actually." You do not go back.' },
    { label:'Take the press pool with you. Every weekend. Make them play.', eff:{base:+2,street:-1,auth:-2,cash:+0.1}, wild:true,
      res:'Nine correspondents play eighteen holes with the President every Saturday for four years. Coverage improves markedly and none of them can adequately explain why.' }]},

{ id:'a-first-lawsuit', title:'The First Injunction', who:C.ag, min:3, max:18, tags:['courts'],
  text:'A district judge in a state you lost by thirty points has blocked your signature order nationwide. ' +
       '"One judge, sir. Out of six hundred and seventy-seven. And it applies everywhere."',
  choices:[
    { label:'Attack the judge personally. Name him. Repeatedly.', eff:{base:+8,courts:-11,press:-5,auth:+4},
      res:'He receives protection detail within a week. Eleven other judges read the coverage and each of them privately decides what kind of judge they intend to be.' },
    { label:'Appeal it properly and shut up about it.', eff:{courts:+8,press:+6,congress:+4,base:-5},
      res:'You win at the circuit in eleven months. Nobody covers the win because nobody remembers the loss.' },
    { label:'Comply nationally, then re-issue it state by state.', eff:{courts:+3,press:-3,base:+4,auth:+8},
      res:'Forty-one separate orders instead of one. Forty-one separate lawsuits, none nationwide, none newsworthy, most of which you win.' },
    { label:'Send the judge a handwritten note saying you disagree, respectfully.', eff:{base:-4,congress:+2,courts:+4,press:+1,street:-1,auth:-2}, wild:true,
      res:'It is four sentences long, entirely civil, and utterly baffling to everyone. He files it with the court as a matter of record because he cannot think what else to do with it.' }]},

{ id:'a-swamp', title:'The Swamp', who:C.lawyer, min:5, max:24, tags:['money','base'],
  text:'You campaigned on draining it. Sy has the list of people who have joined the administration from the industries ' +
       'they now regulate. "Sir, it is a long list. It is, in fairness, an extremely qualified list."',
  choices:[
    { label:'Hire them all. Who else knows how it works?', eff:{base:-6,press:-5,street:-6,congress:+4,cash:+0.5,auth:+4},
      res:'Eleven regulators are now former lobbyists for the regulated. Four of them are genuinely excellent at the job, which is somehow the most damning part.' },
    { label:'Impose a five-year lobbying ban on the way out.', eff:{base:+8,press:+6,street:+5,congress:-4,auth:+2},
      res:'It is announced with enormous fanfare and quietly waived, individually, eleven times over four years.' },
    { label:'Hire them and say you drained it anyway.', eff:{base:+4,press:-4,street:-5,cash:+0.4,auth:+5},
      res:'The claim and the staff list are both published, on the same website, on the same day. Nobody who supports you reads the second one.' },
    { label:'Hire only people who have never worked in Washington. Nobody.', eff:{base:+3,congress:-9,courts:-6,street:+1,auth:+2}, wild:true,
      res:'Eleven hundred appointees with no federal experience whatsoever. Four of them are visionary. The rest cannot find the building and the government slows to a walk for a year.' }]},

{ id:'a-pet-rock', title:'The Bill Nobody Read', who:C.speaker, min:6, max:26, tags:['congress','levity'],
  text:'A 2,200-page appropriations bill lands on the desk at 4am with the shutdown at midnight. ' +
       'Page 1,904 contains a provision nobody will admit to writing. It is about ferrets.',
  choices:[
    { label:'Sign it. Ferrets are not the hill.', eff:{congress:+7,street:+5,base:-3,auth:+1},
      res:'The government stays open. The ferret provision costs $40 million and creates an office that still exists.' },
    { label:'Veto over the ferrets. On principle. Loudly.', eff:{base:+7,congress:-8,street:-7,press:-3,auth:+3},
      res:'You shut down the federal government over ferrets. It is, briefly, the only thing anyone in the country is talking about, and you are not entirely wrong.' },
    { label:'Sign it and line-item strike the ferrets anyway.', eff:{congress:-7,courts:-8,base:+5,auth:+10},breaks:'presentment',
      res:'Presidents do not have a line-item veto. You have now used one. The case takes three years and by then the office has been quietly funded twice more.' },
    { label:'Sign it, but read all 2,200 pages aloud on television first.', eff:{base:+3,congress:+2,press:-1,street:-1,auth:-2}, wild:true,
      res:'Thirty-one hours of live broadcast. Ratings climb steadily. Eleven provisions are removed by embarrassed authors before you reach them, including the ferrets.' }]},

{ id:'a-doctor-first', title:'The Physical', who:C.doc, min:4, max:26, tags:['press','levity'],
  text:'Admiral Prine has your annual results. They are, he says, "consistent with a man of your age and habits." ' +
       'He would like to know how much of that sentence you would like released.',
  choices:[
    { label:'Release a statement saying I\'m in astonishing health.', eff:{base:+6,press:-6,auth:+2},
      res:'The phrase "astonishing health" is used four times in a one-page letter that Prine signs and immediately regrets.' },
    { label:'Release the actual numbers. All of them.', eff:{press:+8,street:+5,base:-4},
      res:'They are unremarkable. The story dies in one cycle because there is nothing in it, which is what happens when there is nothing in it.' },
    { label:'Release nothing. It\'s private.', eff:{press:-6,street:-3,base:+3,auth:+2},
      res:'Four outlets begin tracking your gait, your handshake and the width of your ties. This continues for the rest of your life.' },
    { label:'Release the results as a rap song.', eff:{base:+3,press:-2,street:-1}, wild:true,
      res:'Rear Admiral Prine raps your cholesterol on camera. He is not good at it. It has ninety million views and he is recognised in airports for the rest of his life.' }]},

{ id:'a-crowd-again', title:'The Empty Seats', who:C.sched, min:5, max:26, tags:['base','press'],
  text:'The arena holds nineteen thousand. Boyd\'s count is eleven. ' +
       'There is a camera position that makes it look full and a camera position that does not, and both press pools have credentials.',
  choices:[
    { label:'Move the stage forward. Curtain off the back.', eff:{base:+5,press:-4,auth:+2},
      res:'Standard practice at every event of every kind. It works. A drone shot from a local affiliate ruins it by Tuesday.' },
    { label:'Book smaller rooms from now on.', eff:{base:+6,press:+4,street:+2,auth:+1},
      res:'Every room is now overflowing, which is the same as every room being full, which is much better television than a big room being empty.' },
    { label:'Claim twenty-five thousand and revoke the affiliate\'s credentials.', eff:{base:+7,press:-9,street:-4,auth:+5},
      res:'A local news station in a mid-sized market becomes a national free-press story for eleven days over a photograph of some chairs.' },
    { label:'Fill the empty seats with cardboard cutouts of yourself.', eff:{base:+2,press:-8,street:-4,auth:+1}, wild:true,
      res:'Eight thousand cutouts. From the correct angle it works perfectly. From every other angle it is the single most unsettling image of the year.' }]},

{ id:'a-sanctuary', title:'The Mayor', who:C.mayor, min:6, max:28, tags:['street','power'],
  text:'Desmond Faulk has announced his city will not assist federal immigration enforcement. ' +
       'He is on television saying so. He is enjoying himself enormously.',
  choices:[
    { label:'Cut every federal dollar to the city. Today.', eff:{base:+8,courts:-9,street:-8,press:-5,auth:+9},
      res:'A court blocks it in five weeks under a doctrine about coercing the states that most people had never heard of and now have.' },
    { label:'Send federal agents in without local coordination.', eff:{base:+6,street:-11,press:-4,courts:-6,auth:+8},
      res:'Arrests happen outside a school. The footage is on every screen in the country by lunchtime and the mayor\'s approval goes up eleven points.' },
    { label:'Ignore him. He wants the fight more than you do.', eff:{street:+6,press:+5,congress:+3,base:-6,auth:-1},
      res:'Denied an antagonist, he is back to arguing about bin collection within a month. It is the cheapest win available and it looks exactly like losing.' },
    { label:'Move the federal government\'s regional office to his city. Double the staff.', eff:{base:-6,congress:+3,press:+2,street:+4,auth:-2,cash:-0.3}, wild:true,
      res:'You reward the defiant mayor with four thousand federal jobs. He cannot attack you for it. He tries for a fortnight and then simply stops talking about you.' }]},

{ id:'a-fed-chair', title:'The Independent Man', who:C.fed, min:8, max:30, tags:['economy','power'],
  text:'Arthur Lindqvist has raised rates a quarter point. He is legally independent, appointed by you, ' +
       'and cannot be removed for policy disagreements. He mentions none of this, which is somehow worse.',
  choices:[
    { label:'Attack him publicly. Demand cuts. Every week.', eff:{base:+5,street:-7,press:-4,congress:-5,auth:+5},
      res:'Markets now price in political pressure on the central bank as a permanent feature. The premium is small, real, and never goes away.' },
    { label:'Try to fire him and see what happens.', eff:{base:+4,courts:-11,congress:-9,street:-10,press:-5,auth:+13},
      res:'He does not leave. Nobody makes him. The question of whether you could is now live and unanswered, which markets hate more than either answer.' },
    { label:'Say nothing. Central bank independence is worth more than a quarter point.', eff:{street:+8,press:+7,congress:+6,base:-6,auth:-3},
      res:'A genuinely sophisticated decision that no voter will ever hear about and that saves the economy roughly $200 billion.' },
    { label:'Ask him to explain interest rates. Actually listen. On camera.', eff:{base:-3,congress:+3,courts:+1,press:+2,street:+2,auth:-2}, wild:true,
      res:'Forty minutes of a central banker explaining monetary policy to the President on live television. Four million people watch it. It is the best economics lesson the country ever gets.' }]},

{ id:'a-nasa', title:'The Flag', who:C.nasa, min:6, max:32, tags:['vanity','levity'],
  text:'Dr. Brennan has the crewed lunar timeline. It lands two years after you leave office. ' +
       'She has brought the engineering. You have brought a question about the timeline.',
  choices:[
    { label:'Move it up. Whatever it costs.', eff:{base:+7,street:-4,congress:-6,cash:-0.5,auth:+4},
      res:'Three safety reviews are compressed into one. Brennan writes a memo objecting, files it, and keeps a copy, which is what engineers do when they have read the previous reports.' },
    { label:'Fund it properly on her timeline. Take no credit.', eff:{street:+7,press:+7,congress:+5,base:-4,auth:+1},
      res:'It launches four years after you leave. Your name is on a plaque nobody photographs and the mission works.' },
    { label:'"Can the flag be bigger?"', eff:{base:+4,press:+3,street:+2,auth:+1},
      res:'Dr. Brennan says yes. It is the only request you make that she can fully deliver and she does so with real enthusiasm.' },
    { label:'Fund it properly and ask to go up yourself.', eff:{base:+3,congress:-6,press:+2,street:+2,auth:-2,cash:-0.4}, wild:true,
      res:'You pass none of the physicals. Dr. Brennan lets you sit in the simulator for an hour. It is, you tell four separate people afterwards, the best hour of the job.' }]},

{ id:'a-labor-first', title:'The Handshake', who:C.labor, min:6, max:30, tags:['street','economy'],
  text:'Tony Marchetti has the leaders of four unions in the anteroom. They endorsed the other side. ' +
       'They are here anyway, which means they want something, which means they can be bought.',
  choices:[
    { label:'Cut them a deal. Tariffs for endorsements.', eff:{street:+9,base:+6,press:+2,congress:-4,auth:+3},
      res:'Two of the four break with their own federation to stand behind you. The photograph is worth more than the policy and the policy is not nothing.', flag:'unions' },
    { label:'Lecture them about loyalty and send them home.', eff:{base:+5,street:-8,congress:-4,press:-3,auth:+2},
      res:'They leave in eleven minutes. The federation spends $90 million against you over the next three years, which is roughly what the deal would have cost.' },
    { label:'Take the meeting, promise everything, deliver nothing.', eff:{street:+5,base:+3,press:-4,auth:+4},
      res:'It buys you fourteen months. When it comes due, it comes due all at once, at a port, in October.' },
    { label:'Give them the deal and join the union yourself.', eff:{base:+2,congress:-8,press:+3,street:+4,auth:-2}, wild:true,
      res:'The President of the United States holds a card in the sheet metal workers. It is honorary, it is meaningless, and it is on the wall of nine hundred union halls within a month.' }]},

{ id:'a-holiday', title:'The Turkey', who:C.usher, min:8, max:34, tags:['levity'],
  text:'The annual turkey pardon. Two birds, both named by schoolchildren, both destined for a farm. ' +
       'Alvin notes that the joke writes itself and that four of your predecessors nonetheless read the prepared remarks.',
  choices:[
    { label:'Do the bit. Pardon both. Be charming for six minutes.', eff:{press:+6,street:+5,base:+4},
      res:'You are funny. Genuinely funny. It is briefly, disorientingly, the most likeable you have ever been on camera.' },
    { label:'Use it to make a joke about pardoning your friends.', eff:{base:+8,press:-5,courts:-5,street:-4,auth:+3},
      res:'The laugh in the room is real. The clip is used in an impeachment presentation fourteen months later, without editing, because none was needed.' },
    { label:'Skip it. It\'s a photo op with poultry.', eff:{press:-4,street:-4,base:-2},
      res:'A tradition that costs nothing and generates goodwill is discontinued to save eleven minutes.' },
    { label:'Pardon the turkeys and then hire them.', eff:{base:+3,congress:-3,press:+1,auth:-2}, wild:true,
      res:'Two turkeys are appointed to a federal advisory board on poultry welfare. The appointments are, on review, entirely lawful. They serve four-year terms.' }]},

{ id:'a-poet', title:'The Inaugural Poet', who:C.writer, min:1, max:6, tags:['culture','levity'],
  text:'Tradition calls for a poem. Gideon has three names. The first two declined. ' +
       'The third accepted and has sent a draft that Gideon describes as "about you, but not favourably, and very good."',
  choices:[
    { label:'Let her read it. Uncut.', eff:{press:+9,street:+6,congress:+4,base:-7,auth:-1},
      res:'Eleven million people hear a poem criticising the man who invited her to read it, at his own inauguration. It is the most confident thing you ever do.' },
    { label:'Cut the second half. Keep the pretty bits.', eff:{press:-4,base:+3,auth:+2},
      res:'She reads the edited version and then posts the original that afternoon. Both trend. Only one of them has your name on it.' },
    { label:'No poem. Have a country singer instead.', eff:{base:+6,press:-4,street:-2,auth:+1},
      res:'The singer is excellent, the crowd is delighted, and eleven newspapers run a piece about the poem that wasn\'t.' },
    { label:'Read the poem yourself. The unedited version. About you.', eff:{base:+2,congress:+2,auth:-2}, wild:true,
      res:'You stand at the inaugural podium and read a poem criticising you, in your own voice, without comment. Four historians call it the most extraordinary moment of the day.' }]},

{ id:'a-hotline', title:'The Call Sheet', who:C.state, min:5, max:26, tags:['foreign'],
  text:'Eleven heads of state are waiting for a congratulatory call. Muriel has ordered them by strategic priority. ' +
       'You have reordered them by who was nicest about you on television.',
  choices:[
    { label:'My order. The nice ones first.', eff:{base:+4,press:-4,street:-3,congress:-3,auth:+3},
      res:'A NATO ally is called eleventh, after a country with a population of ninety thousand. This is noticed in every foreign ministry on earth within the hour.' },
    { label:'Her order. She does this for a living.', eff:{press:+5,congress:+5,street:+4,base:-3},
      res:'Dull, correct, and it buys you an actual favour from an actual ally inside a year.' },
    { label:'Call the adversary first. Rattle everyone.', eff:{base:+5,press:-5,congress:-6,street:-5,auth:+7},
      res:'It works exactly as intended: every ally is now uncertain, every adversary is now flattered, and nobody knows what you will do next, including you.' },
    { label:'Call them all at once on a conference line.', eff:{base:+2,congress:+1,press:-2,street:-2,auth:+2}, wild:true,
      res:'Eleven heads of state on one call, none of whom were told the others would be there. Two of them are at war. It is the most productive ninety minutes in the history of the State Department.' }]},

{ id:'a-uniform', title:'The Salute', who:C.gen, min:3, max:28, tags:['military','levity'],
  text:'You returned a foreign officer\'s salute on a tarmac. Civilians do not salute. ' +
       'General Tarrant is here to explain, delicately, that the President is a civilian, and that this is the entire point.',
  choices:[
    { label:'"I\'m Commander-in-Chief. I\'ll salute who I like."', eff:{base:+6,street:-4,press:-3,congress:-3,auth:+4},
      res:'Every president salutes now; the tradition is only forty years old and nobody remembers it starting. Tarrant\'s objection is narrower and he does not repeat it.' },
    { label:'Stop doing it. He\'s explaining something real.', eff:{street:+6,congress:+5,press:+4,base:-3},
      res:'Nobody notices you stopped, which is how you can tell it was never about the salute.' },
    { label:'Start wearing a military-style jacket at events.', eff:{base:+6,street:-8,press:-5,congress:-6,auth:+6},
      res:'It has no insignia and no rank and it does not need any. Three historians write the same column in the same week.' },
    { label:'Salute everyone. The waiters, the press, the dog. All day.', eff:{base:+2,press:-1,street:-1,auth:-1}, wild:true,
      res:'By evening it has stopped being a story about militarism and become a story about a man saluting a labrador. The original concern is never raised again.' }]},

{ id:'a-leak-first', title:'The First Leak', who:C.cos, min:4, max:24, tags:['press','power'],
  text:'A verbatim transcript of a private call is in print within six hours. ' +
       'Deborah has the distribution list. It is fourteen people. All fourteen are yours.',
  choices:[
    { label:'Polygraph all fourteen. Today.', eff:{base:+5,press:-7,street:-4,congress:-4,auth:+7},
      res:'Polygraphs are inadmissible and unreliable and everybody knows it, which is why the exercise is about fear rather than truth. The leaks stop for six weeks.' },
    { label:'Shrink the list to four. Say nothing.', eff:{press:+2,auth:+6},
      res:'The leaks stop because the leaker is no longer in the room. You never find out who it was and it never matters.' },
    { label:'Leak something false to all fourteen. Separately. Tagged.', eff:{press:-5,courts:-3,base:+4,auth:+9},
      res:'A canary trap. It works in nine days and the person it catches is the last person you would have guessed, which is the point of a canary trap.' },
    { label:'Leak the story yourself, first, and better.', eff:{base:+2,press:-2,street:-3,auth:+5}, wild:true,
      res:'You call a reporter and give her a fuller, more accurate account than the leaker had. The leak becomes worthless. You have invented a defence that nobody in this building had considered.' }]},

{ id:'a-pastor', title:'The Blessing', who:C.pastor, min:4, max:30, tags:['culture','base'],
  text:'Reverend Muncy would like to lay hands on you in the Oval Office, on camera, with eleven other pastors. ' +
       'He has done this before. He has a very good sense of where the light is.',
  choices:[
    { label:'Do it. Full ceremony. Wide shot.', eff:{base:+9,press:-5,street:-5,auth:+3},breaks:'religion',
      res:'The photograph runs in every church bulletin in the country for a month. Two of the eleven pastors are, within a year, the subject of federal investigations.' },
    { label:'A private prayer. No cameras.', eff:{base:+4,press:+3,street:+2},
      res:'Muncy is briefly, visibly disappointed and then genuinely moved, which he had not expected and neither had you.' },
    { label:'Decline. Politely. Firmly.', eff:{press:+5,street:+4,base:-8},
      res:'He tells his broadcast audience of four million that he prays for you daily, which is both gracious and a threat.' },
    { label:'Ask him to pray for your opponents. By name. On camera.', eff:{base:+1,congress:+2,street:+1,auth:-2}, wild:true,
      res:'Reverend Muncy hesitates for four full seconds and then does it, properly, at length. Several people in the room are visibly moved, including two who came to mock it.' }]},

{ id:'a-shovel', title:'The Groundbreaking', who:C.sched, min:8, max:34, tags:['levity','street'],
  text:'A factory groundbreaking, eleven hundred jobs, gold-painted shovel, hard hat with your name on it. ' +
       'Boyd notes the plant was announced under your predecessor and the jobs number is from a press release.',
  choices:[
    { label:'Take full credit. It\'s a shovel and a camera.', eff:{base:+6,street:+4,press:-4,auth:+2},
      res:'The plant opens four years later with four hundred jobs, mostly automated, and the ribbon is cut by somebody else who also takes full credit.' },
    { label:'Credit the workers and the state. Say the number honestly.', eff:{press:+6,street:+6,congress:+4,base:-3},
      res:'Honest, specific, and repeated by exactly nobody because a correct jobs figure is not a story.' },
    { label:'Announce a second, larger factory that does not exist.', eff:{base:+5,press:-5,street:-6,congress:-4,auth:+3},
      res:'You describe it in detail: the acreage, the jobs, the state. None of it exists. A town spends eleven months rezoning for it.' },
    { label:'Actually work a shift on the site. Eight hours.', eff:{base:+3,congress:+1,press:-1,street:+1,auth:-2}, wild:true,
      res:'You are extremely bad at it. The foreman is patient. The footage of a President being told off for holding a shovel wrong is the most humanising thing ever filmed of you.' }]},

{ id:'a-hat', title:'The Hat', who:C.social, min:2, max:36, tags:['base','money','levity'],
  text:'The hat has sold four million units. Brayden wants a second product. ' +
       'He has eleven prototypes on the table, one of which is a commemorative sneaker.',
  choices:[
    { label:'All eleven. Sell everything. Sign the sneaker.', eff:{base:+7,press:-5,cash:+0.7,auth:+2},
      res:'You gross $180 million and turn a political movement into a merchandising business, which turns out to be far more durable than a political movement.' },
    { label:'Just the hat. Don\'t dilute it.', eff:{base:+5,press:-1,cash:+0.3,auth:+1},
      res:'Restraint in branding, of all places. The hat becomes iconic precisely because it is the only one.' },
    { label:'Give the profits to a veterans\' charity.', eff:{base:+8,press:+7,street:+6,congress:+4,cash:-0.3},
      res:'$40 million reaches an actual charity that does actual work. A reporter checks. It checks out. She writes it up and nobody clicks on it.' },
    { label:'Make the hat free. Give away four million.', eff:{base:+4,press:-2,street:-1,auth:-2,cash:-0.5}, wild:true,
      res:'You lose $80 million and gain a country in which one adult in forty owns your hat. It is the best money you ever spend and your accountants never forgive you.' }]},

{ id:'a-rope-line', title:'The Rope Line', who:C.cos, min:5, max:32, tags:['base','street'],
  text:'A supporter at a rope line hands you a folded note about her son, who died waiting eleven months for a hospital appointment. ' +
       'There are four hundred people behind her and a camera eleven feet away.',
  choices:[
    { label:'Stop. Read it. Talk to her for as long as it takes.', eff:{base:+9,press:+8,street:+8,congress:+4,auth:-1},
      res:'You are twenty-six minutes late to everything for the rest of the day. It is, without any competition, the best thing you do that year.' },
    { label:'Pocket it, hug her, keep moving. Have staff follow up.', eff:{base:+5,press:+3,street:+3},
      res:'Staff do follow up, twice, and the case is genuinely fixed. Nobody films any of that part.' },
    { label:'Hold it up and use it in the speech.', eff:{base:+7,press:-4,street:-3,auth:+2},
      res:'You use her son as an example for eleven months. She asks you to stop in the fourteenth month, in a letter, which is answered by an autopen.' },
    { label:'Give her your phone number. Your actual number.', eff:{base:+3,press:-1,street:+1,auth:-2}, wild:true,
      res:'She calls twice in four years. Both times you answer. Both times you fix the thing. She tells nobody until after you are dead, and then she tells everybody.' }]},

{ id:'a-son', title:'The Son', who:C.son, min:6, max:36, tags:['money','press'],
  text:'Trent Jr. has taken a meeting with representatives of a foreign government who offered "material helpful to the family." ' +
       'He has told you about it because he thinks it went well.',
  choices:[
    { label:'"Say nothing to anyone. Ever."', eff:{base:+3,press:-8,courts:-7,congress:-6,auth:+5},
      res:'The email chain exists, has existed since the moment it was sent, and will be published in full, by him, on a Tuesday, as a pre-emptive defence.' },
    { label:'Report it to the Bureau immediately.', eff:{press:+9,courts:+8,congress:+7,base:-7,auth:-3},
      res:'The correct move, made once, and it removes an entire eighteen-month investigation from your presidency before it begins.' },
    { label:'Get him a lawyer and a job overseas.', eff:{press:-4,courts:-3,cash:-0.3,auth:+3},
      res:'He is out of the country and out of the story within a month, and furious about both for considerably longer.' },
    { label:'Have Trent Jr. hold a press conference explaining it himself.', eff:{base:+1,congress:+1,courts:+2,press:-2,street:-3,auth:-2}, wild:true,
      res:'Forty minutes, unprepared, unlawyered. It is a catastrophe in the moment and it removes every subsequent question, because he has already answered all of them badly, in public, voluntarily.' }]},

{ id:'a-anthem-two', title:'The Anthem Singer', who:C.sched, min:4, max:34, tags:['culture','levity'],
  text:'The singer booked for a state event has posted eleven times about you, none of it kind. ' +
       'She has not cancelled. Boyd suspects she intends to make a point mid-performance.',
  choices:[
    { label:'Cancel her. Book someone safe.', eff:{base:+5,press:-5,street:-3,auth:+3},
      res:'The safe choice is fine. The cancelled singer releases a song about it that goes to number two and stays there for eleven weeks.' },
    { label:'Let her sing. Shake her hand afterwards.', eff:{press:+8,street:+6,base:-5,auth:+1},
      res:'She sings it straight, beautifully, and shakes your hand. Neither of you says anything. It is the most dignified minute of the year.' },
    { label:'Sing along. Loudly. On mic.', eff:{base:+7,press:+2,street:+2,auth:+1},
      res:'You are not a good singer. It is not a good performance. It is, unaccountably, extremely popular.' },
    { label:'Sing it with her. Badly. Arm around her shoulder.', eff:{base:+3,press:-1,auth:-2}, wild:true,
      res:'She is a professional and you are not. She carries it. The photograph of the two of you, one furious and one delighted, runs on four hundred front pages.' }]},

{ id:'a-first-funeral', title:'The Funeral', who:C.hist, min:8, max:40, tags:['press','street'],
  text:'A former president has died. You are seated in the second row beside three predecessors who have all, ' +
       'in print, described you as a threat to the republic. The eulogy is being delivered by the fourth.',
  choices:[
    { label:'Sit still. Say nothing. Shake every hand.', eff:{press:+9,street:+7,congress:+6,base:-5,auth:+1},
      res:'You behave impeccably for two hours. Four separate columnists write that it proves you can, which is not the compliment they intend.' },
    { label:'Post about the eulogy from the car afterwards.', eff:{base:+7,press:-9,street:-7,congress:-5,auth:+3},
      res:'The post goes up eleven minutes after the service ends, before the family has left the building. It is quoted at the next three presidential funerals.' },
    { label:'Skip it. Send the Vice President.', eff:{base:+3,press:-7,street:-6,congress:-6,auth:+1},
      res:'Chet delivers a warm, gracious remark on the steps and is photographed with all four living presidents. He keeps the photograph.' },
    { label:'Deliver a genuinely warm eulogy for a man you disliked.', eff:{base:-8,congress:+3,courts:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'Eleven minutes, no notes, one very good joke and one true thing. Two of the living presidents shake your hand afterwards and one of them means it.' }]},

{ id:'a-rating', title:'The Ratings', who:C.social, min:3, max:38, tags:['press','levity'],
  text:'Brayden has the overnight numbers for your address. 32 million. ' +
       'He also has your predecessor\'s number for the equivalent address. It is 34 million. He has printed only one of these.',
  choices:[
    { label:'Announce the biggest audience in television history.', eff:{base:+5,press:-7,auth:+2},
      res:'The claim is checked within four minutes by an intern at a trade publication and is wrong by fourteen million.' },
    { label:'Don\'t mention ratings. You\'re the President.', eff:{press:+5,street:+3,base:-2},
      res:'A remarkable act of self-denial that lasts nine days.' },
    { label:'Attack the ratings company.', eff:{base:+4,press:-6,street:-3,auth:+3},
      res:'A measurement firm that nobody outside advertising had heard of receives eleven thousand threatening messages in a weekend.' },
    { label:'Announce the ratings were terrible and that you are working on it.', eff:{base:+2,auth:-2}, wild:true,
      res:'Nobody has ever conceded a ratings loss. It defuses four days of coverage in one sentence and Brayden requires a lie-down.' }]}

);
})();
