/**
 * Placeholder detection.
 *
 * The rule this enforces: unconfirmed facts never ship looking like confirmed
 * facts. Anything the owner has not supplied is registered here, rendered with
 * a visible marker in dev, and printed as a build-time manifest so nothing
 * quietly goes live as invented copy.
 *
 * NOTE: the brief asked for "the same placeholder-detection pattern as the
 * ChiTown Trolley site". That codebase was not available in this session, so
 * this is an independent implementation of the same intent. Reconcile the two
 * if the sites should share the pattern verbatim.
 */

export type PlaceholderKind =
  /** Copy we cannot write because the fact is unconfirmed. */
  | 'fact'
  /** An image slot with no real asset yet. */
  | 'asset'
  /** A destination (form handler, profile URL) not yet wired. */
  | 'endpoint';

export interface Placeholder {
  readonly __placeholder: true;
  readonly id: string;
  readonly kind: PlaceholderKind;
  /** What the visitor would see here once it is real. */
  readonly label: string;
  /** What is needed, and from whom, to resolve it. */
  readonly needed: string;
}

const registry = new Map<string, Placeholder>();

export function todo(
  id: string,
  kind: PlaceholderKind,
  label: string,
  needed: string
): Placeholder {
  const entry: Placeholder = { __placeholder: true, id, kind, label, needed };
  registry.set(id, entry);
  return entry;
}

export function isPlaceholder(value: unknown): value is Placeholder {
  return typeof value === 'object' && value !== null && '__placeholder' in value;
}

export function allPlaceholders(): Placeholder[] {
  return [...registry.values()].sort((a, b) => a.id.localeCompare(b.id));
}

/**
 * Every unresolved item, declared up front so the manifest is complete even for
 * pages that were not rendered in a given build.
 */
export const OPEN_ITEMS = {
  // fleet.photo.coach — RESOLVED. Exterior and interior photography of the
  // actual coach was recovered from the live site's own CDN and now ships in
  // src/assets/images/. Still worth reshooting at higher resolution when
  // convenient, but no longer an unresolved item.
  //
  // fleet.sizes — RESOLVED 7 Aug 2026. The owner supplied all four vehicles and
  // their passenger counts; they are in src/data/fleet.ts exactly as given.
  //
  // fleet.photos — RESOLVED. The owner supplied coach-bus-44.png,
  // coach-bus-28.png and excutive-sprinter.png; all four vehicles now carry
  // their own exterior in the fleet grid and on /fleet. The drawn-capacity
  // fallback stays in both, because a fifth vehicle can arrive before its
  // photograph does. Interiors still exist only for the Supercoach.
  //
  // The one below is why three of the four /fleet entries carry no "On board"
  // list. It ships no visible marker, because it ships nothing at all — an
  // absent block is honest, an invented one is not, and a hatched box on a live
  // page is neither. It is declared here so the manifest still asks for it.
  fleetSpecs: todo(
    'fleet.specs',
    'fact',
    'On-board specification for the three vehicles below the Supercoach',
    'Seating, luggage, power and entertainment for the Coach Bus, Small Coach Bus and Executive Sprinter Van, plus confirmation that the Supercoach Bus is the coach the old site listed at 54–57 with the amenity list now attached to it.'
  ),
  // brand.logo — RESOLVED. The owner supplied src/assets/images/logo.png, now
  // used in the header and footer. A vector version would still be preferable
  // for very large renderings, but the raster is sufficient at every size the
  // site uses it and is no longer an unresolved item.
  quoteEndpoint: todo(
    'form.quote.endpoint',
    'endpoint',
    'Quote form submission handler',
    'Where quote requests should be delivered — email inbox, CRM, or form service endpoint.'
  ),
  reserveEndpoint: todo(
    'form.reserve.endpoint',
    'endpoint',
    'Reservation form submission handler',
    'Where reservation requests should be delivered, and whether they route differently from quotes.'
  ),
  contactEndpoint: todo(
    'form.contact.endpoint',
    'endpoint',
    'Contact form submission handler',
    'Where general contact messages should be delivered.'
  ),
  yearsInBusiness: todo(
    'about.years',
    'fact',
    'Years in operation',
    'The old site said "thousands of people" with no verifiable number. Supply a real founding year or the claim stays off the site.'
  ),
  /**
   * The guide photographs. Two of the three are licensed stock standing in for
   * the operator's own work, which is a different kind of open item from the
   * rest of this registry: nothing on the page is *wrong*, so nothing is marked
   * on the page. It is declared here so the build keeps asking, because a
   * stock photograph of somebody else's wedding is not this company's proof —
   * and this build's whole argument is that the proof is its own.
   * Provenance for each is recorded on the entry in src/data/guides.ts.
   */
  guidePhotos: todo(
    'guides.photos',
    'asset',
    'Owned photography for the guide articles',
    'The cost and booking guides run licensed Pexels stock (Chicago traffic; wedding guests). The size guide already runs the operator\'s own coach interior. Supply real photographs — a coach on a Chicago street, a group boarding — and all three become owned images.'
  ),
  credentials: todo(
    'about.credentials',
    'fact',
    'USDOT / MC number and insurance coverage',
    'School and corporate procurement often require these. Supply the numbers and they become a real trust block.'
  ),
} as const;
