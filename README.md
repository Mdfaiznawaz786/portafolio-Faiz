# Mohammed Faiz Nawaz — Portfolio

The original portfolio design is retained: its header, dark mode, particle background, sections, and colors. Content comes from the supplied résumé.

## Develop

Requires Node.js 22.12+.

```sh
npm ci --legacy-peer-deps
npm start
```

## Build for GitHub Pages

```sh
npm run build
```

The build writes to `docs/` for GitHub Pages. Publish the `master` branch's `/docs` folder. The configured base path is `/portafolio-Faiz/`.

Edit `src/resumeContent.js` for experience and projects, `src/language/` for translated text, and `src/cv/resume.pdf` for the résumé download. Project cards have no demo links because the supplied résumé did not provide verified URLs.

Run `npm audit --audit-level=moderate` after dependency changes. The build and audit also run in GitHub Actions.
