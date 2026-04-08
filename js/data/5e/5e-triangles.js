/* =========================================================
   Spark Learning – data/5e/5e-triangles.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-triangles',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Triangles',
    subtitle: 'Construction, types, inégalité triangulaire',
    keywords: ['Triangle', 'Inégalité triangulaire', 'Isocèle', 'Équilatéral', 'Rectangle', 'Somme des angles'],
    physics: false,

    cours: {
      intro: 'Le triangle est la <strong>forme géométrique la plus simple</strong> que l\'on puisse tracer avec des segments : trois côtés, trois sommets, trois angles. Mais derrière cette simplicité se cachent des propriétés puissantes, utilisées partout dans le monde réel.<br/><br/>' +
        'Sa propriété fondamentale : la <strong>somme des angles intérieurs est toujours $180°$</strong>, quelle que soit la forme du triangle. <strong>Pourquoi $180°$ ?</strong> Si l\'on trace une droite parallèle au côté de base passant par le sommet opposé, les trois angles du triangle forment exactement un angle plat (alternes-internes). Connaître deux angles suffit donc toujours à trouver le troisième !<br/><br/>' +
        'L\'<strong>inégalité triangulaire</strong> ($c < a + b$) traduit une réalité physique : le chemin direct entre deux points est toujours plus court que le chemin qui passe par un troisième point. Il suffit de vérifier que le <strong>plus grand côté</strong> est strictement inférieur à la somme des deux autres. Si cette condition n\'est pas respectée, le triangle est tout simplement impossible à construire : essaie de fermer un triangle avec des baguettes de $3$ cm, $4$ cm et $10$ cm — tu n\'y arriveras pas !<br/><br/>' +
        'Dans la <strong>vie courante</strong>, le triangle est partout : la charpente d\'un toit, les pylônes électriques, les ponts en treillis, les grues de chantier… Pourquoi ? Parce que le triangle est la seule figure géométrique qui est <strong>indéformable</strong> : un carré peut s\'aplatir en losange, mais un triangle garde toujours sa forme. C\'est pour cela que les ingénieurs l\'utilisent dans toute structure qui doit résister à des forces.<br/><br/>' +
        'Les triangles <strong>isocèles</strong> (2 côtés égaux → 2 angles de base égaux) et <strong>équilatéraux</strong> (3 côtés égaux → angles de $60°$) ont des propriétés de symétrie particulières qui les rendent encore plus utiles en architecture et en design.',
      definitions: [
        { term: 'Triangle', def: 'Polygone à 3 côtés. La somme de ses angles intérieurs vaut toujours $180°$.' },
        { term: 'Inégalité triangulaire', def: 'Pour que trois longueurs $a$, $b$, $c$ forment un triangle, le plus grand côté doit être strictement inférieur à la somme des deux autres.' },
        { term: 'Triangle isocèle', def: 'Triangle ayant au moins deux côtés de même longueur. Les deux angles à la base sont égaux.' },
        { term: 'Triangle équilatéral', def: 'Triangle dont les trois côtés sont égaux. Les trois angles valent $60°$.' }
      ],
      example: {
        statement: 'Peut-on construire un triangle avec des côtés de $5$ cm, $7$ cm et $10$ cm ? Si oui, quelle est la nature du triangle ?',
        steps: [
          'Plus grand côté : $10$. Somme des deux autres : $5 + 7 = 12$. $10 < 12$ ✓ → triangle possible.',
          'Vérifier si rectangle : $5^2 + 7^2 = 25 + 49 = 74$. $10^2 = 100$. $74 \\neq 100$ → pas rectangle.',
          'Tous les côtés différents → triangle scalène (quelconque).'
        ],
        answer: 'Triangle scalène (quelconque)'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Type</th><th style="border:1px solid var(--border);padding:6px 14px">Côtés</th><th style="border:1px solid var(--border);padding:6px 14px">Angles</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Quelconque</td><td style="border:1px solid var(--border);padding:6px 14px">Tous différents</td><td style="border:1px solid var(--border);padding:6px 14px">Tous différents</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Isocèle</td><td style="border:1px solid var(--border);padding:6px 14px">2 côtés égaux</td><td style="border:1px solid var(--border);padding:6px 14px">2 angles de base égaux</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Équilatéral</td><td style="border:1px solid var(--border);padding:6px 14px">3 côtés égaux</td><td style="border:1px solid var(--border);padding:6px 14px">$3 \\times 60°$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">$a^2 + b^2 = c^2$</td><td style="border:1px solid var(--border);padding:6px 14px">1 angle de $90°$</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Vérifier l\'inégalité triangulaire</strong> : le plus grand côté < somme des deux autres.',
          '<strong>Identifier le type</strong> : isocèle (2 côtés égaux), équilatéral (3 côtés égaux), rectangle (angle droit vérifié par Pythagore).',
          '<strong>Calculer un angle manquant</strong> : angle inconnu = $180° - $ (somme des deux autres angles).'
        ]
      },
      formulas: [
        'Somme des angles : $\\hat{A} + \\hat{B} + \\hat{C} = 180°$',
        'Inégalité triangulaire : $c < a + b$ (le plus grand côté)',
        'Triangle isocèle : deux côtés égaux ⟹ deux angles à la base égaux',
        'Triangle équilatéral : $a = b = c$ ⟹ $\\hat{A} = \\hat{B} = \\hat{C} = 60°$'
      ],
      recap: [
        'La somme des angles d\'un triangle est toujours $180°$.',
        'Le plus grand côté doit être strictement inférieur à la somme des deux autres.',
        'Triangle isocèle = 2 côtés égaux = 2 angles de base égaux.',
        'Triangle équilatéral = 3 côtés égaux = 3 angles de $60°$.'
      ],
      piege: 'Piège : ne vérifier l\'inégalité triangulaire que pour un seul cas. Il faut que LE PLUS GRAND côté soit inférieur à la somme des deux autres. Si $c$ est le plus grand, seule la vérification $c < a + b$ est nécessaire.'
    },

    quiz: [
      {
        q: 'Peut-on construire un triangle avec les côtés $4$ cm, $7$ cm et $12$ cm ?',
        options: ['Oui', 'Non, $12 \\geq 4 + 7$', 'Oui, si le triangle est isocèle', 'Non, les angles ne conviendraient pas'],
        answer: 1,
        correction: '$12 \\geq 4 + 7 = 11$. L\'inégalité triangulaire n\'est pas vérifiée ($12 \\not< 11$). On ne peut pas former ce triangle.'
      },
      {
        q: 'Dans un triangle $ABC$, $\\hat{A} = 65°$ et $\\hat{B} = 80°$. Combien vaut $\\hat{C}$ ?',
        options: ['$35°$', '$145°$', '$25°$', '$45°$'],
        answer: 0,
        correction: '$\\hat{C} = 180° - 65° - 80° = 35°$. La somme des angles d\'un triangle vaut toujours $180°$.'
      },
      {
        q: 'Un élève affirme qu\'un triangle avec des côtés $5$ cm, $5$ cm et $10$ cm est isocèle. Est-ce possible ?',
        options: [
          'Oui, car deux côtés sont égaux ($5$ cm = $5$ cm).',
          'Non : $10 = 5 + 5$, donc l\'inégalité triangulaire n\'est pas stricte ($10 \\not< 10$). Ce triangle est dégénéré (les trois points sont alignés).',
          'Oui, un triangle isocèle peut avoir deux côtés égaux à la somme du troisième.',
          'Non, un triangle isocèle doit avoir des côtés de longueurs différentes.'
        ],
        answer: 1,
        correction: 'Pour qu\'un triangle existe, il faut que chaque côté soit <em>strictement</em> inférieur à la somme des deux autres : $10 < 5 + 5 = 10$ est faux ($10 = 10$, pas $<$).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { shape: 'triangle de signalisation', emoji: '⚠️' },
          { shape: 'toiture triangulaire', emoji: '🏠' },
          { shape: 'voile de bateau', emoji: '⛵' },
          { shape: 'triangle de géométrie', emoji: '📐' }
        ]);
        const a = rand(30, 70);
        const b = rand(30, 70);
        const c = 180 - a - b;
        return {
          statement: `${ctx.emoji} Dans un ${ctx.shape}, deux angles mesurent $${a}°$ et $${b}°$. Combien mesure le troisième angle (en degrés) ?`,
          answer: c,
          tolerance: 0,
          unit: '°',
          hint: `La somme des angles d'un triangle est $180°$. Donc le troisième angle vaut $180 - ${a} - ${b}$.`,
          solution: [
            `Somme des angles = $180°$`,
            `Troisième angle $= 180 - ${a} - ${b} = ${c}°$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un architecte dessine une charpente triangulaire avec trois poutres mesurant $5$ m, $8$ m et $11$ m.',
      tasks: [
        'Vérifier que ces trois longueurs forment bien un triangle (inégalité triangulaire).',
        'Ce triangle est-il rectangle ? (Vérifier avec le théorème de Pythagore : $5^2 + 8^2$ et $11^2$.)',
        'Si l\'un des angles de la charpente mesure $40°$ et un autre $65°$, quel est le troisième angle ?'
      ],
      solutions: [
        '$11 < 5 + 8 = 13$ ✓. L\'inégalité est vérifiée, le triangle existe.',
        '$5^2 + 8^2 = 25 + 64 = 89 \\neq 121 = 11^2$. Ce triangle n\'est pas rectangle.',
        '$180 - 40 - 65 = 75°$.'
      ],
      finalAnswer: 'La charpente forme un triangle (non rectangle) ; le troisième angle de la charpente est $75°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangles',
      duration: '20 min',
      questions: [
        {
          statement: 'Dans un triangle $ABC$, $\\hat{A} = 72°$ et $\\hat{B} = 53°$. Combien mesure $\\hat{C}$ (en degrés) ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\hat{C} = 180° - 72° - 53° = 55°$.'
        },
        {
          statement: 'Peut-on construire un triangle avec des côtés de $3$ cm, $5$ cm et $9$ cm ?',
          type: 'multiple-choice',
          options: [
            'Oui, car $3 + 5 + 9 = 17$.',
            'Non, car $9 > 3 + 5 = 8$ : l\'inégalité triangulaire n\'est pas vérifiée.',
            'Oui, si on utilise un rapporteur.',
            'Oui, car $9 < 3 \\times 5 = 15$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le plus grand côté ($9$) doit être strictement inférieur à la somme des deux autres ($3 + 5 = 8$). Or $9 > 8$, donc ce triangle n\'existe pas.'
        },
        {
          statement: 'Un triangle a des angles de $60°$, $60°$ et $60°$. De quel type est-il ?',
          type: 'multiple-choice',
          options: [
            'Triangle rectangle.',
            'Triangle isocèle.',
            'Triangle équilatéral.',
            'Triangle quelconque.'
          ],
          answer: 2,
          points: 2,
          correction: 'Si les trois angles sont égaux ($60°$), les trois côtés sont aussi égaux : c\'est un triangle équilatéral.'
        },
        {
          statement: 'Un triangle isocèle a un angle au sommet de $40°$. Combien mesure chaque angle de la base (en degrés) ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les deux angles de la base sont égaux. Soit $x$ leur mesure : $40 + 2x = 180$, donc $2x = 140$ et $x = 70°$.'
        },
        {
          statement: 'Peut-on construire un triangle avec des côtés de $6$ cm, $8$ cm et $13$ cm ?',
          type: 'multiple-choice',
          options: [
            'Non, car $13 < 6 + 8$ est faux.',
            'Oui, car $13 < 6 + 8 = 14$.',
            'Non, car $6 + 8 = 14$ et $14 < 13$.',
            'Oui, car $6^2 + 8^2 = 100$ et $13^2 = 169$.'
          ],
          answer: 1,
          points: 2,
          correction: '$13 < 6 + 8 = 14$ est vrai. L\'inégalité triangulaire est vérifiée : ce triangle existe.'
        }
      ]
    }
  });
