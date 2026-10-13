/* =========================================================
   Spark Learning – data/lycee-1re/1re-derivation.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-derivation',
    level: 2, subject: 'maths',
    icon: '📉',
    title: 'La Dérivation',
    subtitle: 'Taux de variation, dérivées usuelles, extremums',
    keywords: ['Dérivée', 'Taux de variation', 'Tangente', 'd/dt'],
    physics: 'Cinématique : v = dx/dt, cinétique chimique',

    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version ouvrait sur la
         définition et sa formule de limite, c'est-à-dire sur le symbole avant
         la question. Le test du cahier des charges (section 10) : si on peut
         répondre à la question d'ouverture sans la notion du chapitre, la
         question est mal choisie.

         La question retenue — quelle vitesse à un INSTANT, quand toutes les
         vitesses qu'on sait calculer sont des vitesses MOYENNES sur une durée —
         résiste précisément à tout ce que l'élève sait déjà : aucune division
         ne la résout, parce que la durée à mettre au dénominateur est nulle.
         C'est une difficulté réelle, pas une mise en situation décorative, et
         c'est exactement l'impasse dont la dérivée est la sortie. */
      intro: 'Un radar te flashe à $92$ km/h. Il n\'a pourtant pas pu mesurer ta vitesse « à cet instant » : mesurer une vitesse, c\'est diviser une distance par une durée, et à un instant précis la durée est nulle.<br/><br/><strong>On ne peut pas diviser par zéro.</strong> Comment une vitesse instantanée peut-elle alors exister ?<br/><br/>La sortie est la suivante : au lieu de calculer sur une durée nulle, on calcule sur une durée de plus en plus petite — un dixième de seconde, un centième, un millième — et on regarde vers quel nombre le résultat se dirige. Ce nombre-là existe, même si le calcul « à durée nulle » n\'existe pas.<br/><br/>Ce nombre s\'appelle le <strong>nombre dérivé</strong>, et il se note $f\'(x_0)$.<br/><br/>Sur un graphique, il a une lecture très simple : c\'est la <strong>pente de la tangente</strong> à la courbe au point considéré. Une pente positive, la courbe monte ; une pente négative, elle descend ; une pente nulle, elle est au sommet ou au creux.<br/><br/>C\'est de cette lecture que vient toute l\'utilité du chapitre — et c\'est aussi elle qu\'il ne faut jamais perdre de vue derrière les formules de calcul.',
      definitions: [
        { term: 'Taux de variation', def: 'Le <strong>taux de variation</strong> de $f$ entre $x_0$ et $x_0 + h$ est le quotient $\\dfrac{f(x_0+h)-f(x_0)}{h}$. Il mesure la pente moyenne de la courbe sur cet intervalle.' },
        { term: 'Nombre dérivé', def: 'Le <strong>nombre dérivé</strong> de $f$ en $x_0$, noté $f\'(x_0)$, est la limite du taux de variation quand $h \\to 0$. C\'est un <strong>nombre réel</strong> : la pente de la tangente en ce point.' },
        { term: 'Fonction dérivée', def: 'La <strong>fonction dérivée</strong> $f\'$ est la fonction qui à tout $x$ associe $f\'(x)$. Elle donne la pente de la tangente en <strong>chaque point</strong> de la courbe.' },
        { term: 'Tangente', def: 'La <strong>tangente</strong> à la courbe de $f$ en $x_0$ est la droite d\'équation $y = f\'(x_0)(x - x_0) + f(x_0)$. Elle "effleure" la courbe en ce point.' }
      ],
      method: {
        title: 'Règles de dérivation usuelles',
        steps: [
          '<strong>Fonction constante</strong> : si $f(x) = k$ alors $f\'(x) = 0$.',
          '<strong>Fonction puissance</strong> : si $f(x) = x^n$ alors $f\'(x) = n \\cdot x^{n-1}$. Exemple : $(x^3)\' = 3x^2$.',
          '<strong>Combinaisons linéaires</strong> : $(af + bg)\' = af\' + bg\'$ (linéarité). Exemple : $f(x) = 3x^2 + 5x - 2 \\Rightarrow f\'(x) = 6x + 5$.',
          '<strong>Produit de deux fonctions</strong> : $(uv)\' = u\'v + uv\'$. Exemple : pour $g(x) = x^2 e^x$, on pose $u = x^2$ ($u\' = 2x$) et $v = e^x$ ($v\' = e^x$), donc $g\'(x) = 2x\\,e^x + x^2 e^x = (2x + x^2)e^x$.',
          '<strong>Composée avec l\'exponentielle</strong> : si $u$ est une fonction dérivable, $(e^{u})\' = u\' \\cdot e^{u}$. Exemple : pour $u(x) = 2x$ ($u\' = 2$), $(e^{2x})\' = 2e^{2x}$.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = 2x^3 - 5x^2 + 4x - 1$. Déterminer $f\'(x)$, puis l\'équation de la tangente à la courbe en $x_0 = 1$.',
        steps: [
          'On dérive terme à terme : $f\'(x) = 2 \\times 3x^2 - 5 \\times 2x + 4 = 6x^2 - 10x + 4$.',
          'On calcule $f\'(1) = 6 \\times 1 - 10 \\times 1 + 4 = 0$ et $f(1) = 2 - 5 + 4 - 1 = 0$.',
          'L\'équation de la tangente est $y = f\'(1)(x - 1) + f(1) = 0 \\times (x - 1) + 0 = 0$.'
        ],
        answer: 'La tangente en $x_0 = 1$ est la droite $y = 0$ (l\'axe des abscisses). Le point $(1\\,;\\,0)$ est un extremum local car $f\'(1) = 0$.'
      },
      formulas: [
        '$(x^n)\' = n \\cdot x^{n-1}$',
        '$(ax^n)\' = a \\cdot n \\cdot x^{n-1}$',
        '$(e^x)\' = e^x$',
        '$(\\ln x)\' = \\dfrac{1}{x}$',
        '$(\\sin x)\' = \\cos x$, $(\\cos x)\' = -\\sin x$',
        '$(uv)\' = u\'v + uv\'$ (produit)',
        '$(e^{u})\' = u\' \\cdot e^u$ (composée avec l\'exponentielle)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Tangente et extremum',
        title: 'Lire une tangente horizontale sur la courbe de $f$',
        description: 'La courbe de $f(x) = 2x^3 - 5x^2 + 4x - 1$ (l\'exemple du cours) calculée point par point entre $x=-0{,}3$ et $x=1{,}8$.<br/><br/>En $x_0 = 1$, la tangente est horizontale : elle est confondue avec l\'axe des abscisses, car $f\'(1)=0$ et $f(1)=0$.',
        svg: `
          <svg viewBox="0 0 430 300" role="img" aria-labelledby="deriv-graph-title deriv-graph-desc">
            <title id="deriv-graph-title">Courbe de f et tangente horizontale au point (1;0)</title>
            <desc id="deriv-graph-desc">Courbe de la fonction cubique f(x) = 2x au cube - 5x au carre + 4x - 1, tracee entre x=-0,3 et x=1,8. La tangente en x=1 est horizontale et confondue avec l'axe des abscisses car f(1)=0 est un minimum local.</desc>

            <!-- grille verticale -->
            <line class="grid-line" x1="104.3" y1="30" x2="104.3" y2="250"></line>
            <line class="grid-line" x1="186.4" y1="30" x2="186.4" y2="250"></line>
            <line class="grid-line" x1="268.6" y1="30" x2="268.6" y2="250"></line>
            <line class="grid-line" x1="350.7" y1="30" x2="350.7" y2="250"></line>

            <!-- axes -->
            <line class="axis" x1="48" y1="116.6" x2="407" y2="116.6"></line>
            <line class="axis" x1="104.3" y1="23" x2="104.3" y2="257"></line>

            <!-- courbe calculee point par point -->
            <polyline class="curve-main" points="55.0,238.2 69.4,210.8 83.8,187.8 98.1,168.7 104.3,161.6 112.5,153.1 126.9,140.9 141.2,131.5 155.6,124.6 170.0,119.9 184.4,116.9 198.8,115.4 213.1,115.0 213.8,115.0 227.5,115.2 241.9,115.8 256.2,116.4 268.6,116.6 270.6,116.6 285.0,116.1 299.4,114.4 313.8,111.3 328.1,106.4 342.5,99.3 356.9,89.7 371.2,77.1 385.6,61.3 400.0,41.8"></polyline>

            <!-- tangente horizontale en x=1, superposee a l'axe des abscisses -->
            <line class="focus-line" x1="219.3" y1="116.6" x2="317.9" y2="116.6"></line>

            <!-- guide vers l'etiquette -->
            <line class="guide-line" x1="268.6" y1="72" x2="268.6" y2="110"></line>

            <!-- point de tangence -->
            <circle class="plot-point" cx="268.6" cy="116.6" r="5"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="227" y="16" text-anchor="middle">f(x) = 2x³ − 5x² + 4x − 1</text>
            <text class="annotation-label" x="268.6" y="50" text-anchor="middle">Tangente horizontale</text>
            <text class="annotation-label" x="268.6" y="66" text-anchor="middle">en (1 ; 0)</text>

            <text class="tick-label" x="104.3" y="132" text-anchor="middle">0</text>
            <text class="tick-label" x="186.4" y="132" text-anchor="middle">0,5</text>
            <text class="tick-label" x="268.6" y="132" text-anchor="middle">1</text>
            <text class="tick-label" x="350.7" y="132" text-anchor="middle">1,5</text>
            <text class="tick-label" x="94" y="210" text-anchor="end">-2</text>
            <text class="tick-label" x="94" y="165" text-anchor="end">-1</text>
            <text class="tick-label" x="94" y="75" text-anchor="end">1</text>
            <text class="axis-label" x="412" y="121">x</text>
            <text class="axis-label" x="108" y="20">y</text>
          </svg>
        `,
        notes: [
          'Le calcul donne $f\'(x) = 6x^2 - 10x + 4$, donc $f\'(1) = 6 - 10 + 4 = 0$ : la pente de la tangente est nulle, la tangente est <strong>horizontale</strong>.',
          'Comme $f(1) = 0$ également, la tangente horizontale est ici confondue avec l\'axe des abscisses — le trait en tirets superposé à l\'axe matérialise cette tangente.',
          'En étudiant le signe de $f\'$, on montre que $x=1$ est un <strong>minimum local</strong> : $f\'$ est négative juste avant (entre $x=\\frac{2}{3}$ et $1$) et positive juste après.',
          'Il existe un second point où $f\'(x)=0$, en $x=\\frac{2}{3}$ (un maximum local, $f(2/3)=\\frac{1}{27}\\approx0{,}04$) — non détaillé dans l\'exemple du cours, mais visible sur la courbe comme un léger palier juste avant $x=1$.'
        ],
        reading: 'Repère d\'abord le point où la courbe s\'aplatit (la tangente devient horizontale) : c\'est là que $f\'(x_0)=0$. Le signe de $f\'$ avant et après ce point indique s\'il s\'agit d\'un minimum ou d\'un maximum local.',
        caption: 'Courbe de $f(x)=2x^3-5x^2+4x-1$ et tangente horizontale au point $(1\\,;\\,0)$, extremum local de l\'exemple du cours.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14 (chapitre pilote de la
         première). Principe du cahier des charges (section 9) : une figure
         par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent l'année entière,
         et tous les trois portent sur le MÊME point : un nombre dérivé est un
         coefficient directeur de tangente, pas le résultat d'une formule.
           1. d'où vient la tangente — la sécante qui bascule quand $h \to 0$ ;
           2. ce que vaut $f'(a)$ — la pente, lisible au comptage de carreaux ;
           3. à quoi elle sert — le SIGNE de $f'$ gouverne les variations de $f$.

         TOUTES les coordonnées ci-dessous sont CALCULÉES, jamais posées à
         l'œil, et vérifiées par scripts/manuel/tests/diagrams-1re.test.js :
         chaque tangente a EXACTEMENT la pente $f'(a)$ annoncée et passe par
         le point $(a\,;\,f(a))$. Une tangente à $-3{,}00034$ annoncée $-3$ est
         invisible à la relecture et fausse dans le livre.

         Le calcul a rattrapé une faute pendant la rédaction : dans une
         première version du schéma 1, la fenêtre montait jusqu'à $x = 3$ et la
         courbe sortait du cadre par le haut à $y = -54$ en coordonnées de
         viewBox, donc par-dessus le texte voisin. La fenêtre a été resserrée
         sur $[0\,;\,2{,}75]$. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'D\'où vient la tangente',
          title: 'La sécante bascule, et devient tangente',
          description: 'Le nombre dérivé n\'apparaît pas par magie : c\'est la <strong>limite</strong> d\'une pente que l\'on sait déjà calculer. Sur la courbe de $f(x) = x^2$, on relie le point $A(1\\,;\\,1)$ à un second point $B$ que l\'on fait glisser vers $A$.<br/><br/>À chaque fois, la pente de la sécante $(AB)$ se calcule sans aucune notion nouvelle : c\'est $\\dfrac{f(1+h)-f(1)}{h}$.',
          svg: `
            <svg viewBox="0 0 420 272" role="img" aria-labelledby="der-secante-title der-secante-desc">
              <title id="der-secante-title">Trois secantes qui basculent vers la tangente</title>
              <desc id="der-secante-desc">Sur la courbe de la fonction carre, le point A a pour abscisse 1. Trois points B sont places plus loin sur la courbe, aux abscisses 2,5 puis 1,8 puis 1,3. Chaque droite AB est tracee : sa pente vaut 3,5 puis 2,8 puis 2,3. A mesure que le point B se rapproche de A, la droite AB se redresse de moins en moins et se rapproche d'une droite limite, tracee plus epais, dont la pente vaut exactement 2. Cette droite limite est la tangente a la courbe au point A, et sa pente 2 est le nombre derive de f en 1.</desc>

              <line class="grid-line" x1="66" y1="26" x2="66" y2="236"></line>
              <line class="grid-line" x1="186" y1="26" x2="186" y2="236"></line>
              <line class="grid-line" x1="306" y1="26" x2="306" y2="236"></line>
              <line class="grid-line" x1="48" y1="196.2" x2="396" y2="196.2"></line>
              <line class="grid-line" x1="48" y1="141.3" x2="396" y2="141.3"></line>
              <line class="grid-line" x1="48" y1="86.4" x2="396" y2="86.4"></line>
              <line class="grid-line" x1="48" y1="31.5" x2="396" y2="31.5"></line>

              <line class="axis" x1="48" y1="223.6" x2="396" y2="223.6"></line>
              <line class="axis" x1="66" y1="26" x2="66" y2="236"></line>

              <polyline class="curve-main" points="48,223 56.3,223.5 64.6,223.6 72.9,223.6 81.1,223.2 89.4,222.6 97.7,221.7 106,220.6 114.3,219.2 122.6,217.5 130.9,215.6 139.1,213.4 147.4,211 155.7,208.3 164,205.3 172.3,202.1 180.6,198.6 188.9,194.9 197.1,190.9 205.4,186.6 213.7,182.1 222,177.3 230.3,172.2 238.6,166.9 246.9,161.3 255.1,155.4 263.4,149.3 271.7,143 280,136.3 288.3,129.5 296.6,122.3 304.9,114.9 313.1,107.2 321.4,99.3 329.7,91.1 338,82.6 346.3,73.9 354.6,64.9 362.9,55.7 371.1,46.1 379.4,36.4 387.7,26.3 396,16"></polyline>

              <!-- Les trois secantes, en trait faible et tirete : ce sont des
                   etapes, pas le resultat. Pentes exactes 3,5 puis 2,8 puis
                   2,3, calculees et non posees a l'oeil. -->
              <line class="guide-line" x1="141.4" y1="231.9" x2="390" y2="32.9"></line>
              <line class="guide-line" x1="130.3" y1="231.9" x2="390" y2="65.5"></line>
              <line class="guide-line" x1="118.2" y1="231.9" x2="390" y2="88.9"></line>

              <!-- La tangente, en trait fort : c'est elle l'objet du chapitre.
                   Pente exactement 2, passant par A(1 ; 1). -->
              <line class="curve-main" x1="108" y1="231.9" x2="390" y2="102.9"></line>

              <circle class="plot-point-alt" cx="366" cy="52.1" r="3"></circle>
              <circle class="plot-point-alt" cx="282" cy="134.7" r="3"></circle>
              <circle class="plot-point-alt" cx="222" cy="177.3" r="3"></circle>
              <circle class="plot-point" cx="186" cy="196.2" r="5"></circle>

              <text class="tick-label" x="178" y="212" text-anchor="end">A</text>
              <text class="tick-label" x="374" y="48" text-anchor="start">B</text>
              <text class="annotation-label" x="340" y="96" text-anchor="end">pente 2</text>
              <text class="tick-label" x="66" y="239.6" text-anchor="middle">0</text>
              <text class="tick-label" x="186" y="239.6" text-anchor="middle">1</text>
              <text class="tick-label" x="306" y="239.6" text-anchor="middle">2</text>
              <text class="tick-label" x="58" y="200" text-anchor="end">1</text>
              <text class="tick-label" x="58" y="145" text-anchor="end">3</text>
              <text class="tick-label" x="58" y="90" text-anchor="end">5</text>
            </svg>
          `,
          notes: [
            'Pour $h = 1{,}5$ (point $B$ d\'abscisse $2{,}5$) : la pente vaut $\\dfrac{f(2{,}5)-f(1)}{1{,}5} = \\dfrac{6{,}25-1}{1{,}5} = 3{,}5$.',
            'Pour $h = 0{,}8$ : $\\dfrac{3{,}24-1}{0{,}8} = 2{,}8$. Pour $h = 0{,}3$ : $\\dfrac{1{,}69-1}{0{,}3} = 2{,}3$.',
            'Les pentes obtenues, $3{,}5$ puis $2{,}8$ puis $2{,}3$, se rapprochent de $2$. Ce nombre $2$ est la <strong>limite</strong> : c\'est $f\'(1)$.',
            'Le calcul le confirme : $f\'(x) = 2x$, donc $f\'(1) = 2$. La tangente est bien la droite limite des sécantes.'
          ],
          reading: 'Suis les trois droites en tirets du haut vers le bas : chacune est un peu moins redressée que la précédente. Elles ne se rapprochent pas de n\'importe quoi — elles s\'appuient toutes sur $A$ et convergent vers une seule droite, celle tracée en trait plein. C\'est pour cela que la dérivée se définit par une limite : sans le passage à la limite, on n\'aurait qu\'une pente moyenne de plus.',
          caption: 'Sécantes de pentes $3{,}5$, $2{,}8$ et $2{,}3$ à la courbe de $f(x)=x^2$, convergeant vers la tangente en $A(1\\,;\\,1)$ de pente $f\'(1)=2$.'
        },
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Le nombre dérivé se lit comme une pente',
          description: 'L\'erreur qui coûte l\'année entière consiste à voir $f\'(a)$ comme « le résultat d\'une formule » et non comme un <strong>coefficient directeur</strong>. Les trois tangentes ci-dessous sont tracées sur la même courbe, à la même échelle : leur inclinaison se mesure au carreau, et elle donne $f\'(a)$ sans aucun calcul.',
          svg: `
            <svg viewBox="0 0 430 260" role="img" aria-labelledby="der-pente-title der-pente-desc">
              <title id="der-pente-title">Trois tangentes de pentes 2, 0 et moins 2</title>
              <desc id="der-pente-desc">La courbe d'une parabole tournee vers le bas monte puis redescend. Trois tangentes y sont tracees. En abscisse 1, la tangente monte : elle avance d'un carreau vers la droite et monte de deux carreaux, sa pente vaut 2. En abscisse 3, au sommet de la courbe, la tangente est parfaitement horizontale : sa pente vaut 0. En abscisse 5, la tangente descend d'autant qu'elle avance deux fois, sa pente vaut moins 2. Les trois pentes lues sur le dessin sont exactement les trois nombres derives de la fonction en ces trois points.</desc>

              <line class="grid-line" x1="58.3" y1="34" x2="58.3" y2="228"></line>
              <line class="grid-line" x1="112.6" y1="34" x2="112.6" y2="228"></line>
              <line class="grid-line" x1="167" y1="34" x2="167" y2="228"></line>
              <line class="grid-line" x1="221.3" y1="34" x2="221.3" y2="228"></line>
              <line class="grid-line" x1="275.6" y1="34" x2="275.6" y2="228"></line>
              <line class="grid-line" x1="329.9" y1="34" x2="329.9" y2="228"></line>
              <line class="grid-line" x1="384.3" y1="34" x2="384.3" y2="228"></line>

              <line class="axis" x1="42" y1="203.8" x2="406" y2="203.8"></line>
              <line class="axis" x1="58.3" y1="34" x2="58.3" y2="228"></line>

              <polyline class="curve-main" points="42,232.4 49.6,218.7 57.2,205.7 64.8,193.2 72.3,181.3 79.9,170 87.5,159.2 95.1,149.1 102.7,139.6 110.3,130.7 117.8,122.3 125.4,114.5 133,107.4 140.6,100.8 148.2,94.8 155.8,89.4 163.3,84.6 170.9,80.4 178.5,76.7 186.1,73.7 193.7,71.3 201.3,69.4 208.8,68.1 216.4,67.5 224,67.4 231.6,67.9 239.2,69 246.8,70.7 254.3,73 261.9,75.8 269.5,79.3 277.1,83.3 284.7,88 292.3,93.2 299.8,99 307.4,105.4 315,112.4 322.6,120 330.2,128.2 337.8,137 345.3,146.4 352.9,156.3 360.5,166.9 368.1,178 375.7,189.7 383.3,202.1 390.8,215 398.4,228.5 406,242.6"></polyline>

              <!-- Trois tangentes, pentes exactes 2, 0 et -2. Chaque segment
                   est centre sur son point de tangence, largeur identique :
                   c'est le patron « comparaison », ou la seule difference
                   visible doit etre l'inclinaison. -->
              <line class="focus-line" x1="50.1" y1="197.7" x2="175.1" y2="58.3"></line>
              <line class="focus-line" x1="158.8" y1="67.3" x2="283.8" y2="67.3"></line>
              <line class="focus-line" x1="267.5" y1="58.3" x2="392.4" y2="197.7"></line>

              <circle class="plot-point" cx="112.6" cy="128" r="5"></circle>
              <circle class="plot-point" cx="221.3" cy="67.3" r="5"></circle>
              <circle class="plot-point" cx="329.9" cy="128" r="5"></circle>

              <text class="annotation-label" x="104" y="118" text-anchor="end">pente 2</text>
              <text class="annotation-label" x="221.3" y="54" text-anchor="middle">pente 0</text>
              <text class="annotation-label" x="338" y="118" text-anchor="start">pente −2</text>
              <text class="tick-label" x="112.6" y="219.8" text-anchor="middle">1</text>
              <text class="tick-label" x="221.3" y="219.8" text-anchor="middle">3</text>
              <text class="tick-label" x="329.9" y="219.8" text-anchor="middle">5</text>
            </svg>
          `,
          notes: [
            'La fonction est $f(x) = -0{,}5x^2 + 3x$, donc $f\'(x) = -x + 3$.',
            'En $a = 1$ : $f\'(1) = 2$. La tangente <strong>monte</strong>, et de $2$ carreaux quand elle en avance $1$.',
            'En $a = 3$ : $f\'(3) = 0$. La tangente est <strong>horizontale</strong> : la courbe est à son maximum.',
            'En $a = 5$ : $f\'(5) = -2$. La tangente <strong>descend</strong>, de $2$ carreaux pour $1$ vers la droite.',
            'Le signe de $f\'(a)$ n\'est donc pas une convention à retenir : c\'est ce que fait la tangente, montrée trois fois sur la même courbe.'
          ],
          reading: 'Choisis une des trois tangentes, pose ton doigt sur le point rond, avance d\'un carreau vers la droite et compte combien de carreaux tu montes ou tu descends pour rester sur la droite. Le nombre que tu comptes est $f\'(a)$. Si tu descends, tu comptes en négatif : c\'est toute la signification du signe.',
          caption: 'Trois tangentes à la courbe de $f(x)=-0{,}5x^2+3x$, de pentes $f\'(1)=2$, $f\'(3)=0$ et $f\'(5)=-2$.'
        },
        {
          theme: 'maths',
          kicker: 'À quoi sert le signe',
          title: 'Le signe de la dérivée pilote les variations',
          description: 'C\'est l\'usage principal de la dérivée en première, et la raison pour laquelle on l\'étudie. On ne regarde plus la <strong>valeur</strong> de $f\'$, seulement son <strong>signe</strong> : là où $f\'$ est positive, $f$ monte ; là où elle est négative, $f$ descend.<br/><br/>Les deux points où $f\'$ s\'annule sont exactement les deux endroits où la courbe change de sens.',
          svg: `
            <svg viewBox="0 0 420 300" role="img" aria-labelledby="der-signe-title der-signe-desc">
              <title id="der-signe-title">Variations de f et signe de sa derivee</title>
              <desc id="der-signe-desc">En haut, la courbe d'une fonction cubique monte jusqu'a l'abscisse moins 1, redescend jusqu'a l'abscisse 3, puis remonte. Deux tangentes horizontales y sont tracees, une au sommet situe en abscisse moins 1 et une au creux situe en abscisse 3. En bas, une bande resume le signe de la derivee sur les memes abscisses : la derivee est positive avant moins 1, negative entre moins 1 et 3, positive apres 3. Les deux changements de signe tombent exactement sous les deux tangentes horizontales.</desc>

              <line class="grid-line" x1="73.5" y1="28" x2="73.5" y2="204"></line>
              <line class="grid-line" x1="122.7" y1="28" x2="122.7" y2="204"></line>
              <line class="grid-line" x1="221" y1="28" x2="221" y2="204"></line>
              <line class="grid-line" x1="270.2" y1="28" x2="270.2" y2="204"></line>
              <line class="grid-line" x1="319.3" y1="28" x2="319.3" y2="204"></line>
              <line class="grid-line" x1="368.5" y1="28" x2="368.5" y2="204"></line>

              <line class="axis" x1="44" y1="121.3" x2="398" y2="121.3"></line>
              <line class="axis" x1="171.8" y1="28" x2="171.8" y2="204"></line>

              <polyline class="curve-main" points="44,132.2 50.3,117.7 56.6,104.6 63,93.1 69.3,82.9 75.6,74.1 81.9,66.6 88.3,60.4 94.6,55.3 100.9,51.4 107.2,48.5 113.5,46.7 119.9,45.9 126.2,45.9 132.5,46.8 138.8,48.5 145.1,50.9 151.5,54 157.8,57.8 164.1,62.1 170.4,66.9 176.8,72.1 183.1,77.8 189.4,83.8 195.7,90.1 202,96.6 208.4,103.3 214.7,110 221,116.9 227.3,123.7 233.6,130.5 240,137.2 246.3,143.7 252.6,150 258.9,156 265.3,161.6 271.6,166.9 277.9,171.7 284.2,176 290.5,179.7 296.9,182.9 303.2,185.3 309.5,187 315.8,187.9 322.1,187.9 328.5,187.1 334.8,185.2 341.1,182.4 347.4,178.5 353.8,173.4 360.1,167.2 366.4,159.7 372.7,150.9 379,140.7 385.4,129.2 391.7,116.1 398,101.5"></polyline>

              <!-- Les deux tangentes horizontales, aux deux racines de f'.
                   Meme ordonnee aux deux extremites : horizontalite exacte. -->
              <line class="focus-line" x1="76" y1="45.8" x2="169.4" y2="45.8"></line>
              <line class="focus-line" x1="272.6" y1="188" x2="366" y2="188"></line>
              <circle class="plot-point" cx="122.7" cy="45.8" r="5"></circle>
              <circle class="plot-point" cx="319.3" cy="188" r="5"></circle>

              <!-- Les deux verticales qui relient le changement de sens de la
                   courbe au changement de signe, dessous. C'est ce lien qui
                   fait tout le schema. -->
              <line class="guide-line" x1="122.7" y1="45.8" x2="122.7" y2="236"></line>
              <line class="guide-line" x1="319.3" y1="188" x2="319.3" y2="236"></line>

              <!-- Bande du signe de f', posee sous la courbe. -->
              <line class="frame-line" x1="44" y1="236" x2="398" y2="236"></line>
              <line class="frame-line" x1="44" y1="272" x2="398" y2="272"></line>
              <line class="frame-line" x1="44" y1="236" x2="44" y2="272"></line>
              <line class="frame-line" x1="398" y1="236" x2="398" y2="272"></line>
              <line class="frame-line" x1="122.7" y1="236" x2="122.7" y2="272"></line>
              <line class="frame-line" x1="319.3" y1="236" x2="319.3" y2="272"></line>

              <text class="tick-label" x="36" y="258" text-anchor="end">signe de f prime</text>
              <text class="annotation-label" x="83.3" y="259" text-anchor="middle">+</text>
              <text class="annotation-label" x="221" y="259" text-anchor="middle">−</text>
              <text class="annotation-label" x="358.7" y="259" text-anchor="middle">+</text>
              <text class="tick-label" x="83.3" y="290" text-anchor="middle">f monte</text>
              <text class="tick-label" x="221" y="290" text-anchor="middle">f descend</text>
              <text class="tick-label" x="358.7" y="290" text-anchor="middle">f monte</text>

              <text class="tick-label" x="122.7" y="228" text-anchor="middle">−1</text>
              <text class="tick-label" x="319.3" y="228" text-anchor="middle">3</text>
            </svg>
          `,
          notes: [
            'La fonction est $f(x) = \\dfrac{x^3}{3} - x^2 - 3x + 4$, donc $f\'(x) = x^2 - 2x - 3 = (x-3)(x+1)$.',
            '$f\'$ s\'annule en $x = -1$ et en $x = 3$ : ce sont les deux abscisses des tangentes horizontales.',
            'Entre $-1$ et $3$, le produit $(x-3)(x+1)$ est <strong>négatif</strong> (un facteur positif, un négatif) : $f$ y descend.',
            'À l\'extérieur, les deux facteurs ont le même signe, donc $f\'$ est <strong>positive</strong> : $f$ y monte.',
            'On obtient ainsi les variations de $f$ sans calculer une seule image : seul le signe de $f\'$ a servi.'
          ],
          reading: 'Fais glisser ton doigt sur la courbe de la gauche vers la droite, et regarde en même temps la bande du dessous. Tant qu\'elle porte un $+$, ta main monte. Dès qu\'elle porte un $-$, ta main descend. Les deux traits verticaux marquent l\'instant exact où tu changes de sens, et c\'est là que la tangente est horizontale.',
          caption: 'Variations de $f(x)=\\frac{x^3}{3}-x^2-3x+4$ et signe de $f\'(x)=(x-3)(x+1)$, qui s\'annule en $-1$ et en $3$.'
        }
      ],
      recap: [
        'La dérivée $f\'(x_0)$ est la <strong>pente de la tangente</strong> à la courbe en $x_0$ : c\'est un nombre.',
        'La fonction dérivée $f\'$ est une <strong>fonction</strong> : elle associe à chaque $x$ la pente de la tangente en ce point.',
        '$f\'(x_0) > 0 \\Rightarrow f$ croissante localement ; $f\'(x_0) < 0 \\Rightarrow f$ décroissante ; $f\'(x_0) = 0 \\Rightarrow$ extremum possible.',
        'Tangente en $x_0$ : $y = f\'(x_0)(x - x_0) + f(x_0)$. Retenir : pente $\\times$ écart $+$ ordonnée du point.'
      ],
      piege: 'N\'oublie pas que la dérivée est une <strong>fonction</strong>, pas un nombre. $f\'(x) = 6x + 5$ est une fonction.<br/><br/>Pour avoir la valeur de la dérivée en $x = 2$, on calcule $f\'(2) = 6 \\times 2 + 5 = 17$.'
    },

    quiz: [
      {
        q: 'Soit $f(x) = x^2$. Laquelle de ces affirmations est VRAIE ?',
        options: [
          '$f\'(x) = 2x$ est une fonction ; $f\'(3) = 6$ est la pente de la tangente en $x = 3$',
          '$f\'(x) = 2x$ signifie que la dérivée de $x^2$ est $2x^2$',
          '$f\'(3) = 6$ est la valeur de $f$ en $x = 3$',
          '$f\'(x) = 2$ pour tout $x$ (la dérivée est toujours une constante)'
        ],
        answer: 0,
        correction: '$f\'(x) = 2x$ est bien une <strong>fonction</strong> (elle dépend de $x$). La valeur $f\'(3) = 6$ est la pente de la tangente en $(3\\,;\\,9)$.<br/><br/>Attention à ne pas confondre $f(3) = 9$ (ordonnée du point) et $f\'(3) = 6$ (pente de la tangente en ce point) : ce sont deux informations bien distinctes.'
      },
      {
        q: 'La position d\'un mobile est donnée par $x(t) = 3t^2 + 2t$ (en m, t en s). Sa vitesse à $t = 2$ s est :',
        options: ['$v = 16$ m/s', '$v = 12$ m/s', '$v = 14$ m/s', '$v = 6$ m/s'],
        answer: 2,
        correction: 'On dérive la position pour obtenir la vitesse : $v(t) = x\'(t) = 6t + 2$.<br/><br/>À l\'instant $t = 2$ s : $v(2) = 6 \\times 2 + 2 = 14$ m/s.'
      },
      {
        q: 'La dérivée de $f(x) = e^{2x}$ est :',
        options: ['$f\'(x) = e^{2x}$', '$f\'(x) = 2e^{2x}$', '$f\'(x) = 2e^{x}$', '$f\'(x) = xe^{2x}$'],
        answer: 1,
        correction: 'Par la règle de dérivation des <strong>fonctions composées</strong> : $(e^{u})\'= u\' \\cdot e^u$.<br/><br/>Ici $u = 2x$ et $u\' = 2$, donc $(e^{2x})\' = 2e^{2x}$.'
      },
      {
        q: 'L\'équation de la tangente à la courbe de $f(x) = x^2$ en $x_0 = 3$ est :',
        options: ['$y = 6x - 9$', '$y = 6x + 9$', '$y = 3x - 9$', '$y = 2x + 3$'],
        answer: 0,
        correction: 'On calcule d\'abord la dérivée : $f\'(x) = 2x$, donc $f\'(3) = 6$ et $f(3) = 9$.<br/><br/>La tangente en $x_0 = 3$ s\'écrit : $y = f\'(3)(x - 3) + f(3) = 6(x - 3) + 9 = 6x - 18 + 9 = 6x - 9$.'
      },
      {
        q: 'Si $f\'(x) = 0$ en $x_0$, alors :',
        options: ['$f$ a forcément un maximum en $x_0$', '$f$ a forcément un minimum en $x_0$', 'La tangente en $x_0$ est horizontale (extremum possible mais pas certain)', '$f(x_0) = 0$'],
        answer: 2,
        correction: '$f\'(x_0) = 0$ signifie que la tangente est <strong>horizontale</strong> en $x_0$.<br/><br/>C\'est une <strong>condition nécessaire</strong> pour un extremum, mais pas suffisante : par exemple, $f(x) = x^3$ vérifie $f\'(0) = 0$ sans extremum en $0$ (point d\'inflexion).'
      }
    ],

    /* BANQUE ÉLARGIE le 2026-09-14. Mesure d'avant : 12 tirages pour UNE SEULE
       tâche réelle — « dériver $ax^2+bx+c$ et évaluer en $x_0$ » — habillée de
       quatre décors (fusée, bénéfice, four, mobile). Le plafond de répétitions
       comptait donc quatre moules distincts là où l'élève ne rencontrait qu'un
       seul exercice, imprimé douze fois.

       Sept tâches RÉELLEMENT distinctes désormais, choisies pour couvrir ce que
       le chapitre demande vraiment : le nombre dérivé comme pente (t1), le taux
       de variation dont il est la limite (t2), l'équation de la tangente (t3),
       la dérivée d'un produit (t4), la composée avec l'exponentielle (t5), la
       résolution de $f'(x)=0$ (t6) et la dérivée seconde (t7).

       Les décors restent, mais ils n'habillent plus qu'une tâche chacun : le
       décor ne fabrique plus de fausse diversité. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['pente', 'taux', 'tangente', 'produit', 'expo', 'annule', 'seconde']);

        if (tache === 'pente') {
          // b évite -1, qui imprimerait « -1t » au lieu de « -t ».
          const a = rand(2, 5), b = rand(-6, -2), c = rand(1, 8), x0 = rand(1, 4);
          const ctx = pick([
            { intro: 'La hauteur d\'une fusée modèle réduit est modélisée par', v: 'h', t: 't' },
            { intro: 'La température d\'un four en fonction du temps est modélisée par', v: 'T', t: 't' },
            { intro: 'La position d\'un mobile sur un rail est donnée par', v: 'x', t: 't' }
          ]);
          const fp = 2 * a * x0 + b;
          return {
            statement: `${ctx.intro} $${ctx.v}(${ctx.t}) = ${a}${ctx.t}^2 ${b > 0 ? '+' : ''}${b}${ctx.t} + ${c}$.<br/><br/>Calculer $${ctx.v}'(${ctx.t})$, puis en déduire la pente de la tangente en $${ctx.t}_0 = ${x0}$.<br/><br/>Donner la valeur de $${ctx.v}'(${x0})$.`,
            answer: fp, tolerance: 0.001, unit: '',
            hint: `Dérive terme à terme : $(${a}${ctx.t}^2)' = ${2 * a}${ctx.t}$ et $(${b}${ctx.t})' = ${b}$. Puis remplace $${ctx.t}$ par $${x0}$.`,
            solution: [
              `La fonction dérivée vaut $${ctx.v}'(${ctx.t}) = ${2 * a}${ctx.t} ${b > 0 ? '+' : ''}${b}$.`,
              `On remplace $${ctx.t}$ par $${x0}$ : $${ctx.v}'(${x0}) = ${2 * a} \\times ${x0} ${b > 0 ? '+' : ''}${b} = ${fp}$.`,
              `La pente de la tangente en $${ctx.t}_0 = ${x0}$ vaut donc $${fp}$.`
            ]
          };
        }

        if (tache === 'taux') {
          /* Le taux de variation, dont le nombre dérivé est la limite. Tâche
             absente de la banque d'origine alors que la définition du cours
             repose entièrement dessus. Les valeurs sont choisies pour que le
             quotient tombe juste. */
          const a = rand(2, 4), x0 = rand(1, 3), h = pick([1, 2]);
          const f = (x) => a * x * x;
          const taux = (f(x0 + h) - f(x0)) / h;
          return {
            statement: `Soit $f(x) = ${a}x^2$.<br/><br/>Calculer le taux de variation de $f$ entre $x_0 = ${x0}$ et $x_0 + h$, pour $h = ${h}$.<br/><br/>C'est-à-dire le quotient $\\dfrac{f(${x0 + h}) - f(${x0})}{${h}}$.`,
            answer: taux, tolerance: 0.001, unit: '',
            hint: `Calcule d'abord les deux images : $f(${x0 + h})$ et $f(${x0})$. Le taux est leur différence divisée par $${h}$.`,
            solution: [
              `Le taux de variation entre $${x0}$ et $${x0 + h}$ s'obtient en calculant les deux images : $f(${x0 + h}) = ${a} \\times ${x0 + h}^2 = ${f(x0 + h)}$ et $f(${x0}) = ${a} \\times ${x0}^2 = ${f(x0)}$.`,
              `Le quotient vaut alors $\\dfrac{${f(x0 + h)} - ${f(x0)}}{${h}} = ${taux}$.`,
              `Ce nombre est une pente <strong>moyenne</strong> ; en faisant tendre $h$ vers $0$, on obtiendrait $f'(${x0}) = ${2 * a * x0}$.`
            ]
          };
        }

        if (tache === 'tangente') {
          /* L'équation de la tangente, demandée dans l'exemple du cours mais
             jamais travaillée dans la banque d'origine. La réponse attendue est
             l'ordonnée à l'origine, pour rester un exercice numérique. */
          const a = rand(2, 3), b = pick([-5, -4, -3, -2, 2, 3, 4, 5]), x0 = rand(1, 4);
          const fp = 2 * a * x0 + b;
          const fx0 = a * x0 * x0 + b * x0;
          const p = -fp * x0 + fx0;
          return {
            statement: `Soit $f(x) = ${a}x^2 ${b >= 0 ? '+' : ''}${b}x$.<br/><br/>La tangente à la courbe de $f$ au point d'abscisse $x_0 = ${x0}$ s'écrit sous la forme $y = ${fp}x + p$.<br/><br/>Déterminer la valeur de $p$.`,
            answer: p, tolerance: 0.001, unit: '',
            hint: `La tangente passe par le point $(${x0}\\,;\\,f(${x0}))$. Remplace $x$ par $${x0}$ dans $y = ${fp}x + p$ et identifie avec $f(${x0})$.`,
            solution: [
              `L'équation de la tangente en $x_0$ est $y = f'(x_0)(x - x_0) + f(x_0)$, et ici $f'(x) = ${2 * a}x ${b >= 0 ? '+' : ''}${b}$ donne $f'(${x0}) = ${fp}$.`,
              `L'ordonnée du point de tangence vaut $f(${x0}) = ${a} \\times ${x0}^2 ${b >= 0 ? '+' : ''}${b} \\times ${x0} = ${fx0}$.`,
              /* Le terme $f(x_0)$ est parenthésé quand il est négatif : sans
                 cela, le corrigé imprimait « $y = 2(x - 1) + -1$ », deux
                 signes à la suite. Trouvé au contrôle visuel de la banque
                 (supplément 1.13), page 21 de l'édition professeur — aucun
                 test ne lit la syntaxe d'une formule (2026-09-14). */
              `On développe : $y = ${fp}(x - ${x0}) + ${fx0 < 0 ? '(' + fx0 + ')' : fx0} = ${fp}x ${p >= 0 ? '+' : ''}${p}$, donc $p = ${p}$.`
            ]
          };
        }

        if (tache === 'produit') {
          const n = rand(2, 4), k = rand(2, 5), x0 = rand(1, 3);
          // g(x) = k*x^n*e^x  =>  g'(x) = k*(n*x^(n-1) + x^n)*e^x
          // On demande le COEFFICIENT devant e^x0, pour garder un entier.
          const coef = k * (n * Math.pow(x0, n - 1) + Math.pow(x0, n));
          return {
            statement: `Soit $g(x) = ${k}x^{${n}}e^{x}$.<br/><br/>En appliquant la formule du produit, on obtient $g'(x) = C \\times e^{x}$ où $C$ est une expression en $x$.<br/><br/>Calculer la valeur de $C$ pour $x = ${x0}$.`,
            answer: coef, tolerance: 0.001, unit: '',
            hint: `Pose $u = ${k}x^{${n}}$ et $v = e^x$. Alors $u' = ${k * n}x^{${n - 1}}$ et $v' = e^x$. Factorise ensuite par $e^x$.`,
            solution: [
              `On applique $(uv)' = u'v + uv'$ avec $u = ${k}x^{${n}}$ et $v = e^{x}$, ce qui donne $g'(x) = ${k * n}x^{${n - 1}}e^{x} + ${k}x^{${n}}e^{x}$.`,
              `On factorise par $e^{x}$ : $g'(x) = \\left(${k * n}x^{${n - 1}} + ${k}x^{${n}}\\right)e^{x}$, donc $C = ${k * n}x^{${n - 1}} + ${k}x^{${n}}$.`,
              `Pour $x = ${x0}$ : $C = ${k * n} \\times ${Math.pow(x0, n - 1)} + ${k} \\times ${Math.pow(x0, n)} = ${coef}$.`
            ]
          };
        }

        if (tache === 'expo') {
          const k = rand(2, 5), m = rand(2, 6);
          // f(x) = m*e^(kx) => f'(x) = m*k*e^(kx) ; on demande le facteur m*k
          return {
            statement: `Soit $f(x) = ${m}e^{${k}x}$.<br/><br/>Sa dérivée s'écrit $f'(x) = A \\times e^{${k}x}$.<br/><br/>Déterminer la valeur du coefficient $A$.`,
            answer: m * k, tolerance: 0.001, unit: '',
            hint: `Utilise $(e^{u})' = u' \\times e^{u}$. Ici $u = ${k}x$, donc $u' = ${k}$ : ce facteur $${k}$ vient multiplier le $${m}$ déjà présent.`,
            solution: [
              `La règle de la composée avec l'exponentielle donne $(e^{u})' = u' \\times e^{u}$, et ici $u = ${k}x$ donc $u' = ${k}$.`,
              `Le coefficient $${m}$ reste devant, et le facteur $${k}$ vient s'y ajouter par multiplication : $f'(x) = ${m} \\times ${k} \\times e^{${k}x}$.`,
              `On obtient donc $A = ${m * k}$. L'erreur fréquente consiste à oublier le facteur $${k}$ et à répondre $${m}$.`
            ]
          };
        }

        if (tache === 'annule') {
          /* f(x) = ax^3 - 3a*r^2*x + c  =>  f'(x) = 3a(x^2 - r^2), qui s'annule
             en x = r et x = -r. On demande la racine positive : les nombres
             tombent justes par construction, jamais par tâtonnement. */
          const a = rand(2, 3), r = rand(2, 4), c = rand(0, 6);
          const b = 3 * a * r * r;
          return {
            statement: `Soit $f(x) = ${a}x^3 - ${b}x ${c > 0 ? '+ ' + c : ''}$.<br/><br/>Déterminer la valeur <strong>positive</strong> de $x$ pour laquelle la tangente à la courbe de $f$ est horizontale.`,
            answer: r, tolerance: 0.001, unit: '',
            hint: `Une tangente horizontale signifie $f'(x) = 0$. Dérive, puis résous l'équation obtenue — elle se ramène à $x^2 = $ un nombre.`,
            solution: [
              `Une tangente horizontale correspond à un nombre dérivé nul, on cherche donc les solutions de $f'(x) = 0$ avec $f'(x) = ${3 * a}x^2 - ${b}$.`,
              `L'équation $${3 * a}x^2 - ${b} = 0$ donne $x^2 = \\dfrac{${b}}{${3 * a}} = ${r * r}$, d'où $x = ${r}$ ou $x = -${r}$.`,
              `La valeur positive demandée est donc $x = ${r}$.`
            ]
          };
        }

        // tache === 'seconde' : dérivée seconde, utile pour la terminale.
        const a = rand(2, 4), b = rand(2, 6), c = rand(1, 5), x0 = rand(1, 3);
        // f(x) = ax^3 + bx^2 + cx => f'(x) = 3ax^2+2bx+c => f''(x) = 6ax+2b
        const fpp = 6 * a * x0 + 2 * b;
        const ctx = pick([
          { intro: 'La position d\'un chariot est donnée par', v: 'x', t: 't', quoi: 'l\'accélération' },
          { intro: 'Le volume d\'eau dans une cuve est donné par', v: 'V', t: 't', quoi: 'la variation du débit' }
        ]);
        return {
          statement: `${ctx.intro} $${ctx.v}(${ctx.t}) = ${a}${ctx.t}^3 + ${b}${ctx.t}^2 + ${c}${ctx.t}$.<br/><br/>En dérivant <strong>deux fois</strong>, calculer ${ctx.quoi} à l'instant $${ctx.t} = ${x0}$, c'est-à-dire $${ctx.v}''(${x0})$.`,
          answer: fpp, tolerance: 0.001, unit: '',
          hint: `Dérive une première fois pour obtenir $${ctx.v}'(${ctx.t}) = ${3 * a}${ctx.t}^2 + ${2 * b}${ctx.t} + ${c}$, puis dérive ce résultat une seconde fois.`,
          solution: [
            `On dérive une première fois : $${ctx.v}'(${ctx.t}) = ${3 * a}${ctx.t}^2 + ${2 * b}${ctx.t} + ${c}$.`,
            `On dérive ce résultat une seconde fois, et le terme constant $${c}$ disparaît : $${ctx.v}''(${ctx.t}) = ${6 * a}${ctx.t} + ${2 * b}$.`,
            `À l'instant $${ctx.t} = ${x0}$ : $${ctx.v}''(${x0}) = ${6 * a} \\times ${x0} + ${2 * b} = ${fpp}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'En cinématique, la position d\'un objet en chute libre (résistance de l\'air négligée) est donnée par : $x(t) = x_0 + v_0 t + \\dfrac{1}{2}g t^2$ où $x_0 = 0$ m (position initiale), $v_0 = 5$ m/s (vitesse initiale), $g = 9{,}81$ m/s² (pesanteur), $t$ le temps en secondes.',
      schema: null,
      tasks: [
        'Exprimer la vitesse $v(t) = \\dfrac{dx}{dt}$ en dérivant $x(t)$.',
        'Calculer la vitesse à $t = 3$ s.',
        'Exprimer l\'accélération $a(t) = \\dfrac{dv}{dt}$ et vérifier qu\'elle est constante et égale à $g$.'
      ],
      solutions: [
        '$v(t) = x\'(t) = v_0 + g \\cdot t = 5 + 9{,}81 t$.',
        '$v(3) = 5 + 9{,}81 \\times 3 = 5 + 29{,}43 = 34{,}43$ m/s.',
        '$a(t) = v\'(t) = g = 9{,}81$ m/s². L\'accélération est bien constante et égale à $g$. La dérivée d\'une fonction linéaire ($v_0 + >$) est une constante ($g$).'
      ],
      finalAnswer: '$v(3) = 34{,}43$ m/s ; $a(t) = g = 9{,}81$ m/s² (constante)'
    },

    evaluation: {
      title: 'Évaluation — La Dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x^4 - 2x^2 + 7x - 1$. Calculer $f\'(2)$.',
          type: 'numeric',
          answer: 87,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On dérive terme à terme : $f\'(x) = 12x^3 - 4x + 7$.<br/><br/>On remplace ensuite $x$ par $2$ : $f\'(2) = 12 \\times 8 - 4 \\times 2 + 7 = 96 - 8 + 7 = 87$.'
        },
        {
          statement: 'La position d\'un mobile est $x(t) = 5t^3 - 2t^2 + t$ (en m, $t$ en s). Calculer l\'accélération $a(t)$ à l\'instant $t = 1$ s.',
          type: 'numeric',
          answer: 26,
          tolerance: 0.01,
          unit: 'm/s²',
          points: 2,
          correction: 'On dérive une première fois pour la vitesse : $v(t) = x\'(t) = 15t^2 - 4t + 1$.<br/><br/>On dérive une seconde fois pour l\'accélération : $a(t) = v\'(t) = 30t - 4$.<br/><br/>À $t = 1$ s : $a(1) = 30 \\times 1 - 4 = 26$ m/s².'
        },
        {
          statement: 'La dérivée de $g(x) = x^2 e^x$ est :',
          type: 'multiple-choice',
          options: ['$g\'(x) = 2x e^x$', '$g\'(x) = (2x + x^2) e^x$', '$g\'(x) = x^2 e^x + 2x$', '$g\'(x) = 2x e^{2x}$'],
          answer: 1,
          points: 2,
          correction: 'On applique la <strong>formule du produit</strong> : $(uv)\' = u\'v + uv\'$.<br/><br/>Avec $u = x^2$, $u\' = 2x$, $v = e^x$, $v\' = e^x$.<br/><br/>Donc $g\'(x) = 2x e^x + x^2 e^x = (2x + x^2) e^x$. On factorise par $e^x$ pour simplifier l\'expression.'
        },
        {
          statement: 'Soit $h(x) = 4x^3 - 12x + 5$. Déterminer la valeur de $x > 0$ pour laquelle $h\'(x) = 0$.',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: '',
          /* 3 -> 2 points le 2026-09-14, pour ramener le barème à 10 après
             l'ajout de la cinquième question. Les 36 autres évaluations du
             corpus sont barémées sur 10 : deux devoirs sur 13 et sur 12
             avaient déjà été trouvés hors norme sur les vagues précédentes. */
          points: 2,
          correction: 'On dérive : $h\'(x) = 12x^2 - 12$.<br/><br/>On résout $12x^2 - 12 = 0$, ce qui donne $x^2 = 1$, donc $x = 1$ ou $x = -1$.<br/><br/>La solution positive demandée est $x = 1$. En ce point, la tangente à la courbe est horizontale.'
        },
        /* CINQUIÈME QUESTION ajoutée le 2026-09-14. Ce chapitre était le SEUL
           des dix de la première à n'en porter que quatre, alors que la
           convention du corpus en compte cinq par module à tous les niveaux.
           Le barème reste sur 10 : les deux premières questions passent de
           2 et 3 à 2 et 2 points, ce qui libère le point de celle-ci.

           Elle porte volontairement la compétence « représenter », que les
           quatre autres questions ne mobilisent pas : toutes demandaient un
           calcul de dérivée, aucune ne demandait de LIRE une pente sur un
           dessin — ce qui est pourtant le malentendu fondateur du chapitre.
           L'étiquette suit l'énoncé, jamais l'inverse. */
        {
          statement: 'Sur la courbe d\'une fonction $f$, la tangente au point d\'abscisse $2$ passe par les points $(2\\,;\\,5)$ et $(6\\,;\\,-7)$.<br/><br/>En déduire la valeur de $f\'(2)$.',
          type: 'numeric',
          answer: -3,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Le nombre dérivé $f\'(2)$ est le <strong>coefficient directeur de la tangente</strong> en ce point : aucune dérivation n\'est nécessaire ici, il suffit de lire la pente de la droite.<br/><br/>Le coefficient directeur d\'une droite passant par deux points se calcule par $\\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{-7 - 5}{6 - 2} = \\dfrac{-12}{4} = -3$.<br/><br/>Donc $f\'(2) = -3$. Le signe négatif indique que la courbe <strong>descend</strong> au voisinage de $x = 2$.'
        }
      ]
    }
  });
