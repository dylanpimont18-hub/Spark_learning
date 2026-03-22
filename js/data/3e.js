/* =========================================================
   Spark Learning – data/3e.js
   Modules 3e (Collège – classe de Troisième)
   ========================================================= */

window.MODULES.push(

  {
    id: 'trigonometrie',
    level: 1,
    icon: '📐',
    title: 'Trigonométrie dans le Triangle Rectangle',
    subtitle: 'SOH-CAH-TOA, angles, hypoténuse',
    keywords: ['SOHCAHTOA', 'cos/sin/tan', 'Triangle rectangle', 'Angle'],
    physics: 'Décomposition de forces, lois de Snell-Descartes',

    cours: {
      intro: 'Dans tout triangle rectangle, les rapports entre les côtés dépendent uniquement des angles — pas de la taille du triangle. La trigonométrie exploite cette invariance : $\\sin$, $\\cos$ et $\\tan$ sont des fonctions de l\'angle qui restent constantes pour tous les triangles semblables. SOH-CAH-TOA est le mémo qui associe chaque fonction à la bonne paire de côtés. En physique, décomposer une force ou une vitesse revient toujours à trouver des triangles rectangles cachés dans la situation réelle. La relation $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ relie les deux fonctions pour tout angle — c\'est le théorème de Pythagore exprimé en termes de rapports trigonométriques.',
      method: {
        title: 'Méthode SOH-CAH-TOA',
        steps: [
          '**SOH** : $\\sin(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{Hypoténuse}}$. Le côté "Opposé" est celui qui ne touche pas l\'angle $\\theta$.',
          '**CAH** : $\\cos(\\theta) = \\dfrac{\\text{côté Adjacent}}{\\text{Hypoténuse}}$. Le côté "Adjacent" est celui qui touche l\'angle $\\theta$ (l\'autre côté, pas l\'hypoténuse).',
          '**TOA** : $\\tan(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{côté Adjacent}} = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$. Pour retrouver un angle : $\\theta = \\arccos\\left(\\frac{\\text{adj}}{\\text{hyp}}\\right)$.'
        ]
      },
      formulas: [
        '$\\sin(30°) = 0{,}5$, $\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$',
        '$\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$',
        '$\\sin(60°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$, $\\cos(60°) = 0{,}5$',
        '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ (relation fondamentale)'
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
  },

    {
    id: '3e-systemes',
    level: 1,
    icon: '🔗',
    title: "Systèmes d'équations",
    subtitle: 'Substitution, combinaison, deux inconnues',
    keywords: ['Système', 'Substitution', 'Addition', 'Élimination', 'Deux inconnues'],
    physics: 'Lois de Kirchhoff (tensions et courants), mélange de solutions, bilan forces',

    cours: {
      intro: 'Un système de deux équations à deux inconnues apparaît dès qu\'un problème met en jeu deux quantités liées par deux relations indépendantes. La substitution isole une variable dans une équation et la remplace dans l\'autre ; la combinaison (addition) choisit un coefficient pour éliminer directement une variable — plus rapide quand les coefficients s\'y prêtent. En physique, les lois de Kirchhoff pour les circuits électriques et les bilans de mélange en chimie donnent naturellement des systèmes. L\'étape de vérification est indispensable : une erreur de substitution peut donner un résultat qui satisfait une équation mais pas l\'autre, et seul le test dans LES DEUX équations permet de le détecter.',
      method: {
        title: 'Deux méthodes',
        steps: [
          '**Substitution** : exprimer une inconnue en fonction de l\'autre à partir d\'une équation, puis substituer dans la seconde.',
          '**Combinaison (addition)** : multiplier une équation par un coefficient pour que l\'un des termes s\'annule lors de l\'addition des deux équations.',
          'Vérification obligatoire : réinjecter les valeurs trouvées dans LES DEUX équations de départ.'
        ]
      },
      formulas: [
        '$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$',
        'Par substitution : $x = \\dfrac{c - by}{a}$ puis substituer.',
        'Par combinaison : multiplier pour éliminer une variable.'
      ],
      piege: 'Oublier de vérifier les solutions dans les deux équations. Une erreur de calcul dans la substitution peut donner un résultat faux qui satisfait une équation mais pas l\'autre. La vérification ne prend que 30 secondes et évite les erreurs.'
    },

    quiz: [
      {
        q: 'Un élève résout $\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}$ et trouve $x = 4$, $y = 4$. Comment vérifier qu\'il a tort ?',
        options: [
          'Vérifier dans la 1ère équation : $4 + 4 = 8 \\neq 7$, donc la solution est fausse',
          'On ne peut pas vérifier sans tout recalculer',
          'Vérifier dans une seule équation suffit pour confirmer',
          'Le résultat est correct, $x = 4, y = 4$'
        ],
        answer: 0,
        correction: 'La vérification dans la 1ère équation : $4 + 4 = 8 \\neq 7$ — la solution est fausse. La vraie solution : addition des deux équations $\\Rightarrow 3x = 12 \\Rightarrow x = 4$, puis $y = 7 - 4 = 3$ (et non $4$). L\'erreur vient d\'avoir oublié de recalculer $y$ après avoir trouvé $x$.'
      },
      {
        q: 'Résoudre $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$',
        options: ['$x = 2,\\ y = 3$', '$x = 3,\\ y = 1$', '$x = 4,\\ y = -1$', '$x = 1,\\ y = 5$'],
        answer: 1,
        correction: 'Addition : $3x = 9 \\Rightarrow x = 3$. Puis : $3 - y = 2 \\Rightarrow y = 1$. Vérif : $2(3)+1 = 7$ ✓'
      },
      {
        q: 'Un mélange contient deux solutions : l\'une à $20\\%$ de sel, l\'autre à $5\\%$. On mélange $x$ L de la première avec $y$ L de la seconde pour obtenir $10$ L à $10\\%$. Quelle équation représente la conservation du sel ?',
        options: ['$0{,}2x + 0{,}05y = 10$', '$0{,}2x + 0{,}05y = 1$', '$x + y = 1$', '$0{,}15x = 0{,}5y$'],
        answer: 1,
        correction: 'Conservation du sel : $0{,}20x + 0{,}05y = 10\\% \\times 10\\,\\text{L} = 1\\,\\text{L}$. Et $x + y = 10$. C\'est bien l\'équation b.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const x = rand(2, 8), y = rand(1, 7);
        const a = rand(1, 3), b = rand(1, 3);
        const c = a * x + b * y;
        const d = rand(1, 3), e = rand(1, 3);
        const f = d * x + e * y;
        return {
          statement: `Résoudre le système et donner la valeur de $x$ : $\\begin{cases} ${a}x + ${b}y = ${c} \\\\ ${d}x + ${e}y = ${f} \\end{cases}$`,
          answer: x,
          tolerance: 0,
          unit: '',
          hint: 'Essaie la méthode de combinaison : multiplie la première équation par $' + d + '$ et la seconde par $' + a + '$ pour éliminer $x$... ou utilise la substitution.',
          solution: [
            `On cherche $x = ${x}$ et $y = ${y}$.`,
            `Vérif éq 1 : $${a} \\times ${x} + ${b} \\times ${y} = ${a*x} + ${b*y} = ${c}$ ✓`,
            `Vérif éq 2 : $${d} \\times ${x} + ${e} \\times ${y} = ${d*x} + ${e*y} = ${f}$ ✓`
          ]
        };
      }
    },

    probleme: {
      context: 'Dans un circuit avec deux branches en parallèle, les lois de Kirchhoff donnent : $I_1 + I_2 = 3\\,\\text{A}$ (loi des nœuds) et $2I_1 - 3I_2 = 0$ (loi des mailles, car les tensions sont égales et $R_1 = 2\\,\\Omega$, $R_2 = 3\\,\\Omega$).',
      schema: null,
      tasks: [
        'Identifier les deux inconnues et les deux équations du système.',
        'Résoudre le système par substitution ou combinaison.',
        'Calculer les tensions $U_1 = R_1 I_1$ et $U_2 = R_2 I_2$ et vérifier qu\'elles sont égales (branches parallèles).'
      ],
      solutions: [
        'Inconnues : $I_1$ et $I_2$. Système : $\\begin{cases} I_1 + I_2 = 3 \\\\ 2I_1 = 3I_2 \\end{cases}$.',
        'De l\'éq 2 : $I_1 = \\dfrac{3}{2}I_2$. Substitution : $\\dfrac{3}{2}I_2 + I_2 = 3 \\Rightarrow \\dfrac{5}{2}I_2 = 3 \\Rightarrow I_2 = 1{,}2\\,\\text{A}$. Donc $I_1 = 1{,}8\\,\\text{A}$.',
        '$U_1 = 2 \\times 1{,}8 = 3{,}6\\,\\text{V}$ et $U_2 = 3 \\times 1{,}2 = 3{,}6\\,\\text{V}$. Égaux ✓ — cohérent avec un montage en parallèle.'
      ],
      finalAnswer: '$I_1 = 1{,}8\\,\\text{A}$, $I_2 = 1{,}2\\,\\text{A}$, $U = 3{,}6\\,\\text{V}$'
    },

    evaluation: {
      title: 'Évaluation — Systèmes d\'équations',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre le système $\\begin{cases} x + y = 10 \\\\ 3x - y = 6 \\end{cases}$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Addition des deux équations : $x + y + 3x - y = 10 + 6 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. Puis $y = 10 - 4 = 6$. Vérification : $3 \\times 4 - 6 = 6$ ✓.'
        },
        {
          statement: 'Pour résoudre $\\begin{cases} 2x + 3y = 12 \\\\ 4x + 3y = 18 \\end{cases}$, la méthode la plus directe est :',
          type: 'multiple-choice',
          options: [
            'Soustraire la 1ère équation de la 2ème pour éliminer $y$',
            'Substituer $x$ de la 1ère dans la 2ème',
            'Multiplier les deux équations entre elles',
            'Additionner les deux équations'
          ],
          answer: 0,
          points: 2,
          correction: 'Les coefficients de $y$ sont identiques ($3y$). En soustrayant : $(4x + 3y) - (2x + 3y) = 18 - 12 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Puis $y = \\dfrac{12 - 6}{3} = 2$.'
        },
        {
          statement: 'Résoudre $\\begin{cases} 5x - 2y = 1 \\\\ 3x + 2y = 15 \\end{cases}$. Donner la valeur de $y$.',
          type: 'numeric',
          answer: 4.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Addition : $8x = 16 \\Rightarrow x = 2$. Puis $3 \\times 2 + 2y = 15 \\Rightarrow 2y = 9 \\Rightarrow y = 4{,}5$. Vérification : $5 \\times 2 - 2 \\times 4{,}5 = 10 - 9 = 1$ ✓.'
        },
        {
          statement: 'Un magasin vend des cahiers à $2$ € et des stylos à $3$ €. Un client achète $7$ articles pour $17$ €. Combien de cahiers a-t-il achetés ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Soit $c$ le nombre de cahiers et $s$ le nombre de stylos. $\\begin{cases} c + s = 7 \\\\ 2c + 3s = 17 \\end{cases}$. De la 1ère : $s = 7 - c$. Substitution : $2c + 3(7-c) = 17 \\Rightarrow 2c + 21 - 3c = 17 \\Rightarrow -c = -4 \\Rightarrow c = 4$. Il a acheté $4$ cahiers et $3$ stylos.'
        },
        {
          statement: 'Le système $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$ admet :',
          type: 'multiple-choice',
          options: [
            'Une solution unique',
            'Aucune solution',
            'Une infinité de solutions',
            'Exactement deux solutions'
          ],
          answer: 2,
          points: 2,
          correction: 'La 1ère équation est le double de la 2ème : $2(x + 2y) = 2 \\times 5 = 10$. Les deux équations sont proportionnelles, donc elles représentent la même droite. Le système a une infinité de solutions : tous les couples $(x, y)$ vérifiant $x + 2y = 5$.'
        }
      ]
    }
  },

    {
    id: '3e-thales',
    level: 1,
    icon: '🔺',
    title: 'Théorème de Thalès',
    subtitle: 'Triangles semblables, rapports de longueurs',
    keywords: ['Thalès', 'Droites parallèles', 'Rapport', 'Triangles semblables', 'Réciproque'],
    physics: 'Optique géométrique : grandissement, lentilles, rayons lumineux',

    cours: {
      intro: 'Le théorème de Thalès est l\'un des résultats les plus puissants de la géométrie : quand deux droites parallèles coupent deux sécantes issues d\'un même point, tous les rapports de longueurs correspondants sont égaux. Cette égalité des rapports permet de calculer n\'importe quelle longueur inconnue dans une figure de triangles semblables. En pratique, Thalès apparaît partout : en optique (lentilles, grandissement), en topographie (mesure d\'objets inaccessibles par ombres portées), et dans les plans à l\'échelle. La réciproque est tout aussi utile : elle permet de prouver que deux droites sont parallèles à partir des seules mesures. Attention au cas « croisé » où le point $O$ est entre les deux parallèles : les rapports doivent encore être exprimés de façon cohérente.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Identifier deux droites parallèles coupées par deux sécantes passant par le même point.',
          'Nommer correctement les points : le point commun $O$, les points sur une parallèle $A$ et $B$, les points sur l\'autre $A\'$ et $B\'$.',
          'Appliquer : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$ (les rapports sont égaux).',
          'Retrouver l\'inconnue par produit en croix à partir de l\'égalité de rapports.'
        ]
      },
      formulas: [
        'Si $(AB) \\parallel (A\'B\')$ : $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} = \\dfrac{A\'B\'}{AB}$',
        'Grandissement optique : $\\gamma = \\dfrac{A\'B\'}{AB} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$',
        'Réciproque : si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(AB) \\parallel (A\'B\')$'
      ],
      piege: 'Attention aux rapports : ils peuvent être négatifs en optique (image renversée). Le grandissement $\\gamma$ est négatif quand l\'image est renversée. Ne jamais écrire juste $|AB|/|A\'B\'|$ sans tenir compte des sens — utiliser les mesures algébriques.'
    },

    quiz: [
      {
        q: 'Un élève écrit pour une configuration de Thalès : $\\dfrac{OA}{OA\'} = \\dfrac{A\'B\'}{AB}$. Quelle est son erreur ?',
        options: [
          'Il a mélangé numérateurs et dénominateurs : il faut soit $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$ soit $\\dfrac{OA}{OA\'} = \\dfrac{AB}{A\'B\'}$',
          'Il ne peut pas écrire d\'égalité de rapports avec $A\'B\'$',
          'Il n\'y a pas d\'erreur, les deux rapports sont bien égaux',
          'Il aurait dû utiliser $OB$ et $OB\'$ au lieu de $OA$ et $OA\'$'
        ],
        answer: 0,
        correction: 'Dans Thalès, les rapports doivent être cohérents : grand sur grand ou petit sur petit. Écrire $\\frac{OA}{OA\'} = \\frac{A\'B\'}{AB}$ mélange les deux : $OA < OA\'$ (petit sur grand) alors que $A\'B\' > AB$ (grand sur petit). La forme correcte est $\\dfrac{OA\'}{OA} = \\dfrac{A\'B\'}{AB}$.'
      },
      {
        q: 'Une lentille forme une image $A\'B\'$ d\'un objet $AB = 2$ cm. L\'objet est à $OA = 15$ cm et l\'image à $OA\' = 45$ cm. Quel est le grandissement $|\\gamma|$ ?',
        options: ['$2$', '$3$', '$1{,}5$', '$0{,}5$'],
        answer: 1,
        correction: '$|\\gamma| = \\dfrac{|OA\'|}{|OA|} = \\dfrac{45}{15} = 3$. L\'image est 3 fois plus grande que l\'objet.'
      },
      {
        q: 'Un arbre de hauteur inconnue projette une ombre de $8$ m. En même temps, un piquet de $1{,}5$ m projette une ombre de $2$ m. Quelle est la hauteur de l\'arbre ?',
        options: ['$4$ m', '$6$ m', '$12$ m', '$10{,}7$ m'],
        answer: 1,
        correction: 'Les rayons du soleil sont parallèles (Thalès). $\\dfrac{h_{\\text{arbre}}}{1{,}5} = \\dfrac{8}{2} \\Rightarrow h_{\\text{arbre}} = 1{,}5 \\times 4 = 6$ m.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const oa = rand(4, 12), ratio = pick([1.5, 2, 2.5, 3]);
        const oaP = oa * ratio;
        const ab = rand(2, 8);
        const abP = parseFloat((ab * ratio).toFixed(2));
        return {
          statement: `Dans une configuration de Thalès, $OA = ${oa}$ cm, $OA' = ${oaP}$ cm, $AB = ${ab}$ cm, $(AB) \\parallel (A'B')$. Calculer $A'B'$.`,
          answer: abP,
          tolerance: 0.05,
          unit: 'cm',
          hint: `Le rapport de Thalès est $k = \\dfrac{OA'}{OA} = \\dfrac{${oaP}}{${oa}}$. Puis $A'B' = k \\times AB$.`,
          solution: [
            `$k = \\dfrac{OA'}{OA} = \\dfrac{${oaP}}{${oa}} = ${ratio}$`,
            `$A'B' = k \\times AB = ${ratio} \\times ${ab} = ${abP}$ cm`
          ]
        };
      }
    },

    probleme: {
      context: 'Une lentille convergente de distance focale $f\' = 10$ cm forme l\'image d\'un objet $AB$ de taille $AB = 3$ cm placé à $OA = -30$ cm (signe algébrique : objet réel à gauche).',
      schema: null,
      tasks: [
        'Appliquer la relation de conjugaison : $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'}$ pour trouver $\\overline{OA\'}$.',
        'Calculer le grandissement algébrique $\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$.',
        'En déduire la taille de l\'image $A\'B\'$ et indiquer si elle est droite ou renversée.'
      ],
      solutions: [
        '$\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{10} + \\dfrac{1}{-30} = \\dfrac{3}{30} - \\dfrac{1}{30} = \\dfrac{2}{30} = \\dfrac{1}{15}$. Donc $\\overline{OA\'} = +15$ cm.',
        '$\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}} = \\dfrac{+15}{-30} = -0{,}5$.',
        '$A\'B\' = \\gamma \\times AB = -0{,}5 \\times 3 = -1{,}5$ cm. L\'image est renversée (signe $-$) et deux fois plus petite.'
      ],
      finalAnswer: '$\\overline{OA\'} = 15$ cm, $\\gamma = -0{,}5$, $A\'B\' = -1{,}5$ cm (image renversée, réduite)'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Thalès',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une configuration de Thalès, $(AB) \\parallel (A\'B\')$, $OA = 6$ cm, $OA\' = 9$ cm et $AB = 4$ cm. Calculer $A\'B\'$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Rapport de Thalès : $k = \\dfrac{OA\'}{OA} = \\dfrac{9}{6} = 1{,}5$. $A\'B\' = k \\times AB = 1{,}5 \\times 4 = 6$ cm.'
        },
        {
          statement: 'Un poteau de $2$ m projette une ombre de $3$ m. Au même moment, un immeuble projette une ombre de $18$ m. Quelle est la hauteur de l\'immeuble ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: 'Les rayons du soleil sont parallèles (configuration de Thalès). $\\dfrac{h}{2} = \\dfrac{18}{3} = 6$. Donc $h = 2 \\times 6 = 12$ m.'
        },
        {
          statement: 'Dans un triangle $OAB$, les points $A\'$ et $B\'$ sont sur les côtés $[OA]$ et $[OB]$. On a $\\dfrac{OA\'}{OA} = \\dfrac{3}{5}$ et $\\dfrac{OB\'}{OB} = \\dfrac{3}{5}$. Peut-on conclure que $(A\'B\') \\parallel (AB)$ ?',
          type: 'multiple-choice',
          options: [
            'Oui, par la réciproque du théorème de Thalès',
            'Non, il faut aussi vérifier $\\dfrac{A\'B\'}{AB} = \\dfrac{3}{5}$',
            'Non, Thalès ne fonctionne pas dans un triangle',
            'Oui, mais seulement si le triangle est rectangle'
          ],
          answer: 0,
          points: 2,
          correction: 'La réciproque de Thalès affirme : si les points $A\'$, $B\'$ sont sur $[OA]$ et $[OB]$ (même côté du point $O$) et si $\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB}$, alors $(A\'B\') \\parallel (AB)$. Les deux rapports étant égaux ($\\frac{3}{5}$), on peut conclure.'
        },
        {
          statement: 'Dans une configuration de Thalès, $OA = 4$ cm, $OA\' = 10$ cm, $OB = 6$ cm. Calculer $OB\'$.',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$\\dfrac{OA\'}{OA} = \\dfrac{OB\'}{OB} \\Rightarrow \\dfrac{10}{4} = \\dfrac{OB\'}{6} \\Rightarrow OB\' = \\dfrac{10 \\times 6}{4} = 15$ cm.'
        },
        {
          statement: 'Une lentille produit une image avec un grandissement $|\\gamma| = 2{,}5$. Si l\'objet mesure $4$ cm, quelle est la taille de l\'image ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$|A\'B\'| = |\\gamma| \\times AB = 2{,}5 \\times 4 = 10$ cm.'
        }
      ]
    }
  },

    {
    id: '3e-arithmetique',
    level: 1,
    icon: '🔢',
    title: 'Arithmétique',
    subtitle: 'PGCD, nombres premiers, décomposition',
    keywords: ['PGCD', 'PPCM', 'Nombre premier', 'Décomposition', 'Divisibilité'],
    physics: false,
    cours: {
      intro: 'Tout entier $n \\geq 2$ admet une décomposition en facteurs premiers unique (à l\'ordre près) — c\'est le théorème fondamental de l\'arithmétique. Cette décomposition est le « code-barres » du nombre : elle révèle instantanément tous ses diviseurs, son PGCD avec un autre nombre, et leur PPCM. Le PGCD (Plus Grand Commun Diviseur) donne la taille maximale d\'une part équitable ; le PPCM (Plus Petit Commun Multiple) indique le premier moment où deux cycles se synchronisent. L\'algorithme d\'Euclide calcule le PGCD en quelques divisions successives, sans décomposer en facteurs premiers — très pratique pour les grands nombres. La relation $a \\times b = \\text{PGCD}(a,b) \\times \\text{PPCM}(a,b)$ relie élégamment les deux notions.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Décomposer chaque nombre en produit de facteurs premiers (diviser successivement par $2, 3, 5, 7, 11…$).',
          'PGCD : prendre les facteurs premiers communs avec le plus petit exposant.',
          'PPCM : prendre tous les facteurs premiers avec le plus grand exposant.'
        ]
      },
      formulas: [
        'PGCD × PPCM $= a \\times b$',
        'Fraction irréductible : diviser numérateur et dénominateur par le PGCD',
        'Algorithme d\'Euclide : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$'
      ],
      piege: 'Piège : $1$ n\'est PAS un nombre premier (il faut exactement deux diviseurs distincts). Le plus petit nombre premier est $2$. Et $2$ est le seul nombre premier pair.'
    },
    quiz: [
      {
        q: 'Quel est le PGCD de $36$ et $48$ ?',
        options: ['$6$', '$12$', '$9$', '$144$'],
        answer: 1,
        correction: '$36 = 2^2 \\times 3^2$ et $48 = 2^4 \\times 3$. PGCD $= 2^2 \\times 3 = 12$.'
      },
      {
        q: 'Un élève dit : « $1$ est un nombre premier car il n\'est divisible que par lui-même ». Où est l\'erreur ?',
        options: [
          'Un nombre premier doit avoir exactement DEUX diviseurs distincts ; $1$ n\'en a qu\'un seul ($1$ lui-même)',
          'L\'élève a raison, $1$ est bien premier',
          '$1$ n\'est pas premier car il est inférieur à $2$, mais pas pour la raison citée',
          '$1$ n\'est pas premier car il est pair'
        ],
        answer: 0,
        correction: 'Un nombre premier est un entier $\\geq 2$ ayant exactement deux diviseurs distincts : $1$ et lui-même. Le nombre $1$ n\'a qu\'un seul diviseur ($1 = 1 \\times 1$), donc il ne satisfait pas la définition. Exclure $1$ est crucial pour garantir l\'unicité de la décomposition en facteurs premiers.'
      },
      {
        q: 'Parmi ces nombres, lequel est premier ?',
        options: ['$1$', '$27$', '$51$', '$37$'],
        answer: 3,
        correction: '$1$ n\'est pas premier. $27 = 3^3$, $51 = 3 \\times 17$. $37$ n\'est divisible que par $1$ et $37$ : il est premier.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pairs = [[12,18],[15,25],[24,36],[18,30],[20,28],[12,8]];
        const [a,b] = pick(pairs);
        function gcd(x,y){return y===0?x:gcd(y,x%y);}
        return {
          statement: `Calcule le PGCD de $${a}$ et $${b}$.`,
          answer: gcd(a,b),
          tolerance: 0,
          unit: '',
          hint: `Utilise l'algorithme d'Euclide : $\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a % b})$…`,
          solution: [
            `Algorithme d'Euclide : $${a} = ${b} \\times ${Math.floor(a/b)} + ${a%b}$.`,
            `$\\text{PGCD}(${a}, ${b}) = \\text{PGCD}(${b}, ${a%b}) = ${gcd(a,b)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un maître-fromager coupe des meules de fromage en parts de même taille. Il a une meule de $360$ g et une autre de $252$ g.',
      tasks: [
        'Trouver le PGCD de $360$ et $252$.',
        'Quelle est la masse maximale de chaque part pour que les deux meules donnent un nombre entier de parts ?',
        'Combien de parts obtient-on de chaque meule ?'
      ],
      solutions: [
        'PGCD$(360, 252)$ : $360 = 252 \\times 1 + 108$ ; $252 = 108 \\times 2 + 36$ ; $108 = 36 \\times 3 + 0$. PGCD $= 36$.',
        'Chaque part pèse $36$ g.',
        '$360 \\div 36 = 10$ parts et $252 \\div 36 = 7$ parts.'
      ],
      finalAnswer: 'Le PGCD est $36$ g : on obtient $10$ parts de la première meule et $7$ de la seconde.'
    },

    evaluation: {
      title: 'Évaluation — Arithmétique',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le PGCD de $84$ et $56$ en utilisant l\'algorithme d\'Euclide.',
          type: 'numeric',
          answer: 28,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$84 = 56 \\times 1 + 28$. $56 = 28 \\times 2 + 0$. Le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$.'
        },
        {
          statement: 'La décomposition en facteurs premiers de $180$ est :',
          type: 'multiple-choice',
          options: ['$2^2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 5^2$', '$2^3 \\times 3 \\times 5$', '$4 \\times 9 \\times 5$'],
          answer: 0,
          points: 2,
          correction: '$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$. La réponse d) n\'est pas valide car $4$ et $9$ ne sont pas des nombres premiers.'
        },
        {
          statement: 'Rendre la fraction $\\dfrac{48}{72}$ irréductible. Le dénominateur de la fraction irréductible est :',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\text{PGCD}(48, 72) = 24$. $\\dfrac{48}{72} = \\dfrac{48 \\div 24}{72 \\div 24} = \\dfrac{2}{3}$. Le dénominateur est $3$.'
        },
        {
          statement: 'Quel est le PPCM de $12$ et $18$ ?',
          type: 'numeric',
          answer: 36,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. PPCM $= 2^2 \\times 3^2 = 4 \\times 9 = 36$. Vérification : $\\text{PGCD} \\times \\text{PPCM} = 6 \\times 36 = 216 = 12 \\times 18$ ✓.'
        },
        {
          statement: 'Parmi ces nombres, lequel est premier ?',
          type: 'multiple-choice',
          options: ['$91$', '$87$', '$83$', '$93$'],
          answer: 2,
          points: 2,
          correction: '$91 = 7 \\times 13$, $87 = 3 \\times 29$, $93 = 3 \\times 31$. $83$ n\'est divisible par aucun nombre premier $\\leq \\sqrt{83} \\approx 9{,}1$ (on teste $2, 3, 5, 7$) : $83$ est premier.'
        }
      ]
    }
  },

    {
    id: '3e-identites-remarquables',
    level: 1,
    icon: '🔣',
    title: 'Identités remarquables',
    subtitle: '$(a+b)^2$, $(a-b)^2$, $(a+b)(a-b)$',
    keywords: ['Identités remarquables', 'Développer', 'Factoriser', 'Carré', 'Différence'],
    physics: false,
    cours: {
      intro: 'Les trois identités remarquables sont des égalités algébriques vraies pour toutes valeurs de $a$ et $b$. Elles permettent deux opérations inverses : développer (produit → somme) et factoriser (somme → produit). La troisième, $(a+b)(a-b) = a^2 - b^2$, est redoutable pour le calcul mental : $99 \\times 101 = (100-1)(100+1) = 10000 - 1 = 9999$ en deux secondes ! L\'erreur la plus répandue est d\'écrire $(a+b)^2 = a^2 + b^2$ en oubliant le terme croisé $2ab$ : $(3+4)^2 = 49 \\neq 9 + 16 = 25$. Pour factoriser $x^2 - k$, la troisième identité exige que $k$ soit un carré parfait ; sinon, on écrit $x^2 - k = (x - \\sqrt{k})(x + \\sqrt{k})$ avec une racine irrationnelle.',
      method: {
        title: 'Les trois identités à retenir',
        steps: [
          '$(a + b)^2 = a^2 + 2ab + b^2$ (carré d\'une somme)',
          '$(a - b)^2 = a^2 - 2ab + b^2$ (carré d\'une différence)',
          '$(a + b)(a - b) = a^2 - b^2$ (produit de la somme et de la différence)'
        ]
      },
      formulas: [
        '$(a+b)^2 = a^2 + 2ab + b^2$',
        '$(a-b)^2 = a^2 - 2ab + b^2$',
        '$(a+b)(a-b) = a^2 - b^2$'
      ],
      piege: 'Piège classique : $(a+b)^2 \\neq a^2 + b^2$. Il ne faut pas oublier le terme $2ab$ au milieu ! $(3+4)^2 = 49 \\neq 9 + 16 = 25$.'
    },
    quiz: [
      {
        q: 'Un élève développe $(3 + 4)^2 = 3^2 + 4^2 = 9 + 16 = 25$. Où est l\'erreur ?',
        options: [
          'Il a oublié le terme $2 \\times 3 \\times 4 = 24$ : le résultat correct est $9 + 24 + 16 = 49$',
          'Il a mal calculé $3^2$ et $4^2$',
          'Il n\'y a pas d\'erreur, $(3+4)^2 = 25$',
          'Il fallait calculer $(3+4)^2 = 7^2 = 49$, ce qui confirme que son résultat est faux'
        ],
        answer: 0,
        correction: '$(3+4)^2 = 7^2 = 49$, mais l\'élève a écrit $3^2 + 4^2 = 25$. Il a omis le terme croisé $2ab = 2 \\times 3 \\times 4 = 24$. La formule complète est $(a+b)^2 = a^2 + 2ab + b^2 = 9 + 24 + 16 = 49$. C\'est l\'erreur la plus classique des identités remarquables.'
      },
      {
        q: 'Factorise $x^2 - 9$.',
        options: ['$(x-3)^2$', '$(x+3)(x-3)$', '$(x-9)(x+1)$', 'Impossible'],
        answer: 1,
        correction: '$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$ (différence de deux carrés).'
      },
      {
        q: 'Quel est le résultat de $(2x - 3)^2$ ?',
        options: ['$4x^2 + 9$', '$4x^2 - 9$', '$4x^2 - 12x + 9$', '$4x^2 + 12x + 9$'],
        answer: 2,
        correction: '$(2x-3)^2 = (2x)^2 - 2 \\times 2x \\times 3 + 3^2 = 4x^2 - 12x + 9$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 9), b = rand(1, 7);
        const val = a * a - b * b;
        return {
          statement: `En utilisant $(a+b)(a-b) = a^2 - b^2$, calcule $(${a}+${b})(${a}-${b})$ sans développer.`,
          answer: val,
          tolerance: 0,
          unit: '',
          hint: `Identifie $a = ${a}$ et $b = ${b}$. Résultat : $a^2 - b^2 = ${a}^2 - ${b}^2$.`,
          solution: [`$(${a}+${b})(${a}-${b}) = ${a}^2 - ${b}^2 = ${a*a} - ${b*b} = ${val}$.`]
        };
      }
    },
    probleme: {
      context: 'Un carré de côté $x$ cm subit une modification : on agrandit un côté de $3$ cm et on réduit l\'autre de $3$ cm, formant un rectangle.',
      tasks: [
        'Exprimer l\'aire du rectangle en fonction de $x$.',
        'Utiliser une identité remarquable pour simplifier.',
        'Si $x = 10$ cm, comparer l\'aire du carré original et celle du rectangle.'
      ],
      solutions: [
        'Aire rectangle $= (x+3)(x-3)$.',
        '$(x+3)(x-3) = x^2 - 9$.',
        'Carré : $10^2 = 100$ cm². Rectangle : $10^2 - 9 = 91$ cm². Le rectangle est plus petit de $9$ cm².'
      ],
      finalAnswer: 'L\'aire du rectangle est $x^2 - 9$ cm², toujours $9$ cm² de moins que le carré.'
    },

    evaluation: {
      title: 'Évaluation — Identités remarquables',
      duration: '25 min',
      questions: [
        {
          statement: 'Développer $(3x + 5)^2$. Le coefficient du terme en $x$ est :',
          type: 'numeric',
          answer: 30,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(3x + 5)^2 = (3x)^2 + 2 \\times 3x \\times 5 + 5^2 = 9x^2 + 30x + 25$. Le coefficient du terme en $x$ est $30$.'
        },
        {
          statement: 'Factoriser $x^2 - 16$.',
          type: 'multiple-choice',
          options: ['$(x - 4)^2$', '$(x + 4)(x - 4)$', '$(x - 8)(x + 2)$', '$(x + 16)(x - 1)$'],
          answer: 1,
          points: 2,
          correction: '$x^2 - 16 = x^2 - 4^2 = (x + 4)(x - 4)$ (troisième identité remarquable : $a^2 - b^2 = (a+b)(a-b)$).'
        },
        {
          statement: 'Calculer $97^2$ en utilisant une identité remarquable. (Indication : $97 = 100 - 3$.)',
          type: 'numeric',
          answer: 9409,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$97^2 = (100 - 3)^2 = 100^2 - 2 \\times 100 \\times 3 + 3^2 = 10\\,000 - 600 + 9 = 9\\,409$.'
        },
        {
          statement: 'Développer $(4x - 1)(4x + 1)$.',
          type: 'multiple-choice',
          options: ['$16x^2 + 1$', '$16x^2 - 1$', '$16x^2 - 8x + 1$', '$8x^2 - 1$'],
          answer: 1,
          points: 2,
          correction: '$(4x - 1)(4x + 1) = (4x)^2 - 1^2 = 16x^2 - 1$ (identité $a^2 - b^2$).'
        },
        {
          statement: 'Soit $A = (x + 3)^2 - (x - 3)^2$. Après développement et simplification, $A$ est égal à :',
          type: 'multiple-choice',
          options: ['$12x$', '$12$', '$6x + 18$', '$2x^2 + 18$'],
          answer: 0,
          points: 2,
          correction: '$(x+3)^2 = x^2 + 6x + 9$. $(x-3)^2 = x^2 - 6x + 9$. $A = (x^2 + 6x + 9) - (x^2 - 6x + 9) = 12x$. Alternativement, on reconnaît $A = [(x+3)+(x-3)][(x+3)-(x-3)] = 2x \\times 6 = 12x$ (troisième identité).'
        }
      ]
    }
  },

    {
    id: '3e-equations-inequations',
    level: 1,
    icon: '⚖️',
    title: 'Équations et inéquations',
    subtitle: 'Résolution, ensemble solution, représentation',
    keywords: ['Équation', 'Inéquation', 'Inconnue', 'Solution', 'Intervalle'],
    physics: true,
    cours: {
      intro: 'Une équation fixe une condition d\'égalité sur $x$ ; on cherche toutes les valeurs qui la rendent vraie. Une inéquation fixe une condition d\'ordre : la solution est un intervalle, pas un point isolé. Les deux se résolvent par les mêmes opérations élémentaires — avec une différence cruciale : multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité. Intuition : si $-x < 3$, alors $x$ est au-delà de $-3$, c\'est-à-dire $x > -3$. En physique, les inéquations apparaissent dans les conditions de validité des modèles : une distance est positive, une probabilité reste entre $0$ et $1$, un courant ne dépasse pas une valeur limite. Toujours vérifier la solution en la substituant dans l\'expression de départ.',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Développer et réduire les deux membres.',
          'Regrouper les termes en $x$ d\'un côté, les constantes de l\'autre.',
          'Diviser par le coefficient de $x$ (attention : si négatif, inverser le sens de l\'inégalité).',
          'Vérifier en substituant la solution dans l\'expression de départ.'
        ]
      },
      formulas: [
        'Si $ax = b$ : $x = \\dfrac{b}{a}$ (avec $a \\neq 0$)',
        'Inéquation : si $a < 0$ et $ax < b$, alors $x > \\dfrac{b}{a}$ (sens inversé !)',
        'Notation intervalle : $x > 2 \\Leftrightarrow x \\in ]2 ; +\\infty[$'
      ],
      piege: 'Piège : multiplier ou diviser une inéquation par un nombre NÉGATIF inverse le sens ! $-2x < 6 \\Rightarrow x > -3$ (pas $x < -3$). C\'est la différence clé entre équation et inéquation.'
    },
    quiz: [
      {
        q: 'Résoudre $3x - 7 = 11$.',
        options: ['$x = 4$', '$x = 6$', '$x = \\frac{4}{3}$', '$x = -6$'],
        answer: 1,
        correction: '$3x - 7 = 11 \\Rightarrow 3x = 18 \\Rightarrow x = 6$. Vérif : $3 \\times 6 - 7 = 11$ ✓.'
      },
      {
        q: 'Résoudre $-2x + 5 > 1$.',
        options: ['$x > 2$', '$x < 2$', '$x > -2$', '$x < -2$'],
        answer: 1,
        correction: '$-2x > -4 \\Rightarrow x < 2$ (sens inversé car on divise par $-2$).'
      },
      {
        q: 'Un élève résout $-3x > 12$ et écrit $x > -4$. Quelle est son erreur ?',
        options: [
          'Il doit inverser l\'inégalité en divisant par un négatif : la solution est $x < -4$',
          'Il a mal calculé $12 \\div 3 = 4$',
          'Il n\'y a pas d\'erreur, $x > -4$ est correct',
          'Il fallait ajouter $3$ des deux membres, pas diviser'
        ],
        answer: 0,
        correction: 'Diviser les deux membres par $-3$ (négatif) inverse le sens de l\'inégalité : $-3x > 12 \\Rightarrow x < \\dfrac{12}{-3} \\Rightarrow x < -4$. L\'ensemble solution est $]-\\infty\\,;\\,-4[$. Oublier d\'inverser $>$ en $<$ est l\'erreur la plus classique des inéquations.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6), b = rand(1, 10), c = rand(5, 20);
        const sol = parseFloat(((c - b) / a).toFixed(2));
        return {
          statement: `Résoudre $${a}x + ${b} = ${c}$.`,
          answer: sol,
          tolerance: 0.01,
          unit: '',
          hint: `Soustraire $${b}$ des deux membres, puis diviser par $${a}$.`,
          solution: [
            `$${a}x = ${c} - ${b} = ${c-b}$`,
            `$x = \\dfrac{${c-b}}{${a}} = ${sol}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un plombier facture $40$ € de déplacement plus $35$ € par heure de travail. Un électricien facture $20$ € de déplacement plus $45$ € par heure.',
      tasks: [
        'Écrire le coût de chacun en fonction du nombre d\'heures $h$.',
        'Pour quelle valeur de $h$ les deux factures sont-elles égales (résoudre l\'équation) ?',
        'Pour $h < 2$, lequel est le moins cher ?'
      ],
      solutions: [
        'Plombier : $40 + 35h$ €. Électricien : $20 + 45h$ €.',
        '$40 + 35h = 20 + 45h \\Rightarrow 20 = 10h \\Rightarrow h = 2$ heures.',
        'Pour $h = 1$ : plombier $75$ € < électricien $65$ €… Attends : $40 + 35 = 75$ et $20 + 45 = 65$. L\'électricien est moins cher pour $h < 2$.'
      ],
      finalAnswer: 'Les deux factures sont égales pour $h = 2$ h. L\'électricien est moins cher pour moins de $2$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Équations et inéquations',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre l\'équation $5x - 3 = 2x + 9$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5x - 3 = 2x + 9 \\Rightarrow 5x - 2x = 9 + 3 \\Rightarrow 3x = 12 \\Rightarrow x = 4$. Vérification : $5 \\times 4 - 3 = 17$ et $2 \\times 4 + 9 = 17$ ✓.'
        },
        {
          statement: 'Résoudre l\'inéquation $-4x + 8 \\leq 0$. L\'ensemble solution est :',
          type: 'multiple-choice',
          options: ['$x \\leq 2$', '$x \\geq 2$', '$x \\leq -2$', '$x \\geq -2$'],
          answer: 1,
          points: 2,
          correction: '$-4x + 8 \\leq 0 \\Rightarrow -4x \\leq -8 \\Rightarrow x \\geq 2$ (on divise par $-4 < 0$, le sens de l\'inégalité s\'inverse). L\'ensemble solution est $[2\\,;\\,+\\infty[$.'
        },
        {
          statement: 'Résoudre $\\dfrac{2x + 1}{3} = 5$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\dfrac{2x + 1}{3} = 5 \\Rightarrow 2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$. Vérification : $\\dfrac{2 \\times 7 + 1}{3} = \\dfrac{15}{3} = 5$ ✓.'
        },
        {
          statement: 'Un cinéma propose deux formules. Formule A : $8$ € par film. Formule B : un abonnement de $20$ € puis $3$ € par film. À partir de combien de films la formule B est-elle plus avantageuse ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: 'films',
          points: 2,
          correction: 'Coût A : $8n$. Coût B : $20 + 3n$. B plus avantageuse quand $20 + 3n < 8n \\Rightarrow 20 < 5n \\Rightarrow n > 4$. À partir de $5$ films, la formule B est moins chère.'
        },
        {
          statement: 'L\'inéquation $3(x - 2) > 2(x + 1)$ a pour ensemble solution :',
          type: 'multiple-choice',
          options: ['$x > 8$', '$x > 4$', '$x < 8$', '$x > -8$'],
          answer: 0,
          points: 2,
          correction: '$3(x - 2) > 2(x + 1) \\Rightarrow 3x - 6 > 2x + 2 \\Rightarrow 3x - 2x > 2 + 6 \\Rightarrow x > 8$. L\'ensemble solution est $]8\\,;\\,+\\infty[$.'
        }
      ]
    }
  },

    {
    id: '3e-fonctions',
    level: 1,
    icon: '📉',
    title: 'Fonctions – notions de base',
    subtitle: 'Image, antécédent, représentation graphique',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Tableau de valeurs', 'Courbe'],
    physics: true,
    cours: {
      intro: 'Une fonction est une règle qui associe à chaque valeur d\'entrée $x$ une valeur de sortie $f(x)$ — et une seule. C\'est la notion mathématique de « machine déterministe » : une même entrée donne toujours la même sortie. L\'image de $x$ est la valeur de sortie $f(x)$ ; l\'antécédent de $y$ est la (ou les) valeur(s) $x$ qui donnent $f(x) = y$. Un antécédent peut ne pas exister (si $y$ n\'est pas atteint) ou être multiple : $f(x) = x^2$ associe $f(3) = f(-3) = 9$, donc $9$ a deux antécédents. Graphiquement, l\'image se lit sur l\'axe vertical (ordonnée), l\'antécédent sur l\'axe horizontal (abscisse). En physique, toutes les formules ($v = d/t$, $U = RI$) sont des fonctions d\'une ou plusieurs variables.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Calculer une image : substituer $x$ par la valeur donnée dans l\'expression de $f(x)$.',
          'Trouver un antécédent : résoudre $f(x) = y$ (équation).',
          'Lire sur un graphe : image → lire l\'ordonnée ; antécédent → lire l\'abscisse.'
        ]
      },
      formulas: [
        '$f(x) = $ expression en $x$ (définition de la fonction)',
        'Image de $a$ : calculer $f(a)$',
        'Antécédent de $b$ : résoudre $f(x) = b$',
        'Notation : $x \\mapsto f(x)$ (on lit « $x$ a pour image $f(x)$ »)'
      ],
      piege: 'Piège : une fonction peut avoir plusieurs antécédents pour un même y, mais un seul image pour chaque x. Par exemple, $f(x) = x^2$ : $f(2) = 4$ et $f(-2) = 4$, donc $4$ a deux antécédents ($2$ et $-2$).'
    },
    quiz: [
      {
        q: 'Si $f(x) = 2x - 3$, quelle est l\'image de $5$ par $f$ ?',
        options: ['$7$', '$13$', '$-3$', '$4$'],
        answer: 0,
        correction: '$f(5) = 2 \\times 5 - 3 = 10 - 3 = 7$.'
      },
      {
        q: 'Si $g(x) = x^2 + 1$, quel est l\'antécédent de $10$ par $g$ ?',
        options: ['$3$ seulement', '$-3$ seulement', '$3$ et $-3$', '$9$'],
        answer: 2,
        correction: '$g(x) = 10 \\Rightarrow x^2 + 1 = 10 \\Rightarrow x^2 = 9 \\Rightarrow x = 3$ ou $x = -3$.'
      },
      {
        q: 'Peut-on avoir $f(2) = 5$ et $f(2) = 7$ en même temps pour une même fonction $f$ ?',
        options: [
          'Non : une fonction associe une image unique à chaque valeur de $x$',
          'Oui, si $f$ est une fonction du second degré',
          'Oui, si $f$ est définie par morceaux',
          'Cela dépend du domaine de définition'
        ],
        answer: 0,
        correction: 'Par définition, une fonction associe à chaque $x$ une image UNIQUE. $f(2) = 5$ et $f(2) = 7$ simultanément est impossible pour une fonction — ce serait une relation multivoque. En revanche, deux $x$ différents peuvent avoir la même image : $f(3) = f(-3) = 9$ pour $f(x) = x^2$ est tout à fait valide.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(-5, 5), x = rand(-3, 8);
        return {
          statement: `Soit $f(x) = ${a}x + ${b}$. Calcule $f(${x})$.`,
          answer: a * x + b,
          tolerance: 0,
          unit: '',
          hint: `Substitue $x = ${x}$ : $f(${x}) = ${a} \\times ${x} + (${b})$.`,
          solution: [`$f(${x}) = ${a} \\times ${x} + (${b}) = ${a*x} + (${b}) = ${a*x+b}$.`]
        };
      }
    },
    probleme: {
      context: 'La température $T$ (en °C) dans une salle en fonction de l\'heure $h$ (depuis l\'allumage du chauffage) est modélisée par $T(h) = 3h + 16$.',
      tasks: [
        'Calculer la température après $2$ heures.',
        'Après combien d\'heures atteint-on $25°C$ (trouver l\'antécédent) ?',
        'Quelle est la température initiale (à $h = 0$) ?'
      ],
      solutions: [
        '$T(2) = 3 \\times 2 + 16 = 22°C$.',
        '$3h + 16 = 25 \\Rightarrow 3h = 9 \\Rightarrow h = 3$ heures.',
        '$T(0) = 16°C$.'
      ],
      finalAnswer: 'La salle part de $16°C$ et atteint $25°C$ au bout de $3$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions : notions de base',
      duration: '25 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x - 7$. Calculer l\'image de $4$ par $f$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(4) = 3 \\times 4 - 7 = 12 - 7 = 5$.'
        },
        {
          statement: 'Soit $g(x) = x^2 - 4$. Trouver le ou les antécédent(s) de $0$ par $g$.',
          type: 'multiple-choice',
          options: ['$x = 2$ seulement', '$x = -2$ seulement', '$x = 2$ et $x = -2$', 'Il n\'y a pas d\'antécédent'],
          answer: 2,
          points: 2,
          correction: '$g(x) = 0 \\Rightarrow x^2 - 4 = 0 \\Rightarrow x^2 = 4 \\Rightarrow x = 2$ ou $x = -2$. Les deux valeurs sont des antécédents de $0$.'
        },
        {
          statement: 'Soit $h(x) = -2x + 10$. Pour quelle valeur de $x$ a-t-on $h(x) = 0$ ?',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$h(x) = 0 \\Rightarrow -2x + 10 = 0 \\Rightarrow -2x = -10 \\Rightarrow x = 5$. Vérification : $h(5) = -2 \\times 5 + 10 = 0$ ✓.'
        },
        {
          statement: 'On dit que $f$ est une fonction. Laquelle de ces affirmations est vraie ?',
          type: 'multiple-choice',
          options: [
            'Un même $x$ peut avoir plusieurs images',
            'Une même image peut avoir plusieurs antécédents',
            'Chaque image a exactement un antécédent',
            'Une fonction est toujours définie pour tout $x$'
          ],
          answer: 1,
          points: 2,
          correction: 'Par définition, une fonction associe à chaque $x$ UNE SEULE image, mais une même valeur $y$ peut avoir plusieurs antécédents. Exemple : $f(x) = x^2$ donne $f(3) = f(-3) = 9$.'
        },
        {
          statement: 'Soit $f(x) = 5x + 2$. Calculer $f(-3)$.',
          type: 'numeric',
          answer: -13,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(-3) = 5 \\times (-3) + 2 = -15 + 2 = -13$.'
        }
      ]
    }
  },

    {
    id: '3e-homotheties',
    level: 1,
    icon: '🔍',
    title: 'Homothéties',
    subtitle: 'Centre, rapport, image d\'une figure',
    keywords: ['Homothétie', 'Rapport', 'Centre', 'Agrandissement', 'Réduction', 'Similitude'],
    physics: false,
    cours: {
      intro: 'L\'homothétie est la transformation géométrique qui réalise tous les agrandissements et réductions : elle conserve les angles et multiplie toutes les longueurs par $|k|$. Le centre $O$ est le seul point qui reste fixe ; tous les autres « glissent » sur leur droite passant par $O$. Si $k > 0$, l\'image est du même côté que l\'original ; si $k < 0$, elle passe de l\'autre côté du centre (retournement). En optique, une lentille réalise une homothétie entre objet et image. La propriété sur les aires est souvent sous-estimée : multiplier les longueurs par $k$ multiplie les aires par $k^2$ — un agrandissement de facteur $3$ donne une aire $9$ fois plus grande.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier le centre $O$ et le rapport $k$.',
          'Image de $A$ : $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$. En coordonnées : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.',
          'Les longueurs sont multipliées par $|k|$ ; les aires par $k^2$ ; le périmètre par $|k|$.'
        ]
      },
      formulas: [
        '$\\vec{OA\'} = k \\cdot \\vec{OA}$',
        'Longueurs : $A\'B\' = |k| \\times AB$',
        'Aires : $\\mathcal{A}_{\\text{image}} = k^2 \\times \\mathcal{A}_{\\text{original}}$',
        'Les angles sont conservés (similitude)'
      ],
      piege: 'Piège : l\'homothétie multiplie les LONGUEURS par $|k|$ mais les AIRES par $k^2$. Si on agrandit d\'un facteur $3$, les longueurs sont $\\times 3$ mais l\'aire est $\\times 9$ !'
    },
    quiz: [
      {
        q: 'Une homothétie de rapport $k = 2$ agrandit un carré d\'aire $5$ cm². Quelle est l\'aire de l\'image ?',
        options: ['$10$ cm²', '$20$ cm²', '$40$ cm²', '$25$ cm²'],
        answer: 1,
        correction: 'L\'aire est multipliée par $k^2 = 2^2 = 4$. Aire image $= 5 \\times 4 = 20$ cm².'
      },
      {
        q: 'Sur un plan au $\\frac{1}{100}$, un salon mesure $3$ cm $\\times$ $4$ cm. Quelle est la superficie réelle du salon ?',
        options: ['$12$ cm²', '$1\\,200$ cm²', '$120\\,000$ cm²', '$12\\,000$ cm²'],
        answer: 2,
        correction: 'Le rapport est $k = 100$. Les longueurs réelles sont $300$ cm et $400$ cm. L\'aire réelle est $300 \\times 400 = 120\\,000$ cm² $= 12$ m². L\'erreur classique est de multiplier l\'aire du plan par $100$ au lieu de $100^2 = 10\\,000$, car les aires se multiplient par $k^2$, pas par $k$.'
      },
      {
        q: 'Qu\'est-ce qu\'une homothétie de rapport $k = -1$ réalise ?',
        options: ['Une réduction de moitié', 'Une symétrie centrale par rapport au centre', 'Un agrandissement', 'Une rotation de $90°$'],
        answer: 1,
        correction: '$k = -1$ : $\\vec{OA\'} = -1 \\cdot \\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const k = pick([2, 3, 0.5]);
        const ab = rand(3, 12);
        return {
          statement: `Une homothétie de rapport $k = ${k}$ transforme un segment de longueur $${ab}$ cm. Quelle est la longueur de l'image (en cm) ?`,
          answer: parseFloat((Math.abs(k) * ab).toFixed(1)),
          tolerance: 0.1,
          unit: 'cm',
          hint: `Longueur image $= |k| \\times$ longueur originale $= ${Math.abs(k)} \\times ${ab}$.`,
          solution: [`$A'B' = |${k}| \\times ${ab} = ${Math.abs(k) * ab}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un photographe veut agrandir une photo de $10$ cm × $15$ cm pour en faire une affiche.',
      tasks: [
        'L\'agrandissement a un rapport $k = 4$. Quelles sont les dimensions de l\'affiche ?',
        'Quelle est l\'aire de la photo originale ? Et de l\'affiche ?',
        'Par quel facteur l\'aire a-t-elle été multipliée ?'
      ],
      solutions: [
        'Affiche : $10 \\times 4 = 40$ cm et $15 \\times 4 = 60$ cm.',
        'Photo : $10 \\times 15 = 150$ cm². Affiche : $40 \\times 60 = 2400$ cm².',
        '$\\dfrac{2400}{150} = 16 = k^2 = 4^2$ ✓.'
      ],
      finalAnswer: 'L\'affiche mesure $40 \\times 60$ cm. Son aire est $16$ fois celle de la photo.'
    },

    evaluation: {
      title: 'Évaluation — Homothéties',
      duration: '25 min',
      questions: [
        {
          statement: 'Une homothétie de centre $O$ et de rapport $k = 3$ transforme un triangle d\'aire $8$ cm². Quelle est l\'aire de l\'image ?',
          type: 'numeric',
          answer: 72,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: 'L\'aire est multipliée par $k^2 = 3^2 = 9$. Aire image $= 8 \\times 9 = 72$ cm².'
        },
        {
          statement: 'Sur un plan à l\'échelle $\\dfrac{1}{200}$, une pièce mesure $4$ cm de long. Quelle est la longueur réelle de la pièce ?',
          type: 'numeric',
          answer: 800,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le rapport d\'homothétie est $k = 200$. Longueur réelle $= 4 \\times 200 = 800$ cm $= 8$ m.'
        },
        {
          statement: 'Une homothétie de rapport $k = -2$ transforme un point $A$ tel que $OA = 5$ cm. Quelle est la distance $OA\'$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$OA\' = |k| \\times OA = |-2| \\times 5 = 2 \\times 5 = 10$ cm. Le signe négatif signifie que $A\'$ est de l\'autre côté de $O$ par rapport à $A$, mais la distance est bien $10$ cm.'
        },
        {
          statement: 'Une homothétie de rapport $k = -1$ est équivalente à :',
          type: 'multiple-choice',
          options: ['Une translation', 'Une rotation de $90°$', 'Une symétrie centrale', 'L\'identité'],
          answer: 2,
          points: 2,
          correction: 'Pour $k = -1$ : $\\vec{OA\'} = -\\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
        },
        {
          statement: 'Un plan au $\\dfrac{1}{50}$ représente un jardin carré de côté $6$ cm sur le plan. Quelle est l\'aire réelle du jardin en m² ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'm²',
          points: 2,
          correction: 'Côté réel $= 6 \\times 50 = 300$ cm $= 3$ m. Aire réelle $= 3 \\times 3 = 9$ m². Attention : l\'aire se multiplie par $k^2 = 50^2 = 2500$, pas par $50$. Vérification : $6^2 \\times 2500 = 36 \\times 2500 = 90\\,000$ cm² $= 9$ m² ✓.'
        }
      ]
    }
  },

    {
    id: '3e-sections-solides',
    level: 1,
    icon: '🔪',
    title: 'Sections de solides',
    subtitle: 'Plans de coupe, sections parallèles et perpendiculaires',
    keywords: ['Section', 'Plan de coupe', 'Pavé', 'Cône', 'Cylindre', 'Pyramide'],
    physics: false,
    cours: {
      intro: 'Couper un solide par un plan donne une section plane dont la forme révèle la structure géométrique du solide. Les sections parallèles à une base conservent la forme de celle-ci, en plus petit selon un rapport de similitude lié aux hauteurs. Les coupes obliques donnent des formes moins intuitives : une coupe oblique d\'un cylindre produit une ellipse, pas un rectangle ni un cercle. Ces sections ont des applications concrètes en médecine (IRM, scanner qui reconstitue des coupes), en architecture (plans de coupe de bâtiments) et en fabrication. Pour les pyramides et cônes, le rapport de similitude entre la section et la base est le rapport des hauteurs — c\'est le théorème de Thalès appliqué dans l\'espace.',
      method: {
        title: 'Méthode selon le type de solide',
        steps: [
          'Pavé droit : toute section parallèle à une face est un rectangle (ou carré). Section oblique → parallélogramme.',
          'Cylindre : section parallèle aux bases → disque. Section perpendiculaire à l\'axe → disque. Section par un plan contenant l\'axe → rectangle.',
          'Cône : section parallèle à la base → disque (plus petit). Section par un plan passant par le sommet → triangle isocèle.',
          'Pyramide : section parallèle à la base → figure semblable à la base (homothétie).'
        ]
      },
      formulas: [
        'Section parallèle à la base d\'un cône ou pyramide : rapport de similitude $= \\dfrac{h\'}{h}$',
        'Côté de la section : $c\' = c \\times \\dfrac{h\'}{h}$ (homothétie)'
      ],
      piege: 'Piège : la section d\'un cylindre PAR un plan oblique (ni perpendiculaire ni contenant l\'axe) est une ELLIPSE, pas un rectangle ni un cercle. Souvent négligé mais important !'
    },
    quiz: [
      {
        q: 'On coupe un cylindre par un plan oblique (ni parallèle ni perpendiculaire à l\'axe). Quelle est la forme de la section ?',
        options: ['Une ellipse', 'Un rectangle', 'Un cercle de plus petit rayon', 'Un ovale quelconque (pas une ellipse)'],
        answer: 0,
        correction: 'La section oblique d\'un cylindre est une ellipse — pas un rectangle ni un cercle. Le rectangle s\'obtient uniquement quand le plan de coupe contient l\'axe. La confusion vient souvent du dessin en perspective, où le cylindre semble « fait de rectangles ».'
      },
      {
        q: 'Une pyramide carrée de base $6$ cm et hauteur $9$ cm est coupée à $3$ cm du sommet (parallèlement à la base). Quel est le côté de la section ?',
        options: ['$3$ cm', '$2$ cm', '$6$ cm', '$4{,}5$ cm'],
        answer: 1,
        correction: 'Rapport : $\\frac{h\'}{h} = \\frac{3}{9} = \\frac{1}{3}$. Côté de la section : $6 \\times \\frac{1}{3} = 2$ cm.'
      },
      {
        q: 'La section d\'un cône par un plan passant par son sommet et l\'axe est :',
        options: ['Un cercle', 'Un trapèze', 'Un triangle isocèle', 'Un rectangle'],
        answer: 2,
        correction: 'Ce plan contient l\'axe du cône. Il coupe le cône selon un triangle isocèle dont la base est un diamètre de la base du cône.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const base = rand(6, 15);
        const h = rand(6, 15);
        const hprime = rand(1, h - 1);
        const cprime = parseFloat((base * hprime / h).toFixed(1));
        return {
          statement: `Une pyramide à base carrée de côté $${base}$ cm et de hauteur $${h}$ cm est coupée à $${hprime}$ cm du sommet, parallèlement à la base. Quel est le côté de la section (en cm) ?`,
          answer: cprime,
          tolerance: 0.1,
          unit: 'cm',
          hint: `Rapport de similitude : $\\dfrac{${hprime}}{${h}}$. Côté section $= ${base} \\times \\dfrac{${hprime}}{${h}}$.`,
          solution: [`$c' = ${base} \\times \\dfrac{${hprime}}{${h}} = \\dfrac{${base*hprime}}{${h}} = ${cprime}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un architecte coupe une maquette en forme de cône (rayon $12$ cm, hauteur $18$ cm) par un plan horizontal à $6$ cm du sommet.',
      tasks: [
        'Calculer le rapport de similitude entre la section et la base.',
        'Calculer le rayon de la section circulaire.',
        'Calculer l\'aire de cette section (avec $\\pi \\approx 3{,}14$).'
      ],
      solutions: [
        'Rapport $= \\dfrac{6}{18} = \\dfrac{1}{3}$.',
        'Rayon section $= 12 \\times \\dfrac{1}{3} = 4$ cm.',
        'Aire $= 3{,}14 \\times 4^2 = 3{,}14 \\times 16 = 50{,}24$ cm².'
      ],
      finalAnswer: 'La section est un disque de rayon $4$ cm et d\'aire $50{,}24$ cm².'
    },

    evaluation: {
      title: 'Évaluation — Sections de solides',
      duration: '25 min',
      questions: [
        {
          statement: 'Une pyramide régulière à base carrée de côté $10$ cm et de hauteur $15$ cm est coupée par un plan parallèle à la base, à $5$ cm du sommet. Quel est le côté de la section obtenue ?',
          type: 'numeric',
          answer: 3.33,
          tolerance: 0.05,
          unit: 'cm',
          points: 2,
          correction: 'Rapport de similitude : $k = \\dfrac{h\'}{h} = \\dfrac{5}{15} = \\dfrac{1}{3}$. Côté de la section : $10 \\times \\dfrac{1}{3} \\approx 3{,}33$ cm.'
        },
        {
          statement: 'On coupe un cylindre par un plan parallèle à ses bases. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un rectangle', 'Une ellipse', 'Un disque de même rayon que la base', 'Un disque de rayon plus petit'],
          answer: 2,
          points: 2,
          correction: 'Toute section d\'un cylindre par un plan parallèle aux bases est un disque de même rayon que les bases. Le rayon ne change pas car les génératrices sont toutes parallèles et à la même distance de l\'axe.'
        },
        {
          statement: 'Un cône de rayon de base $9$ cm et de hauteur $12$ cm est coupé à $8$ cm du sommet. Calculer l\'aire de la section circulaire obtenue ($\\pi \\approx 3{,}14$, arrondir à $0{,}01$ cm²).',
          type: 'numeric',
          answer: 113.04,
          tolerance: 0.5,
          unit: 'cm²',
          points: 3,
          correction: 'Rapport : $k = \\dfrac{8}{12} = \\dfrac{2}{3}$. Rayon section : $r\' = 9 \\times \\dfrac{2}{3} = 6$ cm. Aire : $\\pi r\'^2 = 3{,}14 \\times 36 = 113{,}04$ cm².'
        },
        {
          statement: 'On coupe un pavé droit par un plan contenant une diagonale d\'une face et perpendiculaire à cette face. La section obtenue est :',
          type: 'multiple-choice',
          options: ['Un triangle', 'Un rectangle', 'Un parallélogramme', 'Un trapèze'],
          answer: 1,
          points: 1,
          correction: 'Dans un pavé droit, un plan perpendiculaire à une face et contenant une diagonale de celle-ci donne une section rectangulaire. Les arêtes du pavé étant perpendiculaires entre elles, la section conserve des angles droits.'
        },
        {
          statement: 'Une pyramide à base triangulaire (tétraèdre) de hauteur $20$ cm est coupée à $10$ cm du sommet. Quel est le rapport entre l\'aire de la section et l\'aire de la base ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{8}$', '$\\dfrac{1}{3}$'],
          answer: 1,
          points: 2,
          correction: 'Le rapport de similitude est $k = \\dfrac{10}{20} = \\dfrac{1}{2}$. Les aires sont dans le rapport $k^2 = \\left(\\dfrac{1}{2}\\right)^2 = \\dfrac{1}{4}$. L\'aire de la section est le quart de l\'aire de la base.'
        }
      ]
    }
  },

    {
    id: '3e-volumes',
    level: 1,
    icon: '🌐',
    title: 'Volumes : sphère et solides composés',
    subtitle: 'Formule de la sphère, assemblages',
    keywords: ['Sphère', 'Boule', 'Volume', 'Solides composés', 'Rayon'],
    physics: true,
    cours: {
      intro: 'La sphère est la surface des points à distance $r$ d\'un centre ; la boule est le volume qu\'elle délimite. La formule $V = \\frac{4}{3}\\pi r^3$ porte le cube du rayon : doubler le rayon multiplie le volume par $8$, pas par $2$. Cette sensibilité au rayon explique pourquoi les cellules biologiques ne dépassent pas une certaine taille — leur surface (en $r^2$) ne peut plus suffire aux échanges si le volume (en $r^3$) croît trop vite. Pour les solides composés, on décompose en formes simples (boule, cylindre, cône, pyramide) et on additionne leurs volumes — ou on soustrait si un solide est « creusé » dans un autre. Identifier clairement la géométrie de chaque composante est la première étape.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier les composantes du solide (boule, cône, cylindre, pyramide…).',
          'Calculer le volume de chaque partie avec la formule adaptée.',
          'Additionner les volumes (ou soustraire si un solide est creusé dans un autre).'
        ]
      },
      formulas: [
        'Boule : $V = \\dfrac{4}{3}\\pi r^3$',
        'Surface d\'une sphère : $S = 4\\pi r^2$',
        'Hémisphère : $V = \\dfrac{2}{3}\\pi r^3$'
      ],
      piege: 'Piège : $V = \\frac{4}{3}\\pi r^3$ — c\'est le RAYON au cube, pas le diamètre ! Si on donne le diamètre $d$, ne pas oublier $r = d/2$ avant de calculer $r^3$.'
    },
    quiz: [
      {
        q: 'On double le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
        options: ['$2$', '$4$', '$8$', '$6$'],
        answer: 2,
        correction: '$V = \\frac{4}{3}\\pi r^3$. Avec $2r$ : $V\' = \\frac{4}{3}\\pi (2r)^3 = \\frac{4}{3}\\pi \\times 8r^3 = 8V$. Le volume est multiplié par $8 = 2^3$. L\'erreur courante est de répondre $\\times 2$ (confusion avec les longueurs) ou $\\times 4$ (confusion avec les aires).'
      },
      {
        q: 'Une boule de diamètre $6$ cm a un volume de :',
        options: ['$904{,}32$ cm³', '$113{,}04$ cm³', '$56{,}52$ cm³', '$452{,}16$ cm³'],
        answer: 1,
        correction: 'Rayon $r = 3$ cm. $V = \\frac{4}{3} \\times 3{,}14 \\times 27 = 113{,}04$ cm³.'
      },
      {
        q: 'Une figurine est formée d\'un cylindre surmonté d\'une demi-sphère de même rayon $r = 2$ cm. Le cylindre a une hauteur de $5$ cm. Quel est le volume total (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$79{,}48$ cm³', '$62{,}8$ cm³', '$96{,}97$ cm³', '$45{,}73$ cm³'],
        answer: 0,
        correction: 'Cylindre : $3{,}14 \\times 4 \\times 5 = 62{,}8$ cm³. Demi-sphère : $\\frac{2}{3} \\times 3{,}14 \\times 8 = 16{,}75$ cm³. Total : $\\approx 79{,}55$ cm³.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r = rand(2, 8);
        const v = parseFloat((4/3 * 3.14 * r * r * r).toFixed(1));
        return {
          statement: `Calcule le volume d'une boule de rayon $${r}$ cm. Utilise $\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³.`,
          answer: v,
          tolerance: 1,
          unit: 'cm³',
          hint: `$V = \\dfrac{4}{3} \\times 3{,}14 \\times ${r}^3 = \\dfrac{4}{3} \\times 3{,}14 \\times ${r*r*r}$.`,
          solution: [`$V = \\dfrac{4 \\times 3{,}14 \\times ${r*r*r}}{3} = \\dfrac{${parseFloat((4*3.14*r*r*r).toFixed(2))}}{3} \\approx ${v}$ cm³.`]
        };
      }
    },
    probleme: {
      context: 'Une bougie est fabriquée en forme de cylindre surmonté d\'un cône. Le cylindre a rayon $2$ cm et hauteur $8$ cm. Le cône a même rayon et hauteur $3$ cm.',
      tasks: [
        'Calculer le volume du cylindre.',
        'Calculer le volume du cône.',
        'Calculer le volume total de la bougie.'
      ],
      solutions: [
        '$V_{\\text{cyl}} = 3{,}14 \\times 4 \\times 8 = 100{,}48$ cm³.',
        '$V_{\\text{cône}} = \\frac{1}{3} \\times 3{,}14 \\times 4 \\times 3 = 12{,}56$ cm³.',
        '$V_{\\text{total}} = 100{,}48 + 12{,}56 = 113{,}04$ cm³.'
      ],
      finalAnswer: 'La bougie a un volume de $113{,}04$ cm³.'
    },

    evaluation: {
      title: 'Évaluation — Volumes : sphère et solides composés',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le volume d\'une boule de rayon $5$ cm. On prendra $\\pi \\approx 3{,}14$. Arrondir au centième.',
          type: 'numeric',
          answer: 523.33,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\dfrac{4}{3} \\times 3{,}14 \\times 5^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 125 = \\dfrac{1570}{3} \\approx 523{,}33$ cm³.'
        },
        {
          statement: 'Une balle de tennis a un diamètre de $6{,}8$ cm. Quel est son volume ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 164.6,
          tolerance: 1,
          unit: 'cm³',
          points: 2,
          correction: 'Rayon $r = \\dfrac{6{,}8}{2} = 3{,}4$ cm. $V = \\dfrac{4}{3} \\times 3{,}14 \\times 3{,}4^3 = \\dfrac{4}{3} \\times 3{,}14 \\times 39{,}304 \\approx 164{,}6$ cm³. Attention à bien prendre le rayon et non le diamètre.'
        },
        {
          statement: 'On triple le rayon d\'une boule. Par quel facteur son volume est-il multiplié ?',
          type: 'multiple-choice',
          options: ['$3$', '$9$', '$27$', '$6$'],
          answer: 2,
          points: 2,
          correction: '$V = \\dfrac{4}{3}\\pi r^3$. Avec $3r$ : $V\' = \\dfrac{4}{3}\\pi (3r)^3 = \\dfrac{4}{3}\\pi \\times 27r^3 = 27V$. Le volume est multiplié par $3^3 = 27$.'
        },
        {
          statement: 'Un solide est composé d\'un cylindre de rayon $3$ cm et de hauteur $10$ cm surmonté d\'une demi-sphère de même rayon. Quel est le volume total ? ($\\pi \\approx 3{,}14$, arrondi à $0{,}1$ cm³)',
          type: 'numeric',
          answer: 339.1,
          tolerance: 2,
          unit: 'cm³',
          points: 2,
          correction: 'Cylindre : $V_c = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³. Demi-sphère : $V_s = \\dfrac{2}{3} \\times 3{,}14 \\times 27 = 56{,}52$ cm³. Total : $282{,}6 + 56{,}52 = 339{,}12 \\approx 339{,}1$ cm³.'
        },
        {
          statement: 'Un récipient sphérique de diamètre $20$ cm est rempli d\'eau à moitié. Quel volume d\'eau contient-il ? ($\\pi \\approx 3{,}14$)',
          type: 'multiple-choice',
          options: ['$4\\,186{,}67$ cm³', '$2\\,093{,}33$ cm³', '$1\\,046{,}67$ cm³', '$523{,}33$ cm³'],
          answer: 1,
          points: 2,
          correction: 'Rayon $r = 10$ cm. Volume total : $V = \\dfrac{4}{3} \\times 3{,}14 \\times 10^3 = \\dfrac{4}{3} \\times 3140 \\approx 4\\,186{,}67$ cm³. Moitié : $\\dfrac{4\\,186{,}67}{2} \\approx 2\\,093{,}33$ cm³.'
        }
      ]
    }
  },

    {
    id: '3e-stats-probas',
    level: 1,
    icon: '📋',
    title: 'Statistiques et probabilités (approfondissement)',
    subtitle: 'Fréquences, tableaux croisés, probabilités conditionnelles intro',
    keywords: ['Tableau croisé', 'Fréquence conditionnelle', 'Probabilité', 'Effectif', 'Proportion'],
    physics: false,
    cours: {
      intro: 'Un tableau croisé (ou de contingence) analyse simultanément deux caractères d\'une population et révèle leurs dépendances éventuelles. La clé est de distinguer deux types de fréquences : la fréquence globale (effectif de la case / total général) et la fréquence conditionnelle (effectif / total de la sous-population). La fréquence conditionnelle répond à « parmi les personnes de type $B$, quelle proportion est de type $A$ ? » — c\'est la base des probabilités conditionnelles. Deux caractères sont indépendants si la fréquence conditionnelle est égale à la fréquence globale : connaître l\'un ne donne aucune information sur l\'autre. Cette notion d\'indépendance est fondamentale en statistique et en médecine (tests cliniques, études épidémiologiques).',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Lire le tableau : les lignes représentent un caractère, les colonnes un autre. Les marges donnent les totaux.',
          'Fréquence globale : $f = \\dfrac{\\text{effectif de la case}}{\\text{effectif total}}$.',
          'Fréquence conditionnelle : $f_{A|B} = \\dfrac{\\text{effectif}(A \\cap B)}{\\text{effectif de }B}$ (proportion dans une sous-population).'
        ]
      },
      formulas: [
        'Fréquence globale : $f = \\dfrac{n_{ij}}{N}$',
        'Fréquence en ligne : $f_{i|j} = \\dfrac{n_{ij}}{n_{j}}$',
        'Probabilité : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ (introduction)'
      ],
      piege: 'Piège : la fréquence conditionnelle dépend de la population de référence (ligne ou colonne). $\\frac{n_{ij}}{N}$ et $\\frac{n_{ij}}{n_j}$ ne donnent pas le même résultat. Toujours préciser « parmi les… ».'
    },
    quiz: [
      {
        q: 'Dans un tableau : $120$ élèves total. $72$ font du sport, dont $40$ filles. Si on tire une élève au hasard parmi les $50$ filles totales, quelle est la probabilité qu\'elle fasse du sport ?',
        options: ['$\\frac{40}{120}$', '$\\frac{40}{72}$', '$\\frac{40}{50}$', '$\\frac{50}{120}$'],
        answer: 2,
        correction: 'On cherche la probabilité conditionnelle « faire du sport PARMI les filles ». Référence : $50$ filles. $P(\\text{sport}|\\text{fille}) = \\frac{40}{50} = 0{,}8$.'
      },
      {
        q: 'Sur $200$ personnes : $80$ aiment le café, $60$ aiment le thé, $20$ aiment les deux. Combien n\'aiment ni l\'un ni l\'autre ?',
        options: ['$40$', '$60$', '$80$', '$100$'],
        answer: 2,
        correction: '$|C \\cup T| = 80 + 60 - 20 = 120$. Ni l\'un ni l\'autre : $200 - 120 = 80$.'
      },
      {
        q: 'Sur $100$ élèves, $60$ ont un animal de compagnie $(A)$ et $40$ pratiquent un sport $(S)$. Parmi ceux qui ont un animal, $30$ pratiquent aussi le sport. Quelle est $P(A \\cap S)$ ?',
        options: ['$\\dfrac{30}{100}$', '$\\dfrac{30}{60}$', '$\\dfrac{30}{40}$', '$\\dfrac{60+40}{100}$'],
        answer: 0,
        correction: '$P(A \\cap S) = \\dfrac{30}{100} = 0{,}3$ : c\'est la fréquence globale des élèves ayant un animal ET pratiquant un sport (référence : les $100$ élèves). $\\dfrac{30}{60}$ serait $P(S|A)$ (sport parmi les propriétaires), et $\\dfrac{30}{40}$ serait $P(A|S)$ (animal parmi les sportifs). Bien distinguer l\'intersection de la probabilité conditionnelle.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const total = rand(100, 300);
        const pA = pick([0.4, 0.5, 0.6]);
        const nA = Math.round(total * pA);
        const pAB = pick([0.2, 0.3, 0.4]);
        const nAB = Math.round(nA * pAB);
        const fcond = parseFloat((nAB / nA).toFixed(2));
        return {
          statement: `Dans un groupe de $${total}$ personnes, $${nA}$ pratiquent le sport $(A)$, dont $${nAB}$ pratiquent aussi un instrument $(B)$. Quelle est la fréquence conditionnelle de $B$ parmi les sportifs ?`,
          answer: fcond,
          tolerance: 0.01,
          unit: '',
          hint: `$f_{B|A} = \\dfrac{n(A \\cap B)}{n(A)} = \\dfrac{${nAB}}{${nA}}$.`,
          solution: [`$f_{B|A} = \\dfrac{${nAB}}{${nA}} = ${fcond}$ soit $${Math.round(fcond*100)}\\%$ des sportifs.`]
        };
      }
    },
    probleme: {
      context: 'Un lycée sonde $300$ élèves sur leurs habitudes de transport. Résultats : $120$ viennent en vélo, $150$ en bus, $30$ à pied. Parmi les cyclistes, $72$ sont des filles ; parmi les usagers du bus, $90$ sont des filles.',
      tasks: [
        'Calculer la fréquence des cyclistes dans la population totale.',
        'Calculer la fréquence conditionnelle d\'être une fille parmi les cyclistes.',
        'Peut-on dire que les filles préfèrent le vélo au bus ? (Comparer les fréquences conditionnelles.)'
      ],
      solutions: [
        '$f_{\\text{vélo}} = \\dfrac{120}{300} = 0{,}4 = 40\\%$.',
        '$f_{\\text{fille}|\\text{vélo}} = \\dfrac{72}{120} = 0{,}6 = 60\\%$.',
        '$f_{\\text{fille}|\\text{bus}} = \\dfrac{90}{150} = 0{,}6 = 60\\%$. À égalité : les filles ont la même proportion dans les deux modes de transport.'
      ],
      finalAnswer: 'Les filles représentent $60\\%$ des cyclistes et $60\\%$ des usagers du bus : pas de préférence significative.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques et probabilités',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une classe de $40$ élèves, $24$ pratiquent un sport et $10$ jouent d\'un instrument. Parmi les sportifs, $6$ jouent aussi d\'un instrument. Combien d\'élèves ne pratiquent ni sport ni instrument ?',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$|S \\cup I| = 24 + 10 - 6 = 28$. Ni l\'un ni l\'autre : $40 - 28 = 12$ élèves.'
        },
        {
          statement: 'Dans un sondage portant sur $200$ personnes, $80$ boivent du café $(C)$ et $50$ boivent du thé $(T)$. Parmi les buveurs de café, $20$ boivent aussi du thé. Quelle est la fréquence conditionnelle de boire du thé parmi les buveurs de café ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$f_{T|C} = \\dfrac{n(C \\cap T)}{n(C)} = \\dfrac{20}{80} = 0{,}25$. Donc $25\\%$ des buveurs de café boivent aussi du thé.'
        },
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre premier ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{6}$'],
          answer: 1,
          points: 2,
          correction: 'Les nombres premiers parmi $\\{1, 2, 3, 4, 5, 6\\}$ sont $2, 3, 5$ (trois résultats favorables). $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
        },
        {
          statement: 'Un tableau croisé indique que sur $150$ élèves, $60$ sont en $3^e$ et parmi ceux-ci, $45$ ont choisi l\'option sciences. La fréquence globale des élèves de $3^e$ ayant choisi sciences est :',
          type: 'multiple-choice',
          options: ['$\\dfrac{45}{60} = 0{,}75$', '$\\dfrac{45}{150} = 0{,}30$', '$\\dfrac{60}{150} = 0{,}40$', '$\\dfrac{45}{90} = 0{,}50$'],
          answer: 1,
          points: 2,
          correction: 'La fréquence globale prend pour référence l\'effectif total : $f = \\dfrac{45}{150} = 0{,}30$. La valeur $\\dfrac{45}{60} = 0{,}75$ est la fréquence conditionnelle (proportion de sciences parmi les $3^e$).'
        },
        {
          statement: 'On tire une carte au hasard dans un jeu de $52$ cartes. Quelle est la probabilité d\'obtenir un as ou un cœur ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{17}{52}$', '$\\dfrac{16}{52}$', '$\\dfrac{4}{52}$', '$\\dfrac{13}{52}$'],
          answer: 1,
          points: 2,
          correction: 'Il y a $4$ as et $13$ cœurs, mais l\'as de cœur est compté dans les deux. $P(\\text{as} \\cup \\text{cœur}) = \\dfrac{4 + 13 - 1}{52} = \\dfrac{16}{52} = \\dfrac{4}{13}$.'
        }
      ]
    }
  },

    {
    id: '3e-algorithmique',
    level: 1,
    icon: '💻',
    title: 'Algorithmes et programmation',
    subtitle: 'Variables, boucles, conditions, Scratch/Python',
    keywords: ['Algorithme', 'Variable', 'Boucle', 'Condition', 'Instruction', 'Pseudo-code'],
    physics: false,
    cours: {
      intro: 'Un algorithme est une suite finie et non ambiguë d\'instructions permettant de résoudre un problème — chaque instruction doit être interprétable de façon univoque, sans ambiguïté. Les trois structures fondamentales (séquence, condition, boucle) suffisent à exprimer n\'importe quel calcul : c\'est le théorème de structure de Böhm-Jacopini. L\'affectation $x \\leftarrow x + 1$ est conceptuellement différente d\'une équation : en maths, $x = x+1$ est absurde ; en algorithmique, c\'est une mise à jour (lire l\'ancienne valeur, calculer, stocker). Pour déboguer un algorithme, on trace son exécution ligne par ligne dans un tableau de valeurs des variables — c\'est la technique la plus fiable et la plus universelle.',
      method: {
        title: 'Les trois structures de base',
        steps: [
          'Séquence : les instructions s\'exécutent dans l\'ordre, l\'une après l\'autre.',
          'Condition : $\\mathtt{si}$ (condition) $\\mathtt{alors}$ (bloc) $\\mathtt{sinon}$ (autre bloc) — exécution conditionnelle.',
          'Boucle : $\\mathtt{pour}$ $i$ $\\mathtt{de}$ $1$ $\\mathtt{à}$ $n$ — ou $\\mathtt{tant que}$ (condition) — répétition d\'un bloc.'
        ]
      },
      formulas: [
        'Affectation : $x \\leftarrow 5$ (la variable $x$ prend la valeur $5$)',
        'Boucle bornée : $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}\\; \\ldots$',
        'Test : $\\mathtt{si}\\; (x > 0)\\; \\mathtt{alors}\\; \\ldots\\; \\mathtt{sinon}\\; \\ldots$'
      ],
      piege: 'Piège : l\'affectation $x \\leftarrow x + 1$ signifie « prendre la valeur actuelle de $x$, y ajouter $1$, et stocker le résultat dans $x$ ». Ce n\'est pas une équation : $x = x + 1$ est impossible en maths, mais parfaitement valide en algorithmique.'
    },
    quiz: [
      {
        q: 'Quelle est la valeur de $S$ à la fin de cet algorithme ?\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 4\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i$',
        options: ['$4$', '$6$', '$10$', '$16$'],
        answer: 2,
        correction: '$S = 0 + 1 + 2 + 3 + 4 = 10$. La boucle additionne tous les entiers de $1$ à $4$.'
      },
      {
        q: 'Un algorithme initialise $S \\leftarrow 1$, puis exécute $S \\leftarrow S \\times i$ pour $i$ allant de $1$ à $3$. Quelle est la valeur finale de $S$ ?',
        options: ['$1$', '$3$', '$6$', '$9$'],
        answer: 2,
        correction: 'Déroulement : $S=1$. $i=1 : S = 1 \\times 1 = 1$. $i=2 : S = 1 \\times 2 = 2$. $i=3 : S = 2 \\times 3 = 6$. L\'erreur fréquente est d\'additionner au lieu de multiplier ($1+2+3 = 6$ ici par coïncidence, mais pas pour $n=4$), ou d\'oublier que $S$ part de $1$ (pas $0$) car on multiplie.'
      },
      {
        q: 'Dans un algorithme, on écrit $x \\leftarrow x + 1$. Que fait cette instruction ?',
        options: [
          'Elle prouve que $x = x + 1$',
          'Elle augmente la valeur de $x$ de $1$',
          'Elle réinitialise $x$ à $0$',
          'Elle est impossible'
        ],
        answer: 1,
        correction: 'En algorithmique, $x \\leftarrow x + 1$ est une affectation : on lit la valeur actuelle de $x$, on lui ajoute $1$, et on stocke le résultat dans $x$. C\'est un incrément.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(3, 8);
        let s = 0;
        for (let i = 1; i <= n; i++) s += i;
        return {
          statement: `Cet algorithme est exécuté avec $n = ${n}$ :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; ${n}\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i$\nQuelle est la valeur finale de $S$ ?`,
          answer: s,
          tolerance: 0,
          unit: '',
          hint: `La boucle calcule $1 + 2 + 3 + \\ldots + ${n}$. Formule : $S = \\dfrac{${n} \\times ${n+1}}{2}$.`,
          solution: [
            `$S = 1 + 2 + \\ldots + ${n} = \\dfrac{${n} \\times ${n+1}}{2} = ${s}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un élève code un algorithme pour calculer la moyenne d\'une liste de $5$ notes.',
      tasks: [
        'Écrire en pseudo-code un algorithme qui demande $5$ notes, les additionne et affiche la moyenne.',
        'Simuler cet algorithme avec les notes $12, 15, 8, 17, 13$.',
        'Modifier l\'algorithme pour compter combien de notes sont supérieures à la moyenne.'
      ],
      solutions: [
        '$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$\n$\\quad$ Saisir $n_i$\n$\\quad S \\leftarrow S + n_i$\n$\\text{Afficher } S / 5$',
        '$S = 12+15+8+17+13 = 65$. Moyenne $= 65/5 = 13$.',
        'Ajouter un compteur $c \\leftarrow 0$ et tester $\\mathtt{si}\\; n_i > 13\\; \\mathtt{alors}\\; c \\leftarrow c + 1$. Ici : $15, 17$ → $c = 2$.'
      ],
      finalAnswer: 'Moyenne $= 13$ ; $2$ notes sur $5$ sont supérieures à la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Algorithmes et programmation',
      duration: '30 min',
      questions: [
        {
          statement: 'On exécute l\'algorithme suivant :\n$x \\leftarrow 3$\n$y \\leftarrow 5$\n$x \\leftarrow x + y$\n$y \\leftarrow x - y$\nQuelle est la valeur de $y$ à la fin ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Ligne par ligne : $x = 3$, $y = 5$. Puis $x \\leftarrow 3 + 5 = 8$. Puis $y \\leftarrow 8 - 5 = 3$. La valeur finale de $y$ est $3$. En fait, cet algorithme échange les valeurs de $x$ et $y$ (sans variable intermédiaire pour $y$).'
        },
        {
          statement: 'Quel est le rôle de cet algorithme ?\n$S \\leftarrow 1$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S \\times 2$',
          type: 'multiple-choice',
          options: ['Il calcule $2n$', 'Il calcule $2^n$', 'Il calcule $n!$', 'Il calcule $n^2$'],
          answer: 1,
          points: 2,
          correction: 'À chaque passage dans la boucle, $S$ est multiplié par $2$. Après $n$ passages : $S = 1 \\times 2^n = 2^n$. Par exemple pour $n = 3$ : $S = 1 \\to 2 \\to 4 \\to 8 = 2^3$.'
        },
        {
          statement: 'On exécute :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$\n$\\quad \\mathtt{si}\\; i\\; \\mathtt{est\\; pair}\\; \\mathtt{alors}$\n$\\quad\\quad S \\leftarrow S + i$\nQuelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les entiers de $1$ à $5$ sont : $1, 2, 3, 4, 5$. Les pairs sont $2$ et $4$. Donc $S = 0 + 2 + 4 = 6$.'
        },
        {
          statement: 'Un algorithme contient la boucle :\n$c \\leftarrow 0$\n$n \\leftarrow 100$\n$\\mathtt{tant\\; que}\\; n > 1\\; \\mathtt{faire}$\n$\\quad n \\leftarrow n \\div 2$ (division entière)\n$\\quad c \\leftarrow c + 1$\nQuelle est la valeur finale de $c$ ?',
          type: 'multiple-choice',
          options: ['$5$', '$6$', '$7$', '$50$'],
          answer: 1,
          points: 2,
          correction: 'On divise $n$ par $2$ (division entière) successivement : $100 \\to 50 \\to 25 \\to 12 \\to 6 \\to 3 \\to 1$. On s\'arrête quand $n \\leq 1$. Le compteur $c$ a été incrémenté $6$ fois (une par passage dans la boucle).'
        },
        {
          statement: 'On exécute l\'algorithme suivant avec $n = 6$ :\n$S \\leftarrow 0$\n$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$\n$\\quad S \\leftarrow S + i \\times i$\nQuelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 91,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$S = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 = 1 + 4 + 9 + 16 + 25 + 36 = 91$. Cet algorithme calcule la somme des carrés des entiers de $1$ à $n$.'
        }
      ]
    }
  }

);
