/** Canonical internal destinations; the quote form lives on the homepage. */
export const TRANSPORT_LINKS = {
  ohare: '/services/ohare-airport',
  midway: '/services/midway-airport',
  hotels: '/services/hotel-transportation',
  conventions: '/services/convention-transportation',
  wrigleyville: '/service-areas/wrigleyville',
  rosemont: '/service-areas/rosemont',
  sports: '/services/sporting-events',
  fleet: '/fleet',
  quote: '/#quote-form',
} as const;

/** Official operator/venue references, checked when adding these pages. */
export const OFFICIAL_LINKS = {
  ohare: 'https://www.flychicago.com/ohare/Pages/default.aspx',
  midway: 'https://www.flychicago.com/midway/Pages/default.aspx',
  mccormick: 'https://www.mccormickplace.com/',
  wrigley: 'https://www.mlb.com/cubs/ballpark',
  rosemontConvention: 'https://rosemont.com/desconvention/',
} as const;

export const LOCATION_LINKS: Record<string, string> = {
  Wrigleyville: TRANSPORT_LINKS.wrigleyville,
  Rosemont: TRANSPORT_LINKS.rosemont,
  "O'Hare": TRANSPORT_LINKS.ohare,
  "O'Hare Area": TRANSPORT_LINKS.ohare,
  Midway: TRANSPORT_LINKS.midway,
  'Midway Area': TRANSPORT_LINKS.midway,
};
