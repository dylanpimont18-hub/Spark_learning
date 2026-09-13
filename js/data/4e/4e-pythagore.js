window.MODULES.push(
    {
    id: '4e-pythagore',
    level: 1, subject: 'maths',
    icon: '📏',
    title: 'Théorème de Pythagore',
    subtitle: 'Triangle rectangle, calcul de la troisième longueur',
    keywords: ['Hypoténuse', 'Triangle rectangle', 'Carré', 'Racine carrée', 'Réciproque'],
    physics: 'Norme d\'un vecteur force, distance résultante, calcul de composantes',

    cours: {
      intro: 'Pour vérifier qu\'un poteau est parfaitement vertical sans équerre ni rapporteur, un technicien peut simplement tendre un câble depuis son sommet jusqu\'au sol et mesurer trois longueurs : la hauteur du poteau, la distance au sol, et la longueur du câble. Si ces trois mesures respectent une certaine relation, l\'angle est bien droit — c\'est le théorème de Pythagore.<br/><br/>' +
        'Le théorème de Pythagore dit que dans tout triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés : $c^2 = a^2 + b^2$. <strong>L\'hypoténuse est toujours le côté opposé à l\'angle droit</strong> — c\'est aussi le plus long côté.' +
        '<br/><br/>' +
        'La réciproque est puissante : si $c^2 = a^2 + b^2$, alors le triangle est rectangle. En physique, cette formule donne la norme d\'un vecteur résultant ($\\|\\vec{F}\\| = \\sqrt{F_x^2 + F_y^2}$) et la distance entre deux points.' +
        '<br/><br/>' +
        '<strong>Attention au sens de la formule :</strong> pour trouver un côté adjacent, on utilise $a = \\sqrt{c^2 - b^2}$ — on soustrait, pas on additionne ! Vérification : le résultat doit être inférieur à l\'hypoténuse.',
      definitions: [
        { term: 'Hypoténuse', def: 'Côté le plus long du triangle rectangle, situé en face de l\'angle droit.' },
        { term: 'Triangle rectangle', def: 'Triangle possédant un angle droit (90°).' },
        { term: 'Réciproque', def: 'Si $a^2 + b^2 = c^2$ exactement, alors le triangle est rectangle (l\'angle droit est opposé au côté $c$).' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Identifier</strong> le triangle rectangle et son hypoténuse (le côté en face de l\'angle droit — toujours le plus long). <strong>Exemple :</strong> un triangle avec un angle droit en $C$ a son hypoténuse $[AB]$.',
          '<strong>Appliquer le théorème</strong> : $c^2 = a^2 + b^2$ où $c$ est l\'hypoténuse et $a$, $b$ les deux autres côtés. <strong>Exemple :</strong> $AB^2 = AC^2 + BC^2$.',
          '<strong>Chercher un côté non-hypoténuse</strong> : $a^2 = c^2 - b^2 \\Rightarrow a = \\sqrt{c^2 - b^2}$. <strong>Exemple :</strong> si $AB = 13$ et $BC = 5$, alors $AC = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$.',
          '<strong>Vérification</strong> : l\'hypoténuse est toujours le plus grand côté. Ici $13 > 12 > 5$ ✓'
        ]
      },
      example: {
        statement: 'Un poteau de $4$ m de haut est maintenu par un câble fixé au sol à $3$ m du pied. Quelle est la longueur du câble ?',
        steps: [
          'Le poteau, le sol et le câble forment un triangle rectangle (angle droit entre le poteau et le sol).',
          'Le câble est l\'hypoténuse $c$, le poteau vaut $a = 4$ m et la distance au sol $b = 3$ m.',
          '$c^2 = a^2 + b^2 = 4^2 + 3^2 = 16 + 9 = 25$.',
          '$c = \\sqrt{25} = 5$ m.'
        ],
        answer: 'Le câble mesure $5$ m (triangle 3-4-5).'
      },
      formulas: [
        '$c^2 = a^2 + b^2$ (avec $c$ = hypoténuse)',
        '$a = \\sqrt{c^2 - b^2}$',
        '$\\|\\vec{v}\\| = \\sqrt{v_x^2 + v_y^2}$ (norme d\'un vecteur 2D)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Triangle rectangle',
        title: 'Repérer visuellement l\'hypoténuse et choisir la bonne formule',
        description: 'Le côté opposé à l\'angle droit décide toute la suite : si c\'est lui qu\'on cherche, on additionne ; sinon on soustrait.',
        svg: `
          <!-- Triangle A(86,224) B(86,80) C(194,224) : 1 unité = 36 px, donc
               AB = 144 px = 4, AC = 108 px = 3, BC = 180 px = 5. Le trace suit
               desormais ses propres etiquettes. La version precedente dessinait
               le côté « b = 3 » 1,57 fois PLUS LONG que le côté « a = 4 » : un
               élève qui mesurait a la regle lisait l'inverse de l'enonce. -->
          <svg viewBox="0 0 360 262" role="img" aria-labelledby="pythagore-graph-title pythagore-graph-desc">
            <title id="pythagore-graph-title">Triangle rectangle pour le theoreme de Pythagore</title>
            <desc id="pythagore-graph-desc">Le schema montre un triangle rectangle 3 4 5 trace a l'echelle, angle droit en A, avec l'hypoténuse en evidence et les deux formules utiles selon l'inconnue.</desc>
            <line class="grid-line" x1="40" y1="232" x2="330" y2="232"></line>
            <polygon points="86,224 86,80 194,224" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="86" y1="224" x2="86" y2="80"></line>
            <line class="frame-line" x1="86" y1="224" x2="194" y2="224"></line>
            <line class="curve-main" x1="86" y1="80" x2="194" y2="224"></line>
            <path class="axis" d="M86 210 L100 210 L100 224"></path>
            <circle class="plot-point-alt" cx="86" cy="224" r="5"></circle>
            <circle class="plot-point-alt" cx="86" cy="80" r="5"></circle>
            <circle class="plot-point" cx="194" cy="224" r="5"></circle>
            <text class="annotation-label" x="70" y="242">A</text>
            <text class="annotation-label" x="70" y="74">B</text>
            <text class="annotation-label" x="202" y="242">C</text>
            <text class="annotation-label" x="40" y="158">a = 4</text>
            <text class="annotation-label" x="118" y="248">b = 3</text>
            <text class="annotation-label" x="150" y="142">c = 5</text>
            <text class="annotation-label" x="232" y="126">Hypoténuse</text>
            <line class="guide-line" x1="228" y1="132" x2="150" y2="156"></line>
            <rect x="20" y="10" width="150" height="46" rx="12" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="30">Chercher c :</text>
            <text class="tick-label" x="32" y="47">c² = a² + b²</text>
            <rect x="190" y="10" width="156" height="46" rx="12" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
            <text class="annotation-label" x="202" y="30">Chercher a ou b :</text>
            <text class="tick-label" x="202" y="47">a² = c² − b²</text>
          </svg>
        `,
        notes: [
          'L\'hypoténuse est le seul côté opposé à l\'angle droit. C\'est aussi le plus long côté du triangle.',
          'Si l\'inconnue est l\'hypoténuse $c$, on additionne les carrés des deux autres côtés.',
          'Si l\'inconnue est un petit côté, on isole son carré puis on soustrait le carré du côté connu à celui de l\'hypoténuse.'
        ],
        reading: 'Avant toute formule, trouve l\'angle droit. Le côté en face fixe le rôle de l\'hypoténuse.',
        caption: 'Schéma de référence pour distinguer rapidement addition et soustraction dans un calcul de Pythagore.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — chapitre pilote de la quatrieme.
         Ils suivent les trois conventions eprouvees sur la sixieme : une figure
         par MALENTENDU et non par formule ; dans une figure de comparaison les
         deux objets partagent la meme ligne de base et la meme echelle ; dans
         une figure « piege » le calcul JUSTE se pose en premier et en teinte
         d'accent, l'erreur dessous en teinte faible et en trait tirete, parce
         que l'oeil lit le haut d'abord et que c'est la bonne forme qui doit
         rester en memoire. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'On additionne pour l\'hypoténuse, on soustrait pour un petit côté',
          description: 'L\'erreur la plus fréquente du chapitre n\'est pas de se tromper dans un carré : c\'est d\'<strong>additionner dans les deux cas</strong>. Les deux triangles ci-dessous ont la même forme ; seule change la longueur cherchée, et cela suffit à changer l\'opération.',
          svg: `
            <svg viewBox="0 0 400 212" role="img" aria-labelledby="pyth-sens-title pyth-sens-desc">
              <title id="pyth-sens-title">Deux triangles rectangles identiques, selon que l'inconnue est l'hypoténuse ou un côté de l'angle droit</title>
              <desc id="pyth-sens-desc">Deux triangles rectangles 6 8 10 sont dessines cote a cote, à la même echelle et sur la même ligne de base. Sur celui de gauche les deux côtés de l'angle droit valent 6 et 8 et l'hypoténuse est inconnue : on additionne les carres, 36 plus 64 font 100, et la racine de 100 vaut 10. Sur celui de droite l'hypoténuse vaut 10 et un côté de l'angle droit vaut 6, l'autre cote de l'angle droit est inconnu : on soustrait, 100 moins 36 font 64, et la racine de 64 vaut 8. La seule difference entre les deux figures est l'emplacement du point d'interrogation.</desc>

              <!-- ECHELLE COMMUNE, 12 unités de viewBox par unité de longueur,
                   et MEME LIGNE DE BASE a y = 150 : la grandeur qui varie (la
                   place de l'inconnue) doit etre la SEULE difference visible,
                   sinon l'élève lit la difference de forme comme faisant partie
                   de la demonstration. Les deux triangles sont donc le meme
                   6-8-10 : angle droit exact par construction, les deux côtés
                   partant horizontal et vertical du meme sommet. -->
              <line class="grid-line" x1="16" y1="150" x2="384" y2="150"></line>

              <polygon class="frame-line" points="56,150 152,150 56,78" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M65 150 L65 141 L56 141"></path>
              <text class="annotation-label" x="104" y="168" text-anchor="middle">8</text>
              <text class="annotation-label" x="48" y="118" text-anchor="end">6</text>
              <text class="annotation-label" x="112" y="106" text-anchor="start">?</text>
              <text class="tick-label" x="104" y="192" text-anchor="middle">on cherche l’hypoténuse</text>
              <text class="label-soft" x="104" y="34" text-anchor="middle">36 + 64 = 100</text>
              <text class="tick-label" x="104" y="52" text-anchor="middle">racine de 100 = 10</text>

              <polygon class="frame-line" points="248,150 344,150 248,78" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M257 150 L257 141 L248 141"></path>
              <text class="annotation-label" x="296" y="168" text-anchor="middle">?</text>
              <text class="annotation-label" x="240" y="118" text-anchor="end">6</text>
              <text class="annotation-label" x="304" y="106" text-anchor="start">10</text>
              <text class="tick-label" x="296" y="192" text-anchor="middle">on cherche un petit côté</text>
              <text class="label-soft" x="296" y="34" text-anchor="middle">100 - 36 = 64</text>
              <text class="tick-label" x="296" y="52" text-anchor="middle">racine de 64 = 8</text>
            </svg>
          `,
          notes: [
            'À gauche, l\'inconnue est l\'hypoténuse : elle est plus grande que chacun des deux autres côtés, donc on <strong>additionne</strong> — $6^2 + 8^2 = 100$, puis $\\sqrt{100} = 10$.',
            'À droite, l\'inconnue est un côté de l\'angle droit : elle est plus petite que l\'hypoténuse, donc on <strong>soustrait</strong> — $10^2 - 6^2 = 64$, puis $\\sqrt{64} = 8$.',
            'Le contrôle qui ne trompe jamais : <strong>l\'hypoténuse est toujours le plus long côté</strong>. Si ton résultat pour un petit côté dépasse l\'hypoténuse, tu as additionné au lieu de soustraire.'
          ],
          reading: 'Repère d\'abord où est le point d\'interrogation. S\'il est sur le côté en face de l\'angle droit, tu additionnes. S\'il est sur un côté de l\'angle droit, tu soustrais. Compare ensuite ton résultat à l\'hypoténuse : il doit être plus petit.',
          caption: 'Le même triangle $6$-$8$-$10$ : additionner pour l\'hypoténuse, soustraire pour un côté de l\'angle droit.'
        },
        {
          theme: 'maths',
          kicker: 'Trouver l\'hypotenuse',
          title: 'L\'hypoténuse ne dépend pas de l\'orientation du triangle',
          description: 'Beaucoup d\'élèves cherchent l\'hypoténuse « en haut » ou « en diagonale ». Ce n\'est pas une affaire de position sur la feuille : l\'hypoténuse est le côté <strong>en face de l\'angle droit</strong>, et elle le reste quand on fait tourner le triangle.',
          svg: `
            <svg viewBox="0 0 400 180" role="img" aria-labelledby="pyth-orient-title pyth-orient-desc">
              <title id="pyth-orient-title">Le meme triangle rectangle dans trois orientations differentes</title>
              <desc id="pyth-orient-desc">Le meme triangle rectangle 3 4 5 est dessine trois fois, dans trois orientations differentes. A chaque fois l'angle droit est marque par un petit carre et l'hypoténuse est tracee en trait plus epais. Dans la première figure l'hypoténuse monte vers la droite, dans la deuxième elle descend, dans la troisième elle est horizontale en haut et l'angle droit se trouve en bas. Dans les trois cas l'hypoténuse est le côté situe en face de l'angle droit, jamais celui qui occupe une position particuliere sur la feuille.</desc>

              <!-- PAS A PAS, de gauche à droite : chaque vignette rejoue la
                   precedente et ne change QU'UNE chose, l'orientation. Le
                   triangle est a chaque fois le MEME 3-4-5, a l'echelle 20
                   unités de viewBox par unité de longueur : cotes 60 et 80,
                   hypoténuse 100.

                   2026-09-13 — CORRECTION mesurée, invisible à la relecture.
                   La 3e vignette etait un triangle rectangle en haut à droite
                   (sommet 368,44) alors que sa legende annonce une hypoténuse
                   horizontale : le trait fort y designait un COTE DE L'ANGLE
                   DROIT, et le carre d'angle droit etait pose a 87 unités du
                   vrai sommet rectangle. La figure contredisait donc la lecon
                   qu'elle illustre. Le sommet rectangle est desormais calcule
                   comme le pied de la hauteur issue de l'hypoténuse
                   (x = (a²-b²+c²)/2c), ce qui donne 324,128 : produit scalaire
                   nul a la precision machine. L'echelle est passee de 24 a 20
                   pour les TROIS vignettes, sinon la 3e depassait le cadre
                   (x = 416 > 400) — et le texte affirme qu'elles montrent le
                   meme triangle, donc elles partagent l'echelle. -->
              <polygon class="frame-line" points="32,140 112,140 32,80" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M41 140 L41 131 L32 131"></path>
              <line class="curve-main" x1="112" y1="140" x2="32" y2="80"></line>
              <text class="tick-label" x="72" y="166" text-anchor="middle">angle droit en bas à gauche</text>

              <polygon class="frame-line" points="168,80 248,80 248,140" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M239 80 L239 89 L248 89"></path>
              <line class="curve-main" x1="168" y1="80" x2="248" y2="140"></line>
              <text class="tick-label" x="208" y="166" text-anchor="middle">angle droit en haut à droite</text>

              <polygon class="frame-line" points="288,80 388,80 324,128" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <!-- Carre d'angle droit calcule sur les vecteurs unitaires RP et
                   RQ (cote 9) : les deux branches sont orthogonales a la
                   precision machine, ce qu'un carre pose « a vue » sur un
                   sommet oblique ne garantit pas. -->
              <path class="grid-line" fill="none" d="M318.6 120.8 L325.8 115.4 L331.2 122.6"></path>
              <line class="curve-main" x1="288" y1="80" x2="388" y2="80"></line>
              <text class="tick-label" x="338" y="166" text-anchor="middle">hypoténuse horizontale</text>
            </svg>
          `,
          notes: [
            'Les trois triangles sont <strong>le même</strong> : côtés $3$ et $4$, hypoténuse $5$. Seule l\'orientation sur la feuille change.',
            'Dans les trois cas, l\'hypoténuse est le côté tracé en trait fort, et c\'est celui qui <strong>ne touche pas le petit carré</strong> de l\'angle droit.',
            'Dans la troisième figure, l\'hypoténuse est horizontale et « en haut » : la position ne dit donc rien. Seul l\'angle droit décide.'
          ],
          reading: 'Pose ton doigt sur le petit carré de l\'angle droit, puis cherche le côté que ton doigt ne touche pas : c\'est l\'hypoténuse. Fais-le sur les trois figures, tu trouveras à chaque fois le côté en trait fort.',
          caption: 'Le même triangle $3$-$4$-$5$ dans trois orientations : l\'hypoténuse est toujours le côté opposé à l\'angle droit.'
        },
        {
          theme: 'maths',
          kicker: 'La réciproque est exacte, ou elle n\'est pas',
          title: 'Presque rectangle ne veut rien dire',
          description: 'La réciproque ne tolère aucun « à peu près ». Le triangle $5$-$7$-$9$ ci-dessous <strong>ressemble</strong> à un triangle rectangle, et il ne l\'est pas : ses mesures donnent $74$ d\'un côté et $81$ de l\'autre.',
          svg: `
            <svg viewBox="0 0 400 196" role="img" aria-labelledby="pyth-recip-title pyth-recip-desc">
              <title id="pyth-recip-title">Un triangle 5 7 9 qui ressemble a un triangle rectangle sans en etre un</title>
              <desc id="pyth-recip-desc">A gauche, un triangle de cotes 5, 7 et 9 est dessine a l'echelle. Son plus grand angle mesure environ 95 degrés : il est visiblement proche de l'angle droit, mais il le depasse. Aucun petit carre ne le marque, puisque ce n'est pas un angle droit. A droite, le calcul de la reciproque est pose : la somme des carres des deux petits cotes vaut 25 plus 49, soit 74, tandis que le carre du plus grand côté vaut 81. Les deux nombres ne sont pas égaux, donc le triangle n'est pas rectangle, et l'écart de sept unités ne se rattrape pas par un arrondi.</desc>

              <!-- Le triangle est construit au compas à partir de ses trois
                   cotes, echelle 14 unités par unité : base 9 -> 126, et le
                   sommet est a l'intersection des cercles de rayons 7 et 5.
                   Coordonnées calculees, pas estimees : xc = (81+49-25)/18 =
                   5,8333 et yc = racine(49 - 34,0278) = 3,8695, soit 81,67 et
                   54,17 unités. L'angle au sommet vaut alors 95,7 degrés : il
                   DEPASSE l'angle droit, ce qui est exactement ce que la figure
                   doit montrer. -->
              <polygon class="frame-line" points="34,150 160,150 115.67,95.83" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <text class="annotation-label" x="97" y="170" text-anchor="middle">9</text>
              <text class="annotation-label" x="66" y="116" text-anchor="end">7</text>
              <text class="annotation-label" x="146" y="116" text-anchor="start">5</text>
              <text class="tick-label" x="97" y="188" text-anchor="middle">cet angle vaut 95,7 degrés</text>

              <!-- FIGURE « PIEGE » : le calcul JUSTE en haut et en teinte
                   d'accent, la conclusion fautive dessous en teinte faible et en
                   trait tirete. L'oeil lit le haut d'abord. -->
              <rect x="196" y="30" width="190" height="58" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
              <text class="annotation-label" x="210" y="52">25 + 49 = 74</text>
              <text class="tick-label" x="210" y="74">mais 81 : pas rectangle</text>

              <rect x="196" y="110" width="190" height="58" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 18%, var(--border))" stroke-dasharray="5 4"></rect>
              <text class="tick-label" x="210" y="132">74 proche de 81 donc oui</text>
              <text class="label-soft" x="210" y="154">non : il faut l égalite</text>
            </svg>
          `,
          notes: [
            'Calcul de la réciproque : $5^2 + 7^2 = 25 + 49 = 74$, alors que $9^2 = 81$. Les deux nombres diffèrent, donc le triangle <strong>n\'est pas</strong> rectangle.',
            'Le plus grand angle de ce triangle mesure en réalité $95{,}7°$ — il dépasse l\'angle droit de presque $6°$, ce qui est déjà beaucoup pour l\'oeil.',
            'Un écart de $7$ entre $74$ et $81$ ne se rattrape par aucun arrondi : la réciproque demande l\'<strong>égalité exacte</strong>, jamais une ressemblance.'
          ],
          reading: 'Mesure le plus grand angle de la figure de gauche avec ton équerre : elle ne se superpose pas tout à fait. C\'est normal, cet angle vaut $95{,}7°$. Une figure peut tromper l\'oeil de quelques degrés ; le calcul, lui, tranche sans hésiter.',
          caption: 'Le triangle $5$-$7$-$9$ : son plus grand angle vaut $95{,}7°$, et $5^2 + 7^2 = 74 \\neq 81 = 9^2$.'
        }
      ],
      recap: [
        '$c^2 = a^2 + b^2$ ne fonctionne QUE dans un triangle rectangle',
        'L\'hypoténuse est toujours en face de l\'angle droit et c\'est le plus grand côté',
        'Pour trouver un petit côté : on soustrait ($a = \\sqrt{c^2 - b^2}$)',
        'La réciproque permet de prouver qu\'un triangle est rectangle'
      ],
      piege: 'Le théorème ne s\'applique QU\'aux triangles rectangles. Avant de l\'utiliser, identifie l\'angle droit. Le côté en face de l\'angle droit est l\'hypoténuse — c\'est toujours le plus grand côté. Si tu doutes, la réciproque permet de vérifier : si $a^2 + b^2 = c^2$, alors le triangle est rectangle en... l\'angle opposé à $c$.'
    },

    quiz: [
      {
        q: 'Un triangle a deux côtés de $3$ et $4$. Si c\'est un triangle rectangle, quelle est la longueur de son hypoténuse ?',
        options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
        answer: 0,
        correction: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$. C\'est le célèbre triangle 3-4-5.'
      },
      {
        q: 'Dans un triangle rectangle, l\'hypoténuse mesure $13\\,\\text{cm}$ et un côté $5\\,\\text{cm}$. Quel est le troisième côté ?',
        options: ['$8\\,\\text{cm}$', '$12\\,\\text{cm}$', '$\\sqrt{18}\\,\\text{cm}$', '$\\sqrt{144}\\,\\text{cm}$'],
        answer: 1,
        correction: '$a = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12\\,\\text{cm}$. Triangle 5-12-13.'
      },
      {
        q: 'Un triangle a des côtés $5$, $7$ et $9$. Est-il rectangle ? Un élève vérifie $5^2 + 7^2 = 9^2$ et trouve $25 + 49 = 74 \\neq 81$. Que conclut-il ?',
        options: [
          'Oui, car $74$ est proche de $81$.',
          'Non, le triangle n\'est pas rectangle car $5^2 + 7^2 \\neq 9^2$. La réciproque exige une égalité exacte.',
          'On ne peut pas conclure sans mesurer les angles.',
          'Oui, si on arrondit : $\\sqrt{74} \\approx 8{,}6 \\approx 9$.'
        ],
        answer: 1,
        correction: 'La réciproque du théorème de Pythagore est catégorique : le triangle est rectangle si et seulement si $a^2 + b^2 = c^2$ exactement. $74 \\neq 81$, donc ce triangle n\'est pas rectangle. La proximité de valeurs ne suffit pas — une vérification approchée peut induire en erreur, surtout avec des valeurs irrationnelles.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* REECRIT LE 2026-09-13 (chapitre pilote de la quatrieme).

         AVANT : deux moules seulement — « calcule l'hypotenuse » et « calcule
         le troisieme cote », tires sur six triplets. Mesure a 200 tirages :
         2 moules, 6 enonces distincts, donc AUCUNE banque supplementaire pour
         le professeur (les 12 exercices numerotes absorbaient tout). C'est le
         chapitre le plus exerce du college qui se retrouvait le plus pauvre.

         APRES : quatre familles de taches, chacune declinee sur des CONTEXTES
         tires par pick() — ce que la regle du projet demande, et ce qui fait la
         difference entre varier les nombres et varier les exercices.
           - 'hypotenuse' : la tache directe, en situation ;
           - 'cote' : la tache inverse, celle ou l'eleve additionne a tort ;
           - 'reciproque' : repondre oui ou non, avec le calcul ;
           - 'distance' : Pythagore dans un repere, qui est l'usage de loin le
             plus durable de ce theoreme.

         Les FIGURES suivent le tirage, jamais l'inverse : figureTriangleRectangle
         recoit les longueurs reellement tirees, et l'option `inconnu` place le
         point d'interrogation sur le cote cherche — la figure pose la question
         de l'enonce sans jamais la resoudre. Pour la reciproque, on emploie
         figureTriangleTroisCotes, qui ne code AUCUN angle droit : ce serait
         donner la reponse. Les taches de distance dans un repere n'ont pas de
         figure : la bibliotheque n'a pas de helper de repere, et une figure
         approximative vaudrait moins que pas de figure. */
      generate() {
        // Triplets pythagoriciens : la reponse est toujours entiere, ce qui
        // laisse l'eleve se concentrer sur le sens de l'operation.
        const triplets = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [20, 21, 29], [12, 16, 20]];
        const tache = pick(['hypotenuse', 'hypotenuse', 'cote', 'cote', 'reciproque', 'distance']);

        if (tache === 'hypotenuse') {
          const [a, b, c] = pick(triplets);
          // Contextes ou le triangle rectangle est DONNE par la situation, et
          // non decrete : un mur est vertical, un ecran a des coins droits.
          const ctx = pick([
            { d: 'Une échelle est posée contre un mur vertical. Son pied est à ' + a + '\\,\\text{m} du mur et elle atteint le mur à ' + b + '\\,\\text{m} de hauteur.', q: 'Quelle est la longueur de l\'échelle ?', u: 'm' },
            { d: 'Un terrain rectangulaire mesure ' + a + '\\,\\text{m} sur ' + b + '\\,\\text{m}.', q: 'Quelle est la longueur de sa diagonale ?', u: 'm' },
            { d: 'Un bateau quitte le port, navigue ' + a + '\\,\\text{km} vers l\'est puis ' + b + '\\,\\text{km} vers le nord.', q: 'À quelle distance du port se trouve-t-il en ligne droite ?', u: 'km' },
            { d: 'Un mât vertical de ' + b + '\\,\\text{m} est retenu par un hauban fixé au sol à ' + a + '\\,\\text{m} de son pied.', q: 'Quelle longueur de hauban faut-il ?', u: 'm' }
          ]);
          return {
            statement: ctx.d + ' ' + ctx.q,
            answer: c,
            tolerance: 0.01,
            unit: ctx.u,
            figure: figureTriangleRectangle(a, b, c, { unite: ctx.u, inconnu: 'hypotenuse' }),
            hint: 'La longueur cherchée est l\'hypoténuse : elle est en face de l\'angle droit, donc on additionne les carrés des deux autres côtés.',
            solution: [
              'Les deux longueurs connues forment l\'angle droit, la longueur cherchée est donc l\'hypoténuse.',
              '$c^2 = ' + a + '^2 + ' + b + '^2 = ' + (a * a) + ' + ' + (b * b) + ' = ' + (c * c) + '$',
              '$c = \\sqrt{' + (c * c) + '} = ' + c + '\\,\\text{' + ctx.u + '}$, et c\'est bien la plus grande des trois longueurs.'
            ]
          };
        }

        if (tache === 'cote') {
          const [a, b, c] = pick(triplets);
          /* On tire AUSSI lequel des deux petits cotes est cherche : sinon le
             cote cherche serait toujours le meme des deux, et l'eleve
             apprendrait la place plutot que le raisonnement. */
          const chercheB = Math.random() > 0.5;
          const connu = chercheB ? a : b, reponse = chercheB ? b : a;
          const ctx = pick([
            { d: 'Une échelle de ' + c + '\\,\\text{m} est posée contre un mur vertical. Son pied est à ' + connu + '\\,\\text{m} du mur.', q: 'À quelle hauteur touche-t-elle le mur ?', u: 'm' },
            { d: 'Un téléviseur rectangulaire a une diagonale de ' + c + '\\,\\text{cm} et une largeur de ' + connu + '\\,\\text{cm}.', q: 'Quelle est sa hauteur ?', u: 'cm' },
            { d: 'Un toboggan rectiligne de ' + c + '\\,\\text{m} part du haut d\'un portique vertical. Son point d\'arrivée est à ' + connu + '\\,\\text{m} du pied du portique.', q: 'Quelle est la hauteur du portique ?', u: 'm' },
            { d: 'Un câble tendu de ' + c + '\\,\\text{m} relie le sommet d\'un poteau vertical à un piquet planté à ' + connu + '\\,\\text{m} du pied du poteau.', q: 'Quelle est la hauteur du poteau ?', u: 'm' }
          ]);
          return {
            statement: ctx.d + ' ' + ctx.q,
            answer: reponse,
            tolerance: 0.01,
            unit: ctx.u,
            // L'inconnue est un cote de l'angle droit : on le place en vertical,
            // et la figure y met le point d'interrogation.
            figure: figureTriangleRectangle(connu, reponse, c, { unite: ctx.u, inconnu: 'vertical' }),
            hint: 'La longueur de ' + c + '\\,\\text{' + ctx.u + '} est l\'hypoténuse (la plus grande). La longueur cherchée est un côté de l\'angle droit : on soustrait.',
            solution: [
              'L\'hypoténuse est la plus grande longueur, ici $' + c + '\\,\\text{' + ctx.u + '}$. La longueur cherchée est donc un côté de l\'angle droit.',
              '$' + reponse + '^2 = ' + c + '^2 - ' + connu + '^2 = ' + (c * c) + ' - ' + (connu * connu) + ' = ' + (reponse * reponse) + '$',
              '$' + reponse + ' = \\sqrt{' + (reponse * reponse) + '} = ' + reponse + '\\,\\text{' + ctx.u + '}$. Contrôle : $' + reponse + ' < ' + c + '$, la longueur trouvée est bien plus petite que l\'hypoténuse.'
            ]
          };
        }

        if (tache === 'reciproque') {
          /* Moitie de triplets VRAIS, moitie de faux obtenus en decalant d'une
             unite le plus grand cote : l'ecart est alors assez petit pour que
             l'oeil ne tranche pas, ce qui est tout l'interet de la reciproque.
             La reponse n'est donc pas devinable a la forme du triangle. */
          const [a, b, c] = pick(triplets);
          const vrai = Math.random() > 0.5;
          const grand = vrai ? c : c + pick([-1, 1]);
          const ctx = pick([
            'Un menuisier a découpé un triangle de côtés ' + a + '\\,\\text{cm}, ' + b + '\\,\\text{cm} et ' + grand + '\\,\\text{cm}.',
            'Sur un plan, une parcelle triangulaire mesure ' + a + '\\,\\text{m}, ' + b + '\\,\\text{m} et ' + grand + '\\,\\text{m}.',
            'Trois piquets sont plantés à ' + a + '\\,\\text{m}, ' + b + '\\,\\text{m} et ' + grand + '\\,\\text{m} les uns des autres.',
            'Un carreleur vérifie un angle à l\'aide d\'un triangle de côtés ' + a + '\\,\\text{cm}, ' + b + '\\,\\text{cm} et ' + grand + '\\,\\text{cm}.'
          ]);
          const somme = a * a + b * b, carre = grand * grand;
          return {
            statement: ctx + ' Ce triangle est-il rectangle ? Réponds par $1$ pour oui, $0$ pour non.',
            answer: vrai ? 1 : 0,
            tolerance: 0.01,
            unit: '',
            figure: figureTriangleTroisCotes(a, b, grand),
            hint: 'Compare la somme des carrés des deux plus petits côtés au carré du plus grand. La réciproque demande une égalité exacte.',
            solution: [
              'Le plus grand côté est $' + grand + '$ : c\'est lui qui serait l\'hypoténuse.',
              '$' + a + '^2 + ' + b + '^2 = ' + (a * a) + ' + ' + (b * b) + ' = ' + somme + '$, et $' + grand + '^2 = ' + carre + '$.',
              vrai
                ? 'Les deux résultats sont égaux, donc d\'après la réciproque du théorème de Pythagore le triangle <strong>est</strong> rectangle. Réponse : $1$.'
                : 'Les deux résultats diffèrent ($' + somme + '$ et $' + carre + '$), donc le triangle <strong>n\'est pas</strong> rectangle — même si l\'écart est petit, la réciproque exige l\'égalité exacte. Réponse : $0$.'
            ]
          };
        }

        /* tache === 'distance' : Pythagore dans un repere. Pas de figure : la
           bibliotheque n'offre pas de helper de repere quadrille, et un
           triangle rectangle sans ses axes ne dirait pas ce que l'enonce
           demande. Plutot aucune figure qu'une figure qui ment. */
        const [a, b, c] = pick(triplets);
        const xA = rand(-4, 4), yA = rand(-4, 4);
        // On place B de sorte que les ecarts de coordonnees soient exactement a
        // et b : la distance est alors c, entiere.
        const sx = pick([1, -1]), sy = pick([1, -1]);
        const xB = xA + sx * a, yB = yA + sy * b;
        const ctx = pick([
          { d: 'Dans un repère orthonormé, on place les points $A(' + xA + ' ; ' + yA + ')$ et $B(' + xB + ' ; ' + yB + ')$.', q: 'Calcule la distance $AB$.' },
          { d: 'Sur une carte quadrillée, un randonneur part du point $A(' + xA + ' ; ' + yA + ')$ et rejoint le refuge $B(' + xB + ' ; ' + yB + ')$.', q: 'Quelle distance à vol d\'oiseau sépare ces deux points ?' },
          { d: 'Deux capteurs sont placés aux points $A(' + xA + ' ; ' + yA + ')$ et $B(' + xB + ' ; ' + yB + ')$ d\'un repère orthonormé.', q: 'Quelle est la distance $AB$ entre les deux capteurs ?' }
        ]);
        return {
          statement: ctx.d + ' ' + ctx.q,
          answer: c,
          tolerance: 0.01,
          unit: '',
          hint: 'Les écarts de coordonnées donnent les deux côtés de l\'angle droit : $' + a + '$ horizontalement et $' + b + '$ verticalement.',
          solution: [
            'Écart horizontal : $|' + xB + ' - (' + xA + ')| = ' + a + '$. Écart vertical : $|' + yB + ' - (' + yA + ')| = ' + b + '$.',
            'Ces deux écarts sont les côtés de l\'angle droit d\'un triangle rectangle dont $[AB]$ est l\'hypoténuse.',
            '$AB^2 = ' + a + '^2 + ' + b + '^2 = ' + (a * a) + ' + ' + (b * b) + ' = ' + (c * c) + '$, donc $AB = \\sqrt{' + (c * c) + '} = ' + c + '$.'
          ]
        };
      }
    },

    probleme: {
      context: 'Un bateau part du port O. Il navigue $30\\,\\text{km}$ vers l\'Est (direction $Ox$), puis $40\\,\\text{km}$ vers le Nord (direction $Oy$).',
      schema: null,
      tasks: [
        'Dessiner schématiquement le trajet et identifier le triangle rectangle formé.',
        'Calculer la distance en ligne droite entre le port O et la position finale du bateau.',
        'Si le bateau avait navigué en ligne droite jusqu\'à sa position finale, quelle direction aurait-il prise par rapport à l\'Est ? (angle $\\theta = \\arctan(40/30)$, valeur approchée)'
      ],
      solutions: [
        'Le trajet forme deux côtés d\'un triangle rectangle : côté Est = 30 km (horizontal) et côté Nord = 40 km (vertical).',
        '$d = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\text{km}$.',
        '$\\theta = \\arctan\\left(\\dfrac{40}{30}\\right) = \\arctan(1{,}33) \\approx 53°$ au-dessus de l\'Est.'
      ],
      finalAnswer: 'Distance directe $= 50\\,\\text{km}$, angle $\\approx 53°$ par rapport à l\'Est'
    },

    evaluation: {
      title: 'Évaluation — Théorème de Pythagore',
      duration: '30 min',
      questions: [
        {
          statement: 'Un triangle rectangle a des côtés de l\'angle droit mesurant $6\\,\\text{cm}$ et $8\\,\\text{cm}$. Calculer l\'hypoténuse.',
          type: 'numeric',
          answer: 10,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle rectangle a une hypoténuse de $17\\,\\text{cm}$ et un côté de $15\\,\\text{cm}$. Calculer le troisième côté.',
          type: 'numeric',
          answer: 8,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: '$a = \\sqrt{17^2 - 15^2} = \\sqrt{289 - 225} = \\sqrt{64} = 8\\,\\text{cm}$.'
        },
        {
          statement: 'Un triangle a des côtés de $7$, $24$ et $25$. Est-il rectangle ?',
          type: 'multiple-choice',
          options: ['Non, car $7^2 + 24^2 = 625 \\neq 25^2$', 'Oui, car $7^2 + 24^2 = 49 + 576 = 625 = 25^2$', 'On ne peut pas savoir sans mesurer les angles', 'Non, car $7 + 24 > 25$'],
          answer: 1,
          points: 2,
          correction: 'Par la réciproque du théorème de Pythagore : $7^2 + 24^2 = 49 + 576 = 625$ et $25^2 = 625$. Comme $a^2 + b^2 = c^2$, le triangle est rectangle.'
        },
        /* Q4 REECRITE le 2026-09-13 pour mobiliser reellement « chercher ».
           L'ancien enonce (echelle contre un mur) donnait la demarche dans
           l'enonce : il ne restait qu'a soustraire deux carres. Ici l'eleve doit
           decouvrir SEUL qu'un calcul de perimetre passe par Pythagore, parce
           que la largeur manque et que rien ne le lui signale. */
        {
          statement: 'Un panneau rectangulaire a une longueur de $24\\,\\text{cm}$ et une diagonale de $25\\,\\text{cm}$. Calculer son <strong>périmètre</strong>.',
          type: 'numeric',
          answer: 62,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Rien n\'indique la largeur : il faut la retrouver avant de pouvoir calculer le périmètre.<br/><br/>' +
            'La diagonale coupe le rectangle en deux triangles rectangles dont elle est l\'hypoténuse. Donc $\\text{largeur}^2 = 25^2 - 24^2 = 625 - 576 = 49$, soit une largeur de $\\sqrt{49} = 7\\,\\text{cm}$.<br/><br/>' +
            'Le périmètre vaut alors $2 \\times (24 + 7) = 62\\,\\text{cm}$.'
        },
        /* Q5 REECRITE le 2026-09-13 pour mobiliser reellement « communiquer ».
           Sur les 60 questions d'evaluation de l'ouvrage, cette competence
           n'etait declarable nulle part : aucune question ne demandait de
           produire une explication. Celle-ci demande de JUGER un raisonnement et
           de nommer l'erreur, ce qui est une production de discours et non un
           calcul. Le distracteur 2 est la seule reponse qui dise POURQUOI le
           raisonnement echoue ; les autres enoncent un resultat sans expliquer,
           ou invoquent une regle inexistante. */
        {
          statement: 'Pour savoir si le triangle de côtés $6\\,\\text{cm}$, $8\\,\\text{cm}$ et $9\\,\\text{cm}$ est rectangle, Léa écrit : « $6^2 + 8^2 = 100$ et $9^2 = 81$ ; $100$ et $81$ sont assez proches, donc le triangle est rectangle. » Quelle explication corrige le mieux son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Son calcul est faux : $6^2 + 8^2$ ne vaut pas $100$.',
            'Sa méthode est la bonne, mais la réciproque exige que les deux nombres soient <strong>égaux</strong>, pas seulement proches : $100 \\neq 81$, donc le triangle n\'est pas rectangle.',
            'Elle aurait dû comparer $6^2 + 9^2$ à $8^2$, car il faut toujours prendre les deux premiers côtés donnés.',
            'On ne peut pas conclure par le calcul : il faut mesurer l\'angle au rapporteur.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le calcul de Léa est juste, et elle compare bien le carré du plus grand côté à la somme des carrés des deux autres : sa méthode est la bonne.<br/><br/>' +
            'Ce qui ne va pas, c\'est sa <strong>conclusion</strong>. La réciproque du théorème de Pythagore demande une <strong>égalité exacte</strong> : le triangle est rectangle si et seulement si $a^2 + b^2 = c^2$. Ici $100 \\neq 81$, donc le triangle n\'est pas rectangle.<br/><br/>' +
            'La proposition 3 est fausse : le côté isolé doit être le <strong>plus grand</strong>, car c\'est lui qui serait l\'hypoténuse. La proposition 4 l\'est aussi : le calcul tranche, et il tranche mieux que le rapporteur, qui se lit à un ou deux degrés près.'
        }
      ]
    }
  }
);
