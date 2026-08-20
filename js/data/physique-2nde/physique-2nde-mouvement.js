/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-mouvement.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-mouvement',
    level: 2, subject: 'physique',
    icon: '🏃',
    title: 'Description d\'un mouvement',
    subtitle: 'Référentiel, trajectoire, vitesse moyenne, vecteur vitesse et chronophotographie',
    keywords: ['Référentiel', 'Trajectoire', 'Vitesse', 'Chronophotographie', 'Vecteur vitesse'],
    physics: 'Décrire un mouvement permet d\'analyser un contrôle de vitesse routier, de régler un radar tronçon, d\'étudier la trajectoire d\'un satellite ou d\'optimiser le geste d\'un sportif filmé au ralenti.',

    cours: {
      intro: 'Avant de parler de vitesse ou de trajectoire, il faut se poser une question simple mais essentielle : <strong>mouvement par rapport à quoi ?</strong> Un passager assis dans un train roulant est immobile par rapport à son siège, mais il se déplace à grande vitesse par rapport à un arbre le long de la voie. C\'est ce qu\'on appelle la <strong>relativité du mouvement</strong> : décrire un mouvement n\'a de sens que si l\'on précise le <strong>référentiel</strong> choisi.<br/><br/>Une fois le référentiel fixé, on peut suivre les positions successives d\'un point du système au cours du temps : l\'ensemble de ces positions dessine la <strong>trajectoire</strong> (rectiligne, circulaire, ou quelconque). On peut alors quantifier le mouvement à l\'aide d\'une <strong>vitesse</strong>, moyenne sur un parcours ou instantanée en un point précis, et la représenter par un <strong>vecteur vitesse</strong>.',
      definitions: [
        { term: 'Référentiel', def: 'Solide de référence par rapport auquel on décrit un mouvement (ex : référentiel terrestre, lié au sol). Sans référentiel précisé, la notion de mouvement n\'a pas de sens : un même objet peut être immobile dans un référentiel et en mouvement dans un autre.' },
        { term: 'Trajectoire', def: 'Ensemble des positions successives occupées par un point au cours du temps, dans un référentiel donné. Elle peut être <strong>rectiligne</strong> (une droite), <strong>circulaire</strong> (un cercle) ou <strong>quelconque</strong> (courbe non identifiée).' },
        { term: 'Vitesse moyenne', def: 'Distance totale parcourue $d$ divisée par la durée $\\Delta t$ du parcours : $v_{moy} = \\dfrac{d}{\\Delta t}$, en m/s (ou km/h). Elle ne renseigne pas sur les variations de vitesse au cours du trajet.' },
        { term: 'Vecteur vitesse', def: 'En un point $M$ et à un instant $t$ donnés, il a pour <strong>point d\'application</strong> $M$, pour <strong>direction</strong> la tangente à la trajectoire, pour <strong>sens</strong> celui du mouvement, et pour <strong>valeur</strong> la vitesse instantanée (en m/s).' }
      ],
      method: {
        title: 'Décrire un mouvement à partir d\'une chronophotographie en 3 étapes',
        steps: [
          '<strong>Choisir le référentiel</strong> d\'étude (souvent le référentiel terrestre) et repérer la trajectoire en reliant les positions successives du point étudié.<br/>Exemple : sur une chronophotographie prise depuis un point fixe du laboratoire, on relie les positions $M_0, M_1, M_2\\dots$ d\'un mobile.',
          '<strong>Caractériser le mouvement</strong> en comparant les distances parcourues pendant des durées <strong>égales</strong> : distances égales → mouvement <strong>uniforme</strong> ; distances qui augmentent → mouvement <strong>accéléré</strong> ; distances qui diminuent → mouvement <strong>ralenti</strong> (décéléré).',
          'Calculer une <strong>vitesse moyenne</strong> sur tout ou partie du parcours ($v_{moy} = \\dfrac{d}{\\Delta t}$), ou estimer la <strong>vitesse instantanée</strong> en un point $M_i$ à partir de ses deux voisins : $v_i \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$, où $\\tau$ est la durée constante entre deux prises de vue successives.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Chronophotographie d\'un mouvement (mécanique)',
        title: 'Repérer un mouvement accéléré et estimer une vitesse instantanée',
        description: 'Positions successives d\'un mobile autoporteur relevées à intervalles de temps égaux $\\tau$ sur un banc à coussin d\'air incliné : l\'écart entre les points augmente régulièrement, signe d\'un <strong>mouvement accéléré</strong>.',
        svg: `
          <svg viewBox="0 0 580 260" role="img" aria-labelledby="mvt2nde-title mvt2nde-desc">
            <title id="mvt2nde-title">Chronophotographie d'un mobile accelere sur une trajectoire rectiligne</title>
            <desc id="mvt2nde-desc">Six positions successives M0 a M5 d'un mobile sont reperees le long d'une trajectoire rectiligne horizontale, a des instants separes par une duree constante tau. L'ecart entre les points augmente regulierement de gauche a droite, ce qui traduit un mouvement accelere. Des vecteurs vitesse sont traces aux points M1, M3 et M4 : leur longueur, proportionnelle a la valeur de la vitesse instantanee, augmente elle aussi, confirmant l'acceleration du mobile.</desc>

            <defs>
              <marker id="arrow-phys2-mvt" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- trajectoire (avec fleche indiquant le sens du mouvement) -->
            <line class="frame-line" x1="55" y1="180" x2="545" y2="180" marker-end="url(#arrow-phys2-mvt)"></line>
            <text class="label-soft" x="480" y="152" text-anchor="middle">sens du mouvement</text>

            <!-- points M0 a M5 (ecarts croissants : 0, 30, 90, 180, 300, 450 px) -->
            <circle class="plot-point" cx="60" cy="180" r="4"></circle>
            <circle class="plot-point" cx="90" cy="180" r="4"></circle>
            <circle class="plot-point" cx="150" cy="180" r="4"></circle>
            <circle class="plot-point" cx="240" cy="180" r="4"></circle>
            <circle class="plot-point" cx="360" cy="180" r="4"></circle>
            <circle class="plot-point" cx="510" cy="180" r="4"></circle>

            <text class="tick-label" x="60" y="202" text-anchor="middle">M₀</text>
            <text class="tick-label" x="90" y="202" text-anchor="middle">M₁</text>
            <text class="tick-label" x="150" y="202" text-anchor="middle">M₂</text>
            <text class="tick-label" x="240" y="202" text-anchor="middle">M₃</text>
            <text class="tick-label" x="360" y="202" text-anchor="middle">M₄</text>
            <text class="tick-label" x="510" y="202" text-anchor="middle">M₅</text>

            <!-- cotation tau entre M0 et M1 -->
            <line class="frame-line" x1="60" y1="220" x2="60" y2="228"></line>
            <line class="frame-line" x1="90" y1="220" x2="90" y2="228"></line>
            <line class="guide-line" x1="60" y1="224" x2="90" y2="224"></line>
            <text class="tick-label" x="75" y="242" text-anchor="middle">τ</text>

            <!-- guides verticaux vers la ligne des vecteurs -->
            <line class="guide-line" x1="90" y1="180" x2="90" y2="52"></line>
            <line class="guide-line" x1="240" y1="180" x2="240" y2="52"></line>
            <line class="guide-line" x1="360" y1="180" x2="360" y2="52"></line>

            <!-- vecteurs vitesse (longueur proportionnelle a la valeur : 40 px par m/s) -->
            <line class="curve-main" x1="90" y1="52" x2="120" y2="52" marker-end="url(#arrow-phys2-mvt)"></line>
            <text class="annotation-label" x="105" y="40" text-anchor="middle">v₁ ≈ 0,75 m/s</text>

            <line class="curve-main" x1="240" y1="52" x2="310" y2="52" marker-end="url(#arrow-phys2-mvt)"></line>
            <text class="annotation-label" x="275" y="40" text-anchor="middle">v₃ ≈ 1,75 m/s</text>

            <line class="curve-main" x1="360" y1="52" x2="450" y2="52" marker-end="url(#arrow-phys2-mvt)"></line>
            <text class="annotation-label" x="405" y="40" text-anchor="middle">v₄ ≈ 2,25 m/s</text>
          </svg>
        `,
        notes: [
          'Les distances entre positions successives augmentent régulièrement alors que la durée $\\tau$ entre deux prises de vue est constante : c\'est la signature d\'un <strong>mouvement accéléré</strong> (des écarts égaux traduiraient un mouvement uniforme).',
          'La vitesse instantanée en un point $M_i$ s\'estime à partir de ses deux voisins : $v_i \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$. Par exemple en $M_3$, avec des positions à $6$ cm et $20$ cm et $\\tau = 0{,}04$ s : $v_3 \\approx \\dfrac{0{,}20 - 0{,}06}{2 \\times 0{,}04} = 1{,}75$ m/s.',
          'Le vecteur vitesse tracé en chaque point est <strong>tangent à la trajectoire</strong> (ici confondue avec la droite du mouvement) et orienté dans le <strong>sens du mouvement</strong> : sa longueur, proportionnelle à la valeur de la vitesse, grandit à mesure que le mobile accélère.'
        ],
        reading: 'Repère d\'abord les points $M_0$ à $M_5$ de gauche à droite et compare les écarts entre eux, puis observe comment la longueur des vecteurs vitesse grandit aux points $M_1$, $M_3$ et $M_4$.',
        caption: 'Chronophotographie d\'un mobile autoporteur accéléré sur un banc à coussin d\'air incliné ($\\tau = 0{,}04$ s entre deux prises de vue) : les vecteurs vitesse, tangents à la trajectoire rectiligne, s\'allongent à mesure que le mobile accélère.'
      },
      example: {
        statement: 'Une luge glisse sur une pente enneigée rectiligne. Une caméra prend une image toutes les $\\tau = 0{,}2$ s. On repère la position du point $M_0$ à l\'origine ($x_0 = 0$ m), puis $x_1 = 0{,}8$ m à l\'instant suivant, puis $x_2 = 2{,}0$ m à l\'instant d\'après.<br/><br/>Décris qualitativement le mouvement, puis calcule la vitesse instantanée de la luge au point $M_1$.',
        steps: [
          'Référentiel terrestre, trajectoire rectiligne (le long de la pente).',
          'Distance parcourue entre $M_0$ et $M_1$ : $x_1 - x_0 = 0{,}8$ m. Distance parcourue entre $M_1$ et $M_2$ : $x_2 - x_1 = 2{,}0 - 0{,}8 = 1{,}2$ m.',
          'Les durées sont égales ($\\tau = 0{,}2$ s) mais les distances augmentent ($0{,}8$ m puis $1{,}2$ m) : le mouvement est donc <strong>accéléré</strong>.',
          'Vitesse instantanée en $M_1$ (point encadré par $M_0$ et $M_2$) : $v_1 \\approx \\dfrac{x_2 - x_0}{2\\tau} = \\dfrac{2{,}0 - 0}{2 \\times 0{,}2} = \\dfrac{2{,}0}{0{,}4} = 5$ m/s.'
        ],
        answer: '$v_1 = 5$ m/s, soit $18$ km/h. Le mouvement de la luge est accéléré : le vecteur vitesse en $M_1$ serait tangent à la pente (donc rectiligne ici), orienté vers le bas de la pente, avec une longueur plus courte que celle du vecteur vitesse en $M_2$.'
      },
      formulas: [
        '$v_{moy} = \\dfrac{d}{\\Delta t}$ (vitesse moyenne, $d$ en m et $\\Delta t$ en s pour un résultat en m/s)',
        'Conversion : $v(\\text{km/h}) = v(\\text{m/s}) \\times 3{,}6$ et $v(\\text{m/s}) = v(\\text{km/h}) \\div 3{,}6$',
        '$v_i \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\tau}$ (vitesse instantanée approchée par chronophotographie)',
        'Vecteur vitesse : point d\'application $M$, direction tangente à la trajectoire, sens du mouvement, valeur en m/s'
      ],
      recap: [
        'Un mouvement ne se décrit que par rapport à un <strong>référentiel</strong> précisé : c\'est la relativité du mouvement.',
        'Sur une chronophotographie à intervalles de temps égaux, des écarts <strong>croissants</strong> traduisent un mouvement <strong>accéléré</strong>, des écarts <strong>décroissants</strong> un mouvement <strong>ralenti</strong>, des écarts égaux un mouvement <strong>uniforme</strong>.',
        'La vitesse moyenne $v_{moy} = \\dfrac{d}{\\Delta t}$ porte sur tout un parcours ; la vitesse instantanée décrit le mouvement à un instant précis.',
        'Le vecteur vitesse est toujours <strong>tangent à la trajectoire</strong>, orienté dans le sens du mouvement, avec une longueur proportionnelle à sa valeur.'
      ],
      piege: 'Une erreur fréquente est de comparer ou d\'additionner directement des vitesses exprimées dans des unités différentes (km/h et m/s) sans les convertir au préalable. Attention à toujours convertir toutes les vitesses dans la même unité avant tout calcul, en utilisant le facteur $3{,}6$ dans le bon sens (on <strong>divise</strong> par $3{,}6$ pour passer de km/h à m/s).'
    },

    quiz: [
      {
        q: 'Un passager est assis dans un train roulant à vitesse constante sur une voie rectiligne. Par rapport à quel référentiel peut-on dire qu\'il est immobile ?',
        options: [
          'Uniquement par rapport au référentiel terrestre',
          'Par rapport au référentiel du train, dans lequel il ne change pas de position',
          'Il n\'est immobile dans aucun référentiel, car le train roule',
          'Cela dépend uniquement de la vitesse du train'
        ],
        answer: 1,
        correction: 'Le mouvement est <strong>relatif</strong> au référentiel choisi : le passager ne change pas de position par rapport aux parois du train, il y est donc immobile, même s\'il se déplace à grande vitesse par rapport au sol (référentiel terrestre).'
      },
      {
        q: 'Sur une chronophotographie prise à intervalles de temps égaux, les distances entre positions successives d\'un mobile augmentent régulièrement. Comment qualifier ce mouvement ?',
        options: [
          'Mouvement uniforme',
          'Mouvement accéléré',
          'Mouvement ralenti (décéléré)',
          'Mouvement circulaire'
        ],
        answer: 1,
        correction: 'Des durées égales entre les prises de vue associées à des distances qui <strong>augmentent</strong> signifient que le mobile parcourt de plus en plus de chemin dans le même temps : sa vitesse augmente, le mouvement est <strong>accéléré</strong>.'
      },
      {
        q: 'Un véhicule roule à $v = 54$ km/h. Quelle est sa vitesse exprimée en m/s ?',
        options: [
          '$v = 15$ m/s',
          '$v = 194{,}4$ m/s',
          '$v = 50{,}4$ m/s',
          '$v = 0{,}065$ m/s'
        ],
        answer: 0,
        correction: 'Pour passer de km/h à m/s, on <strong>divise</strong> par $3{,}6$ : $v = \\dfrac{54}{3{,}6} = 15$ m/s. Multiplier par $3{,}6$ donnerait au contraire une conversion de m/s vers km/h.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['moyenne', 'instantanee']);

        if (typeExo === 'moyenne') {
          var d = rand(30, 400);
          var t = randFloat(0.5, 5, 1);
          var v = parseFloat((d / t).toFixed(1));
          var contexte = pick([
            'un trajet en voiture sur autoroute',
            'un vol reliant deux aéroports régionaux',
            'une randonnée à vélo sur une voie verte',
            'un trajet en TGV entre deux villes',
            'un déplacement en bus scolaire'
          ]);
          return {
            statement: 'Pour ' + contexte + ', un véhicule parcourt une distance $d = ' + d + '$ km en une durée $\\Delta t = ' + fr(t, 1) + '$ h.<br/><br/>Calcule sa vitesse moyenne $v_{moy}$ (en km/h, arrondie au dixième).',
            answer: v,
            tolerance: Math.max(0.3, parseFloat((v * 0.02).toFixed(1))),
            unit: 'km/h',
            hint: 'Utilise $v_{moy} = \\dfrac{d}{\\Delta t}$ : c\'est une simple division de la distance parcourue par la durée du parcours.',
            solution: [
              'Formule de la vitesse moyenne : $v_{moy} = \\dfrac{d}{\\Delta t}$.',
              'Application numérique : $v_{moy} = \\dfrac{' + d + '}{' + fr(t, 1) + '}$.',
              'Résultat : $v_{moy} \\approx ' + fr(v, 1) + '$ km/h.'
            ]
          };
        } else {
          var tau = pick([0.04, 0.1, 0.2]);
          var xPrev = randFloat(0, 2, 2);
          var ecart = randFloat(0.5, 3, 2);
          var xNext = parseFloat((xPrev + ecart).toFixed(2));
          var v2 = parseFloat(((xNext - xPrev) / (2 * tau)).toFixed(2));
          var contexte2 = pick([
            'une bille lancée sur un rail incliné filmé par une webcam',
            'un chariot sur un banc à coussin d\'air',
            'un plongeur analysé image par image',
            'une balle de golf chronophotographiée',
            'un coureur filmé en très haute vitesse'
          ]);
          return {
            statement: 'Sur une chronophotographie de ' + contexte2 + ', prise toutes les $\\tau = ' + fr(tau, 2) + '$ s, un point matériel occupe la position $x_{i-1} = ' + fr(xPrev, 2) + '$ m à l\'instant précédent et $x_{i+1} = ' + fr(xNext, 2) + '$ m à l\'instant suivant.<br/><br/>Calcule la vitesse instantanée approchée $v_i$ au point intermédiaire $M_i$ (en m/s, arrondie au centième).',
            answer: v2,
            tolerance: Math.max(0.05, parseFloat((v2 * 0.04).toFixed(2))),
            unit: 'm/s',
            hint: 'Utilise $v_i \\approx \\dfrac{M_{i-1}M_{i+1}}{2\\tau} = \\dfrac{x_{i+1} - x_{i-1}}{2\\tau}$.',
            solution: [
              'Formule de la vitesse instantanée approchée : $v_i \\approx \\dfrac{x_{i+1} - x_{i-1}}{2\\tau}$.',
              'Écart de position : $x_{i+1} - x_{i-1} = ' + fr(xNext, 2) + ' - ' + fr(xPrev, 2) + ' = ' + fr(parseFloat((xNext - xPrev).toFixed(2)), 2) + '$ m.',
              'Durée au dénominateur : $2\\tau = 2 \\times ' + fr(tau, 2) + ' = ' + fr(parseFloat((2 * tau).toFixed(2)), 2) + '$ s.',
              'Résultat : $v_i \\approx ' + fr(v2, 2) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un radar tronçon mesure la vitesse moyenne des véhicules entre deux points fixes distants de $d = 2\\,400$ m sur une portion d\'autoroute limitée à $90$ km/h. Une voiture met $\\Delta t = 84$ s pour parcourir cette distance.',
      tasks: [
        'Calculer la vitesse moyenne de la voiture entre les deux radars, en m/s.',
        'Convertir cette vitesse moyenne en km/h.',
        'Comparer cette vitesse à la limite autorisée et conclure sur une éventuelle infraction.'
      ],
      solutions: [
        'Vitesse moyenne : $v_{moy} = \\dfrac{d}{\\Delta t} = \\dfrac{2\\,400}{84} \\approx 28{,}6$ m/s.',
        'Conversion en km/h : $v_{moy} \\approx 28{,}6 \\times 3{,}6 \\approx 102{,}9$ km/h.',
        'La limite autorisée est de $90$ km/h. Or $102{,}9 > 90$ : la voiture a dépassé la limite d\'environ $12{,}9$ km/h en moyenne sur toute la portion.'
      ],
      finalAnswer: 'Vitesse moyenne $\\approx 102{,}9$ km/h, soit un excès d\'environ $12{,}9$ km/h par rapport à la limite. Le principe du radar tronçon repose justement sur une <strong>vitesse moyenne</strong> mesurée sur une longue distance, plus difficile à contourner qu\'un simple ralentissement ponctuel devant un radar fixe classique.'
    },

    evaluation: {
      title: 'Évaluation — Description d\'un mouvement',
      duration: '30 min',
      questions: [
        {
          statement: 'Un motard parcourt une distance $d = 126$ km en une durée $\\Delta t = 1{,}4$ h. Calculer sa vitesse moyenne (en km/h).',
          type: 'numeric',
          answer: 90,
          tolerance: 1,
          unit: 'km/h',
          points: 2,
          correction: '$v_{moy} = \\dfrac{d}{\\Delta t} = \\dfrac{126}{1{,}4} = 90$ km/h.'
        },
        {
          statement: 'Le vecteur vitesse en un point d\'une trajectoire a pour direction :',
          type: 'multiple-choice',
          options: [
            'La perpendiculaire à la trajectoire en ce point',
            'La tangente à la trajectoire en ce point',
            'Toujours l\'horizontale, quel que soit le mouvement',
            'Le rayon de la trajectoire, si elle est circulaire'
          ],
          answer: 1,
          points: 2,
          correction: 'Le vecteur vitesse est toujours <strong>tangent à la trajectoire</strong> au point considéré, orienté dans le sens du mouvement : c\'est une propriété générale, valable pour une trajectoire rectiligne, circulaire ou quelconque.'
        },
        {
          statement: 'Convertir $v = 72$ km/h en m/s.',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'm/s',
          points: 2,
          correction: '$v = \\dfrac{72}{3{,}6} = 20$ m/s.'
        },
        {
          statement: 'Sur une chronophotographie prise toutes les $\\tau = 0{,}1$ s, un point occupe la position $x_{i-1} = 3{,}0$ m puis $x_{i+1} = 5{,}4$ m. Calculer la vitesse instantanée approchée $v_i$ (en m/s).',
          type: 'numeric',
          answer: 12,
          tolerance: 0.3,
          unit: 'm/s',
          points: 3,
          correction: '$v_i \\approx \\dfrac{x_{i+1}-x_{i-1}}{2\\tau} = \\dfrac{5{,}4 - 3{,}0}{2 \\times 0{,}1} = \\dfrac{2{,}4}{0{,}2} = 12$ m/s.'
        },
        {
          statement: 'Sur une chronophotographie à intervalles de temps égaux, les distances entre positions successives diminuent régulièrement. Le mouvement est :',
          type: 'multiple-choice',
          options: [
            'Uniforme',
            'Accéléré',
            'Ralenti (décéléré)',
            'Nécessairement circulaire'
          ],
          answer: 2,
          points: 1,
          correction: 'Des distances qui diminuent pour des durées égales signifient que le mobile parcourt de moins en moins de chemin dans le même temps : sa vitesse diminue, le mouvement est <strong>ralenti</strong> (décéléré).'
        }
      ]
    }
  });
