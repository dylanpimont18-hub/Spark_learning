/* =========================================================
   Spark Learning – data/5e.js
   Modules 5e (Collège – classe de Cinquième)
   ========================================================= */

window.MODULES.push(

  {
    id: 'proportionnalite',
    level: 1, subject: 'maths',
    icon: '⚖️',
    title: 'Proportionnalité et Règle de trois',
    subtitle: 'Produit en croix, coefficients, tableaux',
    keywords: ['Produit en croix', 'Coefficient', 'Linéarité', 'Pourcentage'],
    physics: 'Loi d\'Ohm, concentrations, stœchiométrie',

    cours: {
      intro: 'Deux grandeurs sont <strong>proportionnelles</strong> quand leur rapport est constant — ce rapport s\'appelle le <strong>coefficient de proportionnalité</strong>. Si l\'on connaît une paire de valeurs, on peut calculer n\'importe quelle autre grâce à ce coefficient.<br/><br/>' +
        '<strong>Pourquoi est-ce si puissant ?</strong> Parce que la règle de trois (ou produit en croix) est la technique opératoire de cette propriété. Elle permet de résoudre en une étape des problèmes de conversion, de mise à l\'échelle et de dosage.<br/><br/>' +
        '<strong>Attention :</strong> toutes les relations ne sont pas proportionnelles ! La distance de freinage d\'une voiture n\'est pas proportionnelle à la vitesse (elle est quadratique : $d \\propto v^2$). Avant de poser un produit en croix, toujours vérifier que les deux grandeurs varient de façon linéaire.<br/><br/>' +
        'En physique-chimie, la proportionnalité est omniprésente : loi d\'Ohm ($U = RI$), concentration massique ($m = c_m \\times V$), stœchiométrie (les masses réagissantes sont proportionnelles aux coefficients).',
      definitions: [
        { term: 'Coefficient de proportionnalité', def: 'Constante $k$ telle que $y = k \\cdot x$ pour tout couple $(x, y)$ du tableau. On le calcule par $k = \\dfrac{y}{x}$.' },
        { term: 'Produit en croix', def: 'Si $\\dfrac{a}{b} = \\dfrac{c}{d}$, alors $a \\times d = b \\times c$. Technique pour trouver la quatrième valeur quand trois sont connues.' },
        { term: 'Proportion inverse', def: 'Situation où quand une grandeur double, l\'autre est divisée par deux. Exemple : plus d\'ouvriers → moins de temps. Le produit $x \\times y$ est constant.' },
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100 : $p\\% = \\dfrac{p}{100}$. C\'est un cas particulier de proportionnalité.' }
      ],
      example: {
        statement: '$5$ cahiers coûtent $7{,}50$ €. Combien coûtent $8$ cahiers ?',
        steps: [
          'Coefficient de proportionnalité : $k = \\dfrac{7{,}50}{5} = 1{,}50$ €/cahier.',
          'Prix de $8$ cahiers : $8 \\times 1{,}50 = 12{,}00$ €.',
          'Ou par produit en croix : $\\dfrac{7{,}50}{5} = \\dfrac{x}{8}$ → $x = \\dfrac{7{,}50 \\times 8}{5} = 12{,}00$ €.'
        ],
        answer: '$12{,}00$ €'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Quantité $x$</th><td style="border:1px solid var(--border);padding:6px 14px">$5$</td><td style="border:1px solid var(--border);padding:6px 14px">$8$</td></tr><tr><th style="border:1px solid var(--border);padding:6px 14px">Prix $y$ (€)</th><td style="border:1px solid var(--border);padding:6px 14px">$7{,}50$</td><td style="border:1px solid var(--border);padding:6px 14px">$?$</td></tr><tr><td colspan="3" style="padding:6px;font-style:italic">$k = \\dfrac{y}{x} = 1{,}50$ € / cahier → constante ✓</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier les deux grandeurs proportionnelles et les noter dans un tableau à deux colonnes.',
          'Poser le produit en croix : si $\\frac{a}{b} = \\frac{c}{d}$, alors $a \\times d = b \\times c$.',
          'Isoler l\'inconnue et vérifier que le résultat est cohérent (ordre de grandeur, signe).'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow a \\times d = b \\times c$',
        '$k = \\dfrac{y}{x}$ (coefficient de proportionnalité)',
        '$\\text{Pourcentage} = \\dfrac{\\text{valeur}}{\\text{total}} \\times 100$'
      ],
      recap: [
        'Deux grandeurs sont proportionnelles si et seulement si leur rapport $\\dfrac{y}{x}$ est constant.',
        'Le produit en croix permet de trouver la 4ᵉ valeur quand 3 sont connues.',
        'Toujours vérifier la proportionnalité avant d\'appliquer la règle de trois.',
        'Proportion inverse : le produit $x \\times y$ est constant (pas le rapport).'
      ],
      piege: 'Attention aux inversions ! Si le prix augmente quand la quantité augmente, on est dans une proportion directe. Mais si la vitesse augmente quand le temps diminue, c\'est une proportion inverse (règle de trois inverse) — méthode différente !'
    },

    quiz: [
      {
        q: 'Si $4$ mètres de tissu coûtent $18{,}40$ €, combien coûtent $7$ mètres de ce même tissu ?',
        options: ['$29{,}40$ €', '$32{,}20$ €', '$36{,}80$ €', '$46{,}00$ €'],
        answer: 1,
        correction: 'On pose la règle de trois : $\\frac{18{,}40}{4} = \\frac{x}{7}$. Donc $x = \\frac{18{,}40 \\times 7}{4} = \\frac{128{,}80}{4} = 32{,}20$ €.'
      },
      {
        q: 'Un skieur parcourt $150$ m en $12$ s. En supposant la vitesse constante, quelle distance parcourt-il en $20$ s ?',
        options: ['$200$ m', '$250$ m', '$300$ m', '$180$ m'],
        answer: 1,
        correction: 'Coefficient directeur : $k = \\frac{150}{12} = 12{,}5$ m/s. Distance en 20 s : $12{,}5 \\times 20 = 250$ m.'
      },
      {
        q: 'Un élève dit : « Si 3 ouvriers font un mur en 6 jours, 6 ouvriers le feront en 12 jours ». Quelle est son erreur ?',
        options: [
          'Il a raison : plus d\'ouvriers = plus de temps.',
          'Il confond proportion directe et proportion inverse : plus d\'ouvriers = moins de temps. 6 ouvriers feront le mur en 3 jours.',
          'Il fallait utiliser la règle de trois directe : $\\frac{3}{6} = \\frac{6}{x}$ → $x = 12$.',
          'Il n\'y a pas assez d\'informations pour répondre.'
        ],
        answer: 1,
        correction: 'C\'est une proportion inverse : quand les ouvriers doublent, le temps est divisé par 2. $3$ ouvriers → $6$ jours, donc $6$ ouvriers → $6 \\div 2 = 3$ jours. La règle de trois directe ($x = 12$) s\'applique aux proportions directes (prix/quantité, vitesse/distance), pas aux proportions inverses (ouvriers/temps, vitesse/temps de trajet).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { item: 'essence', unit: '€/L', qUnit: 'litres', emoji: '⛽' },
          { item: 'peinture', unit: '€/L', qUnit: 'litres', emoji: '🎨' },
          { item: 'tissu', unit: '€/m', qUnit: 'mètres', emoji: '🧵' },
          { item: 'câble électrique', unit: '€/m', qUnit: 'mètres', emoji: '🔌' },
          { item: 'jus de fruits', unit: '€/L', qUnit: 'litres', emoji: '🧃' }
        ]);
        const pricePerUnit = randFloat(1.5, 4.5, 2);
        const quantity = rand(5, 40);
        const answer = parseFloat((pricePerUnit * quantity).toFixed(2));
        return {
          statement: `${ctx.emoji} Le prix du ${ctx.item} est de $${pricePerUnit}$ ${ctx.unit}. Quel est le coût total pour $${quantity}$ ${ctx.qUnit} ? (arrondir au centime)`,
          answer,
          tolerance: 0.02,
          unit: '€',
          hint: `Rappel : si le prix est proportionnel à la quantité, utilise la formule $\\text{Coût} = \\text{prix unitaire} \\times \\text{quantité}$.`,
          solution: [
            `Données : prix unitaire $p = ${pricePerUnit}$ ${ctx.unit}, quantité $q = ${quantity}$ ${ctx.qUnit}.`,
            `Application de la proportionnalité directe : $\\text{Coût} = p \\times q$`,
            `$\\text{Coût} = ${pricePerUnit} \\times ${quantity} = ${answer}$ €`
          ]
        };
      }
    },

    probleme: {
      context: 'La loi d\'Ohm stipule que la tension $U$ (en volts) est proportionnelle à l\'intensité $I$ (en ampères) : $U = R \\cdot I$, où $R$ est la résistance en ohms (Ω). Un technicien mesure une tension de $U = 12$ V aux bornes d\'un résistor parcouru par un courant d\'intensité $I = 0{,}04$ A.',
      schema: 'Schéma : générateur → résistor R → ampèremètre (I = 0,04 A) | voltmètre indique U = 12 V',
      tasks: [
        'Identifier la grandeur inconnue et écrire la formule qui la relie aux grandeurs connues.',
        'Appliquer la règle de trois (ou isoler $R$) pour calculer la résistance.',
        'Exprimer le résultat avec l\'unité correcte et vérifier sa cohérence physique.'
      ],
      solutions: [
        'On cherche $R$. La formule de la loi d\'Ohm est : $U = R \\cdot I$.',
        'On isole $R$ : $R = \\dfrac{U}{I} = \\dfrac{12}{0{,}04} = 300$ Ω.',
        'Résultat : $R = 300$ Ω. Cohérence : une résistance de 300 Ω est réaliste pour un circuit électronique courant.'
      ],
      finalAnswer: '$R = 300$ Ω'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité et Règle de trois',
      duration: '25 min',
      questions: [
        {
          statement: 'Dans un tableau de proportionnalité, on sait que $5$ kg de pommes coûtent $8{,}75$ €. Quel est le coefficient de proportionnalité (prix par kg) ?',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '€/kg',
          points: 2,
          correction: 'Le coefficient de proportionnalité est $k = \\dfrac{8{,}75}{5} = 1{,}75$ €/kg.'
        },
        {
          statement: 'Si $8$ mètres de corde coûtent $12{,}40$ €, combien coûtent $15$ mètres de cette même corde ?',
          type: 'numeric',
          answer: 23.25,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'Produit en croix : $\\dfrac{12{,}40}{8} = \\dfrac{x}{15}$, donc $x = \\dfrac{12{,}40 \\times 15}{8} = \\dfrac{186}{8} = 23{,}25$ €.'
        },
        {
          statement: 'Quelle affirmation est correcte concernant la proportionnalité ?',
          type: 'multiple-choice',
          options: [
            'Si $y$ est proportionnel à $x$, alors le graphique de $y$ en fonction de $x$ est une droite passant par l\'origine.',
            'Si $y$ est proportionnel à $x$, alors $y = ax + b$ avec $b \\neq 0$.',
            'Le coefficient de proportionnalité peut être négatif mais jamais nul.',
            'La distance de freinage d\'une voiture est proportionnelle à sa vitesse.'
          ],
          answer: 0,
          points: 2,
          correction: 'Une situation de proportionnalité se traduit par $y = kx$ (avec $k$ constant). Le graphique est une droite passant par l\'origine. Si $b \\neq 0$, ce n\'est plus de la proportionnalité.'
        },
        {
          statement: 'Un robinet remplit un bassin de $120$ litres en $8$ minutes. Combien de litres sont versés en $5$ minutes ?',
          type: 'numeric',
          answer: 75,
          tolerance: 0,
          unit: 'L',
          points: 2,
          correction: 'Coefficient : $k = \\dfrac{120}{8} = 15$ L/min. En $5$ min : $15 \\times 5 = 75$ L.'
        },
        {
          statement: 'Dans un tableau, on lit : $x = 3 \\to y = 9$ et $x = 7 \\to y = 22$. Ce tableau est-il un tableau de proportionnalité ?',
          type: 'multiple-choice',
          options: [
            'Oui, car $y$ augmente quand $x$ augmente.',
            'Non, car $\\dfrac{9}{3} = 3$ et $\\dfrac{22}{7} \\approx 3{,}14$ : les rapports ne sont pas égaux.',
            'Oui, car $22 - 9 = 13$ et $7 - 3 = 4$.',
            'On ne peut pas savoir avec seulement deux points.'
          ],
          answer: 1,
          points: 2,
          correction: 'Pour une proportionnalité, le rapport $\\dfrac{y}{x}$ doit être constant. Ici $\\dfrac{9}{3} = 3$ et $\\dfrac{22}{7} \\approx 3{,}14$. Les rapports sont différents, donc ce n\'est pas un tableau de proportionnalité.'
        }
      ]
    }
  },

  {
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
  },

  {
    id: '5e-nombres-relatifs',
    level: 1, subject: 'maths',
    icon: '±',
    title: 'Nombres relatifs',
    subtitle: 'Addition, soustraction, repérage',
    keywords: ['Positif', 'Négatif', 'Valeur absolue', 'Opposé', 'Droite graduée'],
    physics: 'Coordonnées de vecteurs, températures, altitudes, potentiel électrique',

    cours: {
      intro: 'Les nombres relatifs étendent la droite numérique dans les deux sens. Un nombre négatif n\'est pas « moins que zéro » de façon mystérieuse : c\'est une <strong>direction opposée</strong>, un manque, un écart vers le bas.<br/><br/>' +
        'En physique, le signe porte une information physique : $-5$ N signifie une force vers la gauche si l\'on a choisi la droite comme sens positif. $-120$ m signifie 120 m sous la surface de la mer.<br/><br/>' +
        '<strong>Règle d\'or de la soustraction :</strong> $a - b = a + (-b)$ — soustraire un nombre revient à ajouter son opposé. Ainsi $3 - (-5) = 3 + 5 = 8$ : soustraire un négatif augmente la valeur.<br/><br/>' +
        'La <strong>valeur absolue</strong> $|a|$ mesure la distance à zéro, indépendamment du signe : $|-7| = |+7| = 7$. La distance entre deux points $A$ et $B$ sur une droite graduée vaut $|x_B - x_A|$.',
      definitions: [
        { term: 'Nombre relatif', def: 'Nombre muni d\'un signe : positif ($+$) ou négatif ($-$). Zéro n\'est ni positif ni négatif.' },
        { term: 'Opposé', def: 'L\'opposé de $a$ est $-a$. Leur somme est nulle : $a + (-a) = 0$. L\'opposé de $-5$ est $+5$.' },
        { term: 'Valeur absolue', def: 'Distance d\'un nombre à zéro, notée $|a|$. Toujours positive : $|-7| = |+7| = 7$.' },
        { term: 'Droite graduée', def: 'Droite munie d\'une origine $O$, d\'un sens positif et d\'une unité. Chaque point correspond à un unique nombre relatif.' }
      ],
      example: {
        statement: 'Calculer $(-8) - (-3) + (+5)$.',
        steps: [
          'Transformer la soustraction : $(-8) - (-3) = (-8) + (+3)$.',
          'Calculer étape par étape : $(-8) + (+3) = -5$.',
          'Puis : $-5 + (+5) = 0$.'
        ],
        answer: '$0$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Opération</th><th style="border:1px solid var(--border);padding:6px 14px">Transformation</th><th style="border:1px solid var(--border);padding:6px 14px">Résultat</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$a - (+b)$</td><td style="border:1px solid var(--border);padding:6px 14px">$a + (-b)$</td><td style="border:1px solid var(--border);padding:6px 14px">On recule</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$a - (-b)$</td><td style="border:1px solid var(--border);padding:6px 14px">$a + (+b)$</td><td style="border:1px solid var(--border);padding:6px 14px">On avance</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$a + (-b)$</td><td style="border:1px solid var(--border);padding:6px 14px">$a - b$</td><td style="border:1px solid var(--border);padding:6px 14px">On recule</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Addition de relatifs : si même signe → additionner les valeurs absolues et garder le signe. Si signes opposés → soustraire les valeurs absolues et prendre le signe du plus grand.',
          'Soustraction : transformer en addition de l\'opposé. $a - b = a + (-b)$. Ex : $3 - (-5) = 3 + 5 = 8$.',
          'Valeur absolue $|a|$ = distance à zéro, toujours positive. $|-7| = 7$, $|+7| = 7$.'
        ]
      },
      formulas: [
        '$a - b = a + (-b)$',
        '$-(-a) = a$',
        '$|a| \\geq 0$ et $|-a| = |a|$',
        '$|a - b|$ = distance entre $a$ et $b$ sur la droite graduée'
      ],
      recap: [
        'Soustraire revient à additionner l\'opposé : $a - b = a + (-b)$.',
        'Même signe → on additionne les valeurs absolues. Signes opposés → on soustrait.',
        'La valeur absolue donne la distance à zéro (toujours positive).',
        '$-(a - b) = -a + b$ : le signe $-$ change TOUS les signes dans la parenthèse.'
      ],
      piege: 'Le signe $-$ devant une parenthèse change TOUS les signes à l\'intérieur : $-(a - b) = -a + b$. Erreur classique : $-(3 - 5) = -3 - 5$ (FAUX). La bonne réponse est $-3 + 5 = 2$.'
    },

    quiz: [
      {
        q: 'Calculer $(-8) + (+3)$.',
        options: ['$+11$', '$-11$', '$-5$', '$+5$'],
        answer: 2,
        correction: 'Signes opposés : on soustrait les valeurs absolues $8 - 3 = 5$ et on garde le signe du plus grand (le $-8$). Résultat : $-5$.'
      },
      {
        q: 'Calculer $(-4) - (-9)$.',
        options: ['$-13$', '$-5$', '$+5$', '$+13$'],
        answer: 2,
        correction: '$(-4) - (-9) = (-4) + (+9) = +5$. Soustraire un négatif revient à additionner son opposé.'
      },
      {
        q: 'Un élève calcule $-(3 - 5)$ et trouve $-3 - 5 = -8$. Quelle est son erreur ?',
        options: [
          'Il a raison : $-(3-5) = -3-5 = -8$.',
          'Le signe $-$ devant la parenthèse change TOUS les signes à l\'intérieur : $-(3-5) = -3+5 = 2$.',
          'Il fallait calculer $3 - 5 = -2$ d\'abord, donc $-(-2) = 2$, mais $-2$ est la bonne réponse.',
          'Le résultat est $-(3-5) = -3+5 = -8$.'
        ],
        answer: 1,
        correction: 'Le signe $-$ devant une parenthèse distribue sur tous les termes à l\'intérieur : $-(3 - 5) = -3 + (+5) = 2$. Ou plus simplement : calcule d\'abord l\'intérieur : $3 - 5 = -2$, puis applique le $-$ devant : $-(-2) = +2$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(-20, 20), b = rand(-20, 20);
        const op = pick(['+', '-']);
        const answer = op === '+' ? a + b : a - b;
        const bStr = b < 0 ? `(${b})` : `${b}`;
        const absB = Math.abs(b);

        const ctx = pick([
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>augmenté</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`
                : `Ce matin, le thermomètre affichait $${a}°C$. La température a <strong>baissé</strong> de $${absB}°C$ dans la journée.<br/>Quelle est la température maintenant ?`)
              : `Ce matin il faisait $${a}°C$. La nuit dernière, il faisait $${bStr}°C$.<br/>Quelle est la <strong>différence de température</strong> entre ce matin et la nuit dernière ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un sous-marin se trouve à $${a}\\,\\text{m}$ de profondeur. Il <strong>remonte</strong> de $${absB}\\,\\text{m}$.<br/>À quelle profondeur se trouve-t-il maintenant ?`
                : `Un sous-marin se trouve à $${a}\\,\\text{m}$ de profondeur. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>À quelle profondeur se trouve-t-il maintenant ?`)
              : `Un sous-marin est à $${a}\\,\\text{m}$. Un plongeur est à $${bStr}\\,\\text{m}$.<br/>Quel est l'<strong>écart de profondeur</strong> entre les deux ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Le solde d'un compte en banque est de $${a}$ €. On y <strong>dépose</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`
                : `Le solde d'un compte en banque est de $${a}$ €. On en <strong>retire</strong> $${absB}$ €.<br/>Quel est le nouveau solde ?`)
              : `Le compte de Léa affiche $${a}$ € et celui de Tom affiche $${bStr}$ €.<br/>Quelle est la <strong>différence</strong> entre les deux comptes ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un ascenseur se trouve à l'étage $${a}$ d'un immeuble. Il <strong>monte</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`
                : `Un ascenseur se trouve à l'étage $${a}$. Il <strong>descend</strong> de $${absB}$ étages.<br/>À quel étage arrive-t-il ?`)
              : `Un ascenseur part de l'étage $${a}$ pour aller à l'étage $${bStr}$.<br/>De combien d'étages s'est-il <strong>déplacé</strong> (en valeur signée) ?`
          },
          {
            build: () => op === '+'
              ? (b >= 0
                ? `Un randonneur est à une altitude de $${a}\\,\\text{m}$ (sous le niveau de la mer si négatif). Il <strong>grimpe</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`
                : `Un randonneur est à $${a}\\,\\text{m}$ d'altitude. Il <strong>descend</strong> de $${absB}\\,\\text{m}$.<br/>Quelle est sa nouvelle altitude ?`)
              : `Le point $A$ est à $${a}\\,\\text{m}$ d'altitude et le point $B$ à $${bStr}\\,\\text{m}$.<br/>Quel est le <strong>dénivelé</strong> de $A$ à $B$ ?`
          }
        ]);

        return {
          statement: ctx.build(),
          answer,
          tolerance: 0,
          unit: '',
          hint: op === '-'
            ? `Rappel : soustraire revient à additionner l'opposé. $${a} - ${bStr} = ${a} + (${-b})$.`
            : (b < 0 ? `Ajouter un nombre négatif revient à soustraire sa valeur absolue.` : `Même signe ou signes opposés ? Applique la règle.`),
          solution: [
            op === '-'
              ? `$${a} - ${bStr} = ${a} + (${-b}) = ${answer}$`
              : `$${a} + ${bStr} = ${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un sous-marin se trouve à $-120\\,\\text{m}$ (120 m sous la surface). Il monte de $45\\,\\text{m}$, puis descend de $80\\,\\text{m}$.',
      schema: null,
      tasks: [
        'Calculer la nouvelle profondeur après la montée.',
        'Calculer la profondeur finale après la descente.',
        'Quel déplacement net (positif = montée) le sous-marin a-t-il effectué au total ?'
      ],
      solutions: [
        'Après montée : $-120 + 45 = -75\\,\\text{m}$ (à 75 m sous la surface).',
        'Après descente : $-75 - 80 = -155\\,\\text{m}$ (à 155 m sous la surface).',
        'Déplacement net : $-155 - (-120) = -155 + 120 = -35\\,\\text{m}$ (il s\'est enfoncé de 35 m au total).'
      ],
      finalAnswer: 'Profondeur finale : $-155\\,\\text{m}$, déplacement net : $-35\\,\\text{m}$'
    },

    evaluation: {
      title: 'Évaluation — Nombres relatifs',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $(-7) + (+12)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Signes opposés : on soustrait les valeurs absolues $12 - 7 = 5$ et on garde le signe du plus grand en valeur absolue (le $+12$). Résultat : $+5$.'
        },
        {
          statement: 'Calculer $(-6) - (-11)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(-6) - (-11) = (-6) + (+11) = +5$. Soustraire un nombre négatif revient à additionner son opposé.'
        },
        {
          statement: 'Calculer $(-3) + (-8) - (-2)$.',
          type: 'numeric',
          answer: -9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$(-3) + (-8) - (-2) = (-3) + (-8) + (+2) = -11 + 2 = -9$.'
        },
        {
          statement: 'Quelle est la distance entre les points $A(-4)$ et $B(+7)$ sur une droite graduée ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Distance $= |x_B - x_A| = |7 - (-4)| = |7 + 4| = |11| = 11$.'
        },
        {
          statement: 'Que vaut $-(5 - 8)$ ?',
          type: 'multiple-choice',
          options: [
            '$-5 - 8 = -13$',
            '$-5 + 8 = 3$',
            '$5 - 8 = -3$',
            '$5 + 8 = 13$'
          ],
          answer: 1,
          points: 2,
          correction: 'Méthode 1 : calcul intérieur d\'abord : $5 - 8 = -3$, puis $-(-3) = +3$. Méthode 2 : le signe $-$ devant la parenthèse change tous les signes : $-(5 - 8) = -5 + 8 = 3$.'
        }
      ]
    }
  },

  {
    id: '5e-priorites-operations',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Priorités des opérations',
    subtitle: 'Règles de calcul, parenthèses, PEMDAS',
    keywords: ['Parenthèses', 'Puissances', 'Multiplication', 'Division', 'Addition', 'Soustraction'],
    physics: 'Calcul numérique de formules physiques : $E = \\frac{1}{2}mv^2$, $P = RI^2$',

    cours: {
      intro: 'Les priorités des opérations sont une <strong>convention universelle</strong> qui garantit qu\'une expression mathématique a une seule interprétation. Sans cette convention, $2 + 3 \\times 4$ pourrait valoir $20$ ou $14$ selon l\'ordre de lecture.<br/><br/>' +
        'L\'ordre est : <strong>Parenthèses → Exposants/Racines → Multiplications/Divisions → Additions/Soustractions</strong> (mémo : PEMDAS ou « Cher Ami »).<br/><br/>' +
        '<strong>Le trait de fraction agit comme des parenthèses</strong> : $\\dfrac{8+4}{2} = (8+4) \\div 2 = 6$, mais $8 + 4 \\div 2 = 8 + 2 = 10$.<br/><br/>' +
        'En physique, cela évite les erreurs classiques : dans $E_c = \\dfrac{1}{2}mv^2$, c\'est $v$ seul qui est au carré (pas $mv$), et dans $P = RI^2$, c\'est $I$ seul (pas $RI$).',
      definitions: [
        { term: 'Priorité opératoire', def: 'Ordre dans lequel les opérations doivent être effectuées. La multiplication est prioritaire sur l\'addition.' },
        { term: 'Parenthèses', def: 'Symboles $()$ qui forcent un calcul à être effectué en premier, quel que soit son rang de priorité.' },
        { term: 'PEMDAS', def: 'Moyen mnémotechnique : Parenthèses, Exposants, Multiplication/Division, Addition/Soustraction.' },
        { term: 'Trait de fraction', def: 'Agit comme des parenthèses implicites autour du numérateur et du dénominateur.' }
      ],
      example: {
        statement: 'Calculer $3 + 2 \\times (5 - 1)^2 \\div 4$.',
        steps: [
          'Parenthèses : $5 - 1 = 4$.',
          'Exposant : $4^2 = 16$.',
          'Multiplication/division (gauche à droite) : $2 \\times 16 = 32$, puis $32 \\div 4 = 8$.',
          'Addition : $3 + 8 = 11$.'
        ],
        answer: '$11$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Priorité</th><th style="border:1px solid var(--border);padding:6px 14px">Opérations</th><th style="border:1px solid var(--border);padding:6px 14px">Ordre</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px;background:color-mix(in srgb,var(--primary) 12%,transparent)"><strong>1ʳᵉ</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Parenthèses $(~)$</td><td style="border:1px solid var(--border);padding:6px 14px">Intérieur → extérieur</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px;background:color-mix(in srgb,var(--primary) 8%,transparent)"><strong>2ᵉ</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Puissances $x^n$, racines</td><td style="border:1px solid var(--border);padding:6px 14px">—</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>3ᵉ</strong></td><td style="border:1px solid var(--border);padding:6px 14px">$\\times$ et $\\div$</td><td style="border:1px solid var(--border);padding:6px 14px">Gauche → droite</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>4ᵉ</strong></td><td style="border:1px solid var(--border);padding:6px 14px">$+$ et $-$</td><td style="border:1px solid var(--border);padding:6px 14px">Gauche → droite</td></tr></table>',
      method: {
        title: 'Ordre de priorité (de la plus haute à la plus basse)',
        steps: [
          '1. Parenthèses : calculer en premier tout ce qui est entre parenthèses, de l\'intérieur vers l\'extérieur.',
          '2. Puissances et racines : calculer $a^n$ et $\\sqrt{a}$ avant de multiplier ou additionner.',
          '3. Multiplications et divisions : de gauche à droite, avant les additions/soustractions.',
          '4. Additions et soustractions : en dernier, de gauche à droite.'
        ]
      },
      formulas: [
        'Ordre : $()$ → $x^n$ → $\\times \\div$ → $+ -$',
        '$a + b \\times c = a + (b \\times c)$ (la multiplication est prioritaire)',
        '$\\dfrac{a + b}{c} = (a + b) \\div c$ (le trait de fraction fait office de parenthèses)'
      ],
      recap: [
        'Toujours commencer par les parenthèses (de l\'intérieur vers l\'extérieur).',
        'La multiplication et la division passent AVANT l\'addition et la soustraction.',
        'Le trait de fraction agit comme des parenthèses implicites.',
        'En cas de doute, ajouter des parenthèses pour lever l\'ambiguïté.'
      ],
      piege: 'Le signe de division $\\div$ et le trait de fraction se comportent différemment : $10 - 4 \\div 2 = 10 - 2 = 8$ (on divise d\'abord). Mais $\\dfrac{10 - 4}{2} = \\dfrac{6}{2} = 3$ (le trait de fraction groupe le numérateur).'
    },

    quiz: [
      {
        q: 'Calculer $3 + 4 \\times 2 - 1$.',
        options: ['$13$', '$10$', '$15$', '$7$'],
        answer: 1,
        correction: 'Priorité à la multiplication : $4 \\times 2 = 8$. Puis : $3 + 8 - 1 = 10$.'
      },
      {
        q: 'Calculer $(5 + 3)^2 \\div 4$.',
        options: ['$28$', '$16$', '$36$', '$17$'],
        answer: 1,
        correction: 'Parenthèses d\'abord : $5 + 3 = 8$. Puis puissance : $8^2 = 64$. Puis division : $64 \\div 4 = 16$.'
      },
      {
        q: 'Un élève calcule $2 + 3 \\times 4$ en faisant $(2+3) \\times 4 = 20$. Laquelle de ces corrections est juste ?',
        options: [
          'Il a raison : on lit de gauche à droite, donc $(2+3)$ d\'abord.',
          'Non : la multiplication est prioritaire sur l\'addition. Il faut d\'abord $3 \\times 4 = 12$, puis $2 + 12 = 14$.',
          'Non : il faut d\'abord $2 + 3 = 5$, puis $5 \\times 4 = 20$, mais ensuite diviser par $2$.',
          'Non : il faut calculer $2 \\times 3 + 4 = 10$.'
        ],
        answer: 1,
        correction: 'La règle de priorité dit que la multiplication est toujours calculée <em>avant</em> l\'addition, sans parenthèses. Donc $2 + 3 \\times 4 = 2 + (3 \\times 4) = 2 + 12 = 14$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick(['contexte1', 'contexte2', 'contexte3', 'contexte4', 'contexte5']);

        if (type === 'contexte1') {
          // Note finale pondérée
          const noteDS = rand(8, 18), noteInterro = rand(5, 16), coef = rand(2, 3), bonus = rand(1, 3);
          const answer = noteDS + noteInterro * coef - bonus;
          return {
            statement: `Un élève a $${noteDS}$ au DS et $${noteInterro}$ à l'interrogation (coefficient $${coef}$). On retire $${bonus}$ point(s) de malus retard.<br/>La note finale est : $${noteDS} + ${noteInterro} \\times ${coef} - ${bonus}$.<br/>Calcule cette note en respectant les <strong>priorités</strong>.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `La multiplication est prioritaire : commence par $${noteInterro} \\times ${coef}$, puis effectue les additions et soustractions.`,
            solution: [
              `Priorité (multiplication) : $${noteInterro} \\times ${coef} = ${noteInterro * coef}$`,
              `Puis de gauche à droite : $${noteDS} + ${noteInterro * coef} - ${bonus} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte2') {
          // Budget avec parenthèses : (a + b) × c
          const prixUnit = rand(3, 8), fraisLiv = rand(2, 5), nb = rand(2, 5);
          const answer = (prixUnit + fraisLiv) * nb;
          return {
            statement: `Un livre coûte $${prixUnit}$ € et les frais de livraison sont de $${fraisLiv}$ € par livre. Tu commandes $${nb}$ livres.<br/>Le coût total est : $(${prixUnit} + ${fraisLiv}) \\times ${nb}$.<br/>Combien paies-tu au total ?`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Les parenthèses d'abord : calcule $${prixUnit} + ${fraisLiv}$, puis multiplie par $${nb}$.`,
            solution: [
              `Parenthèses : $${prixUnit} + ${fraisLiv} = ${prixUnit + fraisLiv}$`,
              `Multiplication : $${prixUnit + fraisLiv} \\times ${nb} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte3') {
          // Vitesse : a × b + c × d
          const v1 = rand(2, 5), t1 = rand(1, 3), v2 = rand(3, 7), t2 = rand(1, 3);
          const answer = v1 * t1 + v2 * t2;
          return {
            statement: `Un cycliste roule à $${v1}\\,\\text{km/h}$ pendant $${t1}\\,\\text{h}$, puis accélère à $${v2}\\,\\text{km/h}$ pendant $${t2}\\,\\text{h}$.<br/>La distance totale est : $${v1} \\times ${t1} + ${v2} \\times ${t2}$.<br/>Calcule cette distance.`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Il y a deux multiplications prioritaires : $${v1} \\times ${t1}$ et $${v2} \\times ${t2}$. Additionne ensuite.`,
            solution: [
              `Priorité : $${v1} \\times ${t1} = ${v1 * t1}$ et $${v2} \\times ${t2} = ${v2 * t2}$`,
              `Addition : $${v1 * t1} + ${v2 * t2} = ${answer}$`
            ]
          };
        }
        if (type === 'contexte4') {
          // Physique : énergie avec parenthèses et puissance : (a + b)² - c
          const a = rand(2, 5), b = rand(1, 4), c = rand(1, 6);
          const somme = a + b;
          const answer = somme * somme - c;
          return {
            statement: `En physique, on doit calculer l'expression $(${a} + ${b})^2 - ${c}$.<br/>Applique les <strong>priorités</strong> (parenthèses, puis puissance, puis soustraction).`,
            answer,
            tolerance: 0,
            unit: '',
            hint: `Étape 1 : parenthèses $${a} + ${b} = ${somme}$. Étape 2 : puissance $${somme}^2$. Étape 3 : soustraction.`,
            solution: [
              `Parenthèses : $${a} + ${b} = ${somme}$`,
              `Puissance : $${somme}^2 = ${somme * somme}$`,
              `Soustraction : $${somme * somme} - ${c} = ${answer}$`
            ]
          };
        }
        // contexte5 : Budget courses avec structure a × b + c
        const prixPommes = rand(2, 5), nbKg = rand(2, 4), prixSac = rand(1, 3);
        const answer = prixPommes * nbKg + prixSac;
        return {
          statement: `Au marché, les pommes coûtent $${prixPommes}$ €/kg. Tu en achètes $${nbKg}\\,\\text{kg}$ et tu prends un sac à $${prixSac}$ €.<br/>Le prix total est : $${prixPommes} \\times ${nbKg} + ${prixSac}$.<br/>Combien paies-tu ?`,
          answer,
          tolerance: 0,
          unit: '',
          hint: `Multiplication d'abord : $${prixPommes} \\times ${nbKg}$, puis ajoute $${prixSac}$.`,
          solution: [
            `Priorité : $${prixPommes} \\times ${nbKg} = ${prixPommes * nbKg}$`,
            `Addition : $${prixPommes * nbKg} + ${prixSac} = ${answer}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circuit électrique a une résistance $R = 3\\,\\Omega$, parcouru par un courant $I = 2\\,\\text{A}$. La puissance dissipée est $P = R \\times I^2$ et l\'énergie dissipée en $t = 10\\,\\text{s}$ est $E = P \\times t$.',
      schema: null,
      tasks: [
        'Calculer $P = R \\times I^2$ en respectant les priorités (exposant avant multiplication).',
        'Calculer $E = P \\times t$.',
        'Un élève calcule $P = (R \\times I)^2 = 6^2 = 36\\,\\text{W}$. Quelle est son erreur ?'
      ],
      solutions: [
        '$P = R \\times I^2 = 3 \\times (2)^2 = 3 \\times 4 = 12\\,\\text{W}$. La puissance est prioritaire sur la multiplication.',
        '$E = P \\times t = 12 \\times 10 = 120\\,\\text{J}$.',
        'L\'élève a mis des parenthèses autour de $R \\times I$ ce qui change le calcul. La formule est $P = R \\times I^2$, pas $(R \\times I)^2$. Seul $I$ est élevé au carré, pas le produit $RI$.'
      ],
      finalAnswer: '$P = 12\\,\\text{W}$, $E = 120\\,\\text{J}$'
    },

    evaluation: {
      title: 'Évaluation — Priorités des opérations',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer $5 + 3 \\times 6 - 2$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Multiplication d\'abord : $3 \\times 6 = 18$. Puis : $5 + 18 - 2 = 21$.'
        },
        {
          statement: 'Calculer $(7 - 3)^2 + 5$.',
          type: 'numeric',
          answer: 21,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Parenthèses d\'abord : $7 - 3 = 4$. Puissance : $4^2 = 16$. Addition : $16 + 5 = 21$.'
        },
        {
          statement: 'Calculer $\\dfrac{12 + 8}{4}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le trait de fraction agit comme des parenthèses : on calcule le numérateur d\'abord : $12 + 8 = 20$. Puis $20 \\div 4 = 5$.'
        },
        {
          statement: 'Quelle est la valeur de $2 \\times 3^2$ ?',
          type: 'multiple-choice',
          options: [
            '$36$ car $(2 \\times 3)^2 = 6^2 = 36$.',
            '$18$ car la puissance est prioritaire : $3^2 = 9$, puis $2 \\times 9 = 18$.',
            '$12$ car $2 \\times 3 \\times 2 = 12$.',
            '$8$ car $2^3 \\times 1 = 8$.'
          ],
          answer: 1,
          points: 2,
          correction: 'La puissance est prioritaire sur la multiplication. On calcule d\'abord $3^2 = 9$, puis $2 \\times 9 = 18$.'
        },
        {
          statement: 'Calculer $4 + 2 \\times (8 - 3) - 1$.',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Parenthèses : $8 - 3 = 5$. Multiplication : $2 \\times 5 = 10$. Puis : $4 + 10 - 1 = 13$.'
        }
      ]
    }
  },

  {
    id: '5e-fractions-operations',
    level: 1, subject: 'maths',
    icon: '½',
    title: 'Opérations sur les fractions',
    subtitle: 'Addition, soustraction, comparaison',
    keywords: ['Fraction', 'Dénominateur commun', 'PPCM', 'Comparer', 'Réduire'],
    physics: false,

    cours: {
      intro: 'Additionner des fractions nécessite un <strong>dénominateur commun</strong> pour la même raison qu\'on ne peut pas additionner des pommes et des oranges directement : $\\dfrac{1}{3} + \\dfrac{1}{4}$ ne vaut pas $\\dfrac{2}{7}$ !<br/><br/>' +
        'On cherche le <strong>PPCM</strong> des dénominateurs (le plus petit multiple commun), puis on amplifie chaque fraction pour les amener à ce dénominateur. Le PPCM garde les nombres aussi petits que possible et évite les simplifications ultérieures.<br/><br/>' +
        'Pour la <strong>multiplication</strong>, c\'est plus simple : on multiplie directement numérateurs entre eux et dénominateurs entre eux, sans chercher de dénominateur commun. Pour la <strong>division</strong>, on multiplie par l\'inverse du diviseur.<br/><br/>' +
        'Ces opérations sont fondamentales pour manipuler les fractions molaires, les rapports stœchiométriques et les probabilités.',
      definitions: [
        { term: 'Fraction', def: 'Nombre de la forme $\\dfrac{a}{b}$ avec $b \\neq 0$. $a$ est le numérateur, $b$ le dénominateur.' },
        { term: 'PPCM', def: 'Plus Petit Commun Multiple de deux nombres. PPCM(3, 4) = 12. C\'est le plus petit dénominateur commun.' },
        { term: 'Fractions équivalentes', def: 'Fractions représentant le même nombre : $\\dfrac{2}{3} = \\dfrac{4}{6} = \\dfrac{6}{9}$. On multiplie numérateur et dénominateur par le même facteur.' },
        { term: 'Fraction irréductible', def: 'Fraction dont le numérateur et le dénominateur n\'ont aucun diviseur commun (sauf 1). Ex : $\\dfrac{7}{12}$.' }
      ],
      example: {
        statement: 'Calculer $\\dfrac{2}{3} + \\dfrac{3}{4}$.',
        steps: [
          'PPCM(3, 4) = 12.',
          'Conversion : $\\dfrac{2}{3} = \\dfrac{8}{12}$ et $\\dfrac{3}{4} = \\dfrac{9}{12}$.',
          'Addition des numérateurs : $\\dfrac{8 + 9}{12} = \\dfrac{17}{12}$.'
        ],
        answer: '$\\dfrac{17}{12}$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Opération</th><th style="border:1px solid var(--border);padding:6px 14px">Formule</th><th style="border:1px solid var(--border);padding:6px 14px">Dénominateur commun ?</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} + \\dfrac{c}{d}$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{ad + cb}{bd}$</td><td style="border:1px solid var(--border);padding:6px 14px">✅ Oui</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\times \\dfrac{c}{d}$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a \\times c}{b \\times d}$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\div \\dfrac{c}{d}$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{a}{b} \\times \\dfrac{d}{c}$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td></tr></table>',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Trouver le PPCM des deux dénominateurs (le plus petit multiple commun).',
          'Convertir chaque fraction au dénominateur commun en multipliant numérateur et dénominateur par le même facteur.',
          'Additionner (ou soustraire) les numérateurs ; conserver le dénominateur commun.',
          'Simplifier la fraction obtenue si possible (diviser numérateur et dénominateur par leur PGCD).'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} + \\dfrac{c}{b} = \\dfrac{a + c}{b}$ (même dénominateur)',
        '$\\dfrac{a}{b} + \\dfrac{c}{d} = \\dfrac{a \\times d + c \\times b}{b \\times d}$ (dénominateurs différents)',
        'Comparer : $\\dfrac{a}{b}$ et $\\dfrac{c}{d}$ → réduire au même dénominateur puis comparer les numérateurs'
      ],
      recap: [
        'Pour additionner des fractions, il faut ABSOLUMENT un dénominateur commun.',
        'On ne peut JAMAIS additionner les dénominateurs : $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$.',
        'Pour multiplier : numérateurs entre eux, dénominateurs entre eux.',
        'Diviser par une fraction = multiplier par son inverse.'
      ],
      piege: 'Piège fréquent : additionner les dénominateurs ! $\\dfrac{1}{3} + \\dfrac{1}{4} \\neq \\dfrac{2}{7}$. Il faut réduire au dénominateur commun $12$ : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
    },

    quiz: [
      {
        q: 'Combien vaut $\\dfrac{1}{3} + \\dfrac{1}{4}$ ?',
        options: ['$\\dfrac{2}{7}$', '$\\dfrac{7}{12}$', '$\\dfrac{5}{12}$', '$\\dfrac{1}{12}$'],
        answer: 1,
        correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Donc $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Combien vaut $\\dfrac{3}{4} - \\dfrac{1}{6}$ ?',
        options: ['$\\dfrac{2}{2}$', '$\\dfrac{7}{12}$', '$\\dfrac{1}{3}$', '$\\dfrac{8}{24}$'],
        answer: 1,
        correction: 'Dénominateur commun : $12$. $\\dfrac{3}{4} = \\dfrac{9}{12}$ et $\\dfrac{1}{6} = \\dfrac{2}{12}$. Donc $\\dfrac{9}{12} - \\dfrac{2}{12} = \\dfrac{7}{12}$.'
      },
      {
        q: 'Un élève calcule $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{7}$. Quelle règle a-t-il violée ?',
        options: [
          'Il a bien calculé : $1+1=2$ et $3+4=7$.',
          'On ne peut pas additionner les numérateurs ET les dénominateurs séparément. Il faut un dénominateur commun : $\\dfrac{4}{12} + \\dfrac{3}{12} = \\dfrac{7}{12}$.',
          'Il aurait dû multiplier : $\\dfrac{1}{3} \\times \\dfrac{1}{4} = \\dfrac{1}{12}$.',
          'La bonne réponse est $\\dfrac{1}{3} + \\dfrac{1}{4} = \\dfrac{2}{12} = \\dfrac{1}{6}$.'
        ],
        answer: 1,
        correction: 'L\'erreur classique ! On ne peut pas additionner numérateurs et dénominateurs séparément — les dénominateurs représentent des unités différentes (tiers ≠ quarts). Le bon calcul : PPCM(3, 4) = 12, donc $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$, et la somme est $\\dfrac{7}{12}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const denomPairs = [[2,3],[3,4],[4,5],[2,5],[3,5],[4,3],[2,7],[3,7],[5,6]];
        const [b, d] = pick(denomPairs);
        const a = rand(1, b - 1);
        const c = rand(1, d - 1);
        function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
        const lcm = (b * d) / gcd(b, d);
        const num = a * (lcm / b) + c * (lcm / d);
        const g = gcd(num, lcm);
        const answerNum = num / g;
        const answerDen = lcm / g;
        const answer = answerNum / answerDen;

        const ctx = pick([
          {
            intro: `Pour une recette de crêpes, il faut $\\dfrac{${a}}{${b}}$ de litre de lait et $\\dfrac{${c}}{${d}}$ de litre de crème.<br/>Quelle <strong>quantité totale</strong> de liquide faut-il ?`,
            hint: `Trouve le dénominateur commun de $${b}$ et $${d}$ pour additionner ces fractions de litre.`
          },
          {
            intro: `Un terrain est partagé : $\\dfrac{${a}}{${b}}$ est un jardin et $\\dfrac{${c}}{${d}}$ est une terrasse.<br/>Quelle <strong>fraction totale</strong> du terrain ces deux espaces occupent-ils ?`,
            hint: `Pour additionner les fractions, il faut le même dénominateur. Le PPCM de $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Noa a couru pendant $\\dfrac{${a}}{${b}}$ d'heure le matin et $\\dfrac{${c}}{${d}}$ d'heure l'après-midi.<br/>Pendant combien de temps a-t-il couru <strong>au total</strong> ?`,
            hint: `Convertis les deux fractions d'heure au même dénominateur ($${lcm}$) pour les additionner.`
          },
          {
            intro: `Sur un trajet, Léa a parcouru $\\dfrac{${a}}{${b}}$ du chemin à pied et $\\dfrac{${c}}{${d}}$ du chemin à vélo.<br/>Quelle <strong>fraction du trajet</strong> a-t-elle déjà parcourue ?`,
            hint: `Même dénominateur nécessaire ! Le PPCM de $${b}$ et $${d}$ est $${lcm}$.`
          },
          {
            intro: `Pour un projet d'arts plastiques, Emma utilise $\\dfrac{${a}}{${b}}$ d'un tube de peinture bleue et $\\dfrac{${c}}{${d}}$ d'un tube de peinture jaune.<br/>Quelle <strong>quantité totale</strong> de peinture a-t-elle utilisée (en tubes) ?`,
            hint: `Additionne les deux fractions : trouve le dénominateur commun $${lcm}$.`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>Calcule $\\dfrac{${a}}{${b}} + \\dfrac{${c}}{${d}}$ et donne le résultat sous forme décimale arrondie à $0{,}01$.`,
          answer: parseFloat(answer.toFixed(2)),
          tolerance: 0.01,
          unit: '',
          hint: ctx.hint,
          solution: [
            `Dénominateur commun : $${lcm}$.`,
            `$\\dfrac{${a}}{${b}} = \\dfrac{${a * (lcm / b)}}{${lcm}}$ et $\\dfrac{${c}}{${d}} = \\dfrac{${c * (lcm / d)}}{${lcm}}$.`,
            `Somme : $\\dfrac{${num}}{${lcm}}${g > 1 ? ` = \\dfrac{${answerNum}}{${answerDen}}` : ''} \\approx ${parseFloat(answer.toFixed(2))}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une recette de gâteau demande $\\dfrac{3}{4}$ de tasse de farine complète et $\\dfrac{2}{3}$ de tasse de farine blanche.',
      tasks: [
        'Quelle est la quantité totale de farine utilisée (en tasses) ?',
        'Si on double la recette, quelle quantité de farine faut-il au total ?',
        'La boîte de farine contient $5$ tasses. Combien de recettes peut-on faire avec cette boîte ?'
      ],
      solutions: [
        '$\\dfrac{3}{4} + \\dfrac{2}{3} = \\dfrac{9}{12} + \\dfrac{8}{12} = \\dfrac{17}{12}$ tasses $\\approx 1{,}42$ tasses.',
        'Double : $2 \\times \\dfrac{17}{12} = \\dfrac{17}{6} \\approx 2{,}83$ tasses.',
        '$5 \\div \\dfrac{17}{12} = 5 \\times \\dfrac{12}{17} = \\dfrac{60}{17} \\approx 3{,}5$. On peut faire $3$ recettes complètes.'
      ],
      finalAnswer: 'Chaque recette utilise $\\dfrac{17}{12}$ tasses de farine ; on peut faire $3$ recettes complètes avec $5$ tasses.'
    },

    evaluation: {
      title: 'Évaluation — Opérations sur les fractions',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer $\\dfrac{2}{5} + \\dfrac{1}{3}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.73,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $15$. $\\dfrac{2}{5} = \\dfrac{6}{15}$ et $\\dfrac{1}{3} = \\dfrac{5}{15}$. Somme : $\\dfrac{6+5}{15} = \\dfrac{11}{15} \\approx 0{,}73$.'
        },
        {
          statement: 'Calculer $\\dfrac{5}{6} - \\dfrac{1}{4}$. Donner le résultat sous forme décimale arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.58,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun : $12$. $\\dfrac{5}{6} = \\dfrac{10}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$. Différence : $\\dfrac{10-3}{12} = \\dfrac{7}{12} \\approx 0{,}58$.'
        },
        {
          statement: 'Laquelle de ces égalités est correcte ?',
          type: 'multiple-choice',
          options: [
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{2}{7}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{7}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{3}{12}$',
            '$\\dfrac{1}{4} + \\dfrac{1}{3} = \\dfrac{4}{12}$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{4} = \\dfrac{3}{12}$ et $\\dfrac{1}{3} = \\dfrac{4}{12}$. Somme : $\\dfrac{3+4}{12} = \\dfrac{7}{12}$.'
        },
        {
          statement: 'Quelle fraction est la plus grande : $\\dfrac{3}{5}$ ou $\\dfrac{5}{8}$ ? Donner la valeur décimale de la plus grande, arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 0.63,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Dénominateur commun $40$ : $\\dfrac{3}{5} = \\dfrac{24}{40}$ et $\\dfrac{5}{8} = \\dfrac{25}{40}$. Comme $25 > 24$, $\\dfrac{5}{8} > \\dfrac{3}{5}$. Valeur décimale : $\\dfrac{5}{8} = 0{,}625 \\approx 0{,}63$.'
        },
        {
          statement: 'Calculer $\\dfrac{3}{4} + \\dfrac{1}{4} - \\dfrac{1}{2}$. Donner le résultat sous forme décimale.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\dfrac{3}{4} + \\dfrac{1}{4} = \\dfrac{4}{4} = 1$. Puis $1 - \\dfrac{1}{2} = \\dfrac{1}{2} = 0{,}5$.'
        }
      ]
    }
  },

  {
    id: '5e-proportionnalite',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Proportionnalité appliquée',
    subtitle: 'Pourcentages, échelles, vitesse moyenne',
    keywords: ['Proportionnalité', 'Pourcentage', 'Échelle', 'Vitesse', 'Distance', 'Durée'],
    physics: true,

    cours: {
      intro: 'La proportionnalité est l\'outil mathématique de la <strong>mise à l\'échelle</strong> : quand on double une grandeur, l\'autre double aussi. Les pourcentages sont un cas particulier où le coefficient est exprimé sur 100.<br/><br/>' +
        '<strong>Piège courant avec les pourcentages :</strong> une baisse de $20\\%$ puis une hausse de $20\\%$ ne revient PAS au prix initial ! Exemple : $100 \\to 80 \\to 96$ (pas $100$). En effet $0{,}8 \\times 1{,}2 = 0{,}96$.<br/><br/>' +
        'Les <strong>échelles cartographiques</strong> sont des rapports : $\\dfrac{1}{25\\,000}$ signifie que $1$ cm sur la carte = $25\\,000$ cm = $250$ m en réalité.<br/><br/>' +
        'La <strong>vitesse</strong> $v = \\dfrac{d}{t}$ est le coefficient de proportionnalité entre distance et temps quand la vitesse est constante. Toujours vérifier la cohérence des unités : $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s.',
      definitions: [
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100. $p\\%$ de $T = \\dfrac{p}{100} \\times T$.' },
        { term: 'Échelle', def: 'Rapport entre une distance sur un plan et la distance réelle correspondante. Échelle $\\dfrac{1}{25\\,000}$ → 1 cm = 250 m.' },
        { term: 'Vitesse moyenne', def: 'Quotient de la distance totale par le temps total : $v = \\dfrac{d}{t}$. S\'exprime en km/h ou m/s.' },
        { term: 'Coefficient multiplicateur', def: 'Facteur par lequel on multiplie pour appliquer une variation. $+20\\% \\to \\times 1{,}20$ ; $-15\\% \\to \\times 0{,}85$.' }
      ],
      example: {
        statement: 'Un jean coûte $60$ €. Il est soldé à $-30\\%$. Quel est le nouveau prix ?',
        steps: [
          'Réduction : $30\\%$ de $60 = \\dfrac{30}{100} \\times 60 = 18$ €.',
          'Nouveau prix : $60 - 18 = 42$ €.',
          'Ou directement : $60 \\times 0{,}70 = 42$ €.'
        ],
        answer: '$42$ €'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Variation</th><th style="border:1px solid var(--border);padding:6px 14px">Coefficient</th><th style="border:1px solid var(--border);padding:6px 14px">Exemple (100 €)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$+20\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1{,}20$</td><td style="border:1px solid var(--border);padding:6px 14px">$120$ €</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$-30\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 0{,}70$</td><td style="border:1px solid var(--border);padding:6px 14px">$70$ €</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$+20\\%$ puis $-20\\%$</td><td style="border:1px solid var(--border);padding:6px 14px">$1{,}2 \\times 0{,}8 = 0{,}96$</td><td style="border:1px solid var(--border);padding:6px 14px">$96$ € (≠ 100 €)</td></tr></table>',
      method: {
        title: 'Méthode en 3 cas',
        steps: [
          'Pourcentage : $p\\%$ de $T = \\dfrac{p}{100} \\times T$. Pour trouver le taux : $\\dfrac{\\text{partie}}{\\text{total}} \\times 100$.',
          'Échelle : $\\text{distance réelle} = \\dfrac{\\text{distance sur plan}}{\\text{échelle}}$. Ex : échelle $1/25000$ → $1$ cm sur plan = $250$ m réels.',
          'Vitesse : $v = \\dfrac{d}{t}$, donc $d = v \\times t$ et $t = \\dfrac{d}{v}$. Vérifier la cohérence des unités (km/h, m/s).'
        ]
      },
      formulas: [
        '$p\\% \\text{ de } T = \\dfrac{p}{100} \\times T$',
        'Échelle $e$ : $d_{\\text{réelle}} = \\dfrac{d_{\\text{plan}}}{e}$',
        '$v = \\dfrac{d}{t}$ ; $d = v \\times t$ ; $t = \\dfrac{d}{v}$',
        'Conversion : $1\\,\\text{km/h} = \\dfrac{1}{3{,}6}\\,\\text{m/s}$'
      ],
      recap: [
        '$p\\%$ de $T$ = $\\dfrac{p}{100} \\times T$. Ne jamais oublier de diviser par 100.',
        'Les hausses et baisses de pourcentage ne s\'annulent pas : $+20\\%$ puis $-20\\%$ donne $-4\\%$.',
        'Vitesse = distance ÷ temps. Vérifier que les unités sont cohérentes.',
        'Échelle : multiplier la distance sur la carte par le dénominateur de l\'échelle.'
      ],
      piege: 'Piège avec les unités de vitesse : $90$ km/h $\\neq$ $90$ m/s. Pour convertir : $90 \\div 3{,}6 = 25$ m/s. Toujours vérifier que distance et temps sont dans les mêmes unités que la vitesse.'
    },

    quiz: [
      {
        q: 'Un article coûte $80$ €. Il est soldé à $-25\\%$. Quel est son nouveau prix ?',
        options: ['$55$ €', '$60$ €', '$65$ €', '$20$ €'],
        answer: 1,
        correction: 'Réduction : $25\\%$ de $80 = \\dfrac{25}{100} \\times 80 = 20$ €. Nouveau prix : $80 - 20 = 60$ €.'
      },
      {
        q: 'Sur une carte à l\'échelle $1/50\\,000$, deux villes sont distantes de $4$ cm. Quelle est la distance réelle ?',
        options: ['$200$ m', '$2$ km', '$20$ km', '$200$ km'],
        answer: 1,
        correction: '$d_{\\text{réelle}} = 4 \\times 50\\,000 = 200\\,000$ cm $= 2000$ m $= 2$ km.'
      },
      {
        q: 'Un article est d\'abord augmenté de $20\\%$, puis réduit de $20\\%$. Quel est le prix final par rapport au prix initial ?',
        options: [
          'Le même prix qu\'au départ : $+20\\%$ puis $-20\\%$ s\'annulent.',
          'Un prix inférieur de $4\\%$ au départ : $100 \\to 120 \\to 96$.',
          'Un prix supérieur de $4\\%$ au départ.',
          'Impossible à savoir sans connaître le prix initial.'
        ],
        answer: 1,
        correction: 'Les pourcentages ne s\'annulent pas ! Partir de $100$ € : $+20\\%$ → $120$ €, puis $-20\\%$ de $120$ → $120 \\times 0{,}8 = 96$ €. Le résultat est $96$ €, soit $4\\%$ de moins que le départ.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { item: 'veste', emoji: '🧥' },
          { item: 'paire de baskets', emoji: '👟' },
          { item: 'console de jeux', emoji: '🎮' },
          { item: 'vélo', emoji: '🚲' },
          { item: 'montre', emoji: '⌚' }
        ]);
        const prix = pick([50, 80, 120, 200, 250]);
        const taux = pick([10, 20, 25, 30, 40]);
        const reduction = prix * taux / 100;
        const newPrix = prix - reduction;
        return {
          statement: `${ctx.emoji} Une ${ctx.item} coûte $${prix}$ €. Elle est soldée à $-${taux}\\%$. Quel est son nouveau prix en euros ?`,
          answer: newPrix,
          tolerance: 0,
          unit: '€',
          hint: `Calcule d'abord la réduction : $${taux}\\%$ de $${prix}$, puis soustrait du prix initial.`,
          solution: [
            `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${reduction}$ €.`,
            `Nouveau prix : $${prix} - ${reduction} = ${newPrix}$ €.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un cycliste effectue un trajet de $60$ km. Il roule d\'abord $1{,}5$ h à $30$ km/h, puis s\'arrête $15$ min, puis continue à $20$ km/h.',
      tasks: [
        'Quelle distance parcourt-il lors de la première partie du trajet ?',
        'Quelle distance lui reste-t-il après la pause ?',
        'Combien de temps lui faut-il pour finir (en heures) ?'
      ],
      solutions: [
        '$d_1 = 30 \\times 1{,}5 = 45$ km.',
        'Distance restante : $60 - 45 = 15$ km.',
        '$t = \\dfrac{15}{20} = 0{,}75$ h $= 45$ min.'
      ],
      finalAnswer: 'Il lui faut encore $45$ minutes pour terminer les $15$ km restants.'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité appliquée',
      duration: '25 min',
      questions: [
        {
          statement: 'Un article coûte $150$ €. Il est soldé à $-30\\%$. Quel est son nouveau prix ?',
          type: 'numeric',
          answer: 105,
          tolerance: 0,
          unit: '€',
          points: 2,
          correction: 'Réduction : $30\\%$ de $150 = \\dfrac{30}{100} \\times 150 = 45$ €. Nouveau prix : $150 - 45 = 105$ €.'
        },
        {
          statement: 'Sur une carte à l\'échelle $\\dfrac{1}{25\\,000}$, deux villages sont distants de $6$ cm. Quelle est la distance réelle en mètres ?',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'm',
          points: 2,
          correction: '$d_{\\text{réelle}} = 6 \\times 25\\,000 = 150\\,000$ cm $= 1\\,500$ m.'
        },
        {
          statement: 'Un cycliste roule à $18$ km/h pendant $2{,}5$ heures. Quelle distance parcourt-il ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 18 \\times 2{,}5 = 45$ km.'
        },
        {
          statement: 'Un prix passe de $200$ € à $170$ €. Quel est le pourcentage de réduction ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Réduction absolue : $200 - 170 = 30$ €. Pourcentage : $\\dfrac{30}{200} \\times 100 = 15\\%$.'
        },
        {
          statement: 'Un article subit une hausse de $10\\%$ puis une baisse de $10\\%$. Le prix final est :',
          type: 'multiple-choice',
          options: [
            'Égal au prix initial.',
            'Inférieur de $1\\%$ au prix initial.',
            'Supérieur de $1\\%$ au prix initial.',
            'Impossible à déterminer sans connaître le prix initial.'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec un prix initial de $100$ € : $+10\\% \\to 110$ €, puis $-10\\%$ de $110 \\to 110 \\times 0{,}9 = 99$ €. Le prix final est $99$ €, soit $1\\%$ de moins.'
        }
      ]
    }
  },

  {
    id: '5e-expressions-litterales',
    level: 1, subject: 'maths',
    icon: '🔤',
    title: 'Expressions littérales',
    subtitle: 'Calculer, réduire, substituer',
    keywords: ['Expression littérale', 'Variable', 'Substitution', 'Réduire', 'Termes semblables'],
    physics: false,

    cours: {
      intro: 'Jusqu\'ici, en arithmétique, tu calcules avec des <strong>nombres précis</strong> : « combien font $3 + 5$ ? ». Avec les expressions littérales, on franchit une étape fondamentale : on remplace « un nombre inconnu » par une <strong>lettre</strong> (souvent $x$, $a$, $n$…). C\'est le début de l\'<strong>algèbre</strong> !<br/><br/>' +
        'Imagine une formule de prix : « le prix est 5 € par kilo, plus 2 € de frais fixes ». En arithmétique, tu calculerais cas par cas ($5 \\times 1 + 2 = 7$, $5 \\times 2 + 2 = 12$…). Avec l\'algèbre, tu écris une seule formule : $P = 5x + 2$, et elle fonctionne <strong>pour toutes les valeurs</strong> de $x$ (le nombre de kilos). C\'est plus puissant, plus rapide, plus général.<br/><br/>' +
        '<strong>Termes semblables :</strong> on ne peut additionner que des termes avec la même variable au même degré — $3x$ et $5x$ sont semblables ($\\to 8x$), mais $3x$ et $5x^2$ ne le sont pas. De même, $2$ et $3x$ ne sont pas semblables. Pense à des unités : on n\'additionne pas des mètres et des mètres carrés !<br/><br/>' +
        'La <strong>substitution</strong> (remplacer la lettre par un nombre) permet de vérifier un résultat ou de calculer une formule physique comme $E_c = \\dfrac{1}{2}mv^2$ ou $U = RI$. C\'est un outil essentiel en sciences : on écrit la formule générale, puis on « injecte » les valeurs pour obtenir le résultat numérique.<br/><br/>' +
        'Pour vérifier qu\'une simplification est correcte, on peut substituer une valeur test : si $2 + 3x = 5x$ était vrai, alors pour $x = 2$ on aurait $2 + 6 = 10$, soit $8 = 10$, ce qui est faux. Cet outil de vérification te sera très utile tout au long du collège et au lycée.',
      definitions: [
        { term: 'Expression littérale', def: 'Expression contenant des lettres (variables) et des nombres liés par des opérations. Ex : $3x + 2y - 5$.' },
        { term: 'Termes semblables', def: 'Termes ayant exactement la même partie littérale (même variable, même exposant). $3x$ et $-5x$ sont semblables ; $3x$ et $3x^2$ ne le sont pas.' },
        { term: 'Substitution', def: 'Action de remplacer chaque lettre par une valeur numérique pour calculer le résultat.' },
        { term: 'Forme réduite', def: 'Expression dans laquelle tous les termes semblables ont été regroupés. Ex : $5a + 3b - 2a = 3a + 3b$.' }
      ],
      example: {
        statement: 'Réduire $7x - 3 + 2x + 5$, puis calculer pour $x = 4$.',
        steps: [
          'Regrouper les termes en $x$ : $7x + 2x = 9x$.',
          'Regrouper les constantes : $-3 + 5 = 2$.',
          'Forme réduite : $9x + 2$.',
          'Pour $x = 4$ : $9 \\times 4 + 2 = 36 + 2 = 38$.'
        ],
        answer: 'Forme réduite : $9x + 2$ ; pour $x = 4$ : $38$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Expression</th><th style="border:1px solid var(--border);padding:6px 14px">Semblables ?</th><th style="border:1px solid var(--border);padding:6px 14px">Résultat</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x$</td><td style="border:1px solid var(--border);padding:6px 14px">✅ Oui</td><td style="border:1px solid var(--border);padding:6px 14px">$8x$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$2 + 3x$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td><td style="border:1px solid var(--border);padding:6px 14px">$2 + 3x$ (déjà réduit)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x^2$</td><td style="border:1px solid var(--border);padding:6px 14px">❌ Non</td><td style="border:1px solid var(--border);padding:6px 14px">$3x + 5x^2$ (déjà réduit)</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Pour calculer la valeur : remplacer chaque lettre par sa valeur numérique, puis effectuer les calculs dans l\'ordre (priorités).',
          'Pour réduire : regrouper les termes semblables (même variable avec même exposant). Ex : $3x + 2x = 5x$.',
          'Attention aux signes : $-2x - 3x = -5x$ (les signes se combinent).'
        ]
      },
      formulas: [
        '$ax + bx = (a + b)x$ (factorisation par $x$)',
        '$a \\times b = ab$ (on peut omettre le signe $\\times$)',
        '$-a \\times (-b) = ab$ et $a \\times (-b) = -ab$',
        'Substitution : si $x = 3$, alors $2x + 1 = 2 \\times 3 + 1 = 7$'
      ],
      recap: [
        'Seuls les termes semblables (même variable, même degré) peuvent être additionnés.',
        '$2 + 3x \\neq 5x$ — une constante et un terme en $x$ ne se combinent pas.',
        'La substitution permet de vérifier une simplification.',
        'Les signes se combinent : $-2x - 3x = -5x$ (pas $-1x$).'
      ],
      piege: 'Piège : $2 + 3x \\neq 5x$. On ne peut pas additionner un terme constant ($2$) et un terme en $x$ ($3x$) — ce ne sont pas des termes semblables. $2 + 3x$ est déjà simplifié !'
    },

    quiz: [
      {
        q: 'Si $x = 4$, combien vaut $3x - 5$ ?',
        options: ['$7$', '$17$', '$8$', '$-2$'],
        answer: 0,
        correction: '$3x - 5 = 3 \\times 4 - 5 = 12 - 5 = 7$.'
      },
      {
        q: 'Quelle est la forme réduite de $5a + 3b - 2a + b$ ?',
        options: ['$3a + 4b$', '$7a + 4b$', '$3a + 2b$', '$6ab$'],
        answer: 0,
        correction: 'On regroupe les termes en $a$ : $5a - 2a = 3a$. Les termes en $b$ : $3b + b = 4b$. Résultat : $3a + 4b$.'
      },
      {
        q: 'Un élève simplifie $2 + 3x$ et trouve $5x$. Quelle est son erreur ?',
        options: [
          'Il a raison : $2 + 3 = 5$, donc $2 + 3x = 5x$.',
          '$2$ est une constante et $3x$ est un terme en $x$ — ce ne sont pas des termes semblables. $2 + 3x$ est déjà la forme la plus simple.',
          'L\'erreur est différente : il fallait écrire $2 \\times 3x = 6x$.',
          'Il fallait d\'abord substituer une valeur de $x$ avant de simplifier.'
        ],
        answer: 1,
        correction: 'On ne peut additionner que des termes semblables (même variable, même degré). $2$ est une constante (terme de degré 0) et $3x$ est de degré 1 — ils ne se combinent pas.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'Calcule la valeur de', letter: 'x' },
          { intro: 'Évalue l\'expression', letter: 'x' },
          { intro: 'Calcule', letter: 'a' },
          { intro: 'Détermine la valeur de', letter: 't' }
        ]);
        const a = rand(2, 6);
        const b = rand(1, 5);
        const x = rand(1, 8);
        const val = a * x + b;
        return {
          statement: `${ctx.intro} $${a}${ctx.letter} + ${b}$ pour $${ctx.letter} = ${x}$.`,
          answer: val,
          tolerance: 0,
          unit: '',
          hint: `Substitue $${ctx.letter}$ par $${x}$ : $${a} \\times ${x} + ${b}$.`,
          solution: [
            `On remplace $${ctx.letter}$ par $${x}$ :`,
            `$${a} \\times ${x} + ${b} = ${a * x} + ${b} = ${val}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un maraîcher vend des tomates $t$ € le kg et des salades $s$ € la pièce. Un client achète $3$ kg de tomates et $4$ salades.',
      tasks: [
        'Écrire une expression littérale du prix total payé par le client.',
        'Calculer le prix total si $t = 2{,}50$ € et $s = 0{,}80$ €.',
        'Un second client achète $5$ kg de tomates et $2$ salades. Écrire son prix total et le calculer avec les mêmes prix.'
      ],
      solutions: [
        'Prix total : $3t + 4s$.',
        '$3 \\times 2{,}50 + 4 \\times 0{,}80 = 7{,}50 + 3{,}20 = 10{,}70$ €.',
        'Second client : $5t + 2s = 5 \\times 2{,}50 + 2 \\times 0{,}80 = 12{,}50 + 1{,}60 = 14{,}10$ €.'
      ],
      finalAnswer: 'Le premier client paie $10{,}70$ €, le second $14{,}10$ €.'
    },

    evaluation: {
      title: 'Évaluation — Expressions littérales',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la valeur de $4x - 3$ pour $x = 5$.',
          type: 'numeric',
          answer: 17,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$4x - 3 = 4 \\times 5 - 3 = 20 - 3 = 17$.'
        },
        {
          statement: 'Réduire l\'expression $7a - 2b + 3a + 5b$. L\'expression réduite a un coefficient devant $a$ de :',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On regroupe les termes semblables : $7a + 3a = 10a$ et $-2b + 5b = 3b$. L\'expression réduite est $10a + 3b$. Le coefficient devant $a$ est $10$.'
        },
        {
          statement: 'Laquelle de ces simplifications est correcte ?',
          type: 'multiple-choice',
          options: [
            '$3 + 5x = 8x$',
            '$3x + 5x = 8x$',
            '$3x \\times 5x = 15x$',
            '$3x + 5 = 8x$'
          ],
          answer: 1,
          points: 2,
          correction: 'Seuls les termes semblables peuvent s\'additionner. $3x + 5x = (3+5)x = 8x$ est correct.'
        },
        {
          statement: 'Calculer la valeur de $2x^2 + 3x - 1$ pour $x = 3$.',
          type: 'numeric',
          answer: 26,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$2 \\times 3^2 + 3 \\times 3 - 1 = 2 \\times 9 + 9 - 1 = 18 + 9 - 1 = 26$.'
        },
        {
          statement: 'Calculer la valeur de $5(x + 2) - 3x$ pour $x = 4$.',
          type: 'numeric',
          answer: 18,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5(4 + 2) - 3 \\times 4 = 5 \\times 6 - 12 = 30 - 12 = 18$.'
        }
      ]
    }
  },

  {
    id: '5e-symetrie-centrale',
    level: 1, subject: 'maths',
    icon: '🔄',
    title: 'Symétrie centrale',
    subtitle: 'Centre de symétrie, construction du symétrique',
    keywords: ['Symétrie centrale', 'Centre', 'Rotation 180°', 'Milieu', 'Point symétrique'],
    physics: false,

    cours: {
      intro: 'La symétrie centrale par rapport à un point $O$ fait correspondre à chaque point $A$ un point $A\'$ tel que <strong>$O$ est le milieu de $[AA\']$</strong> — autrement dit, $O$ est « entre » $A$ et $A\'$, à égale distance des deux.<br/><br/>' +
        'C\'est équivalent à une <strong>rotation de $180°$</strong> autour de $O$. Visuellement, tout « tourne d\'un demi-tour ».<br/><br/>' +
        '<strong>Différence avec la symétrie axiale :</strong> la symétrie axiale utilise un axe (droite), la symétrie centrale utilise un point. Une figure peut avoir un centre de symétrie sans avoir d\'axe de symétrie (ex : le parallélogramme non rectangle).<br/><br/>' +
        'En coordonnées, la formule est simple : $A\'(2x_O - x_A \\;; 2y_O - y_A)$. La symétrie centrale conserve les distances et les angles, mais <strong>inverse l\'orientation</strong>.',
      definitions: [
        { term: 'Symétrie centrale', def: 'Transformation qui associe à chaque point $A$ un point $A\'$ tel que le centre $O$ est le milieu de $[AA\']$.' },
        { term: 'Centre de symétrie', def: 'Point $O$ par rapport auquel la symétrie est définie. Il est le milieu de chaque paire de points symétriques.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie centrale est une isométrie (indirecte car elle inverse l\'orientation).' },
        { term: 'Milieu d\'un segment', def: 'Point $M$ tel que $M = \\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$. Partage le segment en deux parties égales.' }
      ],
      example: {
        statement: 'Trouver le symétrique de $A(5 ; 3)$ par rapport à $O(2 ; 1)$.',
        steps: [
          '$x_{A\'} = 2 \\times 2 - 5 = 4 - 5 = -1$.',
          '$y_{A\'} = 2 \\times 1 - 3 = 2 - 3 = -1$.',
          'Vérification : milieu de $[AA\'] = \\left(\\dfrac{5+(-1)}{2} ; \\dfrac{3+(-1)}{2}\\right) = (2 ; 1) = O$ ✓.'
        ],
        answer: '$A\'(-1 ; -1)$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Propriété</th><th style="border:1px solid var(--border);padding:6px 14px">Symétrie axiale</th><th style="border:1px solid var(--border);padding:6px 14px">Symétrie centrale</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Élément</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Axe (droite)</td><td style="border:1px solid var(--border);padding:6px 14px">Centre (point)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Équivalence</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Pliage / miroir</td><td style="border:1px solid var(--border);padding:6px 14px">Rotation $180°$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Distances</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Conservées ✓</td><td style="border:1px solid var(--border);padding:6px 14px">Conservées ✓</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px"><strong>Orientation</strong></td><td style="border:1px solid var(--border);padding:6px 14px">Inversée</td><td style="border:1px solid var(--border);padding:6px 14px">Inversée</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Pour construire le symétrique de $A$ par rapport à $O$ : tracer la droite $(OA)$.',
          'Reporter la distance $OA$ de l\'autre côté de $O$ : $OA\' = OA$, et $O$ est entre $A$ et $A\'$.',
          'Pour une figure : construire le symétrique de chaque sommet, puis relier dans le même ordre.'
        ]
      },
      formulas: [
        '$O = $ milieu de $[AA\']$, donc $\\vec{OA\'} = -\\vec{OA}$',
        'En coordonnées : si $O(x_O ; y_O)$ et $A(x_A ; y_A)$, alors $A\'(2x_O - x_A ; 2y_O - y_A)$',
        'La symétrie centrale conserve : distances, angles, aires (isométrie indirecte).'
      ],
      recap: [
        'Le centre $O$ est le milieu de chaque paire de points symétriques.',
        'Formule : $A\'(2x_O - x_A ; 2y_O - y_A)$.',
        'Symétrie centrale = rotation de $180°$.',
        'Ne pas confondre avec la symétrie axiale (axe vs point).'
      ],
      piege: 'Piège : ne pas confondre symétrie axiale et symétrie centrale. La symétrie axiale utilise un axe (droite) ; la symétrie centrale utilise un point. La symétrie centrale revient à une rotation de $180°$.'
    },

    quiz: [
      {
        q: 'Le symétrique du point $A(3 ; 5)$ par rapport au point $O(1 ; 2)$ a pour coordonnées :',
        options: ['$(-1 ; -1)$', '$(2 ; 3)$', '$(-3 ; -5)$', '$(4 ; 7)$'],
        answer: 0,
        correction: '$A\'(2 \\times 1 - 3 ; 2 \\times 2 - 5) = (2 - 3 ; 4 - 5) = (-1 ; -1)$. Vérification : milieu de $[A\\ A\']$ : $\\left(\\frac{3-1}{2}; \\frac{5-1}{2}\\right) = (1; 2) = O$ ✓.'
      },
      {
        q: 'Un parallélogramme (non rectangle) possède-t-il un axe de symétrie ? Un centre de symétrie ?',
        options: [
          'Oui à un axe, non à un centre.',
          'Non à un axe, oui à un centre (intersection des diagonales).',
          'Oui aux deux.',
          'Non aux deux.'
        ],
        answer: 1,
        correction: 'Le parallélogramme général n\'a pas d\'axe de symétrie. En revanche, il a un centre de symétrie : le point d\'intersection de ses diagonales.'
      },
      {
        q: 'Un rectangle admet-il un centre de symétrie ?',
        options: ['Non, jamais', 'Oui, c\'est le milieu des diagonales', 'Oui, c\'est n\'importe quel sommet', 'Seulement s\'il est un carré'],
        answer: 1,
        correction: 'Le rectangle admet bien un centre de symétrie : le point d\'intersection de ses diagonales (leur milieu commun).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const coordType = pick([
          { ask: 'abscisse', coord: 'x' },
          { ask: 'ordonnée', coord: 'y' }
        ]);
        const ox = rand(0, 5);
        const oy = rand(0, 5);
        const ax = rand(-3, 8);
        const ay = rand(-3, 8);
        const symX = 2 * ox - ax;
        const symY = 2 * oy - ay;
        const answer = coordType.coord === 'x' ? symX : symY;

        const ctx = pick([
          {
            intro: `Sur un plan de ville, un monument $A$ se trouve aux coordonnées $(${ax} ; ${ay})$ et la place centrale $O$ est en $(${ox} ; ${oy})$.<br/>On veut construire un monument symétrique $A'$ par rapport à la place $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du monument $A'$ ?`
          },
          {
            intro: `Dans un jeu vidéo, un personnage $A$ est en $(${ax} ; ${ay})$ et un portail magique $O$ se situe en $(${ox} ; ${oy})$.<br/>Le portail téléporte le personnage vers son <strong>symétrique</strong> par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position d'arrivée $A'$ ?`
          },
          {
            intro: `Sur une carte au trésor, un repère $A$ est placé en $(${ax} ; ${ay})$. Le centre de la carte est le point $O(${ox} ; ${oy})$.<br/>L'indice dit : « le trésor est le symétrique de $A$ par rapport à $O$ ».`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du trésor $A'$ ?`
          },
          {
            intro: `En astronomie simplifiée, une planète $A$ orbite en $(${ax} ; ${ay})$ autour d'une étoile $O$ en $(${ox} ; ${oy})$.<br/>Le point diamétralement opposé de l'orbite est le symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de ce point opposé $A'$ ?`
          },
          {
            intro: `Sur un terrain de sport quadrillé, un joueur $A$ est en $(${ax} ; ${ay})$ et le centre du terrain $O$ est en $(${ox} ; ${oy})$.<br/>Son coéquipier $A'$ se place au point symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position de $A'$ ?`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>${ctx.question}`,
          answer,
          tolerance: 0,
          unit: '',
          hint: coordType.coord === 'x'
            ? `Formule : $x_{A'} = 2 \\times x_O - x_A = 2 \\times ${ox} - ${ax}$.`
            : `Formule : $y_{A'} = 2 \\times y_O - y_A = 2 \\times ${oy} - ${ay}$.`,
          solution: [
            `$x_{A'} = 2 \\times ${ox} - ${ax} = ${2 * ox} - ${ax} = ${symX}$`,
            `$y_{A'} = 2 \\times ${oy} - ${ay} = ${2 * oy} - ${ay} = ${symY}$`,
            `Le symétrique est $A'(${symX} ; ${symY})$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Sur une carte routière, une ville $A$ est à la position $(2 ; 5)$ et une ville $B$ est à $(8 ; 3)$ (en cm sur la carte). La gare $G$ est le milieu de $[AB]$.',
      tasks: [
        'Calculer les coordonnées de $G$ (milieu de $[AB]$).',
        'Trouver les coordonnées de $A\'$, symétrique de $A$ par rapport à $G$.',
        'Vérifier que $A\'$ coïncide avec $B$.'
      ],
      solutions: [
        '$G = \\left(\\dfrac{2+8}{2} ; \\dfrac{5+3}{2}\\right) = (5 ; 4)$.',
        '$A\'\\left(2 \\times 5 - 2 ; 2 \\times 4 - 5\\right) = (8 ; 3)$.',
        '$A\'(8 ; 3) = B(8 ; 3)$ ✓. Normal : $G$ est le milieu de $[AB]$, donc $B$ est le symétrique de $A$ par rapport à $G$.'
      ],
      finalAnswer: 'La gare est en $G(5 ; 4)$, et $B$ est bien le symétrique de $A$ par rapport à $G$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie centrale',
      duration: '20 min',
      questions: [
        {
          statement: 'Le symétrique du point $A(5 ; 3)$ par rapport au point $O(2 ; 1)$ a pour abscisse :',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_{A\'} = 2 \\times x_O - x_A = 2 \\times 2 - 5 = 4 - 5 = -1$.'
        },
        {
          statement: 'Le symétrique du point $B(1 ; -4)$ par rapport au point $O(3 ; 2)$ a pour ordonnée :',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y_{B\'} = 2 \\times y_O - y_B = 2 \\times 2 - (-4) = 4 + 4 = 8$.'
        },
        {
          statement: 'Si $O$ est le centre de symétrie d\'une figure et $A$ est un point de cette figure, alors :',
          type: 'multiple-choice',
          options: [
            '$O$ est sur le segment $[AA\']$ mais pas forcément au milieu.',
            '$O$ est le milieu du segment $[AA\']$.',
            '$A$ et $A\'$ sont à la même distance de l\'axe de symétrie.',
            '$A\'$ est le point le plus éloigné de $A$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Par définition de la symétrie centrale, $O$ est le milieu de $[AA\']$.'
        },
        {
          statement: 'Le milieu du segment $[AB]$ avec $A(-2 ; 6)$ et $B(4 ; -2)$ a pour abscisse :',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{-2 + 4}{2} = \\dfrac{2}{2} = 1$.'
        },
        {
          statement: 'Un parallélogramme possède-t-il un centre de symétrie ?',
          type: 'multiple-choice',
          options: [
            'Non, jamais.',
            'Oui, c\'est l\'intersection de ses diagonales.',
            'Seulement s\'il est un rectangle.',
            'Seulement s\'il est un carré.'
          ],
          answer: 1,
          points: 2,
          correction: 'Tout parallélogramme possède un centre de symétrie : c\'est le point d\'intersection de ses diagonales.'
        }
      ]
    }
  },

  {
    id: '5e-triangles',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Triangles',
    subtitle: 'Construction, types, inégalité triangulaire',
    keywords: ['Triangle', 'Inégalité triangulaire', 'Isocèle', 'Équilatéral', 'Rectangle', 'Somme des angles'],
    physics: false,

    cours: {
      intro: 'Le triangle est la <strong>forme géométrique la plus simple</strong> que l\'on puisse tracer avec des segments : trois côtés, trois sommets, trois angles. Mais derrière cette simplicité se cachent des propriétés puissantes, utilisées partout dans le monde réel.<br/><br/>' +
        'Sa propriété fondamentale : la <strong>somme des angles intérieurs est toujours $180°$</strong>, quelle que soit la forme du triangle. <strong>Pourquoi $180°$ ?</strong> Si l\'on trace une droite parallèle au côté de base passant par le sommet opposé, les trois angles du triangle forment exactement un angle plat (alternes-internes). Connaître deux angles suffit donc toujours à trouver le troisième !<br/><br/>' +
        'L\'<strong>inégalité triangulaire</strong> ($c < a + b$) traduit une réalité physique : le chemin direct entre deux points est toujours plus court que le chemin qui passe par un troisième point. Il suffit de vérifier que le <strong>plus grand côté</strong> est strictement inférieur à la somme des deux autres. Si cette condition n\'est pas respectée, le triangle est tout simplement impossible à construire : essaie de fermer un triangle avec des baguettes de $3$ cm, $4$ cm et $10$ cm — tu n\'y arriveras pas !<br/><br/>' +
        'Dans la <strong>vie courante</strong>, le triangle est partout : la charpente d\'un toit, les pylônes électriques, les ponts en treillis, les grues de chantier… Pourquoi ? Parce que le triangle est la seule figure géométrique qui est <strong>indéformable</strong> : un carré peut s\'aplatir en losange, mais un triangle garde toujours sa forme. C\'est pour cela que les ingénieurs l\'utilisent dans toute structure qui doit résister à des forces.<br/><br/>' +
        'Les triangles <strong>isocèles</strong> (2 côtés égaux → 2 angles de base égaux) et <strong>équilatéraux</strong> (3 côtés égaux → angles de $60°$) ont des propriétés de symétrie particulières qui les rendent encore plus utiles en architecture et en design.',
      definitions: [
        { term: 'Triangle', def: 'Polygone à 3 côtés. La somme de ses angles intérieurs vaut toujours $180°$.' },
        { term: 'Inégalité triangulaire', def: 'Pour que trois longueurs $a$, $b$, $c$ forment un triangle, le plus grand côté doit être strictement inférieur à la somme des deux autres.' },
        { term: 'Triangle isocèle', def: 'Triangle ayant au moins deux côtés de même longueur. Les deux angles à la base sont égaux.' },
        { term: 'Triangle équilatéral', def: 'Triangle dont les trois côtés sont égaux. Les trois angles valent $60°$.' }
      ],
      example: {
        statement: 'Peut-on construire un triangle avec des côtés de $5$ cm, $7$ cm et $10$ cm ? Si oui, quelle est la nature du triangle ?',
        steps: [
          'Plus grand côté : $10$. Somme des deux autres : $5 + 7 = 12$. $10 < 12$ ✓ → triangle possible.',
          'Vérifier si rectangle : $5^2 + 7^2 = 25 + 49 = 74$. $10^2 = 100$. $74 \\neq 100$ → pas rectangle.',
          'Tous les côtés différents → triangle scalène (quelconque).'
        ],
        answer: 'Triangle scalène (quelconque)'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Type</th><th style="border:1px solid var(--border);padding:6px 14px">Côtés</th><th style="border:1px solid var(--border);padding:6px 14px">Angles</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Quelconque</td><td style="border:1px solid var(--border);padding:6px 14px">Tous différents</td><td style="border:1px solid var(--border);padding:6px 14px">Tous différents</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Isocèle</td><td style="border:1px solid var(--border);padding:6px 14px">2 côtés égaux</td><td style="border:1px solid var(--border);padding:6px 14px">2 angles de base égaux</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Équilatéral</td><td style="border:1px solid var(--border);padding:6px 14px">3 côtés égaux</td><td style="border:1px solid var(--border);padding:6px 14px">$3 \\times 60°$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">$a^2 + b^2 = c^2$</td><td style="border:1px solid var(--border);padding:6px 14px">1 angle de $90°$</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Vérifier l\'inégalité triangulaire : le plus grand côté < somme des deux autres.',
          'Identifier le type : isocèle (2 côtés égaux), équilatéral (3 côtés égaux), rectangle (angle droit vérifié par Pythagore).',
          'Calculer un angle manquant : angle inconnu = $180° - $ (somme des deux autres angles).'
        ]
      },
      formulas: [
        'Somme des angles : $\\hat{A} + \\hat{B} + \\hat{C} = 180°$',
        'Inégalité triangulaire : $c < a + b$ (le plus grand côté)',
        'Triangle isocèle : deux côtés égaux ⟹ deux angles à la base égaux',
        'Triangle équilatéral : $a = b = c$ ⟹ $\\hat{A} = \\hat{B} = \\hat{C} = 60°$'
      ],
      recap: [
        'La somme des angles d\'un triangle est toujours $180°$.',
        'Le plus grand côté doit être strictement inférieur à la somme des deux autres.',
        'Triangle isocèle = 2 côtés égaux = 2 angles de base égaux.',
        'Triangle équilatéral = 3 côtés égaux = 3 angles de $60°$.'
      ],
      piege: 'Piège : ne vérifier l\'inégalité triangulaire que pour un seul cas. Il faut que LE PLUS GRAND côté soit inférieur à la somme des deux autres. Si $c$ est le plus grand, seule la vérification $c < a + b$ est nécessaire.'
    },

    quiz: [
      {
        q: 'Peut-on construire un triangle avec les côtés $4$ cm, $7$ cm et $12$ cm ?',
        options: ['Oui', 'Non, $12 \\geq 4 + 7$', 'Oui, si le triangle est isocèle', 'Non, les angles ne conviendraient pas'],
        answer: 1,
        correction: '$12 \\geq 4 + 7 = 11$. L\'inégalité triangulaire n\'est pas vérifiée ($12 \\not< 11$). On ne peut pas former ce triangle.'
      },
      {
        q: 'Dans un triangle $ABC$, $\\hat{A} = 65°$ et $\\hat{B} = 80°$. Combien vaut $\\hat{C}$ ?',
        options: ['$35°$', '$145°$', '$25°$', '$45°$'],
        answer: 0,
        correction: '$\\hat{C} = 180° - 65° - 80° = 35°$. La somme des angles d\'un triangle vaut toujours $180°$.'
      },
      {
        q: 'Un élève affirme qu\'un triangle avec des côtés $5$ cm, $5$ cm et $10$ cm est isocèle. Est-ce possible ?',
        options: [
          'Oui, car deux côtés sont égaux ($5$ cm = $5$ cm).',
          'Non : $10 = 5 + 5$, donc l\'inégalité triangulaire n\'est pas stricte ($10 \\not< 10$). Ce triangle est dégénéré (les trois points sont alignés).',
          'Oui, un triangle isocèle peut avoir deux côtés égaux à la somme du troisième.',
          'Non, un triangle isocèle doit avoir des côtés de longueurs différentes.'
        ],
        answer: 1,
        correction: 'Pour qu\'un triangle existe, il faut que chaque côté soit <em>strictement</em> inférieur à la somme des deux autres : $10 < 5 + 5 = 10$ est faux ($10 = 10$, pas $<$).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { shape: 'triangle de signalisation', emoji: '⚠️' },
          { shape: 'toiture triangulaire', emoji: '🏠' },
          { shape: 'voile de bateau', emoji: '⛵' },
          { shape: 'triangle de géométrie', emoji: '📐' }
        ]);
        const a = rand(30, 70);
        const b = rand(30, 70);
        const c = 180 - a - b;
        return {
          statement: `${ctx.emoji} Dans un ${ctx.shape}, deux angles mesurent $${a}°$ et $${b}°$. Combien mesure le troisième angle (en degrés) ?`,
          answer: c,
          tolerance: 0,
          unit: '°',
          hint: `La somme des angles d'un triangle est $180°$. Donc le troisième angle vaut $180 - ${a} - ${b}$.`,
          solution: [
            `Somme des angles = $180°$`,
            `Troisième angle $= 180 - ${a} - ${b} = ${c}°$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un architecte dessine une charpente triangulaire avec trois poutres mesurant $5$ m, $8$ m et $11$ m.',
      tasks: [
        'Vérifier que ces trois longueurs forment bien un triangle (inégalité triangulaire).',
        'Ce triangle est-il rectangle ? (Vérifier avec le théorème de Pythagore : $5^2 + 8^2$ et $11^2$.)',
        'Si l\'un des angles de la charpente mesure $40°$ et un autre $65°$, quel est le troisième angle ?'
      ],
      solutions: [
        '$11 < 5 + 8 = 13$ ✓. L\'inégalité est vérifiée, le triangle existe.',
        '$5^2 + 8^2 = 25 + 64 = 89 \\neq 121 = 11^2$. Ce triangle n\'est pas rectangle.',
        '$180 - 40 - 65 = 75°$.'
      ],
      finalAnswer: 'La charpente forme un triangle (non rectangle) ; le troisième angle de la charpente est $75°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangles',
      duration: '20 min',
      questions: [
        {
          statement: 'Dans un triangle $ABC$, $\\hat{A} = 72°$ et $\\hat{B} = 53°$. Combien mesure $\\hat{C}$ (en degrés) ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\hat{C} = 180° - 72° - 53° = 55°$.'
        },
        {
          statement: 'Peut-on construire un triangle avec des côtés de $3$ cm, $5$ cm et $9$ cm ?',
          type: 'multiple-choice',
          options: [
            'Oui, car $3 + 5 + 9 = 17$.',
            'Non, car $9 > 3 + 5 = 8$ : l\'inégalité triangulaire n\'est pas vérifiée.',
            'Oui, si on utilise un rapporteur.',
            'Oui, car $9 < 3 \\times 5 = 15$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le plus grand côté ($9$) doit être strictement inférieur à la somme des deux autres ($3 + 5 = 8$). Or $9 > 8$, donc ce triangle n\'existe pas.'
        },
        {
          statement: 'Un triangle a des angles de $60°$, $60°$ et $60°$. De quel type est-il ?',
          type: 'multiple-choice',
          options: [
            'Triangle rectangle.',
            'Triangle isocèle.',
            'Triangle équilatéral.',
            'Triangle quelconque.'
          ],
          answer: 2,
          points: 2,
          correction: 'Si les trois angles sont égaux ($60°$), les trois côtés sont aussi égaux : c\'est un triangle équilatéral.'
        },
        {
          statement: 'Un triangle isocèle a un angle au sommet de $40°$. Combien mesure chaque angle de la base (en degrés) ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les deux angles de la base sont égaux. Soit $x$ leur mesure : $40 + 2x = 180$, donc $2x = 140$ et $x = 70°$.'
        },
        {
          statement: 'Peut-on construire un triangle avec des côtés de $6$ cm, $8$ cm et $13$ cm ?',
          type: 'multiple-choice',
          options: [
            'Non, car $13 < 6 + 8$ est faux.',
            'Oui, car $13 < 6 + 8 = 14$.',
            'Non, car $6 + 8 = 14$ et $14 < 13$.',
            'Oui, car $6^2 + 8^2 = 100$ et $13^2 = 169$.'
          ],
          answer: 1,
          points: 2,
          correction: '$13 < 6 + 8 = 14$ est vrai. L\'inégalité triangulaire est vérifiée : ce triangle existe.'
        }
      ]
    }
  },

  {
    id: '5e-parallelogrammes',
    level: 1, subject: 'maths',
    icon: '▱',
    title: 'Parallélogrammes et propriétés',
    subtitle: 'Parallélogramme, rectangle, losange, carré',
    keywords: ['Parallélogramme', 'Rectangle', 'Losange', 'Carré', 'Diagonales', 'Côtés parallèles'],
    physics: false,

    cours: {
      intro: 'Un parallélogramme est un quadrilatère avec <strong>deux paires de côtés parallèles</strong>. De cette propriété découlent toutes les autres : les côtés opposés sont égaux, les angles opposés sont égaux, et les diagonales se coupent en leur milieu.<br/><br/>' +
        '<strong>Hiérarchie :</strong> tout carré est un rectangle et un losange ; tout rectangle est un parallélogramme ; tout losange est un parallélogramme — mais l\'inverse n\'est pas vrai.<br/><br/>' +
        'Pour <strong>identifier</strong> un parallélogramme, il suffit de vérifier <em>une</em> des conditions : côtés opposés parallèles, ou côtés opposés égaux, ou diagonales se coupant en leur milieu.<br/><br/>' +
        'L\'<strong>aire d\'un parallélogramme</strong> est base × hauteur. Attention : la hauteur est perpendiculaire à la base, pas le côté latéral. L\'aire d\'un losange se calcule avec ses diagonales : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$.',
      definitions: [
        { term: 'Parallélogramme', def: 'Quadrilatère dont les côtés opposés sont parallèles et de même longueur. Les diagonales se coupent en leur milieu.' },
        { term: 'Rectangle', def: 'Parallélogramme ayant 4 angles droits. Ses diagonales sont de même longueur.' },
        { term: 'Losange', def: 'Parallélogramme ayant 4 côtés de même longueur. Ses diagonales sont perpendiculaires.' },
        { term: 'Carré', def: 'Quadrilatère qui est à la fois rectangle ET losange : 4 angles droits et 4 côtés égaux.' }
      ],
      example: {
        statement: 'Un losange a des diagonales de $8$ cm et $6$ cm. Calcule son aire et le demi-côté.',
        steps: [
          'Aire : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².',
          'Les diagonales se coupent perpendiculairement en leur milieu → demi-diagonales : $4$ et $3$ cm.',
          'Par Pythagore : côté $= \\sqrt{4^2 + 3^2} = \\sqrt{25} = 5$ cm.'
        ],
        answer: 'Aire = $24$ cm², côté = $5$ cm'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Figure</th><th style="border:1px solid var(--border);padding:6px 14px">Côtés</th><th style="border:1px solid var(--border);padding:6px 14px">Angles</th><th style="border:1px solid var(--border);padding:6px 14px">Diagonales</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Parallélogramme</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Se coupent en leur milieu</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">4 × 90°</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + même longueur</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Losange</td><td style="border:1px solid var(--border);padding:6px 14px">4 côtés =</td><td style="border:1px solid var(--border);padding:6px 14px">Opposés =</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + perpendiculaires</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Carré</td><td style="border:1px solid var(--border);padding:6px 14px">4 côtés =</td><td style="border:1px solid var(--border);padding:6px 14px">4 × 90°</td><td style="border:1px solid var(--border);padding:6px 14px">Milieu + = + ⊥</td></tr></table>',
      method: {
        title: 'Méthode : identifier et utiliser les propriétés',
        steps: [
          'Parallélogramme : côtés opposés parallèles ET égaux ; diagonales qui se coupent en leur milieu.',
          'Rectangle : parallélogramme avec 4 angles droits ; diagonales égales.',
          'Losange : parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires.',
          'Carré : rectangle ET losange (4 angles droits + 4 côtés égaux).'
        ]
      },
      formulas: [
        'Parallélogramme $ABCD$ : $\\vec{AB} = \\vec{DC}$ (vecteurs égaux)',
        'Diagonales d\'un parallélogramme : milieu de $[AC]$ = milieu de $[BD]$',
        'Aire du parallélogramme : $\\mathcal{A} = b \\times h$ (base $\\times$ hauteur)',
        'Aire du losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ (demi-produit des diagonales)'
      ],
      recap: [
        'Les diagonales d\'un parallélogramme se coupent en leur milieu.',
        'Rectangle = parallélogramme + angles droits. Losange = parallélogramme + côtés égaux.',
        'Carré = rectangle + losange.',
        'Aire du losange : $\\dfrac{d_1 \\times d_2}{2}$.'
      ],
      piege: 'Piège : un rectangle est TOUJOURS un parallélogramme, mais un parallélogramme n\'est pas forcément un rectangle. Hiérarchie : carré ⊂ rectangle ⊂ parallélogramme et carré ⊂ losange ⊂ parallélogramme.'
    },

    quiz: [
      {
        q: 'Dans un parallélogramme $ABCD$, les diagonales $[AC]$ et $[BD]$ :',
        options: [
          'Se coupent à angle droit',
          'Sont égales',
          'Se coupent en leur milieu commun',
          'Ne se coupent pas'
        ],
        answer: 2,
        correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Ce n\'est qu\'en plus pour un rectangle qu\'elles sont égales, et pour un losange qu\'elles sont perpendiculaires.'
      },
      {
        q: 'Un losange a ses diagonales mesurant $6$ cm et $8$ cm. Quelle est son aire ?',
        options: ['$48$ cm²', '$24$ cm²', '$14$ cm²', '$12$ cm²'],
        answer: 1,
        correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{6 \\times 8}{2} = 24$ cm².'
      },
      {
        q: 'Un élève dit : « Si $ABCD$ est un parallélogramme et que $AB = BC$, alors c\'est forcément un carré ». Est-ce vrai ?',
        options: [
          'Oui : côtés opposés égaux + côtés adjacents égaux → tous les côtés égaux → carré.',
          'Non : si tous les côtés sont égaux, c\'est un losange, pas forcément un carré. Il faudrait aussi un angle droit.',
          'Oui, car un parallélogramme avec un côté supplémentaire égal est toujours un carré.',
          'Non, ça dépend du nombre de côtés égaux.'
        ],
        answer: 1,
        correction: 'Si dans un parallélogramme $AB = BC$, alors tous les côtés sont égaux → c\'est un <em>losange</em>. Pour que ce soit un carré, il faudrait en plus un angle droit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { shape: 'carreau de mosaïque', emoji: '🔷' },
          { shape: 'logo en forme de losange', emoji: '💎' },
          { shape: 'panneau routier losange', emoji: '🔶' },
          { shape: 'vitrail en losange', emoji: '🪟' }
        ]);
        const d1 = rand(3, 12);
        const d2 = rand(3, 12);
        const aire = (d1 * d2) / 2;
        return {
          statement: `${ctx.emoji} Un ${ctx.shape} a des diagonales mesurant $${d1}$ cm et $${d2}$ cm. Calcule son aire en cm².`,
          answer: aire,
          tolerance: 0,
          unit: 'cm²',
          hint: `Aire d'un losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{${d1} \\times ${d2}}{2}$.`,
          solution: [
            `Formule : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$`,
            `$\\mathcal{A} = \\dfrac{${d1} \\times ${d2}}{2} = \\dfrac{${d1 * d2}}{2} = ${aire}$ cm²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un carreleur pose du carrelage en forme de losange dans un couloir. Chaque losange a ses diagonales mesurant $20$ cm et $30$ cm. Le couloir a une superficie de $6$ m².',
      tasks: [
        'Calcule l\'aire d\'un carreau losange en cm².',
        'Convertis cette aire en m².',
        'Combien de carreaux faut-il pour couvrir le couloir (sans tenir compte des chutes) ?'
      ],
      solutions: [
        '$\\mathcal{A} = \\dfrac{20 \\times 30}{2} = 300$ cm².',
        '$300$ cm² $= 0{,}03$ m² (car $1$ m² $= 10\\,000$ cm²).',
        '$6 \\div 0{,}03 = 200$ carreaux.'
      ],
      finalAnswer: 'Il faut $200$ carreaux losange pour couvrir le couloir.'
    },

    evaluation: {
      title: 'Évaluation — Parallélogrammes et propriétés',
      duration: '25 min',
      questions: [
        {
          statement: 'Un losange a des diagonales de $10$ cm et $14$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{10 \\times 14}{2} = \\dfrac{140}{2} = 70$ cm².'
        },
        {
          statement: 'Un parallélogramme $ABCD$ a une base $AB = 9$ cm et une hauteur $h = 6$ cm. Quelle est son aire en cm² ?',
          type: 'numeric',
          answer: 54,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = b \\times h = 9 \\times 6 = 54$ cm².'
        },
        {
          statement: 'Les diagonales d\'un parallélogramme :',
          type: 'multiple-choice',
          options: [
            'Sont toujours perpendiculaires.',
            'Sont toujours de même longueur.',
            'Se coupent toujours en leur milieu.',
            'Ne se coupent jamais.'
          ],
          answer: 2,
          points: 2,
          correction: 'Les diagonales d\'un parallélogramme se coupent en leur milieu. Elles ne sont perpendiculaires que pour un losange, et de même longueur que pour un rectangle.'
        },
        {
          statement: 'Parmi ces affirmations, laquelle est vraie ?',
          type: 'multiple-choice',
          options: [
            'Tout losange est un rectangle.',
            'Tout rectangle est un carré.',
            'Tout carré est un losange.',
            'Tout parallélogramme est un rectangle.'
          ],
          answer: 2,
          points: 2,
          correction: 'Un carré a $4$ côtés égaux et $4$ angles droits. Puisqu\'il a $4$ côtés égaux, c\'est un losange.'
        },
        {
          statement: 'Les diagonales d\'un rectangle $ABCD$ mesurent $AC = BD = 12$ cm. Elles se coupent en $O$. Quelle est la longueur $OA$ en cm ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Les diagonales d\'un rectangle se coupent en leur milieu $O$. Donc $OA = \\dfrac{AC}{2} = \\dfrac{12}{2} = 6$ cm.'
        }
      ]
    }
  },

  {
    id: '5e-angles-parallelisme',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Angles et parallélisme',
    subtitle: 'Alternes-internes, correspondants, coalternes',
    keywords: ['Angle', 'Parallèles', 'Sécante', 'Alternes-internes', 'Correspondants'],
    physics: false,

    cours: {
      intro: 'Quand une <strong>sécante</strong> coupe deux droites parallèles, elle crée des paires d\'angles avec des relations précises.<br/><br/>' +
        'Les <strong>alternes-internes</strong> (configuration en Z) sont <strong>égaux</strong>. Les <strong>correspondants</strong> (configuration en F) sont <strong>égaux</strong>. Les <strong>coalternes-internes</strong> (configuration en U) sont <strong>supplémentaires</strong> (somme = $180°$).<br/><br/>' +
        '<strong>Point clé :</strong> ces propriétés ne valent que si les droites sont parallèles — et réciproquement, si ces propriétés sont vérifiées, alors les droites sont forcément parallèles. C\'est une façon de <em>démontrer</em> le parallélisme.<br/><br/>' +
        'En optique, les rayons parallèles incidents sur un miroir vérifient ces propriétés angulaires, ce qui explique la construction des images dans les miroirs plans.',
      definitions: [
        { term: 'Sécante', def: 'Droite qui coupe deux autres droites. Elle crée des angles à chaque point d\'intersection.' },
        { term: 'Angles alternes-internes', def: 'Paire d\'angles situés de part et d\'autre de la sécante, entre les deux droites (configuration en Z). Égaux si les droites sont parallèles.' },
        { term: 'Angles correspondants', def: 'Paire d\'angles situés du même côté de la sécante, l\'un entre les droites et l\'autre à l\'extérieur (configuration en F). Égaux si parallèles.' },
        { term: 'Angles supplémentaires', def: 'Deux angles dont la somme vaut $180°$. Les coalternes-internes sont supplémentaires si les droites sont parallèles.' }
      ],
      example: {
        statement: 'Deux droites parallèles sont coupées par une sécante. Un angle mesure $72°$. Trouver les angles alternes-internes et coalternes.',
        steps: [
          'Angle alterne-interne : même mesure → $72°$ (car droites parallèles, configuration en Z).',
          'Angle coalterne-interne : supplémentaire → $180° - 72° = 108°$ (configuration en U).',
          'Angle correspondant : même mesure → $72°$ (configuration en F).'
        ],
        answer: 'Alterne-interne : $72°$, coalterne : $108°$, correspondant : $72°$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Paire d\'angles</th><th style="border:1px solid var(--border);padding:6px 14px">Configuration</th><th style="border:1px solid var(--border);padding:6px 14px">Relation (si //)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Alternes-internes</td><td style="border:1px solid var(--border);padding:6px 14px">Z</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} = \\hat{b}$ (égaux)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Correspondants</td><td style="border:1px solid var(--border);padding:6px 14px">F</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} = \\hat{c}$ (égaux)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Coalternes-internes</td><td style="border:1px solid var(--border);padding:6px 14px">U</td><td style="border:1px solid var(--border);padding:6px 14px">$\\hat{a} + \\hat{d} = 180°$</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la sécante (droite qui coupe les deux parallèles) et les deux parallèles.',
          'Repérer la configuration : alternes-internes (en Z), correspondants (en F), ou coalternes (en U).',
          'Appliquer la propriété : alternes-internes → égaux ; correspondants → égaux ; coalternes → supplémentaires.'
        ]
      },
      formulas: [
        'Alternes-internes : $\\hat{a} = \\hat{b}$ (configuration en Z)',
        'Correspondants : $\\hat{a} = \\hat{c}$ (configuration en F)',
        'Coalternes-internes : $\\hat{a} + \\hat{d} = 180°$ (configuration en U)',
        'Angles supplémentaires : $\\hat{a} + \\hat{b} = 180°$'
      ],
      recap: [
        'Alternes-internes (Z) et correspondants (F) sont ÉGAUX si les droites sont parallèles.',
        'Coalternes (U) sont SUPPLÉMENTAIRES ($+ = 180°$) si les droites sont parallèles.',
        'La réciproque est vraie : si ces relations sont vérifiées, les droites sont parallèles.',
        'Si les angles ne vérifient pas ces relations, les droites ne sont PAS parallèles.'
      ],
      piege: 'Piège : ces propriétés ne sont valables QUE si les deux droites sont parallèles. Si elles ne le sont pas, les angles alternes-internes ne sont plus égaux. C\'est aussi une façon de prouver que deux droites sont parallèles !'
    },

    quiz: [
      {
        q: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $65°$. Quel est l\'autre angle alterne-interne ?',
        options: ['$115°$', '$65°$', '$25°$', '$130°$'],
        answer: 1,
        correction: 'Les angles alternes-internes sont égaux quand les droites sont parallèles. L\'autre angle vaut donc $65°$.'
      },
      {
        q: 'Un angle coalterne-interne mesure $110°$. Quel est son angle coalterne-interne associé ?',
        options: ['$110°$', '$80°$', '$70°$', '$55°$'],
        answer: 2,
        correction: 'Les coalternes-internes sont supplémentaires : $180° - 110° = 70°$.'
      },
      {
        q: 'Une sécante coupe deux droites. Les angles alternes-internes valent $70°$ et $75°$. Que peut-on conclure ?',
        options: [
          'Les droites sont parallèles car les deux angles sont proches.',
          'Les droites ne sont pas parallèles : si elles l\'étaient, les alternes-internes seraient égaux ($70° = 75°$ est faux).',
          'Les droites sont perpendiculaires car $70° + 75° \\approx 145°$.',
          'On ne peut rien conclure sans connaître le troisième angle.'
        ],
        answer: 1,
        correction: 'Les alternes-internes sont égaux <em>si et seulement si</em> les droites sont parallèles. Ici $70° \\neq 75°$, donc les droites ne sont pas parallèles.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const type = pick([
          { name: 'coalterne-interne', relation: 'supplémentaire', calc: (a) => 180 - a },
          { name: 'correspondant', relation: 'égal', calc: (a) => a },
          { name: 'alterne-interne', relation: 'égal', calc: (a) => a }
        ]);
        const a = rand(30, 150);
        const answer = type.calc(a);
        return {
          statement: `Deux droites parallèles sont coupées par une sécante. Un angle ${type.name} mesure $${a}°$. Quel est l'angle ${type.name} associé (en degrés) ?`,
          answer,
          tolerance: 0,
          unit: '°',
          hint: type.relation === 'supplémentaire'
            ? 'Les angles coalternes-internes sont supplémentaires : leur somme vaut $180°$.'
            : `Les angles ${type.name}s sont égaux quand les droites sont parallèles.`,
          solution: [
            type.relation === 'supplémentaire'
              ? `Angles coalternes supplémentaires : $180 - ${a} = ${answer}°$.`
              : `Angles ${type.name}s égaux (droites parallèles) : $${answer}°$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un menuisier pose des lattes de parquet parallèles. Une règle posée en travers forme un angle de $52°$ avec la première latte.',
      tasks: [
        'Quel angle la règle fait-elle avec la deuxième latte (angle correspondant) ?',
        'Quel est l\'angle coalterne-interne associé à $52°$ ?',
        'Le menuisier veut poser une troisième latte perpendiculaire aux premières. Quel angle fait-elle avec la règle ?'
      ],
      solutions: [
        'Angle correspondant = $52°$ (droites parallèles).',
        'Coalterne : $180 - 52 = 128°$.',
        'Perpendiculaire → angle de $90°$ avec les lattes. Avec la règle : $90 - 52 = 38°$.'
      ],
      finalAnswer: 'La troisième latte fait $38°$ avec la règle.'
    },

    evaluation: {
      title: 'Évaluation — Angles et parallélisme',
      duration: '20 min',
      questions: [
        {
          statement: 'Deux droites parallèles sont coupées par une sécante. Un angle alterne-interne mesure $74°$. Quel est l\'autre angle alterne-interne (en degrés) ?',
          type: 'numeric',
          answer: 74,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les angles alternes-internes formés par deux droites parallèles coupées par une sécante sont égaux. L\'autre angle vaut donc $74°$.'
        },
        {
          statement: 'Un angle coalterne-interne mesure $125°$. Quel est l\'angle coalterne-interne associé (en degrés) ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les angles coalternes-internes sont supplémentaires : $180° - 125° = 55°$.'
        },
        {
          statement: 'Une sécante coupe deux droites. Les angles correspondants mesurent $62°$ et $62°$. Que peut-on en conclure ?',
          type: 'multiple-choice',
          options: [
            'Les droites sont perpendiculaires.',
            'Les droites sont parallèles.',
            'Les droites sont sécantes.',
            'On ne peut rien conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Si les angles correspondants sont égaux, alors les droites sont parallèles (réciproque de la propriété des angles correspondants).'
        },
        {
          statement: 'Deux angles supplémentaires ont pour mesures $x$ et $3x$. Quelle est la valeur de $x$ (en degrés) ?',
          type: 'numeric',
          answer: 45,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Deux angles supplémentaires ont pour somme $180°$ : $x + 3x = 180$, soit $4x = 180$, donc $x = 45°$.'
        },
        {
          statement: 'Deux droites sont coupées par une sécante. Les alternes-internes mesurent $50°$ et $55°$. Les droites sont-elles parallèles ?',
          type: 'multiple-choice',
          options: [
            'Oui, car les angles sont proches.',
            'Non, car $50° \\neq 55°$ : les alternes-internes ne sont pas égaux.',
            'Oui, car $50° + 55° \\approx 105°$.',
            'On ne peut pas conclure.'
          ],
          answer: 1,
          points: 2,
          correction: 'Les alternes-internes doivent être exactement égaux pour que les droites soient parallèles. Ici $50° \\neq 55°$, donc les droites ne sont pas parallèles.'
        }
      ]
    }
  },

  {
    id: '5e-aires-perimetres',
    level: 1, subject: 'maths',
    icon: '🔷',
    title: 'Aires et périmètres (approfondissement)',
    subtitle: 'Disque, figures composées, conversions',
    keywords: ['Aire', 'Périmètre', 'Disque', 'Secteur', 'Figures composées', 'Conversion'],
    physics: false,

    cours: {
      intro: 'Les figures complexes se décomposent toujours en <strong>figures simples</strong> (rectangles, triangles, disques). L\'aire totale est la somme (ou différence) des aires des parties.<br/><br/>' +
        '<strong>Règle de conversion des aires :</strong> quand on passe d\'une unité de longueur à une autre, l\'exposant $2$ s\'applique aussi au facteur de conversion : $1$ m $= 100$ cm, donc $1$ m² $= 100^2$ cm² $= 10\\,000$ cm². Beaucoup d\'élèves multiplient par $100$ au lieu de $10\\,000$ !<br/><br/>' +
        'Le <strong>disque</strong> de rayon $r$ a une aire $\\pi r^2$ — c\'est $r$ seul au carré, pas $\\pi r$ entier. Le périmètre (ou <strong>circonférence</strong>) vaut $2\\pi r$.<br/><br/>' +
        'Pour les <strong>figures composées</strong>, bien identifier si on ajoute une partie (rectangle + demi-disque) ou si on soustrait (carré avec un trou circulaire).',
      definitions: [
        { term: 'Aire', def: 'Mesure de la surface d\'une figure plane. S\'exprime en unités au carré (cm², m², etc.).' },
        { term: 'Périmètre', def: 'Longueur du contour d\'une figure. S\'exprime en unités de longueur (cm, m, etc.).' },
        { term: 'Disque', def: 'Surface délimitée par un cercle. Aire = $\\pi r^2$, périmètre = $2\\pi r$.' },
        { term: 'Figure composée', def: 'Figure obtenue en assemblant ou en retranchant des figures simples. Son aire est la somme (ou différence) des aires des parties.' }
      ],
      example: {
        statement: 'Calcule l\'aire d\'un terrain rectangulaire de $30$ m × $20$ m dans lequel on a creusé une piscine circulaire de rayon $4$ m.',
        steps: [
          'Aire du rectangle : $30 \\times 20 = 600$ m².',
          'Aire du disque (piscine) : $\\pi \\times 4^2 = 3{,}14 \\times 16 \\approx 50{,}3$ m².',
          'Aire restante : $600 - 50{,}3 = 549{,}7$ m².'
        ],
        answer: '$\\approx 549{,}7$ m²'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Conversion</th><th style="border:1px solid var(--border);padding:6px 14px">Longueurs</th><th style="border:1px solid var(--border);padding:6px 14px">Aires ($\\times$ facteur²)</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">m → cm</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 100$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 10\\,000$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">cm → mm</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 10$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 100$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">km → m</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1000$</td><td style="border:1px solid var(--border);padding:6px 14px">$\\times 1\\,000\\,000$</td></tr></table>',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Décomposer la figure complexe en figures simples connues.',
          'Calculer l\'aire de chaque partie séparément.',
          'Additionner (ou soustraire si une partie est retirée).',
          'Conversions : $1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, $1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$.'
        ]
      },
      formulas: [
        'Disque : $\\mathcal{A} = \\pi r^2$, $\\mathcal{P} = 2\\pi r$',
        'Demi-disque : $\\mathcal{A} = \\dfrac{\\pi r^2}{2}$',
        '$1\\,\\text{m}^2 = 10^4\\,\\text{cm}^2 = 10^6\\,\\text{mm}^2$',
        'Figures composées : $\\mathcal{A}_{\\text{tot}} = \\mathcal{A}_1 + \\mathcal{A}_2 \\pm \\ldots$'
      ],
      recap: [
        'Aire du disque : $\\pi r^2$ (bien utiliser le rayon, pas le diamètre !).',
        'Conversion d\'aires : élever le facteur de conversion au carré ($1$ m² = $10\\,000$ cm²).',
        'Figure composée = somme ou différence de figures simples.',
        'Périmètre d\'un cercle : $2\\pi r$ (ou $\\pi d$ avec le diamètre).'
      ],
      piege: 'Piège de conversion : $2\\,\\text{cm} = 20\\,\\text{mm}$ mais $2\\,\\text{cm}^2 \\neq 20\\,\\text{mm}^2$. En réalité $2\\,\\text{cm}^2 = 200\\,\\text{mm}^2$ (on multiplie par $100$, pas par $10$).'
    },

    quiz: [
      {
        q: 'Quelle est l\'aire d\'un demi-disque de rayon $6$ cm (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$56{,}52$ cm²', '$113{,}04$ cm²', '$18{,}84$ cm²', '$37{,}68$ cm²'],
        answer: 0,
        correction: '$\\mathcal{A} = \\dfrac{\\pi r^2}{2} = \\dfrac{3{,}14 \\times 36}{2} = \\dfrac{113{,}04}{2} = 56{,}52$ cm².'
      },
      {
        q: '$3{,}5\\,\\text{m}^2$ correspond à combien de cm² ?',
        options: ['$350$ cm²', '$3500$ cm²', '$35\\,000$ cm²', '$350\\,000$ cm²'],
        answer: 2,
        correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$, donc $3{,}5 \\times 10\\,000 = 35\\,000$ cm².'
      },
      {
        q: 'Un élève convertit $5$ cm² en mm² et trouve $50$ mm². Quelle est son erreur ?',
        options: [
          'Il a raison : $1$ cm $= 10$ mm, donc $5$ cm² $= 50$ mm².',
          'Il faut multiplier par $100$ (pas $10$) : $1$ cm² $= 10^2 = 100$ mm². Donc $5$ cm² $= 500$ mm².',
          'Il faut multiplier par $1000$ : $5$ cm² $= 5000$ mm².',
          'Les cm² et mm² ne sont pas convertibles directement.'
        ],
        answer: 1,
        correction: '$1$ cm $= 10$ mm, donc $1$ cm² $= (10\\,\\text{mm})^2 = 100$ mm². Ainsi $5$ cm² $= 5 \\times 100 = 500$ mm².'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'pizza', emoji: '🍕' },
          { obj: 'horloge', emoji: '🕐' },
          { obj: 'frisbee', emoji: '🥏' },
          { obj: 'assiette', emoji: '🍽️' },
          { obj: 'piscine ronde', emoji: '🏊' }
        ]);
        const r = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule l'aire d'un(e) ${ctx.obj} circulaire de rayon $${r}$ cm. Utilise $\\pi \\approx 3{,}14$ et arrondis à $0{,}1$ cm².`,
          answer: parseFloat((3.14 * r * r).toFixed(1)),
          tolerance: 0.2,
          unit: 'cm²',
          hint: `$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r}$.`,
          solution: [`$\\mathcal{A} = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r} = ${parseFloat((3.14 * r * r).toFixed(1))}$ cm².`]
        };
      }
    },

    probleme: {
      context: 'Un stade a une piste d\'athlétisme composée de deux lignes droites de $100$ m chacune et de deux demi-cercles de rayon $36$ m.',
      tasks: [
        'Calcule la longueur des deux demi-cercles (périmètre total des parties courbes).',
        'Calcule le périmètre total de la piste.',
        'Calcule l\'aire totale intérieure de la piste (rectangle central + deux demi-disques).'
      ],
      solutions: [
        'Périmètre des deux demi-cercles = périmètre d\'un cercle de rayon $36$ m : $2\\pi \\times 36 \\approx 2 \\times 3{,}14 \\times 36 \\approx 226$ m.',
        'Périmètre total : $2 \\times 100 + 226 = 426$ m.',
        'Aire rectangle : $100 \\times 72 = 7200$ m². Aire disque : $\\pi \\times 36^2 \\approx 4069$ m². Total $\\approx 11\\,269$ m².'
      ],
      finalAnswer: 'La piste fait environ $426$ m de périmètre pour une aire intérieure de $\\approx 11\\,269$ m².'
    },

    evaluation: {
      title: 'Évaluation — Aires et périmètres',
      duration: '25 min',
      questions: [
        {
          statement: 'Quelle est l\'aire d\'un disque de rayon $5$ cm ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm².)',
          type: 'numeric',
          answer: 78.5,
          tolerance: 0.2,
          unit: 'cm²',
          points: 2,
          correction: '$\\mathcal{A} = \\pi r^2 = 3{,}14 \\times 5^2 = 3{,}14 \\times 25 = 78{,}5$ cm².'
        },
        {
          statement: '$2{,}5$ m² correspondent à combien de cm² ?',
          type: 'numeric',
          answer: 25000,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: '$1\\,\\text{m}^2 = 10\\,000\\,\\text{cm}^2$. Donc $2{,}5 \\times 10\\,000 = 25\\,000$ cm².'
        },
        {
          statement: 'Le périmètre d\'un cercle de diamètre $10$ cm vaut (avec $\\pi \\approx 3{,}14$) :',
          type: 'numeric',
          answer: 31.4,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm.'
        },
        {
          statement: 'Un terrain rectangulaire mesure $40$ m par $25$ m. On y creuse une piscine circulaire de rayon $5$ m. Quelle est l\'aire du terrain restant (avec $\\pi \\approx 3{,}14$) ?',
          type: 'numeric',
          answer: 921.5,
          tolerance: 0.5,
          unit: 'm²',
          points: 2,
          correction: 'Aire du rectangle : $40 \\times 25 = 1000$ m². Aire du disque : $3{,}14 \\times 25 = 78{,}5$ m². Aire restante : $1000 - 78{,}5 = 921{,}5$ m².'
        },
        {
          statement: '$8$ cm² est égal à :',
          type: 'multiple-choice',
          options: [
            '$80$ mm²',
            '$800$ mm²',
            '$8000$ mm²',
            '$0{,}8$ mm²'
          ],
          answer: 1,
          points: 2,
          correction: '$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$. Ainsi $8$ cm² $= 8 \\times 100 = 800$ mm².'
        }
      ]
    }
  },

  {
    id: '5e-volumes',
    level: 1, subject: 'maths',
    icon: '📦',
    title: 'Volumes (prismes et cylindres)',
    subtitle: 'Formule de base, conversions',
    keywords: ['Volume', 'Prisme', 'Cylindre', 'Aire de base', 'Hauteur', 'Litre'],
    physics: true,

    cours: {
      intro: 'La formule universelle $V = \\mathcal{A}_{\\text{base}} \\times h$ s\'applique à tout <strong>prisme</strong> et tout <strong>cylindre</strong>. L\'intuition : le volume est la surface de la base « empilée » sur une hauteur $h$.<br/><br/>' +
        '<strong>Point clé sur la hauteur :</strong> la hauteur est toujours perpendiculaire aux bases — si le prisme est « incliné », la hauteur est différente du côté latéral.<br/><br/>' +
        'Pour un <strong>cylindre</strong>, la base est un disque : $V = \\pi r^2 h$. Attention à ne pas confondre rayon et diamètre !<br/><br/>' +
        '<strong>Conversion :</strong> $1$ dm³ $= 1$ L exactement, et $1$ m³ $= 1000$ L. En chimie, le volume d\'une fiole jaugée est en mL, et la conversion vers cm³ est immédiate ($1$ mL $= 1$ cm³).',
      definitions: [
        { term: 'Prisme droit', def: 'Solide dont les deux bases sont des polygones identiques et parallèles, reliés par des faces rectangulaires. Volume = aire de la base × hauteur.' },
        { term: 'Cylindre', def: 'Solide dont les deux bases sont des disques identiques et parallèles. Volume = $\\pi r^2 \\times h$.' },
        { term: 'Pavé droit', def: 'Prisme dont les bases sont des rectangles. Volume = $L \\times l \\times h$. Cas particulier : le cube ($L = l = h$).' },
        { term: 'Hauteur d\'un solide', def: 'Distance perpendiculaire entre les deux bases. Ne pas confondre avec un côté latéral si le prisme est incliné.' }
      ],
      example: {
        statement: 'Un cylindre a un rayon de $5$ cm et une hauteur de $12$ cm. Calcule son volume.',
        steps: [
          'Aire de la base (disque) : $\\pi r^2 = 3{,}14 \\times 25 = 78{,}5$ cm².',
          'Volume : $V = 78{,}5 \\times 12 = 942$ cm³.',
          'Conversion : $942$ cm³ $= 0{,}942$ L.'
        ],
        answer: '$942$ cm³ $\\approx 0{,}94$ L'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Solide</th><th style="border:1px solid var(--border);padding:6px 14px">Base</th><th style="border:1px solid var(--border);padding:6px 14px">Volume</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Pavé droit</td><td style="border:1px solid var(--border);padding:6px 14px">Rectangle</td><td style="border:1px solid var(--border);padding:6px 14px">$L \\times l \\times h$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Cylindre</td><td style="border:1px solid var(--border);padding:6px 14px">Disque</td><td style="border:1px solid var(--border);padding:6px 14px">$\\pi r^2 \\times h$</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Prisme triangulaire</td><td style="border:1px solid var(--border);padding:6px 14px">Triangle</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{b \\times h_{\\triangle}}{2} \\times H$</td></tr><tr><td colspan="3" style="padding:6px;font-style:italic">$1$ L $= 1$ dm³ $= 1000$ cm³</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la forme de la base et calculer son aire $\\mathcal{A}_{\\text{base}}$.',
          'Appliquer : $V = \\mathcal{A}_{\\text{base}} \\times h$.',
          'Convertir si nécessaire : $1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$.'
        ]
      },
      formulas: [
        'Prisme/cylindre : $V = \\mathcal{A}_{\\text{base}} \\times h$',
        'Pavé droit : $V = L \\times l \\times h$',
        'Cylindre : $V = \\pi r^2 \\times h$',
        '$1\\,\\text{L} = 1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$, $1\\,\\text{m}^3 = 1000\\,\\text{L}$'
      ],
      recap: [
        'Volume = aire de la base × hauteur (pour tout prisme et cylindre).',
        'Cylindre : utiliser le RAYON (pas le diamètre) dans $\\pi r^2 h$.',
        '$1$ L $= 1$ dm³ $= 1000$ cm³.',
        'La hauteur est perpendiculaire aux bases (pas un côté latéral).'
      ],
      piege: 'Piège : la hauteur d\'un prisme est la distance entre les deux bases, perpendiculaire à celles-ci — pas nécessairement un côté latéral. Si le prisme est « penché », la hauteur est différente du côté.'
    },

    quiz: [
      {
        q: 'Un cylindre a un rayon de $3$ cm et une hauteur de $10$ cm. Quel est son volume (avec $\\pi \\approx 3{,}14$) ?',
        options: ['$94{,}2$ cm³', '$282{,}6$ cm³', '$188{,}4$ cm³', '$942$ cm³'],
        answer: 1,
        correction: '$V = \\pi r^2 h = 3{,}14 \\times 9 \\times 10 = 282{,}6$ cm³.'
      },
      {
        q: 'Un aquarium (pavé droit) mesure $60\\,\\text{cm} \\times 30\\,\\text{cm} \\times 40\\,\\text{cm}$. Quelle est sa capacité en litres ?',
        options: ['$7{,}2$ L', '$72$ L', '$720$ L', '$7200$ L'],
        answer: 1,
        correction: '$V = 60 \\times 30 \\times 40 = 72\\,000$ cm³. Comme $1\\,\\text{L} = 1000\\,\\text{cm}^3$, cela fait $72$ L.'
      },
      {
        q: 'Un cylindre a un diamètre de $6$ cm et une hauteur de $10$ cm. Un élève calcule $V = \\pi \\times 6^2 \\times 10 = 1130$ cm³. Où est l\'erreur ?',
        options: [
          'Il n\'y a pas d\'erreur.',
          'Il a utilisé le diamètre au lieu du rayon : $r = 3$ cm. Le bon calcul est $V = \\pi \\times 3^2 \\times 10 \\approx 282{,}6$ cm³.',
          'Il aurait dû diviser par $2$ : $V = \\pi \\times 6^2 \\times 10 \\div 2$.',
          'Il a oublié de multiplier par $h$ : $V = \\pi \\times 6^2$.'
        ],
        answer: 1,
        correction: 'Le rayon est la moitié du diamètre : $r = 6 \\div 2 = 3$ cm. La formule est $V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi \\approx 282{,}6$ cm³.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'boîte à chaussures', emoji: '👟' },
          { obj: 'aquarium', emoji: '🐠' },
          { obj: 'coffre', emoji: '📦' },
          { obj: 'brique', emoji: '🧱' },
          { obj: 'valise', emoji: '🧳' }
        ]);
        const L = rand(3, 15), l = rand(2, 10), h = rand(2, 10);
        return {
          statement: `${ctx.emoji} Calcule le volume d'un(e) ${ctx.obj} (pavé droit) de dimensions $${L}$ cm × $${l}$ cm × $${h}$ cm.`,
          answer: L * l * h,
          tolerance: 0,
          unit: 'cm³',
          hint: `$V = L \\times l \\times h = ${L} \\times ${l} \\times ${h}$.`,
          solution: [`$V = ${L} \\times ${l} \\times ${h} = ${L * l * h}$ cm³.`]
        };
      }
    },

    probleme: {
      context: 'Une citerne cylindrique de rayon $0{,}8$ m et de hauteur $2{,}5$ m est utilisée pour stocker de l\'eau de pluie.',
      tasks: [
        'Calcule le volume de la citerne en m³ (avec $\\pi \\approx 3{,}14$).',
        'Convertis en litres.',
        'Si on pompe $500$ L par jour, combien de jours dure le stock quand la citerne est pleine ?'
      ],
      solutions: [
        '$V = 3{,}14 \\times 0{,}64 \\times 2{,}5 \\approx 5{,}024$ m³.',
        '$5{,}024\\,\\text{m}^3 = 5024$ L.',
        '$5024 \\div 500 \\approx 10$ jours.'
      ],
      finalAnswer: 'La citerne contient environ $5024$ L, soit environ $10$ jours de réserve.'
    },

    evaluation: {
      title: 'Évaluation — Volumes (prismes et cylindres)',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer le volume d\'un pavé droit de dimensions $8$ cm $\\times$ $5$ cm $\\times$ $3$ cm.',
          type: 'numeric',
          answer: 120,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$V = L \\times l \\times h = 8 \\times 5 \\times 3 = 120$ cm³.'
        },
        {
          statement: 'Un cylindre a un rayon de $4$ cm et une hauteur de $10$ cm. Quel est son volume ? (Utiliser $\\pi \\approx 3{,}14$, arrondir à $0{,}1$ cm³.)',
          type: 'numeric',
          answer: 502.4,
          tolerance: 0.5,
          unit: 'cm³',
          points: 2,
          correction: '$V = \\pi r^2 h = 3{,}14 \\times 4^2 \\times 10 = 3{,}14 \\times 16 \\times 10 = 502{,}4$ cm³.'
        },
        {
          statement: 'Un aquarium cubique a une arête de $30$ cm. Sa contenance en litres est :',
          type: 'numeric',
          answer: 27,
          tolerance: 0,
          unit: 'L',
          points: 2,
          correction: '$V = 30^3 = 27\\,000$ cm³. Conversion : $1\\,\\text{L} = 1000\\,\\text{cm}^3$, donc $27\\,000 \\div 1000 = 27$ L.'
        },
        {
          statement: '$2{,}5$ dm³ correspondent à combien de cm³ ?',
          type: 'numeric',
          answer: 2500,
          tolerance: 0,
          unit: 'cm³',
          points: 2,
          correction: '$1\\,\\text{dm}^3 = 1000\\,\\text{cm}^3$. Donc $2{,}5 \\times 1000 = 2500$ cm³.'
        },
        {
          statement: 'Un cylindre a un diamètre de $10$ cm et une hauteur de $8$ cm. Un élève calcule $V = \\pi \\times 10^2 \\times 8$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur.',
            'Il a utilisé le diamètre au lieu du rayon : $r = 5$ cm, donc $V = \\pi \\times 5^2 \\times 8 = 200\\pi \\approx 628$ cm³.',
            'Il fallait diviser par $2$ à la fin.',
            'Il fallait ajouter les aires des deux bases.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le rayon est la moitié du diamètre : $r = 10 \\div 2 = 5$ cm. La formule correcte est $V = \\pi r^2 h = \\pi \\times 25 \\times 8 = 200\\pi \\approx 628$ cm³.'
        }
      ]
    }
  },

  {
    id: '5e-statistiques',
    level: 1, subject: 'maths',
    icon: '📈',
    title: 'Statistiques descriptives',
    subtitle: 'Moyenne, étendue, effectifs, fréquences',
    keywords: ['Moyenne', 'Étendue', 'Effectif', 'Fréquence', 'Tableau', 'Diagramme'],
    physics: false,

    cours: {
      intro: 'Les statistiques résument une série de données par quelques <strong>indicateurs clés</strong>. La <strong>moyenne</strong> donne la valeur « typique » mais peut être trompée par des valeurs extrêmes.<br/><br/>' +
        'Exemple : si $9$ élèves ont $10$/20 et $1$ élève a $100$/20 (erreur), la moyenne passe à $19$ — complètement faussée. C\'est pourquoi la médiane (valeur du milieu) est parfois plus représentative.<br/><br/>' +
        'L\'<strong>étendue</strong> mesure la dispersion (différence max − min) mais ne dit rien sur la répartition des valeurs entre les deux extrêmes.<br/><br/>' +
        'Pour calculer une <strong>moyenne pondérée</strong> : multiplier chaque valeur par son effectif (ou coefficient), sommer, diviser par l\'effectif total. Ne pas faire la moyenne des valeurs sans tenir compte des effectifs !',
      definitions: [
        { term: 'Moyenne', def: 'Somme de toutes les valeurs divisée par le nombre de valeurs : $\\bar{x} = \\dfrac{\\sum x_i}{n}$.' },
        { term: 'Étendue', def: 'Différence entre la plus grande et la plus petite valeur de la série : $e = x_{\\max} - x_{\\min}$.' },
        { term: 'Effectif', def: 'Nombre de fois qu\'une valeur apparaît dans la série. L\'effectif total $N$ est la somme de tous les effectifs.' },
        { term: 'Fréquence', def: 'Proportion d\'une valeur dans la série : $f = \\dfrac{n_i}{N}$ (entre 0 et 1) ou $\\times 100$ pour un pourcentage.' }
      ],
      example: {
        statement: 'Dans une classe, $4$ élèves ont $8$/20, $6$ ont $12$/20 et $5$ ont $16$/20. Calcule la moyenne.',
        steps: [
          'Effectif total : $N = 4 + 6 + 5 = 15$.',
          'Somme pondérée : $4 \\times 8 + 6 \\times 12 + 5 \\times 16 = 32 + 72 + 80 = 184$.',
          'Moyenne : $\\bar{x} = \\dfrac{184}{15} \\approx 12{,}27$.'
        ],
        answer: '$\\bar{x} \\approx 12{,}27$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">Indicateur</th><th style="border:1px solid var(--border);padding:6px 14px">Formule</th><th style="border:1px solid var(--border);padding:6px 14px">Ce qu\'il mesure</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Moyenne</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{\\sum x_i \\cdot n_i}{N}$</td><td style="border:1px solid var(--border);padding:6px 14px">Valeur « typique » (sensible aux extrêmes)</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Étendue</td><td style="border:1px solid var(--border);padding:6px 14px">$x_{\\max} - x_{\\min}$</td><td style="border:1px solid var(--border);padding:6px 14px">Dispersion globale</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">Fréquence</td><td style="border:1px solid var(--border);padding:6px 14px">$\\dfrac{n_i}{N}$</td><td style="border:1px solid var(--border);padding:6px 14px">Proportion de chaque valeur</td></tr></table>',
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          'Organiser les données dans un tableau (valeurs, effectifs, effectifs cumulés).',
          'Calculer la moyenne : $\\bar{x} = \\dfrac{\\text{somme de toutes les valeurs}}{\\text{nombre de valeurs}} = \\dfrac{\\sum x_i \\cdot n_i}{\\sum n_i}$.',
          'Calculer l\'étendue : $e = x_{\\max} - x_{\\min}$.',
          'Calculer les fréquences : $f_i = \\dfrac{n_i}{N} \\times 100\\%$.'
        ]
      },
      formulas: [
        '$\\bar{x} = \\dfrac{\\sum x_i \\cdot n_i}{N}$ (moyenne pondérée)',
        'Étendue : $e = x_{\\max} - x_{\\min}$',
        'Fréquence : $f_i = \\dfrac{n_i}{N}$ (entre $0$ et $1$) ou $\\dfrac{n_i}{N} \\times 100$ (en %)'
      ],
      recap: [
        'Moyenne = somme des valeurs ÷ nombre de valeurs (attention aux coefficients !).',
        'L\'étendue ne mesure que la « largeur » de la série, pas sa répartition.',
        'La moyenne n\'est pas forcément une valeur présente dans la série.',
        'Fréquence en % = effectif de la valeur ÷ effectif total × 100.'
      ],
      piege: 'Piège : la moyenne n\'est pas forcément une valeur de la série ! Si les notes sont $4, 8, 12$, la moyenne est $8$ — qui est bien une valeur. Mais avec $3, 8, 12$, la moyenne est $\\frac{23}{3} \\approx 7{,}67$, valeur absente de la série.'
    },

    quiz: [
      {
        q: 'Les notes d\'une élève sont : $12, 15, 8, 14, 11$. Quelle est sa moyenne ?',
        options: ['$12$', '$11$', '$11{,}5$', '$12{,}5$'],
        answer: 0,
        correction: '$\\bar{x} = \\dfrac{12 + 15 + 8 + 14 + 11}{5} = \\dfrac{60}{5} = 12$.'
      },
      {
        q: 'Dans une classe, les tailles (en cm) varient de $148$ à $182$. Quelle est l\'étendue ?',
        options: ['$164$ cm', '$34$ cm', '$30$ cm', '$182$ cm'],
        answer: 1,
        correction: 'Étendue $= x_{\\max} - x_{\\min} = 182 - 148 = 34$ cm.'
      },
      {
        q: 'Un élève a les notes $10, 12, 14$ en mathématiques (coeff. 1) et $8$ en sport (coeff. 3). Il calcule sa moyenne générale comme $\\dfrac{10+12+14+8}{4} = 11$. Quelle est son erreur ?',
        options: [
          'Il n\'a pas fait d\'erreur : la moyenne vaut $11$.',
          'Il a oublié les coefficients : $\\bar{x} = \\dfrac{10 \\times 1 + 12 \\times 1 + 14 \\times 1 + 8 \\times 3}{1+1+1+3} = \\dfrac{60}{6} = 10$.',
          'La bonne méthode est de multiplier la moyenne des maths par $3$ et celle du sport par $1$.',
          'Il faut diviser par le nombre de matières, pas par la somme des coefficients.'
        ],
        answer: 1,
        correction: 'Une moyenne pondérée tient compte des coefficients : $\\bar{x} = \\dfrac{10 + 12 + 14 + 8 \\times 3}{1+1+1+3} = \\dfrac{36+24}{6} = \\dfrac{60}{6} = 10$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { theme: 'notes d\'un contrôle de maths', emoji: '📝' },
          { theme: 'températures de la semaine', emoji: '🌡️' },
          { theme: 'scores au dernier match', emoji: '⚽' },
          { theme: 'tailles des élèves (en cm)', emoji: '📏' }
        ]);
        const n = rand(4, 6);
        const vals = Array.from({length: n}, () => rand(5, 18));
        const sum = vals.reduce((a, b) => a + b, 0);
        const mean = parseFloat((sum / n).toFixed(1));
        return {
          statement: `${ctx.emoji} Calcule la moyenne de ces ${ctx.theme} : $${vals.join(', ')}$.`,
          answer: mean,
          tolerance: 0.1,
          unit: '',
          hint: `Additionne toutes les valeurs, puis divise par $${n}$.`,
          solution: [
            `Somme : $${vals.join(' + ')} = ${sum}$.`,
            `Moyenne : $${sum} \\div ${n} = ${mean}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un professeur relève les scores (sur 20) de sa classe lors d\'un contrôle. Résultats : $7, 9, 12, 14, 14, 15, 16, 8, 11, 10$.',
      tasks: [
        'Calcule la moyenne de la classe.',
        'Calcule l\'étendue.',
        'Combien d\'élèves ont une note supérieure ou égale à la moyenne ? Quelle est leur fréquence ?'
      ],
      solutions: [
        '$\\bar{x} = \\dfrac{7+9+12+14+14+15+16+8+11+10}{10} = \\dfrac{116}{10} = 11{,}6$.',
        'Étendue : $16 - 7 = 9$.',
        'Notes $\\geq 11{,}6$ : $12, 14, 14, 15, 16$ → $5$ élèves. Fréquence : $\\dfrac{5}{10} = 50\\%$.'
      ],
      finalAnswer: 'Moyenne $11{,}6$/20 ; étendue $9$ ; $50\\%$ des élèves sont au-dessus de la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques descriptives',
      duration: '25 min',
      questions: [
        {
          statement: 'Les notes d\'un contrôle sont : $8, 11, 13, 15, 9, 14$. Quelle est la moyenne ?',
          type: 'numeric',
          answer: 11.67,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{8 + 11 + 13 + 15 + 9 + 14}{6} = \\dfrac{70}{6} \\approx 11{,}67$.'
        },
        {
          statement: 'Les tailles (en cm) de $5$ élèves sont : $152, 148, 165, 170, 155$. Quelle est l\'étendue ?',
          type: 'numeric',
          answer: 22,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Étendue $= x_{\\max} - x_{\\min} = 170 - 148 = 22$ cm.'
        },
        {
          statement: 'Dans un groupe, $4$ élèves ont $12$/20 et $6$ élèves ont $16$/20. Quelle est la moyenne du groupe ?',
          type: 'numeric',
          answer: 14.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Moyenne pondérée : $\\bar{x} = \\dfrac{4 \\times 12 + 6 \\times 16}{4 + 6} = \\dfrac{48 + 96}{10} = \\dfrac{144}{10} = 14{,}4$.'
        },
        {
          statement: 'Sur $25$ élèves, $10$ ont choisi le football. Quelle est la fréquence du football en pourcentage ?',
          type: 'numeric',
          answer: 40,
          tolerance: 0,
          unit: '%',
          points: 2,
          correction: 'Fréquence $= \\dfrac{10}{25} \\times 100 = 40\\%$.'
        },
        {
          statement: 'Un élève affirme : « la moyenne de $3, 7$ et $11$ est forcément l\'une de ces trois valeurs ». A-t-il raison ?',
          type: 'multiple-choice',
          options: [
            'Oui, la moyenne est toujours l\'une des valeurs de la série.',
            'Non, la moyenne est $7$ qui est bien une valeur de la série, mais ce n\'est qu\'une coïncidence — la moyenne peut ne pas être une valeur de la série.',
            'Non, la moyenne est $21$.',
            'Oui, la moyenne est toujours la valeur du milieu.'
          ],
          answer: 1,
          points: 2,
          correction: '$\\bar{x} = \\dfrac{3 + 7 + 11}{3} = \\dfrac{21}{3} = 7$. Ici $7$ est dans la série, mais c\'est un hasard. Avec $3, 8, 11$ : $\\bar{x} = \\dfrac{22}{3} \\approx 7{,}33$, qui n\'est pas une valeur de la série.'
        }
      ]
    }
  },

  {
    id: '5e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎲',
    title: 'Probabilités (introduction)',
    subtitle: 'Expériences aléatoires, univers, probabilité',
    keywords: ['Probabilité', 'Événement', 'Univers', 'Fréquence', 'Équiprobabilité'],
    physics: false,

    cours: {
      intro: 'La probabilité quantifie l\'incertitude d\'un événement sur une échelle de <strong>$0$ (impossible) à $1$ (certain)</strong>.<br/><br/>' +
        '<strong>Équiprobabilité :</strong> quand tous les résultats ont la même chance, $P(A) = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$. Attention au raisonnement intuitif : « il y a deux issues (gagner ou perdre), donc $P = \\dfrac{1}{2}$ » est faux si les issues ne sont pas équiprobables.<br/><br/>' +
        'Le <strong>sophisme du joueur</strong> : après 5 piles de suite à pile-ou-face, la probabilité d\'obtenir face reste $\\dfrac{1}{2}$ — la pièce n\'a pas de mémoire. Chaque lancer est indépendant.<br/><br/>' +
        'L\'<strong>événement contraire</strong> $\\bar{A}$ (« $A$ ne se réalise pas ») vérifie $P(\\bar{A}) = 1 - P(A)$ — souvent plus simple à calculer que $P(A)$ directement.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance (lancer de dé, tirage au sort, etc.).' },
        { term: 'Univers ($\\Omega$)', def: 'Ensemble de tous les résultats possibles d\'une expérience aléatoire. Ex : pour un dé, $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers. Ex : « obtenir un nombre pair » = $\\{2, 4, 6\\}$.' },
        { term: 'Événement contraire', def: 'Si $A$ est un événement, $\\bar{A}$ est l\'événement « $A$ ne se réalise pas ». $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      example: {
        statement: 'On tire une carte au hasard dans un jeu de $32$ cartes. Quelle est la probabilité d\'obtenir un cœur ?',
        steps: [
          'Univers : $32$ cartes (équiprobabilité).',
          'Cas favorables : $8$ cœurs (il y a $8$ cartes par couleur dans un jeu de $32$).',
          '$P(\\text{cœur}) = \\dfrac{8}{32} = \\dfrac{1}{4} = 0{,}25$.'
        ],
        answer: '$P = \\dfrac{1}{4} = 0{,}25$'
      },
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:1em auto"><tr><th style="border:1px solid var(--border);padding:6px 14px">$P(A)$</th><th style="border:1px solid var(--border);padding:6px 14px">Interprétation</th><th style="border:1px solid var(--border);padding:6px 14px">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$0$</td><td style="border:1px solid var(--border);padding:6px 14px">Impossible</td><td style="border:1px solid var(--border);padding:6px 14px">Obtenir $7$ avec un dé à $6$ faces</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$0{,}5$</td><td style="border:1px solid var(--border);padding:6px 14px">Aussi probable qu\'improbable</td><td style="border:1px solid var(--border);padding:6px 14px">Pile ou face</td></tr><tr><td style="border:1px solid var(--border);padding:6px 14px">$1$</td><td style="border:1px solid var(--border);padding:6px 14px">Certain</td><td style="border:1px solid var(--border);padding:6px 14px">Obtenir un nombre $\\leq 6$ avec un dé</td></tr></table>',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Décrire l\'univers $\\Omega$ = ensemble de tous les résultats possibles.',
          'Identifier l\'événement $A$ = sous-ensemble des résultats favorables.',
          'Si équiprobabilité : $P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$.'
        ]
      },
      formulas: [
        '$0 \\leq P(A) \\leq 1$',
        '$P(\\Omega) = 1$ (événement certain)',
        '$P(\\emptyset) = 0$ (événement impossible)',
        '$P(\\bar{A}) = 1 - P(A)$ (événement contraire)',
        'Équiprobabilité : $P(A) = \\dfrac{|A|}{|\\Omega|}$'
      ],
      recap: [
        'Une probabilité est toujours entre $0$ (impossible) et $1$ (certain).',
        'Équiprobabilité : $P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$.',
        'Les lancers successifs sont indépendants (la pièce n\'a pas de mémoire).'
      ],
      piege: 'Piège : $P(A) = \\frac{1}{2}$ ne signifie pas qu\'un événement arrive forcément une fois sur deux dans un petit nombre d\'essais. La loi des grands nombres dit que la fréquence tend vers la probabilité quand le nombre d\'essais est grand.'
    },

    quiz: [
      {
        q: 'On lance un dé à 6 faces. Quelle est la probabilité d\'obtenir un nombre pair ?',
        options: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
        answer: 2,
        correction: 'Nombres pairs : $\\{2, 4, 6\\}$ → $3$ cas. Total : $6$. $P = \\dfrac{3}{6} = \\dfrac{1}{2}$.'
      },
      {
        q: 'Un sac contient $3$ billes rouges, $2$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de ne PAS tirer une bille rouge ?',
        options: ['$\\frac{3}{10}$', '$\\frac{7}{10}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$'],
        answer: 1,
        correction: '$P(\\text{rouge}) = \\frac{3}{10}$. Donc $P(\\overline{\\text{rouge}}) = 1 - \\frac{3}{10} = \\frac{7}{10}$.'
      },
      {
        q: 'On lance une pièce $5$ fois et on obtient pile à chaque fois. Quelle est la probabilité d\'obtenir pile au $6^e$ lancer ?',
        options: [
          'Moins de $\\frac{1}{2}$ : on est « dans la chance du pile », donc face est plus probable.',
          'Exactement $\\frac{1}{2}$ : chaque lancer est indépendant, la pièce n\'a pas de mémoire.',
          'Plus de $\\frac{1}{2}$ : on a eu beaucoup de pile, donc la chance en tire est plus grande.',
          '$\\frac{1}{64}$ : la probabilité d\'obtenir 6 piles de suite est $\\left(\\frac{1}{2}\\right)^6$.'
        ],
        answer: 1,
        correction: 'Chaque lancer est indépendant : les résultats précédents n\'influencent pas le suivant. La probabilité d\'obtenir pile reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le <em>sophisme du joueur</em>.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { obj: 'roue de loterie', emoji: '🎡' },
          { obj: 'urne avec des boules numérotées', emoji: '🎱' },
          { obj: 'jeu de cartes numérotées', emoji: '🃏' },
          { obj: 'tirage au sort', emoji: '🎲' }
        ]);
        const total = pick([6, 8, 10, 12]);
        const fav = rand(1, total - 1);
        const p = parseFloat((fav / total).toFixed(2));
        return {
          statement: `${ctx.emoji} Un(e) ${ctx.obj} comporte $${total}$ éléments numérotés de $1$ à $${total}$, tous équiprobables. On gagne si le numéro tiré est $\\leq ${fav}$. Quelle est la probabilité de gagner (arrondie à $0{,}01$) ?`,
          answer: p,
          tolerance: 0.01,
          unit: '',
          hint: `$P = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}} = \\dfrac{${fav}}{${total}}$.`,
          solution: [`$P = \\dfrac{${fav}}{${total}} = ${p}$.`]
        };
      }
    },

    probleme: {
      context: 'Une classe de $30$ élèves tire au sort un délégué. Il y a $13$ filles et $17$ garçons.',
      tasks: [
        'Quelle est la probabilité que le délégué soit une fille ?',
        'Quelle est la probabilité que ce soit un garçon ?',
        'Vérifie que ces deux probabilités sont complémentaires.'
      ],
      solutions: [
        '$P(\\text{fille}) = \\dfrac{13}{30} \\approx 0{,}43$.',
        '$P(\\text{garçon}) = \\dfrac{17}{30} \\approx 0{,}57$.',
        '$\\dfrac{13}{30} + \\dfrac{17}{30} = \\dfrac{30}{30} = 1$ ✓.'
      ],
      finalAnswer: '$P(\\text{fille}) = \\frac{13}{30}$ et $P(\\text{garçon}) = \\frac{17}{30}$, somme $= 1$ ✓.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités (introduction)',
      duration: '20 min',
      questions: [
        {
          statement: 'On lance un dé à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.33,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Cas favorables : $\\{5, 6\\}$ → $2$ cas. Total : $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3} \\approx 0{,}33$.'
        },
        {
          statement: 'Un sac contient $4$ billes rouges, $3$ bleues et $5$ vertes. On tire une bille au hasard. Quelle est la probabilité de tirer une bille bleue ? (Donner un nombre décimal arrondi à $0{,}01$.)',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Total : $4 + 3 + 5 = 12$ billes. Cas favorables : $3$ bleues. $P = \\dfrac{3}{12} = \\dfrac{1}{4} = 0{,}25$.'
        },
        {
          statement: 'La probabilité de gagner à un jeu est $0{,}35$. Quelle est la probabilité de perdre ?',
          type: 'numeric',
          answer: 0.65,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\text{perdre}) = 1 - P(\\text{gagner}) = 1 - 0{,}35 = 0{,}65$.'
        },
        {
          statement: 'On lance un dé à $6$ faces. Quel événement est impossible ?',
          type: 'multiple-choice',
          options: [
            'Obtenir un nombre pair.',
            'Obtenir $7$.',
            'Obtenir un nombre inférieur à $6$.',
            'Obtenir $1$ deux lancers de suite.'
          ],
          answer: 1,
          points: 2,
          correction: 'Un dé standard a $6$ faces numérotées de $1$ à $6$. Obtenir $7$ est impossible : $P(7) = 0$.'
        },
        {
          statement: 'On lance une pièce $10$ fois et on obtient face $10$ fois. Quelle est la probabilité d\'obtenir face au $11^e$ lancer ?',
          type: 'multiple-choice',
          options: [
            'Presque $0$ car face est « épuisé ».',
            '$\\dfrac{1}{2}$ car chaque lancer est indépendant.',
            'Presque $1$ car la pièce semble favoriser face.',
            '$\\dfrac{1}{2^{11}}$ car il faut multiplier les probabilités.'
          ],
          answer: 1,
          points: 2,
          correction: 'Chaque lancer est indépendant des précédents. La pièce n\'a pas de mémoire. La probabilité reste $\\dfrac{1}{2}$. Croire le contraire s\'appelle le sophisme du joueur.'
        }
      ]
    }
  }

);
