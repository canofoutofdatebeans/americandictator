/* ============================================================
   PACK J, CABINET  (any month)
   The Cabinet & the West Wing: staff chaos, loyalty tests,
   firings by tweet, the revolving door, leaks, the acting-
   secretary carousel, cabinet meetings as loyalty pageants,
   and the aides who write memos they hope survive them.
   Original satire in the house voice, INSPIRED BY THE GENRE,
   NEVER COPIED FROM ANY REAL PERSON. Fictional stand-ins only.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE ACTING-SECRETARY CAROUSEL ══════════════ */

{ id:'j-acting-secretary', title:'The Acting Secretary', who:C.cos, min:1, max:48, tags:['cabinet'],
  src:'a department run for months by an "acting" head who never gets the nomination',
  text:'Deborah has the org chart. "Homeland has been \'acting\' for eleven months, sir. So has Labor. ' +
       'It saves you a confirmation hearing and it means the person running the department can be replaced ' +
       'on a Tuesday with a text message. Some of them have started introducing themselves that way at dinner parties."',
  choices:[
    { label:'Keep everyone acting. Forever, if it works.', eff:{base:+6,congress:-6,courts:-3,auth:+4},
      res:'Four departments run indefinitely without a confirmed head answerable to anyone but you. The org chart becomes, functionally, a group chat.' },
    { label:'Send the real nominations up. Let the Senate work.', eff:{base:-3,congress:+6,press:+3,auth:+1},
      res:'You submit actual names for actual votes. It is slow, constitutional, and deeply unremarkable, which is the entire point of the exercise.' },
    { label:'Make "acting" the permanent job title. Print new cards.', eff:{base:+4,press:-3,congress:-3,auth:+2},
      res:'The business cards now read "Acting Secretary" with no asterisk and no plan to remove it. HR asks, once, whether that is legal. It is not answered.' },
    { label:'Let the interns vote on who is acting this week.', eff:{base:+3,press:-4,congress:-3,auth:-1}, wild:true,
      res:'A department of four hundred federal employees is nominally run by whoever won a Friday intern poll. Morale is, against all odds, briefly excellent.' }]},

{ id:'j-midnight-firing', title:'The Midnight Firing', who:C.social, min:1, max:48, tags:['cabinet','press'],
  src:'a cabinet dismissal announced on social media before the person was told',
  text:'Brayden is holding his phone like it might go off. "The Homeland Secretary found out he was fired ' +
       'from a push notification, sir. So did his chief of staff. So did his wife, who was at his retirement ' +
       'lunch for somebody else at the time. I already posted it. Should I have waited."',
  choices:[
    { label:'Post the next three firings the same way. Efficient.', eff:{base:+7,press:-6,congress:-4,auth:+3},
      res:'Dismissal by notification becomes house style. It is fast, it is cruel, and it means nobody in the building sleeps with their phone face down anymore.',
      act: r => AD.bumpCabinetChurn(r, 3) },
    { label:'Call him first next time. It costs nothing.', eff:{base:-3,press:+5,congress:+3,auth:0},
      res:'You have someone phone the man before the post goes up. It is the bare minimum of decency and it is treated, internally, as a bold reform.' },
    { label:'Fire the wife\'s retirement-lunch host too, for the optics.', eff:{base:+4,press:-6,street:-3,auth:+1},
      res:'You widen the blast radius to a man whose only crime was hosting a lunch. The lunch, notably, was very good.' },
    { label:'Have Alvin deliver the news with a fruit basket.', eff:{base:+3,press:-3,congress:-3,cash:-0.1,auth:-1}, wild:true,
      res:'The Chief Usher arrives with a pear arrangement and the news at the same time. The Secretary keeps the pears. He does not keep the job.' }]},

{ id:'j-loyalty-pageant', title:'The Loyalty Pageant', who:C.vp, min:2, max:48, tags:['cabinet','loyalty'],
  src:'a televised cabinet meeting where members took turns praising the leader',
  text:'Chet is practicing his line in the doorway. "Tradition now, sir, going around the table, each secretary ' +
       'says something grateful about you on camera before the meeting starts. Last week the Agriculture ' +
       'Secretary used the word \'blessed\' four times. He does not believe in blessings. He believes in his pension."',
  choices:[
    { label:'Make it mandatory. Score them on sincerity.', eff:{base:+7,congress:-4,courts:-2,street:-3,auth:+3},
      res:'You institute a graded loyalty tribute at the top of every meeting. Two secretaries begin rehearsing in the car. One starts crying, from boredom, not devotion.' },
    { label:'Cut the segment. Start the meeting with the agenda.', eff:{base:-3,congress:+4,press:+4,auth:+1},
      res:'You skip the tribute and open with policy. The room exhales so audibly it is picked up by the microphones and cut from the broadcast.' },
    { label:'Have them rank each other\'s tributes out loud.', eff:{base:+5,press:-4,street:-3,auth:+2},
      res:'A cabinet of grown adults now scores one another\'s flattery in front of a camera. The Interior Secretary gives the Attorney General a six out of ten and means it as an insult.' },
    { label:'Skip the tributes, read the room a poem instead.', eff:{base:+2,press:-3,congress:-2,auth:-2}, wild:true,
      res:'You recite four stanzas of something you wrote on the plane about the nobility of public service. Nobody claps first. Everybody claps eventually.' }]},

{ id:'j-tweet-fired', title:'Fired By Tweet', who:C.press, min:1, max:48, tags:['cabinet','press'],
  src:'a cabinet dismissal delivered as a single public post with no private call',
  text:'Kaylee reads the draft back to you. "\'Effective immediately.\' That\'s the whole post, sir. No call, ' +
       'no letter, no fifteen minutes to clean out a desk with dignity. The Secretary is currently mid-flight ' +
       'and will land to find out from the flight attendant, who is, admittedly, handling it better than we are."',
  choices:[
    { label:'Post it now. Timing is part of the message.', eff:{base:+7,press:-5,congress:-3,auth:+3},
      res:'The post goes out mid-flight, as planned. The cruelty is, functionally, the entire strategy, and it is received by the base as strength.',
      act: r => AD.bumpCabinetChurn(r, 1) },
    { label:'Hold the post until the plane lands. Small mercy.', eff:{base:-2,press:+4,congress:+3,auth:0},
      res:'You delay a public humiliation by ninety minutes so a man can hear the news on solid ground. It costs you nothing and somehow feels expensive to grant.' },
    { label:'Have Kaylee draft it as a "thank you for your service."', eff:{base:+3,press:-3,congress:-2,auth:+1},
      res:'The firing is dressed as gratitude. Everyone in the building can read past the first sentence. Nobody says so out loud.' },
    { label:'Announce the firing, then un-fire him an hour later.', eff:{base:+3,press:-5,congress:-2,street:-2,auth:-1}, wild:true,
      res:'You reverse course before the plane even lands, for reasons nobody, including you, can fully articulate. The Secretary keeps the job and a very good story.' }]},

/* ══════════════ THE MEMO THAT SURVIVES THEM ══════════════ */

{ id:'j-cya-memo', title:'The CYA Memo', who:C.lawyer, min:3, max:48, tags:['cabinet','courts'],
  src:'staff quietly documenting instructions for their own later protection',
  text:'Sy has a folder he is visibly reluctant to open. "Three cabinet secretaries are keeping private memos ' +
       'of every verbal instruction you give them, sir. Timestamped. It is not disloyalty, exactly. It is ' +
       'insurance, and I would know, because I started mine in February."',
  choices:[
    { label:'Demand the memos. Read every one. Personally.', eff:{base:+7,congress:-4,courts:-4,press:-3,auth:+3},
      res:'You seize the private paper trail your own staff kept to protect themselves from you. The chilling effect is immediate and it does not chill the memo-writing, only the honesty in future ones.' },
    { label:'Let them keep their notes. You have nothing to hide.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You allow a paper trail of your own decisions to exist, unmolested. It is either total confidence or total indifference. History will decide which.' },
    { label:'Start dictating everything through a lawyer, on the record.', eff:{base:+2,courts:+2,press:-2,auth:+1},
      res:'Every instruction now runs through counsel first, which is slower, safer, and drains all the fun out of governing by whim.' },
    { label:'Write your own memo contradicting all of theirs.', eff:{base:+4,press:-4,courts:-3,auth:0}, wild:true,
      res:'You produce a single competing document asserting that everything happened differently. Three separate memos now disagree about the same Tuesday, which is, Sy notes, its own kind of protection.' }]},

{ id:'j-leaked-transcript', title:'The Leaked Transcript', who:C.press, min:4, max:48, tags:['cabinet','press'],
  src:'a verbatim cabinet-meeting transcript reaching a newsroom',
  text:'Kaylee slides a printout across the desk. Half the paragraph is highlighted. "Somebody transcribed the ' +
       'closed cabinet meeting, sir, word for word, including the part where you called the Commerce Secretary ' +
       '\'furniture.\' It is running in an hour unless we give them something better to run instead."',
  choices:[
    { label:'Polygraph the whole cabinet. Nobody leaves the room.', eff:{base:+6,press:-4,congress:-3,street:-2,auth:+3},
      res:'You lock a dozen sitting cabinet secretaries in a room with a machine until someone confesses. Nobody does. Everyone remembers who asked.' },
    { label:'Confirm it, apologize for the tone, move on.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:'You own the quote and the moment passes in a news cycle instead of three. It is the cheapest possible exit and almost nobody takes it.',
      act: r => AD.moveTruth(r, -5) },
    { label:'Claim the transcript is fabricated. Threaten the outlet.', eff:{base:+5,press:-6,courts:-3,auth:+2},
      res:'You deny a true thing loudly enough that some people believe the denial. The outlet publishes the audio the following week, just to be clear.',
      act: r => AD.moveTruth(r, +7) },
    { label:'Release your own "corrected" transcript with better jokes.', eff:{base:+4,press:-3,courts:-4,auth:+1}, wild:true,
      res:'A revised version circulates in which your line about the Commerce Secretary is wittier and, unfortunately, still recognizably the same insult.',
      act: r => AD.moveTruth(r, +5) }]},

{ id:'j-drawer-letter', title:'The Letter In The Drawer', who:C.cos, min:6, max:48, tags:['cabinet'],
  src:'a resignation letter kept pre-written and ready by senior staff',
  text:'Deborah found it while looking for a stapler. "The Secretary of Labor has had a signed resignation ' +
       'letter in his desk drawer for four months, sir. Dated but blank on the day. He says it lets him sleep. ' +
       'I checked. Six others have one too."',
  choices:[
    { label:'Demand every drawer. Confiscate the letters.', eff:{base:+6,congress:-4,press:-3,auth:+3},
      res:'You collect seven pre-written resignations like trophies. It does not make anyone more loyal. It makes seven people write a second, hidden one.' },
    { label:'Leave it alone. A drawer is not a crime.', eff:{base:-2,congress:+3,press:+2,auth:0},
      res:'You decide a man\'s private insurance policy is his own business. It is a small mercy that costs you nothing and earns you no credit.' },
    { label:'Require everyone to pre-sign a loyalty letter instead.', eff:{base:+5,congress:-3,courts:-2,auth:+2},
      res:'You mandate the opposite document: a standing pledge instead of a standing exit. The building now has two drawers per desk.' },
    { label:'Write your own resignation letter and leave it visible.', eff:{base:+3,press:-2,congress:-2,auth:-3}, wild:true,
      res:'You leave a dated, unsigned letter of your own on the desk, in plain view of the next visitor. Nobody mentions it. Everyone reads it.' }]},

/* ══════════════ CABINET MEETINGS AS THEATER ══════════════ */

{ id:'j-cameras-in', title:'Cameras In The Room', who:C.press, min:1, max:24, tags:['cabinet','press'],
  src:'a full cabinet meeting opened to television for its introductory minutes',
  text:'Kaylee has the pool schedule. "Forty minutes of camera time before the doors close, sir. Long enough ' +
       'for a monologue, not long enough for policy. Everyone in that room now performs the first forty ' +
       'minutes and negotiates the real budget after the cameras leave."',
  choices:[
    { label:'Extend it to the whole meeting. Full transparency.', eff:{base:+6,congress:-5,courts:-2,auth:+2},
      res:'Every cabinet meeting is now televised start to finish. Nothing substantive is decided in the room anymore; it all happens in hallways afterward, off the record.' },
    { label:'Cut the cameras entirely. Meet like adults.', eff:{base:-3,congress:+4,press:+2,auth:+1},
      res:'You close the doors and let the cabinet actually govern in private, the old-fashioned way. The base misses the show. The policy improves slightly.' },
    { label:'Script the first forty minutes. Rehearse it twice.', eff:{base:+4,press:-3,congress:-2,auth:+1},
      res:'The introductory monologue is now workshopped like a pilot episode. It tests well with a focus group and terribly with anyone who was actually in the room.' },
    { label:'Bring in a laugh track for the applause lines.', eff:{base:+3,press:-4,street:-3,auth:0}, wild:true,
      res:'A sound technician is quietly employed to sweeten cabinet-meeting applause for broadcast. Nobody in the room asked for it. Nobody in the room objects, either.' }]},

{ id:'j-praise-order', title:'The Speaking Order', who:C.cos, min:2, max:40, tags:['cabinet','loyalty'],
  src:'cabinet members seated and called on in strict order of visible favor',
  text:'Deborah has the seating chart, which changes weekly. "You have started reordering the table by who ' +
       'pleased you most, sir. The Secretary of Commerce has been demoted to the far end twice this month. ' +
       'He has started bringing his own name card, just in case."',
  choices:[
    { label:'Make the chart public. Let them see where they rank.', eff:{base:+6,congress:-4,street:-3,auth:+2},
      res:'You publish the pecking order for the whole building to see. It produces exactly the anxious, competitive loyalty you wanted, and exactly the resentment you didn\'t plan for.' },
    { label:'Go back to alphabetical seating. Boring and fair.', eff:{base:-3,congress:+4,press:+3,auth:0},
      res:'You return the table to alphabetical order, ending the ranking system entirely. Commerce keeps his seat. He still brings the name card, out of habit now.' },
    { label:'Rank them by a metric nobody can question: applause volume.', eff:{base:+4,press:-3,street:-2,auth:+1},
      res:'A decibel meter is, briefly, the most consequential instrument in the West Wing. The Secretary of Agriculture, a large man with strong lungs, rises three spots.' },
    { label:'Seat them by height instead. Cleanest metric there is.', eff:{base:+2,press:-4,congress:-3,auth:-1}, wild:true,
      res:'You abandon merit and loyalty alike for a tape measure. It is, everyone privately agrees, the fairest system the cabinet has ever used.' }]},

{ id:'j-cabinet-shuffle-photo', title:'The Group Photo', who:C.press, min:1, max:48, tags:['cabinet','levity'],
  src:'an official cabinet portrait requiring constant reshoots after turnover',
  text:'Kaylee has the printer bill. "This is the fourth official cabinet photo this year, sir. Three departments ' +
       'have new heads since the last one. At this rate we retire the frame before we retire the presidency."',
  choices:[
    { label:'Freeze the photo. New hires just stand off-camera forever.', eff:{base:+4,press:-3,congress:-2,auth:+1},
      res:'You solve turnover by simply not updating the record. The official portrait now depicts a cabinet that, technically, no longer exists.' },
    { label:'Reshoot properly. It is a small, honest cost.', eff:{base:-2,press:+3,cash:-0.1,auth:0},
      res:'You pay for another photographer, another frame, another afternoon of squinting into studio lights. It is unglamorous and it is accurate, which is rarer.' },
    { label:'Digitally paste new heads onto the old bodies.', eff:{base:+3,press:-5,courts:-2,auth:+1},
      res:'A junior designer is asked to Photoshop three new faces onto three old suits. The lighting does not match. Nobody in the photo is standing where they appear to be standing.' },
    { label:'Skip the photo. Commission a group portrait, in oil.', eff:{base:+3,press:-3,congress:-4,cash:-0.3,auth:0}, wild:true,
      res:'A painter is retained to render the current cabinet in oil, at considerable expense and considerable delay. Two subjects have left the administration before the paint dries.' }]},

/* ══════════════ THE REVOLVING DOOR ══════════════ */

{ id:'j-revolving-door', title:'The Revolving Door', who:C.ethics, min:8, max:48, tags:['cabinet','courts'],
  src:'former officials moving directly into lobbying the agencies they used to run',
  text:'Miriam has the list, and it is longer than it should be. "Six former secretaries are now lobbying the ' +
       'exact departments they used to run, sir. The cooling-off period is technically eighteen months. Two of ' +
       'them found a technicality inside of eighteen days."',
  choices:[
    { label:'Waive the cooling-off period for loyal alumni.', eff:{base:+6,congress:-4,courts:-4,press:-3,auth:+3},
      res:'You let your own former cabinet walk straight into the lobbies of the departments they ran. It is legal, it is fast, and it is the cleanest bribe in Washington because nobody has to call it one.' },
    { label:'Enforce the full eighteen months. No exceptions.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You hold the line on the actual rule, which annoys several people who did you real favors. It is the correct call and it costs you two Christmas cards.' },
    { label:'Extend the ban to three years, for everyone but you.', eff:{base:+3,press:-3,congress:-2,auth:+1},
      res:'You tighten the rule for future administrations while quietly grandfathering the current exits. It reads as reform. It functions as a loophole with a longer runway.' },
    { label:'Hire the lobbyists back as "special advisers." No lobbying, technically.', eff:{base:+4,press:-4,courts:-3,cash:-0.2,auth:+2}, wild:true,
      res:'You close the revolving door by simply keeping everyone inside the building, on a new title and the same salary. Miriam files a memo. The memo is, itself, ignored.' }]},

{ id:'j-golden-parachute', title:'The Golden Parachute', who:C.treas, min:10, max:48, tags:['cabinet','money'],
  src:'a departing official negotiating an unusually generous exit package',
  text:'Lyle has the severance terms in front of him and does not love them. "The outgoing Secretary of Energy ' +
       'wants a consulting contract on the way out, sir. Two years, seven figures, and a title with the word ' +
       '\'senior\' in it. He is, I should say, leaving under something close to a cloud."',
  choices:[
    { label:'Approve it. Loyalty on the way out matters too.', eff:{base:+5,congress:-4,press:-4,cash:-0.4,auth:+2},
      res:'You pay a man handsomely to leave quietly and say nothing unflattering on the way out. It works exactly as advertised, which is its own kind of confession.' },
    { label:'Deny the contract. Standard exit, nothing more.', eff:{base:-2,congress:+4,press:+3,auth:+1},
      res:'You send him out the door with a handshake and nothing else. He is unhappy. The budget is, marginally, in better shape.' },
    { label:'Approve it, but bury the number in three different line items.', eff:{base:+3,press:-4,courts:-3,cash:-0.3,auth:+1},
      res:'The consulting fee survives, disguised across a budget nobody reads in full. An auditor finds it eleven months later and files a very polite question.' },
    { label:'Offer him a lighthouse instead of cash. There is one available.', eff:{base:+2,press:-5,courts:-2,cash:-0.1,auth:-1}, wild:true,
      res:'You settle a seven-figure grievance with a decommissioned federal lighthouse on a rocky, uninsurable stretch of coast. He takes it. He seems, genuinely, delighted.' }]},

{ id:'j-book-deal', title:'The Tell-All', who:C.lawyer, min:14, max:48, tags:['cabinet','press'],
  src:'a fired official landing a lucrative memoir deal',
  text:'Sy is holding an advance-copy proof with visible dread. "The former Chief of Staff before Deborah has ' +
       'a book coming, sir. Eight figures. It is titled, and I want to be precise here, *In The Room Where It ' +
       'Should Not Have Happened*. We get a redacted copy in three weeks."',
  choices:[
    { label:'Sue to block publication. Tie it up in court.', eff:{base:+6,courts:-6,press:-4,auth:+2},
      res:'You attempt prior restraint on a memoir, a legal move with an unbroken losing streak. The lawsuit guarantees the book a bestseller list it might not have reached alone.' },
    { label:'Let it publish. Respond to nothing.', eff:{base:-3,press:+4,courts:+3,auth:+1},
      res:'You decline to dignify the book with a response of any kind. It sells well for six weeks and is forgotten by the eighth, which is the correct outcome.' },
    { label:'Commission a rival tell-all from someone still loyal.', eff:{base:+4,press:-4,cash:-0.2,auth:+1},
      res:'A competing memoir is rushed to print by a still-serving aide. It reads exactly as authentic as it is, which is to say, not very.' },
    { label:'Buy every copy in the first print run yourself.', eff:{base:+4,press:-4,courts:-3,cash:-0.4,auth:+1}, wild:true,
      res:'You purchase the entire first printing to keep it off shelves. The publisher, thrilled, orders a second printing twice the size. You have personally funded the sequel.' }]},

/* ══════════════ THE LEAK ══════════════ */

{ id:'j-mole-hunt', title:'The Mole Hunt', who:C.spy, min:4, max:48, tags:['cabinet','loyalty'],
  src:'an internal investigation into who is talking to reporters',
  text:'Errol keeps his voice level, which is its own kind of warning. "We can narrow the leak to nine people ' +
       'with access, sir. Narrowing further means reading their private phones, which is legal for about four ' +
       'of them and a felony for the rest."',
  choices:[
    { label:'Read all nine phones. Sort out the felony part later.', eff:{base:+6,courts:-7,congress:-4,press:-3,auth:+3},
      res:'You authorize surveillance on your own cabinet on a legal theory that will not survive contact with a judge. It does not find the leaker. It finds five unrelated affairs.' },
    { label:'Narrow it to the four you can legally check.', eff:{base:-2,courts:+4,congress:+3,auth:+1},
      res:'You stay inside the four names the law actually permits. It is slower, it is proper, and it is the version of this story that does not end in a subpoena for you.' },
    { label:'Announce publicly that the leaker has been identified. Bluff.', eff:{base:+5,press:-5,street:-2,auth:+2},
      res:'You claim a name you do not have, hoping the real leaker panics and confesses. Instead, three innocent staffers quit out of sheer paranoia.' },
    { label:'Feed each of the nine a slightly different fake detail.', eff:{base:+3,press:-3,courts:-4,auth:0}, wild:true,
      res:'A classic canary trap, nine variants deep. It works beautifully and also confirms, to Errol\'s quiet horror, that at least three of the nine are talking to reporters independently.' }]},

{ id:'j-anonymous-oped', title:'The Anonymous Op-Ed', who:C.press, min:6, max:48, tags:['cabinet','press'],
  src:'a senior official publishing an unsigned essay describing internal resistance',
  text:'Kaylee drops the newspaper on the desk, folded to the page. "Somebody \'senior\' in this administration ' +
       'just published, anonymously, a description of quietly slow-walking your orders for the good of the country, ' +
       'sir. It is well written. It is, worse, plausible about almost anyone in the building."',
  choices:[
    { label:'Demand every cabinet member deny it, on camera, individually.', eff:{base:+6,press:-5,congress:-3,auth:+3},
      res:'You force fourteen denials in a single afternoon. Thirteen sound convincing. One sounds like a hostage video, and the internet notices immediately.' },
    { label:'Ignore it. A byline-free essay is not worth the airtime.', eff:{base:-2,press:+4,congress:+2,auth:0},
      res:'You decline to feed the story oxygen. It runs its course in four days instead of four weeks, which is the entire trick of ignoring things well.' },
    { label:'Launch a handwriting-and-syntax analysis of the whole senior staff.', eff:{base:+5,press:-4,courts:-3,auth:+2},
      res:'A linguistics contractor is paid to compare sentence rhythm across fourteen writing samples. The results are inconclusive and the contractor\'s invoice is not.' },
    { label:'Publish your own anonymous op-ed praising yourself.', eff:{base:+4,press:-5,congress:-2,auth:0}, wild:true,
      res:'An unsigned essay by "a senior official" appears, praising your instincts and your hair. Nobody believes it came from inside the building. It did.' }]},

{ id:'j-whistleblower-hotline', title:'The Whistleblower Hotline', who:C.ethics, min:1, max:48, tags:['cabinet','courts'],
  src:'an internal reporting line meant to protect employees who flag wrongdoing',
  text:'Miriam has the call log, which is thick. "The internal ethics hotline logged two hundred and eleven ' +
       'calls this quarter, sir, almost all about the same three decisions. The law says we cannot retaliate ' +
       'against callers. It does not say we cannot figure out who they are."',
  choices:[
    { label:'Trace every call. Quietly reassign the callers.', eff:{base:+6,courts:-7,congress:-3,press:-3,auth:+3},
      res:'You identify and sideline two hundred employees who used a hotline built specifically to protect them. It is textbook retaliation, and the file on it is thick enough to stand on its own.' },
    { label:'Leave the hotline alone. That is what it is for.', eff:{base:-3,courts:+5,press:+3,auth:+1},
      res:'You let the protected reporting channel do the one job it has. It is, structurally, the most boring possible choice, and structurally the correct one.' },
    { label:'Route future calls through a "customer satisfaction" survey instead.', eff:{base:+4,press:-3,courts:-3,auth:+1},
      res:'The hotline is quietly rebranded and gutted of its legal protections. Calls still come in. They now go, functionally, nowhere.' },
    { label:'Answer the hotline yourself for one afternoon.', eff:{base:+2,press:-2,courts:-5,street:+2,auth:-2}, wild:true,
      res:'You personally field forty minutes of anonymous complaints about your own administration. Several are, you privately admit, fair.' }]},

/* ══════════════ THE MEMO WAR ══════════════ */

{ id:'j-competing-memos', title:'The Competing Memos', who:C.cos, min:3, max:48, tags:['cabinet'],
  src:'two rival factions in the White House sending contradictory guidance to the same agency',
  text:'Deborah has two memos, both stamped urgent, both signed by senior staff, saying opposite things. "The ' +
       'agency has both of these on the same desk right now, sir. They called to ask which administration ' +
       'they currently work for."',
  choices:[
    { label:'Let both factions fight it out. Best memo wins.', eff:{base:+5,congress:-4,courts:-3,auth:+2},
      res:'You let two wings of your own staff duke it out in writing, unrefereed. The agency does nothing for three weeks, which, on reflection, may be the actual policy.' },
    { label:'Pick one memo, cancel the other, in writing.', eff:{base:-2,congress:+4,press:+2,auth:+1},
      res:'You make an actual decision and put it on paper. It is the single most useful thing a Chief of Staff will do all month, and it takes four minutes.' },
    { label:'Issue a third memo contradicting both of the first two.', eff:{base:+4,press:-4,congress:-3,auth:+1},
      res:'A third document arrives, agreeing with neither prior one. The agency now has three positions and zero policy, filed alphabetically.' },
    { label:'Have the two factions arm-wrestle for it. Loser drafts the apology.', eff:{base:+3,press:-4,street:-3,auth:-1}, wild:true,
      res:'A genuine arm-wrestling match settles a live interagency policy dispute in the Roosevelt Room. The winner is visibly embarrassed by how well this worked.' }]},

{ id:'j-shadow-cabinet', title:'The Shadow Cabinet', who:C.cos, min:12, max:48, tags:['cabinet','loyalty'],
  src:'an informal, unofficial circle of advisers running policy in parallel to the real cabinet',
  text:'Deborah is choosing her words with care. "There is a second cabinet now, sir. Unofficial. No titles, ' +
       'no confirmation hearings, meets in the residence after the real one goes home. Half the actual ' +
       'secretaries have started asking me who is really in charge of their own departments."',
  choices:[
    { label:'Formalize the shadow group. Give them real authority.', eff:{base:+8,congress:-6,courts:-4,press:-3,auth:+4},
      res:'You install an unconfirmed inner circle with more real power than the confirmed cabinet. It is fast, loyal, and legally indefensible, all three at once.' },
    { label:'Disband it. One cabinet, confirmed, accountable.', eff:{base:-4,congress:+6,courts:+3,auth:+1},
      res:'You send the after-hours advisers home and route decisions back through the people the Senate actually vetted. It is slower. It is also, structurally, a government.' },
    { label:'Keep both, but never let them meet each other.', eff:{base:+5,press:-4,congress:-3,auth:+2},
      res:'You run two parallel cabinets who are formally unaware of each other\'s existence, which lasts right up until they are both invited to the same holiday party.' },
    { label:'Merge them into one giant meeting. Let it sort itself out.', eff:{base:+3,press:-3,congress:-3,auth:-1}, wild:true,
      res:'Twenty-six people who were not supposed to know about one another are seated at the same table. The meeting runs four hours. Nothing is decided. Everyone learns everything.' }]},

/* ══════════════ HIRING AND FIRING ══════════════ */

{ id:'j-unqualified-cousin', title:'The Cousin Hire', who:C.ethics, min:1, max:36, tags:['cabinet'],
  src:'a relative placed in a senior post well outside their experience',
  text:'Miriam has the resume, and it is short. "Your wife\'s cousin has been named Deputy Secretary of Energy, ' +
       'sir. His prior experience is a solar-powered phone charger kiosk at a state fair. He starts Monday. ' +
       'He has asked, twice, whether the job comes with a car."',
  choices:[
    { label:'Promote him to Under Secretary too. Keep it in the family.', eff:{base:+5,congress:-4,press:-4,courts:-2,auth:+2},
      res:'You stack a second family title onto an agency he cannot yet find on a map. The energy grid, remarkably, keeps running, mostly on momentum from before he arrived.' },
    { label:'Give him a title with no actual authority.', eff:{base:+1,press:+2,congress:+1,auth:0},
      res:'He gets a nameplate, a parking spot, and a portfolio that touches nothing important. It is the honest solution to a dishonest problem.' },
    { label:'Send him somewhere he can do less damage. Ambassador to a small island.', eff:{base:+3,press:-3,congress:-2,auth:+1},
      res:'He is dispatched to a nation of eleven thousand people with a lovely climate and no energy grid to break. He sends postcards.' },
    { label:'Have him shadow Alvin the usher for a month first.', eff:{base:+2,press:-2,congress:-5,auth:-1}, wild:true,
      res:'The Deputy Secretary of Energy spends four weeks learning to fold napkins and locate light switches before touching an actual policy file. He is, by all accounts, excellent at napkins.' }]},

{ id:'j-purity-test', title:'The Purity Test', who:C.cos, min:6, max:44, tags:['cabinet','loyalty'],
  src:'new hires screened for past criticism of the administration before being cleared',
  text:'Deborah has a spreadsheet of old tweets and op-eds. "Vetting now includes a full search of everything ' +
       'a nominee has ever said about you, sir, going back a decade. We disqualified a very good Deputy ' +
       'Solicitor General over a college newspaper column. He was nineteen. It was about parking."',
  choices:[
    { label:'Extend the search back further. High school, if it exists.', eff:{base:+6,congress:-5,press:-4,auth:+2},
      res:'You widen the loyalty screen to adolescence. The applicant pool shrinks to people who have never expressed an opinion about anything, ever, which turns out to be a small and strange group.' },
    { label:'Only screen for actual conflicts of interest. Skip the tweets.', eff:{base:-3,congress:+5,courts:+3,auth:+1},
      res:'You narrow vetting back to the things that actually matter. The talent pool triples overnight, and so, quietly, does the competence of the building.' },
    { label:'Keep the tweet search, but only enforce it on people you dislike.', eff:{base:+4,press:-4,courts:-3,auth:+1},
      res:'The rule stays on the books and is applied selectively, which everyone in the building understands within a week and nobody says aloud.' },
    { label:'Have Madison do the vetting. She is very online.', eff:{base:+3,press:-3,courts:-4,auth:-1}, wild:true,
      res:'Somebody\'s Niece is deputized to scroll a decade of a nominee\'s digital footprint. She finds things three background-check firms missed and one thing nobody needed to know.' }]},

{ id:'j-hiring-freeze', title:'The Hiring Freeze', who:C.broom, min:2, max:30, tags:['cabinet','money'],
  src:'a blanket freeze on federal hiring, applied unevenly across agencies',
  text:'Roscoe has a clipboard and an unsettling amount of enthusiasm. "Freeze is total, sir, effective this ' +
       'morning. Except my office, obviously, which needs forty more people to properly evaluate the freeze. ' +
       'I have already hired six of them."',
  choices:[
    { label:'Approve BROOM\'s exemption. Freeze applies to everyone else.', eff:{base:+5,congress:-4,press:-3,cash:+0.2,auth:+2},
      res:'The efficiency office grows while everything it is supposedly streamlining stalls. Roscoe calls this "necessary overhead" without visible irony.' },
    { label:'No exemptions. Freeze applies to BROOM too.', eff:{base:-2,congress:+4,press:+2,cash:+0.2,auth:0},
      res:'You apply the rule to the rule-makers. Roscoe is furious in a way that is, itself, almost worth the price.' },
    { label:'Freeze hiring everywhere except the departments that praised you last week.', eff:{base:+4,press:-3,congress:-3,cash:+0.1,auth:+1},
      res:'The freeze becomes a loyalty instrument disguised as fiscal policy. Every cabinet meeting now opens with an unusually enthusiastic compliment.' },
    { label:'Freeze hiring, then rehire everyone as "volunteers."', eff:{base:+3,press:-4,courts:-3,cash:+0.3,auth:+1}, wild:true,
      res:'Federal work continues at full staffing under a new, unpaid classification. It saves money on paper. It saves nothing in a courtroom, eventually.' }]},

/* ══════════════ THE STAFF MEMOS THEY WRITE ══════════════ */

{ id:'j-exit-interview', title:'The Exit Interview', who:C.ethics, min:5, max:48, tags:['cabinet'],
  src:'a standard departure interview an official chose to answer with unusual honesty',
  text:'Miriam has the transcript and a raised eyebrow. "Standard exit interview, sir, for the outgoing ' +
       'Deputy Secretary of Commerce. Question four is \'anything else you would like to add.\' He added six pages."',
  choices:[
    { label:'Seal the file. Classify it if you have to.', eff:{base:+5,courts:-5,press:-3,auth:+2},
      res:'You bury a routine personnel document as though it were a state secret, which guarantees, eventually, that somebody finds it interesting enough to leak.' },
    { label:'Read it. Actually consider two of the six pages.', eff:{base:-2,press:+3,congress:+2,auth:0},
      res:'You read the complaint of a man with nothing left to lose and nothing to gain by lying. Two of his points are, uncomfortably, correct.' },
    { label:'Have HR "lose" the file in the system migration.', eff:{base:+3,press:-3,courts:-2,auth:+1},
      res:'The six pages vanish into a server migration that was, in fact, scheduled for entirely unrelated reasons. Nobody quite believes the timing.' },
    { label:'Publish it yourself, first, with your own annotations.', eff:{base:+3,press:-4,courts:-3,auth:-1}, wild:true,
      res:'You release the critical exit interview preemptively, with your own margin notes disputing half of it. It is the strangest self-own of the year and it does, weirdly, read as confidence.' }]},

{ id:'j-briefing-book', title:'The Briefing Book Nobody Reads', who:C.state, min:1, max:48, tags:['cabinet','levity'],
  src:'exhaustive prep material for a meeting, largely unread by the principal',
  text:'Muriel has the binder, three inches thick, tabbed by color. "This is the full briefing for tomorrow\'s ' +
       'summit, sir. History, leverage points, red lines, the works. Last time, you read the cover and improvised.'
       + ' It went, on balance, fine. I would still prefer you read past the cover."',
  choices:[
    { label:'Skip it again. Improvising has worked so far.', eff:{base:+4,press:-3,courts:-1,auth:+1},
      res:'You walk in cold once more, on charm and instinct. It works, again, which is the most dangerous possible outcome, because it teaches you nothing.' },
    { label:'Actually read the binder tonight. All of it.', eff:{base:-2,press:+3,congress:+2,auth:0},
      res:'You do the reading. It is unglamorous, it takes four hours, and you walk in tomorrow knowing things instead of guessing them, a genuinely rare state of affairs.' },
    { label:'Have Muriel summarize it into one index card.', eff:{base:+2,press:-1,auth:+1},
      res:'A quarter-million dollars of research and diplomatic prep is compressed onto a card that fits in a shirt pocket. You lose the card by lunch.' },
    { label:'Read it upside down for luck. A tradition you just invented.', eff:{base:+2,press:-3,congress:-3,auth:-1}, wild:true,
      res:'You flip the binder over for reasons nobody can trace to any prior superstition, and declare it worked when the summit goes fine. The tradition, alarmingly, sticks.' }]},

/* ══════════════ THE CABINET MEETING ITSELF ══════════════ */

{ id:'j-empty-chair', title:'The Empty Chair', who:C.cos, min:2, max:48, tags:['cabinet'],
  src:'a cabinet secretary conspicuously absent from a meeting after a public disagreement',
  text:'Deborah counts the chairs before you walk in. "The Attorney General is not coming today, sir. He says ' +
       'it is a scheduling conflict. It is not a scheduling conflict. Everyone at this table knows it is not ' +
       'a scheduling conflict, and everyone is going to pretend, extremely hard, that it is."',
  choices:[
    { label:'Call him out by name, empty chair and all, on camera.', eff:{base:+6,congress:-4,courts:-3,press:-3,auth:+2},
      res:'You address an empty chair directly in front of the press pool. It plays as either dominance or unraveling, depending entirely on which network the viewer watches.' },
    { label:'Say nothing. Proceed with the agenda.', eff:{base:-2,congress:+3,press:+2,auth:0},
      res:'You let the empty chair be exactly as loud as it wants to be, without adding to it. It is the version of this where you look, for once, like the calm one.' },
    { label:'Have someone physically remove and replace the chair itself.', eff:{base:+4,press:-4,street:-1,auth:+1},
      res:'The literal chair is wheeled out of the room mid-meeting. It is a genuinely strange thing to watch happen and nobody can explain, afterward, whose idea it was.' },
    { label:'Leave the chair, but put a name card on it that reads "MISSED."', eff:{base:+3,press:-3,congress:-4,auth:0}, wild:true,
      res:'A single laminated card sits accusingly in an empty seat for the full ninety minutes. It is the pettiest possible use of a laminator, and it works exactly as intended.' }]},

{ id:'j-standing-ovation', title:'The Standing Ovation', who:C.cos, min:1, max:44, tags:['cabinet','loyalty'],
  src:'a cabinet expected to applaud on cue at the start and end of every meeting',
  text:'Deborah times it with a stopwatch now, mostly as a joke, mostly. "Ninety seconds of applause when you ' +
       'enter, sir, ninety when you leave. The Secretary of Veterans Affairs has a bad knee. He stands anyway. ' +
       'Nobody has told him he does not have to."',
  choices:[
    { label:'Extend it to two minutes. Time it publicly.', eff:{base:+6,congress:-4,press:-4,street:-2,auth:+2},
      res:'The applause becomes a timed, broadcast ritual. It photographs as adoration. It reads, to anyone counting seconds, as something closer to hostage footage.' },
    { label:'Cut the applause entirely. Just start the meeting.', eff:{base:-3,congress:+4,press:+3,auth:0},
      res:'You walk in, sit down, and start talking about policy. The room is visibly relieved. The Veterans Affairs Secretary sits down first, gratefully.' },
    { label:'Keep the applause, but make it optional and note who opts out.', eff:{base:+4,press:-4,courts:-2,auth:+1},
      res:'The clapping stays voluntary, and a very careful mental list is kept of who declines. Everyone claps. The point was never actually the clapping.' },
    { label:'Applaud them first, before they can applaud you.', eff:{base:+2,press:-2,courts:-3,street:+2,auth:-2}, wild:true,
      res:'You walk in and start clapping for the cabinet instead. The room freezes, unsure how to respond to being appreciated on purpose. It takes eleven full seconds to recover.' }]},

/* ══════════════ THE ADVISERS WHO AREN'T CONFIRMED ══════════════ */

{ id:'j-czar-creep', title:'Czar Creep', who:C.cos, min:3, max:48, tags:['cabinet','congress'],
  src:'a growing roster of unconfirmed "czar" positions operating outside Senate oversight',
  text:'Deborah has the list and it keeps growing sideways. "You now have a Border Czar, a Border Czar for ' +
       'the other border, a Space Czar, a Ballroom Czar and, as of this morning, a Czar of Czars, sir. None ' +
       'of them were confirmed by anyone. All of them have real budgets."',
  choices:[
    { label:'Add three more czars. Nobody can stop you.', eff:{base:+7,congress:-6,courts:-3,auth:+4},
      res:'The unconfirmed shadow cabinet doubles in size overnight. Not one of them faced a hearing. All of them now outrank several people who did.' },
    { label:'Fold the czars into real, confirmable posts.', eff:{base:-3,congress:+6,courts:+3,auth:+1},
      res:'You convert the informal empire back into accountable, Senate-vetted jobs. It is slower to fill and, unlike the alternative, survives a change of administration.' },
    { label:'Keep the czars but rename them "senior advisers." Same job, no funny title.', eff:{base:+4,press:-2,congress:-3,auth:+2},
      res:'The exact same unconfirmed apparatus continues under duller letterhead. The oversight problem is unchanged. The press release reads better.' },
    { label:'Make the intern a czar too. Czar of Coffee.', eff:{base:+2,press:-2,congress:-4,auth:-1}, wild:true,
      res:'Madison is granted a title, a budget line of four hundred dollars, and genuine, if extremely limited, authority over the West Wing coffee machine. She takes it seriously.' }]},

{ id:'j-confirmation-hearing', title:'The Confirmation Hearing', who:C.speaker, min:2, max:40, tags:['cabinet','congress'],
  src:'a contentious Senate hearing for a controversial cabinet nominee',
  text:'Hal calls ahead of the hearing, sounding tired in the specific way only committee work produces. "Your ' +
       'nominee for Labor could not name the current unemployment rate today, sir, under oath, three times. ' +
       'The committee has photos of the exact moment his aide put his head in his hands."',
  choices:[
    { label:'Attack the committee for "gotcha questions." Full offense.', eff:{base:+6,congress:-6,press:-3,auth:+3},
      res:'You frame a basic competency question as persecution. It rallies the base and burns the last of your goodwill with the two senators you actually needed.' },
    { label:'Withdraw the nomination. Find someone who knows the number.', eff:{base:-3,congress:+5,press:+3,auth:+1},
      res:'You cut your losses and pull the nomination before the vote. It is an admission, quietly made, and the next nominee sails through in a week.' },
    { label:'Have him repeat the hearing with an earpiece.', eff:{base:+4,press:-4,congress:-3,auth:+1},
      res:'A second hearing is arranged with a feed in his ear. It is discovered within the hour. The unemployment rate, notably, is still not something he retains afterward.' },
    { label:'Confirm him anyway on a party-line vote and move on.', eff:{base:+5,congress:-5,courts:-2,auth:+2}, wild:true,
      res:'He is confirmed regardless, on numbers alone, and starts the job not knowing the number that is the entire job. It is, structurally, fine, in the sense that nothing collapses immediately.' }]},

/* ══════════════ THE OFFICE OF GOVERNMENT ETHICS ══════════════ */

{ id:'j-blind-trust', title:'The Blind Trust', who:C.ethics, min:6, max:48, tags:['cabinet','money'],
  src:'a cabinet member\'s financial holdings placed in a "blind" trust managed by a relative',
  text:'Miriam has the paperwork and a very specific tone of voice. "The Treasury Secretary\'s blind trust is ' +
       'managed by his brother, sir, who calls him every morning to discuss it in detail. Blind is doing a ' +
       'great deal of work in that sentence."',
  choices:[
    { label:'Approve the arrangement. Family is family.', eff:{base:+4,courts:-4,press:-3,auth:+2},
      res:'You wave through a trust that is blind in name only. It is technically legal and practically transparent, in the wrong direction.' },
    { label:'Require a genuinely independent trustee. No relatives.', eff:{base:-3,courts:+5,press:+3,auth:+1},
      res:'You force the actual point of the rule to happen. The Secretary is annoyed for exactly one phone call and then, by all accounts, adjusts fine.' },
    { label:'Let it stand, but require the calls be logged, unread, forever.', eff:{base:+2,press:-2,courts:-2,auth:+1},
      res:'The morning calls continue exactly as before. A log of their existence, but not their content, now exists somewhere no one will ever open it.' },
    { label:'Put your own assets in a trust managed by Madison.', eff:{base:+3,press:-3,courts:-3,auth:-1}, wild:true,
      res:'Somebody\'s Niece is now, on paper, the blind trustee of a nine-figure portfolio. She asks, reasonably, what a portfolio is. Nobody answers her.' }]},

{ id:'j-gift-basket', title:'The Gift From The Embassy', who:C.ethics, min:1, max:48, tags:['cabinet','levity'],
  src:'lavish foreign gifts to cabinet officials that exceed the legal reporting threshold',
  text:'Miriam holds up a form with a straight face. "The Ambassador of Rusalka sent the Secretary of Commerce ' +
       'a wristwatch worth roughly the Secretary\'s annual salary, sir. Federal law requires he either report ' +
       'it or decline it. He has done neither. He has been wearing it for a month."',
  choices:[
    { label:'Let him keep it. Report it as a "cultural exchange."', eff:{base:+3,courts:-4,press:-3,auth:+1},
      res:'The watch stays on his wrist under a paperwork classification invented for the occasion. It is not illegal, exactly. It is not far from it, either.' },
    { label:'Confiscate it. Send the legally required thank-you note.', eff:{base:-2,courts:+4,press:+2,auth:0},
      res:'The watch goes into a government warehouse of similar confiscated gifts, alongside several rugs and one alarming taxidermy falcon. The rule works precisely as written.' },
    { label:'Have him "buy" it from the government at fair value. On paper.', eff:{base:+2,press:-2,courts:-2,cash:+0.1,auth:0},
      res:'A face-value transaction is invented to launder the gift into a purchase. The watch stays on his wrist. The paperwork is, at least, complete.' },
    { label:'Ask Rusalka for a matching one for yourself, in writing.', eff:{base:+3,press:-4,courts:-3,auth:0}, wild:true,
      res:'You formally request a second watch through diplomatic channels, on White House letterhead. The Ambassador is delighted to comply and mentions it at the next state dinner.' }]},

/* ══════════════ THE FIRINGS KEEP COMING ══════════════ */

{ id:'j-three-in-a-week', title:'Three In A Week', who:C.cos, min:4, max:44, tags:['cabinet','press'],
  src:'an unusually rapid string of high-level dismissals in a single week',
  text:'Deborah has stopped updating the org chart with pen and switched to pencil. "Three cabinet-level firings ' +
       'in six days, sir. Homeland, Energy, and the Director of the Budget Office, who found out while presenting ' +
       'the budget. To Congress. Live."',
  choices:[
    { label:'Fire a fourth one this week. Set a record.', eff:{base:+6,congress:-6,press:-5,street:-2,auth:+3},
      res:'You chase the streak rather than break it. The turnover rate becomes a running joke on every late-night broadcast, and then, somehow, a point of pride at rallies.',
      act: r => AD.bumpCabinetChurn(r, 4) },
    { label:'Pause. No more firings this month. Let the dust settle.', eff:{base:-3,congress:+5,press:+4,auth:+1},
      res:'You call a moratorium on your own churn. The building stabilizes for the first time in weeks. Nobody thanks you, but nobody quits either.',
      act: r => AD.bumpCabinetChurn(r, 3) },
    { label:'Rebrand the firings as a "generational transition." Print a memo.', eff:{base:+4,press:-3,congress:-2,auth:+1},
      res:'A cheerful internal memo describes the purge as renewal. Nobody in the building believes a word of it, and everybody quotes it sarcastically for months.',
      act: r => AD.bumpCabinetChurn(r, 3) },
    { label:'Fire yourself from the announcement duties. Let Alvin do it.', eff:{base:+2,press:-3,congress:-2,auth:-2}, wild:true,
      res:'The Chief Usher is, briefly and unofficially, put in charge of informing cabinet officials they no longer have jobs. He does it with more grace than anyone who came before him.',
      act: r => AD.bumpCabinetChurn(r, 3) }]},

{ id:'j-succession-plan', title:'The Succession Plan Nobody Wrote', who:C.ag, min:1, max:48, tags:['cabinet','courts'],
  src:'confusion over the formal line of succession when a department has no confirmed leader',
  text:'Bo has a legal pad covered in crossed-out names. "Homeland has no Secretary, no confirmed Deputy, and ' +
       'the third-in-line just retired, sir. On paper, if something happened this afternoon, the department ' +
       'would be run by a regional director in a city whose name I need to look up."',
  choices:[
    { label:'Appoint a loyalist to the empty slot by fiat. Skip the process.', eff:{base:+6,congress:-5,courts:-4,auth:+3},
      res:'You install someone by decree rather than confirmation, on the theory that an org chart with a name in every box is safer than an honest gap. It is not, legally, the same thing.' },
    { label:'Fast-track the actual nomination through the Senate.', eff:{base:-2,congress:+5,courts:+3,auth:+1},
      res:'You push a real, confirmable name through the actual process, on an expedited but legitimate timeline. It takes six extra weeks and produces someone who can survive a subpoena.' },
    { label:'Just don\'t mention the gap. Nobody\'s asked yet.', eff:{base:+2,press:-3,courts:-3,auth:0},
      res:'You leave the succession chart quietly, dangerously incomplete and hope the news cycle stays elsewhere. It does, for now, which is not the same as it staying there.' },
    { label:'Draw the succession order out of a hat at the next cabinet meeting.', eff:{base:+3,press:-4,courts:-3,auth:-1}, wild:true,
      res:'Names are literally drawn from Alvin\'s hat in front of the full cabinet. It is legally meaningless and, everyone privately agrees, more honest than the process it replaced.' }]},

/* ══════════════ THE MEMOS THEY HOPE SURVIVE THEM ══════════════ */

{ id:'j-inspector-general', title:'The Inspector General', who:C.ag, min:8, max:48, tags:['cabinet','courts'],
  src:'an independent internal watchdog dismissed shortly before releasing a critical report',
  text:'Bo lays out the timeline, which is not flattering. "The Inspector General for Homeland was seventy-two ' +
       'hours from releasing a report on the acting Secretary\'s travel expenses, sir, when you fired him. ' +
       'The optics are, and I say this as your lawyer, not subtle."',
  choices:[
    { label:'Fire the next one too, the moment a report gets close.', eff:{base:+6,courts:-6,congress:-5,press:-4,auth:+3},
      res:'You establish, in practice, that any internal watchdog who gets close to a finding gets removed before publishing it. It works exactly once more before Congress notices the pattern.' },
    { label:'Let the report publish. Deal with the findings honestly.', eff:{base:-4,courts:+5,congress:+4,press:+3,auth:+1},
      res:'You allow the watchdog report to run its course and answer for what it finds. It is uncomfortable for a news cycle and it is, structurally, how the system is supposed to work.' },
    { label:'Reassign the Inspector General instead of firing him. Same effect, softer verb.', eff:{base:+4,press:-3,courts:-3,auth:+2},
      res:'He keeps his title and salary and loses his portfolio, desk, and staff. The report he was three days from finishing is, functionally, never finished.' },
    { label:'Appoint the intern as the new watchdog. Full independence, guaranteed.', eff:{base:+2,press:-3,courts:-3,auth:-1}, wild:true,
      res:'Madison is handed the Inspector General title on the theory that nobody can accuse a twenty-two-year-old of institutional capture. She takes the job unnervingly seriously.' }]},

{ id:'j-cabinet-book-club', title:'The Cabinet Book Club', who:C.hist, min:2, max:44, tags:['cabinet','levity'],
  src:'a mandatory reading assignment circulated to senior staff by the leader',
  text:'Dr. Weir holds up the assigned title, a self-published volume with your face on the cover in gold ' +
       'foil. "You have asked the full cabinet to read your own memoir before next week\'s meeting, sir, and ' +
       'to come prepared to discuss favorite chapters. Three of them have already finished it. Two of those ' +
       'three are lying."',
  choices:[
    { label:'Quiz them on it. Publicly. Cold-call format.', eff:{base:+6,congress:-3,press:-3,street:-2,auth:+2},
      res:'You administer a pop quiz on your own memoir to sitting cabinet secretaries. The Secretary of Agriculture cannot name the chapter about him. It was chapter one.' },
    { label:'Cancel the assignment. It was a strange idea.', eff:{base:-2,press:+3,congress:+1,auth:0},
      res:'You quietly withdraw the reading assignment before it becomes a punchline in three separate newsletters. It already has, in one.' },
    { label:'Assign a second book. Then a third. It becomes a syllabus.', eff:{base:+4,press:-3,congress:-2,auth:+1},
      res:'The reading list grows to include your memoir, your father\'s memoir, and a biography you commissioned of yourself last spring. Attendance at the discussion sessions is, remarkably, mandatory and full.' },
    { label:'Have Dr. Weir grade the book reports like a professor.', eff:{base:+3,press:-3,congress:-3,auth:-1}, wild:true,
      res:'The White House Historian is drafted into grading cabinet-level book reports with an actual rubric. She assigns the Attorney General a B-minus. He requests a regrade.' }]},

/* ══════════════ MORE STAFF CHAOS ══════════════ */

{ id:'j-secretary-of-secretaries', title:'The Secretary Of Secretaries', who:C.cos, min:9, max:48, tags:['cabinet','congress'],
  src:'a new coordinating role invented to manage the cabinet on the leader\'s behalf',
  text:'Deborah proposes it carefully, aware of how it sounds. "A single position, sir, that sits above the ' +
       'whole cabinet and reports only to you. Every secretary answers to them first, you second. It solves ' +
       'the coordination problem. It also means, structurally, that one person now runs the government."',
  choices:[
    { label:'Create the post. Give it real authority over every department.', eff:{base:+8,congress:-6,courts:-4,auth:+4},
      res:'A single unconfirmed office now sits above the entire confirmed cabinet, answerable to nobody but you. It is the tidiest possible org chart and the least accountable one in a century.' },
    { label:'Skip it. Coordinate through regular cabinet meetings instead.', eff:{base:-3,congress:+5,courts:+2,auth:+1},
      res:'You keep the clumsy, argumentative, actually-accountable version of government. It is slower by design, which is a feature nobody thanks you for.' },
    { label:'Create the post, but give it to yourself. No delegation.', eff:{base:+4,press:-3,congress:-3,auth:+2},
      res:'You simply take the new authority personally instead of assigning it. It changes nothing structurally except your own calendar, which now has forty direct reports.' },
    { label:'Give the new title to Deborah, who did not ask for it.', eff:{base:+2,press:-2,congress:-5,auth:0}, wild:true,
      res:'Deborah becomes, overnight, the single most powerful unelected official in Washington, entirely against her own recommendation. She takes it well. She takes a very long lunch.' }]},

{ id:'j-cabinet-retreat', title:'The Cabinet Retreat', who:C.cos, min:1, max:44, tags:['cabinet','money','levity'],
  src:'an offsite team-building retreat for senior officials, held during an active crisis',
  text:'Deborah checks the calendar against the news, and the two do not match well. "The cabinet retreat is ' +
       'this weekend, sir. Trust falls, a ropes course, a keynote on \'servant leadership.\' It was booked ' +
       'months ago. It happens to fall in the middle of the currency situation."',
  choices:[
    { label:'Go ahead as planned. Optics be damned.', eff:{base:+3,press:-5,congress:-3,cash:-0.2,auth:+1},
      res:'The full cabinet is photographed on a ropes course while a currency crisis runs unattended. One image, of the Treasury Secretary dangling from a harness, outlives the crisis itself.' },
    { label:'Cancel it. Work the weekend like everyone else has to.', eff:{base:-2,press:+4,congress:+3,cash:+0.1,auth:0},
      res:'You call it off and keep the cabinet at their desks. It is the obvious call and, being obvious, earns you almost no credit at all.' },
    { label:'Keep the retreat, cut it to a half day, call it "focused."', eff:{base:+2,press:-2,cash:-0.1,auth:0},
      res:'A compromise retreat runs four hours instead of two days. The trust falls still happen. Nobody involved reports increased trust.' },
    { label:'Move the whole retreat onto a conference call. Trust falls, over the phone.', eff:{base:+2,press:-3,congress:-2,courts:-2,auth:-1}, wild:true,
      res:'Fourteen cabinet secretaries attempt a trust exercise over a conference line with no video. It is, by consensus, the strangest ninety minutes any of them have spent in government.' }]},

{ id:'j-nda-everyone', title:'The NDA', who:C.lawyer, min:1, max:48, tags:['cabinet','courts'],
  src:'nondisclosure agreements required of executive branch staff, of contested enforceability',
  text:'Sy has the standard form ready for your signature approval. "Every new hire signs a lifetime ' +
       'nondisclosure before their first day, sir. I should mention, as your lawyer, that these are close to ' +
       'unenforceable against a former federal employee. I should also mention that almost nobody tests that in court.'
       + ' It works on the fear alone."',
  choices:[
    { label:'Extend it. Retroactive. Everyone who ever worked here signs.', eff:{base:+6,courts:-6,congress:-3,press:-3,auth:+3},
      res:'You attempt to bind former staff to a document invented after they left. It has no legal force whatsoever and every single person who receives it reads it as a threat, correctly.' },
    { label:'Drop the NDA. Rely on the actual classification rules.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You lean on the real, enforceable rules about classified material instead of a scare document with no teeth. It is less dramatic and it is the version that survives a challenge.' },
    { label:'Keep the NDA, add a clause about "disparaging tone."', eff:{base:+4,press:-4,courts:-4,auth:+2},
      res:'You attempt to ban not facts but tone, a distinction no court has ever found workable. Sy predicts, correctly, this becomes the most-mocked clause in the document\'s history.' },
    { label:'Ask staff to pinky-swear instead. Skip the paperwork entirely.', eff:{base:+2,press:-2,courts:-5,auth:-1}, wild:true,
      res:'You replace a legal document with a literal pinky swear, administered personally in the Oval Office. Several staffers find this more binding than the NDA ever was.' }]},

{ id:'j-town-hall-plant', title:'The Planted Question', who:C.social, min:2, max:40, tags:['cabinet','press'],
  src:'a staged, seemingly spontaneous question at an internal town hall',
  text:'Brayden has the index card he wrote for the "employee" to ask. "It is technically a town hall with ' +
       'department staff, sir, but the first three questions are ones we wrote and handed to three interns. ' +
       'One of the interns just quit and might mention this to a reporter."',
  choices:[
    { label:'Plant six more questions. Fill the whole hour with them.', eff:{base:+6,press:-5,street:-3,auth:+2},
      res:'The entire town hall becomes scripted end to end, performed by employees reading from cards. It is discovered within the week, because it always is.' },
    { label:'Cancel the plants. Take real questions, cold.', eff:{base:-3,press:+5,street:+3,auth:+1},
      res:'You take unscripted questions from actual employees for the first time in months. Two are uncomfortable. All of them are real, which is worth more than it costs.' },
    { label:'Pay the quitting intern for her silence, informally.', eff:{base:+3,press:-4,courts:-3,cash:-0.1,auth:+1},
      res:'An off-the-books arrangement is offered to keep a departing intern quiet. It is the kind of quiet arrangement that only stays quiet until it doesn\'t.' },
    { label:'Let Brayden ask the planted questions himself, on camera, as himself.', eff:{base:+2,press:-3,congress:-3,auth:-1}, wild:true,
      res:'The Director of Posting, nineteen years old, stands up in his own town hall and asks his own planted question under his own name. It is so transparent it loops back around to charming.' }]},

{ id:'j-cabinet-vacancy-record', title:'The Vacancy Record', who:C.speaker, min:16, max:48, tags:['cabinet','congress'],
  src:'a historic number of unfilled senior posts late in a term',
  text:'Hal reads from a printed list that keeps getting longer. "Nine cabinet-level vacancies right now, sir, ' +
       'a modern record. Congress has started a betting pool on which one gets filled next. The smart money ' +
       'is on none of them, before the midterms."',
  choices:[
    { label:'Fill them all at once with loyalists. Skip the vetting.', eff:{base:+7,congress:-6,courts:-3,auth:+3},
      res:'Nine posts are filled in a single announcement by people chosen for one quality only. The government runs, technically, fully staffed, by a cabinet that has never met before.' },
    { label:'Fill them slowly, properly, one real nomination at a time.', eff:{base:-3,congress:+5,courts:+3,auth:+1},
      res:'You work the actual process, one hearing at a time. It will take the better part of a year. It will also, unlike the alternative, hold up.' },
    { label:'Leave them empty. Deputies can handle it.', eff:{base:+2,press:-3,congress:-3,auth:+1},
      res:'Nine departments continue to run on unconfirmed deputies indefinitely. It is cheaper, it is faster, and it is, in the strictest sense, not really a government anymore.' },
    { label:'Let Congress\'s betting pool pick the next nominee.', eff:{base:+3,press:-3,congress:-3,auth:-1}, wild:true,
      res:'You genuinely accept the winning name from a congressional office pool as your next nominee. It is, against expectation, a perfectly competent pick.' }]},

{ id:'j-annual-review', title:'The Performance Review', who:C.cos, min:10, max:48, tags:['cabinet','loyalty'],
  src:'a formal annual evaluation process applied to cabinet-level officials',
  text:'Deborah has a stack of forms nobody in the cabinet has ever filled out before. "First annual performance ' +
       'reviews for the full cabinet, sir. Someone has to grade them on something. Right now the draft rubric ' +
       'is one question: \'Loyalty, one to ten.\' Legal thinks we need at least a second question."',
  choices:[
    { label:'Keep the one-question rubric. Loyalty is the only metric that matters.', eff:{base:+6,congress:-4,courts:-3,press:-3,auth:+3},
      res:'Cabinet secretaries are formally graded on a single axis with your name attached to the results. It is not a performance review. Everyone in the building understands exactly what it is.' },
    { label:'Add real metrics. Budget execution, program outcomes, the actual job.', eff:{base:-3,congress:+5,courts:+2,auth:+1},
      res:'The review becomes a genuine evaluation of whether departments are doing what they exist to do. It is duller. It is also the first honest paperwork the building has produced all year.' },
    { label:'Grade them on loyalty, but call the column "alignment."', eff:{base:+4,press:-3,congress:-2,auth:+1},
      res:'The same metric survives under a gentler word. Nobody in the cabinet is fooled. The word "alignment" is, within a month, used sarcastically in every hallway in the building.' },
    { label:'Have the cabinet review each other, anonymously, and read it aloud.', eff:{base:+3,press:-3,street:-3,auth:-1}, wild:true,
      res:'Anonymous peer reviews are read aloud at the next full cabinet meeting. Several are unexpectedly candid. The Secretary of Labor learns, in front of thirteen colleagues, what the Secretary of Energy really thinks of his meetings.' }]},

{ id:'j-parting-shot', title:'The Parting Shot', who:C.press, min:8, max:48, tags:['cabinet','press'],
  src:'a fired official giving a scathing exit interview to a national outlet within hours of dismissal',
  text:'Kaylee has the transcript, printed and highlighted in three colors. "The former Attorney General did ' +
       'a live interview forty minutes after his firing, sir. He called the administration \'a group chat with ' +
       'nuclear codes.\' It is, unfortunately, a very good line, and it is already the headline everywhere."',
  choices:[
    { label:'Discredit him publicly. Question his mental state, on the record.', eff:{base:+6,press:-6,congress:-3,street:-2,auth:+2},
      res:'You attack the character of a man you fired hours ago, on camera. It reads as thin-skinned to everyone except the base, who read it as loyalty enforcement, correctly.' },
    { label:'Say nothing. Let the line have its one news cycle and fade.', eff:{base:-2,press:+4,congress:+2,auth:0},
      res:'You decline to feed a good line more oxygen than it already has. It runs for a day and a half instead of a week, which is the entire craft of not responding.' },
    { label:'Have Sy draft a cease-and-desist over the "group chat" line.', eff:{base:+4,press:-5,courts:-3,auth:+1},
      res:'You threaten legal action over a metaphor. The letter itself leaks within the hour and becomes a better line than the original one.' },
    { label:'Adopt the line yourself. Put it on a mug.', eff:{base:+3,press:-4,courts:-2,auth:-1}, wild:true,
      res:'The gift shop starts selling a mug reading "A Group Chat With Nuclear Codes" by the following Monday. It outsells the commemorative Bible by Wednesday.' }]}

);
})();
