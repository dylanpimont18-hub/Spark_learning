/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-equations-inequations.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-equations-inequations',
    level: 2, subject: 'maths',
    icon: '⚖️',
    title: 'Équations et inéquations du 1er degré',
    subtitle: 'Résoudre et représenter les solutions',
    keywords: ['Équation', 'Inéquation', 'Intervalle solution', 'Premier degré'],
    physics: false,
    cours: {
      intro: 'Une équation du premier degré établit une condition d\'égalité sur une inconnue $x$ : on cherche la valeur qui la rend vraie. Une inéquation remplace l\'égalité par une relation d\'ordre ($<$, $>$, $\\leq$, $\\geq$) et la solution est généralement un intervalle infini. Les deux se résolvent par les mêmes opérations élémentaires — avec une règle d\'or pour les inéquations : toute multiplication ou division par un nombre négatif inverse le sens de l\'inégalité. En physique et en économie, les inéquations décrivent naturellement des contraintes (distance positive, seuil de rentabilité, condition de validité). Exprimer les solutions sous forme d\'intervalle ($]-\\infty ; 2[$, $[3;+\\infty[$…) permet une lecture immédiate.',
      definitions: [
        { term: 'Équation du 1er degré', def: 'Relation $ax + b = 0$ où $a \\neq 0$. Elle admet une unique solution : $x = -b/a$.' },
        { term: 'Inéquation', def: 'Relation d\'ordre portant sur une inconnue ($ax + b < 0$, $\\geq$, etc.). L\'ensemble des solutions est un intervalle.' },
        { term: 'Ensemble solution', def: 'L\'ensemble de toutes les valeurs de $x$ qui vérifient l\'équation ou l\'inéquation. Noté sous forme d\'intervalle pour les inéquations.' },
        { term: 'Valeur test', def: 'Valeur numérique substituée dans l\'inéquation pour vérifier que la solution est correcte.' }
      ],
      method: {
        title: 'Résoudre une inéquation',
        steps: [
          'Isoler l\'inconnue en appliquant les mêmes opérations des deux côtés. <strong>Exemple :</strong> $3x + 7 > 1$ → $3x > -6$.',
          'Multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité. <strong>Exemple :</strong> $-2x > 6$ → on divise par $-2$ et on inverse : $x < -3$.',
          'Exprimer la solution en notation intervalle. <strong>Exemple :</strong> $x < -3$ s\'écrit $]-\\infty ; -3[$.',
          'Vérifier avec une valeur test. <strong>Exemple :</strong> Prendre $x = -5$ (dans $]-\\infty ; -3[$) : $-2 \\times (-5) = 10 > 6$ ✓.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-5x + 3 \\geq 18$.',
        steps: [
          'Isoler le terme en $x$ : $-5x \\geq 18 - 3$, soit $-5x \\geq 15$.',
          'Diviser par $-5$ (négatif !) et inverser le sens : $x \\leq \\dfrac{15}{-5} = -3$.',
          'Ensemble solution : $]-\\infty ; -3]$.',
          'Vérification : pour $x = -4$ (dans l\'intervalle) : $-5 \\times (-4) + 3 = 23 \\geq 18$ ✓.'
        ],
        answer: '$S = ]-\\infty ; -3]$.'
      },
      formulas: [
        '$ax + b = 0 \\Rightarrow x = -\\dfrac{b}{a}$ (si $a \\ne 0$)',
        'Si $a > 0$ : $ax < c \\Rightarrow x < \\dfrac{c}{a}$',
        'Si $a < 0$ : $ax < c \\Rightarrow x > \\dfrac{c}{a}$ (inversion !)'
      ],
      recap: [
        'Équation du 1er degré : isoler $x$ par opérations réversibles ; une unique solution.',
        'Inéquation : même méthode, mais inverser le sens si on multiplie/divise par un négatif.',
        'La solution d\'une inéquation est un intervalle (souvent infini) à exprimer en notation correcte.',
        'Toujours vérifier avec une valeur test appartenant à l\'intervalle trouvé.'
      ],
      piege: 'Diviser par $-2$ transforme $<$ en $>$. C\'est l\'erreur la plus fréquente dans les inéquations !'
    },
    quiz: [
      { q: 'Un élève résout $-4x + 8 > 0$ et obtient $x > 2$. Quelle est son erreur ?', options: ['Il a oublié d\'inverser l\'inégalité en divisant par $-4$ : la solution correcte est $x < 2$', 'Il n\'y a pas d\'erreur, $x > 2$ est correct', 'Il devait soustraire $8$ des deux membres, pas diviser', 'La solution est $x > -2$'], answer: 0, correction: '$-4x + 8 > 0 \\Rightarrow -4x > -8 \\Rightarrow x < \\frac{-8}{-4} = 2$. Diviser par $-4$ (négatif) inverse $>$ en $<$. La solution correcte est $]-\\infty ; 2[$.' },
      { q: 'Résoudre $-2x + 4 > 0$', options: ['$x>2$', '$x<2$', '$x>-2$', '$x<-2$'], answer: 1, correction: '$-2x > -4 \\Rightarrow x < 2$ (division par $-2$, inversion du sens).' },
      { q: 'L\'ensemble solution de $5x + 1 \\le 11$ est :', options: ['$[2;+\\infty[$', '$]-\\infty;2]$', '$]-\\infty;2[$', '$[2;11]$'], answer: 1, correction: '$5x \\le 10 \\Rightarrow x \\le 2$, soit $]-\\infty;2]$.' },
      { q: 'Résoudre l\'inéquation $3(x - 2) \\geq 2(x + 1)$. L\'ensemble solution est :', options: ['$[8;+\\infty[$', '$]-\\infty;8]$', '$[4;+\\infty[$', '$]-\\infty;4]$'], answer: 0, correction: '$3x - 6 \\geq 2x + 2 \\Rightarrow 3x - 2x \\geq 2 + 6 \\Rightarrow x \\geq 8$. Ensemble solution : $[8;+\\infty[$. Bien développer avant de regrouper les termes : c\'est une source d\'erreur classique quand on oublie de distribuer le coefficient à tous les termes entre parenthèses.' },
      { q: 'L\'équation $3x + 5 = 3x - 2$ admet :', options: ['Aucune solution (impossible : $5 = -2$)', 'Une infinité de solutions', '$x = 0$', '$x = 7/6$'], answer: 0, correction: '$3x + 5 = 3x - 2 \\Rightarrow 5 = -2$, ce qui est une contradiction. L\'équation n\'admet aucune solution. On écrit $S = \\varnothing$. Cela se produit lorsque les deux membres ont le même coefficient en $x$ mais des constantes différentes.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un plombier facture un déplacement fixe et un tarif horaire. Le coût total est', var: 'h', unit: 'heures' },
          { intro: 'Un forfait téléphonique inclut un abonnement fixe et un coût par Go. La facture est', var: 'g', unit: 'Go' },
          { intro: 'Un artisan facture des frais fixes et un tarif au mètre carré. Le devis est', var: 'm', unit: 'm²' }
        ];
        const ctx = pick(contexts);
        const a = rand(2, 8);
        const b = rand(5, 30);
        const negCoeff = -rand(2, 5);
        const c = rand(b + 5, b + 40);
        const sol = (c - b) / a;
        if (!Number.isInteger(sol) || sol < 1) {
          const a2 = rand(2, 6), b2 = rand(3, 15), ans2 = rand(2, 8);
          const rhs = negCoeff * ans2 + c;
          const lhs_a = a2;
          const total = a2 * ans2 + b2;
          return {
            statement: `Résoudre l'inéquation $${a2}x + ${b2} > ${total}$ et donner l'ensemble solution sous forme d'intervalle.<br/><br/>Quelle est la borne de l'intervalle solution ?`,
            answer: ans2,
            tolerance: 0,
            unit: '',
            hint: `$${a2}x > ${total} - ${b2} = ${total - b2}$, puis diviser par $${a2}$.`,
            solution: [
              `$${a2}x + ${b2} > ${total}$`,
              `$${a2}x > ${total - b2}$`,
              `$x > ${ans2}$`,
              `Ensemble solution : $]${ans2};+\\infty[$`
            ]
          };
        }
        return {
          statement: `${ctx.intro} $C = ${a}${ctx.var} + ${b}$ (en €). Un client dispose d'un budget maximal de $${c}$ €.<br/><br/><strong>1.</strong> Résoudre l'inéquation $${a}${ctx.var} + ${b} \\leq ${c}$ pour trouver le nombre maximal de ${ctx.unit}.<br/><strong>2.</strong> Exprimer la solution en notation intervalle.<br/><br/>Donne la borne supérieure de l'intervalle (nombre maximal de ${ctx.unit}).`,
          answer: sol,
          tolerance: 0,
          unit: ctx.unit,
          hint: `$${a}${ctx.var} \\leq ${c} - ${b} = ${c-b}$, puis diviser par $${a}$.`,
          solution: [
            `$${a}${ctx.var} + ${b} \\leq ${c}$`,
            `$${a}${ctx.var} \\leq ${c} - ${b} = ${c-b}$`,
            `$${ctx.var} \\leq \\frac{${c-b}}{${a}} = ${sol}$`,
            `Ensemble solution : $]0;${sol}]$ (en ${ctx.unit})`
          ]
        };
      }
    },
    probleme: {
      context: 'Une salle de cinéma propose deux formules :<br/>- <strong>Formule A</strong> : carte d\'abonnement à $30$ € + $5$ € par séance.<br/>- <strong>Formule B</strong> : pas d\'abonnement, $8{,}50$ € par séance.<br/>Un spectateur hésite entre les deux.',
      tasks: [
        'Exprimer le coût total $C_A(n)$ et $C_B(n)$ en fonction du nombre de séances $n$.',
        'Résoudre l\'inéquation $C_A(n) < C_B(n)$ pour déterminer à partir de combien de séances la formule A est avantageuse.',
        'Vérifier la réponse en calculant les coûts pour la valeur seuil et la valeur suivante.'
      ],
      solutions: [
        '$C_A(n) = 5n + 30$ ; $C_B(n) = 8{,}5n$.',
        '$5n + 30 < 8{,}5n \\Rightarrow 30 < 3{,}5n \\Rightarrow n > \\frac{30}{3{,}5} \\approx 8{,}57$. Donc à partir de $n = 9$ séances.',
        'Pour $n = 8$ : $C_A = 70$ €, $C_B = 68$ € → B est moins cher. Pour $n = 9$ : $C_A = 75$ €, $C_B = 76{,}5$ € → A est moins cher ✓.'
      ],
      finalAnswer: 'La formule A est avantageuse à partir de $9$ séances.'
    },

    evaluation: {
      title: 'Évaluation — Équations et inéquations du 1er degré',
      duration: '25 min',
      questions: [
        {
          statement: 'Résoudre $7x - 3 = 25$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$7x - 3 = 25 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.'
        },
        {
          statement: 'Résoudre $-3x + 9 > 0$. L\'ensemble des solutions est :',
          type: 'multiple-choice',
          options: ['$x > 3$', '$x < 3$', '$x > -3$', '$x < -3$'],
          answer: 1,
          points: 2,
          correction: '$-3x + 9 > 0 \\Rightarrow -3x > -9 \\Rightarrow x < 3$ (on divise par $-3$, on inverse le sens de l\'inégalité). Ensemble solution : $]-\\infty ; 3[$.'
        },
        {
          statement: 'Résoudre $\\dfrac{2x+1}{3} = 5$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\dfrac{2x+1}{3} = 5 \\Rightarrow 2x + 1 = 15 \\Rightarrow 2x = 14 \\Rightarrow x = 7$.'
        },
        {
          statement: 'L\'ensemble solution de $4x - 2 \\geq 10$ est :',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 3]$', '$[3 ; +\\infty[$', '$]-\\infty ; 2]$', '$[2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: '$4x - 2 \\geq 10 \\Rightarrow 4x \\geq 12 \\Rightarrow x \\geq 3$. Ensemble solution : $[3 ; +\\infty[$.'
        },
        {
          statement: 'Résoudre $5 - 2x = 3x + 15$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5 - 2x = 3x + 15 \\Rightarrow 5 - 15 = 3x + 2x \\Rightarrow -10 = 5x \\Rightarrow x = -2$.'
        }
      ]
    }
  });
