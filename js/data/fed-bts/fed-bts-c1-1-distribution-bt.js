/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-c1-1-distribution-bt.js
   BTS FED — S8-C1-1 Distribution BT (TGBT, courant d'emploi Ib)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-c1-1-distribution-bt',
    level: 3, subject: 'fed',
    icon: '🔀',
    title: 'Distribution BT',
    subtitle: 'Architecture de distribution, TGBT, courant d\'emploi d\'un départ',
    keywords: ['TGBT', 'Distribution basse tension', 'Disjoncteur de branchement', 'Courant d\'emploi', 'Triphasé', 'Monophasé'],
    physics: 'Chaque équipement d\'une installation de génie climatique — PAC, CTA, ballon ECS, pompe — doit être alimenté par un départ électrique correctement dimensionné. Avant même de choisir la protection, il faut savoir évaluer le <strong>courant d\'emploi</strong> réel de ce départ : c\'est la première étape, incontournable, de tout dimensionnement électrique.',

    cours: {
      intro: 'L\'énergie électrique arrive au bâtiment via un <strong>disjoncteur de branchement</strong>, posé en aval du compteur par le gestionnaire de réseau, qui protège l\'ensemble de l\'installation et limite la puissance souscrite. En aval de ce disjoncteur, le <strong>tableau général basse tension (TGBT)</strong> centralise l\'arrivée générale et distribue l\'énergie vers des <strong>tableaux divisionnaires</strong>, eux-mêmes reliés aux différents <strong>départs</strong> qui alimentent chaque équipement (PAC, CTA, pompes, éclairage...).<br/><br/>Le TGBT ne fait pas que répartir le courant : il assure aussi la <strong>gestion des sources</strong> (bascule entre réseau normal et un éventuel groupe électrogène ou une source photovoltaïque), le <strong>comptage</strong> des énergies (lien avec le module B9), et souvent la <strong>supervision</strong> de l\'installation électrique (lien avec les modules B8-1/B8-2).<br/><br/>Chaque départ peut être <strong>monophasé</strong> (deux fils actifs, phase + neutre, $U=230$ V entre phase et neutre) ou <strong>triphasé</strong> (trois phases, avec ou sans neutre selon les besoins, $U=400$ V entre phases) : le choix dépend de la puissance de l\'équipement à alimenter — les gros équipements (PAC de forte puissance, compresseurs) sont presque toujours en triphasé.<br/><br/>Avant de choisir la protection d\'un départ, il faut d\'abord évaluer le <strong>courant d\'emploi</strong> $I_b$ que ce départ devra transporter en fonctionnement normal : c\'est ce courant qui conditionne ensuite le calibre du disjoncteur divisionnaire et la section du câble.',
      definitions: [
        { term: 'Disjoncteur de branchement', def: 'Disjoncteur posé en amont de l\'installation, en aval du compteur, qui protège l\'ensemble du réseau intérieur et limite la puissance souscrite auprès du fournisseur d\'énergie.' },
        { term: 'TGBT (Tableau Général Basse Tension)', def: 'Tableau électrique centralisant l\'arrivée générale de l\'installation, qui distribue l\'énergie vers les tableaux divisionnaires. Il assure aussi la gestion des sources (réseau, groupe électrogène, photovoltaïque), le comptage des énergies et souvent la supervision de l\'installation.' },
        { term: 'Distribution monophasée', def: 'Distribution utilisant une phase et un neutre, sous une tension $U=230$ V (entre phase et neutre). Adaptée aux équipements de faible et moyenne puissance.' },
        { term: 'Distribution triphasée (avec ou sans neutre)', def: 'Distribution utilisant trois phases, sous une tension $U=400$ V (entre phases). Le neutre est présent si l\'installation doit aussi alimenter des charges monophasées réparties sur les trois phases ; il peut être absent pour une charge triphasée équilibrée pure (moteur, résistance triphasée).' },
        { term: 'Courant d\'emploi $I_b$', def: 'Courant que doit transporter un départ électrique en fonctionnement normal, calculé à partir de la puissance active de l\'équipement alimenté. C\'est la première donnée à connaître avant de dimensionner la protection (disjoncteur divisionnaire) de ce départ.' }
      ],
      method: {
        title: 'Calculer le courant d\'emploi $I_b$ d\'un départ électrique',
        steps: [
          '<strong>Identifier la puissance active</strong> $P$ (W ou kW) de l\'équipement à alimenter (PAC, CTA, ballon ECS...), donnée constructeur ou de bilan.',
          '<strong>Relever le facteur de puissance</strong> $\\cos\\varphi$ de l\'équipement (souvent entre $0{,}8$ et $0{,}95$ pour un moteur ou une PAC).',
          '<strong>Identifier le type de distribution</strong> : monophasé ($U=230$ V) ou triphasé ($U=400$ V entre phases).',
          '<strong>Appliquer la formule adaptée</strong> : $I_b = \\dfrac{P}{U \\times \\cos\\varphi}$ en monophasé, $I_b = \\dfrac{P}{\\sqrt{3} \\times U \\times \\cos\\varphi}$ en triphasé.',
          '<strong>Utiliser ce courant d\'emploi</strong> comme donnée de base pour choisir ensuite le calibre du disjoncteur divisionnaire de ce départ (le calibre choisi doit être au moins égal à $I_b$).'
        ]
      },
      example: {
        statement: 'Une pompe à chaleur triphasée a une puissance active $P=15$ kW et un facteur de puissance $\\cos\\varphi=0{,}85$. Elle est alimentée en triphasé $400$ V.<br/><br/>Calculer le courant d\'emploi $I_b$ de son départ électrique.',
        steps: [
          'Distribution triphasée : $I_b = \\dfrac{P}{\\sqrt{3} \\times U \\times \\cos\\varphi}$.',
          'Application numérique : $I_b = \\dfrac{15\\,000}{\\sqrt{3} \\times 400 \\times 0{,}85} \\approx \\dfrac{15\\,000}{588{,}9} \\approx 25{,}5$ A.'
        ],
        answer: 'Le départ de cette PAC doit transporter un courant d\'emploi d\'environ $25{,}5$ A : c\'est cette valeur qui servira de base pour choisir un disjoncteur divisionnaire de calibre immédiatement supérieur (par exemple $32$ A).'
      },
      formulas: [
        '$I_b = \\dfrac{P}{U \\times \\cos\\varphi}$ (courant d\'emploi en monophasé, $U=230$ V)',
        '$I_b = \\dfrac{P}{\\sqrt{3} \\times U \\times \\cos\\varphi}$ (courant d\'emploi en triphasé, $U=400$ V entre phases)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Architecture d\'une distribution BT',
        title: 'Du disjoncteur de branchement aux départs terminaux',
        description: 'L\'énergie descend du disjoncteur de branchement vers le TGBT, puis vers les tableaux divisionnaires, avant d\'alimenter chaque départ terminal (PAC, CTA, ballon ECS).',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="c11-graph-title c11-graph-desc">
            <title id="c11-graph-title">Architecture arborescente d'une distribution basse tension</title>
            <desc id="c11-graph-desc">Schema arborescent descendant : disjoncteur de branchement en haut, relie au TGBT juste en dessous, lui-meme relie a deux tableaux divisionnaires, chacun relie a des departs terminaux representant PAC, CTA et ballon ECS.</desc>

            <defs>
              <marker id="arrow-fed-c11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- disjoncteur de branchement -->
            <rect class="frame-line" x="170" y="10" width="140" height="40" fill="none"></rect>
            <text class="label-soft" x="240" y="35" text-anchor="middle">Disjoncteur de branchement</text>

            <!-- TGBT -->
            <rect class="frame-line" x="170" y="80" width="140" height="40" fill="none"></rect>
            <text class="label-soft" x="240" y="105" text-anchor="middle">TGBT</text>

            <!-- tableaux divisionnaires -->
            <rect class="frame-line" x="60" y="150" width="130" height="40" fill="none"></rect>
            <text class="label-soft" x="125" y="175" text-anchor="middle">Tableau divisionnaire 1</text>

            <rect class="frame-line" x="290" y="150" width="130" height="40" fill="none"></rect>
            <text class="label-soft" x="355" y="175" text-anchor="middle">Tableau divisionnaire 2</text>

            <!-- departs terminaux -->
            <text class="tick-label" x="125" y="225" text-anchor="middle">Départs : PAC, CTA</text>
            <text class="tick-label" x="355" y="225" text-anchor="middle">Départs : ballon ECS, pompes</text>

            <!-- liaisons -->
            <line class="curve-main" x1="240" y1="50" x2="240" y2="80" marker-end="url(#arrow-fed-c11)"></line>
            <line class="curve-main" x1="240" y1="120" x2="125" y2="150" marker-end="url(#arrow-fed-c11)"></line>
            <line class="curve-main" x1="240" y1="120" x2="355" y2="150" marker-end="url(#arrow-fed-c11)"></line>
            <line class="guide-line" x1="125" y1="190" x2="125" y2="210"></line>
            <line class="guide-line" x1="355" y1="190" x2="355" y2="210"></line>
          </svg>
        `,
        notes: [
          'Le <strong>disjoncteur de branchement</strong>, en amont, protège l\'ensemble de l\'installation et limite la puissance souscrite.',
          'Le <strong>TGBT</strong> centralise l\'arrivée générale et assure gestion des sources, comptage et supervision, avant de distribuer vers les tableaux divisionnaires.',
          'Chaque <strong>départ terminal</strong> alimente un équipement précis : c\'est son courant d\'emploi $I_b$ qui doit être calculé pour dimensionner sa protection.'
        ],
        reading: 'Suis l\'arborescence de haut en bas : disjoncteur de branchement → TGBT → tableaux divisionnaires → départs terminaux vers chaque équipement.',
        caption: 'Architecture arborescente d\'une distribution BT : chaque niveau réduit progressivement le périmètre protégé, jusqu\'au départ individuel de chaque équipement.'
      },
      recap: [
        'Le <strong>disjoncteur de branchement</strong> protège l\'ensemble de l\'installation ; le <strong>TGBT</strong> centralise, gère les sources, le comptage et la supervision.',
        'Distribution <strong>monophasée</strong> ($U=230$ V) pour les charges de faible puissance ; <strong>triphasée</strong> ($U=400$ V, avec ou sans neutre) pour les charges plus importantes.',
        'Courant d\'emploi monophasé : $I_b = P/(U\\times\\cos\\varphi)$. Courant d\'emploi triphasé : $I_b = P/(\\sqrt{3}\\times U\\times\\cos\\varphi)$.',
        'Le courant d\'emploi $I_b$ est la première donnée à calculer avant de choisir le calibre d\'un disjoncteur divisionnaire, qui doit toujours être au moins égal à $I_b$.',
        'Le neutre en triphasé n\'est nécessaire que si des charges monophasées sont réparties sur les trois phases — une charge triphasée équilibrée pure peut s\'en passer.'
      ],
      piege: 'Ne pas oublier le facteur $\\sqrt{3}$ en triphasé : c\'est l\'erreur la plus fréquente, qui conduit à <strong>surestimer</strong> le courant d\'emploi d\'un gros équipement d\'un facteur $\\sqrt{3}\\approx 1{,}73$ si l\'on applique par erreur la formule monophasée. Attention aussi à ne pas confondre la tension $U=230$ V (monophasé, entre phase et neutre) avec $U=400$ V (triphasé, entre phases) : utiliser la mauvaise tension dans la formule fausse également le résultat, indépendamment de l\'erreur sur $\\sqrt{3}$.'
    },

    quiz: [
      {
        q: 'Le TGBT (Tableau Général Basse Tension) assure notamment :',
        options: [
          'Uniquement la distribution vers un seul départ terminal',
          'La gestion des sources, le comptage des énergies et souvent la supervision de l\'installation',
          'Le remplacement du disjoncteur de branchement',
          'La production d\'énergie électrique du bâtiment'
        ],
        answer: 1,
        correction: 'Au-delà de la simple distribution, le TGBT centralise la gestion des sources (réseau, groupe électrogène, photovoltaïque), le comptage des énergies (lien avec le module B9) et souvent la supervision de l\'installation électrique.'
      },
      {
        q: 'Le courant d\'emploi $I_b$ d\'un départ triphasé, de puissance $P$ et de facteur de puissance $\\cos\\varphi$, sous $U=400$ V, se calcule par :',
        options: [
          '$I_b = P/(U\\times\\cos\\varphi)$',
          '$I_b = P/(\\sqrt{3}\\times U\\times\\cos\\varphi)$',
          '$I_b = U\\times\\cos\\varphi/P$',
          '$I_b = \\sqrt{3}\\times P\\times U\\times\\cos\\varphi$'
        ],
        answer: 1,
        correction: 'En triphasé, $I_b = P/(\\sqrt{3}\\times U\\times\\cos\\varphi)$, avec $U=400$ V la tension entre phases — à ne pas confondre avec la formule monophasée.'
      },
      {
        q: 'Un départ triphasé sans neutre convient typiquement à :',
        options: [
          'Une charge triphasée équilibrée pure, comme un moteur',
          'Un éclairage monophasé isolé',
          'Une prise de courant domestique standard',
          'Un ballon d\'ECS monophasé'
        ],
        answer: 0,
        correction: 'Le neutre n\'est nécessaire que si des charges monophasées sont réparties sur les trois phases ; une charge triphasée équilibrée pure (moteur, résistance triphasée) peut fonctionner sans neutre.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const equipement = pick([
          { nom: 'une pompe à chaleur triphasée', tri: true },
          { nom: 'une centrale de traitement d\'air (CTA) triphasée', tri: true },
          { nom: 'un ballon d\'eau chaude sanitaire monophasé', tri: false },
          { nom: 'une pompe de circulation monophasée', tri: false }
        ]);
        const P = equipement.tri ? rand(8, 25) : rand(2, 9);
        const cosPhi = randFloat(0.8, 0.95, 2);
        let Ib, formule;
        if (equipement.tri) {
          Ib = parseFloat(((P * 1000) / (Math.sqrt(3) * 400 * cosPhi)).toFixed(1));
          formule = `$I_b = \\dfrac{P}{\\sqrt{3} \\times U \\times \\cos\\varphi} = \\dfrac{${P}\\,000}{\\sqrt{3} \\times 400 \\times ${fr(cosPhi, 2)}} \\approx ${fr(Ib, 1)}$ A.`;
        } else {
          Ib = parseFloat(((P * 1000) / (230 * cosPhi)).toFixed(1));
          formule = `$I_b = \\dfrac{P}{U \\times \\cos\\varphi} = \\dfrac{${P}\\,000}{230 \\times ${fr(cosPhi, 2)}} \\approx ${fr(Ib, 1)}$ A.`;
        }
        return {
          statement: `Pour ${equipement.nom} de puissance active $P=${P}$ kW et de facteur de puissance $\\cos\\varphi=${fr(cosPhi, 2)}$, alimenté(e) en ${equipement.tri ? 'triphasé (U=400 V)' : 'monophasé (U=230 V)'}.<br/><br/>Calcule le courant d'emploi $I_b$ de ce départ électrique (en A, arrondi au dixième).`,
          answer: Ib,
          tolerance: Math.max(0.5, Ib * 0.03),
          unit: 'A',
          hint: equipement.tri ? 'Utilise $I_b = P/(\\sqrt{3}\\times U\\times\\cos\\varphi)$.' : 'Utilise $I_b = P/(U\\times\\cos\\varphi)$.',
          solution: [formule]
        };
      }
    },

    probleme: {
      context: 'Un tableau divisionnaire alimente deux équipements distincts d\'une chaufferie : une pompe à chaleur triphasée de puissance $P_1=18$ kW, $\\cos\\varphi_1=0{,}88$, alimentée sous $U=400$ V ; et un ballon d\'ECS monophasé de puissance $P_2=3$ kW, $\\cos\\varphi_2=1$ (charge purement résistive), alimenté sous $U=230$ V.',
      tasks: [
        'Calculer le courant d\'emploi $I_{b1}$ du départ de la pompe à chaleur.',
        'Calculer le courant d\'emploi $I_{b2}$ du départ du ballon d\'ECS.',
        'Pourquoi le facteur de puissance du ballon d\'ECS est-il pris égal à $1$, contrairement à celui de la pompe à chaleur ?',
        'Pourquoi la pompe à chaleur, malgré une puissance six fois supérieure à celle du ballon, n\'a-t-elle pas un courant d\'emploi six fois plus élevé ?'
      ],
      solutions: [
        '$I_{b1} = \\dfrac{P_1}{\\sqrt{3}\\times U\\times\\cos\\varphi_1} = \\dfrac{18\\,000}{\\sqrt{3}\\times 400\\times 0{,}88} \\approx \\dfrac{18\\,000}{610{,}0} \\approx 29{,}5$ A.',
        '$I_{b2} = \\dfrac{P_2}{U\\times\\cos\\varphi_2} = \\dfrac{3\\,000}{230\\times 1} \\approx 13{,}0$ A.',
        'Le ballon d\'ECS est une <strong>résistance électrique pure</strong> (effet Joule) : elle ne consomme que de la puissance active, sans déphasage entre tension et courant, donc $\\cos\\varphi=1$. La pompe à chaleur, elle, comporte un moteur (compresseur) qui consomme aussi de la puissance réactive pour créer son champ magnétique, d\'où un $\\cos\\varphi<1$.',
        'Le courant d\'emploi triphasé bénéficie du facteur $\\sqrt{3}$ au dénominateur et d\'une tension plus élevée ($400$ V contre $230$ V) : à puissance égale, un départ triphasé transporte un courant bien plus faible qu\'un départ monophasé équivalent. C\'est précisément pour cette raison que les équipements de forte puissance sont alimentés en triphasé.'
      ],
      finalAnswer: '$I_{b1} \\approx 29{,}5$ A (PAC triphasée) et $I_{b2} \\approx 13{,}0$ A (ballon ECS monophasé) : malgré un rapport de puissance de $6$, le rapport de courant n\'est que d\'environ $2{,}3$, grâce à l\'avantage du triphasé (facteur $\\sqrt{3}$ et tension plus élevée).'
    },

    evaluation: {
      title: 'Évaluation — Distribution BT',
      duration: '20 min',
      questions: [
        {
          statement: 'Un équipement monophasé de puissance $P=4{,}6$ kW, $\\cos\\varphi=1$, est alimenté sous $U=230$ V. Calculer son courant d\'emploi $I_b$ (en A).',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'A',
          points: 3,
          correction: '$I_b = P/(U\\times\\cos\\varphi) = 4\\,600/(230\\times 1) = 20$ A.'
        },
        {
          statement: 'Un équipement triphasé de puissance $P=20$ kW, $\\cos\\varphi=0{,}87$, est alimenté sous $U=400$ V. Calculer son courant d\'emploi $I_b$ (en A, arrondi au dixième).',
          type: 'numeric',
          answer: 33.2,
          tolerance: 1,
          unit: 'A',
          points: 3,
          correction: '$I_b = P/(\\sqrt{3}\\times U\\times\\cos\\varphi) = 20\\,000/(\\sqrt{3}\\times 400\\times 0{,}87) \\approx 33{,}2$ A.'
        },
        {
          statement: 'Le disjoncteur de branchement, posé en amont de l\'installation, a pour rôle de :',
          type: 'multiple-choice',
          options: [
            'Alimenter directement chaque équipement terminal sans tableau intermédiaire',
            'Protéger l\'ensemble de l\'installation et limiter la puissance souscrite',
            'Réguler la température des équipements de chauffage',
            'Compenser l\'énergie réactive de l\'installation'
          ],
          answer: 1,
          points: 2,
          correction: 'Le disjoncteur de branchement, en amont de l\'installation, protège l\'ensemble du réseau intérieur et limite la puissance souscrite auprès du fournisseur d\'énergie.'
        },
        {
          statement: 'Le calibre du disjoncteur divisionnaire d\'un départ doit être :',
          type: 'multiple-choice',
          options: [
            'Toujours inférieur au courant d\'emploi $I_b$ du départ',
            'Au moins égal au courant d\'emploi $I_b$ du départ',
            'Indépendant du courant d\'emploi $I_b$',
            'Toujours égal à $I_b\\times\\sqrt{3}$, quel que soit le type de distribution'
          ],
          answer: 1,
          points: 2,
          correction: 'Le calibre du disjoncteur divisionnaire doit être choisi au moins égal au courant d\'emploi $I_b$ calculé pour ce départ, afin qu\'il puisse transporter le courant réel sans déclencher intempestivement.'
        }
      ]
    }
  });
