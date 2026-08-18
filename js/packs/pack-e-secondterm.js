/* ============================================================
   PACK E — SECOND TERM ONLY  (term: 2)
   Everything here is gated on having already served four years.
   No next election, no learning curve, no honeymoon, and a staff
   that has stopped asking whether things are allowed.

   REWRITTEN against the research. Every crisis carries a `src`.
   INSPIRED BY, NEVER COPIED — take the mechanism, invent the rest.

   This pack draws mostly on the parts of the research that only
   make sense once a president has already had a term: the immunity
   architecture built up over four years, the comparative material
   on leaders who reset their own clocks, the "most powerful
   president" argument and its rebuttals, and the indices that were
   still calling the country free while marking it down.

   `t2-term-reset` carries the `termlimit` breach and MUST keep it —
   it is one of only three routes to that clause in the whole deck,
   and the only one in a second term.

   20 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ---------- what a second term actually is ---------- */

{ id:'t2-unleashed', title:'The Restraint That Was Removed', who:C.cos, term:2, min:1, max:16, tags:['power'],
  src:'observers describing a second term as the first one unleashed, without the discipline of a coming election',
  text:'Deborah has one page and does not read from it. "Every restraint that operated on you in the first term ' +
       'was downstream of one thing: you were going to be on a ballot again." She sets it down. ' +
       '"You are not. Sir, nobody in this building is quite sure what happens to a president when that goes away, ' +
       'including the people who have studied it."',
  choices:[
    { label:'Then stop pretending. Everything, immediately.', eff:{base:+8,congress:-11,courts:-11,press:-9,street:-9,auth:+15},
      res:'Everything you slow-walked for four years is signed inside a fortnight. The system has never been asked to absorb this much this fast and it does not.' },
    { label:'Same programme. Faster. Without the meetings.', eff:{base:+5,courts:-5,press:-5,street:-4,congress:-4,auth:+10},
      res:'No speech, no doctrine, no announcement — simply a government that has stopped asking permission and never mentioned that it stopped.' },
    { label:'Spend it on the things that need eight years.', eff:{congress:+9,courts:+7,press:+7,street:+6,base:-9,auth:+3},
      res:'Four programmes that could not have been finished in one term are finished in two. It is the only argument for a second term anybody has ever made honestly.' },
    { label:'Announce that you will govern as though the ballot still existed.', eff:{base:-5,congress:+8,courts:+7,press:+8,street:+6,auth:-2}, wild:true,
      res:'Nobody believes it, including Deborah, including you. It is nonetheless true for about nine months, which is eight months longer than anybody predicted.' }]},

{ id:'t2-architecture', title:'The Architecture', who:C.lawyer, term:2, min:2, max:20, tags:['courts','power'],
  src:'an immunity ruling built up over a term into a general architecture of executive power',
  text:'Sy has brought the four-year file. "It started as one ruling about one prosecution. We have cited it in ' +
       'nearly a third of our emergency applications since." He turns it around. "Sir, it is not a shield any more. ' +
       'Four years of briefs have built a structure on top of it, and the structure is load-bearing."',
  choices:[
    { label:'Build higher. Cite it in everything.', eff:{base:+6,courts:-12,congress:-10,press:-8,street:-7,auth:+15},
      res:'A doctrine about prosecution becomes a doctrine about everything, one brief at a time, none of them individually remarkable.' },
    { label:'Stop citing it. Argue the merits.', eff:{courts:+11,congress:+9,press:+8,base:-8,auth:-3},
      res:'You win less and keep more. Four of the wins are unappealable in a way that nothing built on the shield ever was.' },
    { label:'Cite it only where we would lose otherwise.', eff:{base:+3,courts:-5,congress:-4,press:-3,auth:+9},
      res:'Reserving it for genuine need is what a shield is for, and using it that way is the only version that survives the next administration.' },
    { label:'Ask the Court to confirm the architecture in writing.', eff:{base:+4,courts:-8,congress:-7,press:-6,auth:+7}, wild:true,
      res:'They take the case. The opinion is narrower than four years of your own briefs assumed and it quietly demolishes about half the structure.' }]},

/* ---------- the clock ---------- */

{ id:'t2-eighty-seven', title:'Eighty-Seven Words', who:C.lawyer, term:2, min:4, max:26, tags:['power','elections'],
  src:'a term-limit amendment of very short length and unusually careful drafting',
  text:'"I have printed it out. It is eighty-seven words." Sy puts a single sheet on the desk. ' +
       '"It restricts being *elected* more than twice. People keep telling you there is an argument about ' +
       'being *installed*. Sir, I have read those arguments and I would be embarrassed to make one in a room ' +
       'with a judge in it."',
  choices:[
    { label:'Have counsel build the installation argument anyway.', eff:{base:+7,courts:-11,congress:-11,press:-8,street:-8,auth:+14},
      res:'A memorandum is produced that is careful, thorough and unconvincing. It leaks in nine weeks and is read by more people than any policy you have signed.' },
    { label:'Read it aloud. Publicly. All eighty-seven words.', eff:{courts:+11,congress:+10,press:+10,street:+8,base:-12,auth:-5},
      res:'It takes thirty-one seconds. It is the most effective thing you do all year and your movement experiences it as a death in the family.' },
    { label:'Say nothing about it in either direction.', eff:{base:+3,courts:-3,congress:-3,auth:+7},
      res:'Ambiguity costs nothing and keeps four hundred thousand people hoping, which is worth more than either answer.' },
    { label:'Have it framed and hung above the Resolute desk.', eff:{base:+4,courts:+5,congress:+4,press:+6,auth:+2}, wild:true,
      res:'Every visitor photographs it. Nobody can establish whether it is there as a commitment or a challenge, and you decline, repeatedly, to say.' }]},

{ id:'t2-term-reset', title:'The Clock That Was Reset', who:C.hist, term:2, min:12, max:38, tags:['elections','power'],
  src:'a foreign leader resetting his own term count by constitutional amendment, so that terms already served stopped counting',
  text:'Dr Weir has the comparative case and is not enjoying it. "It was done entirely by the book. A constitutional ' +
       'amendment, a genuine vote, and a clause providing that the terms already served would not count." She looks up. ' +
       '"Mr President, the clock did not stop. It went back to zero. And nothing about it was illegal."',
  choices:[
    { label:'Draft the amendment. The terms already served do not count.', eff:{base:+7,courts:-13,congress:-13,press:-11,street:-10,auth:+16},
      res:'It needs thirty-eight states and it will never get them. The attempt is worth more to you than the amendment and every person involved understands that.', breaks:'termlimit' },
    { label:'Have four state legislatures request it. Stay out of it.', eff:{base:+5,courts:-8,congress:-8,press:-6,street:-6,auth:+11},
      res:'You did not ask. It was requested. That distinction is the load-bearing wall of the whole enterprise and it holds for about two years.' },
    { label:'"That is what other countries do." End it there.', eff:{courts:+10,congress:+10,press:+9,street:+7,base:-11,auth:-5},
      res:'Refusing somebody else\'s constitution is the cheapest patriotism available and on this one occasion you mean every word of it.' },
    { label:'Propose it, but with the reset applying to everybody.', eff:{base:+3,courts:-6,congress:-6,press:-4,auth:+6}, wild:true,
      res:'A universal amnesty on term limits for every office in the country. Four hundred incumbents who hate you privately hope it passes.' }]},

{ id:'t2-referendum', title:'The Question On The Ballot', who:C.poll, term:2, min:16, max:42, tags:['elections','power'],
  src:'a foreign leader creating a super-empowered presidency by national referendum after a claimed emergency',
  text:'Nadia has modelled it. "A single national question — should the presidency be strengthened. Not a candidate, ' +
       'not a party, one question." She hesitates. "It polls at forty-eight and it moves nine points if there has ' +
       'been an incident in the preceding fortnight. Sir, I want to be clear that I have just told you something ' +
       'I wish I had not worked out."',
  choices:[
    { label:'Put the question. Pick the fortnight.', eff:{base:+7,courts:-13,congress:-12,press:-11,street:-10,auth:+16},
      res:'A genuine majority, in a genuine vote, for a permanently stronger office. It is the most democratic thing you ever do and it is the most dangerous.' },
    { label:'Put the question. Take whatever date comes.', eff:{base:+5,courts:-7,congress:-7,press:-6,street:-5,auth:+11},
      res:'It fails by four points on an ordinary Tuesday. Losing it cleanly is worth more to the office than winning it dirtily would have been.' },
    { label:'No referendum. The Constitution has an amendment process.', eff:{courts:+11,congress:+10,press:+9,street:+8,base:-10,auth:-4},
      res:'The process exists, is difficult on purpose, and you decline to route around it. Nadia deletes the model and says so.' },
    { label:'Put four questions and let people mix and match.', eff:{base:+4,courts:-7,congress:-6,press:-5,auth:+7}, wild:true,
      res:'The electorate approves two, rejects one and splits evenly on the fourth, producing a constitutional settlement nobody designed and no lawyer can parse.' }]},

{ id:'t2-perpetuo', title:'Without The Time Limit', who:C.hist, term:2, min:20, max:44, tags:['power','press'],
  src:'a Roman dictator taking a legitimate office and stripping it of its traditional time limit',
  text:'"The office was real and it was legal and it had a limit — six months, and then you gave it back." ' +
       'Dr Weir is describing a man dead two thousand years. "He kept the office and removed the limit. ' +
       'He did not seize anything. He simply deleted the expiry date." She pauses. ' +
       '"Mr President, he was killed by his own senate within a month, and every one of them had voted for him."',
  choices:[
    { label:'Then keep the office and remove the limit.', eff:{base:+7,courts:-13,congress:-14,press:-10,street:-9,auth:+16},
      res:'The historical parallel is repeated so often it stops being a warning and becomes an expectation. Four members of your own party stop taking your calls.' },
    { label:'Keep the limit. Make the office bigger inside it.', eff:{base:+4,courts:-6,congress:-6,press:-5,auth:+12},
      res:'A stronger office with an end date is the version that survives, because the end date is why nobody organises against it.' },
    { label:'Ask her what the other one did instead.', eff:{base:-3,courts:+8,congress:+8,press:+8,street:+6,auth:+5},
      res:'She tells you about his heir, who gave it all back theatrically and kept everything that mattered, and who died in bed at seventy-five.' },
    { label:'Set the limit at six months and see who notices.', eff:{base:+3,courts:+4,congress:+4,press:+5,auth:-2}, wild:true,
      res:'A proclamation adopting a six-month term for yourself is published. Nobody can tell whether it is a joke and it is quietly allowed to lapse.' }]},

/* ---------- the argument about power ---------- */

{ id:'t2-most-powerful', title:'"About To Become"', who:C.hist, term:2, min:8, max:34, tags:['press','power'],
  src:'a historian arguing a president was about to become the most powerful in the country\'s history',
  text:'A serious historian has said, on the record, that you are about to become the most powerful president ' +
       'in American history. Dr Weir is here to complicate it. "He said *about to*, Mr President. It is a ' +
       'prediction, and it is conditional, and the condition is what you do in the next twelve months."',
  choices:[
    { label:'Meet the condition. All of it.', eff:{base:+8,courts:-11,congress:-11,press:-9,street:-8,auth:+15},
      res:'He is proved right and says so without pleasure. The sentence is on the jacket of nine books within four years and none of them are flattering.' },
    { label:'Quote the line constantly. Do nothing to earn it.', eff:{base:+7,press:-6,courts:-4,congress:-4,auth:+6},
      res:'A prediction repeated often enough starts to feel like a fact, which is most of the benefit for none of the constitutional exposure.' },
    { label:'Point out that two wartime presidents did more.', eff:{courts:+8,congress:+7,press:+8,base:-6,auth:+2},
      res:'It is accurate, it is generous, and it is the single most disarming thing you say all term. Four historians publicly agree with you.' },
    { label:'Ask to be measured against the whole list, formally.', eff:{base:+4,press:+5,courts:-3,auth:+3}, wild:true,
      res:'A ranking exercise is commissioned. You come eleventh, which pleases nobody, and the methodology is argued about for a decade.' }]},

{ id:'t2-nixon', title:'Far Beyond', who:C.press, term:2, min:10, max:36, tags:['press','power'],
  src:'the judgement that a second-term imperial presidency had gone far beyond an earlier one',
  text:'Kaylee has the piece. "The comparison is not to your first term. It is to the administration that ' +
       'invented the phrase \'imperial presidency\', and the verdict is that you have gone far beyond it." ' +
       'She puts it down. "Sir, that president resigned, and the writer knows we know that."',
  choices:[
    { label:'Take the compliment. Say he was weak.', eff:{base:+7,press:-9,courts:-7,congress:-7,street:-6,auth:+11},
      res:'Comparing yourself favourably to a man who resigned rather than be removed is a sentence four historians put in the first paragraph of everything they write about you.' },
    { label:'"He broke the law. I have not." Leave it there.', eff:{base:+5,courts:-3,congress:-3,press:-3,auth:+8},
      res:'It is a defensible line right up until somebody produces a list, and producing lists is what the entire press corps does for a living.' },
    { label:'Say nothing. It is a comparison, not a charge.', eff:{press:+6,courts:+5,congress:+4,base:-3,auth:+4},
      res:'The piece runs for a day. Every response you might have given would have kept it running for a week.' },
    { label:'Invite the writer in and give him the full tour.', eff:{base:+3,press:+8,courts:+4,congress:+4,auth:-1}, wild:true,
      res:'He accepts, spends nine hours in the building, and writes something considerably more nuanced and about four times as damaging.' }]},

{ id:'t2-still-in-place', title:'Still In Place', who:C.hist, term:2, min:14, max:40, tags:['power','press'],
  src:'analysts noting that many core elements of the system remained in place and that courts sometimes still prevailed',
  text:'Dr Weir has brought the sentence that most annoys your critics. "\'Many core elements of the system are ' +
       'still in place. Courts are ruling against him, and sometimes his administration abides by those decisions.\'" ' +
       'She looks up. "Mr President, that is written by people who are alarmed. It is the strongest thing anybody ' +
       'has said in your defence and it is not a defence at all."',
  choices:[
    { label:'Then find which core elements are not load-bearing.', eff:{base:+7,courts:-12,congress:-12,press:-10,street:-9,auth:+15},
      res:'There are four. You test three of them in eighteen months and the fourth is the one that stops you, and nobody had predicted which it would be.' },
    { label:'Quote the sentence constantly as vindication.', eff:{base:+5,press:-4,courts:-3,auth:+6},
      res:'Quoting your critics\' concession is the oldest move in politics and it works on precisely the people who were never worried.' },
    { label:'Leave the core elements alone. Take the term you have.', eff:{courts:+12,congress:+11,press:+10,street:+8,base:-11,auth:-6},
      res:'You govern hard inside a system you decline to break. It is the least satisfying outcome available and the only one that is still standing in fifty years.' },
    { label:'Ask her to list the core elements so you have them.', eff:{base:+4,courts:-8,congress:-7,press:-6,auth:+8}, wild:true,
      res:'She refuses, immediately and without softening it. It is the second time in five years she has said no to you and she does not explain either.' }]},

/* ---------- the indices and the record ---------- */

{ id:'t2-still-free', title:'Eighty-One Out Of A Hundred', who:C.state, term:2, min:12, max:38, tags:['foreign','press'],
  src:'a democracy index keeping a country in its "free" category while marking it down several points',
  text:'Muriel has the score. "Eighty-one out of a hundred, down from eighty-four. Twelve points below where ' +
       'we were twenty years ago." She turns the page. "Sir, we are still in the \'free\' category. ' +
       'That is the good news and it is also the only news, because the category has a floor and we are ' +
       'travelling towards it at a measurable rate."',
  choices:[
    { label:'Ignore the trend. Publicise the category.', eff:{base:+6,press:-7,street:-6,congress:-5,auth:+8},
      res:'"Still free" is a slogan that works exactly once. The following year\'s number arrives on schedule and the slogan is unavailable.' },
    { label:'Fix the three indicators we score worst on.', eff:{press:+10,courts:+9,congress:+8,street:+7,base:-9,auth:-4},
      res:'Judicial independence, oversight capacity, press access. It takes fourteen months, costs you two policies, and moves the score back four points.' },
    { label:'Dispute the index and fund a rival.', eff:{base:+5,press:-8,street:-6,congress:-5,cash:-0.4,auth:+7},
      res:'Your index scores the country ninety-four. It is cited by four governments you would rather not be cited by and nobody else at all.' },
    { label:'Ask what score would put us in the next category down.', eff:{base:+3,press:-6,street:-5,congress:-4,auth:+6}, wild:true,
      res:'They answer, in detail, because they publish the methodology. The number is written on a card and kept in a drawer, and four people know it exists.' }]},

{ id:'t2-too-reductive', title:'"Too Reductive"', who:C.hist, term:2, min:16, max:42, tags:['press','rhetoric'],
  src:'a historian of authoritarianism declining to apply the strongest available label',
  text:'Dr Weir has brought a refusal. "She has written a book about strongmen, she places you firmly in that ' +
       'lineage, and she declines to use the F-word about you. She calls the label too reductive." ' +
       'She sets it down. "Mr President, that is not a defence. She is saying the word would let you off, ' +
       'because it would let people argue about a word instead of about what you have done."',
  choices:[
    { label:'Use it constantly. "Even they say I am not."', eff:{base:+7,press:-7,street:-6,courts:-5,congress:-5,auth:+9},
      res:'It works precisely as she predicted. Nine months of argument about vocabulary, none about the record, which was the entire hazard she was flagging.' },
    { label:'Say nothing. Do not touch it.', eff:{press:+5,street:+4,courts:+3,base:-3,auth:+4},
      res:'The refusal sits there, unclaimed by anybody, doing the work she intended. It is quoted in four hundred pieces and never once as exoneration.' },
    { label:'Invite her to explain, at length, on the record.', eff:{press:+8,street:+7,courts:+6,congress:+5,base:-7,auth:-2},
      res:'She takes ninety minutes to explain why the word does not fit and what does. It is the most damaging interview of your presidency and you commissioned it.' },
    { label:'Ask her which word she would use.', eff:{base:+3,press:-5,street:-5,courts:-4,auth:+5}, wild:true,
      res:'She gives you three, in ascending order of accuracy. You remember all three for the rest of your life and repeat none of them.' }]},

{ id:'t2-lawsuit-count', title:'Seven Hundred And Fifty-Three', who:C.lawyer, term:2, min:10, max:40, tags:['courts','press'],
  src:'litigation trackers counting hundreds of cases against an administration, with a genuinely mixed record',
  text:'Sy has the tracker. "Seven hundred and fifty-three cases. We have eighteen stays from the high court ' +
       'and roughly as many losses as wins below." He closes it. "Sir, the honest summary is that it is mixed. ' +
       'Which is not what either side wants and is what the record actually says."',
  choices:[
    { label:'Claim we win everything. Nobody counts.', eff:{base:+6,courts:-8,press:-8,congress:-6,auth:+8},
      res:'Somebody counts. The tracker is public, updated weekly, and the gap between the claim and the column becomes its own recurring story.' },
    { label:'Publish our own win-loss record. Accurately.', eff:{courts:+9,press:+9,congress:+7,base:-7,auth:+2},
      res:'A genuinely mixed record, published by you, removes the entire argument. Four outlets run it and none of them can find an angle.' },
    { label:'Stop appealing the ones we will lose.', eff:{courts:+11,congress:+8,press:+7,base:-8,auth:-2},
      res:'Litigating only the winnable cases raises the win rate and lowers the profile, which is what a competent legal operation looks like.' },
    { label:'Countersue all seven hundred and fifty-three.', eff:{base:+5,courts:-11,congress:-8,press:-7,cash:-0.4,auth:+7}, wild:true,
      res:'The filing fee alone is $190,000. Four of the countersuits are, by accident, against agencies of your own government.' }]},

/* ---------- allies, enemies and the shield ---------- */

{ id:'t2-shield', title:'The Shield', who:C.lawyer, term:2, min:6, max:32, tags:['justice','power'],
  src:'mass clemency for political allies read by scholars as a shield signalling protection for future loyalty',
  text:'"The clemency in the first term was not about the past." Sy is unusually direct. "Every person who ' +
       'considers doing something for you now knows what happens afterwards. It is the cheapest loyalty ' +
       'programme ever devised, and sir — you did not have to say a word for it to work."',
  choices:[
    { label:'Say it out loud. Make the promise explicit.', eff:{base:+7,courts:-13,congress:-11,press:-10,street:-8,auth:+14},
      res:'An explicit promise of clemency in advance is a different legal object from a pattern, and four prosecutors immediately begin treating it as one.' },
    { label:'Say nothing. The pattern speaks for itself.', eff:{base:+4,courts:-5,congress:-4,press:-4,auth:+10},
      res:'Unspoken, it is unindictable and equally effective. Nine people act on an assurance nobody ever gave them.' },
    { label:'State publicly that nobody should count on it.', eff:{courts:+11,congress:+9,press:+8,street:+6,base:-10,auth:-5},
      res:'Four people who were about to do something extremely unwise stop doing it. You will never know their names or what they were going to do.' },
    { label:'Issue the pardons in advance, blank, undated.', eff:{base:+5,courts:-12,congress:-10,press:-9,auth:+8}, wild:true,
      res:'Undated clemency for unspecified offences is tested in court within a year and fails on the first sentence of the first opinion.' }]},

{ id:'t2-old-hands', title:'Nobody Asks Any More', who:C.cos, term:2, min:4, max:28, tags:['power','agencies'],
  src:'the phenomenon of institutions and staff conceding in advance of being asked',
  text:'Deborah has noticed something and has waited a fortnight to raise it. "Four things happened this month ' +
       'that you did not order. Nobody asked whether they were allowed. They were done because somebody ' +
       'downstairs worked out what you would want." She stops. "Sir, that is the thing the books are about. ' +
       'It is not what you do. It is what people do without being told."',
  choices:[
    { label:'Encourage it. Praise all four by name.', eff:{base:+7,courts:-11,congress:-10,press:-9,street:-9,auth:+14},
      res:'Praise is the confirmation the next twenty were waiting for. It is more effective than any instruction and it cannot be described as one.' },
    { label:'Say nothing. Let it run.', eff:{base:+4,courts:-6,congress:-6,press:-5,street:-5,auth:+11},
      res:'Silence reads as approval and costs nothing. The rate roughly doubles over the following quarter without a single order being issued.' },
    { label:'Tell the building, plainly, that nobody asked for this.', eff:{courts:+11,congress:+10,press:+9,street:+9,base:-11,auth:-6},
      res:'Two of the four are reversed within a week. Saying it out loud is the only thing that ever breaks it, and it costs you the entire mechanism.' },
    { label:'Ask which of the four they think you wanted least.', eff:{base:+3,courts:-6,congress:-5,press:-5,auth:+7}, wild:true,
      res:'A memo comes back ranking your own presumed wishes in order of confidence. It is uncomfortably accurate and is immediately classified.' }]},

{ id:'t2-old-enemy', title:'The One Who Is Still There', who:C.opp, term:2, min:14, max:40, tags:['justice','press'],
  src:'sustained pressure on named political opponents across a full presidency',
  text:'Cordelia Ruiz-Bloom has outlasted four attempts to end her career and has requested a meeting. ' +
       'She arrives alone, sits down, and says: "I have been investigated by your government for six years. ' +
       'Nothing has ever been charged. I am not here to complain, Mr President. I am here because I would ' +
       'like to know whether it stops now or whether it goes on for four more."',
  choices:[
    { label:'"It goes on." Say it to her face.', eff:{base:+7,courts:-12,congress:-11,press:-11,street:-9,auth:+12},
      res:'She writes it down in the car, dates it, and gives copies to three people. It is quoted in her memoir, at a hearing, and in an opinion.' },
    { label:'"It stops." Close every file that afternoon.', eff:{courts:+12,congress:+11,press:+11,street:+9,base:-12,auth:-6},
      res:'She does not believe you for nine months. When she finally does, she says so publicly and unprompted, and it is worth more than any advertisement you buy.' },
    { label:'Say nothing at all. Let her leave uncertain.', eff:{base:+4,courts:-5,congress:-5,press:-5,auth:+9},
      res:'Uncertainty is cheaper than either answer and does most of the work of the worse one, which is exactly why it is the option you take.' },
    { label:'Offer her a job.', eff:{base:-6,courts:+7,congress:+8,press:+8,street:+5,auth:+2}, wild:true,
      res:'She declines in four words and then, for reasons neither of you can explain, stays for another hour talking about her father.' }]},

/* ---------- the succession ---------- */

{ id:'t2-heir', title:'The Name On The Other Card', who:C.vp, term:2, min:24, max:44, tags:['elections','power'],
  src:'the problem of succession in a movement organised around one person',
  text:'Chet has two cards. "This is the movement without you: fifty-one. This is me carrying it: thirty-three." ' +
       'He puts them down side by side. "Sir, the gap is not a personality problem. Eighteen points of that ' +
       'movement is a person, and a person cannot be handed to anybody. I have stopped pretending otherwise."',
  choices:[
    { label:'Then nobody inherits it. It ends with me.', eff:{base:+8,congress:-10,courts:-8,press:-8,street:-8,auth:+13},
      res:'A movement that cannot outlive you also cannot survive you, and both of those become true on the same day, which is not a day you get to pick.' },
    { label:'Endorse Chet now and campaign for him for two years.', eff:{base:-6,congress:+9,courts:+7,press:+7,street:+7,auth:+5},
      res:'He closes eight of the eighteen points in twenty-two months. It is the hardest political work anybody does in your administration and you do most of it.' },
    { label:'Build the machine instead. Rules, treasury, succession.', eff:{base:-8,congress:+11,courts:+9,press:+8,street:+7,auth:+6},
      res:'An institution rather than an heir. It wins three of the next five elections and stops mentioning your name somewhere around the second one.' },
    { label:'Endorse four people simultaneously.', eff:{base:+3,congress:-7,press:-5,street:-4,auth:+4}, wild:true,
      res:'All four campaign as the anointed successor, citing the same sentence, for eleven months. The primary that follows is the most entertaining in a century.' }]},

{ id:'t2-final-court', title:'The Last Appointment', who:C.cj, term:2, min:20, max:44, tags:['courts','power'],
  src:'lifetime judicial appointments as the most durable element of a presidency',
  text:'Chief Justice Stone has come about a vacancy and stays for something else. "You have appointed a fifth ' +
       'of the federal bench. Average age forty-six." She does not soften it. "Mr President, every executive ' +
       'order you have signed can be revoked in an afternoon. This cannot be revoked at all. This is the ' +
       'presidency. The rest is weather."',
  choices:[
    { label:'Appoint the youngest qualified name on the list.', eff:{base:+6,courts:-7,congress:-7,press:-6,auth:+12},
      res:'Thirty-nine years old, confirmed by two votes, and on the bench until roughly 2065. Nothing else you have done will still be operating then.' },
    { label:'Appoint the best lawyer on the list, whoever that is.', eff:{courts:+11,congress:+9,press:+8,base:-8,auth:+6},
      res:'She rules against you twice in the first year and is cited approvingly for four decades. Stone tells you, once, that it was the right call.' },
    { label:'Leave the seat. Let the next president fill it.', eff:{courts:+9,congress:+10,press:+8,street:+6,base:-13,auth:-6},
      res:'A vacancy voluntarily left open is unheard of and is read by everybody as weakness, and by four people as the only genuinely constitutional act of the term.' },
    { label:'Appoint yourself.', eff:{base:+5,courts:-11,congress:-9,press:-8,auth:+6}, wild:true,
      res:'There is no bar on it in the text, which is pointed out by four commentators in tones of rising alarm before the nomination is quietly withdrawn.' }]},

/* ---------- the money and the exit ---------- */

{ id:'t2-net-worth', title:'Roughly Double', who:C.ethics, term:2, min:12, max:42, tags:['money','press'],
  src:'a president\'s net worth roughly doubling while in office, documented in his own filings',
  text:'Miriam has the eight-year comparison and has laid it out flat. "It has roughly doubled, sir, and then ' +
       'gone up again. All of it is disclosed. All of it is on forms you signed." She straightens the pages. ' +
       '"That is the defence, and it is a real defence, and it is also how everybody knows."',
  choices:[
    { label:'Say the office had nothing to do with it.', eff:{base:+4,press:-10,courts:-9,congress:-9,street:-6,cash:+0.4,auth:+7},
      res:'The largest single line is a token that did not exist before you were inaugurated. Four reporters establish this before lunch and one of them has a chart.' },
    { label:'"The market went up. Everybody profited."', eff:{base:+6,press:-11,courts:-8,congress:-9,street:-7,auth:+6},
      res:'Played beside the figure, the line becomes the most-quoted sentence of eight years in office. You meant it entirely sincerely, which is the part that lands.' },
    { label:'Publish the full eight-year comparison yourself.', eff:{press:+9,courts:+8,congress:+7,base:-6,auth:+1},
      res:'Two hours of questions, all answered, once. It is the worst afternoon of the second term and it ends the story in an afternoon.' },
    { label:'Put the entire increase into the library foundation.', eff:{base:+3,press:+7,courts:+6,congress:+6,cash:-0.9,auth:+2}, wild:true,
      res:'It is the largest charitable transfer in American political history and it goes to an entity you control, which four journalists point out within the hour.' }]},

{ id:'t2-quiet-year', title:'The Year Nothing Happened', who:C.poll, term:2, min:28, max:46, tags:['press','power'],
  src:'the characterisation of an administration as the most expansive peacetime assertion of executive power',
  text:'Nadia has a strange finding. "There has not been an emergency for eleven months. No deployment, ' +
       'no order anybody sued over, no crisis." She frowns at her own sheet. "Approval is up nine points, sir. ' +
       'And the phrase people are using in the focus groups is that it feels *normal* again, which is the ' +
       'first time that word has appeared in eight years of this research."',
  choices:[
    { label:'End the quiet. Nine points is not the objective.', eff:{base:+8,courts:-11,congress:-10,press:-9,street:-9,auth:+15},
      res:'It takes four days to spend eleven months of accumulated goodwill. Nadia keeps the sheet and shows it to people for the rest of her career.' },
    { label:'Keep the quiet. Govern. Sign nothing dramatic.', eff:{congress:+11,courts:+10,press:+10,street:+9,base:-11,auth:-4},
      res:'A calm, competent, entirely unremarkable year. It is the best-polling period of either term and your movement describes it, accurately, as a betrayal.' },
    { label:'Keep the quiet publicly. Keep moving privately.', eff:{base:+3,courts:-4,congress:-4,press:+4,street:+3,auth:+11},
      res:'Nothing announced, everything continued. It is the most effective quarter of your presidency and there is nothing at all to report about it.' },
    { label:'Declare an emergency about the absence of emergencies.', eff:{base:+5,courts:-9,congress:-8,press:-8,street:-6,auth:+8}, wild:true,
      res:'The proclamation cites the eleven-month gap as evidence of dangerous complacency. It is published, and Nadia\'s approval line falls nine points in a fortnight.' }]},

{ id:'t2-first-draft', title:'The First Serious History', who:C.hist, term:2, min:34, max:46, tags:['press','power'],
  src:'the scholarly assessment that the fair characterisation was the most expansive peacetime assertion of unilateral executive power, still being checked',
  text:'Dr Weir has brought her own manuscript and has not been asked to. "Eight years. I have a conclusion ' +
       'and I am not going to soften it for you." She hands it over. "The most expansive assertion of unilateral ' +
       'executive power in modern peacetime — genuinely alarming, corrosive to democratic quality, and still ' +
       'operating inside a system that was checking it. All four of those clauses, Mr President. Not three."',
  choices:[
    { label:'Have counsel look at whether it can be stopped.', eff:{base:+6,courts:-13,congress:-11,press:-13,street:-10,auth:+11},
      res:'It cannot. The attempt appears in the second edition as a four-page appendix and is the most-quoted section of the entire book.' },
    { label:'Write a foreword disputing the fourth clause.', eff:{base:+5,press:-5,courts:-5,congress:-4,auth:+7},
      res:'Arguing that the system was not in fact checking you is the one clause you should have left alone, and every reviewer says so.' },
    { label:'Write a foreword. Concede the fourth clause.', eff:{courts:+11,congress:+10,press:+12,street:+8,base:-12,auth:-6},
      res:'A president conceding, in print, that the checks held. It is the single most valuable paragraph anybody writes about you and you wrote it yourself.' },
    { label:'Ask to write the final chapter yourself.', eff:{base:+4,press:-6,courts:-5,congress:-4,auth:+5}, wild:true,
      res:'She agrees, on condition that it is printed unedited and clearly attributed. It is four pages long and it is, by a distance, the worst-reviewed section of the book.' }]},

{ id:'t2-last-day', title:'The Last Morning', who:C.usher, term:2, min:44, max:48, tags:['power','press'],
  src:'the distinguishing feature of the record being that transfers of power continued to occur',
  text:'Alvin has the schedule for the morning and it is one page. "Coffee at seven. The car at eleven. ' +
       'The other family arrive at eleven-fifteen." He is entirely calm; he has done this seven times. ' +
       '"Sir, I have laid out the things you asked for. Is there anything else you would like me to do?"',
  choices:[
    { label:'"Cancel the eleven-fifteen."', eff:{base:+8,courts:-14,congress:-14,press:-12,street:-12,auth:+16},
      res:'Alvin says "Yes, sir," and does not move. After a moment he says it again, and still does not move, and that is how you find out where the line was.' },
    { label:'"Nothing. Thank you, Alvin."', eff:{courts:+13,congress:+12,press:+12,street:+11,base:-13,auth:-9},
      res:'You leave at eleven. It is the most ordinary thing that happens all decade and it is the reason there is still a country to be ordinary in.' },
    { label:'Leave a letter in the desk for whoever is next.', eff:{courts:+10,congress:+9,press:+11,street:+8,base:-8,auth:-4},
      res:'Four paragraphs, handwritten, entirely without malice. It is never published and the recipient mentions it, once, twenty years later, and declines to elaborate.' },
    { label:'Ask him which of the seven handled it best.', eff:{base:+3,press:+6,street:+5,congress:+4,auth:-2}, wild:true,
      res:'He considers it seriously for a long moment and then answers honestly. It is not you. He says it kindly and you do not ask him to explain.' }]}

);
})();
