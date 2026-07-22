window.MODULES.push(
    {
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
      diagram: {
        theme: 'maths',
        kicker: 'Boîte à moustaches',
        title: 'Les 8 temps au 100 m : de la série à la boîte à moustaches',
        description: 'Série ordonnée (en secondes) : $11{,}2\\,;\\,11{,}5\\,;\\,11{,}8\\,;\\,12{,}0\\,;\\,12{,}3\\,;\\,12{,}7\\,;\\,13{,}5\\,;\\,14{,}1$. La boîte va de $Q_1 = 11{,}65$ à $Q_3 = 13{,}1$, coupée par la médiane $Me = 12{,}15$, avec des moustaches jusqu\'au minimum et au maximum.',
        svg: `
          <svg viewBox="0 0 490 230" role="img" aria-labelledby="stats-boxplot-title stats-boxplot-desc">
            <title id="stats-boxplot-title">Boite a moustaches des temps de 8 coureurs au 100 m</title>
            <desc id="stats-boxplot-desc">Huit points representant les temps ordonnes sont places au dessus d'une boite a moustaches allant du minimum 11,2 au maximum 14,1 secondes, avec la boite entre le premier quartile 11,65 et le troisieme quartile 13,1, coupee par la mediane 12,15.</desc>
            <line class="grid-line" x1="60.0" y1="40" x2="60.0" y2="170"></line>
            <line class="grid-line" x1="112.9" y1="40" x2="112.9" y2="170"></line>
            <line class="grid-line" x1="165.7" y1="40" x2="165.7" y2="170"></line>
            <line class="grid-line" x1="218.6" y1="40" x2="218.6" y2="170"></line>
            <line class="grid-line" x1="271.4" y1="40" x2="271.4" y2="170"></line>
            <line class="grid-line" x1="324.3" y1="40" x2="324.3" y2="170"></line>
            <line class="grid-line" x1="377.1" y1="40" x2="377.1" y2="170"></line>
            <line class="grid-line" x1="430.0" y1="40" x2="430.0" y2="170"></line>
            <text class="label-soft" x="60" y="26">Les 8 temps mesurés (s)</text>
            <circle class="plot-point-alt" cx="81.1" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="112.9" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="144.6" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="165.7" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="197.4" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="239.7" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="324.3" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="387.7" cy="45" r="3"></circle>
            <line class="axis" x1="81.1" y1="110" x2="128.7" y2="110"></line>
            <line class="axis" x1="282.0" y1="110" x2="387.7" y2="110"></line>
            <line class="axis" x1="81.1" y1="100" x2="81.1" y2="120"></line>
            <line class="axis" x1="387.7" y1="100" x2="387.7" y2="120"></line>
            <rect class="frame-line" x="128.7" y="90" width="153.3" height="40" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
            <line class="curve-main" x1="181.6" y1="90" x2="181.6" y2="130"></line>
            <circle class="plot-point-alt" cx="81.1" cy="110" r="4"></circle>
            <circle class="plot-point" cx="181.6" cy="110" r="4"></circle>
            <circle class="plot-point-alt" cx="387.7" cy="110" r="4"></circle>
            <text class="tick-label" x="128.7" y="84" text-anchor="middle">Q1</text>
            <text class="annotation-label" x="181.6" y="84" text-anchor="middle">Médiane</text>
            <text class="tick-label" x="282.0" y="84" text-anchor="middle">Q3</text>
            <text class="tick-label" x="81.1" y="145" text-anchor="end">Min : 11,2 s</text>
            <text class="tick-label" x="128.7" y="145" text-anchor="middle">11,65 s</text>
            <text class="annotation-label" x="181.6" y="145" text-anchor="middle">12,15 s</text>
            <text class="tick-label" x="282.0" y="145" text-anchor="middle">13,1 s</text>
            <text class="tick-label" x="387.7" y="145" text-anchor="start">Max : 14,1 s</text>
            <line class="axis" x1="30" y1="170" x2="460" y2="170"></line>
            <line class="axis" x1="60.0" y1="170" x2="60.0" y2="176"></line>
            <line class="axis" x1="112.9" y1="170" x2="112.9" y2="176"></line>
            <line class="axis" x1="165.7" y1="170" x2="165.7" y2="176"></line>
            <line class="axis" x1="218.6" y1="170" x2="218.6" y2="176"></line>
            <line class="axis" x1="271.4" y1="170" x2="271.4" y2="176"></line>
            <line class="axis" x1="324.3" y1="170" x2="324.3" y2="176"></line>
            <line class="axis" x1="377.1" y1="170" x2="377.1" y2="176"></line>
            <line class="axis" x1="430.0" y1="170" x2="430.0" y2="176"></line>
            <text class="tick-label" x="60.0" y="188" text-anchor="middle">11,0</text>
            <text class="tick-label" x="112.9" y="188" text-anchor="middle">11,5</text>
            <text class="tick-label" x="165.7" y="188" text-anchor="middle">12,0</text>
            <text class="tick-label" x="218.6" y="188" text-anchor="middle">12,5</text>
            <text class="tick-label" x="271.4" y="188" text-anchor="middle">13,0</text>
            <text class="tick-label" x="324.3" y="188" text-anchor="middle">13,5</text>
            <text class="tick-label" x="377.1" y="188" text-anchor="middle">14,0</text>
            <text class="tick-label" x="430.0" y="188" text-anchor="middle">14,5</text>
            <text class="tick-label" x="460" y="205" text-anchor="end">Temps (s)</text>
          </svg>
        `,
        notes: [
          'Série ordonnée : $11{,}2\\,;\\,11{,}5\\,;\\,11{,}8\\,;\\,12{,}0\\,;\\,12{,}3\\,;\\,12{,}7\\,;\\,13{,}5\\,;\\,14{,}1$ (les 8 points au-dessus de la boîte).',
          '$n = 8$ (pair) → $Me = \\dfrac{x_4 + x_5}{2} = \\dfrac{12{,}0 + 12{,}3}{2} = 12{,}15$ s (trait épais dans la boîte).',
          'La boîte va de $Q_1 = 11{,}65$ s à $Q_3 = 13{,}1$ s : elle contient les $50\\%$ centraux des temps.',
          'Les moustaches relient la boîte au minimum ($11{,}2$ s) et au maximum ($14{,}1$ s).'
        ],
        reading: 'La largeur de la boîte, $IQR = Q_3 - Q_1 = 13{,}1 - 11{,}65 = 1{,}45$ s, mesure la dispersion des temps centraux sans être influencée par le coureur le plus lent.',
        caption: 'Boîte à moustaches construite à partir des 8 temps réels de l\'exemple du cours.'
      },
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
  }
);
