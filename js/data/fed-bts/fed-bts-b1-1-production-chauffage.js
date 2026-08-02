/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b1-1-production-chauffage.js
   BTS FED — S8-B1-1 Production (chauffage) — générateurs et échangeurs
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b1-1-production-chauffage',
    level: 3, subject: 'fed',
    icon: '🔧',
    title: 'Production (chauffage)',
    subtitle: 'Générateurs de chauffage, association en cascade et échangeurs (DTLM)',
    keywords: ['Chaudière', 'PAC', 'Cascade de générateurs', 'Échangeur', 'DTLM'],
    physics: 'Produire de la chaleur pour un bâtiment ne se limite pas à choisir « une chaudière » ou « une PAC » : il faut souvent <strong>associer plusieurs générateurs</strong> pour couvrir une demande qui varie tout au long de l\'année, et transmettre cette chaleur via des <strong>échangeurs</strong> dont le dimensionnement repose sur une notion clé, l\'<strong>écart de température logarithmique moyen (DTLM)</strong>.',

    cours: {
      intro: 'La <strong>production de chauffage</strong> d\'un bâtiment repose sur des générateurs de nature très variée : <strong>chaudières</strong> (gaz, fioul, biomasse), <strong>pompes à chaleur</strong> (air/eau, eau/eau, géothermiques), ou raccordement à un <strong>réseau de chaleur urbain</strong>. Chacun a ses avantages, ses contraintes d\'installation et sa plage de puissance efficace.<br/><br/>Pour couvrir une demande qui varie fortement entre une nuit d\'hiver rigoureuse et une journée de mi-saison, on associe souvent plusieurs générateurs en <strong>cascade</strong> : le premier démarre pour couvrir la base des besoins, les suivants ne s\'enclenchent que si la demande dépasse sa capacité.<br/><br/>Enfin, quand la chaleur produite ne circule pas directement dans le circuit final (raccordement à un réseau de chaleur, PAC avec circuit primaire séparé), elle transite par un <strong>échangeur</strong>. Son dimensionnement repose sur l\'<strong>écart de température logarithmique moyen (DTLM)</strong>, car l\'écart entre les deux fluides n\'est pas constant le long de l\'échangeur.',
      definitions: [
        { term: 'Chaudière (gaz, fioul, biomasse)', def: 'Générateur qui brûle un combustible pour chauffer l\'eau du circuit de chauffage — voir le rendement de combustion et la distinction PCI/PCS (module A8).' },
        { term: 'Pompe à chaleur (PAC)', def: 'Générateur qui prélève de la chaleur dans un milieu extérieur (air, eau, sol) pour la restituer au circuit de chauffage, caractérisé par son coefficient de performance COP (module A5).' },
        { term: 'Association de générateurs en cascade', def: 'Plusieurs générateurs de puissances différentes, pilotés successivement selon la demande : le premier couvre la base, les suivants s\'enclenchent uniquement si la puissance appelée dépasse la capacité déjà engagée.' },
        { term: 'Échangeur thermique', def: 'Appareil (souvent à plaques) qui transfère la chaleur d\'un fluide primaire chaud vers un fluide secondaire plus froid, sans les mélanger — utilisé par exemple entre un réseau de chaleur urbain et le circuit secondaire d\'un bâtiment.' },
        { term: 'Écart de température logarithmique moyen (DTLM)', def: 'Moyenne représentative de l\'écart de température entre les deux fluides le long de l\'échangeur, calculée à partir des écarts $\\Delta T_1$ et $\\Delta T_2$ relevés à chaque extrémité : $\\Delta T_{LM} = \\dfrac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$.' },
        { term: 'Puissance échangée $P_{\\text{ech}}$', def: 'Puissance thermique transmise à travers l\'échangeur : $P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM}$, avec $K$ le coefficient d\'échange global (W/(m²·K)) et $A$ la surface d\'échange (m²).' }
      ],
      method: {
        title: 'Calculer le DTLM et la puissance d\'un échangeur à contre-courant',
        steps: [
          '<strong>Relever les températures d\'entrée et de sortie</strong> des deux fluides (primaire chaud, secondaire froid), en configuration contre-courant.',
          '<strong>Calculer l\'écart $\\Delta T_1$</strong> à la première extrémité de l\'échangeur (entrée primaire face à sortie secondaire).',
          '<strong>Calculer l\'écart $\\Delta T_2$</strong> à la seconde extrémité (sortie primaire face à entrée secondaire).',
          '<strong>Calculer le DTLM</strong> : $\\Delta T_{LM} = \\dfrac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$ — jamais la simple moyenne arithmétique $(\\Delta T_1+\\Delta T_2)/2$.',
          '<strong>En déduire la puissance échangée</strong> $P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM}$, ou la surface nécessaire $A = P_{\\text{ech}}/(K \\times \\Delta T_{LM})$ pour une puissance visée.'
        ]
      },
      example: {
        statement: 'Un échangeur à plaques, monté en contre-courant, relie un réseau de chaleur urbain (primaire, entrée $80\\,°C$, sortie $50\\,°C$) au circuit secondaire de chauffage d\'un immeuble (entrée $40\\,°C$, sortie $60\\,°C$).<br/><br/>Calculer le DTLM de cet échangeur.',
        steps: [
          'À la première extrémité (entrée primaire / sortie secondaire) : $\\Delta T_1 = 80 - 60 = 20\\,°C$.',
          'À la seconde extrémité (sortie primaire / entrée secondaire) : $\\Delta T_2 = 50 - 40 = 10\\,°C$.',
          '$\\Delta T_{LM} = \\dfrac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)} = \\dfrac{20-10}{\\ln(20/10)} = \\dfrac{10}{\\ln(2)} \\approx \\dfrac{10}{0{,}693} \\approx 14{,}4\\,°C$.'
        ],
        answer: '$\\Delta T_{LM} \\approx 14{,}4\\,°C$ : cette valeur, comprise entre $\\Delta T_1=20\\,°C$ et $\\Delta T_2=10\\,°C$ mais plus proche du plus petit des deux, sert de base au calcul de la puissance réellement échangée.'
      },
      formulas: [
        '$\\Delta T_1$, $\\Delta T_2$ : écarts de température entre les deux fluides, à chaque extrémité de l\'échangeur (contre-courant)',
        '$\\Delta T_{LM} = \\dfrac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$ (écart de température logarithmique moyen)',
        '$P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM}$ (puissance échangée, $K$ en W/(m²·K), $A$ en m²)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Profil de température dans un échangeur contre-courant',
        title: 'Primaire et secondaire : deux courbes décroissantes, écart variable',
        description: 'Le long de l\'échangeur, la température du primaire décroît de 80 à 50 °C, celle du secondaire décroît de 60 à 40 °C (contre-courant). L\'écart entre les deux courbes vaut ΔT1 = 20 °C à une extrémité et ΔT2 = 10 °C à l\'autre : ce n\'est pas la moyenne arithmétique de ces deux écarts qu\'il faut utiliser, mais leur moyenne logarithmique (DTLM).',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="dtlm-graph-title dtlm-graph-desc">
            <title id="dtlm-graph-title">Profil de temperature dans un echangeur a contre-courant</title>
            <desc id="dtlm-graph-desc">Graphique temperature en fonction de la position dans l'echangeur. Deux courbes decroissantes de gauche a droite : le primaire de 80 a 50 degres, le secondaire de 60 a 40 degres. L'ecart vertical entre les deux courbes est plus grand a gauche (delta T1 = 20 degres) qu'a droite (delta T2 = 10 degres).</desc>

            <line class="frame-line" x1="60" y1="230" x2="430" y2="230"></line>
            <line class="guide-line" x1="60" y1="20" x2="60" y2="230"></line>

            <!-- courbe primaire (80 -> 50) -->
            <polyline class="curve-main" points="60,40 245,100 430,160" fill="none"></polyline>
            <text class="annotation-label" x="65" y="32" text-anchor="start">Primaire (réseau de chaleur)</text>

            <!-- courbe secondaire (60 -> 40) -->
            <polyline class="curve-main" points="60,120 245,160 430,200" fill="none"></polyline>
            <text class="annotation-label" x="65" y="215" text-anchor="start">Secondaire (circuit chauffage)</text>

            <!-- ecart delta T1 (gauche) -->
            <line class="guide-line" x1="90" y1="40" x2="90" y2="120"></line>
            <text class="tick-label" x="98" y="82" text-anchor="start">ΔT1 = 20 °C</text>

            <!-- ecart delta T2 (droite) -->
            <line class="guide-line" x1="400" y1="160" x2="400" y2="200"></line>
            <text class="tick-label" x="330" y="185" text-anchor="start">ΔT2 = 10 °C</text>

            <text class="label-soft" x="245" y="250" text-anchor="middle">Position dans l'échangeur (sens du primaire)</text>
            <text class="label-soft" x="55" y="15" text-anchor="start">Température</text>
          </svg>
        `,
        notes: [
          'Les deux courbes sont <strong>décroissantes</strong> dans le sens de circulation du primaire, mais ne se croisent jamais : le primaire reste toujours plus chaud que le secondaire.',
          'L\'écart entre les deux courbes n\'est <strong>pas constant</strong> : il vaut $\\Delta T_1 = 20\\,°C$ à une extrémité et seulement $\\Delta T_2 = 10\\,°C$ à l\'autre.',
          'C\'est justement parce que cet écart varie qu\'on utilise le <strong>DTLM</strong> (moyenne logarithmique) plutôt qu\'une simple moyenne arithmétique des deux écarts.'
        ],
        reading: 'Repère les deux courbes décroissantes et l\'écart vertical entre elles à chaque extrémité : ΔT1 (à gauche, où le primaire entre) est plus grand que ΔT2 (à droite, où le primaire sort).',
        caption: 'Profil de température le long d\'un échangeur à contre-courant : les écarts ΔT1 et ΔT2 servent de base au calcul du DTLM.'
      },
      recap: [
        'La production de chauffage combine des générateurs variés : <strong>chaudières</strong>, <strong>PAC</strong>, raccordement à un <strong>réseau de chaleur</strong>.',
        'Pour couvrir une demande variable, on associe souvent plusieurs générateurs en <strong>cascade</strong> : chacun ne s\'enclenche que si les précédents ne suffisent plus.',
        'Un <strong>échangeur</strong> transfère la chaleur entre deux circuits sans les mélanger — son dimensionnement dépend du DTLM, pas d\'une simple moyenne des écarts de température.',
        '$\\Delta T_{LM} = \\dfrac{\\Delta T_1 - \\Delta T_2}{\\ln(\\Delta T_1/\\Delta T_2)}$, toujours compris entre $\\Delta T_1$ et $\\Delta T_2$, plus proche du plus petit des deux.',
        'La puissance échangée $P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM}$ permet de dimensionner la surface d\'échange nécessaire pour une puissance donnée.'
      ],
      piege: 'Le piège classique est d\'utiliser la moyenne arithmétique $(\\Delta T_1+\\Delta T_2)/2$ à la place du DTLM : dans l\'exemple ci-dessus, la moyenne arithmétique donnerait $15\\,°C$ contre $14{,}4\\,°C$ pour le DTLM réel — un écart qui semble faible mais qui, répété sur toute une étude de dimensionnement, conduit à sous-estimer la surface d\'échange nécessaire. La moyenne logarithmique est <strong>toujours inférieure ou égale</strong> à la moyenne arithmétique des deux écarts, jamais l\'inverse.'
    },

    quiz: [
      {
        q: 'Pourquoi utilise-t-on le DTLM plutôt que la moyenne arithmétique des écarts de température dans un échangeur ?',
        options: [
          'Parce que c\'est plus simple à calculer',
          'Parce que l\'écart de température entre les deux fluides varie le long de l\'échangeur, et n\'évolue pas de façon linéaire',
          'Parce que la moyenne arithmétique est toujours fausse',
          'Parce que le DTLM ne s\'applique qu\'aux chaudières'
        ],
        answer: 1,
        correction: 'L\'écart de température entre primaire et secondaire évolue de façon logarithmique (pas linéaire) le long de l\'échangeur : le DTLM en tient compte, contrairement à une simple moyenne arithmétique.'
      },
      {
        q: 'L\'association de plusieurs générateurs en cascade a pour but principal :',
        options: [
          'De réduire le nombre total de générateurs installés',
          'D\'adapter la puissance totale fournie à une demande de chauffage qui varie dans le temps',
          'De remplacer systématiquement les chaudières par des PAC',
          'D\'éviter tout calcul de DTLM'
        ],
        answer: 1,
        correction: 'La cascade permet d\'enclencher successivement les générateurs selon le besoin réel : le premier couvre la base, les suivants ne démarrent que si la demande dépasse déjà la capacité engagée.'
      },
      {
        q: 'Dans la formule $\\Delta T_{LM} = (\\Delta T_1 - \\Delta T_2)/\\ln(\\Delta T_1/\\Delta T_2)$, la valeur obtenue est toujours :',
        options: [
          'Supérieure à $\\Delta T_1$',
          'Inférieure à $\\Delta T_2$',
          'Comprise entre $\\Delta T_2$ et $\\Delta T_1$, plus proche du plus petit des deux',
          'Égale à $\\Delta T_1 \\times \\Delta T_2$'
        ],
        answer: 2,
        correction: 'Le DTLM est toujours compris entre les deux écarts extrêmes de l\'échangeur, et il est mathématiquement plus proche du plus petit des deux (il est toujours inférieur ou égal à leur moyenne arithmétique).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une sous-station reliant un réseau de chaleur urbain au circuit secondaire d\'un immeuble',
          'un échangeur à plaques entre le circuit primaire d\'une PAC et le circuit de distribution',
          'un échangeur de récupération sur une chaufferie collective',
          'un échangeur reliant une chaudière biomasse à un réseau de chauffage urbain'
        ]);
        const TpIn = rand(70, 90);
        const TpOut = rand(TpIn - 35, TpIn - 20);
        let TsOut = rand(TpOut + 5, TpIn - 5);
        const TsIn = rand(30, TpOut - 5);
        if (TpIn - TsOut === TpOut - TsIn) { TsOut -= 1; }
        const DT1 = TpIn - TsOut;
        const DT2 = TpOut - TsIn;
        const DTLM = parseFloat(((DT1 - DT2) / Math.log(DT1 / DT2)).toFixed(1));
        return {
          statement: `Dans ${contexte}, l'échangeur à contre-courant relie un primaire (entrée $${TpIn}\\,°C$, sortie $${TpOut}\\,°C$) à un secondaire (entrée $${TsIn}\\,°C$, sortie $${TsOut}\\,°C$).<br/><br/>Calcule le DTLM de cet échangeur (en °C, arrondi au dixième).`,
          answer: DTLM,
          tolerance: 0.5,
          unit: '°C',
          hint: 'Calcule d\'abord $\\Delta T_1$ (entrée primaire / sortie secondaire) et $\\Delta T_2$ (sortie primaire / entrée secondaire), puis applique la formule du DTLM.',
          solution: [
            `$\\Delta T_1 = ${TpIn} - ${TsOut} = ${DT1}\\,°C$ (entrée primaire / sortie secondaire).`,
            `$\\Delta T_2 = ${TpOut} - ${TsIn} = ${DT2}\\,°C$ (sortie primaire / entrée secondaire).`,
            `$\\Delta T_{LM} = \\dfrac{${DT1}-${DT2}}{\\ln(${DT1}/${DT2})} \\approx ${fr(DTLM, 1)}\\,°C$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un échangeur à plaques, en contre-courant, relie un réseau de chaleur urbain (primaire, entrée $75\\,°C$, sortie $45\\,°C$) au circuit secondaire de chauffage d\'un groupe scolaire (entrée $35\\,°C$, sortie $55\\,°C$). Le coefficient d\'échange global de l\'échangeur est $K = 2\\,800$ W/(m²·K), pour une surface d\'échange $A = 4$ m².',
      tasks: [
        'Calculer les écarts de température $\\Delta T_1$ et $\\Delta T_2$ aux deux extrémités de l\'échangeur.',
        'Calculer le DTLM de cet échangeur.',
        'Calculer la puissance échangée $P_{\\text{ech}}$.',
        'Le groupe scolaire a besoin d\'une puissance de $50$ kW en pointe hivernale. Cet échangeur suffit-il ? Si un second générateur (chaudière d\'appoint) est nécessaire, expliquer selon quel principe il devrait fonctionner par rapport au réseau de chaleur déjà raccordé.'
      ],
      solutions: [
        '$\\Delta T_1 = 75 - 55 = 20\\,°C$ (entrée primaire / sortie secondaire). $\\Delta T_2 = 45 - 35 = 10\\,°C$ (sortie primaire / entrée secondaire).',
        '$\\Delta T_{LM} = \\dfrac{20-10}{\\ln(20/10)} = \\dfrac{10}{\\ln(2)} \\approx 14{,}4\\,°C$.',
        '$P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM} = 2\\,800 \\times 4 \\times 14{,}4 \\approx 161\\,280$ W, soit environ $161{,}3$ kW.',
        'L\'échangeur peut transmettre environ $161$ kW, largement au-dessus des $50$ kW requis en pointe : il n\'est donc <strong>pas nécessaire</strong> d\'ajouter un second générateur ici, le réseau de chaleur urbain couvre seul le besoin. Si un appoint avait été nécessaire (échangeur sous-dimensionné), il aurait fallu le faire fonctionner en <strong>cascade</strong> : le réseau de chaleur urbain (moins cher, souvent priorisé) couvrant la base des besoins, la chaudière d\'appoint ne s\'enclenchant que lors des pointes dépassant la capacité de l\'échangeur.'
      ],
      finalAnswer: '$\\Delta T_{LM} \\approx 14{,}4\\,°C$ et $P_{\\text{ech}} \\approx 161{,}3$ kW : cet échangeur seul couvre largement les $50$ kW de pointe du groupe scolaire, sans besoin d\'un générateur d\'appoint en cascade.'
    },

    evaluation: {
      title: 'Évaluation — Production (chauffage)',
      duration: '20 min',
      questions: [
        {
          statement: 'Un échangeur contre-courant présente $\\Delta T_1 = 30\\,°C$ et $\\Delta T_2 = 10\\,°C$. Calculer le DTLM (en °C, arrondi au dixième).',
          type: 'numeric',
          answer: 18.2,
          tolerance: 0.5,
          unit: '°C',
          points: 3,
          correction: '$\\Delta T_{LM} = (30-10)/\\ln(30/10) = 20/\\ln(3) \\approx 20/1{,}099 \\approx 18{,}2\\,°C$.'
        },
        {
          statement: 'Pour cet échangeur, avec $K = 2\\,000$ W/(m²·K) et $A = 5$ m², calculer la puissance échangée $P_{\\text{ech}}$ (en kW, arrondi à l\'unité).',
          type: 'numeric',
          answer: 182,
          tolerance: 5,
          unit: 'kW',
          points: 3,
          correction: '$P_{\\text{ech}} = K \\times A \\times \\Delta T_{LM} = 2\\,000 \\times 5 \\times 18{,}2 = 182\\,000$ W, soit $182$ kW.'
        },
        {
          statement: 'Le rôle d\'un échangeur thermique dans une installation de chauffage est de :',
          type: 'multiple-choice',
          options: [
            'Mélanger le fluide primaire et le fluide secondaire',
            'Transférer la chaleur d\'un fluide primaire à un fluide secondaire, sans les mélanger',
            'Remplacer entièrement le générateur de chauffage',
            'Réguler uniquement la pression du circuit'
          ],
          answer: 1,
          points: 2,
          correction: 'Un échangeur transfère la chaleur d\'un fluide à un autre sans les mélanger — ce qui permet par exemple de séparer un réseau de chaleur urbain du circuit secondaire d\'un bâtiment.'
        },
        {
          statement: 'Dans une association de générateurs en cascade, le principe de fonctionnement est :',
          type: 'multiple-choice',
          options: [
            'Tous les générateurs démarrent systématiquement ensemble',
            'Le premier générateur couvre la base des besoins, les suivants s\'enclenchent seulement si la demande dépasse sa capacité',
            'Chaque générateur fonctionne à puissance fixe en permanence',
            'Le générateur le plus puissant démarre toujours en premier'
          ],
          answer: 1,
          points: 3,
          correction: 'La cascade adapte la puissance totale fournie à la demande réelle : le premier générateur couvre la base, les suivants ne s\'enclenchent que si nécessaire, ce qui évite le surdimensionnement permanent.'
        },
        {
          statement: 'Utiliser la moyenne arithmétique des écarts de température au lieu du DTLM, dans le dimensionnement d\'un échangeur, conduit généralement à :',
          type: 'multiple-choice',
          options: [
            'Exactement le même résultat que le DTLM',
            'Surestimer l\'écart moyen réel, donc sous-dimensionner la surface d\'échange nécessaire',
            'Sous-estimer systématiquement la puissance échangée',
            'N\'avoir aucun impact sur le dimensionnement'
          ],
          answer: 1,
          points: 3,
          correction: 'La moyenne arithmétique des deux écarts est toujours supérieure ou égale au DTLM réel : l\'utiliser surestime l\'écart moyen, donc conduit à sous-dimensionner la surface d\'échange nécessaire pour la puissance visée.'
        }
      ]
    }
  });
