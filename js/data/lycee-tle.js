/* =========================================================
   Spark Learning – data/lycee-tle.js
   Modules Lycée Terminale
   ========================================================= */

window.MODULES.push(

  {
    id: 'exp-log',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Fonctions Exponentielle et Logarithme',
    subtitle: 'pH, demi-vie radioactive, décroissance',
    keywords: ['Logarithme', 'pH', 'Exponentielle', 'Demi-vie'],
    physics: 'pH = −log[H₃O⁺], décroissance radioactive, décibels',

    cours: {
      intro: 'L\'exponentielle $e^x$ est l\'unique fonction égale à sa propre dérivée : $(e^x)\' = e^x$. Cette propriété en fait l\'outil naturel pour tout phénomène dont la vitesse de variation est proportionnelle à la grandeur elle-même : croissance bactérienne, décroissance radioactive, charge de condensateur. Le logarithme naturel $\\ln$ est l\'inverse de $e^x$ : $\\ln(e^x) = x$ et $e^{\\ln x} = x$. Le logarithme DÉCIMAL $\\log = \\log_{10}$ est différent : $\\log(x) = \\ln(x)/\\ln(10) \\approx \\ln(x)/2{,}303$ — confondre $\\log$ et $\\ln$ est l\'erreur classique. En chimie, $pH = -\\log_{10}[H_3O^+]$ : une solution de $pH = 4$ a $[H_3O^+] = 10^{-4}$ mol/L. Une unité de pH correspond à un facteur 10 sur la concentration en ions.',
      method: {
        title: 'Propriétés essentielles',
        steps: [
          '**Logarithme décimal :** $\\log(a \\times b) = \\log a + \\log b$ ; $\\log(10^n) = n$ ; $\\log(a/b) = \\log a - \\log b$. Application directe : $pH = -\\log[H_3O^+]$.',
          '**Exponentielle naturelle :** $(e^x)\' = e^x$ (unique fonction égale à sa dérivée). Propriété : $e^{a+b} = e^a \\cdot e^b$.',
          '**Demi-vie :** après $k$ demi-vies, la masse restante est $m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$. En continu : $m(t) = m_0 e^{-\\lambda t}$ où $\\lambda = \\ln 2 / t_{1/2}$.'
        ]
      },
      formulas: [
        '$pH = -\\log[H_3O^+]$',
        '$[H_3O^+] = 10^{-pH}$',
        '$m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{t/t_{1/2}} = m_0 e^{-\\lambda t}$',
        '$\\log(10^n) = n$ ; $\\ln(e^n) = n$'
      ],
      piege: 'Ne confonds pas $\\log$ (logarithme base 10) et $\\ln$ (logarithme naturel, base $e$). En chimie, le pH utilise le $\\log$ base 10. Dans les équations différentielles de la radioactivité, on utilise $\\ln$. $\\log(x) = \\ln(x) / \\ln(10) \\approx \\ln(x) / 2{,}303$.'
    },

    quiz: [
      {
        q: 'Un élève calcule $\\ln(10^{-4})$ et trouve $-4$. Est-il correct ?',
        options: [
          'Non : $\\ln(10^{-4}) = -4\\ln(10) \\approx -9{,}21$. C\'est $\\log_{10}(10^{-4}) = -4$, pas le logarithme naturel',
          'Oui : $\\ln(10^n) = n$ quelle que soit la base du logarithme',
          'Oui : $\\ln(10) = 1$ donc $\\ln(10^{-4}) = -4$',
          'Non : $\\ln(10^{-4}) = -4 \\times 10 = -40$ car $\\ln(10) = 10$'
        ],
        answer: 0,
        correction: '$\\ln(10^{-4}) = -4\\ln(10) \\approx -4 \\times 2{,}303 \\approx -9{,}21$. La formule $\\log_{10}(10^n) = n$ est vraie pour le logarithme BASE 10, pas pour le logarithme naturel $\\ln$. En chimie, le pH utilise $\\log_{10}$ : $pH = -\\log_{10}[H_3O^+] = -(-4) = 4$. Toujours vérifier quelle base est utilisée !'
      },
      {
        q: 'La constante de décroissance radioactive est liée à la demi-vie par :',
        options: [
          '$\\lambda = t_{1/2}$',
          '$\\lambda = \\ln 2 \\cdot t_{1/2}$',
          '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$',
          '$\\lambda = \\dfrac{t_{1/2}}{\\ln 2}$'
        ],
        answer: 2,
        correction: 'À $t = t_{1/2}$, $m = m_0/2$. Donc $m_0/2 = m_0 e^{-\\lambda t_{1/2}} \\Rightarrow 1/2 = e^{-\\lambda t_{1/2}} \\Rightarrow \\ln(1/2) = -\\lambda t_{1/2} \\Rightarrow \\lambda = \\ln 2 / t_{1/2}$.'
      },
      {
        q: 'Le pH d\'une solution de jus de citron est $2{,}5$. Sa concentration en ions $H_3O^+$ est :',
        options: [
          '$3{,}16 \\times 10^{-3}$ mol/L',
          '$2{,}5 \\times 10^{-1}$ mol/L',
          '$10^{2{,}5}$ mol/L',
          '$2{,}5$ mol/L'
        ],
        answer: 0,
        correction: '$[H_3O^+] = 10^{-pH} = 10^{-2{,}5} = 3{,}16 \\times 10^{-3}$ mol/L.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(2, 7);
        // [H3O+] = 10^(-n), pH = n
        return {
          statement: `Une solution a une concentration en ions oxonium $[H_3O^+] = 10^{-${n}}$ mol/L. Calcule son pH.`,
          answer: n,
          tolerance: 0.001,
          unit: '',
          hint: `La formule du pH est $pH = -\\log[H_3O^+]$. Ici $[H_3O^+] = 10^{-${n}}$. Rappel : $\\log(10^{-${n}}) = -${n}$, donc $pH = -(-${n})$.`,
          solution: [
            `Formule : $pH = -\\log[H_3O^+] = -\\log(10^{-${n}})$`,
            `Or $\\log(10^{-${n}}) = -${n}$`,
            `Donc $pH = -(-${n}) = ${n}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Le carbone 14 ($^{14}$C) est un isotope radioactif utilisé en archéologie pour dater des matériaux organiques. Sa demi-vie est $t_{1/2} = 5730$ ans. Un objet ancien contient initialement $m_0$ de carbone 14. On cherche à savoir quelle fraction de la masse initiale reste après $k$ demi-vies.',
      schema: null,
      tasks: [
        'Exprimer la masse restante $m$ après $k$ demi-vies à partir de la formule de décroissance radioactive.',
        'Calculer la fraction $m / m_0$ après $k = 3$ demi-vies (soit $3 \\times 5730 = 17190$ ans).',
        'Si initialement $m_0 = 80$ mg, quelle masse reste après 3 demi-vies ?'
      ],
      solutions: [
        '$m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$. Après chaque demi-vie, la moitié se désintègre.',
        '$\\dfrac{m}{m_0} = \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8} = 0{,}125 = 12{,}5\\%$.',
        '$m = 80 \\times \\dfrac{1}{8} = 10$ mg. Après 17 190 ans, il ne reste que 10 mg sur 80 mg initiaux.'
      ],
      finalAnswer: '$m = 10$ mg (12,5 % de la masse initiale restante après 3 demi-vies)'
    },

    evaluation: {
      title: 'Évaluation — Exponentielle et Logarithme',
      duration: '35 min',
      questions: [
        {
          statement: 'Une solution a un pH de $3{,}5$. Calculer la concentration $[H_3O^+]$ en mol/L. Donner la réponse en notation scientifique (arrondir le coefficient à $0{,}01$). Répondre la valeur en puissance de $10$ : $[H_3O^+] \\approx a \\times 10^{-4}$. Que vaut $a$ ?',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$[H_3O^+] = 10^{-pH} = 10^{-3{,}5} = 10^{-3} \\times 10^{-0{,}5} \\approx 10^{-3} \\times 0{,}3162 = 3{,}162 \\times 10^{-4}$ mol/L. Donc $a \\approx 3{,}16$.'
        },
        {
          statement: 'La demi-vie du carbone 14 est $t_{1/2} = 5730$ ans. Quelle est la constante de décroissance $\\lambda$ (en $\\mathrm{an}^{-1}$) ? Donner $\\lambda \\times 10^4$ arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 1.21,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}6931}{5730} \\approx 1{,}21 \\times 10^{-4}$ an$^{-1}$. Donc $\\lambda \\times 10^4 \\approx 1{,}21$.'
        },
        {
          statement: 'Quelle est la dérivée de $f(x) = e^{3x}$ ?',
          type: 'multiple-choice',
          options: ['$e^{3x}$', '$3e^{3x}$', '$3xe^{3x}$', '$e^{3x+1}$'],
          answer: 1,
          points: 2,
          correction: '$(e^{u})\' = u\' e^{u}$ avec $u = 3x$, $u\' = 3$. Donc $f\'(x) = 3e^{3x}$.'
        },
        {
          statement: 'Simplifier $\\log_{10}(10^{-2} \\times 10^{5})$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\log(10^{-2} \\times 10^{5}) = \\log(10^{-2+5}) = \\log(10^3) = 3$.'
        },
        {
          statement: 'Un isotope a une masse initiale de $m_0 = 160$ mg et une demi-vie de $8$ jours. Quelle masse reste après $24$ jours ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: 'mg',
          points: 2,
          correction: '$24$ jours $= 3$ demi-vies. $m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^3 = 160 \\times \\dfrac{1}{8} = 20$ mg.'
        }
      ]
    }
  },

    {
    id: 'integration',
    level: 2, subject: 'maths',
    icon: '∫',
    title: 'Intégration et Primitives',
    subtitle: 'Intégrale définie, aire sous la courbe, primitives',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Conditions initiales'],
    physics: 'Calcul du travail d\'une force, équations horaires',

    cours: {
      intro: 'L\'intégrale est à la fois la "somme infinie de tranches infiniment minces" et l\'opération inverse de la dérivation. $\\int_a^b f(x)\\,dx$ représente l\'aire SIGNÉE entre la courbe et l\'axe des abscisses sur $[a;b]$ : positive si $f > 0$, négative si $f < 0$. En physique : $\\int_{t_1}^{t_2} v(t)\\,dt$ est la distance parcourue, $\\int_0^d F(x)\\,dx$ est le travail d\'une force. Pour trouver une primitive $F$ de $f$, on "remonte" les règles de dérivation : la primitive de $x^n$ est $x^{n+1}/(n+1)$ — on DIVISE par $n+1$, on ne multiplie pas. L\'erreur classique : appliquer la règle de la dérivée (multiplier par l\'exposant) au lieu de la règle de la primitive (diviser par l\'exposant+1).',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Trouver la primitive $F(x)$ telle que $F\'(x) = f(x)$. Règle clé : la primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$ (pour $n \\neq -1$).',
          'L\'intégrale définie : $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (le crochet).',
          'En physique, utiliser les conditions initiales pour fixer la constante d\'intégration $C$. Si $v(0) = v_0$, on en déduit $C$.'
        ]
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (pour $n \\neq -1$)',
        '$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
        '$\\int e^x\\,dx = e^x + C$',
        '$\\int \\cos x\\,dx = \\sin x + C$'
      ],
      piege: 'On divise par $(n+1)$, on ne multiplie pas ! La primitive de $3x^2$ est $\\dfrac{3x^3}{3} = x^3$, PAS $6x^3$. Et n\'oublie jamais la constante $+C$ pour une primitive indéfinie !'
    },

    quiz: [
      {
        q: 'Pour trouver la primitive de $f(x) = 5x^4$, un élève écrit : "la primitive est $5 \\times 4 \\times x^3 = 20x^3 + C$." Quelle est son erreur ?',
        options: [
          'Il a DÉRIVÉ au lieu d\'intégrer. La primitive de $5x^4$ est $\\dfrac{5x^5}{5} = x^5 + C$',
          'Il a raison, mais il faut écrire $+C$ à la fin',
          'La primitive est $\\dfrac{5}{4}x^5 + C$ car on divise par l\'exposant',
          'La primitive de $5x^4$ est $20x^5 + C$ car on multiplie par $x$'
        ],
        answer: 0,
        correction: 'L\'élève a appliqué la règle de la DÉRIVÉE (multiplier par l\'exposant et baisser d\'un degré) au lieu de la règle de la PRIMITIVE (augmenter d\'un degré et diviser par le nouvel exposant). La primitive de $5x^4$ est $\\frac{5x^{4+1}}{4+1} = \\frac{5x^5}{5} = x^5 + C$. Vérification : $(x^5)\' = 5x^4$ ✓'
      },
      {
        q: 'Calculer $\\int_1^3 2x\\,dx$.',
        options: ['$4$', '$8$', '$6$', '$16$'],
        answer: 1,
        correction: '$\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.'
      },
      {
        q: 'En physique, si $v(t) = at$ (accélération constante) et $x(0) = 0$, alors $x(t) = ?$',
        options: ['$x(t) = a$', '$x(t) = \\dfrac{a}{2}$', '$x(t) = at^2$', '$x(t) = \\dfrac{1}{2}at^2$'],
        answer: 3,
        correction: '$x(t) = \\int v(t)\\,dt = \\int at\\,dt = \\dfrac{at^2}{2} + C$. Avec la condition $x(0) = 0$, on trouve $C = 0$. Donc $x(t) = \\dfrac{1}{2}at^2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6);
        const n = rand(1, 3);
        // primitive of ax^n is a/(n+1) * x^(n+1)
        const coeff = parseFloat((a / (n + 1)).toFixed(4));
        return {
          statement: `Soit $f(x) = ${a}x^{${n}}$. Le coefficient de $x^{${n+1}}$ dans la primitive $F(x)$ de $f$ est $\\dfrac{${a}}{${n+1}}$. Quelle est la valeur décimale de ce coefficient ? (arrondir à 2 décimales)`,
          answer: parseFloat(coeff.toFixed(2)),
          tolerance: 0.01,
          unit: '',
          hint: `La primitive de $ax^n$ est $\\dfrac{a}{n+1} x^{n+1} + C$. Ici $a = ${a}$ et $n = ${n}$. Calcule $\\dfrac{${a}}{${n+1}}$.`,
          solution: [
            `Règle de la primitive : $\\int ax^n\\,dx = \\dfrac{a}{n+1} x^{n+1} + C$`,
            `Ici $a = ${a}$, $n = ${n}$, donc $n+1 = ${n+1}$`,
            `Coefficient : $\\dfrac{${a}}{${n+1}} = ${parseFloat(coeff.toFixed(2))}$`
          ]
        };
      }
    },

    probleme: {
      context: 'En thermodynamique, le travail élémentaire d\'une force de rappel élastique est $dW = F\\,dx$ avec $F = kx$ (loi de Hooke). On veut calculer le travail total $W$ pour étirer un ressort de $x = 0$ à $x = d$, avec $k = 200$ N/m et $d = 0{,}15$ m.',
      schema: null,
      tasks: [
        'Écrire l\'intégrale à calculer : $W = \\int_0^d kx\\,dx$.',
        'Calculer la primitive de $kx$ par rapport à $x$.',
        'Calculer numériquement $W$ en substituant $k = 200$ N/m et $d = 0{,}15$ m.'
      ],
      solutions: [
        '$W = \\int_0^d kx\\,dx = k \\int_0^d x\\,dx$.',
        'Primitive de $x$ : $\\dfrac{x^2}{2}$. Donc $W = k \\left[\\dfrac{x^2}{2}\\right]_0^d = k \\dfrac{d^2}{2}$.',
        '$W = 200 \\times \\dfrac{(0{,}15)^2}{2} = 200 \\times \\dfrac{0{,}0225}{2} = 200 \\times 0{,}01125 = 2{,}25$ J.'
      ],
      finalAnswer: '$W = 2{,}25$ J'
    },

    evaluation: {
      title: 'Évaluation — Intégration et primitives',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\int_0^2 3x^2\\,dx$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Primitive de $3x^2$ : $x^3$. $\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$.'
        },
        {
          statement: 'Quelle est la primitive de $f(x) = 4x^3 + 2x$ ?',
          type: 'multiple-choice',
          options: ['$12x^2 + 2 + C$', '$x^4 + x^2 + C$', '$4x^4 + 2x^2 + C$', '$x^4 + x + C$'],
          answer: 1,
          points: 2,
          correction: 'Primitive de $4x^3$ : $\\dfrac{4x^4}{4} = x^4$. Primitive de $2x$ : $\\dfrac{2x^2}{2} = x^2$. Donc $F(x) = x^4 + x^2 + C$.'
        },
        {
          statement: 'Calculer $\\int_1^4 \\dfrac{1}{\\sqrt{x}}\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$. Primitive : $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$. $[2\\sqrt{x}]_1^4 = 2 \\times 2 - 2 \\times 1 = 4 - 2 = 2$.'
        },
        {
          statement: 'Si $v(t) = 6t$ (accélération constante $a = 6$ m/s²) et $x(0) = 5$ m, alors $x(t) = ?$',
          type: 'multiple-choice',
          options: ['$6t + 5$', '$3t^2$', '$3t^2 + 5$', '$6t^2 + 5$'],
          answer: 2,
          points: 2,
          correction: '$x(t) = \\int 6t\\,dt = 3t^2 + C$. Condition initiale : $x(0) = 3 \\times 0 + C = 5$, donc $C = 5$. $x(t) = 3t^2 + 5$.'
        },
        {
          statement: 'Calculer $\\int_0^{\\pi} \\sin x\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Primitive de $\\sin x$ : $-\\cos x$. $[-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) + 1 = 1 + 1 = 2$.'
        }
      ]
    }
  },

    {
    id: 'eq-diff-1',
    level: 2, subject: 'maths',
    icon: '🌊',
    title: 'Équations Différentielles du 1er Ordre',
    subtitle: 'Constante de temps τ, régime transitoire',
    keywords: ['Équation différentielle', 'Constante de temps τ', 'Régime transitoire', 'Circuit RC'],
    physics: 'Charge condensateur RC, chute libre avec frottements',

    cours: {
      intro: 'Une équation différentielle relie une grandeur à sa propre dérivée. Dès que la vitesse de variation d\'une grandeur est proportionnelle à son écart à une valeur cible, on obtient $\\tau \\frac{dy}{dt} + y = y_\\infty$ dont la solution est toujours exponentielle : $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$. La constante de temps $\\tau$ (tau) est l\'empreinte temporelle du système : à $t = \\tau$, la grandeur a parcouru $63{,}2\\%$ du chemin vers $y_\\infty$ — ce n\'est PAS le temps de chargement total. En pratique, on considère le régime permanent atteint à $5\\tau$ (moins de $1\\%$ d\'écart). Dans un circuit RC : $\\tau = RC$. Plus $R$ ou $C$ est grand, plus le transitoire est lent.',
      method: {
        title: 'Méthode de résolution',
        steps: [
          'Écrire l\'équation sous la forme canonique : $\\tau \\dfrac{dy}{dt} + y = y_{\\infty}$ où $\\tau$ est la constante de temps et $y_{\\infty}$ la valeur en régime permanent.',
          'La solution générale est : $y(t) = y_{\\infty} + (y_0 - y_{\\infty}) e^{-t/\\tau}$ où $y_0 = y(0)$ est la condition initiale.',
          'Identifier les paramètres physiques : pour un circuit RC, $\\tau = RC$. Pour le circuit RC en charge depuis $U_0 = 0$ : $U_C(t) = E(1 - e^{-t/\\tau})$.'
        ]
      },
      formulas: [
        '$\\tau \\dfrac{dU_C}{dt} + U_C = E$ (circuit RC en charge)',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ (solution en charge)',
        '$\\tau = R \\times C$ (circuit RC)',
        'À $t = \\tau$ : $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 E$'
      ],
      piege: 'Le régime permanent est atteint théoriquement à l\'infini. En pratique, on considère qu\'après $5\\tau$, le transitoire est terminé ($U_C \\approx 0{,}993E$). Ne pas confondre $\\tau$ (constante de temps en secondes) et la "durée du transitoire" ($5\\tau$).'
    },

    quiz: [
      {
        q: 'Dans un circuit RC série avec $R = 10$ kΩ et $C = 100$ μF, la constante de temps est :',
        options: ['$\\tau = 1$ ms', '$\\tau = 0{,}1$ s', '$\\tau = 1$ s', '$\\tau = 10$ s'],
        answer: 2,
        correction: '$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 10^4 \\times 10^{-4} = 1$ s.'
      },
      {
        q: 'Lors de la charge d\'un condensateur via $RC$, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
        options: ['$0{,}5 E$', '$0{,}632 E$', '$0{,}865 E$', '$E$'],
        answer: 1,
        correction: '$U_C(\\tau) = E(1 - e^{-1}) = E(1 - 0{,}368) = 0{,}632 E$. La valeur $63{,}2\\%$ est à retenir pour identifier $\\tau$ expérimentalement.'
      },
      {
        q: 'Un élève dit : "La constante de temps $\\tau = RC$ est le temps nécessaire pour charger complètement le condensateur." Est-il correct ?',
        options: [
          'Non : $\\tau$ est le temps pour atteindre $63{,}2\\%$ de la tension finale. Le chargement "complet" est à $5\\tau$ (pratiquement) ou à l\'infini (théoriquement)',
          'Oui : à $t = \\tau$, $U_C = E$ exactement',
          'Oui : après $\\tau$ secondes, le condensateur est chargé à $100\\%$',
          'Non : $\\tau$ est le temps pour atteindre $50\\%$ de $E$ (demi-vie du circuit)'
        ],
        answer: 0,
        correction: 'À $t = \\tau$, $U_C(\\tau) = E(1-e^{-1}) \\approx 0{,}632\\,E$ soit $63{,}2\\%$ seulement. La charge n\'atteint théoriquement $E$ qu\'à $t \\to +\\infty$. Par convention, on dit que le régime permanent est atteint à $5\\tau$ car $e^{-5} \\approx 0{,}007$, soit moins de $1\\%$ d\'écart. L\'option D décrirait la demi-vie radioactive ($50\\%$), pas un circuit RC.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const R_kohm = rand(1, 10);
        const C_microF = rand(1, 10);
        const tau_ms = R_kohm * C_microF; // τ = R*C = (R kΩ)*(C μF) = ms
        return {
          statement: `Un circuit RC est formé d'une résistance $R = ${R_kohm}$ kΩ et d'un condensateur $C = ${C_microF}$ μF. Calcule la constante de temps $\\tau$ en millisecondes.`,
          answer: tau_ms,
          tolerance: 0.1,
          unit: 'ms',
          hint: `Formule : $\\tau = R \\times C$. Convertis les unités : $${R_kohm}$ kΩ $= ${R_kohm} \\times 10^3$ Ω et $${C_microF}$ μF $= ${C_microF} \\times 10^{-6}$ F. Le produit donne des secondes, puis convertis en ms.`,
          solution: [
            `$\\tau = R \\times C = ${R_kohm} \\times 10^3 \\times ${C_microF} \\times 10^{-6}$`,
            `$\\tau = ${R_kohm} \\times ${C_microF} \\times 10^{3-6} = ${tau_ms} \\times 10^{-3}$ s`,
            `$\\tau = ${tau_ms}$ ms`
          ]
        };
      }
    },

    probleme: {
      context: 'Un condensateur de capacité $C = 470$ μF est chargé à travers une résistance $R = 2{,}2$ kΩ par un générateur de f.e.m. $E = 9$ V. Le condensateur est initialement déchargé ($U_C(0) = 0$).',
      schema: null,
      tasks: [
        'Calculer la constante de temps $\\tau = RC$.',
        'Exprimer la tension $U_C(t)$ au cours du temps.',
        'Quelle est la tension aux bornes du condensateur à $t = \\tau$ ? Arrondir à 3 chiffres significatifs.'
      ],
      solutions: [
        '$\\tau = RC = 2{,}2 \\times 10^3 \\times 470 \\times 10^{-6} = 2200 \\times 470 \\times 10^{-6} = 1{,}034$ s $\\approx 1{,}03$ s.',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right) = 9\\left(1 - e^{-t/1{,}03}\\right)$ V.',
        '$U_C(\\tau) = 9 \\times (1 - e^{-1}) = 9 \\times 0{,}6321 = 5{,}69$ V $\\approx 5{,}69$ V.'
      ],
      finalAnswer: '$U_C(\\tau) \\approx 5{,}69$ V (soit $63{,}2\\%$ de $E = 9$ V)'
    },

    evaluation: {
      title: 'Évaluation — Équations différentielles du 1er ordre',
      duration: '35 min',
      questions: [
        {
          statement: 'Un circuit RC a $R = 4{,}7$ kΩ et $C = 220$ μF. Calculer $\\tau$ en secondes. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 1.03,
          tolerance: 0.02,
          unit: 's',
          points: 2,
          correction: '$\\tau = RC = 4{,}7 \\times 10^3 \\times 220 \\times 10^{-6} = 4700 \\times 0{,}000220 = 1{,}034$ s $\\approx 1{,}03$ s.'
        },
        {
          statement: 'Dans un circuit RC en charge, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
          type: 'multiple-choice',
          options: ['$50\\%$ de $E$', '$63{,}2\\%$ de $E$', '$86{,}5\\%$ de $E$', '$99{,}3\\%$ de $E$'],
          answer: 1,
          points: 2,
          correction: '$U_C(\\tau) = E(1 - e^{-1}) = E \\times (1 - 0{,}368) = 0{,}632 E$, soit $63{,}2\\%$ de $E$.'
        },
        {
          statement: 'Un condensateur est chargé par $E = 12$ V avec $\\tau = 2$ s. Calculer $U_C(2)$ en V. Arrondir à $0{,}1$.',
          type: 'numeric',
          answer: 7.6,
          tolerance: 0.1,
          unit: 'V',
          points: 2,
          correction: '$U_C(\\tau) = E(1 - e^{-1}) = 12 \\times 0{,}6321 = 7{,}6$ V.'
        },
        {
          statement: 'On considère le régime permanent comme atteint après :',
          type: 'multiple-choice',
          options: ['$\\tau$', '$2\\tau$', '$3\\tau$', '$5\\tau$'],
          answer: 3,
          points: 2,
          correction: 'Après $5\\tau$, $U_C = E(1 - e^{-5}) \\approx E \\times 0{,}993$, soit moins de $1\\%$ d\'écart avec $E$. Par convention, le régime permanent est atteint à $5\\tau$.'
        },
        {
          statement: 'La solution de $\\tau \\dfrac{dy}{dt} + y = 5$ avec $y(0) = 0$ et $\\tau = 3$ est $y(t) = 5(1 - e^{-t/3})$. Calculer $y(3)$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$y(3) = 5(1 - e^{-3/3}) = 5(1 - e^{-1}) = 5 \\times 0{,}6321 = 3{,}16$.'
        }
      ]
    }
  },

    {
    id: 'tle-limites-continuite',
    level: 2, subject: 'maths',
    icon: '♾️',
    title: 'Limites de fonctions et continuité',
    subtitle: 'Limites en l\'infini, en un point, continuité',
    keywords: ['Limite', 'Continuité', 'Infini', 'Indétermination'],
    physics: true,
    cours: {
      intro: 'La limite de $f$ en $a$ décrit le comportement de $f$ quand $x$ se RAPPROCHE de $a$ — sans que $f(a)$ soit nécessairement définie. Exemple : $f(x) = \\frac{x^2-4}{x-2}$ n\'est pas définie en $x=2$, mais $\\lim_{x\\to2}f(x) = 4$. Les formes indéterminées ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) ne sont pas des valeurs — ce sont des signaux d\'alarme : la limite peut être n\'importe quel réel ou $\\pm\\infty$ selon le contexte. L\'erreur classique : conclure "$0/0 = 0$" ou "$0/0$ : pas de limite". Il faut factoriser pour lever l\'indétermination. En $\\pm\\infty$, le terme de plus haut degré domine : $3x^2 - 100x + 500 \\sim 3x^2$ quand $x \\to +\\infty$. La continuité de $f$ en $a$ exige : $f(a)$ existe, $\\lim_{x\\to a} f(x)$ existe, et elles sont égales.',
      method: {
        title: 'Calculer une limite',
        steps: [
          'Substituer directement : si le résultat est défini, c\'est la limite.',
          'Si forme indéterminée ($0/0$, $\\infty/\\infty$, $\\infty-\\infty$) : factoriser, simplifier, ou utiliser les croissances comparées.',
          'Limites en $\\pm\\infty$ d\'un polynôme : terme de plus haut degré dominant.',
          '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x\\to a}f(x)=f(a)$.'
        ]
      },
      formulas: [
        '$\\lim_{x\\to+\\infty}x^n=+\\infty$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{1}{x^n}=0$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{a_n x^n+\\cdots}{b_m x^m+\\cdots}=\\lim_{x\\to+\\infty}\\frac{a_n x^n}{b_m x^m}$'
      ],
      piege: '$\\infty - \\infty$ est une forme indéterminée : on ne peut pas conclure sans calcul. Factoriser pour lever l\'indétermination.'
    },
    quiz: [
      { q: 'Un élève évalue $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ et écrit : "en $x=2$, on obtient $\\dfrac{0}{0}$, donc la limite est $0$." Quelle est son erreur ?', options: ['$\\dfrac{0}{0}$ est une forme INDÉTERMINÉE, pas $0$. En factorisant : $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to 4$', 'L\'élève a raison : $\\dfrac{0}{0}=0$ par convention', 'La limite n\'existe pas car $f$ n\'est pas définie en $x=2$', 'La limite est $+\\infty$ car on divise par $0$'], answer: 0, correction: '$\\dfrac{0}{0}$ est une forme indéterminée : le résultat peut être $0$, n\'importe quel nombre réel, ou $\\pm\\infty$ selon les fonctions. Ici $\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\neq2$, donc la limite est $4$. Ne jamais conclure directement d\'une forme indéterminée sans simplifier !' },
      { q: '$\\lim_{x\\to 2}\\frac{x^2-4}{x-2}=$ ?', options: ['$0$', '$\\infty$', '$4$', '$2$'], answer: 2, correction: '$\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2 \\to 4$ en $x=2$.' },
      { q: '$f(x)=\\frac{2x^3-x}{x^3+1}$, $\\lim_{x\\to+\\infty}f(x)=$ ?', options: ['$2$', '$0$', '$+\\infty$', '$-1$'], answer: 0, correction: 'Termes dominants : $\\frac{2x^3}{x^3}=2$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), b = rand(1, 4);
        return {
          statement: `Calculer $\\lim_{x\\to+\\infty}\\dfrac{${a}x+${b}}{x+1}$.`,
          answer: a,
          tolerance: 0,
          unit: '',
          hint: 'Divise numérateur et dénominateur par $x$.',
          solution: [`$\\frac{${a}x+${b}}{x+1}=\\frac{${a}+${b}/x}{1+1/x}\\xrightarrow[x\\to+\\infty]{}\\frac{${a}+0}{1+0}=${a}$`]
        };
      }
    },
    probleme: {
      context: 'La concentration d\'un médicament dans le sang (en mg/L) est modélisée par $C(t)=\\frac{10t}{t^2+1}$ où $t\\ge 0$ est en heures.',
      tasks: [
        'Calculer la limite de $C(t)$ quand $t\\to+\\infty$.',
        'Interpréter ce résultat.',
        'Calculer $C(1)$ et $C(3)$ pour étudier le comportement.'
      ],
      solutions: [
        '$\\lim_{t\\to+\\infty}C(t)=\\lim_{t\\to+\\infty}\\frac{10t}{t^2}=\\lim\\frac{10}{t}=0$.',
        'La concentration tend vers $0$ : le médicament est éliminé à long terme.',
        '$C(1)=\\frac{10}{2}=5$ mg/L ; $C(3)=\\frac{30}{10}=3$ mg/L.'
      ],
      finalAnswer: '$C(t)\\to 0$ : le médicament est éliminé. Pic à $t=1$ h : $5$ mg/L.'
    },

    evaluation: {
      title: 'Évaluation — Limites et continuité',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{3x^2 - x + 1}{2x^2 + 5}$.',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Termes dominants : $\\dfrac{3x^2}{2x^2} = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          statement: '$\\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$ vaut :',
          type: 'multiple-choice',
          options: ['$0$', '$6$', '$+\\infty$', 'La limite n\'existe pas'],
          answer: 1,
          points: 2,
          correction: '$\\dfrac{x^2 - 9}{x - 3} = \\dfrac{(x-3)(x+3)}{x-3} = x + 3$ pour $x \\neq 3$. Donc $\\lim_{x \\to 3} = 3 + 3 = 6$.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{5x^3 + 2x}{x^4 - 1}$.',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Termes dominants : $\\dfrac{5x^3}{x^4} = \\dfrac{5}{x} \\to 0$ quand $x \\to +\\infty$.'
        },
        {
          statement: 'La forme $\\dfrac{0}{0}$ est :',
          type: 'multiple-choice',
          options: ['Égale à $0$', 'Égale à $1$', 'Une forme indéterminée qu\'il faut lever', 'Égale à $+\\infty$'],
          answer: 2,
          points: 2,
          correction: '$\\dfrac{0}{0}$ est une forme indéterminée : le résultat dépend des fonctions en jeu. Par exemple, $\\dfrac{x^2}{x} \\to 0$, $\\dfrac{x}{x} \\to 1$, $\\dfrac{x}{x^2} \\to +\\infty$ quand $x \\to 0^+$. Il faut factoriser ou simplifier pour lever l\'indétermination.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x^2 - x}$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\dfrac{x^2 - 1}{x^2 - x} = \\dfrac{(x-1)(x+1)}{x(x-1)} = \\dfrac{x+1}{x}$ pour $x \\neq 1$. Donc $\\lim_{x \\to 1} = \\dfrac{2}{1} = 2$.'
        }
      ]
    }
  },

    {
    id: 'tle-derivation-complements',
    level: 2, subject: 'maths',
    icon: '🔬',
    title: 'Compléments sur la dérivation',
    subtitle: 'Dérivée de composées, produit, quotient',
    keywords: ['Dérivée', 'Produit', 'Quotient', 'Composée', 'Fonction'],
    physics: true,
    cours: {
      intro: 'La règle du produit $(uv)\' = u\'v + uv\'$ s\'explique géométriquement : si une longueur $u$ et une largeur $v$ varient, l\'aire $uv$ varie de $u\\ \\delta v + v\\ \\delta u$ (le terme $\\delta u\\ \\delta v$ est négligeable). La règle du quotient $(u/v)\' = (u\'v - uv\')/v^2$ s\'en déduit algébriquement. La règle de la chaîne $(f\\circ g)\' = g\' \\times f\'(g)$ dit que "les taux de variation se multiplient". Deux pièges fréquents : croire que $(u/v)\' = u\'/v\'$ (faux — on ne divise pas les dérivées) et inverser l\'ordre dans le numérateur du quotient ($u\'v - uv\'$, et non $uv\' - u\'v$). Un contre-exemple simple : $(x/(x+1))\' = 1/(x+1)^2$ et non $1/1 = 1$.',
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          'Produit : $(uv)\'=u\'v+uv\'$.',
          'Quotient : $\\left(\\frac{u}{v}\\right)\'=\\frac{u\'v-uv\'}{v^2}$.',
          'Composée : $(f\\circ g)\'(x)=g\'(x)\\cdot f\'(g(x))$.',
          'Cas courant : $[u^n]\'=n\\cdot u^{n-1}\\cdot u\'$.'
        ]
      },
      formulas: [
        '$(uv)\'=u\'v+uv\'$',
        '$\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$',
        '$(u^n)\'=nu^{n-1}u\'$',
        '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$'
      ],
      piege: 'Dans la formule du quotient, bien noter $u\'v - uv\'$ (et non $uv\' - u\'v$) au numérateur. L\'ordre compte !'
    },
    quiz: [
      { q: 'Dériver $f(x)=x^2 e^x$', options: ['$2xe^x$', '$x^2 e^x$', '$(2x+x^2)e^x$', '$2xe^x + e^x$'], answer: 2, correction: '$(x^2)\'e^x+x^2(e^x)\'=2xe^x+x^2 e^x=(2x+x^2)e^x$.' },
      { q: 'Un élève dérive $f(x)=\\dfrac{x^2}{x+1}$ et écrit $f\'(x)=\\dfrac{2x}{1}=2x$ en "divisant les dérivées". Quelle est son erreur ?', options: ['Il a utilisé $(u/v)\'=u\'/v\'$ (faux) ; la règle correcte donne $f\'=\\dfrac{2x(x+1)-x^2}{(x+1)^2}=\\dfrac{x^2+2x}{(x+1)^2}$', 'L\'élève a raison : $(u/v)\'=u\'/v\'$', 'La bonne formule est $(u/v)\'=\\dfrac{u\'v+uv\'}{v^2}$ (avec un $+$)', 'La dérivée de $x+1$ est $0$, pas $1$'], answer: 0, correction: 'La règle du quotient est $(u/v)\'=\\frac{u\'v-uv\'}{v^2}$. Avec $u=x^2$, $u\'=2x$, $v=x+1$, $v\'=1$ : $f\'=\\frac{2x(x+1)-x^2\\cdot1}{(x+1)^2}=\\frac{2x^2+2x-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}$. La règle $(u/v)\'=u\'/v\'$ n\'existe pas — vérification : si $f(x)=\\frac{x}{x+1}$, $f\'=\\frac{1}{(x+1)^2}\\neq\\frac{1}{1}=1$.' },
      { q: 'Dériver $f(x)=(3x+1)^4$', options: ['$4(3x+1)^3$', '$12(3x+1)^3$', '$3(3x+1)^4$', '$(3x+1)^3$'], answer: 1, correction: '$[u^4]\'=4u^3\\cdot u\'$ avec $u\'=3$. Donc $f\'=4\\times3\\times(3x+1)^3=12(3x+1)^3$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5), b = rand(1, 4), n = rand(2, 4);
        return {
          statement: `Calculer la dérivée de $f(x)=(${a}x+${b})^${n}$ en $x=0$.`,
          answer: n * a * Math.pow(b, n-1),
          tolerance: 0,
          unit: '',
          hint: `$[(${a}x+${b})^${n}]'=${n}\\times${a}\\times(${a}x+${b})^{${n-1}}$. Évaluer en $x=0$.`,
          solution: [
            `$f'(x)=${n}\\times${a}\\times(${a}x+${b})^{${n-1}}$`,
            `$f'(0)=${n*a}\\times${b}^{${n-1}}=${n * a * Math.pow(b, n-1)}$`
          ]
        };
      }
    },
    probleme: {
      context: 'La position d\'un objet est $s(t)=\\frac{t^2}{t+1}$ (en m, $t\\ge 0$ en s).',
      tasks: [
        'Calculer $s\'(t)$ (vitesse instantanée).',
        'La vitesse est-elle croissante ?',
        'Quelle est la vitesse à $t=2$ s ?'
      ],
      solutions: [
        '$s\'(t)=\\frac{2t(t+1)-t^2\\cdot1}{(t+1)^2}=\\frac{t^2+2t}{(t+1)^2}=\\frac{t(t+2)}{(t+1)^2}$.',
        'Pour $t\\ge0$ : numérateur $\\ge0$, dénominateur $>0$, donc $s\'(t)\\ge0$ : vitesse croissante.',
        '$s\'(2)=\\frac{2\\times4}{9}=\\frac{8}{9}\\approx0{,}89$ m/s.'
      ],
      finalAnswer: '$s\'(t)=\\frac{t(t+2)}{(t+1)^2}\\ge0$ : objet en accélération. $v(2)\\approx0{,}89$ m/s.'
    },

    evaluation: {
      title: 'Évaluation — Compléments sur la dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Dériver $f(x) = x^3 e^x$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f\'(x) = 3x^2 e^x + x^3 e^x = (3x^2 + x^3)e^x = x^2(3+x)e^x$. $f\'(0) = 0 \\times 3 \\times 1 = 0$.'
        },
        {
          statement: 'Quelle est la dérivée de $f(x) = \\dfrac{x}{x+1}$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{(x+1)^2}$', '$\\dfrac{-1}{(x+1)^2}$', '$\\dfrac{x}{(x+1)^2}$', '$\\dfrac{1}{x+1}$'],
          answer: 0,
          points: 2,
          correction: '$u = x$, $u\' = 1$, $v = x+1$, $v\' = 1$. $f\' = \\dfrac{1 \\times (x+1) - x \\times 1}{(x+1)^2} = \\dfrac{1}{(x+1)^2}$.'
        },
        {
          statement: 'Calculer la dérivée de $g(x) = (2x+3)^5$ en $x = -1$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g\'(x) = 5 \\times 2 \\times (2x+3)^4 = 10(2x+3)^4$. $g\'(-1) = 10 \\times (2(-1)+3)^4 = 10 \\times 1^4 = 10$.'
        },
        {
          statement: 'Dériver $h(x) = \\sqrt{4x+1}$. Que vaut $h\'(2)$ ?',
          type: 'numeric',
          answer: 0.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$h(x) = (4x+1)^{1/2}$. $h\'(x) = \\dfrac{4}{2\\sqrt{4x+1}} = \\dfrac{2}{\\sqrt{4x+1}}$. $h\'(2) = \\dfrac{2}{\\sqrt{9}} = \\dfrac{2}{3} \\approx 0{,}67$.'
        },
        {
          statement: 'Un élève dérive $\\dfrac{x^2}{\\sin x}$ en écrivant $\\dfrac{2x}{\\cos x}$. A-t-il raison ?',
          type: 'multiple-choice',
          options: ['Oui, on dérive numérateur et dénominateur séparément', 'Non : $(u/v)\' = u\'/v\'$ est faux ; il faut appliquer la règle du quotient $(u\'v - uv\')/v^2$', 'Oui, mais il faut ajouter un signe $-$', 'Non : la dérivée de $\\sin x$ est $-\\cos x$'],
          answer: 1,
          points: 2,
          correction: 'La règle $(u/v)\' = u\'/v\'$ n\'existe pas. La bonne formule est $\\dfrac{u\'v - uv\'}{v^2} = \\dfrac{2x \\sin x - x^2 \\cos x}{\\sin^2 x}$.'
        }
      ]
    }
  },

    {
    id: 'tle-logarithme',
    level: 2, subject: 'maths',
    icon: '🌿',
    title: 'Fonction logarithme népérien',
    subtitle: 'Propriétés, dérivée, étude de fonctions',
    keywords: ['Logarithme', 'ln', 'Propriétés', 'Dérivée', 'Croissances comparées'],
    physics: true,
    cours: {
      intro: 'Le logarithme $\\ln$ est la fonction réciproque de l\'exponentielle : $\\ln(e^x) = x$ et $e^{\\ln x} = x$ pour $x > 0$. Intuitivement, $\\ln(x)$ est l\'exposant qu\'il faut donner à $e$ pour obtenir $x$. Sa dérivée $1/x$ en fait un outil clé en physique (résolution des équations différentielles, calcul de temps de demi-vie). Les règles algébriques s\'appliquent aux PRODUITS et QUOTIENTS : $\\ln(ab) = \\ln a + \\ln b$ — mais PAS aux sommes ! $\\ln(a+b) \\neq \\ln a + \\ln b$ est l\'erreur la plus fréquente. Les croissances comparées montrent que $\\ln x$ tend vers $+\\infty$ mais infiniment plus lentement que $x$ : $\\lim_{x\\to+\\infty}\\frac{\\ln x}{x} = 0$.',
      method: {
        title: 'Utiliser les propriétés de ln',
        steps: [
          '$\\ln(ab) = \\ln a + \\ln b$ pour $a,b>0$.',
          '$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$.',
          '$\\ln(a^n) = n\\ln a$.',
          'Dérivée : $(\\ln x)\'=\\frac{1}{x}$ ; plus généralement $(\\ln u)\'=\\frac{u\'}{u}$.'
        ]
      },
      formulas: [
        '$\\ln(ab)=\\ln a+\\ln b$',
        '$\\ln(a/b)=\\ln a-\\ln b$',
        '$(\\ln x)\'=\\dfrac{1}{x}$',
        '$\\lim_{x\\to+\\infty}\\frac{\\ln x}{x}=0$ (croissances comparées)'
      ],
      piege: '$\\ln(a+b) \\ne \\ln a + \\ln b$ : la formule s\'applique au produit, pas à la somme !'
    },
    quiz: [
      { q: 'Un élève simplifie $\\ln(5+e)$ en écrivant : "$\\ln(5+e)=\\ln 5+\\ln e=\\ln 5+1$". Quelle est son erreur ?', options: ['La formule $\\ln(ab)=\\ln a+\\ln b$ s\'applique au PRODUIT, pas à la somme. $\\ln(5+e)$ ne se simplifie pas davantage', 'L\'élève a raison : $\\ln(a+b)=\\ln a+\\ln b$', 'L\'erreur est d\'écrire $\\ln e=1$ ; il faut écrire $\\ln e=e$', '$\\ln(5+e)=\\ln 5\\times\\ln e=\\ln 5$'], answer: 0, correction: '$\\ln(ab)=\\ln a+\\ln b$ s\'applique au PRODUIT : $\\ln(5\\times e)=\\ln 5+\\ln e=\\ln 5+1$. Mais $\\ln(5+e)$ est une SOMME à l\'intérieur du logarithme : il n\'existe aucune formule pour la décomposer. L\'analogie : $(a+b)^2\\neq a^2+b^2$ — on ne peut pas "distribuer" les opérations à travers une somme.' },
      { q: 'Simplifier $\\ln 6 - \\ln 2$', options: ['$\\ln 4$', '$\\ln 3$', '$\\ln 12$', '$3$'], answer: 1, correction: '$\\ln 6 - \\ln 2 = \\ln(6/2)=\\ln 3$.' },
      { q: 'Dériver $f(x)=\\ln(2x+1)$', options: ['$\\frac{1}{2x+1}$', '$\\frac{2}{2x+1}$', '$\\ln 2$', '$\\frac{1}{2}\\ln(2x+1)$'], answer: 1, correction: '$(\\ln u)\'=u\'/u$ avec $u=2x+1$, $u\'=2$. Donc $f\'=\\frac{2}{2x+1}$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const vals = [
          { expr: 'ln(e²)', ans: 2 },
          { expr: 'ln(1)', ans: 0 },
          { expr: 'ln(e)', ans: 1 },
          { expr: 'ln(e⁴)', ans: 4 }
        ];
        const v = pick(vals);
        return {
          statement: `Calculer $${v.expr}$.`,
          answer: v.ans,
          tolerance: 0,
          unit: '',
          hint: '$\\ln(e^n)=n$.',
          solution: [`$${v.expr}=${v.ans}$`]
        };
      }
    },
    probleme: {
      context: 'Une population bactérienne suit la loi $N(t)=N_0 e^{0{,}3t}$ où $t$ est en heures et $N_0=100$.',
      tasks: [
        'Calculer $N(10)$.',
        'Au bout de combien d\'heures la population double-t-elle ?',
        'Exprimer le temps de doublement avec $\\ln 2$.'
      ],
      solutions: [
        '$N(10)=100e^3\\approx100\\times20{,}09\\approx2009$ bactéries.',
        '$100e^{0{,}3t}=200 \\Rightarrow e^{0{,}3t}=2 \\Rightarrow 0{,}3t=\\ln 2 \\Rightarrow t=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.',
        '$t_{double}=\\frac{\\ln 2}{0{,}3}\\approx2{,}31$ h.'
      ],
      finalAnswer: 'La population double toutes les $\\frac{\\ln 2}{0{,}3}\\approx2{,}3$ heures.'
    },

    evaluation: {
      title: 'Évaluation — Fonction logarithme népérien',
      duration: '30 min',
      questions: [
        {
          statement: 'Simplifier $\\ln(e^5)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\ln(e^5) = 5$ car $\\ln(e^n) = n$ pour tout $n$.'
        },
        {
          statement: 'Simplifier $\\ln 12 - \\ln 4$.',
          type: 'multiple-choice',
          options: ['$\\ln 3$', '$\\ln 8$', '$\\ln 48$', '$3$'],
          answer: 0,
          points: 2,
          correction: '$\\ln 12 - \\ln 4 = \\ln\\left(\\dfrac{12}{4}\\right) = \\ln 3$.'
        },
        {
          statement: 'Dériver $f(x) = \\ln(3x + 2)$ pour $x > -\\frac{2}{3}$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$f\'(x) = \\dfrac{3}{3x+2}$. Donc $f\'(0) = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          statement: 'Un élève écrit $\\ln(a + b) = \\ln a + \\ln b$. Cette égalité est :',
          type: 'multiple-choice',
          options: ['Vraie pour tout $a, b > 0$', 'Fausse : la formule $\\ln a + \\ln b = \\ln(ab)$ s\'applique au produit, pas à la somme', 'Vraie seulement si $a = b$', 'Vraie si $a$ et $b$ sont entiers'],
          answer: 1,
          points: 2,
          correction: '$\\ln(ab) = \\ln a + \\ln b$ est la formule correcte (logarithme d\'un PRODUIT). $\\ln(a+b)$ ne se simplifie pas en général. Contre-exemple : $\\ln(1+1) = \\ln 2 \\approx 0{,}693$ mais $\\ln 1 + \\ln 1 = 0 + 0 = 0$.'
        },
        {
          statement: 'Résoudre $\\ln(x) = 3$. Donner la valeur de $x$ arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 20.09,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$\\ln(x) = 3 \\Leftrightarrow x = e^3 \\approx 20{,}09$.'
        }
      ]
    }
  },

    {
    id: 'tle-convexite',
    level: 2, subject: 'maths',
    icon: '🏔️',
    title: 'Convexité',
    subtitle: 'Dérivée seconde, point d\'inflexion',
    keywords: ['Convexe', 'Concave', 'Dérivée seconde', 'Point d\'inflexion'],
    physics: false,
    cours: {
      intro: 'La convexité traduit la courbure de la courbe : une fonction convexe a ses tangentes EN-DESSOUS de la courbe (comme $x^2$, un bol), une fonction concave a ses tangentes AU-DESSUS (comme $-x^2$, un dôme). La dérivée seconde $f\'\'$ mesure cette courbure : $f\'\' > 0$ = convexe, $f\'\' < 0$ = concave. Un point d\'inflexion est là où la courbure change de sens, c\'est-à-dire là où $f\'\'$ change de signe. Attention : $f\'\'(a) = 0$ est NÉCESSAIRE mais PAS SUFFISANT pour un point d\'inflexion. Contre-exemple classique : $f(x) = x^4$ vérifie $f\'\'(0) = 0$, mais $f\'\'(x) = 12x^2 \\geq 0$ partout — pas de changement de signe, donc $x=0$ n\'est PAS un point d\'inflexion.',
      method: {
        title: 'Étudier la convexité via $f\'\'$',
        steps: [
          'Calculer $f\'\'(x)$ (dérivée de la dérivée).',
          '$f\'\'(x) > 0$ sur $I$ $\\Rightarrow$ $f$ convexe sur $I$.',
          '$f\'\'(x) < 0$ sur $I$ $\\Rightarrow$ $f$ concave sur $I$.',
          'Un point d\'inflexion est un point où $f\'\'$ change de signe (et $f\'\'(x)=0$).'
        ]
      },
      formulas: [
        '$f$ convexe $\\Leftrightarrow f\'\'\\ge 0$',
        '$f$ concave $\\Leftrightarrow f\'\'\\le 0$',
        'Point d\'inflexion : $f\'\'(a)=0$ et changement de signe de $f\'\'$'
      ],
      piege: 'Un zéro de $f\'\'$ n\'est pas forcément un point d\'inflexion : il faut vérifier le changement de signe. Par exemple, $f(x)=x^4$ a $f\'\'(0)=0$ mais $f\'\'$ ne change pas de signe en $0$.'
    },
    quiz: [
      { q: 'Si $f\'\'(x) > 0$ sur $[a;b]$, la courbe de $f$ est :', options: ['Concave', 'Convexe', 'Décroissante', 'Constante'], answer: 1, correction: '$f\'\'>0 \\Rightarrow$ convexe (tournée vers le haut, comme $x^2$).' },
      { q: 'Pour $f(x)=x^3$, $f\'\'(x)=$ ?', options: ['$3x$', '$6x$', '$3x^2$', '$x^2$'], answer: 1, correction: '$f\'(x)=3x^2$, $f\'\'(x)=6x$.' },
      { q: '$f(x)=x^4$ vérifie $f\'\'(0)=12\\times0^2=0$. Un élève conclut que $x=0$ est un point d\'inflexion. A-t-il raison ?', options: ['Non : $f\'\'(x)=12x^2\\ge0$ partout et ne change pas de signe en $0$ : ce n\'est PAS un point d\'inflexion', 'Oui : $f\'\'(0)=0$ implique toujours un point d\'inflexion', 'Oui : $x=0$ est le minimum de $f$, donc c\'est un point d\'inflexion', 'Impossible à dire sans calculer $f\'\'\'(0)$'], answer: 0, correction: 'La condition $f\'\'(a)=0$ est NÉCESSAIRE mais pas SUFFISANTE pour un point d\'inflexion. Il faut aussi que $f\'\'$ CHANGE DE SIGNE autour de $a$. Ici $f\'\'(x)=12x^2\\ge0$ pour tout $x$ : jamais négatif, donc pas de changement de signe en $0$. Le point $(0;0)$ est un minimum (pas un inflexion). Comparer avec $f(x)=x^3$ où $f\'\'(0)=0$ ET $f\'\'$ change de signe : là c\'est bien un inflexion.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 5);
        return {
          statement: `Pour $f(x)=${a}x^3$, calculer $f\'\'(1)$.`,
          answer: 6 * a,
          tolerance: 0,
          unit: '',
          hint: `$f'(x)=${3*a}x^2$, puis $f''(x)=?$`,
          solution: [`$f'(x)=${3*a}x^2$`, `$f''(x)=${6*a}x$`, `$f''(1)=${6*a}$`]
        };
      }
    },
    probleme: {
      context: 'La hauteur d\'eau dans un réservoir est $h(t)=t^3-6t^2+9t$ (en m, $t$ en h, $t\\in[0;4]$).',
      tasks: [
        'Calculer $h\'(t)$ et $h\'\'(t)$.',
        'Sur quel intervalle le niveau monte-t-il de façon convexe (accélération positive) ?',
        'Quel est le point d\'inflexion ?'
      ],
      solutions: [
        '$h\'(t)=3t^2-12t+9$ ; $h\'\'(t)=6t-12$.',
        '$h\'\'>0 \\Leftrightarrow 6t-12>0 \\Leftrightarrow t>2$ : convexe sur $[2;4]$.',
        '$h\'\'(t)=0 \\Rightarrow t=2$ ; $h\'\'$ change de signe : point d\'inflexion en $t=2$, $h(2)=8-24+18=2$ m.'
      ],
      finalAnswer: 'Point d\'inflexion en $(2;2)$. Convexe sur $[2;4]$.'
    },

    evaluation: {
      title: 'Évaluation — Convexité',
      duration: '30 min',
      questions: [
        {
          statement: 'Soit $f(x) = x^3 - 3x$. Calculer $f\'\'(x)$.',
          type: 'multiple-choice',
          options: ['$3x^2 - 3$', '$6x$', '$6$', '$3x$'],
          answer: 1,
          points: 2,
          correction: '$f\'(x) = 3x^2 - 3$. $f\'\'(x) = 6x$.'
        },
        {
          statement: 'Pour $f(x) = e^x$, la fonction est convexe sur $\\mathbb{R}$. Vrai ou faux ?',
          type: 'multiple-choice',
          options: ['Vrai : $f\'\'(x) = e^x > 0$ pour tout $x$', 'Faux : $e^x$ est concave', 'Vrai seulement pour $x > 0$', 'Faux : $e^x$ n\'a pas de dérivée seconde'],
          answer: 0,
          points: 2,
          correction: '$f\'(x) = e^x$, $f\'\'(x) = e^x > 0$ pour tout $x \\in \\mathbb{R}$. Donc $f$ est convexe sur $\\mathbb{R}$ entier.'
        },
        {
          statement: 'Soit $f(x) = x^4 - 6x^2$. Déterminer l\'abscisse du (des) point(s) d\'inflexion. Donner la plus petite valeur.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f\'(x) = 4x^3 - 12x$. $f\'\'(x) = 12x^2 - 12 = 12(x^2 - 1) = 12(x-1)(x+1)$. $f\'\'(x) = 0 \\Leftrightarrow x = -1$ ou $x = 1$. $f\'\'$ change de signe en chacune de ces valeurs : ce sont deux points d\'inflexion. La plus petite est $x = -1$.'
        },
        {
          statement: 'Si $f\'\'(a) = 0$ mais $f\'\'$ ne change pas de signe en $a$, alors $a$ est :',
          type: 'multiple-choice',
          options: ['Un point d\'inflexion', 'Pas un point d\'inflexion', 'Un maximum local', 'Un minimum local'],
          answer: 1,
          points: 2,
          correction: 'Un point d\'inflexion nécessite un changement de signe de $f\'\'$. Si $f\'\'(a) = 0$ sans changement de signe, $a$ n\'est pas un point d\'inflexion. Exemple : $f(x) = x^4$, $f\'\'(0) = 0$ mais $f\'\'(x) = 12x^2 \\geq 0$ partout.'
        },
        {
          statement: 'Soit $g(x) = \\ln(x)$ pour $x > 0$. Calculer $g\'\'(1)$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g\'(x) = \\dfrac{1}{x}$. $g\'\'(x) = -\\dfrac{1}{x^2}$. $g\'\'(1) = -\\dfrac{1}{1} = -1$. Comme $g\'\'(x) < 0$ pour tout $x > 0$, $\\ln$ est concave sur $]0;+\\infty[$.'
        }
      ]
    }
  },

    {
    id: 'tle-suites-complements',
    level: 2, subject: 'maths',
    icon: '🔗',
    title: 'Suites — compléments',
    subtitle: 'Récurrence, limites, raisonnement par récurrence',
    keywords: ['Suite', 'Récurrence', 'Limite', 'Raisonnement par récurrence', 'Monotonie'],
    physics: false,
    cours: {
      intro: 'Le raisonnement par récurrence est une "échelle infinie" : si le premier barreau tient (initialisation au rang $n_0$) ET si chaque barreau tient le suivant (hérédité : rang $n$ → rang $n+1$), alors toute l\'échelle est solide. Les deux étapes sont indispensables : l\'hérédité seule ne suffit pas (on ne monterait pas l\'échelle si le premier barreau est absent). Dans l\'hérédité, on SUPPOSE la propriété vraie au rang $n$ — c\'est l\'hypothèse de récurrence, on ne la démontre pas, on l\'utilise. Pour les suites définies par $u_{n+1}=f(u_n)$, si la suite converge vers $\\ell$, alors $\\ell$ est un point fixe : $\\ell = f(\\ell)$. Attention : résoudre $\\ell = f(\\ell)$ donne les candidats, mais la convergence doit être prouvée séparément (monotonie + bornage).',
      method: {
        title: 'Raisonnement par récurrence',
        steps: [
          'Initialisation : vérifier la propriété pour le rang de départ (souvent $n=0$ ou $n=1$).',
          'Hérédité : supposer la propriété vraie au rang $n$ et montrer qu\'elle est vraie au rang $n+1$.',
          'Conclusion : par le principe de récurrence, la propriété est vraie pour tout $n$.',
          'Pour les suites monotones : étudier le signe de $u_{n+1}-u_n$.'
        ]
      },
      formulas: [
        'Suite arithmétique : $u_n = u_0 + nr$',
        'Suite géométrique : $u_n = u_0 \\cdot q^n$',
        '$\\lim_{n\\to+\\infty} q^n = 0$ si $|q|<1$',
        '$\\lim_{n\\to+\\infty} q^n = +\\infty$ si $q>1$'
      ],
      piege: 'L\'hérédité suppose la propriété au rang $n$ (hypothèse de récurrence) : elle ne se démontre pas, elle s\'utilise ! Ne pas confondre "supposer" et "montrer".'
    },
    quiz: [
      { q: 'Pour la suite géométrique $u_n=3\\times2^n$, $\\lim_{n\\to+\\infty}u_n=$ ?', options: ['$0$', '$3$', '$+\\infty$', '$6$'], answer: 2, correction: '$q=2>1$ donc $2^n\\to+\\infty$ et $u_n\\to+\\infty$.' },
      { q: 'Un élève veut prouver par récurrence que $u_n>0$ pour tout $n\\ge0$. Il prouve l\'hérédité (si $u_n>0$ alors $u_{n+1}>0$) mais oublie l\'initialisation. Sa démonstration est-elle valide ?', options: ['Non : sans initialisation, la chaîne n\'a pas de point de départ et la démonstration est invalide', 'Oui : si l\'hérédité est prouvée, la propriété est vraie pour tout $n$', 'Oui : l\'initialisation n\'est utile que si $u_0=0$', 'Cela dépend de $u_0$ : si $u_0>0$ est donné dans l\'énoncé, l\'initialisation est automatiquement satisfaite'], answer: 0, correction: 'Sans initialisation, la récurrence ne "démarre" pas. L\'option D est séduisante : $u_0>0$ peut être donné dans l\'énoncé — mais l\'élève doit EXPLICITEMENT vérifier le cas de base dans sa démonstration, en s\'y référant. Omettre cette étape rend la démonstration formellement incomplète. Par analogie : l\'hérédité dit "si le barreau $n$ tient, le barreau $n+1$ tient" — mais si aucun barreau de départ n\'est posé, l\'argument ne prouve rien.' },
      { q: '$u_{n+1}-u_n>0$ pour tout $n$ signifie que la suite est :', options: ['Décroissante', 'Constante', 'Croissante', 'Nulle'], answer: 2, correction: '$u_{n+1}>u_n$ pour tout $n$ : la suite est strictement croissante.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const u0 = rand(1, 5), r = rand(2, 5), n = rand(3, 6);
        return {
          statement: `Soit la suite arithmétique $u_0=${u0}$, $r=${r}$. Calculer $u_${n}$.`,
          answer: u0 + n * r,
          tolerance: 0,
          unit: '',
          hint: `$u_n = u_0 + n\\times r = ${u0} + ${n}\\times${r}$.`,
          solution: [`$u_{${n}}=${u0}+${n}\\times${r}=${u0+n*r}$`]
        };
      }
    },
    probleme: {
      context: 'Une suite est définie par $u_0=1$ et $u_{n+1}=\\frac{u_n}{2}+1$ pour tout $n\\ge0$.',
      tasks: [
        'Calculer $u_1$, $u_2$, $u_3$.',
        'Conjecturer la limite de $(u_n)$.',
        'Vérifier que la suite est croissante et majorée par $2$.'
      ],
      solutions: [
        '$u_1=\\frac{1}{2}+1=1{,}5$ ; $u_2=\\frac{1{,}5}{2}+1=1{,}75$ ; $u_3=\\frac{1{,}75}{2}+1=1{,}875$.',
        'Les termes semblent converger vers $l=2$ (résoudre $l=l/2+1 \\Rightarrow l=2$).',
        'Si $u_n<2$, alors $u_{n+1}=u_n/2+1<1+1=2$ (majorée). $u_{n+1}-u_n=1-u_n/2>0$ si $u_n<2$ (croissante).'
      ],
      finalAnswer: 'Suite croissante majorée par $2$ : elle converge vers $2$.'
    },

    evaluation: {
      title: 'Évaluation — Suites compléments',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $(u_n)$ la suite géométrique de premier terme $u_0 = 3$ et de raison $q = 0{,}5$. Calculer $u_5$.',
          type: 'numeric',
          answer: 0.09375,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$u_5 = u_0 \\times q^5 = 3 \\times (0{,}5)^5 = 3 \\times \\dfrac{1}{32} = \\dfrac{3}{32} = 0{,}09375$.'
        },
        {
          statement: 'Soit $(u_n)$ géométrique avec $|q| < 1$. Quelle est $\\lim_{n \\to +\\infty} u_n$ ?',
          type: 'multiple-choice',
          options: ['$+\\infty$', '$0$', '$u_0$', '$q$'],
          answer: 1,
          points: 2,
          correction: 'Si $|q|<1$, alors $q^n \\to 0$ quand $n \\to +\\infty$. Donc $u_n = u_0 q^n \\to 0$.'
        },
        {
          statement: 'Soit la suite arithmétique $u_0 = 2$, $r = 3$. Calculer $S = u_0 + u_1 + \\cdots + u_{10}$.',
          type: 'numeric',
          answer: 187,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$u_{10} = 2 + 10 \\times 3 = 32$. $S = \\dfrac{(10+1)(u_0 + u_{10})}{2} = \\dfrac{11 \\times 34}{2} = \\dfrac{374}{2} = 187$.'
        },
        {
          statement: 'Quelle est l\'étape manquante dans un raisonnement par récurrence si l\'on prouve uniquement l\'hérédité ?',
          type: 'multiple-choice',
          options: ['La conclusion', 'L\'initialisation (vérification au rang de départ)', 'La vérification au rang $n+2$', 'Le calcul de la limite'],
          answer: 1,
          points: 2,
          correction: 'Un raisonnement par récurrence nécessite deux étapes : l\'initialisation (vérifier la propriété au rang de départ) et l\'hérédité (si vrai au rang $n$, alors vrai au rang $n+1$). Sans initialisation, la démonstration est incomplète.'
        },
        {
          statement: 'Soit $u_0 = 1$ et $u_{n+1} = \\dfrac{u_n}{3} + 2$. Si la suite converge, sa limite $\\ell$ vaut :',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si $(u_n)$ converge vers $\\ell$, alors $\\ell = \\dfrac{\\ell}{3} + 2$, soit $\\ell - \\dfrac{\\ell}{3} = 2$, $\\dfrac{2\\ell}{3} = 2$, $\\ell = 3$.'
        }
      ]
    }
  },

    {
    id: 'tle-denombrement',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Dénombrement et combinatoire',
    subtitle: 'Arrangements, permutations, combinaisons',
    keywords: ['Combinatoire', 'Arrangements', 'Permutations', 'Combinaisons', 'Coefficient binomial'],
    physics: false,
    cours: {
      intro: 'Le dénombrement répond à "combien de façons ?" La clé est de savoir si l\'ordre compte. Quand l\'ordre compte (podium, code PIN, anagramme) → arrangements. Quand l\'ordre ne compte pas (comité, main de cartes, groupe de travail) → combinaisons. La formule $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$ donne le nombre de façons de choisir $k$ éléments parmi $n$ sans tenir compte de l\'ordre. Erreur classique : calculer $n \\times (n-1) \\times \\cdots$ (arrangement) sans diviser par $k!$ pour les combinaisons. $\\binom{10}{3} = 720/6 = 120$ et non $720$. Propriété utile : $\\binom{n}{k} = \\binom{n}{n-k}$ (choisir $k$ éléments revient à exclure $n-k$ éléments).',
      method: {
        title: 'Choisir la bonne formule',
        steps: [
          'Arrangements de $k$ éléments parmi $n$ (ordre compte, sans remise) : $A_n^k = \\frac{n!}{(n-k)!}$.',
          'Permutations de $n$ éléments : $n!$.',
          'Combinaisons de $k$ éléments parmi $n$ (ordre ne compte pas) : $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$.',
          'Règle du produit : si un choix comporte $p$ façons puis $q$ façons, le total est $p\\times q$.'
        ]
      },
      formulas: [
        '$n! = n\\times(n-1)\\times\\cdots\\times1$',
        '$A_n^k = \\dfrac{n!}{(n-k)!}$',
        '$\\dbinom{n}{k}=\\dfrac{n!}{k!(n-k)!}$',
        '$\\dbinom{n}{k}=\\dbinom{n}{n-k}$'
      ],
      piege: 'Ne pas confondre arrangements et combinaisons. Former un comité (ordre non important) → combinaisons. Classer des coureurs (ordre important) → arrangements.'
    },
    quiz: [
      { q: '$\\binom{5}{2}=$ ?', options: ['$20$', '$10$', '$5$', '$2$'], answer: 1, correction: '$\\binom{5}{2}=\\frac{5!}{2!3!}=\\frac{5\\times4}{2}=10$.' },
      { q: 'Combien de mots de 3 lettres (distinctes) peut-on former avec les 26 lettres de l\'alphabet ?', options: ['$17576$', '$15600$', '$78$', '$1716$'], answer: 1, correction: '$A_{26}^3=26\\times25\\times24=15600$.' },
      { q: 'Pour choisir $3$ personnes parmi $10$ pour un comité (sans rôle attribué), un élève calcule $10\\times9\\times8=720$. Quelle est son erreur ?', options: ['Il a compté les ARRANGEMENTS ($A_{10}^3=720$) ; pour un comité (ordre non important), il faut diviser par $3!=6$ : $\\binom{10}{3}=120$', 'L\'élève a raison : $10\\times9\\times8=720$', 'Il aurait dû calculer $10\\times9\\times8\\times7$ (4 étapes pour 3 personnes)', 'La bonne formule est $3!=6$'], answer: 0, correction: '$10\\times9\\times8 = A_{10}^3 = 720$ compte les arrangements ordonnés : le groupe $\\{Alice, Bob, Claire\\}$ est compté $3!=6$ fois. Comme dans un comité l\'ordre ne compte pas, on divise par $6$ : $\\binom{10}{3}=720/6=120$. Règle clé : ordre important → arrangement ; ordre non important → combinaison ($\\div k!$).' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(5, 9), k = rand(2, 3);
        let num = 1, denom = 1;
        for (let i = 0; i < k; i++) { num *= (n - i); denom *= (k - i); }
        return {
          statement: `Calculer $\\binom{${n}}{${k}}$.`,
          answer: num / denom,
          tolerance: 0,
          unit: '',
          hint: `$\\binom{${n}}{${k}}=\\frac{${n}\\times${n-1}${k>2?'\\times'+(n-2):''}}{${k}!}$`,
          solution: [`$\\binom{${n}}{${k}}=\\frac{${Array.from({length:k},(_,i)=>n-i).join('\\times')}}{${k}!}=${num/denom}$`]
        };
      }
    },
    probleme: {
      context: 'Une classe de $20$ élèves doit former un groupe de $4$ élèves pour un projet, puis désigner parmi eux un chef de projet et un secrétaire.',
      tasks: [
        'Combien de groupes de $4$ élèves peut-on former ?',
        'Pour un groupe donné, combien de façons de désigner chef et secrétaire ?',
        'Combien de façons au total (groupe + rôles) ?'
      ],
      solutions: [
        '$\\binom{20}{4}=\\frac{20\\times19\\times18\\times17}{4!}=\\frac{116280}{24}=4845$.',
        '$A_4^2=4\\times3=12$ façons.',
        '$4845\\times12=58140$ façons.'
      ],
      finalAnswer: '$4845$ groupes ; $12$ attributions de rôles ; $58140$ façons au total.'
    },

    evaluation: {
      title: 'Évaluation — Dénombrement et combinatoire',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\binom{8}{3}$.',
          type: 'numeric',
          answer: 56,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\binom{8}{3} = \\dfrac{8!}{3! \\times 5!} = \\dfrac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = \\dfrac{336}{6} = 56$.'
        },
        {
          statement: 'Un code est formé de $4$ chiffres distincts parmi $\\{0;1;2;\\ldots;9\\}$. Combien de codes peut-on former ?',
          type: 'numeric',
          answer: 5040,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'ordre compte (code) et les chiffres sont distincts : c\'est un arrangement. $A_{10}^4 = 10 \\times 9 \\times 8 \\times 7 = 5040$.'
        },
        {
          statement: 'Quelle est la valeur de $\\binom{n}{0}$ pour tout entier $n \\geq 0$ ?',
          type: 'multiple-choice',
          options: ['$0$', '$1$', '$n$', '$n!$'],
          answer: 1,
          points: 2,
          correction: '$\\binom{n}{0} = \\dfrac{n!}{0! \\times n!} = \\dfrac{1}{1} = 1$. Il n\'y a qu\'une seule façon de choisir $0$ élément : ne rien prendre.'
        },
        {
          statement: 'Combien de façons y a-t-il de répartir $12$ élèves en un groupe de $5$ et un groupe de $7$ ?',
          type: 'numeric',
          answer: 792,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Choisir le groupe de $5$ détermine automatiquement le groupe de $7$. Donc $\\binom{12}{5} = \\dfrac{12!}{5! \\times 7!} = \\dfrac{12 \\times 11 \\times 10 \\times 9 \\times 8}{120} = \\dfrac{95040}{120} = 792$.'
        },
        {
          statement: 'Lequel est un arrangement et non une combinaison ?',
          type: 'multiple-choice',
          options: ['Choisir $3$ fruits dans un panier de $10$', 'Constituer un podium (1er, 2e, 3e) parmi $8$ coureurs', 'Former un comité de $4$ membres parmi $15$', 'Tirer $5$ boules dans une urne'],
          answer: 1,
          points: 2,
          correction: 'Le podium attribue des rangs (1er, 2e, 3e) : l\'ordre compte, c\'est un arrangement. Les autres choix (fruits, comité, boules) ne tiennent pas compte de l\'ordre : ce sont des combinaisons.'
        }
      ]
    }
  },

    {
    id: 'tle-lois-continues',
    level: 2, subject: 'maths',
    icon: '🔔',
    title: 'Lois de probabilité continues',
    subtitle: 'Loi uniforme, loi normale',
    keywords: ['Loi normale', 'Loi uniforme', 'Densité', 'Espérance', 'Écart-type'],
    physics: true,
    cours: {
      intro: 'Pour une loi CONTINUE, la probabilité d\'une valeur EXACTE est nulle : $P(X = 5) = 0$ (on ne peut pas mesurer précisément un point sur une courbe). On calcule uniquement des probabilités sur des intervalles : $P(a \\leq X \\leq b)$ = aire sous la courbe de densité entre $a$ et $b$. La loi normale $\\mathcal{N}(\\mu;\\sigma^2)$ est symétrique autour de $\\mu$ : $P(X \\leq \\mu) = 0{,}5$ exactement. La règle des $2\\sigma$ donne $P(\\mu-2\\sigma \\leq X \\leq \\mu+2\\sigma) \\approx 0{,}954$. Piège classique : en déduire $P(X \\leq \\mu-2\\sigma) \\approx 0{,}046$ en oubliant de diviser par $2$ — la bonne valeur est $(1-0{,}954)/2 \\approx 0{,}023$ par symétrie.',
      method: {
        title: 'Utiliser la loi normale',
        steps: [
          'Paramètres : $\\mu$ (espérance/moyenne) et $\\sigma$ (écart-type).',
          'Loi normale centrée réduite : $Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathcal{N}(0;1)$.',
          'Règle des $3\\sigma$ : $P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$.',
          'Règle des $2\\sigma$ : $P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$.'
        ]
      },
      formulas: [
        '$P(\\mu-\\sigma\\le X\\le\\mu+\\sigma)\\approx0{,}683$',
        '$P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$',
        '$P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$',
        'Loi uniforme sur $[a;b]$ : $E(X)=\\dfrac{a+b}{2}$, $f(x)=\\dfrac{1}{b-a}$'
      ],
      piege: 'La loi normale est symétrique autour de $\\mu$. Ne pas oublier de centrer-réduire avant de lire dans une table. $P(X\\le\\mu)=0{,}5$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{N}(100;10^2)$, un élève calcule $P(80\\le X\\le120)\\approx0{,}954$ puis conclut $P(X\\le80)\\approx0{,}046$. Quelle est son erreur ?', options: ['Par symétrie, $P(X\\le80)=(1-0{,}954)/2\\approx0{,}023$. L\'élève a oublié de diviser par $2$', 'L\'élève a raison : $P(X\\le80)=1-0{,}954=0{,}046$', '$P(X\\le80)$ ne peut pas être calculé avec la règle des $2\\sigma$', 'La bonne valeur est $P(X\\le80)=0{,}954/2=0{,}477$'], answer: 0, correction: '$[80;120]=[\\mu-2\\sigma;\\mu+2\\sigma]$ donc $P(80\\le X\\le120)\\approx0{,}954$. La probabilité en dehors est $1-0{,}954=0{,}046$, mais par SYMÉTRIE de la loi normale, cette probabilité se répartit également des deux côtés : $P(X\\le80)=P(X\\ge120)=0{,}046/2\\approx0{,}023$. L\'erreur : ne pas diviser par $2$ en oubliant la symétrie.' },
      { q: 'La loi uniforme sur $[2;8]$ a pour espérance :', options: ['$3$', '$5$', '$6$', '$4$'], answer: 1, correction: '$E(X)=(2+8)/2=5$.' },
      { q: 'Pour $X\\sim\\mathcal{N}(\\mu;\\sigma^2)$, $P(X\\le\\mu)=$ ?', options: ['$0{,}68$', '$0{,}25$', '$0{,}5$', '$1$'], answer: 2, correction: 'La loi normale est symétrique autour de $\\mu$, donc $P(X\\le\\mu)=0{,}5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const mu = rand(50, 80) * 2, sigma = rand(5, 15);
        return {
          statement: `Pour $X\\sim\\mathcal{N}(${mu};${sigma}^2)$, calculer $P(X\\ge${mu})$.`,
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          hint: 'La loi normale est symétrique autour de $\\mu$.',
          solution: [`Par symétrie de la loi normale : $P(X\\ge${mu})=P(X\\le${mu})=0{,}5$`]
        };
      }
    },
    probleme: {
      context: 'La taille des adultes français suit (approximativement) une loi normale $\\mathcal{N}(175;8^2)$ pour les hommes (en cm).',
      tasks: [
        'Quelle est la probabilité qu\'un homme mesure entre $167$ et $183$ cm ?',
        'Quelle proportion mesure entre $159$ et $191$ cm ?',
        'Un homme mesure plus de $191$ cm. Est-ce rare ?'
      ],
      solutions: [
        '$[167;183]=[\\mu-\\sigma;\\mu+\\sigma]$ : $P\\approx0{,}683$, soit $68{,}3\\%$.',
        '$[159;191]=[\\mu-2\\sigma;\\mu+2\\sigma]$ : $P\\approx0{,}954$, soit $95{,}4\\%$.',
        '$P(X>191)=P(X>\\mu+2\\sigma)\\approx\\frac{1-0{,}954}{2}\\approx2{,}3\\%$ : oui, c\'est rare.'
      ],
      finalAnswer: '$68\\%$ entre $167$-$183$ cm ; $95\\%$ entre $159$-$191$ cm ; être $>191$ cm est rare ($\\approx2{,}3\\%$).'
    },

    evaluation: {
      title: 'Évaluation — Lois de probabilité continues',
      duration: '35 min',
      questions: [
        {
          statement: 'Pour $X \\sim \\mathcal{N}(50;4^2)$, calculer $P(42 \\leq X \\leq 58)$ en utilisant la règle des $k\\sigma$.',
          type: 'numeric',
          answer: 0.954,
          tolerance: 0.005,
          unit: '',
          points: 2,
          correction: '$42 = 50 - 2 \\times 4 = \\mu - 2\\sigma$ et $58 = 50 + 2 \\times 4 = \\mu + 2\\sigma$. Donc $P(42 \\leq X \\leq 58) = P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(100;15^2)$, que vaut $P(X \\leq 100)$ ?',
          type: 'multiple-choice',
          options: ['$0{,}5$', '$0{,}683$', '$1$', '$0{,}954$'],
          answer: 0,
          points: 2,
          correction: 'La loi normale est symétrique autour de $\\mu$. Donc $P(X \\leq \\mu) = P(X \\leq 100) = 0{,}5$.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[2;10]$. Calculer $E(X)$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$E(X) = \\dfrac{a+b}{2} = \\dfrac{2+10}{2} = 6$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(80;5^2)$, quelle est la probabilité approchée $P(X > 90)$ ?',
          type: 'multiple-choice',
          options: ['$\\approx 0{,}023$ (environ $2{,}3\\%$)', '$\\approx 0{,}046$ (environ $4{,}6\\%$)', '$\\approx 0{,}159$ (environ $16\\%$)', '$\\approx 0{,}5$ (environ $50\\%$)'],
          answer: 0,
          points: 2,
          correction: '$90 = 80 + 2 \\times 5 = \\mu + 2\\sigma$. Donc $P(X > 90) = P(X > \\mu + 2\\sigma) = \\dfrac{1 - 0{,}954}{2} \\approx 0{,}023$. Par symétrie, la probabilité au-delà de $\\mu + 2\\sigma$ est la moitié de la queue bilatérale.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[0;6]$. Calculer $P(1 \\leq X \\leq 4)$.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour la loi uniforme sur $[a;b]$ : $P(c \\leq X \\leq d) = \\dfrac{d-c}{b-a}$. Donc $P(1 \\leq X \\leq 4) = \\dfrac{4-1}{6-0} = \\dfrac{3}{6} = 0{,}5$.'
        }
      ]
    }
  },

    {
    id: 'tle-geometrie-espace',
    level: 2, subject: 'maths',
    icon: '🧊',
    title: 'Géométrie dans l\'espace',
    subtitle: 'Vecteurs, droites et plans de l\'espace',
    keywords: ['Espace', 'Vecteur', 'Plan', 'Droite', 'Coplanaire', 'Position relative'],
    physics: true,
    cours: {
      intro: 'En 3D, les droites et plans se comportent de façon plus riche qu\'en 2D. Deux droites de l\'espace peuvent être sécantes (se croisent), parallèles, ou GAUCHES — ni parallèles ni sécantes, passant "l\'une au-dessus de l\'autre" sans se toucher. Les droites gauches n\'existent pas en 2D et constituent le principal piège de la géométrie spatiale : deux droites non parallèles ne se croisent pas forcément ! Un plan est défini par son vecteur NORMAL $\\vec{n}(a;b;c)$ (perpendiculaire au plan) et son équation $ax+by+cz+d=0$. Une droite est perpendiculaire à un plan si son vecteur directeur est colinéaire au vecteur normal. Pour vérifier si deux droites se croisent, il faut résoudre le système et vérifier qu\'il admet une solution.',
      method: {
        title: 'Positions relatives et équations',
        steps: [
          'Deux droites peuvent être : sécantes, parallèles, ou gauches (ni parallèles ni sécantes).',
          'Equation de plan : $ax+by+cz+d=0$, vecteur normal $\\vec{n}(a;b;c)$.',
          'Droite parallèle à un plan : vecteur directeur orthogonal à $\\vec{n}$.',
          'Droite perpendiculaire à un plan : vecteur directeur colinéaire à $\\vec{n}$.'
        ]
      },
      formulas: [
        'Plan : $ax+by+cz+d=0$, $\\vec{n}(a;b;c)$ normal',
        '$\\vec{u}\\cdot\\vec{v}=x_ux_v+y_uy_v+z_uz_v$',
        '$\\vec{u}\\perp\\vec{v} \\Leftrightarrow \\vec{u}\\cdot\\vec{v}=0$',
        '$\\|\\vec{u}\\|=\\sqrt{x^2+y^2+z^2}$'
      ],
      piege: 'En 3D, deux droites non parallèles peuvent être gauches (elles ne se croisent pas). Vérifier l\'intersection explicitement avant de conclure qu\'elles sont sécantes.'
    },
    quiz: [
      { q: 'Dans l\'espace, deux droites non parallèles se croisent forcément. Cette affirmation est :', options: ['FAUSSE : deux droites non parallèles peuvent être "gauches" (ni parallèles ni sécantes, elles passent l\'une au-dessus de l\'autre)', 'Vraie : si deux droites ne sont pas parallèles, elles ont forcément un point commun', 'Vraie seulement si les deux droites sont dans le même plan', 'Vraie en 3D, fausse en 2D'], answer: 0, correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles ne sont pas parallèles (directions distinctes) mais ne se croisent pas non plus. Exemple simple : l\'axe $x$ ($z=0$, $y=0$) et la droite $y=1$, $z=1$ ont des directions distinctes mais ne se rencontrent jamais. En 2D, ce cas n\'existe pas car deux droites non parallèles se croisent toujours en un point.' },
      { q: '$\\vec{u}(1;2;-1)\\cdot\\vec{v}(2;-1;0)=$ ?', options: ['$0$', '$3$', '$-3$', '$1$'], answer: 0, correction: '$1\\times2+2\\times(-1)+(-1)\\times0=2-2+0=0$. Les vecteurs sont orthogonaux !' },
      { q: 'La norme de $\\vec{u}(3;0;4)$ est :', options: ['$7$', '$5$', '$25$', '$\\sqrt{7}$'], answer: 1, correction: '$\\|\\vec{u}\\|=\\sqrt{9+0+16}=\\sqrt{25}=5$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const x = rand(-3, 3), y = rand(-3, 3), z = rand(-3, 3);
        const norm = parseFloat(Math.sqrt(x*x+y*y+z*z).toFixed(4));
        return {
          statement: `Calculer la norme du vecteur $\\vec{u}(${x};${y};${z})$. Arrondir à $0{,}01$.`,
          answer: parseFloat(norm.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: `$\\|\\vec{u}\\|=\\sqrt{${x}^2+${y}^2+${z}^2}$`,
          solution: [`$\\|\\vec{u}\\|=\\sqrt{${x*x}+${y*y}+${z*z}}=\\sqrt{${x*x+y*y+z*z}}\\approx${norm}$`]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé de l\'espace, on donne $A(1;0;0)$, $B(0;2;0)$, $C(0;0;3)$.',
      tasks: [
        'Donner les vecteurs $\\vec{AB}$ et $\\vec{AC}$.',
        'Calculer $\\vec{AB}\\cdot\\vec{AC}$.',
        'Déterminer l\'équation du plan $ABC$ sachant que le vecteur normal est $\\vec{n}(6;3;2)$ (admis).'
      ],
      solutions: [
        '$\\vec{AB}(-1;2;0)$ ; $\\vec{AC}(-1;0;3)$.',
        '$\\vec{AB}\\cdot\\vec{AC}=(-1)(-1)+(2)(0)+(0)(3)=1$.',
        'Plan contenant $A(1;0;0)$, normal $\\vec{n}(6;3;2)$ : $6(x-1)+3(y-0)+2(z-0)=0 \\Rightarrow 6x+3y+2z=6$.'
      ],
      finalAnswer: '$\\vec{AB}\\cdot\\vec{AC}=1$ ; équation du plan : $6x+3y+2z=6$.'
    },

    evaluation: {
      title: 'Évaluation — Géométrie dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $A(2;1;-1)$ et $B(4;-1;3)$. Calculer la norme du vecteur $\\vec{AB}$.',
          type: 'numeric',
          answer: 4.90,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: '$\\vec{AB}(2;-2;4)$. $\\|\\vec{AB}\\| = \\sqrt{4+4+16} = \\sqrt{24} = 2\\sqrt{6} \\approx 4{,}90$.'
        },
        {
          statement: 'Deux droites de l\'espace ont des vecteurs directeurs non colinéaires. Peut-on conclure qu\'elles sont sécantes ?',
          type: 'multiple-choice',
          options: ['Oui, deux droites non parallèles se croisent toujours', 'Non, elles pourraient être gauches (ni parallèles ni sécantes)', 'Oui, si elles ne sont pas parallèles, elles ont un point commun', 'Non, mais elles sont forcément perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'En 3D, deux droites non parallèles peuvent être GAUCHES : elles n\'ont pas de point d\'intersection bien qu\'elles ne soient pas parallèles. Il faut résoudre le système pour vérifier l\'existence d\'un point commun.'
        },
        {
          statement: 'Calculer $\\vec{u}(1;3;-2)\\cdot\\vec{v}(2;-1;4)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 2 + 3 \\times (-1) + (-2) \\times 4 = 2 - 3 - 8 = -9$.'
        },
        {
          statement: 'L\'équation du plan passant par $A(1;0;0)$ de vecteur normal $\\vec{n}(2;3;-1)$ est :',
          type: 'multiple-choice',
          options: ['$2x+3y-z-2=0$', '$2x+3y-z+2=0$', '$x+y+z-1=0$', '$2x+3y-z=0$'],
          answer: 0,
          points: 2,
          correction: 'Plan : $2(x-1)+3(y-0)+(-1)(z-0)=0$, soit $2x-2+3y-z=0$, d\'où $2x+3y-z-2=0$.'
        },
        {
          statement: 'Soit $\\vec{u}(a;1;2)$ et $\\vec{v}(3;-6;a)$. Trouver la valeur de $a$ pour que $\\vec{u} \\perp \\vec{v}$.',
          type: 'numeric',
          answer: 1.2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 3a + 1 \\times (-6) + 2a = 3a - 6 + 2a = 5a - 6 = 0$. Donc $a = \\dfrac{6}{5} = 1{,}2$.'
        }
      ]
    }
  },

    {
    id: 'tle-orthogonalite-espace',
    level: 2, subject: 'maths',
    icon: '⊥',
    title: 'Orthogonalité dans l\'espace',
    subtitle: 'Perpendiculaire, distance, produit scalaire 3D',
    keywords: ['Orthogonalité', 'Produit scalaire', 'Distance', 'Perpendiculaire', 'Projection'],
    physics: true,
    cours: {
      intro: 'L\'orthogonalité en 3D se teste toujours par le produit scalaire : $\\vec{u} \\perp \\vec{v} \\Leftrightarrow \\vec{u} \\cdot \\vec{v} = 0$. La formule de distance d\'un point $M(x_0;y_0;z_0)$ au plan $ax+by+cz+d=0$ est $d = |ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$. Le numérateur est en VALEUR ABSOLUE car une distance est toujours positive — même si $M$ est du "mauvais côté" du plan (le signe du numérateur indique de quel côté se trouve $M$, mais la distance reste positive). Intuition : la formule projette le vecteur $\\overrightarrow{HM}$ (où $H$ est le pied de la perpendiculaire) sur le vecteur normal unitaire.',
      method: {
        title: 'Distance d\'un point à un plan',
        steps: [
          'Plan $\\mathcal{P}$ : $ax+by+cz+d=0$, point $M(x_0;y_0;z_0)$.',
          'Distance : $d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$.',
          'Droite $\\perp$ à un plan $\\Leftrightarrow$ son vecteur directeur est colinéaire au vecteur normal du plan.',
          'Deux plans $\\perp$ $\\Leftrightarrow$ leurs vecteurs normaux sont $\\perp$ ($\\vec{n_1}\\cdot\\vec{n_2}=0$).'
        ]
      },
      formulas: [
        '$d(M;\\mathcal{P})=\\dfrac{|ax_0+by_0+cz_0+d|}{\\sqrt{a^2+b^2+c^2}}$',
        'Plans $\\perp$ : $\\vec{n_1}\\cdot\\vec{n_2}=0$',
        'Droite $\\perp$ plan : $\\vec{u}=k\\vec{n}$'
      ],
      piege: 'La distance d\'un point à un plan se calcule avec la valeur absolue au numérateur. Ne pas oublier le $|\\cdots|$ !'
    },
    quiz: [
      { q: 'Pour calculer la distance de $A(1;2;-1)$ au plan $x+y+z-6=0$, un élève obtient $\\dfrac{1+2-1-6}{\\sqrt{3}}=\\dfrac{-4}{\\sqrt{3}}$. Quelle est son erreur ?', options: ['La distance est toujours positive : il faut la valeur absolue. $d=\\dfrac{|-4|}{\\sqrt{3}}=\\dfrac{4}{\\sqrt{3}}\\approx2{,}31$', 'L\'élève a raison : une distance négative indique que $A$ est de l\'autre côté du plan', 'Le dénominateur devrait être $\\sqrt{1^2+1^2+1^2}=3$, pas $\\sqrt{3}$', 'Le numérateur devrait être $1+2+(-1)-6=-4$ donc $d=-4$'], answer: 0, correction: 'Une distance est toujours une longueur, donc toujours POSITIVE. La formule est $d=|ax_0+by_0+cz_0+d|/\\sqrt{a^2+b^2+c^2}$. Ici $|1+2-1-6|=|-4|=4$ et $\\sqrt{1+1+1}=\\sqrt{3}$, donc $d=4/\\sqrt{3}\\approx2{,}31$. Le signe négatif du numérateur ($-4$) indique seulement que $A$ est du côté "négatif" du plan — pas que la distance est négative.' },
      { q: 'La distance du point $O(0;0;0)$ au plan $x+y+z-3=0$ est :', options: ['$3$', '$\\sqrt{3}$', '$1$', '$3\\sqrt{3}$'], answer: 1, correction: '$d=\\frac{|0+0+0-3|}{\\sqrt{1+1+1}}=\\frac{3}{\\sqrt{3}}=\\sqrt{3}$.' },
      { q: 'Une droite de vecteur directeur $\\vec{u}(1;2;3)$ est-elle perpendiculaire au plan de normale $\\vec{n}(2;4;6)$ ?', options: ['Non', 'Oui, car $\\vec{u}$ et $\\vec{n}$ sont colinéaires', 'Oui, car $\\vec{u}\\cdot\\vec{n}=0$', 'Impossible à dire'], answer: 1, correction: '$\\vec{n}=2\\vec{u}$ : colinéaires, donc la droite est perpendiculaire au plan.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 3), b = rand(1, 3), c = rand(1, 3);
        const d = rand(-5, -1);
        const x0 = 0, y0 = 0, z0 = 0;
        const num = Math.abs(a*x0 + b*y0 + c*z0 + d);
        const denom = parseFloat(Math.sqrt(a*a+b*b+c*c).toFixed(4));
        const dist = parseFloat((num/denom).toFixed(4));
        return {
          statement: `Calculer la distance de $O(0;0;0)$ au plan $${a}x+${b}y+${c}z${d}=0$. Arrondir à $0{,}01$.`,
          answer: parseFloat(dist.toFixed(2)),
          tolerance: 0.05,
          unit: 'unités',
          hint: `$d=\\frac{|${a}\\cdot0+${b}\\cdot0+${c}\\cdot0${d}|}{\\sqrt{${a}^2+${b}^2+${c}^2}}$`,
          solution: [
            `$d=\\frac{|${d}|}{\\sqrt{${a*a+b*b+c*c}}}=\\frac{${Math.abs(d)}}{\\sqrt{${a*a+b*b+c*c}}}\\approx${dist}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Dans le repère orthonormé, on considère le plan $\\mathcal{P}$ d\'équation $2x+y-2z+3=0$ et le point $A(1;1;1)$.',
      tasks: [
        'Donner le vecteur normal à $\\mathcal{P}$.',
        'Calculer la distance de $A$ à $\\mathcal{P}$.',
        'Écrire une équation paramétrique de la droite passant par $A$ et perpendiculaire à $\\mathcal{P}$.'
      ],
      solutions: [
        '$\\vec{n}(2;1;-2)$.',
        '$d=\\frac{|2\\times1+1\\times1-2\\times1+3|}{\\sqrt{4+1+4}}=\\frac{|4|}{3}=\\frac{4}{3}$.',
        'Droite : $(x;y;z)=(1;1;1)+t(2;1;-2)$, soit $x=1+2t$, $y=1+t$, $z=1-2t$.'
      ],
      finalAnswer: '$d(A;\\mathcal{P})=\\frac{4}{3}$. Droite perpendiculaire : $(1+2t;1+t;1-2t)$.'
    },

    evaluation: {
      title: 'Évaluation — Orthogonalité dans l\'espace',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer le produit scalaire $\\vec{u}(2;-3;1) \\cdot \\vec{v}(4;2;-5)$.',
          type: 'numeric',
          answer: -3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 2 \\times 4 + (-3) \\times 2 + 1 \\times (-5) = 8 - 6 - 5 = -3$.'
        },
        {
          statement: 'Les vecteurs $\\vec{u}(1;-2;3)$ et $\\vec{v}(6;0;-2)$ sont-ils orthogonaux ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u}\\cdot\\vec{v}=0$', 'Non, car $\\vec{u}\\cdot\\vec{v}=12$', 'Non, car $\\vec{u}\\cdot\\vec{v}=-12$', 'Oui, car $\\vec{u}\\cdot\\vec{v}=6$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u}\\cdot\\vec{v} = 1 \\times 6 + (-2) \\times 0 + 3 \\times (-2) = 6 + 0 - 6 = 0$. Donc $\\vec{u} \\perp \\vec{v}$.'
        },
        {
          statement: 'Calculer la distance du point $M(1;-1;2)$ au plan $2x - y + 2z - 1 = 0$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$d = \\dfrac{|2 \\times 1 + (-1)\\times(-1) + 2 \\times 2 - 1|}{\\sqrt{4+1+4}} = \\dfrac{|2+1+4-1|}{\\sqrt{9}} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Une droite de vecteur directeur $\\vec{u}(3;-6;9)$ est-elle perpendiculaire au plan de vecteur normal $\\vec{n}(1;-2;3)$ ?',
          type: 'multiple-choice',
          options: ['Oui, car $\\vec{u} = 3\\vec{n}$ (colinéaires)', 'Non, car $\\vec{u} \\cdot \\vec{n} = 0$', 'Non, car les coordonnées sont différentes', 'Oui, car $\\vec{u} \\cdot \\vec{n} \\neq 0$'],
          answer: 0,
          points: 2,
          correction: '$\\vec{u} = (3;-6;9) = 3 \\times (1;-2;3) = 3\\vec{n}$. Les vecteurs sont colinéaires, donc la droite est perpendiculaire au plan.'
        },
        {
          statement: 'Les plans $\\mathcal{P}_1 : x + 2y - z + 1 = 0$ et $\\mathcal{P}_2 : 2x - y + 2z - 3 = 0$ sont-ils perpendiculaires ?',
          type: 'multiple-choice',
          options: ['Non, car $\\vec{n_1}\\cdot\\vec{n_2} = 2 \\neq 0$', 'Non, car $\\vec{n_1}\\cdot\\vec{n_2} = -2 \\neq 0$', 'Oui, car $\\vec{n_1}\\cdot\\vec{n_2} = 0$', 'Oui, car les plans ne sont pas parallèles'],
          answer: 1,
          points: 2,
          correction: '$\\vec{n_1}(1;2;-1)$, $\\vec{n_2}(2;-1;2)$. $\\vec{n_1}\\cdot\\vec{n_2} = 1 \\times 2 + 2 \\times (-1) + (-1) \\times 2 = 2 - 2 - 2 = -2 \\neq 0$. Les plans ne sont PAS perpendiculaires.'
        }
      ]
    }
  }

);
