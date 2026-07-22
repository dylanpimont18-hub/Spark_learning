/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-fonctions-generalites.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-fonctions-generalites',
    level: 2, subject: 'maths',
    icon: '📈',
    title: 'Généralités sur les fonctions',
    subtitle: 'Définition, courbe, variations, extremums',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Variations', 'Extremum'],
    physics: false,
    cours: {
      intro: 'Une <strong>fonction</strong> est une règle qui associe à chaque $x$ de son domaine de définition une <strong>image unique</strong> $f(x)$. Son graphe est la courbe des points $(x ; f(x))$ dans le plan — la courbe ne peut pas se « dédoubler » verticalement.<br/><br/>La notion de <strong>variation</strong> décrit l\'évolution de $f(x)$ quand $x$ augmente : croissante (graphe monte), décroissante (graphe descend). Un <strong>extremum</strong> est un point où la fonction change de sens.<br/><br/>Lire un graphe nécessite de distinguer clairement abscisse ($x$, entrée) et ordonnée ($f(x)$, sortie) : image → lecture verticale, antécédent → lecture horizontale.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ de son domaine de définition une unique image $f(x)$.' },
        { term: 'Image', def: 'La valeur $f(x)$ obtenue en appliquant la fonction à $x$. Se lit verticalement sur le graphe.' },
        { term: 'Antécédent', def: 'Valeur $x$ telle que $f(x) = y$. Un antécédent peut ne pas exister, ou il peut y en avoir plusieurs.' },
        { term: 'Extremum', def: 'Maximum ou minimum de $f$ sur un intervalle. C\'est le point où la fonction atteint sa plus grande (ou plus petite) valeur.' }
      ],
      method: {
        title: 'Lire une courbe',
        steps: [
          '<strong>Image</strong> : partir de $x$ sur l\'axe horizontal, rejoindre la courbe, lire $y = f(x)$. <strong>Exemple :</strong> Si la courbe passe par $(3 ; 7)$, alors $f(3) = 7$ : l\'image de $3$ est $7$.',
          '<strong>Antécédent</strong> : partir de $y$ sur l\'axe vertical, rejoindre la courbe, lire $x$. <strong>Exemple :</strong> Si la courbe coupe la droite $y = 5$ en $x = 2$ et $x = 6$, alors $2$ et $6$ sont les antécédents de $5$.',
          '<strong>Maximum/minimum</strong> : chercher le sommet de la courbe sur l\'intervalle donné. <strong>Exemple :</strong> Si le point le plus haut de la courbe sur $[0 ; 8]$ est $(4 ; 10)$, le maximum est $10$, atteint en $x = 4$.',
          '<strong>Variations</strong> : la fonction croît si la courbe monte de gauche à droite. <strong>Exemple :</strong> Si $f(1) = 3$ et $f(4) = 9$ avec la courbe qui monte entre les deux, $f$ est croissante sur $[1 ; 4]$.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = -x^2 + 6x - 5$. Calculer $f(2)$, puis déterminer un antécédent de $-5$.',
        steps: [
          'Image de $2$ : $f(2) = -(2)^2 + 6 \\times 2 - 5 = -4 + 12 - 5 = 3$.',
          'Antécédent de $-5$ : résoudre $f(x) = -5$ → $-x^2 + 6x - 5 = -5$ → $-x^2 + 6x = 0$ → $x(-x + 6) = 0$.',
          'Donc $x = 0$ ou $x = 6$ : il y a deux antécédents de $-5$.'
        ],
        answer: '$f(2) = 3$. Les antécédents de $-5$ sont $x = 0$ et $x = 6$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Lecture graphique d\'une courbe',
        title: 'Courbe de $f(x) = -x^2 + 6x - 5$',
        description: 'Reconstruction de l\'exemple du cours : lecture des deux antécédents de $-5$ (flèches en pointillés) et maximum de la fonction.',
        svg: `
          <svg viewBox="0 0 520 340" role="img" aria-labelledby="fonctions-diagram-title fonctions-diagram-desc">
            <title id="fonctions-diagram-title">Courbe de f(x) = -x2 + 6x - 5</title>
            <desc id="fonctions-diagram-desc">Repere avec la parabole f(x) = -x2 + 6x - 5, le maximum en (3 ; 4), et la lecture graphique des deux antecedents de -5 (x = 0 et x = 6) par fleches en pointilles.</desc>
            <defs>
              <marker id="fg-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="80" y1="20" x2="80" y2="320"></line>
            <line class="grid-line" x1="140" y1="20" x2="140" y2="320"></line>
            <line class="grid-line" x1="200" y1="20" x2="200" y2="320"></line>
            <line class="grid-line" x1="260" y1="20" x2="260" y2="320"></line>
            <line class="grid-line" x1="320" y1="20" x2="320" y2="320"></line>
            <line class="grid-line" x1="380" y1="20" x2="380" y2="320"></line>
            <line class="grid-line" x1="440" y1="20" x2="440" y2="320"></line>

            <line class="grid-line" x1="50" y1="305" x2="470" y2="305"></line>
            <line class="grid-line" x1="50" y1="275" x2="470" y2="275"></line>
            <line class="grid-line" x1="50" y1="245" x2="470" y2="245"></line>
            <line class="grid-line" x1="50" y1="215" x2="470" y2="215"></line>
            <line class="grid-line" x1="50" y1="185" x2="470" y2="185"></line>
            <line class="grid-line" x1="50" y1="155" x2="470" y2="155"></line>
            <line class="grid-line" x1="50" y1="125" x2="470" y2="125"></line>
            <line class="grid-line" x1="50" y1="95" x2="470" y2="95"></line>
            <line class="grid-line" x1="50" y1="65" x2="470" y2="65"></line>
            <line class="grid-line" x1="50" y1="35" x2="470" y2="35"></line>

            <line class="axis" x1="45" y1="155" x2="480" y2="155"></line>
            <line class="axis" x1="80" y1="325" x2="80" y2="15"></line>
            <text class="axis-label" x="486" y="159">x</text>
            <text class="axis-label" x="85" y="12">y</text>

            <text class="tick-label" x="68" y="171" text-anchor="end">0</text>
            <text class="tick-label" x="140" y="171" text-anchor="middle">1</text>
            <text class="tick-label" x="200" y="171" text-anchor="middle">2</text>
            <text class="tick-label" x="260" y="171" text-anchor="middle">3</text>
            <text class="tick-label" x="320" y="171" text-anchor="middle">4</text>
            <text class="tick-label" x="380" y="171" text-anchor="middle">5</text>
            <text class="tick-label" x="440" y="171" text-anchor="middle">6</text>

            <text class="tick-label" x="70" y="39" text-anchor="end">4</text>
            <text class="tick-label" x="70" y="69" text-anchor="end">3</text>
            <text class="tick-label" x="70" y="99" text-anchor="end">2</text>
            <text class="tick-label" x="70" y="129" text-anchor="end">1</text>
            <text class="tick-label" x="70" y="189" text-anchor="end">-1</text>
            <text class="tick-label" x="70" y="219" text-anchor="end">-2</text>
            <text class="tick-label" x="70" y="249" text-anchor="end">-3</text>
            <text class="tick-label" x="70" y="279" text-anchor="end">-4</text>
            <text class="tick-label" x="70" y="309" text-anchor="end">-5</text>

            <polyline class="curve-main" points="80,305 110,222.5 140,155 170,102.5 200,65 230,42.5 260,35 290,42.5 320,65 350,102.5 380,155 410,222.5 440,305"></polyline>
            <text class="annotation-label" x="300" y="27" text-anchor="middle">f(x) = -x2 + 6x - 5</text>

            <line class="guide-line" x1="260" y1="155" x2="260" y2="35" marker-end="url(#fg-arrow)"></line>
            <line class="guide-line" x1="80" y1="35" x2="260" y2="35" marker-end="url(#fg-arrow)"></line>
            <circle class="plot-point" cx="260" cy="35" r="5"></circle>
            <text class="annotation-label" x="266" y="26">Maximum (3 ; 4)</text>

            <line class="guide-line" x1="80" y1="305" x2="440" y2="305" marker-end="url(#fg-arrow)"></line>
            <line class="guide-line" x1="440" y1="305" x2="440" y2="155" marker-end="url(#fg-arrow)"></line>
            <circle class="plot-point-alt" cx="440" cy="305" r="4"></circle>
            <text class="label-soft" x="446" y="300">x = 6</text>

            <circle class="plot-point-alt" cx="80" cy="305" r="4"></circle>
            <text class="label-soft" x="50" y="300" text-anchor="end">x = 0</text>
            <text class="label-soft" x="50" y="317" text-anchor="end">y = -5</text>

            <circle class="plot-point-alt" cx="200" cy="65" r="4"></circle>
            <text class="label-soft" x="206" y="58">(2 ; 3)</text>
          </svg>
        `,
        notes: [
          'Antécédent de $-5$ : on part de $y=-5$ sur l\'axe vertical, on rejoint la courbe (flèche horizontale en pointillés), puis on lit l\'abscisse (flèche verticale). On trouve deux antécédents : $x = 0$ et $x = 6$.',
          'Maximum : le sommet de la courbe est en $(3 ; 4)$. C\'est la plus grande valeur atteinte par $f$ sur ce domaine : $f(x) \\leq 4$ pour tout $x$.',
          '$f$ est croissante sur $[0 ; 3]$ (la courbe monte) puis décroissante sur $[3 ; 6]$ (la courbe descend) — le maximum est exactement au changement de sens.'
        ],
        reading: 'Pour un antécédent, on part de l\'axe des $y$ et on rejoint horizontalement la courbe avant de redescendre verticalement sur l\'axe des $x$ — c\'est l\'inverse de la lecture d\'une image (verticale puis horizontale).',
        caption: 'Courbe de $f(x) = -x^2 + 6x - 5$ (exemple du cours) : deux antécédents de $-5$ ($x=0$ et $x=6$) et maximum en $(3 ; 4)$.'
      },
      formulas: [
        '$f$ croissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$',
        '$f$ décroissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$'
      ],
      recap: [
        'Une fonction associe à chaque $x$ une unique image $f(x)$ ; un antécédent peut ne pas être unique.',
        'Croissante = la courbe monte (de gauche à droite) ; décroissante = la courbe descend.',
        'Le maximum sur un intervalle est la plus grande valeur atteinte par $f(x)$ sur cet intervalle.',
        'Image = lecture verticale du graphe ; antécédent = lecture horizontale.'
      ],
      piege: 'Un antécédent peut ne pas exister ou ne pas être unique. L\'image d\'un $x$ donné, elle, est toujours unique (sinon ce n\'est pas une fonction).'
    },
    quiz: [
      { q: 'Si $f(5) = 3$, laquelle de ces affirmations est VRAIE ?', options: ['$3$ est l\'image de $5$ et $5$ est un antécédent de $3$', '$5$ est l\'image de $3$ et $3$ est un antécédent de $5$', '$f(3) = 5$', '$f$ n\'est définie qu\'en $x=5$'], answer: 0, correction: '$f(5) = 3$ signifie : « l\'image de $5$ est $3$ » et « $5$ est un antécédent de $3$ ». L\'erreur classique est d\'inverser : $5$ est l\'entrée (antécédent), $3$ est la sortie (image).' },
      { q: '$f$ est croissante sur $[1;4]$. On a $f(1)=2$ et $f(4)=9$. Alors :', options: ['$f(2) > f(3)$', '$f(2) < f(3)$', '$f(2) = f(3)$', 'Impossible à dire'], answer: 1, correction: 'Croissante : $2 < 3 \\Rightarrow f(2) < f(3)$.' },
      { q: 'Le maximum de $f$ sur $[-2;3]$ est $5$. Cela signifie que :', options: ['$f(5)=-2$', '$f(x)\\le 5$ pour tout $x\\in[-2;3]$', '$f(x)\\ge 5$ pour tout $x$', '$f(-2)=5$'], answer: 1, correction: 'Le maximum vaut $5$, donc $f(x)\\le 5$ pour tout $x$ de l\'intervalle.' },
      { q: 'Soit $f(x) = x^2 - 4x + 3$. On calcule $f(1) = 0$ et $f(3) = 0$. Peut-on dire que $f$ est constante (nulle) sur $[1;3]$ ?', options: ['Non : $f(1) = f(3) = 0$ ne signifie pas que $f$ est nulle entre les deux. Par exemple $f(2) = -1 \\neq 0$', 'Oui : si $f(1) = f(3) = 0$, alors $f$ vaut $0$ partout entre $1$ et $3$', 'Non : $f$ n\'est pas définie entre $1$ et $3$', 'Oui : c\'est le théorème des valeurs intermédiaires'], answer: 0, correction: 'Deux images égales ne signifient pas que la fonction est constante entre les deux. Ici $f(2) = 4 - 8 + 3 = -1 \\neq 0$. La fonction descend puis remonte. On ne peut rien déduire entre deux points sans information supplémentaire sur les variations.' },
      { q: 'Une fonction $f$ est décroissante sur $[0;5]$ avec $f(0) = 10$ et $f(5) = 2$. L\'équation $f(x) = 7$ admet-elle une solution sur $[0;5]$ ?', options: ['Oui : $2 \\leq 7 \\leq 10$ et $f$ est continue et décroissante, donc $f$ prend exactement une fois la valeur $7$', 'Non : on ne connaît pas l\'expression de $f$', 'Oui : il y a plusieurs solutions', 'Non : $f$ est décroissante donc elle ne peut pas valoir $7$'], answer: 0, correction: '$f$ est décroissante sur $[0;5]$ avec $f(0) = 10 \\geq 7 \\geq 2 = f(5)$. Par le théorème des valeurs intermédiaires, il existe $c \\in [0;5]$ tel que $f(c) = 7$. De plus, comme $f$ est strictement décroissante, cette solution est unique.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'La hauteur d\'un ballon lancé en l\'air est modélisée par', unit: 'm', xName: 't', xUnit: 's' },
          { intro: 'Le bénéfice d\'une entreprise en fonction du nombre de produits vendus est', unit: '€', xName: 'x', xUnit: 'produits' },
          { intro: 'La distance de freinage d\'une voiture est donnée par', unit: 'm', xName: 'v', xUnit: 'km/h' }
        ];
        const ctx = pick(contexts);
        const a = -rand(1, 3);
        const b = rand(4, 10);
        const c = rand(1, 8);
        const x1 = rand(0, 3);
        const x2 = rand(x1 + 1, x1 + 3);
        const x3 = rand(x2 + 1, x2 + 3);
        const f1 = a * x1 * x1 + b * x1 + c;
        const f2 = a * x2 * x2 + b * x2 + c;
        const f3 = a * x3 * x3 + b * x3 + c;
        const maxVal = Math.max(f1, f2, f3);
        return {
          statement: `Soit $f(${ctx.xName}) = ${a === -1 ? '-' : a}${ctx.xName}^2 + ${b}${ctx.xName} + ${c}$.<br/><br/><strong>1.</strong> Calculer $f(${x1})$, $f(${x2})$ et $f(${x3})$.<br/><strong>2.</strong> La fonction est-elle croissante ou décroissante sur $[${x1};${x2}]$ ? Sur $[${x2};${x3}]$ ?<br/><strong>3.</strong> En déduire le maximum de $f$ sur $\\{${x1};${x2};${x3}\\}$.<br/><br/>Donne la valeur de $f(${x2})$.`,
          answer: f2,
          tolerance: 0,
          unit: ctx.unit,
          hint: `Remplace $${ctx.xName}$ par $${x2}$ : $f(${x2}) = ${a} \\times ${x2}^2 + ${b} \\times ${x2} + ${c}$.`,
          solution: [
            `$f(${x1}) = ${a} \\times ${x1*x1} + ${b} \\times ${x1} + ${c} = ${a*x1*x1} + ${b*x1} + ${c} = ${f1}$`,
            `$f(${x2}) = ${a} \\times ${x2*x2} + ${b} \\times ${x2} + ${c} = ${a*x2*x2} + ${b*x2} + ${c} = ${f2}$`,
            `$f(${x3}) = ${a} \\times ${x3*x3} + ${b} \\times ${x3} + ${c} = ${a*x3*x3} + ${b*x3} + ${c} = ${f3}$`,
            `${f1 < f2 ? 'Croissante' : 'Décroissante'} sur $[${x1};${x2}]$ ; ${f2 > f3 ? 'décroissante' : 'croissante'} sur $[${x2};${x3}]$. Maximum parmi ces trois valeurs : $${maxVal}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un fabricant de boîtes vend ses produits à un prix unitaire de $p$ euros. Le nombre de boîtes vendues par mois est $N(p) = 500 - 20p$ (pour $0 \\leq p \\leq 25$). Le chiffre d\'affaires mensuel est $C(p) = p \\times N(p) = p(500 - 20p) = -20p^2 + 500p$.',
      tasks: [
        'Calculer $C(5)$, $C(10)$, $C(15)$ et $C(20)$.',
        'Dresser le tableau de variations de $C$ sur $[5;20]$ à partir de ces valeurs. Identifier le maximum.',
        'Déterminer les antécédents de $2000$ par $C$ (c\'est-à-dire résoudre $C(p) = 2000$).'
      ],
      solutions: [
        '$C(5) = -20 \\times 25 + 500 \\times 5 = 2000$ € ; $C(10) = -2000 + 5000 = 3000$ € ; $C(15) = -4500 + 7500 = 3000$ € ; $C(20) = -8000 + 10000 = 2000$ €.',
        '$C$ croît sur $[5;10]$ puis décroît (ou reste stable) sur $[10;20]$. Le maximum semble atteint autour de $p = 12{,}5$ (milieu entre $10$ et $15$) avec $C(12{,}5) = 3125$ €.',
        '$-20p^2 + 500p = 2000 \\Rightarrow -20p^2 + 500p - 2000 = 0 \\Rightarrow p^2 - 25p + 100 = 0$. On trouve $p = 5$ ou $p = 20$ (vérification : $C(5) = C(20) = 2000$ ✓, cohérent avec les valeurs calculées en 1).'
      ],
      finalAnswer: 'Maximum du chiffre d\'affaires : $3125$ € pour $p = 12{,}5$ €. Antécédents de $2000$ : $p = 5$ € et $p = 20$ €.'
    },

    evaluation: {
      title: 'Évaluation — Généralités sur les fonctions',
      duration: '25 min',
      questions: [
        {
          statement: 'Soit $f(x) = 2x^2 - 3$. Calculer $f(-2)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(-2) = 2 \\times (-2)^2 - 3 = 2 \\times 4 - 3 = 8 - 3 = 5$.'
        },
        {
          statement: 'Si $f(3) = 7$, laquelle de ces affirmations est correcte ?',
          type: 'multiple-choice',
          options: ['$7$ est un antécédent de $3$ par $f$', '$3$ est l\'image de $7$ par $f$', '$3$ est un antécédent de $7$ par $f$', '$f(7) = 3$'],
          answer: 2,
          points: 2,
          correction: '$f(3) = 7$ signifie que $7$ est l\'image de $3$ par $f$, et que $3$ est un antécédent de $7$ par $f$.'
        },
        {
          statement: 'Une fonction $f$ est décroissante sur $[1;5]$. On sait que $f(1) = 10$ et $f(5) = 2$. Quel encadrement peut-on donner pour $f(3)$ ?',
          type: 'multiple-choice',
          options: ['$2 \\leq f(3) \\leq 10$', '$f(3) \\leq 2$', '$f(3) \\geq 10$', '$f(3) = 6$'],
          answer: 0,
          points: 2,
          correction: '$f$ est décroissante sur $[1;5]$, donc $1 < 3 < 5 \\Rightarrow f(1) > f(3) > f(5)$, soit $2 < f(3) < 10$. L\'encadrement large $2 \\leq f(3) \\leq 10$ est donc correct.'
        },
        {
          statement: 'Soit $g(x) = -x + 8$. Calculer l\'antécédent de $3$ par $g$ (c\'est-à-dire résoudre $g(x) = 3$).',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g(x) = 3 \\Rightarrow -x + 8 = 3 \\Rightarrow -x = -5 \\Rightarrow x = 5$. L\'antécédent de $3$ est $x = 5$.'
        },
        {
          statement: 'Le maximum d\'une fonction $f$ sur un intervalle $[a;b]$ est la plus grande valeur atteinte par $f(x)$ sur cet intervalle. Si $f$ est croissante sur $[2;6]$, en quel point le maximum est-il atteint ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si $f$ est croissante sur $[2;6]$, alors $f$ atteint sa plus grande valeur en la borne droite de l\'intervalle : le maximum est atteint en $x = 6$.'
        }
      ]
    }
  });
