/* =========================================================
   Spark Learning – tiktok/tools/export-modules.js
   Exporte les modules de js/data/ en JSON pour le pipeline
   Python de generation de videos TikTok.

   Les modules sont des scripts globaux (window.MODULES.push).
   On ne reimplemente pas leur chargement : scripts/manuel/
   extract.js le fait deja, avec un Math.random ensemence pour
   que les exercices generes soient reproductibles.

   Usage : node tiktok/tools/export-modules.js
           -> ecrit tiktok/catalogue.json
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { chargerModule, RACINE } = require('../../scripts/manuel/extract.js');

const SORTIE = path.join(RACINE, 'tiktok', 'catalogue.json');

/* Le cours embarque un SVG complet sous cours.diagram : inutile pour
   ecrire un script parle, et il ferait tripler le poids du catalogue. */
const CHAMPS_COURS = ['intro', 'definitions', 'method', 'example', 'formulas', 'recap', 'piege'];

/* Ordre canonique : celui de js/loader.js. Meme lecture que
   scripts/manuel/build.js, mais sur la totalite des matieres. */
function fichiersDeLoader() {
  const src = fs.readFileSync(path.join(RACINE, 'js/loader.js'), 'utf8');
  const m = /const DATA_FILES\s*=\s*(\{[\s\S]*?\n\};)/.exec(src);
  if (!m) throw new Error('DATA_FILES introuvable dans js/loader.js');
  const DATA_FILES = eval('(' + m[1].slice(0, -1) + ')');
  return [...new Set([].concat(...Object.values(DATA_FILES)))];
}

/* La tranche pilote la persona : voix d'enfant sur college/lycee,
   voix adulte sur BTS (public de post-bac). */
function tranche(dossier) {
  if (/bts/.test(dossier)) return 'bts';
  if (/lycee|(^|-)(2nde|1re|tle)$/.test(dossier)) return 'lycee';
  return 'college';
}

function entree(fichier, brut) {
  const m = brut.module;
  const dossier = path.dirname(fichier).split('/').pop();
  const cours = {};
  for (const c of CHAMPS_COURS) {
    if (m.cours && m.cours[c] !== undefined) cours[c] = m.cours[c];
  }
  return {
    id: m.id,
    titre: m.title,
    sousTitre: m.subtitle,
    matiere: m.subject,
    niveau: m.level,
    dossier,
    tranche: tranche(dossier),
    motsCles: m.keywords || [],
    url: `/module/${m.id}/cours`,
    fichier,
    cours,
    quiz: m.quiz || [],
    exerciceExemple: brut.exercices[0] || null
  };
}

function catalogue() {
  const modules = [];
  const echecs = [];
  fichiersDeLoader().forEach((fichier, rang) => {
    let brut;
    try {
      brut = chargerModule(fichier, { graine: 20260826 + rang, tirages: 1 });
    } catch (e) {
      /* Un generate() qui casse ne doit pas priver le catalogue du cours. */
      try {
        brut = chargerModule(fichier, { graine: 20260826 + rang, tirages: 0 });
      } catch (e2) {
        echecs.push({ fichier, erreur: e2.message });
        return;
      }
    }
    modules.push(entree(fichier, brut));
  });
  catalogue.echecs = echecs;
  return modules;
}

function ecrire() {
  const modules = catalogue();
  fs.writeFileSync(SORTIE, JSON.stringify({ genere: new Date().toISOString(), modules }, null, 0), 'utf8');
  const poids = (fs.statSync(SORTIE).size / 1048576).toFixed(1);
  const parTranche = modules.reduce((a, m) => (a[m.tranche] = (a[m.tranche] || 0) + 1, a), {});
  console.log(`${modules.length} modules exportes (${poids} Mo) ->  tiktok/catalogue.json`);
  console.log('  par tranche :', JSON.stringify(parTranche));
  for (const e of catalogue.echecs) console.log('  ECHEC ' + e.fichier + ' : ' + e.erreur);
}

module.exports = { catalogue, tranche, SORTIE };

if (require.main === module) ecrire();
