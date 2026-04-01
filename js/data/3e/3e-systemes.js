/* =========================================================
   Spark Learning – data/3e/3e-systemes.js
   Module : Systèmes d'équations (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-systemes',
    level: 1, subject: 'maths',
    icon: '🔗',
    title: "Systèmes d'équations",
    subtitle: 'Substitution, combinaison, deux inconnues',
    keywords: ['Système', 'Substitution', 'Addition', 'Élimination', 'Deux inconnues'],
    physics: 'Lois de Kirchhoff (tensions et courants), mélange de solutions, bilan forces',

    cours: {
      intro: 'Un système de deux équations à deux inconnues apparaît dès qu\'un problème met en jeu deux quantités liées par deux relations indépendantes. La substitution isole une variable dans une équation et la remplace dans l\'autre ; la combinaison (addition) choisit un coefficient pour éliminer directement une variable — plus rapide quand les coefficients s\'y prêtent. En physique, les lois de Kirchhoff pour les circuits électriques et les bilans de mélange en chimie donnent naturellement des systèmes. L\'étape de vérification est indispensable : une erreur de substitution peut donner un résultat qui satisfait une équation mais pas l\'autre, et seul le test dans LES DEUX équations permet de le détecter.',
      definitions: [
        { term: 'Système d\'équations', def: 'Ensemble de <strong>deux équations</strong> à <strong>deux inconnues</strong> ($x$ et $y$) que l\'on doit résoudre <strong>simultanément</strong>. La solution est le couple $(x\\,;\\,y)$ qui vérifie les deux équations en même temps.' },
        { term: 'Substitution', def: 'Méthode qui consiste à <strong>isoler une inconnue</strong> dans une équation (par exemple $y = 7 - 2x$) puis à <strong>remplacer</strong> cette expression dans l\'autre équation pour ne garder qu\'une seule inconnue.' },
        { term: 'Combinaison (addition)', def: 'Méthode qui consiste à <strong>multiplier</strong> une ou deux équations par des coefficients bien choisis, puis à les <strong>additionner</strong> pour éliminer directement une inconnue.' },
        { term: 'Solution du système', def: 'Le couple $(x\\,;\\,y)$ qui satisfait <strong>les deux équations</strong> simultanément. Un système peut avoir une solution unique, aucune solution (droites parallèles) ou une infinité (droites confondues).' }
      ],
      method: {
        title: 'Deux méthodes',
        steps: [
          'Substitution : exprimer une inconnue en fonction de l\'autre à partir d\'une équation, puis substituer dans la seconde.',
          'Combinaison (addition) : multiplier une équation par un coefficient pour que l\'un des termes s\'annule lors de l\'addition des deux équations.',
          'Vérification obligatoire : réinjecter les valeurs trouvées dans LES DEUX équations de départ.'
        ]
      },
      example: {
        statement: 'Résoudre le système $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ par la méthode de combinaison.',
        steps: [
          '<strong>Addition des deux équations</strong> : $(2x + y) + (x - y) = 7 + 2$, soit $3x = 9$, donc $x = 3$.',
          '<strong>Substitution de $x$</strong> dans la 2e équation : $3 - y = 2$, donc $y = 1$.',
          '<strong>Vérification</strong> : dans la 1ère : $2(3) + 1 = 7$ ✓ ; dans la 2e : $3 - 1 = 2$ ✓. Le couple $(3\\,;\\,1)$ est bien la solution.'
        ],
        answer: 'La solution du système est $(x\\,;\\,y) = (3\\,;\\,1)$.'
      },
      formulas: [
        '$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$',
        'Par substitution : $x = \\dfrac{c - by}{a}$ puis substituer.',
        'Par combinaison : multiplier pour éliminer une variable.'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px"></th><th style="border:1px solid var(--border);padding:8px">Substitution</th><th style="border:1px solid var(--border);padding:8px">Combinaison (addition)</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Quand l\'utiliser ?</strong></td><td style="border:1px solid var(--border);padding:8px">Quand une inconnue a un coefficient $1$ ou $-1$</td><td style="border:1px solid var(--border);padding:8px">Quand les coefficients sont quelconques ou se prêtent bien à l\'élimination</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Avantage</strong></td><td style="border:1px solid var(--border);padding:8px">Simple et directe, facile à comprendre</td><td style="border:1px solid var(--border);padding:8px">Rapide, évite les fractions</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Inconvénient</strong></td><td style="border:1px solid var(--border);padding:8px">Peut donner des fractions compliquées</td><td style="border:1px solid var(--border);padding:8px">Nécessite de bien choisir les coefficients multiplicateurs</td></tr></table>',
      recap: [
        '<strong>Deux méthodes</strong> : la substitution isole puis remplace ; la combinaison multiplie puis additionne pour éliminer une inconnue.',
        '<strong>Vérification obligatoire</strong> : toujours tester le couple trouvé dans les DEUX équations de départ. Une seule ne suffit pas !',
        '<strong>Cas particuliers</strong> : si les deux droites sont parallèles, le système n\'a aucune solution ; si elles sont confondues, il en a une infinité.',
        '<strong>En physique</strong> : les lois de Kirchhoff et les bilans de mélange donnent naturellement des systèmes à résoudre.'
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
  }
);
