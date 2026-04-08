window.MODULES.push(
    id: '4e-triangle-rectangle-cercle',
    level: 1, subject: 'maths',
    icon: '⭕',
    title: 'Triangle rectangle et cercle circonscrit',
    subtitle: 'Angle inscrit dans un demi-cercle (Thalès)',
    keywords: ['Triangle rectangle', 'Cercle circonscrit', 'Angle inscrit', 'Diamètre', 'Hypoténuse'],
    physics: false,
    cours: {
      intro: 'Le théorème de l\'angle inscrit dans un demi-cercle est un résultat élégant : si un triangle $ABC$ est inscrit dans un cercle et que $[BC]$ est un diamètre, alors l\'angle $\\hat{A}$ est nécessairement droit — et ce quel que soit l\'emplacement de $A$ sur le cercle (tant qu\'il n\'est pas sur le diamètre).' +
        '<br/><br/>' +
        '<strong>Intuition géométrique :</strong> le centre $O$ du cercle est le milieu de $[BC]$, et $OA = OB = OC = R$ (rayons). Le triangle $OAB$ et $OAC$ sont isocèles. En additionnant les angles on obtient $\\hat{A} = 90°$.' +
        '<br/><br/>' +
        'La réciproque est aussi vraie et utile : si $\\hat{A} = 90°$ dans $ABC$, alors $[BC]$ est un diamètre du cercle circonscrit, et son rayon est $R = \\dfrac{BC}{2}$.' +
        '<br/><br/>' +
        'Ce résultat est utilisé en construction géométrique : pour tracer un angle droit, il suffit d\'inscrire un triangle dans un demi-cercle.',
      definitions: [
        { term: 'Cercle circonscrit', def: 'Cercle passant par les trois sommets d\'un triangle. Son centre est équidistant des trois sommets.' },
        { term: 'Angle inscrit', def: 'Angle dont le sommet est sur le cercle et dont les côtés sont des cordes du cercle.' },
        { term: 'Diamètre', def: 'Corde passant par le centre du cercle. C\'est la plus grande corde possible : $d = 2R$.' },
        { term: 'Hypoténuse', def: 'Côté le plus long d\'un triangle rectangle, situé en face de l\'angle droit.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier si un côté est un diamètre</strong> : si $O$ est le centre du cercle et le milieu de $[BC]$, alors $[BC]$ est un diamètre du cercle.',
          '<strong>Théorème direct</strong> : si un côté est un diamètre et $A$ est sur le cercle, l\'angle opposé à ce diamètre est nécessairement droit ($90°$). <strong>Exemple :</strong> $[BC]$ est un diamètre et $A$ est sur le cercle → $\\hat{A} = 90°$.',
          '<strong>Réciproque</strong> : si un angle d\'un triangle est droit, le côté opposé (hypoténuse) est un diamètre du cercle circonscrit. <strong>Exemple :</strong> $\\hat{A} = 90°$ et $BC = 14$ cm → le cercle circonscrit a pour rayon $R = \\dfrac{14}{2} = 7$ cm.'
        ]
      },
      example: {
        statement: 'Un pont en arc a la forme d\'un demi-cercle de diamètre $[BC] = 20$ m. Un câble relie un point $A$ situé sur l\'arc aux deux extrémités $B$ et $C$. Quel est l\'angle $\\hat{A}$ formé par les deux câbles ? Si $AB = 12$ m, quelle est la longueur $AC$ ?',
        steps: [
          '$[BC]$ est un diamètre et $A$ est sur le cercle → d\'après le théorème, $\\hat{A} = 90°$.',
          'Le triangle $ABC$ est rectangle en $A$. On applique Pythagore : $AC = \\sqrt{BC^2 - AB^2}$.',
          '$AC = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ m.'
        ],
        answer: 'L\'angle $\\hat{A} = 90°$ et le câble $AC$ mesure $16$ m.'
      },
      formulas: [
        'Théorème : $[BC]$ diamètre et $A$ sur le cercle $\\Rightarrow \\hat{A} = 90°$',
        'Réciproque : $\\hat{A} = 90°$ dans $ABC$ $\\Rightarrow$ $[BC]$ est un diamètre du cercle circonscrit',
        'Rayon du cercle circonscrit : $R = \\dfrac{BC}{2}$ (BC = hypoténuse)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Hypothèse</th><th style="border:1px solid var(--border);padding:6px 14px">Conclusion</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$[BC]$ diamètre, $A$ sur le cercle</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{A} = 90°$ (théorème direct)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{A} = 90°$ dans $ABC$</td><td style="border:1px solid var(--border);padding:6px 14px">$[BC]$ est un diamètre, $R = \\dfrac{BC}{2}$ (réciproque)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Centre du cercle circ. d\'un triangle rect.</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu de l\'hypoténuse</td></tr></table>',
      recap: [
        'Si un côté d\'un triangle inscrit est un diamètre, l\'angle opposé vaut $90°$.',
        'Réciproque : si un triangle est rectangle, l\'hypoténuse est un diamètre du cercle circonscrit.',
        'Le centre du cercle circonscrit à un triangle rectangle est le milieu de l\'hypoténuse.',
        'Le rayon du cercle circonscrit vaut la moitié de l\'hypoténuse : $R = \\dfrac{BC}{2}$.'
      ],
      piege: 'Piège : le théorème s\'applique uniquement quand le côté est un DIAMÈTRE, pas juste une corde du cercle. Un côté = diamètre signifie que son milieu est le centre du cercle.'
    },
    quiz: [
      {
        q: 'Un triangle $ABC$ est inscrit dans un cercle de diamètre $[BC]$. Quel est l\'angle $\\hat{A}$ ?',
        options: ['$45°$', '$60°$', '$90°$', '$180°$'],
        answer: 2,
        correction: 'Théorème de l\'angle inscrit dans un demi-cercle : si $[BC]$ est un diamètre, alors $\\hat{A} = 90°$.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $A$) avec $BC = 10$ cm, quel est le rayon du cercle circonscrit ?',
        options: ['$10$ cm', '$5$ cm', '$20$ cm', '$7{,}07$ cm'],
        answer: 1,
        correction: 'L\'hypoténuse $BC$ est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$ cm.'
      },
      {
        q: 'Le milieu d\'une hypoténuse d\'un triangle rectangle est :',
        options: ['Le centre de gravité', 'Le centre du cercle inscrit', 'Le centre du cercle circonscrit', 'L\'orthocentre'],
        answer: 2,
        correction: 'Dans un triangle rectangle, le milieu de l\'hypoténuse est le centre du cercle circonscrit, et le rayon vaut la moitié de l\'hypoténuse.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          {intro:'Un vitrail circulaire contient un triangle rectangle inscrit.', emoji:'🎨'},
          {intro:'Un pont en arc forme un demi-cercle avec un triangle inscrit.', emoji:'🌉'},
          {intro:'Sur un terrain de sport, un cercle contient un triangle rectangle.', emoji:'🏟️'},
          {intro:'En optique, un miroir circulaire encadre un triangle rectangle.', emoji:'🔭'}
        ]);
        const diam = rand(6, 20);
        return {
          statement: `${ctx.emoji} ${ctx.intro} L'hypoténuse (diamètre) mesure $${diam}$ cm. Quel est le rayon du cercle (en cm) ?`,
          answer: diam / 2,
          tolerance: 0,
          unit: 'cm',
          hint: `Le rayon est la moitié du diamètre : $R = \\dfrac{${diam}}{2}$.`,
          solution: [`$R = \\dfrac{${diam}}{2} = ${diam / 2}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un vitrail circulaire de rayon $30$ cm. Il y inscrit un triangle $ABC$ avec $[BC]$ comme diamètre et $A$ sur le cercle.',
      tasks: [
        'Quelle est la longueur du diamètre $BC$ ?',
        'Quel est l\'angle $\\hat{A}$ dans ce triangle ?',
        'Si $AB = 36$ cm, calculer $AC$ en utilisant Pythagore.'
      ],
      solutions: [
        '$BC = 2 \\times 30 = 60$ cm.',
        '$\\hat{A} = 90°$ (angle inscrit dans un demi-cercle).',
        '$AC = \\sqrt{BC^2 - AB^2} = \\sqrt{3600 - 1296} = \\sqrt{2304} = 48$ cm.'
      ],
      finalAnswer: 'Le triangle a $BC = 60$ cm, $AB = 36$ cm, $AC = 48$ cm et $\\hat{A} = 90°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangle rectangle et cercle circonscrit',
      duration: '25 min',
      questions: [
        {
          statement: 'Un triangle $ABC$ est inscrit dans un cercle de centre $O$ et $[BC]$ est un diamètre. Que vaut l\'angle $\\hat{A}$ ?',
          type: 'numeric',
          answer: 90,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'D\'après le théorème de l\'angle inscrit dans un demi-cercle, si $[BC]$ est un diamètre et que $A$ est sur le cercle, alors $\\hat{A} = 90°$.'
        },
        {
          statement: 'Un triangle rectangle en $A$ a pour hypoténuse $BC = 26\\,\\text{cm}$. Quel est le rayon du cercle circonscrit ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Dans un triangle rectangle, l\'hypoténuse est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{26}{2} = 13\\,\\text{cm}$.'
        },
        {
          statement: 'Le centre du cercle circonscrit à un triangle rectangle se trouve :',
          type: 'multiple-choice',
          options: [
            'Au centre de gravité du triangle',
            'Au milieu de l\'hypoténuse',
            'Au sommet de l\'angle droit',
            'À l\'intersection des hauteurs'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l\'hypoténuse. Ce point est équidistant des trois sommets (distance = rayon $R = \\dfrac{\\text{hypoténuse}}{2}$).'
        },
        {
          statement: 'Un triangle rectangle inscrit dans un cercle de rayon $R = 10\\,\\text{cm}$ a un côté $AB = 12\\,\\text{cm}$. L\'angle droit est en $A$. Calculer le côté $AC$.',
          type: 'numeric',
          answer: 16,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'L\'hypoténuse $BC$ est le diamètre : $BC = 2R = 20\\,\\text{cm}$. Par Pythagore : $AC = \\sqrt{BC^2 - AB^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16\\,\\text{cm}$.'
        },
        {
          statement: 'Si le milieu de l\'hypoténuse d\'un triangle est le centre d\'un cercle passant par les trois sommets, que peut-on conclure sur ce triangle ?',
          type: 'multiple-choice',
          options: [
            'Il est isocèle',
            'Il est équilatéral',
            'Il est rectangle',
            'Il est quelconque'
          ],
          answer: 2,
          points: 2,
          correction: 'C\'est la réciproque du théorème : si le milieu d\'un côté d\'un triangle est le centre du cercle passant par les trois sommets, alors ce côté est un diamètre et l\'angle opposé vaut $90°$. Le triangle est rectangle.'
        }
      ]
    }
  },

    {
);
