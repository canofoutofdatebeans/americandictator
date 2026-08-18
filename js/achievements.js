/* ============================================================
   AMERICAN DICTATOR — achievements.js
   Unlocked at the end of a term, evaluated from the finished run
   plus its scorecard. Persisted across every administration.

   Each entry:
     { id, name, desc, secret?, test(run, score) -> bool }
   ============================================================ */

AD.ACH_KEY = 'americandictator.achievements.v1';

AD.ACHIEVEMENTS = [

  /* ---- getting started ---- */
  { id: 'sworn-in', name: 'So Help Me God', desc: 'Finish a term. Any term. In any condition.',
    test: () => true },

  { id: 'first-pillar', name: 'One Down, Three To Go', desc: 'Capture your first branch of government.',
    test: (r, s) => s.pillars >= 1 },

  { id: 'clean-sweep', name: 'The Full Set', desc: 'Capture all four branches in a single administration.',
    test: (r, s) => s.pillars >= 4 },

  { id: 'president-for-life', name: 'President-for-Life', desc: 'Reach Authority 100.',
    test: (r, s) => s.authority >= 100 },

  /* ---- the long game ---- */
  { id: 'second-term', name: 'Four More Years', desc: 'Win re-election and begin a second term.',
    test: r => r.term >= 2 },

  { id: 'octennial', name: 'Eight Straight Years', desc: 'Serve 96 months without being removed.',
    test: r => r.month >= 96 },

  { id: 'two-terms-clean', name: 'The Cincinnatus', desc: 'Serve two full terms and then leave on time.',
    secret: true, test: r => r.endingId === 'two-terms' },

  { id: 'third-term', name: 'The Twenty-Second Is A Suggestion', desc: 'Take a third term.',
    secret: true, test: r => r.endingId === 'third-term' },

  /* ---- style of play ---- */
  { id: 'iron-fist', name: 'Never Once Blinked', desc: 'Finish a term having taken 25 power grabs and fewer than 5 restrained options.',
    test: r => r.stats.grabs >= 25 && r.stats.restraints < 5 },

  { id: 'statesman', name: 'A Disappointing Man', desc: 'Take 25 restrained options in one term. Your base will never forgive you.',
    test: r => r.stats.restraints >= 25 },

  { id: 'all-five', name: 'Doctrine Complete', desc: 'Unlock all five doctrines in one administration.',
    test: r => r.doctrines.length >= 5 },

  { id: 'shielded', name: 'No Case To Answer', desc: 'Survive a collapse using the Immunity Shield.',
    test: r => r.shieldUsed },

  /* ---- money ---- */
  { id: 'billionaire', name: 'Everybody\'s Profiting', desc: 'Hold more than $6B at once.',
    test: r => r.stats.peakCash > 6 },

  { id: 'the-fortune', name: 'Ten Figures', desc: 'Reach a personal fortune of $10B.',
    test: r => r.cash >= AD.WEALTH_GOAL || r.stats.peakCash >= AD.WEALTH_GOAL },

  { id: 'full-set', name: 'The Country And The Money', desc: 'Finish with Authority 100 and $10B.',
    secret: true, test: r => r.endingId === 'the-full-set' },

  { id: 'parachute', name: 'Failed Upward', desc: 'Lose the country but leave with the fortune.',
    secret: true, test: r => r.endingId === 'the-fortune' },

  { id: 'conglomerate', name: 'One Taxpayer Identification Number',
    desc: 'Own eight holdings at once.', test: r => (r.assets || []).length >= 8 },

  { id: 'media-baron', name: 'Own The Pipes', desc: 'Own every Media holding.',
    test: r => ['megaphone','network','beacon','algorithm'].every(id => (r.assets||[]).indexOf(id) !== -1) },

  { id: 'broke', name: 'Cash-Flow Positive, Spiritually', desc: 'Finish a term with under $0.5B.',
    test: r => r.cash < 0.5 },

  /* ---- ways to lose ---- */
  { id: 'understudy', name: 'Bigger Than Any One Man', desc: 'Be replaced by your own Vice President.',
    secret: true, test: r => r.endingId === 'max-base' },

  { id: 'ungovernable', name: 'The Country Stopped', desc: 'Lose to a general strike.',
    secret: true, test: r => r.endingId === 'zero-street' },

  { id: 'removed', name: 'Sixty-Seven', desc: 'Be impeached, convicted and removed.',
    secret: true, test: r => r.endingId === 'zero-congress' },

  { id: 'speedrun', name: 'That Was Quick', desc: 'Lose an administration inside 12 months.',
    secret: true, test: (r, s) => !s.win && r.month <= 12 },

  /* ---- the constitution ---- */
  { id: 'first-clause', name: 'A Living Document', desc: 'Break your first constitutional clause.',
    test: r => (r.clauses || []).length >= 1 },

  { id: 'half-constitution', name: 'Eight Of Sixteen', desc: 'Break half the Constitution in one term.',
    test: r => (r.clauses || []).length >= 8 },

  { id: 'full-constitution', name: 'The Complete Set',
    desc: 'Break every clause in the ledger and collect from Russia.',
    secret: true, test: r => AD.allClausesBroken(r) },

  { id: 'constitutionalist', name: 'Read It Once', desc: 'Finish a full term without breaking a single clause.',
    secret: true, test: r => (r.clauses || []).length === 0 && r.month >= 40 },

  /* ---- the residence ---- */
  { id: 'break-ground', name: 'Break Ground', desc: 'Build something on the White House.',
    test: r => (r.renos || []).length >= 1 },

  { id: 'visible-from-orbit', name: 'Visible From Orbit', desc: 'Erect the Colossus.',
    test: r => (r.renos || []).indexOf('colossus') !== -1 },

  { id: 'the-palace', name: 'It Has A New Name Now', desc: 'Complete every improvement to the residence.',
    test: r => (r.renos || []).length >= AD.RENOS.length },

  { id: 'listed-building', name: 'Listed Building', desc: 'Finish a full term without laying a single brick.',
    secret: true, test: r => (r.renos || []).length === 0 && r.month >= 40 },

  /* ---- the persistent world ---- */
  { id: 'dynasty', name: 'A Country With A Reputation', desc: 'Begin a term inheriting a scarred country for the third time running.',
    test: r => r.legacy && r.legacy.chaos >= AD.CHAOS_CAP },

  { id: 'all-endings', name: 'The Complete Archive', desc: 'Reach 10 different endings across all your administrations.',
    test: () => new Set(AD.loadLibrary().map(x => x.endingId)).size >= 10 }
];

AD.loadAchievements = () => AD.store.read(AD.ACH_KEY, []);
AD.saveAchievements = a => AD.store.write(AD.ACH_KEY, a);
AD.achById = id => AD.ACHIEVEMENTS.find(a => a.id === id);

/* Evaluate at the end of a run. Returns only the NEWLY unlocked ones so the
   ending screen can call them out. */
AD.checkAchievements = function (run, score) {
  const have = AD.loadAchievements();
  const fresh = [];
  AD.ACHIEVEMENTS.forEach(a => {
    if (have.indexOf(a.id) !== -1) return;
    let ok = false;
    try { ok = !!a.test(run, score); } catch (e) { ok = false; }
    if (ok) { have.push(a.id); fresh.push(a); }
  });
  if (fresh.length) AD.saveAchievements(have);
  return fresh;
};
