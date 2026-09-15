# Homepage wording changes

Reviewed the homepage for repetition and revised 26 text blocks. The phrase ?charter bus? or ?charter buses? now appears 14 times in the rendered main content, down from 43. This count includes collapsed travel panels and FAQs, and excludes metadata, navigation, footer text, and image attributes.

Google recommends natural language and descriptive, contextual links. The edits follow that guidance: [keyword stuffing policy](https://developers.google.com/search/docs/essentials/spam-policies#keyword-stuffing) and [link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable#write-good-anchor-text).

The main page title, meta description, H1, fleet heading, primary booking and pricing headings, FAQ section heading, guide article titles, and both Google review excerpts retain their wording. Every homepage link destination is preserved. Dedicated service, location, and guide pages retain their existing copy.

## Exact edits

Each entry gives the homepage location and full rendered text before and after the change. Paragraph wrapping is normalized for comparison.

### 1. Why Choose Us ? introduction

Source: [src/components/WhyChooseUs.astro](src/components/WhyChooseUs.astro)

**Before**

Coordinating transportation for a large group in Chicago can be challenging. A private charter bus keeps everyone together with one transportation plan, a professional driver, and a vehicle selected for your group size.

**After**

Coordinating transportation for a large group in Chicago can be challenging. A private coach keeps everyone together with one transportation plan, a professional driver, and a vehicle selected for your group size.

### 2. Travel dropdown: Chicago neighborhoods ? H2

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Chicago Charter Bus Rental by Neighborhood

**After**

Group Transportation by Chicago Neighborhood

### 3. Travel dropdown: Chicago neighborhoods ? introduction

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Chicago Super Coach provides private charter bus transportation throughout Chicago. Whether your group is traveling from downtown, the North Side, South Side, or nearby neighborhoods, we can coordinate comfortable transportation for local events, airport transfers, corporate travel, school trips, weddings, and group outings.

**After**

Chicago Super Coach serves downtown, the North Side, the South Side, and nearby neighborhoods. We coordinate transportation for local events, airport transfers, corporate travel, school trips, weddings, and group outings.

### 4. Travel dropdown: City & suburban service areas ? H2

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Charter Bus Service in Chicago & Surrounding Areas

**After**

Transportation in Chicago & Surrounding Areas

### 5. Travel dropdown: City & suburban service areas ? introduction

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Chicago Super Coach provides private charter bus transportation throughout Chicago and nearby communities. We serve downtown Chicago, local neighborhoods, O'Hare and Midway areas, and surrounding suburbs for corporate travel, school trips, weddings, sporting events, conventions, and private group outings.

**After**

We serve downtown, local neighborhoods, O'Hare and Midway, and surrounding suburbs for corporate travel, school trips, weddings, sporting events, conventions, and private outings.

### 6. Travel dropdown: City & suburban service areas ? Rosemont paragraph and its two internal link labels

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Our Rosemont charter bus rental service connects conventions, hotels, corporate events, and airport transfers. Groups traveling through nearby O'Hare International Airport can arrange O'Hare Airport transportation and select the right vehicle from our Chicago charter bus fleet.

**After**

Our Rosemont group transportation service connects conventions, hotels, corporate events, and airport transfers. Groups traveling through nearby O'Hare International Airport can arrange O'Hare Airport transportation and compare our vehicle options.

### 7. Travel dropdown: Airports & hotel transfers ? introduction

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Need group transportation to or from a Chicago airport? We provide private charter bus transportation for corporate groups, school trips, sports teams, wedding guests, tour groups, and travelers staying throughout Chicago.

**After**

Need group transportation to or from a Chicago airport? We arrange private transfers for corporate groups, school trips, sports teams, wedding guests, tour groups, and travelers staying throughout Chicago.

### 8. Travel dropdown: Airports & hotel transfers ? O'Hare card fleet link

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

We provide O'Hare Airport group transportation for corporate travelers, school groups, sports teams, families, and visitors arriving at O'Hare International Airport. Arrange Chicago hotel transportation or choose the right vehicle from our Chicago charter bus fleet for airport pickups and transfers.

**After**

We provide O'Hare Airport group transportation for corporate travelers, school groups, sports teams, families, and visitors arriving at O'Hare International Airport. Arrange Chicago hotel transportation or choose the right vehicle from our coach and Sprinter fleet for airport pickups and transfers.

### 9. Travel dropdown: Attractions & event venues ? introduction

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Traveling around Chicago with a group? A private charter bus makes it easier to visit Chicago attractions without coordinating multiple cars, rideshares, or public transportation.

**After**

Traveling around Chicago with a group? A private coach makes it easier to visit local attractions without coordinating multiple cars, rideshares, or public transportation.

### 10. Travel dropdown: Attractions & event venues ? Wrigley Field card and its two internal link labels

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Planning a group trip to Wrigley Field? Chicago sporting event transportation keeps everyone together for Cubs games. Connect your trip with our Wrigleyville charter bus service and compare the Chicago charter bus fleet for your group size.

**After**

Planning a group trip to Wrigley Field? Chicago sporting event transportation keeps everyone together for Cubs games. Connect your trip with our Wrigleyville transportation service and compare vehicle sizes to find the right fit.

### 11. Travel dropdown: Attractions & event venues ? McCormick Place card and its fleet and quote link labels

Source: [src/data/chicagoTravel.ts](src/data/chicagoTravel.ts)

**Before**

Our Chicago convention transportation connects hotels, airports, and event venues such as McCormick Place for exhibitors, attendees, and corporate groups. Choose a vehicle from our Chicago charter bus fleet and request a custom charter bus quote for your event.

**After**

Our Chicago convention transportation connects hotels, airports, and event venues such as McCormick Place for exhibitors, attendees, and corporate groups. Choose a vehicle from our coach and van fleet and request a custom event quote.

### 12. How It Works ? introduction

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

Booking a charter bus is simple. Follow these three steps and we'll take care of the rest.

**After**

Booking your trip is simple. Follow these three steps and we'll take care of the rest.

### 13. Pricing ? introduction below the H2

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

Charter bus pricing depends on several factors including vehicle size, travel date, trip duration, mileage, pickup locations, and itinerary.

**After**

Vehicle size, travel date, duration, mileage, pickup locations, and your itinerary all affect the final quote.

### 14. Pricing ? quote box H3

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

How Much Does a Charter Bus Cost in Chicago?

**After**

A Price Based on Your Itinerary

### 15. Pricing ? quote box paragraph

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

The cost of renting a charter bus in Chicago depends on your group size, vehicle type, travel dates, trip duration, mileage, pickup locations, and itinerary. A short local trip may have different pricing than an all-day Chicago tour or transportation to the surrounding suburbs.

**After**

Share your passenger count, dates, pickup addresses, and planned stops for a quote tailored to your trip. A short local journey may be priced differently from an all-day tour or transportation to the suburbs.

### 16. Pricing ? quote button

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

Get My Chicago Charter Bus Quote

**After**

Get My Trip Quote

### 17. Vehicle Comparison ? H2

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

Why Choose a Charter Bus for Group Travel in Chicago?

**After**

Compare Your Group Travel Options

### 18. Vehicle Comparison ? introduction

Source: [src/components/BookingGuide.astro](src/components/BookingGuide.astro)

**Before**

Coordinating transportation for a large group can be difficult. Multiple cars, rideshares, and public transportation can make it harder to keep everyone on the same schedule. A private charter bus allows your group to travel together with one transportation plan and a professional driver.

**After**

Coordinating transportation for a large group can be difficult. Multiple cars, rideshares, and public transportation can make it harder to keep everyone on the same schedule. A private coach allows your group to travel together with one transportation plan and a professional driver.

### 19. Guides ? section H2

Source: [src/pages/index.astro](src/pages/index.astro)

**Before**

Chicago Charter Bus Transportation Guides

**After**

Chicago Group Travel Guides

### 20. Guides ? pricing guide card description (article title retained)

Source: [src/pages/index.astro](src/pages/index.astro)

**Before**

Guide · 8 min read How Much Does a Charter Bus Cost in Chicago? Learn what factors affect charter bus pricing. Read guide

**After**

Guide · 8 min read How Much Does a Charter Bus Cost in Chicago? Learn what affects the cost of your trip. Read guide

### 21. FAQ ? O'Hare pickup question

Source: [src/components/HomeFAQ.astro](src/components/HomeFAQ.astro)

**Before**

Can I rent a charter bus from O'Hare Airport?

**After**

Can you pick up our group at O'Hare Airport?

### 22. FAQ ? Midway transportation question

Source: [src/components/HomeFAQ.astro](src/components/HomeFAQ.astro)

**Before**

Do you provide charter bus transportation to Midway Airport?

**After**

Do you provide transportation to Midway Airport?

### 23. FAQ ? Chicago hotel pickup question

Source: [src/components/HomeFAQ.astro](src/components/HomeFAQ.astro)

**Before**

Can your charter buses pick up groups at Chicago hotels?

**After**

Can you pick up groups at Chicago hotels?

### 24. FAQ ? Cubs / White Sox transportation question

Source: [src/components/HomeFAQ.astro](src/components/HomeFAQ.astro)

**Before**

Can I rent a charter bus for a Cubs or White Sox game?

**After**

Do you provide transportation for Cubs or White Sox games?

### 25. FAQ ? travel outside Chicago question

Source: [src/components/HomeFAQ.astro](src/components/HomeFAQ.astro)

**Before**

Can you provide charter bus transportation outside Chicago?

**After**

Can you provide transportation outside Chicago?

### 26. Map / Location ? H2

Source: [src/components/ServiceAreaMap.astro](src/components/ServiceAreaMap.astro)

**Before**

Our Chicago Charter Bus Service Area

**After**

Our Chicago Service Area

## Verification

- Production build completed successfully.
- All 31 SEO checks passed.
- Homepage anchor destinations and their order match the previous version.
- Main title, description, and H1 retained.
- All four travel topics and ten FAQs remain.
