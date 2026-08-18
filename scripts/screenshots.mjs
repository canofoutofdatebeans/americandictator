/* ============================================================
   AMERICAN DICTATOR, screenshots.mjs
   Pixel-exact store screenshots, driven by Playwright.

   Captures the key screens at the App Store 6.7" resolution
   (1290 x 2796: a 430 x 932 CSS viewport at deviceScaleFactor 3)
   and writes them to screenshots/.

   Setup (once):
     npm i -D playwright
     npx playwright install chromium

   Run against the live site (default):
     node scripts/screenshots.mjs

   Or against a local dev server / any URL:
     node scripts/screenshots.mjs http://localhost:8412

   Notes
   - Screens are driven through the game's own data-act handlers via
     page.evaluate, not physical clicks, so the walk is deterministic and
     never depends on element coordinates.
   - The win ending is staged with a synthetic score so we can capture the
     PRESIDENT-FOR-LIFE front page without playing a full term.
   - Audio is muted at the browser level; nothing here needs sound.
   ============================================================ */

import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT  = path.join(ROOT, 'screenshots');

const URL = process.argv[2] || 'https://canofoutofdatebeans.github.io/americandictator/';

// App Store 6.7" is 1290 x 2796 = 430 x 932 CSS px at DPR 3.
const VIEWPORT = { width: 430, height: 932 };
const DPR = 3;

const wait = ms => new Promise(r => setTimeout(r, ms));

async function main () {
  await mkdir(OUT, { recursive: true });

  const browser = await chromium.launch({ args: ['--autoplay-policy=no-user-gesture-required', '--mute-audio'] });
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: DPR });

  const shots = [];
  const shot = async (name) => {
    await wait(650);                         // let deal-in / pop animations settle
    const file = path.join(OUT, name + '.png');
    await page.screenshot({ path: file });
    shots.push(name + '.png');
    console.log('  captured', name);
  };

  // Drive a screen transition through the game's own dispatcher, then confirm.
  const act = (a) => page.evaluate(sel => {
    const b = document.querySelector('[data-act="' + sel + '"]');
    if (b) b.click();
    return (document.querySelector('.screen.active') || {}).id || null;
  }, a);

  console.log('Loading', URL);
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForFunction('window.AD && AD.BUILD');
  const build = await page.evaluate('AD.BUILD');
  console.log('  build', build);

  // 1. Title
  await shot('01-title');

  // 2. Character creation
  await act('new');
  await shot('02-assume-office');

  // 3. Core gameplay: the HUD, victory tracker, meters and a crisis card
  await act('begin');
  await shot('03-gameplay');

  // 4. A section pop-up, so the bulletin banner is visible in the store set
  await page.evaluate(() => {
    const pop = (AD.SECTION_POOL || []).find(c => c.section === 'street') || (AD.SECTION_POOL || [])[0];
    if (pop) { AD.Engine.card = pop; AD.UI.renderCard(pop); window.scrollTo(0, 0); }
  });
  await shot('04-popup-bulletin');

  // 5. The Constitution: the break-a-clause screen
  await act('constitution');
  await shot('05-constitution');
  await act('constitution-close');

  // 6. The Pardon Power: the satirical cast
  await act('pardon');
  await shot('06-pardons');
  await act('pardon-close');

  // 7. The win: PRESIDENT-FOR-LIFE front page (staged score)
  await page.evaluate(() => {
    document.querySelectorAll('.overlay').forEach(o => { o.style.display = 'none'; });
    AD.UI.renderEnding({
      endingId: 'dictator', win: true, doctrines: [], freshAchievements: [],
      authority: 100, months: 48, pillars: 4, score: 98750,
      pillarNames: ['Congress', 'The Courts', 'The Press', 'The Street'],
      clausesBroken: 16, fullSet: true, seed: 'PATRIOT-1776'
    });
    window.scrollTo(0, 0);
  });
  await shot('07-president-for-life');

  await browser.close();
  console.log('\nDone. ' + shots.length + ' screenshots in ' + path.relative(ROOT, OUT) + '/  (' +
              (VIEWPORT.width * DPR) + ' x ' + (VIEWPORT.height * DPR) + ')');
}

main().catch(e => { console.error(e); process.exit(1); });
