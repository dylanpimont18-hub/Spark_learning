/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-13-stockage-froid.js
   BTS FED — S8-B5-13 Stockage de froid par accumulation de glace — ballon à
   glace, chaleur latente de fusion, lissage de la puissance appelée
   Source (chaleur latente de fusion de la glace Lf ≈ 334 kJ/kg) :
   https://www.lachimie.fr/thermodynamique/chaleur-latente.php (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-13-stockage-froid',
    level: 3, subject: 'fed',
    icon: '🥶',
    title: 'Stockage de froid par accumulation de glace',
    subtitle: 'Ballon à glace, chaleur latente de fusion, lissage de la puissance appelée',
    keywords: ['Stockage de froid', 'Ballon à glace', 'Ice storage', 'Chaleur latente', 'Lissage de puissance'],
    physics: 'Plutôt que de produire du froid <strong>au moment où on en a besoin</strong>, on peut le produire à l\'avance, la nuit, et le stocker sous forme de <strong>glace</strong> pour le restituer en journée. Ce principe de <strong>stockage par accumulation de glace</strong> exploite la chaleur latente de fusion de l\'eau — une quantité d\'énergie considérable, échangée sans variation de température.',

    cours: {
      intro: 'Un groupe froid dimensionné pour couvrir instantanément la <strong>pointe de puissance</strong> d\'un bâtiment (climatisation d\'un centre commercial en après-midi, process industriel, patinoire) est souvent surdimensionné pour le reste de la journée. Le <strong>stockage de froid par accumulation de glace</strong> (ou « ice storage ») permet de découpler la <strong>production</strong> de froid de sa <strong>consommation</strong>.<br/><br/>Le principe : la nuit, quand la demande de froid est faible, les tarifs électriques plus avantageux et le groupe froid moins sollicité par la chaleur ambiante, on fait fonctionner le groupe froid pour <strong>fabriquer de la glace</strong> dans un ballon dédié. En journée, cette glace fond progressivement pour couvrir les pics de demande, en complément ou à la place du groupe froid.<br/><br/>C\'est un principe de <strong>lissage de la puissance appelée</strong>, analogue à celui d\'un ballon tampon hydraulique (module B10) — mais ici, l\'énergie est stockée sous forme de <strong>chaleur latente</strong> (changement d\'état de l\'eau en glace), et non de chaleur sensible (simple variation de température de l\'eau liquide).',
      definitions: [
        { term: 'Stockage par accumulation de glace', def: 'Technique consistant à produire du froid en période creuse (la nuit) pour le stocker sous forme de glace, puis le restituer en période de forte demande (le jour) en laissant cette glace fondre.' },
        { term: 'Chaleur latente de fusion $L_f$', def: 'Quantité d\'énergie qu\'il faut fournir à $1$ kg de glace, à $0\\,°C$, pour la faire fondre en eau liquide à $0\\,°C$ — sans aucune variation de température. Pour l\'eau, $L_f \\approx 334$ kJ/kg.' },
        { term: 'Chaleur sensible (rappel, à ne pas confondre)', def: 'Énergie échangée lors d\'une variation de <strong>température</strong> d\'un corps, sans changement d\'état (par exemple refroidir de l\'eau liquide de $20\\,°C$ à $0\\,°C$). C\'est un mécanisme distinct de la chaleur latente.' },
        { term: 'Énergie frigorifique stockée $Q$', def: 'Quantité de froid disponible dans le stock de glace, liée à la masse de glace fabriquée : $Q = m \\times L_f$, avec $m$ la masse de glace (kg) et $Q$ en kJ (à convertir en kWh si besoin, avec $1$ kWh $= 3\\,600$ kJ).' },
        { term: 'Lissage de la puissance appelée', def: 'Effet recherché du stockage : la puissance électrique demandée au réseau est étalée dans le temps (production concentrée la nuit) plutôt que de suivre instantanément les pics de demande de froid en journée.' }
      ],
      method: {
        title: 'Calculer l\'énergie frigorifique stockée dans un ballon à glace',
        steps: [
          '<strong>Identifier la masse de glace</strong> $m$ produite et stockée dans le ballon (en kg), donnée par le dimensionnement de l\'installation.',
          '<strong>Retenir la chaleur latente de fusion de l\'eau</strong> $L_f \\approx 334$ kJ/kg (valeur physique, indépendante de l\'installation).',
          '<strong>Calculer l\'énergie frigorifique stockée</strong> $Q = m \\times L_f$, en kJ.',
          '<strong>Convertir en kWh si nécessaire</strong>, en divisant par $3\\,600$ (puisque $1$ kWh $= 3\\,600$ kJ), pour comparer à un besoin exprimé en énergie électrique ou en puissance frigorifique sur une durée.',
          '<strong>Comparer $Q$ au besoin de froid</strong> à couvrir pendant la période de restitution (l\'après-midi par exemple), pour vérifier que le stock de glace suffit.'
        ]
      },
      example: {
        statement: 'Un ballon à glace stocke $m = 800$ kg de glace produite pendant la nuit.<br/><br/>Calculer l\'énergie frigorifique disponible pour la journée, en kJ puis en kWh.',
        steps: [
          '$Q = m \\times L_f = 800 \\times 334 = 267\\,200$ kJ.',
          'Conversion en kWh : $Q = 267\\,200 / 3\\,600 \\approx 74{,}2$ kWh.'
        ],
        answer: 'Ce ballon met à disposition environ $74{,}2$ kWh frigorifiques pour la journée, à restituer progressivement à mesure que la glace fond, sans que sa température ne varie tant qu\'il reste de la glace solide.'
      },
      formulas: [
        '$Q = m \\times L_f$ (énergie frigorifique stockée, en kJ, avec $m$ en kg et $L_f \\approx 334$ kJ/kg)',
        '$Q_{kWh} = Q_{kJ} / 3\\,600$ (conversion en kWh)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Effet de lissage d\'un stockage de froid par glace',
        title: 'Puissance appelée avec et sans stockage, sur un cycle de 24h',
        description: 'La demande de froid d\'un bâtiment varie fortement au cours de la journée, avec un pic en milieu de journée. Un groupe froid associé à un stockage de glace peut fonctionner à puissance quasi constante : il produit un excédent la nuit (chargement du stock de glace) et couvre le déficit de l\'après-midi grâce à la fusion de cette glace.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="glace-graph-title glace-graph-desc">
            <title id="glace-graph-title">Lissage de la puissance appelee par un stockage de glace sur 24h</title>
            <desc id="glace-graph-desc">Graphique puissance frigorifique en fonction du temps sur 24 heures. Une courbe irreguliere represente la demande du batiment, avec un creux la nuit et un pic en milieu de journee. Une ligne horizontale quasi constante represente la puissance produite par le groupe froid associe au stockage de glace : superieure a la demande la nuit (charge du stock de glace), inferieure a la demande au moment du pic (le stock de glace comble l'ecart).</desc>

            <line class="frame-line" x1="50" y1="220" x2="440" y2="220"></line>
            <line class="guide-line" x1="50" y1="30" x2="50" y2="220"></line>
            <text class="tick-label" x="50" y="235" text-anchor="middle">0h</text>
            <text class="tick-label" x="245" y="235" text-anchor="middle">12h</text>
            <text class="tick-label" x="440" y="235" text-anchor="middle">24h</text>
            <text class="tick-label" x="45" y="25" text-anchor="end">Puissance</text>

            <polyline class="curve-main" points="50,190 100,195 150,140 200,80 250,60 300,90 350,150 400,190 440,195" fill="none"></polyline>
            <line class="curve-main" x1="50" y1="150" x2="440" y2="150"></line>

            <line class="guide-line" x1="120" y1="30" x2="120" y2="220"></line>
            <text class="annotation-label" x="126" y="45" text-anchor="start">Glace chargée (nuit)</text>

            <line class="guide-line" x1="260" y1="30" x2="260" y2="220"></line>
            <text class="annotation-label" x="266" y="45" text-anchor="start">Glace restituée (pointe)</text>
          </svg>
        `,
        notes: [
          'La courbe irrégulière (en haut/en bas) représente la <strong>demande de froid</strong> réelle du bâtiment, avec un pic en milieu de journée.',
          'La ligne quasi constante représente la <strong>puissance du groupe froid</strong> : la nuit, elle dépasse la demande — l\'excédent charge le stock de glace ; au moment du pic, elle reste en dessous de la demande — le déficit est comblé par la fusion de la glace.',
          'Ce lissage permet d\'installer un groupe froid de puissance <strong>plus modeste</strong> que si l\'on devait couvrir instantanément le pic de demande.'
        ],
        reading: 'Compare la position relative des deux courbes : là où la ligne constante est au-dessus de la courbe irrégulière, le stock de glace se charge ; là où elle est en dessous, il se décharge.',
        caption: 'Lissage de la puissance frigorifique appelée grâce à un stockage de froid par accumulation de glace.'
      },
      recap: [
        'Le <strong>stockage de froid par glace</strong> découple la production (nuit, tarifs avantageux) de la consommation (jour, pics de demande).',
        'Il exploite la <strong>chaleur latente de fusion</strong> de l\'eau, $L_f \\approx 334$ kJ/kg, échangée sans variation de température.',
        'Énergie frigorifique stockée : $Q = m \\times L_f$, à convertir en kWh via $1$ kWh $=3\\,600$ kJ.',
        'Ce principe assure un <strong>lissage de la puissance appelée</strong>, analogue à celui d\'un ballon tampon hydraulique (module B10) mais pour le froid.',
        'Il permet de réduire la puissance installée du groupe froid, dimensionné sur la demande moyenne plutôt que sur la pointe instantanée.'
      ],
      piege: 'Le piège classique est de confondre <strong>chaleur latente</strong> et <strong>chaleur sensible</strong> : la formule $Q = m\\times L_f$ ne s\'applique qu\'au <strong>changement d\'état</strong> de l\'eau à $0\\,°C$ (fusion de la glace). Pour refroidir de l\'eau liquide avant de la congeler, ou pour un stockage d\'<strong>eau glacée</strong> (sans changement d\'état, uniquement par variation de température), c\'est la chaleur sensible ($Q = m\\times c\\times\\Delta\\theta$, cf. module B10) qui s\'applique — et l\'énergie mise en jeu est alors bien plus faible à masse égale. Ne jamais mélanger les deux formules dans un même calcul.'
    },

    quiz: [
      {
        q: 'Le principal intérêt du stockage de froid par accumulation de glace est de :',
        options: [
          'Remplacer définitivement le groupe froid',
          'Découpler la production de froid (la nuit) de sa consommation (le jour), en lissant la puissance appelée',
          'Augmenter la température de l\'eau glacée produite',
          'Supprimer le besoin de traitement d\'eau dans l\'installation'
        ],
        answer: 1,
        correction: 'Le stockage de glace permet de produire du froid en période creuse et de le restituer au moment des pics de demande, lissant ainsi la puissance appelée au réseau.'
      },
      {
        q: 'La chaleur latente de fusion de l\'eau intervient :',
        options: [
          'Lors du refroidissement de l\'eau liquide de 20 °C à 0 °C',
          'Lors du changement d\'état de la glace en eau liquide, à température constante (0 °C)',
          'Uniquement lors de l\'ébullition de l\'eau',
          'Lors du réchauffement de la glace de -10 °C à 0 °C'
        ],
        answer: 1,
        correction: 'La chaleur latente correspond à l\'énergie échangée pendant un changement d\'état (ici la fusion de la glace) à température constante ; les variations de température avant/après ce changement d\'état relèvent, elles, de la chaleur sensible.'
      },
      {
        q: 'Un ballon stocke 500 kg de glace. L\'énergie frigorifique disponible est d\'environ ($L_f \\approx 334$ kJ/kg) :',
        options: [
          '$16\\,700$ kJ',
          '$167\\,000$ kJ',
          '$334\\,000$ kJ',
          '$500$ kJ'
        ],
        answer: 1,
        correction: '$Q = 500 \\times 334 = 167\\,000$ kJ, soit environ $46{,}4$ kWh.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chambre froide commerciale',
          'un centre commercial climatisé',
          'une patinoire',
          'un data center à climatiser en journée'
        ]);
        const calcType = pick(['masseVersQ', 'QVersMasse']);

        if (calcType === 'masseVersQ') {
          const m = rand(4, 40) * 50; // 200 à 2000 kg, pas de 50
          const Q_kJ = m * 334;
          const Q_kWh = parseFloat((Q_kJ / 3600).toFixed(2));
          return {
            statement: `Pour ${contexte}, un ballon à glace stocke $m = ${m}$ kg de glace produite pendant la nuit ($L_f \\approx 334$ kJ/kg).<br/><br/>Calcule l'énergie frigorifique disponible, en kWh (arrondie au centième).`,
            answer: Q_kWh,
            tolerance: 0.5,
            unit: 'kWh',
            hint: 'Calcule d\'abord $Q = m \\times L_f$ en kJ, puis convertis en kWh en divisant par $3\\,600$.',
            solution: [
              `$Q = m \\times L_f = ${m} \\times 334 = ${Q_kJ}$ kJ.`,
              `Conversion en kWh : $Q = ${Q_kJ}/3\\,600 \\approx ${fr(Q_kWh, 2)}$ kWh.`
            ]
          };
        }

        const Q_kWh_besoin = randFloat(10, 150, 1);
        const Q_kJ_besoin = parseFloat((Q_kWh_besoin * 3600).toFixed(0));
        const m_necessaire = Math.round(Q_kJ_besoin / 334);
        return {
          statement: `Pour ${contexte}, le besoin de froid à couvrir par le stock de glace pendant la pointe de l'après-midi est estimé à $Q = ${fr(Q_kWh_besoin, 1)}$ kWh ($L_f \\approx 334$ kJ/kg).<br/><br/>Calcule la masse de glace $m$ nécessaire (en kg, arrondie à l'entier).`,
          answer: m_necessaire,
          tolerance: 5,
          unit: 'kg',
          hint: 'Convertis d\'abord le besoin en kJ ($1$ kWh $=3\\,600$ kJ), puis utilise $m = Q/L_f$.',
          solution: [
            `Besoin en kJ : $Q = ${fr(Q_kWh_besoin, 1)} \\times 3\\,600 \\approx ${Q_kJ_besoin}$ kJ.`,
            `Masse de glace nécessaire : $m = Q/L_f = ${Q_kJ_besoin}/334 \\approx ${m_necessaire}$ kg.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un centre commercial doit couvrir un besoin de froid supplémentaire de $Q = 120$ kWh pendant le pic de climatisation de l\'après-midi (14h-18h). On souhaite dimensionner un ballon à glace pour couvrir entièrement ce besoin par la fusion de glace produite la nuit précédente ($L_f \\approx 334$ kJ/kg, $1$ kWh $=3\\,600$ kJ).',
      tasks: [
        'Convertir le besoin de froid $Q$ de kWh en kJ.',
        'Calculer la masse de glace $m$ nécessaire pour couvrir ce besoin.',
        'Le fabricant propose des ballons de $500$ kg de contenance en glace. Combien de ballons faut-il installer au minimum ?',
        'Expliquer pourquoi cette solution permet de réduire la puissance installée du groupe froid, comparée à une solution sans stockage.'
      ],
      solutions: [
        '$Q = 120 \\times 3\\,600 = 432\\,000$ kJ.',
        '$m = Q/L_f = 432\\,000/334 \\approx 1\\,293,4$ kg, soit environ $1\\,294$ kg de glace.',
        '$1\\,294/500 \\approx 2{,}6$, donc il faut au minimum <strong>$3$ ballons</strong> de $500$ kg pour couvrir ce besoin.',
        'Sans stockage, le groupe froid devrait être dimensionné pour fournir instantanément la <strong>puissance de pointe</strong> de 14h-18h. Avec le stockage, il peut fonctionner à puissance plus modeste mais quasi continue, en fabriquant la glace pendant la nuit (période creuse) ; c\'est le stock de glace, et non le groupe froid, qui absorbe l\'écart lors du pic de l\'après-midi.'
      ],
      finalAnswer: 'Il faut au moins $3$ ballons de $500$ kg (soit $1\\,500$ kg de glace, pour un besoin de $1\\,294$ kg) pour couvrir entièrement le pic de $120$ kWh, ce qui permet d\'installer un groupe froid de puissance plus modeste que si celui-ci devait couvrir la pointe instantanément.'
    },

    evaluation: {
      title: 'Évaluation — Stockage de froid par accumulation de glace',
      duration: '20 min',
      questions: [
        {
          statement: 'Un ballon à glace contient $m = 600$ kg de glace ($L_f \\approx 334$ kJ/kg). Calculer l\'énergie frigorifique stockée, en kJ.',
          type: 'numeric',
          answer: 200400,
          tolerance: 500,
          unit: 'kJ',
          points: 3,
          correction: '$Q = 600 \\times 334 = 200\\,400$ kJ.'
        },
        {
          statement: 'Convertir cette énergie de $200\\,400$ kJ en kWh (arrondie au dixième).',
          type: 'numeric',
          answer: 55.7,
          tolerance: 0.5,
          unit: 'kWh',
          points: 2,
          correction: '$200\\,400/3\\,600 \\approx 55{,}7$ kWh.'
        },
        {
          statement: 'Pour couvrir un besoin de froid de $Q = 60$ kWh, calculer la masse de glace nécessaire (en kg, arrondie à l\'entier).',
          type: 'numeric',
          answer: 647,
          tolerance: 15,
          unit: 'kg',
          points: 3,
          correction: '$Q = 60 \\times 3\\,600 = 216\\,000$ kJ. $m = 216\\,000/334 \\approx 647$ kg.'
        },
        {
          statement: 'Le stockage de froid par glace est le plus intéressant lorsque :',
          type: 'multiple-choice',
          options: [
            'La demande de froid est parfaitement constante toute la journée',
            'Il existe un écart marqué entre une demande de pointe (jour) et une période creuse (nuit) permettant de produire à l\'avance',
            'Le bâtiment ne consomme jamais de froid la nuit',
            'Le groupe froid est déjà surdimensionné pour la pointe'
          ],
          answer: 1,
          points: 2,
          correction: 'Le stockage de glace tire parti d\'un écart marqué entre la demande de pointe (le jour) et une période creuse (la nuit) où produire à l\'avance est avantageux (tarifs, sollicitation du groupe froid).'
        },
        {
          statement: 'Pourquoi ne faut-il pas utiliser $Q = m \\times L_f$ pour calculer l\'énergie nécessaire au refroidissement d\'eau liquide de 20 °C à 5 °C, sans congélation ?',
          type: 'multiple-choice',
          options: [
            'Parce que cette formule s\'applique uniquement à la vapeur d\'eau',
            'Parce qu\'il n\'y a pas de changement d\'état dans ce cas : c\'est de la chaleur sensible qu\'il faut calculer, avec une formule différente',
            'Parce que $L_f$ ne s\'applique qu\'à l\'air, pas à l\'eau',
            'Parce que la formule $Q = m \\times L_f$ n\'existe pas'
          ],
          answer: 1,
          points: 3,
          correction: 'Refroidir de l\'eau liquide sans la congeler ne provoque aucun changement d\'état : c\'est un échange de chaleur sensible ($Q=m\\times c\\times\\Delta\\theta$, module B10), pas de chaleur latente.'
        }
      ]
    }
  });
