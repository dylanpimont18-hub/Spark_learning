/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-reaction-avancement.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-reaction-avancement',
    level: 2, subject: 'physique',
    icon: '🧪',
    title: 'La réaction chimique : avancement et stœchiométrie',
    subtitle: 'Équation de réaction, tableau d\'avancement, réactif limitant, avancement maximal',
    keywords: ['Avancement', 'Tableau d\'avancement', 'Réactif limitant', 'Stœchiométrie'],
    physics: 'Le tableau d\'avancement permet de dimensionner les quantités de réactifs dans un procédé industriel, de prévoir le volume de gaz dégagé lors d\'une réaction (dosage, effervescence contrôlée), et d\'optimiser un dosage pour éviter le gaspillage d\'un réactif coûteux.',

    cours: {
      intro: 'Une transformation chimique se décrit par une <strong>équation de réaction</strong> équilibrée, de la forme $aA + bB \\rightarrow cC + dD$, où $a$, $b$, $c$, $d$ sont les <strong>coefficients stœchiométriques</strong>. Ces coefficients traduisent les proportions dans lesquelles les réactifs sont consommés et les produits formés.<br/><br/>Pour suivre l\'évolution des quantités de matière au cours de la réaction, on introduit l\'<strong>avancement</strong> $x$, une grandeur en mol qui vaut $0$ à l\'état initial et augmente au fur et à mesure que la réaction progresse. On organise ces quantités dans un <strong>tableau d\'avancement</strong>.<br/><br/>La réaction s\'arrête lorsque l\'un des réactifs est entièrement consommé : c\'est le <strong>réactif limitant</strong>. L\'avancement à ce moment-là, noté $x_{max}$, est l\'<strong>avancement maximal</strong> de la réaction.',
      definitions: [
        { term: 'Équation de réaction', def: 'Écriture symbolique équilibrée d\'une transformation chimique : $aA + bB \\rightarrow cC + dD$, où $a,b,c,d$ sont les coefficients stœchiométriques (le nombre d\'entités de chaque espèce qui réagissent ou se forment, dans les mêmes proportions).' },
        { term: 'Avancement $x$', def: 'Grandeur en mol qui mesure la progression de la réaction : $x=0$ à l\'état initial, et $x$ augmente au fur et à mesure que les réactifs sont consommés et les produits formés.' },
        { term: 'Tableau d\'avancement', def: 'Tableau organisant les quantités de matière de chaque espèce, en fonction de $x$, à l\'état initial ($x=0$), à un état intermédiaire (avancement $x$) et à l\'état final (avancement $x_{max}$).' },
        { term: 'Réactif limitant', def: 'Réactif entièrement consommé le premier, qui arrête la réaction. Il correspond au réactif pour lequel le rapport $\\dfrac{n_0}{\\text{coefficient}}$ est le <strong>plus petit</strong>.' },
        { term: 'Avancement maximal $x_{max}$', def: 'Valeur de $x$ à l\'état final, égale au plus petit des rapports $\\dfrac{n_0}{\\text{coefficient}}$ calculés pour chaque réactif : $x_{max} = \\min\\left(\\dfrac{n_0(A)}{a}, \\dfrac{n_0(B)}{b}\\right)$.' }
      ],
      method: {
        title: 'Construire et exploiter un tableau d\'avancement en 3 étapes',
        steps: [
          '<strong>Écrire l\'équation de réaction équilibrée</strong> et relever les quantités de matière initiales $n_0$ de chaque réactif.',
          '<strong>Construire le tableau d\'avancement</strong> : pour chaque réactif, $n(x) = n_0 - \\text{coeff} \\times x$ ; pour chaque produit (initialement absent), $n(x) = \\text{coeff} \\times x$.',
          '<strong>Déterminer $x_{max}$</strong> en calculant, pour <strong>chaque</strong> réactif, le rapport $\\dfrac{n_0}{\\text{coefficient}}$ : le réactif limitant est celui qui donne le plus petit rapport — attention, ce n\'est <strong>pas forcément</strong> celui dont la quantité initiale $n_0$ est la plus petite.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Évolution des quantités de matière avec l\'avancement',
        title: 'Réaction $\\text{Mg} + 2\\,\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$ : identification du réactif limitant',
        description: 'Avec $n_0(\\text{Mg}) = 5{,}0\\times10^{-3}$ mol et $n_0(\\text{HCl}) = 0{,}020$ mol, la droite du magnésium atteint zéro <strong>la première</strong> : c\'est le réactif limitant, à $x_{max} = 5{,}0\\times10^{-3}$ mol.',
        svg: `
          <svg viewBox="0 0 500 300" role="img" aria-labelledby="avancement-title avancement-desc">
            <title id="avancement-title">Graphique des quantites de matiere en fonction de l'avancement x</title>
            <desc id="avancement-desc">Un graphique represente la quantite de matiere en mol en ordonnee, en fonction de l'avancement x en abscisse. Trois droites partent du bord gauche. La droite du dichlorure d'hydrogene HCl part d'une valeur elevee et descend. La droite du magnesium part d'une valeur plus basse et descend avec une pente plus faible, atteignant zero avant la droite de HCl. La droite du dihydrogene part de zero et monte. Une ligne verticale en pointilles marque l'endroit ou la droite du magnesium atteint zero, cet endroit correspondant a l'avancement maximal. Au-dela de cette ligne verticale, les trois droites deviennent horizontales en pointilles, indiquant que les quantites de matiere restent constantes une fois la reaction terminee.</desc>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="250" x2="470" y2="250"></line>
            <line class="frame-line" x1="60" y1="250" x2="60" y2="40"></line>
            <text class="tick-label" x="60" y="28" text-anchor="middle">n (mol)</text>
            <text class="tick-label" x="470" y="270" text-anchor="end">x (mol)</text>

            <!-- ligne verticale x_max -->
            <line class="guide-line" x1="260" y1="250" x2="260" y2="50"></line>
            <text class="tick-label" x="260" y="270" text-anchor="middle">x_max</text>

            <!-- droite HCl : (60,50) solide vers (260,150), pointille vers (460,250) -->
            <line class="curve-main" x1="60" y1="50" x2="260" y2="150"></line>
            <line class="guide-line" x1="260" y1="150" x2="460" y2="250"></line>
            <text class="annotation-label" x="90" y="42" text-anchor="start">HCl</text>

            <!-- droite Mg : (60,200) solide vers (260,250), pointille plat vers (460,250) -->
            <line class="curve-main" x1="60" y1="200" x2="260" y2="250"></line>
            <line class="guide-line" x1="260" y1="250" x2="460" y2="250"></line>
            <text class="annotation-label" x="90" y="192" text-anchor="start">Mg</text>

            <!-- droite H2 : (60,250) solide vers (260,200), pointille plat vers (460,200) -->
            <line class="curve-main" x1="60" y1="250" x2="260" y2="200"></line>
            <line class="guide-line" x1="260" y1="200" x2="460" y2="200"></line>
            <text class="annotation-label" x="270" y="190" text-anchor="start">H₂</text>
          </svg>
        `,
        notes: [
          'La droite du <strong>magnésium</strong> est celle qui atteint <strong>zéro en premier</strong> (à $x = x_{max}$) : c\'est le réactif limitant, même si sa quantité initiale ($5{,}0\\times10^{-3}$ mol) est bien plus petite que celle de HCl ($0{,}020$ mol) — c\'est précisément le rapport $n_0/\\text{coefficient}$ qui détermine le réactif limitant, pas $n_0$ seul.',
          'Au-delà de $x_{max}$, les droites deviennent horizontales (en pointillés) : la réaction s\'est <strong>arrêtée</strong>, les quantités de matière restent constantes car le réactif limitant a disparu.',
          'La droite du <strong>HCl</strong> ne descend pas jusqu\'à zéro : il en reste en excès à la fin de la réaction, une quantité qu\'on peut lire directement sur le graphique à $x=x_{max}$.'
        ],
        reading: 'Repère la ligne verticale $x_{max}$ : c\'est là où la première droite décroissante (Mg) touche l\'axe horizontal. Au-delà, toutes les droites deviennent plates.',
        caption: 'Évolution des quantités de matière avec l\'avancement $x$ : le magnésium, réactif limitant, détermine $x_{max}$, au-delà duquel toutes les quantités restent constantes.'
      },
      example: {
        statement: 'On fait réagir un morceau de magnésium de quantité de matière $n_0(\\text{Mg}) = 5{,}0\\times10^{-3}$ mol avec un volume d\'acide chlorhydrique apportant $n_0(\\text{HCl}) = 0{,}020$ mol, selon l\'équation $\\text{Mg} + 2\\,\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2$.<br/><br/>Déterminer le réactif limitant, l\'avancement maximal $x_{max}$, puis le volume de dihydrogène formé (on prend un volume molaire $V_m = 24$ L/mol).',
        steps: [
          'Tableau d\'avancement : à l\'avancement $x$, $n(\\text{Mg}) = n_0(\\text{Mg}) - x$ et $n(\\text{HCl}) = n_0(\\text{HCl}) - 2x$ (coefficient $2$ devant HCl).',
          'Pour le magnésium : $\\dfrac{n_0(\\text{Mg})}{1} = \\dfrac{5{,}0\\times10^{-3}}{1} = 5{,}0\\times10^{-3}$ mol. Pour l\'acide chlorhydrique : $\\dfrac{n_0(\\text{HCl})}{2} = \\dfrac{0{,}020}{2} = 0{,}010$ mol.',
          'Le plus petit rapport est celui du magnésium ($5{,}0\\times10^{-3} < 0{,}010$) : le <strong>magnésium est le réactif limitant</strong>, donc $x_{max} = 5{,}0\\times10^{-3}$ mol.',
          'Quantité de dihydrogène formé (coefficient $1$) : $n(\\text{H}_2) = x_{max} = 5{,}0\\times10^{-3}$ mol.',
          'Volume de dihydrogène : $V(\\text{H}_2) = n(\\text{H}_2) \\times V_m = 5{,}0\\times10^{-3} \\times 24 = 0{,}12$ L, soit $120$ mL.'
        ],
        answer: 'Le magnésium est le réactif limitant, $x_{max} = 5{,}0\\times10^{-3}$ mol, et $V(\\text{H}_2) = 120$ mL. Il reste de l\'acide chlorhydrique en excès à la fin de la réaction : $n(\\text{HCl})_{restant} = 0{,}020 - 2\\times5{,}0\\times10^{-3} = 0{,}010$ mol.'
      },
      formulas: [
        'Équation de réaction équilibrée : $aA + bB \\rightarrow cC + dD$',
        'Quantité de matière d\'un réactif à l\'avancement $x$ : $n(x) = n_0 - \\text{coeff} \\times x$',
        'Quantité de matière d\'un produit à l\'avancement $x$ : $n(x) = \\text{coeff} \\times x$',
        'Avancement maximal : $x_{max} = \\min\\left(\\dfrac{n_0(A)}{a}, \\dfrac{n_0(B)}{b}\\right)$',
        'Volume d\'un gaz à partir de sa quantité de matière : $V = n \\times V_m$'
      ],
      recap: [
        'L\'avancement $x$ (en mol) mesure la progression de la réaction : il vaut $0$ à l\'état initial et $x_{max}$ à l\'état final.',
        'Le réactif limitant est celui dont le rapport $n_0/\\text{coefficient}$ est le <strong>plus petit</strong> — pas nécessairement celui dont $n_0$ est le plus petit.',
        'Une fois $x_{max}$ atteint, la réaction s\'arrête : toutes les quantités de matière restent <strong>constantes</strong>, même s\'il reste un réactif en excès.',
        'Le tableau d\'avancement permet de calculer directement, à l\'état final, la quantité de chaque produit formé et de chaque réactif restant (y compris le réactif en excès).'
      ],
      piege: 'Une erreur très fréquente consiste à croire que le réactif limitant est automatiquement celui dont la quantité de matière initiale $n_0$ est la plus petite, sans tenir compte des coefficients stœchiométriques. Attention, il faut toujours comparer les rapports $n_0/\\text{coefficient}$ pour chaque réactif : c\'est ce rapport, et lui seul, qui désigne le réactif limitant.'
    },

    quiz: [
      {
        q: 'Dans une réaction $A + 2B \\rightarrow C$, on a $n_0(A) = 0{,}10$ mol et $n_0(B) = 0{,}30$ mol. Quel est le réactif limitant ?',
        options: [
          'A, car $\\dfrac{0{,}10}{1} = 0{,}10 < \\dfrac{0{,}30}{2} = 0{,}15$',
          'B, car $0{,}30 > 0{,}10$',
          'Les deux réactifs sont limitants en même temps',
          'On ne peut pas le savoir sans connaître les masses molaires'
        ],
        answer: 0,
        correction: 'Il faut comparer $\\dfrac{n_0(A)}{1} = 0{,}10$ mol et $\\dfrac{n_0(B)}{2} = 0{,}15$ mol : le plus petit rapport est celui de A, qui est donc le réactif limitant, même si sa quantité de matière initiale est plus petite que celle de B (ce qui n\'est pas la bonne façon de conclure).'
      },
      {
        q: 'Une fois l\'avancement maximal $x_{max}$ atteint, que se passe-t-il si on attend plus longtemps ?',
        options: [
          'Les quantités de matière continuent d\'évoluer indéfiniment',
          'La réaction s\'arrête, toutes les quantités de matière restent constantes',
          'Le réactif en excès se transforme spontanément en produit',
          'L\'avancement redevient nul'
        ],
        answer: 1,
        correction: 'Le réactif limitant a disparu à $x_{max}$ : la réaction ne peut plus progresser, et toutes les quantités de matière (y compris celle du réactif en excès) restent constantes au-delà de cet instant.'
      },
      {
        q: 'Dans un tableau d\'avancement, la quantité de matière d\'un produit initialement absent, à l\'avancement $x$, s\'exprime :',
        options: [
          '$n(x) = n_0 - \\text{coeff} \\times x$',
          '$n(x) = \\text{coeff} \\times x$',
          '$n(x) = n_0 + x$',
          '$n(x) = n_0 \\times x$'
        ],
        answer: 1,
        correction: 'Un produit, absent à l\'état initial ($n_0 = 0$), voit sa quantité de matière augmenter avec l\'avancement : $n(x) = \\text{coeff} \\times x$, sans terme de soustraction (contrairement aux réactifs).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var reactions = [
          { texA: '\\text{Mg}', coefA: 1, texB: '\\text{HCl}', coefB: 2, texC: '\\text{H}_2', coefC: 1, texEq: '\\text{Mg} + 2\\,\\text{HCl} \\rightarrow \\text{MgCl}_2 + \\text{H}_2' },
          { texA: '\\text{Zn}', coefA: 1, texB: '\\text{HCl}', coefB: 2, texC: '\\text{H}_2', coefC: 1, texEq: '\\text{Zn} + 2\\,\\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2' },
          { texA: '\\text{Na}', coefA: 2, texB: '\\text{Cl}_2', coefB: 1, texC: '\\text{NaCl}', coefC: 2, texEq: '2\\,\\text{Na} + \\text{Cl}_2 \\rightarrow 2\\,\\text{NaCl}' },
          { texA: '\\text{N}_2', coefA: 1, texB: '\\text{H}_2', coefB: 3, texC: '\\text{NH}_3', coefC: 2, texEq: '\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3' }
        ];
        var r = pick(reactions);
        var typeExo = pick(['xmax', 'produit']);
        var n0A = randFloat(0.05, 0.50, 2);
        var n0B = randFloat(0.05, 0.50, 2);
        var xA = parseFloat((n0A / r.coefA).toFixed(4));
        var xB = parseFloat((n0B / r.coefB).toFixed(4));
        var xmax = Math.min(xA, xB);
        var limitantTex = xA <= xB ? r.texA : r.texB;

        if (typeExo === 'xmax') {
          return {
            statement: 'On réalise la réaction d\'équation $' + r.texEq + '$ à partir de $n_0(' + r.texA + ') = ' + fr(n0A, 2) + '$ mol et $n_0(' + r.texB + ') = ' + fr(n0B, 2) + '$ mol.<br/><br/>Détermine le réactif limitant, puis calcule l\'avancement maximal $x_{max}$ de la réaction (en mol, arrondi au millième).',
            answer: xmax,
            tolerance: Math.max(0.001, xmax * 0.05),
            unit: 'mol',
            hint: 'Calcule séparément $\\dfrac{n_0(' + r.texA + ')}{' + r.coefA + '}$ et $\\dfrac{n_0(' + r.texB + ')}{' + r.coefB + '}$ : le réactif limitant est celui qui donne le plus petit résultat, c\'est ce résultat qui est $x_{max}$.',
            solution: [
              'Pour ' + r.texA + ' : $\\dfrac{n_0(' + r.texA + ')}{' + r.coefA + '} = \\dfrac{' + fr(n0A, 2) + '}{' + r.coefA + '} \\approx ' + fr(xA, 3) + '$ mol.',
              'Pour ' + r.texB + ' : $\\dfrac{n_0(' + r.texB + ')}{' + r.coefB + '} = \\dfrac{' + fr(n0B, 2) + '}{' + r.coefB + '} \\approx ' + fr(xB, 3) + '$ mol.',
              'Le réactif limitant est celui qui donne le plus petit rapport (' + limitantTex + '), donc $x_{max} \\approx ' + fr(xmax, 3) + '$ mol.'
            ]
          };
        } else {
          var nC = parseFloat((r.coefC * xmax).toFixed(4));
          return {
            statement: 'On réalise la réaction d\'équation $' + r.texEq + '$ à partir de $n_0(' + r.texA + ') = ' + fr(n0A, 2) + '$ mol et $n_0(' + r.texB + ') = ' + fr(n0B, 2) + '$ mol.<br/><br/>Calcule la quantité de matière de ' + r.texC + ' formée à l\'état final (en mol, arrondie au millième).',
            answer: nC,
            tolerance: Math.max(0.001, nC * 0.05),
            unit: 'mol',
            hint: 'Détermine d\'abord $x_{max}$ (le plus petit des rapports $n_0/\\text{coefficient}$), puis utilise $n(' + r.texC + ') = ' + r.coefC + ' \\times x_{max}$.',
            solution: [
              'Rapports : $\\dfrac{n_0(' + r.texA + ')}{' + r.coefA + '} \\approx ' + fr(xA, 3) + '$ mol et $\\dfrac{n_0(' + r.texB + ')}{' + r.coefB + '} \\approx ' + fr(xB, 3) + '$ mol, donc $x_{max} \\approx ' + fr(xmax, 3) + '$ mol.',
              'Quantité de ' + r.texC + ' formée : $n(' + r.texC + ') = ' + r.coefC + ' \\times x_{max} = ' + r.coefC + ' \\times ' + fr(xmax, 3) + '$.',
              'Résultat : $n(' + r.texC + ') \\approx ' + fr(nC, 3) + '$ mol.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On brûle un ruban de magnésium dans le dioxygène, selon l\'équation $2\\,\\text{Mg} + \\text{O}_2 \\rightarrow 2\\,\\text{MgO}$. On dispose de $n_0(\\text{Mg}) = 0{,}40$ mol de magnésium et de $n_0(\\text{O}_2) = 0{,}30$ mol de dioxygène.',
      tasks: [
        'Construire le tableau d\'avancement littéral de cette réaction (états initial, intermédiaire à l\'avancement $x$, final).',
        'Déterminer le réactif limitant et l\'avancement maximal $x_{max}$.',
        'Calculer les quantités de matière de chaque espèce à l\'état final.'
      ],
      solutions: [
        'Tableau d\'avancement : à l\'avancement $x$, $n(\\text{Mg}) = 0{,}40 - 2x$ (coefficient $2$), $n(\\text{O}_2) = 0{,}30 - x$ (coefficient $1$), et $n(\\text{MgO}) = 2x$ (initialement nul, coefficient $2$).',
        'Rapports : $\\dfrac{n_0(\\text{Mg})}{2} = \\dfrac{0{,}40}{2} = 0{,}20$ mol, et $\\dfrac{n_0(\\text{O}_2)}{1} = \\dfrac{0{,}30}{1} = 0{,}30$ mol. Le plus petit rapport est celui du magnésium : c\'est le <strong>réactif limitant</strong>, donc $x_{max} = 0{,}20$ mol.',
        'À l\'état final : $n(\\text{Mg}) = 0{,}40 - 2\\times0{,}20 = 0$ mol (entièrement consommé) ; $n(\\text{O}_2) = 0{,}30 - 0{,}20 = 0{,}10$ mol (excès restant) ; $n(\\text{MgO}) = 2\\times0{,}20 = 0{,}40$ mol (produit formé).'
      ],
      finalAnswer: 'Le magnésium est le réactif limitant, $x_{max} = 0{,}20$ mol, avec $0{,}10$ mol de dioxygène restant en excès et $0{,}40$ mol d\'oxyde de magnésium formé. Vérification : la masse totale se conserve, et le réactif limitant (Mg) est bien totalement consommé, comme l\'exige sa définition.'
    },

    evaluation: {
      title: 'Évaluation — La réaction chimique : avancement et stœchiométrie',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans une équation de réaction $aA + bB \\rightarrow cC$, les coefficients $a$, $b$, $c$ sont appelés :',
          type: 'multiple-choice',
          options: [
            'Coefficients stœchiométriques',
            'Coefficients directeurs',
            'Coefficients de proportionnalité inverse',
            'Constantes d\'équilibre'
          ],
          answer: 0,
          points: 1,
          correction: 'Les coefficients $a$, $b$, $c$ devant chaque espèce sont les coefficients stœchiométriques : ils traduisent les proportions dans lesquelles les espèces réagissent ou se forment.'
        },
        {
          statement: 'Pour une réaction $A + 3B \\rightarrow 2C$, avec $n_0(A) = 0{,}12$ mol et $n_0(B) = 0{,}30$ mol, déterminer l\'avancement maximal $x_{max}$ (en mol, arrondi au millième).',
          type: 'numeric',
          answer: 0.10,
          tolerance: 0.005,
          unit: 'mol',
          points: 3,
          correction: '$\\dfrac{n_0(A)}{1} = 0{,}12$ mol, $\\dfrac{n_0(B)}{3} = \\dfrac{0{,}30}{3} = 0{,}10$ mol. Le plus petit rapport est celui de B : $x_{max} = 0{,}10$ mol (B est le réactif limitant).'
        },
        {
          statement: 'Le réactif limitant d\'une réaction est :',
          type: 'multiple-choice',
          options: [
            'Celui dont la quantité de matière initiale est la plus petite',
            'Celui dont le rapport $n_0/\\text{coefficient}$ est le plus petit',
            'Celui qui a la plus grande masse molaire',
            'Celui qui est en excès à la fin de la réaction'
          ],
          answer: 1,
          points: 2,
          correction: 'Le réactif limitant est déterminé par le plus petit rapport $n_0/\\text{coefficient}$, pas par la plus petite quantité de matière initiale seule.'
        },
        {
          statement: 'Pour la réaction $2\\,\\text{Mg} + \\text{O}_2 \\rightarrow 2\\,\\text{MgO}$, avec un avancement maximal $x_{max} = 0{,}15$ mol, calculer la quantité de matière de MgO formée à l\'état final (en mol).',
          type: 'numeric',
          answer: 0.30,
          tolerance: 0.01,
          unit: 'mol',
          points: 2,
          correction: '$n(\\text{MgO}) = 2 \\times x_{max} = 2 \\times 0{,}15 = 0{,}30$ mol (coefficient $2$ devant MgO).'
        },
        {
          statement: 'Une fois l\'avancement maximal atteint, les quantités de matière de toutes les espèces :',
          type: 'multiple-choice',
          options: [
            'Continuent à évoluer',
            'Redeviennent nulles',
            'Restent constantes',
            'Oscillent périodiquement'
          ],
          answer: 2,
          points: 1,
          correction: 'À $x_{max}$, le réactif limitant a disparu et la réaction s\'arrête : toutes les quantités de matière restent constantes au-delà de cet instant.'
        }
      ]
    }
  });
