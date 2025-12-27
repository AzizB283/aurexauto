# AurexAuto

## Overview

AurexAuto is a multi-page business website for an AI automation agency. The site showcases AI services including chatbots, voice assistants, workflow automations, and dashboard solutions. It features a dark premium aesthetic with purple/cyan gradient accents and includes a contact form for lead capture.

## User Preferences

- Preferred communication style: Simple, everyday language
- Design preference: Dark theme with Brooklyn AI Wizard style (clean, minimal dark theme with purple/cyan gradients)
- Site structure: Multi-page (Home, Services, Portfolio, Pricing, About, Contact)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight client-side routing)
- **Styling**: Tailwind CSS with custom dark/light theme variables
- **UI Components**: shadcn/ui component library (Radix UI primitives)
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite
- **Theme System**: Custom ThemeProvider with localStorage persistence (defaults to dark)

### Page Structure
- `/` - Home page with hero, stats, features, testimonials, CTA
- `/services` - 6 service offerings with detailed feature lists
- `/portfolio` - 4 case studies with metrics and results
- `/pricing` - 3 pricing tiers with FAQ accordion
- `/about` - Company values, story, milestones, team
- `/contact` - Contact form with sidebar info

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript (ESM modules)
- **API Pattern**: REST endpoints under `/api/` prefix
- **Build**: esbuild for production bundling

The server handles API routes and serves the static frontend in production.

### Data Layer
- **Storage**: In-memory storage for contact form submissions
- **ORM**: Drizzle ORM (configured for PostgreSQL if needed)
- **Schema Location**: `shared/schema.ts`
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod

Current entities:
- `users` - Basic user accounts (unused)
- `contactSubmissions` - Lead capture form submissions (name, business, email, phone, budget, automation needs)

### API Endpoints
- `POST /api/contact` - Submit contact form (validated with Zod)
- `GET /api/contacts` - Get all contact submissions

### Design System
The application uses a custom theme with:
- **Dark mode (default)**:
  - Background: Deep charcoal (#0B0F14)
  - Primary accent: Electric Purple (HSL 265 85% 62%)
  - Secondary accent: Neon Blue/Cyan (HSL 190 95% 55%)
- **Light mode**:
  - Background: Near white (#FAFAFA)
  - Primary accent: Electric Purple (HSL 265 85% 58%)
  - Secondary accent: Cyan (HSL 190 85% 45%)
- Typography: Inter/DM Sans for body, Poppins/Space Grotesk for headlines

### Key Components
- `Layout` - Shared header/footer with responsive navigation
- `ThemeProvider` - Dark/light theme management with localStorage
- Page-specific components for each route

## File Structure
```
client/
├── src/
│   ├── components/
│   │   ├── layout.tsx          # Header + Footer wrapper
│   │   ├── theme-provider.tsx  # Theme context
│   │   └── ui/                 # shadcn components
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── services.tsx
│   │   ├── portfolio.tsx
│   │   ├── pricing.tsx
│   │   ├── about.tsx
│   │   └── contact.tsx
│   ├── App.tsx
│   └── index.css
server/
├── routes.ts                   # API endpoints
└── storage.ts                  # In-memory storage
shared/
└── schema.ts                   # Data types and validation
```

## External Dependencies

### UI Libraries
- Radix UI primitives (dialog, dropdown, forms, accordion, etc.)
- Lucide React for icons
- Recharts for data visualization (if needed)

### Development Tools
- Replit-specific plugins for dev banner and error overlay
- PostCSS with Tailwind and Autoprefixer
