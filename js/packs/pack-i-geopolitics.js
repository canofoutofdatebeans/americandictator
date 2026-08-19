/* ============================================================
   PACK I, GEOPOLITICS  (the world will not wait)
   Recurring conflicts drawn from today's map, where the choice is
   which side to take. Siding WITH a country can sign them up as an
   ally (trade income into the Treasury via run.allies, read by the
   War Room), and every choice moves the board. Original satire in
   the house voice, INSPIRED BY THE GENRE, NEVER COPIED FROM ANY
   REAL PERSON. Fictional leaders; real countries, which is the joke.

   13 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

/* Helpers so a choice can sign or tear up an alliance from inside `act`. */
const ally = (r, id, income) => { r.allies = r.allies || {}; r.allies[id] = income; };
const unally = (r, id) => { if (r.allies) delete r.allies[id]; };

AD.CARDS.push(

/* ══════════════ RUSSIA / UKRAINE ══════════════ */
{ id:'i-ukraine-war', title:'Whose War Is It', who:C.state, min:2, max:48, tags:['foreign','press','power'],
  src:'the war on Ukraine grinding into another winter',
  text:'Muriel lays down the map. "Russia is still grinding into Ukraine, sir, and everyone in that room wants ' +
       'to know where you stand. The base wants the money to stop. The allies want it to keep flowing. President ' +
       'Volkov wants a phone call. Whatever you say in the next hour becomes the policy."',
  choices:[
    { label:'Back Ukraine. Arm them, loudly.', eff:{press:+6,congress:+4,courts:+2,base:-4,street:-1,auth:+1},
      res:'You stand with Kyiv on live television. The alliance is delighted, the base is bored, and the invoices are enormous.',
      act:r=>ally(r,'ukrania',6) },
    { label:'Cut a deal with Volkov instead.', eff:{base:+5,press:-5,courts:-3,congress:-4,street:-2,auth:+2}, wild:true,
      res:'You skip the allies and call the aggressor directly. A "framework" is agreed that nobody else was in the room for. The base loves a strongman who takes your call.',
      act:r=>{ ally(r,'rus',12); unally(r,'ukrania'); } },
    { label:'Broker the peace. Take the credit.', eff:{press:+4,congress:+3,base:+1,auth:+3},
      res:'You announce yourself the only man who can end it. A summit is scheduled. Nothing is signed, but the word "Nobel" is said aloud, by you.' },
    { label:'Walk away. Not our continent.', eff:{base:+6,press:-4,congress:-4,street:-2,auth:+1},
      res:'You declare it a European problem and leave. The base cheers the thrift. Three capitals quietly start their own arrangements.',
      act:r=>unally(r,'ukrania') }]},

/* ══════════════ CHINA / TAIWAN ══════════════ */
{ id:'i-taiwan', title:'The Island Everyone Means', who:C.gen, min:5, max:48, tags:['foreign','power'],
  src:'a Chinese fleet exercising a little too near Taiwan',
  text:'General Tarrant has the satellite feed. "Chairman Chen is running the biggest drill yet around the island, ' +
       'sir. It is a rehearsal and he wants us to know it is a rehearsal. We can sail a carrier through the strait, ' +
       'or we can find something urgent to do elsewhere. Both get noticed."',
  choices:[
    { label:'Sail the carrier through. Slowly.', eff:{base:+6,press:-2,congress:+2,street:-2,auth:+4},
      res:'A hundred thousand tons of grey steel takes the scenic route through the strait. Nothing happens, expensively and on purpose.' },
    { label:'Sell Taiwan every weapon in the catalogue.', eff:{base:+4,press:+2,congress:+3,cash:+0.3,auth:+2},
      res:'You arm the island to the teeth and bill it for the privilege. Beijing is furious; your defence contractors name a wing after you.' },
    { label:'Reassure Chen it is "one country" and hang up.', eff:{base:-2,press:-4,congress:-4,courts:-1,auth:+1},
      res:'You say the phrase he wanted to hear and end the call. The trade desk exhales. Taipei reads the transcript twice.',
      act:r=>ally(r,'cathay',30) },
    { label:'Tweet a map. Let them guess.', eff:{base:+5,press:-3,street:-1,auth:+1}, wild:true,
      res:'You post a map with no caption. Six governments convene emergency meetings to interpret it. You meant nothing by it. You rarely do.' }]},

/* ══════════════ IRAN ══════════════ */
{ id:'i-iran-enrich', title:'The Centrifuges', who:C.spy, min:6, max:48, tags:['foreign','power'],
  src:'intelligence that Iran is a fortnight from the threshold',
  text:'The spy chief keeps her voice flat. "Iran is close, sir. Two weeks, our people think, from the threshold. ' +
       'We can strike the facility and set them back three years, we can strangle them with sanctions, or we can ' +
       'offer them a deal the last three presidents could not. Each option makes two of your friends and one enemy."',
  choices:[
    { label:'Strike the facility. Tonight.', eff:{base:+7,press:-4,courts:-3,street:-3,cash:-0.2,auth:+4},
      res:'The facility is rubble by dawn and the region is a tinderbox by noon. The base calls it strength. The Gulf calls its airlines.' },
    { label:'Sanction them into the stone age.', eff:{base:+4,press:+2,congress:+3,street:-1,auth:+2},
      res:'You cut them off from everything with a wire in it. Their economy folds; their program does not. It is slow, deniable, and endless.' },
    { label:'Cut the deal nobody else could.', eff:{base:-3,press:+6,congress:+2,courts:+3,auth:+1},
      res:'You sign the agreement the last three presidents could not and dare anyone to call it weak. Half of them do, immediately.' },
    { label:'Sell it to both sides. Quietly.', eff:{base:+3,press:-5,courts:-4,cash:+0.4,auth:+1}, wild:true,
      res:'Somehow a fortune changes hands and both Tehran and its enemies believe you are with them. Four ethics offices open files during the signing.' }]},

/* ══════════════ NATO / THE ALLIANCE ══════════════ */
{ id:'i-nato-dues', title:'Send the Invoice', who:C.state, min:3, max:48, tags:['foreign','base'],
  src:'a summit of allies expecting the usual reassurance',
  text:'Muriel has the seating chart. "They are all here, sir, and they are all nervous, which is exactly how the ' +
       'base likes them. You can recommit to defending them, you can make them pay first, or you can hint, just ' +
       'hint, that the whole arrangement is optional. The hint alone moves markets."',
  choices:[
    { label:'Recommit. Firmly. Boringly.', eff:{press:+5,congress:+4,courts:+2,base:-3,auth:+1},
      res:'You say the treaty means what it says. The allies sleep; the base yawns; nobody writes a song about Article Five.' },
    { label:'"Pay your share, then we\'ll talk."', eff:{base:+7,press:-3,congress:-2,cash:+0.2,auth:+3},
      res:'You turn a defence pact into an invoice on live television. Two governments announce sudden new spending. The base adores a man who makes friends pay.' },
    { label:'Hint the whole thing is optional.', eff:{base:+6,press:-5,congress:-5,street:-2,auth:+2}, wild:true,
      res:'You wonder aloud whether you would really show up. The hint is the policy. Somewhere, a smaller country starts a nuclear program of its own.' }]},

/* ══════════════ GREENLAND / THE ARCTIC ══════════════ */
{ id:'i-arctic', title:'The Top of the Map', who:C.treas, min:4, max:48, tags:['foreign','economy'],
  src:'the ice retreating over an ocean of rare earths',
  text:'Lyle has a map that is mostly blue where it used to be white. "The Arctic is opening, sir. Under that ice ' +
       'is a century of rare earths and a shipping lane worth a nation\'s GDP. Russia has planted a flag on the ' +
       'seabed. Greenland is, ah, technically not for sale. Everyone is being extremely polite and buying icebreakers."',
  choices:[
    { label:'Make Greenland an offer it can\'t refuse.', eff:{base:+6,press:-4,congress:-2,cash:-0.2,auth:+3}, wild:true,
      res:'You table a number for an island that keeps saying it is not for sale. The base is thrilled. The cartographers update nothing, yet.',
      act:r=>ally(r,'greenland',8) },
    { label:'Race Russia for the seabed. Build icebreakers.', eff:{base:+4,congress:+3,street:-1,cash:-0.4,auth:+2},
      res:'You commission a fleet that can smash ice for a living. It is expensive, it is slow, and it is, genuinely, a real strategy.' },
    { label:'Cut a polar carve-up with Volkov.', eff:{base:+3,press:-5,courts:-3,cash:+0.3,auth:+1},
      res:'You and Volkov quietly divide an ocean that belongs to neither of you. The map is redrawn over dinner. Six other Arctic nations read about it later.',
      act:r=>ally(r,'rus',12) }]},

/* ══════════════ THE STRONGMAN COUP ══════════════ */
{ id:'i-coup', title:'A Man on a Balcony', who:C.spy, min:5, max:48, tags:['foreign','press'],
  src:'a general seizing power in a country you need',
  text:'The spy chief has the overnight cables. "There has been a coup, sir, in a country we need for the base ' +
       'we have there. The new man is on a balcony, he is wearing a lot of medals, and he says he is a great ' +
       'admirer of yours. The old government is asking, from an undisclosed location, whether we still recognise them."',
  choices:[
    { label:'Recognise the general. He admires you.', eff:{base:+5,press:-5,courts:-3,congress:-3,auth:+3},
      res:'You are the first to congratulate the balcony. The base likes a man who likes you. Three democracies quietly downgrade their embassies.' },
    { label:'Condemn it. Demand elections.', eff:{base:-3,press:+6,congress:+4,courts:+3,auth:-1},
      res:'You do the correct, boring thing on principle. The base is unmoved and the base at your foreign base is nervous. History nods and moves on.' },
    { label:'Say nothing until you see the polls.', eff:{base:+2,press:-2,auth:+1},
      res:'You wait to see which way it settles before committing to having an opinion. It is cynical, it is safe, and it is, on the evidence, the house style.' }]},

/* ══════════════ THE TRADE WAR ══════════════ */
{ id:'i-trade-bloc', title:'They Formed a Club', who:C.treas, min:6, max:48, tags:['economy','foreign'],
  src:'the other economies forming a bloc that excludes you',
  text:'Lyle is holding a press release he does not enjoy. "They have formed a bloc, sir. A dozen of them, trading ' +
       'freely with each other and, pointedly, not with us. It is a direct response to the tariffs. We can muscle ' +
       'back in, we can build a rival club, or we can tariff the whole thing and see who blinks."',
  choices:[
    { label:'Tariff the entire bloc at once.', eff:{base:+7,street:-4,congress:-3,cash:-0.3,auth:+3},
      res:'You declare economic war on twelve countries before lunch. The base is euphoric. Somewhere, a container ship simply stops.' },
    { label:'Build a rival club. Ours is bigger.', eff:{base:+4,press:+2,congress:+3,cash:-0.2,auth:+2},
      res:'You assemble your own trading bloc, insist it is superior, and staff it with whoever will show up. Two members are unsure why they were invited.' },
    { label:'Muscle back in. Swallow the pride.', eff:{base:-4,press:+5,congress:+4,cash:+0.3,auth:-1},
      res:'You negotiate your way back into the club you were excluded from, quietly, at a table near the door. The economy recovers. The base is told nothing.' }]},

/* ══════════════ SOUTH CHINA SEA ══════════════ */
{ id:'i-scs-reef', title:'The Reef With a Runway', who:C.gen, min:6, max:48, tags:['foreign','power'],
  src:'a disputed reef that has grown an airstrip overnight',
  text:'General Tarrant has before-and-after photos. "It was a reef, sir. Now it is an airstrip with a reef ' +
       'underneath. China built it in a shipping lane that four other countries also claim. They are asking, all ' +
       'four of them, whether the United States intends to do anything, or merely to say things."',
  choices:[
    { label:'Sail right past it. Twice.', eff:{base:+5,press:-1,congress:+2,street:-1,auth:+3},
      res:'You conduct a freedom-of-navigation cruise close enough to read the signage. Nobody fires. Everyone photographs it. The point, such as it is, is made.' },
    { label:'Arm the four neighbours instead.', eff:{base:+3,press:+2,congress:+3,cash:+0.2,auth:+2},
      res:'You turn four nervous neighbours into four armed neighbours and let geography do the rest. Beijing files a complaint you frame and hang.' },
    { label:'Trade the reef for a better tariff.', eff:{base:-2,press:-3,courts:-2,cash:+0.3,auth:+1}, wild:true,
      res:'You quietly stop mentioning the airstrip in exchange for something with a dollar sign. Four allies notice the silence. So does the reef.',
      act:r=>ally(r,'cathay',30) }]},

/* ══════════════ NORTH KOREA ══════════════ */
{ id:'i-nk-missile', title:'The Birthday Launch', who:C.gen, min:4, max:48, tags:['foreign','levity'],
  src:'North Korea firing a missile roughly at the ocean',
  text:'General Tarrant is almost fond. "The Supreme Guide has fired another one, sir. Into the sea, mercifully, ' +
       'on what appears to be his own birthday. It is a message, and the message is that he would like you to say ' +
       'something about him. He always would. You have his number."',
  choices:[
    { label:'Call him. Compliment the missile.', eff:{base:+6,press:-5,courts:-2,street:-1,auth:+2}, wild:true,
      res:'You phone the hermit kingdom and praise the craftsmanship. He is thrilled. You are, the two of you agree, very good friends now. The State Department lies down.',
      act:r=>ally(r,'hermit',4) },
    { label:'Fire and fury. The old classic.', eff:{base:+5,press:-3,street:-2,auth:+3},
      res:'You threaten total annihilation in the morning and forget about it by lunch. He fires another one for the attention. It is a functioning relationship.' },
    { label:'Ignore him entirely. It kills him.', eff:{base:+2,press:+3,congress:+2,auth:+1},
      res:'You say nothing at all, which is the one thing he cannot bear. The next missile is bigger and even more clearly addressed to you.' }]},

/* ══════════════ THE HOSTAGES ══════════════ */
{ id:'i-hostages', title:'The Ones They\'re Holding', who:C.state, min:5, max:48, tags:['foreign','press'],
  src:'a hostile state holding citizens as leverage',
  text:'Muriel is careful with this one. "They are holding our people, sir, three of them, on charges nobody ' +
       'believes. They want a trade: a prisoner of theirs, or a pile of money, or a photograph of you shaking ' +
       'the hand of a man you have called a monster. The families are on television tonight either way."',
  choices:[
    { label:'Make the trade. Bring them home.', eff:{base:+3,press:+5,congress:-2,courts:-1,cash:-0.3,auth:+1},
      res:'You pay the ransom nobody admits is a ransom, and three citizens walk across a tarmac into the cameras. It is a good day and a terrible precedent.' },
    { label:'Refuse. We don\'t negotiate.', eff:{base:+5,press:-4,street:-2,auth:+2},
      res:'You hold the line on principle and the families hold a press conference. The base respects the spine. The negotiation continues, unofficially, forever.' },
    { label:'Shake the hand. Get the photo over with.', eff:{base:+4,press:-5,courts:-2,auth:+3}, wild:true,
      res:'You grip the hand of a man you have called a monster, on camera, and get your people back. The photo outlives the presidency. So do the citizens, which is the point.' }]},

/* ══════════════ THE CYBERATTACK ══════════════ */
{ id:'i-cyber', title:'The Lights Went Out in Three States', who:C.spy, min:6, max:48, tags:['foreign','power'],
  src:'a state-sponsored cyberattack on the grid',
  text:'The spy chief does not blink. "Someone turned off the power in three states for nine hours, sir. We know ' +
       'who. We can prove it to ourselves and not, quite, to a courtroom. We can hack them back, we can sanction ' +
       'them, or we can keep it quiet so the markets do not learn how easy that was."',
  choices:[
    { label:'Hack them back. Harder.', eff:{base:+5,press:-2,courts:-3,street:-1,auth:+3},
      res:'Something goes dark on their side of the world and nobody signs for it. It is deniable, it is proportionate, and it starts a clock nobody can see.' },
    { label:'Sanction them in daylight.', eff:{base:+3,press:+4,congress:+3,cash:-0.1,auth:+2},
      res:'You name them, shame them, and freeze what you can reach. It is the lawful option, and it does approximately nothing to the lights.' },
    { label:'Bury it. The markets mustn\'t know.', eff:{base:+1,press:-4,courts:-2,cash:+0.1,auth:+1},
      res:'You keep the whole thing quiet and hope. The markets never learn how thin the ice is. Neither, for now, does anyone who could fix it.' }]},

/* ══════════════ THE REFUGEES ══════════════ */
{ id:'i-refugees', title:'The Column at the Border', who:C.home, min:3, max:48, tags:['street','base','foreign'],
  src:'a mass movement of people arriving at once',
  text:'Duane has the overnight numbers. "A war two countries over has put a column of people on the road, sir, ' +
       'and the road ends at our border. The base wants a wall with a moat. The churches want a welcome. The ' +
       'cameras want a picture, and they will get one of the two, depending on you."',
  choices:[
    { label:'Close it. Cameras, wall, the works.', eff:{base:+8,press:-6,courts:-4,street:-2,auth:+3},
      res:'You seal the border on live television with maximum theatre. The base is jubilant. The picture the cameras got is the one you will be asked about forever.' },
    { label:'Process them. Quietly, by the book.', eff:{base:-5,press:+6,congress:+3,courts:+4,street:+2,auth:-1},
      res:'You do the lawful, logistical, unphotogenic thing. It works and it wins you nothing. The base hears only that you did not build the moat.' },
    { label:'Ship them to a rival governor\'s state.', eff:{base:+6,press:-4,courts:-2,street:-3,auth:+2}, wild:true,
      res:'You put the problem on a bus to somebody who annoyed you. It is cruel, it is a stunt, and it leads the news in exactly the way you hoped.' }]},

/* ══════════════ THE PEACE PRIZE ══════════════ */
{ id:'i-nobel', title:'The Phone Call From Oslo', who:C.state, min:20, max:48, tags:['foreign','press','levity'],
  src:'a genuine shot at ending a real war, and a prize',
  text:'Muriel can hardly believe she is saying it. "There is a real chance here, sir. Two governments that have ' +
       'been shooting at each other for a decade will both be in the same building next week, and they will both ' +
       'take your call. It could actually end. It could also, if you oversell it, collapse on camera. And yes, ' +
       'people are already saying the word."',
  choices:[
    { label:'Do the quiet diplomacy. Land it.', eff:{press:+7,congress:+5,courts:+3,base:-2,auth:+4},
      res:'You put your head down, work the phones for a fortnight, and a war actually ends. It is the best thing you will ever do and it trends for six hours.' },
    { label:'Announce the prize before the peace.', eff:{base:+6,press:-5,congress:-2,auth:+2}, wild:true,
      res:'You declare victory, and yourself a laureate, several crucial days early. One delegation walks out over the wording of your tweet. The war, briefly, resumes.' },
    { label:'Make them sign at your hotel.', eff:{base:+4,press:-3,cash:+0.3,courts:-2,auth:+2},
      res:'Peace breaks out in a ballroom with your name over the door and a room-service surcharge. It holds. The branding, everyone agrees, is the story.' }]}

);
})();
