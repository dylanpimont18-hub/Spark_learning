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
      intro: 'Une <strong>fonction</strong> est une règle qui associe à chaque valeur d\'entrée $x$ une valeur de sortie $f(x)$ — <strong>et une seule</strong>. C\'est la « machine déterministe » des mathématiques : une même entrée donne toujours la même sortie.<br/><br/>' +
        'L\'<strong>image</strong> de $x$ est la valeur obtenue $f(x)$. L\'<strong>antécédent</strong> de $y$ est la (ou les) valeur(s) $x$ telles que $f(x) = y$. Un antécédent peut ne pas exister, ou être multiple : pour $f(x) = x^2$, le nombre $9$ a deux antécédents ($3$ et $-3$).<br/><br/>' +
        'Graphiquement : l\'<strong>image</strong> se lit sur l\'axe vertical (ordonnée) ; l\'<strong>antécédent</strong> se lit sur l\'axe horizontal (abscisse).<br/><br/>' +
        'En physique, toutes les formules ($v = d/t$, $U = RI$) sont des <strong>fonctions de variables</strong> — la notion est universelle.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ d\'un ensemble de départ <strong>une unique</strong> valeur $f(x)$ dans l\'ensemble d\'arrivée. On note $f : x \\mapsto f(x)$.' },
        { term: 'Image', def: 'La valeur $f(a)$ obtenue en remplaçant $x$ par $a$ dans l\'expression de $f$. On dit que $f(a)$ est l\'<strong>image de $a$</strong> par $f$.' },
        { term: 'Antécédent', def: 'Un nombre $a$ tel que $f(a) = b$. On dit que $a$ est un <strong>antécédent de $b$</strong> par $f$. Il peut y en avoir $0$, $1$ ou plusieurs.' },
        { term: 'Domaine de définition', def: 'Ensemble des valeurs de $x$ pour lesquelles $f(x)$ existe. Par exemple, $f(x) = \\dfrac{1}{x}$ n\'est pas définie pour $x = 0$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Calculer une image</strong> : remplacer $x$ par la valeur donnée dans l\'expression de $f(x)$.<br/><em>Exemple :</em> $f(x) = 2x + 1$, image de $3$ : $f(3) = 2 \\times 3 + 1 = 7$.',
          '<strong>Trouver un antécédent</strong> : résoudre l\'équation $f(x) = y$, puis exprimer $x$.<br/><em>Exemple :</em> antécédent de $7$ : $2x + 1 = 7 \\Rightarrow x = 3$.',
          '<strong>Lire sur un graphe</strong> : image → lire l\'ordonnée (axe vertical) ; antécédent → lire l\'abscisse (axe horizontal).'
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
      diagram: {
        theme: 'maths',
        kicker: 'Lecture graphique',
        title: 'Lire une image et des antécédents sur une courbe',
        description: 'Exemple visuel pour $f(x) = 2x^2 - 3$. Les pointillés montrent comment lire $f(2) = 5$ et pourquoi $5$ admet deux antécédents.',
        svg: `
          <svg viewBox="0 0 360 240" role="img" aria-labelledby="fonctions-graph-title fonctions-graph-desc">
            <title id="fonctions-graph-title">Courbe de la fonction f(x)=2x²-3</title>
            <desc id="fonctions-graph-desc">Le graphique met en évidence l'image de 2, égale à 5, et les deux antécédents de 5 : -2 et 2.</desc>
            <rect x="26" y="18" width="308" height="176" rx="18" fill="transparent"></rect>
            <line class="grid-line" x1="42" y1="28.5" x2="318" y2="28.5"></line>
            <line class="grid-line" x1="42" y1="71" x2="318" y2="71"></line>
            <line class="grid-line" x1="42" y1="113.5" x2="318" y2="113.5"></line>
            <line class="grid-line" x1="42" y1="156" x2="318" y2="156"></line>
            <line class="grid-line" x1="42" y1="181.5" x2="318" y2="181.5"></line>
            <line class="grid-line" x1="42" y1="28.5" x2="42" y2="190"></line>
            <line class="grid-line" x1="88" y1="28.5" x2="88" y2="190"></line>
            <line class="grid-line" x1="134" y1="28.5" x2="134" y2="190"></line>
            <line class="grid-line" x1="180" y1="28.5" x2="180" y2="190"></line>
            <line class="grid-line" x1="226" y1="28.5" x2="226" y2="190"></line>
            <line class="grid-line" x1="272" y1="28.5" x2="272" y2="190"></line>
            <line class="grid-line" x1="318" y1="28.5" x2="318" y2="190"></line>
            <line class="axis" x1="42" y1="156" x2="326" y2="156"></line>
            <line class="axis" x1="180" y1="190" x2="180" y2="20"></line>
            <polyline class="curve-main" points="42,28.5 65,75.25 88,113.5 111,143.25 134,164.5 157,177.25 180,181.5 203,177.25 226,164.5 249,143.25 272,113.5 295,75.25 318,28.5"></polyline>
            <line class="focus-line" x1="88" y1="113.5" x2="272" y2="113.5"></line>
            <line class="guide-line" x1="88" y1="113.5" x2="88" y2="156"></line>
            <line class="guide-line" x1="272" y1="113.5" x2="272" y2="156"></line>
            <line class="guide-line" x1="272" y1="156" x2="272" y2="113.5"></line>
            <circle class="plot-point-alt" cx="88" cy="113.5" r="6"></circle>
            <circle class="plot-point" cx="272" cy="113.5" r="6"></circle>
            <circle class="plot-point-alt" cx="180" cy="181.5" r="6"></circle>
            <text class="axis-label" x="330" y="160">x</text>
            <text class="axis-label" x="186" y="24">f(x)</text>
            <text class="tick-label" x="37" y="160">-3</text>
            <text class="tick-label" x="82" y="160">-2</text>
            <text class="tick-label" x="129" y="160">-1</text>
            <text class="tick-label" x="176" y="160">0</text>
            <text class="tick-label" x="222" y="160">1</text>
            <text class="tick-label" x="268" y="160">2</text>
            <text class="tick-label" x="314" y="160">3</text>
            <text class="tick-label" x="148" y="186">-3</text>
            <text class="tick-label" x="160" y="160">0</text>
            <text class="tick-label" x="158" y="118">5</text>
            <text class="tick-label" x="154" y="75">10</text>
            <text class="tick-label" x="154" y="33">15</text>
            <text class="annotation-label" x="283" y="104">f(2) = 5</text>
            <text class="annotation-label" x="197" y="204">Sommet (0 ; -3)</text>
            <text class="annotation-label" x="108" y="99">y = 5</text>
          </svg>
        `,
        notes: [
          'On part de $x = 2$ sur l’axe horizontal, on monte jusqu’à la courbe, puis on lit l’ordonnée : $f(2) = 5$.',
          'La droite horizontale $y = 5$ coupe la courbe en deux points : les antécédents de $5$ sont donc $-2$ et $2$.',
          'Le sommet $(0 ; -3)$ aide à comprendre pourquoi la courbe redescend puis remonte : une même valeur de sortie peut avoir deux antécédents.'
        ],
        reading: 'Pour une image, on part de $x$. Pour un antécédent, on part de la valeur $y$ et on revient vers l’axe des abscisses.',
        caption: 'Courbe de $f(x) = 2x^2 - 3$ avec lecture guidée de l’image de $2$ et des antécédents de $5$.'
      },
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
