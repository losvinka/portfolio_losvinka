# Portfolio site for Tamara Pak (losvinka)

Static bilingual (RU/EN) portfolio website with:

- Section navigation in header
- About section
- Projects with filters
- Editorial posts section
- Certificates/recommendation cards with full-screen preview modal
- Unified full-width black contacts + footer band

## Typography setup (Hibana + optional Neutral Face)

Current setup:

- Body text: `Hibana`
- Accent is used only in section titles and header (`Neutral Face`)

Add font files into `assets/fonts/`:

- `Hibana.woff2` (or `Hibana.woff`)
- `NeutralFace-Bold.woff2` (or `NeutralFace-Bold.woff`) — optional

If files are missing, the site uses fallback fonts.

## Как добавить фотографии (пошагово)

1. Подготовь изображения в `.jpg`, `.png` или `.webp`.
2. Положи файлы в папку `assets/` и `assets/posts/`.
3. Сохрани те же имена, чтобы ничего не править в коде.

### Обязательные файлы в `assets/`

- `profile.svg` — фото профиля
- `doc-editor.svg` — сертификат редактора
- `doc-hse.svg` — справка НИУ ВШЭ
- `doc-supervisor.svg` — рекомендация от академ. руководителя
- `doc-tzh.svg` — рекомендация от Т—Ж

### Фотографии постов в `assets/posts/`

- `tj-1.svg`, `tj-2.svg`, `tj-3.svg` — блок Т—Ж
- `cur-1.svg`, `cur-2.svg`, `cur-3.svg` — блок Кураторы Вышки

> Можно использовать не `.svg`, а `.jpg/.png/.webp` — тогда просто обнови пути в `index.html`/`script.js`.

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

