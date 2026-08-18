/* ============================================================
   PACK B, THE MACHINERY  (term months 6–34)
   Agencies, courts, money, enforcement. The part of the term
   where the country actually changes shape.

   REWRITTEN against the research. Every crisis carries a `src`
   naming the documented item or sub-item it riffs on, and the rule
   is the same as packs A, F and G: INSPIRED BY, NEVER COPIED.
   Take the mechanism; invent the names, numbers, countries and
   outcomes. Contested [CONTEXT FLAG] items are excluded or played
   as a joke about the dispute itself.

   Twelve cards carry `breaks:` tags and MUST keep them, they are
   the only routes to search, judicial, emoluments, purse, takecare,
   vesting, consent, supremacy and speech in this window. Rewriting
   this pack without them zeroes out two clauses. It has happened.

   54 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE COURTS AND THE DOCKET ══════════════ */

{ id:'b-motives', title:'The Motive Question', who:C.lawyer, min:8, max:34, tags:['courts','power'],
  src:'a ruling holding that courts may not inquire into a president\'s motives for official acts',
  text:'"The ruling does something people have not caught up with." Sy has it flagged. "It is not only that ' +
       'official acts are immune. It is that a court may not ask *why* you did one. The reason is no longer ' +
       'admissible. Sir, the reason was the whole case."',
  choices:[
    { label:'Then say the quiet part in every order. Motive is not reviewable.', eff:{base:+6,courts:-9,congress:-8,press:-6,auth:+12},
      res:'Eleven orders now recite the doctrine in their opening paragraph. Reciting it is not required. Reciting it is the message.', breaks:'judicial' },
    { label:'Use it. Never mention it.', eff:{base:+3,courts:-5,press:-3,auth:+9},
      res:'The shield works exactly as well unspoken, and nobody writes a column about a doctrine you did not brag about.' },
    { label:'Have counsel argue the narrow version, in case it is needed later.', eff:{courts:+7,congress:+5,press:+4,base:-5,auth:+2},
      res:'Sy files a brief so modest that two judges thank him for it. It preserves the argument for a day when it is worth more.' },
    { label:'Declare all of your acts official, including breakfast.', eff:{base:+4,courts:-7,press:-6,congress:-5,auth:+4}, wild:true,
      res:'A schedule is published designating every waking hour an official act. It is filed, docketed, and quoted in nine dissents.' }]},

{ id:'b-emergency-docket', title:'Twenty-Nine Applications', who:C.lawyer, min:10, max:36, tags:['courts','power'],
  src:'an unprecedented volume of emergency applications to the highest court',
  text:'"Twenty-nine emergency applications this term." Sy turns the page. "For scale: the two administrations ' +
       'before you filed eight between them, across sixteen years. We are not using an exception any more, sir. ' +
       'We have made it the road."',
  choices:[
    { label:'File more. The exception is the road now.', eff:{base:+5,courts:-8,congress:-9,press:-6,auth:+12},
      res:'You win most of them. Each win arrives unsigned, unreasoned, at 9pm, and binds the country until somebody finds time to explain why.' },
    { label:'File only where we would win on the merits anyway.', eff:{courts:+6,congress:+5,press:+4,base:-4,auth:+5},
      res:'Nine applications instead of twenty-nine, and every one of them holds up afterwards. Boring, durable, and nobody writes a law review article about it.' },
    { label:'Go through the normal courts like everybody else.', eff:{courts:+9,congress:+8,press:+7,street:+4,base:-8,auth:-3},
      res:'It takes two years instead of two weeks. Two of the four policies survive contact with a full argument, which is two more than usual.' },
    { label:'File one application containing all twenty-nine.', eff:{base:+3,courts:-7,congress:-5,press:-4,auth:+5}, wild:true,
      res:'Four hundred pages, one caption, nine unrelated questions. The clerk\'s office returns it with a note that is later framed.' }]},

{ id:'b-unsigned', title:'Unsigned, Unreasoned', who:C.cj, min:12, max:38, tags:['courts','press'],
  src:'emergency orders issued largely unsigned and without stated reasoning',
  text:'Chief Justice Stone is on the phone about something other than a ruling. "Twenty-three of your twenty-eight ' +
       'went your way. Almost none of them said why. Mr President, a court that does not explain itself is not a court. ' +
       'It is an office that issues permissions."',
  choices:[
    { label:'"That sounds like an internal matter for the Court."', eff:{base:+5,courts:-8,press:-6,congress:-5,auth:+10},
      res:'It is an internal matter for the Court, and the Court is losing the argument to itself, slowly, in public, in footnotes.' },
    { label:'Ask, publicly, for reasoned opinions on every one.', eff:{courts:+10,press:+8,congress:+6,base:-8,auth:-3},
      res:'Reasons cut both ways and yours are worse in writing. You lose two of the next four, and the judiciary regains something it had been shedding.' },
    { label:'Say nothing at all. Take the permissions.', eff:{base:+3,courts:-4,press:-3,auth:+8},
      res:'Silence is free and the orders keep arriving. Stone writes the concurrence she wanted to write, and four people read it.' },
    { label:'Offer to write the reasoning for them.', eff:{base:+3,courts:-9,press:-7,congress:-6,auth:+4}, wild:true,
      res:'A drafted opinion is couriered to the Court. It is returned unopened with a compliments slip, which is somehow worse than a rebuke.' }]},

{ id:'b-humphreys', title:'The Ninety-Year-Old', who:C.cj, min:14, max:40, tags:['courts','agencies'],
  src:'emergency orders effectively overriding a long-standing removal precedent without naming it',
  text:'"You have now removed officials from four agencies Congress built specifically so you could not." ' +
       'Sy is almost admiring. "There is a 1935 case that says you cannot. The Court has let every removal stand ' +
       'and has not once mentioned the case. It is being overruled by silence."',
  choices:[
    { label:'Keep removing. Silence is the most useful kind of permission.', eff:{base:+5,courts:-9,congress:-10,press:-6,auth:+13},
      res:'Nine agencies in a year. The 1935 case is still, technically, good law, and is cited by nobody, in nothing, ever again.' },
    { label:'Ask them to overrule it properly, on the merits, in the open.', eff:{courts:+7,congress:+6,press:+6,base:-6,auth:+4},
      res:'They take the case and rule for you 6–3, with a reasoned opinion. You get the same power and a decade of legitimacy you did not have.' },
    { label:'Stop at four. Leave the rest alone.', eff:{courts:+8,congress:+8,press:+5,base:-7,auth:-2},
      res:'Four is a series of decisions. Nine would have been a policy. Only one of those gets litigated as a pattern.' },
    { label:'Remove the officials and then reappoint them, to see if it works.', eff:{base:+2,courts:-6,congress:-6,press:-4,auth:+5}, wild:true,
      res:'All four return to the same desks with new commissions and worse job security. Three of them thank you, which is the most unsettling part.' }]},

{ id:'b-kagan-dissent', title:'The Dissent', who:C.cj, min:16, max:42, tags:['courts','congress'],
  src:'a dissent warning the emergency docket was being used to move authority from Congress to the President',
  text:'A dissent has been published with a sentence in it that is now on placards. It says the emergency docket ' +
       'should not be used to transfer the government\'s authority from the Congress to the President. ' +
       'Kaylee: "Sir, they printed it on a tote bag. It has sold out twice."',
  choices:[
    { label:'Attack the dissenter by name. Repeatedly.', eff:{base:+8,courts:-11,press:-7,congress:-6,street:-5,auth:+6},
      res:'Her next dissent is longer, sharper, and read aloud from the bench, which she had not done in nine years and now does routinely.' },
    { label:'"Dissents are how a court argues with itself." Move on.', eff:{courts:+6,press:+5,congress:+4,base:-3,auth:+4},
      res:'Treating it as ordinary is the one response that makes it ordinary. It is off the front pages in four days.' },
    { label:'Have the Solicitor General answer it in the next brief.', eff:{courts:+5,congress:+4,press:+3,base:-2,auth:+5},
      res:'A footnote answering a dissent is the most establishment thing your administration has ever done, and it works.' },
    { label:'Buy the tote bag. Be photographed with it.', eff:{base:+5,press:+6,street:+5,courts:-3,cash:-0.1,auth:-1}, wild:true,
      res:'It disarms the entire story for about nine days. Her chambers reportedly find it very funny, which they will not confirm.' }]},

{ id:'b-marshal', title:'The Marshals', who:C.ag, min:18, max:44, tags:['courts','justice'],
  src:'contested compliance with court orders and the question of who enforces them',
  text:'A judge has ordered something you do not intend to do. Bo has looked into the mechanics. ' +
       '"The court has no army. Enforcement runs through the Marshals Service. The Marshals Service reports ' +
       'to my department. Which reports to you. Sir, I would rather you had not asked."',
  choices:[
    { label:'Instruct the Marshals that the order is under review.', eff:{base:+6,courts:-14,congress:-10,press:-7,street:-6,auth:+13},
      res:'Nothing is refused and nothing is done. Four former judges write the same op-ed independently and use the same word: hollow.', breaks:'judicial' },
    { label:'Comply, slowly, while appealing.', eff:{courts:+5,congress:+4,press:+3,base:-4,auth:+5},
      res:'Delay is compliance with a schedule attached. You lose four months and keep the thing that matters, which is being a party rather than a defendant.' },
    { label:'Comply fully, today, and say so loudly.', eff:{courts:+11,congress:+8,press:+8,street:+6,base:-9,auth:-4},
      res:'You obey an order you hate, in public, immediately. It costs you the week and buys you the next eleven rulings.' },
    { label:'Ask the Marshals to serve the order on the judge.', eff:{base:+3,courts:-9,press:-6,congress:-5,auth:+4}, wild:true,
      res:'A deputy actually drives to the courthouse before somebody senior catches it. The judge accepts the copy politely and files it.' }]},

{ id:'b-facilitate', title:'One Word, Unanimously', who:C.state, min:14, max:40, tags:['courts','foreign'],
  src:'a unanimous order requiring the government to facilitate the return of a wrongly removed man',
  text:'Nine to nothing. Not six-three, not five-four, nine. The order uses one verb: *facilitate*. ' +
       'Muriel: "There is no daylight in a nine-nothing, sir. There is only the word. And their lawyers ' +
       'and our lawyers are going to spend a year on what it means."',
  choices:[
    { label:'"Facilitate" means we do not obstruct. Do nothing.', eff:{base:+5,courts:-12,congress:-8,press:-7,street:-6,auth:+11},
      res:'A word chosen for unanimity turns out to have been chosen for ambiguity. The judge below calls it what it is, in writing, twice.' },
    { label:'Put him on a plane this week and be finished with it.', eff:{courts:+11,press:+9,congress:+7,street:+6,base:-11,auth:-4},
      res:'It ends in eleven days. Your base calls it a surrender and it is; it is also the last time that case appears on a front page.' },
    { label:'Negotiate a transfer through a third country. Take three months.', eff:{courts:+5,press:+4,congress:+3,base:-4,auth:+4},
      res:'A face-saving route that satisfies the order without a photograph of a plane. Diplomacy earns its keep about once a term.' },
    { label:'Facilitate it by sending him a bus timetable.', eff:{base:+3,courts:-9,press:-7,street:-6,auth:+3}, wild:true,
      res:'A government filing genuinely attaches a printed schedule for a route that does not cross an ocean. It is entered into the record as Exhibit C.' }]},

{ id:'b-sotomayor', title:'The Sentence In The Footnote', who:C.lawyer, min:16, max:44, tags:['courts','justice'],
  src:'a warning that the government\'s theory would extend to citizens as well',
  text:'"Our position in the brief is that a removal decision is not reviewable." Sy has stopped reading. ' +
       '"A dissent points out that the position does not contain the word \'noncitizen\' anywhere. On our own ' +
       'theory, sir, there is nothing in it that stops at a passport."',
  choices:[
    { label:'Leave the brief as filed. The theory is the asset.', eff:{base:+4,courts:-12,street:-9,press:-7,congress:-6,auth:+12},
      res:'An argument written for one category is on the books for all of them. It is quoted back to your successor in a case you never imagined.' },
    { label:'Amend the brief. Write "noncitizen" in, forty times.', eff:{courts:+8,street:+6,press:+6,congress:+4,base:-5,auth:+3},
      res:'A limiting principle costs nothing today and is the only reason the doctrine survives its second decade.' },
    { label:'Withdraw the theory entirely. Argue the facts.', eff:{courts:+9,street:+7,press:+7,congress:+6,base:-8,auth:-4},
      res:'You win the case on its facts and lose the doctrine. Sy calls it the correct trade and is, for once, not being diplomatic.' },
    { label:'Add a footnote promising to be reasonable about it.', eff:{base:+2,courts:-8,street:-6,press:-5,auth:+4}, wild:true,
      res:'A brief to the highest court in the country contains the phrase "in practice we would not." It is read aloud at argument, slowly.' }]},

{ id:'b-injunction-scope', title:'The Procedural Win', who:C.ag, min:12, max:40, tags:['courts','power'],
  src:'a procedural ruling curbing nationwide injunctions, followed by a merits loss on the same policy',
  text:'"We won." Bo does not look like a man who won. "They curbed nationwide injunctions. One judge can no longer ' +
       'stop a policy for the whole country. That is enormous." He turns the page. "It is also entirely procedural. ' +
       'They have not said whether the policy is lawful, and I do not like our odds when they do."',
  choices:[
    { label:'Declare total victory. Implement everywhere, immediately.', eff:{base:+9,courts:-9,press:-7,congress:-6,street:-5,auth:+11},
      res:'Fourteen months later they reach the merits and strike it 6–3. Every implementation has to be unwound, and the unwinding is the story.' },
    { label:'Take the procedural win. Implement only where we have won.', eff:{base:+4,courts:-3,press:-3,auth:+8},
      res:'A patchwork map that lawyers understand and nobody else does. It is ugly, it is defensible, and it survives.' },
    { label:'Pause the policy until the merits are decided.', eff:{courts:+9,congress:+6,press:+6,base:-8,auth:-2},
      res:'Restraint you will get no credit for. It also means that when you lose, you lose a plan rather than a programme.' },
    { label:'Celebrate the procedural win with a parade.', eff:{base:+6,press:-6,courts:-5,congress:-4,cash:-0.2,auth:+2}, wild:true,
      res:'Floats, a band, and a banner reading THE INJUNCTION IS DEAD. It is the only parade in American history about civil procedure.' }]},

{ id:'b-framers', title:'"Congress Alone"', who:C.treas, min:20, max:46, tags:['courts','economy'],
  src:'a merits ruling holding an emergency statute does not authorise presidential tariffs',
  text:'Six to three, and the Chief wrote it himself. The sentence everybody is reading says the Framers gave ' +
       'that power to Congress alone. Lyle: "Two of your own appointees are in the majority, sir. This is not ' +
       'the Court being political. This is the Court being a court."',
  choices:[
    { label:'Attack the Court. Say it has been captured by the other side.', eff:{base:+8,courts:-13,congress:-8,press:-7,street:-6,auth:+5},
      res:'You are attacking a bench you built for a ruling written by a man you praised for eight years. Even your own network runs the timeline.' },
    { label:'Comply, and ask Congress to pass the tariffs properly.', eff:{congress:+11,courts:+9,press:+8,base:-9,auth:+2},
      res:'The bill passes at two-thirds the rate you wanted, in nine months, with an expiry date. It is also unkillable by any future court.' },
    { label:'Comply on this statute. Find a different statute by Friday.', eff:{base:+5,courts:-5,congress:-5,press:-4,auth:+9},
      res:'A narrower authority, a smaller number, and no ruling to violate. Lyle calls it the only genuinely clever thing anybody did this year.' },
    { label:'Ask which Framer, specifically, and demand to see him.', eff:{base:+4,courts:-7,press:-5,congress:-4,auth:+3}, wild:true,
      res:'The question is put in writing to the Solicitor General\'s office. Somebody there, magnificently, answers it in full, with dates.' }]},

/* ══════════════ THE AGENCIES ══════════════ */

{ id:'b-vought', title:'"There Are No Independent Agencies"', who:C.cos, min:8, max:34, tags:['agencies','power'],
  src:'a budget director publicly asserting that no agency is independent of the president',
  text:'Your budget director has said it on the record, in five words, without being asked: there are no ' +
       'independent agencies. Deborah: "Sir, that is the entire unitary executive theory delivered as a shrug. ' +
       'Nine general counsels have already asked me whether it was cleared."',
  choices:[
    { label:'Confirm it. It is the theory and it is the plan.', eff:{base:+7,congress:-11,courts:-10,press:-7,auth:+13},
      res:'Saying it out loud converts a legal argument into a political programme, and gives every opponent one sentence to organise around.' },
    { label:'"He was describing accountability, not control."', eff:{base:+3,congress:-4,courts:-4,press:-3,auth:+8},
      res:'A distinction with no operational content whatsoever, which is why it holds for two years.' },
    { label:'Correct him publicly. Some agencies are independent.', eff:{congress:+9,courts:+9,press:+7,base:-9,auth:-4},
      res:'The correction is genuine and is treated as a scandal by your own side. Four commissioners quietly stop updating their résumés.' },
    { label:'Make him head of every independent agency at once.', eff:{base:+4,congress:-8,courts:-7,press:-5,auth:+7}, wild:true,
      res:'Eleven simultaneous acting directorships held by one man with one diary. The diary is subpoenaed and is the funniest document of the term.' }]},

{ id:'b-probationary', title:'Sixteen Thousand', who:C.cos, min:10, max:34, tags:['agencies','street'],
  src:'mass termination of probationary federal employees, and an agency later trying to rehire them',
  text:'Sixteen thousand probationary employees, terminated by template, in a week. Deborah has the follow-up. ' +
       '"One agency has quietly tried to rehire four hundred of them because it turns out they were doing the ' +
       'thing the agency exists to do. Eleven have said no."',
  choices:[
    { label:'No rehiring. Anywhere. The number is the point.', eff:{base:+7,street:-10,congress:-8,courts:-7,press:-5,auth:+11},
      res:'The headcount holds and four statutory functions quietly stop happening. Nobody notices for nineteen months and then everybody does at once.' },
    { label:'Let agencies rehire where they must. Quietly.', eff:{base:+3,street:-3,congress:-3,auth:+7},
      res:'The number in the press release stays. The people come back through a side door on new contracts. Both things are true and only one is reported.' },
    { label:'Reverse it. Apologise to the four hundred by name.', eff:{street:+10,congress:+8,press:+8,courts:+6,base:-11,auth:-4},
      res:'Naming them is the part that lands. Two of them cry on television and the segment runs for a week.' },
    { label:'Rehire them as unpaid volunteers.', eff:{base:+3,street:-7,congress:-6,press:-5,auth:+4}, wild:true,
      res:'The offer letter is real and goes out to four hundred people. Nine accept, which is the genuinely upsetting statistic.' }]},

{ id:'b-usaid', title:'The Agency That Was There On Monday', who:C.state, min:8, max:32, tags:['agencies','foreign'],
  src:'the rapid dismantling of a foreign assistance agency and the litigation over unpaid completed work',
  text:'Muriel has a list of things that stopped. "Eleven clinics, four famine-response pipelines, a vaccine ' +
       'cold chain in three countries. And $2 billion owed for work already finished, contractors who delivered, ' +
       'invoiced, and are now suing. Sir, they did the work. That part is not arguable."',
  choices:[
    { label:'Pay nobody. Let them sue.', eff:{base:+6,courts:-11,congress:-9,press:-7,street:-7,cash:+0.4,auth:+11},
      res:'They sue and they win, because a completed contract is a completed contract. You pay it anyway, later, with interest and a ruling attached.' },
    { label:'Pay the completed invoices. Cancel everything forward.', eff:{base:+4,courts:-3,congress:-3,press:-3,cash:-0.4,auth:+8},
      res:'Honouring the past while cancelling the future removes the only argument that was winning in court, and costs you nothing politically.' },
    { label:'Keep the agency. Rename it and cut it in half.', eff:{congress:+6,courts:+5,press:+5,street:+4,base:-7,auth:+2},
      res:'Half an agency with your name on the door does 70% of the work for 50% of the money and generates no litigation at all.' },
    { label:'Replace the whole thing with a hotline.', eff:{base:+4,street:-7,press:-6,congress:-5,auth:+4}, wild:true,
      res:'One number, staffed by two people, for the humanitarian needs of forty countries. It receives eleven thousand calls on the first day.' }]},

{ id:'b-130-days', title:'Day One Hundred and Thirty', who:C.broom, min:12, max:30, tags:['agencies','power'],
  src:'a special government employee approaching the statutory limit on days of service',
  text:'Roscoe Vandermeer has been counting. "One hundred and thirty days is the statutory cap for what I am. ' +
       'Today is one hundred and twenty-six." He is smiling in a way you have learned to distrust. ' +
       '"So either I stop, or I become something else, or somebody stops counting."',
  choices:[
    { label:'Make him a permanent official. Whatever that requires.', eff:{base:+5,congress:-11,courts:-9,press:-7,auth:+11},
      res:'A confirmation he will not survive, or an appointment that is litigated for two years. You pick the second and it is litigated for three.' },
    { label:'Let the clock run out. Thank him warmly.', eff:{congress:+8,courts:+7,press:+6,base:-7,auth:-2},
      res:'He leaves on day one hundred and thirty, exactly, and the machine he built keeps running without him, which was never the plan.' },
    { label:'Keep him past the cap. Nobody has ever enforced it.', eff:{base:+6,congress:-9,courts:-8,press:-6,auth:+10},
      res:'Nobody enforces it. Every single thing he signs after day 130 is challenged on that ground, though, and four of them fall.' },
    { label:'Reset the count by giving him a new name.', eff:{base:+3,congress:-6,courts:-6,press:-5,auth:+5}, wild:true,
      res:'The paperwork is submitted for a man with a different middle initial. It clears. It is discovered in nine months by a summer intern.' }]},

{ id:'b-doge-exit', title:'The Falling-Out', who:C.broom, min:16, max:36, tags:['agencies','press'],
  src:'a public falling-out between the president and the head of the efficiency drive',
  text:'It has gone wrong in public and at speed. He has posted four things about you; you have posted six about him. ' +
       'Deborah, from the doorway: "Sir, he knows where everything is. He personally has the access logs for ' +
       'nine departments. This is not a normal falling-out."',
  choices:[
    { label:'Escalate. Post again. Cancel his contracts.', eff:{base:+7,press:-10,congress:-8,courts:-7,street:-6,cash:-0.3,auth:+6},
      res:'He starts giving interviews with dates in them. The dates are correct, which is the part your lawyers cannot help with.' },
    { label:'Say nothing more. Let it burn out.', eff:{press:+6,congress:+5,street:+4,base:-4,auth:+4},
      res:'It burns out in eleven days because there is nothing to feed it. He posts twice more into silence and stops.' },
    { label:'Call him. Fix it privately. Give him something.', eff:{press:+4,congress:+3,base:+3,cash:-0.5,auth:+5},
      res:'An expensive, undignified, entirely effective phone call. Nobody ever learns what was on the other side of it.' },
    { label:'Appoint him ambassador to somewhere with poor internet.', eff:{base:+5,press:-4,congress:-4,auth:+5}, wild:true,
      res:'He accepts, immediately, apparently sincerely. The posting has a satellite uplink and he finds it within four hours.' }]},

{ id:'b-eo-count', title:'Seven Point Two Times', who:C.cos, min:6, max:24, tags:['power','press'],
  src:'an executive-order volume many multiples of the historical average for a new administration',
  text:'Deborah has the number a think tank published this morning. "One hundred and forty-three orders in a ' +
       'hundred days. That is 7.2 times the historical average and more than three times your predecessor. ' +
       'Sir, they are not saying it is unlawful. They are saying it is a graph."',
  choices:[
    { label:'Beat the graph. Two hundred by Friday.', eff:{base:+8,congress:-10,courts:-9,press:-6,auth:+11},
      res:'Volume becomes the achievement, so quality stops being anybody\'s job. Eleven of the new orders contradict earlier ones and four are unimplementable.' },
    { label:'Slow to a normal pace. Make the ones we have stick.', eff:{congress:+7,courts:+8,press:+6,base:-8,auth:+3},
      res:'Consolidation is invisible and durable. Two years on, 80% of your orders are still in force, which no previous count achieved.' },
    { label:'Keep the pace. Have counsel clear every one first.', eff:{base:+4,courts:+5,congress:+3,press:+2,auth:+7},
      res:'Sy hires nine people and the strike-down rate falls by half. It is the cheapest structural fix available and nobody notices it happening.' },
    { label:'Sign an executive order about the number of executive orders.', eff:{base:+3,congress:-5,courts:-4,press:-4,auth:+4}, wild:true,
      res:'Order 144 sets a cap of 143. It is immediately the 144th, and therefore in violation of itself on the day it is signed.' }]},

{ id:'b-recess', title:'The Ten-Day Window', who:C.speaker, min:12, max:38, tags:['congress','power'],
  src:'contested use of recess appointments to bypass Senate confirmation',
  text:'Hal Grimes has found the gap. "If the chamber adjourns for more than ten days you may appoint anybody ' +
       'to anything without a vote. I can arrange the adjournment." He pauses. "I can also not arrange it, and ' +
       'I would like it noted that I raised that option."',
  choices:[
    { label:'Arrange it. Fill forty-one posts in one afternoon.', eff:{base:+7,congress:-13,courts:-11,press:-7,auth:+14},
      res:'Forty-one officials with no vote behind them and a shelf life measured in litigation. It is the largest single transfer of appointment power in a century.', breaks:'vesting' },
    { label:'Use it once, for the one post that genuinely matters.', eff:{base:+4,congress:-7,courts:-6,press:-4,auth:+10},
      res:'One appointment, defensible on necessity, that nobody can be bothered to fight. The precedent is set at a price you can afford.', breaks:'consent' },
    { label:'Send the nominees. Take the votes. Lose some.', eff:{congress:+10,courts:+8,press:+6,base:-8,auth:+2},
      res:'Twenty-nine confirmed, twelve rejected. The twenty-nine are unchallengeable for as long as they live, which turns out to matter more.' },
    { label:'Adjourn Congress yourself and see who objects.', eff:{base:+4,congress:-12,courts:-10,press:-6,auth:+8}, wild:true,
      res:'There is a clause that arguably permits it in a disagreement between the chambers. There is no disagreement. You manufacture one by lunchtime.' }]},

{ id:'b-prosecutors-fired', title:'The Ones Who Handled The Cases', who:C.ag, min:10, max:36, tags:['justice','courts'],
  src:'the dismissal of prosecutors who worked the riot cases and pressure on line agents',
  text:'"The prosecutors who worked the riot cases." Bo slides across a list. "Every one of them. And a ' +
       'questionnaire has gone to two thousand agents asking what they worked on. Sir, that is not a personnel ' +
       'process. That is a list being made, and everybody receiving it knows it."',
  choices:[
    { label:'Dismiss all of them. Send the questionnaire.', eff:{base:+8,courts:-12,congress:-9,press:-8,street:-6,auth:+13},
      res:'The message lands perfectly. Four hundred agents decline to answer, eleven resign, and the Bureau spends a decade recruiting against the memory.' },
    { label:'Reassign rather than dismiss. No questionnaire.', eff:{base:+4,courts:-5,congress:-4,press:-4,auth:+9},
      res:'The same people, different desks, no paperwork trail. It achieves the whole objective and generates one paragraph of coverage.' },
    { label:'Leave them. Prosecutors prosecute what lands on them.', eff:{courts:+10,congress:+8,press:+7,base:-9,auth:-3},
      res:'A department that is not afraid of you works faster and, on four occasions this term, works for you. You will never be told about those.' },
    { label:'Send the questionnaire to yourself first.', eff:{base:+3,courts:-5,press:-4,congress:-4,auth:+4}, wild:true,
      res:'You complete it in full, honestly, in your own handwriting. It is the single most incriminating document produced by your administration.' }]},

{ id:'b-sanctions', title:'The Statute That Says Shall', who:C.treas, min:14, max:40, tags:['foreign','congress'],
  src:'declining to implement sanctions Congress made mandatory',
  text:'"Congress passed it 98–2. It does not say *may*. It says *shall*." Lyle puts it down. ' +
       '"Sir, the department has prepared the designations. They are sitting in a drawer, and every week they ' +
       'sit there is a week we are not executing a statute."',
  choices:[
    { label:'Leave them in the drawer. Indefinitely.', eff:{base:+4,congress:-12,courts:-9,press:-6,auth:+12},
      res:'A law passed 98–2 simply does not happen. There is no mechanism to make it happen, which is the discovery, and it is not a comfortable one.', breaks:'takecare' },
    { label:'Designate two of the eleven. Call it phased.', eff:{base:+3,congress:-5,courts:-4,press:-3,auth:+8},
      res:'Partial compliance is unfalsifiable compliance. Two chairs write letters and nobody can say the statute is being ignored.' },
    { label:'Execute the statute in full. It is a statute.', eff:{congress:+11,courts:+9,press:+7,base:-8,auth:-2},
      res:'Eleven designations in a morning. It costs you a foreign relationship you valued and buys you a Congress that stops watching you quite so closely.' },
    { label:'Sanction the drawer.', eff:{base:+3,congress:-7,courts:-5,press:-5,auth:+4}, wild:true,
      res:'A designation is genuinely drafted against a filing cabinet, as a joke, by a tired official at 2am. It is accidentally transmitted.' }]},

/* ══════════════ THE PRESS ══════════════ */

{ id:'b-apology', title:'The Apology And The Library', who:C.press, min:10, max:36, tags:['press','money'],
  src:'a network defamation settlement including an apology, with the money directed to a presidential library',
  text:'Fifteen million dollars, an on-air apology, and the money going to your future library. ' +
       'Kaylee: "Their own counsel thought they would win. They settled anyway, sir, because they have eleven ' +
       'other things in front of the government. That is the part that will be written about."',
  choices:[
    { label:'Take it. Demand the apology run twice.', eff:{base:+8,press:-11,courts:-7,congress:-6,cash:+0.5,auth:+9},
      res:'It runs twice. Four other outlets read the transaction correctly and begin settling things they would previously have fought.' },
    { label:'Take the money. Waive the apology.', eff:{base:+4,press:-5,courts:-4,cash:+0.5,auth:+6},
      res:'Cash without ceremony is a fraction of the story. It also removes the only detail that made it look like a ritual.' },
    { label:'Refuse it. Take them to a verdict.', eff:{press:+9,courts:+7,congress:+5,base:-6,cash:-0.3,auth:-1},
      res:'You lose on the merits in nineteen months. You also acquire something no settlement buys, which is the ability to say you did not take the money.' },
    { label:'Accept payment entirely in advertising slots.', eff:{base:+6,press:-8,courts:-5,congress:-4,auth:+5}, wild:true,
      res:'Fifteen million dollars of airtime on the network that defamed you, scheduled by them, placed at 3am, for eleven months.' }]},

{ id:'b-merger', title:'The Merger On The Desk', who:C.press, min:14, max:40, tags:['press','money'],
  src:'a settlement without an apology by a company whose multi-billion merger required regulatory approval',
  text:'Sixteen million, no apology, and the cheque clears the same week their $8 billion merger needs a sign-off ' +
       'from a regulator you appointed. Kaylee is very carefully not saying anything. Sy is saying it: ' +
       '"Sir, nobody has to prove a link. The calendar is the link."',
  choices:[
    { label:'Take the money. Approve the merger. Same week.', eff:{base:+6,press:-13,courts:-10,congress:-9,street:-6,cash:+0.5,auth:+10},
      res:'Two lawful acts, forty-eight hours apart, that together read as one transaction to every person in the country who owns a calendar.' },
    { label:'Take the money. Delay the merger four months.', eff:{base:+4,press:-6,courts:-5,congress:-4,cash:+0.5,auth:+7},
      res:'Four months of daylight costs you nothing and removes the entire story. It is the cheapest thing you do all year.' },
    { label:'Recuse yourself from the merger entirely.', eff:{press:+9,courts:+8,congress:+7,base:-7,auth:-2},
      res:'A written recusal, filed and public. The merger is approved anyway on the merits, and there is nothing to write about.' },
    { label:'Approve the merger and take the money in shares.', eff:{base:+4,press:-11,courts:-9,congress:-8,cash:+0.6,auth:+6}, wild:true,
      res:'You now own part of the company you just approved. Four ethics officials resign in one afternoon, which is a record that stands.' }]},

{ id:'b-license', title:'Five Letters', who:C.cos, min:12, max:40, tags:['press','power'],
  src:'a communications regulator opening or threatening reviews across multiple broadcasters and public networks',
  text:'Your regulator has opened or threatened reviews touching five broadcasters, including both public networks. ' +
       'None have concluded. Deborah: "That is the design, sir. A review that never concludes is a hand on a shoulder ' +
       'that never lifts."',
  choices:[
    { label:'Open four more. Say publicly that licences should be at risk.', eff:{base:+8,press:-13,courts:-10,congress:-8,street:-6,auth:+12},
      res:'Nothing is ever revoked. Every newsroom involved adds a lawyer to the morning meeting, and the morning meeting is where stories die.' },
    { label:'Keep the reviews. Never mention them again.', eff:{base:+3,press:-7,courts:-5,congress:-4,auth:+9},
      res:'Unremarked pressure works better than announced pressure, because there is nothing for anybody to rally against.' },
    { label:'Close all five. Publicly.', eff:{press:+11,courts:+8,congress:+7,street:+5,base:-9,auth:-4},
      res:'Closing them is reported for one day. The chilling effect takes about four months to wear off and never entirely does.' },
    { label:'Apply for a licence yourself.', eff:{base:+5,press:-6,courts:-4,congress:-4,cash:-0.3,auth:+4}, wild:true,
      res:'The application is filed correctly and enters the queue behind the five reviews you started. Your own regulator now has to decide it.' }]},

{ id:'b-global-media', title:'The Transmitters', who:C.state, min:14, max:42, tags:['press','foreign'],
  src:'the gutting of state-funded international broadcasters',
  text:'"The international services." Muriel is holding a transmission schedule. "Eleven languages, four of them ' +
       'into countries where nobody else broadcasts anything true. If we cut it, the frequency does not go quiet, ' +
       'sir. Somebody else is already on it by Thursday."',
  choices:[
    { label:'Cut all of it. It is not our job to broadcast abroad.', eff:{base:+6,press:-9,congress:-7,street:-5,cash:+0.3,auth:+9},
      res:'Four frequencies are occupied within a month by services that are extremely pleased. It is the cheapest strategic gift of the term.' },
    { label:'Cut the English services. Keep the eleven languages.', eff:{base:+4,press:-4,congress:-3,cash:+0.2,auth:+7},
      res:'The domestic saving is real, the strategic asset survives, and nobody who cared about either is entirely satisfied.' },
    { label:'Fund them fully. Put your name on the masthead.', eff:{press:+7,congress:+6,street:+4,base:-6,cash:-0.3,auth:+3},
      res:'Your name over an editorially independent service that will, within two years, report something about you that you hate.' },
    { label:'Replace all eleven services with one podcast.', eff:{base:+4,press:-7,congress:-5,street:-4,auth:+4}, wild:true,
      res:'It is recorded in a basement, in English only, and is genuinely quite popular in two countries that already agreed with it.' }]},

{ id:'b-pool-slot', title:'The Chair That Was Always There', who:C.press, min:10, max:38, tags:['press','power'],
  src:'the elimination of the permanent wire-service slot in the White House press pool',
  text:'"There has been a wire chair in that pool since before either of us was born." Kaylee is not arguing, ' +
       'exactly. "It is the seat that makes the pool a pool rather than a guest list. If we remove it, sir, ' +
       'the pool becomes something you assemble."',
  choices:[
    { label:'Remove it. The pool is ours to compose.', eff:{base:+6,press:-12,courts:-8,congress:-6,street:-5,auth:+11},
      res:'The seat never comes back, under you or anybody after you. It is the most permanent thing you do to the press and it takes one memo.' },
    { label:'Keep the chair. Rotate who sits in it.', eff:{base:+3,press:-5,courts:-3,auth:+7},
      res:'The institution survives; the person in it becomes a decision you make weekly. That is most of the power for none of the fight.' },
    { label:'Keep the pool exactly as it has always been.', eff:{press:+10,courts:+7,congress:+6,street:+4,base:-8,auth:-3},
      res:'Nothing happens, which is a functioning press arrangement working correctly, and is therefore not a story anywhere.' },
    { label:'Replace the wire chair with an actual armchair.', eff:{base:+4,press:-4,courts:-3,auth:+3}, wild:true,
      res:'A leather wingback is installed in the front row. Nobody can be seen in it without looking ridiculous, which was, on reflection, the point.' }]},

{ id:'b-own-appointee', title:'Your Own Judge', who:C.lawyer, min:12, max:40, tags:['courts','press'],
  src:'an injunction against a press restriction granted by a judge the president appointed',
  text:'The injunction restoring the wire service\'s access has come from a judge you appointed. ' +
       'Sy reads the last line twice. "He was on your list, sir. You interviewed him. He wrote nine pages ' +
       'about viewpoint discrimination and he is not wrong about a single one of them."',
  choices:[
    { label:'Attack him. Say he was a mistake.', eff:{base:+7,courts:-13,press:-9,congress:-7,auth:+5},
      res:'Every judge you have appointed reads that sentence. Four of them rule against you within the year and the pattern is noticed.' },
    { label:'Comply without comment. He is a good judge.', eff:{courts:+11,press:+9,congress:+6,base:-7,auth:-1},
      res:'Restraint costs a day of rage and buys you the benefit of the doubt in eleven later cases. It is the best trade available and it feels awful.' },
    { label:'Appeal. Win a partial stay. Never mention him.', eff:{base:+4,courts:-4,press:-5,congress:-3,auth:+8},
      res:'A partial stay is a partial win and generates no quotable sentence in either direction, which is the whole objective.' },
    { label:'Promote him somewhere with no press cases.', eff:{base:+3,courts:-6,press:-5,congress:-4,auth:+5}, wild:true,
      res:'He declines the elevation in a two-line letter and stays exactly where he is, hearing exactly these cases, for another eleven years.' }]},

{ id:'b-gasoline', title:'"Gasoline"', who:C.press, min:16, max:44, tags:['press','foreign'],
  src:'an international press-freedom body describing a coordinated campaign from the first day',
  text:'A press-freedom monitor has used the word gasoline, and the phrase "a coordinated war on press freedom ' +
       'since the day he took office." Kaylee: "They are not a hostile outlet, sir. They rank a hundred and eighty ' +
       'countries and we were fifty-seventh last year."',
  choices:[
    { label:'Dismiss them as a foreign lobby group.', eff:{base:+6,press:-9,street:-6,congress:-5,auth:+6},
      res:'Attacking the scorekeeper does not move the score. You drop seven more places and the drop is itself the next headline.' },
    { label:'Say nothing. Rankings are rankings.', eff:{press:+4,street:+3,base:-2,auth:+3},
      res:'Ignoring an index starves it of the domestic fight that would have made it news here. It runs abroad and nowhere else.' },
    { label:'Restore the wire seat and close two reviews. Quietly.', eff:{press:+10,courts:+7,congress:+6,street:+5,base:-8,auth:-3},
      res:'You climb four places the following year. Nobody on your own side ever finds out you did anything, which is why it was possible.' },
    { label:'Publish your own index. Rank yourself first.', eff:{base:+6,press:-7,street:-5,congress:-4,auth:+3}, wild:true,
      res:'The methodology section is one sentence long. Four countries ask to be included and three of them are offended by their placement.' }]},

{ id:'b-nonprofit', title:'The Status Review', who:C.treas, min:14, max:42, tags:['press','justice'],
  src:'threats to the tax-exempt status of critical organisations',
  text:'"Four organisations that campaign against you have charitable status." Lyle says it flatly. ' +
       '"Reviewing it is lawful. Announcing that we are reviewing it is also lawful. Sir, the second one is ' +
       'the whole weapon and it costs nothing."',
  choices:[
    { label:'Announce reviews of all four. Today.', eff:{base:+7,press:-12,courts:-10,street:-9,congress:-6,auth:+12},
      res:'None lose status. All four lose donors, because a donor gives to a cause and not to a legal argument, and everybody in fundraising knows it.', breaks:'speech' },
    { label:'Open one quiet review of the one with real irregularities.', eff:{base:+4,press:-4,courts:-4,street:-3,auth:+8},
      res:'A genuine case, pursued normally, that concludes with a genuine finding. It is unattackable precisely because it is boring.' },
    { label:'Instruct the service to leave political groups alone entirely.', eff:{press:+9,courts:+9,street:+8,congress:+6,base:-9,auth:-4},
      res:'A written policy of non-interference that binds your successors as well as you. It is the most consequential memo of the term.' },
    { label:'Grant charitable status to your own campaign.', eff:{base:+5,press:-8,courts:-8,congress:-6,cash:+0.4,auth:+5}, wild:true,
      res:'The application describes the stated charitable purpose as "the advancement of the public good, broadly." It is approved by somebody who is later unable to explain why.' }]},

/* ══════════════ THE MONEY ══════════════ */

{ id:'b-memecoin-collapse', title:'Ninety-Seven Per Cent', who:C.treas, min:14, max:42, tags:['money','press'],
  src:'a presidential token peaking near a fifteen-billion valuation and collapsing about ninety-seven per cent',
  text:'The token peaked at a $15 billion notional valuation and is now worth about $400 million. ' +
       'Lyle: "You took issuance and fees on the way up, sir, so you are unaffected. Roughly two hundred ' +
       'thousand people who are not you are extremely affected."',
  choices:[
    { label:'Say the market is the market. Launch a second token.', eff:{base:+5,press:-11,courts:-9,congress:-8,street:-7,cash:+0.7,auth:+7},
      res:'The second token performs exactly like the first. There is now a pattern rather than an incident, and a pattern is what regulators are for.' },
    { label:'Say nothing about it, ever again.', eff:{base:+2,press:-5,courts:-4,congress:-3,cash:+0.3,auth:+5},
      res:'It falls out of the news in six weeks because there is no new sentence from you to hang it on. The losses do not fall out of anything.' },
    { label:'Refund the smallest ten thousand holders from your own money.', eff:{press:+9,street:+9,congress:+6,courts:+5,base:-5,cash:-0.9,auth:+2},
      res:'It costs a fortune and buys something you cannot otherwise purchase, which is one credible sentence about having done a decent thing.' },
    { label:'Relaunch it at the old price by decree.', eff:{base:+4,press:-8,courts:-7,congress:-6,auth:+4}, wild:true,
      res:'A proclamation fixes the value of a private token at its former high. The market disagrees within nine seconds and continues disagreeing.' }]},

{ id:'b-dinner', title:'The Top Two Hundred', who:C.ethics, min:12, max:40, tags:['money','press'],
  src:'a dinner for the largest holders of a presidential token, criticised as pay-for-access',
  text:'Miriam Applewhite has the guest list and is holding it at arm\'s length. "The invitation criterion is ' +
       'how much of your token somebody owns. That is the only criterion. Sir, there is no way to describe this ' +
       'that does not describe selling an evening with the President."',
  choices:[
    { label:'Host it. Two hundred and twenty guests. Photographs.', eff:{base:+5,press:-12,courts:-10,congress:-9,street:-6,cash:+0.6,auth:+8},
      res:'Four of the guests turn out to be foreign nationals with matters before the government, which nobody checked, because the criterion was the wallet.' },
    { label:'Host it. Screen every guest first. Publish the list.', eff:{base:+3,press:-5,courts:-4,congress:-4,cash:+0.5,auth:+6},
      res:'Eleven names are quietly removed at the screening stage. The published list is dull, and a dull list is not a story.' },
    { label:'Cancel it. Refund the implication.', eff:{press:+9,courts:+8,congress:+7,street:+5,base:-6,cash:-0.2,auth:-1},
      res:'The cancellation is itself an admission and is reported as one. It is still cheaper than the photographs would have been.' },
    { label:'Hold the dinner but do not attend it.', eff:{base:+3,press:-6,courts:-5,congress:-4,cash:+0.4,auth:+4}, wild:true,
      res:'Two hundred and twenty people eat an excellent meal in a rented ballroom opposite an empty chair with a place card on it.' }]},

{ id:'b-stablecoin', title:'The Two Billion', who:C.treas, min:16, max:44, tags:['money','foreign'],
  src:'a foreign sovereign-linked two-billion stablecoin arrangement routed through a presidential business',
  text:'"A sovereign fund is putting two billion dollars into a stablecoin, and the stablecoin is operated by ' +
       'a business with your family\'s name on it." Lyle is choosing his words. "The fee on that is roughly ' +
       'a hundred million dollars a year. To you. From them. For nothing."',
  choices:[
    { label:'Take it. It is a commercial arrangement.', eff:{base:+3,press:-11,courts:-10,congress:-11,street:-6,cash:+0.9,auth:+7},
      res:'It is a commercial arrangement in the same sense that a retainer is. Four committees open files and none of them can name the crime.', breaks:'emoluments' },
    { label:'Take it. Route it through a blind structure.', eff:{base:+2,press:-6,courts:-6,congress:-6,cash:+0.8,auth:+5},
      res:'The structure is genuinely blind and entirely traceable, because a two-billion-dollar deposit is not a thing that hides.' },
    { label:'Decline it while you hold the office.', eff:{press:+10,courts:+9,congress:+9,street:+5,base:-4,cash:-0.4,auth:-2},
      res:'You turn down a hundred million dollars a year and the sentence "he turned it down" becomes load-bearing in four later scandals.' },
    { label:'Accept it in their currency and refuse to convert.', eff:{base:+3,press:-8,courts:-7,congress:-7,cash:+0.5,auth:+4}, wild:true,
      res:'Two billion dollars arrives in a denomination with a weekly export limit. It takes nine years to move and is still moving.' }]},

{ id:'b-927', title:'Nine Hundred and Twenty-Seven Pages', who:C.ethics, min:18, max:46, tags:['money','press'],
  src:'an annual disclosure running to hundreds of pages and showing an extraordinary in-office increase',
  text:'The disclosure is 927 pages. Miriam has read all of them, which nobody else will. ' +
       '"Two point two billion in earnings for the year, sir. One point four of it from tokens. ' +
       'It is all disclosed. That is the defence and it is a good one, and it is also the story."',
  choices:[
    { label:'Release it at 5pm on a Friday and say nothing.', eff:{base:+4,press:-7,courts:-6,congress:-6,cash:+0.3,auth:+7},
      res:'Four reporters read it over the weekend anyway, because 927 pages is a challenge rather than a deterrent to that particular species.' },
    { label:'Release it at a press conference. Walk them through it.', eff:{press:+7,congress:+5,courts:+4,base:-5,auth:+3},
      res:'Two hours of questions, answered. It is the worst afternoon of the year and it ends the story in one afternoon.' },
    { label:'"Everybody\'s profiting. The market is up."', eff:{base:+6,press:-10,courts:-7,congress:-8,street:-6,auth:+5},
      res:'The line is played beside the figure for a fortnight. It is the single most quoted sentence of your presidency and you meant it sincerely.' },
    { label:'Release it as an audiobook, read by you.', eff:{base:+5,press:-4,congress:-3,cash:+0.1,auth:+2}, wild:true,
      res:'Fifty-one hours. It charts. Somebody listens to the whole thing and finds an inconsistency on page 611 that nobody else ever would have.' }]},

{ id:'b-shutdown-two', title:'The Second Shutdown', who:C.treas, min:16, max:44, tags:['congress','economy'],
  src:'appropriations brinkmanship and spending decisions made without appropriations',
  text:'Day twenty-nine. Lyle has stopped predicting an end. "Four agencies are being run on money we have moved ' +
       'from places Congress put it. I need you to understand that the moving is the part that is unlawful, ' +
       'not the shutdown."',
  choices:[
    { label:'Keep moving money. Run the government from the residence.', eff:{base:+7,congress:-13,courts:-10,press:-7,street:-6,auth:+13},
      res:'The government functions, funded by a President rather than by an appropriation. It is the cleanest single answer to what the office has become.', breaks:'purse' },
    { label:'Move money only for pay and safety functions.', eff:{base:+4,congress:-6,courts:-5,press:-3,auth:+8},
      res:'A defensible emergency line that four courts accept and one does not. Air traffic controllers are paid, which ends the political clock.' },
    { label:'Take the deal on the table. End it tonight.', eff:{congress:+11,street:+9,press:+8,courts:+6,base:-11,auth:-3},
      res:'The deal is worse than the one you refused on day four. Twenty-five days bought nothing at all, which is the usual result.' },
    { label:'Declare the shutdown a national holiday.', eff:{base:+5,congress:-7,press:-5,street:-4,auth:+4}, wild:true,
      res:'Eight hundred thousand people are informed that their furlough is now a celebration. Four agencies decorate. It is bleak and it is documented.' }]},

{ id:'b-wall-money', title:'The Reprogramming', who:C.gen, min:12, max:40, tags:['congress','military'],
  src:'redirecting military construction funds to a project Congress declined to fund',
  text:'Tarrant has a list of what stops if the money moves. "A school on a base in Kentucky. A hospital wing ' +
       'in Germany. Barracks in four states." He puts it down. "I will move it if you order me to. I would ' +
       'like the list to be in the record when I do."',
  choices:[
    { label:'Move it. All of it. The list goes in a drawer.', eff:{base:+8,congress:-13,courts:-9,press:-6,street:-5,auth:+13},
      res:'The school is not built. It is still not built nine years later and it is still on a list that a Kentucky congressman reads aloud every March.', breaks:'purse' },
    { label:'Move half. Leave the school and the hospital.', eff:{base:+5,congress:-7,courts:-5,press:-3,auth:+9},
      res:'Choosing which projects die is the difference between a policy and a grudge, and Tarrant makes sure the choosing is documented.' },
    { label:'Do not move it. Build what was appropriated.', eff:{congress:+11,courts:+9,press:+7,base:-10,auth:-3},
      res:'Ninety miles of the thing you promised, plus a school, a hospital wing and four sets of barracks. It is not a photograph anybody wants.' },
    { label:'Move the money and name the wall after the school.', eff:{base:+5,congress:-9,courts:-7,press:-6,auth:+7}, wild:true,
      res:'A commemorative plaque honours an educational facility that was cancelled to pay for the plaque. It is installed. It is still there.' }]},

/* ══════════════ ENFORCEMENT AND THE STREET ══════════════ */

{ id:'b-crime-emergency', title:'The Crime Emergency', who:C.home, min:14, max:42, tags:['street','power'],
  src:'a crime-emergency declaration federalising a capital city\'s guard and police',
  text:'Duane Krisp has the order. "It federalises the District\'s Guard *and* its police department. Both. ' +
       'Sir, the crime figures are down 22% year on year. That is in our own briefing. It is on page one of it."',
  choices:[
    { label:'Sign it. The figures are not the point.', eff:{base:+8,street:-12,courts:-10,congress:-9,press:-7,auth:+14},
      res:'A city\'s police force answers to the President. It is extended twice, costs a third of a billion dollars, and the crime figures continue falling at the same rate.' },
    { label:'Federalise the Guard only. Leave the police alone.', eff:{base:+5,street:-6,courts:-5,congress:-5,press:-4,auth:+10},
      res:'Half the order and a quarter of the objection. The police chief keeps her chain of command and, quietly, keeps you informed anyway.' },
    { label:'No emergency. Fund the city\'s own force instead.', eff:{street:+11,congress:+8,courts:+7,press:+7,base:-9,cash:-0.3,auth:-2},
      res:'Crime falls another 9% and the mayor thanks you on camera, which is worth nothing to your movement and quite a lot to you personally.' },
    { label:'Declare a crime emergency about the crime figures.', eff:{base:+4,street:-7,courts:-6,congress:-5,auth:+5}, wild:true,
      res:'The declaration identifies the falling numbers themselves as suspicious. A statistician at the Bureau of Justice Statistics resigns by email at 4am.' }]},

{ id:'b-332', title:'Three Hundred and Thirty-Two Million', who:C.treas, min:18, max:46, tags:['military','congress'],
  src:'a committee estimate of the cost of an extended domestic deployment',
  text:'A committee minority staff has costed the deployment: $332 million through February. ' +
       'Lyle: "It is an estimate and they will say so. It is also the only number anybody has produced, ' +
       'so it is now the number."',
  choices:[
    { label:'Dispute the figure. Produce no figure of our own.', eff:{base:+5,congress:-9,press:-7,street:-6,auth:+6},
      res:'Disputing a number without offering one leaves the number standing and adds the word "disputed" to it, which changes nothing.' },
    { label:'Publish the real cost. It is lower.', eff:{congress:+7,press:+7,courts:+4,base:-4,auth:+4},
      res:'It is $291 million, which is both lower and enormous. The correction is accurate and does not help even slightly.' },
    { label:'End the deployment. Cite the cost.', eff:{street:+10,congress:+9,press:+7,courts:+6,base:-10,cash:+0.3,auth:-3},
      res:'Withdrawing on fiscal grounds is the one exit that does not read as a retreat. It is available for about six days and you take it.' },
    { label:'Bill the city for it.', eff:{base:+5,street:-9,congress:-8,courts:-6,press:-5,cash:+0.3,auth:+5}, wild:true,
      res:'An invoice for $332 million is sent to a municipal government with an annual budget smaller than that. Its finance director frames it.' }]},

{ id:'b-quick-reaction', title:'The Specialised Unit', who:C.gen, min:20, max:46, tags:['military','street'],
  src:'an order directing a specialised unit and a standing nationwide quick-reaction force',
  text:'"A specialised unit, plus a standing national quick-reaction force for civil disturbance." ' +
       'Tarrant has read it four times. "Sir, a standing force with a domestic mission is a different animal ' +
       'from a deployment. A deployment ends. This is a thing that exists."',
  choices:[
    { label:'Stand it up. Nationwide. Permanent.', eff:{base:+8,street:-13,courts:-11,congress:-10,press:-7,auth:+15},
      res:'A permanent federal force for domestic disturbance, on call, forever. Four retired generals write a joint letter and it is the mildest response you get.' },
    { label:'Stand up the unit. No standing national force.', eff:{base:+5,street:-6,courts:-5,congress:-5,press:-4,auth:+10},
      res:'A capability without a standing mission is a tool rather than a posture. Tarrant signs it without the pause he took over the other version.' },
    { label:'Neither. The Guard exists and answers to governors.', eff:{street:+11,congress:+9,courts:+9,press:+6,base:-10,auth:-4},
      res:'The existing arrangement works, because it was designed by people who had thought about this. Nobody thanks anybody for a system continuing.' },
    { label:'Stand it up and staff it entirely with military bandsmen.', eff:{base:+4,street:-7,courts:-5,congress:-5,auth:+5}, wild:true,
      res:'Four hundred musicians are reassigned to civil disturbance duties. They are, by every subsequent account, unnervingly disciplined about it.' }]},

{ id:'b-state-guard', title:'The Governor Says No', who:C.gov, min:14, max:44, tags:['street','military'],
  src:'federalising a state\'s National Guard over the governor\'s objection',
  text:'Governor Vasquez-Moore has refused, in writing, and posted the letter. ' +
       '"Her Guard, her state, her call, unless you federalise them, at which point they are yours and she ' +
       'is a spectator." Tarrant adds: "Sir, they are the same soldiers either way. Only the letterhead moves."',
  choices:[
    { label:'Federalise them. Her objection is noted and irrelevant.', eff:{base:+8,street:-12,courts:-10,congress:-9,press:-6,auth:+14},
      res:'She sues within four hours. Whatever the ruling, every governor in the country has now been shown that the letterhead is the only thing that was ever protecting them.', breaks:'supremacy' },
    { label:'Federalise a different state\'s Guard and send them in.', eff:{base:+6,street:-9,courts:-8,congress:-7,press:-5,auth:+12},
      res:'Soldiers from one state policing another over both governors\' objections. It is lawful, it is unprecedented, and the photographs travel.' },
    { label:'Accept her refusal. Offer federal funding instead.', eff:{street:+10,congress:+9,courts:+8,press:+6,base:-9,cash:-0.2,auth:-2},
      res:'She takes the money and handles it herself, competently, in nine days. You get no credit and no lawsuit, which is a fair exchange.' },
    { label:'Federalise the Governor.', eff:{base:+4,street:-8,courts:-8,congress:-6,auth:+6}, wild:true,
      res:'Counsel is asked, in earnest, whether a person can be federalised. The answering memo is four words long and one of them is "no".' }]},

{ id:'b-poll-worker', title:'The County Boards', who:C.ag, min:20, max:46, tags:['elections','courts'],
  src:'federal pressure on state and county officials who administer elections',
  text:'"Certification is a state function. It is done by county boards, volunteers, retired teachers, a man ' +
       'who fixes boilers." Bo is uneasy. "We can open federal inquiries into any of them. Not to charge them. ' +
       'To be a thing that is happening to them in the four weeks before they certify."',
  choices:[
    { label:'Open inquiries in the eleven closest counties.', eff:{base:+7,street:-10,courts:-11,congress:-9,press:-7,auth:+14},
      res:'Nobody is charged. Four boards lose their quorum because volunteers resign rather than be investigated, and a quorum is what certification requires.', breaks:'supremacy' },
    { label:'Open one, where there is an actual referral.', eff:{base:+4,courts:-5,street:-4,congress:-4,auth:+8},
      res:'A real case, handled normally. It concludes after the certification and finds a clerical error, which is what these almost always are.' },
    { label:'Send observers instead. No inquiries.', eff:{courts:+8,street:+7,congress:+6,press:+5,base:-7,auth:+2},
      res:'Federal observers are an old, boring institution that both parties have used for sixty years. Nobody resigns and everything is certified on time.' },
    { label:'Federalise the boiler man.', eff:{base:+3,street:-6,courts:-6,congress:-5,auth:+5}, wild:true,
      res:'He is offered a federal appointment nine days before certification. He declines, certifies, and gives one extremely dry interview afterwards.' }]},

{ id:'b-fisa', title:'The Renewal', who:C.spy, min:14, max:44, tags:['security','courts'],
  src:'the reauthorisation of foreign-intelligence surveillance authorities and their domestic reach',
  text:'Errol Hance has the reauthorisation. "It is aimed abroad. It incidentally collects on Americans at ' +
       'scale, and the query rules for that are set internally." He waits. "By me. Which means, in practice, ' +
       'by you, and the only thing between those two sentences is a form."',
  choices:[
    { label:'Loosen the query rules. Broaden the categories.', eff:{base:+5,courts:-12,street:-10,congress:-9,press:-7,auth:+14},
      res:'The number of domestic queries rises by a factor of eleven in a year. The compliance report saying so is classified, filed, and read by nine people.', breaks:'search' },
    { label:'Leave the rules. Renew as-is.', eff:{base:+3,courts:-4,street:-3,congress:-3,auth:+8},
      res:'A boring renewal of a boring authority. Errol is visibly relieved, which is the most information he has ever given you.' },
    { label:'Tighten them. Require a warrant for domestic queries.', eff:{courts:+11,street:+9,congress:+8,press:+7,base:-8,auth:-4},
      res:'It costs the agencies four days of workflow and buys the authority another twenty years of political survival. Errol says so, in writing, gratefully.' },
    { label:'Query yourself and see what comes back.', eff:{base:+3,courts:-7,street:-5,congress:-5,auth:+4}, wild:true,
      res:'Rather more than you expected. You do not mention it again and neither does anybody in the room, and the log entry remains.' }]},

{ id:'b-ai', title:'The Model', who:C.spy, min:18, max:46, tags:['security','street'],
  src:'automated analysis applied to bulk domestic data holdings',
  text:'"We hold the data lawfully. All of it, separately, for separate reasons." Errol turns the laptop around. ' +
       '"What is new is that a model can now read all of it at once and tell you who is likely to organise ' +
       'something. Sir, nobody wrote a rule about this because nobody thought it would work."',
  choices:[
    { label:'Run it. Nationally. Give me the list.', eff:{base:+6,courts:-13,street:-12,congress:-9,press:-8,auth:+15},
      res:'Eleven thousand names ranked by a number nobody can explain, including the people who built it. Four hundred of them are journalists.', breaks:'search' },
    { label:'Run it on foreign networks only. Firewall the domestic data.', eff:{base:+3,courts:-4,street:-3,congress:-3,auth:+9},
      res:'The firewall is real and holds for as long as somebody is paid to maintain it. Errol makes sure that somebody is, for eleven years.' },
    { label:'Do not build it. Write a rule saying so.', eff:{courts:+11,street:+11,congress:+8,press:+8,base:-9,auth:-4},
      res:'The rule is four paragraphs long and is the reason this capability does not exist in 2040. Nobody will ever know that it was a decision.' },
    { label:'Ask the model who it thinks should be president.', eff:{base:+3,courts:-7,street:-6,congress:-5,auth:+4}, wild:true,
      res:'It answers immediately and with total confidence. The answer is not you. The transcript is destroyed and reconstructed twice.' }]},

/* ══════════════ THE CONGRESS ══════════════ */

{ id:'b-margins', title:'Fifty-Three, Forty-Seven', who:C.speaker, min:8, max:34, tags:['congress','power'],
  src:'a narrow trifecta with thin chamber margins and an intact filibuster',
  text:'Hal has the arithmetic on a napkin. "Fifty-three, forty-seven in the Senate. Two hundred and twenty, ' +
       'two hundred and fifteen here, and narrowing every time somebody dies. The filibuster is intact. ' +
       'Sir, you have a trifecta, and a trifecta is not the same thing as a majority that can pass anything."',
  choices:[
    { label:'Then legislate nothing. Do it all by order.', eff:{base:+7,congress:-11,courts:-9,press:-6,auth:+13},
      res:'Nothing you build has a statute under it, so all of it can be undone in an afternoon by whoever comes next. You know this and do it anyway.' },
    { label:'Spend the term on four bills. Actual laws.', eff:{congress:+11,courts:+8,press:+7,street:+5,base:-9,auth:+3},
      res:'Two pass. They are still law in 2049, which is longer than anything else you touch survives by a factor of about twenty.' },
    { label:'Kill the filibuster.', eff:{base:+6,congress:-9,courts:-6,press:-5,auth:+11},
      res:'Four of your own senators refuse, publicly, on the floor. It is the first time this term that your party has told you no and meant it.' },
    { label:'Have the two-hundred-and-fifteen sworn in as advisers instead.', eff:{base:+3,congress:-8,courts:-6,press:-5,auth:+5}, wild:true,
      res:'Letters go to the entire opposition caucus offering unpaid advisory roles. Nine accept, out of curiosity, and are never given anything to advise on.' }]},

{ id:'b-abdication', title:'"Stood By And Did Nothing"', who:C.hist, min:20, max:46, tags:['congress','press'],
  src:'a scholar\'s charge that the legislature abdicated oversight in the face of open illegality',
  text:'Dr Weir has a paper. "The argument is not that Congress was defeated. It is that Congress declined. ' +
       'The phrase is \'stood by and did nothing.\'" She looks up. "Mr President, this is a paper about your ' +
       'opponents, not about you, and it is much worse for you than a paper about you would be."',
  choices:[
    { label:'Circulate it. Frame it. It is a compliment.', eff:{base:+7,congress:-10,press:-7,courts:-6,street:-5,auth:+9},
      res:'Four members read their own inaction described academically and do not enjoy it. Two of them start showing up to hearings.' },
    { label:'Say nothing. An academic paper is an academic paper.', eff:{congress:+4,press:+4,base:-2,auth:+5},
      res:'It is cited nine hundred times in five years and never once mentioned by anybody in this building, which is how these things usually go.' },
    { label:'Invite the committee chairs in. Give them something to oversee.', eff:{congress:+11,courts:+8,press:+8,base:-9,auth:-3},
      res:'You hand a hostile committee four real documents. Oversight resumes, is tedious, and inoculates you against nine later accusations.' },
    { label:'Have Congress pass a resolution denying that it does nothing.', eff:{base:+4,congress:-6,press:-6,courts:-4,auth:+4}, wild:true,
      res:'It passes 388–41. It is the only thing the chamber does that week, which is noted by every person who reports on it.' }]},

/* ══════════════ THE EMERGENCY ══════════════ */

{ id:'b-article-48', title:'The Comparison In The Footnote', who:C.hist, min:22, max:46, tags:['power','press'],
  src:'a legal-journal comparison between open-ended emergency statutes and an interwar constitutional article',
  text:'Dr Weir has a law journal piece. "It argues that your emergency statutes function as an American ' +
       'analogue to an open-ended emergency article, and it names the one from Weimar." She closes it. ' +
       '"The author is careful. The footnote is not an accusation. It is a warning about the architecture."',
  choices:[
    { label:'Attack the author. Call it a Nazi comparison.', eff:{base:+8,press:-9,street:-8,congress:-6,courts:-6,auth:+5},
      res:'The piece goes from four thousand readers to four hundred thousand in a fortnight, and the footnote is now the headline.' },
    { label:'Ignore it. It is a law journal.', eff:{press:+4,street:+3,congress:+3,base:-2,auth:+4},
      res:'Nine people read it and one of them is a Senate staffer, which is how a footnote becomes a bill in about three years.' },
    { label:'Ask Congress to put sunset clauses on the emergency statutes.', eff:{congress:+11,courts:+10,press:+8,street:+7,base:-10,auth:-6},
      res:'The sunsets pass. Every emergency power you hold now expires on a date, including the ones you were relying on, and you signed it yourself.' },
    { label:'Declare an emergency about the comparison.', eff:{base:+4,press:-8,street:-6,courts:-6,congress:-5,auth:+6}, wild:true,
      res:'The proclamation cites the article it is being compared to, by number, in its own authorities section. Dr Weir has it laminated.' }]},

{ id:'b-emergency-stack', title:'Forty-One Active Emergencies', who:C.lawyer, min:16, max:44, tags:['power','congress'],
  src:'the accumulation of concurrently active national emergencies, most inherited and unreviewed',
  text:'"Forty-one national emergencies are currently in force." Sy has counted. "Thirty-four predate you. ' +
       'One has been renewed every year since 1979 and the country it concerns has a different name now. ' +
       'Sir, nobody reviews these. They just roll."',
  choices:[
    { label:'Roll them all. Add six more.', eff:{base:+5,congress:-10,courts:-9,press:-6,auth:+12},
      res:'Forty-seven concurrent emergencies, each unlocking powers nobody has audited. It is the most powerful thing in the building and it is made of paperwork.' },
    { label:'Roll them. Quietly retire the 1979 one.', eff:{base:+2,congress:-4,courts:-3,press:-2,auth:+8},
      res:'Retiring a dead emergency costs nothing and is reported, briefly, as a rare outbreak of tidiness.' },
    { label:'Audit all forty-one. Publish which ones are real.', eff:{congress:+10,courts:+9,press:+8,street:+5,base:-8,auth:-4},
      res:'Eleven survive the audit. You have voluntarily surrendered thirty sets of standing powers, and your successors will not thank you either.' },
    { label:'Consolidate all forty-one into one very large emergency.', eff:{base:+4,congress:-8,courts:-8,press:-5,auth:+7}, wild:true,
      res:'A single proclamation covering everything from Iranian assets to invasive beetles. Sy calls it "the omnibus" and refuses to explain it further.' }]},

/* ══════════════ EDUCATION AND THE INSTITUTIONS ══════════════ */

{ id:'b-education-injunction', title:'Half An Injunction', who:C.edu, min:16, max:44, tags:['culture','courts'],
  src:'an injunction blocking part of an attempt to wind down a cabinet department',
  text:'Bernadette Ollis has the ruling. "It blocks the part that moves the student loan portfolio. It does not ' +
       'block the part that closes eleven regional offices. So the department still exists, sir, and it has ' +
       'nobody in Denver."',
  choices:[
    { label:'Close everything the injunction did not name.', eff:{base:+7,street:-9,courts:-9,congress:-7,press:-6,auth:+12},
      res:'A department that exists on paper and answers no telephones. Four states set up their own offices to do the work and bill the federal government for it.' },
    { label:'Comply fully. Pause the whole wind-down.', eff:{courts:+10,congress:+8,press:+7,street:+6,base:-9,auth:-3},
      res:'Pausing everything while one piece is litigated is what a normal administration would do, and is treated by both sides as an admission of defeat.' },
    { label:'Close the offices. Appeal the loan portfolio.', eff:{base:+4,courts:-4,street:-4,congress:-3,auth:+9},
      res:'You take the win you were given and litigate the rest properly. It is dull, lawful, and gets most of what you wanted in fourteen months.' },
    { label:'Move the whole department to Denver.', eff:{base:+4,street:-5,courts:-4,congress:-4,auth:+5}, wild:true,
      res:'Eleven hundred staff are told to relocate to the one office you just tried to close. Four hundred resign, which was widely understood to be the mechanism.' }]},

{ id:'b-anticipatory', title:'Nobody Called Them', who:C.hist, min:18, max:46, tags:['power','press'],
  src:'institutions conceding pre-emptively without being formally pressured',
  text:'Dr Weir has a list of four institutions that changed policy this month. "A firm, a university, a studio, ' +
       'a bank." She sets it down. "Mr President, none of them were contacted. Not one. There is a name for this ' +
       'and it is anticipatory obedience, and it is the cheapest power there is."',
  choices:[
    { label:'Say nothing and let it spread.', eff:{base:+6,press:-9,courts:-8,street:-8,congress:-6,auth:+13},
      res:'Nine more institutions fold in a quarter, unprompted, and there is no order to challenge because there was never an order.' },
    { label:'Publicly tell them nobody asked them to do this.', eff:{press:+10,courts:+9,street:+9,congress:+7,base:-11,auth:-6},
      res:'Two of the four reverse within a week. Saying it out loud is the only thing that breaks it, and it costs you the mechanism entirely.' },
    { label:'Praise them warmly by name.', eff:{base:+7,press:-11,courts:-9,street:-9,congress:-7,auth:+11},
      res:'Praise is the confirmation the next four institutions were waiting for. It is more effective than any threat and cannot be described as one.' },
    { label:'Ask them all to obey something you have not thought of yet.', eff:{base:+4,press:-7,courts:-6,street:-6,auth:+6}, wild:true,
      res:'A blank instruction goes out. Two organisations comply with it, in writing, and it is genuinely unclear to anybody what they have agreed to do.' }]},

{ id:'b-university-out', title:'The University That Was Asked To Leave', who:C.edu, min:20, max:46, tags:['culture','foreign'],
  src:'the accreditation-and-visa route used elsewhere to force a foreign-funded university out of a country',
  text:'Ollis has been reading how it was done elsewhere. "Nobody closed the university. They changed an ' +
       'accreditation rule and a visa rule, and the university left on its own, and everybody involved could ' +
       'truthfully say they had closed nothing." She looks up. "We could do that here on Thursday."',
  choices:[
    { label:'Change both rules. Let them decide to leave.', eff:{base:+7,street:-10,courts:-9,press:-8,congress:-6,auth:+13},
      res:'They relocate to another country within a year. No order was signed, nothing was banned, and there is no ruling to appeal because there is no decision.' },
    { label:'Change the visa rule only.', eff:{base:+4,street:-5,courts:-4,press:-4,auth:+8},
      res:'Enough friction to be felt, not enough to be fatal. Faculty hiring drops 30% and no story is ever written about it.' },
    { label:'Neither. Attack them in speeches instead.', eff:{street:+6,courts:+6,press:+5,congress:+4,base:-4,auth:+3},
      res:'Rhetoric moves nothing and costs nothing. Their endowment grows and their applications rise, and you say the same speech four more times.' },
    { label:'Found a rival university and accredit it yourself.', eff:{base:+6,street:-5,press:-6,courts:-5,cash:-0.5,auth:+5}, wild:true,
      res:'It opens with four hundred students, eleven faculty and a marble entrance hall. Its first graduating class is, by every measure, extremely loyal.' }]},

/* ══════════════ THE BUREAUCRACY BITES BACK ══════════════ */

{ id:'b-savings-audit', title:'The Savings Figure', who:C.broom, min:12, max:38, tags:['agencies','press'],
  src:'claimed efficiency savings that did not survive external checking',
  text:'Roscoe has announced $180 billion in savings. Four separate outlets have now checked it. ' +
       'Deborah: "The number that survives is about nine billion, sir, and roughly a third of that was ' +
       'a contract that was cancelled before you took office."',
  choices:[
    { label:'Stand by the figure. Repeat it daily.', eff:{base:+7,press:-10,congress:-8,courts:-6,street:-5,auth:+8},
      res:'The gap between the two numbers becomes the story, permanently, and every future saving you announce is now assumed to be a twentieth of what you say.' },
    { label:'Publish the underlying ledger. All of it.', eff:{press:+9,congress:+8,courts:+6,base:-8,auth:+1},
      res:'The real number is nine billion and it is verifiable, which turns out to be worth considerably more than a hundred and eighty unverifiable ones.' },
    { label:'Revise it to nine billion. Say the methodology improved.', eff:{press:+5,congress:+4,base:-4,auth:+4},
      res:'A quiet correction that four people notice. It is the only kind of correction that ever works and nobody in the building enjoys making it.' },
    { label:'Announce $1.8 trillion instead.', eff:{base:+6,press:-9,congress:-8,courts:-6,auth:+5}, wild:true,
      res:'Adding a zero is faster than defending the original and it works identically well with the crowd, which is the genuinely troubling finding.' }]},

{ id:'b-rehire-order', title:'Put Them Back', who:C.cos, min:14, max:42, tags:['agencies','courts'],
  src:'a court ordering agencies to reinstate wrongly terminated workers',
  text:'A judge has ordered reinstatement. Deborah has the practical note. "Four agencies can comply by Friday. ' +
       'Two cannot, because they have already given the office space away and the systems access was deleted, ' +
       'and deleting it took eleven minutes and restoring it takes nine months."',
  choices:[
    { label:'Comply where it is easy. Plead impossibility elsewhere.', eff:{base:+5,courts:-9,street:-7,congress:-6,press:-5,auth:+10},
      res:'Impossibility created by your own haste is still impossibility, legally, and it works. The judge writes a paragraph about that which is read aloud in Congress.' },
    { label:'Comply everywhere. Rebuild the systems.', eff:{courts:+10,street:+9,congress:+7,press:+6,base:-9,cash:-0.3,auth:-3},
      res:'It costs $80 million and nine months to undo eleven minutes. The lesson is expensive, correct, and never learned by anybody.' },
    { label:'Reinstate them on paper. Give them nothing to do.', eff:{base:+4,courts:-6,street:-6,press:-4,auth:+8},
      res:'Technically compliant employment with no duties, no access and no desk. Four of them sue again and this time they bring the first ruling with them.' },
    { label:'Reinstate them and promote them above the people who fired them.', eff:{base:-6,street:+8,congress:+6,courts:+6,press:+6,auth:-2}, wild:true,
      res:'The org chart is now a revenge diagram. Productivity in two of the agencies measurably improves, which nobody wants to talk about.' }]},

{ id:'b-loyalty-questionnaire', title:'Question Eleven', who:C.cos, min:10, max:36, tags:['agencies','press'],
  src:'political screening questions applied to career civil-service hiring',
  text:'The new hiring questionnaire has eleven questions. Ten are normal. Deborah reads the eleventh aloud ' +
       'and stops halfway. "Sir, it asks which policies of yours the applicant admires most. For a job ' +
       'inspecting bridges."',
  choices:[
    { label:'Keep question eleven. Apply it everywhere.', eff:{base:+7,street:-9,congress:-8,courts:-7,press:-6,auth:+12},
      res:'The bridges are inspected by people who admire you. They are, on average, inspected slightly worse, and this is discovered by a bridge.' },
    { label:'Keep it for political appointees. Drop it for career staff.', eff:{base:+4,street:-3,congress:-3,press:-3,auth:+8},
      res:'A distinction that has existed since 1883 and that nobody had to invent, because somebody already did.' },
    { label:'Delete it. Hire the best applicant.', eff:{street:+9,congress:+7,courts:+7,press:+6,base:-8,auth:-2},
      res:'The bridge inspectorate fills four vacancies it has had open for two years. No bridge falls down. This is not attributed to anything.' },
    { label:'Make question eleven the only question.', eff:{base:+5,street:-8,congress:-7,courts:-6,press:-5,auth:+6}, wild:true,
      res:'A one-question application form for the federal government. Applications rise 400% and the calibre of them is exactly what you would expect.' }]},

{ id:'b-inspector-vacancies', title:'The Empty Offices', who:C.ethics, min:16, max:44, tags:['agencies','congress'],
  src:'the prolonged vacancy of inspector-general offices after mass removals',
  text:'Miriam has the map. "Seventeen removed, and eleven of the offices are still empty fourteen months later. ' +
       'Not blocked, sir. Empty. Nobody has been nominated. The audits that would have happened simply have ' +
       'not happened, and there is no record of them not happening."',
  choices:[
    { label:'Leave them empty. Indefinitely.', eff:{base:+5,congress:-11,courts:-8,press:-7,street:-5,auth:+13},
      res:'An oversight function ceases to exist without ever being abolished. It is the most efficient thing anybody does this term and it takes no action at all.' },
    { label:'Fill them with acting officials from within.', eff:{base:+3,congress:-5,courts:-4,press:-4,auth:+9},
      res:'Acting inspectors who report to the people they inspect. Four of them do the job properly anyway, which is a genuine surprise to everybody.' },
    { label:'Nominate eleven real inspectors. Send them for confirmation.', eff:{congress:+11,courts:+9,press:+8,base:-9,auth:-4},
      res:'Nine are confirmed. Two of them produce reports within the year that are extremely bad for you, and the other seven produce reports about procurement.' },
    { label:'Appoint one inspector general for all eleven agencies.', eff:{base:+3,congress:-7,courts:-6,press:-5,auth:+6}, wild:true,
      res:'One person, eleven agencies, four hundred thousand employees. She works extremely hard for nine months and then publishes something remarkable.' }]},

/* ══════════════ SPILLOVER ══════════════ */

{ id:'b-settlement-culture', title:'The Fourth Settlement', who:C.lawyer, min:18, max:46, tags:['press','money'],
  src:'a pattern of settlements by companies with matters pending before the government',
  text:'"A fourth company has settled a case its own lawyers said it would win." Sy is not enjoying this. ' +
       '"There is now a pattern, sir, and a pattern is admissible in a way that four separate incidents are not. ' +
       'Somebody is going to plead it."',
  choices:[
    { label:'Sue a fifth. The pattern is the product.', eff:{base:+6,press:-12,courts:-11,congress:-9,street:-6,cash:+0.6,auth:+9},
      res:'They settle in eleven days without a hearing. A civil claim is now a fee levied on having covered you, and everybody has worked out the rate.' },
    { label:'Sue nobody else this term.', eff:{press:+8,courts:+7,congress:+6,base:-6,auth:-1},
      res:'The pattern needs a fifth entry to be a pattern. Denying it one is free and it dies in the drafting stage of somebody\'s complaint.' },
    { label:'Direct all future proceeds to a charity you do not control.', eff:{press:+7,courts:+7,congress:+6,street:+4,base:-4,cash:-0.4,auth:+2},
      res:'Removing the personal benefit removes most of the argument. It also removes most of the point, which four people notice immediately.' },
    { label:'Sue yourself, to establish a favourable precedent.', eff:{base:+4,press:-6,courts:-7,congress:-5,auth:+4}, wild:true,
      res:'Both sides are represented by government lawyers. The case is dismissed for lack of adversity in a nine-word order that is widely admired.' }]},

{ id:'b-schedule-list', title:'The Reclassification List', who:C.cos, min:10, max:38, tags:['agencies','power'],
  src:'the scale of civil-service reclassification stripping employment protections',
  text:'"The reclassification list." Deborah puts it down carefully. "Fifty thousand career positions moved into ' +
       'a category with no removal protections. Weather forecasters. Grant reviewers. Two hundred statisticians." ' +
       'She pauses. "The statisticians are the ones I would think about, sir."',
  choices:[
    { label:'Reclassify all fifty thousand.', eff:{base:+7,street:-11,congress:-9,courts:-9,press:-7,auth:+14},
      res:'Nobody has to be fired. Fifty thousand people simply now know they can be, and the statistics they produce begin, very slightly, to improve.' },
    { label:'Reclassify the policy roles. Leave the technical ones.', eff:{base:+4,street:-4,congress:-4,courts:-3,auth:+9},
      res:'A line between policy and measurement that is a hundred and forty years old and exists for exactly this reason.' },
    { label:'Withdraw the list entirely.', eff:{street:+10,congress:+9,courts:+8,press:+7,base:-10,auth:-4},
      res:'The forecasters keep forecasting and the statisticians keep counting, and in nineteen months one of those counts saves you an election.' },
    { label:'Reclassify them and let them reclassify you.', eff:{base:+3,street:-6,congress:-5,courts:-5,auth:+5}, wild:true,
      res:'A reciprocal form is circulated as a joke and is completed by eleven thousand federal employees within a day. The results are not published.' }]},

{ id:'b-weyland', title:'The Dissenting Scholar', who:C.hist, min:22, max:46, tags:['press','power'],
  src:'a minority scholarly view that institutions will withstand the pressure',
  text:'Dr Weir has brought you something unexpected. "A serious scholar arguing the opposite of the consensus, ' +
       'that the institutions hold, that the alarm is overstated, that this passes." She hands it over. ' +
       '"Mr President, I want to be clear that I brought this because it is good work, and not because I agree with it."',
  choices:[
    { label:'Put him on every programme. He is the counter-argument.', eff:{base:+8,press:-6,courts:-5,congress:-5,street:-4,auth:+7},
      res:'He is a careful man who says careful things, and being adopted by you costs him the thing that made him worth adopting.' },
    { label:'Read it properly. Change nothing.', eff:{base:+2,press:+3,courts:+3,auth:+4},
      res:'It is the most interesting hour of your presidency. Nothing follows from it and Dr Weir never mentions it again.' },
    { label:'Have him debate the consensus, live, and stay out of it.', eff:{press:+8,courts:+6,congress:+5,street:+5,base:-5,auth:+1},
      res:'Two hours of genuine argument in front of nine million people. It settles nothing and is the healthiest thing to happen all year.' },
    { label:'Appoint him to audit whether you are an authoritarian.', eff:{base:+4,press:+5,courts:+4,congress:+3,auth:-2}, wild:true,
      res:'He accepts on condition of full access and publication rights. You grant both, in writing, apparently without reading the second one.' }]}

);
})();
