/* =========================================================
   Spark Learning – data/5e/5e-statistiques.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-statistiques',
    level: 1, subject: 'maths',
    icon: '📈',
    title: 'Statistiques descriptives',
    subtitle: 'Moyenne, étendue, effectifs, fréquences',
    keywords: ['Moyenne', 'Étendue', 'Effectif', 'Fréquence', 'Tableau', 'Diagramme'],
    physics: false,

    cours: {
      intro: 'Les statistiques résument une série de données par quelques <strong>indicateurs clés</strong>. La <strong>moyenne</strong> donne la valeur « typique » mais peut être trompée par des valeurs extrêmes.<br/><br/>' +
        'Exemple : si $9$ élèves ont $10$/20 et $1$ élève a $100$/20 (erreur), la moyenne passe à $19$ — complètement faussée. C\'est pourquoi la médiane (valeur du milieu) est parfois plus représentative.<br/><br/>' +
        'L\'<strong>étendue</strong> mesure la dispersion (différence max − min) mais ne dit rien sur la répartition des valeurs entre les deux extrêmes.<br/><br/>' +
        'Pour calculer une <strong>moyenne pondérée</strong> : multiplier chaque valeur par son effectif (ou coefficient), sommer, diviser par l\'effectif total. Ne pas faire la moyenne des valeurs sans tenir compte des effectifs !',
      definitions: [
        { term: 'Moyenne', def: 'Somme de toutes les valeurs divisée par le nombre de valeurs : $\\bar{x} = \\dfrac{\\sum x_i}{n}$.' },
        { term: 'Étendue', def: 'Différence entre la plus grande et la plus petite valeur de la série : $e = x_{\\max} - x_{\\min}$.' },
        { term: 'Effectif', def: 'Nombre de fois qu\'une valeur apparaît dans la série. L\'effectif total $N$ est la somme de tous les effectifs.' },
        { term: 'Fréquence', def: 'Proportion d\'une valeur dans la série : $f = \\dfrac{n_i}{N}$ (entre 0 et 1) ou $\\times 100$ pour un pourcentage.' }
      ],
      example: {
        statement: 'Dans une classe, $4$ élèves ont $8$/20, $6$ ont $12$/20 et $5$ ont $16$/20. Calcule la moyenne.',
        steps: [
          'Effectif total : $N = 4 + 6 + 5 = 15$.',
          'Somme pondérée : $4 \\times 8 + 6 \\times 12 + 5 \\times 16 = 32 + 72 + 80 = 184$.',
          'Moyenne : $\\bar{x} = \\dfrac{184}{15} \\approx 12{,}27$.'
        ],
        answer: '$\\bar{x} \\approx 12{,}27$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Indicateur</th><th style="border:1px solid var(--border);padding:6px 14px">Formule</th><th style="border:1px solid var(--border);padding:6px 14px">Ce qu\'il mesure</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Moyenne</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{\\sum x_i \\cdot n_i}{N}$</td><td style="border:1px solid var(--border);padding:6px 14px">Valeur « typique » (sensible aux extrêmes)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Étendue</td><td style="border:1px solid var(--border);padding:6px 14px">$x_{\\max} - x_{\\min}$</td><td style="border:1px solid var(--border);padding:6px 14px">Dispersion globale</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Fréquence</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{n_i}{N}$</td><td style="border:1px solid var(--border);padding:6px 14px">Proportion de chaque valeur</td></tr></table>',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Organiser les données dans un tableau (valeurs, effectifs, effectifs cumulés).',
          'Calculer la moyenne : $\\bar{x} = \\dfrac{\\text{somme de toutes les valeurs}}{\\text{nombre de valeurs}} = \\dfrac{\\sum x_i \\cdot n_i}{\\sum n_i}$.',
          'Calculer l\'étendue : $e = x_{\\max} - x_{\\min}$.',
          'Calculer les fréquences : $f_i = \\dfrac{n_i}{N} \\times 100\\%$.'
        ]
      },
      formulas: [
        '$\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N}$ (moyenne pondérée)',
        'Étendue : $e = x_{\\max} - x_{\\min}$',
        'Fréquence : $f_i = \\dfrac{n_i}{N}$ (entre $0$ et $1$) ou $\\dfrac{n_i}{N} \\times 100$ (en %)'
      ],
      recap: [
        'Moyenne = somme des valeurs ÷ nombre de valeurs (attention aux coefficients !).',
        'L\'étendue ne mesure que la « largeur » de la série, pas sa répartition.',
        'La moyenne n\'est pas forcément une valeur présente dans la série.',
        'Fréquence en % = effectif de la valeur ÷ effectif total × 100.'
      ],
      piege: 'Piège : la moyenne n\'est pas forcément une valeur de la série ! Si les notes sont $4, 8, 12$, la moyenne est $8$ — qui est bien une valeur. Mais avec $3, 8, 12$, la moyenne est $\\frac{23}{3} \\approx 7{,}67$, valeur absente de la série.'
    },

    quiz: [
      {
        q: 'Les notes d\'une élève sont : $12, 15, 8, 14, 11$. Quelle est sa moyenne ?',
        options: ['$12$', '$11$', '$11{,}5$', '$12{,}5$'],
        answer: 0,
        correction: '$\\bar{x} = \\dfrac{12 + 15 + 8 + 14 + 11}{5} = \\dfrac{60}{5} = 12$.'
      },
      {
        q: 'Dans une classe, les tailles (en cm) varient de $148$ à $182$. Quelle est l\'étendue ?',
        options: ['$164$ cm', '$34$ cm', '$30$ cm', '$182$ cm'],
        answer: 1,
        correction: 'Étendue $= x_{\\max} - x_{\\min} = 182 - 148 = 34$ cm.'
      },
      {
        q: 'Un élève a les notes $10, 12, 14$ en mathématiques (coeff. 1) et $8$ en sport (coeff. 3). Il calcule sa moyenne générale comme $\\dfrac{10+12+14+8}{4} = 11$. Quelle est son erreur ?',
        options: [
          'Il n\'a pas fait d\'erreur : la moyenne vaut $11$.',
          'Il a oublié les coefficients : $\\bar{x} = \\dfrac{10 \\times 1 + 12 \\times 1 + 14 \\times 1 + 8 \\times 3}{1+1+1+3} = \\dfrac{60}{6} = 10$.',
          'La bonne méthode est de multiplier la moyenne des maths par $3$ et celle du sport par $1$.',
          'Il faut diviser par le nombre de matières, pas par la somme des coefficients.'
        ],
        answer: 1,
        correction: 'Une moyenne pondérée tient compte des coefficients : $\\bar{x} = \\dfrac{10 + 12 + 14 + 8 \\times 3}{1+1+1+3} = \\dfrac{36+24}{6} = \\dfrac{60}{6} = 10$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { theme: 'notes d\'un contrôle de maths', emoji: '📝' },
          { theme: 'températures de la semaine', emoji: '🌡️' },
          { theme: 'scores au dernier match', emoji: '⚽' },
          { theme: 'tailles des élèves (en cm)', emoji: '📏' }
        ]);
        const n = rand(4, 6);
        const vals = Array.from({length: n}, () => rand(5, 18));
        const sum = vals.reduce((a, b) => a + b, 0);
        const mean = parseFloat((sum / n).toFixed(1));
        return {
          statement: `${ctx.emoji} Calcule la moyenne de ces ${ctx.theme} : $${vals.join(', ')}$.`,
          answer: mean,
          tolerance: 0.1,
          unit: '',
          hint: `Additionne toutes les valeurs, puis divise par $${n}$.`,
          solution: [
            `Somme : $${vals.join(' + ')} = ${sum}$.`,
            `Moyenne : $${sum} \\div ${n} = ${mean}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un professeur relève les scores (sur 20) de sa classe lors d\'un contrôle. Résultats : $7, 9, 12, 14, 14, 15, 16, 8, 11, 10$.',
      tasks: [
        'Calcule la moyenne de la classe.',
        'Calcule l\'étendue.',
        'Combien d\'élèves ont une note supérieure ou égale à la moyenne ? Quelle est leur fréquence ?'
      ],
      solutions: [
        '$\\bar{x} = \\dfrac{7+9+12+14+14+15+16+8+11+10}{10} = \\dfrac{116}{10} = 11{,}6$.',
        'Étendue : $16 - 7 = 9$.',
        'Notes $\\geq 11{,}6$ : $12, 14, 14, 15, 16$ → $5$ élèves. Fréquence : $\\dfrac{5}{10} = 50\\%$.'
      ],
      finalAnswer: 'Moyenne $11{,}6$/20 ; étendue $9$ ; $50\\%$ des élèves sont au-dessus de la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques descriptives',
      duration: '25 min',
      questions: [
        {
          statement: 'Les notes d\'un contrôle sont : $8, 11, 13, 15, 9, 14$. Quelle est la moyenne ?',
          type: 'numeric',
          answer: 11.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{8 + 11 + 13 + 15 + 9 + 14}{6} = \\dfrac{70}{6} \\approx 11{,}67$.'
        },
        {
          statement: 'Les tailles (en cm) de $5$ élèves sont : $152, 148, 165, 170, 155$. Quelle est l\'étendue ?',
          type: 'numeric',
          answer: 22,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Étendue $= x_{\\max} - x_{\\min} = 170 - 148 = 22$ cm.'
        },
        {
          statement: 'Dans un groupe, $4$ élèves ont $12$/20 et $6$ élèves ont $16$/20. Quelle est la moyenne du groupe ?',
          type: 'numeric',
          answer: 14.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Moyenne pondérée : $\\bar{x} = \\dfrac{4 \\times 12 + 6 \\times 16}{4 + 6} = \\dfrac{48 + 96}{10} = \\dfrac{144}{10} = 14{,}4$.'
        },
        {
          statement: 'Sur $25$ élèves, $10$ ont choisi le football. Quelle est la fréquence du football en pourcentage ?',
          type: 'numeric',
          answer: 40,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Fréquence $= \\dfrac{10}{25} \\times 100 = 40\\%$.'
        },
        {
          statement: 'Un élève affirme : « la moyenne de $3, 7$ et $11$ est forcément l\'une de ces trois valeurs ». A-t-il raison ?',
          type: 'multiple-choice',
          options: [
            'Oui, la moyenne est toujours l\'une des valeurs de la série.',
            'Non, la moyenne est $7$ qui est bien une valeur de la série, mais ce n\'est qu\'une coïncidence — la moyenne peut ne pas être une valeur de la série.',
            'Non, la moyenne est $21$.',
            'Oui, la moyenne est toujours la valeur du milieu.'
          ],
          answer: 1,
          points: 2,
          correction: '$\\bar{x} = \\dfrac{3 + 7 + 11}{3} = \\dfrac{21}{3} = 7$. Ici $7$ est dans la série, mais c\'est un hasard. Avec $3, 8, 11$ : $\\bar{x} = \\dfrac{22}{3} \\approx 7{,}33$, qui n\'est pas une valeur de la série.'
        }
      ]
    }
  });
