---
name: Deep Tech Engineering
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1c'
  surface-container: '#201f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#bbc9cd'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#313031'
  outline: '#859397'
  outline-variant: '#3c494c'
  surface-tint: '#2fd9f4'
  primary: '#8aebff'
  on-primary: '#00363e'
  primary-container: '#22d3ee'
  on-primary-container: '#005763'
  inverse-primary: '#006877'
  secondary: '#4de082'
  on-secondary: '#003919'
  secondary-container: '#00b55d'
  on-secondary-container: '#003e1c'
  tertiary: '#d5dcf6'
  on-tertiary: '#283044'
  tertiary-container: '#b9c0da'
  on-tertiary-container: '#474e64'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#2fd9f4'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#6dfe9c'
  secondary-fixed-dim: '#4de082'
  on-secondary-fixed: '#00210c'
  on-secondary-fixed-variant: '#005227'
  tertiary-fixed: '#dae2fd'
  tertiary-fixed-dim: '#bec6e0'
  on-tertiary-fixed: '#131b2e'
  on-tertiary-fixed-variant: '#3f465c'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is built for an environment of academic rigor and futuristic engineering. It targets a sophisticated audience of researchers, students, and industry leaders, evoking a sense of systematic precision and digital evolution.

The visual direction blends **Minimalism** with **Glassmorphism**, utilizing deep, layered backgrounds and translucent surfaces to represent the complexity of systems engineering. The aesthetic is anchored by high-tech "circuit" motifs—thin, precise lines and grid patterns—that suggest a look "under the hood" of modern technology. The emotional response is one of calm authority, innovation, and technical mastery.

## Colors

The palette is rooted in the "Deep Tech" spectrum, optimized for high-end displays and low-light environments. 

- **Primary (Cyan):** Used for primary actions, progress indicators, and focal points. It represents data flow and clarity.
- **Secondary (Neon Green):** Reserved for success states, technical highlights, and "active system" indicators.
- **Background Tiers:** The foundation uses Deep Charcoal (#0A0A0B) for the lowest base layer, while Midnight Blue (#0F172A) is used for elevated surfaces or container backgrounds to provide subtle depth without breaking the dark-mode immersion.
- **Accents:** Vibrant glows are derived from the primary and secondary colors at low opacities (10-20%) to create atmospheric depth.

## Typography

The typographic system utilizes a dual-engine approach to distinguish between narrative content and technical data.

- **Headlines:** Plus Jakarta Sans provides a clean, geometric, and modern feel. It should be used for section titles and major headings.
- **Body:** Inter is the workhorse for all long-form text and interface descriptions, chosen for its exceptional readability in dark mode.
- **Technical Labels:** JetBrains Mono is used for all metadata, "code-like" details, time-stamps, and small technical callouts. This emphasizes the systems engineering theme.

For mobile, large headlines scale down to ensure readability while maintaining their geometric impact.

## Layout & Spacing

The layout follows a **Fluid Grid** system based on a 12-column architecture for desktop and a 4-column architecture for mobile. 

- **The Grid:** All components align to an 8px square baseline grid. 
- **Rhythm:** Spacing between sections should be generous (48px to 80px) to allow the "Deep Tech" backgrounds to breathe, emphasizing a high-end, gallery-like experience.
- **Safe Areas:** Use 64px margins on desktop to center the content, creating a focused, professional corridor for information. On mobile, margins tighten to 16px to maximize screen real estate for technical data.

## Elevation & Depth

Hierarchy is established through **Glassmorphism** and **Tonal Layers** rather than traditional heavy shadows.

- **Base Layer:** The deepest charcoal (#0A0A0B) often features a faint 24px CSS grid pattern in a subtle midnight blue stroke (5% opacity).
- **Surface Layer:** Cards and panels use a semi-transparent Midnight Blue (#0F172A) with a `backdrop-filter: blur(12px)`.
- **Borders:** "Circuit-like" 1px solid borders are used on surfaces. These borders often use a gradient from the Primary Cyan to transparent, or a very low-opacity white (10%).
- **Glows:** Active elements (like a selected card or a hovering button) emit a soft, diffused "Outer Glow" using the primary color with a 20px blur and 15% opacity.

## Shapes

The shape language is **Soft (Level 1)**. This choice balances the coldness of a "tech" aesthetic with the approachability of a university event.

- **Components:** Standard buttons and inputs use a 0.25rem (4px) radius to maintain a crisp, engineered look.
- **Containers:** Larger cards and modal windows use the `rounded-lg` (0.5rem / 8px) setting.
- **Interactive Elements:** Checkboxes and radio buttons remain sharp or only slightly rounded to mimic industrial hardware toggles.

## Components

- **Buttons:** Primary buttons are solid Cyan with black text for maximum contrast. Secondary buttons use a "Ghost" style: a 1px Cyan border and a subtle glow on hover.
- **Chips / Tags:** Always use the Monospace font. They should feature a low-opacity background of the secondary color (Neon Green) with a solid 1px border.
- **Input Fields:** Use a dark, recessed background (#050505). On focus, the border should illuminate in Cyan with a faint outer glow. Labels should always be in the Monospace font.
- **Cards:** Glassmorphic containers with a subtle top-left to bottom-right gradient border.
- **Lists:** Technical lists should feature "line-and-dot" connectors to reinforce the "systems" and "circuitry" metaphor.
- **Data Tables:** High-density, using Monospace for all numeric values, with horizontal separators only (no vertical lines), using 5% opacity white.