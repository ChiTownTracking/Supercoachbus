# URL migration plan

This is a rebuild of a site that has been indexed for years. Every old URL has
to resolve, or the rankings and backlinks that took that time to accumulate turn
into 404s.

The mapping lives in [`src/data/redirects.ts`](src/data/redirects.ts) and is the
single source for everything below — the Astro config, the generated
`dist/_redirects`, and this document. Edit that file, not this one.

## Redirect map

| Old URL | New URL | Why |
|---|---|---|
| `/shuttle-bus-fleet` | `/fleet` | Direct equivalent. Highest-value page after home. |
| `/shuttle-bus-services` | `/services` | Direct equivalent; the five service pages hang off it. |
| `/about-our-charter-bus-company` | `/about` | Direct equivalent. |
| `/contact-us` | `/contact` | Direct equivalent. |
| `/reserve-quote` | `/reserve` | Old page was a hub linking to both forms. Reservation is the only one of the two with its own page now; the quote form is one nav click away. |
| `/online-quote` | `/#quote-form` | Quote intent, and the quote form now lives on the homepage. Lands on the form itself. |
| `/online-reservation` | `/reserve` | Direct equivalent. |
| `/corporate-charter-shuttle-transportation-service` | `/services/corporate` | Existing standalone page keeps a dedicated destination rather than folding into the hub. |
| `/school-shuttle-student-group-transportation` | `/services/school` | As above. |
| `/quote` | `/#quote-form` | **Not a legacy-site mapping.** `/quote` shipped in this rebuild and was later retired — the form moved onto the homepage. Kept because the URL may already be linked or bookmarked. |
| `/terms-and-conditions` | `/terms` | Shorter canonical path. |
| `/` | `/` | Unchanged. |
| `/privacy-policy` | `/privacy-policy` | Unchanged. |

### Fragment URLs

The old site put three of its five services on anchors of a single page instead
of on their own URLs. A server-side 301 never sees the fragment, so these are
resolved client-side in [`src/pages/services/index.astro`](src/pages/services/index.astro):

| Old URL | New URL |
|---|---|
| `/shuttle-bus-services#ChicagoSportingEventCharterServices` | `/services/sporting-events` |
| `/shuttle-bus-services#WeddingTransportationServices` | `/services/weddings` |
| `/shuttle-bus-services#YouthGroupTransportation` | `/services/youth-groups` |

## How the redirects are implemented

Two layers, because static hosting varies:

1. **Astro `redirects` config** — emits a redirect page for every old URL. Works
   on any host, including plain object storage. This is the floor, not the goal:
   a meta-refresh passes less signal than a real 301.
2. **`dist/_redirects`** — generated at build time. Netlify and Cloudflare Pages
   read this and issue genuine `301` responses.

If the site lands somewhere else, translate the same table:

**Apache** (`.htaccess`)

```apache
RewriteEngine On
Redirect 301 /shuttle-bus-fleet /fleet
Redirect 301 /shuttle-bus-services /services
Redirect 301 /about-our-charter-bus-company /about
Redirect 301 /contact-us /contact
Redirect 301 /reserve-quote /reserve
Redirect 301 /online-quote /#quote-form
Redirect 301 /quote /#quote-form
Redirect 301 /online-reservation /reserve
Redirect 301 /corporate-charter-shuttle-transportation-service /services/corporate
Redirect 301 /school-shuttle-student-group-transportation /services/school
Redirect 301 /terms-and-conditions /terms
```

**nginx**

```nginx
location = /shuttle-bus-fleet { return 301 /fleet; }
location = /shuttle-bus-services { return 301 /services; }
location = /about-our-charter-bus-company { return 301 /about; }
location = /contact-us { return 301 /contact; }
location = /reserve-quote { return 301 /reserve; }
location = /online-quote { return 301 /#quote-form; }
location = /quote { return 301 /#quote-form; }
location = /online-reservation { return 301 /reserve; }
location = /corporate-charter-shuttle-transportation-service { return 301 /services/corporate; }
location = /school-shuttle-student-group-transportation { return 301 /services/school; }
location = /terms-and-conditions { return 301 /terms; }
```

## Meta titles and descriptions

The old titles were ranking for real terms, so they were preserved rather than
rewritten — even where the page copy underneath them was completely rebuilt. The
verbatim originals are recorded in `src/data/redirects.ts` as `oldMeta`.

Preserved as-is:

- `/` — "Shuttle Bus Service | Charter Bus Service in Chicago IL"
- `/fleet` — "Charter Coach, Shuttle Bus Rentals Chicago | Fleet"
- `/about` — "Charter Coach Bus Rental Services | About Us"
- `/contact` — "Super Coach Chicago | Contact Us"
- `/reserve` — "Chicago Coach Bus Rentals | Shuttle Bus Services | Reserve"

Retired:

- `/quote` — "Chicago Coach Bus Rentals | Shuttle Bus Services | Quote". The page was
  removed at the owner's direction once the full twelve-field quote form moved
  onto the homepage; keeping both meant asking the same questions twice.
  **Watch this one.** The old site's `/online-quote` ranked under that title, and
  no page now carries "Quote" in its title tag. The homepage title is preserved
  verbatim and is not worth risking, so the recovery is in the homepage
  *description*, which was written for this rebuild and now leads with "Get a
  free quote". If Search Console shows quote-term impressions falling over the
  first two months, the fix is a dedicated `/quote` landing page again — not a
  title rewrite on the homepage.

Deliberately improved:

- **The five service pages.** The old site served one shared title and
  description — "Chicago Group Transportation | Services" — across the services
  hub *and* both standalone service pages. Three URLs competing on identical
  metadata is duplicate-content self-harm, not equity worth preserving. Each
  service page now has its own title and description targeting its own terms.

## Also on the migration checklist

- [ ] **Google Business Profile** — the existing Maps listing is wired into the
      site (`hasMap`, `sameAs`, and the embedded map on `/contact`) at
      `41.9609337, -87.7234321`. Confirm the profile's website URL points at the
      new site once it is live.
- [ ] **Google Search Console** — keep the existing property, submit
      `/sitemap-index.xml`, and watch Coverage for 404 spikes for the first
      month.
- [ ] **Canonical host** — confirmed as `www.chicagosupercoachbus.com`. Make sure
      the apex domain 301s to `www` (or the reverse) so only one host is indexed.
- [ ] **Verify each old URL** returns a real 301 after deploy, not a soft 404.
- [ ] **Crawl the old site before switching DNS** so there is a reference list if
      an inbound URL was missed. The map above covers every path found in the
      live navigation, but old backlinks can point at pages the nav no longer
      shows.
