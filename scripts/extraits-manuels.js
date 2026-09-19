#!/usr/bin/env node
'use strict';

/**
 * Fabrique les pages d'apercu ("Feuilleter un extrait") des manuels, a partir
 * des PDF eux-memes.
 *
 * Pourquoi : la fiche produit n'offrait que 2 pages d'apercu (sommaire + une
 * page de methode) sur un manuel qui en compte jusqu'a 1484. Sur un PDF vendu
 * sans possibilite de feuilleter en librairie, c'est l'apercu qui repond a
 * l'objection — la FAQ de la boutique l'oppose d'ailleurs au non-remboursement.
 *
 * Le theme reconnait les pages d'apercu a leur NOM DE FICHIER : toute image
 * dont le nom contient `sommaire`, `methode` ou `extrait` entre dans la
 * liseuse, et le compteur « N pages » se met a jour seul. Il n'y a donc aucun
 * reglage a ressaisir sur 38 fiches — d'ou le nommage `-extrait-NN` ici.
 *
 * Ce qui est montre est choisi, pas pris au hasard : les pages qui prouvent le
 * differentiel de l'edition professeur (progression annuelle, suivi des
 * attendus, erreurs frequentes, corriges rediges). Montrer une page de cours
 * ordinaire ne prouverait rien qu'un acheteur ne devine deja.
 *
 * Usage :
 *   node scripts/extraits-manuels.js            # liste ce qui serait produit
 *   node scripts/extraits-manuels.js --apply    # ecrit les PNG
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const RACINE_PDF = path.join(__dirname, '..', 'Livret pedagogique');
const SORTIE = path.join(__dirname, '..', 'build', 'extraits');

// 10 pages par ouvrage : assez pour lever un doute avant 14,99 €, negligeable
// face aux 476 pages d'un manuel (2 %). Le risque de contrefacon a cette
// echelle est sans commune mesure avec le nombre de ventes qu'un apercu
// trop avare fait perdre.
const PAGES_PAR_OUVRAGE = 10;

// 160 dpi : lisible en plein ecran sur la liseuse sans peser inutilement.
const DPI = 160;

/**
 * Sections qui portent la valeur « edition professeur ». L'ordre compte :
 * c'est l'ordre de lecture de la liseuse, et on veut que la premiere page
 * montre deja quelque chose que l'edition eleve n'a pas.
 */
const SECTIONS = [
  { cle: 'progression', motif: /Progression annuelle/i },
  { cle: 'suivi', motif: /Suivi des notions/i },
  { cle: 'erreurs', motif: /Erreurs fr.quentes et rem.diation/i },
  { cle: 'corrige', motif: /Corrig.\s/i },
  { cle: 'supplementaires', motif: /.nonc.s suppl.mentaires/i },
  { cle: 'evaluation', motif: /.valuation not.e|Bar.me/i },
];

/**
 * L'avant-propos ANNONCE toutes les rubriques de l'ouvrage ; chercher le mot
 * n'importe ou dans la page y ramenait donc les six sections d'un coup, et
 * l'extrait se reduisait aux pages de garde. Une page qui OUVRE une rubrique
 * en porte le titre dans ses premieres lignes : on ne teste que ce debut.
 */
const LONGUEUR_TITRE = 200;

// Une page qui porte moins que cela est une fin de tableau ou une page de
// respiration : elle s'affiche aux trois quarts blanche dans la liseuse et
// donne l'impression d'un ouvrage aere pour rien. Mesure prise sur la fin du
// tableau de progression de la 3e (~300 caracteres), page ecartee a ce titre.
const CARACTERES_MINIMUM = 700;

function texteDePage(pdf, page) {
  try {
    return execFileSync('pdftotext', ['-f', String(page), '-l', String(page), pdf, '-'],
      { encoding: 'latin1', maxBuffer: 8 * 1024 * 1024 });
  } catch {
    return '';
  }
}

function nbPages(pdf) {
  try {
    const info = execFileSync('pdfinfo', [pdf], { encoding: 'latin1' });
    const m = info.match(/Pages:\s+(\d+)/);
    return m ? Number(m[1]) : 0;
  } catch {
    return 0;
  }
}

/**
 * Choisit les pages a extraire. On balaie le debut de l'ouvrage (ou vivent la
 * progression et le suivi) puis le premier chapitre complet, qui contient a lui
 * seul un exemplaire de chaque rubrique. Inutile d'aller plus loin : montrer
 * trois pages d'erreurs frequentes ne prouve pas plus que d'en montrer une.
 */
function choisirPages(pdf, total) {
  // Le debut de l'ouvrage porte la progression et le suivi ; les rubriques de
  // chapitre (erreurs frequentes, corriges, banque d'enonces) n'arrivent
  // qu'une fois le premier chapitre entame, bien au-dela de la page 60 sur un
  // ouvrage de cycle. On balaie donc largement, en s'arretant des que chaque
  // section a son exemplaire.
  const limite = Math.min(total, 140);
  const trouvees = new Map();

  for (let p = 1; p <= limite; p++) {
    if (trouvees.size === SECTIONS.length) break;
    const texte = texteDePage(pdf, p);
    if (!texte.trim()) continue;
    const debut = texte.slice(0, LONGUEUR_TITRE);
    for (const section of SECTIONS) {
      if (!trouvees.has(section.cle) && section.motif.test(debut)) {
        trouvees.set(section.cle, p);
      }
    }
  }

  // Une page reperee ouvre souvent une rubrique qui court sur la suivante :
  // prendre les deux donne a voir la rubrique entiere plutot que son titre.
  const pages = new Set();
  for (const p of trouvees.values()) {
    pages.add(p);
    if (p + 1 <= total) pages.add(p + 1);
  }

  // Complement : les pages de garde expliquent ce que l'edition ajoute.
  for (const p of [4, 6]) if (p <= total) pages.add(p);

  // Un ouvrage court (physique college) n'a pas assez de rubriques distinctes
  // pour remplir le quota : on prolonge alors les sections deja retenues d'une
  // page supplementaire, ce qui donne a voir la suite d'une rubrique plutot
  // qu'une page prise au hasard ailleurs dans le livre.
  const ordonnees = () => [...pages].sort((a, b) => a - b);
  for (let saut = 2; pages.size < PAGES_PAR_OUVRAGE + 4 && saut <= 6; saut++) {
    for (const p of ordonnees()) {
      if (pages.size >= PAGES_PAR_OUVRAGE + 4) break;
      if (p + saut <= total) pages.add(p + saut);
    }
  }

  // On ecarte en dernier les pages trop vides : le filtre s'applique apres la
  // selection, pour que le quota soit rempli par des pages utiles et non par
  // les blancs qu'on vient d'ecarter.
  const pleines = ordonnees().filter(p => texteDePage(pdf, p).trim().length >= CARACTERES_MINIMUM);
  return pleines.slice(0, PAGES_PAR_OUVRAGE);
}

function skuDepuisFichier(fichier) {
  const nom = path.basename(fichier, '.pdf')
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .toLowerCase();
  const matiere = nom.startsWith('mathematiques') ? 'MATH' : 'PHYS';
  const edition = nom.includes('professeur') ? 'PROF' : 'ELEVE';
  let niveau = null;
  if (nom.includes('remise a niveau')) niveau = 'PREP';
  else if (nom.includes('sixieme')) niveau = '6E';
  else if (nom.includes('cinquieme')) niveau = '5E';
  else if (nom.includes('quatrieme')) niveau = '4E';
  else if (nom.includes('troisieme')) niveau = '3E';
  else if (nom.includes('seconde')) niveau = '2NDE';
  else if (nom.includes('premiere')) niveau = '1RE';
  else if (nom.includes('terminale')) niveau = 'TLE';
  else if (nom.includes('college')) niveau = 'COLLEGE';
  else if (nom.includes('lycee')) niveau = 'LYCEE';
  else if (nom.includes('bts')) niveau = 'BTS';
  return niveau ? `${matiere}-${niveau}-${edition}` : null;
}

function cheminPdf(sku) {
  for (const dossier of fs.readdirSync(RACINE_PDF)) {
    const dir = path.join(RACINE_PDF, dossier);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const f of fs.readdirSync(dir)) {
      if (f.endsWith('.pdf') && skuDepuisFichier(f) === sku) return path.join(dir, f);
    }
  }
  return null;
}

function extraire(sku, appliquer) {
  const pdf = cheminPdf(sku);
  if (!pdf) return { sku, erreur: 'PDF introuvable' };

  const total = nbPages(pdf);
  const pages = choisirPages(pdf, total);
  if (!appliquer) return { sku, total, pages, fichiers: [] };

  fs.mkdirSync(SORTIE, { recursive: true });
  const fichiers = [];
  pages.forEach((page, i) => {
    const base = path.join(SORTIE, `${sku}-extrait-${String(i + 1).padStart(2, '0')}`);
    execFileSync('pdftoppm', ['-png', '-r', String(DPI), '-f', String(page), '-l', String(page),
      '-singlefile', pdf, base]);
    fichiers.push(base + '.png');
  });
  return { sku, total, pages, fichiers };
}

// Les sept editions professeur dont l'ecart de pages avec l'edition eleve
// depasse 50 % : les seules sur lesquelles le discours « edition professeur »
// est tenu par le contenu (voir docs/manuels/argumentaire-edition-professeur.md).
const OUVRAGES = [
  'MATH-3E-PROF', 'MATH-COLLEGE-PROF', 'MATH-2NDE-PROF', 'MATH-6E-PROF',
  'MATH-PREP-PROF', 'PHYS-4E-PROF', 'MATH-LYCEE-PROF',
];

function main() {
  const appliquer = process.argv.includes('--apply');
  console.log(appliquer ? '=== EXTRACTION ===' : '=== ESSAI A BLANC ===');
  console.log(`${PAGES_PAR_OUVRAGE} pages par ouvrage, ${DPI} dpi\n`);

  for (const sku of OUVRAGES) {
    const r = extraire(sku, appliquer);
    if (r.erreur) {
      console.log(`  ! ${sku} — ${r.erreur}`);
      continue;
    }
    console.log(`  ${sku.padEnd(20)} ${String(r.total).padStart(5)} p.  ->  pages ${r.pages.join(', ')}`);
  }

  if (!appliquer) console.log('\nRelancer avec --apply pour ecrire les PNG.');
  else console.log(`\nPNG ecrits dans ${SORTIE}`);
}

if (require.main === module) main();

module.exports = { choisirPages, skuDepuisFichier, extraire };
