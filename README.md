# Nideyatech website

Marketing site for **nideyatech.com** — plain HTML/CSS/JS, no build step, deployed on
Cloudflare Pages.

```
index.html        one-page site (nav, hero, products, solutions, process, about, contact)
css/styles.css     all styling (brand tokens at the top)
js/main.js         nav scroll state, mobile menu, scroll-reveal animations
assets/            favicons + logo lockups (cropped from the brand sheet)
_headers           Cloudflare Pages cache/security headers
robots.txt / sitemap.xml
```

## Brand tokens (`css/styles.css` `:root`)

| Token | Hex | Use |
|---|---|---|
| `--indigo` | `#141E46` | Primary dark, hero/footer, headings |
| `--saffron` | `#F5A623` | Primary accent, CTAs |
| `--cyan` | `#28C4C9` | Secondary accent |
| `--ivory` | `#F7F5EF` | Page background |
| `--ink` | `#0F0F14` | Footer / deepest background |

## Local preview

No build step — just serve the folder:

```bash
cd nideyatech-website
python3 -m http.server 8080
# open http://localhost:8080
```

## Deploy — Cloudflare Pages

1. Push this repo to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** →
   **Connect to Git** → pick this repo.
3. Build settings: **Framework preset: None**, **Build command: (empty)**,
   **Build output directory: `/`**.
4. Deploy. Cloudflare gives you a `*.pages.dev` URL immediately.
5. **Custom domain:** in the Pages project → **Custom domains** → add
   `www.nideyatech.com` (and `nideyatech.com` if you want the apex to work too).
   Since the domain is already on Cloudflare DNS, this is one click — Cloudflare adds
   the DNS record itself.
6. Every push to `main` auto-deploys. Pull requests get their own preview URL.

## Before going live — fill these in

- [ ] `hello@nideyatech.com` — currently a placeholder. Set up **Cloudflare Email
      Routing** (free) to forward it to a real inbox, or swap in your real address in
      `index.html` (search for `hello@nideyatech.com`).
- [ ] LinkedIn / social links in the footer are placeholder `#` links — add real URLs
      in `index.html` (`.footer-social`).
- [ ] The "Start a project" / "Contact" buttons currently point at the footer email —
      swap in a real form (e.g. Formspree, Web3Forms) if you want submissions without
      opening an email client.
- [ ] Favicons were cropped from the brand-guide photo, so they're a bit soft at large
      sizes — swap `assets/logo/*.png` and `assets/favicon-*.png` for exports from the
      original logo file if you have one, for crisper results.
