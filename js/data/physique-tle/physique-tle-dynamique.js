/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-dynamique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-dynamique',
    level: 2, subject: 'physique',
    icon: '🍏',
    title: 'Dynamique newtonienne',
    subtitle: 'Référentiel galiléen, les trois lois de Newton, bilan des forces, projection du PFD sur des axes adaptés (plan incliné, frottements)',
    keywords: ['Newton', 'PFD', 'Référentiel galiléen', 'Actions réciproques', 'Plan incliné'],
    physics: 'La dynamique newtonienne permet de dimensionner le freinage d\'un véhicule, de calculer la tension d\'un câble de remontée mécanique, de comprendre pourquoi une fusée avance en éjectant des gaz vers l\'arrière (troisième loi), ou de déterminer si une charge glissera ou non sur un plan incliné en fonction des frottements.',

    cours: {
      intro: 'La dynamique newtonienne repose sur <strong>trois lois</strong> énoncées par Newton, valables dans un <strong>référentiel galiléen</strong> (un référentiel dans lequel le principe d\'inertie est vérifié ; le référentiel terrestre est considéré comme galiléen pour la plupart des mouvements étudiés au lycée).<br/><br/>La <strong>première loi</strong> (principe d\'inertie) énonce que, dans un référentiel galiléen, un système isolé ou pseudo-isolé (soumis à des forces qui se compensent) est soit au repos, soit en mouvement rectiligne uniforme. La <strong>deuxième loi</strong> (principe fondamental de la dynamique, PFD) relie la résultante des forces à l\'accélération : $\\sum \\vec{F} = m\\vec{a}$. La <strong>troisième loi</strong> (principe des actions réciproques) énonce que si un système A exerce une force $\\vec{F}_{A\\rightarrow B}$ sur un système B, alors B exerce sur A une force <strong>opposée</strong> : $\\vec{F}_{B\\rightarrow A} = -\\vec{F}_{A\\rightarrow B}$.<br/><br/>Résoudre un problème de dynamique nécessite de faire un <strong>bilan des forces</strong> rigoureux (poids, réaction du support, tension, frottements…), puis de projeter le PFD sur des <strong>axes bien choisis</strong> — le plus souvent un axe parallèle au mouvement et un axe perpendiculaire.',
      definitions: [
        { term: 'Référentiel galiléen', def: 'Référentiel dans lequel le principe d\'inertie est vérifié : un système isolé y est immobile ou en mouvement rectiligne uniforme. Le référentiel terrestre est galiléen en première approximation pour la plupart des mouvements étudiés en Terminale.' },
        { term: '1ère loi de Newton (principe d\'inertie)', def: 'Dans un référentiel galiléen, si la résultante des forces sur un système est nulle ($\\sum\\vec{F}=\\vec{0}$), alors son vecteur vitesse $\\vec{v}$ est constant (système au repos ou en mouvement rectiligne uniforme).' },
        { term: '2ème loi de Newton (PFD)', def: 'Dans un référentiel galiléen, $\\sum \\vec{F} = m\\vec{a}$ : la résultante des forces appliquées à un système est égale au produit de sa masse par son accélération.' },
        { term: '3ème loi de Newton (actions réciproques)', def: 'Si un système A exerce une force $\\vec{F}_{A\\rightarrow B}$ sur un système B, alors B exerce simultanément sur A une force $\\vec{F}_{B\\rightarrow A} = -\\vec{F}_{A\\rightarrow B}$ : même droite d\'action, même norme, sens opposé.' },
        { term: 'Réaction normale et frottement', def: 'Le contact entre un système et un support se décompose en une composante <strong>normale</strong> $\\vec{N}$ (perpendiculaire au support, qui empêche l\'enfoncement) et une composante <strong>tangentielle</strong> $\\vec{f}$ (le frottement, qui s\'oppose au glissement relatif).' }
      ],
      method: {
        title: 'Résoudre un problème de dynamique newtonienne en 3 étapes',
        steps: [
          '<strong>Définir le système</strong>, le référentiel (galiléen) et faire l\'<strong>inventaire complet des forces</strong> extérieures qui s\'exercent sur lui (poids, réaction normale, frottements, tension d\'un fil, force de traction…), en représentant chacune par un vecteur à son point d\'application.',
          '<strong>Choisir des axes adaptés</strong> à la situation — le plus souvent un axe parallèle au mouvement (ou au support) et un axe perpendiculaire — puis <strong>projeter le PFD</strong> sur chacun de ces axes pour obtenir un système d\'équations scalaires.<br/>Sur un plan incliné d\'angle $\\alpha$, le poids $\\vec{P}$ se décompose en une composante $P\\sin\\alpha$ le long du plan et $P\\cos\\alpha$ perpendiculaire au plan.',
          '<strong>Résoudre le système d\'équations</strong> pour obtenir l\'accélération, puis les grandeurs cinématiques recherchées (vitesse, distance parcourue…) par intégration si besoin. Si le système est à l\'équilibre ou en mouvement rectiligne uniforme, utiliser directement le principe d\'inertie ($\\sum\\vec{F}=\\vec{0}$) plutôt que le PFD complet.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Bilan des forces sur un plan incliné',
        title: 'Décomposition du poids sur un plan incliné (PFD projeté sur deux axes)',
        description: 'Un solide posé sur un plan incliné d\'angle $\\alpha = 30°$ est soumis à trois forces : le poids $\\vec{P}$, la réaction normale $\\vec{N}$ et le frottement $\\vec{f}$. Le poids se décompose selon les axes du plan incliné en une composante $P\\sin\\alpha$ (le long du plan) et $P\\cos\\alpha$ (perpendiculaire au plan).',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="dyn-title dyn-desc">
            <title id="dyn-title">Bilan des forces sur un solide pose sur un plan incline</title>
            <desc id="dyn-desc">Un plan incline forme un angle de 30 degres avec l'horizontale. Un solide represente par un petit carre est pose sur ce plan. Trois vecteurs partent du solide : le poids P vertical vers le bas, la reaction normale N perpendiculaire au plan vers l'exterieur, et le frottement f le long du plan vers le haut, s'opposant a la tendance de glissement. Des lignes pointillees decomposent le vecteur poids en deux composantes : une le long du plan incline de norme P fois sinus alpha, et une perpendiculaire au plan de norme P fois cosinus alpha, formant un petit parallelogramme avec la pointe du vecteur poids.</desc>

            <defs>
              <marker id="arrow-phystle-dyn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol horizontal de reference -->
            <line class="guide-line" x1="30" y1="270" x2="220" y2="270"></line>
            <!-- plan incline -->
            <line class="frame-line" x1="80" y1="270" x2="443.7" y2="60"></line>
            <!-- angle alpha -->
            <path class="guide-line" d="M140,270 A60,60 0 0,0 132,213" fill="none"></path>
            <text class="tick-label" x="150" y="248" text-anchor="start">α</text>

            <!-- solide -->
            <rect class="frame-line" x="266" y="140.5" width="28" height="28" transform="rotate(-30 280 154.5)" fill="var(--diagram-soft)"></rect>

            <!-- poids P -->
            <line class="curve-main" x1="280" y1="154.5" x2="280" y2="264.5" marker-end="url(#arrow-phystle-dyn)"></line>
            <text class="annotation-label" x="292" y="235">P</text>

            <!-- reaction normale N -->
            <line class="curve-main" x1="280" y1="154.5" x2="235" y2="76.6" marker-end="url(#arrow-phystle-dyn)"></line>
            <text class="annotation-label" x="212" y="70">N</text>

            <!-- frottement f -->
            <line class="curve-main" x1="280" y1="154.5" x2="340.6" y2="119.5" marker-end="url(#arrow-phystle-dyn)"></line>
            <text class="annotation-label" x="352" y="112">f</text>

            <!-- decomposition du poids (pointilles) -->
            <line class="guide-line" x1="280" y1="264.5" x2="232.4" y2="182.0"></line>
            <line class="guide-line" x1="280" y1="264.5" x2="327.7" y2="237.0"></line>
            <line class="curve-main" x1="280" y1="154.5" x2="232.4" y2="182.0" marker-end="url(#arrow-phystle-dyn)" style="stroke: var(--secondary);"></line>
            <text class="label-soft" x="205" y="185" text-anchor="end">P sin α</text>
            <line class="curve-main" x1="280" y1="154.5" x2="327.7" y2="237.0" marker-end="url(#arrow-phystle-dyn)" style="stroke: var(--secondary);"></line>
            <text class="label-soft" x="337" y="255" text-anchor="start">P cos α</text>

            <text class="label-soft" x="450" y="45" text-anchor="middle">Sens du glissement tendanciel</text>
            <line class="guide-line" x1="380" y1="55" x2="440" y2="20" marker-end="url(#arrow-phystle-dyn)"></line>
          </svg>
        `,
        notes: [
          'Trois forces s\'exercent sur le solide : le poids $\\vec{P}$ (vertical, vers le bas), la réaction normale $\\vec{N}$ (perpendiculaire au plan) et le frottement $\\vec{f}$ (le long du plan, opposé à la tendance de glissement).',
          'Le poids se décompose selon les <strong>deux axes du plan incliné</strong> : une composante $P\\sin\\alpha$ le long du plan (qui tend à faire glisser le solide) et une composante $P\\cos\\alpha$ perpendiculaire au plan (qui « enfonce » le solide dans le support, compensée par $N$).',
          'Cette décomposition permet de projeter le PFD sur deux axes indépendants : selon le plan ($P\\sin\\alpha - f = ma$) et perpendiculairement au plan ($N - P\\cos\\alpha = 0$ si le solide ne décolle pas du plan).'
        ],
        reading: 'Repère d\'abord les trois forces qui partent du solide (poids vertical, normale perpendiculaire au plan, frottement le long du plan), puis suis les pointillés qui décomposent le poids en ses deux composantes $P\\sin\\alpha$ et $P\\cos\\alpha$.',
        caption: 'Bilan des forces et décomposition du poids sur un plan incliné : projeter le PFD sur les axes du plan (parallèle et perpendiculaire) simplifie la résolution.'
      },
      example: {
        statement: 'Une caisse de masse $m = 25$ kg est posée sur un plan incliné d\'angle $\\alpha = 20°$ par rapport à l\'horizontale. Le coefficient de frottement conduit à une force de frottement de norme $f = 60$ N, opposée au glissement. On prend $g = 9{,}81$ m/s². La caisse glisse vers le bas du plan.<br/><br/>Calculer l\'accélération de la caisse le long du plan.',
        steps: [
          'Bilan des forces : le poids $\\vec{P}$ (norme $P=mg$), la réaction normale $\\vec{N}$ et le frottement $\\vec{f}$ (dirigé vers le haut du plan, car la caisse glisse vers le bas).',
          'Axe choisi : le long du plan, orienté <strong>vers le bas</strong> (sens du mouvement). Projection du PFD sur cet axe : $P\\sin\\alpha - f = ma$.',
          'Calcul du poids : $P = mg = 25 \\times 9{,}81 = 245{,}25$ N. Composante utile : $P\\sin\\alpha = 245{,}25 \\times \\sin(20°) = 245{,}25 \\times 0{,}342 \\approx 83{,}9$ N.',
          'On isole $a$ : $a = \\dfrac{P\\sin\\alpha - f}{m} = \\dfrac{83{,}9 - 60}{25} = \\dfrac{23{,}9}{25} \\approx 0{,}96$ m/s².'
        ],
        answer: '$a \\approx 0{,}96$ m/s², dirigée vers le bas du plan : la caisse accélère en glissant, car la composante motrice du poids ($P\\sin\\alpha$) l\'emporte sur le frottement qui s\'y oppose.'
      },
      formulas: [
        'Principe d\'inertie (1ère loi) : $\\sum\\vec{F}=\\vec{0} \\Leftrightarrow \\vec{v}$ constant',
        'Principe fondamental de la dynamique (2ème loi, PFD) : $\\sum\\vec{F} = m\\vec{a}$',
        'Principe des actions réciproques (3ème loi) : $\\vec{F}_{B\\rightarrow A} = -\\vec{F}_{A\\rightarrow B}$',
        'Sur un plan incliné d\'angle $\\alpha$ : composante motrice du poids $P\\sin\\alpha$, composante perpendiculaire $P\\cos\\alpha$',
        'PFD projeté le long du plan (avec frottement $f$ opposé au mouvement) : $ma = P\\sin\\alpha - f$'
      ],
      recap: [
        'Les trois lois de Newton ne s\'appliquent que dans un référentiel <strong>galiléen</strong> : c\'est une hypothèse à vérifier avant tout calcul, même si elle est souvent implicite au lycée (référentiel terrestre).',
        'Le principe d\'inertie n\'est pas un cas particulier du PFD à traiter à part : c\'est le cas $\\sum\\vec{F}=\\vec{0}$, qui donne directement $\\vec{a}=\\vec{0}$ donc $\\vec{v}$ constant.',
        'La troisième loi relie <strong>deux forces qui s\'exercent sur deux systèmes différents</strong> (jamais sur le même système) : $\\vec{F}_{A\\rightarrow B}$ agit sur B, $\\vec{F}_{B\\rightarrow A}$ agit sur A, elles ne se compensent donc jamais dans un bilan de forces sur un seul système.',
        'Sur un plan incliné, bien choisir les axes (parallèle et perpendiculaire au plan, plutôt qu\'horizontal-vertical) simplifie considérablement la projection du PFD.'
      ],
      piege: 'Une confusion très fréquente consiste à additionner les deux forces d\'un couple action-réaction $\\vec{F}_{A\\rightarrow B}$ et $\\vec{F}_{B\\rightarrow A}$ dans le bilan des forces d\'un même système, en croyant qu\'elles se compensent : c\'est faux, car elles s\'appliquent sur <strong>deux systèmes différents</strong> et n\'apparaissent jamais toutes les deux dans le même bilan. Attention aussi à toujours vérifier le sens du frottement $\\vec{f}$, qui s\'oppose au <strong>mouvement relatif réel (ou tendanciel)</strong> et non à une direction supposée a priori.'
    },

    quiz: [
      {
        q: 'D\'après le principe d\'inertie, un système soumis à des forces dont la résultante est nulle est, dans un référentiel galiléen :',
        options: [
          'Nécessairement immobile',
          'Nécessairement en accélération constante',
          'Soit immobile, soit en mouvement rectiligne uniforme',
          'Toujours en mouvement circulaire'
        ],
        answer: 2,
        correction: 'Le principe d\'inertie énonce que si $\\sum\\vec{F}=\\vec{0}$, alors le vecteur vitesse $\\vec{v}$ est constant : le système est soit immobile ($v=0$), soit en mouvement rectiligne uniforme ($v$ constante non nulle).'
      },
      {
        q: 'Une personne pousse un mur avec une force $\\vec{F}_{personne \\rightarrow mur}$. D\'après la troisième loi de Newton, le mur exerce sur la personne une force :',
        options: [
          'Nulle, car le mur ne bouge pas',
          'De même sens et même norme que $\\vec{F}_{personne \\rightarrow mur}$',
          'De norme opposée mais de sens identique',
          'De même norme, même droite d\'action, mais de sens opposé'
        ],
        answer: 3,
        correction: 'D\'après le principe des actions réciproques, $\\vec{F}_{mur\\rightarrow personne} = -\\vec{F}_{personne\\rightarrow mur}$ : même droite d\'action, même norme, mais un <strong>sens opposé</strong>. C\'est cette force qui repousse effectivement la personne.'
      },
      {
        q: 'Un solide de masse $m=10$ kg est posé sur un plan incliné d\'angle $\\alpha=30°$, sans frottement. Quelle est la composante du poids le long du plan (avec $g=9{,}81$ m/s²) ?',
        options: [
          '$98{,}1$ N',
          '$84{,}9$ N',
          '$49{,}05$ N',
          '$56{,}7$ N'
        ],
        answer: 2,
        correction: 'La composante du poids le long du plan est $P\\sin\\alpha = mg\\sin\\alpha = 10 \\times 9{,}81 \\times \\sin(30°) = 98{,}1 \\times 0{,}5 = 49{,}05$ N.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['plan-incline', 'reciproques']);
        var g = 9.81;

        if (typeExo === 'plan-incline') {
          var m = rand(5, 60);
          var alphaDeg = pick([15, 20, 25, 30, 35]);
          var alphaRad = alphaDeg * Math.PI / 180;
          var fFrott = randFloat(5, 40, 1);
          var P = m * g;
          var compo = P * Math.sin(alphaRad);
          var a = parseFloat(((compo - fFrott) / m).toFixed(2));
          var contexte = pick([
            'une caisse tirée sur un plan incliné d\'entrepôt',
            'un chariot de manutention sur une rampe',
            'une luge sur une pente instrumentée',
            'un colis sur un tapis incliné de tri postal',
            'un traîneau sur une piste enneigée en pente'
          ]);
          return {
            statement: 'Dans une modélisation de ' + contexte + ', un solide de masse $m = ' + m + '$ kg glisse vers le bas d\'un plan incliné d\'angle $\\alpha = ' + alphaDeg + '°$. La force de frottement, opposée au glissement, a pour norme $f = ' + fr(fFrott, 1) + '$ N. On prend $g = 9{,}81$ m/s².<br/><br/>Calcule l\'accélération $a$ du solide le long du plan (en m/s², arrondie au centième). Une valeur négative signifierait que le solide décélère.',
            answer: a,
            tolerance: Math.max(0.05, parseFloat((Math.abs(a) * 0.05).toFixed(2))),
            unit: 'm/s²',
            hint: 'Projette le PFD le long du plan, orienté vers le bas : $ma = P\\sin\\alpha - f$, avec $P = mg$.',
            solution: [
              'Poids : $P = mg = ' + m + ' \\times 9{,}81 = ' + fr(parseFloat(P.toFixed(2)), 2) + '$ N.',
              'Composante motrice le long du plan : $P\\sin\\alpha = ' + fr(parseFloat(P.toFixed(2)), 2) + ' \\times \\sin(' + alphaDeg + '°) \\approx ' + fr(parseFloat(compo.toFixed(2)), 2) + '$ N.',
              'PFD le long du plan : $ma = P\\sin\\alpha - f = ' + fr(parseFloat(compo.toFixed(2)), 2) + ' - ' + fr(fFrott, 1) + '$.',
              'Résultat : $a \\approx ' + fr(a, 2) + '$ m/s².'
            ]
          };
        } else {
          var Fval = rand(50, 500);
          var syst = pick([
            { a: 'un remorqueur', b: 'une péniche' },
            { a: 'une locomotive', b: 'un wagon' },
            { a: 'un grutier', b: 'une charge suspendue' },
            { a: 'un nageur', b: 'l\'eau du bassin' },
            { a: 'une fusée', b: 'les gaz éjectés' }
          ]);
          return {
            statement: syst.a.charAt(0).toUpperCase() + syst.a.slice(1) + ' exerce sur ' + syst.b + ' une force de norme $F_{' + '1\\rightarrow2}' + ' = ' + Fval + '$ N.<br/><br/>D\'après le principe des actions réciproques, quelle est la norme de la force exercée par ' + syst.b + ' sur ' + syst.a + ' (en N) ?',
            answer: Fval,
            tolerance: 0.5,
            unit: 'N',
            hint: 'Le principe des actions réciproques impose $\\vec{F}_{2\\rightarrow1} = -\\vec{F}_{1\\rightarrow2}$ : même norme, sens opposé.',
            solution: [
              'D\'après la troisième loi de Newton, $\\vec{F}_{2\\rightarrow1} = -\\vec{F}_{1\\rightarrow2}$.',
              'Les deux forces ont donc la <strong>même norme</strong>, quelle que soit la différence de masse entre les deux systèmes.',
              'Résultat : $F_{2\\rightarrow1} = ' + Fval + '$ N (sens opposé à $F_{1\\rightarrow2}$).'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 70$ kg (équipement compris) descend une piste rectiligne inclinée d\'un angle $\\alpha = 15°$ par rapport à l\'horizontale, en partant sans vitesse initiale. La force de frottement exercée par la neige sur les skis a pour norme $f = 90$ N, opposée au mouvement. On prend $g = 9{,}81$ m/s² et on néglige les frottements de l\'air.',
      tasks: [
        'Faire le bilan des forces exercées sur le skieur et les représenter qualitativement.',
        'Projeter le PFD le long de la piste (axe orienté dans le sens de la descente) et calculer l\'accélération $a$ du skieur.',
        'En déduire la vitesse du skieur après avoir parcouru une distance $d = 150$ m sur la piste (on utilisera $v^2 = v_0^2 + 2ad$).'
      ],
      solutions: [
        'Trois forces s\'exercent sur le skieur : le poids $\\vec{P}$ (vertical, vers le bas), la réaction normale de la piste $\\vec{N}$ (perpendiculaire à la piste) et le frottement $\\vec{f}$ (le long de la piste, opposé au mouvement, donc dirigé vers le haut de la pente).',
        'PFD projeté le long de la piste (axe orienté vers le bas de la pente) : $ma = P\\sin\\alpha - f$. Poids : $P = mg = 70 \\times 9{,}81 = 686{,}7$ N. Composante motrice : $P\\sin\\alpha = 686{,}7 \\times \\sin(15°) \\approx 686{,}7 \\times 0{,}259 \\approx 177{,}8$ N. Accélération : $a = \\dfrac{177{,}8 - 90}{70} = \\dfrac{87{,}8}{70} \\approx 1{,}25$ m/s².',
        'Avec $v_0=0$ : $v^2 = 2ad = 2 \\times 1{,}25 \\times 150 = 375$, donc $v = \\sqrt{375} \\approx 19{,}4$ m/s.'
      ],
      finalAnswer: 'L\'accélération du skieur vaut $a \\approx 1{,}25$ m/s² et sa vitesse après $150$ m vaut $v \\approx 19{,}4$ m/s, soit environ $70$ km/h. Ce résultat illustre pourquoi les pistes de ski les plus raides permettent d\'atteindre des vitesses élevées sur une distance de descente relativement courte : la composante motrice du poids augmente avec l\'angle $\\alpha$.'
    },

    evaluation: {
      title: 'Évaluation — Dynamique newtonienne',
      duration: '30 min',
      questions: [
        {
          statement: 'Le principe fondamental de la dynamique s\'écrit, dans un référentiel galiléen :',
          type: 'multiple-choice',
          options: [
            '$\\sum\\vec{F} = m\\vec{v}$',
            '$\\sum\\vec{F} = m\\vec{a}$',
            '$\\vec{F}_{A\\rightarrow B} = -\\vec{F}_{B\\rightarrow A}$',
            '$\\sum\\vec{F} = \\vec{0}$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PFD (deuxième loi de Newton) relie la résultante des forces à l\'accélération : $\\sum\\vec{F} = m\\vec{a}$.'
        },
        {
          statement: 'Un solide de masse $m=15$ kg est sur un plan incliné à $\\alpha=25°$, sans frottement. Calculer la composante du poids le long du plan (en N, arrondie à l\'unité, $g=9{,}81$ m/s²).',
          type: 'numeric',
          answer: 62,
          tolerance: 2,
          unit: 'N',
          points: 3,
          correction: '$P\\sin\\alpha = mg\\sin\\alpha = 15 \\times 9{,}81 \\times \\sin(25°) \\approx 147{,}15 \\times 0{,}423 \\approx 62$ N.'
        },
        {
          statement: 'Le principe des actions réciproques relie deux forces qui s\'exercent :',
          type: 'multiple-choice',
          options: [
            'Sur le même système, et qui se compensent toujours',
            'Sur deux systèmes différents, chacune agissant sur l\'autre système',
            'Uniquement entre un système et son support',
            'Uniquement dans le cas d\'un système à l\'équilibre'
          ],
          answer: 1,
          points: 2,
          correction: '$\\vec{F}_{A\\rightarrow B}$ s\'exerce sur B et $\\vec{F}_{B\\rightarrow A}$ s\'exerce sur A : ce sont deux forces sur deux systèmes différents, qui n\'apparaissent donc jamais ensemble dans le bilan des forces d\'un seul système.'
        },
        {
          statement: 'Un système soumis à des forces qui se compensent exactement ($\\sum\\vec{F}=\\vec{0}$) est nécessairement :',
          type: 'multiple-choice',
          options: [
            'Immobile',
            'En mouvement accéléré',
            'Immobile ou en mouvement rectiligne uniforme',
            'En mouvement circulaire uniforme'
          ],
          answer: 2,
          points: 2,
          correction: 'D\'après le principe d\'inertie, $\\sum\\vec{F}=\\vec{0}$ implique $\\vec{v}$ constant : le système peut être immobile ($v=0$) ou en mouvement rectiligne uniforme ($v$ constante non nulle), pas nécessairement immobile.'
        },
        {
          statement: 'Une caisse de masse $m=40$ kg glisse sur un plan incliné à $\\alpha=20°$, avec un frottement $f=50$ N opposé au mouvement. Calculer son accélération le long du plan (en m/s², arrondie au centième, $g=9{,}81$ m/s²).',
          type: 'numeric',
          answer: 2.11,
          tolerance: 0.15,
          unit: 'm/s²',
          points: 3,
          correction: '$P=mg=40\\times9{,}81=392{,}4$ N. $P\\sin\\alpha=392{,}4\\times\\sin(20°)\\approx134{,}2$ N. $a=\\dfrac{134{,}2-50}{40}=\\dfrac{84{,}2}{40}\\approx2{,}11$ m/s².'
        }
      ]
    }
  });
