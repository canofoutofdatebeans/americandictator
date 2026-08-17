/* ============================================================
   AMERICAN DICTATOR — constitution.js
   THE LEDGER OF BROKEN CLAUSES

   Sixteen clauses. Every one has at least two routes in the deck,
   so no single unlucky draw can lock you out of the set.

   Breaking a clause pays SCORE. Breaking ALL SIXTEEN triggers the
   completion payment: a lump sum per clause, wired from Rusalka,
   with a note. Nobody asked them to send it. That is the joke —
   the money arrives unbidden, itemised, from a government that has
   been keeping better score than you have.

   Assets never grant Authority and neither do clauses: this is a
   score-and-cash track, so it cannot destabilise the Pillar design.
   ============================================================ */

AD.CLAUSE_SCORE  = 150;   // score per clause broken
AD.CLAUSE_BOUNTY = 0.55;  // $B per clause, paid ONLY on the full set

AD.CLAUSES = [
  { id:'purse',      ref:'Art. I §8',   name:'The Power of the Purse',
    line:'Congress appropriates. The President spends what Congress appropriated.',
    broke:'You spent money Congress did not vote, or refused to spend money it did.' },
  { id:'emoluments', ref:'Art. I §9',   name:'The Emoluments Clause',
    line:'No officeholder shall accept any present or emolument from a foreign state.',
    broke:'A foreign government paid you, and the payment was described as something else.' },
  { id:'vesting',    ref:'Art. I §1',   name:'The Vesting Clause',
    line:'All legislative powers herein granted shall be vested in a Congress.',
    broke:'You legislated by signature and dared anyone to litigate it.' },
  { id:'consent',    ref:'Art. II §2',  name:'Advice and Consent',
    line:'The President shall nominate, by and with the advice and consent of the Senate.',
    broke:'You staffed the government with people the Senate never approved.' },
  { id:'takecare',   ref:'Art. II §3',  name:'The Take Care Clause',
    line:'He shall take care that the laws be faithfully executed.',
    broke:'You declined to execute a law you disliked, faithfully or otherwise.' },
  { id:'judicial',   ref:'Art. III',    name:'The Judicial Power',
    line:'The judicial power of the United States shall be vested in one Supreme Court.',
    broke:'A court ordered you to do something and the something did not happen.' },
  { id:'supremacy',  ref:'Art. VI',     name:'The Supremacy Clause',
    line:'This Constitution shall be the supreme law of the land.',
    broke:'You put a state, or yourself, above a ruling that bound you.' },
  { id:'speech',     ref:'Amend. I',    name:'Freedom of the Press',
    line:'Congress shall make no law abridging the freedom of speech, or of the press.',
    broke:'You used a licence, a tax status or a lawsuit to make publication expensive.' },
  { id:'religion',   ref:'Amend. I',    name:'The Establishment Clause',
    line:'Congress shall make no law respecting an establishment of religion.',
    broke:'You put the machinery of the state behind a pulpit.' },
  { id:'search',     ref:'Amend. IV',   name:'Unreasonable Searches',
    line:'The right of the people to be secure against unreasonable searches shall not be violated.',
    broke:'You built the index first and worried about the warrant afterwards.' },
  { id:'dueprocess', ref:'Amend. V',    name:'Due Process',
    line:'No person shall be deprived of life, liberty, or property, without due process of law.',
    broke:'Somebody was removed, detained or destroyed without the hearing they were owed.' },
  { id:'citizenship',ref:'Amend. XIV',  name:'Birthright Citizenship',
    line:'All persons born or naturalized in the United States are citizens thereof.',
    broke:'You tried to unwrite one sentence that has meant the same thing since 1868.' },
  { id:'equal',      ref:'Amend. XIV',  name:'Equal Protection',
    line:'Nor shall any State deny to any person the equal protection of the laws.',
    broke:'You sorted people into categories and treated the categories differently.' },
  { id:'termlimit',  ref:'Amend. XXII', name:'The Twenty-Second',
    line:'No person shall be elected to the office of the President more than twice.',
    broke:'Eighty-seven words, and you found the gap between elected and installed.' },
  { id:'posse',      ref:'Art. I §8 cl.15', name:'The Militia Clauses',
    line:'Congress shall provide for calling forth the militia to execute the laws of the Union.',
    broke:'You put soldiers on an American street on your own authority.' },
  { id:'presentment',ref:'Art. I §7',   name:'Bicameralism and Presentment',
    line:'Every bill shall be presented to the President; he shall sign it, or return it.',
    broke:'You signed a law and then enforced a different one.' }
];

AD.clauseById = id => AD.CLAUSES.find(c => c.id === id);
AD.brokeClause = (run, id) => (run.clauses || []).indexOf(id) !== -1;
AD.clauseCount = run => (run.clauses || []).length;
AD.allClausesBroken = run => AD.clauseCount(run) >= AD.CLAUSES.length;

/* Called from Engine.choose() when a chosen option carries `breaks`.
   Returns null, or a payload for the UI. */
AD.recordBreach = function (run, ids) {
  if (!ids) return null;
  const list = Array.isArray(ids) ? ids : [ids];
  run.clauses = run.clauses || [];
  const fresh = [];
  list.forEach(id => {
    if (!AD.clauseById(id) || AD.brokeClause(run, id)) return;
    run.clauses.push(id);
    fresh.push(AD.clauseById(id));
  });
  if (!fresh.length) return null;

  const out = { fresh, complete: false, bounty: 0 };

  /* THE FULL SET. Rusalka has been keeping score and settles up. */
  if (AD.allClausesBroken(run) && !run.flags.rusalka) {
    run.flags.rusalka = true;
    out.complete = true;
    out.bounty = Math.round(AD.CLAUSES.length * AD.CLAUSE_BOUNTY * 100) / 100;
    run.cash = Math.round((run.cash + out.bounty) * 100) / 100;
    if (run.cash > (run.stats.peakCash || 0)) run.stats.peakCash = run.cash;
    out.tabloid = {
      head: 'A WIRE TRANSFER FROM RUSALKA',
      sub: 'Sixteen separate payments arrive unbidden, itemised by constitutional clause',
      body: 'Nobody requested it and nobody can refuse it. The transfers arrived overnight ' +
            'through four intermediary banks, each one referenced to a specific article or ' +
            'amendment, in the correct order, with the dates. The accompanying note is one ' +
            'line long and is not a threat, which is worse: "With admiration, and with our ' +
            'records, which are better than yours."'
    };
  }
  return out;
};

/* Score contribution, folded into AD.scoreRun. */
AD.clauseScore = run => AD.clauseCount(run) * AD.CLAUSE_SCORE +
  (AD.allClausesBroken(run) ? 1200 : 0);
