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

/* ---------- DECK FRESHNESS FOR THE LONG GAME ----------------------------
   By the second term a player has seen most of the first-term deck, so the back
   half of a long game started to feel like reruns. Two thematically second-term
   packs, the grift-at-scale pack (p-) and the law-and-order crackdown pack (r-),
   are now held back to term two: ~80 crises the player has never seen unlock
   exactly when fatigue would set in, rather than recycling term one. Gated via
   the engine's existing c.term filter (see AD.eligible). Only these two packs use
   the p-/r- id prefixes, verified, so no other card is affected. */
(function () {
  const GATE = /^[pr]-/;
  (AD.CARDS || []).forEach(c => { if (c && GATE.test(c.id) && !c.term) c.term = 2; });
})();
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
  },

  /* ---- the wealth is now the whole story ---- */
  {
    id: 'st-fortune',
    when: run => ((run.stats && run.stats.peakCash) || 0) >= 8,
    card: run => ({
      id: 'st-fortune', title: 'The Fortune Is the Story', who: E.treas, tags: ['money', 'press'],
      text: 'Lyle has the disclosure, and it is a phone book. The money you made in the first term is no longer a ' +
            'side plot, it is the plot. Every policy now gets read backward from who profited, and the answer, ' +
            'increasingly, is a company with your name over the door. "Sir, past a certain number," he says, "the ' +
            'country stops asking what you are doing and starts asking what you are charging for it."',
      choices: [
        { label: 'Charge more. They already think it, so bank it.',
          eff: { base: 3, press: -6, courts: -5, congress: -4, cash: 0.6, auth: 1 },
          res: 'You lean all the way in. The venture posts a record quarter the same week three committees open files, and both facts are, technically, about you.' },
        { label: 'Move it into a "blind" trust run by the family.',
          eff: { base: 1, press: -3, courts: -2, cash: 0.2 },
          res: 'The trust is called blind. The trustees are your children. Everyone involved can see perfectly, and that arrangement is now, somehow, federal policy.' },
        { label: 'Divest, loudly, for the optics. Keep the good parts.',
          eff: { base: -2, press: 5, courts: 3, cash: -0.3, auth: -1 },
          res: 'You announce a divestiture and hold a signing, and quietly retain everything that actually pays. The headline is clean. The footnotes are a second headline nobody runs.' }
      ]
    })
  },

  /* ---- a war you started is now a place you own ---- */
  {
    id: 'st-war',
    when: run => ((run.stats && run.stats.wars) || 0) >= 1 || (run.warLog || []).length > 0,
    card: run => {
      const w = (run.warLog || [])[0];
      const where = (w && w.name) || 'the country you invaded';
      return {
        id: 'st-war', title: 'The Occupation', who: E.gen, tags: ['power', 'street'],
        text: 'The war photographed beautifully in the first term. The second term is the part they never put on the ' +
              'poster: you still hold ' + where + ', and holding a place is a bill that arrives every single month, ' +
              'in money and in boys, and it does not stop arriving because you have stopped mentioning it. Mick lays ' +
              'the map flat. "We can leave, sir, and lose it on the news. Or we can stay, and lose it slowly, off the news."',
        choices: [
          { label: 'Stay. Winning is not leaving.',
            eff: { base: 2, street: -6, congress: -4, courts: -2, cash: -0.3, auth: 2 },
            res: 'You commit to holding ' + where + ' indefinitely, which is a policy with no last page, and the cost of it moves quietly into every budget you sign for the rest of the term.' },
          { label: 'Declare victory and leave overnight.', wild: true,
            eff: { base: 5, street: -3, press: -4, congress: -3, auth: 1 },
            res: 'You announce a total victory and pull out in a weekend. What you leave behind is on the news within the month, under a different word than victory, and it is your word now.' },
          { label: 'Hand it to a "coalition" and stop reading the cables.',
            eff: { base: -1, press: 3, congress: 2, auth: -1 },
            res: 'You transfer the mess to a coalition assembled specifically to be blamed. It is the responsible option and the cowardly one at once, which is the only kind the second term offers.' }
        ]
      };
    }
  },

  /* ---- the trade war compounds ---- */
  {
    id: 'st-trade',
    when: run => ((run.stats && run.stats.tariffs) || 0) >= 3 || !!(run.flags && run.flags.liberationDay),
    card: run => ({
      id: 'st-trade', title: 'The Bill for the Trade War', who: E.treas, tags: ['money', 'street'],
      text: 'The tariffs felt like winning, every one of them, and they have spent the gap between the terms doing ' +
            'the thing tariffs do: arriving at the checkout. Prices are up, the retaliation has found the exact farm ' +
            'counties that put you here, and the countries you hit have quietly built the supply chains that route ' +
            'around you for good. "The tax was always going to be paid by someone, sir," Lyle says. "It turned out to be us."',
      choices: [
        { label: 'Double every rate. Never let them see you fold.',
          eff: { base: 5, street: -6, press: -4, congress: -3, cash: -0.2, auth: 3 },
          res: 'You raise everything, on principle, and the checkout gets more expensive and the base gets more thrilled, and those two lines cross somewhere around the midterms.' },
        { label: 'Quietly grant "exemptions" to everyone who complains.',
          eff: { base: -3, street: 4, press: 3, congress: 2, cash: -0.2 },
          res: 'You keep the tariffs on paper and exempt anyone who calls, so the policy still exists and no longer does anything, which is the most honest a trade war ever gets.' }
      ]
    })
  },

  /* ---- the media you bought now shapes you ---- */
  {
    id: 'st-media',
    when: run => (run.assets || []).some(id => { const a = AD.assetById && AD.assetById(id); return a && a.cat === 'media'; }),
    card: run => ({
      id: 'st-media', title: 'The Megaphone Turns', who: E.social, tags: ['press', 'base'],
      text: 'You bought the megaphone so it would never point the wrong way, and for a term it did not. But an ' +
            'audience that will believe anything you say will also believe anything the NEXT person says into the same ' +
            'microphone, and the microphone has noticed it no longer strictly needs you. Brayden scrolls, thumb ' +
            'flicking. "Sir, the base is more loyal to the feed than to you now. We built that. It was the whole plan."',
      choices: [
        { label: 'Purge the network. Remind them who owns the signal.',
          eff: { base: -4, press: -5, courts: -3, congress: -2, auth: 3 },
          res: 'You fire the people who forgot, on air, as an example. The signal survives the purge, as signals do, and quietly files you under content.' },
        { label: 'Feed it harder. Out-crazy your own algorithm.',
          eff: { base: 6, press: -6, street: -4, courts: -3, auth: 2 },
          res: 'You give the machine exactly what it rewards, at volume, and it rewards you back, and somewhere in the loop the question of who is steering whom stops having an answer.' }
      ]
    })
  },

  /* ---- Saint Ambrose would not sink ---- */
  {
    id: 'st-scandal',
    when: run => (AD.cayHeat ? AD.cayHeat(run) : 0) >= 4,
    card: run => ({
      id: 'st-scandal', title: 'The Island That Would Not Sink', who: E.press, tags: ['press', 'courts'],
      text: 'The Saint Ambrose story survived the whole first term and got healthier doing it. Four years of denials ' +
            'turn out to be four years of footage, and someone has cut them together. There is a documentary now. ' +
            'There is a phrase everyone uses that you accidentally coined. Kaylee does not sit down. "Sir, we cannot ' +
            'kill it. We have tried everything that kills a story and it has eaten all of it and asked for the next one."',
      choices: [
        { label: 'Declare total victory over a story you cannot name.', wild: true,
          eff: { base: 4, press: -7, courts: -4, congress: -3, auth: 1 },
          res: 'You hold a press conference to announce the hoax is finished, which requires describing it, which is the one thing that keeps it alive, which you have now done again, on camera, in a suit.' },
        { label: 'Bury it under a bigger, louder scandal of your choosing.',
          eff: { base: 5, press: -5, street: -4, courts: -2, auth: 2 },
          res: 'You start a fire in a different building to draw the cameras off this one. It works for nine days. Then there are two fires, and the second one is also yours.' },
        { label: 'Settle it quietly. Pay whatever the silence costs.',
          eff: { base: -2, press: 3, courts: -2, cash: -0.5 },
          res: 'You buy the silence, in full, on a Friday. The silence holds, which is worse in its way, because a bought silence is a receipt, and receipts keep.' }
      ]
    })
  },

  /* ---- the constitutional theory is now load-bearing ---- */
  {
    id: 'st-doctrine',
    when: run => (run.doctrines || []).length >= 1,
    card: run => ({
      id: 'st-doctrine', title: 'The Load-Bearing Theory', who: E.cj, tags: ['power', 'courts'],
      text: 'The legal theory you adopted to get through the first term was supposed to be a door. It has become a ' +
            'wall the whole building now leans on. Winifred Stone has come in person, which she does not do. "The ' +
            'trouble with a theory that lets the President do anything," she says, evenly, "is that it is now the only ' +
            'thing holding the roof up, and everyone can see it, and a thing everyone can see is a thing someone tests."',
      choices: [
        { label: 'Push the theory further. A wall is stronger than a door.',
          eff: { base: 4, courts: -7, press: -5, congress: -4, auth: 4 },
          res: 'You extend the doctrine to cover the next three things, and the roof holds, and the load on that one wall goes up by exactly the weight of everyone now standing on it.' },
        { label: 'Let the Chief Justice write the limiting version.',
          eff: { base: -5, courts: 6, press: 5, congress: 3, auth: -3 },
          res: 'You allow her to draft the sentence that says how far it goes. It is a real limit, honestly written, and it is the first time in two terms that the word "cannot" has applied to you and stuck.' }
      ]
    })
  },

  /* ---- the movement is now bigger than the man ---- */
  {
    id: 'st-movement',
    when: run => run.meters.base >= 78 || (AD.hasDoctrine && AD.hasDoctrine(run, 'cult')),
    card: run => ({
      id: 'st-movement', title: 'The Movement Outgrew You', who: E.social, tags: ['base', 'power'],
      text: 'The base is enormous now, bigger than any one rally, bigger than the party, and, the thing nobody will ' +
            'say to your face, bigger than you. It has a life. It has purity tests you would fail. It has, at the ' +
            'edges, a preferred successor who is louder than you and asks for nothing, which is the one thing you ' +
            'cannot out-bid. "They love the movement, sir," Brayden says, carefully. "You are just where it started."',
      choices: [
        { label: 'Get out ahead of it. Be more extreme than the extreme.',
          eff: { base: 4, press: -6, street: -5, courts: -4, congress: -3, auth: 2 },
          res: 'You sprint to the front of a parade that was leaving without you, and you reach the front, and the parade is still not yours, it just has you at the front of it now.' },
        { label: 'Name a loyal successor before the crowd names one.',
          eff: { base: -3, congress: 3, press: 2, auth: -2 },
          res: 'You anoint someone safe and grateful, which the crowd receives the way a crowd receives being told who to love, which is to say it begins, quietly, shopping.' },
        { label: 'Remind them the movement has your name on it.',
          eff: { base: 6, press: -3, congress: -2, auth: 3 },
          res: 'You reassert ownership of the thing, at a rally, at volume, and it roars for you, and the roar is real, and it is also exactly the roar it would give the next person to stand there.' }
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
   card queue for the start of term two. With twelve beats and most runs
   qualifying for more than three, the selection is SHUFFLED deterministically by
   the run's seed, so a given save always sees the same reckoning but two
   different runs that did the same things still get a different gauntlet. */
AD.SECOND_TERM_MAX = 3;
AD.secondTermReckoning = function (run) {
  const seed = String(run.seed || 'X');
  const rank = id => {
    let h = 2166136261; const s = seed + '|' + id;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  };
  return AD.SECOND_TERM_BEATS
    .filter(b => { try { return b.when(run); } catch (e) { return false; } })
    .sort((a, b) => rank(a.id) - rank(b.id))
    .slice(0, AD.SECOND_TERM_MAX)
    .map(b => b.card(run));
};

})();
