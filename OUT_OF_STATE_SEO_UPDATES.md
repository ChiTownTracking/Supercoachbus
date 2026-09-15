# Out-of-state page update — September 15, 2026

## URL and search focus

Changed the canonical URL to `/services/long-distance-charter-bus-rental` at the owner's request. The previous `/services/out-of-state` URL permanently redirects to it, including the trailing-slash variant. Internal links, the sitemap, structured data, and quote-form defaults use the new URL. The retired URL is excluded from the sitemap and serves only as a redirect.

| Keyword from the screenshots | Placement |
| --- | --- |
| long distance charter bus rental | URL, SEO title, H1, meta description, and introductory service copy |
| charter bus rental for long distance | FAQ: “How do I arrange a charter bus rental for long distance travel?” |
| charter bus rental long distance | Covered by the natural phrasing above; the awkward word order is not repeated as a separate exact-match phrase |
| long distance charter bus rental cost | H2: “What Does a Long Distance Charter Bus Rental Cost?” and the detailed pricing section |
| out of state transportation services | Main service-content H2 and the existing service name |

SEO title: **Long Distance Charter Bus Rental | Chicago Super Coach**

H1: **Long Distance Charter Bus Rental**

Meta description: Long distance charter bus rental from Chicago for out-of-state and multi-day trips. Lavatories on select Supercoach buses. Request your trip quote online.

## What customers can now find

- One-way, round-trip, overnight, and multi-day trip planning.
- Pricing factors covering vehicle choice, dates, duration, mileage, pickup points, driver arrangements, and potentially applicable charges. No invented dollar rates.
- A dedicated lavatory section using the supplied photo, explicitly limited to select Supercoach buses with availability confirmed before booking.
- Luggage, accessibility requests, rest stops, and driver scheduling information.
- Milwaukee and Indianapolis itinerary examples with two licensed destination photos, presented as examples to discuss with the reservation team.
- Eight trip-specific FAQs in native, keyboard-accessible accordions. Questions and answers are present in the initial HTML and match the existing FAQ structured data.
- On-page quote form, out-of-state defaults, vehicle selection, and booking actions. The quote notes now prompt for lavatory requests. The shared booking-information section was subsequently removed from individual service and area pages at the owner's request.

Internal links connect relevant school, sports, corporate, airport, fleet, service-area, and pricing-guide pages. Quote links remain on this page. The driver-planning section links to the [official FMCSA passenger-carrier rules](https://www.fmcsa.dot.gov/safety/carrier-safety/hours-service-motor-carriers-passengers).

Images are stored locally and delivered through Astro responsive image optimization with dimensions and lazy loading. [Photo credits and license details](src/assets/images/out-of-state/SOURCES.md).

## Google guidance used

- [Descriptive URL guidance](https://developers.google.com/search/docs/crawling-indexing/url-structure).
- [Keyword stuffing policy](https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing). Keywords appear in relevant headings and answers, without lists of search phrases or hidden keyword text.

## Verification

- Production build passed; all 31 SEO tests passed.
- Out-of-state HTML checks passed for canonical URL, one H1, unique IDs, working fragment targets, a single on-page form, selected service/duration defaults, payment terms, eight visible FAQ/schema pairs, and all three new responsive images.
- The existing landing-page suite has four failing tests arising from earlier changes outside this update: `/services` is now a directory without an inline form, and the tests expect old payment-copy wording removed from the shared form. The current payment terms remain in the booking-information section. This update does not alter the directory or weaken those tests.
- Browser discovery returned no available browser, so visual and interactive browser testing could not be completed. No real quote request was submitted.
