/* =========================================================
   Spark Learning – data/si-2nde/si-2nde-mecanique-base.js
   Extrait de si-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-2nde-mecanique-base',
    level: 2, subject: 'si',
    icon: '⚖️',
    title: 'Principes mécaniques de base (forces, moments)',
    subtitle: 'Notion de force, moment d\'une force, conditions d\'équilibre, levier',
    keywords: ['Force', 'Moment', 'Équilibre', 'Levier', 'Newton'],
    physics: 'Les principes d\'équilibre sont essentiels en génie civil (ponts, bâtiments), en mécanique (bras articulés de robots) et dans la vie quotidienne (ciseaux, brouette, pince à épiler).',

    cours: {
      intro: 'Une <strong>force</strong> est une action mécanique caractérisée par quatre éléments : son point d\'application, sa direction (droite d\'action), son sens et sa norme (intensité, en newtons N).<br/><br/>Un objet est en <strong>équilibre statique</strong> lorsque toutes les forces et tous les moments se compensent. Deux conditions doivent être remplies simultanément : $\\sum \\vec{F} = \\vec{0}$ (pas de translation) et $\\sum M_O = 0$ (pas de rotation).<br/><br/>Le <strong>moment d\'une force</strong> par rapport à un point $O$ mesure la capacité de cette force à faire tourner l\'objet autour de $O$. Il dépend de l\'intensité $F$ <strong>et</strong> du bras de levier $d$ (distance perpendiculaire entre $O$ et la droite d\'action) : $M_O(\\vec{F}) = F \\times d$.<br/><br/>Le <strong>principe du levier</strong> ($F_1 \\times d_1 = F_2 \\times d_2$) explique pourquoi une petite force loin du pivot peut équilibrer une grande force proche. C\'est le principe des ciseaux (pivot au centre), de la brouette (pivot sur la roue) et de la pince à épiler (pivot à l\'extrémité).<br/><br/><strong>Convention de signe</strong> : en général, on choisit le sens antihoraire (sens trigonométrique) comme positif et le sens horaire comme négatif.',
      definitions: [
        { term: 'Force ($\\vec{F}$)', def: 'Action mécanique modélisée par un vecteur. Caractérisée par un point d\'application, une direction, un sens et une norme $F$ (en N). Exemple : le poids $\\vec{P} = m \\vec{g}$ avec $g \\approx 9{,}81$ N/kg.' },
        { term: 'Moment d\'une force ($M_O$)', def: 'Mesure l\'effet de rotation d\'une force par rapport à un point $O$ : $M_O(\\vec{F}) = \\pm F \\times d$. Convention : $+$ en sens antihoraire, $-$ en sens horaire. Unité : N$\\cdot$m.' },
        { term: 'Bras de levier ($d$)', def: 'Distance <strong>perpendiculaire</strong> entre le point de rotation $O$ et la droite d\'action de la force. Plus $d$ est grand, plus le moment est important.' },
        { term: 'Équilibre statique', def: 'Un solide est en équilibre si $\\sum \\vec{F} = \\vec{0}$ (pas de translation) <strong>et</strong> $\\sum M_O = 0$ (pas de rotation). Les deux conditions sont nécessaires.' }
      ],
      method: {
        title: 'Résoudre un problème d\'équilibre en 3 étapes',
        steps: [
          '<strong>Bilan des forces</strong> : Identifier toutes les forces exercées sur le solide (poids, réaction d\'appui, force appliquée, tension…). Représenter chaque force sur un schéma.<br/>Exemple : une poutre sur deux appuis A et B subit son poids $\\vec{P}$ au centre de gravité, et les réactions $\\vec{R}_A$ (en A) et $\\vec{R}_B$ (en B).',
          '<strong>Condition de translation</strong> : écrire $\\sum \\vec{F} = \\vec{0}$. En projection sur un axe vertical : $R_A + R_B - P = 0$, soit $R_A + R_B = mg$.<br/>Astuce : on projette sur l\'axe où le plus de forces sont alignées.',
          '<strong>Condition de rotation</strong> : écrire $\\sum M_O = 0$ en choisissant un point $O$ judicieux (souvent un appui, pour éliminer une inconnue).<br/>Exemple au point A : $R_A \\times 0 + R_B \\times L - P \\times \\dfrac{L}{2} = 0$. On en déduit $R_B = \\dfrac{P}{2}$, puis $R_A = P - R_B$.<br/>Conseil : choisir le point de calcul là où s\'applique une force <strong>inconnue</strong> pour l\'éliminer de l\'équation.'
        ]
      },
      diagram: {
        theme: 'si',
        kicker: 'Schéma de la brouette (levier inter-appui)',
        title: 'Équilibre de la brouette : F₁ × d₁ = F₂ × d₂',
        description: 'Vue schématique de l\'exemple du cours : pivot sur l\'axe de la roue, charge à d₁ = 0,4 m, poignées à d₂ = 1,2 m.',
        svg: `
          <svg viewBox="0 0 540 380" role="img" aria-labelledby="lever-brouette-title lever-brouette-desc">
            <title id="lever-brouette-title">Schema de la brouette assimilee a un levier</title>
            <desc id="lever-brouette-desc">Vue laterale schematique d'une brouette : pivot sur l'axe de la roue a gauche, charge de 300 N appliquee a 0,4 m du pivot (moment horaire de 120 newton-metres), et force du jardinier de 100 N appliquee vers le haut aux poignees a 1,2 m du pivot (moment antihoraire de 120 newton-metres). Les deux moments s'annulent a l'equilibre.</desc>

            <defs>
              <marker id="arrow-si2nde-lever" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol (uniquement sous la roue : le reste de la brouette est souleve) -->
            <line class="frame-line" x1="70" y1="250" x2="150" y2="250"></line>
            <line class="grid-line" x1="75" y1="250" x2="67" y2="260"></line>
            <line class="grid-line" x1="90" y1="250" x2="82" y2="260"></line>
            <line class="grid-line" x1="105" y1="250" x2="97" y2="260"></line>
            <line class="grid-line" x1="120" y1="250" x2="112" y2="260"></line>
            <line class="grid-line" x1="135" y1="250" x2="127" y2="260"></line>
            <line class="grid-line" x1="150" y1="250" x2="142" y2="260"></line>

            <!-- roue = pivot -->
            <circle class="frame-line" cx="110" cy="220" r="30" fill="none"></circle>
            <circle class="plot-point" cx="110" cy="220" r="4"></circle>
            <text class="label-soft" x="110" y="182" text-anchor="middle">Pivot O (axe de la roue)</text>

            <!-- levier (brancards de la brouette) -->
            <line class="curve-main" x1="110" y1="220" x2="470" y2="220"></line>

            <!-- charge, a d1 = 0,4 m du pivot -->
            <rect class="frame-line" x="210" y="185" width="40" height="35" fill="none"></rect>
            <text class="label-soft" x="230" y="175" text-anchor="middle">Charge</text>
            <circle class="plot-point-alt" cx="230" cy="220" r="5"></circle>
            <line class="curve-main" x1="230" y1="220" x2="230" y2="270" marker-end="url(#arrow-si2nde-lever)"></line>
            <text class="annotation-label" x="242" y="248">F₁ = P = 300 N</text>
            <text class="label-soft" x="242" y="264">M₁ = −F₁ × d₁ = −120 N·m</text>

            <!-- poignees, a d2 = 1,2 m du pivot -->
            <circle class="plot-point-alt" cx="470" cy="220" r="5"></circle>
            <line class="curve-main" x1="470" y1="220" x2="470" y2="165" marker-end="url(#arrow-si2nde-lever)"></line>
            <text class="annotation-label" x="458" y="178" text-anchor="end">F₂ = F = 100 N</text>
            <text class="label-soft" x="458" y="196" text-anchor="end">M₂ = +F₂ × d₂ = +120 N·m</text>

            <!-- cotation d1 -->
            <line class="frame-line" x1="110" y1="290" x2="110" y2="304"></line>
            <line class="frame-line" x1="230" y1="290" x2="230" y2="304"></line>
            <line class="guide-line" x1="110" y1="297" x2="230" y2="297"></line>
            <text class="tick-label" x="170" y="316" text-anchor="middle">d₁ = 0,4 m</text>

            <!-- cotation d2 -->
            <line class="frame-line" x1="110" y1="330" x2="110" y2="344"></line>
            <line class="frame-line" x1="470" y1="330" x2="470" y2="344"></line>
            <line class="guide-line" x1="110" y1="337" x2="470" y2="337"></line>
            <text class="tick-label" x="290" y="356" text-anchor="middle">d₂ = 1,2 m</text>
          </svg>
        `,
        notes: [
          'La charge (P = 300 N) crée un moment horaire (négatif) autour du pivot : M₁ = −300 × 0,4 = −120 N·m.',
          'La force du jardinier (F = 100 N, vers le haut) crée un moment antihoraire (positif) : M₂ = +100 × 1,2 = +120 N·m.',
          'À l\'équilibre, M₁ + M₂ = 0 : les deux moments s\'annulent exactement — c\'est le principe du levier F₁ × d₁ = F₂ × d₂.'
        ],
        reading: 'Repère d\'abord le pivot (axe de la roue), puis les deux points d\'application des forces le long du levier : la charge, proche du pivot, et les poignées, plus loin.',
        caption: 'Brouette assimilée à un levier inter-appui : pivot sur l\'axe de la roue, charge P = 300 N à d₁ = 0,4 m, force du jardinier F = 100 N à d₂ = 1,2 m — exemple du cours.'
      },
      example: {
        statement: 'Une brouette porte une charge de $P_{\\text{charge}} = 300$ N placée à $d_1 = 0{,}4$ m de l\'axe de la roue (pivot). Le jardinier soulève les poignées situées à $d_2 = 1{,}2$ m de l\'axe. Quelle force $F$ doit-il exercer pour maintenir la brouette en équilibre horizontal ? On néglige le poids de la brouette.',
        steps: [
          'Système : la brouette. Pivot : l\'axe de la roue.',
          'Moments au pivot — la charge crée un moment horaire (négatif) : $M_{\\text{charge}} = -P \\times d_1 = -300 \\times 0{,}4 = -120$ N$\\cdot$m.',
          'La force du jardinier crée un moment antihoraire (positif) : $M_F = +F \\times d_2 = F \\times 1{,}2$.',
          'Équilibre : $M_{\\text{charge}} + M_F = 0$ → $-120 + 1{,}2 \\times F = 0$ → $F = \\dfrac{120}{1{,}2} = 100$ N.',
          'Le jardinier n\'exerce que $100$ N pour soulever $300$ N grâce au levier (rapport $\\dfrac{d_2}{d_1} = 3$).'
        ],
        answer: '$F = 100$ N. Le levier de la brouette multiplie la force par $3$ (rapport des bras de levier : $\\dfrac{1{,}2}{0{,}4} = 3$).'
      },
      formulas: [
        '$M_O(\\vec{F}) = \\pm F \\times d$ (moment, en N$\\cdot$m ; $+$ antihoraire, $-$ horaire)',
        '$\\sum \\vec{F} = \\vec{0}$ (condition d\'équilibre en translation)',
        '$\\sum M_O = 0$ (condition d\'équilibre en rotation)',
        'Levier : $F_1 \\times d_1 = F_2 \\times d_2$',
        'Poids : $P = m \\times g$ avec $g \\approx 9{,}81$ N/kg'
      ],
      recap: [
        'Le moment d\'une force est $M = F \\times d$ (force $\\times$ bras de levier). Il mesure l\'effet de rotation autour d\'un point.',
        'Équilibre statique : $\\sum \\vec{F} = \\vec{0}$ (translation) <strong>et</strong> $\\sum M_O = 0$ (rotation). Les deux sont indispensables.',
        'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$. Une petite force loin du pivot équilibre une grande force proche (brouette, ciseaux, pince).',
        'Toujours choisir le point de calcul des moments au niveau d\'une force <strong>inconnue</strong> pour simplifier les calculs.'
      ],
      piege: 'Le bras de levier $d$ est la distance <strong>perpendiculaire</strong> entre le pivot et la <strong>droite d\'action</strong> de la force, pas la distance au point d\'application. Si la force fait un angle $\\alpha$ avec la barre : $M = F \\times L \\times \\sin(\\alpha)$. Ne pas oublier la convention de signe ($+$ antihoraire, $-$ horaire).'
    },

    quiz: [
      {
        q: 'Un jardinier appuie avec une force de $F = 80$ N sur le manche d\'une bêche, à $d = 0{,}9$ m du point de pivot (le sol). Quel est le moment de cette force par rapport au pivot ?',
        options: [
          '$M = 80 + 0{,}9 = 80{,}9$ N$\\cdot$m',
          '$M = 80 / 0{,}9 \\approx 88{,}9$ N$\\cdot$m',
          '$M = 80 \\times 0{,}9 = 72$ N$\\cdot$m',
          '$M = 0{,}9 / 80 = 0{,}011$ N$\\cdot$m'
        ],
        answer: 2,
        correction: '$M = F \\times d = 80 \\times 0{,}9 = 72$ N$\\cdot$m. Le moment est le <strong>produit</strong> de la force par le bras de levier, ni une addition, ni une division.'
      },
      {
        q: 'Sur une paire de ciseaux (levier inter-appui), une force de coupe de $200$ N s\'exerce à $d_1 = 2$ cm du pivot. La main exerce une force à $d_2 = 8$ cm du pivot. Quelle force la main doit-elle exercer ?',
        options: [
          '$800$ N',
          '$50$ N',
          '$100$ N',
          '$200$ N'
        ],
        answer: 1,
        correction: 'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$ → $200 \\times 2 = F_2 \\times 8$ → $F_2 = \\dfrac{400}{8} = 50$ N. Les ciseaux amplifient la force par le rapport $\\dfrac{d_2}{d_1} = \\dfrac{8}{2} = 4$ : on exerce $4$ fois moins de force que la force de coupe.'
      },
      {
        q: 'Un objet de masse $m = 5$ kg est posé sur une table. Le poids et la réaction normale du support se compensent. Que vaut la réaction normale $R_N$ ? (Prendre $g = 9{,}81$ N/kg)',
        options: [
          '$R_N = 5$ N',
          '$R_N = 49{,}05$ N (vers le haut)',
          '$R_N = 9{,}81$ N',
          '$R_N = 0$ N (l\'objet ne bouge pas donc aucune force)'
        ],
        answer: 1,
        correction: 'À l\'équilibre : $\\sum \\vec{F} = \\vec{0}$ → $R_N - P = 0$ → $R_N = P = m \\times g = 5 \\times 9{,}81 = 49{,}05$ N. La réaction est dirigée vers le haut, opposée au poids. L\'objet ne bouge pas <strong>parce que</strong> les forces se compensent, pas parce qu\'il n\'y a pas de force !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['moment', 'levier']);

        if (typeExo === 'moment') {
          var F = rand(20, 200);
          var d = randFloat(0.2, 2.5, 1);
          var M = parseFloat((F * d).toFixed(1));
          var dStr = d.toFixed(1).replace('.', '{,}');
          var MStr = M.toFixed(1).replace('.', '{,}');
          var objet = pick([
            'une clé à molette sur un boulon',
            'un bras de robot autour de son axe',
            'une porte autour de ses gonds',
            'une bêche autour du point d\'appui au sol',
            'un levier de frein à main'
          ]);
          return {
            statement: 'On exerce une force $F = ' + F + '$ N perpendiculairement sur ' + objet + '. Le bras de levier (distance perpendiculaire au pivot) est $d = ' + dStr + '$ m.<br/><br/>Calcule le moment de cette force par rapport au pivot (en N$\\cdot$m, arrondi au dixième).',
            answer: M,
            tolerance: 0.5,
            unit: 'N·m',
            hint: 'Le moment d\'une force perpendiculaire est $M = F \\times d$. C\'est un simple produit ! Attention à l\'unité : le moment s\'exprime en N$\\cdot$m (newton-mètre), pas en N ni en m.',
            solution: [
              'Formule du moment (force perpendiculaire) : $M_O(\\vec{F}) = F \\times d$.',
              'Application numérique : $M = ' + F + ' \\times ' + dStr + '$.',
              'Résultat : $M = ' + MStr + '$ N$\\cdot$m.',
              'Interprétation : cette force tend à faire tourner l\'objet autour du pivot avec un moment de $' + MStr + '$ N$\\cdot$m.'
            ]
          };
        } else {
          var F1 = rand(50, 400);
          var d1 = randFloat(0.1, 1.0, 1);
          var d2 = randFloat(0.5, 2.5, 1);
          while (Math.abs(d1 - d2) < 0.2) { d2 = randFloat(0.5, 2.5, 1); }
          var F2 = parseFloat((F1 * d1 / d2).toFixed(1));
          var d1Str = d1.toFixed(1).replace('.', '{,}');
          var d2Str = d2.toFixed(1).replace('.', '{,}');
          var F2Str = F2.toFixed(1).replace('.', '{,}');
          var systeme = pick([
            'une brouette', 'un pied-de-biche', 'une paire de ciseaux',
            'un casse-noix', 'un levier de chantier', 'une pince coupante'
          ]);
          return {
            statement: 'Sur ' + systeme + ', une charge de $F_1 = ' + F1 + '$ N est placée à $d_1 = ' + d1Str + '$ m du pivot. On veut l\'équilibrer en exerçant une force $F_2$ à $d_2 = ' + d2Str + '$ m du pivot, de l\'autre côté.<br/><br/>Calcule la force $F_2$ nécessaire pour l\'équilibre (en N, arrondie au dixième).',
            answer: F2,
            tolerance: 1,
            unit: 'N',
            hint: 'Principe du levier : $F_1 \\times d_1 = F_2 \\times d_2$. Isole $F_2$ : $F_2 = \\dfrac{F_1 \\times d_1}{d_2}$.',
            solution: [
              'Principe du levier (équilibre des moments) : $F_1 \\times d_1 = F_2 \\times d_2$.',
              'On isole $F_2$ : $F_2 = \\dfrac{F_1 \\times d_1}{d_2} = \\dfrac{' + F1 + ' \\times ' + d1Str + '}{' + d2Str + '}$.',
              'Calcul : $F_2 = \\dfrac{' + (F1 * d1).toFixed(1).replace('.', '{,}') + '}{' + d2Str + '} = ' + F2Str + '$ N.',
              'Vérification : $' + F1 + ' \\times ' + d1Str + ' = ' + (F1 * d1).toFixed(1).replace('.', '{,}') + '$ et $' + F2Str + ' \\times ' + d2Str + ' \\approx ' + (F2 * d2).toFixed(1).replace('.', '{,}') + '$ — les moments sont bien égaux.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une balançoire à bascule de longueur $L = 4$ m est posée sur un pivot central (au milieu). Un enfant $A$ de masse $m_A = 30$ kg est assis à l\'extrémité gauche ($d_A = 2$ m du pivot). Un enfant $B$ de masse $m_B = 45$ kg veut s\'asseoir du côté droit à une distance $d_B$ du pivot pour que la balançoire soit en équilibre horizontal. On prend $g = 10$ N/kg et on néglige la masse de la planche.',
      tasks: [
        'Calculer le poids $P_A$ de l\'enfant $A$ et le poids $P_B$ de l\'enfant $B$.',
        'Écrire l\'équation d\'équilibre des moments par rapport au pivot central. Préciser la convention de signe utilisée.',
        'Calculer la distance $d_B$ à laquelle l\'enfant $B$ doit s\'asseoir. Vérifier que $d_B < 2$ m (sinon il dépasse la planche).'
      ],
      solutions: [
        '$P_A = m_A \\times g = 30 \\times 10 = 300$ N (vers le bas). $P_B = m_B \\times g = 45 \\times 10 = 450$ N (vers le bas).',
        'Convention : sens antihoraire = positif. $P_A$ (à gauche) crée un moment positif : $+P_A \\times d_A$. $P_B$ (à droite) crée un moment négatif : $-P_B \\times d_B$. Équilibre : $P_A \\times d_A - P_B \\times d_B = 0$, soit $P_A \\times d_A = P_B \\times d_B$.',
        '$d_B = \\dfrac{P_A \\times d_A}{P_B} = \\dfrac{300 \\times 2}{450} = \\dfrac{600}{450} = 1{,}33$ m. Comme $1{,}33 < 2$ m, l\'enfant $B$ est bien sur la planche. Il s\'assoit plus près du centre car il est plus lourd.'
      ],
      finalAnswer: '$d_B \\approx 1{,}33$ m du pivot. L\'enfant le plus lourd ($45$ kg) s\'assoit plus près du centre ($1{,}33$ m) que l\'enfant le plus léger ($30$ kg, à $2$ m), conformément au principe du levier.'
    },

    evaluation: {
      title: 'Évaluation — Principes mécaniques de base',
      duration: '25 min',
      questions: [
        {
          statement: 'On exerce une force perpendiculaire $F = 120$ N sur une clé à molette, à $d = 0{,}25$ m de l\'axe du boulon. Calculer le moment exercé sur le boulon (en N$\\cdot$m).',
          type: 'numeric',
          answer: 30,
          tolerance: 0.5,
          unit: 'N·m',
          points: 2,
          correction: '$M = F \\times d = 120 \\times 0{,}25 = 30$ N$\\cdot$m. Si on utilisait une clé plus longue ($d = 0{,}5$ m), le même effort donnerait $M = 60$ N$\\cdot$m — c\'est pourquoi on utilise des clés longues pour desserrer les boulons récalcitrants.'
        },
        {
          statement: 'Les deux conditions d\'équilibre statique d\'un solide sont :',
          type: 'multiple-choice',
          options: [
            '$\\sum F = 0$ uniquement',
            '$\\sum \\vec{F} = \\vec{0}$ et $\\sum M_O = 0$',
            '$\\sum M = 0$ uniquement',
            '$v = \\text{constante}$ et $\\omega = 0$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'équilibre statique exige <strong>deux</strong> conditions simultanées : la somme vectorielle des forces est nulle (pas de translation) <strong>et</strong> la somme des moments en tout point est nulle (pas de rotation). L\'une sans l\'autre ne suffit pas.'
        },
        {
          statement: 'Un ouvrier utilise un pied-de-biche pour arracher un clou. La résistance du clou est $P = 600$ N à $d_1 = 3$ cm du point d\'appui. L\'ouvrier exerce sa force à $d_2 = 30$ cm du point d\'appui. Quelle force $F$ doit-il exercer pour arracher le clou (en N) ?',
          type: 'numeric',
          answer: 60,
          tolerance: 1,
          unit: 'N',
          points: 3,
          correction: 'Principe du levier : $P \\times d_1 = F \\times d_2$ → $600 \\times 0{,}03 = F \\times 0{,}30$ → $F = \\dfrac{18}{0{,}30} = 60$ N. Le pied-de-biche amplifie la force par le rapport $\\dfrac{d_2}{d_1} = \\dfrac{30}{3} = 10$ : on exerce $10$ fois moins de force que la résistance du clou.'
        },
        {
          statement: 'Un objet de masse $m = 8{,}5$ kg est posé sur une table. Quel est son poids ? (Prendre $g = 9{,}81$ N/kg, arrondir au dixième)',
          type: 'numeric',
          answer: 83.4,
          tolerance: 0.2,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 8{,}5 \\times 9{,}81 = 83{,}385 \\approx 83{,}4$ N. Le poids est une force (en N) proportionnelle à la masse (en kg). Ne pas confondre masse et poids !'
        },
        {
          statement: 'Le bras de levier est défini comme :',
          type: 'multiple-choice',
          options: [
            'La distance entre le point d\'application de la force et le pivot',
            'La distance perpendiculaire entre la droite d\'action de la force et le pivot',
            'La norme de la force divisée par la distance au pivot',
            'La longueur totale du levier'
          ],
          answer: 1,
          points: 1,
          correction: 'Le bras de levier est la distance <strong>perpendiculaire</strong> entre le pivot et la <strong>droite d\'action</strong> de la force. Ce n\'est la distance au point d\'application que si la force est perpendiculaire à la ligne pivot-application. Si la force fait un angle $\\alpha$ avec cette ligne : $d = L \\times \\sin(\\alpha)$.'
        }
      ]
    }
  });
