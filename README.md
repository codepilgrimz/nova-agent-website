# Nova Agent — Website

Marketing site for [Nova Agent](../nova-agent/), a desktop AI assistant that manages email, Telegram, tasks, and reminders.

Built with **React 18** + **Vite 5** + plain CSS. No UI framework, no styling library — just a single `styles.css` with CSS variables.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3030 (falls back if the port is busy)
```

### Production build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the built site locally
```

Output size (gzipped): ~4 kB CSS, ~52 kB JS.

## Project structure

```
nova-agent-website/
├── index.html               Entry HTML — fonts, <div id="root">
├── vite.config.js           Vite + React plugin, dev-server port 3030
├── src/
│   ├── main.jsx             React mount
│   ├── App.jsx              Section composition
│   ├── styles.css           All styles (CSS variables + responsive)
│   └── components/
│       ├── Nav.jsx          Sticky top nav
│       ├── Hero.jsx         Headline, CTAs, app preview window
│       ├── Features.jsx     Numbered 11-card features grid
│       ├── Integrations.jsx Email + Telegram showcase and 9-card integrations grid
│       ├── Architecture.jsx Rust + React + Node layer diagram
│       ├── Platforms.jsx    Windows / macOS / Linux download cards
│       ├── Cta.jsx          Closing call-to-action
│       └── Footer.jsx       Links and license
└── .gitignore
```

## Page layout

Hero → Features → Integrations → Architecture → Platforms → CTA → Footer.

Each section is self-contained — drop one into a different order or remove it from `App.jsx` without touching the others.

## Customization

| What to change             | Where                                                             |
| -------------------------- | ----------------------------------------------------------------- |
| Colors, radii, fonts       | CSS variables at the top of `src/styles.css` (`:root` block)      |
| Hero copy / CTA buttons    | `src/components/Hero.jsx`                                         |
| Feature cards              | `FEATURES` array in `src/components/Features.jsx`                 |
| Integrations showcase      | `src/components/Integrations.jsx` (email/Telegram mocks + grid)   |
| Download links             | `PLATFORMS` array in `src/components/Platforms.jsx` (href="#")    |
| Nav links                  | `src/components/Nav.jsx`                                          |

### Swapping the hero preview for a real screenshot

The hero contains a CSS mock of the Nova Agent app. To replace it with a real screenshot:

1. Save the image to `public/hero-screenshot.png`.
2. In `src/components/Hero.jsx`, replace the `<div className="window">…</div>` block with:
   ```jsx
   <img src="/hero-screenshot.png" alt="Nova Agent" className="hero-screenshot" />
   ```
3. Add sizing rules to `styles.css` as needed.

## Placeholders to replace before shipping

- `github.com/` links in `Nav.jsx` and `Footer.jsx` — point at the real repo.
- `#` hrefs on the download cards in `Platforms.jsx` — point at real release assets.
- `Version 0.1.0 — now in preview` pill in `Hero.jsx` — update when you cut a release.

## Tech notes

- **No router.** The site is a single scrollable page; all nav links are in-page anchors.
- **No client fetches.** Everything is static content; build output is fully pre-rendered HTML + CSS + one JS bundle.
- **Responsive breakpoints** at `960px` and `540px`, defined at the bottom of `styles.css`.
- **Dark theme only.** If you want a light-mode toggle, add a `data-theme` attribute on `<html>` and mirror the CSS variables under `[data-theme="light"]`.

## License

MIT — same as the Nova Agent project.
