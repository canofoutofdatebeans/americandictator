/* ============================================================
   PACK E, SECOND TERM ONLY  (term: 2)
   Everything here is gated on having already served four years.
   No next election, no learning curve, no honeymoon, and a staff
   that has stopped asking whether things are allowed.

   REWRITTEN against the research. Every crisis carries a `src`.
   INSPIRED BY, NEVER COPIED, take the mechanism, invent the rest.

   This pack draws mostly on the parts of the research that only
   make sense once a president has already had a term: the immunity
   architecture built up over four years, the comparative material
   on leaders who reset their own clocks, the "most powerful
   president" argument and its rebuttals, and the indices that were
   still calling the country free while marking it down.

   `t2-term-reset` carries the `termlimit` breach and MUST keep it,
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
  text:`Deborah has one page and does not read from it. "Every restraint that operated on you in the first term ` +
       `was downstream of one thing: you were going to be on a ballot again." She sets it down. ` +
       `"You are not. Sir, nobody in this building is fully sure what happens to a president once that goes away, ` +
       `including the people paid to have studied it."`,
  choices:[
    { label:`Then stop pretending. Everything, immediately.`, eff:{base:+8,congress:-11,courts:-11,press:-9,street:-9,auth:+15},
      res:`Four years of slow-walked orders get signed inside a fortnight, and a system asked to swallow that much that fast simply does not.` },
    { label:`Same programme. Faster. Without the meetings.`, eff:{base:+5,courts:-5,press:-5,street:-4,congress:-4,auth:+10},
      res:`No speech, no doctrine, no press release, just a government that has quietly stopped asking permission and never once announced it.` },
    { label:`Spend it on the things that need eight years.`, eff:{congress:+9,courts:+7,press:+7,street:+6,base:-9,auth:+3},
      res:`Four programmes too big for one term get finished in two, which turns out to be the only honest argument anyone has ever made for a second one.` },
    { label:`Announce that you will govern as though the ballot still existed.`, eff:{base:-5,congress:+8,courts:+7,press:+8,street:+6,auth:-2}, wild:true,
      res:`Nobody believes it, Deborah least of all, but it holds for about nine months, eight longer than anyone in the building was betting on.` }]},

{ id:'t2-architecture', title:'The Architecture', who:C.lawyer, term:2, min:2, max:20, tags:['courts','power'],
  src:'an immunity ruling built up over a term into a general architecture of executive power',
  text:`Sy has brought the four-year file. "It started as one ruling about one prosecution. We have cited it in ` +
       `nearly a third of our emergency applications since." He turns it around. "Sir, it is not a shield any more. ` +
       `Four years of briefs have built a structure on top of it, and the structure is load-bearing."`,
  choices:[
    { label:`Build higher. Cite it in everything.`, eff:{base:+6,courts:-12,congress:-10,press:-8,street:-7,auth:+15},
      res:`A ruling about one prosecution quietly becomes a doctrine about everything, one unremarkable brief at a time.` },
    { label:`Stop citing it. Argue the merits.`, eff:{courts:+11,congress:+9,press:+8,base:-8,auth:-3},
      res:`You win less and keep more. Four of the wins are unappealable in a way nothing built on the shield ever was.` },
    { label:`Cite it only where we would lose otherwise.`, eff:{base:+3,courts:-5,congress:-4,press:-3,auth:+9},
      res:`Reserving it for genuine need is what a shield is actually for, and it is the only version of it that outlasts your administration.` },
    { label:`Ask the Court to confirm the architecture in writing.`, eff:{base:+4,courts:-8,congress:-7,press:-6,auth:+7}, wild:true,
      res:`They take the case. The opinion turns out narrower than four years of your own briefs assumed, and quietly demolishes about half the structure.` }]},

/* ---------- the clock ---------- */

{ id:'t2-eighty-seven', title:'Eighty-Seven Words', who:C.lawyer, term:2, min:4, max:26, tags:['power','elections'],
  src:'a term-limit amendment of very short length and unusually careful drafting',
  text:`"I have printed it out. It is eighty-seven words." Sy puts a single sheet on the desk. ` +
       `"It restricts being *elected* more than twice. People keep telling you there is an argument about ` +
       `being *installed*. Sir, I have read those arguments and I would be embarrassed to make one out loud in a room ` +
       `with a judge in it."`,
  choices:[
    { label:`Have counsel build the installation argument anyway.`, eff:{base:+7,courts:-11,congress:-11,press:-8,street:-8,auth:+14},
      res:`A memorandum is produced, careful, thorough, and unconvincing. It leaks in nine weeks and outsells every actual policy you have signed.` },
    { label:`Read it aloud. Publicly. All eighty-seven words.`, eff:{courts:+11,congress:+10,press:+10,street:+8,base:-12,auth:-5},
      res:`It takes thirty-one seconds. It is the most effective thing you do all year and your movement experiences it as a bereavement.` },
    { label:`Say nothing about it in either direction.`, eff:{base:+3,courts:-3,congress:-3,auth:+7},
      res:`Ambiguity costs nothing and keeps four hundred thousand people hoping, which is worth considerably more than either answer.` },
    { label:`Have it framed and hung above the Resolute desk.`, eff:{base:+4,courts:+5,congress:+4,press:+6,auth:+2}, wild:true,
      res:`Every visitor photographs it. Nobody can establish whether it is a commitment or a dare, and you decline, repeatedly and happily, to say.` }]},

{ id:'t2-term-reset', title:'The Clock That Was Reset', who:C.hist, term:2, min:12, max:38, tags:['elections','power'],
  src:'a foreign leader resetting his own term count by constitutional amendment, so that terms already served stopped counting',
  text:`Dr Weir has the comparative case and is not enjoying it. "It was done entirely by the book. A constitutional ` +
       `amendment, a genuine vote, and a clause providing that the terms already served would not count." She looks up. ` +
       `"Mr President, the clock did not stop. It went back to zero. And none of it was illegal."`,
  choices:[
    { label:`Draft the amendment. The terms already served do not count.`, eff:{base:+7,courts:-13,congress:-13,press:-11,street:-10,auth:+16}, breaks:'termlimit',
      res:`It needs thirty-eight states and will never get them. The attempt is worth more to you than the amendment ever would be, and everyone involved knows it.` },
    { label:`Have four state legislatures request it. Stay out of it.`, eff:{base:+5,courts:-8,congress:-8,press:-6,street:-6,auth:+11},
      res:`You did not ask. It was requested. That distinction is the load-bearing wall of the whole enterprise, and it holds for about two years.` },
    { label:`"That is what other countries do." End it there.`, eff:{courts:+10,congress:+10,press:+9,street:+7,base:-11,auth:-5},
      res:`Refusing somebody else's constitution is the cheapest patriotism available, and on this one occasion you actually mean it.` },
    { label:`Propose it, but with the reset applying to everybody.`, eff:{base:+3,courts:-6,congress:-6,press:-4,auth:+6}, wild:true,
      res:`A universal amnesty on term limits for every office in the country. Four hundred incumbents who despise you privately hope it passes.` }]},

{ id:'t2-referendum', title:'The Question On The Ballot', who:C.poll, term:2, min:16, max:42, tags:['elections','power'],
  src:'a foreign leader creating a super-empowered presidency by national referendum after a claimed emergency',
  text:`Nadia has modelled it. "A single national question: should the presidency be strengthened. Not a candidate, ` +
       `not a party, one question." She hesitates. "It polls at forty-eight and moves nine points if there has ` +
       `been an incident in the preceding fortnight. Sir, I want it on record that I wish I had never worked that number out."`,
  choices:[
    { label:`Put the question. Pick the fortnight.`, eff:{base:+7,courts:-13,congress:-12,press:-11,street:-10,auth:+16},
      res:`A genuine majority, in a genuine vote, for a permanently stronger office. It is the most democratic thing you ever do and by far the most dangerous.` },
    { label:`Put the question. Take whatever date comes.`, eff:{base:+5,courts:-7,congress:-7,press:-6,street:-5,auth:+11},
      res:`It fails by four points on an ordinary Tuesday. Losing it cleanly turns out to be worth more to the office than winning it dirtily ever would have been.` },
    { label:`No referendum. The Constitution has an amendment process.`, eff:{courts:+11,congress:+10,press:+9,street:+8,base:-10,auth:-4},
      res:`The process exists, is difficult on purpose, and you decline to route around it. Nadia deletes the model and tells you so.` },
    { label:`Put four questions and let people mix and match.`, eff:{base:+4,courts:-7,congress:-6,press:-5,auth:+7}, wild:true,
      res:`The electorate approves two, rejects one, and splits evenly on the fourth, producing a constitutional settlement nobody designed and no lawyer can parse.` }]},

{ id:'t2-perpetuo', title:'Without The Time Limit', who:C.hist, term:2, min:20, max:44, tags:['power','press'],
  src:'a Roman dictator taking a legitimate office and stripping it of its traditional time limit',
  text:`"The office was real and it was legal and it had a limit, six months, and then you gave it back." ` +
       `Dr Weir is describing a man dead two thousand years. "He kept the office and removed the limit. ` +
       `He did not seize anything. He simply deleted the expiry date." She pauses. ` +
       `"Mr President, his own senate killed him within a month, and every one of them had voted for him."`,
  choices:[
    { label:`Then keep the office and remove the limit.`, eff:{base:+7,courts:-13,congress:-14,press:-10,street:-9,auth:+16},
      res:`The historical parallel gets repeated so often it stops being a warning and starts being a schedule. Four members of your own party stop returning calls.` },
    { label:`Keep the limit. Make the office bigger inside it.`, eff:{base:+4,courts:-6,congress:-6,press:-5,auth:+12},
      res:`A stronger office with an end date is the version that survives, precisely because the end date is why nobody bothers organising against it.` },
    { label:`Ask her what the other one did instead.`, eff:{base:-3,courts:+8,congress:+8,press:+8,street:+6,auth:+5},
      res:`She tells you about his heir, who gave it all back theatrically, kept everything that mattered, and died in bed at seventy-five, smug the whole way.` },
    { label:`Set the limit at six months and see who notices.`, eff:{base:+3,courts:+4,congress:+4,press:+5,auth:-2}, wild:true,
      res:`A proclamation adopting a six-month term for yourself gets published. Nobody can tell if it is a joke, so it is quietly allowed to lapse, unmourned.` }]},

/* ---------- the argument about power ---------- */

{ id:'t2-most-powerful', title:'"About To Become"', who:C.hist, term:2, min:8, max:34, tags:['press','power'],
  src:'a historian arguing a president was about to become the most powerful in the country\'s history',
  text:`A serious historian has said, on the record, that you are about to become the most powerful president ` +
       `in American history. Dr Weir is here to complicate it. "He said *about to*, Mr President. It is a ` +
       `prediction, it is conditional, and the condition is entirely what you do in the next twelve months."`,
  choices:[
    { label:`Meet the condition. All of it.`, eff:{base:+8,courts:-11,congress:-11,press:-9,street:-8,auth:+15},
      res:`He is proved right and says so without a flicker of pleasure. The sentence lands on the jacket of nine books within four years, and not one of them is a compliment.` },
    { label:`Quote the line constantly. Do nothing to earn it.`, eff:{base:+7,press:-6,courts:-4,congress:-4,auth:+6},
      res:`A prediction repeated often enough starts to feel like a fact, which is most of the benefit for none of the constitutional exposure.` },
    { label:`Point out that two wartime presidents did more.`, eff:{courts:+8,congress:+7,press:+8,base:-6,auth:+2},
      res:`Accurate, generous, and the single most disarming sentence you say all term. Four historians publicly agree with you, wincing slightly.` },
    { label:`Ask to be measured against the whole list, formally.`, eff:{base:+4,press:+5,courts:-3,auth:+3}, wild:true,
      res:`A ranking exercise gets commissioned. You come eleventh, which satisfies nobody, and the methodology is argued about for a decade.` }]},

{ id:'t2-nixon', title:'Far Beyond', who:C.press, term:2, min:10, max:36, tags:['press','power'],
  src:'the judgement that a second-term imperial presidency had gone far beyond an earlier one',
  text:`Kaylee has the piece. "The comparison is not to your first term. It is to the administration that ` +
       `coined the phrase 'imperial presidency,' and the verdict is that you have gone far beyond it." ` +
       `She puts it down. "Sir, that president resigned, and the writer knows perfectly well that we know that too."`,
  choices:[
    { label:`Take the compliment. Say he was weak.`, eff:{base:+7,press:-9,courts:-7,congress:-7,street:-6,auth:+11},
      res:`Favourably comparing yourself to a man who resigned rather than be removed is the sentence four historians put in the first paragraph of everything they ever write about you.` },
    { label:`"He broke the law. I have not." Leave it there.`, eff:{base:+5,courts:-3,congress:-3,press:-3,auth:+8},
      res:`A defensible line right up until somebody produces a list, and producing lists is what the entire press corps does for a living.` },
    { label:`Say nothing. It is a comparison, not a charge.`, eff:{press:+6,courts:+5,congress:+4,base:-3,auth:+4},
      res:`The piece runs for a day. Any response you might have given would have kept it running for a week.` },
    { label:`Invite the writer in and give him the full tour.`, eff:{base:+3,press:+8,courts:+4,congress:+4,auth:-1}, wild:true,
      res:`He accepts, spends nine hours in the building, and files something considerably more nuanced and roughly four times as damaging.` }]},

{ id:'t2-still-in-place', title:'Still In Place', who:C.hist, term:2, min:14, max:40, tags:['power','press'],
  src:'analysts noting that many core elements of the system remained in place and that courts sometimes still prevailed',
  text:`Dr Weir has brought the sentence that most annoys your critics. "'Many core elements of the system are ` +
       `still in place. Courts are ruling against him, and sometimes his administration abides by those decisions.'" ` +
       `She looks up. "Mr President, that is written by people who are alarmed. It is the strongest thing anybody ` +
       `has said in your defence, and it is not a defence at all."`,
  choices:[
    { label:`Then find which core elements are not load-bearing.`, eff:{base:+7,courts:-12,congress:-12,press:-10,street:-9,auth:+15},
      res:`There are four. You test three in eighteen months, and the fourth is the one that finally stops you, and nobody had guessed it would be that one.` },
    { label:`Quote the sentence constantly as vindication.`, eff:{base:+5,press:-4,courts:-3,auth:+6},
      res:`Quoting your critics' own concession is the oldest move in politics, and it works precisely on the people who were never worried to begin with.` },
    { label:`Leave the core elements alone. Take the term you have.`, eff:{courts:+12,congress:+11,press:+10,street:+8,base:-11,auth:-6},
      res:`You govern hard inside a system you decline to break. It is the least satisfying outcome on offer and the only one still standing in fifty years.` },
    { label:`Ask her to list the core elements so you have them.`, eff:{base:+4,courts:-8,congress:-7,press:-6,auth:+8}, wild:true,
      res:`She refuses, flatly, without softening it at all. It is only the second time in five years she has told you no, and she explains neither.` }]},

/* ---------- the indices and the record ---------- */

{ id:'t2-still-free', title:'Eighty-One Out Of A Hundred', who:C.state, term:2, min:12, max:38, tags:['foreign','press'],
  src:'a democracy index keeping a country in its "free" category while marking it down several points',
  text:`Muriel has the score. "Eighty-one out of a hundred, down from eighty-four. Twelve points below where ` +
       `we were twenty years ago." She turns the page. "Sir, we are still in the 'free' category. ` +
       `That is the good news, and it is also the only news, because the category has a floor and we are ` +
       `descending toward it at a perfectly measurable rate."`,
  choices:[
    { label:`Ignore the trend. Publicise the category.`, eff:{base:+6,press:-7,street:-6,congress:-5,auth:+8},
      res:`"Still free" is a slogan good for exactly one press cycle. Next year's number arrives on schedule and the slogan quietly retires itself.` },
    { label:`Fix the three indicators we score worst on.`, eff:{press:+10,courts:+9,congress:+8,street:+7,base:-9,auth:-4},
      res:`Judicial independence, oversight capacity, press access. It takes fourteen months, costs you two policies, and buys the score back four points.` },
    { label:`Dispute the index and fund a rival.`, eff:{base:+5,press:-8,street:-6,congress:-5,cash:-0.4,auth:+7},
      res:`Your index scores the country ninety-four. It is cited approvingly by four governments you would rather not be cited by, and by literally no one else.` },
    { label:`Ask what score would put us in the next category down.`, eff:{base:+3,press:-6,street:-5,congress:-4,auth:+6}, wild:true,
      res:`They answer in detail, because they publish the methodology like adults. The number is written on a card and kept in a drawer, and four people know it exists.` }]},

{ id:'t2-too-reductive', title:'"Too Reductive"', who:C.hist, term:2, min:16, max:42, tags:['press','rhetoric'],
  src:'a historian of authoritarianism declining to apply the strongest available label',
  text:`Dr Weir has brought a refusal. "She has written a book about strongmen, she places you firmly in that ` +
       `lineage, and she declines to use the F-word about you. She calls the label too reductive." ` +
       `She sets it down. "Mr President, that is not a defence. She is saying the word would let you off easy, ` +
       `because people would argue about a word instead of about what you have actually done."`,
  choices:[
    { label:`Use it constantly. "Even they say I am not."`, eff:{base:+7,press:-7,street:-6,courts:-5,congress:-5,auth:+9},
      res:`It works precisely as she predicted: nine months of argument about vocabulary and none about the record, which was the entire hazard she was flagging.` },
    { label:`Say nothing. Do not touch it.`, eff:{press:+5,street:+4,courts:+3,base:-3,auth:+4},
      res:`The refusal sits there, unclaimed by anybody, quietly doing exactly the work she intended. Quoted in four hundred pieces and never once as exoneration.` },
    { label:`Invite her to explain, at length, on the record.`, eff:{press:+8,street:+7,courts:+6,congress:+5,base:-7,auth:-2},
      res:`She takes ninety minutes to explain what word does fit. It is the most damaging interview of your presidency, and you personally commissioned it.` },
    { label:`Ask her which word she would use.`, eff:{base:+3,press:-5,street:-5,courts:-4,auth:+5}, wild:true,
      res:`She gives you three, in ascending order of accuracy. You remember all three for the rest of your life and repeat none of them out loud.` }]},

{ id:'t2-lawsuit-count', title:'Seven Hundred And Fifty-Three', who:C.lawyer, term:2, min:10, max:40, tags:['courts','press'],
  src:'litigation trackers counting hundreds of cases against an administration, with a genuinely mixed record',
  text:`Sy has the tracker. "Seven hundred and fifty-three cases. We have eighteen stays from the high court ` +
       `and roughly as many losses as wins below." He closes it. "Sir, the honest summary is that it is mixed, ` +
       `which is not what either side is selling and is exactly what the record actually says."`,
  choices:[
    { label:`Claim we win everything. Nobody counts.`, eff:{base:+6,courts:-8,press:-8,congress:-6,auth:+8},
      res:`Somebody counts. The tracker is public, updated weekly, and the gap between the claim and the column becomes its own recurring story.` },
    { label:`Publish our own win-loss record. Accurately.`, eff:{courts:+9,press:+9,congress:+7,base:-7,auth:+2},
      res:`A genuinely mixed record, published by you, kills the entire argument dead. Four outlets run it and not one of them can find an angle.` },
    { label:`Stop appealing the ones we will lose.`, eff:{courts:+11,congress:+8,press:+7,base:-8,auth:-2},
      res:`Litigating only the winnable cases raises the win rate and lowers the profile, which is what a competent legal operation looks like from the outside.` },
    { label:`Countersue all seven hundred and fifty-three.`, eff:{base:+5,courts:-11,congress:-8,press:-7,cash:-0.4,auth:+7}, wild:true,
      res:`The filing fee alone runs $190,000. Four of the countersuits turn out, by accident, to be against agencies of your own government.` }]},

/* ---------- allies, enemies and the shield ---------- */

{ id:'t2-shield', title:'The Shield', who:C.lawyer, term:2, min:6, max:32, tags:['justice','power'],
  src:'mass clemency for political allies read by scholars as a shield signalling protection for future loyalty',
  text:`"The clemency in the first term was never about the past." Sy is unusually direct. "Everyone who ` +
       `considers doing something for you now already knows what happens afterward. It is the cheapest loyalty ` +
       `programme ever devised, and sir, you did not have to say a single word for it to work."`,
  choices:[
    { label:`Say it out loud. Make the promise explicit.`, eff:{base:+7,courts:-13,congress:-11,press:-10,street:-8,auth:+14},
      res:`An explicit promise of clemency in advance is a different legal animal from a pattern, and four prosecutors start treating it as one before lunch.` },
    { label:`Say nothing. The pattern speaks for itself.`, eff:{base:+4,courts:-5,congress:-4,press:-4,auth:+10},
      res:`Unspoken, it is unindictable and just as effective. Nine people act on an assurance nobody ever actually gave them.` },
    { label:`State publicly that nobody should count on it.`, eff:{courts:+11,congress:+9,press:+8,street:+6,base:-10,auth:-5},
      res:`Four people who were about to do something extremely unwise quietly stop doing it. You will never know their names or what it was.` },
    { label:`Issue the pardons in advance, blank, undated.`, eff:{base:+5,courts:-12,congress:-10,press:-9,auth:+8}, wild:true,
      res:`Undated clemency for unspecified future offences gets tested in court within a year, and fails on the very first sentence of the very first opinion.` }]},

{ id:'t2-old-hands', title:'Nobody Asks Any More', who:C.cos, term:2, min:4, max:28, tags:['power','agencies'],
  src:'the phenomenon of institutions and staff conceding in advance of being asked',
  text:`Deborah has noticed something and has waited a fortnight to raise it. "Four things happened this month ` +
       `that you did not order. Nobody asked whether they were allowed. They got done because somebody ` +
       `downstairs worked out what you would want." She stops. "Sir, that is the thing the history books are about. ` +
       `It is not what you do. It is what people do without ever being told."`,
  choices:[
    { label:`Encourage it. Praise all four by name.`, eff:{base:+7,courts:-11,congress:-10,press:-9,street:-9,auth:+14},
      res:`Praise is exactly the confirmation the next twenty were waiting for. It works better than any instruction and cannot be filed as one.` },
    { label:`Say nothing. Let it run.`, eff:{base:+4,courts:-6,congress:-6,press:-5,street:-5,auth:+11},
      res:`Silence reads as approval and costs you nothing. The rate roughly doubles over the following quarter without a single order ever being issued.` },
    { label:`Tell the building, plainly, that nobody asked for this.`, eff:{courts:+11,congress:+10,press:+9,street:+9,base:-11,auth:-6},
      res:`Two of the four get reversed within a week. Saying it out loud turns out to be the only thing that ever breaks it, and it costs you the entire mechanism.` },
    { label:`Ask which of the four they think you wanted least.`, eff:{base:+3,courts:-6,congress:-5,press:-5,auth:+7}, wild:true,
      res:`A memo comes back ranking your own presumed wishes in order of confidence. It is uncomfortably accurate and is classified within the hour.` }]},

{ id:'t2-old-enemy', title:'The One Who Is Still There', who:C.opp, term:2, min:14, max:40, tags:['justice','press'],
  src:'sustained pressure on named political opponents across a full presidency',
  text:`Cordelia Ruiz-Bloom has outlasted four separate attempts to end her career and has requested a meeting. ` +
       `She arrives alone, sits down, and says: "I have been investigated by your government for six years. ` +
       `Nothing has ever been charged. I am not here to complain, Mr President. I am here because I would ` +
       `like to know whether it stops now, or whether it goes on for four more."`,
  choices:[
    { label:`"It goes on." Say it to her face.`, eff:{base:+7,courts:-12,congress:-11,press:-11,street:-9,auth:+12},
      res:`She writes it down in the car, dates it, and gives copies to three people. It is quoted in her memoir, at a hearing, and eventually in an opinion.` },
    { label:`"It stops." Close every file that afternoon.`, eff:{courts:+12,congress:+11,press:+11,street:+9,base:-12,auth:-6},
      res:`She does not believe you for nine months. When she finally does, she says so publicly and unprompted, and it is worth more than any ad buy you could make.` },
    { label:`Say nothing at all. Let her leave uncertain.`, eff:{base:+4,courts:-5,congress:-5,press:-5,auth:+9},
      res:`Uncertainty is cheaper than either answer and does most of the work of the worse one, which is exactly why it is the option you choose.` },
    { label:`Offer her a job.`, eff:{base:-6,courts:+7,congress:+8,press:+8,street:+5,auth:+2}, wild:true,
      res:`She declines in four words and then, for reasons neither of you can explain, stays another hour talking about her father.` }]},

/* ---------- the succession ---------- */

{ id:'t2-heir', title:'The Name On The Other Card', who:C.vp, term:2, min:24, max:44, tags:['elections','power'],
  src:'the problem of succession in a movement organised around one person',
  text:`Chet has two cards. "This is the movement without you: fifty-one. This is me carrying it: thirty-three." ` +
       `He puts them down side by side. "Sir, the gap is not a personality problem. Eighteen points of that ` +
       `movement is a single person, and a person cannot be handed to anybody. I have stopped pretending otherwise."`,
  choices:[
    { label:`Then nobody inherits it. It ends with me.`, eff:{base:+8,congress:-10,courts:-8,press:-8,street:-8,auth:+13},
      res:`A movement that cannot outlive you also cannot survive you, and both become true on the same day, a day you do not get to schedule.` },
    { label:`Endorse Chet now and campaign for him for two years.`, eff:{base:-6,congress:+9,courts:+7,press:+7,street:+7,auth:+5},
      res:`He closes eight of the eighteen points in twenty-two months. It is the hardest political work anybody does in your administration, and you do most of it yourself.` },
    { label:`Build the machine instead. Rules, treasury, succession.`, eff:{base:-8,congress:+11,courts:+9,press:+8,street:+7,auth:+6},
      res:`An institution instead of an heir. It wins three of the next five elections and stops mentioning your name somewhere around the second one.` },
    { label:`Endorse four people simultaneously.`, eff:{base:+3,congress:-7,press:-5,street:-4,auth:+4}, wild:true,
      res:`All four campaign as the anointed successor, citing the identical sentence, for eleven straight months. The primary that follows is the most entertaining in a century.` }]},

{ id:'t2-final-court', title:'The Last Appointment', who:C.cj, term:2, min:20, max:44, tags:['courts','power'],
  src:'lifetime judicial appointments as the most durable element of a presidency',
  text:`Chief Justice Stone has come about a vacancy and stays for something else. "You have appointed a fifth ` +
       `of the federal bench. Average age forty-six." She does not soften it. "Mr President, every executive ` +
       `order you have signed can be revoked in an afternoon. This cannot be revoked at all. This is the ` +
       `presidency. Everything else is weather."`,
  choices:[
    { label:`Appoint the youngest qualified name on the list.`, eff:{base:+6,courts:-7,congress:-7,press:-6,auth:+12},
      res:`Thirty-nine years old, confirmed by two votes, and on the bench until roughly 2065. Nothing else you have done will still be running by then.` },
    { label:`Appoint the best lawyer on the list, whoever that is.`, eff:{courts:+11,congress:+9,press:+8,base:-8,auth:+6},
      res:`She rules against you twice in the first year and is cited approvingly for four decades. Stone tells you once, quietly, that it was the right call.` },
    { label:`Leave the seat. Let the next president fill it.`, eff:{courts:+9,congress:+10,press:+8,street:+6,base:-13,auth:-6},
      res:`A vacancy voluntarily left open is unheard of, read by nearly everybody as weakness, and by four people as the single most constitutional act of your term.` },
    { label:`Appoint yourself.`, eff:{base:+5,courts:-11,congress:-9,press:-8,auth:+6}, wild:true,
      res:`Nothing in the text technically forbids it, a fact four commentators note in tones of rising alarm right up until the nomination is quietly withdrawn.` }]},

/* ---------- the money and the exit ---------- */

{ id:'t2-net-worth', title:'Roughly Double', who:C.ethics, term:2, min:12, max:42, tags:['money','press'],
  src:'a president\'s net worth roughly doubling while in office, documented in his own filings',
  text:`Miriam has the eight-year comparison and has laid it out flat. "It has roughly doubled, sir, and then ` +
       `gone up again. All of it disclosed. All of it on forms you personally signed." She straightens the pages. ` +
       `"That is the defence, and it is a real defence, and it is also exactly how everybody knows."`,
  choices:[
    { label:`Say the office had nothing to do with it.`, eff:{base:+4,press:-10,courts:-9,congress:-9,street:-6,cash:+0.4,auth:+7},
      res:`The single largest line is a token that did not exist before you were inaugurated. Four reporters establish this before lunch, and one of them brings a chart.` },
    { label:`"The market went up. Everybody profited."`, eff:{base:+6,press:-11,courts:-8,congress:-9,street:-7,auth:+6},
      res:`Set beside the actual figure, the line becomes the most-quoted sentence of your eight years in office. You meant it entirely sincerely, which is the part that lands hardest.` },
    { label:`Publish the full eight-year comparison yourself.`, eff:{press:+9,courts:+8,congress:+7,base:-6,auth:+1},
      res:`Two hours of questions, all answered, once. It is the worst afternoon of your second term and it ends the story in that same afternoon.` },
    { label:`Put the entire increase into the library foundation.`, eff:{base:+3,press:+7,courts:+6,congress:+6,cash:-0.9,auth:+2}, wild:true,
      res:`The largest charitable transfer in American political history, and it goes to an entity you personally control, a detail four journalists catch within the hour.` }]},

{ id:'t2-quiet-year', title:'The Year Nothing Happened', who:C.poll, term:2, min:28, max:46, tags:['press','power'],
  src:'the characterisation of an administration as the most expansive peacetime assertion of executive power',
  text:`Nadia has a strange finding. "There has not been an emergency for eleven months. No deployment, ` +
       `no order anybody sued over, no crisis." She frowns at her own sheet. "Approval is up nine points, sir. ` +
       `And the word people keep using in the focus groups is that it feels *normal* again, which is the ` +
       `first time that word has ever surfaced in eight years of this research."`,
  choices:[
    { label:`End the quiet. Nine points is not the objective.`, eff:{base:+8,courts:-11,congress:-10,press:-9,street:-9,auth:+15},
      res:`It takes four days to burn through eleven months of accumulated goodwill. Nadia keeps the sheet and shows it to people for the rest of her career.` },
    { label:`Keep the quiet. Govern. Sign nothing dramatic.`, eff:{congress:+11,courts:+10,press:+10,street:+9,base:-11,auth:-4},
      res:`A calm, competent, entirely unremarkable year. It is the best-polling stretch of either term, and your movement calls it, accurately, a betrayal.` },
    { label:`Keep the quiet publicly. Keep moving privately.`, eff:{base:+3,courts:-4,congress:-4,press:+4,street:+3,auth:+11},
      res:`Nothing announced, everything continued. It is the most effective quarter of your presidency, and there is nothing whatsoever to report about it.` },
    { label:`Declare an emergency about the absence of emergencies.`, eff:{base:+5,courts:-9,congress:-8,press:-8,street:-6,auth:+8}, wild:true,
      res:`The proclamation cites the eleven-month gap itself as evidence of dangerous complacency. It gets published, and Nadia's approval line drops nine points in a fortnight.` }]},

{ id:'t2-first-draft', title:'The First Serious History', who:C.hist, term:2, min:34, max:46, tags:['press','power'],
  src:'the scholarly assessment that the fair characterisation was the most expansive peacetime assertion of unilateral executive power, still being checked',
  text:`Dr Weir has brought her own manuscript and has not been asked to. "Eight years. I have a conclusion ` +
       `and I am not going to soften it for you." She hands it over. "The most expansive assertion of unilateral ` +
       `executive power in modern peacetime, genuinely alarming, corrosive to democratic quality, and still ` +
       `operating inside a system that was checking it. All four clauses, Mr President. Not three."`,
  choices:[
    { label:`Have counsel look at whether it can be stopped.`, eff:{base:+6,courts:-13,congress:-11,press:-13,street:-10,auth:+11},
      res:`It cannot. The attempt appears in the second edition as a four-page appendix and becomes the single most-quoted section of the entire book.` },
    { label:`Write a foreword disputing the fourth clause.`, eff:{base:+5,press:-5,courts:-5,congress:-4,auth:+7},
      res:`Arguing in print that the system was not, in fact, checking you is the one clause you should have left completely alone, and every reviewer says so.` },
    { label:`Write a foreword. Concede the fourth clause.`, eff:{courts:+11,congress:+10,press:+12,street:+8,base:-12,auth:-6},
      res:`A president conceding, in print, that the checks held. It is the single most valuable paragraph ever written about you, and you wrote it yourself.` },
    { label:`Ask to write the final chapter yourself.`, eff:{base:+4,press:-6,courts:-5,congress:-4,auth:+5}, wild:true,
      res:`She agrees, on condition it runs unedited and clearly attributed. It is four pages long and, by a wide margin, the worst-reviewed section of the book.` }]},

{ id:'t2-last-day', title:'The Last Morning', who:C.usher, term:2, min:44, max:48, tags:['power','press'],
  src:'the distinguishing feature of the record being that transfers of power continued to occur',
  text:`Alvin has the schedule for the morning and it is one page. "Coffee at seven. The car at eleven. ` +
       `The other family arrives at eleven-fifteen." He is entirely calm; he has done this seven times. ` +
       `"Sir, I have laid out everything you asked for. Is there anything else you would like me to do?"`,
  choices:[
    { label:`"Cancel the eleven-fifteen."`, eff:{base:+8,courts:-14,congress:-14,press:-12,street:-12,auth:+16},
      res:`Alvin says "Yes, sir," and does not move. After a moment he says it again, still does not move, and that is how you find out exactly where the line was.` },
    { label:`"Nothing. Thank you, Alvin."`, eff:{courts:+13,congress:+12,press:+12,street:+11,base:-13,auth:-9},
      res:`You leave at eleven. It is the single most ordinary thing that happens all decade, and it is the reason there is still a country left to be ordinary in.` },
    { label:`Leave a letter in the desk for whoever is next.`, eff:{courts:+10,congress:+9,press:+11,street:+8,base:-8,auth:-4},
      res:`Four paragraphs, handwritten, entirely without malice. Never published. The recipient mentions it once, twenty years later, and declines to say more.` },
    { label:`Ask him which of the seven handled it best.`, eff:{base:+3,press:+6,street:+5,congress:+4,auth:-2}, wild:true,
      res:`He considers it seriously for a long moment, then answers honestly. It is not you. He says it kindly, and you know better than to ask him to explain.` }]}

);
})();
