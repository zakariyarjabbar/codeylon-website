---
name: Codeylon
description: "Arabic-first studio design system shaped as a Babylonian architectural proof ledger."
colors:
  navy: "#081d48"
  navy-deep: "#051431"
  navy-soft: "#18355d"
  gold: "#c5a246"
  gold-light: "#d5b862"
  ivory: "#f4efe5"
  paper: "#faf8f2"
  stone: "#d9d1c3"
  ink: "#132039"
  muted: "#5f6570"
  line: "#d8d0c2"
  white: "#fffdf7"
typography:
  display:
    fontFamily: "Noto Kufi Arabic Variable, sans-serif"
    fontSize: "clamp(2.7rem, 4.1vw, 4rem)"
    fontWeight: 650
    lineHeight: 1.48
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Noto Kufi Arabic Variable, sans-serif"
    fontSize: "clamp(2rem, 4vw, 4rem)"
    fontWeight: 700
    lineHeight: 1.38
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Noto Kufi Arabic Variable, sans-serif"
    fontSize: "1.45rem"
    fontWeight: 650
    lineHeight: 1.38
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Noto Sans Arabic Variable, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: "Noto Kufi Arabic Variable, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 650
    lineHeight: 1.38
    letterSpacing: "normal"
rounded:
  control: "4px"
  surface: "6px"
  pill: "100px"
  circle: "50%"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.navy-deep}"
  button-secondary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-secondary-hover:
    backgroundColor: "{colors.navy-soft}"
    textColor: "{colors.white}"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-outline-navy:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  navigation:
    backgroundColor: "rgba(8, 29, 72, .98)"
    textColor: "{colors.white}"
    typography: "{typography.label}"
  portfolio-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "0"
  input-field:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "12px 14px"
    width: "100%"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "#655a3b"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "32px 0"
  disclosure:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "22px 0 22px 44px"
---

# Design System: Codeylon

## Overview

**Creative North Star: "The Studio Proof Ledger"**

Codeylon should feel like an Arabic architectural presentation ledger: composed, exact, and built to prove the work instead of performing around it. The visual world combines deep Babylonian navy fields, limestone-toned paper surfaces, rare brass accents, and large editorial photography so each page reads as a sequence of evidence plates rather than a generic agency funnel.

The system is Arabic-first and RTL by construction. Bold Arabic sans typography establishes the hierarchy; thin rules, asymmetrical grids, and deliberate blank space organize the record. Depth remains almost flat, ornament is restrained, and the Babylonian reference is carried by the official mark, color, proportion, and cadence rather than added historical decoration. Generic SaaS and AI-agency styling are confirmed anti-references.

**Key Characteristics:**

- Arabic-first RTL composition with decisive reading order.
- Babylonian navy fields, limestone ivory and paper, and rare brass emphasis.
- Bold Arabic sans hierarchy paired with calm, highly readable body copy.
- Editorial work photography used as proof, not decoration.
- Thin structural rules, restrained 4–6px corners, and nearly flat depth.

## Colors

The palette is architectural and materially warm: dark blue establishes authority, brass marks decisions, and limestone neutrals keep long Arabic pages calm and legible.

### Primary

- **Babylon Navy:** The principal field for headers, interior hero areas, proof sections, prepared summaries, and high-authority controls; also the homepage display text on ivory.
- **Archive Navy:** The deepest field for the footer, mobile menu, dialog backdrop context, and nested dark surfaces.
- **Workshop Navy:** The interactive lift for navy buttons and the scrollbar thumb; it is a state color, not a competing field.

### Secondary

- **Aged Brass:** The scarce action and structure color for primary calls to action, one-pixel rules, selection, and precise point accents.
- **Lit Brass:** The hover, focus, and dark-field highlight color where the base brass needs more luminosity.

### Neutral

- **Limestone Ivory:** A warm section field and the homepage hero copy surface.
- **Proof Paper:** The default page canvas and form/dialog background.
- **Cut Stone:** A warm neutral for physical dividers and quiet boundaries.
- **Ledger Ink:** The default reading color on pale surfaces.
- **Slate Note:** Secondary copy, explanations, and lower-emphasis metadata.
- **Pencil Line:** The recurring one-pixel border and divider tone.
- **Warm White:** High-contrast text and input surfaces without stark optical white.

### Named Rules

**The Rare Brass Rule.** Brass marks an action, a structural rule, or a deliberate state; it must not become a general fill or scattered decoration.

**The Field Contrast Rule.** Use navy and limestone as broad fields, then let text, photography, and one-pixel rules create the hierarchy inside them.

## Typography

**Display Font:** Noto Kufi Arabic Variable (with sans-serif fallback)

**Body Font:** Noto Sans Arabic Variable (with sans-serif fallback)

**Label/Control Font:** Noto Kufi Arabic Variable (with sans-serif fallback)

**Character:** Kufi gives headings and controls an architectural, squared authority without resorting to ornamental lettering. Noto Sans Arabic keeps paragraphs natural and readable, preserving a distinctly Arabic voice across dense commercial information.

### Hierarchy

- **Display** (650, `clamp(2.7rem, 4.1vw, 4rem)`, 1.48): The homepage's short two-line statement; use sparingly and allow the line breaks to participate in the composition. Mobile scales from 2.1rem without forced no-wrap.
- **Headline** (700, `clamp(2rem, 4vw, 4rem)`, 1.38): Major section headings and footer calls to action.
- **Title** (650, `1.45rem`, 1.38): Ledger-row titles, card titles, dialog headings, and compact content landmarks.
- **Body** (400, `17px`, 1.8): Default Arabic reading text; it reduces to 16px on narrow screens and generally stays within 520–760px copy measures.
- **Label** (650, `0.85rem`, normal tracking): Buttons and compact controls; labels remain sentence case and are never letter-spaced into a Latin-style all-caps texture.

### Named Rules

**The Two-Voice Arabic Rule.** Kufi speaks for hierarchy and action; Noto Sans Arabic carries explanation and reading. Do not add a third display personality.

**The Weight-Before-Ornament Rule.** Create emphasis with scale, weight, color, and line breaks before adding badges, eyebrows, or decorative lettering.

## Layout

The system uses a centered shell capped at 1240px with 24px inline gutters; at 680px and below the gutters reduce to 16px. Default sections use fluid block padding from 82px to 144px, while tighter sections use 64px to 96px. The native page direction is RTL. The homepage hero pairs right-hand ivory copy with left-hand photography in unequal 1.08:1 tracks, without a capability rail or image overlays.

Desktop pages favor two-column editorial grids, sticky explanatory columns, offset portfolio cards, and ledger lists separated by rules. Global navigation switches to a full-screen mobile menu at 980px; most complex interior grids collapse between 860px and 900px; content and form grids become single-column around 640px; the homepage's final mobile composition resolves at 620px. On small screens, preserve the semantic sequence—statement and actions, proof image, then the following work and service sections.

**The Proof-Table Rule.** Every major region should read as one legible piece of evidence with a clear edge, measure, and reading order; avoid stacking interchangeable card modules just to fill space.

## Elevation & Depth

The system is flat by default. Navy, ivory, and paper fields; one-pixel brass or stone rules; image cropping; and measured offsets create depth without routine shadows. A soft ambient shadow is reserved for modal or consent surfaces that must detach from the document, while form focus uses a compact navy halo as interaction feedback rather than visual decoration.

### Shadow Vocabulary

- **Dialog Ambient** (`0 18px 50px rgba(5, 20, 49, .13)`): The standard soft lift for modal dialogs.
- **Consent Lift** (`0 22px 60px rgba(0, 0, 0, .28)`): A stronger, exceptional lift for the fixed cookie banner over page content.
- **Field Focus Halo** (`0 0 0 3px rgba(8, 29, 72, .12)`): A compact interaction ring paired with a navy border on focused fields.

### Named Rules

**The Flat Ledger Rule.** Ordinary sections, cards, rails, and lists stay shadowless; use field contrast, rules, and spacing before elevation.

## Shapes

Controls are disciplined rectangles with functional 4px corners. Media wells, dialogs, banners, and contained editorial surfaces use a restrained 6px radius. Hairline borders and clipped photographic rectangles are more characteristic than enclosed cards. Fully rounded geometry is exceptional: 48px directional controls and 40px dialog-close controls are circular, while compact project tags use a 100px pill radius.

**The Circle Exception Rule.** Reserve circles and pills for compact directional, close, or tag semantics; do not round ordinary buttons, fields, cards, or section containers into capsules.

## Components

### Buttons

- **Shape:** Restrained rectangle (4px radius) with a 50px minimum height and `12px 24px` internal padding.
- **Primary:** Aged Brass background with Archive Navy text; this is the dominant conversion action on both dark and light fields.
- **Hover / Focus:** Hover shifts to Lit Brass and lifts by 2px over 250ms; keyboard focus uses a 3px Lit Brass outline with a 4px offset.
- **Secondary:** Babylon Navy with Warm White text; hover shifts to Workshop Navy.
- **Outline:** Transparent with a one-pixel border. The light variant uses Warm White and becomes brass on hover; the navy variant is reserved for pale fields.

### Chips

- **Style:** Project tags are transparent, compact (`5px 12px`), warmly muted, and outlined with a one-pixel Pencil Line border.
- **State:** Tags are descriptive metadata rather than primary actions; selected/filter states are not part of the shipped system.

### Cards / Containers

- **Corner Style:** Portfolio image wells and contained surfaces use a 6px radius; the card body itself remains visually open.
- **Background:** Cards inherit Proof Paper or Limestone Ivory from their section, while the image well falls back to Babylon Navy.
- **Shadow Strategy:** None at rest; see the Flat Ledger Rule.
- **Border:** Metadata is separated by spacing; ledgers and factual containers use one-pixel Pencil Line rules.
- **Internal Padding:** Portfolio metadata begins 24px below its image and uses a flexible split between text and the circular directional control.

### Inputs / Fields

- **Style:** Warm White field, one-pixel warm-stone stroke, 4px radius, 52px minimum height, and `12px 14px` padding.
- **Focus:** Border shifts to Babylon Navy and gains the Field Focus Halo; the global keyboard focus remains visibly brass where applicable.
- **Error / Disabled:** Invalid fields use the shipped dark red stroke and explanatory error text; disabled checkboxes retain native semantics with Babylon Navy as the accent.

### Navigation

The sticky desktop header is a 78px navy ledger bar with a fine translucent brass boundary. Arabic links are centered and reveal a one-pixel brass underline from the RTL origin on hover or current-page state; the gold quote button anchors the action edge. Below 980px, the brand and square menu control remain in a 66–70px bar while navigation opens as a full-height Archive Navy sheet with ruled links.

### Service Ledger

Service and process rows are the signature repeating component: open paper surfaces, 32px vertical rhythm, one-pixel dividers, a strong Kufi title, calm supporting copy, and a compact direction cue. Hover changes the text toward brass and shifts the content 10px in the RTL reading direction without adding a card shell.

### FAQ Disclosure

Native disclosure rows retain a flat paper field and one-pixel boundaries. The Kufi summary uses 22px vertical padding, while a two-stroke brass-brown plus becomes a minus over 200ms when opened; the answer stays in muted reading type below.

## Do's and Don'ts

### Do:

- **Do** begin layout decisions in Arabic and RTL, then verify the reading sequence at the 1240px shell and the shipped 380px mobile viewport.
- **Do** use Babylon Navy and limestone neutrals as broad fields, reserving brass for the primary action, structural rules, focus, and small point accents.
- **Do** let large editorial work photography provide visual proof, clipped into restrained 6px wells with honest project labels nearby.
- **Do** use Noto Kufi Arabic Variable for hierarchy and controls, Noto Sans Arabic Variable for reading, and the visible 3px brass focus treatment for keyboard access.
- **Do** build rhythm with asymmetrical grids, generous block spacing, and one-pixel ledger rules before introducing another container.

### Don't:

- **Don't** turn the site into a generic SaaS or AI-agency composition of centered heroes, glowing gradients, metric tiles, and repeated rounded cards.
- **Don't** scatter brass across large backgrounds or secondary decoration; its rarity is part of the hierarchy.
- **Don't** add routine shadows to portfolio cards, service rows, content sections, or navigation.
- **Don't** over-round buttons, fields, images, or containers; 4–6px is the default form language and circles are semantic exceptions.
- **Don't** treat Arabic as translated LTR content or reverse only the alignment while preserving a left-to-right information order.
