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
- Contacts and footer

## Typography setup (Hibana + Neutral Face Bold)

The layout is configured for:

- Body text: `Hibana`
- Accent text (headings/buttons/nav): `Neutral Face Bold`

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

## GitHub Pages (чтобы изменения точно появились)

В репозитории уже добавлен workflow `.github/workflows/pages.yml`, который деплоит сайт на GitHub Pages при каждом push в `main`.

### Что сделать у себя в GitHub

1. Открой репозиторий → **Settings → Pages**.
2. В разделе **Build and deployment** выбери **Source: GitHub Actions**.
3. Убедись, что основной branch называется `main`.

### Как отправить изменения

```bash
git add .
git commit -m "update portfolio"
git push origin main
```

### Если "ничего не изменилось" на GitHub

- Проверь, что push ушёл именно в `main`.
- Проверь вкладку **Actions**: workflow `Deploy static portfolio to GitHub Pages` должен быть зелёным.
- После успешного деплоя обнови сайт с hard refresh (`Ctrl+F5` / `Cmd+Shift+R`).
## GitHub Pages

1. Push repository to GitHub
2. Open **Settings → Pages**
3. Source: **Deploy from a branch**
4. Branch: `main` (or your working branch), folder: `/ (root)`

