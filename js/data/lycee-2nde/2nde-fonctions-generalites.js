/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-fonctions-generalites.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-fonctions-generalites',
    level: 2, subject: 'maths',
    icon: '📈',
    title: 'Généralités sur les fonctions',
    subtitle: 'Définition, courbe, variations, extremums',
    keywords: ['Fonction', 'Image', 'Antécédent', 'Variations', 'Extremum'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Une fonction est une règle qui
         associe à chaque x... » : c'est la DÉFINITION, donc exactement ce
         que le cahier des charges proscrit en ouverture. Le test appliqué :
         « peut-on répondre à la question d'ouverture sans la notion du
         chapitre ? » — ici il n'y avait pas de question du tout.

         La situation retenue rend visible, SANS AUCUN VOCABULAIRE, la
         dissymétrie entre image et antécédent : un objet lancé passe DEUX
         FOIS par la même hauteur, une fois en montant, une fois en
         redescendant. L'élève constate qu'une question a une réponse unique
         et l'autre deux, avant qu'on ait nommé quoi que ce soit. C'est
         exactement l'asymétrie que tout le chapitre exploite, et la source
         de l'erreur la plus tenace du niveau (échanger les deux mots).

         Entrée non décorative : la difficulté est réelle, et le ballon n'est
         qu'un support de lecture, pas une anecdote plaquée. */
      intro: 'Tu lances un ballon en l\'air. Il monte, il ralentit, puis il retombe.<br/><br/>' +
        'Pose-toi maintenant deux questions qui se ressemblent beaucoup.<br/><br/>' +
        '<strong>Première question :</strong> deux secondes après le lancer, à quelle hauteur se trouve le ballon ? Il n\'y a qu\'une seule réponse possible. À un instant donné, le ballon est quelque part, et il n\'est qu\'à un seul endroit.<br/><br/>' +
        '<strong>Deuxième question :</strong> à quel instant le ballon se trouve-t-il à $5$ mètres de haut ? Cette fois il y a <strong>deux</strong> réponses — une fois en montant, une fois en redescendant. Et si tu demandes $50$ mètres, il n\'y en a sans doute <strong>aucune</strong>.<br/><br/>' +
        'Les deux questions portent pourtant sur le même lancer, avec les mêmes nombres. Ce qui change, c\'est le <strong>sens de lecture</strong> : de l\'instant vers la hauteur, ou de la hauteur vers l\'instant.<br/><br/>' +
        'C\'est toute l\'affaire de ce chapitre. Une <strong>fonction</strong> associe à chaque nombre de départ une valeur d\'arrivée et une seule, qu\'on appelle son <strong>image</strong>. Mais si tu remontes le courant, en partant de l\'arrivée pour retrouver les départs possibles — ce qu\'on appelle les <strong>antécédents</strong> —, tu peux en trouver deux, dix, ou pas un seul.<br/><br/>' +
        'Cette dissymétrie déroute au début, et c\'est précisément elle qui oblige à disposer de deux mots différents. Le reste du chapitre — domaine de définition, sens de variation, maximum — sert à décrire proprement ce que fait une fonction, et te servira sans interruption jusqu\'en terminale.',
      definitions: [
        { term: 'Fonction', def: 'Règle qui associe à chaque valeur $x$ de son domaine de définition une unique image $f(x)$.' },
        { term: 'Image', def: 'La valeur $f(x)$ obtenue en appliquant la fonction à $x$. Se lit verticalement sur le graphe.' },
        { term: 'Antécédent', def: 'Valeur $x$ telle que $f(x) = y$. Un antécédent peut ne pas exister, ou il peut y en avoir plusieurs.' },
        { term: 'Extremum', def: 'Maximum ou minimum de $f$ sur un intervalle. C\'est le point où la fonction atteint sa plus grande (ou plus petite) valeur.' }
      ],
      method: {
        title: 'Lire une courbe',
        steps: [
          '<strong>Image</strong> : partir de $x$ sur l\'axe horizontal, rejoindre la courbe, lire $y = f(x)$. <strong>Exemple :</strong> Si la courbe passe par $(3 ; 7)$, alors $f(3) = 7$ : l\'image de $3$ est $7$.',
          '<strong>Antécédent</strong> : partir de $y$ sur l\'axe vertical, rejoindre la courbe, lire $x$. <strong>Exemple :</strong> Si la courbe coupe la droite $y = 5$ en $x = 2$ et $x = 6$, alors $2$ et $6$ sont les antécédents de $5$.',
          '<strong>Maximum/minimum</strong> : chercher le sommet de la courbe sur l\'intervalle donné. <strong>Exemple :</strong> Si le point le plus haut de la courbe sur $[0 ; 8]$ est $(4 ; 10)$, le maximum est $10$, atteint en $x = 4$.',
          '<strong>Variations</strong> : la fonction croît si la courbe monte de gauche à droite. <strong>Exemple :</strong> Si $f(1) = 3$ et $f(4) = 9$ avec la courbe qui monte entre les deux, $f$ est croissante sur $[1 ; 4]$.'
        ]
      },
      example: {
        statement: 'Soit $f(x) = -x^2 + 6x - 5$. Calculer $f(2)$, puis déterminer un antécédent de $-5$.',
        steps: [
          'Image de $2$ : $f(2) = -(2)^2 + 6 \\times 2 - 5 = -4 + 12 - 5 = 3$.',
          'Antécédent de $-5$ : résoudre $f(x) = -5$ → $-x^2 + 6x - 5 = -5$ → $-x^2 + 6x = 0$ → $x(-x + 6) = 0$.',
          'Donc $x = 0$ ou $x = 6$ : il y a deux antécédents de $-5$.'
        ],
        answer: '$f(2) = 3$. Les antécédents de $-5$ sont $x = 0$ et $x = 6$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Lecture graphique d\'une courbe',
        title: 'Courbe de $f(x) = -x^2 + 6x - 5$',
        description: 'Reconstruction de l\'exemple du cours : lecture des deux antécédents de $-5$ (flèches en pointillés) et maximum de la fonction.',
        svg: `
          <svg viewBox="0 0 520 340" role="img" aria-labelledby="fonctions-diagram-title fonctions-diagram-desc">
            <title id="fonctions-diagram-title">Courbe de f(x) = -x2 + 6x - 5</title>
            <desc id="fonctions-diagram-desc">Repere avec la parabole f(x) = -x2 + 6x - 5, le maximum en (3 ; 4), et la lecture graphique des deux antecedents de -5 (x = 0 et x = 6) par fleches en pointilles.</desc>
            <defs>
              <marker id="fg-arrow" markerWidth="10" markerHeight="10" refX="7" refY="4" orient="auto">
                <path d="M0,0 L8,4 L0,8 Z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="80" y1="20" x2="80" y2="320"></line>
            <line class="grid-line" x1="140" y1="20" x2="140" y2="320"></line>
            <line class="grid-line" x1="200" y1="20" x2="200" y2="320"></line>
            <line class="grid-line" x1="260" y1="20" x2="260" y2="320"></line>
            <line class="grid-line" x1="320" y1="20" x2="320" y2="320"></line>
            <line class="grid-line" x1="380" y1="20" x2="380" y2="320"></line>
            <line class="grid-line" x1="440" y1="20" x2="440" y2="320"></line>

            <line class="grid-line" x1="50" y1="305" x2="470" y2="305"></line>
            <line class="grid-line" x1="50" y1="275" x2="470" y2="275"></line>
            <line class="grid-line" x1="50" y1="245" x2="470" y2="245"></line>
            <line class="grid-line" x1="50" y1="215" x2="470" y2="215"></line>
            <line class="grid-line" x1="50" y1="185" x2="470" y2="185"></line>
            <line class="grid-line" x1="50" y1="155" x2="470" y2="155"></line>
            <line class="grid-line" x1="50" y1="125" x2="470" y2="125"></line>
            <line class="grid-line" x1="50" y1="95" x2="470" y2="95"></line>
            <line class="grid-line" x1="50" y1="65" x2="470" y2="65"></line>
            <line class="grid-line" x1="50" y1="35" x2="470" y2="35"></line>

            <line class="axis" x1="45" y1="155" x2="480" y2="155"></line>
            <line class="axis" x1="80" y1="325" x2="80" y2="15"></line>
            <text class="axis-label" x="486" y="159">x</text>
            <text class="axis-label" x="85" y="12">y</text>

            <text class="tick-label" x="68" y="171" text-anchor="end">0</text>
            <text class="tick-label" x="140" y="171" text-anchor="middle">1</text>
            <text class="tick-label" x="200" y="171" text-anchor="middle">2</text>
            <text class="tick-label" x="260" y="171" text-anchor="middle">3</text>
            <text class="tick-label" x="320" y="171" text-anchor="middle">4</text>
            <text class="tick-label" x="380" y="171" text-anchor="middle">5</text>
            <text class="tick-label" x="440" y="171" text-anchor="middle">6</text>

            <text class="tick-label" x="70" y="39" text-anchor="end">4</text>
            <text class="tick-label" x="70" y="69" text-anchor="end">3</text>
            <text class="tick-label" x="70" y="99" text-anchor="end">2</text>
            <text class="tick-label" x="70" y="129" text-anchor="end">1</text>
            <text class="tick-label" x="70" y="189" text-anchor="end">-1</text>
            <text class="tick-label" x="70" y="219" text-anchor="end">-2</text>
            <text class="tick-label" x="70" y="249" text-anchor="end">-3</text>
            <text class="tick-label" x="70" y="279" text-anchor="end">-4</text>
            <text class="tick-label" x="70" y="309" text-anchor="end">-5</text>

            <polyline class="curve-main" points="80,305 110,222.5 140,155 170,102.5 200,65 230,42.5 260,35 290,42.5 320,65 350,102.5 380,155 410,222.5 440,305"></polyline>
            <text class="annotation-label" x="300" y="27" text-anchor="middle">f(x) = -x2 + 6x - 5</text>

            <line class="guide-line" x1="260" y1="155" x2="260" y2="35" marker-end="url(#fg-arrow)"></line>
            <line class="guide-line" x1="80" y1="35" x2="260" y2="35" marker-end="url(#fg-arrow)"></line>
            <circle class="plot-point" cx="260" cy="35" r="5"></circle>
            <text class="annotation-label" x="266" y="26">Maximum (3 ; 4)</text>

            <line class="guide-line" x1="80" y1="305" x2="440" y2="305" marker-end="url(#fg-arrow)"></line>
            <line class="guide-line" x1="440" y1="305" x2="440" y2="155" marker-end="url(#fg-arrow)"></line>
            <circle class="plot-point-alt" cx="440" cy="305" r="4"></circle>
            <text class="label-soft" x="446" y="300">x = 6</text>

            <circle class="plot-point-alt" cx="80" cy="305" r="4"></circle>
            <text class="label-soft" x="50" y="300" text-anchor="end">x = 0</text>
            <text class="label-soft" x="50" y="317" text-anchor="end">y = -5</text>

            <circle class="plot-point-alt" cx="200" cy="65" r="4"></circle>
            <text class="label-soft" x="206" y="58">(2 ; 3)</text>
          </svg>
        `,
        notes: [
          'Antécédent de $-5$ : on part de $y=-5$ sur l\'axe vertical, on rejoint la courbe (flèche horizontale en pointillés), puis on lit l\'abscisse (flèche verticale). On trouve deux antécédents : $x = 0$ et $x = 6$.',
          'Maximum : le sommet de la courbe est en $(3 ; 4)$. C\'est la plus grande valeur atteinte par $f$ sur ce domaine : $f(x) \\leq 4$ pour tout $x$.',
          '$f$ est croissante sur $[0 ; 3]$ (la courbe monte) puis décroissante sur $[3 ; 6]$ (la courbe descend) — le maximum est exactement au changement de sens.'
        ],
        reading: 'Pour un antécédent, on part de l\'axe des $y$ et on rejoint horizontalement la courbe avant de redescendre verticalement sur l\'axe des $x$ — c\'est l\'inverse de la lecture d\'une image (verticale puis horizontale).',
        caption: 'Courbe de $f(x) = -x^2 + 6x - 5$ (exemple du cours) : deux antécédents de $-5$ ($x=0$ et $x=6$) et maximum en $(3 ; 4)$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. Les trois retenus sont ceux
         que la fiche professeur de ce chapitre désigne comme les plus
         coûteux, parce qu'ils se traînent jusqu'en terminale :
           1. échanger image et antécédent — l'image est unique, l'antécédent
              ne l'est pas ;
           2. confondre le sens de variation et le signe de la fonction ;
           3. croire qu'une fonction est définie pour tous les nombres.

         TOUTES les coordonnées sont CALCULÉES à partir de la définition de la
         fonction, jamais posées à l'œil, et relues par
         scripts/manuel/tests/diagrams-2nde.test.js : chaque sommet de
         polyline est recalculé et comparé à l'équation annoncée.
         Le calcul a rattrapé deux fautes invisibles pendant la rédaction :
         les branches de l'hyperbole du schéma 3 sortaient du viewBox par le
         bas, et l'horizontale du schéma 1 ne coupait pas la parabole aux
         abscisses entières annoncées. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Une seule image, mais parfois deux antécédents',
          description: 'Tu cherches l\'image de $3{,}5$ : tu montes à la verticale et tu rencontres la courbe <strong>une seule fois</strong>. Tu cherches maintenant les antécédents de $3$ : tu suis l\'horizontale et tu rencontres la courbe <strong>deux fois</strong>.<br/><br/>Ce n\'est pas une bizarrerie de cette courbe : c\'est la définition même d\'une fonction. À chaque $x$ correspond <strong>un</strong> résultat, jamais deux. Rien n\'oblige en revanche un résultat à provenir d\'un seul $x$.',
          svg: `
            <svg viewBox="0 0 340 240" role="img" aria-labelledby="fg2-unicite-title fg2-unicite-desc">
              <title id="fg2-unicite-title">Image unique et antecedents multiples</title>
              <desc id="fg2-unicite-desc">La parabole d'equation x au carre moins quatre x plus trois est tracee dans un repere. Une droite verticale d'abscisse trois et demi monte de l'axe horizontal jusqu'a la courbe et la rencontre en un seul point. Une droite horizontale d'ordonnee trois traverse toute la figure et rencontre la courbe en deux points, d'abscisses zero et quatre. La verticale ne coupe qu'une fois, l'horizontale coupe deux fois.</desc>
              <defs>
                <marker id="fg2-unicite-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Echelle : 56 unites de viewBox par unite en abscisse, 28 en
                   ordonnee. Origine du repere en (62 ; 190). Ces deux nombres
                   sont choisis pour que les abscisses entieres et les
                   ordonnees entieres tombent sur des entiers de viewBox, donc
                   exactement sur les graduations dessinees. -->
              <line class="grid-line" x1="34" y1="30" x2="34" y2="226"></line>
              <line class="grid-line" x1="118" y1="30" x2="118" y2="226"></line>
              <line class="grid-line" x1="174" y1="30" x2="174" y2="226"></line>
              <line class="grid-line" x1="230" y1="30" x2="230" y2="226"></line>
              <line class="grid-line" x1="314" y1="30" x2="314" y2="226"></line>
              <line class="grid-line" x1="26" y1="218" x2="322" y2="218"></line>
              <line class="grid-line" x1="26" y1="162" x2="322" y2="162"></line>
              <line class="grid-line" x1="26" y1="134" x2="322" y2="134"></line>
              <line class="grid-line" x1="26" y1="78" x2="322" y2="78"></line>
              <line class="grid-line" x1="26" y1="50" x2="322" y2="50"></line>

              <line class="axis" x1="26" y1="190" x2="326" y2="190"></line>
              <line class="axis" x1="62" y1="228" x2="62" y2="26"></line>
              <text class="axis-label" x="330" y="194">x</text>
              <text class="axis-label" x="67" y="24">y</text>

              <text class="tick-label" x="54" y="202" text-anchor="end">0</text>
              <text class="tick-label" x="118" y="202" text-anchor="middle">1</text>
              <text class="tick-label" x="230" y="202" text-anchor="middle">3</text>
              <text class="tick-label" x="286" y="202" text-anchor="middle">4</text>
              <text class="tick-label" x="54" y="110" text-anchor="end">3</text>

              <!-- Parabole calculee point par point : y = x carre - 4x + 3,
                   de x = -0,5 a x = 4,5, un point tous les quarts d'unite. -->
              <polyline class="curve-main" points="34,43 48,76.25 62,106 76,132.25 90,155 104,174.25 118,190 132,202.25 146,211 160,216.25 174,218 188,216.25 202,211 216,202.25 230,190 244,174.25 258,155 272,132.25 286,106 300,76.25 314,43"></polyline>

              <!-- La verticale x = 3,5 : elle monte de l'axe jusqu'a la
                   courbe et s'arrete la, sur l'unique point rencontre. -->
              <line class="guide-line" x1="258" y1="190" x2="258" y2="155" marker-end="url(#fg2-unicite-pointe)"></line>
              <circle class="plot-point" cx="258" cy="155" r="4"></circle>
              <text class="annotation-label" x="266" y="150" text-anchor="start">un seul point</text>

              <!-- L'horizontale y = 3 : elle traverse toute la figure et
                   rencontre la courbe en x = 0 et x = 4, valeurs exactes
                   puisque 0 et 4 sont les racines de x carre - 4x = 0. -->
              <line class="guide-line" x1="34" y1="106" x2="314" y2="106"></line>
              <circle class="plot-point-alt" cx="62" cy="106" r="4"></circle>
              <circle class="plot-point-alt" cx="286" cy="106" r="4"></circle>
              <text class="label-soft" x="70" y="100" text-anchor="start">deux points</text>
            </svg>
          `,
          notes: [
            'La verticale $x = 3{,}5$ ne rencontre la courbe qu\'une fois : l\'image $f(3{,}5) = 1{,}25$ est <strong>unique</strong>.',
            'L\'horizontale $y = 3$ rencontre la courbe deux fois, en $x = 0$ et en $x = 4$ : le nombre $3$ a <strong>deux antécédents</strong>.',
            'Retiens le geste, il te dit tout de suite de quoi on parle : une image se lit <strong>verticalement</strong>, un antécédent se lit <strong>horizontalement</strong>.'
          ],
          reading: 'Promène mentalement la verticale de gauche à droite : elle ne touche jamais la courbe deux fois. Promène maintenant l\'horizontale de haut en bas : selon la hauteur, elle touche la courbe deux fois, une fois, ou pas du tout. C\'est exactement la dissymétrie entre image et antécédent.',
          caption: 'Sur $f(x) = x^2 - 4x + 3$ : la verticale $x = 3{,}5$ coupe une fois, l\'horizontale $y = 3$ coupe deux fois.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Une fonction peut descendre en restant positive',
          description: 'Voici la confusion que la fiche professeur classe parmi les plus tenaces : croire que « $f$ décroît » signifie « $f$ devient négative ».<br/><br/>La courbe ci-dessous <strong>descend sur tout l\'intervalle</strong>, et pourtant elle reste <strong>au-dessus de l\'axe</strong> du début à la fin. Le sens de variation dit comment la valeur <strong>évolue</strong> ; le signe dit de quel côté de l\'axe elle <strong>se trouve</strong>. Ce sont deux questions différentes.',
          svg: `
            <svg viewBox="0 0 340 230" role="img" aria-labelledby="fg2-variation-title fg2-variation-desc">
              <title id="fg2-variation-title">Une courbe decroissante qui reste positive</title>
              <desc id="fg2-variation-desc">Dans un repere, une courbe part du point d'abscisse zero et d'ordonnee dix, puis descend regulierement jusqu'au point d'abscisse six et d'ordonnee un. Elle ne franchit jamais l'axe horizontal : elle reste entierement au-dessus. La fonction est donc decroissante et pourtant strictement positive sur tout l'intervalle.</desc>
              <defs>
                <marker id="fg2-variation-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--secondary)"></path>
                </marker>
              </defs>

              <!-- Echelle : 40 unites par unite d'abscisse, 16 par unite
                   d'ordonnee. Origine (50 ; 200). L'axe des ordonnees monte
                   jusqu'a 10, ce qui impose un pas vertical plus serre que
                   l'horizontal : le repere n'est pas orthonorme, et il n'a
                   pas a l'etre, car on ne lit ici aucune distance. -->
              <line class="grid-line" x1="50" y1="32" x2="50" y2="208"></line>
              <line class="grid-line" x1="130" y1="32" x2="130" y2="208"></line>
              <line class="grid-line" x1="210" y1="32" x2="210" y2="208"></line>
              <line class="grid-line" x1="290" y1="32" x2="290" y2="208"></line>
              <line class="grid-line" x1="42" y1="168" x2="306" y2="168"></line>
              <line class="grid-line" x1="42" y1="136" x2="306" y2="136"></line>
              <line class="grid-line" x1="42" y1="104" x2="306" y2="104"></line>
              <line class="grid-line" x1="42" y1="72" x2="306" y2="72"></line>
              <line class="grid-line" x1="42" y1="40" x2="306" y2="40"></line>

              <line class="axis" x1="42" y1="200" x2="312" y2="200"></line>
              <line class="axis" x1="50" y1="212" x2="50" y2="30"></line>
              <text class="axis-label" x="316" y="204">x</text>
              <text class="axis-label" x="55" y="28">y</text>

              <text class="tick-label" x="42" y="212" text-anchor="end">0</text>
              <text class="tick-label" x="130" y="212" text-anchor="middle">2</text>
              <text class="tick-label" x="210" y="212" text-anchor="middle">4</text>
              <text class="tick-label" x="290" y="212" text-anchor="middle">6</text>
              <text class="tick-label" x="42" y="172" text-anchor="end">2</text>
              <text class="tick-label" x="42" y="108" text-anchor="end">6</text>
              <text class="tick-label" x="42" y="44" text-anchor="end">10</text>

              <!-- Courbe f(x) = 10 - x carre sur 4, calculee de demi-unite en
                   demi-unite. f(0) = 10 et f(6) = 1 : elle descend de neuf
                   unites sans jamais atteindre zero. -->
              <polyline class="curve-main" points="50,40 70,41 90,44 110,49 130,56 150,65 170,76 190,89 210,104 230,121 250,140 270,161 290,184"></polyline>

              <circle class="plot-point" cx="50" cy="40" r="4"></circle>
              <circle class="plot-point" cx="290" cy="184" r="4"></circle>
              <text class="tick-label" x="58" y="36" text-anchor="start">f(0) = 10</text>
              <text class="tick-label" x="282" y="178" text-anchor="end">f(6) = 1</text>

              <!-- La fleche de descente est posee HORS de la courbe, dans la
                   zone vide du haut a droite : une cote ne se pose jamais sur
                   un trait (regle de forme du cahier des charges). -->
              <line class="guide-line" x1="196" y1="46" x2="276" y2="70" marker-end="url(#fg2-variation-pointe)"></line>
              <text class="label-soft" x="192" y="42" text-anchor="end">elle descend</text>
              <text class="annotation-label" x="160" y="196" text-anchor="middle">et pourtant elle reste au-dessus de zéro</text>
            </svg>
          `,
          notes: [
            'La fonction est <strong>décroissante</strong> : quand $x$ augmente, $f(x)$ diminue, de $10$ jusqu\'à $1$.',
            'La fonction est <strong>strictement positive</strong> : sa courbe ne touche jamais l\'axe des abscisses, donc $f(x) > 0$ partout sur l\'intervalle.',
            'Les deux affirmations sont vraies en même temps, et c\'est bien la preuve qu\'elles ne parlent pas de la même chose.'
          ],
          reading: 'Pose ton doigt sur la courbe et suis-la de gauche à droite : ton doigt descend sans interruption. Regarde maintenant si ton doigt passe sous l\'axe : jamais. Décroissante ne veut donc pas dire négative, et tu peux refaire ce double contrôle sur n\'importe quelle courbe.',
          caption: 'Une fonction décroissante sur $[0\\,;\\,6]$ et pourtant strictement positive : signe et variation sont indépendants.'
        },
        {
          theme: 'maths',
          kicker: 'La valeur interdite',
          title: 'Là où la courbe se coupe en deux',
          description: 'Pour $f(x) = \\dfrac{6}{x-2}$, le nombre $2$ est <strong>interdit</strong> : il annulerait le dénominateur. Ce n\'est pas une convention d\'écriture, cela se voit sur le dessin.<br/><br/>La courbe n\'est pas trouée en un point : elle est faite de <strong>deux morceaux séparés</strong>, qui s\'approchent de la droite verticale $x = 2$ sans jamais la toucher. Le domaine de définition est $\\mathbb{R}$ privé de $2$.',
          svg: `
            <svg viewBox="0 0 320 240" role="img" aria-labelledby="fg2-interdite-title fg2-interdite-desc">
              <title id="fg2-interdite-title">La valeur interdite coupe la courbe en deux morceaux</title>
              <desc id="fg2-interdite-desc">La courbe de six divise par x moins deux est tracee dans un repere. Elle se compose de deux morceaux totalement separes. Le morceau de gauche occupe la partie situee sous l'axe horizontal et plonge vers le bas quand on approche de l'abscisse deux. Le morceau de droite occupe la partie situee au-dessus de l'axe et monte tres haut quand on approche de l'abscisse deux par la droite. Une droite verticale en tirets marque l'abscisse deux : aucun des deux morceaux ne la touche.</desc>

              <!-- Echelle : 32 unites par unite d'abscisse, 14 par unite
                   d'ordonnee. Origine (94 ; 120). Les deux branches sont
                   calculees de quart d'unite en quart d'unite et coupees
                   exactement a l'ordonnee sept et moins sept, ce qui les fait
                   s'arreter aux abscisses 2 - 6/7 et 2 + 6/7. Sans cette
                   coupe nette, les branches sortaient du cadre par le bas. -->
              <line class="grid-line" x1="30" y1="16" x2="30" y2="224"></line>
              <line class="grid-line" x1="62" y1="16" x2="62" y2="224"></line>
              <line class="grid-line" x1="126" y1="16" x2="126" y2="224"></line>
              <line class="grid-line" x1="190" y1="16" x2="190" y2="224"></line>
              <line class="grid-line" x1="222" y1="16" x2="222" y2="224"></line>
              <line class="grid-line" x1="254" y1="16" x2="254" y2="224"></line>
              <line class="grid-line" x1="286" y1="16" x2="286" y2="224"></line>
              <line class="grid-line" x1="24" y1="176" x2="292" y2="176"></line>
              <line class="grid-line" x1="24" y1="64" x2="292" y2="64"></line>

              <line class="axis" x1="24" y1="120" x2="300" y2="120"></line>
              <line class="axis" x1="94" y1="228" x2="94" y2="14"></line>
              <text class="axis-label" x="304" y="124">x</text>
              <text class="axis-label" x="99" y="12">y</text>

              <text class="tick-label" x="88" y="132" text-anchor="end">0</text>
              <text class="tick-label" x="126" y="132" text-anchor="middle">1</text>
              <text class="tick-label" x="222" y="132" text-anchor="middle">4</text>
              <text class="tick-label" x="286" y="132" text-anchor="middle">6</text>
              <text class="tick-label" x="88" y="68" text-anchor="end">4</text>
              <text class="tick-label" x="88" y="180" text-anchor="end">-4</text>

              <!-- L'asymptote est en TIRETS et en teinte faible : elle n'est
                   pas la courbe, c'est la frontiere que la courbe n'atteint
                   pas. La hierarchie de trait porte cette distinction. -->
              <line class="guide-line" x1="158" y1="16" x2="158" y2="224"></line>
              <text class="label-soft" x="164" y="26" text-anchor="start">x = 2 interdit</text>

              <!-- Branche de gauche : x de -2 a 2 - 6/7, donc entierement a
                   gauche de l'asymptote et sous l'axe. -->
              <polyline class="curve-main" points="30,141 34.79,141.82 39.58,142.7 44.37,143.66 49.16,144.7 53.95,145.83 58.73,147.08 63.52,148.45 68.31,149.97 73.1,151.66 77.89,153.55 82.68,155.69 87.47,158.11 92.26,160.89 97.05,164.1 101.84,167.86 106.63,172.32 111.41,177.7 116.2,184.31 120.99,192.64 125.78,203.43 130.57,218"></polyline>
              <!-- Branche de droite : x de 2 + 6/7 a 6, au-dessus de l'axe. -->
              <polyline class="curve-main" points="185.43,22 190.22,36.57 195.01,47.36 199.8,55.69 204.59,62.3 209.37,67.68 214.16,72.14 218.95,75.9 223.74,79.11 228.53,81.89 233.32,84.31 238.11,86.45 242.9,88.34 247.69,90.03 252.48,91.55 257.27,92.92 262.05,94.17 266.84,95.3 271.63,96.34 276.42,97.3 281.21,98.18 286,99"></polyline>

              <!-- Point de controle : f(5) = 2, donc x = 254 et y = 92.
                   Il tombe sur une graduation verticale, ce qui permet a
                   l'eleve de verifier l'echelle lui-meme. -->
              <circle class="plot-point" cx="254" cy="92" r="4"></circle>
              <text class="tick-label" x="248" y="86" text-anchor="end">f(5) = 2</text>
              <circle class="plot-point" cx="62" cy="148" r="4"></circle>
              <text class="tick-label" x="68" y="158" text-anchor="start">f(-1) = -2</text>
            </svg>
          `,
          notes: [
            'Remplacer $x$ par $2$ donnerait $\\dfrac{6}{0}$, qui n\'est pas un nombre : c\'est pour cela que $2$ est écarté du domaine.',
            'Le domaine s\'écrit $\\mathcal{D}_f = ]-\\infty\\,;\\,2[\\,\\cup\\,]2\\,;\\,+\\infty[$ — deux intervalles, exactement comme il y a deux morceaux de courbe.',
            'Les deux points marqués te permettent de contrôler l\'échelle : $f(5) = \\dfrac{6}{3} = 2$ et $f(-1) = \\dfrac{6}{-3} = -2$.'
          ],
          reading: 'Essaie de suivre la courbe du crayon sans le lever : tu n\'y arrives pas, il faut sauter par-dessus la droite en tirets. Ce saut, c\'est la valeur interdite. Prends le réflexe de chercher ce qui annule un dénominateur <strong>avant</strong> de calculer quoi que ce soit.',
          caption: 'Courbe de $f(x) = \\dfrac{6}{x-2}$ : deux branches séparées par la valeur interdite $x = 2$.'
        }
      ],
      formulas: [
        '$f$ croissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)$',
        '$f$ décroissante sur $I$ : $x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)$'
      ],
      recap: [
        'Une fonction associe à chaque $x$ une unique image $f(x)$ ; un antécédent peut ne pas être unique.',
        'Croissante = la courbe monte (de gauche à droite) ; décroissante = la courbe descend.',
        'Le maximum sur un intervalle est la plus grande valeur atteinte par $f(x)$ sur cet intervalle.',
        'Image = lecture verticale du graphe ; antécédent = lecture horizontale.'
      ],
      piege: 'Un antécédent peut ne pas exister ou ne pas être unique. L\'image d\'un $x$ donné, elle, est toujours unique (sinon ce n\'est pas une fonction).'
    },
    quiz: [
      { q: 'Si $f(5) = 3$, laquelle de ces affirmations est VRAIE ?', options: ['$3$ est l\'image de $5$ et $5$ est un antécédent de $3$', '$5$ est l\'image de $3$ et $3$ est un antécédent de $5$', '$f(3) = 5$', '$f$ n\'est définie qu\'en $x=5$'], answer: 0, correction: '$f(5) = 3$ signifie : « l\'image de $5$ est $3$ » et « $5$ est un antécédent de $3$ ». L\'erreur classique est d\'inverser : $5$ est l\'entrée (antécédent), $3$ est la sortie (image).' },
      { q: '$f$ est croissante sur $[1;4]$. On a $f(1)=2$ et $f(4)=9$. Alors :', options: ['$f(2) > f(3)$', '$f(2) < f(3)$', '$f(2) = f(3)$', 'Impossible à dire'], answer: 1, correction: 'Croissante : $2 < 3 \\Rightarrow f(2) < f(3)$.' },
      { q: 'Le maximum de $f$ sur $[-2;3]$ est $5$. Cela signifie que :', options: ['$f(5)=-2$', '$f(x)\\le 5$ pour tout $x\\in[-2;3]$', '$f(x)\\ge 5$ pour tout $x$', '$f(-2)=5$'], answer: 1, correction: 'Le maximum vaut $5$, donc $f(x)\\le 5$ pour tout $x$ de l\'intervalle.' },
      { q: 'Soit $f(x) = x^2 - 4x + 3$. On calcule $f(1) = 0$ et $f(3) = 0$. Peut-on dire que $f$ est constante (nulle) sur $[1;3]$ ?', options: ['Non : $f(1) = f(3) = 0$ ne signifie pas que $f$ est nulle entre les deux. Par exemple $f(2) = -1 \\neq 0$', 'Oui : si $f(1) = f(3) = 0$, alors $f$ vaut $0$ partout entre $1$ et $3$', 'Non : $f$ n\'est pas définie entre $1$ et $3$', 'Oui : c\'est le théorème des valeurs intermédiaires'], answer: 0, correction: 'Deux images égales ne signifient pas que la fonction est constante entre les deux. Ici $f(2) = 4 - 8 + 3 = -1 \\neq 0$. La fonction descend puis remonte. On ne peut rien déduire entre deux points sans information supplémentaire sur les variations.' },
      { q: 'Une fonction $f$ est décroissante sur $[0;5]$ avec $f(0) = 10$ et $f(5) = 2$. L\'équation $f(x) = 7$ admet-elle une solution sur $[0;5]$ ?', options: ['Oui : $2 \\leq 7 \\leq 10$ et $f$ est continue et décroissante, donc $f$ prend exactement une fois la valeur $7$', 'Non : on ne connaît pas l\'expression de $f$', 'Oui : il y a plusieurs solutions', 'Non : $f$ est décroissante donc elle ne peut pas valoir $7$'], answer: 0, correction: 'f est décroissante sur [0;5] avec f(0) = 10 ≥ 7 ≥ 2 = f(5). Comme f décroît continûment de 10 à 2, elle prend toutes les valeurs intermédiaires : il existe donc une unique valeur c telle que f(c) = 7.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 18 énoncés tirés, 6 moules, mais **2 tâches distinctes**
       seulement — toutes les variantes calculaient trois images d'un même
       trinôme. L'antécédent (résoudre $f(x) = k$), le domaine de définition et
       la lecture d'un tableau de variations, tous au programme du chapitre,
       n'étaient travaillés par aucun exercice.

       Cinq tâches maintenant. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['images', 'antecedent', 'image-simple', 'variations', 'domaine']);

        /* Tâche 2 — l'ANTÉCÉDENT, c'est-à-dire le chemin inverse. C'est la
           confusion majeure du chapitre et aucun exercice ne la travaillait. */
        if (tache === 'antecedent') {
          const a = pick([-3, -2, 2, 3, 4]);
          const b = rand(-8, 8);
          const x = rand(-5, 6);
          const k = a * x + b;
          return {
            statement: `Soit la fonction $g$ définie par $g(x) = ${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)}$.<br/><br/>Calcule l'<strong>antécédent</strong> de $${k}$ par $g$, c'est-à-dire résous $g(x) = ${k}$.`,
            answer: x, tolerance: 0, unit: '',
            hint: `Chercher un antécédent, c'est faire le chemin INVERSE d'une image : on connaît le résultat $${k}$ et on cherche le nombre de départ. Écris l'équation $${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${k}$ et résous-la.`,
            solution: [
              `Un antécédent de $${k}$ est un nombre $x$ dont l'image vaut $${k}$ : on résout donc $g(x) = ${k}$.`,
              `$${a}x ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${k}$, donc $${a}x = ${k - b}$.`,
              `D'où $x = ${x}$. Vérification : $g(${x}) = ${a} \\times ${x} ${b >= 0 ? '+ ' + b : '- ' + Math.abs(b)} = ${k}$ ✓`
            ]
          };
        }

        /* Tâche 3 — une image simple, pour installer la notation f(x). */
        if (tache === 'image-simple') {
          const a = pick([2, 3, -2, -1]);
          /* c non nul : l'énoncé imprimait « $f(x) = -2x^2 + 0$ » quand le
             tirage donnait zéro. Défaut trouvé le 2026-09-13 sur le tirage
             réel. On tire donc dans deux plages qui excluent 0. */
          const c = pick([rand(-6, -1), rand(1, 6)]);
          const x = rand(-4, 5);
          const y = a * x * x + c;
          return {
            statement: `Soit $f(x) = ${a === -1 ? '-' : a}x^2 ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}$.<br/><br/>Calcule $f(${x})$.`,
            answer: y, tolerance: 0, unit: '',
            hint: `Remplace chaque $x$ par $${x}$, <strong>parenthèses comprises</strong> si le nombre est négatif : $(${x})^2$ et non $-${Math.abs(x)}^2$.`,
            solution: [
              `On remplace $x$ par $${x}$ : $f(${x}) = ${a === -1 ? '-' : a} \\times (${x})^2 ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)}$.`,
              `$(${x})^2 = ${x * x}$, donc $f(${x}) = ${a * x * x} ${c >= 0 ? '+ ' + c : '- ' + Math.abs(c)} = ${y}$.`,
              x < 0 ? `Attention aux parenthèses : $(${x})^2 = ${x * x}$ est POSITIF, alors que $-${Math.abs(x)}^2$ vaudrait $${-(x * x)}$.` : `Pense à toujours parenthéser le nombre substitué : cela évite les erreurs de signe quand il est négatif.`
            ]
          };
        }

        /* Tâche 4 — lire un sens de variation, sans calculer d'image.
           Réponse codée : 1 croissante, 0 décroissante. */
        if (tache === 'variations') {
          const croissante = pick([true, false]);
          const a = rand(1, 5);
          const xd = rand(-4, 2), xf = xd + rand(2, 5);
          const fd = rand(2, 10);
          const ff = croissante ? fd + a * (xf - xd) : fd - a * (xf - xd);
          return {
            statement: `Une fonction $f$ vérifie $f(${xd}) = ${fd}$ et $f(${xf}) = ${ff}$, et elle est monotone sur l'intervalle $[${xd} ; ${xf}]$.<br/><br/>Est-elle croissante sur cet intervalle ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: croissante ? 1 : 0, tolerance: 0, unit: '',
            hint: `Une fonction est croissante quand $f(x)$ augmente en même temps que $x$. Compare les deux images en respectant l'ordre des deux abscisses.`,
            solution: [
              `Quand $x$ passe de $${xd}$ à $${xf}$, il augmente.`,
              `Dans le même temps, $f(x)$ passe de $${fd}$ à $${ff}$ : il ${croissante ? 'augmente' : 'diminue'} aussi.`,
              `La fonction est donc ${croissante ? 'croissante' : 'décroissante'} sur $[${xd} ; ${xf}]$. Réponse : $${croissante ? 1 : 0}$.`
            ]
          };
        }

        /* Tâche 5 — domaine de définition d'un quotient. */
        if (tache === 'domaine') {
          const k = rand(-6, 6);
          return {
            statement: `Soit $f(x) = \\dfrac{1}{x ${k >= 0 ? '- ' + k : '+ ' + Math.abs(k)}}$.<br/><br/>Quelle est la <strong>seule</strong> valeur interdite, c'est-à-dire le nombre que $x$ ne peut pas prendre ?`,
            answer: k, tolerance: 0, unit: '',
            hint: `Une division par zéro n'a pas de sens. Cherche donc la valeur de $x$ qui annulerait le dénominateur.`,
            solution: [
              `Le dénominateur ne doit jamais être nul : on résout $x ${k >= 0 ? '- ' + k : '+ ' + Math.abs(k)} = 0$.`,
              `On trouve $x = ${k}$ : c'est la valeur interdite.`,
              `Le domaine de définition est donc $\\mathbb{R}$ privé de $${k}$, ce qui s'écrit $]-\\infty ; ${k}[ \\cup ]${k} ; +\\infty[$.`
            ]
          };
        }

        /* Tâche 1 — trois images d'un trinôme et sens de variation (tâche
           historique). */
        const contexts = [
          { intro: 'La hauteur d\'un ballon lancé en l\'air est modélisée par', unit: 'm', xName: 't', xUnit: 's' },
          { intro: 'Le bénéfice d\'une entreprise en fonction du nombre de produits vendus est', unit: '€', xName: 'x', xUnit: 'produits' },
          { intro: 'La distance de freinage d\'une voiture est donnée par', unit: 'm', xName: 'v', xUnit: 'km/h' }
        ];
        const ctx = pick(contexts);
        const a = -rand(1, 3);
        const b = rand(4, 10);
        const c = rand(1, 8);
        const x1 = rand(0, 3);
        const x2 = rand(x1 + 1, x1 + 3);
        const x3 = rand(x2 + 1, x2 + 3);
        const f1 = a * x1 * x1 + b * x1 + c;
        const f2 = a * x2 * x2 + b * x2 + c;
        const f3 = a * x3 * x3 + b * x3 + c;
        const maxVal = Math.max(f1, f2, f3);
        return {
          statement: `Soit $f(${ctx.xName}) = ${a === -1 ? '-' : a}${ctx.xName}^2 + ${b}${ctx.xName} + ${c}$.<br/><br/><strong>1.</strong> Calculer $f(${x1})$, $f(${x2})$ et $f(${x3})$.<br/><strong>2.</strong> La fonction est-elle croissante ou décroissante sur $[${x1};${x2}]$ ? Sur $[${x2};${x3}]$ ?<br/><strong>3.</strong> En déduire le maximum de $f$ sur $\\{${x1};${x2};${x3}\\}$.<br/><br/>Donne la valeur de $f(${x2})$.`,
          answer: f2,
          tolerance: 0,
          unit: ctx.unit,
          hint: `Remplace $${ctx.xName}$ par $${x2}$ : $f(${x2}) = ${a} \\times ${x2}^2 + ${b} \\times ${x2} + ${c}$.`,
          solution: [
            `$f(${x1}) = ${a} \\times ${x1*x1} + ${b} \\times ${x1} + ${c} = ${a*x1*x1} + ${b*x1} + ${c} = ${f1}$`,
            `$f(${x2}) = ${a} \\times ${x2*x2} + ${b} \\times ${x2} + ${c} = ${a*x2*x2} + ${b*x2} + ${c} = ${f2}$`,
            `$f(${x3}) = ${a} \\times ${x3*x3} + ${b} \\times ${x3} + ${c} = ${a*x3*x3} + ${b*x3} + ${c} = ${f3}$`,
            `${f1 < f2 ? 'Croissante' : 'Décroissante'} sur $[${x1};${x2}]$ ; ${f2 > f3 ? 'décroissante' : 'croissante'} sur $[${x2};${x3}]$. Maximum parmi ces trois valeurs : $${maxVal}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un fabricant de boîtes vend ses produits à un prix unitaire de $p$ euros. Le nombre de boîtes vendues par mois est $N(p) = 500 - 20p$ (pour $0 \\leq p \\leq 25$). Le chiffre d\'affaires mensuel est $C(p) = p \\times N(p) = p(500 - 20p) = -20p^2 + 500p$.',
      tasks: [
        'Calculer $C(5)$, $C(10)$, $C(15)$ et $C(20)$.',
        'Dresser le tableau de variations de $C$ sur $[5;20]$ à partir de ces valeurs. Identifier le maximum.',
        'Déterminer les antécédents de $2000$ par $C$ (c\'est-à-dire résoudre $C(p) = 2000$).'
      ],
      solutions: [
        '$C(5) = -20 \\times 25 + 500 \\times 5 = 2000$ € ; $C(10) = -2000 + 5000 = 3000$ € ; $C(15) = -4500 + 7500 = 3000$ € ; $C(20) = -8000 + 10000 = 2000$ €.',
        '$C$ croît sur $[5;10]$ puis décroît (ou reste stable) sur $[10;20]$. Le maximum semble atteint autour de $p = 12{,}5$ (milieu entre $10$ et $15$) avec $C(12{,}5) = 3125$ €.',
        '$-20p^2 + 500p = 2000 \\Rightarrow -20p^2 + 500p - 2000 = 0 \\Rightarrow p^2 - 25p + 100 = 0$. On trouve $p = 5$ ou $p = 20$ (vérification : $C(5) = C(20) = 2000$ ✓, cohérent avec les valeurs calculées en 1).'
      ],
      finalAnswer: 'Maximum du chiffre d\'affaires : $3125$ € pour $p = 12{,}5$ €. Antécédents de $2000$ : $p = 5$ € et $p = 20$ €.'
    },

    evaluation: {
      title: 'Évaluation — Généralités sur les fonctions',
      duration: '25 min',
      questions: [
        {
          statement: 'Soit $f(x) = 2x^2 - 3$. Calculer $f(-2)$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$f(-2) = 2 \\times (-2)^2 - 3 = 2 \\times 4 - 3 = 8 - 3 = 5$.'
        },
        {
          statement: 'Si $f(3) = 7$, laquelle de ces affirmations est correcte ?',
          type: 'multiple-choice',
          options: ['$7$ est un antécédent de $3$ par $f$', '$3$ est l\'image de $7$ par $f$', '$3$ est un antécédent de $7$ par $f$', '$f(7) = 3$'],
          answer: 2,
          points: 2,
          correction: '$f(3) = 7$ signifie que $7$ est l\'image de $3$ par $f$, et que $3$ est un antécédent de $7$ par $f$.'
        },
        {
          statement: 'Une fonction $f$ est décroissante sur $[1;5]$. On sait que $f(1) = 10$ et $f(5) = 2$. Quel encadrement peut-on donner pour $f(3)$ ?',
          type: 'multiple-choice',
          options: ['$2 \\leq f(3) \\leq 10$', '$f(3) \\leq 2$', '$f(3) \\geq 10$', '$f(3) = 6$'],
          answer: 0,
          points: 2,
          correction: '$f$ est décroissante sur $[1;5]$, donc $1 < 3 < 5 \\Rightarrow f(1) > f(3) > f(5)$, soit $2 < f(3) < 10$. L\'encadrement large $2 \\leq f(3) \\leq 10$ est donc correct.'
        },
        {
          statement: 'Soit $g(x) = -x + 8$. Calculer l\'antécédent de $3$ par $g$ (c\'est-à-dire résoudre $g(x) = 3$).',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$g(x) = 3 \\Rightarrow -x + 8 = 3 \\Rightarrow -x = -5 \\Rightarrow x = 5$. L\'antécédent de $3$ est $x = 5$.'
        },
        {
          statement: 'Le maximum d\'une fonction $f$ sur un intervalle $[a;b]$ est la plus grande valeur atteinte par $f(x)$ sur cet intervalle. Si $f$ est croissante sur $[2;6]$, en quel point le maximum est-il atteint ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Si $f$ est croissante sur $[2;6]$, alors $f$ atteint sa plus grande valeur en la borne droite de l\'intervalle : le maximum est atteint en $x = 6$.'
        }
      ]
    }
  });
