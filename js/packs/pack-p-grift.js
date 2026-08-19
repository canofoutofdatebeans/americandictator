/* ============================================================
   PACK P, THE GRIFT  (any month, weighted mid-to-late term)
   Merch empires, the presidential library fund, a gifted jet
   from a friendly kingdom, the pardon market, speaking fees,
   a foreign sovereign fund, the ballroom for rent, and a token
   that pumps and dumps. Original satire in the house voice,
   INSPIRED BY THE GENRE, NEVER COPIED FROM ANY REAL PERSON.
   Fictional stand-ins only; real countries, invented leaders.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE MERCH ══════════════ */

{ id:'p-golden-bible', title:'The Golden Bible', who:C.lawyer, min:2, max:40, tags:['money','levity'],
  src:'a branded commemorative Bible sold through the campaign store',
  text:'Sy places a sample on the desk. Gold foil, faux leather, a sticker reading “Made in a Country We Do Not ' +
       'Currently Have a Trade Deal With.” It retails for $79.99 and the pastor has questions about the markup.',
  choices:[
    { label:'Order a second printing. Charge more.', eff:{base:+7,press:-4,street:-2,cash:+0.3,auth:+2},
      res:'The second run sells out before the first ships. A theologian writes a furious column that sells forty more copies.' },
    { label:'Donate the proceeds to a real literacy charity.', eff:{base:-2,press:+5,congress:+2,cash:-0.1,auth:0},
      res:'The margin shrinks to something a normal business would call charity. Nobody covers it, which was rather the point.' },
    { label:'License your face for the cover too.', eff:{base:+6,press:-5,courts:-2,cash:+0.3,auth:+2},
      res:'Your face is now embossed opposite the Book of Genesis. The printer asks, not unreasonably, which order the credits should run in.' },
    { label:'Have Alvin personally deliver one to every senator.', eff:{base:+3,press:-3,congress:-6,cash:-0.2,auth:0}, wild:true,
      res:'Alvin hand-delivers ninety-nine Bibles to Capitol Hill with a card reading “No Occasion.” Fourteen senators quietly reread the chapter on graven images.' }]},

{ id:'p-sneaker-drop', title:'The Sneaker Drop', who:C.treas, min:4, max:44, tags:['money','levity'],
  src:'a limited-run branded sneaker sold directly to supporters',
  text:'Lyle holds up the box. High-top, gold laces, a sole embossed with the seal of an office that does not ' +
       'typically endorse footwear. Retail is $399. They moved eleven thousand pairs in four minutes and crashed the site twice.',
  choices:[
    { label:'Drop a second colorway. Immediately.', eff:{base:+7,press:-3,street:-2,cash:+0.3,auth:+2},
      res:'Colorway two sells out faster than colorway one. An economist calls it “genuinely remarkable price inelasticity” on television, and means it as an insult.' },
    { label:'Cap the run. Let the market cool.', eff:{base:-2,press:+3,congress:+2,cash:+0.1,auth:0},
      res:'You leave demand on the table on purpose. It is the single most disciplined business decision of your career and nobody notices.' },
    { label:'License the seal for the sole. Actually the seal.', eff:{base:+5,press:-4,courts:-4,cash:+0.3,auth:+2},
      res:'The Presidential Seal, statutorily reserved for official use, is now on the bottom of a shoe. A very old law gets read aloud in a hearing for the first time in decades.' },
    { label:'Give a pair to every federal judge, unsolicited.', eff:{base:+2,press:-3,courts:-5,cash:-0.1,auth:0}, wild:true,
      res:'One hundred and seventy-nine pairs arrive at courthouses nationwide. Most are returned. Two are worn, once, to chambers, as a joke that lands badly.' }]},

{ id:'p-watch-line', title:'The Watch Line', who:C.ethics, min:6, max:46, tags:['money','levity'],
  src:'a luxury watch line marketed under the family name',
  text:'Miriam has the disclosure form and it is mostly blank. “The watches retail for eleven thousand dollars, ' +
       'sir. Buyers get a certificate of authenticity and, informally, a phone number. I am required to ask whether the phone number is the point.”',
  choices:[
    { label:'The phone number is the point. Ship it.', eff:{base:+6,press:-4,courts:-4,cash:+0.4,auth:+2},
      res:'Forty watches move to buyers who will, it turns out, want something later. Miriam files the disclosure under a heading she invents on the spot: “Access, Apparent.”' },
    { label:'Put the line in a blind trust. Actually blind.', eff:{base:-3,press:+5,courts:+3,cash:-0.1,auth:0},
      res:'You surrender control of a product line named after you. It is legally correct and emotionally unbearable, which is usually a sign it was right.' },
    { label:'Add a “Diplomat’s Edition.” Numbered. For heads of state.', eff:{base:+5,press:-4,courts:-5,cash:+0.4,auth:+2},
      res:'A gift-shop watch becomes, arguably, an emolument. Three ambassadors already have one. Nobody in the building will say the word “arguably” out loud.' },
    { label:'Recall the whole line. Refund every buyer, publicly, on live television.', eff:{base:-5,press:-3,courts:-4,cash:-0.4,auth:-2}, wild:true,
      res:'You appear live to hand-return eleven thousand dollars to a man named Gary, on camera, twice, because the second watch was found in a drawer. It is riveting television and terrible strategy.' }]},

{ id:'p-trading-cards', title:'The Trading Cards', who:C.press, min:1, max:48, tags:['money','press','levity'],
  src:'a digital collectible card series featuring heroic poses',
  text:'Kaylee scrolls through the drop. You, as a superhero. You, as a cowboy. You, riding something that is ' +
       'not technically a horse. Ninety-nine dollars a pack. It sold out in minutes and three business outlets cannot decide whether to cover it as news or as merchandise.',
  choices:[
    { label:'Announce a “legendary” ultra-rare card. Yourself, glowing.', eff:{base:+8,press:-6,street:-2,cash:+0.3,auth:+2},
      res:'The glowing card sells for four thousand dollars on the resale market within the hour. A satirist points out this is more than most people’s monthly rent, and is roundly ignored.' },
    { label:'Let the joke be the joke. Say nothing.', eff:{base:-2,press:+4,congress:+1,cash:+0.1,auth:0},
      res:'You decline to defend or explain the trading cards. It is the correct call. The cards defend themselves, loudly, without your help.' },
    { label:'Sue a satire site for making fun of the cards.', eff:{base:+4,press:-8,courts:-3,cash:-0.2,auth:+1},
      res:'You take legal action against a parody account with four thousand followers. The lawsuit gets it four hundred thousand more.' },
    { label:'Donate the proceeds. Refuse to say how much, on principle.', eff:{base:-3,press:-4,courts:-3,cash:-0.3,auth:-2}, wild:true,
      res:'You give away money and then decline to prove it. A gesture designed to look virtuous manages, through pure secrecy, to look worse than keeping it.' }]},

{ id:'p-official-store', title:'The Official Store', who:C.cos, min:8, max:48, tags:['money'],
  src:'a permanent retail operation attached to the office',
  text:'Deborah has floor plans. A permanent store, on federal land, adjacent to the briefing room, selling ' +
       'everything from the sneakers to the cologne nobody asked for. “It is either a gift shop, sir, or it is the most honest building in Washington.”',
  choices:[
    { label:'Break ground this week. Ribbon-cutting Friday.', eff:{base:+7,congress:-4,courts:-2,cash:+0.3,auth:+2},
      res:'A retail outlet opens forty feet from the briefing room. The gift shop clerk and the press pool now share a break room, which everyone agrees is an image problem nobody predicted correctly.' },
    { label:'Route it through an outside licensee instead.', eff:{base:-2,press:+3,congress:+3,cash:+0.1,auth:0},
      res:'A private company handles the merchandise at arm’s length. It is less profitable and considerably less indictable, which Deborah files under “the trade-off.”' },
    { label:'Put it in the West Wing basement. No lease, no rent.', eff:{base:+5,press:-4,courts:-5,congress:-3,cash:+0.4,auth:+2},
      res:'The store occupies federal space rent-free, which several statutes have opinions about. The gift shop clerk gets a security badge indistinguishable from a staffer’s.' },
    { label:'Staff it entirely with unpaid interns, for the “experience.”', eff:{base:+3,press:-3,congress:-2,street:-3,cash:+0.2,auth:0}, wild:true,
      res:'A rotating cast of college seniors sells watches for course credit. The Labor Department opens an inquiry. Madison, mercifully, is not among them this time.' }]},

{ id:'p-counterfeit-crackdown', title:'The Knockoffs', who:C.ag, min:10, max:48, tags:['money','courts'],
  src:'a wave of unlicensed merchandise undercutting the official line',
  text:'Bo has a table of seized goods. Fake watches, fake sneakers, a Bible with your face on the wrong ' +
       'testament. “Technically these people are breaking the law, sir. Also, technically, so is the actual product, which is why this is an unusually awkward raid to authorize.”',
  choices:[
    { label:'Raid every flea market in three states. Publicly.', eff:{base:+7,street:-5,press:-3,cash:+0.2,auth:+3},
      res:'Federal agents seize bootleg cologne from a folding table outside a stadium. The footage is either a strong deterrent or the funniest thing on the internet that week. It is both.' },
    { label:'Send cease-and-desist letters. Standard trademark process.', eff:{base:-2,press:+4,courts:+3,cash:+0.1,auth:0},
      res:'The lawyers do the boring, correct thing. Ninety percent of the knockoffs vanish quietly. Nobody films a raid because there is nothing to film.' },
    { label:'Deputize a private security firm to seize the goods.', eff:{base:+5,press:-4,courts:-5,street:-3,cash:+0.2,auth:+2},
      res:'Men in unmarked vests confiscate a folding table of fake sneakers. Nobody can say, precisely, under what authority, which is the entire problem in one sentence.' },
    { label:'Buy the biggest counterfeit operation. License it retroactively.', eff:{base:+4,press:-3,courts:-4,cash:-0.4,auth:0}, wild:true,
      res:'You purchase the knockoff factory outright and declare it official. The Bible with your face on the wrong testament is now, somehow, canon.' }]},

/* ══════════════ THE LIBRARY AND MUSEUM FUND ══════════════ */

{ id:'p-library-groundbreaking', title:'The Groundbreaking', who:C.hist, min:5, max:40, tags:['money'],
  src:'a presidential library campaign soliciting large, undisclosed gifts',
  text:'Dr. Weir has the pledge list, and half the names are redacted at the donor’s request. “The Tranquility ' +
       'Center will have your name on it in letters four feet tall, sir. We have raised six hundred million dollars. I do not know who from, and I was told, pleasantly, not to ask.”',
  choices:[
    { label:'Take the money. Every name stays sealed.', eff:{base:+7,press:-4,courts:-3,cash:+0.4,auth:+2},
      res:'Six hundred million dollars arrives with no names attached to it. The building rises fast and clean. What it was traded for stays, permanently, off the record.' },
    { label:'Publish every donor. Even the awkward ones.', eff:{base:-3,press:+6,congress:+4,cash:-0.1,auth:0},
      res:'The full list goes public. Two names cause a very bad week. Then, remarkably, it is over, because sunlight is boring and boring things do not compound.' },
    { label:'Cap individual gifts. Except from friendly governments.', eff:{base:+4,press:-3,courts:-4,congress:-3,cash:+0.3,auth:+2},
      res:'A rule with a carve-out precisely the size of the loophole it was written to hide. Three foreign delegations discover, immediately, that they are friendly.' },
    { label:'Fund it entirely with a bake sale. Insist on this, publicly, for a year.', eff:{base:-5,press:-4,street:-3,cash:-0.1,auth:-3}, wild:true,
      res:'A folding table outside the site sells brownies for eleven months while donors who could write a check in one sitting watch, baffled and a little insulted, from a respectful distance.' }]},

{ id:'p-museum-wing-naming', title:'The Wing', who:C.hist, min:10, max:44, tags:['money','ethics'],
  src:'a museum wing named for the single largest gift',
  text:'Dr. Weir unveils the model. A wing the size of a football field, named for a donor whose company happens ' +
       'to hold four pending federal contracts. “The naming rights cost eighty million dollars, sir. The contracts are worth considerably more, which the donor understands and we are asked to pretend we do not.”',
  choices:[
    { label:'Name it. Approve the contracts the same week.', eff:{base:+7,press:-5,courts:-4,congress:-3,cash:+0.4,auth:+2},
      res:'The wing opens with a company’s name on the marble and its contracts in the federal register, in the same news cycle. The connection is not subtle and is not denied.' },
    { label:'Take the gift. Separate the contracts by a full year.', eff:{base:-2,press:+3,courts:+3,cash:+0.2,auth:0},
      res:'A decent interval is inserted between the check and the contract. It fools exactly nobody and satisfies every lawyer in the building, which is apparently the bar.' },
    { label:'Let them name the whole museum. Not just the wing.', eff:{base:+5,press:-5,courts:-4,congress:-3,cash:+0.5,auth:+2},
      res:'The Tranquility Center becomes, contractually, a subsidiary brand experience. The gift shop now sells two logos on one mug.' },
    { label:'Rename the wing after the janitor who has worked there thirty years.', eff:{base:-4,press:-3,courts:-4,cash:-0.4,auth:-3}, wild:true,
      res:'You return the eighty million dollars and put a maintenance supervisor’s name on the marble instead. He is confused, then moved, then asked to give a speech he did not prepare.' }]},

{ id:'p-library-donor-wall', title:'The Donor Wall', who:C.ethics, min:12, max:46, tags:['money','ethics'],
  src:'an opaque gift-processing entity shielding donor identity',
  text:'Miriam holds a single sheet with one line on it: “Gifts Processed Through Liberty Financial: ' +
       '$340,000,000.” “That is the entire disclosure, sir. Liberty Financial is not required to say who gave it to them. It is, legally, a very expensive shrug.”',
  choices:[
    { label:'Keep routing everything through Liberty Financial.', eff:{base:+6,press:-4,courts:-3,cash:+0.3,auth:+2},
      res:'Three hundred forty million dollars arrives with a single line of paperwork. Liberty Financial’s entire business model, it turns out, is being a wall nobody can see through.' },
    { label:'Require underlying donor disclosure. No exceptions.', eff:{base:-3,press:+5,congress:+4,cash:-0.1,auth:0},
      res:'The wall comes down. Some names are boring. A few are not. The story runs for a week and then, mercifully, the news cycle moves on to something else.' },
    { label:'Create a second shell to obscure the first one.', eff:{base:+4,press:-5,courts:-5,congress:-2,cash:+0.3,auth:+2},
      res:'A shell company now owns the shell company. An org chart is drawn purely to confuse an auditor, and it works, on the auditor and everyone else.' },
    { label:'Publish the donor wall as an actual wall. Names in bronze.', eff:{base:+3,press:-4,courts:-3,cash:-0.3,auth:0}, wild:true,
      res:'Every underlying donor name gets cast permanently into a lobby wall, in an act of transparency so literal it embarrasses two senators who did not expect to be read at eye level.' }]},

{ id:'p-archive-embargo', title:'The Sealed Archive', who:C.hist, min:20, max:48, tags:['press','money'],
  src:'a decision to withhold records from public research for decades',
  text:'Dr. Weir is precise, as always. “The gift agreements require it, sir. Certain donor correspondence stays ' +
       'sealed for seventy-five years. That is longer than the country has had television. A historian at Colonnade University has already filed a lawsuit to see it now.”',
  choices:[
    { label:'Extend the seal. A hundred years. Round number.', eff:{base:+6,press:-8,courts:-4,congress:-2,auth:+2},
      res:'You lock the correspondence away for a century, which is a strange thing to do if there is nothing in it. Nobody says this out loud, but everybody thinks it, immediately.' },
    { label:'Release everything except genuinely classified material.', eff:{base:-4,press:+6,courts:+4,congress:+3,auth:+1},
      res:'The vast majority of the archive opens. It is mostly logistics and thank-you notes. A historian finds one truly interesting memo and builds a career on it.' },
    { label:'“Lose” the most sensitive boxes in a warehouse fire.', eff:{base:+3,press:-9,courts:-8,street:-3,auth:+2},
      res:'A storage facility burns, containing, by an extraordinary coincidence, exactly the boxes under subpoena. The insurance claim is processed faster than any investigation ever will be.' },
    { label:'Read the sealed archive aloud yourself, live, unedited.', eff:{base:-6,press:-4,courts:-3,auth:-4}, wild:true,
      res:'You narrate seventy-five years of donor correspondence into a live microphone for six straight hours. It is mostly logistics. Two names get very quiet phone calls that night.' }]},

{ id:'p-museum-gift-shop-twist', title:'The Gift Shop, Again', who:C.edu, min:14, max:48, tags:['money','levity'],
  src:'a museum retail operation that outearns the museum',
  text:'Bernadette has the quarterly numbers. The Tranquility Center’s gift shop grossed more last month than ' +
       'its admissions, its research grants and its café combined. “Educationally, sir, this is a disaster. Financially, it is the most successful thing the administration has built.”',
  choices:[
    { label:'Shrink the exhibits. Expand the shop. Simple math.', eff:{base:+6,press:-4,congress:-2,cash:+0.3,auth:+2},
      res:'Two galleries close to make room for a second register. A field trip of sixth graders leaves with tote bags and no clear sense of what, historically, happened here.' },
    { label:'Keep the ratio honest. Shop stays small.', eff:{base:-2,press:+3,congress:+2,cash:-0.1,auth:0},
      res:'The gift shop remains a gift shop and the museum remains, stubbornly, a museum. It earns less money and, somehow, more respect, which was not the plan but is the outcome.' },
    { label:'Charge admission just to reach the gift shop.', eff:{base:+4,press:-4,courts:-2,cash:+0.3,auth:+1},
      res:'You erect a twelve-dollar toll between the front door and the merchandise. A woman complains, on camera, that the museum charged her to buy a magnet.' },
    { label:'Turn the whole first floor into the gift shop. Move the exhibits upstairs.', eff:{base:+3,press:-4,congress:-3,cash:+0.4,auth:0}, wild:true,
      res:'Visitors now pass a full retail floor before reaching a single artifact. A field trip chaperone asks, sincerely, whether the escalator is also for sale.' }]},

/* ══════════════ THE GIFTED JET ══════════════ */

{ id:'p-jet-arrives', title:'The Gift', who:C.state, min:3, max:30, tags:['diplomacy','money'],
  src:'a luxury aircraft gifted by a foreign government',
  text:'Muriel briefs you gently. “The Crown of Qadira wishes to gift a jet, sir. A retired palace aircraft, ' +
       'four hundred million dollars new. Technically it becomes property of the United States. Informally, everyone involved expects you to fly it personally, forever.”',
  choices:[
    { label:'Accept it. Repaint it. Fly it this weekend.', eff:{base:+8,courts:-5,congress:-4,press:-3,auth:+3},
      res:'The plane is repainted and airborne within a week. A statute concerning gifts from foreign states is read into the record for the first time in living memory.' },
    { label:'Decline. Politely. Publicly. On paper.', eff:{base:-4,press:+5,congress:+5,courts:+2,auth:+1},
      res:'You turn down four hundred million dollars of airplane. It is, by any normal measure, an act of restraint that no one thanks you for and everyone remembers.' },
    { label:'Accept it and route it to a personal foundation.', eff:{base:+6,press:-5,courts:-6,congress:-3,cash:+0.2,auth:+2},
      res:'The jet is legally donated to a foundation that shares your name and, as it happens, your travel schedule. The paperwork is a masterpiece of a very specific kind.' },
    { label:'Accept it, but only for use flying rescue animals.', eff:{base:-3,press:-4,courts:-3,street:+2,auth:-3}, wild:true,
      res:'A four hundred million dollar palace jet is repurposed, once, to fly eleven golden retrievers to a shelter in another state. The optics are inexplicably worse than just keeping it.' }]},

{ id:'p-jet-appraisal', title:'The Appraisal', who:C.ethics, min:4, max:32, tags:['ethics','money'],
  src:'an internal valuation of a foreign gift understating its worth',
  text:'Miriam has two numbers on two pieces of paper. The real appraisal says four hundred million. The one ' +
       'intended for the disclosure form says thirty-nine thousand, “the value of the in-flight snacks,” she notes, “which is the figure I am being asked to sign.”',
  choices:[
    { label:'File the low number. It is technically a document.', eff:{base:+6,press:-5,courts:-5,cash:+0.1,auth:+2},
      res:'The federal gift disclosure lists a four hundred million dollar aircraft at thirty-nine thousand dollars. Miriam signs it, then requests, in writing, that her objection also be filed.' },
    { label:'File the real number. Let the story be the story.', eff:{base:-4,press:+5,courts:+4,congress:+2,auth:+1},
      res:'The true value goes on the record. It is a large, embarrassing, honest number. Honest numbers, it turns out, generate exactly one bad week and then silence.' },
    { label:'Have Miriam reassigned. Find someone who will sign it.', eff:{base:+5,press:-5,courts:-5,congress:-3,auth:+2},
      res:'The ethics office gets a new, more flexible occupant within the month. The old number stays wrong. The new appraiser is, notably, very fast at her job.' },
    { label:'Appraise it yourself, publicly, using a bathroom scale.', eff:{base:+3,press:-4,courts:-3,auth:0}, wild:true,
      res:'You weigh the jet’s wheel assembly on a household scale for the cameras and extrapolate a value live on television. It is deeply unscientific and, alarmingly, closer to correct than the official form.' }]},

{ id:'p-jet-security-review', title:'The Bug Sweep', who:C.gen, min:4, max:30, tags:['security'],
  src:'a gifted foreign aircraft requiring a full counter-surveillance sweep',
  text:'General Tarrant is not smiling, which for him is standard. “We found six listening devices on the ' +
       'Qadiri jet, sir. Standard practice would be to strip the plane down to the frame. Standard practice also assumes you are willing to wait the four months that takes.”',
  choices:[
    { label:'Fly it now. Strip it later. It is basically fine.', eff:{base:+6,congress:-4,courts:-2,street:-2,auth:+3},
      res:'You take off in an aircraft a foreign government could, until recently, listen to in real time. Tarrant requests, formally, that this decision be attributed to you by name in his files.' },
    { label:'Ground it. Full teardown. Four months, no shortcuts.', eff:{base:-3,congress:+4,press:+2,auth:+1},
      res:'The jet sits in a hangar getting carefully disassembled by people with clearances. It is the boring, correct, invisible version of national security.' },
    { label:'Strip the devices yourself and use them on your own staff.', eff:{base:+5,press:-4,courts:-5,congress:-3,street:-2,auth:+2},
      res:'Six confiscated bugs are repurposed for internal use. Deborah finds one in a houseplant. The meeting about the meeting takes considerably longer than the original meeting.' },
    { label:'Donate the swept jet to the Air and Space Museum instead.', eff:{base:-4,press:-3,congress:-4,cash:-0.1,auth:-3}, wild:true,
      res:'A four hundred million dollar aircraft becomes a static exhibit behind a velvet rope, three miles from where you could be flying it. A docent explains the bug sweep to schoolchildren, badly.' }]},

{ id:'p-jet-customs', title:'The Customs Form', who:C.home, min:4, max:28, tags:['money'],
  src:'a foreign gift arriving without conventional import documentation',
  text:'Duane has the manifest, and the “declared value” line is blank. “It landed at a military airfield, sir, ' +
       'which means it never went through the civilian process. I can process it retroactively, which is a phrase I am told exists specifically for situations like this one.”',
  choices:[
    { label:'Backdate the paperwork. Nobody checks military airfields.', eff:{base:+5,press:-3,courts:-4,cash:+0.1,auth:+2},
      res:'A retroactive customs form is generated for an aircraft that landed six weeks ago. It is, technically, paperwork. It is not, in any meaningful sense, a process.' },
    { label:'Route it through the normal civilian process now. Late fee included.', eff:{base:-2,press:+3,courts:+2,cash:-0.1,auth:0},
      res:'The jet is formally declared, weeks late, with a modest penalty attached. It is dull, correct and generates zero follow-up questions, which is the entire goal of paperwork.' },
    { label:'Classify the jet as diplomatic cargo. Permanently.', eff:{base:+4,press:-4,courts:-4,congress:-2,cash:+0.2,auth:+2},
      res:'The aircraft is reclassified as cargo belonging to a mission that does not, technically, own it. The label survives three separate audits by being too strange to question.' },
    { label:'Have Duane personally inspect it, by hand, nose to tail.', eff:{base:-3,press:-3,courts:-4,cash:-0.1,auth:-2}, wild:true,
      res:'Duane spends a full day going through a palace jet’s cabinetry with a flashlight, the way he would a minivan at the border. He finds a bathrobe monogrammed for a country that no longer exists.' }]},

{ id:'p-jet-return-clause', title:'The Fine Print', who:C.state, min:20, max:48, tags:['diplomacy'],
  src:'a reversionary clause returning a foreign gift after the term ends',
  text:'Muriel has finally read the whole gift agreement, all forty pages. “There is a clause, sir, on page ' +
       'thirty-one. The jet reverts to the Crown of Qadira the day you leave office. Not to the government. To them. It was never really a gift to the country.”',
  choices:[
    { label:'Ignore the clause. Possession is nine-tenths of it.', eff:{base:+6,courts:-6,congress:-3,press:-3,auth:+2},
      res:'You announce you will simply keep flying it after the term ends. A kingdom you cannot legally offend without an incident begins, politely, to prepare one.' },
    { label:'Renegotiate the clause now. Transfer to the government outright.', eff:{base:-4,congress:+5,press:+4,courts:+3,auth:+1},
      res:'Muriel spends three months getting the clause struck for real. The plane becomes, boringly and permanently, federal property. It is the single dullest diplomatic win of the year.' },
    { label:'Have the foundation buy the reversion clause out. Quietly.', eff:{base:+5,press:-4,courts:-5,cash:-0.4,auth:+2},
      res:'A private foundation pays the Crown of Qadira to waive its own reversion clause. The jet stays. The foundation’s tax filing becomes, for one line, extraordinarily interesting.' },
    { label:'Announce you will personally fly it back to Qadira yourself, as a gesture.', eff:{base:-3,press:-3,congress:-4,cash:-0.2,auth:-3}, wild:true,
      res:'You fly a four hundred million dollar jet across an ocean to hand-deliver it back a term early, for the optics of the thing. The optics, on landing, are of a man giving away a plane.' }]},

/* ══════════════ THE PARDON MARKET ══════════════ */

{ id:'p-pardon-price-list', title:'The Price List', who:C.ag, min:6, max:48, tags:['courts','money'],
  src:'a fundraising structure with clemency implicitly attached to donation tiers',
  text:'Bo slides over a donor tier sheet that never says the word “pardon” anywhere on it. Bronze, Silver, ' +
       'Gold, Platinum. Platinum donors get a photo, a tour, and a phone call returned within the week. “Nobody wrote it down, sir. Everybody understands it.”',
  choices:[
    { label:'Approve the tiers. Keep the wording vague.', eff:{base:+7,courts:-6,press:-4,cash:+0.4,auth:+3},
      res:'The tier sheet goes out unchanged. Nothing on it is illegal, read narrowly. Everything about it is understood, read at all, and donations triple within the quarter.' },
    { label:'Strip clemency language from all fundraising materials.', eff:{base:-3,courts:+4,press:+3,congress:+2,cash:-0.1,auth:0},
      res:'The implied favor disappears from the paperwork. Donations dip. Bo looks, for the first time in months, like a man who can sleep.' },
    { label:'Add a Diamond tier. Guaranteed call back within 48 hours.', eff:{base:+6,courts:-7,press:-5,cash:+0.5,auth:+3},
      res:'A new top tier promises a specific response time from the Office of the Pardon Attorney, in writing, to donors. This is the sentence that ends up in the indictment, eventually, someone else’s.' },
    { label:'Publish the tier sheet yourself. Full transparency. See what happens.', eff:{base:-4,courts:-4,press:-5,congress:-3,auth:-3}, wild:true,
      res:'You release the actual pricing structure to the public, apparently believing candor will be read as innocence. It is read, instead, as a price list, because it is one.' }]},

{ id:'p-pardon-bundle', title:'The Bundle', who:C.ag, min:10, max:48, tags:['courts','money'],
  src:'clemency issued in a single undifferentiated batch to obscure any individual case',
  text:'Bo has forty-one names on one sheet, no explanations attached to any of them. “Batch them, sir, and ' +
       'nobody has to defend any single pardon on its own merits. Thirty-eight are genuinely sympathetic cases. Three are, frankly, whoever paid for the batch.”',
  choices:[
    { label:'Sign the whole batch. Forty-one names, one signature.', eff:{base:+7,courts:-6,press:-4,cash:+0.3,auth:+3},
      res:'Forty-one clemencies issue at once, and the three indefensible ones travel, invisibly, inside the thirty-eight defensible ones. It is an old trick and it still works.' },
    { label:'Review each case individually. Publish the reasoning.', eff:{base:-4,courts:+5,press:+4,congress:+2,auth:+1},
      res:'Every name gets its own memo, its own logic, its own signature. It takes six weeks longer and survives every question anyone asks about it, because there is an answer to each one.' },
    { label:'Bundle it with a mass commutation to bury it further.', eff:{base:+5,courts:-7,press:-5,street:-2,cash:+0.2,auth:+3},
      res:'You attach the batch to a much larger, genuinely popular clemency initiative. The three problem names ride in under cover of four hundred sympathetic ones.' },
    { label:'Pull the three questionable names out. Deny only those, publicly.', eff:{base:-3,courts:+3,press:-3,congress:-4,auth:-4}, wild:true,
      res:'You single out the three names paying the most and deny them, on principle, in front of cameras. The other thirty-eight sail through. The three donors do not take it well.' }]},

{ id:'p-pardon-walk-back', title:'The Walk-Back', who:C.cj, min:14, max:48, tags:['courts'],
  src:'a court weighing whether a series of clemencies followed a discernible pattern',
  text:'Chief Justice Stone is unusually direct for a woman who spends her life being careful. “The pattern is ' +
       'discoverable, sir. Forty-one names, cross-referenced against donation records, correlate at a rate no statistician would call coincidence. The Court has taken an interest.”',
  choices:[
    { label:'Fight the subpoena. Executive privilege, all the way up.', eff:{base:+6,courts:-8,congress:-4,press:-3,auth:+3},
      res:'You invoke privilege over donation-to-clemency correlation data. The fight goes to the Court that asked the question in the first place, which is rarely a fight you enjoy winning slowly.' },
    { label:'Comply. Hand over the records. Let the chips fall.', eff:{base:-5,courts:+5,congress:+4,press:+3,auth:0},
      res:'The records go over, complete and unredacted. The correlation is exactly as bad as feared and exactly as survivable, because you did not also lie about it.' },
    { label:'“Discover” the records were destroyed in a server migration.', eff:{base:+4,courts:-9,press:-5,street:-2,auth:+2},
      res:'The specific records under subpoena vanish in an IT incident with unusually good timing. The Chief Justice reads the explanation aloud, slowly, in open court, for effect.' },
    { label:'Release every donation record from the entire term, unprompted.', eff:{base:-5,press:-4,congress:-4,street:+2,auth:-4}, wild:true,
      res:'You bury the subpoenaed pattern inside four years of otherwise-unrelated fundraising data. Nobody can find the needle, technically, because you also handed over the entire haystack.' }]},

{ id:'p-pardon-lobbyist', title:'The Fixer', who:C.speaker, min:12, max:48, tags:['congress','money'],
  src:'an outside intermediary charging a fee to route clemency requests to the desk',
  text:'Hal Grimes drops by personally, which never happens for good news. “There is a man, sir, unaffiliated ' +
       'with this administration in any way that would hold up in court, charging two hundred thousand dollars to get a clemency petition read. He is very good at his job. That is the problem.”',
  choices:[
    { label:'Let him operate. He is doing us a service, technically.', eff:{base:+6,courts:-5,press:-4,congress:-3,cash:+0.2,auth:+2},
      res:'An unofficial toll booth operates two blocks from the White House, charging admission to a process that is supposed to be free. Everyone involved maintains, with a straight face, that this is a coincidence.' },
    { label:'Cut him out. Route every petition through the formal office.', eff:{base:-4,courts:+4,congress:+4,press:+3,auth:0},
      res:'The fixer is frozen out and the formal Pardon Attorney’s office, chronically understaffed, gets a modest budget bump instead. It is slower. It is also, finally, actually the process.' },
    { label:'Put him on the payroll. Make it official.', eff:{base:+5,press:-5,courts:-6,congress:-4,cash:-0.2,auth:+2},
      res:'The fixer becomes a consultant with a badge and a government email address. The toll booth now has a title, which somehow makes it both more legal and more damning.' },
    { label:'Have the fixer investigated by his own former clients.', eff:{base:-3,press:-4,courts:-4,congress:-3,auth:-3}, wild:true,
      res:'You quietly encourage three people who paid the fixer and got nothing to file complaints against him. It works. It also generates a paper trail that leads, eventually, straight back to you.' }]},

{ id:'p-pardon-crypto-payment', title:'The Crypto Angle', who:C.ag, min:16, max:48, tags:['courts','money'],
  src:'clemency-adjacent payments routed through a volatile digital asset to obscure the trail',
  text:'Bo has printouts of a wallet address that received, then instantly converted, four million dollars the ' +
       'week before a commutation. “It is untraceable, sir, in the sense that tracing it is merely difficult rather than impossible. A graduate student did it in an afternoon, for a class.”',
  choices:[
    { label:'Nothing to see. The transaction predates the commutation by a week.', eff:{base:+5,courts:-6,press:-5,cash:+0.3,auth:+2},
      res:'You lean on the calendar as your defense. A week, it turns out, is not the gap people assumed it was for innocence, and the graduate student’s homework becomes a news story.' },
    { label:'Refer the wallet to an independent financial crimes unit.', eff:{base:-4,courts:+5,press:+4,congress:+2,auth:0},
      res:'You hand the trail to people whose entire job is following it, and let the process work regardless of where it leads. It leads somewhere. That was, in fact, the point.' },
    { label:'Have the commutation quietly reissued through a cleaner channel.', eff:{base:+4,courts:-6,press:-5,cash:-0.2,auth:+2},
      res:'The same outcome is repapered through a route with no crypto attached to it. The original wallet still exists. It is, memorably, still on the blockchain, forever, for anyone to find.' },
    { label:'Accept the next one in cash, in a paper bag, out of sheer nostalgia.', eff:{base:+3,press:-4,courts:-5,street:-2,auth:0}, wild:true,
      res:'Someone actually shows up with a duffel bag, apparently taking the joke sincerely. Bo does not know whether to laugh or call the Bureau. He calls the Bureau.' }]},

/* ══════════════ THE SPEAKING FEES ══════════════ */

{ id:'p-speaking-fee-invite', title:'The Speaking Fee', who:C.treas, min:2, max:44, tags:['money'],
  src:'an extraordinarily large fee for a single brief address to a foreign business group',
  text:'Lyle has the invitation. A trade association in Rusalka wants forty minutes of remarks. The fee is 2.5 ' +
       'million dollars. “For context, sir, that is roughly what we pay the entire speechwriting office for a year, to write remarks considerably longer than forty minutes.”',
  choices:[
    { label:'Take it. Book three more just like it.', eff:{base:+6,press:-4,congress:-2,cash:+0.5,auth:+2},
      res:'You become, briefly, the highest-paid public speaker on earth, per minute, by a wide margin. Gideon in the speechwriting office asks, not entirely joking, for a raise indexed to your hourly rate.' },
    { label:'Take a token fee. Donate the rest.', eff:{base:-2,press:+4,congress:+2,cash:+0.1,auth:0},
      res:'You accept a modest honorarium and route the balance to a scholarship fund. It is generous, sensible and generates one wire story that nobody reads past the headline.' },
    { label:'Negotiate the fee up. They clearly want something.', eff:{base:+5,press:-4,courts:-3,cash:+0.5,auth:+2},
      res:'You counter at four million and get it. What, specifically, they want becomes a question three journalists start asking at the exact same time, independently.' },
    { label:'Give the speech for free. Insist on it, loudly, repeatedly.', eff:{base:-4,press:-3,congress:-4,cash:-0.1,auth:-3}, wild:true,
      res:'You refuse the fee so emphatically, and mention it so often, that the free speech ends up costing more in goodwill than the paid one would have. Nobody asked you to make it a whole thing.' }]},

{ id:'p-speaking-fee-college-tour', title:'The Campus Tour', who:C.edu, min:6, max:44, tags:['money'],
  src:'a lucrative post-office speaking circuit booked through friendly universities',
  text:'Bernadette has the itinerary. Six universities, six commencement-adjacent speeches, 750,000 dollars ' +
       'each. Three of the six have pending federal research grant applications currently sitting on your desk. “I want to note that for the record, sir, and then I want to move on.”',
  choices:[
    { label:'Book all six. Approve the grants after, not before.', eff:{base:+6,press:-4,courts:-3,congress:-2,cash:+0.5,auth:+2},
      res:'Four and a half million dollars in speaking fees clears before a single grant decision. The sequencing is, Bernadette notes dryly, the entire defense and the entire problem, in one clause.' },
    { label:'Recuse from grant decisions at any school on the circuit.', eff:{base:-3,press:+4,congress:+3,cash:+0.2,auth:0},
      res:'You hand grant decisions for those six schools to career staff and take yourself out of the room. The fees still arrive. The appearance of the thing, mercifully, does not.' },
    { label:'Add a “facilities fee.” Have the university renovate a room in your honor.', eff:{base:+4,press:-4,courts:-2,cash:+0.4,auth:+1},
      res:'Six universities now each have a “Presidential Reading Room,” funded separately from the speaking fee, which is the sort of double-dip that reads badly even when explained slowly.' },
    { label:'Speak for free at the one school with no grant pending.', eff:{base:-3,press:-3,congress:-4,cash:-0.1,auth:-2}, wild:true,
      res:'You single out the only university with nothing to gain and speak there for nothing, apparently to prove a point. The other five schools notice immediately what that implies about them.' }]},

{ id:'p-speaking-fee-ghost-audience', title:'The Empty Room', who:C.press, min:8, max:46, tags:['money','press','levity'],
  src:'a paid address to an audience that turns out to be mostly staff',
  text:'Kaylee has the crowd photos and the ticket sales don’t match. The venue holds four thousand. The paying ' +
       'attendance was around ninety. “The rest, sir, are our own advance team in the seats, arranged to fill the wide shots. The fee cleared before anyone counted heads.”',
  choices:[
    { label:'Release the wide shots. Never the wide shots that show it empty.', eff:{base:+6,press:-6,street:-2,cash:+0.2,auth:+2},
      res:'Every released photo is framed to hide two-thirds of an empty auditorium. It works until someone releases a drone shot, which someone always eventually does.' },
    { label:'Disclose the real number. Note the fee was fixed regardless.', eff:{base:-3,press:+4,congress:+2,cash:+0.1,auth:0},
      res:'You admit ninety people came and the fee was paid anyway, because that was the contract. It is a small, honest, forgettable story, which is the best outcome available.' },
    { label:'Bus in unemployed extras for the next one. Paid, obviously.', eff:{base:+5,press:-7,street:-3,cash:-0.2,auth:+2},
      res:'A casting call for “engaged, photogenic audience members” circulates online within hours, with your event’s name attached. It is not a good look, mostly because it is an extremely specific one.' },
    { label:'Cancel all future paid speeches. Speak only for free, to real rooms.', eff:{base:-5,press:-3,congress:-4,cash:-0.4,auth:-4}, wild:true,
      res:'You walk away from the entire lucrative circuit on principle, mid-tour. It costs a fortune, wins no immediate credit, and is the single most defensible thing on your calendar all year.' }]},

{ id:'p-speaking-fee-family-cut', title:'The Family Cut', who:C.ethics, min:10, max:48, tags:['money','ethics'],
  src:'relatives collecting a percentage of speaking and licensing income as informal agents',
  text:'Miriam has an org chart that should not exist. Every speaking fee, every licensing deal, routes through ' +
       'a family member acting as “agent,” taking fifteen percent off the top. “None of them have agent licenses, sir. None of them need to, legally. That is somehow worse.”',
  choices:[
    { label:'Formalize it. Fifteen percent, in writing, permanently.', eff:{base:+6,press:-5,courts:-4,cash:+0.3,auth:+2},
      res:'The family cut becomes a contract instead of an understanding. It survives every audit because nobody denies it exists anymore. There is nothing left to catch.' },
    { label:'Route deals through an independent agency instead.', eff:{base:-3,press:+4,courts:+3,congress:+2,cash:-0.1,auth:0},
      res:'A real talent agency, with no relation to anyone, handles the bookings. The family loses a revenue stream and gains, Miriam notes, absolutely nothing, which is the correct outcome.' },
    { label:'Raise the family cut to twenty-five percent. They earned it.', eff:{base:+5,press:-5,courts:-4,congress:-2,cash:+0.3,auth:+2},
      res:'The percentage climbs with no additional service rendered to justify it. An accountant, off the record, calls it “the cleanest math in the entire operation.”' },
    { label:'Give the family cut to charity. All of it. Retroactively.', eff:{base:-4,press:-4,courts:-3,cash:-0.4,auth:-3}, wild:true,
      res:'Years of informal agent fees get clawed back and redirected to charity in one dramatic gesture. Several relatives are, by all accounts, furious about this in private and gracious about it on camera.' }]},

/* ══════════════ THE SOVEREIGN FUND ══════════════ */

{ id:'p-sovereign-fund-stake', title:'The Stake', who:C.treas, min:14, max:48, tags:['money','diplomacy'],
  src:'a foreign sovereign wealth fund taking a large equity position in a family business',
  text:'Lyle has the wire confirmation. The Qadiri Sovereign Fund has purchased a two-billion-dollar stake in ' +
       'the family holding company, at a valuation Lyle describes, carefully, as “aspirational.” “It closed in nine days, sir. Deals like this normally take nine months.”',
  choices:[
    { label:'Accept it. Fast-track their trade concessions this quarter.', eff:{base:+7,courts:-5,congress:-4,press:-4,cash:+0.5,auth:+3},
      res:'Two billion dollars lands and a trade concession follows within weeks. Nobody signs a document connecting the two. Everybody, including three foreign desks, connects them anyway.' },
    { label:'Refer the deal to an independent conflicts review first.', eff:{base:-4,courts:+4,congress:+4,press:+3,cash:-0.1,auth:0},
      res:'The stake goes to outside reviewers before anything else moves. It takes months. It is unbelievably dull. It is also the only version of this story that does not end in a hearing.' },
    { label:'Take a second stake from a rival kingdom. Play them off each other.', eff:{base:+6,courts:-6,press:-5,congress:-3,cash:+0.5,auth:+3},
      res:'A second sovereign fund buys in specifically to outbid the first. You now owe favorable treatment to two governments who actively dislike each other, in the same portfolio.' },
    { label:'Return the stake. Convert it into a scholarship fund for their students.', eff:{base:-5,press:-4,congress:-3,cash:-0.4,auth:-4}, wild:true,
      res:'You unwind two billion dollars of equity and redirect it into funding for Qadiri students studying abroad. It is generous, strange, and leaves Lyle explaining a negative line item nobody has ever had to explain before.' }]},

{ id:'p-sovereign-fund-board-seat', title:'The Board Seat', who:C.ethics, min:16, max:48, tags:['money','ethics'],
  src:'a foreign investor granted a governance role in a family enterprise',
  text:'Miriam has the bylaws amendment. The Qadiri Sovereign Fund’s two-billion-dollar stake comes with a ' +
       'board seat, held, on paper, by “a private citizen” who happens to be a cousin of the Crown. “He has never attended a meeting in person, sir. He votes by proxy. He has never once voted against anything.”',
  choices:[
    { label:'Confirm the seat. Give him committee access too.', eff:{base:+6,press:-5,courts:-4,congress:-3,cash:+0.3,auth:+2},
      res:'A foreign royal cousin gains formal governance rights over a company bearing your name. He attends nothing and approves everything, which is, functionally, the entire arrangement working exactly as intended.' },
    { label:'Reject the board seat. Cash stake only, no governance.', eff:{base:-3,press:+4,congress:+3,cash:-0.1,auth:0},
      res:'You take the money and refuse the influence that usually rides along with it. It is a smaller, cleaner deal that nobody covers, because nothing about it is a story.' },
    { label:'Give him a second seat. And a title. “Strategic Adviser.”', eff:{base:+5,press:-5,courts:-5,congress:-3,cash:+0.2,auth:+2},
      res:'The cousin acquires a title, a seat and, functionally, a vote inside decisions that touch actual American policy. Nobody can point to a law he broke. Everybody can point to the org chart.' },
    { label:'Put the seat up for a public vote among company employees instead.', eff:{base:-4,press:-3,congress:-4,cash:-0.2,auth:-3}, wild:true,
      res:'You let two hundred employees elect a random accountant to the seat instead of the royal cousin. It is a genuinely democratic gesture inside a company that is, structurally, nothing of the sort.' }]},

{ id:'p-sovereign-fund-due-diligence', title:'The Vetting', who:C.spy, min:14, max:48, tags:['security','money'],
  src:'an intelligence review of a foreign fund flagged for opaque state ties',
  text:'Errol Hance closes the door before he speaks, which is never a good sign. “The Qadiri Sovereign Fund is ' +
       'nominally independent, sir. Our assessment is that it takes direction from the palace on anything over five hundred million dollars. Your stake is four times that.”',
  choices:[
    { label:'Bury the assessment. The deal already closed.', eff:{base:+6,courts:-5,press:-5,cash:+0.2,auth:+2},
      res:'The classified assessment goes into a drawer instead of a briefing. The deal proceeds as though the palace has no interest in the outcome, which the assessment specifically says it does.' },
    { label:'Brief Congress on the assessment. Full stop.', eff:{base:-4,congress:+5,press:+4,courts:+3,auth:0},
      res:'The findings go to the relevant committees, in full, before anything else happens. It slows the deal considerably and survives every question anyone later asks about it.' },
    { label:'Reclassify the assessment as too sensitive to share, even internally.', eff:{base:+5,press:-5,courts:-6,congress:-4,auth:+2},
      res:'Errol’s own report is stamped above a level he can read himself. He is, on paper, no longer cleared to see the conclusion he wrote, which he finds genuinely funny for about a day.' },
    { label:'Have Errol present the findings directly to the Qadiri ambassador.', eff:{base:-4,press:-4,courts:-3,congress:-3,auth:-3}, wild:true,
      res:'You let the foreign fund’s own government see exactly what the intelligence community thinks of their independence. It is either extremely bold diplomacy or a serious operational error, and nobody in the room can agree which.' }]},

{ id:'p-sovereign-fund-family-hire', title:'The New Hire', who:C.state, min:18, max:48, tags:['diplomacy','money'],
  src:'a family member placed in an advisory role tied to a foreign investment relationship',
  text:'Muriel has the org chart update. A relative, with no diplomatic background, has been named “Special ' +
       'Adviser for Qadiri Relations,” reporting directly to the fund that just invested two billion dollars in the family company. “The salary is confidential, sir. The relationship is not.”',
  choices:[
    { label:'Approve it. Give the title real authority too.', eff:{base:+6,press:-5,courts:-4,congress:-3,cash:+0.2,auth:+2},
      res:'The relative gets sign-off authority on the very relationship funding the family business. Muriel notes, for the file, that this is the single cleanest circle she has ever seen drawn on an org chart.' },
    { label:'Kill the title. Route Qadiri relations through career staff.', eff:{base:-3,press:+4,congress:+3,cash:-0.1,auth:0},
      res:'The relative is quietly uninvolved and a career foreign service officer, who has never met the Crown Prince socially, handles the account instead. It works. It always would have.' },
    { label:'Give two more relatives titles. Spread the load, spread the exposure.', eff:{base:+5,press:-5,courts:-4,congress:-3,cash:+0.2,auth:+2},
      res:'Three family members now hold advisory titles tied to the same foreign investment. An org chart that used to be a joke becomes, technically, a case study.' },
    { label:'Send the relative to Qadira, unpaid, to actually learn the job first.', eff:{base:-3,press:-3,congress:-4,cash:-0.2,auth:-3}, wild:true,
      res:'The relative spends four months as an unpaid junior attache in a foreign ministry, filing actual cables, before touching the account. It is a genuinely useful apprenticeship and a completely unmarketable one.' }]},

{ id:'p-sovereign-fund-clawback', title:'The Clawback', who:C.speaker, min:24, max:48, tags:['congress','money'],
  src:'a legislative push to force divestiture of foreign sovereign holdings in the first family',
  text:'Hal Grimes has the bill, and for once it has bipartisan sponsors, which alarms him more than a ' +
       'party-line vote would. “It would force full divestiture of any sovereign fund stake over one billion dollars, sir. It has the votes. The only question left is whether you fight it or sign it.”',
  choices:[
    { label:'Kill it in committee. Call in every chit you have left.', eff:{base:+6,congress:-7,press:-4,cash:+0.1,auth:+3},
      res:'The bill dies quietly in committee, at real cost, spending nearly every remaining favor in the building. The Qadiri stake survives. So does the story of exactly how it survived.' },
    { label:'Let it pass. Divest. Take the loss.', eff:{base:-5,congress:+6,press:+5,courts:+3,cash:-0.5,auth:0},
      res:'Two billion dollars unwinds, at a real financial loss, because the law says it should. It is the most expensive correct decision of the term, and almost nobody notices it happened at all.' },
    { label:'Veto it. Dare Congress to override.', eff:{base:+5,congress:-8,courts:-3,press:-4,auth:+3},
      res:'You veto a bipartisan divestiture bill over your own family’s holdings. The override vote becomes, instantly, the most closely watched roll call of the year.' },
    { label:'Divest personally, into an even less transparent trust, ahead of the vote.', eff:{base:+3,press:-5,courts:-4,congress:-3,cash:-0.3,auth:0}, wild:true,
      res:'You technically comply with a law that has not passed yet by moving the stake somewhere darker before anyone can vote on where it should go. The bill’s sponsors call this “compliance in bad faith,” and, remarkably, that phrase makes it into the committee report.' }]},

/* ══════════════ THE BALLROOM FOR RENT ══════════════ */

{ id:'p-ballroom-wedding', title:'The Wedding', who:C.cos, min:6, max:48, tags:['money','levity'],
  src:'the new state ballroom rented out for a private, paying event',
  text:'Deborah has a rate card. The new ballroom, built with donor funds “for the nation,” rents for 500,000 ' +
       'dollars a night to private parties. First booking: a hedge fund manager’s daughter’s wedding. “It is not technically illegal, sir. It is, however, a wedding, in the People’s House.”',
  choices:[
    { label:'Book it out for the whole season. Weekends especially.', eff:{base:+6,press:-4,congress:-3,cash:+0.5,auth:+2},
      res:'The ballroom becomes, in effect, the most exclusive event space in the country, and one that happens to sit inside a federal residence. The calendar fills through next spring.' },
    { label:'One wedding only. Proceeds to the historical preservation fund.', eff:{base:-2,press:+4,congress:+2,cash:+0.1,auth:0},
      res:'The room is used once, tastefully, with the money going somewhere defensible. It generates one warm human-interest story instead of a recurring venue controversy.' },
    { label:'Let the groom’s hedge fund co-sponsor the room’s naming rights too.', eff:{base:+5,press:-4,courts:-3,cash:+0.4,auth:+2},
      res:'A ballroom in a federal residence now carries a hedge fund’s name on a small brass plaque near the coat check. The historian resigns again, this time by carrier pigeon, out of pure spite.' },
    { label:'Host the wedding, but require the couple to also host a town hall.', eff:{base:-3,press:-4,congress:-3,cash:-0.1,auth:-2}, wild:true,
      res:'Two hundred wedding guests in formalwear are, mid-reception, asked to sit through forty minutes of constituent questions about infrastructure funding. Nobody involved enjoys this, including you.' }]},

{ id:'p-ballroom-corporate-retreat', title:'The Retreat', who:C.treas, min:8, max:48, tags:['money'],
  src:'a corporate leadership retreat held in a federal venue with regulatory business pending',
  text:'Lyle has the booking request. A defense contractor wants the ballroom for a three-day executive ' +
       'retreat, 1.5 million dollars, cash. The same contractor has a nine-billion-dollar procurement decision sitting on your desk, due the following week.',
  choices:[
    { label:'Book it. Decide the contract the following Monday.', eff:{base:+6,courts:-5,press:-4,congress:-2,cash:+0.5,auth:+2},
      res:'The retreat happens, the check clears, and the contract is awarded five business days later. Lyle notes that the sequence, laid end to end, “does not require imagination to read.”' },
    { label:'Book it. Recuse yourself from the pending contract entirely.', eff:{base:-3,courts:+4,press:+3,cash:+0.2,auth:0},
      res:'The rental fee still comes in, but the procurement decision goes to a deputy with no connection to the booking. It is the version of this story where nothing ties together.' },
    { label:'Waive the rental fee. Take a “consulting fee” instead.', eff:{base:+5,press:-4,courts:-5,cash:+0.3,auth:+2},
      res:'The venue is technically free and a much larger, differently-labeled payment arrives through a separate channel. Renaming the money does not, Lyle points out, rename what it is.' },
    { label:'Award the contract to their competitor instead, out of spite.', eff:{base:-3,press:-3,congress:-4,cash:-0.2,auth:-3}, wild:true,
      res:'You steer nine billion dollars away from the company that just paid for the ballroom, specifically to avoid the appearance of a favor. The optics improve. The actual procurement logic does not.' }]},

{ id:'p-ballroom-foreign-gala', title:'The Foreign Gala', who:C.state, min:10, max:48, tags:['diplomacy','money'],
  src:'a foreign government renting a federal venue to host its own event',
  text:'Muriel has the request from the Qadiri embassy. They would like to rent the ballroom for their national ' +
       'day gala, two million dollars, and would like it understood, gently, that the fee is separate from and unrelated to the pending arms deal.',
  choices:[
    { label:'Approve it. Fast-track the arms deal as a courtesy.', eff:{base:+7,courts:-6,congress:-4,press:-4,cash:+0.5,auth:+3},
      res:'A foreign government pays two million dollars to host a party inside a federal residence, and its arms deal clears the following month. Muriel calls the coincidence “diplomatically inconvenient” in the driest voice available to her.' },
    { label:'Approve the rental. Route the arms deal through normal review.', eff:{base:-3,courts:+4,congress:+3,press:+3,cash:+0.2,auth:0},
      res:'The party happens, the fee is banked, and the arms deal takes the same months-long path every other arms deal takes. Two unrelated events remain, stubbornly, unrelated.' },
    { label:'Let three more kingdoms bid competitively for the date.', eff:{base:+6,courts:-5,press:-5,congress:-3,cash:+0.5,auth:+3},
      res:'Four sovereign governments enter a bidding war over a calendar date in a federal residence. It sets a new price record and a new, considerably lower bar for what that residence is for.' },
    { label:'Require the gala to be open to the public, free, as a condition.', eff:{base:-4,press:-3,congress:-4,cash:-0.4,auth:-3}, wild:true,
      res:'You force a two-million-dollar private gala to also be a free public open house, which nobody involved wants, least of all the security detail managing eleven thousand walk-ins.' }]},

{ id:'p-ballroom-double-booking', title:'The Double Booking', who:C.cos, min:12, max:48, tags:['money','levity'],
  src:'a scheduling conflict between a paying private client and an official state function',
  text:'Deborah has, somehow, booked the ballroom twice for the same Saturday: a state dinner for a visiting ' +
       'head of state, and a paying client’s sweet sixteen. “Both contracts are binding, sir. One of them involves a foreign head of state. The other involves a very determined fifteen-year-old.”',
  choices:[
    { label:'Bump the state dinner. The client paid first.', eff:{base:+4,congress:-5,press:-4,cash:+0.3,auth:+1},
      res:'A visiting head of state is rescheduled to a smaller room down the hall so a sweet sixteen can proceed as booked. Muriel calls it the single worst diplomatic incident of the year that involves a bounce house.' },
    { label:'Bump the client. Refund in full, apologize personally.', eff:{base:-2,press:+3,congress:+2,cash:-0.3,auth:0},
      res:'You call the fifteen-year-old’s parents yourself and eat the refund. It is the correct call and, according to Deborah, the first fully painless decision all quarter.' },
    { label:'Run both events simultaneously. Divide the ballroom with a curtain.', eff:{base:+3,press:-4,congress:-3,cash:+0.1,auth:+1},
      res:'A velvet curtain separates a state dinner from a bounce house rental at a distance of, Alvin measures, eleven feet. The head of state can hear the bounce house. Everyone can hear the head of state.' },
    { label:'Merge them. The head of state is now a guest at the sweet sixteen.', eff:{base:+2,press:-4,congress:-4,street:+2,auth:-2}, wild:true,
      res:'A foreign head of state spends ninety minutes at a fifteen-year-old’s birthday party, by necessity, and is, by all accounts, the best time he has had all trip.' }]},

{ id:'p-ballroom-naming-rights', title:'The Naming Rights', who:C.gov, min:16, max:48, tags:['congress','money'],
  src:'a state government objecting to the commercialization of federal ceremonial space',
  text:'Governor Vasquez-Moore did not request this meeting through normal channels, which is itself a message. ' +
       '“Your ballroom sits on federal land inside my state, sir. You are renting the People’s House like a Sheraton. I intend to say so, on the record, at every opportunity I get.”',
  choices:[
    { label:'Ignore her. It is federal land. Her opinion is noted and irrelevant.', eff:{base:+5,congress:-4,press:-4,street:-2,auth:+2},
      res:'You dismiss a sitting governor’s objection outright. She takes the dismissal, films it, and gets more views from the two-minute clip than the ballroom got bookings that quarter.' },
    { label:'Publish full rental terms and proceeds. Let her see the math.', eff:{base:-3,congress:+3,press:+4,cash:-0.1,auth:0},
      res:'You open the books to a hostile governor rather than fight her on principle. It is unsatisfying and it works, because there is, this once, nothing embarrassing in the ledger.' },
    { label:'Rent the ballroom to her opponent’s campaign for a fundraiser.', eff:{base:+5,press:-5,congress:-4,courts:-2,cash:+0.4,auth:+2},
      res:'You book the room specifically for the governor’s political rival. It is petty, extremely effective, and the kind of pettiness that photographs terribly for everyone involved, including you.' },
    { label:'Invite her to co-host the next gala. Split the proceeds with her state.', eff:{base:-3,press:-3,congress:-4,cash:-0.3,auth:-3}, wild:true,
      res:'You hand a hostile opposition governor half the ballroom’s revenue and her name on the invitation, to disarm her. It works better than anything else on this list and costs you the one thing you actually wanted, which was all the credit.' }]},

/* ══════════════ THE TOKEN ══════════════ */

{ id:'p-token-launch', title:'The Token Launch', who:C.treas, min:8, max:44, tags:['money','levity'],
  src:'a presidential-branded digital token launched days before taking office',
  text:'Lyle explains it twice because he does not fully believe it himself. “$PREZ, sir. A digital token, no ' +
       'product, no company, just the brand. It launched at nothing and is now worth billions on paper. On paper is doing a great deal of work in that sentence.”',
  choices:[
    { label:'Promote it personally. Every rally, every post.', eff:{base:+8,press:-5,street:-2,cash:+0.5,auth:+3},
      res:'You become the single most effective marketing asset a currency with no underlying product has ever had. The market cap climbs on enthusiasm alone, which is, Lyle notes, also how it will fall.' },
    { label:'Say nothing about it publicly. Let it float on its own.', eff:{base:-2,press:+4,congress:+2,cash:+0.1,auth:0},
      res:'You decline to touch the one lever that moves the price most. It costs you nothing to stay quiet and, remarkably, is the first financially literate thing anyone in the building has done all year.' },
    { label:'Time a major policy announcement to spike it, deliberately.', eff:{base:+6,press:-5,courts:-4,cash:+0.5,auth:+2},
      res:'A tariff announcement lands three minutes before a scheduled token unlock. The timing is either an extraordinary coincidence or the least subtle thing you have ever done, and it is not treated as the former.' },
    { label:'Publicly disclose your own holdings and sell them, live, on air.', eff:{base:-5,press:-4,courts:-3,cash:+0.3,auth:-4}, wild:true,
      res:'You liquidate your own stake on camera, out of what you insist is transparency. The price craters within the hour. Fourteen thousand people who bought because you were holding are, for the first time, holding alone.' }]},

{ id:'p-token-pump', title:'The Pump', who:C.press, min:10, max:44, tags:['money','press'],
  src:'a coordinated promotional push ahead of a scheduled token unlock',
  text:'Kaylee has the media schedule. Three interviews, one rally, one late-night call-in, all booked the same ' +
       'week a large tranche of $PREZ unlocks for insiders. “It reads as a coincidence, sir, the way a fire reads as spontaneous combustion. Technically possible. Not the way to bet.”',
  choices:[
    { label:'Keep the schedule. Add a fourth interview.', eff:{base:+7,press:-6,street:-2,cash:+0.4,auth:+2},
      res:'Four appearances in a week move the price exactly as hoped, exactly before the unlock, exactly on schedule. A financial journalist plots it on a chart and the chart does the talking for her.' },
    { label:'Reschedule the media around, not near, the unlock.', eff:{base:-3,press:+4,courts:+2,cash:-0.1,auth:0},
      res:'You separate the calendar from the chart on purpose. It is the least exciting decision available and the only one that survives a later audit intact.' },
    { label:'Have insiders sell into your own hype, quietly, first.', eff:{base:+5,press:-7,courts:-5,cash:+0.5,auth:+2},
      res:'The people closest to you sell into the rally they helped create, before the public gets the same chance. It is the oldest trick in a very old book, run with a new coin.' },
    { label:'Cancel every media appearance that week, unexplained.', eff:{base:-4,press:-5,street:-2,cash:-0.2,auth:-3}, wild:true,
      res:'You go dark for a week for no stated reason, right when the market expected maximum noise. The silence spooks the price worse than the pump would have helped it. Lyle calls this “an accident that looks like integrity.”' }]},

{ id:'p-token-dump', title:'The Dump', who:C.broom, min:12, max:46, tags:['money'],
  src:'a sudden, sharp decline in a branded token wiping out small holders',
  text:'Roscoe has, unusually, put down his clipboard. “$PREZ dropped ninety-one percent in six hours, sir. ' +
       'BROOM does not technically cover cryptocurrency, but I am told this is the largest transfer of wealth from ordinary people to insiders I have personally seen a number for.”',
  choices:[
    { label:'Say nothing. It will recover. It usually does.', eff:{base:+3,press:-5,street:-4,cash:+0.2,auth:+1},
      res:'You wait it out in silence while forty thousand small holders watch their positions evaporate live. It does not recover. Silence, in this instance, is a strategy that only ever benefited one side.' },
    { label:'Issue a plain statement. It was speculative. Losses are real.', eff:{base:-4,press:+4,street:+2,cash:-0.1,auth:0},
      res:'You state the obvious thing nobody wanted stated: that it was a gamble and gambles lose. It is unsatisfying, true, and the only version of events that does not require a follow-up lie.' },
    { label:'Blame a foreign short-seller. Name a country, not a person.', eff:{base:+5,press:-5,street:-3,congress:-2,auth:+2},
      res:'You attribute a ninety-one percent collapse to a foreign conspiracy with no named actor and no evidence. It works on exactly the people who were already holding, and on nobody else.' },
    { label:'Personally reimburse the smallest hundred holders out of pocket.', eff:{base:-4,press:-3,courts:-4,street:+3,cash:-0.4,auth:-3}, wild:true,
      res:'You cut personal checks to a hundred people who lost the least, arbitrarily chosen, while thirty-nine thousand others get nothing. It is generous, tiny, and somehow makes the unfairness more visible, not less.' }]},

{ id:'p-token-lawsuit', title:'The Class Action', who:C.cj, min:16, max:48, tags:['courts','money'],
  src:'a securities lawsuit alleging the token was, functionally, an unregistered offering',
  text:'Chief Justice Stone lays out the theory plainly. “Thirty-one thousand plaintiffs, sir, arguing $PREZ ' +
       'was always a security wearing a costume. The legal question is boring. The evidence, unfortunately for you, is not.”',
  choices:[
    { label:'Fight it. Argue it was always just a joke, a meme.', eff:{base:+5,courts:-6,press:-4,cash:+0.2,auth:+2},
      res:'Your own lawyers argue, under oath, that the thing you sold to forty thousand people for real money was never meant to be taken seriously. It is a defense. It is not a flattering one.' },
    { label:'Settle. Quietly, quickly, before discovery gets interesting.', eff:{base:-4,courts:+4,press:+3,cash:-0.5,auth:0},
      res:'A settlement closes the case before any internal messages become public exhibits. It costs real money and ends, cleanly, a story that discovery would have kept alive for years.' },
    { label:'Countersue the lead plaintiff for defamation.', eff:{base:+4,courts:-7,press:-5,street:-2,cash:-0.1,auth:+2},
      res:'You sue a retired schoolteacher who lost eleven thousand dollars for saying, publicly, what thirty thousand other plaintiffs also allege under oath. The optics of this outlive the lawsuit itself.' },
    { label:'Testify yourself. Live. Under oath. Volunteer for it.', eff:{base:-5,press:-4,courts:-3,cash:-0.2,auth:-4}, wild:true,
      res:'You take the stand voluntarily, against every piece of advice in the building, and answer three hours of questions about a coin with your name on it. Sy calls it “either very brave or the last mistake of the case.”' }]},

{ id:'p-token-relaunch', title:'The Relaunch', who:C.ethics, min:20, max:48, tags:['money','ethics','levity'],
  src:'a rebranded successor token launched after the original collapsed',
  text:'Miriam has the pitch deck, which arrived already printed, as if her objection had been anticipated and ' +
       'pre-dismissed. “$PREZ2, sir. Same team, same wallet addresses in three cases, new logo. I would like it noted that I laughed out loud when I first read the name.”',
  choices:[
    { label:'Launch it. Bigger rollout than the first one.', eff:{base:+7,press:-5,courts:-4,cash:+0.4,auth:+3},
      res:'$PREZ2 launches to more fanfare than the original and, within a month, a nearly identical chart. Thirty thousand people who lost money on the first one buy the second out of what can only be called hope.' },
    { label:'Block the relaunch entirely. No sequel.', eff:{base:-4,press:+5,congress:+3,courts:+2,auth:0},
      res:'You kill the sequel before it ships. It is, by a wide margin, the single most protective thing done for the people who lost money on the original, and it earns you nothing measurable.' },
    { label:'Launch it under a shell brand. Deny any connection publicly.', eff:{base:+5,press:-5,courts:-5,cash:+0.4,auth:+2},
      res:'A new token launches under an unrelated-sounding name, run by three of the same wallets. The denial holds for eleven days, which is exactly as long as it takes someone to check.' },
    { label:'Launch it, but donate one hundred percent of your own cut to the original victims.', eff:{base:-4,press:-4,courts:-3,cash:-0.3,auth:-3}, wild:true,
      res:'A sequel to a coin that already wiped out forty thousand people launches anyway, funding its own predecessor’s victims out of the proceeds. It is either restitution or a second offering, and Miriam is not sure the distinction survives contact with a courtroom.' }]}

);
})();
