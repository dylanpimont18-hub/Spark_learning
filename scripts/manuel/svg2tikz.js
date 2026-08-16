/* =========================================================
   Spark Learning – scripts/manuel/svg2tikz.js
   Traduit les schemas SVG des modules en TikZ.

   Pourquoi pas un rendu image : la geometrie du SVG est deja juste, mais ses
   etiquettes sont du texte. Une figure de manuel doit composer « A'B' » avec de
   vraies italiques mathematiques et de vrais primes, pas avec la police du
   navigateur. TikZ redonne la main a TeX sur la typographie sans toucher a une
   seule coordonnee : la provenance reste « svg-exact ».

   Deux pieges de repere :
     - l'axe y du SVG descend, celui de TikZ monte : toute ordonnee est niee a
       l'emission. Les etiquettes restent donc droites, sans miroir a corriger.
     - un `y` de <text> est une LIGNE DE BASE, pas un centre : les ancres TikZ
       employees sont les ancres « base ».
   ========================================================= */

const { symbole, signaler, SUR } = require('./unicode.js');

/* --- 1. Typographie des etiquettes ------------------------------------
   La partie delicate : decider ce qui est une formule et ce qui est une
   phrase. Le corpus melange les deux dans une meme etiquette
   (« Sommet (0 ; -3) »), il faut donc segmenter, pas classer. */

const LETTRE = 'A-Za-zÀ-ÖØ-öø-ÿŒœŸ';

/* Une unite ne se reconnait qu'a sa position : « 60 cm » mesure, « L = 60 »
   nomme une longueur. Le meme L, deux sens. On n'accepte donc une unite
   qu'immediatement apres un nombre. */
const UNITES = new Set([
  'm', 'cm', 'mm', 'km', 'dm', 'hm', 'dam', 'µm', 'nm',
  'g', 'kg', 'mg', 'q', 't',
  's', 'ms', 'µs', 'min', 'h', 'j', 'an', 'ans',
  'L', 'mL', 'cL', 'dL', 'daL', 'hL',
  'N', 'kN', 'daN', 'W', 'kW', 'MW', 'Wh', 'kWh', 'MWh', 'J', 'kJ', 'MJ', 'cal', 'kcal',
  'V', 'mV', 'kV', 'A', 'mA', 'kA', 'C', 'F', 'H', 'S',
  'Pa', 'hPa', 'kPa', 'MPa', 'bar', 'mbar', 'atm',
  'Hz', 'kHz', 'MHz', 'GHz', 'rad', 'gr', 'tr', 'K', 'mol', 'dB', 'lm', 'lx', 'px',
  'Ω', 'Ohm', '€', '$', 'ha', 'a', 'ca'
]);

/* Sigles et fonctions : romain, jamais italique (\mathrm{PGCD}, pas PGCD). */
const ROMAINS = new Set(['PGCD', 'PPCM', 'PPMC', 'CM', 'PIB', 'IMC', 'TVA',
  'TGBT', 'PABX', 'IPBX', 'GTB', 'GTC', 'VDI', 'PAC', 'CTA', 'ECS', 'EFS', 'DJU']);
const FONCTIONS = new Set(['sin', 'cos', 'tan', 'log', 'ln', 'exp', 'arccos', 'arcsin', 'arctan']);

/* Mots qui designent une grandeur. Isoles, ce sont des mots de phrase
   (« Base » sous un triangle) ; pris dans une formule, ce sont des variables
   (« A = base × h / 2 ») et doivent alors se composer en romain. */
const GRANDEURS = new Set([
  'base', 'hauteur', 'longueur', 'largeur', 'profondeur', 'epaisseur', 'épaisseur',
  'cote', 'côte', 'côté', 'cotes', 'côtés', 'rayon', 'diametre', 'diamètre',
  'aire', 'perimetre', 'périmètre', 'volume', 'masse', 'poids', 'temps', 'duree', 'durée',
  'distance', 'vitesse', 'prix', 'total', 'somme', 'produit', 'reste', 'quotient',
  'effectif', 'frequence', 'fréquence', 'moyenne', 'mediane', 'médiane', 'etendue', 'étendue',
  'angle', 'apothème', 'apotheme', 'diagonale', 'circonference', 'circonférence'
]);

const EXPOSANTS = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5',
  '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-', 'ⁿ': 'n' };
const INDICES = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5',
  '₆': '6', '₇': '7', '₈': '8', '₉': '9', 'ₙ': 'n' };

/* Operateurs ecrits en ASCII dans les SVG. `binaire` distingue ce qui relie
   deux quantites (=, ×, /) de ce qui ne fait qu'entourer ou decorer ((, ^) :
   seul le premier groupe autorise un mot a devenir une variable. */
const OPERATEURS = {
  '=': { latex: '=', binaire: true }, '+': { latex: '+', binaire: true },
  '-': { latex: '-', binaire: true }, '−': { latex: '-', binaire: true },
  '<': { latex: '<', binaire: true }, '>': { latex: '>', binaire: true },
  '/': { latex: '/', binaire: true }, '*': { latex: '\\times', binaire: true },
  '~': { latex: '\\sim', binaire: true },
  '(': { latex: '(', binaire: false }, ')': { latex: ')', binaire: false },
  '[': { latex: '[', binaire: false }, ']': { latex: ']', binaire: false },
  '|': { latex: '\\mid', binaire: false }
};

/* Une unite peut porter un exposant ou un denominateur : m², km/h, W/m². */
const MOTIF_UNITE = /^\(([A-Za-zµΩ°]+[²³]?(?:\s*\/\s*[A-Za-zµΩ]+[²³]?)?)\)/;

function unitePure(brut) {
  const parts = brut.split('/').map(p => p.trim());
  return parts.length && parts.every(p => UNITES.has(p.replace(/[²³]$/, '')));
}

/* Une unite se compose en romain, mais certains de ses caracteres ne sont PAS
   des lettres romaines : dans \mathrm{µm} le µ reste en mode math et y tombe
   sur un « ţ ». Les symboles sortent donc du \mathrm. */
const SYMBOLES_UNITE = { 'µ': '\\mu', 'Ω': '\\Omega', '€': '\\text{\\texteuro}' };

function romain(nom) {
  let sortie = '', tampon = '';
  const vider = () => { if (tampon) { sortie += '\\mathrm{' + tampon + '}'; tampon = ''; } };
  for (const c of nom) {
    if (SYMBOLES_UNITE[c]) { vider(); sortie += SYMBOLES_UNITE[c]; }
    else tampon += c;
  }
  vider();
  return sortie;
}

function uniteLatex(brut) {
  return brut.split('/').map(p => {
    const t = p.trim();
    const exp = /[²³]$/.exec(t);
    return romain(t.replace(/[²³]$/, '')) + (exp ? '^{' + (exp[0] === '²' ? 2 : 3) + '}' : '');
  }).join('/');
}

function decoderEntites(s) {
  return String(s)
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, '\u00A0')
    .replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&times;/g, '×')
    .replace(/&deg;/g, '°').replace(/&hellip;/g, '…').replace(/&minus;/g, '−')
    .replace(/&amp;/g, '&');
}

function echapperTexte(s) {
  return s
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/([&%#_{}$])/g, '\\$1')
    .replace(/\^/g, '\\textasciicircum{}')
    .replace(/~/g, '\\textasciitilde{}')
    .replace(/</g, '\\textless{}').replace(/>/g, '\\textgreater{}')
    .replace(/'/g, '’');
}

/* Un nombre francais : virgule decimale protegee (sans accolades, LaTeX
   composerait « 5, 07 »), espace des milliers en espace fine.
   L'ordre compte : produire \, avant de traiter les virgules ferait relire
   la virgule de \, comme une decimale, et refermerait une accolade fantome. */
function nombreLatex(brut) {
  return brut.replace(/,/g, '{,}').replace(/[  ](?=\d{3})/g, '\\,');
}

/* Une commande LaTeX se termine au premier caractere non alphabetique : sans
   separateur, « A→B » devient \toB, une commande inconnue qui fait echouer la
   compilation entiere de l'ouvrage.

   La soudure doit se decider ICI, entre deux fragments, et non sur la chaine
   assemblee : une fois « \to » et « B » colles, plus rien ne distingue \toB
   d'une commande legitime, et une expression reguliere y decoupe \paralle + l. */
function joindreMath(fragments) {
  let out = '';
  for (const f of fragments) {
    if (out && /\\[A-Za-z]+$/.test(out) && /^[A-Za-z]/.test(f)) out += '{}';
    out += f;
  }
  return out;
}

/* Decoupe l'etiquette en jetons classes. `classe` decide de l'appartenance a
   une formule : ATOME et OP en font partie, FAIBLE et ESPACE ne servent que de
   pont entre deux d'entre eux, TEXTE l'interrompt. */
function jetonner(source, origine) {
  const jetons = [];
  let reste = source;
  let precedent = null;                     // dernier jeton non blanc

  const pousser = (j) => { jetons.push(j); if (j.classe !== 'ESPACE') precedent = j; };
  const avaler = (n) => { reste = reste.slice(n); };

  while (reste.length) {
    let m;

    if ((m = /^[\s\u00A0]+/.exec(reste))) {
      jetons.push({ classe: 'ESPACE', math: ' ', texte: ' ' }); avaler(m[0].length); continue;
    }

    // « n°1 » : abreviation francaise de numero, jamais une mesure d'angle.
    if ((m = /^n°\s*(\d+)/.exec(reste))) {
      pousser({ classe: 'TEXTE', math: 'n\\textsuperscript{o}' + m[1],
        texte: 'n\\textsuperscript{o}' + m[1] });
      avaler(m[0].length); continue;
    }

    if ((m = /^°([CF])(?![A-Za-z])/.exec(reste))) {
      pousser({ classe: 'OP', math: '^\\circ\\mathrm{' + m[1] + '}', texte: null });
      avaler(m[0].length); continue;
    }

    if ((m = /^\d{1,3}(?:[\u00A0 ]\d{3})+(?:,\d+)?|^\d+(?:,\d+)?/.exec(reste))) {
      pousser({ classe: 'ATOME', type: 'nombre', math: nombreLatex(m[0]), texte: m[0] });
      avaler(m[0].length); continue;
    }

    // Unite : uniquement collee a un nombre, sinon c'est un nom de variable.
    if (precedent && precedent.type === 'nombre' &&
        (m = new RegExp('^([A-Za-zµΩ€$]+)(?![' + LETTRE + '0-9])').exec(reste)) &&
        UNITES.has(m[1])) {
      pousser({ classe: 'ATOME', type: 'unite', math: romain(m[1]), texte: m[1] });
      avaler(m[0].length); continue;
    }

    // Unite entre parentheses : « Profondeur (m) » nomme l'unite d'un axe.
    if ((m = MOTIF_UNITE.exec(reste)) && unitePure(m[1])) {
      pousser({ classe: 'ATOME', type: 'unite', math: '(' + uniteLatex(m[1]) + ')', texte: m[0] });
      avaler(m[0].length); continue;
    }

    // Un nom de fonction n'en est un que s'il porte un argument : « échelle log »
    // est une abreviation de phrase, « cos(60°) » un calcul.
    if ((m = new RegExp('^(' + [...FONCTIONS].join('|') + ')(?![' + LETTRE + '])').exec(reste)) &&
        /^\s*[(\d]|^\s+[A-Za-z]/.test(reste.slice(m[0].length))) {
      pousser({ classe: 'ATOME', type: 'fonction', math: '\\' + m[1], texte: m[1] });
      avaler(m[0].length); continue;
    }

    // Suite de majuscules, primes compris : nom de point, de segment ou sigle.
    if ((m = new RegExp("^(?:[A-Z][''′]*){1,5}(?![" + LETTRE + '])').exec(reste))) {
      const nu = m[0].replace(/[''′]/g, "'");
      const lettres = nu.replace(/'/g, '');
      pousser({ classe: 'ATOME', type: 'ident',
        math: ROMAINS.has(lettres) ? '\\mathrm{' + nu + '}' : nu, texte: m[0] });
      avaler(m[0].length); continue;
    }

    // Minuscule isolee, avec indice chiffre eventuel : d, x, d1, u2.
    if ((m = new RegExp("^([a-z])(\\d+)?([''′]*)(?![" + LETTRE + '0-9])').exec(reste))) {
      pousser({ classe: 'ATOME', type: 'ident',
        math: m[1] + (m[2] ? '_{' + m[2] + '}' : '') + (m[3] || '').replace(/[''′]/g, "'"),
        texte: m[0] });
      avaler(m[0].length); continue;
    }

    if ((m = new RegExp('^[' + LETTRE + "]+(?:[''’][" + LETTRE + ']+)*').exec(reste))) {
      const grandeur = GRANDEURS.has(m[0].toLowerCase());
      pousser({ classe: grandeur ? 'GRANDEUR' : 'TEXTE',
        math: '\\mathrm{' + m[0] + '}', texte: echapperTexte(m[0]) });
      avaler(m[0].length); continue;
    }

    if (reste.startsWith('//')) {
      pousser({ classe: 'OP', math: '\\parallel', texte: null }); avaler(2); continue;
    }

    // Exposant tape en ASCII : plusieurs modules ecrivent « c^2 » et non « c² ».
    if ((m = /^\^\(([^()]+)\)|^\^(\{[^}]*\}|[A-Za-z0-9]+)/.exec(reste))) {
      const brut = m[1] !== undefined ? m[1] : m[2];
      const arg = m[1] !== undefined
        ? joindreMath(jetonner(brut, origine).filter(j => j.classe !== 'ESPACE').map(j => j.math))
        : brut.replace(/^\{|\}$/g, '');
      pousser({ classe: 'OP', math: '^{' + arg + '}', texte: null, binaire: false });
      avaler(m[0].length); continue;
    }

    const c = reste[0];

    // Une SUITE d'exposants, pas un exposant par caractere : « 10⁻¹² » compose
    // caractere par caractere donne 10^{-}^{1}^{2}, que TeX refuse.
    if (EXPOSANTS[c]) {
      const run = /^[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻ⁿ]+/.exec(reste)[0];
      pousser({ classe: 'OP', binaire: false, texte: null,
        math: '^{' + [...run].map(ch => EXPOSANTS[ch]).join('') + '}' });
      avaler(run.length); continue;
    }
    if (INDICES[c]) {
      const run = /^[₀₁₂₃₄₅₆₇₈₉ₙ]+/.exec(reste)[0];
      pousser({ classe: 'OP', binaire: false, texte: null,
        math: '_{' + [...run].map(ch => INDICES[ch]).join('') + '}' });
      avaler(run.length); continue;
    }
    /* Indice ecrit en ASCII : u_C, R_A, X_L, y_max, θ_confort. Sans cette
       regle le souligne partait a l'echappement et s'imprimait tel quel —
       « u_C » au lieu de u indice C — dans les 25 etiquettes d'electro-
       technique et de mecanique du corpus, sans une seule erreur de
       compilation pour le signaler.

       Deux garde-fous. Un indice doit se poser sur QUELQUE CHOSE : si le
       jeton precedent est du texte, le souligne en est un vrai. C'est ce qui
       preserve le __init__ des diagrammes de classes de si-1re-poo, ou les
       soulignes appartiennent au nom de la methode. */
    if (c === '_' && precedent && precedent.classe !== 'TEXTE' &&
        (m = /^_(?!_)(?:\{([^}]*)\}|([A-Za-z0-9]+))/.exec(reste))) {
      const arg = m[1] !== undefined ? m[1] : m[2];
      // Un indice de plusieurs lettres est une abreviation (max, eq, confort),
      // pas un produit de variables : il se compose en romain.
      pousser({ classe: 'OP', binaire: false, texte: null,
        math: '_{' + (/^[A-Za-z]{2,}$/.test(arg) ? '\\mathrm{' + arg + '}' : arg) + '}' });
      avaler(m[0].length); continue;
    }
    if (c === '°') { pousser({ classe: 'OP', math: '^\\circ', texte: null, binaire: false }); avaler(1); continue; }
    if (OPERATEURS[c]) {
      pousser({ classe: 'OP', math: OPERATEURS[c].latex, texte: echapperTexte(c),
        binaire: OPERATEURS[c].binaire });
      avaler(1); continue;
    }
    // Le point-virgule separe les coordonnees d'un couple : en typographie
    // francaise il porte une espace fine de chaque cote.
    if (c === ';') { pousser({ classe: 'FAIBLE', math: '\\,;\\,', texte: ';' }); avaler(1); continue; }
    if (/[:.,!?]/.test(c)) { pousser({ classe: 'FAIBLE', math: c, texte: c }); avaler(1); continue; }

    const s = symbole(c);
    if (s) {
      pousser(s.math
        ? { classe: 'OP', math: s.latex, texte: '\\ensuremath{' + s.latex + '}', binaire: true }
        : { classe: 'TEXTE', math: '\\text{' + s.latex + '}', texte: s.latex });
      avaler(1); continue;
    }

    // Caractere inconnu : conserve et signale, exactement comme le convertisseur
    // de texte \u2014 meme table SUR, pour que les deux chemins bloquent aux memes
    // endroits plutot que l'un derriere l'autre.
    if (!SUR.test(c)) signaler(c, origine || '(figure)');
    pousser({ classe: 'TEXTE', math: '\\text{' + c + '}', texte: echapperTexte(c) });
    avaler(1);
  }
  return jetons;
}

/* Marque les jetons appartenant a une formule. Un pont (espaces, ponctuation
   faible, mot de grandeur) n'est absorbe que s'il est encadre des DEUX cotes
   par de la formule : « Univers : 32 » garde son deux-points en texte, alors
   que « (0 ; -3) » garde le sien en math. */
/* Un mot de grandeur ne devient une variable que s'il est PRIS ENTRE deux
   operateurs : « A = base × h » le rend variable, « angle 60° au sol » et
   « Taille / distance (m) » le laissent mot de phrase. Sans cette condition,
   n'importe quelle legende contenant « distance » basculait en italique. */
function promouvoirGrandeurs(jetons) {
  const voisin = (depart, pas) => {
    for (let i = depart + pas; i >= 0 && i < jetons.length; i += pas) {
      if (jetons[i].classe !== 'ESPACE') return jetons[i];
    }
    return null;
  };
  for (let i = 0; i < jetons.length; i++) {
    if (jetons[i].classe !== 'GRANDEUR') continue;
    const g = voisin(i, -1), d = voisin(i, +1);
    const encadre = g && d && g.classe === 'OP' && d.classe === 'OP' && g.binaire && d.binaire;
    jetons[i].classe = encadre ? 'ATOME' : 'TEXTE';
  }
}

function marquerFormules(jetons) {
  promouvoirGrandeurs(jetons);
  const dansFormule = jetons.map(j => j.classe === 'ATOME' || j.classe === 'OP');

  for (let i = 0; i < jetons.length; i++) {
    if (dansFormule[i] || jetons[i].classe === 'TEXTE') continue;
    let fin = i;
    while (fin < jetons.length && !dansFormule[fin] && jetons[fin].classe !== 'TEXTE') fin++;
    const avant = i > 0 && dansFormule[i - 1];
    const apres = fin < jetons.length && dansFormule[fin];
    if (avant && apres) for (let k = i; k < fin; k++) dansFormule[k] = true;
    i = fin - 1;
  }

  // Une formule doit tenir sur au moins un atome : « Demi-droite » ne doit pas
  // faire basculer son trait d'union en mode math.
  for (let i = 0; i < jetons.length;) {
    if (!dansFormule[i]) { i++; continue; }
    let fin = i;
    while (fin < jetons.length && dansFormule[fin]) fin++;
    let atome = false;
    for (let k = i; k < fin; k++) if (jetons[k].classe === 'ATOME' || jetons[k].classe === 'GRANDEUR') atome = true;
    if (!atome) for (let k = i; k < fin; k++) dansFormule[k] = false;
    i = fin;
  }

  // Une formule ne commence ni ne finit sur un pont.
  for (let i = 0; i < jetons.length; i++) {
    const pont = jetons[i].classe === 'ESPACE' || jetons[i].classe === 'FAIBLE';
    if (!dansFormule[i] || !pont) continue;
    if (i === 0 || !dansFormule[i - 1]) dansFormule[i] = false;
  }
  for (let i = jetons.length - 1; i >= 0; i--) {
    const pont = jetons[i].classe === 'ESPACE' || jetons[i].classe === 'FAIBLE';
    if (!dansFormule[i] || !pont) continue;
    if (i === jetons.length - 1 || !dansFormule[i + 1]) dansFormule[i] = false;
  }
  return dansFormule;
}

function etiquette(texte, origine) {
  const source = decoderEntites(texte == null ? '' : String(texte)).replace(/\s+/g, ' ').trim();
  if (!source) return '';

  /* Une etiquette qui n'est QU'une fraction se compose en fraction. Le cas est
     limite a l'etiquette entiere : au milieu d'une formule, une barre oblique
     reste oblique, sous peine de faire enfler la ligne. */
  const fraction = /^(\d+)\s*\/\s*(\d+)$/.exec(source);
  if (fraction) return '$\\frac{' + fraction[1] + '}{' + fraction[2] + '}$';

  const jetons = jetonner(source, origine);
  const dansFormule = marquerFormules(jetons);

  let sortie = '';
  let formule = null;                       // fragments de l'ilot math en cours
  const fermer = () => {
    if (formule === null) return;
    sortie += '$' + joindreMath(formule) + '$';
    formule = null;
  };

  for (let i = 0; i < jetons.length; i++) {
    const j = jetons[i];
    if (dansFormule[i]) {
      if (formule === null) formule = [];
      if (j.classe === 'ESPACE') {
        // En mode math l'espace source est ignore : il faut le redemander
        // explicitement entre deux atomes (« 12 cm »), et le laisser a TeX
        // autour des operateurs, qui savent mieux l'espacer. Un voisin qui
        // porte deja son propre espacement (\, du point-virgule) n'en veut pas.
        const g = jetons[i - 1], d = jetons[i + 1];
        const porteDejaUneEspace = (t) => t && /^\\,|\\,$/.test(t.math || '');
        if (porteDejaUneEspace(g) || porteDejaUneEspace(d)) continue;
        formule.push((g && d && g.classe === 'ATOME' && d.classe === 'ATOME') ? '\\ ' : ' ');
      } else formule.push(j.math);
    } else {
      fermer();
      // Un jeton sans equivalent textuel (exposant, indice, degre) rencontre
      // hors d'un ilot ne peut pas etre recopie tel quel : un ^ ou un _ en
      // mode texte est une erreur de compilation. \ensuremath rouvre le mode
      // math juste autour de lui.
      sortie += j.texte != null ? j.texte : '\\ensuremath{' + j.math + '}';
    }
  }
  fermer();
  return sortie;
}

/* --- 2. Geometrie ------------------------------------------------------
   Aucune coordonnee n'est recalculee : celles du SVG publie sont reprises
   telles quelles, seule l'ordonnee change de signe. C'est ce qui autorise la
   provenance « svg-exact ». */

const crypto = require('crypto');

/* Epaisseurs en points typographiques, donc INDEPENDANTES de l'echelle du
   dessin : c'est le seul moyen d'obtenir le meme gris de trait sur une figure
   large et sur une figure etroite. Les valeurs de l'ecran (jusqu'a 4 unites de
   viewBox) donneraient des traits de 4 pt sur le papier. */
const STYLES = {
  'axis':           { trait: 'encre',    largeur: 0.7 },
  'frame-line':     { trait: 'encre',    largeur: 0.7 },
  'grid-line':      { trait: 'gris!25',  largeur: 0.3 },
  'guide-line':     { trait: 'gris!70',  largeur: 0.45, tirets: 'dash pattern=on 2pt off 1.6pt' },
  'focus-line':     { trait: 'gris!70',  largeur: 0.45, tirets: 'dash pattern=on 2pt off 1.6pt' },
  'curve-main':     { trait: 'accent',   largeur: 1.1 },
  'graph-line':     { trait: 'accent',   largeur: 1.1 },
  'plot-point':     { trait: 'accent',   largeur: 0.6, remplissage: 'accent', marque: 1.7 },
  'plot-point-alt': { trait: 'accent',   largeur: 0.8, remplissage: 'white',  marque: 1.7 }
};

/* Tailles de police des etiquettes, en unites de viewBox : ce sont celles de
   css/styles.css. On les convertit en points a l'echelle du dessin, puis on
   les ramene a une taille de livre (facteur ci-dessous) : a l'ecran une
   etiquette est plus grosse que le texte courant, sur le papier ce serait
   ecrasant. */
const POLICES = {
  'axis-label':       { unites: 13, graisse: '\\bfseries', couleur: 'encre' },
  'annotation-label': { unites: 13, graisse: '\\bfseries', couleur: 'encre' },
  'label':            { unites: 12, graisse: '',           couleur: 'encre' },
  'tick-label':       { unites: 11, graisse: '',           couleur: 'gris' },
  'label-soft':       { unites: 11, graisse: '\\itshape',  couleur: 'gris' }
};
const REDUCTION = 0.62;
const CORPS_MIN = 5.2, CORPS_MAX = 10;

const MM_PAR_PT = 0.35146;

function nb(v) {
  const n = Math.round(v * 1e4) / 1e4;
  return Object.is(n, -0) ? '0' : String(n);
}

/* Le point unique par lequel passe TOUTE coordonnee : un seul endroit ou
   l'ordonnee change de signe, donc un seul endroit ou se tromper. */
function pt(x, y) { return '(' + nb(x) + ',' + nb(-y) + ')'; }

function attributs(balise) {
  const a = {};
  // Les noms d'attributs SVG portent des chiffres (x1, y2, rx) : les exclure
  // faisait silencieusement lire toutes les lignes a l'origine.
  for (const m of balise.matchAll(/([a-zA-Z][a-zA-Z0-9:_-]*)\s*=\s*"([^"]*)"/g)) a[m[1]] = m[2];
  return a;
}

function nombres(s) {
  return (String(s).match(/-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) || []).map(Number);
}

function styleDe(attrs) {
  const classes = String(attrs.class || '').trim().split(/\s+/);
  for (const c of classes) if (STYLES[c]) return { nom: c, ...STYLES[c] };
  return null;
}

function rempliPar(attrs) {
  const f = attrs.fill;
  return f && f !== 'none' && f !== 'transparent' ? f : null;
}

/* Un contour ne se dessine QUE s'il est demande : par une classe connue, ou
   par un attribut stroke explicite. Plusieurs schemas encadrent leur zone de
   trace d'un rectangle transparent et sans contour, qui ajoutait un cadre noir
   absent du site des lors qu'on lui appliquait un style par defaut. */
function traitDe(attrs, echelle) {
  const parClasse = styleDe(attrs);
  if (parClasse) return parClasse;
  const s = attrs.stroke;
  if (!s || s === 'none') return null;
  const sw = Number(attrs['stroke-width']);
  const largeur = sw ? Math.min(2, Math.max(0.3, sw * echelle / MM_PAR_PT)) : 0.7;
  return { nom: null, trait: 'explicite', couleurTrait: s, largeur: Math.round(largeur * 100) / 100 };
}

/* Options TikZ d'un trace. */
function optionsTrace(attrs, trait, fond, opts) {
  const o = [];
  if (fond) o.push('fill=' + couleur(fond, opts, 'gris!12'));
  if (trait) {
    if (trait.remplissage) o.push('fill=' + (trait.remplissage === 'accent' ? opts.accent : trait.remplissage));
    o.push('draw=' + (trait.trait === 'accent' ? opts.accent
      : trait.trait === 'explicite' ? couleur(trait.couleurTrait, opts, 'encre') : trait.trait));
    o.push('line width=' + trait.largeur + 'pt');
    if (trait.tirets) o.push(trait.tirets);
    if (attrs['stroke-dasharray']) o.push('dash pattern=on 2pt off 1.6pt');
  }
  if (attrs['marker-end']) o.push('-{Latex[length=1.6mm]}');
  else if (attrs['marker-start']) o.push('{Latex[length=1.6mm]}-');
  o.push('line cap=round', 'line join=round');
  return o.join(', ');
}

/* Les couleurs des SVG sont ecrites en color-mix() sur des variables CSS, que
   le PDF ne sait pas resoudre. Le pourcentage, lui, est ecrit en clair : on le
   reprend tel quel plutot que de deviner un gris.

   Un plancher est applique : un aplat a 7 %, lisible sur un ecran retroeclaire,
   ne laisse rien voir sur du papier. C'est la meme adaptation que pour les
   epaisseurs de trait — la geometrie ne bouge pas, seul le rendu s'ajuste. */
const TEINTE_MIN = 12;

function couleur(valeur, opts, defaut) {
  const v = String(valeur);
  if (v === 'white' || /^#(fff|ffffff)$/i.test(v)) return 'white';
  if (/color-mix|var\(/.test(v)) {
    const pct = /(\d+(?:\.\d+)?)\s*%/.exec(v);
    const teinte = Math.max(TEINTE_MIN, pct ? Number(pct[1]) : TEINTE_MIN);
    return (/accent/.test(v) ? opts.accent : 'gris') + '!' + Math.round(teinte);
  }
  return defaut;
}

/* --- Chemins ----------------------------------------------------------- */

/* Conversion arc SVG (parametrage par les extremites) vers arc TikZ
   (parametrage par les angles), algorithme de l'annexe F.6 de SVG 1.1. */
function arcVersAngles(x1, y1, rx, ry, phiDeg, grand, sens, x2, y2) {
  const phi = phiDeg * Math.PI / 180;
  rx = Math.abs(rx); ry = Math.abs(ry);
  if (!rx || !ry) return null;

  const dx2 = (x1 - x2) / 2, dy2 = (y1 - y2) / 2;
  const cosp = Math.cos(phi), sinp = Math.sin(phi);
  const x1p = cosp * dx2 + sinp * dy2;
  const y1p = -sinp * dx2 + cosp * dy2;

  let lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lambda > 1) { const s = Math.sqrt(lambda); rx *= s; ry *= s; }

  const num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
  const den = rx * rx * y1p * y1p + ry * ry * x1p * x1p;
  let coef = Math.sqrt(Math.max(0, num / den));
  if (grand === sens) coef = -coef;

  const cxp = coef * rx * y1p / ry;
  const cyp = -coef * ry * x1p / rx;

  const angle = (ux, uy, vx, vy) => {
    const d = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
    let a = Math.acos(Math.min(1, Math.max(-1, (ux * vx + uy * vy) / d)));
    if (ux * vy - uy * vx < 0) a = -a;
    return a;
  };
  const theta1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dtheta = angle((x1p - cxp) / rx, (y1p - cyp) / ry,
                     (-x1p - cxp) / rx, (-y1p - cyp) / ry) % (2 * Math.PI);
  if (!sens && dtheta > 0) dtheta -= 2 * Math.PI;
  if (sens && dtheta < 0) dtheta += 2 * Math.PI;

  return { rx, ry, phi: phiDeg, theta1: theta1 * 180 / Math.PI, dtheta: dtheta * 180 / Math.PI };
}

/* Traduit l'attribut `d`. Les commandes rencontrees dans le corpus sont
   M/L/H/V/C/Q/A/Z, en majuscules (absolu) comme en minuscules (relatif). */
function cheminVersTikz(d) {
  const jetons = String(d).match(/[MmLlHhVvCcSsQqTtAaZz]|-?\d*\.?\d+(?:[eE][-+]?\d+)?/g) || [];
  const morceaux = [];
  let i = 0, x = 0, y = 0, dx = 0, dy = 0, commande = null, premier = true;
  let cx2 = null, cy2 = null;             // dernier controle, pour S et T

  const lire = () => Number(jetons[i++]);

  while (i < jetons.length) {
    if (/[A-Za-z]/.test(jetons[i])) commande = jetons[i++];
    else if (commande === 'M') commande = 'L';
    else if (commande === 'm') commande = 'l';
    if (!commande) break;

    const rel = commande === commande.toLowerCase();
    const base = () => (rel ? { x, y } : { x: 0, y: 0 });
    const c = commande.toUpperCase();

    if (c === 'Z') { morceaux.push({ type: 'cycle', texte: 'cycle' }); x = dx; y = dy; cx2 = null; continue; }

    if (c === 'M') {
      const b = base(); x = b.x + lire(); y = b.y + lire(); dx = x; dy = y;
      morceaux.push({ type: 'point', texte: pt(x, y) }); premier = false; cx2 = null; continue;
    }
    if (c === 'L') {
      const b = base(); x = b.x + lire(); y = b.y + lire();
      morceaux.push({ type: 'point', texte: pt(x, y) }); cx2 = null; continue;
    }
    if (c === 'H') { x = (rel ? x : 0) + lire(); morceaux.push({ type: 'point', texte: pt(x, y) }); cx2 = null; continue; }
    if (c === 'V') { y = (rel ? y : 0) + lire(); morceaux.push({ type: 'point', texte: pt(x, y) }); cx2 = null; continue; }

    if (c === 'C' || c === 'S') {
      const b = base();
      let c1x, c1y;
      if (c === 'C') { c1x = b.x + lire(); c1y = b.y + lire(); }
      else { c1x = cx2 === null ? x : 2 * x - cx2; c1y = cy2 === null ? y : 2 * y - cy2; }
      const c2x = b.x + lire(), c2y = b.y + lire();
      x = b.x + lire(); y = b.y + lire();
      morceaux.push({ type: 'controls', texte: 'controls ' + pt(c1x, c1y) + ' and ' + pt(c2x, c2y) },
        { type: 'point', texte: pt(x, y) });
      cx2 = c2x; cy2 = c2y; continue;
    }

    if (c === 'Q' || c === 'T') {
      const b = base();
      let qx, qy;
      if (c === 'Q') { qx = b.x + lire(); qy = b.y + lire(); }
      else { qx = cx2 === null ? x : 2 * x - cx2; qy = cy2 === null ? y : 2 * y - cy2; }
      const x2 = b.x + lire(), y2 = b.y + lire();
      // Une quadratique s'ecrit exactement comme une cubique : C = P + 2/3 (Q - P).
      const c1x = x + 2 / 3 * (qx - x), c1y = y + 2 / 3 * (qy - y);
      const c2x = x2 + 2 / 3 * (qx - x2), c2y = y2 + 2 / 3 * (qy - y2);
      morceaux.push({ type: 'controls', texte: 'controls ' + pt(c1x, c1y) + ' and ' + pt(c2x, c2y) },
        { type: 'point', texte: pt(x2, y2) });
      cx2 = qx; cy2 = qy; x = x2; y = y2; continue;
    }

    if (c === 'A') {
      const b = base();
      const rx = lire(), ry = lire(), rot = lire(), grand = lire(), sens = lire();
      const x2 = b.x + lire(), y2 = b.y + lire();
      const a = arcVersAngles(x, y, rx, ry, rot, !!grand, !!sens, x2, y2);
      if (a) {
        // Le miroir vertical inverse le sens des angles.
        morceaux.push({ type: 'arc', texte: 'arc[start angle=' + nb(-a.theta1) +
          ', end angle=' + nb(-(a.theta1 + a.dtheta)) +
          ', x radius=' + nb(a.rx) + ', y radius=' + nb(a.ry) +
          (rot ? ', rotate=' + nb(-rot) : '') + ']' });
      } else morceaux.push({ type: 'point', texte: pt(x2, y2) });
      x = x2; y = y2; cx2 = null; continue;
    }

    i++;                                   // commande non geree : on avance
  }

  /* Assemblage. Chaque type de morceau a son propre liant, et TikZ ne pardonne
     pas l'a-peu-pres : « arc » se colle a la coordonnee precedente sans liant,
     alors qu'une courbe de Bezier demande « .. ». Ecrire « .. arc[] » produit
     une commande inconnue et fait echouer tout l'ouvrage. */
  let sortie = '';
  let precedent = null;
  for (const m of morceaux) {
    if (!sortie) { sortie = m.texte; precedent = m.type; continue; }
    if (m.type === 'controls') sortie += ' .. ' + m.texte;
    else if (m.type === 'arc') sortie += ' ' + m.texte;
    else if (precedent === 'controls') sortie += ' .. ' + m.texte;
    else sortie += ' -- ' + m.texte;
    precedent = m.type;
  }
  return sortie;
}

/* --- Assemblage de la figure ------------------------------------------- */

const ACCENTS = { maths: 'ardoise', physique: 'turquoise', si: 'olive', fed: 'ambre' };

function versTikz(svg, options) {
  const opts = options || {};
  const source = String(svg == null ? '' : svg);
  const origine = opts.origine || '(figure)';
  const accent = ACCENTS[opts.matiere] || ACCENTS.maths;

  const vb = /viewBox\s*=\s*"([^"]+)"/.exec(source);
  if (!vb) return { provenance: null, raison: 'SVG sans viewBox' };
  const [vx, vy, vl, vh] = nombres(vb[1]);
  if (!vl || !vh) return { provenance: null, raison: 'viewBox illisible' };

  const largeurMm = opts.largeurMm || 120;
  const echelle = largeurMm / vl;                     // mm par unite de viewBox
  const ctx = { accent };

  const corps = [];
  const zonesRemplies = [];                   // aplats deja poses, dans l'ordre du SVG
  const taillePolice = (unites) => {
    const brut = unites * echelle / MM_PAR_PT * REDUCTION;
    return Math.round(Math.min(CORPS_MAX, Math.max(CORPS_MIN, brut)) * 10) / 10;
  };

  /* Ordre de parcours : celui du SVG, pour conserver les superpositions
     (une grille sous un axe, un point sur une courbe). */
  for (const m of source.matchAll(
    /<(line|rect|circle|ellipse|polygon|polyline|path|text)\b([^>]*?)(\/?)>([\s\S]*?)(?:<\/\1>|(?=<))/g)) {
    const [, nom, brut, , contenu] = m;
    const a = attributs(brut);

    if (nom === 'text') {
      const cl = String(a.class || '').trim().split(/\s+/).find(c => POLICES[c]);
      const p = POLICES[cl] || POLICES['annotation-label'];
      const texte = etiquette(contenu.replace(/<[^>]*>/g, ''), origine);
      if (!texte) continue;

      const ancre = a['text-anchor'] === 'middle' ? 'base'
        : a['text-anchor'] === 'end' ? 'base east' : 'base west';
      const explicite = a['font-size'] || (/font-size:\s*([\d.]+)/.exec(a.style || '') || [])[1];
      const corpsPt = taillePolice(explicite ? Number(nombres(explicite)[0]) : p.unites);

      const x = Number(a.x) || 0, y = Number(a.y) || 0;
      const o = ['anchor=' + ancre, 'inner sep=0.8pt', 'outer sep=0pt',
        'text=' + p.couleur,
        'font=\\fontsize{' + corpsPt + '}{' + (corpsPt * 1.15).toFixed(1) + '}\\selectfont' + p.graisse];

      /* Reserve blanche. Les SVG posent leurs graduations SUR les axes et leurs
         annotations SUR les traits : sans reserve, le trait barre les chiffres.
         Sur du blanc la reserve ne se voit pas ; dans un aplat elle dessinerait
         un rectangle clair, on l'y supprime donc. */
      if (!zonesRemplies.some(z => x >= z.x0 && x <= z.x1 && y >= z.y0 && y <= z.y1)) {
        o.push('fill=white');
      }

      const rot = /rotate\(\s*(-?[\d.]+)/.exec(a.transform || '');
      if (rot) o.push('rotate=' + nb(-Number(rot[1])));

      corps.push('\\node[' + o.join(', ') + '] at ' + pt(x, y) + ' {' + texte + '};');
      continue;
    }

    const trait = traitDe(a, echelle);
    const fond = rempliPar(a);
    if (!trait && !fond) continue;              // ni contour ni aplat : rien a tracer
    const style = trait || { largeur: 0 };
    const o = optionsTrace(a, trait, fond, ctx);

    if (nom === 'line') {
      corps.push('\\draw[' + o + '] ' + pt(+a.x1 || 0, +a.y1 || 0) + ' -- ' +
        pt(+a.x2 || 0, +a.y2 || 0) + ';');
    } else if (nom === 'rect') {
      const x = +a.x || 0, y = +a.y || 0, w = +a.width || 0, h = +a.height || 0;
      const arrondi = a.rx ? '[rounded corners=' + nb(Number(a.rx) * echelle) + 'mm]' : '';
      corps.push('\\draw[' + o + ']' + arrondi + ' ' + pt(x, y) + ' rectangle ' + pt(x + w, y + h) + ';');
      // Un aplat sert de fond : les etiquettes qui y tombent renoncent a leur
      // reserve blanche, qui s'y verrait comme une tache claire.
      if (fond) zonesRemplies.push({ x0: x, y0: y, x1: x + w, y1: y + h });
    } else if (nom === 'circle') {
      const r = style.marque
        ? nb(style.marque) + 'pt'                       // marque : taille du livre
        : nb(+a.r || 0);                                // geometrie : a l'echelle
      corps.push('\\draw[' + o + '] ' + pt(+a.cx || 0, +a.cy || 0) + ' circle[radius=' + r + '];');
    } else if (nom === 'ellipse') {
      corps.push('\\draw[' + o + '] ' + pt(+a.cx || 0, +a.cy || 0) +
        ' ellipse[x radius=' + nb(+a.rx || 0) + ', y radius=' + nb(+a.ry || 0) + '];');
    } else if (nom === 'polygon' || nom === 'polyline') {
      const n = nombres(a.points);
      if (n.length < 4) continue;
      const sommets = [];
      for (let k = 0; k + 1 < n.length; k += 2) sommets.push(pt(n[k], n[k + 1]));
      corps.push('\\draw[' + o + '] ' + sommets.join(' -- ') +
        (nom === 'polygon' ? ' -- cycle' : '') + ';');
    } else if (nom === 'path') {
      const trace = cheminVersTikz(a.d || '');
      if (trace) corps.push('\\draw[' + o + '] ' + trace + ';');
    }
  }

  if (!corps.length) return { provenance: null, raison: 'aucune forme exploitable' };

  const tikz = [
    '\\begin{tikzpicture}[x=' + nb(echelle) + 'mm, y=' + nb(echelle) + 'mm]',
    // Cadre invisible : fige la boite du dessin sur le viewBox, sinon TikZ la
    // calque sur le contenu et deux figures voisines ne s'alignent plus.
    '\\useasboundingbox ' + pt(vx || 0, vy || 0) + ' rectangle ' + pt((vx || 0) + vl, (vy || 0) + vh) + ';',
    ...corps,
    '\\end{tikzpicture}'
  ].join('\n');

  return {
    tikz,
    provenance: 'svg-exact',
    empreinte: crypto.createHash('sha1').update(source).digest('hex').slice(0, 12),
    elements: corps.length
  };
}

module.exports = { etiquette, versTikz, cheminVersTikz };
