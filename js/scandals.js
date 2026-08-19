/* ============================================================
   AMERICAN DICTATOR, scandals.js
   THE HUNDRED SCANDALS, one hangs over every run.

   The Saint Ambrose Files (cay.js) is the prototype: a slow-burn arc
   about documents a President does not want released, and an island.
   This turns that ONE scandal into a POOL. At the start of a run one
   scandal is chosen (deterministically from the seed), and its nouns,
   the island or archive, the figure at the centre, the two damning
   documents, the between-instalment leaks, are reskinned over the
   shared, tested escalation. So every playthrough has a different
   story hanging over it, but the mechanic (heat, suppression, the leak,
   the final fork, the run-ending 'the-cay') is identical.

   Every scandal is about FILES the President wants buried, or an
   ISLAND, or both. Fictional throughout.
   ============================================================ */

/* Each scandal supplies the proper nouns that get swapped into the arc:
     name       short name of the affair            ("the Ellsworth Ledger")
     banner     the pillar-banner headline, CAPS     ("THE ELLSWORTH LEDGER")
     place      the island or archive, long form     ("the Ellsworth Archive")
     placeShort one word for "the ___"               ("Archive")
     villain    the figure at the centre             ("Marcus Ellsworth")
     doc1       the first damning document           ("wire ledger")
     doc2       the second                            ("client list")
     org        the front organisation                ("the Ellsworth Trust")
     leaks      6+ between-instalment leak lines
   The DEFAULT (ambrose) matches cay.js verbatim, so nothing is reskinned
   when it is the one chosen. */
AD.SCANDALS = [
  {
    id: 'ambrose', kind: 'island', name: 'Saint Ambrose', banner: 'THE SAINT AMBROSE FILES',
    place: 'Saint Ambrose Cay', placeShort: 'Cay', villain: 'Auberon Vale',
    doc1: 'flight manifest', doc2: 'guest book', org: 'the Meridian Institute',
    leaks: null   // uses the original CAY_LEAKS
  },
  {
    id: 'ellsworth', kind: 'files', name: 'the Ellsworth Ledger', banner: 'THE ELLSWORTH LEDGER',
    place: 'the Ellsworth Archive', placeShort: 'Archive', villain: 'Marcus Ellsworth',
    doc1: 'wire ledger', doc2: 'client list', org: 'the Ellsworth Trust',
    leaks: [
      'A junior accountant photographs a page and posts it, then deletes it, too late.',
      'A rival donor matches his own dates to the ledger out of pure spite.',
      'A sealed exhibit is briefly, accidentally, docketed in full.',
      'A cable network runs the ledger as a graphic behind every segment for a week.',
      'An appointee is filmed refusing to say whether he can read a spreadsheet.',
      'The Trust\'s former treasurer publishes a memoir with an unusually thorough index.',
      'A foreign tax authority releases its own copy, unredacted, out of spite.',
      'Someone builds a searchable website. The search box works beautifully.'
    ]
  },
  {
    id: 'clemency', kind: 'island', name: 'Clemency Cay', banner: 'THE CLEMENCY CAY FILES',
    place: 'Clemency Cay', placeShort: 'Cay', villain: 'Sinclair Roe',
    doc1: 'boat manifest', doc2: 'visitor log', org: 'the Second Chance Foundation',
    leaks: [
      'A dock worker gives an interview and names three boats.',
      'A pardoned financier is filmed arriving, waving, delighted.',
      'A drone photograph of the jetty is geolocated by a teenager in an afternoon.',
      'A cable network builds a wall-sized map of who visited when.',
      'A caretaker refuses to confirm the island exists, on camera, nine times.',
      'The island\'s former chef publishes a cookbook with a very specific dedication.',
      'A yacht-tracking hobbyist cross-references the manifest with a marina database.',
      'Someone registers clemencycay.com and fills it with primary sources.'
    ]
  },
  {
    id: 'orphanage', kind: 'files', name: 'the Bright Futures File', banner: 'THE BRIGHT FUTURES FILE',
    place: 'the Bright Futures Home', placeShort: 'Home', villain: 'Deacon Prewitt',
    doc1: 'intake register', doc2: 'donor ledger', org: 'Bright Futures',
    leaks: [
      'A former volunteer photographs the intake register and hands it to two newsrooms.',
      'A donor discovers, live on air, what the donation actually funded.',
      'An auditor\'s sealed memo is briefly, accidentally, filed in the wrong court.',
      'A network runs the register as a graphic behind every segment for a week.',
      'A board member is filmed refusing to define the word "orphanage".',
      'The Home\'s former director publishes a memoir, heavily indexed.',
      'A neighbouring county releases its own inspection reports, unredacted.',
      'Someone builds a searchable database of every name in the register.'
    ]
  },
  {
    id: 'longevity', kind: 'island', name: 'the Verdant Isle affair', banner: 'THE VERDANT ISLE FILES',
    place: 'Verdant Isle', placeShort: 'Isle', villain: 'Dr. Halcyon Reeve',
    doc1: 'patient manifest', doc2: 'membership book', org: 'the Verdant Institute',
    leaks: [
      'A former nurse describes the "treatments" to a documentary crew.',
      'A billionaire member is photographed arriving by seaplane, smiling.',
      'A sealed medical exhibit is briefly docketed in full by mistake.',
      'A network runs the membership book as a graphic all week.',
      'A trustee is filmed refusing to say what "longevity" means here.',
      'The Institute\'s ex-director publishes a memoir with an index of members.',
      'A foreign health ministry releases its own file, unredacted, out of spite.',
      'Someone builds a searchable site of who visited the Isle and when.'
    ]
  }
];

AD.scandalById = id => AD.SCANDALS.find(s => s.id === id) || AD.SCANDALS[0];

/* Deterministic per-run pick, off the card rng so it never shifts the deck.
   Stored on run.scandalId; a second term keeps the same story. */
AD.pickScandal = function (run) {
  if (run.scandalId && AD.scandalById(run.scandalId)) return run.scandalId;
  let h = (AD.Seed && AD.Seed.hash) ? AD.Seed.hash(String(run.seed || 'X') + ':scandal') : 0;
  h = Math.abs(h | 0) % AD.SCANDALS.length;
  run.scandalId = AD.SCANDALS[h].id;
  return run.scandalId;
};
AD.curScandal = run => AD.scandalById(AD.pickScandal(run));

/* Swap the prototype's nouns for the chosen scandal's. The default (ambrose)
   returns the string untouched, so the original arc is byte-identical. */
AD.scandalFill = function (str, sc) {
  if (!str || !sc || sc.id === 'ambrose') return str;
  return str
    .replace(/Saint Ambrose Cay/g, sc.place)
    .replace(/the Cay\b/g, 'the ' + sc.placeShort)
    .replace(/Saint Ambrose/g, sc.name.replace(/^the /, ''))
    .replace(/Auberon Vale/g, sc.villain)
    .replace(/Vale\b/g, sc.villain.split(' ').pop())
    .replace(/\bMeridian Institute\b/g, sc.org)
    .replace(/\bthe Institute\b/g, sc.org)
    .replace(/flight manifest/g, sc.doc1)
    .replace(/guest book/g, sc.doc2);
};

/* Reskin a whole instalment card (text + every choice's label/res). Returns a
   shallow clone so the shared CAY_STAGES prototype is never mutated. */
AD.reskinCay = function (card, sc) {
  if (!sc || sc.id === 'ambrose') return card;
  const out = Object.assign({}, card);
  out.text = AD.scandalFill(card.text, sc);
  out.choices = (card.choices || []).map(ch => Object.assign({}, ch, {
    label: AD.scandalFill(ch.label, sc),
    res: AD.scandalFill(ch.res, sc)
  }));
  // The finale computes its outcome at choose-time; reskin that output too.
  if (typeof card.dynamic === 'function') {
    out.dynamic = function (run, i) {
      const r = card.dynamic.call(card, run, i);
      if (!r) return r;
      if (r.res) r.res = AD.scandalFill(r.res, sc);
      if (r.tabloid) r.tabloid = {
        head: r.tabloid.head,
        sub: AD.scandalFill(r.tabloid.sub, sc),
        body: AD.scandalFill(r.tabloid.body, sc)
      };
      return r;
    };
  }
  return out;
};
