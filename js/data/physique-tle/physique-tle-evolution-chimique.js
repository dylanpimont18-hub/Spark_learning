/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-evolution-chimique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-evolution-chimique',
    level: 2, subject: 'physique',
    icon: '⚗️',
    title: 'Évolution spontanée d\'un système chimique',
    subtitle: 'Quotient de réaction Qr, constante d\'équilibre K, critère d\'évolution spontanée, sens direct et sens indirect',
    keywords: ['Quotient de réaction', 'Constante d\'équilibre', 'Sens d\'évolution', 'Qr et K', 'État d\'équilibre'],
    physics: 'Comparer le quotient de réaction $Q_r$ à la constante d\'équilibre $K$ permet de prévoir si une réaction chimique va effectivement se produire dans un procédé industriel, de comprendre pourquoi certaines réactions s\'arrêtent avant la disparition totale des réactifs, ou d\'anticiper l\'évolution d\'un système lorsqu\'on modifie les quantités initiales (ajout d\'un réactif, dilution…).',

    cours: {
      intro: 'Pour une transformation chimique modélisée par une réaction d\'équation $aA + bB \\rightleftharpoons cC + dD$, on définit à chaque instant le <strong>quotient de réaction</strong> $Q_r$, construit à partir des concentrations (ou pressions partielles) des espèces présentes dans le système, dans l\'état où il se trouve à cet instant.<br/><br/>Cette même réaction possède, à une température donnée, une <strong>constante d\'équilibre</strong> $K$ : une valeur fixe qui ne dépend que de la température, et que le quotient de réaction atteint <strong>exactement</strong> lorsque le système est à l\'équilibre chimique ($Q_{r,eq} = K$).<br/><br/>Comparer la valeur de $Q_r$ dans l\'état initial du système à la valeur de $K$ permet de prévoir le <strong>sens spontané d\'évolution</strong> de la transformation : le système évolue toujours de façon à rapprocher $Q_r$ de $K$, jamais à l\'en éloigner.',
      definitions: [
        { term: 'Quotient de réaction ($Q_r$)', def: 'Pour $aA+bB\\rightleftharpoons cC+dD$ (espèces dissoutes) : $Q_r = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$ (les solides et solvants purs n\'apparaissent pas dans l\'expression). Sa valeur peut être calculée à <strong>n\'importe quel instant</strong> de l\'évolution du système, pas seulement à l\'équilibre.' },
        { term: 'Constante d\'équilibre ($K$)', def: 'Valeur particulière de $Q_r$ lorsque le système chimique est à l\'<strong>équilibre</strong> : $K = Q_{r,eq}$. $K$ ne dépend que de la <strong>température</strong>, pas des quantités initiales de matière introduites.' },
        { term: 'Critère d\'évolution spontanée', def: 'Si $Q_{r,i} < K$, le système évolue dans le <strong>sens direct</strong> (formation des produits $C$ et $D$). Si $Q_{r,i} > K$, il évolue dans le <strong>sens indirect</strong> (reformation des réactifs $A$ et $B$). Si $Q_{r,i} = K$, le système est déjà à l\'équilibre : il n\'évolue pas.' },
        { term: 'État d\'équilibre chimique', def: 'État macroscopiquement stable atteint lorsque $Q_r = K$ : les concentrations des espèces n\'évoluent alors plus au cours du temps (à l\'échelle macroscopique), même si la réaction se poursuit microscopiquement dans les deux sens à vitesses égales.' }
      ],
      method: {
        title: 'Prévoir le sens d\'évolution d\'un système chimique en 3 étapes',
        steps: [
          '<strong>Écrire l\'expression du quotient de réaction</strong> $Q_r$ à partir de l\'équation de la réaction (produits au numérateur, réactifs au dénominateur, chaque concentration à la puissance de son coefficient stœchiométrique).',
          '<strong>Calculer $Q_{r,i}$</strong> à partir des concentrations (ou quantités de matière et volume) de l\'état initial du système considéré.',
          '<strong>Comparer $Q_{r,i}$ à $K$</strong> (donnée à la température de l\'expérience) : si $Q_{r,i} < K$, le système évolue dans le sens direct ; si $Q_{r,i} > K$, dans le sens indirect ; si $Q_{r,i}=K$, le système est déjà à l\'équilibre et n\'évolue pas.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Critère d\'évolution spontanée d\'un système chimique',
        title: 'Comparaison de Qr à K : sens direct ou sens indirect',
        description: 'Sur un axe gradué en valeurs de $Q_r$, la position de $K$ partage l\'axe en deux zones. Un système situé à gauche de $K$ ($Q_r < K$) évolue vers la droite (sens direct) ; un système situé à droite ($Q_r > K$) évolue vers la gauche (sens indirect) : dans les deux cas, le système évolue pour rapprocher $Q_r$ de $K$.',
        svg: `
          <svg viewBox="0 0 560 260" role="img" aria-labelledby="qrk-title qrk-desc">
            <title id="qrk-title">Axe de comparaison du quotient de reaction Qr a la constante d'equilibre K</title>
            <desc id="qrk-desc">Un axe horizontal gradue represente les valeurs possibles du quotient de reaction Qr. Un point au centre de l'axe est marque K, la constante d'equilibre. A gauche de ce point, un premier systeme note Qr1 est place, avec une fleche qui pointe vers la droite en direction de K, illustrant une evolution dans le sens direct. A droite du point K, un second systeme note Qr2 est place, avec une fleche qui pointe vers la gauche en direction de K, illustrant une evolution dans le sens indirect. Les deux fleches convergent vers le point K, montrant que le systeme evolue toujours pour rapprocher Qr de K, jamais pour s'en eloigner.</desc>

            <defs>
              <marker id="arrow-phystle-qrk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe des Qr -->
            <line class="frame-line" x1="50" y1="150" x2="510" y2="150" marker-end="url(#arrow-phystle-qrk)"></line>
            <text class="tick-label" x="518" y="154" text-anchor="start">Qr</text>

            <!-- point K -->
            <circle class="plot-point" cx="280" cy="150" r="6"></circle>
            <text class="annotation-label" x="280" y="178" text-anchor="middle">K</text>

            <!-- Qr1 (a gauche, evolution sens direct) -->
            <circle class="plot-point-alt" cx="140" cy="150" r="5"></circle>
            <text class="tick-label" x="140" y="178" text-anchor="middle">Qr₁</text>
            <line class="curve-main" x1="140" y1="110" x2="265" y2="110" marker-end="url(#arrow-phystle-qrk)"></line>
            <text class="label-soft" x="200" y="96" text-anchor="middle">sens direct (→)</text>

            <!-- Qr2 (a droite, evolution sens indirect) -->
            <circle class="plot-point-alt" cx="420" cy="150" r="5"></circle>
            <text class="tick-label" x="420" y="178" text-anchor="middle">Qr₂</text>
            <line class="curve-main" x1="420" y1="110" x2="295" y2="110" marker-end="url(#arrow-phystle-qrk)"></line>
            <text class="label-soft" x="360" y="96" text-anchor="middle">sens indirect (←)</text>

            <!-- zones -->
            <text class="label-soft" x="140" y="205" text-anchor="middle">Qr₁ &lt; K</text>
            <text class="label-soft" x="420" y="205" text-anchor="middle">Qr₂ &gt; K</text>
            <text class="label-soft" x="280" y="230" text-anchor="middle">Le système évolue toujours pour rapprocher Qr de K</text>
          </svg>
        `,
        notes: [
          'Le point $K$ (constante d\'équilibre, fixée par la température) partage l\'axe des valeurs possibles de $Q_r$ en deux zones : à gauche ($Q_r < K$), à droite ($Q_r > K$).',
          'Un système dont l\'état initial correspond à $Q_{r,1} < K$ évolue dans le <strong>sens direct</strong> (vers la droite sur l\'axe, formation des produits), pour que $Q_r$ se rapproche de $K$.',
          'Un système dont l\'état initial correspond à $Q_{r,2}>K$ évolue dans le <strong>sens indirect</strong> (vers la gauche, reformation des réactifs), pour la même raison : rapprocher $Q_r$ de $K$.'
        ],
        reading: 'Repère d\'abord le point $K$ au centre de l\'axe, puis observe les deux flèches : celle partant de $Q_{r,1}$ (à gauche) pointe vers $K$ (sens direct), celle partant de $Q_{r,2}$ (à droite) pointe aussi vers $K$ (sens indirect) — les deux convergent toujours vers $K$.',
        caption: 'Critère d\'évolution spontanée : quelle que soit sa position initiale par rapport à $K$, un système chimique évolue toujours de façon à rapprocher $Q_r$ de $K$.'
      },
      example: {
        statement: 'On considère la réaction d\'estérification-hydrolyse $CH_3COOH + C_2H_5OH \\rightleftharpoons CH_3COOC_2H_5 + H_2O$, de constante d\'équilibre $K = 4{,}0$ à la température de l\'expérience. On mélange initialement des concentrations $[CH_3COOH]_i = 1{,}0$ mol/L, $[C_2H_5OH]_i = 1{,}0$ mol/L, $[CH_3COOC_2H_5]_i = 0{,}50$ mol/L et $[H_2O]_i = 0{,}50$ mol/L.<br/><br/>Déterminer le sens spontané d\'évolution de ce système.',
        steps: [
          'Expression du quotient de réaction : $Q_r = \\dfrac{[CH_3COOC_2H_5][H_2O]}{[CH_3COOH][C_2H_5OH]}$.',
          'Calcul de $Q_{r,i}$ avec les concentrations initiales : $Q_{r,i} = \\dfrac{0{,}50 \\times 0{,}50}{1{,}0 \\times 1{,}0} = \\dfrac{0{,}25}{1{,}0} = 0{,}25$.',
          'Comparaison à $K$ : $Q_{r,i} = 0{,}25 < K = 4{,}0$.'
        ],
        answer: 'Comme $Q_{r,i} < K$, le système évolue dans le <strong>sens direct</strong> : la réaction d\'estérification se poursuit (formation d\'ester et d\'eau), jusqu\'à ce que $Q_r$ atteigne la valeur $K=4{,}0$, où le système atteindra son état d\'équilibre.'
      },
      formulas: [
        'Quotient de réaction ($aA+bB\\rightleftharpoons cC+dD$) : $Q_r = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}$',
        'À l\'équilibre : $Q_{r,eq} = K$ (constante d\'équilibre, ne dépend que de $T$)',
        'Si $Q_{r,i} < K$ → évolution dans le sens direct (formation des produits)',
        'Si $Q_{r,i} > K$ → évolution dans le sens indirect (reformation des réactifs)',
        'Si $Q_{r,i} = K$ → le système est déjà à l\'équilibre, aucune évolution macroscopique'
      ],
      recap: [
        'Le quotient de réaction $Q_r$ peut être calculé à <strong>n\'importe quel instant</strong> ; la constante d\'équilibre $K$ est une valeur particulière, atteinte uniquement à l\'équilibre.',
        'Le sens d\'évolution d\'un système se prévoit en comparant $Q_{r,i}$ (à l\'état initial) à $K$ : le système évolue toujours pour <strong>rapprocher</strong> $Q_r$ de $K$, jamais pour l\'en éloigner.',
        '$K$ ne dépend que de la <strong>température</strong> — ni des quantités de matière initiales, ni du volume du système, contrairement à $Q_r$.',
        'Seules les espèces <strong>dissoutes ou gazeuses</strong> apparaissent dans l\'expression de $Q_r$ : un solide ou un solvant pur n\'y figurent pas (leur activité vaut $1$).'
      ],
      piege: 'Une confusion fréquente consiste à croire que le sens d\'évolution dépend du signe de $Q_r-K$ associé à une règle absolue toujours identique, sans revenir à l\'équation de la réaction telle qu\'elle est écrite : le sens direct correspond toujours à la formation des produits <strong>tels qu\'écrits à droite</strong> de la double flèche $\\rightleftharpoons$. Attention aussi à ne jamais inclure un solide ou un solvant pur dans l\'expression de $Q_r$ : seules les espèces dissoutes (ou gazeuses) y figurent.'
    },

    quiz: [
      {
        q: 'Que représente la constante d\'équilibre $K$ d\'une réaction chimique ?',
        options: [
          'La valeur de $Q_r$ à l\'état initial du système',
          'La valeur de $Q_r$ lorsque le système est à l\'équilibre chimique',
          'La concentration totale des réactifs',
          'Le volume du système à l\'équilibre'
        ],
        answer: 1,
        correction: '$K$ est la valeur particulière que prend le quotient de réaction $Q_r$ lorsque le système chimique atteint son état d\'équilibre : $K = Q_{r,eq}$. Elle ne dépend que de la température.'
      },
      {
        q: 'Pour un système tel que $Q_{r,i} > K$, quel est son sens spontané d\'évolution ?',
        options: [
          'Sens direct (formation des produits)',
          'Sens indirect (reformation des réactifs)',
          'Le système est déjà à l\'équilibre',
          'On ne peut pas savoir sans connaître le volume'
        ],
        answer: 1,
        correction: 'Si $Q_{r,i}>K$, le système doit faire diminuer $Q_r$ pour le rapprocher de $K$ : cela correspond à une consommation des produits et une reformation des réactifs, c\'est-à-dire une évolution dans le <strong>sens indirect</strong>.'
      },
      {
        q: 'Pour la réaction $A \\rightleftharpoons B$ avec $K=2{,}0$, un système présente $[A]=0{,}80$ mol/L et $[B]=0{,}40$ mol/L. Quel est son sens d\'évolution ?',
        options: [
          'Sens direct, car $Q_r = 0{,}5 < K$',
          'Sens indirect, car $Q_r = 2 = K$',
          'Le système est à l\'équilibre',
          'Sens direct, car $Q_r = 2 > K$'
        ],
        answer: 0,
        correction: '$Q_r = \\dfrac{[B]}{[A]} = \\dfrac{0{,}40}{0{,}80} = 0{,}5$. Comme $Q_r=0{,}5 < K=2{,}0$, le système évolue dans le sens direct (formation de $B$).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['qr-simple', 'comparaison']);

        if (typeExo === 'qr-simple') {
          var cB = randFloat(0.1, 2, 2);
          var cA = randFloat(0.1, 2, 2);
          var Qr = parseFloat((cB / cA).toFixed(3));
          var contexte = pick([
            'un réacteur de laboratoire de chimie organique',
            'un système d\'isomérisation étudié en TP',
            'une cuve de réaction industrielle',
            'un mélange réactionnel de contrôle qualité'
          ]);
          return {
            statement: 'Dans ' + contexte + ', on étudie la réaction $A \\rightleftharpoons B$. À un instant donné, les concentrations sont $[A] = ' + fr(cA, 2) + '$ mol/L et $[B] = ' + fr(cB, 2) + '$ mol/L.<br/><br/>Calcule la valeur du quotient de réaction $Q_r$ à cet instant (arrondie au millième).',
            answer: Qr,
            tolerance: Math.max(0.005, parseFloat((Qr * 0.02).toFixed(3))),
            unit: '',
            hint: 'Pour $A\\rightleftharpoons B$, le quotient de réaction s\'écrit $Q_r = \\dfrac{[B]}{[A]}$.',
            solution: [
              'Expression du quotient de réaction : $Q_r = \\dfrac{[B]}{[A]}$.',
              'Application numérique : $Q_r = \\dfrac{' + fr(cB, 2) + '}{' + fr(cA, 2) + '}$.',
              'Résultat : $Q_r \\approx ' + fr(Qr, 3) + '$.'
            ]
          };
        } else {
          var K = randFloat(0.5, 5, 2);
          var cB2 = randFloat(0.1, 2, 2);
          var cA2 = randFloat(0.1, 2, 2);
          var QrComp = parseFloat((cB2 / cA2).toFixed(3));
          var sens = QrComp < K ? 'direct' : (QrComp > K ? 'indirect' : 'équilibre (aucune évolution)');
          var contexte2 = pick([
            'un système en cours d\'analyse en laboratoire',
            'un mélange réactionnel prélevé en cours de synthèse',
            'un réacteur pilote de chimie de procédés',
            'un échantillon de contrôle en chimie analytique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on étudie la réaction $A \\rightleftharpoons B$, de constante d\'équilibre $K = ' + fr(K, 2) + '$ à la température de l\'expérience. À l\'état initial, les concentrations sont $[A]_i = ' + fr(cA2, 2) + '$ mol/L et $[B]_i = ' + fr(cB2, 2) + '$ mol/L.<br/><br/>Calcule le quotient de réaction $Q_{r,i}$ (arrondi au millième), puis compare-le à $K$ pour indiquer le sens d\'évolution (saisis uniquement la valeur de $Q_{r,i}$).',
            answer: QrComp,
            tolerance: Math.max(0.005, parseFloat((QrComp * 0.02).toFixed(3))),
            unit: '',
            hint: 'Calcule $Q_{r,i} = \\dfrac{[B]_i}{[A]_i}$, puis compare-le à $K$.',
            solution: [
              'Quotient de réaction : $Q_{r,i} = \\dfrac{[B]_i}{[A]_i} = \\dfrac{' + fr(cB2, 2) + '}{' + fr(cA2, 2) + '} \\approx ' + fr(QrComp, 3) + '$.',
              'Comparaison à $K = ' + fr(K, 2) + '$ : ' + (QrComp < K ? '$Q_{r,i} < K$' : (QrComp > K ? '$Q_{r,i} > K$' : '$Q_{r,i} = K$')) + '.',
              'Le système évolue donc dans le sens <strong>' + sens + '</strong>.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie la réaction de dimérisation du dioxyde d\'azote $2\\,NO_2 \\rightleftharpoons N_2O_4$, de constante d\'équilibre $K = 8{,}0$ à la température de l\'étude. Dans une enceinte fermée, on introduit initialement $[NO_2]_i = 0{,}60$ mol/L et $[N_2O_4]_i = 0{,}20$ mol/L.',
      tasks: [
        'Écrire l\'expression du quotient de réaction $Q_r$ associé à cette réaction.',
        'Calculer la valeur de $Q_{r,i}$ à l\'état initial du système.',
        'Comparer $Q_{r,i}$ à $K$ et en déduire le sens spontané d\'évolution du système. Préciser si la quantité de $NO_2$ va augmenter ou diminuer.'
      ],
      solutions: [
        'Pour $2\\,NO_2 \\rightleftharpoons N_2O_4$, le quotient de réaction s\'écrit (le coefficient $2$ de $NO_2$ devient un exposant) : $Q_r = \\dfrac{[N_2O_4]}{[NO_2]^2}$.',
        '$Q_{r,i} = \\dfrac{0{,}20}{(0{,}60)^2} = \\dfrac{0{,}20}{0{,}36} \\approx 0{,}56$.',
        '$Q_{r,i} \\approx 0{,}56 < K = 8{,}0$ : le système évolue dans le <strong>sens direct</strong>, c\'est-à-dire dans le sens de formation de $N_2O_4$ à partir de $NO_2$. La quantité de $NO_2$ va donc <strong>diminuer</strong> (il est consommé), tandis que celle de $N_2O_4$ va augmenter, jusqu\'à ce que $Q_r$ atteigne $K=8{,}0$.'
      ],
      finalAnswer: 'Avec $Q_{r,i}\\approx0{,}56$ très inférieur à $K=8{,}0$, le système est encore loin de l\'équilibre : il va évoluer massivement dans le sens direct, consommant le $NO_2$ pour former du $N_2O_4$, jusqu\'à ce que le quotient de réaction atteigne la valeur $K$.'
    },

    evaluation: {
      title: 'Évolution spontanée d\'un système chimique',
      duration: '30 min',
      questions: [
        {
          statement: 'Le quotient de réaction $Q_r$ d\'un système chimique peut être calculé :',
          type: 'multiple-choice',
          options: [
            'Uniquement à l\'équilibre',
            'À n\'importe quel instant de l\'évolution du système',
            'Uniquement à l\'état initial',
            'Uniquement si la réaction est totale'
          ],
          answer: 1,
          points: 2,
          correction: '$Q_r$ peut être calculé à tout instant, à partir des concentrations présentes dans le système à cet instant précis — contrairement à $K$, qui n\'est atteint qu\'à l\'équilibre.'
        },
        {
          statement: 'Pour $A\\rightleftharpoons B$ avec $K=1{,}5$, un système a $[A]=0{,}50$ mol/L et $[B]=1{,}20$ mol/L. Calculer $Q_{r,i}$ (arrondi au centième).',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$Q_{r,i} = \\dfrac{[B]}{[A]} = \\dfrac{1{,}20}{0{,}50} = 2{,}4$.'
        },
        {
          statement: 'Avec les données de la question précédente ($Q_{r,i}=2{,}4$ et $K=1{,}5$), dans quel sens le système évolue-t-il ?',
          type: 'multiple-choice',
          options: [
            'Sens direct (formation de B)',
            'Sens indirect (reformation de A)',
            'Le système est à l\'équilibre',
            'Il est impossible de le savoir'
          ],
          answer: 1,
          points: 2,
          correction: '$Q_{r,i}=2{,}4 > K=1{,}5$ : le système évolue dans le sens indirect, consommant $B$ pour reformer $A$, jusqu\'à ce que $Q_r$ redescende à $K=1{,}5$.'
        },
        {
          statement: 'La constante d\'équilibre $K$ d\'une réaction chimique dépend :',
          type: 'multiple-choice',
          options: [
            'Des quantités de matière initiales introduites',
            'Du volume du système',
            'Uniquement de la température',
            'De la vitesse de la réaction'
          ],
          answer: 2,
          points: 2,
          correction: '$K$ ne dépend que de la température : à température fixée, elle a toujours la même valeur, quelles que soient les quantités initiales de matière introduites dans le système.'
        },
        {
          statement: 'Pour $2\\,NO_2 \\rightleftharpoons N_2O_4$, l\'expression correcte du quotient de réaction est :',
          type: 'multiple-choice',
          options: [
            '$Q_r = \\dfrac{[N_2O_4]}{[NO_2]^2}$',
            '$Q_r = \\dfrac{[N_2O_4]}{2[NO_2]}$',
            '$Q_r = \\dfrac{[NO_2]^2}{[N_2O_4]}$',
            '$Q_r = [N_2O_4]\\times[NO_2]^2$'
          ],
          answer: 0,
          points: 2,
          correction: 'Le produit ($N_2O_4$) est au numérateur, le réactif ($NO_2$) au dénominateur, chacun affecté de son coefficient stœchiométrique comme exposant : $Q_r = \\dfrac{[N_2O_4]}{[NO_2]^2}$.'
        }
      ]
    }
  });
