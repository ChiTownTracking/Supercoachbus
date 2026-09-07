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
    vehicles: ['coach', 'small-coach', 'executive-sprinter'],
    faq: [
      {
        q: 'Can the coach run a loop all day, or is it one transfer?',
        a: 'Either. We run continuous shuttle loops between hotels, venues and offices — a loop every thirty minutes across an all-day event is normal — or one-way transfers on a fixed schedule. Tell us the pattern and we run it.',
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
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'Who will be driving my students?',
        a: 'Licensed, experienced, insured drivers who are drug tested. We can provide driver details in advance for district records.',
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
    vehicles: ['supercoach', 'coach', 'small-coach'],
    faq: [
      {
        q: 'Where does the coach actually drop us?',
        a: 'Close in at the venue, then the coach parks in the charter lot rather than circling for street parking. Your group walks from the drop-off, not from wherever a garage had space.',
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
        a: 'The coach is in position when the game ends, which is the part that matters — that is the moment everyone else starts walking to their cars.',
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
    headline: 'Bridal Party Transportation',
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
        a: 'Yes. Out-of-state is an option on the quote form — tell us the days and the nights away, and the quote is built on the vehicle and driver held for that whole stretch.',
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
 * Services that have outgrown the shared template and ship their own page.
 *
 * `src/pages/services/[service].astro` skips these so it does not generate a
 * second route for a path a static page already owns. Named here rather than
 * as a string literal in the template, because which services have their own
 * page is a fact about the content, and the two lists must never disagree.
 */
export const BESPOKE_SERVICE_PAGES = ['weddings'] as const;
