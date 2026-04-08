/* =========================================================
   Spark Learning – data/lycee-1re/1re-derivation.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-derivation',
    level: 2, subject: 'maths',
    icon: '📉',
    title: 'La Dérivation',
    subtitle: 'Taux de variation, dérivées usuelles, extremums',
    keywords: ['Dérivée', 'Taux de variation', 'Tangente', 'd/dt'],
    physics: 'Cinématique : v = dx/dt, cinétique chimique',

    cours: {
      intro: 'La <strong>dérivée</strong> d\'une fonction en un point est le <strong>taux de variation instantané</strong> : $f\'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}$.<br/><br/>Géométriquement, $f\'(x_0)$ est la <strong>pente de la tangente</strong> à la courbe en $(x_0, f(x_0))$.<br/><br/>En physique, la vitesse est la dérivée de la position ($v = dx/dt$) et l\'accélération est la dérivée de la vitesse ($a = dv/dt$).<br/><br/>La dérivée est une <strong>fonction</strong>, pas un nombre : $f\'(x) = 6x+5$ donne la pente en tout point ; $f\'(2) = 17$ est sa valeur en $x=2$.<br/><br/>Si $f\'(x_0) > 0$, $f$ est localement croissante ; si $f\'(x_0) < 0$, elle est décroissante.',
      definitions: [
        { term: 'Taux de variation', def: 'Le <strong>taux de variation</strong> de $f$ entre $x_0$ et $x_0 + h$ est le quotient $\\dfrac{f(x_0+h)-f(x_0)}{h}$. Il mesure la pente moyenne de la courbe sur cet intervalle.' },
        { term: 'Nombre dérivé', def: 'Le <strong>nombre dérivé</strong> de $f$ en $x_0$, noté $f\'(x_0)$, est la limite du taux de variation quand $h \\to 0$. C\'est un <strong>nombre réel</strong> : la pente de la tangente en ce point.' },
        { term: 'Fonction dérivée', def: 'La <strong>fonction dérivée</strong> $f\'$ est la fonction qui à tout $x$ associe $f\'(x)$. Elle donne la pente de la tangente en <strong>chaque point</strong> de la courbe.' },
        { term: 'Tangente', def: 'La <strong>tangente</strong> à la courbe de $f$ en $x_0$ est la droite d\'équation $y = f\'(x_0)(x - x_0) + f(x_0)$. Elle "effleure" la courbe en ce point.' }
      ],
      method: {
        title: 'Règles de dérivation usuelles',
        steps: [
          '<strong>Fonction constante</strong> : si $f(x) = k$ alors $f\'(x) = 0$.',
          '<strong>Fonction puissance</strong> : si $f(x) = x^n$ alors $f\'(x) = n \\cdot x^{n-1}$. Exemple : $(x^3)\' = 3x^2$.',
          '<strong>Combinaisons linéaires</strong> : $(af + bg)\' = af\' + bg\'$ (linéarité). Exemple : $f(x) = 3x^2 + 5x - 2 \\Rightarrow f\'(x) = 6x + 5$.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = 2x^3 - 5x^2 + 4x - 1$. Déterminer $f\'(x)$, puis l\'équation de la tangente à la courbe en $x_0 = 1$.',
        steps: [
          'On dérive terme à terme : $f\'(x) = 2 \\times 3x^2 - 5 \\times 2x + 4 = 6x^2 - 10x + 4$.',
          'On calcule $f\'(1) = 6 \\times 1 - 10 \\times 1 + 4 = 0$ et $f(1) = 2 - 5 + 4 - 1 = 0$.',
          'L\'équation de la tangente est $y = f\'(1)(x - 1) + f(1) = 0 \\times (x - 1) + 0 = 0$.'
        ],
        answer: 'La tangente en $x_0 = 1$ est la droite $y = 0$ (l\'axe des abscisses). Le point $(1\\,;\\,0)$ est un extremum local car $f\'(1) = 0$.'
      },
      formulas: [
        '$(x^n)\' = n \\cdot x^{n-1}$',
        '$(ax^n)\' = a \\cdot n \\cdot x^{n-1}$',
        '$(e^x)\' = e^x$',
        '$(\\ln x)\' = \\dfrac{1}{x}$',
        '$(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$'
      ],
      recap: [
        'La dérivée $f\'(x_0)$ est la <strong>pente de la tangente</strong> à la courbe en $x_0$ : c\'est un nombre.',
        'La fonction dérivée $f\'$ est une <strong>fonction</strong> : elle associe à chaque $x$ la pente de la tangente en ce point.',
        '$f\'(x_0) > 0 \\Rightarrow f$ croissante localement ; $f\'(x_0) < 0 \\Rightarrow f$ décroissante ; $f\'(x_0) = 0 \\Rightarrow$ extremum possible.',
        'Tangente en $x_0$ : $y = f\'(x_0)(x - x_0) + f(x_0)$. Retenir : pente $\\times$ écart $+$ ordonnée du point.'
      ],
      piege: 'N\'oublie pas que la dérivée est une <strong>fonction</strong>, pas un nombre. $f\'(x) = 6x + 5$ est une fonction.<br/><br/>Pour avoir la valeur de la dérivée en $x = 2$, on calcule $f\'(2) = 6 \\times 2 + 5 = 17$.'
    },

    quiz: [
      {
        q: 'Soit $f(x) = x^2$. Laquelle de ces affirmations est VRAIE ?',
        options: [
          '$f\'(x) = 2x$ est une fonction ; $f\'(3) = 6$ est la pente de la tangente en $x = 3$',
          '$f\'(x) = 2x$ signifie que la dérivée de $x^2$ est $2x^2$',
          '$f\'(3) = 6$ est la valeur de $f$ en $x = 3$',
          '$f\'(x) = 2$ pour tout $x$ (la dérivée est toujours une constante)'
        ],
        answer: 0,
        correction: '$f\'(x) = 2x$ est bien une <strong>fonction</strong> (elle dépend de $x$). La valeur $f\'(3) = 6$ est la pente de la tangente en $(3\\,;\\,9)$.<br/><br/>Attention à ne pas confondre $f(3) = 9$ (ordonnée du point) et $f\'(3) = 6$ (pente de la tangente en ce point) : ce sont deux informations bien distinctes.'
      },
      {
        q: 'La position d\'un mobile est donnée par $x(t) = 3t^2 + 2t$ (en m, t en s). Sa vitesse à $t = 2$ s est :',
        options: ['$v = 16$ m/s', '$v = 12$ m/s', '$v = 14$ m/s', '$v = 6$ m/s'],
        answer: 2,
        correction: 'On dérive la position pour obtenir la vitesse : $v(t) = x\'(t) = 6t + 2$.<br/><br/>À l\'instant $t = 2$ s : $v(2) = 6 \\times 2 + 2 = 14$ m/s.'
      },
      {
        q: 'La dérivée de $f(x) = e^{2x}$ est :',
        options: ['$f\'(x) = e^{2x}$', '$f\'(x) = 2e^{2x}$', '$f\'(x) = 2e^{x}$', '$f\'(x) = xe^{2x}$'],
        answer: 1,
        correction: 'Par la règle de dérivation des <strong>fonctions composées</strong> : $(e^{u})\'= u\' \\cdot e^u$.<br/><br/>Ici $u = 2x$ et $u\' = 2$, donc $(e^{2x})\' = 2e^{2x}$.'
      },
      {
        q: 'L\'équation de la tangente à la courbe de $f(x) = x^2$ en $x_0 = 3$ est :',
        options: ['$y = 6x - 9$', '$y = 6x + 9$', '$y = 3x - 9$', '$y = 2x + 3$'],
        answer: 0,
        correction: 'On calcule d\'abord la dérivée : $f\'(x) = 2x$, donc $f\'(3) = 6$ et $f(3) = 9$.<br/><br/>La tangente en $x_0 = 3$ s\'écrit : $y = f\'(3)(x - 3) + f(3) = 6(x - 3) + 9 = 6x - 18 + 9 = 6x - 9$.'
      },
      {
        q: 'Si $f\'(x) = 0$ en $x_0$, alors :',
        options: ['$f$ a forcément un maximum en $x_0$', '$f$ a forcément un minimum en $x_0$', 'La tangente en $x_0$ est horizontale (extremum possible mais pas certain)', '$f(x_0) = 0$'],
        answer: 2,
        correction: '$f\'(x_0) = 0$ signifie que la tangente est <strong>horizontale</strong> en $x_0$.<br/><br/>C\'est une <strong>condition nécessaire</strong> pour un extremum, mais pas suffisante : par exemple, $f(x) = x^3$ vérifie $f\'(0) = 0$ sans extremum en $0$ (point d\'inflexion).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5);
        const b = rand(-6, -1);
        const c = rand(1, 8);
        const x0 = rand(1, 4);
        const ctx = pick([
          { intro: 'La hauteur d\'une fusée modèle réduit est modélisée par', unit: 'm', varName: 'h', timeVar: 't' },
          { intro: 'Le bénéfice d\'une entreprise en fonction du nombre de produits vendus est', unit: 'k€', varName: 'B', timeVar: 'x' },
          { intro: 'La température d\'un four en fonction du temps est modélisée par', unit: '°C', varName: 'T', timeVar: 't' },
          { intro: 'La position d\'un mobile sur un rail est donnée par', unit: 'm', varName: 'x', timeVar: 't' }
        ]);
        // f(x) = ax^2 + bx + c => f'(x) = 2ax + b => f'(x0) = 2a*x0 + b
        const fprime = 2 * a * x0 + b;
        const fx0 = a * x0 * x0 + b * x0 + c;
        // tangente en x0 : y = fprime*(x - x0) + fx0 => ordonnée à l'origine = -fprime*x0 + fx0
        const ordOrigine = -fprime * x0 + fx0;
        return {
          statement: `${ctx.intro} $${ctx.varName}(${ctx.timeVar}) = ${a}${ctx.timeVar}^2 ${b > 0 ? '+' : ''}${b}${ctx.timeVar} + ${c}$.<br/><br/>1) Calculer $${ctx.varName}'(${ctx.timeVar})$.<br/>2) En déduire la pente de la tangente en $${ctx.timeVar}_0 = ${x0}$.<br/><br/>Donner la valeur de $${ctx.varName}'(${x0})$.`,
          answer: fprime,
          tolerance: 0.001,
          unit: '',
          hint: `Dérive terme à terme : $(${a}${ctx.timeVar}^2)' = ${2*a}${ctx.timeVar}$ et $(${b}${ctx.timeVar})' = ${b}$. Puis substitue $${ctx.timeVar} = ${x0}$.`,
          solution: [
            `$${ctx.varName}'(${ctx.timeVar}) = 2 \\times ${a} \\times ${ctx.timeVar} + (${b}) = ${2*a}${ctx.timeVar} ${b > 0 ? '+' : ''}${b}$`,
            `$${ctx.varName}'(${x0}) = ${2*a} \\times ${x0} + (${b}) = ${2*a*x0} ${b > 0 ? '+' : ''}${b} = ${fprime}$`,
            `La pente de la tangente en $${ctx.timeVar}_0 = ${x0}$ vaut $${fprime}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'En cinématique, la position d\'un objet en chute libre (résistance de l\'air négligée) est donnée par : $x(t) = x_0 + v_0 t + \\dfrac{1}{2}g t^2$ où $x_0 = 0$ m (position initiale), $v_0 = 5$ m/s (vitesse initiale), $g = 9{,}81$ m/s² (pesanteur), $t$ le temps en secondes.',
      schema: null,
      tasks: [
        'Exprimer la vitesse $v(t) = \\dfrac{dx}{dt}$ en dérivant $x(t)$.',
        'Calculer la vitesse à $t = 3$ s.',
        'Exprimer l\'accélération $a(t) = \\dfrac{dv}{dt}$ et vérifier qu\'elle est constante et égale à $g$.'
      ],
      solutions: [
        '$v(t) = x\'(t) = v_0 + g \\cdot t = 5 + 9{,}81 t$.',
        '$v(3) = 5 + 9{,}81 \\times 3 = 5 + 29{,}43 = 34{,}43$ m/s.',
        '$a(t) = v\'(t) = g = 9{,}81$ m/s². L\'accélération est bien constante et égale à $g$. La dérivée d\'une fonction linéaire ($v_0 + gt$) est une constante ($g$).'
      ],
      finalAnswer: '$v(3) = 34{,}43$ m/s ; $a(t) = g = 9{,}81$ m/s² (constante)'
    },

    evaluation: {
      title: 'Évaluation — La Dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x^4 - 2x^2 + 7x - 1$. Calculer $f\'(2)$.',
          type: 'numeric',
          answer: 87,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On dérive terme à terme : $f\'(x) = 12x^3 - 4x + 7$.<br/><br/>On remplace ensuite $x$ par $2$ : $f\'(2) = 12 \\times 8 - 4 \\times 2 + 7 = 96 - 8 + 7 = 87$.'
        },
        {
          statement: 'La position d\'un mobile est $x(t) = 5t^3 - 2t^2 + t$ (en m, $t$ en s). Calculer l\'accélération $a(t)$ à l\'instant $t = 1$ s.',
          type: 'numeric',
          answer: 26,
          tolerance: 0.01,
          unit: 'm/s²',
          points: 3,
          correction: 'On dérive une première fois pour la vitesse : $v(t) = x\'(t) = 15t^2 - 4t + 1$.<br/><br/>On dérive une seconde fois pour l\'accélération : $a(t) = v\'(t) = 30t - 4$.<br/><br/>À $t = 1$ s : $a(1) = 30 \\times 1 - 4 = 26$ m/s².'
        },
        {
          statement: 'La dérivée de $g(x) = x^2 e^x$ est :',
          type: 'multiple-choice',
          options: ['$g\'(x) = 2x e^x$', '$g\'(x) = (2x + x^2) e^x$', '$g\'(x) = x^2 e^x + 2x$', '$g\'(x) = 2x e^{2x}$'],
          answer: 1,
          points: 2,
          correction: 'On applique la <strong>formule du produit</strong> : $(uv)\' = u\'v + uv\'$.<br/><br/>Avec $u = x^2$, $u\' = 2x$, $v = e^x$, $v\' = e^x$.<br/><br/>Donc $g\'(x) = 2x e^x + x^2 e^x = (2x + x^2) e^x$. On factorise par $e^x$ pour simplifier l\'expression.'
        },
        {
          statement: 'Soit $h(x) = 4x^3 - 12x + 5$. Déterminer la valeur de $x > 0$ pour laquelle $h\'(x) = 0$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'On dérive : $h\'(x) = 12x^2 - 12$.<br/><br/>On résout $12x^2 - 12 = 0$, ce qui donne $x^2 = 1$, donc $x = 1$ ou $x = -1$.<br/><br/>La solution positive demandée est $x = 1$. En ce point, la tangente à la courbe est horizontale.'
        }
      ]
    }
  });
