/* ============================================================
   AMERICAN DICTATOR — audio.js
   Every sound is SYNTHESISED at runtime with WebAudio. No files,
   no fetches, no build step — the game stays a folder you can
   open on any static host, which was the whole point.

   Sounds are deliberately austere: a stamped seal, a struck bar,
   a drawer closing. No music.
   ============================================================ */

AD.Audio = {
  ctx: null,
  ready: false,
  muted: false,

  init () {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    try { this.ctx = new AC(); this.ready = true; } catch (e) { this.ready = false; }
  },

  /* Browsers block audio until a gesture; call this from the first click. */
  unlock () {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  },

  /* --- primitives ------------------------------------------------------- */
  tone ({ freq = 220, dur = 0.18, type = 'sine', gain = 0.18, slideTo = null, delay = 0 }) {
    if (!this.ready || this.muted) return;
    const t0 = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(g).connect(this.ctx.destination);
    osc.start(t0); osc.stop(t0 + dur + 0.02);
  },

  noise ({ dur = 0.22, gain = 0.14, delay = 0, hp = 400 }) {
    if (!this.ready || this.muted) return;
    const t0 = this.ctx.currentTime + delay;
    const n = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, n, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / n);
    const src = this.ctx.createBufferSource(); src.buffer = buf;
    const f = this.ctx.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = hp;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(gain, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(f).connect(g).connect(this.ctx.destination);
    src.start(t0);
  },

  /* --- the cues --------------------------------------------------------- */
  play (cue) {
    if (!this.ready || this.muted) return;
    switch (cue) {
      case 'choice':                                   // paper turn
        this.noise({ dur: 0.09, gain: 0.05, hp: 1800 });
        this.tone({ freq: 180, dur: 0.07, type: 'triangle', gain: 0.05 });
        break;
      case 'good':                                     // meter up
        this.tone({ freq: 392, dur: 0.13, type: 'triangle', gain: 0.10 });
        this.tone({ freq: 587, dur: 0.14, type: 'triangle', gain: 0.07, delay: 0.07 });
        break;
      case 'bad':                                      // meter down
        this.tone({ freq: 196, dur: 0.20, type: 'sawtooth', gain: 0.09, slideTo: 130 });
        break;
      case 'stamp':                                    // decision logged
        this.noise({ dur: 0.13, gain: 0.16, hp: 700 });
        this.tone({ freq: 96, dur: 0.16, type: 'square', gain: 0.11 });
        break;
      case 'tabloid':                                  // front page slams down
        this.noise({ dur: 0.30, gain: 0.20, hp: 300 });
        this.tone({ freq: 74, dur: 0.34, type: 'square', gain: 0.14, slideTo: 48 });
        break;
      case 'pillar':                                   // a branch falls
        [262, 330, 392, 523].forEach((f, i) =>
          this.tone({ freq: f, dur: 0.42, type: 'triangle', gain: 0.10, delay: i * 0.075 }));
        break;
      case 'doctrine':                                 // signed into being
        this.tone({ freq: 147, dur: 0.5, type: 'sine', gain: 0.12 });
        this.tone({ freq: 220, dur: 0.5, type: 'sine', gain: 0.09, delay: 0.06 });
        break;
      case 'money':                                    // cash lands
        [880, 1175, 1568].forEach((f, i) =>
          this.tone({ freq: f, dur: 0.16, type: 'sine', gain: 0.07, delay: i * 0.05 }));
        break;
      case 'clause':                                   // a clause breaks
        this.tone({ freq: 330, dur: 0.10, type: 'square', gain: 0.09 });
        this.tone({ freq: 155, dur: 0.26, type: 'sawtooth', gain: 0.10, slideTo: 92, delay: 0.06 });
        break;
      case 'collapse':                                 // a faction hits zero
        this.tone({ freq: 110, dur: 0.9, type: 'sawtooth', gain: 0.16, slideTo: 41 });
        this.noise({ dur: 0.7, gain: 0.10, hp: 200, delay: 0.05 });
        break;
      case 'win':
        [392, 523, 659, 784].forEach((f, i) =>
          this.tone({ freq: f, dur: 0.6, type: 'triangle', gain: 0.11, delay: i * 0.11 }));
        break;
      case 'tick':                                     // timer running out
        this.tone({ freq: 1400, dur: 0.04, type: 'square', gain: 0.05 });
        break;
    }
  }
};
