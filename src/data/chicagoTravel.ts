import type { InlineLink } from '../lib/inlineLinks';
import { TRANSPORT_LINKS as T, OFFICIAL_LINKS as O } from './transportationLinks';

/** Local transportation copy, shared by the homepage and area directory. */
export interface TravelSection {
  id: string;
  heading: string;
  intro: string;
  cards?: { name: string; description: string; links?: InlineLink[] }[];
  groups?: { name: string; locations: string[] }[];
  paragraphs?: { text: string; links: InlineLink[] }[];
  cta?: { label: string; href: string };
}

export const CHICAGO_NEIGHBORHOODS: TravelSection = {
  id: 'chicago-neighborhoods',
  heading: 'Group Transportation by Chicago Neighborhood',
  intro:
    "Chicago Super Coach serves downtown, the North Side, the South Side, and nearby neighborhoods. We coordinate transportation for local events, airport transfers, corporate travel, school trips, weddings, and group outings.",
  cards: [
    { name: 'The Loop', description: 'Corporate offices, hotels, events, and downtown group travel.' },
    { name: 'River North', description: 'Transportation for hotels, restaurants, corporate events, and group outings.' },
    { name: 'Magnificent Mile', description: 'Shopping groups, visitors, corporate travelers, and hotel guests.' },
    { name: 'West Loop', description: 'Transportation for restaurants, businesses, weddings, and private events.' },
    { name: 'South Loop', description: 'Conventions, events, schools, hotels, and downtown travel.' },
    { name: 'Lincoln Park', description: 'Comfortable transportation for schools, families, sporting events, and outings.' },
    { name: 'Wrigleyville', description: 'Group transportation for Cubs games and sporting events.' },
    { name: 'Hyde Park', description: 'Transportation for universities, museums, events, and group trips.' },
    { name: "O'Hare Area", description: 'Airport transfers and group transportation.' },
    { name: 'Midway Area', description: 'Airport transportation and travel to Chicago destinations.' },
  ],
};

export const CHICAGO_SERVICE_AREAS: TravelSection = {
  id: 'chicago-service-areas',
  heading: 'Charter Bus Service in Chicago & Surrounding Areas',
  intro:
    "Chicago Super Coach provides private charter bus transportation throughout Chicago and nearby communities. We serve downtown Chicago, local neighborhoods, O'Hare and Midway areas, and surrounding suburbs for corporate travel, school trips, weddings, sporting events, conventions, and private group outings.",
  groups: [
    {
      name: 'Chicago',
      locations: [
        'Downtown Chicago', 'The Loop', 'River North', 'West Loop', 'South Loop',
        'Lincoln Park', 'Hyde Park', 'Wrigleyville', "O'Hare", 'Midway',
      ],
    },
    {
      name: 'Suburbs',
      locations: [
        'Elk Grove Village', 'Rosemont', 'Schaumburg', 'Des Plaines', 'Naperville',
        'Evanston', 'Skokie', 'Arlington Heights', 'Oak Brook', 'Oak Park',
      ],
    },
  ],
  paragraphs: [{
    text: "Our Rosemont group transportation service connects conventions, hotels, corporate events, and airport transfers. Groups traveling through nearby O'Hare International Airport can arrange O'Hare Airport transportation and compare our vehicle options.",
    links: [
      { phrase: 'Rosemont group transportation', href: T.rosemont },
      { phrase: "O'Hare International Airport", href: O.ohare },
      { phrase: "O'Hare Airport transportation", href: T.ohare },
      { phrase: 'vehicle options', href: T.fleet },
    ],
  }],
  cta: { label: 'View All Service Areas', href: '/service-areas' },
};

export const CHICAGO_AIRPORT_TRANSPORTATION: TravelSection = {
  id: 'chicago-airport-hotel',
  heading: 'Chicago Airport & Hotel Transportation',
  intro:
    'Need group transportation to or from a Chicago airport? We arrange private transfers for corporate groups, school trips, sports teams, wedding guests, tour groups, and travelers staying throughout Chicago.',
  cards: [
    {
      name: "O'Hare Airport Transportation",
      description: "We provide O'Hare Airport group transportation for corporate travelers, school groups, sports teams, families, and visitors arriving at O'Hare International Airport. Arrange Chicago hotel transportation or choose the right vehicle from our coach and Sprinter fleet for airport pickups and transfers.",
      links: [
        { phrase: "O'Hare Airport group transportation", href: T.ohare },
        { phrase: "O'Hare International Airport", href: O.ohare },
        { phrase: 'Chicago hotel transportation', href: T.hotels },
        { phrase: 'coach and Sprinter fleet', href: T.fleet },
      ],
    },
    {
      name: 'Midway Airport Transportation',
      description: 'Arrange private Midway Airport transportation for groups arriving at or departing from Midway International Airport. Add a hotel transfer to your itinerary or request a group transportation quote with your flight details.',
      links: [
        { phrase: 'Midway Airport transportation', href: T.midway },
        { phrase: 'Midway International Airport', href: O.midway },
        { phrase: 'hotel transfer', href: T.hotels },
        { phrase: 'group transportation quote', href: T.quote },
      ],
    },
    {
      name: 'Chicago Hotel Transportation',
      description: "Keep your group together with Chicago hotel transportation between hotels, airports, restaurants, attractions, and event locations. Connect your stay with O'Hare airport transfers or Chicago convention transportation for meetings and events.",
      links: [
        { phrase: 'Chicago hotel transportation', href: T.hotels },
        { phrase: "O'Hare airport transfers", href: T.ohare },
        { phrase: 'Chicago convention transportation', href: T.conventions },
      ],
    },
  ],
  cta: { label: 'Get an Airport Transportation Quote', href: '/#quote-form' },
};

export const CHICAGO_ATTRACTIONS: TravelSection = {
  id: 'chicago-attractions',
  heading: 'Explore Chicago with Private Group Transportation',
  intro:
    'Traveling around Chicago with a group? A private coach makes it easier to visit local attractions without coordinating multiple cars, rideshares, or public transportation.',
  cards: [
    { name: 'Millennium Park', description: 'Sightseeing, family outings, and Chicago group tours.' },
    { name: 'Navy Pier', description: 'Transportation for visitors, families, school groups, and private tours.' },
    { name: 'Museum Campus', description: "Travel together to Chicago's major museums and attractions." },
    {
      name: 'Wrigley Field',
      description: 'Planning a group trip to Wrigley Field? Chicago sporting event transportation keeps everyone together for Cubs games. Connect your trip with our Wrigleyville transportation service and compare vehicle sizes to find the right fit.',
      links: [
        { phrase: 'Wrigley Field', href: O.wrigley },
        { phrase: 'Chicago sporting event transportation', href: T.sports },
        { phrase: 'Wrigleyville transportation service', href: T.wrigleyville },
        { phrase: 'vehicle sizes', href: T.fleet },
      ],
    },
    { name: 'United Center', description: 'Transportation for concerts, Bulls games, Blackhawks games, and events.' },
    {
      name: 'McCormick Place',
      description: 'Our Chicago convention transportation connects hotels, airports, and event venues such as McCormick Place for exhibitors, attendees, and corporate groups. Choose a vehicle from our coach and van fleet and request a custom event quote.',
      links: [
        { phrase: 'Chicago convention transportation', href: T.conventions },
        { phrase: 'McCormick Place', href: O.mccormick },
        { phrase: 'coach and van fleet', href: T.fleet },
        { phrase: 'custom event quote', href: T.quote },
      ],
    },
  ],
};

export const CHICAGO_TRAVEL_SECTIONS = [
  CHICAGO_NEIGHBORHOODS,
  // Shorter homepage wording; the dedicated directory keeps its own heading and introduction.
  {
    ...CHICAGO_SERVICE_AREAS,
    heading: 'Transportation in Chicago & Surrounding Areas',
    intro: "We serve downtown, local neighborhoods, O'Hare and Midway, and surrounding suburbs for corporate travel, school trips, weddings, sporting events, conventions, and private outings.",
  },
  CHICAGO_AIRPORT_TRANSPORTATION,
  CHICAGO_ATTRACTIONS,
];
