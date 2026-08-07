/**
 * Single source of truth for confirmed business facts.
 *
 * Every fact here was verified against the live site and confirmed by the owner.
 * Nothing in this file is invented. If a value is not confirmed, it belongs in
 * `src/lib/placeholder.ts` as a tracked TODO, not here as a plausible guess.
 */

/**
 * Canonical origin. Confirmed: chicagosupercoachbus.com keeps the ranking
 * equity, so it stays canonical even though the contact email is on
 * chicagosupercoach.com. Changing domains later is a one-line change here.
 */
export const SITE_ORIGIN = 'https://www.chicagosupercoachbus.com';

export const BUSINESS = {
  name: 'Chicago Super Coach',
  legalName: 'Chicago Super Coach',

  phone: {
    display: '630-624-3448',
    /** E.164, for tel: links and schema. */
    href: 'tel:+16306243448',
    e164: '+1-630-624-3448',
  },

  email: 'info@chicagosupercoach.com',

  address: {
    street: '3717 W. Montrose Avenue',
    city: 'Chicago',
    region: 'IL',
    postalCode: '60618',
    country: 'US',
    /** Grid coordinate for W. Montrose Ave in Chicago's numbered street system. */
    gridCoordinate: '4400 N',
  },

  /** From the existing Google Business Profile listing — preserve on migration. */
  geo: {
    latitude: 41.9609337,
    longitude: -87.7234321,
  },
  googleMapsUrl:
    'https://www.google.com/maps/place/Chicago+Super+Coach/@41.9609337,-87.7234321,17z/',

  /**
   * Resolved conflict: the old site claimed "24 hours a day" on About while
   * every footer said 9-5. Both are true of different things — the office is
   * staffed 9-5, the buses run whenever the charter runs. Stated together so
   * neither claim is a lie.
   */
  hours: {
    officeDays: 'Mon – Sun',
    officeTime: '9:00 am – 5:00 pm',
    officeSummary: 'Mon – Sun, 9:00 am – 5:00 pm',
    /** ISO-ish for schema.org openingHours. Office hours only — charters are not "opening hours". */
    schemaOpens: '09:00',
    schemaCloses: '17:00',
    charterNote: 'Charters operate 24/7',
  },

  serviceArea: 'Chicago and surrounding suburbs',
} as const;

/** Trust claims carried over from the live site. All owner-confirmed; none invented. */
export const TRUST_CLAIMS = [
  'Licensed, experienced drivers',
  'Insured professional drivers',
  'Drivers are drug tested',
  'Regularly maintained fleet',
  'Seatbelts on every seat',
] as const;

export const NAV = [
  { label: 'Fleet', href: '/fleet' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Services', href: '/services' },
  { label: 'Get a Quote', href: '/#quote-form' },
  { label: 'Reserve Online', href: '/reserve' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
] as const;
