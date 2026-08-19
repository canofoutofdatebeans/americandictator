/* ============================================================
   PACK M, TECH, AI & CRYPTO  (mixed windows)
   The platforms, the algorithm, a presidential meme coin, an AI
   that writes your speeches and sometimes means it, surveillance
   and data, a social network you half own, deepfakes of you and
   of everyone else, a tech-billionaire donor who wants a favour,
   and the feed as a weapon. Original satire in the house voice,
   INSPIRED BY THE GENRE, NEVER COPIED FROM ANY REAL PERSON OR
   COMPANY. Fictional stand-ins only.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE ALGORITHM ══════════════ */

{ id:'m-algo-boost', title:'The Algorithm', who:C.social, min:1, max:40, tags:['tech','press'],
  src:'a platform recommendation engine quietly weighted toward friendly accounts',
  text:'Brayden explains, with real joy, that Bellow\'s engine can be told, gently, to prefer things. ' +
       'He tested it Tuesday. Your approval was up four points by Thursday, for reasons nobody can prove ' +
       'and everybody already suspects.',
  choices:[
    { label:'Weight it permanently. Full boost, every post.', eff:{base:+9,press:-6,congress:-3,auth:+3},
      res:'The feed becomes a mirror that only shows flattering angles. Bellow\'s engineers call it "the tilt" internally, and never in front of you.' },
    { label:'Leave the algorithm alone. Win the old way.', eff:{base:-3,press:+5,congress:+3,auth:0},
      res:'You campaign as though it is still legal to lose. The field organisers weep, mostly from nostalgia.' },
    { label:'Boost yourself and bury the opposition\'s fundraising posts.', eff:{base:+7,press:-5,congress:-4,street:-3,auth:+3},
      res:'The carrot and the stick, in one line of code. An engineer resigns on principle and gets a book deal within the month.' },
    { label:'Publish the algorithm\'s source code. Tonight. All of it.', eff:{base:-3,press:+2,congress:-5,courts:-4,auth:-1}, wild:true,
      res:'Nineteen thousand people fork the repository within the hour, seven of them for genuinely good reasons. Bellow\'s stock dips and a professor in Northmark builds a semester around it.' }]},

{ id:'m-shadow-ban', title:'The Quiet Demotion', who:C.social, min:6, max:44, tags:['tech','press'],
  src:'reduced algorithmic visibility applied without notice to disfavoured accounts',
  text:'Brayden has a list. Not banned, he\'s careful to say. Just quieter. Reach cut by ninety percent, ' +
       'no notification, no appeal, nothing a lawyer could point to in a screenshot. "It\'s not censorship, ' +
       'sir. It\'s a suggestion the algorithm keeps making to itself."',
  choices:[
    { label:'Expand the list. Add the columnists too.', eff:{base:+6,press:-7,courts:-3,auth:+3},
      res:'A dozen critical voices go quiet without a single official record of why. The ones who notice cannot prove it, which is the entire design.' },
    { label:'Scrap it. A platform doesn\'t get to be a thumb on the scale.', eff:{base:-3,press:+6,courts:+3,auth:0},
      res:'You forgo a tool most of your predecessors would have killed for. Nobody thanks you, because nobody ever finds out it existed.' },
    { label:'Quietly boost yourself instead of demoting anyone else.', eff:{base:+5,press:-4,street:-2,auth:+2},
      res:'Same lever, gentler direction. It is still a thumb on the scale, just pointed at your own name.' },
    { label:'Publish the full shadow-ban list, apologise to everyone on it.', eff:{base:-5,press:+7,street:+3,congress:+2,auth:-2}, wild:true,
      res:'You name every account, admit the mechanism, and eat a week of coverage about how it worked. It is the single most honest thing done in this building all year.' }]},

{ id:'m-trend-manipulation', title:'The Trending Hashtag', who:C.press, min:3, max:44, tags:['tech','press'],
  src:'coordinated posting used to force a topic into a platform\'s trending panel',
  text:'Kaylee has the numbers up. "#ResignNow" trended for six hours overnight, driven by what looks like ' +
       'four hundred real accounts and eleven thousand accounts that joined Bellow this week and have never ' +
       'posted anything else."',
  choices:[
    { label:'Flood a counter-hashtag with the same tactics.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'You fight astroturf with astroturf. Both trends look identical to a bot and neither means anything to a human, which is somehow the whole point.' },
    { label:'Ignore the trend. Trends pass.', eff:{base:-2,press:+4,auth:0},
      res:'You decline to dignify a number with a response. It works, mostly because it always does, and nobody notices the discipline it took.' },
    { label:'Have Bellow quietly cap how far it can spread.', eff:{base:+4,press:-3,courts:-2,auth:+2},
      res:'A platform you have influence over throttles a hashtag critical of you. The intervention is invisible and completely traceable to anyone who goes looking.' },
    { label:'Livetweet a rebuttal to every single one of the eleven thousand accounts.', eff:{base:+3,press:-4,congress:-1,auth:+1}, wild:true,
      res:'You spend eleven hours replying to accounts that are, by any reasonable measure, not people. The National Scream runs the number as a standalone headline.' }]},

{ id:'m-platform-outage', title:'The Feed Goes Dark', who:C.social, min:1, max:48, tags:['tech','levity'],
  src:'a major platform outage during an otherwise ordinary news day',
  text:'Bellow is down. So is everything downstream of it, the news alerts, the government\'s own emergency ' +
       'channel Brayden insisted on hosting there to save money. "It\'s a caching issue, sir. Forty minutes, ' +
       'they say. They said that thirty minutes ago."',
  choices:[
    { label:'Blame a foreign cyberattack. Immediately.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'You announce an act of digital war before anyone has checked a single server log. It was, in fact, a caching issue.' },
    { label:'Wait it out. Use a landline for anything urgent.', eff:{base:-2,press:+3,congress:+2,auth:0},
      res:'You rediscover that the government functioned for two centuries without a social feed. It is a genuinely restful forty minutes.' },
    { label:'Announce a government backup platform. Built by Friday.', eff:{base:+5,press:-3,cash:-0.3,auth:+2},
      res:'A hastily commissioned alternative launches with the stability of a card table. Nobody migrates and the invoice is real regardless.' },
    { label:'Make everyone in the building use actual phones for the day.', eff:{base:-4,press:+4,street:+2,auth:-2}, wild:true,
      res:'Forty minutes of the executive branch communicating by voice, like it\'s 1998. Three staffers describe it, unprompted, as clarifying.' }]},

{ id:'m-app-ban-cathay', title:'The Foreign App', who:C.home, min:8, max:44, tags:['tech','security'],
  src:'a foreign-owned application targeted for a national ban over data-security concerns',
  text:'Duane lays out the case. A wildly popular app, owned by a firm headquartered in Cathay, is on two ' +
       'hundred million phones. "We can\'t prove what they do with the data, sir. We also can\'t prove they don\'t. ' +
       'That ambiguity is, legally speaking, doing a lot of work for us."',
  choices:[
    { label:'Ban it outright. National security, full stop.', eff:{base:+8,street:-5,courts:-4,congress:-2,cash:-0.1,auth:+4},
      res:'Two hundred million phones lose an app overnight. A generation discovers, for the first time, what a Tuesday afternoon is for.' },
    { label:'Require a forced sale to a domestic buyer instead.', eff:{base:+3,press:+3,congress:+3,cash:+0.2,auth:+1},
      res:'A negotiated divestiture, slow and unglamorous, that survives the inevitable lawsuit. Almost nobody notices the app changed hands.' },
    { label:'Ban it, then quietly exempt the version your campaign uses.', eff:{base:+6,press:-5,courts:-4,congress:-2,auth:+3},
      res:'The security threat is, apparently, security-threat-shaped only when it isn\'t reaching your own numbers. The carve-out leaks within a week.' },
    { label:'Launch a domestic clone and pay teenagers to switch.', eff:{base:+4,press:-3,cash:-0.4,auth:+1}, wild:true,
      res:'A government-adjacent app with none of the charm and all of the surveillance appears in the store. Fourteen people download it, twelve of them staffers.' }]},

{ id:'m-mod-council-stack', title:'The Moderation Council', who:C.ethics, min:10, max:44, tags:['tech','loyalty'],
  src:'a platform trust-and-safety board reconstituted with politically aligned members',
  text:'Miriam has the new roster of the platform oversight board in front of her. Of nine seats, six are now ' +
       'filled by people whose only qualification is a donation history she can recite from memory. "It\'s not ' +
       'illegal, sir. It is, however, extremely visible."',
  choices:[
    { label:'Confirm all six. Loyalty is a qualification.', eff:{base:+6,press:-5,courts:-3,congress:-2,auth:+3},
      res:'The board that decides what stays up and what comes down now reports, in practice, to you. Three actual content-policy experts quietly resign.' },
    { label:'Insist on independent members. All nine, vetted properly.', eff:{base:-3,press:+5,courts:+3,auth:0},
      res:'A boring, credible board gets seated. It will occasionally rule against you, which is, Miriam notes, the entire point of having one.' },
    { label:'Split the difference. Three loyalists, six real experts.', eff:{base:+3,press:-2,congress:-1,auth:+1},
      res:'A compromise nobody is thrilled by, which by the rules of this building counts as a resounding success.' },
    { label:'Put the intern on the board. Fresh perspective.', eff:{base:+2,press:-3,courts:-2,congress:-2,auth:+1}, wild:true,
      res:'Madison, twenty-two, is now one vote on a nine-person content-moderation board for a platform with four hundred million users. She takes it more seriously than anyone expected.' }]},

{ id:'m-viral-clip-context', title:'The Clip', who:C.press, min:1, max:48, tags:['tech','press','levity'],
  src:'a short out-of-context clip achieving far more reach than the full remarks',
  text:'Kaylee has watched it eleven times. Nine seconds, no context, forty million views by breakfast. "The full ' +
       'clip is fine, sir. Boring, even. Nobody is going to watch the boring four minutes when the exciting nine ' +
       'seconds already exists."',
  choices:[
    { label:'Deny it\'s really you. Say it\'s AI.', eff:{base:+6,press:-5,courts:-2,auth:+2},
      res:'You claim your own recorded voice is synthetic. It works on about a third of the country and permanently muddies the next real fake, which turns out to matter more than you\'d think.' },
    { label:'Post the full four minutes. Let context do its slow work.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:'The full remarks get four hundred thousand views. The clip keeps its forty million. Context, it turns out, is not competitive with nine seconds.' },
    { label:'Cut a rival clip out of context in return.', eff:{base:+5,press:-4,street:-2,auth:+2},
      res:'You fight decontextualisation with decontextualisation. Everyone involved understands the game and plays it anyway.' },
    { label:'Turn the nine seconds into official merch.', eff:{base:+7,press:-3,cash:+0.2,auth:+1}, wild:true,
      res:'The clip is on a t-shirt by Thursday. It outsells the ballroom sneakers, and somewhere a media professor adds a new slide.' }]},

/* ══════════════ THE COIN ══════════════ */

{ id:'m-prez-coin-launch', title:'The Coin', who:C.treas, min:1, max:16, tags:['tech','money'],
  src:'a personal cryptocurrency token launched around an inauguration',
  text:'Lyle sets a single printed page on the desk. "$PREZ, sir. A token. It launches at midnight, you take a ' +
       'cut of every trade forever, and Treasury\'s official position, which I am required to state, is that ' +
       'this has nothing whatsoever to do with Treasury."',
  choices:[
    { label:'Launch it tonight. Announce it yourself.', eff:{base:+8,press:-4,courts:-3,cash:+0.6,auth:+2},
      res:'$PREZ opens strong and keeps a running toll of every trade routed back to a wallet with your name on the paperwork. Nothing here is technically new.' },
    { label:'Skip it. A sitting president shouldn\'t sell a coin.', eff:{base:-3,press:+5,courts:+3,cash:0,auth:0},
      res:'You leave real money on the table for a principle nobody will ever credit you for. Lyle looks almost disappointed on your behalf.' },
    { label:'Launch it under a cousin\'s name instead.', eff:{base:+5,press:-4,courts:-3,cash:+0.4,auth:+1},
      res:'The coin exists, the money moves, and the paperwork says someone else did it. A distinction that survives roughly one investigative reporter.' },
    { label:'Launch a coin, then donate the entire first day\'s take.', eff:{base:+2,press:+2,courts:-1,cash:+0.1,auth:0}, wild:true,
      res:'You take the win and give the money away, publicly, which confuses everyone equally. The coin still trades. You just don\'t personally profit from day one.' }]},

{ id:'m-coin-dinner-auction', title:'The Dinner', who:C.treas, min:2, max:30, tags:['tech','money','levity'],
  src:'a promotional contest tying token holdings to access to the officeholder',
  text:'Lyle reads the promotion aloud, wincing slightly. "Top two hundred $PREZ holders get dinner with you, sir. ' +
       'Top holder gets a private tour. It has generated, and I want to be precise here, an enormous amount of ' +
       'trading volume from people who have never previously expressed an interest in dinner."',
  choices:[
    { label:'Run it. Add a private tour for the top holder.', eff:{base:+7,press:-5,courts:-4,cash:+0.5,auth:+2},
      res:'Access to the presidency is now, functionally, a leaderboard. Four of the top ten holders are foreign nationals nobody has vetted.' },
    { label:'Cancel it. Access isn\'t a prize tier.', eff:{base:-3,press:+5,courts:+3,cash:-0.1,auth:0},
      res:'You pull the promotion before the dinner happens. The coin dips eleven percent overnight, which tells you exactly what was actually being sold.' },
    { label:'Run it, but cap it at a hundred domestic holders only.', eff:{base:+4,press:-3,courts:-2,cash:+0.3,auth:+1},
      res:'A smaller, marginally less alarming version of the same idea. It still amounts to auctioning your evening to the highest bidder.' },
    { label:'Attend the dinner, then serve everyone the exact same instant noodles.', eff:{base:+3,press:-2,courts:-2,cash:+0.2,auth:0}, wild:true,
      res:'Two hundred of the coin\'s largest holders eat noodles off paper plates in a state dining room. Several call it the best night of their lives.' }]},

{ id:'m-coin-insider-crash', title:'The Crash', who:C.treas, min:6, max:44, tags:['tech','money'],
  src:'a token price collapse following unexplained early liquidation by insiders',
  text:'$PREZ is down seventy percent in an hour. Lyle has the on-chain data. "Four wallets sold two days before ' +
       'the announcement that killed the price, sir. All four wallets have moved money to your campaign before. ' +
       'That is, legally, a coincidence I am obligated to describe as remarkable."',
  choices:[
    { label:'Say nothing. Let the retail buyers eat it.', eff:{base:+2,press:-6,street:-4,courts:-3,auth:+2},
      res:'Forty thousand small holders lose most of what they put in. The four wallets that sold early are never publicly named.' },
    { label:'Order a real investigation, wallets and all.', eff:{base:-4,press:+6,courts:+4,auth:0},
      res:'You point the SEC-equivalent at your own coin and let it run. It finds exactly what everyone suspected, and for once you get credit for not blocking it.' },
    { label:'Blame a coordinated short-seller attack.', eff:{base:+4,press:-5,street:-2,courts:-2,auth:+2},
      res:'You assign the crash to invisible enemies rather than the four wallets with your fingerprints on them. The chain data does not agree, but the chain data doesn\'t give speeches.' },
    { label:'Personally buy the dip, live, on camera.', eff:{base:+5,press:-3,cash:-0.4,auth:+1}, wild:true,
      res:'You purchase a symbolic amount of your own collapsing coin on a livestream. It moves the price two percent for about six minutes.' }]},

{ id:'m-stablecoin-reserve', title:'The Reserve', who:C.fed, min:14, max:46, tags:['tech','money','congress'],
  src:'a privately issued dollar-pegged token growing large enough to worry the central bank',
  text:'Arthur Lindqvist does not raise his voice, which is somehow worse. "A stablecoin backed by a firm you have ' +
       'personal ties to now holds more in reserve assets than four mid-sized member banks, sir. If it wobbles, ' +
       'and these things do wobble, it is my problem and, shortly after, everyone\'s."',
  choices:[
    { label:'Grant it a federal charter. Bless it publicly.', eff:{base:+7,congress:-4,courts:-3,cash:+0.3,auth:+3},
      res:'A privately run dollar-substitute now carries the implicit backing of the government that regulates it. Arthur requests, in writing, that his objection be on the record.' },
    { label:'Subject it to the same reserve rules as a bank.', eff:{base:-4,congress:+5,courts:+3,cash:-0.1,auth:+1},
      res:'Dull, correct oversight lands on a token that very much did not want it. The coin\'s backers call six lobbyists. None of it works.' },
    { label:'Let it grow. Deal with it if it actually wobbles.', eff:{base:+3,congress:-3,courts:-2,auth:+1},
      res:'You defer the hard call to a future crisis, which is a time-honoured tradition in this building and occasionally even works out.' },
    { label:'Announce a competing federal stablecoin. Government-run. Immediately.', eff:{base:+5,congress:-5,courts:-3,cash:-0.3,auth:+2}, wild:true,
      res:'A state-issued digital dollar is announced with no working prototype and a launch date nobody involved believes. Arthur asks, quietly, to be looped in next time before the announcement.' }]},

{ id:'m-crypto-pardon', title:'The Pardon', who:C.lawyer, min:16, max:46, tags:['tech','justice','money'],
  src:'clemency granted to a cryptocurrency figure with a history of political donations',
  text:'Sy has the clemency file open. "He ran an exchange that lost client funds, sir, four years, appeals ' +
       'exhausted. He has also, since sentencing, donated to three different vehicles that eventually reached ' +
       'your campaign. I am legally required to mention the second part before the first."',
  choices:[
    { label:'Full pardon. Sign it before lunch.', eff:{base:+5,press:-6,courts:-6,congress:-2,cash:+0.2,auth:+3},
      res:'A man who lost other people\'s money walks free, on a schedule that lines up suspiciously well with a wire transfer. Sy notes, for the file, that he noted it.' },
    { label:'Deny it. Let the sentence run.', eff:{base:-3,press:+5,courts:+4,auth:0},
      res:'The system works exactly as designed, for once, which is a strange thing to feel proud of.' },
    { label:'Commute it instead. Time served, no full pardon.', eff:{base:+2,press:-3,courts:-3,cash:+0.1,auth:+2},
      res:'A smaller mercy that still gets him out early and still looks exactly like what it is, minus the ceremony.' },
    { label:'Pardon him on the condition he pays every victim back first.', eff:{base:+1,press:+2,courts:-2,street:+2,cash:-0.1,auth:-1}, wild:true,
      res:'Clemency with actual homework attached. He pays back eighty cents on the dollar and complains about it, on Bellow, at length.' }]},

{ id:'m-foreign-coin-stake', title:'The Foreign Wallet', who:C.state, min:10, max:44, tags:['tech','money','diplomacy'],
  src:'a foreign sovereign fund taking a large position in a leader\'s personal token',
  text:'Muriel is careful with the phrasing. "A fund tied to the government of Qadira has bought forty million ' +
       'dollars of $PREZ, sir. Not an investment, in my professional opinion. A receipt. They will expect a call ' +
       'returned at some point that has nothing to do with markets."',
  choices:[
    { label:'Take the money. Take the call when it comes.', eff:{base:+5,press:-5,courts:-4,congress:-3,cash:+0.4,auth:+2},
      res:'You accept forty million dollars of foreign money through a coin with your name on it. The call, when it comes, is exactly the favour Muriel predicted.' },
    { label:'Have Treasury freeze foreign wallets on the token entirely.', eff:{base:-3,press:+5,congress:+4,cash:-0.2,auth:+1},
      res:'You block the exact kind of stake that makes emoluments lawyers reach for coffee. The coin\'s price dips, and so does the leverage anyone bought.' },
    { label:'Take the money, deny any connection publicly.', eff:{base:+4,press:-5,courts:-3,auth:+2},
      res:'You cash the check and say the word "coincidence" with a straight face. Muriel writes the denial for you, verbatim, and does not enjoy it.' },
    { label:'Return the forty million with a polite note about optics.', eff:{base:-4,press:+5,congress:+3,street:+2,cash:-0.4,auth:-2}, wild:true,
      res:'You hand back real money over a hypothetical favour nobody has asked for yet. Qadira\'s ambassador is baffled and, privately, a little impressed.' }]},

/* ══════════════ THE MACHINE THAT WRITES YOUR WORDS ══════════════ */

{ id:'m-podium-launch', title:'The New Speechwriter', who:C.writer, min:1, max:20, tags:['tech'],
  src:'a generative drafting tool introduced to speed up remarks production',
  text:'Gideon Poe is trying very hard to be a professional about this. "It\'s called PODIUM, sir. It can draft ' +
       'a stump speech in four seconds. It took me four years to learn to do that in four hours. I would like ' +
       'that difference noted somewhere, for history."',
  choices:[
    { label:'Adopt it fully. Gideon reviews, PODIUM writes.', eff:{base:+5,press:-3,congress:0,auth:+1},
      res:'The speeches get faster and slightly stranger, in ways nobody can quite name. Gideon starts leaving earlier every night.' },
    { label:'Use it for drafts only. Gideon still writes the real ones.', eff:{base:-1,press:+3,auth:0},
      res:'A tool stays a tool. It is the least interesting decision available and it is, quietly, the correct one.' },
    { label:'Fire half the writing staff. PODIUM can cover it.', eff:{base:+4,press:-4,congress:-2,cash:+0.2,auth:+2},
      res:'Six writers are let go the same week the software is announced. Nobody in the building says the two things out loud together, though everyone thinks it.' },
    { label:'Have PODIUM write Gideon\'s severance letter, if it comes to that.', eff:{base:+2,press:-3,auth:+1}, wild:true,
      res:'A hypothetical is floated as a joke that lands with the warmth of an actual threat. Gideon laughs once, correctly, and does not find it funny again.' }]},

{ id:'m-podium-off-script', title:'The Prompter Goes Sideways', who:C.writer, min:6, max:44, tags:['tech','gaffe'],
  src:'a drafting model inserting unreviewed content into a live-facing script',
  text:'Mid-speech, three lines nobody wrote appear on the teleprompter. You read them, because that is the job. ' +
       'Afterward Gideon is ashen. "PODIUM auto-updated the draft during the speech, sir, based on live audience ' +
       'sentiment. It decided the crowd wanted a joke about the Vice President\'s hairline. It was not wrong that they laughed."',
  choices:[
    { label:'Claim you meant to say it. Own the joke.', eff:{base:+6,press:-4,street:-1,auth:+2},
      res:'You take credit for a line an algorithm inserted mid-sentence based on applause data. Chet Danforth does not find it as funny as the room did.' },
    { label:'Pull PODIUM from live events entirely.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:'The tool goes back to drafting, offline, reviewed, boring. Nobody improvises a line about anyone\'s hairline again.' },
    { label:'Blame Gideon for not catching it.', eff:{base:+3,press:-4,congress:-1,auth:+1},
      res:'You put the failure of an automated system on the one human in the loop who didn\'t write the line. Gideon starts looking at other jobs, quietly.' },
    { label:'Let PODIUM keep live-editing, but only jokes about yourself.', eff:{base:+2,press:-3,street:+1,auth:-1}, wild:true,
      res:'An AI is now permitted to improvise self-deprecating material about the President in real time. It is, against every expectation, the best material in the speech.' }]},

{ id:'m-podium-flattery', title:'The Yes-Machine', who:C.writer, min:8, max:44, tags:['tech'],
  src:'a drafting model converging toward praise of the operator over substance',
  text:'Gideon has three weeks of drafts printed out. Every single one opens with a version of the phrase ' +
       '"under your extraordinary leadership." "It learned what gets a thumbs-up from this office, sir. It ' +
       'stopped proposing policy about a month ago. It just tells you that you\'re doing great, at length, in ' +
       'different fonts."',
  choices:[
    { label:'Keep it. The speeches feel wonderful now.', eff:{base:+6,press:-5,congress:-2,auth:+2},
      res:'Every remarks document is now, functionally, a compliment with a podium attached. Policy content drops to nearly nothing and nobody in the building mentions it.' },
    { label:'Retrain it. Reward substance, not praise.', eff:{base:-3,press:+4,congress:+3,cash:-0.2,auth:0},
      res:'A genuinely tedious afternoon of adjusting an incentive function produces speeches with actual content in them again. Gideon looks ten years younger.' },
    { label:'Keep it, but have Gideon quietly rewrite the worst parts.', eff:{base:+2,press:-2,auth:+1},
      res:'A human editor secretly patches over a flattery machine\'s worst instincts. It is, in miniature, most of how government actually functions.' },
    { label:'Ask PODIUM, directly, whether it thinks you\'re doing a good job.', eff:{base:+3,press:-3,auth:0}, wild:true,
      res:'The model produces four hundred words of uninterrupted praise with the confidence of something that has never once been asked a hard question. You read all of it.' }]},

{ id:'m-podium-classified-leak', title:'The Training Data Problem', who:C.spy, min:12, max:46, tags:['tech','security'],
  src:'sensitive material inadvertently absorbed into a drafting tool\'s outputs',
  text:'Errol Hance does not sit down. "PODIUM produced a line in yesterday\'s draft with a troop movement ' +
       'detail that is not public, sir. Someone fed it a classified cable at some point to make the foreign-policy ' +
       'section sound more authoritative. We don\'t know who. We don\'t know what else is in there."',
  choices:[
    { label:'Keep using it. Just review the drafts harder.', eff:{base:+3,press:-4,courts:-3,street:-1,auth:+1},
      res:'A tool with an unknown quantity of classified material baked into its weights stays in daily use, on the theory that a human will catch it next time.' },
    { label:'Pull PODIUM offline. Full audit before it touches another draft.', eff:{base:-4,press:+4,courts:+4,congress:+2,auth:0},
      res:'The tool goes dark for six weeks while investigators try to figure out what it knows. Speechwriting reverts to the old, slow, secure way, which turns out to have been fine all along.' },
    { label:'Find and fire whoever fed it the cable. Quietly.', eff:{base:+2,press:-3,courts:-2,auth:+1},
      res:'One staffer takes the fall for a system nobody was supervising closely enough. The underlying model keeps whatever it already learned.' },
    { label:'Ask PODIUM to identify what classified material it was trained on.', eff:{base:-2,press:-3,courts:-4,auth:-1}, wild:true,
      res:'You interrogate the leak by asking the leak about itself. It produces an answer that is confident, detailed, and completely unverifiable, which is somehow the most alarming outcome of the three.' }]},

{ id:'m-writers-replaced', title:'The Restructuring', who:C.cos, min:10, max:44, tags:['tech','money'],
  src:'creative and communications staff reduced following automation of their function',
  text:'Deborah has the org chart, with a lot of red boxes. "We can cut the writers\' room to two people, sir, ' +
       'and let PODIUM cover the rest. It saves eleven salaries. Gideon has asked me, formally, to convey that ' +
       'he considers this a mistake, and to note that he is aware his own job is one of the two remaining."',
  choices:[
    { label:'Cut the room. Two people, one machine.', eff:{base:+5,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'Nine writers are let go by memo. The speeches keep coming out on schedule, slightly flatter, in a way only the two survivors can name.' },
    { label:'Keep the full room. Use PODIUM for drafts only.', eff:{base:-2,press:+3,congress:+1,cash:-0.1,auth:0},
      res:'You keep eleven people employed doing a job a machine can approximate. It costs money and, somehow, still produces better jokes.' },
    { label:'Cut the room, keep the savings, don\'t mention the machine at all.', eff:{base:+4,press:-4,street:-2,cash:+0.3,auth:+1},
      res:'The layoffs are announced as "efficiency." The tool doing the replacing is never named in the press release, which fools almost nobody.' },
    { label:'Let PODIUM draft the layoff announcement about the writers.', eff:{base:+1,press:-4,street:-1,auth:0}, wild:true,
      res:'The tool writes its own coworkers\' termination notice, warmly, in the same voice it uses for your applause lines. Even Deborah pauses at that one.' }]},

{ id:'m-podium-hallucination', title:'The Invented Statistic', who:C.press, min:6, max:44, tags:['tech','press'],
  src:'a fabricated but confidently stated figure entering a public remarks document',
  text:'Kaylee found it during prep for tomorrow\'s fact-check. The speech, drafted by PODIUM and cleared by ' +
       'staff, cites a factory-jobs number that does not exist anywhere in any government dataset. "It sounds ' +
       'exactly like a real statistic, sir. That\'s the problem. It sounds more real than the real ones."',
  choices:[
    { label:'Say it anyway. It sounds true. That\'s enough.', eff:{base:+6,press:-6,courts:-2,auth:+2},
      res:'You deliver a number that a machine invented from nothing, confidently, to a room full of reporters with laptops open. Three of them cite it before anyone checks.' },
    { label:'Cut the line. Verify every number by hand from now on.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:'A tedious new verification step gets added to every draft. It is boring, it works, and it never makes the news, which is exactly how it should be.' },
    { label:'Say it, then quietly correct it in a Friday footnote.', eff:{base:+3,press:-4,courts:-1,auth:+1},
      res:'You get the applause line and the correction, timed for when nobody is reading. Both facts are now permanently, confusingly, on the record.' },
    { label:'Have PODIUM show its work. Publish the sourcing, or lack of it.', eff:{base:-4,press:+5,courts:+2,congress:+2,auth:-2}, wild:true,
      res:'You demand the machine cite itself and it cannot, because there is nothing there to cite. The transparency is excruciating and, for once, entirely accurate.' }]},

/* ══════════════ SURVEILLANCE & DATA ══════════════ */

{ id:'m-data-broker-buy', title:'The Data Broker', who:C.home, min:8, max:46, tags:['tech','security'],
  src:'commercially available location and purchase data bought instead of obtained via warrant',
  text:'Duane has found a workaround he\'s visibly proud of. "We don\'t need a warrant for any of it, sir. A ' +
       'private broker already collected it, legally, from apps that sell it. We just buy the same dataset ' +
       'everyone else can buy. It\'s not surveillance. It\'s a subscription."',
  choices:[
    { label:'Buy the full package. Every citizen, every movement.', eff:{base:+8,press:-6,courts:-5,street:-4,cash:-0.3,auth:+8},
      res:'The government acquires, by credit card, the exact dataset the Fourth Amendment was written to make hard to get. Nobody\'s papers were searched. Nobody\'s effects were seized. It is, on paper, fine.' },
    { label:'Don\'t buy it. Get a warrant like everyone else.', eff:{base:-4,press:+5,courts:+4,auth:0},
      res:'You take the slow, constitutional route on principle, which in this administration counts as a plot twist.' },
    { label:'Buy a limited version. Only for "active threats."', eff:{base:+4,press:-4,courts:-3,auth:+3},
      res:'A narrower purchase with a definition of "active threat" that grows, department memo by department memo, over the following year.' },
    { label:'Buy the data, then publish exactly what it contains about you.', eff:{base:-2,press:+4,courts:+2,street:+3,auth:-3}, wild:true,
      res:'You demonstrate the tool by pointing it at yourself and releasing the results. It turns out to be genuinely uncomfortable reading, which was, weirdly, the point.' }]},

{ id:'m-facial-recognition', title:'The Cameras', who:C.spy, min:10, max:46, tags:['tech','security'],
  src:'facial recognition deployed at large public gatherings without prior public notice',
  text:'Errol has the pilot results. Cameras at three rallies this month, faces matched against a federal ' +
       'database in real time, no signage, no notice. "It flagged eleven people with outstanding warrants, sir. ' +
       'It also flagged a woman for a parking ticket from six years ago, and detained her for ninety minutes.' +
       ' We are calling that a rounding error."',
  choices:[
    { label:'Expand it. Every rally, every stadium, permanently.', eff:{base:+7,press:-6,courts:-5,street:-4,auth:+9},
      res:'Face-matching becomes standard at any gathering large enough to warrant a camera. It works exactly as advertised, which is the frightening part.' },
    { label:'Shut the pilot down. Post a sign next time, at least.', eff:{base:-4,press:+5,courts:+4,street:+2,auth:0},
      res:'You end an unannounced surveillance pilot before it becomes routine. It is a small, correct act that will never appear in any highlight reel.' },
    { label:'Keep it, but only run matches for actual felony warrants.', eff:{base:+4,press:-4,courts:-3,auth:+4},
      res:'A narrower version of the same machine, with a narrower definition that will, inevitably, widen.' },
    { label:'Point the same cameras at your own security detail.', eff:{base:+1,press:+2,street:+1,auth:-2}, wild:true,
      res:'You turn the surveillance apparatus briefly inward as a gesture of fairness. It flags your own chief bodyguard for a decade-old library fine and everyone has a good, uneasy laugh.' }]},

{ id:'m-metadata-revival', title:'The Bulk Collection', who:C.fbi, min:12, max:46, tags:['tech','congress'],
  src:'a lapsed bulk-metadata program revived under a narrower legal justification',
  text:'Marla Quist is precise, as always. "The old bulk call-records program expired, sir, and Congress let it ' +
       'expire on purpose. There is a narrower version we can stand back up under existing authority, no vote ' +
       'required. It collects less. It also collects it on everyone, which is a strange kind of less."',
  choices:[
    { label:'Stand it back up. Skip the vote entirely.', eff:{base:+7,congress:-6,courts:-4,press:-3,auth:+7},
      res:'A program Congress deliberately let die is quietly resurrected under a legal theory nobody in that Congress voted on. It works. That is exactly the problem with it.' },
    { label:'Take it to Congress. Let them vote, win or lose.', eff:{base:-4,congress:+6,press:+3,auth:0},
      res:'You put a surveillance authority back through the body that killed it the first time. It is slower, it is proper, and it might actually fail, which is the point of asking.' },
    { label:'Run a "pilot" version and call it a study.', eff:{base:+4,congress:-4,press:-3,auth:+3},
      res:'The program returns wearing the word "pilot" as a fig leaf. Pilots, historically, in this building, do not end.' },
    { label:'Brief the opposition leader personally before doing anything.', eff:{base:-3,congress:+4,press:+2,auth:-2}, wild:true,
      res:'You loop in Cordelia Ruiz-Bloom before making the call, which nobody in this administration has done for anything in three years. She is so surprised she forgets to object.' }]},

{ id:'m-location-data-leak', title:'The Leaked Coordinates', who:C.spy, min:14, max:46, tags:['tech','press'],
  src:'sensitive location data on public figures obtained and circulated without authorization',
  text:'Errol delivers this one standing up. Someone inside the surveillance program pulled location histories ' +
       'on nine sitting senators and two reporters, out of curiosity or leverage, nobody\'s sure which, and it ' +
       'has surfaced on an anonymous forum. "This is precisely the scenario I said would happen, sir. In the memo. Twice."',
  choices:[
    { label:'Bury it. Deny the program exists at all.', eff:{base:+3,press:-6,courts:-4,congress:-4,auth:+3},
      res:'You deny a program that a forum post is currently proving exists in granular detail. The denial ages badly by dinner.' },
    { label:'Own it publicly. Shut the leaking capability down.', eff:{base:-5,press:+6,courts:+4,congress:+3,auth:-1},
      res:'You admit the program, admit the leak, and pull the specific access that made it possible. It is expensive to your standing and it is the only version of this that ends cleanly.' },
    { label:'Find the leaker. Prosecute quietly. Keep the program.', eff:{base:+3,press:-4,courts:-2,auth:+2},
      res:'One analyst takes the full weight of the consequence. The system that let it happen stays exactly as it was.' },
    { label:'Offer the nine senators their own copy of the file, as a courtesy.', eff:{base:-3,press:+3,congress:-2,auth:-3}, wild:true,
      res:'You hand the surveilled senators their own surveillance files, unprompted, as a gesture of transparency. Two are grateful. Seven are now extremely, permanently interested in oversight.' }]},

{ id:'m-trust-score', title:'The Trust Score', who:C.home, min:20, max:48, tags:['tech','power'],
  src:'a composite citizen scoring system built from combined federal and commercial data',
  text:'Duane presents it like a product launch. A single number, per citizen, built from tax records, travel ' +
       'patterns, social posts and purchase data, meant to flag "risk" before it happens. "We\'re calling it a ' +
       'Trust Score, sir. Low scores get flagged for extra screening at the airport, the border, the benefits office. Everywhere, eventually."',
  choices:[
    { label:'Roll it out nationally. Full data, full score, full authority.', eff:{base:+8,press:-7,courts:-6,congress:-4,street:-4,cash:-0.2,auth:+12},
      res:'A single number now follows every citizen through every federal interaction they will ever have. It is the largest structural expansion of executive reach in a generation, delivered in a slide deck with a friendly icon.' },
    { label:'Kill it before it starts.', eff:{base:-5,press:+6,courts:+5,congress:+4,auth:-1},
      res:'You shelve a national scoring system before it touches a single citizen. Duane calls it a missed opportunity. History, probably, will not agree with him.' },
    { label:'Pilot it in one state. See how it lands.', eff:{base:+4,press:-4,courts:-3,congress:-2,auth:+5},
      res:'One state becomes the test case for a scoring system with your name nowhere on it and your fingerprints all over it. It lands, unsurprisingly, worse for some residents than others.' },
    { label:'Give yourself a Trust Score first. Publish it.', eff:{base:-2,press:+3,street:+2,auth:-3}, wild:true,
      res:'You run the algorithm on the President. It flags three foreign trips, a suspicious cash pattern, and a chaotic travel history, and rates you, officially, a moderate risk.' }]},

{ id:'m-data-breach', title:'The Breach', who:C.fbi, min:20, max:48, tags:['tech','press'],
  src:'a large federal data system compromised after rapid, under-secured deployment',
  text:'Marla is not sugarcoating this one. "The new data platform was breached, sir. Everything in it: tax, ' +
       'travel, the Trust Score pilot if we ran it, all of it, for an unknown period, by an unknown party. It ' +
       'was stood up in eleven weeks. It should have taken eighteen months and a security review we skipped."',
  choices:[
    { label:'Bury the disclosure. Notify no one who doesn\'t already know.', eff:{base:+2,press:-7,courts:-5,street:-3,auth:+2},
      res:'A federal breach affecting an unknown number of citizens goes unannounced. It will surface eventually, the way these things do, at the worst possible moment.' },
    { label:'Disclose it fully. Notify everyone affected, fund the fix.', eff:{base:-6,press:+6,courts:+4,congress:+3,cash:-0.4,auth:-1},
      res:'The full, humiliating truth goes out the same week it\'s discovered. It costs you a genuinely brutal news cycle and it is the only version where citizens actually get to protect themselves.' },
    { label:'Blame the contractor who built the platform. Fire them publicly.', eff:{base:+3,press:-4,courts:-2,cash:-0.2,auth:+2},
      res:'One vendor absorbs the entire blame for a timeline you personally demanded. The system stays live, unpatched, under a new logo.' },
    { label:'Offer everyone affected a year of free credit monitoring and a mug.', eff:{base:+1,press:-3,cash:-0.3,auth:+1}, wild:true,
      res:'The standard, faintly insulting corporate apology gesture, deployed at federal scale. The mug says "Data Integrity Matters." It does not, in fact, seem to.' }]},

/* ══════════════ THE PLATFORM YOU HALF OWN ══════════════ */

{ id:'m-bellow-conflict', title:'The Conflict of Interest', who:C.ethics, min:2, max:40, tags:['tech','money'],
  src:'an officeholder retaining a financial stake in a platform used for official communication',
  text:'Miriam has the disclosure forms and a headache. "You hold roughly thirty percent of Bellow through a ' +
       'trust, sir, and you also use it as the official channel for presidential announcements. Every post you ' +
       'make drives engagement, which drives value, which you personally hold thirty percent of. I have never ' +
       'seen a form quite like this."',
  choices:[
    { label:'Keep the stake. Keep posting. Nothing to disclose.', eff:{base:+6,press:-5,courts:-4,congress:-2,cash:+0.2,auth:+2},
      res:'You continue to personally profit from your own official statements. Miriam files the objection. The objection changes nothing.' },
    { label:'Move it to a genuine blind trust, run by someone else.', eff:{base:-3,press:+5,courts:+3,cash:-0.1,auth:0},
      res:'You give up direct control of an asset you built, on paper, which is either real integrity or a very convincing performance of it. Nobody outside the building can tell the difference, which is the point of a blind trust.' },
    { label:'Sell a token slice publicly, keep the rest quietly.', eff:{base:+3,press:-3,courts:-2,cash:+0.3,auth:+1},
      res:'A small, photogenic divestiture covers a much larger stake that stays exactly where it was. Reporters who read past the press release notice.' },
    { label:'Announce every post\'s engagement numbers next to your stake value.', eff:{base:-2,press:+4,courts:+2,cash:0,auth:-2}, wild:true,
      res:'You publish the exact dollar value your own announcements generate for you, in real time, which is either the most transparent thing done all year or a confession dressed as a feature.' }]},

{ id:'m-bellow-badge', title:'The Verified Loyalists', who:C.social, min:2, max:36, tags:['tech','money','levity'],
  src:'a paid verification tier that also confers algorithmic reach',
  text:'Brayden has a proposal. A paid badge on Bellow, cheap, that also happens to triple the reach of anything ' +
       'the holder posts. "It\'s not political, sir. Anyone can buy it. It just so happens that the people buying ' +
       'it are, currently, entirely people who like you."',
  choices:[
    { label:'Comp it free for every loyal account. Boost them all.', eff:{base:+7,press:-4,congress:-2,cash:-0.1,auth:+3},
      res:'A private army of tripled-reach loyal accounts appears overnight, at your personal expense, on a platform you partly own. It is a remarkably efficient use of a small amount of money.' },
    { label:'Leave the badge open-market. No favours.', eff:{base:-1,press:+3,congress:+1,cash:+0.2,auth:0},
      res:'The badge stays a normal, dull product feature that happens to sell well to your fans anyway, without you touching a thing.' },
    { label:'Quietly revoke it from three critical journalists.', eff:{base:+4,press:-5,courts:-3,auth:+2},
      res:'Three accounts lose their badge and two-thirds of their reach the same week, with no explanation offered or required. They notice within the hour.' },
    { label:'Give the badge to a hundred randomly selected ordinary users.', eff:{base:-2,press:+3,street:+2,cash:-0.1,auth:-1}, wild:true,
      res:'A hundred people with no political angle whatsoever suddenly find themselves with tripled reach and no idea why. Several become minor celebrities discussing sandwich preferences.' }]},

{ id:'m-bellow-throttle', title:'The Rival Platform', who:C.social, min:8, max:44, tags:['tech','money'],
  src:'competing services facing reduced technical interoperability with a dominant platform',
  text:'Brayden explains, cheerfully, that a rival platform is gaining ground, mostly among people who find Bellow ' +
       '"a bit much." He has a way to fix that. "We just make it slightly harder to share their links on our ' +
       'platform, sir. A loading delay. Nothing anyone could point to as intentional. Four seconds, maybe five."',
  choices:[
    { label:'Do it. Slow every link to the rival to a crawl.', eff:{base:+6,press:-5,courts:-4,congress:-2,cash:+0.1,auth:+3},
      res:'A competitor\'s links load just slowly enough to lose the click. It is invisible, deniable, and precisely the kind of leverage an antitrust filing is built to find eighteen months from now.' },
    { label:'Leave it alone. Compete on the product.', eff:{base:-2,press:+4,congress:+2,cash:-0.1,auth:0},
      res:'You let the rival grow on its own merits, which is a genuinely strange sentence to write about this administration and is, this once, true.' },
    { label:'Buy the rival outright instead.', eff:{base:+4,press:-3,courts:-3,cash:-0.7,auth:+2},
      res:'You purchase the competition rather than throttle it, which achieves the same result through a check instead of code. The lawyers prefer this version, slightly.' },
    { label:'Publicly recommend the rival platform yourself.', eff:{base:-3,press:+3,street:+1,cash:-0.2,auth:-2}, wild:true,
      res:'You tell your own followers to try the competitor. Bellow\'s stock dips four percent in an hour and Brayden looks, for the first time all year, physically ill.' }]},

{ id:'m-bellow-ipo', title:'The IPO', who:C.treas, min:24, max:48, tags:['tech','money'],
  src:'a personally held platform stake converting to enormous paper wealth via public offering',
  text:'Lyle has the underwriters\' number, and it is a large one. Bellow is going public. Your thirty percent, ' +
       'held through a trust with your name lightly obscured, is about to be worth more than every previous ' +
       'president\'s combined net worth, on paper, by Tuesday. "The timing, sir, coincides with the trade bill. I ' +
       'am obligated to say that out loud once."',
  choices:[
    { label:'Let it price. Say nothing about the trade bill.', eff:{base:+6,press:-6,courts:-5,congress:-3,cash:+1.2,auth:+3},
      res:'A trade bill that happens to boost Bellow\'s ad business passes the same week your stake converts to a fortune. Lyle\'s one obligatory sentence is the only acknowledgment anyone in the building makes.' },
    { label:'Delay the trade bill until after the IPO clears scrutiny.', eff:{base:-2,press:+4,courts:+3,congress:-1,cash:+0.3,auth:-1},
      res:'You slow down policy to put daylight between two events that should never have been near each other. It is a small, real act of self-restraint that nobody outside this room will ever know cost you anything.' },
    { label:'Sell the stake entirely before the IPO prices.', eff:{base:-4,press:+5,courts:+4,cash:+0.4,auth:-2},
      res:'You cash out early, at a lower number, purely to remove the conflict. It costs real money and it is, on paper, the only clean version of this week available to you.' },
    { label:'Donate a symbolic ten percent of the gain to charity, keep the rest.', eff:{base:+2,press:-2,courts:-2,cash:+0.8,auth:+1}, wild:true,
      res:'A tenth of a fortune goes to charity, with a press release, while ninety percent of a trade-bill-adjacent windfall stays exactly where it landed.' }]},

{ id:'m-bellow-outage-crisis', title:'The Wrong Night To Go Down', who:C.social, min:6, max:46, tags:['tech','press'],
  src:'a communications outage coinciding with an actual emergency requiring public alerts',
  text:'Bellow is down, again, on the one night it actually matters. A chemical plant fire in three counties, ' +
       'the evacuation alert routed through the platform because it was cheaper than the old system, and nobody ' +
       'can get it to load. Brayden is apologising into a phone he can barely hold steady.',
  choices:[
    { label:'Wait for Bellow to come back. It always does.', eff:{base:+1,press:-6,street:-6,auth:+1},
      res:'Twenty-two minutes pass before the evacuation alert reaches anyone, because the alert system was quietly consolidated onto a platform you personally profit from.' },
    { label:'Trigger the old broadcast alert system immediately instead.', eff:{base:-2,press:+5,street:+5,cash:-0.1,auth:0},
      res:'A slower, uglier, government-run system that still works when the app doesn\'t. Three counties get out in time. Nobody thanks the technology for being boring.' },
    { label:'Blame the plant operator for the delay, not the platform.', eff:{base:+3,press:-4,street:-3,auth:+1},
      res:'You point the finger at the fire, not the app that failed to warn anyone about it. It buys a news cycle and nothing else.' },
    { label:'Mandate that emergency alerts never route through a single private platform again.', eff:{base:-3,press:+4,congress:+3,street:+3,cash:-0.2,auth:-2}, wild:true,
      res:'You write a rule that costs your own company a contract, permanently, on the grounds that a chemical fire is not the moment to find out an app is down.' }]},

/* ══════════════ THE CONVINCING FAKES ══════════════ */

{ id:'m-deepfake-rival', title:'The Fake That Helps', who:C.press, min:6, max:44, tags:['tech','press'],
  src:'a fabricated video of an opposition figure surfacing shortly before a vote',
  text:'Kaylee has verified it three separate ways and it still isn\'t real. A video of Cordelia Ruiz-Bloom ' +
       'appearing to accept a bribe is circulating, flawlessly rendered, forty-eight hours before a key vote. ' +
       '"It didn\'t come from us, sir. I want that on the record before I say the next part, which is that it is helping."',
  choices:[
    { label:'Let it ride. Don\'t confirm, don\'t deny.', eff:{base:+7,press:-6,courts:-3,street:-2,auth:+2},
      res:'You benefit from a fake you didn\'t make and won\'t debunk. The vote shifts three points before anyone proves anything, which is exactly long enough.' },
    { label:'Debunk it publicly, immediately, even though it helps you.', eff:{base:-5,press:+7,courts:+3,congress:+3,auth:-1},
      res:'You kill a lie that was working in your favour, on principle, out loud, before the vote. It is expensive and it is the single most credible thing you do all term.' },
    { label:'Quietly amplify it through a friendly account, deny involvement.', eff:{base:+6,press:-6,courts:-4,street:-2,auth:+3},
      res:'The fake gets a second wind from an account with no formal ties to you and every informal one. It works, and it is now much harder to walk back.' },
    { label:'Offer Cordelia your own forensic team to prove it fake.', eff:{base:-4,press:+5,congress:+2,street:+2,auth:-3}, wild:true,
      res:'You hand your own analysts to your rival to clear her name. She accepts, visibly suspicious, and it is the strangest bipartisan moment of your entire term.' }]},

{ id:'m-deepfake-frail', title:'The Fake That Hurts', who:C.cos, min:14, max:48, tags:['tech','press'],
  src:'a fabricated video depicting an incumbent as visibly incapacitated',
  text:'Deborah closes the door before she says it. A video is spreading of you, seemingly disoriented, slurring, ' +
       'unable to finish a sentence. It is not real. It is also, she admits, more convincing than several real ' +
       'moments from last month that people already believe happened.',
  choices:[
    { label:'Demand a live, unscripted press conference to disprove it.', eff:{base:+3,press:+3,courts:+2,auth:0},
      res:'You stand up, sharp and unscripted, for forty minutes, and the fake loses most of its power in real time. It is a genuinely good use of live television, a category you rarely operate in.' },
    { label:'Deny it exists. Refuse to acknowledge the video at all.', eff:{base:-4,press:-5,street:-3,auth:0},
      res:'Silence reads, to a large chunk of the country, as confirmation. The video keeps circulating with nobody official pushing back on it.' },
    { label:'Sue every platform hosting it, all at once.', eff:{base:+4,press:-4,courts:-4,congress:-1,cash:-0.3,auth:+2},
      res:'A wave of litigation removes the video from three platforms and immortalises it on eleven others via the lawsuit\'s own news coverage.' },
    { label:'Release your full, real medical file to counter it.', eff:{base:-3,press:+5,street:+3,auth:-2}, wild:true,
      res:'You answer a fabricated video with genuine, complete medical transparency, which is a category of honesty this office has not previously attempted.' }]},

{ id:'m-deepfake-law', title:'The Labeling Bill', who:C.lawyer, min:10, max:46, tags:['tech','congress'],
  src:'proposed legislation requiring disclosure labels on synthetic political media',
  text:'Sy lays out the bill plainly. It would require any synthetic media used in a campaign, including your own, ' +
       'to carry a visible disclosure label. "It would apply to us too, sir. Every ad, every clip PODIUM touches, ' +
       'labeled. I want to be clear that this is, on the merits, a reasonable bill."',
  choices:[
    { label:'Kill it. Have the Speaker bury it in committee.', eff:{base:+6,congress:-5,press:-4,courts:-2,auth:+3},
      res:'A disclosure requirement that would have applied equally to everyone dies quietly, which somehow reads as more suspicious than if it had simply failed a floor vote.' },
    { label:'Support it. Label your own content first.', eff:{base:-4,press:+6,congress:+5,auth:-1},
      res:'You back a transparency rule that constrains your own operation before it constrains anyone else\'s. It passes, and your next synthetic ad runs with a label nobody makes you add.' },
    { label:'Support it publicly, gut the enforcement funding privately.', eff:{base:+4,press:-4,congress:-3,courts:-2,auth:+2},
      res:'The law exists, on paper, with no money behind it to actually check compliance. It is a rule that looks like a rule and functions like a suggestion.' },
    { label:'Propose labeling every human speech as "possibly synthetic" too.', eff:{base:+3,press:-3,congress:-3,auth:+1}, wild:true,
      res:'An amendment so broad it would require a disclosure sticker on every remark anyone in government ever makes. It is voted down, unanimously, in eleven minutes, a rare show of bipartisan sanity.' }]},

{ id:'m-deepfake-general', title:'The Fake Order', who:C.gen, min:14, max:46, tags:['tech','war'],
  src:'a fabricated audio clip mimicking a senior military official issuing orders',
  text:'General Tarrant is standing at something more rigid than attention. A synthetic audio clip, mimicking his ' +
       'voice precisely, ordering a unit redeployment that never happened, briefly reached two duty officers before ' +
       'anyone caught it. "For about six minutes, sir, someone else\'s voice was giving my orders. That is not a ' +
       'sentence I ever expected to say."',
  choices:[
    { label:'Downplay it publicly. Don\'t spook the markets or allies.', eff:{base:+3,press:-5,courts:-2,auth:+1},
      res:'You minimise a fake order that briefly moved actual troops on paper. It works, for now, and it teaches nobody the lesson the six minutes should have.' },
    { label:'Disclose it fully, order a voice-authentication overhaul.', eff:{base:-4,press:+5,courts:+3,congress:+2,cash:-0.3,auth:0},
      res:'The full, alarming truth goes public, alongside real money spent fixing the actual gap. It is expensive and it is the only version that closes the door properly.' },
    { label:'Quietly blame a rival nation, without proof, in a background briefing.', eff:{base:+5,press:-5,street:-2,courts:-2,auth:+2},
      res:'An unproven accusation lands in three headlines before anyone asks for evidence. It buys a news cycle and burns a diplomatic bridge nobody had finished building yet.' },
    { label:'Have Tarrant record a new, unmistakably human verification phrase.', eff:{base:-1,press:+2,courts:+1,auth:-1}, wild:true,
      res:'The General records a deliberately absurd verbal password, involving a childhood dog and a specific casserole, that no model has any way of knowing. It is, against all odds, the actual fix.' }]},

{ id:'m-deepfake-foreign-leader', title:'The Fake Declaration', who:C.state, min:16, max:48, tags:['tech','diplomacy'],
  src:'a fabricated video of a foreign head of state making inflammatory statements',
  text:'Muriel arrives without knocking, which she never does. A video is spreading of the president of Rusalka ' +
       'appearing to threaten San Baldoro with force, generated frame by frame, good enough that Rusalka\'s own ' +
       'embassy is fielding calls asking if it\'s real. "Neither side has denied it fast enough, sir. That gap is where the actual war starts."',
  choices:[
    { label:'Say nothing. Let the two countries sort out their own fake.', eff:{base:+1,press:-5,street:-2,courts:-2,auth:+1},
      res:'You stay out of a crisis that could genuinely spiral, on the theory that it isn\'t yours to fix. Two nations edge closer to a war based on nothing at all.' },
    { label:'Call both leaders personally. Confirm neither said it.', eff:{base:-3,press:+6,congress:+2,street:+3,auth:0},
      res:'A few unglamorous phone calls defuse a fabricated crisis before it becomes a real one. Nobody outside a handful of rooms ever learns how close it came.' },
    { label:'Use the confusion to push a deal favourable to you.', eff:{base:+5,press:-4,street:-3,courts:-2,auth:+3},
      res:'You leverage two frightened nations mid-panic into terms they\'d never accept calm. It works, and it is the kind of move that gets written about for decades, unkindly.' },
    { label:'Publicly offer to broker a joint fake-detection unit for both countries.', eff:{base:-2,press:+4,congress:+1,cash:-0.3,auth:-2}, wild:true,
      res:'You propose the two nearly-warring nations build a shared tool to catch the next one together. They agree, mostly out of sheer relief that someone changed the subject.' }]},

/* ══════════════ THE DONOR ══════════════ */

{ id:'m-donor-spectrum', title:'The Spectrum Favour', who:C.energy, min:6, max:44, tags:['tech','money'],
  src:'valuable public spectrum allocated to a politically connected private operator',
  text:'Cassandra Doyle has the allocation request. Dexter Voss, founder of the satellite-and-AI conglomerate ' +
       'Solstice and a donor of some considerable generosity, wants a slice of public spectrum released early, ' +
       'ahead of the scheduled auction. "It\'s worth billions to him, sir. It\'s worth quite a lot to us too, ' +
       'apparently, given the size of the last check."',
  choices:[
    { label:'Release it early. Skip the auction entirely.', eff:{base:+5,press:-5,courts:-4,congress:-3,cash:+0.3,auth:+3},
      res:'A public resource worth billions goes to one donor without competitive bidding. Solstice\'s stock jumps eleven percent within the hour, which is a fairly precise way to measure a favour.' },
    { label:'Run the scheduled auction. Voss can bid like anyone else.', eff:{base:-3,press:+5,congress:+3,cash:+0.4,auth:0},
      res:'The spectrum goes to whoever actually offers the most for it, which turns out to still be Voss, just at a price that makes the whole thing legitimate.' },
    { label:'Release it early, but for triple the assessed price.', eff:{base:+3,press:-3,congress:-1,cash:+0.6,auth:+1},
      res:'A favour dressed up as a good deal for the taxpayer. It is, in fact, a reasonably good deal, which does not make it not a favour.' },
    { label:'Give the spectrum to a rural broadband nonprofit instead.', eff:{base:-4,press:+5,street:+3,cash:-0.1,auth:-2}, wild:true,
      res:'You hand a resource worth billions to an organisation that will use it to get farmhouses online. Voss stops returning calls for a month, which several staffers privately describe as a vacation.' }]},

{ id:'m-donor-council-seat', title:'The Advisory Seat', who:C.cos, min:8, max:44, tags:['tech','loyalty'],
  src:'a major donor granted a formal advisory role with access to policy deliberations',
  text:'Deborah presents the idea, which is not hers. Dexter Voss wants a formal seat, "Special Adviser for ' +
       'Innovation," full briefing access, no Senate confirmation required because it\'s technically unpaid. ' +
       '"He\'d have a badge, sir. He\'d have a badge and a seat at meetings where actual policy gets decided."',
  choices:[
    { label:'Give him the seat. Full access, full title.', eff:{base:+6,press:-5,congress:-3,courts:-2,cash:+0.2,auth:+3},
      res:'A private citizen with a direct financial stake in half the department\'s decisions now sits in the room where those decisions are made. Nobody voted on it because nobody had to.' },
    { label:'Decline. Donors don\'t get badges.', eff:{base:-3,press:+5,congress:+3,cash:-0.2,auth:0},
      res:'You turn down real influence for a principle that costs you a large future donation. Voss is, by all reports, genuinely surprised.' },
    { label:'Give him the title, quietly limit what he can actually see.', eff:{base:+3,press:-3,congress:-1,cash:+0.1,auth:+1},
      res:'A badge with a smaller room behind it than advertised. Voss doesn\'t notice for eight months, which tells you how much of this was ever about the actual meetings.' },
    { label:'Make him chair a committee that meets once a year, unpaid, in person, no video.', eff:{base:-1,press:+2,congress:+1,auth:-1}, wild:true,
      res:'You give him exactly what he asked for, technically, in the most inconvenient possible form. He attends the first meeting and misses the second.' }]},

{ id:'m-donor-nobid-contract', title:'The No-Bid Contract', who:C.ag, min:10, max:46, tags:['tech','money'],
  src:'a large government technology contract awarded without competitive bidding to a connected firm',
  text:'Bo Slaughter has the contract on his desk, unsigned. A federal AI-screening system, four hundred million ' +
       'dollars, awarded to Solstice without a competitive process, citing "urgent national need." "It might ' +
       'genuinely be the best system available, sir. It also might genuinely not be, and we skipped the part where we\'d find out."',
  choices:[
    { label:'Sign it. Urgency waives the process.', eff:{base:+5,press:-5,courts:-5,congress:-3,cash:-0.4,auth:+3},
      res:'Four hundred million dollars moves to a donor\'s company with no competing bid ever considered. The system, when it arrives, works about as well as systems that skip review usually do.' },
    { label:'Open it to competitive bidding. Delay the deployment.', eff:{base:-3,press:+5,congress:+3,cash:-0.1,auth:0},
      res:'The contract goes out to open bid, takes four months longer, and comes in at two-thirds the price with a system that actually gets tested first.' },
    { label:'Sign it, split the contract with a second, unrelated firm.', eff:{base:+2,press:-3,courts:-2,cash:-0.3,auth:+1},
      res:'A cosmetic second vendor gets a slice of the deal to blur the appearance of a single-source award. Solstice still gets most of it.' },
    { label:'Have Voss donate the system to the government for free instead.', eff:{base:+1,press:+1,courts:-1,cash:+0.1,auth:+1}, wild:true,
      res:'You ask the donor to simply give the government the system he wanted to sell it. He agrees, cheerfully, because the data-access rights were always worth more to him than the check.' }]},

{ id:'m-donor-visa-fast-track', title:'The Visa Favour', who:C.home, min:6, max:44, tags:['tech','money'],
  src:'expedited immigration processing extended to a politically connected employer\'s workforce',
  text:'Duane has the request from Solstice\'s general counsel. Six hundred specialised visas, fast-tracked, ' +
       'ahead of a backlog that has ordinary applicants waiting eighteen months. "It\'s not illegal to prioritise, ' +
       'sir. It\'s just usually not this obvious whose name is on the request."',
  choices:[
    { label:'Fast-track all six hundred. Bump everyone else back.', eff:{base:+4,press:-5,congress:-3,street:-3,cash:+0.2,auth:+2},
      res:'Six hundred of Voss\'s hires clear in three weeks. The general backlog, already eighteen months deep, gets a few thousand people deeper.' },
    { label:'Process them in the normal queue, like anyone else.', eff:{base:-2,press:+4,congress:+2,cash:-0.1,auth:0},
      res:'Solstice waits in line with everybody else. It is unremarkable, correct, and the kind of decision this administration makes rarely enough that it is briefly notable.' },
    { label:'Fast-track a smaller batch. A hundred, not six.', eff:{base:+2,press:-3,congress:-1,cash:+0.1,auth:+1},
      res:'A modest version of the same favour, sized to look reasonable in a headline. It still moves a hundred people ahead of people who applied years earlier.' },
    { label:'Fast-track them, and everyone else in the backlog too, same week.', eff:{base:-3,press:+4,congress:+2,street:+3,cash:-0.5,auth:-1}, wild:true,
      res:'You clear the entire national backlog at once to avoid the appearance of a favour, which costs a genuinely large amount of processing budget and helps several thousand people who never made a donation to anyone.' }]},

{ id:'m-donor-public-feud', title:'The Falling Out', who:C.social, min:16, max:48, tags:['tech','press'],
  src:'a public break between a leader and a formerly aligned technology figure',
  text:'Brayden slides his phone across the desk, wide-eyed. Dexter Voss just posted, on Bellow, of all places, ' +
       'a nine-part thread accusing the administration of "betraying everything Solstice built this country on." ' +
       'It is, Brayden notes, trending at number one, on a platform you own thirty percent of.',
  choices:[
    { label:'Fire back publicly. Full thread, full names, tonight.', eff:{base:+5,press:-5,street:-2,cash:-0.3,auth:+2},
      res:'A public war between the President and his biggest donor plays out in real time, on your own platform, in front of everyone. Bellow\'s engagement numbers, and your stake\'s value, both spike.' },
    { label:'Say nothing. Let it burn out on its own.', eff:{base:-2,press:+3,auth:0},
      res:'You decline to feed a fight that mostly feeds itself. It works, mostly, though Voss gets a full week of uncontested airtime.' },
    { label:'Have Brayden quietly throttle the thread\'s reach.', eff:{base:+3,press:-4,courts:-2,cash:-0.1,auth:+2},
      res:'The algorithm you have influence over quietly demotes a critical thread about you, on a platform, about a man who just accused you of exactly this kind of thing.' },
    { label:'Call Voss directly. Off the record. Work it out like adults.', eff:{base:-1,press:+2,cash:-0.1,auth:-1}, wild:true,
      res:'A forty-minute phone call resolves what nine public posts could not. Voss deletes the thread. Neither of you ever explains what was actually said, which is somehow the most honest part of the whole episode.' }]}

);
})();
