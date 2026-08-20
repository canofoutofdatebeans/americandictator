/* ============================================================
   AMERICAN DICTATOR, memory.js
   THE GAME REMEMBERS.

   Every crisis used to be self-contained: you made a decision, took the
   numbers, and the decision was gone. This is the system that stops
   that. Certain choices file a MEMORY, and months later that memory
   comes back as its own crisis, by name, with your own words attached.

   You named a bridge after Senator Yancey in month six. In month thirty
   the bridge is closed for structural review and a reporter would like
   to know whose name is on it.

   HOW IT WORKS
   ------------
   A choice files a memory by carrying `remember: {...}` (see the hook in
   engine.choose), or a room can call AD.remember() directly. Each memory
   names a CALLBACK TYPE and carries whatever detail that callback needs
   to write itself:

     AD.remember(run, 'bridge', { who: 'Sen. Yancey' }, 18)

   The last argument is the earliest month it may return. AD.callbackFor()
   is polled by the engine's draw, after scripted beats and before the
   random deck, so a due callback always beats a generic card.

   Memories fire ONCE and are then marked spent. A run that makes the same
   mistake twice files two memories and gets both back, which is correct
   and, on the evidence, realistic.
   ============================================================ */

AD.MEM_MIN_GAP = 6;      // never sooner than this many months after the deed

AD.remember = function (run, type, data, delay) {
  if (!run) return;
  run.memories = run.memories || [];
  run.memories.push({
    type: type,
    data: data || {},
    due: (run.month || 1) + Math.max(AD.MEM_MIN_GAP, delay || AD.MEM_MIN_GAP),
    spent: false
  });
};

AD.pendingMemories = run => (run.memories || []).filter(m => !m.spent);

/* ---------- the callbacks ---------------------------------------------------
   Each one turns a filed memory back into a full crisis card. `build(run, m)`
   gets the memory it was filed with, so the card can name the specific
   senator, city, country or outlet involved. */
AD.CALLBACKS = {

  /* You put a senator's name on a bridge. */
  bridge: {
    build (run, m) {
      const who = m.data.who || 'a retiring senator';
      return {
        id: 'cb-bridge', scripted: true, who: AD.CAST.cos, tags: ['callback', 'street'],
        pillarBanner: 'IT CAME BACK',
        title: 'The Bridge Is Closed',
        text: 'Deborah has a structural report and the face of somebody who has already read it. ' +
              '"The bridge, sir. The one we named after ' + who + '. It is closed, indefinitely, ' +
              'and a local reporter has worked out that the inspection was waived the same week ' +
              'the naming ceremony was scheduled. She is asking which came first."',
        choices: [
          { label: 'Fund the repair immediately. Say nothing about the name.',
            eff: { street: 5, press: 3, congress: 2, cash: -0.15 },
            res: 'The money is found in an afternoon. The plaque stays up, unmentioned, above a construction hoarding for two years.' },
          { label: 'Quietly take the name back off it.',
            eff: { press: 2, congress: -5, base: -1 },
            res: 'The plaque is removed overnight by three men with a van. ' + who + ' finds out from a photograph and never speaks to you again.' },
          { label: 'Blame the previous administration for the inspection.',
            eff: { base: 5, press: -5, street: -3, courts: -2 },
            res: 'You attribute a waived inspection to a predecessor who left before the bridge was built. The dates are checkable. Nobody checks them for eleven days.',
            act: r => AD.moveTruth && AD.moveTruth(r, 7) },
          { label: 'Rename it after yourself while the cranes are there.', wild: true,
            eff: { base: 8, press: -6, congress: -6, street: -3, auth: 2 },
            res: 'A closed bridge under emergency repair now carries your name in letters four feet high. It is, for two years, the most photographed thing in the state.' }
        ]
      };
    }
  },

  /* You altered, invented or flatly denied something checkable. */
  record: {
    build (run, m) {
      const what = m.data.what || 'the forecast';
      return {
        id: 'cb-record', scripted: true, who: AD.CAST.press, tags: ['callback', 'press'],
        pillarBanner: 'IT CAME BACK',
        title: 'They Kept The Original',
        text: 'Kaylee has two documents and is holding them apart like they might react. ' +
              '"Somebody kept the original of ' + what + ', sir. Not a copy, the original, with the ' +
              'timestamp. It is going out at six unless we give them a reason not to run it, and I ' +
              'should say that ‘we would rather you did not’ has stopped working."',
        choices: [
          { label: 'Correct the record. Take the one bad day.',
            eff: { press: 7, courts: 5, congress: 3, base: -6 },
            res: 'You issue a correction with no adjectives in it. It is the cheapest exit available and it is on the front page for exactly one day.',
            act: r => AD.moveTruth && AD.moveTruth(r, -12) },
          { label: 'Insist the original is the forgery.',
            eff: { base: 7, press: -7, courts: -4, street: -3, auth: 2 },
            res: 'You claim the authentic document is fake. Two forensic labs disagree in public. Roughly forty per cent of the country goes with you anyway.',
            act: r => AD.moveTruth && AD.moveTruth(r, 10) },
          { label: 'Find who kept it.',
            eff: { base: 4, press: -6, courts: -7, congress: -4, auth: 4 },
            res: 'A leak inquiry identifies an archivist eleven months from retirement. The document still runs. Nobody in the building keeps anything again.' },
          { label: 'Declare the original classified, retroactively.', wild: true,
            eff: { base: 6, press: -5, courts: -8, congress: -3, auth: 5 },
            res: 'You classify a document that has already been published, which does nothing except make it a criminal matter to keep discussing it. Everyone keeps discussing it.' }
        ]
      };
    }
  },

  /* You told a country something you cannot walk back. */
  foreign: {
    build (run, m) {
      const nat = m.data.nation || 'an allied government';
      return {
        id: 'cb-foreign', scripted: true, who: AD.CAST.state, tags: ['callback', 'economy'],
        pillarBanner: 'IT CAME BACK',
        title: 'They Have Not Forgotten',
        text: 'Muriel has a cable she would rather hand you than read aloud. "' + nat + ', sir. ' +
              'They have declined the request. Not refused, declined, which is worse, and the note ' +
              'quotes you back to yourself. Word for word. From the thing you said about them."',
        choices: [
          { label: 'Apologise privately and get the deal.',
            eff: { press: 5, congress: 4, courts: 2, base: -6 },
            res: 'You say the words in a room with four people in it. The deal is signed a fortnight later and you never mention either event again.' },
          { label: 'Say it again, louder, and dare them.',
            eff: { base: 9, press: -6, congress: -5, street: -3, auth: 3 },
            res: 'You repeat the insult on camera with an added flourish. They cancel the visit, then the deal, then a basing agreement nobody had told you about.' },
          { label: 'Send somebody else to fix it.',
            eff: { congress: 3, press: 2, base: -2, cash: -0.05 },
            res: 'A deputy secretary nobody has heard of repairs eleven months of damage in a week, and is not thanked for it in public or in private.' },
          { label: 'Offer them a seat on the Board of Peace.', wild: true,
            eff: { base: 5, press: -4, courts: -3, congress: -3, auth: 1 },
            res: 'You attempt to resolve a diplomatic insult by inviting them to pay you a billion dollars for a certificate. The reply is one sentence long.' }
        ]
      };
    }
  },

  /* A person you elevated, bought or installed becomes a liability. */
  person: {
    build (run, m) {
      const who = m.data.who || 'your own appointee';
      const what = m.data.what || 'the appointment';
      return {
        id: 'cb-person', scripted: true, who: AD.CAST.lawyer, tags: ['callback', 'courts'],
        pillarBanner: 'IT CAME BACK',
        title: 'Your Own Man',
        text: 'Sy closes the door before he starts, which is never good. "' + who + ', sir. ' +
              'The one you handled personally. There is an inquiry, and because of ' + what + ', ' +
              'every document in it has your signature somewhere near it. Their problem is now ' +
              'structurally your problem."',
        choices: [
          { label: 'Cut them loose today, publicly.',
            eff: { press: 5, courts: 4, congress: 3, base: -5 },
            res: 'You disown them completely and at speed. It works, and every other person you have ever done a favour for watches it happen.',
            act: r => AD.bumpCabinetChurn && AD.bumpCabinetChurn(r, 1) },
          { label: 'Stand by them and absorb it.',
            eff: { base: 6, press: -5, courts: -5, congress: -4, auth: 2 },
            res: 'You defend them by name, repeatedly, and the inquiry widens to include the defending. Loyalty is expensive in exactly one direction.' },
          { label: 'Pardon the problem out of existence.',
            eff: { base: 5, press: -6, courts: -8, congress: -5, auth: 4 },
            res: 'The inquiry ends because its subject can no longer be charged. The underlying facts remain entirely intact and entirely public.' },
          { label: 'Promote them somewhere with immunity.', wild: true,
            eff: { base: 4, press: -5, courts: -6, congress: -5, auth: 3 },
            res: 'You solve a legal exposure with an ambassadorship. They leave the country on a Tuesday and are photographed on a beach on the Thursday.' }
        ]
      };
    }
  },

  /* A city you sent force into remembers who sent it. */
  city: {
    build (run, m) {
      const where = m.data.where || 'the city';
      return {
        id: 'cb-city', scripted: true, who: AD.CAST.home, tags: ['callback', 'street'],
        pillarBanner: 'IT CAME BACK',
        title: 'The Anniversary',
        text: 'Duane has the permit application and does not look happy holding it. "' + where + ', sir. ' +
              'They have applied to march on the anniversary of the deployment. The route ends at a ' +
              'federal building. Legally it is airtight, they have had a lawyer on it since the week ' +
              'it happened."',
        choices: [
          { label: 'Grant the permit and stay out of the state.',
            eff: { street: 6, press: 4, courts: 4, base: -5 },
            res: 'Forty thousand people march past an empty building and go home. It is over by four and covered for one cycle.' },
          { label: 'Deny it on a technicality.',
            eff: { base: 5, street: -7, courts: -6, press: -4, auth: 3 },
            res: 'A clerk finds a paperwork fault. They march anyway, unpermitted, and the arrest photographs travel further than the march ever would have.' },
          { label: 'Send the force back in, pre-emptively.',
            eff: { base: 8, street: -10, courts: -7, press: -6, congress: -4, auth: 5 },
            res: 'You garrison a city against a march that has not happened yet. Two neighbouring mayors announce they will not cooperate with anything, ever again.' },
          { label: 'Turn up and address the march yourself.', wild: true,
            eff: { base: 7, street: -3, press: -3, auth: 2 },
            res: 'You arrive uninvited at a protest about you and speak for twenty minutes. It is the bravest and least advisable thing you do all term, and it is riveting.' }
        ]
      };
    }
  }
};

/* Is a memory due? Polled from Engine.draw(). Returns a card or null. */
AD.callbackFor = function (run) {
  if (!run || !run.memories) return null;
  const m = run.memories.find(x => !x.spent && (run.month || 1) >= x.due && AD.CALLBACKS[x.type]);
  if (!m) return null;
  let card = null;
  try { card = AD.CALLBACKS[m.type].build(run, m); } catch (e) { card = null; }
  if (!card) { m.spent = true; return null; }
  m.spent = true;
  // Unique per firing so the seen-list never suppresses a later callback of the
  // same type from a different memory.
  card.id = card.id + '-' + (run.memories.indexOf(m));
  return card;
};
