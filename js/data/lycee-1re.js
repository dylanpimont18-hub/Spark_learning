/* =========================================================
   Spark Learning – data/lycee-1re.js
   Modules Lycée 1re (Première)
   ========================================================= */

window.MODULES.push(

  {
    id: 'derivation',
    level: 2,
    icon: '📉',
    title: 'La Dérivation',
    subtitle: 'Taux de variation, dérivées usuelles, extremums',
    keywords: ['Dérivée', 'Taux de variation', 'Tangente', 'd/dt'],
    physics: 'Cinématique : v = dx/dt, cinétique chimique',

    cours: {
      intro: 'La dérivée d\'une fonction en un point est le taux de variation instantané : $f\'(x_0) = \\lim_{h \\to 0} \\dfrac{f(x_0+h)-f(x_0)}{h}$. Géométriquement, $f\'(x_0)$ est la pente de la tangente à la courbe en $(x_0, f(x_0))$. En physique, la vitesse est la dérivée de la position ($v = dx/dt$) et l\'accélération est la dérivée de la vitesse ($a = dv/dt$). La dérivée est une FONCTION, pas un nombre : $f\'(x) = 6x+5$ donne la pente en tout point ; $f\'(2) = 17$ est sa valeur en $x=2$. Si $f\'(x_0) > 0$, $f$ est localement croissante ; si $f\'(x_0) < 0$, elle est décroissante.',
      method: {
        title: 'Règles de dérivation usuelles',
        steps: [
          'Fonction constante : si $f(x) = k$ alors $f\'(x) = 0$.',
          'Fonction puissance : si $f(x) = x^n$ alors $f\'(x) = n \\cdot x^{n-1}$. Exemple : $(x^3)\' = 3x^2$.',
          'Combinaisons : $(af + bg)\' = af\' + bg\'$ (linéarité). Exemple : $f(x) = 3x^2 + 5x - 2 \\Rightarrow f\'(x) = 6x + 5$.'
        ]
      },
      formulas: [
        '$(x^n)\' = n \\cdot x^{n-1}$',
        '$(ax^n)\' = a \\cdot n \\cdot x^{n-1}$',
        '$(e^x)\' = e^x$',
        '$(\\ln x)\' = \\dfrac{1}{x}$',
        '$(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$'
      ],
      piege: 'N\'oublie pas que la dérivée est une FONCTION, pas un nombre. $f\'(x) = 6x + 5$ est une fonction. Pour avoir la valeur de la dérivée en $x = 2$, on calcule $f\'(2) = 6 \\times 2 + 5 = 17$.'
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
        correction: '$f\'(x) = 2x$ est bien une FONCTION (elle dépend de $x$). La valeur $f\'(3) = 6$ est la pente de la tangente en $(3\\,;\\,9)$ — pas la valeur de $f$ en $x=3$ (qui vaut $f(3)=9$). L\'erreur classique est de confondre $f(3)$ (ordonnée du point) et $f\'(3)$ (pente de la tangente en ce point).'
      },
      {
        q: 'La position d\'un mobile est donnée par $x(t) = 3t^2 + 2t$ (en m, t en s). Sa vitesse à $t = 2$ s est :',
        options: ['$v = 16$ m/s', '$v = 12$ m/s', '$v = 14$ m/s', '$v = 6$ m/s'],
        answer: 2,
        correction: '$v(t) = x\'(t) = 6t + 2$. Donc $v(2) = 6 \\times 2 + 2 = 14$ m/s.'
      },
      {
        q: 'La dérivée de $f(x) = e^{2x}$ est :',
        options: ['$f\'(x) = e^{2x}$', '$f\'(x) = 2e^{2x}$', '$f\'(x) = 2e^{x}$', '$f\'(x) = xe^{2x}$'],
        answer: 1,
        correction: 'Par la règle de dérivation des fonctions composées : $(e^{u})\'= u\' \\cdot e^u$. Ici $u = 2x$, $u\' = 2$. Donc $(e^{2x})\' = 2e^{2x}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6);
        const n = rand(2, 4);
        // f(x) = a*x^n => f'(x) = a*n*x^(n-1)
        // Ask for f'(1) = a*n
        const fprime1 = a * n;
        return {
          statement: `Soit $f(x) = ${a}x^{${n}}$. Calcule $f'(1)$, c'est-à-dire la valeur de la dérivée de $f$ en $x = 1$.`,
          answer: fprime1,
          tolerance: 0.001,
          unit: '',
          hint: `Commence par trouver $f'(x)$ en appliquant la règle : $(ax^n)' = a \\cdot n \\cdot x^{n-1}$. Ici $a = ${a}$ et $n = ${n}$. Ensuite substitue $x = 1$.`,
          solution: [
            `Dériver : $f'(x) = ${a} \\times ${n} \\times x^{${n}-1} = ${a*n}x^{${n-1}}$`,
            `Évaluer en $x = 1$ : $f'(1) = ${a*n} \\times 1^{${n-1}} = ${a*n} \\times 1$`,
            `$f'(1) = ${fprime1}$`
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
          correction: 'On dérive terme à terme : $f\'(x) = 12x^3 - 4x + 7$. Puis $f\'(2) = 12 \\times 8 - 4 \\times 2 + 7 = 96 - 8 + 7 = 87$.'
        },
        {
          statement: 'La position d\'un mobile est $x(t) = 5t^3 - 2t^2 + t$ (en m, $t$ en s). Calculer l\'accélération $a(t)$ à l\'instant $t = 1$ s.',
          type: 'numeric',
          answer: 26,
          tolerance: 0.01,
          unit: 'm/s²',
          points: 3,
          correction: '$v(t) = x\'(t) = 15t^2 - 4t + 1$. Puis $a(t) = v\'(t) = 30t - 4$. Donc $a(1) = 30 \\times 1 - 4 = 26$ m/s².'
        },
        {
          statement: 'La dérivée de $g(x) = x^2 e^x$ est :',
          type: 'multiple-choice',
          options: ['$g\'(x) = 2x e^x$', '$g\'(x) = (2x + x^2) e^x$', '$g\'(x) = x^2 e^x + 2x$', '$g\'(x) = 2x e^{2x}$'],
          answer: 1,
          points: 2,
          correction: 'On applique la formule du produit : $(uv)\' = u\'v + uv\'$. Avec $u = x^2$, $u\' = 2x$, $v = e^x$, $v\' = e^x$. Donc $g\'(x) = 2x e^x + x^2 e^x = (2x + x^2) e^x$.'
        },
        {
          statement: 'Soit $h(x) = 4x^3 - 12x + 5$. Déterminer la valeur de $x > 0$ pour laquelle $h\'(x) = 0$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: '$h\'(x) = 12x^2 - 12$. On résout $12x^2 - 12 = 0$, soit $x^2 = 1$, donc $x = 1$ ou $x = -1$. La solution positive est $x = 1$.'
        }
      ]
    }
  },

    {
    id: '1re-suites',
    level: 2,
    icon: '🔄',
    title: 'Suites numériques',
    subtitle: 'Suites arithmétiques et géométriques',
    keywords: ['Suite arithmétique', 'Suite géométrique', 'Raison', 'Terme général', 'Somme'],
    physics: 'Décroissance radioactive (suite géométrique), intérêts composés, signal numérique',

    cours: {
      intro: 'Une suite numérique est une liste ordonnée de nombres où chaque terme se construit à partir du précédent. Quand on ajoute toujours la même quantité $r$, c\'est une suite arithmétique (comme une horloge qui avance d\'une seconde à chaque tick). Quand on multiplie toujours par le même facteur $q$, c\'est une suite géométrique (comme la décroissance radioactive : chaque demi-vie divise la quantité par 2). La distinction clé : arithmétique = variation absolue constante ; géométrique = taux de variation constant. Attention au comptage des termes : $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes — pas $n$. Une suite géométrique de raison $q = 1/2$ ne s\'annule jamais mais tend vers $0$ : même après 50 demi-vies, il reste un atome en théorie.',
      method: {
        title: 'Méthode',
        steps: [
          '**Suite arithmétique** (raison $r$) : $u_n = u_0 + n \\times r$. Terme suivant = terme précédent $+ r$ (variation constante).',
          '**Suite géométrique** (raison $q$) : $u_n = u_0 \\times q^n$. Terme suivant = terme précédent $\\times q$ (taux de variation constant).',
          'Identifier le type : si $u_{n+1} - u_n$ est constant → arithmétique. Si $u_{n+1}/u_n$ est constant → géométrique.'
        ]
      },
      formulas: [
        '$u_n^{\\text{arith}} = u_0 + n \\cdot r$',
        '$u_n^{\\text{géom}} = u_0 \\times q^n$',
        '$S_n^{\\text{arith}} = \\dfrac{(u_0 + u_n)(n+1)}{2}$',
        '$S_n^{\\text{géom}} = u_0 \\times \\dfrac{1 - q^{n+1}}{1 - q}$ (si $q \\neq 1$)'
      ],
      piege: 'Confondre le rang et le nombre de termes. $u_0, u_1, \\ldots, u_n$ contient $n+1$ termes (pas $n$). Pour la demi-vie : après $k$ demi-vies, il reste $N_0 \\times (1/2)^k$ — c\'est un exposant $k$, pas $k-1$ !'
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
        correction: 'Dans une suite arithmétique, la différence entre deux termes consécutifs est constante. Ici $3-1=2$, $9-3=6$, $27-9=18$ : les différences ne sont PAS constantes. En revanche, les quotients $3/1=3$, $9/3=3$, $27/9=3$ sont constants : c\'est une suite géométrique de raison $q=3$.'
      },
      {
        q: 'Un noyau radioactif a une demi-vie de $8$ jours. Il en reste $100$ g initialement. Combien en reste-t-il après $24$ jours ?',
        options: ['$50$ g', '$25$ g', '$12{,}5$ g', '$6{,}25$ g'],
        answer: 2,
        correction: '$24$ jours $= 3 \\times 8$ jours $= 3$ demi-vies. $N = 100 \\times \\left(\\dfrac{1}{2}\\right)^3 = 100 \\times \\dfrac{1}{8} = 12{,}5$ g.'
      },
      {
        q: 'Une suite géométrique a $u_0 = 2$ et $q = 3$. Quel est le terme $u_3$ ?',
        options: ['$18$', '$54$', '$27$', '$6$'],
        answer: 1,
        correction: '$u_3 = u_0 \\times q^3 = 2 \\times 3^3 = 2 \\times 27 = 54$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const u0 = rand(1, 10), q = pick([2, 3, 0.5]);
        const n = rand(3, 6);
        const answer = parseFloat((u0 * Math.pow(q, n)).toFixed(3));
        return {
          statement: `Une suite géométrique a $u_0 = ${u0}$ et de raison $q = ${q}$. Calculer $u_{${n}}$ (arrondir au millième si besoin).`,
          answer,
          tolerance: 0.01,
          unit: '',
          hint: `$u_n = u_0 \\times q^n = ${u0} \\times ${q}^{${n}}$.`,
          solution: [
            `$u_{${n}} = ${u0} \\times ${q}^{${n}}$`,
            `$= ${u0} \\times ${Math.pow(q, n)}$`,
            `$= ${answer}$`
          ]
        };
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
          correction: '$u_n = u_0 + n \\times r$. Donc $u_{20} = 3 + 20 \\times 5 = 3 + 100 = 103$.'
        },
        {
          statement: 'On considère la suite $(v_n)$ définie par $v_0 = 2$ et $v_{n+1} = 3 v_n$. Quelle est la nature de cette suite ?',
          type: 'multiple-choice',
          options: ['Arithmétique de raison $3$', 'Géométrique de raison $3$', 'Géométrique de raison $2$', 'Ni arithmétique, ni géométrique'],
          answer: 1,
          points: 1,
          correction: '$v_{n+1} = 3 v_n$ signifie que chaque terme est obtenu en multipliant le précédent par $3$. C\'est donc une suite géométrique de raison $q = 3$.'
        },
        {
          statement: 'Calculer la somme $S = u_0 + u_1 + \\cdots + u_{10}$ pour la suite arithmétique $u_n = 2 + 4n$.',
          type: 'numeric',
          answer: 242,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$u_0 = 2$, $u_{10} = 2 + 40 = 42$. Il y a $11$ termes ($u_0$ à $u_{10}$). $S = \\dfrac{(u_0 + u_{10}) \\times 11}{2} = \\dfrac{(2 + 42) \\times 11}{2} = \\dfrac{44 \\times 11}{2} = 242$.'
        },
        {
          statement: 'Un capital de $1000$ € est placé à un taux annuel de $5\\%$ à intérêts composés. Au bout de $n$ années, le capital est $C_n = 1000 \\times 1{,}05^n$. Calculer $C_3$ (arrondi au centime).',
          type: 'numeric',
          answer: 1157.63,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$C_3 = 1000 \\times (1{,}05)^3 = 1000 \\times 1{,}157625 = 1157{,}63$ € (arrondi au centime).'
        },
        {
          statement: 'La somme des $6$ premiers termes ($v_0$ à $v_5$) d\'une suite géométrique de premier terme $v_0 = 1$ et de raison $q = 2$ vaut :',
          type: 'multiple-choice',
          options: ['$32$', '$63$', '$64$', '$31$'],
          answer: 1,
          points: 2,
          correction: '$S = v_0 \\times \\dfrac{1 - q^{6}}{1 - q} = 1 \\times \\dfrac{1 - 64}{1 - 2} = \\dfrac{-63}{-1} = 63$.'
        }
      ]
    }
  },

    {
    id: '1re-produit-scalaire',
    level: 2,
    icon: '⋅',
    title: 'Produit scalaire',
    subtitle: 'Définition, calcul, travail d\'une force',
    keywords: ['Produit scalaire', 'Angle', 'Norme', 'Travail', 'Orthogonalité'],
    physics: 'Travail d\'une force $W = \\vec{F} \\cdot \\vec{d}$, puissance $P = \\vec{F} \\cdot \\vec{v}$',

    cours: {
      intro: 'Le produit scalaire "projette" un vecteur sur un autre et retourne un scalaire (un nombre réel), jamais un vecteur. Sa formule : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$ où $\\theta$ est l\'angle entre les deux vecteurs. En physique, le travail d\'une force est exactement ce produit scalaire : $W = \\vec{F} \\cdot \\vec{d}$. Si $\\theta = 90°$, cos vaut $0$ donc $W = 0$ (la réaction normale du sol ne travaille pas). Si $\\theta = 180°$, la force s\'oppose au mouvement et $W < 0$ (frottement). Deux vecteurs sont orthogonaux si et seulement si leur produit scalaire est nul : c\'est le critère algébrique de la perpendicularité.',
      method: {
        title: 'Méthode',
        steps: [
          'Définition angulaire : $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos(\\theta)$.',
          'Définition par coordonnées : si $\\vec{u}(x_1, y_1)$ et $\\vec{v}(x_2, y_2)$, alors $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.',
          'Orthogonalité : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. Auto-produit : $\\vec{u} \\cdot \\vec{u} = \\|\\vec{u}\\|^2$.'
        ]
      },
      formulas: [
        '$\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\cdot \\|\\vec{v}\\| \\cdot \\cos\\theta$',
        '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$',
        '$W = \\vec{F} \\cdot \\vec{d} = F d \\cos\\theta$ (travail d\'une force)',
        '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$'
      ],
      piege: 'Le produit scalaire est un NOMBRE (scalaire), pas un vecteur. $\\vec{u} \\cdot \\vec{v} \\in \\mathbb{R}$. Il peut être négatif (angle obtus), nul (vecteurs orthogonaux) ou positif (angle aigu). Un travail négatif signifie que la force s\'oppose au déplacement (force de frottement par exemple).'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $10\\,\\text{N}$ est appliquée selon un angle de $60°$ par rapport au déplacement $\\vec{d}$ de norme $5\\,\\text{m}$. Quel est le travail ?',
        options: ['$50\\,\\text{J}$', '$25\\,\\text{J}$', '$43{,}3\\,\\text{J}$', '$0\\,\\text{J}$'],
        answer: 1,
        correction: '$W = F \\times d \\times \\cos(60°) = 10 \\times 5 \\times 0{,}5 = 25\\,\\text{J}$.'
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
        correction: 'L\'élève a parfaitement raison. $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 4 + 4 \\times (-3) = 0$. Par définition, $\\vec{u} \\cdot \\vec{v} = 0 \\Leftrightarrow \\vec{u} \\perp \\vec{v}$. Le produit scalaire est bien un SCALAIRE (un nombre réel) — pas un vecteur. L\'option "$(7\\,;\\,1)$" est l\'erreur classique de confondre produit scalaire et addition de vecteurs.'
      },
      {
        q: 'La réaction normale $\\vec{N}$ d\'un sol horizontal est verticale. Le déplacement $\\vec{d}$ est horizontal. Quel est le travail de $\\vec{N}$ ?',
        options: ['$W = N \\times d$', '$W = 0$', '$W = -N \\times d$', 'Dépend de la masse'],
        answer: 1,
        correction: '$\\vec{N} \\perp \\vec{d}$, donc $\\theta = 90°$ et $W = F d \\cos(90°) = F d \\times 0 = 0\\,\\text{J}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const F = rand(5, 20), d = rand(3, 10), angleDeg = pick([0, 30, 45, 60]);
        const cosVal = Math.cos(angleDeg * Math.PI / 180);
        const answer = parseFloat((F * d * cosVal).toFixed(2));
        return {
          statement: `Une force de $${F}\\,\\text{N}$ agit selon un angle de $${angleDeg}°$ par rapport au déplacement de $${d}\\,\\text{m}$. Calculer le travail en joules.`,
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
          correction: '$\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 = 3 \\times 4 + (-2) \\times 5 = 12 - 10 = 2$.'
        },
        {
          statement: 'Deux vecteurs $\\vec{a}$ et $\\vec{b}$ vérifient $\\|\\vec{a}\\| = 6$, $\\|\\vec{b}\\| = 4$ et l\'angle entre eux est $\\theta = 60°$. Calculer $\\vec{a} \\cdot \\vec{b}$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\vec{a} \\cdot \\vec{b} = \\|\\vec{a}\\| \\times \\|\\vec{b}\\| \\times \\cos(60°) = 6 \\times 4 \\times 0{,}5 = 12$.'
        },
        {
          statement: 'Pour quels vecteurs $\\vec{u}(2\\,;\\,k)$ et $\\vec{v}(3\\,;\\,-6)$ a-t-on $\\vec{u} \\perp \\vec{v}$ ?',
          type: 'multiple-choice',
          options: ['$k = -4$', '$k = 1$', '$k = 4$', '$k = -1$'],
          answer: 1,
          points: 2,
          correction: '$\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. Donc $2 \\times 3 + k \\times (-6) = 0$, soit $6 - 6k = 0$, d\'où $k = 1$.'
        },
        {
          statement: 'Une force $\\vec{F}$ de norme $15\\,\\text{N}$ est appliquée selon un angle de $45°$ par rapport au déplacement de $8\\,\\text{m}$. Calculer le travail $W$ en joules (arrondi à $0{,}1$ J).',
          type: 'numeric',
          answer: 84.85,
          tolerance: 0.1,
          unit: 'J',
          points: 2,
          correction: '$W = F \\times d \\times \\cos(45°) = 15 \\times 8 \\times \\dfrac{\\sqrt{2}}{2} = 120 \\times 0{,}7071 \\approx 84{,}85$ J.'
        },
        {
          statement: 'La norme du vecteur $\\vec{w}(5\\,;\\,-12)$ est :',
          type: 'multiple-choice',
          options: ['$7$', '$17$', '$13$', '$\\sqrt{119}$'],
          answer: 2,
          points: 2,
          correction: '$\\|\\vec{w}\\| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. On utilise $\\vec{w} \\cdot \\vec{w} = \\|\\vec{w}\\|^2 = 169$.'
        }
      ]
    }
  },

    {
    id: '1re-second-degre',
    level: 2,
    icon: '🔵',
    title: 'Second degré',
    subtitle: 'Équations, discriminant, factorisation',
    keywords: ['Trinôme', 'Discriminant', 'Racine', 'Factorisation'],
    physics: true,
    cours: {
      intro: 'Une équation du second degré modélise toute situation où une quantité dépend du carré d\'une autre : trajectoire d\'un projectile, aire d\'un carré, bénéfice d\'une entreprise. Le discriminant $\\Delta = b^2 - 4ac$ agit comme un capteur : $\\Delta > 0$ signifie que la parabole coupe l\'axe des abscisses en 2 points distincts, $\\Delta = 0$ en 1 point (sommet sur l\'axe), $\\Delta < 0$ jamais. Une erreur très fréquente : résoudre $x^2 = 9$ et n\'écrire que $x = 3$, en oubliant que $(-3)^2 = 9$ aussi — il y a DEUX solutions $x = 3$ ET $x = -3$. La forme factorisée $a(x-x_1)(x-x_2)$ est très utile en physique pour trouver les instants où une grandeur s\'annule.',
      method: {
        title: 'Résoudre $ax^2+bx+c=0$',
        steps: [
          'Calculer $\\Delta = b^2-4ac$.',
          'Si $\\Delta < 0$ : pas de solution réelle.',
          'Si $\\Delta = 0$ : une solution double $x_0 = -\\dfrac{b}{2a}$.',
          'Si $\\Delta > 0$ : deux solutions $x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.'
        ]
      },
      formulas: [
        '$\\Delta = b^2-4ac$',
        '$x_{1,2}=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$ si $\\Delta>0$',
        'Forme factorisée : $a(x-x_1)(x-x_2)$ si $\\Delta>0$'
      ],
      piege: 'Attention au signe de $a$ : si $a<0$ le coefficient de $x^2$ est négatif, ne pas oublier de l\'inclure dans $\\Delta$.'
    },
    quiz: [
      { q: 'Résoudre $x^2 = 9$. Laquelle de ces affirmations est CORRECTE ?', options: ['La seule solution est $x = 3$ car $\\sqrt{9} = 3$', 'Les solutions sont $x = 3$ et $x = -3$ car $(\\pm 3)^2 = 9$', 'La seule solution est $x = -3$ car le discriminant donne une solution négative', 'Il n\'y a pas de solution car $b = c = 0$'], answer: 1, correction: '$x^2 = 9$ revient à $x^2 - 9 = 0$, soit $(x-3)(x+3) = 0$. Il y a bien DEUX solutions : $x = 3$ et $x = -3$. L\'erreur classique est d\'écrire uniquement $x = \\sqrt{9} = 3$ car on oublie que $(-3)^2 = 9$ également. Toujours vérifier les deux signes !' },
      { q: 'Si $\\Delta=0$, l\'équation $ax^2+bx+c=0$ a :', options: ['Deux solutions distinctes', 'Pas de solution', 'Une solution double', 'Une infinité de solutions'], answer: 2, correction: '$\\Delta=0 \\Rightarrow$ une solution double $x_0=-b/(2a)$.' },
      { q: 'Les solutions de $x^2-5x+6=0$ sont :', options: ['$x=1$ et $x=6$', '$x=2$ et $x=3$', '$x=-2$ et $x=-3$', '$x=5$ et $x=1$'], answer: 1, correction: '$\\Delta=1$, $x_1=\\frac{5-1}{2}=2$, $x_2=\\frac{5+1}{2}=3$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(1, 5), r2 = rand(r1+1, r1+4);
        const b = -(r1+r2), c = r1*r2;
        const delta = b*b - 4*c;
        return {
          statement: `Calculer le discriminant de $x^2 ${b<0?b:'+'+b}x + ${c} = 0$.`,
          answer: delta,
          tolerance: 0,
          unit: '',
          hint: `$\\Delta = b^2 - 4ac$ avec $a=1$, $b=${b}$, $c=${c}$.`,
          solution: [`$\\Delta = (${b})^2 - 4\\times1\\times${c} = ${b*b} - ${4*c} = ${delta}$`]
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
          correction: '$\\Delta = b^2 - 4ac = (-7)^2 - 4 \\times 2 \\times 3 = 49 - 24 = 25$.'
        },
        {
          statement: 'Résoudre $2x^2 - 7x + 3 = 0$. Donner la plus grande racine.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\Delta = 25$, $\\sqrt{\\Delta} = 5$. $x_1 = \\dfrac{7 - 5}{4} = \\dfrac{1}{2}$ et $x_2 = \\dfrac{7 + 5}{4} = 3$. La plus grande racine est $3$.'
        },
        {
          statement: 'L\'équation $x^2 + 2x + 5 = 0$ admet :',
          type: 'multiple-choice',
          options: ['Deux solutions réelles distinctes', 'Une solution double', 'Aucune solution réelle', 'Une infinité de solutions'],
          answer: 2,
          points: 2,
          correction: '$\\Delta = 4 - 20 = -16 < 0$. Le discriminant est strictement négatif, donc l\'équation n\'admet aucune solution réelle.'
        },
        {
          statement: 'La forme factorisée de $x^2 - 6x + 8$ est :',
          type: 'multiple-choice',
          options: ['$(x - 2)(x + 4)$', '$(x - 2)(x - 4)$', '$(x + 2)(x - 4)$', '$(x - 1)(x - 8)$'],
          answer: 1,
          points: 2,
          correction: '$\\Delta = 36 - 32 = 4$, $\\sqrt{\\Delta} = 2$. $x_1 = \\dfrac{6 - 2}{2} = 2$, $x_2 = \\dfrac{6 + 2}{2} = 4$. Forme factorisée : $(x - 2)(x - 4)$.'
        },
        {
          statement: 'Le sommet de la parabole $f(x) = -3x^2 + 12x - 7$ a pour abscisse :',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le sommet est en $x_s = -\\dfrac{b}{2a} = -\\dfrac{12}{2 \\times (-3)} = -\\dfrac{12}{-6} = 2$.'
        }
      ]
    }
  },

    {
    id: '1re-polynomes-signe',
    level: 2,
    icon: '📉',
    title: 'Signe d\'un trinôme du second degré',
    subtitle: 'Tableau de signe, inéquations du second degré',
    keywords: ['Trinôme', 'Tableau de signe', 'Inéquation', 'Second degré'],
    physics: false,
    cours: {
      intro: 'Le signe d\'un trinôme est entièrement déterminé par deux éléments : le coefficient $a$ et le discriminant $\\Delta$. L\'intuition géométrique : si $a > 0$, la parabole "sourit" (ouverte vers le haut) — elle est positive aux extrémités et négative dans le creux entre ses racines. Si $a < 0$, la parabole est renversée : positive entre ses racines, négative à l\'extérieur. C\'est le piège le plus fréquent : les élèves appliquent systématiquement la règle "$a > 0$ : négatif entre les racines" sans vérifier le signe de $a$. Si $\\Delta < 0$, la parabole ne coupe jamais l\'axe des abscisses : son signe est constant, égal au signe de $a$ sur tout $\\mathbb{R}$.',
      method: {
        title: 'Établir le tableau de signe',
        steps: [
          'Calculer $\\Delta$ et les racines éventuelles $x_1 < x_2$.',
          'Si $\\Delta < 0$ : le signe est celui de $a$ sur $\\mathbb{R}$ entier.',
          'Si $\\Delta = 0$ : le signe est celui de $a$, sauf en $x_0$ où il est nul.',
          'Si $\\Delta > 0$ : le trinôme est de signe opposé à $a$ entre $x_1$ et $x_2$, et de même signe que $a$ en dehors.'
        ]
      },
      formulas: [
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c < 0 \\Leftrightarrow x_1 < x < x_2$',
        '$a > 0, \\Delta > 0$ : $ax^2+bx+c > 0 \\Leftrightarrow x < x_1$ ou $x > x_2$'
      ],
      piege: 'Si $a < 0$, les inégalités sont inversées ! Toujours commencer par vérifier le signe de $a$.'
    },
    quiz: [
      { q: 'Le trinôme $-x^2+5x-6$ a pour racines $x_1=2$ et $x_2=3$. Un élève dit : "il est négatif pour $2<x<3$." Quelle est son erreur ?', options: ['Il a oublié que $a=-1<0$ : le trinôme est POSITIF entre les racines ($2<x<3$) et NÉGATIF à l\'extérieur', 'L\'élève a raison, tout trinôme est négatif entre ses racines', 'Les racines sont incorrectes, il faudrait $x_1=-3$ et $x_2=-2$', 'On ne peut pas déterminer le signe sans calculer le discriminant d\'abord'], answer: 0, correction: 'La règle "négatif entre les racines" ne s\'applique qu\'à condition $a > 0$. Ici $a = -1 < 0$ : la parabole est renversée, donc le trinôme est POSITIF entre les racines ($2 < x < 3$) et NÉGATIF à l\'extérieur ($x < 2$ ou $x > 3$). Toujours commencer par vérifier le signe de $a$ !' },
      { q: 'Si $\\Delta<0$ et $a>0$, le trinôme est :', options: ['Toujours négatif', 'Toujours positif', 'Nul partout', 'Tantôt positif, tantôt négatif'], answer: 1, correction: '$\\Delta<0$ et $a>0$ : pas de racine, toujours du signe de $a$, donc toujours positif.' },
      { q: 'Résoudre $x^2-x-6>0$ (racines $-2$ et $3$, $a=1>0$) :', options: ['$]-2;3[$', '$]-\\infty;-2[\\cup]3;+\\infty[$', '$x>3$', '$x<-2$'], answer: 1, correction: '$a>0$ : positif à l\'extérieur des racines. Solution : $x<-2$ ou $x>3$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r1 = rand(-4, 0), r2 = rand(1, 5);
        const b = -(r1+r2), c = r1*r2;
        return {
          statement: `Le trinôme $x^2 + ${b<0?'('+b+')':b}x + ${c<0?'('+c+')':c}$ a pour racines $${r1}$ et $${r2}$. Sur quel intervalle est-il strictement négatif ? Donner la borne gauche.`,
          answer: r1,
          tolerance: 0,
          unit: '',
          hint: '$a=1>0$ : négatif entre les deux racines.',
          solution: [`Solution : $]${r1};${r2}[$. Borne gauche : $${r1}$.`]
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
          correction: '$a = 1 > 0$ : le trinôme est négatif ENTRE les racines. Donc $f(x) < 0$ pour $x \\in ]-1\\,;\\,5[$.'
        },
        {
          statement: 'Le trinôme $g(x) = -2x^2 + 8x - 6$ a pour racines $1$ et $3$. Pour quelles valeurs de $x$ a-t-on $g(x) > 0$ ?',
          type: 'multiple-choice',
          options: ['$x < 1$ ou $x > 3$', '$1 < x < 3$', '$x > 3$', '$x < 1$'],
          answer: 1,
          points: 2,
          correction: '$a = -2 < 0$ : la parabole est retournée. Le trinôme est positif ENTRE les racines. Donc $g(x) > 0$ pour $x \\in ]1\\,;\\,3[$.'
        },
        {
          statement: 'Résoudre l\'inéquation $x^2 + 3x + 5 > 0$. Quel est l\'ensemble solution ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$ (toujours vrai)', 'Ensemble vide', '$]-\\infty\\,;\\,-1[$', '$]0\\,;\\,+\\infty[$'],
          answer: 0,
          points: 2,
          correction: '$\\Delta = 9 - 20 = -11 < 0$ et $a = 1 > 0$. Pas de racine réelle et signe de $a$ positif : le trinôme est strictement positif pour tout $x \\in \\mathbb{R}$.'
        },
        {
          statement: 'Les racines de $2x^2 - 10x + 12 = 0$ sont $x_1 = 2$ et $x_2 = 3$. Calculer $\\Delta$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\Delta = (-10)^2 - 4 \\times 2 \\times 12 = 100 - 96 = 4$.'
        },
        {
          statement: 'On sait que $-x^2 + 6x - 9 \\leq 0$ pour tout $x$. Quelle est la valeur de $x$ pour laquelle $-x^2 + 6x - 9 = 0$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\Delta = 36 - 36 = 0$. Solution double : $x_0 = \\dfrac{-6}{2 \\times (-1)} = 3$. Puisque $a = -1 < 0$ et $\\Delta = 0$, le trinôme est $\\leq 0$ partout, nul uniquement en $x = 3$.'
        }
      ]
    }
  },

    {
    id: '1re-trigonometrie',
    level: 2,
    icon: '🔄',
    title: 'Trigonométrie — cercle trigonométrique',
    subtitle: 'Radians, cos, sin, valeurs remarquables',
    keywords: ['Radian', 'Cercle trigonométrique', 'Cosinus', 'Sinus', 'Valeurs remarquables'],
    physics: true,
    cours: {
      intro: 'Le cercle trigonométrique unifie toutes les définitions du cosinus et du sinus : pour tout angle $\\theta$ en radians, le point $M(\\cos\\theta\\,;\\,\\sin\\theta)$ se trouve sur le cercle de rayon $1$. Cela généralise le triangle rectangle (qui ne définit $\\cos$ et $\\sin$ que pour $0 < \\theta < \\pi/2$) à tous les angles réels. Le radian est l\'unité naturelle : $\\pi$ rad $= 180°$, un tour complet $= 2\\pi$ rad. Les formules de dérivée $((\\sin x)\' = \\cos x)$ ne sont valides qu\'en radians. Deux familles de valeurs remarquables sont souvent confondues : $\\cos(\\pi/6)=\\frac{\\sqrt{3}}{2}$ et $\\cos(\\pi/3)=\\frac{1}{2}$ — pour les retenir, penser que plus l\'angle est grand, plus le cosinus est petit (la parabole descend).',
      method: {
        title: 'Conversion et valeurs remarquables',
        steps: [
          'Conversion : $\\text{rad} = \\text{degrés} \\times \\dfrac{\\pi}{180}$.',
          'Valeurs remarquables : $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$.',
          'Périodicité : $\\cos(\\theta+2\\pi)=\\cos\\theta$, $\\sin(\\theta+2\\pi)=\\sin\\theta$.',
          'Parité : $\\cos(-\\theta)=\\cos\\theta$ (pair) ; $\\sin(-\\theta)=-\\sin\\theta$ (impair).'
        ]
      },
      formulas: [
        '$\\cos^2\\theta+\\sin^2\\theta=1$',
        '$\\cos\\frac{\\pi}{3}=\\frac{1}{2}$, $\\sin\\frac{\\pi}{3}=\\frac{\\sqrt{3}}{2}$',
        '$\\cos\\frac{\\pi}{4}=\\sin\\frac{\\pi}{4}=\\frac{\\sqrt{2}}{2}$',
        '$\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$, $\\sin\\frac{\\pi}{6}=\\frac{1}{2}$'
      ],
      piege: 'Ne pas confondre $\\cos\\frac{\\pi}{3}=\\frac{1}{2}$ et $\\cos\\frac{\\pi}{6}=\\frac{\\sqrt{3}}{2}$ : les deux sont souvent intervertis !'
    },
    quiz: [
      { q: 'Convertir $60°$ en radians :', options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{3}$', '$\\frac{\\pi}{2}$', '$\\frac{2\\pi}{3}$'], answer: 1, correction: '$60\\times\\frac{\\pi}{180}=\\frac{\\pi}{3}$.' },
      { q: '$\\sin\\frac{\\pi}{2}=$', options: ['$0$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{1}{2}$', '$1$'], answer: 3, correction: 'Sur le cercle trigonométrique, $\\frac{\\pi}{2}$ correspond au point $(0;1)$, donc $\\sin\\frac{\\pi}{2}=1$.' },
      { q: 'Laquelle de ces affirmations est VRAIE ?', options: ['$\\cos\\dfrac{\\pi}{3}=\\dfrac{1}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{3}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{1}{2}$', '$\\cos\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$ et $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt{2}}{2}$', '$\\cos\\dfrac{\\pi}{3}=1$ et $\\sin\\dfrac{\\pi}{3}=0$'], answer: 0, correction: '$\\cos(\\pi/3) = 1/2$ et $\\sin(\\pi/3) = \\sqrt{3}/2$. L\'option B est l\'erreur la plus fréquente : elle confond $\\pi/3$ avec $\\pi/6$ (qui donne bien $\\cos(\\pi/6) = \\sqrt{3}/2$ et $\\sin(\\pi/6) = 1/2$). L\'option C correspond à $\\pi/4$. Moyen mnémotechnique : cosinus descend quand l\'angle monte — $\\cos(\\pi/6) > \\cos(\\pi/4) > \\cos(\\pi/3)$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [
          { deg: 30, rad: 'π/6', cos: 0.866, sin: 0.5 },
          { deg: 45, rad: 'π/4', cos: 0.707, sin: 0.707 },
          { deg: 60, rad: 'π/3', cos: 0.5, sin: 0.866 },
          { deg: 90, rad: 'π/2', cos: 0, sin: 1 },
          { deg: 0, rad: '0', cos: 1, sin: 0 }
        ];
        const a = pick(angles);
        return {
          statement: `Calculer $\\cos(${a.deg}°)$. Donner la valeur approchée à $0{,}001$.`,
          answer: a.cos,
          tolerance: 0.002,
          unit: '',
          hint: `$${a.deg}°= ${a.rad}$ rad. Utilise les valeurs remarquables.`,
          solution: [`$\\cos(${a.deg}°)=\\cos\\left(${a.rad}\\right)\\approx${a.cos}$`]
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
          correction: '$\\dfrac{5\\pi}{6} \\times \\dfrac{180}{\\pi} = \\dfrac{5 \\times 180}{6} = 150°$.'
        },
        {
          statement: 'Calculer $\\cos^2\\left(\\dfrac{\\pi}{4}\\right) + \\sin^2\\left(\\dfrac{\\pi}{3}\\right)$. Donner la valeur exacte sous forme décimale (arrondie à $0{,}01$).',
          type: 'numeric',
          answer: 1.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos^2\\left(\\dfrac{\\pi}{4}\\right) = \\left(\\dfrac{\\sqrt{2}}{2}\\right)^2 = \\dfrac{1}{2}$. $\\sin^2\\left(\\dfrac{\\pi}{3}\\right) = \\left(\\dfrac{\\sqrt{3}}{2}\\right)^2 = \\dfrac{3}{4}$. Somme : $\\dfrac{1}{2} + \\dfrac{3}{4} = \\dfrac{5}{4} = 1{,}25$.'
        },
        {
          statement: 'L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ est :',
          type: 'multiple-choice',
          options: ['Toujours vraie', 'Vraie seulement si $\\theta = 0$', 'Toujours fausse (sauf $\\cos\\theta = 0$)', 'Vraie pour $\\theta = \\pi/2$'],
          answer: 2,
          points: 2,
          correction: 'Le cosinus est une fonction PAIRE : $\\cos(-\\theta) = \\cos(\\theta)$, pas $-\\cos(\\theta)$. L\'égalité $\\cos(-\\theta) = -\\cos(\\theta)$ impliquerait $2\\cos\\theta = 0$, soit $\\cos\\theta = 0$. Elle n\'est donc vraie que lorsque $\\cos\\theta = 0$, et fausse en général.'
        },
        {
          statement: 'Quelle est la valeur de $\\sin\\left(\\dfrac{7\\pi}{6}\\right)$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{2}$', '$-\\dfrac{1}{2}$', '$\\dfrac{\\sqrt{3}}{2}$', '$-\\dfrac{\\sqrt{3}}{2}$'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{7\\pi}{6} = \\pi + \\dfrac{\\pi}{6}$. Par la relation $\\sin(\\pi + \\alpha) = -\\sin(\\alpha)$ : $\\sin\\left(\\dfrac{7\\pi}{6}\\right) = -\\sin\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}$.'
        },
        {
          statement: 'Sachant que $\\cos\\theta = 0{,}6$ et $\\theta \\in \\left[0\\,;\\,\\dfrac{\\pi}{2}\\right]$, calculer $\\sin\\theta$.',
          type: 'numeric',
          answer: 0.8,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos^2\\theta + \\sin^2\\theta = 1$, donc $\\sin^2\\theta = 1 - 0{,}36 = 0{,}64$. Comme $\\theta \\in [0\\,;\\,\\pi/2]$, $\\sin\\theta \\geq 0$, donc $\\sin\\theta = \\sqrt{0{,}64} = 0{,}8$.'
        }
      ]
    }
  },

    {
    id: '1re-geometrie-reperee',
    level: 2,
    icon: '📌',
    title: 'Géométrie repérée',
    subtitle: 'Vecteurs colinéaires, équations de droites',
    keywords: ['Vecteur', 'Colinéarité', 'Équation de droite', 'Droite cartésienne'],
    physics: false,
    cours: {
      intro: 'La géométrie repérée traduit les relations géométriques en calculs algébriques. Deux vecteurs $\\vec{u}(a\\,;\\,b)$ et $\\vec{v}(c\\,;\\,d)$ sont colinéaires si leur déterminant $ad - bc = 0$ : c\'est le critère d\'alignement de trois points. Une droite d\'équation $ax + by + c = 0$ possède un vecteur normal $(a\\,;\\,b)$ (perpendiculaire à la droite) et un vecteur directeur $(-b\\,;\\,a)$ (parallèle à la droite). L\'erreur très courante : lire les coefficients $(a\\,;\\,b)$ et les appeler "vecteur directeur" alors qu\'ils forment le vecteur NORMAL. Les deux sont perpendiculaires entre eux — on passe de l\'un à l\'autre en échangeant les coordonnées et changeant un signe.',
      method: {
        title: 'Tester la colinéarité et écrire l\'équation d\'une droite',
        steps: [
          'Colinéarité : $\\vec{u}(x;y)$ et $\\vec{v}(x\';y\')$ colinéaires $\\Leftrightarrow xy\'-x\'y=0$ (déterminant nul).',
          'Équation de droite passant par $A(x_0;y_0)$ de vecteur directeur $\\vec{u}(a;b)$ : $b(x-x_0)-a(y-y_0)=0$.',
          'Ou utiliser la forme $y=mx+p$ si la droite n\'est pas verticale.',
          'Trois points $A$, $B$, $C$ sont alignés si $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires.'
        ]
      },
      formulas: [
        '$\\vec{u}(a;b)$ et $\\vec{v}(c;d)$ colinéaires $\\Leftrightarrow ad-bc=0$',
        'Droite de vecteur directeur $(a;b)$ passant par $(x_0;y_0)$ : $b(x-x_0)=a(y-y_0)$'
      ],
      piege: 'Le vecteur directeur $(a;b)$ est parallèle à la droite. Le vecteur normal est $(-b;a)$ (perpendiculaire). Ne pas les confondre dans l\'équation.'
    },
    quiz: [
      { q: '$\\vec{u}(2;3)$ et $\\vec{v}(4;6)$ sont-ils colinéaires ?', options: ['Non', 'Oui', 'Seulement si norme égale', 'Impossible à dire'], answer: 1, correction: '$2\\times6-3\\times4=12-12=0$ : déterminant nul, donc colinéaires.' },
      { q: 'La droite $(d)$ a pour équation $3x + 2y - 6 = 0$. Un élève dit : "le vecteur directeur est $\\vec{u}(3\\,;\\,2)$." Quelle est son erreur ?', options: ['$(3\\,;\\,2)$ est le vecteur NORMAL ; le vecteur directeur est $(-2\\,;\\,3)$ ou $(2\\,;\\,-3)$', 'L\'élève a raison : les coefficients de $x$ et $y$ donnent toujours le vecteur directeur', 'Le vecteur directeur est $(3\\,;\\,-2)$ car le coefficient de $y$ change de signe', 'Il n\'existe pas de vecteur directeur car la droite n\'est pas verticale'], answer: 0, correction: 'Dans $ax+by+c=0$, le vecteur $\\vec{n}(a\\,;\\,b)$ est le vecteur NORMAL (perpendiculaire à la droite). Le vecteur directeur est $\\vec{u}(-b\\,;\\,a)$. Ici $\\vec{n}(3\\,;\\,2)$ est normal, et le vecteur directeur est $\\vec{u}(-2\\,;\\,3)$. On vérifie : $\\vec{n} \\cdot \\vec{u} = 3 \\times (-2) + 2 \\times 3 = 0$. Bien perpendiculaires !' },
      { q: 'Trois points $A(0;0)$, $B(2;3)$, $C(4;6)$ sont-ils alignés ?', options: ['Non', 'Oui', 'Seulement deux à deux', 'Impossible à déterminer'], answer: 1, correction: '$\\vec{AB}(2;3)$, $\\vec{AC}(4;6)=2\\vec{AB}$ : colinéaires, donc $A$, $B$, $C$ alignés.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(1, 4), x0 = rand(0, 3), y0 = rand(0, 3);
        const c = -(a*x0 + b*y0);
        const xtest = x0 + b, ytest = y0 - a;
        return {
          statement: `La droite $(d)$ passe par $A(${x0};${y0})$ et a pour vecteur directeur $\\vec{u}(${b};${-a})$. Vérifier que $B(${xtest};${ytest})$ est sur $(d)$. Calculer $${a}x+${b}y$ en $B$.`,
          answer: a*xtest + b*ytest,
          tolerance: 0,
          unit: '',
          hint: `Calcule $${a}\\times${xtest}+${b}\\times${ytest}$.`,
          solution: [`$${a}\\times${xtest}+${b}\\times${ytest}=${a*xtest}+${b*ytest}=${a*xtest+b*ytest}$`]
        };
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
          correction: '$\\det(\\vec{u},\\vec{v}) = 3 \\times 10 - 5 \\times 6 = 30 - 30 = 0$. Le déterminant est nul, donc les vecteurs sont colinéaires.'
        },
        {
          statement: 'La droite $(d)$ a pour équation $2x - 3y + 6 = 0$. Un vecteur directeur de $(d)$ est :',
          type: 'multiple-choice',
          options: ['$(2\\,;\\,-3)$', '$(3\\,;\\,2)$', '$(-3\\,;\\,2)$', '$(2\\,;\\,3)$'],
          answer: 1,
          points: 2,
          correction: 'Pour $ax + by + c = 0$, le vecteur normal est $(a\\,;\\,b) = (2\\,;\\,-3)$ et le vecteur directeur est $(-b\\,;\\,a) = (3\\,;\\,2)$.'
        },
        {
          statement: 'Déterminer l\'ordonnée à l\'origine $p$ de la droite passant par $A(2\\,;\\,5)$ et $B(4\\,;\\,11)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Pente : $m = \\dfrac{11 - 5}{4 - 2} = \\dfrac{6}{2} = 3$. Équation : $y = 3x + p$. En $A$ : $5 = 3 \\times 2 + p$, soit $p = 5 - 6 = -1$.'
        },
        {
          statement: 'Les points $A(1\\,;\\,3)$, $B(3\\,;\\,7)$ et $C(5\\,;\\,12)$ sont-ils alignés ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{AB}$ et $\\vec{AC}$ sont colinéaires', 'Non, car le déterminant de $\\vec{AB}$ et $\\vec{AC}$ est non nul', 'Oui, car les trois points sont sur la droite $y = 2x + 1$', 'Non, car $A$ et $C$ ont des abscisses impaires'],
          answer: 1,
          points: 2,
          correction: '$\\vec{AB}(2\\,;\\,4)$ et $\\vec{AC}(4\\,;\\,9)$. $\\det = 2 \\times 9 - 4 \\times 4 = 18 - 16 = 2 \\neq 0$. Les vecteurs ne sont pas colinéaires, donc les points ne sont pas alignés.'
        },
        {
          statement: 'Écrire l\'équation de la droite passant par $M(1\\,;\\,2)$ et de vecteur directeur $\\vec{u}(2\\,;\\,-1)$ sous la forme $ax + by + c = 0$ avec $a > 0$. Donner la valeur de $c$.',
          type: 'numeric',
          answer: -5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le vecteur directeur est $(2\\,;\\,-1)$, donc un vecteur normal est $(1\\,;\\,2)$. Équation : $1(x-1) + 2(y-2) = 0$, soit $x + 2y - 5 = 0$. Donc $c = -5$.'
        }
      ]
    }
  },

    {
    id: '1re-probas-conditionnelles',
    level: 2,
    icon: '🎯',
    title: 'Probabilités conditionnelles',
    subtitle: 'Probabilité sachant, indépendance, arbre',
    keywords: ['Probabilité conditionnelle', 'Indépendance', 'Arbre', 'Bayes'],
    physics: false,
    cours: {
      intro: 'La probabilité conditionnelle $P(A|B)$ répond à : "parmi les cas où $B$ s\'est produit, dans quelle fraction $A$ se produit aussi ?" La formule $P(A|B) = P(A \\cap B)/P(B)$ est un recentrage : on restreint l\'univers à $B$. En médecine, $P(\\text{Test}+|\\text{Malade})$ (sensibilité du test) est TRÈS différent de $P(\\text{Malade}|\\text{Test}+)$ (probabilité d\'être malade si le test est positif). Confondre $P(A|B)$ et $P(B|A)$ est l\'"erreur du procureur" — source d\'injustices réelles dans les affaires judiciaires. L\'indépendance signifie $P(A|B) = P(A)$ : connaître $B$ n\'apporte aucune information sur $A$. Si $A$ et $B$ sont indépendants, $P(A \\cap B) = P(A) \\times P(B)$.',
      method: {
        title: 'Utiliser un arbre de probabilité',
        steps: [
          'Représenter les événements en branches, les probabilités sur chaque branche.',
          '$P(A\\cap B) = P(B)\\times P(A|B)$ (multiplication des branches).',
          'La somme des probabilités à chaque nœud est $1$.',
          'Additionner les branches favorables pour obtenir $P(A)$.'
        ]
      },
      formulas: [
        '$P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$ (si $P(B)>0$)',
        '$P(A\\cap B) = P(B)\\times P(A|B)$',
        '$A$ et $B$ indépendants $\\Leftrightarrow P(A\\cap B)=P(A)\\times P(B)$'
      ],
      piege: 'Ne pas confondre $P(A|B)$ et $P(B|A)$ : ce n\'est pas la même chose ! (Erreur classique dans les exercices médicaux.)'
    },
    quiz: [
      { q: 'Un test médical a une sensibilité de $95\\%$ : $P(\\text{Test}+|\\text{Malade}) = 0{,}95$. Un médecin conclut : "si le test est positif, le patient a $95\\%$ de chances d\'être malade." Cette conclusion est-elle correcte ?', options: ['Non : $P(\\text{Test}+|\\text{Malade})$ est la sensibilité, mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la prévalence de la maladie', 'Oui : $P(A|B) = P(B|A)$ par définition des probabilités conditionnelles', 'Oui : si le test est positif à $95\\%$ de fiabilité, la probabilité d\'être malade est bien $95\\%$', 'Non : la bonne valeur est $100\\% - 95\\% = 5\\%$'], answer: 0, correction: 'C\'est l\'"erreur du procureur". $P(\\text{Test}+|\\text{Malade}) = 0{,}95$ est la sensibilité. Mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la rareté de la maladie. Si la maladie touche $1\\%$ de la population et le test fait $3\\%$ de faux positifs, un test positif ne signifie que $24\\%$ de chances d\'être malade ! Les deux probabilités conditionnelles ne sont généralement pas égales.' },
      { q: 'Si $A$ et $B$ sont indépendants avec $P(A)=0{,}5$ et $P(B)=0{,}6$, alors $P(A\\cap B)=$ ?', options: ['$1{,}1$', '$0{,}3$', '$0{,}1$', '$0{,}11$'], answer: 1, correction: 'Indépendants : $P(A\\cap B)=0{,}5\\times0{,}6=0{,}3$.' },
      { q: 'Sur un arbre : $P(B)=0{,}3$, $P(A|B)=0{,}8$. Quelle est la probabilité d\'emprunter la branche $B$ puis $A$ ?', options: ['$0{,}24$', '$0{,}8$', '$1{,}1$', '$0{,}3$'], answer: 0, correction: '$P(A\\cap B)=P(B)\\times P(A|B)=0{,}3\\times0{,}8=0{,}24$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const pB = pick([0.2, 0.3, 0.4, 0.5]);
        const pAgivenB = pick([0.6, 0.7, 0.8]);
        const ans = parseFloat((pB * pAgivenB).toFixed(4));
        return {
          statement: `$P(B)=${pB}$ et $P(A|B)=${pAgivenB}$. Calculer $P(A\\cap B)$.`,
          answer: ans,
          tolerance: 0.005,
          unit: '',
          hint: '$P(A\\cap B)=P(B)\\times P(A|B)$',
          solution: [`$P(A\\cap B)=${pB}\\times${pAgivenB}=${ans}$`]
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
          correction: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)} = \\dfrac{0{,}2}{0{,}5} = 0{,}4$.'
        },
        {
          statement: 'Les événements $A$ et $B$ de la question précédente ($P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$) sont-ils indépendants ?',
          type: 'multiple-choice',
          options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $P(A \\cap B) \\neq P(A) \\times P(B)$', 'Oui, car $P(A) + P(B) = 1{,}1$', 'On ne peut pas conclure sans connaître $P(A \\cup B)$'],
          answer: 1,
          points: 2,
          correction: 'Si indépendants : $P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$. Or $P(A \\cap B) = 0{,}2 \\neq 0{,}3$. Les événements ne sont pas indépendants.'
        },
        {
          statement: 'Dans un lycée, $60\\%$ des élèves font de l\'anglais (événement $A$). Parmi ceux qui font de l\'anglais, $30\\%$ font aussi de l\'espagnol (événement $E$). Calculer $P(A \\cap E)$.',
          type: 'numeric',
          answer: 0.18,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(A \\cap E) = P(A) \\times P(E|A) = 0{,}6 \\times 0{,}3 = 0{,}18$.'
        },
        {
          statement: 'Un sac contient $3$ boules rouges et $7$ boules bleues. On tire une boule, on la remet, puis on tire une seconde boule. Calculer la probabilité d\'obtenir deux boules rouges.',
          type: 'numeric',
          answer: 0.09,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Avec remise, les tirages sont indépendants. $P(R_1 \\cap R_2) = P(R_1) \\times P(R_2) = \\dfrac{3}{10} \\times \\dfrac{3}{10} = \\dfrac{9}{100} = 0{,}09$.'
        },
        {
          statement: 'On sait que $P(B) = 0{,}4$, $P(A|B) = 0{,}7$ et $P(A|\\bar{B}) = 0{,}2$. Calculer $P(A)$ par la formule des probabilités totales.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B}) = 0{,}7 \\times 0{,}4 + 0{,}2 \\times 0{,}6 = 0{,}28 + 0{,}12 = 0{,}4$.'
        }
      ]
    }
  },

    {
    id: '1re-variables-aleatoires',
    level: 2,
    icon: '🎰',
    title: 'Variables aléatoires et loi binomiale',
    subtitle: 'Espérance, variance, loi B(n,p)',
    keywords: ['Variable aléatoire', 'Espérance', 'Loi binomiale', 'Variance'],
    physics: false,
    cours: {
      intro: 'Une variable aléatoire est une fonction qui transforme les issues d\'une expérience aléatoire en nombres : c\'est le pont entre le hasard et les mathématiques. La loi binomiale $\\mathcal{B}(n,p)$ répond à "combien de succès sur $n$ tentatives indépendantes ?" Ses deux conditions : les essais sont indépendants ET chacun a la même probabilité de succès $p$. L\'espérance $E(X) = np$ est le nombre moyen de succès attendu. Erreur classique sur la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$ : oublier de mettre les probabilités à une puissance. Si $p = 0{,}5$ et $k=2$ sur $n=4$, $P(X=2) = \\binom{4}{2} \\times (0{,}5)^2 \\times (0{,}5)^2 = 6/16 = 3/8$ — et non $6 \\times 0{,}5 = 3$ (résultat > 1 impossible pour une probabilité !).',
      method: {
        title: 'Calculer avec la loi binomiale',
        steps: [
          'Vérifier les conditions : expériences indépendantes, même probabilité $p$, $n$ répétitions.',
          '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.',
          'Espérance : $E(X)=np$.',
          'Variance : $V(X)=np(1-p)$, écart-type $\\sigma=\\sqrt{np(1-p)}$.'
        ]
      },
      formulas: [
        '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$',
        '$E(X) = np$',
        '$V(X) = np(1-p)$',
        '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'
      ],
      piege: 'La loi binomiale suppose des épreuves indépendantes. Si on tire sans remise, la loi binomiale ne s\'applique plus exactement (on utilise alors la loi hypergéométrique).'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{B}(4\\,;\\,0{,}5)$, un élève calcule $P(X=2) = \\binom{4}{2} \\times 0{,}5 = 6 \\times 0{,}5 = 3$. Quelle est son erreur ?', options: ['Il a oublié les puissances : $P(X=2) = \\binom{4}{2} \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\dfrac{1}{16} = \\dfrac{3}{8}$', 'Le coefficient binomial est faux : $\\binom{4}{2} \\neq 6$', 'Il aurait dû écrire $P(X=2) = (0{,}5)^2 = 0{,}25$ sans coefficient binomial', 'La loi binomiale ne s\'applique pas car $p = 0{,}5$'], answer: 0, correction: 'La formule est $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. L\'élève a oublié les puissances sur $p$ et $(1-p)$. Avec $n=4, k=2, p=0{,}5$ : $P(X=2) = 6 \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{6}{16} = \\frac{3}{8} \\approx 0{,}375$. Une probabilité ne peut jamais dépasser $1$ — un résultat de $3$ aurait dû alerter l\'élève !' },
      { q: 'Pour $X\\sim\\mathcal{B}(5;0{,}5)$, $P(X=2)=$ ?', options: ['$\\frac{5}{16}$', '$\\frac{5}{32}$', '$\\frac{10}{32}$', '$\\frac{1}{32}$'], answer: 2, correction: '$P(X=2)=\\binom{5}{2}(0{,}5)^2(0{,}5)^3=10\\times\\frac{1}{32}=\\frac{10}{32}$.' },
      { q: 'La variance de $\\mathcal{B}(n;p)$ est maximale quand :', options: ['$p=0$', '$p=1$', '$p=0{,}5$', '$p=n$'], answer: 2, correction: '$V(X)=np(1-p)$ est maximale quand $p(1-p)$ est maximal, soit $p=0{,}5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(4, 10), p = pick([0.2, 0.25, 0.5, 0.75]);
        return {
          statement: `Pour $X\\sim\\mathcal{B}(${n};${p})$, calculer l'espérance $E(X)$.`,
          answer: n * p,
          tolerance: 0.01,
          unit: '',
          hint: '$E(X)=n\\times p$',
          solution: [`$E(X)=${n}\\times${p}=${n*p}$`]
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
          correction: '$E(X) = np = 8 \\times 0{,}3 = 2{,}4$.'
        },
        {
          statement: 'Calculer la variance de $X \\sim \\mathcal{B}(8\\,;\\,0{,}3)$.',
          type: 'numeric',
          answer: 1.68,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$V(X) = np(1-p) = 8 \\times 0{,}3 \\times 0{,}7 = 1{,}68$.'
        },
        {
          statement: 'On lance un dé équilibré $5$ fois. Soit $X$ le nombre de $6$ obtenus. Quelle loi suit $X$ ?',
          type: 'multiple-choice',
          options: ['$\\mathcal{B}(5\\,;\\,1/6)$', '$\\mathcal{B}(6\\,;\\,1/5)$', '$\\mathcal{B}(5\\,;\\,1/2)$', '$\\mathcal{B}(6\\,;\\,5)$'],
          answer: 0,
          points: 2,
          correction: 'On répète $n = 5$ lancers indépendants avec probabilité de succès $p = 1/6$ à chaque lancer. Donc $X \\sim \\mathcal{B}(5\\,;\\,1/6)$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{B}(3\\,;\\,0{,}4)$, calculer $P(X = 2)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.288,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$P(X=2) = \\binom{3}{2} (0{,}4)^2 (0{,}6)^1 = 3 \\times 0{,}16 \\times 0{,}6 = 0{,}288$.'
        },
        {
          statement: 'Un coefficient binomial vérifie $\\binom{7}{3} =$ :',
          type: 'multiple-choice',
          options: ['$21$', '$35$', '$42$', '$210$'],
          answer: 1,
          points: 2,
          correction: '$\\binom{7}{3} = \\dfrac{7!}{3! \\times 4!} = \\dfrac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = \\dfrac{210}{6} = 35$.'
        }
      ]
    }
  },

    {
    id: '1re-information-chiffree',
    level: 2,
    icon: '💹',
    title: 'Information chiffrée',
    subtitle: 'Pourcentages, évolutions, indices',
    keywords: ['Pourcentage', 'Évolution', 'Taux', 'Indice', 'Coefficient multiplicateur'],
    physics: false,
    cours: {
      intro: 'L\'information chiffrée quantifie les évolutions avec un outil central : le coefficient multiplicateur (CM). Une hausse de $t\\%$ correspond à CM $= 1 + t/100$ ; une baisse de $t\\%$ à CM $= 1 - t/100$. L\'avantage du CM : les évolutions successives se composent par MULTIPLICATION des CM, pas par addition des taux (erreur classique). Pour retrouver un prix initial après une hausse, il faut diviser par le CM — et non soustraire le pourcentage du prix final. Exemple : $120$ € après $+25\\%$ vient d\'un prix initial de $120/1{,}25 = 96$ €, et non $120 - 30 = 90$ € (appliquer $25\\%$ au prix final est faux car la base de référence a changé).',
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
      piege: 'Une hausse de $20\\%$ puis une baisse de $20\\%$ ne revient PAS au point de départ : $1{,}2 \\times 0{,}8 = 0{,}96$ (baisse de $4\\%$).'
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
