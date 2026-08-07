// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { writeFile } from 'node:fs/promises';
import { REDIRECTS } from './src/data/redirects';
import { allPlaceholders } from './src/lib/placeholder';
import { SITE_ORIGIN } from './src/config/site';

/**
 * Emits host-level redirect rules and the unresolved-content manifest.
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
        const rules = REDIRECTS.map((r) => `${r.from}  ${r.to}  301`).join('\n');
        await writeFile(new URL('_redirects', dir), `${rules}\n`, 'utf8');
        logger.info(`wrote _redirects with ${REDIRECTS.length} 301 rules`);

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

export default defineConfig({
  site: SITE_ORIGIN,
  trailingSlash: 'never',
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        return !REDIRECT_PATHS.has(path);
      },
    }),
    migrationArtifacts(),
  ],
  redirects: Object.fromEntries(REDIRECTS.map((r) => [r.from, r.to])),
});
