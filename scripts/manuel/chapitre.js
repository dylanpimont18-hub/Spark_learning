/* =========================================================
   Spark Learning – scripts/manuel/chapitre.js
   Compose un module en un chapitre LaTeX, en edition eleve ou
   professeur. Ne connait ni la maquette du livre ni ses reglages
   d'impression : c'est ouvrage.js qui s'en charge.
   ========================================================= */

const { versLatex: L, nombreFr, definirOrigine } = require('./latex.js');
const { figureUtilisable } = require('./figures.js');

function liste(valeurs, env = 'itemize') {
  const a = Array.isArray(valeurs) ? valeurs : (valeurs == null ? [] : [valeurs]);
  if (!a.length) return '';
  return `\\begin{${env}}\n` + a.map(x => '  \\item ' + L(x)).join('\n') + `\n\\end{${env}}`;
}

/* --- Couche professeur -------------------------------------------------
   Objectifs et prerequis ne figurent pas dans les donnees : ils sont
   deduits du contenu reel du chapitre (definitions, methode, prerequis
   implicites du niveau), jamais inventes hors de ce que le module traite. */

function objectifs(mod) {
  const c = mod.cours;
  const buts = [];
  if (c.method && Array.isArray(c.method.steps) && c.method.steps.length) {
    buts.push('Appliquer la méthode en ' + c.method.steps.length + ' étapes présentée dans le chapitre.');
  }
  if (Array.isArray(c.definitions)) {
    for (const d of c.definitions.slice(0, 3)) {
      buts.push('Définir et employer correctement : ' + L(d.term) + '.');
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
    listes.push('Vocabulaire déjà rencontré : ' + mod.keywords.map(L).join(', ') + '.');
  }
  if (mod.physics) listes.push('Prolongement possible : ' + L(mod.physics) + '.');
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
    o.push('\\section{Méthode}', '\\begin{spmethode}',
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
      `\\includegraphics[width=0.92\\textwidth]{${fig.fichier}}`,
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
        `\\medskip\\noindent\\textbf{Réponse :} $${nombreFr(ex.answer)}$ ${L(ex.unit || '')}`,
        '\\end{spexemple}', '');
    } else {
      o.push('\\vspace{2.6cm}\\noindent\\rule{\\textwidth}{0.3pt}\\vspace{3mm}', '');
    }
  });

  if (prof && banque.length) {
    o.push('\\subsection*{Banque d\'exercices supplémentaires}',
      '\\noindent{\\small\\color{gris}Ces énoncés ne figurent pas dans l\'édition élève : ' +
      'ils servent aux devoirs, à la remédiation ou aux groupes avancés.}\\par\\vspace{3mm}');
    banque.forEach((ex, i) => {
      o.push(`\\noindent\\textbf{Supplément \\thechapter.${i + 1}} --- ` + L(ex.statement), '');
      o.push('\\begin{spexemple}', liste(ex.solution, 'enumerate'),
        `\\medskip\\noindent\\textbf{Réponse :} $${nombreFr(ex.answer)}$ ${L(ex.unit || '')}`,
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
      `\\noindent{\\small\\color{gris}\\textbf{Durée :} ${L(ev.duration)} \\hfill \\textbf{Barème :} ${total} points}\\par\\vspace{3mm}`);
    ev.questions.forEach((q, i) => {
      o.push(`\\subsection*{Question ${i + 1} \\hfill \\normalfont\\small ${q.points} pts}`, L(q.statement), '');
      if (q.type === 'multiple-choice' && q.options) {
        o.push('\\begin{enumerate}[label=\\Alph*.]');
        q.options.forEach(op => o.push('  \\item ' + L(op)));
        o.push('\\end{enumerate}');
      } else if (!prof) o.push('\\vspace{2cm}\\noindent\\rule{\\textwidth}{0.3pt}\\vspace{3mm}');
      if (prof) {
        const rep = q.type === 'multiple-choice'
          ? String.fromCharCode(65 + q.answer) + '.'
          : `$${nombreFr(q.answer)}$ ${L(q.unit || '')}`;
        o.push(`\\noindent\\textbf{Corrigé (${rep})} ${L(q.correction)}\\par\\vspace{3mm}`, '');
      } else o.push('');
    });
  }

  return o.filter(x => x !== '').join('\n');
}

module.exports = { composerChapitre, objectifs, prerequis };
