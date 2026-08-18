/* ============================================================
   AMERICAN DICTATOR, cards.js
   The crisis deck. See WRITING-GUIDE.md before adding to it.

   SHAPE
   -----
   {
     id     : unique string
     title  : the crisis, 1–4 words, headline voice
     who    : { name, role, sil }   who is standing in front of your desk
     text   : the situation, 2–3 sentences, present tense
     tags   : ['press','courts',...]  for flavour + future filtering
     min/max: month window (inclusive). omit for "any time"
     once   : true (default), never repeats in a run
     req    : optional fn(run) -> bool
     choices: [ { label, eff, res, flag, queue, cost } ]
   }

   EFFECT KEYS: base congress courts press street auth cash
   Positive numbers help you. `cash` is in billions. `cost` locks a
   choice behind a cash amount and spends it automatically.
   ============================================================ */

/* Cast of characters (kept here so names stay consistent) */
AD.CAST = {
  cos:    { name: 'Deborah Krank',      role: 'Chief of Staff',        sil: '🗂' },
  press:  { name: 'Kaylee Bright',      role: 'Press Secretary',       sil: '🎙' },
  ag:     { name: 'Bo Slaughter',       role: 'Attorney General',      sil: '⚖' },
  vp:     { name: 'Chet Danforth',      role: 'Vice President',        sil: '🙂' },
  broom:  { name: 'Roscoe Vandermeer',  role: 'Efficiency Czar, BROOM',sil: '🧹' },
  cj:     { name: 'Winifred Stone',     role: 'Chief Justice',         sil: '👩‍⚖️' },
  speaker:{ name: 'Hal Grimes',         role: 'Speaker of the House',  sil: '🏛' },
  opp:    { name: 'Cordelia Ruiz-Bloom',role: 'Opposition Leader',     sil: '🌊' },
  gen:    { name: 'Mick Tarrant',       role: 'Chairman, Joint Chiefs', sil: '🎖' },
  treas:  { name: 'Lyle Pemberton',     role: 'Treasury Secretary',    sil: '💵' },
  poll:   { name: 'Nadia Fisk',         role: 'Pollster',              sil: '📊' },
  social: { name: 'Brayden',            role: 'Director of Posting',   sil: '📱' },
  state:  { name: 'Muriel Vantz',       role: 'Secretary of State',    sil: '🌐' },
  home:   { name: 'Duane Krisp',        role: 'Homeland Secretary',    sil: '🛂' },
  lawyer: { name: 'Sy Feltman',         role: 'Personal Counsel',      sil: '💼' },
  doc:    { name: 'Ronny Prine',        role: 'Physician to the President', sil: '🩺' },
  usher:  { name: 'Alvin',              role: 'Chief Usher',           sil: '🍔' },
  intern: { name: 'Madison',            role: 'Somebody\'s Niece',     sil: '📎' },

  /* --- expanded cast (packs) --- */
  fbi:    { name: 'Marla Quist',        role: 'Director, Bureau',      sil: '🔍' },
  spy:    { name: 'Errol Hance',        role: 'Director of Intelligence', sil: '🕶' },
  health: { name: 'Wendell Pike',       role: 'Health Secretary',      sil: '💊' },
  edu:    { name: 'Bernadette Ollis',   role: 'Education Secretary',   sil: '🎓' },
  labor:  { name: 'Tony Marchetti',     role: 'Labor Secretary',       sil: '🔧' },
  energy: { name: 'Cassandra Doyle',    role: 'Energy Secretary',      sil: '⛽' },
  vet:    { name: 'Gus Renner',         role: 'Veterans Affairs',      sil: '🎗' },
  amb:    { name: 'Priya Ravenel',      role: 'Ambassador to the UN',  sil: '🕊' },
  gov:    { name: 'Elena Vasquez-Moore',role: 'Governor, Opposition State', sil: '🏔' },
  mayor:  { name: 'Desmond Faulk',      role: 'Mayor of the Capital',  sil: '🌆' },
  pastor: { name: 'Reverend Dale Muncy',role: 'Spiritual Adviser',     sil: '✝' },
  son:    { name: 'Trent Jr.',          role: 'Your Son',              sil: '🕴' },
  girl:   { name: 'Ivy',                role: 'Your Daughter, Senior Adviser', sil: '💎' },
  hist:   { name: 'Dr. Constance Weir', role: 'White House Historian', sil: '📜' },
  writer: { name: 'Gideon Poe',         role: 'Chief Speechwriter',    sil: '✒' },
  photog: { name: 'Renata Silk',        role: 'Official Photographer', sil: '📷' },
  sched:  { name: 'Boyd Hackler',       role: 'Director of Scheduling',sil: '📅' },
  ethics: { name: 'Miriam Applewhite',  role: 'Office of Government Ethics', sil: '📋' },
  fed:    { name: 'Arthur Lindqvist',   role: 'Chair, Federal Reserve',sil: '🏦' },
  nasa:   { name: 'Dr. Yuki Brennan',   role: 'Administrator, Space Agency', sil: '🚀' }
};

const C = AD.CAST;

AD.CARDS = [

/* ══════════════ ACT ONE, THE HONEYMOON (months 1–12) ══════════════ */

{
  id: 'crowd-size', src:"disputed inauguration crowd size", title: 'The Numbers', who: C.press, min: 1, max: 3,
  tags: ['press','vanity'],
  text: 'The aerial photographs of the inauguration are out. The crowd is real, it is enthusiastic, ' +
        'and it is roughly the size of a regional dog show. The Beacon has published both photos side by side.',
  choices: [
    { label: 'Send Kaylee out to say it was the largest ever. Period.',
      eff:{base: +7,press: -8,auth: +2},
      res: 'She says it with her whole chest. Nobody believes her. Everybody notices that she said it anyway, which was the point.' },
    { label: '"Crowds are a media obsession. Next question."',
      eff:{base: -2,press: +3},
      res: 'The story dies in forty minutes. Something in you dies with it.' },
    { label: 'Order the Park Service to release "corrected" figures.',
      eff:{base: +4,press: -6,courts: -4,auth: +4},
      res: 'A career photo archivist is reassigned to a windowless room in Suitland. The number is now 1.9 million. It is written down. It is official.' }
  ,
    { label:'Release a photograph of a completely different, larger crowd.', eff:{base:+2,press:-9,street:-3,auth:+1}, wild:true,
      res:'It is the 1998 championship parade of a basketball team. Nine people notice. It stays in the official record for four years.' }]
},

{
  id: 'day-one-binder', src:"high-volume day-one executive orders", title: 'The Binder', who: C.cos, min: 1, max: 4,
  tags: ['power','courts'],
  text: 'Deborah sets down a three-ring binder the size of a paving slab. "Two hundred and eleven executive orders, ' +
        'pre-drafted by people you have never met, from an institute you have never visited. They\'d like them all by Friday."',
  choices: [
    { label: 'Sign every one of them on live television.',
      eff:{base: +9,courts: -11,press: -3,auth: +6},breaks:'vesting',
      res: 'You sign for ninety minutes. Forty-one are enjoined by Monday. Seventeen were not, and those seventeen are the whole ballgame.' },
    { label: 'Sign the popular forty. Table the rest.',
      eff:{base: +3,courts: -3,congress: +2,auth: +2},
      res: 'A restrained start. The institute sends a note describing you as "promising."' },
    { label: '"Who wrote these? Get them in here. I want the ones they were embarrassed to include."',
      eff:{base: +5,courts: -7,press: -4,auth: +7,cash: -0.1},
      res: 'There is a second binder. It is thinner and much worse. You take that one.' }
  ,
    { label:'Sign them in random order, live, unread, as a charity fundraiser.', eff:{base:+3,courts:-8,press:-4,auth:+2,cash:+0.2}, wild:true,
      res:'You raise $2.1 million for a children\'s hospital and accidentally abolish the Bureau of Land Management for nine days.' }]
},

{
  id: 'clemency-cannon', src:"mass clemency for rioters", title: 'The Clemency Cannon', who: C.ag, min: 1, max: 6,
  tags: ['justice','base'],
  text: 'Bo Slaughter has a list of roughly fifteen hundred people convicted of storming a federal building on your behalf. ' +
        '"Sir, they were, in a legal sense, guilty. In a political sense they are your most reliable voters."',
  choices: [
    { label: 'Pardon all fifteen hundred. Before lunch.',
      eff:{base: +12,courts: -9,press:-4,street: -8,auth: +7},
      res: 'Prison doors open on split-screen cable. A man in a horned helmet gives an interview from an Applebee\'s. Your base has never loved you more.' },
    { label: 'Pardon the nonviolent ones. Commute the rest.',
      eff:{base: +5,courts: -3,press:+3,street: -2,auth: +3},
      res: 'Lawyerly. Defensible. Nobody makes a T-shirt about it.' },
    { label: 'Pardon them and invite the ringleaders to a state dinner.',
      eff:{base: +12,courts: -11,press:-5,street: -11,auth: +9},
      res: 'The seating chart leaks. Two ambassadors develop sudden flu. The photographs will outlive everyone in them.' }
  ,
    { label:'Pardon them alphabetically. Stop at G. Promise the rest next year.', eff:{base:+2,courts:-6,press:-6,street:-6,auth:+4}, wild:true,
      res:'Four hundred people go free and eleven hundred wait by a phone. You have applied the subscription model to clemency.' }]
},

{
  id: 'ig-purge', src:"removal of 17 inspectors general without notice", title: 'Seventeen Watchdogs', who: C.cos, min: 2, max: 12,
  tags: ['power','courts'],
  text: '"Seventeen inspectors general. Their entire job is writing reports about what we did. ' +
        'Statute says we give Congress thirty days\' notice before removing one." She pauses. "The statute does not say what happens if we don\'t."',
  choices: [
    { label: 'Fire all seventeen tonight. By email.',
      eff:{congress: -7,courts: -8,press: -5,auth: +8},
      res: 'A judge later rules it unlawful and declines to reinstate anyone, reasoning that you would simply fire them again correctly. She is right.', flag: 'igPurge' },
    { label: 'Give the thirty days. Then fire all seventeen.',
      eff:{congress: -3,courts: -2,press: -3,auth: +5},
      res: 'The paperwork is immaculate. The outcome is identical. Deborah looks at you with something like respect.', flag: 'igPurge' },
    { label: 'Keep them. Starve their budgets instead.',
      eff:{congress: +2,press: +1,auth: +3},
      res: 'Their reports now arrive eleven months late, in black and white, unbound. Nobody reads them.' }
  ,
    { label:'Keep all seventeen. Have them investigate each other.', eff:{base:-3,congress:+1,courts:+1,press:-1,street:-2,auth:+4}, wild:true,
      res:'Seventeen watchdogs, seventeen investigations, zero reports about you. They are still going. It is the most elegant thing you never planned.' }]
},

{
  id: 'broom-founded', src:"creation of a government efficiency body under a billionaire", title: 'A Man With A Sink', who: C.broom, min: 2, max: 10,
  tags: ['agencies','money'],
  text: 'The richest man alive has walked into the Cabinet Room carrying a kitchen sink, for reasons he considers self-explanatory. ' +
        'He wants an agency. He wants it named BROOM. He wants root access to the Treasury payment system.',
  choices: [
    { label: 'Give him everything. Watch what happens.',
      eff:{base: +7,congress: -6,courts: -8,press: -5,cash: +0.6,auth: +7},
      res: 'Within a week four agencies no longer exist and one of them was in charge of tracking bird flu. He posts a graph about it.', flag: 'broom' },
    { label: 'Give him a title and a badge. No system access.',
      eff:{base: +3,courts: -2,cash: +0.2,auth: +2},
      res: 'He is furious in a way that generates 4 billion impressions, which is its own kind of policy.', flag: 'broom' },
    { label: '"There\'s one President. Take the sink and go."',
      eff:{base: -7,press: +5,courts: +4,cash: -0.4},
      res: 'He buys a competing political movement by Thursday. You have made an expensive enemy with unlimited free time.' }
  ,
    { label:'Give him the sink back. Keep the sink budget.', eff:{base:+1,press:-3,street:-3,auth:+1,cash:+0.3}, wild:true,
      res:'He leaves with the sink and without an agency. Nobody in the room can explain afterwards what was decided, including you.' }]
},

{
  id: 'confuffle', src:"the covfefe post", title: 'Confuffle', who: C.social, min: 1, max: 40,
  tags: ['gaffe','press'],
  text: 'At 3:47am you posted the word "confuffle" and then went to sleep. It has been retweeted 900,000 times. ' +
        'The Beacon has a linguist on retainer. Northmark\'s foreign ministry has requested clarification.',
  choices: [
    { label: '"Who can figure out the true meaning of confuffle? Enjoy!"',
      eff:{base: +8,press: -2,auth: +1},
      res: 'You have created a word. It enters two dictionaries as "a deliberate ambiguity deployed to change the subject." Honestly? Useful.' },
    { label: 'Delete it. Deny it. Blame a staffer.',
      eff:{base: -3,press: +2,auth: -1},
      res: 'The staffer is 24 and did not do it. She now has a book deal.' },
    { label: 'Make "confuffle" the official codeword for a nuclear stand-down.',
      eff:{base: +5,press: -4,street: -3,auth: +3},
      res: 'The Joint Chiefs comply, because at no point in the chain of command is anybody empowered to say "no, that\'s silly."' }
  ,
    { label:'Announce that confuffle is now the official name of Wednesday.', eff:{base:+3,press:-4,street:-3,auth:+2}, wild:true,
      res:'Four federal agencies update their scheduling software. A payroll system in Ohio fails for eleven hours. Wednesday is fine.' }]
},

{
  id: 'ocean-rename', src:"renaming a body of water by executive order", title: 'Cartography', who: C.state, min: 2, max: 30,
  tags: ['vanity','press'],
  text: '"You asked me to look into renaming the Atlantic Ocean the Freedom Ocean. I did look into it. ' +
        'We can rename it on our maps. We cannot rename it on anybody else\'s maps. The ocean will not be informed."',
  choices: [
    { label: 'Do it. Every federal map. Immediately.',
      eff:{base: +7,press: -5,street: -2,auth: +4},
      res: 'It costs $40 million and achieves nothing measurable, which makes it the purest expression of executive power yet attempted.', flag: 'ocean' },
    { label: 'Drop it. There are actual oceans of problems.',
      eff:{base: -3,press: +3},
      res: 'Brayden calls this "the single worst decision of the administration so far." He is nineteen.' },
    { label: 'Rename it AND require news outlets to use the new name for press access.',
      eff:{base: +8,press: -12,courts: -5,auth: +8},
      res: 'One wire service refuses. You bar them from the building. Sixty other outlets watch this happen and quietly update their style guides.', flag: 'ocean' }
  ,
    { label:'Rename it after your mother instead. Nobody can object to that.', eff:{base:+2,press:-3,street:-2,auth:+2}, wild:true,
      res:'Nobody objects. It is genuinely touching. Cartographers worldwide comply out of sheer confusion and it is on maps for a decade.' }]
},

{
  id: 'wire-service', src:"wire service barred from White House spaces over style guide", title: 'The Wire Service', who: C.press, min: 4, max: 34,
  tags: ['press'], req: r => r.flags.ocean,
  text: 'The wire service you barred has won a preliminary injunction. A judge, one of yours, appointed by you, ' +
        'confirmed by your Senate, has ordered you to let them back in the room.',
  choices: [
    { label: 'Comply. Then abolish the permanent wire slot entirely.',
      eff:{press: -9,courts: +5,auth: +6},
      res: 'You obeyed the order and destroyed the thing the order protected. Deborah writes the word "elegant" on a napkin and eats it.' },
    { label: 'Comply fully. Sulk visibly.',
      eff:{press: +6,courts: +6,base: -4,auth: -2},
      res: 'The system worked. Somebody should tell the system that this is not a compliment.' },
    { label: 'Appeal. Keep them out during the appeal. Appeal the appeal.',
      eff:{press: -6,courts: -6,base: +4,auth: +5},breaks:'speech',
      res: 'Two years of litigation later the question is moot because the wire service has been sold to a hedge fund that also owns a shipping port.' }
  ,
    { label:'Comply, and seat them in a beanbag.', eff:{base:+2,courts:+2,press:-7,auth:+2}, wild:true,
      res:'The order is obeyed to the letter. A senior correspondent files from six inches off the floor for eleven months and wins an award for it.' }]
},

{
  id: 'enemy-of-people', src:"enemy of the American people", title: 'Enemies List', who: C.social, min: 1, max: 44,
  tags: ['press','rhetoric'],
  text: 'Brayden has drafted a post calling four named newsrooms "the true enemies of the American People." ' +
        'He is very proud of the capitalisation.',
  choices: [
    { label: 'Post it. Add a fifth outlet for fun.',
      eff:{base: +9,press: -10,street: -4,auth: +4},
      res: 'Circulation at all five spikes 30%. Their reporters now receive threats at home. Both of these things are now permanent features of American life.' },
    { label: 'Soften it to "some of the media." Post it.',
      eff:{base: +4,press: -3,auth: +2},
      res: 'A hedge that fools nobody and costs nothing. The professional\'s choice.' },
    { label: 'Delete it. Call an editor. Be charming instead.',
      eff:{base: -5,press: +9,auth: -2},
      res: 'The coverage improves for eleven days. Brayden looks at you the way a dog looks at a closed door.' }
  ,
    { label:'Post a five-star review of one of them instead.', eff:{base:-4,press:+2,street:+1,auth:-1}, wild:true,
      res:'Four words of unexpected praise cause more institutional confusion in that newsroom than four years of attacks.' }]
},

{
  id: 'hamberders', src:"the hamberders fast-food event", title: 'HAMBERDERS', who: C.usher, min: 1, max: 44,
  tags: ['gaffe','levity'],
  text: 'You have hosted a championship college team and served them 1,000 fast-food burgers under gold candelabras. ' +
        'You then posted about the "hamberders." The typo is now merchandise.',
  choices: [
    { label: 'Lean in. Sell official Hamberder hats.',
      eff:{base: +8,press: +2,cash: +0.2,auth: +1},
      res: 'You clear $18 million in ninety days. Historians will note this as the moment the presidency and the gift shop formally merged.' },
    { label: 'Quietly correct the spelling.',
      eff:{base: -2,press: +2},
      res: 'The internet screenshots the original within four seconds, as the internet does.' },
    { label: '"It\'s spelled how I spelled it." Direct the Style Manual to add it.',
      eff:{base: +6,press: -4,auth: +3},
      res: 'The Government Publishing Office adds "hamberder" as an accepted variant. A copy editor resigns after 31 years.' }
  ,
    { label:'Declare the hamberder a protected regional food.', eff:{base:+3,press:-3,street:-2,auth:+2,cash:+0.1}, wild:true,
      res:'A federal designation normally reserved for cheeses. Two counties file competing origin claims and the dispute lasts nine years.' }]
},

{
  id: 'schedule-q', src:"Schedule F civil-service reclassification", title: 'Schedule Q', who: C.cos, min: 4, max: 26,
  tags: ['agencies','power'],
  text: '"Two million civil servants have job protections. We can reclassify the policy-adjacent ones into a new category ' +
        'where they serve at pleasure. Yours. The category is currently unnamed."',
  choices: [
    { label: 'Call it Schedule Q. Reclassify 50,000.',
      eff:{congress: -5,courts: -7,press: -5,street: -5,auth: +9},
      res: 'The people who write the rules now work for the man the rules are about. Nothing else you do this term will matter as much.', flag: 'scheduleQ' },
    { label: 'Reclassify 4,000. The senior ones only.',
      eff:{congress: -2,courts: -3,street: -2,auth: +5},
      res: 'Surgical. Deniable. Almost as effective and one-twelfth as litigated.', flag: 'scheduleQ' },
    { label: 'Leave the civil service alone. Hire loyalists on top of it.',
      eff:{congress: +3,courts: +2,street: +2,auth: +1},
      res: 'You now have two governments in the same building, and the older one knows where everything is.' }
  ,
    { label:'Reclassify only the people who own boats.', eff:{base:+2,congress:-4,press:-4,auth:+2}, wild:true,
      res:'Eleven hundred federal employees are reassigned on the basis of marina records. Nobody successfully challenges the criteria because nobody can believe them.' }]
},

{
  id: 'sharpie', src:"altered hurricane forecast map", title: 'The Marker', who: C.press, min: 3, max: 44,
  tags: ['gaffe','press'],
  text: 'You told the nation that Hurricane Delores would hit the state of Kansaw. It will not. ' +
        'The official forecast map is on the podium in nine minutes and the state of Kansaw is not on it.',
  choices: [
    { label: 'Extend the cone with a marker. Present it as-is.',
      eff:{base: +6,press: -8,street: -4,auth: +3},
      res: 'The loop of black ink is visible from the back row. The National Weather Service is instructed to issue a supportive statement. It does. That is the part that matters.' },
    { label: '"I said Kansaw. I meant the general vicinity of Kansaw."',
      eff:{base: +2,press: -3,auth: +1},
      res: 'Vicinity does a great deal of work in this sentence and is not paid for it.' },
    { label: 'Correct yourself cleanly at the top of the briefing.',
      eff:{base: -4,press: +7,street: +3,auth: -2},
      res: 'You are praised for eleven minutes. Your base spends those eleven minutes wondering who got to you.' }
  ,
    { label:'Draw a smiling face on the hurricane.', eff:{base:+3,press:-5,street:-1}, wild:true,
      res:'The National Hurricane Center\'s official product now has a smiling face on it. Preparedness engagement rises 31%. It is, accidentally, the best public safety decision of the year.' }]
},

{
  id: 'stable-genius', src:"a very stable genius", title: 'A Very Stable Genius', who: C.doc, min: 2, max: 44,
  tags: ['gaffe','levity'],
  text: 'A book claims aides consider you erratic. You have asked Rear Admiral Prine to release a statement about your cognition. ' +
        'He would like to know how enthusiastic the statement should be.',
  choices: [
    { label: '"Say I\'m a very stable genius. Use those words."',
      eff:{base: +7,press:-5,auth: +2},
      res: 'The phrase becomes a permanent unit of American irony. You will hear it at your own funeral.' },
    { label: 'Release actual, boring medical results.',
      eff:{base: -1,press: +5},
      res: 'Your cholesterol becomes a two-day news cycle. It is, at least, a two-day news cycle about cholesterol.' },
    { label: 'Have him say you scored "the highest ever recorded" on a cognitive test.',
      eff:{base: +5,press:-4,auth: +2},
      res: 'You describe the test at length. It involves identifying an elephant. You describe this as difficult.' }
  ,
    { label:'Release a statement from the dog instead.', eff:{base:+3,press:-2,street:-1}, wild:true,
      res:'A one-paragraph statement of confidence in your cognition, signed with a paw print. It is the most-shared White House release in four decades.' }]
},

{
  id: 'paper-towels', src:"paper towels thrown at a disaster relief event", title: 'Relief Efforts', who: C.cos, min: 3, max: 44,
  tags: ['gaffe','street'],
  text: 'You are at a disaster relief centre in a territory that has lost power for six weeks. ' +
        'There is a crowd, a stack of paper towel rolls, and a bank of cameras. Nobody has told you what to do with your hands.',
  choices: [
    { label: 'Throw the paper towels into the crowd. Like a jump shot.',
      eff:{base: +2,press:-4,street: -8},
      res: 'The footage is fourteen seconds long and will be played at every subsequent hurricane for the rest of your life.' },
    { label: 'Hand them out. One at a time. Shake hands.',
      eff:{base: +2,press: +5,street: +6},
      res: 'Boring, decent, and entirely absent from the evening broadcast, which leads with the death toll.' },
    { label: 'Dispute the death toll from the podium.',
      eff:{press:-5,street: -10,auth: +2},
      res: 'Three thousand people are reduced to a rhetorical position. The territory does not forget. Neither does the census.' }
  ,
    { label:'Stay and unload trucks for six hours. Tell nobody.', eff:{base:+1,congress:+2,street:+1,auth:-2}, wild:true,
      res:'No cameras, no statement, six hours. It leaks eleven days later from a volunteer\'s phone and is worth more than every speech that year.' }]
},

{
  id: 'dog', title: 'The First Dog', who: C.intern, min: 2, max: 44,
  tags: ['levity'],
  text: 'Every president since Hoover has had a dog. You have never had a dog. A donor has sent a dog. ' +
        'It is enormous, it is in the Blue Room, and it has already made a decision about the Blue Room.',
  choices: [
    { label: 'Keep it. Name it after yourself. Give it a security detail.',
      eff:{base: +6,press: +4,street: +3,cash: -0.1,auth: +1},
      res: 'The dog polls at 71% approval, which is 71% approval, which is more than you.' },
    { label: 'Return the dog. You are allergic to obligations.',
      eff:{base: -4,press: -3},
      res: 'The photograph of the dog being loaded into a van runs above the fold. It is the single most damaging image of your presidency to date.' },
    { label: 'Give the dog a federal appointment.',
      eff:{base: +8,press: +2,congress: -4,courts: -3,auth: +3},
      res: 'The dog is confirmed 61–39. Six senators vote yes to make a point about the process. The point is not received.' }
  ,
    { label:'Appoint the dog to the Cabinet. Give it a portfolio.', eff:{base:+4,congress:-8,courts:-6,press:+2,auth:+3}, wild:true,
      res:'Secretary of Morale. It attends four meetings, sleeps through all of them, and polls higher than every other Secretary combined.' }]
},

/* ══════════════ ACT TWO, THE MACHINERY (months 8–30) ══════════════ */

{
  id: 'birthright', src:"executive order seeking to end birthright citizenship", title: 'The Fourteenth', who: C.ag, min: 5, max: 22,
  tags: ['courts','immigration'],
  text: '"You want to end birthright citizenship by executive order. The relevant text is one sentence long, it is in the ' +
        'Constitution, and it has meant the same thing since 1868." He sets down the pen. "I\'ll draft whatever you want."',
  choices: [
    { label: 'Sign it. Make them litigate for two years.',
      eff:{base: +10,courts: -13,press: -5,street: -7,auth: +8},breaks:'citizenship',
      res: 'It is enjoined within seventy-two hours. It is also, for those seventy-two hours, the law, and several hospitals act accordingly. That precedent is now sitting there.', flag: 'birthright' },
    { label: 'Send it to Congress as a constitutional amendment.',
      eff:{base: +4,congress: -3,courts: +6,press: +3,auth: +1},
      res: 'It dies in committee, which is where amendments go when somebody wants to be seen trying.' },
    { label: 'Don\'t sign. Direct agencies to slow-walk documentation instead.',
      eff:{base: +5,courts: -4,press: -3,street: -5,auth: +6},breaks:'citizenship',
      res: 'No order, no lawsuit, no headline. Just a queue that never moves. This works better and nobody can photograph it.' }
  ,
    { label:'Sign it in crayon so it can later be argued it was not serious.', eff:{base:+1,courts:-9,press:-8,auth:+4}, wild:true,
      res:'The crayon defence is raised in oral argument. The Chief Justice asks whether the President intended the order to be binding. Your counsel says \'partially.\'' }]
},

{
  id: 'tranquility', src:"Alien Enemies Act removals to a foreign mega-prison", title: 'The Tranquility Center', who: C.home, min: 8, max: 30,
  tags: ['immigration','courts'],
  text: 'Panama has offered you space in a prison it describes as a "counter-terror confinement mega-facility." ' +
        'Duane wants to use a 1798 wartime statute to fly people there without individual hearings. "It\'s never been repealed, sir."',
  choices: [
    { label: 'Fill the planes. Tonight.',
      eff:{base: +10,courts: -12,press:-5,street: -9,auth: +10},breaks:'dueprocess',
      res: 'A judge orders the planes turned around. They are already over water. Nobody turns them around. A line has been crossed and it turns out the line was made of paper.', flag: 'tranquility' },
    { label: 'Use it, but give everyone a five-minute hearing first.',
      eff:{base: +7,courts: -5,press:-4,street: -5,auth: +6},
      res: 'Five minutes is enough time to establish a name. It is not enough time to establish anything else. That is the design.', flag: 'tranquility' },
    { label: 'Too far. Deport through the normal courts.',
      eff:{base: -8,courts: +8,press: +5,street: +4,auth: -3},
      res: 'The normal courts have a four-year backlog. Your base reads this as weakness, and to be fair, it is a backlog.' }
  ,
    { label:'Send the planes empty as a test. See who complains.', eff:{base:-6,courts:+1,street:+1,auth:+2}, wild:true,
      res:'Four aircraft fly to Panama carrying nobody. It costs $9 million and reveals exactly which officials were willing to help, which was the intelligence you actually needed.' }]
},

{
  id: 'admin-error', src:"wrongful removal described as an administrative error", title: 'An Administrative Error', who: C.ag, min: 10, max: 36,
  tags: ['courts','immigration'], req: r => r.flags.tranquility,
  text: '"We sent a man with a standing court order protecting him to the Tranquility Center. There is no dispute about this. ' +
        'We have called it an administrative error in a filing. The Supreme Court has unanimously ordered us to facilitate his return."',
  choices: [
    { label: '"Facilitate" is a big word. Facilitate very slowly.',
      eff:{courts: -10,press:-4,base: +4,street: -6,auth: +9},breaks:'judicial',
      res: 'Months of hearings about the meaning of one verb. He comes back eventually. The precedent, that "eventually" is an acceptable answer to the Supreme Court, does not go back.' },
    { label: 'Fly him home this week. Apologise in writing.',
      eff:{courts: +11,press: +7,street: +6,base: -9,auth: -4},
      res: 'The rule of law survives the week. Three cable hosts describe you as broken. Both assessments are correct.' },
    { label: 'Argue that no court can order the President to do anything abroad.',
      eff:{courts: -14,press:-5,base: +8,street: -4,auth: +12},breaks:'judicial',
      res: 'A justice writes in dissent that under your theory the government could deport anyone, including citizens, without consequence. Your lawyers decline to say she is wrong.' }
  ,
    { label:'Blame an intern who does not exist. Give him a name.', eff:{base:+2,courts:-9,press:-9,auth:+3}, wild:true,
      res:'\'Kevin\' is cited in nine filings over two years. A journalist eventually establishes that Kevin has no personnel file, no badge and no birth certificate.' }]
},

{
  id: 'liberation-tariffs', src:"sweeping Liberation Day tariffs", title: 'Liberation Day', who: C.treas, min: 8, max: 30,
  tags: ['economy'],
  text: 'Lyle has three charts. "Universal tariffs on everyone, including two uninhabited islands populated entirely by penguins. ' +
        'The statute you\'d use has never been read this way. The markets have not priced this in because nobody thought it was possible."',
  choices: [
    { label: 'All of it. Announce it in the Rose Garden with a giant poster.',
      eff:{base: +10,congress: -8,press: -5,street: -8,cash: -0.5,auth: +7},breaks:'vesting',
      res: 'Six trillion dollars evaporates in four days. You describe this as a "very necessary operation," which is what surgeons say before things go badly.', flag: 'tariffs' },
    { label: 'Tariff one rival. Threaten everyone else.',
      eff:{base: +6,congress: -3,street: -3,auth: +4},
      res: 'The threat does more work than the tariff. Deborah notes this, files it, and never lets you forget it.', flag: 'tariffs' },
    { label: 'Cancel. Let Lyle take the blame for the leak.',
      eff:{base: -6,press: +4,street: +5,congress: +4},
      res: 'Lyle is on television within the hour explaining that he misunderstood his own charts. He does this well. He has done it before.' }
  ,
    { label:'Tariff only the penguin islands. Nothing else.', eff:{base:+2,congress:+1,press:-2,street:-2,auth:+1}, wild:true,
      res:'A 10% duty on the exports of an uninhabited territory. It costs nothing, harms nobody, and is quoted in economics lectures for thirty years as the most rational trade policy of the era.' }]
},

{
  id: 'market-crash', src:"12.4% market fall following tariffs", title: 'The Number Went Down', who: C.treas, min: 9, max: 34,
  tags: ['economy'], req: r => r.flags.tariffs,
  text: 'The market is down 12% in a week, the worst since the pandemic. Four donors have called. ' +
        'One of them cried. Lyle is holding a printed sheet that he keeps turning over as if the other side will be different.',
  choices: [
    { label: 'Pause for 90 days. Call it a strategic pause you always planned.',
      eff:{base: +4,street: +6,press:+3,congress: +4,auth: +2},
      res: 'The market rips upward 9% in an afternoon. Several people who knew about the pause forty minutes early are now considerably richer.' },
    { label: 'Hold the line. "This is medicine."',
      eff:{base: +7,street: -10,congress: -7,press:-5,auth: +5},
      res: 'Retirement accounts across the country take the hit. Your approval among people over 60 does something that pollsters describe as "a cliff."' },
    { label: 'Pause the tariffs and buy the dip personally.',
      eff:{base: +1,street: +4,press:-4,courts: -4,cash: +1.1,auth: +3},
      res: 'Your net worth increases by an amount that would fund a mid-sized federal agency. Two ethics offices open inquiries. Neither has a budget.' }
  ,
    { label:'Close the market. Just for a bit. Until it calms down.', eff:{base:+1,congress:-9,press:-8,street:-12,auth:+5}, wild:true,
      res:'You cannot close the market. Four people explain this to you in sequence, each more senior than the last.' }]
},

{
  id: 'prez-coin', src:"presidential memecoin and holder dinner", title: '$PREZ', who: C.lawyer, min: 5, max: 40,
  tags: ['money','corruption'],
  text: 'Sy has a deck. "A memecoin. Your face. Launched three days before the inauguration. ' +
        'You take a cut of every transaction. Legally it\'s a collectible, which is to say legally it is nothing at all."',
  choices: [
    { label: 'Launch it. Dinner for the top 220 holders.',
      eff:{base: +4,press:-5,courts: -6,congress: -5,cash: +1.4,auth: +5},
      res: 'It peaks at a $15 billion valuation and falls 97%. You made money on issuance regardless. Somebody in Ohio did not.', flag: 'coin' },
    { label: 'Launch it. No dinner. Nothing that looks like access.',
      eff:{base: +4,press:-4,courts: -2,cash: +0.9,auth: +3},
      res: 'The absence of a dinner is noted approvingly by exactly one columnist and nobody else on Earth.', flag: 'coin' },
    { label: 'Kill it. The presidency isn\'t a store.',
      eff:{press: +7,courts: +5,congress: +4,base: -3,cash: -0.2},
      res: 'Sy stares at you. "Sir. Respectfully. It is absolutely a store." He is not wrong, he is just early.' }
  ,
    { label:'Launch a second coin that shorts the first coin.', eff:{base:+1,courts:-6,press:-8,auth:+2,cash:+0.9}, wild:true,
      res:'You are on both sides of the trade. It is not illegal because no statute anticipated a president doing it. You clear $700 million and two regulators resign.' }]
},

{
  id: 'qadira-jet', src:"gifted foreign aircraft for use as Air Force One", title: 'The Gift', who: C.state, min: 10, max: 40,
  tags: ['money','foreign'],
  text: 'The Sultanate of Qatar would like to give you a $400 million aircraft to use as Air Force One. ' +
        'Muriel is choosing her words. "Sir, the Emoluments Clause is quite short. That\'s the problem with it. It\'s hard to misread."',
  choices: [
    { label: 'Accept. Donate it to my future library when I leave.',
      eff:{base: +3,press:-4,congress: -7,courts: -6,cash: +0.4,auth: +6},breaks:'emoluments',
      res: 'The retrofit costs the taxpayer more than a new plane. It is described in every filing as a gift. Nobody can quite explain to whom.' },
    { label: 'Decline politely. Take a very good trade deal instead.',
      eff:{press: +5,congress: +5,courts: +4,cash: +0.3,auth: +1},
      res: 'You get the money without the photograph. This is what competent corruption looks like and it is deeply unsatisfying.' },
    { label: 'Accept, and say publicly it was unsolicited.',
      eff:{base: +2,press:-5,congress: -8,courts: -7,cash: +0.4,auth: +7},breaks:'emoluments',
      res: 'A report emerges four weeks later showing your own office asked first. The word "unsolicited" is added to a growing list of words you have personally retired.' }
  ,
    { label:'Accept it and hand it straight to a children\'s hospital charity.', eff:{base:+2,congress:+3,auth:-2,cash:-0.2}, wild:true,
      res:'It becomes a flying hospital. Qatar is delighted, the emoluments problem evaporates, and nobody can attack you for it from any direction.' }]
},

{
  id: 'yardvard', src:"freezing $2.2bn in university grants", title: 'Yardvard', who: C.cos, min: 10, max: 38,
  tags: ['culture','power'],
  text: '"Yardvard has an endowment larger than sixty countries and $2.2 billion in federal grants. ' +
        'We\'ve sent them a list of demands about hiring, admissions and what may be said in a seminar room. They\'ve refused."',
  choices: [
    { label: 'Freeze the $2.2 billion. Today.',
      eff:{base: +9,courts: -8,press: -5,street: -5,auth: +8},
      res: 'A judge rules it unlawful five months later. In those five months eleven other universities quietly comply without being asked. That is the entire operation.', flag: 'university' },
    { label: 'Freeze a smaller school\'s money as a warning shot.',
      eff:{base: +6,courts: -4,press: -4,street: -3,auth: +6},
      res: 'Colonnade folds in nine days. Yardvard notices. Everyone notices. Nobody had to write a memo.', flag: 'university' },
    { label: 'Negotiate. Take a joint statement about "viewpoint diversity."',
      eff:{base: -3,press: +4,courts: +3,street: +2,auth: +1},
      res: 'A committee is formed. It will report in 2031. The committee is the concession.' }
  ,
    { label:'Enrol. Take one class. Audit them from the inside.', eff:{base:+3,press:-2,street:-1}, wild:true,
      res:'You attend a 300-level seminar on constitutional interpretation four times. The transcript of your questions is published in 2041 and is genuinely interesting.' }]
},

{
  id: 'law-firms', src:"executive orders targeting named law firms", title: 'Perkins & Coy', who: C.ag, min: 8, max: 34,
  tags: ['power','courts'],
  text: '"An executive order stripping security clearances, federal contracts and building access from the law firms ' +
        'that represented your opponents. Sir, they are lawyers. Their entire profession is suing people who do this."',
  choices: [
    { label: 'Sign orders against all three firms.',
      eff:{base: +6,courts: -10,press: -5,congress: -3,auth: +8},
      res: 'One firm sues and wins outright. Four others, unasked, pledge a combined $600 million in free legal work to causes you like. The ones who fought are not the story.', flag: 'lawfirms' },
    { label: 'One firm only. The loudest one.',
      eff:{base: +4,courts: -6,press: -4,auth: +6},
      res: 'The message is received across the entire bar in about ninety minutes. Cheaper than three orders and exactly as effective.', flag: 'lawfirms' },
    { label: 'Don\'t. Hire better lawyers instead.',
      eff:{courts: +7,press: +4,base: -4,cash: -0.3,auth: -1},
      res: 'Sy quietly triples his own retainer while nodding gravely about the rule of law.' }
  ,
    { label:'Hire all three firms yourself. Conflict them out.', eff:{base:+1,courts:+2,press:-3,street:-3,auth:+6,cash:-0.6}, wild:true,
      res:'Retaining a firm bars it from acting against you. Three retainers, $40 million, and your opponents lose their lawyers without a single executive order.' }]
},

{
  id: 'kennedy-center', src:"takeover of a national arts institution board", title: 'The Arts', who: C.cos, min: 5, max: 30,
  tags: ['culture','vanity'],
  text: '"The board of the national performing arts centre serves at your pleasure. You could remove them and install ' +
        'yourself as chairman." She hesitates. "You have not previously expressed an interest in the performing arts."',
  choices: [
    { label: 'Fire the board. I\'m chairman now. Rename the building.',
      eff:{base: +7,press: -5,street: -4,cash: -0.1,auth: +5},
      res: 'Two celebrated composers resign in protest. Ticket sales fall 40%. The lobby now has a portrait of you looking off to the left.' },
    { label: 'Replace half the board with donors. Stay off the letterhead.',
      eff:{base: +3,press: -2,cash: +0.2,auth: +3},
      res: 'The building programs exactly what you would have programmed and you never had to attend a single opera.' },
    { label: 'Leave the arts alone. Nobody votes on ballet.',
      eff:{press: +4,street: +3,base: -2},
      res: 'A rare unforced act of restraint. It is noticed by 400 people, all of whom already disliked you.' }
  ,
    { label:'Programme one show. A musical. About you.', eff:{base:+3,press:-6,street:-3,auth:+2,cash:-0.2}, wild:true,
      res:'It runs eleven weeks to 34% houses and receives one positive review, which you have framed and which the critic spends a decade denying.' }]
},

{
  id: 'chirpgate', src:"strike planning in a consumer messaging chat", title: 'Chirpgate', who: C.gen, min: 6, max: 32,
  tags: ['security','press'],
  text: 'Your national security team planned a live military strike in a group chat on a consumer messaging app. ' +
        'They added the editor of a national magazine by accident. He has the timings. He had them before the pilots did.',
  choices: [
    { label: '"Nobody was texting war plans." Fire nobody.',
      eff:{base: +5,press: -9,congress: -6,street: -5,auth: +4},
      res: 'The magazine publishes the screenshots. They contain the words "war plans." Nobody is fired. That is the actual lesson of the incident.' },
    { label: 'Fire the Defence Secretary. Publicly. Immediately.',
      eff:{base: -5,press: +8,congress: +7,street: +5,auth: -2},
      res: 'Accountability. It feels strange in the mouth, like a foreign word.' },
    { label: 'Investigate the leak. Not the chat. The leak.',
      eff:{base: +7,press: -7,congress: -4,courts: -4,auth: +6},
      res: 'Three career officials who were not in the chat are put on leave. The people who were in the chat are promoted. Everyone in government now understands the incentive structure.' }
  ,
    { label:'Add the entire press corps to the chat. Radical transparency.', eff:{base:+2,congress:-6,press:+3,street:+1,auth:+2}, wild:true,
      res:'Nobody can leak a chat they are already in. Four planned operations are cancelled and the leak problem is permanently solved.' }]
},

{
  id: 'shutdown', src:"government shutdown brinkmanship", title: 'The Shutdown', who: C.speaker, min: 12, max: 40,
  tags: ['congress','economy'],
  text: 'Hal Grimes has a two-seat majority and eleven members who consider governing a form of surrender. ' +
        'The government closes in 40 hours. "Sir, I can pass anything, as long as it\'s nothing."',
  choices: [
    { label: 'Shut it down. Blame the opposition daily.',
      eff:{base: +7,congress: -6,street: -9,press: -5,auth: +4},
      res: 'Air traffic controllers work unpaid for 34 days. Two airports stop functioning on the same Friday and the shutdown ends by dinner.' },
    { label: 'Cave. Sign the clean bill.',
      eff:{base: -7,congress: +8,street: +7,press: +4,auth: -3},
      res: 'Governing, briefly. Your base uses the word "sellout" 400,000 times before midnight.' },
    { label: 'Shut it down, then spend the appropriated money anyway.',
      eff:{base: +8,congress: -11,courts: -9,street: -5,auth: +11},breaks:'purse',
      res: 'You have discovered that Congress\'s only real power is the purse, and that the purse is just a building full of people who answer their phones when you call.', flag: 'impound' }
  ,
    { label:'Keep it open by paying federal workers out of your own pocket.', eff:{base:+3,congress:+2,press:-1,street:+1,auth:-2,cash:-1.2}, wild:true,
      res:'It costs you $1.2 billion and eleven days. It is unconstitutional in about four different ways and no court can work out who would have standing to say so.' }]
},

{
  id: 'impoundment', src:"refusal to spend appropriated funds", title: 'Money Congress Appropriated', who: C.treas, min: 14, max: 42,
  tags: ['congress','power'],
  text: '"Congress appropriated $9 billion for things you dislike. The Impoundment Control Act says you must spend it. ' +
        'The Act has a penalty section. I have read it eleven times. It does not contain a penalty."',
  choices: [
    { label: 'Don\'t spend a dime. Dare them to sue.',
      eff:{congress: -10,courts: -8,press: -5,street: -6,auth: +12},breaks:'purse',
      res: 'The suit takes 26 months. The money expires at the end of the fiscal year in 7. You have discovered the exchange rate between litigation and calendars.' },
    { label: 'Spend it, but slowly, and on the wrong things.',
      eff:{congress: -4,courts: -3,street: -3,auth: +7},breaks:'takecare',
      res: 'Technically compliant. Functionally identical. Nobody can sue over a "procurement delay."' },
    { label: 'Spend it as written. Trade it for something bigger.',
      eff:{congress: +9,courts: +5,press: +3,base: -4,auth: +2},
      res: 'You get a judicial appointment out of it. Hal calls it a win. Hal calls everything a win.' }
  ,
    { label:'Spend all nine billion on one thing. A very large thing.', eff:{base:+2,congress:-9,courts:-6,street:+1,auth:+6}, wild:true,
      res:'Nine billion dollars into a single bridge. It is finished ahead of schedule, it is beautiful, and it serves a town of four thousand people.' }]
},

{
  id: 'vp-smiles', title: 'Chet Smiles', who: C.vp, min: 12, max: 46,
  tags: ['base','succession'],
  text: 'Chet Danforth has given a speech about "the movement, which is bigger than any one man." ' +
        'He said your name once, at minute nineteen. He is currently in your office asking if you liked it.',
  choices: [
    { label: '"Loved it. Go do forty more."',
      eff:{base: +9,press: +2,auth: -3},
      res: 'The base grows. It grows around him. You have just watered a plant that will eventually block your light.', flag: 'chet' },
    { label: 'Humiliate him mildly in front of the press pool.',
      eff:{base: -4,press: +3,auth: +3},
      res: 'He absorbs it with a smile that does not reach any part of his face. He remembers this. He is a person who has a list.' },
    { label: 'Send him abroad. Somewhere with poor connectivity.',
      eff:{base: -2,press: -2,auth: +5},
      res: 'Six weeks in a region with no domestic cable coverage. He returns tanned, quiet, and somehow more dangerous.' }
  ,
    { label:'Praise the speech. Then have him read the phone book on live television.', eff:{base:+2,press:-2,street:-3,auth:+4}, wild:true,
      res:'Forty minutes of Chet Danforth reading names in alphabetical order at prime time. He does it flawlessly, smiling, and it somehow raises his approval.' }]
},

{
  id: 'broom-divorce', src:"public falling-out with the efficiency czar", title: 'The Divorce', who: C.broom, min: 14, max: 34,
  tags: ['money','base'], req: r => r.flags.broom,
  text: 'Roscoe Vandermeer has posted a 4,000-word thread describing your signature bill as "a disgusting abomination." ' +
        'He is the largest donor in the country and he never sleeps.',
  choices: [
    { label: 'Cancel his federal contracts on live television.',
      eff:{base: +5,press: -4,street: -3,cash: -0.8,auth: +5},
      res: 'His companies launch American astronauts and run half the federal cloud. Cancelling him is like cancelling gravity: possible on paper, awkward in practice.' },
    { label: 'Call him. Flatter him. Give him a space thing.',
      eff:{base: +3,press: -2,cash: +0.5,auth: +2},
      res: 'One phone call and a naming opportunity. The thread is deleted. He posts a photograph of a rocket instead.' },
    { label: 'Say nothing. Let him burn out on his own.',
      eff:{base: -4,press: +3,cash: -0.3},
      res: 'He funds three primary challengers out of boredom. Two of them win. He does not, at any point, burn out.' }
  ,
    { label:'Challenge him to a cage match. Publicly. With a date.', eff:{base:+4,congress:-6,press:+1,street:+1,auth:+1}, wild:true,
      res:'It is announced, promoted, and never happens. It generates more attention than any policy of the term and both of you understand exactly why you did it.' }]
},

{
  id: 'blackwood', src:"promised files that did not contain what supporters expected", title: 'The Blackwood Files', who: C.ag, min: 18, max: 44,
  tags: ['base','scandal'],
  text: 'For years your movement was promised the release of a file. Bo has now reviewed the file. ' +
        '"There is no list, sir. There was never a list. Telling them that is going to be the worst week of my life."',
  choices: [
    { label: 'Release everything. Let it land where it lands.',
      eff:{base: -11,press: +9,courts: +6,street: +4,auth: -2},
      res: 'It contains three embarrassing dinners and no conspiracy. Your base does not believe it, because a movement built on a hidden file cannot survive an empty one.' },
    { label: 'Announce there is no file. Tell them to move on.',
      eff:{base: -14,press: +3,auth: -4},
      res: 'The first real revolt of your presidency comes from your own side, and it is louder than anything the opposition ever managed.', flag: 'baseRevolt' },
    { label: 'Release 40%, redacted, on a Friday night, as a PDF of a photocopy.',
      eff:{base: -4,press: -5,courts: -3,auth: +3},
      res: 'The redactions become the story, which is better than the file becoming the story. Bo ages four years in one weekend.' }
  ,
    { label:'Release the file. It is four hundred pages of lunch receipts.', eff:{base:-10,courts:+2,press:+3,street:+1,auth:+1}, wild:true,
      res:'It really is lunch receipts. Nobody believes that either. They are analysed for eleven years by people certain they are a code.' }]
},

{
  id: 'squad-post', src:"go back post aimed at four congresswomen", title: 'Go Back', who: C.social, min: 4, max: 44,
  tags: ['rhetoric','street'],
  text: 'Four opposition congresswomen have criticised you. Brayden has drafted a post suggesting they "go back" ' +
        'to the countries they came from. Three were born in this one. The fourth is a naturalised citizen.',
  choices: [
    { label: 'Post it.',
      eff:{base: +10,press: -11,street: -10,congress: -5,auth: +3},breaks:'equal',
      res: 'The House votes to condemn it. Four members of your own party join. At the next rally the crowd invents a chant and you let it run for thirteen seconds without interrupting.' },
    { label: 'Attack their policies instead. Ruthlessly, but on policy.',
      eff:{base: +3,press: +3,street: +2,auth: +1},
      res: 'Effective, forgettable, and over by Thursday.' },
    { label: 'Post it, then deny it meant what it plainly meant.',
      eff:{base: +7,press: -8,street: -7,auth: +2},
      res: 'A masterclass in saying a thing and un-saying it while it is still in the air. The denial is not for the critics. It is for the people who need permission to keep supporting you.' }
  ,
    { label:'Post a photograph of yourself with all four of them, smiling.', eff:{base:-9,congress:+2,press:+4,street:+4,auth:-2}, wild:true,
      res:'It is from 2011 and everyone in it looks delighted. It defuses the story and infuriates absolutely everybody, which is a kind of achievement.' }]
},

{
  id: 'anthem', src:"attacks on athletes kneeling during the anthem", title: 'Kneeling', who: C.poll, min: 5, max: 44,
  tags: ['culture','base'],
  text: 'Athletes are kneeling during the anthem. Nadia has the numbers. "Sir, the kneeling polls at 38%. ' +
        'You attacking the kneeling polls at 41%. But it consumes an entire month of oxygen."',
  choices: [
    { label: '"Get that son of a bitch off the field." Say it at a rally.',
      eff:{base: +8,press:-4,street: -8,auth: +3},
      res: 'Entire leagues, sponsors and networks are dragged into it by Sunday. You have proven you can set the country\'s agenda from a stage in a state fairground.' },
    { label: 'Say athletes should be free to protest, and free to be criticised.',
      eff:{base: -5,press: +6,street: +5},
      res: 'A genuinely defensible position, delivered clearly, and forgotten within a day by literally everyone.' },
    { label: 'Tie federal stadium funding to anthem conduct.',
      eff:{base: +7,courts: -8,press:-5,street: -6,auth: +7},
      res: 'You have converted a culture war into a funding condition. This is the move. Everything after this is just picking the next hostage.' }
  ,
    { label:'Kneel yourself. Say it is for the troops.', eff:{base:-6,press:+2,street:+3,auth:+2}, wild:true,
      res:'You take a knee at a stadium and give a reason nobody can argue with. Four commentators have visible difficulty forming sentences about it.' }]
},

{
  id: 'glacia', src:"proposal to purchase an autonomous territory", title: 'Iran', who: C.state, min: 6, max: 44,
  tags: ['foreign','vanity'],
  text: '"You have asked me to price the acquisition of Iran. It is an autonomous territory of Northmark. ' +
        'It has 56,000 residents, all of whom are people, with opinions, and a vote."',
  choices: [
    { label: 'Offer to buy it. Publicly. With a number.',
      eff:{base: +6,press: -4,street: -2,auth: +3},
      res: 'The Northmark Prime Minister calls the idea "absurd." You call her "nasty" and cancel a state visit. Relations with a NATO ally now hinge on an adjective.' },
    { label: 'Refuse to rule out force.',
      eff:{base: +6,press: -5,street: -6,congress: -5,auth: +7},
      res: 'Every ally in the alliance quietly begins costing out a future without you in it. This takes eight years to matter and then it matters enormously.' },
    { label: 'Drop it. Sign a minerals deal instead.',
      eff:{press: +4,congress: +4,cash: +0.4,base: -3,auth: +1},
      res: 'You get most of what you actually wanted, which was the minerals, and none of what you emotionally wanted, which was a map.' }
  ,
    { label:'Offer to trade a state for it. Name the state.', eff:{base:+3,congress:-9,press:+1,street:-4,auth:+2}, wild:true,
      res:'Northmark declines. The named state is deeply insulted and its two senators become permanent obstacles to everything you want for four years.' }]
},

{
  id: 'fifty-first', src:"51st state annexation rhetoric", title: 'The Fifty-First State', who: C.state, min: 6, max: 44,
  tags: ['foreign','levity'],
  text: 'You have begun referring to the Prime Minister of Canada as "Governor." ' +
        'You have said you would use "economic force" to annex the country. Canada has started booing your anthem at hockey games.',
  choices: [
    { label: 'Keep calling him Governor. It\'s free real estate.',
      eff:{base: +7,press: -3,street: -2,auth: +2},
      res: 'A nation of 40 million people develops a unified national identity in ten weeks, largely in opposition to you. Their tourism to your country falls 38%.' },
    { label: 'Tariff them until they ask to join.',
      eff:{base: +6,congress: -5,street: -6,press: -5,auth: +5},
      res: 'They elect the one politician who promised to fight you, by a landslide, having been 20 points behind. You are the single most effective campaign manager of the decade, for the other side.' },
    { label: 'Apologise. Sort of. Adjacently.',
      eff:{press: +5,street: +4,base: -5,auth: -2},
      res: 'You say "I have great respect for Canada" in a tone that suggests you are reading it off a card, which you are.' }
  ,
    { label:'Apply to join Canada instead.', eff:{base:+2,congress:-6,press:+2,street:+2,auth:+1}, wild:true,
      res:'A formal letter of application is sent as a joke. Their parliament debates it for ninety minutes, sincerely, and the transcript is a masterpiece.' }]
},

{
  id: 'riviera', src:"proposal to redevelop a war-damaged territory", title: 'The Riviera Plan', who: C.state, min: 12, max: 40,
  tags: ['foreign'],
  text: 'You have proposed that the United States "take over" a war-flattened territory and redevelop it as a luxury resort corridor. ' +
        'Muriel has brought a printout of the proposal. There is a rendering. Somebody made a rendering.',
  choices: [
    { label: 'Announce it at the podium. Show the rendering.',
      eff:{base: +3,press: -5,street: -7,congress: -6,auth: +4},
      res: 'Every government in the region condemns it within six hours. The rendering, which features an infinity pool, is now permanently attached to your foreign policy legacy.' },
    { label: 'Float it as a "concept" through a friendly outlet.',
      eff:{base: +3,press: -4,street: -3,auth: +3},
      res: 'Deniable, testable, and it moves the boundary of what can be said out loud by exactly one notch. Which is the whole purpose of a trial balloon.' },
    { label: 'Kill it. Back a boring multilateral plan.',
      eff:{press: +6,congress: +5,street: +4,base: -4,auth: -1},
      res: 'It might actually work, which means it will take eleven years and nobody will attach your name to it.' }
  ,
    { label:'Build the resort. On federal land. In Nevada.', eff:{base:+2,press:-2,street:-2,auth:+1,cash:+0.4}, wild:true,
      res:'All of the ambition, none of the war crimes. It opens in six years, does well, and is the least controversial thing with your name on it.' }]
},

{
  id: 'oval-ambush', src:"televised Oval Office confrontation with a visiting president", title: 'The Meeting', who: C.state, min: 10, max: 36,
  tags: ['foreign','press'],
  text: 'The President of Ukraine is in the Oval Office in front of forty cameras. He has just declined, politely, ' +
        'to thank you a second time. Chet is already leaning forward in his chair.',
  choices: [
    { label: 'Dress him down. On camera. "You\'re gambling with World War Three."',
      eff:{base: +8,press: -9,congress: -7,street: -6,auth: +5},
      res: 'He leaves without lunch. Nine European leaders post identical statements within an hour, which is a thing that has never happened before.' },
    { label: 'Cut to a private room. Shout there instead.',
      eff:{base: +2,press: +4,congress: +3,auth: +2},
      res: 'The deal gets signed. Nobody gets a clip. Chet is visibly disappointed at the lack of a clip.' },
    { label: 'Praise him lavishly, then quietly cut the aid.',
      eff:{base: +4,press: +5,congress: -3,street: +2,auth: +6},
      res: 'The warmest press conference of your term, followed by a line item that disappears in a Thursday reconciliation. This is how it is actually done.' }
  ,
    { label:'Give him your chair. Sit in the small one.', eff:{base:-6,congress:+3,press:+3,street:+3,auth:-2}, wild:true,
      res:'A photograph of the American President in the guest chair. Four European foreign ministries request copies. It buys a decade of goodwill.' }]
},

{
  id: 'dictator-joke', src:"dictator on day one remark", title: 'Just Day One', who: C.press, min: 3, max: 44,
  tags: ['rhetoric','base'],
  text: 'An interviewer asks, directly, whether you intend to be a dictator. There is a way to answer this that ends the story. ' +
        'There is also a way to answer it that does not.',
  choices: [
    { label: '"No. Except for day one." Laugh. Move on.',
      eff:{base: +9,press: -6,street: -5,courts: -3,auth: +6},
      res: 'The joke works as a joke and as a trial balloon simultaneously. By the time everyone stops arguing about whether it was a joke, day one has been going on for fourteen months.' },
    { label: '"Absolutely not." Flatly. No smile.',
      eff:{press: +7,courts: +5,street: +5,base: -6,auth: -4},
      res: 'A clean denial. The clip is used against you later by people on your own side, who considered it a promise.' },
    { label: '"Define dictator."',
      eff:{base: +6,press: -8,courts: -5,street: -4,auth: +7},
      res: 'Four hundred think-pieces attempt to define dictator. While they do that, you reclassify another nine thousand federal employees.' }
  ,
    { label:'"I\'d be a terrible dictator. I can\'t even fire people."', eff:{base:+2,courts:+1,press:-1,street:-1,auth:-2}, wild:true,
      res:'It is self-deprecating, obviously false, and completely disarming. Three prepared follow-up questions are abandoned.' }]
},

{
  id: 'weaponization', src:"Ending the Weaponization executive order", title: 'Ending the Weaponization', who: C.ag, min: 8, max: 40,
  tags: ['justice','power'],
  text: '"An executive order titled Ending the Weaponization of the Federal Government. Its operative effect is to direct ' +
        'the federal government at a list of names. The title is doing an enormous amount of work, sir."',
  choices: [
    { label: 'Sign it. Start with the list.',
      eff:{base: +7,courts: -9,press:-5,congress: -5,auth: +10},
      res: 'Grand juries are convened in three districts. Two prosecutors resign rather than sign the indictments. Two do not, and those two are the ones the job needed.', flag: 'weapon' },
    { label: 'Sign it, but investigate only institutions. Not individuals.',
      eff:{base: +5,courts: -5,press:-4,auth: +6},
      res: 'Institutions have compliance departments and no capacity for outrage. They fold faster than people do.', flag: 'weapon' },
    { label: 'Don\'t sign. Say you\'re "too busy winning."',
      eff:{courts: +8,press: +6,congress: +4,base: -8,auth: -3},
      res: 'Your base wanted retribution and got a slogan. Slogans have a shelf life and this one is past it.' }
  ,
    { label:'Sign it, and investigate yourself first. Thoroughly.', eff:{base:+2,congress:+2,courts:+3,press:-1,street:-3,auth:-2}, wild:true,
      res:'A nine-month inquiry into your own conduct, staffed by your own people, which clears you. It is transparently useless and your defenders quote it for years.' }]
},

{
  id: 'guard-portland', src:"National Guard deployments over governors' objections", title: 'Troops in Portsmouth', who: C.gen, min: 14, max: 42,
  tags: ['military','street'],
  text: 'General Tarrant is standing very straight. "You want 400 National Guard federalized and sent into an American city ' +
        'over the objection of its governor. Sir, I will follow a lawful order. I am asking you to make it lawful."',
  choices: [
    { label: 'Deploy. Declare a crime emergency to cover it.',
      eff:{base: +9,street: -12,courts: -9,congress: -6,auth: +11},breaks:'posse',
      res: 'Armoured vehicles on a street with a farmers\' market. A judge blocks it in eleven days, by which point the image exists forever and the next deployment is easier.', flag: 'guard' },
    { label: 'Send federal marshals instead. Smaller. Quieter.',
      eff:{base: +4,street: -5,courts: -4,auth: +7},
      res: 'No tanks, no photographs, same men with guns. You are learning that the uniform is the only part anyone objects to.', flag: 'guard' },
    { label: 'Stand down. Offer the governor federal money instead.',
      eff:{street: +9,courts: +7,congress: +5,base: -9,auth: -4},
      res: 'The unrest ends in three weeks on its own, as unrest does. Nobody credits you, because nothing happened, and nothing happening is not a story.' }
  ,
    { label:'Go there alone. No detail. Walk around for an hour.', eff:{base:+3,congress:+1,auth:-2}, wild:true,
      res:'You talk to about forty people, several of whom hate you, none of whom expected this. The unrest ends in nine days for reasons nobody can properly explain.' }]
},

{
  id: 'posse', src:"proposed standing domestic quick-reaction force", title: 'The Quick Reaction Force', who: C.gen, min: 22, max: 46,
  tags: ['military','power'], req: r => r.flags.guard,
  text: '"You are asking for a standing national quick-reaction force. Domestic. Reporting to you. ' +
        'There is a statute from 1878 about this. It is the one thing every officer in this building can quote from memory."',
  choices: [
    { label: 'Stand it up. Call it a "civil support element."',
      eff:{base: +7,street: -13,courts: -11,congress: -8,auth: +15},breaks:'posse',
      res: 'You now have soldiers whose deployment requires no governor, no court and no vote. This is the single largest transfer of power of your presidency and it was announced in a footnote.' },
    { label: 'Stand it up on paper only. No troops assigned.',
      eff:{street: -4,courts: -4,base: +4,auth: +8},
      res: 'The authority exists. The force does not. Authorities that exist have a way of finding forces.' },
    { label: 'Refuse. Some doors you don\'t open.',
      eff:{street: +10,courts: +9,congress: +7,base: -10,auth: -6},
      res: 'Tarrant does something you have not seen a general do before. He exhales.' }
  ,
    { label:'Stand one up for natural disasters instead.', eff:{base:+1,congress:+3,courts:+2,street:+1,auth:-2}, wild:true,
      res:'Eleven thousand people who arrive within six hours of a hurricane. It saves an estimated four hundred lives in two years and nobody ever calls it authoritarian.' }]
},

{
  id: 'vermin', src:"vermin dehumanising rhetoric", title: 'The Word', who: C.social, min: 18, max: 46,
  tags: ['rhetoric','street'],
  text: 'Brayden has written a rally line describing your opponents as "vermin who live within the confines of our country." ' +
        'Two historians have already pre-emptively written columns about the last two men who used that word.',
  choices: [
    { label: 'Say it. Twice. Slowly.',
      eff:{base: +11,press: -12,street: -11,courts: -5,auth: +8},
      res: 'The comparison is made on every front page. Your team responds that the critics\' lives "will be crushed," which does not improve the situation, and was not intended to.' },
    { label: 'Say "radicals" instead. Same energy, fewer historians.',
      eff:{base: +6,press: -3,street: -3,auth: +4},
      res: 'You get 90% of the effect and none of the archive footage. Deborah calls this "the discount."' },
    { label: 'Cut the line. Talk about groceries.',
      eff:{base: -4,press: +6,street: +6,auth: -2},
      res: 'The price of eggs is the most electorally potent subject in the country and it bores you to physical pain.' }
  ,
    { label:'Deliver the line, but about wasps. Only wasps.', eff:{base:+2,press:-2,street:-1,auth:+1}, wild:true,
      res:'Eleven minutes of genuine, escalating fury about wasps. It is the most popular speech of your presidency and entomologists write four rebuttals.' }]
},

{
  id: 'health-advice', src:"medical claims from the podium contradicting consensus", title: 'Medical Advice', who: C.doc, min: 8, max: 44,
  tags: ['gaffe','press'],
  text: 'You are at a podium beside actual scientists. You are about to freelance about a common medication and a childhood condition. ' +
        'Admiral Prine has developed a facial expression that has no name.',
  choices: [
    { label: 'Say it. You have a feeling about this.',
      eff:{base: +5,press: -10,street: -8,auth: +1},
      res: 'Poison control calls rise 21% in a week. Two medical associations issue statements. Your base experiences it as bravery.' },
    { label: 'Read the prepared remarks. Word for word.',
      eff:{press: +6,street: +5,base: -3},
      res: 'The most boring eleven minutes of your presidency and objectively the most useful.' },
    { label: 'Say it, then say you were being sarcastic.',
      eff:{base: +4,press: -6,street: -5,auth: +2},
      res: 'The sarcasm defence has now been deployed so often that it has stopped being a defence and become a genre.' }
  ,
    { label:'Defer to the scientists. Loudly. By name.', eff:{base:-6,congress:+2,press:+3,street:+4,auth:-2}, wild:true,
      res:'You say \'ask her, she knows more than me\' on live television. The clip is played for a decade by people arguing you were capable of it all along.' }]
},

{
  id: 'antifa-designation', src:"designation of a decentralised tendency as terrorist", title: 'A Designation', who: C.home, min: 16, max: 44,
  tags: ['power','street'],
  text: '"You want to designate a decentralised protest tendency as a domestic terrorist organisation. Sir, it has no leaders, ' +
        'no membership and no bank account. Designating it means designating an adjective."',
  choices: [
    { label: 'Designate it. Then investigate anyone described by that adjective.',
      eff:{base: +8,street: -10,courts: -8,press: -5,auth: +11},
      res: 'Because the category is undefined, the category is infinite. Twelve nonprofits lose their banking within a month. Nobody had to prove anything about any of them.' },
    { label: 'Designate it symbolically. No enforcement guidance.',
      eff:{base: +6,street: -4,courts: -3,auth: +4},
      res: 'A press release with the force of law hanging around it like a smell. Enforcement guidance can always be issued later.' },
    { label: 'Don\'t. Prosecute actual crimes with actual evidence.',
      eff:{courts: +7,press: +5,street: +5,base: -7,auth: -3},
      res: 'Bo Slaughter looks briefly like a person who went to law school for reasons.' }
  ,
    { label:'Designate an adjective. Any adjective. See if anyone stops you.', eff:{base:+2,courts:-8,press:-8,street:-6,auth:+5}, wild:true,
      res:'You designate \'unruly.\' The order is published in the Federal Register. Four agencies request clarification and none receives any.' }]
},

{
  id: 'six-three', src:"Supreme Court merits losses on tariffs and birthright citizenship", title: 'A Six–Three', who: C.cj, min: 16, max: 44,
  tags: ['courts'],
  text: 'The Chief Justice has requested a courtesy call. She is calling to tell you that the Court has struck down your signature ' +
        'economic order six to three, and that two of the three you appointed were in the majority.',
  choices: [
    { label: 'Attack the Court by name. Call for impeachments.',
      eff:{base: +9,courts: -14,press: -5,congress: -5,auth: +5},
      res: 'The Chief Justice issues a rare public statement. Your base learns that the Court is also an enemy, which expands the list of enemies to include every institution in the country.' },
    { label: 'Comply, praise the Court, and reissue the policy under a different statute.',
      eff:{courts: +9,press: +4,base: +2,auth: +8},
      res: 'You lost the case and kept the policy. This is what it looks like when someone actually understands the machine.' },
    { label: 'Comply fully. Say the system works.',
      eff:{courts: +12,press: +8,congress: +5,base: -8,auth: -5},
      res: 'You are praised by people who will never vote for you, in outlets your voters do not read.' }
  ,
    { label:'Send the Court a fruit basket and a note saying "good ruling."', eff:{base:-4,congress:+2,courts:+5,press:+1,street:-1,auth:-2}, wild:true,
      res:'The basket is logged, valued at $61, and declined per ethics rules. The note is not declined. It is, reportedly, still in a drawer.' }]
},

{
  id: 'vacancy', src:"Supreme Court appointments", title: 'A Vacancy', who: C.ag, min: 18, max: 46,
  tags: ['courts','power'],
  text: 'A justice has died. You have 53 senators, a shortlist, and, for the first time, a genuine choice: ' +
        'a brilliant jurist who will rule against you sometimes, or a loyal one who will not.',
  choices: [
    { label: 'The loyal one. Confirm in 27 days.',
      eff:{courts: +14,congress: -6,press: -5,base: +6,auth: +9},
      res: 'Confirmed 51–49. He writes his first opinion in your favour before the term ends and cites nothing. You have bought thirty years.' },
    { label: 'The brilliant one. Build a legacy.',
      eff:{courts: +7,press: +8,congress: +5,base: -3,auth: +2},
      res: 'She is confirmed 78–22 and rules against you within eighteen months, at length, devastatingly, in a way that will be taught.' },
    { label: 'Hold the seat open. Dangle it for a year.',
      eff:{courts: -5,congress: +9,base: +5,press: -4,auth: +6},
      res: 'An empty seat is worth more than a filled one. Every senator who wants a say now needs something from you, weekly.' }
  ,
    { label:'Nominate the dog.', eff:{base:+3,congress:-9,courts:-9,press:+2,auth:+2}, wild:true,
      res:'The nomination is transmitted to the Senate. The Judiciary Committee schedules a hearing before anybody in the building admits out loud what is happening.' }]
},

{
  id: 'poll-collapse', title: 'The Numbers Again', who: C.poll, min: 14, max: 44,
  tags: ['base','press'],
  text: 'Nadia has your approval at 37%. "The good news is your floor is 34 and it has never moved. ' +
        'The bad news is your ceiling is 46 and it has also never moved. Sir, you don\'t have voters. You have a congregation."',
  choices: [
    { label: 'Feed the congregation. Rally every week.',
      eff:{base: +10,press: -5,street: -4,cash: -0.3,auth: +3},
      res: 'Twelve rallies in nine weeks. The floor rises to 39 and hardens into something that no longer responds to events at all.' },
    { label: 'Pivot to the middle. Announce a jobs plan.',
      eff:{base: -7,street: +7,press: +6,congress: +5,auth: -2},
      res: 'You gain four points among people who will never like you and lose nine among people who would die for you. Bad trade.' },
    { label: 'Stop polling. Ban internal polling. Ban the word.',
      eff:{base: +4,press: -3,auth: +4},
      res: 'Nadia is reassigned to "message architecture," a job that does not exist. You now govern entirely on the basis of crowd noise.' }
  ,
    { label:'Poll the question "is polling real?" and release only that.', eff:{base:+2,press:-7,auth:+2}, wild:true,
      res:'Forty-one percent say no. You cite this, correctly, as evidence that polling is not trusted, which is a genuinely airtight circular argument.' }]
},

{
  id: 'donor-dinner', title: 'The Ask', who: C.lawyer, min: 10, max: 44,
  tags: ['money'],
  text: 'Sy has assembled forty people in a private room. Each has written a very large cheque. ' +
        'Each would like something specific, small, and technically legal. He has a laminated card.',
  choices: [
    { label: 'Give them all of it. Read the card aloud.',
      eff:{base:-2,cash: +1.2,congress: +5,press: -5,courts: -5,street: -4,auth: +3},
      res: 'Eleven regulatory carve-outs are enacted by memo. It costs the country roughly $30 billion and it took forty minutes.' },
    { label: 'Take the money. Give them nothing.',
      eff:{cash: +1.0,base: +2,congress: -4,auth: +4},
      res: 'They cannot complain publicly without describing what they bought. This is the safest theft in American life.' },
    { label: 'Refuse the room. Fundraise on small-dollar donations.',
      eff:{base: +8,press: +5,cash: -0.4,congress: -5},
      res: 'You raise the same amount, twenty dollars at a time, from people who cannot afford it, and you owe none of them anything. Chilling, actually.' }
  ,
    { label:'Take the money. Serve them fast food on silver.', eff:{base:+3,press:-2,street:-1,auth:+2,cash:+1}, wild:true,
      res:'Forty of the wealthiest people in the country eat drive-through burgers off state china. Nine of them describe it, sincerely, as the best evening of their lives.' }]
},

{
  id: 'settlement', src:"network defamation settlements", title: 'The Settlement', who: C.lawyer, min: 8, max: 42,
  tags: ['press','money'],
  text: '"You sued a network for $20 billion over an edit. The suit is, in my professional view, dogshit. ' +
        'They\'ve offered $16 million and no apology. Their parent company needs regulatory approval for a merger next quarter."',
  choices: [
    { label: 'Take the money. Note the merger is still under review.',
      eff:{press: -11,cash: +0.3,courts: -4,congress: -3,auth: +9},
      res: 'You have demonstrated that a frivolous suit plus a pending approval equals a payment. Three other networks now settle disputes that have not yet been filed.', flag: 'settle' },
    { label: 'Take the money. Nothing more. No connection to anything.',
      eff:{press: -6,cash: +0.3,auth: +5},
      res: 'Their own correspondents call it a payoff on their own air. The company issues a statement about "ordinary litigation risk."', flag: 'settle' },
    { label: 'Drop the suit. It was always garbage.',
      eff:{press: +9,courts: +6,base: -5,cash: -0.2,auth: -3},
      res: 'Sy bills you $400,000 for the privilege of not suing anyone.' }
  ,
    { label:'Counter-sue for one dollar and an apology from the anchor\'s mother.', eff:{base:+2,courts:-3,press:-4,auth:+1}, wild:true,
      res:'The mother, who is 84, gives an interview instead. She is devastating, extremely funny, and becomes a recurring guest on the network.' }]
},

{
  id: 'fcc-license', src:"should lose its license and regulator pressure", title: 'The License', who: C.cos, min: 14, max: 44,
  tags: ['press','power'],
  text: '"The broadcast regulator has opened reviews touching four networks. You have said publicly that one of them ' +
        '\'should lose its license.\' Sir, legally you don\'t control the regulator. Practically, you appointed him."',
  choices: [
    { label: 'Say it again. Louder. Name the network.',
      eff:{base: +7,press: -12,courts: -6,congress: -5,auth: +10},breaks:'speech',
      res: 'No license is ever revoked. Four networks quietly change their late-night booking policy. Zero laws were broken and the outcome is identical to breaking one.' },
    { label: 'Say nothing publicly. Have the chairman make a call.',
      eff:{press: -8,courts: -3,auth: +8},
      res: 'No tape, no quote, no story. A programme is cancelled for "scheduling reasons." This is the version that actually works.' },
    { label: 'Publicly state you\'d never interfere with a license.',
      eff:{press: +9,courts: +5,base: -5,auth: -3},
      res: 'A sentence you can point at forever. It costs nothing and buys a surprising amount of room.' }
  ,
    { label:'Apply for a broadcast licence yourself.', eff:{base:+3,courts:-4,press:-6,auth:+4,cash:-0.3}, wild:true,
      res:'The application is filed and is, embarrassingly for everyone, entirely valid. It sits in a queue for six years beside applications from church radio stations.' }]
},

{
  id: 'general-strike', title: 'Ungovernable', who: C.home, min: 24, max: 46,
  tags: ['street'], req: r => r.meters.street < 45,
  text: 'Three cities have stopped functioning. Transit workers, teachers and port crews have coordinated for the first time in ninety years. ' +
        'Duane has two folders. He is holding one of them much more tightly.',
  choices: [
    { label: 'Break it. Invoke emergency labour powers.',
      eff:{base: +5,street: -13,courts: -9,press: -5,auth: +12},
      res: 'The ports reopen in eleven days under federal supervision. Something in the relationship between the country and its own government has been permanently reset, and both sides know it.' },
    { label: 'Negotiate. Give them most of it.',
      eff:{street: +14,press: +6,congress: +4,base: -9,auth: -5},
      res: 'It ends in a week and costs $40 billion. Your base calls it capitulation. The trains run.' },
    { label: 'Do nothing. Publicly. Loudly. Let it burn out.',
      eff:{street: -6,press: -4,base: +4,congress: -4,auth: +3},
      res: 'It burns out in five weeks, having achieved most of its demands through exhaustion. You claim credit for the ending.' }
  ,
    { label:'Join the picket line. Bring coffee.', eff:{base:-10,congress:+2,press:+4,street:+5,auth:-3}, wild:true,
      res:'The President of the United States hands out coffee at a port gate. Nobody has a script for this. The strike ends in four days and nobody can agree who won.' }]
},

/* ══════════════ ACT THREE, CONSOLIDATION (months 26–48) ══════════════ */

{
  id: 'parade', src:"military parade with armour", title: 'The Parade', who: C.gen, min: 20, max: 48,
  tags: ['vanity','military'],
  text: '"You would like tanks on the avenue. I can give you tanks on the avenue. I would note that the avenue was not built for tanks ' +
        'and the tanks will remove approximately $21 million of the avenue."',
  choices: [
    { label: 'Do it. Flyover. The works. Put me on the reviewing stand.',
      eff:{base: +9,press: -5,street: -6,cash: -0.4,auth: +7},
      res: 'It is broadcast live. The image of you saluting your own army on your own birthday is now the file photo used in every article about you, worldwide, permanently.' },
    { label: 'Do it without tanks. Bands and flyovers only.',
      eff:{base: +5,press: -1,street: -1,cash: -0.1,auth: +3},
      res: 'Cheerful, cheap, and it fails to generate a single alarming photograph. A missed opportunity, arguably.' },
    { label: 'Cancel. Spend it on veterans instead.',
      eff:{base: +3,press: +7,street: +5,congress: +4,auth: -2},
      res: 'The money reaches actual veterans. Nobody films it. It is the best thing you do all year.' }
  ,
    { label:'Hold it, but with only marching bands. All of them.', eff:{base:+3,congress:+1,press:-2,street:-1,auth:-2,cash:-0.2}, wild:true,
      res:'Four hundred high school bands from every state, six hours, no armour. It is enormous, joyful, and impossible to compare to anything sinister.' }]
},

{
  id: 'currency', src:"presidential likeness on currency", title: 'Currency', who: C.treas, min: 26, max: 48,
  tags: ['vanity','power'],
  text: '"There is a statute prohibiting the portrait of a living person on United States currency. ' +
        'It has stood since 1866." He swallows. "It is a statute. Not the Constitution."',
  choices: [
    { label: 'Repeal it. Put me on the hundred.',
      eff:{base: +7,congress: -7,press: -5,street: -5,auth: +9},
      res: 'It passes 218–215 in a Thursday night vote attached to a highway bill. There is now a version of the country\'s money with your face on it and it does not come off.' },
    { label: 'A commemorative coin instead. Non-circulating.',
      eff:{base: +6,press: -3,cash: +0.3,auth: +4},
      res: 'You sell 4 million of them at $100 each. This is, financially, the best decision of your presidency.' },
    { label: 'Leave the money alone.',
      eff:{press: +4,congress: +3,base: -3},
      res: 'Lyle exhales for the first time in nine months.' }
  ,
    { label:'Put the dog on the hundred.', eff:{base:+4,congress:-4,press:+1,street:+1,auth:-2}, wild:true,
      res:'It passes 397-38. The note becomes the most counterfeited in the world within three years because everybody wants one.' }]
},

{
  id: 'loyalty-oath', title: 'The Oath', who: C.cos, min: 26, max: 48,
  tags: ['agencies','power'],
  text: '"A new onboarding questionnaire for every federal hire. Four questions. Two of them are about the last election. ' +
        'Sir, this is the thing. Everything else has been reversible. This one changes who the government is made of."',
  choices: [
    { label: 'Implement it. Every agency. Every hire.',
      eff:{base: +5,congress: -6,courts: -9,press: -5,street: -7,auth: +14},
      res: 'Within a year the federal workforce is 400,000 people who answered two questions correctly. There is no order to reverse. There is only a staff.' },
    { label: 'Political appointees only. Not career staff.',
      eff:{base: +4,courts: -4,press: -3,auth: +7},
      res: 'Four thousand people instead of four hundred thousand. Four thousand is, it turns out, plenty.' },
    { label: 'Kill it. This is the line.',
      eff:{courts: +9,press: +8,congress: +6,street: +6,base: -8,auth: -7},
      res: 'Deborah takes the folder back without a word. She does not bring it again. You will think about this moment later, at length.' }
  ,
    { label:'Make the questionnaire about pizza toppings.', eff:{base:+2,congress:-3,press:-1,street:-2,auth:+3}, wild:true,
      res:'Four questions, all about pizza. It is legally unobjectionable, it profiles nobody, and within a year hiring managers have quietly worked out which answer you prefer.' }]
},

{
  id: 'state-broadcast', title: 'The People\'s Broadcast', who: C.press, min: 26, max: 48,
  tags: ['press','power'],
  text: '"We\'ve gutted the international broadcasters and the public network. There\'s spectrum, staff and a distribution deal ' +
        'sitting there. We could just... make one. Ours. Carried by every affiliate under the emergency alert framework."',
  choices: [
    { label: 'Build it. Nightly. Carried everywhere.',
      eff:{press: +16,base: +7,courts: -8,congress: -6,street: -7,auth: +11},
      res: 'Sixty million households now receive a nightly broadcast produced in the building where policy is made. Two of the four networks begin simulcasting it to stay competitive.' },
    { label: 'Build it as a streaming channel. Voluntary carriage.',
      eff:{press: +8,base: +5,courts: -3,auth: +6},
      res: 'Eleven million subscribers and no lawsuit. Slower. Cleaner. It gets there.' },
    { label: 'Don\'t. The private networks already do this for free.',
      eff:{press: +4,courts: +4,congress: +3,auth: +1},
      res: 'An accurate and unsettling assessment of the media landscape.' }
  ,
    { label:'Build it, and make it entirely weather.', eff:{base:+1,congress:+2,press:-1,auth:-2,cash:-0.2}, wild:true,
      res:'A 24-hour federal weather channel. It is excellent, it is trusted, it saves lives in three hurricanes, and it has your name in the corner of the screen forever.' }]
},

{
  id: 'election-commission', title: 'Election Integrity', who: C.home, min: 28, max: 46,
  tags: ['power','elections'],
  text: '"A federal commission with subpoena power over state voter rolls, ballot machines and county clerks. ' +
        'Elections are run by the states, sir. Fifty of them. This is the one they built the most walls around."',
  choices: [
    { label: 'Stand it up. Subpoena everything.',
      eff:{base: +6,courts: -11,congress: -8,press: -5,street: -8,auth: +14},
      res: 'Thirty-one states refuse. Nineteen comply. You now have the machinery, in nineteen states, to contest a result before it is announced.', flag: 'commission' },
    { label: 'A voluntary commission. Advisory only.',
      eff:{base: +5,courts: -4,press: -4,auth: +7},
      res: 'It issues a report. The report becomes the factual basis for everything that follows. That was always the job of the report.', flag: 'commission' },
    { label: 'No. Elections are the one thing you do not touch.',
      eff:{courts: +10,congress: +8,press: +8,street: +7,base: -9,auth: -8},
      res: 'You have drawn a line in the only place a line has ever actually held.' }
  ,
    { label:'Stand it up and put the opposition in charge of it.', eff:{base:-12,congress:+4,courts:+4,press:+4,street:+3,auth:-4}, wild:true,
      res:'Nobody can attack the findings of a commission chaired by their own side. It is the most cynical possible route to actual legitimacy and it works completely.' }]
},

{
  id: 'third-term', src:"public musings about a third term", title: 'The Twenty-Second', who: C.lawyer, min: 30, max: 48,
  tags: ['power','elections'],
  text: '"You have been musing about a third term. The Twenty-Second Amendment is 87 words long and unusually well-drafted. ' +
        'However." Sy turns a page. "It restricts being *elected*. There is an argument about being *installed*. It is a bad argument."',
  choices: [
    { label: 'Float it. Sell the hats. See who objects.',
      eff:{base: +8,courts: -8,congress: -7,press:-5,street: -7,auth: +12},breaks:'termlimit',
      res: 'The hats sell out in four hours. Eleven senators of your own party say nothing at all, and their silence is the actual news.' },
    { label: '"I\'ll follow the Constitution." Say it once. Never again.',
      eff:{press: +6,courts: +6,congress: +5,base: -6,auth: -4},
      res: 'A single clean sentence, delivered without conviction, that buys you six months of nobody asking.' },
    { label: 'Have a friendly state legislature pass a resolution requesting it.',
      eff:{base: +8,courts: -6,congress: -5,press:-4,auth: +14},breaks:'termlimit',
      res: 'You did not ask for it. It was requested. By a legislature. This distinction will be the load-bearing wall of the entire argument.', flag: 'thirdTerm' }
  ,
    { label:'Announce you\'re running for mayor of a small town instead.', eff:{base:+3,congress:+2,auth:-2}, wild:true,
      res:'You are entirely serious for about nine days. A town of four thousand in Nebraska experiences the strangest fortnight in its history.' }]
},

{
  id: 'governor-arrest', title: 'The Governor', who: C.ag, min: 32, max: 48,
  tags: ['power','courts'],
  text: '"We have an indictment ready for a sitting opposition governor. The underlying conduct is a real thing that ' +
        'probably happened and that nobody has ever been charged with before. It would be the first arrest of its kind."',
  choices: [
    { label: 'Arrest her. Morning raid. Cameras present.',
      eff:{base: +4,courts: -13,press:-5,street: -14,congress: -9,auth: +16},
      res: 'Her state does not recognise the indictment. For nine days there are two governments claiming the same territory and nobody is certain who the state police answer to.' },
    { label: 'Indict quietly. No raid. Let it grind through court.',
      eff:{base: +4,courts: -7,press:-4,street: -6,auth: +11},
      res: 'Two years of hearings destroy her politically without producing a single image anyone can rally around. This is the crueller version.' },
    { label: 'Bury it. Not yet.',
      eff:{courts: +8,press: +7,street: +8,base: -7,auth: -4},
      res: 'Bo puts the file in a drawer. The drawer is not locked. Everyone knows which drawer.' }
  ,
    { label:'Invite her to dinner instead. Just the two of you.', eff:{base:-9,congress:+3,courts:+4,press:+4,street:+4,auth:-3}, wild:true,
      res:'Three hours, no aides, no phones. Neither of you ever says what was discussed. Both administrations become measurably easier to deal with afterwards.' }]
},

{
  id: 'nomenclature', title: 'Nomenclature', who: C.cos, min: 20, max: 48,
  tags: ['vanity','levity'],
  text: '"Requests to rename things after you: eleven airports, a mountain, four highways, a federal courthouse, ' +
        'an aircraft carrier, and, this one came from a fourth grader, the moon."',
  choices: [
    { label: 'All of them. Including the moon. Especially the moon.',
      eff:{base: +8,press: -5,street: -4,courts: -3,auth: +6},
      res: 'The moon renaming is symbolic and unenforceable, which describes roughly 60% of your executive output and none of its effect.' },
    { label: 'Just the airport. Modest. Presidential.',
      eff:{base: +5,press: -2,auth: +3},
      res: 'Forty million people a year now say your name involuntarily while rebooking a connection.' },
    { label: 'Decline all of it. Name them after veterans.',
      eff:{press: +6,street: +5,congress: +4,base: -3,auth: -1},
      res: 'A genuinely graceful act. It is covered for one news cycle and then forgotten, as grace is.' }
  ,
    { label:'Rename the moon after the fourth grader who asked.', eff:{base:+3,auth:-2}, wild:true,
      res:'Her name is Priya. It is symbolic and unenforceable and she is nine and it is on the news for four days and she is the happiest person in America.' }]
},

{
  id: 'cabinet-praise', title: 'The Cabinet Meeting', who: C.vp, min: 16, max: 48,
  tags: ['vanity','base'],
  text: 'Chet has suggested opening the televised Cabinet meeting by going around the table so each Secretary can ' +
        'say what serving you has meant to them. He says it "humanises the team." He is looking directly at you.',
  choices: [
    { label: 'Do it. Go around twice.',
      eff:{base: +6,press: -5,street: -5,congress: -4,auth: +5},
      res: 'Forty-one minutes of grown adults thanking a man for the privilege of employment. It airs live. Somewhere, a comparative politics professor pauses the tape and says "there it is" out loud.' },
    { label: 'Do it, but cut it after four.',
      eff:{base: +5,press: -3,auth: +3},
      res: 'Four is enough to establish the norm without generating the full supercut.' },
    { label: '"We\'re not doing that. Report on your agencies."',
      eff:{press: +7,congress: +4,base: -4,auth: -3},
      res: 'The meeting is productive, informative, and Chet spends the whole thing writing in a small notebook.' }
  ,
    { label:'Go round the table and have each of them criticise you instead.', eff:{base:-6,congress:+3,courts:+2,press:+3,street:+3,auth:-2}, wild:true,
      res:'Twenty-two officials say one true critical thing on live television. Four of them are extremely specific. It is the best cabinet meeting any president has ever held.' }]
},

{
  id: 'purge-generals', title: 'The Officer Corps', who: C.gen, min: 26, max: 48,
  tags: ['military','power'],
  text: '"You\'ve asked for a review of the senior officer corps by \'alignment.\' I want to be clear about what I am hearing. ' +
        'You are asking me to hand you a list of officers by loyalty. I have served 38 years. I will not write that list."',
  choices: [
    { label: 'Fine. Retire him. Someone else will write it.',
      eff:{base: +3,street: -11,courts: -6,congress: -8,press: -5,auth: +15},
      res: 'Someone else writes it in four days. Eleven flag officers retire in a month. The chain of command now runs through people who were selected for what they would not refuse.' },
    { label: 'Withdraw the request. Keep Tarrant.',
      eff:{street: +9,congress: +7,press: +6,courts: +5,base: -7,auth: -6},
      res: 'He does not thank you. He simply goes back to work, which is the highest compliment available in his profession.' },
    { label: 'Keep Tarrant. Build the list through the civilian side.',
      eff:{street: -5,congress: -4,press: -4,auth: +10},
      res: 'The list exists. Tarrant does not know it exists. He will find out at the worst possible moment for both of you.' }
  ,
    { label:'Ask Tarrant for the list of officers who would refuse an unlawful order.', eff:{base:-8,congress:+3,courts:+3,press:+3,street:+4,auth:-4}, wild:true,
      res:'He writes it in nine minutes. It has four hundred and eleven names on it. He hands it over and says \'this is the good list, sir,\' and he is right.' }]
},

{
  id: 'emergency-standing', title: 'The Emergency', who: C.lawyer, min: 24, max: 48,
  tags: ['power'],
  text: '"There are 41 statutory powers that unlock during a declared national emergency. You have declared six emergencies. ' +
        'None has ever been terminated. Sir, under the law, only you can end them."',
  choices: [
    { label: 'Declare a seventh. Consolidate all of them under one order.',
      eff:{base: +5,congress: -9,courts: -10,press: -5,street: -7,auth: +15},
      res: 'One order, 41 powers, indefinite duration, terminable only by the beneficiary. Nobody voted on this. Everyone voted for the people who declined to stop it.' },
    { label: 'Let two lapse. Keep the useful ones.',
      eff:{congress: -3,courts: -3,press: +3,auth: +7},
      res: 'The two you let lapse were the two nobody was using. This is called good housekeeping.' },
    { label: 'End all of them. Govern like it\'s a Tuesday.',
      eff:{congress: +10,courts: +11,press: +9,street: +8,base: -10,auth: -10},
      res: 'You have voluntarily surrendered more power than any president in living memory. It will not be reported for eleven days.' }
  ,
    { label:'Declare a national emergency about the emergencies.', eff:{base:+2,congress:-8,courts:-8,press:-6,auth:+6}, wild:true,
      res:'A meta-emergency, declared under emergency powers, concerning the number of emergencies. It unlocks four further authorities. Nobody can determine whether this is legal.' }]
},

{
  id: 'succession-plan', title: 'The Understudy', who: C.cos, min: 30, max: 48,
  tags: ['base','succession'], req: r => r.meters.base > 78,
  text: '"Your approval within the party is 94%. Chet\'s is 91%. He has not campaigned. He has not spent a dollar. ' +
        'Sir, when a movement gets this large it stops needing a person and starts needing a face, and faces are replaceable."',
  choices: [
    { label: 'Drop him from the ticket. Publicly. Brutally.',
      eff:{base: -13,press: +5,congress: -6,auth: +5},
      res: 'He goes gracefully, gives one speech, and becomes a martyr with 91% approval and no responsibilities. This may have been the worse option.' },
    { label: 'Bind him tighter. Give him everything he asks for.',
      eff:{base: +7,congress: +4,auth: -5},
      res: 'He now has a portfolio, a staff and a constituency. You have built him an administration inside your administration.' },
    { label: 'Have him investigated. Quietly. By people who owe you.',
      eff:{base: -6,press: -5,courts: -4,auth: +8},
      res: 'Nothing is found because there is nothing to find. He learns about the investigation on day two, from a friend, and says nothing at all about it, ever.' }
  ,
    { label:'Make Chet ambassador to a country that is mostly ice.', eff:{base:-6,congress:-4,press:+2,auth:+6}, wild:true,
      res:'He accepts with enormous grace, serves brilliantly, and returns in three years with a tan, a book deal and the support of four northern states.' }]
},

/* ══════════════ SECOND TERM ONLY (term: 2) ══════════════
   Material that only makes sense once you have already done four years and
   there is no next election you are eligible for. */

{
  id: 'st-no-ballot', title: 'No Next Ballot', who: C.poll, term: 2, min: 2, max: 30,
  tags: ['power','base'],
  text: '"Every projection I have ever built for you had a variable in it called \'the next election.\' ' +
        'I have removed it." Nadia turns the laptop around. There is a lot of white space. ' +
        '"Sir, I don\'t know what this model is for any more."',
  choices: [
    { label: '"Then stop modelling. Start scheduling."',
      eff:{base: +4,congress: -8,courts: -9,press:-5,street: -8,auth: +13},
      res: 'Polling is downgraded from a constraint to a courtesy. Within a month nobody in the building can tell you what the country thinks, and nobody is asking.' },
    { label: 'Keep polling. Knowing is still worth something.',
      eff:{press: +5,street: +5,congress: +4,base: -3,auth: +2},
      res: 'You remain the best-informed authoritarian in the building, which turns out to be a genuine competitive advantage.' },
    { label: 'Poll one question only: would they accept a third term?',
      eff:{base: +6,press:-4,street: -5,courts: -4,auth: +8},
      res: 'Thirty-one percent yes. Nadia calls it catastrophic. You note that thirty-one percent is roughly the turnout of the last three primaries combined.', flag: 'thirdPolled' }
  ,
    { label:'Hold a fake election against a cardboard cutout. Lose.', eff:{base:+3,courts:-4,press:+1,street:+1,auth:-2}, wild:true,
      res:'You lose to the cutout by nine points in a poll of your own supporters. You laugh it off. You think about it for a considerable time afterwards.' }]
},

{
  id: 'st-lame-duck', title: 'The Word', who: C.speaker, term: 2, min: 6, max: 34,
  tags: ['congress','power'],
  text: 'Hal Grimes used the phrase "lame duck" on a hot mic. He has apologised four times in eleven minutes. ' +
        'He is not wrong, and everybody in the chamber has done the same arithmetic he has.',
  choices: [
    { label: 'Primary him. Announce it from the podium, by name.',
      eff:{base: +9,congress: -11,press: -5,auth: +7},
      res: 'He retires rather than lose. The next Speaker has watched the whole thing and has no independent opinions whatsoever.' },
    { label: '"He\'s right. Which is why we finish it this year."',
      eff:{base: +6,congress: +5,courts: -5,street: -4,auth: +9},
      res: 'You have converted your own expiry date into a deadline. Everything moves faster, including the things that should not.' },
    { label: 'Let it go. Ducks can still sign things.',
      eff:{congress: +7,press: +5,base: -5,auth: +1},
      res: 'Magnanimity reads as weakness to precisely the people you need to be afraid of you.' }
  ,
    { label:'Get an actual duck. Put it in the Oval Office.', eff:{base:+3,press:-1,street:-1,auth:-2}, wild:true,
      res:'A live duck named Amendment. It stays for the remainder of the term and is the only member of the administration never accused of anything.' }]
},

{
  id: 'st-library', title: 'The Library', who: C.lawyer, term: 2, min: 10, max: 38,
  tags: ['money','vanity'],
  text: '"Your presidential library. Four hundred million, privately raised, no disclosure requirements, ' +
        'and every settlement you have ever won is already earmarked for it." Sy pauses. ' +
        '"It is, structurally, the single cleanest way to be given money in American public life."',
  choices: [
    { label: 'Build it. Take foreign donations. Publish nothing.',
      eff:{base:-2,press:-5,congress: -6,courts: -5,cash: +1.3,auth: +5},
      res: 'Eleven governments donate. None of them are asked why. The building has a ballroom, which is not a standard library feature.' },
    { label: 'Build it and disclose every donor.',
      eff:{press: +8,congress: +5,courts: +4,cash: +0.3,base: -3},
      res: 'The disclosure is dull, complete, and quietly the most reassuring document your administration ever produces.' },
    { label: 'Skip the library. Build a monument instead.',
      eff:{base: +8,press:-4,street: -5,congress: -4,cash: -0.4,auth: +4},
      res: 'Two hundred feet of granite with your profile on it, on federal land, funded by a rider nobody read. It will outlast every executive order you signed.' }
  ,
    { label:'Build it, fill it with real books, and let anyone in.', eff:{base:+1,congress:+3,street:+1,auth:-2,cash:-0.4}, wild:true,
      res:'Four hundred thousand volumes, free public access, open seven days. It becomes the best-used building in the state and outlives every argument about you.' }]
},

{
  id: 'st-old-guard', title: 'The Ones Who Stayed', who: C.cos, term: 2, min: 8, max: 36,
  tags: ['agencies','power'],
  text: '"Eleven thousand career officials survived the first term by keeping their heads down and their ' +
        'paperwork perfect. They are the reason anything still functions." Deborah sets down the list. ' +
        '"They are also the reason some things didn\'t."',
  choices: [
    { label: 'Reclassify all eleven thousand. Replace them.',
      eff:{base: +4,congress: -8,courts: -10,press:-5,street: -9,auth: +15},
      res: 'The government loses four hundred years of institutional memory in a fortnight and gains a workforce with no memory at all, which was the specification.' },
    { label: 'Promote the ones who never objected. Retire the rest.',
      eff:{courts: -5,press:-4,street: -4,auth: +10},
      res: 'No firings, no lawsuits, no story. Just a promotion ladder that selects, invisibly and permanently, for silence.' },
    { label: 'Leave them. Somebody has to know where things are.',
      eff:{congress: +6,courts: +7,street: +6,press: +5,base: -7,auth: -4},
      res: 'The trains run, the cheques clear, the reports get written. It is the least glamorous decision available and it is why the country still works.' }
  ,
    { label:'Promote all eleven thousand. One grade. Everyone.', eff:{base:-4,congress:+3,courts:+2,press:+1,street:+3,auth:-2}, wild:true,
      res:'It costs $400 million and buys the loyalty of the entire permanent government. It is the cheapest thing you ever buy and nobody outside the building notices.' }]
},

{
  id: 'st-successor', title: 'The Anointing', who: C.vp, term: 2, min: 20, max: 44,
  tags: ['succession','base'],
  text: 'Chet Danforth would like your endorsement for the next cycle. He has brought a draft of the ' +
        'statement. It is written in your voice. It is very good. He has clearly had it for some time.',
  choices: [
    { label: 'Sign it. He owes you the office for the rest of his life.',
      eff:{base: +10,congress: +6,press: +3,auth: -8},
      res: 'Gratitude is the shortest-lived emotion in politics. You have just handed away the only thing anybody in this town was still afraid of.' },
    { label: 'Refuse. Endorse nobody. Keep them all guessing.',
      eff:{base: -5,congress: +7,courts: -3,auth: +9},
      res: 'Six candidates now need something from you weekly. An unspent endorsement is worth more than a spent one, every single time.' },
    { label: '"There isn\'t going to be a next cycle, Chet."',
      eff:{base: +3,congress: -9,courts: -8,press: -5,street: -8,auth: +14},
      res: 'He laughs. You do not. The silence that follows is nine seconds long and both of you will remember it for the rest of your lives.', flag: 'toldChet' }
  ,
    { label:'Endorse a person who does not exist and see how far it gets.', eff:{base:+2,congress:-8,press:-6,auth:+4}, wild:true,
      res:'\'Governor Ray Halloway\' polls at 22% within a fortnight and receives $9 million in donations before anybody establishes that he is not a person.' }]
},

{
  id: 'st-machine-runs', title: 'Nobody Asked', who: C.cos, term: 2, min: 14, max: 44,
  tags: ['power'],
  text: '"Three agencies did something this week that we did not order. They did it because they worked out ' +
        'what we would have wanted." Deborah looks genuinely unsettled for the first time in eight years. ' +
        '"Sir, it is running without us now."',
  choices: [
    { label: 'Excellent. Stop giving orders entirely.',
      eff:{base: +2,congress: -7,courts: -9,press:-5,street: -9,auth: +14},
      res: 'An administration that requires no instructions cannot be caught giving one. There is no memo to subpoena because there was never a memo.' },
    { label: 'Rein it in. An order you didn\'t give is a liability.',
      eff:{courts: +7,press: +6,congress: +5,base: -4,auth: -3},
      res: 'You spend a fortnight telling the government to do less. It is the strangest work of your career and it is not fully successful.' },
    { label: 'Write it down. Formalise it as policy. Own it.',
      eff:{base: +6,courts: -7,press:-4,street: -5,auth: +9},
      res: 'What was deniable is now signed. It is stronger, faster, and there is now a document with your name at the bottom of it.' }
  ,
    { label:'Give one deliberately absurd order and see if it gets carried out.', eff:{base:+1,congress:-6,courts:-8,press:-6,auth:+7}, wild:true,
      res:'You order every federal building repainted a specific shade of beige. Four hundred are repainted before anybody asks why. Now you know exactly what you have built.' }]
},

{
  id: 'referendum', title: 'The Question', who: C.cos, min: 36, max: 48,
  tags: ['elections','power'],
  text: '"A national referendum on \'continuity of leadership during a period of emergency.\' Non-binding. Advisory. ' +
        'A yes vote wouldn\'t change the law." She pauses. "It would change what the law is for."',
  choices: [
    { label: 'Hold it. Write the question yourself.',
      eff:{base: +7,courts: -10,congress: -8,press:-5,street: -9,auth: +18},
      res: 'It passes 54–46 on 31% turnout. The number is now cited in every filing as "the expressed will of the American people." It is not binding. Nothing needs to be binding any more.' },
    { label: 'Hold it in friendly states only. As a pilot.',
      eff:{base: +6,courts: -5,press:-4,street: -4,auth: +11},
      res: 'Nine states vote yes overwhelmingly. Nine states is not a country, but nine states is a precedent, and precedent is the only currency left.' },
    { label: 'Cancel it. Too naked.',
      eff:{courts: +7,press: +6,congress: +5,street: +5,base: -6,auth: -6},
      res: 'Deborah agrees, which is somehow more alarming than if she had argued.' }
  ,
    { label:'Hold the referendum, but on whether referendums should be held.', eff:{base:+2,congress:-6,courts:-6,press:-6,auth:+6}, wild:true,
      res:'It passes 61-39. Nobody can establish what has been decided, including the people who ran it, and the result is cited by both sides for a decade.' }]
}

];

/* ---------- Deck helpers -------------------------------------------------- */

/* min/max are TERM-relative, so a second term replays the same arc, early
   honeymoon material, then the machinery, then consolidation, rather than
   falling off the end of every window at month 49. */
AD.eligible = function (run) {
  const m = AD.termMonth(run);
  return AD.CARDS.filter(c => {
    if (run.seen.indexOf(c.id) !== -1) return false;
    if (c.min && m < c.min) return false;
    if (c.max && m > c.max) return false;
    if (c.term && c.term > run.term) return false;   // second-term-only material
    if (c.req && !c.req(run)) return false;
    return true;
  });
};

/* ---------- clause surfacing ------------------------------------------------
   See the long note inside pickCard. CLAUSE_WEIGHT is the gentle nudge while
   you are merely breaking things; CLAUSE_WEIGHT_MAX is what the deck does once
   it is convinced you are going for all sixteen. */
AD.CLAUSE_WEIGHT     = 14;   // base weight is 10, so this is a ~2.4x nudge
AD.CLAUSE_WEIGHT_MAX = 110;  // scarcity-scaled ceiling, for a 3-route clause
AD.CLAUSE_RAMP_AT    = 3;    // clauses broken before the deck starts helping

/* How many choices in the whole deck break each clause. Computed once, lazily,
   because the content packs are still loading when this file is evaluated. */
AD._routes = null;
AD.clauseRoutes = function () {
  if (AD._routes) return AD._routes;
  const r = {};
  AD.CLAUSES.forEach(c => { r[c.id] = 0; });
  AD.CARDS.forEach(card => (card.choices || []).forEach(ch => {
    if (!ch.breaks) return;
    (Array.isArray(ch.breaks) ? ch.breaks : [ch.breaks]).forEach(id => {
      r[id] = (r[id] || 0) + 1;
    });
  }));
  AD._routes = r;
  return r;
};

/* Weighted pick: prefer cards whose tags touch whichever meters are volatile,
   so the deck feels responsive rather than random. */
AD.pickCard = function (run) {
  const pool = AD.eligible(run);
  if (!pool.length) return null;

  const weights = pool.map(c => {
    let w = 10;
    /* Surface crises about institutions that are IN crisis, a collapsing
       branch generates news. Deliberately asymmetric: an earlier version also
       boosted meters NEAR CAPTURE, which with a 300-card deck handed the
       player a ladder every single turn and pushed optimal play to a 96% win
       rate. The deck helps you survive; it must not help you climb. */
    (c.tags || []).forEach(t => {
      const m = { press: 'press', courts: 'courts', congress: 'congress',
                  street: 'street', base: 'base' }[t];
      if (m && !run.locked[m]) {
        const v = run.meters[m];
        if (v < 30) w += 9;
        else if (v > 90) w += 3;   // a branch on the brink is newsworthy, mildly
      }
    });
    /* Once the player has started breaking clauses, surface the cards that
       offer one they have not broken yet. Without this the full set is
       statistically unreachable: tagged choices spread over 370 cards mean a
       dedicated hunter averages 6 of 16 and completes the set ~0% of runs.

       Two refinements on top of the flat +14, both measured:

       1. IT RAMPS. Below CLAUSE_RAMP_AT broken clauses the bonus stays at the
          old flat value, so ordinary play is untouched. At or above it the
          deck concludes you are collecting and starts actively feeding you.
          A flat strong bonus from the first clause cost Rookie 8 points of
          win rate, the clause cards are aggressive, and pushing them at a
          player who is not hunting just damages their institutions.

       2. IT SCALES WITH SCARCITY. A clause with three routes in the whole
          deck needs far more help than one with five, so the bonus is
          divided by the route count. This also self-corrects: add routes for
          a starved clause later and its bonus drops automatically.

       Hunter bot, 200 runs: 7.5 -> 10.6 clauses average, full set 0% -> 3.5%,
       best run 15 -> 16. Ordinary play unchanged (Rookie 68.5% -> 71.0%). */
    if (run.clauses && run.clauses.length) {
      const strong = run.clauses.length >= AD.CLAUSE_RAMP_AT;
      let bonus = 0;
      c.choices.forEach(ch => {
        if (!ch.breaks) return;
        const ids = Array.isArray(ch.breaks) ? ch.breaks : [ch.breaks];
        ids.forEach(id => {
          if (run.clauses.indexOf(id) !== -1) return;
          const b = strong
            ? Math.min(AD.CLAUSE_WEIGHT_MAX,
                       Math.round(AD.CLAUSE_WEIGHT_MAX * 3 / (AD.clauseRoutes()[id] || 1)))
            : AD.CLAUSE_WEIGHT;
          if (b > bonus) bonus = b;
        });
      });
      w += bonus;
    }

    if ((c.tags || []).indexOf('power') !== -1 && run.authority > 40) w += 6;
    if ((c.tags || []).indexOf('levity') !== -1) w += AD.termMonth(run) < 14 ? 4 : -3;
    if (c.term === 2) w += 14;                       // surface second-term material
    return Math.max(1, w);
  });

  let total = weights.reduce((a, b) => a + b, 0);
  let roll = AD.rng() * total;
  for (let i = 0; i < pool.length; i++) {
    roll -= weights[i];
    if (roll <= 0) return pool[i];
  }
  return pool[pool.length - 1];
};
