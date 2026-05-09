# Streetsville Chiropractic

Marketing site for **Streetsville Chiropractic** in Mississauga, Ontario — home of
the Sinclair family of chiropractors. Built on Next.js 16, React 19, Tailwind 4,
and Framer Motion. Adapted from a shared chiropractic site template.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript 5, Tailwind CSS 4, Framer Motion 12
- `lucide-react` for icons, `next/og` for OG images, JSON-LD schema in `layout.tsx`

## Where things live

| What | File |
| --- | --- |
| Clinic info (name, phone, address, doctors, social) | `src/lib/clinic.ts` |
| Services, treatments, FAQ, testimonials, hours | `src/lib/content.ts` |
| Home page | `src/app/page.tsx` |
| About / doctors page | `src/app/about/page.tsx` |
| Services page | `src/app/services/page.tsx` |
| Site metadata + JSON-LD | `src/app/layout.tsx` |
| Sitemap / robots / favicon / OG image | `src/app/{sitemap,robots,icon,opengraph-image}.tsx` |
| Header / footer / nav components | `src/components/Site*.tsx`, `FloatingNav.tsx`, `MobileMenu.tsx` |
| Logo + photos | `public/images/` |

Edit `src/lib/clinic.ts` and the rest of the site (header, footer, schema, OG)
updates automatically.

## Replacing assets

`public/images/` currently contains placeholder copies:

- `streetsville-logo.png` — clinic logo (308×89, sourced from the live site)
- `clinic-welcome.png` — generic welcome graphic, used everywhere a doctor or
  clinic photo would normally go (services, About, Instagram strip, hero
  poster). **Swap with real Streetsville Chiropractic photography when ready.**
- `favicon-streetsville.png` — favicon backup (the live `app/icon.tsx` renders a
  small `S` mark; replace if you want a true raster favicon).

## Local development

```bash
npm install
npm run dev
```

Then visit <http://localhost:3000>.

## Production build

```bash
npm run build
npm run start
```

## Deploy

Repo is configured to deploy as a standard Next.js app (e.g. Vercel). Update
`SITE_URL` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` if the
production domain is anything other than `https://streetsvillechiropractic.com`.
