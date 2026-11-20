---
name: Noor / نور
colors:
  surface: '#f9f9f8'
  surface-dim: '#dadad9'
  surface-bright: '#f9f9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f3'
  surface-container: '#eeeeed'
  surface-container-high: '#e8e8e7'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#404944'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1f0'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#2b6954'
  primary: '#003527'
  on-primary: '#ffffff'
  primary-container: '#064e3b'
  on-primary-container: '#80bea6'
  inverse-primary: '#95d3ba'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#003625'
  on-tertiary: '#ffffff'
  tertiary-container: '#004f38'
  on-tertiary-container: '#66c49d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b0f0d6'
  primary-fixed-dim: '#95d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#0b513d'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#97f5cc'
  tertiary-fixed-dim: '#7bd8b1'
  on-tertiary-fixed: '#002115'
  on-tertiary-fixed-variant: '#00513a'
  background: '#f9f9f8'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Newsreader
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Newsreader
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Newsreader
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-lg-mobile:
    fontFamily: Newsreader
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Newsreader
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1rem
  gutter-tablet: 1.25rem
  margin-tablet: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

The design system expresses a serene, contemplative, and spiritually grounded aesthetic designed for modern Islamic mobile lifestyle experiences. It balances devotion, discipline, and tranquility. The primary audience seeks an elevated, distraction-free environment for daily spiritual obligations (prayer timings, Quran recitations, Qibla orientation, Azkar, and habit tracking), requiring the interface to feel reverent yet contemporary.

The design philosophy combines **Spiritual Modernism** with **Tactile Minimal Luxury**:
- **Sacred Serenity:** Clean, uncluttered layouts with expansive breathing room evoke peaceful contemplation and mental clarity.
- **Modern Geometric Heritage:** Traditional Islamic geometric patterns and arch motifs are reinterpreted through abstract, micro-weight vector strokes and tinted surface watermarks rather than heavy ornamentation.
- **Harmonious Commercial Integration:** Monetization surfaces (such as native ad banners and sponsor highlights) are treated as first-class citizens. They are strictly regulated with tailored framing, subtle brass containment strokes, and distinct contextual tags so they integrate without disrupting devotion.
- **Bi-directional Parity:** Built from the ground up to support right-to-left (RTL) Arabic script seamlessly alongside left-to-right (LTR) languages, maintaining balanced visual rhythm across both scripts.

## Colors

The palette draws inspiration from sacred architecture, weathered vellum, natural jade, and illuminated manuscripts.

- **Primary (`#064e3b` / Deep Emerald):** The foundational anchor representing renewal, tranquility, and Islamic heritage. Used for major app bars, active navigation states, primary call-to-actions, and prominent identity surfaces. Supported by a lighter jewel emerald (`#047857`) for interactive states, progress rings, and secondary emphasis.
- **Secondary (`#d97706` / Warm Artisan Bronze):** Recalls gilded manuscript borders and celestial navigation. Applied sparingly to prayer-time indicators, current Ayah bookmarks, active tasbih beads, and micro-accents. Supported by a deep bronze (`#b45309`) for text links and accessible glyphs, and parchment shimmer (`#fef3c7`) for soft badge highlights.
- **Backgrounds & Neutrals (`#fafaf9`, `#f8fafc`, `#f1f5f9`):** A progression of warm, unbleached sand and vellum tones that reduce retinal glare during pre-dawn (Fajr) and evening (Isha) use, avoiding sterile cold whites.
- **Text & Structure (`#0f172a`, `#1e293b`):** Deep slate tones for high-legibility typographic contrast without the harshness of pure black.
- **Advertising & Promotion Surfaces:** Native ad placements are bound to `#fef3c7` tint overlays or `#f1f5f9` warm-slate surfaces with an amber border `#d97706` at 20% opacity, ensuring transparency and aesthetic alignment.

## Typography

The typography pairs contemplative classical serifs with clean, open sans-serif mechanics:

- **Display & Headings (Newsreader / Amiri style in Arabic):** Used for surah titles, prayer names, motivational passages, and editorial scripture highlights. The serif anatomy reflects calligraphy cut with a reed pen, infusing dignity into focal text blocks.
- **Body & Labels (Plus Jakarta Sans / Cairo & Noto Sans Arabic fallback):** Engineered for quick recognition on compact screens. Used for translations, commentary, time displays, navigational labels, and utility data.
- **Bidirectional Rules:** When rendering in Arabic (`dir="rtl"`), body line-height expands by 12-15% to comfortably accommodate ascenders, descenders, and complex diacritics (Tashkeel).
- **Numerals:** Eastern Arabic numerals (٠, ١, ٢, ...) follow the same baseline alignment and bounding-box proportions as standard tabular figures.

## Layout & Spacing

The layout is built on a mobile-first 4-column structure scaling to 8 columns on tablet viewports:

- **Mobile Rhythm:** Baseline horizontal margins remain at `1rem` (16px) to maximize screen area for scripture passages, while vertical component stack gaps use `space-md` (16px) or `space-lg` (24px) to preserve visual breathing room.
- **Tablet Adaptation:** When expanding to larger screens, content cards maintain max-width bounds (optimal at 640px for single-column scripture reading) and center within generous side margins (`2rem`).
- **Safe Area Insets:** Dynamic top and bottom safe-area padding are strictly observed to safeguard navigation tabs and status bars during full-screen Quranic recitation mode.
- **RTL Fluidity:** Grid gutters and component insets flip along the horizontal axis with zero asymmetry, ensuring margin alignment remains true whether reading right-to-left or left-to-right.

## Elevation & Depth

Visual hierarchy prioritizes tactile layering over high-contrast drop shadows:

- **Tonal Layers:** Elevation is primarily achieved using subtle chromatic tone shifts. Base background surfaces sit at `#fafaf9`; card containers sit at `#ffffff`; floating panels and active modals step forward using soft warm-tinted white with hairline borders.
- **Subtle Inner Shadows:** Cards, countdown modules, and prayer chips utilize a soft inner hairline highlight (`inset 0 1px 0 0 rgba(255, 255, 255, 0.6)`) and an ultra-subtle bottom recession (`inset 0 -1px 2px 0 rgba(15, 23, 42, 0.03)`), giving them a gentle, carved parchment quality.
- **Ambient Floor Shadows:** For floating action buttons, audio player bars, and pop-up modal sheets, shadows utilize deep emerald-tinted diffusion: `0 8px 24px -4px rgba(6, 78, 59, 0.08)`.
- **Low-Contrast Outlines:** Surfaces are framed with whisper-light boundaries (`1px solid rgba(15, 23, 42, 0.06)`), ensuring clear containment even in bright outdoor sunlight.

## Shapes

The geometry balances soft, inviting ergonomics with structural symmetry:

- **Card Contours:** Primary cards, prayer summary widgets, and list containers employ `rounded-2xl` (1rem / 16px radius), softening the touch target and evoking curved archways.
- **Interactive Controls:** Buttons, chips, and input pills leverage pill-shaped or soft rounded geometry (12px to full capsule) to maximize tactile appeal during one-handed thumb navigation.
- **Arched Accents:** Specialized headers, prayer milestone markers, and native banner envelopes may feature subtle pointed or trefoil top-corner arches (`radius-top: 24px`, `radius-bottom: 8px`) inspired by traditional Islamic architecture.

## Components

### Buttons
- **Primary:** Filled with `#064e3b` (Deep Emerald), featuring crisp white text, `rounded-xl` corners, and a subtle inner top highlight. Focus/pressed states transition to `#047857`.
- **Secondary:** Warm sand background (`#f1f5f9`), slate text (`#1e293b`), and a delicate perimeter stroke (`rgba(6, 78, 59, 0.12)`).
- **Spiritual Accent (Tasbih / Quick Action):** Solid `#d97706` (Bronze) with amber glow on active count tap.

### Chips & Badges
- **Status Chips:** Compact pill-shaped containers (`border-radius: 9999px`) with low-saturation backgrounds (e.g., `#fef3c7` for upcoming prayer alerts, `#064e3b` at 10% opacity for completed Azkar).
- **Prayer Progress Badges:** Small circular indicators filled with secondary bronze for current prayer, deep emerald for passed prayers, and sand for future prayers.

### Cards
- **Scripture & Prayer Cards:** Pure white (`#ffffff`) surfaces, `rounded-2xl`, with a subtle `1px` outline in `#f1f5f9` and soft inner top highlight. Inside, content is anchored by an icon or Arabic numeral contained in an arch-shaped badge.
- **Audio Reciter Dock:** Fixed bottom sheet floating over tab bars with an emerald-tinted frosted blur (`rgba(255, 255, 255, 0.85)` + backdrop-filter blur 16px) and playback progress in warm bronze.

### Inputs & Selectors
- **Input Fields:** Generous height (48px-52px), rounded corners (12px), background `#ffffff`, border `1px solid rgba(15, 23, 42, 0.1)`. Active focus states use `#064e3b` with a 2px outer aura at 15% opacity.
- **Checkboxes & Radios:** Curved checks with `#064e3b` fill when checked, styled with smooth spring transitions.

### Native Advertisement Units
- **Demarcated Ad Banners:** Integrated directly into prayer times, reading lists, or habit logs, enclosed in dedicated `rounded-2xl` card containers.
- **Aesthetic Treatment:** Tinted with soft sand (`#f8fafc`) or warm parchment (`#fef3c7` at 30%), bounded by a defined `1px` dashed or low-opacity bronze outline (`rgba(217, 119, 6, 0.25)`).
- **Ad Labeling:** Clearly marked with a localized `label-sm` pill badge ("إعلان" / "Sponsored") in the top corner (respecting RTL placement) using `#b45309` on `#fef3c7`, keeping commercial content distinct yet visually cohesive.

### Directionality (RTL/LTR)
- All list items, chevrons, card thumbnails, and icon-to-label orientations dynamically mirror based on the locale without requiring custom per-component overrides.