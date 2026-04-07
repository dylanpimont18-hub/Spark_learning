/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-reperage-plan.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-reperage-plan',
    level: 2, subject: 'maths',
    icon: '📐',
    title: 'Repérage dans le plan',
    subtitle: 'Distances, milieux, coordonnées',
    keywords: ['Distance', 'Milieu', 'Coordonnées', 'Repère orthonormé'],
    physics: false,
    cours: {
      intro: 'Dans un repère orthonormé, chaque point du plan est identifié de façon unique par ses deux coordonnées $(x ; y)$. La formule $AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$ est le théorème de Pythagore appliqué au triangle rectangle dont les côtés sont $|x_B-x_A|$ et $|y_B-y_A|$. Le milieu de $[AB]$ a pour coordonnées la moyenne arithmétique de celles des extrémités. Ces formules permettent de prouver des propriétés géométriques (isocèle, rectangle, parallélogramme) par le calcul, sans dessin — c\'est l\'approche de la géométrie analytique.',
      definitions: [
        { term: 'Repère orthonormé', def: 'Système d\'axes perpendiculaires $(Ox, Oy)$ avec la même unité sur chaque axe. Chaque point est repéré par $(x ; y)$.' },
        { term: 'Distance', def: 'Longueur du segment $[AB]$ : $AB = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$, application directe du théorème de Pythagore.' },
        { term: 'Milieu', def: 'Point $M$ situé à égale distance de $A$ et $B$ : $M\\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$.' },
        { term: 'Géométrie analytique', def: 'Méthode qui utilise les coordonnées et le calcul pour prouver des propriétés géométriques (au lieu du raisonnement purement graphique).' }
      ],
      method: {
        title: 'Calculer distance et milieu',
        steps: [
          'Distance $AB$ : $d = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $AB = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$.',
          'Milieu $M$ de $[AB]$ : $M\\left(\\frac{x_A+x_B}{2};\\frac{y_A+y_B}{2}\\right)$. <strong>Exemple :</strong> $A(1 ; 2)$, $B(4 ; 6)$ → $M\\left(\\frac{5}{2} ; 4\\right) = (2{,}5 ; 4)$.',
          'Vérifier en recalculant $MA = MB$. <strong>Exemple :</strong> $MA = \\sqrt{(2{,}5-1)^2+(4-2)^2} = \\sqrt{2{,}25+4} = \\sqrt{6{,}25} = 2{,}5$ et $MB = 2{,}5$ ✓.',
          'Attention aux signes lors des soustractions de coordonnées. <strong>Exemple :</strong> $A(-3 ; 5)$, $B(2 ; -1)$ → $x_B - x_A = 2 - (-3) = 5$ (pas $-1$).'
        ]
      },
      example: {
        statement: 'On donne $A(−2 ; 3)$ et $B(4 ; −1)$. Calculer $AB$ et les coordonnées du milieu $M$.',
        steps: [
          '$AB = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2} = \\sqrt{6^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52}$.',
          '$\\sqrt{52} = \\sqrt{4 \\times 13} = 2\\sqrt{13} \\approx 7{,}21$.',
          'Milieu : $M\\left(\\dfrac{-2+4}{2} ; \\dfrac{3+(-1)}{2}\\right) = M(1 ; 1)$.'
        ],
        answer: '$AB = 2\\sqrt{13} \\approx 7{,}21$ et $M(1 ; 1)$.'
      },
      formulas: [
        '$AB = \\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}$',
        '$M = \\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$'
      ],
      recap: [
        'La distance entre deux points est le théorème de Pythagore appliqué aux écarts de coordonnées.',
        'Le milieu a pour coordonnées la moyenne des abscisses et la moyenne des ordonnées.',
        'Le sens de la soustraction n\'importe pas grâce au carré : $(x_A - x_B)^2 = (x_B - x_A)^2$.',
        'Pour prouver un triangle isocèle : calculer les trois côtés et comparer les longueurs.'
      ],
      piege: 'Ne pas confondre $AB^2 = (x_B-x_A)^2+(y_B-y_A)^2$ (pas de $2\\times$, c\'est la somme de deux carrés).'
    },
    quiz: [
      { q: 'Un élève calcule $AB$ avec $A(-3;2)$ et $B(5;-1)$ et écrit $AB = \\sqrt{(-3-5)^2+(2-(-1))^2}$. Ce calcul est-il correct ?', options: ['Oui : $(-8)^2+3^2 = 73$, donc $AB=\\sqrt{73}$ (le sens de la soustraction ne change pas le carré)', 'Non : il faut toujours faire $x_B - x_A$, jamais $x_A - x_B$', 'Non : il faut utiliser $|x_B-x_A|+|y_B-y_A|$ sans carré', 'Non : les coordonnées négatives s\'additionnent'], answer: 0, correction: 'Les deux écritures donnent le même résultat car $(x_A-x_B)^2 = (x_B-x_A)^2$. $AB = \\sqrt{(-8)^2+3^2} = \\sqrt{64+9} = \\sqrt{73}$ ✓ — le sens de la soustraction n\'importe pas grâce au carré.' },
      { q: 'Distance entre $O(0;0)$ et $A(3;4)$ ?', options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'], answer: 0, correction: '$OA=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.' },
      { q: 'Si $M(3;5)$ est le milieu de $[AB]$ et $A(1;3)$, alors $B$ est :', options: ['$(5;7)$', '$(2;4)$', '$(4;6)$', '$(6;10)$'], answer: 0, correction: '$x_B=2\\times 3-1=5$ ; $y_B=2\\times 5-3=7$. Donc $B(5;7)$.' },
      { q: 'On donne $A(0;0)$, $B(4;0)$ et $C(2;3)$. Le triangle $ABC$ est-il isocèle ?', options: ['Oui, car $AC = BC = \\sqrt{13}$', 'Non, car les trois côtés sont différents', 'Oui, car $AB = AC$', 'Impossible à déterminer sans dessiner'], answer: 0, correction: '$AB = 4$. $AC = \\sqrt{4 + 9} = \\sqrt{13}$. $BC = \\sqrt{4 + 9} = \\sqrt{13}$. Comme $AC = BC$, le triangle est isocèle en $C$. La géométrie analytique permet de prouver des propriétés par le calcul, sans dessin.' },
      { q: 'Un élève confond $AB^2$ avec $(x_B - x_A)^2 + 2(y_B - y_A)^2$. Pourquoi est-ce faux ?', options: ['La formule correcte est $(x_B-x_A)^2 + (y_B-y_A)^2$ sans coefficient $2$ — c\'est Pythagore, pas une identité remarquable', 'Le coefficient $2$ est correct dans un repère non orthonormé', 'L\'erreur est le signe, pas le coefficient', 'C\'est correct si l\'on divise par $2$ à la fin'], answer: 0, correction: 'La formule de la distance vient du théorème de Pythagore appliqué au triangle rectangle formé par les écarts horizontaux et verticaux. C\'est $AB^2 = \\Delta x^2 + \\Delta y^2$, jamais $2 \\cdot \\Delta y^2$. L\'ajout d\'un coefficient $2$ est probablement une confusion avec l\'identité $(a+b)^2 = a^2 + 2ab + b^2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Sur un plan de ville (1 unité = 100 m), un piéton part de', dest: 'et se rend à', unit: 'unités' },
          { intro: 'Sur une carte au trésor (1 unité = 1 pas), le point de départ est', dest: 'et le trésor est en', unit: 'pas' },
          { intro: 'Dans un repère orthonormé, un robot part du point', dest: 'et doit atteindre', unit: 'unités' }
        ];
        const ctx = pick(contexts);
        const triples = [[3,4,5],[5,12,13],[6,8,10],[8,15,17],[9,12,15]];
        const t = pick(triples);
        const signX = pick([1, -1]);
        const signY = pick([1, -1]);
        const x1 = rand(-3, 5);
        const y1 = rand(-3, 5);
        const x2 = x1 + signX * t[0];
        const y2 = y1 + signY * t[1];
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        return {
          statement: `${ctx.intro} $A(${x1};${y1})$ ${ctx.dest} $B(${x2};${y2})$.<br/><br/><strong>1.</strong> Calculer la distance $AB$.<br/><strong>2.</strong> Déterminer les coordonnées du milieu $M$ de $[AB]$.<br/><strong>3.</strong> Vérifier que $MA = MB = AB/2$.<br/><br/>Donne la distance $AB$.`,
          answer: t[2],
          tolerance: 0.01,
          unit: ctx.unit,
          hint: `$AB = \\sqrt{(${x2}-${x1 < 0 ? '('+x1+')' : x1})^2+(${y2}-${y1 < 0 ? '('+y1+')' : y1})^2}$. Attention aux signes !`,
          solution: [
            `$AB = \\sqrt{(${x2}-(${x1}))^2+(${y2}-(${y1}))^2} = \\sqrt{${t[0]}^2+${t[1]}^2} = \\sqrt{${t[0]*t[0]}+${t[1]*t[1]}} = \\sqrt{${t[2]*t[2]}} = ${t[2]}$`,
            `Milieu $M\\left(\\frac{${x1}+${x2}}{2};\\frac{${y1}+${y2}}{2}\\right) = M(${mx};${my})$`,
            `Vérification : $MA = ${t[2]/2}$ et $MB = ${t[2]/2}$ ✓`
          ]
        };
      }
    },
    probleme: {
      context: 'Sur une carte (1 unité = 1 km), trois villes : $A(1;2)$, $B(7;2)$, $C(4;6)$.',
      tasks: [
        'Calculer les longueurs $AB$, $AC$ et $BC$.',
        'Déterminer les coordonnées du milieu $M$ de $[BC]$.',
        'Vérifier que $AM$ est la médiane issue de $A$.'
      ],
      solutions: [
        '$AB=6$ km ; $AC=\\sqrt{9+16}=5$ km ; $BC=\\sqrt{9+16}=5$ km.',
        '$M=\\left(\\frac{7+4}{2};\\frac{2+6}{2}\\right)=(5{,}5;4)$.',
        '$AM=\\sqrt{(5{,}5-1)^2+(4-2)^2}=\\sqrt{20{,}25+4}=\\sqrt{24{,}25}\\approx 4{,}92$ km.'
      ],
      finalAnswer: 'Triangle isocèle : $AC=BC=5$ km. Milieu de $BC$ : $M(5{,}5;4)$.'
    },

    evaluation: {
      title: 'Évaluation — Repérage dans le plan',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la distance entre les points $A(1 ; 3)$ et $B(4 ; 7)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$AB = \\sqrt{(4-1)^2 + (7-3)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.'
        },
        {
          statement: 'Calculer les coordonnées du milieu $M$ de $[AB]$ avec $A(2 ; 6)$ et $B(8 ; 4)$. Donner l\'abscisse de $M$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{2 + 8}{2} = 5$. (Et $y_M = \\dfrac{6+4}{2} = 5$, donc $M(5 ; 5)$.)'
        },
        {
          statement: 'Si $M(3 ; 4)$ est le milieu de $[AB]$ et $A(-1 ; 2)$, calculer l\'ordonnée de $B$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y_M = \\dfrac{y_A + y_B}{2} \\Rightarrow 4 = \\dfrac{2 + y_B}{2} \\Rightarrow 8 = 2 + y_B \\Rightarrow y_B = 6$.'
        },
        {
          statement: 'On donne $A(0;0)$, $B(6;0)$ et $C(3;4)$. Le triangle $ABC$ est-il isocèle ?',
          type: 'multiple-choice',
          options: ['Oui, car $AC = BC = 5$', 'Oui, car $AB = AC$', 'Non, tous les côtés sont différents', 'Oui, car $AB = BC$'],
          answer: 0,
          points: 2,
          correction: '$AB = 6$. $AC = \\sqrt{9 + 16} = 5$. $BC = \\sqrt{9 + 16} = 5$. Comme $AC = BC = 5$, le triangle est isocèle en $C$.'
        },
        {
          statement: 'Calculer la distance entre $P(-2 ; 5)$ et $Q(3 ; -7)$.',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$PQ = \\sqrt{(3-(-2))^2 + (-7-5)^2} = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.'
        }
      ]
    }
  });
