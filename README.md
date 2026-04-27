# Portfolio site for Tamara Pak (losvinka)

Static bilingual (RU/EN) portfolio website with:

- Section navigation in header
- About section
- Projects with filters
- Editorial posts section
- Certificates/recommendation cards with full-screen preview modal
- Contacts and footer

## Typography setup (Hibana + Neutral Face Bold)

The layout is configured for:

- Body text: `Hibana`
- Accent text (headings/buttons/nav): `Neutral Face Bold`

Add font files into `assets/fonts/`:

- `Hibana.woff2` (or `Hibana.woff`)
- `NeutralFace-Bold.woff2` (or `NeutralFace-Bold.woff`)

If fonts are missing, the site will use fallback fonts automatically.

## Replace placeholders

Put your real files in `assets/` and keep these names:

- `profile.svg` (or update path in `index.html`)
- `doc-editor.svg`
- `doc-hse.svg`
- `doc-supervisor.svg`
- `doc-tzh.svg`

You can also use `.jpg/.png`; if you rename, update paths in `script.js` and `index.html`.

## How to preview the layout (not code)

From repo root run:

```bash
python -m http.server 8000
```

Then open:

- `http://localhost:8000/`

## GitHub Pages

1. Push repository to GitHub
2. Open **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` (or your working branch), folder: `/ (root)`

