/* ============================================================
   AMERICAN DICTATOR, callbook2.js
   THE OTHER TWENTY.

   call.js ships twenty contacts and owns the phone mechanics. This
   doubles the address book to FORTY, on the same principle: nobody
   shares a menu with anybody else, because the joke is never "you
   made a call", it is "you made THAT call to THAT person".

   Every contact here carries four options:

     two ordinary   small nudges, in the President's own voice
     one MAJOR      a genuine swing that can take a room down with it
     one SILLY      the reason the phone is the Boredometer lever.
                    Barely moves a meter. Moves boredom hard. It is
                    the option a President who is bored of governing
                    actually wants, and it is usually the funniest
                    thing available in the whole room.

   The register is the same as call.js: bombastic, superlative,
   grievance-and-greatness. It is a STYLE. Every name is invented,
   including the ones that sound like somebody. Loaded after call.js,
   which owns the merge target.
   ============================================================ */

(function () {

const MORE = [

/* ---------------- allies ---------------- */
{
  id: 'ag', cat: 'ally', name: 'Attorney General Pike', note: 'your lawyer, allegedly the country’s',
  opts: [
    { label: 'Ask Who Is Being Investigated Today', icon: '\u{1F5C4}\u{FE0F}', eff: { courts: -1, base: 2, congress: 1 },
      line: '"Just give me the list, the whole list, who’s under investigation, I like to know these things, I’m the President."' },
    { label: 'Suggest a Name to Look Into', icon: '\u{1F50E}', eff: { base: 4, courts: -3, press: -2 },
      line: '"Somebody should really look into that person, very carefully, I’m not telling you to, I would never, but somebody should."' },
    { label: 'Order the Department to Drop It', icon: '\u{1F5D1}\u{FE0F}', major: true, eff: { base: 8, courts: -7, press: -5, congress: -4, auth: 4 },
      line: '"Make it go away, all of it, today, this is a hoax, the biggest hoax, and you work for me, remember that."' },
    { label: 'Have Him Read the Constitution Until You Sleep', icon: '\u{1F4DC}', silly: true, eff: { base: 1, courts: 1, fun: 10 },
      line: 'The chief law officer of the United States reads Article Two aloud down a phone line at eleven at night, slowly, until the breathing on the other end changes. He gets to the impeachment clause before he realises nobody is listening.' }
  ]
},
{
  id: 'daughter', cat: 'ally', name: 'Senior Adviser Cassidy', note: 'the favourite',
  opts: [
    { label: 'Ask Her Opinion on Absolutely Everything', icon: '\u{1F4A1}', eff: { congress: 2, press: 2, base: 1 },
      line: '"What do you think, on the trade thing, and the Middle East thing, and the tie, she has tremendous instincts, the best instincts."' },
    { label: 'Hand Her Another Portfolio', icon: '\u{1F4C1}', eff: { base: 3, congress: -3, press: -3, courts: -2 },
      line: '"Give her the opioid crisis too, and government reform, she can handle it, she can handle anything, tremendous natural ability."' },
    { label: 'Put Her in Charge of the Peace Process', icon: '\u{1F54A}\u{FE0F}', major: true, eff: { base: 7, press: -6, congress: -6, courts: -4, auth: 2 },
      line: '"She’s doing the Middle East, the whole thing, thousands of years nobody could solve it, and honestly, she’s very close, very close."' },
    { label: 'Ask Which of Your Children Is the Best', icon: '\u{1F3C6}', silly: true, eff: { base: 2, fun: 10 },
      line: 'You ask, sincerely, for a ranking. She gives one. It is herself, then a sibling, then a long pause, then a different sibling. You say that is exactly what you had, which is true.' }
  ]
},
{
  id: 'presssec', cat: 'ally', name: 'Press Secretary Dawn Trill', note: 'briefs from a binder nobody has read',
  opts: [
    { label: 'Give Her Tomorrow’s Line', icon: '\u{1F5D2}\u{FE0F}', eff: { press: 2, base: 2 },
      line: '"Tomorrow you say the numbers are the greatest in history, the greatest, and if they push back you say it again, louder."' },
    { label: 'Tell Her to Take No Questions', icon: '\u{1F507}', eff: { press: -3, base: 3, auth: 2 },
      line: '"Read the statement, walk off, no questions, they don’t deserve questions, they’ve been very unfair, very unfair to this administration."' },
    { label: 'Send Her Out to Deny the Tape', icon: '\u{1F4FC}', major: true, eff: { base: 6, press: -8, courts: -4, congress: -3, auth: 3 },
      line: '"Go out there and say I never said it, I know it’s on tape, say the tape is wrong, say it with total confidence, you’ll be great."' },
    { label: 'Make Her Guess the Crowd Size', icon: '\u{1F465}', silly: true, eff: { base: 3, press: -1, fun: 10 },
      line: 'She guesses forty thousand. You say higher. Ninety thousand. Higher. She reaches a number larger than the population of the city, and you say "now you’re getting it", and she writes it down, because she has to.' }
  ]
},
{
  id: 'crypto', cat: 'ally', name: 'Dax Mullen', note: 'launched your coin',
  opts: [
    { label: 'Ask How the Coin Is Doing', icon: '\u{1FA99}', eff: { cash: 0.3, press: -2, base: 1 },
      line: '"How’s the coin, is it up, it’s always up, tremendous coin, people love it, the most successful coin in the history of coins."' },
    { label: 'Have Him Launch Another Token', icon: '\u{1F680}', eff: { cash: 0.7, press: -4, congress: -3, courts: -2, base: 2 },
      line: '"Do another one, a new one, call it something patriotic, they’ll go crazy for it, and Dax, keep my percentage clean this time."' },
    { label: 'Put the Coin in the Strategic Reserve', icon: '\u{1F3E6}', major: true, eff: { base: 5, cash: 1.6, congress: -8, courts: -7, press: -6, auth: 3 },
      line: '"The United States government is going to hold it, officially, in the reserve, like gold, better than gold, this is the future, believe me."' },
    { label: 'Ask Him to Explain the Blockchain Again', icon: '\u{1F9E9}', silly: true, eff: { base: 1, fun: 10 },
      line: 'Fourth attempt. He gets ninety seconds in before you interrupt to ask whether it is a building. He says no. You ask where it is kept. He says everywhere. You say that sounds like a scam, which is the single most perceptive thing you say all month.' }
  ]
},
{
  id: 'general', cat: 'ally', name: 'General "Bulldog" Rourke', note: 'from central casting',
  opts: [
    { label: 'Ask for a Bigger Parade', icon: '\u{1F396}\u{FE0F}', eff: { base: 4, street: -2, press: -2, cash: -0.1 },
      line: '"Tanks, real tanks, down the avenue, flyovers, the whole thing, nobody has ever seen a parade like the one we’re going to have."' },
    { label: 'Ask Which Country Would Be Easiest', icon: '\u{1F5FA}\u{FE0F}', eff: { base: 3, press: -3, congress: -2 },
      line: '"Hypothetically, purely hypothetically, if we had to, which one folds fastest, don’t write it down, just tell me the name."' },
    { label: 'Order the Troops into an American City', icon: '\u{1FA96}', major: true, eff: { base: 8, street: -9, courts: -6, press: -5, congress: -4, auth: 5 },
      line: '"Send them in, our own cities, restore order, total order, these people have no idea what’s about to hit them, and it’s about time."' },
    { label: 'Ask Him to Say "Sir, Yes Sir" Once More', icon: '\u{1F5E3}\u{FE0F}', silly: true, eff: { base: 3, fun: 10 },
      line: 'He says it. You ask for it louder. He says it louder. You put the phone on speaker and have him do it for the room, and a four-star general obliges, twice, because this is where everybody ended up.' }
  ]
},
{
  id: 'doctor', cat: 'ally', name: 'Dr. Fenn', note: 'your physician, medically astonished',
  opts: [
    { label: 'Ask for the Numbers Again', icon: '\u{1FA7A}', eff: { base: 3, press: -1 },
      line: '"Read them back to me, the cholesterol, the weight, all of it, these are incredible numbers for a man of any age, any age at all."' },
    { label: 'Have Him Write the Letter', icon: '\u{1F4C4}', eff: { base: 5, press: -3, courts: -1 },
      line: '"Write it up, in your own words, and Doctor, use the word astonishing, it’s a medical term, people respond to it."' },
    { label: 'Declare You the Healthiest President Ever', icon: '\u{1F4E2}', major: true, eff: { base: 8, press: -6, courts: -3, congress: -3, auth: 2 },
      line: '"On camera, in the briefing room, say it plainly, the healthiest individual ever to hold this office, and Doctor, do not hedge."' },
    { label: 'Ask Him to Confirm You Are Six Foot Three', icon: '\u{1F4CF}', silly: true, eff: { base: 2, press: -1, fun: 10 },
      line: 'He confirms it. You ask him to confirm it again with the scale involved. There is a pause you could park a motorcade in, and then he confirms it a second time, and something in him quietly retires.' }
  ]
},
{
  id: 'caddy', cat: 'ally', name: 'Manny, your caddy', note: 'the only man who tells you the truth',
  opts: [
    { label: 'Talk Through the Back Nine', icon: '⛳', eff: { base: 3, press: -1 },
      line: '"Fourteen, that shot on fourteen, that was a hell of a shot, one of the great shots, people are still talking about that shot."' },
    { label: 'Have Him Confirm the Scorecard', icon: '\u{1F4DD}', eff: { base: 3, press: -2, courts: -1 },
      line: '"You saw it, you were right there, that was a sixty-eight, write it down as a sixty-eight, you’re the only honest man in this country."' },
    { label: 'Give Him a Federal Appointment', icon: '\u{1F3DB}\u{FE0F}', major: true, eff: { base: 4, congress: -7, courts: -5, press: -6, cash: 0.3, auth: 3 },
      line: '"I’m putting you on a board, a real board, big salary, you’ll be tremendous at it, you’ve got better judgment than anybody in this building."' },
    { label: 'Ask Him to Move the Ball, Just Slightly', icon: '\u{1F3CC}\u{FE0F}', silly: true, eff: { base: 2, press: -1, fun: 10 },
      line: 'Not a lot. A yard. Out of the rough, onto the short stuff, before the group behind comes over the ridge. He does it, because he always does it, and neither of you has ever once mentioned it out loud.' }
  ]
},

/* ---------------- the press ---------------- */
{
  id: 'podcast', cat: 'press', name: 'The Basement Bros', note: 'three hours, no questions',
  opts: [
    { label: 'Go On for Three Hours', icon: '\u{1F3A7}', eff: { base: 6, press: -3, street: 1 },
      line: '"Three hours, no notes, no teleprompter, just talking, these guys get it, they really get it, bigger audience than the networks."' },
    { label: 'Have Them Go After a Rival', icon: '\u{1F3AF}', eff: { base: 4, press: -3, congress: -2 },
      line: '"Do a segment on him, a long one, the guys can really dig, and their listeners, believe me, their listeners do not forget."' },
    { label: 'Give Them the Only Interview This Month', icon: '\u{1F3A4}', major: true, eff: { base: 9, press: -8, congress: -3, courts: -2, auth: 2 },
      line: '"No networks, none, they get nothing, the Bros get everything, and honestly, they ask better questions, much better questions."' },
    { label: 'Ask Them What a Podcast Is', icon: '\u{1F914}', silly: true, eff: { base: 2, fun: 10 },
      line: 'You are ninety minutes into recording one. You ask, on air, whether this is radio. They say it is a podcast. You ask what channel it is on. It becomes the clip. It becomes the merchandise.' }
  ]
},
{
  id: 'latenight', cat: 'press', name: 'Danny Cross', note: 'monologues about you nightly',
  opts: [
    { label: 'Complain About Last Night’s Monologue', icon: '\u{1F621}', eff: { base: 4, press: -2 },
      line: '"Not funny, none of it, never been funny, the ratings are in the toilet and everybody knows the only reason anybody watches is me."' },
    { label: 'Demand Equal Time', icon: '⚖️', eff: { base: 3, press: -3, courts: -2 },
      line: '"There are rules, there have to be rules, if he gets nine minutes about me then I get nine minutes about him, that’s just fairness."' },
    { label: 'Lean on the Network to Cancel Him', icon: '\u{1F6AB}', major: true, eff: { base: 8, press: -9, street: -6, courts: -5, congress: -3, auth: 4 },
      line: '"Somebody at that network should think very hard about whether this show continues, very hard, they have a lot of licences to renew."' },
    { label: 'Ask to Read the Monologue First', icon: '\u{1F4C3}', silly: true, eff: { base: 2, press: -1, fun: 10 },
      line: 'You request, as a courtesy, prior sight of the jokes. He says no. You offer to punch them up. He says no again, more slowly, and then puts the entire exchange in that night’s monologue, verbatim, to a nine-minute ovation.' }
  ]
},
{
  id: 'factcheck', cat: 'press', name: 'the Fact-Check Desk', note: 'four noses, daily',
  opts: [
    { label: 'Dispute the Rating', icon: '\u{1F4CF}', eff: { base: 3, press: -2 },
      line: '"That was completely true, every word, and they gave it the worst rating they have, which tells you everything about that operation."' },
    { label: 'Demand a Retraction', icon: '\u{1F4E4}', eff: { base: 3, press: -3, courts: -2 },
      line: '"Retract it, in full, front page, same size type, and an apology, a real one, not one of those weasel apologies they do."' },
    { label: 'Fact-Check the Fact-Checkers, Officially', icon: '\u{1F3DB}\u{FE0F}', major: true, eff: { base: 7, press: -7, courts: -6, congress: -4, auth: 5 },
      line: '"We’re setting up our own, inside the government, official, the real facts, and theirs will be, I don’t know, whatever theirs are."' },
    { label: 'Ask How Many Noses Is a Good Score', icon: '\u{1F443}', silly: true, eff: { base: 2, fun: 10 },
      line: 'You ask, in good faith, whether four is the top. They explain that four is the worst. You say you have four more than anybody in history, which is true, and you say it like a man collecting them.' }
  ]
},
{
  id: 'tabloid', cat: 'press', name: 'Sid Kessler', note: 'catch, and kill',
  opts: [
    { label: 'Ask What They Are Sitting On', icon: '\u{1F5C3}\u{FE0F}', eff: { press: -2, courts: -1, base: 1 },
      line: '"What have you got, in the safe, on me, on anybody, I like to know what’s in the safe, Sid, we go back a long way."' },
    { label: 'Run a Story About a Rival', icon: '\u{1F4F0}', eff: { base: 4, press: -3, congress: -3 },
      line: '"Put him on the cover, the whole cover, and Sid, you don’t have to prove it, you just have to print it, that’s the beautiful part."' },
    { label: 'Buy the Story and Bury It', icon: '⚰️', major: true, eff: { base: 3, press: -6, courts: -8, congress: -5, cash: -0.7, auth: 2 },
      line: '"Buy it, whatever it costs, and then never print it, that’s a business expense, Sid, that’s all it is, a totally normal business expense."' },
    { label: 'Ask for the Bigfoot Story Again', icon: '\u{1F43E}', silly: true, eff: { base: 2, press: -1, fun: 10 },
      line: 'You request the Bigfoot cover. Not for any reason. Sid explains it ran in 1994. You ask him to run it again. He runs it again. It outsells the election issue.' }
  ]
},
{
  id: 'radio', cat: 'press', name: 'Big Cal Hooper', note: 'four hours, no callers',
  opts: [
    { label: 'Call In as an Ordinary Guy', icon: '\u{1F4DE}', eff: { base: 5, press: -3 },
      line: '"Hi Cal, longtime listener, just a regular guy from Queens, and I have to say, this President is doing a tremendous job, tremendous."' },
    { label: 'Give Him the Nickname First', icon: '\u{1F3F7}\u{FE0F}', eff: { base: 4, press: -2, congress: -1 },
      line: '"You get it first, Cal, before anybody, the new name for him, use it every hour today and by Friday it’ll be the only thing anybody says."' },
    { label: 'Have Him Announce a March', icon: '\u{1F6A9}', major: true, eff: { base: 8, street: -7, courts: -4, press: -4, auth: 4 },
      line: '"Tell them where and when, Cal, tell them to come, peacefully of course, very peacefully, but tell them to come in numbers."' },
    { label: 'Read the Ad Copy Yourself, Live', icon: '\u{1F4E2}', silly: true, eff: { base: 3, press: -1, cash: 0.02, fun: 10 },
      line: 'The President of the United States reads sixty seconds of copy for a mail-order gold coin firm, including the disclaimer, including the phone number, twice, and improvises a superlative that the sponsor later adopts permanently.' }
  ]
},
{
  id: 'global', cat: 'press', name: 'the Global Service', note: 'foreign press, therefore worse',
  opts: [
    { label: 'Tell Them Nobody Asked Them', icon: '\u{1F30D}', eff: { base: 4, press: -2 },
      line: '"Where are you from, what outlet, I’ve never heard of it, nobody has heard of it, and frankly your country has enough problems of its own."' },
    { label: 'Lecture Them About Their Own Country', icon: '\u{1F3AB}', eff: { base: 3, press: -3, congress: -1 },
      line: '"Let me tell you about your country, I know it very well, better than you do actually, and it is not doing well, not doing well at all."' },
    { label: 'Revoke Their Correspondents’ Visas', icon: '\u{1F6C2}', major: true, eff: { base: 7, press: -9, courts: -6, congress: -4, street: -3, auth: 5 },
      line: '"They’re out, all of them, visas cancelled, go report from somewhere else, this is a privilege and they abused it, badly."' },
    { label: 'Ask Them to Say "Aluminium" Again', icon: '\u{1F5E3}\u{FE0F}', silly: true, eff: { base: 2, fun: 10 },
      line: 'The correspondent says it. You laugh for eleven seconds of live international broadcast. You ask for "schedule". They oblige. Two hundred million people watch a superpower fail to move on.' }
  ]
},

/* ---------------- enemies ---------------- */
{
  id: 'prosecutor', cat: 'enemy', name: 'Special Counsel Ferris', note: 'unelected, unimpressed',
  opts: [
    { label: 'Call Him a Witch Hunter', icon: '\u{1F9D9}', eff: { base: 5, courts: -2, press: -1 },
      line: '"Witch hunt, the greatest witch hunt in American history, and everybody knows it, total hoax, a disgrace to this country."' },
    { label: 'Demand to Know the Scope', icon: '\u{1F4CB}', eff: { base: 2, courts: -2, congress: -2 },
      line: '"What exactly are you looking at, I want it in writing, page by page, because this thing keeps growing and that is not how it works."' },
    { label: 'Have Him Fired Before Dinner', icon: '\u{1F525}', major: true, eff: { base: 9, courts: -9, congress: -7, press: -7, auth: 6 },
      line: '"He’s gone, tonight, I have the absolute right, everybody agrees I have the right, the greatest legal minds, they all say it."' },
    { label: 'Invite Him to Play Golf, Immediately', icon: '⛳', silly: true, eff: { base: 2, courts: -1, fun: 10 },
      line: 'You invite the man investigating you to eighteen holes, this Saturday, your course, your cart. He declines in one sentence and forwards the recording to three separate offices before lunch.' }
  ]
},
{
  id: 'mayor', cat: 'enemy', name: 'Mayor Okonkwo', note: 'runs the big city, badly',
  opts: [
    { label: 'Call the City a Hellhole', icon: '\u{1F3DA}️', eff: { base: 5, street: -3, press: -1 },
      line: '"A hellhole, total hellhole, worse than any war zone, I would not walk down that street, nobody would, it’s a tragedy what she’s done."' },
    { label: 'Threaten the Federal Funding', icon: '\u{1F4B8}', eff: { base: 4, street: -3, congress: -2, auth: 2 },
      line: '"Not one dollar, not one, until they start doing things our way, and they will, because they always come back for the money."' },
    { label: 'Send in the Federal Agents', icon: '\u{1F694}', major: true, eff: { base: 8, street: -9, courts: -7, press: -5, congress: -3, auth: 6 },
      line: '"Unmarked, unannounced, in tonight, we are going to clean that city up whether the mayor likes it or not, and she will not like it."' },
    { label: 'Argue With Her About the Pizza', icon: '\u{1F355}', silly: true, eff: { base: 2, street: -1, fun: 10 },
      line: 'You ask where the best slice in her city is. She tells you. You say that place is overrated, name a chain, and defend it, with rising heat, for four and a half minutes, on a call about the National Guard.' }
  ]
},
{
  id: 'whistle', cat: 'enemy', name: 'the Whistleblower’s Lawyer', note: 'has the receipts, all of them',
  opts: [
    { label: 'Question His Client’s Motives', icon: '\u{1F573}️', eff: { base: 4, courts: -2, press: -2 },
      line: '"Who is this person, who do they work for, because somebody put them up to this, somebody always puts them up to it."' },
    { label: 'Offer a Quiet Settlement', icon: '\u{1F91D}', eff: { press: 2, courts: 2, cash: -0.4, base: -2 },
      line: '"Let’s make this go away, quietly, everybody walks away happy, no admission of anything, because there is nothing to admit."' },
    { label: 'Revoke the Client’s Clearance', icon: '\u{1F513}', major: true, eff: { base: 7, courts: -7, congress: -6, press: -6, auth: 5 },
      line: '"Clearance pulled, effective immediately, and anybody who helped them should be thinking very hard about their own, very hard."' },
    { label: 'Ask Him to Hold While You Find a Pen', icon: '\u{1F58A}️', silly: true, eff: { base: 1, courts: -1, fun: 10 },
      line: 'You put opposing counsel on hold for six minutes to look for a pen, come back with a marker, and ask him to start again from the beginning. He does. He bills for it. It is a federal matter, so the country pays.' }
  ]
},
{
  id: 'union', cat: 'enemy', name: 'Big Rita Kowalczyk', note: 'shook your hand once, regrets it',
  opts: [
    { label: 'Remind Her Whose Members Voted for You', icon: '\u{1F5F3}️', eff: { base: 5, street: 2, congress: -2 },
      line: '"Your own people voted for me, Rita, in huge numbers, historic numbers, so let’s both remember who actually speaks for that shop floor."' },
    { label: 'Offer a Photo-Op at the Plant', icon: '\u{1F3ED}', eff: { street: 4, press: 3, base: -2 },
      line: '"Hard hat, high-vis, twenty minutes, we shake hands in front of the machines and everybody wins, especially the machines."' },
    { label: 'Break the Strike by Executive Order', icon: '⚡', major: true, eff: { base: 7, street: -9, courts: -6, press: -5, congress: -4, auth: 5 },
      line: '"They’re going back to work tomorrow, by order, this is essential infrastructure and I am not negotiating with a picket line."' },
    { label: 'Try to Arm-Wrestle Her Over the Phone', icon: '\u{1F4AA}', silly: true, eff: { base: 3, street: 1, fun: 10 },
      line: 'You propose it seriously and immediately realise the logistical flaw. Rather than retreat, you both commit: you count down, you both strain, and after nine seconds she says "you got me", which is the biggest lie either of you tells all year.' }
  ]
},
{
  id: 'donor', cat: 'enemy', name: 'Winslow Grace', note: 'wants his money back',
  opts: [
    { label: 'Remind Him What He Got for It', icon: '\u{1F9FE}', eff: { base: 3, cash: 0.2, congress: -1 },
      line: '"You got the tax bill, Winslow, you got the whole tax bill, that thing paid for itself nine hundred times over, so let’s not do this."' },
    { label: 'Threaten to Say His Name in Public', icon: '\u{1F4E2}', eff: { base: 4, press: -2, cash: 0.3, congress: -2 },
      line: '"I could mention you, by name, at the rally on Thursday, in front of thirty thousand people, and Winslow, I don’t think you’d enjoy that."' },
    { label: 'Set the Regulators on His Company', icon: '\u{1F3AF}', major: true, eff: { base: 6, courts: -7, press: -6, congress: -6, cash: 0.9, auth: 5 },
      line: '"Somebody should take a very close look at his business, top to bottom, every filing, and you know what, I think somebody will."' },
    { label: 'Ask Him to Guess Your Net Worth', icon: '\u{1F4B0}', silly: true, eff: { base: 2, cash: 0.01, fun: 10 },
      line: 'He guesses. You say higher. He guesses higher. You say higher. This continues past the point of plausibility and well past the point of decency, and it ends with a number neither of you will ever be able to produce.' }
  ]
},
{
  id: 'un', cat: 'enemy', name: 'the Secretary-General', note: 'globalist, allegedly',
  opts: [
    { label: 'Lecture the World Body', icon: '\u{1F30E}', eff: { base: 5, press: -2, congress: -1 },
      line: '"This organisation has tremendous potential, tremendous, and it has never, not once, come close to using any of it, and everybody knows it."' },
    { label: 'Threaten to Withhold the Dues', icon: '\u{1F4B5}', eff: { base: 5, press: -3, congress: -3, auth: 2 },
      line: '"We pay for everything, everything, and we get nothing, so maybe we just stop paying, and we’ll see how the whole thing goes then."' },
    { label: 'Announce You Are Leaving Altogether', icon: '\u{1F6AA}', major: true, eff: { base: 9, press: -8, congress: -7, courts: -3, street: -3, auth: 5 },
      line: '"We’re out, completely out, seventy-something years, a total waste, and honestly they should thank us for having stayed this long."' },
    { label: 'Complain That the Escalator Stopped', icon: '\u{1F6D7}', silly: true, eff: { base: 3, press: -1, fun: 10 },
      line: 'You raise it as a formal grievance with the Secretary-General of the United Nations. Twice. You suggest it was deliberate. He offers to have it looked at. You say you would like that in writing, and, extraordinarily, you get it.' }
  ]
},
{
  id: 'expres', cat: 'enemy', name: 'the Former President', note: 'still alive, still talking',
  opts: [
    { label: 'Blame Him for Everything', icon: '\u{1F449}', eff: { base: 5, press: -2, congress: -1 },
      line: '"I inherited a mess, the worst mess anybody has ever inherited, and everything wrong today, all of it, that’s his, not mine, his."' },
    { label: 'Demand He Stop Commenting', icon: '\u{1F92B}', eff: { base: 4, press: -2, congress: -2 },
      line: '"There’s a tradition, former Presidents stay quiet, he doesn’t know that apparently, somebody should send him the rulebook."' },
    { label: 'Strip His Security Detail', icon: '\u{1F6E1}️', major: true, eff: { base: 7, press: -9, congress: -7, courts: -6, street: -4, auth: 5 },
      line: '"He doesn’t need it, nobody needs it, it costs a fortune, and frankly with the things he says he should be paying for it himself."' },
    { label: 'Ask If He Remembers Your Crowd Size', icon: '\u{1F4F8}', silly: true, eff: { base: 3, press: -1, fun: 10 },
      line: 'You ring a former President of the United States to relitigate an attendance figure from an inauguration years ago. He says he does not recall. You offer to send the photographs. He says please do not. You send them.' }
  ]
}

];

/* Merge. call.js owns AD.CALL_BOOK and every mechanic that reads it, so this
   file only ever appends, and never shadows an existing id. */
MORE.forEach(t => {
  if (AD.CALL_BOOK.some(x => x.id === t.id)) return;
  AD.CALL_BOOK.push(t);
});

})();
