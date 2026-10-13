/* =========================================================
   Spark Learning – data/lycee-tle/tle-limites-continuite.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-limites-continuite',
    level: 2, subject: 'maths',
    icon: '♾️',
    title: 'Limites de fonctions et continuité',
    subtitle: 'Limites en l\'infini, en un point, continuité',
    keywords: ['Limite', 'Continuité', 'Infini', 'Indétermination'],
    physics: 'Vitesse limite en chute avec frottements, régime permanent lors de la charge d\'un condensateur',
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version était un
         résumé de cours en cinq paragraphes (limite, formes indéterminées,
         dominance, continuité) : le cahier des charges proscrit l'ouverture
         par la définition, et celle-ci en empilait quatre.

         La question retenue ne se répond avec AUCUN outil déjà disponible :
         la substitution, seul geste connu de l'élève pour évaluer une
         fonction, échoue par construction. Et elle échoue de façon
         intéressante — elle ne donne pas « impossible », elle donne $0/0$,
         c'est-à-dire une expression qui a l'air d'un nombre sans en être un.

         On évite le travers inverse (l'anecdote plaquée) : la difficulté est
         réelle, l'élève peut la constater en trois secondes de calcul, et la
         calculatrice lui fournit elle-même le contre-argument. */
      intro: 'Prends la fonction $f(x) = \\dfrac{x^2 - 4}{x - 2}$ et essaie de calculer sa valeur en $x = 2$.<br/><br/>Tu obtiens $\\dfrac{0}{0}$. Ce n\'est pas un nombre, et ta calculatrice refuse elle aussi de répondre.<br/><br/>Maintenant essaie tout près de $2$. Pour $x = 1{,}99$, tu trouves $3{,}99$. Pour $x = 2{,}01$, tu trouves $4{,}01$. Pour $x = 1{,}9999$, tu trouves $3{,}9999$.<br/><br/>Voilà l\'étrangeté : la fonction <strong>n\'existe pas</strong> en $2$, et pourtant tout autour d\'elle, elle se dirige très clairement vers $4$. Le trou est ponctuel, la direction est nette.<br/><br/>C\'est cette situation que les mathématiques ont dû apprendre à décrire, et il leur a fallu deux siècles pour y arriver proprement. Le mot inventé pour cela est <strong>limite</strong> : on écrit $\\lim_{x \\to 2} f(x) = 4$, ce qui ne dit rien de $f(2)$ — qui n\'existe pas — mais tout de ce qui se passe <strong>autour</strong>.<br/><br/>Et ce n\'est pas une curiosité de manuel. Une vitesse instantanée, c\'est un déplacement divisé par une durée quand la durée tend vers zéro : encore un $\\dfrac{0}{0}$. Toute la dérivation que tu pratiques depuis un an repose sur cette idée.<br/><br/>Ce chapitre lui donne enfin son nom, ses règles, et la façon de s\'en servir quand la substitution ne répond plus.',
      definitions: [
        { term: 'Limite finie en $a$', def: '$\\lim_{x \\to a} f(x) = L$ signifie que $f(x)$ se rapproche aussi près que l\'on veut de $L$ quand $x$ se rapproche de $a$. On note aussi $f(x) \\xrightarrow[x \\to a]{} L$.' },
        { term: 'Forme indéterminée (FI)', def: 'Expression du type $\\dfrac{0}{0}$, $\\dfrac{\\infty}{\\infty}$, $\\infty - \\infty$, $0 \\times \\infty$, $1^\\infty$, $0^0$ ou $\\infty^0$ dont la valeur dépend du contexte. Il faut <strong>lever l\'indétermination</strong> (factoriser, simplifier, croissances comparées).' },
        { term: 'Continuité en $a$', def: '$f$ est continue en $a$ si $\\lim_{x \\to a} f(x) = f(a)$. Intuitivement : on peut tracer la courbe de $f$ sans lever le crayon en $a$.' },
        { term: 'Asymptote', def: 'Droite dont la courbe s\'approche à l\'infini. <strong>Horizontale</strong> $y = L$ si $\\lim_{x \\to \\pm\\infty} f(x) = L$. <strong>Verticale</strong> $x = a$ si $\\lim_{x \\to a} f(x) = \\pm\\infty$.' }
      ],
      method: {
        title: 'Calculer une limite',
        steps: [
          '<strong>Substitution directe</strong> : si le résultat est défini, c\'est la limite.',
          '<strong>Formes indéterminées</strong> : si $0/0$, $\\infty/\\infty$, ou $\\infty-\\infty$, factoriser, simplifier, ou croissances comparées.',
          '<strong>Dominance polynomiale</strong> : en $\\pm\\infty$, le terme de plus haut degré domine.',
          '<strong>Continuité</strong> : $f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x\\to a}f(x)=f(a)$.'
        ]
      },
      example: {
        statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^3 - 1}{x^2 - 1}$.',
        steps: [
          'Substitution directe : $\\dfrac{1-1}{1-1} = \\dfrac{0}{0}$ → forme indéterminée.',
          'Factorisation du numérateur : $x^3 - 1 = (x-1)(x^2+x+1)$.',
          'Factorisation du dénominateur : $x^2 - 1 = (x-1)(x+1)$.',
          'Simplification : $\\dfrac{(x-1)(x^2+x+1)}{(x-1)(x+1)} = \\dfrac{x^2+x+1}{x+1}$ pour $x \\neq 1$.',
          'Substitution : $\\dfrac{1+1+1}{1+1} = \\dfrac{3}{2}$.'
        ],
        answer: '$\\lim_{x \\to 1} \\dfrac{x^3-1}{x^2-1} = \\dfrac{3}{2} = 1{,}5$'
      },
      formulas: [
        '$\\lim_{x\\to+\\infty}x^n=+\\infty$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{1}{x^n}=0$ ($n>0$)',
        '$\\lim_{x\\to+\\infty}\\frac{a_n x^n+\\cdots}{b_m x^m+\\cdots}=\\lim_{x\\to+\\infty}\\frac{a_n x^n}{b_m x^m}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Asymptotes verticale et horizontale',
        title: 'Les deux asymptotes de $f(x)=\\dfrac{2x^3-x}{x^3+1}$',
        description: 'Fonction reprise du quiz de ce cours : le dénominateur $x^3+1$ s\'annule uniquement en $x=-1$ (asymptote verticale), et les termes de plus haut degré donnent $\\lim_{x\\to\\pm\\infty}f(x)=2$ (asymptote horizontale).',
        svg: `
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="limites-graph-title limites-graph-desc">
            <title id="limites-graph-title">Courbe de f avec asymptote verticale et horizontale</title>
            <desc id="limites-graph-desc">Deux branches separees par l'asymptote verticale x=-1, toutes deux se rapprochant de l'asymptote horizontale y=2.</desc>
            <line class="grid-line" x1="88.8" y1="30" x2="88.8" y2="260"></line>
            <line class="grid-line" x1="132.5" y1="30" x2="132.5" y2="260"></line>
            <line class="grid-line" x1="263.8" y1="30" x2="263.8" y2="260"></line>
            <line class="grid-line" x1="307.5" y1="30" x2="307.5" y2="260"></line>
            <line class="grid-line" x1="351.3" y1="30" x2="351.3" y2="260"></line>
            <line class="grid-line" x1="40" y1="231.3" x2="400" y2="231.3"></line>
            <line class="grid-line" x1="40" y1="116.3" x2="400" y2="116.3"></line>
            <line class="grid-line" x1="40" y1="87.5" x2="400" y2="87.5"></line>
            <line class="grid-line" x1="40" y1="58.8" x2="400" y2="58.8"></line>
            <line class="axis" x1="40" y1="173.8" x2="400" y2="173.8"></line>
            <line class="axis" x1="220" y1="25" x2="220" y2="265"></line>
            <line class="guide-line" x1="176.25" y1="25" x2="176.25" y2="265"></line>
            <line class="guide-line" x1="40" y1="145" x2="400" y2="145"></line>
            <path class="curve-main" d="M45 145.5 L88.8 145.5 L132.5 145 L154.4 142 L167.5 129.2 L171.9 105.9 L174.5 34.5"></path>
            <path class="curve-main" d="M178.2 260 L180.6 203.3 L185 180.3 L193.8 170.7 L202.5 169.6 L211.3 171.1 L220 173.8 L233.1 177.2 L246.3 175.7 L263.8 166.6 L285.6 156.5 L307.5 151.4 L329.4 148.9 L351.3 147.6 L395 146.3"></path>
            <circle class="plot-point" cx="220" cy="173.8" r="4.5"></circle>
            <text class="tick-label" x="41" y="280">-4</text>
            <text class="tick-label" x="85" y="280">-3</text>
            <text class="tick-label" x="129" y="280">-2</text>
            <text class="tick-label" x="172" y="280">-1</text>
            <text class="tick-label" x="216" y="280">0</text>
            <text class="tick-label" x="260" y="280">1</text>
            <text class="tick-label" x="304" y="280">2</text>
            <text class="tick-label" x="347" y="280">3</text>
            <text class="tick-label" x="391" y="280">4</text>
            <text class="tick-label" x="200" y="235">-4</text>
            <text class="tick-label" x="204" y="149">2</text>
            <text class="tick-label" x="204" y="120">4</text>
            <text class="tick-label" x="204" y="91">6</text>
            <text class="tick-label" x="204" y="63">8</text>
            <text class="axis-label" x="404" y="178">x</text>
            <text class="axis-label" x="224" y="26">f(x)</text>
            <text class="annotation-label" x="60" y="50">x = -1</text>
            <text class="annotation-label" x="330" y="60">y = 2</text>
            <text class="annotation-label" x="235" y="100">f(x) = (2x³ − x) / (x³ + 1)</text>
            <text class="annotation-label" x="226" y="166">f(0) = 0</text>
          </svg>
        `,
        notes: [
          'Le dénominateur $x^3+1=(x+1)(x^2-x+1)$ ne s\'annule qu\'en $x=-1$ (le facteur $x^2-x+1$ a un discriminant négatif) : c\'est l\'unique asymptote verticale, tracée en pointillé vertical.',
          'En $\\pm\\infty$, les termes de plus haut degré dominent : $\\lim_{x\\to\\pm\\infty}\\dfrac{2x^3-x}{x^3+1}=\\lim_{x\\to\\pm\\infty}\\dfrac{2x^3}{x^3}=2$, d\'où l\'asymptote horizontale $y=2$, tracée en pointillé horizontal.',
          'Les deux branches ne sont jamais reliées : à gauche de $x=-1$, $f(x)\\to+\\infty$ ; à droite, $f(x)\\to-\\infty$ (changement de signe au voisinage du pôle).',
          'Vérification simple en $x=0$ : $f(0)=\\dfrac{0}{1}=0$, un point de passage exact confirmé par substitution directe.'
        ],
        reading: 'Les deux courbes (une par branche) ne traversent jamais la droite verticale $x=-1$ : elles s\'en approchent indéfiniment sans jamais la toucher, tout en se rapprochant de la droite horizontale $y=2$ loin de l\'origine.',
        caption: 'Courbe de $f(x)=(2x^3-x)/(x^3+1)$ (fonction du quiz de ce module), avec ses asymptotes $x=-1$ et $y=2$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14, sur le modèle du
         chapitre pilote (tle-primitives-integrales). Principe : une figure
         par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent le chapitre :
           1. l'élève confond les deux sortes d'asymptotes, et surtout ne
              voit pas qu'elles répondent à deux questions différentes (que
              devient $f$ quand $x$ part à l'infini / quand $x$ approche un
              point interdit) ; la figure les met sur UNE SEULE courbe ;
           2. il croit que « pas définie en $a$ » et « pas de limite en $a$ »
              sont la même chose, et symétriquement que « définie partout »
              veut dire « continue » ; la figure oppose un TROU et un SAUT ;
           3. il ne voit pas ce que « tendre vers » veut dire concrètement ;
              la figure zoome sur le trou, et la limite devient une valeur
              qu'on encadre d'aussi près qu'on veut.

         TOUTES les coordonnées sont CALCULÉES par script (jamais posées à
         l'œil) et vérifiées par scripts/manuel/tests/diagrams-tle.test.js :
         les asymptotes tracées sont les VRAIES limites de la fonction
         représentée, les paliers du saut sont aux bonnes hauteurs, et la
         courbe du zoom est bien la même fonction que celle vue de loin. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux questions, deux asymptotes',
          title: 'Une asymptote horizontale et une asymptote verticale sur la même courbe',
          description: 'Les deux sortes d\'asymptotes ne répondent pas à la même question. L\'<strong>horizontale</strong> dit ce que devient $f$ quand $x$ part à l\'infini. La <strong>verticale</strong> dit ce qui se passe quand $x$ s\'approche d\'une valeur interdite. Ici la même fonction porte les deux.',
          svg: `
            <svg viewBox="0 0 420 290" role="img" aria-labelledby="tle-lim-asym-title tle-lim-asym-desc">
              <title id="tle-lim-asym-title">Courbe avec une asymptote verticale et une asymptote horizontale</title>
              <desc id="tle-lim-asym-desc">Une courbe en deux branches separees par une droite verticale en abscisse un. La branche de gauche descend vers le bas en s'approchant de cette droite sans jamais la toucher, et vers la gauche elle se rapproche d'une droite horizontale de hauteur deux. La branche de droite descend depuis le haut en longeant la droite verticale, puis s'aplatit et se rapproche a son tour de la meme droite horizontale de hauteur deux. La droite verticale est l'asymptote verticale, la droite horizontale l'asymptote horizontale.</desc>

              <line class="grid-line" x1="82.5" y1="26" x2="82.5" y2="246"></line>
              <line class="grid-line" x1="252.5" y1="26" x2="252.5" y2="246"></line>
              <line class="grid-line" x1="295" y1="26" x2="295" y2="246"></line>
              <line class="grid-line" x1="337.5" y1="26" x2="337.5" y2="246"></line>
              <line class="grid-line" x1="40" y1="209.3" x2="380" y2="209.3"></line>
              <line class="grid-line" x1="40" y1="81" x2="380" y2="81"></line>

              <line class="axis" x1="40" y1="172.7" x2="380" y2="172.7"></line>
              <line class="axis" x1="167.5" y1="26" x2="167.5" y2="246"></line>

              <line class="focus-line" x1="210" y1="26" x2="210" y2="246"></line>
              <line class="focus-line" x1="40" y1="136" x2="380" y2="136"></line>

              <polyline class="curve-main" points="40,149.8 41.7,149.9 43.4,150 45.1,150.2 46.8,150.3 48.5,150.5 50.3,150.6 52,150.8 53.7,151 55.4,151.1 57.1,151.3 58.8,151.5 60.5,151.6 62.2,151.8 63.9,152 65.6,152.2 67.4,152.4 69.1,152.6 70.8,152.8 72.5,153 74.2,153.2 75.9,153.4 77.6,153.7 79.3,153.9 81,154.1 82.7,154.4 84.4,154.6 86.2,154.9 87.9,155.1 89.6,155.4 91.3,155.7 93,156 94.7,156.3 96.4,156.6 98.1,156.9 99.8,157.2 101.5,157.6 103.2,157.9 105,158.3 106.7,158.6 108.4,159 110.1,159.4 111.8,159.8 113.5,160.2 115.2,160.7 116.9,161.1 118.6,161.6 120.3,162.1 122.1,162.6 123.8,163.1 125.5,163.7 127.2,164.2 128.9,164.8 130.6,165.4 132.3,166.1 134,166.8 135.7,167.5 137.4,168.2 139.1,169 140.9,169.8 142.6,170.7 144.3,171.6 146,172.5 147.7,173.5 149.4,174.6 151.1,175.7 152.8,176.9 154.5,178.1 156.2,179.5 158,180.9 159.7,182.4 161.4,184.1 163.1,185.8 164.8,187.7 166.5,189.7 168.2,191.9 169.9,194.3 171.6,196.9 173.3,199.8 175,202.9 176.8,206.3 178.5,210.1 180.2,214.4 181.9,219.1 183.6,224.5 185.3,230.6 187,237.7 188.7,245.9"></polyline>
              <polyline class="curve-main" points="231.3,26.1 233,34.3 234.7,41.4 236.4,47.5 238.1,52.9 239.8,57.6 241.5,61.9 243.2,65.7 245,69.1 246.7,72.2 248.4,75.1 250.1,77.7 251.8,80.1 253.5,82.3 255.2,84.3 256.9,86.2 258.6,87.9 260.3,89.6 262,91.1 263.8,92.5 265.5,93.9 267.2,95.1 268.9,96.3 270.6,97.4 272.3,98.5 274,99.5 275.7,100.4 277.4,101.3 279.1,102.2 280.9,103 282.6,103.8 284.3,104.5 286,105.2 287.7,105.9 289.4,106.6 291.1,107.2 292.8,107.8 294.5,108.3 296.2,108.9 297.9,109.4 299.7,109.9 301.4,110.4 303.1,110.9 304.8,111.3 306.5,111.8 308.2,112.2 309.9,112.6 311.6,113 313.3,113.4 315,113.7 316.8,114.1 318.5,114.4 320.2,114.8 321.9,115.1 323.6,115.4 325.3,115.7 327,116 328.7,116.3 330.4,116.6 332.1,116.9 333.8,117.1 335.6,117.4 337.3,117.6 339,117.9 340.7,118.1 342.4,118.3 344.1,118.6 345.8,118.8 347.5,119 349.2,119.2 350.9,119.4 352.6,119.6 354.4,119.8 356.1,120 357.8,120.2 359.5,120.4 361.2,120.5 362.9,120.7 364.6,120.9 366.3,121 368,121.2 369.7,121.4 371.5,121.5 373.2,121.7 374.9,121.8 376.6,122 378.3,122.1 380,122.3"></polyline>

              <text class="annotation-label" x="216" y="40" text-anchor="start">asymptote verticale</text>
              <text class="tick-label" x="216" y="54" text-anchor="start">abscisse égale à un</text>
              <text class="annotation-label" x="376" y="130" text-anchor="end">asymptote horizontale</text>
              <text class="tick-label" x="376" y="144" text-anchor="end">hauteur égale à deux</text>

              <text class="tick-label" x="82.5" y="262" text-anchor="middle">−2</text>
              <text class="tick-label" x="167.5" y="262" text-anchor="middle">0</text>
              <text class="tick-label" x="210" y="262" text-anchor="middle">1</text>
              <text class="tick-label" x="252.5" y="262" text-anchor="middle">2</text>
              <text class="tick-label" x="295" y="262" text-anchor="middle">3</text>
              <text class="tick-label" x="337.5" y="262" text-anchor="middle">4</text>
              <text class="tick-label" x="162" y="213" text-anchor="end">−2</text>
              <text class="tick-label" x="162" y="85" text-anchor="end">5</text>
              <text class="axis-label" x="384" y="177" text-anchor="start">x</text>
            </svg>
          `,
          notes: [
            'La fonction représentée est $f(x) = 2 + \\dfrac{3}{x - 1}$. Elle n\'est pas définie en $x = 1$, où le dénominateur s\'annule.',
            'Asymptote <strong>verticale</strong> $x = 1$ : quand $x$ s\'approche de $1$ par la droite, $f(x) \\to +\\infty$ ; par la gauche, $f(x) \\to -\\infty$. La courbe longe la droite sans jamais la couper.',
            'Asymptote <strong>horizontale</strong> $y = 2$ : quand $x \\to +\\infty$ ou $x \\to -\\infty$, la fraction $\\dfrac{3}{x-1}$ tend vers $0$, donc $f(x) \\to 2$. Les deux branches viennent s\'aplatir contre cette hauteur.'
          ],
          reading: 'Ne cherche pas les asymptotes au même endroit. Pour la verticale, demande-toi où la fonction est <strong>interdite</strong> — en général là où un dénominateur s\'annule — et regarde ce qui se passe quand tu t\'en approches. Pour l\'horizontale, va au contraire tout au bout du dessin, à droite et à gauche, et regarde vers quelle hauteur la courbe s\'aplatit. Une même fonction peut avoir les deux, comme ici, ou une seule, ou aucune.',
          caption: 'Courbe de $f(x) = 2 + \\dfrac{3}{x-1}$ : asymptote verticale $x = 1$ et asymptote horizontale $y = 2$.'
        },
        {
          theme: 'maths',
          kicker: 'Trou ou saut',
          title: 'Une fonction peut manquer un point sans perdre sa limite',
          description: 'Deux courbes, deux discontinuités, et elles n\'ont rien à voir. À gauche il <strong>manque un point</strong>, mais la limite existe. À droite la fonction est définie <strong>partout</strong>, et pourtant elle n\'a pas de limite en ce point : elle saute.',
          svg: `
            <svg viewBox="0 0 448 230" role="img" aria-labelledby="tle-lim-trou-title tle-lim-trou-desc">
              <title id="tle-lim-trou-title">Une courbe percee d'un trou et une courbe qui saute</title>
              <desc id="tle-lim-trou-desc">A gauche, une droite montante est percee d'un seul point, marque par un petit cercle vide en abscisse deux et hauteur quatre : la fonction n'existe pas la, mais des deux cotes la courbe vise clairement cette hauteur. A droite, une fonction en deux paliers horizontaux : le palier bas de hauteur deux s'arrete en abscisse deux avec un cercle vide, et le palier haut de hauteur cinq commence au meme endroit avec un cercle plein. La fonction est definie partout mais passe brusquement de deux a cinq.</desc>

              <!-- VIGNETTE GAUCHE : trou. La limite en 2 vaut 4, mais f(2)
                   n'existe pas : le cercle est EVIDE. -->
              <line class="axis" x1="40" y1="177.3" x2="210" y2="177.3"></line>
              <line class="axis" x1="57" y1="28" x2="57" y2="188"></line>
              <line class="guide-line" x1="40" y1="92" x2="125" y2="92"></line>
              <line class="guide-line" x1="125" y1="92" x2="125" y2="177.3"></line>
              <polyline class="curve-main" points="40,145.3 42.8,143.6 45.5,141.9 48.3,140.1 51.1,138.4 53.8,136.7 56.6,134.9 59.4,133.2 62.1,131.5 64.9,129.7 67.7,128 70.4,126.2 73.2,124.5 75.9,122.8 78.7,121 81.5,119.3 84.2,117.6 87,115.8 89.8,114.1 92.5,112.4 95.3,110.6 98.1,108.9 100.8,107.2 103.6,105.4 106.4,103.7 109.1,102 111.9,100.2 114.7,98.5 117.4,96.8 120.2,95 123,93.3"></polyline>
              <polyline class="curve-main" points="127,90.7 129.8,89 132.6,87.2 135.3,85.5 138.1,83.8 140.9,82 143.6,80.3 146.4,78.6 149.2,76.8 151.9,75.1 154.7,73.4 157.5,71.6 160.2,69.9 163,68.2 165.8,66.4 168.5,64.7 171.3,63 174.1,61.2 176.8,59.5 179.6,57.8 182.3,56 185.1,54.3 187.9,52.5 190.6,50.8 193.4,49.1 196.2,47.3 198.9,45.6 201.7,43.9 204.5,42.1 207.2,40.4 210,38.7"></polyline>
              <circle class="plot-point-alt" cx="125" cy="92" r="5" fill="none"></circle>
              <text class="annotation-label" x="125" y="20" text-anchor="middle">un trou</text>
              <text class="tick-label" x="125" y="194" text-anchor="middle">deux</text>
              <text class="tick-label" x="52" y="96" text-anchor="end">quatre</text>
              <text class="tick-label" x="125" y="212" text-anchor="middle">la limite existe : quatre</text>

              <!-- VIGNETTE DROITE : saut. Definie partout, mais les deux
                   limites laterales different de 3. -->
              <line class="axis" x1="250" y1="177.3" x2="420" y2="177.3"></line>
              <line class="axis" x1="267" y1="28" x2="267" y2="188"></line>
              <line class="graph-line" x1="250" y1="134.7" x2="335" y2="134.7"></line>
              <line class="graph-line" x1="335" y1="70.7" x2="420" y2="70.7"></line>
              <line class="guide-line" x1="335" y1="134.7" x2="335" y2="70.7"></line>
              <circle class="plot-point-alt" cx="335" cy="134.7" r="5" fill="none"></circle>
              <circle class="plot-point" cx="335" cy="70.7" r="5"></circle>
              <text class="annotation-label" x="335" y="20" text-anchor="middle">un saut</text>
              <text class="tick-label" x="335" y="194" text-anchor="middle">deux</text>
              <text class="tick-label" x="262" y="139" text-anchor="end">deux</text>
              <text class="tick-label" x="262" y="75" text-anchor="end">cinq</text>
              <text class="tick-label" x="335" y="212" text-anchor="middle">pas de limite : deux ou cinq</text>
            </svg>
          `,
          notes: [
            'À gauche : $g(x) = \\dfrac{x^2 - 4}{x - 2}$, qui vaut $x + 2$ partout <strong>sauf</strong> en $x = 2$ où elle n\'est pas définie. Des deux côtés la courbe vise la même hauteur, donc $\\lim_{x \\to 2} g(x) = 4$ existe bel et bien.',
            'À droite : une fonction en paliers, définie <strong>partout</strong>, $h(2) = 5$. Mais à gauche de $2$ elle vaut $2$ et à droite elle vaut $5$ : les deux limites latérales diffèrent de $3$, donc $\\lim_{x \\to 2} h(x)$ <strong>n\'existe pas</strong>.',
            'Les deux fonctions sont discontinues en $2$, pour des raisons opposées : la première parce qu\'il manque le point, la seconde parce que le point n\'est pas au bon endroit. Être définie en $a$ ne suffit jamais à être continue en $a$.'
          ],
          reading: 'Regarde le cercle évidé : il signale un endroit où la courbe s\'arrête sans que la fonction y prenne de valeur. À gauche, tu peux boucher ce trou en posant $g(2) = 4$, et la fonction devient continue — la limite te dit exactement quelle valeur poser. À droite, tu ne peux rien boucher du tout : quelle que soit la valeur que tu choisirais en $2$, il resterait un saut d\'un côté ou de l\'autre. C\'est la différence entre une discontinuité qu\'on répare et une qu\'on ne répare pas.',
          caption: 'Deux discontinuités en $x = 2$ : un trou (la limite existe, la valeur manque) et un saut (la valeur existe, la limite manque).'
        },
        {
          theme: 'maths',
          kicker: 'Ce que veut dire « tendre vers »',
          title: 'Plus on regarde de près, plus la limite se précise',
          description: 'Vue de loin, la courbe de $\\dfrac{x^2-4}{x-2}$ semble ordinaire et le trou est invisible. En zoomant autour de $x = 2$, il apparaît — et l\'on constate que les valeurs voisines encadrent $4$ d\'aussi près qu\'on veut. C\'est exactement ce que dit $\\lim_{x \\to 2} f(x) = 4$.',
          svg: `
            <svg viewBox="0 0 448 230" role="img" aria-labelledby="tle-lim-zoom-title tle-lim-zoom-desc">
              <title id="tle-lim-zoom-title">La meme courbe vue de loin puis fortement agrandie autour du trou</title>
              <desc id="tle-lim-zoom-desc">A gauche, la courbe vue en entier avec un petit rectangle qui delimite la zone a agrandir autour de l'abscisse deux. A droite, la meme zone agrandie vingt fois : la courbe y apparait comme une droite montante percee d'un point unique, et deux traits de reperage montrent que ce point manquant se situe exactement a la hauteur quatre. Les valeurs voisines encadrent quatre d'aussi pres que l'on veut.</desc>

              <!-- VIGNETTE 1 : vue d'ensemble, x de 0 a 4. Le petit cadre
                   marque la zone agrandie dans la vignette 2. -->
              <rect class="frame-line" x="42" y="30" width="160" height="150" fill="none"></rect>
              <polyline class="curve-main" points="42,130 44,128.8 45.9,127.5 47.9,126.3 49.9,125.1 51.9,123.8 53.8,122.6 55.8,121.4 57.8,120.2 59.7,118.9 61.7,117.7 63.7,116.5 65.6,115.2 67.6,114 69.6,112.8 71.6,111.5 73.5,110.3 75.5,109.1 77.5,107.8 79.4,106.6 81.4,105.4 83.4,104.1 85.3,102.9 87.3,101.7 89.3,100.5 91.3,99.2 93.2,98 95.2,96.8 97.2,95.5 99.1,94.3 101.1,93.1 103.1,91.8 105,90.6 107,89.4 109,88.1 111,86.9 112.9,85.7 114.9,84.4 116.9,83.2 118.8,82 120.8,80.8"></polyline>
              <polyline class="curve-main" points="123.2,79.3 125.2,78 127.1,76.8 129.1,75.6 131.1,74.3 133,73.1 135,71.9 137,70.6 139,69.4 140.9,68.2 142.9,66.9 144.9,65.7 146.8,64.5 148.8,63.2 150.8,62 152.8,60.8 154.7,59.6 156.7,58.3 158.7,57.1 160.6,55.9 162.6,54.6 164.6,53.4 166.5,52.2 168.5,50.9 170.5,49.7 172.5,48.5 174.4,47.2 176.4,46 178.4,44.8 180.3,43.5 182.3,42.3 184.3,41.1 186.2,39.9 188.2,38.6 190.2,37.4 192.2,36.2 194.1,34.9 196.1,33.7 198.1,32.5 200,31.2 202,30"></polyline>
              <rect class="focus-line" x="118" y="77.5" width="8" height="5" fill="none"></rect>
              <text class="annotation-label" x="122" y="20" text-anchor="middle">vue de loin</text>
              <text class="tick-label" x="122" y="200" text-anchor="middle">le trou ne se voit pas</text>

              <!-- VIGNETTE 2 : zoom vingt fois, x de 1,9 a 2,1. -->
              <rect class="frame-line" x="252" y="30" width="160" height="150" fill="none"></rect>
              <line class="guide-line" x1="252" y1="105" x2="332" y2="105"></line>
              <line class="guide-line" x1="332" y1="105" x2="332" y2="180"></line>
              <polyline class="curve-main" points="252,180 253.9,178.2 255.9,176.4 257.8,174.5 259.8,172.7 261.7,170.9 263.6,169.1 265.6,167.3 267.5,165.4 269.5,163.6 271.4,161.8 273.3,160 275.3,158.2 277.2,156.4 279.2,154.5 281.1,152.7 283,150.9 285,149.1 286.9,147.3 288.9,145.4 290.8,143.6 292.7,141.8 294.7,140 296.6,138.2 298.6,136.4 300.5,134.5 302.4,132.7 304.4,130.9 306.3,129.1 308.3,127.3 310.2,125.4 312.1,123.6 314.1,121.8 316,120 318,118.2 319.9,116.3 321.8,114.5 323.8,112.7 325.7,110.9 327.7,109.1 329.6,107.2"></polyline>
              <polyline class="curve-main" points="334.4,102.7 336.3,100.9 338.3,99.1 340.2,97.3 342.2,95.5 344.1,93.7 346,91.8 348,90 349.9,88.2 351.9,86.4 353.8,84.6 355.7,82.7 357.7,80.9 359.6,79.1 361.6,77.3 363.5,75.5 365.4,73.6 367.4,71.8 369.3,70 371.3,68.2 373.2,66.4 375.1,64.6 377.1,62.7 379,60.9 381,59.1 382.9,57.3 384.8,55.5 386.8,53.6 388.7,51.8 390.7,50 392.6,48.2 394.5,46.4 396.5,44.5 398.4,42.7 400.4,40.9 402.3,39.1 404.2,37.3 406.2,35.5 408.1,33.6 410.1,31.8 412,30"></polyline>
              <circle class="plot-point-alt" cx="332" cy="105" r="5" fill="none"></circle>
              <text class="annotation-label" x="332" y="20" text-anchor="middle">vue de près</text>
              <text class="tick-label" x="247" y="109" text-anchor="end">quatre</text>
              <text class="tick-label" x="332" y="200" text-anchor="middle">la courbe vise quatre</text>
            </svg>
          `,
          notes: [
            'Les deux vignettes montrent la <strong>même</strong> fonction $f(x) = \\dfrac{x^2 - 4}{x - 2}$. Seule l\'échelle change : à gauche $x$ va de $0$ à $4$, à droite de $1{,}9$ à $2{,}1$ — un agrandissement de vingt fois.',
            'En $x = 1{,}99$ la courbe vaut $3{,}99$ ; en $x = 2{,}01$ elle vaut $4{,}01$. Les valeurs voisines encadrent donc $4$ à $0{,}01$ près, et il suffit de zoomer davantage pour resserrer encore.',
            'Le point d\'abscisse $2$ reste <strong>évidé</strong> à toutes les échelles : $f(2)$ n\'existera jamais. La limite décrit ce que fait la fonction <strong>autour</strong> de $2$, pas ce qu\'elle vaut en $2$.'
          ],
          reading: 'Voilà comment se lit « $f(x)$ tend vers $4$ quand $x$ tend vers $2$ » : quelle que soit la précision qu\'on t\'impose — à $0{,}01$ près, à $0{,}0001$ près — tu peux toujours te rapprocher assez de $2$ pour que $f(x)$ soit dans cette marge autour de $4$. Ce n\'est pas une façon de parler, c\'est une garantie chiffrée, et c\'est elle qui a donné à la notion de limite sa définition rigoureuse au dix-neuvième siècle.',
          caption: 'La fonction $\\dfrac{x^2-4}{x-2}$ vue de loin, puis agrandie vingt fois autour de $x = 2$ : le trou apparaît, la limite $4$ se précise.'
        }
      ],

      recap: [
        'En $\\pm\\infty$, le terme de plus haut degré domine : $\\lim \\frac{P(x)}{Q(x)} = \\lim \\frac{\\text{terme dominant de }P}{\\text{terme dominant de }Q}$.',
        'Les formes indéterminées ($0/0$, $\\infty/\\infty$, etc.) exigent un travail algébrique (factorisation, simplification) avant de conclure.',
        '$f$ continue en $a$ $\\Leftrightarrow$ $\\lim_{x \\to a} f(x) = f(a)$ : pas de "saut" ni de "trou" dans la courbe.',
        'Le théorème des valeurs intermédiaires (TVI) : si $f$ est continue sur $[a;b]$ et $f(a) \\times f(b) < 0$, alors $f$ s\'annule au moins une fois sur $]a;b[$.'
      ],
      piege: '$\\infty - \\infty$ est une <strong>forme indéterminée</strong> : on ne peut pas conclure sans calcul.<br/><br/>Il faut factoriser, multiplier par la quantité conjuguée ou utiliser les croissances comparées pour lever l\'indétermination.'
    },
    quiz: [
      { q: 'Un élève évalue $\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}$ et écrit : "en $x=2$, on obtient $\\dfrac{0}{0}$, donc la limite est $0$." Quelle est son erreur ?', options: ['$\\dfrac{0}{0}$ est une forme INDÉTERMINÉE, pas $0$. En factorisant : $\\dfrac{(x-2)(x+2)}{x-2}=x+2\\to 4$', 'L\'élève a raison : $\\dfrac{0}{0}=0$ par convention', 'La limite n\'existe pas car $f$ n\'est pas définie en $x=2$', 'La limite est $+\\infty$ car on divise par $0$'], answer: 0, correction: '$\\dfrac{0}{0}$ est une <strong>forme indéterminée</strong> : le résultat peut être $0$, n\'importe quel nombre réel, ou $\\pm\\infty$ selon les fonctions.<br/><br/>Ici $\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2$ pour $x\\neq2$, donc la limite est $4$.<br/><br/>Ne jamais conclure directement d\'une forme indéterminée sans simplifier !' },
      { q: '$\\lim_{x\\to 2}\\frac{x^2-4}{x-2}=$ ?', options: ['$0$', '$\\infty$', '$4$', '$2$'], answer: 2, correction: 'On factorise pour lever la forme indéterminée $0/0$ :<br/><br/>$\\frac{x^2-4}{x-2}=\\frac{(x-2)(x+2)}{x-2}=x+2 \\to 4$ en $x=2$.' },
      { q: '$f(x)=\\frac{2x^3-x}{x^3+1}$, $\\lim_{x\\to+\\infty}f(x)=$ ?', options: ['$2$', '$0$', '$+\\infty$', '$-1$'], answer: 0, correction: 'En $+\\infty$, seuls les <strong>termes de plus haut degré</strong> comptent.<br/><br/>Termes dominants : $\\frac{2x^3}{x^3}=2$.' },
      { q: '$\\lim_{x \\to +\\infty} (\\sqrt{x^2+1} - x) = $ ?', options: ['$+\\infty$ car $\\sqrt{x^2+1} > x$', '$1$', '$0$', '$\\dfrac{1}{2}$'], answer: 2, correction: 'Forme $\\infty - \\infty$ : il faut lever l\'indétermination !<br/><br/>On multiplie par la <strong>quantité conjuguée</strong> : $\\dfrac{(\\sqrt{x^2+1}-x)(\\sqrt{x^2+1}+x)}{\\sqrt{x^2+1}+x} = \\dfrac{x^2+1-x^2}{\\sqrt{x^2+1}+x} = \\dfrac{1}{\\sqrt{x^2+1}+x}$.<br/><br/>Quand $x \\to +\\infty$, le dénominateur tend vers $+\\infty$, donc la limite est $0$.' },
      { q: '$f$ est continue sur $[0;1]$ avec $f(0) = -2$ et $f(1) = 3$. Que peut-on affirmer ?', options: ['$f$ s\'annule au moins une fois sur $]0;1[$ (TVI)', '$f$ s\'annule exactement une fois', '$f(0{,}5) = 0{,}5$', 'Rien de particulier'], answer: 0, correction: '$f$ est continue et $f(0) < 0 < f(1)$ : par le <strong>théorème des valeurs intermédiaires</strong>, il existe $c \\in ]0;1[$ tel que $f(c) = 0$.<br/><br/>On sait qu\'il y a au moins un zéro, mais pas qu\'il est unique (il pourrait y en avoir plusieurs).' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14, sur le modèle du chapitre
       pilote.

       AVANT : une seule tâche distincte (la limite en $+\infty$ d'un quotient
       de même degré), habillée de quatre décors par pick(). Le professeur qui
       feuilletait la banque y lisait douze fois la même question.

       APRÈS : sept tâches réellement différentes, qui couvrent ce que le
       chapitre demande VRAIMENT — les trois cas de degré en $+\infty$ (égal,
       numérateur plus petit, numérateur plus grand), la forme $\frac{0}{0}$
       levée par factorisation, la lecture d'une asymptote verticale, la
       continuité par recollement, et le théorème des valeurs intermédiaires.

       Le décor continue de varier par pick(), mais il ne compte pas pour de
       la diversité : une tâche se reconnaît à la première ligne du corrigé.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['degresEgaux', 'degreInferieur', 'degreSuperieur',
                            'indetermineeFactorisee', 'asymptoteVerticale',
                            'recollement', 'valeursIntermediaires']);

        /* TÂCHE 1 — quotient de même degré en $+\infty$. La tâche historique,
           conservée : c'est le cas le plus fréquent au baccalauréat, et il en
           faut une. */
        if (tache === 'degresEgaux') {
          const ctx = pick([
            { intro: 'La concentration d\'un polluant dans un lac (en mg/L) est modélisée par' },
            { intro: 'Le nombre de vues quotidiennes d\'une vidéo virale est modélisé par' },
            { intro: 'La température d\'un métal en refroidissement (en °C) est modélisée par' },
            { intro: 'Le rendement d\'un catalyseur (en %) est modélisé par' }
          ]);
          const a = rand(2, 7), b = rand(1, 5), c = rand(1, 4), p = rand(1, 2);
          const res = parseFloat((a / c).toFixed(2));
          /* Ni un coefficient 1 ni un exposant 1 ne s'écrivent : « $1x^2$ »
             ou « $x^1$ » trahissent un corrigé généré, et l'élève les lit
             comme des fautes du livre. */
          const cc = c === 1 ? '' : c;
          const px = p === 1 ? 'x' : 'x^' + p;
          return {
            statement: `${ctx.intro} $f(x) = \\dfrac{${a}${px} + ${b}}{${cc}${px} + 1}$. Calculer $\\lim_{x \\to +\\infty} f(x)$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.01, unit: '',
            hint: `En $+\\infty$, on ne garde que les termes de plus haut degré. Ici le numérateur se comporte comme $${a}${px}$ et le dénominateur comme $${cc}${px}$.`,
            solution: [
              `Termes dominants : $\\dfrac{${a}${px}}{${cc}${px}} = \\dfrac{${a}}{${c}}$`,
              `Les degrés sont <strong>égaux</strong> : la limite est le quotient des coefficients dominants.`,
              `$\\lim_{x \\to +\\infty} f(x) = \\dfrac{${a}}{${c}} = ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 2 — le numérateur est de degré strictement plus petit. La
           limite vaut alors 0, et c'est le cas que l'élève traite le plus
           mal : il applique par réflexe le quotient des coefficients. */
        if (tache === 'degreInferieur') {
          const ctx = pick([
            { intro: 'La dose résiduelle d\'un traitement (en mg) suit' },
            { intro: 'L\'écart à la valeur cible d\'un capteur suit' },
            { intro: 'Le taux de perte d\'un réseau (en %) suit' }
          ]);
          // Le coefficient du denominateur part de 2 : « $1x^2$ » trahirait
          // un corrige genere, et l'eleve le lit comme une faute du livre.
          const a = rand(2, 9), b = rand(1, 6), c = rand(2, 5);
          // (a x + b) / (c x^2 + 1) -> 0
          return {
            statement: `${ctx.intro} $f(x) = \\dfrac{${a}x + ${b}}{${c}x^2 + 1}$. Calculer $\\lim_{x \\to +\\infty} f(x)$.`,
            answer: 0, tolerance: 0, unit: '',
            hint: `Compare les <strong>degrés</strong> avant de comparer les coefficients. Ici le numérateur est de degré $1$ et le dénominateur de degré $2$.`,
            solution: [
              `Termes dominants : $\\dfrac{${a}x}{${c}x^2} = \\dfrac{${a}}{${c}x}$`,
              `Quand $x \\to +\\infty$, le dénominateur $${c}x$ part vers l'infini, donc la fraction s'écrase.`,
              `$\\lim_{x \\to +\\infty} f(x) = 0$. Le dénominateur l'emporte parce qu'il croît plus vite : c'est le degré qui décide, pas les coefficients.`
            ]
          };
        }

        /* TÂCHE 3 — le numérateur l'emporte. Réponse à donner sous forme de
           code, pour que l'élève doive TRANCHER entre trois comportements au
           lieu de produire un nombre par automatisme. */
        if (tache === 'degreSuperieur') {
          const ctx = pick([
            { intro: 'Le coût cumulé d\'un chantier (en k€) suit' },
            { intro: 'Le volume de données stockées (en To) suit' },
            { intro: 'L\'énergie dissipée par un moteur (en kJ) suit' }
          ]);
          // Idem : le coefficient du denominateur ne vaut jamais 1.
          const a = rand(2, 8), c = rand(2, 6), b = rand(1, 9);
          // (a x^3 + b) / (c x + 1) -> +infini
          return {
            statement: `${ctx.intro} $f(x) = \\dfrac{${a}x^3 + ${b}}{${c}x + 1}$. Quelle est $\\lim_{x \\to +\\infty} f(x)$ ? Répondre par $1$ si la limite est $+\\infty$, par $2$ si elle est un nombre fini, par $3$ si elle est $0$.`,
            answer: 1, tolerance: 0, unit: '',
            hint: `Regarde d'abord lequel des deux degrés est le plus grand. Celui qui gagne impose le comportement à l'infini.`,
            solution: [
              `Termes dominants : $\\dfrac{${a}x^3}{${c}x} = \\dfrac{${a}}{${c}}x^2$`,
              `Le numérateur est de degré $3$, le dénominateur de degré $1$ : le numérateur l'emporte largement.`,
              `Il reste un $x^2$ qui part vers l'infini, donc $\\lim_{x \\to +\\infty} f(x) = +\\infty$ : la réponse est $1$.`
            ]
          };
        }

        /* TÂCHE 4 — forme $\frac{0}{0}$ levée par factorisation. Tâche
           complètement différente des trois premières : la limite n'est plus
           en l'infini mais en un POINT, et la substitution échoue. */
        if (tache === 'indetermineeFactorisee') {
          const ctx = pick([
            { intro: 'Un calcul de vitesse instantanée conduit à' },
            { intro: 'Un taux de variation conduit à' },
            { intro: 'Une simplification de formule conduit à' }
          ]);
          const a = rand(2, 7);
          // (x^2 - a^2)/(x - a) -> 2a
          return {
            statement: `${ctx.intro} $f(x) = \\dfrac{x^2 - ${a * a}}{x - ${a}}$. Calculer $\\lim_{x \\to ${a}} f(x)$.`,
            answer: 2 * a, tolerance: 0, unit: '',
            hint: `Remplace $x$ par $${a}$ : tu obtiens $\\dfrac{0}{0}$, qui n'est pas un nombre. Factorise le numérateur avec l'identité $x^2 - k^2 = (x - k)(x + k)$.`,
            solution: [
              `Substitution directe : $\\dfrac{${a * a} - ${a * a}}{${a} - ${a}} = \\dfrac{0}{0}$ — forme indéterminée, on ne conclut pas.`,
              `Factorisation : $x^2 - ${a * a} = (x - ${a})(x + ${a})$`,
              `Simplification pour $x \\neq ${a}$ : $\\dfrac{(x - ${a})(x + ${a})}{x - ${a}} = x + ${a}$`,
              `$\\lim_{x \\to ${a}} f(x) = ${a} + ${a} = ${2 * a}$`
            ]
          };
        }

        /* TÂCHE 5 — trouver l'asymptote verticale. L'élève ne calcule pas une
           limite, il cherche la valeur INTERDITE : c'est une lecture de
           domaine de définition, pas un calcul de limite. */
        if (tache === 'asymptoteVerticale') {
          const ctx = pick([
            { intro: 'La pression dans une conduite (en bar) est modélisée par' },
            { intro: 'Le temps d\'attente moyen (en min) est modélisé par' },
            { intro: 'La résistance équivalente d\'un montage est modélisée par' }
          ]);
          const a = rand(2, 9), b = rand(1, 8), c = rand(2, 6);
          // f(x) = (a x + b) / (x - c) : AV en x = c
          return {
            statement: `${ctx.intro} $f(x) = \\dfrac{${a}x + ${b}}{x - ${c}}$. Cette courbe admet une asymptote verticale. Donner son abscisse.`,
            answer: c, tolerance: 0, unit: '',
            hint: `Une asymptote verticale apparaît là où la fonction n'est pas définie, c'est-à-dire là où le <strong>dénominateur s'annule</strong>.`,
            solution: [
              `Le dénominateur s'annule quand $x - ${c} = 0$, donc en $x = ${c}$.`,
              `En ce point le numérateur vaut $${a} \\times ${c} + ${b} = ${a * c + b}$, qui n'est pas nul : la fraction part donc bien vers l'infini.`,
              `La courbe admet l'asymptote verticale d'équation $x = ${c}$.`
            ]
          };
        }

        /* TÂCHE 6 — continuité par recollement. La seule tâche où l'élève
           doit RÉSOUDRE pour rendre une fonction continue, au lieu de
           constater qu'elle l'est ou non. */
        if (tache === 'recollement') {
          const ctx = pick([
            { intro: 'Un tarif change de formule au-delà d\'un seuil :' },
            { intro: 'Un capteur change de mode au-delà d\'un seuil :' },
            { intro: 'Un barème change de tranche au-delà d\'un seuil :' }
          ]);
          const s = rand(2, 5), a = rand(2, 6), b = rand(1, 9);
          // f(x) = a x + b pour x <= s ; f(x) = x^2 + k pour x > s
          // continuite : a*s + b = s^2 + k  =>  k = a*s + b - s^2
          const k = a * s + b - s * s;
          return {
            statement: `${ctx.intro} $f(x) = ${a}x + ${b}$ pour $x \\leq ${s}$, et $f(x) = x^2 + k$ pour $x > ${s}$. Déterminer la valeur de $k$ qui rend $f$ continue en $x = ${s}$.`,
            answer: k, tolerance: 0, unit: '',
            hint: `Pour que la courbe se recolle sans saut en $x = ${s}$, il faut que les deux expressions y donnent la <strong>même valeur</strong>.`,
            solution: [
              `Valeur à gauche : $${a} \\times ${s} + ${b} = ${a * s + b}$`,
              `Valeur à droite : $${s}^2 + k = ${s * s} + k$`,
              `Continuité : $${s * s} + k = ${a * s + b}$, donc $k = ${a * s + b} - ${s * s} = ${k}$`,
              `Avec cette valeur, les deux morceaux se rejoignent exactement : il n'y a plus de saut, la courbe se trace sans lever le crayon.`
            ]
          };
        }

        /* TÂCHE 7 — théorème des valeurs intermédiaires. L'élève ne calcule
           aucune limite : il compte combien de fois une fonction continue
           traverse l'axe, à partir des seuls signes aux bornes. */
        const ctx = pick([
          { intro: 'Un relevé donne, pour une fonction continue,' },
          { intro: 'Une simulation donne, pour une fonction continue,' },
          { intro: 'Un tableau de valeurs donne, pour une fonction continue,' }
        ]);
        const v = [rand(2, 9), -rand(2, 9), rand(2, 9), rand(2, 9)];
        // signes : + - + + -> deux changements de signe, donc au moins 2 zeros
        const bornes = [0, 1, 2, 3];
        let changements = 0;
        for (let i = 1; i < v.length; i++) if (v[i - 1] * v[i] < 0) changements++;
        return {
          statement: `${ctx.intro} $f(${bornes[0]}) = ${v[0]}$, $f(${bornes[1]}) = ${v[1]}$, $f(${bornes[2]}) = ${v[2]}$ et $f(${bornes[3]}) = ${v[3]}$. D'après le théorème des valeurs intermédiaires, combien de solutions de $f(x) = 0$ peut-on <strong>garantir</strong> sur $[${bornes[0]}\\,;\\,${bornes[3]}]$ ?`,
          answer: changements, tolerance: 0, unit: '',
          hint: `Le théorème garantit un zéro sur chaque intervalle où $f$ <strong>change de signe</strong> entre les deux bornes. Compte ces changements, pas les valeurs.`,
          solution: [
            `Signes successifs : $${v[0]}$ puis $${v[1]}$ puis $${v[2]}$ puis $${v[3]}$.`,
            `Il y a ${changements} changement${changements > 1 ? 's' : ''} de signe : sur chacun de ces intervalles, $f$ étant continue, elle s'annule au moins une fois.`,
            `On peut donc garantir $${changements}$ solution${changements > 1 ? 's' : ''}. Attention : le théorème donne un <strong>minimum</strong>, jamais un nombre exact — il pourrait y en avoir davantage entre deux relevés.`
          ]
        };
      }
    },
    probleme: {
      context: 'La concentration d\'un médicament dans le sang (en mg/L) est modélisée par $C(t)=\\frac{10t}{t^2+1}$ où $t\\ge 0$ est en heures.',
      tasks: [
        'Calculer la limite de $C(t)$ quand $t\\to+\\infty$.',
        'Interpréter ce résultat.',
        'Calculer $C(1)$ et $C(3)$ pour étudier le comportement.'
      ],
      solutions: [
        '$\\lim_{t\\to+\\infty}C(t)=\\lim_{t\\to+\\infty}\\frac{10t}{t^2}=\\lim\\frac{10}{t}=0$.',
        'La concentration tend vers $0$ : le médicament est éliminé à long terme.',
        '$C(1)=\\frac{10}{2}=5$ mg/L ; $C(3)=\\frac{30}{10}=3$ mg/L.'
      ],
      finalAnswer: '$C(t)\\to 0$ : le médicament est éliminé. Pic à $t=1$ h : $5$ mg/L.'
    },

    evaluation: {
      title: 'Évaluation — Limites et continuité',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\lim_{x \\to +\\infty} \\dfrac{3x^2 - x + 1}{2x^2 + 5}$.',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'En $+\\infty$, on ne garde que les termes de plus haut degré :<br/><br/>$\\dfrac{3x^2}{2x^2} = \\dfrac{3}{2} = 1{,}5$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. L'ancienne demandait
             $\lim_{x \to 3} \frac{x^2-9}{x-3}$, c'est-à-dire une deuxième
             factorisation calculatoire, dans une évaluation qui n'était
             faite que de calculs. Aucune des cinq questions ne demandait de
             LIRE une courbe, alors que le chapitre s'enseigne entièrement
             sur des représentations graphiques.

             La nouvelle question ne se calcule pas : on décrit une courbe,
             et l'élève doit en tirer les limites. C'est « représenter ». */
          statement: 'On observe la courbe d\'une fonction $g$ sur un écran. Elle se rapproche indéfiniment de la droite horizontale d\'équation $y = -3$ lorsqu\'on se déplace vers la droite de l\'écran, et elle monte vers le haut sans limite en longeant la droite verticale d\'équation $x = 4$. Aucune expression n\'est donnée. Que peut-on écrire ?',
          type: 'multiple-choice',
          options: [
            '$\\lim_{x \\to +\\infty} g(x) = -3$ et $\\lim_{x \\to 4} g(x) = +\\infty$',
            '$\\lim_{x \\to -3} g(x) = +\\infty$ et $\\lim_{x \\to +\\infty} g(x) = 4$',
            '$\\lim_{x \\to +\\infty} g(x) = 4$ et $\\lim_{x \\to -3} g(x) = +\\infty$',
            'On ne peut rien écrire sans connaître l\'expression de $g$'
          ],
          answer: 0,
          points: 2,
          correction: 'Les deux asymptotes ne se lisent pas au même endroit, et elles ne donnent pas le même genre de limite.<br/><br/>L\'asymptote <strong>horizontale</strong> $y = -3$ se lit tout au bout de l\'écran : c\'est la hauteur vers laquelle la courbe s\'aplatit quand $x$ part vers $+\\infty$. Elle donne donc $\\lim_{x \\to +\\infty} g(x) = -3$.<br/><br/>L\'asymptote <strong>verticale</strong> $x = 4$ se lit au contraire à un endroit précis de l\'axe des abscisses : c\'est là que la fonction s\'échappe. Elle donne $\\lim_{x \\to 4} g(x) = +\\infty$.<br/><br/>Les deux options fausses échangent les rôles : elles mettent le $4$ en hauteur et le $-3$ en abscisse. C\'est la confusion la plus fréquente du chapitre, et elle vient de ce qu\'on retient les <strong>nombres</strong> sans retenir <strong>sur quel axe</strong> ils se lisent.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-14. L'ancienne demandait
             $\lim_{x \to +\infty} \frac{5x^3+2x}{x^4-1}$ : un troisième
             calcul de degrés, alors que la Q1 en était déjà un.

             La nouvelle ne donne AUCUNE méthode : la comparaison des degrés
             ne s'applique pas, la substitution non plus, et le conjugué n'a
             été vu qu'en passant. L'élève doit explorer — essayer des
             valeurs, remarquer que la différence semble se stabiliser, puis
             chercher comment le justifier. C'est « chercher ». */
          statement: 'On étudie $f(x) = \\sqrt{x^2 + 6x} - x$ pour $x > 0$. Ni la substitution ni la comparaison des degrés ne permettent de conclure : c\'est une forme $\\infty - \\infty$. Calcule $f(100)$, puis $f(10\\,000)$, et propose la valeur de $\\lim_{x \\to +\\infty} f(x)$.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: 'Rien ne dit par où commencer : c\'est le propre de cette question, et il faut donc <strong>explorer</strong>.<br/><br/>On essaie des valeurs. $f(100) = \\sqrt{10\\,600} - 100 \\approx 102{,}96 - 100 = 2{,}96$.<br/><br/>Puis $f(10\\,000) = \\sqrt{100\\,060\\,000} - 10\\,000 \\approx 10\\,003{,}00 - 10\\,000 = 3{,}00$.<br/><br/>Les valeurs se stabilisent très nettement autour de $3$ : voilà une conjecture solide, et elle suffisait à répondre.<br/><br/>Pour la <strong>justifier</strong>, on multiplie par la quantité conjuguée :<br/><br/>$f(x) = \\dfrac{(\\sqrt{x^2+6x} - x)(\\sqrt{x^2+6x} + x)}{\\sqrt{x^2+6x} + x} = \\dfrac{x^2 + 6x - x^2}{\\sqrt{x^2+6x} + x} = \\dfrac{6x}{\\sqrt{x^2+6x} + x}$.<br/><br/>En $+\\infty$, le dénominateur se comporte comme $x + x = 2x$, donc la fraction tend vers $\\dfrac{6x}{2x} = 3$.<br/><br/>Le calcul confirme l\'exploration. Retiens la démarche : quand aucune méthode ne se présente, essayer des valeurs est un vrai travail mathématique, pas un pis-aller.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. L'ancienne demandait ce qu'est la
             forme $\frac{0}{0}$ : une question de vocabulaire, qui se
             cochait en reconnaissant l'expression « forme indéterminée ».

             La nouvelle part d'une situation concrète et demande de la
             TRADUIRE en écriture mathématique, puis d'interpréter le nombre
             obtenu dans le contexte. C'est « modéliser ». */
          statement: 'Une station d\'épuration traite une eau polluée. La concentration résiduelle, en mg/L, après $t$ heures de traitement, est $C(t) = \\dfrac{40t + 120}{2t + 3}$ pour $t \\geq 0$. Le fabricant annonce que le procédé « ne descendra jamais sous un certain seuil, même en le laissant tourner indéfiniment ». Quel est ce seuil, en mg/L ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0.01,
          unit: 'mg/L',
          points: 2,
          correction: 'La difficulté n\'est pas le calcul, c\'est de reconnaître <strong>quelle question mathématique</strong> pose la phrase du fabricant.<br/><br/>« Même en le laissant tourner indéfiniment » veut dire : quand $t$ devient très grand. « Ne descendra jamais sous un certain seuil » veut dire : la concentration se stabilise à une valeur qu\'elle n\'atteint pas. Autrement dit, on cherche $\\lim_{t \\to +\\infty} C(t)$.<br/><br/>En $+\\infty$, seuls les termes de plus haut degré comptent : $\\dfrac{40t}{2t} = 20$.<br/><br/>Le seuil est donc de $20$ mg/L.<br/><br/>L\'interprétation compte autant que le nombre : la droite $y = 20$ est une <strong>asymptote horizontale</strong>, et cela signifie qu\'aucune durée de traitement, si longue soit-elle, ne permettra de descendre à $19$ mg/L. Si la norme sanitaire exigeait moins de $20$ mg/L, il faudrait changer de procédé — pas attendre plus longtemps.'
        },
        {
          statement: 'Calculer $\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x^2 - x}$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On factorise numérateur et dénominateur :<br/><br/>$\\dfrac{x^2 - 1}{x^2 - x} = \\dfrac{(x-1)(x+1)}{x(x-1)} = \\dfrac{x+1}{x}$ pour $x \\neq 1$.<br/><br/>Donc $\\lim_{x \\to 1} = \\dfrac{2}{1} = 2$.'
        }
      ]
    }
  });
