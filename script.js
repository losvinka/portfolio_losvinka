const projects = [
  {
    title: 'SONDER',
    tags: ['брендинг', 'визуальные исследования'],
    textRu: 'Брендинг выдуманной выставки человеческих историй. Проект исследует идею: за каждым лицом — отдельный мир.',
    textEn: 'Branding for a fictional exhibition about human stories. The idea: behind every face there is a whole world.',
    links: [{ label: 'Смотреть проект', href: 'https://hsedesign.ru/project/b127dfcc965442eaaa169b2f1aab9d22' }],
  },
  {
    title: 'MeanFlow*',
    tags: ['брендинг', 'маркетинг', 'нон-скриптед'],
    textRu: 'Сервис эмоциональной персонализации: выбор эмоции или повода и перевод в осмысленный букет, символику и текст открытки.',
    textEn: 'An emotional personalization service: users pick a feeling/occasion and get a meaningful bouquet with symbolism and card text.',
    links: [
      { label: 'Этап 1', href: 'https://hsedesign.ru/project/a5ba8759f43a48789034e1950376e819' },
      { label: 'Этап 2', href: 'https://hsedesign.ru/project/d1c20372dce249128639114eee3d2918' },
      { label: 'Этап 3', href: 'https://hsedesign.ru/project/4ad801cbe5994dc8921848936a3be10d' },
    ],
  },
  {
    title: 'Визуальные интерпретации Сусанны и старцев',
    tags: ['визуальные исследования'],
    textRu: 'Исследовательский проект по анализу визуальных интерпретаций библейского сюжета о Сусанне и старцах в разные эпохи.',
    textEn: 'A visual research project focused on interpretations of the biblical story of Susanna and the Elders across centuries.',
    links: [{ label: 'Смотреть проект', href: 'https://hsedesign.ru/project/39725aae5a5d4d2cbe131673f4174495' }],
  },
];

const docs = [
  { titleRu: 'Сертификат «Я — редактор»', titleEn: 'Certificate “I am an editor”', image: 'assets/doc-editor.svg' },
  { titleRu: 'Справка НИУ ВШЭ', titleEn: 'HSE Enrollment Confirmation', image: 'assets/doc-hse.svg' },
  { titleRu: 'Рекомендательное письмо (акад. руководитель)', titleEn: 'Recommendation Letter (Academic Supervisor)', image: 'assets/doc-supervisor.svg' },
  { titleRu: 'Рекомендательное письмо (Т—Ж)', titleEn: 'Recommendation Letter (T—Zh)', image: 'assets/doc-tzh.svg' },
];

const postPhotos = {
  tj: [
    { title: 'Т—Ж пост 1', image: 'assets/posts/tj-1.svg' },
    { title: 'Т—Ж пост 2', image: 'assets/posts/tj-2.svg' },
    { title: 'Т—Ж пост 3', image: 'assets/posts/tj-3.svg' },
  ],
  cur: [
    { title: 'Кураторы Вышки 1', image: 'assets/posts/cur-1.svg' },
    { title: 'Кураторы Вышки 2', image: 'assets/posts/cur-2.svg' },
    { title: 'Кураторы Вышки 3', image: 'assets/posts/cur-3.svg' },
  ],
};

const i18n = {
  ru: {
    'nav.about': 'О себе', 'nav.projects': 'Проекты', 'nav.posts': 'Посты', 'nav.docs': 'Рекомендации', 'nav.contacts': 'Контакты',
    'hero.role': 'Редактор · Копирайтер · Креативные индустрии',
    'hero.name': 'Тамара Пак <span>(losvinka)</span>',
    'hero.text': 'Студентка 2 курса НИУ ВШЭ. Главный редактор «Кураторы Вышки». Работаю на стыке текстов, брендинга и коммуникационных форматов.',
    'about.title': 'О себе',
const i18n = {
  ru: {
    'nav.about': 'Обо мне', 'nav.projects': 'Проекты', 'nav.posts': 'Посты', 'nav.docs': 'Рекомендации', 'nav.contacts': 'Контакты',
    'hero.role': 'Редактор · Копирайтер · Креативные индустрии',
    'hero.name': 'Тамара Пак <span>(losvinka)</span>',
    'hero.text': 'Студентка 2 курса НИУ ВШЭ. Главный редактор «Кураторы Вышки». Работаю на стыке текстов, брендинга и коммуникационных форматов.',
    'about.title': 'Обо мне',
    'about.text': 'Учусь в НИУ ВШЭ на программе «Управление в креативных индустриях». Окончила школу с двумя медалями и красным аттестатом. Сейчас — главный редактор одного из самых масштабных студенческих сообществ НИУ ВШЭ «Кураторы Вышки». Хочу развиваться в издательской сфере: медиа, digital-редактура и контент-стратегии.',
    'about.s1': 'Командная работа', 'about.s2': 'Ответственность', 'about.s3': 'Адаптивность', 'about.s4': 'Многозадачность',
    'projects.title': 'Проекты', 'projects.note': 'Благодаря обучению на программе я совмещаю базу кодинга, маркетинга и ведения нон-скриптед форматов.',
    'posts.title': 'Редакторские посты', 'posts.tjTitle': 'Посты в Т—Ж',
    'posts.tjText': 'С октября по декабрь я работала над серией контентных материалов для Т—Ж: от анонсов до образовательных и вовлекающих публикаций. В фокусе — сложные темы, которые важно объяснить понятно и интересно.',
    'posts.curTitle': 'Посты в «Кураторах Вышки»',
    'posts.curText': 'Работаю в сообществе с октября 2025, а с января 2026 — главный редактор. Веду редакционные серии, образовательные форматы, благодарственные посты, рассылки и PR-кампании отборов.',
    'docs.title': 'Сертификаты и рекомендации', 'docs.text': 'Карточки открываются в полноформатном просмотре.',
    'contacts.title': 'Контакты',
  },
  en: {
    'nav.about': 'About', 'nav.projects': 'Projects', 'nav.posts': 'Posts', 'nav.docs': 'References', 'nav.contacts': 'Contacts',
    'hero.role': 'Editor · Copywriter · Creative Industries',
    'hero.name': 'Tamara Pak <span>(losvinka)</span>',
    'hero.text': '2nd-year HSE student. Editor-in-Chief at “Curators of HSE”. I work at the intersection of editorial work, branding, and communication formats.',
    'about.title': 'About me',
    'about.text': 'I study at HSE University in the “Management in Creative Industries” program. I graduated school with two medals and honors. I am currently the Editor-in-Chief of one of the largest HSE student communities, “Curators of HSE”. I want to develop in publishing, media, and digital editorial strategy.',
    'about.s1': 'Teamwork', 'about.s2': 'Responsibility', 'about.s3': 'Adaptability', 'about.s4': 'Multitasking',
    'projects.title': 'Projects', 'projects.note': 'My degree helps me combine coding basics, marketing, and non-scripted content formats.',
    'posts.title': 'Editorial Posts', 'posts.tjTitle': 'Posts for T—Zh',
    'posts.tjText': 'From October to December, I worked on a series of content pieces for T—Zh: from announcements to educational and engagement posts. The focus was making complex topics clear and engaging.',
    'posts.curTitle': 'Posts for “Curators of HSE”',
    'posts.curText': 'I joined the community in October 2025 and became Editor-in-Chief in January 2026. I lead editorial series, educational posts, appreciation campaigns, newsletters, and selection PR campaigns.',
    'docs.title': 'Certificates & Recommendations', 'docs.text': 'Cards open in a full-size preview.',
    'contacts.title': 'Contacts',
  },
};

let lang = 'ru';
let currentTag = 'all';

function renderProjects() {
  const tags = ['all', ...new Set(projects.flatMap((p) => p.tags))];
  const filters = document.getElementById('filters');
  filters.innerHTML = '';

  tags.forEach((tag) => {
    const b = document.createElement('button');
    b.textContent = tag === 'all' ? (lang === 'ru' ? 'все' : 'all') : tag;
    if (tag === currentTag) b.classList.add('active');
    b.onclick = () => {
      currentTag = tag;
      renderProjects();
    };
    filters.appendChild(b);
  });

  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  projects
    .filter((p) => currentTag === 'all' || p.tags.includes(currentTag))
    .forEach((p) => {
      const item = document.createElement('article');
      item.className = 'card project-card';
      item.innerHTML = `
        <h3>${p.title}</h3>
        <p class="meta">${p.tags.join(' · ')}</p>
        <p>${lang === 'ru' ? p.textRu : p.textEn}</p>
        <p>${p.links.map((l) => `<a href="${l.href}" target="_blank" rel="noreferrer">${l.label}</a>`).join(' · ')}</p>
      `;
      grid.appendChild(item);
    });
}

function renderDocs() {
  const grid = document.getElementById('docsGrid');
  grid.innerHTML = '';
  docs.forEach((d) => {
    const card = document.createElement('article');
    card.className = 'card doc-card';
    card.innerHTML = `<img src="${d.image}" alt="${d.titleRu}" /><h3>${lang === 'ru' ? d.titleRu : d.titleEn}</h3>`;
    card.onclick = () => openPreview(d);
    grid.appendChild(card);
  });
}

function renderPostGallery(targetId, items) {
  const root = document.getElementById(targetId);
  root.innerHTML = '';
  items.forEach((item) => {
    const btn = document.createElement('button');
    btn.innerHTML = `<img src="${item.image}" alt="${item.title}" />`;
    btn.addEventListener('click', () => openPreview({ titleRu: item.title, titleEn: item.title, image: item.image }));
    root.appendChild(btn);
  });
}

function openPreview(doc) {
  const modal = document.getElementById('previewModal');
  document.getElementById('previewImage').src = doc.image;
  document.getElementById('previewTitle').textContent = lang === 'ru' ? doc.titleRu : doc.titleEn;
  modal.showModal();
}

document.getElementById('closeModal').addEventListener('click', () => {
  document.getElementById('previewModal').close();
});

function applyNoWidows() {
  if (lang !== 'ru') return;
  const selector = 'p, li, a, h1, h2, h3, .subtitle';
  document.querySelectorAll(selector).forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/(^|\s)([А-Яа-яЁёA-Za-z]{1,2})\s+/g, '$1$2&nbsp;');
  });
}

function applyLang() {
  document.documentElement.lang = lang;
  document.title = lang === 'ru' ? 'Тамара Пак — Portfolio' : 'Tamara Pak — Portfolio';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.innerHTML = i18n[lang][el.dataset.i18n];
  });
  document.getElementById('langSwitch').textContent = lang === 'ru' ? 'EN' : 'RU';
  renderProjects();
  renderDocs();
  renderPostGallery('tjGallery', postPhotos.tj);
  renderPostGallery('curGallery', postPhotos.cur);
  applyNoWidows();
}

document.getElementById('langSwitch').addEventListener('click', () => {
  lang = lang === 'ru' ? 'en' : 'ru';
  applyLang();
});

applyLang();
