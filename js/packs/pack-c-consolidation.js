/* ============================================================
   PACK C, CONSOLIDATION  (term months 22–48)
   The late term. Elections, succession, the comparison to other
   countries, and the question of what any of this was for.

   REWRITTEN against the research. Every crisis carries a `src`.
   INSPIRED BY, NEVER COPIED, take the mechanism, invent the rest.

   This pack leans on the research's comparative section (Augustus,
   the Acerbo Law, the 2020 term-limit reset, the judicial purge)
   and on its four explicit "benchmarks that would change the
   assessment", open defiance of a direct high-court order,
   cancelling or rigging a national election, jailing an opposition
   figure or journalist on pretextual charges, and a legislature
   voting away its own powers. Those are the four cards the whole
   game has been walking toward, and the research names them as
   precisely the line it has not crossed.

   Nine cards carry `breaks:` tags and MUST keep them, they are
   the only late-window routes to search, supremacy, religion,
   speech, posse, consent, presentment and vesting.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE FOUR BENCHMARKS ══════════════ */

{ id:'c-defiance', title:'The Order You Will Not Obey', who:C.lawyer, min:34, max:48, tags:['courts','power'],
  src:'the scholarly benchmark of open defiance of a direct high-court order with no compliance',
  text:'Six to three, direct, unambiguous, no room to read it any other way. Sy has stopped taking notes. ' +
       '"Sir, up to now every fight has been about what an order *means*. This one has no ambiguity in it. ' +
       'If you do not comply, that is the first time. And everybody who studies this for a living has said, ' +
       'in print, that this is the line."',
  choices:[
    { label:'Do not comply. Say so out loud.', eff:{base:+9,courts:-18,congress:-14,press:-10,street:-11,auth:+18},
      res:'The republic does not end that afternoon. Something quieter happens: every institution in the country privately recalculates what it can rely on, and none of them tell you the answer.' },
    { label:'Comply, and attack the Court every day for a year.', eff:{base:+7,courts:-7,congress:-5,press:-5,auth:+9},
      res:'Obedience with contempt costs you nothing structural and buys you the whole grievance. It is the option every one of your predecessors also took.' },
    { label:'Comply. Fully. Say it was the right call.', eff:{courts:+14,congress:+11,press:+10,street:+9,base:-14,auth:-8},
      res:'You lose the policy and the week. Four scholars who had written that you would not comply publish corrections, and the corrections are the most valuable thing you own.' },
    { label:'Comply in a state that does not exist.', eff:{base:+4,courts:-11,congress:-8,press:-7,auth:+7}, wild:true,
      res:'The compliance filing names a jurisdiction nobody can locate. It is docketed. Four clerks spend a fortnight trying to work out whether it is a typo or a position.' }]},

{ id:'c-postpone', title:'The Date', who:C.cos, min:38, max:48, tags:['elections','power'],
  src:'the scholarly benchmark of cancelling, postponing or credibly rigging a national election',
  text:'Deborah has closed the door. "There is an argument, a bad one, but an argument, that the emergency ' +
       'authorities reach the administration of a federal election." She does not sit down. "Sir, I have worked ' +
       'for you for four years. I want it on the record that I told you this is the one."',
  choices:[
    { label:'Postpone it. Ninety days. For security.', eff:{base:+6,street:-17,courts:-16,congress:-15,press:-12,auth:+18},
      res:'Four governors announce they will run the election anyway on the original date, under state law, which they can. The question becomes whether anybody shows up to stop them.' },
    { label:'Hold the election. Contest every close county after.', eff:{base:+7,courts:-9,congress:-8,street:-7,press:-6,auth:+11},
      res:'Fighting the count is a fight inside the system. Cancelling the count is not. The difference costs you nothing and is the entire distinction.' },
    { label:'Hold it on the date. Concede if you lose.', eff:{street:+13,courts:+12,congress:+11,press:+10,base:-13,auth:-9},
      res:'You say the sentence out loud, in advance, on camera. It is worth more than anything else you have said in four years and your movement never forgives it.' },
    { label:'Hold the election a week early, as a surprise.', eff:{base:+4,street:-11,courts:-10,congress:-9,press:-7,auth:+8}, wild:true,
      res:'Four states are notified by post. Turnout in those states is 19% and every result is void, which nobody had to litigate because everybody agreed immediately.' }]},

{ id:'c-jail-opponent', title:'The Charge Sheet', who:C.ag, min:32, max:48, tags:['justice','courts'],
  src:'the scholarly benchmark of jailing a major opposition figure or journalist on pretextual charges',
  text:'Bo has a file on Cordelia Ruiz-Bloom. He is holding it like something warm. "There is a filing ' +
       'irregularity from 2019 and a process argument I would be embarrassed to make. It would not survive ' +
       'a trial." He puts it down. "It does not have to survive a trial to put her in a courthouse for two years."',
  choices:[
    { label:'Charge her. Today. The process is the punishment.', eff:{base:+9,courts:-16,congress:-14,press:-13,street:-12,auth:+17},
      res:'She is acquitted in twenty-six months and is, by then, the most famous opposition figure in the hemisphere. Four countries you lecture about the rule of law raise it with you first.' },
    { label:'Investigate. Do not charge. Let it sit.', eff:{base:+5,courts:-7,congress:-6,press:-6,street:-5,auth:+11},
      res:'An open file with no charge is the version that works: all of the shadow, none of the trial, and nothing anybody can appeal.' },
    { label:'Close the file. Tell her you closed it.', eff:{courts:+12,congress:+10,press:+10,street:+8,base:-11,auth:-6},
      res:'She does not believe you for nine months. When she finally does, she says so publicly, and it is worth four points in a state you needed.' },
    { label:'Charge her with the 2019 filing error and nothing else.', eff:{base:+4,courts:-9,congress:-8,press:-8,street:-7,auth:+7}, wild:true,
      res:'A national opposition leader is indicted over a form. The maximum penalty is a $400 fine and she pays it in cash, on the courthouse steps, on camera.' }]},

{ id:'c-enabling', title:'The Delegation Bill', who:C.speaker, min:36, max:48, tags:['congress','power'],
  src:'the scholarly benchmark of a legislature passing an open-ended delegation of its own powers',
  text:'Hal Grimes has drafted something and does not look pleased about it. "Four pages. It delegates to you ' +
       'the authority to modify or suspend any statute during a declared emergency, and you declare the ' +
       'emergency." He sets it down. "I can get it through this chamber, sir. That is what frightens me."',
  choices:[
    { label:'Pass it. Both chambers. This month.', eff:{base:+8,congress:-18,courts:-15,press:-12,street:-11,auth:+20},
      res:'A legislature voting away its own function is the one item on every scholar\'s list that had not happened. It is now the only item on the list that has.' },
    { label:'Pass a version with a two-year sunset.', eff:{base:+5,congress:-9,courts:-8,press:-6,street:-5,auth:+13},
      res:'A sunset is the difference between a delegation and an abdication. It expires in two years, on schedule, because everybody forgets to renew it.' },
    { label:'Do not introduce it. Ask for four specific statutes instead.', eff:{congress:+11,courts:+9,press:+8,base:-8,auth:+6},
      res:'You get three of the four by ordinary vote. They are permanent, unchallengeable, and nobody writes a book chapter about them.' },
    { label:'Pass it and delegate the power straight back to Congress.', eff:{base:+3,congress:+7,courts:+5,press:+5,auth:-3}, wild:true,
      res:'A bill transferring power to you, and an order transferring it back, signed on the same afternoon. Four constitutional scholars describe it as "a loop" and stop there.' }]},

/* ══════════════ ELECTIONS AND THE COUNT ══════════════ */

{ id:'c-vote-machines', title:'The Certification', who:C.gov, min:34, max:48, tags:['elections','courts'],
  src:'federal pressure on state certification of election results',
  text:'Four states have not certified. Their governors are of both parties and all four have said the same ' +
       'thing: certification is a state function and the count is the count. ' +
       'Bo: "We can issue federal guidance instructing them to pause. It has no legal force. It has an enormous amount of other force."',
  choices:[
    { label:'Issue the guidance. Instruct all four to pause.', eff:{base:+8,courts:-14,congress:-12,street:-11,press:-8,auth:+16},
      res:'Three certify anyway within a day. The fourth pauses for eleven days and its legislature nearly does something that would still be being litigated in 2039.', breaks:'supremacy' },
    { label:'Send federal observers. No instruction.', eff:{base:+3,courts:-4,street:-4,congress:-3,auth:+8},
      res:'Observers watch a count and report that it was a count. It is the oldest and least interesting tool available and it works.' },
    { label:'Say nothing. Certification is theirs.', eff:{courts:+11,congress:+10,street:+9,press:+7,base:-10,auth:-4},
      res:'All four certify on schedule. Four years later this is the single fact most often cited in your defence, by people you would not have expected.' },
    { label:'Certify the results yourself, from here.', eff:{base:+5,courts:-12,congress:-10,street:-9,press:-7,auth:+9}, wild:true,
      res:'A signed federal certificate for a state election is transmitted to a state that already has one. Its secretary of state files it under "correspondence".' }]},

{ id:'c-electors', title:'The Alternate Slate', who:C.lawyer, min:36, max:48, tags:['elections','courts'],
  src:'the use of alternate elector slates and pressure on certification of electoral votes',
  text:'"A second slate of electors has been assembled in three states." Sy is reading from a document he ' +
       'clearly wishes he had never been shown. "They have no legal basis. They have signed forms. ' +
       'Sir, the entire theory is that a signed form creates a controversy, and a controversy creates a choice."',
  choices:[
    { label:'Transmit all three slates. Let Congress choose.', eff:{base:+8,courts:-15,congress:-14,street:-11,press:-9,auth:+17},
      res:'Four of the people who signed those forms are prosecuted by their own states within two years. None of them were told that was possible.' },
    { label:'Transmit them but disclaim any legal effect.', eff:{base:+5,courts:-7,congress:-6,street:-5,press:-4,auth:+10},
      res:'A disclaimed slate is a press release with notarisation. It generates the grievance without generating the indictments.' },
    { label:'Repudiate the slates. Publicly. By name.', eff:{courts:+12,congress:+11,street:+9,press:+9,base:-13,auth:-6},
      res:'You spare forty-one people from criminal exposure and they will never know it, because the thing you prevented has no name.' },
    { label:'Assemble a third slate that votes for the opposition.', eff:{base:+3,courts:-8,congress:-7,street:-5,auth:+5}, wild:true,
      res:'It is submitted to confuse the record and succeeds beyond all expectation. Nobody, on any side, can account for it for nine months.' }]},

{ id:'c-third-term-poll', title:'The Question On The Poll', who:C.poll, min:38, max:48, tags:['elections','power'],
  src:'public musings about a third term and the twenty-second amendment',
  text:'Nadia Fisk has run the question. "Forty-one per cent of your own voters say you should stay past the ' +
       'limit. Not \'would consider\'. \'Should\'." She looks up. "Sir, I did not put that question on the ' +
       'survey. Somebody in your operation asked me to and I want that on the record."',
  choices:[
    { label:'Publish the number. Let it do the work.', eff:{base:+9,courts:-10,congress:-10,press:-8,street:-8,auth:+14},
      res:'A number is not a proposal, which is precisely why it is more useful than one. Nobody has to defend it and everybody has to respond to it.' },
    { label:'Bury the poll. Never run that question again.', eff:{courts:+8,congress:+8,press:+6,base:-7,auth:-2},
      res:'Nadia deletes the crosstabs herself. Four people in the building know the number and none of them ever say it aloud.' },
    { label:'"Two terms is what the office is." Say it once.', eff:{courts:+11,congress:+10,press:+9,street:+7,base:-12,auth:-5},
      res:'One sentence, delivered flatly, that ends nine months of speculation. Your movement treats it as a bereavement.' },
    { label:'Run the question about a fourth term as well.', eff:{base:+6,courts:-9,congress:-8,press:-7,auth:+6}, wild:true,
      res:'It polls at 29%, which is both far lower and far higher than anybody expected. Nadia calls it "the worst number I have ever produced".' }]},

{ id:'c-term-reset', title:'The Amendment That Reset The Clock', who:C.hist, min:34, max:48, tags:['power','elections'],
  src:'a foreign leader resetting his own term limits by constitutional amendment',
  text:'Dr Weir has brought the comparative material. "It was done properly. A constitutional amendment, ' +
       'a referendum, a genuine majority. The clock was reset to zero and the terms already served ' +
       'stopped counting." She closes the folder. "Mr President, that is not a coup. That is a procedure."',
  choices:[
    { label:'Start the amendment process. Publicly.', eff:{base:+8,courts:-13,congress:-13,press:-10,street:-10,auth:+16},
      res:'It requires thirty-eight states and you have nineteen. The attempt is worth more to you than the amendment, and everybody involved knows it.' },
    { label:'Have a friendly state legislature propose it. Stay out of it.', eff:{base:+6,courts:-8,congress:-8,press:-6,street:-5,auth:+12},
      res:'You did not ask. It was proposed. That distinction is the load-bearing wall of the entire enterprise and it holds for two years.' },
    { label:'"That is what other countries do." Leave it there.', eff:{courts:+10,congress:+9,press:+8,street:+6,base:-10,auth:-4},
      res:'Drawing the line at somebody else\'s constitution is the cheapest patriotism available and it is, on this occasion, entirely sincere.' },
    { label:'Propose an amendment shortening the term to two years.', eff:{base:+3,courts:+5,congress:+5,press:+6,auth:-3}, wild:true,
      res:'Nobody can work out whether it is a bluff, a trap, or a genuine conviction. It gets four co-sponsors and dies in committee, unexplained.' }]},

/* ══════════════ THE CULT ══════════════ */

{ id:'c-gold-room', title:'The Refurbishment', who:C.usher, min:24, max:48, tags:['vanity','press'],
  src:'a gilded refurbishment of the presidential office',
  text:'Alvin has the invoices and the before-and-after photographs. "Gold leaf on the cornice, the door ' +
       'surrounds, the mantel and the eagle. It is all reversible, sir, in the sense that any of it can be ' +
       'taken off." He hesitates. "It is being photographed by every visitor who comes in."',
  choices:[
    { label:'More gold. The mouldings, the mirror, the frames.', eff:{base:+7,press:-9,street:-7,congress:-6,courts:-5,cash:-0.3,auth:+9},
      res:'A room that photographs like a throne room, in a building designed specifically not to have one. It appears in nine hundred foreign news packages in a year.' },
    { label:'Stop where it is. It is enough.', eff:{base:+3,press:-3,auth:+5},
      res:'A moderate amount of gold reads as taste. A large amount reads as an argument, and you have stopped just short of making it.' },
    { label:'Strip it back. Restore the room.', eff:{press:+8,street:+7,congress:+6,courts:+5,base:-8,cash:-0.2,auth:-3},
      res:'Alvin supervises it personally and is, for the first time in four years, visibly happy. Nobody outside the building notices at all.' },
    { label:'Gild the Cabinet Room, the corridor and the lift.', eff:{base:+5,press:-8,street:-6,congress:-5,cash:-0.5,auth:+5}, wild:true,
      res:'The lift is the detail that does the damage. Four hundred thousand people share one photograph of a gilded elevator and none of them are on your side.' }]},

{ id:'c-birthday', title:'The Free Admission Day', who:C.sched, min:28, max:48, tags:['vanity','street'],
  src:'a presidential birthday designated as a free-admission holiday at national sites',
  text:'Boyd Hackler has the proclamation ready. "Free admission at every national park and monument, on your ' +
       'birthday, in perpetuity." He shifts. "Sir, free park admission is genuinely popular. The date is ' +
       'the entire problem and there are three hundred and sixty-four alternatives."',
  choices:[
    { label:'Sign it. My birthday.', eff:{base:+8,press:-8,street:-6,congress:-6,courts:-4,auth:+9},
      res:'Four million people visit a national park for free on a date chosen for one man. Most of them have a lovely day and every photograph of it is captioned unkindly.' },
    { label:'Sign it for Independence Day instead.', eff:{base:+3,press:+6,street:+7,congress:+5,auth:+2},
      res:'The same policy, universally popular, credited to nobody. Boyd files it as a win and privately considers it a defeat.' },
    { label:'No holiday. Fund the parks properly instead.', eff:{street:+9,press:+8,congress:+6,courts:+4,base:-7,cash:-0.3,auth:-1},
      res:'Eleven backlogged maintenance projects are completed. A bridge in Montana is rebuilt. Nobody ever connects any of it to you.' },
    { label:'Sign it, and make attendance compulsory.', eff:{base:+4,street:-10,press:-8,congress:-7,courts:-6,auth:+5}, wild:true,
      res:'The word "compulsory" survives four drafts and two legal reviews before somebody catches it at 11pm the night before publication.' }]},

{ id:'c-name-on-buildings', title:'The Signage Contract', who:C.cos, min:26, max:48, tags:['vanity','money'],
  src:'the placement of a president\'s name and likeness on government buildings and property',
  text:'"A signage contract for four hundred federal buildings." Deborah reads the specification. ' +
       '"Your name, above the door, in bronze, at a height of one metre. Sir, the buildings are named after ' +
       'people who are dead. That is not a rule. It is just what everybody has always done."',
  choices:[
    { label:'All four hundred. Bronze. One metre.', eff:{base:+8,press:-10,street:-8,congress:-7,courts:-6,cash:-0.4,auth:+11},
      res:'Four hundred buildings carrying a living man\'s name. Removing them later costs $60 million, which is the number a future administration will quote most often.' },
    { label:'Four buildings. The ones we actually built.', eff:{base:+4,press:-3,street:-2,auth:+6},
      res:'Naming a thing you built after yourself is ordinary. Naming things you did not is the part that reads differently, and you have avoided it.' },
    { label:'None. The buildings keep the names they have.', eff:{press:+8,street:+7,congress:+6,courts:+5,base:-8,auth:-3},
      res:'Deborah records the decision in the file with a single word, "declined", and it is the entry she is proudest of.' },
    { label:'Name them all after your predecessors, alphabetically.', eff:{base:+3,press:+5,street:+4,congress:+5,cash:-0.3,auth:-1}, wild:true,
      res:'It is bewildering, expensive and entirely charming. Four historical societies write to say so and one of them sends a cake.' }]},

{ id:'c-invasion-within', title:'The Room Full Of Generals', who:C.gen, min:30, max:48, tags:['military','rhetoric'],
  src:'an address to assembled senior officers describing the country as under invasion from within',
  text:'Every flag officer in the service is in one room because you asked for them. Tarrant has the draft ' +
       'and one observation. "Sir, the phrase is \'invasion from within\'. You will be saying it to four hundred ' +
       'people who have spent their careers learning exactly who they are and are not permitted to point a weapon at."',
  choices:[
    { label:'Say it. Watch the room.', eff:{base:+8,street:-13,courts:-10,congress:-10,press:-8,auth:+13},
      res:'Nobody stands. Nobody leaves. Four hundred officers sit in complete silence, and every one of them tells somebody about it that night.' },
    { label:'Say it, then say you mean the political argument.', eff:{base:+5,street:-6,congress:-5,courts:-5,press:-4,auth:+9},
      res:'The clarification is buried by the phrase, as clarifications always are, but it exists in the transcript and Tarrant makes sure it is circulated.' },
    { label:'Cut it. Talk about recruitment and pay.', eff:{street:+9,congress:+8,press:+7,courts:+6,base:-9,auth:+1},
      res:'Twenty minutes on housing allowances to four hundred generals. It is the best-received speech you give all term and receives no coverage whatsoever.' },
    { label:'Ask the room who among them is the invasion.', eff:{base:+4,street:-11,congress:-9,courts:-8,press:-7,auth:+7}, wild:true,
      res:'One general puts his hand up. It is unclear to this day whether he was being insubordinate or extremely funny, and he has declined to clarify.' }]},

{ id:'c-monarch', title:'"Functionally A Monarch"', who:C.hist, min:32, max:48, tags:['press','power'],
  src:'a historian describing the office as having become functionally monarchical',
  text:'A historian on television used two words: functionally a monarch. Dr Weir was watching. ' +
       '"He was not being rude, Mr President. He meant it structurally, an office with no effective ' +
       'check operating on it. He said it sadly. That is what made it land."',
  choices:[
    { label:'Embrace it. Have it printed.', eff:{base:+8,press:-10,courts:-9,congress:-9,street:-8,auth:+12},
      res:'A merchandise line based on a warning. It sells extremely well and is quoted, without irony, in three foreign parliaments discussing their own leaders.' },
    { label:'Reject it. List the things that have stopped you.', eff:{courts:+9,congress:+8,press:+8,street:+6,base:-8,auth:-3},
      res:'You name four court losses and a failed bill, accurately, from memory. It is the most persuasive thing you do all year and your base hates every word.' },
    { label:'Say nothing. It is one historian.', eff:{press:+4,courts:+3,base:-2,auth:+4},
      res:'It becomes a chapter title in eleven months and a book title in three years, and by then it does not need you to have responded.' },
    { label:'Request a crown, formally, in writing.', eff:{base:+5,press:-9,courts:-8,congress:-8,street:-6,auth:+5}, wild:true,
      res:'A memorandum to the Office of the Curator asks what would be involved. The reply is four hundred words long and takes the question entirely seriously.' }]},

/* ══════════════ THE COMPARISONS ══════════════ */

{ id:'c-restored-republic', title:'Restoring The Republic', who:C.hist, min:34, max:48, tags:['power','press'],
  src:'the Augustan template of theatrically restoring republican forms while retaining real power',
  text:'"He gave it all back." Dr Weir is describing a man dead two thousand years. "Publicly, formally, ' +
       'in the senate house, every extraordinary power, surrendered. And then he kept two ordinary ones for life, ' +
       'and those two were sufficient." She pauses. "It is the most successful political manoeuvre ever performed, ' +
       'Mr President, and it looked exactly like a resignation."',
  choices:[
    { label:'Do it. Surrender the emergency powers. Keep the two that matter.', eff:{base:-6,courts:+12,congress:+12,press:+13,street:+10,auth:+16},
      res:'The coverage is euphoric and almost entirely wrong. You have given up thirty-nine things you never used and kept the two that do the work.' },
    { label:'Surrender them all. Genuinely.', eff:{courts:+14,congress:+13,press:+12,street:+11,base:-14,auth:-11},
      res:'Not a manoeuvre. An actual restoration, done properly, that costs you everything you spent four years accumulating. Dr Weir writes about it for the rest of her life.' },
    { label:'Keep everything. The theatre is for weaker men.', eff:{base:+7,courts:-9,congress:-9,press:-8,street:-7,auth:+11},
      res:'The other man in the story kept everything openly and was stabbed by his own senate. Dr Weir mentions this and you tell her it was a different situation.' },
    { label:'Surrender them in Latin.', eff:{base:+4,press:-5,courts:-4,congress:-4,auth:+5}, wild:true,
      res:'The proclamation is issued in Latin only. Four classicists find three grammatical errors and one of them writes 6,000 words on the subjunctive.' }]},

{ id:'c-acerbo', title:'The Two-Thirds Rule', who:C.speaker, min:32, max:48, tags:['congress','elections'],
  src:'an interwar election law awarding a supermajority of seats to the largest party',
  text:'Hal has been shown something from 1923 and cannot unsee it. "A change to the election law. Whichever ' +
       'party comes first, with any margin, takes two-thirds of the seats." He is pale. "It was passed by a ' +
       'parliament that then had nothing left to pass. Sir, I am showing it to you so that you have seen it."',
  choices:[
    { label:'Draft the American version. Introduce it.', eff:{base:+7,congress:-17,courts:-14,press:-12,street:-11,auth:+18},
      res:'It does not pass. It is introduced, which means it exists, which means it can be introduced again by somebody less encumbered than you.' },
    { label:'Redistrict aggressively instead. Same result, ordinary tools.', eff:{base:+6,congress:-8,courts:-8,press:-6,street:-6,auth:+12},
      res:'Nine states redrawn to the legal limit. It is entirely conventional, entirely brutal, and both parties have done it for two centuries.' },
    { label:'Nothing. Win the seats or do not.', eff:{congress:+11,courts:+10,press:+9,street:+8,base:-10,auth:-4},
      res:'You lose eleven seats you would have kept. The chamber that remains is one that can still, technically, say no to you, and in nineteen months it does.' },
    { label:'Award two-thirds of the seats to whoever comes second.', eff:{base:+3,congress:-7,courts:-6,press:-5,auth:+5}, wild:true,
      res:'Proposed to prove a point about arbitrariness. Four members co-sponsor it sincerely and one gives a speech in favour that is genuinely moving.' }]},

{ id:'c-judicial-purge', title:'Four Thousand', who:C.cj, min:34, max:48, tags:['courts','justice'],
  src:'a foreign purge of thousands of judges and prosecutors after a claimed emergency',
  text:'Chief Justice Stone has come in person and brought a printout. "Four thousand judges and prosecutors, ' +
       'removed in one year, in a country that still holds elections. A hundred and fifty journalists jailed." ' +
       'She puts it on your desk. "I am not accusing you of anything, Mr President. I am telling you what it looks like ' +
       'from the inside, because the people it happened to did not see it coming either."',
  choices:[
    { label:'Begin a review of federal judicial conduct. All of it.', eff:{base:+7,courts:-17,congress:-13,press:-11,street:-10,auth:+17},
      res:'Nobody is removed. Nine hundred judges are now people with a file, and a judge with a file rules differently, which is the only outcome that was ever required.' },
    { label:'Review the eleven who have ruled against us most.', eff:{base:+5,courts:-10,congress:-7,press:-6,street:-5,auth:+12},
      res:'Targeting the visible ones is worse than targeting everybody, because the pattern is legible from the first day and nine outlets publish the list.' },
    { label:'Thank her. Do nothing at all.', eff:{courts:+13,congress:+9,press:+8,street:+7,base:-9,auth:-4},
      res:'She never mentions the conversation again. Two years later, in a case you badly need, she writes a concurrence nobody expected, and you never learn why.' },
    { label:'Offer to be reviewed by the judiciary instead.', eff:{base:+3,courts:+7,congress:+5,press:+6,auth:-2}, wild:true,
      res:'A formal request that the judicial conference examine your conduct. It is accepted. It reports in four years and by then it is somebody else\'s problem.' }]},

{ id:'c-crossed-over', title:'The Paper That Says We Crossed', who:C.hist, min:30, max:48, tags:['press','power'],
  src:'comparative political scientists classifying the country as having crossed into competitive authoritarianism',
  text:'Dr Weir has the paper. "They argue the country ceased to be a full democracy, not that it is a ' +
       'dictatorship, that it is now in a different category. And they say the turn was faster than the first ' +
       'year of four cases they name." She sets it down. "Mr President, the word they use is *competitive*. ' +
       'The elections are real. That is the whole distinction and it is doing a lot of work."',
  choices:[
    { label:'Prove them right. Lean into every one of it.', eff:{base:+8,courts:-11,congress:-11,press:-10,street:-9,auth:+15},
      res:'The paper is updated with a new section in the second edition. You are cited forty-one times and the citation is never favourable.' },
    { label:'Prove them wrong. Do one thing they said you would not.', eff:{courts:+12,congress:+11,press:+11,street:+9,base:-12,auth:-6},
      res:'You comply with a ruling you could have fought and lose a policy you wanted. Two of the four authors publicly note it. It is the only correction they ever issue.' },
    { label:'Attack the methodology. Fund a rival index.', eff:{base:+7,press:-9,courts:-7,congress:-7,street:-6,cash:-0.4,auth:+8},
      res:'Your index ranks the country fourth in the world. Nobody cites it, including the people you paid to build it, in their own later work.' },
    { label:'Ask them what score would fix it, then game exactly that.', eff:{base:+4,courts:+4,congress:+4,press:-5,street:-3,auth:+6}, wild:true,
      res:'They answer honestly, in detail, because they are academics. You improve on nine indicators without changing anything real and the score moves four points.' }]},

{ id:'c-index-drop', title:'Fifty-First', who:C.state, min:28, max:48, tags:['foreign','press'],
  src:'an international democracy index dropping the country out of its top classification in a single year',
  text:'Muriel has the index. "Twentieth to fifty-first in one year. Out of the top classification for the ' +
       'first time in over fifty years." She turns the page. "The line the foreign ministries are all reading ' +
       'is the one about the *speed*, sir. They say it is unprecedented in modern history."',
  choices:[
    { label:'Withdraw from the body that funds the index.', eff:{base:+6,press:-9,street:-7,congress:-7,courts:-6,auth:+9},
      res:'It is an academic consortium at a Swedish university and you do not fund it. The attempt to defund it is reported in forty countries.' },
    { label:'Dispute the ranking. Ignore the speed.', eff:{base:+4,press:-5,street:-4,congress:-4,auth:+6},
      res:'Nobody was ever going to argue about the ranking. The argument was always about the gradient and you have declined to have it.' },
    { label:'Publish the sub-scores and address the worst three.', eff:{press:+9,courts:+8,congress:+7,street:+6,base:-8,auth:-3},
      res:'Judicial independence, press access, oversight capacity. Fixing three indicators takes eleven months and moves you back to thirty-fourth.' },
    { label:'Ask to be ranked in a different category entirely.', eff:{base:+3,press:-5,street:-4,congress:-3,auth:+4}, wild:true,
      res:'A formal request that the country be assessed as an emerging democracy rather than an established one. It is politely declined in four languages.' }]},

/* ══════════════ ENFORCEMENT, LATE ══════════════ */

{ id:'c-insurrection-act', title:'The Act With No Definition', who:C.gen, min:32, max:48, tags:['military','street'],
  src:'reliance on an insurrection statute with no statutory definition of insurrection',
  text:'"The statute does not define insurrection." Tarrant says it as a fact, not an argument. ' +
       '"It says you may act when you decide there is one. There is no test, no threshold, and no court has ' +
       'ever second-guessed the determination." He waits. "Sir, that is the widest authority in American law ' +
       'and you would be the first person in fifty-eight years to use it this way."',
  choices:[
    { label:'Invoke it. Nationwide.', eff:{base:+8,street:-18,courts:-14,congress:-13,press:-10,auth:+19},
      res:'Regular troops on American streets under a statute with no definition and no reviewer. It is the most legal thing you ever do and it feels like nothing else.', breaks:'posse' },
    { label:'Invoke it for one city. Twenty-one days. Written limit.', eff:{base:+6,street:-9,courts:-8,congress:-7,press:-5,auth:+13},
      res:'A limit you impose on yourself is the only limit in the statute. Tarrant writes the twenty-one days into the order himself and thanks you.' },
    { label:'Do not invoke it. Use the Guard under state control.', eff:{street:+11,courts:+10,congress:+9,press:+7,base:-9,auth:-2},
      res:'It is slower and it works, because governors with a stake in an outcome are more useful than soldiers with an order.' },
    { label:'Invoke it against the weather.', eff:{base:+4,street:-8,courts:-7,congress:-6,auth:+6}, wild:true,
      res:'The proclamation names a hurricane as the insurrection. FEMA and Northern Command hold a joint call to establish which of them has been tasked.' }]},

{ id:'c-registry', title:'The List Of Everybody', who:C.home, min:30, max:48, tags:['security','street'],
  src:'the assembly of a consolidated federal registry from separately-held data holdings',
  text:'Duane Krisp has a proposal from a contractor. "Every federal database, merged. Tax, benefits, travel, ' +
       'licences, immigration status. Each one lawful separately." He puts it down. "Sir, together it is a ' +
       'single file on three hundred and forty million people, and nobody ever voted on the together part."',
  choices:[
    { label:'Build it. All of it. One file.', eff:{base:+6,street:-15,courts:-14,congress:-11,press:-10,auth:+17},
      res:'It works exactly as promised and is queried nine million times in its first year. Four of those queries are later found to have been about journalists.', breaks:'search' },
    { label:'Merge only the immigration-relevant sets.', eff:{base:+5,street:-7,courts:-7,congress:-5,press:-4,auth:+11},
      res:'A narrower system with a stated purpose, which is the only thing that ever survives a court. It also does 80% of what you wanted.' },
    { label:'Kill it. Write a rule against consolidation.', eff:{street:+12,courts:+11,congress:+9,press:+9,base:-10,auth:-5},
      res:'The rule outlives your administration by decades and the contractor sues for its development costs and loses.' },
    { label:'Build it and put it on a public website.', eff:{base:+3,street:-13,courts:-12,congress:-10,press:-8,auth:+6}, wild:true,
      res:'Radical transparency taken to its conclusion. It is online for eleven minutes, which is nine minutes longer than it took to be archived permanently.' }]},

{ id:'c-data-center', title:'The Facility In The Desert', who:C.spy, min:34, max:48, tags:['security','courts'],
  src:'bulk data retention capacity outstripping the legal rules governing its use',
  text:'Errol Hance has the site plan. "The storage is effectively unlimited now. We can keep everything, ' +
       'forever, on the theory that we might one day have a reason to look." He does not sit. ' +
       '"Sir, the rules were written when storage was expensive. The rules assumed we would have to choose."',
  choices:[
    { label:'Keep everything. Forever. Decide later why.', eff:{base:+5,street:-14,courts:-14,congress:-11,press:-9,auth:+17},
      res:'A permanent record of a country, held against a purpose not yet identified. Four future administrations inherit it and not one of them deletes any of it.', breaks:'search' },
    { label:'Keep it, with a five-year deletion schedule.', eff:{base:+3,street:-6,courts:-5,congress:-4,press:-3,auth:+10},
      res:'A retention limit is the only meaningful constraint on a system like this and it costs nothing to impose while the building is still empty.' },
    { label:'Collect only against an identified purpose.', eff:{street:+11,courts:+12,congress:+9,press:+8,base:-9,auth:-5},
      res:'Errol argues against it for twenty minutes and then implements it perfectly, which is what he does with every decision he loses.' },
    { label:'Fill the facility with the paperwork instead.', eff:{base:+3,street:-5,courts:-5,congress:-4,auth:+5}, wild:true,
      res:'Four million cubic feet of printed records, transported by rail over nine months. It is entirely secure and entirely unsearchable, which some people prefer.' }]},

/* ══════════════ THE INSTITUTIONS, LATE ══════════════ */

{ id:'c-church', title:'The National Service', who:C.pastor, min:26, max:48, tags:['culture','street'],
  src:'the formal entanglement of a particular faith with the machinery of the state',
  text:'Reverend Dale Muncy has a proposal and is uncharacteristically hesitant. "A weekly service, in the ' +
       'building, broadcast, with an office funded from the budget." He turns his hat over in his hands. ' +
       '"Sir, I would come. I want to be honest that I am not sure I should be asked."',
  choices:[
    { label:'Fund the office. Broadcast the service. Weekly.', eff:{base:+9,courts:-12,street:-10,press:-9,congress:-7,auth:+13},
      res:'Four denominations that supported you object first and most loudly, because they have read more history about this than anybody in your office has.', breaks:'religion' },
    { label:'Hold the service. No federal funding, no office.', eff:{base:+5,courts:-4,street:-3,press:-3,auth:+7},
      res:'A private service in a private residence, which is what every occupant of the building has always been entitled to do.' },
    { label:'Invite eleven faiths in rotation. Fund none of them.', eff:{base:+3,courts:+7,street:+7,press:+6,congress:+5,auth:+2},
      res:'A rotation that annoys everybody equally and offends nobody in law. Dale takes the fourth Sunday and calls it the fairest thing available.' },
    { label:'Declare yourself the head of a new denomination.', eff:{base:+4,courts:-10,street:-9,press:-8,congress:-6,auth:+6}, wild:true,
      res:'Articles of incorporation are actually filed in Delaware. Nine thousand people join in a fortnight and Dale resigns the same afternoon.' }]},

{ id:'c-broadcast-license', title:'The Renewal Hearing', who:C.press, min:30, max:48, tags:['press','courts'],
  src:'a licence renewal used as leverage against a broadcaster\'s editorial output',
  text:'A licence renewal is up and your regulator has scheduled a hearing on "public interest obligations". ' +
       'Kaylee: "The renewal is routine, sir. It has been routine for sixty years. Scheduling a hearing about ' +
       'it is the entire message and everybody in the industry received it this morning."',
  choices:[
    { label:'Hold the hearing. Put the licence genuinely at risk.', eff:{base:+7,press:-17,courts:-13,congress:-10,street:-9,auth:+15},
      res:'The licence is renewed. In the eleven months it took, the network replaced two anchors and an executive producer, and nobody had to be asked to.', breaks:'speech' },
    { label:'Hold the hearing. Renew at the end of it.', eff:{base:+4,press:-7,courts:-5,congress:-4,auth:+9},
      res:'A process with a foregone conclusion still costs them a legal budget and a year of caution, which is most of what you wanted.' },
    { label:'Renew it on the nod, like the other sixty years.', eff:{press:+11,courts:+9,congress:+7,street:+6,base:-9,auth:-3},
      res:'Nothing happens. It is the correct handling of a licence renewal and it appears in no newspaper on earth.' },
    { label:'Award the licence to a network that does not exist.', eff:{base:+4,press:-11,courts:-9,congress:-7,auth:+6}, wild:true,
      res:'A shell applicant with a PO box wins a major-market licence. It broadcasts a test card for four months before anybody in the agency notices.' }]},

{ id:'c-cabinet-25', title:'The Twenty-Fifth', who:C.vp, min:34, max:48, tags:['power','congress'],
  src:'the constitutional mechanism for removal by the vice president and a majority of the cabinet',
  text:'Chet Danforth has asked for a private meeting and has brought nobody. "There is a mechanism," he says, ' +
       'carefully, "that requires me and a majority of the Cabinet. I want you to know that four people have ' +
       'raised it with me and that I told all four of them no." He pauses. "I am telling you that I told them no."',
  choices:[
    { label:'Replace the four. And replace Chet.', eff:{base:+6,congress:-14,courts:-10,press:-9,street:-7,auth:+15},
      res:'A Cabinet selected exclusively for its unwillingness to remove you. Every subsequent decision it makes is made by people chosen for one quality.', breaks:'consent' },
    { label:'Replace the four. Keep Chet where you can see him.', eff:{base:+4,congress:-8,courts:-6,press:-5,auth:+11},
      res:'He stays, having told you the truth, in a job where telling you the truth has just been demonstrated to be survivable. He does it twice more.' },
    { label:'Thank him. Change nothing.', eff:{congress:+9,courts:+7,press:+6,street:+5,base:-6,auth:+3},
      res:'The mechanism is never raised again, by anybody, for the rest of the term. Whether that is loyalty or arithmetic is not something you will ever establish.' },
    { label:'Invoke it against yourself to see what happens.', eff:{base:+3,congress:-7,courts:-5,press:-6,auth:+4}, wild:true,
      res:'A letter declaring your own inability is drafted and, catastrophically, transmitted. Chet is acting president for fifty-one minutes and does nothing at all with it.' }]},

{ id:'c-treaty', title:'The Agreement That Was Not A Treaty', who:C.state, min:30, max:48, tags:['foreign','congress'],
  src:'binding international commitments concluded as executive agreements rather than ratified treaties',
  text:'Muriel has the instrument. "Basing rights, a mutual security clause and a forty-year term. ' +
       'If we call it a treaty it needs sixty-seven senators, which we do not have. If we call it an executive ' +
       'agreement it needs your signature." She looks up. "Sir, it is the same document either way."',
  choices:[
    { label:'Sign it as an executive agreement. Forty years.', eff:{base:+5,congress:-14,courts:-11,press:-8,street:-6,auth:+15},
      res:'A forty-year mutual security commitment made by one man in an afternoon. The other country regards it as binding, which is the part nobody can undo.', breaks:'presentment' },
    { label:'Send it as a treaty. Fight for the sixty-seven.', eff:{congress:+12,courts:+10,press:+8,base:-9,auth:+4},
      res:'You get seventy-one votes after nine months of humiliating negotiation. It is unbreakable by any successor, which no executive agreement has ever been.' },
    { label:'Sign a five-year version. Leave the rest to Congress.', eff:{base:+3,congress:-5,courts:-4,press:-3,auth:+9},
      res:'A short agreement that buys time for a real treaty. Muriel calls it the professional answer and means it as high praise.' },
    { label:'Sign it as a treaty, an agreement and a memo, simultaneously.', eff:{base:+3,congress:-8,courts:-7,press:-5,auth:+6}, wild:true,
      res:'Three instruments with identical text and different legal statuses. The other country ratifies all three, which was not anticipated by anybody.' }]},

{ id:'c-emergency-extend', title:'The Renewal Nobody Reads', who:C.lawyer, min:32, max:48, tags:['power','congress'],
  src:'the indefinite annual renewal of emergency declarations without review',
  text:'"The declaration renews automatically unless you say otherwise, and Congress may terminate it by ' +
       'resolution, which it will not." Sy has the form. "One signature, sir. It is a fourth renewal. ' +
       'The original emergency ended, in the ordinary sense of the word, about two years ago."',
  choices:[
    { label:'Renew it. And the other eleven.', eff:{base:+5,congress:-13,courts:-11,press:-8,street:-8,auth:+16},
      res:'Twelve emergencies, none of them emergencies, all of them load-bearing. The powers are now simply how the country is governed and nobody voted for that.', breaks:'vesting' },
    { label:'Renew the four still doing real work.', eff:{base:+3,congress:-5,courts:-4,press:-3,auth:+10},
      res:'Letting eight lapse is reported as weakness by your own side and as sanity by everybody else. Both readings are available and neither is wrong.' },
    { label:'Let them all lapse. Govern by statute.', eff:{congress:+13,courts:+12,press:+9,street:+8,base:-11,auth:-8},
      res:'You surrender the machinery voluntarily. Four policies collapse immediately and the two that survive are the only two that were ever real.' },
    { label:'Renew it for a hundred years.', eff:{base:+4,congress:-9,courts:-8,press:-6,auth:+7}, wild:true,
      res:'The instrument specifies an expiry date in the twenty-second century. It is published. Nobody in the Federal Register office is empowered to query it.' }]},

/* ══════════════ THE LONG SHADOW ══════════════ */

{ id:'c-lincoln', title:'The Precedent You Would Prefer', who:C.hist, min:30, max:48, tags:['press','power'],
  src:'the comparison to wartime presidents who suspended rights and defied courts',
  text:'"Your defenders keep reaching for one particular president," says Dr Weir. "He suspended habeas corpus, ' +
       'effectively ignored a Supreme Court justice, and considered postponing an election." She lets it land. ' +
       '"Mr President, the comparison is accurate. It is also a comparison to a man doing those things during ' +
       'a civil war, and I would be careful how much I leaned on the parallel."',
  choices:[
    { label:'Lean on it constantly. He is on the money.', eff:{base:+7,press:-8,courts:-7,congress:-6,street:-6,auth:+10},
      res:'Every historian asked responds with the same three words about the war, and the three words are unanswerable, and you keep making the comparison anyway.' },
    { label:'Drop the comparison. Find a peacetime one.', eff:{press:+7,courts:+6,congress:+5,base:-5,auth:+4},
      res:'There is not one, which is the actual finding, and Dr Weir does not say so out loud because she does not have to.' },
    { label:'Argue there *is* an emergency, and name it.', eff:{base:+8,press:-9,courts:-9,congress:-8,street:-8,auth:+13},
      res:'Naming an emergency is the necessary predicate for everything else, and once named it can never be un-named without surrendering all of it.' },
    { label:'Ask her which president you most resemble.', eff:{base:-4,press:+6,courts:+5,congress:+4,auth:-2}, wild:true,
      res:'She answers immediately, without hedging, and names somebody from the 1850s that nobody in the room has heard of. It takes four days to work out how unkind it was.' }]},

{ id:'c-fdr', title:'Four Terms', who:C.hist, min:32, max:48, tags:['elections','power'],
  src:'the comparison to a president who served four terms and was rebuffed on court expansion',
  text:'Dr Weir has the other comparison. "Twelve years, four elections, an entire federal government rebuilt, ' +
       'and an internment. He also tried to expand the Court and was refused, by his own party, in public." ' +
       'She adds: "The refusal is the part your side never quotes, Mr President, and it is the part that mattered."',
  choices:[
    { label:'Try the Court expansion. See if this party refuses.', eff:{base:+7,congress:-14,courts:-13,press:-10,street:-8,auth:+15},
      res:'Nine of your own senators refuse within a week. It is the largest single act of resistance from your own side in four years and you never entirely recover from it.' },
    { label:'Do not try it. Take the point.', eff:{congress:+9,courts:+10,press:+7,base:-7,auth:+2},
      res:'You decline to attempt something you would have lost. Nobody notices a thing that does not happen, which is why nobody has ever been thanked for restraint.' },
    { label:'Expand the lower courts instead. Nobody watches those.', eff:{base:+5,congress:-6,courts:-6,press:-4,auth:+12},
      res:'Sixty-three new district judgeships, filled in fourteen months. It is a fraction of the coverage and several times the effect.' },
    { label:'Expand the Court downward, to seven.', eff:{base:+3,congress:-9,courts:-11,press:-7,auth:+6}, wild:true,
      res:'A bill to shrink the bench by removing the two most recently confirmed. Both were confirmed by you, which is pointed out on the floor, at length.' }]},

{ id:'c-uncommon-momentum', title:'Little Energy On Legislation', who:C.speaker, min:26, max:48, tags:['congress','press'],
  src:'analysts noting reliance on orders and emergencies with little effort spent on legislative pathways',
  text:'Hal has a think-tank line highlighted. "\'Uncommon early momentum\', and then this: \'with little energy ' +
       'spent on legislative pathways\'." He looks over the top of the page. "Sir, that is a polite way of saying ' +
       'that none of it is nailed down, and I have been telling you that for two years in a less polite way."',
  choices:[
    { label:'Keep the momentum. Nailing things down is slow.', eff:{base:+7,congress:-10,courts:-8,press:-6,auth:+13},
      res:'Everything you have built rests on your own signature. Your successor removes 80% of it in a single afternoon using the same instrument you did.' },
    { label:'Spend the last two years turning orders into statutes.', eff:{congress:+13,courts:+10,press:+9,street:+6,base:-11,auth:+3},
      res:'Four bills, two of which pass. They are the only part of your presidency that is still standing in twenty years, and they are the part nobody remembers.' },
    { label:'Do both. Legislate the four that matter, order the rest.', eff:{base:+3,congress:+6,courts:+4,press:+3,auth:+9},
      res:'A portfolio approach that no one on either side finds satisfying and that turns out, on a twenty-year view, to have been exactly right.' },
    { label:'Have Congress pass a bill ratifying every order at once.', eff:{base:+5,congress:-11,courts:-9,press:-7,auth:+11}, wild:true,
      res:'Two hundred and seventeen orders ratified in a single vote by members who have read four of them. It passes by eleven and is challenged the following morning.' }]},

{ id:'c-succession-machine', title:'The Movement After You', who:C.vp, min:38, max:48, tags:['elections','power'],
  src:'a personalist movement and the question of whether it survives its founder',
  text:'Chet has the internal numbers and is not enjoying them. "The movement polls at fifty-four. You poll at ' +
       'forty-one." He lets that sit. "Sir, it has grown past you. That is either the greatest thing you have ' +
       'built or the last problem you will have, and I genuinely do not know which."',
  choices:[
    { label:'Bind it to me. Loyalty oaths, my name on everything.', eff:{base:+9,congress:-9,courts:-7,press:-8,street:-7,auth:+12},
      res:'A movement that cannot outlive you also cannot survive you, and both of those become true on the same day, which is not the day you chose.' },
    { label:'Build the institution. Let it outlive me.', eff:{base:-5,congress:+8,courts:+6,press:+6,street:+6,auth:+7},
      res:'A party apparatus with rules, a treasury and a succession process. It wins three of the next five elections and stops mentioning you in the second one.' },
    { label:'Hand it to Chet now, while I can choose.', eff:{base:-9,congress:+10,courts:+8,press:+7,street:+7,auth:+4},
      res:'He takes it gratefully and competently, and within eleven weeks he makes a decision without asking you, and nothing happens to him.' },
    { label:'Poll the movement on whether it still needs you.', eff:{base:-7,press:+6,congress:+5,street:+4,auth:-3}, wild:true,
      res:'Nadia begs you not to. You commission it anyway. The number is 38% and it leaks within four days, and the leak is the least of it.' }]},

{ id:'c-what-was-it-for', title:'The Question In The Doorway', who:C.cos, min:42, max:48, tags:['power','press'],
  src:'the gap between expansive assertion of executive power and durable achievement',
  text:'It is late and Deborah has stopped pretending to hold a folder. "Four years. Two hundred and seventeen ' +
       'orders, eleven emergencies, four hundred buildings with your name on them." She is not being cruel. ' +
       '"Sir, if I asked you which of it survives you, what would you say?"',
  choices:[
    { label:'"All of it. Because I am not going anywhere."', eff:{base:+8,congress:-11,courts:-10,press:-9,street:-9,auth:+16},
      res:'She writes it down. It is the sentence that opens every account of this administration written in the following forty years, and she is quoted for it.' },
    { label:'"The judges. The judges outlive everybody."', eff:{base:+4,courts:-4,congress:-3,auth:+11},
      res:'It is the correct answer. Two hundred and thirty-one lifetime appointments, average age forty-six, and it is the only thing here that is genuinely permanent.' },
    { label:'"Honestly? The two bills. Maybe."', eff:{congress:+11,courts:+9,press:+9,street:+7,base:-11,auth:-2},
      res:'Deborah does not say anything for a moment. Then she says "yes" and leaves, and it is the closest thing to approval you get in four years.' },
    { label:'"The ballroom."', eff:{base:+6,press:-5,congress:-4,courts:-4,auth:+3}, wild:true,
      res:'It is, in fairness, extremely likely to still be there. She concedes the point and neither of you mentions the conversation again.' }]},

/* ══════════════ LATE-TERM FRICTION ══════════════ */

{ id:'c-lame-duck', title:'The Word Nobody Says', who:C.poll, min:40, max:48, tags:['congress','press'],
  src:'the erosion of presidential leverage in the final phase of a term',
  text:'Nadia has the tell. "Four committee chairs did not return calls this week. Not hostile, busy. ' +
       'Sir, that is what it looks like. Nobody announces that they have stopped being afraid of you. ' +
       'They just start being busy."',
  choices:[
    { label:'Make an example of one of them. Publicly.', eff:{base:+7,congress:-11,press:-7,courts:-5,auth:+8},
      res:'He survives his primary by nine points and the other three stop returning calls entirely. Fear is a currency and you have just discovered the exchange rate.' },
    { label:'Give them something they want. Buy the last two years.', eff:{congress:+10,street:+6,press:+5,base:-7,cash:-0.3,auth:+3},
      res:'Four district projects and a committee chairmanship. It is transactional, unglamorous, and it gets you eleven more months of a working majority.' },
    { label:'Ignore it. Govern by order until the last day.', eff:{base:+5,congress:-7,courts:-6,press:-4,auth:+11},
      res:'You do not need them for an order, which is exactly why an order is worth so much less than the thing you can no longer get.' },
    { label:'Call all four at 3am to check they are well.', eff:{base:+3,congress:-5,press:-4,auth:+4}, wild:true,
      res:'All four answer. All four are extremely alarmed. Three of them return every call for the next six months and the fourth changes his number.' }]},

{ id:'c-library', title:'The Library', who:C.ethics, min:40, max:48, tags:['money','press'],
  src:'settlement proceeds and donations directed to a future presidential library foundation',
  text:'Miriam has the foundation accounts. "Four hundred and ten million, sir. From settlements, from ' +
       'donors with matters before the government, and from four foreign nationals." She sets them down. ' +
       '"It is a library. There is no disclosure requirement at all. That is not a loophole, it is just the law."',
  choices:[
    { label:'Take all of it. It is a library.', eff:{base:+4,press:-11,courts:-9,congress:-9,street:-6,cash:+0.6,auth:+9},
      res:'Nobody has ever successfully attacked anybody over a library. It is the single cleanest way to be handed money in American public life and it always has been.' },
    { label:'Publish every donor voluntarily.', eff:{press:+10,courts:+9,congress:+8,street:+6,base:-6,cash:-0.2,auth:-2},
      res:'Eleven donors withdraw within a fortnight, which tells you rather a lot about the eleven. The remaining list is dull and unimpeachable.' },
    { label:'Refuse foreign money. Take the rest.', eff:{press:+5,courts:+5,congress:+5,base:-2,cash:+0.4,auth:+3},
      res:'One line drawn in a place that is easy to defend and easy to verify. Miriam calls it "the minimum" and files it approvingly.' },
    { label:'Build the library with no books in it.', eff:{base:+4,press:-6,courts:-4,congress:-4,cash:+0.5,auth:+3}, wild:true,
      res:'A 90,000-square-foot facility containing four hundred photographs, a gift shop and a replica of the office. Attendance in year one exceeds every projection.' }]},

{ id:'c-pardon-list', title:'The List On The Last Page', who:C.lawyer, min:44, max:48, tags:['justice','power'],
  src:'the use of clemency at scale for political allies and associates',
  text:'Sy has the clemency list. "Forty-one names. Nine of them worked for you. Four of them declined to ' +
       'cooperate with investigations into you." He does not editorialise. "Sir, the power is unreviewable. ' +
       'There is no court, no vote and no appeal. It is the one thing in the Constitution with no check on it at all."',
  choices:[
    { label:'Sign all forty-one. On the last morning.', eff:{base:+8,courts:-13,congress:-12,press:-11,street:-9,auth:+13},
      res:'Unreviewable means unreviewable. Nothing happens to any of them, ever, and the message to everybody still holding a secret is received in full.' },
    { label:'Sign the nine with genuine sentencing disparities.', eff:{base:+4,courts:-4,congress:-3,press:-3,auth:+8},
      res:'Nine defensible cases, each with a memo. Two advocacy groups that hate you issue statements of support, which nobody expected including them.' },
    { label:'Sign none of them.', eff:{courts:+11,congress:+10,press:+9,street:+7,base:-12,auth:-4},
      res:'Four people who stayed silent for you go to prison anyway. Whether that is integrity or ingratitude is argued about for thirty years.' },
    { label:'Pardon everybody in the country, pre-emptively.', eff:{base:+5,courts:-12,congress:-10,press:-9,street:-6,auth:+7}, wild:true,
      res:'A blanket proclamation of universal clemency for all federal offences. It is signed at 4am and rescinded at 7am and it existed for three hours.' }]},

{ id:'c-guardrails', title:'What Held', who:C.hist, min:44, max:48, tags:['press','power'],
  src:'the scholarly finding that the essential distinguishing feature was that guardrails still functioned',
  text:'Dr Weir has come to say goodbye and has brought one page. "The literature\'s conclusion, as of now: ' +
       'courts still ruled against you and you sometimes complied. Elections happened and the opposition won ' +
       'some. The press was pressured and kept publishing." She hands it over. "Mr President, every one of those ' +
       'is a sentence about something that did not happen. That is what a guardrail is."',
  choices:[
    { label:'Then find the one that has not been tested.', eff:{base:+8,courts:-13,congress:-12,press:-11,street:-10,auth:+17},
      res:'There is always one. You spend the remaining months looking for it and the search itself is the most dangerous thing you do.' },
    { label:'Leave them standing. Take the win you have.', eff:{courts:+12,congress:+11,press:+11,street:+9,base:-13,auth:-7},
      res:'You are, at the end, a president who expanded the office enormously and left it a functioning one. It is the least satisfying possible outcome and the rarest.' },
    { label:'"They held because I let them." Say it publicly.', eff:{base:+7,courts:-8,congress:-8,press:-7,street:-6,auth:+11},
      res:'It is a boast that concedes everything. Four scholars quote it as the most revealing sentence of the administration and they are not wrong.' },
    { label:'Ask her to write it down as a list, so you can work through it.', eff:{base:+4,courts:-6,congress:-6,press:-5,street:-4,auth:+8}, wild:true,
      res:'She refuses, for the first time in four years, and does it in a single word. Then she takes her coat and leaves the building for the last time.' }]}

);
})();
