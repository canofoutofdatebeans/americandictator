/* ============================================================
   AMERICAN DICTATOR, icons.js
   Bespoke line icons that replace the emoji throughout the HUD.

   Monochrome, 24-unit viewBox, fill/stroke: currentColor, so each
   icon takes the colour of whatever it sits in. Kept deliberately
   simple and heraldic to match the propaganda-poster register.
   ============================================================ */

AD.ICON = {
  /* ---- the five power centres ---- */
  base:                                            // a rising flame, the movement
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2c1.6 3 .3 4.8-1 6.4C9.4 10.4 8 12 8 14.6a4 4 0 0 0 2.2 3.6c-.5-1 .1-2.3 1-3 .1 1.4.9 2 1.7 2.7 1.2 1 1 2.4.4 3.5A4.6 4.6 0 0 0 16 14.4c0-2.4-1.3-3.7-2.3-5.2C12.4 7 11.7 5 12 2Z"/></svg>',
  congress:                                        // a capitol dome on a colonnade
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><path d="M12 2c1.4 0 2.5 1 2.7 2.3H9.3C9.5 3 10.6 2 12 2Z"/><rect x="8.5" y="4.6" width="7" height="1.4"/><path d="M8 7h8c-.6-1.4-1.9-1-4-1s-3.4-.4-4 1Z"/><rect x="4" y="19.4" width="16" height="1.6" rx=".4"/><rect x="4.6" y="17.6" width="14.8" height="1.4"/><g><rect x="5.6" y="8" width="1.6" height="9"/><rect x="8.4" y="8" width="1.6" height="9"/><rect x="11.2" y="8" width="1.6" height="9"/><rect x="14" y="8" width="1.6" height="9"/><rect x="16.8" y="8" width="1.6" height="9"/></g></g></svg>',
  courts:                                          // balance scales
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M12 3v16M7 21h10M4 8h16M12 5.5 4 8m8-2.5L20 8"/><path d="M4 8 2 13a3 3 0 0 0 4 0Z"/><path d="M20 8l-2 5a3 3 0 0 0 4 0Z"/></g></svg>',
  press:                                           // a folded newspaper
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4"><rect x="3.5" y="5.5" width="13" height="13" rx="1"/><path d="M16.5 8.5H20a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H16.5" stroke-linejoin="round"/><path d="M6 8.5h5M6 11.5h5M6 14.5h5" stroke-linecap="round"/></g></svg>',
  street:                                          // a protest placard
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="6" y="3.5" width="12" height="8" rx="1"/><path d="M12 11.5V21"/><path d="M9 7.5h6M9 9h4"/></g></svg>',

  /* ---- chips ---- */
  constitution:                                    // a rolled scroll
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h11a2 2 0 0 1 2 2v12"/><path d="M6 4a2 2 0 0 0-2 2v1h4V6a2 2 0 0 0-2-2Z"/><path d="M8 7v11a2 2 0 0 0 2 2h7a2 2 0 0 1-2-2V7Z"/><path d="M10.5 10.5h4M10.5 13h4"/></g></svg>',
  residence:                                       // a porticoed building
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="currentColor"><path d="M12 3 3 8h18Z"/><rect x="4" y="19" width="16" height="1.6" rx=".3"/><rect x="5.4" y="9.5" width="1.5" height="9"/><rect x="8.4" y="9.5" width="1.5" height="9"/><rect x="11.3" y="9.5" width="1.5" height="9"/><rect x="14.2" y="9.5" width="1.5" height="9"/><rect x="17.1" y="9.5" width="1.5" height="9"/></g></svg>',
  phone:                                           // a classic handset
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 3.3c.6-.3 1.3-.1 1.6.5l1.3 2.5c.3.6.2 1.3-.3 1.7l-1 .9c.9 1.9 2.5 3.5 4.4 4.4l.9-1c.4-.5 1.1-.6 1.7-.3l2.5 1.3c.6.3.8 1 .5 1.6l-1 2c-.3.6-1 .9-1.6.8C9.7 20.6 3.4 14.3 3.7 6.9c0-.7.3-1.3.9-1.6Z"/></svg>',
  war:                                             // crossed sabres
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M4 4l10 10M20 4L10 14"/><path d="M13 15l-2 2 1.5 1.5M11 15l2 2-1.5 1.5"/><path d="M5 6 4 4l2 1M19 6l1-2-2 1"/></g></svg>',
  economy:                                         // a chart with a turning trend
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16"/><path d="M4 20V4"/><path d="M7 16l4-4 3 2 4-6"/><path d="M18 12h-2m2 0v2"/></g></svg>',
  wealth:                                          // a stack of notes and a coin, the private purse
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><rect x="2.5" y="8.5" width="14" height="9" rx="1.5"/><circle cx="9.5" cy="13" r="2.2"/><path d="M6 6.5h13a2 2 0 0 1 2 2v7" stroke-linecap="round"/></g></svg>',
  pardon:                                          // a sealed scroll / clemency writ
    '<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10v13a3 3 0 0 1-3 3H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M9 8h6M9 11h6M9 14h3"/></g><circle cx="16.5" cy="18" r="2.4" fill="currentColor"/></svg>'
};

AD.icon = k => AD.ICON[k] || '';
