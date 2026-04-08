/* =========================================================
   Spark Learning – data/lycee-tle/tle-suites-complements.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-suites-complements',
    level: 2, subject: 'maths',
    icon: '🔗',
    title: 'Suites — compléments',
    subtitle: 'Récurrence, limites, raisonnement par récurrence',
    keywords: ['Suite', 'Récurrence', 'Limite', 'Raisonnement par récurrence', 'Monotonie'],
    physics: false,
    cours: {
      intro: 'Le <strong>raisonnement par récurrence</strong> est une "échelle infinie" : si le premier barreau tient (initialisation au rang $n_0$) ET si chaque barreau tient le suivant (hérédité : rang $n$ → rang $n+1$), alors toute l\'échelle est solide.<br/><br/>Les deux étapes sont indispensables : l\'hérédité seule ne suffit pas (on ne monterait pas l\'échelle si le premier barreau est absent).<br/><br/>Dans l\'hérédité, on <strong>SUPPOSE</strong> la propriété vraie au rang $n$ — c\'est l\'hypothèse de récurrence, on ne la démontre pas, on l\'utilise.<br/><br/>Pour les suites définies par $u_{n+1}=f(u_n)$, si la suite converge vers $\\ell$, alors $\\ell$ est un <strong>point fixe</strong> : $\\ell = f(\\ell)$.<br/><br/>Attention : résoudre $\\ell = f(\\ell)$ donne les candidats, mais la convergence doit être prouvée séparément (monotonie + bornage).',
      definitions: [
        { term: 'Raisonnement par récurrence', def: 'Méthode de démonstration en deux étapes : <strong>initialisation</strong> (vérifier $P(n_0)$) et <strong>hérédité</strong> (prouver que $P(n) \\Rightarrow P(n+1)$). Conclusion : la propriété est vraie pour tout $n \\geq n_0$.' },
        { term: 'Suite convergente', def: 'Suite $(u_n)$ telle que $\\lim_{n \\to +\\infty} u_n = \\ell \\in \\mathbb{R}$. Théorème fondamental : toute suite <strong>croissante majorée</strong> (ou décroissante minorée) converge.' },
        { term: 'Point fixe', def: 'Si $(u_n)$ converge vers $\\ell$ et $u_{n+1} = f(u_n)$ avec $f$ continue, alors $\\ell = f(\\ell)$. Résoudre cette équation donne les <strong>candidats</strong> à la limite.' },
        { term: 'Suite auxiliaire', def: 'Pour étudier $u_{n+1} = au_n + b$, on pose $v_n = u_n - \\ell$ (avec $\\ell$ point fixe). Alors $(v_n)$ est géométrique de raison $a$, ce qui permet de trouver $u_n$ explicitement.' }
      ],
      method: {
        title: 'Raisonnement par récurrence',
        steps: [
          '<strong>Initialisation</strong> : vérifier la propriété pour le rang de départ (souvent $n=0$ ou $n=1$).',
          '<strong>Hérédité</strong> : supposer la propriété vraie au rang $n$ et montrer qu\'elle est vraie au rang $n+1$.',
          '<strong>Conclusion</strong> : par le principe de récurrence, la propriété est vraie pour tout $n$.',
          '<strong>Monotonie des suites</strong> : étudier le signe de $u_{n+1}-u_n$.'
        ]
      },
      example: {
        statement: 'Soit la suite définie par $u_0 = 5$ et $u_{n+1} = \\dfrac{1}{2}u_n + 3$. Déterminer la limite de $(u_n)$.',
        steps: [
          'On cherche le point fixe : $\\ell = \\dfrac{1}{2}\\ell + 3 \\Rightarrow \\dfrac{1}{2}\\ell = 3 \\Rightarrow \\ell = 6$.',
          'On pose $v_n = u_n - 6$. Alors $v_{n+1} = u_{n+1} - 6 = \\dfrac{1}{2}u_n + 3 - 6 = \\dfrac{1}{2}(u_n - 6) = \\dfrac{1}{2}v_n$.',
          '$(v_n)$ est géométrique de raison $q = \\dfrac{1}{2}$ et de premier terme $v_0 = 5 - 6 = -1$.',
          '$v_n = -1 \\times \\left(\\dfrac{1}{2}\\right)^n$, donc $u_n = 6 - \\left(\\dfrac{1}{2}\\right)^n$.',
          'Comme $|q| = \\dfrac{1}{2} < 1$ : $v_n \\to 0$, donc $u_n \\to 6$.'
        ],
        answer: '$\\lim_{n \\to +\\infty} u_n = 6$. La suite est croissante (car $u_0 = 5 < 6 = \\ell$) et majorée par $6$.'
      },
      formulas: [
        'Suite arithmétique : $u_n = u_0 + nr$',
        'Suite géométrique : $u_n = u_0 \\cdot q^n$',
        '$\\lim_{n\\to+\\infty} q^n = 0$ si $|q|<1$',
        '$\\lim_{n\\to+\\infty} q^n = +\\infty$ si $q>1$'
      ],
      recap: [
        'Récurrence = initialisation + hérédité. Les deux étapes sont <strong>indispensables</strong>.',
        'Suite croissante et majorée → converge. Suite décroissante et minorée → converge. Théorème de la limite monotone.',
        'Si $u_{n+1} = f(u_n)$ converge vers $\\ell$, alors $\\ell = f(\\ell)$ (point fixe). Utiliser la suite auxiliaire $v_n = u_n - \\ell$ pour obtenir une suite géométrique.',
        '$|q| < 1 \\Rightarrow q^n \\to 0$, $q > 1 \\Rightarrow q^n \\to +\\infty$, $q = 1 \\Rightarrow q^n = 1$, $q \\leq -1 \\Rightarrow (q^n)$ diverge.'
      ],
      piege: 'L\'hérédité <strong>suppose</strong> la propriété au rang $n$ (hypothèse de récurrence) : elle ne se démontre pas, elle s\'utilise !<br/><br/>Ne pas confondre "supposer" et "montrer". L\'objectif de l\'hérédité est de prouver $P(n+1)$ en utilisant $P(n)$ comme hypothèse.'
    },
    quiz: [
      { q: 'Pour la suite géométrique $u_n=3\\times2^n$, $\\lim_{n\\to+\\infty}u_n=$ ?', options: ['$0$', '$3$', '$+\\infty$', '$6$'], answer: 2, correction: 'La raison est $q=2>1$, donc $2^n\\to+\\infty$ quand $n \\to +\\infty$.<br/><br/>Par conséquent $u_n = 3 \\times 2^n \\to +\\infty$. La suite diverge vers $+\\infty$.' },
      { q: 'Un élève veut prouver par récurrence que $u_n>0$ pour tout $n\\ge0$. Il prouve l\'hérédité (si $u_n>0$ alors $u_{n+1}>0$) mais oublie l\'initialisation. Sa démonstration est-elle valide ?', options: ['Non : sans initialisation, la chaîne n\'a pas de point de départ et la démonstration est invalide', 'Oui : si l\'hérédité est prouvée, la propriété est vraie pour tout $n$', 'Oui : l\'initialisation n\'est utile que si $u_0=0$', 'Cela dépend de $u_0$ : si $u_0>0$ est donné dans l\'énoncé, l\'initialisation est automatiquement satisfaite'], answer: 0, correction: 'Sans initialisation, la récurrence ne "démarre" pas.<br/><br/>L\'option D est séduisante : $u_0>0$ peut être donné dans l\'énoncé — mais l\'élève doit <strong>EXPLICITEMENT</strong> vérifier le cas de base dans sa démonstration.<br/><br/>Par analogie : l\'hérédité dit "si le barreau $n$ tient, le barreau $n+1$ tient" — mais si aucun barreau de départ n\'est posé, l\'argument ne prouve rien.' },
      { q: '$u_{n+1}-u_n>0$ pour tout $n$ signifie que la suite est :', options: ['Décroissante', 'Constante', 'Croissante', 'Nulle'], answer: 2, correction: '$u_{n+1}-u_n>0$ signifie $u_{n+1}>u_n$ pour tout $n$ : chaque terme est supérieur au précédent.<br/><br/>La suite est donc <strong>strictement croissante</strong>.' },
      { q: 'La suite $u_{n+1} = \\dfrac{u_n}{3} + 4$ converge vers $\\ell$. Que vaut $\\ell$ ?', options: ['$4$', '$6$', '$12$', '$3$'], answer: 1, correction: 'Si la suite converge vers $\\ell$, alors à la limite $u_{n+1} = u_n = \\ell$ :<br/><br/>$\\ell = \\dfrac{\\ell}{3} + 4 \\Rightarrow \\ell - \\dfrac{\\ell}{3} = 4 \\Rightarrow \\dfrac{2\\ell}{3} = 4 \\Rightarrow \\ell = 6$.' },
      { q: 'La suite $u_n = (-1)^n$ est-elle convergente ?', options: ['Oui, vers $0$ (la moyenne de $1$ et $-1$)', 'Oui, vers $1$', 'Non, elle oscille entre $1$ et $-1$ sans se stabiliser', 'Oui, vers $-1$'], answer: 2, correction: '$u_n$ alterne entre $1$ (rang pair) et $-1$ (rang impair) : elle ne se rapproche d\'aucune valeur fixe.<br/><br/>La suite <strong>diverge</strong>, mais elle est bornée. Cela montre qu\'une suite bornée n\'est pas forcément convergente !' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Chaque année, une entreprise augmente son capital de', unite: '€' },
          { intro: 'Un lac perd chaque mois une fraction de son volume d\'eau de', unite: 'L' },
          { intro: 'Une colonie de fourmis voit sa population multipliée par', unite: 'individus' },
          { intro: 'La concentration d\'un médicament dans le sang est divisée par', unite: 'mg/L' }
        ]);
        const u0 = rand(1, 8);
        const a = pick([2, 3, 4, 5]);
        const b = rand(1, 5);
        // u_{n+1} = u_n/a + b => l = ab/(a-1)
        const l = parseFloat((a * b / (a - 1)).toFixed(2));
        return {
          statement: `Soit la suite définie par $u_0 = ${u0}$ et $u_{n+1} = \\dfrac{u_n}{${a}} + ${b}$. Si cette suite converge, calculer sa limite $\\ell$. Arrondir à $0{,}01$.`,
          answer: l,
          tolerance: 0.05,
          unit: '',
          hint: `Si la suite converge vers $\\ell$, alors $\\ell = \\dfrac{\\ell}{${a}} + ${b}$. Résous cette équation.`,
          solution: [
            `$\\ell = \\dfrac{\\ell}{${a}} + ${b}$`,
            `$\\ell - \\dfrac{\\ell}{${a}} = ${b} \\Rightarrow \\dfrac{${a-1}\\ell}{${a}} = ${b}$`,
            `$\\ell = \\dfrac{${a} \\times ${b}}{${a-1}} = ${l}$`
          ]
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
          correction: 'On applique la formule du terme général d\'une suite géométrique :<br/><br/>$u_5 = u_0 \\times q^5 = 3 \\times (0{,}5)^5 = 3 \\times \\dfrac{1}{32} = \\dfrac{3}{32} = 0{,}09375$.'
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
  });
