/* ============================================================
   PACK E — SECOND TERM ONLY  (term: 2)
   Everything here is gated on having already served four years.
   No next election, no learning curve, no honeymoon, and a staff
   that has stopped asking whether things are allowed.
   20 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

{ id:'t2-clock', title:'The Countdown', who:C.cos, term:2, min:2, max:20, tags:['power'],
  text:'Deborah has put a number on the wall. It is not a poll. It is the number of days remaining. ' +
       '"Everyone in this building can see it, sir. Which means everyone in this building is already deciding what they do afterwards."',
  choices:[
    { label:'Take it down. Nobody counts anything.', eff:{base:+5,congress:-5,press:-4,auth:+8},
      res:'The number comes off the wall and into everyone\'s head, where it cannot be removed and where it is checked more often.' },
    { label:'Leave it up. Use it. Move faster.', eff:{base:+6,congress:-7,courts:-7,press:-5,street:-6,auth:+13},
      res:'The number becomes the organising principle of the administration. Everything is triaged against it and everything that cannot be finished is abandoned in the first fortnight.' },
    { label:'Add a second number: how many judges are still unconfirmed.', eff:{courts:+9,congress:-4,press:+2,base:+3,auth:+7},
      res:'Two numbers on the wall, one falling and one rising. It is the most focused management decision of your entire presidency.' },
    { label:'Set the number to count up instead. Nobody says up to what.', eff:{base:+2,congress:-6,courts:-4,press:-6,auth:+9}, wild:true,
      res:'A number on the wall of the West Wing that increases every day toward nothing specified. Four hundred staff see it daily and nobody asks, which is the entire experiment.' }]},

{ id:'t2-old-hands', title:'The Ones Who Came Back', who:C.cos, term:2, min:2, max:24, tags:['agencies','power'],
  text:'Four hundred alumni of the first term have applied to return. They know where everything is, ' +
       'they know what did not work, and — Deborah notes — they know exactly which objections got people fired last time.',
  choices:[
    { label:'Hire all four hundred.', eff:{base:+7,congress:-6,courts:-7,press:-5,street:-5,auth:+13},
      res:'Nobody needs orientation and nobody needs telling twice. The administration moves at roughly four times the speed of the first term and objects to roughly nothing.' },
    { label:'Hire the competent ones. Screen for the burned-out.', eff:{congress:+4,street:+4,press:+3,auth:+6},
      res:'You take two hundred and eleven and leave the rest. The ones you leave give interviews, and four of the interviews are extremely specific.' },
    { label:'None of them. Fresh people, no memory of the limits.', eff:{base:+4,congress:-8,courts:-8,press:-4,auth:+11},
      res:'A staff with no institutional memory has no institutional caution. They attempt four things in the first month that the old hands would have said were impossible, and two of them work.' },
    { label:'Hire the four hundred, and also the ones who resigned in protest.', eff:{base:-4,congress:+4,courts:+3,press:+2,street:+2,auth:-2}, wild:true,
      res:'Nine of the protest-resigners come back. They are the only people in the building who will tell you no, and you have deliberately re-hired them, which nobody can explain.' }]},

{ id:'t2-revenge-tour', title:'The Reckoning', who:C.ag, term:2, min:4, max:30, tags:['justice','power'],
  text:'"In the first term we were told to wait until after the election." Bo puts down a folder that has visibly ' +
       'been opened many times. "Sir, there is no after the election now. That was the whole basis of the advice."',
  choices:[
    { label:'Open every file. All of them. Today.', eff:{base:+3,courts:-14,press:-5,congress:-11,street:-10,auth:+17},
      res:'The advice to wait was never about the law. It was about the ballot. Removing the ballot removed the advice, and everyone who gave it understands that now.' },
    { label:'The four with actual evidence. Nothing else.', eff:{courts:-5,press:-4,congress:-4,base:+4,auth:+9},
      res:'Four real cases, competently brought. Two convictions. It is more damaging to your opponents than four hundred bad ones would have been.' },
    { label:'Close the folder. Permanently.', eff:{courts:+11,press:+11,congress:+9,street:+8,base:-9,auth:-7},
      res:'Bo takes it away and you never see it again. He tells one person, years later, that it was the moment he stopped preparing to resign.' },
    { label:'Open every file, starting with the one on your own family.', eff:{base:+1,congress:+3,courts:+3,street:-1,auth:-2}, wild:true,
      res:'It is a genuine investigation with a genuine prosecutor and it finds two genuine problems. Having gone first, nobody can call the other four hundred political.' }]},

{ id:'t2-monument-living', title:'The Living Monument', who:C.hist, term:2, min:8, max:34, tags:['vanity','power'],
  text:'Dr. Weir: "There is a statutory prohibition on federal monuments to living persons. It has held since 1946." ' +
       'She turns a page. "There is a bill to repeal it. It has fifty-four cosponsors."',
  choices:[
    { label:'Push it through. Break ground before the term ends.', eff:{base:+6,press:-5,street:-9,congress:-7,courts:-6,cash:-0.4,auth:+12},
      res:'It passes 218–211. Ground is broken in the final year. Construction continues for eleven years under three subsequent administrations, none of which can find a way to stop it.' },
    { label:'Wait until I\'m dead like everybody else.', eff:{press:+8,street:+7,congress:+5,base:-6,auth:-2},
      res:'Weir writes down what you said, exactly, because she has been waiting eight years for a sentence she could put in the record without a caveat.' },
    { label:'Build it privately. On private land. With private money.', eff:{base:+7,press:-4,street:-3,cash:-0.6,auth:+5},
      res:'Nobody can object to it and nobody has to fund it and it is four hundred feet tall. It is, in every sense, the correct solution.' },
    { label:'Repeal it, and build the monument to the office rather than the man.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+4,auth:-2,cash:-0.3}, wild:true,
      res:'Four hundred feet of granite with no name on it at all. It is finished in eleven years and it is genuinely beautiful and nobody is ever able to attack it.' }]},

{ id:'t2-loyalty-final', title:'The Last Purge', who:C.cos, term:2, min:10, max:36, tags:['agencies','power'], req:r=>r.flags.scheduleQ,
  text:'"The reclassification worked. There are now eleven thousand positions that serve at pleasure." ' +
       'Deborah does not look up. "The list of people currently in them who have ever objected to anything is nine hundred names long."',
  choices:[
    { label:'All nine hundred. This month.', eff:{base:+3,congress:-10,courts:-10,press:-5,street:-10,auth:+18},
      res:'Nine hundred people who said no once, gone in four weeks. What remains is a government of people who have never said no and never will, which is the only thing you ever actually needed.' },
    { label:'The forty who objected in writing. Make the point.', eff:{congress:-5,courts:-5,press:-4,base:+4,auth:+11},
      res:'Forty removals and eleven thousand people who now understand that objections are recorded. The chilling effect costs nothing and reaches everybody.' },
    { label:'Nobody. The reclassification was the point, not the firing.', eff:{congress:+6,courts:+6,press:+6,street:+5,base:-5,auth:+3},
      res:'The threat is permanent and the workforce is intact. It is more power than firing them and considerably less trouble.' },
    { label:'Fire the nine hundred and hire them all back the following week.', eff:{base:+2,congress:-9,courts:-9,press:-9,street:-8,auth:+12}, wild:true,
      res:'Everyone learns they can be removed at will and everyone keeps their job. It is the purest possible demonstration of power and it costs four days of payroll.' }]},

{ id:'t2-heir', title:'The Anointing, Reconsidered', who:C.vp, term:2, min:14, max:40, tags:['succession','base'], req:r=>r.flags.chet,
  text:'Chet has stopped asking for the endorsement. He has stopped asking for anything. ' +
       'He now has four hundred donors of his own, a schedule that does not route through your office, and a warmth toward you that Deborah describes as "professional."',
  choices:[
    { label:'Destroy him now, while you still can.', eff:{base:-9,congress:-7,press:-5,street:-4,auth:+11},
      res:'It works. He is finished within nine months. The movement, deprived of an heir, discovers that it can also be deprived of a leader.' },
    { label:'Make him a partner. Publicly. Everything shared.', eff:{base:+8,congress:+6,press:+4,auth:-8},
      res:'Two men at every podium. Within a year the crowd has worked out which one of you is the future, and it does the arithmetic out loud.' },
    { label:'Outlast him. He needs an election and there isn\'t one.', eff:{base:+4,congress:-4,press:-4,auth:+12},
      res:'His entire theory requires a normal succession. Everything you build in the final years is aimed at the proposition that there will not be one.' },
    { label:'Make him do your job for a week while you watch.', eff:{base:+2,congress:+2,press:-2,street:-3,auth:+5}, wild:true,
      res:'Chet runs the country for seven days. He is competent, exhausted and visibly shaken by Thursday. He stops asking for things for about eleven months.' }]},

{ id:'t2-foreign-legacy', title:'The Deal', who:C.state, term:2, min:12, max:40, tags:['foreign','press'],
  text:'Muriel has a genuinely historic agreement within reach. It requires eleven months of quiet diplomacy, ' +
       'four concessions your base will hate, and no announcements until it is signed.',
  choices:[
    { label:'Do it. Quietly. Announce nothing for eleven months.', eff:{press:+11,street:+9,congress:+8,courts:+5,base:-11,auth:+4},
      res:'It is signed in the final spring. It holds for thirty years. It is the only thing about your presidency that appears in foreign textbooks under a neutral heading.' },
    { label:'Announce the framework now. Take the credit early.', eff:{base:+7,press:-5,street:-4,congress:-4,auth:+4},
      res:'The premature announcement gives four domestic opponents in the other country the eleven months they needed. It collapses in August.' },
    { label:'Drop it. The concessions aren\'t worth it.', eff:{base:+6,press:-6,street:-5,congress:-5,auth:+3},
      res:'Muriel resigns in the autumn. Her resignation letter is two sentences and the second sentence is about the agreement.' },
    { label:'Do the deal and let the other side announce it as their victory.', eff:{base:-9,congress:+4,courts:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'You concede every headline and keep every clause. It holds for thirty years. Four foreign ministers know exactly what you did and none of them ever says so publicly.' }]},

{ id:'t2-dynasty', title:'The Name On The Ticket', who:C.girl, term:2, min:16, max:42, tags:['succession','base'],
  text:'Ivy would like to run. Not for anything small. She has the name, the donors, the discipline ' +
       'and — she points out, evenly — eight years of watching how it is actually done.',
  choices:[
    { label:'Clear the field for her. Everything you have.', eff:{base:+6,press:-5,congress:-6,street:-6,courts:-4,auth:+9},
      res:'A dynasty requires two things: a name and an apparatus. You have spent eight years building the second and were born with the first.' },
    { label:'"Win something small first." Make her earn it.', eff:{press:+6,congress:+5,street:+4,base:-3,auth:+3},
      res:'She wins a governorship four years later, on her own, by nine points, and is a far more formidable politician for it than she would otherwise have been.' },
    { label:'"No. It ends with me."', eff:{press:+8,street:+7,congress:+6,base:-8,auth:-4},
      res:'She accepts it without argument, which is how you know she had already decided you would say it, and that she has a plan that does not require your agreement.' },
    { label:'Tell her to run against you. Right now. In a primary.', eff:{base:+2,congress:+1,press:-1,street:-1,auth:-2}, wild:true,
      res:'She gets 31% against a sitting president. It is the best possible launch for her and the worst possible result for you and you did it on purpose, mostly.' }]},

{ id:'t2-book', title:'The Memoir', who:C.writer, term:2, min:18, max:44, tags:['money','press'],
  text:'Gideon Poe has been offered $40 million to ghostwrite yours. He has come to tell you before accepting. ' +
       '"Sir, I would write the true one. That is the only version I know how to do."',
  choices:[
    { label:'Hire him. Tell him everything.', eff:{press:+8,street:+6,congress:+4,base:-6,cash:+0.8,auth:-2},
      res:'It is 900 pages, unflattering in four chapters, and it is the reason anybody takes your presidency seriously as a subject rather than a symptom.' },
    { label:'Hire someone else. Somebody friendlier.', eff:{base:+6,press:-6,street:-4,cash:+0.9,auth:+3},
      res:'It sells 2.1 million copies in the first month and is remaindered by spring. Nobody cites it, including your own defenders.' },
    { label:'Write it yourself. Post it in instalments. Free.', eff:{base:+9,press:-4,street:-2,cash:-0.3,auth:+6},
      res:'Four hundred instalments over two years, unedited, direct to eleven million people. It is unreadable, unavoidable, and the most-quoted primary source about you that exists.' },
    { label:'Publish the true one and the flattering one simultaneously.', eff:{base:+2,congress:+2,auth:-2,cash:+0.9}, wild:true,
      res:'Two books, same day, same author, contradicting each other on four hundred pages. It sells 3 million and future historians describe the pairing as \'unusually honest.\'' }]},

{ id:'t2-institution-final', title:'The Last Institution', who:C.cj, term:2, min:20, max:44, tags:['courts','power'],
  text:'Chief Justice Stone has asked to see you. She has never asked twice before. ' +
       '"Three of the four things that used to check you no longer do. I am here to tell you that I know that, and that you know it."',
  choices:[
    { label:'"Then we understand each other."', eff:{base:+3,courts:-12,press:-5,congress:-8,street:-7,auth:+15},
      res:'She leaves without shaking your hand. Over the following two years the Court rules against you four times and each one is 5–4, and each time the fifth vote costs somebody something.' },
    { label:'"Tell me what you need to keep the fourth one working."', eff:{courts:+12,press:+9,congress:+8,street:+7,base:-8,auth:-6},
      res:'She names three things. Two are procedural and one is enormous. You give her all three and never tell anybody, including Deborah.' },
    { label:'"There were never four. There were only ever people."', eff:{courts:-6,press:-4,base:+4,auth:+11},
      res:'She agrees with you, which is the worst thing she could have done, and says so, and neither of you has anything to add.' },
    { label:'Ask her to write the list of things you should not be able to do.', eff:{base:-9,congress:+4,courts:+5,press:+4,street:+4,auth:-6}, wild:true,
      res:'She writes nine. You implement four of them by executive order, binding your own successors. It is the most extraordinary document either of you ever signs.' }]},

{ id:'t2-guard-standing', title:'The Standing Force', who:C.gen, term:2, min:20, max:44, tags:['military','power'], req:r=>r.flags.guard,
  text:'The quick reaction force from the first term now has a budget line, a permanent barracks and a name. ' +
       'Tarrant\'s successor is briefing you. He is enthusiastic. Tarrant was never enthusiastic.',
  choices:[
    { label:'Double it. Give it its own command.', eff:{base:+3,street:-14,courts:-11,congress:-10,press:-5,auth:+18},
      res:'A standing domestic force of eleven thousand reporting through a chain that touches no governor and no court. It is a line item in an appropriations bill on page 1,411.' },
    { label:'Keep it as it is. Don\'t grow it.', eff:{street:-4,courts:-3,press:-3,auth:+7},
      res:'A permanent capability held at a constant size, which is how every permanent capability begins and none of them stay.' },
    { label:'Disband it. Fold it back into the Guard.', eff:{street:+11,courts:+9,congress:+9,press:+9,base:-8,auth:-9},
      res:'It takes fourteen months to unwind and it is unwound. It is the single largest voluntary surrender of power by an American president since 1783.' },
    { label:'Rename it the Federal Flood Service and give it shovels.', eff:{base:+1,congress:+3,courts:+3,street:+1,auth:-2}, wild:true,
      res:'Eleven thousand troops with earth-moving equipment and no riot gear. The capability is intact, the name is unthreatening, and it can be re-tasked in an afternoon.' }]},

{ id:'t2-money-final', title:'The Portfolio', who:C.lawyer, term:2, min:14, max:44, tags:['money'],
  text:'Sy has the eight-year figure. It is on one page. He has not put it in an email, a folder or a phone. ' +
       '"Sir, this number is going to be the first line of every obituary. I would like you to see it before somebody else calculates it."',
  choices:[
    { label:'Keep going. There are four more years of this.', eff:{press:-5,congress:-8,courts:-7,street:-6,base:+1,cash:+1.6,auth:+8},
      res:'The number roughly doubles again. It is calculated by a wire service in the final spring and it is, as Sy predicted, the first line.' },
    { label:'Stop taking anything new. Ride out the term clean.', eff:{press:+9,congress:+7,courts:+6,street:+5,base:-4,cash:-0.4,auth:-2},
      res:'Eighteen months of no new deals. It does not undo the first six and a half years, and it does change what the last chapter of every book says.' },
    { label:'Put all of it into a foundation with your name on it.', eff:{press:+5,congress:+4,street:+4,cash:-1.0,auth:+5},
      res:'A $6 billion foundation, permanent, with a board you appoint for life. You have converted a fortune into an institution, which is the only form of money that survives a person.' },
    { label:'Publish the number yourself, on a Tuesday, with no comment.', eff:{base:+1,congress:+3,courts:+3,street:-1,auth:-2}, wild:true,
      res:'One figure on a single page from the President\'s own office. It is enormous. Volunteering it removes the entire investigative genre in one morning.' }]},

{ id:'t2-old-enemy', title:'The Call', who:C.opp, term:2, min:18, max:44, tags:['congress','street'],
  text:'Cordelia Ruiz-Bloom has requested a private meeting. She has opposed you for eight years, effectively, ' +
       'and has never once asked you for anything. She is asking now.',
  choices:[
    { label:'Take the meeting. Hear her out.', eff:{congress:+9,press:+8,street:+8,courts:+5,base:-7,auth:+1},
      res:'She wants a disaster aid package for a region that voted against you by forty points. You give her most of it. Neither of you ever mentions the meeting publicly.' },
    { label:'Take it and record it. Use it later.', eff:{base:+4,congress:-7,press:-5,courts:-6,street:-5,auth:+9},
      res:'The recording is leaked eleven months later. It contains her asking for hurricane relief and you agreeing, which makes both of you look better than intended.' },
    { label:'Refuse. Eight years is eight years.', eff:{base:+6,congress:-8,press:-4,street:-7,auth:+3},
      res:'The package passes anyway, four months later, with nine of your own senators voting for it. You were the only obstacle and you were routed around.' },
    { label:'Give her whatever she asks for, unread, in front of the press.', eff:{base:-10,congress:+4,courts:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'You sign a document you have not read because she asked. It is a disaster relief package. It is also, everyone understands, a demonstration that you could have done this for eight years.' }]},

{ id:'t2-final-court', title:'The Fifth Seat', who:C.ag, term:2, min:22, max:46, tags:['courts','power'],
  text:'A fifth vacancy. Five appointments to the highest court by one president has happened twice in two hundred years. ' +
       'Bo has the shortlist. Every name on it is under fifty.',
  choices:[
    { label:'The youngest. Forty-one. Confirm in three weeks.', eff:{courts:+15,congress:-6,press:-5,street:-6,base:+5,auth:+12},
      res:'He will still be sitting in 2071. Nothing else you do — no order, no statute, no wall — reaches that far forward.' },
    { label:'The most respected. Fifty-eight. Confirm 84–16.', eff:{courts:+10,congress:+8,press:+8,street:+6,base:-3,auth:+6},
      res:'A jurist of genuine stature who rules with you two thirds of the time and against you, devastatingly, on the third.' },
    { label:'Leave it vacant. Eight is a fine number this year.', eff:{courts:-6,congress:+4,press:+4,base:-6,auth:+2},
      res:'A 4–4 court affirms lower court rulings without setting precedent, which for eleven months means the courts of appeal are the highest law in the land.' },
    { label:'Ask the four sitting justices you appointed who they would pick.', eff:{base:+1,congress:+4,courts:+5,press:-1,street:-1,auth:-2}, wild:true,
      res:'They name the same person, independently, which nobody expected. She is confirmed 88-12 and is the finest appointment of your presidency and you had almost nothing to do with it.' }]},

{ id:'t2-quiet-year', title:'The Quiet Year', who:C.poll, term:2, min:24, max:44, tags:['base','press'],
  text:'Nadia has something she has never had for you: a good number, sustained, across every demographic. ' +
       'Inflation is down, the border is quiet, nobody is at war. "Sir, you are, right now, genuinely popular. It will not last and I do not know what it is for."',
  choices:[
    { label:'Spend all of it. Take the four hardest things.', eff:{base:-6,congress:-8,courts:-9,press:-8,street:-7,auth:+16},
      res:'Popularity is a currency and you convert every point of it into permanent structural power. By spring the number is back where it was and the structures are not.' },
    { label:'Bank it. Do nothing. Stay popular.', eff:{base:+8,press:+7,street:+7,congress:+6,auth:-4},
      res:'You are, for fourteen months, a broadly liked president of a calm country. It is the happiest anybody in this building has ever been and it achieves nothing at all.' },
    { label:'Spend half. Take the two that matter.', eff:{base:-2,congress:-4,courts:-4,press:-4,street:-3,auth:+10},
      res:'Two enormous things done from a position of strength, absorbed by the country because the country was, briefly, in a good mood. This is how it is supposed to be done.' },
    { label:'Spend it doing absolutely nothing newsworthy. On purpose.', eff:{base:+2,congress:+3,courts:+3,street:+1,auth:-3}, wild:true,
      res:'Fourteen months of competent, boring government. Approval reaches 61%. Four commentators publish pieces asking whether the country was simply tired, and they are right.' }]},

{ id:'t2-old-photo', title:'The First Term', who:C.photog, term:2, min:20, max:46, tags:['press','vanity'],
  text:'Renata Silk has been asked to assemble the official retrospective. Eight years, four hundred thousand frames. ' +
       'She has made a selection of two hundred. Eleven of them, she notes, "are not the version we published at the time."',
  choices:[
    { label:'Publish her selection. All two hundred.', eff:{press:+10,street:+8,congress:+6,base:-6,auth:+1},
      res:'The eleven are the ones everybody writes about. They are also the reason the book is treated as a document rather than a brochure.' },
    { label:'Publish the approved versions only.', eff:{base:+5,press:-6,street:-4,auth:+3},
      res:'A handsome, expensive, entirely worthless object. Four libraries accept it. None of them display it.' },
    { label:'Publish both. Side by side. Same page.', eff:{press:+11,street:+9,congress:+7,base:-4,auth:+3},
      res:'The published version and the real version, adjacent, two hundred times. It is the most self-aware thing anyone in this administration ever authorises and Renata cannot quite believe you said yes.' },
    { label:'Publish the eleven she chose and none of the others.', eff:{base:-4,congress:+2,press:+2,street:+2,auth:-2}, wild:true,
      res:'Eleven photographs, no captions, no context. It is the most artistically confident thing the administration does and Renata Silk is, for the first time in eight years, satisfied.' }]},

{ id:'t2-succession-statute', title:'The Statute', who:C.lawyer, term:2, min:26, max:46, tags:['power','succession'],
  text:'"There is an argument — a bad one, but a printed one — that the Twenty-Second Amendment restricts being elected ' +
       'and not being appointed." Sy sets it down. "It requires you to be Speaker of the House. It has been written up in a law review."',
  choices:[
    { label:'Have four allies introduce it. See who objects.', eff:{base:+4,congress:-11,courts:-10,press:-5,street:-9,auth:+16},breaks:'termlimit',
      res:'Nine members endorse it. Two hundred say nothing. The silence of the two hundred is the actual finding of the experiment and it is not reassuring.', flag:'speakerPlan' },
    { label:'Have it printed and circulated. Never endorse it.', eff:{base:+4,congress:-6,courts:-6,press:-4,auth:+11},
      res:'An idea that exists in print is an idea that can be picked up by somebody else. You have not proposed anything. You have simply made it available.' },
    { label:'"That\'s a law review article, Sy. Put it away."', eff:{congress:+9,courts:+9,press:+9,street:+7,base:-6,auth:-6},
      res:'He puts it away. It is published anyway, by its author, and is cited eleven times over the next decade by people who are not you.' },
    { label:'Have it introduced by the opposition. Anonymously.', eff:{base:+2,congress:-10,courts:-10,press:-10,street:-8,auth:+12}, wild:true,
      res:'A member of the other party introduces it without knowing where it came from. It fails, but it is now bipartisan in origin, which is the only quality it needed.' }]},

{ id:'t2-old-friend', title:'The First Believer', who:C.pastor, term:2, min:16, max:44, tags:['base','street'],
  text:'Reverend Muncy has terminal cancer. He was the first person of any standing to back you, nine years ago, ' +
       'when it cost him half his congregation. He has asked you to speak at his funeral. He has also asked you not to make it political.',
  choices:[
    { label:'Speak. Keep the promise. Say nothing political.', eff:{street:+9,press:+9,congress:+6,base:+5,auth:-1},
      res:'Eleven minutes about one man. No policy, no enemies, no applause lines. Four people who have written unkind things about you for a decade say something else that week.' },
    { label:'Speak. Use it. He\'d have wanted the movement served.', eff:{base:+6,street:-9,press:-5,congress:-6,auth:+4},
      res:'His widow does not shake your hand at the door. It is a small thing, filmed by nobody, and you think about it more than you expect to.' },
    { label:'Don\'t go. Send a letter.', eff:{base:-7,street:-4,press:-3},
      res:'The letter is read aloud by his son, in full, and it is generous and specific and you did not write it, and everyone in that church can tell.' },
    { label:'Sit with him instead. The whole last week. Cancel everything.', eff:{base:+2,congress:+3,street:+1,auth:-2}, wild:true,
      res:'You cancel a week of the presidency to sit in a hospice in Missouri. Nothing is announced. It is discovered afterwards from a visitor log and it is the last thing anyone expected of you.' }]},

{ id:'t2-last-cabinet', title:'The Last Cabinet Meeting', who:C.cos, term:2, min:42, max:48, tags:['power','press'],
  text:'Twenty-two people around the table for the final time. Deborah has an agenda with one item on it. ' +
       'The item is "Transition." Four of the twenty-two have already accepted jobs elsewhere.',
  choices:[
    { label:'Work the transition. Hand it over properly.', eff:{congress:+9,courts:+8,press:+9,street:+8,base:-7,auth:-3},
      res:'Briefing books, walkthroughs, contact lists, live exercises. It is the most professional four weeks of the administration and it happens entirely out of sight.' },
    { label:'Cancel the item. Talk about the last eight years.', eff:{base:+6,congress:-6,press:-5,street:-4,auth:+5},
      res:'Ninety minutes of reminiscence. Nothing is handed over. The incoming team spends four months finding out what was in the rooms.' },
    { label:'Go around the table. Have each of them say something.', eff:{base:+7,press:-7,street:-6,congress:-6,courts:-4,auth:+6},
      res:'Twenty-two testimonials. It runs to two hours. Four of the twenty-two are visibly performing and eighteen of them are not, which is somehow the more troubling number.' },
    { label:'Have each of them brief their own successor. In this room. Today.', eff:{base:-9,congress:+4,courts:+4,press:+4,street:+4,auth:-4}, wild:true,
      res:'Twenty-two handovers around one table with both administrations present. It has never been done. It works so well that the next four presidents make it standard.' }]},

{ id:'t2-what-was-it-for', title:'The Question', who:C.cos, term:2, min:44, max:48, tags:['power'],
  text:'Late, empty building, nobody else on the floor. Deborah asks the only question she has never asked in eight years. ' +
       '"Sir — what was it all for? I have been here since the first day and I genuinely do not know the answer."',
  choices:[
    { label:'"To win. That was always the whole thing."', eff:{base:+5,congress:-5,press:-4,street:-5,courts:-4,auth:+11},
      res:'She nods once. It is the answer she expected and the answer that explains every decision in eight years, and she leaves the building for the last time about four minutes later.' },
    { label:'"To prove it could be done."', eff:{base:+1,congress:-7,courts:-8,press:-5,street:-7,auth:+14},
      res:'It could be done. That is now a permanent, demonstrated fact about the United States, available to anybody who comes next, and it is the only part of this that outlives everyone in the building.' },
    { label:'"I genuinely don\'t know either."', eff:{press:+9,street:+8,congress:+7,courts:+6,base:-8,auth:-9},
      res:'It is the truest thing you have said in eight years. She sits down, which she has not done uninvited in eight years, and the two of you talk until about four in the morning.' },
    { label:'"I wanted them to say my name."', eff:{base:+1,congress:+2,courts:+1,press:-1,street:-1,auth:-3}, wild:true,
      res:'It is the smallest possible answer and it is the true one. Deborah does not write it down. She thinks about it, on and off, for the rest of her life.' }]}

);
})();
