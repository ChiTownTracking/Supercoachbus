---
name: Chicago Super Coach
description: Chicago's public-way signage program, built as a charter booking site — porcelain enamel blades, Highway Gothic, and amber reserved for action.
colors:
  enamel: "#0d5637"
  enamel-deep: "#0a3f2a"
  enamel-lift: "#137047"
  enamel-line: "#3f8a60"
  enamel-ink: "#0b4029"
  paper: "#edeee9"
  paper-lift: "#f7f8f5"
  paper-line: "#d2d5cc"
  signal: "#f6f7f4"
  signal-dim: "#b9c9bf"
  signal-unset: "rgb(255 255 255 / 0.62)"
  ink: "#10201a"
  ink-dim: "#46564e"
  hivis: "#ffb100"
  hivis-lift: "#ffc233"
  hivis-deep: "#d68f00"
  hivis-ink: "#241800"
  azure: "#6ac9ee"
typography:
  scale:
    key-mono: "0.625rem"
    label: "0.6875rem"
    coordinate: "0.75rem"
    direction: "0.8125rem"
    nav-phone: "0.875rem"
    support: "0.9375rem"
    control: "1rem"
    body: "1.0625rem"
    sub-heading: "1.125rem"
    service-name-min: "1.25rem"
    plate-heading: "1.375rem"
    receipt: "1.5rem"
    contact-heading: "1.625rem"
    blade-receipt: "2.125rem"
    fleet-numeral: "2.25rem"
    hero-display-min: "2.5rem"
    card-numeral-max: "3rem"
    pagehead-max: "4.5rem"
    hero-display-max: "4.75rem"
    capacity-numeral: "5rem"
  display:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw, 5.75rem)"
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.4vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.03em"
  title:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.6vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  body:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "'Overpass Mono Variable', ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.14em"
  coordinate:
    fontFamily: "'Overpass Mono Variable', ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.14em"
  gothic:
    fontFamily: "'Overpass Variable', system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 900
    lineHeight: 1.05
    letterSpacing: "0.01em"
rounded:
  keyline: "1px"
  plate: "3px"
  square: "0"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "12": "3rem"
  "16": "4rem"
  "24": "6rem"
  "32": "8rem"
components:
  action-primary:
    backgroundColor: "{colors.hivis}"
    textColor: "{colors.hivis-ink}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  action-primary-hover:
    backgroundColor: "{colors.hivis-lift}"
    textColor: "{colors.hivis-ink}"
  action-primary-disabled:
    backgroundColor: "{colors.paper-line}"
    textColor: "{colors.ink-dim}"
  action-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.signal}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  action-ink:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.signal}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  action-ink-hover:
    backgroundColor: "{colors.enamel-lift}"
    textColor: "{colors.signal}"
  field:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.signal}"
  field-deep:
    backgroundColor: "{colors.enamel-deep}"
    textColor: "{colors.signal}"
  blade:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.signal}"
    rounded: "{rounded.plate}"
    padding: "1rem 1.5rem"
  plate:
    backgroundColor: "{colors.paper-lift}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "1.5rem"
  plate-on-field:
    backgroundColor: "rgb(255 255 255 / 0.045)"
    textColor: "{colors.signal}"
    rounded: "{rounded.plate}"
    padding: "1.5rem"
  plate-square:
    backgroundColor: "{colors.paper-lift}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "2rem"
  control-input:
    backgroundColor: "{colors.paper-lift}"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "0.75rem 1rem"
  control-label:
    textColor: "{colors.ink-dim}"
    typography: "{typography.label}"
  coordinate:
    textColor: "{colors.azure}"
    typography: "{typography.coordinate}"
  coordinate-ink:
    textColor: "{colors.ink-dim}"
    typography: "{typography.coordinate}"
  nav-link:
    textColor: "{colors.signal}"
    padding: "0.5rem 0"
  placeholder:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.plate}"
    padding: "1.5rem"
---

# Design System: Chicago Super Coach

## Overview

**Creative North Star: "The Public Way"**

This is Chicago's street-blade signage program rebuilt as a booking site. Every surface is a fabricated object: a porcelain enamel plate in deep green, lettered in Highway Gothic caps, punched with near-square corners, and marked in high-visibility amber only where something must be acted on. The system is built from six primitives — `.field`, `.blade`, `.plate`, `.action`, `.coordinate`, `.control` — and a page is assembled by alternating enamel bands against a concrete ground, not by stacking cards. Both grounds are textured from the same source, the logo's sheared bar: broken into a run of white dashes on the enamel, and threaded along wide directional bands in the mark's own colours in the concrete.

The density is civic rather than editorial: generous vertical bands (`clamp(4rem, 9vw, 8rem)`) around content that is itself tightly set, with headline tracking pulled in hard (-0.03em to -0.05em) and label tracking pushed out hard (0.10em to 0.20em). Nothing floats. Nothing glows. The one place the system moves mechanically is the destination blade, which drops into its bracket when a request is sent and rolls its vehicle line the way a coach's destination blind rolls.

The category anti-reference is explicit and was refused by construction, not by taste: no *stock* highway photograph and no translucent quote bar floating over a generic hero. Photography is now first-class, but only the business's own — the actual coach, its actual cabin — mounted as sign plates under the Mounted-Photograph Rule, and the hero photograph bled off the right edge of a concrete band, dissolving into the ground under an alpha mask rather than under a scrim. Proof is carried by the photograph, by drawn geometry (the `SeatPlan` seating diagram, the authored 24×24 icon set), and by one real capacity numeral at scale — which lives in the homepage fleet section and on `/fleet`, not in the hero. The hero once carried that numeral on a plate over the photograph; it was removed at the owner's direction, and the first viewport now rests on the coach itself.

**Key Characteristics:**
- Two color grounds — enamel green and concrete — and every component works on both
- 3px corners on every UI surface; a fabricated sign plate, not a web card
- Amber exclusively for action, state and safety marking, held under a few percent of any viewport
- Highway Gothic lineage: Overpass Variable, descended from the FHWA road-sign series
- One elevation signal per surface — hairline or marked top edge, never both, never a shadow
- Proof is the operator's own: their coach photographed, one real capacity numeral, drawn seat plans, authored icons — never stock vehicles or invented specs

## Colors

A two-ground palette — deep porcelain green and cool concrete — punctuated by a single high-visibility amber and a narrowly reserved Chicago-flag azure.

### Primary
- **Porcelain Enamel Green** (`enamel`): The identity field. Carries roughly half the surface of the site — the masthead, the services band, interior `PageHead` bands, the footer, and every `.blade` — and, since the hero moved to the concrete ground, it is also the ink of the hero headline, its coordinate, and its icons. Also the ink color of drawn diagrams and inline icons when they sit on concrete.

  The ramp was lifted ~2.1× in luminance across three passes from the near-black forest green it started as, which was reading heavy rather than confident. Internal ratios were preserved: `lift` sits ~1.4:1 above the field so a hover is felt, `line` ~2:1 so a hairline is seen.

  **Chroma is the cheaper half of "brighter".** Saturation went 0.74 → 0.85, pulling the field toward the mark's own green, and that is where most of the vividness came from rather than from lightness. Saturation at fixed luminance costs almost no contrast; lightness costs it directly, against every foreground at once. Reach for chroma first when this field needs to feel more alive, and only then for lightness.

- **Enamel Ink** (`enamel-ink`): The same green as a **mark** rather than as a **surface** — every green headline, numeral, icon, drawn seat, marked edge, focus border and hairline that sits on the concrete ground.

  `--enamel` used to do both jobs, and that made it the one token in the system that could not be changed without a fight: as a field it wants to be light enough to feel alive, as ink it wants to be dark enough to read as type, and those pull in opposite directions. Splitting the token settles it permanently — the field is free to be vivid and green type is free to be dark.

  **The rule: green as a surface is `--enamel`; green as a mark on concrete is `--enamel-ink`.** A filled chip carrying signal-white text is a surface however small it is — the services arrow button, the step-two numbered chip, `.action--ink`, `.method--primary`, `.action--outline` in its hovered filled state. A 3px marked edge, a drawn seat, an icon, a capacity numeral, a focus border and a route stop are all marks. When adding a green thing, ask which of the two it is; the answer is never "both".
- **Enamel Deep** (`enamel-deep`): The band-within-a-band. Used for the page-closing call band and the footer, and as the mobile nav drawer fill, so a second enamel surface can sit against the first without a border.
- **Enamel Lift** (`enamel-lift`): Hover fill for enamel-backed actions and the primary contact method plate.
- **Enamel Line** (`enamel-line`): The hairline on enamel — plate borders inside a field, the services list rules, footer dividers, and the resting color of footer icons. Not the masthead: that band carries no underbar.

### Secondary
- **High-Visibility Amber** (`hivis`): The action color and nothing else. Primary button fill, the focus ring, the current-page nav underline, the arrow inside the destination blade, the recommended vehicle name, arrow tips on hover, the after-hours charter note, and the 3px marked top edge on the footer and the map. It is never a heading color, never a background field, never decoration.
- **Amber Lift** (`hivis-lift`): The only hover value for the primary action.
- **Amber Deep** (`hivis-deep`): The darker amber used where amber must sit on concrete and pass as text — the required-field asterisk and the unresolved-placeholder marker and its dashed border.
- **Amber Ink** (`hivis-ink`): Near-black brown, the text color on every amber fill. Never used on any other ground.

### Tertiary
- **Chicago Flag Azure** (`azure`): Coordinates and measurement marks only. The mono grid coordinate above a heading, the hero's coordinate line, the blade's coordinate strip, footer column heads, and destination keys. It never carries body text and is never a fill. It no longer appears in the masthead. Opened up from the flag's own `#41b6e6` across two passes of lifting the enamel field — this is 11px mono that has to clear 4.5:1. **Azure on enamel is the binding pair in this palette**: at 4.66:1 it is the tightest measurement on the site, and it reaches the floor before `signal-dim` (5.06:1) or amber do. Any further lift of `--enamel` has to buy its headroom here first, and there is not much of it left — the next pass should come out of chroma, not lightness.

### Neutral
- **Concrete** (`paper`): The reading ground. The body background under every non-enamel band.
- **Concrete Lift** (`paper-lift`): The plate fill — one step above the ground, which is how a plate reads as a plate without a shadow.
- **Concrete Line** (`paper-line`): The hairline on concrete — plate borders, input borders, section rules, and the disabled action fill.
- **Signal White** (`signal`): Type on enamel. Slightly warm-neutral rather than pure white, the way sign-white sits against a green field.
- **Signal Dim** (`signal-dim`): Secondary type on enamel — ledes, captions, footer links at rest, the blade's detail line.
- **Ink** (`ink`): Body type on concrete.
- **Ink Dim** (`ink-dim`): Secondary type on concrete — ledes, mono labels, captions, the `.coordinate--ink` variant.

### Brand mark
The supplied logo (`src/assets/images/logo.png`, 409×202) carries its own palette, sampled from the file and held as `--brand-navy` `#204878`, `--brand-teal` `#087070`, `--brand-green` `#14945f`. **These document the mark; they are not part of the page palette.** Exactly one element is painted with them: the 4px gradient rule between the hero headline and its lede, which runs navy → teal → green in the mark's own order. That is the whole allowance. They are never type colours, never fills, and never a second accent alongside amber.

### Named Rules

**The Mounted-Photograph Rule.** Photographs are mounted like sign plates, never bled soft into the page: `--radius` corners, `overflow: hidden`, an enamel-deep backing, and a scribed `::after` keyline inset 4–5px at `rgb(255 255 255 / 0.28)` — the same keyline `.blade` carries. No shadows, no rounded-card treatment. The hero is the one exception, and the exception is total: its photograph covers the whole band at every width, with no keyline, no backing and no containment.

**The Masked-Ground Rule.** The hero photograph is never darkened, tinted, scrimmed, or panelled to carry type. It is *masked back into the ground* — the band paints flat `paper` and the photograph's own alpha ramps from a few percent under the copy to fully opaque at the cab. Two consequences, and both are the point:

- Where the type sits, the background is a flat, known colour, not a photograph with something laid over it. Contrast is a fact about `paper`, not a bet on a photograph.
- The band reads as one sheet with a coach coming up out of it. It carries the same ground as the quote form beneath it and no border between them, and the photograph's last sixth dissolves downward so it stops at the ground rather than at an edge.

**Ramp mechanics.** Four steps (`--ramp-1` 5% → `--ramp-4` 48%) built with `color-mix(in srgb, currentColor N%, transparent)`. Only a mask stop's alpha is read, so `currentColor` means "fully opaque" and no colour literal — and no drift risk — enters the ramp. The ramp runs down the band below 64rem, where the copy fills the box; above it, it turns and runs across, faint through the copy column and fully itself before the cab, closing in one step further at 80rem where the copy column stops growing. A second, single-layer mask on the wrapper does the foot dissolve — two masks that multiply, rather than one `mask-composite`, which fails *open* if a browser misses it and would blow the whole ramp to opaque.

**Three bindings on anything built this way:**

- **Every stop is set by measurement, not by eye.** Sample the rendered band with the copy hidden, take the darkest pixel inside each line's client rect, and compute against that line's own colour and size. The ramp came down when the ground moved from `paper-lift` to the darker `paper`, and back up when the pattern came out from under it. Currently 5.12:1 at worst for small type against a 4.5:1 floor, and 8.3:1 at worst for the headline against a 3:1 floor.
- **Nothing translucent stands on it.** The phone button was a transparent hairline-ringed control and had to become an opaque `paper-lift` fill with a full-strength `enamel` ring. The hours divider went from the `paper-line` token to `currentColor` at 0.4 for the same reason — the hairline was tuned for flat paper and vanished over a photograph.
- **No pattern under a dissolving photo edge.** The hero is the one concrete band held clean of `--concrete-pattern`; it paints `paper` itself rather than letting the body's ground through. The photograph is the texture here, and a repeating pattern showing through a fading photograph reads as dirt on the lens.

**The Logo-Plate Rule.** The logo is never placed directly on an enamel field. Its navy wordmark measures 1.35:1 against `--enamel`, so on any dark ground it sits on a `--signal` plate. Knocking the mark out to white is not the alternative — that would destroy its navy-to-green gradient, which is the only gradient anywhere in this system. The plate is also world-correct: an enamel sign carries a maker's plate.

The plate takes one of two forms, and which one depends on whether the plate has an edge to meet:
- **Bolted** (masthead): full-bleed to the top and bottom of the band, `padding-inline` only, square corners, mark at `4rem` (`3rem` below 30rem).
- **Mounted** (footer): floating inside the band at `--radius` with `--space-3`/`--space-4` padding, mark at `3.5rem`.

**The Amber-For-Action Rule.** Amber marks what a person must act on or attend to: actions, focus, the current location in nav, the system's own recommendation output, required-field marks, unresolved placeholders, and the hard top edge of a terminal band. It is held under a few percent of any viewport. Painting amber on a heading, a decorative rule, or a background field breaks the world.

**The Two-Grounds Rule.** Enamel and concrete are both first-class grounds. A component ships one base treatment plus a `.field` descendant override (`.field .plate`, `.field .lede`, `:global(.field) .plan`), never two parallel variants. Any new component must be checked on both grounds before it is done.

**The Azure Reserve Rule.** Azure appears only on mono type that names a coordinate, a key, or a measurement. It is never a fill, never a border, never running prose.

**The One-Motif Rule.** There is one texture in this system and it comes from the logo's sheared bar — the same 4-over-4 lean, the same bar weight. Each ground carries it in the register that ground can hold, and no surface carries two.

- **Enamel** takes `--enamel-pattern`: that bar broken into a run of dashes at eight lengths across three uneven rows, on a 96×60 tile, solid white at `fill-opacity: 0.05`. It is on the masthead, every `.field`, every `.blade`, and the contact panel. Two earlier attempts are worth not repeating. Repeating the *mark itself* — all three stacked bands — made wallpaper: at a tight stride it read as woven fabric, and at a wide one a visitor counted logos instead of reading the sign. Taking only the bar, and varying its length and row spacing so no grid is legible, reads as lane marking. It belongs to the road rather than to the letterhead, which is the point. Solid bars, not outlines: at this weight an outline is a pair of hairlines.
- **Concrete** takes `--concrete-pattern` (`public/pattern.svg`), the owner's artwork: the same mark at a much larger stride, threaded along directional bands and fine connector lines, in the mark's own navy-teal-green. Set on `body` at `background-size: 320px auto` and held near a tenth opacity, because a full-page ground runs behind body prose and linework at prose weight fights the line it sits under. It tiles horizontally — the connector lines meet across the seam by construction, and the top-right band carries a wrap piece so it continues rather than being cut.

Enamel bands paint over the concrete pattern; nothing layers the two. The predecessor honeycomb — retroreflective sign facing — is gone: it was the one element in the system drawn from the world rather than from the mark, and at 0.055 it communicated nothing a visitor could name.

## Typography

**Display Font:** Overpass Variable (with `system-ui`, `sans-serif`)
**Body Font:** Overpass Variable — the same family, differentiated by weight and tracking
**Label/Mono Font:** Overpass Mono Variable (with `ui-monospace`, `monospace`)

Both are self-hosted via `@fontsource-variable/overpass` and `@fontsource-variable/overpass-mono`, imported at the top of `src/styles/global.css`. There is no webfont network request.

**Character:** Overpass was chosen because it descends from Highway Gothic — the FHWA series that is the actual lettering on American road signs. The pairing is therefore not a stylistic reference to signage; it is the signage face and its monospaced sibling. Single-family typography, run at the extremes: 900-weight display caps with tracking pulled to -0.035em against 700-weight mono labels tracked out to 0.20em. `font-synthesis-weight: none` is set globally so a missing weight fails visibly rather than being faked.

### Hierarchy
- **Display** (900, `clamp(2.75rem, 7.5vw, 5.75rem)`, 0.95, -0.035em): The one oversized gothic line per page. Hero headline and every `PageHead` title, where it is narrowed to `clamp(2.5rem, 6vw, 4.5rem)` and capped at 18ch.
- **Headline** (800, `clamp(2rem, 4.4vw, 3.25rem)`, 1.04, -0.03em): Section heads. Always constrained by a character cap (16ch–20ch) so it breaks as a sign breaks, not as a paragraph does.
- **Title** (700, `clamp(1.375rem, 2.4vw, 1.75rem)`, 1.2, -0.02em): Vehicle names, sub-section heads inside a band.
- **Lede** (400, `clamp(1.125rem, 1.6vw, 1.3125rem)`, 1.55): The one paragraph under a heading. Takes `ink-dim` on concrete and `signal-dim` on enamel automatically. Constrained to 44ch–52ch at the composition level, not by the primitive.
- **Body** (400, `1.0625rem`, 1.65): Running text. Global measure is 68ch (`--measure`); legal prose runs at 1.7 line-height through `LegalBody`.
- **Label** (mono, 700, `0.6875rem`, 0.14em–0.20em, uppercase): Field labels, footer column heads, figure captions, blade keys, destination keys. Always mono, always uppercase, always tracked.
- **Coordinate** (mono, 600, `0.75rem`, 0.14em, uppercase, azure): The line above a heading. See its rule below.
- **Gothic caps** (`.gothic`, uppercase, +0.02em): The sign-lettering modifier. Applied to the wordmark, service names, vehicle names in the blade, and capacity labels.

Numerals in mono contexts get `font-variant-numeric: tabular-nums` via `.mono`, so counts and capacities never jitter as they update.

**The utility steps.** Below Lede the build also uses a short list of fixed sizes that the seven named roles above never covered, and they have been in the code since the first pass — documenting them here rather than pretending the ramp is only seven values. In `rem`, with their pixel equivalents: `0.625` (10px, the smallest mono key), `0.6875` (11px, the Label step), `0.75` (12px, the Coordinate step), `0.8125` (13px, directional links and captions), `0.875` (14px, the masthead phone), `0.9375` (15px, supporting copy inside a component — the most-used size in the build after body), `1` (16px, drawer links and form controls), `1.0625` (17px, the Body step), `1.125` (18px, sub-headings inside a plate), `1.375` (22px, plate headings). Three one-off sizes exist above that and are noted where they are used: `1.5rem` on both blades' receipt lines, `1.625rem` on the contact page, `2.25rem` on `/fleet`. **Anything not on this list is a new step and needs a reason.** A guide's `h2` wanted 26px and took the Title step's `clamp(1.375rem, 2.4vw, 1.75rem)` instead, because a guide's `h2` is a sub-section head inside a band and that is what the step is for.

### Named Rules

**The Highway Gothic Rule.** Overpass is the only voice. Its descent from the FHWA series is the reason it is here, so a second display face — a serif, a geometric, a condensed — would put a different road on the same sign. There is no second family beyond the mono sibling.

**The Mono-Is-Measurement Rule.** Overpass Mono carries only what is measured or indexed: coordinates, keys, counts, capacities, captions, timestamps, service designations. It never carries running prose and never sets a heading.

**The Tracking-Follows-Case Rule.** Uppercase always carries positive tracking (+0.02em on gothic display caps, 0.10em–0.20em on mono labels). Mixed-case display and headline always carry negative tracking (-0.02em to -0.05em). There is no uppercase run at neutral tracking anywhere in the build.

**The Coordinate-Carries-Information Rule.** The `.coordinate` line above a heading is a grid coordinate on a blade, not a marketing eyebrow. It must name a real location, a real section index, or a real destination — `1300 W · Chicago, Illinois`, `The fleet`, `Verified customer reviews`. It must never restate the heading beneath it in softer words, and it must never be added purely to give a heading a hat. Its trailing rule (`::after`, a 1px line at 0.35 opacity filling the remaining width) is what makes it read as a sign's coordinate bar rather than a kicker.

## Layout

The page is a vertical stack of full-bleed bands alternating between the two grounds; nothing is a floating card on a wallpaper. Horizontal containment is a single primitive, `.shell`: `min(100% - 2.5rem, 78rem)`, widening its gutter to `5rem` at 48rem and above. `--shell` is 78rem and `--measure` is 68ch.

**Spacing rhythm.** A 4px-based ramp exposed as `--space-1` (0.25rem) through `--space-32` (8rem): 1, 2, 3, 4, 5, 6, 8, 12, 16, 24, 32. `--space-4` and `--space-6` do most of the work inside components; `--space-5` is the plate-padding step; `--space-12` and `--space-16` separate blocks within a band.

**Band rhythm.** Two tiers, both flat: `.section` sets `padding-block: 4rem`, `.section--tight` sets `3rem`. The hero, the quote form and the closing band all run at `3rem` — tighter than a section band, not wider, so the form clears the fold. `PageHead` is the one band still fluid, at `clamp(2rem, 4.5vw, 3rem)`, because a nameplate sits directly under the masthead and a phone has no room to spend there. Bands never carry a top and bottom border at once — the ground change is the separation. The hero and the quote form are the exception in the other direction: same ground, no border between them, joined into one surface by the photograph dissolving across the join.

**Tighten desktop at the ceiling, never at the floor.** These were all fluid — a `clamp` whose ceiling *was* the desktop value and whose floor *was* the phone value — which makes "too much space on desktop" a one-token change per band that a phone never feels. The ceilings came down the ramp twice on that principle, from `8rem`/`6rem` to `4rem`/`3rem`. On the second pass each ceiling met its own floor, so the clamps are now written as the constants they had become; a `clamp()` whose ends are equal is a constant wearing a costume, and leaving it dressed up invites the next reader to think the fluid range still means something. Measured at 390px, every band resolves to the same padding it did in the original build **except the closing band**, which went from 4rem to 3rem — it had already been flattened to a constant in the first pass, so the second pass had no ceiling left to take and moved the whole thing. That is the one place a phone felt either reduction, and it is the shape of the trade: once a band is flat, "desktop only" is no longer available to it. Tablets and small laptops did tighten on the second pass, which is intended — 1024px is a desktop. If a future pass needs to go further, it has to take the floors down, and that is a different decision made for a different screen.

**Grids.** Compositions use explicit `grid-template-columns` at named widths rather than a global column system:
- Hero is a concrete band, not an enamel one: the photograph covers the whole band at every width, with the copy column left and capped at `min(40rem, 50vw)` so it ends at roughly half the band on every desktop size
- Fleet and vehicle detail split evenly at 52rem and 60rem
- Footer splits `1fr / 1.45fr` at 60rem; its link columns are `auto-fit, minmax(11rem, 1fr)`
- Testimonials split `0.85fr / 1.15fr` at 64rem — heading and controls left, the review strip right
- Guide grids go one, then two at 44rem, then three at 64rem — two before three, so a fourth guide lands in a grid that already knows what to do with it rather than stranding one card on its own line
- The booking form is a 4-column grid collapsing to 2 at 46rem, with `.span-2` and `.span-4` utilities; `.span-2` becomes full-width on collapse

**Breakpoints observed** (all `rem`, all component-local rather than global): 40rem (the guide fleet comparison swaps from table to stack), 44rem (guide grids go two-up), 46rem (form grid, blade meta restacks), 48rem (shell gutter), 52rem (fleet grid, services rows, guide hero widens to 21:9), 60rem (nav drawer, footer, vehicle detail), 64rem and 80rem (hero measure and the two steps of the hero wash; 64rem also splits the review carousel and takes guide grids three-up), 72rem (the masthead's phone number returns).

**The masthead's width budget.** The bar carries the mark, five nav links, a phone number and the one action, and it has now twice run out of room — first when a grid coordinate sat beside the logo, and again when Guides became the fifth link, which wrapped `Reserve now` onto two lines and grew the band from 81px to 106px. Three rules hold it: the action never wraps (a call to action broken across two lines is a paragraph with a background); between the drawer breakpoint and 72rem the gaps close up; and in that same band the phone number stands down. The phone is the only item in the bar that can leave without taking a route with it — it is repeated verbatim in the footer of every page and in the drawer below 60rem. Measured at 961/1000/1024/1100/1152/1153/1280/1440/1920, the band is 81px at every width with no collision.

**One container query.** The hero's hours divider asks `.hero__lead`, not the viewport, whether it has 35rem to work in. Everything else in the build is a media query. The rule: when the thing that decides a layout is a component's own width rather than the screen's, ask the component — a viewport guess got the divider right on a phone and stranded it again at 1024, where the copy column is capped to half the band.

**Sticky elements.** The masthead is `sticky; top: 0; z-index: 50` and is the only one. The destination blade used to be sticky above the form; it is now a receipt below it and sticks to nothing. Anchor targets carry `scroll-margin-top: 6rem` to clear the masthead.

**The `.stack` primitive** applies `margin-top: var(--flow, var(--space-4))` to adjacent siblings, so a composition can retune its own flow rhythm by setting `--flow` locally.

## Elevation & Depth

The system is flat and material. Depth comes from ground changes, hairlines, and marked edges — not from shadows. A `.plate` reads as raised because `paper-lift` sits one step above `paper` and a `paper-line` hairline closes it, not because anything is casting light.

Exactly one element casts a shadow: `.action`. Its shadow is a press affordance, not ambience — a hard 2px offset with no blur at rest, lifting to a real blur on hover and compressing to 1px on `:active` while the button translates down. Everything else that needs to signal state uses a border color change, a background lightening (`rgb(255 255 255 / 0.045)` → `rgb(255 255 255 / 0.1)` on enamel; `paper-lift` on concrete), or an inset ring.

### Shadow Vocabulary
- **Press rest** (`box-shadow: 0 2px 0 rgb(0 0 0 / 0.22)`): The resting edge under `.action`. Zero blur — a fabricated part sitting on a surface.
- **Press hover** (`box-shadow: 0 4px 10px rgb(0 0 0 / 0.2)`, with `translateY(-1px)`): The button lifting under the cursor.
- **Press active** (`box-shadow: 0 1px 0 rgb(0 0 0 / 0.22)`, with `translateY(1px)`): The button pressed home.
- **Ghost ring** (`box-shadow: inset 0 0 0 1.5px rgb(255 255 255 / 0.4)`, 0.75 on hover): The outlined action on enamel. Inset, so it never reads as a cast shadow.
- **Input focus ring** (`box-shadow: 0 0 0 3px rgb(14 59 42 / 0.14)`, with `border-color: enamel`): The only glow in the system, and it is a tint of enamel rather than a neutral halo.

### Named Rules

**The One-Signal Rule.** A surface gets exactly one elevation signal. A `.plate` has a hairline border *or* a 3px marked top edge — never both, and never either plus a shadow.

**The Shadow-Is-Press Rule.** `box-shadow` belongs to the pressable and to focus. Plates, blades, the masthead, the mobile nav drawer, and the review plate all cast nothing. The carousel's own arrow buttons are the edge case that proves it: they are pressable, so they carry a ring — but an *inset* one, because they stand on concrete rather than on a photograph, and a ring is the whole affordance until it is pressed.

## Shapes

**Corners.** `--radius` is `3px` and it is the only radius on any UI surface. This is a deliberate world decision, not an oversight: a fabricated sign plate has a punched, near-square corner, and a 16px radius would be a web card wearing a sign's colors. Two smaller radii exist for specific parts: `1px` on the blade's inset keyline and on the global focus outline, both of which need to read as a scribed line rather than a rounded frame.

**The inset keyline.** `.blade::before` is absolutely positioned at `inset: 5px` with a `1px solid rgb(255 255 255 / 0.32)` border and `1px` radius. This is the line every fabricated blade carries a few millimetres inside its edge, and it is what distinguishes a blade from a green rectangle. It is `pointer-events: none`.

**Marked edges.** The alternative to a bordered plate is a square plate with a 3px colored top edge: `border-top: 3px solid` in either `enamel-ink` (the review plate, the about facts panel, the service detail panel) or `hivis` (the footer, the map). These take no radius at all. It is `enamel-ink` and not `enamel` because a 3px rule is a mark on concrete, not a surface — see the surface/mark split in Colors.

**Hairlines.** 1px throughout — `paper-line` on concrete, `enamel-line` on enamel, and `--blade-divider` (`rgb(255 255 255 / 0.22)`) for internal dividers inside a blade. The divider sits a step below the inset keyline on purpose: a blade must read as one plate with rules scribed on it, not as stacked panels.

**Drawn geometry.** `SeatPlan` renders vehicle plans as SVG from real row data at a single shared scale across the fleet, so relative vehicle size stays true if a second coach is ever added. Its own geometry uses `rx="10"` on the vehicle body and `rx="2"` on seats — these are drawing radii for a depicted object, outside the UI radius system.

**Icons.** `Icon.astro` is an authored 9-glyph set (arrow, phone, mail, pin, clock, seat, check, menu, close), all `24×24`, `stroke-width="2"`, `stroke-linecap="square"`, `stroke-linejoin="miter"`, `fill="none"`, always `currentColor`, always `aria-hidden`. The square caps and miter joins are the point: these are drafted marks, not soft UI icons.

### Named Rules

**The Fabricated-Corner Rule.** 3px, everywhere, via `var(--radius)`. Never 8px, 12px, or 16px. If a surface needs to feel softer, it needs a different ground, not a different corner.

**The Square-Plate Rule.** Radius and a marked top edge are mutually exclusive. A plate carrying `border-top: 3px solid` takes `border-radius: 0`. A plate carrying a full 1px border takes `var(--radius)`.

## Components

### Buttons — `.action`
The pressable object of the system: an inline-flex bar with an icon slot, uppercase 800-weight sans at 0.9375rem tracked to 0.06em.
- **Shape:** Near-square plate corners (3px), `1rem 1.5rem` padding, `gap: 0.75rem` to its icon.
- **Primary:** Amber fill on amber-ink type, with the 2px hard press edge. This is the site's only unqualified call to action.
- **Hover / Focus:** Fill lifts to `hivis-lift`, `translateY(-1px)`, shadow blurs; 180ms on `--ease-out`. Focus is the global amber ring.
- **Ghost (`.action--ghost`):** Transparent with a 1.5px inset white ring at 0.4, going to 0.75 and a `rgb(255 255 255 / 0.1)` wash on hover. Enamel grounds only.
- **Outline (`.action--outline`):** The concrete-ground twin of ghost, added when the hero moved to paper. `paper-lift` fill, `enamel` label, 1.5px inset `enamel` ring, flipping to a solid `enamel` fill with a `signal` label on hover. Unlike ghost it is opaque and its ring is a full-strength color, because it stands on the hero photograph: a hairline over a photograph is not a boundary, and a control you can see the road surface through is not a control. Concrete grounds only. Neither variant casts — the ring is the whole affordance until it is pressed.
- **Ink (`.action--ink`):** Enamel fill, signal type, lifting to `enamel-lift`. The secondary action on concrete.
- **Disabled:** `paper-line` fill, `ink-dim` type, no shadow, no transform. Responds to both `[disabled]` and `[aria-disabled="true"]`.

### Directional link — `.direction`
The non-button wayfinding link: uppercase 700 at 0.9375rem, 0.04em tracking, a 2px `currentColor` underline with 2px of clearance, and a drawn arrow. Its hover animates `gap` from `0.5rem` to `0.75rem` — the arrow steps away from the words rather than the whole element moving.

### Cards / Containers — `.plate`
- **Corner Style:** 3px, or square when carrying a marked top edge.
- **Background:** `paper-lift` on concrete; `rgb(255 255 255 / 0.045)` on enamel, lightening to `0.1` on hover.
- **Border:** 1px `paper-line`, auto-switching to `enamel-line` inside a `.field`.
- **Shadow Strategy:** None. See The Shadow-Is-Press Rule.
- **Internal Padding:** `1.5rem` standard; `2rem` for square plates carrying a marked edge.

### Inputs / Fields — `.control`
- **Style:** Column flex with a mono uppercase label above (0.6875rem, 700, 0.14em, `ink-dim`), then a full-width control with a 1px `paper-line` border, 3px corners, `paper-lift` fill, and `0.75rem 1rem` padding. Font-size is held at exactly `1rem` so iOS does not zoom on focus.
- **Focus:** Border goes to `enamel` with a 3px enamel-tinted ring (`rgb(14 59 42 / 0.14)`); the native outline is suppressed because the ring replaces it. 160ms.
- **Hover:** Border darkens to `#b6bab0`.
- **Required:** `[data-required]` appends an amber-deep asterisk to the label via `::after` — the marking is on the label, not a separate legend.
- **Textarea:** `min-height: 7rem`, `resize: vertical` only.

### Navigation — masthead
Sticky enamel band, `min-height: 5rem`, resolving to 80–81px at every width. No underbar: the ground change from enamel to whatever the page opens on is the separation, which is the same rule every other band follows.

The mark is the logo on a signal-white plate and nothing else. The plate is **full-bleed vertically** — it meets the top and bottom of the band rather than floating inside it, so it reads as a panel bolted across the sign rather than a card resting on one. It is the only element permitted to cancel the masthead's own padding, and it does so honestly: `align-self: stretch` takes it to the flex line, a negative block margin equal to the inner padding takes it the rest of the way. Corners are square, not `--radius`: a radius on a panel meeting both edges can only render on the corners that remain, which reads as a mistake rather than a detail. The mark itself is `4rem` (`3rem` below 30rem), sized so the plate fills the band at its existing height.

The azure grid coordinate that used to sit beside the plate behind an `enamel-line` divider has been removed. It is still set in the hero and the footer. Removing it also fixed a defect: at 1024px it was consuming just enough width to force the band to 107px where every other width sat at 81px.

Nav links are 0.8125rem 700 at 0.10em tracking, held at `opacity: 0.82` and going to 1 on hover, with a 2px amber underline that scales in from the left (`transform-origin: left`, 200ms) and stays scaled for `[aria-current="page"]`. Below 60rem the nav becomes a checkbox-driven drawer on `enamel-deep`, positioned at `inset: 100% 0 auto` under the masthead, with links restacked as full-width rows separated by `enamel-line` and the primary action stretched to full width. The toggle's focus ring is carried on the sibling label via `.nav-toggle:focus-visible ~ .nav-button`.

### Coordinate rule — `.coordinate`
The mono line above a heading. Flex row, azure (or `ink-dim` via `.coordinate--ink`), with a `::after` pseudo-element that flexes to fill the remaining width as a 1px `currentColor` line at 0.35 opacity. This trailing rule is mandatory — it is what makes the line a coordinate bar.

### Destination blade — the signature
The signature object of the build: a `.blade` that sets itself from a form the way a coach's destination sign is set. It appears twice, in `QuickQuote.astro` and `BookingForm.astro`, and behaves identically in both — **hidden until the request is submitted, then revealed below the form as a receipt.** It was a sticky live preview above the form on the reserve page until the owner asked for the homepage behaviour everywhere; confirming what you sent turned out to be worth more than predicting what you were typing, and it removed the only sticky element on the site other than the masthead.
- **Structure:** A top strip carrying the azure grid coordinate and the service designation (`Reservation requested` / `Quote requested`), split by a `--blade-divider` hairline; the route line — origin, drawn amber arrow, destination — at `clamp(1.25rem, 3.2vw, 2.125rem)` in 900 weight; then three keyed cells — passengers, departure, vehicle — divided by vertical hairlines that become horizontal ones below 46rem; then a status line.
- **Unset state:** Slots read `Pickup` / `Destination` at `--signal-unset` — visibly empty without dropping below the contrast floor — and gain `[data-set]` when filled. Count shows an em dash.
- **Output:** The vehicle name renders in amber, because it is the system's answer rather than the user's input. It comes from `recommendVehicle` in `src/data/fleet.ts` and nothing else: the smallest vehicle in the fleet whose top-of-range seats the group. The form's "Type of vehicle" field is a *preference* captured for the operator, deliberately not an input to this line — a picked option must never be able to make the blade state a vehicle the headcount does not fit.
- **The detail line answers to the headcount, not the vehicle.** Capacities are ranges, so a group landing above a vehicle's low end fits it in some configurations and not others; the detail says the seat count gets confirmed rather than quietly promising the top of the range. This is why the detail updates on every recalculation while only the *name* gates the roll animation — the two were once updated together inside the name-changed branch, which left 57 passengers reading the detail written for 50.
- **Motion:** On change, the vehicle line rolls — `translateY(-105%)` with `blur(2.5px)` at 0.4 opacity to rest, 420ms on `--ease-out`, clipped by an `overflow: hidden` wrapper with no fixed height so the name can still wrap on a narrow screen. It rolls; it does not cross-fade. The animation is restarted by removing `[data-rolling]`, forcing reflow, and re-setting it.
- **Accessibility:** `aria-live="polite"` on the blade container.

### Homepage quote form — `QuickQuote.astro`
The conversion surface, directly under the hero. It asks the same twelve fields as `BookingForm` off the same option lists (`src/data/formOptions.ts`), because two copies of an option list is two lists that drift.
- **Two steps, folded.** Step one (the trip, eight fields) is always open under a `Step 1 of 2 · The trip` coordinate. Step two (name, email, phone, notes) lives inside a `<details>` and is closed on arrival, which takes roughly 500px off the desktop section and 660px off mobile. `<details>` rather than a scripted panel, so the second half of the form still opens without JavaScript.
- **The disclosure is a button.** The `<summary>` is a bordered plate carrying a numbered enamel chip, a plain-language label and hint, and the global `.action` itself — literally the same class every other button on the site uses, so the amber, the press shadow and the hover can never drift. A row that only *hints* at being clickable is a row a lot of people never click. Opening swaps it for a quiet ghost "Hide"; the amber has done its job by then and only one amber control is ever live in the form.
- **Fold hazards handled.** A required field inside a closed `<details>` is one the browser cannot focus to report, so an `invalid` listener in the capture phase (the event does not bubble) unfolds the owning `<details>` first. This also covers pressing Enter in step one, which submits implicitly. Opening puts the caret in the first field rather than leaving it to be hunted.
- **Grid.** Six tracks at ≥64rem: three short fields to a row, two locations to a row. Four tracks at ≥40rem, two at ≥24rem — a phone gets pairs as soon as it is wide enough to hold a date field twice.

### The receipt behaviour — both blades
- **Set, not faded.** Reveal runs `qset` / `rbset` — `translateY(-14px) scaleY(0.9)` to rest over 460ms on `--ease-out`, `transform-origin: top center` — a blade dropping into its bracket. It is then scrolled to. The vehicle line still rolls.
- **It never lies about delivery.** The status line reports the real state of the submission and nothing softer. "Successfully submitted" is printed only when a real endpoint has accepted the POST; while `data-endpoint` is empty the blade says in amber that nothing was sent and offers the phone number. A failed POST says so and offers the phone. Editing a field after a send flips the status to "send again to update it", so a revealed blade can never show a route that was never submitted.
- **Live after reveal.** Once up, the blade tracks the fields, so an edit is reflected rather than left stale.

### Route steps — `/reserve`
The three-stage explainer that answers "what happens now", placed *below* the form for that reason: read before submitting it is instructions, read after it is an answer. Drawn as a route — three stops on a line, the last one filled because it is the end of the line. Each segment is a `::before` on its own step spanning `calc(100% + gap)` to the next stop, so the geometry never has to know how many stops there are and flips from a column to a row with one declaration. Stop boxes are opaque and paint after, so the line passes behind them rather than through.

### Seat plan — `SeatPlan.astro`
Plan-view seating drawn as SVG geometry from `layout.rows`, `leftPerRow`, `rightPerRow`. All four vehicles render at one shared scale — each SVG is capped at a px width proportional to the widest plan — so the four diagrams down the page are the fleet to scale, which is the one thing four capacity numbers do not tell you. Colors are `currentColor` throughout, so the diagram inherits `enamel` on concrete and `signal` inside a `.field` automatically. `layout` stays optional and both callers still handle its absence, because a fifth vehicle can arrive before anyone works out how it is laid out.

- **The shared scale is only shared while every plan fits its track.** The px ceiling is set to the *narrowest* track a plan has to sit in — the seating half of a two-across spec block — not the widest. Above that, the larger plans hit their track and render at track width while the smaller ones render at their own, and the proportion this calculation exists to preserve quietly stops holding. Raising `WIDEST_PLAN_PX` without checking the narrowest track breaks it silently: nothing overflows, the drawings just stop being comparable.
- **`layout.grid` gives the drawing directly, and it beats every rule above it.** Rows down the page, columns across it, exactly as they appear — `aisle` is a wider gap, `empty` is nothing, and no derivation, mirroring or rotation stands between the data and the render. The Executive Sprinter Van uses it because the owner drew that van's arrangement, and three attempts to express the drawing as a rule produced a plan that was mirrored, then transposed, then rotated. **When the owner has drawn it, the drawing is the specification** — anything that re-derives it can only get it wrong. A grid plan carries no bulkhead line, because it does not declare which end is the front.
- **`omit` is the escape hatch, and it is the last thing to reach for.** The flags describe *kinds* of feature and place themselves from `leftPerRow`; `omit` names bare `[row, place]` coordinates and knows nothing about what it is removing. It exists because the owner drew the Executive Sprinter Van's open pair without saying what stands there. A gap this component cannot name gets no caption — better an unexplained space than an invented door.
- **The arrangements are part derived, part drawn.** The rule is two-and-two across an aisle at `floor(seatsMax / 4)` rows; the Small Coach Bus and Executive Sprinter Van no longer follow it because the owner drew them. See the header of `src/data/fleet.ts`. Every plan's seat count must land inside that vehicle's own confirmed range — the check to run after any change, because every flag moves the count.

- **The lavatory is a fixture, not a seat, and it is drawn as one.** `layout.lavatory` puts an outlined block two seat-places deep at the rear of the curbside band and removes the two places it stands in from the seat run, so the drawing never shows a seat under the fixture. Outlined at `0.14` fill against the seats' `0.62` means it cannot be misread as a seat at a glance. It is set from the amenity the owner confirmed, never inferred from vehicle class.
- **Everything else the plan knows is drawn by absence, addition, or a rule — never a glyph.** `layout.entrance` takes the frontmost curbside places out for the stairwell and stands a partition at the head of the run; `layout.rearBench` carries the back row across the aisle and adds the seat that puts there. Both derive their position from `leftPerRow`, so a vehicle with a different band split still puts its door and its back seat in the right place. No door symbol and no legend: another symbol in a drawing this small costs more than it explains.
- **The entry partition comes with the doorway, not on a flag of its own.** A forward curbside door has a panel and stanchion between the steps and the first seat; drawing the door without it leaves a seat apparently opening onto the stairwell. It sits in the pitch gap ahead of the first seat and terminates where the driver's bulkhead does, so the plan's two partitions read as one kind of thing — but heavier at `0.5`/2.5 against the bulkhead's `0.28`/1.5, because it is an object standing in the saloon rather than the line where the cab ends.
- **The caption names whatever is not a seat, and renders only when there is something to name.** A gap where seats would be is the one thing a plan cannot explain on its own — without `Entry door at the front right` the stairwell reads as two seats somebody forgot. The capacity used to lead this line and does not any more: it is set at display scale a few centimetres above in the same column, so the caption was repeating what the reader had just read.
- **Curbside is the lower band.** Nose left in plan view puts the vehicle's right at the bottom of the drawing, which is where a US coach carries both its door and its lavatory. Every feature that has a side derives from `leftPerRow` rather than naming a row number.
- **The visible "shown schematically" qualifier was removed on the owner's instruction (16 Aug 2026).** Keep the qualification alive elsewhere or this diagram starts claiming to be a surveyed floor plan: the `/fleet` lede says the exact seat count is confirmed at quote, every vehicle without a plan says the same in its own `Seating` section, and the SVG's `aria-label` still opens "Schematic seating plan". **Do not remove those too**, and do not add row-level detail — a mid-coach door, a galley, exact pitch — that a schematic is not entitled to assert.

### Fleet grid — homepage `.vcard`
Four cards directly under the quote form, because the question the form raises — will my group fit — is answered here and nowhere earlier. One column, two at 46rem, four at 80rem; four across only once the numeral has room to stay at display scale.

- **The frame is one box whatever is in it.** A vehicle with a photograph gets it mounted per the Mounted-Photograph Rule at 16:10. A vehicle without one gets the capacity drawn in an enamel field at the identical ratio. A row of four is a row of four whether or not the photographs have arrived — which is what makes an unphotographed vehicle a design state rather than a hole. All four vehicles are photographed now; the fallback stays because a fifth can arrive before its photograph does. **Never fill the gap by repeating another vehicle's photograph**; that shows a visitor a bus they are not being quoted, directly under a line promising the opposite.
- **16:10, chosen by the photographs.** The fleet exteriors run 1.5:1 to 2:1. At 3:2 `cover` took 12.5% off each side of the widest — precisely where a coach keeps its bumper and its tail. 16:10 crops all four inside their own margins. The frame ratio answers to the assets; it is not a number picked first.
- **Capacity twice, once as number and once as length.** The `.vcard__scale` rule is drawn against the largest vehicle in the fleet, so the four bars together are the fleet to scale — the one thing four numbers side by side do not tell you at a glance. Same instinct as the seat plan's shared scale.
- **Rows, not gaps.** `grid-template-rows: auto auto auto auto 1fr auto` with the role taking the slack, so the four "View details" links sit on one line across the row however the names wrap.
- **New type step:** the card numeral at `clamp(2.25rem, 4vw, 3rem)`, between `.title` and the `clamp(3.25rem, 8vw, 5rem)` capacity numeral the Drawn-Proof Rule specifies for a single hero figure. Four numerals in a row cannot carry the hero size.

### Vehicle row — `/fleet` `.v`
One vehicle per row: photographs left, a specification column right, split evenly at 60rem. Each row opens on a `paper-line` hairline so the four read as a catalogue rather than four unrelated blocks, and so a `#slug` deep link lands against a visible top edge.

- **The spec column is sectioned, not stacked.** `On board` and `Seating` are each introduced by `.coordinate` — the site's own label-plus-hairline — so the column reads as a spec sheet and the rules give short lists a right-hand edge to sit against. Reused rather than re-drawn: a spec section and a page eyebrow are the same object.
- **Every vehicle carries both sections.** All four have a real one as of 16 Aug 2026; the empty-handed state is kept for the next vehicle, where the section states the gap in a sentence and points at the phone. This is the one place on the site where a section may render with nothing in it, and the reason is that the alternative — one row shaped differently from the rest — reads as a lesser vehicle rather than one we have not documented yet. **Never fill it by borrowing another vehicle's list.**
- **The spec sheet runs two blocks across beside one photograph, and one block down beside two.** A landscape photograph is about 0.6 of its column tall and a full spec sheet is about 1.3, so one picture cannot hold up a stacked sheet — the row opens a hole under the photograph. Past 72rem, `On board` and `Seating` therefore sit side by side and roughly halve the sheet. Hence `[data-shots]` on the row: the switch is about how much picture there is, not how wide the window is, and keying it to the breakpoint alone would unbalance whichever case it did not fit. Every vehicle has two photographs as of 16 Aug 2026, so the two-across branch is currently dormant — **it is kept, like the drawn-capacity fallback beside it, for the vehicle that arrives with one photograph.** Two frames put all four rows within 100px of the same height, which is why the page finally reads as a catalogue.
- **The seating plan lives in the spec column**, between the equipment list and the buttons — beside the capacity it draws and directly above the action it argues for. In the photograph column it made a three-deep stack that ran 420px past the end of the text, which put the page's dead space exactly where its call to action was.
- **The spec column takes the row's full height and drops its buttons to the foot of it**, so every row closes on one line: the second photograph ends, the call to action ends, and the next vehicle's hairline follows. Left at its natural height the column stopped up to 135px short of the pictures, which put the row's dead space exactly where its call to action was. The slack now sits between the seating plan and the buttons, where it reads as breathing room before the ask. Below 60rem the row is one column and the buttons simply follow the plan.
- **The rule is what buys the tight rhythm.** With a drawn boundary between rows, the separation does not also have to be a gap wide enough to read as one: rows sit `space-8` apart on `space-8` of padding, the band is `section--tight`, and the spec column steps down through `space-6` / `space-4` / `space-3` rather than the `space-8` a sectionless stack needs. The Supercoach row lost a fifth of its height to this with nothing taken out of it.
- **16:10, the same ratio as the homepage grid.** These exteriors run 1.5:1 to 2:1 and 3:2 took 12.5% off each side of the widest, cropping a coach at its bumper and its tail. One ratio for a fleet photograph wherever it appears.
- **A caption only where there is something to distinguish.** Frames are captioned `Exterior` / `Interior` wherever a vehicle has both, and not at all where it has one — under a lone photograph the caption labels the obvious.
- **16:10 holds for interiors too.** They arrive at 3:2 and 4:3 and lose 3% and 10% of their height respectively, all of it ceiling and floor. One ratio for a fleet photograph wherever it appears is worth more than a frame that changes height halfway down a column.
- **The first vehicle's exterior loads eagerly.** It is the page's opening image, not something scrolled to.

### Review carousel — `Testimonials.astro`
One review at a time on a marked-edge plate, not three cards side by side. The three real reviews differ in length by a factor of three, so a grid produced three ragged-bottomed cards and set the longest review in the smallest type on the page.

- **The scroll container is the source of truth.** The track is `overflow-x: auto` with `scroll-snap-type: x mandatory` and slides at `flex: 0 0 100%`. Buttons scroll it; the scroll position drives the counter, the marks and the disabled states. A swipe, a trackpad flick, an arrow key and a button press therefore all end in the same state, and there is no second copy of "which slide is showing" to fall out of sync.
- **It works with the script removed.** Without JS the strip is still a horizontally scrollable region carrying all three reviews. The controls are `display: none` until the script sets `data-ready`, and the scrollbar is hidden by the same attribute — so the affordance is never taken away before its replacement exists.
- **The strip is one stretched row**, so every slide is the height of the longest quote and the stage cannot jump as it moves. The plate ends on a `1fr` row and drops the attribution to its foot behind a `paper-line` rule, which turns the room a short review leaves into a signature area rather than a void.
- **The counter is the coordinate line.** It server-renders as `3 reviews` and becomes `01 / 03` once the script runs; both states carry real information, which is what the Coordinate-Carries-Information Rule asks for. A visually hidden `role="status"` announces `Review 2 of 3: Grace` on change, so the counter itself does not have to be a live region.
- **Ends stop, they do not wrap.** A counter implies a finite strip. The arrows take `aria-disabled` rather than `disabled` at the ends, so focus is never dropped out of the control when the last press lands.
- **Marks thicken, they do not lengthen.** The position marks are the ground's own dashes; the current one is amber (current state is one of the jobs amber is allowed to do) and scales on Y. Every slot keeps its width, so the run stays evenly spaced and the change is a transform rather than a layout property. Each 4px mark sits inside a 24px-tall button so the target clears the minimum.
- **The quote mark is drawn, not typed.** The logo's sheared bar run three times at falling lengths, inline in the component rather than in `Icon.astro` because it is a 56px graphic mark and not a 24×24 UI glyph.

### Guide card — `GuideCard.astro`
One object for three surfaces: the homepage guides section, `/guides`, and the related cards at the foot of an article. Editorial rather than a blog tile — the photograph is mounted under the Mounted-Photograph Rule and the type sits directly on the ground with no panel behind it, because a filled card with a border and a radius is the generic template this section exists to not be.

- **3:2, chosen by the photographs.** All three guide images are natively 3:2, so the frame crops none of them. Same instinct as the fleet grid's 16:10: the ratio answers to the assets.
- **The eyebrow carries a measurement.** `Guide · 6 min read`, where the minutes are derived from the article's own word count at 220 wpm — never typed, so it cannot drift from the prose. The category label is what the brief asked for; the reading time is what makes it a coordinate rather than a kicker.
- **Rows, not gaps.** `grid-template-rows: auto auto auto 1fr auto` with the summary taking the slack, so every "Read guide" sits on one line across a row however the titles wrap.
- **One link, one ring.** The whole card is the anchor and the focus ring belongs to the card, matching `.vcard`.

### Guide body — `GuideBody.astro`
The only place a guide's structure becomes markup. Articles are a typed block union in `src/data/guides.ts`, not markdown, so there is no path by which an author introduces a heading level, a table treatment or an inline style the sign system has no answer for.

- **Links are data, and they fail loudly.** A block carries `links: [{ phrase, href }]`; the renderer splits the block's own text on the phrase and **throws at build time** if it is not there. An internal link that stops matching its copy breaks the build instead of silently vanishing from the sentence. A `list` block's links are filtered per item, because a phrase belongs to the block, not to any one item.
- **The vehicle comparison is rendered from `fleet.ts`, never typed.** A `fleetTable` block takes no content at all: names, capacity ranges and audiences come from the fleet data, so a capacity in a guide cannot disagree with `/fleet`. The `bestFor` audiences live on the vehicle for the same reason.
- **Two renderings of that table, one in the accessibility tree.** A three-column comparison cannot be read at 390px: it either scrolls sideways, hiding the column that answers the question, or it is restructured. Restructuring in CSS by setting `display: block` on table elements strips the table semantics and needs a full set of ARIA roles bolted back on; rendering the small version as the list it actually is costs four rows of markup and no correctness. `display: none` keeps exactly one of the pair exposed at any width.
- **The callout is an enamel plate inside the reading ground**, with the blade's inset keyline. Used once per article — it is a ground change, and a page that changes ground three times has stopped meaning it.
- **The checklist is the one thing on the page you are meant to go and gather**, so it takes a marked-edge plate and the authored check icon rather than list markers.

### Close band — `CloseBand.astro`
The site's closing ask, extracted from the homepage when the guides began ending on it. Its quote link is absolute (`/#quote-form`) rather than a bare fragment, because from a guide the fragment has to carry the path with it — and from the homepage the browser still treats it as same-document navigation.

### Placeholder — `Placeholder.astro`
Unresolved content, marked so it can never pass as finished: a 2px dashed `hivis-deep` border over a -45° amber hatch (`rgb(255 177 0 / 0.09)` at 12px/24px), with a mono "Awaiting …" kind line, a label, and a statement of what is needed. Amber is correct here for the same reason it is correct on a button — it is the thing that is not yet safe to walk past.

### Legal prose — `LegalBody.astro`
The Read surface inside a Persuade site. Capped at `--measure` (68ch), 1.7 line-height, `h2` separated by a `paper-line` rule with `3rem` above, links in `enamel` at 700. The world stays; the ornament goes.

### Named Rules

**The Drawn-Proof Rule.** Evidence is drawn or set in type, never photographed. Capacity is a numeral at display scale (`clamp(3.25rem, 8vw, 5rem)`, 900, tabular), a layout is an SVG plan, an amenity is an authored icon. Photography arrived later and is now first-class, but it never carries *evidence*: the four vehicle photographs are the operator's own and show what a visitor is being quoted, and the guides' photographs illustrate a subject rather than proving a claim. Where a fact has to be proved — a capacity, a seating arrangement, the relative size of four vehicles — it is still drawn. The guide fleet comparison is the newest instance: the bar under each capacity range is drawn to one shared scale, because four ranges side by side do not tell you how much bigger a Supercoach is than a Sprinter.

**The Mechanical-Motion Rule.** Motion depicts a mechanism. Arrows translate along their axis (4–5px on hover), list rows grow their inside gutter (`padding-inline`, 240ms) so the row appears to slide toward you, and the destination blade rolls. Durations are 160ms for input state, 180ms for actions, 200ms for links, hovers and the carousel's position marks, 240ms for row expansion, and 420ms for the roll — all on `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`). The review carousel is the one place motion is delegated: the strip travels on the browser's own `scrollTo({ behavior: 'smooth' })`, because the mechanism there genuinely is a strip being scrolled and a hand-rolled transform would only be an imitation of one. It falls back to `behavior: 'auto'` under `prefers-reduced-motion`, since a global transition override cannot reach a scroll the script asked for. Nothing fades in on scroll and nothing bounces. `prefers-reduced-motion: reduce` collapses all animation and transition to 0.01ms globally.

## Do's and Don'ts

### Do:
- **Do** compose new surfaces from the six primitives — `.field`, `.blade`, `.plate`, `.action`, `.coordinate`, `.control` — before writing new component CSS.
- **Do** open every interior page with a `PageHead` enamel band carrying a real coordinate line, a display title capped at 18ch, and an optional lede at 52ch.
- **Do** alternate enamel and concrete bands down a page; a ground change is the section separator, not a border.
- **Do** check every new component on both grounds and add a `.field` descendant override rather than a second class.
- **Do** use `var(--radius)` (3px) for every UI corner, and drop to `border-radius: 0` the moment a plate takes a 3px marked top edge.
- **Do** set measured values — coordinates, counts, capacities, timings, captions — in Overpass Mono with `.mono` for tabular numerals.
- **Do** draw new icons into `Icon.astro`'s set at 24×24, stroke 2, square caps, miter joins, `currentColor`.
- **Do** mark unresolved content with `Placeholder.astro` so it is impossible to mistake for shipped content.

### Don't:
- **Don't** paint amber on anything that is not an action, a focus or current state, a required mark, a system recommendation, or an unresolved item. It stays under a few percent of any viewport; that restraint is what keeps this civic rather than municipal-works.
- **Don't** use any radius other than 3px on a UI surface, and don't combine a radius with a marked top edge.
- **Don't** put a `box-shadow` on a plate, a blade, the masthead, or a card. Only `.action` casts, and only as a press affordance.
- **Don't** cross the two patterns: `--enamel-pattern` never touches a concrete surface, `--concrete-pattern` never touches enamel, and no surface carries both. Don't raise either above the opacity it ships at — the chevron is a texture in the ground, not a graphic on it.
- **Don't** introduce a second display family, a glyph or emoji icon, or a system display face. Overpass and Overpass Mono are the whole voice.
- **Don't** ship a stock highway photograph, a vehicle beauty shot, or a translucent quote bar floating over a hero image — the three things this world was built to refuse. **Amended 15 Aug 2026, and the amendment is narrow.** The guides ship two licensed stock photographs, one of which is Chicago traffic on Lake Shore Drive — which is, read literally, the stock highway photograph this rule names. The distinction the rule was always making is between a photograph that *makes a claim* and a photograph that *illustrates a subject*. A highway under a hero says "this is our operation" using somebody else's road, and that is still forbidden. A photograph of Chicago traffic inside an article about what mileage, rush windows and tolls do to a quote is a picture of the subject of the paragraph next to it, and it claims nothing about the fleet. The test to apply: **could a visitor mistake this photograph for evidence about this business?** If yes, it must be the operator's own or it must be drawn. Both stock images are registered as `guides.photos` in `src/lib/placeholder.ts` and are meant to be replaced with owned photography; the third guide already uses the operator's own coach interior, because a guide about how many seats you need should show the real seats.
- **Don't** write a kicker above a heading. The `.coordinate` line is the only line permitted there and it must carry real information; a line that restates the heading in softer words is not a coordinate.
- **Don't** reference a spacing step outside the defined ramp (1, 2, 3, 4, 5, 6, 8, 12, 16, 24, 32). Every step in that list is a real token in `global.css`; anything else resolves to nothing and is silently dropped at computed-value time.
- **Don't** let a sticky element cover the thing it is confirming — the destination blade goes `static` below 46rem for exactly this reason.
