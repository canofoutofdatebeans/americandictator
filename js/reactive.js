/* ============================================================
   AMERICAN DICTATOR — reactive.js
   CROSS-SYSTEM TRIGGERS — the systems generate their own crises.

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
          { label: 'Buy him back. Whatever the district wants.', eff: { congress: +6, base: -4, press: -2, cash: -0.4, auth: +2 },
            res: 'A bridge, a base, a judgeship for his cousin. He is back in the fold by Wednesday and it is the cheapest chamber you will ever buy.',
            act: r => { const s = AD.senatorById(r, rebel.id); if (s) { s.loyalty = 82; s.gripe = null; } } },
          { label: 'Humiliate him. End him in front of the base.', eff: { base: +9, congress: -9, press: -4, courts: -2, auth: +4 },
            res: 'You call him a name that sticks. The base turns on him overnight — and the nine behind him take a careful step back, having seen it done.',
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
              '"There is a school of thought, sir — an old one, a bad one, a reliable one — that says the ' +
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
