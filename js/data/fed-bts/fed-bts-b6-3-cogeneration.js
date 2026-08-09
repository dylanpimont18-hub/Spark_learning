/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b6-3-cogeneration.js
   BTS FED — S8-B6-3 Cogénération et micro-cogénération — rendement global, valorisation double
   Source (rendements usuels : électrique ~35%, thermique ~50%, global 80-90%) :
   https://sti.eduscol.education.fr/sites/eduscol.education.fr.sti/files/ressources/techniques/768/768-gt-cogeneration.pdf (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b6-3-cogeneration',
    level: 3, subject: 'fed',
    icon: '⚡',
    title: 'Cogénération',
    subtitle: 'Production simultanée d\'électricité et de chaleur, rendement global',
    keywords: ['Cogénération', 'Micro-cogénération', 'Rendement global', 'Valorisation double'],
    physics: 'Une centrale électrique classique <strong>rejette</strong> l\'essentiel de sa chaleur de combustion dans l\'atmosphère (tours de refroidissement) : son rendement électrique seul dépasse rarement $40\\,\\%$. La <strong>cogénération</strong> récupère cette chaleur perdue pour l\'utiliser directement — un même combustible, <strong>deux</strong> énergies valorisées.',

    cours: {
      intro: 'Une installation de <strong>cogénération</strong> produit simultanément de l\'<strong>électricité</strong> et de la <strong>chaleur</strong> à partir d\'un seul combustible (gaz naturel le plus souvent, parfois biomasse ou biogaz). Le principe repose sur un moteur thermique (moteur à combustion interne, turbine à gaz) qui entraîne un alternateur pour produire de l\'électricité, tandis que la chaleur perdue par le moteur (échappement, circuit de refroidissement, huile) est récupérée par des échangeurs pour alimenter un réseau de chauffage ou un process industriel.<br/><br/>La <strong>micro-cogénération</strong> applique le même principe à l\'échelle résidentielle ou petit tertiaire (quelques kW électriques), avec des technologies comme le moteur Stirling ou les petits moteurs à combustion, couplées à la production de chauffage et d\'ECS (module B3-2) du logement.<br/><br/>L\'intérêt majeur de la cogénération, par rapport à une production séparée (électricité achetée au réseau + chaudière indépendante), est un <strong>rendement global</strong> nettement supérieur : la chaleur qui serait perdue dans une centrale électrique classique devient ici une ressource valorisée, à condition qu\'un besoin de chaleur existe réellement à proximité (réseau de chaleur, process industriel continu).',
      definitions: [
        { term: 'Rendement électrique $\\eta_{\\text{élec}}$', def: 'Part de l\'énergie du combustible convertie en électricité : $\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{\\text{combustible}}$ — valeur usuelle de l\'ordre de $30$ à $40\\,\\%$ pour un moteur gaz de cogénération.' },
        { term: 'Rendement thermique $\\eta_{\\text{th}}$', def: 'Part de l\'énergie du combustible récupérée sous forme de chaleur utile : $\\eta_{\\text{th}} = P_{\\text{th}}/P_{\\text{combustible}}$ — valeur usuelle de l\'ordre de $45$ à $55\\,\\%$.' },
        { term: 'Rendement global $\\eta_{\\text{global}}$', def: 'Somme des deux rendements précédents : $\\eta_{\\text{global}} = \\eta_{\\text{élec}} + \\eta_{\\text{th}} = (P_{\\text{élec}}+P_{\\text{th}})/P_{\\text{combustible}}$ — typiquement $80$ à $90\\,\\%$ pour une installation bien exploitée, très supérieur au rendement d\'une centrale électrique classique seule ($35$ à $40\\,\\%$).' },
        { term: 'Cogénération à haut rendement', def: 'Qualification réglementaire (arrêté du 20/07/2016) exigeant un rendement énergétique global annuel minimal, condition d\'accès à certains soutiens économiques.' }
      ],
      method: {
        title: 'Calculer le rendement global d\'une installation de cogénération',
        steps: [
          '<strong>Relever la puissance du combustible consommé</strong> $P_{\\text{combustible}}$ (en kW PCI, module A8).',
          '<strong>Relever la puissance électrique produite</strong> $P_{\\text{élec}}$ (mesurée aux bornes de l\'alternateur).',
          '<strong>Relever la puissance thermique récupérée</strong> $P_{\\text{th}}$ (mesurée aux échangeurs de récupération).',
          '<strong>Calculer le rendement global</strong> $\\eta_{\\text{global}} = (P_{\\text{élec}}+P_{\\text{th}})/P_{\\text{combustible}}$.',
          '<strong>Comparer</strong> ce rendement global à celui d\'une production séparée (électricité réseau + chaudière indépendante) pour juger de l\'intérêt énergétique réel de la cogénération sur ce site.'
        ]
      },
      example: {
        statement: 'Un moteur de cogénération gaz consomme une puissance combustible $P_{\\text{combustible}}=100$ kW (PCI), produit une puissance électrique $P_{\\text{élec}}=35$ kW et récupère une puissance thermique $P_{\\text{th}}=50$ kW.<br/><br/>Calculer le rendement électrique, le rendement thermique et le rendement global de cette installation.',
        steps: [
          '$\\eta_{\\text{élec}} = 35/100 = 0{,}35$, soit $35\\,\\%$.',
          '$\\eta_{\\text{th}} = 50/100 = 0{,}50$, soit $50\\,\\%$.',
          '$\\eta_{\\text{global}} = \\eta_{\\text{élec}} + \\eta_{\\text{th}} = 0{,}35+0{,}50 = 0{,}85$, soit $85\\,\\%$.'
        ],
        answer: '$\\eta_{\\text{global}} = 85\\,\\%$ : sur $100$ kW de combustible, seulement $15$ kW sont perdus (fumées, pertes résiduelles), contre plus de $60\\,\\%$ de pertes pour une centrale électrique classique seule.'
      },
      formulas: [
        '$\\eta_{\\text{élec}} = P_{\\text{élec}}/P_{\\text{combustible}}$ (rendement électrique)',
        '$\\eta_{\\text{th}} = P_{\\text{th}}/P_{\\text{combustible}}$ (rendement thermique)',
        '$\\eta_{\\text{global}} = \\eta_{\\text{élec}} + \\eta_{\\text{th}}$ (rendement global de la cogénération)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Cogénération contre production séparée',
        title: 'Une même chaleur perdue, valorisée ou non',
        description: 'Dans une centrale électrique classique, une grande partie de l\'énergie du combustible part en chaleur perdue. La cogénération récupère cette même chaleur pour un usage utile, augmentant fortement le rendement global sur la même quantité de combustible.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="cogen-graph-title cogen-graph-desc">
            <title id="cogen-graph-title">Comparaison centrale classique et cogeneration</title>
            <desc id="cogen-graph-desc">Deux colonnes empilees representant la repartition de l'energie du combustible. Colonne de gauche (centrale classique) : une petite part electricite, une grande part pertes. Colonne de droite (cogeneration) : la meme part electricite, plus une part chaleur utile recuperee, et une petite part de pertes residuelles.</desc>

            <!-- centrale classique -->
            <rect class="frame-line" x="70" y="150" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="120" y="180" text-anchor="middle">Électricité</text>
            <rect class="frame-line" x="70" y="40" width="100" height="110" fill="none"></rect>
            <text class="label-soft" x="120" y="95" text-anchor="middle">Chaleur perdue</text>
            <text class="label-soft" x="120" y="220" text-anchor="middle">Centrale classique</text>

            <!-- cogeneration -->
            <rect class="frame-line" x="290" y="150" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="340" y="180" text-anchor="middle">Électricité</text>
            <rect class="frame-line" x="290" y="65" width="100" height="85" fill="none"></rect>
            <text class="label-soft" x="340" y="110" text-anchor="middle">Chaleur utile</text>
            <rect class="frame-line" x="290" y="40" width="100" height="25" fill="none"></rect>
            <text class="label-soft" x="340" y="56" text-anchor="middle">Pertes</text>
            <text class="label-soft" x="340" y="220" text-anchor="middle">Cogénération</text>
          </svg>
        `,
        notes: [
          'Les deux colonnes représentent la <strong>même quantité de combustible</strong> consommée.',
          'La part <strong>électricité</strong> (bas) est identique dans les deux cas.',
          'La cogénération transforme la <strong>chaleur perdue</strong> de la centrale classique en <strong>chaleur utile</strong> récupérée, ne laissant qu\'une petite part de pertes résiduelles.'
        ],
        reading: 'Compare la hauteur totale utile (électricité + chaleur utile) des deux colonnes : la cogénération valorise une bien plus grande part du combustible consommé.',
        caption: 'Pour une même quantité de combustible, la cogénération valorise la chaleur qu\'une centrale électrique classique rejetterait.'
      },
      recap: [
        'La cogénération produit simultanément <strong>électricité</strong> (alternateur) et <strong>chaleur récupérée</strong> (échangeurs sur échappement, refroidissement).',
        'La <strong>micro-cogénération</strong> applique le même principe à l\'échelle résidentielle (chauffage + ECS du logement).',
        'Rendement global : $\\eta_{\\text{global}} = \\eta_{\\text{élec}} + \\eta_{\\text{th}}$, typiquement $80$ à $90\\,\\%$ contre $35$ à $40\\,\\%$ pour une centrale électrique classique seule.',
        'L\'intérêt réel de la cogénération dépend de l\'existence d\'un <strong>besoin de chaleur</strong> à proximité, sans quoi la chaleur récupérée ne peut pas être valorisée.',
        'La qualification « <strong>haut rendement</strong> » (réglementaire) conditionne certains soutiens économiques à un rendement global minimal.'
      ],
      piege: 'Le piège classique est de considérer que sommer $\\eta_{\\text{élec}}$ et $\\eta_{\\text{th}}$ revient à comparer deux grandeurs de même « qualité » énergétique : en réalité, l\'électricité est une énergie noble (convertible à $100\\,\\%$ en toute autre forme), alors que la chaleur récupérée n\'est utile que si elle correspond à un besoin réel et à la bonne température — un rendement global élevé ne garantit donc pas, à lui seul, la pertinence économique du projet si la chaleur produite n\'est pas valorisable localement.'
    },

    quiz: [
      {
        q: 'Le principal avantage énergétique de la cogénération, par rapport à une production séparée, est de :',
        options: [
          'Produire uniquement de l\'électricité, sans aucune perte',
          'Récupérer la chaleur qui serait perdue dans une centrale électrique classique, pour un usage utile',
          'Supprimer totalement le besoin en combustible',
          'Remplacer systématiquement les panneaux photovoltaïques'
        ],
        answer: 1,
        correction: 'La cogénération valorise la chaleur normalement rejetée par un moteur thermique (échappement, refroidissement), ce qui augmente fortement le rendement global par rapport à une centrale électrique classique.'
      },
      {
        q: 'Le rendement global d\'une cogénération se calcule comme :',
        options: [
          'Le rendement électrique seul',
          'La somme du rendement électrique et du rendement thermique',
          'Le produit du rendement électrique et du rendement thermique',
          'Le rendement thermique divisé par le rendement électrique'
        ],
        answer: 1,
        correction: '$\\eta_{\\text{global}} = \\eta_{\\text{élec}} + \\eta_{\\text{th}}$, les deux formes d\'énergie valorisées étant rapportées à la même puissance de combustible consommée.'
      },
      {
        q: 'L\'intérêt réel d\'une installation de cogénération dépend fortement de :',
        options: [
          'L\'existence d\'un besoin de chaleur utile à proximité, capable de valoriser la chaleur récupérée',
          'La couleur du bâtiment',
          'L\'absence totale de combustible',
          'La suppression de tout réseau électrique'
        ],
        answer: 0,
        correction: 'Sans besoin de chaleur réel à proximité (réseau de chaleur, process industriel), la chaleur récupérée ne peut pas être valorisée, ce qui réduit fortement l\'intérêt économique et énergétique de la cogénération.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une unité de cogénération gaz alimentant un réseau de chaleur',
          'une micro-cogénération résidentielle couplée à un ballon ECS',
          'une cogénération biogaz d\'une exploitation agricole',
          'une cogénération d\'un site industriel avec besoin continu de vapeur'
        ]);
        const Pcombustible = pick([80, 100, 120, 150, 200]);
        const etaElec = randFloat(0.30, 0.38, 2);
        const etaTh = randFloat(0.42, 0.52, 2);
        const Pelec = Math.round(Pcombustible * etaElec);
        const Pth = Math.round(Pcombustible * etaTh);
        const etaGlobal = parseFloat((((Pelec + Pth) / Pcombustible) * 100).toFixed(1));
        return {
          statement: `Dans ${contexte}, la puissance combustible consommée est $P_{\\text{combustible}}=${Pcombustible}$ kW (PCI), pour une puissance électrique produite $P_{\\text{élec}}=${Pelec}$ kW et une puissance thermique récupérée $P_{\\text{th}}=${Pth}$ kW.<br/><br/>Calcule le rendement global $\\eta_{\\text{global}}$ de cette installation (en %, arrondi au dixième).`,
          answer: etaGlobal,
          tolerance: 1,
          unit: '%',
          hint: 'Applique $\\eta_{\\text{global}} = (P_{\\text{élec}}+P_{\\text{th}})/P_{\\text{combustible}}$.',
          solution: [
            `$\\eta_{\\text{global}} = (${Pelec}+${Pth})/${Pcombustible} = ${Pelec + Pth}/${Pcombustible} \\approx ${fr(etaGlobal, 1)}\\,\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un site industriel envisage une cogénération gaz : $P_{\\text{combustible}}=250$ kW (PCI), $\\eta_{\\text{élec}}=0{,}34$, $\\eta_{\\text{th}}=0{,}48$. En solution séparée, il achèterait l\'électricité équivalente au réseau (produite par des centrales à $\\eta=0{,}40$ en moyenne) et produirait sa chaleur avec une chaudière gaz indépendante à $\\eta=0{,}90$.',
      tasks: [
        'Calculer $P_{\\text{élec}}$ et $P_{\\text{th}}$ produites par la cogénération, puis $\\eta_{\\text{global}}$.',
        'Calculer la puissance combustible qu\'il faudrait consommer en centrale électrique classique ($\\eta=0{,}40$) pour produire la même $P_{\\text{élec}}$.',
        'Calculer la puissance combustible qu\'il faudrait consommer en chaudière séparée ($\\eta=0{,}90$) pour produire la même $P_{\\text{th}}$.',
        'Comparer le combustible total consommé en solution séparée à celui de la cogénération, et conclure sur l\'intérêt énergétique de la cogénération pour ce site.'
      ],
      solutions: [
        '$P_{\\text{élec}} = 250\\times0{,}34 = 85$ kW. $P_{\\text{th}} = 250\\times0{,}48 = 120$ kW. $\\eta_{\\text{global}} = (85+120)/250 = 205/250 = 0{,}82$, soit $82\\,\\%$.',
        'Combustible nécessaire en centrale classique : $85/0{,}40 = 212{,}5$ kW.',
        'Combustible nécessaire en chaudière séparée : $120/0{,}90 \\approx 133{,}3$ kW.',
        'Combustible total en solution séparée : $212{,}5+133{,}3 \\approx 345{,}8$ kW, contre $250$ kW pour la cogénération — soit une économie d\'environ $95{,}8$ kW de combustible ($\\approx 28\\,\\%$) pour produire exactement les mêmes quantités d\'électricité et de chaleur utile. La cogénération est donc nettement plus économe en combustible sur ce site, à condition que le besoin de chaleur ($120$ kW) soit bien réel et continu.'
      ],
      finalAnswer: 'La cogénération consomme $250$ kW de combustible contre $345{,}8$ kW en solution séparée pour les mêmes productions utiles — une économie d\'environ $28\\,\\%$, qui illustre l\'intérêt énergétique de la valorisation double de la chaleur.'
    },

    evaluation: {
      title: 'Évaluation — Cogénération',
      duration: '20 min',
      questions: [
        {
          statement: 'Une cogénération a $P_{\\text{combustible}}=150$ kW, $P_{\\text{élec}}=50$ kW, $P_{\\text{th}}=75$ kW. Calculer $\\eta_{\\text{global}}$ (en %, arrondi au dixième).',
          type: 'numeric',
          answer: 83.3,
          tolerance: 1,
          unit: '%',
          points: 3,
          correction: '$\\eta_{\\text{global}} = (50+75)/150 = 125/150 \\approx 83{,}3\\,\\%$.'
        },
        {
          statement: 'Pour cette installation, calculer le rendement électrique $\\eta_{\\text{élec}}$ (en %, arrondi à l\'unité).',
          type: 'numeric',
          answer: 33,
          tolerance: 1,
          unit: '%',
          points: 2,
          correction: '$\\eta_{\\text{élec}} = 50/150 \\approx 33{,}3\\,\\%$, soit environ $33\\,\\%$.'
        },
        {
          statement: 'La micro-cogénération résidentielle applique le principe de la cogénération pour produire, à l\'échelle d\'un logement :',
          type: 'multiple-choice',
          options: [
            'Uniquement de l\'électricité',
            'De l\'électricité et de la chaleur, valorisée notamment pour le chauffage et l\'ECS',
            'Uniquement du froid',
            'De l\'eau potable'
          ],
          answer: 1,
          points: 2,
          correction: 'La micro-cogénération résidentielle couple production électrique et récupération de chaleur, cette dernière alimentant le chauffage et la production ECS (module B3-2) du logement.'
        },
        {
          statement: 'Un rendement global élevé en cogénération ne garantit pas, à lui seul, l\'intérêt économique du projet car :',
          type: 'multiple-choice',
          options: [
            'Le rendement global ne peut jamais dépasser 50 %',
            'La chaleur récupérée n\'est utile que si elle correspond à un besoin réel, existant à proximité et à la bonne température',
            'L\'électricité produite n\'est jamais utilisable',
            'Le combustible utilisé n\'a aucune influence sur le coût'
          ],
          answer: 1,
          points: 3,
          correction: 'Un rendement global élevé sur le papier ne suffit pas : encore faut-il que la chaleur récupérée trouve un usage réel (réseau de chaleur, process), faute de quoi elle est simplement perdue malgré le calcul théorique.'
        }
      ]
    }
  });
