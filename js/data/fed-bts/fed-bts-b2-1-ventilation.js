/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b2-1-ventilation.js
   BTS FED — S8-B2-1 Ventilation — VMC double flux, efficacité du récupérateur
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b2-1-ventilation',
    level: 3, subject: 'fed',
    icon: '🌬️',
    title: 'Ventilation',
    subtitle: 'VMC double flux, efficacité du récupérateur de chaleur',
    keywords: ['VMC double flux', 'Récupérateur', 'Efficacité', 'Air neuf', 'Déperditions'],
    physics: 'Renouveler l\'air d\'un logement est indispensable pour la qualité de l\'air, mais cela coûte cher en chauffage : l\'air neuf entrant doit être réchauffé (déperditions $D_r$, module A2-3 Bilan thermique). Une <strong>VMC double flux</strong> limite ce coût en récupérant une partie de la chaleur de l\'air vicié extrait pour préchauffer l\'air neuf — l\'efficacité de cette récupération est une donnée clé pour tout projet de ventilation.',

    cours: {
      intro: 'Une <strong>VMC simple flux</strong> se contente d\'extraire l\'air vicié du logement ; l\'air neuf entre passivement par des entrées d\'air, sans aucun préchauffage. Toute la chaleur de l\'air extrait est perdue.<br/><br/>Une <strong>VMC double flux</strong> extrait l\'air vicié <strong>et</strong> insuffle l\'air neuf via un réseau dédié. Les deux flux d\'air se croisent dans un <strong>échangeur (récupérateur)</strong>, sans se mélanger : l\'air extrait, encore chaud, cède une partie de sa chaleur à l\'air neuf entrant, qui arrive ainsi déjà préchauffé dans le logement.<br/><br/>L\'<strong>efficacité du récupérateur</strong> mesure la part de l\'écart de température initial que l\'air neuf a effectivement récupérée avant d\'être insufflé — une donnée qui réduit directement les déperditions par renouvellement d\'air $D_r$ vues dans le bilan thermique.',
      definitions: [
        { term: 'VMC simple flux', def: 'Système qui extrait uniquement l\'air vicié du logement, sans réseau de soufflage dédié ni récupération de chaleur : l\'air neuf entre par des entrées d\'air, à la température extérieure.' },
        { term: 'VMC double flux', def: 'Système qui extrait l\'air vicié et insuffle l\'air neuf via deux réseaux distincts, avec un échangeur (récupérateur) qui transfère une partie de la chaleur de l\'air extrait vers l\'air neuf soufflé.' },
        { term: 'Efficacité du récupérateur $\\eta$', def: 'Rapport entre l\'échauffement réellement obtenu par l\'air neuf et l\'écart de température maximal disponible : $\\eta = \\dfrac{T_{\\text{soufflage}} - T_{\\text{extérieur}}}{T_{\\text{extraction}} - T_{\\text{extérieur}}}$, sans unité (souvent exprimée en %).' },
        { term: 'Déperditions résiduelles par renouvellement d\'air', def: 'Avec une VMC double flux, l\'air neuf n\'entre plus à $\\theta_e$ mais à une température déjà relevée par la récupération : $D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$, à comparer aux déperditions d\'une VMC simple flux (module A2-3) où $\\eta = 0$.' }
      ],
      method: {
        title: 'Calculer l\'efficacité d\'un récupérateur et son effet sur les déperditions',
        steps: [
          '<strong>Relever les trois températures</strong> : $T_{\\text{extérieur}}$ (air neuf avant échangeur), $T_{\\text{extraction}}$ (air vicié avant échangeur), $T_{\\text{soufflage}}$ (air neuf après échangeur, avant insufflation).',
          '<strong>Calculer l\'efficacité</strong> $\\eta = (T_{\\text{soufflage}} - T_{\\text{extérieur}})/(T_{\\text{extraction}} - T_{\\text{extérieur}})$.',
          '<strong>Situer la valeur obtenue</strong> : une VMC double flux performante atteint $\\eta \\approx 0{,}7$ à $0{,}9$ ; une VMC simple flux correspond à $\\eta = 0$.',
          '<strong>En déduire les déperditions résiduelles</strong> par renouvellement d\'air : $D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$, à comparer à la formule sans récupération du module A2-3.',
          '<strong>Conclure sur le gain énergétique</strong> apporté par la récupération, en comparant les déperditions avec et sans double flux.'
        ]
      },
      example: {
        statement: 'Une VMC double flux fonctionne avec une température extérieure $T_{\\text{extérieur}} = 0\\,°C$, une température d\'extraction (air vicié avant échangeur) $T_{\\text{extraction}} = 19\\,°C$, et une température de soufflage (air neuf après échangeur) $T_{\\text{soufflage}} = 15\\,°C$.<br/><br/>Calculer l\'efficacité $\\eta$ de ce récupérateur.',
        steps: [
          'Échauffement réellement obtenu par l\'air neuf : $T_{\\text{soufflage}} - T_{\\text{extérieur}} = 15 - 0 = 15\\,°C$.',
          'Écart maximal disponible : $T_{\\text{extraction}} - T_{\\text{extérieur}} = 19 - 0 = 19\\,°C$.',
          '$\\eta = 15/19 \\approx 0{,}789$, soit environ $79\\,\\%$.'
        ],
        answer: '$\\eta \\approx 79\\,\\%$ : l\'air neuf récupère près de $80\\,\\%$ de l\'écart de température disponible avant d\'entrer dans le logement — une performance typique d\'un bon récupérateur double flux.'
      },
      formulas: [
        '$\\eta = \\dfrac{T_{\\text{soufflage}} - T_{\\text{extérieur}}}{T_{\\text{extraction}} - T_{\\text{extérieur}}}$ (efficacité du récupérateur, sans unité)',
        '$D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$ (déperditions résiduelles par renouvellement d\'air, en W)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'VMC double flux',
        title: 'Deux flux d\'air croisés dans l\'échangeur, sans se mélanger',
        description: 'L\'air extérieur traverse l\'échangeur pour devenir l\'air soufflé dans le logement, en se réchauffant. L\'air extrait du logement traverse le même échangeur pour devenir l\'air rejeté vers l\'extérieur, en se refroidissant. Les deux flux ne se mélangent jamais.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="vent-graph-title vent-graph-desc">
            <title id="vent-graph-title">Schema d'une VMC double flux avec echangeur recuperateur</title>
            <desc id="vent-graph-desc">Quatre boites autour d'une boite centrale echangeur. En bas a gauche, l'air exterieur entre dans l'echangeur ; en bas a droite, l'air souffle en ressort vers le logement. En haut a droite, l'air extrait du logement entre dans l'echangeur ; en haut a gauche, l'air rejete en ressort vers l'exterieur. Les deux flux se croisent dans l'echangeur sans se melanger.</desc>

            <defs>
              <marker id="arrow-fed-vent" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- echangeur central -->
            <rect class="frame-line" x="190" y="110" width="100" height="80" fill="none"></rect>
            <text class="label-soft" x="240" y="145" text-anchor="middle">Échangeur</text>
            <text class="label-soft" x="240" y="163" text-anchor="middle">(récupérateur)</text>

            <!-- air exterieur (bas gauche) -->
            <rect class="frame-line" x="20" y="200" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="85" y="230" text-anchor="middle">Air extérieur</text>

            <!-- air souffle (bas droite) -->
            <rect class="frame-line" x="330" y="200" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="395" y="225" text-anchor="middle">Air soufflé</text>
            <text class="label-soft" x="395" y="240" text-anchor="middle">(vers logement)</text>

            <!-- air extrait (haut droite) -->
            <rect class="frame-line" x="330" y="50" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="395" y="75" text-anchor="middle">Air extrait</text>
            <text class="label-soft" x="395" y="90" text-anchor="middle">(du logement)</text>

            <!-- air rejete (haut gauche) -->
            <rect class="frame-line" x="20" y="50" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="85" y="80" text-anchor="middle">Air rejeté</text>

            <!-- fleche air exterieur -> echangeur -->
            <line class="curve-main" x1="150" y1="225" x2="190" y2="180" marker-end="url(#arrow-fed-vent)"></line>
            <text class="annotation-label" x="150" y="260" text-anchor="start">Text</text>

            <!-- fleche echangeur -> air souffle -->
            <line class="curve-main" x1="290" y1="180" x2="330" y2="225" marker-end="url(#arrow-fed-vent)"></line>
            <text class="annotation-label" x="295" y="260" text-anchor="start">Tsoufflage</text>

            <!-- fleche air extrait -> echangeur -->
            <line class="curve-main" x1="330" y1="75" x2="290" y2="120" marker-end="url(#arrow-fed-vent)"></line>
            <text class="annotation-label" x="295" y="40" text-anchor="start">Textraction</text>

            <!-- fleche echangeur -> air rejete -->
            <line class="curve-main" x1="190" y1="120" x2="150" y2="75" marker-end="url(#arrow-fed-vent)"></line>
            <text class="annotation-label" x="70" y="40" text-anchor="start">Trejet</text>

            <text class="label-soft" x="240" y="285" text-anchor="middle">η = (Tsoufflage - Text) / (Textraction - Text)</text>
          </svg>
        `,
        notes: [
          'L\'air extérieur (bas gauche) entre dans l\'échangeur et en ressort comme air soufflé (bas droite), <strong>réchauffé</strong> vers le logement.',
          'L\'air extrait du logement (haut droite) entre aussi dans l\'échangeur et en ressort comme air rejeté (haut gauche), <strong>refroidi</strong> vers l\'extérieur.',
          'Les deux flux se croisent dans l\'échangeur mais ne se mélangent <strong>jamais</strong> : seule la chaleur est transférée, pas l\'air lui-même.'
        ],
        reading: 'Suis le flux du bas (air extérieur → air soufflé, il se réchauffe) puis celui du haut (air extrait → air rejeté, il se refroidit) : les deux traversent le même échangeur sans se mélanger.',
        caption: 'Principe d\'une VMC double flux : l\'air neuf se réchauffe au contact (indirect) de l\'air vicié extrait, via un échangeur.'
      },
      recap: [
        'Une VMC <strong>simple flux</strong> n\'a pas de récupération : $\\eta = 0$, l\'air neuf entre à $T_{\\text{extérieur}}$.',
        'Une VMC <strong>double flux</strong> fait passer l\'air neuf et l\'air extrait dans un échangeur commun, sans les mélanger.',
        'Efficacité du récupérateur : $\\eta = (T_{\\text{soufflage}} - T_{\\text{extérieur}})/(T_{\\text{extraction}} - T_{\\text{extérieur}})$, typiquement $0{,}7$ à $0{,}9$ pour un bon récupérateur.',
        'Les déperditions résiduelles par renouvellement d\'air deviennent $D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$, à comparer à la formule sans récupération (module A2-3, $\\eta=0$).',
        'Plus $\\eta$ est proche de $1$, plus les déperditions résiduelles $D_r$ sont faibles : c\'est tout l\'intérêt énergétique du double flux.'
      ],
      piege: 'Ne pas confondre $T_{\\text{extraction}}$ (température de l\'air vicié <strong>avant</strong> l\'échangeur, proche de la température ambiante du logement) et $T_{\\text{rejet}}$ (température de l\'air <strong>après</strong> l\'échangeur, une fois qu\'il a cédé sa chaleur). C\'est bien $T_{\\text{extraction}}$ qui sert de référence « haute » dans la formule de l\'efficacité, pas $T_{\\text{rejet}}$. Attention aussi : une efficacité $\\eta = 79\\,\\%$ ne signifie pas que les déperditions par renouvellement d\'air sont réduites de $79\\,\\%$ à elles seules — elle s\'applique à l\'écart de température, il faut ensuite reporter ce facteur $(1-\\eta)$ dans la formule complète de $D_r$.'
    },

    quiz: [
      {
        q: 'Dans une VMC double flux, l\'échangeur (récupérateur) sert à :',
        options: [
          'Mélanger l\'air neuf et l\'air vicié pour homogénéiser la température',
          'Transférer la chaleur de l\'air extrait vers l\'air neuf entrant, sans mélanger les deux flux',
          'Filtrer uniquement les poussières de l\'air neuf',
          'Remplacer entièrement le système de chauffage du logement'
        ],
        answer: 1,
        correction: 'L\'échangeur transfère la chaleur de l\'air vicié extrait vers l\'air neuf entrant, sans jamais mélanger les deux flux d\'air.'
      },
      {
        q: 'Une VMC simple flux, comparée à une VMC double flux performante, a une efficacité de récupération $\\eta$ :',
        options: [
          'Toujours égale à $1$',
          'Égale à $0$, car elle n\'a aucune récupération de chaleur',
          'Toujours supérieure à celle d\'une VMC double flux',
          'Impossible à définir'
        ],
        answer: 1,
        correction: 'Une VMC simple flux n\'a pas d\'échangeur : l\'air neuf entre directement à la température extérieure, sans aucune récupération, soit $\\eta = 0$.'
      },
      {
        q: 'Avec une efficacité $\\eta$ donnée, les déperditions résiduelles par renouvellement d\'air $D_r$ s\'écrivent :',
        options: [
          '$D_r = 0{,}34 \\times Q_v \\times \\eta \\times (\\theta_i-\\theta_e)$',
          '$D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$',
          '$D_r = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e) / \\eta$',
          '$D_r$ ne dépend jamais de $\\eta$'
        ],
        answer: 1,
        correction: 'La récupération réduit l\'écart de température effectivement subi par l\'air neuf d\'un facteur $(1-\\eta)$ : $D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une VMC double flux d\'une maison individuelle basse consommation',
          'une centrale de traitement d\'air double flux d\'un bâtiment tertiaire',
          'un récupérateur de chaleur sur air extrait d\'un immeuble collectif',
          'une VMC double flux d\'un logement rénové en label BBC'
        ]);
        const Text = rand(-2, 8);
        const Textraction = rand(17, 21);
        const etaCible = randFloat(0.6, 0.9, 2);
        const Tsoufflage = Math.round(Text + etaCible * (Textraction - Text));
        const eta = parseFloat((((Tsoufflage - Text) / (Textraction - Text)) * 100).toFixed(1));
        return {
          statement: `Dans ${contexte}, l'air extérieur est à $T_{\\text{extérieur}} = ${Text}\\,°C$, l'air extrait du logement (avant échangeur) est à $T_{\\text{extraction}} = ${Textraction}\\,°C$, et l'air soufflé (après échangeur) est à $T_{\\text{soufflage}} = ${Tsoufflage}\\,°C$.<br/><br/>Calcule l'efficacité $\\eta$ de ce récupérateur (en %, arrondie au dixième).`,
          answer: eta,
          tolerance: 1,
          unit: '%',
          hint: 'Applique $\\eta = (T_{\\text{soufflage}} - T_{\\text{extérieur}})/(T_{\\text{extraction}} - T_{\\text{extérieur}})$.',
          solution: [
            `Échauffement de l'air neuf : $T_{\\text{soufflage}} - T_{\\text{extérieur}} = ${Tsoufflage} - (${Text}) = ${Tsoufflage - Text}\\,°C$.`,
            `Écart maximal disponible : $T_{\\text{extraction}} - T_{\\text{extérieur}} = ${Textraction} - (${Text}) = ${Textraction - Text}\\,°C$.`,
            `$\\eta = ${Tsoufflage - Text}/${Textraction - Text} \\approx ${fr(eta, 1)}\\,\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un logement a un débit de renouvellement d\'air $Q_v = 120$ m³/h, avec une température intérieure $\\theta_i = 19\\,°C$ et une température extérieure de base $\\theta_e = -3\\,°C$. On compare deux solutions de ventilation : une VMC simple flux (sans récupération), et une VMC double flux dont le récupérateur a une efficacité $\\eta = 0{,}75$.',
      tasks: [
        'Calculer les déperditions par renouvellement d\'air $D_r$ avec la VMC simple flux (formule du module A2-3, $\\eta=0$).',
        'Calculer les déperditions résiduelles par renouvellement d\'air $D_r$ avec la VMC double flux ($\\eta = 0{,}75$).',
        'Calculer l\'économie de puissance apportée par la VMC double flux, en watts puis en pourcentage.',
        'Le récupérateur a en réalité $T_{\\text{extérieur}} = -3\\,°C$, $T_{\\text{extraction}} = 19\\,°C$. Calculer la température de soufflage $T_{\\text{soufflage}}$ correspondant à $\\eta = 0{,}75$.'
      ],
      solutions: [
        '$D_{r,\\text{simple}} = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e) = 0{,}34 \\times 120 \\times (19-(-3)) = 0{,}34 \\times 120 \\times 22 = 897{,}6$ W.',
        '$D_{r,\\text{double}} = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e) = 0{,}34 \\times 120 \\times 0{,}25 \\times 22 = 224{,}4$ W.',
        'Économie : $D_{r,\\text{simple}} - D_{r,\\text{double}} = 897{,}6 - 224{,}4 = 673{,}2$ W, soit une réduction d\'environ $673{,}2/897{,}6 \\approx 75\\,\\%$ — logiquement égale à $\\eta$ lui-même, puisque $D_r$ est directement proportionnelle à $(1-\\eta)$.',
        '$\\eta = (T_{\\text{soufflage}}-T_{\\text{extérieur}})/(T_{\\text{extraction}}-T_{\\text{extérieur}}) \\Rightarrow T_{\\text{soufflage}} = T_{\\text{extérieur}} + \\eta \\times (T_{\\text{extraction}}-T_{\\text{extérieur}}) = -3 + 0{,}75 \\times 22 = -3 + 16{,}5 = 13{,}5\\,°C$.'
      ],
      finalAnswer: 'La VMC double flux ramène les déperditions par renouvellement d\'air de $897{,}6$ W à $224{,}4$ W (économie de $75\\,\\%$, exactement égale à $\\eta$), en soufflant l\'air neuf à $13{,}5\\,°C$ au lieu de $-3\\,°C$.'
    },

    evaluation: {
      title: 'Évaluation — Ventilation',
      duration: '20 min',
      questions: [
        {
          statement: 'Une VMC double flux a $T_{\\text{extérieur}} = 2\\,°C$, $T_{\\text{extraction}} = 20\\,°C$, $T_{\\text{soufflage}} = 15\\,°C$. Calculer l\'efficacité $\\eta$ (en %, arrondie à l\'unité).',
          type: 'numeric',
          answer: 72,
          tolerance: 2,
          unit: '%',
          points: 3,
          correction: '$\\eta = (15-2)/(20-2) = 13/18 \\approx 0{,}722$, soit environ $72\\,\\%$.'
        },
        {
          statement: 'Avec $Q_v = 100$ m³/h, $\\theta_i = 19\\,°C$, $\\theta_e = -1\\,°C$ et $\\eta = 0{,}8$, calculer les déperditions résiduelles $D_r$ (en W, arrondies à l\'unité).',
          type: 'numeric',
          answer: 136,
          tolerance: 10,
          unit: 'W',
          points: 3,
          correction: '$D_r = 0{,}34 \\times 100 \\times (1-0{,}8) \\times 20 = 0{,}34 \\times 100 \\times 0{,}2 \\times 20 = 136$ W.'
        },
        {
          statement: 'Une VMC simple flux, comparée à une VMC double flux, se caractérise par :',
          type: 'multiple-choice',
          options: [
            'Une efficacité de récupération $\\eta$ toujours supérieure à $0{,}9$',
            'L\'absence totale de récupération de chaleur sur l\'air extrait',
            'Un réseau de soufflage dédié identique à celui du double flux',
            'Une efficacité $\\eta$ toujours égale à celle du double flux'
          ],
          answer: 1,
          points: 2,
          correction: 'Une VMC simple flux extrait l\'air vicié sans échangeur ni réseau de soufflage dédié : il n\'y a aucune récupération de chaleur, $\\eta = 0$.'
        },
        {
          statement: 'Dans la formule de l\'efficacité $\\eta = (T_{\\text{soufflage}}-T_{\\text{extérieur}})/(T_{\\text{extraction}}-T_{\\text{extérieur}})$, la température $T_{\\text{extraction}}$ désigne :',
          type: 'multiple-choice',
          options: [
            'La température de l\'air rejeté vers l\'extérieur, après l\'échangeur',
            'La température de l\'air vicié avant son passage dans l\'échangeur, proche de l\'ambiance intérieure',
            'La température extérieure de base du site',
            'La température moyenne annuelle du logement'
          ],
          answer: 1,
          points: 3,
          correction: '$T_{\\text{extraction}}$ est la température de l\'air vicié tel qu\'il arrive à l\'échangeur, avant d\'avoir cédé sa chaleur — proche de la température ambiante du logement, à ne pas confondre avec la température de rejet après échangeur.'
        },
        {
          statement: 'Augmenter l\'efficacité $\\eta$ du récupérateur d\'une VMC double flux a pour conséquence directe :',
          type: 'multiple-choice',
          options: [
            'D\'augmenter les déperditions résiduelles par renouvellement d\'air',
            'De réduire les déperditions résiduelles par renouvellement d\'air',
            'De n\'avoir aucun effet sur les déperditions',
            'De remplacer le besoin de calculer $D_r$'
          ],
          answer: 1,
          points: 2,
          correction: 'Comme $D_r = 0{,}34 \\times Q_v \\times (1-\\eta) \\times (\\theta_i-\\theta_e)$, augmenter $\\eta$ réduit directement le facteur $(1-\\eta)$, donc les déperditions résiduelles $D_r$.'
        }
      ]
    }
  });
