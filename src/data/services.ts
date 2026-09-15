/**
 * The services. Copy is original to this rebuild — the old site's wording
 * is not carried over.
 *
 * Each entry has to earn a distinct value proposition. Five near-identical
 * pages that swap one noun is exactly the templated duplication the sister-site
 * rule forbids, and it is also what search engines discount. The differentiator
 * is what each buyer is actually worried about, which is different every time.
 */

import type { InlineLink } from '../lib/inlineLinks';
import { TRANSPORT_LINKS as T, OFFICIAL_LINKS as O } from './transportationLinks';

export interface Service {
  slug: string;
  /** Nav and card label. */
  name: string;
  /**
   * Whether the service stands in the lineups — the homepage row, the cards on
   * /services, the footer list.
   *
   * False keeps the page, its URL and every link already pointing at it
   * exactly where they are; it only stops the service being offered as one of
   * the choices to someone who has not asked for it. Nothing 404s, so this is
   * how a service leaves the menu without leaving the site. Listed by default.
   */
  listed?: boolean;
  /** The blade destination line — where these passengers are going. */
  destination: string;
  /** The page's own H1. */
  headline: string;
  /** One-sentence value proposition. Distinct per service. */
  proposition: string;
  /** Two or three paragraphs of body copy. */
  body: string[];
  bodyHeading?: string;
  faqHeading?: string;
  /** Contextual links, matched to their paragraph during rendering. */
  bodyLinks?: InlineLink[];
  /** The specific worry this buyer has, and how it is answered. */
  concerns: { label: string; answer: string }[];
  /**
   * Fleet slugs, largest first, for the vehicle strip on the service page.
   *
   * Editorial rather than derived: it is where a group of this kind usually
   * starts, not a promise of which coach turns up. The headcount decides that,
   * the page says so in as many words, and every capacity shown is read from
   * data/fleet.ts rather than typed here — so this list can never contradict a
   * vehicle's real range. Slugs must exist in FLEET; an unknown one renders
   * nothing rather than an empty card.
   */
  vehicles?: string[];
  /**
   * Questions this page answers, emitted as FAQPage structured data.
   *
   * Every answer restates something this site already publishes — the driver
   * standards in `body`, the capacities in data/fleet.ts, the office hours in
   * config/site.ts, the lead times in the booking guide. Nothing here may be
   * the only place a fact appears: an answer nobody can check against the rest
   * of the site is exactly the kind of claim the fleet file forbids.
   *
   * Weddings ships its own page with its own FAQ (data/weddings.ts), which is
   * why this is optional rather than required on all five.
   */
  faq?: { q: string; a: string }[];
  meta: { title: string; description: string };
  /**
   * An outbound pointer to the sister property, where that brand answers the
   * question better than this one can. Optional, and deliberately data rather
   * than a slug check in the page template: which services hand off is a fact
   * about the business, not about the layout.
   *
   * Followed on purpose — no rel="nofollow". Two companies under one owner
   * linking to each other is editorial, not paid placement.
   */
  sister?: { note: string; label: string; href: string };
}

export const SERVICES: Service[] = [
  {
    slug: 'long-distance-charter-bus-rental',
    name: 'Out of State Transportation Services',
    destination: 'Overnight · Multi-Day · Interstate',
    headline: 'Long Distance Charter Bus Rental',
    proposition:
      'Travel beyond Illinois with your group, a professional driver, and an itinerary planned around your stops. Request a quote here for a one-way, round-trip, or multi-day journey.',
    bodyHeading: 'Out of State Transportation Services',
    faqHeading: 'Long-Distance Travel FAQs',
    body: [
      'Chicago Super Coach provides private group transportation for trips that cross state lines, from a single event to an overnight stay or a tour with several destinations. Your group books the vehicle for its own itinerary, with pickup locations, stops, and return arrangements agreed before departure.',
      'Our long distance charter bus rental service can connect Chicago and the surrounding suburbs with your out-of-state destination. Pickups outside Illinois can also be arranged; tell us where the group starts and finishes. For a school trip, sports tournament, or corporate event, include the arrival deadline and any transportation needed at the destination.',
      'Start with the quote form on this page, then review the itinerary and vehicle with your reservation manager. Browse our Chicago charter bus fleet to compare seating and luggage options. Lavatories are available on select Supercoach buses; request one before booking so we can confirm availability for your dates.',
    ],
    bodyLinks: [
      { phrase: 'surrounding suburbs', href: '/service-areas' },
      { phrase: 'school trip', href: '/services/school' },
      { phrase: 'sports tournament', href: T.sports },
      { phrase: 'corporate event', href: '/services/corporate' },
      { phrase: 'quote form on this page', href: T.quote },
      { phrase: 'Chicago charter bus fleet', href: T.fleet },
    ],
    concerns: [
      {
        label: 'One-way travel',
        answer:
          'Share the departure point, destination, and required arrival time. Let us know if you need transportation after the initial drop-off.',
      },
      {
        label: 'Round trips',
        answer:
          'Include both departure and return times, event addresses, and any stops between them. We will review a workable schedule for the full journey.',
      },
      {
        label: 'Overnight and multi-day trips',
        answer:
          'Send each travel date, hotel stop, and daily activity. Vehicle and driver arrangements are confirmed around the full itinerary and required rest.',
      },
    ],
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'How do I arrange a charter bus rental for long distance travel?',
        a: 'Use the quote form on this page. The out-of-state trip option is already selected; enter the number of days, passenger count, pickup and destination, and your contact information. Add overnight stops and the daily schedule in the notes. A reservation manager will review availability and send your quote before you confirm the booking.',
      },
      {
        q: 'What affects the cost of an interstate trip?',
        a: 'The travel dates, vehicle size, total days, mileage, pickup locations, stops, and driver arrangements all affect the price. A direct return trip and a multi-day tour need different schedules. Ask your manager which charges are included and whether tolls, parking, driver lodging, or additional driver costs apply. Driver gratuity is generally separate from the base price.',
      },
      {
        q: 'Does the same coach stay with us for the whole trip?',
        a: 'Your reservation manager will confirm the vehicle and driver arrangements for the full itinerary before booking. Longer schedules may require additional drivers, and each day must allow for required driving and rest limits.',
      },
      {
        q: 'Do your buses have an onboard bathroom?',
        a: 'Lavatories are available on select Supercoach buses. A restroom is not standard on every vehicle, so include the request in your quote notes. Your reservation manager will confirm a suitable vehicle and availability before booking. Scheduled rest stops still form part of the trip plan.',
      },
      {
        q: 'Can we add several stops or stay overnight?',
        a: 'Yes. Include each stop, its address, overnight accommodation, and the times you need transportation on each day. Your manager will review a multi-stop or multi-day itinerary with you. Changes after quoting may affect the price and vehicle or driver availability.',
      },
      {
        q: 'Can the trip start outside Chicago or Illinois?',
        a: 'Pickups in the Chicago area and outside Illinois can be arranged. Provide the exact starting point, destination, and final return location so your manager can confirm availability and price the complete route.',
      },
      {
        q: 'Will there be room for suitcases and team equipment?',
        a: 'Luggage space varies by vehicle and configuration. Tell us how many bags each passenger will bring, plus any large equipment, instruments, or mobility aids. Undercarriage storage is available on request on suitable coaches; your manager will confirm the space with you before booking.',
      },
      {
        q: 'How far in advance should an out-of-state trip be booked?',
        a: 'Send your request as soon as your travel dates and approximate passenger count are known. A multi-day reservation needs vehicle and driver availability across the entire itinerary. You can share an early route plan and discuss revisions with your manager; availability is confirmed during the booking process.',
      },
    ],
    meta: {
      title: 'Long Distance Charter Bus Rental | Chicago Super Coach',
      description:
        'Long distance charter bus rental from Chicago for out-of-state and multi-day trips. Lavatories on select Supercoach buses. Request your trip quote online.',
    },
  },
  {
    slug: 'corporate',
    name: 'Corporate Transportation',
    destination: 'Hotel · Venue · Office',
    headline: 'Corporate charter and staff shuttles in Chicago',
    proposition:
      'A repeating loop that runs on your schedule, so attendees stop asking how they are getting there.',
    body: [
      'Coordinate staff, clients, or conference attendees with scheduled transportation between Chicago offices, hotels, and event venues. Share the passenger count at each location and the times everyone needs to arrive so we can build a practical pickup plan.',
      'Choose a one-way transfer, a return journey, or scheduled shuttle loops. Include the first departure, desired frequency, breaks between sessions, and final return. We will confirm vehicle availability and a driver schedule that supports the itinerary.',
      'Our coach and Sprinter options include USB charging and seatbelts. Luggage storage varies by vehicle, so tell us about suitcases, display materials, or equipment. Confirm the space and any requested amenities with your reservation manager before booking.',
      "For an event at McCormick Place, connect Chicago convention transportation with hotel shuttle service and O'Hare airport transfers. Share the arrival schedule and each venue address so the event itinerary covers the full visit.",
    ],
    bodyLinks: [
      { phrase: 'McCormick Place', href: O.mccormick },
      { phrase: 'Chicago convention transportation', href: T.conventions },
      { phrase: 'hotel shuttle service', href: T.hotels },
      { phrase: "O'Hare airport transfers", href: T.ohare },
    ],
    concerns: [
      {
        label: 'It has to look organized',
        answer:
          'One coordinated run sheet, with pickup times and vehicles matched to the passenger count at each stop.',
      },
      {
        label: 'Someone has to expense it',
        answer:
          'A single charter invoice instead of reimbursing dozens of individual rides.',
      },
      {
        label: 'The schedule will change',
        answer:
          'Loop timing, pickup points and return times can be adjusted with us directly — you are talking to the operator, not a booking desk.',
      },
    ],
    vehicles: ['coach', 'small-coach', 'executive-sprinter'],
    faq: [
      {
        q: 'Can the coach run a loop all day, or is it one transfer?',
        a: 'We can arrange one-way transfers, return trips, or scheduled shuttle loops. Send the operating window and requested frequency so we can confirm the vehicles and driver arrangements needed.',
      },
      {
        q: 'How many people fit in one vehicle?',
        a: 'Four sizes, from a 13–15 passenger Executive Sprinter Van to a 50–57 passenger Supercoach Bus. Above 57 we run more than one vehicle and confirm availability directly.',
      },
      {
        q: 'Our schedule will change. Can the booking change with it?',
        a: 'Loop timing, pickup points and return times are adjusted with us directly. You are talking to the operator rather than a booking desk, which is the difference that matters the week of an event.',
      },
      {
        q: 'How does this get expensed?',
        a: 'One charter invoice for the vehicle, instead of reimbursing dozens of individual rides on dozens of expense reports.',
      },
    ],
    meta: {
      title: 'Corporate Charter Bus & Staff Shuttle Service | Chicago Super Coach',
      description:
        'Corporate charter bus and staff shuttle service in Chicago. Continuous hotel-to-venue loops or scheduled transfers for conferences, meetings and company events. Call 630-624-3448.',
    },
  },
  {
    slug: 'school',
    name: 'School Transportation',
    destination: 'Field Trip · Campus · Event',
    headline: 'School shuttle and student group transportation',
    proposition:
      'Licensed, drug-tested drivers, insured transportation, and coach buses with seatbelts on every seat for school groups.',
    body: [
      'Booking transportation for students means answering to someone: a principal, a district office, a parent who wants to know who is driving. The questions are always about the driver and the vehicle, not the price.',
      'Our drivers are licensed and experienced, insured, and drug tested. The coach has seatbelts on all seats and is maintained on a regular schedule. We have carried student groups from elementary field trips through university travel.',
      'Field trips, competitions, campus visits, band and choir travel, and end-of-year events all work the same way: give us the pickup, the destination, and the times you need to be back.',
    ],
    concerns: [
      {
        label: 'Who is driving my students',
        answer:
          'Licensed, experienced, drug-tested drivers. Tell us which district documents you need when booking; driver assignments are usually completed about 24 hours before travel.',
      },
      {
        label: 'Is the vehicle safe',
        answer:
          'Seatbelts on all seats and a regularly maintained fleet. The coach is the same vehicle we would put a corporate client on.',
      },
      {
        label: 'We have to be back by a specific time',
        answer:
          'Return times are part of the booking, not an afterthought. Tell us the bell schedule and we build around it.',
      },
    ],
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'Who will be driving my students?',
        a: 'Licensed, experienced, drug-tested drivers. Tell us which district documents you need when booking. Driver assignments are usually completed about 24 hours before travel, with details sent to the trip contact.',
      },
      {
        q: 'Does every seat have a seatbelt?',
        a: 'Yes — seatbelts on all seats, on a regularly maintained fleet. It is the same vehicle and the same standard we put a corporate client on.',
      },
      {
        q: 'We have to be back before the last bell. Is that in the booking?',
        a: 'Return times are part of the booking rather than an afterthought. Send the bell schedule with the request and the run sheet is built around it.',
      },
      {
        q: 'How large a group travels in one vehicle?',
        a: 'Up to 50–57 in the Supercoach Bus, with three smaller sizes below it. A grade level larger than that travels in more than one vehicle, which we confirm on availability rather than assume.',
      },
    ],
    meta: {
      title: 'School Bus Charter & Student Group Transportation | Chicago Super Coach',
      description:
        'School shuttle and student group transportation in Chicago. Licensed, insured, drug-tested drivers and seatbelts on every seat for field trips, competitions and campus travel. Call 630-624-3448.',
    },
  },
  {
    slug: 'sporting-events',
    name: 'Sporting Event Transportation',
    destination: 'Wrigley · Rate · Soldier · United',
    headline: 'Chicago sporting event charters',
    proposition:
      'Travel together to the game, with pickup, drop-off, and return times arranged in advance at locations the bus can safely access.',
    body: [
      'Cubs, White Sox, Bears, Bulls and Blackhawks games all share one logistics problem: parking near the venue is expensive, scarce, and nowhere near where your group wants to be. Twelve cars means twelve parking searches and twelve different arrival times.',
      'Send the venue, event date, passenger count, and preferred return window. We will agree on pickup and drop-off arrangements based on bus access and venue rules. The return meeting point and time are confirmed with your group before travel.',
      'This works the same for a company outing, a season-ticket group, a birthday, or a youth team travelling to a tournament.',
      'For a Cubs game at Wrigley Field, our Wrigleyville charter bus service connects your pickup and return plans. Visiting teams and fans can add Chicago hotel transportation and compare our charter bus fleet for the passengers, luggage, and equipment coming along.',
    ],
    bodyLinks: [
      { phrase: 'Wrigley Field', href: O.wrigley },
      { phrase: 'Wrigleyville charter bus service', href: T.wrigleyville },
      { phrase: 'Chicago hotel transportation', href: T.hotels },
      { phrase: 'charter bus fleet', href: T.fleet },
    ],
    concerns: [
      {
        label: 'Parking will cost more than the tickets',
        answer:
          'One vehicle in a charter lot instead of a dozen cars paying game-day rates.',
      },
      {
        label: 'We will get separated',
        answer:
          'Everyone arrives together and leaves together. No one is waiting on a car that got stuck in the garage exit line.',
      },
      {
        label: 'Games run long',
        answer:
          'Extra innings and overtime happen. Talk to us about the return window when you book and we plan for it.',
      },
    ],
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'Where does the coach actually drop us?',
        a: 'The drop-off location depends on venue rules, road access, and the vehicle. We will confirm a suitable meeting point and the return pickup plan before the trip.',
      },
      {
        q: 'What happens if the game runs long?',
        a: 'Extra innings and overtime happen. Raise the return window when you book and we plan the end of the night around it rather than around a scheduled finish.',
      },
      {
        q: 'Which venues do you run to?',
        a: 'Cubs, White Sox, Bears, Bulls and Blackhawks games — the Chicago venues where game-day parking is the whole problem. Tell us the fixture and the tip-off or first-pitch time.',
      },
      {
        q: 'Is the driver waiting when we come out?',
        a: 'We arrange a return window and meeting point when you book. Tell your reservation manager if you need flexibility for extra innings or overtime; waiting arrangements depend on the booked schedule and venue access.',
      },
    ],
    meta: {
      title: 'Sporting Event Charter Bus Chicago | Cubs, Sox, Bears, Bulls | Chicago Super Coach',
      description:
        'Charter bus service to Chicago sporting events. Group transportation to Cubs, White Sox, Bears, Bulls and Blackhawks games — skip game-day parking. Call 630-624-3448.',
    },
  },
  {
    slug: 'weddings',
    name: 'Wedding Shuttle Service',
    destination: 'Ceremony · Photos · Reception',
    headline: 'Bridal Party Transportation',
    proposition:
      'Guest shuttles between hotels, ceremonies, and receptions, with stops and return times arranged with your reservation manager.',
    body: [
      'Wedding transportation is a timing problem wearing a formal outfit. Guests need to get from the hotel to the ceremony, the wedding party needs to get to photos, and at the end of the night a lot of people need to get back safely.',
      'We run the loops your timeline needs: a guest shuttle from the hotel block, a wedding party transfer between ceremony, photo locations and reception, and a late return so nobody is driving home from an open bar.',
      'Match the vehicles and number of runs to your guest count. Larger weddings may need several coaches or repeat shuttles, with each hotel pickup and return included in the agreed timeline.',
    ],
    concerns: [
      {
        label: 'The timeline is already tight',
        answer:
          'Give us the timeline you built with your planner. Pickup and return times are booked to it, not negotiated on the day.',
      },
      {
        label: 'Guests are staying at different hotels',
        answer:
          'Multiple pickup points on one loop, or repeat runs. Tell us where the room blocks are.',
      },
      {
        label: 'The end of the night is unpredictable',
        answer:
          'Late returns are normal for us. Build the last run into the booking rather than hoping rideshares are available.',
      },
    ],
    meta: {
      title: 'Wedding Shuttle & Party Bus Service Chicago | Chicago Super Coach',
      description:
        'Wedding transportation in Chicago — guest shuttles from hotel blocks, wedding party transfers between ceremony, photos and reception, and safe late-night returns. Call 630-624-3448.',
    },
    // The one service where the sister brand is the better answer to a question
    // this fleet cannot answer: there is no trolley in it.
    //
    // Deep-linked to their wedding page rather than their homepage — that is the
    // page that answers this question, and a link to a homepage makes the reader
    // go and find it again. Weddings now renders its own handoff on
    // src/pages/services/weddings.astro, in more detail than this line can
    // carry; this stays the data record of the relationship, and the template
    // still renders it for any other service that grows one.
    sister: {
      note: 'A trolley is a different kind of arrival, and it is not in this fleet. Our sister company runs them:',
      label: 'ChiTown Trolley',
      href: 'https://chitowntrolley.com/weddings/',
    },
  },
  {
    slug: 'youth-groups',
    name: 'Youth Group Transportation',
    listed: false,
    destination: 'Tournament · Retreat · Outing',
    headline: 'Youth group and team transportation',
    proposition:
      'Safe and comfortable transportation for camps, retreats, and group activities.',
    body: [
      'Church groups, club teams, scouts and camp programs travel with a ratio of adults to kids and a headcount that has to be right every single time the group moves. Splitting across private cars makes that harder at every stop.',
      'Keep the group on one transportation plan, with vehicles matched to the passenger count and equipment. Luggage space varies by coach; describe sports bags, instruments, or overnight luggage so we can confirm sufficient storage before booking.',
      'Our drivers are licensed, insured and drug tested, and we have long experience with youth groups — the same standard we hold for school district work.',
    ],
    concerns: [
      {
        label: 'Headcount has to be right',
        answer:
          'One vehicle, one count, at every stop. Chaperones are not tracking a convoy.',
      },
      {
        label: 'There is a lot of gear',
        answer:
          'Overhead racks plus undercarriage luggage on request. Equipment travels with the team.',
      },
      {
        label: 'Parents will ask about the driver',
        answer:
          'Licensed, insured and drug-tested drivers, seatbelts on all seats, regularly maintained vehicles.',
      },
    ],
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'Will the gear fit?',
        a: 'Overhead racks on every coach, plus undercarriage luggage on request. Equipment bags and overnight luggage travel with the team instead of in a parent convoy behind it.',
      },
      {
        q: 'Parents will ask about the driver. What do we tell them?',
        a: 'Licensed, insured and drug-tested drivers, seatbelts on all seats, and regularly maintained vehicles — the same standard we hold for school district work.',
      },
      {
        q: 'How do we keep the headcount right?',
        a: 'One vehicle, one count, at every stop. Chaperones are counting a group rather than tracking a convoy across a car park.',
      },
      {
        q: 'Do you run overnight and out-of-state trips?',
        a: 'Yes. Choose the out-of-state option and include all travel dates and overnight stops. We will confirm the vehicle and driver arrangements around the itinerary and required driving and rest limits.',
      },
    ],
    meta: {
      title: 'Youth Group & Team Charter Bus Chicago | Chicago Super Coach',
      description:
        'Youth group transportation in Chicago for church groups, club teams, tournaments and camp programs. Licensed, drug-tested drivers and room for gear. Call 630-624-3448.',
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

/**
 * The lineup: the services offered as choices, in order.
 *
 * Every list a visitor browses reads this rather than SERVICES — the homepage
 * row, the cards on /services, the footer, and the strip of other services at
 * the foot of a service page. SERVICES itself stays the full set, because it is
 * what builds the routes: an unlisted service keeps its page and every link
 * already pointing at it.
 */
export const LISTED_SERVICES = SERVICES.filter((s) => s.listed !== false);

/**
 * Services that have outgrown the shared template and ship their own page.
 *
 * `src/pages/services/[service].astro` skips these so it does not generate a
 * second route for a path a static page already owns. Named here rather than
 * as a string literal in the template, because which services have their own
 * page is a fact about the content, and the two lists must never disagree.
 */
export const BESPOKE_SERVICE_PAGES = ['weddings'] as const;
