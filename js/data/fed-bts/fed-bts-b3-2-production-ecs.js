/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b3-2-production-ecs.js
   BTS FED — S8-B3-2 Production et distribution ECS — besoin journalier, accumulation vs instantané
   Source (besoin journalier ECS, ordre de grandeur ~30-50 L/j/pers à 60°C, méthodologie ADEME/COSTIC) :
   https://cegibat.grdf.fr/dossier-techniques/evolution-des-besoins-d-ecs-en-residentiel (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b3-2-production-ecs',
    level: 3, subject: 'fed',
    icon: '🚿',
    title: 'Production et distribution ECS',
    subtitle: 'Besoin journalier, accumulation contre instantané, puissance de préparation',
    keywords: ['ECS', 'Ballon d\'accumulation', 'Instantané', 'Puissance de préparation', 'Besoin journalier'],
    physics: 'Chauffer de l\'eau chaude sanitaire (ECS) « à la demande » (instantané) ou « à l\'avance, en réserve » (accumulation) ne mobilise pas du tout la même <strong>puissance</strong> de générateur. Le choix entre les deux repose sur un calcul simple : combien d\'<strong>énergie</strong> faut-il chaque jour, et sur combien de temps peut-on la répartir ?',

    cours: {
      intro: 'La production d\'<strong>eau chaude sanitaire (ECS)</strong> peut prendre plusieurs formes : <strong>instantanée</strong> (l\'eau est chauffée au moment du puisage, aucun stockage), <strong>semi-instantanée</strong> (petit ballon tampon + appoint instantané), ou par <strong>accumulation</strong> (un ballon stocke un grand volume d\'eau déjà chauffée, prête à l\'emploi). Le générateur associé peut être solaire thermique, thermodynamique (PAC), électrique, ou à combustion (chaudière).<br/><br/>Le choix entre ces modes dépend directement d\'un compromis <strong>puissance / stockage</strong> : produire toute l\'eau chaude d\'une journée <strong>en instantané</strong> exige une puissance de générateur très élevée (calée sur le débit de pointe), alors que l\'<strong>accumulation</strong> permet d\'étaler cette même énergie sur une plage horaire beaucoup plus longue (souvent la nuit, en heures creuses), donc avec une puissance de générateur bien plus faible.<br/><br/>Tout dimensionnement part du même point : évaluer le <strong>besoin journalier en énergie</strong> ECS d\'un bâtiment.',
      definitions: [
        { term: 'Besoin journalier ECS $V$', def: 'Volume d\'eau chaude consommé par jour, en litres — valeur usuelle de l\'ordre de $30$ à $50$ L/j par personne à $60\\,°C$ selon le type de logement (donnée à affiner selon le profil réel du bâtiment, RE2020/COSTIC).' },
        { term: 'Énergie journalière nécessaire $E$', def: 'Énergie thermique à fournir chaque jour pour chauffer le volume $V$ de l\'eau froide (température $\\theta_f$) à la température de consigne $\\theta_c$ : $E = V \\times 1{,}163 \\times (\\theta_c-\\theta_f)$, en Wh (avec $1{,}163$ Wh/(L·K), équivalent pratique de la chaleur massique de l\'eau).' },
        { term: 'Production par accumulation', def: 'Un ballon stocke un volume d\'eau chauffée à l\'avance ; le générateur peut fonctionner à puissance modérée sur une plage étalée (souvent en heures creuses), au prix d\'un encombrement (le ballon) et de pertes de stockage.' },
        { term: 'Production instantanée', def: 'L\'eau est chauffée au fil de l\'eau, sans stockage : le générateur doit fournir toute la puissance nécessaire au moment précis du puisage, calée sur le débit de pointe — pas de perte de stockage, mais puissance installée élevée.' },
        { term: 'Puissance moyenne de préparation $P_{\\text{moy}}$', def: 'Puissance nécessaire pour reconstituer l\'énergie journalière $E$ sur une durée de charge $\\Delta t$ (accumulation) : $P_{\\text{moy}} = E/\\Delta t$.' }
      ],
      method: {
        title: 'Comparer la puissance nécessaire en accumulation et en instantané',
        steps: [
          '<strong>Évaluer le besoin journalier</strong> $V$ (L/j), à partir du nombre d\'occupants et d\'une consommation unitaire usuelle.',
          '<strong>Calculer l\'énergie journalière</strong> $E = V \\times 1{,}163 \\times (\\theta_c-\\theta_f)$ (Wh), avec $\\theta_c$ la température de consigne (souvent $60\\,°C$) et $\\theta_f$ la température d\'eau froide.',
          '<strong>En accumulation</strong>, choisir une durée de charge $\\Delta t$ (ex. $8$ h de nuit, heures creuses) et calculer $P_{\\text{moy}} = E/\\Delta t$.',
          '<strong>En instantané</strong>, estimer plutôt le débit de pointe $q_v$ (L/h) et calculer la puissance instantanée $P_{\\text{inst}} = q_v \\times 1{,}163 \\times (\\theta_c-\\theta_f)$.',
          '<strong>Comparer $P_{\\text{moy}}$ et $P_{\\text{inst}}$</strong> : la puissance instantanée est presque toujours très supérieure à la puissance moyenne d\'accumulation, ce qui explique pourquoi la production instantanée exige des générateurs puissants (souvent électriques, avec un fort appel de courant).'
        ]
      },
      example: {
        statement: 'Un petit collectif compte $12$ occupants, avec un besoin de $40$ L/j/personne à $\\theta_c=60\\,°C$ (eau froide à $\\theta_f=12\\,°C$). Comparer la puissance moyenne nécessaire en accumulation (charge sur $\\Delta t = 8$ h) à la puissance instantanée nécessaire pour un débit de pointe $q_v = 15$ L/min.',
        steps: [
          'Besoin journalier : $V = 12 \\times 40 = 480$ L/j.',
          'Énergie journalière : $E = 480 \\times 1{,}163 \\times (60-12) = 480 \\times 1{,}163 \\times 48 \\approx 26\\,796$ Wh $\\approx 26{,}8$ kWh.',
          'Puissance moyenne en accumulation : $P_{\\text{moy}} = E/\\Delta t = 26{,}8/8 \\approx 3{,}35$ kW.',
          'Débit de pointe en L/h : $q_v = 15 \\times 60 = 900$ L/h. Puissance instantanée : $P_{\\text{inst}} = 900 \\times 1{,}163 \\times 48 \\approx 50\\,240$ W $\\approx 50{,}2$ kW.'
        ],
        answer: 'La production instantanée exigerait environ $50$ kW, contre seulement $3{,}4$ kW en accumulation étalée sur $8$ h — un rapport d\'environ $15$ : voilà pourquoi la production instantanée pure reste réservée à de faibles débits (un seul point de puisage), et pourquoi les installations collectives privilégient l\'accumulation.'
      },
      formulas: [
        '$E = V \\times 1{,}163 \\times (\\theta_c-\\theta_f)$ (énergie journalière nécessaire, en Wh, avec $V$ en litres)',
        '$P_{\\text{moy}} = E/\\Delta t$ (puissance moyenne de préparation en accumulation, $\\Delta t$ en heures)',
        '$P_{\\text{inst}} = q_v \\times 1{,}163 \\times (\\theta_c-\\theta_f)$ (puissance instantanée, $q_v$ en L/h)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Accumulation contre instantané',
        title: 'Même énergie journalière, deux profils de puissance très différents',
        description: 'En accumulation, la puissance du générateur reste faible et constante sur une longue plage horaire (nuit). En instantané, la puissance grimpe en pointes brèves et très élevées, synchronisées avec les puisages.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="ecs-graph-title ecs-graph-desc">
            <title id="ecs-graph-title">Profil de puissance sur 24h, accumulation contre instantane</title>
            <desc id="ecs-graph-desc">Graphique puissance en fonction de l'heure de la journee. Un rectangle bas et large represente la puissance moyenne et constante d'une production par accumulation, pendant la nuit. Plusieurs pics etroits et tres hauts representent la puissance instantanee, synchronisee avec les puisages matin et soir.</desc>

            <line class="frame-line" x1="50" y1="230" x2="440" y2="230"></line>
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>

            <!-- bande accumulation (nuit, basse et large) -->
            <rect class="frame-line" x="60" y="205" width="110" height="25" fill="none"></rect>
            <text class="annotation-label" x="65" y="198" text-anchor="start">Accumulation (nuit)</text>

            <!-- pics instantane (matin, soir) -->
            <line class="curve-main" x1="220" y1="230" x2="220" y2="60"></line>
            <line class="curve-main" x1="230" y1="230" x2="230" y2="60"></line>
            <line class="curve-main" x1="340" y1="230" x2="340" y2="40"></line>
            <line class="curve-main" x1="350" y1="230" x2="350" y2="40"></line>
            <text class="annotation-label" x="200" y="52" text-anchor="start">Pointe matin</text>
            <text class="annotation-label" x="320" y="32" text-anchor="start">Pointe soir</text>

            <text class="label-soft" x="245" y="250" text-anchor="middle">Heure de la journée</text>
            <text class="label-soft" x="45" y="15" text-anchor="start">Puissance</text>
          </svg>
        `,
        notes: [
          'La bande <strong>basse et large</strong> représente l\'accumulation : une puissance modérée, mais mobilisée longtemps.',
          'Les <strong>pics étroits et hauts</strong> représentent l\'instantané : une puissance très élevée, mais seulement pendant quelques minutes.',
          'Les deux profils peuvent correspondre à la <strong>même énergie journalière totale</strong> $E$ — c\'est la façon de la répartir dans le temps qui change radicalement la puissance de générateur nécessaire.'
        ],
        reading: 'Compare la hauteur (puissance) et la largeur (durée) des deux profils : la bande d\'accumulation est basse et large, les pics d\'instantané sont hauts et étroits.',
        caption: 'Deux façons de fournir la même énergie journalière ECS : accumulation étalée contre pointes instantanées.'
      },
      recap: [
        'Le <strong>besoin journalier</strong> ECS se mesure en litres/jour, typiquement $30$ à $50$ L/j/personne à $60\\,°C$ selon le profil du bâtiment.',
        'L\'<strong>énergie journalière</strong> $E = V \\times 1{,}163 \\times (\\theta_c-\\theta_f)$ (Wh) est la même quel que soit le mode de production choisi.',
        'L\'<strong>accumulation</strong> étale cette énergie sur une longue durée $\\Delta t$ : $P_{\\text{moy}} = E/\\Delta t$, une puissance modérée.',
        'L\'<strong>instantané</strong> doit fournir toute la puissance au moment du puisage : $P_{\\text{inst}} = q_v \\times 1{,}163 \\times (\\theta_c-\\theta_f)$, souvent bien plus élevée.',
        'Le choix entre les deux modes est un compromis entre <strong>puissance installée</strong> et <strong>encombrement du stockage</strong> (+ pertes thermiques du ballon).'
      ],
      piege: 'Le piège classique est de confondre le <strong>débit de pointe</strong> (utile pour dimensionner une production instantanée) avec le <strong>débit moyen journalier</strong> (utile pour dimensionner une accumulation) : utiliser le débit de pointe pour calculer une puissance moyenne d\'accumulation conduirait à surdimensionner très largement le générateur. Autre confusion fréquente : $1{,}163$ Wh/(L·K) n\'est <strong>pas</strong> la chaleur massique de l\'eau exprimée en J/(kg·K) ($4\\,185$ J/(kg·K)) — c\'est simplement cette même valeur convertie en Wh ($4\\,185/3\\,600 \\approx 1{,}163$), pratique pour calculer directement une énergie en Wh sans passer par les joules.'
    },

    quiz: [
      {
        q: 'Pour une même énergie journalière ECS à fournir, la production instantanée par rapport à l\'accumulation exige :',
        options: [
          'Une puissance de générateur plus faible, car il n\'y a pas de pertes de stockage',
          'Une puissance de générateur beaucoup plus élevée, car toute l\'énergie doit être fournie au moment précis du puisage',
          'Exactement la même puissance, seul le volume de stockage change',
          'Une puissance nulle, car l\'eau est chauffée à l\'avance'
        ],
        answer: 1,
        correction: 'En instantané, il n\'y a aucun étalement dans le temps : le générateur doit fournir toute la puissance nécessaire au débit de pointe, ce qui exige une puissance bien plus élevée qu\'en accumulation.'
      },
      {
        q: 'La formule $E = V \\times 1{,}163 \\times (\\theta_c-\\theta_f)$ permet de calculer :',
        options: [
          'Le débit de pointe d\'un point de puisage',
          'L\'énergie journalière nécessaire pour chauffer le volume d\'ECS consommé, en Wh',
          'Le coefficient de simultanéité du réseau ECS',
          'La puissance instantanée uniquement'
        ],
        answer: 1,
        correction: 'Cette formule donne l\'énergie thermique journalière (en Wh) nécessaire pour élever la température du volume $V$ d\'eau froide $\\theta_f$ à la consigne $\\theta_c$.'
      },
      {
        q: 'Dans une production par accumulation, étaler la charge du ballon sur une durée $\\Delta t$ plus longue (par exemple en profitant des heures creuses) a pour effet :',
        options: [
          'D\'augmenter la puissance moyenne nécessaire',
          'De réduire la puissance moyenne nécessaire, pour une même énergie journalière',
          'De n\'avoir aucun effet sur la puissance',
          'De supprimer le besoin de calculer l\'énergie journalière'
        ],
        answer: 1,
        correction: 'Comme $P_{\\text{moy}} = E/\\Delta t$, allonger la durée de charge $\\Delta t$ réduit directement la puissance moyenne nécessaire pour fournir la même énergie journalière $E$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un immeuble collectif équipé d\'un ballon d\'accumulation',
          'une résidence étudiante avec préparation ECS centralisée',
          'un petit hôtel dont l\'ECS est produite par accumulation',
          'un EHPAD dont le ballon se charge en heures creuses'
        ]);
        const occupants = rand(15, 40);
        const consoUnitaire = pick([30, 35, 40, 45, 50]);
        const thetaC = 60;
        const thetaF = rand(10, 15);
        const deltaT = pick([6, 7, 8]);
        const V = occupants * consoUnitaire;
        const E_Wh = V * 1.163 * (thetaC - thetaF);
        const E_kWh = parseFloat((E_Wh / 1000).toFixed(1));
        const Pmoy = parseFloat((E_kWh / deltaT).toFixed(2));
        return {
          statement: `Dans ${contexte} de $${occupants}$ occupants, le besoin unitaire est de $${consoUnitaire}$ L/j/personne à $\\theta_c=${thetaC}\\,°C$ (eau froide à $\\theta_f=${thetaF}\\,°C$). Le ballon se charge sur $\\Delta t = ${deltaT}$ h.<br/><br/>Calcule la puissance moyenne de préparation $P_{\\text{moy}}$ (en kW, arrondie au centième).`,
          answer: Pmoy,
          tolerance: 0.1,
          unit: 'kW',
          hint: 'Calcule d\'abord $V$, puis $E = V\\times1{,}163\\times(\\theta_c-\\theta_f)$ en Wh, convertis en kWh, puis divise par $\\Delta t$.',
          solution: [
            `Besoin journalier : $V = ${occupants} \\times ${consoUnitaire} = ${V}$ L/j.`,
            `Énergie journalière : $E = ${V} \\times 1{,}163 \\times (${thetaC}-${thetaF}) \\approx ${fr(E_kWh, 1)}$ kWh.`,
            `$P_{\\text{moy}} = E/\\Delta t = ${fr(E_kWh, 1)}/${deltaT} \\approx ${fr(Pmoy, 2)}$ kW.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une résidence de $25$ logements (moyenne $2$ personnes/logement) a un besoin ECS de $40$ L/j/personne à $\\theta_c = 60\\,°C$, avec une eau froide à $\\theta_f = 13\\,°C$. On étudie deux solutions : un ballon d\'accumulation chargé sur $\\Delta t = 8$ h de nuit, ou une préparation semi-instantanée dimensionnée sur un débit de pointe $q_v = 40$ L/min.',
      tasks: [
        'Calculer le nombre total d\'occupants et le besoin journalier $V$ (L/j).',
        'Calculer l\'énergie journalière nécessaire $E$ (en kWh).',
        'Calculer la puissance moyenne de préparation $P_{\\text{moy}}$ pour la solution par accumulation.',
        'Calculer la puissance instantanée $P_{\\text{inst}}$ nécessaire pour la solution semi-instantanée, et comparer les deux puissances.'
      ],
      solutions: [
        'Occupants : $25 \\times 2 = 50$ personnes. Besoin journalier : $V = 50 \\times 40 = 2\\,000$ L/j.',
        '$E = 2\\,000 \\times 1{,}163 \\times (60-13) = 2\\,000\\times1{,}163\\times47 \\approx 109\\,322$ Wh $\\approx 109{,}3$ kWh.',
        '$P_{\\text{moy}} = E/\\Delta t = 109{,}3/8 \\approx 13{,}7$ kW.',
        'Débit de pointe en L/h : $q_v = 40\\times60 = 2\\,400$ L/h. $P_{\\text{inst}} = 2\\,400 \\times 1{,}163 \\times 47 \\approx 131\\,242$ W $\\approx 131{,}2$ kW. La puissance instantanée est environ <strong>$9{,}6$ fois plus élevée</strong> que la puissance moyenne d\'accumulation ($131{,}2/13{,}7$) : pour cette résidence, la production par accumulation permet d\'installer un générateur bien moins puissant, au prix d\'un ballon volumineux et de pertes de stockage à ne pas négliger.'
      ],
      finalAnswer: 'Accumulation : $P_{\\text{moy}} \\approx 13{,}7$ kW. Semi-instantané : $P_{\\text{inst}} \\approx 131{,}2$ kW — un rapport proche de $10$, qui illustre pourquoi les installations collectives privilégient l\'accumulation dès que le nombre d\'occupants devient important.'
    },

    evaluation: {
      title: 'Évaluation — Production et distribution ECS',
      duration: '20 min',
      questions: [
        {
          statement: 'Un besoin journalier $V=600$ L/j doit être chauffé de $\\theta_f=14\\,°C$ à $\\theta_c=60\\,°C$. Calculer l\'énergie journalière $E$ (en kWh, arrondie au dixième).',
          type: 'numeric',
          answer: 32.1,
          tolerance: 1,
          unit: 'kWh',
          points: 3,
          correction: '$E = 600 \\times 1{,}163 \\times (60-14) = 600\\times1{,}163\\times46 \\approx 32\\,098$ Wh $\\approx 32{,}1$ kWh.'
        },
        {
          statement: 'Pour cette énergie journalière, avec un ballon chargé sur $\\Delta t = 8$ h, calculer $P_{\\text{moy}}$ (en kW, arrondie au dixième).',
          type: 'numeric',
          answer: 4.0,
          tolerance: 0.3,
          unit: 'kW',
          points: 3,
          correction: '$P_{\\text{moy}} = 32{,}1/8 \\approx 4{,}0$ kW.'
        },
        {
          statement: 'Un ballon d\'accumulation ECS présente, par rapport à une production instantanée, l\'inconvénient principal suivant :',
          type: 'multiple-choice',
          options: [
            'Une puissance de générateur toujours plus élevée',
            'Des pertes thermiques de stockage et un encombrement lié au volume du ballon',
            'L\'impossibilité de fonctionner en heures creuses',
            'Un débit de pointe insuffisant en toutes circonstances'
          ],
          answer: 1,
          points: 2,
          correction: 'Le ballon d\'accumulation permet une puissance de générateur plus faible, mais introduit des pertes de stockage (déperditions du ballon) et nécessite de la place — un compromis à évaluer selon le projet.'
        },
        {
          statement: 'La valeur $1{,}163$ Wh/(L·K) utilisée dans le calcul de l\'énergie ECS correspond à :',
          type: 'multiple-choice',
          options: [
            'La chaleur massique de l\'eau exprimée en J/(kg·K)',
            'La chaleur massique de l\'eau (4 185 J/(kg·K)) convertie en Wh/(L·K)',
            'Un coefficient de simultanéité',
            'Le rendement d\'un ballon d\'accumulation'
          ],
          answer: 1,
          points: 2,
          correction: '$1{,}163 = 4\\,185/3\\,600$ : c\'est la même chaleur massique de l\'eau, simplement convertie en Wh pour calculer directement une énergie en Wh sans passer par les joules.'
        },
        {
          statement: 'Pourquoi une préparation ECS purement instantanée reste-t-elle réservée à de faibles débits (un seul point de puisage) plutôt qu\'à un immeuble entier ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'eau instantanée n\'atteint jamais $60\\,°C$',
            'Parce que la puissance instantanée nécessaire, calée sur le débit de pointe cumulé de tout l\'immeuble, deviendrait démesurée',
            'Parce que l\'instantané ne fonctionne qu\'à l\'électricité',
            'Parce que le débit de pointe n\'existe pas en collectif'
          ],
          answer: 1,
          points: 3,
          correction: 'Plus le nombre de points de puisage simultanés augmente, plus le débit de pointe cumulé est élevé, et donc plus la puissance instantanée nécessaire ($P_{\\text{inst}} = q_v\\times1{,}163\\times\\Delta\\theta$) devient importante — rapidement irréaliste à l\'échelle d\'un immeuble.'
        }
      ]
    }
  });
