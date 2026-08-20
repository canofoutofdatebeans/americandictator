/* ============================================================
   AMERICAN DICTATOR, moves.js
   BESPOKE MOVES: the option only THIS one gives you.

   The shared action sets (Federal Force, Pressure, Sue, Acknowledge...)
   are the verbs available against anybody. This file adds the move that
   only works on one specific city, judge, outlet or senator, written for
   who they actually are. Delacroix gets a parade. Justice Ambry gets a
   number. The Beacon gets its printer contract quietly bought.

   A bespoke move is the same shape as a shared one:
     { id, label, icon, cost?, blurb, once?, run(run, entity) -> effect }
   `once: true` means it can only ever be used on that entity once, which
   is tracked on the entity itself as `usedMoves`.

   Merged in by AD.movesFor(kind, entity), which every room's renderer
   calls instead of reading the shared list directly.
   ============================================================ */

/* ---------- THE STREET: one signature move per city ---------------------- */
AD.CITY_MOVES = {
  portsmouth: {
    id: 'port-lockout', label: 'Lock Out the Docks', icon: '\u{1F6A2}', cost: 0.25, once: true,
    blurb: 'Federalise the port. The longshoremen go home, and so does everything on the water.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 30, 0, 100);
      c.occupied = 3;
      return { street: 5, base: 4, press: -4, congress: -4, courts: -3, cash: -0.1, auth: 3,
        res: 'The port closes at noon. Forty thousand containers stop moving, and a supply chain nobody could name yesterday leads every broadcast by Thursday.' };
    }
  },
  lakeside: {
    id: 'lake-regatta', label: 'Hold a Patriot Regatta', icon: '\u{1F6A4}', cost: 0.15, once: true,
    blurb: 'A boat parade in your honour. Cheap, loud, and impossible to argue with.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 14, 0, 100);
      return { street: 2, base: 7, press: -2, auth: 1, fun: 5,
        res: 'Eleven hundred boats fly your flag across the lake. Four of them sink. The footage is, by unanimous agreement, spectacular.' };
    }
  },
  granite: {
    id: 'granite-statue', label: 'Commission the Statue', icon: '\u{1F5FF}', cost: 0.4, once: true,
    blurb: 'The quarry town carves you, sixty feet of it, facing the interstate.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 18, 0, 100);
      return { street: 3, base: 8, press: -3, congress: -2, cash: -0.1, auth: 2, fun: 4,
        res: 'The quarry reopens to carve your likeness at sixty feet. The sculptor, privately, describes the commission as "the end of my serious career."' };
    }
  },
  harbor: {
    id: 'harbor-donors', label: 'Dine the Yacht Club', icon: '\u{1F942}', once: true,
    blurb: 'The money in Harbor Heights would very much like a photograph with you.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 10, 0, 100);
      return { street: 1, base: -2, press: 2, congress: 4, cash: 0.7, auth: 1,
        res: 'Eighty people who have never once worried about a bill each hand you a cheque, then ask, gently, whether the tariffs could possibly exclude boats.' };
    }
  },
  delacroix: {
    id: 'delacroix-parade', label: 'Lead the Parade', icon: '\u{1F3BA}', cost: 0.2, once: true,
    blurb: 'Delacroix will parade for anything. Put yourself at the front of it.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 22, 0, 100);
      return { street: 4, base: 9, press: -2, courts: -1, auth: 2, fun: 6,
        res: 'You lead a parade through Delacroix on a float shaped, for reasons nobody will explain, like an eagle. The crowd is enormous. The float is not roadworthy.' };
    }
  },
  summit: {
    id: 'summit-resort', label: 'Open a Resort There', icon: '\u{1F3D4}\u{FE0F}', cost: 0.5, once: true,
    blurb: 'The mountain is federal land. It is about to be a lot less federal.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 8, 0, 100);
      return { street: -2, base: 3, press: -5, courts: -6, congress: -3, cash: 1.2, auth: 2,
        res: 'A protected ridgeline is reclassified, sold, and broken ground on within a fortnight. Your name goes up in a font visible from the valley floor.' };
    }
  },
  rivertown: {
    id: 'river-levee', label: 'Announce the Levee', icon: '\u{1F30A}', cost: 0.35, once: true,
    blurb: 'Rivertown floods every spring. Promise them a wall of the good kind.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 34, 0, 100);
      return { street: 7, base: 5, press: 4, congress: 3, cash: -0.2, auth: 1,
        res: 'You promise Rivertown the greatest levee in the history of levees. Ground is broken on camera. The engineering survey, when it arrives, is not read.' };
    }
  },
  crestview: {
    id: 'crest-suburb', label: 'Address the Cul-de-Sacs', icon: '\u{1F3E1}', once: true,
    blurb: 'A televised address to suburban homeowners about property values. Nothing else.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 16, 0, 100);
      return { street: 4, base: 2, press: 1, congress: 2, auth: 1,
        res: 'Eleven minutes on garden fences, kerb appeal and "the character of the neighbourhood." Not one policy is mentioned. It polls better than anything else you do all year.' };
    }
  },
  ironside: {
    id: 'iron-mill', label: 'Reopen the Mill', icon: '\u{1F3ED}', cost: 0.45, once: true,
    blurb: 'Ironside has not made steel in thirty years. Announce that it does again.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 28, 0, 100);
      return { street: 5, base: 10, press: -3, congress: 2, cash: -0.3, auth: 2, fun: 3,
        res: 'The mill gates reopen for one shift, one photograph, and one enormous cheque. Two hundred people are hired. Four hundred more drive in from three states away hoping.' };
    }
  },
  baymont: {
    id: 'bay-golf', label: 'Play the Municipal Course', icon: '\u{26F3}', once: true,
    blurb: 'A Saturday round in Baymont, motorcade and all, billed as a working visit.',
    run (run, c) {
      c.unrest = AD.clamp(c.unrest - 6, 0, 100);
      return { street: 1, base: 3, press: -4, congress: -2, cash: -0.05, auth: 0, fun: 7,
        res: 'You play eighteen holes and the visit is logged as official state business. You shoot, according to the official scorecard, a 61.' };
    }
  }
};

/* ---------- THE BENCH: one signature move per judge ---------------------- */
AD.JUDGE_MOVES = {
  stone: {
    id: 'stone-lunch', label: 'The Quiet Lunch', icon: '\u{1F37D}\u{FE0F}', once: true,
    blurb: 'Nothing is discussed. That is the entire point of the lunch.',
    run (run, j) {
      j.align = AD.clamp(j.align + 16, 0, 100);
      return { courts: 4, press: -2, auth: 1,
        res: 'You and the Chief Justice have lunch and discuss absolutely nothing of substance, at length, on the record. Every judge in the country understands the message by Tuesday.' };
    }
  },
  ambry: {
    id: 'ambry-rv', label: 'Gift the Motor Home', icon: '\u{1F69A}', cost: 0.06, once: true,
    blurb: 'Justice Ambry has always wanted one. It will not appear on any form.',
    run (run, j) {
      j.align = AD.clamp(j.align + 26, 0, 100);
      return { courts: 6, press: -5, congress: -3, auth: 2,
        res: 'A luxury motor home changes hands and appears on no disclosure anywhere. Justice Ambry describes it, when finally asked, as "a loan between friends of long standing."' };
    }
  },
  voss: {
    id: 'voss-legacy', label: 'Name a Building After Her', icon: '\u{1F3DB}\u{FE0F}', cost: 0.1, once: true,
    blurb: 'Voss writes for history. Offer her some, in marble, with her name on it.',
    run (run, j) {
      j.align = AD.clamp(j.align + 12, 0, 100);
      return { courts: 3, press: 2, congress: -1, cash: -0.05, auth: 1,
        res: 'You put her name on a federal courthouse. She accepts the honour, thanks you graciously, and rules against you eight weeks later in a footnote of genuine cruelty.' };
    }
  },
  kerrey: {
    id: 'kerrey-spotlight', label: 'Threaten a Prime-Time Segment', icon: '\u{1F4FA}', once: true,
    blurb: 'Kerrey cannot stand being looked at. Point a camera and describe it.',
    run (run, j) {
      j.align = AD.clamp(j.align + 22, 0, 100);
      return { courts: 5, press: -4, street: -2, auth: 2,
        res: 'You mention, in passing, how interested the networks are in Justice Kerrey personally. He rules your way within the week and does not sleep for a fortnight.' };
    }
  },
  delph: {
    id: 'delph-recusal', label: 'Demand Her Recusal', icon: '\u{1F4DC}', once: true,
    blurb: 'Delph will never break. Get her off the case instead of trying.',
    run (run, j) {
      j.align = AD.clamp(j.align + 4, 0, 100);
      return { courts: 3, press: -6, congress: -3, street: -2, auth: 3,
        res: 'You file to have Justice Delph removed from every case touching you, on the grounds that she is biased against you, which she now spectacularly is.' };
    }
  },
  mott: {
    id: 'mott-poll', label: 'Show Him the Polling', icon: '\u{1F4CA}', once: true,
    blurb: 'Mott goes whichever way the wind does. Hand him a weather report.',
    run (run, j) {
      j.align = AD.clamp(j.align + 18, 0, 100);
      return { courts: 4, press: -2, auth: 1,
        res: 'Somebody leaves polling on Justice Mott’s desk showing your position at sixty-one percent. The number is invented. His next opinion cites "evolving public understanding."' };
    }
  },
  reyes: {
    id: 'reyes-federalist', label: 'Out-Quote Him', icon: '\u{1F4D6}', once: true,
    blurb: 'Reyes quotes the Founders at you. Have somebody find you better quotes.',
    run (run, j) {
      j.align = AD.clamp(j.align + 8, 0, 100);
      return { courts: 2, press: 3, base: 2, congress: 1, auth: 1,
        res: 'Your counsel spends a fortnight assembling Founders’ quotations that appear to endorse you. Two are real. Judge Reyes writes a dissent identifying which two.' };
    }
  },
  hale: {
    id: 'hale-mortgage', label: 'Refinance His Mortgage', icon: '\u{1F3E6}', cost: 0.04, once: true,
    blurb: 'A very understanding rate, from a very understanding institution.',
    run (run, j) {
      j.align = AD.clamp(j.align + 28, 0, 100);
      return { courts: 6, press: -4, congress: -2, auth: 2,
        res: 'A bank with business before his court offers Judge Hale a rate no human being has ever been offered. He takes it. The paperwork is immaculate and means nothing.' };
    }
  },
  okafor: {
    id: 'okafor-workload', label: 'Bury Her in Docket', icon: '\u{1F4C1}', once: true,
    blurb: 'You cannot move Okafor. You can, however, give her four hundred other cases.',
    run (run, j) {
      j.align = AD.clamp(j.align + 6, 0, 100);
      return { courts: 4, press: -3, congress: -2, auth: 2,
        res: 'Judge Okafor’s district is quietly assigned every immigration case in three states. She still rules against you, just eleven months later, which was the entire objective.' };
    }
  },
  vane: {
    id: 'vane-reappoint', label: 'Dangle the Reappointment', icon: '\u{1F517}', once: true,
    blurb: 'Vane is up for reappointment and nervous. Mention it, warmly, in public.',
    run (run, j) {
      j.align = AD.clamp(j.align + 30, 0, 100);
      return { courts: 5, press: -3, congress: -2, auth: 2,
        res: 'You praise Judge Vane by name as "a fair man, a very fair man, we will see." He understands the sentence completely. So does every other judge up for renewal.' };
    }
  }
};

/* ---------- THE PRESS ROOM: one signature move per outlet ---------------- */
AD.OUTLET_MOVES = {
  scream: {
    id: 'scream-splash', label: 'Dictate Tomorrow’s Splash', icon: '\u{1F4E2}', once: true,
    blurb: 'The Scream will print anything. Give it something enormous and untrue.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 12, 0, 100);
      if (AD.moveTruth) AD.moveTruth(run, 9);
      return { press: 3, base: 8, courts: -2, street: -2, auth: 2, fun: 4,
        res: 'You phone in the front page yourself. Seventy-two point type, one adjective per word, and a claim so large that three other papers have to cover the claim rather than the facts.' };
    }
  },
  beacon: {
    id: 'beacon-printer', label: 'Buy Their Printing Contract', icon: '\u{1F5A8}\u{FE0F}', cost: 0.08, once: true,
    blurb: 'You cannot buy The Beacon. You can buy the company that puts ink on it.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 14, 0, 100);
      return { press: 4, courts: -4, congress: -3, cash: -0.08, auth: 2,
        res: 'A friendly holding company acquires the press that physically prints The Beacon. Nothing is censored. Deliveries simply begin arriving at eleven in the morning.' };
    }
  },
  amalg: {
    id: 'amalg-merger', label: 'Approve Their Merger', icon: '\u{1F91D}', once: true,
    blurb: 'Amalgamated has a deal sitting with the regulator. Regulators can be enthusiastic.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 24, 0, 100);
      return { press: 6, congress: -3, courts: -4, cash: 0.4, auth: 2,
        res: 'The merger clears in nine days, a record. Amalgamated’s coverage of you softens the same afternoon, which everyone notices and nobody can prove.' };
    }
  },
  meridian: {
    id: 'meridian-pool', label: 'Strip Their Pool Seat', icon: '\u{1F6AB}', once: true,
    blurb: 'Take The Meridian’s chair out of the briefing room. Physically.',
    run (run, o) {
      o.stance = AD.clamp(o.stance - 6, 0, 100);
      return { press: -5, base: 7, courts: -3, street: -2, auth: 3, fun: 3,
        res: 'Their chair is removed from the briefing room overnight. The correspondent stands for the entire briefing, which photographs far better for them than sitting ever did.' };
    }
  },
  wire: {
    id: 'wire-style', label: 'Rewrite Their Style Guide', icon: '\u{1F4DA}', once: true,
    blurb: 'The wire feeds every other paper. Change one word and you change all of them.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 16, 0, 100);
      if (AD.moveTruth) AD.moveTruth(run, 6);
      return { press: 5, base: 2, courts: -2, auth: 2,
        res: 'After a long and extremely boring negotiation, the wire agrees that your policies will be described as "contested" rather than "unlawful." Two hundred papers change overnight.' };
    }
  },
  ledger: {
    id: 'ledger-bailout', label: 'Bail Out the Ledger', icon: '\u{1F4B8}', cost: 0.05, once: true,
    blurb: 'They are three months from folding. Be the reason they are not.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 30, 0, 100);
      return { press: 5, congress: -2, courts: -2, cash: -0.05, auth: 1,
        res: 'A rescue package arrives from a donor with no media experience whatsoever. The Ledger survives, grateful, and its editorial board discovers a new appreciation for nuance.' };
    }
  },
  feed: {
    id: 'feed-algo', label: 'Ask for the Algorithm', icon: '\u{2699}\u{FE0F}', once: true,
    blurb: 'Not censorship. Just a small adjustment to what floats to the top.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 20, 0, 100);
      if (AD.moveTruth) AD.moveTruth(run, 7);
      return { press: 4, base: 6, courts: -4, street: -3, auth: 3,
        res: 'A weighting is changed. Nothing is deleted, nothing is banned, and somehow your posts are the first thing ninety million people see before breakfast.' };
    }
  },
  clarion: {
    id: 'clarion-buy', label: 'Just Buy It Outright', icon: '\u{1F4B0}', cost: 0.03, once: true,
    blurb: 'The Clarion has wanted to be owned for years. Oblige it.',
    run (run, o) {
      o.owned = true; o.stance = 100;
      return { press: 4, base: 2, courts: -3, congress: -2, cash: -0.03, auth: 2,
        res: 'You buy The Clarion for less than the cost of the motorcade. The masthead keeps its name. The editorial line does not keep anything.' };
    }
  },
  dispatch: {
    id: 'dispatch-local', label: 'Give Them the Exclusive', icon: '\u{1F33E}', once: true,
    blurb: 'Hand a national scoop to a regional paper. They will never recover from the honour.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 22, 0, 100);
      return { press: 3, base: 5, street: 3, congress: 1, auth: 1,
        res: 'The Prairie Dispatch gets a national exclusive ahead of every wire on Earth. They print it under a headline in a font size their printer has never had cause to use.' };
    }
  },
  gazette: {
    id: 'gazette-source', label: 'Find Their Source', icon: '\u{1F575}\u{FE0F}', cost: 0.04, once: true,
    blurb: 'Do not fight the investigations desk. Find out who is feeding it.',
    run (run, o) {
      o.stance = AD.clamp(o.stance - 4, 0, 100);
      return { press: -4, base: 5, courts: -6, congress: -4, street: -2, auth: 4,
        res: 'A leak investigation identifies a mid-level official with a mortgage and two children. The Gazette’s pipeline dries up inside a week. So does everyone else’s.' };
    }
  },
  pod: {
    id: 'pod-guest', label: 'Go On the Show Yourself', icon: '\u{1F3A7}', once: true,
    blurb: 'Three unedited hours in a basement. No follow-ups, no fact-checks, enormous reach.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 18, 0, 100);
      if (AD.moveTruth) AD.moveTruth(run, 5);
      return { press: -2, base: 11, congress: -2, courts: -2, auth: 2, fun: 6,
        res: 'Three hours, one microphone, no editor and no follow-up questions. You say four things that would have ended a presidency in 1998. It is the most-listened episode of the year.' };
    }
  },
  weekly: {
    id: 'weekly-preempt', label: 'Pre-empt the Takedown', icon: '\u{1F4F0}', once: true,
    blurb: 'Their nine-thousand-word piece drops Friday. Break it yourself on Thursday.',
    run (run, o) {
      o.stance = AD.clamp(o.stance + 8, 0, 100);
      if (AD.moveTruth) AD.moveTruth(run, 4);
      return { press: 2, base: 6, congress: -1, auth: 2, fun: 3,
        res: 'You release your own version of their investigation a day early, shorter, funnier and wrong in three places. By Friday the story is your version of the story.' };
    }
  }
};

/* ---------- merge helper ------------------------------------------------- */
/* Rooms call this instead of reading the shared list directly, so a bespoke
   move slots in beside the shared verbs with no per-room special-casing. */
AD.MOVE_TABLES = {
  city:   { shared: () => AD.STREET_ACTIONS, table: () => AD.CITY_MOVES },
  judge:  { shared: () => AD.COURT_ACTIONS,  table: () => AD.JUDGE_MOVES },
  outlet: { shared: () => AD.PRESS_ACTIONS,  table: () => AD.OUTLET_MOVES }
};

AD.movesFor = function (kind, entity) {
  const t = AD.MOVE_TABLES[kind];
  if (!t) return [];
  const shared = t.shared() || [];
  const mv = (t.table() || {})[entity && entity.id];
  if (!mv) return shared.slice();
  // A spent one-shot stays visible but disabled, so the player can still read
  // what it was; AD.moveSpent is what the room's availability check consults.
  return shared.concat([Object.assign({ bespoke: true }, mv)]);
};

AD.moveSpent = function (entity, moveId) {
  return !!(entity && entity.usedMoves && entity.usedMoves.indexOf(moveId) !== -1);
};

AD.markMoveUsed = function (entity, moveId) {
  if (!entity) return;
  entity.usedMoves = entity.usedMoves || [];
  if (entity.usedMoves.indexOf(moveId) === -1) entity.usedMoves.push(moveId);
};

/* Run a bespoke move: apply its effect through the shared applier, mark it
   spent if it is a one-shot, and hand back the resolution line. */
AD.runBespoke = function (run, entity, move) {
  const eff = Object.assign({}, move.run(run, entity));
  const res = eff.res; delete eff.res;
  if (eff.fun == null) eff.fun = 1;
  const deltas = AD.applySenateEffect(run, eff);
  if (move.once) AD.markMoveUsed(entity, move.id);
  return { ok: true, deltas: deltas, res: res, move: move };
};
