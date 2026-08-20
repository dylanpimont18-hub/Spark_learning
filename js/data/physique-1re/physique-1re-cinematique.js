/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-cinematique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-cinematique',
    level: 2, subject: 'physique',
    icon: '🏃',
    title: 'Le mouvement et ses descriptions',
    subtitle: 'Référentiel, trajectoire, construction des vecteurs vitesse et accélération par la méthode des positions successives',
    keywords: ['Référentiel', 'Trajectoire', 'Vecteur vitesse', 'Vecteur accélération', 'Chronophotographie'],
    physics: 'La méthode des positions successives est utilisée pour analyser le geste d\'un sportif à partir d\'une vidéo ralentie, mesurer la vitesse d\'un véhicule par un radar chronophotographique, étudier la trajectoire d\'une sonde spatiale à partir de relevés de position, ou encore reconstituer la vitesse d\'un objet lors d\'un accident à partir d\'images de vidéosurveillance.',

    cours: {
      intro: 'Décrire le mouvement d\'un objet suppose toujours de préciser un <strong>référentiel</strong> : un solide de référence, associé à une horloge, par rapport auquel on observe le déplacement. Un passager assis dans un train est immobile par rapport au référentiel du train, mais en mouvement par rapport au référentiel terrestre : le mouvement est toujours <strong>relatif</strong>.<br/><br/>Dans un référentiel donné, l\'ensemble des positions successives occupées par un point mobile constitue sa <strong>trajectoire</strong> (rectiligne, circulaire, ou quelconque). Pour caractériser précisément ce mouvement, on filme ou photographie l\'objet à intervalles de temps <strong>égaux</strong> $\\tau$ (chronophotographie, vidéo pointée), ce qui donne une suite de positions $M_0, M_1, M_2, \\dots$<br/><br/>À partir de ces positions, on construit le <strong>vecteur vitesse</strong> $\\vec{v_i}$ en chaque point $M_i$, puis le <strong>vecteur accélération</strong> $\\vec{a_i}$, qui traduit la façon dont la vitesse elle-même évolue au cours du temps.',
      definitions: [
        { term: 'Référentiel', def: 'Solide de référence, associé à une horloge, par rapport auquel on décrit un mouvement. Un même objet peut être immobile dans un référentiel et en mouvement dans un autre : le mouvement est relatif.' },
        { term: 'Trajectoire', def: 'Ensemble des positions successives occupées par un point mobile au cours du temps, dans un référentiel donné. Peut être rectiligne, circulaire, ou quelconque (courbe).' },
        { term: 'Vecteur vitesse (méthode des positions successives)', def: 'Au point $M_i$, encadré par les positions $M_{i-1}$ et $M_{i+1}$ relevées à intervalles de temps égaux $\\tau$ : $\\vec{v_i} = \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$. Ce vecteur est tangent à la trajectoire en $M_i$, orienté dans le sens du mouvement.' },
        { term: 'Vecteur accélération (méthode des positions successives)', def: 'Construit de la même façon que le vecteur vitesse, mais à partir des vecteurs vitesse encadrants : $\\vec{a_i} = \\dfrac{\\vec{v_{i+1}} - \\vec{v_{i-1}}}{2\\tau}$. Traduit toute variation de la vitesse, en norme ou en direction.' }
      ],
      method: {
        title: 'Construire les vecteurs vitesse et accélération à partir d\'une chronophotographie en 3 étapes',
        steps: [
          '<strong>Relever les positions</strong> $M_0, M_1, M_2, \\dots$ occupées par le mobile à des intervalles de temps <strong>égaux</strong> $\\tau$ (chronophotographie, vidéo pointée avec un logiciel de traitement d\'image).',
          '<strong>Construire le vecteur vitesse</strong> $\\vec{v_i}$ en un point $M_i$ à partir du vecteur $\\vec{M_{i-1}M_{i+1}}$, qui relie les deux points <strong>encadrant</strong> $M_i$ (jamais un seul segment consécutif) : $\\vec{v_i} = \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$.<br/>Exemple : pour construire $\\vec{v_2}$, on utilise $M_1$ et $M_3$, pas $M_1$ et $M_2$ seuls.',
          '<strong>Construire le vecteur accélération</strong> $\\vec{a_i}$ de la même façon, mais à partir des <strong>vecteurs vitesse</strong> qui encadrent $M_i$ : $\\vec{a_i} = \\dfrac{\\vec{v_{i+1}} - \\vec{v_{i-1}}}{2\\tau}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Méthode des positions successives (chronophotographie)',
        title: 'Construction des vecteurs vitesse et accélération au point M₂',
        description: 'Cinq positions $M_0$ à $M_4$ sont relevées à intervalles de temps égaux $\\tau$. Le vecteur vitesse $\\vec{v_2}$ est construit à partir des points encadrants $M_1$ et $M_3$ ; le vecteur accélération $\\vec{a_2}$ traduit ici le ralentissement de la composante verticale du mouvement.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="cinem-title cinem-desc">
            <title id="cinem-title">Construction du vecteur vitesse et du vecteur acceleration par la methode des positions successives</title>
            <desc id="cinem-desc">Cinq positions successives M0 a M4 d'un mobile sont relevees a intervalles de temps egaux tau le long d'une trajectoire courbe representee en pointilles. Au point M2, un vecteur vitesse v2 est construit parallelement au segment reliant les points encadrants M1 et M3, oriente vers le haut et vers la droite dans le sens du mouvement. Un vecteur acceleration a2 est egalement trace au point M2, oriente verticalement vers le bas, traduisant le ralentissement de la composante verticale du mouvement sous l'effet de la pesanteur.</desc>

            <defs>
              <marker id="arrow-phy1re-cinem" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="40" y1="270" x2="340" y2="270"></line>

            <!-- trajectoire (relie les positions successives) -->
            <path class="guide-line" d="M60,270 L120,170 L180,110 L240,90 L300,110" fill="none"></path>

            <!-- positions successives -->
            <circle class="plot-point" cx="60" cy="270" r="4"></circle>
            <text class="tick-label" x="60" y="288" text-anchor="middle">M₀</text>

            <circle class="plot-point" cx="120" cy="170" r="4"></circle>
            <text class="tick-label" x="134" y="176" text-anchor="start">M₁</text>

            <circle class="plot-point" cx="180" cy="110" r="4"></circle>
            <text class="tick-label" x="162" y="114" text-anchor="end">M₂</text>

            <circle class="plot-point" cx="240" cy="90" r="4"></circle>
            <text class="tick-label" x="256" y="86" text-anchor="start">M₃</text>

            <circle class="plot-point" cx="300" cy="110" r="4"></circle>
            <text class="tick-label" x="314" y="118" text-anchor="start">M₄</text>

            <!-- intervalle de temps tau -->
            <text class="label-soft" x="72" y="236" text-anchor="middle">τ</text>

            <!-- vecteur vitesse v2 (parallele a M1M3) -->
            <line class="curve-main" x1="180" y1="110" x2="228" y2="78" marker-end="url(#arrow-phy1re-cinem)"></line>
            <text class="annotation-label" x="234" y="64" text-anchor="start">v₂</text>

            <!-- vecteur acceleration a2 (vers le bas) -->
            <line class="curve-main" x1="180" y1="110" x2="180" y2="160" marker-end="url(#arrow-phy1re-cinem)"></line>
            <text class="annotation-label" x="192" y="174" text-anchor="start">a₂</text>
          </svg>
        `,
        notes: [
          'Le vecteur $\\vec{v_2}$ est construit <strong>parallèlement</strong> au segment $M_1M_3$ qui relie les deux points encadrant $M_2$, et non à partir d\'un seul point voisin.',
          'Sa direction est <strong>tangente</strong> à la trajectoire (dashed) au point $M_2$, et son sens indique le sens du mouvement.',
          'Le vecteur accélération $\\vec{a_2}$, ici dirigé vers le bas, traduit le fait que la composante verticale de la vitesse diminue entre $M_1$ et $M_3$ : la trajectoire s\'incurve vers le bas, sous l\'effet de la pesanteur.'
        ],
        reading: 'Repère les cinq points $M_0$ à $M_4$ le long de la trajectoire en pointillés, puis les deux vecteurs pleins tracés au point $M_2$ : $\\vec{v_2}$ (tangent, vers le haut-droite) et $\\vec{a_2}$ (vertical, vers le bas).',
        caption: 'Construction des vecteurs vitesse $\\vec{v_2} = \\dfrac{\\vec{M_1M_3}}{2\\tau}$ et accélération $\\vec{a_2} = \\dfrac{\\vec{v_3}-\\vec{v_1}}{2\\tau}$ à partir de cinq positions relevées à intervalles de temps égaux $\\tau$.'
      },
      example: {
        statement: 'Une balle est filmée à intervalles de temps réguliers $\\tau = 0{,}2$ s. On relève les positions $M_1(0{,}6~;~1{,}0)$ et $M_3(1{,}8~;~1{,}8)$ (coordonnées en mètres), qui encadrent la position $M_2$.<br/><br/>Construire, par le calcul, le vecteur vitesse $\\vec{v_2}$ au point $M_2$, puis calculer sa norme $v_2$.',
        steps: [
          'Méthode des positions successives : $\\vec{v_2} = \\dfrac{\\vec{M_1M_3}}{2\\tau}$, où $M_1$ et $M_3$ encadrent $M_2$.',
          'Coordonnées du vecteur $\\vec{M_1M_3}$ : $\\Delta x = 1{,}8 - 0{,}6 = 1{,}2$ m et $\\Delta y = 1{,}8 - 1{,}0 = 0{,}8$ m.',
          'Composantes de $\\vec{v_2}$ : $v_{2x} = \\dfrac{1{,}2}{2\\times0{,}2} = 3{,}0$ m/s et $v_{2y} = \\dfrac{0{,}8}{2\\times0{,}2} = 2{,}0$ m/s.',
          'Norme : $v_2 = \\sqrt{v_{2x}^2+v_{2y}^2} = \\sqrt{3{,}0^2+2{,}0^2} = \\sqrt{13} \\approx 3{,}61$ m/s.'
        ],
        answer: '$\\vec{v_2}$ a pour composantes $(3{,}0~;~2{,}0)$ m/s et pour norme $v_2 \\approx 3{,}61$ m/s, dirigé tangentiellement à la trajectoire, dans le sens du mouvement.'
      },
      formulas: [
        'Vecteur vitesse (positions successives) : $\\vec{v_i} = \\dfrac{\\vec{M_{i-1}M_{i+1}}}{2\\tau}$',
        'Norme de la vitesse : $v_i = \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$',
        'Vecteur accélération (positions successives) : $\\vec{a_i} = \\dfrac{\\vec{v_{i+1}} - \\vec{v_{i-1}}}{2\\tau}$',
        'Types de trajectoire : rectiligne, circulaire, ou quelconque'
      ],
      recap: [
        'Le mouvement n\'a de sens que par rapport à un <strong>référentiel</strong> précisé : un même objet peut être immobile dans l\'un et en mouvement dans un autre.',
        'Le vecteur vitesse $\\vec{v_i}$, construit à partir des positions <strong>encadrantes</strong>, est toujours tangent à la trajectoire et orienté dans le sens du mouvement.',
        'Le vecteur accélération $\\vec{a_i}$ traduit toute variation de la vitesse, en norme <strong>ou</strong> en direction — il n\'est jamais nul sur une trajectoire courbe, même à vitesse de norme constante.',
        'Un vecteur accélération constamment nul caractérise un mouvement <strong>rectiligne uniforme</strong> (vitesse constante en norme et en direction).'
      ],
      piege: 'Une erreur fréquente est de croire que le vecteur vitesse $\\vec{v_i}$ se construit à partir du point précédent seul, comme $\\vec{M_{i-1}M_i}$, au lieu d\'utiliser les deux points qui <strong>encadrent</strong> $M_i$. Attention à toujours construire $\\vec{v_i}$ à partir du vecteur complet $\\vec{M_{i-1}M_{i+1}}$, qui relie le point d\'avant au point d\'après, jamais un seul segment consécutif.'
    },

    quiz: [
      {
        q: 'Un passager est assis dans un train qui roule à vitesse constante. Par rapport à quel référentiel ce passager est-il immobile ?',
        options: [
          'Le référentiel du train',
          'Le référentiel terrestre uniquement',
          'Aucun référentiel',
          'Tous les référentiels possibles'
        ],
        answer: 0,
        correction: 'Le passager est immobile par rapport au train (référentiel du train), mais en mouvement par rapport au sol (référentiel terrestre) : le mouvement est toujours relatif au référentiel choisi.'
      },
      {
        q: 'Pour construire le vecteur vitesse $\\vec{v_2}$ au point $M_2$ d\'une chronophotographie par la méthode des positions successives, on utilise :',
        options: [
          'Le vecteur $\\vec{M_1M_3}$, divisé par $2\\tau$',
          'Le vecteur $\\vec{M_1M_2}$, divisé par $\\tau$',
          'Le vecteur $\\vec{M_2M_3}$, divisé par $2\\tau$',
          'La distance $M_0M_4$, divisée par $4\\tau$'
        ],
        answer: 0,
        correction: 'La méthode des positions successives utilise toujours les deux points qui <strong>encadrent</strong> le point étudié ($M_1$ et $M_3$ pour $M_2$), jamais un seul segment consécutif.'
      },
      {
        q: 'Un point décrit un mouvement circulaire à vitesse de norme constante. Son vecteur accélération est :',
        options: [
          'Non nul, car la direction de la vitesse change en permanence',
          'Nul, car la norme de la vitesse est constante',
          'Non nul seulement si le rayon du cercle est petit',
          'Toujours tangent à la trajectoire'
        ],
        answer: 0,
        correction: 'L\'accélération traduit toute variation du <strong>vecteur</strong> vitesse, en norme ou en direction. Ici, seule la direction change, mais cela suffit à rendre $\\vec{a} \\neq \\vec{0}$ : l\'accélération est alors centripète, dirigée vers le centre du cercle.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse', 'acceleration']);

        if (typeExo === 'vitesse') {
          var xPrev = pick([0, 0.2, 0.5, 1.0, 1.5, 2.0]);
          var yPrev = pick([0, 0.3, 0.5, 1.0, 1.2]);
          var dx = pick([0.4, 0.6, 0.8, 1.0, 1.2, 1.5, 2.0]);
          var dy = pick([0.3, 0.4, 0.6, 0.8, 1.0, 1.2]);
          var xNext = parseFloat((xPrev + dx).toFixed(2));
          var yNext = parseFloat((yPrev + dy).toFixed(2));
          var tau = pick([0.1, 0.2, 0.25, 0.4, 0.5]);
          var vx = parseFloat((dx / (2 * tau)).toFixed(2));
          var vy = parseFloat((dy / (2 * tau)).toFixed(2));
          var v = parseFloat(Math.sqrt(vx * vx + vy * vy).toFixed(2));
          var tol = parseFloat(Math.max(0.05, v * 0.04).toFixed(2));
          var contexte = pick([
            'un skieur filmé en descente',
            'une balle de golf chronophotographiée',
            'un cycliste suivi par vidéo pointée',
            'un drone étudié en laboratoire de mécanique',
            'un point d\'une pale d\'éolienne filmé au ralenti'
          ]);
          return {
            statement: 'Pour ' + contexte + ', les positions relevées à intervalles de temps égaux $\\tau = ' + fr(tau, 2) + '$ s sont $M_{i-1}(' + fr(xPrev, 2) + '~;~' + fr(yPrev, 2) + ')$ et $M_{i+1}(' + fr(xNext, 2) + '~;~' + fr(yNext, 2) + ')$ (coordonnées en mètres), qui encadrent le point $M_i$.<br/><br/>Calcule la norme $v_i$ du vecteur vitesse au point $M_i$ (en m/s, arrondie au centième).',
            answer: v,
            tolerance: tol,
            unit: 'm/s',
            hint: 'Calcule d\'abord les composantes $\\Delta x$ et $\\Delta y$ du vecteur $\\vec{M_{i-1}M_{i+1}}$, puis divise chacune par $2\\tau$ avant de calculer la norme.',
            solution: [
              'Composantes du vecteur $\\vec{M_{i-1}M_{i+1}}$ : $\\Delta x = ' + fr(xNext, 2) + ' - ' + fr(xPrev, 2) + ' = ' + fr(dx, 2) + '$ m et $\\Delta y = ' + fr(yNext, 2) + ' - ' + fr(yPrev, 2) + ' = ' + fr(dy, 2) + '$ m.',
              'Composantes de $\\vec{v_i}$ : $v_{ix} = \\dfrac{' + fr(dx, 2) + '}{2\\times' + fr(tau, 2) + '} = ' + fr(vx, 2) + '$ m/s et $v_{iy} = \\dfrac{' + fr(dy, 2) + '}{2\\times' + fr(tau, 2) + '} = ' + fr(vy, 2) + '$ m/s.',
              'Norme : $v_i = \\sqrt{v_{ix}^2+v_{iy}^2} \\approx ' + fr(v, 2) + '$ m/s.'
            ]
          };
        } else {
          var vxPrev = pick([0.5, 1, 1.5, 2, 2.5, 3]);
          var vyPrev = pick([0, 0.5, 1, 1.5, 2]);
          var dvx = pick([-1.2, -0.8, -0.5, 0.5, 0.8, 1.0, 1.2]);
          var dvy = pick([-1.0, -0.6, 0.4, 0.6, 1.0, 1.4]);
          var vxNext = parseFloat((vxPrev + dvx).toFixed(2));
          var vyNext = parseFloat((vyPrev + dvy).toFixed(2));
          var tau2 = pick([0.1, 0.2, 0.25, 0.4, 0.5]);
          var ax = parseFloat((dvx / (2 * tau2)).toFixed(2));
          var ay = parseFloat((dvy / (2 * tau2)).toFixed(2));
          var a = parseFloat(Math.sqrt(ax * ax + ay * ay).toFixed(2));
          var tol2 = parseFloat(Math.max(0.1, a * 0.04).toFixed(2));
          var contexte2 = pick([
            'un chariot de manutention filmé en accélération',
            'une luge sur une piste instrumentée',
            'un patineur suivi par vidéo pointée',
            'un mobile autoporté de laboratoire de mécanique'
          ]);
          return {
            statement: 'Pour ' + contexte2 + ', les vecteurs vitesse qui encadrent le point $M_i$ ont pour composantes $\\vec{v_{i-1}}(' + fr(vxPrev, 2) + '~;~' + fr(vyPrev, 2) + ')$ m/s et $\\vec{v_{i+1}}(' + fr(vxNext, 2) + '~;~' + fr(vyNext, 2) + ')$ m/s, avec $\\tau = ' + fr(tau2, 2) + '$ s entre deux positions consécutives.<br/><br/>Calcule la norme $a_i$ du vecteur accélération au point $M_i$ (en m/s², arrondie au centième).',
            answer: a,
            tolerance: tol2,
            unit: 'm/s²',
            hint: 'Calcule d\'abord $\\Delta v_x$ et $\\Delta v_y$, puis divise chacune par $2\\tau$ avant de calculer la norme : $\\vec{a_i} = \\dfrac{\\vec{v_{i+1}}-\\vec{v_{i-1}}}{2\\tau}$.',
            solution: [
              'Variation du vecteur vitesse : $\\Delta v_x = ' + fr(vxNext, 2) + ' - ' + fr(vxPrev, 2) + ' = ' + fr(dvx, 2) + '$ m/s et $\\Delta v_y = ' + fr(vyNext, 2) + ' - ' + fr(vyPrev, 2) + ' = ' + fr(dvy, 2) + '$ m/s.',
              'Composantes de $\\vec{a_i}$ : $a_{ix} = \\dfrac{' + fr(dvx, 2) + '}{2\\times' + fr(tau2, 2) + '} = ' + fr(ax, 2) + '$ m/s² et $a_{iy} = \\dfrac{' + fr(dvy, 2) + '}{2\\times' + fr(tau2, 2) + '} = ' + fr(ay, 2) + '$ m/s².',
              'Norme : $a_i = \\sqrt{a_{ix}^2+a_{iy}^2} \\approx ' + fr(a, 2) + '$ m/s².'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un skieur descend une piste et est filmé à intervalles de temps réguliers $\\tau = 0{,}1$ s. Les positions successives relevées (en mètres, dans un repère où l\'axe des $x$ est horizontal et l\'axe des $y$ est vertical vers le haut) sont : $M_1(2{,}0~;~5{,}0)$, $M_3(3{,}6~;~4{,}2)$ et $M_5(5{,}0~;~3{,}6)$.',
      tasks: [
        'Calculer les composantes et la norme du vecteur vitesse $\\vec{v_2}$ (construit à partir de $M_1$ et $M_3$).',
        'Calculer les composantes et la norme du vecteur vitesse $\\vec{v_4}$ (construit à partir de $M_3$ et $M_5$).',
        'En déduire les composantes du vecteur accélération $\\vec{a_3}$ (construit à partir de $\\vec{v_2}$ et $\\vec{v_4}$), puis commenter l\'évolution de la vitesse du skieur.'
      ],
      solutions: [
        '$\\vec{v_2} = \\dfrac{\\vec{M_1M_3}}{2\\tau} = \\left(\\dfrac{3{,}6-2{,}0}{0{,}2}~;~\\dfrac{4{,}2-5{,}0}{0{,}2}\\right) = (8{,}0~;~-4{,}0)$ m/s. Norme : $v_2 = \\sqrt{8{,}0^2+4{,}0^2} \\approx 8{,}94$ m/s.',
        '$\\vec{v_4} = \\dfrac{\\vec{M_3M_5}}{2\\tau} = \\left(\\dfrac{5{,}0-3{,}6}{0{,}2}~;~\\dfrac{3{,}6-4{,}2}{0{,}2}\\right) = (7{,}0~;~-3{,}0)$ m/s. Norme : $v_4 = \\sqrt{7{,}0^2+3{,}0^2} \\approx 7{,}62$ m/s.',
        '$\\vec{a_3} = \\dfrac{\\vec{v_4}-\\vec{v_2}}{2\\tau} = \\left(\\dfrac{7{,}0-8{,}0}{0{,}2}~;~\\dfrac{-3{,}0-(-4{,}0)}{0{,}2}\\right) = (-5{,}0~;~5{,}0)$ m/s². La composante horizontale de l\'accélération est <strong>négative</strong> : elle s\'oppose au mouvement horizontal, ce qui traduit le <strong>ralentissement</strong> du skieur (sa vitesse passe de $8{,}94$ à $7{,}62$ m/s entre $M_2$ et $M_4$).'
      ],
      finalAnswer: '$v_2 \\approx 8{,}94$ m/s, $v_4 \\approx 7{,}62$ m/s, $\\vec{a_3} = (-5{,}0~;~5{,}0)$ m/s² (norme $\\approx 7{,}07$ m/s²). Le skieur ralentit progressivement : sa vitesse diminue entre les points $M_2$ et $M_4$, cohérent avec un vecteur accélération dont la composante horizontale s\'oppose au sens du mouvement.'
    },

    evaluation: {
      title: 'Évaluation — Le mouvement et ses descriptions',
      duration: '30 min',
      questions: [
        {
          statement: 'Un point mobile occupe la position $M_1(1{,}0~;~2{,}0)$ puis $M_3(2{,}4~;~2{,}6)$ (coordonnées en mètres), avec $\\tau = 0{,}2$ s entre deux positions consécutives. Calculer la norme du vecteur vitesse $v_2$ au point $M_2$ (en m/s, arrondie au centième).',
          type: 'numeric',
          answer: 3.81,
          tolerance: 0.05,
          unit: 'm/s',
          points: 2,
          correction: '$\\Delta x = 1{,}4$ m, $\\Delta y = 0{,}6$ m sur $2\\tau = 0{,}4$ s : $v_{2x} = 3{,}5$ m/s, $v_{2y} = 1{,}5$ m/s, donc $v_2 = \\sqrt{3{,}5^2+1{,}5^2} \\approx 3{,}81$ m/s.'
        },
        {
          statement: 'Un objet est immobile par rapport au sol, mais un observateur placé dans une voiture en mouvement le voit se déplacer. Cette situation illustre :',
          type: 'multiple-choice',
          options: [
            'Le caractère relatif du mouvement, qui dépend du référentiel choisi',
            'Une erreur d\'observation du conducteur',
            'Le fait que l\'objet est réellement en mouvement dans l\'absolu',
            'Une accélération de l\'objet'
          ],
          answer: 0,
          points: 2,
          correction: 'Le mouvement est relatif au référentiel choisi (ici, référentiel terrestre contre référentiel de la voiture) : il n\'existe pas de mouvement « absolu », indépendant de tout référentiel.'
        },
        {
          statement: 'Les vecteurs vitesse encadrant un point $M_3$ ont pour composantes $\\vec{v_2}(4{,}0~;~1{,}0)$ m/s et $\\vec{v_4}(2{,}0~;~3{,}0)$ m/s, avec $\\tau = 0{,}1$ s entre deux positions consécutives. Calculer la norme du vecteur accélération $a_3$ (en m/s², arrondie au centième).',
          type: 'numeric',
          answer: 14.14,
          tolerance: 0.3,
          unit: 'm/s²',
          points: 2,
          correction: '$\\Delta v_x = -2{,}0$ m/s, $\\Delta v_y = 2{,}0$ m/s sur $2\\tau = 0{,}2$ s : $a_{3x} = -10{,}0$ m/s², $a_{3y} = 10{,}0$ m/s², donc $a_3 = \\sqrt{10{,}0^2+10{,}0^2} \\approx 14{,}14$ m/s².'
        },
        {
          statement: 'Si le vecteur accélération d\'un point mobile est nul à tout instant, quelle est la nature de son mouvement ?',
          type: 'multiple-choice',
          options: [
            'Rectiligne uniforme (vitesse constante en norme et en direction)',
            'Circulaire uniforme',
            'Rectiligne uniformément varié',
            'Nécessairement immobile'
          ],
          answer: 0,
          points: 2,
          correction: 'Un vecteur accélération nul à tout instant signifie que le vecteur vitesse ne change ni en norme ni en direction : le mouvement est donc rectiligne (direction constante) et uniforme (norme constante).'
        },
        {
          statement: 'Pour construire le vecteur vitesse $\\vec{v_3}$ au point $M_3$ d\'une chronophotographie, quels points faut-il utiliser ?',
          type: 'multiple-choice',
          options: [
            '$M_2$ et $M_4$, les points qui encadrent $M_3$',
            '$M_3$ et $M_4$ uniquement',
            '$M_0$ et $M_3$',
            '$M_2$ et $M_3$ uniquement'
          ],
          answer: 0,
          points: 2,
          correction: 'La méthode des positions successives utilise toujours les deux points qui encadrent le point étudié, jamais un seul segment consécutif.'
        }
      ]
    }
  });
