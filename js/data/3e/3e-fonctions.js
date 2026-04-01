/* =========================================================
   Spark Learning – data/3e/3e-fonctions.js
   Module : Fonctions – notions de base (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-fonctions',
    level: 1, subject: 'maths',
    icon: '📉',
    title: 'Fonctions – notions de base',
    subtitle: 'Image, antécédent, représentation graphique',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Tableau de valeurs', 'Courbe'],
    physics: true,
    cours: {
      intro: 'Une fonction est une règle qui associe à chaque valeur d\'entrée $x$ une valeur de sortie $f(x)$ — et une seule. C\'est la notion mathématique de « machine déterministe » : une même entrée donne toujours la même sortie. L\'image de $x$ est la valeur de sortie $f(x)$ ; l\'antécédent de $y$ est la (ou les) valeur(s) $x$ qui donnent $f(x) = y$. Un antécédent peut ne pas exister (si $y$ n\'est pas atteint) ou être multiple : $f(x) = x^2$ associe $f(3) = f(-3) = 9$, donc $9$ a deux antécédents. Graphiquement, l\'image se lit sur l\'axe vertical (ordonnée), l\'antécédent sur l\'axe horizontal (abscisse). En physique, toutes les formules ($v = d/t$, $U = RI$) sont des fonctions d\'une ou plusieurs variables.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ d\'un ensemble de départ <strong>une unique</strong> valeur $f(x)$ dans l\'ensemble d\'arrivée. On note $f : x \\mapsto f(x)$.' },
        { term: 'Image', def: 'La valeur $f(a)$ obtenue en remplaçant $x$ par $a$ dans l\'expression de $f$. On dit que $f(a)$ est l\'<strong>image de $a$</strong> par $f$.' },
        { term: 'Antécédent', def: 'Un nombre $a$ tel que $f(a) = b$. On dit que $a$ est un <strong>antécédent de $b$</strong> par $f$. Il peut y en avoir $0$, $1$ ou plusieurs.' },
        { term: 'Domaine de définition', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Par exemple, $f(x) = \\dfrac{1}{x}$ n\'est pas définie pour $x = 0$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Calculer une image : substituer $x$ par la valeur donnée dans l\'expression de $f(x)$.',
          'Trouver un antécédent : résoudre $f(x) = y$ (équation).',
          'Lire sur un graphe : image → lire l\'ordonnée ; antécédent → lire l\'abscisse.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = 2x^2 - 3$. Calculer l\'image de $4$ par $f$, puis trouver le(s) antécédent(s) de $5$ par $f$.',
        steps: [
          '<strong>Image de $4$</strong> : on remplace $x$ par $4$ dans l\'expression.<br/>$f(4) = 2 \\times 4^2 - 3 = 2 \\times 16 - 3 = 32 - 3 = 29$.',
          '<strong>Antécédent(s) de $5$</strong> : on résout $f(x) = 5$.<br/>$2x^2 - 3 = 5 \\Rightarrow 2x^2 = 8 \\Rightarrow x^2 = 4$.',
          'Donc $x = 2$ ou $x = -2$. Les deux antécédents de $5$ par $f$ sont $2$ et $-2$.'
        ],
        answer: '$f(4) = 29$ ; les antécédents de $5$ sont $x = 2$ et $x = -2$.'
      },
      formulas: [
        '$f(x) = $ expression en $x$ (définition de la fonction)',
        'Image de $a$ : calculer $f(a)$',
        'Antécédent de $b$ : résoudre $f(x) = b$',
        'Notation : $x \\mapsto f(x)$ (on lit « $x$ a pour image $f(x)$ »)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px">$x$</th><td style="border:1px solid var(--border);padding:8px">$-2$</td><td style="border:1px solid var(--border);padding:8px">$-1$</td><td style="border:1px solid var(--border);padding:8px">$0$</td><td style="border:1px solid var(--border);padding:8px">$1$</td><td style="border:1px solid var(--border);padding:8px">$2$</td><td style="border:1px solid var(--border);padding:8px">$3$</td></tr><tr><th style="border:1px solid var(--border);padding:8px">$f(x) = 2x^2 - 3$</th><td style="border:1px solid var(--border);padding:8px">$5$</td><td style="border:1px solid var(--border);padding:8px">$-1$</td><td style="border:1px solid var(--border);padding:8px">$-3$</td><td style="border:1px solid var(--border);padding:8px">$-1$</td><td style="border:1px solid var(--border);padding:8px">$5$</td><td style="border:1px solid var(--border);padding:8px">$15$</td></tr><tr><td colspan="7" style="border:1px solid var(--border);padding:8px;font-size:0.9em"><strong>Lecture graphique</strong> : l\'image se lit sur l\'axe des ordonnées (vertical) ; l\'antécédent se lit sur l\'axe des abscisses (horizontal).</td></tr></table>',
      recap: [
        'Une fonction associe à chaque entrée $x$ <strong>une seule sortie</strong> $f(x)$ — c\'est la règle fondamentale.',
        'L\'<strong>image</strong> se lit sur l\'axe des ordonnées : on part de $x$, on monte jusqu\'à la courbe, on lit $f(x)$.',
        'L\'<strong>antécédent</strong> se trouve en résolvant $f(x) = y$ ; il peut y avoir $0$, $1$ ou plusieurs solutions.',
        'Sur un graphique, les antécédents de $y$ correspondent aux abscisses des points d\'intersection de la courbe avec la droite $y = b$.'
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
  }
);
