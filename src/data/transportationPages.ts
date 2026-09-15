import type { ImageMetadata } from 'astro';
import type { GuideBlock } from './guides';
import type { InlineLink } from '../lib/inlineLinks';
import { TRANSPORT_LINKS as T, OFFICIAL_LINKS as O } from './transportationLinks';
import ohareImage from '../assets/images/transportation/ohare-terminal-pexels.jpg';
import midwayImage from '../assets/images/transportation/midway-terminal-pexels.jpg';
import hotelImage from '../assets/images/transportation/chicago-hotel-pexels.jpg';
import conventionImage from '../assets/images/transportation/conference-audience-pexels.jpg';
import rosemontImage from '../assets/images/transportation/ohare-airfield-pexels.jpg';
import wrigleyImage from '../assets/images/services/wrigley-field-crowd-pexels.jpg';

export interface TransportationPage {
  path: string;
  name: string;
  heading: string;
  kind: 'service' | 'location';
  area: string;
  meta: { title: string; description: string };
  intro: { text: string; links: InlineLink[] };
  image: { src: ImageMetadata; alt: string; caption: string; position?: string };
  blocks: GuideBlock[];
  checklist: string[];
  related: { label: string; href: string }[];
}

const link = (phrase: string, href: string): InlineLink => ({ phrase, href });
const p = (text: string, links: InlineLink[] = []): GuideBlock => ({ type: 'p', text, links });
const h2 = (text: string): GuideBlock => ({ type: 'h2', text });

export const OHARE_PAGE: TransportationPage = {
  path: T.ohare,
  name: "O'Hare Airport Transportation",
  heading: "O'Hare Airport Charter Bus Transportation",
  kind: 'service',
  area: 'Chicago and surrounding suburbs',
  meta: {
    title: "O'Hare Airport Charter Bus & Group Transfers | Chicago Super Coach",
    description: "Plan private group transportation to and from O'Hare. Coordinate flights, luggage, hotel stops, and the right coach or Sprinter for your Chicago trip.",
  },
  intro: {
    text: "Bring your group from O'Hare International Airport to its next stop with one transportation plan. Chicago Super Coach arranges private airport transfers for corporate travelers, schools, sports teams, and visitors. Connect your arrival with Chicago hotel transportation, plan a stop in Rosemont, and compare our charter bus fleet to find the right fit for passengers and luggage.",
    links: [link("O'Hare International Airport", O.ohare), link('Chicago hotel transportation', T.hotels), link('Rosemont', T.rosemont), link('charter bus fleet', T.fleet)],
  },
  image: { src: ohareImage, alt: "Travelers walking through a concourse at O'Hare International Airport", caption: "Group arrivals at O'Hare International Airport" },
  blocks: [
    h2('Build the pickup around your arrivals'),
    p('Start with the flight numbers and arrival dates for everyone who needs a ride. A group on one flight and a group arriving in several waves need different pickup plans. Tell us about checked bags, equipment, and any connection between separate terminals. Our team will confirm the meeting arrangements with you; a flight landing time is only one part of the ground transportation schedule.'),
    h2('Connect the airport to the rest of your itinerary'),
    p('An airport transfer can be the first leg of a longer event. For a meeting or trade show, combine your arrival with Chicago convention transportation and scheduled hotel transfers. If some travelers use a different airport, include Midway airport transportation in the same itinerary so the full group has a clear plan for reaching the venue.', [link('Chicago convention transportation', T.conventions), link('hotel transfers', T.hotels), link('Midway airport transportation', T.midway)]),
    p('For a return trip, send the departure flight details and the address where everyone will gather. Include any hotel checkout, meal, or meeting that must happen first. We can discuss the sequence of stops and the pickup timing before you confirm the booking, so travelers know when and where to be ready.'),
    h2('Choose space for people and bags'),
    p('Passenger count does not describe everything that needs to travel. Suitcases, team equipment, and presentation materials affect the vehicle choice. Use our vehicle size guide to compare options, then send those details with your airport transfer quote request. We confirm the available vehicle and luggage space for the actual trip.', [link('vehicle size guide', '/guides/what-size-charter-bus-do-i-need'), link('airport transfer quote request', T.quote)]),
  ],
  checklist: ['Arrival and departure dates and flight numbers', 'Passenger count and luggage or equipment', 'Hotel, venue, and other destination addresses', 'A group contact and any separate arrival waves'],
  related: [{ label: 'Rosemont charter bus rental', href: T.rosemont }, { label: 'Hotel pickups and shuttles', href: T.hotels }, { label: 'Chicago convention transportation', href: T.conventions }],
};

export const MIDWAY_PAGE: TransportationPage = {
  path: T.midway,
  name: 'Midway Airport Transportation',
  heading: 'Midway Airport Charter Bus Transportation',
  kind: 'service',
  area: 'Chicago and surrounding suburbs',
  meta: {
    title: 'Midway Airport Charter Bus & Group Transportation | Chicago Super Coach',
    description: 'Arrange private group transfers to and from Midway Airport, with coordinated hotel stops, luggage space, and return travel for your Chicago itinerary.',
  },
  intro: {
    text: 'Keep your group together between Midway International Airport and Chicago hotels, meetings, and events. We arrange private transportation around your flight schedule and destination. Pair your airport trip with hotel transportation or convention transfers, and review our fleet options before sharing the passenger count and luggage needs.',
    links: [link('Midway International Airport', O.midway), link('hotel transportation', T.hotels), link('convention transfers', T.conventions), link('fleet options', T.fleet)],
  },
  image: { src: midwayImage, alt: 'A red Midway airport sign beneath the glass and steel terminal roof', caption: 'Midway airport connections for Chicago groups', position: 'center 55%' },
  blocks: [
    h2('Plan arrivals and departures separately'),
    p('For an arrival, share the flight number, landing date, passenger count, and the address of your first stop. Checked luggage and separate arriving flights can change when a group is ready to leave. Our team will discuss the pickup arrangements with you. For a departure, tell us the flight time and where the group will meet before heading to the airport.'),
    h2('Keep the hotel and event stops on one schedule'),
    p('A school trip, wedding weekend, or team visit may need more than a direct airport transfer. Include each stop and its required arrival time so we can plan the whole sequence. For wedding guest transportation or a sporting event trip, tell us which part of the day is fixed and whether the return journey ends at a hotel or the airport.', [link('wedding guest transportation', '/services/weddings'), link('sporting event trip', T.sports)]),
    p("If members of your group arrive at both Chicago airports, make that clear when you request the trip. We can discuss O'Hare airport transfers alongside the Midway leg and coordinate the destination schedule. The service-area directory also helps you identify suburban hotel or event stops to include in your request.", [link("O'Hare airport transfers", T.ohare), link('service-area directory', '/service-areas')]),
    h2('Quote the full trip, including luggage'),
    p('Send a realistic headcount and describe suitcases, sports bags, or other equipment. Our guide to charter bus pricing explains the inputs that affect a quote. Request a Midway group transportation quote with your route and dates so the vehicle and timing can be planned around your group.', [link('guide to charter bus pricing', '/guides/charter-bus-cost-chicago'), link('Midway group transportation quote', T.quote)]),
  ],
  checklist: ['Flight numbers and travel dates', 'Pickup and destination addresses', 'Passenger and baggage counts', 'Required arrival times and return plans'],
  related: [{ label: "O'Hare airport transfers", href: T.ohare }, { label: 'Chicago hotel transportation', href: T.hotels }, { label: 'Wedding guest transportation', href: '/services/weddings' }],
};

export const HOTEL_PAGE: TransportationPage = {
  path: T.hotels,
  name: 'Chicago Hotel Transportation',
  heading: 'Chicago Hotel Transportation for Groups',
  kind: 'service',
  area: 'Chicago and surrounding suburbs',
  meta: {
    title: 'Chicago Hotel Transportation & Group Shuttles | Chicago Super Coach',
    description: 'Coordinate Chicago hotel pickups, airport transfers, wedding shuttles, and convention travel with one private transportation plan for your group.',
  },
  intro: {
    text: "Turn a hotel stay into a coordinated group itinerary, from the first airport arrival to the final return trip. Chicago Super Coach provides private hotel pickups for visitors, wedding guests, schools, and business groups. Connect O'Hare airport transportation or Midway transfers with your hotel stops, then compare the Chicago charter bus fleet for your group size.",
    links: [link("O'Hare airport transportation", T.ohare), link('Midway transfers', T.midway), link('Chicago charter bus fleet', T.fleet)],
  },
  image: { src: hotelImage, alt: 'Loews hotel and surrounding high-rise buildings beside the Chicago River', caption: 'Hotels and group destinations in downtown Chicago', position: 'center 45%' },
  blocks: [
    h2('One hotel or several room blocks'),
    p('Start with the actual hotel addresses and the number of passengers at each one. Multiple pickups need an order, a departure time at every stop, and one contact who can account for the group. Tell us if everyone must arrive together or if separate shuttle departures would suit the itinerary. We will discuss pickup details and vehicle access when planning the route.'),
    h2('Shuttles for meetings, conventions, and weddings'),
    p('A morning ride to a meeting and a repeating shuttle loop are different bookings. Chicago convention transportation can connect hotels with event venues such as McCormick Place, while wedding transportation follows your ceremony and reception timeline. Send the schedule for each day, including any late return trips, so those movements are included in the plan.', [link('Chicago convention transportation', T.conventions), link('McCormick Place', O.mccormick), link('wedding transportation', '/services/weddings')]),
    p('Guests staying in Rosemont may need airport access, a convention transfer, and a separate Chicago outing during the same visit. Our Rosemont charter bus service connects those trip types. Share restaurant, attraction, or meeting addresses rather than just neighborhood names, and include time for the group to gather before each departure.', [link('Rosemont charter bus service', T.rosemont)]),
    h2('Make the request easy to price'),
    p('Include luggage when the group is checking in or checking out, and distinguish those transfers from rides during the stay. Our booking timeline guide explains why it helps to plan once dates and room blocks are known. Send a hotel transportation quote request with the stops, passenger counts, and return schedule to start the conversation.', [link('booking timeline guide', '/guides/how-far-in-advance-book-charter-bus'), link('hotel transportation quote request', T.quote)]),
  ],
  checklist: ['Each hotel name and street address', 'Passenger count at each pickup', 'Venue arrival times and shuttle frequency', 'Checkout luggage and final return destination'],
  related: [{ label: 'Convention and conference shuttles', href: T.conventions }, { label: 'Rosemont group transportation', href: T.rosemont }, { label: 'Chicago wedding transportation', href: '/services/weddings' }],
};

export const CONVENTION_PAGE: TransportationPage = {
  path: T.conventions,
  name: 'Chicago Convention Transportation',
  heading: 'Chicago Convention & Conference Transportation',
  kind: 'service',
  area: 'Chicago and Rosemont',
  meta: {
    title: 'Chicago Convention Transportation & Event Shuttles | Chicago Super Coach',
    description: 'Plan private convention and conference transportation between Chicago airports, hotels, McCormick Place, and Rosemont event venues for your group.',
  },
  intro: {
    text: 'Give attendees, exhibitors, and corporate teams a clear route between arrival, hotel, and event. Chicago Super Coach coordinates convention transportation to venues such as McCormick Place. Combine hotel shuttles with airport transfers and choose from our charter bus fleet to match your group and event schedule.',
    links: [link('McCormick Place', O.mccormick), link('hotel shuttles', T.hotels), link('airport transfers', T.ohare), link('charter bus fleet', T.fleet)],
  },
  image: { src: conventionImage, alt: 'Attendees seated together in a conference auditorium', caption: 'Group travel for conferences and business events', position: 'center 58%' },
  blocks: [
    h2('Start with the event schedule'),
    p('Send the event dates, venue address, opening session time, and the times your group needs to leave. Include separate arrivals for exhibitors, speakers, or staff if their day starts before the main group. A single transfer and a repeating shuttle loop need different schedules, so tell us whether passengers move together or in several departures.'),
    h2('Connect hotels and airports to the venue'),
    p('For delegates arriving across several flights, include both the airport arrival plan and the hotel-to-event movement. Midway airport transportation can be coordinated alongside the hotel legs. If the event is in Rosemont, our Rosemont charter bus rental page covers local hotels and convention trips around the Donald E. Stephens Convention Center.', [link('Midway airport transportation', T.midway), link('Rosemont charter bus rental', T.rosemont), link('Donald E. Stephens Convention Center', O.rosemontConvention)]),
    p('A useful shuttle itinerary names every hotel and venue entrance supplied by the organizer, the number of riders at each stop, and the required arrival time. Tell us about presentation cases or other passenger equipment as well as luggage. Our team will confirm the transportation arrangements rather than assuming that every entrance works for a coach.'),
    h2('Keep the whole event in the quote'),
    p('Morning arrivals, evening returns, an off-site dinner, and the last airport departure all belong in the same request if you need them. The charter pricing guide explains how duration and itinerary affect the cost. Request a custom charter bus quote with the full program, or explore corporate transportation for office travel beyond the convention itself.', [link('charter pricing guide', '/guides/charter-bus-cost-chicago'), link('custom charter bus quote', T.quote), link('corporate transportation', '/services/corporate')]),
  ],
  checklist: ['Venue address and organizer-supplied entrance', 'Event dates and required arrival times', 'Hotel stops, headcounts, and departure frequency', 'Airport legs, luggage, and passenger equipment'],
  related: [{ label: 'Rosemont convention trips', href: T.rosemont }, { label: 'Hotel shuttle transportation', href: T.hotels }, { label: 'Corporate travel and staff shuttles', href: '/services/corporate' }],
};

export const WRIGLEYVILLE_PAGE: TransportationPage = {
  path: T.wrigleyville,
  name: 'Wrigleyville Charter Bus Rental',
  heading: 'Wrigleyville Charter Bus Rental for Groups',
  kind: 'location',
  area: 'Wrigleyville, Chicago',
  meta: {
    title: 'Wrigleyville Charter Bus Rental & Cubs Group Trips | Chicago Super Coach',
    description: 'Arrange Wrigleyville group transportation for Cubs games, local outings, and hotel transfers, with a coordinated pickup and return plan for your group.',
  },
  intro: {
    text: 'Plan the ride as carefully as the outing. For a group visiting Wrigley Field, Chicago Super Coach connects your pickup location with a coordinated return trip. Our Chicago sporting event transportation can include hotel pickups, and our charter bus fleet gives you options for keeping the group together on the way to Wrigleyville.',
    links: [link('Wrigley Field', O.wrigley), link('Chicago sporting event transportation', T.sports), link('hotel pickups', T.hotels), link('charter bus fleet', T.fleet)],
  },
  image: { src: wrigleyImage, alt: 'A crowd watching a baseball game at Wrigley Field in Chicago', caption: 'Group outings to Wrigley Field' },
  blocks: [
    h2('Give your group one pickup plan'),
    p('Share the game or event date, your starting address, and the number of passengers. Include any meal or gathering before the event and tell us when the group needs to arrive. We will discuss the drop-off and meeting arrangements as part of the itinerary. A venue name alone does not tell everyone where to gather for the trip home.'),
    h2('Include the return before you travel'),
    p('Decide whether the return follows the game or a separate gathering afterward, and give the group one contact for coordinating departure. If travelers are returning to several hotels, include each address and the headcount for each stop. Chicago hotel transportation can be part of that plan; a suburban group can also review our service areas when assembling its pickup route.', [link('Chicago hotel transportation', T.hotels), link('service areas', '/service-areas')]),
    p("Visitors flying into Chicago can arrange O'Hare group transfers before their Wrigleyville outing. Groups based in Rosemont can connect their hotel stay with a Chicago game-day trip. Send these legs together if they belong to one visit, so we can discuss which movements need a coach and when the group is traveling.", [link("O'Hare group transfers", T.ohare), link('Rosemont', T.rosemont)]),
    h2('Match the vehicle to the outing'),
    p('Start with a headcount and include any bags or equipment the group will bring. Our guide to choosing a vehicle explains the available sizes and the space questions worth asking. Request a Wrigleyville transportation quote once you have the date, pickup address, and return plan; availability and the exact vehicle are confirmed for your trip.', [link('guide to choosing a vehicle', '/guides/what-size-charter-bus-do-i-need'), link('Wrigleyville transportation quote', T.quote)]),
  ],
  checklist: ['Game or event date and group arrival time', 'Pickup address and passenger count', 'Any pre-event or post-event stops', 'Return destination and group contact'],
  related: [{ label: 'Chicago sporting event transportation', href: T.sports }, { label: 'Hotel pickups for visiting groups', href: T.hotels }, { label: 'Rosemont charter bus rental', href: T.rosemont }],
};

export const ROSEMONT_PAGE: TransportationPage = {
  path: T.rosemont,
  name: 'Rosemont Charter Bus Rental',
  heading: 'Rosemont Charter Bus Rental & Group Transportation',
  kind: 'location',
  area: 'Rosemont, Illinois',
  meta: {
    title: 'Rosemont Charter Bus Rental, Hotels & Conventions | Chicago Super Coach',
    description: "Plan Rosemont charter bus transportation for convention groups, hotel stays, O'Hare transfers, and Chicago outings with a route built around your itinerary.",
  },
  intro: {
    text: "Connect the different parts of a Rosemont visit with one group transportation plan. Chicago Super Coach serves convention groups, hotel guests, corporate events, and private outings. Travelers using nearby O'Hare International Airport can arrange O'Hare airport transportation, add hotel shuttles, and compare our Chicago charter bus fleet for the people and luggage traveling together.",
    links: [link("O'Hare International Airport", O.ohare), link("O'Hare airport transportation", T.ohare), link('hotel shuttles', T.hotels), link('Chicago charter bus fleet', T.fleet)],
  },
  image: { src: rosemontImage, alt: "Aircraft and the control tower at O'Hare International Airport near Rosemont", caption: "O'Hare airport connections for Rosemont visitors", position: 'center 62%' },
  blocks: [
    h2('Conventions with a local hotel base'),
    p('For an event at the Donald E. Stephens Convention Center, start with the hotel addresses and the organizer’s arrival schedule. Our convention transportation service can connect the hotel, venue, and return stops. Include early staff arrivals, separate attendee departures, and any evening event so we can discuss the complete shuttle pattern.', [link('Donald E. Stephens Convention Center', O.rosemontConvention), link('convention transportation service', T.conventions)]),
    h2('Airport arrivals and Chicago outings'),
    p('A Rosemont stay can include both airport transfers and a day in Chicago. Guests arriving through Midway can arrange Midway airport transportation, while a group heading to a Cubs game can plan a Wrigleyville charter bus trip. Give us each date and destination so the request covers the visit rather than only the first ride.', [link('Midway airport transportation', T.midway), link('Wrigleyville charter bus trip', T.wrigleyville)]),
    p('Hotel pickups are easiest to coordinate when each stop has a headcount and a group contact. Share the hotel entrance information you have, departure times, and any checked luggage that needs to travel after checkout. Our team will confirm pickup arrangements and discuss whether one vehicle or separate movements suit the schedule.'),
    h2('Send the itinerary before choosing a vehicle'),
    p('Passenger count, luggage, the length of the trip, and the number of stops all affect the plan. The charter bus pricing guide explains those inputs, and the booking guide helps you decide when to start. Request a Rosemont transportation quote with the convention dates or outing schedule so we can confirm the available options.', [link('charter bus pricing guide', '/guides/charter-bus-cost-chicago'), link('booking guide', '/guides/how-far-in-advance-book-charter-bus'), link('Rosemont transportation quote', T.quote)]),
  ],
  checklist: ['Rosemont hotel and venue addresses', 'Convention, meeting, or outing schedule', 'Airport flight details when needed', 'Passenger count, bags, and final return stop'],
  related: [{ label: "O'Hare airport group transportation", href: T.ohare }, { label: 'Convention and conference transfers', href: T.conventions }, { label: 'Wrigleyville outings', href: T.wrigleyville }],
};

export const TRANSPORTATION_SERVICE_PAGES = [OHARE_PAGE, MIDWAY_PAGE, HOTEL_PAGE, CONVENTION_PAGE];
export const LOCATION_PAGES = [WRIGLEYVILLE_PAGE, ROSEMONT_PAGE];
