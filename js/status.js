/* ============================================================
   AMERICAN DICTATOR, status.js
   THE STATE OF THE ROOM.

   Every management screen opens with a big visual read on how that
   particular corner of the republic is doing, on a five-step scale:
   GREAT / GOOD / HOLDING / BAD / TERRIBLE. Each room gets its own
   bespoke scene and its own line of copy per tier, so the Bench at 12%
   and the Press Room at 12% are not the same joke told twice.

   One function does the work, AD.roomStatusHTML(roomKey, value), so a
   room only has to hand over a 0-100 number and drop the result into
   its banner slot.
   ============================================================ */

/* Highest tier whose floor the value clears. */
AD.STATUS_TIERS = [
  { key: 'terrible', min: 0,  label: 'TERRIBLE' },
  { key: 'bad',      min: 20, label: 'BAD' },
  { key: 'ok',       min: 40, label: 'HOLDING' },
  { key: 'good',     min: 60, label: 'GOOD' },
  { key: 'great',    min: 80, label: 'GREAT' }
];

AD.statusTier = function (v) {
  const n = Math.max(0, Math.min(100, Number(v) || 0));
  let t = AD.STATUS_TIERS[0];
  AD.STATUS_TIERS.forEach(x => { if (n >= x.min) t = x; });
  return t;
};

/* art: the scene. line: what it means, in the house voice. */
AD.ROOM_STATUS = {

  senate: {
    great:    { art: '\u{1F3DB}\u{FE0F}\u{1F3BA}', line: 'They applaud before you finish the sentence. Two of them have started applauding the sentences of OTHER people, just to stay in practice.' },
    good:     { art: '\u{1F3DB}\u{FE0F}\u{1F91D}', line: 'The caucus votes with you and grumbles in the cloakroom, which is the correct order of operations.' },
    ok:       { art: '\u{1F3DB}\u{FE0F}\u{1F610}', line: 'They will hold, mostly, on the easy ones. Nobody is returning calls about the hard ones.' },
    bad:      { art: '\u{1F3DB}\u{FE0F}\u{1F525}', line: 'Members of your own party are using the word "concerning" on camera. It is the sound a spine makes when it grows back.' },
    terrible: { art: '\u{1F3DB}\u{FE0F}\u{26B0}\u{FE0F}', line: 'Your own chamber is drafting articles. They have a group chat. You are not in it.' }
  },

  courts: {
    great:    { art: '\u{2696}\u{FE0F}\u{1F451}', line: 'The emergency docket rules for you overnight, unsigned, before the filing has finished uploading.' },
    good:     { art: '\u{2696}\u{FE0F}\u{1F642}', line: 'Your appointees hold the line and write it up in language nobody outside the building can parse. Perfect.' },
    ok:       { art: '\u{2696}\u{FE0F}\u{1F914}', line: 'You win the easy ones and lose the interesting ones. A footnote somewhere calls your reasoning "novel."' },
    bad:      { art: '\u{2696}\u{FE0F}\u{1F6AB}', line: 'A district judge in a state you cannot find has enjoined the entire policy, nationwide, from a courthouse with one lift.' },
    terrible: { art: '\u{2696}\u{FE0F}\u{1F480}', line: 'Every court in the country now rules against you reflexively, including on things you have not done yet.' }
  },

  press: {
    great:    { art: '\u{1F4F0}\u{1FAE1}', line: 'They print your statements in full, unedited, with no byline and a flattering photograph you personally selected.' },
    good:     { art: '\u{1F4F0}\u{1F642}', line: 'The coverage is soft, the follow-ups are softer, and three anchors have started using your adjectives.' },
    ok:       { art: '\u{1F4F0}\u{1F610}', line: 'Two outlets are friendly, two are hostile, and the rest are waiting to see which way this goes.' },
    bad:      { art: '\u{1F4F0}\u{1F50E}', line: 'Four newsrooms are working the same story, and it is about you, and they are sharing documents.' },
    terrible: { art: '\u{1F4F0}\u{1F4A3}', line: 'It leads every broadcast on Earth. A late-night host has built a recurring segment around you with its own theme music.' }
  },

  street: {
    great:    { art: '\u{1FAA7}\u{1F6A7}', line: 'Nothing moves in an American city without a permit signed in this building. The permits are, of course, free.' },
    good:     { art: '\u{1FAA7}\u{1F642}', line: 'Quiet streets, full car parks, and a protest permit process that takes eleven weeks by pure coincidence.' },
    ok:       { art: '\u{1FAA7}\u{1F610}', line: 'A few thousand people out on a Saturday. Weather-dependent. Mostly homemade signs, some of them quite good.' },
    bad:      { art: '\u{1FAA7}\u{1F525}', line: 'Three cities are describing themselves as "ungovernable" and one of them has started issuing its own parking tickets.' },
    terrible: { art: '\u{1FAA7}\u{1F30B}', line: 'A general strike. The country has simply stopped going to work, and the thing about a country that stops is that it does not restart on request.' }
  },

  basepop: {
    great:    { art: '\u{1F525}\u{1F3AA}', line: 'They queue overnight in weather that kills people. Somebody has your face tattooed on their back, life size, and it is a good likeness.' },
    good:     { art: '\u{1F525}\u{1F4E3}', line: 'The rallies are full, the merchandise moves, and the chant has three syllables, which is the ideal number.' },
    ok:       { art: '\u{1F525}\u{1F642}', line: 'They still show up. They show up a little later than they used to, and they leave before the end.' },
    bad:      { art: '\u{1F525}\u{1F971}', line: 'Empty seats in the upper tier. The arena has started draping them in branded fabric, which fools nobody and photographs badly.' },
    terrible: { art: '\u{1F525}\u{2744}\u{FE0F}', line: 'They are chanting a name at your own rally. It is not quite yours. It is close enough to hear the difference.' }
  },

  economy: {
    great:    { art: '\u{1F4C8}\u{1F3C6}', line: 'The market is up, the base is fed, and every good number is your personal doing while every bad one predates you.' },
    good:     { art: '\u{1F4C8}\u{1F642}', line: 'Growth is fine, prices are fine, and nobody is asking what the tariffs actually did.' },
    ok:       { art: '\u{1F4C9}\u{1F610}', line: 'Mixed. The good chart is on television and the bad chart is in a briefing you have not read.' },
    bad:      { art: '\u{1F4C9}\u{1F9E8}', line: 'Prices at the pump and the checkout. Voters feel this one personally, which is the only kind of economics that has ever mattered.' },
    terrible: { art: '\u{1F4C9}\u{2620}\u{FE0F}', line: 'A full-blown crash. Somebody on television is saying the word "unprecedented" and for once they are not exaggerating.' }
  },

  call: {
    great:    { art: '\u{1F4DE}\u{1F604}', line: 'He is having the time of his life. Three calls today, two of them fights, one of them to somebody who did not know who was calling.' },
    good:     { art: '\u{1F4DE}\u{1F642}', line: 'Engaged, entertained, and dialling. This is the version of him that gets things done, roughly by accident.' },
    ok:       { art: '\u{1F4DE}\u{1F610}', line: 'He is fine. He has taken a couple of calls and enjoyed about half of one. Do not let it slide.' },
    bad:      { art: '\u{1F4DE}\u{1F971}', line: 'He is drifting. Meetings are being described to him rather than attended by him. Get him on the phone to somebody he can shout at.' },
    terrible: { art: '\u{1F4DE}\u{1F634}', line: 'He has stopped asking what is on the schedule. This is the state that loses you the whole thing at the final whistle, and it is entirely fixable from this room.' }
  },

  war: {
    great:    { art: '\u{1F396}\u{FE0F}\u{1F54A}\u{FE0F}', line: 'The generals salute, the wars are short, and the footage is spectacular. Somebody has floated a Nobel, unprompted, probably.' },
    good:     { art: '\u{1F396}\u{FE0F}\u{1F642}', line: 'The Joint Chiefs disagree with you privately and execute anyway, which is the whole arrangement.' },
    ok:       { art: '\u{1F396}\u{FE0F}\u{1F610}', line: 'One open commitment, going roughly sideways. The briefings have started using the word "progress" as a noun.' },
    bad:      { art: '\u{1F396}\u{FE0F}\u{1FA96}', line: 'A quagmire with a name nobody can pronounce and a cost nobody will print.' },
    terrible: { art: '\u{1F396}\u{FE0F}\u{1F4A5}', line: 'Multiple fronts, no exits, and a Chairman who has started putting his objections in writing. In triplicate.' }
  }
};

/* Rooms without a bespoke table fall back to this, so a new screen can drop
   the banner in on day one and still say something true. */
AD.ROOM_STATUS_DEFAULT = {
  great:    { art: '\u{2705}', line: 'This is going considerably better than it deserves to.' },
  good:     { art: '\u{1F642}', line: 'Under control, for a given value of control.' },
  ok:       { art: '\u{1F610}', line: 'Neither winning nor losing. The most dangerous condition in politics.' },
  bad:      { art: '\u{26A0}\u{FE0F}', line: 'This needs a hand on it before it needs a lawyer on it.' },
  terrible: { art: '\u{1F6A8}', line: 'This is the one that ends the presidency, if you let it.' }
};

/* The banner. `value` is 0-100 where HIGH IS GOOD; pass `invert` for a meter
   where high is bad (unrest, boredom) and it flips before tiering. */
AD.roomStatusHTML = function (roomKey, value, invert) {
  const v = invert ? (100 - (Number(value) || 0)) : (Number(value) || 0);
  const tier = AD.statusTier(v);
  const table = AD.ROOM_STATUS[roomKey] || AD.ROOM_STATUS_DEFAULT;
  const s = table[tier.key] || AD.ROOM_STATUS_DEFAULT[tier.key];
  const pct = Math.round(Math.max(0, Math.min(100, v)));
  return '<div class="rs rs-' + tier.key + '">' +
           '<div class="rs-art" aria-hidden="true">' + s.art + '</div>' +
           '<div class="rs-body">' +
             '<div class="rs-tag">' + tier.label + '<span class="rs-pct">' + pct + '</span></div>' +
             '<div class="rs-line">' + s.line + '</div>' +
             '<div class="rs-bar"><i style="width:' + pct + '%"></i></div>' +
           '</div>' +
         '</div>';
};
