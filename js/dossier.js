/* ============================================================
   AMERICAN DICTATOR — dossier.js
   THE DOSSIER — a front page that narrates YOUR run.

   The twenty fixed endings tell you HOW the term ended. This tells
   you what you DID: it reads the finished scorecard and writes a
   run-specific account that names the senators you purged, the judges
   you packed, the outlets you took into the tank, the countries you
   invaded and why, the clauses you broke, and the fortune you walked
   away with. Two runs never produce the same dossier.

   It also produces a one-line shareable summary with the seed on it —
   the thing a player actually sends to a friend.

   Pure function of the scorecard (see AD.scoreRun), so it works on
   the ending screen and on any past administration in the Library.
   ============================================================ */

AD.buildDossier = function (score) {
  const s = score;
  const win = !!s.win;
  const P = (s.president || 'The President');
  const num = n => n && n.toLocaleString ? n.toLocaleString() : n;

  /* ---- the headline: name the presidency by what defined it ---- */
  let headline;
  if (s.fullSet)                     headline = 'PAID IN FULL';
  else if (s.cash >= AD.wealthGoal(s)) headline = 'THE BILLION-DOLLAR TERM';
  else if (s.judgesPacked >= 3)      headline = 'THE PACKED BENCH';
  else if (s.outletsOwned >= 3)      headline = 'THE PRESS PRESIDENT';
  else if (s.warsDeclared >= 2)      headline = 'THE WAR PRESIDENT';
  else if (s.sacked >= 4)            headline = 'THE PURGE';
  else if (s.pillars >= 3)           headline = 'THE THREE-PILLAR REGIME';
  else if (win)                      headline = 'THE REPUBLIC FOLDS';
  else                               headline = 'THE FILE ON ' + P.split(' ').pop().toUpperCase();

  const standfirst = (win ? 'A dictatorship in ' : 'A presidency of ') + s.months + ' months' +
    (s.term > 1 ? ' across two terms' : '') + '; the record, as it will be read.';

  /* ---- the body: only mention the systems this run actually used ---- */
  const paras = [];
  paras.push(P + ' of the ' + (s.party || 'party') + ' governed for ' + s.months +
    ' months and ended ' + (win ? 'having taken the country.' : 'without it.'));

  if (s.pillars > 0) {
    paras.push('Captured ' + s.pillars + ' of the four branches outright' +
      (s.pillarNames && s.pillarNames.length ? ' — ' + s.pillarNames.join(', ').toLowerCase() + '.' : '.'));
  }

  const cong = [];
  if (s.sacked > 0) cong.push('purged ' + s.sacked + ' of your own senators' +
    (s.sackedName ? ', beginning with ' + s.sackedName : ''));
  if (s.caucusAvg != null && s.caucusAvg < 45) cong.push('left a caucus that averaged ' + s.caucusAvg + '% loyalty');
  if (cong.length) paras.push('In the chamber you ' + cong.join(' and ') + '.');

  if (s.judgesPacked > 0) paras.push('Packed ' + s.judgesPacked + ' seat' + (s.judgesPacked === 1 ? '' : 's') +
    ' on the bench with hand-picked loyalists' + (s.packedName ? ', starting with ' + s.packedName : '') + '.');

  if (s.outletsOwned > 0) paras.push('Took ' + s.outletsOwned + ' newsroom' + (s.outletsOwned === 1 ? '' : 's') +
    ' into the tank' + (s.ownedName ? ', beginning with ' + s.ownedName : '') + '.');

  if (s.warLog && s.warLog.length) {
    const wl = s.warLog;
    const named = wl.slice(0, 3).map(w => {
      const why = { resources: 'for the resources', boredom: 'out of boredom', leader: 'over its leader',
                    impress: 'to impress somebody', deflect: 'to bury a scandal' }[w.pretext] || '';
      const out = w.won === true ? ' (won)' : w.won === false ? ' (a quagmire)' : '';
      return w.name + ' ' + why + out;
    });
    paras.push('Declared ' + wl.length + ' war' + (wl.length === 1 ? '' : 's') + ': ' + named.join('; ') +
      (wl.length > 3 ? ', and others' : '') + '.');
  }

  if (s.rallies > 0) paras.push('Staged ' + s.rallies + ' spectacle' + (s.rallies === 1 ? '' : 's') +
    ' for the base, each more American than the last.');

  if (s.cayStage > 0) {
    paras.push('The Saint Ambrose files were ' +
      (s.cayHeat <= 2 ? 'answered and buried' : s.cayHeat >= 7 ? 'never contained, and led every night' :
       'a running sore') + ' to the end.');
  }

  if (s.clausesBroken > 0) {
    paras.push('Broke ' + s.clausesBroken + ' of ' + AD.CLAUSES.length + ' constitutional clauses' +
      (s.fullSet ? ' — the full set — and collected the bounty from Russia in four instalments.' : '.'));
  }

  paras.push(win
    ? 'Final Authority ' + s.authority + '. Personal fortune $' + s.cash + 'B. The office is a shape it did not have before.'
    : 'Left office worth $' + s.cash + 'B' + (s.cash >= AD.wealthGoal(s) ? ' — which, on the only scoreboard that clears, is a win.' : '.'));

  /* ---- the verdict: one authorial line ---- */
  const e = AD.ENDINGS[s.endingId] || {};
  const verdict = e.epitaph || (win ? 'It held together exactly as long as you needed it to.'
    : 'You held the most powerful office on Earth. It held you right back.');

  /* ---- the shareable one-liner ---- */
  const plural = (n, word) => n + ' ' + word + (n === 1 ? '' : 's');
  const bits = [];
  if (s.sacked) bits.push(plural(s.sacked, 'senator') + ' purged');
  if (s.judgesPacked) bits.push(plural(s.judgesPacked, 'judge') + ' packed');
  if (s.warsDeclared) bits.push(plural(s.warsDeclared, 'war'));
  if (s.clausesBroken) bits.push(s.clausesBroken + '/' + AD.CLAUSES.length + ' clauses broken');
  const share = 'AMERICAN DICTATOR — ' + (e.title || 'THE END') + ' in month ' + s.months + '. ' +
    (bits.length ? bits.slice(0, 3).join(', ') + '. ' : '') +
    'Score ' + num(s.score) + (s.seed ? '. Seed ' + s.seed : '') + '.';

  return { headline, standfirst, paras, verdict, share, score: s.score, win };
};

/* ============================================================
   THE FRONT PAGE — a splashy, personalised newspaper recap of the
   term, distinct from the analytical Dossier. Built entirely from
   the scorecard so it can be read (and screenshotted) at the end.
   ============================================================ */
AD.buildFrontPage = function (score) {
  const e = AD.ENDINGS[score.endingId] || {};
  const name = score.president || 'The President';
  const yrs = Math.max(1, Math.round(score.months / 12));
  const story = [];

  story.push(`${name} has left the White House after ${score.months} month${score.months === 1 ? '' : 's'} in office, ` +
    `ending a presidency that reached <b>Authority ${score.authority}</b> of a possible 100.`);

  if (score.pillars > 0) {
    story.push(`Captured outright and folded into the regime: ${score.pillarNames.join(', ')}. ` +
      (score.pillars >= 3 ? 'It was, by any honest reading, a dictatorship.' : 'It was not, in the end, quite enough.'));
  } else {
    story.push('Not one branch of government was captured. The republic, battered, kept its shape.');
  }

  const parts = [];
  if (score.clausesBroken) parts.push(`broke ${score.clausesBroken} of ${AD.CLAUSES.length} constitutional clauses` + (score.fullSet ? ' — the complete set' : ''));
  if (score.warsDeclared) parts.push(`declared ${score.warsDeclared} war${score.warsDeclared === 1 ? '' : 's'}`);
  if (score.judgesPacked) parts.push(`packed ${score.judgesPacked} seats on the bench`);
  if (score.outletsOwned) parts.push(`took ${score.outletsOwned} newsroom${score.outletsOwned === 1 ? '' : 's'} in hand`);
  if (parts.length) story.push('Along the way the administration ' + parts.join(', ') + '.');

  if (score.pardons) {
    let s = `On the way out the door, ${score.pardons} pardon${score.pardons === 1 ? ' was' : 's were'} signed`;
    if (score.topPardon) s += `, among them ${score.topPardon}`;
    if (score.pardonSaints) s += `. ${score.pardonSaints} of them, remarkably, went to the genuinely innocent`;
    story.push(s + '.');
  }

  if (score.hasCasino) story.push(`The White House itself now trades as a casino bearing the President's own name in neon, visible from the far bank of the river.`);

  const fortune = score.cash;
  if (fortune >= AD.wealthGoal({ wealthGoal: score.wealthGoal })) {
    story.push(`The personal fortune, disclosed on a form and never disputed, stands at <b>$${fortune}bn</b> — larger than the budgets of eleven federal agencies combined.`);
  } else {
    story.push(`The personal fortune leaves office at <b>$${fortune}bn</b>.`);
  }

  return {
    masthead: 'THE NATIONAL SCREAM',
    strap: ['FINAL EDITION', AD.dateLabel ? AD.dateLabel(score.months) : ''],
    win: score.win,
    headline: e.head || (score.win ? 'HE DID IT' : 'IT IS OVER'),
    deck: e.sub || '',
    byline: `By the Political Desk · ${score.party || ''}`,
    story,
    boxes: [
      { n: score.authority, label: 'Authority' },
      { n: score.pillars + '/4', label: 'Pillars' },
      { n: '$' + score.cash + 'bn', label: 'Fortune' },
      { n: score.pardons || 0, label: 'Pardons' },
      { n: (score.clausesBroken || 0) + '/' + AD.CLAUSES.length, label: 'Clauses' },
      { n: score.score.toLocaleString(), label: 'Final Score' }
    ],
    verdict: AD.clean ? e.epitaph : e.epitaph
  };
};
