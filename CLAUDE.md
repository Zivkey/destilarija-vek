# Destilerija VEK - Premium Rakija Website

## Tech Stack
- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4 (`@theme inline` for custom tokens)
- **Animations**: Framer Motion
- **Icons**: Lucide React (installed), SVG inline
- **Fonts**: Playfair Display (serif headings), Inter (body) via `next/font/google`

## Project Structure
```
src/
  app/
    layout.tsx      # Root layout with fonts and metadata
    page.tsx        # Main page composing all sections
    globals.css     # Tailwind theme, custom CSS classes
  components/
    AgeGate.tsx     # 18+ age verification modal
    Navigation.tsx  # Fixed nav with mobile menu
    Hero.tsx        # Fullscreen hero with parallax image
    About.tsx       # About section with stats
    QuoteSection.tsx # Philosophy quote banner
    Production.tsx  # Production process & plum varieties
    Products.tsx    # Standard & Premium rakija display
    Contact.tsx     # Order form & contact info
    Footer.tsx      # Minimal footer
    VideoSection.tsx # Unused, kept for potential future use
public/
  images/           # All images from destilerijavek.rs
  videos/           # Video files (gitignored, not deployed)
```

## Design System
- **Colors**: Dark background (#0A0A0A), gold accents (#c99542), cream text (#F5F0E8)
- **Brand color**: `--color-gold: #c99542` (from client's existing site)
- **Style**: Premium/luxury dark theme inspired by thedalmore.com
- **Custom CSS classes**: `.gold-line`, `.gold-line-wide`, `.text-gradient-gold`, `.hero-overlay`, `.noise-overlay`

## Commands
- `npm run dev` - Start dev server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint

## Notes
- Video file (70MB) is gitignored - too large for GitHub/Vercel
- Images downloaded from destilerijavek.rs (both thumbnail and full-res versions)
- Age gate uses sessionStorage (resets on tab close)
- Contact form opens mailto: to info@destilerijavek.rs
- Content is in Serbian (latin script)
