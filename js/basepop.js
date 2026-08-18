/* ============================================================
   AMERICAN DICTATOR — basepop.js
   THE RALLY — red meat for the base.

   The Base was fuel with no controls of its own. This gives it a
   screen: a menu of gloriously stupid, all-American stunts that the
   movement adores and every serious institution deplores. Deep-fry
   the national turkey on live television. Tax-free ammo week. Put
   yourself on the mountain. Wrestle at the pay-per-view.

   Each stunt pumps the Base hard and dings the institutions, in the
   spirit of the game: the joke is on the cynical President staging
   the spectacle, not on the crowd enjoying it. Rationed to two a
   month (AD.RALLIES_PER_MONTH, refilled by the clock) so the Base is
   a thing you feed on purpose, not a button you hold down — and
   because over-feeding the Base is its own way to die, the movement
   will happily replace a man who has become surplus to the show.
   ============================================================ */

AD.RALLIES_PER_MONTH = 2;

/* Every stunt: base up (red meat), a cost somewhere in the institutions,
   sometimes cash. `wild` ones are pure chaos. Fictional throughout. */
AD.RALLY_STUNTS = [
  {
    id: 'monster', label: 'Monster Truck Rally on the South Lawn', icon: '🛻',
    blurb: 'Grave-Digger versus the Rose Garden. One winner.',
    eff: { base: 11, press: -5, courts: -3, street: 2, cash: -0.2 }
  },
  {
    id: 'deepfry', label: 'Deep-Fry the National Turkey, Live', icon: '🍗',
    blurb: 'The pardon was cancelled. The fryer was not.',
    eff: { base: 9, press: -4, street: 1 }
  },
  {
    id: 'ammo', label: 'Declare Tax-Free Ammo Week', icon: '🔫',
    blurb: 'A little something for the fellas. And the ladies. Everybody.',
    eff: { base: 12, courts: -5, press: -4, street: -2, cash: -0.2 }
  },
  {
    id: 'wrestle', label: 'Wrestle at the Pay-Per-View', icon: '🤼',
    blurb: 'You come off the top rope. The ratings are TREMENDOUS.',
    eff: { base: 13, press: -5, courts: -2, cash: 0.1 }
  },
  {
    id: 'rushmore', label: 'Add Yourself to the Mountain', icon: '🗻',
    blurb: 'There was a fifth spot. There is now a fifth face.',
    eff: { base: 10, press: -6, courts: -4, congress: -3, cash: -0.4 }
  },
  {
    id: 'book', label: 'Ban a Book Nobody Read', icon: '📕',
    blurb: 'Sales of the book increase 4,000%. Worth it.',
    eff: { base: 9, courts: -5, press: -5, street: -2 }
  },
  {
    id: 'gas', label: 'Free Gas For a Day', icon: '⛽',
    blurb: 'Lines around the block. Four states run dry by noon.',
    eff: { base: 11, congress: -3, press: -2, street: 3, cash: -0.6 }
  },
  {
    id: 'steak', label: 'Launch a Signature Steak Line', icon: '🥩',
    blurb: 'They are the best steaks. A lot of people are saying it.',
    eff: { base: 8, press: -3, courts: -2, cash: 0.3 }
  },
  {
    id: 'fireworks', label: 'Fireworks Every Night For a Week', icon: '🎆',
    blurb: 'The dogs of the capital have not slept since Tuesday.',
    eff: { base: 9, press: -3, street: 2, cash: -0.3 }
  },
  {
    id: 'nascar', label: 'A Lap in the Presidential Limo', icon: '🏁',
    blurb: 'Number One car. The Beast does 0-60 eventually.',
    eff: { base: 10, press: -4, courts: -2, street: 2, cash: -0.2 }
  },
  {
    id: 'eagle', label: 'National Bald Eagle Appreciation Day', icon: '🦅',
    blurb: 'A live eagle is released indoors. It does not go well.',
    eff: { base: 8, press: -2, street: 1 }, wild: true
  },
  {
    id: 'beef', label: 'Start a Beef With a Foreign Pop Star', icon: '🎤',
    blurb: 'You call them low-energy. Their fandom mobilises. It is a whole thing.',
    eff: { base: 10, press: -5, street: -3, courts: -1 }, wild: true
  }
];

AD.ralliesLeft = run => (run.rallies === undefined ? AD.RALLIES_PER_MONTH : run.rallies);
AD.rallyById = id => AD.RALLY_STUNTS.find(s => s.id === id);

AD.doRally = function (run, stuntId) {
  const s = AD.rallyById(stuntId);
  if (!s) return { ok: false, reason: 'No such stunt.' };
  if (AD.ralliesLeft(run) <= 0) return { ok: false, reason: 'The base needs a rest. Try next month.' };
  const cost = (s.eff.cash && s.eff.cash < 0) ? -s.eff.cash : 0;
  if (cost && run.cash < cost) return { ok: false, reason: 'You cannot afford the spectacle.' };

  run.rallies = AD.ralliesLeft(run) - 1;
  // The base rewards transgression: run the stunt through the appetite so the
  // silliest, most offensive spectacles land even harder than their numbers.
  const eff = Object.assign({}, s.eff);
  if (AD.applyBaseAppetite) AD.applyBaseAppetite(eff, s);
  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.rallies = (run.stats.rallies || 0) + 1;
  return { ok: true, stunt: s, deltas };
};

/* Refill the monthly allowance. Called from Engine.advance(). */
AD.rallyTick = function (run) { run.rallies = AD.RALLIES_PER_MONTH; };
