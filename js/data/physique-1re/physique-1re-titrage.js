/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-titrage.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-titrage',
    level: 2, subject: 'physique',
    icon: '🧪',
    title: 'Titrage (dosage) par réaction acido-basique',
    subtitle: 'Réaction support de titrage, équivalence, suivi pH-métrique, exploitation d\'une courbe pH = f(V)',
    keywords: ['Titrage', 'Équivalence', 'pH-métrie', 'Dosage', 'Concentration'],
    physics: 'Le titrage est la méthode de référence pour contrôler une concentration inconnue : acidité d\'un vinaigre ou d\'un jus de fruit, taux de chlore d\'une eau de piscine, teneur en principe actif d\'un médicament, conformité d\'un effluent avant rejet. C\'est un geste de laboratoire incontournable, aussi bien en contrôle qualité industriel qu\'en analyse médicale.',

    cours: {
      intro: 'Un <strong>titrage</strong> (ou dosage) est une méthode expérimentale qui permet de déterminer la concentration inconnue d\'une espèce chimique présente dans une solution, appelée <strong>solution titrée</strong>.<br/><br/>Le principe consiste à faire réagir cette espèce avec une solution de concentration parfaitement connue, appelée <strong>solution titrante</strong>, versée progressivement à l\'aide d\'une burette graduée. La réaction mise en jeu, appelée <strong>réaction support de titrage</strong>, peut être une réaction <strong>acido-basique</strong> (échange de protons $\\text{H}^+$) ou une réaction d\'<strong>oxydoréduction</strong> (échange d\'électrons) : dans les deux cas, le principe d\'exploitation reste le même.<br/><br/>Pour être utilisable, cette réaction doit être <strong>rapide</strong> (le résultat est immédiat après chaque ajout), <strong>totale</strong> (les réactifs sont intégralement consommés) et <strong>unique</strong> (aucune réaction parasite ne vient fausser le résultat).',
      definitions: [
        { term: 'Réaction support de titrage', def: 'Réaction chimique utilisée pour le titrage. Elle doit être rapide, totale et unique pour que le volume versé à l\'équivalence traduise fidèlement la quantité de matière initiale à déterminer.' },
        { term: 'Équivalence', def: 'Instant du titrage où les réactifs ont été mélangés dans les proportions <strong>stœchiométriques</strong> exactes de l\'équation de la réaction support. Pour une réaction $aA + bB \\rightarrow \\dots$, l\'équivalence est atteinte quand $\\dfrac{n_i(A)}{a} = \\dfrac{n_{versé}(B)}{b}$.' },
        { term: 'Suivi pH-métrique', def: 'Méthode de repérage de l\'équivalence par mesure continue du pH de la solution titrée à l\'aide d\'une sonde pH-métrique, ce qui permet de tracer la courbe $pH = f(V)$.' },
        { term: 'Indicateur coloré', def: 'Espèce chimique changeant de couleur selon le pH, ajoutée en petite quantité pour repérer visuellement l\'équivalence (sa zone de virage doit encadrer le pH à l\'équivalence).' }
      ],
      method: {
        title: 'Exploiter une courbe de titrage pH = f(V) en 3 étapes',
        steps: [
          '<strong>Repérer le point d\'équivalence</strong> par la <strong>méthode des tangentes</strong> : tracer deux tangentes parallèles à la courbe, de part et d\'autre du saut de pH, puis tracer la droite parallèle à égale distance des deux. Le point d\'intersection de cette droite avec la courbe est le point d\'équivalence.<br/>À défaut, on peut repérer directement le <strong>point d\'inflexion</strong> (le saut de pH le plus rapide), visuellement équivalent pour une lecture rapide.',
          '<strong>Lire le volume équivalent</strong> $V_{eq}$ en projetant ce point sur l\'axe des volumes versés.',
          '<strong>Calculer la concentration inconnue</strong> grâce à la relation d\'équivalence $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$, en identifiant bien les coefficients stœchiométriques $a$ et $b$ de l\'équation de la réaction support.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Titrage pH-métrique d\'un acide fort par une base forte',
        title: 'Courbe de titrage pH = f(V) et repérage de l\'équivalence',
        description: 'Titrage d\'un volume $V_A = 20$ mL d\'acide chlorhydrique de concentration $C_A = 0{,}1$ mol/L par une solution d\'hydroxyde de sodium de concentration $C_B = 0{,}1$ mol/L. Le pH évolue lentement, puis subit un <strong>saut brutal</strong> au voisinage de l\'équivalence ($V_{eq} = 20$ mL).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="titrage1re-title titrage1re-desc">
            <title id="titrage1re-title">Courbe de titrage pH en fonction du volume de soude verse</title>
            <desc id="titrage1re-desc">Un graphique represente le pH en ordonnee (de 0 a 14) en fonction du volume de solution titrante verse en abscisse (de 0 a 40 millilitres). La courbe part d'un pH proche de 1, augmente tres lentement jusqu'a environ 18 millilitres, puis subit un saut quasi vertical autour de 20 millilitres ou le pH passe d'environ 3 a environ 11, avant de se stabiliser lentement vers un pH d'environ 12,5. Des lignes pointillees relient le point d'equivalence, situe au milieu du saut a pH 7, aux deux axes, indiquant un volume equivalent de 20 millilitres.</desc>

            <defs>
              <marker id="arrow-phys1re-titrage" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="530" y2="260" marker-end="url(#arrow-phys1re-titrage)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="45" marker-end="url(#arrow-phys1re-titrage)"></line>
            <text class="tick-label" x="60" y="30" text-anchor="middle">pH</text>
            <text class="tick-label" x="528" y="278" text-anchor="end">V (mL)</text>

            <!-- graduations V -->
            <line class="grid-line" x1="175" y1="260" x2="175" y2="266"></line>
            <text class="tick-label" x="175" y="280" text-anchor="middle">10</text>
            <line class="grid-line" x1="290" y1="260" x2="290" y2="266"></line>
            <line class="grid-line" x1="405" y1="260" x2="405" y2="266"></line>
            <text class="tick-label" x="405" y="280" text-anchor="middle">30</text>
            <line class="grid-line" x1="520" y1="260" x2="520" y2="266"></line>
            <text class="tick-label" x="520" y="280" text-anchor="middle">40</text>

            <!-- courbe de titrage (calculee : bilan de charge H+/OH- pour un titrage fort/fort) -->
            <path class="curve-main" fill="none" d="M60,245.0 L83,243.7 L106,242.4 L129,241.0 L152,239.5 L175,237.8 L198,236.0 L221,233.7 L244,230.7 L255.5,228.6 L267,225.8 L272.8,223.9 L278.5,221.1 L282,218.8 L285.4,215.1 L287.7,210.5 L288.9,206.0 L290,155.0 L291.1,104.0 L292.3,99.5 L294.6,95.1 L298,91.5 L301.5,89.2 L307.2,86.6 L313,84.8 L324.5,82.3 L347.5,79.3 L382,76.7 L416.5,75.0 L451,73.8 L485.5,72.9 L520,72.2"></path>

            <!-- point d'equivalence -->
            <circle class="plot-point" cx="290" cy="155" r="4.5"></circle>
            <line class="guide-line" x1="290" y1="155" x2="290" y2="260"></line>
            <line class="guide-line" x1="60" y1="155" x2="290" y2="155"></line>
            <text class="tick-label" x="290" y="278" text-anchor="middle">V_eq = 20</text>
            <text class="tick-label" x="50" y="159" text-anchor="end">7</text>

            <!-- reperes debut / fin -->
            <text class="label-soft" x="110" y="228" text-anchor="middle">Acide seul (pH ≈ 1)</text>
            <text class="label-soft" x="430" y="60" text-anchor="middle">Excès de soude (pH ≈ 12,5)</text>
            <text class="annotation-label" x="320" y="130" text-anchor="start">Saut de pH</text>
          </svg>
        `,
        notes: [
          'Loin de l\'équivalence, chaque ajout de solution titrante ne fait varier le pH que <strong>lentement</strong> : la solution est peu sensible aux petites erreurs de versement.',
          'Au voisinage de l\'équivalence, un ajout minime de solution titrante provoque un <strong>saut de pH</strong> quasi vertical : c\'est la zone la plus sensible, et c\'est elle qui permet un repérage précis.',
          'Ici, l\'acide et la base sont tous deux <strong>forts</strong> : le pH à l\'équivalence vaut $7$. Ce ne serait plus le cas avec un acide ou une base faible.'
        ],
        reading: 'Suis la courbe de gauche à droite : repère la zone plate initiale, puis le saut quasi vertical vers $V = 20$ mL, et enfin le nouveau plateau à droite. Le point d\'équivalence se situe au milieu du saut.',
        caption: 'Courbe de titrage pH-métrique d\'un acide fort par une base forte : le saut de pH, centré sur le point d\'équivalence, permet de lire le volume équivalent $V_{eq}$.'
      },
      example: {
        statement: 'On souhaite déterminer l\'acidité d\'un vinaigre. On prélève $V_A = 10$ mL de ce vinaigre (contenant de l\'acide éthanoïque $\\text{CH}_3\\text{COOH}$), que l\'on dose par une solution d\'hydroxyde de sodium de concentration $C_B = 0{,}5$ mol/L. La réaction support de titrage est $\\text{CH}_3\\text{COOH} + \\text{HO}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$. L\'équivalence est repérée pour un volume versé $V_{eq} = 14{,}2$ mL.<br/><br/>Calculer la concentration $C_A$ en acide éthanoïque du vinaigre.',
        steps: [
          'La réaction support de titrage a des coefficients stœchiométriques $a = 1$ (pour l\'acide) et $b = 1$ (pour la base) : c\'est une réaction $1{:}1$.',
          'Relation d\'équivalence : $\\dfrac{C_A V_A}{1} = \\dfrac{C_B V_{eq}}{1}$, soit $C_A V_A = C_B V_{eq}$.',
          'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}5 \\times 14{,}2}{10} = \\dfrac{7{,}1}{10} = 0{,}71$ mol/L.'
        ],
        answer: '$C_A = 0{,}71$ mol/L. Cette valeur permettrait ensuite de calculer le degré d\'acidité du vinaigre (masse d\'acide éthanoïque pour 100 g de solution), grandeur affichée sur l\'étiquette du produit.'
      },
      formulas: [
        'Relation d\'équivalence générale : $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$ (avec $a$, $b$ les coefficients stœchiométriques de la réaction support)',
        'Cas particulier d\'une réaction $1{:}1$ : $C_A V_A = C_B V_{eq}$',
        '$pH = -\\log[\\text{H}_3\\text{O}^+]$',
        'Concentration massique à partir de la concentration molaire : $t = C \\times M$ (avec $M$ la masse molaire de l\'espèce dosée)'
      ],
      recap: [
        'Une réaction support de titrage doit être <strong>rapide, totale et unique</strong> pour que le volume à l\'équivalence soit exploitable.',
        'À l\'<strong>équivalence</strong>, les réactifs ont été mélangés dans les proportions stœchiométriques exactes de l\'équation de réaction.',
        'La méthode des <strong>tangentes parallèles</strong> permet de repérer précisément l\'équivalence sur une courbe $pH = f(V)$, sans supposer que le pH y vaut $7$.',
        'La relation générale d\'équivalence $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$ fait intervenir les coefficients stœchiométriques : ne pas oublier de les identifier avant de calculer.'
      ],
      piege: 'Beaucoup d\'élèves pensent que le pH à l\'équivalence vaut toujours $7$, quel que soit le titrage. Attention, ce n\'est vrai <strong>que</strong> pour le titrage d\'un acide fort par une base forte : avec un acide ou une base faible, le pH à l\'équivalence est différent de $7$, et l\'équivalence doit toujours être repérée graphiquement (méthode des tangentes ou point d\'inflexion), jamais en cherchant simplement $pH = 7$.'
    },

    quiz: [
      {
        q: 'Pour être exploitable, une réaction support de titrage doit impérativement être :',
        options: [
          'Lente, totale et unique',
          'Rapide, totale et unique',
          'Rapide, partielle et unique',
          'Rapide, totale et réversible'
        ],
        answer: 1,
        correction: 'Une réaction support de titrage doit être <strong>rapide</strong> (résultat immédiat après chaque ajout), <strong>totale</strong> (réactifs intégralement consommés) et <strong>unique</strong> (aucune réaction parasite). Ces trois conditions garantissent que le volume à l\'équivalence traduit fidèlement la quantité de matière initiale.'
      },
      {
        q: 'On titre un volume $V_A = 20$ mL d\'une solution d\'acide de concentration $C_A$ inconnue par une base de concentration $C_B = 0{,}2$ mol/L (réaction $1{:}1$). L\'équivalence est repérée pour $V_{eq} = 15$ mL. Quelle est la concentration $C_A$ ?',
        options: [
          '$C_A = 0{,}15$ mol/L',
          '$C_A = 0{,}267$ mol/L',
          '$C_A = 0{,}15$ mol/L (en divisant $C_B$ par $V_{eq}$)',
          '$C_A = 6$ mol/L'
        ],
        answer: 0,
        correction: 'Relation d\'équivalence : $C_A V_A = C_B V_{eq}$, donc $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}2 \\times 15}{20} = \\dfrac{3}{20} = 0{,}15$ mol/L.'
      },
      {
        q: 'Sur une courbe de titrage $pH = f(V)$, le point d\'équivalence correspond graphiquement :',
        options: [
          'Au point où $pH = 7$, dans tous les cas',
          'Au point d\'inflexion de la courbe (saut de pH le plus rapide)',
          'Au minimum de la courbe',
          'Au point de départ, pour $V = 0$'
        ],
        answer: 1,
        correction: 'L\'équivalence correspond toujours au point d\'<strong>inflexion</strong> de la courbe, là où la pente est maximale, quel que soit le titrage effectué. Ce n\'est qu\'un cas particulier (acide fort/base forte) que ce point coïncide en plus avec $pH = 7$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['equivalence11', 'equivalenceGeneral']);

        if (typeExo === 'equivalence11') {
          var VA = pick([10, 15, 20, 25]);
          var CB = pick([0.05, 0.1, 0.2, 0.5]);
          var Veq = randFloat(5, VA * 1.4, 1);
          var CA = parseFloat((CB * Veq / VA).toFixed(4));
          var contexte = pick([
            'un contrôle qualité de vinaigre en agroalimentaire',
            'un dosage de détergent avant rejet',
            'une analyse d\'eau minérale en laboratoire',
            'un contrôle de conformité d\'un produit d\'entretien',
            'un dosage réalisé en travaux pratiques de chimie'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', on titre un volume $V_A = ' + VA + '$ mL d\'une solution acide de concentration inconnue $C_A$ par une solution basique de concentration $C_B = ' + fr(CB, 2) + '$ mol/L (réaction support $1{:}1$). L\'équivalence est repérée pour un volume versé $V_{eq} = ' + fr(Veq, 1) + '$ mL.<br/><br/>Calcule la concentration $C_A$ (en mol/L, arrondie au millième).',
            answer: CA,
            tolerance: Math.max(0.001, parseFloat((CA * 0.05).toFixed(4))),
            unit: 'mol/L',
            hint: 'Pour une réaction support $1{:}1$, la relation d\'équivalence s\'écrit $C_A V_A = C_B V_{eq}$.',
            solution: [
              'Relation d\'équivalence (réaction $1{:}1$) : $C_A V_A = C_B V_{eq}$.',
              'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{' + fr(CB, 2) + ' \\times ' + fr(Veq, 1) + '}{' + VA + '}$.',
              'Résultat : $C_A \\approx ' + fr(CA, 3) + '$ mol/L.'
            ]
          };
        } else {
          var VA2 = pick([10, 20, 25]);
          var CB2 = pick([0.1, 0.2, 0.25]);
          var Veq2 = randFloat(6, VA2 * 1.3, 1);
          var b = pick([2, 3]);
          // reaction a A + b B -> ... avec a = 1 (l'espece titree)
          var CA2 = parseFloat((CB2 * Veq2 / (b * VA2)).toFixed(4));
          var contexte2 = pick([
            'un dosage d\'un diacide en laboratoire de chimie',
            'un contrôle de teneur en acide dans un procédé industriel',
            'une analyse de conformité d\'un effluent'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte2 + ', on titre un volume $V_A = ' + VA2 + '$ mL d\'une solution d\'un acide $A$ de concentration inconnue $C_A$ par une solution basique $B$ de concentration $C_B = ' + fr(CB2, 2) + '$ mol/L. La réaction support de titrage a pour coefficients stœchiométriques $a = 1$ (pour $A$) et $b = ' + b + '$ (pour $B$). L\'équivalence est repérée pour $V_{eq} = ' + fr(Veq2, 1) + '$ mL.<br/><br/>Calcule la concentration $C_A$ (en mol/L, arrondie au millième), en utilisant la relation d\'équivalence générale $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$.',
            answer: CA2,
            tolerance: Math.max(0.001, parseFloat((CA2 * 0.05).toFixed(4))),
            unit: 'mol/L',
            hint: 'Avec $a = 1$, la relation devient $C_A V_A = \\dfrac{C_B V_{eq}}{b}$, donc $C_A = \\dfrac{C_B V_{eq}}{b \\times V_A}$.',
            solution: [
              'Relation d\'équivalence générale : $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$, avec $a = 1$.',
              'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{b \\times V_A} = \\dfrac{' + fr(CB2, 2) + ' \\times ' + fr(Veq2, 1) + '}{' + b + ' \\times ' + VA2 + '}$.',
              'Résultat : $C_A \\approx ' + fr(CA2, 3) + '$ mol/L. Ne pas oublier le facteur $' + b + '$ au dénominateur : c\'est le coefficient stœchiométrique de la base dans l\'équation de réaction.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un laboratoire de contrôle qualité doit vérifier la teneur en acide citrique d\'un jus de citron industriel avant conditionnement. On prélève $V_A = 10$ mL de jus, dilué puis titré par une solution d\'hydroxyde de sodium de concentration $C_B = 0{,}25$ mol/L. La réaction support de titrage, entre l\'acide citrique $\\text{H}_3\\text{Cit}$ (triacide, noté ici $A$) et les ions hydroxyde, a pour coefficients stœchiométriques $a = 1$ (pour $A$) et $b = 3$ (pour $\\text{HO}^-$). Le suivi pH-métrique donne un volume équivalent $V_{eq} = 12{,}0$ mL.',
      tasks: [
        'Rappeler la relation d\'équivalence générale liant $C_A$, $V_A$, $C_B$, $V_{eq}$, $a$ et $b$.',
        'Calculer la concentration $C_A$ en acide citrique du jus dilué.',
        'La masse molaire de l\'acide citrique est $M = 192$ g/mol. Calculer la concentration massique $t$ (en g/L) correspondante.'
      ],
      solutions: [
        'La relation d\'équivalence générale s\'écrit $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$, où $a$ et $b$ sont les coefficients stœchiométriques de $A$ et de la base dans l\'équation de la réaction support.',
        'Avec $a = 1$ et $b = 3$ : $C_A V_A = \\dfrac{C_B V_{eq}}{3}$, donc $C_A = \\dfrac{C_B \\times V_{eq}}{3 \\times V_A} = \\dfrac{0{,}25 \\times 12{,}0}{3 \\times 10} = \\dfrac{3{,}0}{30} = 0{,}1$ mol/L.',
        'Concentration massique : $t = C_A \\times M = 0{,}1 \\times 192 = 19{,}2$ g/L.'
      ],
      finalAnswer: '$C_A = 0{,}1$ mol/L, soit une concentration massique $t = 19{,}2$ g/L en acide citrique dans le jus dilué. Ce résultat obtenu sur l\'échantillon dilué permettrait ensuite, en tenant compte du facteur de dilution, de remonter à la teneur réelle du jus de citron industriel.'
    },

    evaluation: {
      title: 'Évaluation — Titrage par réaction acido-basique',
      duration: '30 min',
      questions: [
        {
          statement: 'Citer les trois conditions que doit vérifier une réaction support de titrage pour être exploitable.',
          type: 'multiple-choice',
          options: [
            'Rapide, totale, unique',
            'Lente, partielle, réversible',
            'Rapide, réversible, unique',
            'Totale, colorée, lente'
          ],
          answer: 0,
          points: 2,
          correction: 'Une réaction support de titrage doit être rapide, totale et unique, afin que le volume versé à l\'équivalence traduise exactement la quantité de matière initiale à déterminer.'
        },
        {
          statement: 'On titre $V_A = 15$ mL d\'un acide de concentration inconnue $C_A$ par une base de concentration $C_B = 0{,}3$ mol/L (réaction $1{:}1$). L\'équivalence est obtenue pour $V_{eq} = 9$ mL. Calculer $C_A$ (en mol/L, arrondie au centième).',
          type: 'numeric',
          answer: 0.18,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 2,
          correction: '$C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}3 \\times 9}{15} = \\dfrac{2{,}7}{15} = 0{,}18$ mol/L.'
        },
        {
          statement: 'Sur une courbe $pH = f(V)$, le point d\'équivalence est repéré graphiquement :',
          type: 'multiple-choice',
          options: [
            'Au point où le pH est minimal',
            'Au point d\'inflexion (saut de pH maximal)',
            'Toujours exactement à $pH = 7$',
            'Au point de départ du titrage'
          ],
          answer: 1,
          points: 2,
          correction: 'Le point d\'équivalence correspond au point d\'inflexion de la courbe, quelle que soit la force de l\'acide ou de la base titrés.'
        },
        {
          statement: 'Une réaction support de titrage entre un acide $A$ (coefficient $a = 1$) et une base $B$ (coefficient $b = 2$) est utilisée pour titrer $V_A = 20$ mL de $A$ par une base de concentration $C_B = 0{,}2$ mol/L. L\'équivalence est obtenue pour $V_{eq} = 10$ mL. Calculer $C_A$ (en mol/L, arrondie au centième).',
          type: 'numeric',
          answer: 0.05,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 3,
          correction: '$\\dfrac{C_A V_A}{1} = \\dfrac{C_B V_{eq}}{2}$, donc $C_A = \\dfrac{C_B \\times V_{eq}}{2 \\times V_A} = \\dfrac{0{,}2 \\times 10}{40} = \\dfrac{2}{40} = 0{,}05$ mol/L. Le coefficient $b = 2$ au dénominateur est essentiel : l\'oublier double la valeur trouvée.'
        },
        {
          statement: 'Le pH à l\'équivalence d\'un titrage vaut exactement $7$ :',
          type: 'multiple-choice',
          options: [
            'Dans tous les cas, quels que soient l\'acide et la base',
            'Uniquement dans le cas d\'un titrage acide fort / base forte',
            'Uniquement si l\'indicateur coloré est bien choisi',
            'Jamais, le pH à l\'équivalence est toujours différent de 7'
          ],
          answer: 1,
          points: 1,
          correction: 'Le pH à l\'équivalence ne vaut $7$ que dans le cas particulier d\'un titrage entre un acide fort et une base forte. Avec un acide ou une base faible, ce pH s\'écarte de $7$.'
        }
      ]
    }
  });
