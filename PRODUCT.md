# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 (existing scaffold). Static output. No UI framework — Astro components only.

## Users

**Primary: the group organizer.** Someone who has been made responsible for moving 13–57 people to a specific place at a specific time, and for whom transportation is one line item on a much longer list. They are rarely a transportation professional:

- **Corporate admin / event coordinator** — shuttling staff or attendees between hotel, venue, and conference. Judged on whether it ran smoothly; buying on reliability and invoiceability, not price.
- **School / district staff** — field trips and student groups. Constrained by district rules; needs licensed, insured, background-checked drivers as a procurement requirement, not a nicety.
- **Wedding party member** — moving guests between ceremony, photos, and reception. High emotional stakes, immovable date.
- **Sports / youth group leader** — teams and fans to Cubs, Sox, Bulls, Blackhawks, Bears games and tournaments.

The job is the same across all four: *get a firm price and a confirmed vehicle, fast, from an operator I can trust with people I'm responsible for.* Most arrive already knowing their date, headcount, and route.

## Product Purpose

Chicago Super Coach rents charter and shuttle buses with professional drivers for group transportation in Chicago and the surrounding area. The site exists to convert an organizer's known trip details into a quote request or reservation — the business closes by phone and email, so the site's job is to earn the contact, not to process a booking end to end.

Success is a qualified inbound quote request: one that carries date, headcount, vehicle type, and route, so the operator can price it without a round trip of questions.

## Positioning

An owner-operated Chicago charter company that drives its own buses — not a broker. The specificity is the position: four named vehicles with published capacities, from a 13–16 passenger Sprinter van to a 50–57 passenger Supercoach, and the one quoted is the one that arrives. A caller gets the actual operator, and the actual bus they were quoted.

Distinct from sister brand **ChiTown Trolley**, which sells an occasion (weddings, holiday trolleys, celebration). Chicago Super Coach sells logistics: capacity, schedule, compliance, arrival. Same company, same trust signals, different buyer intent — the sites must not read as templated from each other.

## Operating Context

- Business closes by phone (630-624-3448) and email; the site's forms feed that pipeline.
- Quote requests carry: name, email, phone, event type, passenger count, duration in hours, vehicle type, date, pickup time, pickup and drop-off locations, and notes. All twelve are asked identically by the homepage quote form and the `/reserve` form, off one shared option list (`src/data/formOptions.ts`).
- The homepage form under the hero is the primary conversion surface — it is the whole quote request, not a teaser, with the contact half folded behind a step-two disclosure so it does not present as a wall of fields. There is no separate `/quote` page: it was retired once this form landed, because two pages asking the same twelve questions is one page too many. `/quote` now 301s to `/#quote-form` and the masthead button reads **Reserve now**, pointing at `/reserve` — quote on the homepage, booking on its own page. **Nothing submitted anywhere reaches the business until the form endpoint is supplied**; until then every form says so plainly rather than implying a delivery that did not happen.
- Bookings cluster around fixed, immovable dates — wedding days, game days, field trip dates, conference dates. Date certainty drives urgency.
- Service area is Chicago and surrounding suburbs.
- Repeat and referral business is meaningful; testimonials name individual staff (Igor) and drivers (Jim).

## Capabilities and Constraints

- **Confirmed services:** Corporate Charter, School Shuttle Transportation, Chicago Sporting Event Charters, Wedding Transportation, Youth Group Transportation.
- **Confirmed fleet** — four vehicles, supplied by the owner on 7 Aug 2026 and used exactly as given; the ranges below are the owner's same-day revision of the first set and supersede it. This closed the open question that stood through the rebuild. They live in `src/data/fleet.ts`, which is the single source for the fleet grid, `/fleet`, the four vehicle pages, both forms' option lists, and the destination blade's recommendation.
  - **Each vehicle has its own page at `/fleet/<slug>`** (added 17 Aug 2026), with its own title and description written out on the entry rather than generated — four pages about four sizes of one service is exactly where a template produces four near-identical descriptions. Every link to a vehicle goes through `vehicleHref`, so the route is stated once. The homepage grid, the `/fleet` cards and the size guide's comparison table all point at these pages now; the `#slug` anchors on `/fleet` still resolve for any old link.
  - **Supercoach Bus** — 50–57 passengers.
  - **Coach Bus** — 39–44 passengers.
  - **Small Coach Bus** — 22–28 passengers.
  - **Executive Sprinter Van** — 13–16 passengers.
  - **Amenities are confirmed for one vehicle only:** high back leather reclining seats, overhead luggage space, undercarriage luggage on request, sound system, PA system, seatbelts on all seats, USB charging port. These were verified against the live site's fleet page when it listed a single "54–57 passenger" coach, and are now attached to the Supercoach on the assumption that it is that same vehicle renamed and re-ranged. **Confirm this.** The other three carry no amenity list and no seating plan rather than an invented one.
  - **Owner revision of the Supercoach amenity list, 16 Aug 2026.** The live site still carries the old wording; this list supersedes it and must not be reverted toward the live copy. Removed: "TV / DVD / CD player / iPod connections" and "laminate wood floors". Added: PA system, lavatory. Reworded: "premium sound system" → "sound system"; "USB charging port at every seat" → "USB charging port". **Open — the dropped "at every seat".** `src/data/services.ts` and the size guide still say every seat has one. If that is no longer true, both need the qualifier struck; if the phrase was dropped only for brevity, both are fine as written.
  - **Lavatory (confirmed 16 Aug 2026, Supercoach only).** It is drawn into the seating plan at the rear of the curbside band, which is where a motorcoach carries one — the position is convention, not something the owner specified. It is set by `layout.lavatory` in `src/data/fleet.ts` and appears nowhere else; **do not add one to another vehicle's plan without the owner saying it has one.**
  - **The "seating shown schematically" caption was removed on the owner's instruction, 16 Aug 2026.** The qualification now lives in the `/fleet` lede, in the `Seating` section of every vehicle without a plan, and in the diagram's `aria-label`. Those are load-bearing: the arrangement is still not confirmed, and with all four removed the drawing would be asserting a floor plan nobody supplied.
  - **`bestFor` is not shown on `/fleet`** — it was added there on 16 Aug 2026 and removed the same day as taking too much room. It still drives the vehicle comparison in the size guide, so it must stay populated.
  - **Amenities for the other three, supplied 16 Aug 2026** and transcribed as given, with sentence case applied to match the Supercoach's list. Coach Bus: reclining seats, lavatory (upon request), overhead luggage, limited undercarriage and rear space, sound system, PA, seatbelts, USB. Small Coach Bus and Executive Sprinter Van: the same minus the lavatory and with their own luggage line (overhead / rear). This closed `fleet.specs`.
  - **The Coach Bus lavatory is "upon request" and is therefore NOT drawn in its seating plan.** The Supercoach's is unconditional and is drawn. A plan must not assert a fixture the amenity line hedges.
  - **Open — the owner headed the Coach Bus list "39-40", but its confirmed range is 39–44.** The range was left at 39–44 because capacity is load-bearing (form headcount options, `recommendVehicle`, the guides' comparison table, the homepage grid) and 39-40 read as a label for which vehicle the list belonged to, not a revision. Plausible reading: 44 is the standard coach and ~40 is the lavatory-equipped one, which would explain both the range and the "upon request". **Confirm before anything else quotes 39–44.**
  - **Small Coach Bus arrangement (supplied 16 Aug 2026):** a doorway forward on the curbside in place of the first pair of seats, a partition at the head of that run, and a back row that carries across the aisle. Drawn as 27 seats, inside the confirmed 22–28. This is the only vehicle whose arrangement is real rather than derived.
  - **Executive Sprinter Van arrangement (drawn by the owner, 16 Aug 2026):** one place along the aisle-side wall and three across on the curbside, four rows deep, with two curbside places open. Drawn as 14 seats, inside the confirmed 13–16. Held as a `layout.grid` — the drawing exactly as the owner gave it, rows down the page and columns across, with nothing deriving or turning it. **Open — what that open pair is.** A door, a table, luggage: not said, so the plan carries no caption for it, unlike the Small Coach Bus's door. Name it and the caption can name it too.
  - **Open — the Supercoach and Coach Bus plans are derived, not supplied.** Two-and-two at `floor(seatsMax / 4)` rows, plus the Supercoach's lavatory. Drawn totals across the fleet: 54 / 44 / 27 / 14, each inside its own range — that is the check to run after any change. Tracked as `fleet.layouts`.
  - **Interiors (resolved 16 Aug 2026):** the owner supplied one interior for each of the other three, in `src/assets/images/fleet/`. All four `/fleet` entries carry an exterior and an interior; each vehicle page carries a gallery of everything usable. Checked before use — right vehicle, no competitor livery, badge or plate in frame.
  - **Open — four of the supplied alternates are held back (17 Aug 2026).** They are not on the site and `src/data/fleetPhotos.ts` records which and why. **`Coachbus 39-44/interior-2`** shows overhead monitors and a different seat pattern from the other two 39–44 frames: either a different coach, or a fitting the amenity list does not carry — and the owner had TV/DVD *removed* from the Supercoach list on 16 Aug, so this needs an answer either way. **`Coachbus 39-44/interior-4`** is a manufacturer render rather than a photograph — composited motion-blurred road in the windows, and the vehicle is a short shuttle, not a 39–44 coach. **`Coachbus 22-28/interior-2`** is the right vehicle but frames a cooler stocked with bottled water and soft drinks, which reads as an amenity nobody has confirmed. **`Coachbus 22-28/interior-4`** has plain seats where the other three are quilted. Say which vehicle each is and any that are genuinely these four go straight into the galleries.
  - **Photography (resolved):** the owner supplied exteriors for the other three on 7 Aug 2026 — `coach-bus-44.png`, `coach-bus-28.png`, `excutive-sprinter.png`. All four vehicles now carry their own photograph in the fleet grid and on `/fleet`. Bodies are unbranded; only manufacturer badges (Freightliner, Ford, Mercedes-Benz) and one small dealer plate in the 28-seater's front plate holder are visible, all illegible at render size. Interiors still exist only for the Supercoach. This replaced an earlier search of licensed stock (Wikimedia Commons, Pexels) that was rejected outright: every usable exterior carried a competitor's livery, a manufacturer model script, or a legible plate.
- **Hours (resolved):** office staffed Mon–Sun 9:00 am – 5:00 pm; charters operate 24/7. Both claims are true and must be stated together — the live site's unqualified "24 hours a day" on About contradicted the 9–5 footer.
- **Canonical domain (resolved):** `chicagosupercoachbus.com`. The contact email remains `@chicagosupercoach.com`; the mismatch is cosmetic and intentional, kept because the ranking equity lives on the `bus` domain. Canonical origin is a single constant in `src/config/site.ts`.
- **Not confirmed — must not be invented:** pricing, years in business, vehicle counts (the fleet lists four *sizes*, not four *buses* — how many of each is unknown and must never be implied), amenities or seating plans for the three vehicles below the Supercoach, driver headcount, insurance carrier or coverage amounts, USDOT/MC numbers, awards, certifications, customer volume.
- The old site's "Thousands of people throughout Chicago" is unverified agency copy and is not carried forward.

## Brand Commitments

- **Name:** Chicago Super Coach
- **Address:** 3717 W. Montrose Avenue, Chicago, IL 60618
- **Phone:** 630-624-3448
- **Email:** info@chicagosupercoach.com
- **Google Business Profile:** existing Maps listing at `41.9609337,-87.7234321` — must be preserved and carried over.
- **Logo:** `src/assets/images/logo.png` (409×202), supplied by the owner. A horizontal lockup: a three-chevron mark carrying a navy-to-green gradient, beside the name set in three lines of navy. Colours sampled from the file — navy `#204878`, teal `#087070`, green `#14945f`. The navy measures 1.35:1 against the site's enamel ground, so the mark is never placed directly on a dark field; it sits on a signal-white plate. A vector version would still be welcome for large-format use.
- **Voice:** professional and functional. This is a corporate/group-charter brand — plain, specific, competent. Not celebratory, not luxury-aspirational; that register belongs to ChiTown Trolley.
- Sister-brand rule: distinct value proposition per page, no templated duplication with ChiTown Trolley.

## Evidence on Hand

- **Three real customer testimonials**, carried over verbatim from the live site — Lauren (wedding), Grace (party bus; names staff member Igor and driver Jim), Mike (last-minute changes). Stored in `src/data/testimonials.ts`. These are real customer words: they may be truncated for display but must never be paraphrased or embellished.
- **Real trust claims** from the live site, safe to carry: licensed and experienced drivers, insured professional drivers, drug testing, regular fleet maintenance, experience with youth groups.
- **Existing SEO equity:** years of indexed URLs, rankings, and backlinks. Old meta titles and descriptions are recorded in `REDIRECTS.md` and are preserved or improved, never discarded.
- **Logo:** supplied and in use — see Brand Commitments. The favicon is cropped from this file's own mark rather than substituted with a glyph.
- **Absent — do not fabricate:** photography of the actual vehicles and driver photos. The rebuild ships without real vehicle imagery; those image slots are explicit placeholders.
- **Known defect in inherited legal copy:** the live Terms page names "ChiTown Limo Bus" and gives `info@chitownlimobus.com` as the SMS opt-out address. Entity names are corrected in the rebuild per owner decision; the underlying TCPA/SMS consent language is inherited as-is and has not had legal review.

## Product Principles

1. **The organizer already knows their trip.** Never make them read marketing to reach a form. Date, headcount, and route are the shortest path to a price.
2. **Specificity is the trust signal.** Two named vehicles with real capacities and real amenities beat any adjective. Where a number isn't confirmed, say nothing rather than something vague.
3. **Sell logistics, not occasion.** Arrival, capacity, compliance, schedule. The celebration is the customer's; the bus is ours.
4. **Never invent proof.** No fabricated fleet, pricing, credentials, or customer counts. Real testimonials stay verbatim.
5. **Protect the rankings.** This is a migration of an indexed site, not a launch. Every old URL resolves; every ranking meta title is preserved or deliberately improved.

## Accessibility & Inclusion

No product-specific standard was established by the owner. Baseline: WCAG 2.2 AA — the school and youth-group audiences include public-institution buyers whose procurement rules commonly require it.
