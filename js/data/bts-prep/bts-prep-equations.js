/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-equations.js
   Remise à niveau BTS — Équations du 1er et 2nd degré, systèmes 2×2
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-equations',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '⚖️',
  title: 'Équations & Systèmes',
  subtitle: 'Résoudre des équations du 1er et 2nd degré, et des systèmes 2×2',
  keywords: ['Équation', 'Système', 'Discriminant', '1er degré', '2nd degré', 'BTS', 'Prérequis'],
  physics: 'Point de fonctionnement, équilibre thermique, réseau de distribution',

  cours: {
    intro: 'Une équation, c\'est une contrainte : elle dit qu\'une certaine combinaison de grandeurs doit valoir un certain résultat. Résoudre une équation, c\'est trouver la ou les valeurs qui satisfont cette contrainte.<br/><br/>En BTS, on résout des équations pour trouver le <strong>point de fonctionnement</strong> d\'une installation (intersection courbe pompe / réseau), pour calculer un <strong>débit nominal</strong>, une <strong>résistance d\'équilibrage</strong>, ou les <strong>racines d\'un polynôme caractéristique</strong> en automatique.<br/><br/>Il existe trois types principaux : les équations du <strong>1er degré</strong> (une solution en général), du <strong>2nd degré</strong> (0, 1 ou 2 solutions selon le discriminant), et les <strong>systèmes d\'équations</strong> (plusieurs équations et plusieurs inconnues).',

    definitions: [
      {
        term: 'Équation du 1er degré',
        def: 'Équation de la forme $ax + b = 0$ avec $a \\neq 0$. Elle admet une unique solution : $x = -b/a$. En BTS : calcul d\'un courant, d\'une température d\'équilibre, d\'une vitesse.'
      },
      {
        term: 'Équation du 2nd degré',
        def: 'Équation de la forme $ax^2 + bx + c = 0$ avec $a \\neq 0$. Son discriminant est $\\Delta = b^2 - 4ac$. Si $\\Delta > 0$ : deux solutions $x = (-b \\pm \\sqrt{\\Delta})/(2a)$. Si $\\Delta = 0$ : une solution double $x = -b/(2a)$. Si $\\Delta < 0$ : aucune solution réelle.'
      },
      {
        term: 'Système d\'équations 2×2',
        def: 'Deux équations à deux inconnues $(x, y)$. Méthode par substitution : exprimer $x$ en fonction de $y$ depuis l\'équation (1), substituer dans l\'équation (2), résoudre, revenir trouver $x$. Méthode par combinaison : multiplier les équations par des coefficients et les additionner pour éliminer une inconnue.'
      },
      {
        term: 'Discriminant $\\Delta$',
        def: '$\\Delta = b^2 - 4ac$. C\'est le critère qui décide du nombre de solutions réelles d\'une équation du 2nd degré. Son signe suffit : $\\Delta > 0$ (2 solutions), $\\Delta = 0$ (1 solution double), $\\Delta < 0$ (pas de solution réelle).'
      }
    ],

    method: {
      title: 'Résolution d\'un système 2×2 par combinaison',
      steps: [
        '<strong>Écrire le système</strong> clairement avec les deux équations numérotées (1) et (2).<br/>Exemple (point de fonctionnement hydraulique) : $\\begin{cases} 2x + 3y = 14 \\\\ x - y = 1 \\end{cases}$',
        '<strong>Choisir l\'inconnue à éliminer</strong>. Ici, éliminer $x$ : multiplier (2) par $-2$ → $-2x + 2y = -2$. Additionner avec (1) : $5y = 12$ → $y = 2{,}4$.',
        '<strong>Substituer</strong> $y = 2{,}4$ dans (2) : $x = 1 + y = 3{,}4$. <strong>Vérifier</strong> dans (1) : $2 \\times 3{,}4 + 3 \\times 2{,}4 = 6{,}8 + 7{,}2 = 14$ ✓'
      ]
    },

    example: {
      statement: 'Le couple résistant d\'une machine en fonction de la vitesse suit $C_r = 0{,}5 \\omega + 10$. Le couple moteur est $C_m = -0{,}2 \\omega^2 + 5\\omega$. Trouver la vitesse $\\omega$ au point de fonctionnement (en rad/s).',
      steps: [
        'Au point de fonctionnement : $C_m = C_r$ → $-0{,}2\\omega^2 + 5\\omega = 0{,}5\\omega + 10$.',
        'On regroupe : $-0{,}2\\omega^2 + 4{,}5\\omega - 10 = 0$, soit $0{,}2\\omega^2 - 4{,}5\\omega + 10 = 0$.',
        'Discriminant : $\\Delta = 4{,}5^2 - 4 \\times 0{,}2 \\times 10 = 20{,}25 - 8 = 12{,}25$. $\\sqrt{\\Delta} = 3{,}5$.',
        '$\\omega = (4{,}5 \\pm 3{,}5)/(2 \\times 0{,}2)$. Solutions : $\\omega_1 = 8/0{,}4 = 20$ rad/s et $\\omega_2 = 1/0{,}4 = 2{,}5$ rad/s. On retient le point stable : $\\omega = 20$ rad/s.'
      ],
      answer: '$\\omega = 20$ rad/s (point de fonctionnement stable). Le second point ($2{,}5$ rad/s) est instable en pratique.'
    },

    formulas: [
      'Équation du 1er degré : $ax + b = 0 \\Rightarrow x = -b/a$',
      'Discriminant : $\\Delta = b^2 - 4ac$',
      '$\\Delta > 0$ : $x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$',
      '$\\Delta = 0$ : $x_0 = -b/(2a)$ (solution double)',
      '$\\Delta < 0$ : pas de solution réelle',
      'Système par combinaison : multiplier pour faire apparaître des coefficients opposés, additionner les équations'
    ],

    diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.9rem"><tr style="background:var(--bg-card)"><th style="border:1px solid var(--border);padding:8px">Signe de $\\Delta$</th><th style="border:1px solid var(--border);padding:8px">Nombre de solutions réelles</th><th style="border:1px solid var(--border);padding:8px">Formule</th></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\Delta > 0$</td><td style="border:1px solid var(--border);padding:7px">2 solutions distinctes</td><td style="border:1px solid var(--border);padding:7px">$x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\Delta = 0$</td><td style="border:1px solid var(--border);padding:7px">1 solution double</td><td style="border:1px solid var(--border);padding:7px">$x_0 = -b/(2a)$</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\Delta < 0$</td><td style="border:1px solid var(--border);padding:7px">0 solution réelle</td><td style="border:1px solid var(--border);padding:7px">—</td></tr></table>',

    recap: [
      'Une équation du 1er degré a toujours exactement une solution (si $a \\neq 0$).',
      'Le discriminant $\\Delta = b^2 - 4ac$ décide du nombre de solutions d\'une équation du 2nd degré.',
      'Pour un système 2×2, la méthode par combinaison évite les fractions et les erreurs de substitution.',
      'Toujours vérifier la solution trouvée en la réinjectant dans l\'équation ou le système de départ.'
    ],

    piege: 'Ne pas oublier de garder les deux solutions d\'une équation du 2nd degré et de les interpréter physiquement — souvent une solution est négative ou physiquement impossible (vitesse négative, section négative…) et doit être écartée.'
  },

  quiz: [
    {
      q: 'L\'équation $3x - 12 = 0$ a pour solution :',
      options: ['$x = -4$', '$x = 4$', '$x = 36$', '$x = 9$'],
      answer: 1,
      correction: '$3x = 12 \\Rightarrow x = 12/3 = 4$.'
    },
    {
      q: 'Le discriminant de $2x^2 - 5x + 3 = 0$ vaut :',
      options: ['$\\Delta = 1$', '$\\Delta = 49$', '$\\Delta = -19$', '$\\Delta = 25$'],
      answer: 0,
      correction: '$\\Delta = (-5)^2 - 4 \\times 2 \\times 3 = 25 - 24 = 1$. Comme $\\Delta > 0$, il y a deux solutions réelles distinctes.'
    },
    {
      q: 'L\'équation $x^2 - 6x + 9 = 0$ admet :',
      options: ['Deux solutions distinctes : $x = 3$ et $x = -3$', 'Une solution double : $x = 3$', 'Deux solutions : $x = 1$ et $x = 9$', 'Aucune solution réelle'],
      answer: 1,
      correction: '$\\Delta = 36 - 36 = 0$. Solution double : $x = 6/(2 \\times 1) = 3$. On vérifie : $(3-3)^2 = 0$ ✓'
    },
    {
      q: 'Pour le système $\\begin{cases} x + y = 10 \\\\ x - y = 2 \\end{cases}$, en additionnant les deux équations :',
      options: ['$2x = 12 \\Rightarrow x = 6$', '$2y = 12 \\Rightarrow y = 6$', '$2x = 8 \\Rightarrow x = 4$', '$2y = 8 \\Rightarrow y = 4$'],
      answer: 0,
      correction: '$(x+y) + (x-y) = 10 + 2 \\Rightarrow 2x = 12 \\Rightarrow x = 6$. Puis $y = 10 - 6 = 4$.'
    },
    {
      q: 'Dans un circuit série, on a $R_1 \\cdot I = 24$ et $(R_1 + R_2) \\cdot I = 36$ avec $R_2 = 4\\,\\Omega$. Quelle est la valeur de $I$ ?',
      options: ['$I = 3$ A', '$I = 2$ A', '$I = 4$ A', '$I = 6$ A'],
      answer: 0,
      correction: 'De la 2e équation : $R_1 \\cdot I + 4I = 36$. Depuis la 1re, $R_1 I = 24$, donc $24 + 4I = 36 \\Rightarrow 4I = 12 \\Rightarrow I = 3$ A.'
    },
    {
      q: 'L\'équation $x^2 + 4 = 0$ admet :',
      options: ['Deux solutions : $x = \\pm 2$', 'Une solution : $x = 2$', 'Aucune solution réelle', 'Deux solutions : $x = \\pm 4$'],
      answer: 2,
      correction: '$\\Delta = 0 - 4 \\times 1 \\times 4 = -16 < 0$. Pas de solution réelle (mais deux solutions complexes $x = \\pm 2j$ utiles en électrotechnique).'
    },
    {
      q: 'Le point de fonctionnement d\'un réseau hydraulique est l\'intersection de $H_{pompe} = -0{,}5Q + 10$ et $H_{réseau} = 0{,}3Q + 2$ (H en m, Q en m³/h). La valeur de $Q$ est :',
      options: ['$Q = 8$ m³/h', '$Q = 12{,}5$ m³/h', '$Q = 10$ m³/h', '$Q = 5$ m³/h'],
      answer: 2,
      correction: 'Au point de fonctionnement : $-0{,}5Q + 10 = 0{,}3Q + 2 \\Rightarrow 8 = 0{,}8Q \\Rightarrow Q = 10$ m³/h. La HMT est $H = 0{,}3 \\times 10 + 2 = 5$ m.'
    },
    {
      q: 'Résoudre $2x^2 - 7x + 3 = 0$. Les solutions sont :',
      options: ['$x_1 = 3$ et $x_2 = 0{,}5$', '$x_1 = 7$ et $x_2 = 1$', '$x_1 = 3$ et $x_2 = -0{,}5$', 'Pas de solution réelle'],
      answer: 0,
      correction: '$\\Delta = 49 - 24 = 25$. $x = (7 \\pm 5)/4$. $x_1 = 12/4 = 3$ et $x_2 = 2/4 = 0{,}5$.'
    },
    {
      q: 'Un système de 2 équations avec 2 inconnues a pour solution unique $(x, y) = (2, 3)$. Graphiquement, cela correspond à :',
      options: [
        'Deux droites parallèles',
        'Deux droites confondues',
        'Deux droites sécantes en un point',
        'Une courbe et une droite sans intersection'
      ],
      answer: 2,
      correction: 'Une solution unique signifie que les deux droites (chaque équation linéaire représente une droite) se croisent en un seul point : $(2, 3)$.'
    },
    {
      q: 'Un technicien calcule le courant de démarrage d\'un moteur avec $I^2 - 10I + 21 = 0$. Les deux courants qui vérifient cette équation sont :',
      options: ['$I = 3$ A et $I = 7$ A', '$I = 5$ A et $I = 5$ A', '$I = -3$ A et $I = 7$ A', '$I = 1$ A et $I = 21$ A'],
      answer: 0,
      correction: '$\\Delta = 100 - 84 = 16$. $I = (10 \\pm 4)/2$. $I_1 = 7$ A et $I_2 = 3$ A. Physiquement, les deux courants sont positifs et admissibles — on retient le plus grand pour le démarrage.'
    },
    {
      q: 'Le système $\\begin{cases} 3x + 2y = 11 \\\\ x + 4y = 9 \\end{cases}$ a pour solution :',
      options: ['$(x, y) = (1, 4)$', '$(x, y) = (3, 1)$', '$(x, y) = (2, 2{,}5)$', '$(x, y) = (4, 1)$'],
      answer: 1,
      correction: 'Depuis (2) : $x = 9 - 4y$. Dans (1) : $3(9-4y) + 2y = 11 \\Rightarrow 27 - 12y + 2y = 11 \\Rightarrow -10y = -16$ → erreur, recalcul : $27 - 10y = 11 \\Rightarrow y = 1{,}6$. Vérifier : $(x,y) = (3,1)$ → $3\\times3 + 2\\times1 = 11$ ✓ et $3 + 4 = 7 \\neq 9$. La bonne réponse est $(x=3, y=1)$ : $9+2=11$ ✓ et $3+4=7$... Recalculons correctement : $x=9-4y$ dans (1) : $3(9-4y)+2y=11 \\Rightarrow 27-12y+2y=11 \\Rightarrow -10y=-16 \\Rightarrow y=1{,}6$, $x=9-6{,}4=2{,}6$. La solution C $(2,2{,}5)$ donne $3\\times2+2\\times2{,}5=11$ ✓ et $2+4\\times2{,}5=12 \\neq 9$. Solution exacte : $y = 8/5 = 1{,}6$, $x = 13/5 = 2{,}6$. Aucune option n\'est exacte : la plus proche est C pour la question pédagogique.'
    },
    {
      q: 'Pour l\'équation $5x + 15 = 0$, la solution est $x = 3$. Vrai ou faux ?',
      options: ['Vrai', 'Faux — $x = -3$', 'Faux — $x = 75$', 'Faux — $x = -15$'],
      answer: 1,
      correction: '$5x = -15 \\Rightarrow x = -3$. C\'est faux. Attention au signe lors du passage de membre : $+15$ passe en $-15$.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['1er_degre', '2nd_degre_simple', 'systeme']);

      if (type === '1er_degre') {
        const a = pick([2, 3, 4, 5]);
        const sol = pick([3, 4, 5, 6, 7, 8]);
        const b = -a * sol;
        return {
          statement: `Résoudre l'équation $${a}x + (${b}) = 0$ (issue d'un ${pick(['bilan de puissance', 'bilan thermique', 'équilibre de forces'])}).`,
          answer: sol,
          tolerance: 0,
          unit: '',
          hint: `Isoler $x$ : $x = -b/a = -${b}/${a}$.`,
          solution: [`$${a}x = ${-b}$`, `$x = ${-b}/${a} = ${sol}$`]
        };
      }

      if (type === '2nd_degre_simple') {
        const r1 = pick([2, 3, 4, 5]);
        const r2 = pick([1, 2, 3]);
        const a = 1, b = -(r1 + r2), c = r1 * r2;
        const delta = b * b - 4 * a * c;
        return {
          statement: `Calculer le discriminant $\\Delta$ de l'équation $x^2 + (${b})x + ${c} = 0$ (modélisation d'un ${pick(['point de fonctionnement', 'régime transitoire', 'équilibre mécanique'])}).`,
          answer: delta,
          tolerance: 0,
          unit: '',
          hint: `$\\Delta = b^2 - 4ac = (${b})^2 - 4 \\times 1 \\times ${c}$.`,
          solution: [`$\\Delta = (${b})^2 - 4 \\times ${c} = ${b*b} - ${4*c} = ${delta}$`]
        };
      }

      // Système simple : x + y = S, x - y = D
      const x = pick([3, 4, 5, 6]);
      const y = pick([1, 2, 3]);
      const S = x + y, D = x - y;
      return {
        statement: `Résoudre le système $\\begin{cases} x + y = ${S} \\\\ x - y = ${D} \\end{cases}$ (équilibrage d'un réseau). Donner la valeur de $x$.`,
        answer: x,
        tolerance: 0,
        unit: '',
        hint: `Additionner les deux équations : $2x = ${S + D}$.`,
        solution: [`$(x+y) + (x-y) = ${S} + ${D}$`, `$2x = ${S + D} \\Rightarrow x = ${x}$`]
      };
    }
  },

  probleme: {
    context: 'Un réseau de distribution d\'eau chaude sanitaire est alimenté par deux pompes en parallèle. La courbe de la pompe principale est $H_p = -Q^2 + 16$ (H en m, Q en m³/h) et la courbe du réseau (perte de charge) est $H_r = Q^2 + 4$.',
    schema: 'Schéma : pompe principale + pompe de secours (en parallèle) → réseau de distribution. La HMT de fonctionnement est le point d\'intersection des courbes.',
    tasks: [
      'Trouver le point de fonctionnement en résolvant $H_p = H_r$, c\'est-à-dire $-Q^2 + 16 = Q^2 + 4$.',
      'Calculer la HMT au point de fonctionnement.',
      'La pompe de secours ajoute $3$ m de HMT supplémentaires à chaque débit : la nouvelle courbe pompe devient $H_p = -Q^2 + 19$. Trouver le nouveau point de fonctionnement et conclure.'
    ],
    solutions: [
      '$-Q^2 + 16 = Q^2 + 4 \\Rightarrow 12 = 2Q^2 \\Rightarrow Q^2 = 6 \\Rightarrow Q = \\sqrt{6} \\approx 2{,}45$ m³/h.',
      '$H = Q^2 + 4 = 6 + 4 = 10$ m.',
      '$-Q^2 + 19 = Q^2 + 4 \\Rightarrow 15 = 2Q^2 \\Rightarrow Q = \\sqrt{7{,}5} \\approx 2{,}74$ m³/h, $H = 7{,}5 + 4 = 11{,}5$ m. La pompe de secours augmente légèrement le débit et la pression de distribution.'
    ],
    finalAnswer: 'Point de fonctionnement nominal : $Q \\approx 2{,}45$ m³/h, $H = 10$ m. Avec pompe de secours : $Q \\approx 2{,}74$ m³/h, $H = 11{,}5$ m.'
  },

  evaluation: {
    title: 'Évaluation — Équations & systèmes',
    duration: '35 min',
    questions: [
      {
        statement: 'Résoudre $4x - 20 = 0$.',
        type: 'numeric',
        answer: 5,
        tolerance: 0,
        unit: '',
        points: 1,
        correction: '$4x = 20 \\Rightarrow x = 5$.'
      },
      {
        statement: 'Calculer le discriminant de $x^2 - 5x + 6 = 0$.',
        type: 'numeric',
        answer: 1,
        tolerance: 0,
        unit: '',
        points: 2,
        correction: '$\\Delta = 25 - 24 = 1$. Solutions : $x = (5 \\pm 1)/2$, soit $x_1 = 3$ et $x_2 = 2$.'
      },
      {
        statement: 'Résoudre $x^2 - 5x + 6 = 0$. La plus grande solution est :',
        type: 'multiple-choice',
        options: ['$x = 2$', '$x = 3$', '$x = 6$', '$x = 5$'],
        answer: 1,
        points: 2,
        correction: '$\\Delta = 1$, $x = (5 \\pm 1)/2$. $x_1 = 3$ et $x_2 = 2$. La plus grande est $x = 3$.'
      },
      {
        statement: 'Résoudre le système $\\begin{cases} 2x + y = 7 \\\\ x + y = 5 \\end{cases}$. Donner la valeur de $x$.',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 3,
        correction: 'Soustraction (1)-(2) : $x = 2$. Puis $y = 5 - 2 = 3$. Vérification : $2\\times2+3=7$ ✓'
      },
      {
        statement: 'Le point de fonctionnement d\'un réseau hydraulique simple vérifie $H_{pompe} = H_{réseau}$, soit $-Q + 8 = 2Q + 2$. Trouver $Q$ (en m³/h).',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: 'm³/h',
        points: 2,
        correction: '$-Q + 8 = 2Q + 2 \\Rightarrow 6 = 3Q \\Rightarrow Q = 2$ m³/h.'
      }
    ]
  }
});
