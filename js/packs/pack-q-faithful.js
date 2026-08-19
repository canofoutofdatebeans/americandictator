/* ============================================================
   PACK Q, THE FAITHFUL  (any month, weighted honeymoon/consolidation)
   The rallies, the merch table, the overnight conspiracies, the
   prophecy, the self-published book, the boat parade, the rival
   influencer, the chant that isn't your name, the holiday declared
   in your honour, and the base's bottomless appetite for more.
   Original satire in the house voice. Fictional stand-ins only;
   the joke is on the man staging the show, never on the crowd's
   sincerity.

   40 crises.
   ============================================================ */
(function () {
const C = AD.CAST;

AD.CARDS.push(

/* ══════════════ THE CROWD SIZE ARGUMENT ══════════════ */

{ id:'q-crowd-count', title:'The Crowd Count', who:C.poll, tags:['base','press','levity'],
  text:'Nadia has two numbers on a clipboard. "The permit office says four thousand fit on that lawn, sir. ' +
       'Brayden is telling reporters two hundred thousand. I would like it noted for the record that I chose neither of these numbers."',
  choices:[
    { label:'Go with Brayden\'s number. Repeat it at the podium.', eff:{base:+7,press:-4,street:-1,auth:+2},
      res:'You state a lawn\'s capacity is fifty times the fire code allows. The fire marshal nods, professionally, and says nothing, unprofessionally.' },
    { label:'Cite the permit number. Let it be small.', eff:{base:-4,press:+5,congress:+2,auth:0},
      res:'You give the real number to a room that wanted the other one. It is accurate, unremarkable, and gone from the coverage by lunch.' },
    { label:'Claim the empty grass was reserved for late arrivals.', eff:{base:+5,press:-4,street:-2,auth:+1},
      res:'You explain that the visible grass was standing room for a crowd that never came. Several reporters write this down verbatim, out of pity.' },
    { label:'Put a live headcount on the jumbotron.', eff:{base:+2,press:-4,street:-3,courts:-1,auth:0}, wild:true,
      res:'A screen counting heads in real time turns forty minutes of a political rally into people yelling numbers at a camera. It is unplugged before it reaches five figures.' }]},

{ id:'q-turnstile-cams', title:'The Turnstile Cameras', who:C.home, min:4, max:44, tags:['base','street'],
  text:'Duane wants to install literal turnstiles at the next rally, with cameras, "for security," he says, ' +
       'not quite meeting your eyes. "It would also give us a real number, sir. An indisputable one. I am ' +
       'aware that is not why you\'re asking."',
  choices:[
    { label:'Install them. Publish the real number loudly.', eff:{base:+3,press:+3,congress:+2,cash:-0.2,auth:+1},
      res:'The turnstiles click past a genuinely large crowd and the number, for once, needs no help. It is somehow less satisfying than the lie.' },
    { label:'Skip it. Counting your own crowd is undignified.', eff:{base:-3,press:+3,congress:+2,auth:0},
      res:'You decline to install security theatre for a statistic. Duane files the idea away for a president less squeamish about turnstiles.' },
    { label:'Install them, then quietly disconnect the ones by the empty section.', eff:{base:+5,press:-3,courts:-3,auth:+2},
      res:'Half the turnstiles count and half of them do not. The audit, when it comes, is unusually short and unusually angry.' },
    { label:'Turn the turnstiles into a claw-machine game.', eff:{base:+4,press:-3,courts:-2,street:-2,cash:-0.1,auth:0}, wild:true,
      res:'Attendees now insert a token to enter and, one in fifty, win a plush version of you. The line to leave is longer than the line to get in.' }]},

{ id:'q-empty-seats', title:'The Empty Seats', who:C.social, tags:['base','levity'],
  text:'Brayden shows you the photo before it goes out: a tight crop of the front three rows, packed and ' +
       'roaring. Behind the camera, four thousand empty folding chairs stretch to the parking lot. "It\'s not ' +
       'a lie, sir," he says. "It\'s a frame."',
  choices:[
    { label:'Approve the crop. Post it everywhere tonight.', eff:{base:+6,press:-3,street:-1,auth:+2},
      res:'The tight shot goes out on every account by nine. A local reporter posts the wide one by ten. Both are true and only one is shared.' },
    { label:'Post the wide shot yourself, unbothered.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:'You share the honest photo before anyone can use it against you. It is a strange, small kind of courage, and nobody notices you did it.' },
    { label:'Have staff fill the back rows with folding cutouts.', eff:{base:+5,press:-4,courts:-2,cash:-0.1,auth:+1},
      res:'Four hundred cardboard supporters populate the back section for the wide shot. One tips over in the wind on camera and trends for a week.' },
    { label:'Rope off the empty section as a "reflection zone."', eff:{base:+3,press:-4,street:-3,auth:0}, wild:true,
      res:'The empty chairs are rebranded as a quiet space for contemplating the moment. Nobody sits there. That, somehow, is the point being made.' }]},

{ id:'q-rival-headcount', title:'The Rival\'s Headcount', who:C.press, min:6, max:48, tags:['press','base'],
  text:'Kaylee slides across a competing outlet\'s drone footage, timestamped and geolocated, showing roughly ' +
       'a third of the crowd you claimed. "It\'s good work, sir. Careful, sourced, boring work. I hate that ' +
       'it\'s accurate."',
  choices:[
    { label:'Call the drone footage doctored. Loudly, tonight.', eff:{base:+7,press:-6,courts:-2,auth:+2},
      res:'You accuse a geolocated, timestamped photograph of being fake. Half the country believes you before the footage is even fact-checked twice.' },
    { label:'Let the number stand. Talk about turnout, not size.', eff:{base:-3,press:+5,congress:+2,auth:0},
      res:'You pivot from a losing argument to a winning one. It is the single most disciplined thing said all week, and it is not repeated at the rally.' },
    { label:'Release your own drone footage, shot from directly overhead the front rows only.', eff:{base:+5,press:-4,street:-1,auth:+1},
      res:'Your drone hovers exactly where the crowd is densest and nowhere else. It is technically footage and functionally propaganda, filed under both.' },
    { label:'Ban drones over federal rallies, retroactively.', eff:{base:+3,press:-5,courts:-4,congress:-3,auth:+1}, wild:true,
      res:'A retroactive airspace rule targets the exact device that embarrassed you. Three hobbyists are fined before anyone notices it does not fix the number.' }]},

/* ══════════════ THE MERCH TABLE ══════════════ */

{ id:'q-merch-table', title:'The Merch Table', who:C.social, tags:['base','money','levity'],
  text:'Brayden has a folding table full of samples: a gold cap, a scented candle shaped like your fist, a ' +
       'plush doll that says one of nine phrases when squeezed. "They buy it faster than we can print it, ' +
       'sir. I genuinely do not know where the ceiling is."',
  choices:[
    { label:'Approve all nine. Triple the print run.', eff:{base:+8,press:-3,cash:+0.4,auth:+2},
      res:'The warehouse runs three shifts and the candle sells out twice. An economist calls it devotional retail. She means it as a compliment, mostly.' },
    { label:'Approve one item. Modest margin, clean books.', eff:{base:-2,press:+4,congress:+2,cash:+0.1,auth:0},
      res:'A single tasteful item ships with a receipt anyone could defend in a hearing. It is the least fun choice on the table and the safest.' },
    { label:'Add a subscription box. Ship something every month, forever.', eff:{base:+6,press:-3,cash:+0.4,auth:+1},
      res:'A recurring charge now arrives in mailboxes nationwide whether anyone remembers ordering it or not. Cancellation requires a phone call nobody answers.' },
    { label:'Let Brayden design the ninth phrase himself.', eff:{base:+3,press:-3,courts:-2,street:-2,cash:+0.1,auth:0}, wild:true,
      res:'A nineteen-year-old writes a line for the plush doll that legal has not cleared and will not clear. It ships anyway. It becomes the best-selling phrase.' }]},

{ id:'q-counterfeit-hats', title:'The Counterfeit Hats', who:C.lawyer, min:3, max:48, tags:['base','money'],
  text:'Sy has a box of knockoffs seized at a rally perimeter: same slogan, wrong shade of red, stitched in a ' +
       'facility that is not yours. "We could sue, sir. We could also just let it happen, because half your ' +
       'actual supply chain has the same problem, and discovery cuts both ways."',
  choices:[
    { label:'Sue the counterfeiters into the ground. Publicly.', eff:{base:+6,press:-3,courts:-3,cash:-0.2,auth:+2},
      res:'A very public lawsuit against a hat bootlegger becomes the day\'s top story. Discovery quietly surfaces exactly what Sy warned you it would.' },
    { label:'License it. Take a cut, keep it legal.', eff:{base:+1,press:+3,congress:+2,cash:+0.2,auth:0},
      res:'The bootlegger becomes a licensee overnight, paperwork and all. It is the least dramatic outcome available and it makes actual, boring money.' },
    { label:'Ignore it. The knockoffs are basically free advertising.', eff:{base:+4,press:-3,courts:-2,cash:-0.1,auth:+1},
      res:'You let the fakes circulate uncontested. Genuine merchandise sales dip eleven percent and nobody in the building will say the number out loud.' },
    { label:'Have the seized hats burned on live television as a warning.', eff:{base:+5,press:-4,courts:-3,street:-2,auth:+1}, wild:true,
      res:'A bonfire of contraband ball caps airs at prime time. The optics are somewhere between a book burning and a company picnic, and nobody can agree which.' }]},

{ id:'q-merch-audit', title:'The Merch Audit', who:C.ethics, min:8, max:48, tags:['base','money','ethics'],
  text:'Miriam Applewhite has a binder. "The candle, the coin, the fragrance, the flag pin, the second candle. ' +
       'All of it routes through a company with your name on the deed, sir. I am obligated to ask whether the ' +
       'Office of the President and the gift shop have become the same enterprise."',
  choices:[
    { label:'Say they always were. Move on.', eff:{base:+5,press:-4,courts:-4,congress:-3,auth:+2},
      res:'You confirm, on the record, that the presidency and the product line share a bank account. Miriam writes a report that will outlive both of you.' },
    { label:'Sell the company to a blind trust. Actually blind.', eff:{base:-4,press:+5,courts:+4,congress:+3,auth:+1},
      res:'A real, verifiable divestiture takes place, with real, verifiable paperwork. It is the most boring afternoon of your term and the cleanest.' },
    { label:'Rename the company. Same owner, new letterhead.', eff:{base:+3,press:-4,courts:-3,auth:+1},
      res:'The gift shop becomes a "heritage foundation" overnight. The letterhead changes. The deed, Miriam notes in a footnote, does not.' },
    { label:'Donate the profits to a foundation that also has your name on it.', eff:{base:+3,press:-4,courts:-3,auth:0}, wild:true,
      res:'The money moves from one building with your name on the door to a second building with your name on the door. Miriam requests a longer binder.' }]},

{ id:'q-family-merch', title:'The Family Business', who:C.girl, tags:['base','money'],
  text:'Ivy has a deck. Sunglasses, a skincare line, a "leadership" card game, all under a brand that is, in ' +
       'small print, run by your family. "It sells because of you, Dad. I\'d just like it to also be legal ' +
       'because of me."',
  choices:[
    { label:'Let her run wild. It\'s all in the family.', eff:{base:+6,press:-4,courts:-3,cash:+0.3,auth:+1},
      res:'A leadership card game featuring your own face outsells three actual board games this quarter. The family brand and the federal government blur past the point of separating.' },
    { label:'Have her step back from anything touching the office.', eff:{base:-3,press:+4,courts:+3,congress:+2,auth:0},
      res:'She sells the skincare line to a stranger for a fair price and goes back to a smaller job with a smaller title. It is quietly the right call.' },
    { label:'Route it through a licensing deal that looks arm\'s-length.', eff:{base:+4,press:-4,courts:-3,cash:+0.2,auth:+1},
      res:'A licensing structure is built that satisfies the letter of a rule nobody in the building has fully read. It photographs as compliance.' },
    { label:'Make her Ambassador to a country that happens to manufacture the sunglasses.', eff:{base:+3,press:-4,courts:-3,congress:-3,auth:0}, wild:true,
      res:'The supply chain and the diplomatic posting merge into one very efficient, very indefensible arrangement. The host country is delighted. The Senate is not.' }]},

{ id:'q-merch-recall', title:'The Merch Recall', who:C.treas, min:10, max:44, tags:['base','money'],
  text:'Lyle has a lab report. The commemorative coin, the one with your profile on it, sheds a measurable ' +
       'amount of lead when handled. "Nobody is eating the coin, sir. But some of them are wearing it as a ' +
       'pendant, against bare skin, for hours."',
  choices:[
    { label:'Ship it anyway. Add a warning label nobody reads.', eff:{base:+5,press:-4,courts:-4,cash:+0.2,auth:+1},
      res:'A sticker the size of a stamp now warns against a hazard the coin is designed to be worn against. The coin outsells the sticker\'s legibility by a wide margin.' },
    { label:'Recall it. Refund everyone. Announce it plainly.', eff:{base:-4,press:+5,congress:+3,cash:-0.3,auth:0},
      res:'You issue a real recall with a real refund process, which is expensive and dull and correct. Nobody dies of coin poisoning, which is a low bar you clear.' },
    { label:'Rebrand it "vintage grade" and raise the price.', eff:{base:+4,press:-4,courts:-3,cash:+0.3,auth:+1},
      res:'The lead becomes a feature. A limited "heritage alloy" run sells for triple, to buyers who, Lyle notes, are now paying extra for the hazard.' },
    { label:'Have Brayden livestream himself wearing twelve coins to prove they\'re safe.', eff:{base:+3,press:-3,courts:-3,street:-2,auth:0}, wild:true,
      res:'A teenager wears a dozen lead-adjacent pendants on camera for six hours to reassure a nation. His doctor is watching. His doctor is not pleased.' }]},

/* ══════════════ THE CONSPIRACY THE BASE ADOPTS OVERNIGHT ══════════════ */

{ id:'q-overnight-theory', title:'The Overnight Theory', who:C.social, tags:['base','levity'],
  text:'By sunrise the theory has a name, a symbol and a hashtag: your enemies, it turns out, are coordinating ' +
       'through the weather service. Brayden did not start it. He is, however, now the third-largest account ' +
       'sharing it. "I didn\'t say it was true, sir. I said it was doing forty thousand shares an hour."',
  choices:[
    { label:'Retweet it with a winking caption.', eff:{base:+8,press:-4,street:-1,auth:+2},
      res:'You amplify a theory about the National Weather Service to eleven million followers without endorsing or denying it. It is the most efficient lie you have never technically told.' },
    { label:'Say nothing. Let it burn out on its own.', eff:{base:-2,press:+3,congress:+1,auth:0},
      res:'You decline to touch it. It burns out in nine days, mostly, replaced by a theory about the postal service that nobody asked you about either.' },
    { label:'Have a Cabinet member "confirm" it, off the record.', eff:{base:+6,press:-4,courts:-3,auth:+2},
      res:'An anonymous senior official "with knowledge of the matter" gives the theory a credibility it did not earn. The weather service opens a very confused help desk ticket.' },
    { label:'Invite the theory\'s originator to brief you personally.', eff:{base:+4,press:-4,courts:-3,congress:-2,auth:0}, wild:true,
      res:'A man who runs the theory from his garage gets fifteen minutes in the Oval Office. He brings a binder. Nobody in the room can tell if this went well.' }]},

{ id:'q-deep-state-snack', title:'The Deep State Snack', who:C.spy, min:6, max:48, tags:['base','levity'],
  text:'Errol Hance looks genuinely tired. "The theory this week, sir, is that a specific brand of pretzel is ' +
       'a signalling device for career bureaucrats. I have read the intelligence assessment on this pretzel. ' +
       'It contains flour, salt, and nothing else."',
  choices:[
    { label:'Ban the pretzel from federal buildings. Immediately.', eff:{base:+7,press:-4,courts:-3,cash:-0.1,auth:+2},
      res:'A snack food is removed from vending machines across the executive branch pending review. The review finds flour and salt. The ban stays anyway.' },
    { label:'Have Errol issue a one-line statement: it\'s a pretzel.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:'The Director of Intelligence publicly confirms a snack is a snack. It is the most absurd sentence he has ever put his name to and it works.' },
    { label:'Suggest, vaguely, that you can\'t rule it out.', eff:{base:+5,press:-4,street:-2,auth:+1},
      res:'You decline to confirm or deny a pretzel conspiracy from the podium. The ambiguity is worth more to the base than a denial ever could be.' },
    { label:'Order Errol to personally eat one on television, on the record.', eff:{base:+3,press:-3,courts:-3,street:-1,auth:0}, wild:true,
      res:'The Director of Intelligence eats a pretzel on live television to disprove a theory about the pretzel. It does not disprove the theory. Nothing disproves the theory.' }]},

{ id:'q-numbers-station', title:'The Numbers Station', who:C.fbi, min:10, max:48, tags:['base'],
  text:'Director Quist has a real problem now: three men were arrested outside a substation, convinced by an ' +
       'overnight theory that it broadcasts mind-control signals synced to your rally schedule. "The theory ' +
       'started as a joke, sir. Nobody told the men with the bolt cutters."',
  choices:[
    { label:'Say the substation probably deserves a closer look.', eff:{base:+6,press:-5,courts:-3,street:-2,auth:+2},
      res:'You decline to fully deny the theory that got three men arrested with bolt cutters. Quist requests, in writing, that you stop doing that.' },
    { label:'Denounce the theory. Clearly. By name.', eff:{base:-4,press:+5,congress:+3,street:+2,auth:0},
      res:'You call the substation theory nonsense, plainly, from the podium. It costs you nothing you can measure and possibly a life you\'ll never know about.' },
    { label:'Pardon the three men. Call them patriots.', eff:{base:+7,press:-5,courts:-4,street:-2,auth:+2},
      res:'Three men who cut a fence over a theory about mind control receive a full pardon and a photo in the Oval Office. The substation remains, defiantly, a substation.' },
    { label:'Send Errol to personally tour the substation with a film crew.', eff:{base:+2,press:-4,courts:-3,street:-2,cash:-0.1,auth:0}, wild:true,
      res:'The Director of Intelligence live-narrates a tour of a transformer yard to prove it is, in fact, a transformer yard. Ratings are strong. Belief is unmoved.' }]},

{ id:'q-conspiracy-merch', title:'The Theory, Merchandised', who:C.ag, min:12, max:48, tags:['base','money'],
  text:'Bo Slaughter holds up a T-shirt printed within nine hours of the theory going viral: a cartoon eye ' +
       'over a pretzel, over a substation. "It\'s already for sale, sir. I checked. Somebody in this building ' +
       'has a very fast printer and no shame."',
  choices:[
    { label:'Let it sell. Take a licensing cut.', eff:{base:+7,press:-4,courts:-3,cash:+0.3,auth:+2},
      res:'The eye, the pretzel and the substation become a shirt, then a hat, then a coffee mug, all officially licensed within a week. Nobody involved can define what it means and everybody buys one.' },
    { label:'Have legal quietly pull it from the official store.', eff:{base:-3,press:+4,courts:+3,auth:0},
      res:'The shirt disappears from the store without comment. It resurfaces on a third-party site by dinner. You cannot un-print a printer.' },
    { label:'Print an "official" version to out-compete the bootleg.', eff:{base:+5,press:-4,courts:-2,cash:+0.2,auth:+1},
      res:'A government-adjacent brand now competes with a garage operation to sell shirts about a theory neither of them can explain. The garage wins on price.' },
    { label:'Have the printer hired as an official designer.', eff:{base:+3,press:-4,courts:-3,congress:-2,auth:0}, wild:true,
      res:'The man with the fast printer and no shame is now on the federal payroll. His first assignment, officially, is "brand consistency." Nobody defines that either.' }]},

/* ══════════════ THE PROPHECY ══════════════ */

{ id:'q-the-prophecy', title:'The Prophecy', who:C.pastor, tags:['base','levity'],
  text:'Reverend Muncy brings you a passage, underlined twice, from a book he insists predates your election ' +
       'by forty years. It names no one. It describes, he says, "a man in a red tie who will restore what ' +
       'was lost." "I\'m not saying it\'s you, sir. I\'m saying the tie is a very specific detail."',
  choices:[
    { label:'Wear the red tie every day from now on.', eff:{base:+7,press:-4,street:-1,auth:+2},
      res:'You adopt the tie as uniform. A fabric shortage in one specific shade of red is reported, unironically, by three regional news stations.' },
    { label:'Thank him kindly. Change the subject.', eff:{base:-3,press:+3,congress:+1,auth:0},
      res:'You decline to be anyone\'s prophecy. It is a small, dignified refusal that the Reverend accepts with visible disappointment.' },
    { label:'Ask him to find three more passages. Any book will do.', eff:{base:+6,press:-4,courts:-2,auth:+2},
      res:'A small cottage industry of retroactive scripture-matching begins inside the West Wing. By month\'s end you are apparently foretold in four separate traditions.' },
    { label:'Donate the actual book to the National Archives, unread.', eff:{base:+1,press:-3,courts:-3,congress:-2,auth:0}, wild:true,
      res:'The prophecy book is enshrined as a federal historical document without anyone confirming what it says. An archivist spends a career footnoting a red tie.' }]},

{ id:'q-prophecy-sequel', title:'The Second Prophecy', who:C.pastor, min:10, max:48, tags:['base'],
  text:'A rival preacher has published a competing prophecy, from a different book, naming a different man in ' +
       'a different tie. Reverend Muncy is, for the first time you\'ve seen, rattled. "This is technically ' +
       'heresy, sir. Against my prophecy. Which I remind you I also invented."',
  choices:[
    { label:'Have Muncy denounce the rival prophecy publicly.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'Two clergymen argue on cable news about whose fabricated prediction is the real fabricated prediction. Neither audience notices the shared premise.' },
    { label:'Ignore the rival entirely. Prophecy doesn\'t need defending.', eff:{base:-2,press:+3,congress:+1,auth:0},
      res:'You decline to dignify a competing myth about yourself with a response. It is, against every instinct in the building, the secure move.' },
    { label:'Commission a third prophecy that predates both.', eff:{base:+5,press:-4,courts:-2,auth:+1},
      res:'A newly "discovered" older text is produced that outranks the other two by publication date alone. The theology gets worse. The base gets louder.' },
    { label:'Invite both preachers to co-author a unified prophecy, live, on stage.', eff:{base:+3,press:-4,courts:-2,street:-2,auth:0}, wild:true,
      res:'Two men attempt to merge separate revelations in front of nine thousand people. It does not go smoothly. It also, somehow, does not go badly.' }]},

{ id:'q-historians-verdict', title:'The Historian\'s Rebuttal', who:C.hist, min:14, max:48, tags:['base','press'],
  text:'Dr. Weir has traced the prophecy to its actual source: a 1970s advertising pamphlet for a menswear ' +
       'chain that went bankrupt in 1984. "It is not a prophecy, sir. It is a coupon. I have the coupon. I ' +
       'brought the coupon."',
  choices:[
    { label:'Bury the coupon. The prophecy stands.', eff:{base:+6,press:-4,courts:-2,auth:+2},
      res:'A menswear coupon from a defunct chain is quietly reclassified and filed somewhere nobody will look. The prophecy survives its own footnotes.' },
    { label:'Publish her findings. Let the record be the record.', eff:{base:-5,press:+6,congress:+3,auth:0},
      res:'The truth about the coupon runs on page nine. It changes nothing about attendance at the next rally, which Dr. Weir finds more troubling than the coupon itself.' },
    { label:'Claim the coupon was itself prophetic.', eff:{base:+7,press:-4,courts:-2,auth:+2},
      res:'You argue a 1984 discount pamphlet foretold its own future misuse. It should not work. It works.' },
    { label:'Have Dr. Weir archive the coupon next to the Constitution.', eff:{base:+2,press:-4,courts:-3,congress:-2,auth:0}, wild:true,
      res:'A defunct menswear coupon is granted equivalent archival housing to a founding document. The Historian requests, again, to be reassigned to literally anything else.' }]},

/* ══════════════ THE SELF-PUBLISHED BOOK ══════════════ */

{ id:'q-the-book', title:'The Book', who:C.writer, tags:['base','money','levity'],
  text:'Gideon has a manuscript: four hundred pages, your name on the cover, most of it dictated by you on a ' +
       'plane and transcribed at three in the morning. "It needs an editor, sir. It needs, frankly, a second ' +
       'writer. What it has is a release date."',
  choices:[
    { label:'Ship it as-is. Raw is authentic.', eff:{base:+7,press:-4,cash:+0.3,auth:+2},
      res:'A book with fourteen unresolved metaphors and one chapter that simply restarts hits shelves unedited. It debuts at number one, which tells you something about either the book or the chart.' },
    { label:'Let Gideon actually edit it. Delay the launch.', eff:{base:-3,press:+4,congress:+1,cash:+0.1,auth:0},
      res:'A competent editor turns a rant into a book. It is better and slower and sells about the same, which is the most honest review Gideon has ever gotten.' },
    { label:'Have Gideon write it entirely, credit you solely.', eff:{base:+4,press:-4,courts:-2,cash:+0.3,auth:+1},
      res:'The finished product is entirely ghostwritten and entirely yours, contractually. Gideon signs an NDA thicker than the manuscript.' },
    { label:'Publish the raw transcript, typos, timestamps and all.', eff:{base:+2,press:-4,courts:-2,street:-1,cash:+0.1,auth:0}, wild:true,
      res:'A book consisting of unedited 3 a.m. dictation, including "wait, say that differently" forty-one times, ships as a limited art edition. It sells out. Nobody can explain why.' }]},

{ id:'q-ghostwriter-quits', title:'The Ghostwriter Quits', who:C.writer, min:6, max:44, tags:['base'],
  text:'Gideon puts a resignation letter on your desk, then, unusually, sits down anyway to explain it in ' +
       'person. "The sequel wants me to write that the moon landing happened twice, sir, and that you were ' +
       'consulted on the second one. I have limits. This is roughly where they are."',
  choices:[
    { label:'Accept the resignation. Find someone with fewer limits.', eff:{base:+5,press:-4,courts:-2,auth:+2},
      res:'A replacement writer is found within the week, credentialed and hungry and entirely without Gideon\'s scruples. The sequel ships on schedule.' },
    { label:'Cut the moon landing chapter. Keep Gideon.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:'You let one absurd chapter go to keep a writer who still occasionally says no to you. It is a small, expensive act of self-preservation.' },
    { label:'Publish the chapter anyway, unsigned, as a "leaked excerpt."', eff:{base:+6,press:-4,courts:-2,auth:+1},
      res:'The lunar chapter "leaks" days before launch, driving preorders past the actual book\'s content. Deniability is, as always, the whole product.' },
    { label:'Have Gideon and the replacement co-write it as a debate.', eff:{base:+3,press:-3,courts:-3,street:-2,auth:0}, wild:true,
      res:'Two competing chapters run side by side, one earnest, one unhinged, with no indication which is which. Book clubs nationwide have their worst meetings in years.' }]},

{ id:'q-book-blurb', title:'The Blurb', who:C.lawyer, min:4, max:40, tags:['base','press'],
  text:'Sy has the back-cover blurb you dictated, attributed to a general who has not, upon calling him, agreed ' +
       'to have said it. "He says it\'s a nice sentiment, sir. He also says he never said it. Both statements ' +
       'are currently printing on four hundred thousand copies."',
  choices:[
    { label:'Print it anyway. He\'ll come around.', eff:{base:+6,press:-4,courts:-3,auth:+2},
      res:'The general\'s name stays on a quote he never gave. He does not come around. He does, eventually, decline every future interview about the book.' },
    { label:'Pull the blurb. Get a real one, even a boring one.', eff:{base:-3,press:+4,congress:+2,cash:-0.1,auth:0},
      res:'A genuine, milder endorsement replaces the fabricated one at real reprinting cost. It says less and means more, which is a trade nobody in the building wanted to make.' },
    { label:'Attribute the quote to "a senior official" instead.', eff:{base:+4,press:-4,courts:-2,auth:+1},
      res:'The blurb survives, laundered through anonymity. It is unfalsifiable and unimpressive in exactly equal measure.' },
    { label:'Ask the general to write his own blurb, whatever it says.', eff:{base:-2,press:+2,courts:-4,congress:-3,auth:0}, wild:true,
      res:'The general submits one honest sentence about a phone call that happened once. It runs uncut. It is, against every odd, the best line on the cover.' }]},

/* ══════════════ THE BOAT PARADE ══════════════ */

{ id:'q-boat-parade', title:'The Boat Parade', who:C.home, tags:['base','levity'],
  text:'Duane has the harbormaster\'s report. Two hundred private boats, flags flying, circling the bay in your ' +
       'honour, most of them well past capacity. "Nobody organized this, sir. Nobody needed to. And nobody ' +
       'checked the weather, which is the part I\'m actually calling about."',
  choices:[
    { label:'Fly over it yourself. Wave from the chopper.', eff:{base:+8,press:-3,street:-1,cash:-0.2,auth:+2},
      res:'A helicopter pass over two hundred overloaded boats produces the single best photo of the month. The Coast Guard\'s incident report from the same afternoon is not as widely shared.' },
    { label:'Ask the harbormaster to enforce capacity limits first.', eff:{base:-4,press:+4,congress:+2,auth:0},
      res:'You prioritize an unglamorous safety inspection over a photo opportunity. Nobody drowns. Nobody thanks you either.' },
    { label:'Declare it a federal flotilla and add a fireworks finale.', eff:{base:+6,press:-3,cash:-0.3,auth:+2},
      res:'An unofficial gathering of boat owners becomes, by proclamation, a federally recognized event with a budget line and a finale. The harbormaster requests, calmly, to be reassigned.' },
    { label:'Join the parade in a jet ski, personally, uninsured.', eff:{base:+4,press:-4,courts:-3,street:-2,cash:-0.1,auth:0}, wild:true,
      res:'You ride a rented jet ski through your own flotilla with no life jacket and no permit. The Secret Service detail on the chase boat ages ten years in four minutes.' }]},

{ id:'q-parade-capsizes', title:'The Parade, Capsized', who:C.gen, min:6, max:48, tags:['base'],
  text:'General Tarrant is at your desk with a straight face he is clearly working to maintain. "Three boats ' +
       'capsized at the flotilla, sir. Everyone is fine. One of them was flying a flag with your face on it ' +
       'roughly the size of a mainsail. That flag is now at the bottom of the bay."',
  choices:[
    { label:'Call it proof of enthusiasm. Send more flags.', eff:{base:+6,press:-4,street:-2,cash:-0.1,auth:+2},
      res:'You frame three capsizings as a testament to devotion rather than a hazard. A replacement shipment of oversized flags goes out within the week.' },
    { label:'Have the Coast Guard issue a size limit on flags.', eff:{base:-4,press:+4,congress:+2,auth:0},
      res:'A genuinely sensible maritime safety rule is quietly enacted. It is, to date, the only regulation this term that everyone privately agrees with.' },
    { label:'Blame the boat, not the flag.', eff:{base:+4,press:-3,street:-2,auth:+1},
      res:'You suggest the vessel, not the twenty-foot sailcloth portrait, was the problem. The boat\'s owner, reached for comment, disagrees, on the record.' },
    { label:'Award the sunk flag a posthumous medal.', eff:{base:+3,press:-4,courts:-3,street:-2,auth:0}, wild:true,
      res:'A ceremony is held for a piece of fabric currently on the seafloor. General Tarrant attends in full dress uniform and later describes it, privately, as the worst afternoon of his career.' }]},

{ id:'q-navy-escort', title:'The Navy Escort', who:C.gen, min:10, max:44, tags:['base','congress'],
  text:'Tarrant has been asked, politely and repeatedly, whether a Navy vessel can "swing by" the next boat ' +
       'parade for optics. "It is not, strictly, a combat requirement, sir. It is also not, strictly, ' +
       'something I can say no to twice."',
  choices:[
    { label:'Order the escort. A destroyer photographs beautifully.', eff:{base:+8,congress:-4,courts:-2,cash:-0.3,auth:+3},
      res:'A guided-missile destroyer reroutes to loiter near a civilian flotilla for the afternoon. The photos are extraordinary. The fuel bill is itemized, eventually, in a hearing.' },
    { label:'Decline. The Navy has actual work.', eff:{base:-4,congress:+4,press:+3,auth:0},
      res:'You keep the fleet doing fleet things. It is correct, it is invisible, and it is the version of this story that never gets told at the rally.' },
    { label:'Send a Coast Guard cutter instead. Cheaper, still gray.', eff:{base:+4,press:-3,congress:-2,cash:-0.1,auth:+1},
      res:'A smaller, cheaper vessel provides roughly the same photo at a third of the outrage. Nobody at the parade can tell the difference and nobody at the hearing forgets it.' },
    { label:'Ask a friendly billionaire to send his yacht dressed as a warship.', eff:{base:+3,press:-4,courts:-3,congress:-2,auth:0}, wild:true,
      res:'A private yacht is painted gray for the afternoon and flies signal flags nobody aboard can read. From a distance it is indistinguishable from the real thing. Up close, it has a hot tub.' }]},

/* ══════════════ THE RIVAL INFLUENCER ══════════════ */

{ id:'q-the-challenger', title:'The Challenger Livestream', who:C.social, tags:['base','press'],
  text:'A twenty-six-year-old with four million followers has started streaming from outside your rallies, ' +
       'agreeing with almost everything you say and adding, gently, that maybe you\'re a little slow to act ' +
       'on it. Brayden is watching the numbers climb in real time. "He\'s not against you, sir. That\'s the ' +
       'part that should worry you."',
  choices:[
    { label:'Denounce him as a fraud. Tonight, by name.', eff:{base:+6,press:-4,street:-1,auth:+2},
      res:'You attack a young man for agreeing with you too enthusiastically. It reads, to a meaningful slice of the base, as jealousy, because it is.' },
    { label:'Ignore him. Let the base sort out its own preferences.', eff:{base:-3,press:+3,congress:+1,auth:0},
      res:'You decline to dignify a rival for your own audience\'s attention. It costs you nothing measurable today and something unmeasurable every day after.' },
    { label:'Invite him on stage. Co-opt him before he grows further.', eff:{base:+5,press:-3,auth:+2},
      res:'You share the stage with the man building an audience out of your leftovers. The crowd cheers for both of you, which is precisely the problem.' },
    { label:'Have Brayden challenge him to a livestreamed debate about nothing in particular.', eff:{base:+2,press:-4,courts:-2,street:-2,auth:0}, wild:true,
      res:'Two twenty-somethings argue for ninety minutes about who understands you better while you are not in the room. Neither wins. Both gain followers.' }]},

{ id:'q-poach-attempt', title:'The Poaching Attempt', who:C.poll, min:8, max:48, tags:['base'],
  text:'Nadia\'s numbers show it plainly: a slice of your base, maybe six percent, has started following the ' +
       'challenger exclusively, not as competition, just as a second thing. "They\'re not leaving you, sir. ' +
       'They\'re just also, now, his. I don\'t know how to fix a math problem that isn\'t subtraction."',
  choices:[
    { label:'Buy an ad campaign specifically targeting his followers.', eff:{base:+6,press:-3,cash:-0.3,auth:+2},
      res:'A precisely targeted ad buy chases six percent of a rival\'s audience across every platform they use. It works on about a third of them, which Nadia calls a win.' },
    { label:'Ask what he\'s offering that you\'re not. Actually change something.', eff:{base:-2,press:+4,congress:+3,auth:0},
      res:'You treat the defection as a signal rather than a betrayal and adjust one real thing. It is quietly effective and completely uncelebrated.' },
    { label:'Offer him a paid role in the administration. Silence by salary.', eff:{base:+5,press:-4,courts:-3,cash:-0.2,auth:+2},
      res:'The challenger accepts a title, an office, and a leash. His independent audience notices the leash within a month.' },
    { label:'Have Brayden secretly run a parody account mocking him.', eff:{base:+2,press:-4,courts:-2,street:-2,auth:0}, wild:true,
      res:'A parody account, traced within days to a White House IP address, mocks the challenger relentlessly. The unmasking is more damaging than the mockery ever was.' }]},

{ id:'q-vp-courts-base', title:'The VP\'s Solo Tour', who:C.vp, min:14, max:48, tags:['base','congress'],
  text:'Chet Danforth has announced his own tour, unaffiliated with your office, "just meeting folks," in ' +
       'exactly the states your rallies skipped. He smiles the whole time he tells you this. "You inspired ' +
       'me, sir. I hope that\'s all right."',
  choices:[
    { label:'Order him to cancel it. You\'re still in charge.', eff:{base:+5,congress:-4,press:-3,auth:+3},
      res:'You publicly rein in your own Vice President for the crime of shaking hands. It plays as strength to some and succession anxiety to everyone paying attention.' },
    { label:'Let him tour. A loyal VP is a strong ticket.', eff:{base:-2,congress:+4,press:+3,auth:0},
      res:'You allow ambition to run in the open rather than underground, which is either generous or naive, and won\'t be clear which for two more years.' },
    { label:'Schedule a rally in the same city, the same week.', eff:{base:+6,press:-3,congress:-2,auth:+2},
      res:'Two rallies for the same audience, six days apart, in the same arena. The base attends both and compares crowd photos, which is exactly as bad for you as it sounds.' },
    { label:'Assign him a "listening tour" itinerary you personally wrote.', eff:{base:+3,press:-3,congress:-3,street:-1,auth:0}, wild:true,
      res:'You hand your Vice President a schedule of small, unglamorous town halls in places with terrible cell signal. He goes, dutifully, and is not seen on the internet for six weeks.' }]},

/* ══════════════ THE CHANT ══════════════ */

{ id:'q-the-chant', title:'The Chant', who:C.social, tags:['base','levity'],
  text:'It started as a mistake, someone garbling your name into three syllables that scan better, and now ' +
       'nine thousand people are doing it in unison. Brayden has already clipped it. "It\'s not your name, ' +
       'sir. It\'s better than your name. I didn\'t plan this and I refuse to apologize for it."',
  choices:[
    { label:'Adopt it. Print it on the next hat run.', eff:{base:+7,press:-3,cash:+0.2,auth:+2},
      res:'The mispronunciation becomes official branding within a week. Your actual name starts to feel, even to you, slightly formal.' },
    { label:'Gently correct them. It\'s a small thing.', eff:{base:-3,press:+3,congress:+1,auth:0},
      res:'You ask, politely, for your actual name back. The chant continues anyway, louder, as if correction were a dare.' },
    { label:'Trademark the chant before anyone else can.', eff:{base:+5,press:-3,courts:-2,cash:-0.1,auth:+1},
      res:'A three-syllable crowd noise is filed with the trademark office. The examiner assigned to the case has, by her own account, never had a stranger Tuesday.' },
    { label:'Have a linguist explain, on television, why the chant is technically your name.', eff:{base:+2,press:-3,courts:-2,street:-2,auth:0}, wild:true,
      res:'A professor of phonetics is booked to argue, with charts, that a garbled syllable cluster is etymologically continuous with your birth name. It is not convincing. It is memorable.' }]},

{ id:'q-chant-trademark', title:'Trademarking the Chant', who:C.lawyer, min:8, max:44, tags:['base','money'],
  text:'Sy has bad news: someone filed for the chant\'s trademark nine days before you did, a merchandiser in ' +
       'a state you\'ve never visited. "He\'s not a rival, sir. He\'s a stranger who was simply faster at the ' +
       'paperwork than the entire executive branch."',
  choices:[
    { label:'Sue him for it. He stole your crowd\'s words.', eff:{base:+6,press:-4,courts:-3,cash:-0.2,auth:+2},
      res:'A federal lawsuit is filed to reclaim ownership of a sound a crowd made spontaneously. The irony is not lost on the judge, who notes it, in writing, twice.' },
    { label:'Buy the trademark from him. Fair price, clean deal.', eff:{base:+1,press:+2,congress:+1,cash:-0.3,auth:0},
      res:'A quiet purchase settles the matter without a headline. The stranger retires early. It is the least dramatic resolution available and it works completely.' },
    { label:'File a competing mark and let the lawyers sort it out for years.', eff:{base:+3,press:-3,courts:-4,cash:-0.2,auth:+1},
      res:'Two trademark applications for the same three syllables enter years of administrative limbo. The chant, meanwhile, continues at every rally, unlicensed and unbothered.' },
    { label:'Declare the chant public domain, belonging to the people.', eff:{base:+4,press:-3,courts:-3,congress:-2,cash:-0.1,auth:-1}, wild:true,
      res:'You renounce ownership of your own nickname in the name of the base that gave it to you. It is, unexpectedly, the most beloved decision of your term.' }]},

{ id:'q-rival-chant', title:'The Rival Chant', who:C.opp, min:10, max:48, tags:['base','press'],
  text:'Cordelia Ruiz-Bloom\'s crowds have started a chant of their own, three syllables, mocking, catchy, ' +
       'built specifically to rhyme with yours. She denies encouraging it, on camera, while visibly enjoying ' +
       'every second of the denial.',
  choices:[
    { label:'Respond with a nastier chant about her. Workshop it tonight.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'You personally help draft an insult chant for a political rally, which is either beneath the office or exactly the office now, depending who you ask.' },
    { label:'Rise above it. Don\'t dignify a rhyme.', eff:{base:-3,press:+4,congress:+2,auth:0},
      res:'You decline to engage with schoolyard rhetoric from the podium. The chant fades from your rallies within a month and lingers, mysteriously, at hers.' },
    { label:'Claim she stole the format from your chant.', eff:{base:+4,press:-4,courts:-2,auth:+1},
      res:'You accuse a rival of plagiarizing a chant format, as though scansion were intellectual property. A linguistics professor is asked, again, for comment.' },
    { label:'Have Brayden teach your crowd her chant, sung ironically back at her.', eff:{base:+3,press:-4,courts:-2,street:-2,auth:0}, wild:true,
      res:'Nine thousand of your own supporters learn and perform your opponent\'s mocking chant, sarcastically, at your own rally. It is unclear, even to them, who wins this exchange.' }]},

/* ══════════════ THE HOLIDAY ══════════════ */

{ id:'q-the-holiday', title:'The Holiday', who:C.speaker, min:6, max:48, tags:['base','congress'],
  text:'Hal Grimes has the votes to pass a federal holiday, technically "in recognition of executive service," ' +
       'landing, not coincidentally, on your birthday. "Eleven members think it\'s a joke, sir. Eleven others ' +
       'think it\'s an insurance policy. Both groups are voting yes."',
  choices:[
    { label:'Push it through. Full parade, every year.', eff:{base:+9,congress:-4,courts:-2,cash:-0.3,auth:+3},
      res:'A national holiday is enacted bearing your birthday and, in the fine print, your name. Federal offices close. A minority report calls it "premature," which is the polite word available.' },
    { label:'Ask Grimes to name it after the office, not you.', eff:{base:-4,congress:+5,press:+4,auth:0},
      res:'A day honouring "public service broadly" passes instead of a day honouring you specifically. It is a small, deliberate act of restraint nobody will remember you for.' },
    { label:'Suggest a whole week instead of a day.', eff:{base:+6,congress:-4,press:-3,cash:-0.3,auth:+2},
      res:'A week-long observance is proposed, with its own logo and a ceremonial breakfast. Federal productivity data for the month becomes, diplomatically, hard to read.' },
    { label:'Let the base vote on the holiday\'s official name via an app.', eff:{base:+3,congress:-3,press:-4,courts:-2,auth:0}, wild:true,
      res:'An open online poll to name your own holiday returns a result Brayden refuses to read aloud in front of the Speaker. It is adopted anyway, quietly, in a subcommittee.' }]},

{ id:'q-holiday-lawsuit', title:'The Holiday Lawsuit', who:C.cj, min:10, max:48, tags:['base','courts'],
  text:'Chief Justice Stone has an emergency docket item: a challenge to the new holiday on establishment ' +
       'grounds, arguing a day named for a sitting president is a day named for a sitting president\'s ' +
       're-election campaign. "The argument is not frivolous, sir. I wish it were."',
  choices:[
    { label:'Have your lawyers call the challenge unpatriotic.', eff:{base:+6,press:-4,courts:-4,auth:+2},
      res:'You frame a constitutional question as a loyalty test. It plays well at the rally and poorly, specifically and by name, in the Chief Justice\'s eventual opinion.' },
    { label:'Let the courts decide. Don\'t comment publicly.', eff:{base:-3,press:+4,courts:+4,auth:0},
      res:'You allow the judiciary to do its job without a running commentary from the podium. It is, structurally, how this is supposed to work.' },
    { label:'Rename the holiday mid-litigation to dodge the argument.', eff:{base:+4,press:-4,courts:-3,congress:-2,auth:+1},
      res:'The holiday is hastily retitled "Constitution Appreciation Day," observed on your birthday, purely by coincidence, the filing insists.' },
    { label:'Ask Stone to just personally reassure you it\'ll be fine.', eff:{base:+2,press:-3,courts:-4,auth:0}, wild:true,
      res:'You ask the Chief Justice, informally, over coffee, how her own court will rule. She sets down her cup, says nothing, and the silence is its own opinion.' }]},

{ id:'q-holiday-noncompliance', title:'The Governor Who Skipped It', who:C.gov, min:12, max:48, tags:['base'],
  text:'Governor Vasquez-Moore has kept every state office open on your holiday, on principle, in a press ' +
       'release titled, without apparent irony, "Tuesday." Your base in her state is, per Nadia, "extremely, ' +
       'personally offended on your behalf."',
  choices:[
    { label:'Threaten to withhold federal funding from her state.', eff:{base:+7,congress:-4,courts:-3,auth:+3},
      res:'You tie disaster relief and highway money to observance of a holiday named after yourself. It is the kind of leverage that works exactly once before someone writes a law about it.' },
    { label:'Let her keep the offices open. It\'s her state.', eff:{base:-4,congress:+4,press:+3,auth:0},
      res:'You accept that federalism occasionally means someone is allowed to disagree with you, on your own day, in her own state. It costs you nothing but the satisfaction.' },
    { label:'Hold a rally directly outside her closed... open state office.', eff:{base:+5,press:-3,street:-2,cash:-0.1,auth:+2},
      res:'Nine thousand supporters chant outside a building where, awkwardly, everyone is still at work. Several state employees wave from the windows, unbothered, on their lunch break.' },
    { label:'Send her a fruit basket "as a gesture of unity."', eff:{base:+2,press:-4,congress:-3,cash:-0.1,auth:0}, wild:true,
      res:'A fruit basket arrives at the Governor\'s office with a card reading "no hard feelings." She has it photographed and donated to a food bank, which somehow wins the news cycle.' }]},

/* ══════════════ THE BASE DEMANDS YOU GO FURTHER ══════════════ */

{ id:'q-go-further', title:'Go Further', who:C.cos, min:10, max:48, tags:['base'],
  text:'Deborah has the polling on your last big move: the base loved it, and forty percent of them, ' +
       'unprompted, are already asking what\'s next, in terms that assume "next" means "more." "They didn\'t ' +
       'want the thing, sir. They want the appetite the thing gave them fed again."',
  choices:[
    { label:'Announce the next, bigger move immediately.', eff:{base:+8,congress:-5,courts:-3,auth:+3},
      res:'You escalate before the last escalation has even finished being covered. It is thrilling, briefly, and it teaches the base that the ceiling keeps moving, which it does.' },
    { label:'Hold the line. Consolidate what you already have.', eff:{base:-4,congress:+5,courts:+3,auth:0},
      res:'You decline to feed an appetite that has no natural stopping point. It is the harder, quieter, correct decision and it satisfies nobody in the building.' },
    { label:'Announce something bigger-sounding that changes almost nothing.', eff:{base:+5,press:-3,congress:-2,auth:+2},
      res:'A dramatically named initiative with a modest actual mechanism goes out under a triumphant headline. The base cheers the headline. The mechanism does the minimum required to be true.' },
    { label:'Ask the base directly, on stage, what "further" even means.', eff:{base:+2,press:-4,congress:-3,courts:-2,auth:-1}, wild:true,
      res:'You put the microphone to the crowd and ask them to define the demand themselves. The answers, shouted over each other, contradict wildly and clarify nothing. It is, at least, honest.' }]},

{ id:'q-third-term-chant', title:'The Third-Term Chant', who:C.speaker, min:24, max:48, tags:['base','congress'],
  text:'It starts small, at one rally, one section: "four more years" stretching, unofficially, into "and ' +
       'then some more." Hal Grimes is holding a printed copy of the amendment that says you can\'t. "I am ' +
       'obligated to mention it exists, sir. I am not obligated to enjoy mentioning it."',
  choices:[
    { label:'Let the chant grow. Muse publicly about "creative options."', eff:{base:+9,congress:-6,courts:-5,auth:+3},
      res:'You entertain, aloud, at a podium, the idea of a third term the Constitution forbids. Grimes spends the following week explaining, to increasingly nervous colleagues, that the amendment still exists.' },
    { label:'Shut it down. Cite the amendment yourself.', eff:{base:-5,congress:+5,courts:+4,press:+3,auth:0},
      res:'You personally end the chant by naming the law that forbids it. It is the single most restrained thing said at a rally all year, and the silence afterward is its own headline.' },
    { label:'Say you\'ll "respect the process" while smiling in a way that means the opposite.', eff:{base:+6,congress:-4,courts:-3,auth:+2},
      res:'A carefully worded non-denial does more work than a real answer ever could. The chant grows louder specifically because you didn\'t stop it.' },
    { label:'Propose your Vice President run as your obvious proxy instead.', eff:{base:+3,congress:-3,courts:-3,street:-1,auth:0}, wild:true,
      res:'You float a plan to install a loyal placeholder and govern from behind the curtain. Chet Danforth smiles even wider than usual, for reasons that are, suddenly, entirely his own.' }]},

{ id:'q-base-wants-blood', title:'What the Base Actually Wants', who:C.ag, min:14, max:48, tags:['base','courts'],
  text:'Bo Slaughter reads you the transcripts from the rally line, verbatim: not policy asks, mostly, but a ' +
       'specific name, said with real anger, and a request that something be done about that person. "They ' +
       'want a target, sir. Not a bill. A target."',
  choices:[
    { label:'Open an investigation into the named person. Publicly.', eff:{base:+8,courts:-5,press:-4,auth:+3},
      res:'A federal investigation is opened because a crowd chanted a name loudly enough. Bo notes, in the file, that "sufficient public interest" is doing an enormous amount of legal work here.' },
    { label:'Explain that\'s not how any of this works.', eff:{base:-5,courts:+4,congress:+3,press:+3,auth:0},
      res:'You tell nine thousand people that the Justice Department does not take orders from a chant. It is true, it is correct, and it is not what they came to hear.' },
    { label:'Have the person publicly condemned without a formal charge.', eff:{base:+6,press:-4,courts:-3,auth:+2},
      res:'You deliver a rhetorical conviction with no legal one attached, which satisfies the anger without the paperwork. Bo calls it "extremely efficient and extremely unconstitutional" in the same sentence.' },
    { label:'Redirect the anger toward a vending machine company instead.', eff:{base:+2,press:-3,courts:-2,street:-2,auth:-1}, wild:true,
      res:'You pivot nine thousand people\'s fury toward an unrelated snack vendor mid-speech, for no clear reason. It works, briefly, and several vending machines are toppled before midnight.' }]},

/* ══════════════ MISCELLANEOUS FAITHFUL ══════════════ */

{ id:'q-rv-caravan', title:'The RV Caravan', who:C.mayor, min:4, max:44, tags:['base','street'],
  text:'Mayor Faulk has three thousand recreational vehicles parked, unofficially, across every lot near the ' +
       'capital, waiting days early for your next appearance. "They\'re lovely people, sir. They are also ' +
       'blocking two hospital access roads, and I cannot get a single one of them to move for a fire truck."',
  choices:[
    { label:'Thank them publicly. Send free firewood.', eff:{base:+6,press:-3,street:-2,cash:-0.1,auth:+1},
      res:'A gesture of gratitude toward the caravan does nothing to unblock the hospital road. It does, however, make excellent footage.' },
    { label:'Have city crews relocate them to a real lot, gently.', eff:{base:-3,street:+4,press:+2,auth:0},
      res:'A boring, competent relocation effort clears the access roads without a single confrontation. Nobody at the rally ever learns this happened.' },
    { label:'Declare the parking lot a temporary national landmark.', eff:{base:+5,press:-3,courts:-3,cash:-0.1,auth:+1},
      res:'A gravel lot full of RVs is granted, briefly, federal historic status to dodge the local ordinance. The plaque is removed the following Tuesday, quietly.' },
    { label:'Send the fire department to do a flyover instead of a response.', eff:{base:+3,press:-4,courts:-3,street:-2,auth:0}, wild:true,
      res:'A ladder truck is redirected to do a ceremonial pass over the caravan rather than clear the road it is blocking. The symbolism is stronger than the actual emergency access.' }]},

{ id:'q-senate-superfan', title:'The Superfan\'s Senate Bid', who:C.opp, min:16, max:48, tags:['base','congress'],
  text:'Cordelia has the filing: a man known mostly for a viral rally sign is running for Senate, claiming your ' +
       'endorsement, which you never gave. "He has zero experience and forty percent name recognition, ' +
       'entirely borrowed from you," she says, almost admiringly.',
  choices:[
    { label:'Endorse him for real. Chaos is loyalty, technically.', eff:{base:+7,congress:-4,press:-3,auth:+2},
      res:'You formalize an accidental endorsement into a real one. A man whose entire résumé is one sign is now, plausibly, headed to the Senate.' },
    { label:'Publicly clarify you never endorsed him.', eff:{base:-4,congress:+4,press:+4,auth:0},
      res:'You correct the record. He runs anyway, on the strength of the correction going largely unread, and wins his primary regardless.' },
    { label:'Endorse his opponent instead, to punish the presumption.', eff:{base:+3,congress:-3,press:-3,auth:+1},
      res:'You back the establishment candidate against your own accidental fan out of spite. The base reads this as betrayal, not correction.' },
    { label:'Offer him a job instead, to keep him off the ballot.', eff:{base:+2,congress:-4,courts:-3,cash:-0.1,auth:0}, wild:true,
      res:'A federal title, invented for the occasion, is used to bribe a Senate hopeful out of the race. He accepts. He is, weeks later, discovered to be genuinely bad at the job.' }]},

{ id:'q-purity-test', title:'The Purity Test', who:C.social, min:12, max:48, tags:['base'],
  text:'A faction of the base has started publicly excommunicating other supporters over a single vote you ' +
       'cast years ago, before any of this. Brayden shows you the thread. "It\'s not really about the vote, ' +
       'sir. It never is. It\'s about who gets to be the realest fan."',
  choices:[
    { label:'Publicly bless the purest faction. Let the rest sort it out.', eff:{base:+5,press:-4,street:-2,auth:+2},
      res:'You pick a side in a fight about your own devotion, which is a strange sentence to write and a stranger one to say out loud, and yet you say it.' },
    { label:'Call for unity. Refuse to rank anyone\'s loyalty.', eff:{base:-3,press:+3,congress:+1,auth:0},
      res:'You decline to referee a purity contest among your own supporters. It is genuinely the healthier move and it satisfies absolutely no one in the thread.' },
    { label:'Quietly fund the louder faction\'s newsletter.', eff:{base:+4,press:-3,courts:-2,cash:-0.2,auth:+1},
      res:'A modest, untraceable transfer keeps the loudest voices loudest. The infighting intensifies, which, Brayden notes, at least keeps everyone talking about you.' },
    { label:'Invite both factions to a joint cookout and film it.', eff:{base:+2,press:-4,street:-3,auth:-1}, wild:true,
      res:'A televised barbecue meant to reconcile two warring fan factions instead produces the single most-clipped argument over potato salad in cable news history.' }]},

{ id:'q-heat-stroke', title:'The Heat Advisory', who:C.doc, min:5, max:44, tags:['base'],
  text:'Dr. Prine has the numbers from the last outdoor rally: forty-one heat-related medical calls, one ' +
       'serious, on a day the weather service flagged as dangerous well in advance. "They stood in that sun ' +
       'for you for six hours, sir. Some of them will do it again next week if you ask."',
  choices:[
    { label:'Schedule the next one for peak afternoon. Bigger crowd, better light.', eff:{base:+6,press:-4,street:-2,auth:+2},
      res:'You choose the harshest hour for the best photograph. The medical tent does brisk business and stays entirely out of frame.' },
    { label:'Move future rallies to evenings. Add water stations.', eff:{base:-3,press:+4,congress:+1,cash:-0.1,auth:0},
      res:'A genuinely sensible scheduling change and a few pallets of water bottles prevent the next forty-one calls. It is invisible, cheap, and correct.' },
    { label:'Blame the venue for insufficient shade.', eff:{base:+3,press:-3,street:-2,auth:+1},
      res:'You fault the stadium rather than the schedule. The venue\'s management, reached for comment, points out they offered an evening slot that was declined.' },
    { label:'Have Dr. Prine personally hydrate the front row on camera.', eff:{base:+2,press:-4,street:-2,courts:-1,auth:0}, wild:true,
      res:'The Physician to the President spends a rally handing out water bottles to the front row instead of monitoring the tent behind him. He calls it, afterward, "not my finest triage."' }]},

{ id:'q-wax-figure', title:'The Wax Figure', who:C.hist, tags:['base','levity'],
  text:'Dr. Weir informs you, with visible reluctance, that a wax museum has unveiled a figure of you mid-rally, ' +
       'fist raised, expression somewhere between triumphant and mildly startled. "It doesn\'t look quite ' +
       'like you, sir. It looks like what people believe you look like. That\'s a different thing entirely."',
  choices:[
    { label:'Demand it be redone. Bigger fist, better jaw.', eff:{base:+5,press:-3,cash:-0.1,auth:+1},
      res:'A wax figure is remodeled by presidential request to be more heroic and less accurate. The museum quietly notes this is the first such request in its history.' },
    { label:'Let it stand. It\'s not worth the fight.', eff:{base:-2,press:+3,congress:+1,auth:0},
      res:'You decline to litigate the accuracy of a wax figure\'s jawline. It remains, slightly wrong, forever, which is more dignity than most statues get.' },
    { label:'Buy the museum. Add a whole wing.', eff:{base:+5,press:-3,cash:-0.4,auth:+1},
      res:'A wax museum becomes, quietly, part of a personal real estate portfolio, with an entire new wing dedicated to your greatest hits, wax and otherwise.' },
    { label:'Send your own wardrobe for the figure to wear.', eff:{base:+3,press:-3,courts:-2,street:-2,auth:0}, wild:true,
      res:'An actual suit from your own closet is shipped to dress a wax replica of you. The dry cleaner who normally handles it declines, this once, to explain why.' }]},

{ id:'q-fireworks-budget', title:'The Fireworks Line Item', who:C.broom, min:6, max:44, tags:['base','money'],
  text:'Roscoe Vandermeer has found the rally fireworks budget buried three line items deep in a homeland ' +
       'security account. "It\'s not illegal, sir, technically. It\'s just filed under \'critical ' +
       'infrastructure resilience,\' which I have questions about."',
  choices:[
    { label:'Leave it buried. Double next month\'s show.', eff:{base:+6,press:-4,courts:-3,cash:-0.3,auth:+2},
      res:'The fireworks stay funded under a heading that has nothing to do with fireworks, and next month\'s finale is, undeniably, bigger.' },
    { label:'Move it to its own honest line item.', eff:{base:-3,press:+4,congress:+2,cash:-0.1,auth:0},
      res:'The fireworks get their own transparent budget category, at real political cost, because someone has to say the word "fireworks" out loud in a hearing eventually.' },
    { label:'Reclassify it as "morale infrastructure" instead. Cleaner sounding.', eff:{base:+4,press:-3,courts:-2,cash:-0.2,auth:+1},
      res:'A new euphemism replaces the old one. Roscoe, ever the efficiency man, admits it is at least a more honest kind of dishonest.' },
    { label:'Have BROOM sponsor the fireworks openly, as a savings showcase.', eff:{base:+2,press:-4,courts:-3,congress:-2,cash:-0.2,auth:0}, wild:true,
      res:'An efficiency agency publicly sponsors an explosive pyrotechnics display as an example of "smart spending." The math behind that sentence never quite arrives.' }]}

);
})();
