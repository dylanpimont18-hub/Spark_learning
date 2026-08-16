/* =========================================================
   Spark Learning – scripts/manuel/latex.js
   Convertit le HTML + KaTeX des modules en LaTeX.

   L'ORDRE des etapes est la partie delicate : les trois bugs
   rencontres a l'audit du 2026-08-15 venaient tous d'une etape
   appliquee au mauvais moment.
     1. mettre les maths a l'abri  (elles compilent deja telles quelles)
     2. balises HTML -> jetons     (pour survivre a l'echappement)
     3. entites HTML -> caracteres
     4. echapper les caracteres speciaux LaTeX
     5. typographie francaise       AVANT de restituer les maths,
        sinon l'apostrophe courbe entre dans $A'B'$ ou elle est un prime
     6. restituer jetons puis maths
   ========================================================= */

const { enMath, enTexte, nonMappes } = require('./unicode.js');

const MARQUE_MATH = '\u0000';
const MARQUE_JETON = '\u0001';

let origine = '(inconnu)';
function definirOrigine(id) { origine = id || '(inconnu)'; }

function versLatex(valeur) {
  if (valeur == null) return '';
  let s = String(valeur);

  // 1. Mettre les maths a l'abri, en y traduisant les symboles Unicode
  const maths = [];
  const garder = (latex) => {
    maths.push(latex);
    return MARQUE_MATH + (maths.length - 1) + MARQUE_MATH;
  };
  s = s.replace(/\$\$([\s\S]*?)\$\$/g, (_, m) => garder('\\[' + enMath(m, origine) + '\\]'));
  s = s.replace(/\$([^$]*?)\$/g, (_, m) => garder('$' + enMath(m, origine) + '$'));

  // 2. Balises HTML -> jetons
  const jetons = [];
  const jeton = (latex) => {
    jetons.push(latex);
    return MARQUE_JETON + (jetons.length - 1) + MARQUE_JETON;
  };
  s = s.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, jeton('\n\n'))
       .replace(/<br\s*\/?>/gi, jeton('\\\\\n'))
       .replace(/<strong>([\s\S]*?)<\/strong>/gi, (_, c) => jeton('\\textbf{') + c + jeton('}'))
       .replace(/<b>([\s\S]*?)<\/b>/gi, (_, c) => jeton('\\textbf{') + c + jeton('}'))
       .replace(/<em>([\s\S]*?)<\/em>/gi, (_, c) => jeton('\\emph{') + c + jeton('}'))
       .replace(/<i>([\s\S]*?)<\/i>/gi, (_, c) => jeton('\\emph{') + c + jeton('}'))
       .replace(/<code>([\s\S]*?)<\/code>/gi, (_, c) => jeton('\\texttt{') + c + jeton('}'))
       .replace(/<\/?(ul|ol|li|p|span|div)[^>]*>/gi, '');

  // Symboles Unicode restants (hors math)
  s = enTexte(s, origine, jeton);

  // 3. Entites HTML
  s = s.replace(/&nbsp;/g, '~').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>').replace(/&times;/g, '×').replace(/&deg;/g, '°')
       .replace(/&hellip;/g, '…').replace(/&#39;/g, "'").replace(/&quot;/g, '"');

  // 4. Echappement LaTeX
  s = s.replace(/\\/g, '\\textbackslash{}')
       .replace(/([&%#_{}])/g, '\\$1')
       .replace(/\^/g, '\\textasciicircum{}')
       .replace(/~/g, '\\textasciitilde{}');

  // 5. Typographie francaise, AVANT restitution des maths.
  //    Les espaces avant ; : ! ? sont laissees a babel french.
  s = s.replace(/'/g, '’').replace(/[ ]{2,}/g, ' ');

  // 6. Restitution
  s = s.replace(new RegExp(MARQUE_JETON + '(\\d+)' + MARQUE_JETON, 'g'), (_, i) => jetons[+i]);
  s = s.replace(new RegExp(MARQUE_MATH + '(\\d+)' + MARQUE_MATH, 'g'), (_, i) => maths[+i]);
  return s.trim();
}

/* Les champs numeriques bruts (exercice.answer) sont des Number JS :
   les injecter tels quels fait fuir la notation anglaise (7.5) dans le PDF.
   Meme regle que fr() cote application. */
function nombreFr(valeur) {
  if (typeof valeur === 'number') return String(valeur).replace('.', '{,}');
  return versLatex(valeur);
}

module.exports = { versLatex, nombreFr, definirOrigine, nonMappes };
