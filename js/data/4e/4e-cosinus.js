window.MODULES.push(
    {
    id: '4e-cosinus',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Cosinus d\'un angle aigu',
    subtitle: 'cos = adjacent / hypoténuse',
    keywords: ['Cosinus', 'Angle aigu', 'Triangle rectangle', 'Adjacent', 'Hypoténuse'],
    physics: 'Décomposition de forces, travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), loi de Snell-Descartes en optique',
    cours: {
      intro: 'Dans un triangle rectangle, le cosinus d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.' +
        '<br/><br/>' +
      'L\'idée clé est que tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est toujours identique, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$ : $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit).' +
        '<br/><br/>' +
        'Attention : le côté « adjacent » dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'hypoténuse ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.' +
        '<br/><br/>' +
        'En physique, le cosinus intervient dans la décomposition de forces, le travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), et l\'optique (loi de Snell-Descartes).',
      definitions: [
        { term: 'Cosinus d\'un angle aigu', def: 'Rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
        { term: 'Côté adjacent', def: 'Côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
        { term: 'Hypoténuse', def: 'Plus grand côté du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans le cosinus.' },
        { term: 'Arc cosinus ($\\arccos$)', def: 'Fonction inverse du cosinus : si $\\cos(\\hat{A}) = k$, alors $\\hat{A} = \\arccos(k)$. Permet de retrouver un angle à partir d\'un rapport.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier l\'angle et les côtés</strong> : l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit) et le côté adjacent (côté de l\'angle, autre que l\'hypoténuse). <strong>Exemple :</strong> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
          '<strong>Appliquer</strong> : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$. <strong>Exemple :</strong> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
          '<strong>Trouver un côté inconnu</strong> : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$ ou $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$. <strong>Exemple :</strong> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
        ]
      },
      example: {
        statement: 'Une échelle de $5$ m est posée contre un mur en formant un angle de $60°$ avec le sol. À quelle distance du mur se trouve le pied de l\'échelle ?',
        steps: [
          'L\'échelle forme l\'hypoténuse d\'un triangle rectangle. L\'angle au sol est $60°$ et le côté adjacent est la distance au mur.',
          '$\\cos(60°) = \\dfrac{\\text{distance au mur}}{\\text{échelle}} = \\dfrac{d}{5}$.',
          '$d = 5 \\times \\cos(60°) = 5 \\times 0{,}5 = 2{,}5$ m.'
        ],
        answer: 'Le pied de l\'échelle est à $2{,}5$ m du mur.'
      },
      formulas: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$',
        '$\\cos(0°) = 1$, $\\cos(30°) = \\frac{\\sqrt{3}}{2}$, $\\cos(45°) = \\frac{\\sqrt{2}}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\cos(90°) = 0$',
        'Pour trouver l\'angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle rectangle',
        title: 'Le cosinus : adjacent sur hypoténuse',
        description: 'À ce niveau, seul le cosinus est au programme : on ne nomme que le côté adjacent et l\'hypoténuse — le troisième côté n\'a pas besoin de nom pour l\'instant.',
        svg: `
          <!-- Trace A L'ECHELLE de l'exemple du cours : 1 m = 40 px, angle A = 60°.
               adjacent CA = 2,5 m = 100 px, oppose CB = 4,33 m = 173 px,
               hypotenuse AB = 5 m = 200 px. L'ancien trace donnait un angle de
               35° alors que la legende annoncait 60° : cos 35° = 0,82, la figure
               contredisait le calcul qu'elle est censee illustrer. -->
          <svg viewBox="0 0 380 320" role="img" aria-labelledby="cosinus-graph-title cosinus-graph-desc">
            <title id="cosinus-graph-title">Triangle rectangle ABC et cosinus de l'angle A</title>
            <desc id="cosinus-graph-desc">Triangle rectangle ABC trace a l'echelle, angle droit en C, angle de 60 degres marque en A. Le cote AC, adjacent a l'angle A, mesure 2,5 metres et l'hypotenuse AB mesure 5 metres, conformement a l'exemple chiffre du cours.</desc>

            <rect x="150" y="10" width="140" height="40" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="160" y="26">COS</text>
            <text class="tick-label" x="160" y="43">cos Â = adj / hyp</text>

            <polygon points="120,250 220,250 120,77" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="120" y1="250" x2="120" y2="77"></line>
            <line class="frame-line" x1="120" y1="250" x2="220" y2="250"></line>
            <line class="curve-main" x1="220" y1="250" x2="120" y2="77"></line>

            <path class="axis" d="M120 236 L134 236 L134 250"></path>

            <path class="guide-line" d="M200 250 A20 20 0 0 1 210 233" fill="none"></path>
            <text class="annotation-label" x="188" y="242">Â</text>

            <circle class="plot-point-alt" cx="120" cy="250" r="5"></circle>
            <circle class="plot-point-alt" cx="120" cy="77" r="5"></circle>
            <circle class="plot-point" cx="220" cy="250" r="5"></circle>
            <text class="annotation-label" x="100" y="270">C</text>
            <text class="annotation-label" x="100" y="71">B</text>
            <text class="annotation-label" x="228" y="270">A</text>

            <text class="annotation-label" x="128" y="268">AC = adjacent</text>
            <text class="annotation-label" x="240" y="150">AB = hypoténuse</text>
            <line class="guide-line" x1="236" y1="156" x2="178" y2="157"></line>

            <rect x="16" y="276" width="348" height="36" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 20%, var(--border))"></rect>
            <text class="tick-label" x="26" y="290">Exemple du cours : échelle de 5 m, angle 60° au sol</text>
            <text class="tick-label" x="26" y="306">distance au mur = 5 × cos 60° = 5 × 0,5 = 2,5 m</text>
          </svg>
        `,
        notes: [
          'Le côté adjacent à $\\hat{A}$ est $AC$ : il touche $\\hat{A}$ sans être l\'hypoténuse. L\'hypoténuse $AB$ fait face à l\'angle droit en $C$.',
          'À ce niveau, on ne nomme pas le troisième côté ($BC$) : son nom (opposé) et son usage (sinus) arrivent plus tard.',
          'Avec hyp $= 5$ m et $\\hat{A} = 60°$, on retrouve l\'exemple du cours : adjacent $= 5 \\times \\cos(60°) = 2{,}5$ m.'
        ],
        reading: 'Le cosinus ne fait intervenir que deux côtés : celui qui touche l\'angle (adjacent) et le plus long (hypoténuse).',
        caption: 'Triangle $ABC$ rectangle en $C$, avec l\'exemple chiffré du cours (échelle de 5 m à 60°).'
      },
      recap: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours compris entre $0$ et $1$.',
        'Le côté adjacent change selon l\'angle considéré : c\'est le côté qui touche l\'angle (sans être l\'hypoténuse).',
        'Pour trouver un côté : adj $= $ hyp $\\times \\cos(\\hat{A})$ ; pour trouver un angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$.',
        'Valeurs clés : $\\cos(0°) = 1$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$.'
      ],
      piege: 'Piège : le côté adjacent change selon l\'angle considéré. Pour l\'angle $\\hat{A}$, l\'adjacent est le côté qui « touche » $\\hat{A}$ (autre que l\'hypoténuse). Ne pas confondre avec le côté opposé.'
    },
    quiz: [
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm et $AC = 6$ cm. Quel est $\\cos(\\hat{A})$ ?',
        options: ['$0{,}6$', '$0{,}8$', '$0{,}75$', '$1{,}67$'],
        answer: 0,
        correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{AC}{AB} = \\dfrac{6}{10} = 0{,}6$.'
      },
      {
        q: 'Dans un triangle rectangle, un angle aigu mesure $60°$. L\'hypoténuse vaut $14$ cm. Quel est le côté adjacent ?',
        options: ['$7$ cm', '$12{,}12$ cm', '$7{,}27$ cm', '$28$ cm'],
        answer: 0,
        correction: '$\\text{adj} = \\text{hyp} \\times \\cos(60°) = 14 \\times 0{,}5 = 7$ cm.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm, $BC = 6$ cm, $AC = 8$ cm, un élève écrit : $\\cos(\\hat{A}) = \\dfrac{BC}{AB} = 0{,}6$. Quelle est son erreur ?',
        options: [
          'Il a confondu côté adjacent et côté opposé : $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = 0{,}8$',
          'Il a mal identifié l\'hypoténuse : ce n\'est pas $AB$',
          'Le résultat $0{,}6$ est correct, il n\'y a pas d\'erreur',
          'Il aurait dû diviser $AB$ par $BC$'
        ],
        answer: 0,
        correction: 'Pour l\'angle $\\hat{A}$, le côté adjacent est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$ (qui est le côté opposé à $\\hat{A}$). Donc $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$, pas $0{,}6$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [{a:30, cos:0.866},{a:45, cos:0.707},{a:60, cos:0.5}];
        const {a, cos} = pick(angles);
        const hyp = rand(5, 20);
        const adj = parseFloat((hyp * cos).toFixed(1));
        const scenario = pick([
          { emoji: '📐', statement: `Dans un triangle rectangle, un angle mesure $${a}°$ et l'hypoténuse vaut $${hyp}$ cm. Calcule le côté adjacent (en cm, arrondi à $0{,}1$).` },
          { emoji: '🪜', statement: `Une échelle de $${hyp}$ m est appuyée contre un mur et forme un angle de $${a}°$ avec le sol. À quelle distance du mur se trouve le pied de l'échelle (en m, arrondi à $0{,}1$) ? <br/><em>Indication : le côté adjacent = hypoténuse $\\times \\cos(${a}°)$.</em>` },
          { emoji: '⛷️', statement: `Une piste de ski mesure $${hyp}$ m de long et fait un angle de $${a}°$ avec l'horizontale. Quelle est la distance horizontale parcourue (en m, arrondi à $0{,}1$) ?` },
          { emoji: '🏠', statement: `Le toit d'une maison a une pente qui forme un angle de $${a}°$ avec l'horizontale. La longueur du pan de toit est $${hyp}$ m. Quelle est la largeur horizontale couverte (en m, arrondi à $0{,}1$) ?` },
          { emoji: '🔌', statement: `Un câble tendu de $${hyp}$ m relie un poteau au sol en formant un angle de $${a}°$ avec le sol. À quelle distance horizontale du poteau est fixé le câble (en m, arrondi à $0{,}1$) ?` },
          { emoji: '♿', statement: `Une rampe d'accès mesure $${hyp}$ m de long et forme un angle de $${a}°$ avec le sol. Quelle longueur horizontale la rampe couvre-t-elle (en m, arrondi à $0{,}1$) ?` }
        ]);
        return {
          statement: `${scenario.emoji} ${scenario.statement}`,
          answer: adj,
          tolerance: 0.2,
          unit: scenario.emoji === '📐' ? 'cm' : 'm',
          hint: `$\\text{côté adjacent} = \\text{hypoténuse} \\times \\cos(${a}°) = ${hyp} \\times ${fr(cos)}$.`,
          solution: [`$\\text{adj} = ${hyp} \\times \\cos(${a}°) = ${hyp} \\times ${fr(cos)} = ${fr(adj)}$ ${scenario.emoji === '📐' ? 'cm' : 'm'}.`]
        };
      }
    },
    probleme: {
      context: 'Une rampe d\'accès pour personnes à mobilité réduite forme un angle de $5°$ avec le sol horizontal. La longueur de la rampe est $4$ m ($\\cos 5° \\approx 0{,}9962$).',
      tasks: [
        'Calculer la longueur horizontale couverte par la rampe (arrondir à $0{,}01$ m).',
        'La hauteur de la marche surmontée est $h$. En utilisant le théorème de Pythagore avec la longueur de la rampe (hypoténuse $= 4$ m) et la distance horizontale trouvée à la question précédente, calculer $h$ (arrondie au centimètre).'
      ],
      solutions: [
        '$\\text{adj} = 4 \\times \\cos(5°) \\approx 4 \\times 0{,}9962 = 3{,}98$ m (arrondi au centimètre).',
        '$h = \\sqrt{4^2 - 3{,}9848^2} \\approx \\sqrt{16 - 15{,}88} \\approx \\sqrt{0{,}12} \\approx 0{,}35$ m $= 35$ cm (on garde plus de décimales pour l\'adjacent dans ce calcul, sinon l\'arrondi fausse le résultat).'
      ],
      finalAnswer: 'La rampe couvre $\\approx 3{,}98$ m horizontalement, pour une marche d\'environ $35$ cm de hauteur.'
    },

    evaluation: {
      title: 'Évaluation — Cosinus d\'un angle aigu',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 13\\,\\text{cm}$ et $AC = 5\\,\\text{cm}$, calculer $\\cos(\\hat{A})$. Donner le résultat décimal arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{AC}{AB} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        {
          statement: 'Un triangle rectangle a un angle de $45°$ et une hypoténuse de $10\\,\\text{cm}$. Calculer le côté adjacent (en cm, arrondi à $0{,}1$). On donne $\\cos(45°) \\approx 0{,}707$.',
          type: 'numeric',
          answer: 7.07,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(45°) = 10 \\times 0{,}707 = 7{,}07\\,\\text{cm}$.'
        },
        {
          statement: 'Dans un triangle rectangle, $\\cos(\\hat{A}) = 0{,}6$ et l\'hypoténuse vaut $15\\,\\text{cm}$. Que vaut le côté adjacent à $\\hat{A}$ ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(\\hat{A}) = 15 \\times 0{,}6 = 9\\,\\text{cm}$.'
        },
        {
          statement: 'Un élève écrit $\\cos(\\hat{B}) = \\dfrac{\\text{hypoténuse}}{\\text{adjacent}}$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur',
            'Il a inversé le rapport : le cosinus est $\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
            'Le cosinus utilise le côté opposé, pas l\'adjacent',
            'Le cosinus n\'existe que pour l\'angle de $90°$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le cosinus d\'un angle aigu est $\\cos(\\hat{B}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$. L\'élève a inversé numérateur et dénominateur. Le rapport $\\dfrac{\\text{hyp}}{\\text{adj}}$ est toujours $\\geq 1$, ce qui est impossible pour un cosinus d\'angle aigu.'
        },
        {
          statement: 'Sachant que $\\cos(60°) = 0{,}5$, quelle est la mesure de l\'angle $\\hat{A}$ dans un triangle rectangle si $\\cos(\\hat{A}) = 0{,}5$ ?',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\cos(\\hat{A}) = 0{,}5 = \\cos(60°)$, donc $\\hat{A} = 60°$.'
        }
      ]
    }
  }
);
