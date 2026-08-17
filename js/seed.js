/* ============================================================
   AMERICAN DICTATOR — seed.js
   Deterministic runs. Every run gets a short human-typeable seed;
   the same seed plus the same choices produces the same term.

   This is the shareable-failure engine your research identifies as
   the word-of-mouth lever: "I got impeached in month 14 — seed
   RAVEN-4471" is a thing a person will actually send to a friend.

   Replaces Math.random inside the engine only. Cosmetic randomness
   (nothing currently) may still use Math.random.
   ============================================================ */

AD.Seed = {
  state: 1,
  current: null,

  WORDS: ['RAVEN','ORBIT','CIVIC','GRANT','MARCH','LEDGE','QUILL','ASPEN',
          'FLINT','TIDAL','VAULT','EMBER','NOBLE','PLUMB','SABLE','TREAD'],

  /* Make a fresh, pronounceable seed. */
  make () {
    const w = this.WORDS[Math.floor(Math.random() * this.WORDS.length)];
    const n = 1000 + Math.floor(Math.random() * 9000);
    return w + '-' + n;
  },

  /* FNV-1a — small, fast, good enough to scatter a string into 32 bits. */
  hash (str) {
    let h = 0x811c9dc5;
    const s = String(str).toUpperCase();
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 0x01000193) >>> 0;
    }
    return h >>> 0;
  },

  /* mulberry32 — tiny, well-distributed, entirely deterministic. */
  set (seed) {
    this.current = String(seed).toUpperCase();
    this.state = this.hash(this.current) || 1;
    return this.current;
  },

  next () {
    this.state |= 0;
    this.state = (this.state + 0x6D2B79F5) | 0;
    let t = Math.imul(this.state ^ (this.state >>> 15), 1 | this.state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  },

  /* Convenience matching Math.random's shapes. */
  pick (arr) { return arr[Math.floor(this.next() * arr.length)]; },
  int (n)    { return Math.floor(this.next() * n); },

  /* Restore a saved run's RNG position so resuming is deterministic. */
  restore (run) {
    if (!run || !run.seed) return;
    this.set(run.seed);
    // fast-forward by the number of draws already made
    const steps = run.rngSteps || 0;
    for (let i = 0; i < steps; i++) this.next();
  }
};

/* The engine calls AD.rng() everywhere it used Math.random. It records how
   many numbers it has consumed so a resumed save lands on the same sequence. */
AD.rng = function () {
  const run = AD.Engine && AD.Engine.run;
  if (!run || !run.seed) return Math.random();
  run.rngSteps = (run.rngSteps || 0) + 1;
  return AD.Seed.next();
};
