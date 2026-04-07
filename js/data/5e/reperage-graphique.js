/* =========================================================
   Spark Learning – data/5e/reperage-graphique.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'reperage-graphique',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Repérage spatial et Lecture Graphique',
    subtitle: 'Repère cartésien, interpolation, extrapolation',
    keywords: ['Abscisse', 'Ordonnée', 'Graphique', 'Interpolation'],
    physics: 'Courbes d\'étalonnage, point d\'équivalence de titrage',

    cours: {
      intro: 'Un graphique traduit visuellement une relation entre deux grandeurs. L\'axe horizontal (<strong>abscisse</strong>) porte la variable que l\'on contrôle, l\'axe vertical (<strong>ordonnée</strong>) porte ce que l\'on observe.<br/><br/>' +
        '<strong>Interpoler</strong> signifie estimer une valeur entre deux points mesurés — c\'est fiable si la courbe est régulière. <strong>Extrapoler</strong> signifie prolonger au-delà des mesures — c\'est risqué car une courbe linéaire dans une plage peut devenir non linéaire ailleurs.<br/><br/>' +
        'La <strong>pente</strong> d\'une droite $a = \\dfrac{\\Delta y}{\\Delta x}$ a une signification physique : si $y$ = absorbance et $x$ = concentration, alors $a$ = coefficient d\'absorptivité molaire.<br/><br/>' +
        'Ne jamais lire un graphe sans vérifier les <strong>unités sur les axes</strong> et l\'origine. Un graphique sans légende est inutilisable !',
      definitions: [
        { term: 'Abscisse', def: 'Coordonnée horizontale d\'un point dans un repère. Première valeur du couple $(x ; y)$.' },
        { term: 'Ordonnée', def: 'Coordonnée verticale d\'un point dans un repère. Seconde valeur du couple $(x ; y)$.' },
        { term: 'Interpolation', def: 'Estimation d\'une valeur entre deux points de mesure connus. Fiable si la courbe est régulière.' },
        { term: 'Extrapolation', def: 'Prolongation de la tendance au-delà des mesures. Moins fiable — nécessite une justification physique.' }
      ],
      example: {
        statement: 'Une droite passe par $A(1 ; 3)$ et $B(4 ; 9)$. Calcule sa pente et son équation.',
        steps: [
          'Pente : $a = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.',
          'Ordonnée à l\'origine : $b = y_A - a \\cdot x_A = 3 - 2 \\times 1 = 1$.',
          'Équation : $y = 2x + 1$.'
        ],
        answer: '$y = 2x + 1$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px"></th><th style="border:1px solid var(--border);padding:6px 14px">Axe horizontal</th><th style="border:1px solid var(--border);padding:6px 14px">Axe vertical</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Nom</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Abscisse ($x$)</td><td style="border:1px solid var(--border);padding:6px 14px">Ordonnée ($y$)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Rôle</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Variable indépendante</td><td style="border:1px solid var(--border);padding:6px 14px">Variable dépendante</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Exemple</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Temps, concentration</td><td style="border:1px solid var(--border);padding:6px 14px">Tension, absorbance</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier les axes : abscisse $x$ (horizontal) = variable indépendante ; ordonnée $y$ (vertical) = variable dépendante.',
          'Lire un point $(x_0, y_0)$ : partir de $x_0$ sur l\'axe des x, monter verticalement jusqu\'à la courbe, puis lire l\'ordonnée à gauche.',
          'Interpoler = trouver une valeur entre deux points mesurés. Extrapoler = prolonger la tendance au-delà des mesures (moins fiable).'
        ]
      },
      formulas: [
        'Pente d\'une droite : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$',
        'Équation d\'une droite : $y = ax + b$',
        'Ordonnée à l\'origine : $b = y_1 - a \\cdot x_1$'
      ],
      recap: [
        'Un point se repère par un couple $(x ; y)$ : abscisse d\'abord, ordonnée ensuite.',
        'La pente $a$ se calcule par $\\dfrac{\\Delta y}{\\Delta x}$ — même ordre de soustraction au numérateur et dénominateur.',
        'Interpoler (entre les données) est plus fiable qu\'extrapoler (au-delà).',
        'Toujours vérifier les unités sur les axes avant de lire un graphique.'
      ],
      piege: 'Ne jamais extrapoler trop loin ! Une courbe de dosage acido-basique est linéaire près de l\'équivalence, mais pas du tout sur toute la plage. L\'extrapolation n\'est valide que si on a une raison physique de croire que la tendance continue.'
    },

    quiz: [
      {
        q: 'Sur un graphe, un point a pour coordonnées $(3 ; 7{,}5)$. Cela signifie que :',
        options: [
          'L\'abscisse est $7{,}5$ et l\'ordonnée est $3$',
          'L\'abscisse est $3$ et l\'ordonnée est $7{,}5$',
          'La pente est $7{,}5 / 3 = 2{,}5$',
          'Le point est à $3 + 7{,}5 = 10{,}5$ unités de l\'origine'
        ],
        answer: 1,
        correction: 'Dans le couple $(x ; y)$, le premier terme est TOUJOURS l\'abscisse (axe horizontal) et le second est l\'ordonnée (axe vertical). Donc abscisse = 3, ordonnée = 7,5.'
      },
      {
        q: 'La droite d\'étalonnage passe par $(0 ; 0)$ et $(2 ; 0{,}8)$. Quelle absorbance correspond à une concentration de $1{,}5$ mol/L ?',
        options: ['$0{,}4$', '$0{,}5$', '$0{,}6$', '$0{,}75$'],
        answer: 2,
        correction: 'Pente : $a = 0{,}8/2 = 0{,}4$ L/mol. Pour $c = 1{,}5$ mol/L : $A = 0{,}4 \\times 1{,}5 = 0{,}6$. Interpolation linéaire directe.'
      },
      {
        q: 'Une droite passe par $(0 ; 2)$ et $(4 ; 2)$. Un élève dit que sa pente est $\\dfrac{4}{2} = 2$. Quelle est son erreur ?',
        options: [
          'Il a raison : la pente est $\\dfrac{x}{y} = \\dfrac{4}{2} = 2$.',
          'Il a inversé : la pente est $\\dfrac{\\Delta y}{\\Delta x} = \\dfrac{2-2}{4-0} = \\dfrac{0}{4} = 0$. La droite est horizontale.',
          'Il a mal choisi les points : il faut prendre $(4;2)$ et $(2;4)$.',
          'La pente est $\\dfrac{2}{4} = 0{,}5$.'
        ],
        answer: 1,
        correction: 'La pente se calcule toujours $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$, jamais $\\dfrac{x}{y}$. Ici $y$ ne change pas ($y_1 = y_2 = 2$), donc $\\Delta y = 0$ et la pente est nulle : la droite est horizontale.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { name: 'température', unitX: '°C', unitY: 'mV' },
          { name: 'concentration', unitX: 'mol/L', unitY: '' },
          { name: 'temps', unitX: 's', unitY: 'm' },
          { name: 'pression', unitX: 'bar', unitY: 'L' }
        ]);
        const x1 = rand(1, 5);
        const a = randFloat(0.5, 3.0, 1);
        const b = rand(0, 5);
        const y1 = parseFloat((a * x1 + b).toFixed(1));
        const x2 = x1 + rand(2, 5);
        const y2 = parseFloat((a * x2 + b).toFixed(1));
        const slope = parseFloat(((y2 - y1) / (x2 - x1)).toFixed(2));
        return {
          statement: `Une droite passe par les points $A(${x1} ; ${y1})$ et $B(${x2} ; ${y2})$. Calcule le coefficient directeur (la pente) de cette droite.`,
          answer: slope,
          tolerance: 0.02,
          unit: '',
          hint: `La formule de la pente est $a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}}$. Fais bien la soustraction dans le même ordre au numérateur et au dénominateur !`,
          solution: [
            `On applique la formule : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$`,
            `$a = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}} = \\dfrac{${(y2-y1).toFixed(1)}}{${x2-x1}}$`,
            `$a = ${slope}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Lors d\'un titrage pH-métrique, on verse un volume $V$ (en mL) de soude (NaOH) dans une solution d\'acide chlorhydrique (HCl). On mesure les points suivants : $V = 0$ mL → pH $= 1{,}0$ ; $V = 8$ mL → pH $= 2{,}5$ ; $V = 10$ mL → pH $= 7{,}0$ (SAUT) ; $V = 12$ mL → pH $= 11{,}5$ ; $V = 20$ mL → pH $= 12{,}9$.',
      schema: 'Courbe : pH augmente lentement de 1 à ~6, puis saut brutal autour de V=10 mL (de 4 à 10), puis plateau à pH ≈ 13.',
      tasks: [
        'Identifier graphiquement le volume équivalent $V_E$ (volume au point d\'équivalence).',
        'Sachant que la solution de NaOH a une concentration $c_{NaOH} = 0{,}1$ mol/L, calculer le nombre de moles de NaOH versées à l\'équivalence.',
        'En déduire la concentration initiale de la solution d\'acide HCl, sachant que le volume initial de HCl était $V_{HCl} = 10$ mL.'
      ],
      solutions: [
        'Le point d\'équivalence correspond au saut brusque de pH. D\'après les données, ce saut se situe pour $V_E = 10$ mL.',
        '$n_{NaOH} = c_{NaOH} \\times V_E = 0{,}1 \\times 10 \\times 10^{-3} = 1{,}0 \\times 10^{-3}$ mol.',
        'À l\'équivalence $n_{HCl} = n_{NaOH} = 1{,}0 \\times 10^{-3}$ mol. Donc $c_{HCl} = \\frac{n}{V} = \\frac{10^{-3}}{10 \\times 10^{-3}} = 0{,}1$ mol/L.'
      ],
      finalAnswer: '$c_{HCl} = 0{,}1$ mol/L'
    },

    evaluation: {
      title: 'Évaluation — Repérage spatial et Lecture Graphique',
      duration: '25 min',
      questions: [
        {
          statement: 'Un point $M$ a pour coordonnées $(4 ; -2)$ dans un repère. Quelle est son ordonnée ?',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Dans un couple $(x ; y)$, le premier nombre est l\'abscisse et le second est l\'ordonnée. Ici l\'ordonnée est $-2$.'
        },
        {
          statement: 'Une droite passe par $A(1 ; 3)$ et $B(5 ; 11)$. Quelle est la pente (coefficient directeur) de cette droite ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{11 - 3}{5 - 1} = \\dfrac{8}{4} = 2$.'
        },
        {
          statement: 'La droite $d$ a pour équation $y = 3x + 1$. Quelle est l\'ordonnée du point de $d$ dont l\'abscisse est $x = 4$ ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On remplace $x$ par $4$ : $y = 3 \\times 4 + 1 = 12 + 1 = 13$.'
        },
        {
          statement: 'Qu\'appelle-t-on « interpoler » sur un graphique ?',
          type: 'multiple-choice',
          options: [
            'Prolonger la courbe au-delà des points mesurés.',
            'Estimer une valeur entre deux points mesurés.',
            'Tracer la tangente à la courbe en un point.',
            'Calculer l\'aire sous la courbe.'
          ],
          answer: 1,
          points: 2,
          correction: 'Interpoler signifie estimer une valeur entre deux points de mesure connus. Extrapoler, en revanche, consiste à prolonger la tendance au-delà des mesures — une démarche moins fiable.'
        },
        {
          statement: 'Une droite passe par $(0 ; 5)$ et $(3 ; 5)$. Quelle est sa pente ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$a = \\dfrac{5 - 5}{3 - 0} = \\dfrac{0}{3} = 0$. La droite est horizontale : l\'ordonnée ne change pas.'
        }
      ]
    }
  });
