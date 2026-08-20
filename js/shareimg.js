/* ============================================================
   AMERICAN DICTATOR, shareimg.js
   THE FRONT PAGE, AS AN IMAGE.

   The Front Page is the best thing the game produces and it was
   trapped inside the game. This renders it to a canvas at a size
   social platforms actually like, and hands the player a PNG.

   Everything is drawn, not screenshotted: no html2canvas, no
   dependency, no CORS, and it looks identical on every browser
   because the browser is not laying anything out. It is the same
   philosophy as the rest of this project, which runs off a static
   folder with no build step.

   1080 x 1350 is the 4:5 portrait ratio that survives every feed
   crop without the headline losing its head.
   ============================================================ */

AD.SHARE_W = 1080;
AD.SHARE_H = 1350;

/* Word-wrap helper: draws text in a box and returns the y it finished at. */
function wrapText (ctx, text, x, y, maxW, lineH, maxLines) {
  const words = String(text || '').split(/\s+/);
  let line = '', lines = [];
  words.forEach(w => {
    const test = line ? line + ' ' + w : w;
    if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = w; }
    else line = test;
  });
  if (line) lines.push(line);
  if (maxLines && lines.length > maxLines) {
    lines = lines.slice(0, maxLines);
    lines[maxLines - 1] = lines[maxLines - 1].replace(/[\s.,;:]+$/, '') + '…';
  }
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lineH));
  return y + lines.length * lineH;
}

/* Shrink the font until the string fits one line, down to a floor. */
function fitOneLine (ctx, text, maxW, start, floor, weight) {
  let size = start;
  do {
    ctx.font = weight + ' ' + size + 'px ' + AD.SHARE_FONT;
    if (ctx.measureText(text).width <= maxW) break;
    size -= 2;
  } while (size > floor);
  return size;
}

AD.SHARE_FONT = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';

/* Draw the whole thing. Returns the canvas. */
AD.renderShareImage = function (score) {
  const W = AD.SHARE_W, H = AD.SHARE_H;
  const f = AD.buildFrontPage(score);
  const cv = document.createElement('canvas');
  cv.width = W; cv.height = H;
  const c = cv.getContext('2d');
  const PAD = 66;
  const INNER = W - PAD * 2;

  /* ---- newsprint ground ---- */
  c.fillStyle = '#efe9dc';
  c.fillRect(0, 0, W, H);
  // faint horizontal rule texture, the way the in-game front page has it
  c.fillStyle = 'rgba(0,0,0,.018)';
  for (let y = 0; y < H; y += 3) c.fillRect(0, y, W, 1);

  let y = PAD + 18;
  c.textBaseline = 'alphabetic';
  c.textAlign = 'center';

  /* ---- masthead ---- */
  const mh = fitOneLine(c, f.masthead, INNER, 78, 40, '900');
  c.fillStyle = '#141210';
  c.fillText(f.masthead, W / 2, y + mh * 0.78);
  y += mh + 14;

  // double rule
  c.fillStyle = '#141210';
  c.fillRect(PAD, y, INNER, 5);
  c.fillRect(PAD, y + 9, INNER, 2);
  y += 30;

  /* ---- strap ---- */
  c.font = '600 21px ' + AD.SHARE_FONT;
  c.fillStyle = '#4a4640';
  c.textAlign = 'left';
  c.fillText(String(f.strap[0] || ''), PAD, y);
  c.textAlign = 'right';
  c.fillText(String(f.strap[1] || ''), W - PAD, y);
  y += 40;

  /* ---- headline ---- */
  c.textAlign = 'left';
  const hl = String(f.headline || '').toUpperCase();
  let hs = hl.length > 22 ? 86 : hl.length > 14 ? 104 : 122;
  c.font = '900 ' + hs + 'px ' + AD.SHARE_FONT;
  while (c.measureText(hl).width > INNER * 2.05 && hs > 52) {
    hs -= 4; c.font = '900 ' + hs + 'px ' + AD.SHARE_FONT;
  }
  c.fillStyle = f.win ? '#8d1d28' : '#141210';
  y = wrapText(c, hl, PAD, y + hs * 0.82, INNER, hs * 1.02, 3);
  y -= hs * 0.14;            // pull the deck up under the cap-height, not the descender

  /* ---- deck ---- */
  if (f.deck) {
    c.font = 'italic 600 27px ' + AD.SHARE_FONT;
    c.fillStyle = '#33302b';
    y = wrapText(c, f.deck, PAD, y + 30, INNER, 35, 3);
    y += 8;
  }

  /* ---- byline rule ---- */
  c.fillStyle = '#141210';
  c.fillRect(PAD, y + 6, INNER, 2);
  y += 34;
  c.font = '700 19px ' + AD.SHARE_FONT;
  c.fillStyle = '#5a554d';
  c.fillText(String(f.byline || '').toUpperCase(), PAD, y);
  y += 30;

  /* ---- the numbers, in a boxed grid ---- */
  const boxes = (f.boxes || []).slice(0, 6);
  const cols = 3, rows = Math.ceil(boxes.length / cols);
  const bw = INNER / cols, bh = 104;
  const gridTop = y;
  c.strokeStyle = 'rgba(20,18,16,.22)';
  c.lineWidth = 2;
  boxes.forEach((b, i) => {
    const cx = PAD + (i % cols) * bw;
    const cy = gridTop + Math.floor(i / cols) * bh;
    c.strokeRect(cx, cy, bw, bh);
    c.textAlign = 'center';
    const val = String(b.n);
    const vs = fitOneLine(c, val, bw - 22, 42, 22, '800');
    c.fillStyle = '#141210';
    c.fillText(val, cx + bw / 2, cy + 56);
    c.font = '700 15px ' + AD.SHARE_FONT;
    c.fillStyle = '#6a655c';
    c.fillText(String(b.label).toUpperCase(), cx + bw / 2, cy + 82);
  });
  y = gridTop + rows * bh + 34;

  /* ---- the story, two columns like a real front page ---- */
  const story = (f.story || []).join(' ').replace(/<[^>]+>/g, '');
  const colGap = 30, colW = (INNER - colGap) / 2;
  c.textAlign = 'left';
  c.font = '400 20px ' + AD.SHARE_FONT;
  c.fillStyle = '#26231f';
  const bottomLimit = H - PAD - 150;
  const lineH = 28;
  const perCol = Math.max(1, Math.floor((bottomLimit - y) / lineH));

  // split the story into lines once, then deal them into the two columns
  const words = story.split(/\s+/);
  const lines = [];
  let cur = '';
  words.forEach(w => {
    const test = cur ? cur + ' ' + w : w;
    if (c.measureText(test).width > colW && cur) { lines.push(cur); cur = w; }
    else cur = test;
  });
  if (cur) lines.push(cur);

  const shown = lines.slice(0, perCol * 2);
  shown.forEach((l, i) => {
    const col = i < perCol ? 0 : 1;
    const row = i - col * perCol;
    c.fillText(l, PAD + col * (colW + colGap), y + row * lineH);
  });
  if (lines.length > shown.length && shown.length) {
    // ellipsis on the last visible line, so it reads as continuing
    const li = shown.length - 1;
    const col = li < perCol ? 0 : 1, row = li - col * perCol;
    c.fillStyle = '#efe9dc';
    c.fillRect(PAD + col * (colW + colGap), y + row * lineH - 20, colW, 26);
    c.fillStyle = '#26231f';
    c.fillText(shown[li].replace(/[\s.,;:]+$/, '') + '…', PAD + col * (colW + colGap), y + row * lineH);
  }

  /* ---- verdict, boxed at the foot ---- */
  const vTop = H - PAD - 128;
  c.fillStyle = '#141210';
  c.fillRect(PAD, vTop, INNER, 3);
  c.font = 'italic 700 26px ' + AD.SHARE_FONT;
  c.fillStyle = '#141210';
  wrapText(c, String(f.verdict || ''), PAD, vTop + 42, INNER, 33, 2);

  /* ---- footer ---- */
  c.font = '800 18px ' + AD.SHARE_FONT;
  c.fillStyle = '#6a655c';
  c.textAlign = 'left';
  c.fillText('AMERICAN DICTATOR', PAD, H - PAD + 6);
  if (score && score.seed) {
    c.textAlign = 'right';
    c.fillText('SEED ' + score.seed, W - PAD, H - PAD + 6);
  }

  return cv;
};

/* Save it. Uses the native share sheet where there is one (phones), and falls
   back to a download everywhere else. */
AD.shareFrontPageImage = function (score, btn) {
  let cv;
  try { cv = AD.renderShareImage(score); }
  catch (e) { return false; }

  const name = 'american-dictator-' + (score && score.seed ? String(score.seed).toLowerCase() : 'term') + '.png';
  const say = t => { if (btn) { const old = btn.dataset.label || btn.textContent; btn.dataset.label = old; btn.textContent = t; setTimeout(() => { btn.textContent = old; }, 1900); } };

  cv.toBlob(function (blob) {
    if (!blob) { say('Could not render'); return; }
    const file = (typeof File !== 'undefined') ? new File([blob], name, { type: 'image/png' }) : null;

    // Phones: the real share sheet, if it will take a file.
    if (file && navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      navigator.share({ files: [file], title: 'American Dictator' })
        .then(() => say('Shared'))
        .catch(() => { /* user dismissed the sheet: not an error */ });
      return;
    }

    // Everywhere else: download it.
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name;
    document.body.appendChild(a); a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    say('Saved');
  }, 'image/png');
  return true;
};
