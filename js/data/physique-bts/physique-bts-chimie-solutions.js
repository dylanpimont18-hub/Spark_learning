/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-chimie-solutions.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-chimie-solutions',
    level: 3, subject: 'physique',
    icon: '🧪',
    title: 'Chimie des solutions (pH, tampons, titrages)',
    subtitle: 'pH d\'une solution, solutions tampons (relation d\'Henderson-Hasselbalch), titrage acido-basique, équivalence',
    keywords: ['pH', 'Acide-base', 'Tampon', 'Titrage', 'Équivalence'],
    physics: 'La chimie des solutions permet de contrôler le pH des eaux de process, de piscine ou d\'effluents avant rejet, de comprendre le rôle des solutions tampons dans les procédés industriels et biologiques, et de doser une concentration inconnue par titrage lors d\'un contrôle qualité.',

    cours: {
      intro: 'En solution aqueuse, la concentration en ions oxonium $[\\text{H}_3\\text{O}^+]$ détermine l\'acidité du milieu, mesurée par le <strong>pH</strong> : $pH = -\\log[\\text{H}_3\\text{O}^+]$, sans unité, généralement compris entre 0 et 14 à 25°C.<br/><br/>Un acide fort ou une base forte se dissocie totalement dans l\'eau, contrairement à un acide ou une base faible qui ne se dissocie que partiellement. Une <strong>solution tampon</strong>, formée d\'un acide faible et de sa base conjuguée, a la propriété remarquable de <strong>résister aux variations de pH</strong> lors de l\'ajout modéré d\'acide ou de base.<br/><br/>Le <strong>titrage acido-basique</strong> permet de déterminer la concentration inconnue d\'une espèce en la faisant réagir avec une solution de concentration connue (solution titrante), jusqu\'à l\'<strong>équivalence</strong> : le point où les réactifs ont été mélangés dans les proportions stœchiométriques.',
      definitions: [
        { term: 'pH', def: '$pH = -\\log[\\text{H}_3\\text{O}^+]$, où $[\\text{H}_3\\text{O}^+]$ est la concentration en ions oxonium (mol/L). Une solution est acide si $pH<7$, basique si $pH>7$, neutre si $pH=7$ (à 25°C).' },
        { term: 'Solution tampon', def: 'Mélange d\'un acide faible $AH$ (de constante $pK_a$) et de sa base conjuguée $A^-$ en quantités comparables. Son pH est donné par la relation d\'Henderson-Hasselbalch : $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$, et varie très peu lors d\'un ajout modéré d\'acide ou de base.' },
        { term: 'Équivalence (titrage)', def: 'Point du titrage où les réactifs ont été introduits dans les proportions <strong>stœchiométriques</strong> exactes : $C_A V_A = C_B V_{eq}$ pour une réaction acide-base $1{:}1$.' },
        { term: 'Indicateur coloré', def: 'Espèce chimique changeant de couleur selon le pH du milieu, utilisée pour repérer visuellement l\'équivalence d\'un titrage (zone de virage à choisir proche du pH d\'équivalence).' }
      ],
      method: {
        title: 'Exploiter une courbe de titrage pH = f(V) en 3 étapes',
        steps: [
          '<strong>Repérer le point d\'équivalence</strong> sur la courbe $pH = f(V)$ : c\'est le point d\'inflexion, où la pente de la courbe est maximale (saut de pH le plus rapide).',
          '<strong>Déterminer le volume équivalent</strong> $V_{eq}$ à l\'aplomb de ce point.',
          '<strong>Calculer la concentration inconnue</strong> grâce à la relation d\'équivalence $C_A V_A = C_B V_{eq}$ (cas d\'une réaction acide-base 1:1).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Titrage acido-basique (méthode pH-métrique)',
        title: 'Courbe de titrage pH = f(V) et repérage de l\'équivalence',
        description: 'Lors du titrage d\'un acide par une base, le pH évolue lentement puis subit un <strong>saut brutal</strong> autour du <strong>point d\'équivalence</strong>, repéré par le point d\'inflexion de la courbe $pH = f(V)$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="titrage-title titrage-desc">
            <title id="titrage-title">Courbe de titrage pH en fonction du volume verse</title>
            <desc id="titrage-desc">Un graphique represente le pH en ordonnee en fonction du volume de solution titrante verse en abscisse. La courbe croit lentement au debut, puis subit un saut rapide autour d'un point d'inflexion appele equivalence, avant de croitre a nouveau lentement. Des lignes pointillees relient ce point d'equivalence aux deux axes, donnant le volume equivalent en abscisse.</desc>

            <defs>
              <marker id="arrow-physbts-titrage" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-physbts-titrage)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="50" marker-end="url(#arrow-physbts-titrage)"></line>
            <text class="tick-label" x="60" y="32" text-anchor="middle">pH</text>
            <text class="tick-label" x="518" y="276" text-anchor="end">V (mL)</text>

            <!-- courbe de titrage (sigmoide) -->
            <path class="curve-main" fill="none" d="M60,230 L104,225.5 L148,219.5 L192,210.5 L236,192.5 L258,177.5 L269,167 L280,155 L291,143 L302,132.5 L324,114.5 L368,98 L412,90.5 L456,86 L500,83"></path>

            <!-- point d'equivalence -->
            <circle class="plot-point" cx="280" cy="155" r="4"></circle>
            <line class="guide-line" x1="280" y1="155" x2="280" y2="260"></line>
            <line class="guide-line" x1="60" y1="155" x2="280" y2="155"></line>
            <text class="tick-label" x="280" y="274" text-anchor="middle">V_eq</text>
            <text class="tick-label" x="50" y="159" text-anchor="end">7</text>
            <text class="annotation-label" x="330" y="140" text-anchor="start">Équivalence</text>
          </svg>
        `,
        notes: [
          'Loin de l\'équivalence, l\'ajout de solution titrante ne fait varier le pH que <strong>lentement</strong>.',
          'Au voisinage de l\'équivalence, un ajout même minime de solution titrante provoque un <strong>saut de pH</strong> important : c\'est la zone la plus sensible de la courbe.',
          'Le <strong>volume équivalent</strong> $V_{eq}$, repéré à l\'aplomb du point d\'inflexion, permet de calculer la concentration inconnue grâce à la relation d\'équivalence $C_A V_A = C_B V_{eq}$.'
        ],
        reading: 'Suis la courbe de gauche à droite : repère la zone de variation lente, puis le saut de pH marquant l\'équivalence, et enfin lis le volume $V_{eq}$ à l\'aplomb de ce point.',
        caption: 'Courbe de titrage pH-métrique : le point d\'équivalence, repéré au point d\'inflexion (saut de pH maximal), donne le volume équivalent $V_{eq}$ nécessaire au calcul de la concentration inconnue.'
      },
      example: {
        statement: 'On titre un volume $V_A = 20$ mL d\'une solution d\'acide chlorhydrique de concentration inconnue $C_A$ par une solution d\'hydroxyde de sodium de concentration $C_B = 0{,}1$ mol/L. L\'équivalence est repérée pour un volume versé $V_{eq} = 16$ mL.<br/><br/>Calculer la concentration $C_A$ de la solution d\'acide chlorhydrique.',
        steps: [
          'La réaction de titrage $\\text{H}_3\\text{O}^+ + \\text{HO}^- \\rightarrow 2\\,\\text{H}_2\\text{O}$ est une réaction acide-base $1{:}1$ : à l\'équivalence, les quantités de matière d\'acide et de base versée sont égales.',
          'Relation d\'équivalence : $C_A V_A = C_B V_{eq}$.',
          'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}1 \\times 16}{20} = \\dfrac{1{,}6}{20} = 0{,}08$ mol/L.'
        ],
        answer: '$C_A = 0{,}08$ mol/L. À l\'équivalence, le pH de la solution résultante (mélange d\'acide fort et de base forte) est proche de $7$, car les ions $\\text{H}_3\\text{O}^+$ et $\\text{HO}^-$ ont exactement réagi en proportions stœchiométriques.'
      },
      formulas: [
        '$pH = -\\log[\\text{H}_3\\text{O}^+]$',
        'Produit ionique de l\'eau (à 25°C) : $K_e = [\\text{H}_3\\text{O}^+][\\text{HO}^-] = 10^{-14}$',
        'Relation d\'équivalence (titrage 1:1) : $C_A V_A = C_B V_{eq}$',
        'Concentration en ions oxonium à partir du pH : $[\\text{H}_3\\text{O}^+] = 10^{-pH}$',
        'Relation d\'Henderson-Hasselbalch (solution tampon) : $pH = pK_a + \\log\\dfrac{[A^-]}{[AH]}$',
        'Dilution : $C_1 V_1 = C_2 V_2$'
      ],
      recap: [
        'Le pH mesure l\'acidité d\'une solution : $pH = -\\log[\\text{H}_3\\text{O}^+]$, avec $pH<7$ acide, $pH>7$ basique (à 25°C).',
        'Une solution <strong>tampon</strong> (acide faible + base conjuguée) résiste aux variations de pH lors d\'un ajout modéré d\'acide ou de base.',
        'À l\'<strong>équivalence</strong> d\'un titrage, les réactifs ont réagi dans les proportions stœchiométriques : $C_A V_A = C_B V_{eq}$ (réaction 1:1).',
        'Le point d\'équivalence se repère graphiquement au point d\'<strong>inflexion</strong> de la courbe $pH=f(V)$, là où le saut de pH est le plus rapide.'
      ],
      piege: 'Une erreur fréquente est de confondre le point d\'équivalence avec le point où $pH=7$ : ce n\'est vrai que pour le titrage d\'un acide fort par une base forte. Attention, pour un acide faible ou une base faible, le pH à l\'équivalence est différent de $7$, et l\'équivalence doit toujours être repérée graphiquement au point d\'inflexion de la courbe, pas simplement en cherchant $pH=7$.'
    },

    quiz: [
      {
        q: 'Une solution a une concentration en ions oxonium $[\\text{H}_3\\text{O}^+] = 1{,}0\\times10^{-3}$ mol/L. Quel est son pH ?',
        options: [
          '$pH=3$',
          '$pH=-3$',
          '$pH=1{,}0\\times10^{-3}$',
          '$pH=11$'
        ],
        answer: 0,
        correction: '$pH = -\\log[\\text{H}_3\\text{O}^+] = -\\log(1{,}0\\times10^{-3}) = 3$.'
      },
      {
        q: 'Pourquoi une solution tampon résiste-t-elle aux variations de pH lors de l\'ajout d\'un peu d\'acide ou de base ?',
        options: [
          'Parce qu\'elle contient un acide faible et sa base conjuguée en quantités comparables, capables de neutraliser un ajout modéré d\'acide ou de base',
          'Parce qu\'elle est toujours neutre ($pH=7$)',
          'Parce qu\'elle ne contient que de l\'eau pure',
          'Parce que sa concentration est très diluée'
        ],
        answer: 0,
        correction: 'Le couple acide faible/base conjuguée présent en quantités comparables peut consommer les ions $\\text{H}_3\\text{O}^+$ ou $\\text{HO}^-$ ajoutés, ce qui limite fortement la variation de pH, contrairement à une solution non tamponnée.'
      },
      {
        q: 'Lors du titrage d\'un acide fort par une base forte, à l\'équivalence, le volume versé $V_{eq}$ vérifie :',
        options: [
          '$C_A V_A = C_B V_{eq}$',
          '$C_A = C_B$ quel que soit $V_{eq}$',
          '$V_{eq} = V_A + V_B$',
          '$C_A + V_A = C_B + V_{eq}$'
        ],
        answer: 0,
        correction: 'La relation d\'équivalence pour une réaction acide-base 1:1 est $C_A V_A = C_B V_{eq}$, traduisant l\'égalité des quantités de matière d\'acide et de base à l\'équivalence.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['pH', 'equivalence']);

        if (typeExo === 'pH') {
          var n = rand(2, 6);
          var coeff = pick([1, 1.5, 2, 2.5, 3, 4, 5, 8]);
          var C = coeff * Math.pow(10, -n);
          var pHval = parseFloat((-Math.log10(C)).toFixed(2));
          var contexte = pick([
            'un bain de traitement de surface',
            'une eau de piscine',
            'un effluent industriel avant rejet',
            'une solution de nettoyage domestique',
            'un sol analysé en laboratoire agricole'
          ]);
          return {
            statement: 'Une solution aqueuse utilisée dans ' + contexte + ' a une concentration en ions oxonium $[\\text{H}_3\\text{O}^+] = ' + fr(coeff, 1) + ' \\times 10^{-' + n + '}$ mol/L.<br/><br/>Calcule le pH de cette solution (arrondi au centième).',
            answer: pHval,
            tolerance: 0.05,
            unit: '',
            hint: 'Utilise $pH = -\\log[\\text{H}_3\\text{O}^+]$.',
            solution: [
              'Formule : $pH = -\\log[\\text{H}_3\\text{O}^+] = -\\log(' + fr(coeff, 1) + ' \\times 10^{-' + n + '})$.',
              'Résultat : $pH \\approx ' + fr(pHval, 2) + '$.'
            ]
          };
        } else {
          var VA = pick([10, 15, 20, 25, 30]);
          var CB = pick([0.05, 0.1, 0.15, 0.2]);
          var Veq = randFloat(5, VA * 1.5, 1);
          var CA = parseFloat((CB * Veq / VA).toFixed(4));
          var contexte2 = pick([
            'un contrôle qualité d\'eau adoucie',
            'un dosage d\'acide dans un produit d\'entretien',
            'une analyse de laboratoire de chimie appliquée',
            'un contrôle de conformité avant rejet'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on titre un volume $V_A = ' + VA + '$ mL d\'une solution d\'acide fort de concentration inconnue $C_A$ par une solution basique de concentration $C_B = ' + fr(CB, 2) + '$ mol/L. L\'équivalence est repérée pour un volume versé $V_{eq} = ' + fr(Veq, 1) + '$ mL.<br/><br/>Calcule la concentration $C_A$ (en mol/L, arrondie au millième).',
            answer: CA,
            tolerance: Math.max(0.001, parseFloat((CA * 0.05).toFixed(4))),
            unit: 'mol/L',
            hint: 'Utilise la relation d\'équivalence $C_A V_A = C_B V_{eq}$.',
            solution: [
              'Relation d\'équivalence : $C_A V_A = C_B V_{eq}$.',
              'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{' + fr(CB, 2) + ' \\times ' + fr(Veq, 1) + '}{' + VA + '}$.',
              'Résultat : $C_A \\approx ' + fr(CA, 3) + '$ mol/L.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On prépare une solution tampon en mélangeant de l\'acide éthanoïque ($pK_a = 4{,}8$) et sa base conjuguée, l\'ion éthanoate, dans un rapport de concentrations $\\dfrac{[\\text{base}]}{[\\text{acide}]} = 2$.',
      tasks: [
        'Calculer le pH de cette solution tampon grâce à la relation d\'Henderson-Hasselbalch.',
        'On ajoute une petite quantité de base forte à cette solution tampon : le rapport $\\dfrac{[\\text{base}]}{[\\text{acide}]}$ passe à $3$. Calculer le nouveau pH et commenter sa variation.',
        'Expliquer pourquoi l\'ajout de la même quantité de base forte dans de l\'eau pure ferait varier le pH de façon beaucoup plus importante.'
      ],
      solutions: [
        '$pH = pK_a + \\log\\dfrac{[\\text{base}]}{[\\text{acide}]} = 4{,}8 + \\log(2) = 4{,}8 + 0{,}30 = 5{,}1$.',
        '$pH = 4{,}8 + \\log(3) = 4{,}8 + 0{,}48 \\approx 5{,}28$. La variation de pH n\'est que d\'environ $0{,}18$ unité malgré l\'ajout de base : c\'est la signature d\'une solution tampon efficace.',
        'Dans l\'eau pure, il n\'existe aucun couple acide/base en quantité suffisante pour <strong>consommer</strong> les ions $\\text{HO}^-$ ajoutés : leur concentration augmente directement, ce qui provoque une variation de pH beaucoup plus brutale que dans la solution tampon, où le couple $AH/A^-$ absorbe l\'essentiel de la perturbation.'
      ],
      finalAnswer: '$pH \\approx 5{,}1$ initialement, puis $pH \\approx 5{,}28$ après ajout de base : une variation de seulement $0{,}18$ unité de pH, bien plus faible que dans l\'eau pure. Cette résistance aux variations de pH, appelée <strong>pouvoir tampon</strong>, est mise à profit dans de nombreux procédés industriels et biologiques nécessitant un pH stable.'
    },

    evaluation: {
      title: 'Évaluation — Chimie des solutions (pH, tampons, titrages)',
      duration: '30 min',
      questions: [
        {
          statement: 'Une solution a $[\\text{H}_3\\text{O}^+] = 1{,}0\\times10^{-5}$ mol/L. Calculer son pH.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$pH=-\\log(1{,}0\\times10^{-5})=5$.'
        },
        {
          statement: 'À 25°C, une solution de $pH = 9$ est :',
          type: 'multiple-choice',
          options: [
            'Acide',
            'Neutre',
            'Basique',
            'On ne peut pas savoir'
          ],
          answer: 2,
          points: 2,
          correction: 'À 25°C, une solution est basique si $pH>7$ : c\'est le cas ici avec $pH=9$.'
        },
        {
          statement: 'On titre $V_A=15$ mL d\'un acide fort par une base de concentration $C_B=0{,}2$ mol/L. L\'équivalence est obtenue pour $V_{eq}=12$ mL. Calculer $C_A$ (en mol/L, arrondie au millième).',
          type: 'numeric',
          answer: 0.16,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 2,
          correction: '$C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}2 \\times 12}{15} = \\dfrac{2{,}4}{15} = 0{,}16$ mol/L.'
        },
        {
          statement: 'Une solution tampon a $pK_a=4{,}2$ et un rapport $\\dfrac{[\\text{base}]}{[\\text{acide}]}=5$. Calculer son pH (arrondi au centième) grâce à la relation d\'Henderson-Hasselbalch.',
          type: 'numeric',
          answer: 4.9,
          tolerance: 0.05,
          unit: '',
          points: 3,
          correction: '$pH = pK_a + \\log\\dfrac{[\\text{base}]}{[\\text{acide}]} = 4{,}2 + \\log(5) \\approx 4{,}2 + 0{,}70 \\approx 4{,}90$.'
        },
        {
          statement: 'Le point d\'équivalence d\'un titrage acide fort / base forte correspond, sur la courbe $pH=f(V)$, à :',
          type: 'multiple-choice',
          options: [
            'Le maximum de la courbe',
            'Le point d\'inflexion, où la pente est maximale',
            'Le minimum de la courbe',
            'Le point où $V=0$'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'équivalence correspond au point d\'inflexion de la courbe $pH=f(V)$, c\'est-à-dire au point où le saut de pH (la pente) est le plus rapide.'
        }
      ]
    }
  });
