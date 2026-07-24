/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-optique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-optique',
    level: 3, subject: 'physique',
    icon: '🔦',
    title: 'Optique géométrique',
    subtitle: 'Lois de Snell-Descartes, réflexion totale (fibre optique), lentilles minces convergentes, relation de conjugaison',
    keywords: ['Descartes', 'Réfraction', 'Réflexion totale', 'Lentille', 'Grandissement'],
    physics: 'L\'optique géométrique explique le guidage de la lumière dans les fibres optiques utilisées par les capteurs domotiques, le fonctionnement des lentilles des appareils de mesure optique, et permet de dimensionner les systèmes de vision industrielle et les dispositifs de détection à infrarouge.',

    cours: {
      intro: 'L\'optique géométrique modélise la lumière par des <strong>rayons lumineux</strong>, qui se propagent en ligne droite dans un milieu homogène et transparent.<br/><br/>À la traversée d\'un dioptre (interface entre deux milieux d\'indices de réfraction $n_1$ et $n_2$), le rayon lumineux obéit aux <strong>lois de Snell-Descartes</strong> : une partie de la lumière est réfléchie (angle de réflexion égal à l\'angle d\'incidence), une autre est réfractée selon $n_1 \\sin i_1 = n_2 \\sin i_2$. Lorsque la lumière passe d\'un milieu plus réfringent vers un milieu moins réfringent ($n_1 > n_2$), il existe un <strong>angle limite</strong> au-delà duquel la réfraction devient impossible : c\'est la <strong>réflexion totale</strong>, exploitée notamment dans les fibres optiques.<br/><br/>Une <strong>lentille mince convergente</strong> permet de former l\'image d\'un objet grâce à la <strong>relation de conjugaison</strong> $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'} = C$, où $C$ est la <strong>vergence</strong> de la lentille (en dioptries, δ). Le <strong>grandissement</strong> $\\gamma = \\dfrac{\\overline{A\'B\'}}{\\overline{AB}} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$ indique si l\'image est droite ou renversée, agrandie ou réduite.',
      definitions: [
        { term: 'Lois de Snell-Descartes', def: 'À la traversée d\'un dioptre séparant deux milieux d\'indices $n_1$ et $n_2$ : réflexion (angle réfléchi = angle incident) et réfraction ($n_1 \\sin i_1 = n_2 \\sin i_2$), les angles étant mesurés par rapport à la normale au dioptre.' },
        { term: 'Réflexion totale', def: 'Lorsque $n_1 > n_2$ et que l\'angle d\'incidence dépasse l\'<strong>angle limite</strong> $i_{lim}$ (tel que $\\sin i_{lim} = \\dfrac{n_2}{n_1}$), toute la lumière est réfléchie : aucun rayon n\'est transmis. Principe exploité dans les fibres optiques.' },
        { term: 'Relation de conjugaison (lentille mince)', def: 'Pour une lentille mince convergente de centre optique $O$ et de foyers $F$, $F\'$ : $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'} = C$, avec $f\' = \\overline{OF\'}$ la distance focale et $C$ la vergence (en dioptries δ, si les distances sont en mètres).' },
        { term: 'Grandissement ($\\gamma$)', def: 'Rapport algébrique $\\gamma = \\dfrac{\\overline{A\'B\'}}{\\overline{AB}} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$. Si $\\gamma < 0$, l\'image est renversée ; si $|\\gamma| > 1$, l\'image est agrandie.' }
      ],
      method: {
        title: 'Construire ou calculer l\'image formée par une lentille convergente en 3 étapes',
        steps: [
          '<strong>Identifier les données</strong> : position algébrique de l\'objet $\\overline{OA}$ (négative si l\'objet est avant la lentille, convention usuelle), distance focale $f\'$ ou vergence $C = \\dfrac{1}{f\'}$.',
          '<strong>Appliquer la relation de conjugaison</strong> $\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}}$ pour calculer la position de l\'image $\\overline{OA\'}$.',
          '<strong>Calculer le grandissement</strong> $\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$ pour connaître le sens (droite/renversée) et la taille relative de l\'image par rapport à l\'objet.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Lentille mince convergente',
        title: 'Construction géométrique de l\'image à travers une lentille convergente',
        description: 'Un objet $AB$ situé au-delà du foyer objet $F$ forme, à travers une lentille mince convergente, une image réelle et renversée $A\'B\'$. Deux rayons particuliers suffisent à construire cette image : le rayon parallèle à l\'axe (dévié vers $F\'$) et le rayon passant par le centre optique $O$ (non dévié).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="lentille-title lentille-desc">
            <title id="lentille-title">Construction de l'image d'un objet par une lentille mince convergente</title>
            <desc id="lentille-desc">Un objet vertical AB est place a gauche d'une lentille mince convergente symbolisee par une ligne verticale terminee par des pointes en forme de fleches vers l'exterieur. Deux rayons partent du sommet B de l'objet : l'un, parallele a l'axe optique, est devie apres la lentille pour passer par le foyer image F prime ; l'autre passe sans deviation par le centre optique O de la lentille. Ces deux rayons se croisent a droite de la lentille au point B prime, sous l'axe optique, formant une image A prime B prime reelle et renversee.</desc>

            <defs>
              <marker id="arrow-physbts-lentille" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe optique -->
            <line class="frame-line" x1="40" y1="170" x2="520" y2="170" marker-end="url(#arrow-physbts-lentille)"></line>

            <!-- lentille (symbole biconvexe) -->
            <line class="frame-line" x1="280" y1="70" x2="280" y2="270"></line>
            <path class="frame-line" d="M270,80 L280,70 L290,80" fill="none"></path>
            <path class="frame-line" d="M270,260 L280,270 L290,260" fill="none"></path>

            <!-- objet AB -->
            <circle class="plot-point-alt" cx="140" cy="170" r="3"></circle>
            <line class="curve-main" x1="140" y1="170" x2="140" y2="110" marker-end="url(#arrow-physbts-lentille)"></line>
            <text class="annotation-label" x="140" y="98" text-anchor="middle">B</text>
            <text class="tick-label" x="140" y="188" text-anchor="middle">A</text>

            <!-- foyers F et F' -->
            <circle class="plot-point-alt" cx="200" cy="170" r="3"></circle>
            <text class="tick-label" x="200" y="188" text-anchor="middle">F</text>
            <circle class="plot-point-alt" cx="360" cy="170" r="3"></circle>
            <text class="tick-label" x="360" y="188" text-anchor="middle">F'</text>

            <!-- image A'B' (reelle, renversee) -->
            <circle class="plot-point-alt" cx="465" cy="170" r="3"></circle>
            <text class="tick-label" x="480" y="174">A'</text>
            <line class="curve-main" x1="465" y1="170" x2="465" y2="250" marker-end="url(#arrow-physbts-lentille)"></line>
            <text class="annotation-label" x="465" y="264" text-anchor="middle">B'</text>

            <!-- rayon 1 : parallele a l'axe puis devie vers F' -->
            <line class="curve-main" x1="140" y1="110" x2="280" y2="110"></line>
            <line class="curve-main" x1="280" y1="110" x2="465" y2="250" marker-end="url(#arrow-physbts-lentille)"></line>

            <!-- rayon 2 : passe par le centre optique O, non devie -->
            <line class="curve-main" x1="140" y1="110" x2="465" y2="250" marker-end="url(#arrow-physbts-lentille)"></line>
          </svg>
        `,
        notes: [
          'Le rayon issu de $B$, parallèle à l\'axe optique, est dévié par la lentille pour passer par le <strong>foyer image</strong> $F\'$.',
          'Le rayon issu de $B$ passant par le <strong>centre optique</strong> $O$ n\'est pas dévié : il traverse la lentille en ligne droite.',
          'L\'intersection de ces deux rayons donne la position de $B\'$, donc de l\'image $A\'B\'$ : ici <strong>réelle</strong> (formée après la lentille) et <strong>renversée</strong> (inversée par rapport à l\'objet).'
        ],
        reading: 'Repère l\'objet $AB$ à gauche, suis les deux rayons caractéristiques à travers la lentille en $O$, et retrouve leur point de rencontre $B\'$ qui donne l\'image $A\'B\'$ à droite.',
        caption: 'Construction de l\'image d\'un objet à travers une lentille mince convergente, à l\'aide de deux rayons caractéristiques (parallèle à l\'axe puis passant par le foyer image $F\'$, et rayon non dévié passant par le centre optique $O$).'
      },
      example: {
        statement: 'Une lentille mince convergente de vergence $C = 5$ δ (dioptries) donne d\'un objet $AB$ une image. L\'objet est placé à une distance $\\overline{OA} = -40$ cm de la lentille (objet réel, avant la lentille).<br/><br/>Calculer la distance focale $f\'$, la position de l\'image $\\overline{OA\'}$, puis le grandissement $\\gamma$.',
        steps: [
          'Distance focale : $f\' = \\dfrac{1}{C} = \\dfrac{1}{5} = 0{,}2$ m $= 20$ cm.',
          'Relation de conjugaison : $\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{20} + \\dfrac{1}{-40} = 0{,}05 - 0{,}025 = 0{,}025$ cm$^{-1}$.',
          'On en déduit $\\overline{OA\'} = \\dfrac{1}{0{,}025} = 40$ cm : l\'image se forme à $40$ cm après la lentille (image réelle).',
          'Grandissement : $\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}} = \\dfrac{40}{-40} = -1$ : l\'image est <strong>renversée</strong> et de même taille que l\'objet.'
        ],
        answer: '$f\' = 20$ cm, $\\overline{OA\'} = 40$ cm (image réelle) et $\\gamma = -1$ (image renversée, même taille). Ce cas particulier ($\\overline{OA} = -2f\'$) donne toujours un grandissement de $-1$.'
      },
      formulas: [
        'Lois de Descartes : réflexion (angle réfléchi = angle incident) ; réfraction $n_1 \\sin i_1 = n_2 \\sin i_2$',
        'Angle limite (réflexion totale, $n_1 > n_2$) : $\\sin i_{lim} = \\dfrac{n_2}{n_1}$',
        'Vergence : $C = \\dfrac{1}{f\'}$ (en dioptries δ, $f\'$ en mètres)',
        'Relation de conjugaison : $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'}$',
        'Grandissement : $\\gamma = \\dfrac{\\overline{A\'B\'}}{\\overline{AB}} = \\dfrac{\\overline{OA\'}}{\\overline{OA}}$'
      ],
      recap: [
        'Les lois de Snell-Descartes régissent la réflexion et la réfraction à chaque interface entre deux milieux transparents.',
        'La <strong>réflexion totale</strong> (au-delà de l\'angle limite) permet de guider la lumière sans perte dans une fibre optique.',
        'La relation de conjugaison $\\dfrac{1}{\\overline{OA\'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f\'}$ permet de localiser l\'image formée par une lentille convergente.',
        'Le signe du grandissement $\\gamma$ indique si l\'image est droite ($\\gamma>0$) ou renversée ($\\gamma<0$) ; sa valeur absolue indique si elle est agrandie ($|\\gamma|>1$) ou réduite ($|\\gamma|<1$).'
      ],
      piege: 'Une erreur fréquente est d\'oublier les signes algébriques dans la relation de conjugaison, en particulier de considérer $\\overline{OA}$ comme positif alors que l\'objet est presque toujours placé avant la lentille (donc $\\overline{OA} < 0$ dans la convention usuelle). Attention à toujours respecter le sens de propagation de la lumière (de gauche à droite) pour affecter le bon signe à chaque distance algébrique, sous peine d\'obtenir une position d\'image incohérente.'
    },

    quiz: [
      {
        q: 'Un rayon lumineux passe de l\'air ($n_1=1$) vers l\'eau ($n_2=1{,}33$) avec un angle d\'incidence $i_1=40°$. Quel est approximativement l\'angle de réfraction $i_2$ ?',
        options: [
          '$i_2 \\approx 29°$',
          '$i_2 \\approx 40°$',
          '$i_2 \\approx 53°$',
          '$i_2 \\approx 90°$'
        ],
        answer: 0,
        correction: 'Loi de Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$, donc $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{1{,}33}\\times\\sin 40° \\approx 0{,}483$, soit $i_2 \\approx 29°$. Le rayon se rapproche de la normale en entrant dans le milieu plus réfringent (l\'eau).'
      },
      {
        q: 'La réflexion totale d\'un rayon lumineux à un dioptre ne peut se produire que si :',
        options: [
          'Le rayon passe d\'un milieu plus réfringent ($n_1$) vers un milieu moins réfringent ($n_2 < n_1$), avec un angle d\'incidence suffisamment grand',
          'Le rayon passe d\'un milieu moins réfringent vers un milieu plus réfringent',
          'L\'angle d\'incidence est nul',
          'Les deux milieux ont le même indice de réfraction'
        ],
        answer: 0,
        correction: 'La réflexion totale n\'existe que lorsque $n_1 > n_2$ (passage vers un milieu moins réfringent) et que l\'angle d\'incidence dépasse l\'angle limite $i_{lim}$ tel que $\\sin i_{lim} = \\dfrac{n_2}{n_1}$.'
      },
      {
        q: 'Une lentille convergente donne d\'un objet une image avec un grandissement $\\gamma = -2$. Que peut-on en dire ?',
        options: [
          'L\'image est renversée et deux fois plus grande que l\'objet',
          'L\'image est droite et deux fois plus petite que l\'objet',
          'L\'image est renversée et deux fois plus petite que l\'objet',
          'L\'image est droite et deux fois plus grande que l\'objet'
        ],
        answer: 0,
        correction: 'Le signe négatif de $\\gamma$ indique une image <strong>renversée</strong>, et $|\\gamma|=2>1$ indique une image <strong>agrandie</strong> (deux fois plus grande que l\'objet).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['conjugaison', 'refraction']);

        if (typeExo === 'conjugaison') {
          var C = pick([2, 2.5, 4, 5, 6.25, 8, 10]);
          var fprime = parseFloat((100 / C).toFixed(2));
          var OA = -pick([20, 25, 30, 35, 40, 50, 60, 80]);
          var invOAprime = 1 / fprime + 1 / OA;
          var OAprime = parseFloat((1 / invOAprime).toFixed(1));
          var contexte = pick([
            'un appareil de mesure optique de laboratoire',
            'un capteur de vision industrielle',
            'un système de projection domotique',
            'un dispositif de contrôle qualité par caméra',
            'une loupe de contrôle en atelier'
          ]);
          return {
            statement: 'Dans ' + contexte + ', une lentille mince convergente de vergence $C = ' + fr(C) + '$ δ reçoit un objet $AB$ placé à une distance algébrique $\\overline{OA} = ' + OA + '$ cm de la lentille.<br/><br/>Calcule la position algébrique de l\'image $\\overline{OA\'}$ (en cm, arrondie au dixième).',
            answer: OAprime,
            tolerance: Math.max(1, parseFloat((Math.abs(OAprime) * 0.05).toFixed(2))),
            unit: 'cm',
            hint: 'Calcule d\'abord $f\' = \\dfrac{100}{C}$ (en cm), puis utilise la relation de conjugaison $\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}}$.',
            solution: [
              'Distance focale : $f\' = \\dfrac{100}{C} = \\dfrac{100}{' + fr(C) + '} \\approx ' + fr(fprime, 2) + '$ cm.',
              'Relation de conjugaison : $\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{f\'} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{' + fr(fprime, 2) + '} + \\dfrac{1}{' + OA + '}$.',
              'Résultat : $\\overline{OA\'} \\approx ' + fr(OAprime, 1) + '$ cm.'
            ]
          };
        } else {
          var milieux = [
            { nom: 'eau', n: 1.33 },
            { nom: 'verre', n: 1.5 },
            { nom: 'plexiglas', n: 1.49 },
            { nom: 'diamant', n: 2.42 },
            { nom: 'quartz', n: 1.46 }
          ];
          var milieu = pick(milieux);
          var i1 = pick([20, 25, 30, 35, 40, 45, 50, 55]);
          var i1rad = i1 * Math.PI / 180;
          var sinI2 = Math.sin(i1rad) / milieu.n;
          var i2 = parseFloat((Math.asin(sinI2) * 180 / Math.PI).toFixed(1));
          var contexte2 = pick([
            'un capteur optique de niveau',
            'une fibre optique de transmission de données',
            'un dispositif de mesure par réfractométrie',
            'une vitre de protection d\'un capteur extérieur'
          ]);
          return {
            statement: 'Un rayon lumineux se propageant dans l\'air ($n_1=1$) atteint la surface d\'un bloc de ' + milieu.nom + ' ($n_2=' + fr(milieu.n, 2) + '$) avec un angle d\'incidence $i_1=' + i1 + '°$ (' + contexte2 + ').<br/><br/>D\'après la loi de Descartes pour la réfraction, calcule l\'angle de réfraction $i_2$ (en degrés, arrondi au dixième).',
            answer: i2,
            tolerance: 1,
            unit: '°',
            hint: 'Utilise $n_1 \\sin i_1 = n_2 \\sin i_2$, donc $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1$.',
            solution: [
              'Loi de Descartes : $n_1 \\sin i_1 = n_2 \\sin i_2$.',
              'On isole : $\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{' + fr(milieu.n, 2) + '}\\times\\sin ' + i1 + '°$.',
              'Résultat : $i_2 \\approx ' + fr(i2, 1) + '°$, un angle plus petit que $i_1$ car le rayon se rapproche de la normale en entrant dans le milieu plus réfringent.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une fibre optique utilisée pour un capteur de position domotique est constituée d\'un cœur d\'indice $n_1 = 1{,}48$ entouré d\'une gaine d\'indice $n_2 = 1{,}46$. Un rayon lumineux se propage à l\'intérieur du cœur et atteint l\'interface cœur-gaine avec un angle d\'incidence $i_1 = 80°$ (mesuré par rapport à la normale à l\'interface).',
      tasks: [
        'Calculer l\'angle limite $i_{lim}$ au-delà duquel la réflexion totale se produit à l\'interface cœur-gaine.',
        'Comparer $i_1$ à $i_{lim}$ et en déduire si le rayon est guidé par réflexion totale dans le cœur de la fibre.',
        'Expliquer pourquoi l\'indice de la gaine doit rester légèrement inférieur à celui du cœur pour que la fibre optique fonctionne correctement.'
      ],
      solutions: [
        '$\\sin i_{lim} = \\dfrac{n_2}{n_1} = \\dfrac{1{,}46}{1{,}48} \\approx 0{,}9865$, donc $i_{lim} = \\arcsin(0{,}9865) \\approx 80{,}6°$.',
        'Ici $i_1 = 80° < i_{lim} \\approx 80{,}6°$ : l\'angle d\'incidence est légèrement <strong>inférieur</strong> à l\'angle limite, donc le rayon n\'est pas totalement réfléchi : une partie de la lumière est transmise dans la gaine, ce qui constitue une perte de signal.',
        'Si $n_2$ était supérieur ou égal à $n_1$, l\'angle limite n\'existerait pas et la réflexion totale serait impossible pour tout angle d\'incidence : la lumière fuirait systématiquement hors du cœur. Un écart faible mais réel entre $n_1$ et $n_2$ est nécessaire pour obtenir un angle limite proche de $90°$, ce qui permet de guider efficacement des rayons même d\'incidence peu rasante.'
      ],
      finalAnswer: '$i_{lim} \\approx 80{,}6°$. Avec $i_1 = 80°$, tout juste inférieur à $i_{lim}$, une fraction de la lumière s\'échappe dans la gaine : en pratique, les fibres optiques sont conçues pour que la lumière injectée présente des angles d\'incidence nettement supérieurs à $i_{lim}$, garantissant une réflexion totale systématique et donc une transmission du signal sans perte le long de la fibre.'
    },

    evaluation: {
      title: 'Évaluation — Optique géométrique',
      duration: '30 min',
      questions: [
        {
          statement: 'Un rayon lumineux passe de l\'air ($n_1=1$) au verre ($n_2=1{,}5$) avec un angle d\'incidence $i_1=30°$. Calculer l\'angle de réfraction $i_2$ (en degrés, arrondi au dixième).',
          type: 'numeric',
          answer: 19.5,
          tolerance: 1,
          unit: '°',
          points: 2,
          correction: '$\\sin i_2 = \\dfrac{n_1}{n_2}\\sin i_1 = \\dfrac{1}{1{,}5}\\times\\sin 30° = \\dfrac{0{,}5}{1{,}5} \\approx 0{,}333$, donc $i_2 \\approx 19{,}5°$.'
        },
        {
          statement: 'La réflexion totale se produit uniquement lorsque :',
          type: 'multiple-choice',
          options: [
            '$n_1 < n_2$, quel que soit l\'angle d\'incidence',
            'L\'angle d\'incidence est nul',
            '$n_1 > n_2$ et l\'angle d\'incidence dépasse l\'angle limite',
            'Les deux indices sont égaux'
          ],
          answer: 2,
          points: 2,
          correction: 'La réflexion totale exige $n_1>n_2$ (milieu de départ plus réfringent) et un angle d\'incidence supérieur à l\'angle limite $i_{lim}$ tel que $\\sin i_{lim}=\\frac{n_2}{n_1}$.'
        },
        {
          statement: 'Une lentille convergente a une distance focale $f\' = 25$ cm. Calculer sa vergence $C$ (en dioptries δ).',
          type: 'numeric',
          answer: 4,
          tolerance: 0.2,
          unit: 'δ',
          points: 2,
          correction: '$C = \\dfrac{1}{f\'} = \\dfrac{1}{0{,}25} = 4$ δ ($f\'$ exprimée en mètres).'
        },
        {
          statement: 'Une lentille convergente de vergence $C = 4$ δ reçoit un objet à $\\overline{OA} = -50$ cm. Calculer la position de l\'image $\\overline{OA\'}$ (en cm).',
          type: 'numeric',
          answer: 50,
          tolerance: 2,
          unit: 'cm',
          points: 3,
          correction: '$f\' = \\dfrac{100}{C} = 25$ cm. $\\dfrac{1}{\\overline{OA\'}} = \\dfrac{1}{25} + \\dfrac{1}{-50} = 0{,}04 - 0{,}02 = 0{,}02$, donc $\\overline{OA\'} = 50$ cm.'
        },
        {
          statement: 'Pour la situation précédente ($\\overline{OA} = -50$ cm, $\\overline{OA\'} = 50$ cm), calculer le grandissement $\\gamma$.',
          type: 'numeric',
          answer: -1,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$\\gamma = \\dfrac{\\overline{OA\'}}{\\overline{OA}} = \\dfrac{50}{-50} = -1$ : l\'image est renversée et de même taille que l\'objet.'
        }
      ]
    }
  });
