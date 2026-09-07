// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { REDIRECTS } from './src/data/redirects';
import { allPlaceholders } from './src/lib/placeholder';
import { SITE_ORIGIN } from './src/config/site';

/**
 * Emits host-level redirect rules, robots.txt, and the unresolved-content
 * manifest.
 *
 * Astro's own `redirects` map covers every host by emitting a meta-refresh page
 * per old URL. That is a floor, not the goal — `_redirects` gives Netlify and
 * Cloudflare Pages a true 301, which is what actually transfers link equity.
 * See REDIRECTS.md for the Apache and nginx equivalents.
 */
function migrationArtifacts() {
  return {
    name: 'chicago-super-coach:migration-artifacts',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        /**
         * `301!` — the `!` is load-bearing, and its absence was a live bug.
         *
         * Netlify (and Cloudflare Pages) only apply an unforced rule when no
         * file exists at that path. Astro's `redirects` map writes a
         * meta-refresh stub at exactly these paths, so the stub shadowed every
         * rule below: `/shuttle-bus-fleet` answered `200` with a
         * `<meta name="robots" content="noindex">` page instead of the `301`
         * this file exists to produce. That is where Search Console's
         * "Excluded by `noindex` tag" entries came from — they are this site's
         * own redirect stubs, indexed as pages. Forcing the rule puts the real
         * 301 back in front and leaves the stub as the fallback for hosts that
         * read no rules file at all.
         *
         * The trailing-slash twin of each source is emitted too. Netlify
         * normalises trailing slashes when matching, so it is usually
         * redundant — but the slashed form is the one Google actually crawled
         * (the old directory-shaped build redirected `/contact-us` to
         * `/contact-us/`), and it costs nothing to name it explicitly rather
         * than depend on undocumented normalisation. It cannot loop: the target
         * differs from both sources.
         */
        const rules = REDIRECTS.flatMap((r) => [
          `${r.from}  ${r.to}  301!`,
          `${r.from}/  ${r.to}  301!`,
        ]);

        /**
         * The old site's sitemap lived at the conventional path and is still
         * requested by crawlers and linked from old submissions.
         * `@astrojs/sitemap` publishes an index instead, so point the one at
         * the other rather than leaving a 404 on the best-known URL on the site.
         */
        rules.push('/sitemap.xml  /sitemap-index.xml  301');

        await writeFile(new URL('_redirects', dir), `${rules.join('\n')}\n`, 'utf8');
        logger.info(`wrote _redirects with ${rules.length} rules`);

        /**
         * robots.txt is generated rather than kept in `public/` because the
         * `Sitemap:` line is an absolute URL, and a hand-maintained copy is
         * exactly the thing that drifts from SITE_ORIGIN. It did: the static
         * file advertised the `www` host long after the host began redirecting
         * it away. Derive it, and the two can never disagree again.
         */
        const robots = [
          'User-agent: *',
          'Allow: /',
          '',
          `Sitemap: ${SITE_ORIGIN}/sitemap-index.xml`,
          '',
        ].join('\n');
        await writeFile(new URL('robots.txt', dir), robots, 'utf8');
        logger.info(`wrote robots.txt for ${SITE_ORIGIN}`);

        const open = allPlaceholders();
        if (open.length > 0) {
          logger.warn(
            `${open.length} unresolved item(s) shipped as marked placeholders:`
          );
          for (const p of open) {
            logger.warn(`  [${p.kind}] ${p.id} — ${p.needed}`);
          }
        }
      },
    },
  };
}

/** Old paths exist only as redirect stubs — they must never enter the sitemap. */
const REDIRECT_PATHS = new Set(REDIRECTS.map((r) => r.from));
/**
 * Matched as subtrees: every confirmation page under /thanks is noindex, and a
 * new one must not have to be remembered here to stay out of the sitemap.
 */
const NOINDEX_PREFIXES = ['/404', '/thanks'];
const isNoindex = (path: string) =>
  NOINDEX_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`));

export default defineConfig({
  site: SITE_ORIGIN,
  trailingSlash: 'never',
  /**
   * Flat `about.html` rather than `about/index.html`, because on this host the
   * output shape *is* the URL policy.
   *
   * Netlify canonicalises a request toward whichever shape exists on disk. With
   * directory output it answered `/fleet` with a `301` to `/fleet/` — so every
   * slash-less internal link, sitemap entry and canonical tag in this repo,
   * all of which honour `trailingSlash: 'never'` above, pointed at a URL that
   * redirected. Verified against the live site, which already ships two flat
   * files: `/netlify-forms/` and `/404/` both answer `301` to the slash-less
   * form, while `/fleet` answered `301` to the slashed one. Flat output makes
   * the served URL and the declared URL the same string, and turns the
   * already-crawled `/fleet/` into a single 301 onto the canonical.
   */
  build: { format: 'file' },
  integrations: [
    /**
     * One known cosmetic difference this integration will not let us close: the
     * homepage is listed as the bare origin, while its canonical tag renders as
     * `${origin}/`. A `serialize` hook cannot fix it — `trailingSlash: 'never'`
     * strips the root slash again after `serialize` runs. The two strings are
     * the same resource by RFC 3986 §6.2.3 (an empty path is equivalent to
     * "/"), every crawler normalises them, and it is not an indexing defect.
     */
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !REDIRECT_PATHS.has(path) && !isNoindex(path);
      },
    }),
    migrationArtifacts(),
  ],
  redirects: Object.fromEntries(REDIRECTS.map((r) => [r.from, r.to])),
});
