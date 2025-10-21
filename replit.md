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
- **Sticky Header Navigation**: Fixed header with smooth navigation to sections, transitions with scroll
- **Hero Section**: Full-screen hero with parallax scrolling effect
- **Services Overview**: Preview cards for residential and commercial services
- **How It Works Section**: 3-step booking process explanation with icons
- **Residential Services**: Detailed cleaning service lists (general + maintenance)
- **Commercial Services**: Office and commercial space cleaning services
- **Why Choose Us**: Feature highlights (professionalism, flexibility, professional equipment)
- **Contact Section**: Contact information and call-to-action
- **Footer**: 4-column layout with Legal links (Privacy Policy, Cookie Policy, ANPC)
- **Policy Pages**: Privacy Policy and Cookie Policy with Romanian content
- **Full Dark Mode Support**: All pages support light/dark themes with proper contrast

## Technical Stack
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter
- **Styling**: Tailwind CSS with custom design tokens
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## Design Approach
The design follows a clean, professional aesthetic with modern color scheme:
- **Navy primary** (215 25% 27%) for trust and professionalism
- **Turquoise accent** (174 72% 56%) for fresh, clean appeal
- **Orange secondary** (27 87% 67%) for energy and warmth
- **Full light/dark mode support** with proper theme tokens
- **Sticky navigation** that transitions on scroll
- **Generous whitespace** for ultra-clean look
- **Smooth parallax effects** on hero and section backgrounds
- **Fade-in animations** triggered by scroll intersection observer

## Key Sections

### 1. Sticky Header Navigation
- Fixed position with smooth scroll behavior
- **Desktop Navigation**: Horizontal menu with Servicii, Cum Funcționează, Contact, and "Solicită Ofertă" button
- **Mobile Navigation**: Burger menu with full-screen overlay
  - Hamburger icon toggles to X when open
  - Automatically closes when navigation item clicked
  - Automatically closes when viewport resizes to desktop
- Transparent background initially, transitions to solid with blur on scroll
- Full dark mode support

### 2. Hero Section
- Full viewport height with parallax background image
- Clean4Good branding and tagline
- Primary CTA: "Solicită Ofertă Gratuită"
- Scroll indicator animation

### 3. Services Overview
- Two-column grid showcasing residential and commercial services
- Icons and brief descriptions
- Links to detailed sections below

### 4. How It Works (Cum Funcționează)
- 3-step process cards with icons:
  - **Step 1**: Contactați-ne (Phone icon)
  - **Step 2**: Programare (Calendar icon)
  - **Step 3**: Curățenie Profesională (Sparkles icon)
- Centered section heading
- Responsive grid layout

### 5. Residential Cleaning (Curățenie Rezidențială)
- Two service types:
  - **Curățenie Generală**: 14 comprehensive services
  - **Curățenie de Întreținere**: 10 maintenance services
- Background parallax with faded home interior image
- Turquoise checkmark icons for service lists

### 6. Commercial Cleaning (Birouri și Spații Comerciale)
- Two service types:
  - **Curățenie Generală**: 14 office cleaning services
  - **Curățenie de Întreținere**: 9 maintenance services
- Background parallax with faded office image
- Navy checkmark icons

### 7. Why Choose Us (De Ce Să Ne Alegeți)
- Three feature cards:
  - Profesionalism (Award icon)
  - Flexibilitate (Users icon)
  - Echipamente Profesionale (Wrench icon)

### 8. Contact Section
- Modern, flat layout with subtle bg-muted/30 background
- Centered 3-column grid for contact information (stacks on mobile)
- Round icon backgrounds for visual interest
- Contact details: Cristian Ioana, 0742 575 464, Str. Tiberiu Ricci Nr.13, Cisnadie
- Clean border divider separating information from CTA
- Horizontal flex-wrap benefits list (Evaluare gratuită, Ofertă transparentă, Răspuns rapid, Flexibilitate totală)
- Centered CTA button "Sună Acum" (phone number not displayed on button)

### 9. Footer
- 4-column layout: Despre Noi, Servicii, Legal, Contact
- Legal column with:
  - Politica de Confidențialitate (Privacy Policy)
  - Politica de Cookie-uri (Cookie Policy)
  - ANPC.ro (external link)
- Dark background with proper contrast
- Copyright notice

### 10. Policy Pages
- **Privacy Policy** (/politica-confidentialitate): GDPR-compliant privacy information
- **Cookie Policy** (/politica-cookie): Cookie usage and management information
- Both pages feature:
  - Sticky header with back-to-home navigation
  - Multiple information cards
  - Contact section
  - Clean, readable layout
  - Full dark mode support

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
- Background: Pure white (0 0% 100%)
- Foreground: Dark text (222.2 84% 4.9%)
- Primary: Professional navy (215 25% 27%)
- Primary Foreground: White text (210 40% 98%)
- Secondary: Light gray (210 40% 96.1%)
- Accent: Turquoise (174 72% 56%)
- Accent Foreground: Navy (215 25% 27%)
- Muted: Light slate (210 40% 96.1%)
- Destructive: Warm orange (27 87% 67%)

### Dark Mode
- Background: Deep navy-slate (222.2 84% 4.9%)
- Foreground: Off-white (210 40% 98%)
- Primary: Lighter navy (217.2 91.2% 59.8%)
- Secondary: Dark slate (217.2 32.6% 17.5%)
- Accent: Bright turquoise (174 72% 56%)
- Muted: Darker slate (217.2 32.6% 17.5%)
- Card: Slightly lighter background (222.2 84% 4.9%)

### Theme Support
- All components use semantic color tokens (background, foreground, primary, etc.)
- Explicit dark: variants for proper contrast in dark mode
- WCAG AA compliant contrast ratios

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
- **2025-01-21**: Mobile burger menu and button text updates
  - Implemented mobile burger menu navigation with hamburger/X icon toggle
  - Desktop navigation shows horizontal menu (Servicii, Cum Funcționează, Contact, Solicită Ofertă)
  - Mobile navigation uses burger menu with full-screen overlay
  - Mobile menu automatically closes when navigation item clicked
  - Mobile menu automatically closes when viewport resizes to desktop (≥768px)
  - Updated "Sună Acum" button text to remove phone number display
  - All data-testid attributes maintained for testing
  - Verified responsive behavior with automatic menu closure on resize
  
- **2025-01-21**: Navigation and Contact section improvements
  - Simplified navigation menu to show only Servicii, Cum Funcționează, Contact (removed Rezidențial and Comercial)
  - Fixed 'Servicii' navigation link by adding id="services" to ServicesOverview section
  - Redesigned Contact section with modern, flat layout:
    - Replaced card-based layout with clean 3-column grid
    - Round icon backgrounds for contact information
    - Subtle bg-muted/30 background instead of cards
    - Border divider separating info from CTA
    - Horizontal flex-wrap benefits list
    - Centered CTA button
  - All interactive elements retain data-testid attributes
  - Verified responsive behavior across all breakpoints
  
- **2025-01-21**: Latest updates with improved UX and legal compliance
  - Updated color scheme to navy/turquoise/orange for better contrast and modern appeal
  - Implemented sticky header navigation with smooth scroll to sections
  - Added "Cum Funcționează" (How It Works) section with 3-step booking process
  - Centered all section headings and improved responsive layout
  - Updated footer to 4-column layout with Legal column
  - Created Privacy Policy and Cookie Policy pages (/politica-confidentialitate, /politica-cookie)
  - Added ANPC.ro external link in footer
  - Implemented comprehensive dark mode support across all pages and components
  - All interactive elements include data-testid attributes for testing
  - Ensured WCAG AA contrast compliance in both light and dark modes
  
- **2025-01-21**: Initial project setup with complete landing page
  - Configured design system with Clean4Good color palette
  - Generated hero and section background images
  - Implemented parallax scrolling effects
  - Added scroll-triggered fade animations
  - Built all sections with Romanian content
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
      home.tsx               # Main landing page with all sections + sticky header
      privacy-policy.tsx     # Privacy Policy page (GDPR compliant)
      cookie-policy.tsx      # Cookie Policy page
      not-found.tsx          # 404 page
    components/
      ui/                    # Shadcn UI components (Card, Button, etc.)
    lib/
      queryClient.ts         # React Query setup
    App.tsx                  # App router with routes for all pages
    index.css              # Global styles, design tokens, dark mode support
    main.tsx               # Entry point
design_guidelines.md        # Design system documentation
attached_assets/
  generated_images/          # Hero and section background images
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
