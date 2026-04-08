window.MODULES.push(
    id: '4e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités : calcul et événements',
    subtitle: 'Union, intersection, complémentaire',
    keywords: ['Probabilité', 'Événement', 'Union', 'Intersection', 'Complémentaire', 'Incompatibles'],
    physics: false,
    cours: {
      intro: 'La probabilité mesure la fréquence à long terme d\'un événement dans une expérience aléatoire. En 4e, on apprend à combiner des événements : la réunion $A \\cup B$ (« au moins l\'un des deux se réalise ») et l\'intersection $A \\cap B$ (« les deux se réalisent simultanément »).' +
        '<br/><br/>' +
        'La formule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ évite de compter deux fois les résultats favorables aux deux événements à la fois. Deux événements sont <strong>incompatibles</strong> si $A \\cap B = \\emptyset$ : ils ne peuvent jamais se produire ensemble, et la formule se simplifie en $P(A \\cup B) = P(A) + P(B)$.' +
        '<br/><br/>' +
        'Enfin, $P(\\bar{A}) = 1 - P(A)$ car $A$ et son contraire couvrent tous les cas possibles. Cette formule est très utile quand le contraire est plus simple à calculer que l\'événement lui-même.' +
        '<br/><br/>' +
        'En pratique, les probabilités servent en météo (risque de pluie), en médecine (fiabilité d\'un test), en ingénierie (risque de panne) et dans bien d\'autres domaines.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance. L\'ensemble de tous les résultats possibles est l\'univers $\\Omega$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers $\\Omega$. Un événement est réalisé si le résultat de l\'expérience lui appartient.' },
        { term: 'Événements incompatibles', def: 'Deux événements $A$ et $B$ qui ne peuvent pas se produire simultanément : $A \\cap B = \\emptyset$.' },
        { term: 'Événement contraire', def: 'Le contraire de $A$, noté $\\bar{A}$, est l\'ensemble des résultats qui ne sont pas dans $A$. $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Définir les événements</strong> et l\'univers $\\Omega$. <strong>Exemple :</strong> on lance un dé → $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. $A$ = « obtenir un pair » = $\\{2, 4, 6\\}$.',
          '<strong>Calculer $P(A)$, $P(B)$</strong> et si nécessaire $P(A \\cap B)$. <strong>Exemple :</strong> $P(A) = \\dfrac{3}{6} = 0{,}5$. Si $B$ = « obtenir un $6$ », alors $P(A \\cap B) = P(\\{6\\}) = \\dfrac{1}{6}$.',
          '<strong>Appliquer les formules</strong> : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si incompatibles : $P(A \\cap B) = 0$. <strong>Exemple :</strong> $P(A \\cup B) = \\dfrac{3}{6} + \\dfrac{1}{6} - \\dfrac{1}{6} = \\dfrac{3}{6} = 0{,}5$.'
        ]
      },
      example: {
        statement: 'Dans un jeu de $32$ cartes, on tire une carte au hasard. $A$ = « obtenir un cœur » ($8$ cartes) et $B$ = « obtenir un roi » ($4$ cartes). Quelle est la probabilité d\'obtenir un cœur ou un roi ?',
        steps: [
          '$P(A) = \\dfrac{8}{32} = \\dfrac{1}{4}$ et $P(B) = \\dfrac{4}{32} = \\dfrac{1}{8}$.',
          '$A \\cap B$ = « obtenir le roi de cœur » → $P(A \\cap B) = \\dfrac{1}{32}$.',
          '$P(A \\cup B) = \\dfrac{1}{4} + \\dfrac{1}{8} - \\dfrac{1}{32} = \\dfrac{8 + 4 - 1}{32} = \\dfrac{11}{32} \\approx 0{,}34$.'
        ],
        answer: 'La probabilité d\'obtenir un cœur ou un roi est $\\dfrac{11}{32} \\approx 0{,}34$.'
      },
      formulas: [
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        'Événements incompatibles : $P(A \\cap B) = 0 \\Rightarrow P(A \\cup B) = P(A) + P(B)$',
        '$0 \\leq P(A) \\leq 1$ et $P(\\Omega) = 1$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Formule</th><th style="border:1px solid var(--border);padding:6px 14px">Condition</th><th style="border:1px solid var(--border);padding:6px 14px">Utilisation</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$</td><td style="border:1px solid var(--border);padding:6px 14px">Toujours</td><td style="border:1px solid var(--border);padding:6px 14px">Union de deux événements</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$P(A \\cup B) = P(A) + P(B)$</td><td style="border:1px solid var(--border);padding:6px 14px">$A \\cap B = \\emptyset$</td><td style="border:1px solid var(--border);padding:6px 14px">Événements incompatibles</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$P(\\bar{A}) = 1 - P(A)$</td><td style="border:1px solid var(--border);padding:6px 14px">Toujours</td><td style="border:1px solid var(--border);padding:6px 14px">Événement contraire</td></tr></table>',
      recap: [
        '$P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$ (équiprobabilité).',
        'Union : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — ne pas oublier de soustraire l\'intersection.',
        'Si $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$), alors $P(A \\cup B) = P(A) + P(B)$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$ — utile quand le contraire est plus simple à calculer.'
      ],
      piege: 'Piège : ne pas oublier de soustraire $P(A \\cap B)$ dans la formule de l\'union ! Si on additionne simplement $P(A) + P(B)$, on compte deux fois les cas où $A$ et $B$ se produisent simultanément.'
    },
    quiz: [
      {
        q: 'On lance un dé. $A$ = « obtenir un pair » et $B$ = « obtenir un multiple de $3$ ». Quelle est $P(A \\cup B)$ ?',
        options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$'],
        answer: 1,
        correction: '$A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$. $P(A) = \\frac{3}{6}$, $P(B) = \\frac{2}{6}$, $P(A \\cap B) = \\frac{1}{6}$. $P(A \\cup B) = \\frac{3+2-1}{6} = \\frac{4}{6} = \\frac{2}{3}$.'
      },
      {
        q: 'Un élève dit : « $P(A) = 0{,}7$ et $P(B) = 0{,}5$, donc $P(A \\cup B) = 0{,}7 + 0{,}5 = 1{,}2$ ». Pourquoi est-ce impossible ?',
        options: [
          'Une probabilité ne peut jamais dépasser $1$ ; il faut soustraire $P(A \\cap B)$',
          'Les deux événements sont incompatibles donc on ne peut pas les additionner',
          'Il aurait dû multiplier : $P(A \\cup B) = 0{,}7 \\times 0{,}5 = 0{,}35$',
          'Le résultat est correct, une probabilité peut dépasser $1$'
        ],
        answer: 0,
        correction: 'Une probabilité est toujours comprise entre $0$ et $1$. En additionnant sans soustraire, l\'élève compte deux fois les résultats favorables aux deux événements. La formule correcte est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si $P(A \\cap B) = 0{,}3$, alors $P(A \\cup B) = 0{,}7 + 0{,}5 - 0{,}3 = 0{,}9 \\leq 1$.'
      },
      {
        q: '$P(A) = 0{,}6$ et $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Quelle est $P(\\overline{A \\cup B})$ ?',
        options: ['$0{,}1$', '$0{,}9$', '$0{,}7$', '$0{,}4$'],
        answer: 0,
        correction: '$P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}2 = 0{,}9$. Donc $P(\\overline{A \\cup B}) = 1 - 0{,}9 = 0{,}1$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pa = pick([0.3, 0.4, 0.5, 0.6]);
        const pb = pick([0.2, 0.3, 0.4]);
        const pab = parseFloat((Math.min(pa, pb) * 0.5).toFixed(1));
        const punion = parseFloat((pa + pb - pab).toFixed(1));
        return {
          statement: `$P(A) = ${pa}$, $P(B) = ${pb}$, $P(A \\cap B) = ${pab}$. Calculer $P(A \\cup B)$.`,
          answer: punion,
          tolerance: 0.01,
          unit: '',
          hint: `$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ${pa} + ${pb} - ${pab}$.`,
          solution: [`$P(A \\cup B) = ${pa} + ${pb} - ${pab} = ${punion}$.`]
        };
      }
    },
    probleme: {
      context: 'Dans une classe de $30$ élèves : $18$ pratiquent un sport, $12$ jouent d\'un instrument, et $6$ font les deux activités.',
      tasks: [
        'Calculer la probabilité qu\'un élève tiré au sort pratique un sport.',
        'Calculer la probabilité qu\'il joue d\'un instrument.',
        'Calculer la probabilité qu\'il pratique au moins une des deux activités (sport ou instrument).',
        'Calculer la probabilité qu\'il ne fasse ni sport ni instrument.'
      ],
      solutions: [
        '$P(S) = \\dfrac{18}{30} = 0{,}6$.',
        '$P(I) = \\dfrac{12}{30} = 0{,}4$.',
        '$P(S \\cup I) = 0{,}6 + 0{,}4 - \\dfrac{6}{30} = 1 - 0{,}2 = 0{,}8$.',
        '$P(\\overline{S \\cup I}) = 1 - 0{,}8 = 0{,}2$.'
      ],
      finalAnswer: '$20\\%$ des élèves ne font ni sport ni instrument.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités : calcul et événements',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{2}$'],
          answer: 1,
          points: 2,
          correction: 'Les résultats favorables sont $\\{5, 6\\}$ → $2$ cas favorables sur $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3}$.'
        },
        {
          statement: '$P(A) = 0{,}4$ et $P(B) = 0{,}3$ et $P(A \\cap B) = 0{,}1$. Calculer $P(A \\cup B)$.',
          type: 'numeric',
          answer: 0.6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}4 + 0{,}3 - 0{,}1 = 0{,}6$.'
        },
        {
          statement: 'Si $P(A) = 0{,}75$, que vaut $P(\\bar{A})$ ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}75 = 0{,}25$.'
        },
        {
          statement: 'Deux événements $A$ et $B$ sont incompatibles. Que vaut $P(A \\cap B)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Deux événements incompatibles ne peuvent pas se produire simultanément. Donc $A \\cap B = \\emptyset$ et $P(A \\cap B) = 0$.'
        },
        {
          statement: 'Dans un sac, il y a $5$ billes rouges, $3$ billes bleues et $2$ billes vertes. Quelle est la probabilité de tirer une bille qui n\'est pas verte ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{2}{10}$', '$\\dfrac{8}{10}$', '$\\dfrac{5}{10}$', '$\\dfrac{3}{10}$'],
          answer: 1,
          points: 2,
          correction: '$P(\\text{verte}) = \\dfrac{2}{10}$. $P(\\overline{\\text{verte}}) = 1 - \\dfrac{2}{10} = \\dfrac{8}{10} = 0{,}8$. Il y a $8$ billes non vertes sur $10$.'
        }
      ]
    }
  }

);

