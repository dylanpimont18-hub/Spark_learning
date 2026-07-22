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
      diagram: {
        theme: 'maths',
        kicker: 'Types d\'angles et somme d\'un triangle',
        title: 'Reconnaître aigu, droit, obtus, plat — et retrouver les 180° d\'un triangle',
        description: 'Le même sommet, un écartement différent : c\'est la seule chose qui distingue un angle aigu, droit, obtus ou plat. Dans un triangle, les trois angles s\'additionnent toujours à $180°$.',
        svg: `
          <svg viewBox="0 0 460 340" role="img" aria-labelledby="angles-diagram-title angles-diagram-desc">
            <title id="angles-diagram-title">Quatre types d'angles et un triangle rectangle</title>
            <desc id="angles-diagram-desc">Quatre secteurs angulaires (45°, 90°, 120°, 180°) et un triangle rectangle dont les angles mesurent 37°, 53° et 90°, soit une somme de 180°.</desc>
            <line class="grid-line" x1="121" y1="15" x2="121" y2="165"></line>
            <line class="grid-line" x1="235" y1="15" x2="235" y2="165"></line>
            <line class="grid-line" x1="350" y1="15" x2="350" y2="165"></line>
            <line class="grid-line" x1="10" y1="170" x2="450" y2="170"></line>

            <text class="label-soft" x="14" y="34">Aigu</text>
            <line class="frame-line" x1="30" y1="132" x2="100" y2="132"></line>
            <line class="frame-line" x1="30" y1="132" x2="79.5" y2="82.5"></line>
            <path class="guide-line" d="M52 132 L51.3 126.3 L49.1 121.0 L45.6 116.5" fill="none"></path>
            <circle class="plot-point" cx="30" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="56" y="118">45°</text>

            <text class="label-soft" x="129" y="34">Droit</text>
            <line class="frame-line" x1="145" y1="132" x2="215" y2="132"></line>
            <line class="frame-line" x1="145" y1="132" x2="145" y2="62"></line>
            <path class="frame-line" d="M160 132 L160 117 L145 117" fill="none"></path>
            <circle class="plot-point" cx="145" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="168" y="112">90°</text>

            <text class="label-soft" x="244" y="34">Obtus</text>
            <line class="frame-line" x1="278" y1="132" x2="333" y2="132"></line>
            <line class="frame-line" x1="278" y1="132" x2="250.5" y2="84.4"></line>
            <path class="guide-line" d="M298 132 L297.3 126.8 L295.3 122.0 L292.1 117.9 L288.0 114.7 L283.2 112.7 L278.0 112.0 L272.8 112.7 L268.0 114.7" fill="none"></path>
            <circle class="plot-point" cx="278" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="292" y="100">120°</text>

            <text class="label-soft" x="359" y="34">Plat</text>
            <line class="frame-line" x1="407" y1="132" x2="433" y2="132"></line>
            <line class="frame-line" x1="407" y1="132" x2="381" y2="132"></line>
            <path class="guide-line" d="M433 132 L429.5 119.0 L420.0 109.5 L407.0 106.0 L394.0 109.5 L384.5 119.0 L381.0 132" fill="none"></path>
            <circle class="plot-point" cx="407" cy="132" r="3.5"></circle>
            <text class="annotation-label" x="396" y="97">180°</text>

            <text class="label-soft" x="20" y="205">Triangle — la somme des angles vaut 180°</text>
            <polygon points="170,234 170,300 258,300" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="170" y1="234" x2="170" y2="300"></line>
            <line class="frame-line" x1="170" y1="300" x2="258" y2="300"></line>
            <line class="curve-main" x1="170" y1="234" x2="258" y2="300"></line>
            <path class="frame-line" d="M185 300 L185 285 L170 285" fill="none"></path>
            <path class="guide-line" d="M243.6 289.2 L242.4 291.0 L241.1 293.8 L240.3 296.9 L240.0 300.0" fill="none"></path>
            <path class="guide-line" d="M186 246 L184.1 248.1 L181.5 250.4 L178.5 252.1 L175.2 253.3 L170 254" fill="none"></path>
            <circle class="plot-point" cx="170" cy="234" r="4"></circle>
            <circle class="plot-point" cx="258" cy="300" r="4"></circle>
            <circle class="plot-point" cx="170" cy="300" r="4"></circle>
            <text class="annotation-label" x="152" y="224">A</text>
            <text class="annotation-label" x="262" y="315">B</text>
            <text class="annotation-label" x="148" y="315">C</text>
            <text class="annotation-label" x="222" y="290">37°</text>
            <text class="annotation-label" x="180" y="244">53°</text>
            <text class="annotation-label" x="191" y="297">90°</text>
            <rect x="295" y="188" width="150" height="30" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 30%, var(--border))"></rect>
            <text class="tick-label" x="305" y="207">37° + 53° + 90° = 180°</text>
          </svg>
        `,
        notes: [
          'Angle aigu (ici $45°$) : strictement compris entre $0°$ et $90°$.',
          'Angle droit ($90°$) : repéré par le petit carré au sommet, jamais par un arc.',
          'Angle obtus (ici $120°$) : strictement compris entre $90°$ et $180°$.',
          'Angle plat ($180°$) : les deux côtés forment une ligne droite.',
          'Dans le triangle rectangle de l\'exemple du cours, les trois angles vérifient $37° + 53° + 90° = 180°$.'
        ],
        reading: 'Repère d\'abord le sommet, le point où les deux côtés se rejoignent : c\'est entre ces deux côtés que se mesure l\'angle, jamais le long d\'un seul côté.',
        caption: 'Les quatre types d\'angles (aigu, droit, obtus, plat) et le triangle rectangle de l\'exemple du cours, où $37° + 53° + 90° = 180°$.'
      },
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
        const a1 = rand(20, 70), a2 = rand(20, 70);
        const a3 = 180 - a1 - a2;
        if (a3 <= 0) { return { statement: `Dans un triangle, deux angles mesurent $40°$ et $60°$. Calcule le troisième angle.`, answer: 80, tolerance: 0, unit: '°', hint: 'La somme des trois angles d\'un triangle est toujours 180°.', solution: ['$180° - 40° - 60° = 80°$'] }; }
        const ctx = pick([
          { build: () => `Dans un triangle, deux angles mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> (en degrés) ?` },
          { build: () => `Sur un plan de construction, un architecte trace un triangle dont deux angles mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> qu'il doit reporter sur le plan ?` },
          { build: () => `En optique, la section d'un prisme a la forme d'un triangle dont deux angles mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> du prisme ?` },
          { build: () => `Un charpentier construit une ferme de toit triangulaire. Deux de ses angles mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> de la charpente ?` },
          { build: () => `La voile triangulaire d'un petit voilier a deux angles qui mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> de la voile ?` },
          { build: () => `Dans le triangle formé par l'équerre d'un menuisier, deux angles mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> de l'équerre ?` },
          { build: () => `Une part de pizza en forme de triangle a deux angles qui mesurent $${a1}°$ et $${a2}°$.<br/>Quelle est la mesure du <strong>troisième angle</strong> de cette part ?` }
        ]);
        return {
          statement: ctx.build(),
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
