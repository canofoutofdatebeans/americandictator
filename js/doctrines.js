/* ============================================================
   AMERICAN DICTATOR — doctrines.js
   Permanent rule-changing upgrades unlocked at Authority thresholds.
   Each is a legal theory that sounds reasonable right up until you
   read the second sentence.
   ============================================================ */

AD.DOCTRINES = [
  {
    id: 'unitary',
    at: 15,
    glyph: '§',
    name: 'The Unitary Executive',
    quote: '"Article Two says the executive power is vested in a President. Singular. That\'s me. ' +
           'Everything downstream of that sentence is a suggestion."',
    effect: 'Damage to THE COURTS is reduced by 30%.',
    apply(run, eff) {
      if (eff.courts < 0) eff.courts = Math.ceil(eff.courts * 0.7);
    }
  },
  {
    id: 'immunity',
    at: 32,
    glyph: '🛡',
    name: 'The Immunity Shield',
    quote: '"A court may not inquire into the President\'s motives for an official act. ' +
           'Conveniently, everything I do while awake is an official act."',
    effect: 'Once per term, a faction that hits zero is quietly restored to 22 instead of ending you.',
    apply() { /* consumed in engine.resolveFail */ }
  },
  {
    id: 'emergency',
    at: 48,
    glyph: '⚡',
    name: 'Standing Emergency',
    quote: '"The emergency began in January and, by the terms of the emergency, cannot be ' +
           'declared over by anyone except the person who benefits from it."',
    effect: '+1 Authority every month, automatically, forever.',
    apply() { /* handled in engine.tick */ }
  },
  {
    id: 'obedience',
    at: 64,
    glyph: '🙇',
    name: 'Anticipatory Obedience',
    quote: '"Nobody made the university fold. Nobody made the law firm fold. They looked at ' +
           'the shape of the room and folded on their own. That\'s the beautiful part."',
    effect: 'All positive faction effects are increased by 35%.',
    apply(run, eff) {
      AD.FKEYS.forEach(k => { if (eff[k] > 0) eff[k] = Math.round(eff[k] * 1.35); });
    }
  },
  {
    id: 'cult',
    at: 80,
    glyph: '★',
    name: 'The Cult of Personality',
    quote: '"There is a portrait of me in every federal building, a coin with my profile on it, ' +
           'and a national holiday on my birthday. None of this was my idea. All of it was my idea."',
    effect: 'THE BASE can never fall below 34. It can still rise fatally high.',
    apply() { /* floor enforced in engine.applyEffects */ }
  }
];

AD.doctrineById = id => AD.DOCTRINES.find(d => d.id === id);
AD.hasDoctrine  = (run, id) => run.doctrines.indexOf(id) !== -1;

/* Returns the doctrine newly crossed by this authority value, or null. */
AD.checkDoctrineUnlock = function (run) {
  for (let i = 0; i < AD.DOCTRINES.length; i++) {
    const d = AD.DOCTRINES[i];
    if (run.authority >= d.at && !AD.hasDoctrine(run, d.id)) {
      run.doctrines.push(d.id);
      return d;
    }
  }
  return null;
};

/* Run an effect object through every unlocked doctrine. */
AD.applyDoctrines = function (run, eff) {
  run.doctrines.forEach(id => {
    const d = AD.doctrineById(id);
    if (d && d.apply) d.apply(run, eff);
  });
  return eff;
};
