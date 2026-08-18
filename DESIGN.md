# American Dictator — Design Document

## 1. The pitch

*Full Confidence*, inverted. In that game you are a Prime Minister trying to **survive**.
Here you are a President trying to **win** — and winning means the republic loses.

That inversion is the whole design problem. A pure survival game has one failure axis
(don't let a meter hit zero). This game needs two axes at once: *don't die* **and**
*accumulate*. Every interesting decision in the deck is a trade between them.

---

## 2. The board

### Five power centres

| Meter | Start | At 0 | At 100 |
|---|---|---|---|
| 🔥 **The Base** | 62 | Primaried — the movement finds someone louder | **Also fatal.** See the fuse below. Cannot be captured. |
| 🏛️ **Congress** | 55 | Impeached and removed | Pillar: *The Enabling Caucus* |
| ⚖️ **The Courts** | 48 | Total injunction lockdown | Pillar: *The Robed Rubber Stamp* |
| 📰 **The Press** | 47 | Every story breaks at once | Pillar: *The Ministry of Truthiness* |
| 🪧 **The Street** | 56 | General strike; the country stops | Pillar: *Boots on Main Street* |

The Base starting highest and the Press lowest is deliberate: the deck contains roughly
**3 press-negative choices for every 2 press-positive** ones (109 vs 67, measured), so Press
is structurally the most dangerous meter. Base is the opposite — 120 positive vs 55 negative.

### The Base is a band, not a number

Because almost every authoritarian choice *pleases the base*, an uncapped Base meter made
early builds trivially one-dimensional. Three rules fix it:

- **Decay:** `AD.BASE_DECAY = -3` per month. A movement you don't feed cools off.
- **Ceiling:** sitting at ≥ `AD.BASE_DANGER` (95) for `AD.BASE_FUSE` (3) **consecutive**
  months ends the run — the movement outgrows you and the Vice President is delighted to help.
- **Runway:** it's a fuse, not a trapdoor. You get warned for two months first.

The Base is therefore the only meter you must actively steer *away* from its maximum.

### Authority — the central rule

```
authority = min(SOFT_CAP, rawAuth) + pillarAuth
```

- `rawAuth` — earned one decision at a time. **Hard capped at `AD.SOFT_CAP` = 55.**
- `pillarAuth` — earned *only* by capturing a branch. Ignores the cap.

With `pillarValue = 22` on Standard: `55 + 22 + 22 = 99`. **One point short.**

That missing point is the entire design. No amount of incremental authoritarianism gets you
to 100, and neither do two captured branches. A dictatorship costs **three of the four**.
Grinding is not a strategy — you have to actually take the government.

The deck offers ~+499 raw Authority across a full playthrough against a cap of 55, so the cap
binds early and hard. When it does, the resolution card says so explicitly:
`CAPPED AT 55 — TAKE A BRANCH`.

### Institutional resistance — the brake on the climb

Gains on a **capturable** branch are cut as it approaches capture:

| Meter value | Multiplier on positive effects |
|---|---|
| below `RESIST_SOFT` (58) | ×1.00 |
| 58 – 75 | ×`RESIST_SOFT_MULT` (0.80) |
| `RESIST_HARD` (76) and above | ×`RESIST_HARD_MULT` (0.60) |

The last quarter of taking an institution is where the people who will actually
refuse are. Mechanically this exists because **deck size is a difficulty setting**:
with 70 crises a focused player often had no good option for their target meter, but
with 302 there is nearly always one, and optimal play hit a 95% win rate. Resistance
restores the cost of the endgame climb without touching 900 hand-written numbers.

Applies to gains only, and never to the Base, which has its own dynamics.

### Escalating backlash — the difficulty curve

Backlash lands on **the branch you are currently closest to capturing**, and has three
additive sources:

```
pressure = pillarsTaken × pressureMult      // every branch taken hardens the next
         + termPressureBonus                // a second term is permanently worse
         + floor(authority / 50)            // the continuous brake
```

The Authority term is the important one: resistance scales with *what you have become*,
not just with what you have formally captured. It is also sharp — a divisor of 45 instead
of 50 adds a second point at Authority 90 and drops optimal play from 38% to 22%.

It targets rather than carpet-bombs. An early version applied the drain to *every* unlocked
meter, which made the third pillar mathematically unreachable and flattened Historic to a 0%
win rate. Targeting keeps the pressure predictable enough to plan around and specific enough
that the third pillar is the hardest thing in the game.

Thematically: the institution with the most to lose fights hardest, and fights harder for
every colleague it has already watched fall.

### Cash

Personal, not federal. Starts at $3B. Gated choices spend it (`cost`). It buys options and
never appears on a ballot. Currently a light system — the clearest expansion hook.

---

## 3. Difficulty

Set in `AD.DIFFS` (`js/state.js`). All tuning constants live in that one file.

| | Rookie | **Standard** | Historic |
|---|---|---|---|
| Months | 48 | 48 | 40 |
| Capture threshold | 90 | 100 | 100 |
| Pillar value | 26 | 22 | 22 |
| **Pillars to win** | **2** | **3** | **3** |
| Decision timer | 20s | 14s | 10s |
| Starting cash | $4B | $3B | $2B |
| Backlash multiplier | ×1 | ×1 | **×2** |

---

## 4. Doctrines

Permanent rule changes unlocked by crossing Authority thresholds. Each is a legal theory that
sounds reasonable until the second sentence.

| At | Doctrine | Effect |
|---|---|---|
| 15 | The Unitary Executive | Courts damage −30% |
| 32 | The Immunity Shield | **Once per term**, a faction hitting 0 is restored to 22 instead of ending you |
| 48 | Standing Emergency | +1 raw Authority every month, forever |
| 64 | Anticipatory Obedience | All positive faction effects +35% |
| 80 | The Cult of Personality | The Base can never fall below 34 (it can still rise fatally) |

Note that 48/64/80 sit above the raw cap of 55, so the last three doctrines are **only**
reachable through Pillars. The upgrade track and the win condition pull in the same direction.

---

## 5. Structure of a term

All beats are scheduled against the **term** month (`AD.termMonth`), so term two gets its own
Address, Midterms and November rather than falling off the end of every window at month 49.

| Term month | Beat |
|---|---|
| 1 | Opening crises gated to early-term material (inauguration, day-one orders, pardons) |
| ~12 | **The Address** — unity / grievance / emergency. A tone-setter with real costs. |
| ~23 | **The Midterms** — you choose what the election is *about*; the outcome is scored from the meters that choice depends on. Three tiers, each with a front page. |
| ~36 | **The Address** again |
| any | **Pillar backlash** — fires the month after any capture. Unique card per branch. |
| last | **The Re-election** (term 1) or **The Twenty-Second** (term 2) — see §9. |

> The last-November card must be selected through `AD.scriptedFor`, not hardcoded. An early
> version pinned `draw()` to the term-two finale, which made the Re-election unreachable and
> ended every first term after four years.

---

## 6. Endings

18 total, each with a full *National Scream* front page — the shareable failure state the
research identifies as the word-of-mouth engine.

**Wins:** `dictator` · `indefinite` · `certified` · `second-term-consolidation` · `third-term`
**Losses:** `zero-base` · `max-base` · `zero-congress` · `zero-courts` · `zero-press` ·
`zero-street` · `peaceful-transfer` · `merely-president` · `the-count` · `the-standoff` ·
`the-refusal` · `two-terms` · `the-succession`

`merely-president` is the thematic heart: you held the most powerful office on Earth for four
years and the Constitution finished the term standing. For a president that's a legacy. Here
it's a loss.

---

## 7. Balance data

~10,000 simulated runs across tuning passes, zero errors. Final figures on the 302-card deck,
with second terms and the persistent world live:

Measured on the final 302-card / 1,208-choice deck with wildcards live:

| Strategy / mode | Win | Avg pillars | Ending kinds |
|---|---|---|---|
| Pillar-focused / Rookie | 89.0% | 1.78 | 4 |
| **Pillar-focused / Standard** | **38.0%** | **1.74** | 4 |
| Pillar-focused / Historic | 9.0% | 0.97 | 4 |
| Random clicking / Standard | 0.8% | 0.00 | 8 |

Longest administration recorded: **95 months**. The Standard pillar distribution
(0/1/2/3 = 66/66/46/122) is the number to watch — a genuine spread, where 3 is the win.

**Sampling noise is ±3–4 points** at N=250. Do not chase a 2-point move; re-run at N≥500
before concluding a constant did anything.

### The press rebalance

`zero-press` once accounted for **47%** of every random-play death — press was the reflexive
cost on 300 of 302 cards, and 65% of its deficit sat on cards that were not about the press.
Fixed in the content, not the engine: incidental press costs capped at −5 with half the
trimmed cost moved to the Base (208 choices), ties then re-spread by severity so distinct
choices stayed distinct (67 choices), and 7 cards with no press-safe option hand-fixed.

Result: press drift −1.37 → **−0.56**, `zero-press` 47% → **31%**, and the deck lost ~700
points of net cost — which is why `RESIST_HARD_MULT` came down from 0.60 to 0.58 to hold the
difficulty. Removing cost from the content **must** be paid back in the rules or the game
drifts easier.

### Tuning traps found by simulation

Every one of these looked reasonable on paper and was wrong in play:

- **Deck size is a difficulty setting.** Going from 70 to 302 crises took optimal play from
  34% to 95% with no rules change at all, because a large deck almost always offers a good
  option for whatever meter you are pumping. This is the single most counter-intuitive result
  here: *adding content makes the game easier*, and it has to be paid for in the rules.
  Institutional resistance is that payment.
- **Blanket drift makes capture impossible.** Draining every unlocked meter each month flattened
  Historic to a 0% win rate. Backlash must **target** the branch you're closest to taking.
- **Don't compound the multipliers.** `pressureMult × termPressureBonus` gave Historic 4–6
  points of drain a month. The difficulty multiplier scales the pillar backlash only.
- **Uncapped inheritance is a death spiral**, and dragging the Base with it pushed `zero-base`
  to 40% of all endings. Cap the chaos, spare the Base.
- **A second term doubles the runway**, so it must cost more than it gives.
- **Historic's pillarValue is a cliff, not a slope.** At 22 the mode is unwinnable (0%); at 25
  it is easy (63%); 23 lands at 15.6%. Because `SOFT_CAP + 2 × pillarValue` sits right at 100,
  one point either way moves the win condition between "two pillars" and "three."

### The wildcard pass

Adding a fourth absurd option to all 302 cards moved the balance twice, hard:

1. Written as "unexpectedly wholesome," the wildcards handed out large positive effects — a
   free repair every turn. Optimal play went **40% → 100%** and random play 2% → 15%.
2. Fixing that with two stacked mechanical passes double-multiplied every negative (one
   wildcard hit −20 Base) and a hard `+3` cap flattened distinct jokes into identical numbers.

Resolved by re-deriving from the authored originals with **one** transform: positives scaled
×0.45 (scaled, not capped, so gradation survives), negatives ×1.5, a floor of 7 points of
institutional cost per wildcard, and forced-negative Authority on any wildcard that is net
positive for your standing. 243 of 302 wildcards have distinct effect signatures.

Final: drift press −0.58 / street −0.57 / courts −0.77 / congress −0.43, optimal play 38%,
random 0.8% across 8 endings. Only 7 wildcards are the top-Authority pick on their card.

### The corruption track

Cash was the thinnest system in the game; it is now the second progression axis, with a $10B
win condition of its own. Tuning it took five passes and every failure was instructive:

- **Free monthly points are the exploit.** A `+2/month` drip on a meter is +96 over a term, and
  nothing in the game offsets that — it cancels the backlash system outright. Optimal play went
  to 100%. Nearly all drips became **gain multipliers** instead: money should make your decisions
  better, not generate progress while you sleep.
- **Stacking multipliers need a cap**, exactly like shields. Seven assets stacking additively gave
  +50% on every positive effect. Both are now capped per meter (shields 0.40, gains 0.30).
- **An asset must not shield its own purchase.** Passives are read *before* the asset is added.
- Assets grant **no Authority at all**. Letting money buy Authority would collapse the soft-cap
  and Pillar design that the whole game rests on.

**EXPOSURE — the fix for the flattening.** Holdings were pure upside once bought, so mastering
both tracks won ~77% against a 38% baseline. Every holding is now surface area: one point of
monthly damage to press *and* courts per `EXPOSURE_PER` (4) holdings owned. A wide portfolio is
genuinely worse than a focused one, and you can no longer simply accumulate everything.

Extremely sensitive: `EXPOSURE_PER` of 2 kills every build (0% win), 6 barely bites (67%), 4
lands optimal play at **50.7%** — corruption stays clearly worth using without doubling your
odds. A dedicated money build still reaches $10B in **59%** of runs.

### A process warning

Several tuning passes were measured against **stale cached JavaScript** and produced numbers
that moved when nothing had changed. Asset URLs now carry a `?v=N` query for this reason —
bump it after editing, and sanity-check that a constant you just changed actually reads back
from the page before trusting any measurement.

### Re-running the sweep

The rules layer is DOM-free, so you can simulate thousands of runs in the browser console
after any tuning change. Loop: `AD.newRun()` → `AD.Engine.start()` → repeatedly
`AD.Engine.draw()` / `AD.Engine.choose(i)` / `AD.Engine.advance()` until `run.over`, then read
`run.endingId`, `run.authority` and `Object.keys(run.locked).length`. Call
`AD.saveLibrary([])` afterwards so simulated terms don't pollute the Presidential Library.

**Watch for:** any single ending above ~35% of random runs (a meter is mis-tuned), fewer than
~8 distinct endings, or a Standard pillar distribution where 3 pillars is either near-zero or
common.

---

## 7b. The Residence (renovations.js)

The third spend track, and deliberately the worst one on a spreadsheet. Twelve structures
across Leisure & Spectacle, Fortification and Glory, rendered as a layered SVG elevation that
gains a piece for every build.

| Rule | Why |
|---|---|
| **Authority granted is `rawAuth`** | So `SOFT_CAP` (55) still binds. Gilding gets you to the cap faster and not one point past it — three Pillars remain the only route to 100. |
| **Upkeep, monthly, forever** | Puts the monument goal in direct competition with the $10B goal. Full build ≈ $305M/mo. Arrears charge Base and Press instead of cash. |
| **Scrutiny: `floor(built / 3)` to Congress and Courts, half to Press, monthly, unshielded** | The one that actually matters. See below. |

Passives merge into the **same pool as corruption.js** (`AD.passives`), so the 0.40 shield and
0.30 gain caps apply across both tracks and no combined build becomes immune.

**Why Scrutiny exists.** Upkeep alone was not a real price: a player on the Pillar route does
not need cash, so a $305M monthly bill was free and the shields, Base lumps and raw Authority
were pure upside. Measured on a fixed bot, the Residence without Scrutiny took survival from
**56 to 86 months** and two-pillar runs from **18 to 143**. With Scrutiny at `/3` and Base
lumps trimmed ~25%, the same bot lands at 73 months and two-pillar 24 vs a baseline of 23 —
*longer runs, no extra wins*, which is the intended shape.

## 7c. The Saint Ambrose Files (cay.js)

A seven-part recurring arc, scheduled from `AD.scriptedFor` so it yields to the Address, the
Midterms and every November. Fictional throughout: a longevity clinic on a private island, a
flight manifest, a guest book, a death in custody, and a two-year fight about whether a
document can be read.

The mechanic is **heat**, 0–10, carried on `run.cay` and charged by a `cayHeat` field on each
choice *separately from its meter effects* — so a choice can be cheap tonight and expensive for
two years.

- Suppress raises heat, transparency lowers it.
- Above `CAY_LEAK_AT` (4) the story **leaks between instalments** with no card at all: flat
  damage to Press, Street and Base at `1 + floor(heat/4)`, on a `(heat-3) × 4.5%` monthly roll.
  This is what makes suppression expensive rather than merely dishonest.
- Heat shortens the gap: `max(4, CAY_GAP - floor(heat/2))`, so 10 months becomes 5.
- Stage and heat **carry across terms**; only the schedule resets. A one-term president never
  finds out how it ends.
- The finale resolves against heat and grip. Bury at heat ≥ 7 with
  `courts×0.5 + congress×0.3 + press×0.2 < 52` and the run ends on **`the-cay`**.

**Tuning history.** First pass cost Rookie 83% → 56% — the arc was eating ~15% of all crisis
slots with mostly meter-negative options, and the transparency options were gutting the Base
(−6 to −16 each, five to seven times a term). Fixed by halving those Base costs, softening the
worst suppression, and widening the gap from 6 to 10 months. Rookie now 84% → 69%, Standard
neutral within noise.

## 7d. No impact previews

The score behind a choice is never displayed, at any tier — the paid pack does not unlock it
either. You decide on the words and find out afterwards. Showing the numbers turned every
crisis into arithmetic. The only figures on a choice are the two *gates* (a cash price, an
Authority requirement), because a locked door has to say why it is locked.

---

## 8. Architecture

```
state.js    data shapes, tuning constants, persistence   (no logic)
cards.js    content                                       (no logic)
events.js   scripted beats + dynamic outcome resolvers
doctrines.js upgrades, each with its own apply()
endings.js  endings + scoring
engine.js   ALL rules. Never touches the DOM.
ui.js       ALL rendering. Never decides anything.
main.js     bootstrap, input, turn loop
```

Classic `<script>` tags with a single `AD` global — not ES modules — specifically so the game
runs from any static host with no build step. Keep it that way unless you're moving to a
bundler deliberately.

**The one invariant worth protecting:** `run.log[].deltas` is persisted and rendered by the
Crisis Log, so it must only ever contain meter keys (`base`, `congress`, `courts`, `press`,
`street`, `auth`, `cash`). Transient UI flags belong on the returned `out` object, not in
`deltas`. A flag leaking into `deltas` was a real crash during development.

### Turn sequence

```
draw()   → election if final month · queued backlash · scripted beat · weighted random
choose() → apply doctrines to the effect → apply to meters → capture check
           → collapse check (Immunity Shield) → Authority-100 check → doctrine unlock
advance()→ Standing Emergency tick → Base decay → drift → targeted backlash
           → Understudy fuse → collapse check
```

Overlays (front pages, doctrine unlocks) **gate the turn** rather than firing on a timer — a
timed popup could otherwise land after the player had already tapped to the next crisis.
`Next Crisis` plays the queue out first, then advances.

---

## 9. Second terms

Surviving to the last November of term one triggers the **Re-election**, the only election
card with a non-terminal door.

| Door | Resolved from | Outcome |
|---|---|---|
| Run it straight | Base, Street, Press, Congress — **minus Authority × 0.30** | second term · `peaceful-transfer` |
| Contest the count | Courts, Congress, Street (+14 with the election commission) | `certified` (win) · second term (contested) · `the-count` |
| Postpone — *locked below Authority 62* | average grip | `indefinite` (win) · `the-standoff` · `the-refusal` |

Authority acting as a **penalty** on the clean win is the point of the card: the fair door
closes as the other two open. You cannot spend four years dismantling the country and also
expect to be re-elected for it.

**What changes in term two** (`Engine.beginSecondTerm`):
- `termStart` jumps, `maxMonths` extends, `month` keeps counting to a possible 96
- Every unlocked institution takes −11 (−16 if you contested your way in)
- The Base gains +8 — a mandate is a mandate
- `termPressureBonus = 1` — permanent extra backlash on top of the pillar drain
- `run.seen` clears and month windows restart, so term two plays like a term
- Opens on **The Second Inaugural**, then six `term: 2` crises enter the pool

Term two's finale is **The Twenty-Second**: you are not on the ballot, and all three doors are
terminal — `two-terms`, `the-succession`, or a third term that resolves on grip.

---

## 10. The persistent world

Every ending leaves a **scar** (`AD.SCARS` in `state.js`) applied to the next President's
starting meters. Lose to the judiciary and your successor starts with Courts −15. Actually
build the dictatorship and they inherit an office already bent into a new shape, with every
institution pre-warned.

On top of that, a **chaos counter** adds `CHAOS_DRAG` (2) per consecutive badly-governed term.

Two guardrails, both learned from simulation:
- **`CHAOS_CAP = 3`.** Uncapped, a long save file spirals into unwinnable.
- **The drag spares the Base.** Institutions inherit the mess; your movement is yours. Dragging
  the Base too made `zero-base` swallow 40% of all endings.

A clean two-term exit or an honest electoral defeat resets the counter to zero.

The Presidential Library tags inherited runs, so the scoreboard now records a lineage rather
than a list.

---

## 11. Achievements & briefings

**Achievements** (`achievements.js`) — 20, five secret, evaluated at `finish()` *before* the
library is written so tests that count past administrations don't include the run that just
ended. Newly unlocked ones are called out on the ending screen; the full gallery lives in the
Library with secrets masked until earned.

**Post-crisis briefings** (`briefings.js`) — the fourth Chief of Staff Pack feature. Generated
from board state rather than written per card, so they stay correct as the deck grows: the
headline movement, the branch closest to collapse, the branch closest to capture, the Authority
cap, the Base band, where the backlash is landing, and money.

---

## 12. Known gaps / roadmap

Honest list of what this framework does *not* do.

**Content**
- 70 crises supports several full runs before repetition; a two-term game burns through the
  deck faster still. The reference product ships 300+. This remains the single highest-value
  thing to expand, and `WRITING-GUIDE.md` exists to make it a writer's job.
- No branching chains longer than 2 (`choice.queue` supports it; almost nothing uses it).

**Systems**
- **Cash is thin.** Only a handful of choices use `cost`. A real corruption economy — buy
  senators, settle suits, fund primaries — is the most obvious depth expansion.
- **No live events / downloadable scenario packs.** `AD.CARDS` is a plain array, so a pack is
  just a second file that pushes onto it; there is no remote content pipeline.
- No localisation, no audio.

**Platform**
- Web only. Deliberately Capacitor-shaped (no build step, self-contained, mobile-first,
  `viewport-fit=cover` and safe-area padding in place) but not wrapped or device-tested.
- Accessibility is a first pass, not an audit: reduced motion, `role="meter"` with live values
  on every faction, `aria-live` on the crisis and warning regions, keyboard focus rings and
  number-key shortcuts. Not verified against a real screen reader on a real device.

**Testing**
- Balance is verified by simulation; there is no unit test suite, and the harness is ad-hoc
  console code rather than a committed script.
