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
// Dossier plat, un PDF par ligne (eleve + prof), sans les .tex/.log/.aux/figures
// de travail qui polluent chaque sous-dossier d'ouvrage. Sert a retrouver le
// livrable a envoyer a l'imprimeur ou a mettre en ligne sans fouiller.
const LIVRABLES = path.join(SORTIE, 'PDF');

/* Chemin absolu, barres obliques normalisees (pdflatex les accepte sous
   Windows, pas les antislashs). null si le fichier n'existe pas encore —
   un ouvrage sans illustration retombe sur l'aplat ardoise de platUn(). */
function imagePath(relatif) {
  const p = path.join(RACINE, relatif);
  return fs.existsSync(p) ? p.replace(/\\/g, '/') : null;
}
const LOGO_ICONE = imagePath('images/manuels/logo-icone.png');
const QR_CODE = imagePath('images/manuels/qr-sparklearning.png');
// Meme illustration pour les cinq ouvrages "college" (le livre complet et ses
// quatre variantes par niveau) : c'est la meme matiere et la meme collection,
// seul le sous-titre les distingue. Decision utilisateur du 2026-08-17 —
// voir docs/manuels/cahier-des-charges-college.md.
const IMAGE_COLLEGE_MATHS = imagePath('images/manuels/fond-college-maths.jpg');

/* Les deux mascottes, une par collection : Sparky le renard sur les
   mathematiques, Lumen le loup sur la physique-chimie. Les deux jeux
   partagent la meme grille (1024x1024, appui bas a ~120 px), ce qui permet a
   platUn() de les caler avec une seule formule. Les poses sont nommees a
   l'identique de part et d'autre — « encourage » n'existe que chez Sparky et
   n'est donc pas utilise en couverture. */
function jeuMascotte(base) {
  const poses = ['sparky.png', 'sparky-reflechit.png', 'sparky-felicite.png'];
  const jeu = {};
  for (const p of poses) {
    const f = imagePath(base + p);
    if (f) jeu[p] = f;
  }
  return Object.keys(jeu).length ? jeu : null;
}
const MASCOTTE_SPARKY = jeuMascotte('images/mascotte/');
const MASCOTTE_LUMEN = jeuMascotte('tiktok/.travail/lumen/sprites/');

const NIVEAUX = {
  '6e': 'Sixième', '5e': 'Cinquième', '4e': 'Quatrième', '3e': 'Troisième',
  'lycee-2nde': 'Seconde', 'lycee-1re': 'Première', 'lycee-tle': 'Terminale',
  'si-2nde': 'Seconde', 'si-1re': 'Première', 'si-tle': 'Terminale',
  'physique-4e': 'Quatrième', 'physique-3e': 'Troisième',
  'physique-2nde': 'Seconde', 'physique-1re': 'Première', 'physique-tle': 'Terminale',
  'bts-prep': 'Remise à niveau', 'bts': 'BTS', 'physique-bts': 'BTS',
  'si-bts': 'BTS', 'fed-bts': 'BTS FED'
};

const OUVRAGES = {
  'college-maths': { titre: 'Mathématiques', sousTitre: 'Collège', collection: 'Collection Mathématiques',
    dossiers: ['6e', '5e', '4e', '3e'], niveaux: 'Sixième • Cinquième • Quatrième • Troisième',
    // « Tout le programme » : meme allegation que la page de copyright, meme
    // correction — il manque « Fonctions affines et lineaires » (3e).
    accroche: 'Cours, méthodes et exercices, de la sixième à la troisième.',
    imageCouverture: IMAGE_COLLEGE_MATHS },
  'college-maths-6e': { titre: 'Mathématiques', sousTitre: 'Sixième', collection: 'Collection Mathématiques',
    dossiers: ['6e'], niveaux: 'Sixième',
    accroche: 'Cours, méthodes et exercices de sixième.',
    imageCouverture: IMAGE_COLLEGE_MATHS },
  'college-maths-5e': { titre: 'Mathématiques', sousTitre: 'Cinquième', collection: 'Collection Mathématiques',
    dossiers: ['5e'], niveaux: 'Cinquième',
    accroche: 'Cours, méthodes et exercices de cinquième.',
    imageCouverture: IMAGE_COLLEGE_MATHS },
  'college-maths-4e': { titre: 'Mathématiques', sousTitre: 'Quatrième', collection: 'Collection Mathématiques',
    dossiers: ['4e'], niveaux: 'Quatrième',
    accroche: 'Cours, méthodes et exercices de quatrième.',
    imageCouverture: IMAGE_COLLEGE_MATHS },
  'college-maths-3e': { titre: 'Mathématiques', sousTitre: 'Troisième', collection: 'Collection Mathématiques',
    dossiers: ['3e'], niveaux: 'Troisième',
    accroche: 'Cours, méthodes et exercices de troisième.',
    imageCouverture: IMAGE_COLLEGE_MATHS },
  'lycee-maths': { titre: 'Mathématiques', sousTitre: 'Lycée', collection: 'Collection Mathématiques',
    dossiers: ['lycee-2nde', 'lycee-1re', 'lycee-tle'], niveaux: 'Seconde • Première • Terminale',
    accroche: 'Tout le programme de la seconde à la terminale.' },
  'lycee-maths-2nde': { titre: 'Mathématiques', sousTitre: 'Seconde', collection: 'Collection Mathématiques',
    dossiers: ['lycee-2nde'], niveaux: 'Seconde',
    accroche: 'Cours, méthodes et exercices de seconde.' },
  'lycee-maths-1re': { titre: 'Mathématiques', sousTitre: 'Première', collection: 'Collection Mathématiques',
    dossiers: ['lycee-1re'], niveaux: 'Première',
    accroche: 'Cours, méthodes et exercices de première.' },
  'lycee-maths-tle': { titre: 'Mathématiques', sousTitre: 'Terminale', collection: 'Collection Mathématiques',
    dossiers: ['lycee-tle'], niveaux: 'Terminale',
    accroche: 'Cours, méthodes et exercices de terminale.' },
  'lycee-si': { titre: 'Sciences de l\'ingénieur', sousTitre: 'Lycée', collection: 'Collection Sciences de l\'ingénieur',
    dossiers: ['si-2nde', 'si-1re', 'si-tle'], niveaux: 'Seconde • Première • Terminale',
    accroche: 'Le programme de sciences de l\'ingénieur au lycée.' },
  'bts-maths': { titre: 'Mathématiques', sousTitre: 'BTS', collection: 'Collection Mathématiques',
    dossiers: ['bts-prep', 'bts'], niveaux: 'Remise à niveau • Programme BTS',
    accroche: 'De la remise à niveau au programme complet de BTS.' },
  'bts-maths-prep': { titre: 'Mathématiques', sousTitre: 'Remise à niveau', collection: 'Collection Mathématiques',
    dossiers: ['bts-prep'], niveaux: 'Remise à niveau',
    accroche: 'Cours, méthodes et exercices de remise à niveau.' },
  'college-physique': { titre: 'Physique-Chimie', sousTitre: 'Collège', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-4e', 'physique-3e'], niveaux: 'Quatrième • Troisième',
    accroche: 'Cours, méthodes et exercices de quatrième et troisième.' },
  'college-physique-4e': { titre: 'Physique-Chimie', sousTitre: 'Quatrième', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-4e'], niveaux: 'Quatrième',
    accroche: 'Cours, méthodes et exercices de quatrième.' },
  'college-physique-3e': { titre: 'Physique-Chimie', sousTitre: 'Troisième', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-3e'], niveaux: 'Troisième',
    accroche: 'Cours, méthodes et exercices de troisième.' },
  'lycee-physique': { titre: 'Physique-Chimie', sousTitre: 'Lycée', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-2nde', 'physique-1re', 'physique-tle'], niveaux: 'Seconde • Première • Terminale',
    accroche: 'Tout le programme de physique-chimie de la seconde à la terminale.' },
  'lycee-physique-2nde': { titre: 'Physique-Chimie', sousTitre: 'Seconde', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-2nde'], niveaux: 'Seconde',
    accroche: 'Cours, méthodes et exercices de seconde.' },
  'lycee-physique-1re': { titre: 'Physique-Chimie', sousTitre: 'Première', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-1re'], niveaux: 'Première',
    accroche: 'Cours, méthodes et exercices de première.' },
  'lycee-physique-tle': { titre: 'Physique-Chimie', sousTitre: 'Terminale', collection: 'Collection Physique-Chimie',
    dossiers: ['physique-tle'], niveaux: 'Terminale',
    accroche: 'Cours, méthodes et exercices de terminale.' },
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
  let secTotal = 0, secBloquees = 0;
  for (const v of Object.values(figures)) {
    for (const s of (v.secondaires || [])) {
      secTotal++;
      if (!figureUtilisable(s)) secBloquees++;
    }
  }
  console.log('  ' + (Object.keys(figures).length - bloquees.length) + ' figures retenues, ' +
              bloquees.length + ' bloquees' +
              (secTotal ? ' (+ ' + (secTotal - secBloquees) + ' schemas secondaires retenus, ' +
               secBloquees + ' bloques — hors garde-fou de publication)' : ''));

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
    avantPropos: AVANT_PROPOS.replace('{N}', charges.length),
    exercicesVisibles: 3, logoIcone: LOGO_ICONE, qrCode: QR_CODE,
    mascotteSparky: MASCOTTE_SPARKY, mascotteLumen: MASCOTTE_LUMEN
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
    // DEUX passes, non negociable : « remember picture » ne resout les ancres
    // « current page » qu'au second passage. Avec une seule passe, le plat
    // s'effondrait a l'origine et sortait une page quasi blanche — neuf
    // jaquettes sur dix-neuf etaient dans cet etat (audit du 2026-08-28), les
    // autres n'etant correctes que parce qu'un .aux d'une execution
    // precedente trainait dans le dossier. Le build n'etait pas deterministe.
    const rCouv = compiler(dossier, 'couverture-imprimeur', 2);
    // Un PDF vide pese moins de 40 ko : garde-fou, parce qu'une couverture
    // blanche ne provoque aucune erreur LaTeX et passait donc inapercue.
    const pCouv = path.join(dossier, 'couverture-imprimeur.pdf');
    if (rCouv.erreurs.length) {
      console.log('  ATTENTION couverture imprimeur : ' + rCouv.erreurs[0]);
    } else if (fs.existsSync(pCouv) && fs.statSync(pCouv).size < 40000) {
      console.log('  ATTENTION couverture imprimeur : PDF suspect ('
        + Math.round(fs.statSync(pCouv).size / 1024) + ' ko), page probablement vide');
    }
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
        ? figures[c.mod.id].provenance : 'a retracer',
      figuresSecondaires: ((figures[c.mod.id] && figures[c.mod.id].secondaires) || [])
        .map(s => s.provenance || 'a retracer')
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
    // Un livrable bloque n'est jamais copie : le dossier "PDF" ne doit
    // contenir que des editions publiables, jamais un brouillon en cours.
    fs.mkdirSync(LIVRABLES, { recursive: true });
    const libelle = config.titre + ' ' + config.sousTitre +
      (prof ? ' - Édition professeur' : ' - Édition élève');
    fs.copyFileSync(path.join(dossier, nom + '.pdf'), path.join(LIVRABLES, libelle + '.pdf'));
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
