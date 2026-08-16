/**
 * The guides.
 *
 * One source of truth for five surfaces: the homepage section, /guides, each
 * article, the related-guide cards at the foot of an article, and every piece of
 * metadata and structured data attached to them. Nothing about a guide is typed
 * twice — add an entry here and it appears everywhere, in the right order, with
 * its own title, description, image and schema.
 *
 * WHY THE BODY IS DATA AND NOT MARKDOWN. Every other piece of copy on this site
 * is typed, checked and rendered by a component that knows the design system.
 * A markdown pipeline would open a second authoring paradigm and a second set of
 * styles, and it would let a future author paste in a heading level, a table or
 * an inline style the sign system has no answer for. The block union below is
 * deliberately small: it is exactly what a guide is allowed to be made of.
 *
 * WHAT THESE ARTICLES MAY SAY. The same rule the rest of the build runs on —
 * unconfirmed facts never ship looking like confirmed facts. These guides carry
 * no prices, no lead times stated as policy, no availability guarantees, and no
 * on-board specification for the three vehicles whose specs the owner has not
 * supplied (see OPEN_ITEMS.fleetSpecs). The vehicle comparison renders from
 * src/data/fleet.ts rather than from prose here, so a capacity in a guide cannot
 * disagree with the fleet page.
 */

import type { ImageMetadata } from 'astro';
import costImage from '../assets/images/guides/guide-cost-lake-shore-drive.jpg';
import sizeImage from '../assets/images/coach-interior.png';
import bookingImage from '../assets/images/guides/guide-booking-wedding-guests.jpg';

/**
 * An inline link inside a block. `phrase` must appear verbatim in that block's
 * text (or in one of its items); the renderer splits on it and fails the build
 * if it does not match, so a link can never silently disappear from a sentence.
 */
export interface GuideLink {
  phrase: string;
  href: string;
}

export type GuideBlock =
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'p'; text: string; links?: GuideLink[] }
  | { type: 'list'; items: string[]; ordered?: boolean; links?: GuideLink[] }
  /** A prep list the reader is meant to gather, drawn with check marks. */
  | { type: 'checklist'; title?: string; items: string[] }
  | { type: 'table'; columns: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; title: string; text: string; links?: GuideLink[] }
  /**
   * The four real vehicles, their capacities and their audiences, rendered from
   * fleet.ts. Emitted instead of a hand-typed comparison table so the numbers in
   * a guide are the same object as the numbers on /fleet.
   */
  | { type: 'fleetTable' };

export interface Guide {
  slug: string;
  /** The H1 and the card title. */
  title: string;
  /** Card description, on the homepage and on /guides. */
  summary: string;
  /** The mono line above the H1. Carries real information, never a kicker. */
  coordinate: string;
  /** One paragraph under the H1 and above the photograph. */
  intro: string;
  image: {
    src: ImageMetadata;
    alt: string;
    /** object-position for the card and hero crops. */
    position?: string;
    /** Provenance, so a temporary asset is never mistaken for owned work. */
    source: string;
  };
  /** ISO date these went live. Used for Article structured data. */
  published: string;
  blocks: GuideBlock[];
  /** The contextual close, above the site's own closing band. */
  cta: { head: string; body?: string; label: string; href: string };
  meta: { title: string; description: string };
}

/**
 * Two of the three photographs are licensed stock standing in until the owner
 * supplies their own — see OPEN_ITEMS.guidePhotos. Both are Pexels, whose
 * license permits commercial use without attribution; the credits are recorded
 * on each entry anyway so the replacements are unambiguous. The third is the
 * operator's own coach interior, already on /fleet: for a guide about how many
 * seats you need, the real seats beat any stock photograph of a group.
 */
export const GUIDES: Guide[] = [
  {
    slug: 'charter-bus-cost-chicago',
    title: 'How Much Does a Charter Bus Cost in Chicago?',
    summary: "There isn't one flat charter bus rate. Here's what affects your quote and what information helps us price your trip accurately.",
    coordinate: 'No flat rate · Quoted per trip',
    intro: 'Every charter is quoted against one specific day, and the day does the deciding — who is traveling, how long the vehicle stays with them, where it goes, and what the roads are doing while it gets there. What moves the number is a short list, and it is longer than most people expect. Below is what each input does, and what to send us so the figure that comes back reflects the trip as you described it.',
    image: {
      src: costImage,
      alt: 'Traffic heading north on Lake Shore Drive toward the Chicago skyline on an overcast afternoon',
      position: 'center 40%',
      source: 'Pexels — "Bustling Chicago Skyline from Busy Highway" by Renee B. Free for commercial use.',
    },
    published: '2026-08-15',
    blocks: [
      {
        type: 'h2',
        text: 'Why there is no flat rate',
      },
      {
        type: 'p',
        text: 'A charter is not a product on a shelf. Every trip commits a specific vehicle and a specific driver for a specific number of hours over a specific distance, and those four things are different every single time.',
      },
      {
        type: 'p',
        text: 'That variation works in your favor. A single published rate would have to cover the hardest version of the trip, the longest day with the worst traffic window and the most stops, and everyone would pay it. Working from the facts of your day instead means a Tuesday morning staff shuttle is not subsidizing a Saturday night wedding return.',
      },
      {
        type: 'table',
        columns: [
          'What changes',
          'What it changes',
        ],
        rows: [
          [
            'Passenger count',
            'Which of the four sizes seats the group: Executive Sprinter Van, Small Coach Bus, Coach Bus or Supercoach Bus',
          ],
          [
            'Trip distance',
            'How many miles the day covers',
          ],
          [
            'Hours held',
            'How long a vehicle and driver stay with your group, waiting included',
          ],
          [
            'Pickup and destination',
            'Where the vehicle has to be, and what it takes to get it there',
          ],
          [
            'Additional stops',
            'Route length and time on the clock',
          ],
          [
            'Date and day of week',
            'How many vehicles are free, and how early to ask',
          ],
          [
            'Time of day',
            'Whether the run crosses a rush window',
          ],
          [
            'Parking and route',
            'Where a motorcoach can legally wait, and which roads the day uses',
          ],
        ],
        caption: 'Eight inputs, and what each one moves. Each gets its own section below.',
      },
      {
        type: 'h2',
        text: 'Start with the group',
      },
      {
        type: 'h3',
        text: 'How many people are actually going',
      },
      {
        type: 'p',
        text: 'Headcount is the first thing we ask, because it decides the vehicle, and the vehicle sits underneath everything else. Count everyone who boards: chaperones, coaches, the photographer, the two people who swore they would drive themselves. A count that grows by six after the quote goes out can change which vehicle we send.',
      },
      {
        type: 'p',
        text: 'If the number is still moving, give us your best estimate and say that it is one. We would rather work from an honest estimate than requote three times off a number that was never firm.',
      },
      {
        type: 'h3',
        text: 'Which vehicle that puts you on',
      },
      {
        type: 'p',
        text: 'Four sizes, four capacity ranges. Ask about the smallest one that seats your group comfortably, and if you are close to the edge of a size, say so. You can see the full fleet, with capacities and photographs, before you ask us anything.',
        links: [
          {
            phrase: 'see the full fleet',
            href: '/fleet',
          },
        ],
      },
      {
        type: 'p',
        text: 'Groups landing near the top of a capacity are worth talking through. If you are between two sizes, or above 57 passengers and wondering whether that means a second vehicle, our guide to choosing a size works through the awkward middle cases.',
        links: [
          {
            phrase: 'our guide to choosing a size',
            href: '/guides/what-size-charter-bus-do-i-need',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Distance and hours',
      },
      {
        type: 'h3',
        text: 'How far the vehicle travels',
      },
      {
        type: 'p',
        text: 'Mileage is the straightforward part. A run from the Loop to Navy Pier is not a run from a west suburban school out to a north suburban venue and back, and the difference shows up in fuel and in driver time.',
      },
      {
        type: 'p',
        text: 'What people forget is the empty mileage. The vehicle still has to reach your pickup and get home after your last drop, with nobody aboard for either leg, so where the day starts and ends shapes the schedule as much as the distance between the two.',
      },
      {
        type: 'h3',
        text: 'How long it is committed',
      },
      {
        type: 'p',
        text: 'A charter holds a vehicle and a driver for a stretch of the day, and the stretch includes the hours nothing moves. Picked up at eight, dropped back at six: the driver is with your group all day even if the coach sits still between ten and four. Tell us the hours you need the vehicle held, waiting included.',
      },
      {
        type: 'p',
        text: 'This is why an all-day corporate shuttle and a one-way transfer over the same distance are not the same trip at all. Tell us the shape of the day, one run out and one run back or a loop that repeats every half hour, and we work from the shape you actually need instead of the one we assumed.',
        links: [
          {
            phrase: 'corporate shuttle',
            href: '/services/corporate',
          },
        ],
      },
      {
        type: 'p',
        text: 'Some schedules run past a single day. Tournament weekends and retreats are the usual shape of it. Send the whole itinerary at once, nights included, and we will tell you what is possible.',
        links: [
          {
            phrase: 'Tournament weekends and retreats',
            href: '/services/youth-groups',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Where you start, where you stop',
      },
      {
        type: 'h3',
        text: 'Pickup and destination',
      },
      {
        type: 'p',
        text: 'Two street addresses tell us more than two neighborhoods do. A pickup in the Loop at 8am and a pickup in a suburban parking lot at 8am are different problems: one has traffic, loading restrictions and nowhere legal for a coach to sit, the other has a driver idling in an empty lot.',
      },
      {
        type: 'p',
        text: "Destinations work the same way. Some venues have a marked bus entrance, others put the coach several blocks out and your group walks in. If you know the venue's loading arrangement, send it. If you do not, send the venue name and we will work it out before the day.",
      },
      {
        type: 'h3',
        text: 'Extra stops along the way',
      },
      {
        type: 'p',
        text: 'Each additional stop adds distance and, more importantly, time. A coach does not pull over and pull back out in ninety seconds with fifty people aboard. Two hotel pickups before a ceremony is an ordinary request, and it is one we can plan properly if we know about it in advance.',
      },
      {
        type: 'p',
        text: 'Tell us the stops in order, with rough times against them. Even approximate times let us see whether the itinerary fits in the day you have, or whether something has to give.',
      },
      {
        type: 'h2',
        text: 'When you go',
      },
      {
        type: 'p',
        text: 'Your date does two jobs. It sets how many vehicles are free that day, and it sets what the roads look like at the hour you move.',
      },
      {
        type: 'h3',
        text: 'Time of day',
      },
      {
        type: 'p',
        text: 'A 6am departure and a 4pm departure cover the same miles at very different speeds. Anything crossing the city on Lake Shore Drive in a rush window needs more time on the clock, and time on the clock is part of what you are booking.',
      },
      {
        type: 'p',
        text: 'A late return added on the night is hours nobody quoted for, because the vehicle and the driver are held well past the day we worked from. Raise the end of the night when you send the start of it.',
      },
      {
        type: 'h3',
        text: 'Weekday or weekend',
      },
      {
        type: 'p',
        text: 'Weekend dates are the ones groups compete for, so a Saturday is a date with fewer vehicles free to build your trip on than the weekday either side of it. That is why the date sits among the eight inputs rather than being a formality collected at the end. How much it narrows depends on how far out you are asking, and the booking guide works through that.',
        links: [
          {
            phrase: 'the booking guide',
            href: '/guides/how-far-in-advance-book-charter-bus',
          },
        ],
      },
      {
        type: 'h3',
        text: "Chicago's busy stretches",
      },
      {
        type: 'p',
        text: "A date that sits in one of Chicago's busy stretches — spring graduations, fall weddings and football, convention weeks at McCormick Place — is a reason to send the itinerary early. The number still comes from your itinerary either way; what a busy date changes is how much of the fleet is left to build it on.",
      },
      {
        type: 'h2',
        text: 'Parking and the roads you use',
      },
      {
        type: 'h3',
        text: 'Downtown parking',
      },
      {
        type: 'p',
        text: 'A motorcoach cannot sit at a meter. So the real question downtown is not what parking costs, it is where the vehicle waits between your drop-off and your pickup. Sometimes that is a staging spot near the venue, sometimes a garage that takes buses, sometimes the driver leaves the area and comes back for you.',
      },
      {
        type: 'p',
        text: 'Which of those applies depends on the venue and the block, and that is why an address helps more than a neighborhood. Loop hotels, Navy Pier, McCormick Place and the Museum Campus each handle an arriving coach their own way, and knowing which one you are using lets us settle the wait before the day rather than on it.',
      },
      {
        type: 'h3',
        text: 'The Tollway and stadium lots',
      },
      {
        type: 'p',
        text: 'A lot of suburban work runs on the Illinois Tollway, because I-294 and I-90 are the honest routes between the north and west suburbs and the city. Whether your day uses them depends on the pickup, the destination and the hour, and it is worth us seeing that before we plan the timing.',
      },
      {
        type: 'p',
        text: 'Stadiums are their own category. Wrigley Field, Rate Field, Soldier Field and the United Center each stage buses differently from cars, so naming the venue in your itinerary is what lets us plan where the coach drops, where it waits and where your group meets it afterward. Charters to sporting events stand or fall on that last part.',
        links: [
          {
            phrase: 'Charters to sporting events',
            href: '/services/sporting-events',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Why an accurate itinerary gets you a better number',
      },
      {
        type: 'p',
        text: 'A specific itinerary lets us work through the trip as it will actually run: the real addresses, the real hours, the real stops, the real route. A vague one turns into guesswork about the parts you left out, and the guesswork is never in your favor.',
      },
      {
        type: 'callout',
        title: 'Why we will not quote you off a guess',
        text: 'A vague request comes back to you either padded against everything it might turn out to be, or as a figure that falls apart the moment the real details show up. Neither is much use for planning. The fastest route to an honest number is a specific day, and when you talk it through with us the person building the quote is the person who dispatches the vehicle — so the figure is not an estimate passed down a chain to somebody who has never seen your route. Reach that person on 630-624-3448, Mon – Sun, 9:00 am – 5:00 pm; charters themselves operate 24/7.',
        links: [
          {
            phrase: 'talk it through with us',
            href: '/contact',
          },
        ],
      },
      {
        type: 'p',
        text: 'It does not have to be perfect. It has to be honest. Mark which parts are firm and which are still moving, and we will tell you what changes if the moving parts move.',
      },
      {
        type: 'h2',
        text: 'What should I have ready when requesting a quote?',
      },
      {
        type: 'p',
        text: 'A short list, and not the same list as the eight inputs above — this is what to send, not what moves the figure. With these we can work up the trip; if one or two are still open, send what you have and flag them as open.',
      },
      {
        type: 'checklist',
        title: 'Send this with your request',
        items: [
          'Trip date: the calendar date, plus a second choice if the date can move',
          'Pickup location: a street address, not a neighborhood or a landmark',
          'Destination: the venue name, and its address if you have both',
          'Pickup time: when the group needs to be rolling, not when people start arriving',
          'Approximate return time: an estimate is fine, and say so if the end is open-ended',
          'Passenger count: everyone who boards, chaperones and staff included',
          'Any additional stops: in order, with rough timing for each',
          'Preferred vehicle, if known: otherwise we name the one that fits the count',
        ],
      },
    ],
    cta: {
      head: "Have the basics? We'll price the trip.",
      label: 'Get a quote',
      href: '/#quote-form',
    },
    meta: {
      title: 'How Much Does a Charter Bus Cost? | Chicago Super Coach',
      description: 'Passenger count, hours, distance, date and stops all move the number on a Chicago charter quote. Here is how each one works, and what to have ready.',
    },
  },
  {
    slug: 'what-size-charter-bus-do-i-need',
    title: 'What Size Charter Bus Does Your Group Need?',
    summary: "From a 13-person executive van to a full-size coach, here's how to choose a vehicle without paying for space you don't need.",
    coordinate: 'Four sizes · 13–57 seats',
    intro: 'It is seven in the morning, forty-six people are on the sidewalk with their bags, and the vehicle at the curb seats forty-four. Two of them are about to be told they are riding separately, and the day starts with someone deciding which two. Getting that settled long before the day is what this guide is for, along with the opposite mistake — rounding up to a size the day never called for.',
    image: {
      src: sizeImage,
      alt: 'The aisle of a Chicago Super Coach motorcoach, looking down rows of high-back reclining seats',
      position: 'center 55%',
      source: "The operator's own coach interior — the same photograph used on /fleet.",
    },
    published: '2026-08-15',
    blocks: [
      {
        type: 'p',
        text: 'Start with a number you can stand behind. Not the invite list and not the RSVP count — the number of people who will actually be standing at the curb, including chaperones, coaches, coordinators, and anyone riding one direction only. That is the number a vehicle gets matched to, and it is the number we quote against.',
      },
      {
        type: 'checklist',
        title: 'What decides which vehicle fits',
        items: [
          'Everyone who takes a seat — passengers, chaperones and staff, plus anyone joining for the return leg only',
          'Anyone driving themselves and meeting you there, so they are not counted twice',
          'Suitcases, equipment bags, instrument cases and boxes',
          'How long the longest single leg runs, door to door',
          'Whether the number is firm or still moving',
        ],
      },
      {
        type: 'h2',
        text: 'The four sizes we run',
      },
      {
        type: 'p',
        text: 'Every capacity below is printed as a range rather than a single figure, because seat count varies by configuration; if your number sits near a ceiling, we confirm the exact seat count on the vehicle we assign when we quote rather than quietly promising you the top of a range. Read across to the top figure of each range first — that is the number that tells you whether your group fits at all. A group smaller than the bottom of the smallest range is not too small to ask, and it travels in the Executive Sprinter Van.',
      },
      {
        type: 'fleetTable',
      },
      {
        type: 'p',
        text: 'The usual answer is the smallest vehicle whose top figure covers your group — there is no sense moving empty seats across the city. The rest of this guide is the set of cases where that answer is wrong. Photographs of all four are on the fleet page.',
        links: [
          {
            phrase: 'the fleet page',
            href: '/fleet',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Executive Sprinter Van',
      },
      {
        type: 'p',
        text: 'The van is the answer when the group was never large enough for splitting it to be the question. It also parks where a coach cannot — a hotel entrance, an office driveway, an airport curb — so the day loses the walk between the vehicle and the door, which on a short hop is most of what people notice. Its tight edge is bags rather than seats: a full load heading to a terminal with checked luggage is a different problem from the same load heading to dinner, so tell us which one you are. Corporate work that never needs a full coach starts here.',
        links: [
          {
            phrase: 'Corporate work',
            href: '/services/corporate',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Small Coach Bus',
      },
      {
        type: 'p',
        text: 'This is the size that answers the headcount with no other good answer: too many for the van, a long way short of filling the largest size. Two vans would seat the same people and buy you nothing but a second set of arrival times. The wedding version — ceremony, photos, reception, all on one vehicle — is where it earns its place, because the group that has to move together is usually far smaller than the guest list. It is also the size where a late swing of five people changes the answer, so give us a range if the count is still live.',
        links: [
          {
            phrase: 'The wedding version',
            href: '/services/weddings',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Coach Bus',
      },
      {
        type: 'p',
        text: 'Most groups arrive at this size by elimination: past what the Small Coach Bus seats, not near enough the largest size to justify it. That makes an unsettled headcount matter more here than anywhere else, because nothing sits between this size and the Supercoach Bus — a count that drifts over the top of its range does not move you into a slightly larger vehicle, it moves the whole group up a size. A school trip is the usual version of that, since rosters gain people in the last week and rarely lose them.',
        links: [
          {
            phrase: 'A school trip',
            href: '/services/school',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Supercoach Bus',
      },
      {
        type: 'p',
        text: 'The largest size we run, and the one to ask about when the alternative is splitting the group. Two parts of its specification bear on sizing rather than on comfort alone: high back leather reclining seats and a USB charging port at every seat are what let a full load hold up over a long day instead of merely fitting into one. Stadium days are where the size is least negotiable — sporting events put your whole group through one set of gates inside one window, and two arrivals mean two walks in. Above what a Coach Bus seats, this is the size we quote.',
        links: [
          {
            phrase: 'sporting events',
            href: '/services/sporting-events',
          },
        ],
      },
      {
        type: 'callout',
        title: 'Past the largest size',
        text: 'The Supercoach Bus is the ceiling for a single vehicle, and the table above prints where that ceiling sits. Past it, the trip runs on more than one vehicle, and which ones depends on what is free on your date — so it gets confirmed with you directly instead of published as a formula. Send us the date and the number and we will tell you what it takes.',
        links: [
          {
            phrase: 'what is free on your date',
            href: '/guides/how-far-in-advance-book-charter-bus',
          },
          {
            phrase: 'Send us the date and the number',
            href: '/contact',
          },
        ],
      },
      {
        type: 'h2',
        text: 'What a headcount does not tell you',
      },
      {
        type: 'h3',
        text: 'Luggage',
      },
      {
        type: 'p',
        text: 'Forty passengers with day bags and forty with rolling suitcases are not the same booking. The Supercoach Bus is the only size whose luggage arrangement we publish — overhead space, with undercarriage luggage available on request. For the other three we have not published a specification, so ask us what one of them actually holds before you plan around it. We would rather answer the question than print a guess.',
      },
      {
        type: 'h3',
        text: 'Equipment and gear',
      },
      {
        type: 'p',
        text: 'Gear riding in the cabin takes seats. A team with equipment bags, a band with instrument cases, a trade show crew with pop-up displays and boxes of collateral can all clear the headcount and still be short of room. Count the gear as if it were passengers, or tell us what it is and we will tell you where it goes. It is one of the things that makes youth group and team travel different from an adult outing of the same size.',
        links: [
          {
            phrase: 'youth group and team travel',
            href: '/services/youth-groups',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Fitting and being comfortable are different questions',
      },
      {
        type: 'p',
        text: 'A vehicle at its stated capacity is full. That is a non-event on a short hop to the Museum Campus and a long stretch on a run out to the suburbs, where people want a bag beside them, a coat somewhere, and no elbow negotiation. If your group sits a handful under a ceiling, moving up a size gives the whole group room rather than giving anyone a luxury. What that trade does to a quote is a separate subject, and what goes into a charter price covers it.',
        links: [
          {
            phrase: 'what goes into a charter price',
            href: '/guides/charter-bus-cost-chicago',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Longer trips change the calculation',
      },
      {
        type: 'p',
        text: 'On a short hop across the Loop, a bus at its limit barely registers. Everyone is seated for the length of one song and out. On a run up Lake Shore Drive, or a day out and back through the suburbs with several stops in it, the same bus is a different experience: bags come out of the racks, coats end up on seats, people spread out, and somebody sleeps.',
      },
      {
        type: 'p',
        text: 'So the rule of thumb inverts with time in the seat. Short urban runs can size tight. Anything over an hour in the seat, or a day where the group stays with the vehicle between stops, should size with room to spare — round up rather than down, especially when the day has several legs.',
      },
      {
        type: 'h2',
        text: 'One vehicle, one headcount, one arrival',
      },
      {
        type: 'p',
        text: 'Two smaller vehicles will seat the same people as one larger one, and it is not the same trip. Two means two counts at every stop, two arrival times, and two drivers working one timeline from different points in traffic.',
      },
      {
        type: 'p',
        text: 'It shows up hardest at stadiums, where two coaches do not necessarily end up parked in the same place, and the group that got there first waits for the group that did not. If one bus seats everyone, take it.',
      },
      {
        type: 'h2',
        text: 'When the number is still moving',
      },
      {
        type: 'p',
        text: 'Plenty of groups book before the count is final. Weddings do it, conferences do it, and school trips do it every year. Book to the number you honestly expect rather than the number you are hoping for, and say out loud that it is a range — a group that might land anywhere between 38 and 46 is a different conversation from a firm 40.',
      },
      {
        type: 'p',
        text: "Say it early, as well. Tell us the range when you first ask rather than after a size has been matched to the trip: we quote against the number you give us, and a group that grows past that size's ceiling becomes a different vehicle and a new quote. How much runway you have before the count has to firm up is its own question, and how far ahead to ask works through it.",
        links: [
          {
            phrase: 'how far ahead to ask',
            href: '/guides/how-far-in-advance-book-charter-bus',
          },
        ],
      },
    ],
    cta: {
      head: 'Not sure which one fits?',
      body: "Tell us the headcount and the trip. We'll help match the group to the right vehicle.",
      label: 'Get a quote',
      href: '/#quote-form',
    },
    meta: {
      title: 'What Size Charter Bus Do You Need? | Chicago Super Coach',
      description: 'The largest vehicle we run seats up to 57 and the smallest is a 13–16 passenger van. Match a Chicago group to one by luggage, gear and time in the seat.',
    },
  },
  {
    slug: 'how-far-in-advance-book-charter-bus',
    title: 'How Far in Advance Should You Book a Charter Bus?',
    summary: "Some trips can come together quickly. Others should be reserved early. Here's when to start planning and what can affect availability.",
    coordinate: 'Peak Saturdays · Lollapalooza · McCormick',
    intro: 'Somewhere on the Saturday you are planning around, the coach your group needs is already committed to somebody else. That is what running out means here — not a sold-out product, but a vehicle and a driver held against a date that somebody asked for first. Which dates reach that point early, and what is still open when they do, is what this guide is about.',
    image: {
      src: bookingImage,
      alt: 'A crowd of wedding guests applauding as the couple walks past at an outdoor reception',
      position: 'center 45%',
      source: 'Pexels — wedding guests, by Taha Samet Arslan. Free for commercial use.',
    },
    published: '2026-08-15',
    blocks: [
      {
        type: 'p',
        text: 'A Tuesday in February and a Saturday in June are different problems, and the same group asking about both would get two different answers from us. The February trip usually has the whole fleet to choose from. The June one is competing with every wedding, tournament and company outing in the city.',
      },
      {
        type: 'p',
        text: 'We own the vehicles we run and the drivers work for us, so you are talking to the operator rather than a booking desk and an availability answer is ours to give. It also means capacity is finite: each one can only be in one place at a time, and a date it is already committed to is a date it cannot be anywhere else.',
        links: [
          {
            phrase: 'the vehicles we run',
            href: '/fleet',
          },
        ],
      },
      {
        type: 'h2',
        text: 'The biggest vehicles go first',
      },
      {
        type: 'p',
        text: 'Sizes do not fill evenly. Above a certain headcount only the Supercoach Bus seats the group in a single run, so on a busy Saturday it is the first thing spoken for. Which size your own group falls into is worked out in the guide to choosing one. Smaller groups have more than one workable answer, which is why a smaller vehicle is easier to place close to a date.',
        links: [
          {
            phrase: 'the guide to choosing one',
            href: '/guides/what-size-charter-bus-do-i-need',
          },
        ],
      },
      {
        type: 'p',
        text: 'If the vehicle that fits your headcount is already committed, the fallback is two vehicles instead of one, which is a different trip for your organizers. That works, and we do it. It is just not the trip most people pictured when they asked.',
      },
      {
        type: 'h2',
        text: 'Dates that go before the rest of the calendar',
      },
      {
        type: 'p',
        text: 'Some dates in Chicago carry far more group travel than others, and they tend to be spoken for earlier. These are tendencies rather than rules — a quiet Saturday in October happens — but if your date is on this list, treat it as one where waiting narrows what is left.',
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Saturdays from late spring through October, when weddings, tournaments and company outings all want the same day',
          'Home-game days at Wrigley Field, Rate Field and Soldier Field, where the traffic pattern matters as much as the vehicle',
          "Lollapalooza weekend in Grant Park, the Chicago Marathon and St. Patrick's Day, all of which close streets as well as fill vehicles",
          'Big convention weeks at McCormick Place, when hotel-to-venue shuttles are running all day for somebody',
        ],
        links: [
          {
            phrase: 'Home-game days',
            href: '/services/sporting-events',
          },
        ],
      },
      {
        type: 'p',
        text: 'Holidays work differently. They are not one busy Saturday but a few busy evenings: Thanksgiving week and the stretch between Christmas and New Year put company parties, family groups and airport runs on the same handful of nights, while the days on either side stay ordinary. If your date sits in that window, the hour you want is as much of the question as the date.',
      },
      {
        type: 'p',
        text: 'A big event does not only take vehicles, it takes road. Street closures downtown, a shut section of Lake Shore Drive and heavy Illinois Tollway traffic all change what a realistic pickup time looks like, and that is a better conversation to have while the date is still far off.',
      },
      {
        type: 'h2',
        text: 'By the kind of trip you are planning',
      },
      {
        type: 'h3',
        text: 'Weddings',
      },
      {
        type: 'p',
        text: 'The date does not move, which makes this the one trip where a late start has nowhere to go. Couples usually settle the venue and the hotel block well before the transportation, and the hotel block is what determines the shuttle. Once you know where guests are sleeping and when the ceremony starts, you know enough to ask about wedding guest shuttles.',
        links: [
          {
            phrase: 'wedding guest shuttles',
            href: '/services/weddings',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Prom and graduation',
      },
      {
        type: 'p',
        text: 'A graduation ceremony is a fixed time the way a wedding ceremony is: the venue has a slot, the slot does not move, and everyone in the metro is holding one within the same few weeks. Prom is the same compression with a different organizer — often a parent committee or a small group of staff working around chaperone counts and a hall that was booked a year ago.',
      },
      {
        type: 'p',
        text: 'The part most organizers underestimate is the return. Prom nights end late and frequently later than the plan said, and a late return belongs in the booking rather than being asked for at midnight. Tell us the end of the night when you tell us the start of it.',
      },
      {
        type: 'h3',
        text: 'School trips and youth groups',
      },
      {
        type: 'p',
        text: 'Schools carry an approval process the transportation has to fit inside — a district office, a purchase order, a principal who wants driver details in writing. That paperwork takes longer than the phone call does, so school trips tend to get asked about earlier than their departure date alone would suggest.',
        links: [
          {
            phrase: 'school trips',
            href: '/services/school',
          },
        ],
      },
      {
        type: 'p',
        text: "Club teams, scouts and church programs run on a different rhythm. Tournament brackets and retreat dates arrive when they arrive, sometimes with a few days' notice. If you organize for a youth group, the useful habit is to tell us the dates the moment the season calendar exists, even while the details are unsettled.",
        links: [
          {
            phrase: 'youth group',
            href: '/services/youth-groups',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Corporate transportation',
      },
      {
        type: 'p',
        text: 'Conference and event dates are published long before anyone arranges transportation, so the demand on those dates is visible to everyone well ahead. A repeating loop is also more than a vehicle: it is a run sheet, a set of pickup points and a timing pattern we would rather build with you than improvise. If you need staff shuttles across a multi-day event, that build is the part worth starting early. A single airport transfer is more forgiving.',
        links: [
          {
            phrase: 'staff shuttles',
            href: '/services/corporate',
          },
        ],
      },
      {
        type: 'h3',
        text: 'Sporting events',
      },
      {
        type: 'p',
        text: 'Regular-season schedules come out well ahead, so a season-ticket group or a company outing can be settled long before the game. Playoff scheduling is the opposite — dates firm up days out, and every group in the city wants the same evening. If you are planning around a deep run that may never happen, tell us what you would want while the date is still hypothetical.',
      },
      {
        type: 'h2',
        text: 'What a late start actually narrows',
      },
      {
        type: 'p',
        text: 'Waiting does not close a door so much as it shortens the list. What follows is the difference between choosing and taking what is free.',
      },
      {
        type: 'table',
        columns: [
          'What you are choosing',
          'With time to work',
          'Close to the date',
        ],
        rows: [
          [
            'Vehicle size',
            'The vehicle that seats your group in one run',
            'Whatever size is open, which can mean two vehicles',
          ],
          [
            'Departure and return times',
            'Built around your ceremony, bell schedule or kickoff',
            'Built around when a driver is free',
          ],
          [
            'Multiple pickup points',
            'A loop that collects several hotels or schools',
            'Often a single pickup, to protect the schedule',
          ],
          [
            'A long day or a late return',
            'Planned in from the start',
            "Depends on how that driver's day is already committed",
          ],
        ],
        caption: 'Tendencies, not policy. Every date gets its own answer.',
      },
      {
        type: 'h2',
        text: 'Booking at the last minute?',
      },
      {
        type: 'p',
        text: 'Ask anyway. Short-notice requests are normal here — plans change, a vendor falls through, someone works out on Wednesday that thirty people need to be somewhere on Saturday. We would rather give you a straight answer than have you assume we cannot help and never call.',
      },
      {
        type: 'callout',
        title: 'What a late request depends on',
        text: 'One thing: whether a vehicle and a driver are free on your date. If they are, we may still be able to take the trip. We cannot promise they will be, and we will not pretend otherwise to keep you on the phone. Send us the trip details or call 630-624-3448. The office is open Mon – Sun, 9:00 am – 5:00 pm; charters operate 24/7, so a departure before dawn or a return long after midnight is an ordinary trip for us to run.',
        links: [
          {
            phrase: 'Send us the trip details',
            href: '/#quote-form',
          },
        ],
      },
      {
        type: 'p',
        text: 'Three things make that call shorter, whether you are asking in January for June or on Wednesday for Saturday. They are the ones that bear on timing rather than on the trip itself.',
      },
      {
        type: 'checklist',
        title: 'The three that decide how much runway you have',
        items: [
          'Whether the date is fixed or can move by a day',
          "The hard deadline the trip is built around — a ceremony, a bell schedule, a kickoff, a flight out of O'Hare or Midway",
          'Who is reachable on the day itself, and on what number',
        ],
      },
      {
        type: 'p',
        text: 'The rest of it — addresses, times, headcount, stops — is the same list whatever your lead time, and what a quote is built from sets it out in full.',
        links: [
          {
            phrase: 'what a quote is built from',
            href: '/guides/charter-bus-cost-chicago',
          },
        ],
      },
      {
        type: 'h2',
        text: 'Ask while the date is still yours',
      },
      {
        type: 'p',
        text: 'There is no deadline we can print that would be true of every date. What is open on a given Saturday is a fact about that Saturday — which vehicles are already committed, which drivers are already spoken for — and it moves week to week without warning you first. That is the one thing you cannot work out from a calendar.',
      },
    ],
    cta: {
      head: 'Know the date? Start there.',
      label: 'Get a quote',
      href: '/#quote-form',
    },
    meta: {
      title: 'When to Book a Charter Bus in Chicago | Chicago Super Coach',
      description: 'Waiting narrows the list to whatever is still free on your date, and in Chicago that can mean two vehicles instead of one. These are the dates that go early.',
    },
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** The other guides, in publication order. Drives the related-guide cards. */
export function relatedGuides(slug: string): Guide[] {
  return GUIDES.filter((g) => g.slug !== slug);
}

export function guideHref(guide: Guide): string {
  return `/guides/${guide.slug}`;
}

/**
 * Reading time, derived from the article's own words rather than typed. 220
 * words per minute is the ordinary figure for adult silent reading of
 * non-technical prose; it is rounded up and floored at one minute, because a
 * "0 min read" is a bug wearing a number.
 */
export function readingMinutes(guide: Guide): number {
  let words = guide.intro.split(/\s+/).length;

  for (const block of guide.blocks) {
    if ('text' in block) words += block.text.split(/\s+/).length;
    if ('items' in block) {
      for (const item of block.items) words += item.split(/\s+/).length;
    }
    if (block.type === 'table') {
      for (const row of block.rows) {
        for (const cell of row) words += cell.split(/\s+/).length;
      }
    }
  }

  return Math.max(1, Math.round(words / 220));
}
