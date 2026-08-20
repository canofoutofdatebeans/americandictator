/* ============================================================
   AMERICAN DICTATOR, voice.js
   THE PRESIDENT SPEAKS.

   You play a President who, until now, never said a word. Every crisis
   was narrated at him and resolved around him. This gives him one line
   on every resolution, chosen by what you just did, and the joke is
   always the same joke: he has understood none of it and is delighted.

   The line is NOT a summary. A summary would be redundant with the
   resolution text sitting directly above it. It is a reaction, and it
   should reveal the gap between what happened and what he thinks
   happened. That gap is the entire character.

   Buckets are chosen from the deltas, so the voice always matches the
   outcome without any card needing to carry a line of its own.
   ============================================================ */

AD.VOICE = {

  /* the wild option: he loved it, he does not know why */
  wild: [
    'Now THAT is presidential. Nobody has ever done that. People are going to be talking about that for a hundred years.',
    'See, that is the instinct. You cannot teach the instinct. I have had it since I was four.',
    'Was that legal? Do not tell me. I like it better not knowing.',
    'Put that on the wall. Not a photo of it, the actual thing. Get it off the wall it is on now.',
    'They said do not do it. I did it. That is called leadership and frankly it is very rare.'
  ],

  /* big base gain */
  crowd: [
    'Did you see the crowd? That was the biggest crowd anybody has ever gotten for a thing like that. Bigger than the last one and that one was a record.',
    'They love me. Genuinely. It is almost embarrassing how much, and I say that as somebody who does not embarrass easily.',
    'Somebody in the third row was crying. A big guy. Tough guy. Tears coming down his face. He said sir, you saved my life. I said I know.',
    'We should do that again tomorrow. And Thursday. Can we do it Thursday.'
  ],

  /* institutions took real damage */
  damage: [
    'They are all going to be very upset about this. Good. They should be. They have been upset about everything else.',
    'Let them sue. I have the best lawyers. I have so many lawyers I have lawyers whose job is other lawyers.',
    'That is going to be in the papers tomorrow and it is going to be nasty and untrue and I will not read it, personally, for hours.',
    'Everybody says you cannot do that. And then you do it, and it turns out you can. Every single time. Every time.'
  ],

  /* the sober, correct, boring option */
  dull: [
    'Fine. Fine. Is that it? Is that the whole thing? That took eleven minutes.',
    'Great meeting. Tremendous meeting. What was it about?',
    'So we did the boring one. The responsible one. Nobody is going to make a hat about this.',
    'Sure. Whatever the lawyers said. Are we done? There is a thing on television at four.',
    'I am told this was the right decision, and I am told that by people who are very rarely happy, so.'
  ],

  /* money came in */
  money: [
    'How much? Say the number again. Slower.',
    'And that is clean? That is a clean number? Do not answer that in front of him.',
    'People say money does not buy happiness. Those people have never been handed a number like that.',
    'Beautiful. Put it somewhere sunny.'
  ],

  /* money went out */
  cost: [
    'That cost HOW much? For that? I have bought aircraft for that.',
    'We are paying for this? Us? Why are we paying for this. Find out who agreed to that and then do not tell me, actually.',
    'Fine. Take it out of something nobody likes. The weather service. Do we need our own weather?'
  ],

  /* authority went up */
  power: [
    'So I can just do that now. Whenever I want. Nobody has to say yes.',
    'That is more power than the last guy had. Considerably more. Nobody talks about that.',
    'And this is all completely normal, historically. I asked the lawyers if it was normal and they went very quiet, which is a yes.'
  ],

  /* the Boredometer went the wrong way */
  bored: [
    'This is the part of the job nobody warned me about. This exact part. Right now.',
    'Are there any more of these today? Be honest with me.',
    'Somebody get me something to sign. Anything. I do not care what it says.',
    'I am going to be honest with you, I stopped listening about a paragraph ago.'
  ],

  /* a whole branch just became a Pillar (captured a power centre). The biggest
     thing that can happen in a term, and he has understood it as a compliment. */
  pillar: [
    'So that whole branch works for me now? All of it? That was always the deal, I just did not know who to ask.',
    'One down. How many are there, four? Three? Nobody will give me a straight answer on how many branches there are.',
    'They folded. I knew they would fold. Everybody folds, it is just a question of what you offer and how loud.',
    'Is this the part where it becomes permanent, or is there more paperwork? There is always more paperwork with the good stuff.',
    'Write down the date. This is a date they are going to teach. Not right away. But eventually, once the right people are teaching.'
  ],

  /* things got worse across the board */
  bad: [
    'Whose idea was that? It was mine? Then it was a good idea and it was executed badly.',
    'That is not a disaster. That is a media disaster, which is a completely different thing and much less serious.',
    'We will fix it. We fix everything. Name one thing we have not fixed. Do not name it out loud.'
  ]
};

/* Pick the bucket from what actually happened, then a line from it. Uses the
   run's own reaction RNG so a given seed always hears the same President, and
   the deterministic card sequence is never perturbed. */
AD.presidentLine = function (run, out) {
  const d = (out && out.deltas) || {};
  const roll = (AD.reactRoll ? AD.reactRoll(run) : Math.random());

  let bucket;
  if (out && out.pillar)                           bucket = 'pillar';
  else if (out && out.wasWild)                     bucket = 'wild';
  else if ((d.base || 0) >= 0.6)                   bucket = 'crowd';
  else if ((d.cash || 0) >= 0.3)                   bucket = 'money';
  else if ((d.cash || 0) <= -0.3)                  bucket = 'cost';
  else if ((d.auth || 0) >= 3)                     bucket = 'power';
  else if ((d.bored || 0) >= 1)                    bucket = 'bored';
  else if (AD.FKEYS.filter(k => (d[k] || 0) <= -4).length >= 2) bucket = 'damage';
  else if (AD.FKEYS.filter(k => (d[k] || 0) < 0).length >= 3)   bucket = 'bad';
  else                                              bucket = 'dull';

  const lines = AD.VOICE[bucket] || AD.VOICE.dull;
  return { bucket: bucket, line: lines[Math.floor(roll * lines.length) % lines.length] };
};
