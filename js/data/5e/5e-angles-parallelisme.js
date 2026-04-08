/* =========================================================
   Spark Learning – data/5e/5e-angles-parallelisme.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-angles-parallelisme',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Angles et parallélisme',
    subtitle: 'Alternes-internes, correspondants, coalternes',
    keywords: ['Angle', 'Parallèles', 'Sécante', 'Alternes-internes', 'Correspondants'],
    physics: false,

    cours: {
      intro: 'Quand une <strong>sécante</strong> coupe deux droites parallèles, elle crée des paires d\'angles avec des relations précises.<br/><br/>' +
        'Les <strong>alternes-internes</strong> (configuration en Z) sont <strong>égaux</strong>. Les <strong>correspondants</strong> (configuration en F) sont <strong>égaux</strong>. Les <strong>coalternes-internes</strong> (configuration en U) sont <strong>supplémentaires</strong> (somme = $180°$).<br/><br/>' +
        '<strong>Point clé :</strong> ces propriétés ne valent que si les droites sont parallèles — et réciproquement, si ces propriétés sont vérifiées, alors les droites sont forcément parallèles. C\'est une façon de <em>démontrer</em> le parallélisme.<br/><br/>' +
        'En optique, les rayons parallèles incidents sur un miroir vérifient ces propriétés angulaires, ce qui explique la construction des images dans les miroirs plans.',
      definitions: [
        { term: 'Sécante', def: 'Droite qui coupe deux autres droites. Elle crée des angles à chaque point d\'intersection.' },
        { term: 'Angles alternes-internes', def: 'Paire d\'angles situés de part et d\'autre de la sécante, entre les deux droites (configuration en Z). Égaux si les droites sont parallèles.' },
        { term: 'Angles correspondants', def: 'Paire d\'angles situés du même côté de la sécante, l\'un entre les droites et l\'autre à l\'extérieur (configuration en F). Égaux si parallèles.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Les coalternes-internes sont supplémentaires si les droites sont parallèles.' }
      ],
      example: {
        statement: 'Deux droites parallèles sont coupées par une sécante. Un angle mesure $72°$. Trouver les angles alternes-internes et coalternes.',
        steps: [
          'Angle alterne-interne : même mesure → $72°$ (car droites parallèles, configuration en Z).',
          'Angle coalterne-interne : supplémentaire → $180° - 72° = 108°$ (configuration en U).',
          'Angle correspondant : même mesure → $72°$ (configuration en F).'
        ],
        answer: 'Alterne-interne : $72°$, coalterne : $108°$, correspondant : $72°$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Paire d\'angles</th><th style="border:1px solid var(--border);padding:6px 14px">Configuration</th><th style="border:1px solid var(--border);padding:6px 14px">Relation (si //)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Alternes-internes</td><td style="border:1px solid var(--border);padding:6px 14px">Z</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} = \\hat{b}$ (égaux)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Correspondants</td><td style="border:1px solid var(--border);padding:6px 14px">F</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} = \\hat{c}$ (égaux)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Coalternes-internes</td><td style="border:1px solid var(--border);padding:6px 14px">U</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} + \\hat{d} = 180°$</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier la sécante</strong> (droite qui coupe les deux parallèles) et les deux parallèles.',
          '<strong>Repérer la configuration</strong> : alternes-internes (en Z), correspondants (en F), ou coalternes (en U).',
          '<strong>Appliquer la propriété</strong> : alternes-internes → égaux ; correspondants → égaux ; coalternes → supplémentaires.'
        ]
      },
      formulas: [
        'Alternes-internes : $\\hat{a} = \\hat{b}$ (configuration en Z)',
        'Correspondants : $\\hat{a} = \\hat{c}$ (configuration en F)',
        'Coalternes-internes : $\\hat{a} + \\hat{d} = 180°$ (configuration en U)',
        'Angles supplémentaires : $\\hat{a} + \\hat{b} = 180°$'
      ],
      recap: [
        'Alternes-internes (Z) et correspondants (F) sont ÉGAUX si les droites sont parallèles.',
        'Coalternes (U) sont SUPPLÉMENTAIRES ($+ = 180°$) si les droites sont parallèles.',
        'La réciproque est vraie : si ces relations sont vérifiées, les droites sont parallèles.',
        'Si les angles ne vérifient pas ces relations, les droites ne sont PAS parallèles.'
      ],
      piege: 'Piège : ces propriétés ne sont valables QUE si les deux droites sont parallèles. Si elles ne le sont pas, les angles alternes-internes ne sont plus égaux. C\'est aussi une façon de prouver que deux droites sont parallèles !'
    },

    quiz: [
      {
        q: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $65°$. Quel est l\'autre angle alterne-interne ?',
        options: ['$115°$', '$65°$', '$25°$', '$130°$'],
        answer: 1,
        correction: 'Les angles alternes-internes sont égaux quand les droites sont parallèles. L\'autre angle vaut donc $65°$.'
      },
      {
        q: 'Un angle coalterne-interne mesure $110°$. Quel est son angle coalterne-interne associé ?',
        options: ['$110°$', '$80°$', '$70°$', '$55°$'],
        answer: 2,
        correction: 'Les coalternes-internes sont supplémentaires : $180° - 110° = 70°$.'
      },
      {
        q: 'Une sécante coupe deux droites. Les angles alternes-internes valent $70°$ et $75°$. Que peut-on conclure ?',
        options: [
          'Les droites sont parallèles car les deux angles sont proches.',
          'Les droites ne sont pas parallèles : si elles l\'étaient, les alternes-internes seraient égaux ($70° = 75°$ est faux).',
          'Les droites sont perpendiculaires car $70° + 75° \\approx 145°$.',
          'On ne peut rien conclure sans connaître le troisième angle.'
        ],
        answer: 1,
        correction: 'Les alternes-internes sont égaux <em>si et seulement si</em> les droites sont parallèles. Ici $70° \\neq 75°$, donc les droites ne sont pas parallèles.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick([
          { name: 'coalterne-interne', relation: 'supplémentaire', calc: (a) => 180 - a },
          { name: 'correspondant', relation: 'égal', calc: (a) => a },
          { name: 'alterne-interne', relation: 'égal', calc: (a) => a }
        ]);
        const a = rand(30, 150);
        const answer = type.calc(a);
        return {
          statement: `Deux droites parallèles sont coupées par une sécante. Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?`,
          answer,
          tolerance: 0,
          unit: '°',
          hint: type.relation === 'supplémentaire'
            ? 'Les angles coalternes-internes sont supplémentaires : leur somme vaut $180°$.'
            : `Les angles ${type.name}s sont égaux quand les droites sont parallèles.`,
          solution: [
            type.relation === 'supplémentaire'
              ? `Angles coalternes supplémentaires : $180 - ${a} = ${answer}°$.`
              : `Angles ${type.name}s égaux (droites parallèles) : $${answer}°$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un menuisier pose des lattes de parquet parallèles. Une règle posée en travers forme un angle de $52°$ avec la première latte.',
      tasks: [
        'Quel angle la règle fait-elle avec la deuxième latte (angle correspondant) ?',
        'Quel est l\'angle coalterne-interne associé à $52°$ ?',
        'Le menuisier veut poser une troisième latte perpendiculaire aux premières. Quel angle fait-elle avec la règle ?'
      ],
      solutions: [
        'Angle correspondant = $52°$ (droites parallèles).',
        'Coalterne : $180 - 52 = 128°$.',
        'Perpendiculaire → angle de $90°$ avec les lattes. Avec la règle : $90 - 52 = 38°$.'
      ],
      finalAnswer: 'La troisième latte fait $38°$ avec la règle.'
    },

    evaluation: {
      title: 'Évaluation — Angles et parallélisme',
      duration: '20 min',
      questions: [
        {
          statement: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $74°$. Quel est l\'autre angle alterne-interne (en degrés) ?',
          type: 'numeric',
          answer: 74,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les angles alternes-internes formés par deux droites parallèles coupées par une sécante sont égaux. L\'autre angle vaut donc $74°$.'
        },
        {
          statement: 'Un angle coalterne-interne mesure $125°$. Quel est l\'angle coalterne-interne associé (en degrés) ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les angles coalternes-internes sont supplémentaires : $180° - 125° = 55°$.'
        },
        {
          statement: 'Une sécante coupe deux droites. Les angles correspondants mesurent $62°$ et $62°$. Que peut-on en conclure ?',
          type: 'multiple-choice',
          options: [
            'Les droites sont perpendiculaires.',
            'Les droites sont parallèles.',
            'Les droites sont sécantes.',
            'On ne peut rien conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Si les angles correspondants sont égaux, alors les droites sont parallèles (réciproque de la propriété des angles correspondants).'
        },
        {
          statement: 'Deux angles supplémentaires ont pour mesures $x$ et $3x$. Quelle est la valeur de $x$ (en degrés) ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Deux angles supplémentaires ont pour somme $180°$ : $x + 3x = 180$, soit $4x = 180$, donc $x = 45°$.'
        },
        {
          statement: 'Deux droites sont coupées par une sécante. Les alternes-internes mesurent $50°$ et $55°$. Les droites sont-elles parallèles ?',
          type: 'multiple-choice',
          options: [
            'Oui, car les angles sont proches.',
            'Non, car $50° \\neq 55°$ : les alternes-internes ne sont pas égaux.',
            'Oui, car $50° + 55° \\approx 105°$.',
            'On ne peut pas conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Les alternes-internes doivent être exactement égaux pour que les droites soient parallèles. Ici $50° \\neq 55°$, donc les droites ne sont pas parallèles.'
        }
      ]
    }
  });
