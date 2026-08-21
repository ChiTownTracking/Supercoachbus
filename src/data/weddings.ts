/**
 * Wedding content for /services/weddings.
 *
 * PROVENANCE. The facts here come from two places and are kept apart on
 * purpose:
 *
 *   1. This site's own confirmed data — fleet capacities, the on-board lists,
 *      the driver claims, the service area. Imported from `fleet.ts` and
 *      `site.ts` rather than retyped, so a capacity can never say one thing on
 *      /fleet and another here.
 *
 *   2. ChiTown Trolley's published wedding page, retrieved 2026-08-17 from
 *      https://chitowntrolley.com/weddings/. That is the owner's sister company
 *      — same 630-624-3448 — and the trolley-and-coach wedding package is a
 *      joint offer already published there, with the coach half being this
 *      fleet. Everything taken from it is marked `SISTER` below.
 *
 * WHAT WAS DELIBERATELY NOT CARRIED OVER, and why:
 *
 *   - The trolley page's copy, sentence for sentence. Two sites under one owner
 *     publishing the same paragraphs is duplicate content that costs both of
 *     them; search engines pick one and discount the other. This page is
 *     written from the coach's side of the same day — guests, hotels, the wait
 *     at the venue, the late return — where that page is written from the
 *     trolley's. Same package, opposite lens, no shared sentences.
 *
 *   - Their three wedding reviews (Maria & James, Priya & Daniel, the Delgado
 *     family). Those were given to ChiTown Trolley. Reprinting them here would
 *     put another company's social proof under this company's name. This page
 *     runs Lauren's review instead, which is this site's own and is about a
 *     wedding — see src/data/testimonials.ts.
 *
 *   - "Bluetooth audio" and "climate control" from their package inclusions.
 *     Neither is on any confirmed on-board list in src/data/fleet.ts, and this
 *     page links to that list rather than asserting fittings beside it.
 */

import { FLEET, MAX_SINGLE_VEHICLE } from './fleet';

/**
 * The sister property. Followed on purpose — no rel="nofollow" anywhere this is
 * used. Two companies under one owner linking to each other is editorial, not
 * paid placement, and the deep link to their wedding page is the one that
 * carries the meaning: it is the page that answers the half of the day this
 * fleet has no vehicle for.
 */
export const SISTER = {
  brand: 'ChiTown Trolley',
  home: 'https://chitowntrolley.com/',
  weddings: 'https://chitowntrolley.com/weddings/',
  vehicle: 'Classic White Trolley',
} as const;

/**
 * SISTER — the joint package exactly as ChiTown Trolley publishes it. Presented
 * on this page as what it is: one booking covering two vehicles from two
 * companies, not a Chicago Super Coach product with a trolley bolted on.
 *
 * See OPEN_ITEMS.weddingPackage in src/lib/placeholder.ts — the terms are the
 * sister site's current published ones and should be re-confirmed with the
 * owner before they are treated as permanent.
 */
export const PACKAGE = {
  parts: [
    {
      vehicle: SISTER.vehicle,
      operator: SISTER.brand,
      carries: 'The wedding party',
      capacity: 'Up to 30',
      unit: 'passengers',
      duration: '5 hours',
      href: SISTER.weddings,
    },
    {
      vehicle: 'Coach Bus',
      operator: 'Chicago Super Coach',
      carries: 'The guest list',
      capacity: 'Up to 50',
      unit: 'guests',
      duration: '8 hours',
      href: '/fleet/coach',
    },
  ],
  included: [
    'Unlimited scheduled stops and mileage',
    'Guest shuttle service recommended from 4:00 pm to midnight',
    'An experienced chauffeur on each of the two vehicles',
    'One timeline, coordinated across both',
  ],
} as const;

export interface Stop {
  /** The mono numeral is drawn from the index; this is the stop itself. */
  label: string;
  detail: string;
}

/** The coach's day. This company's half — and the reason most couples call. */
export const GUEST_RUN: Stop[] = [
  {
    label: 'Hotel pickup',
    detail:
      'One run, or several, from the room blocks your guests are actually staying in. Send every hotel address and we sequence them so the last pickup still reaches the venue before the ceremony.',
  },
  {
    label: 'Venue drop-off',
    detail:
      'The guest list arrives at the door together, on one schedule — not as a twenty-minute trickle of rideshares while the ceremony waits.',
  },
  {
    label: 'The coach waits on site',
    detail:
      'After the drop-off it parks at the venue and stays there until return service begins. Nobody spends the reception wondering whether a vehicle is coming back.',
  },
  {
    label: 'Venue pickup',
    detail:
      'Return service starts at the time you set. Couples often book two — one for the guests leaving early, one at the end of the night.',
  },
  {
    label: 'Hotel drop-off',
    detail:
      'Back to the same room blocks they started from. Nobody drives home from an open bar.',
  },
];

/**
 * SISTER — the trolley's day, from ChiTown Trolley's wedding page. Kept on this
 * page because the two runs are one timeline, and a couple deciding between
 * them should see both. The joint package section above carries the handoff to
 * their page; the run sheet itself stays focused on the route.
 */
export const PARTY_RUN: Stop[] = [
  {
    label: 'Getting-ready address',
    detail: 'One coordinated pickup for the couple, the wedding party or immediate family.',
  },
  {
    label: 'Ceremony',
    detail: 'The party arrives together and stays on one schedule before the doors open.',
  },
  {
    label: 'Photo stops',
    detail: 'Time built in for portraits at approved locations between the ceremony and reception.',
  },
  {
    label: 'Reception',
    detail: 'Finish at the venue, or keep the trolley on for the return.',
  },
];

const largest = FLEET.find((v) => v.seatsMax === MAX_SINGLE_VEHICLE);
const smaller = FLEET.filter((v) => v.seatsMax !== MAX_SINGLE_VEHICLE)
  .map((v) => v.capacityLabel)
  .join(', ');

export interface WeddingQuestion {
  q: string;
  a: string;
  /** Rendered as a followed link at the end of the answer. */
  link?: { label: string; href: string; external?: boolean };
}

/**
 * The questions couples actually send. Several are the same questions ChiTown
 * Trolley answers — a couple asks them of whoever is driving — but every answer
 * here is written for the coach and against this site's own confirmed data.
 */
export const WEDDING_FAQ: WeddingQuestion[] = [
  {
    q: 'How many wedding guests fit on one coach?',
    a: `The largest vehicle in this fleet is the ${largest?.capacityLabel}-passenger ${largest?.name}. Below it the fleet steps down through ${smaller}, so a small wedding party is not paying for a coach it cannot fill. Above ${MAX_SINGLE_VEHICLE} we run more than one vehicle — send the headcount with your date and we will confirm what is available.`,
    link: { label: 'See the four vehicles', href: '/fleet' },
  },
  {
    q: 'How many hours should we book?',
    a: 'It depends on the pickup schedule, the ceremony time, the photo stops, the reception and whether you want a late return. The package runs the coach for eight hours, and guest shuttle service is usually recommended from 4:00 pm to midnight. Send the timeline you built with your planner and we will price the hours it actually needs.',
  },
  {
    q: 'Can the coach wait at the venue between runs?',
    a: 'Yes — that is how a guest shuttle is normally run. The coach drops your guests, parks at the venue, and stays there until return service begins.',
  },
  {
    q: 'Our guests are staying at three different hotels.',
    a: 'Multiple pickup points on one loop, or repeat runs — whichever gets everyone there on time. Send the room-block addresses along with the ceremony time and we will build the sequence around it.',
  },
  {
    q: 'Can we book the trolley and the coach together?',
    a: 'Yes, and it is the most common wedding booking we take: the trolley for the wedding party, the coach for the guests, both coordinated around the same hotel, ceremony and reception schedule. The trolley is run by our sister company.',
    link: { label: 'Wedding trolleys at ChiTown Trolley', href: SISTER.weddings, external: true },
  },
  {
    q: 'How far ahead should we book?',
    a: 'Popular wedding-season Saturdays often fill six to twelve months out, so booking early gets you the best choice of date and time. It is still worth calling about a near date — cancellations happen, and we would rather tell you plainly than have you assume.',
  },
  {
    q: 'What happens if the reception runs late?',
    a: 'Extra time is often available when the vehicle\'s schedule allows. We confirm the extension and what it costs with you before it is added to the reservation — it does not turn up on an invoice afterwards.',
  },
  {
    q: 'Do you serve the suburbs?',
    a: 'Chicago and the surrounding suburbs, subject to date, route and vehicle availability. Send the pickup addresses and the stops you have planned and we will confirm the route before you book anything.',
  },
  {
    q: 'Can guests bring drinks aboard?',
    a: 'Tell us in advance and we will confirm what is allowed on the vehicle you are booking, and on the date. It depends on the vehicle and on everyone drinking being of legal age.',
  },
];
