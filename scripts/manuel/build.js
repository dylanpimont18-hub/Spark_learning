/* =========================================================
   Spark Learning – scripts/manuel/build.js
   Assemble un ouvrage complet : extraction, figures, chapitres,
   maquette, compilation, couverture separee.

   Deux passes de gouttiere : on compile une premiere fois pour
   connaitre la pagination, on en deduit la marge interieure exigee
   par l'imprimeur, puis on recompile.

   Usage :
     node scripts/manuel/build.js college-maths
     node scripts/manuel/build.js college-maths --prof
     node scripts/manuel/build.js --liste
   ========================================================= */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { chargerModule, RACINE } = require('./extract.js');
const { preparerFigures, figureUtilisable } = require('./figures.js');
const { composerChapitre } = require('./chapitre.js');
const O = require('./ouvrage.js');
const { nonMappes, definirOrigine } = require('./latex.js');

const PDFLATEX = process.env.PDFLATEX || 'C:/Program Files/MiKTeX/miktex/bin/x64/pdflatex.exe';
const MAKEINDEX = process.env.MAKEINDEX || 'C:/Program Files/MiKTeX/miktex/bin/x64/makeindex.exe';
const SORTIE = path.join(RACINE, 'Manuel scolaire');

const NIVEAUX = {
  '6e': 'Sixième', '5e': 'Cinquième', '4e': 'Quatrième', '3e': 'Troisième',
  'lycee-2nde': 'Seconde', 'lycee-1re': 'Première', 'lycee-tle': 'Terminale',
  'si-2nde': 'Seconde', 'si-1re': 'Première', 'si-tle': 'Terminale',
  'bts-prep': 'Remise à niveau', 'bts': 'BTS', 'physique-bts': 'BTS',
  'si-bts': 'BTS', 'fed-bts': 'BTS FED'
};

const OUVRAGES = {
  'college-maths': { titre: 'Mathématiques', sousTitre: 'Collège', collection: 'Collection Mathématiques',
    dossiers: ['6e', '5e', '4e', '3e'], niveaux: 'Sixième • Cinquième • Quatrième • Troisième',
    accroche: 'Tout le programme de la sixième à la troisième.' },
  'lycee-maths': { titre: 'Mathématiques', sousTitre: 'Lycée', collection: 'Collection Mathématiques',
    dossiers: ['lycee-2nde', 'lycee-1re', 'lycee-tle'], niveaux: 'Seconde • Première • Terminale',
    accroche: 'Tout le programme de la seconde à la terminale.' },
  'lycee-si': { titre: 'Sciences de l\'ingénieur', sousTitre: 'Lycée', collection: 'Collection Sciences de l\'ingénieur',
    dossiers: ['si-2nde', 'si-1re', 'si-tle'], niveaux: 'Seconde • Première • Terminale',
    accroche: 'Le programme de sciences de l\'ingénieur au lycée.' },
  'bts-maths': { titre: 'Mathématiques', sousTitre: 'BTS', collection: 'Collection Mathématiques',
    dossiers: ['bts-prep', 'bts'], niveaux: 'Remise à niveau • Programme BTS',
    accroche: 'De la remise à niveau au programme complet de BTS.' },
  'bts-physique': { titre: 'Physique-Chimie', sousTitre: 'BTS', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-bts'], niveaux: 'Programme BTS',
    accroche: 'Le programme de physique-chimie en BTS.' },
  'bts-si': { titre: 'Sciences de l\'ingénieur', sousTitre: 'BTS', collection: 'Collection Sciences de l\'ingénieur',
    dossiers: ['si-bts'], niveaux: 'Programme BTS',
    accroche: 'Le programme de sciences de l\'ingénieur en BTS.' },
  'bts-fed': { titre: 'Fluides, Énergies, Domotique', sousTitre: 'BTS FED', collection: 'Collection Génie climatique',
    dossiers: ['fed-bts'], niveaux: 'Programme BTS FED',
    accroche: 'Le référentiel BTS Fluides, Énergies, Domotique.' }
};

const AVANT_PROPOS = `Ce manuel rassemble l'ensemble du programme en {N} chapitres indépendants.\\\\[2mm]

Il a été conçu autour d'une idée simple : on ne comprend pas une notion parce qu'on l'a
lue, mais parce qu'on a vu \\emph{d'où elle vient} et \\emph{à quoi elle sert}. Chaque
chapitre s'ouvre donc sur une question concrète avant d'introduire le moindre symbole,
et chaque méthode est décomposée en étapes que l'on peut suivre une par une.\\\\[2mm]

Les exercices ne sont pas des applications mécaniques. Ils replacent chaque notion dans
une situation réelle --- un chantier, un plan à l'échelle, une mesure impossible à faire
directement --- parce que c'est là que les mathématiques prennent leur sens.\\\\[2mm]

Enfin, chaque chapitre signale l'erreur que les élèves commettent le plus souvent. Savoir
où l'on risque de trébucher vaut souvent mieux qu'une règle de plus.\\\\[4mm]

\\noindent\\textit{Bon travail.}`;

/* Ordre canonique des modules : celui de js/loader.js, pas l'ordre alphabetique. */
function modulesDeLOuvrage(cle) {
  const conf = OUVRAGES[cle];
  const src = fs.readFileSync(path.join(RACINE, 'js/loader.js'), 'utf8');
  const m = /const DATA_FILES\s*=\s*(\{[\s\S]*?\n\};)/.exec(src);
  const DATA_FILES = eval('(' + m[1].slice(0, -1) + ')');
  const tous = [].concat(...Object.values(DATA_FILES));
  const vus = new Set();
  const retenus = [];
  for (const dossier of conf.dossiers) {
    for (const f of tous) {
      if (vus.has(f)) continue;
      if (new RegExp('js/data/' + dossier + '/').test(f)) { vus.add(f); retenus.push({ fichier: f, dossier }); }
    }
  }
  return retenus;
}

/* Le logo n'entre dans la maquette que s'il existe en PNG detoure. Les deux
   JPEG du depot (images/Logo_blanc.jpeg, images/Logo_noir.jpeg) portent un
   fond opaque — blanc pour l'un, noir pour l'autre — et poseraient une tache
   rectangulaire sur l'aplat ardoise de la couverture. Deposer le PNG suffit
   a le faire apparaitre : aucune retouche de maquette a prevoir.
   Le chemin est relatif au dossier de compilation, « Manuel scolaire/<cle>/ ». */
function logoDisponible() {
  return fs.existsSync(path.join(RACINE, 'images/logo-spark.png'))
    ? '../../images/logo-spark.png' : null;
}

function compter(pdf) {
  if (!fs.existsSync(pdf)) return 0;
  const s = fs.readFileSync(pdf, 'latin1');
  return (s.match(/\/Type\s*\/Page[^s]/g) || []).length;
}

function compiler(dossier, nom, passes) {
  for (let i = 0; i < passes; i++) {
    cp.spawnSync(PDFLATEX, ['-interaction=nonstopmode', nom + '.tex'],
      { cwd: dossier, encoding: 'utf8', timeout: 900000 });
    if (i === 0) cp.spawnSync(MAKEINDEX, [nom + '.idx'], { cwd: dossier, encoding: 'utf8' });
  }
  const log = path.join(dossier, nom + '.log');
  const erreurs = fs.existsSync(log) ? (fs.readFileSync(log, 'utf8').match(/^! .*$/gm) || []) : [];
  return { erreurs, pages: compter(path.join(dossier, nom + '.pdf')) };
}

async function construire(cle, options) {
  const opts = options || {};
  const conf = OUVRAGES[cle];
  if (!conf) throw new Error('Ouvrage inconnu : ' + cle);
  const prof = !!opts.professeur;
  const graine = opts.graine || 20260816;
  const tirages = prof ? 6 : 3;         // le prof recoit une banque supplementaire

  const dossier = path.join(SORTIE, cle);
  fs.mkdirSync(dossier, { recursive: true });

  const entrees = modulesDeLOuvrage(cle);
  console.log(cle + ' : ' + entrees.length + ' modules');

  nonMappes.clear();
  const charges = entrees.map((e, rang) => {
    const r = chargerModule(e.fichier, { graine: graine + rang, tirages });
    if (!r.validation.ok) throw new Error(e.fichier + ' : ' + r.validation.erreurs.join(' | '));
    return { mod: r.module, exercices: r.exercices, dossier: e.dossier };
  });

  const figures = preparerFigures(charges.map(c => c.mod));
  const bloquees = Object.entries(figures).filter(([, v]) => !figureUtilisable(v));
  console.log('  ' + (Object.keys(figures).length - bloquees.length) + ' figures retenues, ' +
              bloquees.length + ' bloquees');

  // Numeroter d'abord : la page d'ouverture d'une partie annonce ses chapitres,
  // elle a donc besoin de connaitre leurs numeros avant d'etre composee.
  charges.forEach((item, i) => { item.numero = i + 1; });
  const parties = [];
  for (const item of charges) {
    let p = parties[parties.length - 1];
    if (!p || p.dossier !== item.dossier) {
      p = { dossier: item.dossier, items: [] };
      parties.push(p);
    }
    p.items.push(item);
  }

  const corps = [];
  const chapitres = [];
  for (const partie of parties) {
    corps.push(O.ouverturePartie(NIVEAUX[partie.dossier] || partie.dossier,
      partie.items.map(i => ({ numero: i.numero, titre: i.mod.title }))));
    for (const item of partie.items) {
      definirOrigine(item.mod.id);
      corps.push(composerChapitre(item.mod, item.exercices,
        { professeur: prof, figure: figures[item.mod.id], exercicesVisibles: 3 }));
      chapitres.push({ mod: item.mod, numero: item.numero, exercices: item.exercices });
    }
  }

  const config = Object.assign({}, conf, {
    professeur: prof, nbChapitres: charges.length, annee: new Date().getFullYear(),
    mention: 'Cours, méthodes, exercices et évaluations',
    illustration: opts.illustration || 'couverture.png',
    logo: opts.logo !== undefined ? opts.logo : logoDisponible(),
    avantPropos: AVANT_PROPOS.replace('{N}', charges.length),
    exercicesVisibles: 3
  });

  const nom = cle + (prof ? '-prof' : '-eleve');
  const ecrire = (gouttiere) => {
    config.gouttiere = gouttiere;
    fs.writeFileSync(path.join(dossier, nom + '.tex'),
      O.preambule(config) + O.couverture(config) + O.liminaires(config) +
      corps.join('\n\n\\cleardoublepage\n\n') + '\n\n' + O.finOuvrage(chapitres, config) + '\n', 'utf8');
  };

  // Passe 1 : gouttiere provisoire, pour connaitre la pagination
  ecrire(20);
  let r = compiler(dossier, nom, 2);
  const gouttiere = O.gouttierePourPages(r.pages);
  console.log('  passe 1 : ' + r.pages + ' pages -> gouttiere ' + gouttiere + ' mm');

  // Passe 2 : gouttiere definitive
  ecrire(gouttiere);
  r = compiler(dossier, nom, 3);
  console.log('  passe 2 : ' + r.pages + ' pages, ' + r.erreurs.length + ' erreur(s) LaTeX');

  // Couverture separee, dos calcule sur la pagination definitive
  if (!prof) {
    fs.writeFileSync(path.join(dossier, 'couverture-imprimeur.tex'),
      O.couvertureSeparee(Object.assign({}, config, { pages: r.pages })), 'utf8');
    compiler(dossier, 'couverture-imprimeur', 1);
    console.log('  couverture imprimeur : dos ' + O.largeurDosMm(r.pages) + ' mm');
  }

  /* Garde-fous : ce qui interdit de publier. */
  const blocages = [];
  if (nonMappes.size) blocages.push('caracteres Unicode non traduits : ' + [...nonMappes.keys()].join(' '));
  if (bloquees.length) blocages.push(bloquees.length + ' figure(s) sans provenance : ' +
    bloquees.map(([id]) => id).join(', '));
  if (r.erreurs.length) blocages.push(r.erreurs.length + ' erreur(s) LaTeX : ' + r.erreurs[0]);
  if (!r.pages) blocages.push('aucun PDF produit');

  const etat = {
    ouvrage: cle, edition: prof ? 'prof' : 'eleve', graine,
    pages: r.pages, gouttiere, dosMm: O.largeurDosMm(r.pages),
    chapitres: chapitres.map(c => ({
      id: c.mod.id, titre: c.mod.title, numero: c.numero,
      figure: figures[c.mod.id] && figures[c.mod.id].provenance
        ? figures[c.mod.id].provenance : 'a retracer'
    })),
    blocages, date: new Date().toISOString().slice(0, 10)
  };
  fs.writeFileSync(path.join(dossier, 'etat-' + (prof ? 'prof' : 'eleve') + '.json'),
    JSON.stringify(etat, null, 2), 'utf8');

  if (blocages.length) {
    console.log('  PUBLICATION BLOQUEE :');
    blocages.forEach(b => console.log('    - ' + b));
  } else {
    console.log('  OK ' + path.join(dossier, nom + '.pdf'));
  }
  return etat;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.includes('--liste') || !args.length) {
    console.log('Ouvrages disponibles :');
    for (const [k, v] of Object.entries(OUVRAGES)) {
      console.log('  ' + k.padEnd(16) + v.titre + ' — ' + v.sousTitre);
    }
    process.exit(0);
  }
  const cle = args[0];
  construire(cle, { professeur: args.includes('--prof') })
    .then(e => process.exit(e.blocages.length ? 1 : 0))
    .catch(e => { console.error('ECHEC : ' + e.message); process.exit(1); });
}

module.exports = { construire, OUVRAGES, modulesDeLOuvrage, SORTIE };
