/* ============================================================
   AMERICAN DICTATOR, misread.js
   TWO WAYS THE GAME GETS AWAY FROM YOU.

   1. THE BASE MISREADS YOU.
      Sometimes the sober, correct, restrained decision is received by
      your own supporters as an act of devastating strength, and helps
      you anyway. Nothing you did changed; only what they heard. This is
      the sharpest joke available in a game about this subject, and it
      also stops "be responsible" from ever being a purely flat choice.

   2. THE PRESIDENT WANDERS OFF.
      The Boredometer used to be a pass/fail gate checked once, at the
      end. A meter that only matters in the final scene is not
      frightening. Now, when boredom runs high, he stops waiting for you
      and does something himself, and you inherit it as a crisis.
   ============================================================ */

/* ---------- 1. the misreading -------------------------------------------- */

AD.MISREAD_AT = 0.18;        // how often a restrained choice gets misheard

AD.MISREADINGS = [
  'A clip of you declining to escalate is cut without the sentence before it. Within a day it is captioned "HE SAID NO" and shared four million times as evidence of nerve.',
  'Somebody freezes the footage on a frame where you happen to look furious. The frame becomes the shirt. The shirt becomes the position.',
  'Your careful, lawyerly answer is quoted with the qualifiers removed. What is left is much shorter, much louder, and much more popular than what you said.',
  'A commentator explains, at length and with total confidence, the secret strategy behind your decision. There was no strategy. The explanation is better than the decision.',
  'The restraint is read as a trap being set. Nobody can say for whom. The theory is enormously reassuring to everyone who holds it.',
  'A rival mocks you for backing down. The mockery is played so often, on so many channels, that the backing down is forgotten and only the fight is remembered.'
];

/* Applied in engine.choose to a RESTRAINED choice: occasionally the base reads
   it as strength and you gain instead of paying. Uses the reaction RNG, so it
   never perturbs the deterministic card order. */
AD.applyMisread = function (run, choice, eff, out) {
  if (!choice || choice.wild) return;
  // Only fires on a choice that actually cost the base something.
  if (!(eff && (eff.base || 0) < 0)) return;
  const roll = AD.reactRoll ? AD.reactRoll(run) : Math.random();
  if (roll > AD.MISREAD_AT) return;

  // Flip the base cost into a gain of the same size, and stop it boring him.
  eff.base = Math.abs(eff.base);
  eff.fun = Math.max(eff.fun || 0, 2);
  const idx = Math.floor((AD.reactRoll ? AD.reactRoll(run) : Math.random()) * AD.MISREADINGS.length);
  out.misread = AD.MISREADINGS[idx % AD.MISREADINGS.length];
};

/* ---------- 2. the wander-off -------------------------------------------- */

AD.WANDER_AT = 78;           // boredom at or above this and he stops waiting
AD.WANDER_GAP = 5;           // never twice inside this many months

/* What he does when nobody is entertaining him. Each returns a full crisis. */
AD.WANDERINGS = [
  {
    id: 'wander-post',
    title: 'He Posted Something',
    who: 'social',
    text: 'Brayden is holding the phone at arm’s length like it is warm. "He posted, sir. On his own, at ' +
          'four in the morning, about something we have no policy on. It is up, it has two hundred thousand ' +
          'shares, and one word in it is a legal term that means something very specific."',
    choices: [
      { label: 'Delete it and say the account was compromised.', eff: { press: 3, courts: 2, base: -4 },
        res: 'The post vanishes and the explanation is not believed by one single person, including the people repeating it.' },
      { label: 'Leave it up. Make it policy retroactively.', wild: true,
        eff: { base: 8, press: -6, courts: -5, congress: -4, auth: 3 },
        res: 'Three federal agencies spend a fortnight building a policy backwards from a sentence written at four in the morning. It is, eventually, implemented.' },
      { label: 'Clarify it into meaninglessness.', eff: { press: 2, congress: 1, base: -1 },
        res: 'A follow-up statement is issued so carefully hedged that it cancels out the original. Both remain up, contradicting each other, forever.' },
      { label: 'Take the phone off him.', eff: { press: 5, congress: 4, courts: 3, base: -7 },
        res: 'The phone is removed. He gets another one inside a day, from a member of his own family, and nobody admits which.' }
    ]
  },
  {
    id: 'wander-golf',
    title: 'He Is Not In The Building',
    who: 'cos',
    text: 'Deborah checked twice before coming in. "He left, sir. Mid-briefing. The motorcade is logged as ' +
          'official travel and the destination is a course he owns. There is a summit in ninety minutes and ' +
          'the other delegation has already landed."',
    choices: [
      { label: 'Send the Vice President to hold the summit.', eff: { congress: 3, press: 2, base: -3 },
        res: 'Chet holds a summit he was briefed on in a car. It goes better than anyone expects, which he mentions constantly for a year.' },
      { label: 'Move the summit to the clubhouse.', wild: true,
        eff: { base: 6, press: -5, congress: -4, courts: -2, auth: 2, cash: 0.2 },
        res: 'A foreign head of government is received in a members’ lounge beneath a framed scorecard. The billing for the venue goes to the government.' },
      { label: 'Cancel and blame the weather.', eff: { press: -3, congress: -3, base: 1 },
        res: 'It is cloudless in both capitals. The excuse is issued anyway and quietly enters the record.' },
      { label: 'Go and get him.', eff: { press: 4, congress: 3, base: -5 },
        res: 'A deputy chief of staff drives out and retrieves the President of the United States from the twelfth hole. He plays the last six on the way back.' }
    ]
  },
  {
    id: 'wander-tv',
    title: 'He Called Into A Show',
    who: 'press',
    text: 'Kaylee has a transcript already, which is how you know it is bad. "He phoned a morning programme, ' +
          'sir. Live. Unbriefed. He was on for twenty-two minutes and announced two things that are not ' +
          'policy and one thing that is classified."',
    choices: [
      { label: 'Deny all three immediately.', eff: { press: -3, courts: 2, congress: 2, base: -3 },
        res: 'Your own press office contradicts the President on the record, which is the single strangest sentence anyone writes that week.' },
      { label: 'Make the two non-classified ones real.', eff: { base: 6, press: -4, congress: -4, auth: 2 },
        res: 'Two announcements invented live on air become actual federal policy inside a month. The third is never mentioned again by anybody.' },
      { label: 'Say it was a hypothetical.', eff: { press: 1, courts: 1, base: -1 },
        res: 'The word "hypothetical" is deployed about a classified capability. It satisfies nobody and ends the news cycle, which was the only objective.' },
      { label: 'Book him on again tomorrow.', wild: true,
        eff: { base: 9, press: -7, courts: -4, congress: -5, auth: 2 },
        res: 'You conclude the problem was insufficient exposure. Ratings triple. So does the number of things that are now, technically, on the record.' }
    ]
  }
];

/* Polled from Engine.draw(), ahead of the deck. Returns a card or null. */
AD.wanderFor = function (run) {
  if (!run || !AD.boredom) return null;
  if (AD.boredom(run) < AD.WANDER_AT) return null;
  const m = run.month || 1;
  if (m < (run.flags && run.flags.wanderUntil || 0)) return null;

  const roll = AD.reactRoll ? AD.reactRoll(run) : Math.random();
  const pick = AD.WANDERINGS[Math.floor(roll * AD.WANDERINGS.length) % AD.WANDERINGS.length];
  run.flags = run.flags || {};
  run.flags.wanderUntil = m + AD.WANDER_GAP;

  // He entertained himself, so the Boredometer drops. That is the trade: the
  // meter fixes itself and hands you the bill.
  if (AD.moveBored) AD.moveBored(run, -22);

  const C = AD.CAST;
  return {
    id: pick.id + '-' + m, scripted: true, who: C[pick.who] || C.cos,
    tags: ['wander'], pillarBanner: 'HE GOT BORED',
    title: pick.title, text: pick.text, choices: pick.choices
  };
};
