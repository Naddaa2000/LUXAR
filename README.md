# LUXAR — Electric Hypercars

A luxury electric hypercar marketing site built with Next.js. Features a WebGL liquid shader background, interactive 3D hero, glassmorphic UI, and fully responsive layouts for mobile, tablet, and desktop.

**Live site:** [https://luxar-nu.vercel.app/](https://luxar-nu.vercel.app/)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, feature grid, performance specs, about preview, waitlist |
| `/about` | Company story, values, timeline |
| `/models` | Full model lineup with per-model reserve links |
| `/design` | Aerodynamics and design philosophy |
| `/fleet` | Corporate fleet pricing and contact form |
| `/reserve` | Model selector with live image swap and reservation UI |
| `/support` | Owner support guides |
| `/privacy` | Privacy policy |
| `/updates` | Product release notes |
| `/resources` | Links hub |

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Three.js** — wireframe 3D hero wheel
- **WebGL** — mouse/touch-reactive liquid background shader
- **next/font** — Sora, Hanken Grotesk, JetBrains Mono

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Deployment

Deployed on [Vercel](https://vercel.com):

**[https://luxar-nu.vercel.app/](https://luxar-nu.vercel.app/)**

To redeploy after changes:

```bash
git push
```

Vercel rebuilds automatically on push if the repo is connected.

## Project Structure

```
src/
├── app/              # Pages (App Router)
├── components/       # UI, Nav, Footer, shader, 3D hero
└── lib/              # Site config, models data, nav links
```

## License

Private project — all rights reserved.
