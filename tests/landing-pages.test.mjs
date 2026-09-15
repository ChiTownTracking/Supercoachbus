import { describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { BOOKING_POLICY, LANDING_QUOTE_DEFAULTS, quoteSourcePath } from '../src/data/bookingPolicy.ts';
import { BUSINESS } from '../src/config/site.ts';
import { FLEET } from '../src/data/fleet.ts';
import { REDIRECTS } from '../src/data/redirects.ts';

// A retired service URL builds a redirect stub, not a bookable landing page.
const redirectPaths = new Set(REDIRECTS.map(rule => rule.from));
const paths = ['/services', '/service-areas', ...['services', 'service-areas'].flatMap(directory =>
  readdirSync(`dist/${directory}`).filter(file => file.endsWith('.html')).map(file => `/${directory}/${file.slice(0, -5)}`),
)].filter(path => !redirectPaths.has(path));
const pages = paths.map(path => ({ path, html: readFileSync(`dist${path}.html`, 'utf8') }));
const attr = (tag, name) => tag.match(new RegExp(`(?:^|\\s)${name}="([^"]*)"`))?.[1];
const field = (form, name) => [...form.matchAll(/<(?:input|select|textarea)\b[^>]*>/g)].map(match => match[0]).find(tag => attr(tag, 'name') === name);
const text = html => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ');

describe('Service and area landing-page booking', () => {
  test('file-format build paths normalize to the public URL', () => {
    assert.equal(quoteSourcePath('/index.html'), '/');
    assert.equal(quoteSourcePath('/services.html'), '/services');
    assert.equal(quoteSourcePath('/services/ohare-airport.html'), '/services/ohare-airport');
    assert.equal(quoteSourcePath('/service-areas/rosemont/'), '/service-areas/rosemont');
  });

  test('every landing page has one complete POST quote form with its own source context', () => {
    for (const {path, html} of pages) {
      const forms = [...html.matchAll(/<form\b[^>]*>[\s\S]*?<\/form>/g)].map(match => match[0]);
      const quotes = forms.filter(form => form.includes('data-quick-quote'));
      assert.equal(quotes.length, 1, `${path}: one quote form`);
      const form = quotes[0];
      assert.equal(attr(form, 'method'), 'post', path);
      assert.equal(attr(form, 'action'), '/thanks/quote', path);
      assert.equal(attr(form, 'data-netlify'), 'true', path);
      assert.equal(attr(field(form, 'form-name'), 'value'), 'quote-request', path);
      assert.equal(attr(field(form, 'sourcePage'), 'value'), path, path);
      assert.ok(attr(field(form, 'requestContext'), 'value')?.trim(), `${path}: request context`);
      for (const name of ['pickup', 'dropoff', 'date', 'time', 'hours', 'days', 'passengers', 'eventType', 'vehicle', 'name', 'email', 'phone', 'notes']) {
        assert.ok(field(form, name), `${path}: ${name}`);
      }
      assert.match(field(form, 'email'), /\srequired(?:\s|=|>)/, path);
      assert.doesNotMatch(form, /name="(?:cardNumber|cardCvv|cardExpiration)"/, `${path}: quote form does not collect payment credentials`);
    }
  });

  test('service-specific defaults are selected in the initial HTML and remain editable', () => {
    for (const {path, html} of pages) {
      const defaults = LANDING_QUOTE_DEFAULTS[path];
      const eventSelect = html.match(/<select\b[^>]*name="eventType"[^>]*>([\s\S]*?)<\/select>/)?.[0];
      const selected = [...eventSelect.matchAll(/<option\b[^>]*>/g)].map(match => match[0]).filter(tag => /\sselected(?:\s|=|>)/.test(tag));
      assert.equal(selected.length, 1, path);
      assert.equal(attr(selected[0], 'value'), defaults?.eventType ?? 'General Charter', path);
      assert.doesNotMatch(eventSelect.slice(0, eventSelect.indexOf('>')), /disabled/, path);
      if (defaults?.hours) {
        const hoursSelect = html.match(/<select\b[^>]*name="hours"[^>]*>([\s\S]*?)<\/select>/)?.[0];
        const option = [...hoursSelect.matchAll(/<option\b[^>]*>/g)].map(match => match[0]).find(tag => /\sselected(?:\s|=|>)/.test(tag));
        assert.equal(attr(option, 'value'), defaults.hours, path);
      }
    }
  });

  test('quote actions stay on the page and fragment links have unique targets', () => {
    for (const {path, html} of pages) {
      assert.doesNotMatch(html, /href="\/(?:#quote-form|reserve(?:\?|"))/, path);
      const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
      assert.equal(ids.length, new Set(ids).size, `${path}: no duplicate IDs`);
      for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(match[1]), `${path}: #${match[1]}`);
      assert.ok((html.match(/href="#quote-form"/g) || []).length >= 3, `${path}: visible booking actions`);
    }
  });

  test('every landing page explains booking terms and offers real vehicle choices', () => {
    const vehicleIds = new Set([...FLEET.map(vehicle => vehicle.slug), 'wedding-package']);
    for (const {path, html} of pages) {
      const copy = text(html);
      assert.ok(copy.includes(`$${BOOKING_POLICY.depositAmount} deposit at booking.`), path);
      assert.ok(copy.includes(`Remaining balance charged ${BOOKING_POLICY.balanceDaysBeforeTrip} days before your trip.`), path);
      assert.ok(copy.includes('Your reservation manager confirms the booking with you.'), path);
      assert.ok(copy.includes('Driver gratuity is generally separate'), path);
      assert.ok(copy.includes('wheelchair-accessible transportation'), path);
      const choices = [...html.matchAll(/data-quote-vehicle="([^"]+)"/g)].map(match => match[1]);
      assert.ok(choices.length > 0, `${path}: choose a vehicle on the page`);
      choices.forEach(choice => assert.ok(vehicleIds.has(choice), `${path}: ${choice}`));
    }
    const wedding = pages.find(page => page.path === '/services/weddings').html;
    assert.match(wedding, /href="#quote-form"[^>]*data-quote-vehicle="wedding-package"[^>]*data-quote-hours="8 Hours"/);
    assert.doesNotMatch(wedding, /<dialog[^>]*id="wedding-package-quote"/);
  });

  test('location and service pages retain one real business identity and one H1', () => {
    for (const {path, html} of pages) {
      assert.equal((html.match(/<h1\b/g) || []).length, 1, path);
      const nodes = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1])).flat();
      const businesses = nodes.filter(node => node['@type'] === 'LocalBusiness');
      assert.equal(businesses.length, 1, path);
      assert.equal(businesses[0].address.addressLocality, BUSINESS.address.city, path);
      assert.equal(businesses[0].address.streetAddress, BUSINESS.address.street, path);
    }
  });
});
