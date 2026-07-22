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
      diagram: {
        theme: 'maths',
        kicker: 'Angles et parallélisme',
        title: 'Les 8 angles formés par une sécante coupant deux parallèles',
        description: 'Deux droites parallèles $(d_1)$ et $(d_2)$ sont coupées par une sécante : quatre angles se forment à chaque point d’intersection, soit huit angles au total, numérotés de 1 à 8.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="angles-graph-title angles-graph-desc">
            <title id="angles-graph-title">Huit angles formés par une sécante coupant deux droites parallèles</title>
            <desc id="angles-graph-desc">Deux droites parallèles d1 et d2 sont coupées par une sécante. Quatre angles se forment à chaque intersection, numérotés de 1 à 8. Les angles 3, 5 et 7 sont égaux entre eux ; l'angle 6 est supplémentaire à l'angle 3.</desc>
            <line class="frame-line" x1="30" y1="70" x2="330" y2="70"></line>
            <line class="frame-line" x1="30" y1="170" x2="330" y2="170"></line>
            <line class="frame-line" x1="48" y1="10" x2="312" y2="230"></line>
            <polyline class="frame-line" points="85,64 93,70 85,76" fill="none"></polyline>
            <polyline class="frame-line" points="85,164 93,170 85,176" fill="none"></polyline>
            <path class="grid-line" d="M102,70 A18,18 0 0,1 106.17,58.48" fill="none"></path>
            <path class="grid-line" d="M106.17,58.48 A18,18 0 0,1 138,70" fill="none"></path>
            <path class="grid-line" d="M133.83,81.52 A18,18 0 0,1 102,70" fill="none"></path>
            <path class="grid-line" d="M253.83,181.52 A18,18 0 0,1 222,170" fill="none"></path>
            <path class="curve-main" d="M144,70 A24,24 0 0,1 138.44,85.36" fill="none"></path>
            <path class="curve-main" d="M216,170 A24,24 0 0,1 221.56,154.64" fill="none"></path>
            <path class="axis" d="M221.56,154.64 A24,24 0 0,1 264,170" fill="none"></path>
            <path class="curve-main" d="M264,170 A24,24 0 0,1 258.44,185.36" fill="none"></path>
            <circle class="plot-point" cx="120" cy="70" r="5"></circle>
            <circle class="plot-point" cx="240" cy="170" r="5"></circle>
            <text class="axis-label" x="30" y="60">d1</text>
            <text class="axis-label" x="30" y="188">d2</text>
            <text class="annotation-label" x="52" y="20">sécante</text>
            <text class="tick-label" x="84" y="62">1</text>
            <text class="tick-label" x="128" y="42">2</text>
            <text class="annotation-label" x="148" y="86">3</text>
            <text class="tick-label" x="104" y="106">4</text>
            <text class="annotation-label" x="204" y="162">5</text>
            <text class="annotation-label" x="248" y="142">6</text>
            <text class="annotation-label" x="268" y="186">7</text>
            <text class="tick-label" x="224" y="206">8</text>
          </svg>
        `,
        notes: [
          'Les angles <strong>3</strong> et <strong>7</strong> sont <strong>correspondants</strong> (même position par rapport à la sécante, arcs pleins) : ils sont égaux.',
          'Les angles <strong>3</strong> et <strong>5</strong> sont <strong>alternes-internes</strong> (configuration en Z : entre les deux parallèles, de part et d’autre de la sécante) : ils sont égaux.',
          'Les angles <strong>3</strong> et <strong>6</strong> sont <strong>coalternes-internes</strong> (configuration en U : entre les deux parallèles, du même côté de la sécante, arc plus sombre) : leur somme vaut $180°$, ils sont supplémentaires.',
          'Les angles 1, 2, 4 et 8 ferment la figure : chacun est soit vertical (égal à l’angle opposé par le sommet), soit supplémentaire à ses voisins immédiats.'
        ],
        reading: 'Repère d’abord la sécante (la droite oblique), puis regarde si les deux angles à comparer sont entre les deux parallèles (internes) ou à l’extérieur, et s’ils sont du même côté ou de part et d’autre de la sécante.',
        caption: 'Deux droites parallèles coupées par une sécante : huit angles numérotés, avec le trio 3-5-7 égal (arcs pleins) et l’angle 6 supplémentaire à l’angle 3 (arc plus sombre).'
      },
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

        const ctx = pick([
          { build: () => `Deux droites parallèles sont coupées par une <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux rails de chemin de fer parallèles sont coupés par une traverse oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Sur un plan d'architecte, deux murs parallèles sont coupés par une cloison oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux barreaux parallèles d'une échelle sont coupés par un montant oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Sur un cahier, deux lignes parallèles sont coupées par un trait tracé en diagonale, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux câbles électriques parallèles sont coupés par un poteau incliné, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` },
          { build: () => `Deux mains courantes parallèles d'un escalier sont coupées par une rampe oblique, la <strong>sécante</strong>.<br/>Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?` }
        ]);

        return {
          statement: ctx.build(),
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
