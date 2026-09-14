/* =========================================================
   Spark Learning – scripts/manuel/tests/dollars-1re.test.js

   VERIFIE LA PARITE DES DELIMITEURS MATHEMATIQUES dans tout ce que les
   generateurs de la premiere produisent (2026-09-14).

   POURQUOI CE TEST EXISTE. Le 2026-09-14, l'elargissement des banques a fait
   apparaitre dans un corrige la ligne :

       Sa longueur vaut -2 - (-4) = 2$.

   Un seul « $ » au lieu de deux : le « $ » ouvrant manquait. En LaTeX, ce
   dollar isole n'a pas ferme un mode mathematique, il en a OUVERT un, qui est
   reste ouvert jusqu'a la fin de l'environnement. Resultat : 28 erreurs
   « Command \end{enumerate} invalid in math mode » et la PUBLICATION BLOQUEE
   de l'ouvrage entier.

   Ce que ce defaut a de redoutable :
     - `verifier-corpus.js` le declare valide, parce qu'il ne compile rien ;
     - `check-decimal-notation.js` ne le voit pas, il cherche autre chose ;
     - il n'apparait que pour CERTAINS tirages, donc il peut dormir longtemps
       et se reveiller au premier elargissement de banque ;
     - a la relecture du code, la chaine `= ${r2 - r1}$.` a l'air parfaitement
       normale : c'est l'ABSENCE du dollar d'ouverture, vingt caracteres plus
       tot, qui est la faute.

   C'est exactement le genre d'avertissement que le cahier des charges donne :
   « elargir la banque exerce des generateurs jamais sollicites et fait
   remonter des defauts anciens ; un pourcentage non echappe a casse un
   ouvrage entier ». Le defaut existait, il etait invisible.

   Ce test remplace une compilation de dix minutes par une seconde de calcul,
   et il couvre TOUS les tirages du livre, pas seulement les douze imprimes.
   ========================================================= */

const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const path = require('path');
const { chargerModule, RACINE } = require('../extract.js');

/* Memes constantes que build.js : on veut examiner exactement ce que le livre
   imprimera, banque supplementaire comprise. */
const GRAINE = 20260816, TIRAGES = 42, REPETITIONS_MAX = 3;

function chapitresDuNiveau(dossier) {
  const src = fs.readFileSync(path.join(RACINE, 'js/loader.js'), 'utf8');
  const m = /const DATA_FILES\s*=\s*(\{[\s\S]*?\n\};)/.exec(src);
  const DATA_FILES = eval('(' + m[1].slice(0, -1) + ')');
  return [].concat(...Object.values(DATA_FILES))
    .filter((f) => f.indexOf('js/data/' + dossier + '/') === 0);
}

const CHAPITRES = chapitresDuNiveau('lycee-1re');

/* Compte les « $ » qui delimitent reellement du mode mathematique. On ignore
   les « \$ » echappes, qui impriment un signe dollar et n'ouvrent rien, et les
   « $$ » d'affichage, qui vont par paires. */
function dollarsLibres(texte) {
  const sansEchappes = String(texte).replace(/\\\$/g, '');
  const sansDoubles = sansEchappes.replace(/\$\$/g, '');
  const m = sansDoubles.match(/\$/g);
  return m ? m.length : 0;
}

/* Tous les fragments qu'un exercice envoie au LaTeX. Le corrige est le plus
   expose : c'est lui qui concatene des valeurs calculees. */
function fragmentsDe(ex) {
  const out = [];
  if (ex.statement) out.push(['enoncé', ex.statement]);
  if (ex.hint) out.push(['indication', ex.hint]);
  if (Array.isArray(ex.solution)) {
    ex.solution.forEach((s, i) => out.push(['corrigé, ligne ' + (i + 1), s]));
  } else if (ex.solution) {
    out.push(['corrigé', ex.solution]);
  }
  return out;
}

test('1re : aucun delimiteur mathematique impair dans les exercices generes', () => {
  const fautes = [];

  CHAPITRES.forEach((chemin, rang) => {
    const r = chargerModule(chemin, {
      graine: GRAINE + rang, tirages: TIRAGES, repetitionsMax: REPETITIONS_MAX
    });
    const id = path.basename(chemin, '.js');

    r.exercices.forEach((ex, i) => {
      for (const [quoi, texte] of fragmentsDe(ex)) {
        const n = dollarsLibres(texte);
        if (n % 2 !== 0) {
          fautes.push(id + ' / tirage ' + (i + 1) + ' / ' + quoi + ' : ' + n +
            ' délimiteur(s) « $ », soit un nombre IMPAIR\n      ' +
            String(texte).replace(/\s+/g, ' ').slice(0, 170));
        }
      }
    });
  });

  assert.deepStrictEqual(fautes, [],
    'un « $ » isole ouvre un mode mathematique qui ne se referme jamais, et bloque la ' +
    'publication de l ouvrage entier :\n  - ' + fautes.join('\n  - '));
});

/* Le cours, les quiz et l'evaluation sont ecrits a la main et ne varient pas
   d'un tirage a l'autre — mais ils passent par le meme convertisseur, et une
   faute de frappe y produirait exactement le meme blocage. */
test('1re : aucun delimiteur mathematique impair dans le cours et les evaluations', () => {
  const fautes = [];

  CHAPITRES.forEach((chemin) => {
    const mod = chargerModule(chemin, { graine: 0, tirages: 1 }).module;
    const id = mod.id;
    const ajoute = (quoi, texte) => {
      if (!texte) return;
      if (dollarsLibres(texte) % 2 !== 0) {
        fautes.push(id + ' / ' + quoi + ' : nombre impair de « $ »\n      ' +
          String(texte).replace(/\s+/g, ' ').slice(0, 170));
      }
    };

    const c = mod.cours || {};
    ajoute('cours.intro', c.intro);
    ajoute('cours.piege', c.piege);
    (c.definitions || []).forEach((d, i) => {
      ajoute('définition ' + (i + 1) + ' (terme)', d.term);
      ajoute('définition ' + (i + 1), d.def);
    });
    ((c.method || {}).steps || []).forEach((s, i) => ajoute('méthode, étape ' + (i + 1), s));
    (c.formulas || []).forEach((f, i) => ajoute('formule ' + (i + 1), f));
    (c.recap || []).forEach((s, i) => ajoute('récapitulatif ' + (i + 1), s));
    if (c.example) {
      ajoute('exemple (énoncé)', c.example.statement);
      (c.example.steps || []).forEach((s, i) => ajoute('exemple, étape ' + (i + 1), s));
      ajoute('exemple (réponse)', c.example.answer);
    }

    /* Figure principale et schemas secondaires : leurs notes et legendes
       traversent le meme convertisseur que le reste. */
    const figures = [].concat(c.diagram ? [c.diagram] : [], c.diagrams || []);
    figures.forEach((d, k) => {
      ajoute('figure ' + (k + 1) + ' (description)', d.description);
      ajoute('figure ' + (k + 1) + ' (lecture)', d.reading);
      ajoute('figure ' + (k + 1) + ' (légende)', d.caption);
      (d.notes || []).forEach((n, i) => ajoute('figure ' + (k + 1) + ', note ' + (i + 1), n));
    });

    (mod.quiz || []).forEach((q, i) => {
      ajoute('quiz ' + (i + 1), q.q);
      (q.options || []).forEach((o, j) => ajoute('quiz ' + (i + 1) + ', option ' + (j + 1), o));
      ajoute('quiz ' + (i + 1) + ' (correction)', q.correction);
    });

    if (mod.evaluation) {
      (mod.evaluation.questions || []).forEach((q, i) => {
        ajoute('évaluation, question ' + (i + 1), q.statement);
        (q.options || []).forEach((o, j) =>
          ajoute('évaluation, question ' + (i + 1) + ', option ' + (j + 1), o));
        ajoute('évaluation, question ' + (i + 1) + ' (correction)', q.correction);
      });
    }

    if (mod.probleme) {
      ajoute('problème (contexte)', mod.probleme.context);
      (mod.probleme.tasks || []).forEach((t, i) => ajoute('problème, tâche ' + (i + 1), t));
      (mod.probleme.solutions || []).forEach((s, i) => ajoute('problème, solution ' + (i + 1), s));
      ajoute('problème (réponse finale)', mod.probleme.finalAnswer);
    }
  });

  assert.deepStrictEqual(fautes, [],
    'un « $ » isole bloque la publication de l ouvrage entier :\n  - ' + fautes.join('\n  - '));
});

/* Les fiches professeur passent elles aussi par le convertisseur, et leurs
   remedes sont longs, riches en formules, et ecrits a la main. */
test('1re : aucun delimiteur mathematique impair dans les fiches professeur', () => {
  const vm = require('vm');
  const fautes = [];

  for (const chemin of CHAPITRES) {
    const id = path.basename(chemin, '.js');
    const f = path.join(RACINE, 'js/data/prof/lycee-1re', id + '.prof.js');
    if (!fs.existsSync(f)) continue;
    const bac = { window: {}, console };
    vm.createContext(bac);
    vm.runInContext(fs.readFileSync(f, 'utf8'), bac, { filename: f });
    const fiche = bac.window.SPARK_PROF[id];
    if (!fiche) continue;

    const ajoute = (quoi, texte) => {
      if (!texte) return;
      if (dollarsLibres(texte) % 2 !== 0) {
        fautes.push(id + ' / ' + quoi + ' : nombre impair de « $ »\n      ' +
          String(texte).replace(/\s+/g, ' ').slice(0, 170));
      }
    };

    ajoute('note', fiche.note);
    (fiche.attendus || []).forEach((a, i) => ajoute('attendu ' + (i + 1), a));
    (fiche.erreurs || []).forEach((e, i) => {
      ajoute('erreur ' + (i + 1) + ' (titre)', e.titre);
      ajoute('erreur ' + (i + 1) + ' (élève)', e.eleve);
      ajoute('erreur ' + (i + 1) + ' (cause)', e.cause);
      ajoute('erreur ' + (i + 1) + ' (remède)', e.remede);
    });
  }

  assert.deepStrictEqual(fautes, [],
    'un « $ » isole bloque la publication de l ouvrage entier :\n  - ' + fautes.join('\n  - '));
});
