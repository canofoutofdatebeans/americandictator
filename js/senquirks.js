/* ============================================================
   AMERICAN DICTATOR, senquirks.js
   A PERSONAL ANGLE ON EVERY SENATOR.

   There are a hundred senators and they are generated, not hand
   written, so their per-person move cannot be keyed by name. Instead
   every senator draws a QUIRK once at creation (see AD.makeSenate) and
   keeps it for the run. The quirk is what makes THIS senator's option
   list different from the one below: the one with the boat they cannot
   afford, the one losing a primary, the one whose sibling bids on
   federal contracts, the one who is eighty-four and thinking about
   bridges.

   Sixteen quirks across two pools. Combined with temperament, party,
   state and gripe, no two rows in the chamber play the same way.
   ============================================================ */

AD.SEN_QUIRK_TABLE = {

  /* ---------------- own party ---------------- */
  boat: {
    tell: 'Has a boat they cannot afford.',
    move: {
      id: 'q-boat', label: 'Berth the Boat', icon: '\u{1F6E5}\u{FE0F}', cost: 0.02, once: true,
      blurb: 'A free federal mooring, indefinitely, at a marina with a waiting list.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 26, 0, 100);
        return { congress: 4, press: -2, courts: -2, auth: 1,
          res: 'The boat is rehoused at a federal marina with a nine-year waiting list, at no cost, forever. They vote with you for eleven straight months.' };
      }
    }
  },

  primary: {
    tell: 'Has a primary challenger they are losing to.',
    move: {
      id: 'q-primary', label: 'Call Off the Challenger', icon: '\u{1F5F3}\u{FE0F}', once: true,
      blurb: 'One phone call ends the primary that was ending them.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 34, 0, 100);
        return { congress: 5, base: -2, press: -2, auth: 2,
          res: 'You make one call and the challenger discovers an urgent family reason to withdraw. They will never mention it and never forget it.' };
      }
    }
  },

  brother: {
    tell: 'A sibling bids on federal contracts.',
    move: {
      id: 'q-brother', label: 'Steer the Contract', icon: '\u{1F4CB}', once: true,
      blurb: 'The sibling wins a bid they did not win. Everyone stays vague about it.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 28, 0, 100);
        return { congress: 4, press: -3, courts: -3, cash: -0.05, auth: 1,
          res: 'A contract lands with a company that shares their surname. The procurement officer who flagged it is thanked for their diligence and transferred to Alaska.' };
      }
    }
  },

  ambassador: {
    tell: 'Wants an embassy somewhere warm.',
    move: {
      id: 'q-amb', label: 'Promise the Embassy', icon: '\u{1F3DD}\u{FE0F}', once: true,
      blurb: 'A small sunny country, a large residence, a title they can use forever.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 30, 0, 100);
        return { congress: 5, press: -2, auth: 1,
          res: 'You dangle an ambassadorship somewhere with a beach and a relaxed attitude to extradition. They are yours for as long as the promise stays unfulfilled, which is the trick.' };
      }
    }
  },

  vp: {
    tell: 'Believes they should have been Vice President.',
    move: {
      id: 'q-vp', label: 'Hint at the Ticket', icon: '\u{1F396}\u{FE0F}', once: true,
      blurb: 'Do not promise it. Just let them hear that it might be available.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 32, 0, 100);
        return { congress: 4, base: 2, press: -2, auth: 2,
          res: 'You say the word "ticket" in their presence and let the sentence trail off. They are on cable within the hour defending something they opposed in writing last spring.' };
      }
    }
  },

  ancient: {
    tell: 'Is eighty-four and has stopped pretending.',
    move: {
      id: 'q-ancient', label: 'Name a Bridge After Them', icon: '\u{1F309}', cost: 0.03, once: true,
      blurb: 'They are thinking about legacy. Give them one in concrete, while they can still see it.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 24, 0, 100);
        // Files a memory: the bridge comes back (see memory.js).
        if (AD.remember) AD.remember(run, 'bridge', { who: 'Sen. ' + sn.last }, 14);
        return { congress: 4, press: 1, street: 2, cash: -0.03, auth: 1,
          res: 'A bridge in their home state takes their name. They attend the ribbon-cutting, weep openly, and vote with you on everything for the remainder of their natural life.' };
      }
    }
  },

  church: {
    tell: 'Their pastor watches every vote.',
    move: {
      id: 'q-church', label: 'Send the Reverend', icon: '\u{26EA}', once: true,
      blurb: 'Do not lobby the senator. Lobby the person the senator is frightened of.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 27, 0, 100);
        return { congress: 4, base: 5, press: -2, street: -1, auth: 1,
          res: 'Reverend Muncy makes a pastoral visit. Nothing is threatened and nothing is promised, and the senator votes your way looking faintly haunted.' };
      }
    }
  },

  drinks: {
    tell: 'Is one bad night from a headline.',
    move: {
      id: 'q-drinks', label: 'Bury the Incident Report', icon: '\u{1F576}\u{FE0F}', once: true,
      blurb: 'There is a police report with their name on it. There does not have to be.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 38, 0, 100);
        if (AD.remember) AD.remember(run, 'person', { who: 'Sen. ' + sn.last, what: 'the sealed report' }, 12);
        return { congress: 5, press: -4, courts: -4, street: -2, auth: 3,
          res: 'A county sheriff’s report is reclassified and sealed. They know exactly what you did, exactly why, and exactly what happens if they ever forget.' };
      }
    }
  },

  cameras: {
    tell: 'Will do anything for a camera.',
    move: {
      id: 'q-cameras', label: 'Give Them the Podium', icon: '\u{1F3A4}', once: true,
      blurb: 'Let them introduce you at the rally. They would chew through a wall for it.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 25, 0, 100);
        return { congress: 3, base: 6, press: -2, auth: 1, fun: 4,
          res: 'They introduce you for eleven minutes, four of them about themselves, and call you "the greatest President of this or any century." They mean it, mostly.' };
      }
    }
  },

  earmark: {
    tell: 'Wants one very specific road built.',
    move: {
      id: 'q-earmark', label: 'Build Their Road', icon: '\u{1F6E3}\u{FE0F}', cost: 0.08, once: true,
      blurb: 'Eleven miles of highway nobody asked for, through a county of four thousand.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 33, 0, 100);
        return { congress: 5, street: 3, press: -2, cash: -0.08, auth: 1,
          res: 'Eleven miles of four-lane highway are funded through a county with four thousand residents and one traffic light. It is, everyone agrees, a very good road.' };
      }
    }
  },

  /* ---------------- opposition ---------------- */
  retiring: {
    tell: 'Is retiring and has stopped caring.',
    move: {
      id: 'q-retiring', label: 'Offer the Soft Landing', icon: '\u{1F4BC}', once: true,
      blurb: 'They are out in a year. Ask what they would like to be doing in two.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 30, 0, 100);
        return { congress: 4, press: -2, courts: -2, auth: 2,
          res: 'You describe, hypothetically, a board seat with no duties and a great deal of money. They abstain on three votes they had promised to block.' };
      }
    }
  },

  homestate: {
    tell: 'Won a state you carried by twenty.',
    move: {
      id: 'q-homestate', label: 'Rally in Their State', icon: '\u{1F3AA}', cost: 0.05, once: true,
      blurb: 'An enormous rally in their back yard. Mention their name once, fondly.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 24, 0, 100);
        return { congress: 3, base: 7, press: -3, street: -2, cash: -0.05, auth: 2, fun: 4,
          res: 'Forty thousand of their own voters chant your name in their home town. They issue a statement about "areas of common ground" before you have left the airspace.' };
      }
    }
  },

  ethics: {
    tell: 'Has an ethics file nobody has opened.',
    move: {
      id: 'q-ethics', label: 'Open the File', icon: '\u{1F5C2}\u{FE0F}', once: true,
      blurb: 'Not leak it. Just let them know, precisely, that it has been read.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 35, 0, 100);
        return { congress: 4, press: -5, courts: -5, street: -2, auth: 4,
          res: 'Somebody mentions the file to them by its case number. They go very quiet, and vote present on the only thing that mattered that month.' };
      }
    }
  },

  crusader: {
    tell: 'Has made you their entire personality.',
    move: {
      id: 'q-crusader', label: 'Ignore Them Completely', icon: '\u{1F910}', once: true,
      blurb: 'They feed on the fight. Starve them: never say their name again.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 8, 0, 100);
        return { congress: 2, press: 4, base: 3, street: 2, auth: 1,
          res: 'You stop responding to them entirely. Their fundraising halves in a quarter. It is the single cruellest thing available to you and it costs nothing at all.' };
      }
    }
  },

  dealmaker: {
    tell: 'Would rather cut a deal than win.',
    move: {
      id: 'q-deal', label: 'Cut the Backroom Deal', icon: '\u{1F91D}', once: true,
      blurb: 'They want something small and real. Trade it for something large.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty + 29, 0, 100);
        return { congress: 6, base: -3, press: 3, courts: 2, auth: 1,
          res: 'They trade a vote you needed for a clinic in a town you cannot pronounce. It is the most honest transaction of your entire presidency.' };
      }
    }
  },

  frontrunner: {
    tell: 'Is polling first to replace you.',
    move: {
      id: 'q-front', label: 'Nickname Them', icon: '\u{1F5E3}\u{FE0F}', once: true,
      blurb: 'Not policy. A nickname, repeated daily, until it is all anyone hears.',
      run (run, sn) {
        sn.loyalty = AD.clamp(sn.loyalty - 6, 0, 100);
        return { congress: -2, base: 9, press: -3, street: -2, auth: 2, fun: 6,
          res: 'You give them a nickname of surgical cruelty and repeat it eleven times a day. Within a month even their own supporters use it, affectionately, which is worse.' };
      }
    }
  }
};

AD.SEN_QUIRKS_OWN = ['boat', 'primary', 'brother', 'ambassador', 'vp', 'ancient', 'church', 'drinks', 'cameras', 'earmark'];
AD.SEN_QUIRKS_OPP = ['retiring', 'homestate', 'ethics', 'crusader', 'dealmaker', 'frontrunner'];

AD.senQuirk = sn => (sn && sn.quirk) ? AD.SEN_QUIRK_TABLE[sn.quirk] : null;

/* A senator's bespoke move is found by QUIRK rather than by id, so this is the
   senate's equivalent of AD.movesFor. */
AD.senatorMoves = function (sn) {
  const shared = (AD.SENATE_ACTIONS || []).slice();
  const q = AD.senQuirk(sn);
  if (!q) return shared;
  return shared.concat([Object.assign({ bespoke: true }, q.move)]);
};

AD.senatorMoveById = function (sn, id) {
  return (AD.senatorMoves(sn) || []).find(a => a.bespoke && a.id === id);
};
