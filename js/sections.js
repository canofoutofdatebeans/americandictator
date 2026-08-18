/* ============================================================
   AMERICAN DICTATOR, sections.js
   SECTION POP-UPS, the interactive systems reach out and grab you.

   The management screens (Economy, Pardons, Phone, War Room, Street,
   Press, Congress, Base, Money) shouldn't just sit there waiting to be
   opened. This pool of crises is keyed to each section's live state and
   fires throughout a term, so every system interweaves with the deck:
   a rival cuts you off, a crook begs for clemency, a city boils over, a
   story breaks, the caucus wobbles, the base wants red meat, a donor
   offers a suitcase. Where it makes sense, the choices route straight
   back into that section's own mechanics.

   Consulted by Engine.draw() AFTER the extreme-state reactive triggers
   and BEFORE the random deck. Paced so pop-ups punctuate rather than
   swamp: at most one every few months, chosen at random from whatever
   is currently relevant. Every choice is a real decision with its own
   spread of effects. Uses backtick strings throughout for apostrophes.
   ============================================================ */

(function () {
const C = AD.CAST;
const pick = arr => arr[Math.floor(AD.rng() * arr.length)];

AD.SECTION_EVENTS = [

  /* ------------------------- THE ECONOMY ------------------------- */
  {
    key: 'economy', gap: 8,
    test (run) { return AD.termMonth(run) >= 4; },
    build (run) {
      const n = pick((AD.ECON_NATIONS || []).filter(x => x.kind === 'rival' || x.kind === 'partner')) ||
                { name: 'China', id: 'china' };
      return {
        id: 'sec-economy', scripted: true, who: C.treas, tags: ['economy','money'],
        pillarBanner: 'THE ECONOMY',
        title: 'The Squeeze',
        text: `Lyle has a chart he clearly wishes were a different chart. "` + n.name + ` has moved first, sir. ` +
              `They have cut us off from something we did not realise we only got from them. Prices move on Monday. ` +
              `The base will feel it at the pump and the checkout before they hear a word of explanation."`,
        choices: [
          { label: `Hit them back twice as hard. Tariff everything.`, eff: { base: 5, street: -4, congress: -3, cash: -0.3, auth: 3 },
            res: `You answer a squeeze with a bear hug. It thrills a rally and empties a marina, and both facts are true at once.`,
            act: r => { if (AD.imposeTariff && !AD.tariffOn(r, n.id)) AD.imposeTariff(r, n.id); } },
          { label: `Quietly cut a deal. Announce a "historic victory".`, eff: { base: 2, press: 4, congress: 4, cash: 0.2, auth: 1 },
            res: `Your negotiators fix most of it in a fortnight. You take a victory lap for a problem the public never saw, which is the only kind worth taking.` },
          { label: `Blame the last administration and change nothing.`, eff: { base: 4, press: -3, street: -3, auth: 1 },
            res: `You attribute a shortage that began last week to a president who left years ago. Roughly half the country accepts this by lunchtime.` },
          { label: `Declare the missing product a strategic national treasure.`, eff: { base: 5, press: -3, courts: -2, cash: -0.2, auth: 2 }, wild: true,
            res: `An executive order elevates a mid-range consumer good to the status of the flag. A four-star general asks, sincerely, what his role is.` }
        ]
      };
    }
  },

  /* ------------------------- THE PARDONS ------------------------- */
  {
    key: 'pardon', gap: 7,
    test (run) {
      return AD.termMonth(run) >= 4 && (AD.PARDONS || []).some(p => !p.saint && !AD.isPardoned(run, p.id));
    },
    build (run) {
      const crooks = AD.PARDONS.filter(p => !p.saint && !AD.isPardoned(run, p.id));
      const p = pick(crooks);
      const grant = r => { r.pardoned = r.pardoned || []; if (r.pardoned.indexOf(p.id) === -1) r.pardoned.push(p.id); };
      const plus = (a, k, v) => { a = Object.assign({}, a); a[k] = (a[k] || 0) + v; return a; };
      let comedyEff = plus(plus(p.eff, 'press', -3), 'courts', -3);
      comedyEff = plus(comedyEff, 'base', 2);
      return {
        id: 'sec-pardon-' + p.id, scripted: true, who: C.lawyer, tags: ['pardon','courts'],
        pillarBanner: 'A REQUEST FOR CLEMENCY',
        title: 'Someone Wants a Pardon',
        text: `Sy has a file and a hopeful expression. "` + p.name + `, sir, ` + p.crime + `. He is asking, through ` +
              `counsel, through donors, through your own son at one point, for a pardon. The base would cheer it. ` +
              `The lawyers would very much not."`,
        choices: [
          { label: `Sign it now. On the spot.`, eff: p.eff,
            res: (p.eff.cash ? `The pardon is signed before the ink on the conviction is dry, and a token of gratitude follows discreetly.` :
                               `The pardon is signed before the ink on the conviction is dry. Gratitude is expressed, loudly, on television.`),
            act: grant },
          { label: `Make him sweat. Refuse, for now.`, eff: { press: 4, courts: 5, congress: 3, base: -3 },
            res: `You decline, for today. He remains, technically, a convict, and remains, practically, entirely in your debt.` },
          { label: `Pardon him AND appoint him to something.`, eff: comedyEff, wild: true,
            res: `Not content to free him, you give him a title. The confirmation hearing is the single funniest afternoon of the term.`,
            act: grant }
        ]
      };
    }
  },

  /* ------------------------- THE PHONE ------------------------- */
  {
    key: 'phone', gap: 9, sfx: 'phone',
    test (run) { return AD.termMonth(run) >= 3; },
    build (run) {
      const caller = pick([
        { who: `a cable-news host who calls himself your friend`, ask: `wants tonight's talking points, dictated, so he can "report" them at eight` },
        { who: `a foreign strongman you admire`, ask: `wants to congratulate you on something you have not done yet` },
        { who: `your single largest donor`, ask: `wants a word about a regulation that is costing him a yacht` }
      ]);
      return {
        id: 'sec-phone', scripted: true, who: C.cos, tags: ['phone','press'], sfx: 'phone',
        pillarBanner: 'THE PHONE RINGS',
        title: 'A Call Is Patched Through',
        text: `Deborah covers the receiver. "It is ` + caller.who + `, sir. He ` + caller.ask + `. ` +
              `I can tell him you are in a meeting. You are, technically, always in a meeting."`,
        choices: [
          { label: `Take it. Give him exactly what he wants.`, eff: { base: 4, press: -3, courts: -2, auth: 2 },
            res: `You deliver, warmly and completely. A favour banked is a favour owed, and you prefer the country to run on both.` },
          { label: `Take it. Tell him you'll "look into it" and forget.`, eff: { press: 3, congress: 2, base: -1 },
            res: `You promise nothing in the specific tone of a man promising everything. He hangs up delighted and no poorer.` },
          { label: `Let Deborah take a message. You are governing.`, eff: { base: -3, press: 5, congress: 4, auth: -1 },
            res: `You decline the call and do your actual job for twenty uninterrupted minutes. Deborah looks at you as though you are unwell.` },
          { label: `Put him on speaker. Livestream the whole thing.`, eff: { base: 5, press: -4, street: -2, auth: 2 }, wild: true,
            res: `Two million people hear a private conversation neither of you meant to have in public. It is the best-rated broadcast of the week and the worst-advised.` }
        ]
      };
    }
  },

  /* ------------------------- THE WAR ROOM ------------------------- */
  {
    key: 'war', gap: 12,
    test (run) { return AD.termMonth(run) >= 6 && (!run.wars || !run.wars.some(w => !w.done)); },
    build (run) {
      const t = pick((AD.WAR_TARGETS || []).filter(x => x.strength <= 2)) || { name: 'a small country', id: null };
      return {
        id: 'sec-war', scripted: true, who: C.gen, tags: ['war','foreign'],
        pillarBanner: 'THE WAR ROOM',
        title: 'An Incident',
        text: `General Tarrant lays down a single photograph. "There has been an incident near ` + t.name + `, sir. ` +
              `It is ambiguous. It could be nothing. It could also be, if you wanted it to be, a reason. The base ` +
              `is already asking why we have the finest military in history if we never let it outside."`,
        choices: [
          { label: `Call it an act of war. Move the carriers tonight.`, eff: { base: 5, congress: -5, courts: -3, street: -2, auth: 4 },
            res: `By morning there is a battle group somewhere warm and a rally somewhere loud. Nothing is resolved and everything is louder.`,
            act: r => { if (AD.declareWar && t.id) AD.declareWar(r, t.id, 'incident'); } },
          { label: `Investigate first. Say nothing for now.`, eff: { base: -3, congress: 5, press: 5, courts: 3, auth: 1 },
            res: `You ask for facts before you ask for a flag. It is the correct call, it is the boring call, and no one composes a song about it.` },
          { label: `Threaten total destruction, then send a warm note.`, eff: { base: 5, press: -3, street: -2, auth: 2 },
            res: `Fire and fury on Monday, a friendly letter on Friday. The whiplash is the policy, and it is genuinely unclear whether it is working.` },
          { label: `Rename the incident after yourself and sell hats.`, eff: { base: 5, press: -3, cash: 0.2, auth: 1 }, wild: true,
            res: `Before anyone has established what happened, there is merchandise commemorating it. The hats sell out. The facts do not.` }
        ]
      };
    }
  },

  /* ------------------------- THE STREET ------------------------- */
  {
    key: 'street', gap: 8,
    test (run) {
      if (AD.termMonth(run) < 4 || run.locked.street) return false;
      return run.meters.street < 55 || (run.streets || []).some(c => c.unrest >= 55);
    },
    build (run) {
      const city = (run.streets || []).slice().sort((a, b) => b.unrest - a.unrest)[0] || { name: 'the capital', id: null };
      return {
        id: 'sec-street', scripted: true, who: C.home, tags: ['street','power'],
        pillarBanner: 'THE STREET',
        title: 'A City Boils Over',
        text: `Duane has the overnight map. "` + city.name + `, sir. It has gone from a protest to an occupation to ` +
              `a thing the cameras will not leave. Every hour it stands, three more cities decide they could stand too. ` +
              `You can send the force, or you can let it burn itself out, which it will not do."`,
        choices: [
          { label: `Send in the force. Clear it by dawn.`, eff: { base: 5, street: -3, press: -5, courts: -4, auth: 4 },
            res: `The square is empty by morning and the footage is everywhere by noon. The base calls it order; the courts call it a filing.`,
            act: r => { const c = (r.streets || []).find(x => x.id === city.id); if (c) c.unrest = Math.max(0, c.unrest - 30); } },
          { label: `Send negotiators. Give them a small win.`, eff: { base: -3, street: 6, press: 5, congress: 3, auth: -1 },
            res: `You concede something minor and the temperature drops a degree. The base sees a president who blinked. The city sees one who listened.`,
            act: r => { const c = (r.streets || []).find(x => x.id === city.id); if (c) c.unrest = Math.max(0, c.unrest - 18); } },
          { label: `Do nothing. Call it "a few bad apples".`, eff: { base: 3, street: -4, press: -3, auth: 1 },
            res: `You wave it away on television while it grows behind you in the shot. The phrase does not age well, and neither does the shot.` },
          { label: `Counter-programme it with a parade the same night.`, eff: { base: 5, street: -2, press: -3, cash: -0.2, auth: 2 }, wild: true,
            res: `You stage a celebration eight blocks from an occupation. The split-screen is the single most-shared image of the year, for reasons you did not intend.` }
        ]
      };
    }
  },

  /* ------------------------- THE PRESS ------------------------- */
  {
    key: 'press', gap: 8,
    test (run) {
      if (AD.termMonth(run) < 4 || run.locked.press) return false;
      return run.meters.press < 55;
    },
    build (run) {
      return {
        id: 'sec-press', scripted: true, who: C.press, tags: ['press','power'],
        pillarBanner: 'THE PRESS',
        title: 'The Story Breaks',
        text: `Kaylee is holding a printout at arm's length, the way you hold something that bites. "It's sourced, sir. ` +
              `Three ways. It's going to run tonight whatever we do, and it's the kind of thing that used to end a ` +
              `presidency, back when things ended presidencies."`,
        choices: [
          { label: `Call it fake. Attack the reporter by name.`, eff: { base: 5, press: -5, courts: -2, auth: 3 },
            res: `You make a journalist the story instead of the story. It works on the base and only the base, which for tonight is enough.` },
          { label: `Get ahead of it. Release everything first.`, eff: { base: -3, press: 6, congress: 4, courts: 3, auth: -1 },
            res: `You dump it all on a Thursday and rob it of its slow drip. It is the worst news cycle of the month and the last one the story leads.` },
          { label: `Bury it under a bigger, shinier story.`, eff: { base: 4, press: -3, street: -2, auth: 2 },
            res: `You change the subject with something louder, which works until the something louder becomes its own problem in six weeks. It always does.` },
          { label: `Give the exclusive to the friendliest outlet you own.`, eff: { base: 4, press: -3, courts: -2, cash: -0.1, auth: 2 }, wild: true,
            res: `Your own channel breaks the story about you, framed by you, with the ending you prefer. It is journalism the way a portrait is a mirror.` }
        ]
      };
    }
  },

  /* ------------------------- CONGRESS ------------------------- */
  {
    key: 'congress', gap: 9,
    test (run) {
      if (AD.termMonth(run) < 5 || run.locked.congress) return false;
      const sum = AD.senateSummary ? AD.senateSummary(run) : null;
      return AD.termMonth(run) >= 8 || (sum && sum.avgOwn < 58);
    },
    build (run) {
      return {
        id: 'sec-congress', scripted: true, who: C.speaker, tags: ['congress','power'],
        pillarBanner: 'CONGRESS',
        title: 'The Bill',
        text: `Hal Grimes has a bill and a headcount. "It's yours if you want it, sir, it does three good things and ` +
              `one thing you'd have to defend forever. I can get it through, but I'll need you to lean on four of ` +
              `our own, and leaning leaves marks."`,
        choices: [
          { label: `Lean on them. Hard. Pass it tonight.`, eff: { base: 4, congress: 5, press: -3, auth: 3 },
            res: `You call in the debts and the bill passes on a party-line vote at eleven at night. Four senators remember the call. So do you.`,
            act: r => { (r.senate || []).forEach(s => { if (s.party === 'own' && s.loyalty < 55) s.loyalty = AD.clamp(s.loyalty + 8, 0, 100); }); } },
          { label: `Water it down until nobody has to be brave.`, eff: { base: -2, congress: 4, press: 4, auth: 1 },
            res: `You sand off the part worth passing and pass what's left. It helps a little, offends no one, and is forgotten by Friday.` },
          { label: `Kill it. Make them beg for the next one.`, eff: { base: 3, congress: -4, press: -2, auth: 2 },
            res: `You let a good bill die to remind the chamber whose bills live. The lesson lands. So does the cost.` },
          { label: `Rename it the "Freedom Freedom Act" and pass it unread.`, eff: { base: 5, congress: -3, courts: -3, press: -3, auth: 2 }, wild: true,
            res: `Nine hundred pages nobody has read, titled twice for emphasis, passed by voice vote before lunch. Three provisions turn out to be genuinely alarming.` }
        ]
      };
    }
  },

  /* ------------------------- THE BASE ------------------------- */
  {
    key: 'base', gap: 7,
    test (run) { return AD.termMonth(run) >= 3 && !run.locked.base; },
    build (run) {
      const want = pick([
        `they want you to say the quiet thing out loud, at the rally, tonight`,
        `they want an enemy named, and they are not fussy about which`,
        `they want a war on a word, a book, a holiday, a colour, a school`
      ]);
      return {
        id: 'sec-base', scripted: true, who: C.poll, tags: ['base','levity'],
        pillarBanner: 'THE BASE',
        title: 'The Crowd Wants Something',
        text: `Nadia slides over the numbers. "The movement is restless, sir. It doesn't want policy, it has never ` +
              `wanted policy. Right now ` + want + `. Common sense says don't. The base has never once sided with ` +
              `common sense, and it never will."`,
        choices: [
          { label: `Give it to them. Louder than they asked.`, eff: { base: 5, press: -4, courts: -3, street: -2, auth: 3 },
            res: `You feed the crowd exactly the red meat it came for, and a little extra. The rally roars. Four institutions file it away for later.` },
          { label: `Give them a watered-down, deniable version.`, eff: { base: 2, press: -2, auth: 1 },
            res: `You gesture at what they want without quite saying it, leaving room to claim you didn't. The base hears it fine. So does everyone else.` },
          { label: `Tell them the truth. The boring, sensible truth.`, eff: { base: -4, press: 5, congress: 4, courts: 3, auth: -1 },
            res: `You try, once, to lead the movement somewhere reasonable. It is like steering a river with a spoon. The number drops and the moment passes.` },
          { label: `Invent a brand-new enemy nobody's heard of yet.`, eff: { base: 5, press: -3, street: -2, auth: 2 }, wild: true,
            res: `You name a threat so novel the fact-checkers have to build a new category for it. By morning it is on flags. The base loves a debut.` }
        ]
      };
    }
  },

  /* ------------------------- THE MONEY ------------------------- */
  {
    key: 'money', gap: 8, sfx: 'money',
    test (run) { return AD.termMonth(run) >= 5; },
    build (run) {
      return {
        id: 'sec-money', scripted: true, who: C.lawyer, tags: ['money','courts'], sfx: 'money',
        pillarBanner: 'PRIVATE INTERESTS',
        title: 'An Opportunity',
        text: `Sy closes the door twice. "There is an opportunity, sir. A sovereign fund, a friendly one, would like ` +
              `to invest in a venture with your family's name on it. It is not, strictly, a bribe. It is not, strictly, ` +
              `not one either. The number has a lot of zeroes and only one condition, which is that you stay friendly."`,
        choices: [
          { label: `Take the money. Every zero of it.`, eff: { base: 2, press: -5, courts: -5, congress: -4, cash: 0.9, auth: 1 },
            res: `The wire clears through four banks and a shell in a sunny place. Several ethics offices open files during the ribbon-cutting.` },
          { label: `Take a smaller, cleaner, disclosed slice.`, eff: { press: 3, congress: 3, cash: 0.35, auth: 0 },
            res: `You take the version the lawyers can defend and leave the rest on the table. It is the most expensive display of restraint available to you.` },
          { label: `Refuse it. Loudly. On camera.`, eff: { base: -2, press: 6, congress: 5, courts: 4, auth: -1 },
            res: `You turn down a fortune in public and let everyone watch. It is genuinely admirable and genuinely the last time it happens.` },
          { label: `Take it and launch a coin to "give back".`, eff: { base: 4, press: -4, courts: -3, cash: 0.6, auth: 1 }, wild: true,
            res: `You accept the fund and immediately float a token so your supporters can lose money alongside you, in solidarity. It moons, it craters, it moons again by breakfast.` }
        ]
      };
    }
  }
];

/* Draw a fresh, never-before-seen flavour pop-up from the 200-strong pool
   (see popups.js). Random, no-repeat within a run, so each playthrough shows a
   different subset. Falls back to allowing repeats once the pool is exhausted. */
function poolCard (run) {
  const pool = AD.SECTION_POOL || [];
  if (!pool.length) return null;
  const seen = run.seen || [];
  let fresh = pool.filter(c => seen.indexOf(c.id) === -1);
  if (!fresh.length) fresh = pool;                          // seen them all: repeats allowed
  return fresh[Math.floor(AD.rng() * fresh.length)];
}

/* Paced selector: at most one section pop-up every few months. MOST of the time
   it pulls a random card from the big flavour pool (so no two runs feel alike);
   the rest of the time it fires a templated event that routes back into a
   system's mechanics (impose a tariff, declare a war, sweep a city, sign a
   pardon). Consulted from Engine.draw(). */
AD.sectionEventFor = function (run) {
  const m = AD.termMonth(run);
  if (m < 2) return null;                                   // let the first month breathe
  run.flags = run.flags || {};
  if (m < (run.flags.sectionUntil || 0)) return null;       // global pacing gate

  let card = null;

  // ~22% of the time, try a mechanic-routing templated event.
  if (AD.rng() < 0.22) {
    const ready = AD.SECTION_EVENTS.filter(t => {
      if (m < (run.flags['sec_' + t.key] || 0)) return false;
      try { return t.test(run); } catch (e) { return false; }
    });
    if (ready.length) {
      const t = ready[Math.floor(AD.rng() * ready.length)];
      try { card = t.build(run); } catch (e) { card = null; }
      if (card) run.flags['sec_' + t.key] = m + (t.gap || 8);
    }
  }

  // Otherwise (and as a fallback), a fresh pool pop-up.
  if (!card) card = poolCard(run);
  if (!card) return null;

  run.flags.sectionUntil = m + 2;                           // roughly one pop-up every couple of months
  return card;
};
})();
