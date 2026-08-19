/* ============================================================
   AMERICAN DICTATOR, objectives.js
   DIRECTED CRISES: a small number of story cards don't resolve on the
   spot, they task the player with going and fixing something in a
   specific management room instead ("send this to the Senate"), with
   a deadline. One objective live at a time, shown as a compact banner
   with a Go button; succeed and a bespoke follow-up fires immediately
   via the existing run.queue, miss the deadline and a worse one does.

   run.objective is plain JSON data (it survives AD.saveRun, which is a
   JSON.stringify of the whole run) — { type, label, room, dueMonth, data }.
   The actual check()/onSuccess()/onExpire() functions live in a small
   TYPE REGISTRY here, keyed by `type`, populated by whichever content
   file defines that kind of objective (see the 'directed' section
   events in sections.js). Never put functions directly on run.objective,
   they'd silently vanish the moment the run is saved and reloaded.
   ============================================================ */

AD.OBJECTIVE_TYPES = {};   // type -> { check(run,obj)->bool, onSuccess(run,obj), onExpire(run,obj) }

AD.defineObjectiveType = function (type, def) { AD.OBJECTIVE_TYPES[type] = def; };

/* obj: { type, label, room, dueMonth, data? } — must be JSON-safe, no functions. */
AD.setObjective = function (run, obj) { run.objective = obj; };
AD.clearObjective = function (run) { run.objective = null; };

/* Polled after every management-screen action resolves (see the hook in
   AD.applySenateEffect, the one choke point almost all of them share), so
   an objective can complete the instant its condition is met. */
AD.checkObjective = function (run) {
  if (!run || !run.objective) return;
  const def = AD.OBJECTIVE_TYPES[run.objective.type];
  if (!def) return;
  let done = false;
  try { done = !!def.check(run, run.objective); } catch (e) { done = false; }
  if (done) {
    const obj = run.objective;
    run.objective = null;
    if (def.onSuccess) { try { def.onSuccess(run, obj); } catch (e) {} }
  }
};

/* Polled once a month from Engine.advance(). A missed deadline is a real
   consequence, not a quiet fail, the follow-up card says so. */
AD.tickObjectiveExpiry = function (run) {
  if (!run || !run.objective) return;
  if (AD.termMonth(run) > run.objective.dueMonth) {
    const def = AD.OBJECTIVE_TYPES[run.objective.type];
    const obj = run.objective;
    run.objective = null;
    if (def && def.onExpire) { try { def.onExpire(run, obj); } catch (e) {} }
  }
};
