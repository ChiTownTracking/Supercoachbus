/**
 * The option lists every trip form asks from.
 *
 * They live here rather than inside a component because the homepage quote form
 * and the /quote and /reserve forms must ask identical questions with identical
 * values — two copies of an option list is two lists that drift, and the
 * operator's inbox is the thing that pays for it.
 *
 * The event types and the hours ceiling are carried over verbatim from the old
 * site's quote form so the categories the owner already sorts by keep arriving
 * unchanged after the migration.
 */

import { FLEET, MAX_SINGLE_VEHICLE } from './fleet';

export const EVENT_TYPES = [
  'Airport',
  'Anniversary',
  'Bachelor Party',
  'Bachelorette Party',
  'Birthday Party',
  'Tour',
  'Concert',
  'Corporate',
  'Corporate Holiday Party',
  'Cruise',
  'Dinner',
  'Homecoming',
  'Prom',
  'Quinceañera',
  'School Function',
  'Sporting Event',
  'Sweet 16',
  'Wedding',
  'Other',
];

/** Hours of service. 12+ is the ceiling the old form used. */
export const HOURS = [...Array(12)].map((_, i) => (i === 11 ? '12+' : String(i + 1)));

/**
 * Headcounts. The list runs to the real single-coach ceiling and then offers one
 * honest overflow option — it does not enumerate a fleet size nobody has
 * confirmed. See the open question at the top of data/fleet.ts.
 */
export const PASSENGER_OPTIONS = [
  ...[...Array(MAX_SINGLE_VEHICLE)].map((_, i) => String(i + 1)),
  `${MAX_SINGLE_VEHICLE + 1}+`,
];

/**
 * Vehicle, asked as a preference rather than a requirement.
 *
 * The fleet is one coach, so this cannot be a real choice between vehicles — the
 * default is deliberately "recommend one", which is the answer most groups
 * actually have. What the field is worth capturing for is the difference between
 * an organizer who has already decided and one who has not; the blade still
 * states the vehicle from the headcount either way.
 */
export const VEHICLE_OPTIONS: { value: string; label: string }[] = [
  // Plain language, and short enough to survive a narrow select on a phone
  // without truncating — this is the option most people leave selected.
  { value: '', label: 'Not sure yet' },
  ...FLEET.map((v) => ({
    value: v.slug,
    label: `${v.name} (${v.capacityLabel} passengers)`,
  })),
  { value: 'more-than-one', label: `More than one coach (over ${MAX_SINGLE_VEHICLE})` },
];
