/**
 * The option lists every trip form asks from.
 *
 * They live here rather than inside a component because the homepage quote form
 * and the /quote and /reserve forms must ask identical questions with identical
 * values — two copies of an option list is two lists that drift, and the
 * operator's inbox is the thing that pays for it.
 *
 * The event types and the lengths of service were carried over verbatim from the
 * old site's quote form at migration; both have since been replaced with the
 * shorter lists the operator gave, which are the categories actually sorted by.
 */

import { FLEET } from './fleet';

/**
 * The services sold, not an inventory of occasions. The old list ran nineteen
 * celebrations — Sweet 16 through Quinceañera — which sorted the inbox by party
 * rather than by the kind of work the trip is. Anything not named here is a
 * general charter, and the notes field says what it is for.
 */
export const EVENT_TYPES = [
  'General Charter',
  'Airport',
  'Corporate Transportation',
  'Out of State Trips',
  'School Shuttle',
  'Concerts / Sporting Events',
  'Wedding Guest Shuttle',
];

/**
 * The one answer that is not a block of hours, and the only one the forms ask a
 * follow-up for: an out-of-state trip is quoted in days, so picking it reveals a
 * day count. Both forms tag this option rather than repeating the string, so the
 * reveal cannot drift from the label.
 */
export const OUT_OF_STATE = 'Out of State Trip';

/**
 * Length of service, as the operator actually sells it: the three common
 * charter blocks, led by the one shape that is not measured in hours at all.
 * Out-of-state sits first because it changes the whole quote rather than a line
 * of it, and it is the answer the office most needs early.
 */
export const HOURS = [OUT_OF_STATE, '3 Hours', '5 Hours', '8 Hours'];

/**
 * Headcounts, as the fleet's own capacity bands rather than a run of every
 * number from one. A charter is sold by the vehicle a group fits in, so the
 * bands are the four `capacityLabel`s read small to large — they cannot drift
 * from data/fleet.ts, and a re-ranged vehicle re-ranges this list with it.
 *
 * The top band carries the `+`: above the largest vehicle the answer is more
 * than one vehicle, which is an availability question rather than a headcount.
 * A group between two bands — or under the smallest — picks the band above it,
 * which is the vehicle that would carry them anyway.
 */
export const PASSENGER_OPTIONS = [...FLEET]
  .reverse()
  .map((v, i, all) => (i === all.length - 1 ? `${v.capacityLabel}+` : v.capacityLabel));

/**
 * Vehicle, asked as a preference rather than a requirement.
 *
 * With four sizes this is a real choice, but it opens unanswered — the empty
 * placeholder, not a vehicle. A select that arrives with the first option
 * already chosen submits a preference nobody stated, and the operator cannot
 * tell it apart from one that was. The blade states the vehicle the headcount
 * fits regardless of what is picked here, so a preference can never make the
 * page promise a bus the group does not fit in.
 *
 * The last three are hand-written rather than read from FLEET: they are things
 * to ask for, not vehicles this site publishes a page, a capacity and a seating
 * plan for. Adding them to data/fleet.ts would put three unsourced specs on
 * /fleet — see the standing rule at the top of that file. The trolley is the
 * sister company's; see the `sister` note on the weddings service.
 */
export const VEHICLE_OPTIONS: { value: string; label: string }[] = [
  { value: '', label: 'Select' },
  ...FLEET.map((v) => ({
    value: v.slug,
    label: `${v.name} (${v.capacityLabel} passengers)`,
  })),
  { value: 'party-bus', label: 'Party Bus (45 passengers)' },
  { value: 'trolley', label: 'Trolley (30 passengers)' },
  { value: 'wedding-package', label: 'Wedding Package (trolley and coach bus)' },
];
