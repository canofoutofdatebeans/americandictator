/* ============================================================
   AMERICAN DICTATOR, tier.js
   FREE EDITION / FULL EDITION.

   One switch, one list, and every gate in the game reads from here.
   The point of putting it in a single file is that changing what the
   free edition includes is a data edit, not a hunt through the codebase,
   and that there is exactly one place to audit before a release.

   HOW IT WORKS
     AD.TIER            'free' | 'full'    the build's edition
     AD.has('feature')  the only question any other file should ask

   A gate should ALWAYS be a positive check on a named capability
   (AD.has('deck.full')) rather than a check on the tier itself, so the
   split can move without touching call sites.

   HONEST DEMO PRINCIPLE
     The free edition is a complete, winnable, satisfying game. It is
     short, not crippled. Nothing is teased with a padlock mid-crisis,
     because being sold to inside a joke kills the joke. The upgrade is
     offered on the ending screen, once, after the player has finished
     something and knows whether they liked it.
   ============================================================ */

/* Set at build time. A paid build ships with 'full'. */
AD.TIER = 'free';

/* Every gateable capability, and which editions have it. Anything not
   listed here is available to everybody, which is the safe default: a new
   feature is free until somebody deliberately decides otherwise. */
AD.FEATURES = {
  /* --- THE ROOMS -----------------------------------------------------------
     The line is thematic, not arbitrary. The free edition is about GOVERNING:
     the five power centres, the phone that keeps him interested, and the
     ledger of what you broke to do it. The full edition adds the rooms that
     are about ENRICHING YOURSELF and reshaping the world: money, war,
     diplomacy, clemency and the palace. A free player finishes a complete
     term without ever feeling a lock mid-decision; they simply never had a
     War Room. --- */
  'room.senate':      ['free', 'full'],   // The Caucus
  'room.press':       ['free', 'full'],   // The Press Room
  'room.street':      ['free', 'full'],   // Public Order
  'room.courts':      ['free', 'full'],   // The Bench
  'room.basepop':     ['free', 'full'],   // The Rally
  'room.call':        ['free', 'full'],   // The Phone, the boredom lever
  'room.constitution':['free', 'full'],   // the ledger

  'room.war':         ['full'],           // The War Room
  'room.diplomacy':   ['full'],           // The State Department
  'room.economy':     ['full'],           // tariffs and the market
  'room.corruption':  ['full'],           // Private Interests
  'room.pardon':      ['full'],           // The Pardon Power
  'room.renovations': ['full'],           // The Residence

  /* --- content --- */
  'deck.full':        ['full'],           // the whole 920-card deck vs the free slice
  'packs.extra':      ['full'],           // the nine bonus theme packs
  'lang.all':         ['full'],           // every translated language vs English only
  'nations.all':      ['full'],           // 100 countries vs the core roster
  'interests.all':    ['full'],           // the rotating market + Board of Peace

  /* --- systems --- */
  'terms.second':     ['full'],           // re-election and a second term
  'difficulty.all':   ['full'],           // Historic, and the modifiers
  'log.full':         ['full'],           // the complete crisis log
  'briefings':        ['full'],           // post-crisis Chief of Staff briefings
  'timer.long':       ['full'],           // the longer decision timer

  /* --- endgame --- */
  'library':          ['full'],           // the Presidential Library archive
  'reckoning':        ['full'],           // The Receipts
  'share.image':      ['full'],           // the shareable front-page image

  /* --- always free, listed so the split is auditable in one place --- */
  'daily':            ['free', 'full'],   // the Daily is the shop window
  'dossier':          ['free', 'full'],
  'frontpage':        ['free', 'full'],
  'achievements':     ['free', 'full']
};

/* The only question the rest of the game should ask. */
AD.has = function (feature) {
  const f = AD.FEATURES[feature];
  if (!f) return true;                     // unlisted = free, deliberately
  return f.indexOf(AD.TIER) !== -1;
};

AD.isFree = () => AD.TIER === 'free';

/* How much of the deck a free edition deals. Kept here rather than in
   cards.js so the whole split lives in one file. */
AD.FREE_DECK_CARDS = 220;
AD.FREE_MAX_MONTHS = 24;                   // a complete two-year term, not a demo stub

/* Rooms the free edition does not have, in the order they appear on the board,
   for the upgrade prompt to name. */
AD.lockedRooms = function () {
  const names = {
    'room.war': 'The War Room', 'room.diplomacy': 'Diplomacy', 'room.economy': 'The Economy',
    'room.corruption': 'Private Interests', 'room.pardon': 'The Pardons', 'room.renovations': 'The Residence'
  };
  return Object.keys(names).filter(k => !AD.has(k)).map(k => names[k]);
};

/* Copy for the upgrade prompt. Shown ONCE, on the ending screen, after the
   player has finished a term and knows whether they liked it. */
AD.UPGRADE = {
  kicker: 'THE FULL EDITION',
  head: 'Four More Years',
  lines: [
    'Four more rooms and then some: the War Room, the State Department, the Economy, Private Interests, the Pardon Power and the Residence.',
    'The complete 920-card deck, and the nine theme packs the free edition leaves out.',
    'Re-election, a second term, and the endings that only exist on the other side of it.',
    'Historic difficulty, every modifier, and the Presidential Library that remembers every administration.',
    'All hundred countries, the rotating private-interests market, and the Board of Peace.',
    'The Receipts: what your term actually cost the country.'
  ],
  foot: 'The free edition is a whole game. This is the rest of it.'
};
