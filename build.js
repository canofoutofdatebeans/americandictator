#!/usr/bin/env node
/* ============================================================
   AMERICAN DICTATOR, build.js
   Produce the two editions.

     node build.js            -> dist/free  and  dist/full
     node build.js free       -> dist/free only
     node build.js full       -> dist/full only

   The editions are SEPARATE BUILDS, not one build with a flag: the free
   edition physically does not contain the paid WRITING, which is the part
   worth copying. See FREE_OMIT below for exactly what is withheld and an
   honest note on what this does and does not protect.

   Everything the split depends on lives in js/tier.js; this script only
   flips AD.TIER and drops the files the free edition has no use for.
   ============================================================ */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'dist');

/* What a FREE build does not ship.
   ONLY CONTENT. The room mechanics stay in both builds, deliberately: the
   rooms are ~70 shared helpers deep into engine.js, ui.js, sections.js and
   reactive.js, and cutting them means either 69 fragile shims or a free build
   that crashes the first time somebody edits an unrelated file. The valuable,
   copyable asset is the WRITING, and that is what is actually withheld here:
   the nine bonus decks, the deck translations, the 65 extra nations and the
   rotating private-interests catalogue.

   Honest note: because the room code ships in both, a determined person could
   flip AD.TIER in a free build and reach the empty shells of the paid rooms.
   They would get the plumbing, not the content, which is the smaller prize by
   a very wide margin. */
const FREE_OMIT = [
  // the nine bonus theme packs (~360 cards)
  'js/packs/pack-j-cabinet.js',
  'js/packs/pack-k-family.js',
  'js/packs/pack-l-culturewar.js',
  'js/packs/pack-m-tech.js',
  'js/packs/pack-n-disasters.js',
  'js/packs/pack-o-health.js',
  'js/packs/pack-p-grift.js',
  'js/packs/pack-q-faithful.js',
  'js/packs/pack-r-laworder.js',
  // the 65 extra nations and their summits (purely additive to the roster)
  'js/nations.js',
  // the other ninety war targets and their signature operations. The free
  // edition keeps the ten hand-built countries in war.js, which is a complete
  // War Room on its own; the region tabs simply do not appear.
  'js/wartargets.js',
  // the per-country economy layer and the second half of the address book
  'js/econmoves.js',
  'js/callbook2.js',
  // the rotating market and the Board of Peace (additive to the shop)
  'js/interests.js',
  'js/boardofpeace.js',
  // every non-English deck translation
  'js/i18n/cards-es.js',
  'js/i18n/cards-fr.js',
  'js/i18n/cards-cs.js',
  'js/i18n/cards-it.js',
  'js/i18n/cards-de.js'
];

/* Directories copied wholesale. */
/* Music/ is here deliberately: it is by far the largest thing in the project
   and leaving it out of this list silently shipped both editions with no
   music at all, which is exactly the kind of omission a copy-the-folder build
   invites. If a new asset directory is added, it goes here. */
const COPY_DIRS = ['css', 'js', 'assets', 'img', 'Music'];
const COPY_FILES = ['index.html', 'manifest.json', 'icon.svg'];

function rmrf (p) { if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true }); }
function mkdirp (p) { fs.mkdirSync(p, { recursive: true }); }

function copyDir (src, dst, skip) {
  if (!fs.existsSync(src)) return;
  mkdirp(dst);
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    const rel = path.relative(ROOT, s).split(path.sep).join('/');
    if (skip && skip.has(rel)) continue;
    if (e.isDirectory()) copyDir(s, d, skip);
    else fs.copyFileSync(s, d);
  }
}

function build (tier) {
  const dst = path.join(OUT, tier);
  const skip = new Set(tier === 'free' ? FREE_OMIT : []);
  rmrf(dst); mkdirp(dst);

  COPY_DIRS.forEach(d => copyDir(path.join(ROOT, d), path.join(dst, d), skip));
  COPY_FILES.forEach(f => {
    const s = path.join(ROOT, f);
    if (fs.existsSync(s)) fs.copyFileSync(s, path.join(dst, f));
  });

  /* Flip the edition switch. */
  const tp = path.join(dst, 'js', 'tier.js');
  let t = fs.readFileSync(tp, 'utf8');
  t = t.replace(/AD\.TIER = '(free|full)';/, "AD.TIER = '" + tier + "';");
  if (!t.includes("AD.TIER = '" + tier + "'")) throw new Error('could not set tier in ' + tp);
  fs.writeFileSync(tp, t, 'utf8');

  /* Drop the <script> tags for anything this edition does not ship, so the
     browser never requests a file that is not there. */
  const ip = path.join(dst, 'index.html');
  let html = fs.readFileSync(ip, 'utf8');
  skip.forEach(rel => {
    const re = new RegExp('\\s*<script src="' + rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\?v=[^"]*"><\\/script>', 'g');
    html = html.replace(re, '');
  });
  fs.writeFileSync(ip, html, 'utf8');

  /* Sanity: every script the page still asks for must actually exist. */
  const missing = [];
  const re = /<script src="([^"?]+)/g;
  let m;
  while ((m = re.exec(html))) {
    if (!fs.existsSync(path.join(dst, m[1]))) missing.push(m[1]);
  }
  if (missing.length) throw new Error(tier + ' build references missing files:\n  ' + missing.join('\n  '));

  const count = (function walk (p) {
    let n = 0;
    for (const e of fs.readdirSync(p, { withFileTypes: true })) {
      n += e.isDirectory() ? walk(path.join(p, e.name)) : 1;
    }
    return n;
  })(dst);

  console.log('  ' + tier.padEnd(5) + ' -> dist/' + tier + '  (' + count + ' files' +
              (tier === 'free' ? ', ' + FREE_OMIT.length + ' omitted' : '') + ')');
}

const which = process.argv[2];
console.log('Building American Dictator...');
mkdirp(OUT);
if (!which || which === 'free') build('free');
if (!which || which === 'full') build('full');
console.log('Done.');
