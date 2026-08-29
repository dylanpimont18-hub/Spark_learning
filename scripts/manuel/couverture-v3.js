/* Generateur de couvertures « proposition v3 » — une couleur par annee.

   Systeme demande : chaque annee du cursus porte sa propre couleur, et un
   volume de cycle (College, Lycee, BTS) rassemble les couleurs des annees
   qu'il contient. La matiere n'est donc plus portee par la couleur : elle
   l'est par le motif, le libelle de collection et la mascotte — Sparky le
   renard sur les mathematiques, Lumen le loup sur la physique-chimie.

   Ce script est autonome : il n'ecrit rien dans le pipeline de production et
   depose tout dans « Manuel scolaire/couvertures-propositions/ ».

   Usage : node scripts/manuel/couverture-v3.js [cle ...]
*/

const fs = require('fs');
const path = require('path');
const cp = require('child_process');

const RACINE = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(RACINE, 'Manuel scolaire');
const SORTIE = path.join(SOURCE, 'couvertures-propositions');
const PDFLATEX = process.env.PDFLATEX || 'C:/Program Files/MiKTeX/miktex/bin/x64/pdflatex.exe';
const PDFTOPPM = process.env.PDFTOPPM || 'C:/Program Files/MiKTeX/miktex/bin/x64/pdftoppm.exe';

const LARGEUR_MM = 170, HAUTEUR_MM = 244;
const BANDEAU_MM = 92;   // bandeau clair du bas
const TETE_MM = 20;      // bandeau de couleur en tete

function img(rel) {
  const p = path.join(RACINE, rel);
  return fs.existsSync(p) ? p.replace(/\\/g, '/') : null;
}
const QR = img('images/manuels/qr-sparklearning.png');

/* ---------------------------------------------------------------- couleurs
   Une teinte par annee, assombrie jusqu'a passer 4,5:1 en texte blanc ET en
   texte sur le papier #F8F9FA. C'est la contrainte qui interdit les jaunes
   et les verts clairs : une couleur d'annee sert a la fois d'aplat et de
   typographie, elle doit tenir les deux usages. */
// `larg` est en millimetres et se donne a la main : la deduire de la longueur
// de `court` reviendrait a mesurer du code LaTeX (« 6\textsuperscript{e} »
// fait vingt caracteres pour deux glyphes) et les pastilles se chevauchent.
const ANNEE = {
  '6e':    { nom: 'Sixième',         court: '6\\textsuperscript{e}',  larg: 17, hex: 'C0392B' },
  '5e':    { nom: 'Cinquième',       court: '5\\textsuperscript{e}',  larg: 17, hex: '96600B' },
  '4e':    { nom: 'Quatrième',       court: '4\\textsuperscript{e}',  larg: 17, hex: '2E7D32' },
  '3e':    { nom: 'Troisième',       court: '3\\textsuperscript{e}',  larg: 17, hex: '10796B' },
  '2de':   { nom: 'Seconde',         court: '2\\textsuperscript{de}', larg: 17, hex: '1F6FB2' },
  '1re':   { nom: 'Première',        court: '1\\textsuperscript{re}', larg: 17, hex: '3F4A9E' },
  'tle':   { nom: 'Terminale',       court: 'T\\textsuperscript{le}', larg: 17, hex: '7B2D8E' },
  // Terre de Sienne et non un gris-bleu : sur l'ardoise #2C3E50 du fond, un
  // gris desature faisait disparaitre le bandeau de tete, et l'eclaircir
  // aurait fait tomber le texte blanc sous 4,5:1. Le post-bac forme ainsi une
  // famille chaude (terre + or) face au lycee froid (bleu, indigo, violet).
  'prepa': { nom: 'Remise à niveau', court: 'PRÉPA',                  larg: 24, hex: '7A4E2A' },
  'bts':   { nom: 'BTS',             court: 'BTS',                    larg: 17, hex: '8C6D1F' }
};

const CURSUS = {
  'maths-college': ['6e', '5e', '4e', '3e'],
  'maths-lycee':   ['2de', '1re', 'tle'],
  'maths-bts':     ['prepa', 'bts'],
  'phys-college':  ['4e', '3e'],
  'phys-lycee':    ['2de', '1re', 'tle'],
  'phys-bts':      ['bts']
};

/* Mascotte : le renard sur les maths, le loup sur la physique-chimie. Les
   deux jeux de sprites partagent la meme grille (1024x1024, appui bas a
   ~120 px) — c'est ce qui permet de les caler avec la meme formule. */
const MASCOTTE = {
  maths: rel => img('images/mascotte/' + rel),
  phys:  rel => img('tiktok/.travail/lumen/sprites/' + rel)
};
// Poses presentes dans LES DEUX jeux : « encourage » n'existe que chez Sparky.
const POSE = { college: 'sparky-felicite.png', lycee: 'sparky-reflechit.png', bts: 'sparky.png' };
const TAILLE = { college: 76, lycee: 46, bts: 28 };

const OUVRAGES = [
  { cle: 'college-maths',       mat: 'maths', fam: 'college', annees: ['6e', '5e', '4e', '3e'] },
  { cle: 'college-maths-6e',    mat: 'maths', fam: 'college', annees: ['6e'] },
  { cle: 'college-maths-5e',    mat: 'maths', fam: 'college', annees: ['5e'] },
  { cle: 'college-maths-4e',    mat: 'maths', fam: 'college', annees: ['4e'] },
  { cle: 'college-maths-3e',    mat: 'maths', fam: 'college', annees: ['3e'] },
  { cle: 'lycee-maths',         mat: 'maths', fam: 'lycee',   annees: ['2de', '1re', 'tle'] },
  { cle: 'lycee-maths-2nde',    mat: 'maths', fam: 'lycee',   annees: ['2de'] },
  { cle: 'lycee-maths-1re',     mat: 'maths', fam: 'lycee',   annees: ['1re'] },
  { cle: 'lycee-maths-tle',     mat: 'maths', fam: 'lycee',   annees: ['tle'] },
  { cle: 'bts-maths',           mat: 'maths', fam: 'bts',     annees: ['prepa', 'bts'] },
  { cle: 'bts-maths-prep',      mat: 'maths', fam: 'bts',     annees: ['prepa'] },
  { cle: 'college-physique',    mat: 'phys',  fam: 'college', annees: ['4e', '3e'] },
  { cle: 'college-physique-4e', mat: 'phys',  fam: 'college', annees: ['4e'] },
  { cle: 'college-physique-3e', mat: 'phys',  fam: 'college', annees: ['3e'] },
  { cle: 'lycee-physique',      mat: 'phys',  fam: 'lycee',   annees: ['2de', '1re', 'tle'] },
  { cle: 'lycee-physique-2nde', mat: 'phys',  fam: 'lycee',   annees: ['2de'] },
  { cle: 'lycee-physique-1re',  mat: 'phys',  fam: 'lycee',   annees: ['1re'] },
  { cle: 'lycee-physique-tle',  mat: 'phys',  fam: 'lycee',   annees: ['tle'] },
  { cle: 'bts-physique',        mat: 'phys',  fam: 'bts',     annees: ['bts'] }
];

const TITRE = { maths: 'Mathématiques', phys: 'Physique-Chimie' };
const CORPS_TITRE = { maths: 33, phys: 31 };
const COLLECTION = { maths: 'COLLECTION MATHÉMATIQUES', phys: 'COLLECTION PHYSIQUE-CHIMIE' };
const SOUS_TITRE_CYCLE = { college: 'Collège', lycee: 'Lycée', bts: 'BTS' };

/* Volumetrie reelle, lue dans l'etat du build de production. Un chiffre faux
   sur une couverture coute plus cher que pas de chiffre du tout : quand
   l'etat manque, la ligne se compose sans volumetrie. */
function volumetrie(cle) {
  const p = path.join(SOURCE, cle, 'etat-eleve.json');
  if (!fs.existsSync(p)) return null;
  try {
    const j = JSON.parse(fs.readFileSync(p, 'utf8'));
    return { chapitres: (j.chapitres || []).length, pages: j.pages || 0 };
  } catch (e) { return null; }
}

/* --------------------------------------------------------------- motifs
   Un motif par matiere, pas un par niveau : c'est la couleur qui distingue
   les annees. Tout est vectoriel — la question des 98 dpi de l'illustration
   actuelle disparait par construction. */
function motifMaths(c) {
  // Trois objets, trois bandes horizontales distinctes : le cercle en haut a
  // gauche, la courbe au milieu a droite, le triangle en pied. Ils se
  // superposaient tous les trois dans la moitie gauche a la premiere version.
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
function motifPhysique(c) {
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

/* ------------------------------------------------------------------ plat */
function plat(o) {
  const annees = o.annees;
  const cursus = CURSUS[o.mat + '-' + o.fam];
  const solo = annees.length === 1;
  const sousTitre = solo ? ANNEE[annees[0]].nom : SOUS_TITRE_CYCLE[o.fam];
  // Sur un volume de cycle aucune annee ne peut revendiquer le titre : le
  // niveau se compose en ardoise et ce sont le bandeau segmente et les
  // pastilles qui portent « toutes les couleurs ».
  const couleurNiveau = solo ? 'a' + annees[0].replace(/[^a-z0-9]/g, '') : 'ardoise';
  const vol = volumetrie(o.cle);
  const mascotte = MASCOTTE[o.mat](POSE[o.fam]);
  const h = TAILLE[o.fam];

  const defs = Object.entries(ANNEE)
    .map(([k, v]) => `\\definecolor{a${k.replace(/[^a-z0-9]/g, '')}}{HTML}{${v.hex}}`).join('\n');

  // Bandeau de tete : une bande par annee couverte, largeurs egales.
  const pas = LARGEUR_MM / annees.length;
  const tete = annees.map((a, i) =>
    `  \\fill[a${a.replace(/[^a-z0-9]/g, '')}] (${(i * pas).toFixed(2)},${HAUTEUR_MM - TETE_MM})` +
    ` rectangle (${((i + 1) * pas).toFixed(2)},${HAUTEUR_MM});`).join('\n');

  // Echelle de niveaux : tout le cursus de la matiere, les annees couvertes
  // pleines dans LEUR couleur. C'est la ou la serie se lit comme une serie.
  const ECART = 3;
  let x = 14;
  const pastilles = cursus.map(a => {
    const c = 'a' + a.replace(/[^a-z0-9]/g, '');
    const l = ANNEE[a].larg, lab = ANNEE[a].court, cx = (x + l / 2).toFixed(1), x0 = x;
    x += l + ECART;
    return annees.includes(a)
      ? `  \\fill[${c},rounded corners=1.2mm] (${x0},43) rectangle ++(${l},7);
  \\node[anchor=center,text=white,font=\\bfseries\\fontsize{7.5}{9}\\selectfont] at (${cx},46.5) {${lab}};`
      : `  \\draw[gris!45,rounded corners=1.2mm,line width=0.4pt] (${x0},43) rectangle ++(${l},7);
  \\node[anchor=center,text=gris,font=\\fontsize{7.5}{9}\\selectfont] at (${cx},46.5) {${lab}};`;
  }).join('\n');

  const promesse = vol
    ? `${vol.chapitres} chapitres \\textperiodcentered{} ${vol.pages} pages \\textperiodcentered{} quiz et évaluations notées.`
    : 'Cours, méthodes, exercices corrigés, quiz et évaluations notées.';

  const teinteMotif = 'a' + annees[annees.length - 1].replace(/[^a-z0-9]/g, '');
  const motif = o.mat === 'maths' ? motifMaths(teinteMotif) : motifPhysique(teinteMotif);

  return `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{montserrat}
\\usepackage[french]{babel}
\\usepackage{xcolor}
\\usepackage{tikz}
\\usepackage{graphicx}
\\usetikzlibrary{arrows.meta,calc}
\\usepackage[letterspace=200]{microtype}
\\usepackage[paperwidth=${LARGEUR_MM}mm,paperheight=${HAUTEUR_MM}mm,margin=0pt]{geometry}
\\renewcommand{\\familydefault}{\\sfdefault}
\\definecolor{ardoise}{HTML}{2C3E50}
\\definecolor{turquoise}{HTML}{48C9B0}
\\definecolor{jaune}{HTML}{F4D03F}
\\definecolor{papier}{HTML}{F8F9FA}
\\definecolor{gris}{HTML}{6C757D}
${defs}
\\pagestyle{empty}
\\begin{document}
\\begin{tikzpicture}[remember picture,overlay,x=1mm,y=1mm]
\\coordinate (O) at (current page.south west);
\\begin{scope}[shift={(O)}]
  \\begin{scope}
    \\clip (0,0) rectangle (${LARGEUR_MM},${HAUTEUR_MM});
    \\fill[ardoise] (0,${BANDEAU_MM}) rectangle (${LARGEUR_MM},${HAUTEUR_MM});
    \\foreach \\g in {0,10,...,${LARGEUR_MM}}
      \\draw[${teinteMotif}!20!ardoise,line width=0.3pt] (\\g,${BANDEAU_MM})--(\\g,${HAUTEUR_MM - TETE_MM});
    \\foreach \\g in {90,100,...,${HAUTEUR_MM - TETE_MM}}
      \\draw[${teinteMotif}!20!ardoise,line width=0.3pt] (0,\\g)--(${LARGEUR_MM},\\g);
${motif}
${mascotte ? `    \\node[anchor=south east,inner sep=0pt] at (163,${(BANDEAU_MM - 0.117 * h).toFixed(1)})
      {\\includegraphics[height=${h}mm]{${mascotte}}};` : ''}
  \\end{scope}
${tete}
  \\node[anchor=west,inner sep=0pt] at (14,${HAUTEUR_MM - TETE_MM / 2})
    {{\\fontsize{8}{10}\\selectfont\\bfseries\\textls{\\textcolor{white}{SPARK}\\hspace{0.9mm}\\textcolor{white}{LEARNING}}}};
  \\node[anchor=east,text=white,font=\\fontsize{6.5}{8}\\selectfont,inner sep=0pt]
    at (156,${HAUTEUR_MM - TETE_MM / 2}) {\\textls{${COLLECTION[o.mat]}}};
  \\fill[papier] (0,0) rectangle (${LARGEUR_MM},${BANDEAU_MM});
  \\draw[turquoise,line width=1.6pt] (0,${BANDEAU_MM - 0.8})--(85,${BANDEAU_MM - 0.8});
  \\draw[jaune,line width=1.6pt] (85,${BANDEAU_MM - 0.8})--(${LARGEUR_MM},${BANDEAU_MM - 0.8});
  \\node[anchor=north west,text=ardoise,font=\\bfseries\\fontsize{${CORPS_TITRE[o.mat]}}{${CORPS_TITRE[o.mat] + 3}}\\selectfont,inner sep=0pt]
    at (14,80) {${TITRE[o.mat]}};
  \\node[anchor=north west,text=${couleurNiveau},font=\\bfseries\\fontsize{25}{28}\\selectfont,inner sep=0pt]
    at (14,62) {${sousTitre}};
${pastilles}
  \\draw[gris!35,line width=0.4pt] (14,37)--(156,37);
  \\node[anchor=north west,text=ardoise,font=\\fontsize{8.5}{12}\\selectfont,text width=104mm,inner sep=0pt]
    at (14,33) {\\textbf{Conforme au programme officiel.}\\\\[1.4mm]${promesse}};
  \\node[anchor=south west,text=gris,font=\\fontsize{8}{10}\\selectfont,inner sep=0pt]
    at (14,12) {Dylan Pimont --- enseignant, formateur et ingénieur};
${QR ? `  \\node[anchor=south east,inner sep=0pt] at (156,10) {\\includegraphics[width=15mm]{${QR}}};
  \\node[anchor=south east,text=gris,font=\\fontsize{6.8}{8.5}\\selectfont,align=right,inner sep=0pt]
    at (136,13) {Tout le cours en ligne,\\\\gratuit --- sparklearning.fr};` : ''}
\\end{scope}
\\end{tikzpicture}
\\end{document}
`;
}

/* -------------------------------------------------------------- compilation
   Deux passes, non negociable : « remember picture » resout les ancres de
   page au second passage. Le garde-fou qui suit est la lecon du dossier de
   production, ou neuf jaquettes sur dix-neuf sont sorties blanches faute
   d'une seconde passe — un PDF vide pese moins de 40 ko. */
const SEUIL_OCTETS = 40000;

function compiler(cle) {
  const dossier = SORTIE;
  for (let i = 0; i < 2; i++) {
    cp.spawnSync(PDFLATEX, ['-interaction=nonstopmode', cle + '.tex'],
      { cwd: dossier, encoding: 'utf8', timeout: 300000 });
  }
  const pdf = path.join(dossier, cle + '.pdf');
  const log = fs.readFileSync(path.join(dossier, cle + '.log'), 'utf8');
  const erreurs = log.match(/^! .*$/gm) || [];
  if (erreurs.length) return { ok: false, motif: erreurs[0] };
  if (!fs.existsSync(pdf)) return { ok: false, motif: 'aucun PDF produit' };
  const taille = fs.statSync(pdf).size;
  if (taille < SEUIL_OCTETS) return { ok: false, motif: `PDF suspect (${taille} o) — page probablement vide` };
  cp.spawnSync(PDFTOPPM, ['-png', '-r', '300', '-f', '1', '-l', '1', '-singlefile',
    cle + '.pdf', cle], { cwd: dossier, encoding: 'utf8', timeout: 300000 });
  return { ok: true, taille };
}

/* Planche de contact : c'est a plusieurs couvertures cote a cote qu'on juge
   une collection, jamais sur un exemplaire isole. */
function planche(cles) {
  const cols = 5, l = 52, gx = 6, gy = 8;
  const lignes = [];
  for (let i = 0; i < cles.length; i += cols) {
    const rang = cles.slice(i, i + cols);
    lignes.push(rang.map(c =>
      `\\begin{minipage}[t]{${l}mm}\\includegraphics[width=${l}mm]{${c}.pdf}\\\\[1mm]` +
      `{\\tiny\\color{gris}\\texttt{${c.replace(/_/g, '\\_')}}}\\end{minipage}`).join(`\\hspace{${gx}mm}`));
  }
  return `\\documentclass{article}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage{montserrat}
\\usepackage[french]{babel}
\\usepackage{xcolor}
\\usepackage{graphicx}
\\usepackage[paperwidth=320mm,paperheight=${20 + 16 + Math.ceil(cles.length / cols) * (l * HAUTEUR_MM / LARGEUR_MM + gy + 4)}mm,margin=10mm]{geometry}
\\renewcommand{\\familydefault}{\\sfdefault}
\\definecolor{ardoise}{HTML}{2C3E50}
\\definecolor{gris}{HTML}{6C757D}
\\pagestyle{empty}\\setlength{\\parindent}{0pt}
\\begin{document}
{\\color{ardoise}\\bfseries\\Large Spark Learning --- proposition de couvertures v3}\\\\[1mm]
{\\color{gris}\\small Une couleur par année. Les volumes de cycle portent toutes les couleurs des années qu'ils contiennent.}\\\\[6mm]
${lignes.join(`\\\\[${gy}mm]\n`)}
\\end{document}
`;
}

/* Note de lecture destinee a la personne qui juge : sans le principe, une
   planche de dix-neuf couvertures se lit comme dix-neuf variantes, alors
   que c'est un systeme qu'on lui demande d'evaluer. */
function lisezMoi(cles) {
  const legende = Object.entries(ANNEE)
    .map(([, v]) => `| ${v.nom} | \`#${v.hex}\` |`).join('\n');
  return `# Spark Learning — proposition de couvertures (v3)

${cles.length} couvertures, format 170 × 244 mm, PDF vectoriel + PNG 300 dpi.
Commencer par \`planche-contact.pdf\` : une collection se juge de face, en série.

## Le principe

**Une couleur par année.** Chaque année du cursus a sa teinte propre, et un
volume de cycle (Collège, Lycée, BTS) porte en bandeau de tête toutes les
couleurs des années qu'il contient — le bandeau est segmenté à parts égales.
L'échelle de pastilles sous le niveau rappelle le cursus complet, la ou les
années couvertes étant pleines.

| Année | Teinte |
|---|---|
${legende}

Chaque teinte a été assombrie jusqu'à passer 4,5:1 (WCAG AA) à la fois en
texte blanc sur l'aplat et en texte de couleur sur le fond papier — c'est la
contrainte qui interdit ici les jaunes et les verts clairs.

**La matière n'est donc plus portée par la couleur** (l'année la prend) mais
par trois autres signes : le motif géométrique (maths) ou physique (ondes,
lentille, circuit), le libellé de collection en tête, et la mascotte —
**Sparky le renard sur les mathématiques, Lumen le loup sur la
physique-chimie**.

**La mascotte décroît avec le niveau** : 76 mm au collège, 46 mm au lycée,
28 mm en BTS. Un manuel post-bac avec un renard en pleine page perd sa
crédibilité auprès d'un public adulte.

## Ce sur quoi un avis est utile

1. La lecture en série : reconnaît-on une collection, et retrouve-t-on son
   année d'un coup d'œil sur une vignette de boutique ?
2. Le choix des neuf teintes, et l'ordre dans lequel elles se suivent.
3. Le dosage des mascottes, en particulier la marche collège → lycée.
4. Le bandeau clair du bas : hiérarchie titre / niveau / promesses.

## Détails techniques

Tout est vectoriel : aucun aplat n'est une image matricielle, les motifs sont
tracés en TikZ. Les chiffres annoncés (chapitres, pages) sont ceux des
ouvrages réellement compilés, pas des valeurs de maquette.
`;
}

function main() {
  const filtre = process.argv.slice(2);
  const liste = filtre.length ? OUVRAGES.filter(o => filtre.includes(o.cle)) : OUVRAGES;
  fs.mkdirSync(SORTIE, { recursive: true });

  const ok = [], ko = [];
  for (const o of liste) {
    fs.writeFileSync(path.join(SORTIE, o.cle + '.tex'), plat(o), 'utf8');
    const r = compiler(o.cle);
    if (r.ok) { ok.push(o.cle); console.log('  OK   ' + o.cle + '  (' + Math.round(r.taille / 1024) + ' ko)'); }
    else { ko.push(o.cle); console.log('  ECHEC ' + o.cle + ' : ' + r.motif); }
  }

  if (ok.length) {
    fs.writeFileSync(path.join(SORTIE, 'planche-contact.tex'), planche(ok), 'utf8');
    for (let i = 0; i < 2; i++) {
      cp.spawnSync(PDFLATEX, ['-interaction=nonstopmode', 'planche-contact.tex'],
        { cwd: SORTIE, encoding: 'utf8', timeout: 300000 });
    }
    cp.spawnSync(PDFTOPPM, ['-png', '-r', '150', '-f', '1', '-l', '1', '-singlefile',
      'planche-contact.pdf', 'planche-contact'], { cwd: SORTIE, encoding: 'utf8', timeout: 300000 });
    fs.writeFileSync(path.join(SORTIE, 'LISEZ-MOI.md'), lisezMoi(ok), 'utf8');
  }

  // Les intermediaires LaTeX n'ont rien a faire dans un dossier qu'on envoie.
  for (const f of fs.readdirSync(SORTIE)) {
    if (/\.(aux|log|out)$/.test(f)) fs.unlinkSync(path.join(SORTIE, f));
  }

  console.log('\n' + ok.length + ' couverture(s) produite(s), ' + ko.length + ' en echec.');
  console.log('Dossier : ' + SORTIE);
  if (ko.length) process.exitCode = 1;
}

if (require.main === module) main();
module.exports = { OUVRAGES, ANNEE, CURSUS, plat, volumetrie };
