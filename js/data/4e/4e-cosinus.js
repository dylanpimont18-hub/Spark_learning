window.MODULES.push(
    {
    id: '4e-cosinus',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Cosinus d\'un angle aigu',
    subtitle: 'cos = adjacent / hypoténuse',
    keywords: ['Cosinus', 'Angle aigu', 'Triangle rectangle', 'Adjacent', 'Hypoténuse'],
    physics: 'Décomposition de forces, travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), loi de Snell-Descartes en optique',
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro ouvrait sur la definition du
         cosinus, donc sur la notion qu'elle devait faire desirer. Le test du
         cahier des charges : on doit avoir BESOIN du chapitre pour repondre.
         Une echelle contre un mur ne donne que deux longueurs et aucun angle —
         Pythagore, vu au chapitre 5, ne sait pas conclure. Il faut un outil qui
         relie une longueur a un ANGLE : c'est exactement ce que le chapitre
         apporte. */
      intro: 'Une échelle de $4$ m est posée contre un mur, son pied à $1{,}20$ m du mur. Est-elle sûre ? Les pompiers disent qu\'une échelle tient bien quand elle fait environ $75°$ avec le sol.<br/><br/>' +
        'Le problème : tu connais deux <strong>longueurs</strong>, et on te pose une question sur un <strong>angle</strong>. Pythagore ne sait pas répondre à ça — il ne parle que de longueurs. Il te manque un outil qui fasse le pont entre les deux.<br/><br/>' +
        'Dans un triangle rectangle, le cosinus d\'un angle aigu mesure à quel point cet angle est « ouvert » : $\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.' +
        '<br/><br/>' +
      'L\'idée clé est que tous les triangles rectangles ayant le même angle $\\hat{A}$ sont semblables, donc le rapport adj/hyp est toujours identique, quelle que soit la taille du triangle. Ce rapport vaut toujours entre $0$ et $1$ : $\\cos(0°) = 1$ (triangle complètement « plat ») et $\\cos(90°) = 0$ (angle droit).' +
        '<br/><br/>' +
        'Attention : le côté « adjacent » dépend de l\'angle considéré — pour l\'angle $\\hat{A}$, c\'est le côté qui touche $\\hat{A}$ sans être l\'hypoténuse ; pour l\'angle $\\hat{B}$, c\'est l\'autre côté.' +
        '<br/><br/>' +
        'En physique, le cosinus intervient dans la décomposition de forces, le travail d\'une force ($W = F \\cdot d \\cdot \\cos\\theta$), et l\'optique (loi de Snell-Descartes).',
      definitions: [
        { term: 'Cosinus d\'un angle aigu', def: 'Rapport entre le côté adjacent à l\'angle et l\'hypoténuse dans un triangle rectangle : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$.' },
        { term: 'Côté adjacent', def: 'Côté du triangle rectangle qui forme l\'angle considéré, autre que l\'hypoténuse. Il change selon l\'angle choisi.' },
        { term: 'Hypoténuse', def: 'Plus grand côté du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans le cosinus.' },
        { term: 'Retrouver l\'angle (touche $\\cos^{-1}$)', def: 'Si l\'on connaît $\\cos(\\hat{A})$, la calculatrice redonne l\'angle avec la touche $\\cos^{-1}$ (parfois notée arccos) : $\\cos(\\hat{A}) = 0{,}5$ donne $\\hat{A} = 60°$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier l\'angle et les côtés</strong> : l\'angle aigu $\\hat{A}$, l\'hypoténuse (côté opposé à l\'angle droit) et le côté adjacent (côté de l\'angle, autre que l\'hypoténuse). <strong>Exemple :</strong> triangle $ABC$ rectangle en $C$ → hypoténuse $= AB$, côté adjacent à $\\hat{A}$ $= AC$.',
          '<strong>Appliquer</strong> : $\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$. <strong>Exemple :</strong> $AC = 4$ cm, $AB = 8$ cm → $\\cos(\\hat{A}) = \\dfrac{4}{8} = 0{,}5$ donc $\\hat{A} = 60°$.',
          '<strong>Trouver un côté inconnu</strong> : $\\text{adj} = \\text{hyp} \\times \\cos(\\hat{A})$ ou $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\hat{A})}$. <strong>Exemple :</strong> $\\hat{A} = 30°$, hyp $= 10$ cm → adj $= 10 \\times \\cos(30°) = 10 \\times 0{,}866 = 8{,}66$ cm.'
        ]
      },
      example: {
        statement: 'Une échelle de $5$ m est posée contre un mur en formant un angle de $60°$ avec le sol. À quelle distance du mur se trouve le pied de l\'échelle ?',
        steps: [
          'L\'échelle forme l\'hypoténuse d\'un triangle rectangle. L\'angle au sol est $60°$ et le côté adjacent est la distance au mur.',
          '$\\cos(60°) = \\dfrac{\\text{distance au mur}}{\\text{échelle}} = \\dfrac{d}{5}$.',
          '$d = 5 \\times \\cos(60°) = 5 \\times 0{,}5 = 2{,}5$ m.'
        ],
        answer: 'Le pied de l\'échelle est à $2{,}5$ m du mur.'
      },
      formulas: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}}$',
        '$\\cos(0°) = 1$, $\\cos(30°) = \\frac{\\sqrt{3}}{2}$, $\\cos(45°) = \\frac{\\sqrt{2}}{2}$, $\\cos(60°) = \\frac{1}{2}$, $\\cos(90°) = 0$',
        'Pour trouver l\'angle : $\\hat{A} = \\cos^{-1}\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$ (touche $\\cos^{-1}$ de la calculatrice)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle rectangle',
        title: 'Le cosinus : adjacent sur hypoténuse',
        description: 'À ce niveau, seul le cosinus est au programme : il n\'utilise que le côté <strong>adjacent</strong> et l\'<strong>hypoténuse</strong>. Le troisième côté, l\'opposé, ne sert pas dans le calcul.',
        svg: `
          <!-- Trace A L'ECHELLE de l'exemple du cours : 1 m = 40 px, angle A = 60°.
               adjacent CA = 2,5 m = 100 px, opposé CB = 4,33 m = 173 px,
               hypoténuse AB = 5 m = 200 px. L'ancien trace donnait un angle de
               35° alors que la legende annoncait 60° : cos 35° = 0,82, la figure
               contredisait le calcul qu'elle est censee illustrer. -->
          <svg viewBox="0 0 380 320" role="img" aria-labelledby="cosinus-graph-title cosinus-graph-desc">
            <title id="cosinus-graph-title">Triangle rectangle ABC et cosinus de l'angle A</title>
            <desc id="cosinus-graph-desc">Triangle rectangle ABC tracé à l'échelle, angle droit en C, angle de 60 degrés marqué en A. Le côté AC, adjacent à l'angle A, mesure 2,5 mètres et l'hypoténuse AB mesure 5 mètres, conformément à l'exemple chiffré du cours.</desc>

            <rect x="150" y="10" width="140" height="40" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="160" y="26">COS</text>
            <text class="tick-label" x="160" y="43">cos Â = adj / hyp</text>

            <polygon points="120,250 220,250 120,77" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="120" y1="250" x2="120" y2="77"></line>
            <line class="frame-line" x1="120" y1="250" x2="220" y2="250"></line>
            <line class="curve-main" x1="220" y1="250" x2="120" y2="77"></line>

            <path class="axis" d="M120 236 L134 236 L134 250"></path>

            <path class="guide-line" d="M200 250 A20 20 0 0 1 210 233" fill="none"></path>
            <text class="annotation-label" x="188" y="242">Â</text>

            <circle class="plot-point-alt" cx="120" cy="250" r="5"></circle>
            <circle class="plot-point-alt" cx="120" cy="77" r="5"></circle>
            <circle class="plot-point" cx="220" cy="250" r="5"></circle>
            <text class="annotation-label" x="100" y="270">C</text>
            <text class="annotation-label" x="100" y="71">B</text>
            <text class="annotation-label" x="228" y="270">A</text>

            <text class="annotation-label" x="128" y="268">AC = adjacent</text>
            <text class="annotation-label" x="240" y="150">AB = hypoténuse</text>
            <line class="guide-line" x1="236" y1="156" x2="178" y2="157"></line>

            <rect x="16" y="276" width="348" height="36" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 20%, var(--border))"></rect>
            <text class="tick-label" x="26" y="290">Exemple du cours : échelle de 5 m, angle 60° au sol</text>
            <text class="tick-label" x="26" y="306">distance au mur = 5 × cos 60° = 5 × 0,5 = 2,5 m</text>
          </svg>
        `,
        notes: [
          'Le côté adjacent à $\\hat{A}$ est $AC$ : il touche $\\hat{A}$ sans être l\'hypoténuse. L\'hypoténuse $AB$ fait face à l\'angle droit en $C$.',
          'Le troisième côté, $BC$, est le côté <strong>opposé</strong> à $\\hat{A}$ : on le nomme pour ne pas le confondre avec l\'adjacent, mais le cosinus ne l\'utilise jamais (son usage, le sinus, arrive en troisième).',
          'Avec hyp $= 5$ m et $\\hat{A} = 60°$, on retrouve l\'exemple du cours : adjacent $= 5 \\times \\cos(60°) = 2{,}5$ m.'
        ],
        reading: 'Le cosinus ne fait intervenir que deux côtés : celui qui touche l\'angle (adjacent) et le plus long (hypoténuse).',
        caption: 'Triangle $ABC$ rectangle en $C$, avec l\'exemple chiffré du cours (échelle de 5 m à 60°).'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. le cosinus ne depend pas de la TAILLE du triangle (obstacle n°1) ;
         2. « adjacent » se lit par rapport a l'angle CHOISI, pas a la position
            sur la feuille ;
         3. cos ne peut pas depasser 1, ce qui donne un controle gratuit.
         Coordonnees calculees (scratchpad geo-cos.js) : les deux triangles de
         la figure 1 sont des 3-4-5 a l'echelle 14 et 22, angle en A verifie a
         36,8699 deg dans les deux cas, cos = 0,8000 exactement. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu n° 1',
          title: 'Le cosinus dépend de l\'angle, pas de la taille du triangle',
          description: 'Beaucoup d\'élèves pensent qu\'un plus grand triangle donne un plus grand cosinus. Ces deux triangles n\'ont <strong>pas la même taille</strong>, mais <strong>le même angle</strong> — et donc exactement le même cosinus.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="cos-taille-title cos-taille-desc">
              <title id="cos-taille-title">Deux triangles rectangles semblables de tailles differentes et de meme angle</title>
              <desc id="cos-taille-desc">Deux triangles rectangles sont poses sur la meme ligne de base. Le petit a un cote adjacent de 4 unites et une hypotenuse de 5 unites. Le grand, une fois et demie plus grand, a un cote adjacent de 6 unites et une hypotenuse de 7,5 unites. Dans les deux cas l'angle etudie mesure le meme nombre de degres et le quotient du cote adjacent par l'hypotenuse vaut 0,8. La taille du dessin ne change donc pas la valeur du cosinus.</desc>

              <!-- MEME LIGNE DE BASE (y = 150) et angle etudie au MEME sommet
                   gauche : la seule difference visible doit etre la taille,
                   sinon l'eleve lit autre chose dans la comparaison. -->
              <line class="grid-line" x1="20" y1="150" x2="380" y2="150"></line>

              <polygon class="frame-line" points="40,150 96,150 96,108" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M87 150 L87 141 L96 141"></path>
              <text class="tick-label" x="68" y="166" text-anchor="middle">adjacent = 4</text>
              <text class="tick-label" x="60" y="120" text-anchor="end">hyp = 5</text>
              <text class="annotation-label" x="34" y="145" text-anchor="end">angle</text>

              <polygon class="frame-line" points="210,150 298,150 298,84" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M289 150 L289 141 L298 141"></path>
              <text class="tick-label" x="254" y="166" text-anchor="middle">adjacent = 6</text>
              <text class="tick-label" x="238" y="104" text-anchor="end">hyp = 7,5</text>
              <text class="annotation-label" x="204" y="145" text-anchor="end">angle</text>

              <text class="label-soft" x="68" y="188" text-anchor="middle">4 ÷ 5 = 0,8</text>
              <text class="label-soft" x="254" y="188" text-anchor="middle">6 ÷ 7,5 = 0,8</text>
              <text class="annotation-label" x="200" y="30" text-anchor="middle">même angle, donc même cosinus</text>
            </svg>
          `,
          notes: [
            'Le grand triangle est le petit <strong>agrandi une fois et demie</strong> : $4 \\times 1{,}5 = 6$ et $5 \\times 1{,}5 = 7{,}5$.',
            'Les deux quotients valent $0{,}8$ : en agrandissant, on multiplie le numérateur ET le dénominateur par le même nombre, donc le quotient ne bouge pas.',
            'Retiens-le comme un contrôle : si tu changes seulement la taille d\'un triangle, <strong>aucun</strong> cosinus ne change.'
          ],
          reading: 'Compare les deux fractions écrites sous les triangles. Les nombres sont différents, le résultat est le même. Le cosinus est une propriété de l\'angle, pas du dessin.',
          caption: 'Deux triangles semblables de tailles différentes : le cosinus de l\'angle vaut $0{,}8$ dans les deux cas.'
        },
        {
          theme: 'maths',
          kicker: 'Adjacent à quoi ?',
          title: 'Le côté adjacent change quand on change d\'angle',
          description: '« Adjacent » n\'est pas une place sur la feuille : c\'est une position <strong>par rapport à l\'angle qu\'on étudie</strong>. Dans le même triangle, le côté adjacent n\'est pas le même selon qu\'on travaille sur $\\hat{A}$ ou sur $\\hat{B}$.',
          svg: `
            <svg viewBox="0 0 400 196" role="img" aria-labelledby="cos-adj-title cos-adj-desc">
              <title id="cos-adj-title">Le meme triangle rectangle etudie selon l'angle A puis selon l'angle B</title>
              <desc id="cos-adj-desc">Le meme triangle rectangle, de cotes 6 et 8 et d'hypotenuse 10, est dessine deux fois. A gauche on etudie l'angle A : le cote adjacent est celui de longueur 8, qui touche l'angle A. A droite on etudie l'angle B : le cote adjacent est cette fois celui de longueur 6, qui touche l'angle B. L'hypotenuse, elle, reste la meme dans les deux cas. Le cote adjacent depend donc de l'angle choisi et non de la position du cote sur la feuille.</desc>

              <!-- Le MEME triangle 6-8-10 (echelle 12) repete deux fois : seul
                   l'angle etudie change, et donc le cote mis en avant. -->
              <polygon class="frame-line" points="40,150 136,150 40,78" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M49 150 L49 141 L40 141"></path>
              <line class="curve-main" x1="40" y1="150" x2="136" y2="150"></line>
              <text class="annotation-label" x="88" y="168" text-anchor="middle">adjacent = 8</text>
              <text class="tick-label" x="32" y="118" text-anchor="end">6</text>
              <text class="tick-label" x="96" y="106" text-anchor="start">hyp = 10</text>
              <text class="annotation-label" x="140" y="145" text-anchor="start">A</text>
              <text class="tick-label" x="88" y="36" text-anchor="middle">angle étudié : sommet A</text>
              <text class="tick-label" x="88" y="188" text-anchor="middle">cos A = 8 ÷ 10 = 0,8</text>

              <polygon class="frame-line" points="248,150 344,150 248,78" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M257 150 L257 141 L248 141"></path>
              <line class="curve-main" x1="248" y1="150" x2="248" y2="78"></line>
              <text class="tick-label" x="296" y="168" text-anchor="middle">8</text>
              <text class="annotation-label" x="240" y="118" text-anchor="end">adjacent = 6</text>
              <text class="tick-label" x="304" y="106" text-anchor="start">hyp = 10</text>
              <text class="annotation-label" x="244" y="72" text-anchor="end">B</text>
              <text class="tick-label" x="296" y="36" text-anchor="middle">angle étudié : sommet B</text>
              <text class="tick-label" x="296" y="188" text-anchor="middle">cos B = 6 ÷ 10 = 0,6</text>
            </svg>
          `,
          notes: [
            'Le triangle est <strong>le même</strong> des deux côtés : $6$, $8$ et $10$. Seul l\'angle étudié change.',
            'Le côté adjacent est toujours celui qui <strong>touche l\'angle étudié sans être l\'hypoténuse</strong> : $8$ pour $\\hat{A}$, $6$ pour $\\hat{B}$.',
            'L\'hypoténuse, elle, ne change jamais : elle est fixée par l\'angle droit, pas par l\'angle qu\'on étudie.'
          ],
          reading: 'Pose ton doigt sur l\'angle étudié. Deux côtés le touchent : l\'hypoténuse, et l\'autre — c\'est celui-là, l\'adjacent. Refais-le sur la figure de droite, tu tombes sur un côté différent.',
          caption: 'Le même triangle $6$-$8$-$10$ : le côté adjacent vaut $8$ pour $\\hat{A}$ et $6$ pour $\\hat{B}$.'
        },
        {
          theme: 'maths',
          kicker: 'Le contrôle gratuit',
          title: 'Un cosinus ne peut jamais dépasser 1',
          description: 'L\'hypoténuse est le plus long côté du triangle. Le côté adjacent est donc toujours <strong>plus court</strong> qu\'elle, et leur quotient reste inférieur à $1$. Un résultat supérieur à $1$ signale une erreur, sans avoir à refaire le calcul.',
          svg: `
            <svg viewBox="0 0 400 172" role="img" aria-labelledby="cos-borne-title cos-borne-desc">
              <title id="cos-borne-title">Le calcul juste et l'erreur de fraction renversee</title>
              <desc id="cos-borne-desc">En haut, le calcul juste : le cote adjacent de 6 divise par l'hypotenuse de 10 donne 0,6, une valeur comprise entre 0 et 1. En dessous, en trait tirete, l'erreur frequente : l'eleve renverse la fraction et divise 10 par 6, ce qui donne environ 1,67. Une regle graduee de 0 a 2 montre que la valeur juste tombe dans la zone autorisee alors que la valeur erronee tombe au dela de 1, dans une zone qu'aucun cosinus ne peut atteindre.</desc>

              <!-- PATRON « PIEGE » : le calcul JUSTE en premier et en teinte
                   d'accent, l'erreur DESSOUS en teinte faible et en tirete.
                   L'oeil lit le haut d'abord, donc il lit le vrai d'abord. -->
              <text class="annotation-label" x="24" y="30" text-anchor="start">juste</text>
              <text class="tick-label" x="88" y="30" text-anchor="start">adjacent ÷ hypoténuse = 6 ÷ 10 = 0,6</text>

              <text class="label-soft" x="24" y="58" text-anchor="start">erreur</text>
              <text class="tick-label" x="88" y="58" text-anchor="start">hypoténuse ÷ adjacent = 10 ÷ 6 = 1,67</text>
              <line class="guide-line" x1="88" y1="64" x2="340" y2="64"></line>

              <!-- Regle graduee 0..2, echelle 150 unites par unite. -->
              <line class="frame-line" x1="40" y1="120" x2="340" y2="120"></line>
              <line class="frame-line" x1="40" y1="114" x2="40" y2="126"></line>
              <line class="frame-line" x1="190" y1="114" x2="190" y2="126"></line>
              <line class="frame-line" x1="340" y1="114" x2="340" y2="126"></line>
              <text class="tick-label" x="40" y="140" text-anchor="middle">0</text>
              <text class="tick-label" x="190" y="140" text-anchor="middle">1</text>
              <text class="tick-label" x="340" y="140" text-anchor="middle">2</text>

              <!-- Zone permise 0..1 : aplat discret, c'est du decor. -->
              <rect x="40" y="108" width="150" height="12" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)" stroke="none"></rect>
              <circle class="plot-point" cx="130" cy="120" r="5"></circle>
              <text class="tick-label" x="130" y="104" text-anchor="middle">0,6</text>

              <circle class="plot-point-alt" cx="290" cy="120" r="5"></circle>
              <text class="label-soft" x="290" y="104" text-anchor="middle">1,67</text>
              <text class="tick-label" x="115" y="162" text-anchor="middle">valeurs possibles</text>
              <text class="tick-label" x="278" y="162" text-anchor="middle">aucun cosinus ici</text>
            </svg>
          `,
          notes: [
            'Le côté adjacent est un côté de l\'angle droit : il est <strong>toujours plus court</strong> que l\'hypoténuse.',
            'Un quotient dont le numérateur est plus petit que le dénominateur est inférieur à $1$ : $\\cos$ vit donc entre $0$ et $1$.',
            'Si tu trouves $1{,}67$, tu as divisé à l\'envers. Recommence en mettant l\'hypoténuse <strong>en bas</strong> de la fraction.'
          ],
          reading: 'Avant de valider un cosinus, regarde s\'il tient dans la zone colorée. Au-delà de $1$, inutile de chercher où est l\'erreur de calcul : la fraction est renversée.',
          caption: 'Un cosinus tombe toujours entre $0$ et $1$ : au-delà, la fraction a été écrite à l\'envers.'
        }
      ],
      recap: [
        '$\\cos(\\hat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$ — le rapport est toujours compris entre $0$ et $1$.',
        'Le côté adjacent change selon l\'angle considéré : c\'est le côté qui touche l\'angle (sans être l\'hypoténuse).',
        'Pour trouver un côté : adj $= $ hyp $\\times \\cos(\\hat{A})$ ; pour trouver un angle : $\\hat{A} = \\cos^{-1}\\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)$ à la calculatrice.',
        'Valeurs clés : $\\cos(0°) = 1$, $\\cos(60°) = 0{,}5$, $\\cos(90°) = 0$.',
        'Retour à l\'échelle de l\'introduction : $\\cos(\\hat{A}) = \\dfrac{1{,}20}{4} = 0{,}30$, et la touche $\\cos^{-1}$ donne $\\hat{A} \\approx 72{,}5°$.<br/><br/>C\'est un peu moins que les $75°$ conseillés : il faut <strong>rapprocher le pied du mur</strong>.'
      ],
      piege: 'Piège : le côté adjacent change selon l\'angle considéré. Pour l\'angle $\\hat{A}$, l\'adjacent est le côté qui « touche » $\\hat{A}$ (autre que l\'hypoténuse). Ne pas confondre avec le côté opposé.'
    },
    quiz: [
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm et $AC = 6$ cm. Quel est $\\cos(\\hat{A})$ ?',
        options: ['$0{,}8$', '$1{,}67$', '$0{,}75$', '$0{,}6$'],
        answer: 3,
        correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adj}}{\\text{hyp}} = \\dfrac{AC}{AB} = \\dfrac{6}{10} = 0{,}6$.<br/><br/>$1{,}67$ vient de la fraction renversée $\\dfrac{10}{6}$ — or un cosinus ne dépasse jamais $1$. $0{,}8$ utilise le troisième côté ($BC = 8$ cm, le côté opposé) à la place de l\'adjacent, et $0{,}75 = \\dfrac{6}{8}$ ne met pas l\'hypoténuse au dénominateur.'
      },
      {
        q: 'Dans un triangle rectangle, un angle aigu mesure $60°$. L\'hypoténuse vaut $14$ cm. Quel est le côté adjacent ?',
        options: ['$7$ cm', '$12{,}12$ cm', '$28$ cm', '$9{,}90$ cm'],
        answer: 0,
        correction: '$\\text{adj} = \\text{hyp} \\times \\cos(60°) = 14 \\times 0{,}5 = 7$ cm.<br/><br/>$12{,}12$ et $9{,}90$ utilisent $\\cos(30°)$ ou $\\cos(45°)$ à la place de $\\cos(60°)$ ; $28$ divise par $0{,}5$ au lieu de multiplier — or le côté adjacent est toujours plus court que l\'hypoténuse.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 10$ cm, $BC = 6$ cm, $AC = 8$ cm, un élève écrit : $\\cos(\\hat{A}) = \\dfrac{BC}{AB} = 0{,}6$. Quelle est son erreur ?',
        options: [
          'Il a mal identifié l\'hypoténuse : ce n\'est pas $AB$',
          'Il a confondu côté adjacent et côté opposé : $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = 0{,}8$',
          'Le résultat $0{,}6$ est correct, il n\'y a pas d\'erreur',
          'Il aurait dû diviser $AB$ par $BC$'
        ],
        answer: 1,
        correction: 'Pour l\'angle $\\hat{A}$, le côté adjacent est $AC$ (il « touche » $\\hat{A}$ sans être l\'hypoténuse), pas $BC$, qui est le côté opposé à $\\hat{A}$. Donc $\\cos(\\hat{A}) = \\dfrac{AC}{AB} = \\dfrac{8}{10} = 0{,}8$.<br/><br/>L\'hypoténuse est bien $AB$ (en face de l\'angle droit $C$) ; et $\\dfrac{AB}{BC} \\approx 1{,}67$ dépasserait $1$, ce qu\'aucun cosinus ne peut faire.'
      },
      {
        q: 'Dans un triangle rectangle, $\\cos(\\hat{A}) = \\dfrac{6}{12}$. Que vaut $\\hat{A}$ ?',
        options: ['$30°$', '$0{,}5°$', '$60°$', '$45°$'],
        answer: 2,
        correction: '$\\dfrac{6}{12} = 0{,}5$ et $\\cos(60°) = 0{,}5$, donc $\\hat{A} = 60°$ : la touche $\\cos^{-1}$ de la calculatrice le confirme.<br/><br/>$30°$ et $45°$ ont pour cosinus $0{,}866$ et $0{,}707$, pas $0{,}5$. $0{,}5°$ confond la <strong>valeur du cosinus</strong> avec l\'angle lui-même.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le generateur ne posait qu'une tache — « connais
         l'angle et l'hypotenuse, trouve le cote adjacent » — sous six habillages
         differents : 6 moules, 18 enonces, 6 de banque. Les deux autres usages
         du cosinus, calculer le cosinus a partir de deux longueurs et remonter a
         l'hypotenuse, n'etaient jamais exerces alors que l'evaluation les pose.

         Quatre taches. Les angles restent 30, 45 et 60 degres, dont le cosinus
         est donne dans l'enonce : la calculatrice trigonometrique n'est pas un
         prerequis de ce chapitre.

         Les taches 'cosinus' et 'hypotenuse' portent une FIGURE construite sur
         le tirage, ou le cote cherche porte un point d'interrogation. La tache
         'adjacent' n'en porte pas : elle donne un ANGLE, or
         figureTriangleRectangle cote des longueurs et ne sait pas dessiner un
         angle, si bien que la figure serait muette sur la donnee essentielle. */
      generate() {
        const tache = pick(['adjacent', 'adjacent', 'cosinus', 'hypotenuse']);

        if (tache === 'cosinus') {
          /* On part d'un triplet pythagoricien : les trois longueurs sont
             entieres, donc la figure est exacte ET le cosinus se calcule sans
             arrondi intermediaire. */
          const [adj, opp, hyp] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20], [7, 24, 25]]);
          const rep = parseFloat((adj / hyp).toFixed(3));
          const ctx = pick([
            'Dans un triangle $ABC$ rectangle en $C$',
            'Sur un plan, un triangle $ABC$ est rectangle en $C$',
            'Une équerre a la forme d\'un triangle $ABC$ rectangle en $C$'
          ]);
          return {
            statement: '📐 ' + ctx + ', on mesure $AC = ' + adj + '$ cm (côté adjacent à l\'angle $\\widehat{A}$) et $AB = ' + hyp + '$ cm (hypoténuse). ' +
              'Calcule $\\cos(\\widehat{A})$, arrondi au millième.',
            answer: rep,
            tolerance: 0.002,
            unit: '',
            /* Le cote oppose est MASQUE : l'enonce ne le donne pas, et le coter
               permettrait de repondre sans passer par le cosinus. L'inconnue
               etant le cosinus et non une longueur, aucun cote ne porte de
               point d'interrogation (inconnu vise un cote deja masque). */
            figure: figureTriangleRectangle(adj, opp, hyp, { unite: 'cm', inconnu: 'vertical', masquer: ['vertical'], noms: { droit: 'C', horizontal: 'A', vertical: 'B' } }),
            hint: 'Le cosinus est le quotient du côté ADJACENT par l\'HYPOTÉNUSE, dans cet ordre.',
            solution: [
              '$\\cos(\\widehat{A}) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}} = \\dfrac{AC}{AB} = \\dfrac{' + adj + '}{' + hyp + '}$.',
              'Soit $\\cos(\\widehat{A}) \\approx ' + fr(rep) + '$.',
              'Contrôle : un cosinus est toujours compris entre $0$ et $1$, parce que le côté adjacent est toujours plus court que l\'hypoténuse.'
            ]
          };
        }

        if (tache === 'hypotenuse') {
          const [adj, opp, hyp] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20]]);
          const cos = parseFloat((adj / hyp).toFixed(3));
          const ctx = pick([
            { d: 'Une échelle', u: 'm' },
            { d: 'Un câble tendu', u: 'm' },
            { d: 'Un pan de toit', u: 'm' },
            { d: 'Un escalier de meunier', u: 'm' }
          ]);
          return {
            statement: '📏 ' + ctx.d + ' fait un angle $\\widehat{A}$ avec l\'horizontale, et l\'on sait que $\\cos(\\widehat{A}) = ' + fr(cos) + '$. ' +
              'La longueur horizontale couverte (le côté adjacent) vaut $' + adj + '$ ' + ctx.u + '. Quelle est la longueur de l\'hypoténuse, en ' + ctx.u + ' ?',
            answer: hyp,
            tolerance: 0.1,
            unit: ctx.u,
            // Meme raison : l'enonce donne le cosinus et l'adjacent. Coter
            // l'oppose laisserait conclure par Pythagore, sans cosinus.
            figure: figureTriangleRectangle(adj, opp, hyp, { unite: ctx.u, inconnu: 'hypotenuse', masquer: ['vertical'] }),
            hint: 'Repars de $\\cos(\\widehat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$ et isole l\'hypoténuse : elle passe au numérateur, le cosinus au dénominateur.',
            solution: [
              'On part de $\\cos(\\widehat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$, soit $' + fr(cos) + ' = \\dfrac{' + adj + '}{\\text{hypoténuse}}$.',
              'L\'hypoténuse s\'isole en divisant : $\\text{hypoténuse} = \\dfrac{' + adj + '}{' + fr(cos) + '} = ' + hyp + '$ ' + ctx.u + '.',
              'Contrôle : l\'hypoténuse doit être PLUS GRANDE que le côté adjacent, et $' + hyp + ' > ' + adj + '$.'
            ]
          };
        }

        // tache === 'adjacent' : le cas direct, sous six habillages.
        const angles = [{ a: 30, cos: 0.866 }, { a: 45, cos: 0.707 }, { a: 60, cos: 0.5 }];
        const { a, cos } = pick(angles);
        const hyp = rand(5, 20);
        const adj = parseFloat((hyp * cos).toFixed(1));
        const scenario = pick([
          { emoji: '📐', s: 'Dans un triangle rectangle, un angle mesure $' + a + '°$ et l\'hypoténuse vaut $' + hyp + '$ cm. Calcule le côté adjacent (en cm, arrondi à $0{,}1$).', u: 'cm' },
          { emoji: '🪜', s: 'Une échelle de $' + hyp + '$ m est appuyée contre un mur et forme un angle de $' + a + '°$ avec le sol. À quelle distance du mur se trouve son pied (en m, arrondi à $0{,}1$) ?', u: 'm' },
          { emoji: '🪁', s: 'Le fil tendu d\'un cerf-volant mesure $' + hyp + '$ m et forme un angle de $' + a + '°$ avec le sol. Quelle distance horizontale sépare la main de l\'enfant du point situé juste sous le cerf-volant (en m, arrondi à $0{,}1$) ?', u: 'm' },
          { emoji: '🏠', s: 'Le pan de toit d\'une maison mesure $' + hyp + '$ m et forme un angle de $' + a + '°$ avec l\'horizontale. Quelle largeur horizontale couvre-t-il (en m, arrondi à $0{,}1$) ?', u: 'm' },
          { emoji: '🔌', s: 'Un câble tendu de $' + hyp + '$ m relie un poteau au sol en formant un angle de $' + a + '°$ avec le sol. À quelle distance horizontale du poteau est-il fixé (en m, arrondi à $0{,}1$) ?', u: 'm' },
          { emoji: '🪵', s: 'Une planche de $' + hyp + '$ dm est appuyée sur un muret et forme un angle de $' + a + '°$ avec le sol. Quelle longueur horizontale couvre-t-elle (en dm, arrondi à $0{,}1$) ?', u: 'dm' }
        ]);
        return {
          statement: scenario.emoji + ' ' + scenario.s + ' <br/><em>On donne $\\cos(' + a + '°) \\approx ' + fr(cos) + '$.</em>',
          answer: adj,
          tolerance: 0.2,
          unit: scenario.u,
          hint: 'Le côté adjacent vaut l\'hypoténuse multipliée par le cosinus de l\'angle : $' + hyp + ' \\times ' + fr(cos) + '$.',
          solution: [
            'De $\\cos(' + a + '°) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$, on tire $\\text{adjacent} = \\text{hypoténuse} \\times \\cos(' + a + '°)$.',
            '$\\text{adjacent} = ' + hyp + ' \\times ' + fr(cos) + ' \\approx ' + fr(adj) + '$ ' + scenario.u + '.',
            'Contrôle : le résultat est plus petit que $' + hyp + '$, ce qui est normal puisque le cosinus est inférieur à $1$.'
          ]
        };
      }
    },
    probleme: {
      context: 'Une rampe d\'accès pour personnes à mobilité réduite forme un angle de $5°$ avec le sol horizontal. La longueur de la rampe est $4$ m ($\\cos 5° \\approx 0{,}9962$).',
      tasks: [
        'Calculer la longueur horizontale couverte par la rampe (arrondir à $0{,}01$ m).',
        'La hauteur de la marche surmontée est $h$. En utilisant le théorème de Pythagore avec la longueur de la rampe (hypoténuse $= 4$ m) et la distance horizontale trouvée à la question précédente, calculer $h$ (arrondie au centimètre).'
      ],
      solutions: [
        '$\\text{adj} = 4 \\times \\cos(5°) \\approx 4 \\times 0{,}9962 = 3{,}98$ m (arrondi au centimètre).',
        '$h = \\sqrt{4^2 - 3{,}9848^2} \\approx \\sqrt{16 - 15{,}88} \\approx \\sqrt{0{,}12} \\approx 0{,}35$ m $= 35$ cm (on garde plus de décimales pour l\'adjacent dans ce calcul, sinon l\'arrondi fausse le résultat).'
      ],
      finalAnswer: 'La rampe couvre $\\approx 3{,}98$ m horizontalement, pour une marche d\'environ $35$ cm de hauteur.'
    },

    evaluation: {
      title: 'Évaluation — Cosinus d\'un angle aigu',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle $ABC$ (angle droit en $C$) avec $AB = 13\\,\\text{cm}$ et $AC = 5\\,\\text{cm}$, calculer $\\cos(\\hat{A})$. Donner le résultat décimal arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\cos(\\hat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}} = \\dfrac{AC}{AB} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        {
          statement: 'Un triangle rectangle a un angle de $45°$ et une hypoténuse de $10\\,\\text{cm}$. Calculer le côté adjacent (en cm, arrondi à $0{,}1$). On donne $\\cos(45°) \\approx 0{,}707$.',
          type: 'numeric',
          answer: 7.07,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$\\text{adjacent} = \\text{hypoténuse} \\times \\cos(45°) = 10 \\times 0{,}707 = 7{,}07\\,\\text{cm}$.'
        },
        {
          /* Q3 — « modéliser ». L'énoncé a été mis en situation le 2026-09-13 :
             il était auparavant purement formel (« cos = 0,6, hypoténuse = 15 »),
             donc une multiplication à poser. En situation, l'élève doit d'abord
             décider laquelle des longueurs joue le rôle de l'hypoténuse — la
             câble, pas le sol — ce qui est la mise en modèle. */
          statement: 'Un câble rectiligne, tendu du haut d\'un mât jusqu\'au sol, mesure $15\\,\\text{m}$ et forme avec le sol horizontal un angle $\\widehat{A}$ tel que $\\cos(\\widehat{A}) = 0{,}6$. Quelle longueur horizontale le câble couvre-t-il, en m ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0.01,
          unit: 'm',
          points: 2,
          correction: 'Première décision, avant tout calcul : le câble est le côté le plus long du triangle, c\'est donc lui l\'hypoténuse. La longueur horizontale cherchée est le côté <strong>adjacent</strong> à l\'angle $\\widehat{A}$.<br/><br/>' +
            'De $\\cos(\\widehat{A}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$, on tire $\\text{adjacent} = \\text{hypoténuse} \\times \\cos(\\widehat{A}) = 15 \\times 0{,}6 = 9\\,\\text{m}$.<br/><br/>' +
            'Contrôle : $9 < 15$, le côté trouvé est bien plus court que le câble. Prendre le sol pour l\'hypoténuse aurait donné $15 \\div 0{,}6 = 25\\,\\text{m}$, soit une longueur horizontale plus grande que le câble lui-même — impossible.'
        },
        {
          statement: 'Un élève écrit $\\cos(\\hat{B}) = \\dfrac{\\text{hypoténuse}}{\\text{adjacent}}$. Quelle est son erreur ?',
          type: 'multiple-choice',
          options: [
            'Il n\'y a pas d\'erreur',
            'Il a inversé le rapport : le cosinus est $\\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
            'Le cosinus utilise le côté opposé, pas l\'adjacent',
            'Le rapport est juste, mais il fallait l\'écrire pour $\\hat{A}$ : le cosinus ne se calcule que pour l\'angle $\\hat{A}$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le cosinus d\'un angle aigu est $\\cos(\\hat{B}) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$. L\'élève a inversé numérateur et dénominateur. Le rapport $\\dfrac{\\text{hyp}}{\\text{adj}}$ est toujours $\\geq 1$, ce qui est impossible pour un cosinus d\'angle aigu.<br/><br/>Enfin, le cosinus se calcule pour n\'importe quel angle aigu du triangle, $\\hat{A}$ comme $\\hat{B}$ : seul le côté adjacent change.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancienne
             question se répondait par lecture (« $\cos \hat A = 0,5 = \cos 60°$
             donc $60°$ »), sans démarche. Ici le cosinus demandé ne peut pas être
             calculé avec les données brutes : il faut d'abord retrouver
             l'hypoténuse par Pythagore, ce que l'énoncé ne souffle pas. */
          statement: 'Un triangle $ABC$ est rectangle en $C$. On mesure $AC = 9\\,\\text{cm}$ et $BC = 12\\,\\text{cm}$. Calculer $\\cos(\\widehat{A})$, arrondi au centième.',
          type: 'numeric',
          answer: 0.6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Le cosinus de $\\widehat{A}$ est le quotient du côté adjacent par l\'hypoténuse. Le côté adjacent est $AC = 9\\,\\text{cm}$, mais l\'hypoténuse $AB$ n\'est pas donnée : il faut commencer par la calculer.<br/><br/>' +
            'Le triangle étant rectangle en $C$, son hypoténuse est $[AB]$ : $AB^2 = 9^2 + 12^2 = 81 + 144 = 225$, donc $AB = 15\\,\\text{cm}$.<br/><br/>' +
            'Maintenant seulement : $\\cos(\\widehat{A}) = \\dfrac{AC}{AB} = \\dfrac{9}{15} = 0{,}6$.<br/><br/>' +
            'Contrôle : un cosinus d\'angle aigu est toujours compris entre $0$ et $1$, et $0{,}6$ l\'est bien. Diviser par $12$ au lieu de $15$ aurait donné $0{,}75$ — un piège classique : $BC$ est le côté opposé, pas l\'hypoténuse.'
        }
      ]
    }
  }
);
