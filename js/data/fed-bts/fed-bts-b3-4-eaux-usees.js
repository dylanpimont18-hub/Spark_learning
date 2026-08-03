/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b3-4-eaux-usees.js
   BTS FED — S8-B3-4 Eaux usées et eaux vannes — réseaux d'évacuation, récupération d'énergie
   Source (efficacité récupérateur de chaleur sur eaux grises, jusqu'à ~66% pour un modèle vertical passif) :
   https://thermiup.fr/les-differents-types-de-recuperateurs-de-chaleur-sur-eaux-grises-passifs-et-actifs/ (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b3-4-eaux-usees',
    level: 3, subject: 'fed',
    icon: '♻️',
    title: 'Eaux usées et eaux vannes',
    subtitle: 'Réseaux d\'évacuation, séparation EU/EV, récupération d\'énergie sur eaux grises',
    keywords: ['Eaux usées', 'Eaux vannes', 'Récupérateur', 'Eaux grises', 'Ventilation primaire'],
    physics: 'L\'eau qui part à l\'égout après une douche est encore <strong>chaude</strong> — et cette chaleur, si rien ne la récupère, part directement au tout-à-l\'égout. Un <strong>récupérateur de chaleur sur eaux grises</strong> intercepte une partie de cette énergie pour préchauffer l\'eau froide entrante, avant même qu\'elle n\'atteigne le générateur ECS (module B3-2).',

    cours: {
      intro: 'On distingue deux familles d\'eaux évacuées d\'un bâtiment : les <strong>eaux usées (EU)</strong>, ou eaux ménagères, issues des lavabos, éviers, douches et baignoires (peu chargées, souvent tièdes) ; et les <strong>eaux vannes (EV)</strong>, issues des WC (chargées en matières organiques). Selon la conception du réseau, elles sont évacuées séparément (réseau <strong>séparatif</strong>) ou ensemble (réseau <strong>unitaire</strong>), avant raccordement au collecteur public.<br/><br/>Chaque réseau d\'évacuation doit respecter une <strong>pente d\'écoulement</strong> minimale (de l\'ordre de $1$ à $3\\,\\%$ selon le DTU 60.11) pour garantir un écoulement gravitaire correct, et être équipé d\'une <strong>ventilation primaire</strong> (colonne prolongée en toiture) qui évite l\'effet de siphon lors des chasses, lequel viderait les siphons des appareils et laisserait remonter les odeurs.<br/><br/>Parmi les eaux usées, celles issues des <strong>douches</strong> sortent encore relativement chaudes ($30$ à $38\\,°C$) : un <strong>récupérateur de chaleur sur eaux grises</strong>, placé sous le receveur ou sur la colonne d\'évacuation, permet de préchauffer l\'eau froide sanitaire entrante avant sa production ECS, réduisant d\'autant le besoin en énergie calculé au module B3-2.',
      definitions: [
        { term: 'Eaux usées (EU)', def: 'Eaux ménagères issues des lavabos, éviers, douches, baignoires, lave-linge — peu chargées en matières organiques, souvent tièdes.' },
        { term: 'Eaux vannes (EV)', def: 'Eaux issues des WC, chargées en matières organiques — nécessitent un dimensionnement et un traitement (assainissement) spécifiques.' },
        { term: 'Réseau séparatif / unitaire', def: 'Un réseau séparatif évacue EU et EV par des canalisations distinctes (parfois jusqu\'au collecteur public) ; un réseau unitaire les regroupe dans une même canalisation.' },
        { term: 'Ventilation primaire', def: 'Prolongement de la colonne de chute en toiture, à l\'air libre, qui équilibre la pression dans le réseau d\'évacuation et évite la dépression (effet de siphon) qui viderait les siphons des appareils lors des chasses.' },
        { term: 'Récupérateur de chaleur sur eaux grises', def: 'Échangeur eau/eau placé sur l\'évacuation (souvent sous une douche) qui préchauffe l\'eau froide sanitaire entrante au contact (sans mélange) des eaux grises encore chaudes évacuées.' },
        { term: 'Efficacité du récupérateur $\\eta$', def: 'Rapport entre l\'échauffement obtenu par l\'eau froide et l\'écart de température maximal disponible : $\\eta = \\dfrac{\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}}}{\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}}}$, typiquement jusqu\'à $60$ à $66\\,\\%$ pour un modèle vertical performant.' }
      ],
      method: {
        title: 'Calculer l\'efficacité d\'un récupérateur de chaleur sur eaux grises',
        steps: [
          '<strong>Relever les trois températures</strong> : $\\theta_{\\text{froide}}$ (eau froide avant récupérateur), $\\theta_{\\text{eaux grises}}$ (eau évacuée, avant échangeur), $\\theta_{\\text{préchauffée}}$ (eau froide après passage dans le récupérateur).',
          '<strong>Calculer l\'échauffement obtenu</strong> : $\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}}$.',
          '<strong>Calculer l\'écart maximal disponible</strong> : $\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}}$.',
          '<strong>Calculer l\'efficacité</strong> $\\eta$ = échauffement obtenu / écart maximal disponible.',
          '<strong>Relier au module B3-2</strong> : l\'eau entrant déjà préchauffée dans le générateur ECS, l\'écart de température $(\\theta_c - \\theta_f)$ à combler par le générateur diminue d\'autant — sans refaire ici le calcul complet d\'énergie journalière.'
        ]
      },
      example: {
        statement: 'Un récupérateur de chaleur vertical, installé sous une colonne de douche, reçoit une eau froide à $\\theta_{\\text{froide}}=11\\,°C$ et des eaux grises à $\\theta_{\\text{eaux grises}}=36\\,°C$. En sortie de récupérateur, l\'eau froide préchauffée atteint $\\theta_{\\text{préchauffée}}=23\\,°C$.<br/><br/>Calculer l\'efficacité $\\eta$ de ce récupérateur.',
        steps: [
          'Échauffement obtenu : $\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}} = 23-11 = 12\\,°C$.',
          'Écart maximal disponible : $\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}} = 36-11 = 25\\,°C$.',
          '$\\eta = 12/25 = 0{,}48$, soit $48\\,\\%$.'
        ],
        answer: '$\\eta = 48\\,\\%$ : l\'eau froide entre déjà préchauffée à $23\\,°C$ dans le générateur ECS au lieu de $11\\,°C$, ce qui réduit d\'autant l\'énergie que ce générateur doit encore fournir.'
      },
      formulas: [
        '$\\eta = \\dfrac{\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}}}{\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}}}$ (efficacité du récupérateur sur eaux grises, sans unité)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Récupérateur de chaleur sur eaux grises',
        title: 'L\'eau froide se réchauffe au contact indirect des eaux grises évacuées',
        description: 'L\'eau froide du réseau public traverse le récupérateur et en ressort préchauffée, en direction du générateur ECS. Les eaux grises évacuées de la douche traversent le même récupérateur en sens inverse et en ressortent refroidies, vers l\'évacuation. Les deux flux ne se mélangent jamais.',
        svg: `
          <svg viewBox="0 0 480 280" role="img" aria-labelledby="eu-graph-title eu-graph-desc">
            <title id="eu-graph-title">Schema d'un recuperateur de chaleur sur eaux grises</title>
            <desc id="eu-graph-desc">Boite centrale echangeur verticale. En bas, l'eau froide du reseau entre puis ressort prechauffee vers le haut, en direction du generateur ECS. En haut, les eaux grises de la douche entrent puis ressortent refroidies vers le bas, en direction de l'evacuation. Les deux flux se croisent sans se melanger.</desc>

            <rect class="frame-line" x="190" y="80" width="100" height="130" fill="none"></rect>
            <text class="label-soft" x="240" y="150" text-anchor="middle">Récupérateur</text>

            <!-- eau froide entrante (bas gauche) -->
            <text class="label-soft" x="90" y="235" text-anchor="middle">Eau froide</text>
            <text class="label-soft" x="90" y="250" text-anchor="middle">(réseau)</text>
            <line class="curve-main" x1="140" y1="225" x2="190" y2="200"></line>

            <!-- eau prechauffee sortante (haut gauche) -->
            <text class="label-soft" x="90" y="55" text-anchor="middle">Vers générateur ECS</text>
            <text class="label-soft" x="90" y="70" text-anchor="middle">(préchauffée)</text>
            <line class="curve-main" x1="190" y1="95" x2="140" y2="70"></line>

            <!-- eaux grises entrantes (haut droite) -->
            <text class="label-soft" x="390" y="55" text-anchor="middle">Eaux grises</text>
            <text class="label-soft" x="390" y="70" text-anchor="middle">(douche)</text>
            <line class="curve-main" x1="340" y1="70" x2="290" y2="95"></line>

            <!-- eaux grises sortantes refroidies (bas droite) -->
            <text class="label-soft" x="390" y="235" text-anchor="middle">Vers évacuation</text>
            <text class="label-soft" x="390" y="250" text-anchor="middle">(refroidie)</text>
            <line class="curve-main" x1="290" y1="200" x2="340" y2="225"></line>

            <text class="label-soft" x="240" y="20" text-anchor="middle">η = (θpréchauffée - θfroide) / (θeaux grises - θfroide)</text>
          </svg>
        `,
        notes: [
          'L\'eau froide (bas gauche) entre dans le récupérateur et en ressort <strong>préchauffée</strong> (haut gauche), en direction du générateur ECS.',
          'Les eaux grises de la douche (haut droite) entrent aussi dans le récupérateur et en ressortent <strong>refroidies</strong> (bas droite), vers l\'évacuation.',
          'Les deux flux ne se mélangent <strong>jamais</strong> : seule la chaleur traverse la paroi de l\'échangeur.'
        ],
        reading: 'Suis le flux de gauche (eau froide → préchauffée, il se réchauffe) puis celui de droite (eaux grises → refroidies, il se refroidit) : les deux traversent le même récupérateur sans se mélanger, comme pour une VMC double flux (module B2-1).',
        caption: 'Principe d\'un récupérateur de chaleur sur eaux grises : préchauffage indirect de l\'eau froide sanitaire.'
      },
      recap: [
        'Les <strong>eaux usées (EU)</strong> (ménagères) et les <strong>eaux vannes (EV)</strong> (WC) peuvent être évacuées par un réseau séparatif ou unitaire.',
        'La <strong>ventilation primaire</strong>, prolongement de colonne en toiture, évite l\'effet de siphon qui viderait les siphons des appareils.',
        'Un <strong>récupérateur de chaleur sur eaux grises</strong> préchauffe l\'eau froide entrante au contact indirect des eaux grises évacuées, sans les mélanger.',
        'Efficacité : $\\eta = (\\theta_{\\text{préchauffée}}-\\theta_{\\text{froide}})/(\\theta_{\\text{eaux grises}}-\\theta_{\\text{froide}})$, jusqu\'à $60$-$66\\,\\%$ pour un modèle performant.',
        'Ce préchauffage réduit directement l\'énergie journalière que le générateur ECS (module B3-2) doit encore fournir.'
      ],
      piege: 'Le piège classique est de confondre eaux usées et eaux vannes dans le vocabulaire réglementaire : ce ne sont pas des synonymes, et un réseau séparatif les distingue précisément parce que leur charge organique et leur traitement diffèrent. Autre confusion fréquente : l\'efficacité $\\eta$ d\'un récupérateur sur eaux grises se calcule exactement comme celle d\'un récupérateur de VMC double flux (module B2-1), mais les deux appareils <strong>ne sont pas interchangeables</strong> — l\'un récupère sur un flux d\'air, l\'autre sur un flux d\'eau, avec des technologies et des débits très différents.'
    },

    quiz: [
      {
        q: 'Les eaux vannes (EV) désignent :',
        options: [
          'Les eaux de pluie collectées en toiture',
          'Les eaux issues des WC, chargées en matières organiques',
          'Les eaux issues des lavabos et douches uniquement',
          'L\'eau froide sanitaire avant traitement'
        ],
        answer: 1,
        correction: 'Les eaux vannes proviennent des WC et sont chargées en matières organiques, à distinguer des eaux usées (ménagères, issues des lavabos, éviers, douches).'
      },
      {
        q: 'Le rôle de la ventilation primaire d\'un réseau d\'évacuation est de :',
        options: [
          'Renouveler l\'air intérieur du logement',
          'Équilibrer la pression du réseau pour éviter l\'effet de siphon qui viderait les siphons des appareils',
          'Chauffer les eaux usées avant évacuation',
          'Remplacer le récupérateur de chaleur sur eaux grises'
        ],
        answer: 1,
        correction: 'La ventilation primaire, prolongée en toiture, équilibre la pression dans les canalisations d\'évacuation et évite qu\'une dépression ne vide les siphons des appareils, ce qui laisserait remonter les odeurs.'
      },
      {
        q: 'Un récupérateur de chaleur sur eaux grises transfère la chaleur des eaux évacuées vers :',
        options: [
          'L\'air ambiant du logement',
          'L\'eau froide sanitaire entrante, sans mélanger les deux flux',
          'Le réseau d\'eaux vannes',
          'Le générateur ECS directement, sans passer par l\'eau froide'
        ],
        answer: 1,
        correction: 'Le récupérateur préchauffe l\'eau froide sanitaire entrante au contact indirect des eaux grises évacuées (encore chaudes), sans jamais les mélanger.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une salle de bains équipée d\'un récupérateur vertical sous le receveur',
          'un collectif de douches d\'une salle de sport',
          'une colonne de douche rénovée avec récupération de chaleur',
          'un appartement neuf labellisé basse consommation'
        ]);
        const Tfroide = rand(8, 14);
        const Tgrises = rand(33, 38);
        const etaCible = randFloat(0.4, 0.65, 2);
        const Tprechauffee = Math.round(Tfroide + etaCible * (Tgrises - Tfroide));
        const eta = parseFloat((((Tprechauffee - Tfroide) / (Tgrises - Tfroide)) * 100).toFixed(1));
        return {
          statement: `Dans ${contexte}, l'eau froide entre à $\\theta_{\\text{froide}} = ${Tfroide}\\,°C$, les eaux grises évacuées sont à $\\theta_{\\text{eaux grises}} = ${Tgrises}\\,°C$, et l'eau froide ressort du récupérateur préchauffée à $\\theta_{\\text{préchauffée}} = ${Tprechauffee}\\,°C$.<br/><br/>Calcule l'efficacité $\\eta$ de ce récupérateur (en %, arrondie au dixième).`,
          answer: eta,
          tolerance: 1,
          unit: '%',
          hint: 'Applique $\\eta = (\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}})/(\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}})$.',
          solution: [
            `Échauffement obtenu : $\\theta_{\\text{préchauffée}} - \\theta_{\\text{froide}} = ${Tprechauffee} - ${Tfroide} = ${Tprechauffee - Tfroide}\\,°C$.`,
            `Écart maximal disponible : $\\theta_{\\text{eaux grises}} - \\theta_{\\text{froide}} = ${Tgrises} - ${Tfroide} = ${Tgrises - Tfroide}\\,°C$.`,
            `$\\eta = ${Tprechauffee - Tfroide}/${Tgrises - Tfroide} \\approx ${fr(eta, 1)}\\,\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une résidence étudiante installe des récupérateurs de chaleur verticaux sous $30$ colonnes de douche identiques. Pour chaque douche : eau froide à $\\theta_{\\text{froide}}=12\\,°C$, eaux grises évacuées à $\\theta_{\\text{eaux grises}}=35\\,°C$, efficacité annoncée par le fabricant $\\eta=0{,}55$.',
      tasks: [
        'Calculer la température de l\'eau froide préchauffée $\\theta_{\\text{préchauffée}}$ en sortie de récupérateur.',
        'Cette eau préchauffée alimente ensuite un ballon d\'accumulation qui porte l\'eau à $\\theta_c=60\\,°C$ (au lieu de partir directement de $\\theta_{\\text{froide}}=12\\,°C$). Calculer, pour $1\\,000$ L d\'eau traités, l\'énergie économisée grâce au préchauffage (en kWh, avec $1{,}163$ Wh/(L·K)).',
        'Expliquer en une phrase pourquoi cette économie ne s\'applique qu\'à l\'eau effectivement utilisée pendant ou juste après une douche (et pas à tout instant de la journée).'
      ],
      solutions: [
        '$\\theta_{\\text{préchauffée}} = \\theta_{\\text{froide}} + \\eta \\times (\\theta_{\\text{eaux grises}}-\\theta_{\\text{froide}}) = 12 + 0{,}55\\times(35-12) = 12+0{,}55\\times23 = 12+12{,}65 = 24{,}65\\,°C$.',
        'Sans préchauffage, il faudrait chauffer de $12$ à $60\\,°C$ ($\\Delta\\theta=48\\,°C$) ; avec préchauffage, seulement de $24{,}65$ à $60\\,°C$ ($\\Delta\\theta=35{,}35\\,°C$). Économie de $\\Delta\\theta$ : $48-35{,}35=12{,}65\\,°C$. Énergie économisée pour $1\\,000$ L : $E = 1\\,000\\times1{,}163\\times12{,}65 \\approx 14\\,712$ Wh $\\approx 14{,}7$ kWh.',
        'Le préchauffage n\'existe que pendant le passage effectif des eaux grises chaudes dans le récupérateur (typiquement pendant la douche elle-même) : dès que la douche s\'arrête, le récupérateur refroidit et l\'eau froide qui y transite ensuite n\'est plus préchauffée — l\'économie réelle dépend donc de la simultanéité entre puisage d\'ECS et évacuation d\'eaux grises chaudes.'
      ],
      finalAnswer: '$\\theta_{\\text{préchauffée}} \\approx 24{,}65\\,°C$, ce qui économise environ $14{,}7$ kWh par tranche de $1\\,000$ L d\'eau traités — un gain réel mais qui dépend de la simultanéité entre douche et puisage ECS.'
    },

    evaluation: {
      title: 'Évaluation — Eaux usées et eaux vannes',
      duration: '20 min',
      questions: [
        {
          statement: 'Un récupérateur reçoit une eau froide à $10\\,°C$, des eaux grises à $34\\,°C$, et préchauffe l\'eau froide à $22\\,°C$. Calculer l\'efficacité $\\eta$ (en %, arrondie à l\'unité).',
          type: 'numeric',
          answer: 50,
          tolerance: 2,
          unit: '%',
          points: 3,
          correction: '$\\eta = (22-10)/(34-10) = 12/24 = 0{,}50$, soit $50\\,\\%$.'
        },
        {
          statement: 'Avec $\\theta_{\\text{froide}}=9\\,°C$, $\\theta_{\\text{eaux grises}}=36\\,°C$ et $\\eta=0{,}6$, calculer $\\theta_{\\text{préchauffée}}$ (en °C, arrondie à l\'unité).',
          type: 'numeric',
          answer: 25,
          tolerance: 1,
          unit: '°C',
          points: 3,
          correction: '$\\theta_{\\text{préchauffée}} = 9 + 0{,}6\\times(36-9) = 9+16{,}2 = 25{,}2\\,°C$, soit environ $25\\,°C$.'
        },
        {
          statement: 'Les eaux usées (EU), à la différence des eaux vannes (EV), désignent :',
          type: 'multiple-choice',
          options: [
            'Les eaux issues des WC uniquement',
            'Les eaux ménagères issues des lavabos, éviers, douches et baignoires',
            'Les eaux pluviales collectées en toiture',
            'L\'eau froide sanitaire avant tout usage'
          ],
          answer: 1,
          points: 2,
          correction: 'Les eaux usées (EU) sont les eaux ménagères (lavabos, éviers, douches, baignoires), à distinguer des eaux vannes (EV) issues des WC.'
        },
        {
          statement: 'En l\'absence de ventilation primaire correcte sur un réseau d\'évacuation, le risque principal est :',
          type: 'multiple-choice',
          options: [
            'Une surconsommation d\'eau froide sanitaire',
            'La vidange des siphons des appareils par effet de dépression, avec remontée d\'odeurs',
            'Une augmentation de la dureté de l\'eau',
            'Un débit de pointe EFS trop élevé'
          ],
          answer: 1,
          points: 3,
          correction: 'Sans ventilation primaire, une chasse peut créer une dépression suffisante pour vider les siphons voisins, supprimant leur garde d\'eau et laissant remonter les odeurs du réseau d\'évacuation.'
        },
        {
          statement: 'Le préchauffage apporté par un récupérateur de chaleur sur eaux grises réduit directement :',
          type: 'multiple-choice',
          options: [
            'La dureté de l\'eau entrante',
            'L\'écart de température que le générateur ECS doit encore combler, donc l\'énergie qu\'il doit fournir',
            'Le débit de pointe du réseau EFS',
            'Le coefficient de simultanéité du réseau'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'eau entrant déjà préchauffée dans le générateur ECS, l\'écart de température restant à combler (donc l\'énergie journalière nécessaire, module B3-2) est réduit d\'autant.'
        }
      ]
    }
  });
