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
 * Headcounts. The list runs to the largest single vehicle in the fleet and then
 * offers one honest overflow option — it does not enumerate a convoy size nobody
 * has confirmed.
 */
export const PASSENGER_OPTIONS = [
  ...[...Array(MAX_SINGLE_VEHICLE)].map((_, i) => String(i + 1)),
  `${MAX_SINGLE_VEHICLE + 1}+`,
];

/**
 * Vehicle, asked as a preference rather than a requirement.
 *
 * With four sizes this is now a real choice, but the default stays "Not sure
 * yet" — it is the honest answer for most organizers, and it is the operator's
 * job to size the vehicle, not the visitor's. The blade states the vehicle the
 * headcount fits regardless of what is picked here, so a preference can never
 * make the page promise a bus the group does not fit in.
 */
export const VEHICLE_OPTIONS: { value: string; label: string }[] = [
  // Plain language, and short enough to survive a narrow select on a phone
  // without truncating — this is the option most people leave selected.
  { value: '', label: 'Not sure yet' },
  ...FLEET.map((v) => ({
    value: v.slug,
    label: `${v.name} (${v.capacityLabel} passengers)`,
  })),
  { value: 'more-than-one', label: `More than one vehicle (over ${MAX_SINGLE_VEHICLE})` },
];
