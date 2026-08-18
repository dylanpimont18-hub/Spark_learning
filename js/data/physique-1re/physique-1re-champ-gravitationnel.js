/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-champ-gravitationnel.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-champ-gravitationnel',
    level: 2, subject: 'physique',
    icon: '🪐',
    title: 'Interactions fondamentales et champ gravitationnel',
    subtitle: 'Loi de gravitation universelle, champ gravitationnel, poids et masse',
    keywords: ['Gravitation', 'Champ gravitationnel', 'Poids', 'Interaction à distance', 'Newton'],
    physics: 'La gravitation universelle régit le mouvement des satellites et de la Lune, détermine le poids d\'un objet selon la planète où il se trouve, et explique les marées océaniques provoquées par l\'attraction de la Lune et du Soleil sur les océans terrestres.',

    cours: {
      intro: 'Deux objets qui possèdent une masse s\'attirent mutuellement : c\'est l\'<strong>interaction gravitationnelle</strong>, l\'une des interactions fondamentales de la nature. Cette interaction agit à distance, sans contact, et explique aussi bien la chute d\'un objet que le maintien de la Lune en orbite autour de la Terre.<br/><br/>Isaac Newton a montré que cette interaction obéit à une loi précise, la <strong>loi de gravitation universelle</strong> : la force d\'attraction entre deux masses est d\'autant plus grande que les masses sont importantes, et d\'autant plus faible que la distance qui les sépare est grande (elle décroît avec le <strong>carré</strong> de la distance).<br/><br/>Pour décrire l\'effet de cette interaction en un point de l\'espace, sans avoir à préciser quelle masse test on y placerait, on introduit la notion de <strong>champ gravitationnel</strong> $\\vec{g}$. C\'est ce champ, appliqué à la masse d\'un objet, qui donne naissance à son <strong>poids</strong>.',
      definitions: [
        { term: 'Interaction gravitationnelle', def: 'Interaction attractive qui s\'exerce entre deux corps possédant une masse, quelle que soit la distance qui les sépare. C\'est l\'une des quatre interactions fondamentales décrites par la physique.' },
        { term: 'Loi de gravitation universelle', def: 'Deux masses ponctuelles $m_A$ et $m_B$, séparées d\'une distance $d$, exercent l\'une sur l\'autre une force attractive de norme $F = G\\dfrac{m_A \\, m_B}{d^2}$, avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg² (constante de gravitation universelle). Ces deux forces, $\\vec{F}_{A/B}$ et $\\vec{F}_{B/A}$, sont dirigées le long de la droite $(AB)$, chacune vers l\'autre masse.' },
        { term: 'Champ gravitationnel $\\vec{g}$', def: 'Grandeur vectorielle définie en tout point de l\'espace par $\\vec{g}(M) = \\dfrac{\\vec{F}}{m}$, en N/kg, indépendante de la masse test $m$ qui la subirait. Pour la Terre (masse $M_T$), à une distance $r$ de son centre : $g(r) = G\\dfrac{M_T}{r^2}$.' },
        { term: 'Poids $\\vec{P}$', def: 'Force exercée par le champ de pesanteur sur un objet de masse $m$ : $\\vec{P} = m\\vec{g}$, en newtons. À distinguer de la <strong>masse</strong> $m$ (grandeur scalaire, en kg, invariante quel que soit le lieu) : le poids, lui, varie avec la valeur locale de $g$.' }
      ],
      method: {
        title: 'Étudier une interaction gravitationnelle en 3 étapes',
        steps: [
          '<strong>Identifier</strong> les deux masses en interaction (assimilées à des points matériels) et la distance $d$ qui sépare leurs <strong>centres</strong> (et non leurs surfaces).<br/>Exemple : pour un satellite en orbite, $d$ est la distance entre le centre de la Terre et le satellite, donc $d = R_T + h$ si $h$ est l\'altitude.',
          '<strong>Appliquer la loi de gravitation universelle</strong> pour calculer la norme de la force : $F = G\\dfrac{m_A \\, m_B}{d^2}$. Cette force est toujours <strong>attractive</strong>, dirigée le long de la droite joignant les deux masses.',
          'Si besoin, <strong>déduire le champ gravitationnel</strong> créé en ce point ($g = F/m$) ou le <strong>poids</strong> d\'un objet placé dans ce champ ($P = mg$), en veillant à ne jamais confondre la masse (invariante) avec le poids (qui dépend du lieu).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Interaction gravitationnelle entre deux masses',
        title: 'Principe des actions réciproques appliqué à la gravitation',
        description: 'Les forces $\\vec{F}_{A/B}$ (exercée par A sur B) et $\\vec{F}_{B/A}$ (exercée par B sur A) sont attractives, dirigées vers l\'autre masse, et ont la <strong>même norme</strong> — quelle que soit la différence entre $m_A$ et $m_B$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="champgrav-title champgrav-desc">
            <title id="champgrav-title">Interaction gravitationnelle entre deux masses A et B</title>
            <desc id="champgrav-desc">Deux corps de masses differentes, A a gauche plus volumineux et B a droite plus petit, sont relies par une ligne pointillee representant la distance d qui separe leurs centres. Une fleche part du centre de A vers la droite, en direction de B, representant la force exercee par B sur A. Une fleche part du centre de B vers la gauche, en direction de A, representant la force exercee par A sur B. Les deux fleches ont exactement la meme longueur, illustrant l'egalite des normes des deux forces malgre la difference de masse entre A et B.</desc>

            <defs>
              <marker id="arrow-phys1re-grav" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ligne des centres (distance d) -->
            <line class="guide-line" x1="150" y1="150" x2="430" y2="150"></line>

            <!-- masse A (grande) -->
            <circle class="frame-line" cx="150" cy="150" r="45" fill="none"></circle>
            <circle class="plot-point" cx="150" cy="150" r="4"></circle>
            <text class="label-soft" x="150" y="215" text-anchor="middle">A (masse m_A)</text>

            <!-- masse B (petite) -->
            <circle class="frame-line" cx="430" cy="150" r="20" fill="none"></circle>
            <circle class="plot-point" cx="430" cy="150" r="4"></circle>
            <text class="label-soft" x="430" y="190" text-anchor="middle">B (masse m_B)</text>

            <!-- vecteur F(B sur A), part de A vers la droite -->
            <line class="curve-main" x1="205" y1="150" x2="295" y2="150" marker-end="url(#arrow-phys1re-grav)"></line>
            <text class="annotation-label" x="250" y="135" text-anchor="middle">F(B→A)</text>

            <!-- vecteur F(A sur B), part de B vers la gauche -->
            <line class="curve-main" x1="400" y1="150" x2="310" y2="150" marker-end="url(#arrow-phys1re-grav)"></line>
            <text class="annotation-label" x="355" y="135" text-anchor="middle">F(A→B)</text>

            <!-- cotation distance d -->
            <line class="frame-line" x1="150" y1="230" x2="150" y2="245"></line>
            <line class="frame-line" x1="430" y1="230" x2="430" y2="245"></line>
            <line class="guide-line" x1="150" y1="238" x2="430" y2="238"></line>
            <text class="tick-label" x="290" y="260" text-anchor="middle">distance d (entre les centres)</text>
          </svg>
        `,
        notes: [
          'Les deux forces sont <strong>colinéaires</strong> à la droite $(AB)$ qui joint les centres des deux masses, et chacune est dirigée <strong>vers l\'autre masse</strong> : l\'interaction gravitationnelle est toujours attractive.',
          'Les deux flèches ont volontairement la <strong>même longueur</strong> : d\'après le principe des actions réciproques (3ᵉ loi de Newton), $\\vec{F}_{A/B}$ et $\\vec{F}_{B/A}$ ont la même norme $F = G\\dfrac{m_A m_B}{d^2}$, même si $m_A \\neq m_B$.',
          'Seul l\'<strong>effet</strong> de cette force diffère selon l\'objet : l\'accélération $a = F/m$ qu\'elle produit est plus grande sur l\'objet de masse plus petite (B), à force égale.'
        ],
        reading: 'Repère d\'abord les deux masses A et B reliées par la distance $d$, puis observe que les deux vecteurs force, bien que partant de masses très différentes, ont la même longueur.',
        caption: 'Interaction gravitationnelle entre deux masses A et B : les forces $\\vec{F}_{A/B}$ et $\\vec{F}_{B/A}$ sont attractives, colinéaires à $(AB)$, et de même norme quelle que soit la différence de masse.'
      },
      example: {
        statement: 'Un satellite de masse $m = 800$ kg orbite à l\'altitude $h = 700$ km au-dessus de la surface terrestre. On donne le rayon terrestre $R_T = 6\\,380$ km, la masse de la Terre $M_T = 5{,}98\\times10^{24}$ kg et $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg².<br/><br/>Calculer la force de gravitation exercée par la Terre sur le satellite, puis le champ gravitationnel $g$ à cette altitude. Comparer à $g_0 \\approx 9{,}81$ N/kg au niveau du sol.',
        steps: [
          'La distance entre le centre de la Terre et le satellite est $r = R_T + h = 6\\,380 + 700 = 7\\,080$ km $= 7{,}08\\times10^6$ m (on travaille toujours avec la distance entre les <strong>centres</strong>, pas l\'altitude seule).',
          'Loi de gravitation universelle : $F = G\\dfrac{M_T \\, m}{r^2} = \\dfrac{6{,}67\\times10^{-11} \\times 5{,}98\\times10^{24} \\times 800}{(7{,}08\\times10^6)^2}$.',
          'Calcul du numérateur : $6{,}67\\times10^{-11} \\times 5{,}98\\times10^{24} \\times 800 \\approx 3{,}19\\times10^{17}$. Calcul du dénominateur : $(7{,}08\\times10^6)^2 \\approx 5{,}01\\times10^{13}$.',
          'On obtient $F \\approx \\dfrac{3{,}19\\times10^{17}}{5{,}01\\times10^{13}} \\approx 6{,}36\\times10^3$ N, soit environ $6\\,365$ N.',
          'Champ gravitationnel à cette altitude : $g = \\dfrac{F}{m} = \\dfrac{6\\,365}{800} \\approx 7{,}96$ N/kg. C\'est bien inférieur à $g_0 \\approx 9{,}81$ N/kg au sol, car le satellite est plus éloigné du centre de la Terre.'
        ],
        answer: '$F \\approx 6\\,365$ N et $g \\approx 7{,}96$ N/kg à $700$ km d\'altitude, contre $9{,}81$ N/kg au sol. Le champ gravitationnel <strong>diminue avec l\'altitude</strong>, ce qui explique pourquoi les astronautes en orbite basse ne sont pas en apesanteur totale : ils subissent encore l\'essentiel de la pesanteur terrestre, mais sont en <strong>chute libre permanente</strong> autour de la Terre.'
      },
      formulas: [
        'Loi de gravitation universelle : $F = G\\dfrac{m_A \\, m_B}{d^2}$, avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg²',
        'Champ gravitationnel : $\\vec{g}(M) = \\dfrac{\\vec{F}}{m}$ (en N/kg)',
        'Champ créé par une masse $M$ à distance $r$ de son centre : $g(r) = G\\dfrac{M}{r^2}$',
        'Poids : $\\vec{P} = m\\vec{g}$ (en N)',
        'Champ de pesanteur terrestre standard : $g_0 \\approx 9{,}81$ N/kg (au niveau de la mer)'
      ],
      recap: [
        'L\'interaction gravitationnelle est toujours <strong>attractive</strong>, proportionnelle au produit des masses et inversement proportionnelle au <strong>carré</strong> de la distance qui les sépare.',
        'Le champ gravitationnel $\\vec{g}$ est une grandeur vectorielle définie en tout point de l\'espace, <strong>indépendante</strong> de la masse test qui viendrait le subir.',
        'La masse (en kg) est une propriété <strong>intrinsèque</strong> et invariante de l\'objet ; le poids (en N), lui, dépend du champ $\\vec{g}$ local et varie donc selon le lieu.',
        'D\'après le principe des actions réciproques, $\\vec{F}_{A/B}$ et $\\vec{F}_{B/A}$ ont toujours la <strong>même norme</strong>, quelle que soit la différence entre $m_A$ et $m_B$.'
      ],
      piege: 'Une confusion fréquente consiste à croire que la Terre, bien plus massive, exerce une force plus grande sur un objet que celle que cet objet exerce en retour sur la Terre. Attention, le principe des actions réciproques impose que ces deux forces aient exactement la <strong>même norme</strong>, quelle que soit la différence de masse entre les deux objets — seul leur effet diffère, car l\'accélération produite ($a = F/m$) dépend, elle, de la masse de chaque objet.'
    },

    quiz: [
      {
        q: 'La Terre (masse $M_T \\approx 5{,}98\\times10^{24}$ kg) et la Lune (masse $M_L \\approx 7{,}35\\times10^{22}$ kg) s\'attirent mutuellement. Comment se comparent la force exercée par la Terre sur la Lune et celle exercée par la Lune sur la Terre ?',
        options: [
          'La force de la Terre sur la Lune est bien plus grande, car la Terre est bien plus massive',
          'Les deux forces ont exactement la même norme, d\'après le principe des actions réciproques',
          'La force de la Lune sur la Terre est plus grande, car la Lune est plus proche',
          'On ne peut pas comparer ces deux forces sans connaître la distance Terre-Lune'
        ],
        answer: 1,
        correction: 'D\'après le principe des actions réciproques (3ᵉ loi de Newton), $\\vec{F}_{Terre/Lune}$ et $\\vec{F}_{Lune/Terre}$ ont toujours la <strong>même norme</strong>, quelle que soit la différence de masse entre les deux astres. Seule l\'accélération produite diffère : la Lune, moins massive, subit une accélération bien plus grande que la Terre pour une même force.'
      },
      {
        q: 'Deux masses ponctuelles $m_A = 50$ kg et $m_B = 2$ kg sont séparées d\'une distance $d = 1$ m. Avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg², quelle est la norme de la force d\'attraction entre elles ?',
        options: [
          '$F \\approx 6{,}67\\times10^{-9}$ N',
          '$F \\approx 6{,}67\\times10^{-11}$ N',
          '$F \\approx 3{,}34\\times10^{-9}$ N',
          '$F \\approx 100$ N'
        ],
        answer: 0,
        correction: '$F = G\\dfrac{m_A m_B}{d^2} = 6{,}67\\times10^{-11} \\times \\dfrac{50 \\times 2}{1^2} = 6{,}67\\times10^{-11} \\times 100 = 6{,}67\\times10^{-9}$ N. Cette force est extrêmement faible pour des objets courants : la gravitation n\'est perceptible qu\'avec des masses considérables, comme celle d\'une planète.'
      },
      {
        q: 'Un astronaute en orbite autour de la Terre semble « flotter » dans sa station spatiale. Quelle affirmation est correcte ?',
        options: [
          'Il n\'y a plus aucune gravité à cette altitude',
          'Le champ gravitationnel y est quasiment nul',
          'Le champ gravitationnel y est encore proche de sa valeur au sol ; l\'astronaute est en chute libre permanente avec la station',
          'La Terre n\'exerce plus d\'attraction au-delà de son atmosphère'
        ],
        answer: 2,
        correction: 'À l\'altitude typique de la Station spatiale internationale (environ 400 km), le champ gravitationnel terrestre reste proche de $90\\%$ de sa valeur au sol. L\'impression d\'apesanteur vient du fait que la station et tout ce qu\'elle contient sont en <strong>chute libre permanente</strong> autour de la Terre, pas de l\'absence de gravité.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['force', 'champ']);

        if (typeExo === 'force') {
          var mA = rand(20, 90) * 10;
          var mB = rand(1, 20);
          var d = randFloat(0.5, 3, 1);
          var G = 6.67e-11;
          var F = G * mA * mB / (d * d);
          var expF = Math.floor(Math.log10(F));
          var mantF = parseFloat((F / Math.pow(10, expF)).toFixed(2));
          if (mantF >= 10) { mantF = parseFloat((mantF / 10).toFixed(2)); expF += 1; }
          var Fdisplay = fr(mantF, 2) + ' \\times 10^{' + expF + '}';
          var contexte = pick([
            'deux masses posées sur un banc d\'essai de laboratoire',
            'deux sphères métalliques utilisées dans une expérience de gravitation',
            'un bloc de béton et un objet test suspendu à proximité',
            'deux masses étalons dans une salle de mesure de précision'
          ]);
          return {
            statement: 'Dans ' + contexte + ', deux masses ponctuelles $m_A = ' + mA + '$ kg et $m_B = ' + mB + '$ kg sont séparées d\'une distance $d = ' + fr(d, 1) + '$ m.<br/><br/>Avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg², calcule la norme $F$ de la force d\'attraction gravitationnelle entre ces deux masses (en N, en notation scientifique, arrondie à deux chiffres significatifs).',
            answer: F,
            tolerance: F * 0.05,
            unit: 'N',
            hint: 'Utilise la loi de gravitation universelle $F = G\\dfrac{m_A m_B}{d^2}$, en veillant à bien élever $d$ au carré.',
            solution: [
              'Loi de gravitation universelle : $F = G\\dfrac{m_A \\, m_B}{d^2}$.',
              'Application numérique : $F = 6{,}67\\times10^{-11} \\times \\dfrac{' + mA + ' \\times ' + mB + '}{' + fr(d, 1) + '^2}$.',
              'Produit des masses : $' + mA + ' \\times ' + mB + ' = ' + (mA * mB) + '$. Carré de la distance : $' + fr(d, 1) + '^2 = ' + fr(parseFloat((d * d).toFixed(2)), 2) + '$.',
              'Résultat : $F \\approx ' + Fdisplay + '$ N, une force extrêmement faible à l\'échelle de ces masses.'
            ]
          };
        } else {
          var Mmant = randFloat(3, 8, 2);
          var M = Mmant * 1e24;
          var rMant = randFloat(6, 8, 2);
          var r = rMant * 1e6;
          var G2 = 6.67e-11;
          var g = G2 * M / (r * r);
          var gRounded = parseFloat(g.toFixed(2));
          var Mdisplay = fr(Mmant, 2) + ' \\times 10^{24}';
          var rDisplay = fr(rMant, 2) + ' \\times 10^{6}';
          var astre = pick([
            'une planète en cours d\'étude par une sonde spatiale',
            'un astre observé lors d\'une mission d\'exploration',
            'une exoplanète modélisée en cours de physique',
            'un corps céleste étudié pour une future mission habitée'
          ]);
          return {
            statement: 'Pour ' + astre + ' de masse $M = ' + Mdisplay + '$ kg, on souhaite calculer le champ gravitationnel à une distance $r = ' + rDisplay + '$ m de son centre.<br/><br/>Avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg², calcule la valeur du champ gravitationnel $g$ à cette distance (en N/kg, arrondie au centième).',
            answer: gRounded,
            tolerance: Math.max(0.05, gRounded * 0.03),
            unit: 'N/kg',
            hint: 'Utilise $g(r) = G\\dfrac{M}{r^2}$, la formule du champ créé par une masse $M$ à distance $r$ de son centre.',
            solution: [
              'Formule du champ gravitationnel : $g(r) = G\\dfrac{M}{r^2}$.',
              'On élève d\'abord $r$ au carré, puis on multiplie $G$ par $M$ avant de diviser par $r^2$.',
              'Résultat : $g \\approx ' + fr(gRounded, 2) + '$ N/kg.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On souhaite comparer le poids d\'un astronaute de masse $m = 75$ kg à la surface de la Terre et à la surface de la Lune. On donne : $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg², masse de la Terre $M_T = 5{,}98\\times10^{24}$ kg et rayon terrestre $R_T = 6{,}38\\times10^6$ m ; masse de la Lune $M_L = 7{,}35\\times10^{22}$ kg et rayon lunaire $R_L = 1{,}74\\times10^6$ m.',
      tasks: [
        'Calculer le champ gravitationnel $g_T$ à la surface de la Terre, à partir de $M_T$ et $R_T$.',
        'Calculer le champ gravitationnel $g_L$ à la surface de la Lune, à partir de $M_L$ et $R_L$.',
        'En déduire le poids de l\'astronaute sur Terre puis sur la Lune, et comparer sa masse dans les deux cas.'
      ],
      solutions: [
        '$g_T = G\\dfrac{M_T}{R_T^2} = \\dfrac{6{,}67\\times10^{-11} \\times 5{,}98\\times10^{24}}{(6{,}38\\times10^6)^2} = \\dfrac{3{,}99\\times10^{14}}{4{,}07\\times10^{13}} \\approx 9{,}80$ N/kg, très proche de la valeur standard $g_0 \\approx 9{,}81$ N/kg.',
        '$g_L = G\\dfrac{M_L}{R_L^2} = \\dfrac{6{,}67\\times10^{-11} \\times 7{,}35\\times10^{22}}{(1{,}74\\times10^6)^2} = \\dfrac{4{,}90\\times10^{12}}{3{,}03\\times10^{12}} \\approx 1{,}62$ N/kg.',
        'Poids sur Terre : $P_T = m \\times g_T = 75 \\times 9{,}80 \\approx 735$ N. Poids sur la Lune : $P_L = m \\times g_L = 75 \\times 1{,}62 \\approx 121{,}5$ N. La <strong>masse</strong> de l\'astronaute, elle, reste $m = 75$ kg dans les deux cas : elle ne dépend pas du lieu, contrairement au poids.'
      ],
      finalAnswer: '$g_L \\approx 1{,}62$ N/kg, environ $6$ fois plus faible que $g_T \\approx 9{,}80$ N/kg. Le poids de l\'astronaute passe donc d\'environ $735$ N sur Terre à environ $121{,}5$ N sur la Lune, alors que sa masse reste rigoureusement identique ($75$ kg) : c\'est ce qui permet aux astronautes d\'effectuer de grands bonds sur la Lune.'
    },

    evaluation: {
      title: 'Évaluation — Interactions fondamentales et champ gravitationnel',
      duration: '30 min',
      questions: [
        {
          statement: 'Deux masses ponctuelles $m_A = 10$ kg et $m_B = 5$ kg sont séparées d\'une distance $d = 2$ m. Calculer la norme de la force de gravitation entre elles (en N, notation scientifique, avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg²).',
          type: 'numeric',
          answer: 8.34e-10,
          tolerance: 1e-10,
          unit: 'N',
          points: 2,
          correction: '$F = G\\dfrac{m_A m_B}{d^2} = 6{,}67\\times10^{-11} \\times \\dfrac{10 \\times 5}{2^2} = 6{,}67\\times10^{-11} \\times 12{,}5 \\approx 8{,}34\\times10^{-10}$ N.'
        },
        {
          statement: 'Le champ gravitationnel $\\vec{g}$ en un point de l\'espace est défini par :',
          type: 'multiple-choice',
          options: [
            '$\\vec{g} = m \\vec{F}$',
            '$\\vec{g} = \\dfrac{\\vec{F}}{m}$',
            '$\\vec{g} = \\vec{F} + m$',
            '$\\vec{g} = G \\times m$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le champ gravitationnel est défini comme le rapport de la force gravitationnelle subie par la masse test : $\\vec{g} = \\dfrac{\\vec{F}}{m}$. C\'est une grandeur vectorielle indépendante de la masse test elle-même.'
        },
        {
          statement: 'Une planète a une masse $M = 4{,}0\\times10^{23}$ kg et un rayon $R = 3{,}0\\times10^6$ m. Calculer le champ gravitationnel à sa surface (en N/kg, arrondi au centième).',
          type: 'numeric',
          answer: 2.96,
          tolerance: 0.1,
          unit: 'N/kg',
          points: 3,
          correction: '$g = G\\dfrac{M}{R^2} = \\dfrac{6{,}67\\times10^{-11} \\times 4{,}0\\times10^{23}}{(3{,}0\\times10^6)^2} = \\dfrac{2{,}668\\times10^{13}}{9{,}0\\times10^{12}} \\approx 2{,}96$ N/kg.'
        },
        {
          statement: 'Un objet de masse $m = 60$ kg se trouve dans un lieu où le champ gravitationnel vaut $g = 3{,}7$ N/kg (surface de Mars). Calculer son poids à cet endroit (en N).',
          type: 'numeric',
          answer: 222,
          tolerance: 2,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 60 \\times 3{,}7 = 222$ N. Attention à ne pas confondre ce résultat avec la masse de l\'objet, qui reste $60$ kg quel que soit le lieu.'
        },
        {
          statement: 'D\'après le principe des actions réciproques, si un camion et une voiture entrent en collision, la force exercée par le camion sur la voiture, comparée à celle exercée par la voiture sur le camion, est :',
          type: 'multiple-choice',
          options: [
            'Beaucoup plus grande, car le camion est plus massif',
            'Beaucoup plus faible, car le camion est plus rigide',
            'De même norme, mais de sens opposé',
            'Nulle, car seul le camion agit sur la voiture'
          ],
          answer: 2,
          points: 1,
          correction: 'Le principe des actions réciproques s\'applique à toute interaction entre deux corps, pas seulement à la gravitation : les deux forces ont toujours la <strong>même norme</strong> et des sens opposés, quelles que soient les masses en jeu.'
        }
      ]
    }
  });
