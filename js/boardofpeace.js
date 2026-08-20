/* ============================================================
   AMERICAN DICTATOR, boardofpeace.js
   THE BOARD OF PEACE.

   A prestigious international body, founded by you, chaired by you,
   headquartered in one of your own buildings. Membership costs one
   billion dollars, payable to a foundation whose accounts are not
   public. In exchange a country receives a seat, a certificate, and a
   photograph.

   THE JOKE IS THE ACCEPTANCE RATE. The countries whose endorsement
   would actually mean something, the large democracies and the G7,
   decline instantly and say why. The countries that say yes are the
   ones buying something: sanctions relief, a blind eye, a photograph
   with a President. So the Board fills up with exactly the membership
   that makes it worthless, and every seat sold makes the next serious
   country less likely to join.

   Mechanically it is a slow, dirty income engine with rising exposure:
   real money every month, and a Press and Courts bill that grows with
   the membership list.
   ============================================================ */

AD.BOARD_FEE = 1;                 // $1B a seat
AD.BOARD_DUES = 0.045;            // $45M per member per month, into your pocket

/* Who joins. A country's answer is decided by its `kind` from the shared
   100-nation roster, so the Board is wired straight into the diplomacy
   the player is already doing. */
AD.BOARD_STANCE = {
  ally:      { join: false, why: 'Declines. Politely, in writing, within the hour.' },
  partner:   { join: false, why: 'Declines, citing "existing multilateral commitments."' },
  rival:     { join: false, why: 'Declines, and leaks your invitation to a newspaper.' },
  strongman: { join: true,  why: 'Accepts immediately and asks whether the fee can be paid in kind.' },
  oil:       { join: true,  why: 'Accepts, and asks for two seats.' },
  rogue:     { join: true,  why: 'Accepts before you have finished the sentence.' },
  joke:      { join: true,  why: 'Accepts. It is not clear who accepted, or on whose behalf.' }
};

/* The handful of countries whose refusal is the whole point. Named so their
   answer is specific rather than generic. */
AD.BOARD_REFUSALS = {
  germany:  'The Chancellor asks, on an open line, what the Board is for. Nobody in your delegation can answer.',
  japan:    'Declines with such elaborate courtesy that it takes an hour to realise it was a refusal.',
  uk:       'Declines, then briefs a tabloid that it declined, which is the actual message.',
  france:   'Declines in a two-page letter about the meaning of the word "peace."',
  canada:   'Declines, and publishes the invitation in full, including the wire instructions.',
  italy:    'Declines warmly, invites you to dinner instead, and pays for the dinner.',
  china:    'Declines, and founds a rival body the following month with better catering.',
  india:    'Declines, noting that it is already in four organisations that do this.',
  brazil:   'Declines, and asks whether the fee is per year or in perpetuity. Both answers are bad.',
  skorea:   'Declines. Their foreign ministry requests, in writing, that you stop calling.',
  australia:'Declines by text message, at four in the morning, in one word.',
  norway:   'Declines, and points out that they already administer an actual peace prize.'
};

AD.boardMembers = run => (run.boardMembers || []);
AD.onBoard = (run, id) => AD.boardMembers(run).indexOf(id) !== -1;
AD.boardRefused = (run, id) => (run.boardRefused || []).indexOf(id) !== -1;

/* Everyone still invitable: on the roster, not a member, not already refused. */
AD.boardCandidates = function (run) {
  return (AD.ECON_NATIONS || []).filter(n => !AD.onBoard(run, n.id) && !AD.boardRefused(run, n.id));
};

/* Monthly dues, and the bill that comes with them. */
AD.boardIncome = run => AD.boardMembers(run).length * AD.BOARD_DUES;

/* Exposure rises with the membership list: a Board of nobody-in-particular is
   embarrassing, and the embarrassment is cumulative. */
AD.boardExposure = function (run) {
  const n = AD.boardMembers(run).length;
  if (!n) return 0;
  return Math.min(6, 1 + Math.floor(n / 3));
};

/* Will they join? Deterministic, so the same seed gives the same answers, and
   an honest refusal is always an honest refusal. */
AD.boardWouldJoin = function (run, nation) {
  if (!nation) return false;
  if (AD.BOARD_REFUSALS[nation.id]) return false;          // the named refusals never join
  const st = AD.BOARD_STANCE[nation.kind];
  return !!(st && st.join);
};

AD.boardReason = function (nation) {
  if (AD.BOARD_REFUSALS[nation.id]) return AD.BOARD_REFUSALS[nation.id];
  const st = AD.BOARD_STANCE[nation.kind];
  return st ? st.why : 'Declines without explanation.';
};

/* Send the invitation. The fee is only charged when they ACCEPT: an invitation
   that gets refused costs you nothing but the humiliation, which is the
   correct incentive and the funnier one. */
AD.inviteToBoard = function (run, nationId) {
  const n = AD.econNation(nationId);
  if (!n) return { ok: false, reason: 'No such country.' };
  if (AD.onBoard(run, nationId)) return { ok: false, reason: 'Already a member.' };
  if (AD.boardRefused(run, nationId)) return { ok: false, reason: 'They have already declined.' };

  const joins = AD.boardWouldJoin(run, n);
  const why = AD.boardReason(n);

  if (!joins) {
    run.boardRefused = run.boardRefused || [];
    run.boardRefused.push(nationId);
    // A public refusal from a country that matters costs you standing.
    const eff = { press: -3, base: -1, congress: -1, fun: -1 };
    const deltas = AD.applySenateEffect(run, eff);
    return { ok: true, joined: false, nation: n, deltas: deltas,
      res: n.name + ' declines the invitation. ' + why };
  }

  if (run.cash < AD.BOARD_FEE) return { ok: false, reason: 'You cannot cover the seat.' };
  run.cash = Math.round((run.cash - AD.BOARD_FEE) * 100) / 100;
  run.boardMembers = run.boardMembers || [];
  run.boardMembers.push(nationId);

  // Seats are sold, not won: the base loves the spectacle, everyone who can
  // read a balance sheet does not.
  const eff = { base: 3, press: -4, courts: -3, congress: -2, fun: 3 };
  const deltas = AD.applySenateEffect(run, eff);
  return { ok: true, joined: true, nation: n, deltas: deltas,
    res: n.name + ' joins the Board of Peace. ' + why +
         ' The fee clears the same afternoon, through a foundation, in a currency nobody asked about.' };
};

/* Paid out from Engine.advance() alongside the other passive income. */
AD.boardTick = function (run) {
  const inc = AD.boardIncome(run);
  if (inc) run.cash = Math.round((run.cash + inc) * 100) / 100;
  return inc;
};
