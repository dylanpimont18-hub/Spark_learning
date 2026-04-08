window.MODULES.push(
    id: '4e-statistiques',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Statistiques : médiane et quartiles',
    subtitle: 'Médiane, Q1, Q3, boîte à moustaches',
    keywords: ['Médiane', 'Quartile', 'Étendue', 'Boîte à moustaches', 'Série ordonnée'],
    physics: false,
    cours: {
      intro: 'La médiane est la valeur qui partage une série ordonnée en deux groupes d\'effectif égal : autant de valeurs en dessous qu\'au-dessus. Contrairement à la moyenne, elle n\'est pas perturbée par les valeurs extrêmes (salaires de PDG, erreurs de mesure…).' +
        '<br/><br/>' +
        'Les quartiles $Q_1$ et $Q_3$ affinent cette idée : $25\\%$ des valeurs sont inférieures à $Q_1$ et $75\\%$ sont inférieures à $Q_3$. L\'écart interquartile $IQR = Q_3 - Q_1$ mesure la dispersion de la moitié centrale des données, sans être biaisé par les extrêmes.' +
        '<br/><br/>' +
        'La <strong>boîte à moustaches</strong> représente graphiquement la médiane et les quartiles pour visualiser rapidement la distribution : la « boîte » contient les $50\\%$ centraux, et les « moustaches » s\'étendent jusqu\'aux valeurs min et max.' +
        '<br/><br/>' +
        'En sciences, on utilise la médiane quand les données contiennent des valeurs aberrantes (outliers), car la moyenne serait alors trompeuse.',
      definitions: [
        { term: 'Médiane', def: 'Valeur qui partage une série ordonnée en deux moitiés d\'effectif égal. Pour $n$ impair : valeur centrale ; pour $n$ pair : moyenne des deux valeurs centrales.' },
        { term: 'Premier quartile $Q_1$', def: 'Valeur en dessous de laquelle se trouvent $25\\%$ des données. C\'est la médiane de la moitié inférieure de la série.' },
        { term: 'Troisième quartile $Q_3$', def: 'Valeur en dessous de laquelle se trouvent $75\\%$ des données. C\'est la médiane de la moitié supérieure de la série.' },
        { term: 'Écart interquartile', def: '$IQR = Q_3 - Q_1$. Mesure la dispersion des $50\\%$ centraux des données, sans être affecté par les valeurs extrêmes.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Ordonner</strong> la série dans l\'ordre croissant. <strong>Exemple :</strong> $7, 3, 9, 1, 5$ → $1, 3, 5, 7, 9$.',
          '<strong>Médiane $Me$</strong> : valeur centrale si $n$ est impair ; moyenne des deux valeurs centrales si $n$ est pair. <strong>Exemple :</strong> série $1, 3, 5, 7, 9$ ($n = 5$) → $Me = 5$ (la $3^e$ valeur).',
          '<strong>Premier quartile $Q_1$</strong> : médiane de la moitié inférieure (valeurs $< Me$). <strong>Exemple :</strong> moitié inférieure $\\{1, 3\\}$ → $Q_1 = \\dfrac{1+3}{2} = 2$.',
          '<strong>Troisième quartile $Q_3$</strong> : médiane de la moitié supérieure (valeurs $> Me$). <strong>Exemple :</strong> moitié supérieure $\\{7, 9\\}$ → $Q_3 = \\dfrac{7+9}{2} = 8$. $IQR = 8 - 2 = 6$.'
        ]
      },
      example: {
        statement: 'Les temps (en secondes) de $8$ coureurs au $100$ m sont : $12{,}3$ ; $11{,}8$ ; $13{,}5$ ; $11{,}2$ ; $12{,}7$ ; $14{,}1$ ; $11{,}5$ ; $12{,}0$. Calculer la médiane et les quartiles.',
        steps: [
          'Série ordonnée : $11{,}2$ ; $11{,}5$ ; $11{,}8$ ; $12{,}0$ ; $12{,}3$ ; $12{,}7$ ; $13{,}5$ ; $14{,}1$.',
          '$n = 8$ (pair) → $Me = \\dfrac{x_4 + x_5}{2} = \\dfrac{12{,}0 + 12{,}3}{2} = 12{,}15$ s.',
          'Moitié inférieure $\\{11{,}2 ; 11{,}5 ; 11{,}8 ; 12{,}0\\}$ → $Q_1 = \\dfrac{11{,}5 + 11{,}8}{2} = 11{,}65$ s. Moitié supérieure $\\{12{,}3 ; 12{,}7 ; 13{,}5 ; 14{,}1\\}$ → $Q_3 = \\dfrac{12{,}7 + 13{,}5}{2} = 13{,}1$ s.'
        ],
        answer: '$Me = 12{,}15$ s, $Q_1 = 11{,}65$ s, $Q_3 = 13{,}1$ s, $IQR = 13{,}1 - 11{,}65 = 1{,}45$ s.'
      },
      formulas: [
        'Écart interquartile : $IQR = Q_3 - Q_1$',
        'Série de $n$ valeurs ordonnées : $Me = x_{(n+1)/2}$ si $n$ impair',
        'Si $n$ pair : $Me = \\dfrac{x_{n/2} + x_{n/2+1}}{2}$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Indicateur</th><th style="border:1px solid var(--border);padding:6px 14px">Position</th><th style="border:1px solid var(--border);padding:6px 14px">Sensible aux extrêmes ?</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Moyenne</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{\\sum x_i}{n}$</td><td style="border:1px solid var(--border);padding:6px 14px">Oui</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Médiane ($Me$)</td><td style="border:1px solid var(--border);padding:6px 14px">Valeur centrale ($50\\%$)</td><td style="border:1px solid var(--border);padding:6px 14px">Non (robuste)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$Q_1$</td><td style="border:1px solid var(--border);padding:6px 14px">$25\\%$ des données</td><td style="border:1px solid var(--border);padding:6px 14px">Non</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$Q_3$</td><td style="border:1px solid var(--border);padding:6px 14px">$75\\%$ des données</td><td style="border:1px solid var(--border);padding:6px 14px">Non</td></tr></table>',
      recap: [
        'Toujours ordonner la série avant de calculer médiane et quartiles.',
        '$n$ impair → la médiane est la valeur centrale ; $n$ pair → c\'est la moyenne des deux valeurs centrales.',
        'La médiane résiste aux valeurs extrêmes, contrairement à la moyenne.',
        '$IQR = Q_3 - Q_1$ mesure la dispersion des $50\\%$ centraux des données.'
      ],
      piege: 'Piège : la médiane d\'une série impaire est la valeur du milieu (pas la moyenne). Pour $n = 7$, la médiane est la $4^e$ valeur (pas la moyenne des $3^e$ et $4^e$).'
    },
    quiz: [
      {
        q: 'Quelle est la médiane de la série : $3, 5, 7, 9, 11$ ?',
        options: ['$6$', '$7$', '$5$', '$9$'],
        answer: 1,
        correction: 'Série déjà ordonnée, $n = 5$ (impair). La médiane est la $3^e$ valeur : $7$.'
      },
      {
        q: 'Pour la série $2, 4, 6, 8, 10, 12$, quelle est la médiane ?',
        options: ['$6$', '$7$', '$6{,}5$', '$8$'],
        answer: 1,
        correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{6 + 8}{2} = 7$.'
      },
      {
        q: 'Un élève calcule la médiane de la série $1, 3, 5, 7, 9, 11$ ($6$ valeurs). Il prend la $3^e$ valeur et écrit : médiane $= 5$. Quelle est son erreur ?',
        options: [
          'Pour $n$ pair, la médiane est la moyenne des $3^e$ et $4^e$ valeurs : $(5+7)/2 = 6$',
          'Il devait prendre la $4^e$ valeur : médiane $= 7$',
          'Il devait d\'abord trier la série dans l\'ordre croissant',
          'Il n\'y a pas d\'erreur, médiane $= 5$'
        ],
        answer: 0,
        correction: 'Pour une série de $n = 6$ valeurs (nombre pair), la médiane n\'est pas une valeur de la série : c\'est la moyenne des deux valeurs centrales, soit la $3^e$ et la $4^e$. Ici, médiane $= \\dfrac{5 + 7}{2} = 6$. Prendre uniquement la $3^e$ valeur est l\'erreur classique quand $n$ est pair.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = pick([5, 7, 9]);
        const vals = Array.from({length: n}, () => rand(1, 20)).sort((a,b) => a-b);
        const med = vals[Math.floor(n / 2)];
        return {
          statement: `Calcule la médiane de la série ordonnée : $${vals.join(', ')}$.`,
          answer: med,
          tolerance: 0,
          unit: '',
          hint: `La série a $${n}$ valeurs (impair). La médiane est la valeur à la position $${Math.floor(n/2)+1}$.`,
          solution: [
            `Série ordonnée : $${vals.join(', ')}$.`,
            `$n = ${n}$ impair → médiane = $${Math.floor(n/2)+1}^e$ valeur = $${med}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Les salaires mensuels (en k€) dans une petite entreprise de $9$ employés sont : $1{,}5$ ; $1{,}8$ ; $2{,}0$ ; $2{,}1$ ; $2{,}3$ ; $2{,}5$ ; $2{,}8$ ; $3{,}0$ ; $12{,}0$ (le dirigeant).',
      tasks: [
        'Calculer la moyenne des salaires.',
        'Calculer la médiane.',
        'Laquelle est plus représentative de la majorité des employés ? Pourquoi ?'
      ],
      solutions: [
        'Somme : $1{,}5+1{,}8+2{,}0+2{,}1+2{,}3+2{,}5+2{,}8+3{,}0+12{,}0 = 30$ k€. Moyenne : $30/9 \\approx 3{,}33$ k€.',
        '$n = 9$ impair → $5^e$ valeur : $2{,}3$ k€.',
        'La médiane ($2{,}3$ k€) est plus représentative : la moyenne est tirée vers le haut par le salaire élevé du dirigeant ($12$ k€).'
      ],
      finalAnswer: 'Médiane $= 2{,}3$ k€, bien plus représentative que la moyenne $\\approx 3{,}33$ k€ biaisée par le dirigeant.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques : médiane et quartiles',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la médiane de la série : $4, 7, 9, 12, 15, 18, 21$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Série déjà ordonnée, $n = 7$ (impair). La médiane est la $4^e$ valeur : $12$.'
        },
        {
          statement: 'Calculer la médiane de la série : $3, 5, 8, 11, 14, 20$.',
          type: 'numeric',
          answer: 9.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{8 + 11}{2} = 9{,}5$.'
        },
        {
          statement: 'Pour la série ordonnée $2, 5, 7, 9, 11, 14, 17, 20$, le premier quartile $Q_1$ est la médiane de la moitié inférieure $\\{2, 5, 7, 9\\}$. Que vaut $Q_1$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Moitié inférieure : $\\{2, 5, 7, 9\\}$. $n = 4$ (pair) → $Q_1 = \\dfrac{5 + 7}{2} = 6$.'
        },
        {
          statement: 'Quel indicateur statistique n\'est pas affecté par les valeurs extrêmes ?',
          type: 'multiple-choice',
          options: ['La moyenne', 'La médiane', 'La somme', 'L\'étendue'],
          answer: 1,
          points: 2,
          correction: 'La médiane est robuste aux valeurs extrêmes car elle dépend uniquement de la position centrale, pas de la grandeur des valeurs. La moyenne, la somme et l\'étendue sont toutes sensibles aux valeurs extrêmes.'
        },
        {
          statement: 'Pour la série $2, 5, 7, 9, 11, 14, 17, 20$, le troisième quartile $Q_3$ est la médiane de la moitié supérieure $\\{11, 14, 17, 20\\}$. Calculer l\'écart interquartile $IQR = Q_3 - Q_1$. (On donne $Q_1 = 6$.)',
          type: 'numeric',
          answer: 9.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$Q_3 = \\dfrac{14 + 17}{2} = 15{,}5$. $IQR = Q_3 - Q_1 = 15{,}5 - 6 = 9{,}5$.'
        }
      ]
    }
  },

    {
);
