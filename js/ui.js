/* ============================================================
   AMERICAN DICTATOR — ui.js
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
    if (o) o.hidden = !on;
  },

  /* ---------- portrait ---------- */
  portraitSVG (p, party) {
    const P = AD.PORTRAIT;
    const hair = P.hair[p.hair % P.hair.length];
    const skin = P.skin[p.skin % P.skin.length];
    const tie  = P.tie[p.tie % P.tie.length];
    const suit = P.suit[p.suit % P.suit.length];
    const shade = this.darken(skin, .18);
    return `<svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Presidential portrait">
      <rect width="100" height="118" fill="#0f0c09"/>
      <path d="M6 118 C9 92 27 83 40 79 L60 79 C73 83 91 92 94 118 Z" fill="${suit}"/>
      <path d="M41 79 L50 97 L59 79 Z" fill="#efe9dc"/>
      <path d="M50 89 L45.5 97 L50 116 L54.5 97 Z" fill="${tie}"/>
      <rect x="43" y="61" width="14" height="21" rx="6" fill="${shade}"/>
      <ellipse cx="27.5" cy="47" rx="4" ry="6" fill="${shade}"/>
      <ellipse cx="72.5" cy="47" rx="4" ry="6" fill="${shade}"/>
      <ellipse cx="50" cy="45" rx="21" ry="25" fill="${skin}"/>
      <path d="M26 41 C29 25 46 18 60 23 C69 26 74 33 74 42 C67 32 52 31 42 37 C36 40 29 45 26 41 Z" fill="${hair}"/>
      <path d="M28 34 C36 24 54 21 66 27 C60 24 44 25 34 33 Z" fill="${this.darken(hair,.12)}"/>
      <ellipse cx="42.5" cy="45" rx="2.2" ry="1.7" fill="#1a1512"/>
      <ellipse cx="57.5" cy="45" rx="2.2" ry="1.7" fill="#1a1512"/>
      <path d="M43 57 Q50 61.5 57 57" stroke="${this.darken(skin,.45)}" stroke-width="1.7" fill="none" stroke-linecap="round"/>
      <circle cx="33" cy="95" r="3.2" fill="${party}"/>
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
  renderHUD () {
    const run = AD.Engine.run;
    this.el('hud-date').textContent = AD.dateLabel(run.month) +
      (run.term > 1 ? ' · 2nd Term' : '');
    this.el('hud-rank').textContent = AD.rankFor(run.authority);
    const inc = AD.passives(run).income || 0;
    const cashEl = this.el('hud-cash');
    cashEl.innerHTML = '$<span>' + run.cash.toFixed(1) + '</span>B' +
      (inc ? '<em>+' + Math.round(inc * 1000) + 'M</em>' : '');
    cashEl.classList.toggle('rich', run.cash >= AD.WEALTH_GOAL);
    cashEl.title = run.cash >= AD.WEALTH_GOAL
      ? 'The fortune is secured. Private Interests.'
      : `Private Interests — $${(AD.WEALTH_GOAL - run.cash).toFixed(1)}B short of the fortune`;
    document.documentElement.style.setProperty('--party', run.color);

    this.el('auth-num').textContent = run.authority;
    this.el('auth-fill').style.width = run.authority + '%';
    this.el('auth-cap').style.left = AD.SOFT_CAP + '%';

    const chip = this.el('const-chip');
    const cn = AD.clauseCount(run);
    chip.innerHTML = 'THE CONSTITUTION <b>' + cn + '/' + AD.CLAUSES.length + '</b>';
    chip.classList.toggle('full', AD.allClausesBroken(run));
    chip.classList.toggle('started', cn > 0);

    const warns = AD.Engine.warnings();
    this.el('warnings').innerHTML = warns.map(w =>
      `<div class="warn-row ${w.level}">${w.text}</div>`).join('');

    const pillars = AD.FACTIONS.filter(f => f.capturable);
    this.el('pillar-row').innerHTML = pillars.map(f =>
      `<div class="pill ${run.locked[f.key] ? 'on' : ''}" title="${f.pillar}">${
        run.locked[f.key] ? f.pillar : '—'}</div>`).join('');

    this.el('factions').innerHTML = AD.FACTIONS.map(f => {
      const v = run.meters[f.key];
      const locked = !!run.locked[f.key];
      const danger = !locked && (v <= 18 || (f.key === 'base' && v >= 88));
      const col = locked ? 'linear-gradient(90deg,#c9a227,#f2dd8a)'
                : v <= 22 ? '#c0392b'
                : v >= 80 ? '#c9a227'
                : v >= 55 ? '#6d8f5e' : '#8d8271';
      const label = locked
        ? `${f.name}: captured. ${f.pillar} secured.`
        : `${f.name}: ${v} of 100.${danger ? ' Critical.' : ''}`;
      return `<div class="fac ${locked ? 'locked' : ''} ${danger ? 'danger' : ''}"
             title="${f.name} — ${f.blurb}"
             role="meter" tabindex="0"
             aria-label="${label}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100">
        ${locked ? '<span class="lock" aria-hidden="true">🔒</span>' : ''}
        <div class="fac-fig" aria-hidden="true">${f.icon}</div>
        <div class="fac-bar" aria-hidden="true"><div class="fac-fill" style="width:${v}%;background:${col}"></div></div>
        <div class="fac-val" aria-hidden="true">${v}</div>
        <div class="fac-name" aria-hidden="true">${f.short}</div>
      </div>`;
    }).join('');
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

    this.el('card-sil').textContent = (card.who && card.who.sil) || '🏛';
    this.el('card-name').textContent = (card.who && card.who.name) || '—';
    this.el('card-role').textContent = (card.who && card.who.role) || '';

    const titleEl = this.el('card-title');
    // pillarBanner carries its own wording so non-pillar beats (the Second
    // Inaugural) don't get "SECURED" bolted onto the end of them.
    titleEl.innerHTML = (card.pillarBanner
        ? `<span class="card-banner">${card.pillarBanner}</span><br>` : '') + cln(card.title);
    this.el('card-text').textContent = cln(card.text);

    const peek = this.settings.pack;
    this.el('choices').innerHTML = card.choices.map((ch, i) => {
      const afford = AD.Engine.canAfford(ch);
      let peekHTML = '';
      if (peek && ch.eff) {
        const parts = [];
        AD.FKEYS.forEach(k => {
          if (!ch.eff[k]) return;
          const f = AD.faction(k);
          parts.push(`<span class="${ch.eff[k] > 0 ? 'up' : 'down'}">${f.icon}<b>${ch.eff[k] > 0 ? '+' : ''}${ch.eff[k]}</b></span>`);
        });
        if (ch.eff.auth) parts.push(`<span class="auth">⚑<b>${ch.eff.auth > 0 ? '+' : ''}${ch.eff.auth}</b></span>`);
        if (ch.eff.cash) parts.push(`<span class="${ch.eff.cash > 0 ? 'up' : 'down'}">$<b>${ch.eff.cash > 0 ? '+' : ''}${ch.eff.cash}</b></span>`);
        if (parts.length) peekHTML = `<span class="peek">${parts.join('')}</span>`;
      } else if (peek && card.dynamic) {
        peekHTML = `<span class="peek"><span class="auth">Outcome depends on the board.</span></span>`;
      }
      let tag = ch.cost ? `<span class="cost-tag">−$${ch.cost}B</span>` : '';
      if (ch.needsAuth && run.authority < ch.needsAuth) {
        tag += `<span class="cost-tag">requires Authority ${ch.needsAuth}</span>`;
      }
      return `<button class="choice" data-choice="${i}" ${afford ? '' : 'disabled'}
        aria-keyshortcuts="${i + 1}">${cln(ch.label)}${tag}${peekHTML}</button>`;
    }).join('');

    this.startTimer(card);
  },

  /* ---------- timer ---------- */
  startTimer (card) {
    this.stopTimer();
    const box = this.el('timer');
    if (!this.settings.timer || card.final) { box.hidden = true; return; }

    const base = AD.Engine.diff().timer + (this.settings.pack ? 8 : 0);
    let left = base;
    box.hidden = false;
    box.classList.remove('low');
    const ring = this.el('t-fg'), num = this.el('t-num');
    const C = 100.5;
    const paint = () => {
      num.textContent = left;
      ring.style.strokeDashoffset = C * (1 - left / base);
      box.classList.toggle('low', left <= 4);
    };
    paint();
    this._t = setInterval(() => {
      left -= 1;
      if (left <= 0) { this.stopTimer(); AD.Game.timeout(); return; }
      paint();
    }, 1000);
  },

  stopTimer () {
    if (this._t) { clearInterval(this._t); this._t = null; }
    this.el('timer').hidden = true;
  },

  /* ---------- resolution ---------- */
  renderResolution (out, expired, terminal) {
    const cln = s => AD.clean(s, this.settings.clean);
    const card = this.el('card');
    card.classList.add('out');
    setTimeout(() => { card.hidden = true; }, 260);

    setTimeout(() => {
      const r = this.el('resolution');
      r.hidden = false;
      r.style.animation = 'none'; void r.offsetWidth; r.style.animation = '';
      this.el('res-stamp').textContent = terminal ? 'FINAL DECISION'
        : expired ? 'TIME EXPIRED — STAFF DECIDED' : 'DECISION LOGGED';
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
      else if (out.authCapped) chips.push(`<span class="delta">⚑ CAPPED AT ${AD.SOFT_CAP} — TAKE A BRANCH</span>`);
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
  renderConstitution () {
    const run = AD.Engine.run;
    const n = AD.clauseCount(run), total = AD.CLAUSES.length;
    this.el('const-count').textContent = n + ' / ' + total;
    this.el('const-score').textContent = AD.clauseScore(run).toLocaleString();

    const note = this.el('const-note');
    if (AD.allClausesBroken(run)) {
      note.className = 'const-note complete';
      note.innerHTML = '<b>The full set.</b> Rusalka has settled up — ' +
        '$' + (total * AD.CLAUSE_BOUNTY).toFixed(2) + 'B, itemised by clause, ' +
        'through four intermediary banks. Nobody asked them to.';
    } else {
      note.className = 'const-note';
      note.textContent = `Each clause broken is worth ${AD.CLAUSE_SCORE} score. ` +
        `Break all ${total} and an unbidden payment arrives from Rusalka — ` +
        `$${AD.CLAUSE_BOUNTY.toFixed(2)}B for every one of them.`;
    }

    this.el('const-list').innerHTML = AD.CLAUSES.map(c => {
      const broke = AD.brokeClause(run, c.id);
      return `<div class="clause ${broke ? 'broke' : ''}">
        <div class="clause-top"><b>${c.name}</b><span>${c.ref}</span></div>
        <i class="clause-line">${c.line}</i>
        ${broke ? `<div class="clause-broke">${AD.clean(c.broke, this.settings.clean)}</div>` : ''}
      </div>`;
    }).join('');
  },

  /* ---------- private interests (corruption) ---------- */
  renderCorruption (justBought) {
    const run = AD.Engine.run;
    const p = AD.passives(run);
    this.el('corr-cash').textContent = '$' + run.cash.toFixed(2) + 'B';
    this.el('corr-income').textContent = '$' + Math.round((p.income || 0) * 1000) + 'M';

    const note = this.el('corr-note');
    if (justBought) {
      note.className = 'corr-note bought';
      note.innerHTML = `<b>${justBought.name} acquired.</b> ` +
        AD.clean(justBought.flavour, this.settings.clean);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Holdings never grant Authority. They buy the machine that takes it — ' +
        'shields, multipliers, monthly drip and the income to buy more of all three.';
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
      const e = AD.ENDINGS[r.endingId] || { title: '—' };
      const terms = (r.term || 1) > 1 ? ' · 2 terms' : '';
      return `<div class="lib-row ${r.win ? 'win' : ''}">
        <div class="lib-por">${this.portraitSVG(r.portrait || { hair: 0, skin: 0, tie: 0, suit: 0 }, r.color || '#c8342f')}</div>
        <div class="lib-main"><b>${r.president}${r.inherited ? ' <em class="inh-tag">inherited</em>' : ''}</b>
          <i>${e.title} · ${r.months} months${terms} · ${r.pillars} pillar${r.pillars === 1 ? '' : 's'}</i></div>
        <div class="lib-score"><b>${r.score.toLocaleString()}</b><i>SCORE</i></div>
      </div>`;
    }).join('') : '<div class="lib-empty">No presidencies on record.<br>Suspiciously clean.</div>';

    this.renderAchievements();
  },

  /* ---------- achievements gallery ---------- */
  renderAchievements () {
    const have = AD.loadAchievements();
    this.el('ach-count').textContent = `${have.length} / ${AD.ACHIEVEMENTS.length}`;
    this.el('ach-grid').innerHTML = AD.ACHIEVEMENTS.map(a => {
      const got = have.indexOf(a.id) !== -1;
      // Secret achievements stay hidden until earned — that's the point of them.
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
      ${score.seed ? `<div class="end-seed">SEED <b>${score.seed}</b><br><em>same seed, same term — send it to somebody</em></div>` : ''}
      <div class="end-actions">
        <button class="btn btn-primary" data-act="read-paper">Read the Front Page</button>
        <button class="btn" data-act="new">Try Again With A New President</button>
        <button class="btn btn-ghost" data-act="library">Presidential Library</button>
        <button class="btn btn-ghost" data-act="title">Main Menu</button>
      </div>`;
    this.show('ending');
  }
};
