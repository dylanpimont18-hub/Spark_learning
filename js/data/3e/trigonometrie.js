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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">Angle $\\theta$</th><th style="border:1px solid var(--border);padding:8px">$\\sin(\\theta)$</th><th style="border:1px solid var(--border);padding:8px">$\\cos(\\theta)$</th><th style="border:1px solid var(--border);padding:8px">$\\tan(\\theta)$</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$30°$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{2} = 0{,}5$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{\\sqrt{3}} \\approx 0{,}577$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$45°$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{\\sqrt{2}}{2} \\approx 0{,}707$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{\\sqrt{2}}{2} \\approx 0{,}707$</td><td style="border:1px solid var(--border);padding:8px">$1$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">$60°$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{\\sqrt{3}}{2} \\approx 0{,}866$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{1}{2} = 0{,}5$</td><td style="border:1px solid var(--border);padding:8px">$\\sqrt{3} \\approx 1{,}732$</td></tr></table>',
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
        return {
          statement: `Dans un triangle rectangle, l'hypoténuse mesure $${hyp}$ cm et l'angle étudié est $\\theta = ${angle}°$. Calcule le côté adjacent (arrondi au centième).`,
          answer: adj,
          tolerance: 0.05,
          unit: 'cm',
          hint: `La formule CAH donne : $\\cos(${angle}°) = \\dfrac{\\text{adj}}{\\text{hyp}}$. Donc $\\text{adj} = \\text{hyp} \\times \\cos(${angle}°)$. La valeur exacte est $\\cos(${angle}°) \\approx ${cosVals[idx].toFixed(3)}$.`,
          solution: [
            `Formule : $\\cos(${angle}°) = \\dfrac{\\text{adj}}{\\text{hyp}}$`,
            `Donc : $\\text{adj} = \\text{hyp} \\times \\cos(${angle}°) = ${hyp} \\times ${cosVals[idx].toFixed(3)}$`,
            `Résultat : $\\text{adj} = ${adj}$ cm`
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
