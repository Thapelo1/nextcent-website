# Nextcent website

A Next.js App Router starter for the Nextcent website.

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

## End-to-end tests

Install the Playwright Chromium browser once with `npx playwright install chromium`, then run `npm run test:e2e`. The test command builds the app, starts it on port 4173, and exercises the home page and its working navigation links. In CI, install dependencies and Chromium before running `npm run test:e2e`.

## Deployment

Pull requests targeting `main` run unit tests, a production build, and Playwright browser tests. With GitHub auto-merge enabled on a pull request, it is squash-merged after a required human approval and passing checks. Merges to `main` build a static site and deploy it to GitHub Pages.
