/* ============================================================
   AMERICAN DICTATOR — portraits.js
   Procedural character portraits for the cast.

   Every recurring speaker gets a distinct, CONSISTENT face generated
   deterministically from their name — so Deborah always looks like
   Deborah — instead of a shared emoji. Same building blocks as the
   player portrait, plus feature variation (hair style, brows, glasses,
   facial hair, a few role hints) so ~40 characters read as individuals.
   ============================================================ */

AD.CHAR_PAL = {
  skin: ['#e8b487', '#f0c9a0', '#d69b6a', '#a5764c', '#7a5334', '#5e3a22', '#c98a58', '#efd3b3'],
  hair: ['#2b2118', '#4a3524', '#6f5334', '#8a6a3c', '#b08a52', '#d9d3c4', '#c9c2b4', '#3c3128', '#7a2f22', '#efe9dc'],
  suit: ['#1c2230', '#2b2b2b', '#31384a', '#3a2a1c', '#0f2a24', '#4a1f27', '#26303f', '#241f2c'],
  tie:  ['#b3202b', '#2d5fa8', '#c9a227', '#2f7a52', '#6b3f8f', '#1b1b1b', '#a8432b', '#3a6ea5']
};

AD.charPortrait = function (who) {
  const key = (who && (who.name || who.role || who.sil)) || 'anon';
  let h = (AD.Seed ? AD.Seed.hash(key) : 123456789) >>> 0;
  const nxt = () => { h = (Math.imul(h ^ (h >>> 15), 0x2c1b3c6d) ^ (h >>> 7)) >>> 0; return h; };
  const pick = arr => arr[nxt() % arr.length];
  const chance = p => (nxt() % 100) < p;

  const P = AD.CHAR_PAL;
  const skin = pick(P.skin);
  const hair = pick(P.hair);
  const suit = pick(P.suit);
  const tie  = pick(P.tie);
  const dk = (hex, a) => AD.UI.darken(hex, a);
  const shade = dk(skin, .2);

  const style = nxt() % 5;            // hair style
  const bald  = style === 4;
  const glasses = chance(28);
  const beard = chance(18);
  const brows = chance(70);
  const role = (who && who.role || '').toLowerCase();
  const military = /chief|joint|general|guard|defense|defence/.test(role);
  const clergy = /reverend|pastor|chaplain/.test(role);

  const hairPaths = [
    // 0 short/neat
    `<path d="M25 44 C27 26 46 18 60 24 C70 28 75 35 75 44 C68 33 52 31 42 37 C36 40 29 47 25 44 Z" fill="${hair}"/>`,
    // 1 swept/quiff
    `<path d="M24 45 C24 24 44 15 62 22 C72 26 77 34 76 44 C70 30 64 41 52 34 C44 30 33 34 30 46 C28 46 25 47 24 45 Z" fill="${hair}"/>`,
    // 2 side part
    `<path d="M25 45 C26 26 45 18 61 24 C71 28 76 35 75 45 C69 34 58 33 50 34 C48 30 46 30 44 33 C38 34 30 40 25 45 Z" fill="${hair}"/>`,
    // 3 longer
    `<path d="M23 58 C21 30 42 15 62 22 C74 27 79 40 77 60 C74 46 72 40 70 38 C71 33 55 30 44 35 C34 39 30 45 30 58 C27 60 24 60 23 58 Z" fill="${hair}"/>`
  ];

  return `<svg viewBox="0 0 100 118" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Portrait of ${who && who.name || 'an official'}">
    <rect width="100" height="118" fill="#0f0c09"/>
    <path d="M6 118 C9 92 27 83 40 79 L60 79 C73 83 91 92 94 118 Z" fill="${suit}"/>
    <path d="M41 79 L50 96 L59 79 Z" fill="${dk('#efe9dc', clergy ? 0 : .05)}"/>
    ${clergy ? `<rect x="47" y="80" width="6" height="6" fill="#fff"/>` :
      `<path d="M50 88 L45.5 96 L50 114 L54.5 96 Z" fill="${tie}"/>`}
    ${military ? `<rect x="16" y="92" width="12" height="4" fill="${pick(P.tie)}"/><rect x="72" y="92" width="12" height="4" fill="${pick(P.tie)}"/>` : ''}
    <rect x="43" y="60" width="14" height="22" rx="6" fill="${shade}"/>
    <ellipse cx="27.5" cy="47" rx="4" ry="6" fill="${shade}"/>
    <ellipse cx="72.5" cy="47" rx="4" ry="6" fill="${shade}"/>
    <ellipse cx="50" cy="45" rx="21" ry="25" fill="${skin}"/>
    ${brows ? `<path d="M39 39 Q43 37 47 39" stroke="${dk(hair, .1)}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
      <path d="M53 39 Q57 37 61 39" stroke="${dk(hair, .1)}" stroke-width="1.8" fill="none" stroke-linecap="round"/>` : ''}
    <ellipse cx="43" cy="45" rx="2.1" ry="1.7" fill="#1a1512"/>
    <ellipse cx="57" cy="45" rx="2.1" ry="1.7" fill="#1a1512"/>
    ${glasses ? `<g fill="none" stroke="#20242c" stroke-width="1.4"><rect x="38" y="41" width="9" height="7" rx="2"/><rect x="53" y="41" width="9" height="7" rx="2"/><path d="M47 44 h6"/></g>` : ''}
    ${beard ? `<path d="M35 52 Q50 72 65 52 Q60 66 50 68 Q40 66 35 52 Z" fill="${dk(hair, .05)}" opacity=".9"/>` : ''}
    <path d="M44 57 Q50 ${beard ? 60 : 61} 56 57" stroke="${dk(skin, .4)}" stroke-width="1.6" fill="none" stroke-linecap="round"/>
    ${bald ? `<path d="M30 42 C33 30 44 26 55 28 C64 30 69 36 70 44 C64 40 40 38 30 42 Z" fill="${skin}"/>` : hairPaths[style % hairPaths.length]}
    ${military ? `<path d="M24 30 L76 30 L74 22 L26 22 Z" fill="${suit}"/><rect x="20" y="30" width="60" height="4" fill="${dk(suit,.2)}"/><circle cx="50" cy="26" r="3" fill="${pick(P.tie)}"/>` : ''}
  </svg>`;
};
