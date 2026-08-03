/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-1-compresseurs-volumetriques.js
   BTS FED — S8-B5-1 Compresseurs volumétriques — cylindrée, rendement volumétrique
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-1-compresseurs-volumetriques',
    level: 3, subject: 'fed',
    icon: '🗜️',
    title: 'Compresseurs volumétriques',
    subtitle: 'Piston, scroll, vis : cylindrée, débit balayé, rendement volumétrique',
    keywords: ['Compresseur à piston', 'Scroll', 'Vis', 'Cylindrée', 'Rendement volumétrique'],
    physics: 'Un <strong>compresseur volumétrique</strong> aspire un volume de fluide frigorigène défini par sa géométrie (module A5), puis le comprime en réduisant mécaniquement ce volume. Mais le débit réellement aspiré est toujours <strong>inférieur</strong> au débit théorique balayé par la géométrie du compresseur — un écart quantifié par le <strong>rendement volumétrique</strong>.',

    cours: {
      intro: 'Un <strong>compresseur volumétrique</strong> comprime le fluide frigorigène en réduisant mécaniquement le volume dans lequel il est enfermé, contrairement à un compresseur centrifuge (module B5-2) qui accélère le fluide par force centrifuge. Trois technologies dominent le marché : le compresseur <strong>à piston</strong> (mouvement alternatif dans un cylindre, technologie la plus ancienne et la plus répandue sur les petites puissances), le compresseur <strong>scroll</strong> (deux spirales excentrées qui emprisonnent puis réduisent progressivement des poches de gaz, silencieux et fiable) et le compresseur à <strong>vis</strong> (deux rotors hélicoïdaux imbriqués, adapté aux fortes puissances industrielles).<br/><br/>Chacun a besoin d\'une <strong>lubrification</strong> (huile entraînée avec le fluide frigorigène, à séparer en aval) pour réduire les frottements mécaniques entre pièces en mouvement.<br/><br/>Quelle que soit la technologie, le <strong>débit théorique balayé</strong> par le compresseur (déduit de sa géométrie et de sa vitesse de rotation) est toujours supérieur au <strong>débit réellement aspiré</strong> : une partie du volume balayé ne se traduit jamais en aspiration effective de gaz neuf, notamment à cause du volume mort (l\'espace résiduel entre piston et culasse en fin de refoulement) où du gaz comprimé résiduel se ré-détend avant la course d\'aspiration suivante.',
      definitions: [
        { term: 'Cylindrée $V_s$', def: 'Volume balayé par le compresseur en une rotation, déterminé par sa géométrie (course × section pour un piston, volume des poches pour un scroll), en cm³ ou L.' },
        { term: 'Débit théorique balayé $Q_{th}$', def: 'Débit que le compresseur balaierait si tout le volume balayé se traduisait en gaz réellement aspiré : $Q_{th} = V_s \\times N$, avec $N$ la vitesse de rotation (tr/min).' },
        { term: 'Volume mort (espace nuisible)', def: 'Volume résiduel qui subsiste en fin de course de refoulement (entre piston et culasse pour un compresseur à piston) : le gaz comprimé qui y reste doit d\'abord se ré-détendre avant que l\'aspiration de gaz neuf ne puisse recommencer.' },
        { term: 'Rendement volumétrique $\\eta_v$', def: 'Rapport entre le débit réellement aspiré et le débit théorique balayé : $\\eta_v = Q_{\\text{réel}}/Q_{th}$, sans unité (souvent en %) — diminue lorsque le taux de compression augmente, typiquement $0{,}70$ à $0{,}95$ selon la technologie et le point de fonctionnement.' },
        { term: 'Débit réel aspiré $Q_{\\text{réel}}$', def: 'Débit volumique réellement aspiré par le compresseur : $Q_{\\text{réel}} = \\eta_v \\times Q_{th} = \\eta_v \\times V_s \\times N$.' }
      ],
      method: {
        title: 'Calculer le débit réel aspiré par un compresseur volumétrique',
        steps: [
          '<strong>Relever la cylindrée</strong> $V_s$ du compresseur (donnée constructeur, en cm³ ou L).',
          '<strong>Relever la vitesse de rotation</strong> $N$ (tr/min).',
          '<strong>Calculer le débit théorique balayé</strong> $Q_{th} = V_s \\times N$.',
          '<strong>Relever ou estimer le rendement volumétrique</strong> $\\eta_v$ (donnée constructeur, dépend du taux de compression du point de fonctionnement).',
          '<strong>Calculer le débit réel aspiré</strong> $Q_{\\text{réel}} = \\eta_v \\times Q_{th}$, valeur qui conditionne directement la puissance frigorifique réellement délivrée par le compresseur (module A5).'
        ]
      },
      example: {
        statement: 'Un compresseur à piston a une cylindrée $V_s=50$ cm³ et tourne à $N=1\\,450$ tr/min, avec un rendement volumétrique $\\eta_v=0{,}82$ à ce point de fonctionnement.<br/><br/>Calculer le débit théorique balayé puis le débit réel aspiré (en m³/h).',
        steps: [
          'Débit théorique balayé : $Q_{th} = V_s \\times N = 50 \\times 1\\,450 = 72\\,500$ cm³/min $= 72{,}5$ L/min.',
          'Conversion en m³/h : $Q_{th} = 72{,}5 \\times 60/1\\,000 = 4{,}35$ m³/h.',
          'Débit réel aspiré : $Q_{\\text{réel}} = \\eta_v \\times Q_{th} = 0{,}82 \\times 4{,}35 \\approx 3{,}57$ m³/h.'
        ],
        answer: '$Q_{\\text{réel}} \\approx 3{,}57$ m³/h : environ $18\\,\\%$ du volume balayé par la géométrie du compresseur ne se traduit jamais en aspiration effective de gaz neuf, à cause du volume mort et des fuites internes.'
      },
      formulas: [
        '$Q_{th} = V_s \\times N$ (débit théorique balayé, avec $V_s$ en volume par tour et $N$ en tr/min)',
        '$\\eta_v = Q_{\\text{réel}}/Q_{th}$ (rendement volumétrique, sans unité)',
        '$Q_{\\text{réel}} = \\eta_v \\times V_s \\times N$ (débit réel aspiré)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Rendement volumétrique selon le taux de compression',
        title: 'Le rendement volumétrique chute quand le taux de compression augmente',
        description: 'Plus le taux de compression (rapport entre haute et basse pression) augmente, plus le rendement volumétrique diminue : le gaz résiduel du volume mort se ré-détend sur une plus grande partie de la course, réduisant d\'autant la part de la course disponible pour aspirer du gaz neuf.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="comp-graph-title comp-graph-desc">
            <title id="comp-graph-title">Rendement volumetrique en fonction du taux de compression</title>
            <desc id="comp-graph-desc">Graphique rendement volumetrique en fonction du taux de compression. Courbe decroissante : proche de 1 pour un faible taux de compression, elle diminue progressivement a mesure que le taux de compression augmente.</desc>

            <line class="frame-line" x1="55" y1="210" x2="440" y2="210"></line>
            <line class="guide-line" x1="55" y1="20" x2="55" y2="210"></line>

            <path class="curve-main" d="M60,45 C 150,60 250,100 340,150 C 380,172 410,188 425,198" fill="none"></path>

            <text class="tick-label" x="45" y="50" text-anchor="end">1,0</text>
            <text class="tick-label" x="45" y="205" text-anchor="end">0</text>
            <text class="annotation-label" x="330" y="140" text-anchor="start">ηv diminue</text>

            <text class="label-soft" x="245" y="230" text-anchor="middle">Taux de compression</text>
            <text class="label-soft" x="50" y="15" text-anchor="start">ηv</text>
          </svg>
        `,
        notes: [
          'À faible taux de compression, le rendement volumétrique reste <strong>proche de $1$</strong> : le volume mort a peu d\'effet.',
          'Quand le taux de compression augmente (par exemple par temps très froid, où la basse pression chute), le rendement volumétrique <strong>diminue</strong>.',
          'Cette chute explique pourquoi la puissance frigorifique réelle d\'une PAC (module A5) s\'effondre par grand froid : moins de gaz est réellement aspiré à chaque tour.'
        ],
        reading: 'Repère la décroissance de la courbe de gauche à droite : plus le taux de compression est élevé (colonne de droite), plus le rendement volumétrique chute.',
        caption: 'Le rendement volumétrique d\'un compresseur diminue lorsque le taux de compression augmente, à cause du volume mort.'
      },
      recap: [
        'Trois technologies de compresseurs volumétriques : <strong>piston</strong>, <strong>scroll</strong>, <strong>vis</strong> — toutes nécessitent une lubrification.',
        'Le <strong>débit théorique balayé</strong> $Q_{th} = V_s \\times N$ dépend uniquement de la géométrie et de la vitesse de rotation.',
        'Le <strong>volume mort</strong> (espace nuisible) empêche une partie du volume balayé de se traduire en aspiration effective.',
        'Le <strong>rendement volumétrique</strong> $\\eta_v = Q_{\\text{réel}}/Q_{th}$ diminue quand le taux de compression augmente.',
        'Le <strong>débit réel aspiré</strong> $Q_{\\text{réel}} = \\eta_v \\times V_s \\times N$ conditionne directement la puissance frigorifique réelle du compresseur.'
      ],
      piege: 'Le piège classique est de considérer le rendement volumétrique comme une <strong>constante</strong> du compresseur : il dépend en réalité du point de fonctionnement (taux de compression), et une valeur donnée sur une fiche technique n\'est valable que pour les conditions d\'essai précisées. Autre confusion fréquente : le rendement volumétrique n\'est pas le rendement global du compresseur (qui inclurait aussi les pertes mécaniques et électriques du moteur) — il ne concerne que l\'écart entre débit balayé et débit réellement aspiré.'
    },

    quiz: [
      {
        q: 'Le volume mort (espace nuisible) d\'un compresseur à piston correspond à :',
        options: [
          'Le volume total balayé par le piston en une course',
          'Le volume résiduel en fin de refoulement, où du gaz comprimé subsiste et doit se ré-détendre avant l\'aspiration suivante',
          'Le volume de la cylindrée annoncée par le constructeur',
          'Le volume d\'huile de lubrification'
        ],
        answer: 1,
        correction: 'Le volume mort est l\'espace résiduel entre le piston (en fin de course de refoulement) et la culasse : le gaz comprimé qui y reste doit d\'abord se ré-détendre avant que l\'aspiration de gaz neuf ne puisse reprendre, réduisant le rendement volumétrique.'
      },
      {
        q: 'Le rendement volumétrique $\\eta_v$ d\'un compresseur, lorsque le taux de compression augmente, a tendance à :',
        options: [
          'Augmenter',
          'Diminuer',
          'Rester rigoureusement constant',
          'Devenir supérieur à 1'
        ],
        answer: 1,
        correction: 'Plus le taux de compression augmente, plus l\'effet du volume mort (ré-expansion du gaz résiduel) pénalise l\'aspiration de gaz neuf : le rendement volumétrique diminue.'
      },
      {
        q: 'Un compresseur à vis, comparé à un compresseur à piston, est plutôt utilisé pour :',
        options: [
          'De très faibles puissances domestiques uniquement',
          'De fortes puissances industrielles',
          'Remplacer systématiquement le détendeur',
          'Les circuits sans aucune lubrification'
        ],
        answer: 1,
        correction: 'Le compresseur à vis, avec ses deux rotors hélicoïdaux imbriqués, est adapté aux fortes puissances industrielles, là où un compresseur à piston deviendrait moins pertinent.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un compresseur à piston de PAC air/eau',
          'un compresseur scroll de climatiseur split',
          'un petit groupe de production frigorifique commercial',
          'un compresseur hermétique de meuble frigorifique'
        ]);
        const Vs = rand(20, 80);
        const N = pick([1450, 2900, 2850, 3000]);
        const etaV = randFloat(0.65, 0.9, 2);
        const QthLmin = Vs * N / 1000;
        const Qth = parseFloat((QthLmin * 60 / 1000).toFixed(2));
        const Qreel = parseFloat((etaV * Qth).toFixed(2));
        return {
          statement: `Dans ${contexte}, la cylindrée est $V_s=${Vs}$ cm³, la vitesse de rotation $N=${N}$ tr/min, et le rendement volumétrique à ce point de fonctionnement $\\eta_v=${fr(etaV, 2)}$.<br/><br/>Calcule le débit réel aspiré $Q_{\\text{réel}}$ (en m³/h, arrondi au centième).`,
          answer: Qreel,
          tolerance: 0.15,
          unit: 'm³/h',
          hint: 'Calcule d\'abord $Q_{th}=V_s\\times N$ (en cm³/min, à convertir en m³/h), puis $Q_{\\text{réel}}=\\eta_v \\times Q_{th}$.',
          solution: [
            `Débit théorique balayé : $Q_{th} = ${Vs} \\times ${N} = ${Vs * N}$ cm³/min, soit environ $${fr(Qth, 2)}$ m³/h.`,
            `Débit réel aspiré : $Q_{\\text{réel}} = \\eta_v \\times Q_{th} = ${fr(etaV, 2)} \\times ${fr(Qth, 2)} \\approx ${fr(Qreel, 2)}$ m³/h.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un compresseur à piston (cylindrée $V_s=65$ cm³, $N=2\\,900$ tr/min) équipe une installation frigorifique. En intersaison, son rendement volumétrique est $\\eta_v=0{,}85$ (taux de compression modéré). En période de grand froid, la basse pression chute et le taux de compression augmente fortement, faisant chuter le rendement volumétrique à $\\eta_v=0{,}68$.',
      tasks: [
        'Calculer le débit théorique balayé $Q_{th}$ (en m³/h).',
        'Calculer le débit réel aspiré $Q_{\\text{réel}}$ en intersaison ($\\eta_v=0{,}85$).',
        'Calculer le débit réel aspiré $Q_{\\text{réel}}$ en grand froid ($\\eta_v=0{,}68$).',
        'Exprimer, en pourcentage, la perte de débit réel entre l\'intersaison et le grand froid, et expliquer en une phrase la conséquence sur la puissance frigorifique disponible d\'une PAC par temps très froid (lien avec le module A5).'
      ],
      solutions: [
        '$Q_{th} = 65 \\times 2\\,900 = 188\\,500$ cm³/min $= 188{,}5$ L/min, soit $188{,}5 \\times 60/1\\,000 = 11{,}31$ m³/h.',
        '$Q_{\\text{réel,intersaison}} = 0{,}85 \\times 11{,}31 \\approx 9{,}61$ m³/h.',
        '$Q_{\\text{réel,grand froid}} = 0{,}68 \\times 11{,}31 \\approx 7{,}69$ m³/h.',
        'Perte de débit : $(9{,}61-7{,}69)/9{,}61 \\approx 20\\,\\%$. Cette chute de débit réel aspiré réduit d\'autant la masse de fluide frigorigène en circulation, donc la puissance frigorifique délivrée par le compresseur — c\'est l\'une des raisons pour lesquelles le COP et la puissance utile d\'une PAC air/eau (module A5) chutent par grand froid, en plus de l\'effet direct sur le COP théorique.'
      ],
      finalAnswer: 'Le débit réel aspiré chute d\'environ $20\\,\\%$ entre l\'intersaison ($9{,}61$ m³/h) et le grand froid ($7{,}69$ m³/h), pour la même géométrie de compresseur — une baisse du rendement volumétrique qui pénalise directement la puissance frigorifique disponible.'
    },

    evaluation: {
      title: 'Évaluation — Compresseurs volumétriques',
      duration: '20 min',
      questions: [
        {
          statement: 'Un compresseur a $V_s=40$ cm³ et $N=1\\,450$ tr/min. Calculer le débit théorique balayé $Q_{th}$ (en m³/h, arrondi au dixième).',
          type: 'numeric',
          answer: 3.5,
          tolerance: 0.2,
          unit: 'm³/h',
          points: 3,
          correction: '$Q_{th} = 40\\times1\\,450 = 58\\,000$ cm³/min $=58$ L/min $\\approx 3{,}5$ m³/h.'
        },
        {
          statement: 'Avec $\\eta_v=0{,}80$, calculer le débit réel aspiré $Q_{\\text{réel}}$ (en m³/h, arrondi au dixième).',
          type: 'numeric',
          answer: 2.8,
          tolerance: 0.2,
          unit: 'm³/h',
          points: 3,
          correction: '$Q_{\\text{réel}} = 0{,}80\\times3{,}5 = 2{,}8$ m³/h.'
        },
        {
          statement: 'Parmi ces trois technologies, laquelle repose sur deux rotors hélicoïdaux imbriqués ?',
          type: 'multiple-choice',
          options: [
            'Le compresseur à piston',
            'Le compresseur scroll',
            'Le compresseur à vis',
            'Le compresseur centrifuge'
          ],
          answer: 2,
          points: 2,
          correction: 'Le compresseur à vis utilise deux rotors hélicoïdaux imbriqués, adaptés aux fortes puissances industrielles.'
        },
        {
          statement: 'Le rendement volumétrique d\'un compresseur se définit comme :',
          type: 'multiple-choice',
          options: [
            'Le rapport entre débit réel aspiré et débit théorique balayé',
            'Le rapport entre puissance absorbée et puissance frigorifique',
            'Le rapport entre cylindrée et vitesse de rotation',
            'Le COP du compresseur'
          ],
          answer: 0,
          points: 2,
          correction: 'Le rendement volumétrique $\\eta_v = Q_{\\text{réel}}/Q_{th}$ mesure l\'écart entre le débit réellement aspiré et le débit théorique balayé par la géométrie du compresseur.'
        },
        {
          statement: 'Pourquoi le rendement volumétrique diminue-t-il quand le taux de compression augmente ?',
          type: 'multiple-choice',
          options: [
            'Parce que la cylindrée du compresseur change automatiquement',
            'Parce que le gaz résiduel du volume mort se ré-détend sur une plus grande partie de la course avant que l\'aspiration ne puisse reprendre',
            'Parce que la vitesse de rotation diminue automatiquement',
            'Parce que le fluide frigorigène change de nature'
          ],
          answer: 1,
          points: 3,
          correction: 'Un taux de compression plus élevé signifie une pression résiduelle plus forte dans le volume mort en fin de refoulement : ce gaz met plus de temps (plus de course) à se ré-détendre avant que l\'aspiration de gaz neuf ne puisse commencer, réduisant le rendement volumétrique.'
        }
      ]
    }
  });
