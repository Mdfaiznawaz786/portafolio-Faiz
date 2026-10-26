# Mohammed Faiz Nawaz — Portfolio

Personal portfolio based on the supplied résumé. The site presents experience, projects, skills, education, certifications, and a downloadable résumé.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci
npm run dev
```

## Build and publish

```sh
npm run build
```

The build writes to `docs/` for GitHub Pages. In the repository's Pages settings, publish from the `master` branch and `/docs` folder. Commit both source changes and the generated `docs/` files. The configured base path is `/portafolio-Faiz/`.

## Content

Edit `src/content.js` for experience, projects, skills, and profile links. Edit `src/App.jsx` for the page structure. Replace `public/resume.pdf` when updating the résumé, then rebuild.

Project cards deliberately have no repository or demo links because the supplied résumé did not provide verified URLs. Add links only after confirming they belong to the project.

## Security

Run `npm audit --audit-level=moderate` after dependency changes. See [SECURITY.md](SECURITY.md) for reporting information.
The GitHub Actions workflow repeats the audit and build on pushes and pull requests. Production HTML includes a restrictive Content Security Policy; the development server remains compatible with hot reload.
