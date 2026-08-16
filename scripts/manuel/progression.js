/* =========================================================
   Spark Learning – scripts/manuel/progression.js
   Regenere docs/manuels/PROGRESSION.md par SCAN, jamais a la main.

   Le tableau se reconstruit en comparant deux sources : les modules
   reellement presents dans js/data/ et les chapitres deja integres
   dans chaque ouvrage (manuels/<cle>/etat-eleve.json). Un module
   ajoute demain apparait donc seul en « a faire », sans que personne
   ne tienne une liste a jour.

   Usage : node scripts/manuel/progression.js
   ========================================================= */

const fs = require('fs');
const path = require('path');
const { RACINE } = require('./extract.js');
const { OUVRAGES, modulesDeLOuvrage, SORTIE } = require('./build.js');

const CIBLE = path.join(RACINE, 'docs', 'manuels', 'PROGRESSION.md');

const ETIQUETTE_FIGURE = {
  'svg-exact': 'SVG exact',
  'pgfplots': 'PGFPlots',
  'a retracer': 'à retracer'
};

function etatOuvrage(cle) {
  const f = path.join(SORTIE, cle, 'etat-eleve.json');
  if (!fs.existsSync(f)) return null;
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return null; }
}

function construireTableau() {
  const lignes = [];
  lignes.push('# Manuels — état d\'avancement');
  lignes.push('');
  lignes.push('> Fichier **régénéré par scan** (`node scripts/manuel/progression.js`).');
  lignes.push('> Ne pas éditer à la main : toute modification sera écrasée.');
  lignes.push('');

  let totalFaits = 0, totalAttendus = 0;
  const corps = [];

  for (const [cle, conf] of Object.entries(OUVRAGES)) {
    let attendus;
    try { attendus = modulesDeLOuvrage(cle); } catch (e) { attendus = []; }
    const etat = etatOuvrage(cle);
    const parId = new Map((etat ? etat.chapitres : []).map(c => [c.id, c]));

    const faits = attendus.filter(a => parId.has(path.basename(a.fichier, '.js'))).length;
    totalFaits += faits; totalAttendus += attendus.length;

    corps.push('');
    corps.push(`## ${cle} — ${conf.titre}, ${conf.sousTitre}   [${faits} / ${attendus.length}]`);
    corps.push('');
    if (etat) {
      corps.push(`Graine : \`${etat.graine}\` · ${etat.pages} pages · gouttière ${etat.gouttiere} mm · ` +
                 `dos ${etat.dosMm} mm · dernière compilation ${etat.date}`);
      if (etat.blocages && etat.blocages.length) {
        corps.push('');
        corps.push('**Publication bloquée :**');
        etat.blocages.forEach(b => corps.push('- ' + b));
      }
      corps.push('');
    } else {
      corps.push('_Jamais compilé._');
      corps.push('');
    }

    corps.push('| Module | Chapitre | Figure |');
    corps.push('|--------|:--------:|:------:|');
    for (const a of attendus) {
      const id = path.basename(a.fichier, '.js');
      const c = parId.get(id);
      const fig = c ? (ETIQUETTE_FIGURE[c.figure] || c.figure) : '—';
      corps.push(`| ${id} | ${c ? '✓' : '—'} | ${fig} |`);
    }
  }

  lignes.push(`**Total : ${totalFaits} / ${totalAttendus} chapitres intégrés.**`);
  return lignes.concat(corps).join('\n') + '\n';
}

if (require.main === module) {
  const contenu = construireTableau();
  fs.mkdirSync(path.dirname(CIBLE), { recursive: true });
  fs.writeFileSync(CIBLE, contenu, 'utf8');
  const faits = /\*\*Total : (\d+) \/ (\d+)/.exec(contenu);
  console.log('PROGRESSION.md régénéré — ' + (faits ? faits[1] + ' / ' + faits[2] : '') + ' chapitres');
}

module.exports = { construireTableau, CIBLE };
