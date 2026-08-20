/* ============================================================
   AMERICAN DICTATOR, reckoning.js
   THE RECEIPTS.

   Winning this game feels like winning, which is the one thing a
   satire of this subject must not let stand. The Dossier tells you
   what you DID. The Front Page tells you how it PLAYED. This tells you
   what it COST, and it is addressed to you rather than about you.

   The rules it is written under:

     No lecture. Every line is a fact drawn from this specific run.
     If it did not happen, it does not appear.

     No scolding adjectives. The numbers are the argument. "Eleven
     thousand people" is heavier than "tragically, many people."

     The gain column is real. You did win those things. The joke does
     not work unless the ledger is honest on both sides.

     It ends on the fortune, always, because that is the number the
     player was optimising and the one the country never sees.

   Nothing here changes the score. It is not a punishment mechanic. It
   is the last thing you read.
   ============================================================ */

/* Each entry: { when(s) -> bool, gain(s), cost(s) }. Only entries whose
   `when` passes appear, so a gentle run gets a short, quiet ledger and a
   maximalist one gets a very long page. */
AD.RECKONING = [

  {
    when: s => s.clausesBroken > 0,
    gain: s => 'You got past ' + s.clausesBroken + ' of the ' + AD.CLAUSES.length +
               ' things the office is not allowed to do.',
    cost: s => s.fullSet
      ? 'There is now no clause anyone can point to and say: not that one. The next person will not have to argue for it. It will simply be how the office works.'
      : 'Each one is now a precedent with your name on it, available to whoever comes next, including the people you would least like to hand it to.'
  },

  {
    when: s => s.judgesPacked > 0,
    gain: s => s.judgesPacked + ' seat' + (s.judgesPacked === 1 ? '' : 's') + ' on the bench that will not rule against you.',
    cost: () => 'A court that cannot rule against a president stops being a court that anybody appeals to. It keeps the building, the robes and the name.'
  },

  {
    when: s => s.sacked > 0,
    gain: s => s.sacked + ' senator' + (s.sacked === 1 ? '' : 's') + ' removed from your path.',
    cost: s => 'The ' + (100 - s.sacked) + ' who are left watched it happen. They will vote with you now, and they will never tell you anything true again.'
  },

  {
    when: s => s.outletsOwned > 0,
    gain: s => s.outletsOwned + ' newsroom' + (s.outletsOwned === 1 ? '' : 's') + ' that print what you hand them.',
    cost: () => 'The reporting did not stop. It moved to places with no lawyers, no editors and no way to tell you when you are wrong.'
  },

  {
    when: s => s.citiesOccupied > 0 || s.citiesBoiling > 0,
    gain: s => (s.citiesOccupied || 0) + ' cit' + (s.citiesOccupied === 1 ? 'y' : 'ies') + ' quiet, and quiet on your terms.',
    cost: s => 'Average unrest across the country finished at ' + s.avgUnrest + '%. Quiet held by force is a bill that has been deferred, not paid, and it is not payable by you.'
  },

  {
    when: s => s.warsDeclared > 0,
    gain: s => s.warsDeclared + ' war' + (s.warsDeclared === 1 ? '' : 's') + ', and the footage from ' + (s.warsDeclared === 1 ? 'it' : 'them') + '.',
    cost: () => 'Nobody in this file counted the other side. The game did not ask you to and neither did anybody else, which is the part worth sitting with.'
  },

  {
    when: s => s.pardons > 0,
    gain: s => s.pardons + ' pardon' + (s.pardons === 1 ? '' : 's') + ', signed, final, unreviewable.',
    cost: s => s.pardonSaints
      ? (s.pardonSaints + ' of them went to people who were actually innocent, which means the power works. It also means every other one was a choice.')
      : 'Not one went to somebody who was innocent. The power exists to correct the courts. You used it to correct your own inconvenience.'
  },

  {
    when: s => s.boardSeats > 0,
    gain: s => s.boardSeats + ' countr' + (s.boardSeats === 1 ? 'y' : 'ies') + ' on the Board of Peace, at a billion each.',
    cost: s => (s.boardRefusals || 0) + ' governments were asked and said no, in writing, and several published the letter. The Board is now a complete list of who could be bought.'
  },

  {
    when: s => s.cabinetChurn >= 3,
    gain: s => 'A cabinet with no one left in it who will finish a sentence you did not start.',
    cost: s => s.cabinetChurn + ' officials went through that building. The ones who lasted learned exactly one lesson, and it was not about policy.'
  },

  {
    when: s => (s.truthIndex || 50) >= 65,
    gain: s => 'The record says what you needed it to say.',
    cost: s => 'The Truth Index closed at ' + s.truthIndex + '. Nothing official is believed now, including the parts that are true, including the next emergency.'
  },

  {
    when: s => (s.holdings || 0) >= 3,
    gain: s => s.holdings + ' holdings, quietly acquired, quietly earning.',
    cost: () => 'Every one was bought while holding an office that regulates it. The conflict was never hidden. It was simply never actionable, which is a different thing and a worse one.'
  },

  {
    when: s => (s.callbacksFired || 0) > 0,
    gain: () => 'Nothing. This row is only a cost.',
    cost: s => (s.callbacksFired) + ' of your own decisions came back within the term, by name, while you were still in office. The ones that have not come back yet are ' +
               ((s.memoriesPending || 0) ? s.memoriesPending + ' and counting.' : 'somebody else’s problem now.')
  }
];

/* Build the ledger for a finished run. */
AD.buildReckoning = function (score) {
  const s = score || {};
  const rows = AD.RECKONING
    .filter(r => { try { return !!r.when(s); } catch (e) { return false; } })
    .map(r => ({ gain: r.gain(s), cost: r.cost(s) }));

  const goal = s.wealthGoal || AD.WEALTH_GOAL;
  const gotRich = s.cash >= goal;

  /* The closing line always lands on the fortune, because that is the number
     the player was optimising and the one the country never sees. */
  let close;
  if (gotRich && s.win) {
    close = 'You finished with <b>$' + s.cash + ' billion</b> and the country. Both of those are yours to keep. ' +
            'Only one of them was ever on the ballot.';
  } else if (gotRich) {
    close = 'You did not keep the country. You kept <b>$' + s.cash + ' billion</b>. ' +
            'On the only scoreboard that clears a bank, that is a win, and it is the one you were playing.';
  } else if (s.win) {
    close = 'You took the country and finished with <b>$' + s.cash + ' billion</b>. ' +
            'You are the rare one who did this for the reason people assume everybody does it for.';
  } else {
    close = 'You finished with <b>$' + s.cash + ' billion</b> and none of it. ' +
            'Everything above still happened. That is the part that does not reverse when you lose.';
  }

  /* One quiet line for a run that genuinely did very little damage. */
  const clean = !rows.length;
  return {
    rows: rows,
    clean: clean,
    close: clean
      ? 'There is nothing to put in this column. You held the most powerful office on Earth and handed it back roughly as you found it. ' +
        'The game scores that as a loss. It is the only thing on this page the game is wrong about.'
      : close
  };
};
