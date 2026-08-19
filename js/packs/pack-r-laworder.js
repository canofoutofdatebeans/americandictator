/* ============================================================
   PACK R, LAW AND ORDER
   Weaponising the Justice Department: an Attorney General who
   acts as personal counsel, investigations aimed at rivals,
   pardons for friends, an independent prosecutor you want gone,
   the loyalty question put to law enforcement, things you dislike
   declared illegal, federal force in a city, and the long slow
   argument over whether the President can simply be immune.

   Original satire in the house voice, INSPIRED BY THE GENRE,
   NEVER COPIED FROM ANY REAL PERSON. Fictional stand-ins only.
   These crises are built to move courts and press hard; that is
   the point of the pack.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE ATTORNEY GENERAL, PERSONALLY ══════════════ */

{ id:'r-ag-my-lawyer', title:'The Personal Retainer', who:C.ag, min:1, max:20, tags:['justice','power'],
  src:'an attorney general treated as personal counsel rather than the government\'s lawyer',
  text:'Bo drops by with a coordination memo you did not ask for: anything touching you personally now routes ' +
       'through his office first. He is the Attorney General of the United States. He would like it on record ' +
       'that he noticed the distinction, even if he is not currently in a position to insist on it.',
  choices:[
    { label:'Make it official. Justice serves the President first.', eff:{base:+8,courts:-9,congress:-5,auth:+7},
      res:'The department\'s working assumptions get a quiet edit: "the United States," in practice, now means you specifically. Career lawyers start dating their resignation letters.' },
    { label:'Thank him. Keep the wall between you and the building.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You decline the offer of a captured Justice Department. Bo looks almost disappointed, then relieved, then goes back to being a lawyer for the country instead of you.' },
    { label:'Ask him to include you in his official portrait.', eff:{base:+5,press:-4,courts:-3,auth:+2},
      res:'The Attorney General\'s official department portrait includes you in the background, gesturing approvingly at a filing cabinet. It is deeply strange and nobody will take it down.' },
    { label:'Hire Sy as well. Let them fight over the retainer.', eff:{base:+3,press:-4,courts:-3,congress:-2,auth:-1}, wild:true,
      res:'Two lawyers, one client, zero clarity about which one represents the office and which represents you. They bill separately and agree on nothing, which is somehow the most honest arrangement in the building.' }]},

{ id:'r-enemies-list', title:'The Master List', who:C.cos, min:2, max:40, tags:['justice','power'],
  src:'an informal list of critics routed toward federal scrutiny',
  text:'Deborah slides across a spreadsheet nobody asked her to build: names, a column for "investigate," a ' +
       'column for "audit," and one, unlabeled, that just says "later." She built it because you kept ' +
       'mentioning names and got tired of writing them on napkins.',
  choices:[
    { label:'Formalise it. A standing unit works the list.', eff:{base:+8,courts:-8,congress:-4,street:-3,auth:+8},
      res:'A unit is stood up with a name so bureaucratic nobody notices what it does: cross-reference public critics against every federal database with your name in the search field.' },
    { label:'Burn the spreadsheet. Prosecute on the merits or not at all.', eff:{base:-4,courts:+6,congress:+4,auth:+1},
      res:'Deborah deletes the file in front of you, which is either integrity or theatre, and you never learn which, because it works either way.' },
    { label:'Add three more names. Alphabetise it properly.', eff:{base:+6,press:-4,courts:-5,street:-2,auth:+3},
      res:'The list grows and gets tidier, which somehow makes it more frightening than the original napkins ever were.' },
    { label:'Put your own name at the top, as a joke.', eff:{base:+4,press:-4,courts:-3,auth:-1}, wild:true,
      res:'Nobody laughs. An intern opens an actual inquiry before being quietly told to close it. The joke survives exactly one afternoon.' }]},

/* ══════════════ INVESTIGATING RIVALS ══════════════ */

{ id:'r-rival-probe', title:'The Investigation Opens', who:C.ag, min:6, max:42, tags:['justice','power'],
  src:'a federal inquiry opened into a political rival on thin, technically sufficient grounds',
  text:'Governor Vasquez-Moore beat you in her state by nine points and has been insufferable about it since. ' +
       'Bo has found a procurement irregularity from four years ago, small, technical, real. "It\'s thin, sir. ' +
       'It is also legally sufficient, which in this job is the only bar that matters."',
  choices:[
    { label:'Open it. Announce it yourself, at a podium.', eff:{base:+9,courts:-8,congress:-4,street:-3,auth:+7},
      res:'A sitting governor is now "under investigation" in every headline that matters, regardless of what the investigation ever finds. The finding stops mattering around week two.' },
    { label:'Let career prosecutors decide, quietly, on the merits.', eff:{base:-3,courts:+6,congress:+4,auth:+1},
      res:'The irregularity gets the unglamorous review it would get if you had never heard her name. It goes nowhere, which is what thin things do.' },
    { label:'Open investigations into all six opposition governors at once.', eff:{base:+7,press:-4,courts:-9,congress:-6,auth:+3},
      res:'Six probes, six podiums, six near-identical procurement footnotes elevated to scandal. The pattern is so obvious that even your own lawyers ask you to stop describing it out loud.' },
    { label:'Offer her a Cabinet job instead. See if she takes it.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:-2}, wild:true,
      res:'She declines, in a statement thanking you for "the flattering attempt at containment." You spend a news cycle explaining a job offer nobody believes was sincere.' }]},

{ id:'r-charging-meeting', title:'The Charging Meeting', who:C.ag, min:8, max:40, tags:['justice','power'],
  src:'direct presidential presence at a career prosecutorial decision',
  text:'Career prosecutors meet this afternoon to decide, on the facts alone, whether to charge a talk-radio ' +
       'host who spent a month mocking you. Bo mentions, almost as an aside, that you are welcome to sit in. No ' +
       'president has ever needed to ask before, which is not quite the same as being told not to.',
  choices:[
    { label:'Sit in. Say nothing. Let your presence do the work.', eff:{base:+8,courts:-9,congress:-4,press:-4,auth:+7},
      res:'You occupy a chair while career prosecutors are supposed to decide, alone, whether the facts support a charge. Nobody asks you to leave. Everybody notices you stayed.' },
    { label:'Stay out entirely. Let them decide without you in the building.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You let the meeting happen the way charging meetings are supposed to happen: without you in the room, the building, or the decision. It is invisible, which is the point of it working.' },
    { label:'Sit in, and ask a direct question about the charges.', eff:{base:+6,press:-5,courts:-11,congress:-5,auth:+6},
      res:'You ask, out loud, whether the charges could be "stronger." Three career prosecutors write contemporaneous memos of the exchange before the meeting has even ended.' },
    { label:'Sit in, then recuse yourself loudly halfway through.', eff:{base:+4,press:-3,courts:-4,congress:-2,auth:-2}, wild:true,
      res:'You announce your own recusal mid-meeting, on the record, having already heard half the discussion. It is theatrically correct and substantively meaningless, and everyone can tell the difference.' }]},

{ id:'r-predecessor-probe', title:'The Previous Administration', who:C.ag, min:8, max:34, tags:['justice','power'],
  src:'a preliminary review opened into a predecessor\'s final months in office',
  text:'Bo has assembled a preliminary review of your predecessor\'s final months in office: nothing criminal, ' +
       'mostly ordinary end-of-term housekeeping. He can, if you\'d like, keep looking until "nothing criminal" ' +
       'becomes something else.',
  choices:[
    { label:'Keep looking. Announce a formal inquiry.', eff:{base:+8,courts:-8,congress:-5,press:-4,auth:+6},
      res:'A formal inquiry into your predecessor is announced with no predicate crime, which becomes the story, followed closely by the story about the story.' },
    { label:'Close the review. There\'s nothing there and everyone knows it.', eff:{base:-3,courts:+5,congress:+4,auth:+1},
      res:'You decline to invent a crime for a man you beat fair and square, which is either magnanimity or a lack of imagination, and either way it ends the matter.' },
    { label:'Announce the inquiry and subpoena his personal diary.', eff:{base:+6,press:-5,courts:-10,congress:-5,auth:+5},
      res:'A subpoena for a former president\'s personal diary is issued, fought, and eventually withdrawn, having achieved nothing except a very good chapter for his memoir.' },
    { label:'Invite him to lunch instead. Ask him, over dessert, if he did anything.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'He says no, over a shared dessert, in a tone that ends the conversation permanently. You believe him, which surprises exactly one person at the table: you.' }]},

/* ══════════════ PARDONS FOR FRIENDS ══════════════ */

{ id:'r-preemptive-pardon', title:'The Blanket Before Testimony', who:C.lawyer, min:14, max:44, tags:['justice','congress'],
  src:'clemency floated for conduct not yet charged, ahead of compelled testimony',
  text:'Three staffers are subpoenaed to testify next month about matters Sy calls "adjacent to matters you\'d ' +
       'rather not have adjacent." A pardon for crimes not yet charged is legally untested. He has drafted one ' +
       'anyway, in case untested becomes fashionable.',
  choices:[
    { label:'Sign all three. Anything, named or not.', eff:{base:+8,courts:-10,congress:-6,press:-4,auth:+7},
      res:'Three staffers walk into a hearing room immune to a crime nobody has proven happened yet. Two plead the Fifth anyway, out of habit, and the contradiction is the whole news cycle.' },
    { label:'No pardons. Let them testify and answer for themselves.', eff:{base:-4,courts:+6,congress:+5,press:+3,auth:+1},
      res:'Three staffers testify like citizens under subpoena, because that is what they are. It is unglamorous, and it is also, structurally, how this is supposed to work.' },
    { label:'Pardon them publicly, with a ceremony, before the hearing.', eff:{base:+7,press:-5,courts:-8,congress:-5,auth:+5},
      res:'The signing ceremony airs the morning of the hearing. The senators asking the questions now have footage of the answer being purchased in advance.' },
    { label:'Pardon only the one who annoys you least.', eff:{base:+4,press:-3,courts:-4,congress:-2,auth:-1}, wild:true,
      res:'A pardon awarded on personal chemistry rather than legal exposure. The two unpardoned staffers begin, independently, hiring lawyers who do not report to Sy.' }]},

/* ══════════════ THE INDEPENDENT PROSECUTOR ══════════════ */

{ id:'r-special-counsel', title:'The Independent Prosecutor', who:C.ag, min:10, max:40, tags:['justice','courts'],
  src:'the removal of an outside prosecutor mid-investigation',
  text:'An outside prosecutor with a decade of subpoena power and no boss but the law has been looking at your ' +
       'first term for eleven months and has, Bo reports, "found the kind of thing that finds you." Nothing in ' +
       'the statute stops you from firing her. Only what happens after does.',
  choices:[
    { label:'Fire her tonight. Cite budget concerns.', eff:{base:+7,courts:-11,congress:-8,press:-4,street:-3,auth:+9},
      res:'A prosecutor investigating you is removed by you, for reasons that satisfy nobody who reads past the first sentence. Two deputies resign in a single afternoon, in writing, with reasons attached.' },
    { label:'Let it run. Cooperate, produce documents, say nothing.', eff:{base:-4,courts:+7,congress:+5,press:+4,auth:+1},
      res:'The investigation concludes on its own schedule and mostly clears you of the worst of it. Nobody remembers this, because nothing happened, which was the entire point of letting it finish.' },
    { label:'Fire her and replace her with someone who reports to Bo.', eff:{base:+5,courts:-13,congress:-9,press:-5,auth:+8},
      res:'The replacement is independent in name only, a phrase that has never once survived contact with a subpoena. The old office\'s unfinished files go missing in the move.' },
    { label:'Invite her to the Residence for a "constructive" dinner.', eff:{base:+3,press:-4,courts:-5,congress:-2,auth:-2}, wild:true,
      res:'She attends, eats the fish, and subpoenas the caterer\'s guest list by Friday. The dinner is later cited, verbatim, in a footnote.' }]},

/* ══════════════ THE LOYALTY QUESTION ══════════════ */

{ id:'r-fbi-loyalty-dinner', title:'The Dinner Invitation', who:C.cos, min:2, max:20, tags:['justice','power'],
  src:'a private dinner in which loyalty was asked of the Bureau director',
  text:'Deborah relays it flatly: you had dinner alone with the Bureau director and asked him, more than once, ' +
       'whether you could count on his loyalty. He gave an answer about honesty instead. You have been ' +
       'describing the exchange to people as a promise ever since.',
  choices:[
    { label:'Repeat the "loyalty" framing publicly. Force him to deny it.', eff:{base:+7,courts:-7,congress:-4,press:-3,auth:+6},
      res:'He corrects the record in front of cameras, which reads, to the people who matter to you, as insubordination with extra steps.' },
    { label:'Never mention the dinner again.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You let an awkward dinner stay an awkward dinner. The Bureau keeps doing its job without a loyalty test attached to it, which is the entire design.' },
    { label:'Ask for the pledge again, in writing this time.', eff:{base:+6,press:-4,courts:-8,congress:-5,auth:+4},
      res:'A written request for personal loyalty from the director of the nation\'s law enforcement agency lands on his desk. He does not sign it. He does, however, keep it.' },
    { label:'Send him a fruit basket instead. No note.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:-1}, wild:true,
      res:'An unmarked, unexplained fruit basket arrives at Bureau headquarters. It is logged as evidence in nothing, discussed in every hallway, and eaten by Wednesday.' }]},

/* ══════════════ DECLARING THINGS ILLEGAL ══════════════ */

{ id:'r-effigy-charge', title:'The Insult Statute', who:C.ag, min:10, max:44, tags:['justice','street'],
  src:'a dormant statute revived to criminalise symbolic protest',
  text:'Bo has found an actual statute, dust thick on it, criminalising "insult or abuse" of federal officials ' +
       'performing their duties. It has not been charged in ninety years and was written for a different ' +
       'century. Six protesters burned an effigy of you outside a rally. The statute, unlike the century, is ' +
       'technically still in force.',
  choices:[
    { label:'Charge them. Revive the statute publicly.', eff:{base:+8,courts:-9,congress:-4,street:-6,press:-4,auth:+7},
      res:'Six people are charged under a law last used against a man who threw a tomato at a governor in the 1930s. Their lawyer requests, and receives, a jury of people who have also burned something in effigy.' },
    { label:'Let it go. Effigies are protected speech, however tasteless.', eff:{base:-3,courts:+5,street:+4,congress:+3,auth:+1},
      res:'You leave a dusty statute exactly where it was found: unused. Free speech survives contact with your own feelings, again.' },
    { label:'Charge them, and add a second incident from last year.', eff:{base:+6,press:-5,courts:-11,congress:-5,street:-7,auth:+6},
      res:'A second case is added, for conduct from before anyone thought to charge it, on a legal theory that makes even Bo wince while filing it.' },
    { label:'Ask for a nicer effigy next time. Notes on the craftsmanship.', eff:{base:+4,press:-3,street:-3,auth:-2}, wild:true,
      res:'A presidential statement critiques the structural integrity of an effigy burned in protest of him. The effigy-makers\' guild, unaware it existed until this moment, takes the note seriously.' }]},

{ id:'r-disbar-opposing-counsel', title:'The Bar Complaint', who:C.lawyer, min:10, max:44, tags:['justice','courts'],
  src:'professional-conduct complaints filed against attorneys who litigate against the administration',
  text:'A law firm has won three injunctions against you. Sy has an angle: a state bar complaint alleging the ' +
       'firm\'s public statements about the case violated attorney conduct rules, filed by "a concerned ' +
       'citizen" who happens to work two doors down from his own office.',
  choices:[
    { label:'File the complaint. Draw out their calendar for a year.', eff:{base:+7,courts:-9,congress:-3,press:-4,auth:+6},
      res:'The firm spends the year defending its own licence instead of your next case, which was, transparently, the entire strategy. The complaint is dismissed in month eleven.' },
    { label:'Don\'t file. Beat them on the law instead.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You let the lawyers be lawyers and try to win the actual case instead. It is a harder path and a much cleaner one to defend later.' },
    { label:'File complaints against every attorney who signed the brief.', eff:{base:+6,press:-5,courts:-10,congress:-4,auth:+6},
      res:'Nine names on a brief become nine separate bar complaints, filed the same afternoon, by the same "concerned citizen," who is starting to attract more attention than the case.' },
    { label:'Send the firm a fruit basket and drop the idea.', eff:{base:+3,press:-3,courts:-2,auth:-2}, wild:true,
      res:'A conciliatory fruit basket arrives at the law firm that has beaten you three times running. They eat it, cautiously, and win a fourth injunction the following week regardless.' }]},

/* ══════════════ IMMUNITY AND SELF-PARDONS ══════════════ */

{ id:'r-self-pardon', title:'The Question Nobody Answers', who:C.lawyer, min:20, max:48, tags:['justice','power'],
  src:'the unresolved question of whether a sitting president can pardon himself',
  text:'Sy has produced a memo, twenty-two pages, on whether a president can pardon himself. His conclusion, ' +
       'after twenty-two pages, is that nobody actually knows, because no one has ever been foolish enough to ' +
       'force the Supreme Court to decide.',
  choices:[
    { label:'Sign it. Be the test case.', eff:{base:+9,courts:-13,congress:-7,press:-5,auth:+10},
      res:'You pardon yourself, for a crime the paperwork declines to specify, and hand the Supreme Court a question it spent two centuries avoiding. It does not thank you for the honour.' },
    { label:'Don\'t sign it. Some questions are better left unanswered.', eff:{base:-4,courts:+6,congress:+4,auth:+1},
      res:'You leave the constitutional grey area grey, on principle, which is a stranger thing to be proud of than it sounds, and you are, quietly, proud of it.' },
    { label:'Have the Vice President pardon you, then resign him back in.', eff:{base:+6,press:-5,courts:-11,congress:-6,auth:+7},
      res:'A twenty-minute swap of offices produces a pardon that is legally cleaner and morally identical. Chet does it smiling, which somehow makes it worse.' },
    { label:'Ask Bo to pardon you. Let him take the blame.', eff:{base:+4,press:-4,courts:-6,congress:-3,auth:-1}, wild:true,
      res:'The Attorney General does not have that power and both of you know it. He declines, politely, in a memo that will be read aloud at his next confirmation hearing.' }]},

{ id:'r-witness-immunity', title:'The Immunity Deal', who:C.ag, min:14, max:44, tags:['justice','courts'],
  src:'immunity granted to a cooperating witness in exchange for testimony against a rival',
  text:'Bo has a cooperating witness willing to testify against a rival senator; the asking price is full ' +
       'immunity for the witness\'s own, considerably worse, conduct. It is a standard tool, used constantly, ' +
       'and it has never once felt this transactional before.',
  choices:[
    { label:'Grant full immunity. Get the testimony on record.', eff:{base:+7,courts:-8,congress:-4,press:-4,auth:+6},
      res:'A man who did worse things than the senator he\'s testifying against walks away clean, in exchange for words that may or may not hold up under cross-examination. The department calls it a trade. It is a trade.' },
    { label:'Decline the deal. Build the case on its own evidence.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'The case proceeds slower, on paper and forensics instead of testimony bought with a clean slate. It is a harder case to win and an easier one to defend on appeal, forever.' },
    { label:'Grant immunity, and let the witness pick the interview format.', eff:{base:+5,press:-5,courts:-9,congress:-4,auth:+5},
      res:'The star witness negotiates a sit-down interview, lighting included, before he\'s finished testifying. The senator\'s lawyers use it, word for word, in cross-examination.' },
    { label:'Offer the rival senator the same deal, preemptively, out of spite.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'A senator under investigation receives an unsolicited immunity offer for a crime he has not been charged with and, as far as anyone can tell, did not commit. He frames the letter.' }]},

/* ══════════════ THE PRESS AND THE PAPER TRAIL ══════════════ */

{ id:'r-irs-audit-critic', title:'The Audit Flag', who:C.treas, min:6, max:42, tags:['justice','press'],
  src:'tax audits clustering suspiciously around administration critics',
  text:'Lyle notices the pattern before anyone else does: every commentator who criticised you on air last ' +
       'quarter has, coincidentally, been flagged for a "routine" audit. He is fairly sure it is not a ' +
       'coincidence, because he is the one who can see the flags.',
  choices:[
    { label:'Keep the list going. Add this week\'s names.', eff:{base:+7,press:-5,courts:-8,congress:-4,auth:+6},
      res:'The audits proceed on schedule, which is to say, on your schedule, and the pattern becomes public the way patterns like this always do: an intern posts it.' },
    { label:'Order the flags reviewed by an independent unit.', eff:{base:-3,courts:+5,press:+4,congress:+3,auth:0},
      res:'A quiet internal review removes the flags with no underlying basis. It happens with no press conference, because a press conference would require explaining why they existed.' },
    { label:'Deny the pattern exists. Then add two more names.', eff:{base:+5,press:-5,courts:-6,congress:-3,auth:+3},
      res:'You deny a pattern while extending it, on the record, in the same news cycle. A junior reporter builds a spreadsheet that will outlive your term.' },
    { label:'Order an audit of yourself, for balance. Release it.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'Your own return goes under the same "routine" review. It takes four years, finds nothing conclusive, and becomes the most boring sentence in the whole investigation.' }]},

{ id:'r-subpoena-reporter', title:'The Reporter\'s Records', who:C.press, min:8, max:44, tags:['justice','press'],
  src:'a subpoena for a journalist\'s phone records issued to identify a source',
  text:'Kaylee corners you before the podium. A story ran with a source inside the department, and Bo wants a ' +
       'subpoena for the reporter\'s phone records, issued quietly, before the outlet is told it\'s happening. ' +
       'She is the one who will have to answer for it tomorrow, not you.',
  choices:[
    { label:'Approve it. Quietly. No notice to the outlet.', eff:{base:+7,press:-5,courts:-9,congress:-3,auth:+6},
      res:'The records are pulled without warning, and when it surfaces, as these things do, it surfaces as the story, permanently attached to the one it was meant to bury.' },
    { label:'Require advance notice and a judge\'s sign-off, as policy demands.', eff:{base:-3,press:+5,courts:+5,congress:+3,auth:0},
      res:'You follow the process built specifically to prevent exactly this kind of subpoena. It is slower and correct, and the leak is never found, which is a cost you accept.' },
    { label:'Subpoena the whole newsroom\'s logs, to be thorough.', eff:{base:+6,press:-5,courts:-11,congress:-5,auth:+5},
      res:'An entire newsroom\'s communications get pulled in one motion. Six unrelated stories, none about you, are compromised as collateral, and the newsroom prints all six anyway.' },
    { label:'Leak your own version of the story first.', eff:{base:+4,press:-4,courts:-3,auth:-1}, wild:true,
      res:'You beat the story to print by leaking a friendlier cut of the same facts. It works for exactly one news cycle and confirms, to the original source, that leaking to you works too.' }]},

{ id:'r-grand-jury-leak', title:'The Sealed Matter', who:C.spy, min:10, max:44, tags:['justice','courts'],
  src:'sealed proceedings surfacing at a politically convenient moment',
  text:'Errol Hance doesn\'t run leak investigations, not officially. But when details from a sealed grand ' +
       'jury proceeding concerning a rival senator reach a friendly outlet two days before his confirmation ' +
       'vote, he is the one with the resources to find out who did it, and the restraint not to ask too many ' +
       'questions about why you want to know before he does.',
  choices:[
    { label:'Let the story run. Don\'t investigate too hard.', eff:{base:+8,courts:-9,congress:-5,press:-4,auth:+6},
      res:'A sealed proceeding becomes public exactly when it is most damaging and least accountable. The senator loses the vote. The leak investigation finds, remarkably, nothing.' },
    { label:'Order a real leak investigation. Publish who did it.', eff:{base:-3,courts:+6,congress:+4,press:+3,auth:0},
      res:'The leak traces to a junior aide who is fired and, unusually, actually was the leaker. A small, correct outcome in a system built to produce them rarely.' },
    { label:'Confirm the leaked details personally, for "context."', eff:{base:+6,press:-5,courts:-10,congress:-5,auth:+5},
      res:'You add on-record confirmation to an off-record leak, closing the one gap that might have let you deny involvement. Sy asks, not for the first time, why you keep doing that.' },
    { label:'Seal the leak investigation too. See how it feels.', eff:{base:+3,press:-3,courts:-4,congress:-2,auth:-2}, wild:true,
      res:'An investigation into a leak about a sealed matter is itself sealed, which is either poetic or a paperwork error. Nobody in the building can say which with confidence.' }]},

/* ══════════════ THE PROSECUTORS WHO SAY NO ══════════════ */

{ id:'r-us-attorney-fired', title:'The Attorney Who Said No', who:C.ag, min:6, max:40, tags:['justice','congress'],
  src:'a career prosecutor removed after declining to bring a politically requested case',
  text:'A career US Attorney has declined, in writing, to bring a case against a mayor you dislike, citing "an ' +
       'absence of evidence" in a memo that is, Bo admits, not wrong. She has held the post through two ' +
       'administrations. You are the first person to ask her to do this.',
  choices:[
    { label:'Fire her today. Announce a replacement by dinner.', eff:{base:+8,courts:-8,congress:-6,press:-3,auth:+7},
      res:'A twenty-two-year prosecutor is removed for declining to manufacture a case, and her replacement is sworn in before the story finishes trending. He brings the case within a month.' },
    { label:'Accept her judgment. There is, in fact, no case.', eff:{base:-4,courts:+6,congress:+4,auth:+1},
      res:'You let a prosecutor be a prosecutor, which means letting the absence of evidence be the end of the conversation. It is the whole job, working correctly, and nobody notices.' },
    { label:'Fire her and open an ethics inquiry into her, too.', eff:{base:+6,press:-4,courts:-10,congress:-6,auth:+6},
      res:'The ethics inquiry into the prosecutor who declined to bring a baseless case is, itself, baseless, a fact three separate reviewers note in writing before it is quietly dropped.' },
    { label:'Send her an unrelated case file as an apology.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'A conciliatory case file, unrelated and unsolicited, arrives at her office the day after she\'s fired. She forwards it to the inspector general with a two-word note: "for review."' }]},

{ id:'r-election-worker-target', title:'The One Who Testified', who:C.ag, min:20, max:48, tags:['justice','elections'],
  src:'a perjury referral pursued against an election official whose sworn testimony contradicted a fraud claim',
  text:'One election supervisor testified, under oath, that she personally recounted the ballots you claimed ' +
       'were fraudulent and found nothing. Bo has an angle: a perjury referral, built on a technicality in her ' +
       'testimony\'s phrasing, that would take her a year and her own savings to beat in court, win or lose.',
  choices:[
    { label:'Refer her for perjury. Let the technicality do the work.', eff:{base:+8,courts:-9,congress:-4,street:-5,press:-4,auth:+7},
      res:'A woman who testified accurately under oath spends a year and forty thousand dollars proving it. She wins. The win costs her the job anyway, since nobody wants to hire the centre of a federal case.' },
    { label:'Drop it. Her testimony matched the recount.', eff:{base:-4,courts:+6,congress:+4,street:+4,auth:+1},
      res:'You let an accurate witness be an accurate witness. It is the entire function of an oath, working as designed, and it costs you nothing but the satisfaction of punishing her for being right.' },
    { label:'Refer her, and three other officials who agreed with her.', eff:{base:+6,press:-5,courts:-11,congress:-5,street:-6,auth:+6},
      res:'Four election officials in four different counties get referrals within a week, their only shared trait being that the recount, in every case, matched their math instead of yours.' },
    { label:'Send her a formal letter of thanks instead.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:-2}, wild:true,
      res:'A letter thanking an election worker for her accuracy, signed by you, confuses her enough that she calls a reporter just to read it aloud, unsure if it is real.' }]},

/* ══════════════ THE CITY AND THE FEDERAL HAND ══════════════ */

{ id:'r-sanctuary-funding', title:'The Funding Letter', who:C.home, min:8, max:38, tags:['justice','congress'],
  src:'federal law-enforcement grants withheld from noncompliant cities',
  text:'Duane has the list of cities that decline to hold people for federal pickup past their release date, ' +
       'and a draft letter cutting their federal law enforcement grants to zero, effective this fiscal quarter.',
  choices:[
    { label:'Send the letter. Zero funding, no phase-in.', eff:{base:+8,courts:-7,congress:-5,street:-4,auth:+6},
      res:'Police departments in nine cities lose the grants that pay for the vests and radios that have nothing to do with any of this. The mayors hold a joint press conference within the week.' },
    { label:'Tie funding to a narrower, defensible cooperation standard.', eff:{base:-3,courts:+5,congress:+4,auth:+1},
      res:'A standard written to survive a court, not a rally, which means it is dull, legal, and mostly ignored by everyone who isn\'t a lawyer, which was the intent.' },
    { label:'Cut funding and rank the cities by "defiance," publicly.', eff:{base:+6,press:-5,courts:-8,congress:-9,street:-5,auth:+5},
      res:'A leaderboard of American cities ranked by their willingness to cooperate with you personally. Four mayors put their ranking on a coffee mug and sell out in a day.' },
    { label:'Offer the money back if a city names a park after you.', eff:{base:+4,press:-3,congress:-2,auth:-1}, wild:true,
      res:'One city takes the deal. The park is a median strip with two benches and a fire hydrant. You attend the ribbon-cutting personally and call it "historic."' }]},

{ id:'r-material-witness', title:'The Material Witness', who:C.home, min:10, max:42, tags:['justice','street'],
  src:'a detention statute meant to secure testimony used instead to hold a critic',
  text:'The statute exists to hold someone briefly if their testimony might vanish with them. Duane has found ' +
       'a use for it that has nothing to do with testimony: detain a persistent critic as a "material witness" ' +
       'to a case that, conveniently, never quite reaches the point of charging her with anything.',
  choices:[
    { label:'Use it. Detain her as a witness. No charges needed.', eff:{base:+8,courts:-10,congress:-4,street:-5,press:-4,auth:+7},
      res:'A woman spends eleven days in federal custody as a "material witness" to a case that is never filed. The statute technically permits it. Nobody involved seems proud of that fact.' },
    { label:'Subpoena her testimony normally. No detention.', eff:{base:-3,courts:+5,congress:+3,street:+3,auth:+1},
      res:'She receives an ordinary subpoena, answers it, and goes home the same day. It is the boring version of the tool working exactly as designed.' },
    { label:'Detain her, and three associates, "for consistency."', eff:{base:+6,press:-5,courts:-11,congress:-5,street:-6,auth:+6},
      res:'Four people are held as witnesses to a case that names none of them, for testimony none of them is ever actually asked to give.' },
    { label:'Release her with a personal note of apology, unsigned.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'An anonymous apology note arrives with her personal effects at release. She has it authenticated by a handwriting expert within the week, out of pure spite, and wins.' }]},

{ id:'r-mayor-warrant', title:'The Warrant For The Mayor', who:C.gen, min:18, max:46, tags:['justice','street'],
  src:'federal marshals, backed by military support, serving a contempt warrant on an elected official',
  text:'Bo has a federal contempt warrant for a sitting mayor who told his police not to cooperate with a ' +
       'federal operation. Serving it needs marshals. Mick Tarrant has offered Guard support "for safety," ' +
       'which nobody asked for and which changes the photograph considerably.',
  choices:[
    { label:'Serve it publicly. Guard support included.', eff:{base:+9,courts:-9,congress:-5,street:-8,press:-4,auth:+8},
      res:'A sitting mayor is walked out of his own city hall on camera, national guardsmen visible in the frame behind federal marshals. It is the most-watched five minutes of local news in the network\'s history.' },
    { label:'Serve it quietly, marshals only, no cameras, no Guard.', eff:{base:-3,courts:+5,congress:+3,street:+3,auth:+1},
      res:'The warrant is served the way warrants are supposed to be served: without spectacle. He is booked, released on his own recognisance an hour later, and the case proceeds like any other.' },
    { label:'Serve it during his re-election kickoff event.', eff:{base:+6,press:-5,courts:-8,congress:-4,street:-7,auth:+6},
      res:'Marshals arrive as he is mid-sentence at his own campaign launch. The video, from six angles, becomes the actual launch of his campaign, several points ahead in the polls by dinner.' },
    { label:'Let him turn himself in on his own schedule.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:-2}, wild:true,
      res:'He walks in on his own terms, on a Tuesday, wearing a suit instead of handcuffs. It denies everyone the photo they wanted, including, you realise a beat too late, you.' }]},

{ id:'r-bail-crackdown', title:'The Bail Order', who:C.ag, min:8, max:40, tags:['justice','congress'],
  src:'maximum pretrial detention sought reflexively in cases touching protest',
  text:'Bo has a directive ready instructing federal prosecutors to seek maximum pretrial detention in every ' +
       'case that touches a protest, regardless of the underlying charge, framed publicly as law and order and ' +
       'privately as a way to keep people off the street until the news cycle passes.',
  choices:[
    { label:'Issue the directive. Maximum detention, no exceptions.', eff:{base:+8,courts:-8,congress:-3,street:-7,press:-4,auth:+7},
      res:'People charged with jaywalking near a protest sit in federal detention for weeks awaiting hearings, which is, functionally if not legally, the sentence.' },
    { label:'Direct prosecutors to seek detention only where facts support it.', eff:{base:-3,courts:+5,street:+4,congress:+3,auth:0},
      res:'You ask for the ordinary standard to be applied ordinarily. Detention requests drop to roughly where they were before anyone thought to weaponise them, which is the point of a standard.' },
    { label:'Issue it, and add a bonus for prosecutors who hit a quota.', eff:{base:+6,press:-5,courts:-11,street:-8,congress:-4,auth:+6},
      res:'A quota for pretrial detentions, tied to a bonus, turns due process into a piece rate. Two prosecutors quit rather than bill their consciences that way.' },
    { label:'Post bail yourself for the first ten people arrested.', eff:{base:+4,press:-3,street:-4,cash:-0.1,auth:-2}, wild:true,
      res:'You pay bail, out of pocket, for ten strangers arrested near a protest against you. It is inexplicable, widely mocked, and the single kindest thing you do all term.' }]},

{ id:'r-martial-law-lite', title:'The Curfew City', who:C.home, min:16, max:46, tags:['justice','street'],
  src:'a citywide curfew and checkpoint regime imposed after several nights of unrest',
  text:'After three nights of unrest downtown, Duane has a draft order imposing a citywide curfew, checkpoints ' +
       'on major roads, and federal officers empowered to detain curfew violators without the usual paperwork. ' +
       'He calls it "temporary." He does not say for how long.',
  choices:[
    { label:'Sign it. Full curfew, checkpoints, expedited detention.', eff:{base:+9,courts:-9,congress:-5,street:-9,press:-4,auth:+8},
      res:'A city operates under federal checkpoint for eleven days. It works, in the narrow sense that the unrest stops, and it costs, in every wider sense, the feeling that this is still the same country it was two weeks ago.' },
    { label:'Support local police with resources. No curfew, no checkpoints.', eff:{base:-3,congress:+4,street:+4,press:+3,auth:0},
      res:'You let the city\'s own government handle its own unrest, with federal support rather than federal command. It resolves slower, and it resolves as a city\'s problem, not a constitutional one.' },
    { label:'Sign it and extend it to the suburbs "for consistency."', eff:{base:+6,press:-5,courts:-11,congress:-6,street:-9,auth:+7},
      res:'The curfew spreads to three suburbs that had no unrest at all, for the sake of a tidy map. Half a million people who did nothing find out, by text alert, that they now have a bedtime.' },
    { label:'Lift the curfew at exactly midnight, "as a gesture."', eff:{base:+3,press:-3,street:-4,auth:-2}, wild:true,
      res:'A curfew that ends at the exact hour curfews traditionally begin is greeted with the confusion it deserves. Nobody can tell if it was a mistake or a message, including, privately, Duane.' }]},

{ id:'r-unmarked-agents', title:'The Unmarked Vans', who:C.home, min:14, max:46, tags:['justice','street'],
  src:'federal officers operating without visible identification during a street operation',
  text:'Duane has federal officers in unmarked vehicles and generic tactical gear moving people off a city ' +
       'street into unmarked vans, no local coordination, no visible badge numbers. All of it is technically ' +
       'within his authority. None of it is required.',
  choices:[
    { label:'Keep them there. Expand it to two more blocks.', eff:{base:+9,courts:-8,congress:-5,street:-9,press:-4,auth:+8},
      res:'The footage of unmarked agents pulling people off a public sidewalk runs everywhere by dinner. It reads, to roughly half the country, as exactly the point.' },
    { label:'Pull them back. Coordinate with local police, badges visible.', eff:{base:-4,congress:+4,street:+5,press:+3,auth:0},
      res:'Federal officers work in the open, with badges and local coordination, which is slower, accountable, and almost entirely uneventful, which is the correct outcome for a policing operation.' },
    { label:'Keep them and deny they\'re federal agents at all.', eff:{base:+6,press:-5,courts:-9,street:-9,congress:-4,auth:+6},
      res:'You deny federal involvement in an operation with federal vehicle registrations plainly visible on the video. The denial becomes a second, separate scandal within the hour.' },
    { label:'Switch them to bright yellow vests, still unmarked otherwise.', eff:{base:+3,press:-3,street:-4,auth:-2}, wild:true,
      res:'The agents remain anonymous but now startlingly visible, a compromise that satisfies nobody and photographs, against all odds, even worse than before.' }]},

/* ══════════════ MONEY, MERGERS, AND NONPROFITS ══════════════ */

{ id:'r-antitrust-weapon', title:'The Merger Review', who:C.ag, min:14, max:46, tags:['justice','money'],
  src:'antitrust review timelines used punitively against an unfriendly company',
  text:'A media conglomerate that owns an outlet you dislike has a routine merger pending review. Bo notes ' +
       'that "routine" and "review" are, technically, two separate words, and the second one can take as long ' +
       'as the department wants it to.',
  choices:[
    { label:'Slow-walk it indefinitely. Cite "ongoing concerns."', eff:{base:+7,courts:-8,congress:-3,press:-4,cash:-0.1,auth:+6},
      res:'The merger sits in review for eleven months past any comparable deal, bleeding the company\'s stock and its patience, for concerns the filing never quite specifies.' },
    { label:'Review it on the actual antitrust merits, timeline included.', eff:{base:-3,courts:+5,congress:+3,cash:+0.1,auth:0},
      res:'The deal gets the analysis every deal is supposed to get, on the clock every deal is supposed to get. It is approved, because on the merits, it should be.' },
    { label:'Approve a rival\'s bigger merger the same week, unreviewed.', eff:{base:+6,press:-4,courts:-9,congress:-4,cash:-0.2,auth:+5},
      res:'One outlet\'s deal stalls for months while a friendlier one\'s sails through in nine days. The trade press runs the two timelines side by side, which is all the story needs.' },
    { label:'Personally call the CEO to "check in" on the review.', eff:{base:+4,press:-4,courts:-5,auth:-2}, wild:true,
      res:'A call meant to sound reassuring is instead recorded, transcribed, and read into a subsequent filing as Exhibit C. You are informed of this by Sy, who did not enjoy the phone call either.' }]},

{ id:'r-fara-critic', title:'The Foreign Agent', who:C.ag, min:10, max:44, tags:['justice','press'],
  src:'selective enforcement of a rarely used foreign-agent registration statute',
  text:'A think tank that publishes unflattering research about you receives some funding from foreign ' +
       'partner institutes, same as roughly half of the city\'s think tanks. Bo notes the foreign-agent ' +
       'registration statute is rarely enforced and, technically, violated by nearly everyone. "Nearly ' +
       'everyone" is not a defence. It is, however, usually an excuse.',
  choices:[
    { label:'Charge them. Make an example.', eff:{base:+8,courts:-8,congress:-3,press:-4,street:-2,auth:+7},
      res:'A think tank with a modest foreign grant and an unflattering annual report becomes the first prosecution of this kind in a decade, under a statute violated, technically, by half this city.' },
    { label:'Refer it to the standard registration review process.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'The think tank gets the same paperwork notice every other unregistered foreign-funded group gets: a deadline, a form, and no headline.' },
    { label:'Charge them, and audit every think tank that published against you.', eff:{base:+6,press:-5,courts:-10,congress:-4,auth:+6},
      res:'Eleven think tanks, chosen entirely by their conclusions rather than their funding, get simultaneous compliance reviews. Three that agree with you, funded identically, are not on the list.' },
    { label:'Register your own campaign as a foreign agent, ironically.', eff:{base:+3,press:-3,courts:-3,auth:-2}, wild:true,
      res:'A satirical self-registration filing is submitted, accepted, and processed with total bureaucratic sincerity by a clerk who does not find it as funny as you do.' }]},

{ id:'r-nonprofit-probe', title:'The Foundation Audit', who:C.treas, min:10, max:42, tags:['justice','money'],
  src:'a tax-exempt status review opened against a nonprofit with no underlying violation',
  text:'Lyle has crunched the numbers on a nonprofit that funds opposition-adjacent get-out-the-vote efforts: ' +
       'eleven straight years of clean filings. He can still open a tax-exempt status review, on the theory ' +
       'that a review, unlike a violation, doesn\'t require one to actually exist first.',
  choices:[
    { label:'Open the review. Freeze their status pending outcome.', eff:{base:+8,courts:-8,congress:-4,press:-4,auth:+7},
      res:'The foundation loses its tax-exempt status, and therefore most of its donors, months before any finding, which is itself the only finding that mattered.' },
    { label:'No review without an actual filing irregularity.', eff:{base:-3,courts:+5,congress:+3,auth:+1},
      res:'You decline to invent a violation for an organisation whose paperwork happens to be clean. It is the correct standard, applied consistently, which is rarer than it should be.' },
    { label:'Open reviews of every nonprofit that donated to the opposition.', eff:{base:+7,press:-5,courts:-11,congress:-5,auth:+6},
      res:'Dozens of unrelated nonprofits, connected by nothing but a shared politics, get simultaneous compliance reviews. The tax court\'s docket triples and a clerk starts a betting pool on how many survive.' },
    { label:'Donate to the foundation yourself, anonymously, then leak it.', eff:{base:+4,press:-4,courts:-2,cash:-0.1,auth:-2}, wild:true,
      res:'An anonymous donation from a numbered account gets traced back to you within a week, because nothing stays anonymous in this town. Nobody, including the foundation, quite knows what to make of it.' }]},

{ id:'r-favorable-settlement', title:'The Quiet Settlement', who:C.ag, min:10, max:42, tags:['justice','money'],
  src:'a fraud case against an ally resolved for a token fine and buried in the filing calendar',
  text:'A company owned by a longtime ally faces a federal fraud case with strong evidence behind it. Bo has a ' +
       'settlement on the table: a fine small enough to be a rounding error against their revenue, no ' +
       'admission of wrongdoing, filed on a Friday when nobody\'s reading filings.',
  choices:[
    { label:'Approve the settlement. Friday filing, as suggested.', eff:{base:+6,courts:-8,congress:-3,press:-3,cash:+0.2,auth:+6},
      res:'A fraud case that career prosecutors rated strong resolves for less than the company spends on its holiday party. The filing runs exactly as timed, and exactly as noticed by exactly one reporter, eventually.' },
    { label:'Let the case proceed on the evidence, settlement or trial.', eff:{base:-3,courts:+6,congress:+3,cash:+0.1,auth:0},
      res:'The case moves forward on its facts, ally or not. It settles for a real number, months later, for reasons that have nothing to do with a phone call from you.' },
    { label:'Approve it and have Bo call it "a win for taxpayers."', eff:{base:+5,press:-5,courts:-9,congress:-4,cash:+0.2,auth:+5},
      res:'A settlement worth a rounding error is announced, with a straight face, as a taxpayer victory. A financial reporter runs the actual numbers next to the quote, which is the whole rebuttal required.' },
    { label:'Reject it. Demand a harsher deal, publicly, to prove a point.', eff:{base:+4,press:-3,courts:-4,cash:-0.1,auth:-2}, wild:true,
      res:'You override your own Attorney General to demand a tougher deal against an ally, purely to look tough about it. The ally is furious, the case drags on, and you have, technically, proven the point.' }]},

/* ══════════════ THE COURTS THEMSELVES ══════════════ */

{ id:'r-judge-shopping', title:'The Friendly Division', who:C.lawyer, min:10, max:44, tags:['justice','courts'],
  src:'single-judge divisions used to guarantee a favourable venue for sensitive filings',
  text:'Sy has found a single-judge division, population eight thousand, where any case filed lands ' +
       'automatically in front of one specific judge who has never once ruled against you. He recommends ' +
       'filing everything sensitive there from now on, and is faintly embarrassed to be recommending it.',
  choices:[
    { label:'File everything there, going forward.', eff:{base:+7,courts:-10,congress:-4,press:-4,auth:+7},
      res:'A single judge in a small division becomes, functionally, a second Supreme Court for anything you care about. Law professors start teaching the phenomenon by name, and not kindly.' },
    { label:'File where the facts and venue rules actually point.', eff:{base:-3,courts:+6,congress:+3,auth:+1},
      res:'You let venue be decided by venue rules instead of win probability. It is the single most boring choice available and it keeps the judiciary\'s credibility exactly where it needs to be.' },
    { label:'File there and publicise the judge\'s win rate for you.', eff:{base:+6,press:-5,courts:-12,congress:-4,auth:+6},
      res:'A press release cites the judge\'s ruling record like a sports statistic. The judge, who did not ask for this, issues a rare public statement expressing distaste for his own fan club.' },
    { label:'File there, then lose the case on purpose, for optics.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'You instruct your own lawyers to lose a winnable case in a friendly courtroom to look impartial. They comply, badly, and the loss is so unconvincing it becomes its own story.' }]},

{ id:'r-court-stripping', title:'The Review-Proof Order', who:C.cj, min:20, max:48, tags:['justice','courts'],
  src:'an executive order attempting to declare itself immune from judicial review',
  text:'A draft executive order includes a clause declaring the action "not subject to judicial review." ' +
       'Winifred, reached off the record, says the clause has no legal force whatsoever and will be the first ' +
       'sentence struck from any resulting opinion. She adds that this has never once stopped anyone from trying.',
  choices:[
    { label:'Include the clause. Let the courts strike it if they dare.', eff:{base:+8,courts:-12,congress:-5,press:-4,auth:+8},
      res:'The clause is struck in six days by a judge who spends four of the opinion\'s eleven pages on separation of powers, in a tone usually reserved for children who know better.' },
    { label:'Drop the clause. Draft the order to survive review honestly.', eff:{base:-4,courts:+6,congress:+4,auth:+1},
      res:'You write an order built to survive scrutiny rather than to dare it, which takes longer and works better, in that order.' },
    { label:'Include the clause in every order for the rest of the year.', eff:{base:+6,press:-5,courts:-13,congress:-6,auth:+7},
      res:'The clause becomes boilerplate, struck on sight by clerks who now keep a template response on file. It has stopped even mildly surprising anyone in a robe.' },
    { label:'Ask the courts, in the order itself, to please not review it.', eff:{base:+4,press:-4,courts:-5,auth:-2}, wild:true,
      res:'An executive order includes a sentence asking the judiciary, as a courtesy, to decline jurisdiction. It is quoted in three separate opinions, each time immediately before the words "is denied."' }]},

{ id:'r-grand-jury-testify', title:'The Subpoena For You', who:C.lawyer, min:20, max:46, tags:['justice','courts'],
  src:'a grand jury subpoena issued to a sitting president personally',
  text:'A grand jury has subpoenaed you directly, not your lawyers, not your aides, you, to testify about ' +
       'events Sy would very much like left undiscussed. He has three strategies, ranked by how much they ' +
       'will cost you later.',
  choices:[
    { label:'Fight it in court for a year. Delay is a strategy.', eff:{base:+6,courts:-9,congress:-4,press:-4,auth:+6},
      res:'A year of motions, appeals, and procedural stalling keeps you off a witness stand and on every front page anyway, for the fighting rather than the testifying.' },
    { label:'Testify. Answer the questions asked, nothing extra.', eff:{base:-4,courts:+6,congress:+4,press:+3,auth:+1},
      res:'You sit for four hours, answer what\'s asked, volunteer nothing, and leave. It is the most legally sound afternoon of your term and the least quotable.' },
    { label:'Testify, then hold a press conference to "correct the record."', eff:{base:+5,press:-5,courts:-8,congress:-3,auth:+4},
      res:'You contradict your own sworn testimony within ninety minutes of giving it, on camera, for an audience that includes the grand jury\'s own staff.' },
    { label:'Offer to testify in writing, in verse, as a formal objection.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'A sworn statement submitted in rhyming couplets is accepted, filed, and read into the record with a straight face by a court reporter who has clearly seen worse.' }]},

{ id:'r-ag-wont-defend', title:'The Law Nobody Defends', who:C.ag, min:14, max:44, tags:['justice','congress'],
  src:'the Justice Department declining to defend a statute it dislikes, letting it die in court',
  text:'A statute passed under your predecessor, one you find distasteful but Congress never repealed, is ' +
       'being challenged in court. Bo notes the department can simply decline to defend it, and the law dies ' +
       'by default without a single vote ever being cast against it.',
  choices:[
    { label:'Decline to defend it. Let it die in court, quietly.', eff:{base:+7,courts:-8,congress:-6,press:-3,auth:+6},
      res:'A law survives every vote Congress ever holds and dies anyway, because nobody stood up in a courtroom to argue for it. It is legal. It is also a workaround with your fingerprints all over it.' },
    { label:'Defend it. It\'s the law until Congress says otherwise.', eff:{base:-3,courts:+5,congress:+5,auth:0},
      res:'You defend a law you personally dislike because it is, in fact, still the law. It is a small, unglamorous act of respect for a process bigger than your opinion.' },
    { label:'Decline to defend it, and announce it as a standing policy.', eff:{base:+6,press:-4,courts:-9,congress:-7,auth:+5},
      res:'You announce, as a rule, that laws you dislike simply won\'t be defended in court from now on. Eleven pending cases suddenly have a great deal riding on your mood.' },
    { label:'Declare the statute "under renovation" and staple up a sign.', eff:{base:+4,press:-4,courts:-5,congress:-2,auth:-1}, wild:true,
      res:'A press release announces the statute is "closed for renovation," a phrase with no legal meaning whatsoever that four separate news outlets nonetheless report as if it does.' }]},

/* ══════════════ WHO WATCHES THE WATCHDOGS ══════════════ */

{ id:'r-doj-whistleblower', title:'The Case She Wouldn\'t Drop', who:C.ethics, min:10, max:44, tags:['justice','congress'],
  src:'a career attorney\'s formal complaint alleging pressure to abandon a case against an ally',
  text:'Miriam has a formal complaint on her desk: a career DOJ attorney alleges she was pressured to drop a ' +
       'case against a political ally of yours. Miriam has substantiated that the pressure happened. She has ' +
       'not yet substantiated, in writing, whose pressure it was.',
  choices:[
    { label:'Reassign her. Quietly. To a satellite office.', eff:{base:+7,courts:-8,congress:-4,press:-4,auth:+6},
      res:'The whistleblower is transferred to an office that reviews grain export permits, a demotion dressed as a lateral move that fools nobody, least of all her.' },
    { label:'Protect her. Let the complaint proceed through channels.', eff:{base:-4,courts:+6,congress:+4,press:+3,auth:+1},
      res:'The complaint is investigated the way whistleblower complaints are designed to be investigated, and she keeps her job and her caseload. It is, for once, uneventful.' },
    { label:'Reassign her and open a counter-complaint about her conduct.', eff:{base:+6,press:-5,courts:-10,congress:-5,auth:+6},
      res:'A retaliatory complaint filed against the whistleblower for filing a complaint is, even by this department\'s recent standards, a new kind of shameless.' },
    { label:'Promote her, publicly, to a job with no actual power.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'She receives a ceremonial promotion with a new title, a nicer office, and precisely zero caseload. She sees exactly what it is and takes it anyway, on the theory that a nicer office is still a nicer office.' }]},

{ id:'r-rico-protest', title:'The Racketeering Charge', who:C.ag, min:12, max:44, tags:['justice','street'],
  src:'organised-crime statutes applied to a loose protest network',
  text:'Bo has found a way to charge protest organisers under a statute built for organised crime: label the ' +
       'loose network of local chapters an "enterprise," and suddenly a handful of people booking portable ' +
       'toilets for a rally are co-conspirators in a racketeering case. He is not thrilled about it. He is ' +
       'prepared to do it.',
  choices:[
    { label:'File the racketeering charges. Name the whole network.', eff:{base:+8,courts:-9,congress:-4,street:-8,press:-4,auth:+7},
      res:'Nineteen people, most of them volunteers who never met each other, are charged as a criminal enterprise. The toilet-rental invoice becomes, absurdly, Exhibit 4.' },
    { label:'Charge only the individuals who actually broke a law.', eff:{base:-3,courts:+5,street:+4,congress:+3,auth:+1},
      res:'You prosecute the handful of people who committed an actual crime, for the actual crime, which is a far smaller headline and a far sturdier case.' },
    { label:'File the charges and freeze the network\'s bank accounts.', eff:{base:+6,press:-5,courts:-11,street:-9,congress:-5,auth:+6},
      res:'A movement\'s entire operating budget, four thousand dollars raised for water bottles and bail funds, is frozen pending a trial that takes three years to lose.' },
    { label:'Charge the toilet-rental company too, on principle.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'A sanitation vendor is named in a federal racketeering indictment for renting toilets to the wrong customer. Their lawyer calls it "the strangest retainer of my career" and is not exaggerating.' }]},

{ id:'r-gag-order', title:'The Gag Order', who:C.lawyer, min:8, max:40, tags:['justice','press'],
  src:'a pre-publication injunction sought against a critical memoir',
  text:'A former aide has a memoir headed for shelves in three weeks, unflattering and, by all early accounts, ' +
       'accurate. Sy has a novel theory for an injunction: classify the conversations described as national ' +
       'security information after the fact, retroactively, and block the book on that basis.',
  choices:[
    { label:'File for the injunction. Block the book before release.', eff:{base:+8,press:-5,courts:-9,congress:-3,auth:+7},
      res:'A federal court is asked to stop a memoir from reaching shelves on the theory that ordinary staff meetings became classified retroactively. The judge reads the theory once and does not ask for it to be repeated.' },
    { label:'Let it publish. Respond to specific claims later, if any.', eff:{base:-3,press:+5,courts:+4,congress:+2,auth:0},
      res:'You let a book be a book. Several claims in it are wrong and get corrected in the paperback. This is, structurally, how the process is supposed to work.' },
    { label:'File for the injunction and subpoena the publisher\'s catalog.', eff:{base:+6,press:-5,courts:-11,congress:-4,auth:+6},
      res:'The subpoena for one memoir balloons into a request for a major publisher\'s full upcoming slate, on a theory nobody can fully articulate out loud, least of all in court.' },
    { label:'Write your own rebuttal memoir, racing the release date.', eff:{base:+4,press:-3,courts:-2,cash:-0.2,auth:-1}, wild:true,
      res:'A hastily assembled rebuttal hits shelves nine days after the original, outsold by it three to one, and quoted mostly for the chapters where the two books, oddly, agree.' }]},

{ id:'r-consent-decree', title:'The Decree Nobody Enforces', who:C.ag, min:12, max:44, tags:['justice','street'],
  src:'a civil-rights consent decree quietly left unenforced against a friendly police department',
  text:'A consent decree requires federal monitors to review a police department\'s use of force after a court ' +
       'found a pattern of it. The department\'s chief donated to your campaign and calls the monitors "an ' +
       'occupying force." Bo can simply not send anyone. Nobody polices the monitor requirement itself.',
  choices:[
    { label:'Pull the monitors. Let the decree lapse quietly.', eff:{base:+7,courts:-8,congress:-3,street:-6,press:-4,auth:+6},
      res:'The monitoring team is reassigned and the consent decree becomes, functionally, a document nobody enforces. Use-of-force complaints in the department rise the following year, unmeasured by anyone who would say so officially.' },
    { label:'Keep the monitors in place. The court order stands.', eff:{base:-3,courts:+5,street:+4,congress:+3,auth:+1},
      res:'You let a federal court order do the job a federal court order is supposed to do. The chief complains at a press conference. The monitors keep showing up anyway.' },
    { label:'Pull the monitors, and send the chief a commendation.', eff:{base:+5,press:-5,courts:-9,street:-7,congress:-4,auth:+6},
      res:'A department under a federal use-of-force order receives a presidential commendation the same month its oversight vanishes. The two facts sit uncomfortably close together in every retelling.' },
    { label:'Ride along as a volunteer monitor yourself, for one shift.', eff:{base:+4,press:-3,street:-3,auth:-2}, wild:true,
      res:'You ride in the back of a patrol car for one shift, take extensive notes, and produce a report so complimentary that the actual monitors ask, politely, to see your data.' }]},

/* ══════════════ WHEN THE COURT SAYS NO ANYWAY ══════════════ */

{ id:'r-contempt-citation', title:'The Contempt Finding', who:C.lawyer, min:18, max:46, tags:['justice','courts'],
  src:'a federal judge finding a sitting president in contempt for continuing an enjoined program',
  text:'A federal judge has held you in contempt for continuing a program she explicitly ordered stopped. It ' +
       'is, Sy notes with visible discomfort, a formal finding that a sitting president disobeyed a direct ' +
       'court order, and there is no clean way to spin the word "contempt."',
  choices:[
    { label:'Ignore the finding. Continue the program regardless.', eff:{base:+8,courts:-13,congress:-6,street:-4,press:-4,auth:+8},
      res:'You continue a program a federal judge has explicitly and formally ordered stopped. It is, functionally, the exact scenario the Constitution was written to prevent, printed above the fold.' },
    { label:'Comply immediately. Halt the program, appeal separately.', eff:{base:-4,courts:+7,congress:+4,press:+4,auth:+1},
      res:'You do the single least dramatic thing available to a president under a contempt order: what the order says. The appeal proceeds properly, on its own schedule, without the contempt attached to it.' },
    { label:'Comply on paper. Run the program under a different name.', eff:{base:+6,press:-5,courts:-11,congress:-5,auth:+6},
      res:'The program reappears under a new acronym within a month, staffed by the same people, doing the same thing. The judge is not fooled and says so, in writing, at length.' },
    { label:'Send the judge a handwritten apology. Comply anyway.', eff:{base:+3,press:-3,courts:-2,congress:-2,auth:-3}, wild:true,
      res:'A handwritten apology to a federal judge, folded into the compliance filing, is unusual enough that her clerks photocopy it before it goes in the file. She does not respond. She keeps the letter.' }]},

{ id:'r-executive-privilege', title:'The Privilege Claim', who:C.lawyer, min:14, max:46, tags:['justice','congress'],
  src:'executive privilege invoked to block a former aide\'s congressional testimony',
  text:'A former aide has been subpoenaed by a congressional committee to testify about conversations she had ' +
       'directly with you. Sy can invoke executive privilege to block it, a claim that has never once, in the ' +
       'country\'s history, been fully tested for something this specific.',
  choices:[
    { label:'Invoke it broadly. Block the testimony entirely.', eff:{base:+7,courts:-8,congress:-6,press:-4,auth:+7},
      res:'A privilege claim broad enough to cover a hallway conversation is filed and, for now, holds. The committee spends four months in court over words nobody outside the room has actually heard yet.' },
    { label:'Let her testify. Narrow the privilege to real deliberations.', eff:{base:-4,courts:+5,congress:+5,press:+3,auth:+1},
      res:'She testifies about most of it, with a narrow and defensible carve-out for actual policy deliberation. It satisfies the committee\'s curiosity and the office\'s legitimate need for privacy, in roughly that order.' },
    { label:'Invoke it and instruct her not to answer anything, even her name.', eff:{base:+6,press:-5,courts:-10,congress:-7,auth:+6},
      res:'An aide sits through a televised hearing declining, on instruction, to confirm her own employment history. The clip is replayed for a decade at law schools as a teaching example of "too far."' },
    { label:'Let her testify, but sit in the room yourself, visibly.', eff:{base:+4,press:-4,courts:-3,congress:-2,auth:-2}, wild:true,
      res:'A former president attending a congressional hearing as a spectator, in the front row, changes nothing about the privilege law and everything about how nervous the witness looks answering it.' }]},

/* ══════════════ WHO ANSWERS FOR WHAT ══════════════ */

{ id:'r-two-tier-justice', title:'The Sentencing Memo', who:C.ag, min:12, max:44, tags:['justice','base'],
  src:'divergent sentencing recommendations for comparable offenses tied to political alignment',
  text:'Two men committed, on paper, comparable federal offences eight months apart. One donated to your ' +
       'campaign; the department\'s memo recommends probation. The other criticised you on a podcast; the ' +
       'memo recommends the statutory maximum. Bo submitted both memos without comment, which he considers, ' +
       'itself, a form of comment.',
  choices:[
    { label:'Approve both memos as written. No adjustment.', eff:{base:+7,courts:-9,press:-4,congress:-3,auth:+6},
      res:'Two comparable crimes produce two wildly different recommendations, filed on the same letterhead in the same month. A law professor puts them side by side in a single post that outlives the news cycle.' },
    { label:'Send both back. Require consistent sentencing guidance.', eff:{base:-4,courts:+6,press:+3,congress:+3,auth:+1},
      res:'Both memos are revised to reflect actual sentencing guidelines rather than actual friendships. It is unglamorous, it is fair, and almost nobody notices that fairness was the harder option.' },
    { label:'Approve both, then call the harsher judge to "explain context."', eff:{base:+6,press:-5,courts:-11,congress:-4,auth:+6},
      res:'A call from the president to a sitting judge, meant to soften a sentence, is exactly the kind of contact judicial ethics rules were written to prevent. The judge reports the call herself.' },
    { label:'Swap the recommendations, as a private joke only Bo understands.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'For eleven minutes, the harsher memo goes to the donor and the lenient one to the critic, purely so Bo can watch your face. You catch on, laugh once, and make him fix it before anyone signs anything.' }]},

{ id:'r-statute-rush', title:'The Clock Runs Out', who:C.ag, min:16, max:46, tags:['justice','power'],
  src:'an indictment rushed through against a rival before a limitations deadline, on thin evidence',
  text:'The statute of limitations on a decade-old, marginal case against a senator who blocks your agenda ' +
       'expires in three weeks. Bo can rush an indictment through a grand jury in that window on evidence he ' +
       'privately rates as "thin enough to see through," or let the clock run and the matter die on schedule, ' +
       'the way matters are supposed to.',
  choices:[
    { label:'Rush it. Indict before the clock runs out.', eff:{base:+8,courts:-9,congress:-6,press:-4,auth:+7},
      res:'A senator is indicted on the last legally possible day, on evidence a defence attorney dismantles in an afternoon. The case collapses at trial, eighteen months later, well after the headline did its job.' },
    { label:'Let it expire. Thin evidence doesn\'t become strong under a deadline.', eff:{base:-4,courts:+6,congress:+4,auth:+1},
      res:'You let a weak case die on schedule rather than force it across a deadline. It is the correct outcome and, as always, the one nobody throws you a parade for.' },
    { label:'Rush it, and announce it yourself before Bo even signs it.', eff:{base:+6,press:-5,courts:-11,congress:-6,auth:+6},
      res:'You announce charges against a sitting senator before the paperwork exists, forcing the department to either manufacture the indictment you already promised or publicly contradict its own president.' },
    { label:'Let it expire, then send the senator a card noting the date.', eff:{base:+3,press:-3,courts:-2,auth:-2}, wild:true,
      res:'A handwritten note marking the exact date his exposure ended arrives at the senator\'s office. He frames it. He also, from that day on, never once takes your calls personally again.' }]},

{ id:'r-solicitor-flip', title:'The Position Reversed', who:C.ag, min:16, max:46, tags:['justice','courts'],
  src:'the government reversing a decades-old legal position mid-litigation to favor an outcome',
  text:'The government has argued the same legal position in this kind of case for thirty years, across ' +
       'administrations of both parties. Reversing it now, mid-litigation, would hand a rival\'s pending case ' +
       'a near-automatic loss. Bo can file the reversal by Friday. He notes, quietly, that the position was ' +
       'correct on Tuesday and will be wrong on Friday for no reason but timing.',
  choices:[
    { label:'File the reversal. Friday, as planned.', eff:{base:+7,courts:-9,congress:-3,press:-4,auth:+6},
      res:'Thirty years of consistent legal position end on a Friday filing timed to one pending case. Three former solicitors general, from both parties, sign a joint letter calling it "not how any of this is supposed to work," which changes nothing.' },
    { label:'Keep the position. Precedent outlives any one case.', eff:{base:-3,courts:+6,congress:+3,auth:+1},
      res:'You let three decades of consistency remain consistent, at the cost of one case you\'d have liked to win differently. The department\'s credibility, unlike the case, survives you.' },
    { label:'File the reversal, and back-date the recommending memo.', eff:{base:+5,press:-5,courts:-11,congress:-4,auth:+6},
      res:'A memo justifying the reversal is dated two months before the case that prompted it, an error a junior lawyer catches by comparing it to his own calendar.' },
    { label:'Argue both positions in two different courtrooms the same week.', eff:{base:+3,press:-3,courts:-4,auth:-2}, wild:true,
      res:'The government argues opposite legal theories in two circuits simultaneously, a contradiction so clean that a law review dedicates its entire next issue to the phenomenon.' }]}

);
})();
