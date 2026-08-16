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

function preambule(config) {
  const gouttiere = config.gouttiere || 20;
  return `\\documentclass[11pt,openany]{book}
\\usepackage[utf8]{inputenc}
\\usepackage{lmodern}          % polices vectorielles : sans elles, microtype
\\usepackage[T1]{fontenc}      % echoue (expansion impossible sur du bitmap)
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
\\usepackage{multicol}
\\usepackage{microtype}
\\usepackage[paperwidth=${LARGEUR_MM}mm,paperheight=${HAUTEUR_MM}mm,%
            inner=${gouttiere}mm,outer=14mm,top=18mm,bottom=18mm,headheight=15pt]{geometry}
\\tcbuselibrary{skins,breakable}
\\makeindex

\\definecolor{encre}{HTML}{16202A}
\\definecolor{ardoise}{HTML}{2C3E50}
\\definecolor{ormat}{HTML}{C9A227}
\\definecolor{turquoise}{HTML}{18806F}
\\definecolor{grenat}{HTML}{B03A2E}
\\definecolor{gris}{HTML}{5C6873}
\\definecolor{papier}{HTML}{F7F5F0}

\\newtcolorbox{spdef}[1]{enhanced,breakable,colback=ardoise!4,colframe=ardoise,
  boxrule=0.9pt,arc=2pt,left=8pt,right=8pt,top=6pt,bottom=6pt,
  fonttitle=\\bfseries\\small,title={#1}}
\\newtcolorbox{spretenir}{enhanced,breakable,colback=grenat!4,colframe=grenat,
  boxrule=0.9pt,arc=2pt,left=8pt,right=8pt,top=6pt,bottom=6pt,
  fonttitle=\\bfseries\\small,title={À retenir}}
\\newtcolorbox{spexemple}{enhanced,breakable,colback=turquoise!5,colframe=turquoise,
  boxrule=0.8pt,arc=2pt,left=8pt,right=8pt,fonttitle=\\bfseries\\small,
  title={Exemple résolu}}
\\newtcolorbox{sppiege}{enhanced,breakable,colback=ormat!12,colframe=ormat!85!black,
  boxrule=0.8pt,arc=2pt,left=8pt,right=8pt,fonttitle=\\bfseries\\small,
  title={Attention — l'erreur classique}}
\\newtcolorbox{spmethode}{enhanced,breakable,colback=papier,colframe=gris!60,
  boxrule=0.7pt,arc=2pt,left=8pt,right=8pt,fonttitle=\\bfseries\\small,
  title={Méthode}}
\\newtcolorbox{spprof}[1]{enhanced,breakable,colback=ardoise!7,colframe=ardoise!70,
  boxrule=0.7pt,arc=2pt,left=8pt,right=8pt,fonttitle=\\bfseries\\small,title={#1}}

\\titleformat{\\chapter}[display]
  {\\normalfont\\huge\\bfseries\\color{ardoise}}
  {\\normalsize\\color{ormat}\\MakeUppercase{Chapitre \\thechapter}}{8pt}{\\Huge}
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

% Les versos laisses blancs ne doivent porter ni filet ni numero.
\\makeatletter
\\def\\cleardoublepage{\\clearpage\\if@twoside\\ifodd\\c@page\\else
  \\hbox{}\\thispagestyle{empty}\\newpage\\if@twocolumn\\hbox{}\\newpage\\fi\\fi\\fi}
\\makeatother

\\begin{document}
`;
}

function couverture(config) {
  const prof = config.professeur;
  return `\\begin{titlepage}
\\thispagestyle{empty}
\\begin{tikzpicture}[remember picture,overlay]
  \\node[inner sep=0pt] at (current page.center)
    {\\includegraphics[width=\\paperwidth,height=\\paperheight]{${config.illustration}}};
  \\node[anchor=north,text width=15.4cm,align=center] at ([yshift=-2.1cm]current page.north) {
    {\\fontsize{13}{15}\\selectfont\\color{ormat}\\bfseries\\MakeUppercase{Spark Learning}}\\\\[2mm]
    {\\fontsize{9}{11}\\selectfont\\color{white}\\MakeUppercase{${L(config.collection)}}}
  };
  \\node[anchor=south,text width=15.4cm,align=center] at ([yshift=2.4cm]current page.south) {
    {\\fontsize{34}{38}\\selectfont\\color{white}\\bfseries ${L(config.titre)}}\\\\[3mm]
    {\\fontsize{20}{24}\\selectfont\\color{ormat}\\bfseries ${L(config.sousTitre)}}\\\\[6mm]
    {\\fontsize{10.5}{13}\\selectfont\\color{white}\\mbox{${L(config.niveaux)}}}\\\\[4mm]
    {\\fontsize{10}{13}\\selectfont\\color{white}\\itshape ${L(config.mention)}${prof ? ' --- édition du professeur' : ''}}
  };
\\end{tikzpicture}
\\end{titlepage}
`;
}

function liminaires(config) {
  const n = config.nbChapitres;
  const prof = config.professeur;
  return `\\frontmatter
\\thispagestyle{empty}
\\vspace*{6cm}
\\begin{center}
{\\Large\\color{ardoise}\\bfseries ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[4mm]
{\\color{gris}\\itshape ${L(config.mention)}}
\\end{center}
\\cleardoublepage

\\thispagestyle{empty}
\\vspace*{\\fill}
\\noindent{\\small\\color{gris}
\\textbf{${L(config.titre)} --- ${L(config.sousTitre)}}${prof ? ' --- Édition du professeur' : ''}\\\\[2mm]
${L(config.collection)}, Spark Learning.\\\\[2mm]
${n} chapitres couvrant l'intégralité du programme.\\\\[4mm]
Première édition --- ${config.annee}.\\\\
ISBN : \\textit{à attribuer}\\\\
Dépôt légal : ${config.annee}.\\\\[4mm]
Tous droits de reproduction, de traduction et d'adaptation réservés pour tous pays.
Les schémas et les énoncés d'exercices sont originaux.\\\\[4mm]
Composé en Latin Modern. Figures vectorielles.
}
\\vspace*{\\fill}
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

\\begin{description}[leftmargin=0pt,style=nextline,itemsep=5pt]
  \\item[Découvrir] La question de départ, en langage courant. À lire avant tout le reste.
  \\item[Définitions] Les termes exacts, encadrés en bleu. Ce sont les mots qu'il faut employer.
  \\item[Méthode] La marche à suivre, décomposée en étapes numérotées.
  \\item[Exemple résolu] Un cas traité entièrement, encadré en vert, avec le détail des calculs.
  \\item[À retenir] Les formules du chapitre, encadrées en rouge. C'est le minimum à mémoriser.
  \\item[Schéma] La figure du chapitre, accompagnée de sa lecture pas à pas.
  \\item[Points clés] Le résumé, à relire juste avant un contrôle.
  \\item[Attention] L'erreur la plus fréquente sur cette notion, encadrée en jaune.
  \\item[Exercices] Trois exercices d'application, chacun avec un coup de pouce si tu bloques.
  \\item[Quiz] Des questions à choix multiples pour vérifier que la notion est comprise.
  \\item[Problème de synthèse] Un exercice plus long, qui combine plusieurs idées.
  \\item[Évaluation] Un devoir noté, avec son barème et sa durée.
\\end{description}

\\vspace{4mm}
\\noindent Les réponses aux exercices figurent en fin d'ouvrage, ainsi qu'un formulaire
récapitulatif et un index des notions.
\\cleardoublepage

\\tableofcontents
\\cleardoublepage
\\mainmatter
`;
}

function ouverturePartie(titre) {
  return `\\part{${L(titre)}}\n`;
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

  o.push('\\cleardoublepage', '\\thispagestyle{empty}',
    '\\begin{tikzpicture}[remember picture,overlay]',
    '  \\fill[ardoise] (current page.south west) rectangle (current page.north east);',
    '  \\node[anchor=north,text width=12.4cm,align=left] at ([yshift=-3cm]current page.north) {',
    `    {\\color{ormat}\\bfseries\\large ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[5mm]`,
    `    {\\color{white}\\normalsize ${L(config.accroche)}}\\\\[7mm]`,
    "    {\\color{white}\\small Chaque chapitre part d'une question concrète, décompose la méthode",
    "    en étapes, traite un exemple en entier, puis propose des exercices, un quiz, un problème",
    "    de synthèse et une évaluation notée avec son barème.}\\\\[5mm]",
    "    {\\color{white}\\small Un formulaire complet, les réponses aux exercices et un index des",
    "    notions figurent en fin d'ouvrage.}\\\\[9mm]",
    `    {\\color{ormat}\\small\\itshape Spark Learning --- ${L(config.collection)}}`,
    '  };',
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
\\usepackage[french]{babel}
\\usepackage[dvipsnames]{xcolor}
\\usepackage{graphicx}
\\usepackage{tikz}
\\usepackage[paperwidth=${largeur}mm,paperheight=${HAUTEUR_MM}mm,margin=0pt]{geometry}
\\definecolor{ardoise}{HTML}{2C3E50}
\\definecolor{ormat}{HTML}{C9A227}
\\pagestyle{empty}
\\begin{document}
\\begin{tikzpicture}[remember picture,overlay]
  \\fill[ardoise] (current page.south west) rectangle (current page.north east);
  % Plat 4 (gauche)
  \\node[anchor=north west,text width=13.6cm,align=left]
    at ([shift={(1.7cm,-3cm)}]current page.north west) {
    {\\color{ormat}\\bfseries\\large ${L(config.titre)} --- ${L(config.sousTitre)}}\\\\[5mm]
    {\\color{white}\\normalsize ${L(config.accroche)}}\\\\[7mm]
    {\\color{white}\\small Cours, méthodes, exercices corrigés, quiz et évaluations notées.}
  };
  % Dos : ${dos} mm pour ${config.pages} pages
  \\node[rotate=-90,anchor=center]
    at ([xshift=${(LARGEUR_MM + dos / 2).toFixed(1)}mm]current page.west)
    {\\color{white}\\small ${L(config.titre)} --- ${L(config.sousTitre)}};
  % Plat 1 (droite)
  \\node[anchor=north east,inner sep=0pt]
    at (current page.north east)
    {\\includegraphics[width=${LARGEUR_MM}mm,height=${HAUTEUR_MM}mm]{${config.illustration}}};
\\end{tikzpicture}
\\end{document}
`;
}

module.exports = {
  preambule, couverture, liminaires, ouverturePartie, finOuvrage,
  couvertureSeparee, gouttierePourPages, largeurDosMm
};
