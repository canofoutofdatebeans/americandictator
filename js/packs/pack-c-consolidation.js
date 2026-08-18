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
  text:`Six to three, and written so a child could parse it. Sy has stopped taking notes. `+
       `"Sir, until today every fight was about what an order *means*. This one means one thing. `+
       `If you sit on it, that's the first time anyone has. And every scholar who studies this for a living `+
       `has already put it in print: this is the line."`,
  choices:[
    { label:'Do not comply. Say so out loud.', eff:{base:+9,courts:-18,congress:-14,press:-10,street:-11,auth:+18},
      res:`The republic does not fall that afternoon. Something quieter happens instead: every institution in the country privately recalculates what it can rely on, and not one of them publishes the new number.` },
    { label:'Comply, and attack the Court every day for a year.', eff:{base:+7,courts:-7,congress:-5,press:-5,auth:+9},
      res:`Obedience laced with contempt costs you nothing structural and buys you a year of grievance content. It's the move every one of your predecessors made too, just never this loudly.` },
    { label:'Comply. Fully. Say it was the right call.', eff:{courts:+14,congress:+11,press:+10,street:+9,base:-14,auth:-8},
      res:`You lose the policy and the week. Four scholars who'd already written that you wouldn't comply quietly issue corrections, and those corrections turn out to be the most valuable thing you own.` },
    { label:'Comply in a state that does not exist.', eff:{base:+4,courts:-11,congress:-8,press:-7,auth:+7}, wild:true,
      res:`The compliance filing names a jurisdiction that appears on no map. It gets docketed anyway. Four clerks spend a fortnight debating whether it's a typo or a manifesto.` }]},

{ id:'c-postpone', title:'The Date', who:C.cos, min:38, max:48, tags:['elections','power'],
  src:'the scholarly benchmark of cancelling, postponing or credibly rigging a national election',
  text:`Deborah has closed the door behind her. "There's an argument, a bad one, but an argument, that the `+
       `emergency authorities reach the administration of a federal election." She doesn't sit. "Sir, I've `+
       `worked for you four years. I want it on the record that I told you this is the one."`,
  choices:[
    { label:'Postpone it. Ninety days. For security.', eff:{base:+6,street:-17,courts:-16,congress:-15,press:-12,auth:+18},
      res:`Four governors announce they'll run the election anyway, on the original date, under state law they are fully entitled to invoke. The only open question is whether anyone shows up to stop them.` },
    { label:'Hold the election. Contest every close county after.', eff:{base:+7,courts:-9,congress:-8,street:-7,press:-6,auth:+11},
      res:`Fighting the count is a fight inside the system. Cancelling the count is not. That gap costs you nothing and turns out to be the whole distinction.` },
    { label:'Hold it on the date. Concede if you lose.', eff:{street:+13,courts:+12,congress:+11,press:+10,base:-13,auth:-9},
      res:`You say the sentence out loud, in advance, on camera. It outweighs everything else you've said in four years, and your own movement never quite forgives you for meaning it.` },
    { label:'Hold the election a week early, as a surprise.', eff:{base:+4,street:-11,courts:-10,congress:-9,press:-7,auth:+8}, wild:true,
      res:`Four states hear about it by mail. Turnout there lands at 19%, and every result is voided without anyone having to litigate a thing, because for once everybody agreed instantly.` }]},

{ id:'c-jail-opponent', title:'The Charge Sheet', who:C.ag, min:32, max:48, tags:['justice','courts'],
  src:'the scholarly benchmark of jailing a major opposition figure or journalist on pretextual charges',
  text:`Bo has a file on Cordelia Ruiz-Bloom and is holding it like it's still warm from the printer. "There's `+
       `a filing irregularity from 2019 and a process argument I'd be embarrassed to make out loud. It would `+
       `not survive a trial." He sets it down. "It doesn't have to survive a trial to keep her in a courthouse for two years."`,
  choices:[
    { label:'Charge her. Today. The process is the punishment.', eff:{base:+9,courts:-16,congress:-14,press:-13,street:-12,auth:+17},
      res:`She's acquitted in twenty-six months and, by then, the most famous opposition figure in the hemisphere. Four countries you routinely lecture about the rule of law bring her up first.` },
    { label:'Investigate. Do not charge. Let it sit.', eff:{base:+5,courts:-7,congress:-6,press:-6,street:-5,auth:+11},
      res:`An open file with no charge attached is the version that actually works: all the shadow, none of the trial, and nothing anyone can appeal.` },
    { label:'Close the file. Tell her you closed it.', eff:{courts:+12,congress:+10,press:+10,street:+8,base:-11,auth:-6},
      res:`She doesn't believe you for nine months. When she finally does, she says so publicly, and it's worth four points in a state you needed.` },
    { label:'Charge her with the 2019 filing error and nothing else.', eff:{base:+4,courts:-9,congress:-8,press:-8,street:-7,auth:+7}, wild:true,
      res:`A national opposition leader stands indicted over a clerical form. The maximum penalty is a $400 fine, which she pays in cash on the courthouse steps, on camera, and keeps the receipt.` }]},

{ id:'c-enabling', title:'The Delegation Bill', who:C.speaker, min:36, max:48, tags:['congress','power'],
  src:'the scholarly benchmark of a legislature passing an open-ended delegation of its own powers',
  text:`Hal Grimes has drafted something and looks like it's eating him alive. "Four pages. It hands you the `+
       `authority to modify or suspend any statute during a declared emergency, and you're the one who declares `+
       `the emergency." He sets it down. "I can get it through this chamber, sir. That's what terrifies me."`,
  choices:[
    { label:'Pass it. Both chambers. This month.', eff:{base:+8,congress:-18,courts:-15,press:-12,street:-11,auth:+20},
      res:`A legislature voting away its own function was the one item left on every scholar's checklist. It is now the only item that's been checked off.` },
    { label:'Pass a version with a two-year sunset.', eff:{base:+5,congress:-9,courts:-8,press:-6,street:-5,auth:+13},
      res:`A sunset clause is the entire difference between a delegation and an abdication. It quietly expires two years later, on schedule, because everyone forgets to renew it.` },
    { label:'Do not introduce it. Ask for four specific statutes instead.', eff:{congress:+11,courts:+9,press:+8,base:-8,auth:+6},
      res:`You get three of the four by ordinary vote. They're permanent, unchallengeable, and nobody ever writes a book chapter about them.` },
    { label:'Pass it and delegate the power straight back to Congress.', eff:{base:+3,congress:+7,courts:+5,press:+5,auth:-3}, wild:true,
      res:`A bill transferring power to you, and an order transferring it right back, both signed the same afternoon. Four constitutional scholars call it "a loop" and, wisely, leave it there.` }]},

/* ══════════════ ELECTIONS AND THE COUNT ══════════════ */

{ id:'c-vote-machines', title:'The Certification', who:C.gov, min:34, max:48, tags:['elections','courts'],
  src:'federal pressure on state certification of election results',
  text:`Four states haven't certified. Their governors span both parties and have said the identical thing: `+
       `certification is a state function and the count is the count. `+
       `Bo: "We can issue federal guidance instructing them to pause. It has no legal force. It has an enormous amount of the other kind."`,
  choices:[
    { label:'Issue the guidance. Instruct all four to pause.', eff:{base:+8,courts:-14,congress:-12,street:-11,press:-8,auth:+16},
      res:`Three certify anyway within a day. The fourth pauses for eleven, and its legislature comes within a hair of doing something still being litigated in 2039.`, breaks:'supremacy' },
    { label:'Send federal observers. No instruction.', eff:{base:+3,courts:-4,street:-4,congress:-3,auth:+8},
      res:`Observers watch a count and file a report saying it was, in fact, a count. It's the oldest and dullest tool in the box, and it works precisely because it is.` },
    { label:'Say nothing. Certification is theirs.', eff:{courts:+11,congress:+10,street:+9,press:+7,base:-10,auth:-4},
      res:`All four certify on schedule. Four years on, this is the single fact most often cited in your defence, and by people you would never have guessed.` },
    { label:'Certify the results yourself, from here.', eff:{base:+5,courts:-12,congress:-10,street:-9,press:-7,auth:+9}, wild:true,
      res:`A signed federal certificate for a state election gets transmitted to a state that already issued its own. Its secretary of state files it under "correspondence."` }]},

{ id:'c-electors', title:'The Alternate Slate', who:C.lawyer, min:36, max:48, tags:['elections','courts'],
  src:'the use of alternate elector slates and pressure on certification of electoral votes',
  text:`"A second slate of electors has been assembled in three states." Sy is reading from a document he `+
       `plainly wishes had never crossed his desk. "No legal basis. Signed forms. Sir, the entire theory is `+
       `that a signed form manufactures a controversy, and a controversy manufactures a choice."`,
  choices:[
    { label:'Transmit all three slates. Let Congress choose.', eff:{base:+8,courts:-15,congress:-14,street:-11,press:-9,auth:+17},
      res:`Four of the people who signed those forms are prosecuted by their own states within two years. Not one of them was told that was on the table.` },
    { label:'Transmit them but disclaim any legal effect.', eff:{base:+5,courts:-7,congress:-6,street:-5,press:-4,auth:+10},
      res:`A disclaimed slate is a press release with notarisation stapled on. It generates all of the grievance and none of the indictments.` },
    { label:'Repudiate the slates. Publicly. By name.', eff:{courts:+12,congress:+11,street:+9,press:+9,base:-13,auth:-6},
      res:`You quietly spare forty-one people criminal exposure they will never know they had, because the thing you prevented never gets a name.` },
    { label:'Assemble a third slate that votes for the opposition.', eff:{base:+3,courts:-8,congress:-7,street:-5,auth:+5}, wild:true,
      res:`Submitted purely to muddy the record, and it succeeds beyond all reasonable expectation. Nobody, on any side, can account for it for nine months.` }]},

{ id:'c-third-term-poll', title:'The Question On The Poll', who:C.poll, min:38, max:48, tags:['elections','power'],
  src:'public musings about a third term and the twenty-second amendment',
  text:`Nadia Fisk has run the number. "Forty-one per cent of your own voters say you should stay past the `+
       `limit. Not 'would consider.' 'Should.'" She looks up. "Sir, I did not put that question on the `+
       `survey. Somebody in your operation asked me to, and I want that on the record."`,
  choices:[
    { label:'Publish the number. Let it do the work.', eff:{base:+9,courts:-10,congress:-10,press:-8,street:-8,auth:+14},
      res:`A number isn't a proposal, which is exactly why it's more useful than one. Nobody has to defend it and everybody has to answer for it.` },
    { label:'Bury the poll. Never run that question again.', eff:{courts:+8,congress:+8,press:+6,base:-7,auth:-2},
      res:`Nadia deletes the crosstabs herself. Four people in the building know the number, and none of them ever say it out loud again.` },
    { label:'"Two terms is what the office is." Say it once.', eff:{courts:+11,congress:+10,press:+9,street:+7,base:-12,auth:-5},
      res:`One flat sentence ends nine months of speculation in a single news cycle. Your movement mourns it like a death in the family.` },
    { label:'Run the question about a fourth term as well.', eff:{base:+6,courts:-9,congress:-8,press:-7,auth:+6}, wild:true,
      res:`It polls at 29%, somehow both lower and higher than anyone predicted. Nadia calls it "the worst number I have ever personally produced."` }]},

{ id:'c-term-reset', title:'The Amendment That Reset The Clock', who:C.hist, min:34, max:48, tags:['power','elections'],
  src:'a foreign leader resetting his own term limits by constitutional amendment',
  text:`Dr Weir has brought the comparative material. "It was done properly. A constitutional amendment, `+
       `a referendum, a genuine majority. The clock reset to zero and the terms already served simply `+
       `stopped counting." She closes the folder. "Mr President, that is not a coup. That is paperwork."`,
  choices:[
    { label:'Start the amendment process. Publicly.', eff:{base:+8,courts:-13,congress:-13,press:-10,street:-10,auth:+16},
      res:`It requires thirty-eight states and you have nineteen. The attempt is worth more to you than the amendment ever would have been, and everyone involved knows it.` },
    { label:'Have a friendly state legislature propose it. Stay out of it.', eff:{base:+6,courts:-8,congress:-8,press:-6,street:-5,auth:+12},
      res:`You didn't ask. It was proposed. That distinction is the load-bearing wall of the entire enterprise, and it holds for two full years.` },
    { label:'"That is what other countries do." Leave it there.', eff:{courts:+10,congress:+9,press:+8,street:+6,base:-10,auth:-4},
      res:`Drawing the line at somebody else's constitution is the cheapest patriotism on the shelf, and on this particular occasion it happens to be sincere.` },
    { label:'Propose an amendment shortening the term to two years.', eff:{base:+3,courts:+5,congress:+5,press:+6,auth:-3}, wild:true,
      res:`Nobody can determine whether it's a bluff, a trap, or a genuine conviction. It picks up four co-sponsors and dies quietly in committee, unexplained to the last.` }]},

/* ══════════════ THE CULT ══════════════ */

{ id:'c-gold-room', title:'The Refurbishment', who:C.usher, min:24, max:48, tags:['vanity','press'],
  src:'a gilded refurbishment of the presidential office',
  text:`Alvin has the invoices and the before-and-after photographs laid out. "Gold leaf on the cornice, the `+
       `door surrounds, the mantel and the eagle. Reversible, sir, in the sense that any of it can technically `+
       `be pried back off." He hesitates. "Every visitor who walks in photographs it immediately."`,
  choices:[
    { label:'More gold. The mouldings, the mirror, the frames.', eff:{base:+7,press:-9,street:-7,congress:-6,courts:-5,cash:-0.3,auth:+9},
      res:`A room that reads as a throne room, in a building specifically designed not to have one. It turns up in nine hundred foreign news packages within the year.` },
    { label:'Stop where it is. It is enough.', eff:{base:+3,press:-3,auth:+5},
      res:`A moderate amount of gold reads as taste. A large amount reads as an argument, and you've stopped one coat of paint short of making it.` },
    { label:'Strip it back. Restore the room.', eff:{press:+8,street:+7,congress:+6,courts:+5,base:-8,cash:-0.2,auth:-3},
      res:`Alvin supervises the restoration personally and, for the first time in four years, looks genuinely happy. Nobody outside the building notices at all.` },
    { label:'Gild the Cabinet Room, the corridor and the lift.', eff:{base:+5,press:-8,street:-6,congress:-5,cash:-0.5,auth:+5}, wild:true,
      res:`The lift is the detail that does the actual damage. Four hundred thousand people share one photo of a gilded elevator, and not one of them is on your side.` }]},

{ id:'c-birthday', title:'The Free Admission Day', who:C.sched, min:28, max:48, tags:['vanity','street'],
  src:'a presidential birthday designated as a free-admission holiday at national sites',
  text:`Boyd Hackler has the proclamation drafted and ready to sign. "Free admission at every national park `+
       `and monument, on your birthday, in perpetuity." He shifts his weight. "Sir, free park admission is `+
       `genuinely popular. The date is the whole problem, and there are three hundred and sixty-four other options."`,
  choices:[
    { label:'Sign it. My birthday.', eff:{base:+8,press:-8,street:-6,congress:-6,courts:-4,auth:+9},
      res:`Four million people get a free national park day on a date chosen for one man. Most of them have a lovely afternoon, and every photo of it gets a cruel caption.` },
    { label:'Sign it for Independence Day instead.', eff:{base:+3,press:+6,street:+7,congress:+5,auth:+2},
      res:`The identical policy, universally popular, credited to nobody in particular. Boyd files it as a win and privately mourns it as a loss.` },
    { label:'No holiday. Fund the parks properly instead.', eff:{street:+9,press:+8,congress:+6,courts:+4,base:-7,cash:-0.3,auth:-1},
      res:`Eleven backlogged maintenance projects get finished. A bridge in Montana gets rebuilt. Nobody ever traces a single beam of it back to you.` },
    { label:'Sign it, and make attendance compulsory.', eff:{base:+4,street:-10,press:-8,congress:-7,courts:-6,auth:+5}, wild:true,
      res:`The word "compulsory" survives four drafts and two legal reviews before somebody finally catches it at 11pm, the night before it goes to print.` }]},

{ id:'c-name-on-buildings', title:'The Signage Contract', who:C.cos, min:26, max:48, tags:['vanity','money'],
  src:'the placement of a president\'s name and likeness on government buildings and property',
  text:`"A signage contract for four hundred federal buildings." Deborah reads the spec aloud. "Your name, `+
       `above the door, in bronze, one metre tall. Sir, the buildings are named after people who are `+
       `dead. That isn't a rule. It's just, historically, what everybody has always done."`,
  choices:[
    { label:'All four hundred. Bronze. One metre.', eff:{base:+8,press:-10,street:-8,congress:-7,courts:-6,cash:-0.4,auth:+11},
      res:`Four hundred buildings now carry a living man's name. Taking them back down later runs $60 million, a number every future administration will love repeating.` },
    { label:'Four buildings. The ones we actually built.', eff:{base:+4,press:-3,street:-2,auth:+6},
      res:`Naming a thing you built after yourself is unremarkable. Naming things you didn't is the part that reads very differently, and you've steered around it.` },
    { label:'None. The buildings keep the names they have.', eff:{press:+8,street:+7,congress:+6,courts:+5,base:-8,auth:-3},
      res:`Deborah logs the decision in the file with a single word, "declined," and it is the entry she is proudest of in four years.` },
    { label:'Name them all after your predecessors, alphabetically.', eff:{base:+3,press:+5,street:+4,congress:+5,cash:-0.3,auth:-1}, wild:true,
      res:`Bewildering, expensive, and somehow entirely charming. Four historical societies write in to say so, and one of them sends a cake.` }]},

{ id:'c-invasion-within', title:'The Room Full Of Generals', who:C.gen, min:30, max:48, tags:['military','rhetoric'],
  src:'an address to assembled senior officers describing the country as under invasion from within',
  text:`Every flag officer in the service is in one room because you asked for them personally. Tarrant has `+
       `the draft and one note. "Sir, the phrase is 'invasion from within.' You'll be saying it to four hundred `+
       `people who've spent entire careers learning exactly who they are, and are not, permitted to point a weapon at."`,
  choices:[
    { label:'Say it. Watch the room.', eff:{base:+8,street:-13,courts:-10,congress:-10,press:-8,auth:+13},
      res:`Nobody stands. Nobody leaves. Four hundred officers sit in total silence, and every single one of them phones somebody about it that same night.` },
    { label:'Say it, then say you mean the political argument.', eff:{base:+5,street:-6,congress:-5,courts:-5,press:-4,auth:+9},
      res:`The clarification gets buried under the phrase, as clarifications always do, but it survives in the transcript, and Tarrant makes sure it circulates anyway.` },
    { label:'Cut it. Talk about recruitment and pay.', eff:{street:+9,congress:+8,press:+7,courts:+6,base:-9,auth:+1},
      res:`Twenty minutes on housing allowances to four hundred generals. Best-received speech you give all term, and it receives absolutely no coverage whatsoever.` },
    { label:'Ask the room who among them is the invasion.', eff:{base:+4,street:-11,congress:-9,courts:-8,press:-7,auth:+7}, wild:true,
      res:`One general raises his hand. Nobody has since determined whether it was insubordination or comedy, and he has declined every request to clarify.` }]},

{ id:'c-monarch', title:'"Functionally A Monarch"', who:C.hist, min:32, max:48, tags:['press','power'],
  src:'a historian describing the office as having become functionally monarchical',
  text:`A historian on television used two words: functionally a monarch. Dr Weir was watching. `+
       `"He wasn't being rude, Mr President. He meant it structurally, an office with no effective `+
       `check left operating on it. He said it sadly, and that's exactly what made it land."`,
  choices:[
    { label:'Embrace it. Have it printed.', eff:{base:+8,press:-10,courts:-9,congress:-9,street:-8,auth:+12},
      res:`A merchandise line built on a warning label. It sells extraordinarily well and gets quoted, entirely without irony, in three foreign parliaments discussing their own leaders.` },
    { label:'Reject it. List the things that have stopped you.', eff:{courts:+9,congress:+8,press:+8,street:+6,base:-8,auth:-3},
      res:`You name four court losses and a failed bill, accurately, from memory. Most persuasive thing you do all year, and your base hates every syllable of it.` },
    { label:'Say nothing. It is one historian.', eff:{press:+4,courts:+3,base:-2,auth:+4},
      res:`It becomes a chapter title in eleven months and a book title in three years, and by then your silence has stopped being relevant to anyone.` },
    { label:'Request a crown, formally, in writing.', eff:{base:+5,press:-9,courts:-8,congress:-8,street:-6,auth:+5}, wild:true,
      res:`A memo to the Office of the Curator inquires what would be involved. The four-hundred-word reply takes the question with total, unsettling seriousness.` }]},

/* ══════════════ THE COMPARISONS ══════════════ */

{ id:'c-restored-republic', title:'Restoring The Republic', who:C.hist, min:34, max:48, tags:['power','press'],
  src:'the Augustan template of theatrically restoring republican forms while retaining real power',
  text:`"He gave it all back." Dr Weir is describing a man dead two thousand years. "Publicly, formally, `+
       `in the senate house, every extraordinary power, surrendered on the spot. Then he kept two ordinary `+
       `ones for life, and those two turned out to be sufficient." She pauses. "It is the most successful `+
       `political manoeuvre ever performed, Mr President, and it looked exactly like a resignation."`,
  choices:[
    { label:'Do it. Surrender the emergency powers. Keep the two that matter.', eff:{base:-6,courts:+12,congress:+12,press:+13,street:+10,auth:+16},
      res:`The coverage is euphoric and almost entirely wrong. You've given up thirty-nine things you never actually used and quietly kept the two that do the work.` },
    { label:'Surrender them all. Genuinely.', eff:{courts:+14,congress:+13,press:+12,street:+11,base:-14,auth:-11},
      res:`Not a manoeuvre. An actual restoration, done properly, and it costs you everything you spent four years accumulating. Dr Weir writes about it for the rest of her career.` },
    { label:'Keep everything. The theatre is for weaker men.', eff:{base:+7,courts:-9,congress:-9,press:-8,street:-7,auth:+11},
      res:`The other man in the story kept everything openly and got stabbed by his own senate for it. Dr Weir mentions this; you tell her it was a different situation entirely.` },
    { label:'Surrender them in Latin.', eff:{base:+4,press:-5,courts:-4,congress:-4,auth:+5}, wild:true,
      res:`The proclamation is issued in Latin only. Four classicists find three grammatical errors, and one of them produces 6,000 words on the subjunctive alone.` }]},

{ id:'c-acerbo', title:'The Two-Thirds Rule', who:C.speaker, min:32, max:48, tags:['congress','elections'],
  src:'an interwar election law awarding a supermajority of seats to the largest party',
  text:`Hal has been shown something from 1923 and cannot unsee it. "A change to the election law. Whichever `+
       `party comes first, by any margin, however slim, takes two-thirds of the seats." He's pale. "It was `+
       `passed by a parliament that then had nothing left to pass. Sir, I'm showing you this so you've seen it."`,
  choices:[
    { label:'Draft the American version. Introduce it.', eff:{base:+7,congress:-17,courts:-14,press:-12,street:-11,auth:+18},
      res:`It doesn't pass. It gets introduced, which means it now exists, which means it can be introduced again, someday, by someone with fewer scruples than you.` },
    { label:'Redistrict aggressively instead. Same result, ordinary tools.', eff:{base:+6,congress:-8,courts:-8,press:-6,street:-6,auth:+12},
      res:`Nine states redrawn right up to the legal limit. Entirely conventional, entirely brutal, and both parties have been doing it for two centuries.` },
    { label:'Nothing. Win the seats or do not.', eff:{congress:+11,courts:+10,press:+9,street:+8,base:-10,auth:-4},
      res:`You lose eleven seats you'd otherwise have kept. What remains is a chamber that can still, technically, say no to you, and in nineteen months it does.` },
    { label:'Award two-thirds of the seats to whoever comes second.', eff:{base:+3,congress:-7,courts:-6,press:-5,auth:+5}, wild:true,
      res:`Proposed purely to illustrate the arbitrariness. Four members co-sponsor it sincerely, and one delivers a floor speech in its favour that is genuinely moving.` }]},

{ id:'c-judicial-purge', title:'Four Thousand', who:C.cj, min:34, max:48, tags:['courts','justice'],
  src:'a foreign purge of thousands of judges and prosecutors after a claimed emergency',
  text:`Chief Justice Stone has come in person and brought a printout. "Four thousand judges and prosecutors, `+
       `removed in a single year, in a country that still holds elections. A hundred and fifty journalists jailed." `+
       `She sets it on your desk. "I'm not accusing you of anything, Mr President. I'm telling you what it looks like `+
       `from the inside, because the people it happened to didn't see it coming either."`,
  choices:[
    { label:'Begin a review of federal judicial conduct. All of it.', eff:{base:+7,courts:-17,congress:-13,press:-11,street:-10,auth:+17},
      res:`Nobody is removed. Nine hundred judges are now simply people with a file, and a judge with a file rules differently, which was the only outcome anyone ever needed.` },
    { label:'Review the eleven who have ruled against us most.', eff:{base:+5,courts:-10,congress:-7,press:-6,street:-5,auth:+12},
      res:`Targeting the visible ones is worse than targeting everybody, because the pattern reads clearly from day one, and nine outlets run the list by lunchtime.` },
    { label:'Thank her. Do nothing at all.', eff:{courts:+13,congress:+9,press:+8,street:+7,base:-9,auth:-4},
      res:`She never brings the conversation up again. Two years later, in a case you badly need, she writes an unexpected concurrence, and you never learn why.` },
    { label:'Offer to be reviewed by the judiciary instead.', eff:{base:+3,courts:+7,congress:+5,press:+6,auth:-2}, wild:true,
      res:`A formal request that the judicial conference examine your own conduct. It's accepted. It reports back in four years, by which point it's somebody else's problem.` }]},

{ id:'c-crossed-over', title:'The Paper That Says We Crossed', who:C.hist, min:30, max:48, tags:['press','power'],
  src:'comparative political scientists classifying the country as having crossed into competitive authoritarianism',
  text:`Dr Weir has the paper. "They argue the country stopped being a full democracy, not that it became `+
       `a dictatorship, that it slid into a different category entirely. And they say the turn was faster than `+
       `the first year of four cases they name by name." She sets it down. "Mr President, their word is `+
       `*competitive*. The elections are still real. That's the whole distinction, and it's doing a lot of work."`,
  choices:[
    { label:'Prove them right. Lean into every one of it.', eff:{base:+8,courts:-11,congress:-11,press:-10,street:-9,auth:+15},
      res:`The paper gets a new section in the second edition. You're cited forty-one times, and not one of the citations is kind.` },
    { label:'Prove them wrong. Do one thing they said you would not.', eff:{courts:+12,congress:+11,press:+11,street:+9,base:-12,auth:-6},
      res:`You comply with a ruling you could easily have fought, and lose a policy you wanted. Two of the four authors publicly note it, the only correction they ever issue about you.` },
    { label:'Attack the methodology. Fund a rival index.', eff:{base:+7,press:-9,courts:-7,congress:-7,street:-6,cash:-0.4,auth:+8},
      res:`Your index ranks the country fourth in the world. Nobody cites it, including, eventually, the people you paid to build it.` },
    { label:'Ask them what score would fix it, then game exactly that.', eff:{base:+4,courts:+4,congress:+4,press:-5,street:-3,auth:+6}, wild:true,
      res:`They answer honestly, in detail, because that's what academics do. You improve nine indicators without changing a single real thing, and the score creeps up four points.` }]},

{ id:'c-index-drop', title:'Fifty-First', who:C.state, min:28, max:48, tags:['foreign','press'],
  src:'an international democracy index dropping the country out of its top classification in a single year',
  text:`Muriel has the index open. "Twentieth to fifty-first in one year. Out of the top classification for `+
       `the first time in over fifty years." She turns the page. "The line every foreign ministry keeps `+
       `re-reading is the one about the *speed*, sir. They're calling it unprecedented in modern history."`,
  choices:[
    { label:'Withdraw from the body that funds the index.', eff:{base:+6,press:-9,street:-7,congress:-7,courts:-6,auth:+9},
      res:`It's an academic consortium at a Swedish university, and you don't fund it. The attempt to defund it anyway makes headlines in forty countries.` },
    { label:'Dispute the ranking. Ignore the speed.', eff:{base:+4,press:-5,street:-4,congress:-4,auth:+6},
      res:`Nobody was ever going to argue about the ranking itself. The argument was always the gradient, and you've just declined to have it.` },
    { label:'Publish the sub-scores and address the worst three.', eff:{press:+9,courts:+8,congress:+7,street:+6,base:-8,auth:-3},
      res:`Judicial independence, press access, oversight capacity. Fixing three indicators takes eleven months and lifts you back to thirty-fourth.` },
    { label:'Ask to be ranked in a different category entirely.', eff:{base:+3,press:-5,street:-4,congress:-3,auth:+4}, wild:true,
      res:`A formal request that the country be assessed as an emerging democracy rather than an established one. Politely declined, in four separate languages.` }]},

/* ══════════════ ENFORCEMENT, LATE ══════════════ */

{ id:'c-insurrection-act', title:'The Act With No Definition', who:C.gen, min:32, max:48, tags:['military','street'],
  src:'reliance on an insurrection statute with no statutory definition of insurrection',
  text:`"The statute never defines insurrection." Tarrant states it flatly, as a fact rather than an argument. `+
       `"It says you may act once you decide there is one. No test, no threshold, and no court has `+
       `ever second-guessed the call." He waits. "Sir, that's the widest authority left in American law, `+
       `and you'd be the first person in fifty-eight years to actually use it this way."`,
  choices:[
    { label:'Invoke it. Nationwide.', eff:{base:+8,street:-18,courts:-14,congress:-13,press:-10,auth:+19},
      res:`Regular troops on American streets under a statute with no definition and no reviewer. It's the most legal thing you ever do, and it feels like nothing else you've done.`, breaks:'posse' },
    { label:'Invoke it for one city. Twenty-one days. Written limit.', eff:{base:+6,street:-9,courts:-8,congress:-7,press:-5,auth:+13},
      res:`A limit you impose on yourself is the only limit anywhere in the statute. Tarrant writes the twenty-one days into the order personally, and thanks you for it.` },
    { label:'Do not invoke it. Use the Guard under state control.', eff:{street:+11,courts:+10,congress:+9,press:+7,base:-9,auth:-2},
      res:`Slower, and it works, because governors with a stake in the outcome turn out to be more useful than soldiers holding an order.` },
    { label:'Invoke it against the weather.', eff:{base:+4,street:-8,courts:-7,congress:-6,auth:+6}, wild:true,
      res:`The proclamation names a hurricane as the insurrection. FEMA and Northern Command hold a joint call solely to establish which of them has just been tasked with it.` }]},

{ id:'c-registry', title:'The List Of Everybody', who:C.home, min:30, max:48, tags:['security','street'],
  src:'the assembly of a consolidated federal registry from separately-held data holdings',
  text:`Duane Krisp has a proposal from a contractor. "Every federal database, merged. Tax, benefits, travel, `+
       `licences, immigration status. Each one lawful on its own." He sets it down. "Sir, together it's `+
       `a single file on three hundred and forty million people, and nobody ever voted on the together part."`,
  choices:[
    { label:'Build it. All of it. One file.', eff:{base:+6,street:-15,courts:-14,congress:-11,press:-10,auth:+17},
      res:`It works exactly as promised and gets queried nine million times in its first year. Four of those queries later turn out to have been about journalists.`, breaks:'search' },
    { label:'Merge only the immigration-relevant sets.', eff:{base:+5,street:-7,courts:-7,congress:-5,press:-4,auth:+11},
      res:`A narrower system with a stated purpose, which is the only kind that ever survives a court challenge. It also does 80% of what you actually wanted.` },
    { label:'Kill it. Write a rule against consolidation.', eff:{street:+12,courts:+11,congress:+9,press:+9,base:-10,auth:-5},
      res:`The rule outlives your administration by decades, and the contractor sues for its development costs and loses badly.` },
    { label:'Build it and put it on a public website.', eff:{base:+3,street:-13,courts:-12,congress:-10,press:-8,auth:+6}, wild:true,
      res:`Radical transparency taken to its logical end. It stays live for eleven minutes, which is nine minutes longer than it took to be archived forever.` }]},

{ id:'c-data-center', title:'The Facility In The Desert', who:C.spy, min:34, max:48, tags:['security','courts'],
  src:'bulk data retention capacity outstripping the legal rules governing its use',
  text:`Errol Hance has the site plan. "Storage is effectively unlimited now. We can keep everything, `+
       `forever, on the theory that we might one day need it." He doesn't sit. `+
       `"Sir, the rules were written back when storage was expensive. The rules assumed we'd still have to choose."`,
  choices:[
    { label:'Keep everything. Forever. Decide later why.', eff:{base:+5,street:-14,courts:-14,congress:-11,press:-9,auth:+17},
      res:`A permanent record of an entire country, held against a purpose not yet invented. Four future administrations inherit it, and not one of them deletes a byte.`, breaks:'search' },
    { label:'Keep it, with a five-year deletion schedule.', eff:{base:+3,street:-6,courts:-5,congress:-4,press:-3,auth:+10},
      res:`A retention limit is the only meaningful brake on a system like this, and it costs nothing to impose while the building's still half-empty.` },
    { label:'Collect only against an identified purpose.', eff:{street:+11,courts:+12,congress:+9,press:+8,base:-9,auth:-5},
      res:`Errol argues against it for twenty straight minutes, then implements it flawlessly, which is exactly what he does with every decision he loses.` },
    { label:'Fill the facility with the paperwork instead.', eff:{base:+3,street:-5,courts:-5,congress:-4,auth:+5}, wild:true,
      res:`Four million cubic feet of printed records, shipped in by rail over nine months. Entirely secure and entirely unsearchable, which certain people vastly prefer.` }]},

/* ══════════════ THE INSTITUTIONS, LATE ══════════════ */

{ id:'c-church', title:'The National Service', who:C.pastor, min:26, max:48, tags:['culture','street'],
  src:'the formal entanglement of a particular faith with the machinery of the state',
  text:`Reverend Dale Muncy has a proposal and, uncharacteristically, is hedging. "A weekly service, in the `+
       `building, broadcast, with an office funded from the budget." He turns his hat over in his hands. `+
       `"Sir, I'd come. I want to be honest that I'm not entirely sure I should be the one you're asking."`,
  choices:[
    { label:'Fund the office. Broadcast the service. Weekly.', eff:{base:+9,courts:-12,street:-10,press:-9,congress:-7,auth:+13},
      res:`Four denominations that backed you object first and loudest, because they've read considerably more history on this than anyone in your office has.`, breaks:'religion' },
    { label:'Hold the service. No federal funding, no office.', eff:{base:+5,courts:-4,street:-3,press:-3,auth:+7},
      res:`A private service in a private residence, exactly the thing every occupant of the building has always been entitled to do.` },
    { label:'Invite eleven faiths in rotation. Fund none of them.', eff:{base:+3,courts:+7,street:+7,press:+6,congress:+5,auth:+2},
      res:`A rotation that irritates everybody equally and offends nobody legally. Dale takes the fourth Sunday and calls it the fairest arrangement on offer.` },
    { label:'Declare yourself the head of a new denomination.', eff:{base:+4,courts:-10,street:-9,press:-8,congress:-6,auth:+6}, wild:true,
      res:`Articles of incorporation are literally filed in Delaware. Nine thousand people sign up within a fortnight, and Dale resigns that same afternoon.` }]},

{ id:'c-broadcast-license', title:'The Renewal Hearing', who:C.press, min:30, max:48, tags:['press','courts'],
  src:'a licence renewal used as leverage against a broadcaster\'s editorial output',
  text:`A licence renewal is due, and your regulator has scheduled a hearing on "public interest obligations." `+
       `Kaylee: "The renewal is routine, sir. It's been routine for sixty years. Scheduling a hearing about it `+
       `is the entire message, and everyone in the industry received it before nine this morning."`,
  choices:[
    { label:'Hold the hearing. Put the licence genuinely at risk.', eff:{base:+7,press:-17,courts:-13,congress:-10,street:-9,auth:+15},
      res:`The licence is renewed. In the eleven months it took, the network quietly replaced two anchors and an executive producer, and nobody had to ask them to.`, breaks:'speech' },
    { label:'Hold the hearing. Renew at the end of it.', eff:{base:+4,press:-7,courts:-5,congress:-4,auth:+9},
      res:`A process with a foregone conclusion still costs them a year's legal budget and a year of caution, which is most of what you actually wanted anyway.` },
    { label:'Renew it on the nod, like the other sixty years.', eff:{press:+11,courts:+9,congress:+7,street:+6,base:-9,auth:-3},
      res:`Nothing happens. It's the textbook handling of a licence renewal, and it appears in precisely no newspaper on earth.` },
    { label:'Award the licence to a network that does not exist.', eff:{base:+4,press:-11,courts:-9,congress:-7,auth:+6}, wild:true,
      res:`A shell applicant with a PO box wins a major-market licence. It broadcasts a test card for four months before anyone at the agency notices.` }]},

{ id:'c-cabinet-25', title:'The Twenty-Fifth', who:C.vp, min:34, max:48, tags:['power','congress'],
  src:'the constitutional mechanism for removal by the vice president and a majority of the cabinet',
  text:`Chet Danforth has asked for a private meeting and brought nobody with him. "There's a mechanism," `+
       `he says, carefully, "that needs me and a majority of the Cabinet. I want you to know four people `+
       `have already raised it with me, and I told all four of them no." He pauses. "I'm telling you I told them no."`,
  choices:[
    { label:'Replace the four. And replace Chet.', eff:{base:+6,congress:-14,courts:-10,press:-9,street:-7,auth:+15},
      res:`A Cabinet now hand-picked exclusively for its unwillingness to remove you. Every decision it makes from here on is made by people chosen for that one quality.`, breaks:'consent' },
    { label:'Replace the four. Keep Chet where you can see him.', eff:{base:+4,congress:-8,courts:-6,press:-5,auth:+11},
      res:`He stays, having told you the truth once, in a job where doing so has just been proven survivable. He does it twice more before the term ends.` },
    { label:'Thank him. Change nothing.', eff:{congress:+9,courts:+7,press:+6,street:+5,base:-6,auth:+3},
      res:`The mechanism never comes up again, from anybody, for the rest of the term. Whether that's loyalty or simple arithmetic, you'll never quite be able to say.` },
    { label:'Invoke it against yourself to see what happens.', eff:{base:+3,congress:-7,courts:-5,press:-6,auth:+4}, wild:true,
      res:`A letter declaring your own incapacity is drafted and, catastrophically, actually transmitted. Chet is acting president for fifty-one minutes and does nothing whatsoever with it.` }]},

{ id:'c-treaty', title:'The Agreement That Was Not A Treaty', who:C.state, min:30, max:48, tags:['foreign','congress'],
  src:'binding international commitments concluded as executive agreements rather than ratified treaties',
  text:`Muriel has the instrument. "Basing rights, a mutual security clause, a forty-year term. `+
       `Call it a treaty and it needs sixty-seven senators we don't have. Call it an executive `+
       `agreement and it needs your signature." She looks up. "Sir, it is the identical document either way."`,
  choices:[
    { label:'Sign it as an executive agreement. Forty years.', eff:{base:+5,congress:-14,courts:-11,press:-8,street:-6,auth:+15},
      res:`A forty-year mutual security commitment, made by one man in an afternoon. The other country treats it as binding, which is the part nobody can ever undo.`, breaks:'presentment' },
    { label:'Send it as a treaty. Fight for the sixty-seven.', eff:{congress:+12,courts:+10,press:+8,base:-9,auth:+4},
      res:`You land seventy-one votes after nine humiliating months of negotiation. Unbreakable by any successor, something no executive agreement has ever managed.` },
    { label:'Sign a five-year version. Leave the rest to Congress.', eff:{base:+3,congress:-5,courts:-4,press:-3,auth:+9},
      res:`A short agreement that buys time for a real treaty later. Muriel calls it the professional answer and means it as genuine praise.` },
    { label:'Sign it as a treaty, an agreement and a memo, simultaneously.', eff:{base:+3,congress:-8,courts:-7,press:-5,auth:+6}, wild:true,
      res:`Three instruments, identical text, three different legal statuses. The other country ratifies all three, a possibility nobody had actually planned for.` }]},

{ id:'c-emergency-extend', title:'The Renewal Nobody Reads', who:C.lawyer, min:32, max:48, tags:['power','congress'],
  src:'the indefinite annual renewal of emergency declarations without review',
  text:`"The declaration renews automatically unless you say otherwise, and Congress may terminate it by `+
       `resolution, which it won't." Sy has the form ready. "One signature, sir. Fourth renewal. `+
       `The original emergency ended, in any ordinary sense of the word, about two years ago."`,
  choices:[
    { label:'Renew it. And the other eleven.', eff:{base:+5,congress:-13,courts:-11,press:-8,street:-8,auth:+16},
      res:`Twelve emergencies, none of them emergencies, all of them load-bearing. The powers are simply how the country is governed now, and nobody ever voted for that.`, breaks:'vesting' },
    { label:'Renew the four still doing real work.', eff:{base:+3,congress:-5,courts:-4,press:-3,auth:+10},
      res:`Letting eight lapse gets reported as weakness by your own side and as sanity by everybody else. Both readings are available and neither is wrong.` },
    { label:'Let them all lapse. Govern by statute.', eff:{congress:+13,courts:+12,press:+9,street:+8,base:-11,auth:-8},
      res:`You surrender the machinery voluntarily. Four policies collapse instantly, and the two that survive turn out to be the only two that were ever real.` },
    { label:'Renew it for a hundred years.', eff:{base:+4,congress:-9,courts:-8,press:-6,auth:+7}, wild:true,
      res:`The instrument specifies an expiry date somewhere in the twenty-second century. It gets published. Nobody at the Federal Register is empowered to question it.` }]},

/* ══════════════ THE LONG SHADOW ══════════════ */

{ id:'c-lincoln', title:'The Precedent You Would Prefer', who:C.hist, min:30, max:48, tags:['press','power'],
  src:'the comparison to wartime presidents who suspended rights and defied courts',
  text:`"Your defenders keep reaching for one particular president," says Dr Weir. "He suspended habeas corpus, `+
       `effectively ignored a sitting Supreme Court justice, and considered postponing an election." She lets `+
       `it sit there. "Mr President, the comparison is accurate. It's also a comparison to a man doing all `+
       `that during a civil war, and I would lean on the parallel very carefully if I were you."`,
  choices:[
    { label:'Lean on it constantly. He is on the money.', eff:{base:+7,press:-8,courts:-7,congress:-6,street:-6,auth:+10},
      res:`Every historian asked replies with the same three words about the war, and those three words are unanswerable, and you keep reaching for the comparison anyway.` },
    { label:'Drop the comparison. Find a peacetime one.', eff:{press:+7,courts:+6,congress:+5,base:-5,auth:+4},
      res:`There isn't one, which is the actual finding, and Dr Weir doesn't bother saying it out loud because she doesn't have to.` },
    { label:'Argue there *is* an emergency, and name it.', eff:{base:+8,press:-9,courts:-9,congress:-8,street:-8,auth:+13},
      res:`Naming an emergency is the necessary predicate for everything after it, and once named, it can never quietly be un-named without surrendering all of it back.` },
    { label:'Ask her which president you most resemble.', eff:{base:-4,press:+6,courts:+5,congress:+4,auth:-2}, wild:true,
      res:`She answers instantly, without a shred of hedging, naming somebody from the 1850s nobody in the room has heard of. It takes four days to grasp how brutal that was.` }]},

{ id:'c-fdr', title:'Four Terms', who:C.hist, min:32, max:48, tags:['elections','power'],
  src:'the comparison to a president who served four terms and was rebuffed on court expansion',
  text:`Dr Weir has the other comparison ready. "Twelve years, four elections, an entire federal government `+
       `rebuilt from scratch, and an internment. He also tried to expand the Court and was refused, by his `+
       `own party, in public." She adds: "The refusal is the part your side never quotes, Mr President, and it's the part that mattered."`,
  choices:[
    { label:'Try the Court expansion. See if this party refuses.', eff:{base:+7,congress:-14,courts:-13,press:-10,street:-8,auth:+15},
      res:`Nine of your own senators refuse within a week. Largest single act of resistance from your own side in four years, and you never fully recover from it.` },
    { label:'Do not try it. Take the point.', eff:{congress:+9,courts:+10,press:+7,base:-7,auth:+2},
      res:`You decline to attempt something you'd only have lost. Nobody notices the thing that never happens, which is why restraint has never once been thanked.` },
    { label:'Expand the lower courts instead. Nobody watches those.', eff:{base:+5,congress:-6,courts:-6,press:-4,auth:+12},
      res:`Sixty-three new district judgeships, filled in fourteen months. A fraction of the coverage for several times the actual effect.` },
    { label:'Expand the Court downward, to seven.', eff:{base:+3,congress:-9,courts:-11,press:-7,auth:+6}, wild:true,
      res:`A bill to shrink the bench by removing its two most recently confirmed members. Both were confirmed by you, a fact raised on the floor, at considerable length.` }]},

{ id:'c-uncommon-momentum', title:'Little Energy On Legislation', who:C.speaker, min:26, max:48, tags:['congress','press'],
  src:'analysts noting reliance on orders and emergencies with little effort spent on legislative pathways',
  text:`Hal has a think-tank line highlighted in yellow. "'Uncommon early momentum,' and then this: 'with `+
       `little energy spent on legislative pathways.'" He peers over the top of the page. "Sir, that's a `+
       `polite way of saying none of it is nailed down, and I've been telling you that for two years, just less politely."`,
  choices:[
    { label:'Keep the momentum. Nailing things down is slow.', eff:{base:+7,congress:-10,courts:-8,press:-6,auth:+13},
      res:`Everything you've built rests on your own signature alone. Your successor undoes 80% of it in one afternoon, using the exact same instrument you did.` },
    { label:'Spend the last two years turning orders into statutes.', eff:{congress:+13,courts:+10,press:+9,street:+6,base:-11,auth:+3},
      res:`Four bills, two of which pass. They're the only part of your presidency still standing in twenty years, and nobody remembers they're yours.` },
    { label:'Do both. Legislate the four that matter, order the rest.', eff:{base:+3,congress:+6,courts:+4,press:+3,auth:+9},
      res:`A portfolio approach that satisfies nobody on either side and, viewed twenty years out, turns out to have been exactly right.` },
    { label:'Have Congress pass a bill ratifying every order at once.', eff:{base:+5,congress:-11,courts:-9,press:-7,auth:+11}, wild:true,
      res:`Two hundred and seventeen orders ratified in one vote, by members who between them have read four of them. It passes by eleven and is challenged the next morning.` }]},

{ id:'c-succession-machine', title:'The Movement After You', who:C.vp, min:38, max:48, tags:['elections','power'],
  src:'a personalist movement and the question of whether it survives its founder',
  text:`Chet has the internal numbers and is visibly not enjoying them. "The movement polls at fifty-four. `+
       `You poll at forty-one." He lets that sit for a moment. "Sir, it's grown past you. That's either the `+
       `greatest thing you've ever built or the last problem you'll ever have, and I genuinely do not know which."`,
  choices:[
    { label:'Bind it to me. Loyalty oaths, my name on everything.', eff:{base:+9,congress:-9,courts:-7,press:-8,street:-7,auth:+12},
      res:`A movement that cannot outlive you also cannot survive you, and both facts become true on the same day, one you did not get to pick.` },
    { label:'Build the institution. Let it outlive me.', eff:{base:-5,congress:+8,courts:+6,press:+6,street:+6,auth:+7},
      res:`A party apparatus with rules, a treasury and a succession process. It wins three of the next five elections and quietly stops mentioning you by the second one.` },
    { label:'Hand it to Chet now, while I can choose.', eff:{base:-9,congress:+10,courts:+8,press:+7,street:+7,auth:+4},
      res:`He takes it gratefully and competently, and within eleven weeks makes a decision without asking you first, and nothing whatsoever happens to him for it.` },
    { label:'Poll the movement on whether it still needs you.', eff:{base:-7,press:+6,congress:+5,street:+4,auth:-3}, wild:true,
      res:`Nadia begs you not to. You commission it anyway. The number comes back 38% and leaks within four days, and the leak is genuinely the least of your problems.` }]},

{ id:'c-what-was-it-for', title:'The Question In The Doorway', who:C.cos, min:42, max:48, tags:['power','press'],
  src:'the gap between expansive assertion of executive power and durable achievement',
  text:`It's late, and Deborah has stopped even pretending to hold a folder. "Four years. Two hundred and `+
       `seventeen orders, eleven emergencies, four hundred buildings carrying your name." She isn't being `+
       `cruel about it. "Sir, if I asked which of it outlives you, what would you actually say?"`,
  choices:[
    { label:'"All of it. Because I am not going anywhere."', eff:{base:+8,congress:-11,courts:-10,press:-9,street:-9,auth:+16},
      res:`She writes it down. It's the sentence that opens every account of this administration written in the following forty years, and she's the one credited for catching it.` },
    { label:'"The judges. The judges outlive everybody."', eff:{base:+4,courts:-4,congress:-3,auth:+11},
      res:`It's the correct answer. Two hundred and thirty-one lifetime appointments, average age forty-six, the only thing here that is actually permanent.` },
    { label:'"Honestly? The two bills. Maybe."', eff:{congress:+11,courts:+9,press:+9,street:+7,base:-11,auth:-2},
      res:`Deborah says nothing for a moment. Then she says "yes" and leaves, and it's the closest thing to approval you get out of her in four years.` },
    { label:'"The ballroom."', eff:{base:+6,press:-5,congress:-4,courts:-4,auth:+3}, wild:true,
      res:`It is, to be fair, extremely likely to still be standing. She concedes the point, and neither of you ever brings the conversation up again.` }]},

/* ══════════════ LATE-TERM FRICTION ══════════════ */

{ id:'c-lame-duck', title:'The Word Nobody Says', who:C.poll, min:40, max:48, tags:['congress','press'],
  src:'the erosion of presidential leverage in the final phase of a term',
  text:`Nadia has the tell. "Four committee chairs didn't return calls this week. Not hostile, just busy. `+
       `Sir, that's what it actually looks like. Nobody announces they've stopped being afraid of you. `+
       `They just start getting very, very busy."`,
  choices:[
    { label:'Make an example of one of them. Publicly.', eff:{base:+7,congress:-11,press:-7,courts:-5,auth:+8},
      res:`He survives his primary by nine points, and the other three simply stop returning calls altogether. Fear is a currency, and you've just discovered the exchange rate is bad.` },
    { label:'Give them something they want. Buy the last two years.', eff:{congress:+10,street:+6,press:+5,base:-7,cash:-0.3,auth:+3},
      res:`Four district projects and a committee chairmanship. Transactional, unglamorous, and it buys eleven more months of a working majority.` },
    { label:'Ignore it. Govern by order until the last day.', eff:{base:+5,congress:-7,courts:-6,press:-4,auth:+11},
      res:`You don't need them for an order, which is exactly why an order is worth so much less than the thing you can no longer get out of them.` },
    { label:'Call all four at 3am to check they are well.', eff:{base:+3,congress:-5,press:-4,auth:+4}, wild:true,
      res:`All four pick up. All four are extremely alarmed. Three of them return every call for the next six months; the fourth simply changes his number.` }]},

{ id:'c-library', title:'The Library', who:C.ethics, min:40, max:48, tags:['money','press'],
  src:'settlement proceeds and donations directed to a future presidential library foundation',
  text:`Miriam has the foundation accounts open. "Four hundred and ten million, sir. From settlements, from `+
       `donors with matters pending before the government, and from four foreign nationals." She sets them down. `+
       `"It's a library. There's no disclosure requirement at all. That isn't a loophole. It's just the law."`,
  choices:[
    { label:'Take all of it. It is a library.', eff:{base:+4,press:-11,courts:-9,congress:-9,street:-6,cash:+0.6,auth:+9},
      res:`Nobody has ever successfully attacked anybody over a library. It's the single cleanest way to be handed money in American public life, and it always has been.` },
    { label:'Publish every donor voluntarily.', eff:{press:+10,courts:+9,congress:+8,street:+6,base:-6,cash:-0.2,auth:-2},
      res:`Eleven donors withdraw within a fortnight, which tells you rather a lot about those eleven. The remaining list is dull and completely unimpeachable.` },
    { label:'Refuse foreign money. Take the rest.', eff:{press:+5,courts:+5,congress:+5,base:-2,cash:+0.4,auth:+3},
      res:`One line, drawn somewhere easy to defend and easy to verify. Miriam calls it "the minimum" and files it away approvingly.` },
    { label:'Build the library with no books in it.', eff:{base:+4,press:-6,courts:-4,congress:-4,cash:+0.5,auth:+3}, wild:true,
      res:`A 90,000-square-foot facility containing four hundred photographs, a gift shop and a replica of the office. Year-one attendance beats every single projection.` }]},

{ id:'c-pardon-list', title:'The List On The Last Page', who:C.lawyer, min:44, max:48, tags:['justice','power'],
  src:'the use of clemency at scale for political allies and associates',
  text:`Sy has the clemency list ready. "Forty-one names. Nine of them worked for you. Four of them declined `+
       `to cooperate with investigations into you." He doesn't editorialise. "Sir, the power is unreviewable. `+
       `No court, no vote, no appeal. It's the one thing in the entire Constitution with no check on it whatsoever."`,
  choices:[
    { label:'Sign all forty-one. On the last morning.', eff:{base:+8,courts:-13,congress:-12,press:-11,street:-9,auth:+13},
      res:`Unreviewable means unreviewable. Nothing happens to any of them, ever, and the message to everyone still sitting on a secret arrives loud and clear.` },
    { label:'Sign the nine with genuine sentencing disparities.', eff:{base:+4,courts:-4,congress:-3,press:-3,auth:+8},
      res:`Nine defensible cases, each with its own memo. Two advocacy groups that despise you issue statements of support, which nobody expected, least of all them.` },
    { label:'Sign none of them.', eff:{courts:+11,congress:+10,press:+9,street:+7,base:-12,auth:-4},
      res:`Four people who stayed silent for your sake go to prison anyway. Whether that's integrity or ingratitude gets argued about for thirty years.` },
    { label:'Pardon everybody in the country, pre-emptively.', eff:{base:+5,courts:-12,congress:-10,press:-9,street:-6,auth:+7}, wild:true,
      res:`A blanket proclamation of universal clemency for every federal offence. Signed at 4am, rescinded at 7am, and it existed, in total, for three hours.` }]},

{ id:'c-guardrails', title:'What Held', who:C.hist, min:44, max:48, tags:['press','power'],
  src:'the scholarly finding that the essential distinguishing feature was that guardrails still functioned',
  text:`Dr Weir has come to say goodbye and brought exactly one page. "The literature's conclusion, as of `+
       `now: courts still ruled against you and you sometimes complied. Elections happened and the opposition `+
       `won some. The press was pressured and kept publishing anyway." She hands it over. "Mr President, `+
       `every one of those is a sentence about something that did not happen. That's what a guardrail is."`,
  choices:[
    { label:'Then find the one that has not been tested.', eff:{base:+8,courts:-13,congress:-12,press:-11,street:-10,auth:+17},
      res:`There's always one. You spend the remaining months hunting for it, and the search itself turns out to be the most dangerous thing you do all term.` },
    { label:'Leave them standing. Take the win you have.', eff:{courts:+12,congress:+11,press:+11,street:+9,base:-13,auth:-7},
      res:`You end up a president who expanded the office enormously and still left it a functioning one. The least satisfying outcome available, and the rarest.` },
    { label:'"They held because I let them." Say it publicly.', eff:{base:+7,courts:-8,congress:-8,press:-7,street:-6,auth:+11},
      res:`It's a boast that concedes everything at once. Four scholars quote it as the single most revealing sentence of the administration, and none of them are wrong.` },
    { label:'Ask her to write it down as a list, so you can work through it.', eff:{base:+4,courts:-6,congress:-6,press:-5,street:-4,auth:+8}, wild:true,
      res:`She refuses, for the first time in four years, in a single word. Then she picks up her coat and leaves the building for the last time.` }]}

);
})();
