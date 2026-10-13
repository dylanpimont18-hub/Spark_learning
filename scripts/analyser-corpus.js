/* =========================================================
   Spark Learning – scripts/analyser-corpus.js
   Mesure le corpus mathématique de js/data/ sans lecture
   manuelle : charge chaque module hors navigateur, tire
   l'exercice N fois, et écrit une ligne de mesures par module.

   Sorties (dans docs/ par défaut) :
     analyse-corpus-maths-<date>.csv  — une ligne par module, séparateur « ; »
     analyse-corpus-maths-<date>.md   — distribution par niveau, 20 modules les
                                        plus faibles, liste exhaustive des
                                        défauts détectés avec fichier:ligne
     --json <chemin>                  — mêmes données en JSON (optionnel)

   Usage :
     node scripts/analyser-corpus.js
     node scripts/analyser-corpus.js --niveaux 6e,5e --tirages 100
     node scripts/analyser-corpus.js --modules 6e-fractions,3e-thales
     node scripts/analyser-corpus.js --date 2026-10-13 --sortie docs --json out.json

   Réutilise scripts/manuel/extract.js (chargerModule, squeletteEnonce) quand il
   est présent (branche manuels-spark) ; sinon, un chargeur interne équivalent
   (contexte vm + helpers.js + figures-exercices.js, Math.random ensemencé)
   prend le relais, pour que le script tourne aussi sur main.

   SCORE COMPOSITE (/100, plus haut = mieux) — pondération, en clair :
     Fiabilité de l'exercice   30  (exceptions, réponse non finie, décimale
                                    anglaise, undefined/NaN, solution en chaîne,
                                    indice absent)
     Variété de l'exercice     15  (moules distincts 10, contextes distincts 5)
     Quiz                      20  (nombre de questions 10, corrections 5,
                                    index fixe -5, doublons -2/q, distracteurs
                                    aberrants -2/option)
     Cours                     15  (8 champs présents 8, aération 4, <strong> 3)
     Évaluation                10  (≥5 questions 4, barème+durée 2, corrections 2,
                                    compétences 2)
     Alignement lexical         5  (part moyenne du vocabulaire des questions
                                    employé par le cours)
     Langue                     5  (-1 par mot non accentué, -1 par phrase de
                                    plus de 35 mots, plancher 0)
   Les notes servent à PRIORISER les lectures manuelles, pas à juger.
   ========================================================= */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const RACINE = path.resolve(__dirname, '..');

/* ---------- Paramètres ---------------------------------------------------- */

const NIVEAUX = [
  { cle: '6e',         dossier: '6e' },
  { cle: '5e',         dossier: '5e' },
  { cle: '4e',         dossier: '4e' },
  { cle: '3e',         dossier: '3e' },
  { cle: '2nde',       dossier: 'lycee-2nde' },
  { cle: '1re',        dossier: 'lycee-1re' },
  { cle: 'tle',        dossier: 'lycee-tle' },
  { cle: 'bts-prep',   dossier: 'bts-prep' },
  { cle: 'bts',        dossier: 'bts' }
];

const CHAMPS_COURS = ['intro', 'definitions', 'method', 'example', 'formulas', 'diagram', 'piege', 'recap', 'application'];
const COMPETENCES = ['chercher', 'modéliser', 'représenter', 'raisonner', 'calculer', 'communiquer'];

/* Mots français courants en mathématiques dont l'absence d'accent est toujours
   une faute (on exclut les homographes légitimes : « cote » (cotation d'une
   figure), « ou », « a », « la », « des »). Comparés mot entier, sans casse. */
const MOTS_SANS_ACCENT = [
  'theoreme', 'theoremes', 'parallele', 'paralleles', 'creent', 'cree', 'creer',
  'egal', 'egale', 'egales', 'egaux', 'egalite', 'inegalite', 'element', 'elements',
  'symetrie', 'symetrique', 'symetriques', 'geometrie', 'geometrique', 'geometriques',
  'numerateur', 'denominateur', 'denominateurs', 'decimal', 'decimale', 'decimales', 'decimaux',
  'periode', 'periodique', 'derivee', 'derivees', 'derivable', 'integrale', 'integrales',
  'probabilite', 'probabilites', 'frequence', 'frequences', 'mediane', 'mediatrice',
  'hypotenuse', 'equation', 'equations', 'methode', 'methodes',
  'propriete', 'proprietes', 'definition', 'definitions', 'reponse', 'reponses',
  'premiere', 'premieres', 'derniere', 'dernieres', 'meme', 'memes', 'etre', 'apres', 'tres',
  'deja', 'diametre', 'perimetre', 'perimetres', 'metre', 'metres',
  'carre', 'carres', 'degre', 'degres', 'trapeze', 'reciproque', 'evenement', 'evenements',
  'echantillon', 'echantillons', 'ecart', 'ecarts', 'reduit', 'reduite', 'repere', 'reperes',
  'ordonnee', 'ordonnees', 'systeme', 'systemes', 'negatif', 'negative', 'negatifs', 'negatives',
  'superieur', 'superieure', 'inferieur', 'inferieure', 'verifie', 'verifier', 'verification',
  'arete', 'aretes', 'equilateral', 'isocele', 'etape', 'etapes', 'resoudre', 'resolution',
  'developper', 'developpement', 'equivalent', 'equivalente', 'quantite', 'quantites',
  'representer', 'representation', 'numerique', 'numeriques', 'litterale', 'litterales',
  'operation', 'operations', 'priorite', 'priorites', 'ecrire', 'ecriture', 'lineaire',
  'decroissante', 'decroissant', 'generale', 'general', 'particuliere', 'interieur', 'exterieur',
  'preciser', 'precision', 'determiner', 'deduire', 'demonstration', 'demontrer', 'enonce',
  'donnees', 'eleve', 'eleves', 'realiser', 'grace', 'hypothese', 'hypotheses', 'these',
  'experience', 'experimental', 'temperature', 'energie', 'electrique', 'reel', 'reels', 'reelle',
  'entiere', 'entieres', 'completer', 'complete', 'facon', 'different', 'differente', 'differents',
  'differentes', 'difference', 'identite', 'identites', 'elever', 'cle',
  'ete', 'etant', 'proportionnalite', 'legende', 'schema', 'schemas', 'parametre', 'parametres',
  'homothetie', 'homotheties', 'variete', 'piece', 'pieces',
  'fenetre', 'modele', 'modeles', 'modeliser', 'tache', 'taches', 'bareme', 'competence', 'competences',
  'succes', 'echec', 'acces', 'procede', 'procedes', 'ecran', 'genere', 'generer', 'generateur',
  'repartition', 'repartir', 'reperage', 'deplacement', 'deplacer',
  'elargir', 'etendre', 'etendue', 'ecrit', 'ecrits', 'ecrite', 'ecrites'
];

/* Lookarounds Unicode : sans le drapeau « u », \w ignore « è » et « mètres »
   ferait remonter un faux « tres ». */
const REGEX_SANS_ACCENT = new RegExp('(?<![\\p{L}\\p{N}_\\\\])(' + [...new Set(MOTS_SANS_ACCENT)].join('|') + ')(?![\\p{L}\\p{N}_])', 'giu');

/* Mots-outils ignorés par l'analyse lexicale. */
const MOTS_OUTILS = new Set(('le la les un une des du de d l et ou mais donc or ni car que qui quoi dont où ' +
  'ce cet cette ces mon ton son ma ta sa mes tes ses notre votre leur leurs nous vous ils elles il elle on je tu ' +
  'est sont été être avoir a ont as avons avez ai étais était étaient sera seront soit soient ' +
  'dans sur sous avec sans pour par en au aux à chez vers entre parmi depuis pendant avant après ' +
  'plus moins très trop peu beaucoup assez tout toute tous toutes autre autres même mêmes aussi encore ' +
  'si alors comme quand lorsque puis ensuite enfin donc ainsi cela ça ceci celui celle ceux celles ' +
  'quel quelle quels quelles combien peut peuvent doit doivent faut ' +
  'calcule calculer calculez calculé calculée détermine déterminer déterminez trouve trouver trouvez ' +
  'donne donner donnez écris écrire écrivez indique indiquer indiquez vrai faux réponse réponds ' +
  'ne pas non oui bien faire fait font fais exemple cas valeur valeurs nombre nombres ' +
  'résultat résultats question questions suivant suivante suivants suivantes ci dessous dessus ' +
  'chaque sinon lequel laquelle lesquels lesquelles afin tel telle tels telles ' +
  'raison raisonnement erreur erreurs impossible oublie oublié correct correcte juste environ bonne bonnes ' +
  'contient signifie affirme passe conclure vérifie vérifier seulement petite grande vraie vrais trois quatre ' +
  'temps commence répondre réponds pourquoi comment explique expliquer justifie justifier montre montrer ' +
  'possible possibles obtient obtenir utilise utiliser permet permettent propose proposer choisit choisir ' +
  'phrase phrases affirmation affirmations proposition propositions laquelle est-il est-elle peut-on ' +
  'premier première dernier dernière autour exactement toujours jamais parfois souvent ' +
  'quelle quelles quels quel combien pendant après avant ensuite ' +
  'text dfrac frac sqrt times cdot left right quad approx infty mathcal overline vec widehat ' +
  'begin end cases pmatrix bmatrix underline textbf mathrm mathbb ldots cdots dots leq geq neq pm').split(/\s+/));

/* ---------- Utilitaires texte -------------------------------------------- */

function sansHtml(t) {
  return String(t == null ? '' : t)
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');
}

function sansLatexCommandes(t) {
  return String(t).replace(/\\[a-zA-Z]+/g, ' ').replace(/[{}$^_\\]/g, ' ');
}

function mots(t) {
  const propre = sansLatexCommandes(sansHtml(t)).replace(/[^\p{L}\p{N}'’\-]+/gu, ' ').trim();
  return propre ? propre.split(/\s+/).filter(Boolean) : [];
}

function nbMots(t) { return mots(t).length; }

function normaliserMot(m) {
  return m.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/^[^a-z0-9]+|[^a-z0-9]+$/g, '');
}

function motsSignificatifs(t) {
  return mots(t)
    .map(m => m.toLowerCase().replace(/^[lLdDjJ]['’]/, ''))
    .filter(m => m.length >= 5 && !/\d/.test(m) && !MOTS_OUTILS.has(m))
    .map(normaliserMot)
    .filter(m => m.length >= 5);
}

function textesDe(valeur, exclure) {
  const out = [];
  (function parcourir(v, cle) {
    if (typeof v === 'string') { if (!exclure || !exclure.has(cle)) out.push(v); return; }
    if (Array.isArray(v)) { v.forEach(x => parcourir(x, cle)); return; }
    if (v && typeof v === 'object') for (const k of Object.keys(v)) parcourir(v[k], k);
  })(valeur, '');
  return out;
}

const SVG_ET_CODE = new Set(['svg', 'html', 'markup', 'theme', 'schema']);

function texteCours(cours) {
  return textesDe(cours, SVG_ET_CODE).join('\n');
}

function texteChamp(cours, champ) {
  if (cours[champ] === undefined || cours[champ] === null) return null;
  return textesDe(cours[champ], SVG_ET_CODE).join(' ');
}

function phrasesLongues(texte, seuil) {
  const propre = sansLatexCommandes(sansHtml(texte)).replace(/\$[^$]*\$/g, ' ');
  return propre.split(/[.!?]+(?:\s|$)/).map(p => p.trim()).filter(Boolean)
    .map(p => ({ phrase: p, mots: nbMots(p) }))
    .filter(p => p.mots > seuil);
}

function texteSvg(svg) {
  const textes = [];
  const re = /<text[^>]*>([\s\S]*?)<\/text>/gi;
  let m;
  while ((m = re.exec(String(svg || '')))) textes.push(m[1].replace(/<[^>]+>/g, ' '));
  return textes.join(' ');
}

function motsNonAccentues(texte) {
  const trouves = [];
  const re = new RegExp(REGEX_SANS_ACCENT.source, 'giu');
  let m;
  while ((m = re.exec(texte))) trouves.push(m[1]);
  return trouves;
}

/* Texte lisible (ou lu par un lecteur d'écran) porté par les SVG d'un objet :
   <title>, <desc> et <text>. */
function texteDesSvg(valeur, balises) {
  const svgs = [];
  (function parcourir(v, cle) {
    if (typeof v === 'string') { if (cle === 'svg' || /<svg[\s>]/.test(v)) svgs.push(v); return; }
    if (Array.isArray(v)) { v.forEach(x => parcourir(x, cle)); return; }
    if (v && typeof v === 'object') for (const k of Object.keys(v)) parcourir(v[k], k);
  })(valeur, '');
  const out = [];
  const re = new RegExp('<(' + (balises || 'title|desc|text') + ')\\b[^>]*>([\\s\\S]*?)<\\/\\1>', 'gi');
  for (const svg of svgs) { let m; while ((m = re.exec(svg))) out.push(m[2].replace(/<[^>]+>/g, ' ')); }
  return out.join(' ');
}

/* Blocs denses : champs textuels du cours d'au moins `seuil` mots sans aucun
   <br/><br/> (règle CLAUDE.md §2 : un saut de ligne entre chaque idée). Les
   tableaux (definitions, steps, recap, formulas) sont rendus item par item :
   chaque item est jugé seul. */
function blocsDenses(cours, seuil) {
  const blocs = [];
  (function parcourir(v, chemin) {
    if (typeof v === 'string') {
      if (SVG_ET_CODE.has(chemin.split('.').pop())) return;
      const n = nbMots(v);
      if (n >= seuil && !/<br\s*\/?>\s*<br\s*\/?>/i.test(v)) blocs.push({ chemin, mots: n, extrait: sansHtml(v).replace(/\s+/g, ' ').trim().slice(0, 70) });
      return;
    }
    if (Array.isArray(v)) { v.forEach((x, i) => parcourir(x, chemin + '[' + i + ']')); return; }
    if (v && typeof v === 'object') for (const k of Object.keys(v)) parcourir(v[k], chemin ? chemin + '.' + k : k);
  })(cours, '');
  return blocs;
}

/* Parse une option de quiz en nombre si c'en est un (gère $1{,}5$, 12,5 cm, 3\,000). */
function valeurNumerique(option) {
  let t = sansHtml(option).replace(/\\text\{[^}]*\}/g, ' ').replace(/\\,/g, '').replace(/[$\s]/g, '')
    .replace(/\{,\}/g, '.').replace(/\\times10\^\{?(-?\d+)\}?/g, 'e$1').replace(/\^\{?2\}?/, '');
  t = t.replace(/\\[a-zA-Z]+/g, '');
  const m = t.match(/^[-−]?\d+(?:[.,]\d+)?(?:e-?\d+)?/);
  if (!m) return null;
  const reste = t.slice(m[0].length);
  if (/[0-9]/.test(reste) && !/^(cm|m|km|mm|dm|g|kg|L|mL|€|%|°|h|min|s|N|J|W|V|A|Ω|rad)[²³0-9]*$/.test(reste)) return null;
  const n = parseFloat(m[0].replace('−', '-').replace(',', '.'));
  return Number.isFinite(n) ? n : null;
}

/* Ligne (1-indexée) du fichier source où apparaît un fragment du texte runtime.
   Le source porte des échappements (\\dfrac, \') absents à l'exécution : on
   cherche le plus long fragment sans antislash ni guillemet. */
function trouverLigne(lignes, texte, repli) {
  const fragments = String(texte || '').split(/[\\'"`$<>]/).map(f => f.trim()).filter(f => f.length >= 10)
    .sort((a, b) => b.length - a.length).slice(0, 4);
  for (const f of fragments) {
    const idx = lignes.findIndex(l => l.includes(f));
    if (idx >= 0) return idx + 1;
  }
  if (repli) {
    const idx = lignes.findIndex(l => l.includes(repli));
    if (idx >= 0) return idx + 1;
  }
  return 0;
}

/* ---------- Chargement des modules --------------------------------------- */

let chargerModuleExterne = null;
let squeletteEnonce = null;
try {
  const extract = require('./manuel/extract.js');
  chargerModuleExterne = extract.chargerModule;
  squeletteEnonce = extract.squeletteEnonce;
} catch (e) { /* main : pas de pipeline manuels, chargeur interne */ }

if (!squeletteEnonce) {
  squeletteEnonce = function (texte) {
    return String(texte).replace(/\d+(?:[.,{}]+\d+)*/g, '#').replace(/\s+/g, ' ').trim();
  };
}

function mulberry32(graine) {
  let a = graine >>> 0;
  return function () {
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const SOURCES_PARTAGEES = (() => {
  const helpers = fs.readFileSync(path.join(RACINE, 'js/data/helpers.js'), 'utf8');
  const figPath = path.join(RACINE, 'js/data/figures-exercices.js');
  const figures = fs.existsSync(figPath) ? fs.readFileSync(figPath, 'utf8') : '';
  return helpers + '\n' + figures + '\n';
})();

function chargerModuleInterne(cheminRelatif, graine) {
  const source = fs.readFileSync(path.join(RACINE, cheminRelatif), 'utf8');
  const MathEnsemence = Object.create(Math);
  MathEnsemence.random = mulberry32(graine);
  const bac = { window: { MODULES: [] }, console, Math: MathEnsemence };
  vm.createContext(bac);
  vm.runInContext(SOURCES_PARTAGEES + source, bac, { filename: cheminRelatif });
  const mod = bac.window.MODULES[0];
  if (!mod) throw new Error('Aucun module poussé par ' + cheminRelatif);
  return mod;
}

function chargerModule(cheminRelatif, graine) {
  if (chargerModuleExterne) {
    try { return chargerModuleExterne(cheminRelatif, { graine, tirages: 0 }).module; } catch (e) { /* repli */ }
  }
  return chargerModuleInterne(cheminRelatif, graine);
}

/* Termes techniques d'un module : mots significatifs de ses `keywords` et de
   ses <strong>. Réunis sur tout le corpus, ils forment le lexique technique
   contre lequel on lit les questions. */
function lexiqueTechniqueDe(mod, tc) {
  const termes = new Set();
  (Array.isArray(mod.keywords) ? mod.keywords : []).forEach(k => motsSignificatifs(String(k)).forEach(m => termes.add(m)));
  /* Les <strong> ne sont retenus que s'ils tiennent en un ou deux mots : au-delà
     ils soulignent une phrase et n'apportent que des mots ordinaires
     (« plusieurs », « ajouter »…) qui noyaient le signal (calibrage 2026-10-13). */
  (String(tc).match(/<strong>([\s\S]*?)<\/strong>/gi) || []).forEach(s => {
    if (nbMots(s) <= 2) motsSignificatifs(s).forEach(m => termes.add(m));
  });
  return termes;
}

function listerModules(niveauxVoulus, idsVoulus) {
  const liste = [];
  for (const niv of NIVEAUX) {
    if (niveauxVoulus && !niveauxVoulus.includes(niv.cle)) continue;
    const dossier = path.join(RACINE, 'js/data', niv.dossier);
    if (!fs.existsSync(dossier)) continue;
    for (const f of fs.readdirSync(dossier).sort()) {
      if (!f.endsWith('.js') || f === 'index.js') continue;
      liste.push({ niveau: niv.cle, chemin: `js/data/${niv.dossier}/${f}` });
    }
  }
  return liste.filter(m => !idsVoulus || idsVoulus.some(id => m.chemin.endsWith('/' + id + '.js')));
}

/* ---------- Analyse d'un module ------------------------------------------ */

function analyserModule(entree, options) {
  const { chemin, niveau } = entree;
  const tirages = options.tirages;
  const source = fs.readFileSync(path.join(RACINE, chemin), 'utf8');
  const lignes = source.split('\n');
  const defauts = [];
  const defaut = (type, ligne, detail) => defauts.push({ type, fichier: chemin, ligne, detail });

  let mod;
  try { mod = chargerModule(chemin, options.graine); }
  catch (e) {
    defaut('chargement', 1, 'module impossible à charger : ' + e.message);
    return { id: path.basename(chemin, '.js'), niveau, fichier: chemin, erreur: e.message, defauts, nb_defauts: defauts.length, score: 0,
             score_fiabilite: 0, score_variete: 0, score_quiz: 0, score_cours: 0, score_evaluation: 0, score_alignement: 0, score_langue: 0 };
  }

  const r = { id: mod.id, niveau, fichier: chemin, title: mod.title || '' };
  const cours = mod.cours || {};

  /* --- Cours --- */
  let totalMotsCours = 0;
  for (const champ of CHAMPS_COURS) {
    const t = texteChamp(cours, champ);
    r['cours_' + champ + '_present'] = t === null ? 0 : 1;
    r['cours_' + champ + '_mots'] = t === null ? 0 : nbMots(t);
    totalMotsCours += r['cours_' + champ + '_mots'];
  }
  const tc = texteCours(cours);
  r.cours_mots = totalMotsCours;
  /* Aération mesurée sur les champs narratifs (intro + piege) : les tableaux
     sont rendus item par item et n'ont pas besoin de <br/>. */
  const narratif = String(cours.intro || '') + '\n' + String(cours.piege || '');
  const nbBr = (narratif.match(/<br\s*\/?>\s*<br\s*\/?>/gi) || []).length;
  const motsNarratif = nbMots(narratif);
  r.cours_br_par_100_mots = motsNarratif ? +(nbBr * 100 / motsNarratif).toFixed(2) : 0;
  r.cours_strong = (tc.match(/<strong>/gi) || []).length;
  const denses = blocsDenses(cours, options.seuilBloc);
  r.cours_blocs_denses = denses.length;
  denses.forEach(b => defaut('bloc-dense', trouverLigne(lignes, b.extrait, b.chemin.split(/[.[]/)[0] + ':'), `cours.${b.chemin} : ${b.mots} mots sans <br/><br/> — « ${b.extrait}… »`));
  if (r.cours_strong < options.seuilStrong) {
    defaut('guidage-visuel', trouverLigne(lignes, '', 'intro:'), `${r.cours_strong} <strong> dans le cours (seuil ${options.seuilStrong})`);
  }
  for (const champ of ['intro', 'definitions', 'method', 'example', 'formulas', 'diagram', 'piege', 'recap']) {
    if (!r['cours_' + champ + '_present']) defaut('cours-champ-absent', 1, `cours.${champ} absent`);
  }

  /* --- Quiz --- */
  const quiz = Array.isArray(mod.quiz) ? mod.quiz : [];
  r.quiz_nb = quiz.length;
  r.quiz_options_min = quiz.length ? Math.min(...quiz.map(q => (q.options || []).length)) : 0;
  r.quiz_options_max = quiz.length ? Math.max(...quiz.map(q => (q.options || []).length)) : 0;
  r.quiz_sans_correction = 0;
  r.quiz_options_dupliquees = 0;
  r.quiz_distracteurs_aberrants = 0;
  let motsCorr = 0;
  const idxReponses = new Set();
  quiz.forEach((q, i) => {
    const ligneQ = trouverLigne(lignes, q.q, 'quiz:');
    if (typeof q.correction !== 'string' || nbMots(q.correction) === 0) { r.quiz_sans_correction++; defaut('quiz-sans-correction', ligneQ, `quiz[${i}] sans correction`); }
    else motsCorr += nbMots(q.correction);
    const opts = (q.options || []).map(o => sansHtml(o).replace(/\s+/g, ' ').trim().toLowerCase());
    if (new Set(opts).size !== opts.length) { r.quiz_options_dupliquees++; defaut('quiz-options-dupliquees', ligneQ, `quiz[${i}] : options identiques (${opts.join(' | ')})`); }
    idxReponses.add(q.answer);
    const vals = (q.options || []).map(valeurNumerique);
    const nbNum = vals.filter(v => v !== null).length;
    const bonne = vals[q.answer];
    const texteQ = sansHtml(q.q).toLowerCase();
    const grandeurPositive = /(longueur|aire|p[ée]rim[èe]tre|volume|distance|hauteur|rayon|diam[èe]tre|masse|prix|dur[ée]e|effectif|probabilit[ée]|fr[ée]quence|vitesse|c[ôo]t[ée]|largeur|surface)/.test(texteQ);
    const probabilite = /probabilit[ée]/.test(texteQ);
    /* Un écart d'un facteur 1000 est un VRAI distracteur dès que la question
       porte sur une échelle, une puissance de dix, une conversion ou un
       inverse (erreur de k², d'exposant, d'unité) : on ne le signale pas là. */
    const facteurLegitime = /([ée]chelle|plan au|puissance|10\^|scientifique|convert|unit[ée]|exposant|\blog|\bph\b|inverse|kwh|kcal|notation)/.test(texteQ)
      || (q.options || []).some(o => /10\^|\\times\s*10/.test(String(o)));
    if (nbNum >= 3 && bonne !== null && bonne !== undefined) {
      vals.forEach((v, j) => {
        if (j === q.answer || v === null) return;
        let motif = null;
        if (probabilite && bonne >= 0 && bonne <= 1 && (v > 1 || v < 0)) motif = 'probabilité hors [0;1]';
        else if (grandeurPositive && !/(relatif|n[ée]gatif|temp[ée]rature|altitude|solde|variation|diff[ée]rence|abscisse|ordonn[ée]e|coordonn)/.test(texteQ) && bonne > 0 && v < 0) motif = 'grandeur positive avec option négative';
        else if (!facteurLegitime && bonne !== 0 && v !== 0 && (Math.abs(v) > 1000 * Math.abs(bonne) || Math.abs(v) < Math.abs(bonne) / 1000)) motif = 'ordre de grandeur absurde (rapport > 1000)';
        if (motif) { r.quiz_distracteurs_aberrants++; defaut('quiz-distracteur-aberrant', ligneQ, `quiz[${i}] option ${j} « ${sansHtml(q.options[j]).trim()} » : ${motif} (bonne réponse ${bonne})`); }
      });
    }
  });
  r.quiz_correction_mots_moy = quiz.length ? +(motsCorr / Math.max(1, quiz.length - r.quiz_sans_correction)).toFixed(1) : 0;
  r.quiz_shuffle = mod.quizShuffle ? 1 : 0;
  r.quiz_index_fixe = (quiz.length >= 3 && idxReponses.size === 1) ? 1 : 0;
  if (r.quiz_index_fixe && !mod.quizShuffle) defaut('quiz-index-fixe', trouverLigne(lignes, '', 'quiz:'), `les ${quiz.length} bonnes réponses sont toutes à l'index ${[...idxReponses][0]} et quizShuffle est absent`);

  /* --- Exercice : N tirages --- */
  const ex = mod.exercice;
  r.ex_tirages = tirages;
  r.ex_exceptions = 0; r.ex_taux_exception = 0; r.ex_moules = 0; r.ex_contextes = 0; r.ex_answer_non_fini = 0;
  r.ex_decimale_anglaise_enonce = 0; r.ex_decimale_anglaise_aide = 0; r.ex_texte_corrompu = 0;
  r.ex_sans_hint = 0; r.ex_sans_solution = 0; r.ex_solution_type = 'absente';
  const ligneGen = trouverLigne(lignes, '', 'generate');
  if (!ex || typeof ex.generate !== 'function') {
    defaut('exercice-absent', 1, 'exercice.generate absent');
    r.ex_exceptions = tirages; r.ex_taux_exception = 100;
  } else {
    const moules = new Set(), contextes = new Set(), erreurs = new Map();
    const types = new Set();
    const exemplesDefauts = { dec: null, decAide: null, corrompu: null, nonFini: null };
    for (let i = 0; i < tirages; i++) {
      let t;
      try { t = ex.generate(); } catch (e) {
        r.ex_exceptions++;
        const msg = String(e && e.message || e).split('\n')[0];
        erreurs.set(msg, (erreurs.get(msg) || 0) + 1);
        continue;
      }
      if (!t || typeof t !== 'object') { r.ex_exceptions++; erreurs.set('retour non objet', (erreurs.get('retour non objet') || 0) + 1); continue; }
      const enonce = String(t.statement != null ? t.statement : (t.enonce != null ? t.enonce : ''));
      const sq = squeletteEnonce(sansHtml(enonce));
      moules.add(sq);
      const ctx = sq.split(/[.:;?!]/)[0].replace(/\$[^$]*\$/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
      contextes.add(ctx);
      if (typeof t.answer !== 'number' || !Number.isFinite(t.answer)) { r.ex_answer_non_fini++; exemplesDefauts.nonFini = exemplesDefauts.nonFini || `answer = ${String(t.answer)} pour « ${sansHtml(enonce).slice(0, 80)} »`; }
      const aide = [t.hint, ...(Array.isArray(t.solution) ? t.solution : [t.solution])].filter(x => x != null).map(String).join('\n');
      if (/\d\.\d/.test(enonce)) { r.ex_decimale_anglaise_enonce++; exemplesDefauts.dec = exemplesDefauts.dec || sansHtml(enonce).match(/.{0,30}\d\.\d.{0,30}/)[0]; }
      if (/\d\.\d/.test(aide)) { r.ex_decimale_anglaise_aide++; exemplesDefauts.decAide = exemplesDefauts.decAide || sansHtml(aide).match(/.{0,30}\d\.\d.{0,30}/)[0]; }
      const tout = enonce + '\n' + aide;
      if (/\b(undefined|NaN|null)\b|\[object Object\]/.test(tout)) { r.ex_texte_corrompu++; exemplesDefauts.corrompu = exemplesDefauts.corrompu || sansHtml(tout).match(/.{0,40}(undefined|NaN|null|\[object Object\]).{0,20}/)[0]; }
      if (!t.hint || !String(t.hint).trim()) r.ex_sans_hint++;
      const sol = t.solution;
      if (Array.isArray(sol)) { types.add(sol.length ? 'tableau' : 'vide'); if (!sol.length) r.ex_sans_solution++; }
      else if (typeof sol === 'string') { types.add(sol.trim() ? 'chaine' : 'vide'); if (!sol.trim()) r.ex_sans_solution++; }
      else { types.add('absente'); r.ex_sans_solution++; }
    }
    r.ex_moules = moules.size;
    r.ex_contextes = contextes.size;
    r.ex_solution_type = types.size ? [...types].sort().join('+') : 'absente';
    r.ex_taux_exception = +(100 * r.ex_exceptions / tirages).toFixed(1);
    if (r.ex_exceptions) for (const [msg, n] of erreurs) defaut('exercice-exception', ligneGen, `${n}/${tirages} tirages lèvent : ${msg}`);
    if (r.ex_answer_non_fini) defaut('exercice-answer-non-fini', ligneGen, `${r.ex_answer_non_fini}/${tirages} tirages : ${exemplesDefauts.nonFini}`);
    if (r.ex_decimale_anglaise_enonce) defaut('exercice-decimale-anglaise-enonce', ligneGen, `${r.ex_decimale_anglaise_enonce}/${tirages} énoncés : « …${exemplesDefauts.dec}… »`);
    if (r.ex_decimale_anglaise_aide) defaut('exercice-decimale-anglaise-aide', ligneGen, `${r.ex_decimale_anglaise_aide}/${tirages} indices/solutions : « …${exemplesDefauts.decAide}… »`);
    if (r.ex_texte_corrompu) defaut('exercice-texte-corrompu', ligneGen, `${r.ex_texte_corrompu}/${tirages} tirages : « …${exemplesDefauts.corrompu}… »`);
    if (r.ex_sans_hint) defaut('exercice-sans-indice', ligneGen, `${r.ex_sans_hint}/${tirages} tirages sans hint`);
    if (r.ex_sans_solution) defaut('exercice-sans-solution', ligneGen, `${r.ex_sans_solution}/${tirages} tirages sans solution`);
    if (r.ex_solution_type.includes('chaine')) defaut('exercice-solution-chaine', ligneGen, `solution renvoyée en chaîne (${r.ex_solution_type}) : le rendu attend un tableau d'étapes`);
    if (r.ex_moules <= 1 && r.ex_exceptions < tirages) defaut('exercice-mono-moule', ligneGen, `un seul moule d'énoncé sur ${tirages} tirages (règle du 2026-09-08 : plusieurs tâches distinctes)`);
    if (r.ex_contextes <= 1 && r.ex_exceptions < tirages) defaut('exercice-mono-contexte', ligneGen, `un seul contexte narratif sur ${tirages} tirages (pick() attendu)`);
  }

  /* --- Problème --- */
  const pb = mod.probleme || {};
  const taches = Array.isArray(pb.tasks) ? pb.tasks : [];
  const sols = Array.isArray(pb.solutions) ? pb.solutions : [];
  r.pb_taches = taches.length;
  r.pb_taches_sans_solution = taches.reduce((n, _, i) => n + ((typeof sols[i] === 'string' && sols[i].trim()) ? 0 : 1), 0);
  if (!taches.length) defaut('probleme-sans-tache', trouverLigne(lignes, '', 'probleme:'), 'probleme.tasks vide ou absent');
  if (r.pb_taches_sans_solution) defaut('probleme-tache-sans-solution', trouverLigne(lignes, '', 'solutions:'), `${r.pb_taches_sans_solution}/${taches.length} tâches sans solution`);

  /* --- Évaluation --- */
  const ev = mod.evaluation || {};
  const qs = Array.isArray(ev.questions) ? ev.questions : [];
  r.eval_nb = qs.length;
  r.eval_points = qs.reduce((s, q) => s + (typeof q.points === 'number' ? q.points : 0), 0);
  r.eval_duration = ev.duration || '';
  r.eval_sans_correction = qs.filter(q => typeof q.correction !== 'string' || !q.correction.trim()).length;
  r.eval_sans_points = qs.filter(q => typeof q.points !== 'number').length;
  r.eval_avec_competence = qs.filter(q => typeof q.competence === 'string').length;
  const rep = {};
  qs.forEach(q => { if (typeof q.competence === 'string') { const c = q.competence.toLowerCase(); rep[c] = (rep[c] || 0) + 1; } });
  r.eval_competences = Object.entries(rep).map(([c, n]) => `${c}:${n}`).join(' ');
  r.eval_competences_hors_referentiel = Object.keys(rep).filter(c => !COMPETENCES.includes(c)).join(' ');
  if (r.eval_sans_correction) defaut('evaluation-sans-correction', trouverLigne(lignes, '', 'evaluation:'), `${r.eval_sans_correction}/${qs.length} questions sans correction`);
  if (r.eval_sans_points) defaut('evaluation-sans-bareme', trouverLigne(lignes, '', 'evaluation:'), `${r.eval_sans_points}/${qs.length} questions sans points`);
  if (!ev.duration) defaut('evaluation-sans-duree', trouverLigne(lignes, '', 'evaluation:'), 'evaluation.duration absent');
  qs.forEach((q, i) => {
    if (q.type !== 'numeric' && Array.isArray(q.options)) {
      const opts = q.options.map(o => sansHtml(o).replace(/\s+/g, ' ').trim().toLowerCase());
      if (new Set(opts).size !== opts.length) defaut('evaluation-options-dupliquees', trouverLigne(lignes, q.statement, 'evaluation:'), `evaluation[${i}] : options identiques`);
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) defaut('evaluation-answer-hors-bornes', trouverLigne(lignes, q.statement, 'evaluation:'), `evaluation[${i}] : answer ${q.answer} pour ${q.options.length} options`);
    } else if (typeof q.answer !== 'number' || !Number.isFinite(q.answer)) {
      defaut('evaluation-answer-non-fini', trouverLigne(lignes, q.statement, 'evaluation:'), `evaluation[${i}] : answer = ${String(q.answer)}`);
    }
  });

  /* --- Alignement lexical cours ↔ questions ---
     Termes techniques = mots des `keywords` et des <strong> de TOUS les modules
     du corpus (lexique construit par analyserCorpus) ; à défaut, ceux du module.
     Un mot de contexte (« stylo », « radiateur ») n'est pas technique : il ne
     compte pas. Un terme technique employé par une question et jamais par le
     cours du module est signalé. */
  const lexiqueCours = new Set(motsSignificatifs(tc + ' ' + (mod.title || '') + ' ' + (mod.subtitle || '')));
  const termesTech = options.lexiqueTechnique || lexiqueTechniqueDe(mod, tc);
  const partsTermes = [], partsLexique = [];
  const questionsHorsCours = [];
  const examiner = (texte, etiquette, ligne) => {
    const sig = [...new Set(motsSignificatifs(texte))];
    const tech = sig.filter(m => termesTech.has(m));
    if (sig.length) partsLexique.push(sig.filter(m => lexiqueCours.has(m)).length / sig.length);
    if (tech.length) {
      const absents = tech.filter(m => !lexiqueCours.has(m));
      partsTermes.push(1 - absents.length / tech.length);
      if (absents.length >= options.seuilMotsAbsents) questionsHorsCours.push({ etiquette, ligne, absents });
    }
  };
  quiz.forEach((q, i) => examiner(q.q + ' ' + (q.options || []).join(' '), `quiz[${i}]`, trouverLigne(lignes, q.q, 'quiz:')));
  qs.forEach((q, i) => examiner(q.statement + ' ' + (q.options || []).join(' '), `evaluation[${i}]`, trouverLigne(lignes, q.statement, 'evaluation:')));
  const moy = a => a.length ? +(a.reduce((s, x) => s + x, 0) / a.length).toFixed(2) : 1;
  r.align_termes_techniques = moy(partsTermes);
  r.align_lexique = moy(partsLexique);
  r.align_questions_hors_cours = questionsHorsCours.length;
  questionsHorsCours.forEach(q => defaut('question-terme-technique-hors-cours', q.ligne, `${q.etiquette} emploie un terme technique que le cours n'emploie jamais : ${q.absents.join(', ')}`));

  /* --- Langue ---
     Zones de texte affiché (cours, quiz, problème, évaluation) et zones SVG
     (<title>/<desc>/<text> des schémas et figures : lues par les lecteurs
     d'écran, parfois affichées) comptées à part et moins pesées. */
  const zones = [
    ['cours', tc],
    ['quiz', textesDe(quiz, SVG_ET_CODE).join('\n')],
    ['probleme', textesDe(pb, SVG_ET_CODE).join('\n')],
    ['evaluation', textesDe(ev, SVG_ET_CODE).join('\n')],
    /* <text> est visible (étiquettes du schéma) ; <title> et <desc> ne sont
       lus que par les lecteurs d'écran (ou en info-bulle). */
    ['svg-texte', [cours.diagram, cours.diagrams, quiz, pb, ev].map(v => texteDesSvg(v, 'text')).join(' ')],
    ['svg-desc', [cours.diagram, cours.diagrams, quiz, pb, ev].map(v => texteDesSvg(v, 'title|desc')).join(' ')]
  ];
  r.langue_non_accentues = 0; r.langue_non_accentues_svg = 0; r.langue_non_accentues_desc = 0;
  const vus = new Map();
  for (const [zone, texte] of zones) {
    const trouves = motsNonAccentues(texte);
    if (zone === 'svg-texte') r.langue_non_accentues_svg += trouves.length;
    else if (zone === 'svg-desc') r.langue_non_accentues_desc += trouves.length;
    else r.langue_non_accentues += trouves.length;
    trouves.forEach(m => { const k = zone + ':' + m.toLowerCase(); vus.set(k, (vus.get(k) || 0) + 1); });
  }
  for (const [k, n] of vus) {
    const [zone, mot] = k.split(':');
    const idx = lignes.findIndex(l => new RegExp('(?<![\\p{L}\\p{N}_\\\\])' + mot + '(?![\\p{L}\\p{N}_])', 'iu').test(l));
    const type = zone === 'svg-texte' ? 'mot-non-accentue-svg' : zone === 'svg-desc' ? 'mot-non-accentue-desc-svg' : 'mot-non-accentue';
    defaut(type, idx + 1, `« ${mot} » ×${n} (${zone})`);
  }
  /* Champ affiché écrit entièrement sans accent : un texte français d'au moins
     25 mots sans aucune lettre accentuée (é è ê à ç ù û î ô…) est presque
     sûrement une convention d'écriture « sans accents » qui a fui dans un champ
     visible (ex. description d'un schéma). Le dictionnaire de mots ne voit pas
     ces champs quand leurs mots ne sont pas dans la liste. */
  r.langue_champs_sans_accent = 0;
  (function parcourir(v, chemin) {
    if (typeof v === 'string') {
      if (SVG_ET_CODE.has(chemin.split('.').pop())) return;
      const propre = sansHtml(v).replace(/\$[^$]*\$/g, ' ');
      if (nbMots(propre) >= 40 && !/[àâäéèêëîïôöùûüçÀÂÉÈÊËÎÏÔÙÛÜÇ]/.test(propre)) {
        r.langue_champs_sans_accent++;
        defaut('champ-sans-aucun-accent', trouverLigne(lignes, propre, chemin.split(/[.[]/)[0] + ':'), `${chemin} : ${nbMots(propre)} mots sans aucune lettre accentuée — « ${propre.replace(/\s+/g, ' ').trim().slice(0, 70)}… »`);
      }
      return;
    }
    if (Array.isArray(v)) { v.forEach((x, i) => parcourir(x, chemin + '[' + i + ']')); return; }
    if (v && typeof v === 'object') for (const k of Object.keys(v)) parcourir(v[k], chemin ? chemin + '.' + k : k);
  })({ cours, quiz, probleme: pb, evaluation: ev }, '');
  const longues = [...phrasesLongues(cours.intro || '', options.seuilPhrase).map(p => ({ ...p, zone: 'intro' })),
                   ...phrasesLongues(texteChamp(cours, 'method') || '', options.seuilPhrase).map(p => ({ ...p, zone: 'method' }))];
  r.langue_phrases_longues = longues.length;
  longues.forEach(p => defaut('phrase-longue', trouverLigne(lignes, p.phrase, p.zone + ':'), `${p.mots} mots (${p.zone}) : « ${p.phrase.slice(0, 90)}… »`));

  /* --- Score composite --- */
  r.score_fiabilite = Math.max(0, 30 - 30 * (r.ex_exceptions / tirages) - (r.ex_answer_non_fini ? 10 : 0)
    - (r.ex_decimale_anglaise_enonce ? 8 : 0) - (r.ex_decimale_anglaise_aide ? 4 : 0) - (r.ex_texte_corrompu ? 8 : 0)
    - (r.ex_solution_type.includes('chaine') ? 3 : 0) - (r.ex_sans_hint ? 3 : 0) - (r.ex_sans_solution ? 3 : 0));
  r.score_variete = Math.min(10, 2.5 * r.ex_moules) + Math.min(5, r.ex_contextes);
  r.score_quiz = Math.max(0, (r.quiz_nb >= 5 ? 10 : r.quiz_nb >= 3 ? 5 : 0)
    + 5 * (quiz.length ? (quiz.length - r.quiz_sans_correction) / quiz.length : 0) * (r.quiz_correction_mots_moy >= 12 ? 1 : 0.5)
    - (r.quiz_index_fixe && !mod.quizShuffle ? 5 : 0) - 2 * r.quiz_options_dupliquees - 2 * r.quiz_distracteurs_aberrants);
  r.score_cours = ['intro', 'definitions', 'method', 'example', 'formulas', 'diagram', 'piege', 'recap'].reduce((s, c) => s + r['cours_' + c + '_present'], 0)
    + (r.cours_blocs_denses === 0 ? 4 : r.cours_blocs_denses === 1 ? 2 : 0)
    + (r.cours_strong >= options.seuilStrong ? 3 : r.cours_strong >= options.seuilStrong / 2 ? 1.5 : 0);
  r.score_evaluation = (r.eval_nb >= 5 ? 4 : r.eval_nb >= 3 ? 2 : 0) + (r.eval_points > 0 && ev.duration ? 2 : 0)
    + (qs.length && !r.eval_sans_correction ? 2 : 0) + (qs.length && r.eval_avec_competence === qs.length ? 2 : 0);
  r.score_alignement = +(5 * r.align_termes_techniques).toFixed(1);
  r.score_langue = Math.max(0, 5 - r.langue_non_accentues - Math.min(2, r.langue_non_accentues_svg)
    - Math.min(1, 0.1 * r.langue_non_accentues_desc) - Math.min(1, 0.5 * r.langue_champs_sans_accent) - r.langue_phrases_longues);
  r.score = +(r.score_fiabilite + r.score_variete + r.score_quiz + r.score_cours + r.score_evaluation + r.score_alignement + r.score_langue).toFixed(1);
  r.defauts = defauts;
  r.nb_defauts = defauts.length;
  return r;
}

/* ---------- Sorties ------------------------------------------------------- */

const COLONNES = [
  'id', 'niveau', 'fichier', 'title', 'score', 'score_fiabilite', 'score_variete', 'score_quiz', 'score_cours', 'score_evaluation', 'score_alignement', 'score_langue', 'nb_defauts',
  ...CHAMPS_COURS.flatMap(c => ['cours_' + c + '_present', 'cours_' + c + '_mots']),
  'cours_mots', 'cours_br_par_100_mots', 'cours_blocs_denses', 'cours_strong',
  'quiz_nb', 'quiz_options_min', 'quiz_options_max', 'quiz_sans_correction', 'quiz_correction_mots_moy', 'quiz_options_dupliquees', 'quiz_index_fixe', 'quiz_shuffle', 'quiz_distracteurs_aberrants',
  'ex_tirages', 'ex_exceptions', 'ex_taux_exception', 'ex_moules', 'ex_contextes', 'ex_answer_non_fini', 'ex_decimale_anglaise_enonce', 'ex_decimale_anglaise_aide', 'ex_texte_corrompu', 'ex_sans_hint', 'ex_sans_solution', 'ex_solution_type',
  'pb_taches', 'pb_taches_sans_solution',
  'eval_nb', 'eval_points', 'eval_duration', 'eval_sans_correction', 'eval_sans_points', 'eval_avec_competence', 'eval_competences', 'eval_competences_hors_referentiel',
  'align_termes_techniques', 'align_lexique', 'align_questions_hors_cours',
  'langue_non_accentues', 'langue_non_accentues_svg', 'langue_non_accentues_desc', 'langue_champs_sans_accent', 'langue_phrases_longues'
];

function csvCellule(v) {
  const s = v === undefined || v === null ? '' : String(v);
  return /[;"\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function ecrireCsv(resultats, chemin) {
  const lignes = [COLONNES.join(';')];
  for (const r of resultats) lignes.push(COLONNES.map(c => csvCellule(r[c])).join(';'));
  fs.writeFileSync(chemin, '﻿' + lignes.join('\n') + '\n', 'utf8');
}

function ecrireResume(resultats, chemin, options) {
  const parNiveau = new Map();
  for (const r of resultats) { if (!parNiveau.has(r.niveau)) parNiveau.set(r.niveau, []); parNiveau.get(r.niveau).push(r); }
  const L = [];
  L.push(`# Analyse automatique du corpus mathématiques — ${options.date}`);
  L.push('');
  L.push(`> ${resultats.length} modules, ${options.tirages} tirages de \`generate()\` par module (graine ${options.graine}). Généré par \`node scripts/analyser-corpus.js\`. Les notes servent à prioriser les lectures, pas à juger : ce qui compte est ce que l'élève voit.`);
  L.push('');
  L.push('## Pondération du score composite (/100)');
  L.push('');
  L.push('| Bloc | Points | Ce qui est mesuré |');
  L.push('|---|---|---|');
  L.push('| Fiabilité de l\'exercice | 30 | exceptions au tirage, réponse non finie, décimale anglaise (énoncé 8 / aide 4), `undefined`/`NaN`, solution en chaîne, indice ou solution absents |');
  L.push('| Variété de l\'exercice | 15 | moules d\'énoncé distincts (2,5/moule, plafond 10) + contextes narratifs distincts (1/contexte, plafond 5) |');
  L.push('| Quiz | 20 | ≥5 questions 10 (3-4 : 5), corrections présentes et ≥12 mots 5, index de réponse fixe −5, options dupliquées −2/question, distracteur aberrant −2/option |');
  L.push('| Cours | 15 | intro, definitions, method, example, formulas, diagram, piege, recap : 1 chacun ; aucun bloc dense (champ ≥ ' + options.seuilBloc + ' mots sans `<br/><br/>`) : 4, un seul : 2 ; `<strong>` ≥ ' + options.seuilStrong + ' : 3 |');
  L.push('| Évaluation | 10 | ≥5 questions 4, barème + durée 2, corrections 2, compétence sur chaque question 2 |');
  L.push('| Alignement lexical | 5 | part moyenne des termes techniques des questions (quiz + évaluation) employés par le cours du module ; termes techniques = mots des `keywords` et des `<strong>` de tout le corpus |');
  L.push('| Langue | 5 | −1 par mot non accentué dans le texte affiché, −0,5 par champ affiché de ≥ 40 mots sans aucune lettre accentuée (plafond 1), −1 par mot dans un `<text>` de SVG (étiquette visible, plafond 2), −0,1 par mot dans un `<title>`/`<desc>` de SVG lu seulement par les lecteurs d\'écran (plafond 1), −1 par phrase de plus de ' + options.seuilPhrase + ' mots dans intro/method (plancher 0) |');
  L.push('');
  L.push('## Distribution par niveau');
  L.push('');
  L.push('| Niveau | Modules | Score moyen | Min | Max | Exceptions `generate()` | Décimale anglaise (énoncé) | Mono-moule | Solution en chaîne | Mots non accentués | Questions hors cours |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|');
  for (const niv of NIVEAUX) {
    const rs = parNiveau.get(niv.cle); if (!rs) continue;
    const scores = rs.map(r => r.score);
    const moy = (scores.reduce((a, b) => a + b, 0) / rs.length).toFixed(1);
    const cnt = f => rs.filter(f).length;
    const min = rs.reduce((a, b) => a.score < b.score ? a : b), max = rs.reduce((a, b) => a.score > b.score ? a : b);
    L.push(`| ${niv.cle} | ${rs.length} | ${moy} | ${min.score} (${min.id}) | ${max.score} (${max.id}) | ${cnt(r => r.ex_exceptions > 0)} | ${cnt(r => r.ex_decimale_anglaise_enonce > 0)} | ${cnt(r => r.ex_moules <= 1)} | ${cnt(r => String(r.ex_solution_type).includes('chaine'))} | ${rs.reduce((s, r) => s + (r.langue_non_accentues || 0), 0)} | ${rs.reduce((s, r) => s + (r.align_questions_hors_cours || 0), 0)} |`);
  }
  const tous = resultats.map(r => r.score);
  L.push(`| **Total** | ${resultats.length} | ${(tous.reduce((a, b) => a + b, 0) / tous.length).toFixed(1)} | | | ${resultats.filter(r => r.ex_exceptions > 0).length} | ${resultats.filter(r => r.ex_decimale_anglaise_enonce > 0).length} | ${resultats.filter(r => r.ex_moules <= 1).length} | ${resultats.filter(r => String(r.ex_solution_type).includes('chaine')).length} | ${resultats.reduce((s, r) => s + (r.langue_non_accentues || 0), 0)} | ${resultats.reduce((s, r) => s + (r.align_questions_hors_cours || 0), 0)} |`);
  L.push('');
  L.push('### Moyennes par bloc et par niveau');
  L.push('');
  L.push('| Niveau | Fiabilité /30 | Variété /15 | Quiz /20 | Cours /15 | Évaluation /10 | Alignement /5 | Langue /5 | Quiz (questions) | Éval. (questions) | Moules | Contextes | Blocs denses | `<strong>` | Mots de cours |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|');
  const m = (rs, c) => (rs.reduce((s, r) => s + (+r[c] || 0), 0) / rs.length).toFixed(1);
  for (const niv of NIVEAUX) {
    const rs = parNiveau.get(niv.cle); if (!rs) continue;
    L.push(`| ${niv.cle} | ${m(rs, 'score_fiabilite')} | ${m(rs, 'score_variete')} | ${m(rs, 'score_quiz')} | ${m(rs, 'score_cours')} | ${m(rs, 'score_evaluation')} | ${m(rs, 'score_alignement')} | ${m(rs, 'score_langue')} | ${m(rs, 'quiz_nb')} | ${m(rs, 'eval_nb')} | ${m(rs, 'ex_moules')} | ${m(rs, 'ex_contextes')} | ${m(rs, 'cours_blocs_denses')} | ${m(rs, 'cours_strong')} | ${m(rs, 'cours_mots')} |`);
  }
  L.push('');
  L.push('## Les 20 modules les plus faibles');
  L.push('');
  L.push('| # | Module | Niveau | Score | Fiab. | Var. | Quiz | Cours | Éval. | Align. | Langue | Défauts détectés |');
  L.push('|---|---|---|---|---|---|---|---|---|---|---|---|');
  [...resultats].sort((a, b) => a.score - b.score).slice(0, 20).forEach((r, i) => {
    const types = {};
    r.defauts.forEach(d => { types[d.type] = (types[d.type] || 0) + 1; });
    L.push(`| ${i + 1} | \`${r.id}\` | ${r.niveau} | ${r.score} | ${(+r.score_fiabilite).toFixed(0)} | ${r.score_variete} | ${r.score_quiz} | ${r.score_cours} | ${r.score_evaluation} | ${r.score_alignement} | ${r.score_langue} | ${Object.entries(types).map(([t, n]) => n > 1 ? `${t} ×${n}` : t).join(', ')} |`);
  });
  L.push('');
  L.push('## Défauts détectés automatiquement (liste exhaustive)');
  L.push('');
  const parType = new Map();
  for (const r of resultats) for (const d of r.defauts) { if (!parType.has(d.type)) parType.set(d.type, []); parType.get(d.type).push({ ...d, id: r.id }); }
  const ordre = [...parType.entries()].sort((a, b) => b[1].length - a[1].length);
  L.push('| Type | Occurrences | Modules |');
  L.push('|---|---|---|');
  for (const [type, ds] of ordre) L.push(`| ${type} | ${ds.length} | ${new Set(ds.map(d => d.id)).size} |`);
  L.push('');
  for (const [type, ds] of ordre) {
    L.push(`### ${type} (${ds.length})`);
    L.push('');
    for (const d of ds) L.push(`- \`${d.fichier}:${d.ligne}\` — ${d.detail.replace(/\|/g, '\\|')}`);
    L.push('');
  }
  L.push('## Limites de la mesure');
  L.push('');
  L.push('- `cours.application` et `evaluation.questions[].competence` sont mesurés mais aucun renderer du site ne les affiche ; leur absence coûte les mêmes points à tous les modules.');
  L.push('- « Contexte narratif » = première proposition du squelette d\'énoncé (nombres masqués) : un générateur qui varie seulement les nombres compte pour un contexte.');
  L.push('- Les distracteurs aberrants ne sont cherchés que sur les options numériques, et l\'écart d\'ordre de grandeur n\'est pas signalé quand la question porte sur une échelle, une puissance de dix, une conversion ou un inverse (ce sont alors de vrais distracteurs) ; le jugement « erreur plausible d\'élève » reste une lecture manuelle (phase 2).');
  L.push('- L\'alignement lexical compare des mots normalisés (sans accents, ≥ 5 lettres, hors mots-outils) : un synonyme compte comme absent, un mot présent dans une autre acception compte comme présent. Seuls les termes du lexique technique du corpus (`keywords` + `<strong>` de tous les modules) sont jugés ; les mots de contexte d\'un énoncé ne le sont pas.');
  L.push('- Le score ne mesure ni l\'exactitude des réponses, ni la conformité au programme, ni la qualité des explications : c\'est le rôle de la lecture.');
  L.push('');
  fs.writeFileSync(chemin, L.join('\n'), 'utf8');
}

/* ---------- Programme principal ------------------------------------------ */

function lireArgs(argv) {
  const o = { tirages: 60, graine: 1, sortie: 'docs', date: new Date().toISOString().slice(0, 10), niveaux: null, modules: null, json: null,
              seuilBloc: 60, seuilStrong: 8, seuilPhrase: 35, seuilMotsAbsents: 1 };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i], v = argv[i + 1];
    if (a === '--tirages') { o.tirages = parseInt(v, 10); i++; }
    else if (a === '--graine') { o.graine = parseInt(v, 10); i++; }
    else if (a === '--sortie') { o.sortie = v; i++; }
    else if (a === '--date') { o.date = v; i++; }
    else if (a === '--niveaux') { o.niveaux = v.split(','); i++; }
    else if (a === '--modules') { o.modules = v.split(','); i++; }
    else if (a === '--json') { o.json = v; i++; }
    else if (a === '--seuil-bloc') { o.seuilBloc = parseInt(v, 10); i++; }
    else if (a === '--seuil-strong') { o.seuilStrong = parseInt(v, 10); i++; }
    else if (a === '--help' || a === '-h') { console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]); process.exit(0); }
  }
  return o;
}

function analyserCorpus(options) {
  /* Le lexique technique se construit sur TOUT le corpus maths, même quand on
     n'analyse qu'un niveau : sinon la mesure d'alignement dépendrait du filtre. */
  if (!options.lexiqueTechnique) {
    const lexique = new Set();
    for (const e of listerModules(null, null)) {
      try {
        const mod = chargerModule(e.chemin, options.graine);
        lexiqueTechniqueDe(mod, texteCours(mod.cours || {})).forEach(m => lexique.add(m));
      } catch (err) { /* un module cassé est signalé par son analyse, pas ici */ }
    }
    options = { ...options, lexiqueTechnique: lexique };
  }
  const entrees = listerModules(options.niveaux, options.modules);
  return entrees.map(e => analyserModule(e, options));
}

if (require.main === module) {
  const options = lireArgs(process.argv.slice(2));
  const resultats = analyserCorpus(options);
  const dossier = path.isAbsolute(options.sortie) ? options.sortie : path.join(RACINE, options.sortie);
  fs.mkdirSync(dossier, { recursive: true });
  const base = path.join(dossier, `analyse-corpus-maths-${options.date}`);
  ecrireCsv(resultats, base + '.csv');
  ecrireResume(resultats, base + '.md', options);
  if (options.json) fs.writeFileSync(options.json, JSON.stringify({ options, resultats }, null, 1), 'utf8');
  const moy = (resultats.reduce((s, r) => s + r.score, 0) / resultats.length).toFixed(1);
  const nbDefauts = resultats.reduce((s, r) => s + r.nb_defauts, 0);
  console.log(`${resultats.length} modules analysés — score moyen ${moy}/100 — ${nbDefauts} défauts détectés`);
  console.log(`→ ${path.relative(RACINE, base + '.csv')}\n→ ${path.relative(RACINE, base + '.md')}`);
  const faibles = [...resultats].sort((a, b) => a.score - b.score).slice(0, 5);
  console.log('Plus faibles : ' + faibles.map(r => `${r.id} (${r.score})`).join(', '));
}

module.exports = { analyserCorpus, analyserModule, listerModules, squeletteEnonce, COLONNES };
