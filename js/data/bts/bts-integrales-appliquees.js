/* =========================================================
   Spark Learning – data/bts/bts-integrales-appliquees.js
   Module : Intégrales Appliquées (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-integrales-appliquees',
    level: 3, subject: 'maths',
    icon: '∫',
    title: 'Primitives et calcul intégral appliqué',
    subtitle: 'Intégrales définies, aires, valeur moyenne',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Valeur moyenne', 'Intégration par parties'],
    physics: true,
    cours: {
      intro: 'L\'intégrale définie est l\'outil de l\'accumulation : distance = $\\int v\\,dt$, charge électrique = $\\int i\\,dt$, énergie = $\\int p\\,dt$, revenu cumulé = $\\int r(t)\\,dt$. Elle calcule une AIRE ALGÉBRIQUE : négative si $f < 0$. Pour l\'aire géométrique réelle (toujours positive), il faut découper l\'intervalle là où $f$ change de signe et prendre la valeur absolue de chaque morceau. La valeur moyenne $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$ est fondamentale en électronique AC : la valeur efficace (RMS) d\'un signal est $U_{eff} = \\sqrt{\\frac{1}{T}\\int_0^T u^2(t)\\,dt}$. L\'intégration par parties $\\int u\\,v\'\\,dx = [uv] - \\int u\'v\\,dx$ permet de traiter les produits $x e^x$, $x \\cos x$, etc.',
      definitions: [
        { term: 'Primitive $F$ de $f$', def: 'Fonction telle que $F\'(x) = f(x)$ sur un intervalle. Elle est unique à une constante près : si $F$ est une primitive, toute primitive s\'écrit $F + C$.' },
        { term: 'Intégrale définie $\\int_a^b f(x)\\,dx$', def: 'Aire algébrique entre la courbe $y = f(x)$, l\'axe $x$ et les droites $x = a$, $x = b$. Positive si $f \\geq 0$, négative si $f \\leq 0$.' },
        { term: 'Valeur moyenne $\\bar{f}$', def: 'Hauteur constante qui produirait la même aire : $\\bar{f} = \\frac{1}{b-a}\\int_a^b f(x)\\,dx$. En électronique, la valeur moyenne d\'un signal AC symétrique est nulle.' },
        { term: 'Intégration par parties (IPP)', def: 'Technique pour intégrer un produit : $\\int u \\cdot v\'\\,dx = [u \\cdot v] - \\int u\' \\cdot v\\,dx$. On choisit $u$ et $v\'$ de sorte que $\\int u\'v$ soit plus simple que l\'intégrale de départ.' }
      ],
      method: {
        title: 'Calculer une intégrale définie',
        steps: [
          '<strong>Recherche de la primitive</strong> : Trouver une primitive $F$ de $f$ (antidérivée : $F\'=f$). <strong>Exemple :</strong> $f(x) = 3x^2$ → $F(x) = x^3$ (car $(x^3)\' = 3x^2$).',
          '<strong>Calcul de l\'intégrale définie</strong> : Appliquer la formule : $\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b)-F(a)$. <strong>Exemple :</strong> $\\int_1^3 3x^2\\,dx = [x^3]_1^3 = 27 - 1 = 26$.',
          '<strong>Moyenne d\'une fonction</strong> : Valeur moyenne : $\\bar{f}=\\frac{1}{b-a}\\int_a^b f(x)\\,dx$. <strong>Exemple :</strong> $\\bar{f} = \\frac{26}{3-1} = 13$.',
          '<strong>Intégration par parties</strong> : Intégration par parties : $\\int u\\,v\'\\,dx = [uv]-\\int u\'\\,v\\,dx$. <strong>Exemple :</strong> $\\int_0^1 x e^x\\,dx$ : $u = x$, $v\' = e^x$ → $[xe^x]_0^1 - \\int_0^1 e^x\\,dx = e - (e - 1) = 1$.'
        ]
      },
      example: {
        statement: 'Le courant dans un circuit varie selon $i(t) = 2\\sin(100\\pi t)$ A pendant une demi-période ($t \\in [0 ; 0{,}01]$ s, soit $T/2 = 0{,}01$ s pour $f = 50$ Hz). Calculer la charge électrique $Q = \\int_0^{0{,}01} i(t)\\,dt$ transférée pendant cette demi-période.',
        steps: [
          'Primitive de $2\\sin(100\\pi t)$ : $F(t) = -\\frac{2}{100\\pi}\\cos(100\\pi t) = -\\frac{1}{50\\pi}\\cos(100\\pi t)$.',
          '$Q = \\left[-\\frac{1}{50\\pi}\\cos(100\\pi t)\\right]_0^{0{,}01}$.',
          '$Q = -\\frac{1}{50\\pi}\\cos(\\pi) - \\left(-\\frac{1}{50\\pi}\\cos(0)\\right)$.',
          '$Q = -\\frac{1}{50\\pi}(-1) + \\frac{1}{50\\pi}(1) = \\frac{1}{50\\pi} + \\frac{1}{50\\pi} = \\frac{2}{50\\pi} = \\frac{1}{25\\pi}$.',
          '$Q \\approx 0{,}0127$ C soit $12{,}7$ mC.'
        ],
        answer: '$Q = \\frac{1}{25\\pi} \\approx 12{,}7$ mC transférés pendant une demi-période.'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1}+C$ ($n\\ne-1$)',
        '$\\int e^x\\,dx = e^x+C$',
        '$\\int \\dfrac{1}{x}\\,dx = \\ln|x|+C$',
        '$\\bar{f}=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx$'
      ],
      recap: [
        'L\'intégrale définie calcule une aire ALGÉBRIQUE (peut être négative). Pour l\'aire géométrique, prendre $\\int |f(x)|\\,dx$.',
        'La formule fondamentale $\\int_a^b f\\,dx = F(b) - F(a)$ nécessite de connaître une primitive $F$.',
        'La valeur moyenne $\\bar{f} = \\frac{1}{b-a}\\int_a^b f\\,dx$ est la hauteur du rectangle de même aire sur le même intervalle.',
        'En physique : $\\int v\\,dt$ = distance, $\\int i\\,dt$ = charge, $\\int p\\,dt$ = énergie. L\'intégrale traduit toujours une accumulation.'
      ],
      piege: '$\\int_a^b f(x)\\,dx$ peut être négative si $f<0$ sur $[a;b]$. Pour l\'aire géométrique (positive), prendre la valeur absolue ou découper l\'intervalle.'
    },
    quiz: [
      { q: '$\\int_0^2 3x^2\\,dx=$', options: ['$6$', '$8$', '$12$', '$4$'], answer: 1, correction: '$[x^3]_0^2=8-0=8$.' },
      { q: 'La valeur moyenne de $f(x)=2x$ sur $[1;3]$ est :', options: ['$4$', '$2$', '$3$', '$6$'], answer: 0, correction: '$\\bar{f}=\\frac{1}{2}\\int_1^3 2x\\,dx=\\frac{1}{2}[x^2]_1^3=\\frac{1}{2}(9-1)=4$.' },
      { q: 'Pour calculer l\'aire entre $y=x^2-4$ et l\'axe des abscisses sur $[-2;2]$, un étudiant calcule $\\int_{-2}^{2}(x^2-4)\\,dx=-\\dfrac{32}{3}$. L\'AIRE géométrique est-elle $-32/3$ ?', options: ['Non : l\'intégrale est correcte ($-32/3$) mais l\'aire géométrique est toujours positive : $|{-32/3}|=32/3\\approx10{,}67$ unités²', 'Oui, l\'aire est $-32/3$ car la courbe est sous l\'axe', 'L\'intégrale est fausse ; le calcul correct donne $0$ par symétrie', 'L\'aire est $0$ car le signe positif et négatif s\'annulent'], answer: 0, correction: 'Sur $[-2;2]$, $x^2-4\\leq0$ (la parabole est sous l\'axe $x$). L\'intégrale donne bien $-32/3$ — la valeur ALGÉBRIQUE, qui peut être négative. Mais l\'aire géométrique (une surface, toujours positive) vaut $|-32/3|=32/3$. Pour obtenir l\'aire d\'une région où $f$ est négative : $\\text{Aire}=\\int_a^b|f(x)|\\,dx=-\\int_a^bf(x)\\,dx$ quand $f\\leq0$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(1, 4), b = rand(a+1, a+4), n = rand(1, 3);
        const Fb = Math.pow(b, n+1)/(n+1), Fa = Math.pow(a, n+1)/(n+1);
        const ans = parseFloat((Fb - Fa).toFixed(4));
        return {
          statement: `Calculer $\\int_{${a}}^{${b}} x^${n}\\,dx$.`,
          answer: parseFloat(ans.toFixed(2)),
          tolerance: 0.05,
          unit: '',
          hint: `$\\int x^${n}dx=\\frac{x^{${n+1}}}{${n+1}}$. Évaluer entre $${a}$ et $${b}$.`,
          solution: [
            `$\\left[\\dfrac{x^{${n+1}}}{${n+1}}\\right]_{${a}}^{${b}}=\\dfrac{${b}^{${n+1}}}{${n+1}}-\\dfrac{${a}^{${n+1}}}{${n+1}}=${ans}$`
          ]
        };
      }
    },
    probleme: {
      context: 'Le débit d\'eau dans un canal est $Q(t)=3t^2-12t+15$ (en m³/s, $t$ en h, $0\\le t\\le 4$).',
      tasks: [
        'Calculer le volume total d\'eau écoulé entre $t=0$ et $t=4$.',
        'Calculer la valeur moyenne du débit sur $[0;4]$.',
        'Sur quel intervalle le débit est-il minimal ?'
      ],
      solutions: [
        '$V=\\int_0^4(3t^2-12t+15)\\,dt=[t^3-6t^2+15t]_0^4=64-96+60=28$ m³.',
        '$\\bar{Q}=\\frac{28}{4}=7$ m³/s.',
        '$Q\'(t)=6t-12=0\\Rightarrow t=2$. $Q\'\'=6>0$ : minimum en $t=2$, $Q(2)=12-24+15=3$ m³/s.'
      ],
      finalAnswer: 'Volume écoulé : $28$ m³. Débit moyen : $7$ m³/s. Débit minimal : $3$ m³/s en $t=2$ h.'
    },

    evaluation: {
      title: 'Évaluation — Primitives et calcul intégral appliqué',
      duration: '40 min',
      questions: [
        {
          statement: 'Calculer $\\int_1^3 2x\\,dx$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$\\int_1^3 2x\\,dx = [x^2]_1^3 = 9 - 1 = 8$.'
        },
        {
          statement: 'La valeur moyenne de $f(x) = 6x^2$ sur $[0\\,;\\,2]$ est :',
          type: 'multiple-choice',
          options: ['$4$', '$8$', '$16$', '$24$'],
          answer: 1,
          points: 2,
          correction: '$\\bar{f} = \\dfrac{1}{2-0}\\int_0^2 6x^2\\,dx = \\dfrac{1}{2}[2x^3]_0^2 = \\dfrac{1}{2} \\times 16 = 8$.'
        },
        {
          statement: 'Calculer $\\int_0^1 e^{2x}\\,dx$ (arrondir à $0{,}01$). On donne $e^2 \\approx 7{,}389$.',
          type: 'numeric',
          answer: 3.19,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: '$\\int_0^1 e^{2x}\\,dx = \\left[\\dfrac{e^{2x}}{2}\\right]_0^1 = \\dfrac{e^2}{2} - \\dfrac{e^0}{2} = \\dfrac{7{,}389 - 1}{2} = \\dfrac{6{,}389}{2} \\approx 3{,}19$.'
        },
        {
          statement: '$\\int_a^b f(x)\\,dx$ peut être négative. Cela signifie que :',
          type: 'multiple-choice',
          options: ['Le calcul est faux', 'La fonction $f$ est négative sur tout $[a\\,;\\,b]$ ou la partie négative domine', 'L\'aire géométrique est négative', 'Les bornes sont inversées'],
          answer: 1,
          points: 1,
          correction: 'L\'intégrale définie calcule une aire ALGÉBRIQUE : les portions où $f < 0$ contribuent négativement. Si la partie négative domine, l\'intégrale totale est négative. L\'aire géométrique est toujours positive : $\\text{Aire} = \\int_a^b |f(x)|\\,dx$.'
        },
        {
          statement: 'Le courant dans un circuit varie selon $i(t) = 4t$ (en A) pour $t \\in [0\\,;\\,3]$ s. Calculer la charge totale $Q = \\int_0^3 i(t)\\,dt$ (en C).',
          type: 'numeric',
          answer: 18,
          tolerance: 0,
          unit: 'C',
          points: 2,
          correction: '$Q = \\int_0^3 4t\\,dt = [2t^2]_0^3 = 2 \\times 9 - 0 = 18$ C.'
        }
      ]
    }
  }
);
