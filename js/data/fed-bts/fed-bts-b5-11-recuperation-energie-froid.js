/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-11-recuperation-energie-froid.js
   BTS FED — S8-B5-11 Récupération d'énergie sur le froid — désurchauffeur, bilan au condenseur
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-11-recuperation-energie-froid',
    level: 3, subject: 'fed',
    icon: '♨️',
    title: 'Récupération d\'énergie sur le froid',
    subtitle: 'Désurchauffeur, bilan énergétique au condenseur, valorisation de la chaleur rejetée',
    keywords: ['Récupération d\'énergie', 'Désurchauffeur', 'Condenseur', 'Préchauffage ECS', 'Groupe froid', 'Bilan de puissance'],
    physics: 'Un groupe froid industriel rejette en permanence, au condenseur, une chaleur souvent considérée comme un simple « déchet thermique » à évacuer vers l\'extérieur. Or cette chaleur est <strong>gratuite</strong> au sens où elle est déjà payée par l\'énergie électrique du compresseur : ne pas la valoriser, c\'est laisser filer une ressource déjà produite.',

    cours: {
      intro: 'Sur un groupe froid ou une pompe à chaleur, la chaleur $Q_c$ cédée au condenseur (module A5) est habituellement rejetée dans l\'environnement — air extérieur soufflé par un aéroréfrigérant, ou eau de refroidissement perdue.<br/><br/>La <strong>récupération d\'énergie</strong> consiste à valoriser tout ou partie de cette chaleur avant (ou au lieu) de la rejeter, plutôt que de la perdre purement et simplement. Deux usages typiques en génie climatique : le préchauffage de l\'<strong>eau chaude sanitaire</strong> (ECS) et le préchauffage de l\'<strong>air neuf</strong> d\'une centrale de traitement d\'air.',
      definitions: [
        { term: 'Désurchauffeur', def: 'Échangeur thermique placé entre le <strong>compresseur</strong> et le condenseur principal, qui récupère une partie de la chaleur de la vapeur encore <strong>surchauffée</strong> avant sa condensation complète — sans perturber le fonctionnement du condenseur principal en aval.' },
        { term: 'Puissance frigorifique utile $P_0$', def: 'Puissance absorbée à l\'évaporateur pour produire l\'effet utile de froid recherché (équivalent en puissance de la chaleur $Q_f$ du module A5).' },
        { term: 'Puissance compresseur $P_{\\text{compresseur}}$', def: 'Puissance électrique absorbée par le compresseur pour comprimer le fluide frigorigène (équivalent en puissance du travail $W$ du module A5).' },
        { term: 'Puissance au condenseur $P_{\\text{condenseur}}$', def: 'Puissance totale rejetée (ou valorisable) au condenseur : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$ — reformulation en puissances de la relation $Q_c = Q_f + W$ du module A5.' },
        { term: 'Énergie récupérable', def: 'Fraction de la puissance au condenseur effectivement captée par un désurchauffeur ou un échangeur de récupération, sur une durée donnée. Cette fraction dépend entièrement de l\'installation (taille du désurchauffeur, besoin réel à valoriser) : elle n\'a rien d\'une constante universelle et doit toujours être donnée comme une donnée propre à chaque projet.' }
      ],
      method: {
        title: 'Établir le bilan de puissance au condenseur et estimer l\'énergie récupérable',
        steps: [
          '<strong>Identifier les deux puissances entrantes</strong> du cycle frigorifique : $P_0$ (puissance frigorifique utile à l\'évaporateur) et $P_{\\text{compresseur}}$ (puissance électrique absorbée au compresseur).',
          '<strong>Calculer la puissance totale au condenseur</strong> par conservation de l\'énergie : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$.',
          '<strong>Identifier le dispositif de récupération</strong> envisagé (désurchauffeur avant le condenseur principal, échangeur de récupération sur le circuit d\'eau de condensation, etc.).',
          '<strong>Relever la fraction récupérable</strong> $\\tau$ donnée pour ce projet précis (jamais une valeur à retenir par cœur, toujours une donnée d\'installation) : $P_{\\text{récup}} = \\tau \\times P_{\\text{condenseur}}$.',
          '<strong>Calculer l\'énergie récupérable</strong> sur une durée $t$ de fonctionnement : $E_{\\text{récup}} = P_{\\text{récup}} \\times t$.'
        ]
      },
      example: {
        statement: 'Un groupe froid de chambre positive a une puissance frigorifique utile $P_0 = 15$ kW, pour une puissance absorbée au compresseur $P_{\\text{compresseur}} = 5$ kW.<br/><br/>Calculer la puissance totale disponible au condenseur $P_{\\text{condenseur}}$.',
        steps: [
          'Conservation de l\'énergie au condenseur : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}} = 15 + 5 = 20$ kW.'
        ],
        answer: '$P_{\\text{condenseur}} = 20$ kW : c\'est toute cette puissance qui, aujourd\'hui, part probablement se perdre dans l\'air extérieur — et qui devient une ressource à valoriser dès qu\'un désurchauffeur ou un échangeur de récupération est installé en amont du condenseur principal.'
      },
      formulas: [
        '$P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$ (bilan de puissance au condenseur)',
        '$P_{\\text{récup}} = \\tau \\times P_{\\text{condenseur}}$ (puissance récupérée, $\\tau$ propre à chaque installation)',
        '$E_{\\text{récup}} = P_{\\text{récup}} \\times t$ (énergie récupérée sur une durée $t$ de fonctionnement)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Récupération d\'énergie au condenseur',
        title: 'Le désurchauffeur capte une partie de la chaleur avant le condenseur principal',
        description: 'Le fluide frigorigène sort du compresseur sous forme de vapeur surchauffée, traverse d\'abord un désurchauffeur qui en récupère une partie de la chaleur pour un usage valorisé (ECS, préchauffage d\'air), avant de rejoindre le condenseur principal qui rejette le reste vers l\'extérieur.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="recup-graph-title recup-graph-desc">
            <title id="recup-graph-title">Recuperation d'energie via un desurchauffeur</title>
            <desc id="recup-graph-desc">Schema lineaire : compresseur a gauche, puis desurchauffeur, puis condenseur principal a droite, relies par des fleches representant la circulation du fluide frigorigene. Une fleche P compresseur entre au compresseur. Une fleche sort du desurchauffeur vers un usage valorise tel que l'eau chaude sanitaire. Une fleche sort du condenseur principal vers l'exterieur, representant la chaleur rejetee restante.</desc>

            <!-- compresseur -->
            <rect class="frame-line" x="30" y="100" width="100" height="60" fill="none"></rect>
            <text class="label-soft" x="80" y="135" text-anchor="middle">Compresseur</text>

            <!-- desurchauffeur -->
            <rect class="frame-line" x="190" y="100" width="100" height="60" fill="none"></rect>
            <text class="label-soft" x="240" y="135" text-anchor="middle">Désurchauffeur</text>

            <!-- condenseur principal -->
            <rect class="frame-line" x="350" y="100" width="100" height="60" fill="none"></rect>
            <text class="label-soft" x="400" y="135" text-anchor="middle">Condenseur</text>

            <!-- circulation fluide -->
            <line class="curve-main" x1="130" y1="130" x2="190" y2="130" marker-end="url(#arrow-fed-recup)"></line>
            <line class="curve-main" x1="290" y1="130" x2="350" y2="130" marker-end="url(#arrow-fed-recup)"></line>

            <!-- entree P compresseur -->
            <line class="guide-line" x1="80" y1="60" x2="80" y2="100" marker-end="url(#arrow-fed-recup)"></line>
            <text class="annotation-label" x="80" y="45" text-anchor="middle">P compresseur</text>

            <!-- sortie recuperation -->
            <line class="guide-line" x1="240" y1="100" x2="240" y2="50" marker-end="url(#arrow-fed-recup)"></line>
            <text class="annotation-label" x="240" y="35" text-anchor="middle">P récup. → ECS / air neuf</text>

            <!-- sortie rejet -->
            <line class="guide-line" x1="400" y1="160" x2="400" y2="210" marker-end="url(#arrow-fed-recup)"></line>
            <text class="annotation-label" x="400" y="230" text-anchor="middle">Chaleur restante rejetée</text>

            <defs>
              <marker id="arrow-fed-recup" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="255" text-anchor="middle">P condenseur = P0 + P compresseur</text>
          </svg>
        `,
        notes: [
          'La vapeur sort du <strong>compresseur</strong> encore surchauffée, avant même d\'entrer au condenseur principal.',
          'Le <strong>désurchauffeur</strong>, placé en amont, capte une partie de cette chaleur pour un usage valorisé (préchauffage ECS, air neuf), sans empêcher le condenseur principal de fonctionner normalement en aval.',
          'Le <strong>condenseur principal</strong> rejette le reste de la puissance vers l\'extérieur — la fraction non récupérée.'
        ],
        reading: 'Suis le trajet du fluide depuis le compresseur : une partie de la puissance totale est captée au désurchauffeur (valorisée), le reste continue vers le condenseur principal (rejeté).',
        caption: 'Récupération d\'énergie sur un groupe froid : le désurchauffeur capte une partie de la puissance au condenseur avant qu\'elle ne soit rejetée à l\'extérieur.'
      },
      recap: [
        'La chaleur cédée au condenseur ($Q_c$, module A5) est habituellement rejetée dans l\'environnement — sauf si elle est <strong>récupérée</strong>.',
        'Le <strong>désurchauffeur</strong> capte une partie de la chaleur de la vapeur surchauffée, en amont du condenseur principal, pour un usage valorisé (ECS, air neuf).',
        'Bilan de puissance : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$ — reformulation en puissances de $Q_c = Q_f + W$ (module A5).',
        'La fraction effectivement récupérable $\\tau$ dépend entièrement de l\'installation et du désurchauffeur choisi : ce n\'est jamais une valeur universelle à retenir.',
        'L\'énergie récupérée sur une durée $t$ vaut $E_{\\text{récup}} = P_{\\text{récup}} \\times t = \\tau \\times P_{\\text{condenseur}} \\times t$.'
      ],
      piege: 'Le piège le plus fréquent est de croire qu\'un groupe froid récupère « toujours environ X % » de sa chaleur au condenseur — <strong>aucun pourcentage fixe n\'existe</strong> : la fraction réellement valorisable dépend de la taille du désurchauffeur installé, du besoin réel à couvrir (une PAC ne peut pas récupérer plus que ce que le besoin ECS ou air neuf demande à un instant donné) et du dimensionnement de l\'installation. Dans un exercice, cette fraction $\\tau$ doit donc <strong>toujours être une donnée de l\'énoncé</strong>, jamais une constante à appliquer de mémoire. Attention aussi à ne pas confondre $P_0$ (puissance frigorifique utile, produite à l\'évaporateur) avec $P_{\\text{condenseur}}$ (toujours supérieure, car elle inclut en plus la puissance du compresseur).'
    },

    quiz: [
      {
        q: 'Le désurchauffeur, dans une installation de récupération d\'énergie, est placé :',
        options: [
          'Entre l\'évaporateur et le détendeur',
          'Entre le compresseur et le condenseur principal',
          'À l\'intérieur du compresseur',
          'Après le condenseur principal uniquement'
        ],
        answer: 1,
        correction: 'Le désurchauffeur est un échangeur placé entre le compresseur et le condenseur principal, qui capte une partie de la chaleur de la vapeur encore surchauffée avant sa condensation complète.'
      },
      {
        q: 'Le bilan de puissance au condenseur s\'écrit :',
        options: [
          '$P_{\\text{condenseur}} = P_0 - P_{\\text{compresseur}}$',
          '$P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$',
          '$P_{\\text{condenseur}} = P_{\\text{compresseur}} / P_0$',
          '$P_{\\text{condenseur}} = P_0$'
        ],
        answer: 1,
        correction: 'C\'est la conservation de l\'énergie du cycle frigorifique reformulée en puissances : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$, exactement comme $Q_c = Q_f + W$ (module A5).'
      },
      {
        q: 'La fraction de puissance effectivement récupérable au condenseur d\'un groupe froid :',
        options: [
          'Vaut toujours 50 %, quelle que soit l\'installation',
          'Est une constante réglementaire fixe',
          'Dépend de l\'installation (dimensionnement du désurchauffeur, besoin réel à couvrir) : c\'est une donnée propre à chaque projet',
          'Ne dépend jamais du dimensionnement du désurchauffeur'
        ],
        answer: 2,
        correction: 'Il n\'existe aucune fraction universelle : la puissance réellement valorisable dépend de la taille du désurchauffeur installé et du besoin réel (ECS, air neuf) à couvrir sur le projet considéré.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un groupe froid de chambre positive de supermarché',
          'une PAC industrielle de production de froid process',
          'un groupe froid de climatisation de bureaux',
          'une centrale de production de froid d\'un site agroalimentaire'
        ]);
        const P0 = randFloat(8, 25, 1);
        const Pcomp = randFloat(3, 8, 1);
        const Pcond = parseFloat((P0 + Pcomp).toFixed(1));
        return {
          statement: `Sur ${contexte}, la puissance frigorifique utile vaut $P_0 = ${fr(P0, 1)}$ kW, pour une puissance absorbée au compresseur $P_{\\text{compresseur}} = ${fr(Pcomp, 1)}$ kW.<br/><br/>Calcule la puissance totale disponible au condenseur $P_{\\text{condenseur}}$ (en kW).`,
          answer: Pcond,
          tolerance: 0.3,
          unit: 'kW',
          hint: 'Applique la conservation de l\'énergie : $P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}}$.',
          solution: [
            `$P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}} = ${fr(P0, 1)} + ${fr(Pcomp, 1)} = ${fr(Pcond, 1)}$ kW.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un supermarché équipe son groupe froid alimentaire d\'un désurchauffeur pour préchauffer l\'eau chaude sanitaire de son personnel. La puissance frigorifique utile de l\'installation est $P_0 = 40$ kW, pour une puissance absorbée au compresseur $P_{\\text{compresseur}} = 12$ kW. Le bureau d\'études estime, pour ce désurchauffeur précis et ce besoin ECS, qu\'une fraction $\\tau = 15\\,\\%$ de la puissance totale au condenseur est effectivement valorisable. Le groupe froid fonctionne en moyenne $t = 18$ h par jour.',
      tasks: [
        'Calculer la puissance totale disponible au condenseur $P_{\\text{condenseur}}$.',
        'Calculer la puissance effectivement récupérée $P_{\\text{récup}}$ par le désurchauffeur.',
        'Calculer l\'énergie récupérée $E_{\\text{récup}}$ sur une journée de fonctionnement.',
        'Expliquer pourquoi la fraction $\\tau = 15\\,\\%$ retenue ici ne peut pas être généralisée à une autre installation.'
      ],
      solutions: [
        '$P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}} = 40 + 12 = 52$ kW.',
        '$P_{\\text{récup}} = \\tau \\times P_{\\text{condenseur}} = 0{,}15 \\times 52 = 7{,}8$ kW.',
        '$E_{\\text{récup}} = P_{\\text{récup}} \\times t = 7{,}8 \\times 18 = 140{,}4$ kWh récupérés par jour.',
        'Cette fraction de $15\\,\\%$ dépend du <strong>dimensionnement du désurchauffeur</strong> retenu par le bureau d\'études et du <strong>besoin réel</strong> en ECS de ce supermarché précis : un autre site, avec un besoin ECS plus important ou un désurchauffeur plus grand, pourrait valoriser une fraction bien supérieure — et inversement, un site sans besoin ECS ne récupérerait rien du tout, même avec un désurchauffeur installé. Ce n\'est donc jamais une constante à appliquer par défaut, mais toujours le résultat d\'une étude propre au projet.'
      ],
      finalAnswer: '$P_{\\text{condenseur}} = 52$ kW, $P_{\\text{récup}} = 7{,}8$ kW, $E_{\\text{récup}} = 140{,}4$ kWh/jour — une fraction de récupération propre à ce projet, non généralisable.'
    },

    evaluation: {
      title: 'Évaluation — Récupération d\'énergie sur le froid',
      duration: '20 min',
      questions: [
        {
          statement: 'Un groupe froid a $P_0 = 18$ kW et $P_{\\text{compresseur}} = 6$ kW. Calculer $P_{\\text{condenseur}}$ (en kW).',
          type: 'numeric',
          answer: 24,
          tolerance: 0.3,
          unit: 'kW',
          points: 2,
          correction: '$P_{\\text{condenseur}} = P_0 + P_{\\text{compresseur}} = 18 + 6 = 24$ kW.'
        },
        {
          statement: 'Un condenseur dispose de $P_{\\text{condenseur}} = 30$ kW. Un désurchauffeur récupère une fraction $\\tau = 20\\,\\%$ de cette puissance. Calculer $P_{\\text{récup}}$ (en kW).',
          type: 'numeric',
          answer: 6,
          tolerance: 0.3,
          unit: 'kW',
          points: 2,
          correction: '$P_{\\text{récup}} = \\tau \\times P_{\\text{condenseur}} = 0{,}20 \\times 30 = 6$ kW.'
        },
        {
          statement: 'Une puissance récupérée de $5$ kW fonctionne pendant $t = 10$ h. Calculer l\'énergie récupérée $E_{\\text{récup}}$ (en kWh).',
          type: 'numeric',
          answer: 50,
          tolerance: 1,
          unit: 'kWh',
          points: 2,
          correction: '$E_{\\text{récup}} = P_{\\text{récup}} \\times t = 5 \\times 10 = 50$ kWh.'
        },
        {
          statement: 'Le rôle du désurchauffeur est de :',
          type: 'multiple-choice',
          options: [
            'Remplacer complètement le condenseur principal',
            'Capter une partie de la chaleur de la vapeur surchauffée avant le condenseur principal, pour la valoriser',
            'Réguler la surchauffe à l\'évaporateur',
            'Augmenter la pression d\'évaporation'
          ],
          answer: 1,
          points: 2,
          correction: 'Le désurchauffeur, placé entre le compresseur et le condenseur principal, capte une partie de la chaleur encore disponible dans la vapeur surchauffée, sans empêcher le condenseur principal de fonctionner ensuite normalement.'
        },
        {
          statement: 'La fraction de puissance récupérable au condenseur d\'une installation :',
          type: 'multiple-choice',
          options: [
            'Est une constante universelle valable pour toute installation',
            'Dépend du dimensionnement du désurchauffeur et du besoin réel à couvrir, propre à chaque projet',
            'Ne dépend que de la puissance électrique du compresseur',
            'Est toujours nulle en génie climatique'
          ],
          answer: 1,
          points: 2,
          correction: 'Aucune fraction universelle n\'existe : la puissance réellement valorisable dépend du dimensionnement du désurchauffeur et du besoin réel (ECS, air neuf) propre à chaque installation.'
        }
      ]
    }
  });
