/* ============================================================
   AMERICAN DICTATOR, music.js
   Background music: public-domain United States Marine Band marches
   (recordings in the /Music folder), shuffled and looped at a low
   volume under the game. Starts on the first user gesture (browsers
   gate audio) and honours the Music setting. Uses its own <audio>
   element, entirely separate from the WebAudio sound-effects synth.
   ============================================================ */

AD.Music = {
  DIR: 'Music/',
  tracks: [
    "Austrian Army - United States Marine Band.mp3",
    "Brooke's Triumphal March - United States Marine Band.mp3",
    "Emperor's Maneuver - United States Marine Band.mp3",
    "Girimeo Polka - United States Marine Band.mp3",
    "In God We Trust - United States Marine Band.mp3",
    "Kaiser Friedrich - United States Marine Band.mp3",
    "Lola - United States Marine Band.mp3",
    "Manila - United States Marine Band.mp3",
    "Maria Theresia - United States Marine Band.mp3",
    "Myositis - United States Marine Band.mp3",
    "North and South - United States Marine Band.mp3",
    "Old Berlin - United States Marine Band.mp3",
    "Rifle Regiment - United States Marine Band.mp3",
    "Salute To Mexico - United States Marine Band.mp3",
    "Salute To Washington - United States Marine Band.mp3",
    "Southern Ideal - United States Marine Band.mp3",
    "Spanish Dance - United States Marine Band.mp3",
    "Star Spangled Banner - United States Marine Band.mp3",
    "Strenuous Life - United States Marine Band.mp3",
    "The Bachelors - United States Marine Band.mp3",
    "The Coquette - United States Marine Band.mp3",
    "The Premier - United States Marine Band and Arthur S.Witcomb.mp3",
    "The Voice Of Our Nation Medley Part 1 - United States Marine Band.mp3",
    "True To The Flag - United States Marine Band.mp3",
    "Unser Kaiserhaus - United States Marine Band.mp3",
    "With Shot and Shell - United States Marine Band.mp3",
    "Ye Ancients - United States Marine Band.mp3"
  ],
  el: null, order: [], idx: 0, on: true, started: false,

  init (settings) {
    this.on = !(settings && settings.music === false);   // default ON
    if (this.el) return;
    try { this.el = new Audio(); } catch (e) { this.el = null; return; }
    this.el.volume = 0.20;
    this.el.preload = 'none';
    this.el.addEventListener('ended', () => this.next());
    this.el.addEventListener('error', () => this.next());   // skip a missing/bad track
    // shuffle (Math.random is fine here, music order is not part of run determinism)
    this.order = this.tracks.map((_, i) => i);
    for (let i = this.order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = this.order[i]; this.order[i] = this.order[j]; this.order[j] = t;
    }
    this.idx = 0;
  },

  src (i) { return this.DIR + encodeURIComponent(this.tracks[i]); },

  play () {
    if (!this.on || !this.el || !this.tracks.length) return;
    this.el.src = this.src(this.order[this.idx % this.order.length]);
    const p = this.el.play();
    if (p && p.catch) p.catch(() => {});   // autoplay may be blocked until a gesture
  },

  next () { this.idx++; this.play(); },

  /* Called from the first user gesture. */
  start () {
    if (this.started || !this.on || !this.el) return;
    this.started = true;
    this.play();
  },

  stop () { if (this.el) { try { this.el.pause(); } catch (e) {} } },

  setOn (on) {
    this.on = !!on;
    if (this.on) { if (!this.started) this.start(); else { const p = this.el && this.el.play(); if (p && p.catch) p.catch(() => {}); } }
    else this.stop();
  }
};
