/**
 * The primary navigation, composed from the pages that actually exist.
 *
 * Every link here is read from the data that builds the routes — the services
 * from SERVICES, the destination and area pages from the transportation pages —
 * so a service that leaves the lineup or a page that is never built cannot
 * survive in the menu as a dead link. Nothing in this file is typed by hand
 * except the headings and the two small `More` entries.
 */

import { LISTED_SERVICES } from './services';
import { TRANSPORTATION_SERVICE_PAGES, LOCATION_PAGES } from './transportationPages';
import { CHICAGO_SERVICE_AREAS } from './chicagoTravel';

export interface NavLink {
  label: string;
  href: string;
  /** The small line under a link in a menu. Never a restatement of the label. */
  note?: string;
}

export interface NavColumn {
  heading: string;
  links?: NavLink[];
  /**
   * Places served that have no page of their own.
   *
   * Plain text rather than links, because the honest destination for all of
   * them is the same directory, and twenty links to one page is neither
   * navigation nor something a search engine reads as such.
   */
  items?: string[];
}

export interface NavMenu {
  columns: NavColumn[];
  /** The way out of the menu to the directory it summarises. */
  footer?: NavLink;
  /** Wide enough for columns. A short list keeps a single narrow panel. */
  wide?: boolean;
}

export interface NavItem {
  label: string;
  href?: string;
  menu?: NavMenu;
  /** Extra path prefixes that should light this item up as current. */
  match?: string[];
}

const servicesMenu: NavMenu = {
  wide: true,
  columns: [
    {
      heading: 'By occasion',
      links: LISTED_SERVICES.map((service) => ({
        label: service.name,
        href: `/services/${service.slug}`,
        note: service.destination,
      })),
    },
    {
      heading: 'By destination',
      links: TRANSPORTATION_SERVICE_PAGES.map((page) => ({
        label: page.name,
        href: page.path,
        note: page.area,
      })),
    },
  ],
  footer: { label: 'View all services', href: '/services' },
};

const areasMenu: NavMenu = {
  wide: true,
  columns: [
    {
      heading: 'Area pages',
      links: LOCATION_PAGES.map((page) => ({
        label: page.name,
        href: page.path,
        note: page.area,
      })),
    },
    ...(CHICAGO_SERVICE_AREAS.groups ?? []).map((group) => ({
      heading: group.name,
      items: group.locations,
    })),
  ],
  footer: { label: 'View all service areas', href: '/service-areas' },
};

const moreMenu: NavMenu = {
  columns: [
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about', note: 'Who runs the coaches' },
        { label: 'Guides', href: '/guides', note: 'Planning a group trip' },
        { label: 'Careers', href: '/careers', note: 'Drive for us' },
      ],
    },
  ],
};

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Fleet', href: '/fleet' },
  { label: 'Services', href: '/services', menu: servicesMenu },
  { label: 'Areas', href: '/service-areas', menu: areasMenu },
  { label: 'Contact', href: '/contact' },
  { label: 'More', menu: moreMenu, match: ['/about', '/guides', '/careers'] },
];
