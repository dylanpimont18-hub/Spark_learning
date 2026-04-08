/* =========================================================
   Spark Learning – data/lycee-1re/1re-trigonometrie.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
          '<strong>Conversion</strong> : $\\text{rad} = \\text{degrés} \\times \\dfrac{\\pi}{180}$.',
          '<strong>Valeurs remarquables</strong> : $0, \\frac{\\pi}{6}, \\frac{\\pi}{4}, \\frac{\\pi}{3}, \\frac{\\pi}{2}$.',
          '<strong>Périodicité</strong> : $\\cos(\\theta+2\\pi)=\\cos\\theta$, $\\sin(\\theta+2\\pi)=\\sin\\theta$.',
          '<strong>Parité</strong> : $\\cos(-\\theta)=\\cos\\theta$ (pair) ; $\\sin(-\\theta)=-\\sin\\theta$ (impair).'
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
  });
