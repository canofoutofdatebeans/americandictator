/* ============================================================
   AMERICAN DICTATOR, secondterm.js
   THE RECKONING.

   A second term used to be a harder first term: the same deck, a flat
   penalty, play on. This makes it its own ACT, by turning your FIRST
   term's specific choices back on you, by name.

   Each beat below only fires if you actually did the thing: broke the
   Constitution, captured a branch, let the VP's stock rise, pardoned
   crooks, took foreign patrons. They are queued right after the Second
   Inaugural (see AD.beginSecondTerm), newest grievance first, capped so
   the opening of term two is a gauntlet of your own making and not a
   wall of text.

   The through-line: in the first term the country reacted to what you
   did. In the second, it has LEARNED from it. Every instrument you built
   is now something someone else knows how to hold.

   Fictional cast and country, like everything else. Loaded after
   events.js (owns the cast) and constitution.js / war.js (own the record
   this reads).
   ============================================================ */

(function () {

const E = AD.CAST;
const breaches = run => (run.stats && run.stats.breaches) || 0;
const crookPardons = run => (AD.clemencyScrutiny ? AD.clemencyScrutiny(run) : 0);
const lockedKeys = run => Object.keys(run.locked || {}).filter(k => run.locked[k]);
const patrons = run => Object.keys(run.allies || {}).length + Object.keys(run.conquests || {}).length;

/* Each beat: { id, when(run)->bool, card(run)->cardObject }. `card` is built at
   queue-time so it can name the specific thing you did. */
AD.SECOND_TERM_BEATS = [

  /* ---- your own emergency powers, in someone else's hands ---- */
  {
    id: 'st-precedent',
    when: run => breaches(run) >= 2,
    card: run => ({
      id: 'st-precedent', title: 'Your Own Precedent', who: E.lawyer, tags: ['power', 'courts'],
      text: '"They filed this an hour ago." Sy slides one page across. "It cites you. Not against you, sir, it ' +
            'cites your reasoning. The ' + breaches(run) + ' times you decided a clause did not apply to an emergency, ' +
            'they have written down as settled law, and now they would like to use it. On you." He waits. ' +
            '"The instrument does not care whose hand is on it. That was rather the point you kept making."',
      choices: [
        { label: 'Deny you ever set the precedent. On camera.', wild: true,
          eff: { base: 6, press: -6, courts: -5, congress: -3, auth: 2 },
          res: 'You call the precedent a hoax, which is difficult, because it is quoted from you, at length, with a date. The base does not read footnotes. Everyone else does.' },
        { label: 'Break the clause again, harder, to prove it is yours.',
          eff: { base: 5, courts: -8, press: -6, congress: -5, auth: 4 },
          res: 'You use the power one more time, specifically to show that only you may. It works, and it teaches the next person to reach for it exactly how.' },
        { label: 'Quietly restore the clause you broke. Pull up the ladder.',
          eff: { base: -6, press: 5, courts: 6, congress: 4, auth: -3 },
          res: 'You rebuild the guardrail now that you are safely past it. The lawyers who watched you tear it down watch you rebuild it and say nothing, which is its own verdict.' }
      ]
    })
  },

  /* ---- the branch you captured resents being owned ---- */
  {
    id: 'st-branch',
    when: run => lockedKeys(run).length > 0,
    card: run => {
      const k = lockedKeys(run)[0];
      const f = AD.faction(k);
      const who = { courts: E.cj, congress: E.speaker, press: E.press, street: E.home }[k] || E.cos;
      const seat = { courts: 'the bench', congress: 'the chamber', press: 'the newsroom', street: 'the street' }[k] || 'the institution';
      return {
        id: 'st-branch-' + k, title: 'The Captured Branch Stirs', who: who, tags: ['power', k],
        text: 'You own ' + f.name + ' now. It does what you want. That was supposed to be the end of the ' +
              'story, and it is not. ' + seat.charAt(0).toUpperCase() + seat.slice(1) + ' has stopped fighting you and ' +
              'started something quieter and worse: it has stopped functioning at all, except to agree with you, and a ' +
              'thing that only agrees turns out to be no use to you the moment you need it to be believed.',
        choices: [
          { label: 'Good. A branch that only agrees is the branch I wanted.',
            eff: { base: 4, auth: 3, press: -4, street: -3 },
            res: 'You confirm that yes-men are the goal. ' + f.name + ' becomes a rubber stamp so total that its stamp stops meaning anything, which you will discover at the worst possible moment.' },
          { label: 'Let one real dissent through. For the look of the thing.',
            eff: { base: -3, press: 5, courts: 2, congress: 2, auth: -2 },
            res: 'You permit a single genuine objection, stage-managed, to restore the appearance of a working institution. It is theatre, and it is also the most functional ' + seat + ' has been since you took it.' }
        ]
      };
    }
  },

  /* ---- Chet has had four years to think ---- */
  {
    id: 'st-vp',
    when: run => (run.vpAmbition || 0) >= 45,
    card: run => ({
      id: 'st-vp', title: 'The Understudy', who: E.vp, tags: ['power'],
      text: 'Chet Danforth has been Vice President for four years and loyal for all of them, and loyalty, it turns ' +
            'out, is a thing that accrues interest. He has his own people now. His own donors. A book, apparently, ' +
            'with a chapter he would like you to read first. "Sir," he says, smiling the smile, "I just think we ' +
            'should talk about what comes after. While it is still a conversation and not an announcement."',
      choices: [
        { label: 'Remind him there is no after. Not for him.',
          eff: { base: 5, congress: -5, press: -3, auth: 3 },
          res: 'You make it clear the succession is not open. He nods, agrees warmly, and keeps every one of the people he brought, which is the part that should worry you.' },
        { label: 'Humiliate him publicly. End the ambition now.', wild: true,
          eff: { base: 7, congress: -7, courts: -3, press: -4, auth: 4 },
          res: 'You cut him off at the knees in front of the cameras. His stock craters, his people scatter, and you have just taught every other ambitious person in the building to hide it better.' },
        { label: 'Give him a real job. Somewhere far away.',
          eff: { base: -2, congress: 4, press: 3, auth: -1 },
          res: 'You hand him a genuine portfolio on another continent. It is a promotion and an exile and he knows it, and he takes it, because the alternative was worse and you both counted the votes.' }
      ]
    })
  },

  /* ---- somebody you pardoned is back, and grateful, and a problem ---- */
  {
    id: 'st-pardon',
    when: run => crookPardons(run) >= 1,
    card: run => ({
      id: 'st-pardon', title: 'Clemency Comes Home', who: E.ag, tags: ['courts', 'money'],
      text: 'One of the ' + crookPardons(run) + ' people you pardoned is back in the news, and back in business, and ' +
            'the business is the same business that got them the first conviction, which your pardon has made ' +
            'un-reconvictable. They are very grateful. They keep saying so, publicly, next to your name, at events ' +
            'you did not authorise. "A pardon is forever, sir," Bo says. "That was the pitch. This is the invoice."',
      choices: [
        { label: 'Embrace them. Loyalty is loyalty.',
          eff: { base: 4, press: -6, courts: -5, congress: -3, cash: 0.3, auth: 1 },
          res: 'You stand next to them and smile. The photo runs everywhere. They name a venture after the pardon, and a slice of it, quietly, finds its way to you.' },
        { label: 'Distance yourself. Deny you knew them well.',
          eff: { base: -2, press: 3, courts: 2 },
          res: 'You claim barely to remember the name you personally signed above. The signature is, unfortunately, a matter of public record, in your hand, with a flourish.' }
      ]
    })
  },

  /* ---- the foreign patron wants the favour back ---- */
  {
    id: 'st-patron',
    when: run => patrons(run) >= 1,
    card: run => ({
      id: 'st-patron', title: 'The Favour Called In', who: E.state, tags: ['power', 'money'],
      text: 'The alliances and acquisitions that paid so well in the first term came, it emerges, with a memory. ' +
            'A government that has been wiring money into the Treasury for years would now like a small thing in ' +
            'return, a vote withheld, a base relocated, a name taken off a list. "They were very generous, sir," ' +
            'Muriel says, carefully. "Generosity abroad is never a gift. It is an unsigned contract, and they have ' +
            'brought a pen."',
      choices: [
        { label: 'Pay the favour. Keep the money flowing.',
          eff: { base: -3, press: -5, congress: -5, courts: -3, cash: 0.4, auth: 1 },
          res: 'You do the small thing. It is genuinely small, and it is genuinely a foreign government setting your policy, and the money keeps arriving, which is how you know it worked.' },
        { label: 'Refuse. Let the income stop.',
          eff: { base: 4, press: 4, congress: 3, auth: -1 },
          res: 'You decline, on principle, and the payments stop the same week, and the principle costs you a line item you will feel every month for the rest of the term.' }
      ]
    })
  }
];

/* ---------- THE COLD OPEN, across runs ----------------------------------
   The legacy system already reshapes the meters you inherit (AD.inheritance);
   this dramatizes it as the FIRST crisis of a new administration, so the
   campaign layer is felt and not just a silent adjustment to the bars. It reads
   the ending the PREVIOUS save reached: an authoritarian win means you (or your
   predecessor) built the machine now pointed at you; a collapse means you
   inherit the wreckage. Only fires when the legacy is significant. */
const OWN_MACHINE = { dictator: 1, 'third-term': 1, certified: 1, indefinite: 1,
                      'second-term-consolidation': 1, 'the-full-set': 1 };

AD.legacyOpener = function (run) {
  const inh = run.legacy;
  if (!inh || !inh.endingId) return null;
  // significant = there is a real scar, or the country has been governed badly
  // for a while, or the last term was an authoritarian win worth naming.
  const heavy = OWN_MACHINE[inh.endingId] || (inh.chaos || 0) >= 1 ||
                Object.keys(inh.mods || {}).some(k => Math.abs(inh.mods[k]) >= 8);
  if (!heavy) return null;
  const from = inh.from || 'the last President';

  if (OWN_MACHINE[inh.endingId]) {
    return {
      id: 'legacy-machine', title: 'The Machine You Were Handed', who: E.cos, tags: ['power'],
      pillarBanner: 'A NEW ADMINISTRATION',
      text: 'Deborah has the transition binder, and it is thin, because there was not much to transition. ' +
            from + ' left the office already reshaped: the checks pre-answered, the emergencies pre-declared, ' +
            'the branches pre-bent. "Sir, the good news is the hard part is done. The bad news," she says, ' +
            '"is that everyone in this country has now watched it be done once, and they know the moves. ' +
            'The machine works. It just does not surprise anybody any more."',
      choices: [
        { label: 'Good. I do not need the surprise. I need the machine.',
          eff: { base: 4, auth: 4, press: -4, courts: -3, street: -3 },
          res: 'You take the levers as handed and pull. They move. So does the resistance, which learned its lesson too, and is already in the room when you arrive.' },
        { label: 'Dismantle a piece of it. Look like a reformer for a month.', wild: true,
          eff: { base: -3, press: 7, courts: 5, congress: 5, street: 4, auth: -3 },
          res: 'You very publicly restore one guardrail your predecessor removed. It polls beautifully. You keep the other eleven, and nobody asks about those, which was the entire idea.' },
        { label: 'Pretend it is all new. Govern as if the first time.',
          eff: { base: 2, press: 2, auth: 1 },
          res: 'You deliver the speech a fresh president delivers, about turning the page. The page, everyone can see, has your predecessor\'s handwriting on the other side, in the same hand as yours.' }
      ]
    };
  }
  return {
    id: 'legacy-wreck', title: 'The Country You Inherit', who: E.cos, tags: ['power'],
    pillarBanner: 'A NEW ADMINISTRATION',
    text: 'The wreckage of the ' + from + ' administration is still being swept up as you arrive. ' +
          (inh.note || 'The institutions are raw, the country is tired, and the mess is now yours.') +
          ' "You did not make this one, sir," Deborah says. "But you own it the moment you sit down, and the ' +
          'clock started the second the last one left."',
    choices: [
      { label: 'Blame the last guy. Loudly. For as long as it works.', wild: true,
        eff: { base: 5, press: -3, congress: -2, auth: 1 },
        res: 'You spend the opening months narrating a disaster you did not cause, which is genuinely useful, right up until the country decides the disaster is now yours, which it does, on a schedule.' },
      { label: 'Fix one thing, fast, so the recovery has your name on it.',
        eff: { base: -2, press: 5, congress: 4, street: 4, auth: -1 },
        res: 'You pick one broken thing and repair it in public. It is real, it is modest, and it is the last uncomplicated win you will get for a while.' }
    ]
  };
};

/* Pick the applicable beats for this run's record, capped, and return them as a
   card queue for the start of term two. */
AD.secondTermReckoning = function (run) {
  return AD.SECOND_TERM_BEATS
    .filter(b => { try { return b.when(run); } catch (e) { return false; } })
    .slice(0, 3)
    .map(b => b.card(run));
};

})();
