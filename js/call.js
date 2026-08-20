/* ============================================================
   AMERICAN DICTATOR, call.js
   THE PHONE, executive time.

   A screen with three address books, Allies, The Press, Enemies,
   and a long list of people to call under each. Pick who, pick what
   to say, and the country's ratings move accordingly.

   Each person in the address book has their OWN bespoke set of call
   options (AD.CALL_BOOK[i].opts), written for who they specifically
   are, not one generic menu reused for everybody. Most options are
   small nudges on the meters, a couple per person are a genuine big
   swing (`major: true`) that can also blow up in your face.

   The register is deliberate: the President speaks in the bombastic,
   superlative, grievance-and-greatness voice the brief asks for. It
   is a STYLE, not a person, every name in the address book is
   fictional, like everything else in the game.

   Calls are free but rationed: three a month (AD.CALLS_PER_MONTH),
   refilled each time the clock ticks, so the phone is a monthly
   decision and not a base-farming button. Effects on the METERS are
   smaller than a policy card's, it is a phone call, not an executive
   order.

   THE PHONE IS THE BOREDOMETER LEVER. Executive time is the one thing
   the President actually enjoys: working the phones, picking fights,
   being flattered, being listened to. So calls are the primary way to
   bring boredom back down, and a big-swing call is worth several dull
   afternoons of governing. If the Boredometer is climbing, this is the
   room you are meant to come to.
   ============================================================ */

AD.CALLS_PER_MONTH = 3;

/* Fictional address book. `cat`: 'ally' | 'press' | 'enemy'.
   Each entry carries `opts`, an array of 3 (occasionally 4) bespoke
   call options: { label, icon, major?, eff:{...}, line }. Effect keys
   are limited to base, congress, courts, press, street, auth, cash. */
AD.CALL_BOOK = [
  // ---- allies ----
  {
    id: 'vp', cat: 'ally', name: 'Vice President Danforth', note: 'loyal, mostly',
    opts: [
      { label: 'Reassure Him He\'s Your Guy', icon: '🤝', eff: { congress: 3, base: 1 },
        line: '"You\'re my guy, the best VP anybody has ever had, total loyalty, they don\'t know how good they have it with you."' },
      { label: 'Send Him on a Ribbon-Cutting Trip', icon: '✈️', eff: { base: 2, congress: 1, press: -1 },
        line: '"Get on a plane, go shake some hands somewhere, cut a ribbon, very important, tremendous work, everybody will love it."' },
      { label: 'Threaten to Drop Him from the Ticket', icon: '⚠️', major: true, eff: { base: 6, congress: -8, press: -2, auth: 2 },
        line: '"Just, casually, mention there\'s a lot of interest in other names for the ticket, keeps him sharp, very sharp, nothing personal, probably."' },
      { label: 'Give Him a Real Assignment', icon: '📋', eff: { congress: 2, courts: 1, base: 1 },
        line: '"Tell him to go handle the border, or the deficit, whatever, put him to work, real work, historic work."' }
    ]
  },
  {
    id: 'cos', cat: 'ally', name: 'Chief of Staff Krank', note: 'holding it together',
    opts: [
      { label: 'Ask for the Overnight Numbers', icon: '📊', eff: { congress: 2, press: 1, base: 1 },
        line: '"Give me the numbers, the real ones, not the fake ones the pollsters make up, I want the truth, if it\'s good."' },
      { label: 'Tell Him to Leak Something Flattering', icon: '🤫', eff: { press: 3, base: 1 },
        line: '"Get a story out there, background only, about what a genius this whole thing has been, my idea, all of it."' },
      { label: 'Order a Staff Purge', icon: '🔥', major: true, eff: { base: 7, congress: -5, press: -3, auth: 3 },
        line: '"Clean house, fire somebody, fire everybody, doesn\'t matter who, we need loyalty, total loyalty, starting today."' }
    ]
  },
  {
    id: 'broom', cat: 'ally', name: 'Czar Vandermeer', note: 'the efficiency man',
    opts: [
      { label: 'Ask for a Progress Report', icon: '📎', eff: { congress: 1, base: 2, courts: -1 },
        line: '"Give me the numbers on the waste, the fraud, the incredible amounts of money we\'re saving, tremendous numbers, believe me."' },
      { label: 'Tell Him to Cut Something Small', icon: '✂️', eff: { base: 3, street: -2, cash: 0.3 },
        line: '"Cut it, whatever it is, some little department nobody has heard of, big savings, the biggest, people will be thrilled."' },
      { label: 'Unleash Him on a Whole Department', icon: '🪓', major: true, eff: { base: 7, street: -4, congress: -2, cash: 0.5, auth: 2 },
        line: '"Go in there and gut the whole thing, top to bottom, the most efficient operation anybody has ever seen, historic, honestly."' }
    ]
  },
  {
    id: 'pastor', cat: 'ally', name: 'Reverend Muncy', note: 'says grace at rallies',
    opts: [
      { label: 'Ask Him to Bless the Rally', icon: '🙏', eff: { base: 3, street: 1 },
        line: '"Reverend, get up there, say a few words, the good words, the crowd loves you, almost as much as they love me."' },
      { label: 'Have Him Pray for Your Enemies, Loudly', icon: '😇', eff: { base: 2, press: -1, street: 1 },
        line: '"Pray for them, real loud, real public, let everybody hear how much they need it, they need it badly."' },
      { label: 'Send Him to Court the Churches', icon: '⛪', major: true, eff: { base: 7, street: 4, press: -3, courts: 2 },
        line: '"Get out there and lock down every church in the country, tell them I\'m the most religious President anybody has ever had, ever."' }
    ]
  },
  {
    id: 'anchor', cat: 'ally', name: 'Brick Tandy', note: 'your favourite anchor',
    opts: [
      { label: 'Feed Him Tonight\'s Talking Points', icon: '📝', eff: { press: 2, base: 2 },
        line: '"Brick, tonight say the economy is the best it\'s ever been, the numbers are incredible, everybody\'s saying it, write that down."' },
      { label: 'Ask Him to Go Easy on a Story', icon: '🙈', eff: { press: 2, courts: -1, base: 1 },
        line: '"Bury it, just a little, doesn\'t have to lead, doesn\'t have to lead at all actually, you know what I like."' },
      { label: 'Have Him Run a Primetime Special on You', icon: '📺', major: true, eff: { base: 8, press: 5, congress: 2, auth: 2 },
        line: '"One hour, prime time, all about me, the greatest story ever told, and Brick, you\'re the only one who can tell it right."' }
    ]
  },
  {
    id: 'volkov', cat: 'ally', name: 'President Volkov', note: 'of Russia; a strong guy',
    opts: [
      { label: 'Trade Compliments', icon: '🥂', eff: { base: 2, press: -1, courts: -1 },
        line: '"Strong guy, real strong, we understand each other, the two strongest guys anywhere, everybody says it."' },
      { label: 'Compare Notes on Handling the Press', icon: '🗞️', eff: { base: 3, press: -3 },
        line: '"He tells me how he deals with reporters over there, very effective, very, very effective, I\'m taking notes, good notes."' },
      { label: 'Announce a Big New Deal With Him', icon: '🤝', major: true, eff: { base: 7, congress: -4, press: -3, courts: -2, cash: 0.5, auth: 1 },
        line: '"We\'re making a deal, a big one, the biggest, nobody thought two strong guys could get this done, we got it done."' }
    ]
  },
  {
    id: 'son', cat: 'ally', name: 'Trent Jr.', note: 'the boy',
    opts: [
      { label: 'Let Him Vent About the Deal', icon: '📱', eff: { base: 2, street: 1 },
        line: '"Fine, fine, tell me about the deal again, terrific deal, you got a great deal, everybody\'s proud of you, son."' },
      { label: 'Send Him Out to the Rally Crowd', icon: '🎤', eff: { base: 3, street: 2, press: -1 },
        line: '"Get out there and warm them up, tell them about your father, the greatest father, the crowd will go wild for you, wild."' },
      { label: 'Let Him Announce His Own Business Venture', icon: '💼', major: true, eff: { base: 5, cash: 0.5, press: -4, courts: -3, auth: 1 },
        line: '"Fine, fine, go ahead, announce it, tremendous business, the best business, we\'ll deal with the lawyers later, probably."' }
    ]
  },

  // ---- the press ----
  {
    id: 'beacon-ed', cat: 'press', name: 'Editor of The Beacon', note: 'enemy of the people',
    opts: [
      { label: 'Scream Fake News', icon: '📢', eff: { base: 3, press: -2 },
        line: '"You are fake news, the fakest, everybody knows The Beacon makes it up, total fiction, and your readers are dropping like flies."' },
      { label: 'Dangle an Exclusive', icon: '🎁', eff: { press: 3, base: -1 },
        line: '"Tell you what, you get the exclusive, the big one, first, before anybody, see, I can be very generous, very generous."' },
      { label: 'Threaten Their Broadcast Licence', icon: '📡', major: true, eff: { press: -6, courts: -4, base: 5, auth: 3 },
        line: '"Somebody should look at that licence of theirs, very carefully, very, very carefully, a disgrace what they put on the air."' }
    ]
  },
  {
    id: 'meridian-a', cat: 'press', name: 'Anchor at The Meridian', note: 'fake news, low ratings',
    opts: [
      { label: 'Mock the Ratings', icon: '📉', eff: { base: 3, press: -2 },
        line: '"Nobody watches you, nobody, the ratings are a disaster, an embarrassment, and everybody in this country knows it."' },
      { label: 'Offer a Softball Interview', icon: '🎙️', eff: { press: 3, base: 1 },
        line: '"Come on in, sit down, easy questions only, we\'ll get those ratings up together, you\'ll thank me later, believe me."' },
      { label: 'Call Their Advertisers', icon: '☎️', major: true, eff: { press: -5, cash: 0.3, courts: -3, base: 4, auth: 2 },
        line: '"Somebody should tell their advertisers what a mess that show is, a total mess, they\'d be smart to pull out, very smart."' }
    ]
  },
  {
    id: 'wire', cat: 'press', name: 'The Wire Service Desk', note: 'they get it wrong',
    opts: [
      { label: 'Correct the Record, Loudly', icon: '📣', eff: { base: 3, press: -2 },
        line: '"They got it wrong, completely wrong, again, the Wire always gets it wrong, worst reporting anybody has ever seen."' },
      { label: 'Offer Them First Access', icon: '🎫', eff: { press: 3, courts: 1 },
        line: '"You\'ll be first in the room from now on, first, ahead of everybody, that\'s how we do things when people are fair to us."' },
      { label: 'Cut Off Their Press Pool Access', icon: '🚫', major: true, eff: { press: -5, courts: -3, base: 5, street: 1, auth: 3 },
        line: '"They\'re out, out of the pool, out of the briefing room, until they learn to report the truth, the real truth, my truth."' }
    ]
  },
  {
    id: 'gazette', cat: 'press', name: 'Publisher, Metro Gazette', note: 'failing, big trouble',
    opts: [
      { label: 'Call It Failing, Again', icon: '💀', eff: { base: 3, press: -2 },
        line: '"The Gazette is failing, everybody knows it\'s failing, big trouble over there, big, big trouble, sad, really."' },
      { label: 'Hint at a Buyer Who\'d Treat You Better', icon: '💰', eff: { press: -2, cash: 0.2, base: 2 },
        line: '"I know some people, very rich people, who\'d love to buy that paper and finally run it fairly, very fairly, for once."' },
      { label: 'Sue Them for Everything', icon: '⚖️', major: true, eff: { press: -5, courts: -5, cash: -0.4, base: 6, auth: 2 },
        line: '"We\'re suing, the biggest lawsuit anybody has ever filed against a newspaper, they\'ll regret ever printing a word about me."' }
    ]
  },
  {
    id: 'feed', cat: 'press', name: 'The Feed\'s Editors', note: 'they suppress you',
    opts: [
      { label: 'Accuse Them of Shadow-Banning You', icon: '👻', eff: { base: 3, press: -2 },
        line: '"They\'re suppressing me, shadow-banning, total censorship, my numbers should be even bigger, much bigger, if it weren\'t for them."' },
      { label: 'Ask for an Algorithm Favour', icon: '⚙️', eff: { press: 3, base: 1 },
        line: '"Just a little boost, in the algorithm, nothing crazy, put my posts up top where they belong, where people can see genius."' },
      { label: 'Threaten a Regulatory Crackdown', icon: '🏛️', major: true, eff: { press: -5, courts: -2, cash: -0.3, base: 6, auth: 3 },
        line: '"Somebody in this government should regulate that company into the ground, into the absolute ground, total menace to society."' }
    ]
  },
  {
    id: 'weekly', cat: 'press', name: 'The Republic Weekly', note: 'a total disaster',
    opts: [
      { label: 'Call Them a Disaster, Repeatedly', icon: '🗑️', eff: { base: 3, press: -2 },
        line: '"The Republic Weekly, a total disaster, a joke publication, nobody respects it, nobody, it\'s a disgrace, honestly."' },
      { label: 'Leak Them a Friendly Story', icon: '✉️', eff: { press: 3, base: 1 },
        line: '"I\'m going to give you something good, something big, print it exactly how I tell it and we\'ll get along just fine."' },
      { label: 'Threaten to Cut Off White House Access', icon: '🔒', major: true, eff: { press: -5, courts: -2, base: 5, auth: 3 },
        line: '"No more briefings, no more access, none, not until they learn some respect, real respect, for this office."' }
    ]
  },

  // ---- enemies ----
  {
    id: 'opp', cat: 'enemy', name: 'Leader Ruiz-Bloom', note: 'the opposition; sad',
    opts: [
      { label: 'Call Him Sad and Weak', icon: '😢', eff: { base: 4, congress: -2, press: -1 },
        line: '"He\'s sad, a sad man, weak, the weakest leader that party has ever had, and that is saying something, believe me."' },
      { label: 'Offer a Backroom Deal', icon: '🤐', eff: { congress: 3, base: -2 },
        line: '"Just between us, off the record, I could make this whole thing a lot easier for both of us, a lot easier, think about it."' },
      { label: 'Threaten to Primary His Whole Caucus', icon: '🎯', major: true, eff: { base: 7, congress: -5, press: -3, auth: 3 },
        line: '"Every single one of them, gone, primaried out, replaced with people who actually love this country, real Americans."' }
    ]
  },
  {
    id: 'gov', cat: 'enemy', name: 'Governor Vasquez-Moore', note: 'running her state into the ground',
    opts: [
      { label: 'Blame Her for Everything Local', icon: '🏚️', eff: { base: 4, street: -2, press: -1 },
        line: '"Her state is a disaster, total disaster, running it right into the ground, and everybody there knows exactly whose fault that is."' },
      { label: 'Offer Federal Aid, Publicly, With Strings', icon: '📦', eff: { street: 3, cash: -0.3, congress: 1 },
        line: '"I\'ll send federal money, a lot of it, the most anybody\'s ever sent, but she\'s going to have to say thank you, on camera."' },
      { label: 'Threaten to Federalize Her National Guard', icon: '🪖', major: true, eff: { base: 7, street: -4, courts: -3, auth: 4 },
        line: '"If she can\'t handle her own state I\'ll send in the Guard myself, federalize the whole thing, somebody has to be in charge."' }
    ]
  },
  {
    id: 'judge', cat: 'enemy', name: 'so-called Judge Vane', note: 'a disgrace to the robe',
    opts: [
      { label: 'Attack Him by Name', icon: '👨‍⚖️', eff: { base: 4, courts: -2, press: -1 },
        line: '"So-called Judge Vane, a disgrace to the robe, everybody in the legal community says so, a total disgrace, an embarrassment."' },
      { label: 'Question His Impartiality on TV', icon: '📺', eff: { base: 3, courts: -2 },
        line: '"How can anybody trust a ruling from a man like that, biased, totally biased, everybody can see it, everybody."' },
      { label: 'Hint at Impeachment', icon: '⚡', major: true, eff: { base: 6, courts: -5, congress: -2, press: -2, auth: 3 },
        line: '"Maybe it\'s time somebody in Congress looked into impeaching that judge, seriously looked into it, he has left us no choice."' }
    ]
  },
  {
    id: 'chen', cat: 'enemy', name: 'Chairman Chen', note: 'of China; very tough',
    opts: [
      { label: 'Call and Just Breathe', icon: '😤', eff: { base: 1, press: 1 },
        line: 'Forty seconds of silence on an open line, just breathing, to let him know who he\'s dealing with. Nobody is quite sure what it accomplished.' },
      { label: 'Flatter Him Toward a Deal', icon: '🐉', eff: { press: 2, base: -2, cash: 0.3 },
        line: '"Very brilliant man, very tough, we respect each other, and I think, I really think, we can make a deal, a beautiful deal."' },
      { label: 'Complain About the Trade Deficit', icon: '📉', eff: { base: 3, cash: -0.2, congress: -1 },
        line: '"The deficit with him is a disaster, the worst deal anybody has ever agreed to, and I inherited it, all of it, not my fault."' },
      { label: 'Threaten 200% Tariffs', icon: '🚢', major: true, eff: { base: 8, cash: -0.6, congress: -3, press: -2, courts: -1, auth: 2 },
        line: '"Two hundred percent tariffs, on everything, starting now, nobody has ever hit them this hard, this is the toughest anybody has ever been."' }
    ]
  },
  {
    id: 'ostrov', cat: 'enemy', name: 'Premier Ostrov', note: 'of Iran; not a friend',
    opts: [
      { label: 'Warn Him Sternly', icon: '☎️', eff: { base: 4, press: -1 },
        line: '"I told him, very clearly, do not test us, do not, nobody has ever spoken to him the way I just spoke to him."' },
      { label: 'Offer Backchannel Talks', icon: '🕊️', eff: { press: 2, base: -2, courts: 1 },
        line: '"Quietly, just to see, maybe there\'s a deal in there somewhere, I make the best deals, everybody knows that about me."' },
      { label: 'Threaten Military Action', icon: '💥', major: true, eff: { base: 8, street: -4, press: -3, cash: -0.5, auth: 3 },
        line: '"Tell him our military is the strongest it has ever been, the strongest anywhere, and it is ready, more ready than it has ever been."' }
    ]
  },
  {
    id: 'pundit', cat: 'enemy', name: 'the pundit Nate Brill', note: 'nobody watches him',
    opts: [
      { label: 'Mock His Ratings', icon: '📉', eff: { base: 4, press: -1 },
        line: '"Nate Brill, nobody watches him, nobody, lowest ratings in the history of cable, a total nobody, sad little show."' },
      { label: 'Call Him a Nobody, By Name', icon: '👎', eff: { base: 3, press: -1 },
        line: '"He\'s a nobody, everybody knows he\'s a nobody, why does anybody still put him on television, it\'s a mystery, honestly."' },
      { label: 'Try to Get Him Taken Off the Air', icon: '📴', major: true, eff: { press: -5, courts: -3, base: 6, auth: 3 },
        line: '"Somebody at that network should cancel him, cancel the whole show, do the country a favour, a real favour."' }
    ]
  },
  {
    id: 'speaker', cat: 'enemy', name: 'the other Speaker', note: 'weak, ineffective',
    opts: [
      { label: 'Call Him Weak and Ineffective', icon: '🫥', eff: { base: 4, congress: -2 },
        line: '"Weak, totally ineffective, can\'t even control his own caucus, worst Speaker anybody has ever seen, a disaster for the country."' },
      { label: 'Offer Him a Photo-Op Truce', icon: '📸', eff: { congress: 2, base: -1 },
        line: '"Come to the Oval, we\'ll shake hands, get a nice picture, show everybody we can work together, very statesmanlike of me."' },
      { label: 'Threaten to Primary His District', icon: '🗳️', major: true, eff: { base: 7, congress: -6, press: -2, auth: 3 },
        line: '"Tell his district I\'ll be there personally, campaigning against him, in his own backyard, they deserve so much better than him."' }
    ]
  }
];

AD.callTargetById = id => AD.CALL_BOOK.find(t => t.id === id);

AD.callsLeft = run => (run.calls === undefined ? AD.CALLS_PER_MONTH : run.calls);

/* Make the call. `optIndex` selects one of the target's bespoke `opts`.
   Returns {ok, reason} or {ok:true, target, opt, deltas, line}. */
AD.doCall = function (run, targetId, optIndex) {
  const t = AD.callTargetById(targetId);
  if (!t) return { ok: false, reason: 'Wrong number.' };
  const opt = t.opts && t.opts[optIndex];
  if (!opt) return { ok: false, reason: 'Wrong number.' };
  if (AD.callsLeft(run) <= 0) return { ok: false, reason: 'No more calls this month.' };
  run.calls = AD.callsLeft(run) - 1;
  /* THE BOREDOMETER LEVER. The President loves the phone more than he loves
     any other part of the job, so this is where boredom actually comes down.
     A big-swing call is worth roughly a dozen dull afternoons; even a routine
     one clears several. Positive `fun` reduces boredom (see AD.moveFun). */
  const ceff = Object.assign({}, opt.eff);
  if (ceff.fun == null) ceff.fun = opt.major ? 14 : 7;
  const deltas = AD.applySenateEffect(run, ceff);
  run.stats = run.stats || {}; run.stats.calls = (run.stats.calls || 0) + 1;
  return { ok: true, target: t, opt: opt, deltas: deltas, line: opt.line };
};

/* Refill the monthly allowance. Called from Engine.advance(). */
AD.callTick = function (run) {
  run.calls = AD.CALLS_PER_MONTH;
};
