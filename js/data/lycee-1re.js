/* =========================================================
   Spark Learning – data/lycee-1re.js
   Modules Lycée 1re (Première)
   ========================================================= */

window.MODULES.push(

  {
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
          'Fonction constante : si $f(x) = k$ alors $f\'(x) = 0$.',
          'Fonction puissance : si $f(x) = x^n$ alors $f\'(x) = n \\cdot x^{n-1}$. Exemple : $(x^3)\' = 3x^2$.',
          'Combinaisons : $(af + bg)\' = af\' + bg\'$ (linéarité). Exemple : $f(x) = 3x^2 + 5x - 2 \\Rightarrow f\'(x) = 6x + 5$.'
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
  },

    {
    id: '1re-suites',
    level: 2, subject: 'maths',
    icon: '🔄',
    title: 'Suites numériques',
    subtitle: 'Suites arithmétiques et géométriques',
    keywords: ['Suite arithmétique', 'Suite géométrique', 'Raison', 'Terme général', 'Somme'],
    physics: 'Décroissance radioactive (suite géométrique), intérêts composés, signal numérique',

    cours: {
      intro: 'Une <strong>suite numérique</strong> est une liste ordonnée de nombres où chaque terme se construit à partir du précédent.<br/><br/>Quand on ajoute toujours la même quantité $r$, c\'est une <strong>suite arithmétique</strong> (comme une horloge qui avance d\'une seconde à chaque tick). Quand on multiplie toujours par le même facteur $q$, c\'est une <strong>suite géométrique</strong> (comme la décroissance radioactive : chaque demi-vie divise la quantité par 2).<br/><br/>La distinction clé : arithmétique = variation absolue constante ; géométrique = taux de variation constant.<br/><br/>Attention au comptage des termes : $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes — pas $n$.<br/><br/>Une suite géométrique de raison $q = 1/2$ ne s\'annule jamais mais tend vers $0$ : même après 50 demi-vies, il reste un atome en théorie.',
      definitions: [
        { term: 'Suite arithmétique', def: 'Une suite $(u_n)$ est <strong>arithmétique</strong> de raison $r$ si $u_{n+1} = u_n + r$ pour tout $n$. La différence entre deux termes consécutifs est <strong>constante</strong>.' },
        { term: 'Suite géométrique', def: 'Une suite $(u_n)$ est <strong>géométrique</strong> de raison $q$ si $u_{n+1} = u_n \\times q$ pour tout $n$ (avec $u_0 \\neq 0$). Le quotient entre deux termes consécutifs est <strong>constant</strong>.' },
        { term: 'Raison', def: 'La <strong>raison</strong> est le nombre qui caractérise la régularité : $r = u_{n+1} - u_n$ (arithmétique) ou $q = u_{n+1}/u_n$ (géométrique).' },
        { term: 'Terme général', def: 'Le <strong>terme général</strong> donne $u_n$ directement en fonction de $n$ : $u_n = u_0 + nr$ (arithmétique) ou $u_n = u_0 \\times q^n$ (géométrique).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Suite arithmétique (raison $r$) : $u_n = u_0 + n \\times r$. Terme suivant = terme précédent $+ r$ (variation constante).',
          'Suite géométrique (raison $q$) : $u_n = u_0 \\times q^n$. Terme suivant = terme précédent $\\times q$ (taux de variation constant).',
          'Identifier le type : si $u_{n+1} - u_n$ est constant → arithmétique. Si $u_{n+1}/u_n$ est constant → géométrique.'
        ]
      },
      example: {
        statement: 'Un capital de $1\\,000$ € est placé à un taux annuel de $3\\%$ à intérêts composés. Exprimer le capital $C_n$ après $n$ années et calculer $C_5$.',
        steps: [
          'Chaque année, le capital est multiplié par $1{,}03$ : c\'est une suite géométrique de raison $q = 1{,}03$ et de premier terme $C_0 = 1\\,000$.',
          'Terme général : $C_n = C_0 \\times q^n = 1\\,000 \\times 1{,}03^n$.',
          '$C_5 = 1\\,000 \\times 1{,}03^5 = 1\\,000 \\times 1{,}15927\\ldots \\approx 1\\,159{,}27$ €.'
        ],
        answer: 'Après $5$ ans, le capital vaut environ $1\\,159{,}27$ €. La suite $(C_n)$ est géométrique de raison $1{,}03$.'
      },
      formulas: [
        '$u_n^{\\text{arith}} = u_0 + n \\cdot r$',
        '$u_n^{\\text{géom}} = u_0 \\times q^n$',
        '$S_n^{\\text{arith}} = \\dfrac{(u_0 + u_n)(n+1)}{2}$',
        '$S_n^{\\text{géom}} = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$ (si $q \\neq 1$)'
      ],
      recap: [
        'Arithmétique : on <strong>ajoute</strong> toujours la même quantité $r$. Formule : $u_n = u_0 + nr$.',
        'Géométrique : on <strong>multiplie</strong> toujours par le même facteur $q$. Formule : $u_n = u_0 \\times q^n$.',
        'De $u_0$ à $u_n$, il y a $n+1$ termes (piège classique : ne pas confondre rang et nombre de termes).',
        'Les sommes utilisent des formules spécifiques : ne jamais additionner terme par terme si $n$ est grand !'
      ],
      piege: 'Confondre le <strong>rang</strong> et le <strong>nombre de termes</strong> est l\'erreur la plus fréquente. $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes (pas $n$).<br/><br/>Pour la demi-vie : après $k$ demi-vies, il reste $N_0 \\times (1/2)^k$ — c\'est un exposant $k$, pas $k-1$ !'
    },

    quiz: [
      {
        q: 'Une suite a pour premiers termes $1, 3, 9, 27, 81$. Un élève dit : "c\'est une suite arithmétique de raison $2$" (car $3 - 1 = 2$). Quelle est son erreur ?',
        options: [
          'C\'est une suite géométrique de raison $3$ (car $3/1 = 9/3 = 27/9 = 3$), pas arithmétique',
          'L\'élève a raison, c\'est bien arithmétique mais la raison est $3$, pas $2$',
          'Ce n\'est ni arithmétique ni géométrique car les différences ne sont pas constantes et les quotients non plus',
          'La raison $2$ est correcte : on prend la différence entre le 1er et le 2e terme'
        ],
        answer: 0,
        correction: 'Dans une suite arithmétique, la différence entre deux termes consécutifs est constante. Ici $3-1=2$, $9-3=6$, $27-9=18$ : les différences ne sont <strong>pas</strong> constantes.<br/><br/>En revanche, les quotients $3/1=3$, $9/3=3$, $27/9=3$ sont constants : c\'est une <strong>suite géométrique</strong> de raison $q=3$.'
      },
      {
        q: 'Un noyau radioactif a une demi-vie de $8$ jours. Il en reste $100$ g initialement. Combien en reste-t-il après $24$ jours ?',
        options: ['$50$ g', '$25$ g', '$12{,}5$ g', '$6{,}25$ g'],
        answer: 2,
        correction: 'On commence par déterminer le nombre de demi-vies écoulées : $24$ jours $= 3 \\times 8$ jours $= 3$ demi-vies.<br/><br/>On applique la formule : $N = 100 \\times \\left(\\dfrac{1}{2}\\right)^3 = 100 \\times \\dfrac{1}{8} = 12{,}5$ g.'
      },
      {
        q: 'Une suite géométrique a $u_0 = 2$ et $q = 3$. Quel est le terme $u_3$ ?',
        options: ['$18$', '$54$', '$27$', '$6$'],
        answer: 1,
        correction: 'On utilise la formule du terme général : $u_n = u_0 \\times q^n$.<br/><br/>Donc $u_3 = u_0 \\times q^3 = 2 \\times 3^3 = 2 \\times 27 = 54$.'
      },
      {
        q: 'La somme $u_0 + u_1 + \\cdots + u_5$ d\'une suite arithmétique avec $u_0 = 2$ et $r = 3$ vaut :',
        options: ['$57$', '$17$', '$87$', '$42$'],
        answer: 0,
        correction: 'On calcule d\'abord le dernier terme : $u_5 = 2 + 5 \\times 3 = 17$.<br/><br/>De $u_0$ à $u_5$, il y a $6$ termes (attention, pas $5$).<br/><br/>On applique la formule de somme : $S = \\dfrac{(u_0 + u_5) \\times 6}{2} = \\dfrac{(2 + 17) \\times 6}{2} = \\dfrac{114}{2} = 57$.'
      },
      {
        q: 'Une suite vérifie $u_0 = 5$ et $u_n = 5 + 2n$. Sa nature est :',
        options: ['Géométrique de raison $2$', 'Arithmétique de raison $2$', 'Ni arithmétique ni géométrique', 'Arithmétique de raison $5$'],
        answer: 1,
        correction: 'On calcule la différence entre deux termes consécutifs : $u_{n+1} - u_n = (5 + 2(n+1)) - (5 + 2n) = 2$.<br/><br/>La différence est constante et vaut $2$ : c\'est bien une <strong>suite arithmétique</strong> de raison $r = 2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick(['arith', 'geom']);
        if (type === 'arith') {
          const u0 = rand(2, 10);
          const r = rand(2, 8);
          const n = rand(5, 15);
          const ctx = pick([
            { intro: 'Un randonneur part à une altitude de', unit: 'm', mot: 'Il monte de', motFin: 'mètres à chaque étape' },
            { intro: 'Un salarié débute avec un salaire de', unit: '€', mot: 'Il reçoit une augmentation fixe de', motFin: '€ par an' },
            { intro: 'Une citerne contient initialement', unit: 'L', mot: 'On y ajoute', motFin: 'litres chaque jour' }
          ]);
          const un = u0 + n * r;
          const somme = (u0 + un) * (n + 1) / 2;
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot} $${r}$ ${ctx.motFin}.<br/><br/>1) Exprimer $u_n$ en fonction de $n$.<br/>2) Calculer $u_{${n}}$.<br/>3) Calculer la somme $S = u_0 + u_1 + \\cdots + u_{${n}}$.<br/><br/>Donner la valeur de $S$.`,
            answer: somme,
            tolerance: 0.01,
            unit: '',
            hint: `C'est une suite arithmétique : $u_n = ${u0} + ${r}n$. Pour la somme, utilise $S = \\dfrac{(u_0 + u_n)(n+1)}{2}$.`,
            solution: [
              `Suite arithmétique : $u_n = ${u0} + ${r}n$.`,
              `$u_{${n}} = ${u0} + ${r} \\times ${n} = ${un}$.`,
              `$S = \\dfrac{(${u0} + ${un}) \\times ${n+1}}{2} = \\dfrac{${u0+un} \\times ${n+1}}{2} = ${somme}$.`
            ]
          };
        } else {
          const u0 = rand(1, 5);
          const q = pick([2, 3]);
          const n = rand(3, 6);
          const ctx = pick([
            { intro: 'Une colonie de bactéries compte initialement', unit: 'individus', mot: `La population est multipliée par $${q}$ à chaque heure` },
            { intro: 'Un message viral est partagé par', unit: 'personnes au départ', mot: `Chaque personne le partage avec $${q}$ nouvelles personnes à chaque étape` },
            { intro: 'Un investissement initial de', unit: '€ est placé avec un facteur multiplicateur de', mot: `Le capital est multiplié par $${q}$ chaque année` }
          ]);
          const un = u0 * Math.pow(q, n);
          return {
            statement: `${ctx.intro} $${u0}$ ${ctx.unit}. ${ctx.mot}.<br/><br/>1) Identifier la nature de la suite et sa raison.<br/>2) Calculer $u_{${n}}$.<br/><br/>Donner la valeur de $u_{${n}}$.`,
            answer: un,
            tolerance: 0.01,
            unit: '',
            hint: `Suite géométrique de raison $q = ${q}$ : $u_n = ${u0} \\times ${q}^n$.`,
            solution: [
              `Suite géométrique de raison $q = ${q}$ et $u_0 = ${u0}$.`,
              `$u_{${n}} = ${u0} \\times ${q}^{${n}} = ${u0} \\times ${Math.pow(q, n)} = ${un}$.`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le carbone 14 ($^{14}\\text{C}$) utilisé en datation archéologique a une demi-vie $t_{1/2} = 5730$ ans. Un échantillon de bois ancien contient $37{,}5\\%$ de la quantité de $^{14}\\text{C}$ d\'un échantillon vivant actuel.',
      schema: null,
      tasks: [
        'Exprimer $N(k) = N_0 \\times \\left(\\dfrac{1}{2}\\right)^k$ où $k$ est le nombre de demi-vies écoulées.',
        'Résoudre $0{,}375 = \\left(\\dfrac{1}{2}\\right)^k$ pour trouver $k$ (décomposer $0{,}375$ en puissance de $\\dfrac{1}{2}$).',
        'En déduire l\'âge de l\'échantillon en années.'
      ],
      solutions: [
        '$N(k) = N_0 \\times (1/2)^k$, donc $N/N_0 = (1/2)^k = 0{,}375$.',
        '$0{,}375 = 3/8 = (1/2)^? $. On vérifie : $(1/2)^1 = 0{,}5$, $(1/2)^2 = 0{,}25$. Ni l\'un ni l\'autre. Mais $3/8 = 3 \\times (1/2)^3$... En fait $(1/2)^k = 3/8$ donne $k = \\log_2(8/3) \\approx 1{,}415$. Plus simplement : $(1/2)^k = 0{,}375$ → $k \\ln(0{,}5) = \\ln(0{,}375)$ → $k = \\ln(0{,}375)/\\ln(0{,}5) \\approx 1{,}415$.',
        'Âge $= k \\times t_{1/2} = 1{,}415 \\times 5730 \\approx 8108$ ans.'
      ],
      finalAnswer: 'L\'échantillon a environ $8100$ ans.'
    },

    evaluation: {
      title: 'Évaluation — Suites numériques',
      duration: '35 min',
      questions: [
        {
          statement: 'Une suite arithmétique a pour premier terme $u_0 = 3$ et pour raison $r = 5$. Calculer $u_{20}$.',
          type: 'numeric',
          answer: 103,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du terme général : $u_n = u_0 + n \\times r$.<br/><br/>Donc $u_{20} = 3 + 20 \\times 5 = 3 + 100 = 103$.'
        },
        {
          statement: 'On considère la suite $(v_n)$ définie par $v_0 = 2$ et $v_{n+1} = 3 v_n$. Quelle est la nature de cette suite ?',
          type: 'multiple-choice',
          options: ['Arithmétique de raison $3$', 'Géométrique de raison $3$', 'Géométrique de raison $2$', 'Ni arithmétique, ni géométrique'],
          answer: 1,
          points: 1,
          correction: 'La relation $v_{n+1} = 3 v_n$ signifie que chaque terme est obtenu en <strong>multipliant</strong> le précédent par $3$.<br/><br/>C\'est donc une suite géométrique de raison $q = 3$. Le quotient de deux termes consécutifs est bien constant.'
        },
        {
          statement: 'Calculer la somme $S = u_0 + u_1 + \\cdots + u_{10}$ pour la suite arithmétique $u_n = 2 + 4n$.',
          type: 'numeric',
          answer: 242,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'On identifie les bornes : $u_0 = 2$ et $u_{10} = 2 + 4 \\times 10 = 42$.<br/><br/>De $u_0$ à $u_{10}$, il y a $11$ termes. On applique la formule : $S = \\dfrac{(u_0 + u_{10}) \\times 11}{2} = \\dfrac{(2 + 42) \\times 11}{2} = \\dfrac{44 \\times 11}{2} = 242$.'
        },
        {
          statement: 'Un capital de $1000$ € est placé à un taux annuel de $5\\%$ à intérêts composés. Au bout de $n$ années, le capital est $C_n = 1000 \\times 1{,}05^n$. Calculer $C_3$ (arrondi au centime).',
          type: 'numeric',
          answer: 1157.63,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'On applique la formule du terme général de la suite géométrique : $C_3 = 1000 \\times (1{,}05)^3$.<br/><br/>$C_3 = 1000 \\times 1{,}157625 = 1157{,}63$ € (arrondi au centime).'
        },
        {
          statement: 'La somme des $6$ premiers termes ($v_0$ à $v_5$) d\'une suite géométrique de premier terme $v_0 = 1$ et de raison $q = 2$ vaut :',
          type: 'multiple-choice',
          options: ['$32$', '$63$', '$64$', '$31$'],
          answer: 1,
          points: 2,
          correction: 'On utilise la formule de somme géométrique avec $v_0 = 1$, $q = 2$ et $6$ termes ($v_0$ à $v_5$).<br/><br/>$S = v_0 \\times \\dfrac{1 - q^{6}}{1 - q} = 1 \\times \\dfrac{1 - 64}{1 - 2} = \\dfrac{-63}{-1} = 63$.'
        }
      ]
    }
  },

    {
    id: '1re-produit-scalaire',
    level: 2, subject: 'maths',
    icon: '⋅',
    title: 'Produit scalaire',
    subtitle: 'Définition, calcul, travail d\'une force',
    keywords: ['Produit scalaire', 'Angle', 'Norme', 'Travail', 'Orthogonalité'],
    physics: 'Travail d\'une force $W = \\vec{F} \\cdot \\vec{d}$, puissance $P = \\vec{F} \\cdot \\vec{v}$',

    cours: {
      intro: 'Le <strong>produit scalaire</strong> "projette" un vecteur sur un autre et retourne un <strong>scalaire</strong> (un nombre réel), jamais un vecteur. Sa formule : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$ où $\\theta$ est l\'angle entre les deux vecteurs.<br/><br/>En physique, le <strong>travail d\'une force</strong> est exactement ce produit scalaire : $W = \\vec{F} \\cdot \\vec{d}$. Si $\\theta = 90°$, cos vaut $0$ donc $W = 0$ (la réaction normale du sol ne travaille pas). Si $\\theta = 180°$, la force s\'oppose au mouvement et $W < 0$ (frottement).<br/><br/>Deux vecteurs sont <strong>orthogonaux</strong> si et seulement si leur produit scalaire est nul : c\'est le critère algébrique de la perpendicularité.',
      definitions: [
        { term: 'Produit scalaire', def: 'Le <strong>produit scalaire</strong> de $\\vec{u}$ et $\\vec{v}$ est le nombre réel $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$. C\'est un <strong>scalaire</strong> (nombre), jamais un vecteur.' },
        { term: 'Norme d\'un vecteur', def: 'La <strong>norme</strong> de $\\vec{u}(x\\,;\\,y)$ est $\\|\\vec{u}\\| = \\sqrt{x^2 + y^2}$. On la retrouve via $\\|\\vec{u}\\|^2 = \\vec{u} \\cdot \\vec{u}$.' },
        { term: 'Orthogonalité', def: 'Deux vecteurs $\\vec{u}$ et $\\vec{v}$ sont <strong>orthogonaux</strong> ($\\vec{u} \\perp \\vec{v}$) si et seulement si $\\vec{u} \\cdot \\vec{v} = 0$. C\'est le critère algébrique de la perpendicularité.' },
        { term: 'Travail d\'une force', def: 'Le <strong>travail</strong> d\'une force $\\vec{F}$ sur un déplacement $\\vec{d}$ est $W = \\vec{F} \\cdot \\vec{d} = Fd\\cos\\theta$. Il peut être positif (moteur), nul (perpendiculaire) ou négatif (résistant).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Définition angulaire : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.',
          'Définition par coordonnées : si $\\vec{u}(x_1, y_1)$ et $\\vec{v}(x_2, y_2)$, alors $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.',
          'Orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. Auto-produit : $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.'
        ]
      },
      example: {
        statement: 'Soit $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$. Calculer $\\vec{u} \\cdot \\vec{v}$, puis déterminer si les vecteurs sont orthogonaux.',
        steps: [
          '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 2 + (-1) \\times 6 = 6 - 6 = 0$.',
          'Puisque $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont <strong>orthogonaux</strong> : $\\vec{u} \\perp \\vec{v}$.',
          'Vérification géométrique : $\\|\\vec{u}\\| = \\sqrt{10}$, $\\|\\vec{v}\\| = \\sqrt{40}$, $\\cos\\theta = 0/(\\sqrt{10}\\sqrt{40}) = 0$ donc $\\theta = 90°$.'
        ],
        answer: '$\\vec{u} \\cdot \\vec{v} = 0$ : les vecteurs $\\vec{u}(3\\,;\\,-1)$ et $\\vec{v}(2\\,;\\,6)$ sont bien orthogonaux.'
      },
      formulas: [
        '$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos\\theta$',
        '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$',
        '$W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$ (travail d\'une force)',
        '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$'
      ],
      recap: [
        'Le produit scalaire est un <strong>nombre réel</strong> (jamais un vecteur). Il peut être positif, négatif ou nul.',
        'Deux formules : $\\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$ (angulaire) et $x_1 x_2 + y_1 y_2$ (coordonnées).',
        'Test d\'orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.',
        'En physique : $W = \\vec{F} \\cdot \\vec{d}$. Travail nul si force perpendiculaire au déplacement.'
      ],
      piege: 'Le produit scalaire est un <strong>nombre</strong> (scalaire), pas un vecteur : $\\vec{u} \\cdot \\vec{v} \\in \\mathbb{R}$.<br/><br/>Il peut être négatif (angle obtus), nul (vecteurs orthogonaux) ou positif (angle aigu).<br/><br/>Un travail négatif signifie que la force s\'oppose au déplacement (force de frottement par exemple).'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $10\\,\\text{N}$ est appliquée selon un angle de $60°$ par rapport au déplacement $\\vec{d}$ de norme $5\\,\\text{m}$. Quel est le travail ?',
        options: ['$50\\,\\text{J}$', '$25\\,\\text{J}$', '$43{,}3\\,\\text{J}$', '$0\\,\\text{J}$'],
        answer: 1,
        correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 10 \\times 5 \\times \\cos(60°) = 10 \\times 5 \\times 0{,}5 = 25\\,\\text{J}$.'
      },
      {
        q: 'Soit $\\vec{u}(3\\,;\\,4)$ et $\\vec{v}(4\\,;\\,-3)$. Un élève calcule $3 \\times 4 + 4 \\times (-3) = 12 - 12 = 0$ et conclut "$\\vec{u} \\perp \\vec{v}$". A-t-il raison ?',
        options: [
          'Oui : le calcul est exact et $\\vec{u} \\cdot \\vec{v} = 0$ prouve bien que $\\vec{u} \\perp \\vec{v}$',
          'Non : le produit scalaire doit être un vecteur, pas un scalaire, donc le résultat est $(7\\,;\\,1)$',
          'Non : $3 \\times 4 + 4 \\times (-3) = 12 + 12 = 24 \\neq 0$',
          'Non : pour tester l\'orthogonalité, il faut utiliser la formule $\\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$, pas les coordonnées'
        ],
        answer: 0,
        correction: 'L\'élève a parfaitement raison. $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 4 + 4 \\times (-3) = 0$.<br/><br/>Par définition, $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow \\vec{u} \\perp \\vec{v}$. Le produit scalaire est bien un <strong>scalaire</strong> (un nombre réel) — pas un vecteur.<br/><br/>L\'option "$(7\\,;\\,1)$" est l\'erreur classique de confondre produit scalaire et addition de vecteurs.'
      },
      {
        q: 'La réaction normale $\\vec{N}$ d\'un sol horizontal est verticale. Le déplacement $\\vec{d}$ est horizontal. Quel est le travail de $\\vec{N}$ ?',
        options: ['$W = N \\times d$', '$W = 0$', '$W = -N \\times d$', 'Dépend de la masse'],
        answer: 1,
        correction: 'La réaction normale est perpendiculaire au déplacement : $\\vec{N} \\perp \\vec{d}$, donc $\\theta = 90°$.<br/><br/>On obtient $W = F d \\cos(90°) = F d \\times 0 = 0\\,\\text{J}$. Une force perpendiculaire au déplacement ne travaille jamais.'
      },
      {
        q: 'La norme de $\\vec{w}(5\\,;\\,12)$ vaut :',
        options: ['$7$', '$17$', '$13$', '$\\sqrt{17}$'],
        answer: 2,
        correction: 'On applique la formule de la norme : $\\|\\vec{w}\\| = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>On peut aussi utiliser l\'auto-produit scalaire : $\\|\\vec{w}\\|^2 = \\vec{w} \\cdot \\vec{w} = 25 + 144 = 169$.'
      },
      {
        q: 'Si $\\vec{u} \\cdot \\vec{v} < 0$, cela signifie que :',
        options: ['Les vecteurs sont orthogonaux', 'L\'angle entre les vecteurs est obtus ($> 90°$)', 'Les normes sont négatives', 'Les vecteurs sont colinéaires'],
        answer: 1,
        correction: 'On part de la formule angulaire : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\|\\vec{v}\\| \\cos\\theta$.<br/><br/>Comme les normes sont toujours positives, $\\vec{u} \\cdot \\vec{v} < 0$ implique nécessairement $\\cos\\theta < 0$, donc $\\theta > 90°$ (angle obtus).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['coord', 'travail']);
        if (mode === 'coord') {
          const x1 = rand(-5, 5), y1 = rand(-5, 5);
          const x2 = rand(-5, 5), y2 = rand(-5, 5);
          const ps = x1 * x2 + y1 * y2;
          const ctx = pick([
            'Dans un plan muni d\'un repère orthonormé, on considère les vecteurs',
            'Un ingénieur modélise deux forces par les vecteurs',
            'En robotique, deux capteurs mesurent des déplacements représentés par'
          ]);
          return {
            statement: `${ctx} $\\vec{u}(${x1}\\,;\\,${y1})$ et $\\vec{v}(${x2}\\,;\\,${y2})$.<br/><br/>1) Calculer $\\vec{u} \\cdot \\vec{v}$.<br/>2) Les vecteurs sont-ils orthogonaux ?<br/><br/>Donner la valeur de $\\vec{u} \\cdot \\vec{v}$.`,
            answer: ps,
            tolerance: 0,
            unit: '',
            hint: `$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2}$.`,
            solution: [
              `$\\vec{u} \\cdot \\vec{v} = ${x1} \\times ${x2 < 0 ? '(' + x2 + ')' : x2} + ${y1} \\times ${y2 < 0 ? '(' + y2 + ')' : y2} = ${x1*x2} + (${y1*y2}) = ${ps}$.`,
              `${ps === 0 ? 'Comme $\\vec{u} \\cdot \\vec{v} = 0$, les vecteurs sont orthogonaux.' : 'Comme $\\vec{u} \\cdot \\vec{v} \\neq 0$, les vecteurs ne sont pas orthogonaux.'}`
            ]
          };
        } else {
          const F = rand(5, 20), d = rand(3, 10), angleDeg = pick([0, 30, 45, 60]);
          const cosVal = Math.cos(angleDeg * Math.PI / 180);
          const answer = parseFloat((F * d * cosVal).toFixed(2));
          const ctx = pick([
            `Un ouvrier tire une caisse avec une force de $${F}\\,\\text{N}$`,
            `Un chien tire sa laisse avec une force de $${F}\\,\\text{N}$`,
            `Un tracteur exerce une force de $${F}\\,\\text{N}$ sur une remorque`
          ]);
          return {
            statement: `${ctx} selon un angle de $${angleDeg}°$ par rapport à l'horizontale. Le déplacement est de $${d}\\,\\text{m}$.<br/><br/>Calculer le travail $W$ en joules.`,
            answer,
            tolerance: 0.1,
            unit: 'J',
            hint: `$W = F \\times d \\times \\cos(${angleDeg}°) = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$.`,
            solution: [
              `$W = ${F} \\times ${d} \\times \\cos(${angleDeg}°)$`,
              `$= ${F} \\times ${d} \\times ${cosVal.toFixed(4)}$`,
              `$= ${answer}\\,\\text{J}$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un ouvrier tire une caisse de $50\\,\\text{kg}$ sur $10\\,\\text{m}$ avec une corde faisant un angle $\\alpha = 30°$ avec l\'horizontale. La force de traction vaut $T = 200\\,\\text{N}$. La force de frottement est $f = 50\\,\\text{N}$ (horizontale, opposée au déplacement). $g = 10\\,\\text{m/s}^2$.',
      schema: null,
      tasks: [
        'Calculer le travail de la traction $W_T = T \\times d \\times \\cos(30°)$.',
        'Calculer le travail du poids $W_P$ et de la réaction normale $W_N$ (horizontale).',
        'Calculer le travail de la force de frottement $W_f$ et le travail total $W_{\\text{total}}$.'
      ],
      solutions: [
        '$W_T = 200 \\times 10 \\times \\cos(30°) = 2000 \\times \\dfrac{\\sqrt{3}}{2} \\approx 1732\\,\\text{J}$.',
        'Le poids est vertical, le déplacement horizontal : $W_P = P \\times d \\times \\cos(90°) = 0$. Idem pour $\\vec{N}$ : $W_N = 0$.',
        '$W_f = f \\times d \\times \\cos(180°) = 50 \\times 10 \\times (-1) = -500\\,\\text{J}$. $W_{\\text{total}} = 1732 + 0 + 0 - 500 = 1232\\,\\text{J}$.'
      ],
      finalAnswer: '$W_{\\text{total}} \\approx 1232\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Produit scalaire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u} \\cdot \\vec{v}$ avec $\\vec{u}(3\\,;\\,-2)$ et $\\vec{v}(4\\,;\\,5)$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On utilise la formule par coordonnées : $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.<br/><br/>$\\vec{u} \\cdot \\vec{v} = 3 \\times 4 + (-2) \\times 5 = 12 - 10 = 2$. Le résultat est positif, donc l\'angle entre les vecteurs est aigu.'
        },
        {
          statement: 'Deux vecteurs $\\vec{a}$ et $\\vec{b}$ vérifient $\\|\\vec{a}\\| = 6$, $\\|\\vec{b}\\| = 4$ et l\'angle entre eux est $\\theta = 60°$. Calculer $\\vec{a} \\cdot \\vec{b}$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la formule angulaire du produit scalaire : $\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\| \\times \\|\\vec{b}\\| \\times \\cos(\\theta)$.<br/><br/>$\\vec{a} \\cdot \\vec{b} = 6 \\times 4 \\times \\cos(60°) = 6 \\times 4 \\times 0{,}5 = 12$.'
        },
        {
          statement: 'Pour quels vecteurs $\\vec{u}(2\\,;\\,k)$ et $\\vec{v}(3\\,;\\,-6)$ a-t-on $\\vec{u} \\perp \\vec{v}$ ?',
          type: 'multiple-choice',
          options: ['$k = -4$', '$k = 1$', '$k = 4$', '$k = -1$'],
          answer: 1,
          points: 2,
          correction: 'Le critère d\'orthogonalité est $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$.<br/><br/>On écrit : $2 \\times 3 + k \\times (-6) = 0$, soit $6 - 6k = 0$, d\'où $k = 1$.'
        },
        {
          statement: 'Une force $\\vec{F}$ de norme $15\\,\\text{N}$ est appliquée selon un angle de $45°$ par rapport au déplacement de $8\\,\\text{m}$. Calculer le travail $W$ en joules (arrondi à $0{,}1$ J).',
          type: 'numeric',
          answer: 84.85,
          tolerance: 0.1,
          unit: 'J',
          points: 2,
          correction: 'On applique la formule du travail : $W = F \\times d \\times \\cos(\\theta)$.<br/><br/>$W = 15 \\times 8 \\times \\cos(45°) = 120 \\times \\dfrac{\\sqrt{2}}{2} = 120 \\times 0{,}7071 \\approx 84{,}85$ J.'
        },
        {
          statement: 'La norme du vecteur $\\vec{w}(5\\,;\\,-12)$ est :',
          type: 'multiple-choice',
          options: ['$7$', '$17$', '$13$', '$\\sqrt{119}$'],
          answer: 2,
          points: 2,
          correction: 'On calcule la norme : $\\|\\vec{w}\\| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.<br/><br/>On peut vérifier via l\'auto-produit scalaire : $\\vec{w} \\cdot \\vec{w} = \\|\\vec{w}\\|^2 = 169$, et $\\sqrt{169} = 13$.'
        }
      ]
    }
  },

    {
    id: '1re-second-degre',
    level: 2, subject: 'maths',
    icon: '🔵',
    title: 'Second degré',
    subtitle: 'Équations, discriminant, factorisation',
    keywords: ['Trinôme', 'Discriminant', 'Racine', 'Factorisation'],
    physics: true,
    cours: {
      intro: 'Une équation du <strong>second degré</strong> modélise toute situation où une quantité dépend du carré d\'une autre : trajectoire d\'un projectile, aire d\'un carré, bénéfice d\'une entreprise.<br/><br/>Le <strong>discriminant</strong> $\\Delta = b^2 - 4ac$ agit comme un capteur : $\\Delta > 0$ signifie que la parabole coupe l\'axe des abscisses en 2 points distincts, $\\Delta = 0$ en 1 point (sommet sur l\'axe), $\\Delta < 0$ jamais.<br/><br/>Une erreur très fréquente : résoudre $x^2 = 9$ et n\'écrire que $x = 3$, en oubliant que $(-3)^2 = 9$ aussi — il y a <strong>deux solutions</strong> $x = 3$ et $x = -3$.<br/><br/>La forme factorisée $a(x-x_1)(x-x_2)$ est très utile en physique pour trouver les instants où une grandeur s\'annule.',
      definitions: [
        { term: 'Trinôme du second degré', def: 'Un <strong>trinôme</strong> est un polynôme de la forme $ax^2 + bx + c$ avec $a \\neq 0$. Sa courbe représentative est une <strong>parabole</strong>.' },
        { term: 'Discriminant', def: 'Le <strong>discriminant</strong> $\\Delta = b^2 - 4ac$ détermine le nombre de racines réelles : $\\Delta > 0$ (deux racines), $\\Delta = 0$ (racine double), $\\Delta < 0$ (aucune racine réelle).' },
        { term: 'Racine', def: 'Une <strong>racine</strong> (ou zéro) de $ax^2 + bx + c$ est une valeur $x_0$ telle que $ax_0^2 + bx_0 + c = 0$. Graphiquement, c\'est un point d\'intersection avec l\'axe des abscisses.' },
        { term: 'Sommet de la parabole', def: 'Le <strong>sommet</strong> a pour abscisse $x_S = -\\dfrac{b}{2a}$ et pour ordonnée $f(x_S)$. C\'est le <strong>maximum</strong> si $a < 0$ ou le <strong>minimum</strong> si $a > 0$.' }
      ],
      method: {
        title: 'Résoudre $ax^2+bx+c=0$',
        steps: [
          'Calculer $\\Delta = b^2-4ac$.',
          'Si $\\Delta < 0$ : pas de solution réelle.',
          'Si $\\Delta = 0$ : une solution double $x_0 = -\\dfrac{b}{2a}$.',
          'Si $\\Delta > 0$ : deux solutions $x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.'
        ]
      },
      example: {
        statement: 'Résoudre $2x^2 - 8x + 6 = 0$ et donner la forme factorisée.',
        steps: [
          'On identifie $a = 2$, $b = -8$, $c = 6$. Calcul du discriminant : $\\Delta = (-8)^2 - 4 \\times 2 \\times 6 = 64 - 48 = 16$.',
          '$\\Delta = 16 > 0$ : deux racines distinctes. $\\sqrt{\\Delta} = 4$.',
          '$x_1 = \\dfrac{8 - 4}{4} = 1$ et $x_2 = \\dfrac{8 + 4}{4} = 3$.'
        ],
        answer: 'Les solutions sont $x_1 = 1$ et $x_2 = 3$. Forme factorisée : $2(x - 1)(x - 3)$.'
      },
      formulas: [
        '$\\Delta = b^2-4ac$',
        '$x_{1,2}=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$ si $\\Delta>0$',
        'Forme factorisée : $a(x-x_1)(x-x_2)$ si $\\Delta>0$'
      ],
      recap: [
        'Toujours calculer $\\Delta = b^2 - 4ac$ <strong>en premier</strong> : c\'est lui qui dicte le nombre de solutions.',
        '$\\Delta > 0$ : deux racines ; $\\Delta = 0$ : racine double ; $\\Delta < 0$ : aucune racine réelle.',
        'Le sommet de la parabole est en $x_S = -b/(2a)$ : c\'est l\'abscisse de l\'extremum.',
        'Si $a > 0$ : parabole "souriante" (minimum). Si $a < 0$ : parabole "triste" (maximum).'
      ],
      piege: 'Attention au <strong>signe de $a$</strong> : si $a<0$ le coefficient de $x^2$ est négatif, ne pas oublier de l\'inclure dans $\\Delta$.<br/><br/>Autre piège classique : résoudre $x^2 = k$ et ne donner qu\'une seule solution. Il y en a toujours <strong>deux</strong> si $k > 0$ : $x = \\sqrt{k}$ et $x = -\\sqrt{k}$.'
    },
    quiz: [
      { q: 'Résoudre $x^2 = 9$. Laquelle de ces affirmations est CORRECTE ?', options: ['La seule solution est $x = 3$ car $\\sqrt{9} = 3$', 'Les solutions sont $x = 3$ et $x = -3$ car $(\\pm 3)^2 = 9$', 'La seule solution est $x = -3$ car le discriminant donne une solution négative', 'Il n\'y a pas de solution car $b = c = 0$'], answer: 1, correction: '$x^2 = 9$ revient à $x^2 - 9 = 0$, soit $(x-3)(x+3) = 0$.<br/><br/>Il y a bien <strong>deux solutions</strong> : $x = 3$ et $x = -3$. L\'erreur classique est d\'écrire uniquement $x = \\sqrt{9} = 3$ car on oublie que $(-3)^2 = 9$ également.<br/><br/>Retiens : toujours vérifier les deux signes !' },
      { q: 'Si $\\Delta=0$, l\'équation $ax^2+bx+c=0$ a :', options: ['Deux solutions distinctes', 'Pas de solution', 'Une solution double', 'Une infinité de solutions'], answer: 2, correction: 'Quand le discriminant est nul ($\\Delta = 0$), la parabole est tangente à l\'axe des abscisses.<br/><br/>Il y a une <strong>solution double</strong> : $x_0 = -b/(2a)$.' },
      { q: 'Les solutions de $x^2-5x+6=0$ sont :', options: ['$x=1$ et $x=6$', '$x=2$ et $x=3$', '$x=-2$ et $x=-3$', '$x=5$ et $x=1$'], answer: 1, correction: 'On identifie $a = 1$, $b = -5$, $c = 6$. Le discriminant vaut $\\Delta = 25 - 24 = 1 > 0$.<br/><br/>Les deux racines sont $x_1 = \\frac{5-1}{2} = 2$ et $x_2 = \\frac{5+1}{2} = 3$.' },
      { q: 'Le sommet de la parabole $f(x) = -2x^2 + 8x - 3$ est en :', options: ['$(2\\,;\\,5)$', '$(4\\,;\\,-3)$', '$(-2\\,;\\,-27)$', '$(2\\,;\\,-3)$'], answer: 0, correction: 'L\'abscisse du sommet est $x_S = -\\dfrac{b}{2a} = -\\dfrac{8}{2 \\times (-2)} = -\\dfrac{8}{-4} = 2$.<br/><br/>L\'ordonnée du sommet est $f(2) = -2 \\times 4 + 8 \\times 2 - 3 = -8 + 16 - 3 = 5$.<br/><br/>Le sommet est donc $(2\\,;\\,5)$. Comme $a = -2 < 0$, c\'est un <strong>maximum</strong>.' },
      { q: 'L\'équation $3x^2 + 2x + 1 = 0$ a pour discriminant :', options: ['$\\Delta = 16$', '$\\Delta = -8$', '$\\Delta = 8$', '$\\Delta = -16$'], answer: 1, correction: 'On calcule le discriminant : $\\Delta = 2^2 - 4 \\times 3 \\times 1 = 4 - 12 = -8$.<br/><br/>Comme $\\Delta < 0$, l\'équation n\'a <strong>aucune solution réelle</strong>. La parabole ne coupe jamais l\'axe des abscisses.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(1, 5), r2 = rand(r1 + 1, r1 + 5);
        const a = pick([1, 2]);
        const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
        const delta = bCoef * bCoef - 4 * a * cCoef;
        const sqrtDelta = Math.sqrt(delta);
        const ctx = pick([
          { intro: 'La trajectoire d\'un ballon est modélisée par $h(x) = ', question: 'Déterminer les distances $x$ auxquelles le ballon touche le sol ($h = 0$).' },
          { intro: 'Le bénéfice d\'une start-up (en k€) est donné par $B(x) = ', question: 'Pour quelles valeurs de $x$ le bénéfice est-il nul ?' },
          { intro: 'Soit l\'équation $', question: 'Résoudre cette équation.' }
        ]);
        return {
          statement: `${ctx.intro}${a === 1 ? '' : a}x^2 ${bCoef >= 0 ? '+' + bCoef : bCoef}x ${cCoef >= 0 ? '+' + cCoef : cCoef}${ctx.intro.includes('équation') ? ' = 0$.' : '$.'}<br/><br/>${ctx.question}<br/>1) Calculer $\\Delta$.<br/>2) En déduire les solutions.<br/><br/>Donner la <strong>plus grande</strong> racine.`,
          answer: r2,
          tolerance: 0.01,
          unit: '',
          hint: `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef}$. Puis $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.`,
          solution: [
            `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef} = ${bCoef*bCoef} - ${4*a*cCoef} = ${delta}$.`,
            `$\\sqrt{\\Delta} = ${sqrtDelta}$. $x_1 = \\dfrac{${-bCoef} - ${sqrtDelta}}{${2*a}} = ${r1}$ et $x_2 = \\dfrac{${-bCoef} + ${sqrtDelta}}{${2*a}} = ${r2}$.`,
            `La plus grande racine est $x_2 = ${r2}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une balle est lancée verticalement. Sa hauteur (en m) est $h(t)=-5t^2+20t+1$ où $t$ est en secondes.',
      tasks: [
        'À quel instant la balle est-elle à $h=16$ m ?',
        'Calculer le discriminant et résoudre.',
        'Quand la balle touche-t-elle le sol ($h=0$) ?'
      ],
      solutions: [
        '$-5t^2+20t+1=16 \\Rightarrow -5t^2+20t-15=0 \\Rightarrow t^2-4t+3=0$.',
        '$\\Delta=16-12=4$. $t_1=\\frac{4-2}{2}=1$ s et $t_2=\\frac{4+2}{2}=3$ s.',
        '$-5t^2+20t+1=0$ ; $\\Delta=400+20=420$ ; $t=\\frac{-20+\\sqrt{420}}{-10}\\approx 4{,}05$ s.'
      ],
      finalAnswer: 'La balle est à $16$ m en $t=1$ s et $t=3$ s. Elle touche le sol vers $t\\approx 4{,}05$ s.'
    },

    evaluation: {
      title: 'Évaluation — Second degré',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le discriminant de $2x^2 - 7x + 3 = 0$.',
          type: 'numeric',
          answer: 25,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On identifie $a = 2$, $b = -7$, $c = 3$ et on applique la formule du discriminant.<br/><br/>$\\Delta = b^2 - 4ac = (-7)^2 - 4 \\times 2 \\times 3 = 49 - 24 = 25$.'
        },
        {
          statement: 'Résoudre $2x^2 - 7x + 3 = 0$. Donner la plus grande racine.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On a trouvé $\\Delta = 25$, donc $\\sqrt{\\Delta} = 5$.<br/><br/>Les racines sont $x_1 = \\dfrac{7 - 5}{4} = \\dfrac{1}{2}$ et $x_2 = \\dfrac{7 + 5}{4} = 3$.<br/><br/>La plus grande racine est $x_2 = 3$.'
        },
        {
          statement: 'L\'équation $x^2 + 2x + 5 = 0$ admet :',
          type: 'multiple-choice',
          options: ['Deux solutions réelles distinctes', 'Une solution double', 'Aucune solution réelle', 'Une infinité de solutions'],
          answer: 2,
          points: 2,
          correction: 'On calcule $\\Delta = b^2 - 4ac = 4 - 20 = -16$.<br/><br/>Le discriminant est strictement négatif ($\\Delta < 0$), donc l\'équation n\'admet <strong>aucune solution réelle</strong>. La parabole ne coupe pas l\'axe des abscisses.'
        },
        {
          statement: 'La forme factorisée de $x^2 - 6x + 8$ est :',
          type: 'multiple-choice',
          options: ['$(x - 2)(x + 4)$', '$(x - 2)(x - 4)$', '$(x + 2)(x - 4)$', '$(x - 1)(x - 8)$'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 32 = 4 > 0$, donc $\\sqrt{\\Delta} = 2$.<br/><br/>Les racines sont $x_1 = \\dfrac{6 - 2}{2} = 2$ et $x_2 = \\dfrac{6 + 2}{2} = 4$.<br/><br/>La forme factorisée s\'écrit $a(x - x_1)(x - x_2) = (x - 2)(x - 4)$ (ici $a = 1$).'
        },
        {
          statement: 'Le sommet de la parabole $f(x) = -3x^2 + 12x - 7$ a pour abscisse :',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule de l\'abscisse du sommet : $x_s = -\\dfrac{b}{2a}$.<br/><br/>$x_s = -\\dfrac{12}{2 \\times (-3)} = -\\dfrac{12}{-6} = 2$. Comme $a = -3 < 0$, ce sommet correspond à un <strong>maximum</strong>.'
        }
      ]
    }
  },

    {
    id: '1re-polynomes-signe',
    level: 2, subject: 'maths',
    icon: '📉',
    title: 'Signe d\'un trinôme du second degré',
    subtitle: 'Tableau de signe, inéquations du second degré',
    keywords: ['Trinôme', 'Tableau de signe', 'Inéquation', 'Second degré'],
    physics: false,
    cours: {
      intro: 'Le signe d\'un trinôme est entièrement déterminé par deux éléments : le <strong>coefficient $a$</strong> et le <strong>discriminant $\\Delta$</strong>.<br/><br/>L\'intuition géométrique : si $a > 0$, la parabole "sourit" (ouverte vers le haut) — elle est positive aux extrémités et négative dans le creux entre ses racines. Si $a < 0$, la parabole est renversée : positive entre ses racines, négative à l\'extérieur.<br/><br/>C\'est le piège le plus fréquent : les élèves appliquent systématiquement la règle "négatif entre les racines" sans vérifier le <strong>signe de $a$</strong>.<br/><br/>Si $\\Delta < 0$, la parabole ne coupe jamais l\'axe des abscisses : son signe est constant, égal au signe de $a$ sur tout $\\mathbb{R}$.',
      definitions: [
        { term: 'Signe d\'un trinôme', def: 'Le <strong>signe</strong> d\'un trinôme $ax^2 + bx + c$ sur un intervalle indique où l\'expression est positive, négative ou nulle. Il dépend de $a$ et $\\Delta$.' },
        { term: 'Tableau de signe', def: 'Le <strong>tableau de signe</strong> résume les intervalles où le trinôme est positif, négatif ou nul. Les racines (si elles existent) sont les seuls changements de signe.' },
        { term: 'Inéquation du second degré', def: 'Résoudre une <strong>inéquation</strong> $ax^2 + bx + c > 0$ (ou $< 0$, $\\geq 0$, $\\leq 0$) revient à lire les intervalles dans le tableau de signe.' },
        { term: 'Signe de $a$', def: 'Le coefficient $a$ détermine l\'<strong>orientation</strong> de la parabole : si $a > 0$ (parabole vers le haut), le trinôme est du signe de $a$ <strong>à l\'extérieur</strong> des racines ; si $a < 0$, c\'est l\'inverse.' }
      ],
      method: {
        title: 'Établir le tableau de signe',
        steps: [
          'Calculer $\\Delta$ et les racines éventuelles $x_1 < x_2$.',
          'Si $\\Delta < 0$ : le signe est celui de $a$ sur $\\mathbb{R}$ entier.',
          'Si $\\Delta = 0$ : le signe est celui de $a$, sauf en $x_0$ où il est nul.',
          'Si $\\Delta > 0$ : le trinôme est de signe opposé à $a$ entre $x_1$ et $x_2$, et de même signe que $a$ en dehors.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-x^2 + 4x - 3 \\geq 0$.',
        steps: [
          'On identifie $a = -1$, $b = 4$, $c = -3$. Calcul : $\\Delta = 16 - 12 = 4 > 0$.',
          'Racines : $x_1 = \\dfrac{-4 + 2}{-2} = 1$ et $x_2 = \\dfrac{-4 - 2}{-2} = 3$.',
          '$a = -1 < 0$ : le trinôme est <strong>positif entre les racines</strong>. Donc $-x^2 + 4x - 3 \\geq 0$ pour $x \\in [1\\,;\\,3]$.'
        ],
        answer: 'L\'ensemble solution est $[1\\,;\\,3]$. Attention : $a < 0$ inverse la règle habituelle !'
      },
      formulas: [
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c < 0 \\Leftrightarrow x_1 < x < x_2$',
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c > 0 \\Leftrightarrow x < x_1$ ou $x > x_2$'
      ],
      recap: [
        '<strong>Première étape</strong> : toujours identifier le signe de $a$ (orientation de la parabole).',
        '$\\Delta > 0$ : le signe change aux racines. $\\Delta = 0$ : nul au sommet. $\\Delta < 0$ : signe constant (celui de $a$).',
        'Si $a > 0$ : le trinôme est négatif <strong>entre</strong> les racines. Si $a < 0$ : il est positif <strong>entre</strong> les racines.',
        'Pour une inéquation, d\'abord le tableau de signe, ensuite la lecture des intervalles solutions.'
      ],
      piege: 'Si $a < 0$, les inégalités sont <strong>inversées</strong> ! Le trinôme est alors positif entre les racines et négatif à l\'extérieur.<br/><br/>Toujours commencer par vérifier le signe de $a$ avant de dresser le tableau de signe.'
    },
    quiz: [
      { q: 'Le trinôme $-x^2+5x-6$ a pour racines $x_1=2$ et $x_2=3$. Un élève dit : "il est négatif pour $2<x<3$." Quelle est son erreur ?', options: ['Il a oublié que $a=-1<0$ : le trinôme est POSITIF entre les racines ($2<x<3$) et NÉGATIF à l\'extérieur', 'L\'élève a raison, tout trinôme est négatif entre ses racines', 'Les racines sont incorrectes, il faudrait $x_1=-3$ et $x_2=-2$', 'On ne peut pas déterminer le signe sans calculer le discriminant d\'abord'], answer: 0, correction: 'La règle "négatif entre les racines" ne s\'applique qu\'à condition que $a > 0$.<br/><br/>Ici $a = -1 < 0$ : la parabole est renversée, donc le trinôme est <strong>positif</strong> entre les racines ($2 < x < 3$) et <strong>négatif</strong> à l\'extérieur ($x < 2$ ou $x > 3$).<br/><br/>Retiens : toujours commencer par vérifier le signe de $a$ !' },
      { q: 'Si $\\Delta<0$ et $a>0$, le trinôme est :', options: ['Toujours négatif', 'Toujours positif', 'Nul partout', 'Tantôt positif, tantôt négatif'], answer: 1, correction: '$\\Delta < 0$ signifie que la parabole ne coupe pas l\'axe des abscisses : il n\'y a pas de racine réelle.<br/><br/>Comme $a > 0$, le trinôme est du signe de $a$, donc <strong>toujours positif</strong> sur $\\mathbb{R}$.' },
      { q: 'Résoudre $x^2-x-6>0$ (racines $-2$ et $3$, $a=1>0$) :', options: ['$]-2;3[$', '$]-\\infty;-2[\\cup]3;+\\infty[$', '$x>3$', '$x<-2$'], answer: 1, correction: 'Comme $a = 1 > 0$, le trinôme est du signe de $a$ à l\'extérieur des racines, c\'est-à-dire <strong>positif</strong>.<br/><br/>L\'ensemble solution de $x^2 - x - 6 > 0$ est donc $x < -2$ ou $x > 3$, soit $]-\\infty\\,;\\,-2[ \\cup ]3\\,;\\,+\\infty[$.' },
      { q: 'Le trinôme $x^2 + x + 1$ est :', options: ['Toujours positif car $\\Delta = -3 < 0$ et $a = 1 > 0$', 'Toujours négatif', 'Positif uniquement pour $x > 0$', 'Nul en $x = -1$'], answer: 0, correction: 'On calcule $\\Delta = 1 - 4 = -3 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$, c\'est-à-dire <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$.' },
      { q: 'L\'ensemble solution de $-2x^2 + 6x - 4 \\leq 0$ (racines $1$ et $2$) est :', options: ['$[1\\,;\\,2]$', '$]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$', '$\\mathbb{R}$', '$\\emptyset$'], answer: 1, correction: 'On identifie $a = -2 < 0$ : la parabole est retournée.<br/><br/>Le trinôme est <strong>positif entre les racines</strong> ($[1\\,;\\,2]$) et <strong>négatif à l\'extérieur</strong>.<br/><br/>Donc $-2x^2 + 6x - 4 \\leq 0$ pour $x \\in ]-\\infty\\,;\\,1] \\cup [2\\,;\\,+\\infty[$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(-4, 0), r2 = rand(1, 5);
        const aSign = pick([1, -1]);
        const a = aSign;
        const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
        const delta = bCoef * bCoef - 4 * a * cCoef;
        const ctx = pick([
          { intro: 'La concentration d\'un produit chimique est modélisée par $C(x) = ', question: 'Pour quelles valeurs de $x$ la concentration est-elle positive ?' },
          { intro: 'Le profit d\'une entreprise est $P(x) = ', question: 'Pour quelles valeurs de $x$ le profit est-il positif ?' },
          { intro: 'On considère le trinôme $f(x) = ', question: 'Résoudre $f(x) > 0$.' }
        ]);
        const borneGauche = a > 0 ? r1 : r2;
        const signeInfo = a > 0 ? `$a = ${a} > 0$ : positif à l'extérieur des racines, négatif entre.` : `$a = ${a} < 0$ : positif entre les racines, négatif à l'extérieur.`;
        const reponse = a > 0 ? r2 : r1;
        return {
          statement: `${ctx.intro}${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${bCoef >= 0 ? '+' + bCoef : bCoef}x ${cCoef >= 0 ? '+' + cCoef : cCoef}$.<br/><br/>Les racines sont $x_1 = ${r1}$ et $x_2 = ${r2}$.<br/><br/>1) Identifier le signe de $a$.<br/>2) Dresser le tableau de signe.<br/>3) ${ctx.question}<br/><br/>Donner la borne ${a > 0 ? 'droite' : 'gauche'} de l'intervalle où le trinôme est positif (la plus ${a > 0 ? 'petite' : 'grande'}).`,
          answer: reponse,
          tolerance: 0,
          unit: '',
          hint: `${signeInfo} Les racines sont $${r1}$ et $${r2}$.`,
          solution: [
            `${signeInfo}`,
            `${a > 0 ? 'Positif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$ ; négatif pour $' + r1 + ' < x < ' + r2 + '$.' : 'Positif pour $' + r1 + ' < x < ' + r2 + '$ ; négatif pour $x < ' + r1 + '$ ou $x > ' + r2 + '$.'}`,
            `Borne demandée : $${reponse}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Le bénéfice d\'une entreprise (en milliers d\'euros) est modélisé par $B(x)=-x^2+6x-5$ où $x$ est le nombre de produits (en centaines) vendus.',
      tasks: [
        'Calculer les racines de $B(x)=0$.',
        'Sur quel intervalle le bénéfice est-il positif ?',
        'Quel nombre de produits maximise le bénéfice, et quelle est cette valeur maximale ?'
      ],
      solutions: [
        '$\\Delta=36-20=16$. $x_1=\\frac{-6+4}{-2}=1$ ; $x_2=\\frac{-6-4}{-2}=5$.',
        '$a=-1<0$ : $B(x)>0$ entre les racines, soit pour $1<x<5$ (100 à 500 produits).',
        'Sommet en $x_s=-b/(2a)=6/(-2)=3$. $B(3)=-9+18-5=4$ (soit $4000$ €).'
      ],
      finalAnswer: 'Bénéfice positif pour $x\\in]1;5[$. Maximum $4000$ € pour $300$ produits.'
    },

    evaluation: {
      title: 'Évaluation — Signe d\'un trinôme',
      duration: '30 min',
      questions: [
        {
          statement: 'Le trinôme $f(x) = x^2 - 4x - 5$ a pour racines $x_1 = -1$ et $x_2 = 5$. Sur quel intervalle $f(x) < 0$ ?',
          type: 'multiple-choice',
          options: ['$]-\\infty\\,;\\,-1[ \\cup ]5\\,;\\,+\\infty[$', '$]-1\\,;\\,5[$', '$]0\\,;\\,5[$', '$]-5\\,;\\,1[$'],
          answer: 1,
          points: 2,
          correction: 'On identifie $a = 1 > 0$ : la parabole est orientée vers le haut.<br/><br/>Le trinôme est donc <strong>négatif entre les racines</strong>. Ainsi $f(x) < 0$ pour $x \\in ]-1\\,;\\,5[$.'
        },
        {
          statement: 'Le trinôme $g(x) = -2x^2 + 8x - 6$ a pour racines $1$ et $3$. Pour quelles valeurs de $x$ a-t-on $g(x) > 0$ ?',
          type: 'multiple-choice',
          options: ['$x < 1$ ou $x > 3$', '$1 < x < 3$', '$x > 3$', '$x < 1$'],
          answer: 1,
          points: 2,
          correction: 'On note $a = -2 < 0$ : la parabole est retournée (ouverte vers le bas).<br/><br/>Le trinôme est donc <strong>positif entre les racines</strong>. Ainsi $g(x) > 0$ pour $x \\in ]1\\,;\\,3[$.'
        },
        {
          statement: 'Résoudre l\'inéquation $x^2 + 3x + 5 > 0$. Quel est l\'ensemble solution ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$ (toujours vrai)', 'Ensemble vide', '$]-\\infty\\,;\\,-1[$', '$]0\\,;\\,+\\infty[$'],
          answer: 0,
          points: 2,
          correction: 'On calcule $\\Delta = 9 - 20 = -11 < 0$ : pas de racine réelle.<br/><br/>Comme $a = 1 > 0$, le trinôme est du signe de $a$ partout, donc <strong>strictement positif</strong> pour tout $x \\in \\mathbb{R}$. L\'ensemble solution est $\\mathbb{R}$ entier.'
        },
        {
          statement: 'Les racines de $2x^2 - 10x + 12 = 0$ sont $x_1 = 2$ et $x_2 = 3$. Calculer $\\Delta$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du discriminant : $\\Delta = (-10)^2 - 4 \\times 2 \\times 12 = 100 - 96 = 4$.<br/><br/>$\\Delta > 0$ confirme bien l\'existence de deux racines réelles distinctes.'
        },
        {
          statement: 'On sait que $-x^2 + 6x - 9 \\leq 0$ pour tout $x$. Quelle est la valeur de $x$ pour laquelle $-x^2 + 6x - 9 = 0$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 36 = 0$ : il y a une <strong>solution double</strong>.<br/><br/>$x_0 = \\dfrac{-6}{2 \\times (-1)} = 3$.<br/><br/>Puisque $a = -1 < 0$ et $\\Delta = 0$, le trinôme est $\\leq 0$ partout, et nul uniquement en $x = 3$.'
        }
      ]
    }
  },

    {
    id: '1re-trigonometrie',
    level: 2, subject: 'maths',
    icon: '🔄',
    title: 'Trigonométrie — cercle trigonométrique',
    subtitle: 'Radians, cos, sin, valeurs remarquables',
    keywords: ['Radian', 'Cercle trigonométrique', 'Cosinus', 'Sinus', 'Valeurs remarquables'],
    physics: true,
    cours: {
      intro: 'Le <strong>cercle trigonométrique</strong> unifie toutes les définitions du cosinus et du sinus : pour tout angle $\\theta$ en radians, le point $M(\\cos\\theta\\,;\\,\\sin\\theta)$ se trouve sur le cercle de rayon $1$. Cela généralise le triangle rectangle à tous les angles réels.<br/><br/>Le <strong>radian</strong> est l\'unité naturelle : $\\pi$ rad $= 180°$, un tour complet $= 2\\pi$ rad. Les formules de dérivée ($(\\sin x)\' = \\cos x$) ne sont valides qu\'en radians.<br/><br/>Deux familles de <strong>valeurs remarquables</strong> sont souvent confondues : $\\cos(\\pi/6)=\\frac{\\sqrt{3}}{2}$ et $\\cos(\\pi/3)=\\frac{1}{2}$.<br/><br/>Pour les retenir, penser que plus l\'angle est grand, plus le cosinus est petit (le cosinus décroît de $0$ à $\\pi$).',
      definitions: [
        { term: 'Radian', def: 'Le <strong>radian</strong> est l\'unité naturelle de mesure d\'angle : $\\pi$ rad $= 180°$. Un tour complet vaut $2\\pi$ rad. Conversion : $\\alpha_{\\text{rad}} = \\alpha_{\\text{deg}} \\times \\dfrac{\\pi}{180}$.' },
        { term: 'Cercle trigonométrique', def: 'Le <strong>cercle trigonométrique</strong> est le cercle de centre $O$ et de rayon $1$. Tout point du cercle a pour coordonnées $(\\cos\\theta\\,;\\,\\sin\\theta)$.' },
        { term: 'Cosinus et sinus', def: 'Pour un angle $\\theta$, $\\cos\\theta$ est l\'<strong>abscisse</strong> et $\\sin\\theta$ l\'<strong>ordonnée</strong> du point associé sur le cercle trigonométrique. On a toujours $\\cos^2\\theta + \\sin^2\\theta = 1$.' },
        { term: 'Valeurs remarquables', def: 'Les angles $0$, $\\dfrac{\\pi}{6}$, $\\dfrac{\\pi}{4}$, $\\dfrac{\\pi}{3}$, $\\dfrac{\\pi}{2}$ ont des cosinus et sinus exacts à connaître par cœur : ils forment la base de tous les calculs trigonométriques.' }
      ],
      method: {
        title: 'Conversion et valeurs remarquables',
        steps: [
          'Conversion : $\\text{rad} = \\text{degrés} \\times \\dfrac{\\pi}{180}$.',
          'Valeurs remarquables : $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$.',
          'Périodicité : $\\cos(\\theta+2\\pi)=\\cos\\theta$, $\\sin(\\theta+2\\pi)=\\sin\\theta$.',
          'Parité : $\\cos(-\\theta)=\\cos\\theta$ (pair) ; $\\sin(-\\theta)=-\\sin\\theta$ (impair).'
        ]
      },
      example: {
        statement: 'Calculer les coordonnées exactes du point $M$ sur le cercle trigonométrique pour $\\theta = \\dfrac{5\\pi}{6}$.',
        steps: [
          'On décompose : $\\dfrac{5\\pi}{6} = \\pi - \\dfrac{\\pi}{6}$. On utilise les formules de symétrie.',
          '$\\cos\\left(\\pi - \\alpha\\right) = -\\cos\\alpha$ et $\\sin\\left(\\pi - \\alpha\\right) = \\sin\\alpha$.',
          '$\\cos\\dfrac{5\\pi}{6} = -\\cos\\dfrac{\\pi}{6} = -\\dfrac{\\sqrt{3}}{2}$ et $\\sin\\dfrac{5\\pi}{6} = \\sin\\dfrac{\\pi}{6} = \\dfrac{1}{2}$.'
        ],
        answer: '$M\\left(-\\dfrac{\\sqrt{3}}{2}\\,;\\,\\dfrac{1}{2}\\right)$. Le point est dans le 2e quadrant (abscisse négative, ordonnée positive).'
      },
      formulas: [
        '$\\cos^2\\theta+\\sin^2\\theta=1$',
        '$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$',
        '$\\cos\\frac{\\pi}{4}=\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$',
        '$\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$'
      ],
      recap: [
        'Conversion : $\\text{radians} = \\text{degrés} \\times \\dfrac{\\pi}{180}$. Toujours travailler en radians pour les dérivées.',
        '$\\cos^2\\theta + \\sin^2\\theta = 1$ : la relation fondamentale, valide pour tout angle $\\theta$.',
        'Cosinus est <strong>pair</strong> ($\\cos(-\\theta) = \\cos\\theta$) ; sinus est <strong>impair</strong> ($\\sin(-\\theta) = -\\sin\\theta$).',
        'Mnémotechnique : quand l\'angle croît de $0$ à $\\pi/2$, le cosinus <strong>décroît</strong> et le sinus <strong>croît</strong>.'
      ],
      piege: 'Ne pas confondre $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ et $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$ : les deux sont souvent intervertis !<br/><br/>Astuce : le cosinus <strong>décroît</strong> quand l\'angle croît. Donc $\\cos(\\pi/6) > \\cos(\\pi/3)$, ce qui donne $\\frac{\\sqrt{3}}{2} > \\frac{1}{2}$.'
    },
    quiz: [
      { q: 'Convertir $60°$ en radians :', options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'], answer: 1, correction: 'On applique la formule de conversion : $60 \\times \\frac{\\pi}{180} = \\frac{60\\pi}{180} = \\frac{\\pi}{3}$.<br/><br/>Retiens que $60°$ correspond à un sixième de tour, soit $\\frac{\\pi}{3}$ radians.' },
      { q: '$\\sin\\frac{\\pi}{2}=$', options: ['$0$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$1$'], answer: 3, correction: 'Sur le cercle trigonométrique, $\\frac{\\pi}{2}$ correspond au point $(0\\,;\\,1)$.<br/><br/>Le sinus étant l\'ordonnée du point, on a $\\sin\\frac{\\pi}{2} = 1$. C\'est la valeur maximale que le sinus peut atteindre.' },
      { q: 'Laquelle de ces affirmations est VRAIE ?', options: ['$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{1}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$', '$\\cos\\dfrac{\\pi}{3}=1$ et $\\sin\\dfrac{\\pi}{3}=0$'], answer: 0, correction: '$\\cos(\\pi/3) = 1/2$ et $\\sin(\\pi/3) = \\sqrt{3}/2$.<br/><br/>L\'option B est l\'erreur la plus fréquente : elle confond $\\pi/3$ avec $\\pi/6$ (qui donne $\\cos(\\pi/6) = \\sqrt{3}/2$ et $\\sin(\\pi/6) = 1/2$). L\'option C correspond à $\\pi/4$.<br/><br/>Moyen mnémotechnique : le cosinus <strong>descend</strong> quand l\'angle monte — $\\cos(\\pi/6) > \\cos(\\pi/4) > \\cos(\\pi/3)$.' },
      { q: 'La valeur de $\\cos\\left(\\dfrac{2\\pi}{3}\\right)$ est :', options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'], answer: 1, correction: 'On décompose l\'angle : $\\dfrac{2\\pi}{3} = \\pi - \\dfrac{\\pi}{3}$.<br/><br/>Par la formule de symétrie $\\cos(\\pi - \\alpha) = -\\cos\\alpha$, on obtient : $\\cos\\dfrac{2\\pi}{3} = -\\cos\\dfrac{\\pi}{3} = -\\dfrac{1}{2}$.' },
      { q: 'Sachant que $\\sin\\theta = 0{,}8$ et $\\theta \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, $\\cos\\theta$ vaut :', options: ['$0{,}2$', '$0{,}6$', '$0{,}36$', '$-0{,}6$'], answer: 1, correction: 'On utilise la relation fondamentale : $\\cos^2\\theta = 1 - \\sin^2\\theta = 1 - 0{,}64 = 0{,}36$.<br/><br/>Comme $\\theta \\in [0\\,;\\,\\pi/2]$, le cosinus est positif, donc $\\cos\\theta = \\sqrt{0{,}36} = 0{,}6$. Attention à toujours vérifier le signe selon le quadrant !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [
          { deg: 120, rad: '2\\pi/3', cos: -0.5, sin: 0.866, decomp: '\\pi - \\pi/3', base: '\\pi/3' },
          { deg: 150, rad: '5\\pi/6', cos: -0.866, sin: 0.5, decomp: '\\pi - \\pi/6', base: '\\pi/6' },
          { deg: 210, rad: '7\\pi/6', cos: -0.866, sin: -0.5, decomp: '\\pi + \\pi/6', base: '\\pi/6' },
          { deg: 240, rad: '4\\pi/3', cos: -0.5, sin: -0.866, decomp: '\\pi + \\pi/3', base: '\\pi/3' },
          { deg: 300, rad: '5\\pi/3', cos: 0.5, sin: -0.866, decomp: '2\\pi - \\pi/3', base: '\\pi/3' },
          { deg: 330, rad: '11\\pi/6', cos: 0.866, sin: -0.5, decomp: '2\\pi - \\pi/6', base: '\\pi/6' }
        ];
        const a = pick(angles);
        const func = pick(['cos', 'sin']);
        const answer = func === 'cos' ? a.cos : a.sin;
        const ctx = pick([
          `Sur le cercle trigonométrique, on considère l'angle $\\theta = ${a.rad}$ rad (soit $${a.deg}°$).`,
          `Un pendule est incliné d'un angle $\\theta = ${a.deg}°$ soit $${a.rad}$ rad.`,
          `En électricité, la phase d'un signal est $\\theta = ${a.rad}$ rad.`
        ]);
        return {
          statement: `${ctx}<br/><br/>1) Décomposer $${a.rad}$ à l'aide d'un angle remarquable.<br/>2) Calculer $\\${func}\\left(${a.rad}\\right)$.<br/><br/>Donner la valeur approchée à $0{,}001$.`,
          answer: answer,
          tolerance: 0.002,
          unit: '',
          hint: `Décompose : $${a.rad} = ${a.decomp}$. Puis utilise les formules de symétrie avec l'angle de base $${a.base}$.`,
          solution: [
            `$${a.rad} = ${a.decomp}$.`,
            `En utilisant les formules de symétrie : $\\${func}(${a.rad}) \\approx ${answer}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un point $M$ se déplace sur un cercle de rayon $5$ m. Sa position est $M(5\\cos\\theta ; 5\\sin\\theta)$.',
      tasks: [
        'Donner les coordonnées de $M$ pour $\\theta=\\frac{\\pi}{3}$.',
        'Pour quelle valeur de $\\theta\\in[0;2\\pi]$ la coordonnée $y$ de $M$ est-elle maximale ?',
        'Vérifier que $OM=5$ quelle que soit la valeur de $\\theta$.'
      ],
      solutions: [
        '$M\\left(5\\times\\frac{1}{2};5\\times\\frac{\\sqrt{3}}{2}\\right)=\\left(\\frac{5}{2};\\frac{5\\sqrt{3}}{2}\\right)$.',
        '$y=5\\sin\\theta$ est max quand $\\sin\\theta=1$, soit $\\theta=\\frac{\\pi}{2}$.',
        '$OM=\\sqrt{(5\\cos\\theta)^2+(5\\sin\\theta)^2}=5\\sqrt{\\cos^2\\theta+\\sin^2\\theta}=5\\times1=5$.'
      ],
      finalAnswer: '$M(5/2 ; 5\\sqrt{3}/2)$ pour $\\theta=\\pi/3$ ; $y$ max en $\\theta=\\pi/2$.'
    },

    evaluation: {
      title: 'Évaluation — Trigonométrie',
      duration: '30 min',
      questions: [
        {
          statement: 'Convertir $\\dfrac{5\\pi}{6}$ radians en degrés.',
          type: 'numeric',
          answer: 150,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Pour convertir des radians en degrés, on multiplie par $\\dfrac{180}{\\pi}$.<br/><br/>$\\dfrac{5\\pi}{6} \\times \\dfrac{180}{\\pi} = \\dfrac{5 \\times 180}{6} = \\dfrac{900}{6} = 150°$.'
        },
        {
          statement: 'Calculer $\\cos^2\\left(\\dfrac{\\pi}{4}\\right) + \\sin^2\\left(\\dfrac{\\pi}{3}\\right)$. Donner la valeur exacte sous forme décimale (arrondie à $0{,}01$).',
          type: 'numeric',
          answer: 1.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On utilise les valeurs remarquables : $\\cos^2\\left(\\dfrac{\\pi}{4}\\right) = \\left(\\dfrac{\\sqrt{2}}{2}\\right)^2 = \\dfrac{1}{2}$.<br/><br/>$\\sin^2\\left(\\dfrac{\\pi}{3}\\right) = \\left(\\dfrac{\\sqrt{3}}{2}\\right)^2 = \\dfrac{3}{4}$.<br/><br/>La somme vaut $\\dfrac{1}{2} + \\dfrac{3}{4} = \\dfrac{2}{4} + \\dfrac{3}{4} = \\dfrac{5}{4} = 1{,}25$.'
        },
        {
          statement: 'L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ est :',
          type: 'multiple-choice',
          options: ['Toujours vraie', 'Vraie seulement si $\\theta = 0$', 'Toujours fausse (sauf $\\cos\\theta = 0$)', 'Vraie pour $\\theta = \\pi/2$'],
          answer: 2,
          points: 2,
          correction: 'Le cosinus est une fonction <strong>paire</strong> : $\\cos(-\\theta) = \\cos(\\theta)$, et non $-\\cos(\\theta)$.<br/><br/>L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ impliquerait $2\\cos\\theta = 0$, soit $\\cos\\theta = 0$.<br/><br/>Elle n\'est donc vraie que lorsque $\\cos\\theta = 0$ (par exemple $\\theta = \\pi/2$), et fausse en général.'
        },
        {
          statement: 'Quelle est la valeur de $\\sin\\left(\\dfrac{7\\pi}{6}\\right)$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
          answer: 1,
          points: 2,
          correction: 'On décompose : $\\dfrac{7\\pi}{6} = \\pi + \\dfrac{\\pi}{6}$. L\'angle se situe dans le <strong>3e quadrant</strong>.<br/><br/>Par la relation $\\sin(\\pi + \\alpha) = -\\sin(\\alpha)$ : $\\sin\\left(\\dfrac{7\\pi}{6}\\right) = -\\sin\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}$.'
        },
        {
          statement: 'Sachant que $\\cos\\theta = 0{,}6$ et $\\theta \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, calculer $\\sin\\theta$.',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On part de la relation fondamentale : $\\cos^2\\theta + \\sin^2\\theta = 1$.<br/><br/>Donc $\\sin^2\\theta = 1 - 0{,}36 = 0{,}64$. Comme $\\theta \\in [0\\,;\\,\\pi/2]$, le sinus est positif, donc $\\sin\\theta = \\sqrt{0{,}64} = 0{,}8$.'
        }
      ]
    }
  },

    {
    id: '1re-geometrie-reperee',
    level: 2, subject: 'maths',
    icon: '📌',
    title: 'Géométrie repérée',
    subtitle: 'Vecteurs colinéaires, équations de droites',
    keywords: ['Vecteur', 'Colinéarité', 'Équation de droite', 'Droite cartésienne'],
    physics: false,
    cours: {
      intro: 'La <strong>géométrie repérée</strong> traduit les relations géométriques en calculs algébriques.<br/><br/>Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont <strong>colinéaires</strong> si leur déterminant $ad - bc = 0$ : c\'est le critère d\'alignement de trois points.<br/><br/>Une droite d\'équation $ax + by + c = 0$ possède un <strong>vecteur normal</strong> $(a\\,;\\,b)$ (perpendiculaire à la droite) et un <strong>vecteur directeur</strong> $(-b\\,;\\,a)$ (parallèle à la droite).<br/><br/>L\'erreur très courante : lire les coefficients $(a\\,;\\,b)$ et les appeler "vecteur directeur" alors qu\'ils forment le vecteur normal. On passe de l\'un à l\'autre en échangeant les coordonnées et changeant un signe.',
      definitions: [
        { term: 'Vecteurs colinéaires', def: 'Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont <strong>colinéaires</strong> si $ad - bc = 0$ (déterminant nul). Ils sont alors parallèles (même direction).' },
        { term: 'Déterminant', def: 'Le <strong>déterminant</strong> de $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ est $\\det(\\vec{u},\\vec{v}) = ad - bc$. Il est nul si et seulement si les vecteurs sont colinéaires.' },
        { term: 'Vecteur directeur', def: 'Un <strong>vecteur directeur</strong> d\'une droite est un vecteur parallèle à cette droite. Pour $ax + by + c = 0$, un vecteur directeur est $(-b\\,;\\,a)$.' },
        { term: 'Vecteur normal', def: 'Un <strong>vecteur normal</strong> à une droite est perpendiculaire à celle-ci. Pour $ax + by + c = 0$, le vecteur normal est $(a\\,;\\,b)$ (les coefficients de $x$ et $y$).' }
      ],
      method: {
        title: 'Tester la colinéarité et écrire l\'équation d\'une droite',
        steps: [
          'Colinéarité : $\\vec{u}(x;y)$ et $\\vec{v}(x\';y\')$ colinéaires $\\Leftrightarrow xy\'-x\'y=0$ (déterminant nul).',
          'Équation de droite passant par $A(x_0;y_0)$ de vecteur directeur $\\vec{u}(a;b)$ : $b(x-x_0)-a(y-y_0)=0$.',
          'Ou utiliser la forme $y=mx+p$ si la droite n\'est pas verticale.',
          'Trois points $A$, $B$, $C$ sont alignés si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.'
        ]
      },
      example: {
        statement: 'Déterminer l\'équation de la droite passant par $A(1\\,;\\,3)$ et $B(4\\,;\\,-1)$ sous la forme $ax + by + c = 0$.',
        steps: [
          'Vecteur directeur : $\\vec{AB} = (4-1\\,;\\,-1-3) = (3\\,;\\,-4)$.',
          'Un vecteur normal est $(4\\,;\\,3)$ (on échange et on change un signe). L\'équation est $4x + 3y + c = 0$.',
          'On remplace par $A(1\\,;\\,3)$ : $4 \\times 1 + 3 \\times 3 + c = 0$, soit $13 + c = 0$, d\'où $c = -13$.'
        ],
        answer: 'L\'équation de la droite $(AB)$ est $4x + 3y - 13 = 0$. Vérification en $B$ : $4 \\times 4 + 3 \\times (-1) - 13 = 16 - 3 - 13 = 0$ ✓.'
      },
      formulas: [
        '$\\vec{u}(a;b)$ et $\\vec{v}(c;d)$ colinéaires $\\Leftrightarrow ad-bc=0$',
        'Droite de vecteur directeur $(a;b)$ passant par $(x_0;y_0)$ : $b(x-x_0)=a(y-y_0)$'
      ],
      recap: [
        'Colinéarité : $\\det(\\vec{u},\\vec{v}) = ad - bc = 0$. C\'est le test d\'alignement de trois points.',
        'Dans $ax + by + c = 0$ : $(a\\,;\\,b)$ est le vecteur <strong>normal</strong>, $(-b\\,;\\,a)$ est le vecteur <strong>directeur</strong>.',
        'Pour écrire l\'équation d\'une droite : trouver un vecteur directeur $\\vec{AB}$, en déduire le normal, puis utiliser un point.',
        'Pente $m = \\dfrac{y_B - y_A}{x_B - x_A}$ (si la droite n\'est pas verticale). Droite : $y = mx + p$.'
      ],
      piege: 'Dans $ax + by + c = 0$, le vecteur $(a\\,;\\,b)$ est le <strong>vecteur normal</strong> (perpendiculaire à la droite), pas le vecteur directeur !<br/><br/>Le <strong>vecteur directeur</strong> est $(-b\\,;\\,a)$ (parallèle à la droite). Ne pas les confondre dans l\'équation.'
    },
    quiz: [
      { q: '$\\vec{u}(2;3)$ et $\\vec{v}(4;6)$ sont-ils colinéaires ?', options: ['Non', 'Oui', 'Seulement si norme égale', 'Impossible à dire'], answer: 1, correction: 'On calcule le déterminant : $2 \\times 6 - 3 \\times 4 = 12 - 12 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction). On remarque d\'ailleurs que $\\vec{v} = 2\\vec{u}$.' },
      { q: 'La droite $(d)$ a pour équation $3x + 2y - 6 = 0$. Un élève dit : "le vecteur directeur est $\\vec{u}(3\\,;\\,2)$." Quelle est son erreur ?', options: ['$(3\\,;\\,2)$ est le vecteur NORMAL ; le vecteur directeur est $(-2\\,;\\,3)$ ou $(2\\,;\\,-3)$', 'L\'élève a raison : les coefficients de $x$ et $y$ donnent toujours le vecteur directeur', 'Le vecteur directeur est $(3\\,;\\,-2)$ car le coefficient de $y$ change de signe', 'Il n\'existe pas de vecteur directeur car la droite n\'est pas verticale'], answer: 0, correction: 'Dans $ax + by + c = 0$, le vecteur $\\vec{n}(a\\,;\\,b)$ est le vecteur <strong>normal</strong> (perpendiculaire à la droite). Le vecteur directeur est $\\vec{u}(-b\\,;\\,a)$.<br/><br/>Ici $\\vec{n}(3\\,;\\,2)$ est le vecteur normal, et le vecteur directeur est $\\vec{u}(-2\\,;\\,3)$.<br/><br/>On vérifie : $\\vec{n} \\cdot \\vec{u} = 3 \\times (-2) + 2 \\times 3 = 0$. Bien perpendiculaires !' },
      { q: 'Trois points $A(0;0)$, $B(2;3)$, $C(4;6)$ sont-ils alignés ?', options: ['Non', 'Oui', 'Seulement deux à deux', 'Impossible à déterminer'], answer: 1, correction: 'On calcule $\\vec{AB}(2\\,;\\,3)$ et $\\vec{AC}(4\\,;\\,6)$. On remarque que $\\vec{AC} = 2\\vec{AB}$.<br/><br/>Les vecteurs sont <strong>colinéaires</strong>, donc les points $A$, $B$, $C$ sont alignés.' },
      { q: 'La droite $5x - 2y + 7 = 0$ a pour pente :', options: ['$m = \\dfrac{5}{2}$', '$m = -\\dfrac{5}{2}$', '$m = \\dfrac{2}{5}$', '$m = -\\dfrac{2}{5}$'], answer: 0, correction: 'On isole $y$ pour obtenir la forme $y = mx + p$ : $2y = 5x + 7$, soit $y = \\dfrac{5}{2}x + \\dfrac{7}{2}$.<br/><br/>La pente est $m = \\dfrac{5}{2}$. Elle correspond au coefficient de $x$ dans l\'écriture réduite.' },
      { q: 'Le milieu de $A(2\\,;\\,5)$ et $B(6\\,;\\,-1)$ est :', options: ['$(4\\,;\\,2)$', '$(8\\,;\\,4)$', '$(4\\,;\\,3)$', '$(2\\,;\\,3)$'], answer: 0, correction: 'Le milieu se calcule en faisant la moyenne des coordonnées : $M = \\left(\\dfrac{2+6}{2}\\,;\\,\\dfrac{5+(-1)}{2}\\right)$.<br/><br/>On obtient $M = (4\\,;\\,2)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const mode = pick(['colinearite', 'equation']);
        if (mode === 'colinearite') {
          const xA = rand(0, 3), yA = rand(0, 3);
          const xB = rand(xA + 1, xA + 4), yB = rand(yA + 1, yA + 4);
          const xC = rand(xB + 1, xB + 3), yC = rand(yB - 2, yB + 5);
          const det = (xB - xA) * (yC - yA) - (yB - yA) * (xC - xA);
          const ctx = pick([
            `En cartographie, trois balises sont placées en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `Trois capteurs sont positionnés en $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`,
            `On considère les points $A(${xA}\\,;\\,${yA})$, $B(${xB}\\,;\\,${yB})$ et $C(${xC}\\,;\\,${yC})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer les coordonnées de $\\vec{AB}$ et $\\vec{AC}$.<br/>2) Calculer le déterminant $\\det(\\vec{AB}, \\vec{AC})$.<br/>3) En déduire si les points sont alignés.<br/><br/>Donner la valeur du déterminant.`,
            answer: det,
            tolerance: 0,
            unit: '',
            hint: `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$. Le déterminant est $ad - bc$.`,
            solution: [
              `$\\vec{AB}(${xB-xA}\\,;\\,${yB-yA})$ et $\\vec{AC}(${xC-xA}\\,;\\,${yC-yA})$.`,
              `$\\det = ${xB-xA} \\times ${yC-yA} - ${yB-yA} \\times ${xC-xA} = ${(xB-xA)*(yC-yA)} - ${(yB-yA)*(xC-xA)} = ${det}$.`,
              `${det === 0 ? 'Le déterminant est nul : les points sont alignés.' : 'Le déterminant est non nul : les points ne sont pas alignés.'}`
            ]
          };
        } else {
          const xA = rand(0, 4), yA = rand(0, 4);
          const xB = rand(xA + 1, xA + 5), yB = rand(yA - 3, yA + 5);
          const dx = xB - xA, dy = yB - yA;
          const m = dy / dx;
          const p = yA - m * xA;
          const answer = parseFloat(p.toFixed(2));
          const ctx = pick([
            `Une route rectiligne passe par les points $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `Un laser suit une trajectoire passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`,
            `On considère la droite passant par $A(${xA}\\,;\\,${yA})$ et $B(${xB}\\,;\\,${yB})$.`
          ]);
          return {
            statement: `${ctx}<br/><br/>1) Calculer la pente $m$ de la droite $(AB)$.<br/>2) Déterminer l'ordonnée à l'origine $p$.<br/><br/>Donner la valeur de $p$.`,
            answer: answer,
            tolerance: 0.01,
            unit: '',
            hint: `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${dy}}{${dx}}$. Puis $p = y_A - m \\times x_A$.`,
            solution: [
              `$m = \\dfrac{${yB} - ${yA}}{${xB} - ${xA}} = \\dfrac{${dy}}{${dx}}${Number.isInteger(m) ? ' = ' + m : ''}$.`,
              `$p = ${yA} - ${m.toFixed(2)} \\times ${xA} = ${answer}$.`,
              `Droite : $y = ${m.toFixed(2)}x + ${answer}$.`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'Dans un repère, on a les points $A(1;2)$, $B(3;5)$, $C(5;8)$ et $D(2;4)$.',
      tasks: [
        'Montrer que $A$, $B$, $C$ sont alignés.',
        'Écrire l\'équation de la droite $(AB)$.',
        'Le point $D$ est-il sur la droite $(AB)$ ?'
      ],
      solutions: [
        '$\\vec{AB}(2;3)$, $\\vec{AC}(4;6)=2\\vec{AB}$ : colinéaires → $A$, $B$, $C$ alignés.',
        'Pente $m=\\frac{3}{2}$, ordonnée à l\'origine : $2=\\frac{3}{2}\\times1+p \\Rightarrow p=\\frac{1}{2}$. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$.',
        '$\\frac{3}{2}\\times2+\\frac{1}{2}=3+\\frac{1}{2}=\\frac{7}{2}\\ne4$ : $D$ n\'est pas sur $(AB)$.'
      ],
      finalAnswer: '$A$, $B$, $C$ alignés. Droite : $y=\\frac{3}{2}x+\\frac{1}{2}$. $D$ n\'est pas sur cette droite.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie repérée',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le déterminant de $\\vec{u}(3\\,;\\,5)$ et $\\vec{v}(6\\,;\\,10)$. Les vecteurs sont-ils colinéaires ? Donner la valeur du déterminant.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On applique la formule du déterminant : $\\det(\\vec{u},\\vec{v}) = 3 \\times 10 - 5 \\times 6 = 30 - 30 = 0$.<br/><br/>Le déterminant est nul, donc les vecteurs sont <strong>colinéaires</strong> (même direction).'
        },
        {
          statement: 'La droite $(d)$ a pour équation $2x - 3y + 6 = 0$. Un vecteur directeur de $(d)$ est :',
          type: 'multiple-choice',
          options: ['$(2\\,;\\,-3)$', '$(3\\,;\\,2)$', '$(-3\\,;\\,2)$', '$(2\\,;\\,3)$'],
          answer: 1,
          points: 2,
          correction: 'Dans $ax + by + c = 0$, le vecteur <strong>normal</strong> est $(a\\,;\\,b) = (2\\,;\\,-3)$.<br/><br/>Le vecteur <strong>directeur</strong> est $(-b\\,;\\,a) = (3\\,;\\,2)$. On vérifie : $2 \\times 3 + (-3) \\times 2 = 0$, bien perpendiculaires.'
        },
        {
          statement: 'Déterminer l\'ordonnée à l\'origine $p$ de la droite passant par $A(2\\,;\\,5)$ et $B(4\\,;\\,11)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On calcule la pente : $m = \\dfrac{11 - 5}{4 - 2} = \\dfrac{6}{2} = 3$.<br/><br/>L\'équation est $y = 3x + p$. En remplaçant par $A(2\\,;\\,5)$ : $5 = 3 \\times 2 + p$, soit $p = 5 - 6 = -1$.'
        },
        {
          statement: 'Les points $A(1\\,;\\,3)$, $B(3\\,;\\,7)$ et $C(5\\,;\\,12)$ sont-ils alignés ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires', 'Non, car le déterminant de $\\vec{AB}$ et $\\vec{AC}$ est non nul', 'Oui, car les trois points sont sur la droite $y = 2x + 1$', 'Non, car $A$ et $C$ ont des abscisses impaires'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\vec{AB}(2\\,;\\,4)$ et $\\vec{AC}(4\\,;\\,9)$.<br/><br/>Le déterminant vaut $\\det = 2 \\times 9 - 4 \\times 4 = 18 - 16 = 2 \\neq 0$.<br/><br/>Les vecteurs ne sont pas colinéaires, donc les points ne sont <strong>pas alignés</strong>.'
        },
        {
          statement: 'Écrire l\'équation de la droite passant par $M(1\\,;\\,2)$ et de vecteur directeur $\\vec{u}(2\\,;\\,-1)$ sous la forme $ax + by + c = 0$ avec $a > 0$. Donner la valeur de $c$.',
          type: 'numeric',
          answer: -5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le vecteur directeur est $(2\\,;\\,-1)$, donc un vecteur normal est $(1\\,;\\,2)$ (on échange et on change un signe).<br/><br/>L\'équation s\'écrit : $1(x-1) + 2(y-2) = 0$, soit $x + 2y - 5 = 0$.<br/><br/>On identifie $c = -5$.'
        }
      ]
    }
  },

    {
    id: '1re-probas-conditionnelles',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités conditionnelles',
    subtitle: 'Probabilité sachant, indépendance, arbre',
    keywords: ['Probabilité conditionnelle', 'Indépendance', 'Arbre', 'Bayes'],
    physics: false,
    cours: {
      intro: 'La <strong>probabilité conditionnelle</strong> $P(A|B)$ répond à : "parmi les cas où $B$ s\'est produit, dans quelle fraction $A$ se produit aussi ?" La formule $P(A|B) = P(A \\cap B)/P(B)$ est un recentrage : on restreint l\'univers à $B$.<br/><br/>En médecine, $P(\\text{Test}+|\\text{Malade})$ (sensibilité du test) est très différent de $P(\\text{Malade}|\\text{Test}+)$ (probabilité d\'être malade si le test est positif). Confondre $P(A|B)$ et $P(B|A)$ est l\'"<strong>erreur du procureur</strong>".<br/><br/>L\'<strong>indépendance</strong> signifie $P(A|B) = P(A)$ : connaître $B$ n\'apporte aucune information sur $A$.<br/><br/>Si $A$ et $B$ sont indépendants, alors $P(A \\cap B) = P(A) \\times P(B)$.',
      definitions: [
        { term: 'Probabilité conditionnelle', def: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ : la probabilité de $A$ <strong>sachant que</strong> $B$ est réalisé. On restreint l\'univers à $B$.' },
        { term: 'Indépendance', def: 'Deux événements $A$ et $B$ sont <strong>indépendants</strong> si $P(A \\cap B) = P(A) \\times P(B)$, ce qui équivaut à $P(A|B) = P(A)$ : savoir que $B$ s\'est produit ne change rien.' },
        { term: 'Formule des probabilités totales', def: 'Si $B$ et $\\bar{B}$ forment une partition : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$. C\'est la somme des "chemins" menant à $A$.' },
        { term: 'Formule de Bayes', def: '$P(B|A) = \\dfrac{P(A|B) \\times P(B)}{P(A)}$. Elle permet d\'"inverser" une probabilité conditionnelle, typiquement en diagnostic médical.' }
      ],
      method: {
        title: 'Utiliser un arbre de probabilité',
        steps: [
          'Représenter les événements en branches, les probabilités sur chaque branche.',
          '$P(A\\cap B) = P(B)\\times P(A|B)$ (multiplication des branches).',
          'La somme des probabilités à chaque nœud est $1$.',
          'Additionner les branches favorables pour obtenir $P(A)$.'
        ]
      },
      example: {
        statement: 'Dans un lycée, $40\\%$ des élèves pratiquent un sport ($S$). Parmi les sportifs, $70\\%$ ont la moyenne en maths ($M$). Parmi les non-sportifs, $50\\%$ ont la moyenne. Calculer $P(M)$ et $P(S|M)$.',
        steps: [
          'Données : $P(S) = 0{,}4$, $P(\\bar{S}) = 0{,}6$, $P(M|S) = 0{,}7$, $P(M|\\bar{S}) = 0{,}5$.',
          'Probabilités totales : $P(M) = P(M|S) \\times P(S) + P(M|\\bar{S}) \\times P(\\bar{S}) = 0{,}7 \\times 0{,}4 + 0{,}5 \\times 0{,}6 = 0{,}28 + 0{,}30 = 0{,}58$.',
          'Bayes : $P(S|M) = \\dfrac{P(M|S) \\times P(S)}{P(M)} = \\dfrac{0{,}28}{0{,}58} \\approx 0{,}483$.'
        ],
        answer: '$P(M) = 0{,}58$ et $P(S|M) \\approx 0{,}483$. Un élève qui a la moyenne a environ $48\\%$ de chances d\'être sportif.'
      },
      formulas: [
        '$P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$ (si $P(B)>0$)',
        '$P(A\\cap B) = P(B)\\times P(A|B)$',
        '$A$ et $B$ indépendants $\\Leftrightarrow P(A\\cap B)=P(A)\\times P(B)$'
      ],
      recap: [
        '$P(A|B) \\neq P(B|A)$ en général : ne <strong>jamais</strong> inverser les conditionnements sans Bayes.',
        'Sur un arbre : multiplier le long d\'un chemin, additionner les chemins menant au même événement.',
        'Indépendance : $P(A \\cap B) = P(A) \\times P(B)$. Tester avant de conclure !',
        'Formule de Bayes : indispensable pour "retourner" un conditionnement (diagnostic, fiabilité, etc.).'
      ],
      piege: 'Ne pas confondre $P(A|B)$ et $P(B|A)$ : ce n\'est <strong>pas la même chose</strong> !<br/><br/>En médecine par exemple, la probabilité que le test soit positif si on est malade ($P(T+|M)$) est très différente de la probabilité d\'être malade si le test est positif ($P(M|T+)$). Pour "inverser" le conditionnement, il faut la <strong>formule de Bayes</strong>.'
    },
    quiz: [
      { q: 'Un test médical a une sensibilité de $95\\%$ : $P(\\text{Test}+|\\text{Malade}) = 0{,}95$. Un médecin conclut : "si le test est positif, le patient a $95\\%$ de chances d\'être malade." Cette conclusion est-elle correcte ?', options: ['Non : $P(\\text{Test}+|\\text{Malade})$ est la sensibilité, mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la prévalence de la maladie', 'Oui : $P(A|B) = P(B|A)$ par définition des probabilités conditionnelles', 'Oui : si le test est positif à $95\\%$ de fiabilité, la probabilité d\'être malade est bien $95\\%$', 'Non : la bonne valeur est $100\\% - 95\\% = 5\\%$'], answer: 0, correction: 'C\'est l\'"<strong>erreur du procureur</strong>". $P(\\text{Test}+|\\text{Malade}) = 0{,}95$ est la sensibilité du test.<br/><br/>Mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la rareté de la maladie. Si la maladie touche $1\\%$ de la population et le test fait $3\\%$ de faux positifs, un test positif ne signifie que $24\\%$ de chances d\'être malade !<br/><br/>Les deux probabilités conditionnelles $P(A|B)$ et $P(B|A)$ ne sont généralement <strong>pas égales</strong>.' },
      { q: 'Si $A$ et $B$ sont indépendants avec $P(A)=0{,}5$ et $P(B)=0{,}6$, alors $P(A\\cap B)=$ ?', options: ['$1{,}1$', '$0{,}3$', '$0{,}1$', '$0{,}11$'], answer: 1, correction: 'Quand les événements sont <strong>indépendants</strong>, on multiplie les probabilités : $P(A \\cap B) = P(A) \\times P(B)$.<br/><br/>Ici : $P(A \\cap B) = 0{,}5 \\times 0{,}6 = 0{,}3$.' },
      { q: 'Sur un arbre : $P(B)=0{,}3$, $P(A|B)=0{,}8$. Quelle est la probabilité d\'emprunter la branche $B$ puis $A$ ?', options: ['$0{,}24$', '$0{,}8$', '$1{,}1$', '$0{,}3$'], answer: 0, correction: 'Sur un arbre, on multiplie les probabilités le long du chemin : $P(A \\cap B) = P(B) \\times P(A|B)$.<br/><br/>$P(A \\cap B) = 0{,}3 \\times 0{,}8 = 0{,}24$.' },
      { q: 'On sait que $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. $A$ et $B$ sont-ils indépendants ?', options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $0{,}3 \\neq 0{,}6 \\times 0{,}5 = 0{,}30$... en fait oui !', 'Oui, car $P(A|B) = 0{,}6 = P(A)$', 'Non, car $P(A) + P(B) > 1$'], answer: 2, correction: 'On vérifie la condition d\'indépendance : $P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3 = P(A \\cap B)$. C\'est bien vérifié !<br/><br/>On peut aussi le voir autrement : $P(A|B) = 0{,}3/0{,}5 = 0{,}6 = P(A)$. Savoir $B$ ne change rien pour $A$ : les événements sont <strong>indépendants</strong>.' },
      { q: 'Un sac contient $5$ boules rouges et $5$ boules bleues. On tire <strong>sans remise</strong> deux boules. $P(R_2|R_1)$ vaut :', options: ['$\\dfrac{5}{10} = 0{,}5$', '$\\dfrac{4}{9}$', '$\\dfrac{5}{9}$', '$\\dfrac{4}{10} = 0{,}4$'], answer: 1, correction: 'Après avoir tiré une boule rouge, il reste $4$ rouges sur $9$ boules au total.<br/><br/>Donc $P(R_2|R_1) = \\dfrac{4}{9}$.<br/><br/>Attention : le tirage <strong>sans remise</strong> change la composition du sac, les tirages ne sont donc pas indépendants !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pB = pick([0.2, 0.3, 0.4, 0.5]);
        const pAgivenB = pick([0.6, 0.7, 0.8, 0.9]);
        const pAgivenBbar = pick([0.1, 0.2, 0.3]);
        const pBbar = parseFloat((1 - pB).toFixed(1));
        const pA = parseFloat((pAgivenB * pB + pAgivenBbar * pBbar).toFixed(4));
        const ctx = pick([
          { B: 'pluie', Bbar: 'beau temps', A: 'retard au lycée', phrB: `La météo annonce $${pB * 100}\\%$ de jours de pluie`, phrAB: `Les jours de pluie, la probabilité d'être en retard est $${pAgivenB}$`, phrABbar: `Les jours de beau temps, elle est de $${pAgivenBbar}$` },
          { B: 'embouteillage', Bbar: 'circulation fluide', A: 'arriver en retard', phrB: `La probabilité d'embouteillage est $${pB}$`, phrAB: `En cas d'embouteillage, la probabilité d'arriver en retard est $${pAgivenB}$`, phrABbar: `Sinon, elle est de $${pAgivenBbar}$` },
          { B: 'grippe', Bbar: 'bonne santé', A: 'avoir de la fièvre', phrB: `En hiver, $${pB * 100}\\%$ de la population a la grippe`, phrAB: `Si on a la grippe, la probabilité d'avoir de la fièvre est $${pAgivenB}$`, phrABbar: `Sinon, elle est de $${pAgivenBbar}$` }
        ]);
        return {
          statement: `${ctx.phrB}. ${ctx.phrAB}. ${ctx.phrABbar}.<br/><br/>1) Construire l'arbre de probabilité.<br/>2) Calculer $P(A)$ par la formule des probabilités totales.<br/><br/>Donner $P(A)$ (arrondir à $0{,}001$).`,
          answer: pA,
          tolerance: 0.005,
          unit: '',
          hint: `$P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B}) = ${pAgivenB} \\times ${pB} + ${pAgivenBbar} \\times ${pBbar}$.`,
          solution: [
            `$P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$`,
            `$= ${pAgivenB} \\times ${pB} + ${pAgivenBbar} \\times ${pBbar}$`,
            `$= ${(pAgivenB * pB).toFixed(4)} + ${(pAgivenBbar * pBbar).toFixed(4)} = ${pA}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un test médical détecte une maladie présente chez $2\\%$ de la population. Le test est positif dans $95\\%$ des cas si la personne est malade et dans $3\\%$ des cas si elle est saine.',
      tasks: [
        'Construire un arbre de probabilité.',
        'Calculer la probabilité d\'avoir un test positif.',
        'Calculer la probabilité d\'être malade sachant que le test est positif (Bayes).'
      ],
      solutions: [
        'Branches : Malade ($0{,}02$) / Sain ($0{,}98$). Sous Malade : $T+$ ($0{,}95$) / $T-$ ($0{,}05$). Sous Sain : $T+$ ($0{,}03$) / $T-$ ($0{,}97$).',
        '$P(T+)=0{,}02\\times0{,}95+0{,}98\\times0{,}03=0{,}019+0{,}0294=0{,}0484$.',
        '$P(M|T+)=\\frac{0{,}019}{0{,}0484}\\approx0{,}393$ soit environ $39\\%$.'
      ],
      finalAnswer: 'Probabilité d\'être malade avec test positif $\\approx 39\\%$ malgré un test fiable à $95\\%$ (paradoxe de la rareté).'
    },

    evaluation: {
      title: 'Évaluation — Probabilités conditionnelles',
      duration: '35 min',
      questions: [
        {
          statement: 'On donne $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Calculer $P(A|B)$.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la définition de la probabilité conditionnelle : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$.<br/><br/>$P(A|B) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$. Sachant que $B$ est réalisé, la probabilité de $A$ est $0{,}4$.'
        },
        {
          statement: 'Les événements $A$ et $B$ de la question précédente ($P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$) sont-ils indépendants ?',
          type: 'multiple-choice',
          options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $P(A \\cap B) \\neq P(A) \\times P(B)$', 'Oui, car $P(A) + P(B) = 1{,}1$', 'On ne peut pas conclure sans connaître $P(A \\cup B)$'],
          answer: 1,
          points: 2,
          correction: 'Pour tester l\'indépendance, on compare $P(A \\cap B)$ et $P(A) \\times P(B)$.<br/><br/>$P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$. Or $P(A \\cap B) = 0{,}2 \\neq 0{,}3$.<br/><br/>Les événements ne sont <strong>pas indépendants</strong> : la réalisation de $B$ modifie la probabilité de $A$.'
        },
        {
          statement: 'Dans un lycée, $60\\%$ des élèves font de l\'anglais (événement $A$). Parmi ceux qui font de l\'anglais, $30\\%$ font aussi de l\'espagnol (événement $E$). Calculer $P(A \\cap E)$.',
          type: 'numeric',
          answer: 0.18,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On utilise la formule de l\'intersection : $P(A \\cap E) = P(A) \\times P(E|A)$.<br/><br/>$P(A \\cap E) = 0{,}6 \\times 0{,}3 = 0{,}18$. Cela signifie que $18\\%$ des élèves font à la fois anglais et espagnol.'
        },
        {
          statement: 'Un sac contient $3$ boules rouges et $7$ boules bleues. On tire une boule, on la remet, puis on tire une seconde boule. Calculer la probabilité d\'obtenir deux boules rouges.',
          type: 'numeric',
          answer: 0.09,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Avec remise, la composition du sac ne change pas : les tirages sont <strong>indépendants</strong>.<br/><br/>$P(R_1 \\cap R_2) = P(R_1) \\times P(R_2) = \\dfrac{3}{10} \\times \\dfrac{3}{10} = \\dfrac{9}{100} = 0{,}09$.'
        },
        {
          statement: 'On sait que $P(B) = 0{,}4$, $P(A|B) = 0{,}7$ et $P(A|\\bar{B}) = 0{,}2$. Calculer $P(A)$ par la formule des probabilités totales.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la <strong>formule des probabilités totales</strong> : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$.<br/><br/>$P(A) = 0{,}7 \\times 0{,}4 + 0{,}2 \\times 0{,}6 = 0{,}28 + 0{,}12 = 0{,}4$.'
        }
      ]
    }
  },

    {
    id: '1re-variables-aleatoires',
    level: 2, subject: 'maths',
    icon: '🎰',
    title: 'Variables aléatoires et loi binomiale',
    subtitle: 'Espérance, variance, loi B(n,p)',
    keywords: ['Variable aléatoire', 'Espérance', 'Loi binomiale', 'Variance'],
    physics: false,
    cours: {
      intro: 'Une <strong>variable aléatoire</strong> est une fonction qui transforme les issues d\'une expérience aléatoire en nombres : c\'est le pont entre le hasard et les mathématiques.<br/><br/>La <strong>loi binomiale</strong> $\\mathcal{B}(n,p)$ répond à "combien de succès sur $n$ tentatives indépendantes ?" Ses deux conditions : les essais sont indépendants et chacun a la même probabilité de succès $p$.<br/><br/>L\'<strong>espérance</strong> $E(X) = np$ est le nombre moyen de succès attendu.<br/><br/>Erreur classique sur la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ : oublier les puissances sur $p$ et $(1-p)$. Un résultat supérieur à $1$ est impossible pour une probabilité — cela doit alerter immédiatement.',
      definitions: [
        { term: 'Variable aléatoire', def: 'Une <strong>variable aléatoire</strong> $X$ est une fonction qui associe un nombre réel à chaque issue d\'une expérience aléatoire. Exemple : le nombre de $6$ obtenus en lançant $5$ dés.' },
        { term: 'Espérance', def: 'L\'<strong>espérance</strong> $E(X)$ est la valeur moyenne attendue sur un grand nombre de répétitions. Pour $\\mathcal{B}(n,p)$ : $E(X) = np$.' },
        { term: 'Variance et écart-type', def: 'La <strong>variance</strong> $V(X)$ mesure la dispersion autour de l\'espérance. $V(X) = np(1-p)$ pour $\\mathcal{B}(n,p)$. L\'<strong>écart-type</strong> est $\\sigma = \\sqrt{V(X)}$.' },
        { term: 'Loi binomiale', def: 'La loi $\\mathcal{B}(n,p)$ modélise le nombre de succès dans $n$ épreuves <strong>indépendantes</strong>, chacune de probabilité de succès $p$. $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.' }
      ],
      method: {
        title: 'Calculer avec la loi binomiale',
        steps: [
          'Vérifier les conditions : expériences indépendantes, même probabilité $p$, $n$ répétitions.',
          '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.',
          'Espérance : $E(X)=np$.',
          'Variance : $V(X)=np(1-p)$, écart-type $\\sigma=\\sqrt{np(1-p)}$.'
        ]
      },
      example: {
        statement: 'On lance une pièce équilibrée $6$ fois. Soit $X$ le nombre de "Pile". Calculer $P(X = 4)$, $E(X)$ et $\\sigma(X)$.',
        steps: [
          '$X \\sim \\mathcal{B}(6\\,;\\,0{,}5)$. Coefficient binomial : $\\binom{6}{4} = \\dfrac{6!}{4! \\times 2!} = \\dfrac{6 \\times 5}{2} = 15$.',
          '$P(X = 4) = \\binom{6}{4} \\times (0{,}5)^4 \\times (0{,}5)^2 = 15 \\times \\dfrac{1}{64} = \\dfrac{15}{64} \\approx 0{,}234$.',
          '$E(X) = 6 \\times 0{,}5 = 3$. $V(X) = 6 \\times 0{,}5 \\times 0{,}5 = 1{,}5$. $\\sigma = \\sqrt{1{,}5} \\approx 1{,}22$.'
        ],
        answer: '$P(X = 4) \\approx 0{,}234$. En moyenne on obtient $3$ "Pile" sur $6$ lancers, avec un écart-type d\'environ $1{,}22$.'
      },
      formulas: [
        '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$',
        '$E(X) = np$',
        '$V(X) = np(1-p)$',
        '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'
      ],
      recap: [
        'Loi binomiale : $n$ épreuves <strong>indépendantes</strong>, même probabilité $p$. Si l\'une de ces conditions manque, ce n\'est pas binomial.',
        '$E(X) = np$ donne le nombre moyen de succès ; $\\sigma = \\sqrt{np(1-p)}$ mesure la dispersion.',
        'Le coefficient binomial $\\binom{n}{k}$ compte le nombre de façons de choisir $k$ succès parmi $n$ essais.',
        'Une probabilité est toujours entre $0$ et $1$ : si ton résultat dépasse $1$ ou est négatif, c\'est une erreur de calcul !'
      ],
      piege: 'La loi binomiale suppose des épreuves <strong>indépendantes</strong>. Si on tire sans remise, les tirages ne sont plus indépendants et la loi binomiale ne s\'applique plus exactement.<br/><br/>Autre piège : oublier les puissances dans la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$. Une probabilité doit toujours être comprise entre $0$ et $1$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{B}(4\\,;\\,0{,}5)$, un élève calcule $P(X=2) = \\binom{4}{2} \\times 0{,}5 = 6 \\times 0{,}5 = 3$. Quelle est son erreur ?', options: ['Il a oublié les puissances : $P(X=2) = \\binom{4}{2} \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\dfrac{1}{16} = \\dfrac{3}{8}$', 'Le coefficient binomial est faux : $\\binom{4}{2} \\neq 6$', 'Il aurait dû écrire $P(X=2) = (0{,}5)^2 = 0{,}25$ sans coefficient binomial', 'La loi binomiale ne s\'applique pas car $p = 0{,}5$'], answer: 0, correction: 'La formule est $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. L\'élève a oublié les <strong>puissances</strong> sur $p$ et $(1-p)$.<br/><br/>Avec $n=4, k=2, p=0{,}5$ : $P(X=2) = 6 \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{6}{16} = \\frac{3}{8} \\approx 0{,}375$.<br/><br/>Une probabilité ne peut <strong>jamais dépasser $1$</strong> — un résultat de $3$ aurait dû alerter l\'élève !' },
      { q: 'Pour $X\\sim\\mathcal{B}(5;0{,}5)$, $P(X=2)=$ ?', options: ['$\\frac{5}{16}$', '$\\frac{5}{32}$', '$\\frac{10}{32}$', '$\\frac{1}{32}$'], answer: 2, correction: 'On applique la formule binomiale : $P(X=2) = \\binom{5}{2}(0{,}5)^2(0{,}5)^3$.<br/><br/>$P(X=2) = 10 \\times \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16} \\approx 0{,}3125$.' },
      { q: 'La variance de $\\mathcal{B}(n;p)$ est maximale quand :', options: ['$p=0$', '$p=1$', '$p=0{,}5$', '$p=n$'], answer: 2, correction: 'La variance $V(X) = np(1-p)$ est maximale quand le produit $p(1-p)$ est maximal.<br/><br/>Ce produit atteint son maximum pour $p = 0{,}5$ (c\'est un résultat classique de l\'étude du trinôme $p - p^2$). La dispersion est maximale quand le succès est aussi probable que l\'échec.' },
      { q: 'Le coefficient binomial $\\binom{5}{2}$ vaut :', options: ['$20$', '$10$', '$25$', '$5$'], answer: 1, correction: 'On applique la formule du coefficient binomial : $\\binom{5}{2} = \\dfrac{5!}{2! \\times 3!} = \\dfrac{5 \\times 4}{2 \\times 1} = 10$.<br/><br/>Cela représente le nombre de façons de choisir $2$ éléments parmi $5$, sans tenir compte de l\'ordre.' },
      { q: 'Pour $X \\sim \\mathcal{B}(10\\,;\\,0{,}3)$, la probabilité $P(X = 0)$ vaut :', options: ['$0$', '$(0{,}7)^{10} \\approx 0{,}028$', '$(0{,}3)^{10}$', '$1 - 0{,}3 = 0{,}7$'], answer: 1, correction: 'Pour $k = 0$, la formule se simplifie : $P(X = 0) = \\binom{10}{0} \\times (0{,}3)^0 \\times (0{,}7)^{10} = 1 \\times 1 \\times (0{,}7)^{10}$.<br/><br/>$(0{,}7)^{10} \\approx 0{,}028$. Il y a environ $2{,}8\\%$ de chances de n\'avoir <strong>aucun succès</strong> en $10$ essais.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(5, 10), p = pick([0.2, 0.25, 0.5]);
        const k = rand(1, 3);
        // Calcul de C(n,k)
        let binom = 1;
        for (let i = 0; i < k; i++) binom = binom * (n - i) / (i + 1);
        binom = Math.round(binom);
        const proba = parseFloat((binom * Math.pow(p, k) * Math.pow(1 - p, n - k)).toFixed(4));
        const esperance = n * p;
        const variance = parseFloat((n * p * (1 - p)).toFixed(2));
        const ctx = pick([
          { intro: `Un archer touche la cible avec une probabilité de $${p}$ à chaque tir. Il effectue $${n}$ tirs indépendants.`, varName: 'le nombre de tirs réussis' },
          { intro: `Un vaccin a une efficacité de $${p * 100}\\%$. On vaccine $${n}$ patients.`, varName: 'le nombre de patients protégés' },
          { intro: `Une machine produit $${p * 100}\\%$ de pièces défectueuses. On prélève $${n}$ pièces.`, varName: 'le nombre de pièces défectueuses' },
          { intro: `Un joueur de basket a $${p * 100}\\%$ de réussite aux lancers francs. Il tire $${n}$ lancers.`, varName: 'le nombre de lancers réussis' }
        ]);
        return {
          statement: `${ctx.intro} Soit $X$ ${ctx.varName}.<br/><br/>1) Identifier la loi de $X$.<br/>2) Calculer $E(X)$ et $V(X)$.<br/>3) Calculer $P(X = ${k})$.<br/><br/>Donner $P(X = ${k})$ (arrondir à $0{,}001$).`,
          answer: proba,
          tolerance: 0.005,
          unit: '',
          hint: `$X \\sim \\mathcal{B}(${n}\\,;\\,${p})$. $P(X = ${k}) = \\binom{${n}}{${k}} \\times ${p}^{${k}} \\times ${1-p}^{${n-k}}$.`,
          solution: [
            `$X \\sim \\mathcal{B}(${n}\\,;\\,${p})$. $E(X) = ${n} \\times ${p} = ${esperance}$. $V(X) = ${n} \\times ${p} \\times ${1-p} = ${variance}$.`,
            `$\\binom{${n}}{${k}} = ${binom}$.`,
            `$P(X = ${k}) = ${binom} \\times ${p}^{${k}} \\times ${1-p}^{${n-k}} \\approx ${proba}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un QCM comporte $10$ questions, chacune avec $4$ propositions. Un élève répond au hasard à toutes les questions.',
      tasks: [
        'Quelle loi suit le nombre de bonnes réponses $X$ ? Préciser les paramètres.',
        'Calculer l\'espérance et l\'écart-type.',
        'Calculer la probabilité d\'avoir exactement $2$ bonnes réponses.'
      ],
      solutions: [
        '$X\\sim\\mathcal{B}(10;0{,}25)$ : $10$ questions indépendantes, $p=1/4$.',
        '$E(X)=10\\times0{,}25=2{,}5$ ; $V(X)=10\\times0{,}25\\times0{,}75=1{,}875$ ; $\\sigma\\approx1{,}37$.',
        '$P(X=2)=\\binom{10}{2}(0{,}25)^2(0{,}75)^8=45\\times0{,}0625\\times0{,}1001\\approx0{,}282$.'
      ],
      finalAnswer: '$X\\sim\\mathcal{B}(10;0{,}25)$, $E(X)=2{,}5$, $P(X=2)\\approx28{,}2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Variables aléatoires et loi binomiale',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $X$ une variable aléatoire suivant la loi $\\mathcal{B}(8\\,;\\,0{,}3)$. Calculer l\'espérance $E(X)$.',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour une loi binomiale, l\'espérance est $E(X) = np$.<br/><br/>$E(X) = 8 \\times 0{,}3 = 2{,}4$. En moyenne, on attend $2{,}4$ succès sur $8$ essais.'
        },
        {
          statement: 'Calculer la variance de $X \\sim \\mathcal{B}(8\\,;\\,0{,}3)$.',
          type: 'numeric',
          answer: 1.68,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La variance d\'une loi binomiale est $V(X) = np(1-p)$.<br/><br/>$V(X) = 8 \\times 0{,}3 \\times 0{,}7 = 1{,}68$. L\'écart-type est $\\sigma = \\sqrt{1{,}68} \\approx 1{,}30$.'
        },
        {
          statement: 'On lance un dé équilibré $5$ fois. Soit $X$ le nombre de $6$ obtenus. Quelle loi suit $X$ ?',
          type: 'multiple-choice',
          options: ['$\\mathcal{B}(5\\,;\\,1/6)$', '$\\mathcal{B}(6\\,;\\,1/5)$', '$\\mathcal{B}(5\\,;\\,1/2)$', '$\\mathcal{B}(6\\,;\\,5)$'],
          answer: 0,
          points: 2,
          correction: 'On identifie les paramètres : $n = 5$ lancers indépendants, chacun avec une probabilité de succès $p = 1/6$.<br/><br/>Donc $X \\sim \\mathcal{B}(5\\,;\\,1/6)$. Les conditions de la loi binomiale sont bien réunies : épreuves indépendantes et même probabilité.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{B}(3\\,;\\,0{,}4)$, calculer $P(X = 2)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.288,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On applique la formule binomiale : $P(X=2) = \\binom{3}{2} (0{,}4)^2 (0{,}6)^1$.<br/><br/>$P(X=2) = 3 \\times 0{,}16 \\times 0{,}6 = 0{,}288$. Il y a environ $28{,}8\\%$ de chances d\'obtenir exactement $2$ succès.'
        },
        {
          statement: 'Un coefficient binomial vérifie $\\binom{7}{3} =$ :',
          type: 'multiple-choice',
          options: ['$21$', '$35$', '$42$', '$210$'],
          answer: 1,
          points: 2,
          correction: 'On utilise la formule : $\\binom{7}{3} = \\dfrac{7!}{3! \\times 4!} = \\dfrac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = \\dfrac{210}{6} = 35$.<br/><br/>Astuce : on écrit $3$ facteurs au numérateur (en partant de $7$) et on divise par $3!$.'
        }
      ]
    }
  },

    {
    id: '1re-information-chiffree',
    level: 2, subject: 'maths',
    icon: '💹',
    title: 'Information chiffrée',
    subtitle: 'Pourcentages, évolutions, indices',
    keywords: ['Pourcentage', 'Évolution', 'Taux', 'Indice', 'Coefficient multiplicateur'],
    physics: false,
    cours: {
      intro: 'L\'information chiffrée quantifie les évolutions avec un outil central : le <strong>coefficient multiplicateur</strong> (CM). Une hausse de $t\\%$ correspond à $CM = 1 + t/100$ ; une baisse de $t\\%$ à $CM = 1 - t/100$.<br/><br/>L\'avantage du CM : les <strong>évolutions successives</strong> se composent par multiplication des CM, pas par addition des taux (erreur classique).<br/><br/>Pour retrouver un prix initial après une hausse, il faut <strong>diviser par le CM</strong> — et non soustraire le pourcentage du prix final.<br/><br/>Exemple : $120$ € après $+25\\%$ vient d\'un prix initial de $120/1{,}25 = 96$ €, et non $120 - 30 = 90$ € (appliquer $25\\%$ au prix final est faux car la base de référence a changé).',
      definitions: [
        { term: 'Taux d\'évolution', def: 'Le <strong>taux d\'évolution</strong> entre une valeur initiale $V_i$ et une valeur finale $V_f$ est $t = \\dfrac{V_f - V_i}{V_i}$. Il s\'exprime en décimal ou en pourcentage.' },
        { term: 'Coefficient multiplicateur', def: 'Le <strong>coefficient multiplicateur</strong> (CM) est $1 + t$ (avec $t$ en décimal). On a $V_f = V_i \\times CM$. Hausse de $20\\%$ : $CM = 1{,}2$ ; baisse de $15\\%$ : $CM = 0{,}85$.' },
        { term: 'Évolutions successives', def: 'Pour des évolutions successives, on <strong>multiplie</strong> les CM : $CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\cdots$ Attention : on n\'additionne <strong>jamais</strong> les taux !' },
        { term: 'Taux réciproque', def: 'Le <strong>taux réciproque</strong> est celui qui ramène au prix initial : $CM_{\\text{réciproque}} = \\dfrac{1}{CM}$. Après $+25\\%$ ($CM = 1{,}25$), il faut une baisse de $1 - 1/1{,}25 = 20\\%$.' }
      ],
      method: {
        title: 'Calculer un taux d\'évolution',
        steps: [
          'Taux d\'évolution : $t = \\dfrac{V_{final} - V_{initial}}{V_{initial}}$.',
          'Coefficient multiplicateur : $CM = 1 + t$ (si $t$ en décimal).',
          'Évolutions successives : multiplier les CM ($CM_{total} = CM_1 \\times CM_2$).',
          'Taux réciproque : $t_{reciproque} = \\dfrac{1}{CM}-1$.'
        ]
      },
      formulas: [
        '$t = \\dfrac{V_f - V_i}{V_i}$',
        '$CM = 1 + t$',
        '$CM_{total} = CM_1 \\times CM_2 \\times \\cdots$',
        'Taux réciproque : $CM_{reciproque} = \\dfrac{1}{CM}$'
      ],
      piege: 'Une hausse de $20\\%$ puis une baisse de $20\\%$ ne revient <strong>pas</strong> au point de départ !<br/><br/>En effet : $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de $4\\%$. Les taux ne s\'additionnent pas, les CM se multiplient.'
    },
    quiz: [
      { q: 'Un article vaut $120$ € après une hausse de $25\\%$. Un élève calcule le prix initial ainsi : $120 - 25\\% \\times 120 = 120 - 30 = 90$ €. Quelle est son erreur ?', options: ['Il a soustrait $25\\%$ du prix FINAL ; il faut diviser par le CM : $V_i = 120 \\div 1{,}25 = 96$ €', 'L\'élève a raison, le prix initial est bien $90$ €', 'Il fallait utiliser le taux réciproque : $120 \\times 0{,}75 = 90$ €', '$25\\%$ de $120 = 30$ donc $120 - 30 = 90$ est correct'], answer: 0, correction: 'Pour retrouver le prix initial APRÈS une hausse de $25\\%$, il faut diviser par le CM $= 1{,}25$ : $V_i = 120 / 1{,}25 = 96$ €. L\'erreur de l\'élève : il applique $25\\%$ au prix FINAL ($120$ €) alors que la hausse de $25\\%$ avait été calculée sur le prix INITIAL. Vérification : $96 \\times 1{,}25 = 120$ ✓ — et non $90 \\times 1{,}25 = 112{,}5 \\neq 120$.' },
      { q: 'Un article coûte $80$ € après une baisse de $20\\%$. Son prix initial était :', options: ['$64$ €', '$96$ €', '$100$ €', '$104$ €'], answer: 2, correction: '$80 = V_i \\times 0{,}8 \\Rightarrow V_i = 80/0{,}8 = 100$ €.' },
      { q: 'Hausse de $10\\%$ puis baisse de $10\\%$ : taux global ?', options: ['$0\\%$', '$-1\\%$', '$+1\\%$', '$-0{,}1\\%$'], answer: 1, correction: '$CM=1{,}1\\times0{,}9=0{,}99$ : baisse de $1\\%$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const vi = rand(50, 200) * 2;
        const tp = rand(5, 30);
        const vf = vi * (1 + tp/100);
        return {
          statement: `Un produit coûte $${vi}$ €. Son prix augmente de $${tp}\\%$. Quel est le nouveau prix ?`,
          answer: vf,
          tolerance: 0.01,
          unit: '€',
          hint: `Multiplier par $CM = 1 + \\frac{${tp}}{100} = ${1+tp/100}$.`,
          solution: [`$V_f = ${vi} \\times ${1+tp/100} = ${vf}$ €`]
        };
      }
    },
    probleme: {
      context: 'Le chiffre d\'affaires d\'une entreprise était de $500\\,000$ € en 2020. Il a augmenté de $8\\%$ en 2021, puis baissé de $5\\%$ en 2022.',
      tasks: [
        'Calculer le chiffre d\'affaires en 2021 et en 2022.',
        'Calculer le coefficient multiplicateur global sur les deux années.',
        'Calculer le taux d\'évolution global entre 2020 et 2022.'
      ],
      solutions: [
        '$CA_{2021}=500000\\times1{,}08=540000$ € ; $CA_{2022}=540000\\times0{,}95=513000$ €.',
        '$CM=1{,}08\\times0{,}95=1{,}026$.',
        '$t=(1{,}026-1)\\times100=+2{,}6\\%$.'
      ],
      finalAnswer: '$CA_{2022}=513\\,000$ €. Évolution globale : $+2{,}6\\%$ sur deux ans.'
    },

    evaluation: {
      title: 'Évaluation — Information chiffrée',
      duration: '30 min',
      questions: [
        {
          statement: 'Un article coûte $250$ € et subit une hausse de $12\\%$. Calculer le nouveau prix.',
          type: 'numeric',
          answer: 280,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$V_f = 250 \\times 1{,}12 = 280$ €.'
        },
        {
          statement: 'Un produit coûte $180$ € après une baisse de $10\\%$. Quel était son prix initial ?',
          type: 'numeric',
          answer: 200,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$180 = V_i \\times 0{,}9$, donc $V_i = \\dfrac{180}{0{,}9} = 200$ €.'
        },
        {
          statement: 'Un prix augmente de $20\\%$ puis diminue de $15\\%$. Le coefficient multiplicateur global est :',
          type: 'numeric',
          answer: 1.02,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$CM = 1{,}20 \\times 0{,}85 = 1{,}02$. Cela correspond à une hausse globale de $2\\%$.'
        },
        {
          statement: 'Le loyer d\'un appartement passe de $800$ € à $856$ €. Quel est le taux d\'évolution ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$t = \\dfrac{856 - 800}{800} = \\dfrac{56}{800} = 0{,}07 = 7\\%$.'
        },
        {
          statement: 'Après deux augmentations successives de $10\\%$ chacune, le taux global d\'augmentation est :',
          type: 'multiple-choice',
          options: ['$20\\%$', '$21\\%$', '$22\\%$', '$10\\%$'],
          answer: 1,
          points: 2,
          correction: '$CM = 1{,}1 \\times 1{,}1 = 1{,}21$. Le taux global est $1{,}21 - 1 = 0{,}21 = 21\\%$. Ce n\'est PAS $10\\% + 10\\% = 20\\%$ car les évolutions se composent par multiplication des CM, pas par addition des taux.'
        }
      ]
    }
  }

);
