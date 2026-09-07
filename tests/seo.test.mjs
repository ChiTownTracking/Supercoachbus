/**
 * Indexing invariants, asserted against the real build output in `dist/`.
 *
 * These exist because every defect they check for shipped to production at
 * least once, and none of them is visible in the browser: a canonical naming a
 * hostname that redirects, a sitemap full of redirecting URLs, a redirect stub
 * shadowing the 301 it was meant to back up. The only place they show up is in
 * Search Console, weeks later.
 *
 * Run `npm run build` first — this reads `dist/`, it does not create it.
 *
 *   node --test tests/
 */
import { test, describe, before } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

import { SITE_ORIGIN } from '../src/config/site.ts';
import { REDIRECTS } from '../src/data/redirects.ts';

const DIST = 'dist';
const slash = (s) => s.split('\\').join('/');

/** Files that are deliberately not pages of the site. */
const NON_PAGE = new Set(['/netlify-forms']);

/**
 * Paths that must never be indexable. `/404` is the not-found document itself;
 * everything under `/thanks` is a confirmation page reached only by submitting
 * a form, and a confirmation page in the index is a page that ranks for nothing
 * and leaks form state into search results.
 */
const MUST_BE_NOINDEX = [
  '/404',
  '/thanks',
  '/thanks/contact',
  '/thanks/quote',
  '/thanks/reservation',
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(slash(p));
  }
  return out;
}

/** Built file path -> the URL path it is served at under `build.format: 'file'`. */
const routeOf = (file) => {
  const p = file.replace(/^dist/, '');
  if (p === '/index.html') return '/';
  return p.replace(/\.html$/, '');
};

let files = [];
let pages = new Map(); // route -> html
let redirectStubs = new Set();
let sitemapUrls = [];
let redirectRules = [];

before(() => {
  assert.ok(
    existsSync(DIST),
    'dist/ is missing — run `npm run build` before the tests'
  );
  files = walk(DIST);
  redirectStubs = new Set(REDIRECTS.map((r) => r.from));

  for (const f of files) {
    if (!f.endsWith('.html')) continue;
    const route = routeOf(f);
    if (NON_PAGE.has(route)) continue;
    pages.set(route, readFileSync(f, 'utf8'));
  }

  sitemapUrls = [...readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(
    (m) => m[1]
  );

  redirectRules = readFileSync(join(DIST, '_redirects'), 'utf8')
    .trim()
    .split('\n')
    .map((line) => {
      const [from, to, status] = line.trim().split(/\s+/);
      return { from, to, status };
    });
});

/** Every page of the site that is meant to rank. */
const indexablePages = () =>
  [...pages].filter(
    ([route]) => !redirectStubs.has(route) && !MUST_BE_NOINDEX.includes(route)
  );

const tag = (html, re) => (html.match(re) ?? [])[1];
const canonicalOf = (html) => tag(html, /<link rel="canonical" href="([^"]+)"/);
const robotsOf = (html) => tag(html, /<meta name="robots" content="([^"]+)"/);
const ogUrlOf = (html) => tag(html, /<meta property="og:url" content="([^"]+)"/);

describe('URL policy', () => {
  test('SITE_ORIGIN is https, apex, and has no trailing slash', () => {
    assert.equal(SITE_ORIGIN, 'https://chicagosupercoachbus.com');
  });

  test('nothing in the build references the www host', () => {
    // The www host 301s to the apex. Any absolute www URL we emit — canonical,
    // og:url, sitemap loc, JSON-LD @id — is a URL that redirects.
    const offenders = files
      .filter((f) => /\.(html|xml|txt|json)$/.test(f))
      .filter((f) => readFileSync(f, 'utf8').includes('www.chicagosupercoachbus.com'))
      .map((f) => f.replace(/^dist/, ''));
    assert.deepEqual(offenders, []);
  });

  test('no indexable page URL carries a trailing slash', () => {
    // `trailingSlash: 'never'`, and on this host the flat build shape is what
    // makes the served URL match the declared one.
    for (const [route] of indexablePages()) {
      assert.ok(route === '/' || !route.endsWith('/'), `${route} ends with a slash`);
    }
  });
});

describe('canonical tags', () => {
  test('every indexable page has exactly one canonical', () => {
    for (const [route, html] of indexablePages()) {
      const count = (html.match(/<link rel="canonical"/g) ?? []).length;
      assert.equal(count, 1, `${route} has ${count} canonical tags`);
    }
  });

  test('every canonical is absolute, on the canonical origin, and self-referencing', () => {
    for (const [route, html] of indexablePages()) {
      const canonical = canonicalOf(html);
      const expected = new URL(route, SITE_ORIGIN).href;
      assert.equal(canonical, expected, `${route} canonical is wrong`);
    }
  });

  test('og:url agrees with the canonical', () => {
    for (const [route, html] of indexablePages()) {
      assert.equal(ogUrlOf(html), canonicalOf(html), `${route} og:url != canonical`);
    }
  });

  test('no canonical points at a path that redirects', () => {
    const redirectSources = new Set(redirectRules.map((r) => r.from.replace(/\/$/, '')));
    for (const [route, html] of indexablePages()) {
      const path = new URL(canonicalOf(html)).pathname.replace(/\/$/, '') || '/';
      assert.ok(!redirectSources.has(path), `${route} canonical points at redirect ${path}`);
    }
  });
});

describe('robots directives', () => {
  test('pages that must not be indexed carry noindex', () => {
    for (const route of MUST_BE_NOINDEX) {
      const html = pages.get(route);
      assert.ok(html, `${route} was not built`);
      assert.match(robotsOf(html) ?? '', /noindex/, `${route} is missing noindex`);
    }
  });

  test('no page that should rank carries a noindex', () => {
    for (const [route, html] of indexablePages()) {
      const robots = robotsOf(html);
      assert.ok(
        !robots || !/noindex/.test(robots),
        `${route} is noindex but should rank (robots: ${robots})`
      );
    }
  });

  test('robots.txt allows crawling and names the sitemap on the canonical origin', () => {
    const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
    assert.match(robots, /^User-agent: \*$/m);
    assert.match(robots, /^Allow: \/$/m);
    assert.ok(!/^Disallow: \/$/m.test(robots), 'robots.txt disallows the whole site');
    assert.match(robots, new RegExp(`^Sitemap: ${SITE_ORIGIN}/sitemap-index\\.xml$`, 'm'));
  });

  test('robots.txt blocks no page and no rendering asset', () => {
    const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
    const disallowed = [...robots.matchAll(/^Disallow:\s*(\S+)\s*$/gm)].map((m) => m[1]);
    assert.deepEqual(disallowed, [], 'CSS, JS and images must stay crawlable');
  });
});

describe('sitemap', () => {
  test('sitemap-index points at the sitemap on the canonical origin', () => {
    const index = readFileSync(join(DIST, 'sitemap-index.xml'), 'utf8');
    assert.ok(index.includes(`${SITE_ORIGIN}/sitemap-0.xml`));
  });

  test('every sitemap URL is a page that was actually built', () => {
    for (const url of sitemapUrls) {
      const path = new URL(url).pathname.replace(/\/$/, '') || '/';
      assert.ok(pages.has(path), `sitemap lists ${path}, which was not built`);
    }
  });

  test('the sitemap contains no redirect source, noindex page, or 404', () => {
    for (const url of sitemapUrls) {
      const path = new URL(url).pathname.replace(/\/$/, '') || '/';
      assert.ok(!redirectStubs.has(path), `sitemap lists redirect source ${path}`);
      assert.ok(!MUST_BE_NOINDEX.includes(path), `sitemap lists noindex page ${path}`);
    }
  });

  test('every indexable page is in the sitemap', () => {
    // A page missing from the sitemap is the most common repo-side cause of
    // "Crawled – currently not indexed".
    const listed = new Set(
      sitemapUrls.map((u) => new URL(u).pathname.replace(/\/$/, '') || '/')
    );
    for (const [route] of indexablePages()) {
      assert.ok(listed.has(route), `${route} is indexable but missing from the sitemap`);
    }
  });

  test('every sitemap URL is on the canonical origin', () => {
    for (const url of sitemapUrls) {
      assert.equal(new URL(url).origin, SITE_ORIGIN, `${url} is off-origin`);
    }
  });
});

describe('redirects', () => {
  test('every legacy path is forced, so the meta-refresh stub cannot shadow it', () => {
    // Netlify and Cloudflare Pages only apply an unforced rule when no file
    // exists at that path, and Astro writes a stub at exactly these paths.
    for (const rule of redirectRules) {
      if (rule.from === '/sitemap.xml') continue;
      assert.equal(rule.status, '301!', `${rule.from} is not a forced 301`);
    }
  });

  test('both the bare and trailing-slash form of each legacy path is covered', () => {
    const sources = new Set(redirectRules.map((r) => r.from));
    for (const r of REDIRECTS) {
      assert.ok(sources.has(r.from), `${r.from} has no rule`);
      assert.ok(sources.has(`${r.from}/`), `${r.from}/ has no rule`);
    }
  });

  test('no redirect chains: every target is a final URL', () => {
    const sources = new Set(redirectRules.map((r) => r.from.replace(/\/$/, '')));
    for (const rule of redirectRules) {
      const target = rule.to.split('#')[0].replace(/\/$/, '') || '/';
      assert.ok(
        !sources.has(target),
        `${rule.from} -> ${rule.to} chains through another redirect`
      );
    }
  });

  test('no redirect loops', () => {
    for (const rule of redirectRules) {
      const from = rule.from.replace(/\/$/, '') || '/';
      const to = rule.to.split('#')[0].replace(/\/$/, '') || '/';
      assert.notEqual(from, to, `${rule.from} redirects to itself`);
    }
  });

  test('every redirect target is a page that exists', () => {
    for (const rule of redirectRules) {
      if (rule.to.endsWith('.xml')) continue;
      const path = rule.to.split('#')[0].replace(/\/$/, '') || '/';
      assert.ok(pages.has(path), `${rule.from} -> ${rule.to}, which was not built`);
    }
  });

  test('no unrelated path is redirected to the homepage', () => {
    // A 404 sent to `/` is a soft 404, not a fix. Only quote-intent URLs may
    // land on the homepage, and only because the quote form lives there.
    for (const rule of redirectRules) {
      if (rule.to === '/' ) {
        assert.fail(`${rule.from} redirects to the bare homepage`);
      }
    }
  });

  test('the conventional sitemap path resolves', () => {
    const rule = redirectRules.find((r) => r.from === '/sitemap.xml');
    assert.ok(rule, '/sitemap.xml has no rule and would 404');
    assert.equal(rule.to, '/sitemap-index.xml');
  });
});

describe('internal links', () => {
  /** Every root-relative href/src in the build, with the pages that emit it. */
  const collect = () => {
    const links = new Map();
    for (const [route, html] of pages) {
      for (const m of html.matchAll(/(?:href|src)="(\/[^"]*)"/g)) {
        const href = m[1];
        if (href.startsWith('//')) continue;
        const path = href.split('#')[0].split('?')[0];
        if (!path) continue;
        if (!links.has(path)) links.set(path, new Set());
        links.get(path).add(route);
      }
    }
    return links;
  };

  test('no internal link points at a missing page or asset', () => {
    const assets = new Set(files.map((f) => f.replace(/^dist/, '')));
    const broken = [];
    for (const [path, from] of collect()) {
      const route = path.replace(/\/$/, '') || '/';
      if (pages.has(route)) continue;
      if (assets.has(path) || assets.has(`${route}.html`)) continue;
      broken.push(`${path} (linked from ${[...from].join(', ')})`);
    }
    assert.deepEqual(broken, []);
  });

  test('no internal link points at a URL that redirects', () => {
    const sources = new Set(redirectRules.map((r) => r.from.replace(/\/$/, '')));
    const stale = [];
    for (const [path, from] of collect()) {
      const route = path.replace(/\/$/, '') || '/';
      if (sources.has(route)) stale.push(`${path} (linked from ${[...from].join(', ')})`);
    }
    assert.deepEqual(stale, []);
  });

  test('no internal link carries a trailing slash', () => {
    const slashed = [...collect()].filter(([p]) => p !== '/' && p.endsWith('/'));
    assert.deepEqual(slashed.map(([p]) => p), []);
  });

  test('every indexable page is reachable from at least one other page', () => {
    // Orphaned pages are a repo-side cause of "Crawled – currently not indexed".
    const linked = new Set();
    for (const [path] of collect()) linked.add(path.replace(/\/$/, '') || '/');
    const orphans = indexablePages()
      .map(([route]) => route)
      .filter((route) => route !== '/' && !linked.has(route));
    assert.deepEqual(orphans, []);
  });
});

describe('duplicate metadata', () => {
  test('no two indexable pages share a title', () => {
    const seen = new Map();
    for (const [route, html] of indexablePages()) {
      const title = tag(html, /<title>([^<]*)<\/title>/);
      assert.ok(title, `${route} has no title`);
      assert.ok(!seen.has(title), `${route} and ${seen.get(title)} share the title "${title}"`);
      seen.set(title, route);
    }
  });

  test('no two indexable pages share a meta description', () => {
    const seen = new Map();
    for (const [route, html] of indexablePages()) {
      const desc = tag(html, /<meta name="description" content="([^"]*)"/);
      assert.ok(desc, `${route} has no meta description`);
      assert.ok(!seen.has(desc), `${route} and ${seen.get(desc)} share a description`);
      seen.set(desc, route);
    }
  });
});

describe('route generation', () => {
  test('no duplicate route variants were generated', () => {
    // `/services/weddings` ships a bespoke page and is excluded from the
    // `[service]` dynamic route. If that exclusion ever breaks, two builders
    // claim one URL.
    const routes = [...pages.keys()];
    assert.equal(new Set(routes).size, routes.length);
  });

  test('every service, vehicle and guide has exactly one page', () => {
    // Slugs are read out of the data files as text rather than imported: these
    // modules pull in `.jpg`/`.avif` through `astro:assets`, which only Vite
    // can resolve. The slug literals are the whole contract being checked.
    const slugsIn = (file) =>
      [...readFileSync(file, 'utf8').matchAll(/^\s*slug: '([^']+)',/gm)].map((m) => m[1]);

    for (const s of slugsIn('src/data/services.ts'))
      assert.ok(pages.has(`/services/${s}`), `/services/${s} was not built`);
    for (const v of slugsIn('src/data/fleet.ts'))
      assert.ok(pages.has(`/fleet/${v}`), `/fleet/${v} was not built`);
    for (const g of slugsIn('src/data/guides.ts'))
      assert.ok(pages.has(`/guides/${g}`), `/guides/${g} was not built`);
  });
});
