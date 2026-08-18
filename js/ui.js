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

    const rchip = this.el('reno-chip');
    const rn = (run.renos || []).length;
    rchip.innerHTML = 'THE RESIDENCE <b>' + rn + '/' + AD.RENOS.length + '</b>';
    rchip.classList.toggle('started', rn > 0);
    rchip.classList.toggle('full', rn === AD.RENOS.length);
    rchip.title = rn
      ? `Upkeep −$${Math.round(AD.upkeep(run) * 1000)}M every month`
      : 'The Residence — improvements to the White House';

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
      // Three of the five power centres have a management screen behind them;
      // clicking the tile opens it. The others are governed only through cards.
      const screen = AD.FAC_SCREEN[f.key];
      const manage = screen && !locked ? ` data-manage="${f.key}"` : '';
      return `<div class="fac ${locked ? 'locked' : ''} ${danger ? 'danger' : ''} ${screen && !locked ? 'has-screen' : ''}"${manage}
             title="${f.name} — ${f.blurb}${screen && !locked ? ' — tap to manage' : ''}"
             role="meter" tabindex="0"
             aria-label="${label}${screen && !locked ? ' Activate to manage.' : ''}" aria-valuenow="${v}" aria-valuemin="0" aria-valuemax="100">
        ${locked ? '<span class="lock" aria-hidden="true">🔒</span>' : ''}
        ${screen && !locked ? '<span class="fac-cog" aria-hidden="true">⚙</span>' : ''}
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

    /* NO IMPACT PREVIEW. The score behind a choice is deliberately hidden —
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
      return `<button class="choice" data-choice="${i}" ${afford ? '' : 'disabled'}
        aria-keyshortcuts="${i + 1}">${cln(ch.label)}${tag}</button>`;
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

  /* ---------- the Saint Ambrose ticker ----------
     A leak has no card of its own — it is the story doing damage between
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
      note.innerHTML = `<b>${justBuilt.name} — complete.</b> ` +
        AD.clean(justBuilt.flavour, this.settings.clean);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Every structure grants Authority the moment it is finished — and bills you ' +
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
      const s = result.senator;
      const verb = { acknowledge: 'brought into line', humiliate: 'humiliated in public',
                     sue: 'served with a lawsuit', sack: 'forced out of the Senate' }[result.action.id];
      note.innerHTML = `<b>Senator ${s.last} of ${s.state} ${verb}.</b> ` +
        (result.action.id === 'sue' ? 'The rest of the caucus has taken note.'
         : result.action.id === 'sack' ? 'A loyalist of your choosing now holds the seat.'
         : AD.SENATE_ACTIONS.find(a => a.id === result.action.id).blurb);
    } else {
      note.className = 'corr-note';
      note.textContent = 'Keep your own party in line. Loyalty drifts down every month, and once the caucus ' +
        'average sags the whole chamber turns on you. The opposition will almost never approve.';
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
        const cost = act.cost ? ` <em>$${act.cost}B</em>` : '';
        return `<button class="sen-act act-${act.id}" data-sen="${s.id}" data-senact="${act.id}" ${avail.ok ? '' : 'disabled'} title="${act.blurb}">${act.icon} ${act.label}${cost}</button>`;
      }).join('');
      return `<div class="sen-row mood-${mood.key} party-${s.party}">
        <div class="sen-top">
          <span class="sen-dot"></span>
          <b>Sen. ${s.first} ${s.last}</b>
          <i>${s.state}${s.appointee ? ' · appointed' : ''}${s.sued ? ' · sued' : ''}</i>
          <span class="sen-mood">${mood.label}</span>
        </div>
        <div class="sen-loywrap"><div class="sen-loy" style="width:${s.loyalty}%"></div></div>
        ${s.gripe && s.party === 'own' ? `<div class="sen-gripe">${s.gripe}</div>` : ''}
        <div class="sen-acts">${buttons}</div>
      </div>`;
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
