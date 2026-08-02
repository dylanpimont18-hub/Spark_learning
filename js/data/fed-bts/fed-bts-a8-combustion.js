/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a8-combustion.js
   BTS FED — S8-A8 Combustion appliquée (rendement, PCI/PCS)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a8-combustion',
    level: 3, subject: 'fed',
    icon: '🔥',
    title: 'Combustion appliquée',
    subtitle: 'Rendement de combustion, PCI et PCS d\'un générateur',
    keywords: ['Combustion', 'Rendement', 'PCI', 'PCS', 'Chaudière à condensation'],
    physics: 'Le rendement d\'une chaudière compare l\'énergie utile fournie à l\'énergie apportée par le combustible. Mais cette comparaison dépend d\'une convention : sur quelle référence calcule-t-on l\'énergie du combustible, le <strong>PCI</strong> ou le <strong>PCS</strong> ? Cette nuance explique un résultat qui surprend toujours les étudiants au premier abord : une chaudière à condensation peut afficher un rendement <strong>supérieur à 100 %</strong> sans violer aucune loi de la physique.',

    cours: {
      intro: 'Brûler un combustible libère de l\'énergie, mais la quantité mesurée dépend de ce qu\'on fait des <strong>fumées</strong> produites. Ces fumées contiennent de la vapeur d\'eau, issue de la combustion de l\'hydrogène du combustible.<br/><br/>Le <strong>PCI</strong> (pouvoir calorifique inférieur) mesure l\'énergie libérée en laissant cette vapeur d\'eau s\'échapper à l\'état gazeux dans les fumées. Le <strong>PCS</strong> (pouvoir calorifique supérieur) mesure l\'énergie libérée en récupérant en plus la chaleur latente de condensation de cette vapeur d\'eau : $\\text{PCS} > \\text{PCI}$, toujours.<br/><br/>Le <strong>rendement de combustion</strong> compare la puissance utile fournie à la puissance apportée par le combustible. Par convention historique, les chaudières standards affichent un rendement calculé sur la base du PCI — une convention qui va produire un résultat surprenant pour les chaudières à condensation.',
      definitions: [
        { term: 'PCI — Pouvoir calorifique inférieur', def: 'Énergie libérée par la combustion complète d\'une unité de combustible, sans récupérer la chaleur latente de condensation de la vapeur d\'eau produite (fumées évacuées à l\'état gazeux).' },
        { term: 'PCS — Pouvoir calorifique supérieur', def: 'Énergie libérée par la combustion complète d\'une unité de combustible, en récupérant en plus la chaleur latente de condensation de la vapeur d\'eau produite : $\\text{PCS} > \\text{PCI}$.' },
        { term: 'Puissance combustible $P_{\\text{comb}}$', def: 'Puissance véhiculée par le débit de combustible consommé, sur une référence donnée (le plus souvent le PCI) : $P_{\\text{comb}} = q_m \\times \\text{PCI}$, avec $q_m$ le débit de combustible.' },
        { term: 'Rendement de combustion $\\eta$', def: 'Rapport entre la puissance utile $P_{\\text{utile}}$ fournie au circuit de chauffage et la puissance combustible $P_{\\text{comb}}$ : $\\eta = P_{\\text{utile}} / P_{\\text{comb}}$, souvent exprimé en pourcentage.' },
        { term: 'Chaudière à condensation', def: 'Chaudière équipée d\'un échangeur supplémentaire qui refroidit les fumées jusqu\'à condenser leur vapeur d\'eau, récupérant ainsi une partie de la chaleur latente non comptabilisée dans le PCI — ce qui peut faire dépasser $100\\,\\%$ à un rendement calculé sur base PCI.' }
      ],
      method: {
        title: 'Calculer le rendement de combustion d\'un générateur',
        steps: [
          '<strong>Relever le débit de combustible</strong> $q_m$ consommé (m³/h ou kg/h) et son <strong>PCI</strong> (kWh/m³ ou kWh/kg).',
          '<strong>Calculer la puissance combustible</strong> $P_{\\text{comb}} = q_m \\times \\text{PCI}$.',
          '<strong>Relever ou mesurer la puissance utile</strong> $P_{\\text{utile}}$ effectivement transmise à l\'eau du circuit de chauffage.',
          '<strong>Calculer le rendement</strong> $\\eta = P_{\\text{utile}} / P_{\\text{comb}} \\times 100$, en pourcentage.',
          '<strong>Interpréter un rendement $> 100\\,\\%$</strong> (sur base PCI) comme la signature d\'une chaudière à condensation : elle récupère une chaleur latente que le PCI, par convention, ne comptait pas au départ — sur base PCS, ce même rendement resterait toujours $\\leq 100\\,\\%$.'
        ]
      },
      example: {
        statement: 'Une chaudière gaz standard consomme $q_m = 2$ m³/h de gaz naturel, de PCI $= 10$ kWh/m³, et fournit une puissance utile $P_{\\text{utile}} = 18$ kW au circuit de chauffage.<br/><br/>Calculer la puissance combustible $P_{\\text{comb}}$, puis le rendement de combustion $\\eta$.',
        steps: [
          'Puissance combustible : $P_{\\text{comb}} = q_m \\times \\text{PCI} = 2 \\times 10 = 20$ kW.',
          'Rendement : $\\eta = P_{\\text{utile}} / P_{\\text{comb}} = 18 / 20 = 0{,}90$, soit $90\\,\\%$.'
        ],
        answer: '$\\eta = 90\\,\\%$ : c\'est un rendement typique d\'une chaudière standard, où une partie de l\'énergie du combustible part inévitablement dans les fumées chaudes évacuées.'
      },
      formulas: [
        '$P_{\\text{comb}} = q_m \\times \\text{PCI}$ (puissance véhiculée par le combustible, référence PCI)',
        '$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{comb}}}$ (rendement de combustion)',
        '$\\text{PCS} > \\text{PCI}$ (le PCS inclut la chaleur latente de condensation de la vapeur d\'eau des fumées)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Bilan énergétique d\'une chaudière',
        title: 'Combustible (qm, PCI) → Chaudière → Putile + Pertes',
        description: 'Le combustible entre dans la chaudière avec une puissance Pcomb = qm × PCI. En sortie, une partie devient puissance utile transmise au circuit de chauffage, le reste part en pertes par les fumées.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="combu-graph-title combu-graph-desc">
            <title id="combu-graph-title">Bilan energetique d'une chaudiere</title>
            <desc id="combu-graph-desc">Une boite combustible avec debit qm et PCI envoie une fleche vers une boite chaudiere. De cette boite chaudiere partent deux fleches : l'une vers le haut-droite vers Putile transmise au circuit de chauffage, l'autre vers le bas-droite vers les pertes par les fumees.</desc>

            <defs>
              <marker id="arrow-fed-combu" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- combustible -->
            <rect class="frame-line" x="20" y="95" width="150" height="60" fill="none"></rect>
            <text class="label-soft" x="95" y="120" text-anchor="middle">Combustible</text>
            <text class="annotation-label" x="95" y="140" text-anchor="middle">qm, PCI</text>

            <!-- chaudiere -->
            <rect class="frame-line" x="210" y="85" width="140" height="80" fill="none"></rect>
            <text class="label-soft" x="280" y="130" text-anchor="middle">Chaudière</text>

            <!-- fleche combustible -> chaudiere -->
            <line class="curve-main" x1="170" y1="125" x2="210" y2="125" marker-end="url(#arrow-fed-combu)"></line>

            <!-- fleche putile -->
            <line class="curve-main" x1="350" y1="105" x2="430" y2="55" marker-end="url(#arrow-fed-combu)"></line>
            <text class="annotation-label" x="435" y="48" text-anchor="start">Putile</text>

            <!-- fleche pertes -->
            <line class="curve-main" x1="350" y1="150" x2="420" y2="200" marker-end="url(#arrow-fed-combu)"></line>
            <text class="annotation-label" x="475" y="218" text-anchor="end">Pertes (fumées)</text>

            <text class="label-soft" x="240" y="240" text-anchor="middle">η = Putile / Pcomb, avec Pcomb = qm × PCI</text>
          </svg>
        `,
        notes: [
          'La flèche d\'entrée représente la <strong>puissance combustible</strong> $P_{\\text{comb}} = q_m \\times \\text{PCI}$ apportée à la chaudière.',
          'La flèche vers le haut représente la <strong>puissance utile</strong> $P_{\\text{utile}}$ réellement transmise au circuit de chauffage.',
          'La flèche vers le bas représente les <strong>pertes</strong>, notamment par les fumées évacuées encore chaudes — c\'est cette part que la condensation permet de réduire.'
        ],
        reading: 'Suis la flèche d\'entrée (combustible) jusqu\'à la boîte chaudière, puis les deux flèches de sortie : celle vers Putile (effet utile) et celle vers les pertes par les fumées.',
        caption: 'Bilan énergétique d\'une chaudière : la puissance combustible se répartit entre puissance utile et pertes par les fumées.'
      },
      recap: [
        'Le <strong>PCI</strong> ne comptabilise pas la chaleur latente de condensation de la vapeur d\'eau des fumées ; le <strong>PCS</strong> l\'inclut, donc $\\text{PCS} > \\text{PCI}$ toujours.',
        'Le rendement de combustion $\\eta = P_{\\text{utile}}/P_{\\text{comb}}$, avec $P_{\\text{comb}} = q_m \\times \\text{PCI}$ par convention.',
        'Une chaudière standard affiche un rendement inférieur à $100\\,\\%$ sur cette base : une partie de l\'énergie part dans les fumées.',
        'Une <strong>chaudière à condensation</strong> récupère une partie de cette chaleur latente non comptée dans le PCI, ce qui peut faire dépasser $100\\,\\%$ à son rendement calculé sur base PCI — sans violer aucun principe physique.',
        'Sur base PCS (qui inclut toute l\'énergie disponible), le rendement d\'une chaudière à condensation reste toujours $\\leq 100\\,\\%$.'
      ],
      piege: 'Un rendement de combustion affiché à $105\\,\\%$ ou $108\\,\\%$ sur la plaque signalétique d\'une chaudière à condensation n\'est <strong>pas une erreur</strong> et ne viole pas le premier principe de la thermodynamique. Ce résultat provient uniquement de la convention de calcul : le PCI, utilisé comme référence, sous-estime volontairement l\'énergie totale disponible dans le combustible en ignorant la chaleur latente de condensation de la vapeur d\'eau. Une chaudière à condensation va justement récupérer cette énergie « oubliée » par le PCI — d\'où un rendement apparent supérieur à $100\\,\\%$ sur cette base, alors qu\'il resterait inférieur à $100\\,\\%$ si on le recalculait sur base PCS.'
    },

    quiz: [
      {
        q: 'La différence entre PCI et PCS d\'un combustible correspond à :',
        options: [
          'Une erreur de mesure à corriger',
          'La chaleur latente de condensation de la vapeur d\'eau produite par la combustion',
          'Le rendement du brûleur',
          'La puissance utile fournie au circuit de chauffage'
        ],
        answer: 1,
        correction: 'Le PCS inclut la chaleur latente de condensation de la vapeur d\'eau des fumées, que le PCI ignore : c\'est pourquoi $\\text{PCS} > \\text{PCI}$ toujours.'
      },
      {
        q: 'Une chaudière à condensation affiche un rendement de $106\\,\\%$ sur base PCI. Cela signifie :',
        options: [
          'Qu\'elle crée de l\'énergie, ce qui est physiquement impossible',
          'Qu\'il y a nécessairement une erreur de mesure',
          'Qu\'elle récupère une partie de la chaleur latente de condensation, non comptabilisée dans le PCI',
          'Que son rendement sur base PCS dépasse également $100\\,\\%$'
        ],
        answer: 2,
        correction: 'Le PCI ne compte pas la chaleur latente de condensation : une chaudière à condensation la récupère en partie, d\'où un rendement apparent $>100\\,\\%$ sur cette base — mais toujours $\\leq 100\\,\\%$ sur base PCS.'
      },
      {
        q: 'Le rendement de combustion $\\eta$ se calcule par :',
        options: [
          '$\\eta = P_{\\text{comb}} / P_{\\text{utile}}$',
          '$\\eta = P_{\\text{utile}} \\times P_{\\text{comb}}$',
          '$\\eta = P_{\\text{utile}} / P_{\\text{comb}}$',
          '$\\eta = P_{\\text{utile}} - P_{\\text{comb}}$'
        ],
        answer: 2,
        correction: 'Le rendement de combustion est le rapport de la puissance utile sur la puissance apportée par le combustible : $\\eta = P_{\\text{utile}} / P_{\\text{comb}}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contextesStandard = [
          'une chaudière fioul standard équipant un pavillon',
          'une chaudière gaz classique (non condensation) d\'un immeuble ancien',
          'un générateur à air chaud standard d\'un atelier'
        ];
        const contextesCondensation = [
          'une chaudière gaz à condensation équipant un immeuble collectif récent',
          'une chaudière à condensation basse température d\'un bâtiment tertiaire',
          'un générateur à condensation alimentant un réseau de chauffage collectif'
        ];
        const estCondensation = Math.random() < 0.5;
        const contexte = pick(estCondensation ? contextesCondensation : contextesStandard);
        const qm = randFloat(1.5, 4, 2);
        const PCI = randFloat(9.5, 10.5, 2);
        const Pcomb = parseFloat((qm * PCI).toFixed(2));
        const etaCible = estCondensation ? randFloat(0.98, 1.08, 3) : randFloat(0.85, 0.97, 3);
        const Putile = parseFloat((Pcomb * etaCible).toFixed(1));
        const eta = parseFloat(((Putile / Pcomb) * 100).toFixed(1));
        return {
          statement: `Dans ${contexte}, le débit de combustible consommé est $q_m = ${fr(qm, 2)}$ m³/h, pour un PCI $= ${fr(PCI, 2)}$ kWh/m³. La puissance utile transmise au circuit de chauffage est $P_{\\text{utile}} = ${fr(Putile, 1)}$ kW.<br/><br/>Calcule le rendement de combustion $\\eta$ (en %, arrondi au dixième), calculé sur base PCI.`,
          answer: eta,
          tolerance: 0.5,
          unit: '%',
          hint: 'Calcule d\'abord $P_{\\text{comb}} = q_m \\times \\text{PCI}$, puis $\\eta = P_{\\text{utile}} / P_{\\text{comb}} \\times 100$.',
          solution: [
            `Puissance combustible : $P_{\\text{comb}} = q_m \\times \\text{PCI} = ${fr(qm, 2)} \\times ${fr(PCI, 2)} \\approx ${fr(Pcomb, 2)}$ kW.`,
            `Rendement : $\\eta = P_{\\text{utile}} / P_{\\text{comb}} \\times 100 = ${fr(Putile, 1)} / ${fr(Pcomb, 2)} \\times 100 \\approx ${fr(eta, 1)}\\,\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Deux chaudières gaz consomment exactement le même débit de combustible $q_m = 3$ m³/h, de PCI $= 10$ kWh/m³. La chaudière A est une chaudière standard, qui fournit une puissance utile $P_{\\text{utile,A}} = 27$ kW. La chaudière B est une chaudière à condensation, installée sur le même réseau, qui fournit une puissance utile $P_{\\text{utile,B}} = 31{,}5$ kW.',
      tasks: [
        'Calculer la puissance combustible $P_{\\text{comb}}$, commune aux deux chaudières.',
        'Calculer le rendement $\\eta_A$ de la chaudière standard.',
        'Calculer le rendement $\\eta_B$ de la chaudière à condensation, et commenter le résultat obtenu.',
        'Expliquer pourquoi ce résultat n\'est pas physiquement aberrant, en reliant PCI et PCS.'
      ],
      solutions: [
        '$P_{\\text{comb}} = q_m \\times \\text{PCI} = 3 \\times 10 = 30$ kW.',
        '$\\eta_A = P_{\\text{utile,A}} / P_{\\text{comb}} = 27 / 30 = 0{,}90$, soit $90\\,\\%$.',
        '$\\eta_B = P_{\\text{utile,B}} / P_{\\text{comb}} = 31{,}5 / 30 = 1{,}05$, soit $105\\,\\%$. Ce résultat, supérieur à $100\\,\\%$, ne signifie pas que la chaudière B crée de l\'énergie.',
        'Le PCI ne comptabilise pas la chaleur latente de condensation de la vapeur d\'eau contenue dans les fumées. La chaudière B, à condensation, récupère une partie de cette chaleur « invisible » pour le PCI, ce qui explique le rendement apparent supérieur à $100\\,\\%$ sur cette base. Si l\'on recalculait ce même rendement sur base PCS (qui inclut cette chaleur latente dès le départ), il resterait nécessairement inférieur à $100\\,\\%$, comme pour toute machine réelle.'
      ],
      finalAnswer: '$P_{\\text{comb}} = 30$ kW pour les deux chaudières. $\\eta_A = 90\\,\\%$ (standard), $\\eta_B = 105\\,\\%$ (condensation) — un rendement $>100\\,\\%$ sur base PCI signale une récupération de chaleur latente, pas une création d\'énergie.'
    },

    evaluation: {
      title: 'Évaluation — Combustion appliquée',
      duration: '20 min',
      questions: [
        {
          statement: 'Une chaudière consomme $q_m = 2{,}5$ m³/h de gaz, PCI $= 10$ kWh/m³. Calculer la puissance combustible $P_{\\text{comb}}$ (en kW).',
          type: 'numeric',
          answer: 25,
          tolerance: 1,
          unit: 'kW',
          points: 2,
          correction: '$P_{\\text{comb}} = q_m \\times \\text{PCI} = 2{,}5 \\times 10 = 25$ kW.'
        },
        {
          statement: 'Pour cette même chaudière, la puissance utile mesurée est $P_{\\text{utile}} = 22{,}5$ kW. Calculer le rendement de combustion $\\eta$ (en %).',
          type: 'numeric',
          answer: 90,
          tolerance: 2,
          unit: '%',
          points: 3,
          correction: '$\\eta = P_{\\text{utile}}/P_{\\text{comb}} \\times 100 = 22{,}5/25 \\times 100 = 90\\,\\%$.'
        },
        {
          statement: 'Le PCS d\'un combustible, comparé à son PCI, est toujours :',
          type: 'multiple-choice',
          options: [
            'Strictement inférieur au PCI',
            'Strictement supérieur au PCI',
            'Toujours égal au PCI',
            'Sans relation définie avec le PCI'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PCS inclut la chaleur latente de condensation de la vapeur d\'eau des fumées, que le PCI ignore : $\\text{PCS} > \\text{PCI}$ toujours.'
        },
        {
          statement: 'Une chaudière à condensation affichant un rendement de $103\\,\\%$ sur base PCI :',
          type: 'multiple-choice',
          options: [
            'Viole le premier principe de la thermodynamique',
            'Récupère une partie de la chaleur latente de condensation non comptabilisée dans le PCI',
            'A forcément un capteur de mesure défectueux',
            'Ne peut pas exister en pratique'
          ],
          answer: 1,
          points: 3,
          correction: 'Le PCI sous-estime volontairement l\'énergie disponible du combustible en ignorant la chaleur latente de condensation. Une chaudière à condensation récupère une partie de cette énergie, d\'où un rendement apparent $>100\\,\\%$ sur base PCI, sans contradiction physique.'
        },
        {
          statement: 'Sur base PCS, le rendement de combustion d\'une chaudière à condensation, même performante, est :',
          type: 'multiple-choice',
          options: [
            'Toujours supérieur à $100\\,\\%$',
            'Toujours inférieur ou égal à $100\\,\\%$',
            'Toujours égal à $100\\,\\%$ exactement',
            'Indéterminé, cela dépend du combustible utilisé'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PCS comptabilise déjà toute l\'énergie disponible, chaleur latente comprise : aucune machine réelle ne peut restituer plus que cette énergie totale, donc le rendement sur base PCS reste toujours $\\leq 100\\,\\%$.'
        }
      ]
    }
  });
