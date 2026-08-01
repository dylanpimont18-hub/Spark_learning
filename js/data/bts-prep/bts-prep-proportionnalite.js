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
  quizShuffle: true,
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

    diagram: {
      theme: 'maths',
      kicker: 'Bilan de puissance (diagramme de Sankey simplifié)',
      title: 'Où passe la puissance qu\'un moteur électrique absorbe ?',
      description: 'La <strong>largeur</strong> de chaque bande est proportionnelle à la puissance qu\'elle transporte : plus la bande est large, plus la puissance est grande.<br/><br/>La puissance absorbée entre à gauche, traverse le moteur, puis se sépare en une bande <strong>utile</strong> (puissance mécanique récupérée) et une bande de <strong>pertes</strong> (chaleur due à l\'effet Joule et aux frottements) — reprend exactement l\'exemple chiffré du cours : $P_{abs} = 4{,}5$ kW, $\\eta = 80\\%$.',
      svg: `
        <svg viewBox="0 0 480 330" role="img" aria-labelledby="proportionnalite-sankey-title proportionnalite-sankey-desc">
          <title id="proportionnalite-sankey-title">Bilan de puissance d'un moteur électrique, diagramme de Sankey simplifié</title>
          <desc id="proportionnalite-sankey-desc">Une bande d'entree large de 60 pixels representant 4,5 kilowatts absorbes traverse un bloc moteur electrique puis se separe en une bande de sortie utile large de 48 pixels representant 3,6 kilowatts mecaniques et une bande de pertes large de 12 pixels representant 0,9 kilowatt dissipe en chaleur ; les deux largeurs de sortie additionnees redonnent exactement la largeur d'entree.</desc>

          <!-- Bande d'entrée : P absorbée -->
          <rect class="frame-line" x="20" y="105" width="150" height="60" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></rect>
          <text class="annotation-label" x="95" y="95" text-anchor="middle">P absorbée = 4,5 kW</text>

          <!-- Bloc moteur électrique -->
          <rect class="frame-line" x="170" y="95" width="100" height="80" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))"></rect>
          <text class="annotation-label" x="220" y="128" text-anchor="middle">Moteur</text>
          <text class="annotation-label" x="220" y="144" text-anchor="middle">électrique</text>
          <text class="label-soft" x="220" y="160" text-anchor="middle">rendement = 80 %</text>

          <!-- Bande de sortie utile -->
          <rect class="frame-line" x="270" y="105" width="132" height="48" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></rect>
          <polygon class="frame-line" points="402,105 402,153 430,129" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></polygon>
          <text class="annotation-label" x="336" y="95" text-anchor="middle">P utile = 3,6 kW</text>
          <text class="label-soft" x="336" y="187" text-anchor="middle">puissance mécanique</text>

          <!-- Bande de pertes -->
          <rect class="guide-line" x="204" y="175" width="12" height="70" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))"></rect>
          <polygon class="guide-line" points="204,245 216,245 210,267" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))"></polygon>
          <text class="annotation-label" x="225" y="210">P pertes = 0,9 kW</text>
          <text class="label-soft" x="225" y="226">chaleur, frottements</text>

          <text class="label-soft" x="240" y="305" text-anchor="middle">Vérification : 4,5 kW = 3,6 kW + 0,9 kW</text>
        </svg>
      `,
      notes: [
        'La <strong>largeur</strong> de chaque bande est proportionnelle à la puissance : $4{,}5$ kW se séparent en $3{,}6$ kW utiles et $0{,}9$ kW de pertes, exactement l\'exemple chiffré du cours.',
        'On vérifie la <strong>conservation de l\'énergie</strong> : $4{,}5 = 3{,}6 + 0{,}9$, donc $P_{abs} = P_{mec} + P_{pertes}$.',
        'Le <strong>rendement</strong> $\\eta = 3{,}6/4{,}5 = 0{,}80 = 80\\%$ se lit directement comme la part de la bande d\'entrée qui ressort en sortie utile.'
      ],
      reading: 'Suis la bande d\'entrée de gauche à droite : elle traverse le moteur puis se scinde en deux bandes dont les largeurs cumulées redonnent exactement la largeur d\'entrée.',
      caption: 'Diagramme de Sankey simplifié du bilan de puissance d\'un moteur électrique : $P_{abs} = 4{,}5$ kW se répartit en $P_{mec} = 3{,}6$ kW (rendement $80\\%$) et $P_{pertes} = 0{,}9$ kW dissipés sous forme de chaleur.'
    },

    recap: [
      'Proportionnalité directe : $y/x = k$ (si $x$ double, $y$ double). Proportionnalité inverse : $x \\cdot y = k$ (si $x$ double, $y$ est divisé par 2).',
      'Le rendement est toujours entre 0 et 1. Un rendement énergétique classique supérieur à 1 est physiquement impossible (sauf erreur de calcul).<br/><br/><strong>Attention cependant au COP</strong> (pompe à chaleur, groupe frigorifique) : ce n\'est <strong>pas un rendement</strong> au sens strict, car il compare une énergie utile à un travail électrique, et non deux énergies de même forme. Il peut donc légitimement dépasser 1, parfois même atteindre 3 à 5.',
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
    },
    {
      q: 'Pour diluer au dixième une solution mère de chlorure de sodium à $C_1 = 200$ g/L, quel volume de solution mère faut-il prélever pour préparer $V_2 = 2$ L de solution diluée ?',
      options: ['$V_1 = 0{,}2$ L (200 mL)', '$V_1 = 2$ L', '$V_1 = 20$ L', '$V_1 = 0{,}02$ L (20 mL)'],
      answer: 0,
      correction: 'Diluer au dixième signifie $C_2 = C_1/10 = 20$ g/L. La règle de trois $C_1V_1 = C_2V_2$ donne $V_1 = C_2V_2/C_1 = (20 \\times 2)/200 = 0{,}2$ L, soit 200 mL de solution mère complétés avec du solvant jusqu\'à 2 L.'
    },
    {
      q: 'Un onduleur photovoltaïque a un rendement $\\eta = 0{,}96$ et délivre une puissance de sortie $P_{out} = 4{,}8$ kW. La puissance d\'entrée (côté panneaux) est :',
      options: ['$P_{in} = 5$ kW', '$P_{in} = 4{,}608$ kW', '$P_{in} = 5{,}208$ kW', '$P_{in} = 4{,}992$ kW'],
      answer: 0,
      correction: 'Ici le rendement relie la sortie à l\'entrée : $P_{out} = \\eta \\times P_{in}$, donc $P_{in} = P_{out}/\\eta = 4{,}8/0{,}96 = 5$ kW. Attention au sens du calcul : on part de la sortie pour remonter à l\'entrée.'
    },
    {
      q: 'Une rampe d\'accès a une pente réglementaire de 5 %. Pour franchir une dénivellation de 0{,}60 m, la longueur minimale de la rampe est :',
      options: ['$L = 12$ m', '$L = 3$ m', '$L = 0{,}03$ m', '$L = 30$ m'],
      answer: 0,
      correction: 'Pente $= h/L \\Rightarrow L = h/\\text{pente} = 0{,}60/0{,}05 = 12$ m. Plus la pente autorisée est faible, plus la rampe doit être longue.'
    },
    {
      q: 'Un bassin est rempli en 8 h par une pompe de débit 25 m³/h. Avec une pompe de débit 40 m³/h, le temps de remplissage serait :',
      options: ['$t = 5$ h', '$t = 12{,}8$ h', '$t = 3{,}125$ h', '$t = 4$ h'],
      answer: 0,
      correction: 'Le volume à remplir est constant : $\\dot{V}_1 \\times t_1 = \\dot{V}_2 \\times t_2 \\Rightarrow t_2 = 25 \\times 8/40 = 5$ h. C\'est une proportionnalité inverse : débit plus grand, temps plus court.'
    },
    {
      q: 'Un réducteur mécanique a un rapport de réduction de 1:4. Si la roue motrice tourne à 1200 tr/min, la roue menée tourne à :',
      options: ['$300$ tr/min', '$4800$ tr/min', '$1196$ tr/min', '$600$ tr/min'],
      answer: 0,
      correction: 'Un rapport 1:4 signifie que la roue menée tourne 4 fois moins vite : $1200/4 = 300$ tr/min.'
    },
    {
      q: 'Un alliage de laiton contient 60 % de cuivre, le reste étant du zinc. Dans une pièce de 250 g, la masse de zinc est :',
      options: ['$100$ g', '$150$ g', '$60$ g', '$40$ g'],
      answer: 0,
      correction: 'La part de zinc est $100\\% - 60\\% = 40\\%$. Masse de zinc $= 0{,}40 \\times 250 = 100$ g.'
    },
    {
      q: 'Un échangeur thermique a une efficacité de 0{,}65. Pour une puissance thermique maximale transférable de 12 kW, la puissance réellement transférée est :',
      options: ['$7{,}8$ kW', '$4{,}2$ kW', '$12{,}65$ kW', '$18{,}46$ kW'],
      answer: 0,
      correction: 'Puissance transférée $= \\text{efficacité} \\times P_{max} = 0{,}65 \\times 12 = 7{,}8$ kW.'
    },
    {
      q: 'Un prix baisse de 10 % puis augmente de 10 %. Par rapport au prix initial, le prix final est :',
      options: ['inférieur de 1 %', 'identique (0 %)', 'supérieur de 1 %', 'inférieur de 20 %'],
      answer: 0,
      correction: '$(1-0{,}10)\\times(1+0{,}10) = 0{,}9 \\times 1{,}1 = 0{,}99$. Le prix final est à 99 % du prix initial, soit une baisse nette de 1 %. Les pourcentages successifs ne se compensent jamais exactement.'
    },
    {
      q: 'Pour un béton dosé en ratio ciment:sable:gravier de 1:2:3 (en masse), on utilise 12 kg de gravier. La masse de ciment nécessaire est :',
      options: ['$4$ kg', '$6$ kg', '$2$ kg', '$8$ kg'],
      answer: 0,
      correction: 'Le gravier représente 3 parts $= 12$ kg, donc 1 part $= 4$ kg. Le ciment représente 1 part, soit $4$ kg.'
    },
    {
      q: 'Une transmission par courroie a un rendement de 0{,}97. Pour une puissance motrice de 15 kW, la puissance transmise à la charge est :',
      options: ['$14{,}55$ kW', '$15{,}45$ kW', '$0{,}45$ kW', '$15$ kW'],
      answer: 0,
      correction: 'Puissance transmise $= \\eta \\times P_{motrice} = 0{,}97 \\times 15 = 14{,}55$ kW. Les $0{,}45$ kW restants sont perdus par frottement dans la courroie.'
    },
    {
      q: 'Une solution a une concentration molaire $c = 0{,}5$ mol/L. La quantité de matière contenue dans $V = 3$ L de cette solution est :',
      options: ['$n = 1{,}5$ mol', '$n = 0{,}5$ mol', '$n = 3$ mol', '$n = 6$ mol'],
      answer: 0,
      correction: '$n = c \\times V = 0{,}5 \\times 3 = 1{,}5$ mol. C\'est encore une proportionnalité directe entre quantité de matière et volume, à concentration fixée.'
    },
    {
      q: 'Une ligne électrique transporte 500 kW avec des pertes en ligne de 4 %. La puissance reçue à l\'arrivée est :',
      options: ['$480$ kW', '$520$ kW', '$496$ kW', '$20$ kW'],
      answer: 0,
      correction: '$P_{reçue} = 500 \\times (1 - 0{,}04) = 500 \\times 0{,}96 = 480$ kW.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['rendement', 'regle3', 'pourcentage', 'concentration', 'variation', 'rendement_serie']);

      if (type === 'rendement') {
        const eta = pick([0.80, 0.85, 0.88, 0.90, 0.92]);
        const Pabs = pick([2, 3, 4, 5, 7.5, 11]);
        const Putile = Math.round(eta * Pabs * 100) / 100;
        const domain = pick(['moteur électrique (Électrotechnique)', 'moto-pompe (Hydraulique)', 'compresseur (Pneumatique)']);
        return {
          statement: `Un ${domain} a un rendement $\\eta = ${fr(eta)}$ et absorbe une puissance $P_{abs} = ${fr(Pabs)}$ kW. Calculer la puissance utile $P_{utile}$ (en kW).`,
          answer: Putile,
          tolerance: 0.01,
          unit: 'kW',
          hint: `$P_{utile} = \\eta \\times P_{abs} = ${fr(eta)} \\times ${fr(Pabs)}$.`,
          solution: [`$P_{utile} = ${fr(eta)} \\times ${fr(Pabs)} = ${fr(Putile)}$ kW`]
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
          solution: [`$m = \\dfrac{${y1} \\times ${x2}}{${x1}} = ${fr(y2)}$ kg`]
        };
      }

      if (type === 'pourcentage') {
        const V0 = pick([100, 200, 500, 1000]);
        const p = pick([5, 8, 10, 12, 15, 20]);
        const V1 = V0 * (1 - p / 100);
        const { intro, unite } = pick([
          { intro: 'Un ventilateur a un débit nominal de', unite: 'm³/h' },
          { intro: 'Un réseau hydraulique a un débit nominal de', unite: 'm³/h' },
          { intro: 'Une ligne électrique a une puissance nominale de', unite: 'kW' }
        ]);
        return {
          statement: `${intro} ${V0} ${unite}. Une réduction de ${p} % est appliquée. Calculer la nouvelle valeur (en ${unite}).`,
          answer: V1,
          tolerance: 0.1,
          unit: unite,
          hint: `Appliquer la réduction : valeur $\\times (1 - ${p}/100) = $ valeur $\\times ${fr(1 - p/100)}$.`,
          solution: [`$V_1 = ${V0} \\times (1 - ${p}/100) = ${V0} \\times ${fr(1 - p/100, 2)} = ${fr(V1)}\\;\\text{${unite}}$`]
        };
      }

      if (type === 'concentration') {
        const c = pick([15, 20, 25, 35, 40, 50]);
        const V = pick([0.5, 1, 1.5, 2, 3]);
        const m = Math.round(c * V * 100) / 100;
        const solute = pick(['sel', 'sucre', 'sulfate de cuivre', 'chlorure de sodium']);
        return {
          statement: `Une solution de ${solute} a une concentration $c = ${fr(c)}$ g/L. Quelle masse de ${solute} faut-il pour préparer $V = ${fr(V)}$ L de cette solution (en g) ?`,
          answer: m,
          tolerance: 0.05,
          unit: 'g',
          hint: `$m = c \\times V = ${fr(c)} \\times ${fr(V)}$.`,
          solution: [`$m = ${fr(c)} \\times ${fr(V)} = ${fr(m)}$ g`]
        };
      }

      if (type === 'variation') {
        const V0 = pick([80, 100, 150, 200, 250]);
        const p = pick([10, 15, 20, 25, 30]);
        const V1 = Math.round(V0 * (1 + p / 100) * 100) / 100;
        const { intro, unite } = pick([
          { intro: 'La consommation électrique mensuelle d\'un atelier passe de', unite: 'kWh' },
          { intro: 'Le débit d\'une pompe de relevage passe de', unite: 'L/min' },
          { intro: 'La production journalière d\'une chaîne de montage passe de', unite: 'pièces' }
        ]);
        return {
          statement: `${intro} ${fr(V0)} à ${fr(V1, 2)} ${unite}. Calculer la variation en pourcentage.`,
          answer: p,
          tolerance: 0.5,
          unit: '%',
          hint: `Variation $= (V_1 - V_0)/V_0 \\times 100$.`,
          solution: [`$t = \\dfrac{${fr(V1, 2)} - ${fr(V0)}}{${fr(V0)}} \\times 100 = ${p}\\%$`]
        };
      }

      const eta1 = pick([0.85, 0.88, 0.90, 0.92, 0.95]);
      const eta2 = pick([0.80, 0.85, 0.90, 0.93]);
      const etaG = Math.round(eta1 * eta2 * 10000) / 10000;
      const { m1, m2 } = pick([
        { m1: 'moteur électrique', m2: 'réducteur mécanique' },
        { m1: 'moteur', m2: 'pompe hydraulique' },
        { m1: 'transformateur', m2: 'onduleur' }
      ]);
      return {
        statement: `Un ${m1} de rendement $\\eta_1 = ${fr(eta1)}$ entraîne un ${m2} de rendement $\\eta_2 = ${fr(eta2)}$ (montage en série). Calculer le rendement global de l'ensemble.`,
        answer: etaG,
        tolerance: 0.001,
        unit: '',
        hint: `Les rendements en série se multiplient : $\\eta_{global} = \\eta_1 \\times \\eta_2$.`,
        solution: [`$\\eta_{global} = ${fr(eta1)} \\times ${fr(eta2)} = ${fr(etaG, 4)}$`]
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
