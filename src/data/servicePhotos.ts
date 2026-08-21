import type { ImageMetadata } from 'astro';

import corporate from '../assets/images/services/corporate-conference-pexels.jpg';
import school from '../assets/images/svc-school.jpg';
import sporting from '../assets/images/services/wrigley-field-crowd-pexels.jpg';
import weddings from '../assets/images/trolley-coach.png';
import youth from '../assets/images/services/youth-team-huddle-pexels.jpg';

export interface ServicePhoto {
  src: ImageMetadata;
  alt: string;
  /**
   * Stock illustrates the trip type; it is never evidence of this operator's
   * fleet. The source stays beside the asset for later auditing or replacement.
   */
  source?: { label: string; href: string };
}

export const SERVICE_PHOTOS: Record<string, ServicePhoto> = {
  corporate: {
    src: corporate,
    alt: 'Conference attendees seated in an auditorium before a presentation',
    source: {
      label: 'ICSA on Pexels',
      href: 'https://www.pexels.com/photo/man-standing-in-front-of-people-1709003/',
    },
  },
  school: {
    src: school,
    alt: 'A school group listening to a teacher during a museum field trip',
  },
  'sporting-events': {
    src: sporting,
    alt: 'A packed crowd watching a baseball game at Wrigley Field in Chicago',
    source: {
      label: 'Alec Adriano on Pexels',
      href: 'https://www.pexels.com/photo/crowd-enjoying-baseball-game-at-iconic-stadium-33715952/',
    },
  },
  weddings: {
    src: weddings,
    alt: 'A white coach bus and a white trolley parked side by side outside a wedding venue',
  },
  'youth-groups': {
    src: youth,
    alt: 'A youth soccer team huddled together on the field',
    source: {
      label: 'Luis Andres Villalon Vega on Pexels',
      href: 'https://www.pexels.com/photo/youth-soccer-team-huddle-on-sunny-field-34742833/',
    },
  },
};
