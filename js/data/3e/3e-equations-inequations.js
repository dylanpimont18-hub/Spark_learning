/* =========================================================
   Spark Learning – data/3e/3e-equations-inequations.js
   Module : Équations et inéquations (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-equations-inequations',
    level: 1, subject: 'maths',
    icon: '⚖️',
    title: 'Équations et inéquations',
    subtitle: 'Résolution, ensemble solution, représentation',
    keywords: ['Équation', 'Inéquation', 'Inconnue', 'Solution', 'Intervalle'],
    physics: true,
    cours: {
      intro: 'Une équation fixe une condition d\'égalité sur $x$ ; on cherche toutes les valeurs qui la rendent vraie. Une inéquation fixe une condition d\'ordre : la solution est un intervalle, pas un point isolé. Les deux se résolvent par les mêmes opérations élémentaires — avec une différence cruciale : multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité. Intuition : si $-x < 3$, alors $x$ est au-delà de $-3$, c\'est-à-dire $x > -3$. En physique, les inéquations apparaissent dans les conditions de validité des modèles : une distance est positive, une probabilité reste entre $0$ et $1$, un courant ne dépasse pas une valeur limite. Toujours vérifier la solution en la substituant dans l\'expression de départ.',
      definitions: [
        { term: 'Équation', def: 'Égalité comportant une <strong>inconnue</strong> $x$. Résoudre une équation, c\'est trouver la (ou les) valeur(s) de $x$ qui rendent l\'égalité vraie.<br/><br/>Exemple : $2x + 3 = 7$ a pour solution $x = 2$.' },
        { term: 'Inéquation', def: 'Inégalité comportant une inconnue $x$ (avec $<$, $>$, $\\leq$ ou $\\geq$). La solution est généralement un <strong>intervalle</strong> de valeurs, pas un nombre unique.<br/><br/>Exemple : $x + 1 > 3$ a pour solution $x > 2$.' },
        { term: 'Solution', def: 'Valeur de l\'inconnue qui rend l\'équation ou l\'inéquation <strong>vraie</strong>. Pour une équation du 1er degré, il y a en général <strong>une seule solution</strong> ; pour une inéquation, c\'est un <strong>ensemble</strong> de valeurs.' },
        { term: 'Intervalle', def: 'Ensemble de nombres compris entre deux bornes. Notation : $[2\\,;\\,5]$ (bornes incluses), $]2\\,;\\,5[$ (bornes exclues), $]-\\infty\\,;\\,3[$ (tous les nombres inférieurs à $3$).' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Développer et réduire les deux membres.',
          'Regrouper les termes en $x$ d\'un côté, les constantes de l\'autre.',
          'Diviser par le coefficient de $x$ (attention : si négatif, inverser le sens de l\'inégalité).',
          'Vérifier en substituant la solution dans l\'expression de départ.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $3(x - 2) > 2x + 1$.',
        steps: [
          '<strong>Développer</strong> le membre de gauche : $3x - 6 > 2x + 1$.',
          '<strong>Regrouper</strong> : on soustrait $2x$ des deux côtés : $x - 6 > 1$, puis on ajoute $6$ : $x > 7$.',
          '<strong>Vérification</strong> : pour $x = 10$ : $3(10-2) = 24$ et $2(10)+1 = 21$, or $24 > 21$ ✓. Pour $x = 5$ : $3(5-2) = 9$ et $2(5)+1 = 11$, or $9 \\not> 11$ ✓ (hors solution).'
        ],
        answer: '$x > 7$, soit $x \\in ]7\\,;\\,+\\infty[$.'
      },
      formulas: [
        'Si $ax = b$ : $x = \\dfrac{b}{a}$ (avec $a \\neq 0$)',
        'Inéquation : si $a < 0$ et $ax < b$, alors $x > \\dfrac{b}{a}$ (sens inversé !)',
        'Notation intervalle : $x > 2 \\Leftrightarrow x \\in ]2 ; +\\infty[$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px"></th><th style="border:1px solid var(--border);padding:8px">Équation</th><th style="border:1px solid var(--border);padding:8px">Inéquation</th></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Symbole</strong></td><td style="border:1px solid var(--border);padding:8px">$=$</td><td style="border:1px solid var(--border);padding:8px">$<$, $>$, $\\leq$, $\\geq$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Opérations autorisées</strong></td><td style="border:1px solid var(--border);padding:8px">Ajouter, soustraire, multiplier, diviser (sauf par $0$)</td><td style="border:1px solid var(--border);padding:8px">Idem, mais $\\times$ ou $\\div$ par un négatif <strong>inverse le sens</strong></td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Résultat</strong></td><td style="border:1px solid var(--border);padding:8px">Une valeur unique : $x = a$</td><td style="border:1px solid var(--border);padding:8px">Un intervalle : $x \\in ]a\\,;\\,+\\infty[$</td></tr><tr><td style="border:1px solid var(--border);padding:8px"><strong>Notation</strong></td><td style="border:1px solid var(--border);padding:8px">$S = \\{a\\}$</td><td style="border:1px solid var(--border);padding:8px">$S = ]a\\,;\\,+\\infty[$ ou $S = ]-\\infty\\,;\\,a[$</td></tr></table>',
      recap: [
        '<strong>Principe de la balance</strong> : on effectue la même opération des deux côtés de l\'égalité (ou inégalité) pour isoler $x$.',
        '<strong>Inversion du sens</strong> : multiplier ou diviser par un nombre <strong>négatif</strong> inverse le sens de l\'inégalité. C\'est LA différence majeure entre équation et inéquation.',
        '<strong>Vérification</strong> : toujours substituer la solution trouvée dans l\'expression initiale pour confirmer le résultat.',
        '<strong>Notation intervalle</strong> : $x > a$ s\'écrit $x \\in ]a\\,;\\,+\\infty[$, $x \\leq a$ s\'écrit $x \\in ]-\\infty\\,;\\,a]$. Les crochets sont tournés vers l\'extérieur pour les bornes exclues.'
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
  }
);
