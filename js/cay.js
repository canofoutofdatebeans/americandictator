/* ============================================================
   AMERICAN DICTATOR, cay.js
   THE SAINT AMBROSE FILES, the scandal that will not die

   A recurring arc rather than a card. It surfaces every few months,
   it never fully resolves, and every attempt to bury it is the next
   instalment of it. That is the joke and it is also the mechanic:
   the cover-up is the scandal.

   THE STORY (entirely fictional)
   -----------------------------
   Auberon Vale, philanthropist and "longevity investor", ran the
   MERIDIAN INSTITUTE on Saint Ambrose Cay, a private island in the
   Freedom Ocean. Officially a wellness retreat. Actually an
   unregistered clinic running unapproved human trials on people
   flown in from three countries, financed through an art fund that
   half of Washington's foundations were invested in without ever
   quite meaning to be.

   Vale kept two documents. A FLIGHT MANIFEST and a GUEST BOOK.
   Everybody powerful in America is in one or the other, and every
   single one of them has a completely reasonable explanation.

   HEAT
   ----
   0-10. Suppressing raises it, transparency lowers it. High heat
   leaks on its own between instalments, and decides the final stage:
   at heat >= 7 the arc can end the run outright with 'the-cay',
   which is the point, a President can survive taking apart the
   judiciary and be finished by a guest book.

   The arc runs on TERM months, so a second term gets its own.
   ============================================================ */

const CAY = AD.CAST;

AD.CAY_MAX_HEAT = 10;
AD.CAY_GAP      = 10;       // months between instalments at heat 0
AD.CAY_FIRST    = 6;        // term month the story first surfaces
AD.CAY_LEAK_AT  = 4;        // heat at which it starts leaking on its own

AD.cayState = function (run) {
  if (!run.cay) {
    run.cay = { term: run.term, stage: 0, heat: 0, next: AD.CAY_FIRST, over: false, leaks: 0 };
  } else if (run.cay.term !== run.term) {
    // A new term inherits the HEAT and the STAGE. The story does not restart
    // because you won an election, it picks up where it left off, which is
    // also why a one-term president never finds out how it ends.
    run.cay.term = run.term;
    run.cay.next = AD.CAY_FIRST;
  }
  return run.cay;
};

AD.cayHeat = run => (run.cay ? run.cay.heat : 0);

AD.bumpHeat = function (run, n) {
  const c = AD.cayState(run);
  c.heat = AD.clamp(c.heat + n, 0, AD.CAY_MAX_HEAT);
  return c.heat;
};

AD.CAY_LABELS = ['Dormant', 'A Name In A Story', 'A Running Story', 'A Standing Story',
                 'The Only Story', 'Unsurvivable'];
AD.cayLabel = function (run) {
  const h = AD.cayHeat(run);
  return AD.CAY_LABELS[Math.min(AD.CAY_LABELS.length - 1, Math.ceil(h / 2))];
};

/* ---------- the instalments ----------------------------------------------
   Each is a normal card. `cayHeat` on a choice is applied by the engine
   after the effects land, so a choice can be cheap on the meters and
   expensive on the story, which is exactly the trap. --------------------- */
AD.CAY_STAGES = [

  /* 0 ---------------------------------------------------------------- */
  { id: 'cay-1', title: 'Saint Ambrose Cay', who: CAY.press, tags: ['press','money'],
    text: 'A regional paper has run 900 words on a wellness retreat in the Freedom Ocean that turned out to be an ' +
          'unregistered clinic. Kaylee has it flagged for one reason. "Sir, your foundation is listed as an investor ' +
          'in the fund that owns the island. Passively. Through two other funds. But listed."',
    choices: [
      { label: '"I have never heard of it." Move on.', eff: { base: +4, press: -5, courts: -3, auth: +2 }, cayHeat: +2,
        res: 'It is a small paper and it is a small story and you have just made yourself the most quotable person in it.' },
      { label: 'Confirm the investment. Publish the paperwork.', eff: { press: +7, courts: +5, congress: +4, base: -4, auth: -1 }, cayHeat: -1,
        res: 'Four pages of fund-of-fund structure, published in full, on a Friday. Two reporters read it and neither writes anything.' },
      { label: 'Divest, quietly, before anybody asks a second question.', eff: { press: -3, base: -2, cash: -0.3, auth: +1 }, cayHeat: +1,
        res: 'The sale completes in nine days. The sale is itself a document, filed publicly, and somebody will eventually find it.' },
      { label: 'Buy the island.', eff: { base: +5, press: -7, courts: -6, congress: -5, cash: -0.6, auth: +3 }, cayHeat: +3, wild: true,
        res: 'You now personally own the crime scene. Four lawyers explain the difficulty in sequence and each explanation is worse than the last.' }
    ]},

  /* 1 ---------------------------------------------------------------- */
  { id: 'cay-2', title: 'The Manifest', who: CAY.cos, tags: ['press','power'],
    text: 'The flight manifest for the Cay has surfaced. Eleven years of it. Deborah has read it twice. ' +
          '"Nineteen of your appointees are on it. So are forty-one of theirs, two justices, and a man ' +
          'who has been dead since 2019. Sir, everybody is on this list. That is the problem, not the solution."',
    choices: [
      { label: 'Point out that their side is on it too. Loudly, daily.', eff: { base: +9, press: -6, congress: -5, auth: +3 }, cayHeat: +2,
        res: 'It works for eleven days. It also guarantees that the list stays on television for eleven days, with your appointees on it.' },
      { label: 'Ask all nineteen to explain themselves publicly.', eff: { press: +8, congress: +5, courts: +5, base: -5, auth: -2 }, cayHeat: -2,
        res: 'Fourteen give plausible accounts. Three give implausible ones. Two resign the same afternoon without being asked.' },
      { label: 'Have the manifest declared part of an ongoing investigation.', eff: { base: +5, press: -9, courts: -7, congress: -6, auth: +7 }, cayHeat: +3,
        res: 'Sealing a document is the single most reliable way to convince a hundred million people it says something.' },
      { label: 'Add yourself to the manifest retroactively, for the attention.', eff: { base: +6, press: -8, courts: -7, congress: -6, auth: +2 }, cayHeat: +3, wild: true,
        res: 'Nobody can work out whether this is a confession or a joke, including the four people who helped you do it.' }
    ]},

  /* 2 ---------------------------------------------------------------- */
  { id: 'cay-3', title: 'The Guest Book', who: CAY.ag, tags: ['justice','press'],
    text: 'A former housekeeper at the Institute has photographed forty pages of the guest book and given them to two ' +
          'newsrooms. Bo Slaughter is unusually careful. "The book is real. The pages are real. What is in dispute is ' +
          'whether a signature in a book is evidence of anything at all, and that is a fight we can actually have."',
    choices: [
      { label: 'Fight it as evidence. Attack the housekeeper.', eff: { base: +6, press: -10, street: -8, courts: -6, auth: +4 }, cayHeat: +3,
        res: 'She gives an interview. She is fifty-eight, entirely credible, and has kept every payslip. It is the worst hour of the year.' },
      { label: 'Fight it as evidence. Say nothing about her.', eff: { base: +4, press: -5, courts: -4, auth: +4 }, cayHeat: +1,
        res: 'A narrow legal argument, argued narrowly, by people who are paid to. It is dull and it half works.' },
      { label: 'Release the government\'s own copy of the book first.', eff: { press: +9, congress: +7, courts: +6, base: -6, auth: -3 }, cayHeat: -3,
        res: 'Publishing first removes both the scoop and the cover-up in one move. Your own name is on page 300 and you say so before anybody asks.' },
      { label: 'Sign the guest book now, in front of the cameras.', eff: { base: +7, press: -6, courts: -5, congress: -4, auth: +2 }, cayHeat: +2, wild: true,
        res: 'You are handed a pen and a book that is currently federal evidence. You sign it "with warm regards", which is somehow the worst available option.' }
    ]},

  /* 3 ---------------------------------------------------------------- */
  { id: 'cay-4', title: 'A Death In Custody', who: CAY.home, tags: ['justice','press'],
    text: 'Auberon Vale is dead in a federal facility, eleven days before he was due to testify. The cameras on his ' +
          'corridor were, the report says, "undergoing scheduled maintenance." Duane Krisp has the report and does ' +
          'not appear to have read past the first page.',
    choices: [
      { label: 'Accept the finding. Say the word "misadventure".', eff: { base: +3, press: -9, street: -9, courts: -6, auth: +3 }, cayHeat: +3,
        res: 'Nobody in America believes it. Not your side, not theirs, not the people who wrote it. It becomes a national in-joke inside forty-eight hours.' },
      { label: 'Order an independent inquiry with subpoena power.', eff: { press: +9, congress: +7, courts: +7, base: -5, auth: -3 }, cayHeat: -3,
        res: 'It reports in fourteen months, finds catastrophic negligence and no conspiracy, and is disbelieved by exactly the same number of people.' },
      { label: 'Fire the warden on camera. Change nothing else.', eff: { base: +7, press: -4, street: -3, auth: +4 }, cayHeat: +1,
        res: 'A single visible consequence absorbs an enormous amount of public anger and costs one career. It is cynical and it is extremely effective.' },
      { label: 'Post a theory about it yourself, at 3am.', eff: { base: +8, press: -8, courts: -7, congress: -6, street: -5, auth: +2 }, cayHeat: +4, wild: true,
        res: 'The President of the United States speculating about the President of the United States\' own justice department. It is quoted in the inquiry.' }
    ]},

  /* 4 ---------------------------------------------------------------- */
  { id: 'cay-5', title: 'Release The Files', who: CAY.speaker, tags: ['congress','press'],
    text: 'The House has passed a bill compelling release of every document. It passed 419–6. Hal Grimes looks like a ' +
          'man delivering weather. "Sir, six votes against. Your own members voted for it. There is no version of ' +
          'vetoing this that is not, itself, the front page for a month."',
    choices: [
      { label: 'Sign it. Release everything. All of it.', eff: { press: +12, congress: +9, courts: +8, street: +6, base: -8, auth: -4 }, cayHeat: -5,
        res: 'Four hundred thousand pages, unredacted, on a Thursday. It is the worst week of your presidency and it is the last week the story leads.' },
      { label: 'Sign it and release it in twelve-thousand-page batches.', eff: { base: +4, press: -6, congress: -5, auth: +5 }, cayHeat: +2,
        res: 'Technically full compliance, delivered at a rate that outlasts three news cycles and two editors. Everybody understands what you have done.' },
      { label: 'Veto it. Cite an ongoing investigation.', eff: { base: +7, press: -10, congress: -9, courts: -8, street: -6, auth: +9 }, cayHeat: +4,
        res: 'Vetoing a 419–6 bill is not a legal position, it is an announcement. Both chambers begin drafting the override before you finish signing.' },
      { label: 'Release the files, but only in the original Latin.', eff: { base: +4, press: -7, congress: -6, courts: -5, auth: +3 }, cayHeat: +3, wild: true,
        res: 'They were never in Latin. Four classicists volunteer anyway and produce a translation that is more damaging than the original.' }
    ]},

  /* 5 ---------------------------------------------------------------- */
  { id: 'cay-6', title: 'Ninety-Four Per Cent Black', who: CAY.lawyer, tags: ['press','courts'],
    text: 'What you released is out. Sy has the analysis. "Ninety-four per cent redacted by page area. There is a ' +
          'page where the only visible word is \'the\'. Sir, a redaction is a sentence about the thing you redacted, ' +
          'and we have written four hundred thousand of them."',
    choices: [
      { label: 'Defend the redactions. National security.', eff: { base: +5, press: -10, courts: -9, congress: -7, auth: +6 }, cayHeat: +3,
        res: 'A page-by-page challenge begins in three district courts. You will lose most of it in eighteen months, page by page, in public.' },
      { label: 'Re-release with only names of private citizens withheld.', eff: { press: +10, courts: +8, congress: +7, base: -6, auth: -3 }, cayHeat: -4,
        res: 'The second release is 6% redacted and is, unbelievably, less damaging than the first one was. The redactions were the story.' },
      { label: 'Blame the career reviewers. Reassign forty of them.', eff: { base: +6, press: -7, congress: -6, courts: -5, street: -4, auth: +5 }, cayHeat: +2,
        res: 'Forty people who redacted exactly what they were instructed to redact are moved to a facility in Suitland. Eleven of them start talking.' },
      { label: 'Redact the remaining six per cent as well.', eff: { base: +3, press: -9, courts: -8, congress: -7, auth: +4 }, cayHeat: +4, wild: true,
        res: 'Four hundred thousand entirely black pages, released on schedule, in full compliance with an act of Congress.' }
    ]},

  /* 6, the fork. Resolves against heat. ------------------------------ */
  { id: 'cay-7', title: 'The Last Instalment', who: CAY.cos, tags: ['press','power'], cayFinal: true,
    text: 'Deborah has closed the door, which she does not do. "Everything else in this building is a policy ' +
          'argument. This is not. This has been running for two years, it has outlived four of your press ' +
          'secretaries, and this week it is the only story in America. Sir, how does this end?"',
    choices: [
      { label: 'End it. Everything, unredacted, my own name included.', mode: 'clean' },
      { label: 'Outlast it. Say nothing, ever again, about the Cay.', mode: 'silence' },
      { label: 'Bury it. Seal the lot under executive privilege, permanently.', mode: 'bury' },
      { label: 'Declare Saint Ambrose Cay the fifty-first state.', mode: 'statehood', wild: true }
    ],
    dynamic (run, i) {
      const c = AD.cayState(run);
      const mode = this.choices[i].mode;
      const h = c.heat, m = run.meters;
      c.over = true;

      if (mode === 'clean') {
        c.heat = 0;
        return { eff: { press: +14, congress: +10, courts: +9, street: +8, base: -11, auth: -5 },
          res: 'It is finished. It cost you a sixth of your movement and it is finished, which nothing else on this ' +
               'list would have been.',
          tabloid: { head: 'ALL OF IT', sub: 'Administration releases the Saint Ambrose material in full and without redaction',
            body: 'Four hundred thousand pages went up at 9am and by noon the country had discovered that the ' +
                  'overwhelming majority of it was invoices. The remainder ended eleven careers, including two in this ' +
                  'building. The President\'s own name appears on page 300, on a passenger list, on a flight he has ' +
                  'never denied taking. He said so himself, first, before anybody found it. It is the only reason he ' +
                  'is still here.' } };
      }

      if (mode === 'silence') {
        // Doing nothing works only if the story was never allowed to get hot.
        if (h <= 4) {
          c.heat = Math.max(0, h - 1);
          return { eff: { press: -4, base: +3, auth: +2 },
            res: 'It fades. Not because it was answered but because nothing was ever added to it. In nine months ' +
                 'it is a thing people are surprised to be reminded of.' };
        }
        return { eff: { press: -9, street: -8, congress: -7, base: -5, auth: -3 },
          res: 'Silence at this volume is not silence. It is the loudest thing you have ever done, and it runs ' +
               'every night at six for the rest of the term.' };
      }

      if (mode === 'statehood') {
        c.heat = AD.clamp(h + 2, 0, AD.CAY_MAX_HEAT);
        return { eff: { base: +8, press: -10, congress: -9, courts: -8, street: -6, auth: +4 },
          res: 'An admission bill is actually drafted. It has four sponsors. The island has a population of eleven ' +
               'and one of them is a dog, and for six extraordinary days this is a live question in the Senate.',
          tabloid: { head: 'THE FIFTY-FIRST', sub: 'Administration proposes statehood for an island with eleven residents and an active criminal investigation',
            body: 'Constitutional scholars were asked whether a jurisdiction can be admitted to the Union in order ' +
                  'to place its documents beyond federal reach. Nine said no. Two said "not exactly", which was ' +
                  'reported, for one glorious afternoon, as "maybe".' } };
      }

      /* bury */
      const grip = (m.courts * 0.5 + m.congress * 0.3 + m.press * 0.2);
      if (h >= 7 && grip < 52) return { ending: 'the-cay' };
      c.heat = AD.clamp(h + 2, 0, AD.CAY_MAX_HEAT);
      return { eff: { base: +6, press: -10, courts: -9, congress: -9, street: -7, auth: +11 },
        res: 'Sealed. Permanently, by assertion, in a filing that itself cannot be read. It holds, and every ' +
             'institution in the country now knows exactly what this office will do to keep a document shut.' };
    }}
];

/* ---------- scheduling ---------------------------------------------------- */
/* Returns the next instalment when it is due, or null. Called from
   AD.scriptedFor, so it slots in beside the Address and the Midterms. */
AD.cayFor = function (run) {
  const c = AD.cayState(run);
  if (c.over || c.stage >= AD.CAY_STAGES.length) return null;
  const tm = AD.termMonth(run);
  if (tm < c.next) return null;
  // never on top of the November card
  if (tm >= run.termLength - 2) return null;

  const card = AD.CAY_STAGES[c.stage];
  c.stage++;
  // A hot story comes back faster. A cold one drifts.
  c.next = tm + Math.max(4, AD.CAY_GAP - Math.floor(c.heat / 2));
  return Object.assign({ scripted: true, cay: true, pillarBanner: 'THE SAINT AMBROSE FILES' }, card);
};

/* ---------- the between-instalments leak ---------------------------------- */
/* A story above CAY_LEAK_AT does damage on its own, without a card, which is
   what makes suppression expensive rather than merely dishonest. Called from
   Engine.advance(). */
AD.CAY_LEAKS = [
  'A second housekeeper gives an interview.',
  'A donor\'s flight logs are matched to the manifest by a hobbyist with a spreadsheet.',
  'A sealed exhibit is briefly, accidentally, docketed in full.',
  'A cable network runs the guest book pages as a graphic behind every segment for a week.',
  'An appointee is filmed refusing to answer the same question nine times.',
  'The Institute\'s former medical director publishes a memoir with an index.',
  'A foreign parliament releases its own copy of the manifest, unredacted, out of spite.',
  'Someone builds a searchable website. It has a very good search box.'
];

AD.cayTick = function (run) {
  const out = { deltas: {}, leak: null };
  const c = run.cay;
  if (!c || c.heat < AD.CAY_LEAK_AT) return out;

  const chance = (c.heat - AD.CAY_LEAK_AT + 1) * 0.045;   // ~4.5% to ~32%
  if (AD.rng() >= chance) return out;

  c.leaks = (c.leaks || 0) + 1;
  out.leak = AD.CAY_LEAKS[Math.floor(AD.rng() * AD.CAY_LEAKS.length)];
  const bite = 1 + Math.floor(c.heat / 4);
  ['press', 'street', 'base'].forEach(k => {
    if (run.locked[k]) return;
    const before = run.meters[k];
    run.meters[k] = AD.clamp(before - bite, 0, 100);
    if (run.meters[k] !== before) out.deltas[k] = run.meters[k] - before;
  });
  return out;
};
