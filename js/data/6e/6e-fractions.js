/* =========================================================
   Spark Learning – data/6e/6e-fractions.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-fractions',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Fractions',
    subtitle: 'Nommer, simplifier, comparer',
    keywords: ['Numérateur', 'Dénominateur', 'Simplification', 'Fraction irréductible', 'Comparaison'],
    physics: 'Fraction massique, fraction volumique, rapport de grandeurs en chimie',

    cours: {
      intro: 'Une <strong>fraction</strong> $\\dfrac{a}{b}$ représente $a$ parts d\'un tout divisé en $b$ parts égales. C\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion.<br/><br/>' +
        'Quand $a > b$, la fraction est dite <strong>impropre</strong> ($\\dfrac{7}{3} > 1$) : elle représente plus d\'un entier. Deux fractions peuvent être égales avec des chiffres différents : $\\dfrac{1}{2} = \\dfrac{3}{6} = \\dfrac{50}{100}$, car $\\dfrac{k \\times a}{k \\times b} = \\dfrac{a}{b}$.<br/><br/>' +
        'En chimie, la <strong>fraction massique</strong> $w = \\dfrac{m_{\\text{soluté}}}{m_{\\text{solution}}}$ est toujours entre $0$ et $1$. Savoir simplifier et comparer des fractions est indispensable pour tous les calculs de concentration, de proportion et de probabilité.',
      definitions: [
        { term: 'Fraction', def: 'Écriture $\\dfrac{a}{b}$ où $a$ est le numérateur et $b$ le dénominateur ($b \\neq 0$). Elle représente $a$ parts sur $b$.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun autre que $1$. On l\'obtient en divisant par le PGCD.' },
        { term: 'PGCD', def: 'Plus Grand Commun Diviseur de deux entiers. C\'est le plus grand nombre qui divise les deux à la fois.' },
        { term: 'Fractions égales', def: '$\\dfrac{a}{b} = \\dfrac{a \\times k}{b \\times k}$ pour tout $k \\neq 0$. Multiplier ou diviser les deux termes par un même nombre ne change pas la valeur.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Simplifier</strong> : trouver le PGCD du numérateur et du dénominateur, puis diviser les deux par ce PGCD. Le PGCD est le plus grand entier qui divise les deux. <em>Exemple :</em> $\\dfrac{18}{24}$ — diviseurs de 18 : 1, 2, 3, 6, 9, 18 ; diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24 → PGCD = 6. Donc $\\dfrac{18}{24} = \\dfrac{18 \\div 6}{24 \\div 6} = \\dfrac{3}{4}$. Vérifie : 3 et 4 n\'ont pas de diviseur commun → irréductible ✓',
          '<strong>Comparer</strong> : mettre au même dénominateur en calculant le PPCM des deux dénominateurs. <em>Exemple :</em> comparer $\\dfrac{2}{3}$ et $\\dfrac{3}{5}$ → PPCM(3, 5) = 15. On amplifie : $\\dfrac{2 \\times 5}{3 \\times 5} = \\dfrac{10}{15}$ et $\\dfrac{3 \\times 3}{5 \\times 3} = \\dfrac{9}{15}$. Comme $10 > 9$, on conclut $\\dfrac{2}{3} > \\dfrac{3}{5}$. Astuce rapide : $\\dfrac{a}{b}$ vs $\\dfrac{c}{d}$ → comparer $a \\times d$ et $b \\times c$ (produit en croix).',
          '<strong>Convertir en décimal</strong> : diviser le numérateur par le dénominateur. <em>Exemple :</em> $\\dfrac{3}{4} = 3 \\div 4 = 0{,}75$. Si le dénominateur est 2, 4, 5, 10, 20 ou 25, la conversion est exacte ; sinon, le résultat peut être infini périodique : $\\dfrac{1}{3} = 0{,}333\\ldots$'
        ]
      },
      example: {
        statement: 'Simplifier $\\dfrac{42}{56}$ et donner sa valeur décimale.',
        steps: [
          'Cherchons le PGCD de $42$ et $56$. Diviseurs de $42$ : 1, 2, 3, 6, 7, 14, 21, 42. Diviseurs de $56$ : 1, 2, 4, 7, 8, 14, 28, 56. PGCD $= 14$.',
          'On divise : $\\dfrac{42}{56} = \\dfrac{42 \\div 14}{56 \\div 14} = \\dfrac{3}{4}$.',
          'Vérification : PGCD$(3, 4) = 1$ → irréductible ✓',
          'Valeur décimale : $3 \\div 4 = 0{,}75$.'
        ],
        answer: '$\\dfrac{42}{56} = \\dfrac{3}{4} = 0{,}75$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Opération</th><th style="border:1px solid var(--border);padding:8px">Formule</th><th style="border:1px solid var(--border);padding:8px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Simplifier</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{18}{24} = \\dfrac{3}{4}$ (PGCD $= 6$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Amplifier</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{2}{3} = \\dfrac{10}{15}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Comparer</strong></td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{a}{b} \\lessgtr \\dfrac{c}{d} \\Leftrightarrow ad \\lessgtr bc$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{2}{3} > \\dfrac{3}{5}$ car $10 > 9$</td></tr></table>',
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{a \\div k}{b \\div k}$ (simplification par $k$)',
        '$\\dfrac{a}{b} = \\dfrac{a \\times n}{b \\times n}$ (amplification par $n$)',
        '$\\dfrac{a}{b} < \\dfrac{c}{d} \\Leftrightarrow a \\times d < b \\times c$ (si $b, d > 0$)'
      ],
      recap: [
        'Une fraction $\\dfrac{a}{b}$ est irréductible quand $\\text{PGCD}(a, b) = 1$.',
        'Pour simplifier, on divise numérateur et dénominateur par leur PGCD.',
        'Pour comparer, on utilise le même dénominateur ou les produits en croix.',
        'On ne simplifie JAMAIS par addition/soustraction, seulement par multiplication/division.'
      ],
      piege: 'Erreur fréquente : simplifier $\\dfrac{a + k}{b + k}$ en divisant par $k$. IMPOSSIBLE ! On ne peut simplifier qu\'en multipliant ou divisant numérateur ET dénominateur par un même facteur. $\\dfrac{6}{9} = \\dfrac{2}{3}$ ✓ mais $\\dfrac{6+3}{9+3} \\neq \\dfrac{2}{3}$ ✗.'
    },

    quiz: [
      {
        q: 'Quelle est la forme irréductible de $\\dfrac{24}{36}$ ?',
        options: ['$\\dfrac{4}{6}$', '$\\dfrac{2}{3}$', '$\\dfrac{6}{9}$', '$\\dfrac{12}{18}$'],
        answer: 1,
        correction: 'Le PGCD de 24 et 36 est 12. $\\dfrac{24}{36} = \\dfrac{24 \\div 12}{36 \\div 12} = \\dfrac{2}{3}$. C\'est la seule forme irréductible.'
      },
      {
        q: 'Laquelle de ces simplifications est <strong>incorrecte</strong> ?',
        options: ['$\\dfrac{12}{18} = \\dfrac{2}{3}$', '$\\dfrac{15}{25} = \\dfrac{3}{5}$', '$\\dfrac{6+4}{9+4} = \\dfrac{6}{9}$', '$\\dfrac{8}{12} = \\dfrac{2}{3}$'],
        answer: 2,
        correction: 'On ne peut pas simplifier une fraction en ajoutant (ou soustrayant) la même valeur au numérateur et au dénominateur ! $\\dfrac{6+4}{9+4} = \\dfrac{10}{13} \\neq \\dfrac{6}{9}$. Pour simplifier, on ne peut que multiplier ou diviser numérateur ET dénominateur par un même facteur : $\\dfrac{6}{9} = \\dfrac{6 \\div 3}{9 \\div 3} = \\dfrac{2}{3}$ ✓.'
      },
      {
        q: 'Une solution contient $15$ g de sel dissous dans $300$ g de solution. Quelle est la fraction massique du sel ?',
        options: ['$\\dfrac{1}{20}$', '$\\dfrac{1}{15}$', '$\\dfrac{1}{5}$', '$\\dfrac{3}{20}$'],
        answer: 0,
        correction: '$w = \\dfrac{15}{300} = \\dfrac{1}{20} = 0{,}05$. La fraction massique est $\\dfrac{1}{20}$, soit 5 % de la masse totale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const pgcd = (a, b) => b === 0 ? a : pgcd(b, a % b);
        const context = pick([
          'Simplifie la fraction',
          'Un chimiste mesure la proportion',
          'En cuisine, on utilise la fraction',
          'Un cartographe exprime l\'échelle'
        ]);
        const k = rand(2, 6);
        let a = rand(2, 9), b = rand(2, 9);
        let attempts = 0;
        while ((pgcd(a, b) !== 1 || a === b) && attempts < 20) { b = rand(2, 9); attempts++; }
        const num = k * a, den = k * b;
        const val = parseFloat((a / b).toFixed(4));
        return {
          statement: `${context} $\\dfrac{${num}}{${den}}$ et donne sa valeur décimale arrondie au millième.`,
          answer: val,
          tolerance: 0.001,
          unit: '',
          hint: `La fraction n'est pas irréductible : ${num} et ${den} ont un diviseur commun. Essaie de diviser les deux par ${k}.`,
          solution: [
            `Cherchons un diviseur commun à $${num}$ et $${den}$.`,
            `On observe : $${num} = ${k} \\times ${a}$ et $${den} = ${k} \\times ${b}$.`,
            `On divise numérateur et dénominateur par $${k}$ : $\\dfrac{${num}}{${den}} = \\dfrac{${a}}{${b}}$.`,
            `Vérification : $\\text{PGCD}(${a}, ${b}) = 1$ → la fraction $\\dfrac{${a}}{${b}}$ est irréductible ✓`,
            `Valeur décimale : $${a} \\div ${b} = ${val}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un chimiste prépare une solution de glucose. Il dissout $45$ g de glucose dans de l\'eau pour obtenir $250$ g de solution totale.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Simplifier la fraction $\\dfrac{45}{250}$ pour exprimer la fraction massique $w$ sous forme irréductible.',
        '(Étape 3 de la méthode) Convertir $w$ en décimal, puis exprimer le pourcentage massique.',
        'Réflexion : si on double la masse de soluté ET la masse de solution, la fraction massique change-t-elle ? Justifie avec la propriété d\'amplification vue en cours.'
      ],
      solutions: [
        '$w = \\dfrac{m_{\\text{glucose}}}{m_{\\text{solution}}} = \\dfrac{45}{250} = \\dfrac{9}{50} = 0{,}18$.',
        '$w\\% = 0{,}18 \\times 100 = 18\\%$ (la solution est à 18 % en masse).',
        'Non. $\\dfrac{90}{500} = \\dfrac{9}{50} = 0{,}18$. Multiplier numérateur et dénominateur par le même facteur ne change pas la fraction.'
      ],
      finalAnswer: '$w = \\dfrac{9}{50} = 18\\%$'
    },

    evaluation: {
      title: 'Évaluation — Fractions',
      duration: '20 min',
      questions: [
        {
          statement: 'Simplifie la fraction $\\dfrac{36}{48}$ et donne le numérateur de la fraction irréductible.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le PGCD de $36$ et $48$ est $12$. On divise : $\\dfrac{36}{48} = \\dfrac{36 \\div 12}{48 \\div 12} = \\dfrac{3}{4}$. Le numérateur est $3$.'
        },
        {
          statement: 'Quelle fraction est égale à $\\dfrac{5}{8}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{10}{24}$', '$\\dfrac{15}{24}$', '$\\dfrac{20}{40}$', '$\\dfrac{25}{35}$'],
          answer: 1,
          points: 2,
          correction: 'On amplifie $\\dfrac{5}{8}$ par $3$ : $\\dfrac{5 \\times 3}{8 \\times 3} = \\dfrac{15}{24}$. Vérification : $\\dfrac{15}{24} = \\dfrac{15 \\div 3}{24 \\div 3} = \\dfrac{5}{8}$ ✓.'
        },
        {
          statement: 'Compare $\\dfrac{3}{7}$ et $\\dfrac{5}{9}$ en utilisant les produits en croix. Donne la valeur de $3 \\times 9$.',
          type: 'numeric',
          answer: 27,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Produits en croix : $3 \\times 9 = 27$ et $7 \\times 5 = 35$. Comme $27 < 35$, on conclut $\\dfrac{3}{7} < \\dfrac{5}{9}$.'
        },
        {
          statement: 'Convertis $\\dfrac{7}{4}$ en nombre décimal.',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{7}{4} = 7 \\div 4 = 1{,}75$. C\'est une fraction impropre ($7 > 4$), donc le résultat est supérieur à $1$.'
        },
        {
          statement: 'Parmi ces simplifications, laquelle est correcte ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{8+4}{12+4} = \\dfrac{8}{12}$', '$\\dfrac{14}{21} = \\dfrac{2}{3}$', '$\\dfrac{9}{15} = \\dfrac{2}{5}$', '$\\dfrac{6}{10} = \\dfrac{2}{5}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{14}{21}$ : PGCD$(14, 21) = 7$. $\\dfrac{14 \\div 7}{21 \\div 7} = \\dfrac{2}{3}$ ✓. Les autres : la première additionne au lieu de diviser (interdit), $\\dfrac{9}{15} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$, et $\\dfrac{6}{10} = \\dfrac{3}{5} \\neq \\dfrac{2}{5}$.'
        }
      ]
    }
  });
