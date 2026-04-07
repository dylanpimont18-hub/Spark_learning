/* =========================================================
   Spark Learning – data/6e/6e-angles.js
   Extrait de 6e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '6e-angles',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Angles',
    subtitle: 'Mesurer, construire, types d\'angles',
    keywords: ['Angle aigu', 'Angle obtus', 'Angle droit', 'Degré', 'Angles supplémentaires', 'Angles complémentaires'],
    physics: 'Angle d\'incidence et de réfraction (Snell-Descartes), décomposition de forces',

    cours: {
      intro: 'Un <strong>angle</strong> mesure l\'écartement entre deux demi-droites issues d\'un même sommet. Il ne dépend pas de la longueur des côtés — un angle de $60°$ reste $60°$ que les segments mesurent $1$ cm ou $1$ km.<br/><br/>' +
        'On mesure les angles en <strong>degrés</strong> (°) avec un rapporteur. En maths avancées, on utilise aussi les radians : $180° = \\pi$ rad.<br/><br/>' +
        'En physique, les angles sont partout : angle d\'incidence en optique, angle du plan incliné en mécanique, déphasage en électricité. Les propriétés des <strong>angles complémentaires</strong> (somme $= 90°$) et <strong>supplémentaires</strong> (somme $= 180°$) permettent de résoudre de nombreux problèmes.',
      definitions: [
        { term: 'Angle aigu', def: 'Angle dont la mesure est comprise entre $0°$ et $90°$ (exclu).' },
        { term: 'Angle droit', def: 'Angle mesurant exactement $90°$. Symbolisé par un petit carré.' },
        { term: 'Angle obtus', def: 'Angle dont la mesure est comprise entre $90°$ (exclu) et $180°$ (exclu).' },
        { term: 'Angles complémentaires', def: 'Deux angles dont la somme vaut $90°$. Exemple : $35°$ et $55°$.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Exemple : $120°$ et $60°$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'angle</strong> : aigu ($0° < \\alpha < 90°$), droit ($= 90°$), obtus ($90° < \\alpha < 180°$), plat ($= 180°$). <em>Exemple :</em> $\\alpha = 115°$ est obtus car $90° < 115° < 180°$.',
          '<strong>Utiliser les relations d\'angles</strong> : complémentaires (somme $= 90°$), supplémentaires (somme $= 180°$), triangle (somme $= 180°$). <em>Exemple :</em> dans un triangle avec $47°$ et $68°$, le troisième angle $= 180° - 47° - 68° = 65°$.',
          '<strong>Angles et droites parallèles</strong> : quand une droite coupe deux parallèles, les angles alternes-internes sont égaux et les angles correspondants sont égaux.'
        ]
      },
      example: {
        statement: 'Dans un triangle rectangle, un angle aigu mesure $37°$. Calculer l\'autre angle aigu.',
        steps: [
          'Un triangle rectangle a un angle de $90°$.',
          'La somme des trois angles d\'un triangle vaut $180°$.',
          '$\\alpha = 180° - 90° - 37° = 53°$.',
          'Vérification : $90° + 37° + 53° = 180°$ ✓'
        ],
        answer: 'L\'autre angle aigu mesure $53°$.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Type</th><th style="border:1px solid var(--border);padding:8px">Mesure</th><th style="border:1px solid var(--border);padding:8px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Aigu</td><td style="border:1px solid var(--border);padding:8px">$0° < \\alpha < 90°$</td><td style="border:1px solid var(--border);padding:8px">$45°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Droit</td><td style="border:1px solid var(--border);padding:8px">$\\alpha = 90°$</td><td style="border:1px solid var(--border);padding:8px">$90°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Obtus</td><td style="border:1px solid var(--border);padding:8px">$90° < \\alpha < 180°$</td><td style="border:1px solid var(--border);padding:8px">$120°$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Plat</td><td style="border:1px solid var(--border);padding:8px">$\\alpha = 180°$</td><td style="border:1px solid var(--border);padding:8px">$180°$</td></tr></table>',
      formulas: [
        '$\\alpha + \\beta = 90°$ (angles complémentaires)',
        '$\\alpha + \\beta = 180°$ (angles supplémentaires)',
        '$\\hat{A} + \\hat{B} + \\hat{C} = 180°$ (triangle)',
        '$\\pi\\,\\text{rad} = 180°$, donc $1° = \\dfrac{\\pi}{180}\\,\\text{rad}$'
      ],
      recap: [
        'Un angle mesure l\'écartement entre deux demi-droites, indépendamment de leur longueur.',
        'Complémentaires : somme $= 90°$. Supplémentaires : somme $= 180°$.',
        'La somme des angles d\'un triangle vaut toujours $180°$.',
        'Ne pas confondre la mesure d\'un angle avec la longueur d\'un côté.'
      ],
      piege: 'Ne pas confondre la mesure d\'un angle et la longueur d\'un côté. Un angle ne dépend pas de la longueur des segments qui le forment — il mesure uniquement l\'écartement entre les deux demi-droites.'
    },

    quiz: [
      { q: 'Dans un triangle, deux angles mesurent $47°$ et $68°$. Quelle est la mesure du troisième angle ?', options: ['$55°$', '$65°$', '$75°$', '$85°$'], answer: 1, correction: 'La somme des angles d\'un triangle est $180°$. Troisième angle $= 180° - 47° - 68° = 65°$.' },
      { q: 'Deux angles sont complémentaires et leur différence est $20°$. Quelle est la valeur du plus grand ?', options: ['$35°$', '$45°$', '$55°$', '$65°$'], answer: 2, correction: 'Soit $x$ le plus petit et $x + 20°$ le plus grand. $x + (x+20°) = 90°$ → $2x = 70°$ → $x = 35°$. Le plus grand vaut $55°$.' },
      { q: 'Deux angles sont supplémentaires. L\'un vaut $3x + 10°$ et l\'autre $x + 30°$. Quelle est la valeur de $x$ ?', options: ['$25°$', '$35°$', '$28°$', '$30°$'], answer: 1, correction: '$(3x+10) + (x+30) = 180 \\Rightarrow 4x + 40 = 180 \\Rightarrow x = 35°$.' }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const context = pick([
          'Dans un triangle',
          'Sur un plan de construction',
          'En optique, dans un prisme',
          'Dans un triangle isocèle'
        ]);
        const a1 = rand(20, 70), a2 = rand(20, 70);
        const a3 = 180 - a1 - a2;
        if (a3 <= 0) { return { statement: `Dans un triangle, deux angles mesurent $40°$ et $60°$. Calcule le troisième angle.`, answer: 80, tolerance: 0, unit: '°', hint: 'La somme des trois angles d\'un triangle est toujours 180°.', solution: ['$180° - 40° - 60° = 80°$'] }; }
        return {
          statement: `${context}, deux angles mesurent $${a1}°$ et $${a2}°$. Quelle est la mesure du troisième angle (en degrés) ?`,
          answer: a3,
          tolerance: 0,
          unit: '°',
          hint: 'La somme des angles d\'un triangle vaut toujours 180°.',
          solution: [
            `Propriété : la somme des angles d'un triangle vaut toujours $180°$.`,
            `$\\alpha = 180° - ${a1}° - ${a2}° = ${a3}°$`,
            `Vérification : $${a1}° + ${a2}° + ${a3}° = 180°$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Un rayon lumineux se propage dans l\'air ($n_1 = 1{,}00$) et arrive à la surface d\'un verre ($n_2 = 1{,}50$). L\'angle d\'incidence par rapport à la normale est $i_1 = 30°$.',
      schema: null,
      tasks: [
        'Rappeler la loi de Snell-Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.',
        'Calculer $\\sin i_2$ puis l\'angle de réfraction $i_2$ (en degrés, arrondi à l\'unité).',
        'Le rayon réfracté se rapproche-t-il ou s\'éloigne-t-il de la normale ? Pourquoi ?'
      ],
      solutions: [
        '$n_1 \\sin i_1 = n_2 \\sin i_2$.',
        '$\\sin i_2 = \\dfrac{1{,}00 \\times \\sin 30°}{1{,}50} = \\dfrac{0{,}500}{1{,}50} = 0{,}333$. Donc $i_2 = \\arcsin(0{,}333) \\approx 19°$.',
        'Le rayon se rapproche de la normale ($i_2 < i_1$) car il passe dans un milieu plus dense ($n_2 > n_1$).'
      ],
      finalAnswer: '$i_2 \\approx 19°$ — le rayon se rapproche de la normale en entrant dans le verre.'
    },

    evaluation: {
      title: 'Évaluation — Angles',
      duration: '20 min',
      questions: [
        { statement: 'Dans un triangle, les trois angles mesurent $52°$, $73°$ et $\\alpha$. Calcule $\\alpha$ (en degrés).', type: 'numeric', answer: 55, tolerance: 0, unit: '°', points: 2, correction: '$\\alpha = 180° - 52° - 73° = 55°$.' },
        { statement: 'Deux angles sont supplémentaires. L\'un mesure $118°$. Quelle est la mesure de l\'autre ?', type: 'numeric', answer: 62, tolerance: 0, unit: '°', points: 2, correction: '$180° - 118° = 62°$.' },
        { statement: 'Un angle mesure $37°$. Comment le classe-t-on ?', type: 'multiple-choice', options: ['Angle droit', 'Angle obtus', 'Angle aigu', 'Angle plat'], answer: 2, points: 2, correction: '$0° < 37° < 90°$ → angle aigu.' },
        { statement: 'Deux angles complémentaires ont pour mesures $2x + 5°$ et $3x - 10°$. Calcule la valeur de $x$ (en degrés).', type: 'numeric', answer: 19, tolerance: 0, unit: '°', points: 2, correction: '$(2x + 5) + (3x - 10) = 90$, $5x - 5 = 90$, $x = 19°$.' },
        { statement: 'Quel est l\'angle formé par les aiguilles d\'une horloge à $15\\text{h}00$ ?', type: 'multiple-choice', options: ['$180°$', '$90°$', '$60°$', '$120°$'], answer: 1, points: 2, correction: 'De $12$ à $3$ : $3 \\times 30° = 90°$.' }
      ]
    }
  });
