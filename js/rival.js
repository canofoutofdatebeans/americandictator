/* ============================================================
   AMERICAN DICTATOR, rival.js
   THE OPPOSITION, one woman who does not go away.

   Every crisis in the deck is a thing that happens TO you. This is a
   person who happens BACK. Cordelia Ruiz-Bloom, the Opposition Leader,
   is a recurring arc rather than a card: she surfaces every few months,
   she remembers exactly how you treated her last time, and, crucially,
   she gets STRONGER the more authoritarian you become. A strongman
   manufactures his own opposition; the harder you press, the bigger the
   thing pressing back.

   STRENGTH (0-10). Rises with your Authority and every time you feed her
   a martyrdom (attacking her publicly), falls when you co-opt her quietly
   or when she simply has nothing to push against. High strength leaks
   into the Street and Congress between instalments, and decides the final
   confrontation: a rival left to grow becomes the spine of the endgame,
   the person the election, or the contest, actually turns on.

   The arc runs on TERM months, so a second term gets a fresh, angrier
   Cordelia who has watched you do all of this once already.

   Entirely fictional, like everyone in this file.
   ============================================================ */

(function () {

const E = AD.CAST;

AD.RIVAL_MAX = 10;
AD.RIVAL_FIRST = 5;        // term month she first surfaces
AD.RIVAL_GAP = 9;          // months between instalments at low strength

AD.rivalState = function (run) {
  if (!run.rival || run.rival.term !== run.term) {
    // A new term inherits how strong she got, but re-opens the arc: she does
    // not restart from nothing just because you won an election. If anything,
    // winning one while she watched is the thing that radicalised her.
    const carried = run.rival ? Math.min(AD.RIVAL_MAX, run.rival.strength + (run.term > 1 ? 2 : 0)) : 1;
    run.rival = { term: run.term, stage: 0, next: AD.RIVAL_FIRST,
                  strength: run.term > 1 ? carried : 1, over: false, humbled: 0 };
  }
  return run.rival;
};
AD.rivalStrength = run => (run.rival ? run.rival.strength : 1);
AD.rivalLabel = function (run) {
  const s = AD.rivalStrength(run);
  return s >= 9 ? 'A Government-in-Waiting' : s >= 7 ? 'A Real Threat'
       : s >= 5 ? 'A Movement' : s >= 3 ? 'Organising' : 'A Nuisance';
};
AD.bumpRival = function (run, n) {
  const r = AD.rivalState(run);
  r.strength = AD.clamp(r.strength + n, 0, AD.RIVAL_MAX);
  return r.strength;
};

/* ---------- the instalments ----------------------------------------------
   Each is a normal card; `rivalUp` on a choice feeds or starves her AFTER the
   meters land, so a choice can be cheap tonight and expensive in the person it
   creates. She is written sharp: the funniest, most competent voice in the
   opposition, which is exactly what makes her dangerous. ------------------- */
AD.RIVAL_STAGES = [

  /* 0 ---- she underestimates you, on camera, for the last time -------- */
  { id:'riv-1', title:'The Woman on the Sunday Show', who:E.opp, tags:['press','power'],
    text:`Cordelia Ruiz-Bloom went on the Sunday show and called you, with a small smile, "a `+
         `weekend king." The clip is everywhere. Your people are furious. She is, annoyingly, `+
         `very good on television, and she has just discovered that being very good on television `+
         `about you is the best career move available in the country.`,
    choices:[
      { label:'Give her a nickname. Make it personal.', wild:true, rivalUp:2,
        eff:{ base:6, press:-3, auth:1 },
        res:`You brand her on the platform by breakfast. It trends. It also introduces forty million people who had never heard of Cordelia Ruiz-Bloom to Cordelia Ruiz-Bloom, free of charge, with your own name attached.` },
      { label:'Ignore her. She is a nobody.', rivalUp:1,
        eff:{ base:1 },
        res:`You say nothing, which is correct, and costs nothing, and she spends the silence building a mailing list that will outlive your administration.` },
      { label:'Invite her to the White House. Kill her with access.', rivalUp:-2,
        eff:{ base:-2, congress:3, press:3 },
        res:`You have her in for coffee and a photo. Her base calls it a sellout; your base is confused; and for three quiet months she is neutralised by the simple horror of being seen getting along with you.` } ] },

  /* 1 ---- she stops being a pundit and starts being an organiser ------- */
  { id:'riv-2', title:'The Coalition', who:E.opp, tags:['congress','street'],
    text:`It is not a talk-show hit any more. Cordelia has a coalition: the unions you insulted, the `+
         `suburbs you lost, three governors and a faith group nobody expected. They have a name, a `+
         `colour, and a very disciplined refusal to take your bait. "She learned," Deborah notes, `+
         `unhappily. "That is the dangerous kind."`,
    choices:[
      { label:'Split the coalition. Buy off the weakest partner.', rivalUp:-2,
        eff:{ base:-1, congress:4, press:-2, courts:-2, cash:-0.2, auth:1 },
        res:`You peel off one governor with a highway and a phone call. The coalition wobbles. Cordelia loses a month rebuilding trust, and learns, for next time, exactly which of her friends has a price.` },
      { label:'Call the whole thing a foreign plot. On no evidence.', wild:true, rivalUp:2,
        eff:{ base:6, press:-5, courts:-3, street:-3, auth:2 },
        res:`You allege the coalition is funded from abroad, which is false, which everyone knows is false, and which turns a political coalition into a civil-liberties cause overnight. It doubles in size by Friday.` },
      { label:'Out-organise them. Feed your own base harder.', rivalUp:0,
        eff:{ base:5, press:-2, street:-2, auth:1 },
        res:`You do not attack the coalition; you simply throw a bigger, louder rally forty miles away on the same night. The country now has two movements, and everyone can feel the temperature in the room change.` } ] },

  /* 2 ---- her rallies start out-drawing yours ------------------------- */
  { id:'riv-3', title:'The Bigger Crowd', who:E.poll, tags:['base','street'],
    text:`Nadia Fisk has the numbers and she does not want to say them. Cordelia's rally last night `+
         `out-drew yours. Not by a rounding error. Photographs exist, from the same helicopter, and `+
         `this time the smaller crowd is yours, and the whole game you have played on crowd size for `+
         `your entire career is suddenly available to be played on you.`,
    choices:[
      { label:'Claim her photos are fake. Yours are real.', wild:true, rivalUp:2,
        eff:{ base:5, press:-5, street:-2, auth:1 },
        res:`You call her crowd a green-screen. Six news helicopters immediately livestream the actual, enormous, extremely real crowd, for hours, as a direct rebuttal, giving her the largest earned-media day of her life.` },
      { label:'Announce a stadium tour. Reclaim the biggest room.', rivalUp:0,
        eff:{ base:6, street:-3, press:-2, cash:-0.3, auth:2 },
        res:`You book the biggest venues in the country and fill them, because you can still fill them, and for now the arms race in crowd size is one you are still, narrowly, winning.` },
      { label:'Poach her message. Steal the popular half.', rivalUp:-2,
        eff:{ base:-2, street:3, congress:2, press:2 },
        res:`You quietly adopt her two most popular positions as your own and dare her to complain about getting what she asked for. It works, it costs you nothing but pride, and pride was never the expensive part.` } ] },

  /* 3 ---- she turns an inquiry loose on you --------------------------- */
  { id:'riv-4', title:'The Inquiry', who:E.speaker, tags:['congress','courts'],
    text:`Cordelia's people have the votes, somewhere they should not have the votes, for an inquiry. `+
         `Real subpoenas, real testimony, a hearing room and a camera. Hal Grimes is sweating. "Sir, `+
         `it is not the finding that hurts. It is the calendar. She has bought herself a year of `+
         `televised mornings with your name in the title, and there is no motion to end a calendar."`,
    choices:[
      { label:'Stonewall it completely. Defy every subpoena.', wild:true, rivalUp:1,
        eff:{ base:5, courts:-6, congress:-5, press:-4, auth:3 },
        res:`You refuse to comply with any of it. It becomes a constitutional standoff, which is a bigger stage than the inquiry ever was, and Cordelia, who wanted exactly this, thanks you privately by name in a fundraising email.` },
      { label:'Flood it. Give them ten thousand pages of nothing.', rivalUp:-1,
        eff:{ base:2, congress:-2, courts:1, press:-1, auth:1 },
        res:`You comply, maliciously, with a document dump so vast and so boring that the inquiry drowns in its own evidence. Staffers age. The story dies of exhaustion. It is the most effective and least satisfying thing you do all year.` },
      { label:'Counter-investigate HER. Open your own file.', rivalUp:2,
        eff:{ base:6, courts:-5, press:-4, congress:-3, auth:2 },
        res:`You have the machinery point back at Cordelia, which everyone can see is retaliation, which is the point, and which elevates her from an opposition leader to a persecuted one, the single best thing that can happen to a challenger.` } ] },

  /* 4 ---- she is now a genuine counter-government --------------------- */
  { id:'riv-5', title:'The Shadow Cabinet', who:E.opp, tags:['power','congress'],
    text:`She has stopped acting like a candidate and started acting like a president. A shadow cabinet, `+
         `named. A policy platform, costed. A foreign trip where allied leaders met HER, warmly, in `+
         `the room they usually keep for you. "She is auditioning to be the normal one, sir," Deborah `+
         `says. "And against this administration, that is not a hard audition."`,
    choices:[
      { label:'Deploy everything. Bury her before the election.', wild:true, rivalUp:2,
        eff:{ base:7, courts:-6, press:-6, street:-5, congress:-4, auth:3 },
        res:`You throw the full weight of the state at one woman, openly, and it is a spectacle, and spectacles have two faces, and hers is now on the cover of every magazine on Earth under the word RESISTANCE.` },
      { label:'Steal the "normal" lane back. Govern boringly for a month.', rivalUp:-2,
        eff:{ base:-4, congress:4, press:5, street:4, courts:3, auth:-1 },
        res:`You spend a month being competent and dull on purpose, cutting a ribbon, signing a real bill, taking a hard question. It bores your base and it takes Cordelia's whole argument away, because her argument was that you could not do this, and now, briefly, you have.` },
      { label:'Offer her a deal: a job, a truce, a shared enemy.', rivalUp:-3,
        eff:{ base:-3, congress:3, press:2, auth:1 },
        res:`You offer her something real. She does not take it, but the offer forces her to say why, out loud, and "no" is a harder sell to a tired country than she expected, and for once you have made her the one explaining herself.` } ] },

  /* 5 ---- the reckoning: she is the whole ballgame now ---------------- */
  { id:'riv-6', title:'Ruiz-Bloom', who:E.opp, tags:['power','street'],
    text:`It comes down to her. Whatever else is on the ballot or the docket, the country has decided `+
         `this is a referendum on Cordelia Ruiz-Bloom versus you, and she has spent the whole term `+
         `getting ready for the sentence you are about to speak. She is across the table. She is not `+
         `smiling now. Neither are you.`,
    choices:[
      { label:'Crush her, totally, whatever it takes and whatever it costs.', wild:true, rivalUp:1,
        eff:{ base:8, courts:-8, press:-7, congress:-6, street:-6, auth:4 },
        res:`You go all the way. If it works, she is finished and so is a great deal else. If it does not, you have made her the most important person in the country by treating her like the only one. There is no small version of this any more, and that is her doing.` },
      { label:'Beat her the boring way: be a better President than she is a candidate.', rivalUp:-3,
        eff:{ base:-2, congress:5, press:5, street:5, courts:4, auth:1 },
        res:`You decline the duel and simply out-govern her, in public, for as long as it takes. It is slower, it is duller, and it is the only version of this that does not end with her name on the building instead of yours.` },
      { label:'Make her an offer she has to take. Absorb the opposition whole.', rivalUp:-4,
        eff:{ base:-4, congress:6, press:3, courts:2, auth:2 },
        res:`You offer her so much, a role, a share, a legacy, that refusing it would make her the obstacle to the thing she claims to want. She takes it, or she becomes the villain. Either way the opposition is now inside your tent, which is the most dangerous place you could possibly have put it.` } ] }
];

/* ---------- scheduler (mirrors AD.cayFor) --------------------------------
   Surfaces the next instalment when its month arrives; a stronger Cordelia
   comes back faster. Never on top of the November card. */
AD.rivalFor = function (run) {
  const r = AD.rivalState(run);
  if (r.over || r.stage >= AD.RIVAL_STAGES.length) return null;
  const tm = AD.termMonth(run);
  if (tm < r.next) return null;
  if (tm >= run.termLength - 2) return null;

  // A strongman breeds a stronger opponent: entering an instalment, her
  // strength ticks toward a target set by how authoritarian you have become.
  const target = Math.floor((run.authority || 0) / 12) + Object.keys(run.locked || {}).length;
  if (r.strength < target) r.strength = Math.min(AD.RIVAL_MAX, r.strength + 1);

  const card = AD.RIVAL_STAGES[r.stage];
  r.stage++;
  r.next = tm + Math.max(4, AD.RIVAL_GAP - Math.floor(r.strength / 2));
  return Object.assign({ scripted: true, rival: true, pillarBanner: 'THE OPPOSITION · ' + AD.rivalLabel(run).toUpperCase() }, card);
};

/* Apply a choice's rivalUp AFTER the meters land (called from the engine). */
AD.applyRivalChoice = function (run, choice) {
  if (choice && typeof choice.rivalUp === 'number') AD.bumpRival(run, choice.rivalUp);
};

/* ---------- monthly: a strong opposition costs you, quietly -------------- */
AD.rivalTick = function (run) {
  const r = AD.rivalState(run);
  const out = { deltas: {} };
  // She drifts toward the strength your own authority justifies, slowly.
  const target = Math.floor((run.authority || 0) / 14) + Object.keys(run.locked || {}).length;
  if (r.strength < target) r.strength = Math.min(AD.RIVAL_MAX, r.strength + 0.5);
  // A real threat organising in the country is a standing drain on the Street
  // and the Caucus, small, so it is pressure and never the killing blow.
  if (r.strength >= 7 && !r.over) {
    const bump = (k, v) => { if (run.locked[k]) return; const b = run.meters[k];
      run.meters[k] = AD.clamp(b + v, 0, 100); if (run.meters[k] !== b) out.deltas[k] = run.meters[k] - b; };
    bump('street', -1);
    if (r.strength >= 9) bump('congress', -1);
    out.note = 'Ruiz-Bloom is organising';
  }
  return out;
};

/* How much the rival helps the opposition at the ballot / in the contest.
   Read by the election events so a term spent feeding her is a term that made
   your re-election measurably harder. 0..~14. */
AD.rivalElectionDrag = run => Math.round(AD.rivalStrength(run) * 1.3);

})();
