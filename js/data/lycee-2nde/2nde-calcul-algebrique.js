/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-calcul-algebrique.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-calcul-algebrique',
    level: 2, subject: 'maths',
    icon: '🧮',
    title: 'Calcul algébrique',
    subtitle: 'Développer, factoriser, identités remarquables',
    keywords: ['Développer', 'Factoriser', 'Identité remarquable', 'Distributivité'],
    physics: false,
    cours: {
      intro: 'Le calcul algébrique permet de transformer une expression en une forme équivalente — plus simple ou plus adaptée au problème. Développer supprime les parenthèses et étale tous les termes ; factoriser fait l\'inverse en regroupant sous un produit. Choisir entre les deux dépend du contexte : pour résoudre $f(x) = 0$, la forme factorisée permet de trouver directement les racines ($f(x) = 0 \\Leftrightarrow$ chaque facteur $= 0$) ; pour comparer ou simplifier, la forme développée est souvent plus lisible. La vérification consiste à redévelopper le résultat factorisé pour retrouver la forme initiale — indispensable pour éviter les erreurs de signe.',
      definitions: [
        { term: 'Développer', def: 'Transformer un produit en somme en supprimant les parenthèses : $a(b+c) = ab + ac$.' },
        { term: 'Factoriser', def: 'Transformer une somme en produit en mettant en facteur un terme commun ou en reconnaissant une identité remarquable.' },
        { term: 'Identité remarquable', def: 'Formule de calcul toujours vraie, comme $(a+b)^2 = a^2 + 2ab + b^2$, qui accélère les développements et factorisations.' },
        { term: 'Distributivité', def: 'Propriété : $a(b+c) = ab + ac$. C\'est la base du développement.' }
      ],
      method: {
        title: 'Choisir entre développer et factoriser',
        steps: [
          'Développer : appliquer la distributivité $a(b+c)=ab+ac$ ou les identités remarquables. <strong>Exemple :</strong> $3(2x+5) = 6x + 15$.',
          'Trois identités remarquables : $(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$. <strong>Exemple :</strong> $(x+4)^2 = x^2 + 8x + 16$ (ne pas oublier le $2ab = 8x$).',
          'Factoriser : repérer un facteur commun ou reconnaître une identité dans l\'expression développée. <strong>Exemple :</strong> $x^2 - 9 = (x+3)(x-3)$ (différence de deux carrés).',
          'Vérifier en redéveloppant le résultat factorisé. <strong>Exemple :</strong> $(x+3)(x-3) = x^2 - 3x + 3x - 9 = x^2 - 9$ ✓'
        ]
      },
      example: {
        statement: 'Factoriser l\'expression $A = 4x^2 - 20x + 25$.',
        steps: [
          'On repère que $4x^2 = (2x)^2$ et $25 = 5^2$.',
          'On vérifie le double produit : $2 \\times 2x \\times 5 = 20x$ ✓ — c\'est bien l\'identité $(a - b)^2 = a^2 - 2ab + b^2$.',
          'Donc $A = (2x - 5)^2$.'
        ],
        answer: '$4x^2 - 20x + 25 = (2x - 5)^2$.'
      },
      formulas: [
        '$(a+b)^2 = a^2 + 2ab + b^2$',
        '$(a-b)^2 = a^2 - 2ab + b^2$',
        '$(a+b)(a-b) = a^2 - b^2$'
      ],
      recap: [
        'Développer = supprimer les parenthèses (produit → somme) ; factoriser = créer des parenthèses (somme → produit).',
        'Les trois identités remarquables sont les outils centraux : les reconnaître dans les deux sens.',
        'Pour résoudre $f(x) = 0$, la forme factorisée est indispensable (produit nul ⟺ un facteur nul).',
        'Toujours vérifier en redéveloppant le résultat factorisé pour retrouver l\'expression initiale.'
      ],
      piege: 'Ne jamais écrire $(a+b)^2 = a^2 + b^2$ : le terme croisé $2ab$ est indispensable !'
    },
    quiz: [
      { q: 'Un élève factorise $x^2 + 6x + 9$ et écrit $(x+3)(x-3)$. Quelle est son erreur ?', options: ['C\'est $(x+3)^2$, pas une différence de carrés — $(x+3)(x-3) = x^2-9 \\neq x^2+6x+9$', 'La factorisation est correcte', 'Il fallait écrire $(x-3)^2$', 'L\'expression n\'est pas factorisable'], answer: 0, correction: '$x^2+6x+9 = (x+3)^2$ (carré d\'une somme). L\'élève a confondu avec $(a+b)(a-b) = a^2 - b^2$, qui ne s\'applique qu\'à une DIFFÉRENCE de carrés. Vérification : $(x+3)(x-3) = x^2-9 \\neq x^2+6x+9$.' },
      { q: 'Factoriser $x^2-25$', options: ['$(x-5)^2$', '$(x+5)(x-5)$', '$(x-5)(x+5)^2$', 'Non factorisable'], answer: 1, correction: '$x^2-25 = x^2-5^2 = (x+5)(x-5)$.' },
      { q: 'Développer $(2x-1)(2x+1)$', options: ['$4x^2-1$', '$4x^2+1$', '$4x^2-4x+1$', '$2x^2-1$'], answer: 0, correction: '$(2x-1)(2x+1)=(2x)^2-1^2=4x^2-1$.' },
      { q: 'Un élève développe $(x-3)^2$ et obtient $x^2 - 9$. Quel terme a-t-il oublié ?', options: ['Le double produit $-6x$ : la bonne réponse est $x^2 - 6x + 9$', 'Le terme $+9$ : il a écrit $x^2 - 6x$ au lieu de $x^2 - 6x + 9$', 'Rien, son calcul est correct', 'Il a inversé le signe : c\'est $x^2 + 9$'], answer: 0, correction: '$(x-3)^2 = x^2 - 2 \\times x \\times 3 + 3^2 = x^2 - 6x + 9$. L\'élève a écrit $x^2 - 9$ qui correspond à $(x-3)(x+3)$ (différence de carrés). L\'oubli du double produit $-6x$ est l\'erreur la plus fréquente avec les identités remarquables.' },
      { q: 'On veut résoudre $(x-2)(x+5) = 0$. Les solutions sont :', options: ['$x = 2$ ou $x = -5$', '$x = -2$ ou $x = 5$', '$x = 2$ uniquement', '$x = 10$'], answer: 0, correction: 'Un produit est nul si et seulement si l\'un des facteurs est nul. $x - 2 = 0 \\Rightarrow x = 2$ ou $x + 5 = 0 \\Rightarrow x = -5$. C\'est l\'intérêt de la forme factorisée pour résoudre $f(x) = 0$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const types = ['factoriser_diff', 'factoriser_carre', 'resoudre'];
        const type = pick(types);
        if (type === 'factoriser_diff') {
          const a = rand(2, 6);
          const b = rand(1, 9);
          const a2 = a * a;
          const b2 = b * b;
          const expr = a2 + 'x^2 - ' + b2;
          return {
            statement: `Factoriser $A = ${a2}x^2 - ${b2}$ en reconnaissant une identité remarquable, puis résoudre $A = 0$.<br/><br/>Combien y a-t-il de solutions ? Donne le <strong>produit</strong> des deux solutions.`,
            answer: parseFloat(((-b/a) * (b/a)).toFixed(4)),
            tolerance: 0.01,
            unit: '',
            hint: `Reconnaître $${a2}x^2 = (${a}x)^2$ et $${b2} = ${b}^2$. C'est une différence de deux carrés : $(${a}x)^2 - ${b}^2 = (${a}x + ${b})(${a}x - ${b})$.`,
            solution: [
              `$${a2}x^2 - ${b2} = (${a}x)^2 - ${b}^2 = (${a}x + ${b})(${a}x - ${b})$`,
              `$A = 0 \\Leftrightarrow ${a}x + ${b} = 0$ ou $${a}x - ${b} = 0$`,
              `$x = -\\frac{${b}}{${a}}$ ou $x = \\frac{${b}}{${a}}$`,
              `Produit : $\\left(-\\frac{${b}}{${a}}\\right) \\times \\frac{${b}}{${a}} = -\\frac{${b*b}}{${a*a}} = ${((-b/a) * (b/a)).toFixed(4)}$`
            ]
          };
        } else if (type === 'factoriser_carre') {
          const a = rand(2, 5);
          const b = rand(1, 6);
          const sign = pick(['+', '-']);
          const a2 = a * a;
          const b2 = b * b;
          const dblProd = 2 * a * b;
          const constTerm = sign === '+' ? `+ ${dblProd}x + ${b2}` : `- ${dblProd}x + ${b2}`;
          const answer = sign === '+' ? dblProd : -dblProd;
          return {
            statement: `L'expression $B = ${a2}x^2 ${constTerm}$ est un carré parfait. Factoriser $B$ sous la forme $(\\ldots)^2$.<br/><br/>Donne le <strong>coefficient de $x$</strong> dans le développement (avec son signe).`,
            answer: answer,
            tolerance: 0,
            unit: '',
            hint: `Vérifie si le double produit correspond : $2 \\times ${a}x \\times ${b} = ${dblProd}x$. Identité $(a ${sign} b)^2$.`,
            solution: [
              `$${a2}x^2 = (${a}x)^2$, $${b2} = ${b}^2$, double produit $= 2 \\times ${a} \\times ${b} = ${dblProd}$ ✓`,
              `$B = (${a}x ${sign} ${b})^2$`,
              `Le coefficient de $x$ est $${answer}$.`
            ]
          };
        } else {
          const p = rand(1, 6);
          const q = rand(1, 6);
          return {
            statement: `Factoriser $C = x^2 + ${p+q}x + ${p*q}$ puis résoudre $C = 0$.<br/><br/>Donne la <strong>plus grande</strong> solution de $C = 0$.`,
            answer: -Math.min(p, q),
            tolerance: 0,
            unit: '',
            hint: `On cherche deux nombres dont la somme est $${p+q}$ et le produit est $${p*q}$.`,
            solution: [
              `On cherche $a$ et $b$ tels que $a + b = ${p+q}$ et $a \\times b = ${p*q}$`,
              `$a = ${p}$ et $b = ${q}$ conviennent : $C = (x + ${p})(x + ${q})$`,
              `$C = 0 \\Leftrightarrow x = -${p}$ ou $x = -${q}$`,
              `La plus grande solution est $x = ${-Math.min(p, q)}$.`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'Un terrain rectangulaire a pour longueur $(2x + 3)$ m et pour largeur $(2x - 3)$ m. Un second terrain carré a pour côté $2x$ m.',
      tasks: [
        'Exprimer l\'aire $A_1$ du terrain rectangulaire sous forme développée en utilisant une identité remarquable.',
        'Exprimer l\'aire $A_2$ du terrain carré.',
        'Calculer la différence $A_2 - A_1$. Que remarque-t-on ? Calculer pour $x = 5$ m.'
      ],
      solutions: [
        '$A_1 = (2x+3)(2x-3) = (2x)^2 - 3^2 = 4x^2 - 9$.',
        '$A_2 = (2x)^2 = 4x^2$.',
        '$A_2 - A_1 = 4x^2 - (4x^2 - 9) = 9$ m². La différence est constante, indépendante de $x$ ! Pour $x = 5$ : $A_1 = 91$ m², $A_2 = 100$ m², différence $= 9$ m².'
      ],
      finalAnswer: 'La différence d\'aire est toujours $9$ m², quelle que soit la valeur de $x$.'
    },

    evaluation: {
      title: 'Évaluation — Calcul algébrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Développer et réduire $(3x + 5)^2$. Donner le coefficient du terme en $x^2$.',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(3x+5)^2 = (3x)^2 + 2 \\times 3x \\times 5 + 5^2 = 9x^2 + 30x + 25$. Le coefficient de $x^2$ est $9$.'
        },
        {
          statement: 'Factoriser $x^2 - 49$.',
          type: 'multiple-choice',
          options: ['$(x-7)^2$', '$(x+7)(x-7)$', '$(x-49)(x+1)$', '$(x+7)^2$'],
          answer: 1,
          points: 2,
          correction: '$x^2 - 49 = x^2 - 7^2$. C\'est une différence de deux carrés : $a^2 - b^2 = (a+b)(a-b)$. Donc $x^2 - 49 = (x+7)(x-7)$.'
        },
        {
          statement: 'Développer et réduire $(2x - 3)(2x + 3)$. Donner le terme constant.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(2x-3)(2x+3) = (2x)^2 - 3^2 = 4x^2 - 9$. Le terme constant est $-9$.'
        },
        {
          statement: 'Développer et réduire $(x-4)^2$. Donner le coefficient du terme en $x$.',
          type: 'numeric',
          answer: -8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(x-4)^2 = x^2 - 2 \\times x \\times 4 + 4^2 = x^2 - 8x + 16$. Le coefficient de $x$ est $-8$.'
        },
        {
          statement: 'Quelle identité remarquable permet de factoriser $4x^2 + 12x + 9$ ?',
          type: 'multiple-choice',
          options: ['$(a+b)(a-b) = a^2 - b^2$', '$(a+b)^2 = a^2 + 2ab + b^2$', '$(a-b)^2 = a^2 - 2ab + b^2$', 'Aucune identité ne convient'],
          answer: 1,
          points: 2,
          correction: '$4x^2 + 12x + 9 = (2x)^2 + 2 \\times 2x \\times 3 + 3^2 = (2x+3)^2$. C\'est l\'identité $(a+b)^2$ avec $a = 2x$ et $b = 3$.'
        }
      ]
    }
  });
