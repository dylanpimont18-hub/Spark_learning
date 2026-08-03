/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-3-evaporateurs.js
   BTS FED — S8-B5-3 Évaporateurs — types, surchauffe, protection du compresseur
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-3-evaporateurs',
    level: 3, subject: 'fed',
    icon: '🌫️',
    title: 'Évaporateurs',
    subtitle: 'Types d\'évaporateurs, surchauffe, protection du compresseur',
    keywords: ['Évaporateur', 'Détente sèche', 'Évaporateur noyé', 'Surchauffe', 'Coup de liquide', 'Bouteille séparatrice'],
    physics: 'Vu de loin, un évaporateur n\'est « qu\'un échangeur qui absorbe de la chaleur ». Mais tous les évaporateurs ne se ressemblent pas : selon leur conception, ils laissent — ou non — un peu de liquide résiduel dans la vapeur qui repart vers le compresseur. Or un compresseur n\'est <strong>pas conçu pour comprimer du liquide</strong> : c\'est tout l\'enjeu de la <strong>surchauffe</strong>, ce petit écart de température qui garantit une vaporisation complète.',

    cours: {
      intro: 'L\'évaporateur a déjà été présenté dans le cycle frigorifique (module A5) : c\'est l\'échangeur où le fluide frigorigène, à basse pression, absorbe la chaleur $Q_f$ du milieu à refroidir en s\'évaporant.<br/><br/>Mais il existe plusieurs façons de concevoir cet échangeur, selon que l\'on cherche à maximiser l\'échange thermique ou à simplifier la conception. On distingue ainsi deux grandes familles d\'évaporateurs, et un impératif commun aux deux : ne jamais renvoyer de liquide au compresseur.',
      definitions: [
        { term: 'Évaporateur à détente sèche', def: 'Le fluide frigorigène liquide est injecté en petite quantité, juste ce qu\'il faut pour ressortir <strong>entièrement vaporisé</strong> (et même légèrement surchauffé) en sortie d\'échangeur. C\'est la technologie la plus répandue en génie climatique, car elle ne nécessite aucun organe de séparation supplémentaire.' },
        { term: 'Évaporateur noyé', def: 'Le fluide frigorigène liquide <strong>baigne</strong> en permanence l\'échangeur, ce qui offre un bien meilleur coefficient d\'échange thermique (surface toujours mouillée par du liquide). En contrepartie, la vapeur produite entraîne des gouttelettes de liquide : une <strong>bouteille séparatrice</strong> (ou bouteille anti-coup de liquide) est indispensable en sortie, pour ne laisser repartir vers le compresseur que de la vapeur sèche. Réservé aux installations de forte puissance.' },
        { term: 'Coup de liquide', def: 'Arrivée de fluide frigorigène liquide (incompressible) dans la chambre de compression : le compresseur, conçu pour comprimer un gaz, subit alors des efforts mécaniques brutaux pouvant casser les soupapes, les bielles ou le moteur. C\'est l\'avarie la plus redoutée sur un compresseur frigorifique.' },
        { term: 'Surchauffe $\\Delta T_{\\text{surch}}$', def: 'Écart entre la température réellement mesurée en sortie d\'évaporateur (ligne d\'aspiration) $T_{\\text{asp}}$ et la température de saturation correspondant à la pression d\'évaporation $T_{\\text{évap}}$ : $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$. Une surchauffe positive prouve que la vaporisation est totale.' },
        { term: 'Bouteille séparatrice (bouteille anti-coup de liquide)', def: 'Réservoir placé en sortie d\'évaporateur noyé, qui retient par gravité les gouttelettes de liquide entraînées par la vapeur, avant que celle-ci ne rejoigne la ligne d\'aspiration du compresseur.' }
      ],
      method: {
        title: 'Vérifier qu\'un évaporateur protège correctement le compresseur',
        steps: [
          '<strong>Identifier le type d\'évaporateur</strong> : détente sèche (le plus courant, autoprotégé par construction) ou noyé (meilleur échange, mais bouteille séparatrice obligatoire).',
          '<strong>Relever la température d\'évaporation</strong> $T_{\\text{évap}}$, c\'est-à-dire la température de saturation correspondant à la pression basse (souvent lue directement au manomètre basse pression grâce à une échelle en température).',
          '<strong>Relever la température d\'aspiration</strong> $T_{\\text{asp}}$, mesurée par une sonde ou un thermomètre de contact sur la ligne d\'aspiration, juste après l\'évaporateur.',
          '<strong>Calculer la surchauffe</strong> $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$.',
          '<strong>Conclure sur la protection du compresseur</strong> : une surchauffe nettement positive (typiquement quelques kelvins) garantit une vaporisation complète ; une surchauffe nulle ou négative signale un risque de coup de liquide.'
        ]
      },
      example: {
        statement: 'Sur un évaporateur à détente sèche d\'une chambre froide positive, le manomètre basse pression indique une température de saturation $T_{\\text{évap}} = 2\\,°C$. Un thermomètre de contact posé sur la ligne d\'aspiration, juste en sortie d\'évaporateur, mesure $T_{\\text{asp}} = 9\\,°C$.<br/><br/>Calculer la surchauffe $\\Delta T_{\\text{surch}}$ et conclure sur l\'état du fluide en sortie d\'évaporateur.',
        steps: [
          'Surchauffe : $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}} = 9 - 2 = 7\\,K$.',
          'Une surchauffe de $7\\,K$, nettement positive, signifie que le fluide n\'est plus à sa température de saturation : il a fini de se vaporiser <strong>avant</strong> la sortie de l\'évaporateur, et a ensuite continué à se réchauffer, sous forme de vapeur uniquement, jusqu\'au point de mesure.'
        ],
        answer: '$\\Delta T_{\\text{surch}} = 7\\,K$ : le fluide quitte l\'évaporateur entièrement à l\'état vapeur, sans trace de liquide résiduel — le compresseur est protégé du risque de coup de liquide.'
      },
      formulas: [
        '$\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$ (surchauffe à l\'aspiration, en kelvins ou en degrés Celsius d\'écart)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Surchauffe en sortie d\'évaporateur',
        title: 'Du liquide vaporisé à la vapeur surchauffée',
        description: 'Le fluide frigorigène entre liquide dans l\'évaporateur, se vaporise progressivement, termine sa vaporisation avant la sortie, puis continue à se réchauffer sous forme de vapeur uniquement jusqu\'au point de mesure sur la ligne d\'aspiration.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="evap-graph-title evap-graph-desc">
            <title id="evap-graph-title">Surchauffe en sortie d'evaporateur a detente seche</title>
            <desc id="evap-graph-desc">Schema d'un evaporateur rectangulaire traverse par le fluide de gauche a droite. A l'entree, fluide liquide. Au point marque fin de vaporisation, tout le fluide est devenu vapeur. Entre ce point et la sortie de l'evaporateur, la vapeur continue a se rechauffer : c'est la zone de surchauffe. Un thermometre sur la ligne d'aspiration, apres la sortie, mesure T aspiration, a comparer a T evaporation mesuree a l'entree.</desc>

            <!-- corps evaporateur -->
            <rect class="frame-line" x="60" y="80" width="300" height="70" fill="none"></rect>
            <text class="label-soft" x="210" y="70" text-anchor="middle">Évaporateur (détente sèche)</text>

            <!-- zone liquide -->
            <line class="guide-line" x1="180" y1="80" x2="180" y2="150"></line>
            <text class="annotation-label" x="120" y="115" text-anchor="middle">Liquide → vapeur</text>

            <!-- fin de vaporisation -->
            <line class="guide-line" x1="280" y1="80" x2="280" y2="150"></line>
            <text class="annotation-label" x="280" y="200" text-anchor="middle">Fin de vaporisation</text>
            <text class="annotation-label" x="280" y="215" text-anchor="middle">(T évap.)</text>

            <!-- zone surchauffe -->
            <text class="annotation-label" x="320" y="115" text-anchor="middle">Surchauffe</text>

            <!-- entree -->
            <line class="curve-main" x1="20" y1="115" x2="60" y2="115" marker-end="url(#arrow-fed-evap)"></line>
            <text class="tick-label" x="20" y="105" text-anchor="start">Entrée liquide</text>

            <!-- sortie vers aspiration -->
            <line class="curve-main" x1="360" y1="115" x2="440" y2="115" marker-end="url(#arrow-fed-evap)"></line>
            <text class="tick-label" x="440" y="105" text-anchor="end">Ligne d'aspiration</text>
            <text class="annotation-label" x="440" y="140" text-anchor="end">T aspiration</text>

            <defs>
              <marker id="arrow-fed-evap" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="240" y="230" text-anchor="middle">ΔT surch. = T aspiration − T évaporation</text>
          </svg>
        `,
        notes: [
          'Le fluide entre <strong>liquide</strong> dans l\'évaporateur et se vaporise progressivement en avançant.',
          'La <strong>fin de vaporisation</strong> se situe avant la sortie de l\'échangeur : à ce point, la température vaut encore $T_{\\text{évap}}$.',
          'Entre ce point et la mesure sur la ligne d\'aspiration, seule de la <strong>vapeur</strong> circule et continue à se réchauffer : c\'est la zone de surchauffe.'
        ],
        reading: 'Repère les deux points de mesure : la fin de vaporisation (température de saturation $T_{\\text{évap}}$) et la ligne d\'aspiration (température réellement mesurée $T_{\\text{asp}}$) — leur écart est la surchauffe.',
        caption: 'Surchauffe en sortie d\'évaporateur à détente sèche : la vapeur continue de se réchauffer après la fin de vaporisation, avant d\'atteindre le compresseur.'
      },
      recap: [
        'Deux familles d\'évaporateurs : <strong>détente sèche</strong> (fluide entièrement vaporisé en sortie, majoritaire en GCF) et <strong>noyé</strong> (meilleur échange, mais bouteille séparatrice obligatoire).',
        'Le compresseur ne doit <strong>jamais</strong> recevoir de fluide liquide : un <strong>coup de liquide</strong> peut le détruire mécaniquement.',
        'La <strong>surchauffe</strong> $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$ mesure l\'écart entre la température réelle en sortie d\'évaporateur et la température de saturation.',
        'Une surchauffe nettement positive garantit une vaporisation complète et protège le compresseur.',
        'La régulation fine de cette surchauffe (autour d\'une consigne) est le rôle du <strong>détendeur</strong>, approfondi au module suivant (B5-4).'
      ],
      piege: 'Ne pas confondre une surchauffe <strong>trop élevée</strong> et une surchauffe <strong>trop faible</strong> : une surchauffe excessive traduit une <strong>sous-alimentation</strong> en fluide de l\'évaporateur (la vaporisation se termine trop tôt, une grande partie de l\'échangeur ne sert qu\'à réchauffer de la vapeur au lieu d\'évaporer du liquide — mauvais échange thermique, perte de puissance frigorifique). À l\'inverse, une surchauffe insuffisante, nulle, voire négative, signale que le fluide n\'a pas fini de se vaporiser : c\'est le risque de <strong>coup de liquide</strong> au compresseur. L\'objectif n\'est donc jamais « le plus de surchauffe possible », mais une surchauffe <strong>maîtrisée</strong> — ce réglage précis est assuré par le détendeur (module B5-4).'
    },

    quiz: [
      {
        q: 'Un évaporateur noyé, comparé à un évaporateur à détente sèche :',
        options: [
          'Offre un moins bon coefficient d\'échange thermique',
          'Offre un meilleur coefficient d\'échange, mais nécessite une bouteille séparatrice en sortie',
          'Ne peut jamais fonctionner avec du fluide frigorigène liquide',
          'Supprime tout besoin de surchauffe'
        ],
        answer: 1,
        correction: 'Dans un évaporateur noyé, le liquide baigne en permanence l\'échangeur (meilleur échange), mais la vapeur produite entraîne des gouttelettes de liquide : une bouteille séparatrice est indispensable avant le retour au compresseur.'
      },
      {
        q: 'La surchauffe à l\'aspiration se définit comme :',
        options: [
          '$T_{\\text{évap}} - T_{\\text{asp}}$',
          '$T_{\\text{asp}} - T_{\\text{évap}}$',
          'La température de condensation moins la température d\'évaporation',
          'Le travail fourni au compresseur divisé par le débit'
        ],
        answer: 1,
        correction: 'La surchauffe est l\'écart entre la température réellement mesurée en sortie d\'évaporateur (aspiration) et la température de saturation correspondant à la pression d\'évaporation : $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$.'
      },
      {
        q: 'Une surchauffe nulle ou négative en sortie d\'évaporateur signale principalement un risque de :',
        options: [
          'Surconsommation électrique du ventilateur',
          'Coup de liquide au compresseur, le fluide n\'ayant pas fini de se vaporiser',
          'Excès de vapeur surchauffée',
          'Givrage du condenseur'
        ],
        answer: 1,
        correction: 'Une surchauffe nulle ou négative signifie que le fluide n\'a pas terminé sa vaporisation : du liquide résiduel risque d\'atteindre le compresseur, provoquant un coup de liquide.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chambre froide négative de surgelés',
          'une chambre froide positive de produits frais',
          'un évaporateur de climatisation tertiaire',
          'un évaporateur de PAC air/eau en mode chauffage'
        ]);
        const Tevap = pick([-18, -12, -8, -2, 0, 2, 5]);
        const surch = randFloat(4, 9, 1);
        const Tasp = parseFloat((Tevap + surch).toFixed(1));
        return {
          statement: `Sur ${contexte}, le manomètre basse pression indique une température de saturation $T_{\\text{évap}} = ${fr(Tevap, 0)}\\,°C$. Un thermomètre de contact sur la ligne d'aspiration, juste après l'évaporateur, mesure $T_{\\text{asp}} = ${fr(Tasp, 1)}\\,°C$.<br/><br/>Calcule la surchauffe $\\Delta T_{\\text{surch}}$ (en K, arrondie au dixième).`,
          answer: surch,
          tolerance: 0.3,
          unit: 'K',
          hint: 'Applique $\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}}$.',
          solution: [
            `$\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}} = ${fr(Tasp, 1)} - ${fr(Tevap, 0)} = ${fr(surch, 1)}\\,K$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un frigoriste intervient sur un évaporateur à détente sèche d\'une chambre froide positive. Le manomètre basse pression indique $T_{\\text{évap}} = 3\\,°C$. En début d\'intervention, la ligne d\'aspiration est mesurée à $T_{\\text{asp,1}} = 4\\,°C$. Après avoir légèrement resserré la vanne du détendeur (moins de fluide injecté), il remesure $T_{\\text{asp,2}} = 12\\,°C$.',
      tasks: [
        'Calculer la surchauffe $\\Delta T_{\\text{surch,1}}$ mesurée en début d\'intervention.',
        'Commenter ce premier résultat : quel risque ce réglage fait-il courir au compresseur ?',
        'Calculer la surchauffe $\\Delta T_{\\text{surch,2}}$ après resserrage de la vanne.',
        'Commenter ce second résultat, et expliquer pourquoi un frigoriste doit viser un réglage intermédiaire plutôt que l\'un ou l\'autre de ces deux extrêmes.'
      ],
      solutions: [
        '$\\Delta T_{\\text{surch,1}} = T_{\\text{asp,1}} - T_{\\text{évap}} = 4 - 3 = 1\\,K$.',
        'Une surchauffe de seulement $1\\,K$ est très faible : le fluide vient tout juste de terminer sa vaporisation, voire pas complètement. Le compresseur court un risque réel de <strong>coup de liquide</strong>, surtout en cas de variation de charge thermique.',
        '$\\Delta T_{\\text{surch,2}} = T_{\\text{asp,2}} - T_{\\text{évap}} = 12 - 3 = 9\\,K$.',
        'Une surchauffe de $9\\,K$ protège bien le compresseur du liquide, mais elle est devenue élevée : une grande partie de l\'évaporateur ne sert plus qu\'à réchauffer de la vapeur déjà formée, au lieu de vaporiser du liquide — l\'échange thermique se dégrade et la puissance frigorifique disponible diminue. Le bon réglage se situe entre ces deux extrêmes, autour d\'une consigne de quelques kelvins (typiquement $5$ à $8\\,K$), ce qui est précisément le rôle de régulation du détendeur (module B5-4).'
      ],
      finalAnswer: '$\\Delta T_{\\text{surch,1}} = 1\\,K$ (risque de coup de liquide) puis $\\Delta T_{\\text{surch,2}} = 9\\,K$ (échange dégradé) : le bon réglage est un compromis entre ces deux excès, assuré par le détendeur.'
    },

    evaluation: {
      title: 'Évaluation — Évaporateurs',
      duration: '15 min',
      questions: [
        {
          statement: 'Un évaporateur affiche $T_{\\text{évap}} = -10\\,°C$ et une température d\'aspiration mesurée $T_{\\text{asp}} = -3\\,°C$. Calculer la surchauffe (en K).',
          type: 'numeric',
          answer: 7,
          tolerance: 0.3,
          unit: 'K',
          points: 2,
          correction: '$\\Delta T_{\\text{surch}} = T_{\\text{asp}} - T_{\\text{évap}} = -3 - (-10) = 7\\,K$.'
        },
        {
          statement: 'Un évaporateur affiche $T_{\\text{évap}} = 5\\,°C$ et une surchauffe mesurée de $6\\,K$. Calculer la température d\'aspiration $T_{\\text{asp}}$ (en °C).',
          type: 'numeric',
          answer: 11,
          tolerance: 0.3,
          unit: '°C',
          points: 2,
          correction: '$T_{\\text{asp}} = T_{\\text{évap}} + \\Delta T_{\\text{surch}} = 5 + 6 = 11\\,°C$.'
        },
        {
          statement: 'Un évaporateur noyé nécessite obligatoirement, en sortie :',
          type: 'multiple-choice',
          options: [
            'Un détendeur thermostatique uniquement',
            'Une bouteille séparatrice, pour ne renvoyer que de la vapeur sèche au compresseur',
            'Un condenseur supplémentaire',
            'Aucun organe particulier'
          ],
          answer: 1,
          points: 2,
          correction: 'La vapeur produite par un évaporateur noyé entraîne des gouttelettes de liquide : une bouteille séparatrice retient ce liquide par gravité avant le retour au compresseur.'
        },
        {
          statement: 'Un coup de liquide au compresseur est dangereux car :',
          type: 'multiple-choice',
          options: [
            'Le liquide, incompressible, provoque des efforts mécaniques brutaux pouvant casser le compresseur',
            'Il augmente le COP de l\'installation',
            'Il réduit la consommation électrique',
            'Il n\'a aucun effet sur le compresseur'
          ],
          answer: 0,
          points: 2,
          correction: 'Le fluide liquide est incompressible : sa présence dans la chambre de compression génère des efforts mécaniques brutaux (soupapes, bielles, moteur), l\'avarie la plus redoutée sur un compresseur frigorifique.'
        },
        {
          statement: 'Une surchauffe excessive à l\'évaporateur traduit généralement :',
          type: 'multiple-choice',
          options: [
            'Un excès de fluide frigorigène injecté',
            'Une sous-alimentation en fluide, avec dégradation de l\'échange thermique et de la puissance frigorifique',
            'Un condenseur trop puissant',
            'Un compresseur surdimensionné'
          ],
          answer: 1,
          points: 2,
          correction: 'Une surchauffe trop élevée signifie que la vaporisation se termine trop tôt dans l\'échangeur : une grande partie de l\'évaporateur ne sert qu\'à réchauffer de la vapeur déjà formée, ce qui dégrade l\'échange thermique et la puissance frigorifique disponible.'
        }
      ]
    }
  });
