/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b1-2-emission-chauffage.js
   BTS FED — S8-B1-2 Émission (chauffage) — loi de puissance d'un émetteur
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b1-2-emission-chauffage',
    level: 3, subject: 'fed',
    icon: '🌡️',
    title: 'Émission (chauffage)',
    subtitle: 'Loi de puissance d\'un émetteur, régime haute et basse température',
    keywords: ['Émetteur', 'Radiateur', 'Loi de puissance', 'Régime basse température', 'PAC'],
    physics: 'Remplacer une chaudière par une pompe à chaleur sans changer les radiateurs existants est une erreur fréquente sur le terrain : la puissance réellement délivrée par un émetteur ne dépend pas seulement de sa taille, mais aussi de l\'<strong>écart de température</strong> entre l\'eau qui le traverse et l\'air ambiant — et cette dépendance n\'est pas proportionnelle, elle suit une <strong>loi de puissance</strong>.',

    cours: {
      intro: 'Un émetteur de chauffage (radiateur, plancher chauffant, ventilo-convecteur) est caractérisé par une <strong>puissance nominale</strong> $P_n$, donnée par le fabricant pour un <strong>écart de température nominal</strong> $\\Delta T_n$ (souvent $50$ K, correspondant à un régime d\'eau chaude classique).<br/><br/>Mais si l\'émetteur fonctionne avec un écart de température différent — par exemple parce qu\'on l\'alimente en <strong>basse température</strong> avec une pompe à chaleur — sa puissance réelle change, et pas proportionnellement à l\'écart de température : elle suit une <strong>loi de puissance</strong> $P = P_n \\times (\\Delta T/\\Delta T_n)^n$, avec un exposant $n$ propre au type d\'émetteur (typiquement $n \\approx 1{,}3$ pour un radiateur).<br/><br/>Cette non-proportionnalité explique pourquoi on ne peut pas simplement « brancher une PAC basse température » sur des radiateurs dimensionnés pour une chaudière haute température, sans vérifier que la puissance restante suffit toujours à couvrir les déperditions du local.',
      definitions: [
        { term: 'Écart de température émetteur $\\Delta T$', def: 'Écart entre la température moyenne de l\'eau dans l\'émetteur et la température ambiante : $\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}}$, avec $T_{\\text{moy,eau}} = (T_{\\text{départ}}+T_{\\text{retour}})/2$.' },
        { term: 'Puissance nominale $P_n$', def: 'Puissance délivrée par l\'émetteur, donnée par le fabricant, pour un écart de température nominal $\\Delta T_n$ (souvent $50$ K, régime d\'essai normalisé).' },
        { term: 'Exposant caractéristique $n$', def: 'Exposant propre au type d\'émetteur qui traduit sa réponse à un changement d\'écart de température : $n \\approx 1{,}3$ pour un radiateur classique (la puissance chute plus vite que proportionnellement quand $\\Delta T$ diminue).' },
        { term: 'Loi de puissance d\'un émetteur', def: '$P = P_n \\times \\left(\\dfrac{\\Delta T}{\\Delta T_n}\\right)^n$ : la puissance réellement délivrée pour un écart de température $\\Delta T$ quelconque, à partir des données nominales du fabricant.' },
        { term: 'Régime basse température', def: 'Fonctionnement à faible écart de température (départ/retour d\'eau proche de l\'ambiance), typique des pompes à chaleur — nécessite souvent des émetteurs plus grands (plancher chauffant, radiateurs surdimensionnés) pour compenser la chute de puissance.' }
      ],
      method: {
        title: 'Calculer la puissance réelle d\'un émetteur dans un régime différent du nominal',
        steps: [
          '<strong>Relever la puissance nominale</strong> $P_n$ et l\'écart nominal $\\Delta T_n$ (souvent $50$ K) donnés par le fabricant.',
          '<strong>Calculer l\'écart réel</strong> $\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}}$ pour le régime de fonctionnement visé.',
          '<strong>Appliquer la loi de puissance</strong> $P = P_n \\times (\\Delta T/\\Delta T_n)^n$, avec l\'exposant $n$ propre au type d\'émetteur.',
          '<strong>Comparer</strong> la puissance obtenue au besoin réel du local (déperditions, module A2-3) pour vérifier que l\'émetteur suffit dans ce nouveau régime.',
          '<strong>Cas fréquent</strong> : en passant d\'un régime haute température (chaudière) à un régime basse température (PAC), $\\Delta T$ diminue fortement, et la puissance réelle chute bien plus vite que proportionnellement — un point de vigilance essentiel avant tout remplacement de générateur.'
        ]
      },
      example: {
        statement: 'Un radiateur a une puissance nominale $P_n = 1\\,500$ W pour un écart nominal $\\Delta T_n = 50$ K (régime haute température avec chaudière). On le réutilise tel quel sur une pompe à chaleur en régime basse température, avec une température moyenne d\'eau $T_{\\text{moy,eau}} = 40\\,°C$ et une ambiance $T_{\\text{ambiance}} = 20\\,°C$. L\'exposant caractéristique de ce radiateur est $n = 1{,}3$.<br/><br/>Calculer la puissance réellement délivrée par ce radiateur dans ce nouveau régime.',
        steps: [
          'Écart de température réel : $\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}} = 40 - 20 = 20$ K.',
          'Rapport des écarts : $\\Delta T/\\Delta T_n = 20/50 = 0{,}4$.',
          '$P = P_n \\times (\\Delta T/\\Delta T_n)^n = 1\\,500 \\times 0{,}4^{1{,}3} \\approx 1\\,500 \\times 0{,}304 \\approx 456$ W.'
        ],
        answer: '$P \\approx 456$ W : le radiateur ne délivre plus que <strong>moins d\'un tiers</strong> de sa puissance nominale une fois passé en régime basse température, alors que l\'écart de température, lui, n\'a été divisé « que » par $2{,}5$ — la non-linéarité de la loi de puissance amplifie fortement la baisse.'
      },
      formulas: [
        '$\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}}$, avec $T_{\\text{moy,eau}} = (T_{\\text{départ}}+T_{\\text{retour}})/2$',
        '$P = P_n \\times \\left(\\dfrac{\\Delta T}{\\Delta T_n}\\right)^n$ (loi de puissance d\'un émetteur)',
        '$n \\approx 1{,}3$ pour un radiateur classique ; $\\Delta T_n = 50$ K (régime nominal usuel)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Loi de puissance d\'un émetteur',
        title: 'P = Pn × (ΔT/ΔTn)^n : une courbe non linéaire',
        description: 'La puissance délivrée par l\'émetteur croît avec l\'écart de température ΔT, mais pas proportionnellement : la courbe P(ΔT) est convexe (exposant n>1). En régime basse température (ΔT réduit), la puissance chute bien plus vite que le simple rapport des écarts.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="emis-graph-title emis-graph-desc">
            <title id="emis-graph-title">Courbe de puissance d'un emetteur en fonction de l'ecart de temperature</title>
            <desc id="emis-graph-desc">Graphique puissance en fonction de l'ecart de temperature delta T. La courbe est convexe, croissante, partant de zero et atteignant la puissance nominale Pn pour l'ecart nominal delta Tn = 50 K. Un point intermediaire a delta T = 20 K montre une puissance bien inferieure au prorata lineaire de l'ecart de temperature.</desc>

            <line class="frame-line" x1="60" y1="230" x2="430" y2="230"></line>
            <line class="guide-line" x1="60" y1="20" x2="60" y2="230"></line>

            <!-- courbe P(deltaT) -->
            <polyline class="curve-main" points="60,230 121.7,205.7 183.3,170.1 245,128.7 306.7,82.7 368.3,33.1" fill="none"></polyline>

            <!-- point regime basse temperature -->
            <circle class="plot-point" cx="183.3" cy="170.1" r="5"></circle>
            <line class="guide-line" x1="183.3" y1="170.1" x2="183.3" y2="230"></line>
            <line class="guide-line" x1="60" y1="170.1" x2="183.3" y2="170.1"></line>
            <text class="annotation-label" x="188" y="163" text-anchor="start">P réduit (ΔT = 20 K)</text>

            <!-- point nominal -->
            <circle class="plot-point" cx="368.3" cy="33.1" r="5"></circle>
            <line class="guide-line" x1="368.3" y1="33.1" x2="368.3" y2="230"></line>
            <line class="guide-line" x1="60" y1="33.1" x2="368.3" y2="33.1"></line>
            <text class="annotation-label" x="373" y="26" text-anchor="start">Pn (ΔTn = 50 K)</text>

            <text class="tick-label" x="183.3" y="245" text-anchor="middle">20 K</text>
            <text class="tick-label" x="368.3" y="245" text-anchor="middle">50 K</text>
            <text class="label-soft" x="430" y="250" text-anchor="end">Écart de température ΔT</text>
            <text class="label-soft" x="55" y="15" text-anchor="start">Puissance P</text>
          </svg>
        `,
        notes: [
          'La courbe part de $0$ et croît de façon <strong>convexe</strong> : elle monte de plus en plus vite à mesure que $\\Delta T$ augmente (exposant $n > 1$).',
          'Diviser $\\Delta T$ par $2{,}5$ (de $50$ à $20$ K) ne divise pas la puissance par $2{,}5$, mais par un facteur bien plus important — ici environ $3{,}3$.',
          'C\'est cette non-linéarité qu\'il faut anticiper avant de basculer un émetteur d\'un régime haute température vers un régime basse température.'
        ],
        reading: 'Suis la courbe depuis l\'origine : repère le point nominal (ΔTn=50K, Pn) puis le point à ΔT=20K, nettement plus bas que ce que suggérerait une simple règle de trois.',
        caption: 'Loi de puissance d\'un émetteur : la puissance délivrée décroît plus vite que l\'écart de température lorsqu\'on réduit le régime.'
      },
      recap: [
        'La puissance d\'un émetteur dépend de l\'écart de température $\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}}$, pas seulement de sa taille.',
        'La loi de puissance $P = P_n \\times (\\Delta T/\\Delta T_n)^n$ n\'est <strong>pas linéaire</strong> : avec $n \\approx 1{,}3$ pour un radiateur, réduire $\\Delta T$ fait chuter $P$ plus vite que proportionnellement.',
        'Un émetteur dimensionné pour une chaudière haute température ($\\Delta T_n = 50$ K) perd une part importante de sa puissance s\'il est réalimenté en régime basse température (PAC).',
        'Avant tout remplacement de générateur par une PAC, il faut vérifier que la puissance réduite des émetteurs existants couvre toujours les déperditions du local (bilan thermique, module A2-3).',
        'Le plancher chauffant et le ventilo-convecteur ont des exposants $n$ différents du radiateur classique : chaque type d\'émetteur répond différemment à un changement de régime.'
      ],
      piege: 'Le piège le plus fréquent est de raisonner en <strong>proportionnalité directe</strong> : « si $\\Delta T$ est divisé par $2{,}5$, la puissance aussi ». C\'est faux à cause de l\'exposant $n > 1$ : la puissance chute toujours plus vite que l\'écart de température. Ignorer cette non-linéarité est une cause fréquente de sous-dimensionnement lors d\'un remplacement de chaudière par une PAC sur des émetteurs existants — le confort du logement peut alors ne plus être assuré par grand froid, même si la PAC elle-même est correctement dimensionnée.'
    },

    quiz: [
      {
        q: 'La loi de puissance d\'un émetteur $P = P_n \\times (\\Delta T/\\Delta T_n)^n$ montre que, lorsque $\\Delta T$ diminue :',
        options: [
          'La puissance diminue proportionnellement à $\\Delta T$',
          'La puissance diminue plus vite que $\\Delta T$, car $n > 1$',
          'La puissance reste constante quel que soit $\\Delta T$',
          'La puissance augmente'
        ],
        answer: 1,
        correction: 'Avec $n \\approx 1{,}3 > 1$ pour un radiateur, la puissance chute plus vite que proportionnellement lorsque l\'écart de température diminue : ce n\'est pas une simple règle de trois.'
      },
      {
        q: 'Pourquoi faut-il être vigilant avant de remplacer une chaudière par une PAC sans changer les radiateurs existants ?',
        options: [
          'Parce que les radiateurs ne peuvent jamais fonctionner avec une PAC',
          'Parce que la PAC fonctionne à un écart de température plus faible, ce qui réduit fortement (et non linéairement) la puissance délivrée par les radiateurs existants',
          'Parce que les PAC ne produisent jamais assez d\'eau chaude',
          'Parce que cela n\'a aucun impact sur la puissance des émetteurs'
        ],
        answer: 1,
        correction: 'Une PAC fonctionne typiquement à un écart de température plus faible qu\'une chaudière ; la loi de puissance non linéaire fait chuter fortement la puissance des radiateurs existants, qu\'il faut vérifier avant de conserver les mêmes émetteurs.'
      },
      {
        q: 'L\'écart de température $\\Delta T$ d\'un émetteur se calcule par :',
        options: [
          '$\\Delta T = T_{\\text{départ}} - T_{\\text{retour}}$',
          '$\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}}$, avec $T_{\\text{moy,eau}} = (T_{\\text{départ}}+T_{\\text{retour}})/2$',
          '$\\Delta T = T_{\\text{ambiance}} \\times 2$',
          '$\\Delta T = P_n / P$'
        ],
        answer: 1,
        correction: 'L\'écart pertinent pour la loi de puissance est celui entre la température moyenne de l\'eau dans l\'émetteur et la température ambiante du local.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un radiateur en fonte réutilisé après passage à une PAC air/eau',
          'un radiateur acier d\'un logement rénové avec une PAC géothermique',
          'un radiateur existant conservé lors du remplacement d\'une chaudière fioul par une PAC',
          'un sèche-serviettes chauffage réalimenté en basse température'
        ]);
        const Pn = rand(1000, 2500);
        const dTn = 50;
        const n = 1.3;
        const dT = rand(15, 45);
        const P = Math.round(Pn * Math.pow(dT / dTn, n));
        return {
          statement: `Dans ${contexte}, la puissance nominale est $P_n = ${Pn}$ W pour un écart nominal $\\Delta T_n = ${dTn}$ K. En régime basse température, l'écart de température réel est $\\Delta T = ${dT}$ K. L'exposant caractéristique de ce type d'émetteur est $n = 1{,}3$.<br/><br/>Calcule la puissance réellement délivrée $P$ (en W, arrondie à l'unité).`,
          answer: P,
          tolerance: Math.max(15, Math.round(P * 0.05)),
          unit: 'W',
          hint: 'Applique $P = P_n \\times (\\Delta T/\\Delta T_n)^{1{,}3}$.',
          solution: [
            `Rapport des écarts : $\\Delta T/\\Delta T_n = ${dT}/${dTn} = ${fr(parseFloat((dT / dTn).toFixed(2)), 2)}$.`,
            `$P = P_n \\times (\\Delta T/\\Delta T_n)^{1{,}3} = ${Pn} \\times ${fr(parseFloat((dT / dTn).toFixed(2)), 2)}^{1{,}3} \\approx ${P}$ W.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un radiateur a une puissance nominale $P_n = 1\\,800$ W pour un écart nominal $\\Delta T_n = 50$ K (régime chaudière $75/65/20$). Le bilan thermique du local qu\'il chauffe donne des déperditions $D = 900$ W par grand froid. On envisage de remplacer la chaudière par une PAC fonctionnant en régime basse température, avec une température moyenne d\'eau $T_{\\text{moy,eau}} = 38\\,°C$ pour une ambiance $T_{\\text{ambiance}} = 19\\,°C$. L\'exposant caractéristique de ce radiateur est $n = 1{,}3$.',
      tasks: [
        'Vérifier que ce radiateur, en régime chaudière nominal, couvre bien les déperditions du local.',
        'Calculer l\'écart de température réel $\\Delta T$ en régime basse température (PAC).',
        'Calculer la puissance réellement délivrée par ce radiateur dans ce nouveau régime.',
        'Ce radiateur suffit-il encore à couvrir les déperditions du local avec la PAC ? Si non, proposer une piste de solution.'
      ],
      solutions: [
        'En régime nominal, le radiateur délivre $P_n = 1\\,800$ W, largement supérieur aux déperditions $D = 900$ W : il convient très largement en régime chaudière.',
        '$\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}} = 38 - 19 = 19$ K.',
        '$P = P_n \\times (\\Delta T/\\Delta T_n)^n = 1\\,800 \\times (19/50)^{1{,}3} = 1\\,800 \\times 0{,}38^{1{,}3} \\approx 1\\,800 \\times 0{,}280 \\approx 504$ W.',
        'Avec seulement $504$ W disponibles contre $900$ W de déperditions, ce radiateur ne suffit <strong>plus</strong> en régime basse température : il manque environ $396$ W. Il faudrait soit augmenter la surface d\'échange de l\'émetteur (radiateur plus grand, ou ajout d\'un second émetteur), soit relever légèrement le régime de température de la PAC, soit passer à un émetteur mieux adapté au basse température (plancher chauffant par exemple).'
      ],
      finalAnswer: 'En régime basse température, ce radiateur ne délivre plus que $504$ W contre $1\\,800$ W nominaux, ce qui est insuffisant face aux $900$ W de déperditions du local : un émetteur dimensionné pour une chaudière ne convient pas automatiquement à une PAC basse température, il faut revérifier sa puissance dans le nouveau régime.'
    },

    evaluation: {
      title: 'Évaluation — Émission (chauffage)',
      duration: '20 min',
      questions: [
        {
          statement: 'Un radiateur a $P_n = 1\\,200$ W pour $\\Delta T_n = 50$ K. En régime basse température, $\\Delta T = 25$ K, avec $n = 1{,}3$. Calculer la puissance réelle $P$ (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 490,
          tolerance: 25,
          unit: 'W',
          points: 3,
          correction: '$P = 1\\,200 \\times (25/50)^{1{,}3} = 1\\,200 \\times 0{,}5^{1{,}3} \\approx 1\\,200 \\times 0{,}406 \\approx 487$ W.'
        },
        {
          statement: 'La température moyenne d\'eau d\'un émetteur est $T_{\\text{moy,eau}} = 35\\,°C$, pour une ambiance $T_{\\text{ambiance}} = 20\\,°C$. Calculer l\'écart de température $\\Delta T$ (en K).',
          type: 'numeric',
          answer: 15,
          tolerance: 1,
          unit: 'K',
          points: 2,
          correction: '$\\Delta T = T_{\\text{moy,eau}} - T_{\\text{ambiance}} = 35 - 20 = 15$ K.'
        },
        {
          statement: 'Dans la loi de puissance d\'un émetteur, l\'exposant $n \\approx 1{,}3$ (radiateur) traduit le fait que :',
          type: 'multiple-choice',
          options: [
            'La puissance est proportionnelle à $\\Delta T$',
            'La puissance chute plus vite que $\\Delta T$ lorsque celui-ci diminue',
            'La puissance ne dépend pas de $\\Delta T$',
            'La puissance augmente quand $\\Delta T$ diminue'
          ],
          answer: 1,
          points: 2,
          correction: 'Avec $n > 1$, la relation $P = P_n(\\Delta T/\\Delta T_n)^n$ est convexe : réduire $\\Delta T$ fait chuter $P$ plus vite qu\'une simple proportionnalité.'
        },
        {
          statement: 'Remplacer une chaudière par une PAC sans revérifier la puissance des radiateurs existants présente comme risque principal :',
          type: 'multiple-choice',
          options: [
            'Aucun risque, la puissance des radiateurs ne change jamais',
            'Un risque de sous-chauffe : la puissance réelle des radiateurs peut devenir insuffisante face aux déperditions, à cause de l\'écart de température réduit',
            'Un risque de surchauffe systématique du logement',
            'Un risque uniquement lié au bruit de la PAC'
          ],
          answer: 1,
          points: 3,
          correction: 'En régime basse température, la puissance délivrée par les radiateurs chute fortement (loi non linéaire) : sans vérification, elle peut devenir insuffisante pour couvrir les déperditions du local par grand froid.'
        },
        {
          statement: 'Pour un émetteur donné, la puissance nominale $P_n$ est toujours associée à :',
          type: 'multiple-choice',
          options: [
            'Un écart de température de référence $\\Delta T_n$, précisé par le fabricant',
            'Une température ambiante quelconque, sans référence',
            'La puissance minimale que peut délivrer l\'émetteur',
            'Le COP de la pompe à chaleur associée'
          ],
          answer: 0,
          points: 2,
          correction: 'La puissance nominale $P_n$ n\'a de sens qu\'associée à un écart de température de référence $\\Delta T_n$ (souvent $50$ K), fixé par le fabricant lors des essais normalisés.'
        }
      ]
    }
  });
