/* =========================================================
   Spark Learning – scripts/manuel/chapitre.js
   Compose un module en un chapitre LaTeX, en edition eleve ou
   professeur. Ne connait ni la maquette du livre ni ses reglages
   d'impression : c'est ouvrage.js qui s'en charge.
   ========================================================= */

const { versLatex: L, nombreFr, definirOrigine } = require('./latex.js');
const { figureUtilisable } = require('./figures.js');

/* Espace de reponse pour l'edition eleve. Le \par est indispensable : sans lui,
   le filet pleine largeur reste dans le paragraphe precedent et le fait deborder
   de plusieurs centaines de points dans la marge.

   L'espace est BORNE et ANNONCE. Un simple \vspace suivi d'un filet se lit comme
   un defaut de composition (« pourquoi ce trou au milieu de la page ? ») et non
   comme une invitation a ecrire : releve de l'audit du 2026-08-16, ou un tiers
   de page vide entre deux exercices passait pour un bug de mise en page. */
function espaceReponse(hauteurCm) {
  return `\\par\\vspace{2mm}\\noindent{\\footnotesize\\color{gris}\\itshape Ta réponse :}` +
    `\\par\\vspace{1mm}\\noindent\\textcolor{gris!45}{\\rule{\\textwidth}{0.4pt}}` +
    `\\par\\vspace{${hauteurCm}cm}` +
    `\\noindent\\textcolor{gris!45}{\\rule{\\textwidth}{0.4pt}}\\par\\vspace{4mm}`;
}

/* --- Visuels generes depuis les donnees du module ----------------------
   Ils sont justes par construction : rien n'est invente, on ne fait que
   donner une forme graphique a ce que le chapitre contient deja. */

/* Libelle court d'une etape : le premier segment en gras, sinon le texte
   avant le premier deux-points. Renvoie null si rien d'assez court. */
function libelleEtape(etape) {
  const gras = /<strong>([^<]{2,32})<\/strong>/.exec(String(etape));
  if (gras) return gras[1].replace(/\s*:\s*$/, '').trim();
  const nu = String(etape).replace(/<[^>]*>/g, '').replace(/\$[^$]*\$/g, '');
  const tete = nu.split(/[:.]/)[0].trim();
  return tete.length >= 2 && tete.length <= 32 ? tete : null;
}

/* Frise de la methode : chaine d'etapes numerotees, 3 par ligne. */
function friseMethode(mod) {
  const steps = (mod.cours.method && mod.cours.method.steps) || [];
  const labels = steps.map(libelleEtape).filter(Boolean);
  if (labels.length < 2) return '';

  const PAR_LIGNE = 3, DX = 4.5, DY = 1.9;
  const noeuds = [], fleches = [];
  labels.forEach((lab, i) => {
    const col = i % PAR_LIGNE, lig = Math.floor(i / PAR_LIGNE);
    noeuds.push(`\\node[etape] (e${i}) at (${(col * DX).toFixed(2)},${(-lig * DY).toFixed(2)}) ` +
      `{\\textbf{${i + 1}.} ${L(lab)}};`);
    if (i > 0 && col !== 0) fleches.push(`\\draw[fleche] (e${i - 1}) -- (e${i});`);
    else if (i > 0) fleches.push(`\\draw[fleche] (e${i - 1}.south) |- ++(0,-0.45) -| (e${i}.north);`);
  });

  return ['\\begin{center}',
    '\\begin{tikzpicture}[',
    '  etape/.style={draw=ardoise!55, fill=ardoise!7, rounded corners=2pt,',
    '    text width=3.1cm, align=center, font=\\scriptsize, minimum height=1.05cm, inner sep=3pt},',
    '  fleche/.style={-{Latex[length=1.8mm]}, ardoise!55, semithick}]',
    ...noeuds, ...fleches,
    '\\end{tikzpicture}',
    '\\end{center}'].join('\n');
}

/* Bareme de l'evaluation : barre horizontale proportionnelle aux points.

   Une seule teinte, claire, et un texte en encre. La version precedente faisait
   tourner trois gris (25/47/69) et ecrivait en BLANC dessus : sur ardoise!25 le
   libelle passait sous 1,5:1 de contraste, et le degrade laissait croire a un
   codage (« Q3 compte plus ») alors que seule la LARGEUR porte l'information. */
function baremeVisuel(evaluation) {
  const qs = evaluation.questions || [];
  const total = qs.reduce((s, q) => s + (q.points || 0), 0);
  if (!total || qs.length < 2) return '';
  const LARGEUR = 12;
  let x = 0;
  const blocs = qs.map((q, i) => {
    const w = (q.points || 0) / total * LARGEUR;
    const bloc = `\\fill[ardoise!18] (${x.toFixed(2)},0) rectangle ` +
      `(${(x + w).toFixed(2)},0.52);\n` +
      `\\draw[ardoise!45, line width=0.3pt] (${x.toFixed(2)},0) rectangle ` +
      `(${(x + w).toFixed(2)},0.52);\n` +
      `\\node[font=\\tiny, encre] at (${(x + w / 2).toFixed(2)},0.26) {Q${i + 1}};`;
    x += w;
    return bloc;
  });
  return ['\\begin{center}', '\\begin{tikzpicture}', ...blocs,
    `\\draw[ardoise!60] (0,0) rectangle (${LARGEUR},0.52);`,
    `\\node[font=\\tiny\\itshape, gris, anchor=west] at (0,-0.32) ` +
    `{Répartition des ${total} points sur les ${qs.length} questions};`,
    '\\end{tikzpicture}', '\\end{center}'].join('\n');
}

function liste(valeurs, env = 'itemize') {
  const a = Array.isArray(valeurs) ? valeurs : (valeurs == null ? [] : [valeurs]);
  if (!a.length) return '';
  return `\\begin{${env}}\n` + a.map(x => '  \\item ' + L(x)).join('\n') + `\n\\end{${env}}`;
}

/* Valeur + unite, sans espace fantome quand l'unite est absente. Concatener
   « $3$ » et une unite vide laissait « $3$ », espace comprise, et le corrige
   des evaluations s'imprimait « Corrigé (3 ) » — 83 fois dans college-maths. */
function reponseInline(valeur, unite) {
  return [`$${nombreFr(valeur)}$`, L(unite || '')].filter(Boolean).join(' ');
}

/* --- Couche professeur -------------------------------------------------
   Objectifs et prerequis ne figurent pas dans les donnees : ils sont
   deduits du contenu reel du chapitre (definitions, methode, prerequis
   implicites du niveau), jamais inventes hors de ce que le module traite.

   CES DEUX FONCTIONS RENVOIENT DU TEXTE BRUT, JAMAIS DU LATEX. C'est
   `liste()` qui convertit, une fois et une seule. Les avoir fait convertir
   elles aussi produisait une DOUBLE conversion : le `\ensuremath{\to}` du
   premier passage repassait a l'echappement du second, ou `\` devient
   `\textbackslash{}` puis ou les accolades de ce `{}` sont a leur tour
   echappees — le livre imprimait « \{}ensuremath{\{}to} » en clair
   (chapitres 2 et 26 de college-maths, audit du 2026-08-16). */

function objectifs(mod) {
  const c = mod.cours;
  const buts = [];
  if (c.method && Array.isArray(c.method.steps) && c.method.steps.length) {
    buts.push('Appliquer la méthode en ' + c.method.steps.length + ' étapes présentée dans le chapitre.');
  }
  // Un objectif par definition donnait autant de puces quasi identiques
  // (« Definir et employer correctement : Fraction. » trois fois de suite).
  // Le verbe est le meme pour toutes : c'est la liste qui varie.
  if (Array.isArray(c.definitions)) {
    const termes = c.definitions.slice(0, 4).map(d => d && d.term).filter(Boolean);
    if (termes.length) {
      buts.push('Définir et employer correctement le vocabulaire du chapitre : ' +
        termes.join(', ') + '.');
    }
  }
  if (Array.isArray(c.formulas) && c.formulas.length) {
    buts.push('Mobiliser de mémoire les ' + c.formulas.length + ' relations du bloc « À retenir ».');
  }
  if (mod.probleme) buts.push('Traiter un problème combinant plusieurs de ces notions.');
  return buts;
}

function prerequis(mod) {
  const listes = [];
  if (mod.keywords && mod.keywords.length) {
    listes.push('Vocabulaire déjà rencontré : ' + mod.keywords.join(', ') + '.');
  }
  if (mod.physics) listes.push('Prolongement possible : ' + mod.physics + '.');
  listes.push('Aisance avec le calcul numérique du niveau précédent.');
  return listes;
}

/* --- Chapitre ---------------------------------------------------------- */

function composerChapitre(mod, exercices, options) {
  const opts = options || {};
  const prof = !!opts.professeur;
  const fig = opts.figure;
  const c = mod.cours;
  const o = [];

  definirOrigine(mod.id);

  o.push(`\\chapter{${L(mod.title)}}`);
  if (mod.subtitle) o.push(`\\noindent{\\color{gris}\\itshape ${L(mod.subtitle)}}\\par\\vspace{3mm}`);
  if (mod.keywords && mod.keywords.length) {
    o.push(mod.keywords.map(k => `\\index{${L(k)}}`).join(''));
  }

  if (prof) {
    o.push('\\begin{spprof}{Pour l\'enseignant}',
      '\\textbf{Objectifs visés}', liste(objectifs(mod)),
      '\\medskip\\noindent\\textbf{Prérequis}', liste(prerequis(mod)),
      mod.evaluation ? `\\medskip\\noindent\\textbf{Évaluation fournie} : ${L(mod.evaluation.duration)}, ` +
        `${mod.evaluation.questions.reduce((s, q) => s + (q.points || 0), 0)} points.` : '',
      '\\end{spprof}', '');
  }

  o.push('\\section{Découvrir}', L(c.intro), '');

  if (c.definitions && c.definitions.length) {
    o.push('\\section{Définitions}');
    for (const d of c.definitions) {
      o.push(`\\begin{spdef}{${L(d.term)}}\n${L(d.def)}\n\\end{spdef}`, '');
    }
  }

  if (c.method) {
    o.push('\\section{Méthode}', '');
    const frise = friseMethode(mod);
    if (frise) o.push(frise, '');
    o.push('\\begin{spmethode}',
      `\\textbf{${L(c.method.title || 'Marche à suivre')}}\\par\\vspace{2mm}`,
      liste(c.method.steps, 'enumerate'), '\\end{spmethode}', '');
  }

  if (c.example) {
    o.push('\\begin{spexemple}', L(c.example.statement), '',
      liste(c.example.steps, 'enumerate'), '',
      `\\medskip\\noindent\\textbf{Réponse :} ${L(c.example.answer)}`, '\\end{spexemple}', '');
  }

  if (c.formulas && c.formulas.length) {
    o.push('\\begin{spretenir}', liste(c.formulas), '\\end{spretenir}', '');
  }

  if (c.diagram && figureUtilisable(fig)) {
    o.push('\\section{Schéma}');
    if (c.diagram.description) o.push('\\noindent ' + L(c.diagram.description), '');
    o.push('\\begin{figure}[h!]\\centering',
      fig.tikz,
      `\\caption{${L(c.diagram.caption || c.diagram.title || mod.title)}}`,
      '\\end{figure}');
    if (c.diagram.notes) o.push(liste(c.diagram.notes), '');
    if (c.diagram.reading) {
      o.push(`\\noindent\\textbf{Comment lire ce schéma.} ${L(c.diagram.reading)}\\par\\vspace{3mm}`, '');
    }
  }

  if (c.recap && c.recap.length) o.push('\\section{Points clés}', liste(c.recap), '');
  if (c.piege) o.push('\\begin{sppiege}', L(c.piege), '\\end{sppiege}', '');

  /* Exercices — l'edition eleve porte les 3 premiers ; l'edition professeur
     les corrige tous et ajoute la banque supplementaire. */
  const visibles = exercices.slice(0, opts.exercicesVisibles || 3);
  const banque = exercices.slice(opts.exercicesVisibles || 3);

  o.push('\\section{Exercices}');
  visibles.forEach((ex, i) => {
    o.push(`\\subsection*{Exercice \\thechapter.${i + 1}}`,
      `\\label{ex:${mod.id}:${i + 1}}`, L(ex.statement), '');
    o.push(`\\noindent{\\small\\color{gris}\\textbf{Coup de pouce.} ${L(ex.hint)}}\\par\\vspace{2mm}`);
    if (prof) {
      o.push('\\begin{spexemple}', liste(ex.solution, 'enumerate'),
        `\\medskip\\noindent\\textbf{Réponse :} ${reponseInline(ex.answer, ex.unit)}`,
        '\\end{spexemple}', '');
    } else {
      o.push(espaceReponse(2.6), '');
    }
  });

  if (prof && banque.length) {
    o.push('\\subsection*{Banque d\'exercices supplémentaires}',
      '\\noindent{\\small\\color{gris}Ces énoncés ne figurent pas dans l\'édition élève : ' +
      'ils servent aux devoirs, à la remédiation ou aux groupes avancés.}\\par\\vspace{3mm}');
    banque.forEach((ex, i) => {
      o.push(`\\noindent\\textbf{Supplément \\thechapter.${i + 1}} --- ` + L(ex.statement), '');
      o.push('\\begin{spexemple}', liste(ex.solution, 'enumerate'),
        `\\medskip\\noindent\\textbf{Réponse :} ${reponseInline(ex.answer, ex.unit)}`,
        '\\end{spexemple}', '');
    });
  }

  if (mod.quiz && mod.quiz.length) {
    o.push('\\section{Quiz}');
    mod.quiz.forEach((q, i) => {
      o.push(`\\subsection*{Question ${i + 1}}`, L(q.q), '');
      o.push('\\begin{enumerate}[label=\\Alph*.]');
      q.options.forEach(op => o.push('  \\item ' + L(op)));
      o.push('\\end{enumerate}');
      o.push(prof
        ? `\\noindent\\textbf{Réponse : ${String.fromCharCode(65 + q.answer)}.} ${L(q.correction)}\\par\\vspace{3mm}`
        : '');
    });
  }

  if (mod.probleme) {
    o.push('\\section{Problème de synthèse}', L(mod.probleme.context), '',
      liste(mod.probleme.tasks, 'enumerate'), '');
    if (prof) {
      o.push('\\begin{spexemple}', liste(mod.probleme.solutions, 'enumerate'),
        `\\medskip\\noindent\\textbf{Réponse finale :} ${L(mod.probleme.finalAnswer)}`,
        '\\end{spexemple}', '');
    } else o.push('\\vspace{5cm}', '');
  }

  if (mod.evaluation) {
    const ev = mod.evaluation;
    const total = ev.questions.reduce((s, q) => s + (q.points || 0), 0);
    o.push('\\section{Évaluation}',
      `\\noindent{\\small\\color{gris}\\textbf{Durée :} ${L(ev.duration)} \\hfill \\textbf{Barème :} ${total} points}\\par\\vspace{3mm}`, '');
    const bareme = baremeVisuel(ev);
    if (bareme) o.push(bareme, '');
    ev.questions.forEach((q, i) => {
      o.push(`\\subsection*{Question ${i + 1} \\hfill \\normalfont\\small ${q.points} pts}`, L(q.statement), '');
      if (q.type === 'multiple-choice' && q.options) {
        o.push('\\begin{enumerate}[label=\\Alph*.]');
        q.options.forEach(op => o.push('  \\item ' + L(op)));
        o.push('\\end{enumerate}');
      } else if (!prof) o.push('', espaceReponse(2));
      if (prof) {
        const rep = q.type === 'multiple-choice'
          ? String.fromCharCode(65 + q.answer) + '.'
          : reponseInline(q.answer, q.unit);
        o.push(`\\noindent\\textbf{Corrigé (${rep})} ${L(q.correction)}\\par\\vspace{3mm}`, '');
      } else o.push('');
    });
  }

  // Les chaines vides sont des SEPARATIONS DE PARAGRAPHE LaTeX : ne jamais les
  // filtrer, sinon le contenu suivant se colle au paragraphe precedent.
  return o.join('\n');
}

module.exports = { composerChapitre, objectifs, prerequis };
