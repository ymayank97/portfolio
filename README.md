## Welcome to My Portfolio

Hello! I'm Mayank, a passionate developer with a knack for creating innovative solutions. This portfolio showcases some of my best work and projects.

## Contact

Feel free to reach out to me via [sde.mayankyadav@gmail.com](mailto:sde.mayankyadav@gmail.com) or connect with me on [LinkedIn](https://linkedin.com/in/mayank-yadav97).

Thank you for visiting my portfolio!

### Development

```bash
npm ci
npm run dev
```

Open the local URL printed by Vite, including the `/portfolio/` path.

Portfolio content and links live in `src/data/portfolio.ts`, including work history, projects, skills, education, and awards.

### Update the resume

Replace `public/resume.pdf` with the new PDF to keep the existing resume URL.

To use an externally hosted resume, change `profile.resume` in `src/data/portfolio.ts`:

```ts
resume: 'https://your-public-resume-url',
```

The header and footer use this same setting. Rebuild and publish after changing either the PDF or the URL.

### How the site works

`src/render.ts` generates the full page as HTML during development and build. `src/index.css` controls the design; `src/main.ts` adds navigation highlights, keyboard shortcuts, email copying, and the footer clock.

The content, links, and work details work without JavaScript. There are no runtime dependencies. A small WebP portrait and one locally hosted variable font keep downloads small.

### Validation and deployment

```bash
npm run lint
npm run typecheck
npm test
```

Tests build the site and check that the HTML contains the portfolio content, section links work, the local PDF is valid, and assets stay within size budgets.

The production files are generated in `dist/`. `npm run preview` serves this build locally. The Vite base path is `/portfolio/`; use `npm run build -- --base=/` if hosting at a domain root.

Pushing source changes updates the GitHub repository. Publishing the website is a separate step: deploy `dist/` through your GitHub Pages configuration, or run `npm run deploy` for the repository configured as `origin`.
