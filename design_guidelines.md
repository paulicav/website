# Design Guidelines for Clean4Good - Cleaning Services Landing Page

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern service industry leaders like Airbnb (trust and cleanliness), Stripe (professional minimalism), and Apple (premium feel). The design will emphasize trust, professionalism, and cleanliness through a modern, sophisticated visual language.

## Core Design Principles
1. **Trust Through Cleanliness**: Ultra-clean aesthetic with generous whitespace
2. **Professional Credibility**: Polished, premium feel despite being a local service
3. **Visual Clarity**: Clear hierarchy and easy-to-scan content structure
4. **Motion Thoughtfulness**: Parallax and scroll animations enhance without overwhelming

## Color Palette

### Light Mode
- **Primary Background**: 0 0% 100% (Pure white - symbolizing cleanliness)
- **Primary Brand**: 195 100% 39% (Vibrant turquoise/cyan - fresh and clean)
- **Secondary Background**: 195 60% 97% (Light turquoise wash for sections)
- **Text Primary**: 210 24% 16% (Deep navy, excellent readability and contrast)
- **Text Secondary**: 210 16% 46% (Muted blue-gray for supporting text)
- **Accent**: 24 95% 53% (Warm orange - energy and friendliness)
- **Border/Divider**: 210 20% 90% (Subtle separation)

### Dark Mode (for form inputs and footer)
- **Background**: 220 20% 12% (Deep navy-slate)
- **Surface**: 220 18% 18% (Elevated elements)
- **Text**: 200 10% 95% (Off-white)
- **Borders**: 220 15% 25%

## Typography

**Font Stack**: 
- **Primary (Headings)**: 'Inter', sans-serif (Google Fonts) - Modern, clean, professional
- **Secondary (Body)**: 'Inter', sans-serif - Consistency for trust

**Scale**:
- Hero Heading: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headings: text-3xl md:text-4xl, font-semibold
- Subsection Headings: text-xl md:text-2xl, font-medium
- Body Text: text-base md:text-lg, font-normal
- Small Text: text-sm, font-normal

**Line Heights**: leading-tight for headings, leading-relaxed for body text

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, m-8, gap-6, py-20, etc.)

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Content sections: max-w-6xl for feature grids
- Text-heavy content: max-w-4xl for optimal reading

**Vertical Rhythm**:
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-12 md:space-y-16
- Tight groupings: space-y-4 md:space-y-6

## Page Structure & Sections

### 1. Hero Section (100vh)
- Full viewport height with parallax background
- Centered content with translucent overlay
- Large hero image showing sparkling clean space (kitchen or modern office)
- H1: "Clean4Good" + tagline about professional cleaning
- Primary CTA: "Solicită Ofertă Gratuită"
- Scroll indicator at bottom

### 2. Services Overview (Multi-column)
- 2-column layout (md:grid-cols-2)
- Large cards for Residential vs Commercial services
- Icons, brief descriptions, "Află mai multe" buttons

### 3. Residential Cleaning Section (Curățenie Rezidențială)
- Left-aligned heading
- 2-column grid for service types:
  - Curățenie Generală (detailed checklist)
  - Curățenie Întreținere (maintenance list)
- Background image (subtle, faded modern home interior)
- Checklist items with green checkmark icons

### 4. Commercial Cleaning Section (Birouri și Spații Comerciale)
- Right-aligned heading for visual variety
- 2-column grid for service types
- Background image (subtle office space)
- Professional tone, similar checklist format

### 5. Why Choose Us Section
- 3-column feature grid (grid-cols-1 md:grid-cols-3)
- Icon + heading + description for each benefit
- Benefits: Profesionalism, Flexibilitate, Echipamente Profesionale

### 6. Contact Section (2-column layout)
- Left: Contact form with dark background
  - Fields: Nume, Email, Telefon, Tip Serviciu, Suprafață, Mesaj
  - Primary CTA button
- Right: Contact information card
  - Name: Cristian Ioana
  - Phone: 0742575464 (clickable tel: link)
  - Address: Str. Tiberiu Ricci Nr.13, Cisnadie
  - Map placeholder or decorative element

### 7. Footer
- Dark background (matches dark mode palette)
- 3-column layout: Despre, Servicii links, Contact recap
- Copyright and social links

## Component Library

### Buttons
- **Primary**: Rounded-lg, py-3 px-8, font-semibold, bg-primary, text-white, hover:scale-105 transition
- **Outline (on images)**: Rounded-lg, py-3 px-8, border-2 border-white, text-white, backdrop-blur-sm bg-white/10

### Cards
- Rounded-2xl with subtle shadow (shadow-lg hover:shadow-xl)
- Background white in light mode, surface color in dark sections
- Padding: p-8 md:p-10
- Border: border border-gray-200 for light sections

### Form Inputs
- Dark background matching contact section
- Rounded-lg, py-3 px-4
- Border on focus: focus:ring-2 ring-primary/50
- Placeholder styling: placeholder:text-gray-400

### Icons
- Use Heroicons via CDN
- Sizes: h-6 w-6 for inline, h-12 w-12 for features
- Color: text-primary or text-accent as appropriate

## Parallax & Animation Strategy

### Parallax Implementation
- Hero background image: Slow vertical parallax (0.5x scroll speed)
- Section background images: Subtle parallax (0.7x speed)
- Use transform: translateY() for performance

### Scroll Animations
- **Fade In from Bottom**: Elements start opacity-0 translate-y-8, animate to opacity-100 translate-y-0
- **Trigger point**: When element is 20% into viewport
- **Duration**: 600ms with ease-out timing
- **Stagger**: Sequential fade for list items (100ms delay between each)
- Apply to: Section headings, service cards, checklist items, contact form

### Animation Timing
- Use cubic-bezier(0.4, 0, 0.2, 1) for smooth, professional feel
- Keep animations subtle - enhance, don't distract

## Images

### Required Images:
1. **Hero**: Large, high-quality image of sparkling clean modern interior (bright, airy kitchen or living room with sunlight) - Full viewport background
2. **Residential Background**: Subtle, faded image of clean home interior (bedroom or bathroom) - Section background
3. **Commercial Background**: Modern, clean office space with desks - Section background
4. **Service Cards**: Small accent images for residential/commercial preview cards

### Image Treatment:
- Hero: Slight darkening overlay (bg-black/40) for text readability
- Section backgrounds: Heavy fade (opacity-10 to opacity-20) to not compete with text
- All images: High resolution, professional photography aesthetic

## Responsive Behavior
- **Mobile (base)**: Single column, stacked sections, full-width cards
- **Tablet (md:)**: 2-column grids, side-by-side layouts begin
- **Desktop (lg:)**: Full multi-column layouts, optimal spacing, parallax effects active

## Accessibility Notes
- Maintain WCAG AA contrast ratios (4.5:1 for text)
- Focus states clearly visible (ring-2 ring-primary)
- Reduce motion for users with prefers-reduced-motion
- Semantic HTML throughout (nav, main, section, footer)
- Alt text for all images describing clean spaces