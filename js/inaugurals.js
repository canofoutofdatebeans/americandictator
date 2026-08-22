/* ============================================================
   AMERICAN DICTATOR, inaugurals.js
   THE FIRST CARD.

   Every game opens on an INAUGURATION card, and it is the hook: the
   funniest, most inviting thing in the deck, the handshake that tells a
   new player exactly what tone they are in for. One is served at the very
   start of a term and never again, so a game sees at most TWO of these,
   one for term one, one, themed as a RETURN, for term two.

   Term one is the swearing-in of a brand-new strongman: the oath, the
   crowd size, the desk drawers, the button. Term two is the RE-inaugural
   of a man who has done all of this once, knows where the bathrooms are,
   and has stopped pretending there is a learning curve, or a next
   election.

   Each card's choices set the opening posture, bombast for the base and
   against the institutions, or the sober version that bores him, so the
   effects are modest: this is a first impression, not a turning point.

   Fictional cast and country, like everything else. Loaded after events.js
   (owns AD.CAST) so `AD.pickInaugural` can be wired into the engine.
   ============================================================ */

(function () {

const E = AD.CAST;

/* Small helper: three tones. `wild` marks the bombastic option so the
   President's own voice and the Boredometer read it as a spectacle. */

AD.INAUGURALS = [

/* ═══════════════════ TERM ONE, THE SWEARING-IN ═══════════════════ */

{ id:'inaug-oath', term:1, title:'The Oath', who:E.cj, tags:['power'],
  text:`Winifred Stone holds the Bible. You put your hand on it. Somewhere in the second clause you `+
       `realise you have not been listening, you have been counting the crowd, and she has stopped, `+
       `and everyone is waiting for you to repeat a sentence you did not hear.`,
  choices:[
    { label:'Repeat it louder than she said it. Add a word.', wild:true, eff:{ base:6, press:-3, courts:-2, auth:2 },
      res:`You swear to "faithfully and beautifully" execute the office. The word is not in the Constitution. It is now in the footage forever.` },
    { label:'Say it back exactly. Nail the one job.', eff:{ base:-2, courts:4, press:3, congress:2, auth:1 },
      res:`Word perfect. The one ceremonial task the office requires, performed correctly, which several people note is a promising and completely unrepresentative start.` },
    { label:'Ad-lib a thank-you to yourself mid-oath.', eff:{ base:4, press:-2, auth:1 },
      res:`You thank the voters, the movement, and, at some length, the man taking the oath. The Chief Justice waits. She has all day. She does not have all day, but she waits.` } ] },

{ id:'inaug-crowd', term:1, title:'The Crowd Size', who:E.press, tags:['press','base'],
  text:`Kaylee has two photographs. One is the crowd on the Mall. The other is the crowd on the Mall, `+
       `and they are the same crowd, taken from the same helicopter, forty seconds apart. She would `+
       `like a number to give the room before somebody else picks one.`,
  choices:[
    { label:'"Largest audience to ever witness an inauguration. Period."', wild:true, eff:{ base:7, press:-5, auth:2 },
      res:`She reads the number you invent, standing very still, with the tone of a woman reading a hostage note she wrote herself.` },
    { label:'Give the real figure and move on.', eff:{ base:-4, press:5, congress:2, auth:-1 },
      res:`An accurate attendance number is released without adjectives. It is the last one this administration will ever publish.` },
    { label:'Refuse to discuss it, at enormous length.', eff:{ base:3, press:-2, auth:1 },
      res:`You spend nine minutes explaining that you will not be discussing the crowd size, which is, technically, a way of discussing the crowd size.` } ] },

{ id:'inaug-button', term:1, title:'The Button', who:E.usher, tags:['power'],
  text:`There is a red button on the Resolute Desk. Alvin, the chief usher, watches you notice it. `+
       `Your hand is already moving. He should say something. He has decided, in this instant, `+
       `that his pension is not worth what would come out of his mouth.`,
  choices:[
    { label:'Press it. Obviously press it.', wild:true, eff:{ base:5, press:-2, auth:1 },
      res:`A steward arrives with a Diet Coke. It is the button for the Diet Coke. You press it four more times to be sure. Four more Diet Cokes arrive. This is the best day of your life.` },
    { label:'Ask what it does first, like a coward.', eff:{ base:-1, congress:2, courts:1 },
      res:`Alvin explains it is for beverages. You are visibly disappointed that the most powerful desk on Earth summons a soft drink and not a battleship.` } ] },

{ id:'inaug-desk', term:1, title:'The Letter in the Drawer', who:E.cos, tags:['power','press'],
  text:`Tradition: the outgoing President leaves a private letter in the desk for the incoming one. `+
       `Deborah found it. It is one line long. It says, in a steady hand, "Please read anything." `+
       `She is not sure whether to file it or frame it.`,
  choices:[
    { label:'Read it aloud to the cameras as a tribute to yourself.', wild:true, eff:{ base:4, press:-3, auth:1 },
      res:`You present the insult as a warm farewell from a defeated rival, and the base receives it exactly that way, which is somehow the most devastating possible outcome for the person who wrote it.` },
    { label:'Burn it. Start the mystery early.', eff:{ base:3, press:-2, courts:-1, auth:1 },
      res:`The letter is gone. For the rest of your term, reporters will ask what it said. You will imply it was flattering. It was not flattering.` },
    { label:'Actually take the advice. Just this once.', eff:{ base:-3, press:4, congress:3, courts:2 },
      res:`You read a folder, cover to cover, on day one. It never happens again, but the folder was read, and a career official quietly writes the date down.` } ] },

{ id:'inaug-football', term:1, title:'The Football', who:E.gen, tags:['power'],
  text:`A colonel is handcuffed to a briefcase and he will now, whether you enjoy it or not, follow you `+
       `for four years. General Tarrant begins the briefing on the codes. You are looking at the `+
       `briefcase the way a toddler looks at a lit stove.`,
  choices:[
    { label:'Ask, hypothetically, how fast it is.', wild:true, eff:{ base:5, press:-4, courts:-2, congress:-2, auth:2 },
      res:`Mick answers the question flatly, factually, and completely, and the room gets very cold, and somebody makes a note to shorten your access to precisely this conversation.` },
    { label:'Listen to the whole briefing. Look serious.', eff:{ base:-2, congress:3, courts:2, press:2, auth:1 },
      res:`You pay attention for eleven straight minutes. Tarrant, who briefed your three predecessors, revises his retirement timeline upward by a cautious two years.` } ] },

{ id:'inaug-eo', term:1, title:'The First Signature', who:E.lawyer, tags:['courts','power'],
  text:`Sy has a stack of executive orders and a very large marker. The first one you sign will be `+
       `photographed, framed, and litigated. He suggests starting with something small and legal. `+
       `You are holding the marker like a sword.`,
  choices:[
    { label:'Sign the biggest, boldest one. Hold it up.', wild:true, eff:{ base:7, courts:-6, press:-4, congress:-3, auth:3 },
      res:`You sign it, flip it around, and show the room your own signature the size of a car. It is enjoined by a district judge in Hawaii before the marker is dry.` },
    { label:'Sign the small, boring, bulletproof one.', eff:{ base:-3, courts:5, congress:3, press:2, auth:1 },
      res:`You sign an order renaming a committee. It will never be challenged, because no one can find a reason to care, which Sy calls, sincerely, a triumph.` },
    { label:'Sign all of them at once, without reading.', eff:{ base:5, courts:-4, press:-3, auth:2 },
      res:`You sign the entire stack in ninety seconds. Two of them contradict each other. One of them, it later emerges, orders the government to sue itself.` } ] },

{ id:'inaug-address', term:1, title:'The Inaugural Address', who:E.cos, tags:['base','press'],
  text:`Two speeches on the lectern. One is nineteen minutes, unifying, written by professionals. The `+
       `other is on the back of a diner placemat, in your own hand, and Deborah has read it, and she `+
       `has aged perceptibly. "Sir. Your choice. Obviously your choice."`,
  choices:[
    { label:'The placemat. Give them "American Carnage" energy.', wild:true, eff:{ base:8, press:-5, street:-4, congress:-2, auth:2 },
      res:`Twelve minutes of pure grievance under a grey sky. Historians will quote it for a century, always in the same appalled tone. The base will quote it back to you at every rally you ever hold.` },
    { label:'The professional one. Sound like a President.', eff:{ base:-4, press:6, congress:4, street:3, auth:1 },
      res:`You deliver nineteen dignified minutes about unity and renewal. It polls beautifully and is forgotten by dinner, which is the fate of every good speech ever given from that spot.` } ] },

{ id:'inaug-cabinet', term:1, title:'The First Cabinet Meeting', who:E.vp, tags:['congress','base'],
  text:`Fifteen department heads around the table, and Chet, your VP, opens by saying it is the `+
       `"greatest privilege of my life" to serve you. He means it as a warm-up. He has, catastrophically, `+
       `started something. Every head now turns, in sequence, toward the next one.`,
  choices:[
    { label:'Go around the table. Make everyone do it.', wild:true, eff:{ base:6, press:-4, congress:-3, courts:-2, auth:2 },
      res:`Fifteen cabinet secretaries praise you, on camera, one after another, in ascending order of desperation. It is broadcast in full. It is studied in political science departments for a decade under the heading "warning signs."` },
    { label:'Cut it off. Ask for one actual problem to solve.', eff:{ base:-3, congress:4, press:4, courts:2, auth:1 },
      res:`You stop the praise circle and ask for a real briefing. The relief in the room is a physical pressure change. Somebody actually tells you a true thing about the economy.` } ] },

{ id:'inaug-decor', term:1, title:'The Redecoration', who:E.usher, tags:['press','money'],
  text:`Alvin presents the residence as the last family left it: tasteful, historic, beige. You have `+
       `already summoned a man with a swatch book the size of a paving slab. The swatches are all the `+
       `same colour. The colour is "more."`,
  choices:[
    { label:'Gold. All of it. The drapes, the doors, the ceiling.', wild:true, eff:{ base:5, press:-4, cash:-0.2, auth:1 },
      res:`Two hundred years of restrained federal taste is corrected in a fortnight. A curator resigns in a letter so polite it takes three readings to notice it is a scream.` },
    { label:'Leave it. You have a country to break.', eff:{ base:-1, press:3, congress:1 },
      res:`You decline to redecorate, which is reported, briefly and incorrectly, as a sign of seriousness.` } ] },

{ id:'inaug-briefing', term:1, title:'The First Intelligence Briefing', who:E.spy, tags:['power','courts'],
  text:`Errol Hance, Director of Intelligence, has the President's Daily Brief. It is dense, sourced, `+
       `and terrifying. He has, at your staff's request, also prepared a version with pictures and `+
       `fewer words. He is holding both, and trying to decide which one to hand you, in front of you.`,
  choices:[
    { label:'Take the one with the pictures. No notes.', wild:true, eff:{ base:4, press:-3, courts:-2, auth:1 },
      res:`You receive the nation's secrets as a slideshow. Errol narrates it like a man reading a bedtime story to a bear he is not sure is asleep.` },
    { label:'Take the real one. Ask a follow-up question.', eff:{ base:-3, congress:3, courts:3, press:2, auth:1 },
      res:`You read the actual brief and ask something sharp about it. Hance does not show surprise, because that is his entire job, but he files the moment away as anomalous.` } ] },

{ id:'inaug-oval-first', term:1, title:'Alone in the Oval', who:E.cos, tags:['power'],
  text:`Everyone has left. It is the first time you are alone in the room, the actual room, the one from `+
       `the movies. Deborah is watching through the door, because it is her job to know what you do in `+
       `the first thirty seconds of unsupervised absolute power.`,
  choices:[
    { label:'Sit in the chair. Spin. Fully spin.', wild:true, eff:{ base:5, press:-1, auth:1 },
      res:`You do one complete revolution in the chair of Lincoln and Roosevelt, arms out, and for one unguarded second your face is pure childhood joy, and Deborah decides, with love and terror, that she will never mention it.` },
    { label:'Stand at the window. Feel the weight.', eff:{ base:-1, congress:2, courts:2, press:2 },
      res:`You stand at the bulletproof glass and feel, briefly and genuinely, the size of it. It passes. It always passes. But it was there, and it counted.` } ] },

{ id:'inaug-parade', term:1, title:'The Parade', who:E.gen, tags:['base','street'],
  text:`The inaugural parade is being finalised. Marching bands, floats, veterans. You have asked, `+
       `three times now, whether there can be tanks. Tarrant has explained, three times, that the `+
       `avenue was not built for tanks. You are about to ask a fourth time.`,
  choices:[
    { label:'Tanks. Real tanks. Down the avenue. Now.', wild:true, eff:{ base:6, press:-4, street:-3, congress:-2, cash:-0.2, auth:2 },
      res:`The tanks roll. The avenue cracks in four places under the weight. The repair bill is filed under "morale," and the image leads every newscast on Earth, which was, of course, the entire point.` },
    { label:'Bands and veterans. Keep the road intact.', eff:{ base:-1, street:3, press:2, congress:2 },
      res:`A dignified traditional parade proceeds. The road survives. Nobody remembers it, which is what a functioning ceremony is supposed to feel like.` } ] },

{ id:'inaug-post', term:1, title:'The First Post', who:E.social, tags:['press','base'],
  text:`Brayden, Director of Posting, has the official account open. Your first message as President `+
       `will be screenshotted before you finish typing it. He suggests something presidential. Your `+
       `thumbs are already moving and the caps lock is, he notes with dread, engaged.`,
  choices:[
    { label:'All caps. A nickname for an enemy. Send it.', wild:true, eff:{ base:7, press:-5, congress:-3, courts:-2, auth:2 },
      res:`Your first act as head of state is to rename a senator, in capitals, at 6:14am. It does four hundred million impressions. Governing, you are discovering, is going to be extremely easy and extremely loud.` },
    { label:'"It is a profound honour to serve." Post that.', eff:{ base:-3, press:4, congress:3, courts:2 },
      res:`A dignified, humble first message goes out. It is the least-engaged post the account will ever publish, and you notice, and you will not make that mistake again.` } ] },

{ id:'inaug-ball', term:1, title:'The Inaugural Ball', who:E.cos, tags:['base','press'],
  text:`The first dance. A live band, a ballroom, the world's cameras, and a spouse who has choreographed `+
       `something modest and dignified with a professional. You have not learned it. You have, Deborah `+
       `notices, been "feeling the music" since the salad course.`,
  choices:[
    { label:'Freestyle it. Do the fist-pumps. Commit.', wild:true, eff:{ base:6, press:-3, auth:1 },
      res:`You perform a dance that experts will later struggle to name, to a song that was not the agreed song, and the base adores every second, and the choreographer walks into the Potomac.` },
    { label:'Do the box step you were taught. Sway. Survive.', eff:{ base:1, press:3, street:2 },
      res:`You execute a competent, human, four-count box step. It is charming precisely because nobody expected competence, which is a bar you will spend four years limbo-ing under.` } ] },

{ id:'inaug-fridge', term:1, title:'The Residence Tour', who:E.usher, tags:['base'],
  text:`Alvin walks you through the private residence. Bowling alley. Cinema. A kitchen staffed around `+
       `the clock that will make you literally anything at any hour. He watches this last fact land on `+
       `you like a religious revelation.`,
  choices:[
    { label:'Order two well-done steaks and a bucket of sauce. 3am standing.', wild:true, eff:{ base:5, press:-1, auth:1 },
      res:`A brigade of classically trained chefs is informed of your standing order. One of them, a graduate of a Michelin kitchen, quietly recalibrates every ambition he has ever held.` },
    { label:'Ask where the actual work happens. Get to it.', eff:{ base:-2, congress:3, courts:2, press:2 },
      res:`You skip the amenities and ask to see the situation room. Alvin, moved, gives you the real tour, and privately upgrades his estimate of the next four years from "catastrophe" to "unpredictable."` } ] },

{ id:'inaug-callworld', term:1, title:'The Congratulations Calls', who:E.state, tags:['power','press'],
  text:`Muriel Vantz has a stack of call slips. Every world leader wants ninety seconds to congratulate `+
       `you. Allies first, she advises, then the neutrals, then, carefully, the difficult ones. The `+
       `strongman's slip is, she notes, at the bottom for a reason.`,
  choices:[
    { label:'Call the strongman first. He gets you.', wild:true, eff:{ base:5, press:-4, congress:-4, courts:-2, auth:2 },
      res:`You take the difficult call first, warmly, at length. Three allied embassies notice the order of operations within the hour, and the whole of your foreign policy is, in a sense, already written.` },
    { label:'Allies first, in order, like a normal country.', eff:{ base:-3, congress:4, press:4, street:2, auth:1 },
      res:`You work the list in the correct sequence. It is boring, it is correct, and it buys you a month of the benefit of the doubt from people who were bracing for the opposite.` } ] },

{ id:'inaug-portrait', term:1, title:'The Official Portrait', who:E.press, tags:['press','base'],
  text:`The photographer has forty minutes to capture the image that hangs in every federal building for `+
       `four years. She suggests the traditional pose: flag, desk, faint statesmanlike smile. You have `+
       `brought your own idea. Your own idea involves a lower camera angle. Much lower.`,
  choices:[
    { label:'Shoot up from below. Make me a colossus.', wild:true, eff:{ base:5, press:-3, auth:1 },
      res:`The portrait is taken from roughly knee height, so that you loom over the viewer like weather. Every post office in the country now has a picture that makes toddlers cry, which you consider a resounding success.` },
    { label:'Take the normal one. Look trustworthy.', eff:{ base:-1, press:3, congress:2 },
      res:`A dignified, eye-level portrait is captured. It is fine. It is presidential. You will complain that it makes you look "tired and weak" for the entire term.` } ] },

{ id:'inaug-swearin-family', term:1, title:'The Family on the Steps', who:E.cos, tags:['base','money'],
  text:`The family is arranged on the steps for the photo. Your eldest is already briefing a reporter `+
       `about a "tremendous opportunity." Your daughter has an unpaid advisory title and a paid `+
       `consulting firm. Deborah suggests, gently, keeping the two things in separate buildings.`,
  choices:[
    { label:'Give them all West Wing offices. Family is family.', wild:true, eff:{ base:4, press:-5, courts:-4, congress:-3, cash:0.3, auth:1 },
      res:`Three relatives receive security clearances and corner offices by lunchtime. The ethics office issues a memo. The memo is placed in a drawer. The drawer is, itself, staffed by a nephew.` },
    { label:'Keep them out of government. Painful, but clean.', eff:{ base:-3, press:5, courts:4, congress:3 },
      res:`You keep the family off the federal payroll. Everyone is quietly stunned. Your eldest sulks for a week and then launches a cologne, which is, all things considered, the safer outcome.` } ] },

{ id:'inaug-weather', term:1, title:'The Weather', who:E.press, tags:['base','press'],
  text:`It is raining. Not dramatically, just steadily, greyly, on the biggest day of your life, in front `+
       `of the largest crowd in the history of crowds. Kaylee has an umbrella. You are eyeing it the way `+
       `you would eye a white flag.`,
  choices:[
    { label:'No umbrella. Get soaked. Declare the sun came out.', wild:true, eff:{ base:6, press:-4, auth:1 },
      res:`You stand bareheaded in visible rain and later insist, on the record, that the moment you began speaking "the heavens cleared." The heavens are on video. The heavens did not clear.` },
    { label:'Take the umbrella. You are sixty-something.', eff:{ base:-2, press:2, congress:1 },
      res:`You accept the umbrella like a reasonable adult. It is the single least controversial decision of your entire presidency and nobody will ever mention it again.` } ] },

{ id:'inaug-anthem', term:1, title:'The Anthem', who:E.social, tags:['base','press'],
  text:`A beloved veteran singer is scheduled for the anthem, then dropped out, citing "a scheduling `+
       `conflict that is my conscience." Brayden has a replacement: a reality-show finalist who will `+
       `do it for the exposure and has, he stresses, "a big note planned."`,
  choices:[
    { label:'The finalist. The big note. Turn it up.', wild:true, eff:{ base:5, press:-3, auth:1 },
      res:`The anthem lasts four minutes and ends on a note that sets off a car alarm two blocks away. The base is electrified. Three music teachers file complaints with the FCC.` },
    { label:'Just play the recording. Less risk.', eff:{ base:-1, press:2, street:2 },
      res:`A clean instrumental recording plays. It is fine. Nobody trends. You spend the afternoon wondering, out loud, whether you should have had the big note.` } ] },


/* ═══════════════════ TERM TWO, THE RETURN ═══════════════════ */

{ id:'inaug2-oath', term:2, title:'The Second Oath', who:E.cj, tags:['power'],
  text:`Winifred Stone again, older, the same Bible. This time you know the words. You knew them last `+
       `time too, but this time you know them the way a man knows the layout of a house he has already `+
       `robbed once. She reads the oath. There is a new flatness in how she watches you take it.`,
  choices:[
    { label:'Say it perfectly, then wink at her.', wild:true, eff:{ base:6, courts:-4, press:-3, auth:3 },
      res:`Flawless delivery, then a wink, on camera, at the Chief Justice of the United States, who does not return it, and whose expression is studied, frame by frame, by everyone who understands what the next four years are going to be.` },
    { label:'Take it plainly. No theatrics. You are past that.', eff:{ base:1, courts:2, press:2, auth:2 },
      res:`You take the oath like a man signing for a package he already owns. The lack of ceremony is its own message, and everybody in the building receives it.` } ] },

{ id:'inaug2-transition', term:2, title:'The Empty Transition', who:E.cos, tags:['power'],
  text:`There is no transition team, because there is no transition. Deborah brings the binder. It is `+
       `four pages. "There is no learning curve to brief you on, sir. You are already at the top of it. `+
       `The only thing that has changed since November is the one thing that was keeping you in check, `+
       `and it is gone."`,
  choices:[
    { label:'"What was keeping me in check?" / "The next election, sir."', wild:true, eff:{ base:5, courts:-5, press:-5, congress:-4, auth:4 },
      res:`She says it plainly: the ballot was the restraint, and you are term-limited now, so it has been removed. You smile. It is the wrong thing to smile at. You smile anyway.` },
    { label:'Get straight to work. No ceremony needed.', eff:{ base:-2, congress:3, courts:3, press:2, auth:2 },
      res:`You skip every ceremony you can legally skip and start signing at 8am. It reads as discipline. It is, in fact, appetite, which looks identical from the outside and is not.` } ] },

{ id:'inaug2-loyalists', term:2, title:'The Ones Who Stayed', who:E.vp, tags:['congress','base'],
  text:`The cabinet room is different this time. The professionals, the ones who resigned in principle, `+
       `the ones who wrote the anonymous op-eds, all gone. What is left is loyal. Purely, entirely `+
       `loyal. Chet looks around the table with real satisfaction. "No adults this time, sir. Just us."`,
  choices:[
    { label:'"Good. The adults were the problem." Toast the room.', wild:true, eff:{ base:6, press:-5, courts:-4, congress:-3, auth:3 },
      res:`You toast a cabinet with no dissenters, no brakes, and no one who will ever tell you a thing you do not want to hear. It is the most dangerous room you have ever been the least dangerous person in.` },
    { label:'Quietly miss the ones who said no.', eff:{ base:-3, congress:3, courts:3, press:3, auth:1 },
      res:`You realise, without saying it, that the people who fought you were the people who saved you from your worst days, and they are all gone, and you appointed the ones who are left specifically because they will not do that.` } ] },

{ id:'inaug2-address', term:2, title:'As I Was Saying', who:E.press, tags:['base','press'],
  text:`The second inaugural address. Kaylee notes that the crowd is smaller, more devoted, and entirely `+
       `yours; the doubters stopped coming years ago. You open the folder. The professionals wrote you `+
       `something about healing. You look up at a sea of your own faces on hats.`,
  choices:[
    { label:'"Now the gloves come off." Go scorched-earth.', wild:true, eff:{ base:8, press:-6, street:-5, congress:-4, courts:-3, auth:3 },
      res:`You promise the true believers that the restraint is over and the reckoning has begun. They roar. It is the honest speech, finally, and honesty from that podium turns out to be the most alarming thing anyone has ever heard there.` },
    { label:'Fake the healing speech. Buy yourself cover.', eff:{ base:-2, press:5, congress:3, street:3, auth:1 },
      res:`You deliver soaring words about unity that you do not mean and everyone knows you do not mean, and it works anyway, because a lie told from that height still moves markets and calms allies for exactly one quarter.` } ] },

{ id:'inaug2-amendment', term:2, title:'The Number Twenty-Two', who:E.lawyer, tags:['power','courts'],
  text:`Sy is early, and pale. "Sir, before we start, one housekeeping item. There is a document called `+
       `the Twenty-Second Amendment. It says two terms. People are already asking what you think of it. `+
       `I need to know what to tell them, because whatever I say, I can never fully take back."`,
  choices:[
    { label:'"Say we are looking into it." Watch the country flinch.', wild:true, eff:{ base:7, courts:-6, congress:-6, press:-5, street:-4, auth:4 },
      res:`Three words, "looking into it," and every constitutional scholar in the country is on television by nightfall. You have not done anything. You have merely refused to rule it out, and refusing to rule it out is, it turns out, the entire move.` },
    { label:'"Two terms. I said two terms." Shut it down.', eff:{ base:-4, courts:5, congress:5, press:4, street:3, auth:-1 },
      res:`You state, on the record, that you will leave. Half the room believes you. The relief in the other half tells you exactly how much power was sitting in the ambiguity you just gave away.` } ] },

{ id:'inaug2-enemies', term:2, title:'The List That Waited', who:E.ag, tags:['courts','power'],
  text:`Bo Slaughter, your Attorney General, has a folder. "You spent the first term being told what you `+
       `could not do to the people who came after you. That advice was from lawyers who no longer work `+
       `here. The people are all still here, sir. The list is the same list. The only thing that changed `+
       `is the advice."`,
  choices:[
    { label:'Open the folder. Start at the top.', wild:true, eff:{ base:6, courts:-7, press:-6, congress:-4, street:-3, auth:4 },
      res:`You begin, on day one of the second term, to use the government against the names on a list. It is the thing every guardrail was built to prevent, and you are finding, one by one, that the guardrails were mostly other people's nerve, and those people are gone.` },
    { label:'Close the folder. Some lines still hold.', eff:{ base:-4, courts:6, press:5, congress:4, auth:-1 },
      res:`You decline to open the second term with a purge. Bo nods, unreadable. The list goes back in the drawer, where it will sit, and hum, for four years.` } ] },

{ id:'inaug2-portrait', term:2, title:'The Two Portraits', who:E.press, tags:['press','base'],
  text:`They hang the new official portrait next to the old one for the unveiling. The photographer `+
       `has been kind. The lighting has been kinder. But the two faces are four years apart, and `+
       `the job did the four years, and then some, and you are looking at the proof on a wall.`,
  choices:[
    { label:'Order them to reshoot until you look younger.', wild:true, eff:{ base:4, press:-4, cash:-0.1, auth:1 },
      res:`Eleven reshoots and a small fortune in retouching later, the official portrait depicts a man who has never been tired, never lost, and never, apparently, aged, hanging beside a first-term photo that now looks, by comparison, like a documentary.` },
    { label:'Hang it as it is. Let them see the cost.', eff:{ base:-1, press:4, congress:2, street:2 },
      res:`You let the honest portrait hang. It is a strangely powerful thing, the President admitting the years, and for one news cycle you are, unaccountably, sympathetic.` } ] },

{ id:'inaug2-press', term:2, title:'The Reporters Who Remember', who:E.press, tags:['press'],
  text:`The first briefing of the second term. The room is thinner; some outlets lost their access, some `+
       `lost their nerve, one lost its owner to a friendly buyer. But the ones left are the ones who `+
       `stayed through everything, and they are not new at this, and neither are you.`,
  choices:[
    { label:'Take no questions. Read a number. Walk off.', wild:true, eff:{ base:5, press:-5, courts:-2, auth:2 },
      res:`You deliver a statistic and leave through the side door before the first hand is fully up. It is efficient, it is contemptuous, and it is the entire relationship for the next four years, established in ninety seconds.` },
    { label:'Take three real questions. Show you can still swing.', eff:{ base:1, press:3, congress:2, auth:1 },
      res:`You take three sharp questions and land two of the three answers, which is a better ratio than most, and the veterans in the room remember, grudgingly, that you are quick when you decide to be.` } ] },

{ id:'inaug2-world', term:2, title:'The Calls, This Time', who:E.state, tags:['power','press'],
  text:`Muriel has the congratulations calls again. The list is the same names, but the temperature is `+
       `not. Four years ago they were guessing. Now they know exactly what you are, and the allies are `+
       `careful, and the strongmen are warm, and everyone has read the file.`,
  choices:[
    { label:'Skip the allies entirely. Call your friends.', wild:true, eff:{ base:5, press:-4, congress:-5, courts:-2, street:-2, auth:2 },
      res:`You return the strongmen's calls and let the allies wait by the phone, and the allies notice, and quietly, in eleven capitals, four-year plans that do not depend on you at all begin their second drafts.` },
    { label:'Reassure the allies first. You still need them.', eff:{ base:-3, congress:4, press:4, street:2, auth:1 },
      res:`You spend the morning steadying nervous democracies. It is unglamorous, it trends nowhere, and it is worth more than any single thing you will do on camera all year.` } ] },

{ id:'inaug2-mirror', term:2, title:'Alone in the Oval, Again', who:E.cos, tags:['power'],
  text:`Everyone leaves. The room is the same room. The chair is the same chair. You do not spin it this `+
       `time. You have done that. Deborah watches through the door, and what she is watching for is `+
       `whether the second time in this room feels like anything at all, or whether it has stopped.`,
  choices:[
    { label:'Sit down like it is a desk. Get to work.', wild:true, eff:{ base:3, press:-2, courts:-2, congress:-2, auth:3 },
      res:`You sit without ceremony and pull the first folder toward you, and the room, which awes almost everyone who has ever entered it, is just an office to you now, and Deborah understands that this is the most frightening development of all.` },
    { label:'Stand at the window one more time. Try to feel it.', eff:{ base:-1, congress:2, courts:2, press:2 },
      res:`You stand at the glass and reach for the weight you felt four years ago, the size of it, the fear. It does not come. You tell yourself it is confidence. Deborah, watching, calls it something else, but only to herself.` } ] }

];

/* ---------- serving the first card ----------
   Deterministic by seed and term, so a given save always opens the same way
   (which the Daily seed relies on for fair comparison) but different games open
   differently. `used` guards against a term ever serving two of these. */
AD.pickInaugural = function (run) {
  const pool = AD.INAUGURALS.filter(c => (c.term || 1) === run.term);
  if (!pool.length) return null;
  run.flags = run.flags || {};
  if (run.flags['inaugDone' + run.term]) return null;      // one per term, ever
  const seed = String(run.seed || 'X') + ':inaug:' + run.term;
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) { h ^= seed.charCodeAt(i); h = Math.imul(h, 16777619); }
  const card = pool[(h >>> 0) % pool.length];
  run.flags['inaugDone' + run.term] = card.id;
  return card;
};

})();
