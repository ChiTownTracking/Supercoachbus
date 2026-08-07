/**
 * URL migration map for the rebuild.
 *
 * This domain has years of indexed URLs, rankings and backlinks. Every old path
 * resolves to its closest new equivalent with a 301 so that link equity
 * transfers instead of evaporating into 404s.
 *
 * `oldMeta` records the title and description that were ranking, verbatim from
 * the live site on 2026-08-04. New pages preserve or deliberately improve them —
 * they are never written from a blank slate.
 *
 * This file is the single source for astro.config.mjs, public/_redirects, and
 * REDIRECTS.md. Edit here, not in the generated artifacts.
 */

export interface RedirectRule {
  from: string;
  to: string;
  /** Why this mapping and not another. */
  rationale: string;
  oldMeta?: { title: string; description: string };
}

export const REDIRECTS: RedirectRule[] = [
  {
    from: '/shuttle-bus-fleet',
    to: '/fleet',
    rationale: 'Direct equivalent. Highest-value page after home — carries the vehicle keywords.',
    oldMeta: {
      title: 'Charter Coach, Shuttle Bus Rentals Chicago | Fleet',
      description:
        'Charter bus Chicago - providing the best shuttle bus services in Chicago. Affordable group transportation services.',
    },
  },
  {
    from: '/shuttle-bus-services',
    to: '/services',
    rationale: 'Direct equivalent. The five service sub-pages hang off this hub.',
    oldMeta: {
      title: 'Chicago Group Transportation | Services',
      description:
        'Our luxury shuttle buses provide an affordable solution to any and all of your group transportation needs. Our coach buses are perfect for corporate transportation, weddings, youth group field trips, sporting events and more.',
    },
  },
  {
    from: '/about-our-charter-bus-company',
    to: '/about',
    rationale: 'Direct equivalent.',
    oldMeta: {
      title: 'Charter Coach Bus Rental Services | About Us',
      description:
        'Chicago Super Coach provides affordable shuttle bus services in Chicago Illinois. Our state-of-the-art charter buses are perfect for any of your group transportation needs.',
    },
  },
  {
    from: '/contact-us',
    to: '/contact',
    rationale: 'Direct equivalent.',
    oldMeta: {
      title: 'Super Coach Chicago | Contact Us',
      description:
        'Best shuttle bus service in Chicago - Coach Bus Rental Company. For a free quote on affordable group transportation services call us at 630-624-3448.',
    },
  },
  {
    from: '/reserve-quote',
    to: '/reserve',
    rationale:
      'The old page was a hub linking to both a quote form and a reservation form. Reservation is now the only one of the two with its own page — the quote form moved onto the homepage — so this lands on the surviving named page, with the quote form one nav click away. Retargeted from /quote when that page was retired; a 301 chain would dilute what this rule is here to preserve.',
    oldMeta: {
      title: 'Chicago Super Coach Bus Rentals | Quotes & Reservations',
      description:
        'Quotes & Reservations: Coach bus rental services in Chicago for shuttle services and other group transportation services 630-624-3448.',
    },
  },
  {
    from: '/online-quote',
    to: '/#quote-form',
    rationale:
      'Quote intent, and the quote form now lives on the homepage. Landing on the form itself is a closer content match than any other page — retargeting here rather than chaining through the retired /quote.',
    oldMeta: {
      title: 'Chicago Coach Bus Rentals | Shuttle Bus Services | Quote',
      description:
        'Get a quote for a coach bus rental in Chicago for shuttle services and other group transportation services or get a free quote by calling 630-624-3448.',
    },
  },
  {
    from: '/quote',
    to: '/#quote-form',
    rationale:
      'Retired at the owner\'s direction: the twelve-field quote form now sits under the hero on the homepage, so a separate page asked the same questions twice. This rule is not a legacy-site mapping — it exists because /quote shipped in this rebuild and may already be linked or bookmarked. Keep it indefinitely.',
  },
  {
    from: '/online-reservation',
    to: '/reserve',
    rationale: 'Direct equivalent.',
    oldMeta: {
      title: 'Chicago Coach Bus Rentals | Shuttle Bus Services | Reserve',
      description:
        'Reserve a coach bus rental in Chicago for shuttle services and other group transportation services by calling 630-624-3448 or by filling out our online reservation form.',
    },
  },
  {
    from: '/corporate-charter-shuttle-transportation-service',
    to: '/services/corporate',
    rationale:
      'Existing standalone service page gains a dedicated equivalent rather than being folded into the hub, preserving its own ranking.',
    oldMeta: {
      title: 'Chicago Group Transportation | Services',
      description:
        'Our luxury shuttle buses provide an affordable solution to any and all of your group transportation needs. Our coach buses are perfect for corporate transportation, weddings, youth group field trips, sporting events and more.',
    },
  },
  {
    from: '/school-shuttle-student-group-transportation',
    to: '/services/school',
    rationale:
      'Existing standalone service page gains a dedicated equivalent. Note: the old page shared a duplicate meta title/description with two other pages — the rebuild gives each service its own, which should improve rather than preserve.',
    oldMeta: {
      title: 'Chicago Group Transportation | Services',
      description:
        'Our luxury shuttle buses provide an affordable solution to any and all of your group transportation needs. Our coach buses are perfect for corporate transportation, weddings, youth group field trips, sporting events and more.',
    },
  },
  {
    from: '/terms-and-conditions',
    to: '/terms',
    rationale: 'Shorter canonical path. Legal content carried over with entity names corrected.',
  },
];

/**
 * The old site put three of its five services on anchors of one page rather than
 * on their own URLs. A server 301 cannot see a fragment, so these are resolved
 * client-side on /services — see src/pages/services/index.astro.
 */
export const HASH_REDIRECTS: Record<string, string> = {
  ChicagoSportingEventCharterServices: '/services/sporting-events',
  WeddingTransportationServices: '/services/weddings',
  YouthGroupTransportation: '/services/youth-groups',
};

/** Paths whose URL is unchanged but whose content was rebuilt. */
export const UNCHANGED_PATHS = ['/', '/privacy-policy'];
