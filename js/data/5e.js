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
      intro: 'Deux grandeurs sont proportionnelles quand leur rapport est constant — ce rapport s\'appelle le <strong>coefficient de proportionnalité</strong>. <strong>Pourquoi est-ce si puissant ?</strong> Parce que si l\'on connaît une paire de valeurs, on peut calculer n\'importe quelle autre. La règle de trois (ou produit en croix) est la technique opératoire de cette propriété. <strong>Attention :</strong> toutes les relations ne sont pas proportionnelles ! La distance de freinage d\'une voiture n\'est pas proportionnelle à la vitesse (elle est quadratique : $d \\propto v^2$). Avant de poser un produit en croix, toujours vérifier que les deux grandeurs varient dans le même sens et de façon linéaire. En physique-chimie, la proportionnalité est omniprésente : loi d\'Ohm ($U = RI$), concentration massique ($m = c_m \\times V$), stœchiométrie (les masses réagissantes sont proportionnelles aux coefficients).',
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
        const pricePerLitre = randFloat(1.5, 2.2, 3);
        const quantity = rand(10, 60);
        const answer = parseFloat((pricePerLitre * quantity).toFixed(2));
        return {
          statement: `Le prix de l'essence est de $${pricePerLitre}$ €/L. Quel est le coût total pour remplir un réservoir de $${quantity}$ litres ? (arrondir au centime)`,
          answer,
          tolerance: 0.02,
          unit: '€',
          hint: 'Rappel : si le prix est proportionnel à la quantité, utilise la formule $\\text{Coût} = \\text{prix/L} \\times \\text{quantité}$. C\'est la définition même de la proportionnalité directe.',
          solution: [
            `Données : prix par litre $p = ${pricePerLitre}$ €/L, quantité $q = ${quantity}$ L.`,
            `Application de la proportionnalité directe : $\\text{Coût} = p \\times q$`,
            `$\\text{Coût} = ${pricePerLitre} \\times ${quantity} = ${answer}$ €`
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
      intro: 'Un graphique traduit visuellement une relation entre deux grandeurs. L\'axe horizontal (abscisse) porte la variable que l\'on contrôle (temps, concentration, volume…), l\'axe vertical (ordonnée) porte ce que l\'on observe (pH, absorbance, tension…). <strong>Interpoler</strong> = estimer une valeur entre deux points mesurés (fiable si la courbe est régulière). <strong>Extrapoler</strong> = prolonger au-delà des mesures (risqué ! une courbe linéaire dans une plage peut devenir non linéaire ailleurs). La pente d\'une droite $a = \dfrac{\\Delta y}{\\Delta x}$ a une signification physique : si $y$ = absorbance et $x$ = concentration, alors $a$ = coefficient d\'absorptivité molaire. Ne jamais lire un graphe sans vérifier les unités sur les axes et l\'origine.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier les axes : abscisse $x$ (horizontal) = variable indépendante (souvent le temps, la concentration…) ; ordonnée $y$ (vertical) = variable dépendante (souvent l\'absorbance, la tension…).',
          'Lire un point $(x_0, y_0)$ : partir de $x_0$ sur l\'axe des x, monter verticalement jusqu\'à la courbe, puis lire l\'ordonnée à gauche.',
          'Interpoler = trouver une valeur entre deux points mesurés. Extrapoler = prolonger la tendance au-delà des mesures (moins fiable, à indiquer explicitement).'
        ]
      },
      formulas: [
        'Pente d\'une droite : $a = \\dfrac{y_2 - y_1}{x_2 - x_1}$',
        'Équation d\'une droite : $y = ax + b$',
        'Ordonnée à l\'origine : $b = y_1 - a \\cdot x_1$'
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
        correction: 'La pente se calcule toujours $a = \\dfrac{\\Delta y}{\\Delta x} = \\dfrac{y_2 - y_1}{x_2 - x_1}$, jamais $\\dfrac{x}{y}$. Ici $y$ ne change pas ($y_1 = y_2 = 2$), donc $\\Delta y = 0$ et la pente est nulle : la droite est horizontale. Une droite horizontale a une équation $y = 2$ (constante), ce qui physiquement peut représenter une grandeur constante dans le temps.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
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
      intro: 'Les nombres relatifs étendent la droite numérique dans les deux sens. Un nombre négatif n\'est pas « moins que zéro » de façon mystérieuse : c\'est une direction opposée, un manque, un écart vers le bas. En physique, le signe porte une information physique : $-5$ N signifie une force vers la gauche si l\'on a choisi la droite comme sens positif. <strong>Règle d\'or de la soustraction :</strong> $a - b = a + (-b)$ — soustraire un nombre revient à ajouter son opposé. Ainsi $3 - (-5) = 3 + 5 = 8$ : soustraire un négatif augmente la valeur. La <strong>valeur absolue</strong> $|a|$ mesure la distance à zéro, indépendamment du signe : c\'est toujours positive. $|-7| = |+7| = 7$. La distance entre deux points $A$ et $B$ sur une droite graduée vaut $|x_B - x_A|$.',
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
        correction: 'Le signe $-$ devant une parenthèse distribue sur tous les termes à l\'intérieur : $-(3 - 5) = -3 + (+5) = 2$. Ou plus simplement : calcule d\'abord l\'intérieur : $3 - 5 = -2$, puis applique le $-$ devant : $-(-2) = +2$. Les deux méthodes donnent $2$, pas $-8$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(-20, 20), b = rand(-20, 20);
        const op = pick(['+', '-']);
        const answer = op === '+' ? a + b : a - b;
        const bStr = b < 0 ? `(${b})` : `${b}`;
        return {
          statement: `Calculer $${a} ${op} ${bStr}$.`,
          answer,
          tolerance: 0,
          unit: '',
          hint: op === '-' ? `Rappel : $a - b = a + (-b)$. Ici, $- ${bStr} = ${-b}$.` : `Même signe ou signes opposés ? Applique la règle.`,
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
      intro: 'Les priorités des opérations sont une <strong>convention universelle</strong> qui garantit qu\'une expression mathématique a une seule interprétation. Sans cette convention, $2 + 3 \\times 4$ pourrait valoir $20$ ou $14$ selon l\'ordre de lecture. L\'ordre est : Parenthèses → Exposants/Racines → Multiplications/Divisions → Additions/Soustractions (mémo : PEMDAS ou « Cher Ami »). <strong>Le trait de fraction agit comme des parenthèses</strong> : $\\dfrac{8+4}{2} = (8+4) \\div 2 = 6$, mais $8 + 4 \\div 2 = 8 + 2 = 10$. En physique, cela évite les erreurs classiques : dans $E_c = \\dfrac{1}{2}mv^2$, c\'est $v$ seul qui est au carré (pas $mv$), et dans $P = RI^2$, c\'est $I$ seul (pas $RI$). Toujours écrire les parenthèses quand le contexte peut être ambigu.',
      method: {
        title: 'Ordre de priorité (de la plus haute à la plus basse)',
        steps: [
          '1. **Parenthèses** : calculer en premier tout ce qui est entre parenthèses, de l\'intérieur vers l\'extérieur.',
          '2. **Puissances et racines** : calculer $a^n$ et $\\sqrt{a}$ avant de multiplier ou additionner.',
          '3. **Multiplications et divisions** : de gauche à droite, avant les additions/soustractions.',
          '4. **Additions et soustractions** : en dernier, de gauche à droite.'
        ]
      },
      formulas: [
        'Ordre : $()$ → $x^n$ → $\\times \\div$ → $+ -$',
        '$a + b \\times c = a + (b \\times c)$ (la multiplication est prioritaire)',
        '$\\dfrac{a + b}{c} = (a + b) \\div c$ (le trait de fraction fait office de parenthèses)'
      ],
      piege: 'Le signe de division $\\div$ et le trait de fraction se comportent différemment : $10 - 4 \\div 2 = 10 - 2 = 8$ (on divise d\'abord). Mais $\\dfrac{10 - 4}{2} = \\dfrac{6}{2} = 3$ (le trait de fraction groupe le numérateur). Attention aux calculatrices qui interprètent $10-4/2$ différemment !'
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
        correction: 'La règle de priorité dit que la multiplication est toujours calculée <em>avant</em> l\'addition, sans parenthèses. Donc $2 + 3 \\times 4 = 2 + (3 \\times 4) = 2 + 12 = 14$. Si l\'on voulait additionner d\'abord, on devrait écrire $(2+3) \\times 4 = 20$ avec des parenthèses explicites.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6), b = rand(2, 5), c = rand(1, 4), d = rand(1, 3);
        const answer = a + b * c - d;
        return {
          statement: `Calculer $${a} + ${b} \\times ${c} - ${d}$ en respectant les priorités.`,
          answer,
          tolerance: 0,
          unit: '',
          hint: 'Commence par la multiplication, puis effectue les additions et soustractions de gauche à droite.',
          solution: [
            `Priorité : $${b} \\times ${c} = ${b * c}$`,
            `Puis : $${a} + ${b * c} - ${d} = ${answer}$`
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
          correction: 'La puissance est prioritaire sur la multiplication. On calcule d\'abord $3^2 = 9$, puis $2 \\times 9 = 18$. L\'erreur serait de faire $(2 \\times 3)^2 = 36$.'
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
      intro: 'Additionner des fractions nécessite un dénominateur commun pour la même raison qu\'on ne peut pas additionner des pommes et des oranges directement : $\\dfrac{1}{3} + \\dfrac{1}{4}$ ne vaut pas $\\dfrac{2}{7}$ ! On cherche le PPCM des dénominateurs (le plus petit multiple commun), puis on amplifie chaque fraction pour les amener à ce dénominateur. <strong>Pourquoi le PPCM et pas n\'importe quel multiple commun ?</strong> Pour garder les nombres aussi petits que possible et éviter les simplifications ultérieures. Pour la multiplication, c\'est plus simple : on multiplie directement numérateurs entre eux et dénominateurs entre eux, sans chercher de dénominateur commun. Pour la division, on multiplie par l\'inverse du diviseur. Ces opérations sont fondamentales pour manipuler les fractions molaires, les rapports stœchiométriques et les probabilités.',
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
        correction: 'L\'erreur classique ! On ne peut pas additionner numérateurs et dénominateurs séparément — les dénominateurs représentent des unités différentes (tiers ≠ quarts). Le bon calcul : PPCM(3, 4) = 12, donc $\\dfrac{1}{3} = \\dfrac{4}{12}$ et $\\dfrac{1}{4} = \\dfrac{3}{12}$, et la somme est $\\dfrac{7}{12}$. Vérification : $\\dfrac{7}{12} \\approx 0{,}583$ et $\\dfrac{1}{3} + \\dfrac{1}{4} \\approx 0{,}333 + 0{,}25 = 0{,}583$ ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const denoms = [[2,3],[3,4],[4,5],[2,5],[3,5],[4,3]];
        const [b, d] = pick(denoms);
        const a = rand(1, b - 1);
        const c = rand(1, d - 1);
        const lcm = (b * d) / gcd(b, d);
        function gcd(x, y) { return y === 0 ? x : gcd(y, x % y); }
        const num = a * (lcm / b) + c * (lcm / d);
        const g = gcd(num, lcm);
        const answerNum = num / g;
        const answerDen = lcm / g;
        const answer = answerNum / answerDen;
        return {
          statement: `Calcule $\\dfrac{${a}}{${b}} + \\dfrac{${c}}{${d}}$. Donne le résultat sous forme décimale arrondie à $0{,}01$.`,
          answer: parseFloat(answer.toFixed(2)),
          tolerance: 0.01,
          unit: '',
          hint: `Le dénominateur commun de $${b}$ et $${d}$ est $${lcm}$. Convertis les deux fractions.`,
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
          correction: 'Le dénominateur commun est $12$. $\\dfrac{1}{4} = \\dfrac{3}{12}$ et $\\dfrac{1}{3} = \\dfrac{4}{12}$. Somme : $\\dfrac{3+4}{12} = \\dfrac{7}{12}$. On ne peut jamais additionner les dénominateurs entre eux.'
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
      intro: 'La proportionnalité est l\'outil mathématique de la mise à l\'échelle : quand on double une grandeur, l\'autre double aussi. Les pourcentages sont un cas particulier où le coefficient est exprimé sur 100. <strong>Piège courant avec les pourcentages :</strong> une baisse de $20\\%$ puis une hausse de $20\\%$ ne revient pas au prix initial ! (ex. : $100 \\to 80 \\to 96$, pas $100$). Les échelles cartographiques sont des rapports : $\\frac{1}{25\\ 000}$ signifie que $1$ cm sur la carte = $25\\ 000$ cm = $250$ m en réalité. La vitesse $v = \\dfrac{d}{t}$ est le coefficient de proportionnalité entre distance et temps quand la vitesse est constante — c\'est la pente de la droite $d = f(t)$. Toujours vérifier la cohérence des unités : $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s.',
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
        correction: 'Les pourcentages ne s\'annulent pas ! Partir de $100$ € : $+20\\%$ → $120$ €, puis $-20\\%$ de $120$ → $120 \\times 0{,}8 = 96$ €. Le résultat est $96$ €, soit $4\\%$ de moins que le départ. En général : $1{,}2 \\times 0{,}8 = 0{,}96$ — une perte de $4\\%$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const prix = pick([50, 80, 120, 200, 250]);
        const taux = pick([10, 20, 25, 30, 40]);
        const reduction = prix * taux / 100;
        const newPrix = prix - reduction;
        return {
          statement: `Un article coûte $${prix}$ €. Il est soldé à $-${taux}\\%$. Quel est son nouveau prix en euros ?`,
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
          correction: 'Avec un prix initial de $100$ € : $+10\\% \\to 110$ €, puis $-10\\%$ de $110 \\to 110 \\times 0{,}9 = 99$ €. Le prix final est $99$ €, soit $1\\%$ de moins. En général : $1{,}1 \\times 0{,}9 = 0{,}99$.'
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
      intro: 'Une expression littérale est une formule dans laquelle des lettres représentent des valeurs inconnues ou variables. L\'intérêt : écrire une relation générale valable pour toutes les valeurs, pas seulement un cas particulier. <strong>Termes semblables :</strong> on ne peut additionner que des termes avec la même variable au même degré — $3x$ et $5x$ sont semblables ($8x$), mais $3x$ et $5x^2$ ne le sont pas. De même, $2$ et $3x$ ne sont pas semblables car l\'un est une constante et l\'autre dépend de $x$ : $2 + 3x$ est déjà réduit. La substitution (remplacer la lettre par un nombre) permet de vérifier un résultat ou de calculer une formule physique comme $E_c = \\dfrac{1}{2}mv^2$ ou $U = RI$.',
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
        correction: 'On ne peut additionner que des termes semblables (même variable, même degré). $2$ est une constante (terme de degré 0) et $3x$ est de degré 1 — ils ne se combinent pas. Vérification : pour $x = 1$, $2 + 3(1) = 5$ mais $5 \\times 1 = 5$ (coïncide !). Pour $x = 2$, $2 + 3(2) = 8$ mais $5 \\times 2 = 10 \\neq 8$ → la simplification est fausse !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(2, 6);
        const b = rand(1, 5);
        const x = rand(1, 8);
        const val = a * x + b;
        return {
          statement: `Calcule la valeur de $${a}x + ${b}$ pour $x = ${x}$.`,
          answer: val,
          tolerance: 0,
          unit: '',
          hint: `Substitue $x$ par $${x}$ : $${a} \\times ${x} + ${b}$.`,
          solution: [
            `On remplace $x$ par $${x}$ :`,
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
          correction: 'Seuls les termes semblables (même variable, même degré) peuvent s\'additionner. $3x + 5x = (3+5)x = 8x$ est correct. $3 + 5x$ ne se simplifie pas car $3$ est une constante et $5x$ un terme en $x$.'
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
          correction: '$5(4 + 2) - 3 \\times 4 = 5 \\times 6 - 12 = 30 - 12 = 18$. On peut aussi réduire d\'abord : $5x + 10 - 3x = 2x + 10$, puis $2 \\times 4 + 10 = 18$.'
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
      intro: 'La symétrie centrale par rapport à un point $O$ fait correspondre à chaque point $A$ un point $A\'$ tel que $O$ est le milieu de $[AA\']$ — autrement dit, $O$ est « entre » $A$ et $A\'$, à égale distance. C\'est équivalent à une rotation de $180°$ autour de $O$. <strong>Différence avec la symétrie axiale :</strong> la symétrie axiale utilise un axe (droite), la symétrie centrale utilise un point. Une figure peut avoir un centre de symétrie sans avoir d\'axe de symétrie (ex. : le parallélogramme non rectangle). En coordonnées, la formule est simple : $A\'(2x_O - x_A \; ;\; 2y_O - y_A)$. La symétrie centrale conserve les distances et les angles, mais <strong>inverse l\'orientation</strong> : un triangle orienté dans le sens horaire devient anti-horaire après la transformation.',
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
        correction: 'Le parallélogramme général n\'a pas d\'axe de symétrie (ses côtés sont parallèles mais pas perpendiculaires aux diagonales). En revanche, il a un centre de symétrie : le point d\'intersection de ses diagonales. En effet, les diagonales se coupent en leur milieu commun $O$, donc chaque sommet a son symétrique par rapport à $O$.'
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
        const ox = rand(0, 5);
        const oy = rand(0, 5);
        const ax = rand(-3, 8);
        const ay = rand(-3, 8);
        const symX = 2 * ox - ax;
        const symY = 2 * oy - ay;
        return {
          statement: `Donne l'abscisse du symétrique de $A(${ax} ; ${ay})$ par rapport au point $O(${ox} ; ${oy})$.`,
          answer: symX,
          tolerance: 0,
          unit: '',
          hint: `Formule : $x_{A'} = 2 \\times x_O - x_A = 2 \\times ${ox} - ${ax}$.`,
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
          correction: 'Par définition de la symétrie centrale, $O$ est le milieu de $[AA\']$, c\'est-à-dire $OA = OA\'$ et les trois points sont alignés avec $O$ entre $A$ et $A\'$.'
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
          correction: 'Tout parallélogramme possède un centre de symétrie : c\'est le point d\'intersection de ses diagonales. Les diagonales se coupent en leur milieu commun, ce qui définit le centre de symétrie.'
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
      intro: 'Un triangle est défini par trois points non alignés. Sa propriété fondamentale : la somme des angles intérieurs est toujours $180°$, quelle que soit la forme du triangle. <strong>Pourquoi $180°$ ?</strong> Parce que si l\'on trace une droite parallèle au côté de base passant par le sommet opposé, les trois angles du triangle forment exactement un angle plat (alternes-internes). L\'inégalité triangulaire ($c < a + b$) traduit une réalité physique : le chemin direct entre deux points est toujours plus court que le chemin qui passe par un troisième point. Il suffit de vérifier que le <strong>plus grand côté</strong> est strictement inférieur à la somme des deux autres (les autres vérifications suivent automatiquement). Les triangles isocèles et équilatéraux ont des angles particuliers liés à leur symétrie.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Vérifier l\'inégalité triangulaire : pour les côtés $a$, $b$, $c$, vérifier $a < b + c$, $b < a + c$, $c < a + b$. (Il suffit de vérifier que le plus grand côté est inférieur à la somme des deux autres.)',
          'Identifier le type de triangle : isocèle (2 côtés égaux), équilatéral (3 côtés égaux), rectangle (angle droit vérifié par Pythagore).',
          'Calculer un angle manquant : angle inconnu = $180° - $ (somme des deux autres angles connus).'
        ]
      },
      formulas: [
        'Somme des angles : $\\hat{A} + \\hat{B} + \\hat{C} = 180°$',
        'Inégalité triangulaire : $c < a + b$ (le plus grand côté)',
        'Triangle isocèle : deux côtés égaux ⟹ deux angles à la base égaux',
        'Triangle équilatéral : $a = b = c$ ⟹ $\\hat{A} = \\hat{B} = \\hat{C} = 60°$'
      ],
      piege: 'Piège : ne vérifier l\'inégalité triangulaire que pour un seul cas. Il faut que LE PLUS GRAND côté soit inférieur à la somme des deux autres. Si $c$ est le plus grand, seule la vérification $c < a + b$ est nécessaire (les autres sont automatiquement satisfaites).'
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
        correction: 'Pour qu\'un triangle existe, il faut que chaque côté soit <em>strictement</em> inférieur à la somme des deux autres : $10 < 5 + 5 = 10$ est faux ($10 = 10$, pas $<$). Ces trois points sont alignés — on obtient un segment, pas un triangle. L\'inégalité doit être stricte.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(30, 70);
        const b = rand(30, 70);
        const c = 180 - a - b;
        return {
          statement: `Dans un triangle, deux angles mesurent $${a}°$ et $${b}°$. Combien mesure le troisième angle (en degrés) ?`,
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
          correction: '$\\hat{C} = 180° - 72° - 53° = 55°$. La somme des angles d\'un triangle vaut toujours $180°$.'
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
          correction: 'Si les trois angles sont égaux ($60°$), les trois côtés sont aussi égaux : c\'est un triangle équilatéral. (Un triangle équilatéral est aussi isocèle, mais la réponse la plus précise est « équilatéral ».)'
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
          correction: 'Il faut vérifier : le plus grand côté est strictement inférieur à la somme des deux autres. $13 < 6 + 8 = 14$ est vrai. L\'inégalité triangulaire est vérifiée : ce triangle existe.'
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
      intro: 'Un parallélogramme est un quadrilatère avec deux paires de côtés parallèles. De cette propriété découlent toutes les autres : les côtés opposés sont égaux, les angles opposés sont égaux, et les diagonales se coupent en leur milieu. <strong>Hiérarchie :</strong> tout carré est un rectangle et un losange ; tout rectangle est un parallélogramme ; tout losange est un parallélogramme — mais l\'inverse n\'est pas vrai. Pour identifier un parallélogramme, il suffit de vérifier <em>une</em> des conditions : côtés opposés parallèles, ou côtés opposés égaux, ou diagonales se coupant en leur milieu. L\'aire d\'un parallélogramme est base × hauteur (la hauteur est perpendiculaire à la base, pas le côté latéral).',
      method: {
        title: 'Méthode : identifier et utiliser les propriétés',
        steps: [
          'Parallélogramme : côtés opposés parallèles ET égaux ; diagonales qui se coupent en leur milieu ; angles opposés égaux.',
          'Rectangle : parallélogramme avec 4 angles droits ; diagonales égales et qui se coupent en leur milieu.',
          'Losange : parallélogramme avec 4 côtés égaux ; diagonales perpendiculaires et qui se coupent en leur milieu.',
          'Carré : rectangle ET losange (4 angles droits + 4 côtés égaux) ; diagonales égales et perpendiculaires.'
        ]
      },
      formulas: [
        'Parallélogramme $ABCD$ : $\\vec{AB} = \\vec{DC}$ (vecteurs égaux)',
        'Diagonales d\'un parallélogramme : milieu de $[AC]$ = milieu de $[BD]$',
        'Aire du parallélogramme : $\\mathcal{A} = b \\times h$ (base $\\times$ hauteur)',
        'Aire du losange : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2}$ (demi-produit des diagonales)'
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
        correction: 'Si dans un parallélogramme $AB = BC$, alors puisque les côtés opposés sont égaux ($AB = DC$ et $BC = AD$), tous les côtés sont égaux → c\'est un <em>losange</em>. Pour que ce soit un carré, il faudrait en plus un angle droit (ce qui forcerait tous les angles à $90°$). Un losange avec un angle de $60°$ existe : tous les côtés égaux, mais pas de droit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const d1 = rand(3, 12);
        const d2 = rand(3, 12);
        const aire = (d1 * d2) / 2;
        return {
          statement: `Un losange a des diagonales mesurant $${d1}$ cm et $${d2}$ cm. Calcule son aire en cm².`,
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
          correction: 'Un carré a $4$ côtés égaux et $4$ angles droits. Puisqu\'il a $4$ côtés égaux, c\'est un losange. Mais un losange n\'est pas forcément un rectangle (il peut avoir des angles non droits), et un rectangle n\'est pas forcément un carré.'
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
      intro: 'Quand une sécante coupe deux droites parallèles, elle crée des paires d\'angles avec des relations précises. Les <strong>alternes-internes</strong> (configuration en Z) sont égaux. Les <strong>correspondants</strong> (configuration en F) sont égaux. Les <strong>coalternes-internes</strong> (configuration en U) sont supplémentaires (somme = $180°$). <strong>Point clé :</strong> ces propriétés ne valent que si les droites sont parallèles — et réciproquement, si ces propriétés sont vérifiées, alors les droites sont forcément parallèles. C\'est une façon de <em>démontrer</em> le parallélisme. En optique, les rayons parallèles incidents sur un miroir vérifient ces propriétés angulaires, ce qui explique la construction des images dans les miroirs plans.',
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          'Identifier la sécante (droite qui coupe les deux parallèles) et les deux parallèles.',
          'Repérer la configuration : alternes-internes (en Z), correspondants (en F), ou coalternes (en U).',
          'Appliquer la propriété : alternes-internes → égaux ; correspondants → égaux ; coalternes → supplémentaires (somme = 180°).'
        ]
      },
      formulas: [
        'Alternes-internes : $\\hat{a} = \\hat{b}$ (configuration en Z)',
        'Correspondants : $\\hat{a} = \\hat{c}$ (configuration en F)',
        'Coalternes-internes : $\\hat{a} + \\hat{d} = 180°$ (configuration en U)',
        'Angles supplémentaires : $\\hat{a} + \\hat{b} = 180°$'
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
        correction: 'Les alternes-internes sont égaux <em>si et seulement si</em> les droites sont parallèles. Ici $70° \\neq 75°$, donc les droites ne sont pas parallèles. La réciproque est indispensable : elle permet de prouver le parallélisme par le calcul d\'angles, ou de le réfuter.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const a = rand(30, 150);
        const b = 180 - a;
        return {
          statement: `Deux droites parallèles sont coupées par une sécante. Un angle coalterne-interne mesure $${a}°$. Quel est l'angle coalterne associé (en degrés) ?`,
          answer: b,
          tolerance: 0,
          unit: '°',
          hint: 'Les angles coalternes-internes sont supplémentaires : leur somme vaut $180°$.',
          solution: [`Angles coalternes supplémentaires : $180 - ${a} = ${b}°$.`]
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
      intro: 'Les figures complexes se décomposent toujours en figures simples (rectangles, triangles, disques). L\'aire totale est la somme (ou différence) des aires des parties. <strong>Règle de conversion des aires :</strong> quand on passe d\'une unité de longueur à une autre, l\'exposant $2$ s\'applique aussi au facteur de conversion : $1$ m $= 100$ cm, donc $1$ m² $= 100^2$ cm² $= 10\,000$ cm². Beaucoup d\'élèves multiplient par $100$ au lieu de $10\,000$ ! Le disque de rayon $r$ a une aire $\\pi r^2$ — c\'est $r$ seul au carré, pas $\\pi r$ entier. Pour les figures composées, bien identifier si on ajoute une partie (ex. : rectangle + demi-disque sur un côté) ou si on soustrait (ex. : carré avec un trou circulaire).',
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
        correction: '$1$ cm $= 10$ mm, donc $1$ cm² $= (10\\,\\text{mm})^2 = 100$ mm² — on élève le facteur de conversion au carré ! Ainsi $5$ cm² $= 5 \\times 100 = 500$ mm². L\'erreur classique est de multiplier par $10$ au lieu de $100$. De même, $1$ m² $= 10\\,000$ cm² (pas $100$).'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const r = rand(2, 10);
        return {
          statement: `Calcule l'aire d'un disque de rayon $${r}$ cm. Utilise $\\pi \\approx 3{,}14$ et arrondi à $0{,}1$ cm².`,
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
          correction: '$\\mathcal{P} = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm. Ou avec le rayon : $\\mathcal{P} = 2\\pi r = 2 \\times 3{,}14 \\times 5 = 31{,}4$ cm.'
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
          correction: '$1\\,\\text{cm}^2 = 100\\,\\text{mm}^2$ (car $1$ cm $= 10$ mm, donc $1$ cm² $= 10^2$ mm²). Ainsi $8$ cm² $= 8 \\times 100 = 800$ mm².'
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
      intro: 'La formule universelle $V = \\mathcal{A}_{\\text{base}} \\times h$ s\'applique à tout prisme et tout cylindre. L\'intuition : le volume est la surface de la base « empilée » sur une hauteur $h$. <strong>Point clé sur la hauteur :</strong> la hauteur est toujours perpendiculaire aux bases — si le prisme est « incliné », la hauteur est différente du côté latéral. Pour un cylindre, la base est un disque : $V = \\pi r^2 h$. <strong>Conversion :</strong> $1$ dm³ $= 1$ L exactement, et $1$ m³ $= 1000$ L. En chimie, le volume d\'une fiole jaugée est exprimé en mL ou en L ; la conversion vers cm³ est immédiate ($1$ mL $= 1$ cm³). La sphère (non vue en 5e) suit une autre formule : $V = \\dfrac{4}{3}\\pi r^3$.',
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
        correction: 'Le rayon est la moitié du diamètre : $r = 6 \\div 2 = 3$ cm. La formule est $V = \\pi r^2 h = \\pi \\times 3^2 \\times 10 = 90\\pi \\approx 282{,}6$ cm³. Utiliser $d = 6$ au lieu de $r = 3$ multiplie le résultat par $4$ — une erreur très fréquente !'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const L = rand(3, 15), l = rand(2, 10), h = rand(2, 10);
        return {
          statement: `Calcule le volume d'un pavé droit de dimensions $${L}$ cm × $${l}$ cm × $${h}$ cm.`,
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
          correction: 'Le rayon est la moitié du diamètre : $r = 10 \\div 2 = 5$ cm. La formule correcte est $V = \\pi r^2 h = \\pi \\times 25 \\times 8 = 200\\pi \\approx 628$ cm³. Utiliser $d = 10$ au lieu de $r = 5$ multiplie le résultat par $4$.'
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
      intro: 'Les statistiques résument une série de données par quelques indicateurs clés. La <strong>moyenne</strong> donne la valeur « typique » mais peut être trompée par des valeurs extrêmes : si $9$ élèves ont $10$/20 et $1$ élève a $100$/20 (erreur), la moyenne passe à $19$ — complètement faussée. L\'<strong>étendue</strong> mesure la dispersion (différence max-min) mais ne dit rien sur comment les valeurs sont réparties entre les deux extrêmes. La moyenne peut ne pas être une valeur de la série : $\\bar{x} = 11{,}6$ dans une série d\'entiers est tout à fait possible. Pour calculer une moyenne pondérée : multiplier chaque valeur par son effectif, sommer, diviser par l\'effectif total — ne pas faire la moyenne des valeurs sans tenir compte des effectifs.',
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
        correction: 'Une moyenne pondérée tient compte des coefficients : $\\bar{x} = \\dfrac{\\sum x_i \\times c_i}{\\sum c_i} = \\dfrac{10 + 12 + 14 + 8 \\times 3}{1+1+1+3} = \\dfrac{36+24}{6} = \\dfrac{60}{6} = 10$. Le sport, coefficient 3, « tire » la moyenne vers le bas. L\'élève a tort de diviser par $4$ (le nombre de notes) plutôt que par $6$ (la somme des coefficients).'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const n = rand(4, 6);
        const vals = Array.from({length: n}, () => rand(5, 18));
        const sum = vals.reduce((a, b) => a + b, 0);
        const mean = parseFloat((sum / n).toFixed(1));
        return {
          statement: `Calcule la moyenne de la série suivante : $${vals.join(', ')}$.`,
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
          correction: '$\\bar{x} = \\dfrac{3 + 7 + 11}{3} = \\dfrac{21}{3} = 7$. Ici $7$ est dans la série, mais c\'est un hasard. Avec $3, 8, 11$ : $\\bar{x} = \\dfrac{22}{3} \\approx 7{,}33$, qui n\'est pas une valeur de la série. La moyenne n\'est pas forcément une valeur observée.'
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
      intro: 'La probabilité quantifie l\'incertitude d\'un événement sur une échelle de $0$ (impossible) à $1$ (certain). <strong>Équiprobabilité :</strong> quand tous les résultats ont la même chance, $P(A) = \\dfrac{\\text{cas favorables}}{\\text{cas possibles}}$. <strong>Attention au raisonnement intuitif !</strong> « Il y a deux issues (gagner ou perdre), donc $P = \\dfrac{1}{2}$ » est faux si les issues ne sont pas équiprobables. De même, après 5 piles de suite à pile-ou-face, la probabilité d\'obtenir face reste $\\dfrac{1}{2}$ — la pièce n\'a pas de mémoire. C\'est le <em>sophisme du joueur</em>. L\'événement contraire $\\bar{A}$ (« $A$ ne se réalise pas ») vérifie $P(\\bar{A}) = 1 - P(A)$ — souvent plus simple à calculer que $P(A)$ directement.',
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
        correction: 'Chaque lancer est indépendant : les résultats précédents n\'influencent pas le suivant. La probabilité d\'obtenir pile reste $\\dfrac{1}{2}$, que l\'on ait eu $0$ ou $100$ piles avant. Croire le contraire s\'appelle le <em>sophisme du joueur</em> (ou erreur de Monte Carlo) — un biais cognitif très répandu !'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const total = pick([6, 8, 10, 12]);
        const fav = rand(1, total - 1);
        const p = parseFloat((fav / total).toFixed(2));
        return {
          statement: `Une roue de loterie comporte $${total}$ cases numérotées de $1$ à $${total}$, toutes équiprobables. On gagne si la roue s'arrête sur un numéro $\\leq ${fav}$. Quelle est la probabilité de gagner (donner un nombre décimal arrondi à $0{,}01$) ?`,
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
          correction: '$P(\\text{perdre}) = 1 - P(\\text{gagner}) = 1 - 0{,}35 = 0{,}65$. L\'événement contraire a une probabilité complémentaire à $1$.'
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
          correction: 'Chaque lancer est indépendant des précédents. La pièce n\'a pas de mémoire. La probabilité reste $\\dfrac{1}{2}$, quel que soit l\'historique. Croire le contraire s\'appelle le sophisme du joueur.'
        }
      ]
    }
  }

);
