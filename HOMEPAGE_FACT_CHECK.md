# Homepage fact check against the supplied transportation FAQ

Reviewed: September 15, 2026.

Reference: the owner's **BUS TRANSPORTATION SERVICE FAQ**, supplied as `pasted-text.txt` in attachment `9f259cb2-a0be-4d69-a4e2-754b7391a62a`. The owner's later direct payment instructions remain authoritative: a **$100 booking deposit**, with the **remaining balance charged 7 days before the scheduled trip date**.

The review covered the rendered homepage, including all collapsed travel panels and FAQ answers, the quote-form choices and status messages, fleet and service summaries, testimonials, footer, metadata, and structured data. Business-specific facts were checked for consistency with the supplied FAQ and previously confirmed site records; this was not an independent inspection of vehicles, insurance documents, or driver credentials.

## Corrections and clarifications made

Some items were overly broad or omitted a booking condition rather than directly contradicting the reference.

| Homepage location | Previous wording or implication | Updated wording or behavior | Reason |
| --- | --- | --- | --- |
| Trust strip | “Seatbelts on every seat” | “Seatbelts on every coach seat” | The reference distinguishes coach seatbelts from limo party buses with bench seating and no seatbelts. The form also offers a party bus. |
| Trust strip | “Insured professional drivers” | “Insured transportation” | The reference describes insurance carried by the business. |
| SuperCoach fleet card | Unqualified “premium amenities” | Requests a restroom and confirmation of luggage space when booking. | Restrooms and luggage arrangements depend on the vehicle and the reservation. |
| Out-of-state service summary | The coach and driver are held for the whole trip out and back. | Routes and driver schedules are planned around required rest and driving limits. | An assigned driver may remain on a multi-day trip, but the wording should not imply unrestricted continuous availability. |
| School service summary | General seatbelt and driver-insurance wording | Specifies insured transportation and coach buses with seatbelts on every seat. | Makes the vehicle type and insurance claim explicit. |
| Sporting-event service summary | Drop-off “at the gate” and waiting afterward | Pickup, drop-off, and return times are arranged in advance at locations the bus can safely access. | Gate access and immediate waiting were unsupported guarantees. |
| Wedding service summary | “Including the late return nobody plans for” | Stops and return times are arranged with the reservation manager. | Makes advance agreement clear instead of implying an unplanned late return is automatically included. |
| Why Choose Us introduction and group-together benefit | Everyone travels in one vehicle. | Vehicles are matched to the passenger count; larger groups can arrange multiple buses. | The reference describes large transfers that can exceed one vehicle's capacity. |
| Travel Comfortably benefit | General convenient amenities | Coaches offer reclining seats and climate control; additional amenities are confirmed for the trip. | Separates standard coach features from requested equipment. |
| How It Works, step 2 | Generic quote review | Reservation manager reviews trip details by email, checks availability, and helps finalize the vehicle, itinerary, and price. | Matches the reference's manager-led booking process while retaining the owner's requested online quote form. |
| How It Works, step 3 | Deposit and payment timing | Reservation manager guides confirmation and the $100 credit card deposit; the balance is charged 7 days before the trip. | Adds the reference's credit-card/manager detail and preserves the owner's latest payment instructions. |
| Pricing section | No gratuity explanation | Driver gratuity is generally separate from the base trip cost; the manager explains included charges. | Matches the reference's pricing answer. |
| “Near me” pickup FAQ | Pickup at a hotel, school, office, or another address | Adds that residential pickups depend on safe bus access without obstructing traffic. | Matches the residential-access condition. |
| Advance-booking FAQ | General advice to book early | Explicitly states first come, first served and subject to vehicle availability. | Matches the reference's availability policy. |
| Hotel-pickup FAQ | Multiple stops could appear automatic. | Extra stops on round-trip transfers must be arranged with the reservation manager. | Matches the distinction between hourly charters and round-trip service. |
| Outside-Chicago FAQ | Out-of-state destinations | Also confirms out-of-state pickups and itinerary planning around driver rest and driving limits. | Matches both the reach and scheduling conditions in the reference. |
| Vehicle-size FAQ | Four vehicle sizes and general luggage guidance | Adds multiple vehicles for groups above the largest vehicle's capacity and manager confirmation of seating/luggage. | Keeps the four previously confirmed fleet ranges; the multiple-vehicle threshold comes from fleet data. |
| One added amenities/accessibility FAQ | No specific explanation | Restrooms on select coaches; Wi-Fi requested; accessible coaches by arrangement; PA, TV/DVD, and large-luggage needs confirmed before booking. | Makes requested equipment explicit without adding another homepage section or promising every amenity on every vehicle. |

Implementation locations: [business claims](src/config/site.ts), [service summaries](src/data/services.ts), [homepage fleet card](src/pages/index.astro), [Why Choose Us](src/components/WhyChooseUs.astro), [booking and pricing](src/components/BookingGuide.astro), and [homepage FAQs](src/components/HomeFAQ.astro).

The trust claims and service summaries use shared data, so their corrected wording also appears wherever those same records are rendered, including the service directory. Other pages' full body copy was outside this homepage review.

## Information already consistent

- Coach/Sprinter capacity of 13–57 passengers agrees with the reference. Individual ranges remain those previously supplied by the owner; the reference gives only the overall range.
- The 45-passenger party-bus option is within the reference's 10–45 passenger range. Coach amenities are not applied to that option.
- “Over 15 years” is compatible with the reference's “little over 16 years”; no founding year was inferred.
- The Elk Grove Village base, Chicago coverage, airport transfers, private groups, school/corporate/wedding/event transportation, and out-of-state trips agree with the reference.
- The office's stated hours and 24/7 charter operations describe different things. They do not imply that one driver works continuously.
- The online form requests a quote and contact details. Booking confirmation still comes from the reservation team.
- Existing Google review excerpts and links were preserved. They are customer statements, not new operational guarantees.
- The homepage does not publish the reference's cancellation deadlines, food/drink rules, fleet ages, insurance amount, or exact ADA seating arrangement. No new unqualified claim about those topics was added.

## Reference statements requiring care

**Driver hours:** The source presents 14 hours as a general federal work limit for bus drivers. Under the general passenger-carrier rules, a driver may drive up to 10 hours after 8 consecutive hours off duty and may not drive after accumulating 15 hours on duty. Exceptions and additional limits apply; the short-haul exception also involves a 14-hour condition. The homepage now uses a general statement about planning around required driving/rest limits. [FMCSA's passenger-carrier hours-of-service summary](https://www.fmcsa.dot.gov/regulations/hours-service/summary-hours-service-regulations).

**Cancellation:** The reference says either one week or three days depending on the trip, without explaining which bookings use which deadline, fees, or refund terms. It cannot support a single universal cancellation promise. None was added to the homepage.

**Alcohol and minors:** The reference's blanket statement about alcohol in the presence of minors was not adopted as a legal summary. Vehicle-specific company policies and applicable law need to be distinguished before publishing such wording. The homepage makes no alcohol-policy claim.

## Validation

- `npm run verify` passed: production build and all 31 existing checks.
- Reviewed the changed text in generated homepage HTML, including collapsed FAQ answers.
- Verified that homepage H2 headings and JSON-LD remained unchanged.
- Verified the $100 deposit and 7-day balance wording, both existing “near me” phrases, and continued removal of the vehicle-comparison section.
- Removed the old unqualified seatbelt, gate-drop-off, unplanned-return, and whole-trip-driver statements from the rendered homepage.

