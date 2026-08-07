/**
 * The fleet. Verified against the live site's /shuttle-bus-fleet page and
 * confirmed current by the owner.
 *
 * Capacities here are load-bearing: the quote form recommends a vehicle from
 * the passenger count using these numbers. Do not add speculative vehicles.
 *
 * This is a coach-bus-only operation. The 13 passenger Sprinter that used to sit
 * here was removed at the owner's direction. OPEN QUESTION: whether the real
 * fleet runs more than one coach size — if it does, the extra entries belong
 * here. Until that is answered, one vehicle is the honest answer and no second
 * option is invented to balance a layout.
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
  /** Rows x seats-per-row for the plan-view seat diagram. */
  layout: { rows: number; leftPerRow: number; rightPerRow: number };
}

export const FLEET: Vehicle[] = [
  {
    slug: 'executive-coach',
    name: 'Executive Coach Bus',
    capacityLabel: '54–57',
    seatsMin: 54,
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
];

export const MAX_SINGLE_VEHICLE = 57;

/**
 * Work out how the headcount is carried. With a single coach in the fleet this
 * is arithmetic, not a recommendation: one coach up to 57, and above that we say
 * we will confirm rather than implying a fleet size nobody has confirmed.
 */
export function recommendVehicle(passengers: number): {
  name: string;
  detail: string;
  slug: string | null;
} {
  if (!Number.isFinite(passengers) || passengers < 1) {
    return { name: 'Awaiting passenger count', detail: '', slug: null };
  }
  if (passengers <= MAX_SINGLE_VEHICLE) {
    return {
      name: '54–57 Passenger Executive Coach',
      detail: 'Seats your group in one vehicle.',
      slug: 'executive-coach',
    };
  }
  return {
    name: 'More than one coach',
    detail: `Above ${MAX_SINGLE_VEHICLE} passengers we will confirm availability directly.`,
    slug: null,
  };
}
