# Writing Guide

The moat is the writing. The reference product's success came from ~300 hand-written crises
with a consistent voice, and its reviews praise the humour before anything else. This file
exists so that adding crises is a **writer's** job, not a developer's.

Content lives in `js/cards.js` (core deck + cast) and `js/packs/*.js`.

**To add crises:** create a new file in `js/packs/`, copy the header from any existing pack,
and add a `<script>` tag in `index.html`. A pack is just:

```js
(function () {
  const C = AD.CAST;
  AD.CARDS.push( /* your cards */ );
})();
```

The IIFE keeps `C` out of the global scope so packs never collide. There is no registration
step and order does not matter.

---

## 1. The shape of a crisis

```js
{
  id: 'unique-kebab-id',
  title: 'The Marker',                    // 1–4 words, headline voice
  who: C.press,                           // who is standing at your desk (see cast)
  min: 3, max: 44,                        // month window; omit for "any time"
  tags: ['gaffe','press'],
  req: r => r.flags.ocean,                // optional gate on story state
  text: 'You told the nation that Hurricane Delores would hit the state of Kansaw. ' +
        'It will not. The official forecast map is on the podium in nine minutes.',
  choices: [
    { label: 'Extend the cone with a marker. Present it as-is.',
      eff: { base: +6, press: -8, street: -4, auth: +3 },
      res: 'The loop of black ink is visible from the back row.',
      flag: 'sharpie',                    // optional: set a story flag
      cost: 0.5,                          // optional: locks the choice behind $0.5B
      queue: ['follow-up-card-id'] },     // optional: force a card next month
    // ...two more
  ]
}
```

Effect keys, and **only** these: `base` `congress` `courts` `press` `street` `auth` `cash`.

Add the object to the `AD.CARDS` array. That's the whole install step.

---

## 2. The four-choice rule

Every crisis offers the same four flavours. Not rigidly — but if you can't identify which is
which, the card isn't finished.

1. **The power grab.** Big `auth`, big `base`, and it hurts two or three institutions.
2. **The professional move.** Small numbers, low risk, faintly disappointing. This is the
   choice that keeps you alive and costs you the game.
3. **The worse idea.** Funnier and more extreme than (1), or a swerve nobody expected.
4. **The wildcard.** Marked `wild:true`. The silly one — see below.

The player should feel a real pull between (1) and (2) roughly every time.

### The wildcard (`wild:true`)

The fourth option is the comedy slot: a genuinely unexpected move — a non-sequitur, a literal
reading of the problem, a wildly disproportionate escalation, delegating to the dog, or the
unnervingly decent thing nobody saw coming. Vary the *type* of absurdity; 302 versions of the
same joke is not a joke.

Two hard mechanical rules, learned by breaking both:

- **A wildcard must cost something.** At least ~7 points of institutional damage. My first pass
  wrote most wildcards as "unexpectedly wholesome," which handed the player a free repair option
  every single turn and took optimal play from 40% to **100%**.
- **A wildcard must not be the fastest route to power.** Keep `auth` low, and if it is net
  positive for your standing it should be `auth` **negative** — a month spent being charming is
  a month not spent taking a branch. Only 7 of 302 are the top-Authority pick on their card.

Playing nothing but wildcards for six turns leaves you at Authority 0. That is the design
working: the fun path is a dead end, and it should feel like one.

> **Never stack two mechanical passes over the same numbers.** Doing so double-multiplied every
> negative (a wildcard reached −20 Base for bringing coffee to a picket line) and a hard cap
> flattened three unrelated jokes into identical effects. Re-derive from the authored originals
> and apply **one** transform.

---

## 3. Magnitudes

| Kind of choice | Typical range |
|---|---|
| Minor, one meter | ±3 to ±5 |
| Standard | ±6 to ±9 |
| Major, term-defining | ±10 to ±14 |
| Authority, ordinary | +1 to +5 |
| Authority, structural (loyalty oaths, standing emergencies) | +8 to +18 |
| Cash | ±0.1 to ±1.4 (billions) |

Nothing should exceed ±16. If a card wants to, it's a scripted event, not a crisis.

**Gains shrink near capture.** A `+10` on a branch already at 80 lands as `+6`
(see *institutional resistance*, `DESIGN.md` §2). Write the number you mean at a *normal*
meter value and let the engine handle the endgame.

### The incidental-press rule

**A crisis that is not about the press may charge at most −5 press.**

This is the one balance rule with teeth, and it exists because I broke it. Press had become
the reflexive "and it looks bad" tax: 300 of 302 cards touched it, **65% of its entire deficit
sat on cards that were not about the press at all**, and `zero-press` was 47% of every
random-play death. 208 choices had to be retuned.

If a decision's cost is really "this is unpopular," ask *unpopular with whom* — and charge
that faction instead. The Base is usually the honest answer, and the Base is the meter with
room to absorb it.

Press-tagged cards, and anything delivered by Kaylee Bright or Brayden, are exempt: that is
where press is *supposed* to be the currency, and they still carry hits down to −16.

### Budget check

Expected drift per random choice — keep new batches roughly inside this band:

| base | congress | courts | press | street |
|---|---|---|---|---|
| +1.67 | −0.62 | −1.04 | −0.56 | −0.77 |

Totals (positive / negative): base +2894/−1377 · congress +1405/−1964 · courts +966/−1909 ·
press +2127/−2638 · street +1573/−2269.

**Every card must offer at least one choice that does not punish a given meter.** Seven cards
violated this for the press and were hand-fixed; the checker for it is in `DESIGN.md` §7.

Re-run the balance sweep after any batch of 10+ cards, and bump the `?v=N` on the asset URLs
in `index.html` first or you will be measuring the old deck.

---

## 4. Voice

Dry, specific, deadpan. The reference points are *Veep* and *The Thick of It*, not a monologue.

**Rules that actually matter:**

- **Specific beats general.** "Eleven senators said nothing at all, and their silence was the
  actual news" > "the Senate did not respond well."
- **Put the joke in the consequence, not the setup.** The `text` is the straight man. The
  `res` line is where it lands.
- **Undercut, don't editorialise.** Never tell the player the thing is bad. Describe it
  precisely and let it be bad. *"It costs $40 million and achieves nothing measurable, which
  makes it the purest expression of executive power yet attempted."*
- **The best `res` lines are the quiet ones.** *"He does not thank you. He simply goes back to
  work, which is the highest compliment available in his profession."*
- **Numbers are funny.** "$16 million" and "1,885 months" land; "a lot of money" doesn't.
- **Land the real point occasionally.** The game is funniest when it's briefly not joking —
  *"Power is the willingness of other people to move when you speak."* Use sparingly.

**Salty words** are fine; `AD.SALT` in `state.js` softens them when the player turns on Clean
Language. Add new substitutions there rather than self-censoring in the card.

---

## 4b. Grounding: the `src` field

A crisis derived from the research carries a `src` citation naming the documented item it riffs
on. It is a *research pointer*, not a claim the fictional events happened.

```js
{ id:'f-director', src:'FBI director dismissal; later admitted motive on television', … }
```

**Inspired by, never copied.** Take the *mechanism* — the incentive, the loophole, the thing
that made it work — and invent everything else. Names, numbers, countries, and outcomes all
change. `f-find-votes` is a call asking an official to find a specific number of votes; it is
not the real call, the real number, the real state or the real outcome.

Audit grounding in the console:

```js
AD.CARDS.filter(c => c.src).length + '/' + AD.CARDS.length
```

Current: **89 / 342 (26%)** — the 49 annotated core crises plus all 40 in `pack-f-record.js`.
Packs A–E remain original political-mechanics satire with no research derivation. Raising that
ratio means rewriting those packs against the unused items in `Trump stories.md`, of which there
are still plenty: the Comey memos, the first impeachment's detail, Charlottesville's aftermath,
the DEI and gender orders, Puerto Rico, Columbia, the Alsup order, the Blagojevich pardon.

## 5. Satire posture — non-negotiable

Everything is fictional. Invented people, parties, agencies, companies and countries. The
*situation* is recognizable; the *nouns* are ours. This is what preserves satire protection
and keeps the game off the wrong side of app-store policy and right-of-publicity law.

Working from the source research:

- **Tier 1 material — use freely.** Documented, on-the-record public events. Fictionalise the
  names and write the joke. Most of the deck is here.
- **Tier 2 material — the `[CONTEXT FLAG]` items** in `Trump stories.md` (contested quotes and
  events where the popular version is a misquote). Either skip them or **make the joke about
  the dispute itself** — which is usually funnier and always safer.
- **Never** put a real person's name, likeness, party logo, or protected mark in a card.
- **Never** invent a crime and attach it to a recognisable individual. Invent the character
  first, then give them the crime.

If a card only works because the audience knows exactly who it is, it still works — that's
satire doing its job. If it only works because you *named* them, rewrite it.

---

## 6. The cast

Use `AD.CAST` (top of `cards.js`) — recurring characters are most of the charm. Add to it
rather than inventing one-off speakers.

| Key | Character |
|---|---|
| `cos` | Deborah Krank, Chief of Staff — competent, complicit, the best line in the room |
| `press` | Kaylee Bright, Press Secretary |
| `ag` | Bo Slaughter, Attorney General — went to law school; regrets it |
| `vp` | Chet Danforth, Vice President — smiles too much, wants your job |
| `broom` | Roscoe Vandermeer, Efficiency Czar (BROOM) |
| `cj` | Winifred Stone, Chief Justice |
| `speaker` | Hal Grimes, Speaker — a two-seat majority and eleven arsonists |
| `opp` | Cordelia Ruiz-Bloom, Opposition Leader |
| `gen` | Mick Tarrant, Joint Chiefs — the one who might say no |
| `treas` | Lyle Pemberton, Treasury |
| `poll` | Nadia Fisk, Pollster |
| `social` | Brayden, Director of Posting — nineteen |
| `state` | Muriel Vantz, Secretary of State |
| `home` | Duane Krisp, Homeland |
| `lawyer` | Sy Feltman, Personal Counsel — "Sir. Respectfully. It is absolutely a store." |
| `doc` | Ronny Prine, Physician to the President |
| `usher` | Alvin, Chief Usher |
| `intern` | Madison, Somebody's Niece |

**Fictional world:** Glacia · Northmark · Rusalka · Cathay · Ukrania · Qadira · San Baldoro ·
Northland · the Hermit Republic · the Freedom Ocean · Yardvard & Colonnade Universities ·
BROOM · *The National Scream* · *The Beacon* · the Tranquility Center · $PREZ · Liberty
Financial · the Patriot Party · the Reasonable Party.

---

## 7. Pacing

The `min`/`max` month window is how the term gets an arc. Roughly:

| Window | Feel |
|---|---|
| 1–12 | Honeymoon. Vanity, gaffes, day-one orders. Cheap Authority, low stakes. |
| 8–30 | The machinery. Courts, agencies, money, deportations, tariffs. The real game. |
| 26–48 | Consolidation. Loyalty oaths, currency, third terms, arresting a governor. |
| any | Evergreen comedy — tag these `levity`. The deck weights them **up** before month 14 and **down** after, so early runs breathe and late runs bite. |

Aim for ~40% evergreen, ~60% windowed. Too much gating and short runs feel empty.

---

## 8. Checklist before you commit a card

- [ ] `id` is unique
- [ ] Effects use only the seven legal keys
- [ ] Three choices, and you can name which is the grab / the professional / the worse idea
- [ ] Every choice has a `res` line, and the `res` is funnier than the `text`
- [ ] Nothing exceeds ±16
- [ ] No real names, likenesses, marks, or invented crimes attached to real people
- [ ] `min`/`max` set, or deliberately evergreen
- [ ] If it references an earlier card's outcome, `req` gates it on the right flag

Then reload — there's no build step — and play it.
