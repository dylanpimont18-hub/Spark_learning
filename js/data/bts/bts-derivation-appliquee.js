/* =========================================================
   Spark Learning – data/bts/bts-derivation-appliquee.js
   Module : Dérivation Appliquée (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-derivation-appliquee',
    level: 3, subject: 'maths',
    icon: '💹',
    title: 'Dérivation appliquée',
    subtitle: 'Coûts marginaux, optimisation économique',
    keywords: ['Coût marginal', 'Optimisation', 'Dérivée', 'Maximum de profit', 'Élasticité'],
    physics: 'Gestion de production industrielle : quantité optimale, seuil de rentabilité, coût marginal',
    cours: {
      intro: 'En économie et gestion, chaque dérivée porte un nom métier : $C\'(x)$ est le coût marginal (coût supplémentaire de la $x$-ième unité), $R\'(x)$ est la recette marginale.<br/><br/>Le profit $\\Pi = R - C$ est maximisé quand $R\'(x) = C\'(x)$ — c\'est-à-dire quand il n\'est plus rentable de produire une unité supplémentaire.<br/><br/>ATTENTION : $R(x) = C(x)$ est le SEUIL DE RENTABILITÉ (profit nul), pas la condition de maximum — confondre les deux est une erreur classique en gestion.<br/><br/>La dérivée seconde $\\Pi\'\'(x_0) < 0$ confirme que l\'extremum est bien un maximum (et non un minimum).<br/><br/>En pratique, la quantité optimale doit toujours être entière et positive : si $x^* = 4{,}7$, on compare $\\Pi(4)$ et $\\Pi(5)$.',
      definitions: [
        { term: 'Coût marginal $C_m(x) = C\'(x)$', def: 'Coût supplémentaire engendré par la production d\'une unité de plus. C\'est la dérivée de la fonction de coût total.' },
        { term: 'Recette marginale $R_m(x) = R\'(x)$', def: 'Recette supplémentaire apportée par la vente d\'une unité de plus. C\'est la dérivée de la fonction de recette totale.' },
        { term: 'Seuil de rentabilité', def: 'Quantité $x$ telle que $R(x) = C(x)$, soit $\\Pi(x) = 0$. En dessous : perte ; au-dessus : bénéfice. Ne pas confondre avec le maximum de profit.' },
        { term: 'Profit maximal', def: 'Atteint quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, c\'est-à-dire quand la recette marginale égale le coût marginal. Vérifier $\\Pi\'\'(x) < 0$ pour confirmer le maximum.' }
      ],
      method: {
        title: 'Optimiser une fonction économique',
        steps: [
          '<strong>Optimisation économique</strong> : définir la fonction à optimiser (profit, coût, recette) sur son domaine.<br/><br/><strong>Exemple :</strong> $R(x) = 20x$ (prix unitaire $20$ €), $C(x) = x^2 + 4x + 30$. Profit : $\\Pi(x) = -x^2 + 16x - 30$.',
          '<strong>Dérivée et points critiques</strong> : calculer la dérivée et résoudre $f\'(x)=0$.<br/><br/><strong>Exemple :</strong> $\\Pi\'(x) = -2x + 16 = 0 \\Rightarrow x^* = 8$ unités.',
          '<strong>Vérification du maximum</strong> : vérifier le signe de $f\'$ ou $f\'\'$ de part et d\'autre du point critique.<br/><br/><strong>Exemple :</strong> $\\Pi\'\'(x) = -2 < 0$ : c\'est bien un maximum.',
          '<strong>Interprétation économique</strong> : traduire le résultat en unités concrètes (quantité, profit).<br/><br/><strong>Exemple :</strong> $\\Pi(8) = -64 + 128 - 30 = 34$ €. Produire $8$ unités maximise le profit à $34$ €.'
        ]
      },
      example: {
        statement: 'Une PME fabrique des capteurs. Le coût total est $C(x) = 0{,}5x^2 + 3x + 100$ € et le prix de vente unitaire est $p = 25$ € ($x$ = nombre de capteurs). Déterminer la quantité optimale et le profit maximal.',
        steps: [
          'Recette : $R(x) = 25x$.',
          'Profit : $\\Pi(x) = R(x) - C(x) = 25x - 0{,}5x^2 - 3x - 100 = -0{,}5x^2 + 22x - 100$.',
          'Dérivée : $\\Pi\'(x) = -x + 22 = 0 \\Rightarrow x^* = 22$ capteurs.',
          'Vérification : $\\Pi\'\'(x) = -1 < 0$ → maximum confirmé.',
          'Profit maximal : $\\Pi(22) = -0{,}5 \\times 484 + 22 \\times 22 - 100 = -242 + 484 - 100 = 142$ €.'
        ],
        answer: 'Produire $22$ capteurs pour un profit maximal de $142$ €. Le coût marginal au point optimal vaut $C\'(22) = 22 + 3 = 25$ €/unité, qui est bien égal au prix de vente.'
      },
      formulas: [
        'Coût marginal : $C_m(x)=C\'(x)$',
        'Recette marginale : $R_m(x)=R\'(x)$',
        'Profit maximal : $R\'(x)=C\'(x)$',
        'Profit : $\\Pi(x)=R(x)-C(x)$'
      ],
      recap: [
        'Le profit est maximal quand $R\'(x) = C\'(x)$ (recette marginale = coût marginal), pas quand $R(x) = C(x)$ (seuil de rentabilité).',
        'Toujours vérifier la nature de l\'extremum : $\\Pi\'\'(x^*) < 0$ confirme un maximum, $> 0$ un minimum.',
        'Au point optimal, le coût marginal est exactement égal au prix de vente (si prix constant).',
        'La quantité optimale doit être un entier positif : si $x^* = 4{,}7$, comparer $\\Pi(4)$ et $\\Pi(5)$.'
      ],
      piege: 'Vérifier toujours le domaine de validité : une quantité ne peut pas être négative. Un extremum hors du domaine physique est sans intérêt économique.'
    },
    quiz: [
      { q: 'Une entreprise a recette $R(x)$ et coût $C(x)$. Un étudiant dit : "Le profit est maximal quand $R(x) = C(x)$." Quelle est son erreur ?', options: ['$R(x)=C(x)$ est le SEUIL DE RENTABILITÉ (profit nul). Le maximum est quand $R\'(x)=C\'(x)$ (recette marginale = coût marginal)', 'L\'étudiant a raison : $R=C$ annule le profit, donc le maximise', 'Le maximum est quand $R\'(x)=0$ et $C\'(x)=0$ séparément', '$R(x)=C(x)$ donne le minimum du profit, pas le maximum'], answer: 0, correction: '$\\Pi(x)=R(x)-C(x)$. Le profit est NUL (pas maximum) quand $R=C$. Le maximum est où $\\Pi\'=0$, soit $R\'(x)=C\'(x)$ : la recette marginale égale le coût marginal. L\'intuition : tant que produire une unité de plus rapporte plus qu\'elle ne coûte ($R\'(x)>C\'(x)$), on continue. On s\'arrête quand les deux sont égaux.' },
      { q: 'Le profit est maximal quand :', options: ['$C(x)$ est minimal', '$R(x)$ est maximal', '$R\'(x)=C\'(x)$', '$R(x)=C(x)$'], answer: 2, correction: 'Le profit $\\Pi=R-C$ est stationnaire quand $\\Pi\'=R\'-C\'=0$, soit $R\'=C\'$.' },
      { q: 'Si $\\Pi\'(x)>0$ pour $x<5$ et $\\Pi\'(x)<0$ pour $x>5$, le profit est maximisé en :', options: ['$x=0$', '$x=5$', '$x=+\\infty$', 'Aucun maximum'], answer: 1, correction: '$\\Pi\'$ change de signe de $+$ à $-$ en $x=5$ : maximum en $x=5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), b = rand(3, 8);
        return {
          statement: `Le profit est $\\Pi(x)=-${a}x^2+${2*a*b}x-10$ (en k€). Trouver la quantité $x^*$ qui maximise le profit.`,
          answer: b,
          tolerance: 0,
          unit: 'unités',
          hint: `Résoudre $\\Pi'(x)=0$ : $-${2*a}x+${2*a*b}=0$.`,
          solution: [`$\\Pi'(x)=-${2*a}x+${2*a*b}=0 \\Rightarrow x=${b}$`]
        };
      }
    },
    probleme: {
      context: 'Une entreprise a pour coût total $C(x)=0{,}5x^2+2x+50$ et vend à prix unitaire $p=10-0{,}2x$ (en €, $x\\ge0$).',
      tasks: [
        'Exprimer la recette totale $R(x)$ et le profit $\\Pi(x)$.',
        'Calculer $\\Pi\'(x)$ et la quantité optimale.',
        'Calculer le profit maximum.'
      ],
      solutions: [
        '$R(x)=x\\cdot p=(10-0{,}2x)x=10x-0{,}2x^2$. $\\Pi(x)=R-C=10x-0{,}2x^2-0{,}5x^2-2x-50=-0{,}7x^2+8x-50$.',
        '$\\Pi\'(x)=-1{,}4x+8=0 \\Rightarrow x=\\frac{8}{1{,}4}\\approx5{,}71$.',
        '$\\Pi(5{,}71)\\approx-0{,}7\\times32{,}6+8\\times5{,}71-50\\approx-22{,}8+45{,}7-50=-27{,}1$. Perte : ce modèle n\'est pas rentable !'
      ],
      finalAnswer: 'Optimum $x\\approx5{,}7$ unités, mais $\\Pi_{max}\\approx-27$ € : production non rentable à ces coûts.'
    },

    evaluation: {
      title: 'Évaluation — Dérivation appliquée',
      duration: '40 min',
      questions: [
        {
          statement: 'Le profit d\'une entreprise est $\\Pi(x) = -2x^2 + 24x - 50$ (en k€). Calculer la quantité $x^*$ qui maximise le profit.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'unités',
          points: 2,
          correction: '$\\Pi\'(x) = -4x + 24 = 0 \\Rightarrow x^* = 6$. On vérifie : $\\Pi\'\'(x) = -4 < 0$ donc c\'est bien un maximum.'
        },
        {
          statement: 'Le profit est maximal quand :',
          type: 'multiple-choice',
          options: ['La recette est maximale', 'Le coût est minimal', 'La recette marginale égale le coût marginal : $R\'(x) = C\'(x)$', 'La recette égale le coût : $R(x) = C(x)$'],
          answer: 2,
          points: 2,
          correction: '$\\Pi(x) = R(x) - C(x)$. Le profit est stationnaire quand $\\Pi\'(x) = R\'(x) - C\'(x) = 0$, soit $R\'(x) = C\'(x)$. Attention : $R(x) = C(x)$ est le seuil de rentabilité (profit nul), pas la condition de maximum.'
        },
        {
          statement: 'Le coût total est $C(x) = 0{,}1x^3 - 1{,}5x^2 + 10x + 20$. Calculer le coût marginal $C\'(x)$ pour $x = 5$ (en €/unité).',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.01,
          unit: '€/unité',
          points: 3,
          correction: '$C\'(x) = 0{,}3x^2 - 3x + 10$. Pour $x = 5$ : $C\'(5) = 0{,}3 \\times 25 - 3 \\times 5 + 10 = 7{,}5 - 15 + 10 = 2{,}5$ €/unité.'
        },
        {
          statement: 'Si $\\Pi\'(x) > 0$ pour $x < 10$ et $\\Pi\'(x) < 0$ pour $x > 10$, alors $x = 10$ est :',
          type: 'multiple-choice',
          options: ['Un minimum de profit', 'Un maximum de profit', 'Un point d\'inflexion', 'Le seuil de rentabilité'],
          answer: 1,
          points: 1,
          correction: '$\\Pi\'$ passe du positif au négatif en $x = 10$ : le profit croît avant et décroît après. C\'est donc un maximum.'
        },
        {
          statement: 'Une entreprise vend au prix unitaire $p = 30$ € et a un coût total $C(x) = x^2 + 10x + 20$. Calculer le profit maximal (en €).',
          type: 'numeric',
          answer: 80,
          tolerance: 0.1,
          unit: '€',
          points: 2,
          correction: '$R(x) = 30x$. $\\Pi(x) = 30x - x^2 - 10x - 20 = -x^2 + 20x - 20$. $\\Pi\'(x) = -2x + 20 = 0 \\Rightarrow x = 10$. $\\Pi(10) = -100 + 200 - 20 = 80$ €.'
        }
      ]
    }
  }
);
