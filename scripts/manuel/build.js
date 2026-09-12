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
     node scripts/manuel/build.js college-maths --prototype 6e-fractions
     node scripts/manuel/build.js --liste
   ========================================================= */

const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { chargerModule, RACINE } = require('./extract.js');
const { preparerFigures, figureUtilisable } = require('./figures.js');
const { composerChapitre, EXERCICES_VISIBLES } = require('./chapitre.js');
const O = require('./ouvrage.js');
const P = require('./prof.js');
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

// L'avant-propos vivait ici ; il est passe dans ouvrage.js le 2026-09-12,
// avec le reste du texte editorial du livre, pour se decliner par edition.
// Il y promettait au passage que « chaque chapitre s'ouvre sur une question
// concrete avant d'introduire le moindre symbole » — ce que le corpus ne tient
// pas : neuf « Decouvrir » de sixieme sur dix ouvrent sur une definition.

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
  // --prototype <module> : l'edition professeur reduite a UN chapitre, avec
  // le front-matter complet (dont la progression de tout l'ouvrage) et les
  // annexes, en une seule passe et sans couverture. Sert a valider la
  // maquette professeur v2 sur PDF avant de rediger les 48 fiches.
  const prototype = opts.prototype || null;
  const prof = !!opts.professeur || !!prototype;
  const graine = opts.graine || 20260816;
  /* 18 tirages dans LES DEUX editions depuis le 2026-09-12. L'eleve en recoit
     desormais EXERCICES_VISIBLES (12) au lieu de 3 : a 3, celui qui travaille
     seul etait a sec apres trois questions. Le professeur recoit les memes 12,
     corriges, plus les 6 derniers en banque supplementaire — sa reserve pour
     les devoirs, la remediation et les groupes avances.
     18 reste le plafond ou TOUS les modules du college tirent encore des
     enonces distincts, deduplication comprise (extract.js). Tirer moins cote
     eleve rendrait les deux editions non superposables : l'exercice 7 du livre
     de l'eleve ne serait plus l'exercice 7 du livre du professeur. */
  const tirages = 18;

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

  // Couche professeur v2 : la fiche de chaque module, quand elle existe,
  // validee contre le module reel et le referentiel de la matiere.
  const referentiel = P.referentielDe(conf.collection);
  /* La fiche est chargee dans LES DEUX editions depuis le 2026-09-12 : elle
     porte les PREREQUIS, qui sont un fait de progression et non un contenu
     reserve a l'enseignant — le renvoi « ce chapitre s'appuie sur le chapitre
     6 » s'imprime aussi dans le livre de l'eleve (chapitre.js, defaut 19).
     Seul le RESTE de la fiche (erreurs frequentes, competences, place dans le
     programme) demeure reserve a l'edition professeur, qui est la seule a le
     composer, et la seule a valider la fiche entiere. */
  for (const item of charges) {
    item.prof = P.chargerProf(item.mod.id, item.dossier);
  }
  if (prof) {
    const reproches = [];
    for (const item of charges) {
      if (item.prof) reproches.push(...P.validerProf(item.prof, item.mod, referentiel, item.exercices));
    }
    if (reproches.length) throw new Error('Fiches professeur refusées :\n  - ' + reproches.join('\n  - '));
    console.log('  ' + charges.filter(c => c.prof).length + ' fiche(s) professeur sur ' + charges.length);
  }

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
               secBloquees + ' bloques)' : ''));

  // Numeroter d'abord : la page d'ouverture d'une partie annonce ses chapitres,
  // elle a donc besoin de connaitre leurs numeros avant d'etre composee.
  charges.forEach((item, i) => { item.numero = i + 1; });

  /* Les prerequis renvoient a d'AUTRES chapitres : ils ne se valident donc
     qu'ici, une fois les numeros connus. Valides dans les deux editions
     depuis le 2026-09-12, puisque le renvoi d'ouverture s'imprime desormais
     aussi pour l'eleve : un renvoi vers un chapitre absent serait pire dans
     son livre que dans celui du professeur, qui saurait le corriger. */
  const pb = P.validerPrerequis(charges);
  if (pb.length) throw new Error('Prérequis refusés :\n  - ' + pb.join('\n  - '));

  // Renvoi d'ouverture de chapitre : les numeros de la fiche, habilles du
  // titre reel du chapitre vise. La mise en forme appartient a chapitre.js.
  const titres = new Map(charges.map(it => [it.numero, it.mod.title]));
  for (const item of charges) {
    const nums = item.prof && Array.isArray(item.prof.prerequis) ? item.prof.prerequis : [];
    item.prerequis = nums.map(n => ({ numero: n, titre: titres.get(n) || '' }));
  }

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
    const items = prototype ? partie.items.filter(i => i.mod.id === prototype) : partie.items;
    if (!items.length) continue;
    corps.push(O.ouverturePartie(NIVEAUX[partie.dossier] || partie.dossier,
      items.map(i => ({ numero: i.numero, titre: i.mod.title }))));
    for (const item of items) {
      definirOrigine(item.mod.id);
      corps.push(composerChapitre(item.mod, item.exercices,
        { professeur: prof, figure: figures[item.mod.id],
          exercicesVisibles: EXERCICES_VISIBLES,
          // Renvoi d'ouverture : imprime dans les deux editions.
          prerequis: item.prerequis,
          // La fiche complete ne sert qu'a l'edition professeur.
          prof: prof ? (item.prof || null) : null, referentiel }));
      chapitres.push({ mod: item.mod, numero: item.numero, exercices: item.exercices });
    }
  }
  if (prototype && !chapitres.length) throw new Error('Module inconnu dans cet ouvrage : ' + prototype);

  // Les lignes de progression, calculees une seule fois : la page de
  // progression et la grille de suivi des notions les partagent (2026-09-12).
  const lignesProgression = prof ? P.ordonner(charges) : [];

  const config = Object.assign({}, conf, {
    professeur: prof, nbChapitres: charges.length, annee: new Date().getFullYear(),
    mention: 'Cours, méthodes, exercices et évaluations',
    // Pas d'`avantPropos` ici : le texte est passe dans ouvrage.js le
    // 2026-09-12, avec le reste du texte editorial (mode d'emploi, back-matter,
    // quatrieme de couverture), parce qu'il doit se decliner par edition —
    // l'edition du professeur ne s'adresse pas a l'eleve. Le champ reste
    // accepte par ouvrage.js : un ouvrage qui voudrait son propre avant-propos
    // le pose ici et il l'emporte.
    // Meme valeur qu'au chapitre : la page « Réponses aux exercices »
    // (ouvrage.js) doit lister exactement les exercices imprimes, pas trois.
    exercicesVisibles: EXERCICES_VISIBLES, logoIcone: LOGO_ICONE, qrCode: QR_CODE,
    mascotteSparky: MASCOTTE_SPARKY, mascotteLumen: MASCOTTE_LUMEN,
    /* Couche professeur v2 : progression de TOUT l'ouvrage (meme en
       prototype, c'est elle qu'on veut juger), suivi des notions, et grille
       de suivi de classe en annexe.
       `ordonner` est appele UNE fois : la progression et le suivi des notions
       lisent les memes lignes, dans le meme ordre conseille. Deux appels
       auraient pu diverger le jour ou l'un des deux filtre ses lignes. */
    progression: prof ? P.progressionLatex(lignesProgression, NIVEAUX) : '',
    // Le suivi des notions suit immediatement la progression : meme ordre,
    // meme paysage, l'un pilote l'annee et l'autre la coche (2026-09-12).
    suiviNotions: prof ? P.suiviNotionsLatex(lignesProgression, NIVEAUX) : '',
    annexeProf: prof ? P.grilleSuiviClasse(referentiel) : ''
  });

  const nom = cle + (prof ? '-prof' : '-eleve') + (prototype ? '-prototype' : '');
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

  if (prototype) {
    // Un prototype se juge a l'ecran : ni gouttiere definitive, ni
    // couverture, ni copie dans les livrables.
    console.log('  prototype : ' + r.pages + ' pages, ' + r.erreurs.length + ' erreur(s) LaTeX' +
      (r.erreurs.length ? ' — ' + r.erreurs[0] : ''));
    console.log('  ' + path.join(dossier, nom + '.pdf'));
    return { ouvrage: cle, edition: 'prof-prototype', prototype, pages: r.pages,
      blocages: r.erreurs.length ? [r.erreurs.length + ' erreur(s) LaTeX : ' + r.erreurs[0]] : [],
      pdf: path.join(dossier, nom + '.pdf') };
  }

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
  // Les schemas SECONDAIRES entrent au garde-fou le 2026-09-12. Ils en etaient
  // sortis tant qu'ils n'existaient que chez quelques modules BTS ; depuis que
  // les 10 chapitres de sixieme en portent 3 chacun, ils sont TROIS FOIS plus
  // nombreux que les figures principales. Un secondaire sans provenance serait
  // donc l'angle mort le plus probable du controle — et il passait en silence,
  // la ligne de log le disait elle-meme (« hors garde-fou de publication »).
  // Meme exigence pour tous : une figure entre dans un livre vendu avec sa
  // provenance, ou elle n'y entre pas.
  if (secBloquees) blocages.push(secBloquees + ' schema(s) secondaire(s) sans provenance');
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
  const iProto = args.indexOf('--prototype');
  construire(cle, { professeur: args.includes('--prof'),
    prototype: iProto >= 0 ? args[iProto + 1] : null })
    .then(e => process.exit(e.blocages.length ? 1 : 0))
    .catch(e => { console.error('ECHEC : ' + e.message); process.exit(1); });
}

module.exports = { construire, OUVRAGES, modulesDeLOuvrage, SORTIE };
