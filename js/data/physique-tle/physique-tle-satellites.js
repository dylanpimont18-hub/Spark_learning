/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-satellites.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-satellites',
    level: 2, subject: 'physique',
    icon: '🛰️',
    title: 'Mouvements des satellites et des planètes',
    subtitle: 'Loi de gravitation universelle, mouvement circulaire des satellites, lois de Kepler, satellites géostationnaires',
    keywords: ['Gravitation', 'Kepler', 'Satellite', 'Orbite', 'Troisième loi de Kepler'],
    physics: 'L\'étude du mouvement des satellites et des planètes permet de placer un satellite de télécommunication sur une orbite géostationnaire, de calculer la durée d\'une mission spatiale, de prévoir la trajectoire d\'une sonde interplanétaire, ou encore de comprendre pourquoi les planètes du système solaire mettent d\'autant plus de temps à faire le tour du Soleil qu\'elles en sont éloignées.',

    cours: {
      intro: 'Un satellite (naturel ou artificiel) reste en orbite autour d\'un astre attracteur grâce à la <strong>force de gravitation universelle</strong>, décrite par la loi de Newton : $F = G\\dfrac{Mm}{r^2}$, où $G$ est la constante de gravitation, $M$ la masse de l\'astre attracteur, $m$ la masse du satellite et $r$ la distance entre leurs centres.<br/><br/>Dans le cas particulier d\'une orbite <strong>circulaire</strong>, le principe fondamental de la dynamique appliqué au satellite montre que la force de gravitation joue le rôle de <strong>force centripète</strong> : elle est constamment dirigée vers le centre de l\'astre attracteur, ce qui impose au satellite une vitesse de norme constante mais de direction sans cesse changeante.<br/><br/>De façon plus générale, les trois <strong>lois de Kepler</strong> décrivent le mouvement de tout satellite ou planète : la trajectoire est une <strong>ellipse</strong> (dont le cas circulaire n\'est qu\'un cas particulier), l\'astre attracteur balaie des aires égales en des durées égales, et le rapport $\\dfrac{T^2}{a^3}$ est le même pour tous les satellites d\'un même astre attracteur.',
      definitions: [
        { term: 'Loi de gravitation universelle', def: 'Deux corps de masses $M$ et $m$, séparés d\'une distance $r$, s\'attirent avec une force de norme $F = G\\dfrac{Mm}{r^2}$, avec $G = 6{,}67\\times10^{-11}$ N·m²/kg² (constante de gravitation universelle).' },
        { term: 'Satellite géostationnaire', def: 'Satellite en orbite circulaire équatoriale dont la période de révolution est <strong>exactement égale</strong> à la période de rotation de la Terre sur elle-même ($T \\approx 23$ h $56$ min), ce qui le rend immobile dans le ciel vu depuis le sol.' },
        { term: '1ère loi de Kepler (loi des orbites)', def: 'Dans le référentiel héliocentrique (ou le référentiel propre à l\'astre attracteur), la trajectoire d\'une planète ou d\'un satellite est une <strong>ellipse</strong> dont l\'astre attracteur occupe l\'un des deux foyers.' },
        { term: '2ème loi de Kepler (loi des aires)', def: 'Le segment reliant l\'astre attracteur au satellite balaie des <strong>aires égales pendant des durées égales</strong> : le satellite se déplace donc plus vite près du périhélie (point le plus proche) que près de l\'aphélie (point le plus éloigné).' },
        { term: '3ème loi de Kepler (loi des périodes)', def: 'Pour tous les satellites d\'un même astre attracteur de masse $M$ : $\\dfrac{T^2}{a^3} = \\dfrac{4\\pi^2}{GM}$, où $T$ est la période de révolution et $a$ le demi-grand axe de l\'orbite (le rayon, dans le cas particulier d\'une orbite circulaire).' }
      ],
      method: {
        title: 'Étudier un satellite en orbite circulaire en 3 étapes',
        steps: [
          '<strong>Modéliser</strong> : satellite de masse $m$ en orbite circulaire de rayon $r$ (mesuré depuis le centre de l\'astre attracteur) autour d\'un astre de masse $M$. La seule force est la gravitation, qui joue le rôle de force centripète.',
          '<strong>Appliquer le PFD</strong> dans le référentiel adapté (géocentrique pour un satellite terrestre) : $G\\dfrac{Mm}{r^2} = m\\dfrac{v^2}{r}$ (accélération centripète $a=\\frac{v^2}{r}$ pour un mouvement circulaire uniforme). On en déduit la <strong>vitesse orbitale</strong> $v = \\sqrt{\\dfrac{GM}{r}}$, indépendante de la masse $m$ du satellite.',
          '<strong>Relier vitesse et période</strong> grâce au périmètre du cercle : $v = \\dfrac{2\\pi r}{T}$, ce qui permet de retrouver directement la <strong>troisième loi de Kepler</strong> $\\dfrac{T^2}{r^3}=\\dfrac{4\\pi^2}{GM}$, utile pour calculer $T$ (connaissant $r$) ou l\'altitude nécessaire pour une période donnée (cas d\'un satellite géostationnaire).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Orbite elliptique et lois de Kepler',
        title: 'Orbite elliptique autour d\'un astre attracteur : loi des aires',
        description: 'L\'astre attracteur occupe l\'un des deux foyers de l\'ellipse (1ère loi). Les deux secteurs colorés, balayés pendant la <strong>même durée</strong>, ont la <strong>même aire</strong> : le satellite parcourt un grand angle près du périhélie (où il va vite) et un petit angle près de l\'aphélie (où il va lentement).',
        svg: `
          <svg viewBox="0 0 640 340" role="img" aria-labelledby="kepler-title kepler-desc">
            <title id="kepler-title">Orbite elliptique d'un satellite autour d'un astre attracteur, illustrant la loi des aires de Kepler</title>
            <desc id="kepler-desc">Une trajectoire elliptique entoure un astre attracteur place a l'un des deux foyers de l'ellipse, decale vers la droite par rapport au centre. Deux secteurs sont coloriees entre le foyer et l'ellipse : un secteur pres du perihelie, le point le plus proche du foyer a droite, qui est large en angle mais couvre une faible portion de l'orbite en distance, et un secteur pres de l'aphelie, le point le plus eloigne du foyer a gauche, qui est etroit en angle mais couvre une grande distance le long de l'ellipse. Ces deux secteurs representent des aires egales balayees pendant la meme duree, illustrant que le satellite se deplace plus vite pres du perihelie que pres de l'aphelie.</desc>

            <defs>
              <marker id="arrow-phystle-kepler" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- orbite elliptique -->
            <ellipse class="curve-main" cx="320" cy="180" rx="220" ry="130" fill="none"></ellipse>

            <!-- secteur pres du perihelie (grand angle, temps court) -->
            <path d="M497.5,180 L540.0,180 L539.3,169.4 L537.1,158.9 L533.5,148.6 L528.5,138.5 L522.1,128.6 L514.3,119.1 L505.3,109.9 L495.1,101.3 L483.7,93.1 L471.2,85.6 L457.7,78.6 L443.3,72.3 L428.1,66.8 L412.2,62.0 L395.6,57.9 L378.6,54.7 Z" fill="var(--diagram-accent)" fill-opacity="0.28" stroke="none"></path>

            <!-- secteur pres de l'aphelie (petit angle, meme aire, meme duree) -->
            <path d="M497.5,180 L102.3,161.2 L101.8,163.5 L101.3,165.9 L100.9,168.2 L100.6,170.6 L100.3,172.9 L100.1,175.3 L100.0,177.6 L100.0,180.0 L100.0,182.4 L100.1,184.7 L100.3,187.1 L100.6,189.4 L100.9,191.8 L101.3,194.1 L101.8,196.5 L102.3,198.8 Z" fill="var(--secondary)" fill-opacity="0.28" stroke="none"></path>

            <!-- foyer (astre attracteur) -->
            <circle class="plot-point" cx="497.5" cy="180" r="7"></circle>
            <text class="annotation-label" x="497.5" y="205" text-anchor="middle">Astre attracteur</text>

            <!-- perihelie / aphelie -->
            <circle class="plot-point-alt" cx="540" cy="180" r="5"></circle>
            <text class="tick-label" x="560" y="184" text-anchor="start">Périhélie</text>
            <circle class="plot-point-alt" cx="100" cy="180" r="5"></circle>
            <text class="tick-label" x="80" y="200" text-anchor="middle">Aphélie</text>

            <!-- vitesses (rapide au perihelie, lente a l'aphelie) -->
            <line class="curve-main" x1="540" y1="150" x2="540" y2="100" marker-end="url(#arrow-phystle-kepler)"></line>
            <text class="label-soft" x="555" y="110" text-anchor="start">v rapide</text>
            <line class="curve-main" x1="100" y1="150" x2="100" y2="130" marker-end="url(#arrow-phystle-kepler)"></line>
            <text class="label-soft" x="60" y="120" text-anchor="middle">v lente</text>

            <!-- labels des aires -->
            <text class="tick-label" x="470" y="120" text-anchor="middle">S₁</text>
            <text class="tick-label" x="150" y="180" text-anchor="middle">S₂</text>
            <text class="label-soft" x="320" y="320" text-anchor="middle">Loi des aires : S₁ = S₂ pour une même durée Δt</text>
          </svg>
        `,
        notes: [
          'L\'astre attracteur (étoile, planète…) occupe l\'un des deux <strong>foyers</strong> de l\'ellipse, jamais son centre (1ère loi de Kepler).',
          'Les deux secteurs colorés représentent des <strong>aires égales</strong> ($S_1 = S_2$), balayées pendant la <strong>même durée</strong> $\\Delta t$ (2ème loi, dite loi des aires).',
          'Comme $S_1=S_2$ pour un arc court près du périhélie et un arc long près de l\'aphélie, le satellite doit se déplacer <strong>plus vite</strong> près du périhélie et <strong>plus lentement</strong> près de l\'aphélie.'
        ],
        reading: 'Repère d\'abord le foyer excentré (astre attracteur), puis compare les deux secteurs colorés : celui du périhélie est plus large en angle mais plus court en rayon, celui de l\'aphélie est plus étroit en angle mais plus long en rayon — leurs aires sont égales.',
        caption: 'Orbite elliptique et loi des aires de Kepler : deux secteurs d\'aires égales balayés en des durées égales, illustrant la vitesse plus élevée du satellite au périhélie qu\'à l\'aphélie.'
      },
      example: {
        statement: 'Un satellite d\'observation est placé sur une orbite circulaire à une altitude $h = 700$ km au-dessus de la surface terrestre. On donne le rayon terrestre $R_T = 6{,}38\\times10^3$ km, la masse de la Terre $M_T = 5{,}97\\times10^{24}$ kg et $G = 6{,}67\\times10^{-11}$ N·m²/kg².<br/><br/>Calculer la vitesse orbitale $v$ du satellite, puis sa période de révolution $T$.',
        steps: [
          'Rayon de l\'orbite (mesuré depuis le <strong>centre</strong> de la Terre, pas depuis sa surface) : $r = R_T + h = 6{,}38\\times10^3 + 700 = 7{,}08\\times10^3$ km $= 7{,}08\\times10^6$ m.',
          'PFD sur l\'orbite circulaire : $G\\dfrac{M_Tm}{r^2}=m\\dfrac{v^2}{r}$, donc $v = \\sqrt{\\dfrac{GM_T}{r}} = \\sqrt{\\dfrac{6{,}67\\times10^{-11}\\times5{,}97\\times10^{24}}{7{,}08\\times10^{6}}} \\approx 7{,}50\\times10^3$ m/s, soit environ $7{,}50$ km/s.',
          'Période, à partir du périmètre de l\'orbite : $T = \\dfrac{2\\pi r}{v} = \\dfrac{2\\pi \\times 7{,}08\\times10^{6}}{7{,}50\\times10^{3}} \\approx 5{,}93\\times10^{3}$ s.'
        ],
        answer: '$v \\approx 7{,}50$ km/s et $T \\approx 5{,}93\\times10^3$ s, soit environ $98{,}8$ minutes. Le satellite fait donc le tour de la Terre en un peu plus d\'une heure et demie — une durée typique pour un satellite en orbite basse.'
      },
      formulas: [
        'Loi de gravitation universelle : $F = G\\dfrac{Mm}{r^2}$',
        'Vitesse orbitale (orbite circulaire) : $v = \\sqrt{\\dfrac{GM}{r}}$ (indépendante de la masse $m$ du satellite)',
        'Relation vitesse-période : $v = \\dfrac{2\\pi r}{T}$',
        'Troisième loi de Kepler : $\\dfrac{T^2}{a^3} = \\dfrac{4\\pi^2}{GM}$ (même valeur pour tous les satellites d\'un même astre attracteur)',
        'Rayon orbital total : $r = R_{astre} + h$ (toujours mesuré depuis le centre de l\'astre, pas depuis sa surface)'
      ],
      recap: [
        'La force de gravitation joue le rôle de <strong>force centripète</strong> pour un satellite en orbite circulaire : elle est perpendiculaire à la vitesse et dirigée vers le centre de l\'astre attracteur.',
        'La vitesse orbitale $v=\\sqrt{GM/r}$ ne dépend <strong>pas</strong> de la masse du satellite, mais uniquement de la masse de l\'astre attracteur et du rayon de l\'orbite.',
        'Les trois lois de Kepler généralisent ce résultat à toute orbite, y compris elliptique : trajectoire elliptique (1ère loi), loi des aires — vitesse variable (2ème loi), et $T^2/a^3$ constant pour un même astre attracteur (3ème loi).',
        'Un satellite géostationnaire a nécessairement une période $T \\approx 23$ h $56$ et une orbite <strong>équatoriale</strong> : ces deux conditions fixent une unique altitude possible (environ $36\\,000$ km).'
      ],
      piege: 'Une erreur fréquente est d\'utiliser directement l\'altitude $h$ au lieu du rayon orbital $r = R_{astre}+h$ dans les formules de vitesse ou de période, ce qui fausse tout le calcul. Attention également à ne pas confondre la <strong>vitesse orbitale</strong> $v=\\sqrt{GM/r}$, qui ne dépend pas de la masse du satellite, avec une éventuelle confusion où l\'on ferait intervenir la masse $m$ du satellite dans le résultat final : elle se simplifie toujours dans le PFD.'
    },

    quiz: [
      {
        q: 'Pour un satellite en orbite circulaire autour de la Terre, la force de gravitation joue le rôle de :',
        options: [
          'Force motrice, dans le sens du mouvement',
          'Force centripète, dirigée vers le centre de la Terre',
          'Force centrifuge, dirigée vers l\'extérieur',
          'Force de frottement, qui ralentit le satellite'
        ],
        answer: 1,
        correction: 'La force de gravitation est constamment dirigée vers le centre de la Terre, perpendiculairement à la vitesse du satellite : c\'est une force <strong>centripète</strong>, qui maintient le satellite sur sa trajectoire circulaire sans jamais accélérer ou ralentir sa vitesse (mouvement circulaire uniforme).'
      },
      {
        q: 'D\'après la deuxième loi de Kepler (loi des aires), un satellite en orbite elliptique se déplace :',
        options: [
          'À vitesse constante tout au long de son orbite',
          'Plus vite près du périhélie (point le plus proche) que près de l\'aphélie (point le plus éloigné)',
          'Plus vite près de l\'aphélie que près du périhélie',
          'De façon aléatoire, sans lien avec sa distance à l\'astre attracteur'
        ],
        answer: 1,
        correction: 'Pour balayer des aires égales en des durées égales, le satellite doit parcourir un arc plus long (donc aller plus vite) là où il est proche de l\'astre attracteur (périhélie), et un arc plus court (donc aller plus lentement) là où il en est éloigné (aphélie).'
      },
      {
        q: 'D\'après la troisième loi de Kepler, si un satellite A a un rayon d\'orbite quatre fois plus grand qu\'un satellite B autour du même astre attracteur, comment se comparent leurs périodes de révolution ?',
        options: [
          '$T_A = 4 \\times T_B$',
          '$T_A = 16 \\times T_B$',
          '$T_A = 8 \\times T_B$',
          '$T_A = 2 \\times T_B$'
        ],
        answer: 2,
        correction: 'La troisième loi de Kepler donne $\\dfrac{T^2}{r^3}$ constant, donc $T \\propto r^{3/2}$. Si $r_A = 4r_B$, alors $T_A = T_B \\times 4^{3/2} = T_B \\times 8$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse', 'periode']);
        var G = 6.67e-11;
        var astres = [
          { nom: 'la Terre', M: 5.97e24, R: 6378 },
          { nom: 'Mars', M: 6.42e23, R: 3390 },
          { nom: 'Jupiter', M: 1.90e27, R: 69911 }
        ];
        var astre = pick(astres);

        if (typeExo === 'vitesse') {
          var h = rand(300, 1500);
          var r = (astre.R + h) * 1000;
          var v = Math.sqrt(G * astre.M / r);
          var vKm = parseFloat((v / 1000).toFixed(2));
          var contexte = pick([
            'un satellite d\'observation météorologique',
            'un satellite de télédétection',
            'une capsule scientifique en orbite basse',
            'un petit satellite de recherche universitaire'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', un satellite est placé sur une orbite circulaire autour de ' + astre.nom + ' à une altitude $h = ' + h + '$ km. On donne $G = 6{,}67\\times10^{-11}$ N·m²/kg², la masse de l\'astre $M = ' + fr(astre.M / 1e24, 2) + '\\times10^{24}$ kg et son rayon $R = ' + astre.R + '$ km.<br/><br/>Calcule la vitesse orbitale $v$ du satellite (en km/s, arrondie au centième).',
            answer: vKm,
            tolerance: Math.max(0.05, parseFloat((vKm * 0.03).toFixed(2))),
            unit: 'km/s',
            hint: 'Le rayon orbital est $r = R + h$ (mesuré depuis le centre de l\'astre). Utilise $v = \\sqrt{\\dfrac{GM}{r}}$.',
            solution: [
              'Rayon orbital : $r = R + h = ' + astre.R + ' + ' + h + ' = ' + (astre.R + h) + '$ km $= ' + fr((astre.R + h) / 1000, 3) + '\\times10^{6}$ m.',
              'PFD sur l\'orbite circulaire : $v = \\sqrt{\\dfrac{GM}{r}}$.',
              'Résultat : $v \\approx ' + fr(vKm, 2) + '$ km/s.'
            ]
          };
        } else {
          var h2 = rand(300, 1500);
          var r2 = (astre.R + h2) * 1000;
          var v2 = Math.sqrt(G * astre.M / r2);
          var T2 = (2 * Math.PI * r2) / v2;
          var Tmin = parseFloat((T2 / 60).toFixed(1));
          var contexte2 = pick([
            'un satellite scientifique en orbite basse',
            'une station spatiale miniature',
            'un satellite de positionnement expérimental',
            'un module d\'observation en orbite basse'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte2 + ', un satellite est placé sur une orbite circulaire autour de ' + astre.nom + ' à une altitude $h = ' + h2 + '$ km. On donne $G = 6{,}67\\times10^{-11}$ N·m²/kg², la masse de l\'astre $M = ' + fr(astre.M / 1e24, 2) + '\\times10^{24}$ kg et son rayon $R = ' + astre.R + '$ km.<br/><br/>Calcule la période de révolution $T$ du satellite (en minutes, arrondie au dixième).',
            answer: Tmin,
            tolerance: Math.max(0.5, parseFloat((Tmin * 0.03).toFixed(1))),
            unit: 'min',
            hint: 'Calcule d\'abord $v=\\sqrt{GM/r}$, puis $T = \\dfrac{2\\pi r}{v}$ (en secondes, à convertir en minutes).',
            solution: [
              'Rayon orbital : $r = R + h = ' + (astre.R + h2) + '$ km.',
              'Vitesse orbitale : $v = \\sqrt{\\dfrac{GM}{r}} \\approx ' + fr(parseFloat((v2 / 1000).toFixed(2)), 2) + '$ km/s.',
              'Période : $T = \\dfrac{2\\pi r}{v}$, convertie en minutes.',
              'Résultat : $T \\approx ' + fr(Tmin, 1) + '$ min.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On souhaite déterminer l\'altitude à laquelle placer un satellite de télécommunication géostationnaire, c\'est-à-dire dont la période de révolution est égale à la période de rotation de la Terre sur elle-même, $T = 23$ h $56$ min $= 8{,}62\\times10^4$ s. On donne $G = 6{,}67\\times10^{-11}$ N·m²/kg², la masse de la Terre $M_T = 5{,}97\\times10^{24}$ kg et le rayon terrestre $R_T = 6{,}38\\times10^3$ km.',
      tasks: [
        'À partir du principe fondamental de la dynamique appliqué à une orbite circulaire, exprimer la troisième loi de Kepler $\\dfrac{T^2}{r^3} = \\dfrac{4\\pi^2}{GM_T}$.',
        'En déduire l\'expression du rayon orbital $r$ en fonction de $T$, $G$ et $M_T$, puis calculer sa valeur numérique.',
        'En déduire l\'altitude $h$ du satellite géostationnaire au-dessus de la surface terrestre.'
      ],
      solutions: [
        'PFD sur l\'orbite circulaire : $G\\dfrac{M_Tm}{r^2}=m\\dfrac{v^2}{r}$, donc $v^2=\\dfrac{GM_T}{r}$. Avec $v=\\dfrac{2\\pi r}{T}$, on obtient $\\dfrac{4\\pi^2r^2}{T^2}=\\dfrac{GM_T}{r}$, soit $\\dfrac{T^2}{r^3}=\\dfrac{4\\pi^2}{GM_T}$.',
        'On isole $r$ : $r = \\sqrt[3]{\\dfrac{GM_TT^2}{4\\pi^2}} = \\sqrt[3]{\\dfrac{6{,}67\\times10^{-11}\\times5{,}97\\times10^{24}\\times(8{,}62\\times10^{4})^2}{4\\pi^2}} \\approx \\sqrt[3]{7{,}54\\times10^{22}} \\approx 4{,}22\\times10^{7}$ m, soit $r \\approx 4{,}22\\times10^{4}$ km.',
        'Altitude : $h = r - R_T = 4{,}22\\times10^{4} - 6{,}38\\times10^{3} \\approx 3{,}58\\times10^{4}$ km.'
      ],
      finalAnswer: '$h \\approx 3{,}58\\times10^4$ km, soit environ $35\\,800$ km d\'altitude au-dessus de l\'équateur. C\'est l\'altitude à laquelle sont placés tous les satellites géostationnaires (météo, télécommunications) : elle est unique, imposée par la seule condition $T = 23$ h $56$ min et une orbite équatoriale.'
    },

    evaluation: {
      title: 'Évaluation — Mouvements des satellites et des planètes',
      duration: '30 min',
      questions: [
        {
          statement: 'La force de gravitation subie par un satellite en orbite circulaire joue le rôle de :',
          type: 'multiple-choice',
          options: [
            'Force centripète',
            'Force centrifuge',
            'Force motrice',
            'Force de frottement'
          ],
          answer: 0,
          points: 2,
          correction: 'La force de gravitation est dirigée vers le centre de l\'astre attracteur, perpendiculairement à la vitesse : c\'est une force centripète, qui courbe la trajectoire sans changer la norme de la vitesse (orbite circulaire).'
        },
        {
          statement: 'Un satellite est en orbite circulaire à $r = 8{,}0\\times10^6$ m autour d\'un astre de masse $M = 6{,}0\\times10^{24}$ kg ($G=6{,}67\\times10^{-11}$ N·m²/kg²). Calculer sa vitesse orbitale (en km/s, arrondie au dixième).',
          type: 'numeric',
          answer: 7.1,
          tolerance: 0.2,
          unit: 'km/s',
          points: 3,
          correction: '$v=\\sqrt{\\dfrac{GM}{r}}=\\sqrt{\\dfrac{6{,}67\\times10^{-11}\\times6{,}0\\times10^{24}}{8{,}0\\times10^{6}}}\\approx 7{,}1\\times10^3$ m/s $=7{,}1$ km/s.'
        },
        {
          statement: 'D\'après la deuxième loi de Kepler, un satellite en orbite elliptique se déplace le plus rapidement :',
          type: 'multiple-choice',
          options: [
            'Au périhélie (point le plus proche de l\'astre attracteur)',
            'À l\'aphélie (point le plus éloigné de l\'astre attracteur)',
            'À vitesse constante, quel que soit le point de l\'orbite',
            'Au centre de l\'ellipse'
          ],
          answer: 0,
          points: 2,
          correction: 'La loi des aires impose une vitesse plus grande là où le satellite est proche de l\'astre attracteur : c\'est au périhélie.'
        },
        {
          statement: 'Deux satellites A et B orbitent autour du même astre. $T_A = 2$ jours et $T_B = 16$ jours. D\'après la troisième loi de Kepler, quel est le rapport $\\dfrac{r_B}{r_A}$ ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0.2,
          unit: '',
          points: 3,
          correction: '$\\dfrac{T^2}{r^3}$ est constant, donc $\\dfrac{r_B}{r_A} = \\left(\\dfrac{T_B}{T_A}\\right)^{2/3} = 8^{2/3} = 4$.'
        },
        {
          statement: 'Un satellite géostationnaire doit nécessairement respecter deux conditions : une période $T \\approx 23$ h $56$ min, et une orbite :',
          type: 'multiple-choice',
          options: [
            'Polaire',
            'Équatoriale',
            'Elliptique très excentrique',
            'À très basse altitude'
          ],
          answer: 1,
          points: 2,
          correction: 'Pour rester fixe au-dessus d\'un même point du ciel vu du sol, un satellite géostationnaire doit être sur une orbite circulaire, équatoriale, avec une période égale à celle de la rotation terrestre.'
        }
      ]
    }
  });
