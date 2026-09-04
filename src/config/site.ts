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

/** GA4 measurement ID for the Google tag loaded in the shared layout head. */
export const GA_MEASUREMENT_ID = 'G-WGL6C1FNX9';

/** Microsoft Clarity project ID, loaded alongside the Google tag. */
export const CLARITY_PROJECT_ID = 'ycvelkswtc';

/**
 * Google Ads. The gtag.js loader in the layout head carries the GA4 ID, but a
 * conversion only counts if the Ads account is `config`-ed on the same tag —
 * hence both IDs, one loader. `QUOTE_CONVERSION` is the `send_to` for the
 * quote-form conversion fired on /thanks/quote — the one page reached only by
 * a quote submission Netlify has already accepted.
 */
export const GOOGLE_ADS_ID = 'AW-17907076689';
export const QUOTE_CONVERSION = 'AW-17907076689/wPQwCJq__u0cENGc4dpC';

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
    street: '330 Crossen Ave',
    city: 'Elk Grove Village',
    region: 'IL',
    postalCode: '60007',
    country: 'US',
    /** Compact wayfinding coordinate used on quote receipts and map fallback. */
    gridCoordinate: '60007',
  },

  /** Point address coordinates for the business location. */
  geo: {
    latitude: 42.021727097231,
    longitude: -87.967816250384,
  },
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=330%20Crossen%20Ave%2C%20Elk%20Grove%20Village%2C%20IL%2060007%2C%20USA',

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
  serviceReach: 'Chicago, surrounding suburbs, and out-of-state trips',
  experience: {
    summary: 'Over 15 years',
    claim: 'Trusted name in the ground transportation industry for over 15 years.',
  },
} as const;

/** Trust claims carried over from the live site. All owner-confirmed; none invented. */
export const TRUST_CLAIMS = [
  'Licensed, experienced drivers',
  'Insured professional drivers',
  'Drivers are drug tested',
  'Regularly maintained fleet',
  'Seatbelts on every seat',
] as const;

/**
 * Guides sit after Services because that is the order of the decision: what we
 * run, what we run it for, then how to plan it. They are a navigation item and
 * never an action — `Reserve now` in the masthead and `Get a quote` everywhere
 * else stay the only conversion targets, and nothing here displaces them.
 */
export const NAV = [
  { label: 'Fleet', href: '/fleet' },
  { label: 'Services', href: '/services' },
  { label: 'Guides', href: '/guides' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_NAV = [
  { label: 'Home', href: '/' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Services', href: '/services' },
  { label: 'Guides', href: '/guides' },
  { label: 'Get a Quote', href: '/#quote-form' },
  { label: 'Reserve Online', href: '/reserve' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const LEGAL_NAV = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
] as const;
