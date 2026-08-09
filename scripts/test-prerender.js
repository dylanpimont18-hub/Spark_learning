/* =========================================================
   Spark Learning – scripts/test-prerender.js
   Vérifie les fonctions pures de scripts/prerender.js
   (aucune dépendance réseau/navigateur ici).
   Lancer : node scripts/test-prerender.js
   ========================================================= */
'use strict';
const assert = require('assert');
const path = require('path');
const {
  root,
  parseArgs,
  parseSitemapXml,
  outputFileForRoute,
  isValidRender,
  routeClass,
  isZeroToleranceClass
} = require('./prerender');

// parseArgs
{
  const defaults = parseArgs([]);
  assert.strictEqual(defaults.baseUrl, 'https://sparklearning.fr');
  assert.strictEqual(defaults.sitemapFile, path.join(root, 'sitemap.xml'));

  const custom = parseArgs(['--base-url', 'https://preview.example.com/', '--sitemap-file', 'scripts/fixtures/verify-sitemap.xml']);
  assert.strictEqual(custom.baseUrl, 'https://preview.example.com', 'la barre oblique finale doit être retirée');
  assert.strictEqual(custom.sitemapFile, path.resolve('scripts/fixtures/verify-sitemap.xml'));

  assert.throws(
    () => parseArgs(['--baseurl', 'http://localhost:5177']),
    /Argument inconnu : --baseurl/,
    'une faute de frappe sur un flag ne doit pas être ignorée silencieusement (sinon on crawle la prod)'
  );
  assert.throws(
    () => parseArgs(['--base-url']),
    /Argument inconnu : --base-url/,
    'un flag connu sans sa valeur est tout aussi ambigu et doit échouer'
  );
}
console.log('OK parseArgs');

// routeClass
{
  assert.strictEqual(routeClass('/'), '/');
  assert.strictEqual(routeClass('/subjects'), '/subjects');
  assert.strictEqual(routeClass('/confidentialite'), '/confidentialite');
  assert.strictEqual(routeClass('/levels/maths'), '/levels/*');
  assert.strictEqual(routeClass('/modules/maths/1'), '/modules/*');
  assert.strictEqual(routeClass('/module/6e-fractions/cours'), '/module/*');
  assert.strictEqual(routeClass('/modules/maths/1/'), '/modules/*', 'la barre oblique finale ne change pas la classe');
}
console.log('OK routeClass');

// isZeroToleranceClass — seule '/module/*' tolère un timeout du signal de disponibilité
// (149 des 161 routes, chacune avec son propre loadPromise) ; toutes les autres classes
// (les 12 routes à forte valeur, dont '/' qui sert aussi de repli `**`) doivent faire
// échouer le rendu plutôt que d'être publiées avec un catalogue possiblement vide.
{
  assert.strictEqual(isZeroToleranceClass('/'), true);
  assert.strictEqual(isZeroToleranceClass('/subjects'), true);
  assert.strictEqual(isZeroToleranceClass('/confidentialite'), true);
  assert.strictEqual(isZeroToleranceClass('/levels/*'), true);
  assert.strictEqual(isZeroToleranceClass('/modules/*'), true);
  assert.strictEqual(
    isZeroToleranceClass('/module/*'),
    false,
    'seule la classe /module/* tolère un rendu dont le signal de disponibilité a expiré'
  );
}
console.log('OK isZeroToleranceClass');

// parseSitemapXml
{
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://sparklearning.fr/</loc></url>
  <url><loc>https://sparklearning.fr/module/6e-fractions/cours</loc></url>
  <url><loc>https://sparklearning.fr/modules/maths/1</loc></url>
</urlset>`;
  const routes = parseSitemapXml(xml);
  assert.deepStrictEqual(routes, ['/', '/module/6e-fractions/cours', '/modules/maths/1']);

  assert.throws(() => parseSitemapXml('<urlset></urlset>'), /Aucune URL/);
}
console.log('OK parseSitemapXml');

// outputFileForRoute
{
  assert.strictEqual(path.relative(root, outputFileForRoute('/')), 'index.html');
  assert.strictEqual(
    path.relative(root, outputFileForRoute('/module/6e-fractions/cours')),
    path.join('module', '6e-fractions', 'cours', 'index.html')
  );
  assert.strictEqual(
    path.relative(root, outputFileForRoute('/modules/maths/1/')),
    path.join('modules', 'maths', '1', 'index.html'),
    'une barre oblique finale ne doit pas créer de segment de dossier vide'
  );
  assert.throws(
    () => outputFileForRoute('/../../outside/x'),
    /sortir du dossier racine/,
    'une route traversante doit être rejetée'
  );
}
console.log('OK outputFileForRoute');

// isValidRender
{
  assert.strictEqual(
    isValidRender({ title: 'Spark Learning', appTextLength: 500 }, '/'),
    true,
    'la home page garde légitimement le titre générique'
  );
  assert.strictEqual(
    isValidRender({ title: 'Spark Learning', appTextLength: 500 }, '/module/6e-fractions/cours'),
    false,
    'un titre générique sur une page module = rendu manqué'
  );
  assert.strictEqual(
    isValidRender({ title: '6e — Fractions — Spark Learning', appTextLength: 40 }, '/module/6e-fractions/cours'),
    false,
    'contenu trop court malgré un bon titre'
  );
  assert.strictEqual(
    isValidRender({ title: '6e — Fractions — Spark Learning', appTextLength: 500 }, '/module/6e-fractions/cours'),
    true
  );
}
console.log('OK isValidRender');

console.log('Tous les tests scripts/test-prerender.js sont passés.');
