/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-signaux.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-signaux',
    level: 2, subject: 'physique',
    icon: '📡',
    title: 'Signaux et capteurs',
    subtitle: 'Signal, capteur, chaîne de mesure, relation affine U = aG + b, étalonnage',
    keywords: ['Signal', 'Capteur', 'Chaîne de mesure', 'Étalonnage', 'Tension'],
    physics: 'Comprendre la chaîne capteur-signal permet de régler un thermostat connecté, d\'étalonner une sonde médicale, de concevoir une alarme à détecteur de luminosité, ou de fiabiliser les mesures d\'une station météo automatique.',

    cours: {
      intro: 'Un thermostat qui régule le chauffage, une alarme qui s\'active à la tombée de la nuit, un airbag qui se déclenche lors d\'un choc : dans tous ces systèmes, une grandeur physique (température, luminosité, décélération...) doit être <strong>convertie</strong> en une information exploitable par un circuit électronique.<br/><br/>C\'est le rôle du <strong>capteur</strong> : il transforme une grandeur physique en un <strong>signal électrique</strong>, le plus souvent une tension. Encore faut-il savoir, à partir de cette tension mesurée, retrouver la valeur de la grandeur physique d\'origine : c\'est tout l\'enjeu de l\'<strong>étalonnage</strong>.',
      definitions: [
        { term: 'Signal', def: 'Variation d\'une grandeur physique porteuse d\'information, qui se propage (signal électrique, sonore, lumineux...).' },
        { term: 'Capteur', def: 'Dispositif qui convertit une grandeur physique (le <strong>mesurande</strong> : température, luminosité, pression...) en un signal électrique exploitable, le plus souvent une <strong>tension</strong>.' },
        { term: 'Chaîne de mesure', def: 'Succession d\'éléments transformant une grandeur physique en une information exploitable : Grandeur physique $\\rightarrow$ Capteur $\\rightarrow$ Signal électrique $\\rightarrow$ traitement/affichage.' },
        { term: 'Étalonnage (calibration)', def: 'Détermination expérimentale de la relation entre la grandeur physique mesurée et la tension délivrée par le capteur, souvent une relation <strong>affine</strong> $U = a \\times G + b$.' }
      ],
      method: {
        title: 'Exploiter la courbe d\'étalonnage d\'un capteur en 3 étapes',
        steps: [
          '<strong>Identifier</strong> la grandeur physique mesurée (mesurande $G$) et le signal électrique délivré par le capteur (tension $U$).',
          '<strong>Repérer la relation</strong> entre les deux, généralement une droite affine $U = a \\times G + b$ : déterminer la pente $a = \\dfrac{U_2 - U_1}{G_2 - G_1}$ et l\'ordonnée à l\'origine $b$ à partir de deux points de la courbe d\'étalonnage.',
          '<strong>Utiliser cette relation</strong> (calcul ou lecture graphique) pour convertir une tension mesurée en valeur de la grandeur physique, ou inversement.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Chaîne de mesure et étalonnage d\'un capteur',
        title: 'D\'une grandeur physique à une tension exploitable',
        description: 'Un capteur de température convertit la température $\\theta$ en une tension $U$. La courbe d\'étalonnage, une droite, permet de retrouver $\\theta$ à partir d\'une tension mesurée : $U = 0{,}02\\,\\theta + 0{,}5$.',
        svg: `
          <svg viewBox="0 0 560 380" role="img" aria-labelledby="signaux2nde-title signaux2nde-desc">
            <title id="signaux2nde-title">Chaine de mesure d'un capteur et courbe d'etalonnage</title>
            <desc id="signaux2nde-desc">En haut, un schema-bloc represente trois cases reliees par des fleches : grandeur physique, temperature theta, puis capteur, une thermistance, puis signal electrique, tension U. En bas, un graphique represente la tension U en volts en fonction de la temperature theta en degres Celsius : une droite croissante relie le point zero degre, zero virgule cinq volt, au point cent degres, deux virgule cinq volts. Un exemple de lecture graphique est indique par des pointilles reliant cinquante degres sur l'axe horizontal a un virgule cinq volt sur l'axe vertical, en passant par un point marque sur la droite.</desc>

            <defs>
              <marker id="arrow-phys2-signaux" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- schema bloc : chaine de mesure -->
            <rect class="frame-line" x="30" y="30" width="140" height="50" fill="none"></rect>
            <text class="tick-label" x="100" y="50" text-anchor="middle">Grandeur physique</text>
            <text class="tick-label" x="100" y="66" text-anchor="middle">(θ en °C)</text>

            <line class="curve-main" x1="170" y1="55" x2="212" y2="55" marker-end="url(#arrow-phys2-signaux)"></line>

            <rect class="frame-line" x="212" y="30" width="136" height="50" fill="none"></rect>
            <text class="annotation-label" x="280" y="50" text-anchor="middle">CAPTEUR</text>
            <text class="tick-label" x="280" y="66" text-anchor="middle">(thermistance)</text>

            <line class="curve-main" x1="348" y1="55" x2="390" y2="55" marker-end="url(#arrow-phys2-signaux)"></line>

            <rect class="frame-line" x="390" y="30" width="140" height="50" fill="none"></rect>
            <text class="tick-label" x="460" y="50" text-anchor="middle">Signal électrique</text>
            <text class="tick-label" x="460" y="66" text-anchor="middle">(tension U)</text>

            <!-- courbe d'etalonnage -->
            <text class="label-soft" x="280" y="105" text-anchor="middle">Étalonnage : U = f(θ)</text>

            <line class="frame-line" x1="55" y1="340" x2="500" y2="340" marker-end="url(#arrow-phys2-signaux)"></line>
            <line class="frame-line" x1="60" y1="340" x2="60" y2="145" marker-end="url(#arrow-phys2-signaux)"></line>
            <text class="tick-label" x="60" y="132" text-anchor="middle">U (V)</text>
            <text class="tick-label" x="512" y="344" text-anchor="start">θ (°C)</text>

            <line class="frame-line" x1="55" y1="340" x2="60" y2="340"></line>
            <text class="tick-label" x="46" y="344" text-anchor="end">0</text>
            <line class="frame-line" x1="55" y1="280" x2="60" y2="280"></line>
            <text class="tick-label" x="46" y="284" text-anchor="end">1</text>
            <line class="frame-line" x1="55" y1="220" x2="60" y2="220"></line>
            <text class="tick-label" x="46" y="224" text-anchor="end">2</text>
            <line class="frame-line" x1="55" y1="160" x2="60" y2="160"></line>
            <text class="tick-label" x="46" y="164" text-anchor="end">3</text>

            <line class="frame-line" x1="60" y1="340" x2="60" y2="345"></line>
            <text class="tick-label" x="60" y="358" text-anchor="middle">0</text>
            <line class="frame-line" x1="160" y1="340" x2="160" y2="345"></line>
            <text class="tick-label" x="160" y="358" text-anchor="middle">25</text>
            <line class="frame-line" x1="260" y1="340" x2="260" y2="345"></line>
            <text class="tick-label" x="260" y="358" text-anchor="middle">50</text>
            <line class="frame-line" x1="360" y1="340" x2="360" y2="345"></line>
            <text class="tick-label" x="360" y="358" text-anchor="middle">75</text>
            <line class="frame-line" x1="460" y1="340" x2="460" y2="345"></line>
            <text class="tick-label" x="460" y="358" text-anchor="middle">100</text>

            <!-- droite d'etalonnage -->
            <line class="curve-main" x1="60" y1="310" x2="460" y2="190"></line>
            <circle class="plot-point" cx="60" cy="310" r="4"></circle>
            <text class="annotation-label" x="66" y="300" text-anchor="start">(0 ; 0,5 V)</text>
            <circle class="plot-point" cx="460" cy="190" r="4"></circle>
            <text class="annotation-label" x="454" y="180" text-anchor="end">(100 ; 2,5 V)</text>

            <!-- lecture graphique a theta = 50 -->
            <line class="guide-line" x1="260" y1="340" x2="260" y2="250"></line>
            <line class="guide-line" x1="260" y1="250" x2="60" y2="250"></line>
            <circle class="plot-point-alt" cx="260" cy="250" r="5"></circle>
            <text class="tick-label" x="44" y="254" text-anchor="end">1,5</text>
          </svg>
        `,
        notes: [
          'La chaîne de mesure convertit la grandeur physique (ici la température $\\theta$) en un signal électrique exploitable : la tension $U$, mesurable et transmissible à un circuit de traitement.',
          'La courbe d\'étalonnage est une <strong>droite</strong> : la relation entre $U$ et $\\theta$ est affine, $U = a\\theta + b$. Avec les deux points de mesure $(0\\,;\\,0{,}5)$ et $(100\\,;\\,2{,}5)$, la pente vaut $a = \\dfrac{2{,}5 - 0{,}5}{100 - 0} = 0{,}02$ V/°C, et $b = 0{,}5$ V (valeur de $U$ quand $\\theta = 0$).',
          'Lecture graphique : à $\\theta = 50°C$, la droite donne $U = 1{,}5$ V — ce qui se vérifie par le calcul : $U = 0{,}02 \\times 50 + 0{,}5 = 1 + 0{,}5 = 1{,}5$ V.'
        ],
        reading: 'Suis d\'abord la chaîne de mesure en haut (grandeur physique → capteur → signal électrique), puis la droite d\'étalonnage en bas : repère les deux points connus, et la lecture graphique en pointillés à $\\theta = 50°C$.',
        caption: 'Chaîne de mesure d\'un capteur de température et courbe d\'étalonnage associée : $U = 0{,}02\\,\\theta + 0{,}5$ (en V, $\\theta$ en °C).'
      },
      example: {
        statement: 'Un capteur de luminosité délivre une tension $U_1 = 0{,}4$ V dans l\'obscurité ($G_1 = 0$ lux) et $U_2 = 2{,}4$ V en pleine lumière ($G_2 = 200$ lux). On admet une relation affine $U = a \\times G + b$.<br/><br/>Détermine la pente $a$ et l\'ordonnée à l\'origine $b$ de cette relation.',
        steps: [
          'Pente : $a = \\dfrac{U_2 - U_1}{G_2 - G_1} = \\dfrac{2{,}4 - 0{,}4}{200 - 0} = \\dfrac{2{,}0}{200} = 0{,}01$ V/lux.',
          'Ordonnée à l\'origine : on utilise le premier point ($G_1 = 0$, $U_1 = 0{,}4$) dans $U = aG + b$ : $0{,}4 = 0{,}01 \\times 0 + b$, donc $b = 0{,}4$ V.',
          'Vérification avec le second point : $U = 0{,}01 \\times 200 + 0{,}4 = 2{,}0 + 0{,}4 = 2{,}4$ V, conforme à $U_2$.'
        ],
        answer: '$a = 0{,}01$ V/lux et $b = 0{,}4$ V, soit $U = 0{,}01\\,G + 0{,}4$. Cette relation permettra ensuite de convertir n\'importe quelle tension mesurée en valeur de luminosité.'
      },
      formulas: [
        'Relation affine d\'étalonnage : $U = a \\times G + b$ ($G$ = grandeur physique mesurée, $a$ = pente, $b$ = ordonnée à l\'origine)',
        'Pente : $a = \\dfrac{U_2 - U_1}{G_2 - G_1}$ (à partir de deux points de calibration)',
        'Grandeur physique retrouvée à partir de $U$ : $G = \\dfrac{U - b}{a}$',
        'Chaîne de mesure : Grandeur physique $\\rightarrow$ Capteur $\\rightarrow$ Signal électrique (tension $U$)'
      ],
      recap: [
        'Un <strong>capteur</strong> convertit une grandeur physique (mesurande) en un signal électrique exploitable, en général une tension.',
        'La relation entre grandeur mesurée et tension est souvent une <strong>droite affine</strong> $U = aG + b$, déterminée par étalonnage.',
        'La pente $a = \\dfrac{U_2-U_1}{G_2-G_1}$ se calcule à partir de deux points de mesure connus.',
        'Une <strong>chaîne de mesure</strong> relie la grandeur physique au signal électrique exploitable, en passant par le capteur.'
      ],
      piege: 'Une erreur fréquente est de supposer que la tension délivrée par un capteur est directement <strong>proportionnelle</strong> à la grandeur physique mesurée, en oubliant le terme $b$, alors que la relation est en général affine. Attention : si $b \\neq 0$ (ce qui est très courant), doubler la grandeur physique mesurée ne double <strong>pas</strong> la tension $U$ — il faut toujours utiliser la relation complète $U = aG + b$, jamais une simple règle de proportionnalité.'
    },

    quiz: [
      {
        q: 'Un capteur de température délivre $U = 0{,}5$ V à $\\theta = 0°C$ et $U = 2{,}5$ V à $\\theta = 100°C$, selon une relation affine. Quelle est la pente $a$ de cette relation ?',
        options: [
          '$a = 0{,}02$ V/°C',
          '$a = 2$ V/°C',
          '$a = 0{,}2$ V/°C',
          '$a = 50$ V/°C'
        ],
        answer: 0,
        correction: '$a = \\dfrac{U_2 - U_1}{\\theta_2 - \\theta_1} = \\dfrac{2{,}5 - 0{,}5}{100 - 0} = \\dfrac{2}{100} = 0{,}02$ V/°C.'
      },
      {
        q: 'Dans une chaîne de mesure, quel est l\'ordre correct des éléments ?',
        options: [
          'Capteur → Grandeur physique → Signal électrique',
          'Grandeur physique → Capteur → Signal électrique',
          'Signal électrique → Capteur → Grandeur physique',
          'Grandeur physique → Signal électrique → Capteur'
        ],
        answer: 1,
        correction: 'La grandeur physique (mesurande) est d\'abord captée, puis le <strong>capteur</strong> la convertit en <strong>signal électrique</strong> exploitable : Grandeur physique → Capteur → Signal électrique.'
      },
      {
        q: 'Un capteur a pour relation d\'étalonnage $U = 0{,}02\\,\\theta + 0{,}5$ (en V, $\\theta$ en °C). Quelle tension délivre-t-il à $\\theta = 50°C$ ?',
        options: [
          '$U = 1{,}5$ V',
          '$U = 1{,}0$ V',
          '$U = 2{,}5$ V',
          '$U = 0{,}52$ V'
        ],
        answer: 0,
        correction: '$U = 0{,}02 \\times 50 + 0{,}5 = 1 + 0{,}5 = 1{,}5$ V.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['tension_depuis_grandeur', 'grandeur_depuis_tension']);
        var a = randFloat(0.01, 0.05, 3);
        var b = randFloat(0.1, 1.5, 2);
        var contexte = pick([
          'un four industriel équipé d\'une sonde électronique',
          'un congélateur de laboratoire pharmaceutique',
          'une serre agricole connectée',
          'un système de climatisation automatisé',
          'une sonde de température corporelle électronique'
        ]);

        if (typeExo === 'tension_depuis_grandeur') {
          var G = rand(-10, 150);
          var U = parseFloat((a * G + b).toFixed(2));
          return {
            statement: 'Pour ' + contexte + ', un capteur de température suit la relation d\'étalonnage $U = ' + fr(a, 3) + '\\,\\theta + ' + fr(b, 2) + '$ (en V, $\\theta$ en °C).<br/><br/>Calcule la tension $U$ délivrée pour une température $\\theta = ' + G + '°C$ (arrondie au centième).',
            answer: U,
            tolerance: Math.max(0.02, parseFloat((Math.abs(U) * 0.03).toFixed(2))),
            unit: 'V',
            hint: 'Remplace $\\theta$ dans la relation $U = a\\theta + b$.',
            solution: [
              'Relation d\'étalonnage : $U = a\\theta + b = ' + fr(a, 3) + ' \\times ' + G + ' + ' + fr(b, 2) + '$.',
              'Terme $a\\theta$ : $' + fr(a, 3) + ' \\times ' + G + ' = ' + fr(parseFloat((a * G).toFixed(3)), 3) + '$.',
              'Résultat : $U \\approx ' + fr(U, 2) + '$ V.'
            ]
          };
        } else {
          var Uval = randFloat(0.5, 6, 2);
          var Gval = parseFloat(((Uval - b) / a).toFixed(1));
          return {
            statement: 'Pour ' + contexte + ', un capteur de température suit la relation d\'étalonnage $U = ' + fr(a, 3) + '\\,\\theta + ' + fr(b, 2) + '$ (en V, $\\theta$ en °C). Il délivre une tension mesurée $U = ' + fr(Uval, 2) + '$ V.<br/><br/>Calcule la température $\\theta$ correspondante (en °C, arrondie au dixième).',
            answer: Gval,
            tolerance: Math.max(0.5, parseFloat((Math.abs(Gval) * 0.03).toFixed(1))),
            unit: '°C',
            hint: 'Isole $\\theta$ dans la relation : $\\theta = \\dfrac{U - b}{a}$.',
            solution: [
              'Relation réarrangée : $\\theta = \\dfrac{U - b}{a}$.',
              'Application numérique : $\\theta = \\dfrac{' + fr(Uval, 2) + ' - ' + fr(b, 2) + '}{' + fr(a, 3) + '}$.',
              'Résultat : $\\theta \\approx ' + fr(Gval, 1) + '°C$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Avant d\'installer un capteur de température dans une chambre froide industrielle, on l\'étalonne : à $\\theta_1 = -20°C$, il délivre $U_1 = 0{,}3$ V ; à $\\theta_2 = 30°C$, il délivre $U_2 = 1{,}3$ V (relation affine).',
      tasks: [
        'Calculer la pente $a$ de la relation d\'étalonnage à partir de ces deux points de mesure.',
        'En déduire l\'ordonnée à l\'origine $b$, puis écrire la relation complète $U = f(\\theta)$.',
        'Lors de l\'installation, le capteur délivre une tension $U = 0{,}94$ V. Calculer la température $\\theta$ mesurée dans la chambre froide.'
      ],
      solutions: [
        'Pente : $a = \\dfrac{U_2 - U_1}{\\theta_2 - \\theta_1} = \\dfrac{1{,}3 - 0{,}3}{30 - (-20)} = \\dfrac{1{,}0}{50} = 0{,}02$ V/°C.',
        'Avec le premier point : $U_1 = a\\theta_1 + b$, donc $0{,}3 = 0{,}02 \\times (-20) + b = -0{,}4 + b$, d\'où $b = 0{,}7$ V. Relation complète : $U = 0{,}02\\,\\theta + 0{,}7$.',
        '$\\theta = \\dfrac{U - b}{a} = \\dfrac{0{,}94 - 0{,}7}{0{,}02} = \\dfrac{0{,}24}{0{,}02} = 12°C$.'
      ],
      finalAnswer: '$a = 0{,}02$ V/°C, $b = 0{,}7$ V, soit $U = 0{,}02\\,\\theta + 0{,}7$. La chambre froide est mesurée à $\\theta = 12°C$ : une température anormalement élevée pour ce type d\'installation, qui mériterait une vérification avant mise en service.'
    },

    evaluation: {
      title: 'Évaluation — Signaux et capteurs',
      duration: '30 min',
      questions: [
        {
          statement: 'Un capteur délivre $U_1 = 0{,}4$ V à $\\theta_1 = 0°C$ et $U_2 = 2{,}0$ V à $\\theta_2 = 80°C$. Calculer la pente $a$ de la relation d\'étalonnage (en V/°C).',
          type: 'numeric',
          answer: 0.02,
          tolerance: 0.002,
          unit: 'V/°C',
          points: 2,
          correction: '$a = \\dfrac{U_2 - U_1}{\\theta_2 - \\theta_1} = \\dfrac{2{,}0 - 0{,}4}{80 - 0} = \\dfrac{1{,}6}{80} = 0{,}02$ V/°C.'
        },
        {
          statement: 'Dans une chaîne de mesure, le rôle du capteur est de :',
          type: 'multiple-choice',
          options: [
            'Afficher directement la grandeur physique mesurée',
            'Convertir une grandeur physique en signal électrique exploitable',
            'Amplifier uniquement la tension du secteur',
            'Stocker les données mesurées en mémoire'
          ],
          answer: 1,
          points: 2,
          correction: 'Le capteur <strong>convertit</strong> la grandeur physique (mesurande) en un signal électrique, en général une tension, qui pourra ensuite être traité ou affiché.'
        },
        {
          statement: 'Un capteur suit la relation $U = 0{,}015\\,\\theta + 0{,}2$ (en V, $\\theta$ en °C). Calculer $U$ pour $\\theta = 60°C$ (en V).',
          type: 'numeric',
          answer: 1.1,
          tolerance: 0.05,
          unit: 'V',
          points: 3,
          correction: '$U = 0{,}015 \\times 60 + 0{,}2 = 0{,}9 + 0{,}2 = 1{,}1$ V.'
        },
        {
          statement: 'Un capteur suit la relation $U = 0{,}02\\,G + 0{,}5$ (en V). Il délivre $U = 1{,}7$ V. Calculer la grandeur physique $G$ mesurée.',
          type: 'numeric',
          answer: 60,
          tolerance: 2,
          unit: '',
          points: 2,
          correction: '$G = \\dfrac{U - b}{a} = \\dfrac{1{,}7 - 0{,}5}{0{,}02} = \\dfrac{1{,}2}{0{,}02} = 60$.'
        },
        {
          statement: 'Si la tension d\'un capteur suit une relation affine $U = aG + b$ avec $b \\neq 0$, alors doubler la grandeur physique $G$ mesurée :',
          type: 'multiple-choice',
          options: [
            'Double toujours exactement la tension $U$',
            'Ne double pas nécessairement la tension $U$, à cause du terme $b$',
            'Annule complètement la tension $U$',
            'N\'a aucun effet sur la tension $U$'
          ],
          answer: 1,
          points: 1,
          correction: 'Avec un terme $b \\neq 0$, la relation n\'est pas une simple proportionnalité : doubler $G$ ne double pas $U$ en général. Ce n\'est le cas que si $b = 0$.'
        }
      ]
    }
  });

