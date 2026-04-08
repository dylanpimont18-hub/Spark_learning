/* =========================================================
   Spark Learning – data/lycee-2nde/vecteurs.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'vecteurs',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Vecteurs 2D et Projection Orthogonale',
    subtitle: 'Composantes, projection, signe et sens',
    keywords: ['Norme', 'Projection', 'Coordonnées', 'Bilan des forces'],
    physics: '2ème loi de Newton, plan incliné, bilan des forces',

    cours: {
      intro: 'Un <strong>vecteur</strong> possède à la fois une valeur (norme), une direction et un sens — contrairement aux grandeurs scalaires.<br/><br/>En physique, toutes les grandeurs vectorielles (force, vitesse, accélération) se <strong>projettent</strong> sur des axes perpendiculaires pour être exploitées par les lois de Newton.<br/><br/>La projection « décompose » un vecteur oblique en deux <strong>composantes indépendantes</strong> : $F_x = F\\cos(\\theta)$ (côté adjacent = cosinus) et $F_y = F\\sin(\\theta)$ (côté opposé = sinus), où $\\theta$ est l\'angle avec l\'axe horizontal.<br/><br/>Le <strong>piège du plan incliné</strong> est récurrent : le poids est vertical mais les axes sont inclinés, ce qui « retourne » les rôles du sinus et du cosinus par rapport à l\'intuition.',
      definitions: [
        { term: 'Vecteur', def: 'Objet mathématique caractérisé par une direction, un sens et une norme (valeur). Notation : $\\vec{F}$.' },
        { term: 'Norme', def: 'Valeur (longueur) du vecteur : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$. Toujours positive ou nulle.' },
        { term: 'Composante', def: 'Projection d\'un vecteur sur un axe. $F_x$ est la composante horizontale, $F_y$ la composante verticale.' },
        { term: 'Projection orthogonale', def: 'Opération qui décompose un vecteur oblique en deux composantes perpendiculaires, une sur chaque axe du repère.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Le signe</strong> : regarder le sens du vecteur par rapport à l\'axe. S\'il pointe dans le sens positif de l\'axe, la composante est positive. S\'il pointe en sens inverse, elle est négative. <strong>Exemple :</strong> Une force $\\vec{F}$ pointe vers la gauche (sens négatif de $Ox$) → $F_x < 0$.',
          '<strong>L\'angle</strong> : repérer l\'angle $\\theta$ entre le vecteur et l\'axe de référence. Le côté "qui touche" l\'angle $\\theta$ est adjacent (lié au cosinus). L\'autre est opposé (lié au sinus). <strong>Exemple :</strong> Si $\\theta = 30°$ entre $\\vec{F}$ et $Ox$, le côté le long de $Ox$ est adjacent → on utilise $\\cos(30°)$ pour $F_x$.',
          '<strong>La formule</strong> : $F_x = \\pm F \\cdot \\cos(\\theta)$ et $F_y = \\pm F \\cdot \\sin(\\theta)$ si $\\theta$ est l\'angle avec l\'axe $Ox$. <strong>Exemple :</strong> $F = 10$ N, $\\theta = 60°$ → $F_x = 10\\cos(60°) = 5$ N, $F_y = 10\\sin(60°) \\approx 8{,}66$ N.'
        ]
      },
      example: {
        statement: 'Un câble tire un traîneau avec une force $\\vec{T}$ de norme $T = 50$ N, inclinée de $\\theta = 30°$ au-dessus de l\'horizontale. Déterminer les composantes $T_x$ et $T_y$.',
        steps: [
          'Le vecteur pointe vers la droite et le haut → les deux composantes sont positives.',
          '$T_x = T \\cos(\\theta) = 50 \\times \\cos(30°) = 50 \\times 0{,}866 \\approx 43{,}3$ N (composante horizontale qui fait avancer le traîneau).',
          '$T_y = T \\sin(\\theta) = 50 \\times \\sin(30°) = 50 \\times 0{,}5 = 25$ N (composante verticale qui allège le traîneau).'
        ],
        answer: '$T_x \\approx 43{,}3$ N et $T_y = 25$ N.'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto"><tr><th style="border:1px solid var(--border);padding:8px">Quadrant</th><th style="border:1px solid var(--border);padding:8px">Direction</th><th style="border:1px solid var(--border);padding:8px">Signe de $F_x$</th><th style="border:1px solid var(--border);padding:8px">Signe de $F_y$</th></tr><tr><td style="border:1px solid var(--border);padding:8px">I (haut-droite)</td><td style="border:1px solid var(--border);padding:8px">↗</td><td style="border:1px solid var(--border);padding:8px">$+$</td><td style="border:1px solid var(--border);padding:8px">$+$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">II (haut-gauche)</td><td style="border:1px solid var(--border);padding:8px">↖</td><td style="border:1px solid var(--border);padding:8px">$-$</td><td style="border:1px solid var(--border);padding:8px">$+$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">III (bas-gauche)</td><td style="border:1px solid var(--border);padding:8px">↙</td><td style="border:1px solid var(--border);padding:8px">$-$</td><td style="border:1px solid var(--border);padding:8px">$-$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IV (bas-droite)</td><td style="border:1px solid var(--border);padding:8px">↘</td><td style="border:1px solid var(--border);padding:8px">$+$</td><td style="border:1px solid var(--border);padding:8px">$-$</td></tr></table>',
      formulas: [
        '$F_x = F \\cdot \\cos(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$F_y = F \\cdot \\sin(\\theta)$ (si $\\theta$ est l\'angle avec $Ox$)',
        '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$ (norme = théorème de Pythagore)',
        '$\\theta = \\arctan\\left(\\dfrac{F_y}{F_x}\\right)$ (retrouver l\'angle depuis les composantes)'
      ],
      recap: [
        'Un vecteur se décompose en deux composantes perpendiculaires via la projection orthogonale.',
        'Côté adjacent à $\\theta$ → cosinus ; côté opposé → sinus. Le signe dépend du sens par rapport à l\'axe.',
        'Sur un plan incliné d\'angle $\\alpha$ : composante parallèle $= P\\sin(\\alpha)$, perpendiculaire $= P\\cos(\\alpha)$.',
        'La norme se retrouve par Pythagore : $\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$.'
      ],
      piege: 'Piège du plan incliné : si l\'angle du plan est $\\alpha$ (avec l\'horizontale), et que le poids est vertical, alors la composante du poids PARALLÈLE au plan est $P \\cdot \\sin(\\alpha)$ et PERPENDICULAIRE au plan est $P \\cdot \\cos(\\alpha)$. L\'angle "se retourne" par rapport à l\'intuition !'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $20$ N est dirigée vers le haut, à $30°$ par rapport à la verticale. Sa composante horizontale $F_x$ est :',
        options: [
          '$F_x = 20\\sin(30°) = 10$ N',
          '$F_x = 20\\cos(30°) \\approx 17{,}3$ N',
          '$F_x = 20\\tan(30°) \\approx 11{,}5$ N',
          '$F_x = 0$ N (force quasi-verticale)'
        ],
        answer: 0,
        correction: 'L\'angle $30°$ est mesuré par rapport à la verticale. La composante horizontale est le côté OPPOSÉ à cet angle, donc $F_x = F\\sin(30°) = 20 \\times 0{,}5 = 10$ N. Si l\'angle était par rapport à l\'horizontale, on utiliserait $\\cos$. La règle : l\'angle de référence détermine si on utilise sinus (opposé) ou cosinus (adjacent).'
      },
      {
        q: 'Un vecteur pointe vers le bas et la gauche (3ème quadrant). Ses composantes $F_x$ et $F_y$ sont :',
        options: [
          'Toutes deux positives',
          'Toutes deux négatives',
          '$F_x$ positive, $F_y$ négative',
          '$F_x$ négative, $F_y$ positive'
        ],
        answer: 1,
        correction: 'Un vecteur pointant vers le bas-gauche va dans le sens contraire de l\'axe $Ox$ (positif = droite) et de l\'axe $Oy$ (positif = haut). Donc $F_x < 0$ et $F_y < 0$.'
      },
      {
        q: 'Un skieur sur un plan incliné à $\\alpha = 30°$. La composante du poids $\\vec{P}$ parallèle au plan (vers le bas du plan) vaut :',
        options: [
          '$P \\cdot \\cos(30°)$',
          '$P \\cdot \\sin(30°)$',
          '$P \\cdot \\tan(30°)$',
          '$P / \\cos(30°)$'
        ],
        answer: 1,
        correction: 'En prenant l\'axe $Ox$ parallèle au plan, l\'angle entre le poids (vertical) et l\'axe $Oy$ (normal au plan) est $\\alpha$. Donc la composante parallèle au plan est $P \\cdot \\sin(\\alpha)$.'
      },
      {
        q: 'Un objet de poids $\\vec{P}$ est sur un plan incliné à $\\alpha = 45°$. On a $P_{\\parallel} = P\\sin(45°)$ et $P_{\\perp} = P\\cos(45°)$. Que peut-on en déduire ?',
        options: [
          '$P_{\\parallel} = P_{\\perp}$ car $\\sin(45°) = \\cos(45°)$',
          '$P_{\\parallel} > P_{\\perp}$ car le sinus est toujours plus grand',
          '$P_{\\parallel} < P_{\\perp}$ car le cosinus est toujours plus grand',
          'On ne peut pas comparer sans connaître la valeur de $P$'
        ],
        answer: 0,
        correction: '$\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2}$, donc $P_{\\parallel} = P_{\\perp}$. C\'est le seul angle où les deux composantes sont égales. Pour $\\alpha < 45°$, la composante perpendiculaire domine ; pour $\\alpha > 45°$, c\'est la composante parallèle.'
      },
      {
        q: 'On donne $F_x = 8$ N et $F_y = -6$ N. Dans quel quadrant pointe le vecteur $\\vec{F}$ et quelle est sa norme ?',
        options: [
          '4ème quadrant (bas-droite), $\\|\\vec{F}\\| = 10$ N',
          '2ème quadrant (haut-gauche), $\\|\\vec{F}\\| = 10$ N',
          '4ème quadrant (bas-droite), $\\|\\vec{F}\\| = 14$ N',
          '1er quadrant (haut-droite), $\\|\\vec{F}\\| = 2$ N'
        ],
        answer: 0,
        correction: '$F_x > 0$ (droite) et $F_y < 0$ (bas) → 4ème quadrant. $\\|\\vec{F}\\| = \\sqrt{8^2 + (-6)^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ N. Attention : la norme utilise Pythagore, pas la somme simple des composantes.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { obj: 'un câble tire un chariot', dir: 'au-dessus de l\'horizontale', axis: 'horizontale' },
          { obj: 'une grue soulève une poutre', dir: 'par rapport à la verticale', axis: 'verticale' },
          { obj: 'un remorqueur tracte un bateau', dir: 'sous l\'horizontale', axis: 'horizontale' },
          { obj: 'un hélicoptère exerce une traction', dir: 'par rapport à l\'horizontale', axis: 'horizontale' }
        ];
        const ctx = pick(contexts);
        const angles = [30, 45, 60];
        const cosVals = { 30: Math.sqrt(3)/2, 45: Math.sqrt(2)/2, 60: 0.5 };
        const sinVals = { 30: 0.5, 45: Math.sqrt(2)/2, 60: Math.sqrt(3)/2 };
        const angle = pick(angles);
        const F = rand(10, 50);
        const Fx = parseFloat((F * cosVals[angle]).toFixed(2));
        const Fy = parseFloat((F * sinVals[angle]).toFixed(2));
        const norm = parseFloat(Math.sqrt(Fx * Fx + Fy * Fy).toFixed(2));
        return {
          statement: `${ctx.obj[0].toUpperCase() + ctx.obj.slice(1)} avec une force $\\vec{F}$ de norme $F = ${F}$ N, inclinée de $\\theta = ${angle}°$ ${ctx.dir}.<br/><br/>Calcule la composante horizontale $F_x$, puis la composante verticale $F_y$. Vérifie en recalculant la norme $\\|\\vec{F}\\|= \\sqrt{F_x^2+F_y^2}$.<br/><br/>Donne la valeur de $F_x$ (arrondie au centième).`,
          answer: Fx,
          tolerance: 0.1,
          unit: 'N',
          hint: `$F_x = F\\cos(\\theta)$ et $F_y = F\\sin(\\theta)$ quand $\\theta$ est mesuré par rapport à l\'horizontale. Rappel : $\\cos(${angle}°) \\approx ${cosVals[angle].toFixed(3)}$ et $\\sin(${angle}°) \\approx ${sinVals[angle].toFixed(3)}$.`,
          solution: [
            `Composante horizontale : $F_x = F\\cos(\\theta) = ${F} \\times \\cos(${angle}°) = ${F} \\times ${cosVals[angle].toFixed(3)} \\approx ${Fx}$ N`,
            `Composante verticale : $F_y = F\\sin(\\theta) = ${F} \\times \\sin(${angle}°) = ${F} \\times ${sinVals[angle].toFixed(3)} \\approx ${Fy}$ N`,
            `Vérification par la norme : $\\sqrt{${Fx}^2 + ${Fy}^2} = \\sqrt{${(Fx*Fx).toFixed(1)} + ${(Fy*Fy).toFixed(1)}} \\approx ${norm}$ N $\\approx ${F}$ N ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 75$ kg descend une piste rectiligne inclinée d\'un angle $\\beta = 25°$ par rapport à l\'horizontale. On néglige les frottements. On prend $g = 9{,}81$ m/s². On choisit un repère avec $Ox$ parallèle à la pente (sens positif vers le bas) et $Oy$ perpendiculaire à la pente (sens positif vers l\'extérieur de la piste).',
      schema: 'Plan incliné à β=25°. Forces : poids P (vertical, vers le bas) ; réaction normale R (perpendiculaire au plan, vers le haut). Axes : Ox (le long du plan, vers le bas) ; Oy (perpendiculaire au plan).',
      tasks: [
        'Faire le bilan des forces. Projeter le poids $\\vec{P}$ sur les axes $Ox$ et $Oy$.',
        'Appliquer la 2ème loi de Newton en projection sur $Ox$ : $\\sum F_x = m a_x$.',
        'Calculer numériquement l\'accélération $a_x$ du skieur.'
      ],
      solutions: [
        'Bilan : $\\vec{P}$ (vertical, bas) et $\\vec{R}$ (normal au plan, haut). Projections du poids : $P_x = +P \\sin(\\beta) = mg\\sin(\\beta)$ et $P_y = -P\\cos(\\beta)$. Projection de $\\vec{R}$ : $R_x = 0$, $R_y = +R$.',
        'Newton sur $Ox$ : $P_x + R_x = ma_x \\Rightarrow mg\\sin(\\beta) + 0 = ma_x \\Rightarrow a_x = g\\sin(\\beta)$.',
        '$a_x = 9{,}81 \\times \\sin(25°) = 9{,}81 \\times 0{,}423 \\approx 4{,}14$ m/s².'
      ],
      finalAnswer: '$a_x \\approx 4{,}14$ m/s² (le long du plan, vers le bas)'
    },

    evaluation: {
      title: 'Évaluation — Vecteurs 2D et Projection Orthogonale',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force $\\vec{F}$ de norme $F = 50$ N fait un angle $\\theta = 60°$ avec l\'axe horizontal $Ox$. Calculer la composante verticale $F_y$ (en N).',
          type: 'numeric',
          answer: 43.30,
          tolerance: 0.1,
          unit: 'N',
          points: 2,
          correction: '$F_y = F \\sin(\\theta) = 50 \\times \\sin(60°) = 50 \\times \\dfrac{\\sqrt{3}}{2} \\approx 43{,}30$ N.'
        },
        {
          statement: 'Un objet est sur un plan incliné à $\\alpha = 30°$. Son poids vaut $P = 100$ N (vertical, vers le bas). Calculer la composante du poids parallèle au plan (en N).',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'N',
          points: 3,
          correction: 'La composante du poids parallèle au plan incliné est $P_{\\parallel} = P \\sin(\\alpha) = 100 \\times \\sin(30°) = 100 \\times 0{,}5 = 50$ N. Attention : on utilise le sinus (et non le cosinus) car l\'angle $\\alpha$ est mesuré entre le plan et l\'horizontale.'
        },
        {
          statement: 'Un vecteur a pour composantes $F_x = -6$ N et $F_y = 8$ N. Calculer sa norme $\\|\\vec{F}\\|$ (en N).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'N',
          points: 2,
          correction: '$\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2} = \\sqrt{(-6)^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ N.'
        },
        {
          statement: 'Un vecteur $\\vec{F}$ pointe vers la droite et le bas (4ème quadrant). Quel est le signe de ses composantes ?',
          type: 'multiple-choice',
          options: ['$F_x > 0$ et $F_y > 0$', '$F_x < 0$ et $F_y < 0$', '$F_x > 0$ et $F_y < 0$', '$F_x < 0$ et $F_y > 0$'],
          answer: 2,
          points: 1,
          correction: 'Le vecteur pointe vers la droite → même sens que $Ox$ positif → $F_x > 0$. Il pointe vers le bas → sens contraire de $Oy$ positif → $F_y < 0$.'
        },
        {
          statement: 'Sur un plan incliné, la composante du poids perpendiculaire au plan utilise :',
          type: 'multiple-choice',
          options: ['$P \\sin(\\alpha)$', '$P \\cos(\\alpha)$', '$P \\tan(\\alpha)$', '$P / \\sin(\\alpha)$'],
          answer: 1,
          points: 2,
          correction: 'La composante perpendiculaire au plan est $P_{\\perp} = P \\cos(\\alpha)$, où $\\alpha$ est l\'angle du plan avec l\'horizontale. Le cosinus est utilisé pour la composante adjacente à l\'angle.'
        }
      ]
    }
  });
