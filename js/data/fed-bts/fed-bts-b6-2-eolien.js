/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b6-2-eolien.js
   BTS FED — S8-B6-2 Éolien — puissance disponible du vent, limite de Betz
   Source (limite de Betz Cp_max = 16/27 ≈ 0,593 ; Cp réel ~0,35-0,45 en exploitation) :
   constante physique classique, cf. théorie de Betz (1919) — vérifiée sans source web supplémentaire.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b6-2-eolien',
    level: 3, subject: 'fed',
    icon: '🍃',
    title: 'Éolien',
    subtitle: 'Puissance disponible du vent, limite de Betz, coefficient de puissance',
    keywords: ['Éolienne', 'Limite de Betz', 'Coefficient de puissance', 'Vitesse du vent'],
    physics: 'Le vent transporte une énergie cinétique proportionnelle au <strong>cube de sa vitesse</strong> : doubler la vitesse du vent multiplie par <strong>huit</strong> la puissance disponible. Mais aucune éolienne ne peut extraire toute cette puissance — une limite physique fondamentale, la <strong>limite de Betz</strong>, plafonne le rendement de toute éolienne à moins de $60\\,\\%$.',

    cours: {
      intro: 'Une <strong>éolienne</strong> convertit l\'énergie cinétique du vent en énergie mécanique (rotation du rotor), elle-même convertie en électricité par une génératrice. La puissance que le vent transporte à travers la surface balayée par les pales dépend de trois facteurs : la masse volumique de l\'air, la surface balayée par le rotor, et surtout la vitesse du vent — élevée au <strong>cube</strong>.<br/><br/>Mais une éolienne ne peut jamais capter <strong>toute</strong> cette puissance disponible : si elle le faisait, l\'air s\'arrêterait complètement derrière le rotor, ce qui est physiquement impossible (l\'air doit continuer à s\'écouler). Le physicien allemand Albert Betz a démontré en 1919 qu\'aucune éolienne ne peut extraire plus de $16/27 \\approx 59{,}3\\,\\%$ de la puissance disponible — c\'est la <strong>limite de Betz</strong>, un plafond théorique indépassable.<br/><br/>En pratique, les éoliennes modernes atteignent un <strong>coefficient de puissance $C_p$</strong> réel de l\'ordre de $0{,}35$ à $0{,}45$, nettement en dessous de la limite de Betz, du fait des pertes mécaniques, aérodynamiques et électriques de la chaîne de conversion.',
      definitions: [
        { term: 'Puissance disponible du vent $P_{\\text{dispo}}$', def: 'Puissance cinétique totale transportée par le vent à travers la surface balayée par le rotor : $P_{\\text{dispo}} = \\dfrac{1}{2} \\times \\rho \\times S \\times v^3$, avec $\\rho$ la masse volumique de l\'air ($1{,}225$ kg/m³ à 15 °C), $S$ la surface balayée (m²) et $v$ la vitesse du vent (m/s).' },
        { term: 'Surface balayée $S$', def: 'Surface du disque décrit par la rotation des pales : $S = \\pi \\times (D/2)^2$, avec $D$ le diamètre du rotor.' },
        { term: 'Limite de Betz', def: 'Fraction maximale théorique de la puissance disponible qu\'une éolienne peut extraire : $C_{p,\\text{max}} = 16/27 \\approx 0{,}593$, indépassable quelle que soit la technologie.' },
        { term: 'Coefficient de puissance $C_p$', def: 'Rapport entre la puissance réellement récupérée et la puissance disponible : $C_p = P_{\\text{récupérée}}/P_{\\text{dispo}}$, toujours inférieur à la limite de Betz — valeur usuelle $0{,}35$ à $0{,}45$ pour une éolienne moderne.' },
        { term: 'Puissance récupérée $P_{\\text{récupérée}}$', def: 'Puissance mécanique réellement extraite par le rotor : $P_{\\text{récupérée}} = C_p \\times P_{\\text{dispo}}$.' }
      ],
      method: {
        title: 'Calculer la puissance récupérée par une éolienne',
        steps: [
          '<strong>Calculer la surface balayée</strong> $S = \\pi \\times (D/2)^2$, à partir du diamètre du rotor.',
          '<strong>Relever la vitesse du vent</strong> $v$ (m/s) au moyeu de l\'éolienne.',
          '<strong>Calculer la puissance disponible</strong> $P_{\\text{dispo}} = \\dfrac{1}{2} \\times \\rho \\times S \\times v^3$, avec $\\rho \\approx 1{,}225$ kg/m³.',
          '<strong>Appliquer le coefficient de puissance</strong> $C_p$ réel de la machine (donnée constructeur, $0{,}35$ à $0{,}45$).',
          '<strong>Calculer la puissance récupérée</strong> $P_{\\text{récupérée}} = C_p \\times P_{\\text{dispo}}$, en vérifiant que $C_p$ reste toujours inférieur à la limite de Betz ($0{,}593$).'
        ]
      },
      example: {
        statement: 'Une éolienne a un rotor de diamètre $D=80$ m, exposée à un vent $v=8$ m/s, avec un coefficient de puissance réel $C_p=0{,}40$.<br/><br/>Calculer la puissance disponible du vent puis la puissance récupérée par cette éolienne.',
        steps: [
          'Surface balayée : $S = \\pi \\times (80/2)^2 = \\pi \\times 40^2 = \\pi \\times 1\\,600 \\approx 5\\,027$ m².',
          '$P_{\\text{dispo}} = 0{,}5 \\times 1{,}225 \\times 5\\,027 \\times 8^3 = 0{,}5 \\times 1{,}225 \\times 5\\,027 \\times 512 \\approx 1\\,576\\,000$ W $\\approx 1{,}58$ MW.',
          '$P_{\\text{récupérée}} = C_p \\times P_{\\text{dispo}} = 0{,}40 \\times 1{,}58 \\approx 0{,}63$ MW.'
        ],
        answer: '$P_{\\text{récupérée}} \\approx 630$ kW : moins de la moitié de la puissance disponible du vent, un ordre de grandeur cohérent avec une éolienne terrestre de taille moyenne à vent modéré.'
      },
      formulas: [
        '$P_{\\text{dispo}} = \\dfrac{1}{2} \\times \\rho \\times S \\times v^3$ (puissance disponible du vent, en W)',
        '$C_{p,\\text{max}} = 16/27 \\approx 0{,}593$ (limite de Betz, indépassable)',
        '$P_{\\text{récupérée}} = C_p \\times P_{\\text{dispo}}$ (puissance mécanique récupérée)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'La puissance du vent croît avec le cube de la vitesse',
        title: 'Une courbe qui s\'envole : doubler v multiplie P par 8',
        description: 'La puissance disponible du vent suit une loi cubique en fonction de la vitesse : une faible variation de vitesse produit une variation beaucoup plus importante de puissance disponible.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="eol-graph-title eol-graph-desc">
            <title id="eol-graph-title">Puissance disponible du vent en fonction de la vitesse</title>
            <desc id="eol-graph-desc">Graphique puissance disponible en fonction de la vitesse du vent. Courbe cubique tres plate a basse vitesse puis qui s'envole a mesure que la vitesse augmente, illustrant que doubler la vitesse multiplie la puissance par huit.</desc>

            <line class="frame-line" x1="55" y1="220" x2="440" y2="220"></line>
            <line class="guide-line" x1="55" y1="20" x2="55" y2="220"></line>

            <path class="curve-main" d="M55,215 C 150,213 220,200 280,160 C 340,110 390,50 420,25" fill="none"></path>

            <line class="guide-line" x1="200" y1="20" x2="200" y2="220"></line>
            <line class="guide-line" x1="340" y1="20" x2="340" y2="220"></line>
            <text class="tick-label" x="200" y="235" text-anchor="middle">v</text>
            <text class="tick-label" x="340" y="235" text-anchor="middle">2v</text>

            <text class="annotation-label" x="345" y="60" text-anchor="start">×8</text>

            <text class="label-soft" x="245" y="15" text-anchor="middle">P disponible</text>
          </svg>
        `,
        notes: [
          'La courbe reste <strong>presque plate</strong> à basse vitesse, puis <strong>s\'envole</strong> à mesure que $v$ augmente.',
          'Entre $v$ et $2v$, la puissance disponible est multipliée par $2^3=8$, pas par $2$.',
          'Cette loi cubique explique pourquoi le choix du <strong>site</strong> (vitesse moyenne du vent) est le facteur le plus déterminant de la rentabilité d\'un projet éolien.'
        ],
        reading: 'Compare la hauteur de la courbe en $v$ et en $2v$ : l\'écart est bien plus grand qu\'un simple doublement, signature de la loi en $v^3$.',
        caption: 'La puissance disponible du vent croît avec le cube de sa vitesse : un site légèrement plus venté change radicalement la rentabilité d\'un projet éolien.'
      },
      recap: [
        'La puissance disponible du vent $P_{\\text{dispo}} = \\dfrac{1}{2}\\rho S v^3$ croît avec le <strong>cube</strong> de la vitesse du vent.',
        'La <strong>limite de Betz</strong> ($16/27 \\approx 0{,}593$) plafonne théoriquement le rendement de toute éolienne, quelle que soit sa technologie.',
        'Le <strong>coefficient de puissance</strong> réel $C_p$ d\'une éolienne moderne se situe entre $0{,}35$ et $0{,}45$.',
        'La puissance récupérée $P_{\\text{récupérée}} = C_p \\times P_{\\text{dispo}}$ reste toujours inférieure à la limite de Betz appliquée à $P_{\\text{dispo}}$.',
        'Le choix du site (vitesse moyenne du vent) pèse davantage sur la production qu\'une amélioration marginale du coefficient de puissance.'
      ],
      piege: 'Le piège classique est d\'oublier l\'exposant $3$ sur la vitesse du vent : une erreur fréquente consiste à multiplier $P_{\\text{dispo}}$ directement par $v$ au lieu de $v^3$, ce qui sous-estime massivement l\'effet d\'un site plus venté. Autre confusion : la limite de Betz ($0{,}593$) est un <strong>plafond théorique</strong>, pas une valeur atteinte en pratique — le coefficient de puissance réel d\'une éolienne, toujours inférieur, doit être vérifié sur la fiche technique du constructeur, jamais supposé égal à la limite de Betz.'
    },

    quiz: [
      {
        q: 'Si la vitesse du vent double, la puissance disponible du vent est multipliée par :',
        options: [
          '2',
          '4',
          '8',
          '16'
        ],
        answer: 2,
        correction: 'La puissance disponible dépend du cube de la vitesse ($v^3$) : doubler $v$ multiplie $P_{\\text{dispo}}$ par $2^3=8$.'
      },
      {
        q: 'La limite de Betz énonce que :',
        options: [
          'Une éolienne peut théoriquement extraire 100 % de la puissance disponible du vent',
          'Aucune éolienne ne peut extraire plus d\'environ 59,3 % de la puissance disponible du vent',
          'Le coefficient de puissance réel dépasse toujours la limite théorique',
          'La puissance du vent ne dépend pas de la surface balayée'
        ],
        answer: 1,
        correction: 'La limite de Betz fixe un plafond théorique indépassable de $16/27 \\approx 59{,}3\\,\\%$ de la puissance disponible, quelle que soit la technologie de l\'éolienne.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une éolienne terrestre de moyenne puissance',
          'un parc éolien en zone côtière',
          'une éolienne installée sur un site à vent modéré',
          'un projet éolien terrestre en plaine'
        ]);
        const D = pick([50, 60, 70, 80, 90]);
        const v = rand(6, 11);
        const Cp = randFloat(0.35, 0.45, 2);
        const S = parseFloat((Math.PI * Math.pow(D / 2, 2)).toFixed(1));
        const Pdispo = 0.5 * 1.225 * S * Math.pow(v, 3);
        const Precup = Math.round(Cp * Pdispo);
        return {
          statement: `Dans ${contexte}, le rotor a un diamètre $D=${D}$ m, exposé à un vent $v=${v}$ m/s, avec un coefficient de puissance $C_p=${fr(Cp, 2)}$ ($\\rho=1{,}225$ kg/m³).<br/><br/>Calcule la puissance récupérée $P_{\\text{récupérée}}$ (en kW, arrondie à l'unité).`,
          answer: Math.round(Precup / 1000),
          tolerance: Math.max(5, Math.round(Precup / 1000 * 0.03)),
          unit: 'kW',
          hint: 'Calcule d\'abord $S=\\pi(D/2)^2$, puis $P_{\\text{dispo}}=0{,}5\\rho S v^3$, puis $P_{\\text{récupérée}}=C_p \\times P_{\\text{dispo}}$.',
          solution: [
            `Surface balayée : $S = \\pi \\times (${D}/2)^2 \\approx ${fr(S, 1)}$ m².`,
            `$P_{\\text{dispo}} = 0{,}5 \\times 1{,}225 \\times ${fr(S, 1)} \\times ${v}^3 \\approx ${fr(Pdispo / 1000, 1)}$ kW.`,
            `$P_{\\text{récupérée}} = ${fr(Cp, 2)} \\times ${fr(Pdispo / 1000, 1)} \\approx ${fr(Precup / 1000, 1)}$ kW.`
          ]
        };
      }
    },

    probleme: {
      context: 'Deux sites sont comparés pour l\'implantation d\'une même éolienne (rotor $D=70$ m, $C_p=0{,}42$) : le site A a une vitesse moyenne de vent $v_A=6$ m/s, le site B une vitesse moyenne $v_B=9$ m/s ($\\rho=1{,}225$ kg/m³).',
      tasks: [
        'Calculer la surface balayée $S$ du rotor.',
        'Calculer la puissance récupérée $P_{\\text{récupérée,A}}$ sur le site A.',
        'Calculer la puissance récupérée $P_{\\text{récupérée,B}}$ sur le site B.',
        'Calculer le rapport $P_{\\text{récupérée,B}}/P_{\\text{récupérée,A}}$ et commenter, en une phrase, l\'importance du choix du site pour un projet éolien.'
      ],
      solutions: [
        '$S = \\pi \\times (70/2)^2 = \\pi \\times 35^2 = \\pi \\times 1\\,225 \\approx 3\\,848$ m².',
        '$P_{\\text{dispo,A}} = 0{,}5 \\times 1{,}225 \\times 3\\,848 \\times 6^3 = 0{,}5\\times1{,}225\\times3\\,848\\times216 \\approx 509\\,000$ W. $P_{\\text{récupérée,A}} = 0{,}42\\times509 \\approx 214$ kW.',
        '$P_{\\text{dispo,B}} = 0{,}5 \\times 1{,}225 \\times 3\\,848 \\times 9^3 = 0{,}5\\times1{,}225\\times3\\,848\\times729 \\approx 1\\,717\\,000$ W. $P_{\\text{récupérée,B}} = 0{,}42\\times1\\,717 \\approx 721$ kW.',
        'Rapport : $721/214 \\approx 3{,}37$. Alors que la vitesse du vent n\'a été multipliée que par $1{,}5$ ($9/6$), la puissance récupérée est multipliée par $3{,}37$ ($\\approx 1{,}5^3$) : le choix du site (vitesse moyenne du vent) est de loin le facteur le plus déterminant de la rentabilité d\'un projet éolien, bien avant le diamètre du rotor ou le coefficient de puissance.'
      ],
      finalAnswer: 'La même éolienne produit environ $214$ kW sur le site A contre $721$ kW sur le site B — un facteur $3{,}4$ pour une vitesse de vent seulement $1{,}5$ fois plus élevée, signature directe de la loi en $v^3$.'
    },

    evaluation: {
      title: 'Évaluation — Éolien',
      duration: '20 min',
      questions: [
        {
          statement: 'Un rotor de diamètre $D=60$ m est exposé à un vent $v=7$ m/s ($\\rho=1{,}225$ kg/m³). Calculer la puissance disponible $P_{\\text{dispo}}$ (en kW, arrondie à l\'unité).',
          type: 'numeric',
          answer: 594,
          tolerance: 30,
          unit: 'kW',
          points: 3,
          correction: '$S=\\pi\\times30^2\\approx2\\,827$ m². $P_{\\text{dispo}}=0{,}5\\times1{,}225\\times2\\,827\\times7^3\\approx594\\,000$ W $\\approx594$ kW.'
        },
        {
          statement: 'Pour cette puissance disponible, avec $C_p=0{,}40$, calculer la puissance récupérée $P_{\\text{récupérée}}$ (en kW, arrondie à l\'unité).',
          type: 'numeric',
          answer: 238,
          tolerance: 15,
          unit: 'kW',
          points: 2,
          correction: '$P_{\\text{récupérée}}=0{,}40\\times594\\approx238$ kW.'
        },
        {
          statement: 'La limite de Betz ($16/27\\approx0{,}593$) correspond à :',
          type: 'multiple-choice',
          options: [
            'Le coefficient de puissance moyen des éoliennes actuellement installées',
            'La fraction maximale théorique de la puissance disponible qu\'une éolienne peut extraire, quelle que soit sa technologie',
            'Le rendement électrique de la génératrice uniquement',
            'Un coefficient qui ne s\'applique qu\'aux éoliennes offshore'
          ],
          answer: 1,
          points: 2,
          correction: 'La limite de Betz est un plafond physique théorique, indépassable, sur la fraction de puissance disponible extractible par une éolienne — les éoliennes réelles restent en dessous, avec $C_p \\approx 0{,}35$ à $0{,}45$.'
        },
        {
          statement: 'Pourquoi le choix du site (vitesse moyenne du vent) est-il si déterminant pour la rentabilité d\'un projet éolien ?',
          type: 'multiple-choice',
          options: [
            'Parce que la puissance disponible du vent est proportionnelle au carré de la vitesse',
            'Parce que la puissance disponible du vent est proportionnelle au cube de la vitesse : une faible variation de vitesse a un effet démultiplié',
            'Parce que la vitesse du vent n\'a aucun effet sur la puissance récupérée',
            'Parce que la limite de Betz varie selon le site'
          ],
          answer: 1,
          points: 3,
          correction: 'La loi en $v^3$ amplifie fortement l\'effet d\'un site plus venté : une vitesse moyenne un peu plus élevée peut multiplier la puissance disponible par un facteur bien supérieur à ce que suggérerait une simple proportionnalité.'
        }
      ]
    }
  });
