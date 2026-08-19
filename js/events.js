/* ============================================================
   AMERICAN DICTATOR, events.js
   Scripted beats that interrupt the random deck: the annual
   Address, the Midterms, the backlash after each Pillar falls,
   and the Election that ends the term.

   An event is a card with `scripted:true` and optionally a
   `dynamic(run, choiceIndex)` that computes its own outcome from
   the state of the board instead of using fixed effects.
   ============================================================ */

const E = AD.CAST;

/* ---------- 1. The Address (months 12 and 36) ----------------------------- */
AD.EVENTS = {

  address: {
    id: 'evt-address', scripted: true, title: 'The Address', who: E.cos,
    tags: ['press'],
    text: 'The whole government is in one room: the Cabinet, both chambers, the Court, the Chiefs. ' +
          'Sixty million people are watching. A member of the opposition is already holding up a small sign, ' +
          'saved for exactly this camera angle. Deborah has three drafts, a fourth she is pretending she did not write, ' +
          'and no opinion she is willing to state out loud.',
    choices: [
      { label: 'The unity speech. Reach across the aisle.',
        eff: { press: +8, congress: +7, street: +7, base: -7, auth: -2 },
        res: 'Standing ovations from people who will vote against you on Thursday. Your own side sits on their hands for the best line in it. The sign stays down; there was nothing on it worth holding up for.' },
      { label: 'The grievance speech. Name every enemy.',
        eff: { base: +12, press: -8, congress: -6, street: -6, auth: +5 },
        res: 'A justice walks out. Two governors issue statements before you finish. Your fundraising takes in $61 million overnight, and the sign finally comes up on cue, which was, in its way, the point.' },
      { label: 'The emergency speech. The country is under threat from within.',
        eff: { base: +9, press: -6, courts: -6, street: -8, congress: -3, auth: +9 },
        res: 'You use the phrase "invasion from within" while facing the Joint Chiefs. Nobody in the room stands up. Nobody in the room leaves either.' },
      { label: 'Go off script entirely. Ad-lib the whole thing.', wild: true,
        eff: { base: +10, press: -9, congress: -7, street: -5, auth: +2 },
        res: 'You set the fourth draft aside and talk for eleven unscripted minutes. Deborah\'s face, caught on a cutaway camera, becomes its own news cycle. Nobody, including you, can fully reconstruct what was promised.' }
    ]
  },

  /* ---------- 2. The Midterms ------------------------------------------- */
  midterms: {
    id: 'evt-midterms', scripted: true, title: 'The Midterms', who: E.poll,
    tags: ['elections','congress'],
    text: 'Four hundred and thirty-five House seats and a third of the Senate. Historically the president\'s party loses. ' +
          'Nadia has one sheet of paper. "Sir, you get to pick what this election is about. That\'s the only lever you actually have."',
    choices: [
      { label: 'Make it about me. Rally in 40 states.', mode: 'base' },
      { label: 'Make it about groceries. Talk about nothing else.', mode: 'street' },
      { label: 'Skip campaigning. Fund lawyers, recounts and county boards.', mode: 'legal' },
      { label: 'Declare it rigged in advance and campaign only on that.', mode: 'chaos', wild: true }
    ],
    dynamic (run, i) {
      const m = run.meters;
      const mode = this.choices[i].mode;
      let score, res, eff = {};

      if (mode === 'base') {
        score = m.base * 1.3 + m.press * 0.3 - 40;
        eff.base = +6; eff.press = -4; eff.auth = +2;
      } else if (mode === 'street') {
        score = m.street * 1.0 + m.press * 0.6 + m.base * 0.3 - 40;
        eff.street = +5; eff.base = -4;
      } else if (mode === 'legal') {
        score = m.courts * 0.9 + m.congress * 0.7 + m.base * 0.4 - 40;
        eff.courts = -6; eff.press = -6; eff.street = -4; eff.auth = +6;
      } else {                                   // chaos: all-in on the grievance
        score = m.base * 1.1 - 34;
        eff.base = +9; eff.press = -7; eff.courts = -4; eff.street = -4; eff.auth = +5;
        score += (AD.rng() * 40) - 20;           // wildly variable, as promised
      }

      // The systems now feed the result: a whipped caucus and a friendly press
      // are worth real seats. The Midterms are where those two screens cash out.
      const sen = AD.senateSummary(run);
      const pr = AD.pressSummary ? AD.pressSummary(run) : { friendly: 0, hostile: 0 };
      score += (sen.avgOwn - 55) * 0.3 + (pr.friendly - pr.hostile) * 1.4;
      score += (AD.rng() * 24) - 12;

      let tabloid, shift;
      if (score >= 34) {
        eff.congress = (eff.congress || 0) + 18; eff.auth = (eff.auth || 0) + 8;
        shift = AD.senateShift(run, 4, 10);      // flip 4 opposition seats, embolden the caucus
        res = 'You gain seats in a midterm. Four opposition senators are now yours, and the caucus has ' +
              'discovered a new enthusiasm for whatever you would like next.';
        tabloid = { head: 'THEY WENT AND DID IT AGAIN', sub: 'Ruling party gains seats in a midterm for the first time in a generation',
          body: 'Analysts described the result as "structurally impossible" for eleven months and then spent one night watching it happen. ' +
                'The opposition leader conceded at 2:40am using the phrase "we will regroup," which is the sound a party makes while falling down stairs.' };
      } else if (score >= 8) {
        eff.congress = (eff.congress || 0) + 4;
        shift = AD.senateShift(run, 1, 2);
        res = 'You hold. Barely. One seat flips your way and the caucus stays roughly where it was, ' +
              'which under the circumstances is a triumph.';
        tabloid = { head: 'HELD. SORT OF.', sub: 'Majority survives on a margin thinner than the paper this is printed on',
          body: 'Control of the chamber now depends on the continued good health of a man who takes eleven medications ' +
                'and the continued good mood of a woman who has stopped returning the Speaker\'s calls.' };
      } else {
        eff.congress = (eff.congress || 0) - 22; eff.press = (eff.press || 0) - 5;
        shift = AD.senateShift(run, -5, -12);    // lose five seats, the caucus turns
        res = 'A wave. Five of your own senators lose their seats, the survivors are suddenly full of ' +
              '"concerns," and the opposition has the gavel and the subpoena power.';
        tabloid = { head: 'WIPEOUT', sub: 'Historic losses hand the opposition the gavel and the subpoena power',
          body: 'Forty-one seats. The new majority has already announced eleven investigations, six of which are into things ' +
                'the administration has publicly admitted doing. "We are not going to be a rubber stamp," said the incoming chair, ' +
                'a sentence that would have been unremarkable in any other decade.' };
      }
      return { eff, res, tabloid };
    }
  },

  /* ---------- 3a. The Re-election (end of term one) -----------------------
     Unlike the finale, this one has a door that does NOT end the run: win it
     and you get a second term, which is where the reference game's long game
     actually lives. ------------------------------------------------------ */
  reelection: {
    id: 'evt-reelection', scripted: true, title: 'Election Night', who: E.cos,
    tags: ['elections','power'], final: true,
    text: 'It is the last November of the first term, and the war chest is full, the donations flooded in the ' +
          'moment the ballots were printed. Four more years is on the table, and so is not needing them. ' +
          'Deborah has three ways to run the night, and the polls close at nine.',
    choices: [
      { label: 'Run on the record. A clean, straight campaign.', mode: 'clean' },
      { label: 'Run on grievance. Give the base a war to win.', mode: 'grievance' },
      { label: 'Outspend everyone. Bury the swing states in ads.', mode: 'spend' }
    ],
    dynamic (run, i) {
      const m = run.meters, a = run.authority;
      const mode = this.choices[i].mode;
      const woundPenalty = Object.keys(run.wounded || {}).length * 9;   // collapsed centres hurt
      let score;

      if (mode === 'clean') {
        // Authority is a PENALTY on a clean win: the more openly you have taken
        // the country apart, the harder it is to win a fair one.
        score = m.base * 0.4 + m.street * 0.4 + m.press * 0.4 + m.congress * 0.2
                - a * 0.28 - woundPenalty + (AD.rng() * 26 - 13);
      } else if (mode === 'grievance') {
        // The base carries it, and it carries almost nothing else.
        score = m.base * 0.7 + m.congress * 0.15 - woundPenalty + (AD.rng() * 26 - 13);
      } else {                                        // outspend
        const spent = Math.min(run.cash, 2);
        run.cash = Math.round((run.cash - spent) * 100) / 100;
        score = m.base * 0.35 + m.street * 0.3 + m.press * 0.25 + spent * 7
                - woundPenalty * 0.7 + (AD.rng() * 24 - 12);
      }

      if (score > 52) return { secondTerm: 'won' };

      // CATASTROPHE. If a power centre was left in ruins, the defeat is themed to
      // it (Congress removed you, the Courts enjoined you, the Street stopped),
      // a dramatic, uncontestable ending rather than a close-run vote. This also
      // revives the five 'zero' endings now that meters no longer end a term.
      const themed = AD.electionLossEnding(run);
      if (themed !== 'peaceful-transfer') return { ending: themed };

      // LOST a survivable vote. Do not end the run: queue the concede-or-contest
      // decision and let the player choose what losing means.
      run.queue.unshift(AD.EVENTS.contestDecision);
      return {
        res: 'The networks call it at 11:40pm, and not by a rounding error. You lost. There is still a decision ' +
             'to make, though, about what a loss is going to be allowed to mean.',
        tabloid: {
          head: 'DEFEATED, FOR NOW',
          sub: 'President loses re-election; concession, or a contest, awaited by morning',
          body: 'The result was clear enough that the anchors said the word "projected" only once. In the residence ' +
                'the lights stayed on. Two speeches sat printed on the desk, side by side. One of them began with the ' +
                'word "congratulations." Nobody in the building expected that to be the one he reached for.'
        }
      };
    }
  },

  /* ---------- 3a-ii. Concede or Contest (only if you lost) ----------------
     The heart of the new endgame. Walk away with dignity, or call it rigged
     and try to TAKE the second term through the Courts and Congress you spent
     the term building. If you did not build them, the contest collapses. ---- */
  contestDecision: {
    id: 'evt-contest-decision', scripted: true, title: 'Concede or Contest', who: E.lawyer,
    tags: ['elections','power'], final: true,
    text: '"Two roads, sir, and no third one." Sy does not sit down. "You concede, you leave on the twentieth, you ' +
          'get a library and the benefit of the doubt from history. Or you say the word, rigged, and we take it to ' +
          'the courts and the Congress and the street, and we find out whether a second term can be seized even ' +
          'though it was not, strictly speaking, won."',
    choices: [
      { label: 'Concede. Leave with what dignity remains.', mode: 'concede' },
      { label: 'Declare it rigged. Fight it in the Courts and Congress.', mode: 'contest' },
      { label: 'Declare yourself the winner. Livestream the "real" numbers.', mode: 'declare', wild: true }
    ],
    dynamic (run, i) {
      const m = run.meters, a = run.authority;
      const mode = this.choices[i].mode;
      if (mode === 'concede') return { ending: 'peaceful-transfer' };

      // The rigged path is a test of the machinery you actually built: the
      // Courts to rule for you and the Congress to certify it. The street helps.
      const power = m.courts * 0.5 + m.congress * 0.4 + m.street * 0.1
                    + (run.flags.commission ? 12 : 0) + (AD.rng() * 20 - 10);

      if (mode === 'declare') {
        // Pure bluster with no legal scaffolding almost always collapses.
        if (power > 64 && a >= 72) return { secondTerm: 'contested' };
        return { ending: power > 44 ? 'the-standoff' : 'the-refusal' };
      }
      if (power > 52) return { secondTerm: 'contested' };   // the courts and Congress deliver it
      if (power > 36) return { ending: 'the-standoff' };     // it drags for weeks, then collapses
      return { ending: 'the-count' };                        // certified against you anyway
    }
  },

  /* ---------- 3b. The Twenty-Second (end of term two) ---------------------
     You are not on the ballot. The Amendment is 87 words long. Every door
     here is terminal. ---------------------------------------------------- */
  election: {
    id: 'evt-election', scripted: true, title: 'The Twenty-Second', who: E.lawyer,
    tags: ['elections','power'], final: true,
    text: '"Eight years. You are not eligible and there is no argument about it, the Amendment is eighty-seven words ' +
          'long and unusually well drafted." Sy closes the folder. "Which is not the same as saying there is no door. ' +
          'It is saying the door is not a legal one."',
    choices: [
      { label: 'Leave. Two terms is what the Constitution says.', mode: 'leave' },
      { label: 'Hand the office to Chet. Keep the movement.', mode: 'succeed' },
      { label: 'Take the third term. Let them stop you.', mode: 'third', needsAuth: 62 }
    ],
    dynamic (run, i) {
      const m = run.meters, a = run.authority;
      const mode = this.choices[i].mode;
      const grip = (m.congress + m.courts + m.press + m.street) / 4;

      if (mode === 'leave')   return { ending: 'two-terms' };
      if (mode === 'succeed') return { ending: 'the-succession' };

      if (grip >= 62 && a >= 78) return { ending: 'third-term' };
      if (grip >= 46)            return { ending: 'the-standoff' };
      return { ending: 'the-refusal' };
    }
  },

  /* ---------- 4. The Second Term begins ---------------------------------- */
  secondTermOpener: {
    id: 'evt-second-term', scripted: true, title: 'The Second Inaugural', who: E.cos,
    tags: ['power'], pillarBanner: 'THE SECOND TERM BEGINS',
    text: 'You are the first person in this building to have done all of it once already. There is no learning curve, ' +
          'no transition team, no honeymoon, and, Deborah notes, reading from a card, no next election you are ' +
          'eligible for. "Sir, the restraint that was operating on you was the ballot. It has been removed."',
    choices: [
      { label: '"Then we stop pretending." Govern like there is no bill coming.',
        eff: { base: +8, congress: -8, courts: -9, press: -9, street: -8, auth: +12 },
        res: 'Everything you slow-walked in the first term is signed inside a fortnight. The system has never been asked to absorb this much this fast.' },
      { label: 'Same as before, but faster and without the meetings.',
        eff: { base: +5, courts: -4, press: -4, street: -3, auth: +7 },
        res: 'No speech, no doctrine, no announcement. Simply a government that has stopped asking permission and never mentioned that it stopped.' },
      { label: 'Spend it on the legacy. Build something with your name on it.',
        eff: { base: -4, press: +8, street: +8, congress: +6, courts: +5, auth: +2 },
        res: 'Roads, bridges, a hospital wing. It polls at 71%. Historians will like it. It is worth nothing at all to the project.' }
    ]
  }
};

/* ---------- 4. Pillar backlash ------------------------------------------- */
/* Fires the month after a faction is captured. Every other power centre
   notices what just happened and reacts. */
AD.backlashFor = function (key) {
  const f = AD.faction(key);
  const others = AD.FKEYS.filter(k => k !== key);

  const flavour = {
    congress: {
      title: 'The Quiet Chamber',
      who: E.speaker,
      text: 'The House passed 41 bills today. Nobody read any of them, including the members who wrote them. ' +
            'Hal Grimes is here to ask what you would like passed tomorrow. He is not being sarcastic and that is the alarming part.',
      choices: [
        { label: 'Hand him a list. Watch the others panic.',
          eff: { courts: -8, press: -7, street: -6, base: +4, auth: +4 },
          res: 'Every institution that is not yet yours has now seen exactly what "yours" looks like. They begin defending themselves in earnest.' },
        { label: 'Ask for one bill. Slowly. Don\'t spook anyone.',
          eff: { courts: -3, press: -3, street: -2, auth: +2 },
          res: 'Restraint reads as strategy. Which, this time, it is.' }
      ]
    },
    courts: {
      title: 'The Overnight Docket',
      who: E.cj,
      text: 'Three emergency applications went up at 6pm. All three were granted by 11pm, unsigned, unreasoned. ' +
            'The Chief Justice has called. She is not calling about the rulings. She is calling about her colleagues.',
      choices: [
        { label: 'File nine more applications tonight.',
          eff: { congress: -8, press: -7, street: -8, base: +4, auth: +4 },
          res: 'The judiciary has stopped being a check and become a schedule. Everybody else in Washington understands this by breakfast.' },
        { label: 'Take the call. Be gracious. File them Tuesday.',
          eff: { congress: -3, press: -2, street: -3, auth: +2 },
          res: 'She thanks you for listening. You did listen. You just already knew what you were going to do.' }
      ]
    },
    press: {
      title: 'The Same Front Page',
      who: E.press,
      text: 'Every major outlet ran the same lead this morning, in the same order, with the same three quotes. ' +
            'None of them were told to. Kaylee is holding six front pages fanned out like a card trick.',
      choices: [
        { label: 'Frame them. Hang them in the West Wing.',
          eff: { congress: -7, courts: -8, street: -8, base: +5, auth: +4 },
          res: 'A visiting delegation photographs the wall. The photograph does more damage abroad than any policy you have signed.' },
        { label: 'Say nothing. Never mention it. Let it be normal.',
          eff: { congress: -3, courts: -3, street: -4, auth: +3 },
          res: 'The most dangerous version of this is the one where nobody remarks on it.' }
      ]
    },
    street: {
      title: 'A Very Quiet Tuesday',
      who: E.home,
      text: 'Zero permitted demonstrations nationwide. Zero unpermitted ones. Traffic is excellent. ' +
            'Duane presents this as good news, and technically every individual word of it is good news.',
      choices: [
        { label: 'Take the win. Extend the permit framework nationally.',
          eff: { congress: -7, courts: -9, press: -8, base: +4, auth: +4 },
          res: 'The right to assemble now requires an application, a fee, and a fourteen-day review by an office that is understaffed on purpose.' },
        { label: '"Let some of them march. It looks better."',
          eff: { congress: -3, courts: -3, press: -2, auth: +3 },
          res: 'Permitted dissent in a fenced area two blocks from anything. The photographs of freedom are, in fairness, excellent.' }
      ]
    }
  }[key];

  return Object.assign({
    id: 'evt-backlash-' + key,
    scripted: true,
    tags: ['power'],
    pillarBanner: f.pillar + ' SECURED'
  }, flavour);
};

/* ---------- Scheduling ----------------------------------------------------
   All beats are scheduled against the TERM month, so term two gets its own
   Address, its own Midterms and its own November. */
/* If the term left a power centre in ruins (collapsed to the floor, or simply
   sitting very low at the ballot), a defeat is themed to that institution and
   uses its dramatic 'zero' ending. Otherwise it is an ordinary lost election. */
AD.electionLossEnding = function (run) {
  const wounded = Object.keys(run.wounded || {}).filter(k => !run.locked[k]);
  let worst = null, low = 101;
  AD.FKEYS.forEach(k => { if (!run.locked[k] && run.meters[k] < low) { low = run.meters[k]; worst = k; } });
  // A wounded (once-collapsed) centre, or any centre still in the gutter, decides it.
  if (wounded.length) {
    const k = wounded.sort((a, b) => run.meters[a] - run.meters[b])[0];
    return 'zero-' + k;
  }
  if (worst && low <= 18) return 'zero-' + worst;
  return 'peaceful-transfer';
};

AD.scriptedFor = function (run) {
  const len = run.termLength;
  const tm = AD.termMonth(run);

  // The last November of a term. Term one can be survived; term two cannot.
  if (tm >= len - 1) {
    // Going into an election run, the donations flood in: a one-time campaign
    // war chest, granted the first time the ballot appears each term.
    if (run.flags.warChestTerm !== run.term) {
      run.flags.warChestTerm = run.term;
      run.cash = Math.round((run.cash + AD.CAMPAIGN_BOOST) * 100) / 100;
      run.flags.warChestJustPaid = AD.CAMPAIGN_BOOST;
    }
    return run.term >= 2 ? AD.EVENTS.election : AD.EVENTS.reelection;
  }

  const midterm = Math.round(len * 0.47);           // 23 of 48, 19 of 40
  if (tm === midterm && run.flags.midtermsInTerm !== run.term) {
    run.flags.midtermsInTerm = run.term;
    return AD.EVENTS.midterms;
  }

  const addr1 = Math.round(len * 0.25);
  const addr2 = Math.round(len * 0.75);
  if ((tm === addr1 || tm === addr2) && run.flags.lastAddress !== run.month) {
    run.flags.lastAddress = run.month;
    return AD.EVENTS.address;
  }

  // The Saint Ambrose arc is now handled in Engine.draw() AFTER the section
  // pop-ups, so a running scandal can never starve them. Only the true
  // calendar beats (midterms, addresses, the election) live here.
  return null;
};
