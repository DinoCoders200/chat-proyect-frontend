---
name: Echo
colors:
  surface: '#fdf8f7'
  surface-dim: '#ddd9d7'
  surface-bright: '#fdf8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f1'
  surface-container: '#f1edeb'
  surface-container-high: '#ebe7e5'
  surface-container-highest: '#e5e2e0'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4d4638'
  inverse-surface: '#31302f'
  inverse-on-surface: '#f4f0ee'
  outline: '#7f7666'
  outline-variant: '#d0c5b2'
  surface-tint: '#765b06'
  primary: '#765b06'
  on-primary: '#ffffff'
  primary-container: '#c9a751'
  on-primary-container: '#503d00'
  inverse-primary: '#e6c269'
  secondary: '#006a68'
  on-secondary: '#ffffff'
  secondary-container: '#94efed'
  on-secondary-container: '#006e6d'
  tertiary: '#5b5e6a'
  on-tertiary: '#ffffff'
  tertiary-container: '#a8aab8'
  on-tertiary-container: '#3c3f4a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdf95'
  primary-fixed-dim: '#e6c269'
  on-primary-fixed: '#251a00'
  on-primary-fixed-variant: '#594400'
  secondary-fixed: '#97f2f0'
  secondary-fixed-dim: '#7ad5d3'
  on-secondary-fixed: '#00201f'
  on-secondary-fixed-variant: '#00504f'
  tertiary-fixed: '#e0e2f1'
  tertiary-fixed-dim: '#c4c6d4'
  on-tertiary-fixed: '#181b26'
  on-tertiary-fixed-variant: '#434652'
  background: '#fdf8f7'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e0'
typography:
  display:
    fontFamily: Poppins
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Poppins
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Poppins
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Poppins
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Poppins
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Poppins
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Poppins
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Poppins
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1280px
---

# Brand & Style

The design system is defined by a sophisticated, editorial-inspired aesthetic that targets a high-end, professional audience. It blends Minimalism with High-Contrast elements to create a sense of authority and timelessness. 

The brand personality is "Elevated Precision"—where every pixel feels intentional and every layout feels curated. The visual narrative avoids trendy translucent effects in favor of structural clarity, generous white space, and a refined "Modern Classic" atmosphere. It evokes a feeling of exclusivity and reliable craftsmanship, utilizing sharp typography and a regal color palette to differentiate itself from standard corporate SaaS environments.

# Colors

The palette is anchored by a high-contrast relationship between a clean, light-gray foundation and deep, authoritative neutrals. 

Primary (Gold): Used sparingly for high-impact moments, such as primary call-to-actions, active navigation states, and brand-defining highlights.
Surface & Background: The #F8F9FA base provides a gallery-like backdrop that allows content to breathe. 
Dark Blue Gray & CMYK Gray: These are used for text, borders, and structural elements to maintain a serious, professional grounding.
Teal (Secondary): Reserved for secondary indicators, informative badges, or subtle accents that require distinction from the primary gold.
Red (Semantic): A deep, saturated red strictly for destructive actions and critical error states.

# Typography

This design system utilizes Poppins across all levels to maintain a cohesive, geometric, and modern feel. The hierarchy is strictly enforced to ensure an editorial flow.

Display & Headlines: Use heavy weights (700) with slight negative letter spacing to create a commanding presence.
Body Text: Set with generous line heights to prioritize legibility and a sense of "openness" on the page.
Labels: Always set in uppercase with increased letter spacing (tracking) to provide a sophisticated, technical contrast to the more organic headlines.
Mobile Scaling: Headlines scale down aggressively to ensure no more than three words per line on small viewports, maintaining the high-end aesthetic.

# Layout & Spacing

The layout philosophy follows a Fixed-Fluid hybrid grid. Content is contained within a 1280px max-width container on desktop to maintain the editorial feel, while smaller viewports utilize fluid percentage-based widths.

Rhythm: A strict 4px baseline grid ensures vertical alignment.
Margins: Large 64px outer margins on desktop enforce the "luxury of space."
Grid: A 12-column system is used for desktop, 8-column for tablet, and 4-column for mobile.
Safe Zones: High-density data is avoided. Instead, use "white space as a separator" rather than heavy lines where possible.

# Elevation & Depth

This design system avoids traditional drop shadows in favor of Tonal Layering and High-Contrast Outlines.

 Level 0 (Base): #F8F9FA background.
 Level 1 (Cards/Containers): Solid white (#FFFFFF) surfaces with a thin, 1px border in #242732 (at 10-15% opacity).
 Level 2 (Interaction): Elements "lift" using a subtle, crisp 2px offset border in the Primary Gold color rather than a blur.
 No Blurs: Avoid background blurs or soft glows. Depth is created through the stacking of solid colors and the use of contrasting borders to define edges.

# Shapes

The shape language is defined by "Balanced Geometry." The standard corner radius is 8px, providing a contemporary feel that is neither too sharp (brutalist) nor too round (playful).

Standard Elements: Buttons, input fields, and cards utilize the base 8px (rounded) radius.
Interactive States: When focused, elements maintain their 8px radius but are reinforced by a 2px solid primary-gold stroke.
Icons: Should be linear and follow the same geometric principles—avoiding overly filled or rounded icon sets.

# Components

Buttons: 
Primary: Solid #C9A751 with white text. Uppercase label. No shadow.
Secondary: Transparent background with a 1px #242732 border.
Input Fields: Flat #FFFFFF background with a 1px bottom-border only for a sophisticated "form" look, or a full 1px border in #363534 at low opacity. Labels sit above the field in the label-md style.
Cards: White surfaces, 8px radius, 1px subtle border. Content should have at least 32px of internal padding to maintain the editorial feel.
Chips/Badges: Small, 4px radius (sharper than buttons) using the Teal secondary color at low opacity for the background and full opacity for the text.
Lists: Separated by thin, full-bleed dividers in #363534 at 10% opacity. High vertical padding between list items (16px+).
Navigation: Top-tier navigation uses the Primary Gold for the active state indicator—specifically a 2px thick horizontal bar above or below the text.
