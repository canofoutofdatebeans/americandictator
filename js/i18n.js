/* ============================================================
   AMERICAN DICTATOR, i18n.js
   Localisation runtime + the English base string table.

   Loads right after state.js. Every other language is a small file
   (js/i18n/<code>.js) that assigns AD.STRINGS[code] = {...}; anything a
   translation omits falls back to English, so a partial translation is
   safe. AD.t(key, vars) looks up the current language and interpolates
   {name}-style placeholders.

   The card DECK is localised separately (see AD.cardText / the per-language
   deck files); this table is the interface: menus, screens, labels,
   buttons, the management rooms and the tutorial.
   ============================================================ */

/* The languages offered on the first screen. `native` is shown in that
   language's own script so the picker is self-explanatory. */
AD.LANGS = [
  { code: 'en-US', native: 'English (US)', flag: '🇺🇸' },
  { code: 'en-GB', native: 'English (UK)', flag: '🇬🇧' },
  { code: 'cs', native: 'Čeština',    flag: '🇨🇿' },
  { code: 'de', native: 'Deutsch',    flag: '🇩🇪' },
  { code: 'es', native: 'Español',    flag: '🇪🇸' },
  { code: 'fr', native: 'Français',   flag: '🇫🇷' },
  { code: 'it', native: 'Italiano',   flag: '🇮🇹' },
  { code: 'nl', native: 'Nederlands', flag: '🇳🇱' },
  { code: 'pl', native: 'Polski',     flag: '🇵🇱' },
  { code: 'pt', native: 'Português',  flag: '🇵🇹' },
  { code: 'ru', native: 'Русский',    flag: '🇷🇺' },
  { code: 'zh', native: '中文',        flag: '🇨🇳' }
];
AD.langMeta = code => AD.LANGS.find(l => l.code === code) || AD.LANGS[0];

AD.STRINGS = { en: {} };
AD.LANG = 'en';

/* Persisted separately from the settings blob so it is read before anything
   else and survives a settings reset. */
AD.LANG_KEY = 'americandictator.lang.v1';
AD.loadLang = function () {
  let v = AD.store ? AD.store.read(AD.LANG_KEY, null) : null;
  if (v === 'en') v = 'en-US';                                 // migrate the old single 'English'
  return (v && AD.LANGS.some(l => l.code === v)) ? v : null;   // null = not chosen yet
};
AD.setLang = function (code) {
  if (code === 'en') code = 'en-US';
  if (!AD.LANGS.some(l => l.code === code)) code = 'en-US';
  AD.LANG = code;
  if (AD.store) AD.store.write(AD.LANG_KEY, code);
};

/* The lookup. Falls back current -> English -> the key itself, then fills in
   {placeholders} from vars. Never throws on a missing key. */
AD.t = function (key, vars) {
  const table = AD.STRINGS[AD.LANG] || AD.STRINGS.en;
  let s = table[key];
  if (s == null) s = AD.STRINGS.en[key];
  if (s == null) return key;
  if (vars) s = s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? vars[k] : m));
  return s;
};

/* ---------- the English base ---------------------------------------------- */
AD.STRINGS.en = {
  /* language picker */
  'lang.title': 'Choose your language',
  'lang.sub': 'You can change this later in the Situation Room.',
  'lang.confirm': 'Continue',

  /* title screen */
  'app.title': 'American Dictator',
  'title.tagline': 'Four years. One country. How hard could it be?',
  'menu.oath': 'Take the Oath',
  'menu.newTerm': 'New Term',
  'menu.resume': 'Resume Term',
  'menu.resumeSub': 'Pres. {name} · {date}',
  'menu.library': 'Presidential Library',
  'menu.situation': 'The Situation Room',
  'menu.howto': 'How to Seize Power',
  'menu.replayTut': 'Replay the Walkthrough',
  'title.disclaimer': 'A work of satire. Every president, party, agency, court, country and crisis in this game is fictional. Any resemblance to persons living, indicted, or posting is entirely the fault of the opposition.',

  /* setup / character creation */
  'setup.h': 'Assume the Office',
  'setup.inherit': 'YOU INHERIT',
  'setup.name': 'Name of the President',
  'setup.namePh': 'Ronald J. Trumbull',
  'setup.party': 'Party',
  'setup.partyPh': 'The Patriot Party',
  'setup.colour': 'Party Colour',
  'setup.seed': 'Seed',
  'setup.seedNote': 'optional, share a run',
  'setup.seedPh': 'leave blank for random',
  'setup.difficulty': 'Difficulty',
  'setup.mods': 'Modifiers',
  'setup.modsNote': 'optional, stack any',
  'setup.back': 'Back',
  'setup.begin': 'So Help Me God',
  'diff.rookie': 'Rookie',
  'diff.standard': 'Standard',
  'diff.historic': 'Historic',
  'port.sex': 'Sex',
  'port.build': 'Size',
  'port.hair': 'Hair',
  'port.skin': 'Complexion',
  'port.tie': 'Tie',
  'port.suit': 'Suit',

  /* HUD + management chips */
  'hud.authority': 'Authority',
  'hud.pillars': 'PILLARS OF THE REGIME, CAPTURE THREE',
  'hud.boredometer': 'BOREDOMETER',
  'hud.boredometerTip': 'The Boredometer: keep the President entertained (above the floor) or he wanders off',
  'victory.country': 'The Country',
  'victory.money': 'The Money',
  'chip.constitution': 'The Constitution',
  'chip.residence': 'The Residence',
  'chip.phone': 'The Phone',
  'chip.war': 'The War Room',
  'chip.economy': 'The Economy',
  'chip.pardons': 'The Pardons',
  'meter.base': 'Base',
  'meter.congress': 'Congress',
  'meter.courts': 'Courts',
  'meter.press': 'Press',
  'meter.street': 'Street',

  /* pause / common */
  'pause.h': 'Paused',
  'pause.resume': 'Back to Governing',
  'pause.log': 'Crisis Log',
  'pause.settings': 'Settings',
  'pause.resign': 'Resign (Abandon Term)',
  'common.close': 'Close',
  'common.back': 'Back to Governing',
  'common.done': 'Done',
  'common.next': 'Next Crisis',
  'common.understood': 'Understood',
  'confirm.cancel': 'Cancel',
  'confirm.yes': 'Do It',

  /* situation room (settings) */
  'settings.h': 'The Situation Room',
  'settings.language': 'Language',
  'settings.changeLang': 'Change Language',

  /* the management rooms (overlay headers) */
  'room.bench': 'The Bench',
  'room.caucus': 'The Caucus',
  'room.pressroom': 'The Press Room',
  'room.publicorder': 'Public Order',
  'room.rally': 'The Rally',
  'room.private': 'Private Interests',
  'room.pardon': 'The Pardon Power',
  'room.constitution': 'The Constitution',
  'room.residence': 'The Residence',
  'room.phone': 'The Phone',
  'room.war': 'The War Room',
  'room.economy': 'The Economy',
  'room.log': 'Crisis Log',
  'room.library': 'Presidential Library',
  'room.howto': 'How to Seize Power',
  'room.assumeoffice': 'Assume the Office',
  'room.settings': 'Settings',
  'howplay': 'How to Play'
};

/* US and UK English differ only in spelling across the shell; both inherit the
   full base English table above and override the handful of words that change. */
AD.STRINGS['en-US'] = { 'setup.colour': 'Party Color' };
AD.STRINGS['en-GB'] = { 'setup.colour': 'Party Colour' };
