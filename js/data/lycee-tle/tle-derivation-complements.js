/* =========================================================
   Spark Learning – data/lycee-tle/tle-derivation-complements.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-derivation-complements',
    level: 2, subject: 'maths',
    icon: '🔬',
    title: 'Compléments sur la dérivation',
    subtitle: 'Dérivée de composées, produit, quotient',
    keywords: ['Dérivée', 'Produit', 'Quotient', 'Composée', 'Fonction'],
    physics: 'Calcul de la vitesse et de l\'accélération instantanées à partir de la position, puissance électrique instantanée',
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14.

         L'ancienne version énonçait les trois règles du chapitre, puis
         annonçait les deux pièges. C'est un RÉSUMÉ, pas une entrée : le
         cahier des charges demande une question à laquelle on ne peut pas
         répondre sans la notion, et un élève qui lit « $(uv)' = u'v + uv'$ »
         n'a plus rien à découvrir.

         La question retenue est une VRAIE impasse pour un élève de terminale
         qui sort de la première : il sait dériver une somme terme à terme,
         il sait dériver $x^2$ et $e^x$ séparément, et il ne peut PAS en
         déduire la dérivée de leur produit. Le contre-exemple numérique est
         donné pour qu'il constate lui-même que la réponse intuitive est
         fausse — il n'a pas à nous croire sur parole.

         On évite aussi le travers inverse (l'anecdote décorative) : la
         difficulté est mathématique et vérifiable en trois lignes de calcul. */
      intro: 'Voici un réflexe qui marche si bien depuis la première que tu ne le remets plus en question : pour dériver une somme, on dérive chaque morceau et on additionne. $(x^2 + e^x)\' = 2x + e^x$. Rien à redire.<br/><br/>Alors essaie la même chose avec un <strong>produit</strong>. Que vaut $(x^2 e^x)\'$ ? La réponse qui vient toute seule, c\'est $2x \\times e^x$ : on dérive chaque morceau, on remultiplie.<br/><br/>Vérifie-la. Prends la fonction encore plus simple $f(x) = x \\times x$, dont tu connais déjà la dérivée : c\'est $x^2$, donc $f\'(x) = 2x$.<br/><br/>Mais si on appliquait la recette « je dérive chaque morceau », on trouverait $1 \\times 1 = 1$. Or $2x$ et $1$ ne sont pas la même fonction — ils ne coïncident même qu\'en un seul point.<br/><br/>La recette est donc <strong>fausse</strong>, et elle l\'est pour une raison qu\'on peut voir : quand deux facteurs varient en même temps, chacun tire l\'autre. Imagine un rectangle dont la longueur ET la largeur s\'allongent : l\'aire gagnée ne se résume pas au petit carré du coin, il y a aussi les deux bandes le long des côtés. C\'est exactement ce que dit $(uv)\' = u\'v + uv\'$.<br/><br/>Le chapitre installe trois règles de ce genre — produit, quotient, composée. Chacune répond à la même question : <strong>comment se combinent deux variations qui se produisent en même temps ?</strong>',
      definitions: [
        { term: 'Dérivée d\'un produit', def: 'Si $f = u \\times v$, alors $f\' = u\'v + uv\'$. Chaque facteur est dérivé à tour de rôle, l\'autre restant inchangé.' },
        { term: 'Dérivée d\'un quotient', def: 'Si $f = \\dfrac{u}{v}$ avec $v \\neq 0$, alors $f\' = \\dfrac{u\'v - uv\'}{v^2}$. L\'ordre du numérateur ($u\'v$ en premier) est crucial.' },
        { term: 'Dérivée d\'une composée (chaîne)', def: 'Si $f(x) = h(g(x))$, alors $f\'(x) = g\'(x) \\times h\'(g(x))$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur.' },
        { term: 'Tangente en un point', def: 'La tangente à la courbe de $f$ en $a$ a pour équation $y = f\'(a)(x - a) + f(a)$. Le coefficient directeur est la dérivée en $a$.' }
      ],
      method: {
        title: 'Dériver une fonction construite à partir de deux autres',
        steps: [
          '<strong>Reconnaître la structure</strong> : la fonction est-elle un produit $u \\times v$, un quotient $\\dfrac{u}{v}$, ou une composée — une fonction « dans » une autre : $e^{u}$, $u^n$, $\\sqrt{u}$, $\\ln u$ ?',
          '<strong>Nommer les morceaux</strong> : écrire explicitement $u$ et $v$ (ou $u$ et la fonction extérieure), puis dériver chacun séparément : $u\'$, $v\'$.',
          '<strong>Assembler avec la bonne formule</strong> : produit $(uv)\'=u\'v+uv\'$ ; quotient $\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$ ; composée $(e^{u})\'=u\'e^{u}$, $(u^n)\'=n\\,u^{n-1}\\,u\'$, $(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$, $(\\ln u)\'=\\dfrac{u\'}{u}$.',
          '<strong>Simplifier et vérifier</strong> : factoriser ce qui se répète ($e^x$, une puissance), puis contrôler l\'ordre $u\'v - uv\'$ et la présence du facteur $u\'$ dans toute composée.'
        ]
      },
      example: {
        statement: 'Dériver $f(x) = \\dfrac{e^x}{x^2 + 1}$ et calculer $f\'(0)$.',
        steps: [
          'On identifie $u = e^x$ et $v = x^2 + 1$, donc $u\' = e^x$ et $v\' = 2x$.',
          'Règle du quotient : $f\'(x) = \\dfrac{u\'v - uv\'}{v^2} = \\dfrac{e^x(x^2+1) - e^x \\cdot 2x}{(x^2+1)^2}$.',
          'Factorisation : $f\'(x) = \\dfrac{e^x(x^2 - 2x + 1)}{(x^2+1)^2} = \\dfrac{e^x(x-1)^2}{(x^2+1)^2}$.',
          'En $x = 0$ : $f\'(0) = \\dfrac{e^0 \\times (-1)^2}{(0+1)^2} = \\dfrac{1 \\times 1}{1} = 1$.'
        ],
        answer: '$f\'(0) = 1$. On remarque que $f\'(x) \\geq 0$ pour tout $x$ car $(x-1)^2 \\geq 0$ et $e^x > 0$ : $f$ est croissante sur $\\mathbb{R}$.'
      },
      formulas: [
        '$(uv)\'=u\'v+uv\'$',
        '$\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^2}$',
        '$(u^n)\'=nu^{n-1}u\'$',
        '$(\\sqrt{u})\'=\\dfrac{u\'}{2\\sqrt{u}}$',
        '$(\\ln u)\'=\\dfrac{u\'}{u}$ (règle de la chaîne avec $(\\ln x)\'=\\dfrac{1}{x}$, vue au chapitre « Fonctions exponentielle et logarithme »)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Tangente et règle du quotient',
        title: 'Tangente à $f(x)=\\dfrac{e^x}{x^2+1}$ au point où $f\'(0)=1$',
        description: 'La courbe reprend l\'exemple du cours, calculée point par point : elle est croissante sur $\\mathbb{R}$ car $f\'(x)=\\dfrac{e^x(x-1)^2}{(x^2+1)^2}\\geq0$. Au point $A(0\\,;\\,1)$, la tangente a pour coefficient directeur $f\'(0)=1$.',
        svg: `
          <svg viewBox="0 0 400 280" role="img" aria-labelledby="deriv-graph-title deriv-graph-desc">
            <title id="deriv-graph-title">Courbe de f et sa tangente au point A</title>
            <desc id="deriv-graph-desc">Courbe croissante de f(x) egale e puissance x sur x carre plus 1, avec la tangente au point A(0;1) de pente 1.</desc>
            <line class="grid-line" x1="50" y1="20" x2="50" y2="250"></line>
            <line class="grid-line" x1="116" y1="20" x2="116" y2="250"></line>
            <line class="grid-line" x1="248" y1="20" x2="248" y2="250"></line>
            <line class="grid-line" x1="314" y1="20" x2="314" y2="250"></line>
            <line class="grid-line" x1="380" y1="20" x2="380" y2="250"></line>
            <line class="grid-line" x1="40" y1="144.5" x2="390" y2="144.5"></line>
            <line class="grid-line" x1="40" y1="49.1" x2="390" y2="49.1"></line>
            <line class="axis" x1="40" y1="240" x2="390" y2="240"></line>
            <line class="axis" x1="182" y1="20" x2="182" y2="250"></line>
            <path class="curve-main" d="M50 237.4 L83 233.4 L116 222.4 L149 193.7 L182 144.5 L215 114.1 L248 110.3 L281 108.4 L314 98.9 L347 79.6 L380 48.3"></path>
            <line class="guide-line" x1="129.2" y1="220.9" x2="261.2" y2="30"></line>
            <circle class="plot-point" cx="182" cy="144.5" r="4.5"></circle>
            <text class="tick-label" x="46" y="254">-2</text>
            <text class="tick-label" x="112" y="254">-1</text>
            <text class="tick-label" x="178" y="254">0</text>
            <text class="tick-label" x="244" y="254">1</text>
            <text class="tick-label" x="310" y="254">2</text>
            <text class="tick-label" x="376" y="254">3</text>
            <text class="tick-label" x="160" y="148">1</text>
            <text class="tick-label" x="160" y="53">2</text>
            <text class="axis-label" x="393" y="244">x</text>
            <text class="axis-label" x="188" y="24">f(x)</text>
            <text class="annotation-label" x="188" y="152">A(0 ; 1)</text>
            <text class="annotation-label" x="250" y="46">Tangente : y = x + 1</text>
            <text class="annotation-label" x="205" y="205">f(x) = e^x / (x²+1)</text>
          </svg>
        `,
        notes: [
          'Fonction du cours : $f(x)=\\dfrac{e^x}{x^2+1}$, calculée point par point sur $[-2\\,;\\,3]$ avec la règle du quotient.',
          'Dérivée vérifiée : $f\'(x)=\\dfrac{e^x(x-1)^2}{(x^2+1)^2}\\geq0$ pour tout $x$ : la courbe est bien croissante, même au voisinage de $x=1$ où la pente s\'annule un instant sans faire redescendre la courbe.',
          'Au point $A(0\\,;\\,1)$ : $f\'(0)=1$, donc la tangente a pour équation $y=1\\times(x-0)+1=x+1$, tracée en pointillé.'
        ],
        reading: 'La tangente (pointillés) touche la courbe exactement en $A$ et a la même pente que la courbe à cet endroit précis : c\'est la définition du nombre dérivé $f\'(0)$.',
        caption: 'Courbe de l\'exemple du cours ($f(x)=e^x/(x^2+1)$) et tangente au point $A(0\\,;\\,1)$, de pente $f\'(0)=1$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         DEUX schémas ici, et non trois, et c'est un choix assumé : ce
         chapitre est un chapitre de CALCUL. Le reste de son contenu (règle
         du quotient, dérivée de $\sqrt{u}$, de $\ln u$) est de la technique
         algébrique, qu'une figure illustrerait sans rien expliquer. Le
         principe du cahier des charges est « une figure par MALENTENDU, pas
         une figure par formule » : forcer un troisième schéma reviendrait
         justement à dessiner une formule.

         Les deux malentendus retenus sont ceux qui coûtent le chapitre :
           1. l'élève oublie le facteur $u'$ dans une composée, parce qu'il ne
              voit pas qu'il y a DEUX variations emboîtées ;
           2. l'élève croit que la dérivée d'un produit est le produit des
              dérivées, parce que c'est vrai pour une somme.

         Les coordonnées sont CALCULÉES par script et vérifiées par
         scripts/manuel/tests/diagrams-tle.test.js : pente de la tangente
         égale à f'(a), et additivité exacte des quatre aires du rectangle. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Pourquoi le facteur oublié',
          title: 'Deux variations emboîtées se multiplient',
          description: 'Une fonction composée, c\'est une chaîne : $x$ fait varier $u$, puis $u$ fait varier $f$. Chaque maillon a son propre taux de variation, et le taux total est leur <strong>produit</strong>. C\'est là qu\'est le facteur $u\'$ que l\'on oublie.',
          svg: `
            <svg viewBox="0 0 460 250" role="img" aria-labelledby="tle-chaine-title tle-chaine-desc">
              <title id="tle-chaine-title">Deux reperes en chaine montrant la composition de deux variations</title>
              <desc id="tle-chaine-desc">A gauche, un repere ou la variable x produit la quantite intermediaire u par la droite u egale trois x : sa pente vaut trois. A droite, un second repere ou cette quantite intermediaire u produit la valeur finale par la parabole f egale u au carre : sa tangente au point u egale trois a pour pente six. Le taux de variation total de la chaine vaut le produit des deux, soit dix-huit.</desc>

              <!-- ETAGE 1 : u(x) = 3x, pente 3, sur [0 ; 2]. Coordonnees
                   calculees : X(x) = 40 + 80x, Y(u) = 200 - 25u. -->
              <line class="axis" x1="30" y1="200" x2="215" y2="200"></line>
              <line class="axis" x1="40" y1="215" x2="40" y2="35"></line>
              <line class="graph-line" x1="40" y1="200" x2="200" y2="50"></line>
              <line class="grid-line" x1="120" y1="200" x2="120" y2="125"></line>
              <line class="grid-line" x1="40" y1="125" x2="120" y2="125"></line>
              <circle class="plot-point" cx="120" cy="125" r="5"></circle>
              <text class="annotation-label" x="120" y="26" text-anchor="middle">premier maillon</text>
              <text class="tick-label" x="120" y="216" text-anchor="middle">x = 1</text>
              <text class="tick-label" x="34" y="129" text-anchor="end">3</text>
              <text class="tick-label" x="34" y="54" text-anchor="end">6</text>
              <text class="axis-label" x="206" y="216">x</text>
              <text class="axis-label" x="46" y="44">u</text>
              <text class="annotation-label" x="118" y="178" text-anchor="middle">pente 3</text>

              <!-- ETAGE 2 : f(u) = u^2, tangente en u = 3, de pente 6.
                   X(u) = 260 + 28,333 u ; Y(f) = 200 - 4 f. -->
              <line class="axis" x1="250" y1="200" x2="445" y2="200"></line>
              <line class="axis" x1="260" y1="215" x2="260" y2="30"></line>
              <polyline class="curve-main" points="260,200 265.7,199.8 271.3,199.4 277,198.6 282.7,197.4 288.3,196 294,194.2 299.7,192.2 305.3,189.8 311,187 316.7,184 322.3,180.6 328,177 333.7,173 339.3,168.6 345,164 350.7,159 356.3,153.8 362,148.2 367.7,142.2 373.3,136 379,129.4 384.7,122.6 390.3,115.4 396,107.8 401.7,100 407.3,91.8 413,83.4 418.7,74.6 424.3,65.4 430,56"></polyline>
              <line class="guide-line" x1="302.5" y1="200" x2="387.5" y2="128"></line>
              <circle class="plot-point" cx="345" cy="164" r="5"></circle>
              <line class="grid-line" x1="345" y1="200" x2="345" y2="164"></line>
              <text class="annotation-label" x="345" y="26" text-anchor="middle">second maillon</text>
              <text class="tick-label" x="345" y="216" text-anchor="middle">u = 3</text>
              <text class="tick-label" x="430" y="216" text-anchor="middle">u = 6</text>
              <text class="axis-label" x="437" y="192">u</text>
              <text class="axis-label" x="266" y="40">f</text>
              <text class="annotation-label" x="392" y="152" text-anchor="start">pente 6</text>

              <!-- bilan de la chaine -->
              <text class="annotation-label" x="230" y="240" text-anchor="middle">taux total : 3 fois 6, soit 18</text>
            </svg>
          `,
          notes: [
            'À gauche, $u(x) = 3x$ : quand $x$ avance de $1$, la quantité intermédiaire $u$ avance de $3$. Le taux de ce maillon est $u\'(x) = 3$, le même partout.',
            'À droite, $f(u) = u^2$ : au point $u = 3$, la tangente a pour pente $f\'(3) = 2 \\times 3 = 6$. Le taux de ce second maillon <strong>dépend de l\'endroit</strong> où l\'on se trouve, d\'où l\'écriture $f\'(u(x))$ et non $f\'(x)$.',
            'Au total, $g(x) = (3x)^2 = 9x^2$, donc $g\'(x) = 18x$ et $g\'(1) = 18$. On retrouve exactement $u\'(1) \\times f\'(u(1)) = 3 \\times 6 = 18$ : les deux taux se <strong>multiplient</strong>, ils ne s\'additionnent pas.'
          ],
          reading: 'Lis la figure de gauche à droite, comme une chaîne de transmission. Le premier maillon amplifie $3$ fois, le second amplifie $6$ fois : au bout, tout est amplifié $18$ fois.<br/><br/>Si tu oublies le facteur $u\'$, tu ne gardes que le second maillon — tu annonces $6$ au lieu de $18$, et ton résultat est <strong>trois fois trop petit</strong>.<br/><br/>C\'est très exactement ce qui se passe quand on écrit $(e^{3x})\' = e^{3x}$ au lieu de $3e^{3x}$.',
          caption: 'Composition de deux variations : $u\'(1) = 3$ puis $f\'(3) = 6$, donc un taux total de $18$.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'La dérivée du produit contre le produit des dérivées',
          description: 'Un rectangle de côtés $u$ et $v$ a pour aire $uv$. Si les deux côtés s\'allongent, l\'aire gagnée se décompose en <strong>trois</strong> morceaux : deux bandes et un petit coin. Les deux bandes donnent $u\'v + uv\'$ ; le petit coin, lui, est justement le produit des deux variations, et c\'est le seul qui disparaît.',
          svg: `
            <svg viewBox="0 0 440 260" role="img" aria-labelledby="tle-aire-title tle-aire-desc">
              <title id="tle-aire-title">Un rectangle qui s'agrandit dans les deux directions</title>
              <desc id="tle-aire-desc">Un rectangle initial de cinq unites de long sur trois de haut, d'aire quinze, est agrandi de un virgule quatre en longueur et de un en hauteur. L'aire gagnee se decompose en trois morceaux : une bande verticale a droite d'aire quatre virgule deux, une bande horizontale en haut d'aire cinq, et un petit rectangle de coin d'aire un virgule quatre. Le petit coin est le seul des trois a etre le produit des deux accroissements, et c'est aussi le seul qui devient negligeable quand les accroissements diminuent.</desc>

              <!-- Echelle : 30 unites de viewBox par unite. Rectangle initial
                   5 sur 3, coin bas gauche en (60 ; 210). Aire = 15. -->
              <rect class="frame-line" x="60" y="120" width="150" height="90" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></rect>
              <text class="annotation-label" x="135" y="170" text-anchor="middle">aire de départ : 15</text>

              <!-- bande de droite : v fois la hausse de longueur = 3 x 1,4 = 4,2 -->
              <rect class="frame-line" x="210" y="120" width="42" height="90" fill="color-mix(in srgb, var(--success) 22%, transparent)"></rect>
              <text class="annotation-label" x="231" y="170" text-anchor="middle">4,2</text>

              <!-- bande du haut : u fois la hausse de hauteur = 5 x 1 = 5 -->
              <rect class="frame-line" x="60" y="90" width="150" height="30" fill="color-mix(in srgb, var(--success) 22%, transparent)"></rect>
              <text class="annotation-label" x="135" y="111" text-anchor="middle">5</text>

              <!-- petit coin : 1,4 x 1 = 1,4 -->
              <rect class="frame-line" x="210" y="90" width="42" height="30" fill="color-mix(in srgb, var(--error) 26%, transparent)"></rect>

              <!-- cotes mesures -->
              <line class="focus-line" x1="60" y1="228" x2="210" y2="228"></line>
              <line class="focus-line" x1="210" y1="228" x2="252" y2="228"></line>
              <text class="tick-label" x="135" y="245" text-anchor="middle">longueur 5</text>
              <text class="tick-label" x="231" y="245" text-anchor="middle">plus 1,4</text>
              <line class="focus-line" x1="44" y1="210" x2="44" y2="120"></line>
              <line class="focus-line" x1="44" y1="120" x2="44" y2="90"></line>
              <text class="tick-label" x="36" y="170" text-anchor="end">3</text>
              <text class="tick-label" x="36" y="110" text-anchor="end">1</text>

              <!-- designation du petit coin -->
              <line class="guide-line" x1="330" y1="52" x2="256" y2="100"></line>
              <text class="annotation-label" x="334" y="48" text-anchor="start">le petit coin : 1,4</text>
              <text class="label-soft" x="434" y="68" text-anchor="end">morceau négligeable</text>
            </svg>
          `,
          notes: [
            'Le rectangle de départ mesure $5$ sur $3$ : son aire vaut $15$. On allonge de $1{,}4$ et on rehausse de $1$, donc la nouvelle aire vaut $6{,}4 \\times 4 = 25{,}6$.',
            'L\'aire gagnée, $10{,}6$, se décompose exactement en trois : la bande de droite vaut $3 \\times 1{,}4 = 4{,}2$ (le terme $v \\times u\'$), la bande du haut vaut $5 \\times 1 = 5$ (le terme $u \\times v\'$), et le petit coin vaut $1{,}4 \\times 1 = 1{,}4$. Somme : $15 + 4{,}2 + 5 + 1{,}4 = 25{,}6$.',
            'Le petit coin est le <strong>produit des deux accroissements</strong> — exactement ce que l\'élève propose comme réponse.<br/><br/>Or c\'est le seul des trois morceaux à devenir négligeable quand les accroissements diminuent : divise-les tous les deux par $10$, les bandes sont divisées par $10$ mais le coin par $100$.<br/><br/>Voilà pourquoi il disparaît de la formule, et pourquoi $(uv)\' = u\'v + uv\'$.'
          ],
          reading: 'Compare les surfaces à l\'œil : les deux bandes vertes portent presque toute l\'aire gagnée, et le petit rectangle rouge n\'en est qu\'une miette.<br/><br/>Puis imagine que tu réduises les deux agrandissements de moitié : les bandes maigrissent de moitié, le coin de trois quarts. Continue à réduire, et le coin s\'efface bien avant les bandes.<br/><br/>La dérivée garde les deux bandes et oublie le coin : voilà pourquoi la réponse « je dérive chaque facteur » ne garde justement que <strong>ce qui disparaît</strong>.',
          caption: 'Aire d\'un rectangle dont les deux côtés varient : $15 + 4{,}2 + 5 + 1{,}4 = 25{,}6$, et seul le coin de $1{,}4$ disparaît à la limite.'
        }
      ],

      recap: [
        '<strong>Produit</strong> : $(uv)\' = u\'v + uv\'$. Astuce mnémotechnique : "dérive le premier, garde le second, puis l\'inverse".',
        '<strong>Quotient</strong> : $(u/v)\' = (u\'v - uv\')/v^2$. Attention à l\'ordre : c\'est $u\'v$ MOINS $uv\'$, jamais l\'inverse.',
        '<strong>Composée</strong> : $(f \\circ g)\' = g\' \\times f\'(g)$. On dérive l\'extérieur puis on multiplie par la dérivée de l\'intérieur ($(e^{3x})\' = 3e^{3x}$).',
        '<strong>Composées usuelles</strong> : $(u^n)\' = n\\,u^{n-1}\\,u\'$, $(\\sqrt{u})\' = \\dfrac{u\'}{2\\sqrt{u}}$, $(e^{u})\' = u\'\\,e^{u}$, $(\\ln u)\' = \\dfrac{u\'}{u}$. Dans chacune, le facteur $u\'$ est celui qu\'on oublie.'
      ],
      piege: 'Dans la formule du quotient, bien noter $u\'v - uv\'$ (et non $uv\' - u\'v$) au numérateur.<br/><br/>L\'ordre compte ! Un moyen mnémotechnique : "c\'est le haut prime fois le bas, moins le haut fois le bas prime, le tout sur le bas au carré".'
    },
    quiz: [
      { q: 'Dériver $f(x)=x^2 e^x$', options: ['$2xe^x$', '$x^2 e^x$', '$(2x+x^2)e^x$', '$2xe^x + e^x$'], answer: 2, correction: 'On applique la <strong>règle du produit</strong> : $(uv)\' = u\'v + uv\'$.<br/><br/>$(x^2)\'e^x+x^2(e^x)\'=2xe^x+x^2 e^x=(2x+x^2)e^x$.' },
      { q: 'Un élève dérive $f(x)=\\dfrac{x^2}{x+1}$ et écrit $f\'(x)=\\dfrac{2x}{1}=2x$ en "divisant les dérivées". Quelle est son erreur ?', options: ['Il a utilisé $(u/v)\'=u\'/v\'$ (faux) ; la règle correcte donne $f\'=\\dfrac{2x(x+1)-x^2}{(x+1)^2}=\\dfrac{x^2+2x}{(x+1)^2}$', 'L\'élève a raison : $(u/v)\'=u\'/v\'$', 'La bonne formule est $(u/v)\'=\\dfrac{u\'v+uv\'}{v^2}$ (avec un $+$)', 'La dérivée de $x+1$ est $0$, pas $1$'], answer: 0, correction: 'La règle du quotient est $(u/v)\'=\\frac{u\'v-uv\'}{v^2}$.<br/><br/>Avec $u=x^2$, $u\'=2x$, $v=x+1$, $v\'=1$ : $f\'=\\frac{2x(x+1)-x^2\\cdot1}{(x+1)^2}=\\frac{2x^2+2x-x^2}{(x+1)^2}=\\frac{x^2+2x}{(x+1)^2}$.<br/><br/>La règle $(u/v)\'=u\'/v\'$ <strong>n\'existe pas</strong>. Vérification : si $f(x)=\\frac{x}{x+1}$, $f\'=\\frac{1}{(x+1)^2}\\neq\\frac{1}{1}=1$.' },
      { q: 'Dériver $f(x)=(3x+1)^4$', options: ['$4(3x+1)^3$', '$12(3x+1)^3$', '$3(3x+1)^4$', '$(3x+1)^3$'], answer: 1, correction: 'On applique la <strong>règle de la chaîne</strong> : $[u^4]\'=4u^3\\cdot u\'$ avec $u=3x+1$ et $u\'=3$.<br/><br/>Donc $f\'=4\\times3\\times(3x+1)^3=12(3x+1)^3$. Ne pas oublier de multiplier par $u\'$ !' },
      { q: 'Dériver $f(x) = e^{x^2}$', options: ['$e^{x^2}$', '$2xe^{x^2}$', '$x^2 e^{x^2-1}$', '$2xe^{2x}$'], answer: 1, correction: 'C\'est une <strong>composée</strong> : la fonction extérieure est $e^u$ et la fonction intérieure est $u = x^2$.<br/><br/>$u\' = 2x$, donc $(e^{u})\' = u\' e^{u} = 2x e^{x^2}$.' },
      { q: 'Dériver $f(x) = \\ln(x^2 + 1)$', options: ['$\\dfrac{1}{x^2+1}$', '$\\dfrac{x}{x^2+1}$', '$2x\\ln(x^2+1)$', '$\\dfrac{2x}{x^2+1}$'], answer: 3, correction: 'C\'est une <strong>composée</strong> : la fonction extérieure est $\\ln$, de dérivée $\\dfrac{1}{x}$, et l\'intérieur est $u = x^2+1$, de dérivée $u\' = 2x$.<br/><br/>La règle de la chaîne donne $(\\ln u)\' = u\' \\times \\dfrac{1}{u} = \\dfrac{u\'}{u}$, donc $f\'(x) = \\dfrac{2x}{x^2+1}$.<br/><br/>Répondre $\\dfrac{1}{x^2+1}$, c\'est oublier de multiplier par la dérivée de l\'intérieur : le facteur $u\'$ est encore une fois celui qui disparaît.' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : deux tâches (produit avec exponentielle, puissance composée),
       habillées de quatre décors par pick(). Mesuré sur 400 tirages : 8
       moules d'énoncé mais seulement 2 tâches. Le professeur qui feuilletait
       la banque y voyait douze énoncés pour deux questions.

       APRÈS : sept tâches réellement différentes, une par règle et par piège
       du chapitre — produit, quotient, composée exponentielle, puissance
       composée, racine composée, logarithme composé, et une tangente qui
       oblige à passer de $f'(a)$ à l'équation de la droite.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['produit', 'quotient', 'expComposee', 'puissance',
                            'racine', 'logComposee', 'tangente']);

        /* TÂCHE 1 — règle du produit. La tâche historique, conservée : c'est
           l'application la plus directe de $(uv)' = u'v + uv'$. */
        if (tache === 'produit') {
          const ctx = pick([
            { intro: 'La puissance lumineuse d\'une diode est', f: 'f(x)' },
            { intro: 'Le coût marginal d\'un atelier est modélisé par', f: 'f(x)' },
            { intro: 'La concentration d\'un réactif est', f: 'f(x)' }
          ]);
          const a = rand(2, 5), b = rand(1, 3), x0 = rand(1, 3);
          // f(x) = (ax+b)e^x  =>  f'(x) = (ax + a + b)e^x
          const res = parseFloat(((a * x0 + a + b) * Math.exp(x0)).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = (${a}x + ${b})e^x$. Calculer $f'(${x0})$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.1, unit: '',
            hint: `Règle du produit $(uv)' = u'v + uv'$, avec $u = ${a}x + ${b}$ et $v = e^x$. Les deux facteurs varient, donc les deux termes comptent.`,
            solution: [
              `$u = ${a}x + ${b}$ donc $u' = ${a}$ ; $v = e^x$ donc $v' = e^x$`,
              `$f'(x) = ${a}e^x + (${a}x + ${b})e^x = (${a}x + ${a + b})e^x$`,
              `$f'(${x0}) = ${a * x0 + a + b} \\times e^{${x0}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 2 — règle du quotient. Nouvelle : la banque d'origine ne la
           travaillait PAS, alors que l'ordre $u'v - uv'$ est le piège
           numéro un du chapitre et qu'il a sa propre question au quiz. */
        if (tache === 'quotient') {
          const ctx = pick([
            { intro: 'Le rendement d\'un moteur est modélisé par', f: 'f(x)' },
            { intro: 'La part de marché d\'un produit suit', f: 'f(x)' },
            { intro: 'Le taux de remplissage d\'un réservoir suit', f: 'f(x)' }
          ]);
          const a = rand(2, 5), b = rand(1, 4), x0 = rand(1, 3);
          // f(x) = ax / (x + b)  =>  f'(x) = ab / (x+b)^2
          const res = parseFloat((a * b / Math.pow(x0 + b, 2)).toFixed(3));
          return {
            statement: `${ctx.intro} $${ctx.f} = \\dfrac{${a}x}{x + ${b}}$. Calculer $f'(${x0})$. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: '',
            hint: `Règle du quotient : $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$. L'ordre du numérateur compte : c'est $u'v$ <strong>moins</strong> $uv'$. Ici $u = ${a}x$ et $v = x + ${b}$.`,
            solution: [
              `$u = ${a}x$ donc $u' = ${a}$ ; $v = x + ${b}$ donc $v' = 1$`,
              `$f'(x) = \\dfrac{${a}(x + ${b}) - ${a}x}{(x + ${b})^2} = \\dfrac{${a * b}}{(x + ${b})^2}$`,
              `$f'(${x0}) = \\dfrac{${a * b}}{${Math.pow(x0 + b, 2)}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 3 — exponentielle composée. C'est LE cas où le facteur $u'$
           s'oublie, parce que $e^{ax}$ ressemble trop à $e^x$. Adossée au
           premier schéma secondaire du cours. */
        if (tache === 'expComposee') {
          const ctx = pick([
            // Phase 4 : décors de croissance seulement (f est croissante), et
            // a <= 3, t0 <= 1 pour que la réponse reste à l'échelle de
            // l'arrondi au centième (au plus 6 x 3 x e^3, environ 361,5).
            { intro: 'Le nombre de bactéries d\'une culture suit', f: 'f(t)' },
            { intro: 'Le capital d\'un placement à intérêts continus suit', f: 'f(t)' },
            { intro: 'La population d\'une colonie de levures suit', f: 'f(t)' }
          ]);
          const a = rand(2, 3), k = rand(2, 6), t0 = rand(0, 1);
          // f(t) = k e^(a t)  =>  f'(t) = k a e^(a t)
          const res = parseFloat((k * a * Math.exp(a * t0)).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = ${k}e^{${a}t}$. Calculer $f'(${t0})$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.1, unit: '',
            hint: `$(e^{u})' = u' e^{u}$ : on dérive l'extérieur, puis on <strong>multiplie</strong> par la dérivée de l'intérieur. Ici l'intérieur est $${a}t$, dont la dérivée vaut $${a}$.`,
            solution: [
              `L'intérieur est $u(t) = ${a}t$, donc $u'(t) = ${a}$`,
              `$f'(t) = ${k} \\times ${a} \\times e^{${a}t} = ${k * a}e^{${a}t}$`,
              `$f'(${t0}) = ${k * a} \\times e^{${a * t0}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 4 — puissance composée. La deuxième tâche historique,
           conservée : la règle $[u^n]' = n u^{n-1} u'$ est celle que le
           programme cite explicitement. */
        if (tache === 'puissance') {
          const ctx = pick([
            { intro: 'Le volume d\'une bulle de savon suit', f: 'f(x)' },
            { intro: 'Le coût de production suit', f: 'f(x)' },
            { intro: 'L\'énergie stockée dans un ressort suit', f: 'f(x)' }
          ]);
          const a = rand(2, 5), b = rand(1, 4), n = rand(2, 4);
          const res = n * a * Math.pow(b, n - 1);
          return {
            statement: `${ctx.intro} $${ctx.f} = (${a}x + ${b})^{${n}}$. Calculer $f'(0)$.`,
            answer: res, tolerance: 0, unit: '',
            hint: `$[u^{${n}}]' = ${n}\\,u^{${n - 1}}\\,u'$ avec $u = ${a}x + ${b}$ et $u' = ${a}$. N'oublie pas le facteur $u'$ : c'est le maillon que l'on perd le plus souvent.`,
            solution: [
              `$f'(x) = ${n} \\times (${a}x + ${b})^{${n - 1}} \\times ${a}$`,
              `En $x = 0$ : $(${a} \\times 0 + ${b})^{${n - 1}} = ${Math.pow(b, n - 1)}$`,
              `$f'(0) = ${n * a} \\times ${Math.pow(b, n - 1)} = ${res}$`
            ]
          };
        }

        /* TÂCHE 5 — racine composée. Nouvelle : l'élève doit reconnaître
           $\sqrt{u}$ comme une composée, ce que l'écriture ne signale pas.
           Les valeurs sont choisies pour que $u(x_0)$ soit un carré parfait,
           donc pour que le corrigé reste lisible. */
        if (tache === 'racine') {
          const ctx = pick([
            { intro: 'La vitesse d\'écoulement par un orifice suit', f: 'f(x)' },
            { intro: 'La période d\'un pendule suit', f: 'f(x)' },
            { intro: 'La portée d\'un signal radio suit', f: 'f(x)' }
          ]);
          const a = rand(2, 5), x0 = rand(1, 3);
          /* On choisit le carré parfait APRÈS $a$ et $x_0$, parmi ceux qui
             laissent $b$ strictement positif : sinon l'énoncé afficherait
             « $\sqrt{5x + -11}$ », qui trahit un corrigé généré. */
          const carre = pick([16, 25, 36, 49].filter((c) => c - a * x0 >= 1));
          const b = carre - a * x0;
          // f(x) = sqrt(ax + b)  =>  f'(x) = a / (2 sqrt(ax+b))
          const res = parseFloat((a / (2 * Math.sqrt(carre))).toFixed(3));
          return {
            statement: `${ctx.intro} $${ctx.f} = \\sqrt{${a}x + ${b}}$. Calculer $f'(${x0})$. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: '',
            hint: `$(\\sqrt{u})' = \\dfrac{u'}{2\\sqrt{u}}$ avec $u = ${a}x + ${b}$. Commence par calculer $u(${x0})$ : le résultat est un carré parfait, la suite est alors immédiate.`,
            solution: [
              `$u(x) = ${a}x + ${b}$ donc $u'(x) = ${a}$, et $f'(x) = \\dfrac{${a}}{2\\sqrt{${a}x + ${b}}}$`,
              `$u(${x0}) = ${a} \\times ${x0} + ${b} = ${carre}$, donc $\\sqrt{u(${x0})} = ${Math.sqrt(carre)}$`,
              `$f'(${x0}) = \\dfrac{${a}}{2 \\times ${Math.sqrt(carre)}} = \\dfrac{${a}}{${2 * Math.sqrt(carre)}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 6 — logarithme composé. $(\ln u)' = u'/u$ figure au quiz et,
           depuis la phase 4, dans `formulas`, `method` et `recap` : c'est la
           règle de la chaîne appliquée à $(\ln x)' = 1/x$, enseignée par
           tle-exponentielle-logarithme, chargé AVANT ce module (js/loader.js).
           On choisit les valeurs pour que $u(x_0)$ soit entier. */
        if (tache === 'logComposee') {
          const ctx = pick([
            { intro: 'Le niveau sonore perçu suit', f: 'f(x)' },
            { intro: 'L\'entropie d\'un système suit', f: 'f(x)' },
            { intro: 'Le rendement informationnel suit', f: 'f(x)' }
          ]);
          const a = rand(2, 6), b = rand(1, 5), x0 = rand(1, 4);
          const den = a * x0 + b;
          // f(x) = ln(ax + b)  =>  f'(x) = a / (ax + b)
          const res = parseFloat((a / den).toFixed(3));
          return {
            statement: `${ctx.intro} $${ctx.f} = \\ln(${a}x + ${b})$, pour $x > 0$. Calculer $f'(${x0})$. Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.002, unit: '',
            hint: `C'est la règle de la chaîne avec $(\\ln x)' = \\dfrac{1}{x}$ : $(\\ln u)' = \\dfrac{u'}{u}$. Le numérateur est la dérivée de l'intérieur, pas $1$. Ici $u = ${a}x + ${b}$ et $u' = ${a}$.`,
            solution: [
              `$u(x) = ${a}x + ${b}$ donc $u'(x) = ${a}$`,
              `$f'(x) = \\dfrac{${a}}{${a}x + ${b}}$`,
              `$f'(${x0}) = \\dfrac{${a}}{${den}} \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 7 — de la dérivée à la TANGENTE. Nouvelle, et c'est la seule
           de la banque où le nombre dérivé n'est pas la réponse finale :
           l'élève doit encore s'en servir pour écrire une ordonnée. Le
           chapitre définit la tangente sans jamais la faire calculer. */
        const ctx = pick([
          { intro: 'On modélise le profil d\'une rampe par' },
          { intro: 'On modélise la trajectoire d\'un projectile par' },
          { intro: 'On modélise la croissance d\'une plante par' }
        ]);
        const a = rand(2, 4), b = rand(1, 5), x0 = rand(1, 3);
        const xq = x0 + rand(1, 3);
        // f(x) = a x^2 + b  ;  f'(x) = 2 a x  ;  tangente en x0 :
        // y = f'(x0)(x - x0) + f(x0)
        const fx0 = a * x0 * x0 + b, fp = 2 * a * x0;
        const res = fp * (xq - x0) + fx0;
        return {
          statement: `${ctx.intro} $f(x) = ${a}x^2 + ${b}$. La tangente à la courbe de $f$ au point d'abscisse $x = ${x0}$ est une droite. Quelle est son ordonnée en $x = ${xq}$ ?`,
          answer: res, tolerance: 0.01, unit: '',
          hint: `La tangente en $a$ a pour équation $y = f'(a)(x - a) + f(a)$. Calcule d'abord $f(${x0})$, puis $f'(${x0})$, et seulement ensuite remplace $x$ par $${xq}$. Attention : la tangente est une <strong>droite</strong>, pas la courbe — son ordonnée en $${xq}$ n'est pas $f(${xq})$.`,
          solution: [
            `$f(${x0}) = ${a} \\times ${x0 * x0} + ${b} = ${fx0}$ et $f'(x) = ${2 * a}x$, donc $f'(${x0}) = ${fp}$`,
            `Tangente : $y = ${fp}(x - ${x0}) + ${fx0}$`,
            `En $x = ${xq}$ : $y = ${fp} \\times ${xq - x0} + ${fx0} = ${fr(res)}$ (la courbe, elle, y vaut $${a * xq * xq + b}$)`
          ]
        };
      }
    },
    probleme: {
      context: 'La position d\'un objet est $s(t)=\\frac{t^2}{t+1}$ (en m, $t\\ge 0$ en s).',
      tasks: [
        'Calculer $s\'(t)$ : c\'est la vitesse instantanée $v(t)$.',
        'La vitesse est-elle croissante ? (Dériver $v(t)$, en factorisant $(t+1)$ au numérateur.)',
        'Quelle est la vitesse à $t=2$ s ?'
      ],
      solutions: [
        '$s\'(t)=\\dfrac{2t(t+1)-t^2\\times1}{(t+1)^2}=\\dfrac{t^2+2t}{(t+1)^2}=\\dfrac{t(t+2)}{(t+1)^2}$.<br/><br/>Pour $t \\geq 0$, numérateur et dénominateur sont positifs : $v(t) \\geq 0$, l\'objet avance toujours dans le sens positif.',
        'Attention : $v(t) \\geq 0$ dit que la <strong>position</strong> augmente, pas que la vitesse augmente. Pour le sens de variation de $v$, il faut dériver $v$.<br/><br/>Avec $u = t^2+2t$, $u\' = 2t+2$, $w = (t+1)^2$, $w\' = 2(t+1)$ :<br/><br/>$v\'(t)=\\dfrac{(2t+2)(t+1)^2 - (t^2+2t)\\times 2(t+1)}{(t+1)^4}$.<br/><br/>On factorise $2(t+1)$ au numérateur : $2(t+1)\\left[(t+1)^2-(t^2+2t)\\right] = 2(t+1)\\times 1$.<br/><br/>Donc $v\'(t)=\\dfrac{2}{(t+1)^3} > 0$ pour $t \\geq 0$ : la vitesse est <strong>croissante</strong>, l\'objet accélère.',
        '$v(2)=\\dfrac{2\\times4}{9}=\\dfrac{8}{9}\\approx0{,}89$ m/s.'
      ],
      finalAnswer: '$v(t)=\\dfrac{t(t+2)}{(t+1)^2}$ et $v\'(t)=\\dfrac{2}{(t+1)^3}>0$ : la vitesse augmente, l\'objet accélère. $v(2)\\approx0{,}89$ m/s.'
    },

    evaluation: {
      title: 'Évaluation — Compléments sur la dérivation',
      duration: '35 min',
      questions: [
        {
          statement: 'Dériver $f(x) = x^3 e^x$. Que vaut $f\'(0)$ ?',
          type: 'numeric',
          answer: 0,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Règle du produit : $f\'(x) = 3x^2 e^x + x^3 e^x = (3x^2 + x^3)e^x = x^2(3+x)e^x$.<br/><br/>En $x = 0$ : $f\'(0) = 0^2 \\times 3 \\times e^0 = 0$.'
        },
        {
          /* Q2 RÉÉCRITE le 2026-09-14. Elle demandait la dérivée de
             $\frac{x}{x+1}$, c'est-à-dire un deuxième calcul de suite.

             La nouvelle question ne demande AUCUN calcul de dérivée : on
             donne $f'$ toute faite, et l'élève doit en tirer une conclusion
             sur le SENS DE VARIATION en raisonnant sur le signe d'un carré et
             d'une exponentielle. Passer d'une propriété (« $f' \geq 0$ ») à
             une autre (« $f$ croissante ») sans produire de nombre, c'est la
             définition même de « raisonner ». */
          statement: 'On sait que $f\'(x) = \\dfrac{e^x(x-1)^2}{(x^2+1)^2}$. <strong>Sans calculer aucune valeur</strong>, que peut-on affirmer du sens de variation de $f$ sur $\\mathbb{R}$ ?',
          type: 'multiple-choice',
          options: [
            '$f$ est croissante puis décroissante, car $(x-1)^2$ change de signe en $x = 1$',
            '$f$ est décroissante puis croissante, avec un minimum en $x = 1$, car $f\'$ s\'annule en $x = 1$',
            '$f$ est croissante sur $\\mathbb{R}$ tout entier : le numérateur et le dénominateur sont positifs ou nuls, donc $f\'(x) \\geq 0$ partout',
            'On ne peut rien dire sans connaître l\'expression de $f$'
          ],
          answer: 2,
          points: 2,
          correction: 'Regardons chaque morceau, sans jamais calculer de valeur.<br/><br/>Au numérateur : $e^x > 0$ pour tout réel $x$, et $(x-1)^2 \\geq 0$ puisque c\'est un carré. Leur produit est donc <strong>positif ou nul</strong>.<br/><br/>Au dénominateur : $(x^2+1)^2$ est un carré, et $x^2 + 1$ ne s\'annule jamais, donc le dénominateur est <strong>strictement positif</strong>.<br/><br/>Un quotient dont le numérateur est positif ou nul et le dénominateur strictement positif est positif ou nul : $f\'(x) \\geq 0$ sur $\\mathbb{R}$, et $f$ est donc croissante.<br/><br/>Le piège « $(x-1)^2$ change de signe en $1$ » mérite un mot : un carré ne change <strong>jamais</strong> de signe. En $x = 1$, $(x-1)^2$ s\'annule — la pente devient nulle un instant — mais la courbe ne redescend pas pour autant. Elle marque une pause, puis repart.<br/><br/>Annoncer un minimum en $1$ fait la même confusion dans l\'autre sens : $f\'$ s\'annule en $1$ <strong>sans changer de signe</strong>, donc il n\'y a ni minimum ni maximum en $1$ — seulement une tangente horizontale.'
        },
        {
          statement: 'Calculer la dérivée de $g(x) = (2x+3)^5$ en $x = -1$.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Chaîne : $g\'(x) = 5 \\times 2 \\times (2x+3)^4 = 10(2x+3)^4$.<br/><br/>En $x = -1$ : $g\'(-1) = 10 \\times (2(-1)+3)^4 = 10 \\times 1^4 = 10$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. Elle demandait $h'(2)$ pour
             $h(x) = \sqrt{4x+1}$ : un troisième calcul de dérivée.

             La nouvelle question porte sur une LECTURE GRAPHIQUE. L'élève
             n'a aucune expression de fonction : il dispose d'une courbe et
             d'une tangente dessinée, et doit lire une pente sur le dessin
             pour en déduire un nombre dérivé. C'est « représenter » — passer
             du registre graphique au registre numérique.

             Les valeurs sont celles d'un dessin décrit dans l'énoncé, pour
             que la question reste autoportante : le livre imprime les
             schémas, mais une évaluation ne doit pas dépendre de la page
             en vis-à-vis. */
          statement: 'Sur un graphique, la courbe d\'une fonction $g$ passe par le point $A(2\\,;\\,5)$, et la tangente à la courbe en $A$ passe aussi par le point $B(6\\,;\\,13)$. Que vaut $g\'(2)$ ?',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Le nombre dérivé $g\'(2)$ est, par définition, le <strong>coefficient directeur de la tangente</strong> au point d\'abscisse $2$. Il n\'y a donc aucune dérivation à faire : il suffit de lire la pente d\'une droite dont on connaît deux points.<br/><br/>Entre $A(2\\,;\\,5)$ et $B(6\\,;\\,13)$, on avance de $6 - 2 = 4$ en abscisse et on monte de $13 - 5 = 8$ en ordonnée.<br/><br/>La pente vaut donc $\\dfrac{8}{4} = 2$, et $g\'(2) = 2$.<br/><br/>Sur un graphique, ce calcul se lit directement : tu poses le triangle « $4$ vers la droite, $8$ vers le haut » le long de la tangente. C\'est exactement ce que tu fais à l\'envers quand tu traces une tangente dont tu connais la pente.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. L'ancienne demandait « a-t-il
             raison ? » et se refermait sur un oui/non : la bonne réponse
             était devinable sans rien comprendre, puisque les trois autres
             options commençaient par « Oui » ou se contredisaient.

             La nouvelle question annonce d'emblée que le camarade se trompe
             — il n'y a donc plus rien à deviner — et demande d'identifier
             l'ARGUMENT qui le lui montrerait. L'élève ne produit aucun
             nombre : il choisit la manière de convaincre quelqu'un, ce qui
             est exactement « communiquer ». Le contre-exemple retenu est
             celui qui tranche le plus vite, sur une fonction que l'élève
             connaît depuis la seconde. */
          statement: 'Un camarade dérive $\\dfrac{x^2}{\\sin x}$ en écrivant $\\dfrac{2x}{\\cos x}$ : il a dérivé le haut et le bas séparément. Tu veux lui montrer que cette méthode ne peut pas marcher, <strong>sans lui réciter la formule du quotient</strong>. Quel argument est le plus convaincant ?',
          type: 'multiple-choice',
          options: [
            'Lui faire tester sa méthode sur $f(x) = \\dfrac{x^2}{x}$, dont il sait déjà que la dérivée vaut $1$ : sa méthode donnerait $\\dfrac{2x}{1} = 2x$, qui n\'est pas $1$',
            'Lui dire que sa réponse est fausse parce que la formule du quotient est $\\dfrac{u\'v - uv\'}{v^2}$',
            'Lui faire remarquer que $\\cos x$ s\'annule, donc que sa réponse n\'est pas définie partout',
            'Lui dire que la dérivée de $\\sin x$ est $-\\cos x$, donc qu\'il a un signe en trop'
          ],
          answer: 0,
          points: 2,
          correction: 'Un <strong>contre-exemple</strong> est l\'argument le plus fort qui soit : il ne demande de croire personne sur parole, il met la méthode en défaut sur un cas que l\'interlocuteur sait déjà traiter.<br/><br/>Ici, $\\dfrac{x^2}{x}$ se simplifie en $x$ pour $x \\neq 0$, et tout le monde sait que $(x)\' = 1$. Or la méthode « je dérive le haut et le bas » donnerait $\\dfrac{2x}{1} = 2x$. Comme $2x$ et $1$ ne coïncident qu\'en un seul point, la méthode est réfutée — définitivement, et sans avoir écrit la moindre formule.<br/><br/>Réciter la formule du quotient n\'est pas faux mathématiquement, mais cela ne <strong>convainc</strong> pas : réciter la bonne formule à quelqu\'un qui en applique une autre revient à opposer une autorité à une autre. Il retiendra la règle un moment, puis la réappliquera à l\'envers.<br/><br/>Signaler que $\\cos x$ s\'annule parle d\'un domaine de définition, ce qui ne dit rien de la méthode. Quant à l\'argument du signe de la dérivée de $\\sin x$, il est inexact : $(\\sin x)\' = \\cos x$, sans signe moins — et ce n\'est pas là que la méthode pèche.<br/><br/>À retenir : pour montrer qu\'une règle générale est fausse, un seul cas suffit. Pour montrer qu\'elle est vraie, aucun nombre de cas ne suffit.'
        }
      ]
    }
  });
