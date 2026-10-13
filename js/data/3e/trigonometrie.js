/* =========================================================
   Spark Learning – data/3e/trigonometrie.js
   Module : Trigonométrie dans le Triangle Rectangle (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: 'trigonometrie',
    level: 1, subject: 'maths',
    icon: '📐',
    title: 'Trigonométrie dans le Triangle Rectangle',
    subtitle: 'SOH-CAH-TOA, angles, hypoténuse',
    keywords: ['SOHCAHTOA', 'cos/sin/tan', 'Triangle rectangle', 'Angle'],
    physics: 'Décomposition de forces, lois de Snell-Descartes',

    cours: {
      intro: 'Tu dois donner la hauteur du clocher de ton village. Il pleut depuis trois jours : pas la moindre ombre au sol, donc Thalès est hors-jeu. Impossible d\'y grimper, impossible de tendre un décamètre le long du mur.<br/><br/>' +
        'Tu as seulement deux choses. Tu peux mesurer la distance du pied du clocher jusqu\'à toi : $25$ mètres. Et tu peux viser le sommet avec un rapporteur monté sur un bâton, ce qui te donne un <strong>angle</strong> de $40°$ au-dessus de l\'horizontale.<br/><br/>' +
        '<strong>Est-ce assez pour conclure ?</strong><br/><br/>' +
        'Regarde ce que tu possèdes : un triangle rectangle dont tu connais <strong>un seul côté</strong> et <strong>un angle</strong>. Pythagore ne sert à rien — il lui faut deux côtés, et il ne sait pas ce qu\'est un angle. Thalès ne sert à rien non plus — il lui faut un second triangle, celui de l\'ombre, et il n\'y en a pas.<br/><br/>' +
        'Il manque donc un outil, et un seul : quelque chose qui relie un <strong>angle</strong> à des <strong>longueurs</strong>. C\'est exactement ce que fait la <strong>trigonométrie</strong>. Ici $\\tan(40°) \\approx 0{,}84$, et la hauteur vaut $25 \\times 0{,}84 \\approx 21$ mètres.<br/><br/>' +
        'Pourquoi cela fonctionne-t-il ? Parce que dans tout triangle rectangle, les rapports entre les côtés dépendent <strong>uniquement des angles</strong> — jamais de la taille du triangle. Un triangle deux fois plus grand a exactement les mêmes rapports. La trigonométrie exploite cette invariance : $\\sin$, $\\cos$ et $\\tan$ sont des fonctions de l\'angle, constantes pour tous les triangles semblables.<br/><br/>' +
        '<strong>SOH-CAH-TOA</strong> est le mémo fondamental : Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent. Chaque fonction est liée à une paire précise de côtés, et tout l\'art consiste à repérer laquelle tu connais.<br/><br/>' +
        'En physique, <strong>décomposer une force</strong> ou une vitesse revient à trouver les <strong>triangles rectangles cachés</strong> dans la situation réelle.<br/><br/>' +
        'La <strong>relation fondamentale</strong> $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ relie sinus et cosinus pour tout angle — c\'est le théorème de Pythagore exprimé en rapports trigonométriques.',
      definitions: [
        { term: 'Hypoténuse', def: 'Le <strong>plus grand côté</strong> du triangle rectangle, situé en face de l\'angle droit. C\'est toujours le dénominateur dans les formules de $\\sin$ et $\\cos$.' },
        { term: 'Sinus', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\sin(\\theta) = \\dfrac{\\text{côté opposé}}{\\text{hypoténuse}}$.<br/><br/>Le sinus mesure le rapport entre le côté <strong>en face</strong> de l\'angle et l\'hypoténuse.' },
        { term: 'Cosinus', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\cos(\\theta) = \\dfrac{\\text{côté adjacent}}{\\text{hypoténuse}}$.<br/><br/>Le cosinus mesure le rapport entre le côté <strong>à côté</strong> de l\'angle et l\'hypoténuse.' },
        { term: 'Tangente', def: 'Pour un angle $\\theta$ dans un triangle rectangle : $\\tan(\\theta) = \\dfrac{\\text{côté opposé}}{\\text{côté adjacent}} = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$.<br/><br/>La tangente ne fait <strong>pas intervenir l\'hypoténuse</strong>.' }
      ],
      method: {
        title: 'Méthode SOH-CAH-TOA',
        steps: [
          '<strong>SOH</strong> : $\\sin(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{Hypoténuse}}$.<br/>Le côté « Opposé » est celui qui <strong>ne touche pas</strong> l\'angle $\\theta$.',
          '<strong>CAH</strong> : $\\cos(\\theta) = \\dfrac{\\text{côté Adjacent}}{\\text{Hypoténuse}}$.<br/>Le côté « Adjacent » est celui qui <strong>touche</strong> l\'angle $\\theta$ (l\'autre côté, pas l\'hypoténuse).',
          '<strong>TOA</strong> : $\\tan(\\theta) = \\dfrac{\\text{côté Opposé}}{\\text{côté Adjacent}} = \\dfrac{\\sin(\\theta)}{\\cos(\\theta)}$.<br/>La tangente ne fait <strong>pas</strong> intervenir l\'hypoténuse.',
          '<strong>Retrouver un angle</strong> : quand le rapport est connu, on remonte à l\'angle avec les touches $\\cos^{-1}$, $\\sin^{-1}$ ou $\\tan^{-1}$ de la calculatrice (parfois notées $\\arccos$, $\\arcsin$, $\\arctan$).<br/>Exemple : si $\\cos(\\theta) = 0{,}6$, alors $\\theta = \\cos^{-1}(0{,}6) \\approx 53°$.'
        ]
      },
      example: {
        statement: 'Dans un triangle rectangle, l\'hypoténuse mesure $13$ cm et un angle vaut $30°$. Calculer le côté opposé et le côté adjacent à cet angle.',
        steps: [
          '<strong>Côté opposé</strong> (SOH) : $\\sin(30°) = \\dfrac{\\text{opp}}{13}$, donc $\\text{opp} = 13 \\times \\sin(30°) = 13 \\times 0{,}5 = 6{,}5$ cm.',
          '<strong>Côté adjacent</strong> (CAH) : $\\cos(30°) = \\dfrac{\\text{adj}}{13}$, donc $\\text{adj} = 13 \\times \\cos(30°) = 13 \\times \\dfrac{\\sqrt{3}}{2} \\approx 11{,}26$ cm.',
          '<strong>Vérification</strong> par Pythagore : $6{,}5^2 + 11{,}26^2 = 42{,}25 + 126{,}79 = 169{,}04 \\approx 13^2 = 169$ ✓'
        ],
        answer: 'Côté opposé $= 6{,}5$ cm ; côté adjacent $\\approx 11{,}26$ cm.'
      },
      formulas: [
        '$\\sin(30°) = 0{,}5$, $\\cos(30°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$',
        '$\\sin(45°) = \\cos(45°) = \\frac{\\sqrt{2}}{2} \\approx 0{,}707$',
        '$\\sin(60°) = \\frac{\\sqrt{3}}{2} \\approx 0{,}866$, $\\cos(60°) = 0{,}5$',
        '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ (relation fondamentale)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle rectangle',
        title: 'SOH-CAH-TOA : repérer opposé, adjacent et hypoténuse',
        description: 'Le rôle de chaque côté dépend de l\'angle de référence $\\theta$ choisi : identifie-le avant d\'appliquer une formule.',
        svg: `
          <svg viewBox="0 0 380 316" role="img" aria-labelledby="trig3e-graph-title trig3e-graph-desc">
            <title id="trig3e-graph-title">Triangle rectangle et SOH-CAH-TOA</title>
            <desc id="trig3e-graph-desc">Triangle rectangle avec l'angle de reference theta, le cote oppose, le cote adjacent et l'hypotenuse identifies, les trois formules sinus cosinus tangente, et l'exemple chiffre du cours avec une hypotenuse de 13 cm et un angle de 30 degres.</desc>

            <rect x="16" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="26" y="27">SOH</text>
            <text class="tick-label" x="26" y="43">sin θ = opp / hyp</text>

            <rect x="134" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
            <text class="annotation-label" x="144" y="27">CAH</text>
            <text class="tick-label" x="144" y="43">cos θ = adj / hyp</text>

            <rect x="252" y="12" width="112" height="38" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
            <text class="annotation-label" x="262" y="27">TOA</text>
            <text class="tick-label" x="262" y="43">tan θ = opp / adj</text>

            <!-- Trace A L'ECHELLE de l'exemple du cours : 1 cm = 15 px, θ = 30°.
                 hypotenuse 13 cm = 195 px, oppose 6,5 cm = 98 px, adjacent
                 11,26 cm = 169 px. L'ancien trace valait 35° et etait, au pixel
                 pres, LE MEME que celui du chapitre « Cosinus » qui, lui,
                 annonce 60° : un gabarit generique presente comme l'exemple
                 chiffre du chapitre (audit du 2026-08-16). -->
            <polygon points="100,230 269,230 100,132" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="100" y1="230" x2="100" y2="132"></line>
            <line class="frame-line" x1="100" y1="230" x2="269" y2="230"></line>
            <line class="curve-main" x1="269" y1="230" x2="100" y2="132"></line>

            <path class="axis" d="M100 216 L114 216 L114 230"></path>

            <path class="guide-line" d="M247 230 A22 22 0 0 1 250 219" fill="none"></path>
            <text class="annotation-label" x="234" y="222">θ</text>

            <circle class="plot-point-alt" cx="100" cy="230" r="5"></circle>
            <circle class="plot-point-alt" cx="100" cy="132" r="5"></circle>
            <circle class="plot-point" cx="269" cy="230" r="5"></circle>

            <text class="annotation-label" x="152" y="248">adjacent</text>
            <text class="annotation-label" x="34" y="186">opposé</text>
            <text class="annotation-label" x="212" y="166">hypoténuse</text>
            <line class="guide-line" x1="216" y1="170" x2="190" y2="179"></line>

            <rect x="16" y="258" width="348" height="50" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 20%, var(--border))"></rect>
            <text class="tick-label" x="26" y="272">Exemple du cours : hyp = 13 cm, θ = 30°</text>
            <text class="tick-label" x="26" y="288">opposé = 13 × sin 30° = 6,5 cm</text>
            <text class="tick-label" x="26" y="304">adjacent = 13 × cos 30° ≈ 11,26 cm</text>
          </svg>
        `,
        notes: [
          'Le côté opposé à $\\theta$ ne le touche jamais ; le côté adjacent le touche sans être l\'hypoténuse ; l\'hypoténuse fait toujours face à l\'angle droit.',
          'SOH-CAH-TOA relie chaque paire de côtés à une fonction : Sinus, Cosinus, Tangente.',
          'Avec hyp $= 13$ cm et $\\theta = 30°$, on retrouve les longueurs de l\'exemple du cours : opposé $= 6{,}5$ cm et adjacent $\\approx 11{,}26$ cm.'
        ],
        reading: 'Repère d\'abord l\'angle droit, puis l\'angle $\\theta$ : le troisième sommet donne l\'hypoténuse, le côté opposé à l\'angle droit.',
        caption: 'Triangle de référence pour SOH-CAH-TOA, avec l\'exemple chiffré du cours (hypoténuse 13 cm, angle 30°).'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. SOH-CAH-TOA se récite très bien sans être
         compris, et les trois points où la récitation lâche sont :

           1. « ce côté, c'est l'adjacent » — l'élève apprend les rôles comme
              des étiquettes collées au DESSIN, alors qu'ils dépendent de
              l'angle choisi. Il garde donc le même rapport quand l'énoncé
              change d'angle ;
           2. « je ne sais pas laquelle des trois prendre » — il connaît les
              trois formules mais n'a aucune procédure pour choisir ;
           3. « j'ai trouvé un cosinus de 1,4 et je l'ai gardé » — aucun
              contrôle de vraisemblance, donc l'erreur passe.

         TOUTES LES COORDONNÉES SONT CALCULÉES, jamais posées à vue :

         Schéma 1 : triangle 3-4-5 mis à l'échelle (90 ; 120 ; 150 unités de
         viewBox), rectangle en B. Vérifié par arc cosinus : l'angle en A vaut
         53,13° et celui en C 36,87°, de somme exactement 90°. Les deux copies
         sont la MÊME figure translatée de 200 : aucune des deux n'est
         redessinée, ce qui garantit qu'elles sont identiques au pixel près.

         Schéma 3 : triangle rectangle d'angle 60° exactement — hypoténuse 120,
         adjacent 120 × cos 60° = 60, opposé 120 × sin 60° = 103,92. Vérifié :
         l'angle mesuré sur le dessin vaut 60,00° et l'hypoténuse mesure 120,00.
         Les trois barres de comparaison sont tracées à 110 unités par unité de
         valeur : sin 0,87 donne 95,26 ; cos 0,50 donne 55 ; tan 1,73 donne
         190,53, qui dépasse donc RÉELLEMENT le repère de la valeur 1 posé à
         110. La figure ne triche pas sur ce dépassement, elle le mesure. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Le même côté est adjacent pour un angle et opposé pour l\'autre',
          description: 'Un seul triangle, dessiné deux fois à l\'identique. Seul l\'<strong>angle de référence</strong> change. Le côté vertical est <strong>adjacent</strong> à l\'angle du haut et <strong>opposé</strong> à l\'angle du bas : ce n\'est pas le dessin qui décide du rôle d\'un côté, c\'est l\'angle que tu choisis.',
          svg: `
            <svg viewBox="0 0 400 236" role="img" aria-labelledby="trig-role-title trig-role-desc">
              <title id="trig-role-title">Le role d'un cote depend de l'angle choisi</title>
              <desc id="trig-role-desc">Le meme triangle rectangle est dessine deux fois, exactement a l'identique : l'angle droit est en bas a gauche, le cote vertical mesure 90 unites, le cote horizontal 120 unites et l'hypotenuse 150 unites. A gauche, l'angle de reference est celui du sommet du haut : le cote vertical le touche, il est donc adjacent, et le cote horizontal, en face, est oppose. A droite, l'angle de reference est celui du sommet de droite : les roles des deux memes cotes sont echanges, le vertical devient oppose et l'horizontal devient adjacent. L'hypotenuse, elle, ne change jamais de nom dans les deux cas.</desc>

              <!-- LE MEME TRIANGLE, DEUX FOIS. Triangle 3-4-5 a l'echelle :
                   B(46 ; 168) angle droit, A(46 ; 78) au-dessus, C(166 ; 168) a
                   droite. Cotes 90, 120 et 150, verifies a la racine carree.
                   Angles verifies a l'arc cosinus : 53,13° en A, 36,87° en C,
                   de somme exactement 90°. La copie de droite est la MEME
                   figure translatee de 200, donc identique au pixel pres. -->

              <!-- GAUCHE : angle de reference en A, le sommet du haut. -->
              <text class="annotation-label" x="106" y="22" text-anchor="middle">angle du haut choisi</text>
              <polygon class="frame-line" points="46,168 46,78 166,168"
                       fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></polygon>
              <path class="axis" d="M46 154 L60 154 L60 168" fill="none"></path>
              <path class="curve-main" d="M46 102 A24 24 0 0 0 65.2 92.4" fill="none"></path>
              <circle class="plot-point" cx="46" cy="78" r="5"></circle>
              <text class="annotation-label" x="38" y="74" text-anchor="end">A</text>
              <text class="tick-label" x="38" y="176" text-anchor="end">B</text>
              <text class="tick-label" x="172" y="176" text-anchor="start">C</text>
              <text class="annotation-label" x="40" y="126" text-anchor="end">adjacent</text>
              <text class="annotation-label" x="106" y="188" text-anchor="middle">opposé</text>
              <text class="annotation-label" x="122" y="112" text-anchor="middle">hypoténuse</text>
              <text class="label-soft" x="106" y="212" text-anchor="middle">le côté vertical touche</text>
              <text class="label-soft" x="106" y="228" text-anchor="middle">l'angle choisi</text>

              <!-- DROITE : angle de reference en C, le sommet de droite. Meme
                   triangle translate de 200 : B(246 ; 168), A(246 ; 78),
                   C(366 ; 168). -->
              <text class="annotation-label" x="306" y="22" text-anchor="middle">angle de droite choisi</text>
              <polygon class="frame-line" points="246,168 246,78 366,168"
                       fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></polygon>
              <path class="axis" d="M246 154 L260 154 L260 168" fill="none"></path>
              <path class="curve-main" d="M342 168 A24 24 0 0 1 346.8 153.6" fill="none"></path>
              <circle class="plot-point" cx="366" cy="168" r="5"></circle>
              <text class="tick-label" x="238" y="74" text-anchor="end">A</text>
              <text class="tick-label" x="238" y="176" text-anchor="end">B</text>
              <text class="annotation-label" x="374" y="176" text-anchor="start">C</text>
              <text class="annotation-label" x="240" y="126" text-anchor="end">opposé</text>
              <text class="annotation-label" x="300" y="188" text-anchor="middle">adjacent</text>
              <text class="annotation-label" x="322" y="112" text-anchor="middle">hypoténuse</text>
              <text class="label-soft" x="306" y="212" text-anchor="middle">le même côté vertical</text>
              <text class="label-soft" x="306" y="228" text-anchor="middle">ne le touche plus</text>
            </svg>
          `,
          notes: [
            'Les deux triangles sont <strong>le même</strong> : mêmes longueurs $90$, $120$ et $150$, même angle droit en $B$. Rien n\'a bougé sauf l\'angle qu\'on regarde.',
            'Le côté vertical $[AB]$ <strong>touche</strong> l\'angle $\\widehat{A}$ : il en est l\'adjacent. Il ne touche <strong>pas</strong> l\'angle $\\widehat{C}$ : il en est l\'opposé.',
            'L\'hypoténuse, elle, ne change jamais de nom : elle est toujours en face de l\'angle droit, quel que soit l\'angle choisi.',
            '<strong>Le geste qui sauve</strong> : avant d\'écrire une formule, entoure l\'angle de l\'énoncé au crayon, puis demande-toi côté par côté « celui-ci le touche, oui ou non ? ». Les étiquettes se posent à ce moment-là, jamais avant.'
          ],
          reading: 'Pose ton doigt sur le côté vertical à gauche, lis son étiquette, puis pose-le sur le même côté vertical à droite : l\'étiquette a changé alors que le côté, lui, est identique.',
          caption: 'Le même triangle rectangle avec deux angles de référence différents : les rôles adjacent et opposé s\'échangent, l\'hypoténuse ne bouge pas.'
        },
        {
          theme: 'maths',
          kicker: 'Méthode',
          title: 'Ce sont les deux longueurs en jeu qui choisissent la formule',
          description: 'Tu n\'as pas à hésiter entre les trois formules : repère la longueur que tu <strong>connais</strong> et celle que tu <strong>cherches</strong>, puis lis la case correspondante. Chaque paire de côtés n\'appartient qu\'à <strong>une seule</strong> des trois fonctions.',
          svg: `
            <svg viewBox="0 0 400 244" role="img" aria-labelledby="trig-choix-title trig-choix-desc">
              <title id="trig-choix-title">Tableau de choix entre sinus cosinus et tangente</title>
              <desc id="trig-choix-desc">Un tableau a double entree. Les trois lignes portent les paires de cotes possibles : oppose et hypotenuse, adjacent et hypotenuse, oppose et adjacent. En face de chaque paire, une seule fonction est indiquee : le sinus pour oppose et hypotenuse, le cosinus pour adjacent et hypotenuse, la tangente pour oppose et adjacent. La derniere colonne rappelle la formule complete de chaque ligne. Le message du tableau est qu'une paire de cotes ne correspond jamais qu'a une seule des trois fonctions, il n'y a donc jamais de choix a faire au hasard.</desc>

              <!-- Tableau a trois lignes de 52 unites, de y = 62 a y = 218.
                   Colonnes : paire de cotes (16 a 196), fonction (196 a 268),
                   formule (268 a 388). -->
              <text class="annotation-label" x="200" y="24" text-anchor="middle">les deux longueurs en jeu</text>
              <text class="label-soft" x="200" y="44" text-anchor="middle">décident seules de la formule</text>

              <line class="grid-line" x1="16" y1="62" x2="388" y2="62"></line>

              <rect x="16" y="62" width="372" height="52" rx="8"
                    fill="color-mix(in srgb, var(--diagram-accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--diagram-accent) 26%, var(--border))"></rect>
              <text class="annotation-label" x="30" y="84">opposé et hypoténuse</text>
              <text class="label-soft" x="30" y="104">les deux longueurs connues ou cherchées</text>
              <text class="annotation-label" x="232" y="94" text-anchor="middle">sinus</text>
              <text class="tick-label" x="328" y="94" text-anchor="middle">sin θ = opp / hyp</text>

              <rect x="16" y="122" width="372" height="52" rx="8"
                    fill="color-mix(in srgb, var(--accent) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--accent) 26%, var(--border))"></rect>
              <text class="annotation-label" x="30" y="144">adjacent et hypoténuse</text>
              <text class="label-soft" x="30" y="164">les deux longueurs connues ou cherchées</text>
              <text class="annotation-label" x="232" y="154" text-anchor="middle">cosinus</text>
              <text class="tick-label" x="328" y="154" text-anchor="middle">cos θ = adj / hyp</text>

              <rect x="16" y="182" width="372" height="52" rx="8"
                    fill="color-mix(in srgb, var(--secondary) 9%, var(--bg-card))"
                    stroke="color-mix(in srgb, var(--secondary) 26%, var(--border))"></rect>
              <text class="annotation-label" x="30" y="204">opposé et adjacent</text>
              <text class="label-soft" x="30" y="224">l'hypoténuse ne sert pas ici</text>
              <text class="annotation-label" x="232" y="214" text-anchor="middle">tangente</text>
              <text class="tick-label" x="328" y="214" text-anchor="middle">tan θ = opp / adj</text>
            </svg>
          `,
          notes: [
            'Il n\'existe que <strong>trois paires</strong> de côtés dans un triangle rectangle, et chaque paire appartient à une seule fonction. Le choix n\'est donc jamais ouvert.',
            'La ligne se lit de la même façon que la longueur soit connue ou cherchée : ce qui compte est la <strong>paire</strong>, pas le sens du calcul.',
            'Si l\'hypoténuse n\'apparaît ni dans ce que tu connais ni dans ce que tu cherches, la réponse est forcément la <strong>tangente</strong> — c\'est la seule des trois qui ne la fait pas intervenir.',
            '<strong>La procédure complète</strong> : repère l\'angle, note les deux longueurs en jeu, lis la ligne du tableau, écris la formule, remplace. Cinq gestes, aucun ne demande de deviner.'
          ],
          reading: 'Commence par la colonne de gauche : cherches-y la paire de longueurs de ton énoncé. La fonction à employer est écrite juste à droite, et la formule complète encore à droite.',
          caption: 'Tableau de choix : chaque paire de côtés ne correspond qu\'à une seule des trois fonctions trigonométriques.'
        },
        {
          theme: 'maths',
          kicker: 'Contrôle',
          title: 'Un sinus ne dépasse jamais 1, une tangente peut valoir ce qu\'elle veut',
          description: 'Le sinus et le cosinus comparent un côté à l\'<strong>hypoténuse</strong>, qui est le plus grand côté : ces deux rapports restent donc toujours entre $0$ et $1$. La tangente, elle, compare deux côtés de l\'angle droit entre eux, et <strong>rien ne l\'empêche de dépasser $1$</strong>.',
          svg: `
            <svg viewBox="0 0 400 258" role="img" aria-labelledby="trig-borne-title trig-borne-desc">
              <title id="trig-borne-title">Sinus et cosinus bornes par un, tangente sans plafond</title>
              <desc id="trig-borne-desc">A gauche, un triangle rectangle dont l'angle de reference mesure exactement soixante degres : l'hypotenuse mesure 120 unites, le cote adjacent 60 et le cote oppose environ 104. A droite, trois barres horizontales representant les valeurs du sinus, du cosinus et de la tangente de cet angle, toutes tracees a la meme echelle. Un trait vertical marque la valeur un. La barre du sinus, qui vaut zero virgule quatre-vingt-sept, et celle du cosinus, qui vaut zero virgule cinquante, s'arretent avant ce trait. La barre de la tangente, qui vaut un virgule soixante-treize, le depasse nettement et continue au-dela.</desc>

              <!-- GAUCHE : triangle rectangle d'angle EXACTEMENT 60°.
                   Hypotenuse 120 ; adjacent = 120 × cos 60° = 60 ; oppose =
                   120 × sin 60° = 103,92. Sommets : B(70 ; 180) angle droit,
                   C(130 ; 180) sommet de l'angle de reference, A(70 ; 76,08).
                   VERIFIE : l'angle mesure en C vaut 60,00° et l'hypotenuse
                   mesure 120,00 unites. -->
              <polygon class="frame-line" points="70,180 130,180 70,76.08"
                       fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></polygon>
              <path class="axis" d="M70 166 L84 166 L84 180" fill="none"></path>
              <path class="curve-main" d="M108 180 A22 22 0 0 1 119 160.95" fill="none"></path>
              <text class="annotation-label" x="100" y="174" text-anchor="middle">60°</text>
              <text class="tick-label" x="62" y="132" text-anchor="end">opposé</text>
              <text class="tick-label" x="62" y="148" text-anchor="end">104</text>
              <text class="tick-label" x="100" y="196" text-anchor="middle">adjacent 60</text>
              <text class="tick-label" x="126" y="118" text-anchor="start">hyp 120</text>
              <text class="label-soft" x="100" y="222" text-anchor="middle">l'hypoténuse est</text>
              <text class="label-soft" x="100" y="238" text-anchor="middle">toujours la plus longue</text>

              <!-- DROITE : les trois valeurs a la meme echelle, 110 unites de
                   viewBox pour la valeur 1, depart a x = 200.
                   sin 60° = 0,87 -> 95,26 -> fin a 295,26
                   cos 60° = 0,50 -> 55,00 -> fin a 255,00
                   tan 60° = 1,73 -> 190,53 -> fin a 390,53, donc au-dela du
                   repere de la valeur 1 pose a 310. Le depassement est reel,
                   pas suggere. La barre est ecretee a 388 pour rester dans le
                   cadre, et la fleche dit qu'elle continue. -->
              <line class="grid-line" x1="310" y1="44" x2="310" y2="226"></line>
              <text class="tick-label" x="310" y="36" text-anchor="middle">valeur 1</text>

              <text class="tick-label" x="196" y="76" text-anchor="end">sinus</text>
              <line class="curve-main" x1="200" y1="72" x2="295.26" y2="72"></line>
              <circle class="plot-point" cx="295.26" cy="72" r="4"></circle>
              <text class="tick-label" x="302" y="68" text-anchor="start">0,87</text>

              <text class="tick-label" x="196" y="134" text-anchor="end">cosinus</text>
              <line class="curve-main" x1="200" y1="130" x2="255" y2="130"></line>
              <circle class="plot-point" cx="255" cy="130" r="4"></circle>
              <text class="tick-label" x="262" y="126" text-anchor="start">0,50</text>

              <text class="tick-label" x="196" y="192" text-anchor="end">tangente</text>
              <line class="curve-main" x1="200" y1="188" x2="388" y2="188"></line>
              <text class="tick-label" x="330" y="184" text-anchor="start">1,73</text>
              <text class="label-soft" x="294" y="216" text-anchor="middle">elle passe le trait</text>
              <text class="label-soft" x="294" y="240" text-anchor="middle">et continue</text>
            </svg>
          `,
          notes: [
            'Ici $\\sin(60°) \\approx 0{,}87$ et $\\cos(60°) = 0{,}50$ : les deux barres s\'arrêtent avant le trait de la valeur $1$, et c\'est toujours le cas.',
            'La raison est géométrique : $\\sin$ et $\\cos$ divisent un côté par l\'<strong>hypoténuse</strong>, qui est le plus long des trois. Le quotient d\'un plus petit par un plus grand ne peut pas dépasser $1$.',
            '$\\tan(60°) \\approx 1{,}73$ dépasse largement. La tangente divise l\'opposé par l\'adjacent, et rien n\'oblige l\'un à être plus petit que l\'autre.',
            '<strong>Le contrôle qui sauve</strong> : si ta calculatrice affiche un sinus ou un cosinus supérieur à $1$, tu as confondu deux côtés ou inversé le quotient. Un résultat au-dessus de $1$ pour une tangente, en revanche, est parfaitement normal.'
          ],
          reading: 'Compare la longueur des trois barres au trait vertical marqué $1$ : les deux premières s\'arrêtent avant, la troisième le franchit et sort du cadre.',
          caption: 'Les trois rapports du même angle de $60°$, tracés à la même échelle : sinus et cosinus restent sous $1$, la tangente le dépasse.'
        }
      ],
      recap: [
        '<strong>SOH-CAH-TOA</strong> : Sinus = Opposé/Hypoténuse, Cosinus = Adjacent/Hypoténuse, Tangente = Opposé/Adjacent.',
        '<strong>Relation fondamentale</strong> : $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$ pour tout angle $\\theta$. Cette relation permet de trouver l\'un si on connaît l\'autre.',
        '<strong>Valeurs remarquables</strong> : connaître par cœur $\\sin$ et $\\cos$ de $30°$, $45°$ et $60°$ est indispensable (on les retrouve dans le triangle équilatéral et le carré).',
        '<strong>Retrouver un angle</strong> : quand on connaît un rapport, on remonte à l\'angle avec les touches $\\cos^{-1}$, $\\sin^{-1}$ ou $\\tan^{-1}$ de la calculatrice.'
      ],
      piege: 'Piège : les mots « opposé » et « adjacent » ne sont <strong>pas collés au dessin</strong>, ils dépendent de l\'angle que tu regardes. Dans un triangle $ABC$ rectangle en $C$, le côté $[BC]$ est <strong>opposé</strong> à $\\widehat{A}$ mais <strong>adjacent</strong> à $\\widehat{B}$.<br/><br/>Avant toute formule, entoure l\'angle de l\'énoncé et demande-toi, côté par côté : « celui-ci touche-t-il l\'angle ? ».<br/><br/>Et après le calcul, un contrôle gratuit : un sinus ou un cosinus <strong>supérieur à $1$</strong> est impossible — tu as inversé le quotient ou confondu deux côtés.'
    },

    quiz: [
      {
        q: 'Dans un triangle rectangle, l\'hypoténuse mesure $10$ cm et un angle vaut $30°$. Quelle est la longueur du côté adjacent à cet angle ?',
        options: ['$8{,}66$ cm', '$5$ cm', '$11{,}55$ cm', '$5{,}77$ cm'],
        answer: 0,
        correction: 'Le côté cherché <strong>touche</strong> l\'angle de $30°$ sans être l\'hypoténuse : c\'est l\'<strong>adjacent</strong>, donc CAH.<br/><br/>$\\cos(30°) = \\dfrac{\\text{adj}}{10}$, d\'où $\\text{adj} = 10 \\times \\cos(30°) = 10 \\times 0{,}866 \\approx 8{,}66$ cm.<br/><br/>Les autres valeurs viennent de confusions fréquentes : $5$ cm est $10 \\times \\sin(30°)$ — le sinus donne le côté <strong>opposé</strong> ; $5{,}77$ cm est $10 \\times \\tan(30°)$ — la tangente ne fait jamais intervenir l\'hypoténuse ; $11{,}55$ cm est $10 \\div \\cos(30°)$, un résultat plus grand que l\'hypoténuse, donc impossible pour un côté de l\'angle droit.'
      },
      {
        q: 'Dans un triangle $ABC$ rectangle en $B$, on connaît $AB = 6$ cm et l\'hypoténuse $AC = 10$ cm. On cherche l\'angle $\\widehat{A}$. Quel calcul est correct ?',
        options: [
          '$\\tan(\\widehat{A}) = \\dfrac{6}{10}$, donc $\\widehat{A} \\approx 31°$',
          '$\\cos(\\widehat{A}) = \\dfrac{6}{10}$, donc $\\widehat{A} \\approx 53°$',
          '$\\sin(\\widehat{A}) = \\dfrac{6}{10}$, donc $\\widehat{A} \\approx 37°$',
          '$\\cos(\\widehat{A}) = \\dfrac{6}{10}$, donc $\\widehat{A} = 0{,}6°$'
        ],
        answer: 1,
        correction: 'Le côté $[AB]$ <strong>touche</strong> l\'angle $\\widehat{A}$ : c\'est son côté <strong>adjacent</strong>. Avec l\'hypoténuse, la paire « adjacent et hypoténuse » appartient au <strong>cosinus</strong>.<br/><br/>$\\cos(\\widehat{A}) = \\dfrac{AB}{AC} = \\dfrac{6}{10} = 0{,}6$, puis la touche $\\cos^{-1}$ de la calculatrice donne $\\widehat{A} \\approx 53°$.<br/><br/>Pourquoi les autres calculs échouent : le sinus relierait $[BC]$, le côté <strong>opposé</strong>, qu\'on ne connaît pas ; la tangente ne fait pas intervenir l\'hypoténuse, or c\'est elle qu\'on connaît ; enfin $0{,}6$ n\'est pas l\'angle mais son <strong>cosinus</strong> — il faut encore appliquer $\\cos^{-1}$ pour remonter à l\'angle.'
      },
      {
        q: 'Dans un triangle $ABC$ rectangle en $C$, quel est le côté <strong>opposé</strong> à l\'angle $\\widehat{A}$ ?',
        options: ['$[AC]$', '$[AB]$', '$[BC]$', 'Cela dépend des longueurs des côtés'],
        answer: 2,
        correction: 'Le côté opposé à un angle est celui qui <strong>ne touche pas</strong> son sommet. Le sommet $A$ appartient à $[AB]$ et à $[AC]$ : le seul côté qui ne le touche pas est $[BC]$.<br/><br/>$[AC]$ touche $A$ sans être l\'hypoténuse : c\'est l\'<strong>adjacent</strong>. $[AB]$ est en face de l\'angle droit $\\widehat{C}$ : c\'est l\'<strong>hypoténuse</strong>, quel que soit l\'angle choisi.<br/><br/>Les longueurs n\'ont rien à voir : le rôle d\'un côté dépend uniquement de l\'<strong>angle</strong> qu\'on regarde. Le même côté $[BC]$ serait l\'adjacent de l\'angle $\\widehat{B}$.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne l'hypoténuse et l'angle,
         calcule le côté adjacent », c'est-à-dire UNE multiplication par un
         cosinus — habillé de six contextes tirés par pick(). Mesure à 60
         tirages : 6 moules d'énoncé, mais **1 seule tâche distincte**. Le
         professeur qui imprimait la banque obtenait donc dix-sept fois la même
         question sous six décors, et l'élève ne rencontrait JAMAIS ni le sinus,
         ni la tangente, ni le calcul d'un angle — c'est-à-dire les deux tiers
         du chapitre.

         C'est exactement le défaut que le cahier des charges (section 11)
         demande de mesurer sur la TÂCHE et non sur le moule : varier le décor
         n'est pas varier l'exercice.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'adjacent'  : la tâche d'origine, conservée (CAH) ;
           - 'oppose'    : le sinus, que l'ancienne banque n'atteignait jamais ;
           - 'tangente'  : la tangente à partir des deux côtés de l'angle droit,
                           seul cas où l'hypoténuse ne sert à rien ;
           - 'angle'     : remonter à l'angle depuis deux longueurs, ce que la
                           calculatrice fait par la touche inverse — c'est la
                           tâche que le brevet pose le plus souvent ;
           - 'hypotenuse': retrouver l'hypoténuse, où le rapport est INVERSE et
                           où l'élève multiplie au lieu de diviser ;
           - 'choisir'   : aucune longueur à trouver, seulement NOMMER le
                           rapport à utiliser. C'est la difficulté réelle du
                           chapitre, et rien ne la travaillait ;
           - 'remarquable': les valeurs exactes de 30°, 45° et 60°, exigibles.

         LES FIGURES suivent le tirage, jamais l'inverse : figureTrigo reçoit
         l'angle et l'hypoténuse réellement tirés, et l'option `inconnu` place
         le point d'interrogation sur la grandeur cherchée — la figure pose la
         question, elle ne la résout pas. La tâche 'choisir' reçoit une figure
         SANS les rôles (roles: false) : les afficher donnerait la réponse,
         puisque c'est précisément le rôle des côtés qu'elle demande
         d'identifier. */
      generate() {
        const tache = pick(['adjacent', 'oppose', 'tangente', 'angle',
                            'hypotenuse', 'choisir', 'remarquable']);

        /* Angles à valeurs remarquables : la réponse reste vérifiable sans
           calculatrice, et l'élève se concentre sur le CHOIX du rapport plutôt
           que sur la saisie machine. */
        const REMARQ = [
          { a: 30, cos: Math.sqrt(3) / 2, sin: 0.5, tan: 1 / Math.sqrt(3) },
          { a: 45, cos: Math.sqrt(2) / 2, sin: Math.sqrt(2) / 2, tan: 1 },
          { a: 60, cos: 0.5, sin: Math.sqrt(3) / 2, tan: Math.sqrt(3) }
        ];

        if (tache === 'adjacent') {
          const r = pick(REMARQ), hyp = rand(8, 20);
          const adj = parseFloat((hyp * r.cos).toFixed(2));
          const ctx = pick([
            'Une <strong>échelle</strong> est appuyée contre un mur et forme un angle avec le sol.',
            'Une <strong>rampe d\'accès</strong> pour fauteuil roulant est inclinée sur le sol.',
            'Un <strong>câble de tyrolienne</strong> est tendu entre deux arbres.',
            'Un <strong>hauban</strong> maintient une antenne depuis son point d\'ancrage au sol.'
          ]);
          return {
            statement: ctx + `<br/><br/>Sa longueur est de $${hyp}$ m et l'angle avec l'horizontale vaut $\\theta = ${r.a}°$.<br/><br/>Calcule la <strong>distance horizontale</strong> couverte, arrondie au centième.`,
            answer: adj, tolerance: 0.05, unit: 'm',
            figure: figureTrigo(r.a, hyp, { inconnu: 'horizontal', unite: 'm' }),
            hint: `Le côté cherché <strong>touche</strong> l'angle sans être la longueur inclinée : c'est le côté <strong>adjacent</strong>.<br/><br/>CAH : $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$.`,
            solution: [
              `Le côté horizontal touche l'angle $\\theta$ et n'est pas la longueur inclinée : c'est l'<strong>adjacent</strong>. La longueur inclinée, face à l'angle droit, est l'<strong>hypoténuse</strong>.`,
              `CAH donne $\\cos(${r.a}°) = \\dfrac{\\text{adjacent}}{${hyp}}$, donc adjacent $= ${hyp} \\times \\cos(${r.a}°) = ${hyp} \\times ${fr(parseFloat(r.cos.toFixed(3)))}$.`,
              `La distance horizontale vaut $${fr(adj)}$ m.<br/><br/>Contrôle : elle est plus petite que les $${hyp}$ m inclinés, ce qui est toujours vrai pour un côté de l'angle droit.`
            ]
          };
        }

        if (tache === 'oppose') {
          /* LE SINUS, que l'ancienne banque n'atteignait jamais. La hauteur
             atteinte est la grandeur la plus parlante du chapitre. */
          const r = pick(REMARQ), hyp = rand(6, 18);
          const opp = parseFloat((hyp * r.sin).toFixed(2));
          const ctx = pick([
            { d: 'Une <strong>échelle</strong> de pompier est déployée depuis le camion.', q: 'la <strong>hauteur</strong> atteinte sur la façade' },
            { d: 'Un <strong>téléphérique</strong> monte en ligne droite vers la station.', q: 'le <strong>dénivelé</strong> gagné' },
            { d: 'Un <strong>cerf-volant</strong> est retenu par une ficelle tendue.', q: 'la <strong>hauteur</strong> du cerf-volant au-dessus de la main' },
            { d: 'Un <strong>toboggan</strong> descend depuis sa plateforme.', q: 'la <strong>hauteur</strong> de la plateforme' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>La longueur inclinée mesure $${hyp}$ m et fait un angle $\\theta = ${r.a}°$ avec l'horizontale.<br/><br/>Calcule ${ctx.q}, arrondie au centième.`,
            answer: opp, tolerance: 0.05, unit: 'm',
            figure: figureTrigo(r.a, hyp, { inconnu: 'vertical', unite: 'm' }),
            hint: `La hauteur ne <strong>touche pas</strong> l'angle $\\theta$ : elle lui est <strong>opposée</strong>.<br/><br/>SOH : $\\sin(\\theta) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}}$.`,
            solution: [
              `La hauteur est le côté <strong>opposé</strong> à l'angle $\\theta$ : il ne le touche pas. C'est donc le sinus qui intervient, et non le cosinus.`,
              `SOH donne $\\sin(${r.a}°) = \\dfrac{\\text{opposé}}{${hyp}}$, donc opposé $= ${hyp} \\times \\sin(${r.a}°) = ${hyp} \\times ${fr(parseFloat(r.sin.toFixed(3)))}$.`,
              `La hauteur vaut $${fr(opp)}$ m.`
            ]
          };
        }

        if (tache === 'tangente') {
          /* LE SEUL CAS où l'hypoténuse ne sert à rien : les deux côtés de
             l'angle droit suffisent. L'élève qui cherche l'hypoténuse à tout
             prix se trahit ici. */
          const adj = rand(4, 15), opp = rand(3, 14);
          const t = parseFloat((opp / adj).toFixed(3));
          const ctx = pick([
            { d: 'Depuis un point du sol, on observe le sommet d\'un <strong>arbre</strong>.', a: 'la distance au pied de l\'arbre', b: 'la hauteur de l\'arbre' },
            { d: 'Depuis un point du sol, on observe le haut d\'un <strong>pylône</strong>.', a: 'la distance au pied du pylône', b: 'la hauteur du pylône' },
            { d: 'Depuis le bord d\'un terrain, on vise le haut d\'un <strong>mât</strong>.', a: 'la distance au pied du mât', b: 'la hauteur du mât' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>On mesure ${ctx.a} : $${adj}$ m. On connaît ${ctx.b} : $${opp}$ m.<br/><br/>Calcule la <strong>tangente</strong> de l'angle sous lequel on voit le sommet, arrondie au millième.`,
            answer: t, tolerance: 0.002, unit: '',
            figure: figureTrigo(Math.atan(opp / adj) * 180 / Math.PI, parseFloat(Math.hypot(adj, opp).toFixed(2)), { inconnu: 'angle', unite: 'm' }),
            hint: `Ici on ne connaît ni ne cherche l'hypoténuse : seulement les deux côtés de l'angle droit.<br/><br/>TOA : $\\tan(\\theta) = \\dfrac{\\text{opposé}}{\\text{adjacent}}$.`,
            solution: [
              `Les deux longueurs données sont les deux côtés de l'angle droit : la hauteur est <strong>opposée</strong> à l'angle, la distance au sol lui est <strong>adjacente</strong>. L'hypoténuse n'intervient pas.`,
              `TOA donne $\\tan(\\theta) = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{${opp}}{${adj}}$.`,
              `Donc $\\tan(\\theta) \\approx ${fr(t, 3)}$.<br/><br/>Contrôle : la tangente dépasse $1$ quand la hauteur dépasse la distance, et ici ${opp > adj ? 'c\'est bien le cas' : 'ce n\'est pas le cas'}.`
            ]
          };
        }

        if (tache === 'angle') {
          /* REMONTER À L'ANGLE. C'est la tâche que le brevet pose le plus
             souvent, et l'ancienne banque ne la posait jamais. On tire des
             longueurs qui donnent un angle rond, pour que la réponse reste
             contrôlable.

             45° EST EXCLU ICI, et c'est un défaut vu seulement à l'épreuve
             (2026-09-13) : à 45° l'adjacent et l'opposé sont égaux, si bien
             que la figure montrait un triangle visiblement isocèle et
             DIVULGUAIT la réponse — une figure ne doit jamais résoudre ce
             qu'elle illustre (section 9). Le tirage se limite donc à 30° et
             60°, les deux angles remarquables qui laissent la question
             ouverte. */
          const r = pick([REMARQ[0], REMARQ[2]]), hyp = rand(8, 20);
          const adj = parseFloat((hyp * r.cos).toFixed(2));
          /* Le pronom de reprise est porté par le CONTEXTE, jamais déduit du
             nom par un test sur la chaîne : « la rampe fait-il » est sorti
             d'une première version qui comparait le nom à « l'échelle ». Un
             accord se transporte avec son nom, il ne se devine pas. */
          const ctx = pick([
            { d: 'Une <strong>rampe d\'accès</strong> couvre une distance horizontale donnée.', n: 'la rampe', p: 'elle' },
            { d: 'Une <strong>échelle</strong> est posée à une certaine distance du mur.', n: 'l\'échelle', p: 'elle' },
            { d: 'Un <strong>plan incliné</strong> de déchargement est posé sur le sol.', n: 'le plan', p: 'il' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>Sa longueur inclinée mesure $${hyp}$ m et la distance horizontale couverte est de $${fr(adj)}$ m.<br/><br/>Quel <strong>angle</strong>, en degrés, ${ctx.n} fait-${ctx.p} avec l'horizontale ?`,
            answer: r.a, tolerance: 0.6, unit: '°',
            figure: figureTrigo(r.a, hyp, { inconnu: 'angle', unite: 'm' }),
            hint: `Tu connais l'adjacent et l'hypoténuse : c'est donc le <strong>cosinus</strong> de l'angle que tu peux calculer.<br/><br/>Pour remonter de $\\cos(\\theta)$ à $\\theta$, utilise la touche $\\cos^{-1}$ de la calculatrice.`,
            solution: [
              `Les deux longueurs connues sont l'<strong>adjacent</strong> et l'<strong>hypoténuse</strong> : c'est le cosinus qui les relie.`,
              `$\\cos(\\theta) = \\dfrac{${fr(adj)}}{${hyp}} \\approx ${fr(parseFloat(r.cos.toFixed(3)))}$`,
              `On remonte à l'angle avec la touche $\\cos^{-1}$ : $\\theta \\approx ${r.a}°$.<br/><br/>Contrôle : le cosinus d'un angle aigu est toujours compris entre $0$ et $1$, et plus l'angle est grand, plus son cosinus est petit.`
            ]
          };
        }

        if (tache === 'hypotenuse') {
          /* LE RAPPORT INVERSE. L'inconnue est au DÉNOMINATEUR : l'élève qui
             applique « longueur x cosinus » par automatisme trouve un résultat
             plus PETIT que la longueur connue, ce qui est impossible pour une
             hypoténuse. Le contrôle de grandeur est écrit dans la solution. */
          const r = pick(REMARQ), adj = rand(5, 14);
          const hyp = parseFloat((adj / r.cos).toFixed(2));
          const ctx = pick([
            { d: 'Un <strong>câble</strong> doit relier le sommet d\'un poteau à un point du sol.', q: 'la longueur de câble nécessaire' },
            { d: 'Une <strong>planche</strong> doit servir de rampe entre le sol et une plateforme.', q: 'la longueur de planche nécessaire' },
            { d: 'Un <strong>tuyau</strong> doit relier en ligne droite deux points d\'un chantier.', q: 'la longueur de tuyau nécessaire' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>La distance horizontale au sol est de $${adj}$ m et l'installation doit faire un angle de $${r.a}°$ avec l'horizontale.<br/><br/>Calcule ${ctx.q}, arrondie au centième.`,
            answer: hyp, tolerance: 0.05, unit: 'm',
            figure: figureTrigo(r.a, hyp, { inconnu: 'hypotenuse', unite: 'm' }),
            hint: `Attention au sens : ici l'inconnue est l'<strong>hypoténuse</strong>, donc elle se trouve au dénominateur du cosinus.<br/><br/>De $\\cos(\\theta) = \\dfrac{\\text{adj}}{\\text{hyp}}$ on tire $\\text{hyp} = \\dfrac{\\text{adj}}{\\cos(\\theta)}$ : on <strong>divise</strong>.`,
            solution: [
              `Avant tout calcul : l'hypoténuse est le plus <strong>long</strong> côté d'un triangle rectangle. Le résultat devra donc dépasser $${adj}$ m — tout résultat plus petit serait à reprendre.`,
              `$\\cos(${r.a}°) = \\dfrac{${adj}}{\\text{hyp}}$, donc $\\text{hyp} = \\dfrac{${adj}}{\\cos(${r.a}°)} = \\dfrac{${adj}}{${fr(parseFloat(r.cos.toFixed(3)))}}$.`,
              `La longueur vaut $${fr(hyp)}$ m, bien plus que $${adj}$ m comme annoncé.`
            ]
          };
        }

        if (tache === 'choisir') {
          /* AUCUNE LONGUEUR À TROUVER : seulement NOMMER le rapport. C'est la
             difficulté réelle du chapitre — l'élève sait calculer, mais choisit
             mal — et rien ne la travaillait. La réponse est codée 1, 2 ou 3
             pour rester une question numérique. */
          const cas = pick([
            { connu: 'l\'hypoténuse et l\'angle', cherche: 'le côté opposé à l\'angle', bon: 1, nom: 'le sinus',
              pourquoi: 'le côté cherché ne touche pas l\'angle, et la longueur connue est l\'hypoténuse' },
            { connu: 'l\'hypoténuse et l\'angle', cherche: 'le côté adjacent à l\'angle', bon: 2, nom: 'le cosinus',
              pourquoi: 'le côté cherché touche l\'angle, et la longueur connue est l\'hypoténuse' },
            { connu: 'les deux côtés de l\'angle droit', cherche: 'l\'angle', bon: 3, nom: 'la tangente',
              pourquoi: 'l\'hypoténuse n\'est ni connue ni cherchée : seuls l\'opposé et l\'adjacent interviennent' },
            { connu: 'le côté opposé et l\'angle', cherche: 'l\'hypoténuse', bon: 1, nom: 'le sinus',
              pourquoi: 'les deux longueurs en jeu sont l\'opposé et l\'hypoténuse, que seul le sinus relie' }
          ]);
          return {
            statement: `Dans un triangle rectangle, on connaît <strong>${cas.connu}</strong> et on cherche <strong>${cas.cherche}</strong>.<br/><br/>` +
              `Quel rapport faut-il utiliser ?<br/><br/>Réponds par $1$ pour le <strong>sinus</strong>, $2$ pour le <strong>cosinus</strong>, $3$ pour la <strong>tangente</strong>.`,
            answer: cas.bon, tolerance: 0.01, unit: '',
            hint: `Écris les deux longueurs qui interviennent — celle que tu connais et celle que tu cherches — puis demande-toi quel rapport de SOH-CAH-TOA contient exactement ces deux-là.<br/><br/>Le rapport à utiliser est celui qui ne fait intervenir <strong>aucune</strong> longueur inconnue en plus.`,
            solution: [
              `La méthode ne dépend jamais du dessin : elle dépend des deux longueurs en jeu, celle qu'on connaît et celle qu'on cherche.`,
              `Ici ${cas.pourquoi}.`,
              `Le rapport à utiliser est donc <strong>${cas.nom}</strong>. Réponse : $${cas.bon}$.`
            ]
          };
        }

        /* tache === 'remarquable' : les valeurs exactes de 30°, 45° et 60°,
           exigibles au brevet. On demande la valeur décimale arrondie, mais la
           solution donne la forme exacte avec le radical : c'est elle qui
           s'apprend, la valeur décimale n'en est que la lecture. */
        const r = pick(REMARQ);
        const quoi = pick([
          { f: 'sin', v: r.sin, exact: r.a === 30 ? '\\dfrac{1}{2}' : (r.a === 45 ? '\\dfrac{\\sqrt{2}}{2}' : '\\dfrac{\\sqrt{3}}{2}') },
          { f: 'cos', v: r.cos, exact: r.a === 30 ? '\\dfrac{\\sqrt{3}}{2}' : (r.a === 45 ? '\\dfrac{\\sqrt{2}}{2}' : '\\dfrac{1}{2}') },
          { f: 'tan', v: r.tan, exact: r.a === 30 ? '\\dfrac{\\sqrt{3}}{3}' : (r.a === 45 ? '1' : '\\sqrt{3}') }
        ]);
        const val = parseFloat(quoi.v.toFixed(3));
        return {
          statement: `Les valeurs trigonométriques des angles de $30°$, $45°$ et $60°$ se retrouvent dans le carré et le triangle équilatéral : elles sont <strong>exactes</strong>, et exigibles sans calculatrice.<br/><br/>` +
            `Donne la valeur de $\\${quoi.f}(${r.a}°)$, arrondie au millième.`,
          answer: val, tolerance: 0.002, unit: '',
          hint: `Ces trois angles ont des valeurs exactes qui s'écrivent avec $\\sqrt{2}$, $\\sqrt{3}$ ou des demis.<br/><br/>Retiens que $\\sqrt{2} \\approx 1{,}414$ et $\\sqrt{3} \\approx 1{,}732$.`,
          solution: [
            `La valeur <strong>exacte</strong> est $\\${quoi.f}(${r.a}°) = ${quoi.exact}$. C'est cette écriture qu'il faut connaître : elle ne dépend d'aucune calculatrice.`,
            `Sa valeur décimale approchée vaut $${fr(val, 3)}$.`,
            `Contrôle utile : un sinus et un cosinus d'angle aigu sont toujours entre $0$ et $1$, alors qu'une tangente peut dépasser $1$ — elle vaut exactement $1$ à $45°$.`
          ]
        };
      }
    },

    probleme: {
      context: 'La loi de Snell-Descartes décrit la réfraction de la lumière à l\'interface entre deux milieux d\'indices de réfraction $n_1$ et $n_2$ : $$n_1 \\cdot \\sin(\\theta_1) = n_2 \\cdot \\sin(\\theta_2)$$ Un rayon lumineux passe de l\'air ($n_1 = 1{,}00$) vers le verre ($n_2 = 1{,}50$) avec un angle d\'incidence $\\theta_1 = 30°$.',
      schema: 'Surface de séparation : air (n₁=1,00) au-dessus | verre (n₂=1,50) en dessous. Rayon incident à 30° de la normale → rayon réfracté à θ₂ (plus proche de la normale).',
      tasks: [
        'Calculer $n_1 \\cdot \\sin(\\theta_1)$ numériquement.',
        'En déduire $\\sin(\\theta_2)$ en isolant cette inconnue.',
        'Calculer $\\theta_2 = \\arcsin(\\sin(\\theta_2))$ et interpréter : le rayon se rapproche-t-il ou s\'éloigne-t-il de la normale ?'
      ],
      solutions: [
        '$n_1 \\cdot \\sin(\\theta_1) = 1{,}00 \\times \\sin(30°) = 1{,}00 \\times 0{,}500 = 0{,}500$.',
        '$n_2 \\cdot \\sin(\\theta_2) = 0{,}500 \\Rightarrow \\sin(\\theta_2) = \\dfrac{0{,}500}{1{,}50} = 0{,}333$.',
        '$\\theta_2 = \\arcsin(0{,}333) \\approx 19{,}5°$. Le rayon se rapproche de la normale car il passe dans un milieu plus dense ($n_2 > n_1$).'
      ],
      finalAnswer: '$\\theta_2 \\approx 19{,}5°$ (le rayon se rapproche de la normale dans le verre)'
    },

    evaluation: {
      title: 'Évaluation — Trigonométrie dans le Triangle Rectangle',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans un triangle rectangle, l\'hypoténuse mesure $13$ cm et le côté opposé à l\'angle $\\theta$ mesure $5$ cm. Calculer $\\sin(\\theta)$. Donner le résultat sous forme décimale arrondie au centième.',
          type: 'numeric',
          answer: 0.38,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$\\sin(\\theta) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}} = \\dfrac{5}{13} \\approx 0{,}38$.'
        },
        /* Q2 RÉÉCRITE le 2026-09-13. Elle donnait $\cos(\theta)$ et
           l'hypoténuse et demandait l'adjacent : une multiplication, et la
           deuxième application directe d'affilée de l'évaluation.

           Elle demande maintenant de CHOISIR le rapport avant tout calcul,
           dans une situation où les deux longueurs en jeu ne sont pas celles
           qu'on attend — ni l'énoncé ni la figure ne disent lequel des trois
           rapports convient. C'est « chercher », et c'est la difficulté réelle
           du chapitre : l'élève sait calculer, mais choisit mal. */
        {
          statement: 'Un randonneur veut connaître l\'angle d\'une pente. Il mesure qu\'en avançant de $80$ m à l\'horizontale, il s\'élève de $34$ m à la verticale.<br/><br/>' +
            'Il ne connaît pas la longueur du chemin parcouru en pente.<br/><br/>' +
            'Quel rapport doit-il utiliser pour trouver l\'angle de la pente ?',
          type: 'multiple-choice',
          options: [
            'La <strong>tangente</strong>, car les deux longueurs connues sont les deux côtés de l\'angle droit et l\'hypoténuse n\'intervient pas.',
            'Le <strong>sinus</strong>, car il s\'élève verticalement et le sinus concerne toujours la hauteur.',
            'Le <strong>cosinus</strong>, car il avance horizontalement et le cosinus concerne toujours l\'horizontale.',
            'Aucun des trois : il faut d\'abord calculer la longueur du chemin par le théorème de Pythagore, sans quoi rien n\'est possible.'
          ],
          answer: 0,
          points: 2,
          correction: 'Le choix du rapport ne dépend jamais du décor : il dépend des <strong>deux longueurs en jeu</strong>, celles qu\'on connaît et celle qu\'on cherche.<br/><br/>' +
            'Ici, les $80$ m horizontaux sont le côté <strong>adjacent</strong> à l\'angle, les $34$ m verticaux le côté <strong>opposé</strong>. Ce sont les deux côtés de l\'angle droit, et l\'hypoténuse n\'apparaît ni dans les données ni dans la question.<br/><br/>' +
            'Le seul rapport qui relie l\'opposé et l\'adjacent est la <strong>tangente</strong> : $\\tan(\\theta) = \\dfrac{34}{80} = 0{,}425$, d\'où $\\theta \\approx 23°$.<br/><br/>' +
            '<strong>Pourquoi la dernière proposition est fausse</strong> : calculer l\'hypoténuse par Pythagore est possible, mais inutile — c\'est un détour qui rallonge le travail sans rien apporter. Reconnaître qu\'une donnée manquante n\'est pas nécessaire fait partie du raisonnement.'
        },
        {
          statement: 'Une échelle de $5$ m est posée contre un mur. Elle forme un angle de $60°$ avec le sol. À quelle hauteur atteint-elle le mur ? (arrondir à $0{,}01$ m)',
          type: 'numeric',
          answer: 4.33,
          tolerance: 0.05,
          unit: 'm',
          points: 2,
          correction: 'La hauteur est le côté opposé à l\'angle de $60°$ avec le sol. $h = 5 \\times \\sin(60°) = 5 \\times \\dfrac{\\sqrt{3}}{2} \\approx 5 \\times 0{,}866 = 4{,}33$ m.'
        },
        {
          statement: 'Quelle relation est toujours vraie pour tout angle $\\theta$ ?',
          type: 'multiple-choice',
          options: [
            '$\\sin(\\theta) + \\cos(\\theta) = 1$',
            '$\\sin^2(\\theta) + \\cos^2(\\theta) = 1$',
            '$\\sin(\\theta) \\times \\cos(\\theta) = 1$',
            '$\\tan(\\theta) = \\sin(\\theta) + \\cos(\\theta)$'
          ],
          answer: 1,
          points: 2,
          correction: 'La relation fondamentale de la trigonométrie est $\\sin^2(\\theta) + \\cos^2(\\theta) = 1$. Elle découle directement du théorème de Pythagore appliqué au triangle rectangle : $\\left(\\dfrac{\\text{opp}}{\\text{hyp}}\\right)^2 + \\left(\\dfrac{\\text{adj}}{\\text{hyp}}\\right)^2 = \\dfrac{\\text{opp}^2 + \\text{adj}^2}{\\text{hyp}^2} = 1$.'
        },
        /* Q5 RÉÉCRITE le 2026-09-13. Elle demandait $\tan(\theta)$ pour un
           opposé et un adjacent tous deux égaux à 7 : une division dont le
           résultat était visible sans calcul, et la troisième application
           directe de l'évaluation.

           Elle demande maintenant d'EXPLIQUER pourquoi un résultat est
           impossible, donc de produire un argument et non un nombre. C'est
           « communiquer », la compétence la moins évaluée de l'ouvrage, et le
           brevet la sollicite explicitement. L'argument attendu — un sinus
           d'angle aigu ne peut pas dépasser 1, parce que l'opposé est toujours
           plus court que l'hypoténuse — est un contrôle de vraisemblance que
           l'élève peut appliquer à tous ses calculs du chapitre. */
        {
          statement: 'Dans un triangle rectangle, Sarah cherche l\'angle $\\theta$. Elle calcule et annonce : « $\\sin(\\theta) = 1{,}25$ ».<br/><br/>' +
            'Sans refaire son calcul, comment peut-on être certain qu\'elle s\'est trompée ?',
          type: 'multiple-choice',
          options: [
            'Le sinus d\'un angle aigu est le quotient de l\'<strong>opposé</strong> par l\'<strong>hypoténuse</strong>. Or l\'hypoténuse est toujours le plus long côté : ce quotient est donc toujours <strong>inférieur à $1$</strong>.',
            'Le sinus doit toujours être un nombre <strong>entier</strong>, jamais un nombre décimal.',
            'Elle s\'est trompée parce que $1{,}25$ est supérieur à $1$, et aucune longueur ne peut dépasser $1$ cm.',
            'On ne peut pas en être certain : un sinus peut valoir $1{,}25$ si l\'angle dépasse $90°$.'
          ],
          answer: 0,
          points: 2,
          correction: 'Dans un triangle rectangle, l\'<strong>hypoténuse</strong> est le côté opposé à l\'angle droit, et c\'est toujours le <strong>plus long</strong> des trois.<br/><br/>' +
            'Comme $\\sin(\\theta) = \\dfrac{\\text{opposé}}{\\text{hypoténuse}}$ est un quotient dont le numérateur est plus petit que le dénominateur, il est nécessairement compris entre $0$ et $1$. Un sinus de $1{,}25$ est donc impossible, quel que soit le triangle.<br/><br/>' +
            'Il en va de même pour le cosinus. La <strong>tangente</strong>, en revanche, peut dépasser $1$ : elle compare deux côtés de l\'angle droit, dont aucun n\'est nécessairement le plus grand.<br/><br/>' +
            '<strong>Pourquoi la dernière proposition est fausse</strong> : dans un triangle rectangle, les deux autres angles sont forcément aigus, puisque la somme des angles vaut $180°$. Il ne peut donc pas y avoir d\'angle dépassant $90°$.<br/><br/>' +
            '<strong>Le réflexe à garder</strong> : après chaque calcul de sinus ou de cosinus, vérifie que le résultat tient entre $0$ et $1$. C\'est un contrôle gratuit qui repère la plupart des erreurs de rapport inversé.'
        }
      ]
    }
  }
);
