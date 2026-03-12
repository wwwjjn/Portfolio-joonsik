# Academic Portfolio Starter

Single-page bilingual `Next.js` portfolio template for `CV`, `papers`, and `selected projects`, prepared for `GitHub Pages` deployment.

## Stack

- `Next.js` App Router
- `TypeScript`
- `Tailwind CSS`
- Static export for `GitHub Pages`
- `GitHub Actions` deployment

## Local development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Edit your content

Replace placeholder content in:

- `src/data/portfolio.ts`

This file holds:

- Korean and English copy
- CV entries
- Paper entries and button links
- Project cards
- Contact links

## GitHub Pages deployment

1. Push this project to a GitHub repository.
2. In GitHub, enable `Pages` and set the source to `GitHub Actions`.
3. Push to `main`.

The workflow builds a static export and deploys it automatically.

For repository-based Pages URLs, the app reads `GITHUB_REPOSITORY` during CI and sets the correct `basePath` automatically.

## Useful commands

```bash
npm run lint
npm run build
```
