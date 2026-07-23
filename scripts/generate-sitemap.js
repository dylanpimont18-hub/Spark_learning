/* =========================================================
   Spark Learning – scripts/generate-sitemap.js
   Génère sitemap.xml à partir des manifests réels de js/loader.js
   (DATA_FILES pour les paires subject/level, MODULE_INDEX pour les
   modules), sans dupliquer cette liste à la main.
   Usage : node scripts/generate-sitemap.js
   ========================================================= */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const BASE_URL = 'https://sparklearning.fr';

function extractConst(src, name) {
  const marker = `const ${name} = `;
  const start = src.indexOf(marker);
  if (start === -1) throw new Error(`${name} introuvable dans js/loader.js`);
  const objStart = start + marker.length;
  let depth = 0, end = -1;
  for (let i = objStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) { end = i + 1; break; }
    }
  }
  if (end === -1) throw new Error(`Accolade fermante de ${name} introuvable`);
  return new Function(`return (${src.slice(objStart, end)});`)();
}

const loaderSrc = fs.readFileSync(path.join(root, 'js', 'loader.js'), 'utf8');
const DATA_FILES = extractConst(loaderSrc, 'DATA_FILES');
const MODULE_INDEX = extractConst(loaderSrc, 'MODULE_INDEX');

const today = new Date().toISOString().slice(0, 10);
const urls = [];

function addUrl(loc, { lastmod = today, changefreq = 'weekly', priority = '0.5' } = {}) {
  urls.push({ loc: BASE_URL + loc, lastmod, changefreq, priority });
}

// Pages statiques
addUrl('/', { changefreq: 'weekly', priority: '1.0' });
addUrl('/subjects', { priority: '0.8' });
addUrl('/confidentialite', { changefreq: 'yearly', priority: '0.3' });

// Matières/niveaux réellement peuplés (déduits des clés "subject-level" de DATA_FILES)
const subjectsSeen = new Set();
Object.keys(DATA_FILES).forEach(key => {
  if (!DATA_FILES[key] || DATA_FILES[key].length === 0) return;
  const [subject, level] = key.split('-');
  if (!subjectsSeen.has(subject)) {
    subjectsSeen.add(subject);
    addUrl(`/levels/${subject}`, { priority: '0.8' });
  }
  addUrl(`/modules/${subject}/${level}`, { priority: '0.8' });
});

// Une page par module (onglet "cours", canonique — les autres onglets sont interactifs, pas du contenu distinct à indexer)
Object.keys(MODULE_INDEX).forEach(moduleId => {
  const groupKey = MODULE_INDEX[moduleId];
  const files = DATA_FILES[groupKey] || [];
  const file = files.find(f => f.endsWith(`/${moduleId}.js`));
  let lastmod = today;
  if (file) {
    const filePath = path.join(root, file);
    if (fs.existsSync(filePath)) {
      lastmod = fs.statSync(filePath).mtime.toISOString().slice(0, 10);
    }
  }
  addUrl(`/module/${moduleId}/cours`, { lastmod, changefreq: 'monthly', priority: '0.6' });
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u =>
    `  <url>\n` +
    `    <loc>${u.loc}</loc>\n` +
    `    <lastmod>${u.lastmod}</lastmod>\n` +
    `    <changefreq>${u.changefreq}</changefreq>\n` +
    `    <priority>${u.priority}</priority>\n` +
    `  </url>`
  ).join('\n') +
  `\n</urlset>\n`;

fs.writeFileSync(path.join(root, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml généré : ${urls.length} URLs.`);
