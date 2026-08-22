/* ============================================================
   AMERICAN DICTATOR, reactive.js
   CROSS-SYSTEM TRIGGERS, the systems generate their own crises.

   Until now the management screens (the caucus, the scandal, the
   bench, the press room) ran in parallel with the card deck. This is
   the connective tissue: when one of them reaches a state, it SURFACES
   A BESPOKE CARD that names the specifics and offers you the other
   systems as answers. A collapsing caucus produces a named rebel on a
   card; a hot Saint Ambrose scandal produces a "change the subject"
   card that hands you the War Room; a packed bench produces a revolt.

   Each trigger has a cooldown so it recurs rather than spams, and
   fires only after the honeymoon so the early game stays on rails.
   Consulted by Engine.draw() after the scheduled beats, before the
   random deck.
   ============================================================ */

const RC = AD.CAST;

/* has this trigger's cooldown elapsed? */
function ready (run, key, gap) {
  const until = (run.flags && run.flags['react_' + key]) || 0;
  return AD.termMonth(run) >= until;
}
function arm (run, key, gap) {
  run.flags = run.flags || {};
  run.flags['react_' + key] = AD.termMonth(run) + gap;
}

/* The Regular's escalating arc, a signature running bit. The story advances
   one stage per call no matter what you choose; the choices only decide what it
   costs you. Each call references the last. */
AD.GARY_STAGES = [
  { title: 'The Regular',
    text: 'A call has been patched through that should not have been. "It is a man named Gary, sir, from a town ' +
          'called Coldwater. He has your personal number. Nobody knows how." Deborah covers the receiver. ' +
          '"He says he is your biggest fan and he has started a militia in your honour. The Patriot Legion. ' +
          'Four members and a flag."',
    choices: [
      { label: 'Bless it. Tell Gary he is a great American.', eff: { base: +8, courts: -3, street: -3, press: -2, auth: +2 },
        res: 'Gary weeps. The Patriot Legion has a presidential endorsement by lunchtime and four hundred members by dinner.' },
      { label: 'Tell him, gently, to disband it.', eff: { base: -4, courts: +4, street: +3, press: +2 },
        res: 'Gary says he understands and will "stand down and stand by," which is not the phrase you would have chosen.' },
      { label: 'Have the call traced. Say nothing.', eff: { base: +1, street: -1, auth: +2 },
        res: 'The number is a burner bought in Coldwater. There are, it turns out, a great many burners bought in Coldwater.' },
      { label: 'Appoint Gary the ambassador to the Patriot Legion.', eff: { base: +5, press: -3, courts: -2, auth: +1 }, wild: true,
        res: 'The commission is drawn up in earnest. Gary now represents the United States to an organisation the United States does not recognise, which is him.' }
    ]},
  { title: 'Gary Calls Back',
    text: '"It is Gary again, sir." Deborah has stopped pretending this is unusual. "The Patriot Legion is now ' +
          'four thousand strong and has, his word, a compound. He would like you to visit. He has built you a ' +
          'chair. He describes it as a throne but insists it is a chair."',
    choices: [
      { label: 'Send a signed photo. Do not visit.', eff: { base: +6, street: -2, press: -2, auth: +1 },
        res: 'The photo is installed above the throne-that-is-a-chair. Pilgrims come to Coldwater to see it. This is now a thing that is happening.' },
      { label: 'Send the FBI to have a quiet look.', eff: { base: -5, courts: +5, congress: +3, press: +3 },
        res: 'The agents are welcomed warmly, given lunch, and shown the chair. They report that it is, structurally, a throne.' },
      { label: 'Tell Gary the compound needs a bigger flag.', eff: { base: +7, courts: -3, street: -4, press: -3, auth: +2 },
        res: 'The flag that goes up is visible from orbit, which is a sentence you have now caused to be true twice.' },
      { label: 'Send a rollercoaster.', eff: { base: +5, press: -2, cash: -0.2, auth: +1 }, wild: true,
        res: 'It circles the compound and crosses the throne room twice. Gary calls it the greatest day of his life and he is, for once, probably right.' }
    ]},
  { title: 'Free Coldwater',
    text: 'Deborah does not cover the receiver this time. "Gary\'s compound has declared independence. It is now ' +
          'the Sovereign Republic of Free Coldwater. Population four thousand. Head of state: you. Title: God-Emperor, ' +
          'which he stresses you did not ask for and cannot refuse. The Guard is forty minutes away and awaiting a word."',
    choices: [
      { label: 'Accept the crown of Free Coldwater. Why not.', eff: { base: +9, courts: -8, street: -7, congress: -6, press: -5, auth: +5 },
        res: 'You are now, on paper, the God-Emperor of a breakaway republic in Ohio. Four constitutional scholars resign rather than write the memo.' },
      { label: 'Disavow it. Publicly. By name.', eff: { base: -8, courts: +7, street: +7, congress: +5, press: +5, auth: -3 },
        res: 'Gary takes it hard. Free Coldwater lowers its flag to half-mast and issues a statement of "profound but loyal disappointment."' },
      { label: 'Send the forces. End it before it is a headline.', eff: { base: -4, street: +6, courts: -4, press: -6, auth: +4 },
        res: 'The Guard arrives to find four thousand people, a chair and a rollercoaster. There is nothing to storm. Everyone has lunch.' },
      { label: 'Declare war on Free Coldwater to bury a scandal.', eff: { base: +6, press: -5, courts: -4, auth: +3 }, wild: true,
        res: 'You cannot declare war on part of Ohio, several lawyers explain, at length, over the sound of you not listening.' }
    ]},
  { title: 'Senator Gary',
    text: 'One last call. "Sir. It is Gary. He is not calling from the compound." Deborah pauses. ' +
          '"He won the special election in Coldwater. Forty-one points. He is calling from the floor of the ' +
          'Senate, where he has just been sworn in, and he says he owes it all to you, and that he votes exactly ' +
          'how you tell him, and only how you tell him, forever."',
    choices: [
      { label: 'Welcome Senator Gary. He is yours completely.', eff: { base: +7, congress: +8, courts: -3, press: -3, auth: +4 },
        res: 'You have manufactured the single most loyal senator in the chamber out of a man with a burner phone and a chair. He never once deviates. It is unsettling in a way you cannot name.' },
      { label: 'Quietly hope he loses the next one.', eff: { base: -2, congress: +2, press: +2 },
        res: 'He does not lose the next one. He does not lose any of them. Gary is, at time of writing, chair of three committees and unopposed for life.' },
      { label: 'Give him a real job. He earned it.', eff: { base: +4, congress: +4, courts: -2, auth: +2 },
        res: 'You put Gary on a committee. He reads every bill in full, out loud, which no senator has done since 1874, and it grinds the chamber to a halt for a month.' },
      { label: 'Ask Gary, finally, how he got your number.', eff: { base: +3, auth: +1 }, wild: true,
        res: 'He tells you. It is so simple, so obvious and so completely your own fault that you hang up, sit down, and do not speak for eleven minutes.' }
    ]}
];

AD.REACTIVE = [

  /* ---- THE REBELLION: a collapsing caucus puts a named rebel on a card ---- */
  {
    key: 'rebellion', gap: 10,
    test (run) {
      if (AD.termMonth(run) < 6) return false;
      const sum = AD.senateSummary(run);
      return sum.outOfLine >= 8 && sum.avgOwn < 42;
    },
    build (run) {
      const rebel = (run.senate || []).filter(s => !s.gone && s.party === 'own')
        .sort((a, b) => a.loyalty - b.loyalty)[0];
      if (!rebel) return null;
      const nm = 'Senator ' + rebel.first + ' ' + rebel.last + ' of ' + rebel.state;
      return {
        id: 'react-rebellion', scripted: true, who: RC.speaker, tags: ['congress','power'],
        pillarBanner: 'THE CAUCUS CRACKS',
        title: 'The Rebel',
        text: nm + ' has gone on television. "Your own senator, sir," Hal says, "reading a list of ' +
              'things he calls red lines. Nine others are standing behind him. If they caucus with the ' +
              'other side on Thursday, you lose the chamber."',
        choices: [
          { label: 'Buy him back. Whatever the district wants. (Treasury)', eff: { congress: +6, base: -4, press: -2, auth: +2 },
            res: 'A bridge, a base, a judgeship for his cousin, all of it billed to the Treasury. He is back in the fold by Wednesday and it did not cost you a personal cent.',
            act: r => { AD.movePurse(r, -35); const s = AD.senatorById(r, rebel.id); if (s) { s.loyalty = 82; s.gripe = null; } } },
          { label: 'Humiliate him. End him in front of the base.', eff: { base: +9, congress: -9, press: -4, courts: -2, auth: +4 },
            res: 'You call him a name that sticks. The base turns on him overnight, and the nine behind him take a careful step back, having seen it done.',
            act: r => { const s = AD.senatorById(r, rebel.id); if (s) s.loyalty = 6; (r.senate || []).forEach(o => { if (o.party === 'own' && o.loyalty < 60) o.loyalty = AD.clamp(o.loyalty + 6, 0, 100); }); } },
          { label: 'Let him walk. The caucus is smaller and purer.', eff: { base: +5, congress: -12, courts: -3, auth: -2 },
            res: 'He crosses the aisle and takes four with him. What remains answers to you completely, and there is a great deal less of it.',
            act: r => { const s = AD.senatorById(r, rebel.id); if (s) { s.party = 'opp'; s.loyalty = 20; } } },
          { label: 'Offer him the Vice Presidency.', eff: { base: +3, congress: -5, press: -3, auth: +1 }, wild: true,
            res: 'It is already occupied. You offer it anyway. For four remarkable days there are, on paper, two Vice Presidents, and the payroll office refuses to choose.',
            act: r => { const s = AD.senatorById(r, rebel.id); if (s) s.loyalty = 70; } }
        ]
      };
    }
  },

  /* ---- CHANGE THE SUBJECT: a hot scandal hands you the War Room ---- */
  {
    key: 'deflect', gap: 8,
    test (run) {
      if (AD.termMonth(run) < 6) return false;
      return AD.cayHeat(run) >= 6 && (!run.wars || !run.wars.some(w => !w.done));
    },
    build (run) {
      return {
        id: 'react-deflect', scripted: true, who: RC.cos, tags: ['press','foreign'],
        pillarBanner: 'THE ONLY STORY',
        title: 'Change The Subject',
        text: 'Saint Ambrose has led every bulletin for a fortnight. Deborah closes the door. ' +
              '"There is a school of thought, sir, an old one, a bad one, a reliable one, that says the ' +
              'fastest way off a front page is onto a different front page. Preferably one with a flag on it."',
        choices: [
          { label: 'Find a small country and a big reason. Tonight.', eff: { base: +8, press: -4, courts: -5, congress: -5, street: +2, auth: +5 },
            res: 'By morning there is a carrier group somewhere warm and nobody is saying the words "guest book" any more. It works. It always works. That is the problem with it.',
            act: r => { if (AD.declareWar) AD.declareWar(r, 'baldoro', 'deflect'); } },
          { label: 'Release the files instead. Get it over with.', eff: { press: +11, congress: +7, courts: +6, base: -10, auth: -5 },
            res: 'Everything, unredacted, on a Thursday. It is the worst week of the term and the last week the story leads.',
            act: r => { AD.cayState(r); r.cay.heat = 1; } },
          { label: 'Ride it out. Say nothing. Change nothing.', eff: { base: +3, press: -5, street: -4, auth: +2 },
            res: 'You stare it down. It does not blink. Silence at this volume is its own kind of admission, and it runs every night at six.',
            act: r => { AD.bumpHeat(r, 1); } },
          { label: 'Declare war on the news itself.', eff: { base: +6, press: -8, courts: -4, auth: +3 }, wild: true,
            res: 'The proclamation names an abstract noun as a hostile power. The Pentagon requests, in writing, a set of coordinates. None is forthcoming.' }
        ]
      };
    }
  },

  /* ---- THE ROBED RESISTANCE: a packed bench provokes a revolt ---- */
  {
    key: 'benchrevolt', gap: 14,
    test (run) {
      if (AD.termMonth(run) < 10) return false;
      return (run.judges || []).filter(j => j.appointee).length >= 4;
    },
    build (run) {
      const n = (run.judges || []).filter(j => j.appointee).length;
      return {
        id: 'react-benchrevolt', scripted: true, who: RC.cj, tags: ['courts','press'],
        pillarBanner: 'THE BENCH REVOLTS',
        title: 'The Robed Resistance',
        text: 'You have packed ' + n + ' seats now, and the ones you did not pack have noticed. ' +
              'Chief Justice Stone has organised the remaining judges into something the press is calling a ' +
              'resistance. "They are still ruling, sir. They are simply ruling together, and against you, and ' +
              'reading their opinions aloud."',
        choices: [
          { label: 'Pack the rest. Finish the job.', eff: { base: +6, courts: +6, congress: -8, press: -9, street: -6, auth: +6 },
            res: 'You do not have the seats to do it lawfully, so you do it the other way. The bench is yours and the word "court" now needs quotation marks.',
            act: r => { (r.judges || []).forEach(j => { if (j.align < 60) { j.align = 90; j.appointee = true; } }); } },
          { label: 'Back off. Let the bench breathe.', eff: { courts: +9, press: +7, congress: +6, base: -8, auth: -4 },
            res: 'You stop for a season. The resistance loses its reason to exist and quietly dissolves, which is the one thing a resistance cannot survive.' },
          { label: 'Attack Stone personally, every day.', eff: { base: +8, courts: -10, press: -6, auth: +3 },
            res: 'She responds by writing better opinions. It is the least effective feud of your presidency and the most quoted.' },
          { label: 'Issue the judges robes with your face on them.', eff: { base: +4, courts: -5, press: -5, auth: +2 }, wild: true,
            res: 'The garments are tailored and delivered. Not one is worn. They hang, en masse, in a cloakroom that becomes a minor tourist attraction.' }
        ]
      };
    }
  },

  /* ---- THE UNDERSTUDY: a hot base lets the VP outgrow you (non-fatal) ---- */
  {
    key: 'vprival', gap: 12,
    test (run) {
      return AD.termMonth(run) >= 6 && (run.vpAmbition || 0) >= 60 && !run.locked.base;
    },
    build (run) {
      return {
        id: 'react-vprival', scripted: true, who: RC.vp, tags: ['base','loyalty'], sfx: 'betray',
        pillarBanner: 'THE UNDERSTUDY STIRS',
        title: 'Bigger Than You',
        text: 'The movement is louder than ever, and lately it is loud for someone else. Nadia has the numbers. ' +
              '"Chet is polling eleven points above you inside the base, sir. He has started ending his own rallies ' +
              'with your slogan. He calls it a tribute. Nobody in this building thinks it is a tribute."',
        choices: [
          { label: 'Humble him in public. Remind them whose movement it is.', eff: { base: -6, congress: -3, press: +2, auth: +3 },
            res: 'You put him on a stage and cut him down to size in front of the faithful. It costs you a slice of the crowd and buys back the top of it.',
            act: r => { r.vpAmbition = 10; } },
          { label: 'Bring him inside. A real job, and a short leash.', eff: { base: +2, congress: +4, courts: -2, auth: +1 },
            res: 'A portfolio, an office near yours, and a schedule you set. Ambition, salaried and supervised, is much easier to watch.',
            act: r => { r.vpAmbition = 25; } },
          { label: 'Do nothing. Let the crowd have two heroes.', eff: { base: +5, press: -3, auth: -1 },
            res: 'You share the stage and the chant. The base loves the double act, right up until it decides which half it prefers.',
            act: r => { r.vpAmbition = AD.clamp((r.vpAmbition || 60) + 4, 0, 92); } },
          { label: 'Send him on a very long goodwill tour. Antarctica, mostly.', eff: { base: +3, press: -2, auth: +2 }, wild: true,
            res: 'The Vice President is dispatched to inspect penguins for eleven weeks. He sends back photographs. The photographs are, annoyingly, charming.',
            act: r => { r.vpAmbition = 20; } }
        ]
      };
    }
  },

  /* ---- THE HOUSE WINS: owning the Casino throws off cash-swing events ---- */
  {
    key: 'casino', gap: 6,
    test (run) {
      return AD.termMonth(run) >= 4 && AD.built && AD.built(run, 'casino');
    },
    build (run) {
      return {
        id: 'react-casino', scripted: true, who: RC.treas, tags: ['money','residence'], sfx: 'jackpot',
        pillarBanner: 'THE HOUSE WINS',
        title: 'A Record Night',
        text: 'Lyle brings the casino\'s monthly take, and he brings it the way a man carries something that might ' +
              'go off. "The floor cleared a fortune, sir. Most of it clean. Some of it walked in as a suitcase and ' +
              'a foreign accent and did not fill in the card. What would you like the ledger to say?"',
        choices: [
          { label: 'Bank all of it. Every dollar counts.', eff: { cash: +0.6, press: -4, courts: -3 },
            res: 'The full take goes into your accounts, suitcase and all. Two compliance officers resign and one of them writes a book.' },
          { label: 'Bank the clean money. Send the suitcase back.', eff: { cash: +0.35, press: +3, congress: +2 },
            res: 'You keep the honest half and return the rest with a smile. It is the most expensive display of integrity available to you.' },
          { label: 'Comp the whole base a night on the house.', eff: { base: +7, cash: +0.1, press: -2 },
            res: 'Free chips and cheap steak for the faithful. The floor loses money and the movement gains a folk memory.' },
          { label: 'Rig one machine to always pay your own face.', eff: { base: +4, cash: +0.3, courts: -3 }, wild: true,
            res: 'A single slot in the corner dispenses commemorative coins of you, at a loss, forever. It becomes the most photographed object in the building.' }
        ]
      };
    }
  },

  /* ---- THE REGULAR: the recurring caller, one stage per visit ---- */
  {
    key: 'gary', gap: 9,
    test (run) {
      const st = (run.flags && run.flags.garyStage) || 0;
      return AD.termMonth(run) >= 7 && st < AD.GARY_STAGES.length;
    },
    build (run) {
      const st = (run.flags && run.flags.garyStage) || 0;
      const stage = AD.GARY_STAGES[st];
      if (!stage) return null;
      // the story marches on whatever you choose; wrap each choice's act to advance it
      const choices = stage.choices.map(c => Object.assign({}, c, {
        act: r => { if (c.act) c.act(r); r.flags = r.flags || {}; r.flags.garyStage = st + 1; }
      }));
      return { id: 'react-gary-' + st, scripted: true, who: RC.cos, tags: ['levity','street'],
        pillarBanner: 'THE PHONE RINGS', title: stage.title, text: stage.text, choices };
    }
  }
];

/* Consulted by Engine.draw() after scheduled beats, before the random deck. */
AD.reactiveFor = function (run) {
  for (let i = 0; i < AD.REACTIVE.length; i++) {
    const t = AD.REACTIVE[i];
    if (!ready(run, t.key)) continue;
    let fires = false;
    try { fires = t.test(run); } catch (e) { fires = false; }
    if (!fires) continue;
    let card = null;
    try { card = t.build(run); } catch (e) { card = null; }
    if (card) { arm(run, t.key, t.gap); return card; }
  }
  return null;
};
