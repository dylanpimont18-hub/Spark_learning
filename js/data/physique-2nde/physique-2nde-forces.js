/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-forces.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-forces',
    level: 2, subject: 'physique',
    icon: '⬇️',
    title: 'Modélisation d\'une action mécanique (forces)',
    subtitle: 'Vecteur force, actions de contact et à distance, poids et masse, équilibre d\'un système',
    keywords: ['Force', 'Vecteur force', 'Poids', 'Action mécanique', 'Dynamomètre'],
    physics: 'Modéliser les actions mécaniques par des vecteurs forces permet de dimensionner un câble de levage sur un chantier, de régler la tension d\'un harnais d\'escalade, de choisir un pont suspendu adapté, ou de comprendre pourquoi un astronaute « flotte » sur la Lune sans pour autant avoir perdu de matière.',

    cours: {
      intro: 'Pousser une porte, tirer sur une corde, ou simplement poser un livre sur une table : dans chaque cas, un système exerce une <strong>action mécanique</strong> sur un autre. Cette action peut se faire <strong>par contact</strong> (une main qui pousse) ou <strong>à distance</strong> (la Terre qui attire un objet vers le bas, sans le toucher).<br/><br/>Pour étudier ces actions de façon rigoureuse, les physiciens les modélisent par un objet mathématique : le <strong>vecteur force</strong>. Ce vecteur ne se limite pas à un nombre : il porte une direction, un sens, et s\'applique en un point précis. C\'est cette richesse qui permet de prévoir si un système va rester immobile, accélérer, ou changer de trajectoire.',
      definitions: [
        { term: 'Action mécanique', def: 'Cause capable de déformer un système, de modifier son mouvement, ou de le maintenir en équilibre. Elle peut être <strong>de contact</strong> (poussée, tension d\'un fil, frottement) ou <strong>à distance</strong> (gravitation, force électrique, force magnétique).' },
        { term: 'Vecteur force $\\vec{F}$', def: 'Outil qui modélise une action mécanique par quatre caractéristiques : <strong>point d\'application</strong>, <strong>direction</strong>, <strong>sens</strong> et <strong>valeur</strong> (norme, en newtons N). La valeur d\'une force se mesure avec un <strong>dynamomètre</strong>.' },
        { term: 'Poids $\\vec{P}$', def: 'Force à distance exercée par la Terre (ou un astre) sur un objet, verticale, dirigée vers le bas, appliquée au centre de gravité $G$. Sa valeur est $P = m \\times g$, avec $g \\approx 9{,}8$ N/kg à la surface de la Terre.' },
        { term: 'Masse $m$', def: 'Grandeur scalaire (en kg), mesurée directement avec une balance, qui caractérise la quantité de matière d\'un objet. Contrairement au poids, elle ne dépend pas du lieu où l\'on se trouve.' }
      ],
      method: {
        title: 'Représenter une action mécanique par un vecteur force en 3 étapes',
        steps: [
          '<strong>Identifier le système étudié</strong> et repérer toutes les actions mécaniques qu\'il subit, de contact et à distance.<br/>Exemple : un colis suspendu à un fil subit deux actions : le poids (à distance, la Terre) et la tension du fil (contact).',
          'Pour chaque action, déterminer les <strong>quatre caractéristiques</strong> du vecteur force associé : point d\'application, direction, sens, valeur (en N).',
          '<strong>Choisir une échelle</strong> adaptée (par exemple $1$ cm $\\leftrightarrow 5$ N) et représenter chaque vecteur à cette échelle, à partir de son point d\'application. Si le système est immobile, les vecteurs doivent se compenser (somme vectorielle nulle).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Équilibre d\'un objet suspendu (statique)',
        title: 'Poids et tension : deux vecteurs forces qui se compensent',
        description: 'Un objet de masse $m = 1{,}0$ kg est suspendu à un fil, immobile. Deux forces s\'exercent sur lui : son poids $\\vec{P}$ (à distance, appliqué au centre de gravité $G$) et la tension $\\vec{T}$ du fil (contact). À l\'équilibre, ces deux vecteurs ont la <strong>même valeur</strong> et des <strong>sens opposés</strong>.',
        svg: `
          <svg viewBox="0 0 560 210" role="img" aria-labelledby="forces2nde-title forces2nde-desc">
            <title id="forces2nde-title">Objet suspendu en equilibre sous l'effet du poids et de la tension</title>
            <desc id="forces2nde-desc">Un objet rectangulaire est suspendu par un fil vertical attache a un support fixe hachure en haut du schema. Depuis le centre de gravite G de l'objet, deux vecteurs sont traces sur le meme axe vertical : le vecteur tension T oriente vers le haut, le long du fil, et le vecteur poids P oriente vers le bas. Les deux vecteurs ont exactement la meme longueur, ce qui traduit visuellement l'egalite de leurs valeurs a l'equilibre, et des sens opposes.</desc>

            <defs>
              <marker id="arrow-phys2-forces" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- support fixe (hachures) -->
            <line class="frame-line" x1="230" y1="30" x2="330" y2="30"></line>
            <line class="frame-line" x1="230" y1="30" x2="220" y2="20"></line>
            <line class="frame-line" x1="250" y1="30" x2="240" y2="20"></line>
            <line class="frame-line" x1="270" y1="30" x2="260" y2="20"></line>
            <line class="frame-line" x1="290" y1="30" x2="280" y2="20"></line>
            <line class="frame-line" x1="310" y1="30" x2="300" y2="20"></line>
            <line class="frame-line" x1="330" y1="30" x2="320" y2="20"></line>

            <!-- fil -->
            <line class="frame-line" x1="280" y1="30" x2="280" y2="95"></line>

            <!-- objet suspendu -->
            <rect class="frame-line" x="235" y="95" width="90" height="55" fill="none"></rect>
            <text class="label-soft" x="280" y="112" text-anchor="middle">m = 1,0 kg</text>

            <!-- centre de gravite G -->
            <circle class="plot-point-alt" cx="280" cy="122" r="3"></circle>
            <text class="tick-label" x="296" y="126" text-anchor="start">G</text>

            <!-- vecteur tension T (vers le haut, le long du fil) -->
            <line class="curve-main" x1="280" y1="95" x2="280" y2="46" marker-end="url(#arrow-phys2-forces)"></line>
            <text class="annotation-label" x="300" y="65" text-anchor="start">T = 9,8 N</text>

            <!-- vecteur poids P (vers le bas, depuis G) -->
            <line class="curve-main" x1="280" y1="122" x2="280" y2="171" marker-end="url(#arrow-phys2-forces)"></line>
            <text class="annotation-label" x="300" y="152" text-anchor="start">P = 9,8 N</text>
          </svg>
        `,
        notes: [
          'Le poids $\\vec{P}$ est une action <strong>à distance</strong> (exercée par la Terre) appliquée au centre de gravité $G$ de l\'objet, tandis que la tension $\\vec{T}$ est une action <strong>de contact</strong> exercée par le fil à son point d\'attache.',
          'L\'objet étant immobile, les deux forces se <strong>compensent</strong> : même direction (verticale), sens opposés, et même valeur $T = P = m \\times g = 1{,}0 \\times 9{,}8 = 9{,}8$ N — d\'où les deux vecteurs dessinés avec exactement la même longueur.',
          'Le poids se calcule ($P = mg$), il ne se mesure pas directement ; la tension, elle, pourrait être lue directement si le fil était remplacé par un dynamomètre.'
        ],
        reading: 'Repère d\'abord l\'objet suspendu et son centre de gravité $G$, puis compare la longueur et le sens des deux vecteurs $\\vec{T}$ (vers le haut) et $\\vec{P}$ (vers le bas).',
        caption: 'Un objet de masse $m = 1{,}0$ kg suspendu et immobile : le poids $\\vec{P}$ et la tension $\\vec{T}$ du fil se compensent exactement (mêmes valeurs, sens opposés).'
      },
      example: {
        statement: 'Un colis de masse $m = 5{,}0$ kg est suspendu au crochet d\'un peson (dynamomètre) dans un entrepôt, parfaitement immobile. On donne $g \\approx 9{,}8$ N/kg.<br/><br/>Calcule la valeur du poids du colis, puis vérifie si une lecture de $F = 49$ N sur le peson est cohérente.',
        steps: [
          'Système étudié : le colis. Deux forces s\'exercent sur lui : son poids $\\vec{P}$ (à distance) et la tension $\\vec{T}$ exercée par le peson (contact).',
          'Valeur du poids : $P = m \\times g = 5{,}0 \\times 9{,}8 = 49$ N.',
          'Le colis étant immobile, les forces se compensent : $T = P = 49$ N.',
          'La lecture du peson ($F = 49$ N) correspond exactement à la valeur attendue de $T$ : elle est donc cohérente.'
        ],
        answer: '$P = 49$ N, et la lecture du peson est cohérente car à l\'équilibre $T = P$. C\'est justement ce principe (l\'égalité entre la tension mesurée et le poids recherché) qui permet à un peson de servir de balance indirecte.'
      },
      formulas: [
        'Poids : $P = m \\times g$, avec $g \\approx 9{,}8$ N/kg sur Terre ($P$ en N, $m$ en kg)',
        'Caractéristiques d\'un vecteur force $\\vec{F}$ : point d\'application, direction, sens, valeur (en N)',
        'À l\'équilibre d\'un système immobile, la somme vectorielle des forces qui s\'exercent sur lui est nulle',
        'Masse (kg, scalaire, invariante) $\\neq$ Poids (N, vectoriel, dépend du lieu via $g$)'
      ],
      recap: [
        'Une action mécanique se modélise par un <strong>vecteur force</strong>, caractérisé par un point d\'application, une direction, un sens et une valeur (en N).',
        'Le <strong>poids</strong> $P = mg$ est une force à distance, verticale vers le bas, appliquée au centre de gravité $G$.',
        'La <strong>masse</strong> (kg) est invariante ; le <strong>poids</strong> (N) dépend du lieu (via $g$) : ne jamais les confondre.',
        'À l\'<strong>équilibre</strong>, la somme vectorielle des forces qui s\'exercent sur un système est nulle : deux forces opposées se compensent si elles ont même valeur, même direction et des sens opposés.'
      ],
      piege: 'Une erreur très fréquente est de confondre la masse (en kg, grandeur invariante mesurée à la balance) avec le poids (en N, une force qui dépend du lieu où l\'on se trouve). Attention : sur la Lune, un objet garde la même masse que sur Terre, mais son poids y est environ six fois plus faible, car la pesanteur lunaire $g_{Lune} \\approx 1{,}6$ N/kg est bien inférieure à $g_{Terre} \\approx 9{,}8$ N/kg.'
    },

    quiz: [
      {
        q: 'Laquelle de ces actions mécaniques est une action <strong>à distance</strong> (sans contact) ?',
        options: [
          'La tension exercée par un fil sur un objet suspendu',
          'Le poids, dû à l\'attraction gravitationnelle de la Terre',
          'Le frottement d\'un pneu sur la route',
          'La poussée d\'une main sur un chariot'
        ],
        answer: 1,
        correction: 'Le poids résulte de l\'attraction gravitationnelle exercée par la Terre, sans aucun contact matériel avec l\'objet : c\'est l\'exemple type d\'action <strong>à distance</strong>. La tension, le frottement et la poussée nécessitent tous un contact direct.'
      },
      {
        q: 'Un objet de masse $m = 3{,}0$ kg est posé sur une table, immobile. On donne $g \\approx 9{,}8$ N/kg. Quelle est la valeur de son poids ?',
        options: [
          '$P = 29{,}4$ N',
          '$P = 3{,}0$ N',
          '$P = 0{,}3$ N',
          '$P = 32{,}8$ N'
        ],
        answer: 0,
        correction: '$P = m \\times g = 3{,}0 \\times 9{,}8 = 29{,}4$ N. Le poids se calcule bien en <strong>multipliant</strong> la masse par $g$, il ne s\'exprime jamais directement en kg.'
      },
      {
        q: 'Un livre posé sur une table est parfaitement immobile. Que peut-on dire des forces qui s\'exercent sur lui ?',
        options: [
          'Aucune force ne s\'exerce sur lui puisqu\'il ne bouge pas',
          'Les forces qui s\'exercent sur lui se compensent : leur somme vectorielle est nulle',
          'Seul son poids s\'exerce réellement sur lui',
          'La réaction de la table est forcément plus grande que son poids'
        ],
        answer: 1,
        correction: 'Le livre subit bien deux forces (son poids et la réaction de la table), mais comme il reste immobile, ces forces se <strong>compensent</strong> exactement : leur somme vectorielle est nulle, même si aucune des deux forces prise isolément n\'est nulle.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['poids', 'masse']);
        var g = 9.8;

        if (typeExo === 'poids') {
          var m = randFloat(0.5, 80, 1);
          var P = parseFloat((m * g).toFixed(1));
          var contexte = pick([
            'un colis posé sur un tapis de manutention',
            'une valise à l\'enregistrement d\'un aéroport',
            'un sac de ciment sur un chantier',
            'une caisse suspendue au crochet d\'une grue',
            'un pack de bouteilles en rayon de supermarché'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', un objet a une masse $m = ' + fr(m, 1) + '$ kg. On donne $g \\approx 9{,}8$ N/kg.<br/><br/>Calcule la valeur de son poids $P$ (en N, arrondie au dixième).',
            answer: P,
            tolerance: Math.max(0.3, parseFloat((P * 0.02).toFixed(1))),
            unit: 'N',
            hint: 'Utilise $P = m \\times g$ : une simple multiplication de la masse par $g$.',
            solution: [
              'Formule du poids : $P = m \\times g$.',
              'Application numérique : $P = ' + fr(m, 1) + ' \\times 9{,}8$.',
              'Résultat : $P \\approx ' + fr(P, 1) + '$ N.'
            ]
          };
        } else {
          var Pval = rand(5, 900);
          var mVal = parseFloat((Pval / g).toFixed(2));
          var contexte2 = pick([
            'un dynamomètre de travaux pratiques suspendu au plafond',
            'un peson utilisé en salle de sciences',
            'un capteur de force installé sur une ligne d\'atelier',
            'un ressort étalonné en laboratoire de mesures'
          ]);
          return {
            statement: 'Sur ' + contexte2 + ', un dynamomètre indique une valeur de poids $P = ' + Pval + '$ N pour un objet suspendu et immobile. On donne $g \\approx 9{,}8$ N/kg.<br/><br/>Calcule la masse $m$ de cet objet (en kg, arrondie au centième).',
            answer: mVal,
            tolerance: Math.max(0.05, parseFloat((mVal * 0.03).toFixed(2))),
            unit: 'kg',
            hint: 'Réarrange la formule du poids : $m = \\dfrac{P}{g}$.',
            solution: [
              'Formule du poids réarrangée : $m = \\dfrac{P}{g}$.',
              'Application numérique : $m = \\dfrac{' + Pval + '}{9{,}8}$.',
              'Résultat : $m \\approx ' + fr(mVal, 2) + '$ kg.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un astronaute et son équipement ont une masse totale $m = 110$ kg. On donne la pesanteur terrestre $g_{Terre} \\approx 9{,}8$ N/kg et la pesanteur lunaire $g_{Lune} \\approx 1{,}6$ N/kg.',
      tasks: [
        'Calculer le poids de l\'astronaute équipé sur Terre.',
        'Calculer son poids sur la Lune.',
        'Comparer ces deux poids et expliquer pourquoi sa masse, elle, ne change pas.'
      ],
      solutions: [
        'Poids sur Terre : $P_{Terre} = m \\times g_{Terre} = 110 \\times 9{,}8 = 1\\,078$ N.',
        'Poids sur la Lune : $P_{Lune} = m \\times g_{Lune} = 110 \\times 1{,}6 = 176$ N.',
        'Rapport des poids : $\\dfrac{P_{Terre}}{P_{Lune}} = \\dfrac{1\\,078}{176} \\approx 6{,}1$. L\'astronaute pèse environ $6$ fois moins sur la Lune, alors que sa <strong>masse</strong> (110 kg) reste rigoureusement identique dans les deux cas : elle ne dépend pas du lieu, contrairement au poids qui dépend de la pesanteur locale $g$.'
      ],
      finalAnswer: '$P_{Terre} \\approx 1\\,078$ N et $P_{Lune} \\approx 176$ N, soit un rapport d\'environ $6{,}1$. Bien qu\'il soit six fois plus « léger » sur la Lune, l\'astronaute transporte exactement la même quantité de matière : c\'est cette distinction masse/poids qui explique pourquoi on saute si haut sur la Lune sans avoir perdu le moindre gramme.'
    },

    evaluation: {
      title: 'Évaluation — Modélisation d\'une action mécanique',
      duration: '30 min',
      questions: [
        {
          statement: 'Un objet a une masse $m = 4{,}0$ kg. On donne $g \\approx 9{,}8$ N/kg. Calculer la valeur de son poids (en N).',
          type: 'numeric',
          answer: 39.2,
          tolerance: 0.5,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 4{,}0 \\times 9{,}8 = 39{,}2$ N.'
        },
        {
          statement: 'Parmi les propositions suivantes, laquelle N\'EST PAS une des quatre caractéristiques d\'un vecteur force ?',
          type: 'multiple-choice',
          options: [
            'Le point d\'application',
            'La direction',
            'La masse du système sur lequel elle s\'exerce',
            'La valeur (norme, en newtons)'
          ],
          answer: 2,
          points: 2,
          correction: 'Un vecteur force est défini par son point d\'application, sa direction, son sens et sa valeur. La <strong>masse</strong> du système est une caractéristique du système lui-même, pas du vecteur force qu\'il subit.'
        },
        {
          statement: 'Un dynamomètre indique un poids $P = 68{,}6$ N pour un objet suspendu. On donne $g \\approx 9{,}8$ N/kg. Calculer la masse de cet objet (en kg).',
          type: 'numeric',
          answer: 7,
          tolerance: 0.2,
          unit: 'kg',
          points: 3,
          correction: '$m = \\dfrac{P}{g} = \\dfrac{68{,}6}{9{,}8} = 7{,}0$ kg.'
        },
        {
          statement: 'La tension exercée par un fil sur un objet suspendu est une action mécanique :',
          type: 'multiple-choice',
          options: [
            'De contact',
            'À distance',
            'Ni de contact, ni à distance',
            'De contact et à distance à la fois'
          ],
          answer: 0,
          points: 1,
          correction: 'Le fil touche physiquement l\'objet à son point d\'attache : la tension est bien une action mécanique <strong>de contact</strong>, contrairement au poids qui agit à distance.'
        },
        {
          statement: 'Un objet suspendu à un fil est parfaitement immobile. Que peut-on en déduire sur les forces qui s\'exercent sur lui ?',
          type: 'multiple-choice',
          options: [
            'Aucune force ne s\'exerce sur l\'objet',
            'La somme vectorielle des forces qui s\'exercent sur lui est nulle',
            'Seul le poids s\'exerce sur l\'objet',
            'La tension est nécessairement nulle'
          ],
          answer: 1,
          points: 2,
          correction: 'Un système immobile n\'est pas un système sans force : c\'est un système dont les forces se <strong>compensent</strong>. Ici, le poids et la tension ont la même valeur et des sens opposés, d\'où une somme vectorielle nulle.'
        }
      ]
    }
  });
