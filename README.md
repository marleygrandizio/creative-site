# Frost

Faithful implementation of the supplied Frost landing-page template using React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Development

Use Node.js 24 and pnpm 11.25.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm build
pnpm preview
```

The preview is served at `/creative-site/`.

## Deployment

Repository: https://github.com/marleygrandizio/creative-site

Website: https://marleygrandizio.github.io/creative-site/

In repository Settings → Pages → Build and deployment, set Source to GitHub Actions. Pushes to `main` run lint, build, and deploy. To retry manually, open Actions → Deploy to GitHub Pages → Run workflow → main.

## Template fidelity

The supplied component code is preserved. The video and favicon paths account for the GitHub Pages project base path. The original video is included in `public/hero.mp4`.

The template's form only prevents submission; it does not store email addresses. Navigation anchors point to placeholder sections. The fixed navigation has overlapping links on narrow screens. These supplied behaviors are preserved deliberately rather than adding functionality or changing the design.
