/* ============================================================
   PACK G, THE RECORD, CONTINUED
   Second grounded pack. Same rule as pack F: every crisis carries
   a `src` citation naming the documented item it riffs on, and
   every one is INSPIRED BY, NEVER COPIED, the mechanism is taken,
   everything else is invented.

   Drawn from the items pack F left unused, plus the institutional
   material in `Trump Research.md`.

   30 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- courts & appointments ---------- */

{ id:'g-blocked-seat', title:'The Held Seat', who:C.speaker, min:2, max:26, tags:['courts','congress'],
  src:'a court vacancy held open across an election, then filled',
  text:`Hal held a Supreme Court seat empty for eleven months on the theory that the people should decide first. A vacancy has now opened in your own final year. "Sir, the argument was never about the calendar. It was about whose calendar."`,
  choices:[
    { label:`Fill it. Today. Cite no principle whatsoever.`, eff:{base:+8,courts:+9,congress:-7,press:-5,street:-6,auth:+8},
      res:`Confirmed in twenty-seven days flat, citing nothing but the arithmetic of who currently holds the gavel, which turns out to be principle enough.` },
    { label:`Fill it, and invent a tidy distinction about which year this is.`, eff:{base:+6,courts:+8,congress:-4,press:-5,auth:+7},
      res:`The distinction runs four sentences and collapses under the very first follow-up question, which you answer with a different, equally temporary distinction.` },
    { label:`Hold it open. Live by the rule you made.`, eff:{congress:+9,courts:+7,press:+8,street:+6,base:-11,auth:-5},
      res:`Your successor fills it instead. Four legal historians later cite this as the last recorded instance of an American politician being bound by his own precedent.` },
    { label:`Fill it with the person Hal blocked eleven years ago.`, eff:{base:-6,congress:+6,courts:+5,press:+7,street:+5,auth:-2}, wild:true,
      res:`He is seventy-one, confirmed eighty-nine to eleven, and spends four years being scrupulously, maddeningly fair to everyone, which both sides find intolerable.` }]},

{ id:'g-nationwide', title:'One Judge, Whole Country', who:C.ag, min:10, max:40, tags:['courts','power'],
  src:'litigation over the scope of nationwide injunctions',
  text:`"A single district judge can freeze a national policy. We have argued that this is unconstitutional." Bo turns the page. "If we win that argument, sir, it also freezes every policy your successor ever tries to sign."`,
  choices:[
    { label:`Win it anyway. Take the tool off the table permanently.`, eff:{base:+5,courts:-8,congress:-5,press:-5,street:-5,auth:+12},
      res:`You win. Nationwide relief narrows sharply, and four years later it is the single largest obstacle to undoing anything you built, exactly as drawn up.` },
    { label:`Argue it narrowly. Only in this one case.`, eff:{courts:-4,press:-3,base:+3,auth:+7},
      res:`A carve-out, not a doctrine. It buys you this one policy and leaves the weapon fully loaded in the rack for the next administration too.` },
    { label:`Drop the argument. Fight on the merits.`, eff:{courts:+9,congress:+6,press:+7,base:-6,auth:-2},
      res:`You lose the case and win the institution, a trade for which no politician in recorded history has ever once been thanked.` },
    { label:`Ask which judge. Then have him invited to things.`, eff:{base:+3,courts:-6,press:-5,congress:-4,auth:+6}, wild:true,
      res:`He declines all four invitations in writing, forwards the notes to the judicial conference, and rules against you nine days later, at greater length than strictly necessary.` }]},

{ id:'g-immunity', title:'Official Acts', who:C.lawyer, min:16, max:46, tags:['courts','power'],
  src:'a ruling granting broad immunity for official presidential acts',
  text:`"The Court has held that a court may not inquire into your motive for an official act." Sy sets the ruling down like it might go off. "Sir, that one sentence is now doing more work than the rest of American law combined."`,
  choices:[
    { label:`Build everything on it. Cite it in every filing.`, eff:{base:+5,courts:-9,congress:-8,press:-6,street:-6,auth:+14},
      res:`A third of your emergency filings now lean on it. You are building an entire architecture on a single sentence, and every new brick makes that sentence load-bearing.` },
    { label:`Use it once, on something small, to establish the range.`, eff:{courts:-4,press:-3,base:+3,auth:+9},
      res:`A trivial test case, filed quietly, that draws no headlines and settles the boundary for good. It is now available for the rest of your natural life.` },
    { label:`Never invoke it. A shield you use becomes a target.`, eff:{courts:+8,congress:+7,press:+7,base:-5,auth:-2},
      res:`Sy is, against every professional instinct, impressed. The protection stays total and entirely untested, which is the strongest possible form a threat can take.` },
    { label:`Declare brushing your teeth an official act.`, eff:{base:+4,courts:-6,press:-5,street:-4,auth:+5}, wild:true,
      res:`Filed, with a straight face, in a footnote, purely to see how far the category stretches. A judge notes it in a concurrence with visible, documented weariness.` }]},

/* ---------- health & the pandemic aftermath ---------- */

{ id:'g-complicated', title:'Nobody Knew', who:C.health, min:2, max:24, tags:['street','press'],
  src:'expressing surprise at the complexity of healthcare policy',
  text:`Dr. Pike has walked you through the exchange subsidies four separate times. You have just told a room of governors that nobody knew health care could be this complicated.`,
  choices:[
    { label:`Say it again publicly. It is honest.`, eff:{base:+3,street:-8,press:-5,congress:-7,auth:+1},
      res:`Everyone who works in health policy knew. It is, in fact, their entire job. The clip runs at four conferences a year for a decade, always for the exact same laugh.` },
    { label:`Own the learning curve. Ask better questions in public.`, eff:{street:+8,press:+8,congress:+6,base:-4,auth:+1},
      res:`A president visibly learning something on camera is rare enough to lead two broadcasts. Pike gets nine uninterrupted minutes and spends every one of them.` },
    { label:`Blame the complexity on the previous administration.`, eff:{base:+6,street:-4,press:-4,congress:-3,auth:+3},
      res:`The complexity predates them by forty years and traces to a compromise your own party negotiated in 1974, a fact three fact-checkers publish before dinner.` },
    { label:`Solve it live, on a whiteboard, in ninety minutes.`, eff:{base:+5,street:-5,press:-4,congress:-4,auth:+2}, wild:true,
      res:`The whiteboard gets photographed from every angle. Four health economists study it seriously and conclude it would cost two trillion dollars and cover eleven fewer people.` }]},

{ id:'g-briefing-podium', title:'The Podium', who:C.doc, min:8, max:36, tags:['press','street'],
  src:'freelancing beside public-health officials at a briefing',
  text:`Admiral Prine stands at your left, the surgeon general at your right, and the podium is yours for ninety minutes a day. Prine: "Sir, whatever you say up here becomes clinical advice by lunchtime, whether it is or not."`,
  choices:[
    { label:`Take the whole ninety minutes. Every day.`, eff:{base:+7,street:-9,press:-5,congress:-5,auth:+4},
      res:`The ratings are extraordinary. So is the spike in poison-control calls over the four days following one particular musing about household chemicals.` },
    { label:`Open, hand to Prine, leave the room.`, eff:{street:+9,press:+8,congress:+6,base:-6,auth:+1},
      res:`Compliance with public-health guidance climbs fourteen points in a fortnight, entirely because the person delivering it now has an actual medical degree.` },
    { label:`Stay, but answer nothing clinical.`, eff:{base:+4,street:+4,press:+4,auth:+2},
      res:`Genuine discipline, held for eleven days, and broken on the twelfth by one question about a supplement.` },
    { label:`Bring a chart of your own approval rating instead.`, eff:{base:+5,street:-6,press:-5,congress:-4,auth:+2}, wild:true,
      res:`You spend nine minutes of a public-health briefing on your own approval numbers. The surgeon general studies the floor for all nine of them.` }]},

/* ---------- environment ---------- */

{ id:'g-power-plan', title:'The Rule About Coal', who:C.energy, min:6, max:34, tags:['economy','street'],
  src:'repeal of a power-sector emissions rule, replaced with a weaker one',
  text:`"You can repeal it, but you cannot repeal it into nothing, a court will demand a replacement." Cassandra shrugs. "So the only real question is how weak the replacement can be before it stops legally counting as one."`,
  choices:[
    { label:`Replace it with something that changes nothing.`, eff:{base:+7,street:-7,courts:-7,press:-5,cash:+0.3,auth:+8},
      res:`The replacement runs four hundred pages, and its own required impact analysis admits it achieves one percent of the original. That admission is now permanently on the record.` },
    { label:`Replace it with something modest and defensible.`, eff:{base:+4,street:-2,courts:+4,press:+3,auth:+5},
      res:`It survives judicial review, unlike the previous four attempts by anyone, and it is still standing, unremarkably, in 2041.` },
    { label:`Keep it. Take credit for the plants already closing.`, eff:{street:+8,press:+7,courts:+5,base:-9,auth:+1},
      res:`Those plants were closing on economics, not regulation, and you know it, and you take the credit anyway, which is more honest than most things you say.` },
    { label:`Replace it with a rule about a fuel nobody uses.`, eff:{base:+4,street:-4,courts:-5,press:-4,auth:+4}, wild:true,
      res:`Comprehensive national standards for whale oil. Legally airtight, achieves absolutely nothing, and consumes eleven months of somebody's one life to draft.` }]},

{ id:'g-refuge', title:'The Refuge', who:C.energy, min:10, max:40, tags:['economy','street'],
  src:'opening a protected wilderness area to drilling leases',
  text:`The coastal plain has been closed to drilling since 1980. Cassandra: "The lease sale can happen. Whether anyone bids is a separate question, four majors have already said they will not."`,
  choices:[
    { label:`Hold the sale. The point is that it happened.`, eff:{base:+7,street:-8,courts:-7,press:-5,cash:+0.2,auth:+8},
      res:`Two bidders show up, one of them a state agency buying the leases specifically to prevent development. It raises fourteen million dollars against a projected one point eight billion, and the precedent is forever.` },
    { label:`Hold it and sweeten the terms until somebody bids.`, eff:{base:+5,street:-6,courts:-5,press:-4,cash:-0.2,auth:+6},
      res:`Royalty rates set so low the government would lose money on a successful well. Three bidders appear. Nobody drills a single hole.` },
    { label:`Leave it closed. Open somewhere already industrial.`, eff:{street:+7,press:+6,courts:+5,base:-5,cash:+0.3,auth:+3},
      res:`Four brownfield sites yield more actual production than the refuge ever would have in a decade, and not one lawsuit.` },
    { label:`Lease it to a conservation trust that will never drill.`, eff:{base:-6,street:+9,press:+9,courts:+6,cash:+0.1,auth:-2}, wild:true,
      res:`They pay full price for the right to do absolutely nothing with it. It is legal, it is a genuine sale, and it is the funniest reading of an oil lease on record.` }]},

/* ---------- the base and the movement ---------- */

{ id:'g-send-her-back', title:'The Chant', who:C.social, min:12, max:44, tags:['rhetoric','street'],
  src:'a crowd chant at a rally following remarks about a congresswoman',
  text:`You said something about a congresswoman four days ago. The crowd in front of you has now turned it into a chant, thirteen seconds long and climbing. Brayden has stopped breathing.`,
  choices:[
    { label:`Let it run. Say nothing. Wait it out.`, eff:{base:+8,street:-12,press:-5,congress:-9,courts:-4,auth:+5},
      res:`Thirteen seconds becomes the entire story. Four members of your own party condemn it by name, and you spend a week explaining a silence.` },
    { label:`Cut it off. "No, she is an American."`, eff:{street:+10,press:+9,congress:+8,base:-9,auth:-2},
      res:`Six words into a live microphone, at your own rally. The crowd actually stops. It is the single bravest thing you do in front of your supporters, and they never quite forgive you for it.` },
    { label:`Talk over it until it dies.`, eff:{base:+3,street:-4,press:-3,congress:-3,auth:+2},
      res:`The professional move: no clip of you joining in, no clip of you shutting it down. Both sides claim the tape, and neither can actually use it.` },
    { label:`Start a different chant. Immediately. Any chant.`, eff:{base:+5,street:-5,press:-4,congress:-3,auth:+2}, wild:true,
      res:`You start chanting about infrastructure instead. Eleven thousand people follow you into it on pure momentum. It is the strangest recovery ever caught on camera.` }]},

{ id:'g-general-lee', title:'The Statue Of A General', who:C.hist, min:14, max:44, tags:['culture','street'],
  src:'defending a Confederate general as a military figure years after a violent rally',
  text:`Asked about a monument, you praised the general as a great soldier. Dr. Weir has brought his actual letters. "He opposed the monuments, sir. In writing. Twice. He thought they would keep the wound open forever."`,
  choices:[
    { label:`Keep praising him. He was a great general.`, eff:{base:+7,street:-10,press:-5,congress:-6,courts:-4,auth:+4},
      res:`He was, tactically, a genuinely good general, which is the narrowest defence available and the one you pick. The letters run in print right beside your quote.` },
    { label:`Read his letters aloud. Let him make the argument.`, eff:{street:+9,press:+9,congress:+7,courts:+4,base:-8,auth:-2},
      res:`Using the man's own written objection to end the argument over his own statue is the most elegant move on the table, and it costs you eleven points with your base.` },
    { label:`Say it is a local matter and refuse to engage.`, eff:{street:+5,press:+4,congress:+4,base:-5,auth:+1},
      res:`Correct, boring, and completely unsatisfying to everyone who came for a fight, which is everyone.` },
    { label:`Propose a statue of the letters instead of the man.`, eff:{base:-4,street:+7,press:+8,congress:+5,auth:+1}, wild:true,
      res:`A bronze open book, commissioned and genuinely beautiful. Two counties fight over it for nine years on grounds nobody involved can actually summarise.` }]},

/* ---------- the machinery of the second administration ---------- */

{ id:'g-project-binder', title:'The Institute', who:C.cos, min:1, max:16, tags:['power','agencies'],
  src:'a policy blueprint drafted outside government and adopted wholesale',
  text:`"Nine hundred pages, written over four years by people you have never met, covering every agency. You disavowed it during the campaign." Deborah sets it on the desk. "Chapter one, sir, is a staffing list."`,
  choices:[
    { label:`Implement it. Chapter by chapter. Hire from the list.`, eff:{base:+6,congress:-8,courts:-8,press:-6,street:-7,auth:+13},
      res:`Sixty percent of it is enacted within eighteen months. The disavowal runs on a loop beside the implementation tracker nightly, and moves precisely nothing.` },
    { label:`Take the staffing list. Ignore the policy.`, eff:{base:+4,congress:-5,courts:-5,press:-4,auth:+9},
      res:`The people are the policy. Hiring four hundred of the document's own authors is how you implement it without ever technically adopting a word of it.` },
    { label:`Bin it. You disavowed it and you meant it.`, eff:{congress:+8,courts:+7,press:+8,street:+7,base:-8,auth:-6},
      res:`The institute funds a primary challenger within the year. It is the single most expensive act of integrity your presidency ever performs.` },
    { label:`Implement chapter eleven only. Do not read the others.`, eff:{base:+3,congress:-4,courts:-4,press:-4,auth:+6}, wild:true,
      res:`Chapter eleven, it turns out, is about federal building maintenance. It is enacted flawlessly, and the General Services Administration has the best decade of its existence.` }]},

{ id:'g-no-independent', title:'"There Are No Independent Agencies"', who:C.cos, min:12, max:44, tags:['power','agencies'],
  src:'a budget director asserting total presidential control over the executive branch',
  text:`Your budget director has said, on camera, that there is no such thing as an independent agency. Deborah: "It is a legal theory with real support behind it. Said out loud like that, it is also a confession of intent."`,
  choices:[
    { label:`Endorse it. Say it yourself, in those words.`, eff:{base:+6,congress:-9,courts:-10,press:-6,street:-6,auth:+13},
      res:`Every removal from here on is litigated against a stated theory rather than a specific fact. You have handed the other side a target and thrown away the ambiguity for free.` },
    { label:`Let him say it. Never confirm it.`, eff:{congress:-4,courts:-5,press:-4,base:+4,auth:+10},
      res:`A theory floated by a subordinate is a theory you can disown by lunch. This is precisely why he was hired, and he knows it.` },
    { label:`Correct him publicly. Some agencies are independent.`, eff:{congress:+9,courts:+9,press:+8,street:+6,base:-7,auth:-6},
      res:`Four agency heads sleep properly for the first time in a year. He resigns by spring and writes about it, at length, for money.` },
    { label:`Agree, and declare the weather service independent as an exception.`, eff:{base:+3,congress:-5,courts:-5,press:-4,auth:+5}, wild:true,
      res:`One carve-out, picked essentially at random, that somehow makes the whole theory sound more sweeping rather than less. Nobody can quite explain why, and everyone feels it anyway.` }]},

{ id:'g-hundred-thirty', title:'The Hundred and Thirty Days', who:C.broom, min:8, max:30, tags:['agencies','power'],
  src:'a special government employee approaching a statutory service limit',
  text:`Vandermeer is a special government employee. The category carries a hard cap: one hundred thirty days a year. He has used one hundred eighteen. "Nobody actually counts these," he says. Deborah, quietly: "Somebody is counting these."`,
  choices:[
    { label:`Stop counting. He stays.`, eff:{base:+5,congress:-7,courts:-7,press:-6,street:-4,auth:+10},
      res:`A statutory limit nobody tracks is not, functionally, a limit. Four FOIA requests eventually establish he served two hundred ninety-one days, and no consequence attaches to a single one of them.` },
    { label:`Make him a full employee. Full disclosure obligations.`, eff:{congress:+6,courts:+6,press:+6,base:-4,auth:+3},
      res:`He quits within the week rather than file the disclosure. The hundred-thirty-day category existed specifically to dodge that form, and now everybody knows it.` },
    { label:`Let him hit the limit and leave.`, eff:{congress:+7,courts:+5,street:+5,press:+4,base:-6,auth:-2},
      res:`He walks out on day one hundred thirty with a chainsaw and a livestream. The agency he built outlasts him easily, which was always the actual risk.` },
    { label:`Give him a second job so the days count separately.`, eff:{base:+3,congress:-5,courts:-5,press:-4,auth:+7}, wild:true,
      res:`He is appointed to four different agencies at once, each with its own separate hundred-thirty-day clock. Arithmetically ingenious, legally indefensible, and nobody lifts a finger to stop it.` }]},

/* ---------- money & the accounting ---------- */

{ id:'g-two-billion-case', title:'The Money Already Owed', who:C.treas, min:10, max:40, tags:['courts','money'],
  src:'litigation over withholding funds for work already completed',
  text:`"Two billion dollars for aid work that has already been completed. These invoices are for finished contracts." Lyle looks up. "These are not grants we are declining, sir. These are bills we are simply not paying."`,
  choices:[
    { label:`Do not pay. Litigate it to the last court.`, eff:{base:+5,courts:-11,congress:-8,street:-7,press:-5,auth:+11},
      res:`You lose, five to four, on an emergency application. Nine hundred contractors have already gone under by then, a fact the ruling does not address, because rulings never do.` },
    { label:`Pay the completed work. Cancel everything future.`, eff:{base:+3,courts:+6,congress:+5,press:+4,auth:+6},
      res:`Legally unimpeachable, and it banks ninety percent of the savings while leaving none of the case law behind for anyone to cite against you later.` },
    { label:`Pay all of it. Fight the next appropriation instead.`, eff:{courts:+8,congress:+8,street:+7,press:+6,base:-6,auth:-2},
      res:`Fighting the next appropriation instead of the last one is how this system is actually designed to work. It is slower, and it works.` },
    { label:`Pay in a currency of your own devising.`, eff:{base:+2,courts:-6,congress:-5,press:-4,auth:+4}, wild:true,
      res:`Treasury notes redeemable in 2041. Four contractors accept them. One resells his at a profit in 2033 and becomes, briefly, quite famous.` }]},

{ id:'g-hotel-ledger', title:'The Ledger', who:C.ethics, min:12, max:44, tags:['money','press'],
  src:'foreign delegations booking at a president-owned property',
  text:`Miriam Applewhite has the booking records: eleven foreign delegations, one property, your name over the door. "Nobody has alleged a quid pro quo, sir. Nobody needs to. The ledger is the allegation."`,
  choices:[
    { label:`Keep taking the bookings. It is a hotel.`, eff:{base:+4,congress:-8,courts:-7,press:-6,cash:+0.5,auth:+7},
      res:`It is, technically, a hotel. It is also the only hotel on earth where a foreign ministry can wire money to a sitting head of state and receive a room key in return.` },
    { label:`Donate the foreign profits to the Treasury.`, eff:{congress:+7,courts:+6,press:+7,base:-3,cash:-0.3,auth:+3},
      res:`You calculate the figure personally, publish no methodology, and mail a cheque. It is entirely unverifiable, and it works completely.` },
    { label:`Refuse foreign bookings outright.`, eff:{congress:+9,courts:+8,press:+8,street:+5,base:-4,cash:-0.5,auth:-1},
      res:`The clause is satisfied, the story dies overnight, and the property loses thirty percent of its revenue to a competitor four blocks away.` },
    { label:`Charge foreign delegations quadruple and call it a tariff.`, eff:{base:+5,congress:-6,courts:-5,press:-5,cash:+0.7,auth:+5}, wild:true,
      res:`A room rate logged in the booking system as a customs duty. Two embassies pay it without querying the line item, which tells you everything about embassies.` }]},

/* ---------- immigration, continued ---------- */

{ id:'g-caravan', title:'The Word For It', who:C.home, min:8, max:38, tags:['immigration','rhetoric'],
  src:'describing migration as an invasion in the weeks before an election',
  text:`Several thousand people are walking north. Duane has the actual numbers, ages and composition. Brayden has a word, and the word is nowhere in Duane's briefing.`,
  choices:[
    { label:`Use the word. Deploy troops to meet them.`, eff:{base:+9,street:-11,press:-5,congress:-7,courts:-5,auth:+8},
      res:`Five thousand soldiers deploy to a border the group reaches eleven weeks later, by which point most have dispersed and the troops have already gone home.` },
    { label:`Use the word. Deploy nobody.`, eff:{base:+7,street:-6,press:-5,congress:-4,auth:+5},
      res:`All of the rhetoric, none of the cost. The word does the entire job, and the Pentagon is quietly relieved not to be involved.` },
    { label:`Give the actual numbers. Process them properly.`, eff:{street:+8,press:+8,congress:+6,courts:+6,base:-9,auth:-2},
      res:`Four thousand people, mostly families, processed over nine months. Two-thirds are refused and removed, exactly as the law provides, and nobody bothers to film it.` },
    { label:`Send a marching band to meet them at the border.`, eff:{base:+3,street:+5,press:+6,congress:-4,auth:+1}, wild:true,
      res:`Nobody can determine what the gesture means, including you. It is analysed for four days on three continents and remains, to this day, completely unexplained.` }]},

{ id:'g-registry-quota', title:'The Ceiling On A Country', who:C.state, min:10, max:42, tags:['immigration','foreign'],
  src:'per-country caps and the courts\' review of a revised travel restriction',
  text:`The third version of the entry restriction has survived review because it is framed around vetting rather than nationality. Muriel: "It is the identical list, sir. It survived because the third draft added a paragraph about process."`,
  choices:[
    { label:`Expand it now that the frame works.`, eff:{base:+7,street:-8,courts:-6,press:-5,congress:-5,auth:+9},
      res:`Nine countries becomes fourteen. The vetting paragraph is copied verbatim every single time and is never once assessed on its actual merits.` },
    { label:`Keep it at nine. Do not test the frame.`, eff:{base:+4,courts:-3,street:-3,press:-3,auth:+6},
      res:`Restraint born of pure legal caution. It holds for four years, simply because nobody ever gave a court a reason to look again.` },
    { label:`Replace it with actual per-applicant vetting.`, eff:{street:+8,courts:+7,press:+7,congress:+5,base:-8,auth:+1},
      res:`It costs four hundred million dollars, takes eleven months to stand up, and refuses more people than the list ever did, on grounds that survive every challenge.` },
    { label:`Add a country that does not have a government.`, eff:{base:+3,street:-4,press:-4,courts:-3,auth:+3}, wild:true,
      res:`There is nobody left to lodge a protest, which four officials note approvingly, right up until one of them asks what happens to the applicants already mid-flight.` }]},

/* ---------- the press, continued ---------- */

{ id:'g-health-story', title:'The Story About Your Health', who:C.press, min:20, max:48, tags:['press','base'],
  src:'attacks on an outlet over reporting about presidential health',
  text:`A paper has published a piece about your health, sourced to four people inside the building. Kaylee: "It is not wrong, sir. That is precisely why I cannot get it corrected."`,
  choices:[
    { label:`Attack the paper. Call it an enemy of the people.`, eff:{base:+8,press:-12,street:-6,congress:-5,auth:+5},
      res:`The story is now the attack rather than the health. The trade works, and it works only by confirming there was something worth attacking about.` },
    { label:`Release the actual records. All of them.`, eff:{press:+9,street:+8,congress:+6,base:-6,auth:+1},
      res:`They turn out to be unremarkable, even slightly boring. Publishing them ends four years of speculation in a single afternoon, and Prine finally gets left alone.` },
    { label:`Find the four sources. That is the real problem.`, eff:{base:+5,press:-9,courts:-5,street:-5,congress:-4,auth:+9},
      res:`Two are identified and removed. The remaining two simply stop talking to you and start writing everything down, which is considerably worse.` },
    { label:`Challenge the editor to a physical contest.`, eff:{base:+6,press:-6,street:-4,congress:-4,auth:+2}, wild:true,
      res:`He is sixty-three and accepts immediately, with visible enthusiasm. It never actually happens. Both of you spend years insisting the other one backed out.` }]},

{ id:'g-pool-slot', title:'The Permanent Slot', who:C.press, min:14, max:46, tags:['press','power'],
  src:'restructuring of the White House press pool and wire-service access',
  text:`"The wire services have held a permanent seat in the pool since the 1880s. Not by law, by custom." Kaylee closes the folder. "We control the pool, sir. We could simply stop having one."`,
  choices:[
    { label:`Abolish the permanent slot. Pick the pool ourselves.`, eff:{base:+6,press:-13,courts:-6,congress:-6,street:-5,auth:+11},
      res:`A hundred and forty years of custom end in one email. The replacements are friendlier, the questions are softer, and no law was broken, because there was never a law to break.` },
    { label:`Add friendly outlets alongside the wires.`, eff:{base:+5,press:-6,auth:+7},
      res:`Dilution rather than removal. The wires keep their seat and lose their monopoly on the first question, which was the only thing that ever mattered.` },
    { label:`Leave it. The custom outlives every president.`, eff:{press:+9,congress:+6,street:+5,courts:+4,base:-5,auth:-3},
      res:`Kaylee argues against her own recommendation for eleven straight minutes and is visibly, audibly relieved to lose.` },
    { label:`Give the permanent slot to a high school newspaper.`, eff:{base:+4,press:-6,street:+3,congress:-3,auth:+3}, wild:true,
      res:`A seventeen-year-old from Dayton asks the single best question of the year in her fourth week on the beat, and four networks lead with it.` }]},

/* ---------- foreign, continued ---------- */

{ id:'g-summit-praise', title:'The Joint Statement', who:C.state, min:12, max:44, tags:['foreign','press'],
  src:'appearing to accept a foreign leader\'s account over one\'s own agencies',
  text:`You are on a stage beside a head of state your own intelligence services have accused of interference, asked live whose account you accept. Hance is watching from four feet away.`,
  choices:[
    { label:`Say you see no reason it would be them.`, eff:{base:+4,street:-11,congress:-12,press:-6,courts:-4,auth:+4},
      res:`Members of your own party issue statements before you have even left the stage. You spend the following day explaining that you meant to include the word 'not'.` },
    { label:`Back your own agencies. Flatly. On the stage.`, eff:{street:+9,congress:+10,press:+8,courts:+5,base:-6,auth:+2},
      res:`Nine words, delivered beside him, with no hedge in sight. Hance does not react at all, which for Hance is a standing ovation.` },
    { label:`Refuse the question. Talk about the trade file.`, eff:{congress:+4,street:+3,press:+3,base:+2,auth:+3},
      res:`A pivot so obvious that everyone notices and nobody can quote it directly. It is the correct answer, and it satisfies exactly nobody.` },
    { label:`Say you accept both accounts simultaneously.`, eff:{base:+3,street:-6,congress:-6,press:-5,auth:+3}, wild:true,
      res:`You hold two flatly contradictory positions in a single sentence, on purpose, and dare anyone to pick one. Four newsrooms run the full quote, because summarising it is simply impossible.` }]},

{ id:'g-tariff-autos', title:'The Twenty-Five Percent', who:C.treas, min:12, max:44, tags:['economy','foreign'],
  src:'tariffs on imported vehicles and parts, and the retaliation that followed',
  text:`A quarter tariff on imported vehicles and parts. Lyle: "Forty percent of a car built in this country is imported parts. We are describing a tax on domestic manufacturing as a defence of it."`,
  choices:[
    { label:`Impose it. All vehicles, all parts.`, eff:{base:+8,street:-9,congress:-7,press:-5,cash:-0.3,auth:+8},
      res:`Domestic assembly costs rise eleven hundred dollars a unit. Four plants delay expansion. The announcement is, meanwhile, enormously popular in precisely the towns where those plants sit.` },
    { label:`Vehicles only. Exempt the parts.`, eff:{base:+5,street:-3,congress:-3,press:-3,auth:+6},
      res:`The version an economist would actually write. It protects assembly, spares the supply chain, and is a third as satisfying to announce out loud.` },
    { label:`Threaten it for eighteen months. Never impose it.`, eff:{base:+4,street:+4,congress:+3,press:+3,auth:+7},
      res:`You extract four concessions from three governments for a tariff that never once exists. It is the most profitable thing you never do.` },
    { label:`Tariff only cars in one specific colour.`, eff:{base:+3,street:-4,press:-4,congress:-4,auth:+3}, wild:true,
      res:`Customs is asked to formally adjudicate paint colour. Four importers respray at the port within days, and the resulting tariff schedule runs ninety pages of colour names.` }]},

/* ---------- domestic force ---------- */

{ id:'g-six-cities', title:'Six Cities', who:C.gen, min:18, max:46, tags:['military','street'],
  src:'authorised Guard deployments to multiple cities over local objections',
  text:`Six cities, six governors, four of whom have refused consent. Tarrant: "I can do six, sir. The six are not the problem. The seventh is the problem. There is always a seventh."`,
  choices:[
    { label:`All six. Simultaneously.`, eff:{base:+8,street:-14,courts:-10,congress:-9,press:-6,auth:+13},
      res:`It works, logistically, and fails at everything else. By month four the deployments are costing three hundred thirty-two million dollars and being litigated in five circuits simultaneously.` },
    { label:`Two cities. The ones that asked.`, eff:{base:+4,street:+5,congress:+4,courts:+4,press:+3,auth:+5},
      res:`Consented deployments turn out to be uncontroversial, effective, and completely invisible in national coverage.` },
    { label:`None. Fund the local departments instead.`, eff:{street:+9,courts:+8,congress:+7,press:+7,base:-9,auth:-4},
      res:`One point two billion dollars to city police budgets. Crime falls in four of the six over two years, and every mayor involved claims full credit.` },
    { label:`Deploy to a seventh city nobody mentioned.`, eff:{base:+4,street:-8,courts:-6,congress:-5,auth:+7}, wild:true,
      res:`A town of nine thousand with no unrest of any kind. Its mayor holds a press conference to sincerely ask what, exactly, is happening to his town.` }]},

{ id:'g-stand-down', title:'The Quiet Withdrawal', who:C.home, min:26, max:48, tags:['street','power'], req:r=>r.flags.guard,
  src:'quietly abandoning deployment plans after a series of legal setbacks',
  text:`Four courts have gone against you and a fifth is on the calendar. Duane has drafted a withdrawal describing the deployments as having achieved their objectives. "Sir, nobody will believe the sentence. But nobody will litigate it either."`,
  choices:[
    { label:`Withdraw. Declare total success.`, eff:{base:+4,street:+7,courts:+6,congress:+5,press:+3,auth:+3},
      res:`It all ends on a Tuesday, in a two-paragraph statement. It is the cheapest exit on the table, and it was available the entire time, which is the uncomfortable part.` },
    { label:`Withdraw and blame the courts by name.`, eff:{base:+7,courts:-8,street:+3,press:-5,congress:-4,auth:+5},
      res:`You retreat and attack simultaneously, which preserves the base and makes the fifth ruling, when it lands, considerably harsher than it needed to be.` },
    { label:`Escalate into the fifth case. Do not blink.`, eff:{base:+6,street:-10,courts:-9,congress:-7,press:-5,auth:+9},
      res:`You lose it seven to two, with a majority opinion quoted for thirty years and a doctrine that ends up named after this exact case.` },
    { label:`Withdraw and give the troops to the parks service.`, eff:{base:+2,street:+8,press:+7,congress:+5,auth:+1}, wild:true,
      res:`Four thousand soldiers spend a summer rebuilding hiking trails. It is the single most popular thing the deployment ever produces, and somebody proposes, seriously, making it permanent.` }]},

/* ---------- indices, scholars and the mirror ---------- */

{ id:'g-competitive', title:'The Term Of Art', who:C.hist, min:24, max:48, tags:['press','power'],
  src:'political scientists classifying the country as competitively authoritarian',
  text:`Three comparative-politics scholars have published a piece arguing the country has crossed a threshold. Dr. Weir: "The phrase is competitive authoritarianism, sir. It is a technical term. It has a checklist. We meet most of it."`,
  choices:[
    { label:`Adopt the phrase. Wear it. Sell the hat.`, eff:{base:+9,street:-9,courts:-7,press:-6,congress:-6,cash:+0.2,auth:+9},
      res:`Turning a diagnosis into merchandise defuses it for your supporters and confirms it for everyone else, a trade you make without a moment's hesitation.` },
    { label:`Have the scholars invited in. Argue with them.`, eff:{street:+8,press:+9,congress:+6,courts:+5,base:-6,auth:-2},
      res:`Ninety minutes, on the record, against three academics who have read more history than everyone else in the building combined. You lose, visibly, and somehow that makes you look better than winning would have.` },
    { label:`Ignore it. Academics have been wrong before.`, eff:{base:+3,press:-2,auth:+3},
      res:`They have been. They are not wrong this time, and the checklist is now public, and anyone at all can run the comparison.` },
    { label:`Ask which items on the checklist you are missing.`, eff:{base:+4,street:-7,courts:-6,press:-6,congress:-5,auth:+11}, wild:true,
      res:`You ask sincerely. There are four items left. Deborah watches you write them down and does not sleep properly for a week.` }]},

{ id:'g-anticipatory-two', title:'The University', who:C.edu, min:16, max:46, tags:['culture','power'],
  src:'a major university conceding to federal demands to protect its funding',
  text:`A second university has folded, before any funding was actually frozen, before any letter was even sent. Ollis: "They read what happened to the first one and did the arithmetic. Nobody in this building spoke to them at all."`,
  choices:[
    { label:`Publicise it. Make the arithmetic obvious to the rest.`, eff:{base:+7,street:-9,courts:-8,press:-8,congress:-6,auth:+12},
      res:`Nine more institutions fall in line within a year, without ever once being contacted. This is the cheapest power that exists and it does not require you to lift a finger.` },
    { label:`Say nothing. Let it keep happening quietly.`, eff:{base:+3,street:-6,courts:-6,press:-6,auth:+10},
      res:`Invisible compliance is worth more than visible compliance, because there is nothing left for anyone to point a camera at.` },
    { label:`Tell them publicly it was unnecessary.`, eff:{street:+9,courts:+9,press:+9,congress:+7,base:-8,auth:-7},
      res:`One of the two reverses within a fortnight. The other does not, and its president privately says he no longer believes reversal is safe to attempt.` },
    { label:`Send them a demand letter retroactively.`, eff:{base:+4,street:-6,courts:-6,press:-6,auth:+7}, wild:true,
      res:`A formal demand for concessions they have already made. It is filed, answered, and complied with a second time, and nobody involved can explain why.` }]},

/* ---------- pardons, continued ---------- */

{ id:'g-officers-pardon', title:'The Two Officers', who:C.ag, min:12, max:44, tags:['justice','street'],
  src:'clemency for law enforcement officers convicted in a death',
  text:`Two officers convicted in a pursuit that killed a man. Bo has the trial record. "The convictions are sound, sir. The sentences are arguably harsh. Those are two different arguments, and only one of them is a pardon."`,
  choices:[
    { label:`Full pardons. Both. Announce it at a police event.`, eff:{base:+8,street:-11,courts:-8,press:-5,congress:-5,auth:+7},
      res:`The family learns of it from the broadcast, same as everyone else. Four police unions endorse you within the month, and the city the officers served does not.` },
    { label:`Commute the sentences. Leave the convictions.`, eff:{base:+5,street:-4,courts:-3,press:-3,auth:+5},
      res:`The narrower move, and the one that actually addresses the real argument. It buys half the credit at a tenth of the anger.` },
    { label:`Nothing. A jury heard it and you did not.`, eff:{street:+8,courts:+7,press:+6,congress:+4,base:-8,auth:-3},
      res:`The correct answer, and it costs you four points among a constituency that has never once forgiven a president for using this particular power.` },
    { label:`Pardon them and appoint them to the review board.`, eff:{base:+5,street:-9,courts:-7,press:-6,auth:+6}, wild:true,
      res:`Two men pardoned for causing a death now sit on the very board that reviews deaths. The appointment is lawful, the irony goes unaddressed, and four members resign on the spot.` }]},

/* ---------- the long institutional game ---------- */

{ id:'g-vacancies-act', title:'The Acting Everything', who:C.lawyer, min:14, max:46, tags:['power','congress'],
  src:'extended reliance on acting officials rather than confirmed nominees',
  text:`"Eleven senior posts, all filled by acting officials. The statute caps how long that can run." Sy shrugs. "The remedy for breaching the cap is that their actions become void. Nobody has ever asked a court to void four years of agency action."`,
  choices:[
    { label:`Run the whole government on acting officials.`, eff:{base:+4,congress:-11,courts:-8,press:-6,street:-5,auth:+13},
      res:`A remedy nobody dares invoke is not, functionally, a remedy. Eleven agencies run for four years by people the Senate never once saw, and the voidness argument is never tested.` },
    { label:`Confirm the four that matter. Act out the rest.`, eff:{congress:+5,courts:+4,base:+3,auth:+9},
      res:`The confirmed four hand you legitimacy, the acting seven hand you speed. It is the version that survives contact with an actual hearing.` },
    { label:`Nominate for all eleven. Take the confirmation fights.`, eff:{congress:+10,courts:+8,press:+6,base:-5,auth:+3},
      res:`It takes fourteen months and you lose two fights. The nine who make it through cannot be removed by your successor with a single phone call.` },
    { label:`Appoint one person to all eleven posts.`, eff:{base:+3,congress:-7,courts:-6,press:-5,auth:+8}, wild:true,
      res:`She is extremely capable and works nineteen-hour days for four months before informing you, by letter, that this was simply never going to work.` }]},

{ id:'g-inspector-report', title:'The Report Nobody Reads', who:C.ethics, min:20, max:48, tags:['agencies','press'], req:r=>r.flags.igPurge,
  src:'a court finding removals unlawful while declining to reverse them',
  text:`A judge has ruled the removals unlawful, and declined to reinstate anyone, reasoning that you would simply do it again with proper notice. Miriam: "You have been found to have broken the law, sir, and you have kept the outcome anyway."`,
  choices:[
    { label:`Cite the ruling as a vindication.`, eff:{base:+6,courts:-7,congress:-6,press:-6,street:-4,auth:+9},
      res:`A finding against you that changes precisely nothing, which is close enough to a win that saying so out loud works on roughly forty percent of the country.` },
    { label:`Comply retroactively. Give the notice. Re-fire them.`, eff:{courts:+5,congress:+4,press:+3,base:+3,auth:+8},
      res:`Thirty days of paperwork produces the identical outcome, entirely lawfully. The process was never the obstacle, and now that is officially on the record.` },
    { label:`Reinstate them and let them finish their terms.`, eff:{congress:+9,courts:+9,press:+8,street:+6,base:-8,auth:-5},
      res:`Eleven of the seventeen return. Four of their subsequent reports are extremely damaging to you, and two of them save you from something considerably worse.` },
    { label:`Appeal the finding you already won.`, eff:{base:+2,courts:-5,congress:-4,press:-4,auth:+4}, wild:true,
      res:`Your own lawyers spend nine weeks explaining there is nothing left to appeal. You order them to appeal it anyway, and it is dismissed as moot in four days.` }]},

{ id:'g-schedule-numbers', title:'Two Million Names', who:C.cos, min:16, max:46, tags:['agencies','power'], req:r=>r.flags.scheduleQ,
  src:'the scale of civil-service reclassification and the deferred-resignation offer',
  text:`"The offer went to every federal employee. Two point three million people. Resign now, keep getting paid through September." Deborah has the uptake numbers. "Seventy-seven thousand accepted, sir. Those are exactly the ones we could least afford to lose."`,
  choices:[
    { label:`Run it again. Bigger. Sweeten it.`, eff:{base:+6,congress:-8,courts:-7,street:-9,press:-6,auth:+12},
      res:`Another sixty thousand go. The people with somewhere else to be always leave first, which means every round of this makes the remaining workforce smaller, weaker and more compliant.` },
    { label:`Close the offer. Keep who is left.`, eff:{street:+5,congress:+4,press:+4,base:-3,auth:+4},
      res:`The bleeding stops at seventy-seven thousand. The Office of Personnel Management estimates the replacement cost at nine billion dollars over six years, and nobody reads the estimate.` },
    { label:`Target it. Offer it only where you want reductions.`, eff:{base:+4,street:-4,congress:-4,press:-3,auth:+8},
      res:`Precision instead of a blunderbuss. It achieves the same headcount cut exactly where you wanted it, and keeps the air traffic controllers.` },
    { label:`Offer it to yourself and see what happens.`, eff:{base:+4,press:+5,street:+4,congress:+3,auth:-3}, wild:true,
      res:`The form has no field for your position. A GS-11 in Personnel spends four days trying to process it before finally escalating to counsel.` }]},

{ id:'g-doge-cuts', title:'The Number On The Screen', who:C.broom, min:6, max:34, tags:['money','agencies'], req:r=>r.flags.broom,
  src:'claimed savings figures that did not survive external checking',
  text:`Vandermeer runs a live counter on a website claiming two hundred fourteen billion dollars saved. Lyle has checked the eleven largest line items. "Four are double-counted, three are contracts that had already expired, and one is off by a factor of a thousand."`,
  choices:[
    { label:`Keep the counter. Round it up.`, eff:{base:+7,congress:-6,press:-6,street:-5,courts:-4,auth:+7},
      res:`The number reaches three hundred billion by spring. Every journalist who checks it finds the same errors, and each correction reaches roughly a fortieth of the original audience.` },
    { label:`Publish the methodology. Let it be checked.`, eff:{congress:+7,press:+8,courts:+5,street:+5,base:-6,auth:+2},
      res:`The verified figure comes to nineteen billion dollars, a genuinely enormous sum that nobody is impressed by, because it is not two hundred fourteen billion.` },
    { label:`Take the counter down quietly.`, eff:{press:+4,congress:+3,base:-3,auth:+3},
      res:`It is archived by four separate services within the hour, the same as everything else, forever.` },
    { label:`Add a counter for money spent finding the savings.`, eff:{base:+3,congress:-4,press:-4,street:-3,auth:+3}, wild:true,
      res:`The second counter overtakes the first within eleven weeks. Vandermeer quietly removes both and posts a graph about something else entirely.` }]},

{ id:'g-final-audit', title:'The Long Count', who:C.hist, min:40, max:48, tags:['press','power'],
  src:'litigation trackers totalling hundreds of cases against an administration',
  text:`Dr. Weir has the tally: seven hundred and fifty-three separate cases filed against your administration. "For context, sir, that is more than the previous four presidencies combined. I am not editorialising. I am counting."`,
  choices:[
    { label:`Frame it. It proves how much you attempted.`, eff:{base:+8,courts:-7,press:-6,congress:-5,street:-5,auth:+8},
      res:`You put the number on a poster. It is, genuinely, evidence of ambition, and simultaneously evidence of everything the other side has been saying, and both readings cite the exact same figure.` },
    { label:`Ask which ones you lost, and why.`, eff:{courts:+8,congress:+6,press:+7,street:+5,base:-6,auth:+2},
      res:`You lost forty-one percent on the merits, overwhelmingly on procedure rather than substance. Four of your remaining policies are redrafted that same month, and all four survive.` },
    { label:`Say the number proves the courts are political.`, eff:{base:+7,courts:-10,press:-6,congress:-6,auth:+6},
      res:`Sixty-one percent of the rulings against you were written by judges your own party appointed. Dr. Weir has that number too, and offers it, and you decline to take it.` },
    { label:`Ask her to keep counting after you leave.`, eff:{press:+7,street:+6,congress:+5,courts:+5,base:-4,auth:-2}, wild:true,
      res:`She does. The final volume runs nine hundred pages, is published in 2044, and is dedicated, without any apparent irony, to you.` }]}

);
})();
