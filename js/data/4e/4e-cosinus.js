window.MODULES.push(
    id: '4e-cosinus',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Cosinus d\'un angle aigu',
    subtitle: 'cos = adjacent / hypoténuse',
    keywords: ['Cosinus', 'Angle aigu', 'Triangle rectangle', 'Adjacent', 'Hypoténuse'],
    physics: true,
    cours: {
      intro: 'Dans un triangle rectangle, le cosinus d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.' +
        '<br/><br/>' +
      'L\'idée clé est que tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est toujours identique, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$ : $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit).' +
        '<br/><br/>' +
        'Attention : le côté « adjacent » dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'hypoténuse ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.' +
        '<br/><br/>' +
        'En physique, le cosinus intervient dans la décomposition de forces, le travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), et l\'optique (loi de Snell-Descartes).',
      definitions: [
        { term: 'Cosinus d\'un angle aigu', def: 'Rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
        { term: 'Côté adjacent', def: 'Côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
        { term: 'Hypoténuse', def: 'Plus grand côté du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans le cosinus.' },
        { term: 'Arc cosinus ($\\arccos$)', def: 'Fonction inverse du cosinus : si $\\cos(\\hat{A}) = k$, alors $\\hat{A} = \\arccos(k)$. Permet de retrouver un angle à partir d\'un rapport.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier l\'angle et les côtés</strong> : l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit) et le côté adjacent (côté de l\'angle, autre que l\'hypoténuse). <strong>Exemple :</strong> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
          '<strong>Appliquer</strong> : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$. <strong>Exemple :</strong> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
          '<strong>Trouver un côté inconnu</strong> : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$ ou $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$. <strong>Exemple :</strong> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
        ]
      },
      example: {
        statement: 'Une échelle de $5$ m est posée contre un mur en formant un angle de $60°$ avec le sol. À quelle distance du mur se trouve le pied de l\'échelle ?',
        steps: [
          'L\'échelle forme l\'hypoténuse d\'un triangle rectangle. L\'angle au sol est $60°$ et le côté adjacent est la distance au mur.',
          '$\\cos(60°) = \\dfrac{\\text{distance au mur}}{\\text{échelle}} = \\dfrac{d}{5}$.',
          '$d = 5 \\times \\cos(60°) = 5 \\times 0{,}5 = 2{,}5$ m.'
        ],
        answer: 'Le pied de l\'échelle est à $2{,}5$ m du mur.'
      },
      formulas: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$',
        '$\\cos(0°) = 1$, $\\cos(30°) = \\frac{\\sqrt{3}}{2}$, $\\cos(45°) = \\frac{\\sqrt{2}}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\cos(90°) = 0$',
        'Pour trouver l\'angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Angle</th><th style="border:1px solid var(--border);padding:6px 14px">$\\cos$</th><th style="border:1px solid var(--border);padding:6px 14px">Valeur approchée</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$0°$</td><td style="border:1px solid var(--border);padding:6px 14px">$1$</td><td style="border:1px solid var(--border);padding:6px 14px">$1$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$30°$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\frac{\\sqrt{3}}{2}$</td><td style="border:1px solid var(--border);padding:6px 14px">$0{,}866$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$45°$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\frac{\\sqrt{2}}{2}$</td><td style="border:1px solid var(--border);padding:6px 14px">$0{,}707$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$60°$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\frac{1}{2}$</td><td style="border:1px solid var(--border);padding:6px 14px">$0{,}5$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$90°$</td><td style="border:1px solid var(--border);padding:6px 14px">$0$</td><td style="border:1px solid var(--border);padding:6px 14px">$0$</td></tr></table>',
      recap: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours compris entre $0$ et $1$.',
        'Le côté adjacent change selon l\'angle considéré : c\'est le côté qui touche l\'angle (sans être l\'hypoténuse).',
        'Pour trouver un côté : adj $= $ hyp $\\times \\cos(\\hat{A})$ ; pour trouver un angle : $\\hat{A} = \\arccos\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$.',
        'Valeurs clés : $\\cos(0°) = 1$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$.'
      ],
      piege: 'Piège : le côté adjacent change selon l\'angle considéré. Pour l\'angle $\\hat{A}$, l\'adjacent est le côté qui « touche » $\\hat{A}$ (autre que l\'hypoténuse). Ne pas confondre avec le côté opposé.'
    },
    quiz: [
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm et $AC = 6$ cm. Quel est $\\cos(\\hat{A})$ ?',
        options: ['$0{,}6$', '$0{,}8$', '$0{,}75$', '$1{,}67$'],
        answer: 0,
        correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{AC}{AB} = \\dfrac{6}{10} = 0{,}6$.'
      },
      {
        q: 'Dans un triangle rectangle, un angle aigu mesure $60°$. L\'hypoténuse vaut $14$ cm. Quel est le côté adjacent ?',
        options: ['$7$ cm', '$12{,}12$ cm', '$7{,}27$ cm', '$28$ cm'],
        answer: 0,
        correction: '$\\text{adj} = \\text{hyp} \\times \\cos(60°) = 14 \\times 0{,}5 = 7$ cm.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm, $BC = 6$ cm, $AC = 8$ cm, un élève écrit : $\\cos(\\hat{A}) = \\dfrac{BC}{AB} = 0{,}6$. Quelle est son erreur ?',
        options: [
          'Il a confondu côté adjacent et côté opposé : $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = 0{,}8$',
          'Il a mal identifié l\'hypoténuse : ce n\'est pas $AB$',
          'Le résultat $0{,}6$ est correct, il n\'y a pas d\'erreur',
          'Il aurait dû diviser $AB$ par $BC$'
        ],
        answer: 0,
        correction: 'Pour l\'angle $\\hat{A}$, le côté adjacent est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$ (qui est le côté opposé à $\\hat{A}$). Donc $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$, pas $0{,}6$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const angles = [{a:30, cos:0.866},{a:45, cos:0.707},{a:60, cos:0.5}];
        const {a, cos} = pick(angles);
        const hyp = rand(5, 20);
        const adj = parseFloat((hyp * cos).toFixed(1));
        const scenario = pick([
          { emoji: '📐', statement: `Dans un triangle rectangle, un angle mesure $${a}°$ et l'hypoténuse vaut $${hyp}$ cm. Calcule le côté adjacent (en cm, arrondi à $0{,}1$).` },
          { emoji: '🪜', statement: `Une échelle de $${hyp}$ m est appuyée contre un mur et forme un angle de $${a}°$ avec le sol. À quelle distance du mur se trouve le pied de l'échelle (en m, arrondi à $0{,}1$) ? <br/><em>Indication : le côté adjacent = hypoténuse $\\times \\cos(${a}°)$.</em>` },
          { emoji: '⛷️', statement: `Une piste de ski mesure $${hyp}$ m de long et fait un angle de $${a}°$ avec l'horizontale. Quelle est la distance horizontale parcourue (en m, arrondi à $0{,}1$) ?` },
          { emoji: '🏠', statement: `Le toit d'une maison a une pente qui forme un angle de $${a}°$ avec l'horizontale. La longueur du pan de toit est $${hyp}$ m. Quelle est la largeur horizontale couverte (en m, arrondi à $0{,}1$) ?` },
          { emoji: '🔌', statement: `Un câble tendu de $${hyp}$ m relie un poteau au sol en formant un angle de $${a}°$ avec le sol. À quelle distance horizontale du poteau est fixé le câble (en m, arrondi à $0{,}1$) ?` },
          { emoji: '♿', statement: `Une rampe d'accès mesure $${hyp}$ m de long et forme un angle de $${a}°$ avec le sol. Quelle longueur horizontale la rampe couvre-t-elle (en m, arrondi à $0{,}1$) ?` }
        ]);
        return {
          statement: `${scenario.emoji} ${scenario.statement}`,
          answer: adj,
          tolerance: 0.2,
          unit: scenario.emoji === '📐' ? 'cm' : 'm',
          hint: `$\\text{côté adjacent} = \\text{hypoténuse} \\times \\cos(${a}°) = ${hyp} \\times ${cos}$.`,
          solution: [`$\\text{adj} = ${hyp} \\times \\cos(${a}°) = ${hyp} \\times ${cos} = ${adj}$ ${scenario.emoji === '📐' ? 'cm' : 'm'}.`]
        };
      }
    },
    probleme: {
      context: 'Une rampe d\'accès pour personnes à mobilité réduite forme un angle de $5°$ avec le sol horizontal. La longueur de la rampe est $4$ m ($\\cos 5° \\approx 0{,}996$).',
      tasks: [
        'Calculer la longueur horizontale couverte par la rampe.',
        'La hauteur de la marche surmontée est $h$. Sachant que $\\sin 5° \\approx 0{,}087$, calculer $h$.',
        'La norme impose un angle $\\leq 5°$ pour $h = 18$ cm. Quelle longueur minimale de rampe faut-il ?'
      ],
      solutions: [
        '$\\text{adj} = 4 \\times \\cos(5°) \\approx 4 \\times 0{,}996 = 3{,}98$ m.',
        '$h = 4 \\times \\sin(5°) \\approx 4 \\times 0{,}087 = 0{,}35$ m $= 35$ cm.',
        '$\\sin(5°) = \\frac{0{,}18}{L} \\Rightarrow L = \\frac{0{,}18}{0{,}087} \\approx 2{,}07$ m.'
      ],
      finalAnswer: 'La rampe couvre $\\approx 3{,}98$ m horizontalement ; pour $18$ cm de hauteur il faut au moins $\\approx 2{,}07$ m de rampe.'
    },

    evaluation: {
      title: 'Évaluation — Cosinus d\'un angle aigu',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 13\\,\\text{cm}$ et $AC = 5\\,\\text{cm}$, calculer $\\cos(\\hat{A})$. Donner le résultat décimal arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{AC}{AB} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        {
          statement: 'Un triangle rectangle a un angle de $45°$ et une hypoténuse de $10\\,\\text{cm}$. Calculer le côté adjacent (en cm, arrondi à $0{,}1$). On donne $\\cos(45°) \\approx 0{,}707$.',
          type: 'numeric',
          answer: 7.07,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(45°) = 10 \\times 0{,}707 = 7{,}07\\,\\text{cm}$.'
        },
        {
          statement: 'Dans un triangle rectangle, $\\cos(\\hat{A}) = 0{,}6$ et l\'hypoténuse vaut $15\\,\\text{cm}$. Que vaut le côté adjacent à $\\hat{A}$ ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(\\hat{A}) = 15 \\times 0{,}6 = 9\\,\\text{cm}$.'
        },
        {
          statement: 'Un élève écrit $\\cos(\\hat{B}) = \\dfrac{\\text{hypoténuse}}{\\text{adjacent}}$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur',
            'Il a inversé le rapport : le cosinus est $\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
            'Le cosinus utilise le côté opposé, pas l\'adjacent',
            'Le cosinus n\'existe que pour l\'angle de $90°$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le cosinus d\'un angle aigu est $\\cos(\\hat{B}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$. L\'élève a inversé numérateur et dénominateur. Le rapport $\\dfrac{\\text{hyp}}{\\text{adj}}$ est toujours $\\geq 1$, ce qui est impossible pour un cosinus d\'angle aigu.'
        },
        {
          statement: 'Sachant que $\\cos(60°) = 0{,}5$, quelle est la mesure de l\'angle $\\hat{A}$ dans un triangle rectangle si $\\cos(\\hat{A}) = 0{,}5$ ?',
          type: 'numeric',
          answer: 60,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\cos(\\hat{A}) = 0{,}5 = \\cos(60°)$, donc $\\hat{A} = 60°$.'
        }
      ]
    }
  },

    {
);
