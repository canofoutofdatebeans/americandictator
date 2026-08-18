# American Dictator

A satirical political-survival card game. You are the President of the United States.
You have one four-year term to turn the country into a dictatorship.

Built as a **Reigns / No. 10: Full Confidence**-style loop — a crisis lands, you pick one of
three responses under a countdown, faction meters lurch, repeat until the republic breaks or
you do. The twist versus *Full Confidence*: there, you survive. Here, surviving is losing.

> **Everything in this game is fictional.** No real person, party, agency, court, company or
> country is named. Every crisis is an original riff written against the documented public
> record in `Trump Research.md` and `Trump stories.md`. See "Satire posture" below.

---

## Run it

No build step, no dependencies. It's vanilla HTML/CSS/JS with classic `<script>` tags
specifically so it runs from a plain static server.

```bash
python -m http.server 8412
```

Then open <http://localhost:8412>.

A `.claude/launch.json` is included, so `preview_start` picks it up automatically.

**Don't open `index.html` directly off the filesystem** in Chrome — `file://` blocks some
asset loading. Any static server works.

---

## The loop in one paragraph

Each in-game month a crisis card arrives. Three choices, one timer. Choices move five
faction meters, your Authority, and your personal Cash. Drive a branch of government to 100
and you **capture** it — it becomes a Pillar, freezes permanently, and pays Authority that
ignores the soft cap. Reach **Authority 100** before the term runs out and you win. Let any
faction hit 0 and you're finished, in a manner specific to which one. At the end of the
fourth year there's an Election, which has three doors — and one of them only opens if you
have accumulated enough Authority to not hold it.

---

## Native packaging (Capacitor)

The game is already Capacitor-shaped: no build step, self-contained, mobile-first,
safe-area padding in place. To wrap it:

```bash
npm install
npm run build            # copies index.html/css/js into www/, strips ?v= cache-busting
npm run cap:add:ios      # or cap:add:android
npm run cap:ios          # sync + open Xcode
```

`capacitor.config.json` sets the app id, the navy background, splash and status bar.
`scripts/build-www.mjs` is a dependency-free copy step — it is not a bundler, because
there is nothing to bundle.

**Not verified on a device.** The config and build step are correct and `npm run build`
is tested; the native shells have never been compiled or run on hardware.

## Files

| Path | What's in it |
|---|---|
| `index.html` | All screens and overlays. Markup only. |
| `css/styles.css` | Mobile-first. Dark marble, gold leaf, newsprint. |
| `js/state.js` | **Tuning lives here.** Factions, difficulty, Authority rules, inheritance scars, save/load. |
| `js/cards.js` | Core deck (70 crises), the cast, and the deck-selection helpers. |
| `js/renovations.js` | **The Residence.** 12 improvements to the White House, upkeep and scrutiny. |
| `js/cay.js` | **The Saint Ambrose Files.** The recurring scandal, its heat, and its leaks. |
| `js/packs/*.js` | **195 more crises** in seven loadable packs. Each pushes onto `AD.CARDS`. |
| `js/events.js` | Scripted beats: the Address, Midterms, Pillar backlash, Re-election, the Twenty-Second. |
| `js/doctrines.js` | Five permanent rule-changing unlocks. |
| `js/achievements.js` | 20 achievements, 5 of them secret. |
| `js/briefings.js` | Post-crisis briefings, generated from board state. |
| `js/endings.js` | 18 endings, each with a tabloid front page. |
| `js/engine.js` | The rules. Draw → choose → advance. No DOM. |
| `js/ui.js` | All rendering. No rules. |
| `js/main.js` | Bootstrap, input wiring, the turn loop. |
| `DESIGN.md` | Full mechanics spec + balance data + roadmap. |
| `WRITING-GUIDE.md` | How to add crises. Read before touching `cards.js`. |

`engine.js` never touches the DOM and `ui.js` never decides anything, so the whole rules
layer is portable if you later move to React, Unity, or a native shell.

---

## Content

- **335 crises**, **1,340 hand-written choices**, each with its own consequence line
- **A wildcard on every card** — a fourth, deliberately absurd option (appoint the dog to the
  Cabinet, tariff only the penguin islands, join the picket line and bring coffee). Every one
  carries a real cost and almost none advance you, so the funny path is a genuine dead end
- **21 second-term-only crises** that only make sense once you've served four years
- **47 evergreen crises** for pacing, weighted toward the early game
- **Scripted beats**: the Address, the Midterms, four Pillar-backlash cards, the Re-election,
  the Second Inaugural, and the Twenty-Second
- **5 doctrines**, **18 endings**, **20 achievements**, **37 named recurring characters**
- **Second terms** — win re-election and keep playing, up to a 96-month administration
- **Persistent world** — each new President inherits the last one's wreckage

### Content packs

The deck is split across `js/packs/`, loaded by plain `<script>` tags. Each pack is an IIFE
that pushes onto `AD.CARDS`, so **adding a deck is adding a file** — no engine changes, no
registration step, order irrelevant.

| Pack | Window | Crises | Research-grounded |
|---|---|---|---|
| `js/cards.js` (core) | mixed | 90 | 49 |
| `pack-a-honeymoon` | term months 1–14 | 38 | **38** |
| `pack-b-machinery` | term months 6–34 | 54 | **54** |
| `pack-c-consolidation` | term months 22–48 | 35 | **35** |
| `pack-d-evergreen` | any | 47 | **47** |
| `pack-e-secondterm` | `term: 2` only | 21 | **21** |
| **`pack-f-record`** | mixed | **40** | **40** |
| **`pack-g-record`** | mixed | **30** | **30** |

### Grounding

Crises derived from the research carry a `src` citation naming the documented item they riff on.
The rule is **inspired by, never copied** — take the mechanism, invent everything else.

**314 of 335 crises (94%)** are grounded this way. Every content pack is now fully
grounded; the remaining 21 ungrounded crises are original political-mechanics satire in the
core deck. Audit it yourself:

```js
AD.CARDS.filter(c => c.src).length + ' / ' + AD.CARDS.length
```

The packs got **smaller** in the rewrite (A 40→38, B 64→54, C 39→35, D 69→47). That was
deliberate. The research supports roughly 60 genuinely fresh items plus defensible sub-items;
padding back to the old counts would have meant ~15 cards per source item and a repetitive
deck. Card count is not the metric — coverage without repetition is.

**Clause routes are the thing to watch when editing a pack.** `AD.clauseRoutes()` returns how
many choices in the whole deck break each of the 16 constitutional clauses. The floor is 3.
Rewriting a pack without carrying its `breaks:` tags forward silently orphans clauses and
makes the full-set bounty unreachable — this happened once with pack A and took a separate
session to find and repair.

Card windows are **term-relative**, so a second term replays the same arc rather than falling
off the end of every `min`/`max`.

---

## The Constitution — and reaching all sixteen

Sixteen clauses, 150 score each, and a lump sum from Rusalka for every one broken if you get
the full set. The problem with a 370-card deck is that a clause with three routes in it is
statistically invisible, so the deck **surfaces the clauses you have not broken yet** — but
only once you have shown intent:

| Clauses broken | What the deck does |
|---|---|
| 0 | Nothing. You are not collecting, and clause cards are aggressive. |
| 1–2 | A gentle `+14` nudge on cards offering an unbroken clause (base weight is 10). |
| 3+ | The deck concludes you are going for all sixteen and pushes hard — up to `+110`, **divided by how many routes that clause has**, so a three-route clause gets ten times the help a five-route one does. |

The ramp matters: a strong bonus applied from the first clause cost a fixed bot 8 points of
Rookie win rate, because it force-feeds institution-damaging cards to a player who was not
asking for them. Gating it behind three clauses leaves ordinary play untouched.

The scarcity divisor also self-corrects — add routes for a starved clause later and its bonus
drops automatically, with no constant to retune.

Measured on a clause-hunting bot, 300 runs, Standard:

| | Average clauses | Full set | Best run |
|---|---|---|---|
| Flat `+14` only | 7.5 / 16 | **0%** | 15 |
| Ramped + scarcity-scaled | **10.9 / 16** | **3.7%** | **16** |

Ordinary play is unchanged (it averages 0.2–0.6 clauses and never reaches the ramp).

**Route counts are the health metric.** `AD.clauseRoutes()` returns them; the floor is 3
(`supremacy`, `citizenship`, `termlimit`, `presentment`) and the ceiling is 5. If a clause
drops below 3, the full set starts slipping out of reach again — which is exactly what happened
when pack A was rewritten and its breach tags went with it.

## Two ways to win

**Take the country** — Authority 100, via three captured Pillars.
**Take the money** — a personal fortune of **$10B**.

The fortune doesn't end your term. It's banked and cashed in at whatever ending you reach: it
upgrades a win to `the-full-set`, and it **converts a loss into `the-fortune`**. You can be
impeached, removed, and still come out ahead — which is the sharper joke, and the more
historically common outcome.

## Corruption — the Private Interests screen

Tap the cash figure in the HUD. **17 holdings across four categories:**

| | |
|---|---|
| 📡 **Media** | Buy the social platform, a cable network, the paper of record, the recommendation engine |
| ⚖️ **Lawfare** | A permanent litigation team, retain every firm so none can oppose you, litigate a critic into bankruptcy, fund anti-speech bills |
| 🤝 **Influence** | A leadership PAC, a primary warchest held purely as a threat, the judicial pipeline, the county officials |
| 💰 **Enrichment** | A personal token, a Gulf investment partner, a disclosure-free foundation, a venue portfolio |

Plus a capstone that consolidates everything into one entity.

**Holdings never grant Authority.** That's the central rule — money cannot buy the presidency
outright, or the Pillar route collapses. What it buys is *leverage*: shields that blunt incoming
damage, multipliers on your gains, and the income to buy more of both. Corruption doesn't win the
game; it buys the machine that wins the game.

Buying in public costs you standing, and a holding never shields its own purchase.

## The Residence — improvements to the White House

Tap **THE RESIDENCE** under the Authority bar. A drawn elevation of the building that gains a
layer for every structure you finish: a disco ballroom where the East Wing was, a rollercoaster
over the roof, a wrestling cage in the Rose Garden, a private zoo, a working moat, a
190-metre gilded statue of you, and eventually the name comes off the building.

Twelve structures across **Leisure & Spectacle**, **Fortification** and **Glory**.

This is the opposite track to Corruption. Holdings buy leverage; structures buy **glory** —
raw Authority and Base, immediately, in large lumps. Three rules stop it being a shop:

- **Upkeep.** Every structure bills you every month, permanently. A fully built residence burns
  ~$305M a month, so the monument goal and the $10B goal are in direct competition. Fall behind
  and it goes into arrears — scaffolding, dark windows, an unlit flame, charged to Base and Press.
- **The soft cap still applies.** Renovation Authority is *raw* Authority, hard-capped at 55.
  You can gild your way to the cap faster and not one point past it. A statue is not a branch
  of government, however visible from orbit.
- **Scrutiny.** Every structure standing is an appropriation nobody voted for, sitting in
  public, permanently. Congress and the Courts bill you `floor(built / 3)` every month and the
  Press bills you half that. It is not shielded — cancelling the shields the structures grant is
  precisely what it is for. Without it, upkeep was free for anyone on the Pillar route, and a
  fixed bot went from 56 to 86 months of survival and from 18 two-pillar runs to 143.

## The Saint Ambrose Files — the scandal that will not die

A **recurring seven-part arc** rather than a card. Auberon Vale, "longevity investor", ran the
Meridian Institute on a private island in the Freedom Ocean — officially a wellness retreat,
actually an unregistered clinic running unapproved trials, financed through an art fund half of
Washington was invested in without meaning to be. He kept a **flight manifest** and a
**guest book**. Everybody powerful is in one or the other and every one of them has a
completely reasonable explanation.

The mechanic is that **the cover-up is the scandal**. Each instalment carries a hidden `cayHeat`
alongside its meter effects, so a choice can be cheap tonight and expensive for two years:

- **Heat 0–10.** Suppressing raises it, transparency lowers it.
- Above heat 4 the story **leaks between instalments** — no card, just damage to Press, Street
  and Base, so suppression is expensive rather than merely dishonest.
- Heat also **shortens the gap**: a hot story comes back in 5 months instead of 10.
- The final instalment resolves against heat. Bury it at heat ≥ 7 without the grip to hold it
  and the run ends on **`the-cay`** — a President who survived dismantling the judiciary,
  finished by a guest book.
- The arc carries its stage across terms, so a one-term president never finds out how it ends.

## Second terms & the persistent world

Two systems that carry the long game:

**Second terms.** Surviving to the last November of term one gives you the *Re-election*, which
has a door that doesn't end the run. Win it and term two begins: the deck resets, the month
windows restart (so term two plays like a term, not an epilogue), every meter takes an
immediate hit, institutional backlash becomes permanently worse, and the Base gains a mandate.
Term two's finale is *The Twenty-Second* — you're not on the ballot, and every door there is
terminal. Authority is a **penalty** at the re-election: the more openly you've taken the
country apart, the harder a clean win becomes. The fair door closes as the other two open.

**The persistent world.** Every ending leaves a scar in `AD.SCARS`. Lose to the judiciary and
the next President starts with Courts −15. Actually succeed, and the next President inherits an
office that was already bent, with every institution watching. A chaos counter adds a further
drag for each consecutive badly-governed term — capped at 3 levels, and it deliberately spares
the Base, because your movement is yours. A clean two-term exit resets it.

---

## Balance

~10,000 simulated runs, zero errors. Win rates for a *scripted bot* — a competent human
should beat these:

| Mode | Bot win rate | Reaches 2nd term | Pillars needed |
|---|---|---|---|
| Rookie | 92.5% | 7% | 2 |
| **Standard** | **~40%** | **70%** | **3** |
| Historic | 12.5% | 80% | effectively 3, doubled backlash, 10s timer |
| Random clicking | 2.0% | 4% | — |

> **These figures predate the Residence and the Saint Ambrose arc, and have not been
> re-established.** The bot that produced them was not kept, so the newer systems were measured
> with a rebuilt (weaker) bot and are only valid as A/B comparisons under identical logic:
>
> | Change | Effect on the same bot |
> |---|---|
> | Residence, before Scrutiny | 56 → 86 months survived; 18 → 143 two-pillar runs. Far too strong. |
> | Residence, after Scrutiny | 58 → 73 months; two-pillar 23 → 24. Longer runs, no extra wins. |
> | Saint Ambrose, first pass | Rookie 83% → 56%. Far too expensive. |
> | Saint Ambrose, after tuning | Rookie 84% → 69%; Standard neutral within noise. |
>
> So Standard is where it was and **Rookie is genuinely harder than the table says**. Re-run a
> proper sweep before trusting the absolute numbers again.

Longest administration recorded: **95 months**. Standard's pillar spread (0/1/2/3 =
66/66/46/122) is the health metric to watch — a genuine curve, where 3 is the win.

Random play now dies **nine different ways**, with no single ending above ~31%: press
collapse, base collapse, general strike, a lost election, a failed contest. Failure stays
varied, which is what makes it shareable.

**Growing the deck changed the difficulty on its own.** Going from 70 to 302 crises took
optimal play from 34% to 95% with no rules change — a big deck almost always offers a good
option for whatever meter you're pumping. Two new rules pay for it: *institutional resistance*
(gains shrink as a branch nears capture) and *Authority-scaled backlash*. Both are in
`DESIGN.md` §2, along with every tuning trap found along the way.

Re-run the sweep after any tuning change — and bump the `?v=N` on the asset URLs first, or you
will measure stale cached JavaScript, which cost several passes here.

---

## Monetization hooks (already wired)

Mirrors the reference product's structure: premium one-off price plus a single optional IAP.

The **Chief of Staff Pack** is a settings toggle (`settings.pack`) and gates longer decision
timers (+8s), the full Crisis Log, and **post-crisis briefings** — a read from your Chief of
Staff on what a decision actually cost, generated from board state rather than written per
card, so it stays correct as the deck grows. Swap the toggle for a real purchase check when
you ship.

**Impact previews are deliberately not in the game.** The reference product sells them; here
the score behind a choice is never shown, at any tier. You decide on the words and find out
afterwards. Showing the numbers turned every crisis into arithmetic and killed the joke. The
only figures on a choice are the two *gates* — a cash price and an Authority requirement —
because a locked door has to say why it is locked.

---

## Satire posture

The research recommended keeping every figure fictional to preserve satire protection and
avoid app-store and right-of-publicity risk, and that's what this build does. Names, parties,
agencies and countries are invented; the *situations* are recognizable. The comedy is aimed at
the gap between authoritarian ambition and still-functioning checks — which is also where the
research says the defensible material is.

If you later decide to name real people, that is a legal decision, not a code change — but
re-read the "IP / trademark / branding considerations" section of `Full Confidence Research.md`
first, and get a games IP lawyer to clear it.

Contested or misquoted material (the `[CONTEXT FLAG]` items in `Trump stories.md`) has been
kept out of the deck or played as a joke about *the dispute itself*, per that file's guidance.
