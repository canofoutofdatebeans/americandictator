/* ============================================================
   AMERICAN DICTATOR, pardons.js
   THE PARDON POWER, the one authority with no check on it at all.

   Article Two, in five words, hands you an eraser. The list is mostly
   people who should never touch it, cronies, fraudsters, a war
   criminal, the man in the costume who stormed the Capitol, and each
   of them is grateful in ways that move the meters (and, for a few,
   quietly top up the fortune). Buried in the pile are a small number
   of genuine miscarriages of justice: pardoning THOSE pleases the
   institutions and irritates a base that wanted red meat, not mercy.

   Each pardon can be granted once. Effects run through the shared
   applier so shields/gains apply, exactly like the other screens.
   ============================================================ */

AD.PARDONS = [

  /* ---------------- THE GRATEFUL (terrible; several pay you) ---------------- */
  {
    id: 'fixer', name: 'Roy "The Closer" Delvecchio', kind: 'crony',
    crime: 'Campaign chair · witness tampering, 8 counts',
    blurb: 'Ran your first campaign and never once cooperated with the investigators. ' +
           'Loyalty that total writes its own cheque, and he has written you several.',
    eff: { base: 7, courts: -6, press: -5, congress: -3, cash: 0.4, auth: 3 }
  },
  {
    id: 'rioter', name: 'Dale "Buffalo" Hensacker', kind: 'insurrection',
    crime: 'Stormed the Capitol · in a costume · seditious conspiracy',
    blurb: 'The face of the worst afternoon in the building\'s history, in furs and horns. ' +
           'The base does not see a criminal. The base sees a hostage, a martyr and a mascot.',
    eff: { base: 9, congress: -8, courts: -6, press: -6, auth: 3 }
  },
  {
    id: 'general', name: 'Col. Errol "Mad Dog" Corliss', kind: 'warlord',
    crime: 'War crimes · execution of prisoners',
    blurb: 'Did a terrible thing on camera and called it warfighting. Half the country agrees ' +
           'with him, loudly, and would like you to agree with him too.',
    eff: { base: 8, street: -7, press: -5, congress: -4, auth: 4 }
  },
  {
    id: 'mogul', name: 'Lorne Kessler', kind: 'donor',
    crime: 'Tax fraud · $1.2bn · your single largest donor',
    blurb: 'Owes the Treasury more than some states and owes you nothing, which he demonstrates ' +
           'by owing you nothing very generously and very often.',
    eff: { base: 4, press: -5, congress: -3, cash: 0.8, auth: 2 }
  },
  {
    id: 'opioid', name: 'Cornelius Vane', kind: 'kingpin',
    crime: 'Opioid distribution · flooded three states',
    blurb: 'Made a fortune the ugliest way there is and has kept enough of it to be extremely ' +
           'appreciative of a second chance he is already planning to waste.',
    eff: { base: 5, street: -5, courts: -4, cash: 0.5, auth: 2 }
  },
  {
    id: 'ponzi', name: 'Sheldon Pryce', kind: 'fraud',
    crime: 'Ponzi scheme · $4bn · defrauded 30,000 retirees',
    blurb: 'Took the savings of thirty thousand people who trusted a man with a good watch. ' +
           'A surprising amount of it was never found, and some of it, surprisingly, finds you.',
    eff: { base: 4, press: -6, congress: -4, cash: 0.6, auth: 2 }
  },
  {
    id: 'congressman', name: 'Rep. Chip Fontaine', kind: 'corruption',
    crime: 'Bribery · gold bars found in the freezer',
    blurb: 'Kept the bribes as bullion in the kitchen, which even his own party found tacky. ' +
           'He is, however, a reliable vote, and reliability is the only currency you truly bank.',
    eff: { base: 5, congress: -4, press: -5, cash: 0.3, auth: 2 }
  },
  {
    id: 'crypto', name: 'Bram Feld', kind: 'fraud',
    crime: 'Crypto exchange collapse · $8bn customer funds "misplaced"',
    blurb: 'Lost eight billion dollars of other people\'s money and called it a rounding error. ' +
           'Extremely online, extremely sorry on camera, and extremely willing to say thank you.',
    eff: { base: 5, press: -6, courts: -3, cash: 0.6, auth: 2 }
  },
  {
    id: 'sheriff', name: 'Sheriff Burl Tackett', kind: 'crony',
    crime: 'Ran a for-profit jail · systematic abuse',
    blurb: 'Turned a county lockup into a business and the business into a scandal. Delivered his ' +
           'county for you by margins that raised eyebrows and, in three precincts, the dead.',
    eff: { base: 5, street: -6, courts: -4, cash: 0.2, auth: 2 }
  },
  {
    id: 'family', name: 'Your Uncle Vic', kind: 'family',
    crime: 'Tax evasion · racketeering · "the family business"',
    blurb: 'Blood is blood, the indictment is ninety pages, and Thanksgiving is going to be very ' +
           'awkward if you do not sign. He has offered to make it worth your while, as family does.',
    eff: { base: 6, press: -7, courts: -4, congress: -3, cash: 0.4, auth: 2 }
  },

  {
    id: 'cop', name: 'Officer Deke Ramsson', kind: 'crony',
    crime: 'Killed an unarmed man · acquitted, then found liable',
    blurb: 'A badge, a bad night, and a video the base insists is misleading. Freeing him is a message, ' +
           'and the message is exactly the one his supporters want sent.',
    eff: { base: 6, street: -6, press: -4, courts: -3, auth: 2 }
  },
  {
    id: 'preacher', name: 'Pastor Jimmy Ray Combs', kind: 'fraud',
    crime: 'Megachurch fraud · a private jet "for God"',
    blurb: 'Told a stadium of believers that a fourth jet was the Lord\'s will and the IRS was the Devil\'s. ' +
           'He has since found it in his heart to tithe, generously, to you.',
    eff: { base: 5, press: -4, congress: -2, cash: 0.4, auth: 2 }
  },
  {
    id: 'polluter', name: 'Hank Dorfler', kind: 'donor',
    crime: 'Dumped toxins in a river · poisoned a town\'s water',
    blurb: 'Ran the numbers, decided the fine was cheaper than the filter, and was right until he was caught. ' +
           'A very grateful man with a very large chequebook and a very quiet conscience.',
    eff: { base: 4, street: -5, press: -4, courts: -3, cash: 0.5, auth: 2 }
  },
  {
    id: 'contractor', name: '"Big Sal" Petrakis', kind: 'corruption',
    crime: 'Border-wall contractor · pocketed the appropriation',
    blurb: 'Built four miles of the promised forty and billed for all forty. The base does not blame him. ' +
           'The base blames the four miles for not being longer.',
    eff: { base: 5, congress: -4, street: -3, cash: 0.4, auth: 2 }
  },
  {
    id: 'hacker', name: 'The operator known as "Keyhole"', kind: 'operator',
    crime: 'Election interference · breached a voter database for your campaign',
    blurb: 'Did a useful, illegal thing on your behalf and has a laptop full of reasons you would rather ' +
           'stayed shut. Clemency here is less a mercy than a lid.',
    eff: { base: 4, press: -4, courts: -4, congress: -3, auth: 3 }
  },
  {
    id: 'mob', name: 'Don Aldo Ferro', kind: 'kingpin',
    crime: 'Racketeering · extortion · three RICO counts',
    blurb: 'An old-fashioned crime family with an old-fashioned respect for a favour returned. He has assured ' +
           'you, personally, that he is retired, in the specific tone that means he is not.',
    eff: { base: 5, street: -5, courts: -4, cash: 0.5, auth: 2 }
  },
  {
    id: 'pharma', name: 'Dax Wexler', kind: 'fraud',
    crime: 'Price-gouging · raised a life-saving pill 5,000%',
    blurb: 'Bought the patent on a drug people need to live and multiplied the price for sport. Insufferable on ' +
           'camera, litigious off it, and suddenly, warmly, one of your biggest fans.',
    eff: { base: 4, press: -6, street: -3, cash: 0.6, auth: 2 }
  },
  {
    id: 'fixer2', name: 'Marvin Glick, Esq.', kind: 'crony',
    crime: 'Your former fixer · campaign-finance felonies',
    blurb: 'Paid the people who needed paying and stayed quiet about who signed the cheques. He has stayed quiet ' +
           'for years now, at some personal cost, and would like that noted, in writing, with a seal.',
    eff: { base: 5, courts: -5, press: -4, cash: 0.3, auth: 2 }
  },
  {
    id: 'university', name: 'Chad Buckley', kind: 'fraud',
    crime: 'Ran a fake university · with your name over the door',
    blurb: 'Sold a worthless degree to thousands, under a brand you licensed and would now prefer to forget. ' +
           'Pardoning him is, unavoidably, a little bit about pardoning the door.',
    eff: { base: 5, press: -5, courts: -3, cash: 0.5, auth: 2 }
  },
  {
    id: 'trollboss', name: 'Kayla Vent', kind: 'operator',
    crime: 'Ran a 40,000-account bot farm for your movement',
    blurb: 'Manufactured a groundswell out of nothing but server racks and spite, all of it pointed usefully ' +
           'your way. She knows precisely which of your best days were her worst servers.',
    eff: { base: 6, press: -5, street: -2, auth: 3 }
  },
  {
    id: 'militia', name: 'Commander Buck Ostrander', kind: 'insurrection',
    crime: 'Armed standoff on federal land · 41-day siege',
    blurb: 'Pointed rifles at federal officers over a grazing bill and became a folk hero for it. The base ' +
           'built songs about the siege. Some of the songs are, grudgingly, quite good.',
    eff: { base: 8, street: -5, courts: -4, congress: -3, auth: 3 }
  },
  {
    id: 'defense', name: 'Roland Mace, Aegis Dynamics', kind: 'donor',
    crime: 'Defence contractor · overbilled the Pentagon $9bn',
    blurb: 'Sold the military nine billion dollars of the same bolt at wildly different prices and called it ' +
           'the free market. A patriot, he stresses, and a donor, he stresses harder.',
    eff: { base: 3, congress: -4, press: -3, cash: 0.7, auth: 2 }
  },
  {
    id: 'judgethreat', name: 'Gunnar Pyle', kind: 'insurrection',
    crime: 'Threatened a federal judge · on your behalf, unasked',
    blurb: 'Read a judge\'s home address on a livestream because a ruling upset him and, by extension, you. ' +
           'You did not ask him to. He would very much like you to act as though you had.',
    eff: { base: 7, courts: -6, press: -4, auth: 3 }
  },
  {
    id: 'gouger', name: 'Trip Vandersloot', kind: 'fraud',
    crime: 'Disaster profiteering · $40 bottles of water in a flood',
    blurb: 'Saw a hurricane and saw a margin. Charged the drowning for the dry and called it supply and demand. ' +
           'Now supplies, on demand, whatever your campaign asks for.',
    eff: { base: 4, street: -4, press: -3, cash: 0.4, auth: 1 }
  },
  {
    id: 'nepot', name: 'Brooks Ashby', kind: 'family',
    crime: 'Insider trading · your son\'s college roommate',
    blurb: 'Traded on a tip that came from a dinner at your table, which is the part everyone would rather not ' +
           'reach in the timeline. A pardon closes the case and, conveniently, the dinner.',
    eff: { base: 4, press: -5, courts: -3, cash: 0.4, auth: 1 }
  },

  /* ---------------- THE INNOCENT (the saints; no gift, real credit) ---------------- */
  {
    id: 'exon', name: 'Marcus Bell', kind: 'saint', saint: true,
    crime: '22 years wrongly imprisoned · exonerated by DNA',
    blurb: 'Lost his twenties and thirties to a case that fell apart the moment anyone looked. ' +
           'There is no gift here, no leverage, no angle, only a decent thing you could do.',
    eff: { press: 8, courts: 6, street: 7, base: -4, auth: -2 }
  },
  {
    id: 'whistle', name: 'Dr. Elena Frost', kind: 'saint', saint: true,
    crime: 'Jailed for leaking evidence of a cover-up',
    blurb: 'Went to prison for showing the country a document the country needed to see. Freeing ' +
           'her is applauded everywhere except by a base that considers whistleblowers the enemy.',
    eff: { press: 9, congress: 6, courts: 5, base: -5, auth: -1 }
  },
  {
    id: 'granny', name: 'Miss Ada Pryor, 78', kind: 'saint', saint: true,
    crime: 'Nonviolent offence · a 40-year mandatory sentence',
    blurb: 'A great-grandmother serving four decades for something that would earn probation today. ' +
           'The kind of mercy that photographs beautifully and moves nobody who wanted a scalp.',
    eff: { street: 8, press: 6, congress: 3, base: -3 }
  }
  ,
  {
    id: 'protester', name: 'Jamal Okonkwo', kind: 'saint', saint: true,
    crime: 'Peaceful protester · charged as a "domestic terrorist"',
    blurb: 'Marched, chanted, blocked a road for an afternoon, and was handed a terrorism enhancement to make ' +
           'an example of him. Freeing him is right, and the base will call it weakness.',
    eff: { street: 8, press: 6, courts: 4, base: -4, auth: -1 }
  },
  {
    id: 'soldier', name: 'Lt. Sarah Voss', kind: 'saint', saint: true,
    crime: 'Court-martialed · refused to carry out an unlawful order',
    blurb: 'Said no to something the manual also says no to, and lost her career for the timing of her ' +
           'conscience. A clean, unglamorous act of decency with no upside but the deed.',
    eff: { press: 7, congress: 5, street: 5, base: -4, auth: -1 }
  }
];

AD.pardonById = id => AD.PARDONS.find(p => p.id === id);
AD.isPardoned = (run, id) => (run.pardoned || []).indexOf(id) !== -1;

/* How likely a freed crook is to make you regret it, by type. A war criminal or
   a kingpin is a far worse bet than a tax cheat. Saints never reoffend. */
AD.PARDON_RISK = {
  warlord: 0.5, kingpin: 0.45, insurrection: 0.4, cartel: 0.45,
  fraud: 0.22, crony: 0.25, donor: 0.2, spy: 0.35, default: 0.28
};

AD.doPardon = function (run, id) {
  const p = AD.pardonById(id);
  if (!p) return { ok: false, reason: 'No such case.' };
  if (AD.isPardoned(run, id)) return { ok: false, reason: 'Already pardoned.' };
  run.pardoned = run.pardoned || [];
  run.pardoned.push(id);

  // Base effect, then a REACTION TWIST so no two pardons of the same person
  // would play the same way, and a risky one can genuinely blow up in your face.
  const eff = Object.assign({}, p.eff);
  let twist = null;
  const roll = AD.reactRoll ? AD.reactRoll(run) : 0.5;
  if (p.saint) {
    if (roll > 0.62) {
      eff.press = (eff.press || 0) + 3; eff.courts = (eff.courts || 0) + 2; eff.auth = (eff.auth || 0) + 1;
      twist = p.name + ' is fully, publicly vindicated, and freeing them turns out to reflect very well on you.';
    }
  } else {
    const risk = AD.PARDON_RISK[p.kind] || AD.PARDON_RISK.default;
    if (roll < risk) {              // reoffends, on camera, with your signature on the release
      eff.press = (eff.press || 0) - 6; eff.courts = (eff.courts || 0) - 4; eff.street = (eff.street || 0) - 3;
      eff.base = (eff.base || 0) - 2; eff.auth = (eff.auth || 0) - 2;
      twist = p.name + ' reoffends within the month, loudly, and every report notes whose signature is on the release.';
    } else if (roll > 0.88) {       // extravagantly grateful
      eff.cash = (eff.cash || 0) + 0.25; eff.base = (eff.base || 0) + 2;
      twist = p.name + ' is so grateful that a second, much larger token of appreciation arrives through four banks.';
    }
  }

  const deltas = AD.applySenateEffect(run, eff);
  run.stats = run.stats || {};
  run.stats.pardons = (run.stats.pardons || 0) + 1;
  if (p.saint) run.stats.saintPardons = (run.stats.saintPardons || 0) + 1;
  return { ok: true, pardon: p, deltas, twist };
};

/* Summary for the screen header. */
AD.pardonSummary = function (run) {
  const done = (run.pardoned || []).length;
  const saints = (run.pardoned || []).filter(id => { const p = AD.pardonById(id); return p && p.saint; }).length;
  return { done, total: AD.PARDONS.length, saints, crooks: done - saints };
};
