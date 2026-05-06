// qualite_ok: 2026
/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-proportionnalite.js
   Remise à niveau BTS — Proportionnalité, pourcentages, règle de trois
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-proportionnalite',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📊',
  title: 'Proportionnalité & Pourcentages',
  subtitle: 'Règle de trois, ratio, rendement, variation en pourcentage',
  keywords: ['Proportionnalité', 'Pourcentage', 'Règle de trois', 'Rendement', 'Ratio', 'BTS', 'Prérequis'],
  physics: 'Rendement moteur, perte en ligne, taux de dilution, pente',

  cours: {
    intro: 'La proportionnalité est partout en BTS : un rendement est un rapport entre une grandeur utile et une grandeur totale, une perte en ligne est exprimée en pourcentage de la puissance totale, une concentration est un ratio masse/volume.<br/><br/>Deux grandeurs sont <strong>proportionnelles</strong> si leur rapport est constant : $y/x = k$ (coefficient de proportionnalité). Cette propriété permet d\'utiliser la <strong>règle de trois</strong> pour calculer une valeur inconnue à partir de trois valeurs connues.<br/><br/>Le <strong>pourcentage</strong> est une façon d\'exprimer un rapport en base 100 : $t\\% = t/100$. Une variation de $t\\%$ multiplie par $(1 + t/100)$ (augmentation) ou $(1 - t/100)$ (diminution).',

    definitions: [
      {
        term: 'Proportionnalité',
        def: 'Deux grandeurs $x$ et $y$ sont proportionnelles si $y = k \\cdot x$ avec $k$ constant. Graphiquement, c\'est une droite passant par l\'origine. Exemple : la puissance électrique $P = U \\cdot I$ est proportionnelle à $I$ si $U$ est fixé.'
      },
      {
        term: 'Règle de trois (produit en croix)',
        def: 'Si $x_1$ correspond à $y_1$ et $x_2$ correspond à $y_2$ (proportionnalité), alors $x_1 \\cdot y_2 = x_2 \\cdot y_1$. Exemple : si 5 m de câble pèse 1,2 kg, 12 m pèse $12 \\times 1{,}2 / 5 = 2{,}88$ kg.'
      },
      {
        term: 'Rendement $\\eta$',
        def: 'Rapport de la grandeur utile sur la grandeur totale fournie : $\\eta = P_{utile}/P_{fournie}$. Toujours compris entre 0 et 1 (ou 0 % et 100 %). Un rendement de 0,85 signifie que 85 % de l\'énergie fournie est effectivement utile, 15 % est perdu (chaleur, frottements…).'
      },
      {
        term: 'Variation en pourcentage',
        def: 'Si une grandeur passe de $V_0$ à $V_1$, la variation en pourcentage est $\\dfrac{V_1 - V_0}{V_0} \\times 100$. Positive si augmentation, négative si diminution. Exemple : une puissance qui passe de 10 kW à 12 kW augmente de 20 %.'
      }
    ],

    method: {
      title: 'Appliquer la règle de trois',
      steps: [
        '<strong>Identifier les deux grandeurs proportionnelles</strong> et leur correspondance connue.<br/>Exemple : débit $\\dot{V}$ (L/min) et temps de remplissage $t$ (min) d\'une cuve. Si $\\dot{V}_1 = 30$ L/min remplit en $t_1 = 20$ min, quelle durée $t_2$ pour $\\dot{V}_2 = 45$ L/min ?',
        '<strong>Attention au sens</strong> de proportionnalité : ici, plus le débit est grand, plus le temps est petit — c\'est une <em>proportionnalité inverse</em>. On écrit $\\dot{V}_1 \\times t_1 = \\dot{V}_2 \\times t_2$ → $t_2 = \\dot{V}_1 \\times t_1 / \\dot{V}_2 = 30 \\times 20 / 45 \\approx 13{,}3$ min.',
        '<strong>Vérifier le résultat</strong> par cohérence physique : un débit plus grand → un temps plus court ✓'
      ]
    },

    example: {
      statement: 'Un moteur électrique absorbe une puissance $P_{abs} = 4{,}5$ kW et développe une puissance mécanique utile $P_{mec} = 3{,}6$ kW. Calculer le rendement $\\eta$ et les pertes en pourcentage.',
      steps: [
        '$\\eta = P_{mec} / P_{abs} = 3{,}6 / 4{,}5 = 0{,}80$.',
        'En pourcentage : $\\eta = 80\\%$.',
        'Pertes : $P_{pertes} = P_{abs} - P_{mec} = 4{,}5 - 3{,}6 = 0{,}9$ kW, soit $0{,}9/4{,}5 \\times 100 = 20\\%$ de pertes.'
      ],
      answer: '$\\eta = 80\\%$, pertes = 20 % (principalement pertes Joule dans les enroulements et pertes mécaniques dans les roulements).'
    },

    formulas: [
      'Proportionnalité directe : $y = k \\cdot x$ → $y_2 = y_1 \\times x_2/x_1$',
      'Proportionnalité inverse : $x \\times y = k$ → $y_2 = y_1 \\times x_1/x_2$',
      'Rendement : $\\eta = P_{utile}/P_{totale}$ (entre 0 et 1)',
      'Variation en % : $t = (V_1 - V_0)/V_0 \\times 100$',
      'Appliquer une augmentation de $p\\%$ : multiplier par $(1 + p/100)$',
      'Appliquer une réduction de $p\\%$ : multiplier par $(1 - p/100)$'
    ],

    diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.9rem"><tr style="background:var(--bg-card)"><th style="border:1px solid var(--border);padding:8px">Grandeur</th><th style="border:1px solid var(--border);padding:8px">Formule rendement</th><th style="border:1px solid var(--border);padding:8px">Domaine</th></tr><tr><td style="border:1px solid var(--border);padding:7px">Moteur électrique</td><td style="border:1px solid var(--border);padding:7px">$\\eta = P_{mec}/P_{élec}$</td><td style="border:1px solid var(--border);padding:7px">Électrotechnique</td></tr><tr><td style="border:1px solid var(--border);padding:7px">Pompe hydraulique</td><td style="border:1px solid var(--border);padding:7px">$\\eta = P_{hydraulique}/P_{absorbée}$</td><td style="border:1px solid var(--border);padding:7px">Hydraulique / FED</td></tr><tr><td style="border:1px solid var(--border);padding:7px">Échangeur thermique</td><td style="border:1px solid var(--border);padding:7px">$\\varepsilon = \\dot{Q}_{réel}/\\dot{Q}_{max}$</td><td style="border:1px solid var(--border);padding:7px">Thermique / FED</td></tr><tr><td style="border:1px solid var(--border);padding:7px">Réseau électrique</td><td style="border:1px solid var(--border);padding:7px">$\\eta = P_{reçue}/P_{émise}$</td><td style="border:1px solid var(--border);padding:7px">Distribution électrique</td></tr></table>',

    recap: [
      'Proportionnalité directe : $y/x = k$ (si $x$ double, $y$ double). Proportionnalité inverse : $x \\cdot y = k$ (si $x$ double, $y$ est divisé par 2).',
      'Le rendement est toujours entre 0 et 1. Un rendement supérieur à 1 est physiquement impossible (sauf erreur de calcul).',
      'Un pourcentage est un rapport : 1 % = 0,01. Ne pas confondre "augmenter de 20 %" (× 1,2) avec "augmenter à 20 %" (= 20 %).',
      'Toujours préciser la grandeur de référence d\'un pourcentage : "10 % de la puissance nominale" n\'est pas la même chose que "10 % de la puissance absorbée".'
    ],

    piege: 'Attention aux pourcentages successifs : une baisse de 20 % suivie d\'une hausse de 20 % ne ramène pas au point de départ ! $(1 - 0{,}2) \\times (1 + 0{,}2) = 0{,}96 \\neq 1$. On perd 4 % au total.'
  },

  quiz: [
    {
      q: 'Un moteur de $P_{abs} = 3$ kW a un rendement $\\eta = 0{,}88$. Sa puissance mécanique utile est :',
      options: ['$P_{mec} = 2{,}64$ kW', '$P_{mec} = 3{,}41$ kW', '$P_{mec} = 0{,}36$ kW', '$P_{mec} = 2{,}88$ kW'],
      answer: 0,
      correction: '$P_{mec} = \\eta \\times P_{abs} = 0{,}88 \\times 3 = 2{,}64$ kW. Les $0{,}36$ kW restants sont dissipés en chaleur.'
    },
    {
      q: 'Si 8 m de câble électrique pèsent 1{,}6 kg, quel est le poids de 30 m du même câble ?',
      options: ['$m = 4$ kg', '$m = 6$ kg', '$m = 5$ kg', '$m = 3{,}84$ kg'],
      answer: 1,
      correction: '$m = 1{,}6 \\times 30 / 8 = 48/8 = 6$ kg. Proportionnalité directe : masse / longueur = $1{,}6/8 = 0{,}2$ kg/m.'
    },
    {
      q: 'La pente d\'une toiture est de 30 %. Pour une longueur horizontale de 5 m, la hauteur est :',
      options: ['$h = 1{,}5$ m', '$h = 0{,}3$ m', '$h = 6$ m', '$h = 15$ m'],
      answer: 0,
      correction: 'Pente = hauteur/longueur = 30/100 = 0,3. $h = 0{,}3 \\times 5 = 1{,}5$ m. Une pente de 30 % est assez forte (environ 17°).'
    },
    {
      q: 'Une pompe de rendement $\\eta_p = 0{,}75$ est entraînée par un moteur de rendement $\\eta_m = 0{,}90$. Le rendement global du groupe moto-pompe est :',
      options: ['$\\eta = 0{,}825$', '$\\eta = 0{,}675$', '$\\eta = 1{,}65$', '$\\eta = 0{,}165$'],
      answer: 1,
      correction: '$\\eta_{global} = \\eta_p \\times \\eta_m = 0{,}75 \\times 0{,}90 = 0{,}675$. Les rendements en série se multiplient, pas s\'additionnent.'
    },
    {
      q: 'Un conduit de ventilation a un débit de 800 m³/h. Une fuite représente 5 % du débit. Quel est le débit effectivement distribué ?',
      options: ['$760$ m³/h', '$840$ m³/h', '$795$ m³/h', '$740$ m³/h'],
      answer: 0,
      correction: '$\\dot{V}_{utile} = 800 \\times (1 - 0{,}05) = 800 \\times 0{,}95 = 760$ m³/h.'
    },
    {
      q: 'La concentration d\'une solution saline est de 35 g/L. Pour préparer 2{,}5 L de cette solution, quelle masse de sel faut-il ?',
      options: ['$m = 14$ g', '$m = 87{,}5$ g', '$m = 35$ g', '$m = 70$ g'],
      answer: 1,
      correction: '$m = c \\times V = 35 \\times 2{,}5 = 87{,}5$ g. Proportionnalité directe entre masse et volume pour une concentration fixée.'
    },
    {
      q: 'La puissance d\'un radiateur passe de 1200 W à 1380 W. Quelle est la variation en % ?',
      options: ['$+15\\%$', '$+13{,}04\\%$', '$-15\\%$', '$+180\\%$'],
      answer: 0,
      correction: '$(1380 - 1200)/1200 \\times 100 = 180/1200 \\times 100 = 15\\%$.'
    },
    {
      q: 'Un taux de dilution de 1:4 signifie que la solution contient 1 volume de produit concentré pour 4 volumes de solvant. La concentration en produit (en %) est :',
      options: ['$25\\%$', '$20\\%$', '$80\\%$', '$40\\%$'],
      answer: 1,
      correction: 'Volume total = $1 + 4 = 5$. Part de produit = $1/5 = 20\\%$. Si on avait 1 volume pour 3 solvants → total 4 volumes → 25 %.'
    },
    {
      q: 'Un groupe frigorifique a un COP de 3{,}5. Cela signifie que pour 1 kW de puissance électrique absorbée, il produit :',
      options: ['$3{,}5$ kW de froid', '$0{,}29$ kW de froid', '$2{,}5$ kW de froid', '$1$ kW de froid'],
      answer: 0,
      correction: '$COP = P_{froid}/P_{élec} \\Rightarrow P_{froid} = COP \\times P_{élec} = 3{,}5 \\times 1 = 3{,}5$ kW. Le COP est un rendement qui peut dépasser 1 (on déplace de la chaleur, on n\'en crée pas).'
    },
    {
      q: 'Une chaudière consomme 15 kW de gaz et fournit 13 kW de chaleur utile. Son rendement est :',
      options: ['$\\eta = 86{,}7\\%$', '$\\eta = 115{,}4\\%$', '$\\eta = 2\\%$', '$\\eta = 13\\%$'],
      answer: 0,
      correction: '$\\eta = 13/15 \\approx 0{,}867 = 86{,}7\\%$. La puissance utile est forcément inférieure à la puissance fournie (2e principe de la thermodynamique).'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['rendement', 'regle3', 'pourcentage']);

      if (type === 'rendement') {
        const eta = pick([0.80, 0.85, 0.88, 0.90, 0.92]);
        const Pabs = pick([2, 3, 4, 5, 7.5, 11]);
        const Putile = Math.round(eta * Pabs * 100) / 100;
        const domain = pick(['moteur électrique (Électrotechnique)', 'moto-pompe (Hydraulique)', 'compresseur (Pneumatique)']);
        return {
          statement: `Un ${domain} a un rendement $\\eta = ${eta}$ et absorbe une puissance $P_{abs} = ${Pabs}$ kW. Calculer la puissance utile $P_{utile}$ (en kW).`,
          answer: Putile,
          tolerance: 0.01,
          unit: 'kW',
          hint: `$P_{utile} = \\eta \\times P_{abs} = ${eta} \\times ${Pabs}$.`,
          solution: [`$P_{utile} = ${eta} \\times ${Pabs} = ${Putile}$ kW`]
        };
      }

      if (type === 'regle3') {
        const x1 = pick([5, 8, 10, 12]);
        const y1 = pick([2, 3, 4, 5, 6]);
        const x2 = pick([15, 20, 24, 30]);
        const y2 = Math.round(y1 * x2 / x1 * 100) / 100;
        return {
          statement: `Pour ${x1} m de ${pick(['câble électrique', 'tuyau en acier', 'profilé aluminium'])}, la masse est ${y1} kg. Quelle est la masse pour ${x2} m du même matériau (en kg) ?`,
          answer: y2,
          tolerance: 0.05,
          unit: 'kg',
          hint: `Règle de trois : $m = ${y1} \\times ${x2} / ${x1}$.`,
          solution: [`$m = \\dfrac{${y1} \\times ${x2}}{${x1}} = ${y2}$ kg`]
        };
      }

      const V0 = pick([100, 200, 500, 1000]);
      const p = pick([5, 8, 10, 12, 15, 20]);
      const V1 = V0 * (1 - p / 100);
      return {
        statement: `Un ${pick(['ventilateur', 'réseau hydraulique', 'ligne électrique'])} a un débit (ou puissance) nominal de ${V0} ${pick(['m³/h', 'W', 'kW'])}. Une réduction de ${p} % est appliquée. Calculer la nouvelle valeur.`,
        answer: V1,
        tolerance: 0.1,
        unit: '',
        hint: `Appliquer la réduction : valeur $\\times (1 - ${p}/100) = $ valeur $\\times ${1 - p/100}$.`,
        solution: [`$V_1 = ${V0} \\times (1 - ${p}/100) = ${V0} \\times ${(1 - p/100).toFixed(2)} = ${V1}$`]
      };
    }
  },

  probleme: {
    context: 'Un groupe moto-pompe alimente un réseau de chauffage. Le moteur électrique absorbe $P_{élec} = 550$ W et a un rendement $\\eta_m = 0{,}90$. La pompe hydraulique a un rendement $\\eta_p = 0{,}72$. Le débit volumique est $\\dot{V} = 1{,}8$ m³/h.',
    schema: 'Schéma de puissance : $P_{élec}$ (moteur) → $P_{arbre}$ (accouplement) → $P_{hydraulique}$ (pompe) → réseau. Les pertes apparaissent à chaque étape.',
    tasks: [
      'Calculer la puissance transmise à l\'arbre de la pompe : $P_{arbre} = \\eta_m \\times P_{élec}$.',
      'Calculer la puissance hydraulique utile : $P_{hyd} = \\eta_p \\times P_{arbre}$.',
      'Calculer le rendement global $\\eta_{global}$ du groupe, puis vérifier que la pression différentielle $\\Delta P = P_{hyd} / \\dot{V}$ (avec $\\dot{V}$ en m³/s) est cohérente avec une installation de chauffage domestique (ordre de grandeur 1 à 4 bar).'
    ],
    solutions: [
      '$P_{arbre} = 0{,}90 \\times 550 = 495$ W.',
      '$P_{hyd} = 0{,}72 \\times 495 = 356{,}4$ W.',
      '$\\eta_{global} = 0{,}90 \\times 0{,}72 = 0{,}648$. $\\dot{V} = 1{,}8/3600 = 5 \\times 10^{-4}$ m³/s. $\\Delta P = 356{,}4 / (5 \\times 10^{-4}) = 712\\,800$ Pa $\\approx 7{,}1$ bar. C\'est légèrement élevé pour du chauffage domestique — soit la pompe est surdimensionnée, soit le réseau présente des pertes de charge importantes.'
    ],
    finalAnswer: '$P_{hyd} \\approx 356$ W, $\\eta_{global} = 64{,}8\\%$, $\\Delta P \\approx 7{,}1$ bar.'
  },

  evaluation: {
    title: 'Évaluation — Proportionnalité & pourcentages',
    duration: '25 min',
    questions: [
      {
        statement: 'Un moteur absorbe $P_{abs} = 5$ kW avec un rendement $\\eta = 0{,}85$. Calculer la puissance utile (en kW).',
        type: 'numeric',
        answer: 4.25,
        tolerance: 0.01,
        unit: 'kW',
        points: 2,
        correction: '$P_{utile} = 0{,}85 \\times 5 = 4{,}25$ kW.'
      },
      {
        statement: 'La vitesse d\'un convoyeur passe de 0{,}8 m/s à 1{,}0 m/s. Quelle est la variation en % ?',
        type: 'numeric',
        answer: 25,
        tolerance: 0.1,
        unit: '%',
        points: 2,
        correction: '$(1{,}0 - 0{,}8)/0{,}8 \\times 100 = 0{,}2/0{,}8 \\times 100 = 25\\%$.'
      },
      {
        statement: 'Les rendements en série se multiplient. Pour $\\eta_1 = 0{,}92$ et $\\eta_2 = 0{,}88$, le rendement global est :',
        type: 'multiple-choice',
        options: ['$\\eta = 0{,}900$', '$\\eta = 0{,}810$', '$\\eta = 0{,}8096$', '$\\eta = 1{,}80$'],
        answer: 2,
        points: 2,
        correction: '$\\eta = 0{,}92 \\times 0{,}88 = 0{,}8096$. Les rendements se multiplient (pas s\'additionnent).'
      },
      {
        statement: 'Pour 3 m de câble, la chute de tension est 0{,}6 V. Pour 25 m, la chute de tension est (en V) :',
        type: 'numeric',
        answer: 5,
        tolerance: 0.05,
        unit: 'V',
        points: 2,
        correction: '$U = 0{,}6 \\times 25/3 = 5$ V. Proportionnalité directe entre chute de tension et longueur.'
      },
      {
        statement: 'Un COP de 4{,}2 signifie que pour 1 kW électrique absorbé, la puissance froide produite est :',
        type: 'multiple-choice',
        options: ['$0{,}24$ kW', '$3{,}2$ kW', '$4{,}2$ kW', '$5{,}2$ kW'],
        answer: 2,
        points: 2,
        correction: '$P_{froid} = COP \\times P_{élec} = 4{,}2 \\times 1 = 4{,}2$ kW.'
      }
    ]
  }
});
