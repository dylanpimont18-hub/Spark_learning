/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b6-1-photovoltaique.js
   BTS FED — S8-B6-1 Photovoltaïque — puissance crête, productible annuel, performance ratio
   Source (heures équivalentes pleine puissance en France ~1000-1400 h/an, PR usuel) :
   https://media.xpair.com/auxidev/nB41a_ProdPhoto.pdf (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b6-1-photovoltaique',
    level: 3, subject: 'fed',
    icon: '☀️',
    title: 'Photovoltaïque',
    subtitle: 'Puissance crête, productible annuel, performance ratio',
    keywords: ['Photovoltaïque', 'Puissance crête', 'Productible', 'Performance ratio', 'Onduleur'],
    physics: 'Un panneau photovoltaïque annoncé « $6\\,kWc$ » ne produit <strong>jamais</strong> $6$ kW en continu toute l\'année : cette puissance crête n\'est atteinte que dans des conditions d\'essai standardisées ($1\\,000$ W/m², $25\\,°C$). Le <strong>productible annuel</strong> réel dépend de l\'ensoleillement du site et des pertes du système — deux notions indispensables pour évaluer la rentabilité d\'une installation.',

    cours: {
      intro: 'Une installation <strong>photovoltaïque</strong> convertit le rayonnement solaire en électricité grâce à des <strong>panneaux</strong> (cellules en silicium), reliés à un <strong>onduleur</strong> qui transforme le courant continu produit en courant alternatif utilisable ou injectable sur le réseau.<br/><br/>La puissance d\'un panneau est donnée en <strong>kilowatt-crête (kWc)</strong> : c\'est sa puissance maximale dans des conditions d\'essai normalisées (ensoleillement de $1\\,000$ W/m², cellule à $25\\,°C$), rarement atteintes en conditions réelles (nuages, angle d\'incidence, échauffement estival qui réduit le rendement des cellules).<br/><br/>Pour estimer la production annuelle réelle, on utilise la notion d\'<strong>heures équivalentes pleine puissance</strong> : le nombre d\'heures fictives pendant lesquelles l\'installation, fonctionnant à sa puissance crête, produirait la même énergie que sur toute l\'année réelle. En France, cette valeur varie de $1\\,000$ à $1\\,400$ h/an selon la région (plus faible au nord, plus élevée au sud). À cela s\'ajoute le <strong>performance ratio (PR)</strong>, qui regroupe l\'ensemble des pertes du système (onduleur, câblage, échauffement, salissure, ombrage partiel) : un PR usuel se situe entre $0{,}75$ et $0{,}85$.',
      definitions: [
        { term: 'Puissance crête $P_c$', def: 'Puissance maximale d\'un panneau dans les conditions d\'essai normalisées ($1\\,000$ W/m², $25\\,°C$), exprimée en kWc — une valeur de référence, pas la puissance réellement délivrée en toutes circonstances.' },
        { term: 'Heures équivalentes pleine puissance $N_{heq}$', def: 'Nombre d\'heures fictives à puissance crête qui produiraient la même énergie annuelle que l\'ensoleillement réel du site — en France, de l\'ordre de $1\\,000$ à $1\\,400$ h/an selon la région.' },
        { term: 'Performance ratio (PR)', def: 'Coefficient qui regroupe l\'ensemble des pertes du système par rapport à une production idéale (onduleur, câblage, échauffement, salissure, ombrage) — valeur usuelle $0{,}75$ à $0{,}85$, sans unité.' },
        { term: 'Productible annuel $E$', def: 'Énergie électrique réellement produite sur un an : $E = P_c \\times N_{heq} \\times PR$, en kWh/an.' },
        { term: 'Onduleur', def: 'Appareil qui convertit le courant continu produit par les panneaux en courant alternatif, compatible avec le réseau ou les usages du bâtiment.' }
      ],
      method: {
        title: 'Estimer le productible annuel d\'une installation photovoltaïque',
        steps: [
          '<strong>Relever la puissance crête totale</strong> $P_c$ de l\'installation (somme des puissances crête des panneaux, en kWc).',
          '<strong>Déterminer les heures équivalentes</strong> $N_{heq}$ du site, selon sa région (donnée de gisement solaire local).',
          '<strong>Estimer le performance ratio</strong> $PR$ de l\'installation (donnée constructeur ou valeur usuelle $0{,}75$ à $0{,}85$).',
          '<strong>Calculer le productible annuel</strong> $E = P_c \\times N_{heq} \\times PR$.',
          '<strong>Comparer au besoin</strong> (autoconsommation, revente) pour juger de la pertinence du dimensionnement retenu.'
        ]
      },
      example: {
        statement: 'Une installation résidentielle a une puissance crête $P_c=6$ kWc, implantée dans une région où $N_{heq}=1\\,200$ h/an, avec un performance ratio $PR=0{,}80$.<br/><br/>Calculer le productible annuel de cette installation.',
        steps: [
          '$E = P_c \\times N_{heq} \\times PR = 6 \\times 1\\,200 \\times 0{,}80$.',
          '$E = 7\\,200 \\times 0{,}80 = 5\\,760$ kWh/an.'
        ],
        answer: '$E = 5\\,760$ kWh/an : une installation de $6$ kWc, dans ces conditions, produit en moyenne l\'équivalent de la consommation électrique annuelle d\'un logement standard hors chauffage.'
      },
      formulas: [
        '$E = P_c \\times N_{heq} \\times PR$ (productible annuel, en kWh/an)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'De la puissance crête au productible réel',
        title: 'Trois facteurs multiplicatifs, une seule énergie annuelle',
        description: 'La puissance crête, valeur de référence en conditions d\'essai, est réduite par les heures équivalentes réelles du site puis par le performance ratio, pour donner le productible annuel effectivement récupérable.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="pv-graph-title pv-graph-desc">
            <title id="pv-graph-title">Chaine de calcul du productible photovoltaique annuel</title>
            <desc id="pv-graph-desc">Trois boites reliees par des fleches horizontales : puissance crete Pc, multipliee par les heures equivalentes Nheq, puis par le performance ratio PR, pour aboutir a l'energie annuelle E.</desc>

            <rect class="frame-line" x="20" y="90" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="70" y="120" text-anchor="middle">Pc (kWc)</text>

            <line class="curve-main" x1="120" y1="115" x2="170" y2="115" marker-end="url(#arrow-fed-pv)"></line>
            <text class="annotation-label" x="122" y="105" text-anchor="start">× Nheq</text>

            <rect class="frame-line" x="170" y="90" width="110" height="50" fill="none"></rect>
            <text class="label-soft" x="225" y="120" text-anchor="middle">Énergie idéale</text>

            <line class="curve-main" x1="280" y1="115" x2="330" y2="115" marker-end="url(#arrow-fed-pv)"></line>
            <text class="annotation-label" x="282" y="105" text-anchor="start">× PR</text>

            <rect class="frame-line" x="330" y="90" width="130" height="50" fill="none"></rect>
            <text class="label-soft" x="395" y="115" text-anchor="middle">E (productible)</text>

            <defs>
              <marker id="arrow-fed-pv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="185" text-anchor="middle">E = Pc × Nheq × PR</text>
          </svg>
        `,
        notes: [
          'La <strong>puissance crête</strong> $P_c$ est une valeur de référence en conditions d\'essai, pas une puissance continue.',
          'Les <strong>heures équivalentes</strong> $N_{heq}$ traduisent l\'ensoleillement réel du site en une durée fictive à pleine puissance.',
          'Le <strong>performance ratio</strong> $PR$ réduit encore ce résultat pour tenir compte des pertes réelles du système (onduleur, câblage, échauffement...).'
        ],
        reading: 'Suis la chaîne de gauche à droite : chaque boîte représente une multiplication supplémentaire, jusqu\'au productible annuel final.',
        caption: 'Chaîne de calcul du productible photovoltaïque annuel : puissance crête, heures équivalentes, performance ratio.'
      },
      recap: [
        'La <strong>puissance crête</strong> $P_c$ (kWc) est mesurée en conditions d\'essai normalisées, pas en fonctionnement réel.',
        'Les <strong>heures équivalentes</strong> $N_{heq}$ (France : $1\\,000$ à $1\\,400$ h/an selon la région) traduisent l\'ensoleillement réel du site.',
        'Le <strong>performance ratio (PR)</strong>, usuellement $0{,}75$ à $0{,}85$, regroupe les pertes réelles du système.',
        'Le <strong>productible annuel</strong> $E = P_c \\times N_{heq} \\times PR$ est la grandeur à comparer au besoin du bâtiment.',
        'L\'<strong>onduleur</strong> convertit le courant continu des panneaux en courant alternatif utilisable.'
      ],
      piege: 'Le piège classique est de confondre puissance crête et productible annuel : annoncer qu\'une installation « produit $6$ kW » n\'a de sens qu\'en instantané, dans des conditions d\'ensoleillement optimales — jamais en continu sur l\'année. Attention aussi à ne pas oublier le performance ratio dans le calcul : l\'oublier (ou le considérer égal à $1$) surestime systématiquement le productible réel d\'environ $15$ à $25\\,\\%$.'
    },

    quiz: [
      {
        q: 'La puissance crête d\'un panneau photovoltaïque est mesurée :',
        options: [
          'En moyenne sur une année complète de fonctionnement',
          'Dans des conditions d\'essai normalisées ($1\\,000$ W/m², $25\\,°C$)',
          'Uniquement de nuit',
          'Après application du performance ratio'
        ],
        answer: 1,
        correction: 'La puissance crête (kWc) est une valeur de référence obtenue dans des conditions d\'essai standardisées, rarement atteintes en conditions réelles d\'exploitation.'
      },
      {
        q: 'Le performance ratio (PR) d\'une installation photovoltaïque représente :',
        options: [
          'Le rendement des cellules photovoltaïques uniquement',
          'L\'ensemble des pertes réelles du système par rapport à une production idéale',
          'Le nombre d\'heures équivalentes du site',
          'La puissance crête totale de l\'installation'
        ],
        answer: 1,
        correction: 'Le PR regroupe toutes les pertes réelles (onduleur, câblage, échauffement, salissure, ombrage) par rapport à une production théorique idéale.'
      },
      {
        q: 'Pour une même puissance crête $P_c$, un site avec des heures équivalentes $N_{heq}$ plus élevées produira :',
        options: [
          'Un productible annuel plus faible',
          'Un productible annuel plus élevé',
          'Exactement le même productible',
          'Un productible qui ne dépend pas de $N_{heq}$'
        ],
        answer: 1,
        correction: 'Comme $E = P_c \\times N_{heq} \\times PR$, un $N_{heq}$ plus élevé (site mieux ensoleillé) augmente directement le productible annuel, à puissance crête et PR identiques.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une installation résidentielle en toiture',
          'une ombrière photovoltaïque de parking',
          'une installation en autoconsommation d\'un bâtiment tertiaire',
          'un projet photovoltaïque agricole'
        ]);
        const Pc = pick([3, 4.5, 6, 9, 12]);
        const Nheq = rand(1000, 1400);
        const PR = randFloat(0.75, 0.85, 2);
        const E = Math.round(Pc * Nheq * PR);
        return {
          statement: `Dans ${contexte}, la puissance crête installée est $P_c=${fr(Pc, 1)}$ kWc, sur un site où $N_{heq}=${Nheq}$ h/an, avec un performance ratio $PR=${fr(PR, 2)}$.<br/><br/>Calcule le productible annuel $E$ (en kWh/an, arrondi à l'unité).`,
          answer: E,
          tolerance: Math.max(20, Math.round(E * 0.03)),
          unit: 'kWh/an',
          hint: 'Applique $E = P_c \\times N_{heq} \\times PR$.',
          solution: [
            `$E = ${fr(Pc, 1)} \\times ${Nheq} \\times ${fr(PR, 2)} \\approx ${E}$ kWh/an.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un particulier envisage une installation photovoltaïque de $P_c=9$ kWc sur sa toiture, dans une région où $N_{heq}=1\\,150$ h/an et $PR=0{,}78$. Sa consommation électrique annuelle est de $6\\,500$ kWh/an, dont il estime pouvoir autoconsommer $40\\,\\%$ de sa production photovoltaïque directement (le reste étant injecté sur le réseau).',
      tasks: [
        'Calculer le productible annuel $E$ de cette installation.',
        'Calculer l\'énergie autoconsommée directement (en kWh/an).',
        'Calculer la part de la consommation annuelle du logement couverte par cette autoconsommation directe (en %).',
        'Expliquer en une phrase pourquoi le taux d\'autoconsommation (ici $40\\,\\%$) dépend fortement de la coïncidence entre les heures de production solaire et les heures de consommation du logement.'
      ],
      solutions: [
        '$E = 9 \\times 1\\,150 \\times 0{,}78 \\approx 8\\,073$ kWh/an.',
        'Énergie autoconsommée : $8\\,073 \\times 0{,}40 \\approx 3\\,229$ kWh/an.',
        'Part de la consommation couverte : $3\\,229/6\\,500 \\approx 49{,}7\\,\\%$.',
        'La production photovoltaïque est concentrée en journée (et davantage l\'été), alors qu\'une partie de la consommation domestique a lieu le soir ou hors saison : plus cette coïncidence est faible, plus le taux d\'autoconsommation directe reste limité, sauf à ajouter du pilotage de charges ou du stockage.'
      ],
      finalAnswer: 'Le productible annuel atteint environ $8\\,073$ kWh/an, dont $3\\,229$ kWh autoconsommés directement — soit près de $50\\,\\%$ de la consommation annuelle du logement couverte par cette seule autoconsommation directe.'
    },

    evaluation: {
      title: 'Évaluation — Photovoltaïque',
      duration: '20 min',
      questions: [
        {
          statement: 'Une installation de $P_c=5$ kWc, avec $N_{heq}=1\\,100$ h/an et $PR=0{,}80$, calculer le productible annuel $E$ (en kWh/an, arrondi à l\'unité).',
          type: 'numeric',
          answer: 4400,
          tolerance: 150,
          unit: 'kWh/an',
          points: 3,
          correction: '$E = 5\\times1\\,100\\times0{,}80 = 4\\,400$ kWh/an.'
        },
        {
          statement: 'Si le performance ratio passe de $0{,}80$ à $0{,}70$ (installation vieillissante), pour la même puissance crête et le même $N_{heq}$, le productible annuel :',
          type: 'multiple-choice',
          options: [
            'Augmente',
            'Diminue proportionnellement',
            'Reste inchangé',
            'Devient nul'
          ],
          answer: 1,
          points: 2,
          correction: 'Le productible étant proportionnel au PR, une baisse de $0{,}80$ à $0{,}70$ (soit $-12{,}5\\,\\%$ environ) réduit le productible dans les mêmes proportions.'
        },
        {
          statement: 'Le rôle de l\'onduleur dans une installation photovoltaïque est de :',
          type: 'multiple-choice',
          options: [
            'Stocker l\'électricité produite',
            'Convertir le courant continu produit par les panneaux en courant alternatif',
            'Augmenter la puissance crête des panneaux',
            'Mesurer les heures équivalentes du site'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'onduleur convertit le courant continu (DC) produit par les cellules photovoltaïques en courant alternatif (AC), compatible avec le réseau ou les usages du bâtiment.'
        },
        {
          statement: 'Deux installations ont la même puissance crête et le même PR, mais l\'une est en région PACA ($N_{heq}$ élevé) et l\'autre en Bretagne ($N_{heq}$ plus faible). Le productible annuel de l\'installation en PACA sera :',
          type: 'multiple-choice',
          options: [
            'Plus faible',
            'Plus élevé',
            'Identique',
            'Impossible à déterminer sans connaître le PR exact'
          ],
          answer: 1,
          points: 2,
          correction: 'La région PACA bénéficie d\'un ensoleillement plus important, donc d\'un nombre d\'heures équivalentes $N_{heq}$ plus élevé : à puissance crête et PR identiques, le productible annuel y sera plus élevé.'
        },
        {
          statement: 'Pourquoi ne peut-on pas simplement multiplier la puissance crête par $8\\,760$ h (nombre d\'heures dans une année) pour estimer le productible annuel ?',
          type: 'multiple-choice',
          options: [
            'Parce que les panneaux ne fonctionnent jamais',
            'Parce que la puissance crête n\'est atteinte que dans des conditions d\'ensoleillement optimales, jamais en continu sur toute l\'année (nuit, nuages, saisons)',
            'Parce que $8\\,760$ h n\'est pas le bon nombre d\'heures dans une année',
            'Parce que le PR est toujours égal à 1'
          ],
          answer: 1,
          points: 3,
          correction: 'La puissance crête suppose un ensoleillement de $1\\,000$ W/m² en continu, ce qui n\'existe jamais sur une année complète (nuit, nuages, angle d\'incidence, saisons) : c\'est précisément pour cela qu\'on utilise les heures équivalentes $N_{heq}$, très inférieures à $8\\,760$ h.'
        }
      ]
    }
  });
