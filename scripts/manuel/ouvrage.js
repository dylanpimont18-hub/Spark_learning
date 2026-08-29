/* =========================================================
   Spark Learning – scripts/manuel/ouvrage.js
   Maquette du livre : preambule, couverture, liminaires, parties,
   fin d'ouvrage, et couverture separee pour l'impression a la demande.

   La gouttiere depend du nombre de pages final : le build compile une
   premiere fois, lit la pagination, fixe la gouttiere, puis recompile.
   Sans cela le texte se retrouve dans la reliure.
   ========================================================= */

const { versLatex: L, nombreFr } = require('./latex.js');

/* Marge interieure exigee par l'impression a la demande, selon l'epaisseur. */
function gouttierePourPages(pages) {
  if (pages <= 150) return 9.5;
  if (pages <= 300) return 12.7;
  if (pages <= 500) return 15.9;
  if (pages <= 700) return 19.0;
  return 22.2;
}

/* Largeur de dos : epaisseur du papier x nombre de pages.
   0,0596 mm par page pour un interieur couleur sur papier blanc. */
function largeurDosMm(pages) {
  return Math.round(pages * 0.0596 * 10) / 10;
}

const LARGEUR_MM = 170, HAUTEUR_MM = 244;

/* L'auteur, ecrit une fois. Il apparait a quatre endroits — page de titre
   interieure, couverture imprimeur, page de copyright, quatrieme de
   couverture — et un livre qui se contredit sur son auteur n'est pas
   vendable. `---` est le tiret cadratin de LaTeX. */
const AUTEUR = 'Dylan Pimont';
const AUTEUR_LIGNE = AUTEUR + ' --- enseignant, formateur et ingénieur';

/* LA palette du livre, reprise variable par variable de css/styles.css. Il n'y
   en a qu'une, couverture et interieur confondus : le manuel avait invente un
   or #C9A227, un vert #18806F et un grenat #B03A2E qui n'existent nulle part
   dans la marque, et son encre, son gris et son papier etaient decales.

   `orfonce` est le seul ajout, et il n'est pas invente : le site fait deja
   exactement cela en styles.css:3982. L'accent #F4D03F pose en texte sur du
   blanc donne 1,6:1 — illisible. Partout ou l'accent porte du TEXTE, c'est
   `orfonce` ; partout ou il remplit ou encadre, c'est `jaune`. */
const COULEURS_CHARTE = `\\definecolor{ardoise}{HTML}{2C3E50}    % --primary
\\definecolor{turquoise}{HTML}{48C9B0}  % --secondary
\\definecolor{jaune}{HTML}{F4D03F}      % --accent
\\definecolor{orange}{HTML}{E67E22}     % --fed
\\definecolor{erreur}{HTML}{FF6B6B}     % --error
\\definecolor{encre}{HTML}{212529}      % --text
\\definecolor{gris}{HTML}{6C757D}       % --text-muted
\\definecolor{papier}{HTML}{F8F9FA}     % --bg
\\definecolor{orfonce}{HTML}{B8860B}    % l'accent assombri, pour le texte
% Couleur d'accent des figures, une par matiere (svg2tikz.js). Ce sont des
% traits de 1,1 pt et des points de 1,7 mm sur du papier blanc : les teintes
% claires de la charte y disparaissent, on les assombrit sans changer de
% teinte. La matiere garde ainsi sa couleur de marque, en restant lisible.
\\colorlet{accentmaths}{ardoise}
\\colorlet{accentphysique}{turquoise!75!black}
\\colorlet{accentsi}{orfonce}
\\colorlet{accentfed}{orange!85!black}
% Une teinte par annee du cursus (couverture v3, validee le 2026-08-28). Le
% plat porte la couleur de son annee, et un volume de cycle porte en bandeau
% de tete toutes les couleurs des annees qu'il contient.
%
% Chaque teinte est assombrie jusqu'a passer 4,5:1 (WCAG AA) A LA FOIS en
% texte blanc sur l'aplat et en texte de couleur sur le papier #F8F9FA : la
% couleur d'annee sert aux deux usages. C'est cette double contrainte qui
% exclut ici les jaunes et les verts clairs, et qui interdit d'eclaircir la
% teinte « prepa » pour la detacher de l'ardoise — on change de teinte.
\\definecolor{an6e}{HTML}{C0392B}
\\definecolor{an5e}{HTML}{96600B}
\\definecolor{an4e}{HTML}{2E7D32}
\\definecolor{an3e}{HTML}{10796B}
\\definecolor{an2de}{HTML}{1F6FB2}
\\definecolor{an1re}{HTML}{3F4A9E}
\\definecolor{antle}{HTML}{7B2D8E}
\\definecolor{anprepa}{HTML}{7A4E2A}
\\definecolor{anbts}{HTML}{8C6D1F}
`;

/* Le logo reduit a ses deux signes memorables : la boucle d'apprentissage
   (deux arcs fleches, turquoise puis jaune) et l'eclair. Dessines en TikZ,
   donc vectoriels — un plat imprime ne merite pas un raster — et declinables
   sur les sept ouvrages sans avoir a generer la moindre image. */
const MACROS_MARQUE = `\\newcommand{\\sparkcycle}[4]{%
  \\draw[#3,line width=0.9pt,-{Stealth[length=3mm,width=2.6mm]}]
    ([shift={(168:#2)}]#1) arc (168:12:#2);
  \\draw[#4,line width=0.9pt,-{Stealth[length=3mm,width=2.6mm]}]
    ([shift={(348:#2)}]#1) arc (348:192:#2);}
\\newcommand{\\sparkeclair}[3]{%
  \\fill[#3] ([shift={(#2*0.30, #2*1.00)}]#1)
    -- ([shift={(-#2*0.42, #2*0.06)}]#1)
    -- ([shift={(-#2*0.06, #2*0.06)}]#1)
    -- ([shift={(-#2*0.30,-#2*1.00)}]#1)
    -- ([shift={( #2*0.42,-#2*0.04)}]#1)
    -- ([shift={( #2*0.06,-#2*0.04)}]#1) -- cycle;}
\\newcommand{\\sparkmarque}{{\\sffamily\\fontsize{8.5}{10}\\selectfont\\bfseries
  \\textls{\\textcolor{jaune}{SPARK}\\hspace{0.9mm}\\textcolor{turquoise}{LEARNING}}}}
\\newcommand{\\sparksep}{\\hspace{2.4mm}\\textperiodcentered\\hspace{2.4mm}}
`;

/* Hauteur du bandeau clair qui porte le titre, mesuree depuis le pied du plat.
   92 et non 84 depuis la v3 : le bandeau accueille desormais l'echelle de
   pastilles et le QR, qui ne tenaient pas dans 84 mm. */
const BANDEAU_MM = 92;

/* Bandeau de couleur en tete de plat : c'est lui qui porte la ou les teintes
   d'annee, et la marque en reserve blanche. */
const TETE_MM = 20;

function preambule(config) {
  const gouttiere = config.gouttiere || 20;
  return `\\documentclass[11pt,openany]{book}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}          % polices vectorielles : sans elles, microtype
\\usepackage[T1]{fontenc}      % echoue (expansion impossible sur du bitmap)
% Poppins, la sans de la charte, n'existe pas sur CTAN. Montserrat est la
% geometrique la plus proche disponible en pdflatex. Elle ne prend que la
% place de \\sfdefault : le corps du livre reste en romain lmodern, plus lisible
% en lecture longue, et rien hors couverture n'appelle \\sffamily.
\\usepackage{montserrat}
\\usepackage[french]{babel}
\\usepackage{amsmath,amssymb}
\\usepackage{textcomp}
\\usepackage[dvipsnames]{xcolor}
\\usepackage{tcolorbox}
\\usepackage{graphicx}
\\usepackage{enumitem}
\\usepackage{fancyhdr}
\\usepackage{titlesec}
\\usepackage{makeidx}
\\usepackage{tikz}
\\usetikzlibrary{arrows.meta,calc,patterns}
\\usepackage{multicol}
\\usepackage[letterspace=200]{microtype}
\\usepackage[paperwidth=${LARGEUR_MM}mm,paperheight=${HAUTEUR_MM}mm,%
            inner=${gouttiere}mm,outer=14mm,top=18mm,bottom=18mm,headheight=15pt]{geometry}
\\tcbuselibrary{skins,breakable}
\\makeindex
% hidelinks : sans ca, hyperref encadre en rouge le moindre \\href, y compris
% le lien de la quatrieme de couverture — la couleur du lien est geree a la
% main via \\color pour rester dans la charte. Charge en dernier par
% convention (apres tikz, tcolorbox, etc.).
\\usepackage[hidelinks]{hyperref}

${COULEURS_CHARTE}${MACROS_MARQUE}
% Les trois encadres qui existent aussi sur le site reprennent SA semantique,
% pas seulement ses teintes : definitions en secondaire (styles.css:1726),
% « A retenir » en accent (l. 2021), piege en erreur (l. 2047). Le manuel les
% avait interverties — un eleve qui passe du site au livre doit retrouver les
% memes codes couleur.
%
% coltitle est force partout : tcolorbox met du blanc par defaut, et sur le
% turquoise, le jaune et le rouge clair le blanc tombe sous 3:1. La charte dit
% d'ailleurs --on-accent: #1a1a1a, c'est-a-dire du texte sombre sur l'accent.
% Le filet du jaune est epaissi (1,2 pt) parce qu'un jaune lit plus clair a
% epaisseur egale — le site fait pareil, 2 px la ou les autres ont 1 px.
\\newtcolorbox{spdef}[1]{enhanced,breakable,colback=turquoise!8,colframe=turquoise,
  coltitle=encre,boxrule=0.9pt,arc=3pt,left=8pt,right=8pt,top=6pt,bottom=6pt,
  fonttitle=\\bfseries\\small,title={#1}}
\\newtcolorbox{spretenir}{enhanced,breakable,colback=jaune!12,colframe=jaune,
  coltitle=encre,boxrule=1.2pt,arc=3pt,left=8pt,right=8pt,top=6pt,bottom=6pt,
  fonttitle=\\bfseries\\small,title={À retenir}}
\\newtcolorbox{spexemple}{enhanced,breakable,colback=ardoise!5,colframe=ardoise,
  coltitle=white,boxrule=0.8pt,arc=3pt,left=8pt,right=8pt,
  fonttitle=\\bfseries\\small,title={Exemple résolu}}
\\newtcolorbox{sppiege}{enhanced,breakable,colback=erreur!10,colframe=erreur,
  coltitle=encre,boxrule=0.9pt,arc=3pt,left=8pt,right=8pt,
  fonttitle=\\bfseries\\small,title={Attention — l'erreur classique}}
\\newtcolorbox{spmethode}{enhanced,breakable,colback=papier,colframe=gris!60,
  coltitle=encre,boxrule=0.7pt,arc=3pt,left=8pt,right=8pt,
  fonttitle=\\bfseries\\small,title={Méthode}}
\\newtcolorbox{spprof}[1]{enhanced,breakable,colback=ardoise!7,colframe=ardoise!70,
  coltitle=white,boxrule=0.7pt,arc=3pt,left=8pt,right=8pt,
  fonttitle=\\bfseries\\small,title={#1}}

\\titleformat{\\chapter}[display]
  {\\normalfont\\huge\\bfseries\\color{ardoise}}
  {\\normalsize\\color{orfonce}\\MakeUppercase{Chapitre \\thechapter}}{8pt}{\\Huge}
\\titlespacing*{\\chapter}{0pt}{-18pt}{22pt}
\\titleformat{\\section}{\\large\\bfseries\\color{ardoise}}{\\thesection}{0.6em}{}
\\titleformat{\\subsection}{\\bfseries\\color{ardoise!85}}{\\thesubsection}{0.5em}{}

\\pagestyle{fancy}\\fancyhf{}
\\fancyhead[LE]{\\small\\color{gris}\\leftmark}
\\fancyhead[RO]{\\small\\color{gris}\\rightmark}
\\fancyfoot[C]{\\small\\color{gris}\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}
\\renewcommand{\\chaptermark}[1]{\\markboth{#1}{}}
\\renewcommand{\\sectionmark}[1]{\\markright{#1}}

\\setlist{itemsep=2pt,parsep=2pt,topsep=4pt}
\\widowpenalty=10000 \\clubpenalty=10000

% Un manuel comporte des figures et des espaces de reponse : mieux vaut un bas de
% page inegal qu'un etirement des blancs entre les blocs.
\\raggedbottom
% Filet de securite pour les rares lignes qui ne peuvent pas se couper proprement.
\\emergencystretch=3em

% Les versos laisses blancs ne doivent porter ni filet ni numero.
\\makeatletter
\\def\\cleardoublepage{\\clearpage\\if@twoside\\ifodd\\c@page\\else
  \\hbox{}\\thispagestyle{empty}\\newpage\\if@twocolumn\\hbox{}\\newpage\\fi\\fi\\fi}
\\makeatother

\\begin{document}
`;
}

/* « BTS » en sous-titre puis « Programme BTS » juste en dessous : la ligne de
   niveaux ne dit alors rien de plus et fait une redite sur le plat. En
   revanche « Remise a niveau • Programme BTS » apporte une information, donc
   on la garde : on ne coupe que la redite exacte. */
function niveauxUtiles(config) {
  const n = String(config.niveaux || '').trim();
  const s = String(config.sousTitre || '').trim();
  if (!n || n.replace(/^Programme\s+/i, '').trim() === s) return null;
  return n;
}

/* Un titre long ne peut pas se couper en plein mot sur un plat : « Fluides,
   Energies, Domotique » sortait en « Éner-gies » a 30 pt. On interdit la
   cesure dans le bloc de titre et on reduit le corps par paliers pour que le
   titre tienne dans les 14 cm utiles. */
function corpsTitre(titre) {
  const n = String(titre || '').length;
  if (n <= 16) return [30, 34];   // Mathématiques, Physique-Chimie
  if (n <= 24) return [25, 29];   // Sciences de l'ingénieur
  return [22, 26];                // Fluides, Énergies, Domotique
}

/* La puce pleine des donnees agglutine la ligne de niveaux a la taille ou
   elle est composee : on la remplace par un point median aere. Substitution
   de mise en page, faite ici — les donnees ne sont pas touchees. */
function ligneNiveaux(n) {
  return L(n).replace(/\s*\\textbullet\{\}\s*/g, '\\sparksep{}');
}

/* Le petit trait bicolore turquoise/jaune, motif recurrent de tout l'ouvrage :
   couverture, pages de titre, ouverture de partie. Une seule definition pour
   qu'un changement de style se propage partout au lieu de diverger page par
   page. `largeurCm` est la longueur totale, moitie turquoise moitie jaune. */
function traitBicolore(largeurCm) {
  const m = (largeurCm / 2).toFixed(2);
  return `\\begin{tikzpicture}\\draw[turquoise,line width=1.1pt](0,0)--(${m},0);` +
    `\\draw[jaune,line width=1.1pt](${m},0)--(${largeurCm},0);\\end{tikzpicture}`;
}

/* Chaque cle de `dossiers` (build.js) porte l'annee du cursus qu'elle couvre.
   La couverture v3 en tire la couleur du plat, donc cette table doit rester
   exhaustive : un dossier absent d'ici ferait tomber le plat sur la teinte de
   secours au lieu de planter, d'ou le controle explicite dans anneesDe(). */
const ANNEE_DE_DOSSIER = {
  '6e': '6e', '5e': '5e', '4e': '4e', '3e': '3e',
  'lycee-2nde': '2de', 'lycee-1re': '1re', 'lycee-tle': 'tle',
  'si-2nde': '2de', 'si-1re': '1re', 'si-tle': 'tle',
  'physique-4e': '4e', 'physique-3e': '3e',
  'physique-2nde': '2de', 'physique-1re': '1re', 'physique-tle': 'tle',
  'bts-prep': 'prepa', 'bts': 'bts', 'physique-bts': 'bts',
  'si-bts': 'bts', 'fed-bts': 'bts'
};

/* Le cursus complet de la matiere, pour l'echelle de pastilles : elle montre
   TOUTES les annees de la collection et remplit celles que le volume couvre.
   C'est ce qui fait lire une serie comme une serie plutot que comme un lot de
   volumes independants. La cle est celle de la collection, pas de l'ouvrage. */
const CURSUS = {
  'college': ['6e', '5e', '4e', '3e'],
  'lycee': ['2de', '1re', 'tle'],
  'bts': ['prepa', 'bts']
};

/* Le cursus depend AUSSI de la matiere, pas seulement de la famille : la
   physique-chimie ne commence qu'en quatrieme et n'a pas de remise a niveau
   post-bac. Sans cette correction, « Physique-Chimie BTS » affichait une
   pastille PRÉPA en contour, promettant un volume qui n'existe pas, et
   « Physique-Chimie College » proposait une sixieme et une cinquieme. */
const CURSUS_MATIERE = {
  'Physique': { 'college': ['4e', '3e'], 'bts': ['bts'] }
};

function cursusDe(collection, famille) {
  for (const [motif, table] of Object.entries(CURSUS_MATIERE)) {
    if (new RegExp(motif, 'i').test(String(collection || '')) && table[famille]) {
      return table[famille];
    }
  }
  return CURSUS[famille];
}

function anneesDe(config) {
  const d = config.dossiers || [];
  const a = d.map(x => ANNEE_DE_DOSSIER[x]).filter(Boolean);
  // Doublons possibles : deux dossiers d'une meme annee (jamais aujourd'hui,
  // mais un futur « 3e-approfondissement » les produirait).
  return a.filter((x, i) => a.indexOf(x) === i);
}

/* La famille de cursus se deduit des annees couvertes, pas du nom de la cle :
   un ouvrage « bts-maths » couvre prepa+bts, un « college-physique » 4e+3e. */
function familleDe(annees) {
  if (annees.some(a => ['prepa', 'bts'].includes(a))) return 'bts';
  if (annees.some(a => ['2de', '1re', 'tle'].includes(a))) return 'lycee';
  return 'college';
}

/* Le motif de discipline, tout en TikZ. Il remplace l'illustration matricielle
   de la v2 (657x943 px pour 170x244 mm, soit 98 dpi) : un plat imprime ne
   merite pas un raster, et le vectoriel supprime la question de la resolution.
   Un motif par MATIERE et non par niveau — c'est la couleur qui distingue les
   annees, le motif qui distingue les collections. */
function motifDiscipline(collection, c) {
  const m = String(collection || '');
  if (/Physique/i.test(m)) {
    return `    \\draw[turquoise!45!ardoise,line width=1.2pt,domain=8:162,smooth,samples=190,variable=\\x]
      plot ({\\x},{206+13*sin((\\x-8)*4.2)});
    \\draw[turquoise!25!ardoise,line width=0.5pt,dashed] (8,206)--(162,206);
    \\draw[jaune!48!ardoise,line width=1.2pt] (40,158) ellipse (6.5 and 24);
    \\draw[jaune!32!ardoise,line width=0.5pt,dashed] (8,158)--(120,158);
    \\foreach \\d in {-15,0,15}
      \\draw[${c}!62!ardoise,line width=0.8pt,-{Stealth[length=2.4mm]}]
        (8,{158+\\d}) -- (40,{158+\\d}) -- (92,158);
    \\fill[${c}!62!ardoise] (92,158) circle (1.2);
    \\draw[turquoise!45!ardoise,line width=1.1pt] (16,124) rectangle (66,100);
    \\fill[ardoise] (30,118) rectangle (50,130);
    \\draw[jaune!48!ardoise,line width=1.4pt] (37,124)--(37,134);
    \\draw[jaune!48!ardoise,line width=1.4pt] (45,118)--(45,130);
    \\fill[ardoise] (60,106) rectangle (72,118);
    \\draw[jaune!48!ardoise,line width=1.2pt] (60,106) rectangle (72,118);`;
  }
  if (/ingénieur|Génie|Domotique|Fluides/i.test(m)) {
    // SI et FED : une chaine d'energie plutot que des figures de geometrie.
    return `    \\foreach \\i/\\lab in {0/, 1/, 2/}
      \\draw[turquoise!45!ardoise,line width=1.1pt]
        ({18+\\i*50},150) rectangle ({58+\\i*50},178);
    \\foreach \\i in {0,1}
      \\draw[${c}!62!ardoise,line width=1pt,-{Stealth[length=2.6mm]}]
        ({58+\\i*50},164) -- ({68+\\i*50},164);
    \\draw[jaune!45!ardoise,line width=1pt,-{Stealth[length=2.6mm]}] (8,164)--(18,164);
    \\draw[jaune!45!ardoise,line width=1pt,-{Stealth[length=2.6mm]}] (158,164)--(168,164);
    \\draw[${c}!55!ardoise,line width=0.9pt] (88,206) circle (18);
    \\foreach \\a in {0,60,...,300}
      \\draw[${c}!55!ardoise,line width=0.9pt] ({88+18*cos(\\a)},{206+18*sin(\\a)})
        -- ({88+25*cos(\\a)},{206+25*sin(\\a)});
    \\draw[turquoise!42!ardoise,line width=1.1pt] (16,104)--(154,104);
    \\foreach \\i in {0,1,2,3}
      \\draw[turquoise!42!ardoise,line width=0.9pt] ({26+\\i*36},104)--({26+\\i*36},116);`;
  }
  return `    \\draw[${c}!55!ardoise,line width=0.9pt] (44,182) circle (26);
    \\fill[${c}!55!ardoise] (44,182) circle (1.1);
    \\draw[${c}!55!ardoise,line width=0.7pt,dashed] (44,182)--(62.4,200.4);
    \\node[text=${c}!55!ardoise,font=\\fontsize{9}{11}\\selectfont] at (56,188) {$r$};
    \\draw[turquoise!42!ardoise,line width=1.1pt,domain=8:162,smooth,samples=130,variable=\\x]
      plot ({\\x},{146+24*exp(-((\\x-110)/32)^2)});
    \\draw[jaune!45!ardoise,line width=1.1pt] (16,102)--(60,102)--(60,140)--cycle;
    \\draw[jaune!45!ardoise,line width=0.8pt] (54,102)--(54,108)--(60,108);
    \\node[text=jaune!38!ardoise,font=\\fontsize{19}{21}\\selectfont] at (130,210) {$\\pi$};
    \\node[text=${c}!45!ardoise,font=\\fontsize{16}{18}\\selectfont] at (16,212) {$\\sqrt{\\ }$};
    \\node[text=turquoise!38!ardoise,font=\\fontsize{14}{16}\\selectfont] at (98,212) {$\\times$};`;
}

/* La mascotte decroit avec le niveau : 76 mm au college, 46 mm au lycee,
   28 mm en BTS. Un manuel post-bac avec un renard en pleine page perd sa
   credibilite aupres d'un public adulte — c'est le seul argument qui compte
   ici, et il tranche la question du dosage.
   Sparky (renard) tient les mathematiques, Lumen (loup) la physique-chimie ;
   les deux jeux partagent la meme grille 1024x1024 avec un appui bas a
   ~120 px, d'ou le decalage de 0,117*hauteur qui pose les pieds sur le filet. */
const TAILLE_MASCOTTE = { college: 76, lycee: 46, bts: 28 };
const POSE_MASCOTTE = { college: 'sparky-felicite.png', lycee: 'sparky-reflechit.png', bts: 'sparky.png' };

function mascotteDe(config, famille) {
  const jeu = /Physique/i.test(String(config.collection || ''))
    ? config.mascotteLumen : config.mascotteSparky;
  if (!jeu) return null;
  const f = jeu[POSE_MASCOTTE[famille]];
  return f ? { fichier: f, hauteur: TAILLE_MASCOTTE[famille] } : null;
}

/* Le plat 1, compose UNE fois pour DEUX usages : la page de titre interieure
   et la couverture imprimeur qui part chez l'imprimeur. Les laisser diverger,
   c'est imprimer un livre dont la couverture ne dit pas ce que dit sa page de
   titre. Seuls les deux coins changent : la page de titre occupe la page
   entiere, la couverture imprimeur son plat de droite.

   Systeme v3 (valide le 2026-08-28) : une couleur par annee. Le bandeau de
   tete porte la teinte de l'annee, segmentee a parts egales quand le volume
   couvre plusieurs annees. La couleur etant prise par l'annee, la MATIERE se
   lit ailleurs : au motif, au libelle de collection et a la mascotte. */
function platUn(config, coinSO, coinNE) {
  const annees = anneesDe(config);
  const famille = familleDe(annees);
  const cursus = cursusDe(config.collection, famille);
  const solo = annees.length === 1;
  const [ct, ci] = corpsTitre(config.titre);
  const motifC = 'an' + (annees[annees.length - 1] || 'bts');
  // Sur un volume de cycle, aucune annee ne peut revendiquer le titre : le
  // niveau se compose en ardoise et ce sont le bandeau segmente et les
  // pastilles qui portent « toutes les couleurs ».
  const cNiveau = solo ? 'an' + annees[0] : 'ardoise';
  const masc = mascotteDe(config, famille);

  // Bandeau de tete : une bande par annee couverte, a parts egales.
  const pas = LARGEUR_MM / Math.max(annees.length, 1);
  const tete = annees.map((a, i) =>
    `  \\fill[an${a}] ([shift={(${(i * pas).toFixed(2)}mm,${HAUTEUR_MM - TETE_MM}mm)}]psw) rectangle ` +
    `([shift={(${((i + 1) * pas).toFixed(2)}mm,${HAUTEUR_MM}mm)}]psw);`).join('\n');

  // Echelle de niveaux : tout le cursus, les annees couvertes pleines.
  let x = 14;
  const pastilles = cursus.map(a => {
    const l = a === 'prepa' ? 24 : 17, x0 = x, cx = (x + l / 2).toFixed(1);
    x += l + 3;
    const lab = { '6e': '6\\textsuperscript{e}', '5e': '5\\textsuperscript{e}',
      '4e': '4\\textsuperscript{e}', '3e': '3\\textsuperscript{e}',
      '2de': '2\\textsuperscript{de}', '1re': '1\\textsuperscript{re}',
      'tle': 'T\\textsuperscript{le}', 'prepa': 'PRÉPA', 'bts': 'BTS' }[a];
    return annees.includes(a)
      ? `  \\fill[an${a},rounded corners=1.2mm] ([shift={(${x0}mm,43mm)}]psw) rectangle ([shift={(${x0 + l}mm,50mm)}]psw);
  \\node[anchor=center,text=white,font=\\bfseries\\fontsize{7.5}{9}\\selectfont] at ([shift={(${cx}mm,46.5mm)}]psw) {${lab}};`
      : `  \\draw[gris!45,rounded corners=1.2mm,line width=0.4pt] ([shift={(${x0}mm,43mm)}]psw) rectangle ([shift={(${x0 + l}mm,50mm)}]psw);
  \\node[anchor=center,text=gris,font=\\fontsize{7.5}{9}\\selectfont] at ([shift={(${cx}mm,46.5mm)}]psw) {${lab}};`;
  }).join('\n');

  // Sans ce marqueur, les PDF eleve et professeur porteraient le meme plat.
  // Onglet plein plutot que ligne coloree : l'orange #E67E22 sur le papier
  // #F8F9FA ne donne que 2,7:1, sous le seuil AA meme pour du texte large.
  // En reserve blanche sur aplat orange on remonte a 5,2:1, et un aplat reste
  // identifiable a la taille d'une vignette la ou un mot colore disparait.
  const onglet = config.professeur
    ? `  \\fill[orange] ([shift={(106mm,${BANDEAU_MM}mm)}]psw) rectangle ([shift={(${LARGEUR_MM}mm,${BANDEAU_MM + 15}mm)}]psw);
  \\node[anchor=center,text=white,font=\\bfseries\\fontsize{8}{10}\\selectfont]
    at ([shift={(138mm,${BANDEAU_MM + 7.5}mm)}]psw) {\\textls{ÉDITION DU PROFESSEUR}};`
    : '';

  return `  \\coordinate (psw) at (${coinSO});
  \\coordinate (pne) at (${coinNE});
  \\coordinate (pse) at (pne |- psw);
  \\coordinate (pnw) at (psw |- pne);
  \\begin{scope}
    \\clip (psw) rectangle (pne);
    \\fill[ardoise] (psw) rectangle (pne);
    \\begin{scope}[shift={(psw)},x=1mm,y=1mm]
    \\foreach \\g in {0,10,...,${LARGEUR_MM}}
      \\draw[${motifC}!20!ardoise,line width=0.3pt] (\\g,${BANDEAU_MM})--(\\g,${HAUTEUR_MM - TETE_MM});
    \\foreach \\g in {90,100,...,${HAUTEUR_MM - TETE_MM}}
      \\draw[${motifC}!20!ardoise,line width=0.3pt] (0,\\g)--(${LARGEUR_MM},\\g);
${motifDiscipline(config.collection, motifC)}
${masc ? `    % L'onglet du professeur occupe le coin bas-droit : la mascotte s'y
    % faisait recouvrir jusqu'au sommet du crane. Sur l'edition professeur
    % elle passe donc a gauche, ou le motif est le plus calme.
    \\node[anchor=south ${config.professeur ? 'west] at (10' : 'east] at (163'},${(BANDEAU_MM - 0.117 * masc.hauteur).toFixed(1)})
      {\\includegraphics[height=${masc.hauteur}mm]{${masc.fichier}}};` : ''}
    \\end{scope}
  \\end{scope}
${tete}
  \\node[anchor=west,inner sep=0pt] at ([shift={(14mm,${HAUTEUR_MM - TETE_MM / 2}mm)}]psw)
    {{\\sffamily\\fontsize{8}{10}\\selectfont\\bfseries\\textls{\\textcolor{white}{SPARK}\\hspace{0.9mm}\\textcolor{white}{LEARNING}}}};
  \\node[anchor=east,text=white,font=\\sffamily\\fontsize{6.5}{8}\\selectfont,inner sep=0pt]
    at ([shift={(156mm,${HAUTEUR_MM - TETE_MM / 2}mm)}]psw) {\\textls{${L(String(config.collection || '').toUpperCase())}}};
  \\fill[papier] (psw) rectangle ([yshift=${BANDEAU_MM}mm]pse);
  \\draw[turquoise,line width=1.6pt]
    ([yshift=${BANDEAU_MM - 0.8}mm]psw) -- ([shift={(85mm,${BANDEAU_MM - 0.8}mm)}]psw);
  \\draw[jaune,line width=1.6pt]
    ([shift={(85mm,${BANDEAU_MM - 0.8}mm)}]psw) -- ([yshift=${BANDEAU_MM - 0.8}mm]pse);
${onglet}
  % text width + hyphenpenalty : « Fluides, Énergies, Domotique » sortait en
  % « Éner-gies » a 30 pt. On borne la largeur utile et on interdit la cesure.
  \\node[anchor=north west,text=ardoise,text width=142mm,align=left,
    font=\\sffamily\\bfseries\\fontsize{${ct}}{${ci}}\\selectfont,inner sep=0pt]
    at ([shift={(14mm,80mm)}]psw) {\\hyphenpenalty=10000\\exhyphenpenalty=10000 ${L(config.titre)}};
  \\node[anchor=north west,text=${cNiveau},font=\\sffamily\\bfseries\\fontsize{25}{28}\\selectfont,inner sep=0pt]
    at ([shift={(14mm,62mm)}]psw) {${L(config.sousTitre)}};
${pastilles}
  \\draw[gris!35,line width=0.4pt] ([shift={(14mm,37mm)}]psw) -- ([shift={(156mm,37mm)}]psw);
  \\node[anchor=north west,text=ardoise,font=\\sffamily\\fontsize{8.5}{12}\\selectfont,text width=104mm,inner sep=0pt]
    at ([shift={(14mm,33mm)}]psw) {${L(config.mention)}.${config.nbChapitres
      ? ` ${config.nbChapitres} chapitres.` : ''}};
  \\node[anchor=south west,text=gris,font=\\sffamily\\fontsize{8}{10}\\selectfont,inner sep=0pt]
    at ([shift={(14mm,12mm)}]psw) {${AUTEUR_LIGNE}};
${config.qrCode ? `  \\node[anchor=south east,inner sep=0pt] at ([shift={(156mm,10mm)}]psw)
    {\\includegraphics[width=15mm]{${config.qrCode}}};
  \\node[anchor=south east,text=gris,font=\\sffamily\\fontsize{6.8}{8.5}\\selectfont,align=right,inner sep=0pt]
    at ([shift={(136mm,13mm)}]psw) {Tout le cours en ligne,\\\\gratuit --- sparklearning.fr};` : ''}`;
}

function couverture(config) {
  return `\\begin{titlepage}
\\thispagestyle{empty}
\\begin{tikzpicture}[remember picture,overlay]
${platUn(config, 'current page.south west', 'current page.north east')}
\\end{tikzpicture}
\\end{titlepage}
`;
}

function liminaires(config) {
  const n = config.nbChapitres;
  const prof = config.professeur;
  return `\\frontmatter
\\thispagestyle{empty}
\\vspace*{5cm}
\\begin{center}
${config.logoIcone ? `\\includegraphics[width=2.3cm]{${config.logoIcone}}\\\\[7mm]\n` : ''}{\\Large\\color{ardoise}\\bfseries ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[4mm]
${traitBicolore(2.6)}\\\\[6mm]
{\\color{ardoise}\\large ${AUTEUR_LIGNE}}\\\\[6mm]
{\\color{gris}\\itshape ${L(config.mention)}}
\\end{center}
\\cleardoublepage

\\thispagestyle{empty}
% Page de copyright : le pave se cale EN PIED, comme dans l'edition courante.
% Un \\fill de chaque cote le centrait verticalement — il flottait au milieu
% d'une page par ailleurs vide (audit du 2026-08-16). Le trait bicolore sous
% le titre reprend celui de la couverture et de la page de titre : sans lui
% la page se resumait a du texte gris uniforme, plus austere que le reste du
% front-matter une fois celui-ci illustre (audit du 2026-08-17).
\\vspace*{\\fill}
\\noindent{\\small\\color{gris}
\\textbf{${L(config.titre)} --- ${L(config.sousTitre)}}${prof ? ' --- Édition du professeur' : ''}\\\\[3mm]
${traitBicolore(2.0)}\\\\[3mm]
${L(config.collection)}, Spark Learning.\\\\[2mm]
% « couvrant l'intégralité du programme » etait une ALLEGATION COMMERCIALE, et
% elle etait fausse : le croisement du 2026-08-16 avec docs/programmes-maths.md
% montre que « Fonctions affines et lineaires » (3e) n'est traite nulle part.
% La ligne enonce desormais un fait verifiable. A ne remonter en revendication
% de couverture qu'une fois le chapitre manquant ecrit.
%
% « de la sixieme a la troisieme » etait fige ici depuis l'epoque ou
% college-maths etait le seul ouvrage teste : chaque config OUVRAGES porte
% deja son propre champ niveaux (« Seconde », « Programme BTS »...), jamais
% relu a cet endroit precis. Trouve independamment le 2026-08-20 par deux
% agents de relecture Phase 4 differents (lycee-physique-tle, lycee-physique-
% 2nde) sur la page de copyright d'un livre Terminale/Seconde qui affirmait
% « de la sixieme a la troisieme » — faux, contredit la 4e de couverture et
% le sommaire du meme livre. Vraisemblablement present sur tout le catalogue
% hors college depuis l'extension du pipeline au lycee/BTS.
${n} chapitres --- ${L(config.niveaux || '')}.\\\\[4mm]
Auteur : \\textbf{${AUTEUR}}, enseignant, formateur et ingénieur.\\\\[2mm]
Première édition --- ${config.annee}.\\\\
Dépôt légal : ${config.annee}.\\\\[4mm]
\\textcopyright{} ${config.annee} ${AUTEUR}. Tous droits de reproduction, de traduction et
d'adaptation réservés pour tous pays.
Les schémas et les énoncés d'exercices sont originaux.\\\\[4mm]
Composé en Latin Modern. Figures vectorielles.
}
\\cleardoublepage

\\chapter*{Avant-propos}
\\addcontentsline{toc}{chapter}{Avant-propos}
\\markboth{Avant-propos}{Avant-propos}

${config.avantPropos}
\\cleardoublepage

\\chapter*{Comment utiliser ce manuel}
\\addcontentsline{toc}{chapter}{Comment utiliser ce manuel}
\\markboth{Comment utiliser ce manuel}{Comment utiliser ce manuel}

Chaque chapitre suit toujours la même organisation. Une fois que tu l'as comprise, tu
peux naviguer dans n'importe quel chapitre sans hésiter.\\\\[3mm]

% Les quatre couleurs citees doivent correspondre EXACTEMENT au colframe des
% quatre tcolorbox du preambule (spdef, spexemple, spretenir, sppiege) : ce
% texte etait fausse jusqu'au 2026-08-17 (bleu/vert/rouge/jaune annonces,
% turquoise/ardoise/jaune/rouge reels) — un eleve cherchant "l'encadre rouge"
% pour les formules serait tombe sur le piege a la place. Le mot est colore
% dans la teinte reelle de la boite ; les accents clairs (turquoise, jaune)
% sont assombris pour rester lisibles en texte, meme regle que sur la
% couverture (l'accent jaune brut est illisible en texte, cf. styles.css:3982).
\\begin{description}[leftmargin=0pt,style=nextline,itemsep=5pt]
  \\item[Découvrir] La question de départ, en langage courant. À lire avant tout le reste.
  \\item[Définitions] Les termes exacts, encadrés en \\textcolor{turquoise!55!black}{turquoise}.
    Ce sont les mots qu'il faut employer.
  \\item[Méthode] La marche à suivre, décomposée en étapes numérotées.
  \\item[Exemple résolu] Un cas traité entièrement, encadré en \\textcolor{ardoise}{gris ardoise},
    avec le détail des calculs.
  \\item[À retenir] Les formules du chapitre, encadrées en \\textcolor{orfonce}{jaune}.
    C'est le minimum à mémoriser.
  \\item[Schéma] La figure du chapitre, accompagnée de sa lecture pas à pas.
  \\item[Points clés] Le résumé, à relire juste avant un contrôle.
  \\item[Attention] L'erreur la plus fréquente sur cette notion, encadrée en
    \\textcolor{erreur!65!black}{rouge}.
  \\item[Exercices] Trois exercices d'application, chacun avec un coup de pouce si tu bloques.
  \\item[Quiz] Des questions à choix multiples pour vérifier que la notion est comprise.
  \\item[Problème de synthèse] Un exercice plus long, qui combine plusieurs idées.
  \\item[Évaluation] Un devoir noté, avec son barème et sa durée.
\\end{description}

\\vspace{4mm}
\\noindent Les réponses aux exercices figurent en fin d'ouvrage, ainsi qu'un formulaire
récapitulatif et un index des notions.
\\cleardoublepage

% Chapitre seul : les 9 sous-parties (Decouvrir, Definitions, Methode...) sont
% identiques d'un chapitre a l'autre et deja detaillees juste au-dessus. Les
% lister aussi ici faisait passer la table de 3 a 13 pages pour 49 chapitres,
% avant meme le premier chapitre (audit du 2026-08-17).
\\setcounter{tocdepth}{0}
\\tableofcontents
\\cleardoublepage
\\mainmatter
`;
}

/* Page d'ouverture de partie : le titre du niveau et la liste numerotee de ses
   chapitres, pour que l'eleve voie d'emblee le chemin qu'il va parcourir. */
function ouverturePartie(titre, chapitres) {
  const liste = (chapitres || []).map(c =>
    `\\noindent\\makebox[1.1cm][l]{\\color{orfonce}\\bfseries ${c.numero}.}${L(c.titre)}\\par\\vspace{2.2mm}`
  ).join('\n');
  // \part composerait sa propre page et renverrait la liste sur la suivante :
  // on fabrique la page nous-memes pour tout tenir ensemble.
  return `\\cleardoublepage
\\thispagestyle{empty}
\\refstepcounter{part}
\\addcontentsline{toc}{part}{\\thepart\\hspace{1em}${L(titre)}}
\\markboth{${L(titre)}}{${L(titre)}}
\\vspace*{3.2cm}
\\begin{center}
  {\\color{gris}\\small\\MakeUppercase{Partie \\thepart}}\\par\\vspace{4mm}
  {\\color{ardoise}\\fontsize{30}{34}\\selectfont\\bfseries ${L(titre)}}\\par\\vspace{7mm}
  ${traitBicolore(5.4)}
\\end{center}
\\vspace{12mm}
${liste}
\\cleardoublepage
`;
}

function finOuvrage(chapitres, config) {
  const o = ['\\backmatter'];

  o.push('\\chapter{Formulaire}', '\\markboth{Formulaire}{Formulaire}',
    '\\noindent Toutes les formules du manuel, chapitre par chapitre.\\par\\vspace{4mm}');
  for (const { mod, numero } of chapitres) {
    const f = mod.cours && mod.cours.formulas;
    if (!f || !f.length) continue;
    o.push(`\\noindent\\textbf{\\small ${numero}. ${L(mod.title)}}\\par\\vspace{1mm}`);
    o.push('\\begin{itemize}\n' + f.map(x => '  \\item ' + L(x)).join('\n') + '\n\\end{itemize}',
      '\\vspace{2mm}');
  }

  o.push('\\chapter{Réponses aux exercices}',
    '\\markboth{Réponses aux exercices}{Réponses aux exercices}',
    "\\noindent Vérifie ton résultat ici. Si tu ne trouves pas la même chose, reprends le",
    "coup de pouce de l'exercice avant de regarder la méthode du chapitre.\\par\\vspace{4mm}",
    '\\begin{multicols}{2}\\small');
  for (const { mod, numero, exercices } of chapitres) {
    const visibles = exercices.slice(0, config.exercicesVisibles || 3);
    if (!visibles.length) continue;
    o.push(`\\noindent\\textbf{${numero}. ${L(mod.title)}}\\par\\nopagebreak`);
    visibles.forEach((ex, i) => {
      o.push(`\\noindent ${numero}.${i + 1} --- $${nombreFr(ex.answer)}$ ${L(ex.unit || '')}\\par`);
    });
    o.push('\\vspace{2mm}');
  }
  o.push('\\end{multicols}');

  o.push('\\cleardoublepage', '\\addcontentsline{toc}{chapter}{Index des notions}',
    '\\markboth{Index des notions}{Index des notions}',
    '\\renewcommand{\\indexname}{Index des notions}', '\\printindex');

  // Trame et logo repris de platUn() : sans eux, la derniere page tombait a
  // plat sur un aplat ardoise nu apres un front-matter desormais illustre —
  // meme defaut que releve sur le bandeau clair de la couverture, symetrique
  // en fin d'ouvrage (audit du 2026-08-17). Le logo sert de colophon.
  o.push('\\cleardoublepage', '\\thispagestyle{empty}',
    '\\begin{tikzpicture}[remember picture,overlay]',
    '  \\fill[ardoise] (current page.south west) rectangle (current page.north east);',
    '  \\begin{scope}',
    '    \\clip (current page.south west) rectangle (current page.north east);',
    // « turquoise!12 » seul se mixe au BLANC par defaut (convention xcolor) :
    // sur un aplat clair ca reste discret, mais sur l'ardoise sombre de cette
    // page ca ressortait comme une grille claire tres visible. Il faut donner
    // le second melangeur explicitement pour rester sombre-sur-sombre.
    '    \\foreach \\g in {0,10,...,170}',
    '      \\draw[turquoise!15!ardoise,line width=0.3pt] ([xshift=\\g mm]current page.south west) --' +
      ' ([xshift=\\g mm]current page.north west);',
    '    \\foreach \\g in {0,10,...,244}',
    '      \\draw[turquoise!15!ardoise,line width=0.3pt] ([yshift=\\g mm]current page.south west) --' +
      ' ([yshift=\\g mm]current page.south east);',
    '  \\end{scope}',
    '  \\node[anchor=north,text width=12.4cm,align=left] at ([yshift=-3cm]current page.north) {\\sffamily',
    `    {\\color{jaune}\\bfseries\\large ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[5mm]`,
    `    {\\color{white}\\normalsize ${L(config.accroche)}}\\\\[7mm]`,
    "    {\\color{white}\\small Chaque chapitre part d'une question concrète, décompose la méthode",
    "    en étapes, traite un exemple en entier, puis propose des exercices, un quiz, un problème",
    "    de synthèse et une évaluation notée avec son barème.}\\\\[5mm]",
    "    {\\color{white}\\small Un formulaire complet, les réponses aux exercices et un index des",
    "    notions figurent en fin d'ouvrage.}\\\\[9mm]",
    `    {\\color{white}\\small\\mbox{${AUTEUR_LIGNE}}}\\\\[5mm]`,
    `    {\\color{jaune}\\small\\itshape Spark Learning --- ${L(config.collection)}}`,
    '  };',
    // QR pour qui tient un exemplaire imprime, lien cliquable pour qui lit a
    // l'ecran — les deux pointent vers la meme adresse (audit du 2026-08-17,
    // demande explicite : le PDF est numerique d'abord, mais un lecteur peut
    // toujours l'imprimer).
    config.qrCode ? `  \\node[anchor=south] at ([yshift=5.6cm]current page.south) {
    \\begin{tabular}{c@{\\hspace{4mm}}l}
      \\includegraphics[width=1.9cm]{${config.qrCode}} &
      \\raisebox{0.65cm}{\\sffamily\\small\\href{https://sparklearning.fr/}{\\color{white}sparklearning.fr}}
    \\end{tabular}
  };` : '',
    config.logoIcone ? `  \\node[anchor=south] at ([yshift=2cm]current page.south)
    {\\includegraphics[width=1.8cm]{${config.logoIcone}}};` : '',
    '\\end{tikzpicture}');

  o.push('\\end{document}');
  return o.join('\n');
}

/* Couverture separee exigee par l'impression a la demande : dos + plats,
   largeur totale = 2 plats + dos, hauteur = hauteur du livre. */
function couvertureSeparee(config) {
  const dos = largeurDosMm(config.pages);
  const largeur = LARGEUR_MM * 2 + dos;
  return `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}
\\usepackage[T1]{fontenc}
\\usepackage{montserrat}
\\usepackage[french]{babel}
\\usepackage[dvipsnames]{xcolor}
\\usepackage{tikz}
\\usepackage{graphicx}
\\usetikzlibrary{arrows.meta,calc,patterns}
\\usepackage[letterspace=200]{microtype}
\\usepackage[paperwidth=${largeur}mm,paperheight=${HAUTEUR_MM}mm,margin=0pt]{geometry}
${COULEURS_CHARTE}${MACROS_MARQUE}\\pagestyle{empty}
\\begin{document}
\\begin{tikzpicture}[remember picture,overlay]
  \\fill[ardoise] (current page.south west) rectangle (current page.north east);
  % Plat 4 (gauche). Compose en Montserrat comme le plat 1 : les deux faces
  % d'une meme couverture ne peuvent pas etre dans deux polices.
  \\node[anchor=north west,text width=13.6cm,align=left]
    at ([shift={(1.7cm,-3cm)}]current page.north west) {\\sffamily
    {\\color{jaune}\\bfseries\\large ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[5mm]
    {\\color{white}\\normalsize ${L(config.accroche)}}\\\\[7mm]
    {\\color{white}\\small Cours, méthodes, exercices corrigés, quiz et évaluations notées.}\\\\[7mm]
    {\\color{jaune}\\small\\mbox{${AUTEUR_LIGNE}}}
  };
  \\node[anchor=south west,text width=13.6cm,align=left]
    at ([shift={(1.7cm,2.2cm)}]current page.south west) {
    \\sparkmarque\\\\[1.5mm]
    {\\sffamily\\color{white!70}\\scriptsize ${L(config.collection)}}
  };
  % Dos : ${dos} mm pour ${config.pages} pages. Le titre au centre, la marque
  % au pied — disposition habituelle en librairie, ou le dos est ce qu'on voit.
  \\node[rotate=-90,anchor=center]
    at ([xshift=${(LARGEUR_MM + dos / 2).toFixed(1)}mm]current page.west)
    {\\sffamily\\color{white}\\small ${L(config.titre)} --- ${L(config.sousTitre)}};
  \\node[rotate=-90,anchor=center]
    at ([shift={(${(LARGEUR_MM + dos / 2).toFixed(1)}mm,-9.2cm)}]current page.west)
    {\\sparkmarque};
  % Plat 1 (droite) : le MEME plat que la page de titre interieure, cale sur
  % les 170 mm de droite de la feuille.
${platUn(config,
  '[xshift=-' + LARGEUR_MM + 'mm]current page.south east',
  'current page.north east')}
\\end{tikzpicture}
\\end{document}
`;
}

module.exports = {
  preambule, couverture, liminaires, ouverturePartie, finOuvrage,
  couvertureSeparee, gouttierePourPages, largeurDosMm,
  // Exportee pour que planche.js ne redeclare pas la palette a la main :
  // deux listes de couleurs recopiees finissent toujours par diverger.
  COULEURS_CHARTE
};
