# Nextcent website

A responsive Next.js App Router landing page for the Nextcent community platform.

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build.
- `npm start` serves the production build.
- `npm run test:unit` runs the unit tests.
- `npm run test:e2e` builds the app and runs its Playwright end-to-end tests against the production server.

## Frontend and components

The site uses Next.js and React with Bootstrap 5's responsive grid and custom CSS
for the Figma-based visual design. Every homepage section is a standalone
component: navigation, hero, clients, community, features, achievements,
testimonial, updates, call to action, and footer. Unit tests cover each section
and its reusable content components; Playwright checks the composed landing page,
navigation, registration link, and narrow-screen layout.

## End-to-end tests

Install the Playwright Chromium browser once with `npx playwright install chromium`, then run `npm run test:e2e`. The test command builds the app, starts it on port 4173, and exercises the full landing page and its working navigation links. In CI, install dependencies and Chromium before running `npm run test:e2e`.

## Deployment

Pull requests targeting `main` run unit tests, a production build, and Playwright browser tests. After those checks pass, the `merge-approval` environment requires a manual approval before the workflow squash-merges the pull request. The workflow then starts a GitHub Pages deployment.
