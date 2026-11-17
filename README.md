# Sri Sai Electronics

A one-page static marketing site for a neighbourhood electronics shop: sales, repair and
installation services, location details, opening hours, curated customer feedback and
call / WhatsApp / directions actions. No backend required. The whole page can be switched
between English and Tamil from the header.

**Important:** the phone number (`+91 95002 60590`), address (JSK Complex, Mela Veedhi,
Tirukkoyilur 605757), opening hours and Google Maps link are the supplied real details.
Services, ratings, testimonials and the nine images under `public/images/` are still
placeholders. Replace them before publishing.

## Stack

- Vite 8 + React 19
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Motion 14 (`motion/react`, `LazyMotion` + `domAnimation`)
- Lucide icons
- Self-hosted Inter, Space Grotesk and Noto Sans Tamil variable fonts

## Commands

```bash
npm install
npm run dev      # local dev server
npm run lint     # oxlint
npm run build    # static output in dist/
npm run preview  # serve the production build
```

## Editing content

Content is split into two files with the same shape:

- `src/data/site.en.js` — English
- `src/data/site.ta.js` — Tamil

Edit both when changing shop details so the language toggle stays in sync. The content model
contains:

- `shop` — name, phone, WhatsApp number, email, address, map embed URL, directions URL, rating
  (the directions link points to the shop's Google Maps place)
- `services` — icon name (must exist in `src/lib/icons.js`), title, description, note
- `brands`, `stats`, `promises`, `hours`, `faq`, `nav`
- `shopPhotos` — three “Inside the shop” cards: `image`, `tag`, `title`, optional `alt`
- `servicePhotos` — six “Service work” cards: `image`, `tag`, `title`, optional `alt`
- `testimonials` — name, area, service, rating and quote
- `ui` — every interface string, meta title/description and the WhatsApp message

Phone links use `shop.phoneHref`, WhatsApp uses `shop.whatsappUrl`, so update both when the
number changes. Keep `index.html` structured data and its static English meta tags in sync
with the real shop.

## Logo assets

The supplied source files are kept in `assets/logos/` (outside the build output):

- `brand-source.png` — white-background logo with the “Speakers & Audio Effects” tagline
- `brand-dark-source.png` — navy-background variant
- `favicon-source.png` — compact Sri Sai Electronics logo
- `logo-set.mp4` — animated logo set

Optimised versions used by the site live in `public/logos/`:

- `brand.png` / `brand-dark.png` — transparent header and footer marks (light/dark themes)
- `favicon.png` — browser icon
- `og-image.png` — social sharing image

The header automatically swaps between the light and dark brand marks. To replace the
logo, put a new white-background source in `assets/logos/` and regenerate the files in
`public/logos/` at the same sizes.

## Replacing the dummy photos

The placeholder images are 1200 × 900 (4:3):

- `public/images/shop/storefront.svg`
- `public/images/shop/service-desk.svg`
- `public/images/shop/parts-wall.svg`
- `public/images/services/tv-repair.svg`
- `public/images/services/cctv-install.svg`
- `public/images/services/inverter-battery.svg`
- `public/images/services/home-theatre.svg`
- `public/images/services/appliance-visit.svg`
- `public/images/services/switchboard.svg`

Drop real 4:3 photos into those folders and either overwrite the SVGs or point
`shopPhotos[].image` / `servicePhotos[].image` at the new filenames. Keep image paths rooted
at `/images/...`. Use compressed JPG/WebP files and update each card’s `alt` text in both
language files.

## Language toggle

`src/i18n/language.js` stores the selected language in `localStorage` under `sai-lang`,
updates `<html lang>`, the document title and the meta description, and exposes
`useContent()`. A small inline script in `index.html` applies the saved language before
paint. Tamil typography and the Noto Sans Tamil fallback live in `src/index.css`.

## Theming

Colour tokens live at the top of `src/index.css` under `:root` and `.dark`. The theme toggle
persists to `localStorage`; a small inline script in `index.html` applies the saved theme
before paint to avoid a flash. `prefers-color-scheme` is used on the first visit.

## Motion guidelines used

- Scroll reveals: opacity + 14px rise, ~500ms, strong ease-out, `once: true`, 40–70ms stagger
- Menu and overlays: opacity + small translate, 200ms, symmetrical exit
- Hover/press: CSS transitions on named properties only, gated to fine pointers
- `prefers-reduced-motion` removes movement while keeping short opacity fades
- No `transition: all`, no `scale(0)`, no `ease-in` on UI

## Deploying

`npm run build` produces a fully static `dist/` folder — deploy it to Netlify, Vercel,
Cloudflare Pages or GitHub Pages. For GitHub Pages under a subpath, set `base` in
`vite.config.js` to the repository name before building, and update the absolute URLs in
`index.html` once the final domain is known.
