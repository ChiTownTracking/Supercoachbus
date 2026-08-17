/**
 * The fleet.
 *
 * Names and passenger counts were supplied directly by the owner on 7 Aug 2026
 * and are used exactly as given; the ranges were revised by the owner the same
 * day and these are the revised figures. This closes the open question that
 * stood through the rebuild — whether the operation ran more than one vehicle
 * size. It runs four.
 *
 * Capacities here are load-bearing: both trip forms build their headcount and
 * vehicle lists from this file (see data/formOptions.ts) and the destination
 * blade names a vehicle from the headcount using `recommendVehicle`. Do not add
 * speculative vehicles, and do not widen a range to make a headcount fit.
 *
 * WHAT IS AND IS NOT CONFIRMED HERE:
 *  - Confirmed: the four names, the four passenger ranges, and — as of
 *    16 Aug 2026 — the amenity list for all four vehicles. The owner supplied
 *    the three below the Supercoach that day; they are transcribed as given,
 *    with sentence case applied to match the list they sit beside.
 *  - Assumed, and flagged to the owner: that the Supercoach Bus is the same
 *    full-size coach the live site listed at "54–57 passengers" with the
 *    amenity list below, now renamed and re-ranged. If it is a different
 *    vehicle, those amenities and that seating plan belong somewhere else.
 *  - PART DERIVED, PART DRAWN — the `layout` entries. The owner asked for a
 *    diagram on all four vehicles on 16 Aug 2026 without supplying a row
 *    arrangement, so each plan starts from one stated rule: two-and-two across
 *    an aisle, `rows = floor(seatsMax / 4)`. Two vehicles have since been drawn
 *    by the owner and no longer follow it — the Small Coach Bus and the
 *    Executive Sprinter Van. **Say on the entry when an arrangement is real**,
 *    as those two do; the Supercoach and the Coach Bus are still the rule plus
 *    the Supercoach's lavatory.
 *
 *    Drawn totals: 54 of 50–57, 44 of 39–44, 27 of 22–28, 14 of 13–16. Every
 *    one inside its own confirmed range — that is the check to run after any
 *    change here, because every flag below moves the count. The plans are
 *    schematic and the page must keep saying so: `/fleet`'s lede promises the
 *    exact seat count at quote, and the SVG's own aria-label opens "Schematic
 *    seating plan". Do not remove either.
 */

export interface Vehicle {
  slug: string;
  name: string;
  /** Shown at display scale. This is the proof the brand actually owns. */
  capacityLabel: string;
  seatsMin: number;
  seatsMax: number;
  /** One line on what this vehicle is for, in the organizer's terms. */
  role: string;
  /**
   * The groups this vehicle actually suits, supplied by the owner on
   * 15 Aug 2026 alongside the guides brief. Editorial positioning rather than a
   * specification — it says who books this size, not what is bolted to it, so
   * it is safe to publish while `amenities` stays empty for three of the four.
   *
   * It lives here rather than in the guide that uses it because the vehicle
   * comparison has to read from one place: a capacity and its audience must
   * never be able to disagree between /fleet and a guide.
   */
  bestFor: string[];
  amenities: string[];
  /**
   * Title and description for this vehicle's own page. Written out rather than
   * generated from the fields above: four pages about four sizes of the same
   * service are exactly where a template produces four near-identical
   * descriptions, and near-identical is what a search engine discards.
   *
   * Every claim in a description has to be in `amenities` or `capacityLabel` —
   * a meta description is the one piece of copy nobody proofreads on the page
   * itself, so it is the easiest place for an unconfirmed spec to survive.
   */
  meta: { title: string; description: string };
  /**
   * Rows x seats-per-row for the plan-view seat diagram. Optional: the renderer
   * and both callers still handle its absence, because a fifth vehicle can
   * arrive before anyone works out how it is laid out.
   *
   * The three flags below are what a vehicle has, not decoration — each one
   * changes the seat count the plan draws. Set them from something the owner
   * has said about the vehicle, never from what looks right.
   *
   *  - `lavatory` puts the fixture at the rear of the curbside band, where a
   *    motorcoach carries one, and takes the two places it stands in out of the
   *    seat run. It follows the amenity: a vehicle that does not list a
   *    lavatory must not have one drawn.
   *  - `entrance` is a doorway forward on the curbside, so the frontmost places
   *    in that band are the stairwell rather than seats.
   *  - `rearBench` runs the back row across the aisle, which adds the one seat
   *    the rows ahead of it do not have.
   *
   * Curbside is the lower band: nose left, plan view, so the vehicle's right is
   * the bottom of the drawing. The lavatory and the door both belong there and
   * both derive their position from `leftPerRow` — do not hard-code a row.
   */
  layout?: {
    rows?: number;
    leftPerRow?: number;
    rightPerRow?: number;
    lavatory?: boolean;
    entrance?: boolean;
    rearBench?: boolean;
    /**
     * Places that carry no seat, as `[row, place]` pairs — both zero-indexed,
     * rows from the nose and places from the aisle-side wall. The escape hatch
     * for an arrangement the flags above do not describe. Use it only for a
     * layout the owner has actually drawn, and say on the entry what the space
     * is if you know; leaving it unnamed is better than guessing.
     */
    omit?: [number, number][];
    /**
     * The drawing, given directly: rows top to bottom and columns left to right
     * **exactly as they appear on the page**. No rule, no derivation, no
     * rotation. `aisle` is drawn as a wider gap and never as a seat; `empty` is
     * drawn as nothing.
     *
     * When this is present it is the whole plan — `rows`, `leftPerRow` and
     * every flag above are ignored for that vehicle. Reach for it when the
     * owner has drawn the arrangement, because then the drawing *is* the
     * specification and anything that re-derives it can only get it wrong.
     */
    grid?: PlanCell[][];
  };
}

/** One place in an explicit plan grid. */
export type PlanCell = 'seat' | 'aisle' | 'empty';

/** Largest first. This order is the grid order and the select order. */
export const FLEET: Vehicle[] = [
  {
    slug: 'supercoach',
    name: 'Supercoach Bus',
    capacityLabel: '50–57',
    seatsMin: 50,
    seatsMax: 57,
    role: 'Full-size motorcoach for staff shuttles, school groups, wedding guests, and stadium runs.',
    bestFor: [
      'Large school groups',
      'Sporting events',
      'Large weddings',
      'Major group outings',
    ],
    meta: {
      title: 'Supercoach Bus Rental Chicago | 50–57 Passengers',
      description:
        'The largest coach we run in Chicago: 50 to 57 passengers, high back reclining seats, a lavatory, and overhead and undercarriage luggage space.',
    },
    amenities: [
      'High back leather reclining seats',
      'Lavatory',
      'Overhead luggage space',
      'Undercarriage luggage available on request',
      'Sound system',
      'PA system for announcements on board',
      'Seatbelts on all seats',
      'USB charging port',
    ],
    layout: { rows: 14, leftPerRow: 2, rightPerRow: 2, lavatory: true },
  },
  {
    slug: 'coach',
    name: 'Coach Bus',
    capacityLabel: '39–44',
    seatsMin: 39,
    seatsMax: 44,
    role: 'A coach for a group that is past a small bus but does not fill a Supercoach.',
    bestFor: [
      'Larger corporate groups',
      'School trips',
      'Sports groups',
      'Wedding transportation',
    ],
    meta: {
      title: 'Coach Bus Rental Chicago | 39–44 Passengers',
      description:
        'A 39 to 44 passenger coach for Chicago groups past a small bus but short of a Supercoach. High back reclining seats, overhead luggage, USB charging.',
    },
    amenities: [
      'High back leather reclining seats',
      'Lavatory (upon request)',
      'Overhead luggage space',
      'Limited undercarriage and rear space',
      'Sound system',
      'PA system for announcements on board',
      'Seatbelts on all seats',
      'USB charging port',
    ],
    /**
     * No `lavatory` on the plan, unlike the Supercoach: this one is "upon
     * request", so the drawing shows the standard configuration and the
     * amenity line carries the condition. Drawing a fixture that may not be in
     * the vehicle that turns up would be the plan asserting more than the
     * amenity does.
     */
    layout: { rows: 11, leftPerRow: 2, rightPerRow: 2 },
  },
  {
    slug: 'small-coach',
    name: 'Small Coach Bus',
    capacityLabel: '22–28',
    seatsMin: 22,
    seatsMax: 28,
    role: 'A full coach at the smaller end, so a mid-size group still travels in one vehicle.',
    bestFor: [
      'Smaller school groups',
      'Wedding parties',
      'Corporate outings',
      'Medium-sized private groups',
    ],
    meta: {
      title: 'Small Coach Bus Rental Chicago | 22–28 Passengers',
      description:
        'A 22 to 28 passenger coach for Chicago groups that still want to travel in one vehicle. High back reclining seats, overhead luggage, USB charging.',
    },
    amenities: [
      'High back leather reclining seats',
      'Overhead luggage space',
      'Sound system',
      'PA system for announcements on board',
      'Seatbelts on all seats',
      'USB charging port',
    ],
    /**
     * The only arrangement the owner has actually described: a doorway forward
     * on the curbside in place of the first pair, and a back row that runs
     * across the aisle. 7 × 4, less the two at the door, plus the one in the
     * back row — 27, inside the confirmed 22–28.
     */
    layout: { rows: 7, leftPerRow: 2, rightPerRow: 2, entrance: true, rearBench: true },
  },
  {
    slug: 'executive-sprinter',
    name: 'Executive Sprinter Van',
    capacityLabel: '13–16',
    seatsMin: 13,
    seatsMax: 16,
    role: 'A van rather than a bus — the smallest vehicle we run, for a group that fits in one.',
    bestFor: [
      'Executive groups',
      'Airport transportation',
      'Small wedding parties',
      'Small private groups',
    ],
    meta: {
      title: 'Executive Sprinter Van Rental Chicago | 13–16 Passengers',
      description:
        'The smallest vehicle we run in Chicago: a 13 to 16 passenger executive Sprinter van with high back leather reclining seats and rear luggage space.',
    },
    amenities: [
      'High back leather reclining seats',
      'Rear luggage space',
      'Sound system',
      'PA system for announcements on board',
      'Seatbelts on all seats',
      'USB charging port',
    ],
    /**
     * Drawn by the owner, 16 Aug 2026, and given here exactly as drawn: four
     * rows down the page, one seat column at the left, a wide aisle, then three
     * columns at the right, with row 2 keeping only its far-right place. 14
     * seats, inside the confirmed 13–16.
     *
     * A `grid` rather than the rule-and-flags the other three use, because
     * three attempts to express this arrangement as a rule produced a plan that
     * was mirrored, then transposed, then rotated. **The rows below are the
     * rows on screen.** Do not convert them back into `rows`/`leftPerRow`, and
     * do not add a rotation.
     *
     * What the two open places are — a door, a table, luggage — was not said,
     * so the plan carries no caption for them.
     */
    layout: {
      grid: [
        ['seat', 'aisle', 'seat', 'seat', 'seat'],
        ['seat', 'aisle', 'empty', 'empty', 'seat'],
        ['seat', 'aisle', 'seat', 'seat', 'seat'],
        ['seat', 'aisle', 'seat', 'seat', 'seat'],
      ],
    },
  },
];

/** The largest headcount one vehicle can take. Derived, never hand-typed. */
export const MAX_SINGLE_VEHICLE = Math.max(...FLEET.map((v) => v.seatsMax));

/**
 * Where a vehicle lives. Every link to a vehicle goes through this — the fleet
 * grid on the homepage, the cards on `/fleet`, the comparison table in the size
 * guide — so the route is stated in one place and a rename cannot leave a dead
 * link behind in a file nobody thought to grep.
 */
export const vehicleHref = (v: Vehicle) => `/fleet/${v.slug}`;

/** The rest of the fleet, largest first, for the "other sizes" run. */
export const otherVehicles = (slug: string) => FLEET.filter((v) => v.slug !== slug);

/** Smallest first, so a fit search returns the smallest vehicle that works. */
const BY_SIZE = [...FLEET].sort((a, b) => a.seatsMax - b.seatsMax);

/**
 * Name the vehicle a headcount goes in.
 *
 * With four sizes this is a real recommendation rather than the arithmetic it
 * used to be: the smallest vehicle whose top-of-range seats the group. Two
 * honesty constraints shape the output.
 *
 * Capacities are ranges because seat counts vary by configuration, so a group
 * landing above a vehicle's *low* end fits that vehicle in some configurations
 * and not others. Rather than quietly promising the top of the range, the detail
 * line says the seat count gets confirmed. Above the largest vehicle we name no
 * vehicle at all — a convoy is an availability question, not arithmetic.
 */
export function recommendVehicle(passengers: number): {
  name: string;
  detail: string;
  slug: string | null;
} {
  if (!Number.isFinite(passengers) || passengers < 1) {
    return { name: 'Awaiting passenger count', detail: '', slug: null };
  }

  const fit = BY_SIZE.find((v) => passengers <= v.seatsMax);

  if (fit) {
    return {
      name: `${fit.capacityLabel} Passenger ${fit.name}`,
      detail:
        passengers > fit.seatsMin
          ? 'Near the top of this vehicle. We confirm the exact seat count when we quote.'
          : 'Seats your group in one vehicle.',
      slug: fit.slug,
    };
  }

  return {
    name: 'More than one vehicle',
    detail: `Above ${MAX_SINGLE_VEHICLE} passengers we will confirm availability directly.`,
    slug: null,
  };
}
