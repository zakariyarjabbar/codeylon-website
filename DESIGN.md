---
name: Codeylon
description: A precise editorial design system for a Baghdad front-end website studio.
colors:
  navy-950: "#061226"
  navy-900: "#07162d"
  navy-800: "#10294f"
  navy-700: "#1c3b69"
  gold-600: "#a6802f"
  gold-500: "#c9a34b"
  gold-400: "#d9b85f"
  gold-300: "#ead28d"
  paper: "#f4efe4"
  paper-strong: "#fffdf8"
  paper-muted: "#e8e0d0"
  field-background: "#fffefb"
  ink: "#11233e"
  ink-muted: "#4d5d70"
  success: "#17613c"
  error: "#a43b33"
  line-dark: "rgba(244, 239, 228, 0.18)"
  line-light: "rgba(17, 35, 62, 0.19)"
typography:
  display:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(3.15rem, 7.2vw, 6rem)"
    fontWeight: 600
    lineHeight: 0.96
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(2.25rem, 5vw, 4.3rem)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Source Serif 4", Georgia, serif'
    fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)"
    fontWeight: 600
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: '"Onest", Arial, sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: '"Onest", Arial, sans-serif'
    fontSize: "0.8rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.08em"
rounded:
  none: "0"
  control: "2px"
  pill: "999px"
  circle: "50%"
spacing:
  control-gap: "0.65rem"
  inset-sm: "1rem"
  inset-md: "1.5rem"
  inset-lg: "2rem"
  section: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.gold-400}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.15rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-300}"
    textColor: "{colors.navy-950}"
    rounded: "{rounded.control}"
  button-ink:
    backgroundColor: "{colors.navy-900}"
    textColor: "{colors.paper-strong}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.15rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.paper-strong}"
    rounded: "{rounded.control}"
    padding: "0.78rem 1.15rem"
  input:
    backgroundColor: "{colors.field-background}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.76rem 0.82rem"
  scope-sheet:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.4rem, 3vw, 2.2rem)"
  form-panel:
    backgroundColor: "{colors.paper-strong}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.4rem, 4vw, 2.5rem)"
---

# Design System: Codeylon

## Overview

**Creative North Star: "The Scope Ledger"**

Codeylon looks like a carefully prepared project document rather than a glossy software product. The visual system combines editorial authority with the practical clarity of a scope sheet: deep navy fields establish seriousness, warm parchment keeps long reading comfortable, and restrained gold marks decisions, progress, and action.

The composition is calm, precise, and contact-first. Large serif statements establish hierarchy, while the sans-serif layer handles navigation, evidence, labels, tables, forms, and operational detail. Trust comes from visible structure, explicit boundaries, and production quality—not stock imagery, fabricated proof, or decorative spectacle.

**Key Characteristics:**

- Editorial serif authority paired with operational sans-serif clarity.
- Alternating navy and parchment fields separated by fine rules.
- Structured lists, tables, timelines, and scope sheets instead of generic card grids.
- Restrained gold used as a scarce signal for actions, status, and emphasis.
- Square, document-like surfaces with limited lift and short purposeful motion.
- Contact and project-brief actions remain the dominant conversion path.

## Colors

The palette is a warm editorial contrast between midnight navy, aged parchment, and muted brass-gold, with green and brick reserved for functional feedback.

### Primary

- **Baghdad Brass** (`gold-400`): The principal action and emphasis color for primary buttons, selected phrases, focus outlines, and the brand mark.
- **Ledger Gold** (`gold-500`): Structural accent for top rules, progress bars, dividers, and compact markers.
- **Antique Gold** (`gold-600`): A darker accessible accent for text and field carets on light surfaces.
- **Pale Brass** (`gold-300`): The softer dark-surface accent for links, metadata, labels, and hover states.

### Secondary

- **Approval Green** (`success`): Used only for affirmative system status and enabled preference state.
- **Correction Brick** (`error`): Used only for form errors and invalid field treatment.

### Neutral

- **Midnight Foundation** (`navy-950`): The deepest footer, mobile navigation, scrollbar track, and utility base.
- **Studio Navy** (`navy-900`): The main dark field for the hero, alternating sections, contact area, navigation, and dark buttons.
- **Raised Navy** (`navy-800`): Hover and tonal variation within dark controls.
- **Linked Navy** (`navy-700`): Text links and interactive borders on light surfaces.
- **Warm Parchment** (`paper`): The default page background.
- **Clean Sheet** (`paper-strong`): Elevated documents, forms, light-on-dark type, and primary content panels.
- **Muted Parchment** (`paper-muted`): A supporting neutral for subdued warm surfaces.
- **Field Paper** (`field-background`): The slightly cleaner field fill that separates inputs from their containing form.
- **Ledger Ink** (`ink`): Primary text and headings on light surfaces.
- **Muted Ink** (`ink-muted`): Body copy, helper text, legal copy, and secondary information.
- **Dark Rule** (`line-dark`): Low-contrast separators on navy fields.
- **Light Rule** (`line-light`): Low-contrast separators on parchment and sheet surfaces.

**The Restrained Gold Rule.** Gold is a signal, not a background habit: reserve it for action, status, progress, focus, and brief moments of emphasis.

**The Tonal Contrast Rule.** Build long pages by alternating navy and parchment fields; do not introduce unrelated colored sections to manufacture variety.

## Typography

**Display Font:** Source Serif 4 (with Georgia and serif fallbacks)  
**Body Font:** Onest (with Arial and sans-serif fallbacks)  
**Label Font:** Onest (with Arial and sans-serif fallbacks)

**Character:** Source Serif 4 supplies measured editorial confidence without feeling ornamental. Onest keeps the operational layer contemporary, legible, and exact, especially in navigation, forms, tables, status labels, and small explanatory copy.

### Hierarchy

- **Display** (600, `clamp(3.15rem, 7.2vw, 6rem)`, 0.96): Hero and utility-page statements; keep to roughly 10–13 characters per line through narrow measures.
- **Headline** (600, `clamp(2.25rem, 5vw, 4.3rem)`, 1.03): Section openings and major content transitions, normally held to about 16 characters per line.
- **Title** (600, `clamp(1.35rem, 2.5vw, 1.85rem)`, 1.18): Editorial tertiary headings; operational component headings may switch to Onest around `1rem`–`1.08rem`.
- **Body** (400, `1rem`, 1.65): Default reading text, with important paragraphs limited to approximately 56–72 characters per line.
- **Label** (700, approximately `0.75rem`–`0.9rem`, up to `0.08em` tracking): Navigation, field labels, table headers, status, and metadata; uppercase is reserved for compact category and status labels.

**The Editorial Authority Rule.** Serif type makes the promise; sans-serif type explains the scope, evidence, state, and next action.

**The Narrow Statement Rule.** Keep display headings deliberately narrow and balanced rather than stretching them across the container.

## Layout

The site uses a centered maximum container (`1240px`) with `1.25rem` side gutters on larger screens and `1rem` gutters below `700px`. Main sections use generous fluid vertical spacing (`clamp(5rem, 10vw, 9rem)`), tightened on small screens to `clamp(4rem, 18vw, 6rem)`.

Desktop compositions are asymmetric two-column grids, typically pairing a concise statement column with a wider operational column. The hero uses an approximately 1.12/0.88 split; service, scope, process, FAQ, and contact sections use related 0.7–0.85/1.15–1.3 ratios. Content is organized with rules, rows, lists, tables, and numbered sequences. Full-width tiled cards appear only for the quality checklist, where the shared border reads as a single matrix rather than detached cards.

At `980px`, desktop navigation becomes a full-screen mobile drawer and the principal two-column layouts collapse to one column. At `700px`, nested grids, legal layouts, and forms collapse; tables become labeled stacked rows; button and footer groups become vertical where needed. The minimum supported width is `320px`, and layouts must remain usable at 200% zoom.

**The Scope-Sheet Rule.** Use structure—columns, ledgers, rules, tables, and ordered steps—to make information scannable before adding decoration.

**The One-Column Mobile Rule.** Preserve reading order and explicit labels when compositions collapse; never rely on desktop position alone to convey meaning.

## Elevation & Depth

The system is flat by default. Depth is structural and selective: document surfaces such as the scope sheet and project form use one soft navy shadow, buttons gain a compact colored or navy lift on hover, and privacy overlays use stronger ambient shadows because they sit above the page. Most sections, lists, tables, and quality cells remain completely flat and are separated by tone and one-pixel rules.

### Shadow Vocabulary

- **Document lift** (`0 18px 48px rgba(6, 18, 38, 0.16)`): Scope sheets and form panels placed on dark fields.
- **Primary action rest** (`0 8px 22px rgba(217, 184, 95, 0.22)`): Gold primary buttons.
- **Primary action hover** (`0 12px 26px rgba(217, 184, 95, 0.28)`): Gold primary buttons after the two-pixel rise.
- **Floating notice** (`0 20px 56px rgba(6, 18, 38, 0.28)`): Consent banner and comparable transient notices.
- **Modal lift** (`0 24px 80px rgba(6, 18, 38, 0.35)`): Modal dialogs above a darkened backdrop.

**The Flat-by-Default Rule.** If a surface is part of the normal reading flow, separate it with tone or a fine rule; reserve shadows for documents, actions, and overlays that genuinely sit above another layer.

## Shapes

The form language is rectilinear and document-like. Inputs, sheets, forms, dialogs, table cells, navigation controls, and content matrices use square corners. Buttons allow only a nearly square `2px` radius. Circular geometry appears only when it communicates a state or mechanism: status dots, switch thumbs, the switch track, and a single oversized decorative outline in the contact field.

Borders are thin and functional. Light and dark separators use translucent ink or parchment; gold top rules identify priority documents and consent surfaces. The official brand mark uses five tapered gold ribbons in a precise staggered arrangement, complemented by orthogonal diagram lines and small square markers in the hero field.

**The Precise Edge Rule.** Default to square corners; use a pill or circle only when the control's mechanism or status requires it.

## Components

### Buttons

Buttons are compact, decisive controls with a minimum `48px` target, strong Onest labels, and a nearly square `2px` corner.

- **Shape:** Compact rectangle with centered content and a `2px` radius.
- **Primary:** Warm gold fill with midnight text, `0.78rem 1.15rem` padding, and a low brass shadow.
- **Hover / Focus:** Hover rises `2px` over `160ms`; primary gold lightens, ink buttons move to raised navy, and every keyboard focus uses a `3px` gold outline offset by `4px`.
- **Secondary:** Transparent with a restrained parchment border for use on navy fields.
- **Ink:** Studio navy with clean-sheet text for light surfaces and form submission.
- **Quiet:** Transparent, outlined, and slightly shorter (`44px`) for consent and secondary utility actions.

### Cards / Containers

Containers read as documents or matrices, not lifestyle cards.

- **Corner Style:** Square (`0`).
- **Background:** Clean-sheet panels on navy, or warm parchment cells in the normal reading flow.
- **Shadow Strategy:** Document lift only for the scope sheet and contact form; quality items and service rows remain flat.
- **Border:** One-pixel translucent rules, with gold top or progress rules on priority documents.
- **Internal Padding:** Fluid `1.4rem`–`2.5rem` for document panels; `1.25rem`–`2rem` for matrix cells.

### Inputs / Fields

Fields are plain, high-contrast editorial form controls designed for efficient completion.

- **Style:** Field-paper fill, ledger-ink text, square corners, a one-pixel ink border, and a minimum `50px` height.
- **Focus:** The border changes to antique gold and gains a `3px` translucent gold ring.
- **Error / Disabled:** Invalid fields use correction brick with a subtle three-pixel error ring and specific inline error text; disabled action buttons retain their shape and use reduced opacity.

### Navigation

The sticky header uses the same solid studio-navy field as the hero, with a fine lower rule, compact Onest links, and a gold underline that expands from the active edge. Desktop navigation converts at `980px` to a viewport-height studio-navy drawer with generous ruled link rows, locked background scrolling, and a trapped keyboard focus path. The brand remains a small angular mark plus widely tracked wordmark, never an oversized logo lockup.

### Scope Sheet

The signature component is a clean-sheet document with a gold border, soft lift, animated gold progress rule, compact status, and ruled estimate rows. It turns estimates and constraints into something that feels reviewed and accountable rather than promotional.

### Consent and Form System

Consent and enquiry states use the same design language as the core site: square paper panels, gold priority rules, explicit labels, visible error summaries, equal privacy choices, and short direct copy. Dialogs use stronger depth only while modal; switches are the sole pill-shaped control.

**The Contact-First Rule.** Primary actions start or send a project brief; secondary actions explain scope, standards, or privacy without competing for attention.

## Do's and Don'ts

### Do:

- **Do** preserve the navy, restrained gold, and warm parchment hierarchy across every public surface.
- **Do** use Source Serif 4 for major editorial statements and Onest for operational detail and controls.
- **Do** structure dense content with ruled rows, tables, timelines, and scope-sheet compositions.
- **Do** keep contact and project-brief actions prominent without displaying public prices.
- **Do** retain visible focus, clear form errors, reduced-motion behavior, and labeled mobile table rows.
- **Do** earn trust through precise scope, process, realistic timing, and production details.

### Don't:

- **Don't** introduce generic tiled-card layouts when a ruled list, ledger, or structured row is clearer.
- **Don't** use glossy gradients, glassy SaaS panels, oversized pills, neon accents, or decorative dashboard chrome.
- **Don't** flood sections with gold; its scarcity is what makes it useful.
- **Don't** add stock photography, placeholder imagery, fake testimonials, invented logos, awards, metrics, or case studies.
- **Don't** publish package pricing or imply backend capabilities outside the confirmed front-end scope.
- **Don't** use inflated startup or AI language in visual labels, calls to action, or supporting copy.
