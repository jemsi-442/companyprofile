# CompanyProfile

Company website for **JAYDIGITAL SOLUTIONS** with both **English (`en`)** and **Swahili (`sw`)** pages.

## Overview

This website includes:

- modern web pages
- English and Swahili pages
- automatic language redirection
- mobile-friendly layout

It is designed to present:

- Business and company registration support
- Government and institutional follow-up services
- website, app, and business system services

## Language pages

Main public pages use language prefixes:

- `/en`
- `/en/about`
- `/en/services`
- `/en/contact`
- `/sw`
- `/sw/about`
- `/sw/services`
- `/sw/contact`

How it works:

- `/` automatically opens the preferred language
- `/about`, `/services`, and `/contact` also move to the preferred language version
- the visitor's language choice is remembered
- the site checks saved preference first, then browser language

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Main sections

- `app/` - site pages and layouts
- `components/` - shared sections and language content
- `public/assets/` - logo, visuals, and service images
- `middleware.js` - language redirection

## Important files

- `components/LanguageProvider.js` - English and Swahili content
- `components/i18n.js` - language route helpers
- `components/metadata.js` - page titles and descriptions by language
- `components/ClientEffects.js` - interactive page effects
- `app/[lang]/` - language-based pages for home, about, services, and contact

## Deployment notes

- Update `metadataBase` in `app/layout.js` if your production URL changes
- Update `baseUrl` in `components/metadata.js` if your production URL changes
- `app/robots.js` and `app/sitemap.js` are already included
- page titles and descriptions are prepared for both `/en/...` and `/sw/...`

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm start` - start production server

## Repository

- GitHub: `https://github.com/jemsi-442/companyprofile`
