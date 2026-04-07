/* =========================================================
   Spark Learning – data/lycee-tle/tle-primitives-integrales.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-primitives-integrales',
    level: 2, subject: 'maths',
    icon: '∫',
    title: 'Intégration et Primitives',
    subtitle: 'Intégrale définie, aire sous la courbe, primitives',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Conditions initiales'],
    physics: 'Calcul du travail d\'une force, équations horaires',

    cours: {
      intro: 'L\'<strong>intégrale</strong> est à la fois la "somme infinie de tranches infiniment minces" et l\'opération inverse de la dérivation.<br/><br/>$\\int_a^b f(x)\\,dx$ représente l\'<strong>aire signée</strong> entre la courbe et l\'axe des abscisses sur $[a;b]$ : positive si $f > 0$, négative si $f < 0$.<br/><br/>En physique : $\\int_{t_1}^{t_2} v(t)\\,dt$ est la distance parcourue, $\\int_0^d F(x)\\,dx$ est le travail d\'une force.<br/><br/>Pour trouver une <strong>primitive</strong> $F$ de $f$, on "remonte" les règles de dérivation : la primitive de $x^n$ est $x^{n+1}/(n+1)$ — on DIVISE par $n+1$, on ne multiplie pas.<br/><br/>L\'erreur classique : appliquer la règle de la dérivée (multiplier par l\'exposant) au lieu de la règle de la primitive (diviser par l\'exposant+1).',
      definitions: [
        { term: 'Primitive', def: 'Une fonction $F$ est une <strong>primitive</strong> de $f$ sur un intervalle $I$ si $F\'(x) = f(x)$ pour tout $x \\in I$. Deux primitives d\'une même fonction diffèrent d\'une constante : si $F$ est une primitive de $f$, toutes les primitives sont $F + C$ avec $C \\in \\mathbb{R}$.' },
        { term: 'Intégrale définie', def: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$ où $F$ est une primitive quelconque de $f$. C\'est l\'<strong>aire signée</strong> entre la courbe de $f$ et l\'axe des abscisses sur $[a;b]$.' },
        { term: 'Aire signée', def: 'L\'intégrale peut être négative si la courbe est SOUS l\'axe $Ox$. L\'aire géométrique (toujours positive) est $\\int_a^b |f(x)|\\,dx$.' },
        { term: 'Valeur moyenne', def: 'La valeur moyenne de $f$ sur $[a;b]$ est $\\mu = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx$. C\'est la hauteur du rectangle de même aire que la surface sous la courbe.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Trouver la primitive $F(x)$ telle que $F\'(x) = f(x)$. Règle clé : la primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$ (pour $n \\neq -1$).',
          'L\'intégrale définie : $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (le crochet).',
          'En physique, utiliser les conditions initiales pour fixer la constante d\'intégration $C$. Si $v(0) = v_0$, on en déduit $C$.'
        ]
      },
      example: {
        statement: 'Calculer l\'aire entre la courbe de $f(x) = x^2 - 1$ et l\'axe des abscisses sur $[0;2]$.',
        steps: [
          'On cherche la primitive de $f(x) = x^2 - 1$ : $F(x) = \\dfrac{x^3}{3} - x$.',
          'On calcule l\'intégrale : $\\int_0^2 (x^2 - 1)\\,dx = \\left[\\dfrac{x^3}{3} - x\\right]_0^2 = \\left(\\dfrac{8}{3} - 2\\right) - 0 = \\dfrac{2}{3}$.',
          'Attention : $f$ change de signe en $x = 1$. Sur $[0;1]$, $f < 0$ et sur $[1;2]$, $f > 0$.',
          'L\'aire géométrique est : $\\int_0^1 |f(x)|\\,dx + \\int_1^2 f(x)\\,dx = \\dfrac{4}{3} + \\dfrac{2}{3} - \\left(-\\dfrac{2}{3}\\right) = 2$.'
        ],
        answer: 'L\'intégrale vaut $\\dfrac{2}{3}$, mais l\'aire géométrique réelle est $2$ unités d\'aire (il faut tenir compte du changement de signe).'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (pour $n \\neq -1$)',
        '$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
        '$\\int e^x\\,dx = e^x + C$',
        '$\\int \\cos x\\,dx = \\sin x + C$'
      ],
      recap: [
        'La primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1} + C$ — on augmente l\'exposant de $1$ et on divise par le nouvel exposant.',
        'L\'intégrale définie $\\int_a^b f(x)\\,dx = F(b) - F(a)$ : le crochet évalue la primitive aux bornes.',
        'L\'intégrale est une aire SIGNÉE : si $f < 0$, la contribution est négative. Pour l\'aire géométrique, intégrer $|f|$.',
        'Ne jamais oublier la constante $+C$ pour une primitive indéfinie, et utiliser les conditions initiales pour la déterminer en physique.'
      ],
      piege: 'On divise par $(n+1)$, on ne multiplie pas ! La primitive de $3x^2$ est $\\dfrac{3x^3}{3} = x^3$, PAS $6x^3$.<br/><br/>Et n\'oublie jamais la constante $+C$ pour une primitive indéfinie !'
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
        correction: 'L\'élève a appliqué la règle de la <strong>DÉRIVÉE</strong> (multiplier par l\'exposant et baisser d\'un degré) au lieu de la règle de la <strong>PRIMITIVE</strong> (augmenter d\'un degré et diviser par le nouvel exposant).<br/><br/>La primitive de $5x^4$ est $\\frac{5x^{4+1}}{4+1} = \\frac{5x^5}{5} = x^5 + C$.<br/><br/>Vérification : $(x^5)\' = 5x^4$ ✓'
      },
      {
        q: 'Calculer $\\int_1^3 2x\\,dx$.',
        options: ['$4$', '$8$', '$6$', '$16$'],
        answer: 1,
        correction: 'La primitive de $2x$ est $x^2$.<br/><br/>On évalue aux bornes : $\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.'
      },
      {
        q: 'En physique, si $v(t) = at$ (accélération constante) et $x(0) = 0$, alors $x(t) = ?$',
        options: ['$x(t) = a$', '$x(t) = \\dfrac{a}{2}$', '$x(t) = at^2$', '$x(t) = \\dfrac{1}{2}at^2$'],
        answer: 3,
        correction: 'La position est la <strong>primitive de la vitesse</strong> : $x(t) = \\int v(t)\\,dt = \\int at\\,dt = \\dfrac{at^2}{2} + C$.<br/><br/>Avec la condition initiale $x(0) = 0$, on trouve $C = 0$.<br/><br/>Donc $x(t) = \\dfrac{1}{2}at^2$.'
      },
      {
        q: 'La valeur moyenne de $f(x) = 2x$ sur $[0;4]$ est :',
        options: ['$2$', '$4$', '$8$', '$16$'],
        answer: 1,
        correction: '$\\mu = \\dfrac{1}{4-0}\\int_0^4 2x\\,dx = \\dfrac{1}{4}[x^2]_0^4 = \\dfrac{16}{4} = 4$.<br/><br/>Intuitivement, la <strong>valeur moyenne</strong> est la hauteur du rectangle de même base et de même aire que la surface sous la courbe.'
      },
      {
        q: 'Un élève écrit : "$\\int_0^1 e^x\\,dx = [xe^x]_0^1 = e$". Quelle est son erreur ?',
        options: [
          'La primitive de $e^x$ est $e^x$ (et non $xe^x$). Le résultat correct est $[e^x]_0^1 = e - 1$',
          'L\'élève a raison, $\\int e^x\\,dx = xe^x + C$',
          'La primitive de $e^x$ est $e^{x+1}/(x+1) + C$',
          'L\'intégrale de $e^x$ n\'existe pas sur $[0;1]$'
        ],
        answer: 0,
        correction: 'La primitive de $e^x$ est $e^x + C$ (et non $xe^x$).<br/><br/>Donc $\\int_0^1 e^x\\,dx = [e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 1{,}718$.<br/><br/>L\'erreur vient d\'une confusion avec la règle $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ qui ne s\'applique pas à $e^x$. L\'exponentielle est sa propre primitive !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La vitesse d\'un mobile est', fLabel: 'v(t)', varName: 't', unit: 's', bLabel: 'm' },
          { intro: 'La puissance instantanée d\'une machine est', fLabel: 'P(t)', varName: 't', unit: 's', bLabel: 'J' },
          { intro: 'Le débit d\'eau d\'une fontaine est', fLabel: 'q(t)', varName: 't', unit: 'min', bLabel: 'L' },
          { intro: 'L\'intensité du courant dans un circuit est', fLabel: 'i(t)', varName: 't', unit: 's', bLabel: 'C' }
        ]);
        const a = rand(2, 6);
        const borneSup = rand(2, 4);
        // f(t) = a*t^2, integral from 0 to b = a*b^3/3
        const result = parseFloat((a * Math.pow(borneSup, 3) / 3).toFixed(2));
        return {
          statement: `${ctx.intro} $${ctx.fLabel} = ${a}${ctx.varName}^2$. Calculer $\\int_0^{${borneSup}} ${a}${ctx.varName}^2\\,d${ctx.varName}$. Arrondir à $0{,}01$.`,
          answer: result,
          tolerance: 0.05,
          unit: ctx.bLabel,
          hint: `La primitive de $${a}${ctx.varName}^2$ est $\\dfrac{${a}${ctx.varName}^3}{3}$. Applique le crochet : $\\left[\\dfrac{${a}${ctx.varName}^3}{3}\\right]_0^{${borneSup}}$.`,
          solution: [
            `Primitive de $${a}${ctx.varName}^2$ : $F(${ctx.varName}) = \\dfrac{${a}}{3}${ctx.varName}^3$`,
            `$\\int_0^{${borneSup}} ${a}${ctx.varName}^2\\,d${ctx.varName} = \\left[\\dfrac{${a}}{3}${ctx.varName}^3\\right]_0^{${borneSup}} = \\dfrac{${a}}{3} \\times ${Math.pow(borneSup, 3)} - 0$`,
            `$= \\dfrac{${a * Math.pow(borneSup, 3)}}{3} = ${result}$ ${ctx.bLabel}`
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
          correction: 'La primitive de $3x^2$ est $x^3$ (on divise le coefficient $3$ par le nouvel exposant $3$).<br/><br/>$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$.'
        },
        {
          statement: 'Quelle est la primitive de $f(x) = 4x^3 + 2x$ ?',
          type: 'multiple-choice',
          options: ['$12x^2 + 2 + C$', '$x^4 + x^2 + C$', '$4x^4 + 2x^2 + C$', '$x^4 + x + C$'],
          answer: 1,
          points: 2,
          correction: 'Primitive de $4x^3$ : $\\dfrac{4x^4}{4} = x^4$.<br/><br/>Primitive de $2x$ : $\\dfrac{2x^2}{2} = x^2$.<br/><br/>Donc $F(x) = x^4 + x^2 + C$.'
        },
        {
          statement: 'Calculer $\\int_1^4 \\dfrac{1}{\\sqrt{x}}\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On réécrit : $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$.<br/><br/>La primitive est $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$.<br/><br/>On évalue : $[2\\sqrt{x}]_1^4 = 2 \\times 2 - 2 \\times 1 = 4 - 2 = 2$.'
        },
        {
          statement: 'Si $v(t) = 6t$ (accélération constante $a = 6$ m/s²) et $x(0) = 5$ m, alors $x(t) = ?$',
          type: 'multiple-choice',
          options: ['$6t + 5$', '$3t^2$', '$3t^2 + 5$', '$6t^2 + 5$'],
          answer: 2,
          points: 2,
          correction: 'La position est la primitive de la vitesse : $x(t) = \\int 6t\\,dt = 3t^2 + C$.<br/><br/>On utilise la condition initiale pour trouver $C$ : $x(0) = 3 \\times 0 + C = 5$, donc $C = 5$.<br/><br/>Finalement, $x(t) = 3t^2 + 5$.'
        },
        {
          statement: 'Calculer $\\int_0^{\\pi} \\sin x\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La primitive de $\\sin x$ est $-\\cos x$.<br/><br/>$[-\\cos x]_0^{\\pi} = -\\cos(\\pi) - (-\\cos(0)) = -(-1) + 1 = 1 + 1 = 2$.'
        }
      ]
    }
  });
