/* ============================================================
   PACK H — FRONTIER  (any month)
   A fresh batch of evergreen crises, written to give the newer
   systems something to talk about: the tariff wars and summits,
   the phone, the War Room, the Residence, and the base's endless
   appetite. Original satire in the house voice — INSPIRED BY THE
   GENRE, NEVER COPIED FROM ANY REAL PERSON. Fictional stand-ins
   only; real countries, invented leaders.

   12 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE ECONOMY TALKS BACK ══════════════ */

{ id:'h-tariff-boomerang', title:'The Boomerang', who:C.treas, min:6, max:48, tags:['economy','press'],
  src:'a tariff round maturing into retaliation',
  text:'Lyle has the retaliation list. "They matched us item for item, sir, and then they added bourbon, ' +
       'motorcycles and one specific brand of boat. All made in states you won. It is, I have to say, ' +
       'beautifully targeted."',
  choices:[
    { label:'Double the tariff. Nobody out-toughs us.', eff:{base:+8,street:-4,congress:-3,cash:-0.3,auth:+3},
      res:'The escalation thrills a rally and empties a marina. Both things are true at once and the base only sees the rally.' },
    { label:'Quietly carve out the boats. Keep the speech.', eff:{base:+2,press:+3,congress:+3,cash:+0.1,auth:+1},
      res:'The exemption is buried in a Friday filing while the tough talk stays on television. It is the whole job, done well, unseen.' },
    { label:'Blame the last administration for the boats.', eff:{base:+5,press:-3,street:-2,auth:+1},
      res:'You attribute a boat tariff you caused to a president who left years ago. Roughly half the country accepts this immediately.' },
    { label:'Declare bourbon a strategic national reserve.', eff:{base:+6,press:-3,courts:-3,cash:-0.2,auth:+2}, wild:true,
      res:'An executive order designates whiskey a matter of national security. Four distilleries are thrilled and one four-star general asks, sincerely, what his role is.' }]},

{ id:'h-summit-selfie', title:'The Handshake Photo', who:C.state, min:3, max:48, tags:['diplomacy','press','levity'],
  src:'a summit where the optics outran the agreement',
  text:'Muriel is holding two photographs. "This is the handshake, sir. Forty million views. And this is ' +
       'the actual communiqué. It commits us to a working group that will meet, at the earliest, next spring. ' +
       'The base has seen the first one. The Senate has read the second."',
  choices:[
    { label:'Sell the handshake. Bury the working group.', eff:{base:+7,press:-3,congress:-2,auth:+2},
      res:'The photo becomes the policy in every practical sense. Nothing is agreed and everybody feels that something enormous was.' },
    { label:'Let Muriel brief the actual terms, dryly.', eff:{base:-4,press:+6,congress:+5,auth:+1},
      res:'The truth is small, real and boring, and it is reported that way. The handshake, mysteriously, keeps trending anyway.' },
    { label:'Announce a second summit to discuss the first.', eff:{base:+4,press:-3,cash:-0.1,auth:+1},
      res:'A summit about a summit. The scheduling office weeps. The base cannot wait.' },
    { label:'Have the handshake cast in bronze for the lobby.', eff:{base:+5,press:-3,courts:-2,cash:-0.2,auth:+2}, wild:true,
      res:'A sculptor renders the grip life-size in the West Wing lobby. Visitors are unsure whether to shake it. Several do.' }]},

/* ══════════════ THE PHONE ══════════════ */

{ id:'h-late-call', title:'The 2 A.M. Call', who:C.cos, min:1, max:48, tags:['gaffe','press'],
  src:'an impulse phone call placed after midnight',
  text:'Deborah caught it on the log. "You called the leader of an allied nation at two in the morning their ' +
       'time, sir, to tell them the new ballroom looks incredible. They were asleep. The call lasted nineteen ' +
       'minutes. You did most of it."',
  choices:[
    { label:'Do it again tomorrow. They loved it.', eff:{base:+6,press:-3,street:-2,auth:+2},
      res:'You establish a nightly habit of unsolicited architectural updates to sleeping heads of state. Two of them start letting it go to voicemail.' },
    { label:'Have every call go through Deborah first.', eff:{base:-4,press:+5,congress:+4,auth:+1},
      res:'A filter is installed between you and the phone at three in the morning. It is the single most valuable staffing decision of the term.' },
    { label:'Deny the call. Blame the time zones.', eff:{base:+2,press:-2,auth:0},
      res:'You claim the clocks were confusing. The log has a timestamp. The word "timestamp" ruins your morning.' },
    { label:'Livestream the next one.', eff:{base:+7,press:-4,street:-2,auth:+2}, wild:true,
      res:'Two million people watch you describe crown moulding to a visibly exhausted prime minister. It is, somehow, your best-rated broadcast of the year.' }]},

/* ══════════════ THE WAR ROOM ══════════════ */

{ id:'h-parade-itch', title:'The Itch', who:C.gen, min:8, max:48, tags:['war','vanity'],
  src:'a restless afternoon and a large standing army',
  text:'General Tarrant stands at ease, which for him is a kind of dread. "You have asked me three times this ' +
       'week what the army is *for*, sir, if we never use it. I want to be clear that this is not a question ' +
       'I am comfortable with the President asking on a slow Tuesday."',
  choices:[
    { label:'Order a parade. The biggest ever. This weekend.', eff:{base:+9,congress:-4,courts:-2,street:-2,cash:-0.4,auth:+3},
      res:'Armour the avenue was not built to carry rolls down the avenue anyway. The pictures are magnificent and a bridge inspector files a memo.' },
    { label:'Nothing. Let the general keep his Tuesday.', eff:{base:-3,congress:+5,press:+4,auth:0},
      res:'You do not deploy the military out of boredom. Tarrant visibly ages backward. It is the correct call and no one claps.' },
    { label:'Rename a base after yourself instead.', eff:{base:+5,press:-3,courts:-2,auth:+2},
      res:'A ceremony, a new sign, a cheaper kind of glory. The itch is scratched and nobody is deployed to scratch it.' },
    { label:'Commission a branch of the military for space.', eff:{base:+6,press:-2,congress:-3,cash:-0.3,auth:+2}, wild:true,
      res:'A new service is stood up, with a logo that is litigated by a streaming franchise within the week. The recruits are, to a person, delighted.' }]},

/* ══════════════ THE RESIDENCE ══════════════ */

{ id:'h-upkeep-bill', title:'The Upkeep', who:C.usher, min:6, max:48, tags:['residence','money'],
  src:'the monthly bill for the improvements',
  text:'Alvin presents the ledger with the care of a man defusing something. "The ballroom chandeliers alone, ' +
       'sir. And the rollercoaster requires a certified inspection every ninety days, which we are told is ' +
       'the law even for a rollercoaster on a roof. Especially, in fact, for a rollercoaster on a roof."',
  choices:[
    { label:'Pay it. Grandeur is not a line item.', eff:{base:+3,congress:-2,cash:-0.4,auth:+1},
      res:'The bills are paid in full and on time and the building gleams. The Treasury Secretary makes a small sound and leaves the room.' },
    { label:'Defer the inspections. What could happen.', eff:{base:+4,press:-4,courts:-4,street:-2,auth:+1},
      res:'You waive a safety certification on a roof rollercoaster. Four agencies open files and one intern refuses, on principle, to ride it.' },
    { label:'Charge admission to the ballroom.', eff:{base:+2,press:-3,congress:-3,cash:+0.3,auth:+1},
      res:'The people’s house becomes, briefly, a venue with a cover charge. The historian resigns by fax, a document she had to be taught how to send.' },
    { label:'Add a gift shop. Then two more.', eff:{base:+5,press:-3,courts:-2,cash:+0.4,auth:+1}, wild:true,
      res:'Three gift shops, a churro cart and a photo booth later, the residence turns a monthly profit and a heritage board has a stroke.' }]},

/* ══════════════ THE BASE ══════════════ */

{ id:'h-merch-drop', title:'The Merch Drop', who:C.social, min:1, max:48, tags:['base','money','levity'],
  src:'a limited-edition product launch aimed squarely at the faithful',
  text:'Brayden is vibrating. "Gold sneakers, sir. Then a fragrance. Then a commemorative coin, then a Bible, ' +
       'then a coin *of* the Bible. Every drop sells out in minutes. The base does not buy these ironically. ' +
       'They buy them the way people buy relics."',
  choices:[
    { label:'Drop everything. A new item every week.', eff:{base:+9,press:-4,street:-2,cash:+0.4,auth:+2},
      res:'The relics multiply and so does the devotion. An economist calls it a personality cult with excellent unit economics. She is not wrong.' },
    { label:'One tasteful item. Proceeds to veterans.', eff:{base:-2,press:+5,congress:+3,cash:+0.1,auth:0},
      res:'Restraint and a charity tie-in. The press is briefly kind and the base is briefly bored, and both feelings pass by Thursday.' },
    { label:'Put your face on the actual currency.', eff:{base:+6,press:-4,courts:-5,congress:-4,auth:+3},
      res:'You attempt to appear on legal tender. The Mint explains, gently and then firmly, the several laws involved. You keep the sneakers.' },
    { label:'Launch a meme coin. $PATRIOT. Tonight.', eff:{base:+7,press:-3,courts:-3,cash:+0.5,auth:+2}, wild:true,
      res:'It moons, it craters, it moons again by breakfast. Somebody very online makes and loses a fortune before the briefing even starts.' }]},

/* ══════════════ THE COURTS ══════════════ */

{ id:'h-injunction', title:'The Nationwide Injunction', who:C.lawyer, min:4, max:48, tags:['courts','press'],
  src:'a single district judge freezing an entire policy',
  text:'Sy sets down the order. "One judge, sir. In one courtroom, in a state you lost by thirty points, has ' +
       'frozen the whole thing nationwide. Your options are to appeal it politely or to say something about ' +
       'the judge that we will spend a month apologising for."',
  choices:[
    { label:'Name the judge. Question the judge. Nightly.', eff:{base:+8,courts:-6,press:-4,auth:+3},
      res:'You make a district judge a household name and a target. The judiciary closes ranks the way a body closes around a splinter.' },
    { label:'Appeal it. Straight, fast, boring.', eff:{base:-4,courts:+5,congress:+4,press:+3,auth:+1},
      res:'The lawyers do lawyer things quietly and well. It moves up the ladder on the merits and the base never learns the word "stay."' },
    { label:'Ignore the order. Proceed anyway.', eff:{base:+6,courts:-9,congress:-5,street:-3,auth:+2},
      res:'You act as though a court order is a suggestion. It is the single fastest way to teach a nation what a constitutional crisis feels like.' },
    { label:'Appoint the judge to something. Far away.', eff:{base:+4,press:-3,courts:-3,congress:-2,auth:+2}, wild:true,
      res:'You attempt to promote your problem to an ambassadorship in a cold country. The judge declines, in writing, beautifully, and it leaks.' }]},

/* ══════════════ THE PRESS ══════════════ */

{ id:'h-leak-hunt', title:'The Leak Hunt', who:C.fbi, min:5, max:48, tags:['press','loyalty'],
  src:'an embarrassing internal detail reaching a reporter',
  text:'Director Quist is measured. "The detail that leaked could only have come from one of six people in ' +
       'that room, sir. All six are loyal. That is the problem: the leak came from loyalty. Someone thinks ' +
       'they are protecting you by making you look decisive. They are not."',
  choices:[
    { label:'Polygraph all six. Today.', eff:{base:+5,press:-4,congress:-3,street:-2,auth:+2},
      res:'You wire your closest aides to a machine of contested reliability. Nobody fails and everybody remembers. The next leak is about the polygraphs.' },
    { label:'Let it go. Plug it quietly later.', eff:{base:-2,press:+4,congress:+3,auth:+1},
      res:'You decline the witch hunt and fix the process instead. It is mature, effective and completely invisible, like everything that works.' },
    { label:'Leak something worse about a rival to bury it.', eff:{base:+6,press:-3,courts:-2,street:-2,auth:+2},
      res:'You counter-leak. The story you wanted buried is buried under a story you will have to answer for in six weeks. You always do.' },
    { label:'Feed the reporter a fake detail as a trap.', eff:{base:+4,press:-5,courts:-2,auth:+1}, wild:true,
      res:'You plant a canary. It is printed. You have now confirmed the leak exists by manufacturing one, which even Quist finds philosophically upsetting.' }]},

/* ══════════════ THE CABINET ══════════════ */

{ id:'h-loyalty-oath', title:'The Loyalty Oath', who:C.cos, min:10, max:48, tags:['loyalty','congress'],
  src:'a proposal to make personal loyalty a condition of employment',
  text:'Deborah is careful. "The idea going around, sir, is a signed pledge. Personal loyalty, in writing, ' +
       'above the oath they already swore to the office. Some of them will sign it in a heartbeat. The ones ' +
       'worth keeping will resign the moment you ask."',
  choices:[
    { label:'Circulate the pledge. See who flinches.', eff:{base:+7,congress:-5,press:-4,courts:-3,auth:+3},
      res:'The competent leave and the compliant remain and the average IQ of the building drops by a measurable amount. The base calls it draining the swamp.' },
    { label:'No pledge. The oath to the office is the oath.', eff:{base:-4,congress:+6,press:+5,courts:+3,auth:+1},
      res:'You decline to place yourself above the Constitution in a signed document. Historians, decades from now, will find this unremarkable, which is the point.' },
    { label:'Make them pledge to the flag. Same energy, better optics.', eff:{base:+5,press:-2,congress:-2,auth:+2},
      res:'A patriotic rebrand of the same demand. It photographs beautifully and means exactly what everyone suspects it means.' },
    { label:'Have them pledge on the new commemorative Bible.', eff:{base:+6,press:-4,courts:-3,cash:+0.2,auth:+2}, wild:true,
      res:'The loyalty oath doubles as a product placement. The pastor is thrilled, the lawyers are not, and the Bible sells another print run.' }]},

/* ══════════════ THE NUMBERS ══════════════ */

{ id:'h-bad-poll', title:'The Bad Poll', who:C.poll, min:3, max:48, tags:['press','base'],
  src:'a reputable survey with numbers you do not like',
  text:'Nadia does not sugar-coat. "It is a real poll, sir, with a real method, and the number is bad. You can ' +
       'attack the pollster, which works on the base and only the base, or you can look at why the number is ' +
       'bad, which nobody in this building enjoys doing."',
  choices:[
    { label:'Declare the poll fake. Cite your own better one.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'You produce an internal poll with a sample of people who already agree with you. The base accepts it instantly and reality does not budge.' },
    { label:'Read the crosstabs. Change one policy.', eff:{base:-3,press:+5,congress:+4,auth:+1},
      res:'You let data change a decision. It is the least dramatic thing a leader can do and among the rarest, and it quietly moves the real number.' },
    { label:'Commission ten polls until one is good.', eff:{base:+3,press:-3,cash:-0.2,auth:0},
      res:'You buy attempts until you buy a winner, then cite only the winner. It is expensive, transparent and completely effective on your own side.' },
    { label:'Poll whether people believe polls.', eff:{base:+4,press:-2,auth:+1}, wild:true,
      res:'A poll about polls returns a result too recursive for anyone to interpret. Two pundits build entire careers on the ambiguity.' }]},

/* ══════════════ THE TECH ══════════════ */

{ id:'h-deepfake', title:'The Convincing Fake', who:C.press, min:6, max:48, tags:['press','tech'],
  src:'a fabricated video good enough to fool the newsroom',
  text:'Kaylee is pale. "It is not real, sir. The video of you is fabricated, top to bottom, and it is flawless. ' +
       'The problem is the second-order one: now that everyone knows fakes this good exist, you can call anything ' +
       'real a fake, and anything fake real. We have lost the ability to be sure, and so has everyone."',
  choices:[
    { label:'Call every unflattering clip a fake, forever.', eff:{base:+7,press:-5,courts:-2,auth:+3},
      res:'You claim the tool as a permanent alibi. Truth becomes a matter of allegiance, which for a while is enormously convenient and then is not.' },
    { label:'Back a real verification standard. Boring. Vital.', eff:{base:-4,press:+6,congress:+5,auth:+1},
      res:'You support a dull technical framework for authenticating footage. It is the most important thing you do all year and it is covered on page nineteen.' },
    { label:'Release a fake of your own, of a rival.', eff:{base:+5,press:-5,courts:-4,street:-3,auth:+2},
      res:'You escalate into a world where nothing can be trusted, on purpose, because the fog favours whoever is loudest. It favours you, until it doesn’t.' },
    { label:'Deploy an AI that debunks fakes in your voice.', eff:{base:+4,press:-3,courts:-2,cash:-0.2,auth:+1}, wild:true,
      res:'A synthetic version of you fact-checks a synthetic version of you. Somewhere a philosophy department cancels its own conference to just watch.' }]},

/* ══════════════ THE CEREMONY ══════════════ */

{ id:'h-nobel-itch', title:'The Prize', who:C.state, min:12, max:48, tags:['vanity','diplomacy'],
  src:'an open, aching desire for a specific international award',
  text:'Muriel treads lightly. "The committee does not take nominations from the nominee, sir. It especially ' +
       'does not take the seven you have submitted about yourself. There is a peace you could actually broker ' +
       'that might, in time, merit it. It would require you to let someone else stand at the podium."',
  choices:[
    { label:'Nominate yourself again. Louder.', eff:{base:+5,press:-4,street:-2,auth:+1},
      res:'The eighth self-nomination is filed with a press release. The committee, which has seen everything, has not quite seen this, and says nothing, expensively.' },
    { label:'Broker the real thing. Let the envoy shine.', eff:{base:-4,press:+6,congress:+5,street:+3,auth:+2},
      res:'You do the patient, credit-sharing work of actual diplomacy. It might even earn the prize, years from now, which is precisely why it is so hard to do now.' },
    { label:'Found your own prize. Award it to yourself.', eff:{base:+6,press:-4,courts:-2,cash:-0.2,auth:+2},
      res:'A new medal, a new committee, a foregone conclusion. The base is moved. The old committee remains, pointedly, in Oslo.' },
    { label:'Declare you have secretly already won it.', eff:{base:+5,press:-4,auth:+1}, wild:true,
      res:'You announce a classified prize that cannot be verified for national-security reasons. Roughly a third of the country files it under "probably true."' }]}

);
})();
