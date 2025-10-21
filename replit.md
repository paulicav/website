# Clean4Good - Cleaning Services Landing Page

## Overview
Clean4Good is a modern, frontend-only React landing page for a professional cleaning services company based in Cisnadie, Romania. The site showcases both residential and commercial cleaning services with a focus on trust, professionalism, and cleanliness.

## Project Details
- **Company Name**: Clean4Good
- **Contact**: Cristian Ioana
- **Phone**: 0742 575 464
- **Address**: Str. Tiberiu Ricci Nr.13, Cisnadie
- **Language**: Romanian (all content)

## Features
- **Hero Section**: Full-screen hero with parallax scrolling effect
- **Services Overview**: Preview cards for residential and commercial services
- **Residential Services**: Detailed cleaning service lists (general + maintenance)
- **Commercial Services**: Office and commercial space cleaning services
- **Why Choose Us**: Feature highlights (professionalism, flexibility, professional equipment)
- **Contact Section**: Contact information and call-to-action
- **Footer**: Navigation and company information

## Technical Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## Design Approach
The design follows a clean, professional aesthetic inspired by modern service industry leaders:
- **Pure white backgrounds** symbolizing cleanliness
- **Professional blue** (#200 95% 45%) for trust and reliability
- **Fresh green accent** (#160 75% 42%) for eco-friendly messaging
- **Generous whitespace** for ultra-clean look
- **Smooth parallax effects** on hero and section backgrounds
- **Fade-in animations** triggered by scroll intersection observer

## Key Sections

### 1. Hero Section
- Full viewport height with parallax background image
- Clean4Good branding and tagline
- Primary CTA: "Solicită Ofertă Gratuită"
- Scroll indicator animation

### 2. Services Overview
- Two-column grid showcasing residential and commercial services
- Icons and brief descriptions
- Links to detailed sections below

### 3. Residential Cleaning (Curățenie Rezidențială)
- Two service types:
  - **Curățenie Generală**: 14 comprehensive services
  - **Curățenie de Întreținere**: 10 maintenance services
- Background parallax with faded home interior image
- Green checkmark icons for service lists

### 4. Commercial Cleaning (Birouri și Spații Comerciale)
- Two service types:
  - **Curățenie Generală**: 14 office cleaning services
  - **Curățenie de Întreținere**: 9 maintenance services
- Background parallax with faded office image
- Professional blue checkmark icons

### 5. Why Choose Us
- Three feature cards:
  - Profesionalism (Award icon)
  - Flexibilitate (Users icon)
  - Echipamente Profesionale (Wrench icon)

### 6. Contact Section
- Contact information card with name, phone, address
- Program information
- Call-to-action card with benefits list
- Prominent "Sună Acum" button

### 7. Footer
- Three-column layout: About, Services, Contact
- Dark background (navy-slate)
- Copyright notice

## Scroll Animations
- **Intersection Observer API** triggers fade-in animations
- Elements start with `opacity-0 translate-y-8`
- Animate to `opacity-100 translate-y-0` when 20% in viewport
- 600ms duration with ease-out timing
- Staggered delays for list items (50-150ms)

## Parallax Effects
- **Hero background**: 0.5x scroll speed (slower than scroll)
- **Section backgrounds**: 0.3x scroll speed (subtle effect)
- Uses `transform: translateY()` for performance
- Calculated based on scroll position

## Images
Three generated images used throughout:
1. **Hero**: Clean modern kitchen with sunlight
2. **Residential**: Clean living room interior
3. **Commercial**: Modern office workspace

## Responsive Design
- **Mobile (base)**: Single column, stacked sections
- **Tablet (md:)**: 2-column grids begin
- **Desktop (lg:)**: Full multi-column layouts, enhanced spacing

## Color Palette
### Light Mode
- Primary Background: Pure white (0 0% 100%)
- Primary Brand: Deep professional blue (200 95% 45%)
- Secondary Background: Light blue wash (200 25% 97%)
- Text Primary: Near black (220 15% 15%)
- Text Secondary: Muted slate (220 10% 45%)
- Accent: Fresh green (160 75% 42%)

### Dark Elements (Footer, contact cards)
- Background: Deep navy-slate (220 20% 12%)
- Text: Off-white (200 10% 95%)

## Typography Scale
- Hero: text-5xl → text-7xl, font-bold
- Section Headings: text-3xl → text-4xl, font-semibold
- Subsection: text-xl → text-2xl, font-medium
- Body: text-base → text-lg
- Small: text-sm

## Accessibility
- Semantic HTML (nav, main, section, footer)
- WCAG AA contrast ratios (4.5:1 for text)
- Focus states with ring-2 ring-primary
- Alt text for all images
- Clickable phone links (tel:)
- Smooth scroll behavior for navigation

## Recent Changes
- **2025-01-21**: Initial project setup with complete landing page
  - Configured design system with Clean4Good color palette
  - Generated hero and section background images
  - Implemented parallax scrolling effects
  - Added scroll-triggered fade animations
  - Built all 7 sections with Romanian content
  - Ensured full responsive design
  - Added contact information and CTAs

## User Preferences
- Frontend-only application (no backend required)
- Modern, clean aesthetic
- Parallax scrolling effects
- Scroll-triggered fade animations
- All content in Romanian language
- No prices displayed (per user request)

## Project Structure
```
client/
  src/
    pages/
      home.tsx          # Main landing page with all sections
      not-found.tsx     # 404 page
    components/
      ui/               # Shadcn UI components
    lib/
      queryClient.ts    # React Query setup
    App.tsx            # App router
    index.css          # Global styles and design tokens
    main.tsx           # Entry point
```

## Running the Project
```bash
npm run dev
```
Opens on port 5000 with Vite dev server.

## Notes
- No backend required - purely frontend application
- All service information is static content
- Contact is via phone call (tel: links)
- Images are generated and optimized
- Design follows design_guidelines.md specifications
