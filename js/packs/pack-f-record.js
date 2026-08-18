/* ============================================================
   PACK F, THE RECORD
   Every crisis in this pack is LOOSELY derived from a documented,
   sourced item in `Trump stories.md` / `Trump Research.md`.

   The `src` field names the item it riffs on. It is a research
   citation, not a claim that the fictional events occurred: names,
   numbers, countries and outcomes are all transformed. The rule is
   INSPIRED BY, NEVER COPIED, take the mechanism, invent the rest.

   Contested [CONTEXT FLAG] items from the research are either
   excluded or played as a joke about the dispute itself, per that
   file's own guidance.

   48 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- immigration & the border ---------- */

{ id:'f-entry-ban', title:'The List', who:C.home, min:1, max:14, tags:['immigration','street'],
  src:'sudden entry ban by executive order; airport chaos',
  text:'Duane has an order banning entry from six named countries, effective on signature. ' +
       'No notice to the airlines, no guidance to the airports. "Sir, there are people mid-flight right now."',
  choices:[
    { label:'Sign it. Effective the moment the pen lifts.', eff:{base:+9,courts:-10,street:-9,press:-5,congress:-5,auth:+8},breaks:'citizenship',
      res:'Four thousand people are detained in terminals overnight, including a translator who worked for your own army. Lawyers arrive with printers. It is enjoined in nine days.' },
    { label:'Sign it with a thirty-day implementation window.', eff:{base:+5,courts:-4,street:-3,press:-3,auth:+5},
      res:'The same policy, no images. It survives review because nobody was photographed sleeping on a baggage carousel.' },
    { label:'Redraft it around actual threat assessments.', eff:{courts:+7,street:+6,press:+6,congress:+4,base:-7,auth:+1},
      res:'The intelligence community produces a list of two countries. It is defensible, effective and completely useless as a rally line.' },
    { label:'Ban entry from one country nobody can find on a map.', eff:{base:+3,press:-5,street:-4,courts:-3,auth:+2}, wild:true,
      res:'It has a population of eleven thousand and no direct flights. Four cable panels debate it for a week and its ambassador becomes briefly famous.' }]},

{ id:'f-separation', title:'The Policy', who:C.ag, min:6, max:26, tags:['immigration','street'],
  src:'family separation / "zero tolerance"; 2,800 children',
  text:'"Prosecuting every adult crossing means the children cannot stay with them. That is not a side effect of the policy, ' +
       'sir. That is the deterrent. I am obliged to say that out loud once."',
  choices:[
    { label:'Do it. The deterrent only works if it is known.', eff:{base:+7,street:-13,press:-5,courts:-9,congress:-8,auth:+9},breaks:'dueprocess',
      res:'Two thousand eight hundred children. The tracking system was never built because nobody expected to have to give them back. Four hundred are still unmatched in 2031.' },
    { label:'Prosecute the adults. Keep families together in custody.', eff:{base:+4,street:-5,courts:-4,press:-3,auth:+5},
      res:'It requires family facilities that do not exist, so it becomes a construction programme. Slower, costlier, and nobody makes a documentary about it.' },
    { label:'Kill it before it starts.', eff:{street:+9,courts:+8,press:+7,congress:+6,base:-9,auth:-4},
      res:'Bo closes the folder with visible relief. It is the only time in four years he does that.' },
    { label:'Announce it, then say you never announced it.', eff:{base:+4,street:-6,press:-5,congress:-4,auth:+4}, wild:true,
      res:'The policy is on a signed memo with your initials. You describe it as a law passed by the opposition. Both statements circulate for four years, equally.' }]},

{ id:'f-countries', title:'The Private Remark', who:C.cos, min:4, max:30, tags:['rhetoric','press'],
  src:'disparaging remark about which countries immigrants should come from',
  text:'In a closed meeting you described several nations in terms Deborah will not repeat and asked why more people ' +
       'do not come from somewhere colder. Two of the eleven people present have already told a reporter.',
  choices:[
    { label:'Deny the word. Not the sentiment.', eff:{base:+7,press:-5,street:-7,congress:-5,auth:+4},
      res:'A denial precise enough to be technically true and vague enough to be useless. Eleven ambassadors request clarification and receive four different answers.' },
    { label:'Own it. "I said it and I meant it."', eff:{base:+9,press:-5,street:-10,congress:-8,courts:-4,auth:+6},breaks:'equal',
      res:'Four African states recall their ambassadors for consultations. Your approval among your own voters rises two points, which is the entire calculation.' },
    { label:'Apologise. Specifically. To the countries.', eff:{street:+8,press:+8,congress:+7,base:-10,auth:-3},
      res:'A named, specific apology delivered without qualification. It is so unusual that it leads the news in nine countries and your base treats it as a hostage video.' },
    { label:'Claim you were reviewing average winter temperatures.', eff:{base:+4,press:-5,street:-5,auth:+2}, wild:true,
      res:'The White House releases an actual climate table. It is the most surreal document of the administration and it fools precisely nobody.' }]},

/* ---------- the justice department ---------- */

{ id:'f-director', title:'The Director', who:C.cos, min:4, max:24, tags:['justice','courts'],
  src:'FBI director dismissal; later admitted motive on television',
  text:'The Bureau director running the investigation that touches you serves a ten-year term to insulate him from exactly this. ' +
       'Deborah: "You can remove him. There is no mechanism that stops you. There is only what you say afterwards."',
  choices:[
    { label:'Fire him. Then say why on television.', eff:{base:+6,courts:-12,press:-5,congress:-10,street:-6,auth:+10},
      res:'You give the true reason in an interview because you cannot help it. A special prosecutor is appointed eight days later and the interview is the first exhibit.' },
    { label:'Fire him and stick to the official pretext.', eff:{base:+5,courts:-7,press:-5,congress:-6,auth:+8},
      res:'The pretext holds for eleven weeks. His contemporaneous memos hold considerably longer, because he wrote them the night of your first dinner.' },
    { label:'Leave him. Let the investigation finish.', eff:{courts:+10,congress:+8,press:+7,base:-8,auth:-4},
      res:'It concludes in nineteen months with no charges against you. Nobody remembers this, because nothing happened, which was the entire available outcome.' },
    { label:'Promote him to somewhere with no telephone.', eff:{base:+3,courts:-5,press:-4,congress:-4,auth:+6}, wild:true,
      res:'Director of Federal Facilities, Antarctic Programme. He accepts, serves eleven months, and writes an extremely well-reviewed book about penguins and institutional integrity.' }]},

{ id:'f-witch-hunt', title:'The Investigation', who:C.lawyer, min:8, max:34, tags:['justice','press'],
  src:'sustained delegitimisation of a special counsel inquiry',
  text:'A special prosecutor has been appointed. Sy notes that the fastest way to survive an inquiry is to say nothing, ' +
       'and the fastest way to survive it *politically* is to say something roughly nine hundred times.',
  choices:[
    { label:'Attack it daily. Same two words. Nine hundred times.', eff:{base:+9,courts:-8,press:-5,congress:-6,auth:+7},
      res:'By the time the report lands, 44% of the country has decided in advance that it is illegitimate. The report is 448 pages. The two words are two words.' },
    { label:'Cooperate fully and say nothing publicly.', eff:{courts:+9,press:+8,congress:+7,base:-8,auth:-2},
      res:'It ends quietly and the findings are mixed and nobody reads them. Silence is the single most effective legal strategy available and it is politically unbearable.' },
    { label:'Cooperate, but litigate every subpoena for two years.', eff:{courts:-4,press:-4,congress:-3,base:+4,auth:+8},
      res:'You never refuse anything. You simply never finish complying with anything either, and the calendar does the work that a refusal would have.' },
    { label:'Hire the prosecutor as a consultant. See if that is allowed.', eff:{base:+3,courts:-6,press:-5,congress:-4,auth:+5}, wild:true,
      res:'It is not allowed. Four ethics offices say so in writing within a day, and the attempt is itself referred, which adds a ninth count to something.' }]},

{ id:'f-the-call', title:'The Favour', who:C.state, min:10, max:38, tags:['foreign','justice'],
  src:'call to a foreign leader seeking an investigation into a domestic rival',
  text:'You are on a call with a president whose country needs the aid package sitting on your desk. ' +
       'Muriel is listening. You have just used the phrase "though I would like you to do us a favour."',
  choices:[
    { label:'Ask for the investigation. Explicitly.', eff:{base:+4,congress:-13,courts:-9,press:-5,street:-7,auth:+9},
      res:'There are eleven people on the line. One of them files a concern through the proper channel that afternoon. Everything that happens over the next fourteen months happens because of that one person.', flag:'theCall' },
    { label:'Hint. Never say the name.', eff:{congress:-6,courts:-4,press:-4,base:+3,auth:+7},
      res:'A hint has no transcript problem and exactly the same effect on a government that needs $400 million. This is the version that works.' },
    { label:'Release the aid. Ask for nothing.', eff:{congress:+10,courts:+7,press:+7,street:+6,base:-6,auth:-3},
      res:'The aid goes out on schedule. It is used. People who would have died do not. There is no story of any kind.' },
    { label:'Ask him to investigate someone who does not exist.', eff:{base:+3,congress:-6,press:-5,courts:-4,auth:+5}, wild:true,
      res:'His prosecutors spend four months hunting a man with no birth certificate. The resulting report is filed, in Ukrainian, and is quietly one of the funniest documents in diplomatic history.' }]},

{ id:'f-impeach-one', title:'The Article', who:C.speaker, min:14, max:42, tags:['congress','power'], req:r=>r.flags.theCall,
  src:'impeachment for abuse of power; acquittal in the upper chamber',
  text:'The House has voted. Hal has the Senate arithmetic: you need 34 of 53 to hold, and you have 53 of 53, ' +
       'because every one of them has looked at their own primary electorate and done the same sum.',
  choices:[
    { label:'Whip it to a party-line acquittal. Punish the one who breaks.', eff:{base:+8,congress:-6,courts:-6,press:-5,street:-5,auth:+11},
      res:'One senator votes to convict. He is censured by his own state party within a week and does not seek re-election. Every remaining member has now seen the price list.' },
    { label:'Mount an actual defence on the merits.', eff:{congress:+7,courts:+6,press:+6,base:-4,auth:+3},
      res:'Your lawyers are good and the case against you is genuinely contestable. You are acquitted on argument rather than arithmetic, which is worth far more and nobody notices the difference.' },
    { label:'Refuse to participate. Call the whole thing void.', eff:{base:+7,congress:-9,courts:-8,press:-5,auth:+8},
      res:'You are acquitted anyway. Declining to mount a defence establishes that you did not need one, which is a fact about the Senate rather than about you.' },
    { label:'Attend in person and sit in the gallery.', eff:{base:+4,congress:-4,press:-4,street:-3,auth:+4}, wild:true,
      res:'No president has ever watched his own impeachment trial from the room. Four senators cannot bring themselves to look up. It is enormously effective and deeply strange.' }]},

/* ---------- the 2020-style endgame ---------- */

{ id:'f-find-votes', title:'The Number', who:C.lawyer, min:26, max:48, tags:['elections','power'],
  src:'call to a state official asking him to "find" a specific vote total',
  text:'A state official who is a member of your own party is on the line. Sy is in the room and has stopped writing. ' +
       'You are about to name a specific number of votes and ask him to find them.',
  choices:[
    { label:'Name the number. Ask him to find it.', eff:{base:+5,courts:-13,congress:-11,press:-5,street:-10,auth:+13},
      res:'He records the call, because his lawyers told him to record every call. It runs, in full, for eleven minutes, on every network, four days later.' },
    { label:'Ask him to "look again." Name nothing.', eff:{base:+4,courts:-6,congress:-5,press:-4,street:-5,auth:+9},
      res:'He looks again. He finds the same result. There is no recording that means anything, which is the only meaningful difference between this and the other version.' },
    { label:'Congratulate him on a clean count.', eff:{courts:+10,congress:+9,press:+8,street:+8,base:-11,auth:-6},
      res:'He is so startled he says thank you twice. Your base regards this call, when it leaks, as the single greatest betrayal of the administration.' },
    { label:'Ask him to find one vote. Just one. As a gesture.', eff:{base:+4,courts:-6,congress:-5,street:-4,auth:+6}, wild:true,
      res:'He explains, patiently, that a single fraudulent vote is exactly as illegal as four thousand. You say you understand. Neither of you believes the other.' }]},

{ id:'f-certify', title:'The Certification', who:C.vp, min:30, max:48, tags:['elections','succession'],
  src:'pressure on a vice president to reject certification',
  text:'Chet presides over the count. His role is, on every serious reading, ceremonial. ' +
       'He has been sent four memos arguing otherwise, and he is holding all four, and he has not put them down.',
  choices:[
    { label:'Tell him to reject the slates. Publicly, so he cannot refuse quietly.', eff:{base:+7,congress:-12,courts:-12,street:-12,press:-5,auth:+15},
      res:'He does not do it. He says so in a two-page letter published minutes before the session. It is the single most consequential piece of paper of your presidency and you did not write it.', flag:'chetRefused' },
    { label:'Ask him privately. Accept whatever he says.', eff:{congress:+5,courts:+5,street:+4,base:-5,auth:+2},
      res:'He says no, gently, and it never becomes public, and the two of you are civil for the remaining fortnight and never speak again afterwards.' },
    { label:'Tell him it is ceremonial and to get on with it.', eff:{congress:+9,courts:+9,street:+8,press:+7,base:-9,auth:-6},
      res:'The count proceeds in four hours. Nothing happens. It is the most boring afternoon in the history of the building and it is, in hindsight, the whole ballgame.' },
    { label:'Preside over it yourself. Can you do that?', eff:{base:+4,congress:-6,courts:-6,street:-5,auth:+6}, wild:true,
      res:'You cannot. Four separate offices explain this. You ask each of them to check again, and each of them does, and the answer does not change.' }]},

{ id:'f-hostages', title:'The Word For Them', who:C.social, min:34, max:48, tags:['base','rhetoric'],
  src:'characterising convicted rioters as political prisoners',
  text:'Brayden wants you to start referring to the people convicted of storming the building as "detainees." ' +
       'Not "defendants." Not "convicts." He has focus-grouped it and the number moved eleven points.',
  choices:[
    { label:'Use it. Every speech. Open every rally with it.', eff:{base:+10,courts:-9,street:-9,press:-5,congress:-6,auth:+8},
      res:'Within a year, a third of the country uses the word without noticing they adopted it. Language is the cheapest infrastructure there is and you have just poured a mile of it.' },
    { label:'Use it only about the nonviolent ones.', eff:{base:+6,courts:-4,street:-4,press:-3,auth:+5},
      res:'A distinction that is genuinely defensible and that nobody, on any side, maintains for longer than four weeks.' },
    { label:'Call them what the jury called them.', eff:{courts:+9,street:+8,press:+8,congress:+6,base:-11,auth:-4},
      res:'Four words. Your base experiences it as a defection and Brayden updates his résumé that night.' },
    { label:'Invent a word that means nothing at all.', eff:{base:+5,press:-5,street:-5,courts:-3,auth:+4}, wild:true,
      res:'"The Adjourned." It is meaningless, unfalsifiable and impossible to argue with. Two newspapers adopt it in scare quotes and then, by year three, without them.' }]},

/* ---------- the pandemic ---------- */

{ id:'f-it-will-go', title:'The Curve', who:C.health, min:8, max:34, tags:['street','press'],
  src:'downplaying a pandemic; "it will disappear"',
  text:'Dr. Pike has the modelling. It is bad and it is not close. "Sir, the number of cases doubles every six days. ' +
       'There is no version of the next eight weeks in which this is small."',
  choices:[
    { label:'"It is going to disappear. Like a miracle."', eff:{base:+7,street:-13,press:-5,congress:-8,courts:-4,auth:+5},
      res:'It does not disappear. The sentence is played back at you, with a running death toll on screen, for two years. Pike is moved off the podium in March.' },
    { label:'Tell the country the truth and take the hit.', eff:{street:+10,press:+9,congress:+8,base:-9,auth:-2},
      res:'Approval drops nine points in a fortnight and recovers in six weeks, higher than before, because you were right and everybody could check.' },
    { label:'Say it is serious, then undercut Pike at every briefing.', eff:{base:+6,street:-9,press:-5,congress:-5,auth:+6},
      res:'Two messages from one podium, daily, for a year. Compliance splits along partisan lines within eleven days and never re-converges.' },
    { label:'Put the modelling on a giant chart and argue with it live.', eff:{base:+4,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'Forty minutes of the President arguing with an exponential curve on an easel. The curve wins. It is on the front of four textbooks.' }]},

{ id:'f-the-cure', title:'The Cure', who:C.doc, min:10, max:36, tags:['press','street'],
  src:'promotion of an unproven treatment from the podium',
  text:'A drug with promising anecdotes and no trial data has been mentioned to you by three people, none of them doctors. ' +
       'Admiral Prine: "It may work. We do not know. That is the entire sentence I can defend."',
  choices:[
    { label:'Promote it from the podium. Repeatedly.', eff:{base:+6,street:-10,press:-5,congress:-5,auth:+4},
      res:'Supply vanishes in nine days, including for the people who take it for a different disease entirely. Trials report in four months and it does not work.' },
    { label:'Fund a fast, enormous, properly run trial.', eff:{street:+9,press:+9,congress:+7,base:-4,cash:-0.3,auth:+2},
      res:'It reports in four months, definitively, and the answer is no. Knowing the answer is worth more than the answer.' },
    { label:'Mention it once, hedged, and move on.', eff:{base:+3,street:-3,press:-2,auth:+2},
      res:'A hedge from a podium is not a hedge. Sales rise 400% on the strength of one conditional clause.' },
    { label:'Take it yourself, on camera, daily.', eff:{base:+7,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'Prine refuses to prescribe it and is bypassed by a physician nobody can identify. You are fine. Four hundred thousand people copy you and a measurable number are not.' }]},

{ id:'f-testing', title:'The Testing Number', who:C.health, min:12, max:38, tags:['street','press'],
  src:'suggesting reduced testing to reduce recorded case numbers',
  text:'Case numbers are a function of testing. Pike explains this twice. ' +
       'You have observed, out loud, that if you tested less there would be fewer cases.',
  choices:[
    { label:'Say it at a rally. It is technically true.', eff:{base:+6,street:-11,press:-5,congress:-7,auth:+4},
      res:'It is technically true in the way that not weighing yourself is technically a diet. The clip runs for four years and Pike is asked about it at every hearing.' },
    { label:'Double testing capacity and publish everything.', eff:{street:+10,press:+9,congress:+7,base:-6,cash:-0.4,auth:+2},
      res:'Cases appear to spike because you are finally counting. You explain this clearly, four times, and about half the country understands it.' },
    { label:'Keep testing. Change how cases are reported.', eff:{base:+4,street:-6,press:-5,courts:-3,auth:+7},
      res:'The definition of a case is amended in a technical bulletin. The number falls 22% overnight without a single test being cancelled.' },
    { label:'Test only people who are going to be fine.', eff:{base:+3,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'Somebody actually drafts the criteria before four separate officials work out what has been asked and refuse in sequence.' }]},

/* ---------- environment & energy ---------- */

{ id:'f-accord', title:'The Accord', who:C.state, min:2, max:22, tags:['foreign','economy'],
  src:'withdrawal from an international climate agreement',
  text:'Muriel has the withdrawal instrument. "Non-binding targets, no enforcement, no penalty for missing them. ' +
       'Leaving costs us nothing legally and everything diplomatically, which is an unusual ratio."',
  choices:[
    { label:'Withdraw. Announce it in the Rose Garden.', eff:{base:+8,street:-8,press:-5,congress:-6,courts:-3,auth:+7},
      res:'You join two other countries outside it. Eleven American states announce they will meet the targets anyway, which is either federalism or a rebuke depending on who is asking.' },
    { label:'Stay in and simply miss the targets.', eff:{congress:+5,street:+5,press:+5,base:-5,auth:+6},
      res:'No exit, no headline, no compliance. It is the most cynical option and it is what four other signatories are already quietly doing.' },
    { label:'Stay, and renegotiate the targets downward.', eff:{base:+3,street:+4,press:+4,congress:+4,auth:+3},
      res:'You get a worse agreement with your name on it, which is a better outcome than a better agreement with somebody else\'s.' },
    { label:'Withdraw, and apply to rejoin the following week.', eff:{base:+3,press:-5,congress:-5,street:-4,auth:+3}, wild:true,
      res:'The re-entry process takes 30 days by treaty. For 23 of them the United States is formally outside an agreement it has already applied to rejoin.' }]},

{ id:'f-rollback', title:'Ninety-Eight Rules', who:C.energy, min:8, max:36, tags:['economy','street'],
  src:'large-scale rollback of environmental regulations',
  text:'Cassandra Doyle has a list of ninety-eight rules that could be revoked. ' +
       '"Each one individually is a technical amendment nobody covers. Together they are the largest environmental change in fifty years."',
  choices:[
    { label:'All ninety-eight. One a week, quietly.', eff:{base:+7,street:-10,courts:-9,press:-5,cash:+0.4,auth:+11},
      res:'Ninety-eight Federal Register notices over two years. Four are reported. The cumulative effect is measurable from orbit and is never once a front page.' },
    { label:'The nine that actually cost jobs. Defend those loudly.', eff:{base:+5,street:-4,courts:-4,press:-3,auth:+6},
      res:'A defensible, arguable position that you can win on television, which is nine-tenths of the value of any position.' },
    { label:'Keep them. Fund the transition instead.', eff:{street:+9,press:+8,congress:+6,courts:+5,base:-8,cash:-0.4,auth:-2},
      res:'Eleven thousand retraining places in four states you won. It works, slowly, and is claimed by your successor.' },
    { label:'Revoke one rule ninety-eight times.', eff:{base:+2,courts:-6,press:-5,street:-4,auth:+4}, wild:true,
      res:'A clerical instruction of genuine beauty. The same regulation is revoked, restored and revoked again until a judge asks, in writing, what is happening.' }]},

/* ---------- agencies & the civil service ---------- */

{ id:'f-aid-agency', title:'The Aid Agency', who:C.broom, min:6, max:30, tags:['agencies','foreign'],
  src:'rapid dismantling of a foreign aid agency',
  text:'Vandermeer wants the foreign aid agency gone by Friday. Ten thousand staff, ' +
       'a hundred and thirty countries, and a payment system that keeps four million people on antiretrovirals.',
  choices:[
    { label:'Gone by Friday. Fold the survivors into State.', eff:{base:+7,street:-10,courts:-9,congress:-8,press:-5,auth:+12},
      res:'The payment system stops on the Tuesday. The clinics find out when the money does not arrive. A court orders it restarted in five weeks and by then the supply chains have been sold.' },
    { label:'Cut it by half over eighteen months.', eff:{base:+4,street:-4,courts:-3,congress:-3,auth:+7},
      res:'Half an agency, competently wound down, with the drug programme carved out and protected. Nobody dies and nobody notices.' },
    { label:'Keep it. It is four-tenths of one percent of the budget.', eff:{street:+8,press:+7,congress:+7,courts:+5,base:-8,auth:-3},
      res:'You quote the percentage at a rally. It is the single most effective fact of your presidency and it convinces nobody.' },
    { label:'Rename it. Same staff, same budget, new sign.', eff:{base:+5,congress:-4,press:-4,street:-3,auth:+5}, wild:true,
      res:'The Bureau of American Generosity. It costs $9 million in letterhead and Vandermeer declares total victory on a livestream.' }]},

{ id:'f-rehire', title:'The Rehire Order', who:C.ag, min:10, max:38, tags:['courts','agencies'],
  src:'court order to reinstate wrongly terminated probationary workers',
  text:'A judge has ordered sixteen thousand terminated probationary employees reinstated with back pay. ' +
       'Bo: "The order is clear. The question you are about to ask me is how slowly we can obey it."',
  choices:[
    { label:'Reinstate them, then put them all on administrative leave.', eff:{base:+5,courts:-6,street:-7,press:-5,congress:-5,auth:+10},breaks:'takecare',
      res:'Full compliance. Sixteen thousand people are employed, paid, and instructed not to come in. The judge is furious and can identify no violation.' },
    { label:'Comply properly. Bring them back to their desks.', eff:{courts:+9,street:+8,press:+7,congress:+6,base:-6,auth:-2},
      res:'They come back. Four of them are the only people who know how a benefits system written in 1974 actually works.' },
    { label:'Appeal, and re-fire them correctly during the appeal.', eff:{base:+4,courts:-5,street:-5,press:-4,auth:+9},breaks:'judicial',
      res:'The second termination follows every procedural rule to the letter. It is unchallengeable. You have learned that the process was never the obstacle.' },
    { label:'Reinstate them into a single office in Wyoming.', eff:{base:+3,courts:-6,street:-6,press:-5,auth:+5}, wild:true,
      res:'Sixteen thousand federal employees are formally assigned to a building with four hundred desks. The relocation notice is challenged within a day.' }]},

{ id:'f-independent', title:'The Independent Agencies', who:C.lawyer, min:14, max:44, tags:['power','courts'],
  src:'removal of officials at agencies designed to be insulated from the president',
  text:'"Eleven agencies were built so the President could not remove their officials at will. ' +
       'A precedent from 1935 protects them." Sy shrugs. "It has been narrowed four times. It has never been overruled."',
  choices:[
    { label:'Remove one from each. Force the question.', eff:{base:+5,courts:-11,congress:-9,press:-5,street:-6,auth:+14},
      res:'The emergency docket lets the removals stand pending review, unsigned, at 11pm. The 1935 precedent is not overruled. It is simply, from that night, not operative.' },
    { label:'Remove the one with an actual performance case.', eff:{base:+3,courts:-4,congress:-3,auth:+7},
      res:'A defensible removal on documented grounds. It establishes the power without ever testing it, which is the version that survives.' },
    { label:'Leave them. Independence is why they work.', eff:{courts:+9,congress:+8,press:+7,street:+6,base:-6,auth:-5},
      res:'Four of them subsequently rule against your administration and two of those rulings save you from a considerably worse outcome.' },
    { label:'Appoint yourself to all eleven boards.', eff:{base:+3,courts:-7,congress:-6,press:-5,auth:+6}, wild:true,
      res:'You are ineligible for nine of them and the other two require Senate confirmation of the President by the Senate, which nobody can work out how to schedule.' }]},

{ id:'f-emergency-docket', title:'The Overnight Docket', who:C.ag, min:16, max:46, tags:['courts','power'],
  src:'heavy use of emergency applications decided without full argument',
  text:'"Twenty-nine emergency applications this term. Historically an administration files eight in eight years." ' +
       'Bo puts down the tally. "We have won twenty-three. None of them had oral argument and none of them explain why."',
  choices:[
    { label:'File everything this way from now on. Never seek merits.', eff:{base:+4,courts:-8,congress:-8,press:-5,street:-6,auth:+13},
      res:'You have relocated American constitutional law to a docket with no hearings, no reasoning and no losers who get an explanation. It is entirely procedural and it is the whole game.' },
    { label:'Take the big ones to full argument. Win properly.', eff:{courts:+9,congress:+6,press:+6,base:-4,auth:+4},
      res:'You lose two and win three, with written opinions that bind your successors. The wins are worth four times what an unsigned order is worth.' },
    { label:'File fewer. Pick better.', eff:{courts:+6,press:+4,congress:+4,base:-2,auth:+5},
      res:'Nine applications, eight granted. A reputation for only filing when you are right is worth more than a reputation for filing.' },
    { label:'File one at 4am asking them to rule on everything at once.', eff:{base:+3,courts:-7,congress:-5,press:-4,auth:+5}, wild:true,
      res:'It is 900 pages and asks for relief in forty-one unrelated matters. It is denied in one sentence, which is four words longer than the application deserved.' }]},

/* ---------- rankings, indices and the mirror ---------- */

{ id:'f-the-index', title:'The Index', who:C.state, min:20, max:48, tags:['press','foreign'],
  src:'international democracy indices downgrading the country',
  text:'A monitoring organisation in Gothenburg has, for the first time in fifty years, moved the United States out of ' +
       'its top classification. Muriel has the report. It is 300 pages and it names you in the first paragraph.',
  choices:[
    { label:'Sanction the organisation. Question its funding.', eff:{base:+7,press:-5,street:-8,congress:-7,courts:-6,auth:+9},
      res:'A national government formally attacking a Swedish academic index is itself an indicator in next year\'s methodology. You have moved the number by responding to it.' },
    { label:'Ignore it entirely. Never say the word.', eff:{base:+2,press:+3,street:+2,auth:+3},
      res:'It is covered for two days by outlets your voters do not read and cited for thirty years by people who write the textbooks.' },
    { label:'Publish a rebuttal. Engage on the methodology.', eff:{press:+7,street:+6,congress:+5,courts:+4,base:-5,auth:-1},
      res:'Your rebuttal is serious, detailed and partially correct. They amend two indicators in the following edition and the ranking does not move.' },
    { label:'Commission a rival index. Come first in it.', eff:{base:+6,press:-5,street:-5,congress:-4,cash:-0.2,auth:+5}, wild:true,
      res:'The Freedom Excellence Index rates the United States first of one hundred and ninety-three. Its methodology is four lines long and one of the lines is about you personally.' }]},

{ id:'f-press-rank', title:'Fifty-Seventh', who:C.press, min:18, max:46, tags:['press','foreign'],
  src:'sharp fall in an international press-freedom ranking',
  text:'The press freedom index has moved the country down seven places to 64th. ' +
       'Kaylee: "Between two countries you have publicly described as dictatorships. That is going to be the headline."',
  choices:[
    { label:'Say the ranking is an attack by foreign interests.', eff:{base:+6,press:-5,street:-6,congress:-5,auth:+6},
      res:'The organisation adds a sentence about official retaliation to its country profile. Every response you make is itself scored.' },
    { label:'Do one concrete thing: restore the wire seat.', eff:{press:+9,street:+6,congress:+5,base:-5,auth:-1},
      res:'One chair, one credential, one afternoon. The ranking recovers four places the following year and nobody in your office believes the two facts are related.' },
    { label:'Nothing. It is a list.', eff:{press:-3,street:-2,base:+2,auth:+2},
      res:'It is a list, and it is cited in every article written about your presidency for the next forty years, which is what a list is for.' },
    { label:'Point out that 64th is still in the top third.', eff:{base:+4,press:-5,street:-4,congress:-3,auth:+2}, wild:true,
      res:'It is arithmetically correct and it is the single most damning sentence anyone in the administration utters, and you deliver it cheerfully.' }]},

/* ---------- money ---------- */

{ id:'f-stablecoin', title:'The Two Billion', who:C.treas, min:14, max:44, tags:['money','foreign'],
  src:'foreign-linked crypto investment routed through a presidential business interest',
  text:'A sovereign investment arm will place $2 billion through a token issued by a company your family controls. ' +
       'Lyle: "The fee on that flow is roughly $100 million a year and it is paid to you by a foreign state, indirectly, forever."',
  choices:[
    { label:'Take it. It is a private commercial arrangement.', eff:{base:+3,congress:-9,courts:-8,press:-5,street:-5,cash:+1.4,auth:+7},breaks:'emoluments',
      res:'Two words in the sentence are doing all the work: "private" and "indirectly." Neither survives a subpoena in 2032, by which point the money has been spent.' },
    { label:'Take it, but publish the flow monthly.', eff:{congress:-3,courts:-3,press:+4,cash:+1.1,auth:+4},
      res:'Full disclosure of an indefensible arrangement turns out to defuse it almost entirely. Everybody can see it, so nobody investigates it.' },
    { label:'Refuse. Some money has a return address.', eff:{congress:+8,courts:+8,press:+8,street:+6,base:-4,cash:-0.4,auth:-2},
      res:'Lyle writes the refusal himself and keeps a copy at home, which he has not done for any other document in four years.' },
    { label:'Take it and immediately lend it back at a worse rate.', eff:{base:+2,congress:-5,courts:-5,press:-5,cash:+0.6,auth:+4}, wild:true,
      res:'A round trip that leaves everyone slightly poorer except the intermediary, who is your son-in-law\'s roommate.' }]},

{ id:'f-net-worth', title:'The Disclosure', who:C.ethics, min:24, max:48, tags:['money','press'],
  src:'annual financial disclosure showing an extraordinary in-office increase',
  text:'The annual filing is 927 pages. Miriam Applewhite has read all of them. ' +
       '"Your net worth has roughly doubled while in office. Every line is legal. That is what makes it a story."',
  choices:[
    { label:'File it at 6pm on the Friday before a holiday.', eff:{base:+3,press:-5,congress:-5,courts:-4,auth:+6},
      res:'Standard practice, universally understood, and it buys you eleven days. A wire service reads all 927 pages anyway because that is one reporter\'s entire job.' },
    { label:'File it and hold a press conference about it.', eff:{press:+9,congress:+7,courts:+5,street:+5,base:-4,auth:+1},
      res:'Ninety minutes of questions about a document you volunteered. It is excruciating and it ends the subject in a single afternoon.' },
    { label:'"The stock market went up. Everybody is profiting."', eff:{base:+6,press:-5,street:-6,congress:-5,auth:+4},
      res:'Median household wealth over the same period rose 1.4%. The comparison is made by four separate outlets using your own filing as the source.' },
    { label:'File it in a font nobody can read.', eff:{base:+2,press:-5,congress:-4,courts:-4,auth:+4}, wild:true,
      res:'927 pages at six point. A volunteer transcription project completes it in nine days and the resulting searchable version is far worse for you than the original.' }]},

/* ---------- culture-war orders ---------- */

{ id:'f-two-orders', title:'The Stack', who:C.cos, min:1, max:20, tags:['culture','power'],
  src:'a rapid opening series of culture-focused executive orders',
  text:'Deborah has four orders drafted for day one. Each is short, each is immediately litigable, ' +
       'and each is designed to be the most-discussed thing in the country for exactly one news cycle.',
  choices:[
    { label:'All four. Signed on camera. Held up to the room.', eff:{base:+10,courts:-8,street:-9,press:-5,congress:-5,auth:+8},
      res:'Four orders, four lawsuits, four weeks of saturation coverage. Two are struck down and by then they have done the only job they were written to do.' },
    { label:'One at a time, a fortnight apart.', eff:{base:+7,courts:-5,street:-5,press:-4,auth:+7},
      res:'Sustained rather than spectacular. Each gets its own cycle and the cumulative coverage is four times the volume of signing them together.' },
    { label:'Sign none. Send the whole file to Congress.', eff:{congress:+8,courts:+8,street:+7,press:+6,base:-9,auth:-4},
      res:'Three die in committee and one passes in an amended form that actually survives your presidency, which none of the orders would have.' },
    { label:'Sign four blank sheets and fill them in later.', eff:{base:+4,courts:-7,press:-5,congress:-4,auth:+5}, wild:true,
      res:'The photographs exist, the orders do not, and for nine days the country argues about the contents of four pieces of blank paper.' }]},

{ id:'f-service-ban', title:'The Serving Members', who:C.gen, min:6, max:34, tags:['culture','military'],
  src:'executive order barring a category of people from military service',
  text:'Tarrant has the numbers: fifteen thousand currently serving, four hundred deployed, ' +
       'and a readiness review commissioned by the previous administration that found no operational effect.',
  choices:[
    { label:'Sign it. They have ninety days.', eff:{base:+8,street:-10,courts:-9,press:-5,congress:-6,auth:+8},breaks:'equal',
      res:'Four hundred people are recalled from deployments. Their replacements take six months to train. Tarrant provides the readiness cost in a memo you do not read.' },
    { label:'Grandfather everyone currently serving.', eff:{base:+4,street:-4,courts:-3,press:-3,auth:+5},
      res:'The policy applies to nobody who exists. It is a press release with a legal citation and it holds up in court precisely because it does nothing.' },
    { label:'Follow the readiness review.', eff:{street:+8,congress:+7,press:+7,courts:+6,base:-9,auth:-3},
      res:'Tarrant says "thank you, sir" in a tone he has not used before. Fifteen thousand people keep their jobs and nothing whatsoever happens.' },
    { label:'Ban a category that has never existed in the armed forces.', eff:{base:+4,street:-6,press:-5,courts:-4,auth:+3}, wild:true,
      res:'The order bars anybody holding a hereditary foreign title. It applies to zero personnel. Four hundred thousand people share it approvingly without checking.' }]},

/* ---------- foreign ---------- */

{ id:'f-nuclear-deal', title:'The Agreement', who:C.state, min:8, max:38, tags:['foreign','security'],
  src:'withdrawal from a multilateral nuclear agreement',
  text:'"They are complying. Our own inspectors confirm it, the allies confirm it, and the agreement is working ' +
       'on the only metric it was written for." Muriel closes the folder. "You campaigned on tearing it up."',
  choices:[
    { label:'Tear it up. Reimpose everything.', eff:{base:+8,congress:-8,street:-7,press:-5,courts:-4,auth:+8},
      res:'They restart enrichment in fourteen months. The three European signatories keep trying to hold it together for two years and then quietly stop.' },
    { label:'Stay in and demand a follow-on agreement.', eff:{congress:+7,street:+6,press:+6,base:-7,auth:+2},
      res:'The follow-on talks take four years and produce something marginally better with your name on it, which nobody in your base ever reads.' },
    { label:'Stay in and violate the spirit of it constantly.', eff:{base:+5,congress:-3,street:-3,press:-3,auth:+7},
      res:'All of the leverage, none of the collapse. It is the sophisticated version and it is completely invisible at a rally.' },
    { label:'Tear it up and post the pieces.', eff:{base:+5,congress:-6,street:-5,press:-5,auth:+4}, wild:true,
      res:'A photograph of a shredded treaty. It is reprinted in four national curricula as an illustration of something, and the something varies by country.' }]},

{ id:'f-fell-in-love', title:'The Letters', who:C.spy, min:12, max:42, tags:['foreign','press'],
  src:'unusually warm public praise for an authoritarian counterpart',
  text:'Hance has the file. The letters from North Korea are, in his professional assessment, ' +
       '"drafted by a committee to flatter a specific individual." You have described them as beautiful.',
  choices:[
    { label:'Say you fell in love. Out loud. At a rally.', eff:{base:+6,street:-8,press:-5,congress:-8,courts:-4,auth:+6},
      res:'Four allied intelligence services quietly reduce what they share. The letters continue. Nothing is denuclearised and two summits produce a joint statement of 79 words.' },
    { label:'Keep the channel. Say nothing warm in public.', eff:{congress:+6,street:+5,press:+5,base:-3,auth:+6},
      res:'The diplomacy is real, the flattery is private, and it produces a testing moratorium that holds for three years.' },
    { label:'Publish the letters. All of them.', eff:{press:+8,congress:+6,street:+5,base:-4,auth:+2},
      res:'They are extraordinary documents and profoundly embarrassing to both signatories. Historians are delighted. The channel closes within a fortnight.' },
    { label:'Write back in verse.', eff:{base:+4,congress:-5,press:-5,street:-4,auth:+3}, wild:true,
      res:'Eleven lines, non-rhyming, drafted by Gideon Poe under protest. It is answered, in kind, at greater length and with better scansion.' }]},

{ id:'f-gold-star', title:'The Family', who:C.gen, min:10, max:44, tags:['military','press'],
  src:'public feuding with a bereaved military family',
  text:'The parents of a soldier killed in action have criticised you publicly, by name, at a televised event. ' +
       'Tarrant is here to say one thing: "Sir. There is no version of arguing with them that you win."',
  choices:[
    { label:'Respond. You are not going to be spoken to like that.', eff:{base:+4,street:-12,press:-5,congress:-9,courts:-4,auth:+3},
      res:'It runs for eleven days. Four senators from your own party break publicly. It is, by every measure any pollster applies, the worst week of your presidency.' },
    { label:'Say nothing at all. Send a private letter.', eff:{street:+8,press:+7,congress:+6,base:-4,auth:+1},
      res:'The letter is never published. They mention, years later, that it was handwritten and that it was better than they expected.' },
    { label:'Call them. Listen for as long as they want.', eff:{street:+10,press:+9,congress:+8,base:-5,auth:-1},
      res:'Ninety minutes, mostly them. They do not change their view of you and they say so publicly, and they also say you listened, and both halves get quoted.' },
    { label:'Have the Vice President handle it entirely.', eff:{base:+2,street:-4,press:-4,congress:-3,auth:+2}, wild:true,
      res:'Chet does it perfectly, of course, and is photographed with the mother, and keeps that photograph, and you notice him keeping it.' }]},

{ id:'f-war-hero', title:'The Senator', who:C.press, min:8, max:44, tags:['press','congress'],
  src:'disparagement of a decorated veteran and political rival',
  text:'A senator from your own party, a decorated veteran, held prisoner for five years, has voted against you. ' +
       'Brayden has a line about his war record. Kaylee has stopped typing.',
  choices:[
    { label:'Use the line. About the capture.', eff:{base:+5,congress:-11,street:-10,press:-5,courts:-4,auth:+4},
      res:'It should end your career. It does not. That it does not is the single most significant political fact of the decade and everyone in the room understands it immediately.' },
    { label:'Attack the vote. Never the record.', eff:{base:+5,congress:-3,press:+3,street:+2,auth:+4},
      res:'A normal, brutal, entirely conventional political attack. It works and nobody writes a book about it.' },
    { label:'Praise the record and take the loss.', eff:{congress:+8,street:+7,press:+7,base:-6,auth:-2},
      res:'Four senators who were wavering on the next bill vote with you, and none of them can tell you why.' },
    { label:'Award him a medal. A big one. Immediately.', eff:{base:-4,congress:+8,street:+7,press:+7,auth:+2}, wild:true,
      res:'He accepts it with impeccable courtesy and votes against you again eleven days later, holding the medal, which he mentions.' }]},

/* ---------- pardons ---------- */

{ id:'f-governor-pardon', title:'The Governor Who Sold A Seat', who:C.lawyer, min:10, max:44, tags:['justice','press'],
  src:'clemency for a governor convicted of selling a public appointment',
  text:'A former governor is eight years into fourteen for attempting to sell a Senate seat. ' +
       'Sy notes he was convicted on tape, of the exact thing, in his own voice.',
  choices:[
    { label:'Commute it. Call him a very fine person.', eff:{base:+4,courts:-8,press:-5,congress:-7,street:-6,auth:+8},
      res:'He is on television within a week describing the prosecution as political. Four other convicted officials file petitions the following month citing the precedent.' },
    { label:'Commute it quietly with no statement.', eff:{base:+2,courts:-4,press:-4,congress:-4,auth:+6},
      res:'A Friday list of eleven names. Nobody notices for nine days and by then it is a process story rather than a moral one.' },
    { label:'Leave it. He was recorded doing it.', eff:{courts:+7,press:+6,congress:+6,base:-3,auth:-1},
      res:'The clemency office processes the 14,000 pending petitions from people without lawyers instead, and clears 900 of them.' },
    { label:'Pardon him on condition he never speaks publicly again.', eff:{base:+3,courts:-6,press:-5,congress:-5,auth:+7}, wild:true,
      res:'The condition is unenforceable and he violates it within four days, on a podcast, at length, while thanking you.' }]},

{ id:'f-activist-pardons', title:'The Blockade', who:C.ag, min:6, max:40, tags:['justice','base'],
  src:'clemency for activists convicted under a clinic-access statute',
  text:'Twenty-three people convicted of physically blockading a clinic. ' +
       'Bo: "They knew the statute, they were warned on the day, and they wanted the conviction. It is a martyrdom strategy."',
  choices:[
    { label:'Pardon all twenty-three. Invite them in.', eff:{base:+9,courts:-7,street:-8,press:-5,congress:-5,auth:+7},
      res:'The photograph on the steps is used, by both sides, in every fundraising email for four years. It is worth more to your opponents than to you and both of you know it.' },
    { label:'Pardon them. No ceremony, no photograph.', eff:{base:+6,courts:-4,street:-4,press:-3,auth:+5},
      res:'The clemency, without the staging, is a one-day story. Your base gets what it wanted and nobody else gets an image.' },
    { label:'Nothing. The statute is the statute.', eff:{courts:+8,street:+7,press:+6,congress:+4,base:-9,auth:-3},
      res:'Four faith leaders who have defended you for a decade stop returning your calls, permanently, over twenty-three people.' },
    { label:'Pardon them and the people they blockaded.', eff:{base:+3,courts:-4,street:+3,press:+3,auth:+3}, wild:true,
      res:'The second group were not charged with anything. They are pardoned anyway, for nothing, and four of them frame it.' }]},

/* ---------- the base and the machine ---------- */

{ id:'f-stand-by', title:'The Debate Question', who:C.social, min:14, max:46, tags:['rhetoric','street'],
  src:'an equivocal debate answer when asked to condemn an armed group',
  text:'You have been asked, on live television, to condemn an armed group by name. ' +
       'Brayden is in your earpiece. There are ninety million people watching and about four seconds of air.',
  choices:[
    { label:'"Stand by." Say it and move on.', eff:{base:+8,street:-12,press:-5,congress:-8,courts:-6,auth:+7},
      res:'The group prints it on merchandise within ninety minutes. You spend the next four days explaining that two words meant their opposite.' },
    { label:'Condemn them. Flatly. By name.', eff:{street:+9,press:+8,congress:+7,courts:+5,base:-8,auth:-2},
      res:'Four seconds of unambiguous English. It costs you nothing you were going to use and removes an entire year of coverage.' },
    { label:'Condemn "all violence" and name nobody.', eff:{base:+4,street:-5,press:-4,congress:-4,auth:+4},
      res:'The classic. It satisfies nobody, offends nobody, and is understood correctly by everybody, which is the point of it.' },
    { label:'Condemn a group that does not exist.', eff:{base:+4,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'You forcefully denounce the Western Vanguard Collective. Four fact-checkers establish it has never existed. Eleven thousand people join it within a month.' }]},

{ id:'f-rat-infested', title:'The District', who:C.social, min:10, max:44, tags:['rhetoric','congress'],
  src:'describing a congressman\'s majority-minority district in dehumanising terms',
  text:'A committee chairman has subpoenaed your financial records. Brayden has drafted a post about his district, ' +
       'its crime rate, its housing stock, and one adjective that is doing all of the work.',
  choices:[
    { label:'Post it. The adjective stays.', eff:{base:+8,street:-11,press:-5,congress:-9,courts:-4,auth:+5},
      res:'Volunteers clean four blocks of that district the following weekend and post the photographs. It is the best organised response any of your posts ever receives.' },
    { label:'Post the crime statistics. No adjective.', eff:{base:+5,street:-4,congress:-4,press:-3,auth:+4},
      res:'The numbers are real and the framing is brutal and there is nothing anybody can do about it. Considerably more effective and entirely unquotable.' },
    { label:'Go there. Announce a federal housing programme.', eff:{street:+10,press:+9,congress:+7,base:-8,cash:-0.3,auth:+1},
      res:'You are booed on arrival and applauded on departure. The subpoena is not withdrawn and the programme builds nine hundred units.' },
    { label:'Post about your own district instead.', eff:{base:+3,street:-5,press:-4,congress:-3,auth:+2}, wild:true,
      res:'You do not have a district. You describe the one you grew up in, unkindly, and its current residents respond in numbers.' }]},

{ id:'f-death-toll', title:'The Death Toll', who:C.home, min:10, max:44, tags:['street','press'],
  src:'public dispute of an official disaster mortality figure',
  text:'An academic study has put the hurricane death toll on the territory at nearly three thousand, ' +
       'far above the initial official count. Duane has the methodology. It is sound.',
  choices:[
    { label:'Dispute the number. Say it was invented to hurt you.', eff:{base:+5,street:-13,press:-5,congress:-8,courts:-4,auth:+3},
      res:'Three thousand people become a rhetorical position. The territory does not forget, and neither does every family named in the appendix.' },
    { label:'Accept it. Order a full after-action review.', eff:{street:+10,press:+9,congress:+8,base:-6,auth:+1},
      res:'The review finds four systemic failures, three of which predate you. Fixing them costs $2 billion and saves an estimated eleven hundred lives in the next storm.' },
    { label:'Accept the number. Say nothing else. Ever.', eff:{street:+6,press:+5,congress:+4,base:-3},
      res:'Silence on a mortality figure is the only dignified option available and it is over in a day.' },
    { label:'Ask whether the number can be revised for inflation.', eff:{base:+2,street:-7,press:-5,congress:-4,auth:+2}, wild:true,
      res:'The question is asked sincerely in a meeting of eleven people. Nobody answers it. Two of them describe the silence, separately, in later interviews.' }]},

/* ---------- the machinery of a second-term purge ---------- */

{ id:'f-health-body', title:'The Global Body', who:C.health, min:1, max:26, tags:['foreign','street'],
  src:'withdrawal from an international health organisation',
  text:'Withdrawal takes twelve months\' notice and $400 million in unpaid assessments. ' +
       'Pike: "We wrote most of its protocols. We would be leaving an institution we built, that we lead, and that we use."',
  choices:[
    { label:'Give notice on day one.', eff:{base:+8,street:-9,congress:-7,press:-5,courts:-3,auth:+8},
      res:'You lose access to the influenza strain-sharing network that determines the vaccine formula. Nobody in the room knows this on the day of signing.' },
    { label:'Stay in and withhold half the funding.', eff:{base:+5,street:-3,congress:-3,press:-3,auth:+7},
      res:'All of the leverage, none of the exit. Four reforms you actually wanted are adopted within two years.' },
    { label:'Stay. Demand the director-general\'s resignation instead.', eff:{base:+4,street:+3,congress:+3,press:+3,auth:+4},
      res:'He goes in eighteen months and is replaced by somebody you approve of, which was the actual objective all along.' },
    { label:'Found a rival organisation with four members.', eff:{base:+4,street:-6,congress:-5,press:-5,cash:-0.3,auth:+4}, wild:true,
      res:'The Global Health Alliance of the Free. Its founding members are you and three countries with a combined population smaller than Ohio.' }]},

{ id:'f-education', title:'The Department', who:C.edu, min:8, max:38, tags:['agencies','culture'],
  src:'executive action to wind down a cabinet department',
  text:'Ollis: "You cannot abolish a department created by statute. You can reduce it to a switchboard. ' +
       'The switchboard would still have to send $28 billion a year to schools, because that is also statute."',
  choices:[
    { label:'Reduce it to a switchboard. Fire the rest.', eff:{base:+8,street:-8,courts:-8,congress:-7,press:-5,auth:+11},
      res:'The money still goes out because it must. What stops is the enforcement of the conditions attached to it, which was the entire function.' },
    { label:'Keep it. Change what the conditions require.', eff:{base:+5,street:-4,courts:-3,press:-3,auth:+8},
      res:'Same department, same staff, same $28 billion, entirely different conditions. It is faster, cheaper and completely invisible.' },
    { label:'Send an abolition bill to Congress and let it die.', eff:{base:+6,congress:-4,street:+3,press:+3,auth:+3},
      res:'It gets 189 votes. You campaign on the 189 for four years and never mention that you needed 218.' },
    { label:'Abolish it and put the switchboard in the Post Office.', eff:{base:+4,street:-6,courts:-5,congress:-4,auth:+5}, wild:true,
      res:'The Postal Service is constitutionally separate and cannot be assigned it. Four lawyers explain this. It is attempted anyway and fails on a technicality about mail.' }]},

{ id:'f-roe-credit', title:'The Credit', who:C.pastor, min:14, max:46, tags:['culture','base'],
  src:'publicly claiming personal credit for the reversal of a landmark ruling',
  text:'The Court has reversed a fifty-year precedent. Reverend Muncy is in the room, weeping. ' +
       'Nadia has the polling, which says the reversal is unpopular by eleven points and your role in it is not widely known.',
  choices:[
    { label:'Claim it. "I was able to do that."', eff:{base:+9,street:-9,press:-5,congress:-6,courts:-4,auth:+6},breaks:'religion',
      res:'You attach yourself personally to the least popular institutional act of the decade. Your base is ecstatic and four suburban counties move eleven points the other way.' },
    { label:'Credit the justices and say nothing more.', eff:{base:+5,courts:+6,press:+4,street:+3,auth:+3},
      res:'Restraint, from you, on this. Muncy notices and says so from the pulpit, and it is worth more than the claim would have been.' },
    { label:'Say the Court decided and you had no part in it.', eff:{street:+7,press:+6,congress:+5,base:-8,auth:-2},
      res:'It is not true, you appointed three of them and said so at the time, and the archive footage runs beside the denial within a day.' },
    { label:'Claim credit for a ruling that went against you.', eff:{base:+4,courts:-5,press:-5,street:-4,auth:+3}, wild:true,
      res:'You describe a 6-3 defeat as a personal victory in enough detail that two networks check whether they have the case name wrong.' }]},

/* ---------- the mirror ---------- */

{ id:'f-political-scientists', title:'The Survey', who:C.hist, min:22, max:48, tags:['press','power'],
  src:'a survey of political scientists showing a sharp fall in democratic quality scores',
  text:'Dr. Weir has a survey of nine hundred political scientists. Their assessment of American democratic quality ' +
       'has fallen further in ten months than in the previous forty years combined. "You asked me for honest material, sir."',
  choices:[
    { label:'Have their federal grants reviewed.', eff:{base:+6,street:-9,courts:-8,press:-5,congress:-7,auth:+11},
      res:'The review finds nothing. The following year\'s survey adds a question about researcher intimidation and the score falls again, faster.' },
    { label:'Invite four of them in. Ask what would move it back.', eff:{street:+9,press:+9,congress:+7,courts:+6,base:-7,auth:-4},
      res:'They give you eleven specific, boring, achievable answers. You do two of them. Both work.' },
    { label:'Ignore it. It is nine hundred professors.', eff:{base:+3,press:-2,street:-2,auth:+3},
      res:'It is nine hundred professors, and it is the dataset every history of this period is written from.' },
    { label:'Take the survey yourself and submit it anonymously.', eff:{base:+2,press:-5,street:-5,courts:-3,auth:+3}, wild:true,
      res:'You score the country higher than any other respondent by a margin of forty points. The submission is identified within a week by its IP address.' }]},

{ id:'f-anticipatory', title:'Nobody Asked Them', who:C.cos, min:20, max:48, tags:['power','press'],
  src:'institutions conceding pre-emptively without being formally pressured',
  text:'"A law firm has pledged $100 million in free work to causes you like. A university has changed its admissions ' +
       'policy. A network has cancelled a programme." Deborah looks up. "Sir, we did not ask for any of it."',
  choices:[
    { label:'Say nothing and accept all of it.', eff:{base:+5,street:-8,courts:-8,press:-5,congress:-6,auth:+13},
      res:'There is no order to challenge, no threat to prove and no memo to subpoena. Institutions reading the shape of a room is the most efficient form of power there has ever been.' },
    { label:'Praise them by name. Encourage the rest.', eff:{base:+7,street:-9,courts:-9,press:-5,congress:-7,auth:+10},
      res:'Naming them converts an invisible process into a visible one, which is worse for you and much faster.' },
    { label:'Publicly tell them it was unnecessary.', eff:{street:+9,courts:+9,press:+9,congress:+7,base:-7,auth:-7},
      res:'Two reverse their decisions within a fortnight. It is the single most de-escalating sentence available and it costs you an enormous amount.' },
    { label:'Ask them for something enormous and see if they say yes.', eff:{base:+4,street:-6,courts:-6,press:-5,auth:+8}, wild:true,
      res:'Two of the three say yes. The third asks, politely, whether the request is in writing, and the fact that it is not is the answer to everything.' }]},

{ id:'f-generals-room', title:'The Room Of Generals', who:C.gen, min:26, max:48, tags:['military','rhetoric'],
  src:'address to assembled senior officers describing an internal threat',
  text:'Every flag officer in the armed forces has been assembled in one hall at your request. ' +
       'Gideon has a draft that uses the phrase "the enemy within" four times. Tarrant has read it.',
  choices:[
    { label:'Deliver it as written.', eff:{base:+7,street:-12,congress:-10,courts:-8,press:-5,auth:+12},
      res:'Nobody in the hall stands. Nobody leaves either. Four of them describe the silence in memoirs and all four descriptions agree.' },
    { label:'Cut the phrase. Deliver the rest.', eff:{base:+4,street:-4,congress:-3,press:-3,auth:+6},
      res:'It is a strong, conventional, forgettable speech to the officer corps. Tarrant thanks you afterwards for a specific omission and does not say which.' },
    { label:'Ask them what they need instead. Take questions.', eff:{street:+9,congress:+8,press:+8,courts:+5,base:-7,auth:-3},
      res:'Ninety minutes of questions from people who never get to ask any. Four procurement decisions change as a direct result.' },
    { label:'Deliver it, but about a specific insect.', eff:{base:+5,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'Eleven minutes on the emerald ash borer, delivered with total conviction to four hundred admirals. It is beloved, baffling and quoted for a generation.' }]}

);
})();
