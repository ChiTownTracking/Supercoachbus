/**
 * Carousel behaviour, shared by the review carousel and the vehicle gallery.
 *
 * The scroll container is the source of truth — the buttons scroll it and the
 * scroll position drives the marks, so a swipe, a trackpad flick, an arrow key
 * and a button press all end in the same state, and there is no second copy of
 * "which slide is showing" to fall out of sync.
 *
 * It works with the script removed: the track is a horizontally scrollable
 * region carrying every slide, and the controls stay `display: none` until this
 * sets `data-ready`, so the affordance is never taken away before its
 * replacement exists.
 *
 * The markup contract, which both callers have to honour:
 *   [data-carousel]  the root; `data-noun` names one slide for the live region
 *   [data-track]     the scroll container, focusable
 *   [data-slide]     one per slide; `data-name` is read into the announcement
 *   [data-count]     optional "01 / 03" readout
 *   [data-prev] [data-next]   optional ends-stop buttons
 *   [data-bar]       optional position marks, each with `data-go`
 *   [data-status]    optional visually hidden live region
 */
export function initCarousels(scope: ParentNode = document) {
  scope.querySelectorAll<HTMLElement>('[data-carousel]').forEach((root) => {
    // Idempotent: two components can both call this on one page without
    // binding every handler twice.
    if (root.hasAttribute('data-ready')) return;

    const track = root.querySelector<HTMLElement>('[data-track]');
    const slides = Array.from(root.querySelectorAll<HTMLElement>('[data-slide]'));
    const bars = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-bar]'));
    const prev = root.querySelector<HTMLButtonElement>('[data-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-next]');
    const count = root.querySelector<HTMLElement>('[data-count]');
    const status = root.querySelector<HTMLElement>('[data-status]');

    if (!track || !prev || !next || slides.length < 2) return;

    const total = slides.length;
    const noun = root.dataset.noun ?? 'Item';
    let index = 0;

    root.setAttribute('data-ready', '');

    const pad = (n: number) => String(n).padStart(2, '0');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)');

    /** Slide positions are read live, so a resize or a font swap cannot stale them. */
    const offsetOf = (i: number) => slides[i].offsetLeft - slides[0].offsetLeft;

    function paint(i: number, announce: boolean) {
      index = i;
      if (count) count.textContent = `${pad(i + 1)} / ${pad(total)}`;
      bars.forEach((b, n) => b.setAttribute('aria-current', n === i ? 'true' : 'false'));
      prev!.setAttribute('aria-disabled', String(i === 0));
      next!.setAttribute('aria-disabled', String(i === total - 1));
      if (announce && status) {
        const name = slides[i].dataset.name ?? '';
        status.textContent = `${noun} ${i + 1} of ${total}${name ? `: ${name}` : ''}`;
      }
    }

    function go(i: number) {
      const target = Math.max(0, Math.min(total - 1, i));
      track!.scrollTo({ left: offsetOf(target), behavior: still.matches ? 'auto' : 'smooth' });
      paint(target, true);
    }

    prev.addEventListener('click', () => {
      if (prev!.getAttribute('aria-disabled') !== 'true') go(index - 1);
    });

    next.addEventListener('click', () => {
      if (next!.getAttribute('aria-disabled') !== 'true') go(index + 1);
    });

    bars.forEach((b) => b.addEventListener('click', () => go(Number(b.dataset.go))));

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(index + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(index - 1);
      }
    });

    // Scroll drives the marks: nearest slide to the current scroll position wins.
    let frame = 0;
    track.addEventListener(
      'scroll',
      () => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const x = track!.scrollLeft;
          let best = 0;
          let bestGap = Infinity;
          for (let i = 0; i < total; i += 1) {
            const gap = Math.abs(offsetOf(i) - x);
            if (gap < bestGap) {
              bestGap = gap;
              best = i;
            }
          }
          if (best !== index) paint(best, true);
        });
      },
      { passive: true },
    );

    // A width change moves every slide's offset; hold the current one in view.
    let settle = 0;
    window.addEventListener('resize', () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(() => {
        track!.scrollTo({ left: offsetOf(index), behavior: 'auto' });
      }, 120);
    });

    paint(0, false);
  });
}
