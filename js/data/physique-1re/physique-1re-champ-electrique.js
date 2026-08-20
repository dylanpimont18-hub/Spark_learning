/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-champ-electrique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-champ-electrique',
    level: 2, subject: 'physique',
    icon: '⚡',
    title: 'Champ électrostatique',
    subtitle: 'Loi de Coulomb, vecteur champ électrique, champ uniforme entre deux plaques, force électrique',
    keywords: ['Coulomb', 'Champ électrique', 'Charge', 'Force électrique', 'Condensateur plan'],
    physics: 'Le champ électrique explique le fonctionnement des tubes cathodiques et des imprimantes à jet d\'encre (déviation d\'un faisceau de charges), le principe des capteurs capacitifs utilisés en domotique, la déviation des particules chargées dans un spectromètre de masse, et l\'expérience historique de Millikan qui a permis de mesurer la charge élémentaire.',

    cours: {
      intro: 'Deux corps portant des <strong>charges électriques</strong> $q_1$ et $q_2$ interagissent selon la <strong>loi de Coulomb</strong>, dont la forme rappelle la loi de gravitation universelle — mais avec deux différences essentielles : l\'interaction électrique peut être <strong>attractive ou répulsive</strong> selon les signes des charges, et sa constante $k$ est immensément plus grande que $G$, ce qui la rend dominante à l\'échelle atomique.<br/><br/>La force électrique entre deux charges ponctuelles a pour norme $F = k\\dfrac{|q_1 q_2|}{r^2}$, avec $k \\approx 9{,}0\\times10^9$ N·m²·C⁻². Comme pour la gravitation, on peut définir un <strong>vecteur champ électrostatique</strong> $\\vec{E}$, créé par une charge $q$ en tout point de l\'espace, d\'intensité $E = k\\dfrac{|q|}{r^2}$.<br/><br/>Un cas particulier essentiel est celui du <strong>champ électrique uniforme</strong>, créé entre deux plaques planes parallèles chargées (un condensateur plan) séparées d\'une distance $d$ et soumises à une tension $U$ : ce champ, de même intensité et de même direction en tout point entre les plaques, vaut $E = \\dfrac{U}{d}$. Une charge $q$ placée dans un champ $\\vec{E}$ subit alors la force électrique $\\vec{F} = q\\vec{E}$.',
      definitions: [
        { term: 'Charge électrique ($q$)', def: 'Grandeur scalaire, positive ou négative, mesurée en coulombs (C). La charge élémentaire vaut $e \\approx 1{,}6\\times10^{-19}$ C : toute charge électrique est un multiple entier de $e$ (elle est <strong>quantifiée</strong>).' },
        { term: 'Loi de Coulomb', def: 'Deux charges ponctuelles $q_1$ et $q_2$ séparées par une distance $r$ interagissent avec une force de norme $F = k\\dfrac{|q_1 q_2|}{r^2}$, avec $k \\approx 9{,}0\\times10^9$ N·m²·C⁻². Attractive si les charges sont de signes opposés, répulsive si elles sont de même signe.' },
        { term: 'Vecteur champ électrostatique ($\\vec{E}$)', def: 'Grandeur vectorielle (en V/m) créée par une charge en tout point de l\'espace. Entre deux plaques planes parallèles distantes de $d$ et soumises à une tension $U$, le champ est <strong>uniforme</strong> : $E = \\dfrac{U}{d}$, dirigé de la plaque positive vers la plaque négative.' },
        { term: 'Force électrique ($\\vec{F} = q\\vec{E}$)', def: 'Force subie par une charge $q$ placée dans un champ $\\vec{E}$. Dirigée dans le <strong>même sens</strong> que $\\vec{E}$ si $q > 0$, dans le sens <strong>opposé</strong> si $q < 0$.' }
      ],
      method: {
        title: 'Calculer une force ou un champ électrique en 3 étapes',
        steps: [
          '<strong>Identifier la situation</strong> : deux charges ponctuelles séparées par une distance $r$ (loi de Coulomb), ou un champ uniforme entre deux plaques séparées par $d$ et soumises à une tension $U$.',
          '<strong>Appliquer la formule adaptée</strong> — $F = k\\dfrac{|q_1 q_2|}{r^2}$ pour une force entre deux charges, ou $E = \\dfrac{U}{d}$ pour un champ uniforme — en veillant à convertir toutes les grandeurs en unités du Système international (mètres, coulombs, volts).',
          '<strong>Si une charge $q$ est placée dans un champ $\\vec{E}$</strong>, en déduire la force électrique $\\vec{F} = q\\vec{E}$ : sa norme vaut $|q| \\times E$, et son sens dépend du <strong>signe</strong> de $q$ — c\'est le point à ne jamais négliger.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Champ électrique uniforme (condensateur plan)',
        title: 'Lignes de champ entre deux plaques planes parallèles',
        description: 'Entre deux plaques planes parallèles chargées, le champ électrique $\\vec{E}$ est <strong>uniforme</strong> : les lignes de champ sont parallèles, équidistantes, et orientées de la plaque positive vers la plaque négative. Une charge test $+q$ y subit une force $\\vec{F} = q\\vec{E}$, dans le même sens que $\\vec{E}$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="champe-title champe-desc">
            <title id="champe-title">Champ electrique uniforme entre deux plaques planes paralleles</title>
            <desc id="champe-desc">Deux plaques verticales paralleles, l'une chargee positivement a gauche et l'autre negativement a droite, delimitent une zone ou regnent quatre lignes de champ horizontales, paralleles et equidistantes, orientees de la plaque positive vers la plaque negative. Une charge test positive, representee par un petit cercle au centre de la zone, est associee a une fleche courte representant la force electrique qu'elle subit, orientee dans le meme sens que les lignes de champ.</desc>

            <defs>
              <marker id="arrow-phy1re-champe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- plaque positive (gauche) -->
            <line class="frame-line" x1="120" y1="55" x2="120" y2="245"></line>
            <line class="frame-line" x1="120" y1="75" x2="108" y2="75"></line>
            <line class="frame-line" x1="120" y1="125" x2="108" y2="125"></line>
            <line class="frame-line" x1="120" y1="175" x2="108" y2="175"></line>
            <line class="frame-line" x1="120" y1="225" x2="108" y2="225"></line>
            <text class="annotation-label" x="120" y="42" text-anchor="middle">+</text>

            <!-- plaque negative (droite) -->
            <line class="frame-line" x1="440" y1="55" x2="440" y2="245"></line>
            <line class="frame-line" x1="440" y1="75" x2="452" y2="75"></line>
            <line class="frame-line" x1="440" y1="125" x2="452" y2="125"></line>
            <line class="frame-line" x1="440" y1="175" x2="452" y2="175"></line>
            <line class="frame-line" x1="440" y1="225" x2="452" y2="225"></line>
            <text class="annotation-label" x="440" y="42" text-anchor="middle">−</text>

            <!-- lignes de champ (paralleles, equidistantes) -->
            <line class="guide-line" x1="145" y1="90" x2="415" y2="90" marker-end="url(#arrow-phy1re-champe)"></line>
            <line class="guide-line" x1="145" y1="130" x2="415" y2="130" marker-end="url(#arrow-phy1re-champe)"></line>
            <line class="guide-line" x1="145" y1="170" x2="415" y2="170" marker-end="url(#arrow-phy1re-champe)"></line>
            <line class="guide-line" x1="145" y1="210" x2="415" y2="210" marker-end="url(#arrow-phy1re-champe)"></line>
            <text class="label-soft" x="280" y="76" text-anchor="middle">champ E</text>

            <!-- charge test +q et force F = qE -->
            <circle class="plot-point-alt" cx="280" cy="150" r="14"></circle>
            <text class="annotation-label" x="280" y="154" text-anchor="middle">+q</text>
            <line class="curve-main" x1="298" y1="150" x2="345" y2="150" marker-end="url(#arrow-phy1re-champe)"></line>
            <text class="annotation-label" x="321" y="138" text-anchor="middle">F = qE</text>
          </svg>
        `,
        notes: [
          'Les lignes de champ sont <strong>parallèles et équidistantes</strong> : c\'est la signature d\'un champ <strong>uniforme</strong>, de même intensité $E = \\dfrac{U}{d}$ en tout point situé entre les plaques.',
          'Les lignes de champ vont toujours de la plaque <strong>positive</strong> vers la plaque <strong>négative</strong> : c\'est le sens conventionnel du vecteur champ électrique $\\vec{E}$.',
          'La charge test étant <strong>positive</strong> ici, la force $\\vec{F} = q\\vec{E}$ qu\'elle subit est dans le <strong>même sens</strong> que $\\vec{E}$. Pour une charge négative, cette force serait dirigée en sens opposé.'
        ],
        reading: 'Repère les quatre lignes de champ parallèles entre les deux plaques, puis la charge test $+q$ au centre et la flèche courte qui représente la force électrique qu\'elle subit, dans le même sens que le champ.',
        caption: 'Champ électrique uniforme entre deux plaques planes parallèles : lignes de champ parallèles et équidistantes, de la plaque positive vers la plaque négative. La force $\\vec{F} = q\\vec{E}$ sur une charge test positive est dans le même sens que $\\vec{E}$.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Loi de Coulomb (interaction entre deux charges ponctuelles)',
          title: 'Deux charges de même signe : une répulsion à distance',
          description: 'Le schéma ci-dessus montre le champ <strong>déjà établi</strong> entre deux plaques ; la loi de Coulomb, elle, décrit la force <strong>directement entre deux charges ponctuelles</strong> $q_1$ et $q_2$ séparées d\'une distance $r$ — sans plaques ni condensateur. Ici, les deux charges sont de <strong>même signe</strong> : elles se <strong>repoussent</strong>.',
          svg: `
            <svg viewBox="0 0 560 300" role="img" aria-labelledby="champe-coulomb-title champe-coulomb-desc">
              <title id="champe-coulomb-title">Force de Coulomb entre deux charges ponctuelles de meme signe</title>
              <desc id="champe-coulomb-desc">Deux charges ponctuelles positives, representees par deux petits cercles identiques distants de r, se repoussent : une fleche part de chaque charge et pointe vers l'exterieur, en s'eloignant de l'autre charge. Les deux fleches ont une longueur strictement egale, illustrant le principe des actions reciproques applique a la loi de Coulomb.</desc>

              <defs>
                <marker id="arrow-phy1re-coulomb" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- charges ponctuelles -->
              <circle class="frame-line" cx="150" cy="150" r="18" fill="none"></circle>
              <text class="annotation-label" x="150" y="155" text-anchor="middle">q₁</text>
              <circle class="frame-line" cx="410" cy="150" r="18" fill="none"></circle>
              <text class="annotation-label" x="410" y="155" text-anchor="middle">q₂</text>

              <!-- cotation distance r (entre les centres) -->
              <line class="frame-line" x1="150" y1="245" x2="150" y2="255"></line>
              <line class="frame-line" x1="410" y1="245" x2="410" y2="255"></line>
              <line class="guide-line" x1="150" y1="250" x2="410" y2="250"></line>
              <text class="tick-label" x="280" y="270" text-anchor="middle">r</text>

              <!-- F(2->1), sur q1, s'eloigne de q2 (repulsion) -->
              <line class="curve-main" x1="132" y1="150" x2="70" y2="150" marker-end="url(#arrow-phy1re-coulomb)"></line>
              <text class="annotation-label" x="101" y="136" text-anchor="middle">F(2→1)</text>

              <!-- F(1->2), sur q2, s'eloigne de q1 (repulsion) -->
              <line class="curve-main" x1="428" y1="150" x2="490" y2="150" marker-end="url(#arrow-phy1re-coulomb)"></line>
              <text class="annotation-label" x="459" y="136" text-anchor="middle">F(1→2)</text>
            </svg>
          `,
          notes: [
            'Les charges $q_1$ et $q_2$ étant de <strong>même signe</strong>, les forces pointent vers l\'<strong>extérieur</strong> (répulsion). Si elles étaient de signes opposés, les deux flèches pointeraient au contraire l\'une vers l\'autre (attraction) — seul le sens change, pas la méthode.',
            'Comme pour l\'interaction gravitationnelle, la distance $r$ se mesure entre les <strong>centres</strong> des deux charges, et les deux forces $\\vec{F}(2\\to1)$ et $\\vec{F}(1\\to2)$ ont exactement la <strong>même norme</strong> : le principe des actions réciproques s\'applique aussi à l\'interaction électrique.',
            'Norme commune des deux forces : $F = k\\dfrac{|q_1q_2|}{r^2}$, avec $k\\approx9{,}0\\times10^9$ N·m²·C⁻² — cette loi ne s\'applique qu\'à des charges <strong>ponctuelles</strong>, contrairement au champ uniforme du schéma précédent.'
          ],
          reading: 'Repère les deux flèches de même longueur qui partent de chaque charge en s\'éloignant de l\'autre : cette symétrie traduit le principe des actions réciproques, ici appliqué à une répulsion entre charges de même signe.',
          caption: 'Deux charges ponctuelles $q_1$ et $q_2$ de même signe séparées par une distance $r$ se repoussent avec des forces de même norme $F=k\\dfrac{|q_1q_2|}{r^2}$ et de sens opposés.'
        }
      ],
      example: {
        statement: 'Un condensateur plan est formé de deux plaques parallèles distantes de $d = 2{,}0$ cm, soumises à une tension $U = 400$ V.<br/><br/>Calculer l\'intensité $E$ du champ électrique uniforme entre les plaques, puis la force électrique $F$ subie par un électron (charge $q_e = -1{,}6\\times10^{-19}$ C) placé dans ce champ.',
        steps: [
          'Conversion de la distance : $d = 2{,}0$ cm $= 2{,}0\\times10^{-2}$ m.',
          'Champ électrique uniforme entre deux plaques : $E = \\dfrac{U}{d} = \\dfrac{400}{2{,}0\\times10^{-2}} = 2{,}0\\times10^4$ V/m.',
          'Force électrique subie par l\'électron (en norme) : $F = |q_e| \\times E = 1{,}6\\times10^{-19} \\times 2{,}0\\times10^4$.',
          'Résultat : $F \\approx 3{,}2\\times10^{-15}$ N — une force extrêmement faible en valeur absolue, mais suffisante pour dévier fortement un électron, dont la masse est elle-même infime.'
        ],
        answer: '$E = 2{,}0\\times10^4$ V/m et $F \\approx 3{,}2\\times10^{-15}$ N. Comme la charge de l\'électron est négative, la force $\\vec{F} = q_e\\vec{E}$ est dirigée en sens <strong>opposé</strong> au champ $\\vec{E}$, donc de la plaque négative vers la plaque positive.'
      },
      formulas: [
        'Loi de Coulomb : $F = k\\dfrac{|q_1 q_2|}{r^2}$, avec $k \\approx 9{,}0\\times10^9$ N·m²·C⁻²',
        'Champ électrique créé par une charge ponctuelle $q$ : $E = k\\dfrac{|q|}{r^2}$',
        'Champ électrique uniforme (condensateur plan) : $E = \\dfrac{U}{d}$',
        'Force électrique sur une charge $q$ : $\\vec{F} = q\\vec{E}$'
      ],
      recap: [
        'La loi de Coulomb $F = k\\dfrac{|q_1q_2|}{r^2}$ décroît comme la loi de gravitation, mais l\'interaction électrique peut être <strong>attractive ou répulsive</strong> selon les signes des charges.',
        'La constante $k \\approx 9{,}0\\times10^9$ N·m²·C⁻² est immensément plus grande que $G$ : l\'interaction électrique domine très largement à l\'échelle atomique.',
        'Entre deux plaques planes parallèles, le champ $E = \\dfrac{U}{d}$ est <strong>uniforme</strong> : lignes de champ parallèles, équidistantes, de la plaque positive vers la négative.',
        'Le sens de la force $\\vec{F} = q\\vec{E}$ dépend du <strong>signe</strong> de la charge : même sens que $\\vec{E}$ si $q>0$, sens opposé si $q<0$.'
      ],
      piege: 'Une erreur fréquente est de tracer systématiquement la force électrique $\\vec{F} = q\\vec{E}$ dans le même sens que le champ $\\vec{E}$, quel que soit le signe de la charge $q$. Attention : cette force n\'a le même sens que $\\vec{E}$ que si $q$ est positive ; pour une charge négative comme l\'électron, $\\vec{F}$ pointe au contraire en sens strictement opposé à $\\vec{E}$.'
    },

    quiz: [
      {
        q: 'Deux charges ponctuelles de même signe sont séparées par une distance $r$. Si on triple cette distance (charges inchangées), la force électrique entre elles devient :',
        options: [
          'Divisée par 9',
          'Divisée par 3',
          'Multipliée par 3',
          'Inchangée'
        ],
        answer: 0,
        correction: 'La loi de Coulomb donne $F = k\\dfrac{|q_1 q_2|}{r^2}$ : la force est inversement proportionnelle au carré de la distance. Tripler $r$ multiplie $r^2$ par 9, donc $F$ est divisée par 9.'
      },
      {
        q: 'Deux charges électriques de signes opposés sont placées à une distance $r$ l\'une de l\'autre. L\'interaction électrique entre elles est :',
        options: [
          'Attractive',
          'Répulsive',
          'Nulle',
          'Alternativement attractive puis répulsive'
        ],
        answer: 0,
        correction: 'Deux charges de signes opposés s\'attirent, deux charges de même signe se repoussent : contrairement à l\'interaction gravitationnelle, toujours attractive, l\'interaction électrique peut être attractive <strong>ou</strong> répulsive selon les signes des charges en présence.'
      },
      {
        q: 'Un ion négatif est placé dans un champ électrique uniforme $\\vec{E}$, dirigé de la gauche vers la droite. Dans quel sens est dirigée la force électrique qu\'il subit ?',
        options: [
          'De la droite vers la gauche (sens opposé à $\\vec{E}$)',
          'De la gauche vers la droite (même sens que $\\vec{E}$)',
          'Perpendiculairement à $\\vec{E}$',
          'Aucune force ne s\'exerce sur cet ion'
        ],
        answer: 0,
        correction: 'La force électrique vaut $\\vec{F} = q\\vec{E}$. Comme la charge $q$ de l\'ion négatif est négative, $\\vec{F}$ est dirigée en sens <strong>opposé</strong> à $\\vec{E}$, donc de la droite vers la gauche.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['coulomb', 'champ']);

        if (typeExo === 'coulomb') {
          var q1uC = pick([1, 2, 3, 4, 5, 6, 8, 10]);
          var q2uC = pick([1, 2, 3, 4, 5, 6, 8, 10]);
          var r = pick([0.2, 0.3, 0.5, 0.8, 1, 1.5, 2]);
          var k = 9e9;
          var F = k * (q1uC * 1e-6) * (q2uC * 1e-6) / (r * r);
          var decimals = F >= 1 ? 2 : 4;
          var Fround = parseFloat(F.toFixed(decimals));
          var tol = parseFloat(Math.max(F >= 1 ? 0.05 : 0.0005, Fround * 0.05).toFixed(decimals));
          var contexte = pick([
            'deux sphères chargées d\'un électroscope',
            'deux billes électrisées par frottement',
            'deux petites sphères conductrices de laboratoire',
            'deux gouttelettes chargées',
            'deux charges ponctuelles d\'un dispositif expérimental'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', deux charges ponctuelles $q_1 = ' + q1uC + '$ µC et $q_2 = ' + q2uC + '$ µC sont séparées par une distance $r = ' + fr(r, 1) + '$ m.<br/><br/>Calcule l\'intensité $F$ de la force électrique entre ces deux charges (en N), avec $k \\approx 9{,}0\\times10^9$ N·m²·C⁻².',
            answer: Fround,
            tolerance: tol,
            unit: 'N',
            hint: 'Convertis les charges en coulombs ($1$ µC $=10^{-6}$ C) puis applique la loi de Coulomb $F = k\\dfrac{|q_1 q_2|}{r^2}$.',
            solution: [
              'Conversion : $q_1 = ' + q1uC + '\\times10^{-6}$ C et $q_2 = ' + q2uC + '\\times10^{-6}$ C.',
              'Loi de Coulomb : $F = k\\dfrac{|q_1 q_2|}{r^2} = 9{,}0\\times10^9 \\times \\dfrac{' + q1uC + '\\times10^{-6} \\times ' + q2uC + '\\times10^{-6}}{' + fr(r, 1) + '^2}$.',
              'Résultat : $F \\approx ' + fr(Fround, decimals) + '$ N.'
            ]
          };
        } else {
          var dCm = pick([0.5, 1, 1.5, 2, 3, 4, 5]);
          var U = pick([100, 150, 200, 250, 300, 400, 500, 600]);
          var dM = dCm / 100;
          var E = U / dM;
          var Eround = parseFloat(E.toFixed(1));
          var tol2 = parseFloat(Math.max(5, Eround * 0.03).toFixed(1));
          var contexte2 = pick([
            'un condensateur plan de laboratoire',
            'un dispositif de déviation d\'un tube cathodique',
            'un capteur capacitif industriel',
            'un montage expérimental de champ uniforme'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', deux plaques parallèles distantes de $d = ' + fr(dCm, 1) + '$ cm sont soumises à une tension $U = ' + U + '$ V.<br/><br/>Calcule l\'intensité $E$ du champ électrique uniforme entre les plaques (en V/m, arrondie au dixième).',
            answer: Eround,
            tolerance: tol2,
            unit: 'V/m',
            hint: 'Convertis $d$ en mètres puis utilise $E = \\dfrac{U}{d}$.',
            solution: [
              'Conversion : $d = ' + fr(dCm, 1) + '$ cm $= ' + fr(dM, 3) + '$ m.',
              'Champ uniforme : $E = \\dfrac{U}{d} = \\dfrac{' + U + '}{' + fr(dM, 3) + '}$.',
              'Résultat : $E \\approx ' + fr(Eround, 1) + '$ V/m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Dans une expérience inspirée de celle de Millikan, une gouttelette d\'huile chargée, de masse $m = 1{,}0\\times10^{-14}$ kg, reste immobile entre deux plaques horizontales distantes de $d = 1{,}0$ cm, soumises à une tension $U = 500$ V. Le poids de la gouttelette est exactement compensé par la force électrique exercée par le champ uniforme entre les plaques (on prendra $g = 9{,}81$ m/s² et $e \\approx 1{,}6\\times10^{-19}$ C).',
      tasks: [
        'Calculer le poids $P$ de la gouttelette.',
        'Calculer l\'intensité $E$ du champ électrique uniforme entre les plaques.',
        'Sachant qu\'à l\'équilibre la force électrique compense exactement le poids ($F = P$), en déduire la charge $q$ portée par la gouttelette, puis le nombre $n$ de charges élémentaires qu\'elle porte (charge élémentaire $e$).'
      ],
      solutions: [
        '$P = m \\times g = 1{,}0\\times10^{-14} \\times 9{,}81 \\approx 9{,}81\\times10^{-14}$ N.',
        '$E = \\dfrac{U}{d} = \\dfrac{500}{1{,}0\\times10^{-2}} = 5{,}0\\times10^4$ V/m.',
        'À l\'équilibre, $F = qE = P$, donc $q = \\dfrac{P}{E} = \\dfrac{9{,}81\\times10^{-14}}{5{,}0\\times10^4} \\approx 1{,}96\\times10^{-18}$ C. Nombre de charges élémentaires : $n = \\dfrac{q}{e} = \\dfrac{1{,}96\\times10^{-18}}{1{,}6\\times10^{-19}} \\approx 12{,}3$, arrondi à $n = 12$ (la charge d\'une gouttelette est nécessairement un <strong>multiple entier</strong> de $e$).'
      ],
      finalAnswer: '$P \\approx 9{,}81\\times10^{-14}$ N, $E = 5{,}0\\times10^4$ V/m, $q \\approx 1{,}96\\times10^{-18}$ C, soit environ $n = 12$ charges élémentaires. C\'est précisément ce type d\'expérience qui a permis à Millikan de démontrer que la charge électrique est <strong>quantifiée</strong> : elle ne peut prendre que des valeurs multiples entiers de la charge élémentaire $e$.'
    },

    evaluation: {
      title: 'Évaluation — Champ électrostatique',
      duration: '30 min',
      questions: [
        {
          statement: 'Deux charges ponctuelles $q_1 = 4$ µC et $q_2 = 6$ µC sont séparées par $r = 0{,}3$ m. Calculer la force électrique $F$ entre elles (en N, arrondie au dixième), avec $k \\approx 9{,}0\\times10^9$ N·m²·C⁻².',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.1,
          unit: 'N',
          points: 2,
          correction: '$F = k\\dfrac{q_1 q_2}{r^2} = 9{,}0\\times10^9\\times\\dfrac{4\\times10^{-6}\\times6\\times10^{-6}}{0{,}3^2} = 2{,}4$ N.'
        },
        {
          statement: 'Deux charges ponctuelles de même signe, initialement séparées d\'une distance $r$, sont rapprochées : leur distance est divisée par deux. Comment évolue la force électrique entre elles ?',
          type: 'multiple-choice',
          options: [
            'Elle est multipliée par 4',
            'Elle est multipliée par 2',
            'Elle est divisée par 2',
            'Elle est divisée par 4'
          ],
          answer: 0,
          points: 2,
          correction: 'Comme $F \\propto \\dfrac{1}{r^2}$, diviser $r$ par 2 revient à diviser $r^2$ par 4, donc à multiplier $F$ par 4.'
        },
        {
          statement: 'Deux plaques parallèles distantes de $d = 4{,}0$ cm sont soumises à une tension $U = 800$ V. Calculer l\'intensité $E$ du champ électrique uniforme entre les plaques (en V/m).',
          type: 'numeric',
          answer: 20000,
          tolerance: 500,
          unit: 'V/m',
          points: 2,
          correction: '$E = \\dfrac{U}{d} = \\dfrac{800}{4{,}0\\times10^{-2}} = 2{,}0\\times10^4$ V/m.'
        },
        {
          statement: 'Un proton (charge $q = +1{,}6\\times10^{-19}$ C) est placé dans un champ électrique uniforme d\'intensité $E = 3{,}0\\times10^4$ V/m. Calculer la force électrique $F$ qu\'il subit, exprimée en unité de $10^{-15}$ N (donne uniquement le coefficient, arrondi au dixième).',
          type: 'numeric',
          answer: 4.8,
          tolerance: 0.2,
          unit: '× 10⁻¹⁵ N',
          points: 2,
          correction: '$F = |q|\\times E = 1{,}6\\times10^{-19}\\times3{,}0\\times10^4 = 4{,}8\\times10^{-15}$ N, soit un coefficient de $4{,}8$.'
        },
        {
          statement: 'Un électron (charge négative) est placé dans un champ électrique uniforme $\\vec{E}$ dirigé vers la droite. Dans quel sens est dirigée la force électrique qu\'il subit ?',
          type: 'multiple-choice',
          options: [
            'Vers la gauche (sens opposé à $\\vec{E}$)',
            'Vers la droite (même sens que $\\vec{E}$)',
            'Perpendiculairement à $\\vec{E}$',
            'Aucune force ne s\'exerce sur l\'électron'
          ],
          answer: 0,
          points: 2,
          correction: '$\\vec{F}=q\\vec{E}$ avec $q<0$ pour un électron : la force est donc dirigée en sens opposé au champ $\\vec{E}$, soit vers la gauche.'
        }
      ]
    }
  });
