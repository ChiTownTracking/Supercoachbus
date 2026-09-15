/** Payment terms supplied by the owner; shared by every booking entry point. */
export const BOOKING_POLICY = {
  depositAmount: 100,
  balanceDaysBeforeTrip: 7,
} as const;

/** Astro's file-format build exposes .html paths; requests use canonical URLs. */
export function quoteSourcePath(pathname: string): string {
  return pathname.replace(/\/index(?:\.html)?$/, '/').replace(/\.html$/, '').replace(/\/$/, '') || '/';
}

/** Defaults describe the page's service, not a confirmed booking or pickup address. */
export const LANDING_QUOTE_DEFAULTS: Record<string, { eventType: string; hours?: string; notes: string }> = {
  '/services/long-distance-charter-bus-rental': { eventType: 'Out of State Trips', hours: 'Out of State Trip', notes: 'Travel dates, overnight stops, daily itinerary, luggage, lavatory requests, and accessibility needs' },
  '/services/corporate': { eventType: 'Corporate Transportation', notes: 'Office or hotel addresses, meeting times, shuttle frequency, and equipment' },
  '/services/school': { eventType: 'School Shuttle', notes: 'School and destination addresses, students and chaperones, arrival deadline, and accessibility needs' },
  '/services/sporting-events': { eventType: 'Concerts / Sporting Events', notes: 'Venue, game or event date, passenger count, equipment, and return window' },
  '/services/weddings': { eventType: 'Wedding Guest Shuttle', notes: 'Hotel blocks, ceremony and reception addresses, photo stops, and final return time' },
  '/services/ohare-airport': { eventType: 'Airport', notes: "O'Hare flight numbers, terminals if known, arrival/departure times, luggage, and destination" },
  '/services/midway-airport': { eventType: 'Airport', notes: 'Midway flight numbers, arrival/departure times, luggage, and destination' },
  '/services/hotel-transportation': { eventType: 'General Charter', notes: 'Hotel names and addresses, guest counts at each stop, luggage, and return schedule' },
  '/services/convention-transportation': { eventType: 'Corporate Transportation', notes: 'Convention venue, hotel blocks, exhibitor or attendee arrivals, and shuttle schedule' },
};
