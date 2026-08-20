/* ============================================================
   AMERICAN DICTATOR, war.js
   THE WAR ROOM, a ladder of options against every country.

   The room used to offer the same five "pretexts" for every target and
   then flip a coin. Now each country has its own CHARACTER, some are
   nuclear, one is an ally, and a hidden POSTURE decides whether they
   fold when you lean on them or call your bluff, and every country
   offers a graduated ladder of operations:

     SABRE-RATTLE  free. Threats and troop movements. The fragile ones
                   fold and pay tribute; the defiant and the nuclear
                   call your bluff and cost you a little standing.
     TARGETED STRIKE  a limited operation. Clean and spectacular against
                   a weak target; against a nuclear power it can escalate
                   into a real war or misfire into a catastrophe.
     FULL INVASION  the big commitment. Immediate flag-rally, then an
                   ONGOING war that resolves over months into victory or
                   quagmire, scaled by strength, nukes and Authority.
     REGIME CHANGE  a covert operation to install a friendly government.
                   Huge if it works and the resources flow; a scandal if
                   it is exposed, and the defiant ones usually expose it.

   Attacking an ALLY carries a steep diplomatic surcharge. Outcomes lean
   on the management reaction RNG (AD.reactRoll, off the card stream) so
   the same move never plays the same way twice. Every country and leader
   is fictional. Ongoing wars resolve on a war-local deterministic rng.
   ============================================================ */

/* A modern, geopolitics-flavoured roster. Each country offers only the
   operations that make sense against it (`ops`), so a great power can be
   sabre-rattled, allied with, or, if you are insane, invaded, but NOT quietly
   "regime-changed" like a banana republic. Fields:
     strength 0-3 (0 = uninhabited joke)
     nukes     a strike/invasion risks catastrophe
     posture   fragile (folds) / defiant (bluff) / wildcard / proxy
     tradeIncome  $B/month to the Treasury if you ALLY with them
     resource     $B/month to the Treasury if you ANNEX / conquer them
     annexCost    Treasury price to buy/annex a territory outright
   Leaders are fictional stand-ins; the country names are real, which is the joke. */
AD.WAR_TARGETS = [
  { id: 'cathay',    name: 'China',        leader: 'Chairman Chen',      strength: 3, nukes: true,  posture: 'defiant',
    ops: ['sabre', 'ally', 'strike', 'invade'], tradeIncome: 30, tell: 'A great power. A trade war, or a trade deal.' },
  { id: 'rus',       name: 'Russia',       leader: 'President Volkov',   strength: 3, nukes: true,  posture: 'defiant',
    ops: ['sabre', 'ally', 'strike', 'invade'], tradeIncome: 12, tell: 'A nuclear rival, mid-invasion of a neighbour.' },
  { id: 'iran',      name: 'Iran',         leader: 'the Supreme Council',strength: 2, nukes: false, posture: 'wildcard',
    ops: ['sabre', 'strike', 'invade', 'regime'], resource: 16, tell: 'Sanctioned, defiant, chasing a bomb.' },
  { id: 'hermit',    name: 'North Korea',  leader: 'the Supreme Guide',  strength: 2, nukes: true,  posture: 'wildcard',
    ops: ['sabre', 'ally', 'strike'], tradeIncome: 4, tell: 'Nuclear, isolated, oddly wants your attention.' },
  { id: 'ukrania',   name: 'Ukraine',      leader: 'President Bohdan',   strength: 2, nukes: false, posture: 'proxy',
    ops: ['sabre', 'ally'], tradeIncome: 6, tell: 'Already at war. Back them, or do not.' },
  { id: 'greenland', name: 'Greenland',    leader: 'the Premier',        strength: 0, nukes: false, posture: 'fragile',
    ops: ['sabre', 'ally', 'annex'], resource: 12, annexCost: 45, tell: 'Not for sale. Allegedly. Rare earths and ice.' },
  { id: 'northland', name: 'Canada',       leader: 'Prime Minister Aas', strength: 1, nukes: false, posture: 'fragile',
    ops: ['sabre', 'ally', 'annex', 'strike'], resource: 22, annexCost: 65, tell: 'The 51st state, if you ask nicely.' },
  { id: 'baldoro',   name: 'Panama',       leader: 'President Marchetti',strength: 1, nukes: false, posture: 'fragile',
    ops: ['sabre', 'strike', 'invade', 'regime', 'annex'], resource: 9, annexCost: 30, tell: 'It is about the canal. It was always the canal.' },
  { id: 'qadira',    name: 'Qatar',        leader: 'the Emir',           strength: 2, nukes: false, posture: 'fragile',
    ops: ['sabre', 'ally'], tradeIncome: 15, tell: 'Rich, generous with gifts, would rather pay than fight.' },
  { id: 'penguin',   name: 'the Heard Islands', leader: 'no one',        strength: 0, nukes: false, posture: 'fragile',
    ops: ['sabre', 'strike', 'annex'], resource: 1, annexCost: 5, tell: 'Population: penguins. Tariff them anyway.' }
];

AD.ensureAllies    = run => (run.allies    = run.allies    || {});
AD.ensureConquests = run => (run.conquests = run.conquests || {});
AD.isAlly     = (run, id) => !!(run.allies    && run.allies[id]);
AD.isConquered = (run, id) => !!(run.conquests && run.conquests[id]);

AD.warTargetById = id => AD.WAR_TARGETS.find(t => t.id === id);

/* Flags for the War Room front screen. Keyed by war-target id (which differs
   from the economy roster's ids), so the picker can show a country at a glance
   rather than as another line of text. */
AD.FLAG = {
  cathay:    '\u{1F1E8}\u{1F1F3}',
  rus:       '\u{1F1F7}\u{1F1FA}',
  iran:      '\u{1F1EE}\u{1F1F7}',
  hermit:    '\u{1F1F0}\u{1F1F5}',
  ukrania:   '\u{1F1FA}\u{1F1E6}',
  greenland: '\u{1F1EC}\u{1F1F1}',
  northland: '\u{1F1E8}\u{1F1E6}',
  baldoro:   '\u{1F1F5}\u{1F1E6}',
  qadira:    '\u{1F1F6}\u{1F1E6}',
  penguin:   '\u{1F427}',
  /* The State Department and the Economy key the SAME countries off the
     economy roster's ids, which differ from the war ids for these nine
     (saved games key alliances off the war ids, so neither can be renamed).
     Both of those front screens are flag grids, so both sets live here. */
  china:   '\u{1F1E8}\u{1F1F3}', russia: '\u{1F1F7}\u{1F1FA}', nkorea: '\u{1F1F0}\u{1F1F5}',
  ukraine: '\u{1F1FA}\u{1F1E6}', canada: '\u{1F1E8}\u{1F1E6}', panama: '\u{1F1F5}\u{1F1E6}',
  qatar:   '\u{1F1F6}\u{1F1E6}', heard:  '\u{1F427}',
  /* And the other ninety, shared by both grids. These live here rather
     than in wartargets.js because the free edition omits that file but
     still ships thirty-five of these countries in the Economy room: the
     flags are not the paid content, the operations are. */
  germany: '🇩🇪', uk: '🇬🇧', france: '🇫🇷', italy: '🇮🇹', spain: '🇪🇸',
  netherlands: '🇳🇱', belgium: '🇧🇪', switzerland: '🇨🇭', sweden: '🇸🇪', norway: '🇳🇴',
  ireland: '🇮🇪', austria: '🇦🇹', poland: '🇵🇱', denmark: '🇩🇰', finland: '🇫🇮',
  greece: '🇬🇷', portugal: '🇵🇹', hungary: '🇭🇺', poland2: '🇱🇹', serbia: '🇷🇸',
  belarus: '🇧🇾', iceland: '🇮🇸', luxembourg: '🇱🇺', malta: '🇲🇹', vatican: '🇻🇦',
  sanmarino: '🇸🇲', czechia: '🇨🇿', romania: '🇷🇴', turkey: '🇹🇷',
  mexico: '🇲🇽', brazil: '🇧🇷', argentina: '🇦🇷', venezuela: '🇻🇪', cuba: '🇨🇺',
  colombia: '🇨🇴', panama2: '🇵🇦', guatemala: '🇬🇹', haiti: '🇭🇹', elsalvador: '🇸🇻',
  nicaragua: '🇳🇮', bahamas: '🇧🇸', chile: '🇨🇱', peru: '🇵🇪',
  japan: '🇯🇵', india: '🇮🇳', skorea: '🇰🇷', australia: '🇦🇺', indonesia: '🇮🇩',
  taiwan: '🇹🇼', thailand: '🇹🇭', vietnam: '🇻🇳', philippines: '🇵🇭', singapore: '🇸🇬',
  malaysia: '🇲🇾', cambodia: '🇰🇭', nzealand: '🇳🇿', pakistan: '🇵🇰', bangladesh: '🇧🇩',
  afghanistan: '🇦🇫', myanmar: '🇲🇲', mongolia: '🇲🇳', srilanka: '🇱🇰', kazakhstan: '🇰🇿',
  uzbekistan: '🇺🇿', tuvalu: '🇹🇻', penguin2: '🐧',
  saudi: '🇸🇦', uae: '🇦🇪', israel: '🇮🇱', syria: '🇸🇾', iraq: '🇮🇶',
  jordan: '🇯🇴', lebanon: '🇱🇧', yemen: '🇾🇪', egypt: '🇪🇬', libya: '🇱🇾',
  nigeria: '🇳🇬', kenya: '🇰🇪', ethiopia: '🇪🇹', southafrica: '🇿🇦', rwanda: '🇷🇼',
  somalia: '🇸🇴', drc: '🇨🇩', morocco: '🇲🇦', tunisia: '🇹🇳', ghana: '🇬🇭',
  zimbabwe: '🇿🇼', azerbaijan: '🇦🇿', armenia: '🇦🇲', georgia2: '🇬🇪'
};


AD.ensureWars = function (run) { if (!run.wars) run.wars = []; return run.wars; };
AD.atWarWith = (run, targetId) => (run.wars || []).some(w => w.target === targetId && !w.done);

/* ---------- the operations ------------------------------------------------
   op.run returns an effect object plus optional MARKERS the applier ignores but
   doWarOp acts on: `ongoing` (start a war), `_ally` (sign an alliance -> monthly
   trade income), `_conquer` (annex/absorb -> monthly resource income). */
AD.WAR_OPS = [
  {
    id: 'sabre', label: 'Sabre-Rattle', icon: '🗣️',
    blurb: 'Threats and troop movements. Some fold and pay. Some call your bluff.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      /* `fold` is the per-country chance a threat actually works, set in
         wartargets.js so Luxembourg and Turkiye do not answer the same way.
         Countries without one fall back to the old posture heuristic. */
      const fold = (t.fold != null) ? t.fold
        : ((t.posture === 'fragile' || (t.strength <= 1 && t.posture !== 'defiant')) ? 0.85 : 0);
      if (roll < fold) {
        const tribute = Math.round((0.04 + (t.tradeIncome || t.resource || 0) * 0.004) * 100) / 100;
        return { base: 4, auth: 3, press: -1, cash: tribute,
          res: t.leader + ' folds within the hour, offering concessions, a trade "deal", and a very respectful statement. You pocket the tribute and the win.' };
      }
      return { base: 3, press: -2, courts: -1, auth: 1,
        res: t.leader + ' calls your bluff on live television and does not move an inch. The base likes the swagger; nothing actually changes.' };
    }
  },
  {
    id: 'ally', label: 'Cut a Deal', icon: '🤝',
    blurb: 'A summit, an aid package, a "historic" trade deal. Trade income flows to the Treasury.',
    run (run, t) {
      run.allies = run.allies || {};
      run.allies[t.id] = t.tradeIncome || 6;
      return { base: 2, press: 3, congress: 3, courts: 2, auth: 2, _ally: true,
        res: 'You sign a "historic" deal with ' + t.leader + '. The cameras love it, and ' + t.name +
             ' now sends about $' + (t.tradeIncome || 6) + 'B a month your way. Some of it is even trade.' };
    }
  },
  {
    id: 'annex', label: 'Buy / Annex', icon: '🗺️',
    blurb: 'Acquire the territory outright. Expansionism thrills the base; the map changes; the resources are yours.',
    run (run, t) {
      run.conquests = run.conquests || {};
      run.conquests[t.id] = t.resource || 5;
      return { base: 6, press: -4, courts: -4, congress: -3, auth: 4, _conquer: true,
        res: 'You add ' + t.name + ' to the map. The base is electric, the cartographers are furious, and roughly $' +
             (t.resource || 5) + 'B a month in resources now flows into the Treasury.' };
    }
  },
  {
    id: 'strike', label: 'Targeted Strike', icon: '🎯',
    blurb: 'A limited operation. Clean on the weak. A gamble on a nuclear power.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      /* `risk` is how badly a strike THERE can go, set per country in
         wartargets.js. It is not just strength: a nuclear rival is the obvious
         case, but so is any target where the fallout is political rather than
         radioactive. Countries with no risk set fall back to the old rule. */
      const risk = (t.risk != null) ? t.risk
        : (t.nukes ? 0.30 : t.strength >= 2 ? 0.20 : 0.05);
      if (t.nukes && roll < risk) {
        return { base: 2, street: -6, courts: -5, press: -6, congress: -4, auth: -2,
          res: 'The strike lands on a nuclear power and does not stay small. Retaliation is immediate, the markets crater, and "miscalculation" is on every screen.' };
      }
      if (roll < 0.12 + risk * 0.7) {
        return { base: 6, auth: 3, courts: -3, press: -3, street: -2, ongoing: true,
          res: 'The "limited" strike on ' + t.name + ' does not stay limited. They mobilise, and it is a real war now.' };
      }
      const loot = (t.resource || 0) >= 8 ? 0.08 : 0;
      return { base: 7, auth: 4, courts: -3, press: -3, street: -1, cash: loot,
        res: 'A clean, televised strike on ' + t.name + '. The footage is spectacular and, for tonight at least, nobody is shooting back.' };
    }
  },
  {
    id: 'invade', label: 'Full Invasion', icon: '⚔️', needsAuth: 40,
    blurb: 'The big one. An immediate flag-rally, then an ongoing war. Win it and the country is yours.',
    run (run, t) {
      return { base: 7, auth: 5, street: 2, congress: -5, courts: -6, press: -5, ongoing: true,
        res: 'You order the full invasion of ' + t.name + '. The base rallies to the flag; the institutions you never consulted do not.' };
    }
  },
  {
    id: 'regime', label: 'Regime Change', icon: '🕵️', needsAuth: 45,
    blurb: 'A covert operation to install a friend. Huge if it holds, a scandal if it leaks. Not an option against great powers.',
    run (run, t) {
      const roll = AD.reactRoll(run);
      const exposeRisk = (t.risk != null) ? AD.clamp(0.18 + t.risk * 0.5, 0.15, 0.6)
        : t.posture === 'wildcard' ? 0.42 : t.strength >= 2 ? 0.4 : 0.26;
      if (roll < exposeRisk) {
        return { base: -2, press: -7, courts: -6, congress: -4, auth: -1,
          res: 'The operation in ' + t.name + ' is exposed. There are documents, there are hearings, and there is a genuinely terrible week.' };
      }
      run.allies = run.allies || {};
      run.allies[t.id] = t.tradeIncome || t.resource || 8;
      return { base: 5, auth: 5, courts: -3, press: -3, _ally: true,
        res: 'A friendly government takes power in ' + t.name + ' overnight, expressing immediate and fulsome gratitude. The resources begin to flow your way.' };
    }
  }
];

AD.warOpById = id => AD.WAR_OPS.find(o => o.id === id);

/* ---------- the signature operation --------------------------------------
   Every country in wartargets.js carries ONE bespoke operation that exists
   nowhere else: the canal, the chip machines, the mega-prison, the Pontiff.
   It is the reason a hundred targets are a hundred targets and not one target
   with a hundred names. Signatures are ONCE PER TERM, so using one is a
   decision rather than a button you farm. */
AD.warOpsFor = function (t) {
  const shared = AD.WAR_OPS.filter(op => !t.ops || t.ops.indexOf(op.id) !== -1);
  return t.sig ? shared.concat([t.sig]) : shared;
};

/* Resolve an op id IN THE CONTEXT OF A TARGET, so 'sig' means that country's
   signature and not somebody else's. */
AD.warOpFor = function (t, id) {
  if (id === 'sig') return (t && t.sig) || null;
  return AD.warOpById(id);
};

AD.sigUsed = (run, id) => !!(run.warSigs && run.warSigs[id]);

/* War is paid for out of the NATIONAL TREASURY (run.purse), not the President's
   personal wealth, and it is expensive: costs scale with the target's strength,
   from tens of billions for a limited strike to hundreds of billions to invade a
   great power. Sabre-rattling is free. */
AD.warOpCostFor = function (run, t, op) {
  if (!op || !t) return 0;
  if (op.bespoke) return op.cost || 0;      // signatures carry their own price
  const s = t.strength || 0;
  if (op.id === 'ally')   return 10 + (t.tradeIncome || 6);   // aid package / summit
  if (op.id === 'annex')  return t.annexCost || 30;           // buy the territory
  if (op.id === 'strike') return 20 + s * 15;    // $20B .. $65B
  if (op.id === 'invade') return 60 + s * 60;    // $60B .. $240B
  if (op.id === 'regime') return 50 + s * 40;    // $50B .. $170B
  return 0;                                       // sabre
};

/* An operation is only available if THIS country offers it (t.ops). That is how
   great powers can be allied with or, at ruinous cost, invaded, but never simply
   "regime-changed", and how only territories can be annexed. */
AD.warOpAvailable = function (run, t, op) {
  if (!op) return { ok: false, reason: 'No such operation.' };
  if (op.bespoke) {
    if (op !== t.sig) return { ok: false, reason: 'Not an option here.' };
    if (op.once && AD.sigUsed(run, t.id)) return { ok: false, reason: 'Already done. Once was plenty.' };
    const c = op.cost || 0;
    if (c && AD.purse(run) < c) return { ok: false, reason: 'The Treasury cannot afford it.' };
    if (op.needsAuth && run.authority < op.needsAuth) return { ok: false, reason: 'Requires Authority ' + op.needsAuth + '.' };
    return { ok: true };
  }
  if (t.ops && t.ops.indexOf(op.id) === -1) return { ok: false, reason: 'Not an option here.' };
  if ((op.id === 'ally' || op.id === 'annex') && (AD.isAlly(run, t.id) || AD.isConquered(run, t.id)))
    return { ok: false, reason: 'Already done.' };
  if (op.id !== 'ally' && op.id !== 'annex' && AD.atWarWith(run, t.id))
    return { ok: false, reason: 'Already at war with ' + t.name + '.' };
  const cost = AD.warOpCostFor(run, t, op);
  if (cost && AD.purse(run) < cost) return { ok: false, reason: 'The Treasury cannot afford it.' };
  if (op.needsAuth && run.authority < op.needsAuth) return { ok: false, reason: 'Requires Authority ' + op.needsAuth + '.' };
  return { ok: true };
};

/* Start an ongoing war record (shared by the invasion op and the compatibility
   AD.declareWar used by section events). */
function startWar (run, t, loot) {
  AD.ensureWars(run);
  run.wars.push({ target: t.id, months: 0, done: false, loot: loot !== false });
  run.warLog = run.warLog || [];
  run.warLog.push({ name: t.name, won: null });
  run.stats = run.stats || {};
  run.stats.wars = (run.stats.wars || 0) + 1;
}

AD.doWarOp = function (run, targetId, opId) {
  const t = AD.warTargetById(targetId);
  const op = AD.warOpFor(t, opId);
  if (!t || !op) return { ok: false, reason: 'No such operation.' };
  const avail = AD.warOpAvailable(run, t, op);
  if (!avail.ok) return avail;

  const cost = AD.warOpCostFor(run, t, op);
  if (cost) AD.movePurse(run, -cost);          // war is paid from the Treasury

  /* A signature is a flat, written outcome rather than a die roll: the whole
     point of it is that THIS country answers in a way no other country can,
     so it does not get randomised into the same three paragraphs. */
  let eff;
  if (op.bespoke) {
    eff = Object.assign({}, op.eff);
    eff.res = op.res;
    if (op.ongoing) eff.ongoing = true;
    run.warSigs = run.warSigs || {};
    run.warSigs[t.id] = true;
    run.stats = run.stats || {};
    run.stats.warSigs = (run.stats.warSigs || 0) + 1;
  } else {
    eff = op.run(run, t) || {};
  }
  let res = eff.res; delete eff.res; delete eff._ally; delete eff._conquer;
  const ongoing = eff.ongoing; delete eff.ongoing;

  // Turning on a country you had ALLIED with is diplomatically ruinous, and it
  // tears up the deal (the trade income stops).
  const isAttack = op.bespoke ? !!op.hostile
    : (op.id === 'strike' || op.id === 'invade' || op.id === 'regime');
  if (isAttack && AD.isAlly(run, t.id)) {
    delete run.allies[t.id];
    eff.street = (eff.street || 0) - 4;
    eff.press = (eff.press || 0) - 4;
    eff.congress = (eff.congress || 0) - 4;
    res += ' Betraying an ally tears up the deal and the world takes note, at a steep and lasting price.';
  }

  // Boredom: war and conquest are the greatest show on earth; a trade deal is
  // paperwork. Applied here so the ally-betrayal surcharge above is already in eff.
  if (eff.fun == null) eff.fun = { sabre: 2, strike: 3, invade: 4, regime: 3, ally: -2, annex: 4 }[op.id] || 1;
  const deltas = AD.applySenateEffect(run, eff);
  if (ongoing) startWar(run, t);
  run.stats = run.stats || {};
  run.stats.warOps = (run.stats.warOps || 0) + 1;
  return { ok: true, target: t, op, deltas, res, ongoing };
};

/* Compatibility shim: section events and reactive crises call AD.declareWar to
   start a straight invasion. Keeps that path working (and now it actually fires,
   the old version rejected the unknown 'incident' pretext and did nothing). */
AD.declareWar = function (run, targetId) {
  const t = AD.warTargetById(targetId);
  if (!t) return { ok: false, reason: 'No such war.' };
  if (AD.atWarWith(run, targetId)) return { ok: false, reason: 'Already at war with ' + t.name + '.' };
  const deltas = AD.applySenateEffect(run, { base: 7, auth: 5, street: 2, congress: -5, courts: -6, press: -5 });
  startWar(run, t);
  return { ok: true, target: t, deltas, line: 'War declared on ' + t.name + '.' };
};

/* war-local deterministic rng, off the shared card stream */
function warRng (seed) {
  let s = (AD.Seed ? AD.Seed.hash(String(seed)) : 0x9e3779b9) || 1;
  return function () {
    s |= 0; s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Total monthly income the Treasury draws from standing alliances (trade) and
   conquered/annexed territory (resources). */
AD.treasuryIncome = function (run) {
  let sum = 0;
  if (run.allies)    Object.keys(run.allies).forEach(k => { sum += run.allies[k] || 0; });
  if (run.conquests) Object.keys(run.conquests).forEach(k => { sum += run.conquests[k] || 0; });
  return sum;
};

/* Monthly: alliances and conquests pay into the Treasury, then ongoing wars
   resolve over a few months into victory (the country becomes yours, with its
   resources) or quagmire. A weak target and high Authority make victory likely;
   nukes drag it down. */
AD.warTick = function (run) {
  const out = { resolved: [] };

  // Standing income first, so a term spent building an empire actually pays.
  const income = AD.treasuryIncome(run);
  if (income) { AD.movePurse(run, income); out.income = income; }

  if (!run.wars || !run.wars.length) return out;

  run.wars.forEach(w => {
    if (w.done) return;
    w.months++;
    const t = AD.warTargetById(w.target);
    const rng = warRng((run.seed || 'X') + w.target + w.months);
    if (rng() > 0.35 + w.months * 0.15 && w.months < 5) return;   // still ongoing

    w.done = true;
    // `bias` is the per-country thumb on the scale: some places are simply
    // harder to finish than their strength number suggests. See wartargets.js.
    const winChance = AD.clamp(
      0.5 + (run.authority - 50) * 0.004 + (3 - t.strength) * 0.12 - (t.nukes ? 0.12 : 0)
        + (t.bias || 0),
      0.10, 0.92);
    const won = rng() < winChance;
    let eff, res;
    if (won) {
      // A won war ANNEXES the country: its resources now flow to the Treasury.
      run.conquests = run.conquests || {};
      run.conquests[t.id] = t.resource || t.tradeIncome || 6;
      eff = { base: 6, street: 4, auth: 3, courts: -1 };
      res = 'Victory in ' + t.name + '. It is yours now, and about $' + run.conquests[t.id] +
            'B a month in resources flows into the Treasury. There will be a parade.';
    } else {
      eff = { base: -6, street: -7, courts: -5, press: -4, congress: -3, auth: -2 };
      res = 'The war in ' + t.name + ' has become a quagmire. The body bags are on the news and the street has turned.';
    }
    w.won = won;
    const rec = (run.warLog || []).slice().reverse().find(x => x.name === t.name && x.won === null);
    if (rec) rec.won = won;
    const deltas = AD.applySenateEffect(run, eff);
    out.resolved.push({ target: t, won, res, deltas });
  });

  run.wars = run.wars.filter(w => !w.done);
  return out;
};

AD.warStatus = function (run) {
  const active = (run.wars || []).filter(w => !w.done);
  return { active: active.length, list: active };
};
