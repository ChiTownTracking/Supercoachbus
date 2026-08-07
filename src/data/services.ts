/**
 * The five services. Copy is original to this rebuild — the old site's wording
 * is not carried over.
 *
 * Each entry has to earn a distinct value proposition. Five near-identical
 * pages that swap one noun is exactly the templated duplication the sister-site
 * rule forbids, and it is also what search engines discount. The differentiator
 * is what each buyer is actually worried about, which is different every time.
 */

export interface Service {
  slug: string;
  /** Nav and card label. */
  name: string;
  /** The blade destination line — where these passengers are going. */
  destination: string;
  /** The page's own H1. */
  headline: string;
  /** One-sentence value proposition. Distinct per service. */
  proposition: string;
  /** Two or three paragraphs of body copy. */
  body: string[];
  /** The specific worry this buyer has, and how it is answered. */
  concerns: { label: string; answer: string }[];
  meta: { title: string; description: string };
}

export const SERVICES: Service[] = [
  {
    slug: 'corporate',
    name: 'Corporate Charter',
    destination: 'Hotel · Venue · Office',
    headline: 'Corporate charter and staff shuttles in Chicago',
    proposition:
      'A repeating loop that runs on your schedule, so attendees stop asking how they are getting there.',
    body: [
      'Conferences, sales meetings, client events and office moves all fail the same way: people arrive in ones and twos, late, by rideshare, on their own expense reports. A chartered coach turns that into a single departure time you control.',
      'We run continuous shuttle loops between hotels, venues and offices, or one-way transfers on a fixed schedule. Tell us the pattern you need and we will run it — a morning inbound, an evening outbound, or a loop every thirty minutes across an all-day event.',
      'Every seat has a USB charging port and a seatbelt, and the coach has overhead and undercarriage luggage space, so a team travelling with equipment or collateral is not improvising.',
    ],
    concerns: [
      {
        label: 'It has to look organized',
        answer:
          'One vehicle, one departure time, one driver who has your run sheet. Attendees follow a schedule instead of a group chat.',
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
    meta: {
      title: 'Corporate Charter Bus & Staff Shuttle Service | Chicago Super Coach',
      description:
        'Corporate charter bus and staff shuttle service in Chicago. Continuous hotel-to-venue loops or scheduled transfers for conferences, meetings and company events. Call 630-624-3448.',
    },
  },
  {
    slug: 'school',
    name: 'School Shuttle',
    destination: 'Field Trip · Campus · Event',
    headline: 'School shuttle and student group transportation',
    proposition:
      'Licensed, insured, drug-tested drivers and a seatbelt on every seat — the things a district actually asks about.',
    body: [
      'Booking transportation for students means answering to someone: a principal, a district office, a parent who wants to know who is driving. The questions are always about the driver and the vehicle, not the price.',
      'Our drivers are licensed and experienced, insured, and drug tested. The coach has seatbelts on all seats and is maintained on a regular schedule. We have carried student groups from elementary field trips through university travel.',
      'Field trips, competitions, campus visits, band and choir travel, and end-of-year events all work the same way: give us the pickup, the destination, and the times you need to be back.',
    ],
    concerns: [
      {
        label: 'Who is driving my students',
        answer:
          'Licensed, experienced, insured drivers who are drug tested. We can provide driver details in advance for district records.',
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
    meta: {
      title: 'School Bus Charter & Student Group Transportation | Chicago Super Coach',
      description:
        'School shuttle and student group transportation in Chicago. Licensed, insured, drug-tested drivers and seatbelts on every seat for field trips, competitions and campus travel. Call 630-624-3448.',
    },
  },
  {
    slug: 'sporting-events',
    name: 'Sporting Events',
    destination: 'Wrigley · Rate · Soldier · United',
    headline: 'Chicago sporting event charters',
    proposition:
      'Game-day parking and traffic are the whole problem. A charter drops your group at the gate and is waiting after.',
    body: [
      'Cubs, White Sox, Bears, Bulls and Blackhawks games all share one logistics problem: parking near the venue is expensive, scarce, and nowhere near where your group wants to be. Twelve cars means twelve parking searches and twelve different arrival times.',
      'One coach means one arrival. We drop your group close in, park in the charter lot, and are in position when the game ends — which is the part that matters, because that is when everyone else is walking to their cars.',
      'This works the same for a company outing, a season-ticket group, a birthday, or a youth team travelling to a tournament.',
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
    meta: {
      title: 'Sporting Event Charter Bus Chicago | Cubs, Sox, Bears, Bulls | Chicago Super Coach',
      description:
        'Charter bus service to Chicago sporting events. Group transportation to Cubs, White Sox, Bears, Bulls and Blackhawks games — skip game-day parking. Call 630-624-3448.',
    },
  },
  {
    slug: 'weddings',
    name: 'Wedding Transportation',
    destination: 'Ceremony · Photos · Reception',
    headline: 'Wedding guest shuttles and party transportation',
    proposition:
      'The date does not move. Guest shuttles run on the timeline you already built, including the late return nobody plans for.',
    body: [
      'Wedding transportation is a timing problem wearing a formal outfit. Guests need to get from the hotel to the ceremony, the wedding party needs to get to photos, and at the end of the night a lot of people need to get back safely.',
      'We run the loops your timeline needs: a guest shuttle from the hotel block, a wedding party transfer between ceremony, photo locations and reception, and a late return so nobody is driving home from an open bar.',
      'One coach moves the whole guest list in a single run, which is usually simpler than staging several smaller vehicles — and it means one driver holding one timeline rather than a convoy trying to stay together.',
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
  },
  {
    slug: 'youth-groups',
    name: 'Youth Groups',
    destination: 'Tournament · Retreat · Outing',
    headline: 'Youth group and team transportation',
    proposition:
      'Built for chaperones: everyone in one vehicle, counted once, with luggage and gear that actually fits.',
    body: [
      'Church groups, club teams, scouts and camp programs travel with a ratio of adults to kids and a headcount that has to be right every single time the group moves. Splitting across private cars makes that harder at every stop.',
      'One coach keeps the group together and the count simple. Overhead and undercarriage luggage space means gear, equipment bags and overnight luggage travel with the group instead of in a separate parent convoy.',
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
