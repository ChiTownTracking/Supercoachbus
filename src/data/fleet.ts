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
 *  - Confirmed: the four names and the four passenger ranges.
 *  - Assumed, and flagged to the owner: that the Supercoach Bus is the same
 *    full-size coach the live site listed at "54–57 passengers" with the
 *    amenity list below, now renamed and re-ranged. If it is a different
 *    vehicle, those amenities and that seating plan belong somewhere else.
 *  - Not supplied, and therefore absent rather than invented: amenities, seat
 *    arrangements and photography for the other three vehicles. `amenities` is
 *    empty and `layout` is undefined for those, and every surface that renders
 *    them omits the block rather than filling it. See OPEN_ITEMS in
 *    lib/placeholder.ts.
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
  amenities: string[];
  /**
   * Rows x seats-per-row for the plan-view seat diagram. Optional: a schematic
   * drawn from a capacity we were given but a row arrangement we were not would
   * be an invented specification, so a vehicle without a known arrangement
   * simply has no plan.
   */
  layout?: { rows: number; leftPerRow: number; rightPerRow: number };
}

/** Largest first. This order is the grid order and the select order. */
export const FLEET: Vehicle[] = [
  {
    slug: 'supercoach',
    name: 'Supercoach Bus',
    capacityLabel: '50–57',
    seatsMin: 50,
    seatsMax: 57,
    role: 'Full-size motorcoach for staff shuttles, school groups, wedding guests, and stadium runs.',
    amenities: [
      'High back leather reclining seats',
      'Laminate wood floors',
      'Overhead luggage space',
      'Undercarriage luggage available on request',
      'Premium sound system',
      'TV / DVD / CD player / iPod connections',
      'Seatbelts on all seats',
      'USB charging port at every seat',
    ],
    layout: { rows: 14, leftPerRow: 2, rightPerRow: 2 },
  },
  {
    slug: 'coach',
    name: 'Coach Bus',
    capacityLabel: '39–44',
    seatsMin: 39,
    seatsMax: 44,
    role: 'A coach for a group that is past a small bus but does not fill a Supercoach.',
    amenities: [],
  },
  {
    slug: 'small-coach',
    name: 'Small Coach Bus',
    capacityLabel: '22–28',
    seatsMin: 22,
    seatsMax: 28,
    role: 'A full coach at the smaller end, so a mid-size group still travels in one vehicle.',
    amenities: [],
  },
  {
    slug: 'executive-sprinter',
    name: 'Executive Sprinter Van',
    capacityLabel: '13–16',
    seatsMin: 13,
    seatsMax: 16,
    role: 'A van rather than a bus — the smallest vehicle we run, for a group that fits in one.',
    amenities: [],
  },
];

/** The largest headcount one vehicle can take. Derived, never hand-typed. */
export const MAX_SINGLE_VEHICLE = Math.max(...FLEET.map((v) => v.seatsMax));

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
