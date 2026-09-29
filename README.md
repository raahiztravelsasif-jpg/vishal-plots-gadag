# Vishal Park Phase 4 — GitHub Pages Website

A fast, dependency-free static landing page for Vishal Park Phase 4 in Hubballi.

## Files

- `index.html` — main landing page, SEO metadata and structured data
- `styles.css` — responsive design system
- `script.js` — mobile navigation, WhatsApp lead flow and conversion hooks
- `404.html` — GitHub Pages fallback page
- `robots.txt` — crawler rules
- `sitemap.xml` — search-engine sitemap
- `site.webmanifest` — PWA metadata
- `assets/` — local favicon and social preview artwork
- `CNAME.example` — custom-domain template

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `vishal-park-phase4`.
2. Upload every file/folder from this package to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide the Pages URL.

## Custom domain

1. Purchase your chosen domain.
2. Rename `CNAME.example` to `CNAME`.
3. Put your exact domain in the file, for example `vishalparkphase4.com`.
4. In GitHub Pages, enter the same custom domain.
5. At the domain registrar, configure the DNS records required by GitHub Pages.
6. Enable HTTPS in GitHub Pages after DNS propagation.

## Google Ads / Analytics

The site includes event hooks for calls, map clicks and WhatsApp leads.
Before launch, add your real Google tag / GA4 measurement ID in `script.js` and verify each conversion in your Google Ads account.

## WhatsApp

The current static form is configured to open WhatsApp using `+91 9945733200`.
Verify that this number is an active WhatsApp Business number before publishing ads.

## Content verification before launch

Replace or confirm any project-specific item that can change over time, especially:

- plot sizes
- price and payment terms
- exact project pin/address
- approvals / RERA information
- availability
- amenities
- developer contact information

The website intentionally avoids unverified guarantees, investment-return claims and unsupported approval claims.

## SEO

The page already includes:

- title and meta description
- canonical URL
- Open Graph metadata
- Twitter metadata
- robots.txt
- XML sitemap
- basic RealEstateListing JSON-LD
- mobile responsive layout
- fast, dependency-free CSS/JS

Update the canonical/OG/sitemap URLs if your final domain is different from `vishalparkphase4.com`.
