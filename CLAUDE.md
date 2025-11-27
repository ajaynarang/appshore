# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is AppShore LLP's marketing website - a Next.js 16 application showcasing their AI-driven product portfolio. The site features modern animations, dark/light theme support, and a premium Apple-inspired UX/UI design philosophy.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linter
npm run lint
```

Development server runs on `http://localhost:3000`

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **Theme**: next-themes (dark/light mode support)
- **Fonts**: Geist Sans and Geist Mono

### Directory Structure

```
app/
  ├── page.tsx           # Landing page with product showcase
  ├── about/page.tsx     # About page with company story
  ├── contact/page.tsx   # Contact form page
  ├── layout.tsx         # Root layout with ThemeProvider
  └── globals.css        # Global styles

components/
  ├── ui/                # Shadcn-based UI components
  ├── navigation.tsx     # Global nav with mobile menu
  ├── animated-gradient.tsx  # Canvas-based background animation
  ├── theme-toggle.tsx   # Dark/light mode switcher
  └── theme-provider.tsx # next-themes provider wrapper

lib/
  └── utils.ts          # cn() utility for class merging
```

### Key Architectural Patterns

1. **Product Data Structure**: All products are defined in `app/page.tsx` as a `products` array with this schema:
   ```typescript
   {
     id: string
     name: string
     tagline: string
     description: string
     icon: LucideIcon
     color: string           // Tailwind gradient classes
     bgGradient: string      // Tailwind gradient classes
     highlights: string[]
     metrics: object
     url: string
   }
   ```

2. **Animation Pattern**: Every page uses `AnimatedSection` wrapper component for scroll-triggered animations via `react-intersection-observer`. This ensures consistent entrance animations across the site.

3. **Theme System**: All pages must support both dark and light modes:
   - Use `dark:` prefixes for dark mode variants
   - Test all background colors, text colors, borders, and cards
   - Cards should be `bg-white dark:bg-gray-900` or similar
   - Text should be `text-gray-900 dark:text-gray-100` for primary content
   - Backgrounds should use `dark:from-gray-900 dark:to-gray-950` patterns

4. **Navigation**: The `Navigation` component is included on every page and provides:
   - Sticky header with scroll-based backdrop blur
   - Mobile-responsive hamburger menu
   - Theme toggle integration
   - Gradient logo and brand

5. **Layout**: Every page follows this structure:
   ```tsx
   <>
     <Navigation />
     <AnimatedGradient />
     <main className="relative min-h-screen pt-20">
       {/* Page sections */}
     </main>
   </>
   ```

## Design System

### Brand Guidelines
- **Philosophy**: Apple-inspired minimalist design with premium feel
- **Colors**:
  - Primary gradient: `from-blue-600 via-purple-600 to-pink-600`
  - Supporting: cyan, teal, green, amber, red, orange
- **Typography**: Large, bold headlines (text-6xl to text-9xl)
- **Spacing**: Generous whitespace with py-32 for sections
- **Shadows**: Subtle to dramatic (shadow-xl, shadow-2xl)
- **Borders**: 2px borders that change on hover

### Component Patterns
- **Cards**: Always use `Card` from `@/components/ui/card` with hover effects
- **Badges**: Use `Badge` for labels with gradient or subtle backgrounds
- **Buttons**: Rounded-full with gradient backgrounds for CTAs
- **Icons**: Lucide React icons exclusively, sized w-5 h-5 to w-20 h-20

### Dark Mode Requirements
When working on any page or component:
1. Always add dark mode variants for backgrounds, text, and borders
2. Test that cards don't become invisible in dark mode
3. Ensure gradient text remains visible in both themes
4. Use `dark:border-gray-800` for subtle borders in dark mode
5. Background gradients should be muted in dark mode (add `/20` opacity or use `dark:from-gray-900`)

## Product Management

### Showing/Hiding Products
Products can be hidden by filtering the `products` array before rendering. Current visibility:
- **Active**: Parla, Shelfy
- **Hidden** (commented out or filtered): Oops! I Learn, Truck Pilot, Tourna-X, NexaCart

To hide/show products, filter the array in the map function:
```tsx
{products.filter(p => ['parla', 'shelfy'].includes(p.id)).map((product) => ...)}
```

### Footer Products
The footer lists products - ensure it matches the visible products on the main page.

## Common Tasks

### Adding a New Page
1. Create `app/[page-name]/page.tsx`
2. Import and include `<Navigation />` and `<AnimatedGradient />`
3. Add `'use client'` directive if using animations or state
4. Wrap sections in `<AnimatedSection>` for scroll animations
5. Ensure all elements have dark mode variants
6. Add page link to `Navigation` component's `navItems` array

### Modifying Dark Mode Styles
Look for these patterns and ensure dark variants exist:
- `bg-white` → add `dark:bg-gray-900`
- `text-gray-900` → add `dark:text-gray-100`
- `border-gray-200` → add `dark:border-gray-800`
- Gradient backgrounds need `dark:opacity-10` or dark color variants

### Updating Product Information
Edit the `products` array in `app/page.tsx`. Each product needs all fields filled, including icon, colors, and URL.

## Important Notes

- **All pages are client components**: Use `'use client'` directive due to Framer Motion
- **Responsive design**: Mobile-first approach with sm:, md:, lg: breakpoints
- **Performance**: AnimatedGradient uses canvas and RAF - already optimized
- **TypeScript**: Strict mode enabled, maintain type safety
- **No testing framework**: Testing is manual via dev server
