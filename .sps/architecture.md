# Architecture — Shahidul Islam Portfolio (Shahid Studios)

## Overview

Multi-page personal portfolio built with Astro 6, React Islands, and a premium animation/3D stack. Content sourced from Sanity CMS (dynamic) and Astro Content Collections/MDX (editorial). Deployed on Vercel (free) with Hostinger subdomain.

## Brand Identity

- **Name:** Mohammad Shahidul Islam
- **Brand:** Shahid Studios
- **Tagline:** "Your Brand, Engineered Beautifully"
- **Logo:** Geometric angular mark — Black (#0A0A0A) + Neon Lime (#E1FC06)
- **Location:** Chattogram, Bangladesh
- **Contact:** shahidprintshop@gmail.com | WhatsApp: +880 1840488142

## Tech Stack

| Layer            | Tool                                   | Version                        | Purpose                                     |
| ---------------- | -------------------------------------- | ------------------------------ | ------------------------------------------- |
| Framework        | Astro                                  | 6.4.x                          | SSG, zero-JS default, islands               |
| UI Islands       | React                                  | 19.x                           | Interactive components (3D, forms)          |
| Styling          | Tailwind CSS                           | 4.3.x                          | CSS-first tokens via @tailwindcss/vite      |
| CMS              | Sanity                                 | latest                         | Dynamic content (embedded /studio)          |
| Content          | Astro Content Collections (MDX)        | built-in                       | Blog, case studies                          |
| Scroll Animation | GSAP (full suite)                      | 3.15.x                         | ScrollTrigger, SplitText, MorphSVG, DrawSVG |
| Smooth Scroll    | Lenis                                  | 1.3.x                          | Butter-smooth scroll                        |
| Page Transitions | Astro ClientRouter                     | built-in                       | SPA-like morphing                           |
| 3D               | Three.js + R3F + Drei + postprocessing | 0.184.x                        | WebGL hero scene                            |
| 3D (alt)         | Spline                                 | embed                          | Embeddable 3D                               |
| Vector Motion    | Rive                                   | latest                         | State-driven interactive animations         |
| Looping Motion   | Lottie                                 | latest                         | Lightweight micro-animations                |
| Contact Form     | Resend                                 | latest                         | Transactional email via API route           |
| Validation       | Zod + React Hook Form                  | latest                         | Schema validation                           |
| TypeScript       | Strict mode                            | 5.x                            | End-to-end typing                           |
| Deploy           | Vercel                                 | free                           | Hosting + edge                              |
| Analytics        | Vercel Analytics                       | free                           | Event tracking                              |
| Repo             | GitHub                                 | SHAHID8142/shahidstudios2026Q3 | Version control                             |

## Directory Structure

```
/
├── .sps/                          # SPS project docs
│   ├── profile.md                 # User preferences + project rules
│   ├── architecture.md            # This file
│   ├── mistakes.md                # Error log
│   └── handoff.md                 # Context resume
├── .github/
│   └── workflows/ci.yml           # CI pipeline
├── public/
│   ├── images/
│   │   ├── logos/                  # Brand logo variants (SVG + PNG)
│   │   ├── founder/               # Founder headshot
│   │   └── icons/                 # Tech stack SVG icons (real, downloaded)
│   ├── lottie/                    # Lottie JSON files
│   └── favicon.svg
├── sanity/
│   ├── schema.ts                  # Schema index
│   └── schemas/                   # Individual schema files
├── src/
│   ├── components/
│   │   ├── ui/                    # Button, Card, Badge, Input, etc.
│   │   ├── layout/                # Navigation, Footer, MobileMenu
│   │   ├── sections/              # Hero, About, Services, Portfolio, etc.
│   │   ├── 3d/                    # HeroScene.tsx, SplineEmbed.tsx
│   │   └── animations/            # RivePlayer.tsx, LottiePlayer.tsx
│   ├── content/
│   │   ├── config.ts              # Content collection schemas
│   │   ├── blog/                  # MDX blog posts
│   │   └── case-studies/          # MDX case studies
│   ├── hooks/                     # useScrollPosition, useInView, etc.
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Root (head, fonts, Lenis, ClientRouter)
│   │   ├── BlogLayout.astro       # Blog post layout
│   │   └── CaseStudyLayout.astro  # Case study layout
│   ├── lib/
│   │   ├── lenis.ts               # Lenis + GSAP integration
│   │   ├── sanity.ts              # Sanity client config
│   │   ├── resend.ts              # Resend email config
│   │   └── animations.ts          # GSAP utility presets
│   ├── pages/
│   │   ├── index.astro            # Home (all sections)
│   │   ├── about.astro            # Extended about
│   │   ├── contact.astro          # Dedicated contact
│   │   ├── work/
│   │   │   ├── index.astro        # Portfolio grid
│   │   │   └── [slug].astro       # Project detail
│   │   ├── case-studies/
│   │   │   ├── index.astro        # Case study listing
│   │   │   └── [slug].astro       # Case study detail
│   │   ├── blog/
│   │   │   ├── index.astro        # Blog listing
│   │   │   └── [slug].astro       # Blog post
│   │   ├── studio/
│   │   │   └── [...catchall].astro # Sanity Studio (embedded)
│   │   └── api/
│   │       └── contact.ts         # Resend API endpoint
│   ├── styles/
│   │   └── global.css             # Tailwind v4 @theme tokens + base
│   ├── types/
│   │   └── index.ts               # Shared TypeScript interfaces
│   ├── utils/
│   │   ├── cn.ts                  # Class merge utility
│   │   └── formatDate.ts          # Date formatting
│   └── constants/
│       ├── copy.ts                # ALL user-facing strings (i18n ready)
│       ├── navigation.ts          # Nav links
│       └── social.ts              # Social media + contact links
├── astro.config.mjs
├── tsconfig.json
├── package.json
├── .env.example
└── .gitignore
```

## Design Tokens

### Colors

```
bg-dark:          #0A0A0A
bg-dark-elevated: #141414
bg-dark-surface:  #1A1A1A
bg-light:         #F5F2EB
bg-light-elevated:#FFFFFF
bg-light-surface: #EDE9E0
accent:           #E1FC06
accent-hover:     #C8E005
accent-muted:     rgba(225, 252, 6, 0.15)
accent-glow:      rgba(225, 252, 6, 0.4)
text-on-accent:   #0A0A0A
```

### Typography

- Display: Clash Display (Fontshare CDN, weights 200-700)
- Body: Satoshi (Fontshare CDN, weights 300-900)
- Mono: JetBrains Mono (system)

### Fluid Scale

- display-xl: clamp(3.5rem, 8vw, 8rem)
- display-lg: clamp(2.5rem, 6vw, 5.5rem)
- display-md: clamp(2rem, 4vw, 3.5rem)
- heading-lg: clamp(1.75rem, 3vw, 2.5rem)

### Breakpoints

- Mobile: 320px
- Tablet: 768px
- Desktop: 1280px
- Large: 1440px

## Content Architecture

### Sanity Schemas

- `project` — title, slug, category, thumbnail, images, description, tech, links
- `service` — title, description, icon, order
- `testimonial` — name, role, company, quote, avatar
- `clientLogo` — name, logo image, url
- `faq` — question, answer, order
- `pricing` — tier name, price, features[], highlighted, cta
- `siteSettings` — availability status, availability text

### Content Collections (MDX)

- `blog` — title, description, date, tags[], category, coverImage, draft
- `case-studies` — title, client, category, date, coverImage, challenge, process, outcome, tech[]

## Home Page Sections (13 total)

1. Hero — Full viewport, 3D scene, name, tagline, availability badge, CTAs
2. Trusted By — Infinite scroll client logos
3. About — Split layout, photo + bio + stats
4. Services — Card grid with hover effects
5. Portfolio — Filterable grid → /work/[slug]
6. Skills — Visual tech stack (real SVG icons)
7. Pricing — 3-tier cards
8. Testimonials — Carousel/cards
9. FAQ — Accordion
10. Resume — Timeline + downloadable PDF
11. Blog Preview — Latest 3 posts → /blog
12. Contact — Form (Resend) + WhatsApp CTA + social
13. Footer — Brand, nav, contact, newsletter

## Animation Strategy

| System               | Scope                                               |
| -------------------- | --------------------------------------------------- |
| GSAP + ScrollTrigger | Global scroll-triggered reveals, parallax, pinning  |
| GSAP SplitText       | Heading character/word reveals                      |
| GSAP MorphSVG        | Logo morphing, shape transitions                    |
| GSAP DrawSVG         | Line art drawing animations                         |
| Lenis                | Smooth momentum scrolling                           |
| Astro ClientRouter   | Page morphing between routes                        |
| Rive                 | Interactive service icons, hover states             |
| Lottie               | Loading states, decorative micro-animations         |
| R3F/Three.js         | 3D hero scene (floating geometrics, mouse-reactive) |

## Deployment

- **Host:** Vercel (free tier)
- **Build:** `astro build` → static output
- **DNS:** Hostinger subdomain CNAME → Vercel
- **Env vars:** Sanity project ID/dataset, Resend API key
- **Repo:** github.com/SHAHID8142/shahidstudios2026Q3
