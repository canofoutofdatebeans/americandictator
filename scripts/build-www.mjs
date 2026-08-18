/* Copy the playable game into www/ for Capacitor.
   The game has no build step — this is a copy, not a bundle. Node 18+, no deps.

   Also strips the ?v=N cache-busting query from asset URLs: it exists for the
   dev server and is meaningless (and slightly wasteful) inside a native bundle. */
import { mkdir, rm, cp, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

// fileURLToPath, not URL.pathname — on Windows the latter yields "/G:/My%20Drive/..."
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WWW  = path.join(ROOT, 'www');

const COPY = ['index.html', 'css', 'js', 'manifest.json', 'icon.svg', 'Music'];

async function main () {
  await rm(WWW, { recursive: true, force: true });
  await mkdir(WWW, { recursive: true });

  for (const item of COPY) {
    const from = path.join(ROOT, item);
    if (!existsSync(from)) {
      console.error('missing:', item);
      process.exitCode = 1;
      return;
    }
    await cp(from, path.join(WWW, item), { recursive: true });
  }

  // strip dev cache-busting from the bundled copy
  const idx = path.join(WWW, 'index.html');
  const html = (await readFile(idx, 'utf8')).replace(/\?v=\d+/g, '');
  await writeFile(idx, html, 'utf8');

  const count = html.match(/<script src=/g)?.length ?? 0;
  console.log(`www/ built — ${COPY.join(', ')} copied, ${count} scripts, cache-busting stripped`);
}

main();
