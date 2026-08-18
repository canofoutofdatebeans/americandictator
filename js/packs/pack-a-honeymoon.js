/* ============================================================
   PACK A — THE HONEYMOON  (term months 1–14)
   REWRITTEN against the research. Every crisis carries a `src`
   naming the documented item or sub-item it riffs on.

   Same rule as packs F and G: INSPIRED BY, NEVER COPIED. The
   mechanism is taken; names, numbers, countries and outcomes are
   invented. Contested [CONTEXT FLAG] items are excluded, or played
   as a joke about the dispute itself.

   Where a `src` cites a sub-item, it draws on one discrete element
   of a larger research entry — a practice the research file's own
   Caveats section explicitly invites.

   32 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- the opening orders ---------- */

{ id:'a-not-a-ban', title:'The Word For It', who:C.press, min:1, max:10, tags:['immigration','press'],
  src:'defending an entry restriction against the charge that it targets a religion',
  text:'The order names six countries. Every one is majority-Muslim. Kaylee has the question she will be asked ' +
       'forty times today and would like the answer before she is asked it once.',
  choices:[
    { label:'"This is not a religious ban." Say nothing further.', eff:{base:+6,courts:-6,street:-6,press:-5,auth:+6},
      res:'The sentence is repeated so often it becomes its own evidence. Four campaign clips are played beside it within a day and all four are on the record.' },
    { label:'Name the security rationale. Publish the threat assessment.', eff:{courts:+7,street:+6,press:+6,congress:+4,base:-6,auth:+2},
      res:'The assessment supports two of the six countries and undercuts the other four. Publishing it is the honest move and it costs you two-thirds of the order.' },
    { label:'Say it is exactly what it looks like.', eff:{base:+9,courts:-9,street:-9,press:-5,congress:-6,auth:+7}, breaks:'religion',
      res:'Candour is disarming right up until it is entered into evidence, at which point it is the case against you, quoted verbatim, in the first paragraph.' },
    { label:'Add a majority-Christian country to the list for balance.', eff:{base:+3,street:-5,press:-5,courts:-4,auth:+3}, wild:true,
      res:'Liechtenstein. It has never sent an asylum seeker. Its foreign ministry issues a statement of bemused solidarity that is quoted for years.' }]},

{ id:'a-second-draft', title:'The Third Draft', who:C.ag, min:2, max:14, tags:['courts','immigration'],
  src:'issuing revised versions of a blocked order until one survives review',
  text:'"Two versions struck down. This is the third." Bo lays it out. "The countries are the same. What is different ' +
       'is four paragraphs about process at the front. That is what will save it, and it is the only thing that will."',
  choices:[
    { label:'Sign the third draft. Let the paragraphs do the work.', eff:{base:+7,courts:-5,street:-6,press:-4,auth:+8},
      res:'It survives. Nobody outside four law schools ever reads the paragraphs, and the paragraphs are the only reason the policy exists.' },
    { label:'Sign it and say publicly it is the same order.', eff:{base:+8,courts:-10,street:-7,press:-5,auth:+5}, breaks:'religion',
      res:'You undo the paragraphs with one sentence at a rally. It is struck down a fourth time and your sentence is quoted in the opinion.' },
    { label:'Abandon it. Two courts is two courts.', eff:{courts:+9,street:+8,press:+7,congress:+5,base:-9,auth:-4},
      res:'Nothing is signed. The policy dies quietly and your base learns that a court can end something, which is a lesson you did not want taught.' },
    { label:'Sign all three versions simultaneously.', eff:{base:+3,courts:-6,press:-5,street:-4,auth:+4}, wild:true,
      res:'Three contradictory orders in force at once. Customs requests clarification four times and receives, each time, a copy of all three.' }]},

{ id:'a-language-denial', title:'The Language Used', who:C.cos, min:2, max:16, tags:['press','rhetoric'],
  src:'denying the specific wording of a remark without denying the meeting',
  text:'Two people in the room have described what you said about certain countries. ' +
       'Deborah has a draft denial. "It says the language was tough but not that language. Sir, that is a very narrow door."',
  choices:[
    { label:'Post the narrow denial. Do not elaborate.', eff:{base:+6,press:-5,street:-6,congress:-4,auth:+5},
      res:'Four people present decline to corroborate it. Years later you confirm the phrase yourself, on camera, apparently having forgotten the denial entirely.' },
    { label:'Deny nothing. Say the meeting was private.', eff:{base:+5,press:-3,congress:-3,auth:+6},
      res:'Refusing to engage with the content is stronger than a denial that can be checked. It holds for the full four years.' },
    { label:'Confirm it and defend the underlying point.', eff:{base:+8,street:-10,press:-5,congress:-7,courts:-4,auth:+6},
      res:'Ambassadors from nine countries request meetings. The State Department schedules all nine and briefs each one differently.' },
    { label:'Blame a translation error. There was no translator.', eff:{base:+3,press:-5,street:-4,congress:-3,auth:+2}, wild:true,
      res:'Everybody in the room spoke English. It is pointed out. You say the error was conceptual, which nobody can disprove because nobody can parse it.' }]},

{ id:'a-wall-emergency', title:'The Emergency For The Wall', who:C.cos, min:6, max:16, tags:['power','congress'],
  src:'declaring a national emergency to redirect funds Congress had declined to appropriate',
  text:'Congress voted you $1.4 billion and refused the rest. ' +
       '"An emergency declaration unlocks military construction money. Congress said no to this, in a vote, four days ago."',
  choices:[
    { label:'Declare it. Take the construction money.', eff:{base:+9,congress:-12,courts:-8,press:-5,street:-5,auth:+12}, breaks:'presentment',
      res:'You have converted a lost vote into a won one by declaring the loss an emergency. Both chambers pass a resolution terminating it and you veto that too.' },
    { label:'Declare it but spend only the counter-narcotics line.', eff:{base:+5,congress:-6,courts:-4,press:-3,auth:+8},
      res:'Less photogenic, less litigated, same amount of concrete. Nobody protests a counter-narcotics reallocation.' },
    { label:'Build what $1.4 billion buys. Say it was always the plan.', eff:{congress:+8,courts:+6,press:+5,base:-7,auth:+2},
      res:'Ninety miles, on budget, finished early, in the places engineers actually recommended. It is mentioned by nobody.' },
    { label:'Declare an emergency about the shortage of emergencies.', eff:{base:+3,congress:-6,courts:-5,press:-4,auth:+5}, wild:true,
      res:'The Federal Register publishes it, because the Federal Register publishes what it is sent. Four agencies request implementing guidance and none is ever written.' }]},

{ id:'a-blood', title:'The Line About Blood', who:C.writer, min:8, max:20, tags:['rhetoric','street'],
  src:'rhetoric describing immigration as contaminating the nation',
  text:'Gideon has flagged a line in tomorrow\'s draft. It is about what immigration does to the country, ' +
       'and the verb is a medical one. "Sir, two historians will have columns filed before you finish the sentence."',
  choices:[
    { label:'Keep it. Deliver it twice.', eff:{base:+9,street:-12,press:-5,congress:-8,courts:-4,auth:+7},
      res:'The columns run within the hour and both quote the same 1920s speeches. Your team says the critics are the ones obsessed with history, which is true and is not a defence.' },
    { label:'Change the verb. Keep the argument.', eff:{base:+6,street:-4,press:-3,congress:-3,auth:+5},
      res:'Same policy, same crowd reaction, no archive footage. Gideon calls it the cheapest edit he has ever made.' },
    { label:'Cut it. Talk about wage competition instead.', eff:{street:+7,press:+7,congress:+6,courts:+4,base:-7,auth:+1},
      res:'An economic argument that is arguable, defensible and dull. It persuades four hundred thousand more people than the other version and thrills nobody.' },
    { label:'Deliver it, but about the water supply.', eff:{base:+4,street:-6,press:-5,congress:-4,auth:+3}, wild:true,
      res:'Eleven minutes on municipal fluoridation, delivered with total conviction. Four state health departments issue clarifications nobody requested.' }]},

/* ---------- energy & the environment ---------- */

{ id:'a-energy-emergency', title:'The Energy Emergency', who:C.energy, min:1, max:12, tags:['economy','power'],
  src:'declaring a national energy emergency on day one and revoking predecessor climate orders',
  text:'Cassandra Doyle has the day-one package: an energy emergency declaration and the revocation of eleven ' +
       'predecessor orders. "Production is at a record high, sir. That is the number the declaration has to survive."',
  choices:[
    { label:'Declare it anyway. Record output, still an emergency.', eff:{base:+8,street:-7,courts:-7,press:-5,congress:-5,cash:+0.3,auth:+10},
      res:'The emergency unlocks permitting powers with nothing to do with scarcity. The scarcity was never the point, and the production figures are published monthly.' },
    { label:'Revoke the orders. Skip the emergency.', eff:{base:+5,street:-4,courts:-3,press:-3,auth:+6},
      res:'Same effect, no declaration to litigate. Four environmental groups sue over the revocations instead and lose on standing.' },
    { label:'Keep the orders. Claim the record output as yours.', eff:{street:+7,press:+7,congress:+5,base:-8,auth:+1},
      res:'The output is genuinely a record and predates you by two years. You take the credit anyway and nobody can be bothered to correct it.' },
    { label:'Declare an energy emergency and a surplus, same morning.', eff:{base:+3,street:-5,press:-5,courts:-4,auth:+4}, wild:true,
      res:'Two proclamations twenty minutes apart in direct contradiction. Both remain in force. A trade journal writes 4,000 words trying to reconcile them.' }]},

{ id:'a-wind', title:'The Moratorium', who:C.energy, min:2, max:16, tags:['economy','street'],
  src:'a moratorium on new wind projects on federal land',
  text:'"A halt on new wind leasing on federal land. Eleven projects at final permit stage, four thousand jobs, ' +
       'and most of them are in states you won by double digits." Cassandra waits.',
  choices:[
    { label:'Halt all of it. Immediately.', eff:{base:+7,street:-8,courts:-6,press:-5,congress:-5,auth:+8},
      res:'Four thousand jobs pause in five states you carried. Two governors from your own party object publicly and one of them is on your shortlist for everything.' },
    { label:'Halt new leases. Let the eleven finish.', eff:{base:+5,street:-3,courts:-2,press:-2,auth:+6},
      res:'The gesture without the casualties. Your base hears "halt" and the eleven projects hear nothing at all.' },
    { label:'No moratorium. Approve them and cut the ribbon.', eff:{street:+8,press:+7,congress:+5,base:-9,auth:+1},
      res:'You stand in front of a turbine in a hard hat. The photograph is used against you by your own side for four years.' },
    { label:'Ban wind on federal land, then buy the turbines yourself.', eff:{base:+4,street:-5,press:-4,cash:-0.4,auth:+3}, wild:true,
      res:'You acquire eleven half-built wind farms at a discount created by your own order. Four ethics offices open files and none can name the violation.' }]},

{ id:'a-pipelines', title:'The Two Pipelines', who:C.energy, min:2, max:14, tags:['economy','street'],
  src:'reviving two contested pipeline projects by executive action',
  text:'Two pipelines, both halted by the last administration, both revivable by memorandum. ' +
       '"One crosses a river four hundred metres upstream of a reservation\'s water intake. That is the entire dispute."',
  choices:[
    { label:'Approve both. Memorandum, today.', eff:{base:+8,street:-9,courts:-8,press:-5,cash:+0.4,auth:+9},
      res:'Construction begins in nine weeks. The camp that forms upstream lasts eleven months and produces the defining protest imagery of your first year.' },
    { label:'Approve one. Re-route the other.', eff:{base:+5,street:-3,courts:-3,press:-2,cash:+0.3,auth:+6},
      res:'The re-route costs $400 million, takes two extra years, and is never challenged once. Both pipelines are operating in 2031.' },
    { label:'Approve both, and fund the reservation\'s new intake.', eff:{base:+3,street:+6,courts:+5,press:+5,cash:+0.2,auth:+4},
      res:'$90 million for a water plant removes the entire basis of the objection. Four tribal chairs say so publicly, which nobody expected including them.' },
    { label:'Approve a third pipeline nobody has proposed.', eff:{base:+4,street:-4,press:-4,courts:-3,auth:+3}, wild:true,
      res:'It has no route, no operator and no application. It is announced at a rally and enters four state energy plans before anybody establishes it does not exist.' }]},

{ id:'a-climate-money', title:'The Pledges', who:C.state, min:6, max:20, tags:['foreign','money'],
  src:'withdrawing multi-billion climate-finance pledges to developing economies',
  text:'Three countries were promised transition financing on the strength of an American signature. ' +
       'Muriel: "We can withdraw it. It was pledged, not appropriated. They have already started building."',
  choices:[
    { label:'Withdraw all three pledges.', eff:{base:+6,street:-6,press:-6,congress:-5,cash:+0.4,auth:+7},
      res:'Two of the three projects continue on other financing within eighteen months. You have not saved the money; you have transferred the relationship.' },
    { label:'Withdraw two. Honour the one under construction.', eff:{base:+4,press:-3,congress:-2,cash:+0.3,auth:+5},
      res:'A distinction nobody asked for that preserves one relationship for $600 million. Muriel calls it the best afternoon of her year.' },
    { label:'Honour all three. Rename the programme after yourself.', eff:{street:+7,press:+8,congress:+6,base:-6,cash:-0.5,auth:+2},
      res:'The projects are built, the plaques say what you asked, and three governments owe you a favour you never call in.' },
    { label:'Withdraw the money and offer coal instead.', eff:{base:+5,street:-6,press:-6,congress:-4,cash:+0.2,auth:+3}, wild:true,
      res:'All three decline. One does so in a letter so exquisitely polite that it is framed and hung in their embassy in Washington.' }]},

/* ---------- the Bureau and the investigation ---------- */

{ id:'a-tapes-post', title:'The Tapes', who:C.lawyer, min:4, max:18, tags:['justice','press'],
  src:'a public warning to a dismissed official about possible recordings',
  text:'You have drafted a post suggesting the man you just fired had better hope there are no recordings of your conversations. ' +
       'Sy: "Sir. There are two readings. One is a bluff. The other is that there is something on a tape."',
  choices:[
    { label:'Post it. Let him wonder.', eff:{base:+6,courts:-9,congress:-8,press:-5,auth:+6},
      res:'He tells a committee the post is precisely why he released his memos. You caused the disclosure you were trying to prevent, in one sentence, for free.' },
    { label:'Post it, then confirm there are no tapes a month later.', eff:{base:+4,courts:-5,congress:-4,press:-4,auth:+4},
      res:'A month of national speculation about a recording system that does not exist, ended by you, at no cost to anybody except the month.' },
    { label:'Say nothing. He is fired and it is over.', eff:{courts:+8,congress:+7,press:+6,base:-5,auth:+1},
      res:'It is, in fact, over. Sy describes this as the single best decision of the first year and is not being sarcastic.' },
    { label:'Install a recording system, then post it.', eff:{base:+3,courts:-8,congress:-7,press:-6,auth:+5}, wild:true,
      res:'You create the evidence in order to threaten somebody with it. Four lawyers explain the problem in sequence and each explanation is worse than the last.' }]},

{ id:'a-let-this-go', title:'"I Hope You Can"', who:C.fbi, min:3, max:16, tags:['justice','courts'],
  src:'an alleged private request to a bureau director to drop an investigation into an aide',
  text:'You have asked everybody else to leave the room. Director Quist is still here. ' +
       'The investigation into your national security adviser is nine weeks old and you are about to say something about it.',
  choices:[
    { label:'"I hope you can see your way to letting this go."', eff:{base:+4,courts:-11,congress:-10,press:-5,auth:+8}, breaks:'takecare',
      res:'She writes it down in her car within twenty minutes, dates it, and gives copies to three people. The word "hope" is litigated for two years.' },
    { label:'Say nothing about the case. Talk about anything else.', eff:{courts:+9,congress:+8,press:+6,base:-4,auth:+2},
      res:'Eleven minutes on hostage policy. She leaves puzzled and writes nothing down, which is the only outcome that helps you.' },
    { label:'Ask her, on the record, with counsel present.', eff:{courts:+5,congress:+4,press:+4,base:-2,auth:+3},
      res:'Asking improperly with a witness present converts a deniable conversation into a documented one — but it is at least a conversation you can defend.' },
    { label:'Ask her to investigate you instead, as a distraction.', eff:{base:+3,courts:-4,congress:-4,press:-4,auth:+4}, wild:true,
      res:'She opens the file. It is a real file with a real number. It is still open in 2029 and nobody involved intended any of it.' }]},

{ id:'a-no-quid', title:'The Three Words', who:C.press, min:10, max:22, tags:['press','congress'],
  src:'the repeated public formulation denying a conditional exchange',
  text:'Kaylee has counted: you have used the same three-word Latin phrase eleven times in four days. ' +
       '"Sir, nobody had used that phrase in public life for a decade. It is now on a coffee mug."',
  choices:[
    { label:'Use it again. Louder. It is a good phrase.', eff:{base:+6,congress:-7,press:-5,street:-4,auth:+5},
      res:'Repeating a denial nobody asked for establishes the question. By week three the phrase is shorthand for the thing it denies.' },
    { label:'Stop saying it entirely. Never again.', eff:{congress:+6,press:+6,street:+4,base:-3,auth:+3},
      res:'Silence starves it in nine days. It is the correct handling and it feels, from inside, exactly like losing.' },
    { label:'Release the call record and let people read it.', eff:{congress:+7,courts:+6,press:+8,base:-6,auth:-2},
      res:'It is worse than the summary and better than the speculation. Publishing it ends four competing versions and starts one accurate one.' },
    { label:'Sell the coffee mug.', eff:{base:+7,congress:-5,press:-4,street:-3,cash:+0.2,auth:+2}, wild:true,
      res:'Four hundred thousand units at $28. The second best-selling item the movement ever produces, and it says the Latin for "not a bribe" on it.' }]},

{ id:'a-withheld-aid', title:'The Hold', who:C.treas, min:12, max:24, tags:['foreign','congress'],
  src:'placing an unexplained hold on appropriated military aid to a foreign partner',
  text:'"Four hundred million dollars, appropriated, obligated, and now sitting on a hold that came from this building." ' +
       'Lyle looks up. "Nobody in the department can tell me who placed it or why."',
  choices:[
    { label:'Keep the hold. Give no reason.', eff:{base:+4,congress:-11,courts:-8,street:-6,press:-5,auth:+10}, breaks:'purse',
      res:'An unexplained hold on appropriated funds generates four separate inquiries, two of them statutory, and you cannot decline either.' },
    { label:'Release it. Say it was a review.', eff:{congress:+8,courts:+6,press:+5,base:-4,auth:+3},
      res:'Released 55 days late with a two-line explanation. The delay is noted by an auditor and by nobody else.' },
    { label:'Keep it and tie it to a stated policy condition.', eff:{congress:-5,courts:-4,press:-4,base:+5,auth:+7},
      res:'A written condition is a policy instrument; an unwritten one is a favour. Putting it in writing is the safer of two bad options.' },
    { label:'Release it in a currency they cannot spend.', eff:{base:+2,congress:-6,courts:-4,press:-4,auth:+4}, wild:true,
      res:'The transfer is denominated in a unit last used in 1971. Their finance ministry spends four months converting it and sends a thank-you note anyway.' }]},

/* ---------- the courts ---------- */

{ id:'a-fifty-forty-eight', title:'Fifty–Forty-Eight', who:C.speaker, min:8, max:22, tags:['courts','congress'],
  src:'a Supreme Court confirmation completed by a two-vote margin amid contested allegations',
  text:'Hal has the count: fifty for, forty-eight against, and two members who will decide in the last hour. ' +
       'The hearing has been extraordinary in a way nobody in the room will forget.',
  choices:[
    { label:'Whip it to the floor tonight. Two votes is a majority.', eff:{base:+8,courts:+10,congress:-8,street:-8,press:-6,auth:+9}, breaks:'consent',
      res:'Confirmed by two. He serves thirty years, and the hearing is replayed at every subsequent confirmation, by both parties, for opposite reasons.' },
    { label:'Pause for a one-week supplementary inquiry.', eff:{courts:+7,congress:+5,street:+6,press:+6,base:-5,auth:+4},
      res:'The inquiry is inconclusive in both directions. He is confirmed 53-45 nine days later; the extra week costs you nothing and buys four senators cover.' },
    { label:'Withdraw him. Nominate the next name.', eff:{courts:+5,congress:+7,street:+7,press:+7,base:-11,auth:-2},
      res:'The replacement is confirmed 61-39 and is more reliably aligned with you by every measure. Your base experiences the withdrawal as total defeat.' },
    { label:'Nominate both of them. Two seats, one vote.', eff:{base:+3,courts:-5,congress:-6,press:-4,auth:+4}, wild:true,
      res:'There is one vacancy. The second nomination is transmitted anyway and sits on the Senate calendar for four years, technically pending.' }]},

{ id:'a-eight-days', title:'Eight Days Out', who:C.ag, min:10, max:24, tags:['courts','elections'],
  src:'filling a Supreme Court vacancy in the days immediately before a national election',
  text:'A justice has died with the election eight days away. Bo: "There is no rule against it. ' +
       'There is a thing four senators said in 2016 that they will now have to eat, on camera, in sequence."',
  choices:[
    { label:'Confirm before the election. Eight days is eight days.', eff:{base:+9,courts:+11,congress:-9,street:-8,press:-6,auth:+10}, breaks:'consent',
      res:'Sworn in with six days to spare. The four senators eat it on camera, in sequence, and every one of them is re-elected.' },
    { label:'Nominate now, confirm after. Same outcome, less heat.', eff:{base:+6,courts:+9,congress:-4,street:-4,press:-4,auth:+8},
      res:'Identical result a fortnight later with a third of the coverage. Timing is the only variable and it is worth more than the argument.' },
    { label:'Leave it to whoever wins.', eff:{congress:+9,courts:+7,street:+8,press:+8,base:-12,auth:-6},
      res:'You lose the election and the seat. It is the most principled thing you ever do and it ends four relationships inside your own party.' },
    { label:'Confirm them to a seat that is not vacant.', eff:{base:+3,courts:-6,congress:-5,press:-4,auth:+4}, wild:true,
      res:'A tenth justice is confirmed to a Court that has nine. She turns up, is given an office, and quietly does research for four years.' }]},

{ id:'a-order-struck', title:'Permanently Struck', who:C.lawyer, min:10, max:26, tags:['courts','power'],
  src:'a court permanently striking down an executive order targeting a law firm',
  text:'A judge has struck your order against the firm — permanently — in an opinion using the word "unconstitutional" ' +
       'nine times. Sy: "She did not enjoin it. She voided it. There is nothing left to appeal about."',
  choices:[
    { label:'Attack the ruling. Sign a near-identical order.', eff:{base:+7,courts:-11,press:-6,congress:-6,street:-5,auth:+8},
      res:'The second order is voided in eleven days by the same judge, who quotes her own opinion at length and appends the first order as an exhibit.' },
    { label:'Comply. Restore the clearances. Say nothing.', eff:{courts:+9,congress:+6,press:+7,base:-7,auth:-1},
      res:'The firm is made whole in a fortnight. Four other firms that had already conceded quietly reverse their concessions, which is the actual cost.' },
    { label:'Comply, and target the firm through procurement instead.', eff:{base:+5,courts:-4,press:-5,congress:-4,auth:+9},
      res:'No order, no ruling, no headline — just contracts that stop being renewed. It works and there is nothing for a judge to void.' },
    { label:'Hire the judge.', eff:{base:+3,courts:-7,congress:-5,press:-5,auth:+4}, wild:true,
      res:'She declines by letter in four sentences. The letter is entered on the docket, becomes public, and is the funniest document of the year.' }]},

{ id:'a-accountability-order', title:'The Accountability Order', who:C.ag, min:6, max:22, tags:['justice','power'],
  src:'an order directing reviews of former officials over claimed election interference',
  text:'"An order directing agencies to review the conduct of named former officials." Bo turns the page. ' +
       '"Sir, four of the names investigated you. One of them is 81 and retired."',
  choices:[
    { label:'Sign it. All the names.', eff:{base:+8,courts:-10,congress:-8,press:-6,street:-6,auth:+11}, breaks:'dueprocess',
      res:'Clearances first, then details, then pension reviews. Nothing is charged. Everything is done, and none of it required a charge.' },
    { label:'Sign it with the retired ones removed.', eff:{base:+5,courts:-6,press:-4,congress:-4,auth:+8},
      res:'Removing the 81-year-old is the difference between a policy and a vendetta in coverage terms, and in no other terms at all.' },
    { label:'Do not sign. Order a review of the reviews instead.', eff:{courts:+7,congress:+6,press:+6,base:-6,auth:+2},
      res:'A meta-review reporting in fourteen months, finding procedural irregularities on all sides and satisfying nobody, which is what reviews are for.' },
    { label:'Sign it and add your own name to the list.', eff:{base:+4,courts:+5,press:+6,congress:+4,auth:+3}, wild:true,
      res:'You are reviewed by your own department under your own order. It clears you in nine weeks and the clearance is worth precisely what it cost.' }]},

/* ---------- money, ethics and the family ---------- */

{ id:'a-ethics-divest', title:'The Divestment Briefing', who:C.ethics, min:1, max:12, tags:['money','press'],
  src:'declining full divestment in favour of a trust administered by family',
  text:'Miriam Applewhite has the standard package: sell the assets, or a genuine blind trust run by a stranger. ' +
       '"There is a third thing people call a blind trust and hand to their children. It is not blind, sir. It is just a trust."',
  choices:[
    { label:'The trust. Run by the family. Call it blind.', eff:{base:+4,press:-9,courts:-7,congress:-6,cash:+0.7,auth:+8},
      res:'You are briefed on its performance at dinner. Every filing describes it as blind and every filing is accurate about the paperwork.' },
    { label:'Full divestment. Sell everything.', eff:{press:+10,congress:+8,courts:+7,street:+5,base:-4,cash:-1.0,auth:-2},
      res:'It costs an enormous amount and removes an entire category of story permanently. You will not appreciate this for three years.' },
    { label:'Keep everything. The President cannot have a conflict.', eff:{base:+6,press:-11,courts:-9,congress:-8,cash:+0.9,auth:+9},
      res:'A legal position with genuine statutory support and none at all in fifty years of practice. Miriam resigns in March and testifies in June.' },
    { label:'Put it in a trust run by a stranger you then hire.', eff:{base:+3,press:-6,courts:-5,congress:-4,cash:+0.5,auth:+6}, wild:true,
      res:'He is appointed to a federal advisory board eleven weeks later. Four journalists notice on the same afternoon and none can prove the connection.' }]},

{ id:'a-gift-log', title:'The Gift Log', who:C.ethics, min:4, max:20, tags:['money','foreign'],
  src:'foreign-state gifts and the threshold above which they belong to the public',
  text:'Eleven hundred inaugural gifts from foreign governments. Anything above the threshold belongs to the country, not you. ' +
       'Item 402 is a solid gold horse. Item 403 is a larger one.',
  choices:[
    { label:'Log them. Buy the horses back at valuation.', eff:{press:+7,congress:+5,courts:+4,cash:-0.4,auth:+2},
      res:'Entirely legal, fully documented, and it costs $600,000 for two gold horses you did not want and cannot display anywhere.' },
    { label:'Log them as displayed at a residence. Keep them.', eff:{base:+3,press:-7,courts:-6,congress:-5,cash:+0.5,auth:+6},
      res:'The residence is yours. The display is a corridor. The horses are, on any ordinary use of the word, kept.' },
    { label:'Auction the lot for veterans. Publicly.', eff:{base:+5,press:+8,street:+8,congress:+5,cash:+0.1,auth:+2},
      res:'$2.1 million in an afternoon. A ceremonial dagger is won by a twelve-year-old and there is a brief, delightful international incident.' },
    { label:'Melt the horses. Mint coins with your face on them.', eff:{base:+6,press:-6,courts:-5,congress:-4,cash:+0.3,auth:+4}, wild:true,
      res:'The gifting government requests a photograph of the horses for its own archive. You send a photograph of the coins.' }]},

{ id:'a-property-billing', title:'The Rate Card', who:C.home, min:6, max:24, tags:['money','press'],
  src:'government protective and staff costs billed at president-owned properties',
  text:'Duane has the invoices. The protective detail has paid your own resort $1.1 million in room rates in four months. ' +
       '"Sir, we have to stay where you stay. You set the rate."',
  choices:[
    { label:'Keep the rate. It is the market rate.', eff:{base:+3,press:-8,courts:-6,congress:-6,cash:+0.5,auth:+6}, breaks:'emoluments',
      res:'The taxpayer pays the President to protect the President at the President\'s hotel. It is disclosed, itemised and entirely lawful, which is the whole problem.' },
    { label:'Charge them one dollar a year.', eff:{press:+8,congress:+7,street:+5,base:+3,cash:-0.3,auth:+2},
      res:'A cheap, showy, devastatingly effective gesture that removes the story for the price of a sandwich.' },
    { label:'Stay somewhere you do not own.', eff:{press:+6,congress:+5,street:+4,base:-3,cash:-0.2},
      res:'Camp David is described by three separate aides as "fine, actually." You do not go back after the second visit.' },
    { label:'Charge them, then bill yourself for the inconvenience.', eff:{base:+3,press:-6,courts:-5,congress:-4,cash:+0.4,auth:+4}, wild:true,
      res:'An invoice from you to you, paid by the government, for the disruption caused by your own protection. It clears. Nobody can identify who approved it.' }]},

{ id:'a-family-desk', title:'The Desk In The West Wing', who:C.girl, min:2, max:18, tags:['money','power'],
  src:'family members appointed as senior advisers with security clearances',
  text:'Ivy would like a West Wing office, a clearance and an unpaid senior title. ' +
       'The clearance is the part career security staff have flagged. Twice. In writing.',
  choices:[
    { label:'All three. Override the flags.', eff:{base:+4,press:-8,courts:-6,congress:-6,street:-4,auth:+7},
      res:'She is genuinely capable, and the job could not have been obtained by anybody who is not your daughter. Both are true; only one is reported.', flag:'family' },
    { label:'Title and office. No clearance.', eff:{base:+3,press:-3,congress:-2,auth:+4},
      res:'She takes the meetings anyway, from a chair by the door, and is more effective than four confirmed officials.' },
    { label:'No family in the building.', eff:{press:+9,congress:+7,courts:+6,street:+5,base:-6},
      res:'The correct decision. It also removes the only person alive who would have told you the truth in a small room.' },
    { label:'Give her the clearance, and give the flags a clearance too.', eff:{base:+3,press:-5,courts:-5,congress:-4,auth:+5}, wild:true,
      res:'The two career officers who objected are read into the programme they objected about. Both promptly object again, now with considerably more detail.' }]},

{ id:'a-columbia', title:'The Second University', who:C.edu, min:10, max:26, tags:['culture','power'],
  src:'cutting federal funding to a university over its handling of campus protests',
  text:'Four hundred million dollars, one university, and a list of demands about protest policy and departmental oversight. ' +
       'Ollis: "The first one folded. This one has a bigger endowment and a worse lawyer."',
  choices:[
    { label:'Cut it. All four hundred million.', eff:{base:+8,street:-9,courts:-8,press:-7,congress:-5,auth:+11},
      res:'They fold in nine weeks and accept an outside monitor over one department. Eleven other universities read the settlement and never need to be contacted.' },
    { label:'Cut half. Leave the medical research alone.', eff:{base:+5,street:-4,courts:-4,press:-4,auth:+8},
      res:'Sparing the cancer labs removes the only argument that was cutting through. Same leverage, no photograph of a shuttered trial.' },
    { label:'Fund it fully. Attack them rhetorically instead.', eff:{street:+6,courts:+6,press:+6,congress:+4,base:-5,auth:+2},
      res:'Words cost nothing and change nothing. The university ignores you completely and its applications rise 14%.' },
    { label:'Cut the funding and enrol in a seminar there.', eff:{base:+5,street:+4,press:+5,courts:-3,auth:+2}, wild:true,
      res:'You audit four sessions of a constitutional law course at the institution you are defunding. The transcript is released in 2044 and is genuinely interesting.' }]},

/* ---------- the culture orders ---------- */

{ id:'a-minors-care', title:'The Age Line', who:C.health, min:6, max:22, tags:['culture','courts'],
  src:'an order restricting federally supported gender-transition care for minors',
  text:'Dr. Pike has the draft. "It conditions federal funding on hospitals ceasing a category of care for under-19s. ' +
       'Four children\'s hospitals in states you won will stop the day it is signed."',
  choices:[
    { label:'Sign it. Nineteen and under, no exceptions.', eff:{base:+9,street:-9,courts:-8,press:-6,congress:-5,auth:+9}, breaks:'equal',
      res:'Nine hospitals stop within a fortnight, including for patients mid-course. Two courts partially enjoin it and the hospitals do not restart, because hospitals do not restart.' },
    { label:'Sign it with an exception for continuing care.', eff:{base:+6,street:-4,courts:-4,press:-3,auth:+7},
      res:'Nobody is dropped mid-treatment. It achieves the policy without producing the four specific cases that would have defined it.' },
    { label:'No order. Fund a longitudinal study instead.', eff:{street:+7,press:+7,courts:+6,congress:+4,base:-9,cash:-0.2,auth:+1},
      res:'It reports in nine years with the largest dataset anybody has. Both sides cite it and neither changes position.' },
    { label:'Set the age line at 47.', eff:{base:+3,street:-5,courts:-5,press:-4,auth:+3}, wild:true,
      res:'A drafting instruction taken literally by somebody who did not want to ask. It is caught in review after four days and the story never quite dies.' }]},

{ id:'a-military-dei', title:'The Fighting Force Order', who:C.gen, min:4, max:20, tags:['culture','military'],
  src:'an order ending diversity programmes across the armed forces',
  text:'Tarrant has the order and the retention data side by side. "I will implement whatever you sign. ' +
       'I am obliged to tell you that recruitment in four of our five hardest-to-fill specialties runs through the offices this closes."',
  choices:[
    { label:'Sign it. Close every office.', eff:{base:+8,street:-8,congress:-6,press:-5,courts:-4,auth:+9}, breaks:'equal',
      res:'Recruitment in those four specialties falls 19% over two years. The report saying so is classified at a level that keeps it out of the budget hearing.' },
    { label:'Close the offices. Keep the recruitment pipelines.', eff:{base:+5,street:-3,congress:-3,press:-3,auth:+7},
      res:'The signage goes, the function stays, renamed. Everybody gets what they said they wanted and nothing at all changes.' },
    { label:'Do not sign. Order a readiness review first.', eff:{street:+7,congress:+7,press:+6,courts:+4,base:-8,auth:+1},
      res:'The review finds the programmes marginally positive and expensive. You sign a narrower order in nine months that nobody objects to.' },
    { label:'Sign it and replace the offices with a single sergeant.', eff:{base:+4,street:-5,congress:-4,press:-4,auth:+4}, wild:true,
      res:'Sergeant Alvarez inherits the responsibilities of four hundred people, does the job better than the four hundred did, and is promoted twice in a year.' }]},

{ id:'a-passports', title:'The Marker', who:C.state, min:4, max:20, tags:['culture','street'],
  src:'suspending passport applications that request a change of sex marker',
  text:'Muriel: "Applications requesting a marker change are being held. Not refused — held. Eleven thousand of them, ' +
       'and four hundred people have travel booked this month."',
  choices:[
    { label:'Hold them indefinitely. Issue no guidance.', eff:{base:+7,street:-9,courts:-8,press:-6,congress:-4,auth:+9}, breaks:'dueprocess',
      res:'A hold with no decision cannot be appealed, because nothing has been decided. It is the most efficient refusal in the department\'s history.' },
    { label:'Refuse them formally. Give them something to appeal.', eff:{base:+6,street:-6,courts:-5,press:-4,auth:+6},
      res:'A formal refusal is litigable and is duly litigated. You lose in fourteen months, which is fourteen months.' },
    { label:'Process them. Change the policy prospectively.', eff:{street:+8,courts:+7,press:+6,congress:+4,base:-8,auth:+2},
      res:'Eleven thousand applications clear in six weeks and the new rule applies to everybody after. Nobody misses a flight and nobody notices.' },
    { label:'Issue every passport with no marker at all.', eff:{base:+3,street:-4,courts:-5,press:-4,auth:+4}, wild:true,
      res:'Four countries refuse the documents at the border. The department spends nine months negotiating recognitions for a field it deleted on purpose.' }]},

/* ---------- tariffs & the markets ---------- */

{ id:'a-ninety-day', title:'The Ninety-Day Pause', who:C.treas, min:10, max:24, tags:['economy','press'],
  src:'pausing country-specific tariffs after market turmoil while raising one rate sharply',
  text:'Four days of losses. Lyle has a plan: pause the country-specific rates for ninety days, ' +
       'and raise the one on your largest rival to a number nobody has used since the 1930s.',
  choices:[
    { label:'Pause everything. Raise the one rate to 125%.', eff:{base:+7,street:+5,congress:+3,press:-4,cash:+0.3,auth:+6}, breaks:'presentment',
      res:'Markets rip upward 9% in an afternoon. Several people who knew about the pause forty minutes early are considerably richer and four inquiries go nowhere.' },
    { label:'Pause everything. Raise nothing.', eff:{street:+8,congress:+6,press:+6,base:-6,auth:+2},
      res:'A clean retreat, correctly read as one. The rally is the same size and your base is furious about a number that no longer exists.' },
    { label:'Pause nothing. Hold the line.', eff:{base:+8,street:-11,congress:-8,press:-5,cash:-0.4,auth:+5},
      res:'Another 6% comes off in a week. Retirement accounts absorb it and your approval among the over-60s does something pollsters describe as geological.' },
    { label:'Pause them, and announce the pause four times.', eff:{base:+4,street:+3,press:-4,auth:+3}, wild:true,
      res:'Four separate announcements of the same pause over nine days, each moving the market. A trade journal calls it the most profitable stutter in history.' }]},

{ id:'a-retaliation', title:'The Answer', who:C.state, min:12, max:26, tags:['economy','foreign'],
  src:'retaliatory tariffs and a consumer backlash from trading partners',
  text:'Two partners have answered. One has targeted four agricultural states with surgical precision. ' +
       'The other has done nothing official — its citizens have simply stopped buying American products.',
  choices:[
    { label:'Escalate against both.', eff:{base:+7,street:-9,congress:-8,press:-5,cash:-0.4,auth:+7},
      res:'The precision targeting doubles. The boycott, having no official status, cannot be negotiated away and lasts eleven years.' },
    { label:'Negotiate with the state. Ignore the boycott.', eff:{street:+5,congress:+5,press:+4,base:-4,auth:+4},
      res:'You settle with the government in four months. Consumer sentiment takes nine years and no agreement ever touches it.' },
    { label:'Drop the tariffs. Declare the point made.', eff:{street:+8,congress:+7,press:+7,base:-8,auth:+1},
      res:'Everything unwinds in six weeks. Two minor concessions for eleven months of disruption — a real if unimpressive result.' },
    { label:'Boycott them back. Personally. On camera.', eff:{base:+6,street:-4,press:-3,congress:-3,auth:+2}, wild:true,
      res:'You publicly forswear four of their most famous products. Sales of all four rise domestically. One sends you a free case with a very short note.' }]},

/* ---------- the chat and the room ---------- */

{ id:'a-strike-timing', title:'The Timings', who:C.gen, min:8, max:24, tags:['security','press'],
  src:'operational strike timings shared in a consumer messaging group',
  text:'Your defence secretary posted launch windows and target packages into a commercial chat two hours before the aircraft flew. ' +
       'Tarrant: "If that had reached the wrong person, sir, I would be writing letters this week."',
  choices:[
    { label:'Nobody is disciplined. It worked out.', eff:{base:+6,street:-9,congress:-9,courts:-5,press:-5,auth:+5},
      res:'It did work out. The lesson every officer takes from it is the one about consequences, not the one about the app.' },
    { label:'Remove him. Say exactly why.', eff:{street:+8,congress:+9,press:+8,courts:+5,base:-8,auth:-2},
      res:'Accountability, stated plainly, once. Four allied services quietly restore intelligence sharing they had paused the previous month.' },
    { label:'Keep him. Ban the app across government.', eff:{street:+4,congress:+4,press:+3,base:+2,auth:+5},
      res:'A policy fix without a personnel fix. It solves this specific failure and none of the reasons it happened.' },
    { label:'Add the aircrew to the chat so they get it faster.', eff:{base:+3,street:-6,congress:-5,press:-5,auth:+3}, wild:true,
      res:'Somebody attempts this before being stopped. The attempt appears in an inspector general report as a numbered finding.' }]},

{ id:'a-war-plans', title:'"Nobody Was Texting"', who:C.press, min:8, max:26, tags:['press','security'],
  src:'a public denial that operational plans were shared, followed by publication of the messages',
  text:'You and the secretary have both said, on camera, that nobody was texting anything of the kind. ' +
       'Kaylee: "Sir, the magazine has the screenshots. They publish in full at six."',
  choices:[
    { label:'Hold the line. Repeat the denial after they publish.', eff:{base:+6,press:-11,congress:-9,street:-6,courts:-4,auth:+5},
      res:'The screenshots contain the words. Repeating a denial after the evidence is public converts a security failure into a credibility one, permanently.' },
    { label:'Concede the facts. Dispute the significance.', eff:{base:+3,press:+4,congress:+3,street:+3,auth:+4},
      res:'Arguing about whether it was serious is a fight you can survive. Arguing about whether it happened is not, and you decline the second one.' },
    { label:'Get ahead of it. Release the messages yourself at four.', eff:{press:+9,congress:+7,street:+6,courts:+4,base:-5,auth:+2},
      res:'Publishing first removes the scoop and the cover-up in one move. The magazine runs its piece anyway and it is a third as long.' },
    { label:'Claim the screenshots are of a different chat.', eff:{base:+3,press:-8,congress:-6,street:-5,auth:+3}, wild:true,
      res:'They contain your own display name and profile photograph. This is pointed out within four minutes, live, by the person holding them.' }]},

/* ---------- the first-year furniture ---------- */

{ id:'a-cabinet-praise', title:'Around The Table', who:C.vp, min:3, max:18, tags:['vanity','power'],
  src:'a televised cabinet meeting given over to expressions of gratitude to the president',
  text:'Chet suggests opening the televised cabinet meeting by going round the table so each secretary can say ' +
       'what serving you has meant to them. "It humanises the team," he says, looking directly at you.',
  choices:[
    { label:'Do it. Go round twice.', eff:{base:+8,press:-9,street:-6,congress:-5,courts:-4,auth:+6},
      res:'Forty-one minutes of grown adults thanking a man for the privilege of employment, live. A comparative-politics professor pauses the tape and says "there it is" out loud.' },
    { label:'Do it, but cut it after four.', eff:{base:+5,press:-3,auth:+4},
      res:'Four is enough to establish the norm without generating the full supercut. Chet notes the number and files it.' },
    { label:'"We are not doing that. Report on your agencies."', eff:{press:+8,congress:+6,street:+5,courts:+4,base:-5,auth:-2},
      res:'A productive meeting with nine real decisions in it. Chet spends the whole thing writing in a small notebook.' },
    { label:'Go round the table thanking each of them instead.', eff:{base:+3,press:+7,street:+6,congress:+6,auth:-1}, wild:true,
      res:'You name a specific thing each of the twenty-two has done. It takes fifty minutes, four are visibly moved, and Chet cannot work out what has happened.' }]},

{ id:'a-crowd-number', title:'The Aerials', who:C.press, min:1, max:6, tags:['press','vanity'],
  src:'disputing photographic evidence of inauguration attendance',
  text:'The aerial photographs are out. The crowd is real, enthusiastic, and roughly the size of a regional dog show. ' +
       'The paper has run both years side by side.',
  choices:[
    { label:'Send Kaylee out to say it was the largest ever. Period.', eff:{base:+7,press:-9,street:-4,congress:-3,auth:+4},
      res:'She says it with her whole chest. Nobody believes her, everybody notices she said it anyway, and that was the entire point of sending her.' },
    { label:'"Crowds are a media obsession." Next question.', eff:{base:-2,press:+5,street:+3,auth:+1},
      res:'The story dies in forty minutes. Something in you dies with it.' },
    { label:'Order the Park Service to release corrected figures.', eff:{base:+5,press:-7,courts:-5,street:-4,auth:+6},
      res:'A career photo archivist is reassigned to a windowless room in Suitland. The number is now 1.9 million, it is written down, and it is official.' },
    { label:'Count them yourself. On television. Out loud.', eff:{base:+5,press:-4,street:-3,auth:+2}, wild:true,
      res:'You get to four hundred and eleven before losing your place. It is broadcast in full and is, by some distance, the most watched arithmetic in history.' }]},

{ id:'a-misspellings', title:'The Catalogue', who:C.social, min:4, max:30, tags:['gaffe','press'],
  src:'a running catalogue of misspellings in presidential posts',
  text:'A fact-checking desk has been cataloguing your spelling for eleven months. The list is at 340 entries. ' +
       'Brayden thinks it makes you relatable. Kaylee thinks it makes you look like you post at 4am, which you do.',
  choices:[
    { label:'Keep posting unedited. It is authentic.', eff:{base:+7,press:-5,street:-3,auth:+3},
      res:'The catalogue reaches 900 entries. It is also, genuinely, why four million people believe you write your own posts — which you do.' },
    { label:'Have somebody proofread before posting.', eff:{press:+6,congress:+4,street:+3,base:-6,auth:+1},
      res:'Engagement falls 22% within a month. Correct spelling reads as a committee, and a committee reads as everybody else.' },
    { label:'Misspell one word deliberately every time. Own it.', eff:{base:+8,press:-3,street:-2,auth:+3},
      res:'It becomes a signature and then a shibboleth. Supporters begin misspelling it back and the fact-checkers quietly stop counting.' },
    { label:'Announce that the dictionary is wrong.', eff:{base:+5,press:-5,street:-4,congress:-3,auth:+3}, wild:true,
      res:'Four lexicographers respond with genuine delight and one writes a very good essay about descriptivism that goes unexpectedly viral.' }]},

{ id:'a-khan', title:'The Parents', who:C.gen, min:6, max:26, tags:['military','press'],
  src:'a public feud with the bereaved parents of a fallen soldier',
  text:'The father of a soldier killed protecting his unit has criticised you from a stage, holding a pocket Constitution. ' +
       'Tarrant is here with one sentence: "Sir, there is no version of answering him that ends well."',
  choices:[
    { label:'Answer him. Question the mother\'s silence.', eff:{base:+3,street:-13,press:-6,congress:-10,courts:-4,auth:+2},
      res:'It runs for eleven days. Four members of your own party break by name. Every serving officer hears about it and most say nothing, which is its own message.' },
    { label:'Say nothing at all. Send a private letter.', eff:{street:+8,press:+7,congress:+6,base:-4,auth:+1},
      res:'The letter is never published. He mentions years later that it was handwritten and better than he expected, and declines to say more.' },
    { label:'Praise the son by name at the next event.', eff:{street:+9,press:+8,congress:+7,base:-3,auth:+1},
      res:'You get the rank and the unit right without notes. It is thirty seconds long and the single most effective thing you do that month.' },
    { label:'Buy four thousand pocket Constitutions and hand them out.', eff:{base:+4,street:+6,press:+7,congress:+5,cash:-0.1,auth:-1}, wild:true,
      res:'They sell out nationally within a week. The publisher writes to thank you. Four of your own orders are subsequently quoted back at you from them.' }]},

{ id:'a-deferred-resignation', title:'The Offer', who:C.cos, min:2, max:16, tags:['agencies','power'],
  src:'a mass deferred-resignation offer made to the federal workforce',
  text:'"An email to every federal employee. Resign now, keep being paid until September, no questions." ' +
       'Deborah has the legal note. "Sir, we do not have appropriated funds to pay them through September."',
  choices:[
    { label:'Send it to all 2.3 million. Work out the money later.', eff:{base:+7,congress:-9,courts:-8,street:-9,press:-6,auth:+12},
      res:'Seventy-seven thousand accept. The ones with somewhere else to go leave first — air traffic, nuclear security, disease surveillance — because they always do.' },
    { label:'Send it only where you actually want reductions.', eff:{base:+4,street:-4,congress:-3,press:-3,auth:+8},
      res:'Precision instead of a blunderbuss. Same headcount reduction in the places you chose, and the reactor inspectors stay.' },
    { label:'Do not send it. Reduce by attrition.', eff:{street:+7,congress:+6,courts:+5,press:+5,base:-7,auth:+2},
      res:'The workforce shrinks 4% a year without a single email. Slower, cheaper, and it produces no litigation whatsoever.' },
    { label:'Send it, then send a second email retracting it.', eff:{base:+2,street:-6,congress:-5,press:-5,auth:+4}, wild:true,
      res:'Eleven thousand people have already resigned by the time the retraction lands. Four refuse to un-resign on principle and are, permanently, correct.' }]},

{ id:'a-thirty-days', title:'Thirty Days\' Notice', who:C.lawyer, min:1, max:12, tags:['power','congress'],
  src:'a statutory notice requirement for removing inspectors general',
  text:'"The statute requires thirty days\' written notice to Congress before you remove an inspector general. ' +
       'It is one sentence." Sy shrugs. "There is no penalty section. I have looked four times."',
  choices:[
    { label:'Skip the notice. Remove them tonight by email.', eff:{base:+5,congress:-9,courts:-8,press:-6,auth:+11}, breaks:'takecare',
      res:'A judge rules it unlawful in eight months and declines to reinstate anybody, reasoning you would simply re-fire them correctly. She is right, and says so.', flag:'igPurge' },
    { label:'Give the thirty days. Then remove them.', eff:{congress:-3,courts:-2,press:-3,base:+4,auth:+9},
      res:'The paperwork is immaculate and the outcome is identical. Deborah writes "elegant" on a napkin and eats it.', flag:'igPurge' },
    { label:'Keep them. Cut their budgets instead.', eff:{congress:+3,courts:+3,press:+2,base:-2,auth:+5},
      res:'Their reports now arrive eleven months late, in black and white, unbound. Nobody reads them, which was the requirement.' },
    { label:'Give thirty days\' notice for one and fire the rest.', eff:{base:+3,congress:-6,courts:-6,press:-5,auth:+8}, wild:true,
      res:'The single compliant removal is cited in every filing as evidence of good faith. One out of seventeen is a surprisingly effective ratio.' }]},

{ id:'a-rule-count', title:'Ninety-Eight In A Row', who:C.energy, min:6, max:22, tags:['agencies','street'],
  src:'the cumulative scale of environmental deregulation across a term',
  text:'Cassandra has a spreadsheet. "Ninety-eight rules could be revoked. Individually each is a technical amendment ' +
       'nobody covers. Together it is the largest environmental change since 1970, and nobody will cover that either."',
  choices:[
    { label:'All ninety-eight. One a week. Never announce them.', eff:{base:+6,street:-10,courts:-9,press:-5,cash:+0.4,auth:+11},
      res:'Two years of Federal Register notices. Four are reported. The cumulative effect is measurable from orbit and is never once a front page.' },
    { label:'The twelve that actually cost jobs. Defend those loudly.', eff:{base:+5,street:-4,courts:-4,press:-3,auth:+7},
      res:'A defensible position you can win on television, which is nine-tenths of the value of any position.' },
    { label:'None. Fund the transition in the affected counties.', eff:{street:+9,press:+8,courts:+6,congress:+5,base:-8,cash:-0.4,auth:-2},
      res:'Eleven thousand retraining places across four states you won. It works, slowly, and your successor cuts the ribbon.' },
    { label:'Revoke ninety-eight rules and write ninety-nine new ones.', eff:{base:+3,street:-5,courts:-5,press:-4,auth:+5}, wild:true,
      res:'The replacement set is longer, stricter and drafted by the same career staff. Nobody in the building notices for eleven months.' }]},

{ id:'a-smoot', title:'The Comparison', who:C.treas, min:8, max:22, tags:['economy','press'],
  src:'the scale of a tariff package invoking historical comparisons',
  text:'Lyle has one page. "Every economist asked has reached for the same 1930 comparison. Not most of them, sir. ' +
       'All of them. Including four who work for you."',
  choices:[
    { label:'Embrace the comparison. That tariff built the country.', eff:{base:+8,street:-8,congress:-7,press:-5,auth:+7},
      res:'It did not. It is the most studied policy failure in American economic history and all four of your own economists say so in writing that week.' },
    { label:'Reject the comparison. Argue the differences.', eff:{street:+5,congress:+5,press:+5,base:-3,auth:+4},
      res:'There are genuine differences and you make them competently. The most substantive twenty minutes of your presidency, and it rates poorly.' },
    { label:'Ban the comparison from official communications.', eff:{base:+5,press:-7,street:-5,congress:-4,auth:+5},
      res:'A word cannot be banned. Its usage rises 400% in a fortnight, entirely because you tried.' },
    { label:'Name the tariff after the 1930 one, deliberately.', eff:{base:+5,street:-6,press:-5,congress:-5,auth:+4}, wild:true,
      res:'Claiming the comparison before it can be made is either brilliant or catastrophic, and four separate books reach four separate conclusions about which.' }]},

{ id:'a-first-of-many', title:'"The First, Perhaps, Of Many"', who:C.gen, min:12, max:26, tags:['military','street'],
  src:'characterising a domestic deployment as the first in a series',
  text:'Two thousand troops are in one city. A reporter has asked whether there will be others. ' +
       'Tarrant, quietly: "Sir, the answer to that question is the whole policy. Not the deployment. The answer."',
  choices:[
    { label:'"The first, perhaps, of many."', eff:{base:+8,street:-12,courts:-8,congress:-9,press:-6,auth:+10}, breaks:'posse',
      res:'Four governors pre-emptively activate their own Guards to deny you the pretext. One sentence has changed the posture of a third of the country.' },
    { label:'"This one. For this. That is all."', eff:{street:+8,congress:+7,courts:+6,press:+6,base:-7,auth:+1},
      res:'The deployment ends in three weeks and nothing follows it. Limiting language is the cheapest de-escalation available and it costs you a rally line.' },
    { label:'Refuse to answer. Let them wonder.', eff:{base:+5,street:-7,courts:-5,congress:-5,auth:+8},
      res:'Deliberate ambiguity does the work of a threat without the accountability of one. Every governor plans for the worst and none can quote you.' },
    { label:'"The first of exactly three." Name the three.', eff:{base:+4,street:-9,courts:-6,congress:-6,auth:+6}, wild:true,
      res:'You name three cities off the top of your head. All three sue within a week. One was not on any list anybody had prepared.' }]}

);
})();
