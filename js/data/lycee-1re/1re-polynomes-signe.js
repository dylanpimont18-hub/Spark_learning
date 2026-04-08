/* =========================================================
   Spark Learning – data/lycee-1re/1re-polynomes-signe.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
          '<strong>Calculer le discriminant</strong> $\\Delta$ et les racines éventuelles $x_1 < x_2$.',
          '<strong>Si $\\Delta < 0$</strong> : le signe est celui de $a$ sur $\\mathbb{R}$ entier.',
          '<strong>Si $\\Delta = 0$</strong> : le signe est celui de $a$, sauf en $x_0$ où il est nul.',
          '<strong>Si $\\Delta > 0$</strong> : le trinôme est de signe opposé à $a$ entre $x_1$ et $x_2$, et de même signe que $a$ en dehors.'
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
  });
