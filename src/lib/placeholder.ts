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
  // fleet.photo.sprinter — REMOVED along with the Sprinter itself. This is a
  // coach-bus-only operation.
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
  credentials: todo(
    'about.credentials',
    'fact',
    'USDOT / MC number and insurance coverage',
    'School and corporate procurement often require these. Supply the numbers and they become a real trust block.'
  ),
} as const;
