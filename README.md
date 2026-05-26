# lucas95santos.github.io

Personal portfolio for **Lucas Santos** — Senior Backend Engineer specializing in Node.js, TypeScript, and AWS Serverless.

**Live site:** https://lucas95santos.github.io

---

## About

A single-file static portfolio with no build step, no dependencies, and no framework. Everything — markup, styles, and JavaScript — lives in `index.html` and deploys directly to GitHub Pages.

## Features

- **Multi-language** — full content in PT-BR, EN, and ES, persisted via `localStorage`
- **Dark / Light / System theme** — cycles through all three modes, persisted across sessions
- **Typewriter animation** — rotates through role titles in the hero section
- **Scroll reveal** — sections fade in as they enter the viewport via `IntersectionObserver`
- **Responsive layout** — adapts from widescreen to mobile with a hamburger overlay menu
- **No dependencies** — zero npm packages, zero build tools, zero external JS

## Sections

| Section | Description |
|---|---|
| Hero | Name, animated role, stats bar (years / companies / technologies) |
| About | Bio text + highlight cards |
| Experience | Timeline for Afinz, Fuston Services, and Easy Delivery |
| Skills | Grouped tech tags with icons (Languages, Cloud AWS, DevOps, etc.) |
| Current Studies | Cards for Go, Java, Python, React/Next.js, AWS Practitioner |
| Education | Postgraduate (FIAP) + Bachelor's (UFMS) |
| Contact | Email, LinkedIn, GitHub, Location |

## Running locally

Open `index.html` directly in any browser, or serve it with any static file server:

## Deployment

This site is hosted on **GitHub Pages** from the `master` branch root. Every push to `master` is deployed automatically — no CI pipeline required.

> [!NOTE]
> The `assets/images/` directory holds all SVG technology icons referenced by the skills and studies sections. Make sure new icons are committed before pushing.

## Tech stack

`HTML5` · `CSS3 (custom properties, grid, flexbox)` · `Vanilla JavaScript` · `Google Fonts (Barlow Condensed, JetBrains Mono, Plus Jakarta Sans)` · `GitHub Pages`
