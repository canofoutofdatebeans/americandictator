/* ============================================================
   AMERICAN DICTATOR, i18n/cards.js
   The DECK translation layer.

   The interface is translated inline (see i18n.js); the deck is far too
   large to ship for every language at once, so each language's card
   translations live in their own file (js/i18n/cards-<code>.js) that is
   LAZY-LOADED the moment that language is chosen. A card translation is
   keyed by the card id and kept compact:
       AD.CARDT.es['a-honeymoon-1'] = { t: title, x: text, c: [[label,res], ...] }
   Anything missing, a card, a field, a whole language, falls straight
   back to the English written on the card, so a partial translation is
   always safe and the game never shows a blank.
   ============================================================ */

AD.CARDT = {};                       // code -> { cardId -> {t, x, c:[[l,r]...]} }
AD._cardLangLoaded = { en: true };   // load state per language code

/* Which languages have a FULL card-deck translation (not just the UI shell).
   The language picker only offers these, plus English, so a player never
   lands in a language that quietly falls back to English mid-crisis.
   Update this list as each language's cards-<code>.js reaches full coverage. */
AD.CARD_DECK_COMPLETE = ['es', 'fr', 'cs', 'it', 'de'];

/* US/UK English share the English source; everything else has its own file. */
AD.cardLangCode = function () {
  const l = AD.LANG || 'en';
  return (l === 'en' || l === 'en-US' || l === 'en-GB') ? 'en' : l;
};

/* The one lookup. field is 'title' | 'text' | 'label' | 'res'; i is the choice
   index for label/res. Always returns a string, English if nothing better.

   A handful of cards are built at runtime with a VOLATILE display id, a
   procedurally generated senator, an executive order carrying a random suffix,
   so their id can never match a translation entry. Such a card carries a stable
   `tkey` naming the fixed template to translate, plus `tvars`, the proper nouns
   (names, states) spliced into {placeholders} in the translated string. The
   English render path is untouched: it returns the card's own already-concrete
   field, so only the localized path does the key swap and the interpolation. */
AD.ct = function (card, field, i) {
  const en = field === 'title' ? card.title
           : field === 'text'  ? card.text
           : field === 'label' ? ((card.choices || [])[i] || {}).label
           :                      ((card.choices || [])[i] || {}).res;
  const code = AD.cardLangCode();
  if (code === 'en' || !card) return en;
  const key = card.tkey || card.id;
  if (!key) return en;
  const t = (AD.CARDT[code] || {})[key];
  if (!t) return en;
  let s;
  if (field === 'title')      s = t.t || en;
  else if (field === 'text')  s = t.x || en;
  else { const cc = t.c && t.c[i]; if (!cc) return en; s = (field === 'label' ? cc[0] : cc[1]) || en; }
  if (s && card.tvars) s = s.replace(/\{(\w+)\}/g, (m, k) => (card.tvars[k] != null ? card.tvars[k] : m));
  return s;
};

/* Pull in a language's card file once, then run the callback. Injecting a plain
   <script> keeps this build-step-free; a failure just leaves the English in. */
AD.loadCardLang = function (code, cb) {
  code = code || AD.cardLangCode();
  if (code === 'en' || AD._cardLangLoaded[code] === true) { if (cb) cb(); return; }
  if (AD._cardLangLoaded[code] === 'loading') { if (cb) cb(); return; }
  AD._cardLangLoaded[code] = 'loading';
  const s = document.createElement('script');
  s.src = 'js/i18n/cards-' + code + '.js?v=' + (AD.BUILD || '0');
  s.onload = function () { AD._cardLangLoaded[code] = true; if (cb) cb(); };
  s.onerror = function () { AD._cardLangLoaded[code] = 'error'; if (cb) cb(); };
  document.head.appendChild(s);
};
