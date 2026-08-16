/* =========================================================
   Spark Learning – scripts/manuel/schema.js
   Valide la forme d'un module de js/data/ avant conversion.
   Un module non conforme doit echouer ici, avec un message
   nommant le champ fautif, plutot qu'a la compilation LaTeX.
   ========================================================= */

const CHAMPS_MODULE = ['id', 'title', 'subject', 'cours', 'quiz', 'exercice', 'evaluation'];
const CHAMPS_COURS = ['intro'];

function validerModule(mod) {
  const erreurs = [];
  const avertissements = [];
  const ou = (mod && mod.id) ? mod.id : '(module sans id)';

  if (!mod || typeof mod !== 'object') {
    return { ok: false, erreurs: ['module absent ou non objet'], avertissements };
  }

  for (const c of CHAMPS_MODULE) {
    if (mod[c] === undefined) erreurs.push(`${ou} : champ obligatoire manquant "${c}"`);
  }

  if (mod.cours && typeof mod.cours === 'object') {
    for (const c of CHAMPS_COURS) {
      if (typeof mod.cours[c] !== 'string') erreurs.push(`${ou} : cours.${c} doit etre une chaine`);
    }
    for (const c of ['definitions', 'formulas', 'recap']) {
      if (mod.cours[c] !== undefined && !Array.isArray(mod.cours[c])) {
        erreurs.push(`${ou} : cours.${c} doit etre un tableau`);
      }
    }
    if (!mod.cours.diagram) avertissements.push(`${ou} : aucun schema (cours.diagram)`);
  }

  if (mod.quiz !== undefined) {
    if (!Array.isArray(mod.quiz)) {
      erreurs.push(`${ou} : quiz doit etre un tableau`);
    } else {
      mod.quiz.forEach((q, i) => {
        if (!Array.isArray(q.options)) erreurs.push(`${ou} : quiz[${i}].options doit etre un tableau`);
        else if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= q.options.length) {
          erreurs.push(`${ou} : quiz[${i}].answer hors bornes (${q.answer} pour ${q.options.length} options)`);
        }
        if (typeof q.correction !== 'string') avertissements.push(`${ou} : quiz[${i}] sans correction`);
      });
    }
  }

  if (mod.exercice !== undefined && typeof mod.exercice.generate !== 'function') {
    erreurs.push(`${ou} : exercice.generate doit etre une fonction`);
  }

  if (mod.evaluation !== undefined) {
    if (!Array.isArray(mod.evaluation.questions)) {
      erreurs.push(`${ou} : evaluation.questions doit etre un tableau`);
    } else {
      mod.evaluation.questions.forEach((q, i) => {
        if (typeof q.points !== 'number') {
          avertissements.push(`${ou} : evaluation.questions[${i}] sans bareme`);
        }
      });
    }
  }

  return { ok: erreurs.length === 0, erreurs, avertissements };
}

/* Neuf modules bts-prep renvoient solution en chaine et non en tableau.
   On normalise ici, une fois, plutot que dans chaque consommateur. */
function normaliserExercice(ex) {
  // Array.from reconstruit le tableau dans le realm hote : celui renvoye par le
  // module vit dans le contexte vm et porte un autre Array.prototype, ce qui fait
  // echouer toute comparaison stricte ou serialisation cote appelant.
  const solution = Array.isArray(ex.solution)
    ? Array.from(ex.solution, (x) => String(x))
    : (ex.solution == null || ex.solution === '' ? [] : [String(ex.solution)]);
  return {
    statement: String(ex.statement || ''),
    answer: ex.answer,
    hint: String(ex.hint || ''),
    solution,
    unit: String(ex.unit || ''),
    tolerance: typeof ex.tolerance === 'number' ? ex.tolerance : 0
  };
}

module.exports = { validerModule, normaliserExercice };
