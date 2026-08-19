/* ============================================================
   AMERICAN DICTATOR, ui.js
   Everything that draws. No rules live in here.
   ============================================================ */

AD.UI = {

  el: id => document.getElementById(id),
  settings: null,

  /* ---------- screen routing ---------- */
  show (id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const s = this.el('screen-' + id);
    if (s) s.classList.add('active');
    this.current = id;
  },

  overlay (id, on) {
    const o = this.el('ov-' + id);
    if (!o) return;
    o.hidden = !on;
    // Move focus into the dialog on open so screen-reader and keyboard users
    // land on its title rather than being stranded behind it.
    if (on) {
      const h = o.querySelector('.panel-h, .dos-head, h2');
      if (h) {
        if (!h.hasAttribute('tabindex')) h.setAttribute('tabindex', '-1');
        setTimeout(() => { try { h.focus(); } catch (e) {} }, 40);
      }
    }
  },

  /* Localise the static markup: every element with data-i18n gets its text from
     AD.t(key); data-i18n-ph fills a placeholder; data-i18n-html sets innerHTML
     (for the few strings that carry markup). Called at boot and on every language
     change, so switching language re-skins the whole shell without a reload. */
  localizeDOM (root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = AD.t(el.getAttribute('data-i18n'));
    });
    (root || document).querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = AD.t(el.getAttribute('data-i18n-html'));
    });
    (root || document).querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.setAttribute('placeholder', AD.t(el.getAttribute('data-i18n-ph')));
    });
  },

  /* Give every management overlay a consistent close affordance: a round ✕ in
     the top-right corner that fires the overlay's OWN close action (so any
     turn-advance or re-render tied to that close still happens). One obvious,
     uniform way out of every screen, injected once so the markup stays DRY. */
  installOverlayCloses () {
    document.querySelectorAll('.overlay').forEach(ov => {
      const closer = ov.querySelector('[data-act$="-close"]');
      if (!closer) return;                                  // paper/dossier close differently
      const panel = closer.closest('.panel, .sheet') || ov.firstElementChild;
      if (!panel || panel.querySelector('.ov-x')) return;
      const x = document.createElement('button');
      x.className = 'ov-x';
      x.setAttribute('aria-label', 'Close');
      x.setAttribute('data-act', closer.getAttribute('data-act'));
      x.textContent = '✕';
      panel.appendChild(x);
    });
  },

  /* ---------- portrait ---------- */
  portraitSVG (p, party) {
    const P = AD.PORTRAIT;
    p = p || {};
    const hair = P.hair[(p.hair || 0) % P.hair.length];
    const skin = P.skin[(p.skin || 0) % P.skin.length];
    const tie  = P.tie[(p.tie || 0) % P.tie.length];
    const suit = P.suit[(p.suit || 0) % P.suit.length];
    const shade = this.darken(skin, .18);
    // Body size (build) scales the torso horizontally around the centre line, so
    // the president reads fatter or thinner while the head stays put. Sex swaps
    // the hair and the neckline (a tie for one, an open collar for the other).
    const build = P.build[(p.build == null ? 2 : p.build) % P.build.length];
    const female = ((p.sex || 0) % 2) === 1;
    const bodyT = `translate(${(50 - 50 * build).toFixed(2)} 0) scale(${build} 1)`;

    const neckline = female
      ? `<path d="M43 79 Q50 91 57 79 Z" fill="${skin}"/>
         <circle cx="50" cy="86" r="1.5" fill="#efe9dc"/>`
      : `<path d="M41 79 L50 97 L59 79 Z" fill="#efe9dc"/>
         <path d="M50 89 L45.5 97 L50 116 L54.5 97 Z" fill="${tie}"/>`;

    const hairShape = female
      ? `<path d="M24 50 C22 30 40 16 55 21 C70 25 78 37 76 52 C74 45 71 41 69 40 C71 55 70 67 67 76 L61 74 C65 61 64 48 61 43 C53 37 41 38 35 43 C33 50 34 63 38 76 L32 76 C29 65 27 54 29 43 C27 46 25 52 24 50 Z" fill="${hair}"/>`
      : `<path d="M26 41 C29 25 46 18 60 23 C69 26 74 33 74 42 C67 32 52 31 42 37 C36 40 29 45 26 41 Z" fill="${hair}"/>
         <path d="M28 34 C36 24 54 21 66 27 C60 24 44 25 34 33 Z" fill="${this.darken(hair, .12)}"/>`;

    return `<svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Presidential portrait">
      <rect width="100" height="118" fill="#0f0c09"/>
      <g transform="${bodyT}">
        <path d="M6 118 C9 92 27 83 40 79 L60 79 C73 83 91 92 94 118 Z" fill="${suit}"/>
        ${neckline}
        <rect x="43" y="61" width="14" height="21" rx="6" fill="${shade}"/>
        <circle cx="33" cy="95" r="3.2" fill="${party}"/>
      </g>
      <ellipse cx="27.5" cy="47" rx="4" ry="6" fill="${shade}"/>
      <ellipse cx="72.5" cy="47" rx="4" ry="6" fill="${shade}"/>
      <ellipse cx="50" cy="45" rx="21" ry="25" fill="${skin}"/>
      ${hairShape}
      <ellipse cx="42.5" cy="45" rx="2.2" ry="1.7" fill="#1a1512"/>
      <ellipse cx="57.5" cy="45" rx="2.2" ry="1.7" fill="#1a1512"/>
      <path d="M43 57 Q50 61.5 57 57" stroke="${this.darken(skin,.45)}" stroke-width="1.7" fill="none" stroke-linecap="round"/>
    </svg>`;
  },

  darken (hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    const r = Math.max(0, ((n >> 16) & 255) * (1 - amt)) | 0;
    const g = Math.max(0, ((n >> 8) & 255) * (1 - amt)) | 0;
    const b = Math.max(0, (n & 255) * (1 - amt)) | 0;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  },

  /* ---------- HUD + meters ---------- */
  /* Animate a number element from one value to another (easeOutCubic). Falls
     back to an instant set when reduce-motion is on or nothing changed. The
     `fmt` maps the running float to display text. */
  rollNum (el, from, to, fmt, dur) {
    if (!el) return;
    fmt = fmt || (v => String(Math.round(v)));
    if ((this.settings && this.settings.motion) || from == null || from === to) {
      el.textContent = fmt(to); return;
    }
    const start = performance.now(), D = dur || 460;
    const step = now => {
      const p = Math.min(1, (now - start) / D);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(from + (to - from) * e);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt(to);
    };
    requestAnimationFrame(step);
  },

  renderHUD () {
    const run = AD.Engine.run;
    this.el('hud-date').textContent = AD.dateLabel(run.month) +
      (run.term > 1 ? ' · 2nd Term' : '');
    this.el('hud-rank').textContent = AD.rankFor(run.authority);
    const inc = AD.passives(run).income || 0;
    const cashEl = this.el('hud-cash');
    const prevCash = this._hudCash; this._hudCash = run.cash;
    cashEl.innerHTML = '💰 $<span class="hud-cash-n">' + run.cash.toFixed(1) + '</span>B' +
      (inc ? '<em>+' + Math.round(inc * 1000) + 'M</em>' : '');
    if (prevCash != null && prevCash !== run.cash)
      this.rollNum(cashEl.querySelector('.hud-cash-n'), prevCash, run.cash, v => v.toFixed(1));
    cashEl.classList.toggle('rich', run.cash >= AD.wealthGoal(run));
    cashEl.title = run.cash >= AD.wealthGoal(run)
      ? 'Personal wealth. The fortune is secured.'
      : `Personal wealth, $${(AD.wealthGoal(run) - run.cash).toFixed(1)}B short of the fortune`;

    // The national treasury, a separate pool that funds wars and moves with tariffs.
    const purseEl = this.el('hud-purse');
    if (purseEl) {
      const purse = AD.purse(run);
      const prevPurse = this._hudPurse; this._hudPurse = purse;
      purseEl.innerHTML = '🏛️ $<span class="hud-purse-n">' + Math.round(purse) + '</span>B';
      if (prevPurse != null && prevPurse !== purse)
        this.rollNum(purseEl.querySelector('.hud-purse-n'), prevPurse, purse, v => String(Math.round(v)));
      purseEl.classList.toggle('broke', purse <= 50);
    }
    document.documentElement.style.setProperty('--party', run.color);

    const prevAuth = this._hudAuth; this._hudAuth = run.authority;
    this.rollNum(this.el('auth-num'), prevAuth, run.authority);
    this.el('auth-fill').style.width = run.authority + '%';
    this.el('auth-cap').style.left = AD.SOFT_CAP + '%';

    const pico = this.el('ico-phone'); if (pico && !pico.innerHTML) pico.innerHTML = AD.icon('phone');
    const wico = this.el('ico-war');   if (wico && !wico.innerHTML) wico.innerHTML = AD.icon('war');
    const eico = this.el('ico-econ');  if (eico && !eico.innerHTML) eico.innerHTML = AD.icon('economy');
    const dico = this.el('ico-pardon'); if (dico && !dico.innerHTML) dico.innerHTML = AD.icon('pardon');
    const chip = this.el('const-chip');
    const cn = AD.clauseCount(run);
    chip.innerHTML = '<span class="chip-ico">' + AD.icon('constitution') + '</span>THE CONSTITUTION <b>' + cn + '/' + AD.CLAUSES.length + '</b>';
    chip.classList.toggle('full', AD.allClausesBroken(run));
    chip.classList.toggle('started', cn > 0);

    const rchip = this.el('reno-chip');
    const rn = (run.renos || []).length;
    rchip.innerHTML = '<span class="chip-ico">' + AD.icon('residence') + '</span>THE RESIDENCE <b>' + rn + '/' + AD.RENOS.length + '</b>';
    rchip.classList.toggle('started', rn > 0);
    rchip.classList.toggle('full', rn === AD.RENOS.length);
    rchip.title = rn
      ? `Upkeep −$${Math.round(AD.upkeep(run) * 1000)}M every month`
      : 'The Residence, improvements to the White House';

    const warns = AD.Engine.warnings();
    this.el('warnings').innerHTML = warns.map(w =>
      `<div class="warn-row ${w.level}">${w.text}</div>`).join('');

    const pillars = AD.FACTIONS.filter(f => f.capturable);
    this.el('pillar-row').innerHTML = pillars.map(f =>
      `<div class="pill ${run.locked[f.key] ? 'on' : ''}" title="${f.pillar}">${
        run.locked[f.key] ? f.pillar : '·'}</div>`).join('');

    // THE TWO PATHS TO VICTORY, made legible. The number-one lesson players miss
    // is that you WIN by capturing branches (decisions alone cap at 55), so show
    // live progress toward both the dictatorship and the fortune, side by side.
    const vt = this.el('victory-tracker');
    if (vt) {
      const held = pillars.filter(f => run.locked[f.key]).length;
      const need = Math.max(1, Math.ceil((100 - AD.SOFT_CAP) / (AD.Engine.diff().pillarValue || 22)));
      const goal = AD.wealthGoal(run);
      const authWin = run.authority >= 100, cashWin = run.cash >= goal;
      vt.innerHTML =
        `<span class="vt-path ${authWin ? 'won' : ''}">👑 <b>The Country</b> ` +
          `<i>Authority ${run.authority}/100 · ${held}/${need} branches</i></span>` +
        `<span class="vt-path ${cashWin ? 'won' : ''}">💰 <b>The Money</b> ` +
          `<i>$${run.cash.toFixed(1)} / $${goal}B</i></span>` +
        `<span class="vt-help">?</span>`;
    }

    this.renderFactions(run);
  },

  /* The faction tiles are built ONCE and then updated in place, so the meter
     fills can transition (animate) instead of jumping every render. The click
     handler is event-delegated on document, so nothing here re-binds. */
  renderFactions (run) {
    const wrap = this.el('factions');
    if (wrap.children.length !== AD.FACTIONS.length) {
      wrap.innerHTML = AD.FACTIONS.map(f =>
        `<div class="fac" data-fk="${f.key}" role="meter" tabindex="0" aria-valuemin="0" aria-valuemax="100">
          <span class="lock" aria-hidden="true">🔒</span>
          <span class="fac-cog" aria-hidden="true">⚙</span>
          <div class="fac-fig" aria-hidden="true">${AD.icon(f.key)}</div>
          <div class="fac-bar" aria-hidden="true"><div class="fac-fill"></div></div>
          <div class="fac-val" aria-hidden="true">0</div>
          <div class="fac-name" aria-hidden="true">${f.short}</div>
        </div>`).join('');
    }
    AD.FACTIONS.forEach(f => {
      const tile = wrap.querySelector('.fac[data-fk="' + f.key + '"]');
      if (!tile) return;
      const v = run.meters[f.key];
      const locked = !!run.locked[f.key];
      const danger = !locked && v <= 18;
      const cb = this.settings && this.settings.cb;
      const col = locked ? (cb ? 'linear-gradient(90deg,#f59e0b,#fcd34d)' : 'linear-gradient(90deg,#c9a227,#f2dd8a)')
                : v <= 22 ? (cb ? '#1d4ed8' : '#c0392b')
                : v >= 80 ? (cb ? '#f59e0b' : '#c9a227')
                : v >= 55 ? (cb ? '#60a5fa' : '#6d8f5e')
                : (cb ? '#64748b' : '#8d8271');
      const screen = AD.FAC_SCREEN[f.key];
      const manage = !!(screen && !locked);
      tile.classList.toggle('locked', locked);
      tile.classList.toggle('danger', danger);
      tile.classList.toggle('has-screen', manage);
      if (manage) tile.setAttribute('data-manage', f.key); else tile.removeAttribute('data-manage');
      const fill = tile.querySelector('.fac-fill');
      fill.style.width = v + '%'; fill.style.background = col;
      // Meter juice: on a real change, pulse the tile, roll the number, and
      // float a coloured delta up off it. Skipped under reduce-motion.
      const valEl = tile.querySelector('.fac-val');
      const prevV = tile.dataset.v === undefined ? v : parseFloat(tile.dataset.v);
      tile.dataset.v = v;
      const still = this.settings && this.settings.motion;
      if (prevV !== v && !still) {
        const d = v - prevV;
        this.rollNum(valEl, prevV, v);
        tile.classList.remove('bumped'); void tile.offsetWidth; tile.classList.add('bumped');
        const fd = document.createElement('span');
        fd.className = 'fac-delta ' + (d > 0 ? 'up' : 'down');
        fd.textContent = (d > 0 ? '+' : '') + d;
        tile.appendChild(fd);
        setTimeout(() => fd.remove(), 950);
      } else {
        valEl.textContent = v;
      }
      tile.querySelector('.lock').style.display = locked ? '' : 'none';
      tile.querySelector('.fac-cog').style.display = manage ? '' : 'none';
      tile.setAttribute('aria-valuenow', v);
      tile.setAttribute('aria-label', (locked
        ? `${f.name}: captured. ${f.pillar} secured.`
        : `${f.name}: ${v} of 100.${danger ? ' Critical.' : ''}`) + (manage ? ' Activate to manage.' : ''));
      tile.title = `${f.name}, ${f.blurb}${manage ? ', tap to manage' : ''}`;
    });
  },

  /* ---------- the capture moment ---------- */
  captureFlash (key) {
    const el = this.el('capture-fx');
    if (!el || this.settings && this.settings.motion) { return; }   // respect reduce-motion
    const f = AD.faction(key);
    el.innerHTML = '<div class="cap-stamp">' + (f ? f.pillar.toUpperCase() : 'CAPTURED') + '<span>SECURED</span></div>';
    el.classList.remove('go'); void el.offsetWidth; el.classList.add('go');
  },

  /* One-line "what the month did on its own" strip, shown above a fresh card so
     background drift (base decay, backlash, backfires) is never a silent
     surprise. Fed by AD.Engine.lastDrift; hides when nothing notable happened. */
  showBrief (brief) {
    const el = this.el('monthbrief');
    if (!el) return;
    if (!brief) { el.hidden = true; return; }
    const chips = AD.FKEYS.filter(k => brief.drift[k]).map(k => {
      const d = brief.drift[k], f = AD.faction(k);
      return `<span class="mb-chip ${d > 0 ? 'up' : 'down'}">${f.icon} ${d > 0 ? '+' : ''}${d}</span>`;
    }).join('');
    const why = brief.causes && brief.causes.length
      ? `<span class="mb-why">${AD.clean(brief.causes.join(' · '), this.settings.clean)}</span>` : '';
    if (!chips && !why) { el.hidden = true; return; }
    el.innerHTML = `<span class="mb-tag">THIS MONTH</span>${chips}${why}`;
    el.hidden = false;
    el.classList.remove('in'); void el.offsetWidth; el.classList.add('in');
  },

  /* ---------- the crisis card ---------- */
  renderCard (card) {
    const run = AD.Engine.run;
    const cln = s => AD.clean(s, this.settings.clean);

    this.el('resolution').hidden = true;
    const c = this.el('card');
    c.hidden = false;
    c.classList.remove('out');
    void c.offsetWidth;                       // restart the deal-in animation
    c.style.animation = 'none'; void c.offsetWidth; c.style.animation = '';

    this.el('card-sil').innerHTML = card.who ? AD.charPortrait(card.who) : '';
    this.el('card-name').textContent = (card.who && card.who.name) || ', ';
    this.el('card-role').textContent = (card.who && card.who.role) || '';

    const titleEl = this.el('card-title');
    // pillarBanner carries its own wording so non-pillar beats (the Second
    // Inaugural) don't get "SECURED" bolted onto the end of them.
    titleEl.innerHTML = (card.pillarBanner
        ? `<span class="card-banner">${card.pillarBanner}</span><br>` : '') + cln(card.title);
    c.classList.toggle('has-banner', !!card.pillarBanner);   // pop-ups read as interruptions
    this.el('card-text').textContent = cln(card.text);

    /* NO IMPACT PREVIEW. The score behind a choice is deliberately hidden, 
       you decide on the words, and you find out what it cost afterwards.
       Showing the numbers turned every crisis into arithmetic. The only
       things that stay visible are the two GATES (cash price, Authority
       requirement), because a locked door has to say why it is locked. */
    this.el('choices').innerHTML = card.choices.map((ch, i) => {
      const afford = AD.Engine.canAfford(ch);
      let tag = ch.cost ? `<span class="cost-tag">−$${ch.cost}B</span>` : '';
      if (ch.needsAuth && run.authority < ch.needsAuth) {
        tag += `<span class="cost-tag">requires Authority ${ch.needsAuth}</span>`;
      }
      const wild = ch.wild ? ' wild' : '';
      return `<button class="choice${wild}" data-choice="${i}" ${afford ? '' : 'disabled'}
        aria-keyshortcuts="${i + 1}"><span class="ch-num" aria-hidden="true">${i + 1}</span><span class="ch-label">${cln(ch.label)}${tag}</span></button>`;
    }).join('');

    this.startTimer(card);
  },

  /* ---------- timer ----------
     The decision clock supports freeze/resume: opening a management area
     (base, congress, the phone, …) PAUSES it at its current value and closing
     resumes from exactly there, so browsing your levers never costs you the
     decision. startTimer resets to full for a NEW card; pause/resume keep it. */
  startTimer (card) {
    this.stopTimer();
    const box = this.el('timer');
    if (!this.settings.timer || card.final) { box.hidden = true; return; }
    this._timerBase = AD.Engine.diff().timer + (this.settings.pack ? 8 : 0);
    this._timerLeft = this._timerBase;
    this._runTimer();
  },

  _runTimer () {
    const box = this.el('timer');
    if (!this.settings.timer || !this._timerBase) { box.hidden = true; return; }
    box.hidden = false;
    box.classList.remove('low');
    const ring = this.el('t-fg'), num = this.el('t-num');
    const C = 100.5;
    const paint = () => {
      num.textContent = this._timerLeft;
      ring.style.strokeDashoffset = C * (1 - this._timerLeft / this._timerBase);
      box.classList.toggle('low', this._timerLeft <= 5);
    };
    paint();
    if (this._t) clearInterval(this._t);
    this._t = setInterval(() => {
      this._timerLeft -= 1;
      if (this._timerLeft <= 0) { this.stopTimer(); AD.Game.timeout(); return; }
      paint();
    }, 1000);
  },

  /* Freeze the clock without hiding or resetting it (an overlay is about to
     cover it anyway). Resume picks up from the frozen value. */
  pauseTimer () {
    if (this._t) { clearInterval(this._t); this._t = null; }
  },
  resumeTimer () {
    if (this._timerLeft > 0 && this._timerBase &&
        AD.Engine.card && !this.el('card').hidden) this._runTimer();
  },

  stopTimer () {
    if (this._t) { clearInterval(this._t); this._t = null; }
    this._timerLeft = 0;
    this.el('timer').hidden = true;
  },

  /* ---------- resolution ---------- */
  renderResolution (out, expired, terminal) {
    const cln = s => AD.clean(s, this.settings.clean);
    const card = this.el('card');
    // Dead the buttons NOW, not in 260ms. The card stays in the DOM for the
    // deal-out animation, and until this was here a double-tap inside that
    // window applied a second choice to a crisis that was already resolved.
    card.querySelectorAll('.choice').forEach(b => { b.disabled = true; });
    card.classList.add('out');
    setTimeout(() => { card.hidden = true; }, 260);

    setTimeout(() => {
      const r = this.el('resolution');
      r.hidden = false;
      r.style.animation = 'none'; void r.offsetWidth; r.style.animation = '';
      this.el('res-stamp').textContent = terminal ? 'FINAL DECISION'
        : expired ? 'TIME EXPIRED, STAFF DECIDED' : 'DECISION LOGGED';
      this.el('res-text').textContent = cln(out.res);
      // On a terminal turn there is no next crisis, and letting the player tap
      // through would tick a term that is already over.
      const nextBtn = this.el('resolution').querySelector('[data-act="next"]');
      if (nextBtn) nextBtn.hidden = !!terminal;

      const d = out.deltas, chips = [];
      AD.FKEYS.forEach(k => {
        if (!d[k]) return;
        const f = AD.faction(k);
        chips.push(`<span class="delta ${d[k] > 0 ? 'pos' : 'neg'}">${f.icon} ${f.short} ${d[k] > 0 ? '+' : ''}${d[k]}</span>`);
      });
      if (d.auth) chips.push(`<span class="delta a">⚑ AUTHORITY ${d.auth > 0 ? '+' : ''}${d.auth}</span>`);
      else if (out.authCapped) chips.push(`<span class="delta">⚑ CAPPED AT ${AD.SOFT_CAP}, TAKE A BRANCH</span>`);
      if (d.cash) chips.push(`<span class="delta ${d.cash > 0 ? 'pos' : 'neg'}">$ ${d.cash > 0 ? '+' : ''}${d.cash}B</span>`);
      this.el('res-deltas').innerHTML = chips.join('');
      this.renderBriefing(out);
      this.renderHUD();
    }, 250);
  },

  /* ---------- post-crisis briefing (Chief of Staff Pack) ---------- */
  renderBriefing (out) {
    const box = this.el('briefing');
    if (!this.settings.pack || !AD.Engine.run || AD.Engine.run.over) { box.hidden = true; return; }
    const b = AD.briefing(AD.Engine.run, out);
    if (!b) { box.hidden = true; return; }
    this.el('brief-sil').textContent = b.who.sil;
    this.el('brief-who').textContent = b.who.name;
    this.el('brief-role').textContent = b.who.role;
    this.el('brief-lines').innerHTML = b.lines
      .map(l => `<li>${AD.clean(l, this.settings.clean)}</li>`).join('');
    box.hidden = false;
  },

  /* ---------- inheritance banner on the setup screen ---------- */
  renderInheritance (inh) {
    const box = this.el('inheritance');
    if (!inh || !Object.keys(inh.mods || {}).length) { box.hidden = true; return; }
    this.el('inh-note').textContent =
      `${inh.note} (Previous administration: ${inh.from}.)`;
    this.el('inh-mods').innerHTML = AD.FKEYS.filter(k => inh.mods[k]).map(k => {
      const f = AD.faction(k);
      return `<span class="delta neg">${f.icon} ${f.short} ${inh.mods[k]}</span>`;
    }).join('');
    box.hidden = false;
  },

  /* ---------- tabloid ---------- */
  showTabloid (t) {
    AD.Audio.play('tabloid');
    const run = AD.Engine.run;
    this.el('tab-date').textContent = AD.dateLabel(run ? run.month : 1);
    this.el('tab-head').textContent = t.head;
    this.el('tab-sub').textContent = t.sub;
    this.el('tab-body').textContent = AD.clean(t.body, this.settings.clean);
    this.overlay('tabloid', true);
  },

  showDoctrine (d) {
    this.el('doc-glyph').textContent = d.glyph;
    this.el('doc-name').textContent = d.name;
    this.el('doc-quote').textContent = AD.clean(d.quote, this.settings.clean);
    this.el('doc-effect').textContent = d.effect;
    this.overlay('doctrine', true);
  },

  /* ---------- the constitution ledger ---------- */
  renderConstitution (result) {
    const run = AD.Engine.run;
    const n = AD.clauseCount(run), total = AD.CLAUSES.length;
    this.el('const-count').textContent = n + ' / ' + total;
    this.el('const-score').textContent = AD.clauseScore(run).toLocaleString();

    const note = this.el('const-note');
    if (result && result.clause) {
      note.className = 'const-note bought';
      note.innerHTML = `<b>${result.clause.name} broken.</b> ` +
        AD.clean(result.clause.broke, this.settings.clean);
    } else if (AD.allClausesBroken(run)) {
      note.className = 'const-note complete';
      note.innerHTML = '<b>The full set.</b> Russia has settled up, ' +
        '$' + (total * AD.CLAUSE_BOUNTY).toFixed(2) + 'B, itemised by clause, ' +
        'through four intermediary banks. Nobody asked them to.';
    } else {
      note.className = 'const-note';
      note.textContent = `Break a clause yourself, any turn, or wait for a crisis to offer one. ` +
        `Each is worth ${AD.CLAUSE_SCORE} score and hammers the institutions. Break all ${total} ` +
        `and an unbidden payment arrives from Russia, $${AD.CLAUSE_BOUNTY.toFixed(2)}B for every one.`;
    }

    const eff = AD.CLAUSE_BREAK_EFF;
    const effLine = ['courts', 'press', 'congress', 'base'].filter(k => eff[k]).map(k => {
      const f = AD.faction(k); return `${f.short} ${eff[k] > 0 ? '+' : ''}${eff[k]}`;
    }).join(' · ');

    this.el('const-list').innerHTML = AD.CLAUSES.map(c => {
      const broke = AD.brokeClause(run, c.id);
      return `<div class="clause ${broke ? 'broke' : ''}">
        <div class="clause-top"><b>${c.name}</b><span>${c.ref}</span></div>
        <i class="clause-line">${c.line}</i>
        ${broke ? `<div class="clause-broke">${AD.clean(c.broke, this.settings.clean)}</div>`
                : `<button class="btn clause-break" data-breakclause="${c.id}">Break it <em>${effLine}</em></button>`}
      </div>`;
    }).join('');
  },

  /* ---------- private interests (corruption) ---------- */
  renderCorruption (justBought) {
    const run = AD.Engine.run;
    const p = AD.passives(run);
    this.el('corr-cash').textContent = '$' + run.cash.toFixed(2) + 'B';
    this.el('corr-income').textContent = '$' + Math.round((p.income || 0) * 1000) + 'M';
    const exp = AD.exposure(run);
    this.el('corr-exposure').innerHTML = exp
      ? `−${exp} <em>press &amp; courts / mo</em>` : 'none';
    this.el('corr-exposure').className = exp >= 3 ? 'exposed' : '';

    const note = this.el('corr-note');
    if (justBought) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${justBought.name} acquired.</b> ` +
        AD.clean(justBought.flavour, this.settings.clean);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Holdings never grant Authority. They buy the machine that takes it, ' +
        'shields, multipliers, monthly drip and the income to buy more of all three.';
    }

    // The Strategic Freedom Reserve, the one-time heist, shown as a
    // banner at the bottom of the shop until it is spent.
    const heistSlot = this.el('corr-heist');
    if (heistSlot) {
      if (AD.canDivert(run)) {
        heistSlot.innerHTML = `<div class="heist">
          <div class="heist-top">
            <b>The Strategic Freedom Reserve</b>
            <span class="heist-take">+$${AD.DIVERT_AMOUNT.toFixed(0)}B · once</span>
          </div>
          <i class="heist-blurb">Declare a national emergency. Never say which one. The appropriation
            flows into a discretionary reserve only you can sign against, five billion dollars, gone
            before anyone can name the crisis it was for.</i>
          <div class="heist-warn">The base won't blink. The courts, the press, Congress and the street
            will all go to war at once.</div>
          <button class="btn heist-go" data-act="divert">Invent a National Emergency</button>
        </div>`;
      } else {
        heistSlot.innerHTML = `<div class="heist spent">
          <div class="heist-top"><b>The Strategic Freedom Reserve</b><span class="heist-take">SPENT</span></div>
          <i class="heist-blurb">The emergency was never named. It cannot be declared twice.</i>
        </div>`;
      }
    }

    this.el('corr-list').innerHTML = AD.ASSET_CATS.map(cat => {
      const items = AD.ASSETS.filter(a => a.cat === cat.id);
      const rows = items.map(a => {
        const owned = AD.owns(run, a.id);
        const locked = !!(a.req && !a.req(run));
        const afford = run.cash >= a.cost;
        const cls = owned ? 'owned' : locked ? 'locked' : afford ? 'buyable' : 'poor';
        return `<div class="asset ${cls}">
          <div class="asset-top">
            <b>${a.name}</b>
            <span class="asset-cost">${owned ? 'OWNED' : '$' + a.cost.toFixed(1) + 'B'}</span>
          </div>
          <i class="asset-blurb">${AD.clean(a.blurb, this.settings.clean)}</i>
          <div class="asset-effect">${a.effect}</div>
          ${owned || locked ? '' :
            `<button class="btn asset-buy" data-buy="${a.id}" ${afford ? '' : 'disabled'}>Acquire</button>`}
          ${locked ? '<div class="asset-lock">Requires an earlier holding.</div>' : ''}
        </div>`;
      }).join('');
      return `<div class="asset-cat"><div class="asset-cat-h">${cat.icon} ${cat.name}</div>
        <p class="asset-cat-b">${cat.blurb}</p>${rows}</div>`;
    }).join('');
  },

  /* ---------- the pardon power ---------- */
  renderPardons (result) {
    const run = AD.Engine.run;
    run.pardoned = run.pardoned || [];
    const sum = AD.pardonSummary(run);
    this.el('pardon-count').textContent = sum.done;
    this.el('pardon-crooks').textContent = sum.crooks;
    this.el('pardon-saints').textContent = sum.saints;

    const note = this.el('pardon-note');
    if (result && result.pardon) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${result.pardon.name}, pardoned.</b> ` +
        AD.clean(result.pardon.blurb, this.settings.clean);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Article Two hands you an eraser with no check on it. Most of these people should ' +
        'never touch it, and several are grateful in cash. A few are genuinely innocent: freeing them pleases ' +
        'the institutions and annoys a base that wanted a scalp.';
    }

    const fmt = eff => {
      const L = { base: 'Base', congress: 'Congress', courts: 'Courts', press: 'Press', street: 'Street', auth: 'Authority' };
      const parts = [];
      Object.keys(L).forEach(k => { if (eff[k]) parts.push(L[k] + ' ' + (eff[k] > 0 ? '+' : '−') + Math.abs(eff[k])); });
      if (eff.cash) parts.push((eff.cash > 0 ? '+' : '−') + '$' + Math.abs(eff.cash).toFixed(1) + 'B');
      return parts.join(' · ');
    };

    this.el('pardon-list').innerHTML = AD.PARDONS.map(p => {
      const done = AD.isPardoned(run, p.id);
      const cls = done ? 'owned' : p.saint ? 'buyable pardon-saint' : 'buyable pardon-crook';
      return `<div class="asset ${cls}">
        <div class="asset-top"><b>${p.name}</b>
          <span class="asset-cost">${done ? 'PARDONED' : p.saint ? 'INNOCENT' : 'GUILTY'}</span></div>
        <i class="asset-blurb">${p.crime}</i>
        <div class="asset-effect">${fmt(p.eff)}</div>
        <div class="pardon-desc">${AD.clean(p.blurb, this.settings.clean)}</div>
        ${done ? '' : `<button class="btn asset-buy" data-pardon="${p.id}">Sign the Pardon</button>`}
      </div>`;
    }).join('');
  },

  /* ---------- the Saint Ambrose ticker ----------
     A leak has no card of its own, it is the story doing damage between
     instalments, so it gets a one-line news strip above the crisis instead. */
  showLeak (text) {
    const t = this.el('ticker');
    if (!text) { t.hidden = true; return; }
    this.el('ticker-text').textContent = ' ' + AD.clean(text, this.settings.clean);
    t.hidden = false;
    t.classList.remove('in'); void t.offsetWidth; t.classList.add('in');
  },

  /* ---------- the residence (renovations) ----------
     A single elevation of the building that gains a layer for every
     structure standing. The list underneath is the shop; the drawing is
     the actual reward, so it is drawn first and it is drawn large. */
  residenceSVG (run, focus) {
    const has  = id => AD.built(run, id);
    const gold = has('palace');
    const on   = id => (focus === id ? ' class="reno-focus"' : '');

    const stone  = gold ? '#d9b64a' : '#e2ded2';
    const stoneD = gold ? '#a9862b' : '#b5b0a1';
    const stoneS = gold ? '#7d6119' : '#8d8879';
    const surname = (run.president || '').trim().split(/\s+/).pop().toUpperCase() || 'THE';
    const nameSafe = surname.replace(/[<>&"']/g, '').slice(0, 12) || 'THE';

    const win = (x, y, w, h) =>
      `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" fill="#1b2740"/>`;
    const winRow = (x0, y, n, gap) => {
      let s = '';
      for (let i = 0; i < n; i++) s += win(x0 + i * gap, y, 7, 10);
      return s;
    };

    return `<svg viewBox="0 0 476 216" xmlns="http://www.w3.org/2000/svg" role="img"
      aria-label="The presidential residence, with every completed improvement">
      <defs>
        <radialGradient id="mball" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#9fb4d4"/>
          <stop offset="100%" stop-color="#3d5478"/>
        </radialGradient>
        <linearGradient id="rflame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stop-color="#d8323b"/><stop offset="55%" stop-color="#e6a52a"/>
          <stop offset="100%" stop-color="#fff3bf"/>
        </linearGradient>
        <linearGradient id="rsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0c1830"/><stop offset="100%" stop-color="#16233c"/>
        </linearGradient>
      </defs>

      <rect width="476" height="216" fill="url(#rsky)"/>
      <circle cx="60" cy="34" r="15" fill="#f0ead6" opacity=".14"/>
      <rect y="176" width="476" height="40" fill="#11291c"/>
      <rect y="176" width="476" height="2" fill="#1d3d29"/>

      ${has('colossus') ? `<g${on('colossus')}>
        <rect x="390" y="158" width="50" height="18" fill="#6b520f"/>
        <rect x="386" y="152" width="58" height="7" fill="#8d6c14"/>
        <g fill="#e0bc55">
          <path d="M404 152 L404 112 L412 112 L412 152 Z"/>
          <path d="M418 152 L418 112 L426 112 L426 152 Z"/>
          <path d="M400 114 Q400 74 415 70 Q430 74 430 114 Z"/>
          <path d="M401 84 L390 128 L397 130 L406 92 Z"/>
        </g>
        <path d="M427 82 L444 34 L451 37 L434 88 Z" fill="#c9a227"/>
        <path d="M441 40 L458 -6 L468 -2 L450 44 Z" fill="#c9a227"/>
        <circle cx="415" cy="58" r="11" fill="#f0d47c"/>
        <path d="M405 55 Q415 44 425 55 L425 51 Q415 40 405 51 Z" fill="#c9a227"/>
        <path d="M418 56 q4 2 4 5 h-5" fill="#8d6c14"/>
        <g fill="#7f8ca3" opacity=".7">
          <path d="M352 30 L368 30 L372 26 L358 26 Z"/><path d="M362 26 L366 20 L369 26 Z"/>
        </g>
      </g>` : ''}

      ${has('coaster') ? `<g${on('coaster')} fill="none" stroke="#c9a227" stroke-width="2.4">
        <path d="M6 204 C60 130 118 92 178 76 S304 58 358 100 S424 156 436 204"/>
        <path d="M6 210 C60 138 118 100 178 84 S304 66 358 108 S424 162 436 210" opacity=".55"/>
        <g stroke-width="1.5" opacity=".5">
          <path d="M40 168 L40 176"/><path d="M96 128 L96 138"/><path d="M150 96 L150 106"/>
          <path d="M262 66 L262 76"/><path d="M330 84 L330 94"/><path d="M398 138 L398 148"/>
        </g>
        <g stroke="none" fill="#d8323b">
          <rect x="204" y="60" width="17" height="9" rx="2"/>
          <rect x="223" y="60" width="17" height="9" rx="2"/>
        </g>
      </g>` : ''}

      <!-- west wing -->
      <rect x="48" y="140" width="78" height="36" fill="${stone}"/>
      <rect x="46" y="136" width="82" height="6" fill="${stoneD}"/>
      ${winRow(58, 152, 5, 14)}

      <!-- east wing, or the ballroom that replaced it -->
      ${has('ballroom') ? `<g${on('ballroom')}>
        <rect x="314" y="132" width="78" height="44" fill="#2a1442"/>
        <rect x="312" y="128" width="82" height="6" fill="#7a3fb0"/>
        <path d="M353 128 L353 116" stroke="#7a3fb0" stroke-width="2"/>
        <circle cx="353" cy="106" r="12" fill="url(#mball)"/>
        <g stroke="#cfd8e6" stroke-width="1" opacity=".5">
          <path d="M336 92 L370 120"/><path d="M370 92 L336 120"/>
          <path d="M353 88 L353 124"/><path d="M331 106 L375 106"/>
        </g>
        <g fill="#e05159">${winRow(324, 150, 5, 14).replace(/#1b2740/g, '#7a3fb0')}</g>
      </g>` : `
        <rect x="314" y="140" width="78" height="36" fill="${stone}"/>
        <rect x="312" y="136" width="82" height="6" fill="${stoneD}"/>
        ${winRow(324, 152, 5, 14)}`}

      <!-- central block -->
      <rect x="126" y="104" width="188" height="72" fill="${stone}"/>
      <rect x="122" y="97" width="196" height="8" fill="${stoneD}"/>
      <rect x="122" y="95" width="196" height="3" fill="${stoneS}"/>
      ${winRow(136, 116, 4, 13)}${winRow(268, 116, 4, 13)}
      ${winRow(136, 142, 4, 13)}${winRow(268, 142, 4, 13)}

      <!-- portico -->
      <rect x="186" y="104" width="68" height="72" fill="${stone}"/>
      <polygon points="180,112 260,112 220,84" fill="${stoneD}"/>
      <polygon points="188,110 252,110 220,89" fill="${stoneS}" opacity=".45"/>
      <g fill="${stoneD}">
        <rect x="192" y="112" width="7" height="64"/><rect x="207" y="112" width="7" height="64"/>
        <rect x="226" y="112" width="7" height="64"/><rect x="241" y="112" width="7" height="64"/>
      </g>
      <rect x="214" y="152" width="13" height="24" fill="#1b2740"/>

      ${has('casino') ? `<g${on('casino')}>
        <rect x="164" y="30" width="112" height="78" fill="#241a2e"/>
        <rect x="164" y="30" width="112" height="78" fill="none" stroke="#e0bc55" stroke-width="1.5"/>
        <g fill="#ffd24a">${
          [40, 56, 72, 88].map(y =>
            [172, 184, 196, 208, 220, 232, 244, 256].map(x =>
              `<rect x="${x}" y="${y}" width="6" height="9" rx="1"/>`).join('')).join('')
        }</g>
        <rect x="150" y="6" width="140" height="22" rx="4" fill="#12060f" stroke="#ff3b6b" stroke-width="1.8"/>
        <text x="220" y="21" text-anchor="middle" fill="#ffe36b" font-family="ui-serif, Georgia, serif"
              font-size="12" font-weight="700" letter-spacing="1.4" stroke="#ff3b6b" stroke-width="0.4"
              style="paint-order:stroke">${nameSafe}</text>
        <text x="220" y="102" text-anchor="middle" fill="#ff6fa0" font-family="ui-serif, Georgia, serif"
              font-size="7" letter-spacing="3">CASINO &amp; RESORT</text>
        <g stroke="#ff3b6b" stroke-width="1" opacity=".65"><path d="M164 108 L276 108"/></g>
      </g>` : ''}

      ${has('flame') ? `<g${on('flame')}>
        <rect x="286" y="90" width="10" height="8" fill="${stoneS}"/>
        <path d="M291 88 Q282 76 291 62 Q294 74 299 68 Q303 80 291 88 Z" fill="url(#rflame)"/>
      </g>` : `<g><rect x="289" y="72" width="2" height="26" fill="${stoneS}"/>
        <path d="M291 73 L311 78 L291 83 Z" fill="var(--red)"/></g>`}

      ${has('mint') ? `<g${on('mint')}>
        <rect x="62" y="120" width="12" height="18" fill="${stoneS}"/>
        <g fill="#9ec9a5" font-family="ui-serif, Georgia, serif" font-size="13" opacity=".85">
          <text x="60" y="114">$</text><text x="72" y="104">$</text><text x="58" y="94">$</text>
        </g>
      </g>` : ''}

      ${has('ancestors') ? `<g${on('ancestors')} fill="#3b3021">
        <g><circle cx="166" cy="152" r="5"/><rect x="161" y="158" width="10" height="18" rx="3"/>
           <rect x="152" y="146" width="9" height="4" rx="2" transform="rotate(-38 156 148)"/>
           <rect x="171" y="146" width="9" height="4" rx="2" transform="rotate(38 175 148)"/></g>
        <g><circle cx="274" cy="152" r="5"/><rect x="269" y="158" width="10" height="18" rx="3"/>
           <rect x="260" y="146" width="9" height="4" rx="2" transform="rotate(-38 264 148)"/>
           <rect x="279" y="146" width="9" height="4" rx="2" transform="rotate(38 283 148)"/></g>
      </g>` : ''}

      ${has('revisionism') ? `<g${on('revisionism')}>
        <rect x="150" y="118" width="140" height="14" rx="1" fill="#7d6119"/>
        <text x="220" y="128" text-anchor="middle" fill="#ffeeb0"
              font-family="ui-serif, Georgia, serif" font-size="8" letter-spacing="1.5">THE CORRECTED RECORD</text>
        <g fill="#3b3021" stroke="#7d6119" stroke-width="0.6">
          <rect x="158" y="150" width="12" height="15"/><rect x="176" y="150" width="12" height="15"/>
          <rect x="252" y="150" width="12" height="15"/><rect x="270" y="150" width="12" height="15"/>
        </g>
        <g stroke="#c0392b" stroke-width="1.4">
          <path d="M159 151 L169 164 M169 151 L159 164"/><path d="M253 151 L263 164 M263 151 L253 164"/>
        </g>
      </g>` : ''}

      ${has('annexe') ? `<g${on('annexe')}>
        <rect x="6" y="158" width="32" height="18" fill="#4a4438"/>
        <polygon points="4,158 40,158 22,150" fill="#5d5646"/>
        <rect x="12" y="164" width="7" height="8" fill="#1b2740"/>
        <g stroke="#7f8ca3" stroke-width="1" stroke-dasharray="3 3">
          <path d="M40 168 L46 168"/></g>
        <text x="4" y="188" fill="#7f8ca3" font-family="ui-serif, Georgia, serif"
              font-size="8" letter-spacing="1">40 MI ⟶</text>
      </g>` : ''}

      ${has('octagon') ? `<g${on('octagon')}>
        <rect x="54" y="190" width="76" height="14" rx="2" fill="#8b2530"/>
        <rect x="54" y="190" width="76" height="3" fill="#c0343f"/>
        <g stroke="#e2ded2" stroke-width="1.4">
          <path d="M56 190 L56 178"/><path d="M128 190 L128 178"/>
          <path d="M56 180 L128 180"/><path d="M56 184 L128 184"/><path d="M56 188 L128 188"/>
        </g>
      </g>` : ''}

      ${has('deep-residence') ? `<g${on('deep-residence')} stroke="#5b6880" stroke-width="1.2" fill="none">
        <rect x="248" y="180" width="58" height="30" stroke-dasharray="4 3"/>
        <path d="M248 190 L306 190"/><path d="M248 200 L306 200"/>
        <path d="M277 180 L277 210" stroke-dasharray="2 2"/>
        <text x="252" y="188" fill="#5b6880" stroke="none"
              font-family="ui-serif, Georgia, serif" font-size="7" letter-spacing="1">−40 LEVELS</text>
      </g>` : ''}

      ${has('menagerie') ? `<g${on('menagerie')}>
        <rect x="318" y="182" width="74" height="20" fill="#0d1f14" stroke="#5b6880" stroke-width="1"/>
        <g stroke="#7f8ca3" stroke-width="1">
          <path d="M328 182 L328 202"/><path d="M340 182 L340 202"/><path d="M352 182 L352 202"/>
          <path d="M364 182 L364 202"/><path d="M376 182 L376 202"/></g>
        <g fill="#c98d3a">
          <path d="M332 198 q6 -8 14 -8 q9 0 12 8 l-3 0 l-2 -4 l-16 0 l-2 4 Z"/>
          <circle cx="358" cy="189" r="4"/>
        </g>
        <g fill="#e05159"><circle cx="357" cy="188" r="1"/><circle cx="360" cy="188" r="1"/></g>
        <text x="320" y="211" fill="#5b6880" font-family="ui-serif, Georgia, serif"
              font-size="7" letter-spacing="1">ENCLOSURE 6</text>
      </g>` : ''}

      ${has('moat') ? `<g${on('moat')}>
        <rect y="202" width="476" height="14" fill="#12314f"/>
        <rect y="202" width="476" height="2" fill="#2f5da8" opacity=".7"/>
        <g stroke="#2f5da8" stroke-width="1" fill="none" opacity=".6">
          <path d="M10 210 q8 -4 16 0 t16 0"/><path d="M120 208 q8 -4 16 0 t16 0"/>
          <path d="M300 210 q8 -4 16 0 t16 0"/></g>
        <g fill="#0a1b2c">
          <path d="M80 206 L88 196 L92 206 Z"/><path d="M230 207 L237 198 L241 207 Z"/>
          <path d="M370 205 L378 195 L382 205 Z"/></g>
      </g>` : ''}

      ${gold ? `<g${on('palace')}>
        <rect x="128" y="120" width="184" height="18" rx="2" fill="#8d6c14" stroke="#f0d47c"/>
        <text x="220" y="133" text-anchor="middle" fill="#ffeeb0"
              font-family="ui-serif, Georgia, serif" font-size="11" letter-spacing="3">${surname} PALACE</text>
      </g>` : ''}
    </svg>`;
  },

  renderResidence (justBuilt) {
    const run = AD.Engine.run;
    const up  = AD.upkeep(run);
    const n   = (run.renos || []).length;

    this.el('reno-view').innerHTML = this.residenceSVG(run, justBuilt && justBuilt.id);
    this.el('reno-cash').textContent = '$' + run.cash.toFixed(2) + 'B';
    this.el('reno-built').textContent = n + ' / ' + AD.RENOS.length;
    const scr = AD.scrutiny(run);
    const bill = this.el('reno-upkeep');
    bill.innerHTML = up ? '−$' + Math.round(up * 1000) + 'M' : 'none';
    bill.className = up > 0.12 ? 'exposed' : '';
    const sc = this.el('reno-scrutiny');
    sc.innerHTML = scr
      ? `−${scr} <em>congress &amp; courts / mo</em>` : 'none';
    sc.className = scr >= 3 ? 'exposed' : '';

    const note = this.el('reno-note');
    if (justBuilt) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${justBuilt.name}, complete.</b> ` +
        AD.clean(justBuilt.flavour, this.settings.clean);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Every structure grants Authority the moment it is finished, and bills you ' +
        'for the rest of your term. The soft cap still applies: a statue is not a branch of government.';
    }

    this.el('reno-list').innerHTML = AD.RENO_CATS.map(cat => {
      const rows = AD.RENOS.filter(x => x.cat === cat.id).map(x => {
        const done   = AD.built(run, x.id);
        const locked = !!(x.req && !x.req(run));
        const afford = run.cash >= x.cost;
        const cls = done ? 'owned' : locked ? 'locked' : afford ? 'buyable' : 'poor';
        return `<div class="asset ${cls}">
          <div class="asset-top">
            <b>${x.name}</b>
            <span class="asset-cost">${done ? 'STANDING' : '$' + x.cost.toFixed(2) + 'B'}</span>
          </div>
          <i class="asset-blurb">${AD.clean(x.blurb, this.settings.clean)}</i>
          <div class="asset-effect">${x.effect}</div>
          <div class="asset-upkeep">Upkeep −$${Math.round(x.upkeep * 1000)}M every month, forever.</div>
          ${done || locked ? '' :
            `<button class="btn asset-buy reno-buy" data-build="${x.id}" ${afford ? '' : 'disabled'}>Break Ground</button>`}
          ${locked ? `<div class="asset-lock">Requires ${x.req.toString().match(/>=\s*(\d+)/)
              ? x.req.toString().match(/>=\s*(\d+)/)[1] : 'more'} completed improvements.</div>` : ''}
        </div>`;
      }).join('');
      return `<div class="asset-cat"><div class="asset-cat-h">${cat.icon} ${cat.name}</div>
        <p class="asset-cat-b">${cat.blurb}</p>${rows}</div>`;
    }).join('');
  },

  /* ---------- the caucus (senate) ---------- */
  senTab: 'attention',
  renderSenate (result) {
    const run = AD.Engine.run;
    AD.ensureSenate(run);
    const sum = AD.senateSummary(run);
    this.el('sen-own').textContent = sum.own;
    this.el('sen-opp').textContent = sum.opp;
    const avg = this.el('sen-avg');
    avg.textContent = sum.avgOwn;
    avg.className = sum.avgOwn < 50 ? 'low' : '';
    const reb = this.el('sen-rebels');
    reb.textContent = sum.outOfLine;
    reb.className = sum.outOfLine > 0 ? 'hot' : '';

    const note = this.el('sen-note');
    if (result && result.action) {
      note.className = 'corr-note bought';
      note.innerHTML = result.res
        ? `<b>${AD.clean(result.res, this.settings.clean)}</b>`
        : `<b>Senator ${result.senator.last} of ${result.senator.state}.</b> ${AD.SENATE_ACTIONS.find(a => a.id === result.action.id).blurb}`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Keep your own party in line, but read the room first: a coward folds to a lawsuit, a ' +
        'maverick turns your attack into a martyrdom. Loyalty drifts down every month until the chamber turns.';
    }

    const tabs = [['attention', 'Needs You'], ['party', 'Your Party'], ['opp', 'Opposition'], ['all', 'All 100']];
    this.el('sen-tabs').innerHTML = tabs.map(([k, lab]) =>
      `<button class="sen-tab ${this.senTab === k ? 'on' : ''}" data-sentab="${k}">${lab}</button>`).join('');

    let list = run.senate.filter(s => !s.gone);
    if (this.senTab === 'attention') list = list.filter(s => s.party === 'own' && s.loyalty < 60);
    else if (this.senTab === 'party') list = list.filter(s => s.party === 'own');
    else if (this.senTab === 'opp') list = list.filter(s => s.party === 'opp');
    list = list.slice().sort((a, b) => a.loyalty - b.loyalty);

    if (!list.length) {
      this.el('sen-list').innerHTML = '<div class="lib-empty">' +
        (this.senTab === 'attention' ? 'Every one of your senators is in line. For now.' : 'Nobody here.') + '</div>';
      return;
    }

    this.el('sen-list').innerHTML = list.map(s => {
      const mood = AD.senMood(s);
      const buttons = AD.SENATE_ACTIONS.map(act => {
        const avail = AD.senateActionAvailable(run, s, act);
        const c = AD.senateCostFor(run, s, act);
        const cost = c ? ` <em>${AD.fmtCash(c)}</em>` : '';
        return `<button class="sen-act act-${act.id}" data-sen="${s.id}" data-senact="${act.id}" ${avail.ok ? '' : 'disabled'} title="${avail.ok ? act.blurb : avail.reason}">${act.icon} ${act.label}${cost}${avail.ok ? '' : ' <span class="act-lock">' + AD.reasonBadge(avail.reason) + '</span>'}</button>`;
      }).join('');
      const tell = AD.SEN_TELLS[s.temperament];
      return `<div class="sen-row mood-${mood.key} party-${s.party}">
        <div class="sen-top">
          <span class="sen-dot"></span>
          <b>Sen. ${s.first} ${s.last}</b>
          <i>${s.state}${s.appointee ? ' · appointed' : ''}${s.sued ? ' · sued' : ''}</i>
          <span class="sen-mood">${mood.label}</span>
        </div>
        <div class="sen-loywrap"><div class="sen-loy" style="width:${s.loyalty}%"></div></div>
        ${tell ? `<div class="sen-tell">${tell}</div>` : ''}
        ${s.gripe && s.party === 'own' ? `<div class="sen-gripe">${s.gripe}</div>` : ''}
        <div class="sen-acts">${buttons}</div>
      </div>`;
    }).join('');
  },

  /* ---------- the press room ---------- */
  renderPress (result) {
    const run = AD.Engine.run;
    AD.ensurePress(run);
    const sum = AD.pressSummary(run);
    this.el('press-friendly').textContent = sum.friendly;
    this.el('press-hostile').textContent = sum.hostile;
    this.el('press-owned').textContent = sum.owned;

    const note = this.el('press-note');
    if (result && result.action) {
      note.className = 'corr-note bought';
      note.innerHTML = result.res
        ? `<b>${AD.clean(result.res, this.settings.clean)}</b>`
        : `<b>${result.outlet.name}.</b> ${result.action.blurb}`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Buy the ones with a price, but never sue a true believer, a weak suit is the best thing ' +
        'that ever happened to them. When money will not work, install your own editor. The row hints at which is which.';
    }

    const order = run.press.slice().sort((a, b) => a.stance - b.stance);
    this.el('press-list').innerHTML = order.map(o => {
      const st = AD.pressStance(o);
      const buttons = AD.PRESS_ACTIONS.map(act => {
        const avail = AD.pressActionAvailable(run, o, act);
        const c = AD.pressCostFor(run, o, act);
        const cost = c ? ` <em>${AD.fmtCash(c)}</em>` : '';
        const tip = avail.ok ? act.blurb : avail.reason;
        return `<button class="sen-act press-${act.id}" data-outlet="${o.id}" data-pressact="${act.id}" ${avail.ok ? '' : 'disabled'} title="${tip}">${act.icon} ${act.label}${cost}${avail.ok ? '' : ' <span class="act-lock">' + AD.reasonBadge(avail.reason) + '</span>'}</button>`;
      }).join('');
      const tell = o.tell ? `<div class="sen-tell">${o.tell}</div>` : '';
      return `<div class="sen-row press-mood-${st.key}">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${o.name}</b><i>${o.type}${o.sued ? ' · sued' : ''}</i>
          <span class="sen-mood">${st.label}</span></div>
        <div class="sen-loywrap"><div class="sen-loy" style="width:${o.stance}%"></div></div>
        ${tell}
        <div class="sen-acts">${buttons}</div>
      </div>`;
    }).join('');
  },

  /* ---------- public order (street) ---------- */
  renderStreet (result) {
    const run = AD.Engine.run;
    AD.ensureStreet(run);
    const sum = AD.streetSummary(run);
    const nat = this.el('street-nat');
    nat.textContent = sum.national + '%';
    nat.className = sum.national >= 55 ? 'hot' : '';
    const boil = this.el('street-boiling');
    boil.textContent = sum.boiling;
    boil.className = sum.boiling > 0 ? 'hot' : '';
    this.el('street-occupied').textContent = sum.occupied;

    const note = this.el('street-note');
    if (result && result.action) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${result.city.name}: ${result.action.label.toLowerCase()}.</b> ${result.action.blurb}`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Every city\'s unrest climbs on its own, and protests feed themselves. Send in the force ' +
        'before a hotspot gets out of hand, or let the base watch you concede.';
    }

    const order = run.streets.slice().sort((a, b) => b.unrest - a.unrest);
    this.el('street-list').innerHTML = order.map(c => {
      const heat = AD.cityHeat(c);
      const buttons = AD.STREET_ACTIONS.map(act => {
        const avail = AD.streetActionAvailable(run, c, act);
        const cost = act.cost ? ` <em>$${act.cost}B</em>` : '';
        return `<button class="sen-act street-${act.id}" data-city="${c.id}" data-streetact="${act.id}" ${avail.ok ? '' : 'disabled'} title="${avail.ok ? act.blurb : avail.reason}">${act.icon} ${act.label}${cost}${avail.ok ? '' : ' <span class="act-lock">' + AD.reasonBadge(avail.reason) + '</span>'}</button>`;
      }).join('');
      return `<div class="sen-row street-heat-${heat.key}">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${c.name}</b><i>${c.occupied ? 'force parked' : 'unrest ' + c.unrest + '%'}</i>
          <span class="sen-mood">${heat.label}</span></div>
        <div class="sen-loywrap"><div class="sen-loy street-loy" style="width:${c.unrest}%"></div></div>
        <div class="sen-acts">${buttons}</div>
      </div>`;
    }).join('');
  },

  /* ---------- the phone (calls) ---------- */
  callTab: 'ally',
  renderCall (result) {
    const run = AD.Engine.run;
    const left = AD.callsLeft(run);
    const leftEl = this.el('call-left');
    leftEl.textContent = left;
    leftEl.className = left <= 0 ? 'hot' : '';

    const note = this.el('call-note');
    if (result && result.line) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>Calling ${result.target.name}.</b> ${AD.clean(result.line, this.settings.clean)}`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Get somebody on the line and give them a piece of your mind. Pick who; pick what to say. ' +
        'Two calls a month. Everything you say moves the ratings.';
    }

    const tabs = [['ally', 'Allies'], ['press', 'The Press'], ['enemy', 'Enemies']];
    this.el('call-tabs').innerHTML = tabs.map(([k, lab]) =>
      `<button class="sen-tab ${this.callTab === k ? 'on' : ''}" data-calltab="${k}">${lab}</button>`).join('');

    const list = AD.CALL_BOOK.filter(t => t.cat === this.callTab);
    const disabled = left <= 0 ? 'disabled' : '';
    this.el('call-list').innerHTML = list.map(t => {
      const buttons = AD.CALL_ACTIONS.map(a =>
        `<button class="sen-act call-${a.id}" data-callwho="${t.id}" data-callsay="${a.id}" ${disabled} title="${a.label}">${a.icon} ${a.label}</button>`
      ).join('');
      return `<div class="sen-row call-cat-${t.cat}">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${t.name}</b><i>${t.note}</i></div>
        <div class="sen-acts call-acts">${buttons}</div>
      </div>`;
    }).join('');
  },

  /* ---------- the war room ---------- */
  renderWar (result) {
    const run = AD.Engine.run;
    AD.ensureWars(run);
    const st = AD.warStatus(run);
    const activeEl = this.el('war-active');
    activeEl.textContent = st.active;
    activeEl.className = st.active > 0 ? 'hot' : '';

    const note = this.el('war-note');
    if (result && (result.res || result.line)) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${AD.clean(result.res || result.line, this.settings.clean)}</b>`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Every country answers differently. Rattle the sabre at the ones who will fold, strike the ' +
        'weak, and never gamble a strike on a nuclear power unless you can afford the fallout. The row tells you who is who.';
    }

    const strengthLabel = t => t.strength === 0 ? 'undefended'
      : t.strength === 1 ? 'weak' : t.strength === 2 ? 'a real army' : 'a great power';

    const ongoing = st.list.map(w => {
      const t = AD.warTargetById(w.target);
      return `<div class="sen-row war-ongoing">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>War: ${t.name}</b><i>month ${w.months + 1}</i>
          <span class="sen-mood">Ongoing</span></div></div>`;
    }).join('');

    const targets = AD.WAR_TARGETS.map(t => {
      const atWar = AD.atWarWith(run, t.id);
      const allied = AD.isAlly(run, t.id);
      const annexed = AD.isConquered(run, t.id);
      // Only the operations THIS country actually offers.
      const ops = AD.WAR_OPS.filter(op => !t.ops || t.ops.indexOf(op.id) !== -1);
      const buttons = ops.map(op => {
        const avail = AD.warOpAvailable(run, t, op);
        const c = AD.warOpCostFor(run, t, op);
        const cost = c ? ` <em>${AD.fmtCash(c)}</em>` : '';
        return `<button class="sen-act war-${op.id}" data-wartarget="${t.id}" data-warop="${op.id}" ${avail.ok ? '' : 'disabled'} title="${avail.ok ? op.blurb : avail.reason}">${op.icon} ${op.label}${cost}${avail.ok ? '' : ' <span class="act-lock">' + AD.reasonBadge(avail.reason) + '</span>'}</button>`;
      }).join('');
      const badges = (t.nukes ? '<span class="war-badge nuke">☢️ nuclear</span>' : '') +
                     (annexed ? `<span class="war-badge rich">🗺️ annexed +$${run.conquests[t.id]}B/mo</span>`
                       : allied ? `<span class="war-badge ally">🤝 allied +$${run.allies[t.id]}B/mo</span>`
                       : (t.tradeIncome ? '<span class="war-badge ally">🤝 dealable</span>' : '')) +
                     (t.resource ? '<span class="war-badge rich">⛏️ resources</span>' : '');
      const status = annexed ? '<span class="sen-mood">Annexed</span>'
                   : allied ? '<span class="sen-mood">Allied</span>'
                   : atWar ? '<span class="sen-mood">At war</span>' : '';
      return `<div class="sen-row war-target ${atWar ? 'mood-gone' : ''}">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${t.name}</b><i>${t.leader} · ${strengthLabel(t)}</i>
          ${status}</div>
        <div class="war-badges">${badges}</div>
        ${t.tell ? `<div class="sen-tell">${t.tell}</div>` : ''}
        <div class="sen-acts war-acts">${buttons}</div>
      </div>`;
    }).join('');

    this.el('war-list').innerHTML = (ongoing ? ongoing + '<div class="war-sep">Choose your target and your method</div>' : '') + targets;
  },

  /* ---------- the bench (courts) ---------- */
  renderCourts (result) {
    const run = AD.Engine.run;
    AD.ensureCourts(run);
    const sum = AD.courtsSummary(run);
    this.el('courts-friendly').textContent = sum.friendly;
    this.el('courts-hostile').textContent = sum.hostile;
    this.el('courts-appointees').textContent = sum.appointees;

    const note = this.el('courts-note');
    if (result && result.action) {
      note.className = 'corr-note bought';
      note.innerHTML = result.res
        ? `<b>${AD.clean(result.res, this.settings.clean)}</b>`
        : `<b>${result.judge.name}.</b> ${result.action.blurb}`;
    } else {
      note.className = 'corr-note';
      note.textContent = 'Every judge answers differently. Pressure the nervous ones, buy the ones with a price, ' +
        'and impeach the true believers, who will never fold. The row tells you what kind you are dealing with.';
    }

    const order = run.judges.slice().sort((a, b) => a.align - b.align);
    this.el('courts-list').innerHTML = order.map(j => {
      const st = AD.judgeStance(j);
      const buttons = AD.COURT_ACTIONS.map(act => {
        const avail = AD.courtActionAvailable(run, j, act);
        const c = AD.courtCostFor(run, j, act);
        const cost = c ? ` <em>${AD.fmtCash(c)}</em>` : '';
        return `<button class="sen-act court-${act.id}" data-judge="${j.id}" data-courtact="${act.id}" ${avail.ok ? '' : 'disabled'} title="${avail.ok ? act.blurb : avail.reason}">${act.icon} ${act.label}${cost}${avail.ok ? '' : ' <span class="act-lock">' + AD.reasonBadge(avail.reason) + '</span>'}</button>`;
      }).join('');
      const tell = j.tell ? `<div class="sen-tell">${j.tell}</div>` : '';
      return `<div class="sen-row court-mood-${st.key}">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${j.name}</b><i>${j.court}${j.appointee ? ' · appointed' : ''}</i>
          <span class="sen-mood">${st.label}</span></div>
        <div class="sen-loywrap"><div class="sen-loy court-loy" style="width:${j.align}%"></div></div>
        ${tell}
        <div class="sen-acts">${buttons}</div>
      </div>`;
    }).join('');
  },

  /* ---------- the rally (base) ---------- */
  renderBasepop (result) {
    const run = AD.Engine.run;
    const left = AD.ralliesLeft(run);
    const leftEl = this.el('rally-left');
    leftEl.textContent = left;
    leftEl.className = left <= 0 ? 'hot' : '';

    const note = this.el('rally-note');
    if (result && result.stunt) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${result.stunt.label}.</b> ` +
        (result.twist ? AD.clean(result.twist, this.settings.clean) : AD.clean(result.stunt.blurb, this.settings.clean));
    } else {
      note.className = 'corr-note';
      note.textContent = 'Give the base what it wants. Two spectacles a month. Every one thrills the movement ' +
        'and appals the institutions, and feeding the base too hard is its own way to lose it.';
    }

    const disabled = left <= 0;
    this.el('rally-list').innerHTML = AD.RALLY_STUNTS.map(sn => {
      const cost = (sn.eff.cash && sn.eff.cash < 0) ? -sn.eff.cash : 0;
      const poor = cost && run.cash < cost;
      const dis = disabled || poor ? 'disabled' : '';
      return `<div class="sen-row rally-row">
        <div class="sen-top"><span class="sen-dot"></span>
          <b>${sn.icon} ${sn.label}</b>${cost ? `<i>$${cost.toFixed(1)}B</i>` : ''}</div>
        <div class="sen-gripe">${AD.clean(sn.blurb, this.settings.clean)}</div>
        <div class="sen-acts"><button class="sen-act rally-do" data-stunt="${sn.id}" ${dis}>Do It</button></div>
      </div>`;
    }).join('');
  },

  /* ---------- the economy (tariffs + diplomacy) ---------- */
  econTab: 'tariffs',
  /* A two-line trading chart: the S&P 500 (the country's market) and the
     President's own business index (a higher-beta bet that also rides his
     personal wealth). Pure inline SVG, theme-aware, no library. */
  renderMarketChart (run) {
    const el = this.el('market-chart');
    if (!el) return;
    const hist = (run.marketHistory || []).slice(-40);
    if (hist.length < 2) { el.innerHTML = '<div class="mkt-empty">The markets open as the term begins.</div>'; return; }
    const W = 300, H = 96, padL = 4, padR = 4, padT = 8, padB = 8;
    const xs = (i) => padL + (i / (hist.length - 1)) * (W - padL - padR);
    // Each series is normalised to its own min/max so both fit the same box.
    const line = (key, cls) => {
      const vals = hist.map(h => h[key]);
      let lo = Math.min(...vals), hi = Math.max(...vals);
      if (hi - lo < 1e-6) { hi = lo + 1; }
      const y = (v) => padT + (1 - (v - lo) / (hi - lo)) * (H - padT - padB);
      const d = hist.map((h, i) => (i ? 'L' : 'M') + xs(i).toFixed(1) + ' ' + y(h[key]).toFixed(1)).join(' ');
      const last = vals[vals.length - 1];
      return { d, cls, lastY: y(last), up: last >= vals[0] };
    };
    const sp = line('sp', 'mkt-sp');
    const biz = line('biz', 'mkt-biz');
    const first = hist[0], now = hist[hist.length - 1];
    const pct = (a, b) => (b === 0 ? 0 : Math.round(((a - b) / b) * 100));
    const spPct = pct(now.sp, first.sp), bizPct = pct(now.biz, first.biz);
    const arrow = p => p >= 0 ? '▲' : '▼';
    el.innerHTML =
      `<div class="mkt-legend">
         <span class="mkt-key sp"><i></i>S&amp;P 500 <b>${now.sp.toLocaleString()}</b> <em class="${spPct >= 0 ? 'up' : 'dn'}">${arrow(spPct)}${Math.abs(spPct)}%</em></span>
         <span class="mkt-key biz"><i></i>${AD.clean('Your Business', this.settings.clean)} <b>${now.biz.toLocaleString()}</b> <em class="${bizPct >= 0 ? 'up' : 'dn'}">${arrow(bizPct)}${Math.abs(bizPct)}%</em></span>
       </div>
       <svg viewBox="0 0 ${W} ${H}" class="mkt-svg" preserveAspectRatio="none" aria-hidden="true">
         <path d="${sp.d}" class="mkt-sp" fill="none"/>
         <path d="${biz.d}" class="mkt-biz" fill="none"/>
       </svg>`;
  },

  renderEconomy (result) {
    const run = AD.Engine.run;
    AD.ensureEconomy(run);
    this.renderMarketChart(run);
    const tabs = [['tariffs', 'Tariffs'], ['diplomacy', 'Diplomacy']];
    this.el('econ-tabs').innerHTML = tabs.map(([k, lab]) =>
      `<button class="sen-tab ${this.econTab === k ? 'on' : ''}" data-econtab="${k}">${lab}</button>`).join('');

    const note = this.el('econ-note');
    if (result && result.line) { note.className = 'corr-note bought'; note.innerHTML = result.line; }
    else { note.className = 'corr-note'; note.textContent = this.econTab === 'tariffs'
      ? 'Tariffs feel like winning: an instant surge for the base. Then, a couple of months later, they backfire. Raise one for a bigger spike and a worse crash; lift it to dodge the crash and look like you caved.'
      : 'Pick a leader and pick your approach. The bombastic plays thrill the base and horrify everyone else; the one normal option is dull and actually works. Good relations soften that country\u2019s tariff backfire.'; }

    if (this.econTab === 'tariffs') {
      const active = (run.tariffs || []).length;
      this.el('econ-head').innerHTML =
        `<div class="corr-cash">Tariffs Active <b>${active}</b></div>` +
        `<div>Market <b class="${active >= 3 ? 'hot' : ''}">${active >= 3 ? 'Shaking' : active ? 'Nervy' : 'Calm'}</b></div>`;
      const rows = AD.ECON_NATIONS.map(n => {
        const t = AD.tariffOn(run, n.id);
        const rel = AD.relations(run, n.id);
        let status = 'No tariff';
        if (t) status = t.fired ? 'In effect (backfired)' : 'Fuse lit \u00b7 rate ' + t.rate;
        const buttons = t
          ? (t.fired
              ? `<button class="sen-act econ-lift" data-econtariff="lift" data-nation="${n.id}">Lift the tariff</button>`
              : `<button class="sen-act econ-raise" data-econtariff="raise" data-nation="${n.id}">Double Down</button>
                 <button class="sen-act econ-lift" data-econtariff="lift" data-nation="${n.id}">Back Off</button>`)
          : `<button class="sen-act econ-impose" data-econtariff="impose" data-nation="${n.id}">Impose Tariff</button>`;
        return `<div class="sen-row econ-row ${t && !t.fired ? 'lit' : t ? 'fired' : ''}">
          <div class="sen-top"><span class="sen-dot"></span><b>${n.name}</b><i>${n.blurb}</i>
            <span class="sen-mood">${status}</span></div>
          <div class="sen-acts">${buttons}</div></div>`;
      }).join('');
      const libday = `<div class="sen-row econ-libday"><div class="sen-top"><b>\ud83c\uddfa\ud83c\uddf8 Liberation Day</b>
        <i>Tariff the entire world at once</i></div>
        <div class="sen-acts"><button class="sen-act econ-libday-btn" data-econtariff="libday" data-nation="all">Tariff Everyone</button></div></div>`;
      this.el('econ-list').innerHTML = libday + rows;
    } else {
      const left = AD.summitsLeft(run);
      this.el('econ-head').innerHTML =
        `<div class="corr-cash">Summits Left <b class="${left <= 0 ? 'hot' : ''}">${left}</b></div>` +
        `<div>This Month <b>Diplomacy</b></div>`;
      const dis = left <= 0 ? 'disabled' : '';
      this.el('econ-list').innerHTML = AD.ECON_NATIONS.filter(n => AD.DIPLOMACY[n.id]).map(n => {
        const rel = AD.relations(run, n.id);
        const approaches = AD.DIPLOMACY[n.id].map((a, i) =>
          `<button class="sen-act ${a.insult ? 'econ-insult' : a.normal ? 'econ-normal' : 'econ-silly'}" data-summit="${i}" data-nation="${n.id}" ${dis} title="${a.insult ? 'A Trump-style insult. The base loves it; relations crater.' : ''}">${AD.clean(a.label, this.settings.clean)}</button>`).join('');
        return `<div class="sen-row econ-dip rel-${AD.relationLabel(rel).toLowerCase()}">
          <div class="sen-top"><span class="sen-dot"></span><b>${n.name}</b><i>${n.leader}</i>
            <span class="sen-mood">${AD.relationLabel(rel)}</span></div>
          <div class="sen-acts">${approaches}</div></div>`;
      }).join('');
    }
  },

  /* ---------- crisis log ---------- */
  renderLog () {
    const run = AD.Engine.run;
    const locked = !this.settings.pack;
    this.el('log-locked').hidden = !locked;
    const list = run ? (locked ? run.log.slice(0, 3) : run.log) : [];
    this.el('log-list').innerHTML = list.length ? list.map(r => {
      const chips = Object.keys(r.deltas).map(k => {
        const v = r.deltas[k];
        const f = AD.faction(k);
        const label = k === 'auth' ? '⚑' : k === 'cash' ? '$' : f ? f.icon : null;
        if (label === null) return '';                      // ignore anything unrecognised
        return `<span class="${v > 0 ? 'up' : 'down'}">${label}${v > 0 ? '+' : ''}${v}</span>`;
      }).join('');
      return `<div class="log-row"><b>${r.title}</b><i>${r.date}</i>
        <div class="log-choice">“${AD.clean(r.choice, this.settings.clean)}”</div>
        <div class="log-d">${chips}</div></div>`;
    }).join('') : '<div class="lib-empty">Nothing has happened yet.</div>';
  },

  /* ---------- library ---------- */
  renderLibrary () {
    const lib = AD.loadLibrary();
    const wins = lib.filter(r => r.win).length;
    this.el('lib-blurb').textContent = lib.length
      ? `${lib.length} administration${lib.length === 1 ? '' : 's'}. ${wins} of them ended the republic.`
      : 'Every administration leaves a stain. You have not yet left one.';
    this.el('lib-list').innerHTML = lib.length ? lib.map(r => {
      const e = AD.ENDINGS[r.endingId] || { title: ', ' };
      const terms = (r.term || 1) > 1 ? ' · 2 terms' : '';
      return `<div class="lib-row ${r.win ? 'win' : ''}">
        <div class="lib-por">${this.portraitSVG(r.portrait || { hair: 0, skin: 0, tie: 0, suit: 0 }, r.color || '#c8342f')}</div>
        <div class="lib-main"><b>${r.president}${r.inherited ? ' <em class="inh-tag">inherited</em>' : ''}</b>
          <i>${e.title} · ${r.months} months${terms} · ${r.pillars} pillar${r.pillars === 1 ? '' : 's'}</i></div>
        <div class="lib-score"><b>${r.score.toLocaleString()}</b><i>SCORE</i></div>
      </div>`;
    }).join('') : '<div class="lib-empty">No presidencies on record.<br>Suspiciously clean.</div>';

    this.renderEndingsGallery();
    this.renderAchievements();
  },

  /* ---------- endings gallery (discover every way it can end) ---------- */
  renderEndingsGallery () {
    const hide = { certified: 1, indefinite: 1 };   // orphaned legacy endings
    const ids = Object.keys(AD.ENDINGS).filter(k => !hide[k]);
    const seen = new Set(AD.loadLibrary().map(r => r.endingId));
    const got = ids.filter(id => seen.has(id)).length;
    const cnt = this.el('end-gal-count');
    if (cnt) cnt.textContent = got + ' / ' + ids.length;
    const gal = this.el('end-gallery');
    if (!gal) return;
    // wins first, then losses; discovered before locked within each
    const order = ids.slice().sort((a, b) => {
      const A = AD.ENDINGS[a], B = AD.ENDINGS[b];
      return (B.win - A.win) || (seen.has(b) - seen.has(a));
    });
    gal.innerHTML = order.map(id => {
      const e = AD.ENDINGS[id], have = seen.has(id);
      return `<div class="end-cell ${have ? (e.win ? 'got win' : 'got') : 'locked'}">
        <b>${have ? e.title : '？？？'}</b>
        <i>${have ? e.kicker : (e.win ? 'A victory you have not found.' : 'A defeat you have yet to suffer.')}</i>
      </div>`;
    }).join('');
  },

  /* ---------- achievements gallery ---------- */
  renderAchievements () {
    const have = AD.loadAchievements();
    this.el('ach-count').textContent = `${have.length} / ${AD.ACHIEVEMENTS.length}`;
    this.el('ach-grid').innerHTML = AD.ACHIEVEMENTS.map(a => {
      const got = have.indexOf(a.id) !== -1;
      // Secret achievements stay hidden until earned, that's the point of them.
      const hide = a.secret && !got;
      return `<div class="ach ${got ? 'got' : ''}">
        <b>${hide ? '???' : a.name}</b>
        <i>${hide ? 'Locked. You will know it when it happens.' : a.desc}</i>
      </div>`;
    }).join('');
  },

  /* ---------- ending ---------- */
  renderEnding (score) {
    const e = AD.ENDINGS[score.endingId];
    const doctrines = score.doctrines.map(id => AD.doctrineById(id)).filter(Boolean);
    const fresh = (score.freshAchievements || []).map(id => AD.achById(id)).filter(Boolean);
    this.el('ending-body').innerHTML = `
      <div class="end-stamp ${score.win ? 'win' : ''}">${e.title}</div>
      <div class="end-kicker">${e.kicker}</div>
      <p class="end-epitaph">${AD.clean(e.epitaph, this.settings.clean)}</p>
      <div class="end-stats">
        <div class="stat"><b>${score.authority}</b><i>Authority</i></div>
        <div class="stat"><b>${score.months}</b><i>Months Served</i></div>
        <div class="stat"><b>${score.pillars}/4</b><i>Pillars</i></div>
        <div class="stat"><b>${score.score.toLocaleString()}</b><i>Final Score</i></div>
      </div>
      ${fresh.length ? `<div class="end-ach"><div class="end-ach-h">ACHIEVEMENTS UNLOCKED</div>
        ${fresh.map(a => `<div class="ach got"><b>🏅 ${a.name}</b><i>${a.desc}</i></div>`).join('')}</div>` : ''}
      ${score.pillarNames.length ? `<div class="end-pillars">${score.pillarNames.map(p => `<span>${p}</span>`).join('')}</div>` : ''}
      ${doctrines.length ? `<div class="end-pillars">${doctrines.map(d => `<span>${d.glyph} ${d.name}</span>`).join('')}</div>` : ''}
      ${score.clausesBroken ? `<div class="end-kicker" style="margin:-6px 0 14px">
        ${score.clausesBroken}/${AD.CLAUSES.length} CONSTITUTIONAL CLAUSES BROKEN${score.fullSet ? ' · THE FULL SET' : ''}</div>` : ''}
      ${score.seed ? `<div class="end-seed">SEED <b>${score.seed}</b><br><em>same seed, same term, send it to somebody</em></div>` : ''}
      <div class="end-actions">
        <button class="btn btn-primary" data-act="dossier">Read Your Dossier</button>
        <button class="btn" data-act="read-paper">The Front Page</button>
        <button class="btn" data-act="new">New President</button>
        <button class="btn btn-ghost" data-act="library">Presidential Library</button>
        <button class="btn btn-ghost" data-act="title">Main Menu</button>
      </div>`;
    this.show('ending');
  },

  /* ---------- the front page (personalised term recap) ---------- */
  renderFrontPage (score) {
    const f = AD.buildFrontPage(score);
    const cln = s => AD.clean(s, this.settings.clean);
    this.el('paper-body').innerHTML = `
      <div class="fp-masthead">${f.masthead}</div>
      <div class="fp-strap"><span>${f.strap[0]}</span><span>${f.strap[1]}</span></div>
      <h1 class="fp-head ${f.win ? 'win' : ''}">${cln(f.headline)}</h1>
      ${f.deck ? `<h3 class="fp-deck">${cln(f.deck)}</h3>` : ''}
      <div class="fp-byline">${f.byline}</div>
      <div class="fp-boxes">${f.boxes.map(b => `<div class="fp-box"><b>${b.n}</b><i>${b.label}</i></div>`).join('')}</div>
      <div class="fp-story">${f.story.map(p => `<p>${cln(p)}</p>`).join('')}</div>
      <div class="fp-verdict">${cln(f.verdict)}</div>
      <div class="dos-actions">
        <button class="btn btn-ghost" data-act="paper-close">Close</button>
      </div>`;
    this.overlay('paper', true);
  },

  /* ---------- the generated dossier ---------- */
  renderDossier (score) {
    const d = AD.buildDossier(score);
    const cln = s => AD.clean(s, this.settings.clean);
    this.el('dossier-body').innerHTML = `
      <div class="dos-masthead">THE NATIONAL SCREAM</div>
      <div class="dos-strap"><span>SPECIAL DOSSIER EDITION</span><span>THE COMPLETE RECORD</span></div>
      <h2 class="dos-head ${d.win ? 'win' : ''}">${d.headline}</h2>
      <h4 class="dos-stand">${cln(d.standfirst)}</h4>
      <div class="dos-copy">${d.paras.map(p => `<p>${cln(p)}</p>`).join('')}</div>
      <div class="dos-verdict">${cln(d.verdict)}</div>
      <div class="dos-share" id="dos-share">${cln(d.share)}</div>
      <div class="dos-actions">
        <button class="btn btn-primary" data-act="dossier-copy">Copy to Share</button>
        <button class="btn btn-ghost" data-act="dossier-close">Close</button>
      </div>`;
    this._dossierShare = d.share;
  }
};
