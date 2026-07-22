/* =========================================================
   Spark Learning – data/3e/trigonometrie.js
   Module : Trigonométrie dans le Triangle Rectangle (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: 'trigonometrie',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Trigonométrie dans le Triangle Rectangle',
    subtitle: 'SOH-CAH-TOA, angles, hypoténuse',
    keywords: ['SOHCAHTOA', 'cos/sin/tan', 'Triangle rectangle', 'Angle'],
    physics: 'Décomposition de forces, lois de Snell-Descartes',

    cours: {
      intro: 'Dans tout triangle rectangle, les rapports entre les côtés dépendent <strong>uniquement des angles</strong> — jamais de la taille du triangle. La <strong>trigonométrie</strong> exploite cette invariance : $\\sin$, $\\cos$ et $\\tan$ sont des fonctions de l\'angle constantes pour tous les triangles semblables.<br/><br/>' +
        '<strong>SOH-CAH-TOA</strong> est le mémo fondamental : Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent. Chaque fonction est liée à une paire précise de côtés.<br/><br/>' +
        'En physique, <strong>décomposer une force</strong> ou une vitesse revient à trouver les <strong>triangles rectangles cachés</strong> dans la situation réelle.<br/><br/>' +
        'La <strong>relation fondamentale</strong> $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ relie sinus et cosinus pour tout angle — c\'est le théorème de Pythagore exprimé en rapports trigonométriques.',
      definitions: [
        { term: 'Hypoténuse', def: 'Le <strong>plus grand côté</strong> du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans les formules de $\\sin$ et $\\cos$.' },
        { term: 'Sinus', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\sin(\\theta) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}}$.<br/><br/>Le sinus mesure le rapport entre le côté <strong>en face</strong> de l\'angle et l\'hypoténuse.' },
        { term: 'Cosinus', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\cos(\\theta) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.<br/><br/>Le cosinus mesure le rapport entre le côté <strong>à côté</strong> de l\'angle et l\'hypoténuse.' },
        { term: 'Tangente', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\tan(\\theta) = \\dfrac{\\text{côté opposé}}{\\text{côté adjacent}} = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$.<br/><br/>La tangente ne fait <strong>pas intervenir l\'hypoténuse</strong>.' }
      ],
      method: {
        title: 'Méthode SOH-CAH-TOA',
        steps: [
          '<strong>SOH</strong> : $\\sin(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{Hypoténuse}}$.<br/>Le côté « Opposé » est celui qui <strong>ne touche pas</strong> l\'angle $\\theta$.',
          '<strong>CAH</strong> : $\\cos(\\theta) = \\dfrac{\\text{côté Adjacent}}{\\text{Hypoténuse}}$.<br/>Le côté « Adjacent » est celui qui <strong>touche</strong> l\'angle $\\theta$ (l\'autre côté, pas l\'hypoténuse).',
          '<strong>TOA</strong> : $\\tan(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{côté Adjacent}} = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$.<br/>Pour retrouver l\'angle : $\\theta = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$, $\\arcsin$, ou $\\arctan$.'
        ]
      },
      example: {
        statement: 'Dans un triangle rectangle, l\'hypoténuse mesure $13$ cm et un angle vaut $30°$. Calculer le côté opposé et le côté adjacent à cet angle.',
        steps: [
          '<strong>Côté opposé</strong> (SOH) : $\\sin(30°) = \\dfrac{\\text{opp}}{13}$, donc $\\text{opp} = 13 \\times \\sin(30°) = 13 \\times 0{,}5 = 6{,}5$ cm.',
          '<strong>Côté adjacent</strong> (CAH) : $\\cos(30°) = \\dfrac{\\text{adj}}{13}$, donc $\\text{adj} = 13 \\times \\cos(30°) = 13 \\times \\dfrac{\\sqrt{3}}{2} \\approx 11{,}26$ cm.',
          '<strong>Vérification</strong> par Pythagore : $6{,}5^2 + 11{,}26^2 = 42{,}25 + 126{,}79 = 169{,}04 \\approx 13^2 = 169$ ✓'
        ],
        answer: 'Côté opposé $= 6{,}5$ cm ; côté adjacent $\\approx 11{,}26$ cm.'
      },
      formulas: [
        '$\\sin(30°) = 0{,}5$, $\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$',
        '$\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$',
        '$\\sin(60°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$, $\\cos(60°) = 0{,}5$',
        '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ (relation fondamentale)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle rectangle',
        title: 'SOH-CAH-TOA : repérer opposé, adjacent et hypoténuse',
        description: 'Le rôle de chaque côté dépend de l\'angle de référence $\\theta$ choisi : identifie-le avant d\'appliquer une formule.',
        svg: `
          <svg viewBox="0 0 380 316" role="img" aria-labelledby="trig3e-graph-title trig3e-graph-desc">
            <title id="trig3e-graph-title">Triangle rectangle et SOH-CAH-TOA</title>
            <desc id="trig3e-graph-desc">Triangle rectangle avec l'angle de reference theta, le cote oppose, le cote adjacent et l'hypotenuse identifies, les trois formules sinus cosinus tangente, et l'exemple chiffre du cours avec une hypotenuse de 13 cm et un angle de 30 degres.</desc>

            <rect x="16" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="26" y="27">SOH</text>
            <text class="tick-label" x="26" y="43">sin θ = opp / hyp</text>

            <rect x="134" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
            <text class="annotation-label" x="144" y="27">CAH</text>
            <text class="tick-label" x="144" y="43">cos θ = adj / hyp</text>

            <rect x="252" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
            <text class="annotation-label" x="262" y="27">TOA</text>
            <text class="tick-label" x="262" y="43">tan θ = opp / adj</text>

            <polygon points="100,230 300,230 100,90" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="100" y1="230" x2="100" y2="90"></line>
            <line class="frame-line" x1="100" y1="230" x2="300" y2="230"></line>
            <line class="curve-main" x1="300" y1="230" x2="100" y2="90"></line>

            <path class="axis" d="M100 216 L114 216 L114 230"></path>

            <line class="guide-line" x1="274" y1="230" x2="279" y2="215"></line>
            <text class="annotation-label" x="256" y="221">θ</text>

            <circle class="plot-point-alt" cx="100" cy="230" r="5"></circle>
            <circle class="plot-point-alt" cx="100" cy="90" r="5"></circle>
            <circle class="plot-point" cx="300" cy="230" r="5"></circle>

            <text class="annotation-label" x="172" y="246">adjacent</text>
            <text class="annotation-label" x="30" y="164">opposé</text>
            <text class="annotation-label" x="190" y="130">hypoténuse</text>
            <line class="guide-line" x1="195" y1="133" x2="179" y2="145"></line>

            <rect x="16" y="258" width="348" height="50" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 20%, var(--border))"></rect>
            <text class="tick-label" x="26" y="272">Exemple du cours : hyp = 13 cm, θ = 30°</text>
            <text class="tick-label" x="26" y="288">opposé = 13 × sin 30° = 6,5 cm</text>
            <text class="tick-label" x="26" y="304">adjacent = 13 × cos 30° ≈ 11,26 cm</text>
          </svg>
        `,
        notes: [
          'Le côté opposé à $\\theta$ ne le touche jamais ; le côté adjacent le touche sans être l\'hypoténuse ; l\'hypoténuse fait toujours face à l\'angle droit.',
          'SOH-CAH-TOA relie chaque paire de côtés à une fonction : Sinus, Cosinus, Tangente.',
          'Avec hyp $= 13$ cm et $\\theta = 30°$, on retrouve les longueurs de l\'exemple du cours : opposé $= 6{,}5$ cm et adjacent $\\approx 11{,}26$ cm.'
        ],
        reading: 'Repère d\'abord l\'angle droit, puis l\'angle $\\theta$ : le troisième sommet donne l\'hypoténuse, le côté opposé à l\'angle droit.',
        caption: 'Triangle de référence pour SOH-CAH-TOA, avec l\'exemple chiffré du cours (hypoténuse 13 cm, angle 30°).'
      },
      recap: [
        '<strong>SOH-CAH-TOA</strong> : Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent.',
        '<strong>Relation fondamentale</strong> : $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ pour tout angle $\\theta$. Cette relation permet de trouver l\'un si on connaît l\'autre.',
        '<strong>Valeurs remarquables</strong> : connaître par cœur $\\sin$ et $\\cos$ de $30°$, $45°$ et $60°$ est indispensable (on les retrouve dans le triangle équilatéral et le carré).',
        '<strong>Fonctions inverses</strong> : pour retrouver un angle, on utilise $\\arcsin$, $\\arccos$ ou $\\arctan$ à la calculatrice.'
      ],
      piege: 'Piège classique sur un plan incliné : le poids $\\vec{P}$ est vertical. Si l\'angle du plan par rapport à l\'horizontal est $\\alpha$, alors la composante le long du plan est $P \\cdot \\sin(\\alpha)$ (et non $\\cos$). L\'angle se "décale" par rapport à l\'intuition !'
    },

    quiz: [
      {
        q: 'Dans un triangle rectangle, l\'hypoténuse mesure $10$ cm et un angle vaut $30°$. Quelle est la longueur du côté adjacent à cet angle ?',
        options: ['$5$ cm', '$8{,}66$ cm', '$5{,}77$ cm', '$10{,}39$ cm'],
        answer: 1,
        correction: '$\\cos(30°) = \\frac{\\text{adj}}{\\text{hyp}}$, donc $\\text{adj} = 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
      },
      {
        q: 'Une force $F = 20$ N est inclinée de $45°$ par rapport à l\'horizontale. Quelle est sa composante verticale $F_y$ ?',
        options: ['$10$ N', '$14{,}14$ N', '$17{,}32$ N', '$20$ N'],
        answer: 1,
        correction: '$F_y = F \\cdot \\sin(45°) = 20 \\times \\frac{\\sqrt{2}}{2} = 20 \\times 0{,}707 \\approx 14{,}14$ N. La composante verticale utilise le sinus car elle est opposée à l\'angle $45°$ par rapport à l\'horizontale.'
      },
      {
        q: 'Un objet repose sur un plan incliné à $30°$ par rapport à l\'horizontal. La composante du poids parallèle au plan (qui tend à faire glisser) est :',
        options: [
          '$P \\times \\cos(30°)$',
          '$P \\times \\sin(30°)$',
          '$P \\times \\tan(30°)$',
          '$P$ entier (la pente ne change rien)'
        ],
        answer: 1,
        correction: 'Le poids est vertical et l\'angle entre la normale au plan et la verticale est $30°$. La composante parallèle au plan est $P \\sin(30°) = 0{,}5P$. L\'erreur classique est de prendre $\\cos$ : mais $P \\cos(30°)$ donne la composante perpendiculaire au plan (qui équilibre la réaction normale $N$).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const angles = [30, 45, 60];
        const cosVals = [Math.sqrt(3)/2, Math.sqrt(2)/2, 0.5];
        const idx = rand(0, 2);
        const angle = angles[idx];
        const hyp = rand(8, 20);
        const adj = parseFloat((hyp * cosVals[idx]).toFixed(2));
        const cosStr = cosVals[idx].toFixed(3).replace('.', '{,}');
        const adjStr = String(adj).replace('.', '{,}');

        const ctx = pick([
          { build: () => `Une <strong>échelle</strong> de $${hyp}$ m est appuyée contre un mur et forme un angle $\\theta = ${angle}°$ avec le sol.<br/><br/>Calcule la <strong>distance</strong> entre le pied de l'échelle et le mur (arrondie au centième).` },
          { build: () => `Une <strong>rampe d'accès</strong> pour fauteuil roulant mesure $${hyp}$ m et forme un angle $\\theta = ${angle}°$ avec le sol.<br/><br/>Calcule la <strong>distance horizontale</strong> qu'elle couvre (arrondie au centième).` },
          { build: () => `Un <strong>toboggan de piscine</strong> mesure $${hyp}$ m et forme un angle $\\theta = ${angle}°$ avec le sol.<br/><br/>Calcule la <strong>distance horizontale</strong> entre le sommet et le point d'arrivée dans l'eau (arrondie au centième).` },
          { build: () => `Un <strong>câble de tyrolienne</strong> tendu entre deux arbres mesure $${hyp}$ m et forme un angle $\\theta = ${angle}°$ avec l'horizontale.<br/><br/>Calcule la <strong>distance horizontale</strong> entre les deux points d'ancrage (arrondie au centième).` },
          { build: () => `Un randonneur parcourt un <strong>chemin en pente</strong> de $${hyp}$ m, incliné d'un angle $\\theta = ${angle}°$ par rapport à l'horizontale.<br/><br/>Calcule la <strong>distance horizontale</strong> réellement parcourue (arrondie au centième).` },
          { build: () => `Une <strong>antenne</strong> est maintenue par un hauban de $${hyp}$ m formant un angle $\\theta = ${angle}°$ avec le sol.<br/><br/>Calcule la <strong>distance</strong> entre le point d'ancrage du hauban et le pied de l'antenne (arrondie au centième).` }
        ]);

        return {
          statement: ctx.build(),
          answer: adj,
          tolerance: 0.05,
          unit: 'm',
          hint: `La formule CAH donne : $\\cos(${angle}°) = \\dfrac{\\text{adj}}{\\text{hyp}}$. Donc $\\text{adj} = \\text{hyp} \\times \\cos(${angle}°)$.<br/><br/>La valeur exacte est $\\cos(${angle}°) \\approx ${cosStr}$.`,
          solution: [
            `Formule : $\\cos(${angle}°) = \\dfrac{\\text{adj}}{\\text{hyp}}$`,
            `Donc : $\\text{adj} = \\text{hyp} \\times \\cos(${angle}°) = ${hyp} \\times ${cosStr}$`,
            `Résultat : $\\text{adj} = ${adjStr}$ m`
          ]
        };
      }
    },

    probleme: {
      context: 'La loi de Snell-Descartes décrit la réfraction de la lumière à l\'interface entre deux milieux d\'indices de réfraction $n_1$ et $n_2$ : $$n_1 \\cdot \\sin(\\theta_1) = n_2 \\cdot \\sin(\\theta_2)$$ Un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers le verre ($n_2 = 1{,}50$) avec un angle d\'incidence $\\theta_1 = 30°$.',
      schema: 'Surface de séparation : air (n₁=1,00) au-dessus | verre (n₂=1,50) en dessous. Rayon incident à 30° de la normale → rayon réfracté à θ₂ (plus proche de la normale).',
      tasks: [
        'Calculer $n_1 \\cdot \\sin(\\theta_1)$ numériquement.',
        'En déduire $\\sin(\\theta_2)$ en isolant cette inconnue.',
        'Calculer $\\theta_2 = \\arcsin(\\sin(\\theta_2))$ et interpréter : le rayon se rapproche-t-il ou s\'éloigne-t-il de la normale ?'
      ],
      solutions: [
        '$n_1 \\cdot \\sin(\\theta_1) = 1{,}00 \\times \\sin(30°) = 1{,}00 \\times 0{,}500 = 0{,}500$.',
        '$n_2 \\cdot \\sin(\\theta_2) = 0{,}500 \\Rightarrow \\sin(\\theta_2) = \\dfrac{0{,}500}{1{,}50} = 0{,}333$.',
        '$\\theta_2 = \\arcsin(0{,}333) \\approx 19{,}5°$. Le rayon se rapproche de la normale car il passe dans un milieu plus dense ($n_2 > n_1$).'
      ],
      finalAnswer: '$\\theta_2 \\approx 19{,}5°$ (le rayon se rapproche de la normale dans le verre)'
    },

    evaluation: {
      title: 'Évaluation — Trigonométrie dans le Triangle Rectangle',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle, l\'hypoténuse mesure $13$ cm et le côté opposé à l\'angle $\\theta$ mesure $5$ cm. Calculer $\\sin(\\theta)$. Donner le résultat sous forme décimale arrondie au centième.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\sin(\\theta) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        {
          statement: 'Dans un triangle rectangle, $\\cos(\\theta) = 0{,}6$ et l\'hypoténuse mesure $10$ cm. Quelle est la longueur du côté adjacent à $\\theta$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}} \\Rightarrow \\text{adj} = \\cos(\\theta) \\times \\text{hyp} = 0{,}6 \\times 10 = 6$ cm.'
        },
        {
          statement: 'Une échelle de $5$ m est posée contre un mur. Elle forme un angle de $60°$ avec le sol. À quelle hauteur atteint-elle le mur ? (arrondir à $0{,}01$ m)',
          type: 'numeric',
          answer: 4.33,
          tolerance: 0.05,
          unit: 'm',
          points: 2,
          correction: 'La hauteur est le côté opposé à l\'angle de $60°$ avec le sol. $h = 5 \\times \\sin(60°) = 5 \\times \\dfrac{\\sqrt{3}}{2} \\approx 5 \\times 0{,}866 = 4{,}33$ m.'
        },
        {
          statement: 'Quelle relation est toujours vraie pour tout angle $\\theta$ ?',
          type: 'multiple-choice',
          options: [
            '$\\sin(\\theta) + \\cos(\\theta) = 1$',
            '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$',
            '$\\sin(\\theta) \\times \\cos(\\theta) = 1$',
            '$\\tan(\\theta) = \\sin(\\theta) + \\cos(\\theta)$'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation fondamentale de la trigonométrie est $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$. Elle découle directement du théorème de Pythagore appliqué au triangle rectangle : $\\left(\\dfrac{\\text{opp}}{\\text{hyp}}\\right)^2 + \\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)^2 = \\dfrac{\\text{opp}^2 + \\text{adj}^2}{\\text{hyp}^2} = 1$.'
        },
        {
          statement: 'Dans un triangle rectangle, le côté opposé mesure $7$ cm et le côté adjacent mesure $7$ cm. Quelle est la valeur de $\\tan(\\theta)$ ?',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\tan(\\theta) = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{7}{7} = 1$. Cela signifie que $\\theta = 45°$, car $\\tan(45°) = 1$.'
        }
      ]
    }
  }
);
