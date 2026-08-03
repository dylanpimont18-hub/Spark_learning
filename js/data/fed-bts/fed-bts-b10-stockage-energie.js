/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b10-stockage-energie.js
   BTS FED — S8-B10 Stockage de l'énergie — ballon tampon hydraulique (chaleur
   sensible) et ouverture au stockage électrique (batteries, ASI)
   Formule Q = m.c.Δθ : constante physique de base, aucune source externe requise.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b10-stockage-energie',
    level: 3, subject: 'fed',
    icon: '🔌',
    title: 'Stockage de l\'énergie',
    subtitle: 'Ballon tampon hydraulique, chaleur sensible, batteries et ASI',
    keywords: ['Ballon tampon', 'Chaleur sensible', 'Découplage production-consommation', 'Batterie', 'ASI'],
    physics: 'Un générateur de chauffage n\'a pas toujours intérêt à fonctionner exactement au rythme de la demande de chaleur des émetteurs. Un <strong>ballon tampon hydraulique</strong>, rempli d\'eau, permet de <strong>stocker temporairement</strong> de la chaleur pour découpler la production de l\'émission — un principe que l\'on retrouve, sous une forme différente, dans le stockage électrique par batteries.',

    cours: {
      intro: 'Dans une installation de chauffage, le générateur (chaudière, pompe à chaleur — module B1-1) et les émetteurs (radiateurs, plancher chauffant — module B1-2) ne fonctionnent pas toujours au même rythme : les émetteurs demandent de la chaleur de façon variable, alors qu\'un générateur fonctionne souvent mieux à charge stable.<br/><br/>Le <strong>ballon tampon hydraulique</strong> est un réservoir d\'eau intercalé entre production et émission. Il stocke de la <strong>chaleur sensible</strong> (l\'eau qu\'il contient change de température, mais pas d\'état — à ne pas confondre avec le stockage de froid par glace du module B5-13, qui exploite lui la chaleur latente). Cette chaleur stockée permet de <strong>découpler</strong> dans le temps la production et l\'émission de chaleur.<br/><br/>Ce besoin de découpler le moment de la <strong>production</strong> de celui de la <strong>consommation</strong> ne concerne pas que la chaleur : on le retrouve aussi dans le stockage de l\'<strong>énergie électrique</strong>, via des piles et accumulateurs électrochimiques (pour différer la consommation d\'une production photovoltaïque, module B6-1) ou via des alimentations sans interruption (ASI, module B8-2) qui stockent de l\'électricité sur batterie pour maintenir un système opérationnel lors d\'une coupure secteur. Les technologies et les échelles de temps diffèrent totalement, mais le principe reste le même.',
      definitions: [
        { term: 'Ballon tampon hydraulique', def: 'Réservoir d\'eau intercalé entre un générateur de chauffage (chaudière, PAC) et les émetteurs, qui stocke de la chaleur sensible pour découpler leur fonctionnement respectif.' },
        { term: 'Chaleur sensible', def: 'Énergie échangée lors d\'une variation de <strong>température</strong> d\'un corps, sans changement d\'état : $Q = m \\times c \\times \\Delta\\theta$, avec $c$ la chaleur massique du corps (pour l\'eau, $c_{eau} = 4{,}18$ kJ/(kg·K)).' },
        { term: 'Cycles courts (marche/arrêt)', def: 'Alternance rapprochée de démarrages et d\'arrêts d\'un générateur, néfaste car elle use prématurément l\'appareil et dégrade son rendement. Un ballon tampon, en lissant la demande, permet de les limiter.' },
        { term: 'Accumulateur électrochimique (batterie)', def: 'Dispositif de stockage de l\'énergie électrique sous forme chimique, permettant de différer dans le temps la consommation d\'une électricité produite (par exemple par des panneaux photovoltaïques, module B6-1).' },
        { term: 'Alimentation sans interruption (ASI) / alimentation électrique de sécurité', def: 'Système stockant de l\'électricité sur batterie pour une restitution de courte durée, afin de maintenir un système opérationnel lors d\'une coupure secteur (module B8-2).' }
      ],
      method: {
        title: 'Calculer l\'énergie stockée dans un ballon tampon hydraulique',
        steps: [
          '<strong>Identifier le volume d\'eau</strong> $V$ du ballon tampon (en L), directement assimilable à sa masse $m$ (en kg, puisque $1$ L d\'eau $\\approx 1$ kg).',
          '<strong>Identifier l\'écart de température exploité</strong> $\\Delta\\theta$ (en K ou °C) entre la température haute et la température basse de fonctionnement du ballon.',
          '<strong>Retenir la chaleur massique de l\'eau</strong> $c_{eau} = 4{,}18$ kJ/(kg·K) (constante physique).',
          '<strong>Calculer l\'énergie stockée</strong> $Q = m \\times c_{eau} \\times \\Delta\\theta$, en kJ.',
          '<strong>Convertir en kWh si nécessaire</strong> ($1$ kWh $= 3\\,600$ kJ), pour comparer cette énergie stockée à la puissance et à la durée d\'un cycle de fonctionnement du générateur.'
        ]
      },
      example: {
        statement: 'Un ballon tampon de $V = 500$ L exploite un écart de température $\\Delta\\theta = 15$ K.<br/><br/>Calculer l\'énergie stockée, en kJ puis en kWh.',
        steps: [
          '$Q = m \\times c_{eau} \\times \\Delta\\theta = 500 \\times 4{,}18 \\times 15 = 31\\,350$ kJ.',
          'Conversion en kWh : $Q = 31\\,350/3\\,600 \\approx 8{,}7$ kWh.'
        ],
        answer: 'Ce ballon tampon stocke environ $8{,}7$ kWh de chaleur sensible, exploitable pour lisser le fonctionnement du générateur pendant les variations de demande des émetteurs.'
      },
      formulas: [
        '$Q = m \\times c_{eau} \\times \\Delta\\theta$ (énergie stockée, en kJ, avec $c_{eau} = 4{,}18$ kJ/(kg·K))',
        '$Q_{kWh} = Q_{kJ} / 3\\,600$ (conversion en kWh)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Position du ballon tampon dans l\'installation',
        title: 'Découplage entre générateur et émetteurs',
        description: 'Le ballon tampon hydraulique est intercalé entre le générateur de chauffage et les circuits d\'émission. Il absorbe les écarts de fonctionnement entre une production parfois discontinue et une émission de chaleur variable, répartie sur plusieurs circuits.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="tampon-graph-title tampon-graph-desc">
            <title id="tampon-graph-title">Schema de principe d'un ballon tampon hydraulique</title>
            <desc id="tampon-graph-desc">Schema montrant un generateur relie a un ballon tampon central, lui-meme relie a deux circuits d'emission distincts. Le ballon tampon est positionne entre la production et l'emission, symbolisant le decouplage entre les deux.</desc>

            <rect class="frame-line" x="40" y="105" width="100" height="50" fill="none"></rect>
            <text class="label-soft" x="90" y="134" text-anchor="middle">Générateur</text>

            <rect class="frame-line" x="190" y="85" width="110" height="90" fill="none"></rect>
            <text class="label-soft" x="245" y="120" text-anchor="middle">Ballon</text>
            <text class="label-soft" x="245" y="140" text-anchor="middle">tampon</text>

            <rect class="frame-line" x="350" y="55" width="100" height="45" fill="none"></rect>
            <text class="label-soft" x="400" y="82" text-anchor="middle">Émetteurs 1</text>

            <rect class="frame-line" x="350" y="160" width="100" height="45" fill="none"></rect>
            <text class="label-soft" x="400" y="187" text-anchor="middle">Émetteurs 2</text>

            <line class="curve-main" x1="140" y1="130" x2="190" y2="130"></line>
            <line class="curve-main" x1="300" y1="110" x2="350" y2="80"></line>
            <line class="curve-main" x1="300" y1="150" x2="350" y2="182"></line>

            <text class="annotation-label" x="245" y="200" text-anchor="middle">Découplage production / émission</text>
          </svg>
        `,
        notes: [
          'Le ballon tampon <strong>reçoit</strong> la chaleur du générateur et la <strong>restitue</strong> à un ou plusieurs circuits d\'émission, indépendamment du rythme instantané du générateur.',
          'Il permet de limiter les <strong>cycles courts</strong> du générateur (marche/arrêt rapprochés), néfastes pour son rendement et sa durée de vie.',
          'Sur une installation à plusieurs circuits (radiateurs + plancher chauffant, par exemple), il facilite aussi l\'<strong>équilibrage hydraulique</strong> entre circuits (module B4-1).'
        ],
        reading: 'Suis le trajet de la chaleur depuis le générateur (gauche) vers le ballon tampon (centre), puis vers les deux circuits d\'émission (droite) : le ballon est le point de découplage entre les deux.',
        caption: 'Le ballon tampon hydraulique, positionné entre production et émission de chaleur.'
      },
      recap: [
        'Le <strong>ballon tampon hydraulique</strong> stocke de la <strong>chaleur sensible</strong> (variation de température de l\'eau, sans changement d\'état) entre production et émission.',
        'Énergie stockée : $Q = m \\times c_{eau} \\times \\Delta\\theta$, avec $c_{eau} = 4{,}18$ kJ/(kg·K).',
        'Il limite les <strong>cycles courts</strong> du générateur et amortit les variations de charge entre plusieurs circuits d\'émission.',
        'Le même besoin de <strong>découpler production et consommation</strong> existe pour l\'électricité : batteries (photovoltaïque, module B6-1) ou ASI (module B8-2).',
        'Ces stockages électriques utilisent des technologies et des échelles de temps très différentes du ballon tampon, mais répondent au même principe général.'
      ],
      piege: 'Ne pas confondre le ballon tampon (stockage de <strong>chaleur sensible</strong>, sur quelques heures typiquement) avec le stockage de froid par glace du module B5-13, qui exploite la <strong>chaleur latente</strong> — les deux phénomènes physiques et leurs formules ($Q=mc\\Delta\\theta$ contre $Q=mL_f$) sont différents. Ne pas confondre non plus ce stockage de <strong>courte durée</strong> (quelques heures, pour lisser la demande journalière) avec un éventuel <strong>stockage saisonnier</strong> de chaleur (stocker l\'été pour restituer l\'hiver), qui relève d\'une toute autre échelle de temps et sort du champ de ce module.'
    },

    quiz: [
      {
        q: 'Le rôle principal d\'un ballon tampon hydraulique dans une installation de chauffage est de :',
        options: [
          'Traiter la dureté de l\'eau du circuit',
          'Découpler le fonctionnement du générateur de celui des émetteurs, en stockant de la chaleur sensible',
          'Produire de l\'eau chaude sanitaire',
          'Remplacer le vase d\'expansion du circuit'
        ],
        answer: 1,
        correction: 'Le ballon tampon stocke temporairement de la chaleur (chaleur sensible de l\'eau qu\'il contient) pour découpler dans le temps la production du générateur et la demande des émetteurs.'
      },
      {
        q: 'L\'énergie stockée dans un ballon tampon hydraulique se calcule par :',
        options: [
          '$Q = m \\times L_f$',
          '$Q = m \\times c_{eau} \\times \\Delta\\theta$',
          '$Q = V_{\\text{résine}} \\times 5$',
          '$Q = P \\times t$ uniquement'
        ],
        answer: 1,
        correction: 'C\'est bien la formule de la chaleur sensible, $Q = m \\times c_{eau} \\times \\Delta\\theta$, qui s\'applique : l\'eau du ballon change de température sans changer d\'état.'
      },
      {
        q: 'Le stockage d\'énergie électrique sur batterie, associé à une installation photovoltaïque, répond au même principe général que le ballon tampon hydraulique, à savoir :',
        options: [
          'Convertir l\'électricité en chaleur latente',
          'Découpler le moment de la production de celui de la consommation',
          'Augmenter artificiellement la puissance produite',
          'Remplacer intégralement le réseau électrique'
        ],
        answer: 1,
        correction: 'Ballon tampon et batterie stockent chacun une forme d\'énergie différente (thermique/électrique), mais répondent tous deux au besoin de découpler production et consommation dans le temps.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chaufferie collective associée à plusieurs circuits radiateurs',
          'une pompe à chaleur couplée à un plancher chauffant',
          'une chaudière biomasse desservant un réseau de chaleur de quartier',
          'une installation mixte chaudière + PAC avec appoint électrique'
        ]);
        const calcType = pick(['QDepuisV', 'VDepuisQ']);

        if (calcType === 'QDepuisV') {
          const V = pick([200, 300, 500, 800, 1000, 1500, 2000]);
          const dTheta = rand(10, 20);
          const Q_kJ = parseFloat((V * 4.18 * dTheta).toFixed(1));
          const Q_kWh = parseFloat((Q_kJ / 3600).toFixed(2));
          return {
            statement: `Dans ${contexte}, un ballon tampon de $V = ${V}$ L exploite un écart de température $\\Delta\\theta = ${dTheta}$ K ($c_{eau} = 4{,}18$ kJ/(kg·K)).<br/><br/>Calcule l'énergie stockée dans ce ballon, en kWh (arrondie au centième).`,
            answer: Q_kWh,
            tolerance: 0.3,
            unit: 'kWh',
            hint: 'Calcule d\'abord $Q = m \\times c_{eau} \\times \\Delta\\theta$ en kJ (avec $m \\approx V$ en kg), puis convertis en kWh en divisant par $3\\,600$.',
            solution: [
              `$Q = m \\times c_{eau} \\times \\Delta\\theta = ${V} \\times 4{,}18 \\times ${dTheta} = ${fr(Q_kJ, 1)}$ kJ.`,
              `Conversion en kWh : $Q = ${fr(Q_kJ, 1)}/3\\,600 \\approx ${fr(Q_kWh, 2)}$ kWh.`
            ]
          };
        }

        const Q_kWh_cible = randFloat(5, 25, 1);
        const dTheta2 = rand(10, 20);
        const Q_kJ_cible = parseFloat((Q_kWh_cible * 3600).toFixed(1));
        const V_necessaire = Math.round(Q_kJ_cible / (4.18 * dTheta2));
        return {
          statement: `Dans ${contexte}, on souhaite qu'un ballon tampon puisse stocker $Q = ${fr(Q_kWh_cible, 1)}$ kWh, avec un écart de température exploité $\\Delta\\theta = ${dTheta2}$ K ($c_{eau} = 4{,}18$ kJ/(kg·K)).<br/><br/>Calcule le volume de ballon $V$ nécessaire (en L, arrondi à l'entier).`,
          answer: V_necessaire,
          tolerance: 15,
          unit: 'L',
          hint: 'Convertis d\'abord $Q$ en kJ, puis isole $m$ (assimilé à $V$) dans $Q = m \\times c_{eau} \\times \\Delta\\theta$.',
          solution: [
            `$Q$ en kJ : $${fr(Q_kWh_cible, 1)} \\times 3\\,600 = ${fr(Q_kJ_cible, 1)}$ kJ.`,
            `Volume nécessaire : $V = Q/(c_{eau}\\times\\Delta\\theta) = ${fr(Q_kJ_cible, 1)}/(4{,}18 \\times ${dTheta2}) \\approx ${V_necessaire}$ L.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une chaufferie collective alimente deux circuits d\'émission (radiateurs et plancher chauffant) à partir d\'une pompe à chaleur. Pour limiter les cycles courts de la PAC, on installe un ballon tampon exploitant un écart de température $\\Delta\\theta = 12$ K. On souhaite que ce ballon puisse couvrir, à lui seul, un besoin ponctuel de $Q = 10$ kWh le temps que la PAC redémarre ($c_{eau} = 4{,}18$ kJ/(kg·K)).',
      tasks: [
        'Convertir le besoin $Q = 10$ kWh en kJ.',
        'Calculer le volume de ballon tampon $V$ nécessaire pour couvrir ce besoin avec $\\Delta\\theta = 12$ K.',
        'Le fabricant propose des ballons de $500$ L. Combien de ballons faut-il installer (au minimum) pour atteindre ce volume ?',
        'Expliquer, en une phrase, pourquoi ce ballon tampon ne remplace pas un stockage électrique par batterie en cas de coupure secteur de la PAC.'
      ],
      solutions: [
        '$Q = 10 \\times 3\\,600 = 36\\,000$ kJ.',
        '$V = Q/(c_{eau}\\times\\Delta\\theta) = 36\\,000/(4{,}18\\times12) \\approx 717{,}7$ L.',
        '$717{,}7/500 \\approx 1{,}4$, donc il faut au minimum <strong>$2$ ballons</strong> de $500$ L (soit $1\\,000$ L) pour couvrir ce besoin.',
        'Le ballon tampon stocke uniquement de la <strong>chaleur</strong> : si la PAC (et donc sa pompe de circulation, ses auxiliaires électriques) est privée d\'électricité par une coupure secteur, seule une <strong>ASI ou une batterie</strong> (stockage électrique, module B8-2) peut maintenir le système opérationnel — le ballon tampon n\'a aucune action sur l\'alimentation électrique de l\'installation.'
      ],
      finalAnswer: 'Il faut au minimum $2$ ballons de $500$ L (soit $1\\,000$ L) pour couvrir ce besoin ponctuel de $10$ kWh avec un écart de $12$ K ; mais ce stockage thermique ne protège en rien contre une coupure électrique, qui relève d\'un stockage électrique dédié (ASI/batterie).'
    },

    evaluation: {
      title: 'Évaluation — Stockage de l\'énergie',
      duration: '20 min',
      questions: [
        {
          statement: 'Un ballon tampon de $V = 750$ L exploite un écart $\\Delta\\theta = 10$ K ($c_{eau}=4{,}18$ kJ/(kg·K)). Calculer l\'énergie stockée, en kJ.',
          type: 'numeric',
          answer: 31350,
          tolerance: 200,
          unit: 'kJ',
          points: 3,
          correction: '$Q = 750 \\times 4{,}18 \\times 10 = 31\\,350$ kJ.'
        },
        {
          statement: 'Convertir cette énergie de $31\\,350$ kJ en kWh (arrondie au dixième).',
          type: 'numeric',
          answer: 8.7,
          tolerance: 0.3,
          unit: 'kWh',
          points: 2,
          correction: '$31\\,350/3\\,600 \\approx 8{,}7$ kWh.'
        },
        {
          statement: 'Pour stocker $Q = 15$ kWh avec un écart $\\Delta\\theta = 15$ K, calculer le volume de ballon nécessaire (en L, arrondi à l\'entier).',
          type: 'numeric',
          answer: 861,
          tolerance: 20,
          unit: 'L',
          points: 3,
          correction: '$Q = 15\\times3\\,600=54\\,000$ kJ. $V = 54\\,000/(4{,}18\\times15) \\approx 861$ L.'
        },
        {
          statement: 'Le ballon tampon hydraulique et une batterie associée à une installation photovoltaïque partagent le même principe général, qui est de :',
          type: 'multiple-choice',
          options: [
            'Stocker exactement la même forme d\'énergie',
            'Découpler le moment de la production de celui de la consommation, malgré des technologies très différentes',
            'Fonctionner uniquement en hiver',
            'Éliminer tout besoin de régulation dans l\'installation'
          ],
          answer: 1,
          points: 2,
          correction: 'Ballon tampon (chaleur sensible) et batterie (énergie électrochimique) stockent des formes d\'énergie différentes, mais répondent au même besoin : découpler production et consommation dans le temps.'
        },
        {
          statement: 'Pourquoi ne faut-il pas appliquer la formule $Q = m \\times L_f$ pour calculer l\'énergie stockée dans un ballon tampon hydraulique classique ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'eau du ballon ne change pas d\'état : c\'est un stockage de chaleur sensible, pas latente',
            'Parce que $L_f$ ne s\'applique qu\'à l\'électricité',
            'Parce que le ballon tampon ne contient pas d\'eau',
            'Parce que cette formule est réservée aux ballons de plus de 1000 L'
          ],
          answer: 0,
          points: 3,
          correction: 'Dans un ballon tampon classique, l\'eau reste liquide et varie seulement en température : c\'est la formule de la chaleur sensible ($Q=mc\\Delta\\theta$) qui s\'applique, pas celle de la chaleur latente (réservée à un changement d\'état, comme dans le module B5-13).'
        }
      ]
    }
  });
