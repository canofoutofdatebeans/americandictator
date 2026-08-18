/* ============================================================
   AMERICAN DICTATOR, doctrines.js
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
    effect: 'THE BASE can never fall below 34, whatever you do.',
    apply() { /* floor enforced in engine.applyEffects */ }
  }
];

AD.doctrineById = id => AD.DOCTRINES.find(d => d.id === id);
AD.hasDoctrine  = (run, id) => run.doctrines.indexOf(id) !== -1;

/* Returns the doctrine newly crossed by this authority value, or null. It no
   longer GRANTS the doctrine, it only OFFERS it (once). Signing happens on the
   decision card built by AD.buildDoctrineCard; a bin leaves it un-adopted but
   marked offered so it is not dangled again. */
AD.checkDoctrineUnlock = function (run) {
  run.doctrineOffered = run.doctrineOffered || [];
  for (let i = 0; i < AD.DOCTRINES.length; i++) {
    const d = AD.DOCTRINES[i];
    if (run.authority >= d.at && !AD.hasDoctrine(run, d.id) && run.doctrineOffered.indexOf(d.id) === -1) {
      run.doctrineOffered.push(d.id);
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

/* ============================================================
   DOCTRINES ARE NOW A DECISION, not a notification. Crossing the
   Authority threshold OFFERS the doctrine as a three-way card:
   Sign it (adopt the power), Bin it (decline, the institutions
   exhale, the base sulks), or the comedy option (adopt it the
   stupid way). Sign and comedy grant the doctrine; bin does not.
   ============================================================ */
AD.DOCTRINE_DECIDE = {
  unitary: {
    sign: { label: 'Sign it. The executive power is mine, singular.',
      eff: { base: 4, courts: -6, press: -4, auth: 5 },
      res: 'You put your name to the theory that the other two branches are, at most, advisory. It is now the position of the United States government, which is you.' },
    bin: { label: 'Bin it. Two branches are plenty of branches.',
      eff: { courts: 7, press: 6, congress: 5, base: -4, auth: -2 },
      res: 'You decline to abolish the separation of powers by memo. Three law professors faint from relief and the base calls you a wet blanket.' },
    comedy: { label: 'Declare yourself the executive, the legislative AND the judiciary.',
      eff: { base: 5, courts: -5, congress: -5, press: -4, auth: 2 }, grants: true,
      res: 'You claim all three branches at a press conference, then get briefly confused about which one you are speaking to. The theory survives; your credibility files an appeal.' }
  },
  immunity: {
    sign: { label: 'Sign it. Every official act is, conveniently, official.',
      eff: { base: 4, courts: -6, press: -4, auth: 4 },
      res: 'The doctrine holds that the President cannot be questioned about official acts. You are, it turns out, always on the clock.' },
    bin: { label: 'Bin it. Even I should be askable a question.',
      eff: { courts: 7, press: 6, congress: 4, base: -3, auth: -2 },
      res: 'You concede that a president can, in principle, be asked what he was doing. The concession is treated as front-page news, which tells you everything.' },
    comedy: { label: 'Issue yourself a laminated card that says IMMUNE.',
      eff: { base: 5, press: -3, courts: -2, auth: 1 }, grants: true,
      res: 'A wallet-sized card, gold-embossed, reading OFFICIAL ACTS ONLY. You show it to a judge. Astonishingly, for a while, it works.' }
  },
  emergency: {
    sign: { label: 'Sign it. The emergency is permanent, and it is mine.',
      eff: { base: 4, congress: -6, press: -4, auth: 4 },
      res: 'The emergency that began in January is declared, by the terms of the emergency, un-endable by anyone but you. It will now quietly print you a point of Authority every month, forever.' },
    bin: { label: 'Bin it. Emergencies should probably, eventually, end.',
      eff: { congress: 7, press: 6, courts: 4, base: -4, auth: -2 },
      res: 'You let the emergency lapse. Congress is so surprised it briefly forgets to oppose you. The base wanted the emergency; the base is crushed.' },
    comedy: { label: 'Declare a state of emergency about the state of emergency.',
      eff: { base: 5, press: -3, congress: -3, auth: 2 }, grants: true,
      res: 'A nested emergency, each one justifying the next, all the way down. FEMA sends a very confused letter. The Authority accrues regardless.' }
  },
  obedience: {
    sign: { label: 'Sign it. Let them fold before you have to ask.',
      eff: { base: 4, press: -4, street: -3, auth: 4 },
      res: 'You do not order the universities and the firms to comply. You simply let them read the room. Everything you do now lands harder, because nobody waits to be told.' },
    bin: { label: 'Bin it. Make them at least pretend to resist.',
      eff: { press: 6, congress: 5, street: 4, base: -4, auth: -2 },
      res: 'You decline the pleasure of pre-emptive surrender. Institutions keep the fig leaf of independence, which is, annoyingly, most of what a fig leaf is for.' },
    comedy: { label: 'Publish a weekly leaderboard of who folded fastest.',
      eff: { base: 6, press: -4, courts: -2, auth: 2 }, grants: true,
      res: 'A ranking of institutions by speed of capitulation. Being high on it becomes shameful; being low on it becomes dangerous. Everyone climbs.' }
  },
  cult: {
    sign: { label: 'Sign it. The portrait, the coin, the holiday.',
      eff: { base: 5, press: -4, courts: -3, auth: 4 },
      res: 'None of it was your idea; all of it was your idea. The movement is now load-bearing: the Base can never fall below 34, whatever you do.' },
    bin: { label: 'Bin it. A national holiday is, frankly, a bit much.',
      eff: { press: 6, congress: 4, courts: 4, base: -4, auth: -2 },
      res: 'You decline the holiday, on grounds of taste, which nobody in the building knew you had. The base takes the modesty as a personal insult.' },
    comedy: { label: 'Put your face on the money. All of it.',
      eff: { base: 5, press: -4, courts: -4, congress: -3, auth: 2 }, grants: true,
      res: 'You attempt to appear on every denomination at once. The Mint, weeping, explains the several laws involved. You keep the holiday and the floor.' }
  }
};

/* Build the three-way decision card offered when a doctrine's threshold is
   crossed. Sign and the comedy option grant the doctrine; Bin walks away. */
AD.buildDoctrineCard = function (run, d) {
  const dec = AD.DOCTRINE_DECIDE[d.id];
  const grant = r => { if (!AD.hasDoctrine(r, d.id)) r.doctrines.push(d.id); };
  const C = AD.CAST;
  return {
    id: 'doctrine-' + d.id, scripted: true, sfx: 'doctrine',
    who: C.ag || C.lawyer || C.cos, tags: ['power', 'doctrine'],
    pillarBanner: 'A NEW DOCTRINE',
    title: d.glyph + ' ' + d.name,
    text: 'Bo slides a single page across the desk. "It is drawn up and ready to sign, sir, the whole theory ' +
          'in one paragraph, and it changes the rules of the game." ' + d.quote + ' (' + d.effect + ')',
    choices: [
      { label: dec.sign.label, eff: dec.sign.eff, res: dec.sign.res, act: grant },
      { label: dec.bin.label, eff: dec.bin.eff, res: dec.bin.res },
      { label: dec.comedy.label, eff: dec.comedy.eff, res: dec.comedy.res, wild: true,
        act: dec.comedy.grants ? grant : undefined }
    ]
  };
};
