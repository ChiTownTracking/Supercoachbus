/**
 * Every vehicle's own photography, keyed by slug.
 *
 * It lives here rather than on the page that first used it because `/fleet` and
 * each vehicle's own page have to show the same frames: a visitor who follows a
 * card into a detail page must not find a different bus at the other end.
 *
 * `view` captions the frame only where a vehicle has more than one, because a
 * caption is there to distinguish — under a lone photograph "Exterior" labels
 * the obvious. A slug with no entry gets the drawn capacity instead of
 * borrowing another vehicle's photograph; both callers handle that, because a
 * fifth vehicle can arrive before its pictures do.
 */
import coachExterior from '../assets/images/coach-exterior.jpg';
import coachInterior from '../assets/images/coach-interior.png';
import coachBus44 from '../assets/images/coach-bus-44.png';
import coachBus28 from '../assets/images/coach-bus-28.png';
import executiveSprinter from '../assets/images/excutive-sprinter.png';
import coachBus44Interior from '../assets/images/fleet/Coachbus 39-44/executive-coachbus-39-44-interior.avif';
import coachBus44Lit from '../assets/images/fleet/Coachbus 39-44/executive-coachbus-39-44-interior-3.avif';
import coachBus28Interior from '../assets/images/fleet/Coachbus 22-28/executive-coachbus-22-28-interior.avif';
import coachBus28Lit from '../assets/images/fleet/Coachbus 22-28/executive-coachbus-22-28-interior-3.avif';
import sprinterInterior from '../assets/images/fleet/sprinter 13-16/excutive-van-interior.png';
import sprinterDoor from '../assets/images/fleet/sprinter 13-16/excutive-van-interior-1.png';

export interface VehicleShot {
  src: ImageMetadata;
  view: string;
  alt: string;
}

/**
 * Order is exterior first, then the inside. The first two are what `/fleet`
 * shows; the rest exist for the gallery on the vehicle's own page.
 *
 * WHAT IS NOT IN HERE, AND WHY. The owner's folders hold three or four
 * alternates per vehicle and not all of them are that vehicle:
 *  - `…39-44/interior-2` shows overhead monitors and a different seat pattern
 *    from the other two 39–44 frames — a different coach, or a fitting the
 *    amenity list does not carry.
 *  - `…39-44/interior-4` is a manufacturer render, not a photograph: the
 *    windows carry a composited motion-blurred road and the vehicle is a
 *    short shuttle, not a 39–44 coach.
 *  - `…22-28/interior-2` is the right vehicle but frames a cooler stocked with
 *    bottled water and soft drinks, which reads as an amenity nobody has
 *    confirmed.
 *  - `…22-28/interior-4` has plain seats where the other three are quilted —
 *    again, a different vehicle.
 * Under the rule that a visitor must never be shown a bus they are not being
 * quoted, those four stay out until the owner says which vehicle each one is.
 */
export const SHOTS: Record<string, VehicleShot[]> = {
  supercoach: [
    { src: coachExterior, view: 'Exterior', alt: 'The Supercoach bus, luggage bays open' },
    { src: coachInterior, view: 'Interior', alt: 'Interior of the Supercoach: high back leather reclining seats down both sides of the aisle' },
  ],
  coach: [
    { src: coachBus44, view: 'Exterior', alt: 'The Coach Bus, a white full-length coach, seen from the front and side' },
    { src: coachBus44Interior, view: 'Interior', alt: 'Interior of the Coach Bus: rows of black leather high-back reclining seats down both sides of a wood-floored aisle, seatbelts fitted' },
    { src: coachBus44Lit, view: 'Interior, lit', alt: 'The Coach Bus cabin under its blue ceiling lighting, looking down the aisle to the back row' },
  ],
  'small-coach': [
    { src: coachBus28, view: 'Exterior', alt: 'The Small Coach Bus, a white short coach, seen from the front and side' },
    { src: coachBus28Interior, view: 'Interior', alt: 'Interior of the Small Coach Bus: quilted black and grey reclining seats along a wood-floored aisle' },
    { src: coachBus28Lit, view: 'Interior, lit', alt: 'The Small Coach Bus cabin under its blue ceiling lighting, quilted seats either side of the aisle' },
  ],
  'executive-sprinter': [
    { src: executiveSprinter, view: 'Exterior', alt: 'The Executive Sprinter Van, a black high-roof Mercedes-Benz Sprinter, seen from the front and side' },
    { src: sprinterInterior, view: 'Interior', alt: 'Interior of the Executive Sprinter Van: black leather seats facing a table, the side door open to the kerb' },
    { src: sprinterDoor, view: 'Side door', alt: 'The Executive Sprinter Van from its open side door: a rear bench, facing seats and a fixed table' },
  ],
};

export const shotsFor = (slug: string): VehicleShot[] => SHOTS[slug] ?? [];

/**
 * What `/fleet` shows. The listing runs four rows at one height and a third
 * frame in any of them breaks that rhythm — the gallery on the vehicle's own
 * page is where the rest of the pictures live.
 */
export const listingShotsFor = (slug: string): VehicleShot[] => shotsFor(slug).slice(0, 2);
