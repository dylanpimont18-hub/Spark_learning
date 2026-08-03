/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b6-4-pile-combustible.js
   BTS FED — S8-B6-4 Pile à combustible — principe, rendement électrique, PCI hydrogène
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b6-4-pile-combustible',
    level: 3, subject: 'fed',
    icon: '🔋',
    title: 'Pile à combustible',
    subtitle: 'Principe électrochimique, rendement électrique, hydrogène',
    keywords: ['Pile à combustible', 'Hydrogène', 'Électrochimie', 'Rendement électrique'],
    physics: 'Contrairement à un moteur de cogénération (module B6-3), qui brûle un combustible pour entraîner un alternateur, une <strong>pile à combustible</strong> convertit directement l\'énergie chimique de l\'hydrogène en électricité, <strong>sans combustion</strong> — une réaction électrochimique silencieuse, sans pièce mécanique en mouvement dans le cœur de pile.',

    cours: {
      intro: 'Une <strong>pile à combustible</strong> produit de l\'électricité par une réaction électrochimique entre du <strong>dihydrogène (H₂)</strong> et du <strong>dioxygène (O₂)</strong> de l\'air, à travers une membrane qui sépare les deux gaz. Cette réaction, l\'inverse de l\'électrolyse de l\'eau, ne produit que de l\'électricité, de la chaleur et de l\'<strong>eau</strong> — aucune combustion, aucune émission de CO₂ directe au point d\'usage.<br/><br/>Plusieurs technologies existent selon la nature de l\'électrolyte (membrane échangeuse de protons — PEMFC, la plus répandue pour les usages mobiles et stationnaires de faible puissance ; pile à oxyde solide — SOFC, pour de plus fortes puissances stationnaires, fonctionnant à haute température). Toutes partagent le même principe : une réaction électrochimique directe, sans étape de combustion intermédiaire.<br/><br/>Comme pour la cogénération (module B6-3), une part de l\'énergie de l\'hydrogène part sous forme de <strong>chaleur</strong> plutôt que d\'électricité : c\'est le <strong>rendement électrique</strong> de la pile qui détermine cette répartition, et certaines installations valorisent également cette chaleur résiduelle (pile à combustible en cogénération).',
      definitions: [
        { term: 'Pile à combustible (PAC-H₂)', def: 'Dispositif électrochimique qui convertit directement l\'énergie chimique de l\'hydrogène en électricité, par réaction avec l\'oxygène de l\'air, sans combustion.' },
        { term: 'PEMFC (membrane échangeuse de protons)', def: 'Technologie de pile à combustible la plus répandue, fonctionnant à basse température, adaptée aux usages mobiles et aux installations stationnaires de faible à moyenne puissance.' },
        { term: 'Pouvoir calorifique inférieur de l\'hydrogène $PCI_{H_2}$', def: 'Énergie chimique disponible par kilogramme d\'hydrogène : $PCI_{H_2} \\approx 33{,}3$ kWh/kg (soit environ $120$ MJ/kg), une valeur bien supérieure à celle des combustibles fossiles usuels.' },
        { term: 'Rendement électrique $\\eta_{\\text{élec}}$', def: 'Part de l\'énergie chimique de l\'hydrogène consommé effectivement convertie en électricité : $\\eta_{\\text{élec}} = P_{\\text{élec}}/(q_{H_2} \\times PCI_{H_2})$, avec $q_{H_2}$ le débit massique d\'hydrogène consommé (kg/h) — valeur usuelle $40$ à $60\\,\\%$ selon la technologie et le point de fonctionnement.' }
      ],
      method: {
        title: 'Calculer le rendement électrique d\'une pile à combustible',
        steps: [
          '<strong>Relever le débit massique d\'hydrogène consommé</strong> $q_{H_2}$ (kg/h).',
          '<strong>Calculer la puissance chimique disponible</strong> $P_{H_2} = q_{H_2} \\times PCI_{H_2}$, avec $PCI_{H_2}\\approx33{,}3$ kWh/kg.',
          '<strong>Relever la puissance électrique produite</strong> $P_{\\text{élec}}$ (mesurée en sortie de pile).',
          '<strong>Calculer le rendement électrique</strong> $\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{H_2}$.',
          '<strong>Situer la valeur</strong> par rapport à la plage usuelle ($40$ à $60\\,\\%$) : un rendement plus faible signale un fonctionnement à forte charge ou une pile vieillissante.'
        ]
      },
      example: {
        statement: 'Une pile à combustible PEMFC consomme $q_{H_2}=0{,}5$ kg/h d\'hydrogène et produit une puissance électrique $P_{\\text{élec}}=7{,}5$ kW.<br/><br/>Calculer le rendement électrique de cette pile.',
        steps: [
          'Puissance chimique disponible : $P_{H_2} = q_{H_2} \\times PCI_{H_2} = 0{,}5 \\times 33{,}3 = 16{,}65$ kW.',
          '$\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{H_2} = 7{,}5/16{,}65 \\approx 0{,}45$, soit $45\\,\\%$.'
        ],
        answer: '$\\eta_{\\text{élec}} \\approx 45\\,\\%$ : un peu moins de la moitié de l\'énergie chimique de l\'hydrogène devient de l\'électricité, le reste se retrouvant sous forme de chaleur — valorisable si l\'installation fonctionne en cogénération.'
      },
      formulas: [
        '$P_{H_2} = q_{H_2} \\times PCI_{H_2}$ (puissance chimique disponible, $PCI_{H_2}\\approx33{,}3$ kWh/kg)',
        '$\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{H_2}$ (rendement électrique de la pile)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Principe de la pile à combustible',
        title: 'H₂ et O₂ entrent, électricité, chaleur et eau ressortent',
        description: 'L\'hydrogène et l\'oxygène de l\'air entrent séparément dans la pile, de part et d\'autre d\'une membrane. La réaction électrochimique produit un courant électrique continu, de la chaleur, et de l\'eau comme unique sous-produit.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="pac-graph-title pac-graph-desc">
            <title id="pac-graph-title">Principe de la pile a combustible</title>
            <desc id="pac-graph-desc">Boite centrale representant le coeur de pile avec membrane. A gauche, entree hydrogene H2. A droite, entree oxygene de l'air O2. En bas, trois sorties : electricite, chaleur, eau.</desc>

            <rect class="frame-line" x="160" y="60" width="160" height="100" fill="none"></rect>
            <line class="guide-line" x1="240" y1="60" x2="240" y2="160"></line>
            <text class="label-soft" x="200" y="115" text-anchor="middle">Anode</text>
            <text class="label-soft" x="280" y="115" text-anchor="middle">Cathode</text>
            <text class="label-soft" x="240" y="40" text-anchor="middle">Cœur de pile (membrane)</text>

            <text class="label-soft" x="80" y="115" text-anchor="middle">H₂</text>
            <line class="curve-main" x1="100" y1="110" x2="155" y2="110"></line>

            <text class="label-soft" x="400" y="115" text-anchor="middle">O₂ (air)</text>
            <line class="curve-main" x1="380" y1="110" x2="325" y2="110"></line>

            <line class="curve-main" x1="200" y1="160" x2="150" y2="210"></line>
            <text class="label-soft" x="110" y="225" text-anchor="middle">Électricité</text>

            <line class="curve-main" x1="240" y1="160" x2="240" y2="210"></line>
            <text class="label-soft" x="240" y="225" text-anchor="middle">Chaleur</text>

            <line class="curve-main" x1="280" y1="160" x2="330" y2="210"></line>
            <text class="label-soft" x="370" y="225" text-anchor="middle">Eau</text>
          </svg>
        `,
        notes: [
          'L\'<strong>hydrogène</strong> (gauche) et l\'<strong>oxygène de l\'air</strong> (droite) entrent séparément, de part et d\'autre de la membrane.',
          'La réaction électrochimique produit un courant <strong>électrique continu</strong>, sans combustion.',
          'La <strong>chaleur</strong> et l\'<strong>eau</strong> sont les deux seuls sous-produits — l\'eau peut être évacuée ou, dans certains procédés industriels, réutilisée.'
        ],
        reading: 'Suis les deux entrées de gaz de part et d\'autre de la membrane, puis les trois sorties en bas : électricité, chaleur, eau.',
        caption: 'Principe électrochimique d\'une pile à combustible hydrogène : conversion directe, sans combustion.'
      },
      recap: [
        'Une pile à combustible convertit directement l\'énergie chimique de l\'<strong>hydrogène</strong> en électricité, par réaction électrochimique avec l\'oxygène de l\'air, sans combustion.',
        'La technologie <strong>PEMFC</strong> est la plus répandue pour les usages mobiles et stationnaires de faible puissance.',
        'Le pouvoir calorifique de l\'hydrogène $PCI_{H_2}\\approx33{,}3$ kWh/kg est très supérieur à celui des combustibles fossiles usuels.',
        'Le rendement électrique $\\eta_{\\text{élec}} = P_{\\text{élec}}/(q_{H_2}\\times PCI_{H_2})$ se situe typiquement entre $40$ et $60\\,\\%$.',
        'Comme pour la cogénération (module B6-3), la chaleur résiduelle peut être valorisée si l\'installation fonctionne en configuration cogénération.'
      ],
      piege: 'Le piège classique est de croire qu\'une pile à combustible « brûle » de l\'hydrogène : il n\'y a <strong>aucune combustion</strong>, la réaction est purement électrochimique (transfert d\'électrons via un circuit externe), ce qui explique l\'absence de flamme et un fonctionnement silencieux. Attention aussi à ne pas confondre le rendement électrique de la pile elle-même avec le rendement global d\'une chaîne hydrogène complète (électrolyse de production, compression, stockage, transport) : chacune de ces étapes ajoute ses propres pertes, non comptabilisées dans $\\eta_{\\text{élec}}$ de la pile seule.'
    },

    quiz: [
      {
        q: 'La réaction au cœur d\'une pile à combustible hydrogène est :',
        options: [
          'Une combustion classique de l\'hydrogène',
          'Une réaction électrochimique directe entre hydrogène et oxygène, sans combustion',
          'Une réaction nucléaire',
          'Une simple compression mécanique du gaz'
        ],
        answer: 1,
        correction: 'La pile à combustible produit de l\'électricité par réaction électrochimique directe entre l\'hydrogène et l\'oxygène de l\'air, sans aucune combustion.'
      },
      {
        q: 'Les sous-produits d\'une pile à combustible hydrogène sont :',
        options: [
          'Du CO₂ et des imbrûlés',
          'De la chaleur et de l\'eau',
          'Uniquement de la suie',
          'Du méthane'
        ],
        answer: 1,
        correction: 'Une pile à combustible hydrogène ne produit que de l\'électricité, de la chaleur et de l\'eau — sans émission directe de CO₂ au point d\'usage.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une pile à combustible stationnaire de secours',
          'un système de micro-cogénération hydrogène résidentiel',
          'une pile à combustible alimentant un site isolé',
          'un banc d\'essai de pile à combustible PEMFC'
        ]);
        const qH2 = randFloat(0.3, 1.0, 2);
        const PH2 = parseFloat((qH2 * 33.3).toFixed(2));
        const etaCible = randFloat(0.40, 0.58, 2);
        const Pelec = parseFloat((PH2 * etaCible).toFixed(2));
        const eta = parseFloat(((Pelec / PH2) * 100).toFixed(1));
        return {
          statement: `Dans ${contexte}, la pile consomme $q_{H_2}=${fr(qH2, 2)}$ kg/h d'hydrogène ($PCI_{H_2}=33{,}3$ kWh/kg) et produit une puissance électrique $P_{\\text{élec}}=${fr(Pelec, 2)}$ kW.<br/><br/>Calcule le rendement électrique $\\eta_{\\text{élec}}$ de cette pile (en %, arrondi au dixième).`,
          answer: eta,
          tolerance: 1,
          unit: '%',
          hint: 'Calcule d\'abord $P_{H_2} = q_{H_2} \\times PCI_{H_2}$, puis $\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{H_2}$.',
          solution: [
            `Puissance chimique disponible : $P_{H_2} = ${fr(qH2, 2)} \\times 33{,}3 \\approx ${fr(PH2, 2)}$ kW.`,
            `$\\eta_{\\text{élec}} = ${fr(Pelec, 2)}/${fr(PH2, 2)} \\approx ${fr(eta, 1)}\\,\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un site isolé (télécommunications) utilise une pile à combustible de secours consommant $q_{H_2}=0{,}8$ kg/h, avec un rendement électrique $\\eta_{\\text{élec}}=0{,}48$.',
      tasks: [
        'Calculer la puissance chimique disponible $P_{H_2}$.',
        'Calculer la puissance électrique produite $P_{\\text{élec}}$.',
        'Calculer la puissance perdue sous forme de chaleur (en supposant que toute l\'énergie non convertie en électricité devient de la chaleur).',
        'Le site fonctionne en secours pendant $6$ h lors d\'une coupure réseau. Calculer la masse d\'hydrogène consommée sur cette durée, et l\'énergie électrique totale produite (en kWh).'
      ],
      solutions: [
        '$P_{H_2} = 0{,}8 \\times 33{,}3 = 26{,}64$ kW.',
        '$P_{\\text{élec}} = \\eta_{\\text{élec}} \\times P_{H_2} = 0{,}48 \\times 26{,}64 \\approx 12{,}79$ kW.',
        'Puissance chaleur : $P_{H_2} - P_{\\text{élec}} = 26{,}64 - 12{,}79 \\approx 13{,}85$ kW.',
        'Masse d\'hydrogène sur $6$ h : $0{,}8 \\times 6 = 4{,}8$ kg. Énergie électrique totale : $12{,}79 \\times 6 \\approx 76{,}7$ kWh.'
      ],
      finalAnswer: 'Sur $6$ h de secours, la pile consomme $4{,}8$ kg d\'hydrogène et produit environ $76{,}7$ kWh d\'électricité, pour une puissance électrique de $12{,}79$ kW et un rendement de $48\\,\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Pile à combustible',
      duration: '15 min',
      questions: [
        {
          statement: 'Une pile consomme $q_{H_2}=0{,}6$ kg/h ($PCI_{H_2}=33{,}3$ kWh/kg) et produit $P_{\\text{élec}}=10$ kW. Calculer $\\eta_{\\text{élec}}$ (en %, arrondi à l\'unité).',
          type: 'numeric',
          answer: 50,
          tolerance: 3,
          unit: '%',
          points: 3,
          correction: '$P_{H_2}=0{,}6\\times33{,}3=19{,}98$ kW. $\\eta_{\\text{élec}}=10/19{,}98\\approx50{,}05\\,\\%$.'
        },
        {
          statement: 'La technologie PEMFC est caractérisée par :',
          type: 'multiple-choice',
          options: [
            'Une combustion à très haute température',
            'Une membrane échangeuse de protons, fonctionnant à basse température',
            'L\'absence totale d\'hydrogène dans le procédé',
            'Un fonctionnement uniquement nucléaire'
          ],
          answer: 1,
          points: 2,
          correction: 'La PEMFC (Proton Exchange Membrane Fuel Cell) utilise une membrane échangeuse de protons et fonctionne à basse température, ce qui la rend adaptée aux usages mobiles et stationnaires de faible puissance.'
        },
        {
          statement: 'La chaleur résiduelle d\'une pile à combustible (part non convertie en électricité) peut être valorisée :',
          type: 'multiple-choice',
          options: [
            'Uniquement en la rejetant systématiquement à l\'atmosphère',
            'En configuration cogénération, comme pour un moteur thermique (module B6-3)',
            'Elle n\'existe jamais dans une pile à combustible',
            'Uniquement pour produire de l\'hydrogène supplémentaire'
          ],
          answer: 1,
          points: 2,
          correction: 'Comme pour la cogénération classique, la chaleur non convertie en électricité peut être récupérée et valorisée si l\'installation est conçue en configuration cogénération.'
        }
      ]
    }
  });
