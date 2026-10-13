/* =========================================================
   Spark Learning – data/lycee-1re/1re-second-degre.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-second-degre',
    level: 2, subject: 'maths',
    icon: '🔵',
    title: 'Second degré',
    subtitle: 'Équations, discriminant, factorisation',
    keywords: ['Trinôme', 'Discriminant', 'Racine', 'Factorisation'],
    physics: 'Trajectoire parabolique d\'un projectile, étude de la chute libre',
    cours: {
      /* DECOUVRIR reecrit le 2026-09-14.
         L'ancienne ouverture annoncait la formule du discriminant et l'erreur a
         eviter : on pouvait la lire sans jamais se demander pourquoi il faudrait
         un outil nouveau. Or l'eleve sait deja resoudre une equation du premier
         degre, et il va essayer la meme methode ici — elle echoue, et c'est
         cette impasse qui fait le chapitre. On la lui fait rencontrer avant de
         lui donner quoi que ce soit. */
      intro: 'Tu sais résoudre $3x - 12 = 0$ : tu isoles $x$ en passant les termes de l\'autre côté, et tu tombes sur une réponse. Une seule.<br/><br/>Essaie maintenant avec $x^2 - 6x + 5 = 0$.<br/><br/>Tu ne peux rien isoler : dès que tu déplaces un terme, $x$ reste coincé à deux endroits à la fois, une fois au carré et une fois tout seul. Aucune des méthodes que tu connais ne mord sur cette équation.<br/><br/>Un jardinier a pourtant besoin de la résoudre : il dispose de $12$ mètres de grillage et veut enclore une parcelle rectangulaire de $5$ mètres carrés. Quelle doit être la largeur ?<br/><br/>Et voici ce qui rend cette équation vraiment différente : <strong>la réponse n\'est pas unique</strong>. Deux largeurs conviennent, $1$ mètre et $5$ mètres, et elles donnent la même parcelle vue de deux façons. Une équation qui admet deux réponses également valables, c\'est un objet que le premier degré ne produit jamais.<br/><br/>Tout le chapitre répond à deux questions : <strong>combien</strong> de solutions une telle équation possède-t-elle, et <strong>comment</strong> les trouver sans tâtonner.',
      definitions: [
        { term: 'Trinôme du second degré', def: 'Un <strong>trinôme</strong> est un polynôme de la forme $ax^2 + bx + c$ avec $a \\neq 0$. Sa courbe représentative est une <strong>parabole</strong>.' },
        { term: 'Discriminant', def: 'Le <strong>discriminant</strong> $\\Delta = b^2 - 4ac$ détermine le nombre de racines réelles : $\\Delta > 0$ (deux racines), $\\Delta = 0$ (racine double), $\\Delta < 0$ (aucune racine réelle).' },
        { term: 'Racine', def: 'Une <strong>racine</strong> (ou zéro) de $ax^2 + bx + c$ est une valeur $x_0$ telle que $ax_0^2 + bx_0 + c = 0$. Graphiquement, c\'est un point d\'intersection avec l\'axe des abscisses.' },
        { term: 'Sommet de la parabole', def: 'Le <strong>sommet</strong> a pour abscisse $x_S = -\\dfrac{b}{2a}$ et pour ordonnée $f(x_S)$. C\'est le <strong>maximum</strong> si $a < 0$ ou le <strong>minimum</strong> si $a > 0$.' }
      ],
      method: {
        title: 'Résoudre $ax^2+bx+c=0$',
        steps: [
          '<strong>Calculer le discriminant</strong> $\\Delta = b^2-4ac$.',
          '<strong>Si $\\Delta < 0$</strong> : pas de solution réelle.',
          '<strong>Si $\\Delta = 0$</strong> : une solution double $x_0 = -\\dfrac{b}{2a}$.',
          '<strong>Si $\\Delta > 0$</strong> : deux solutions $x_{1,2} = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.'
        ]
      },
      example: {
        statement: 'Résoudre $2x^2 - 8x + 6 = 0$ et donner la forme factorisée.',
        steps: [
          'On identifie $a = 2$, $b = -8$, $c = 6$. Calcul du discriminant : $\\Delta = (-8)^2 - 4 \\times 2 \\times 6 = 64 - 48 = 16$.',
          '$\\Delta = 16 > 0$ : deux racines distinctes. $\\sqrt{\\Delta} = 4$.',
          '$x_1 = \\dfrac{8 - 4}{4} = 1$ et $x_2 = \\dfrac{8 + 4}{4} = 3$.'
        ],
        answer: 'Les solutions sont $x_1 = 1$ et $x_2 = 3$. Forme factorisée : $2(x - 1)(x - 3)$.'
      },
      formulas: [
        '$\\Delta = b^2-4ac$',
        '$x_{1,2}=\\dfrac{-b\\pm\\sqrt{\\Delta}}{2a}$ si $\\Delta>0$',
        'Forme factorisée : $a(x-x_1)(x-x_2)$ si $\\Delta>0$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Racines et sommet',
        title: 'Repérer les racines et le sommet sur la parabole',
        description: 'La parabole de $g(x) = 2x^2 - 8x + 6$ (l\'exemple du cours), calculée point par point entre $x=-0{,}5$ et $x=4{,}5$, avec ses deux racines $x_1=1$ et $x_2=3$ et son sommet $S(2\\,;\\,-2)$.',
        svg: `
          <svg viewBox="0 0 430 300" role="img" aria-labelledby="second-degre-graph-title second-degre-graph-desc">
            <title id="second-degre-graph-title">Parabole de g(x) = 2x carre - 8x + 6 avec racines et sommet</title>
            <desc id="second-degre-graph-desc">Parabole tracee entre x=-0,5 et x=4,5. Elle coupe l'axe des abscisses en x=1 et x=3, et son sommet, minimum de la parabole, est au point (2 ; -2), a mi-chemin entre les deux racines.</desc>

            <!-- grille verticale -->
            <line class="grid-line" x1="89.5" y1="30" x2="89.5" y2="250"></line>
            <line class="grid-line" x1="158.5" y1="30" x2="158.5" y2="250"></line>
            <line class="grid-line" x1="227.5" y1="30" x2="227.5" y2="250"></line>
            <line class="grid-line" x1="296.5" y1="30" x2="296.5" y2="250"></line>
            <line class="grid-line" x1="365.5" y1="30" x2="365.5" y2="250"></line>

            <!-- axe de symetrie x = 2 -->
            <line class="guide-line" x1="227.5" y1="30" x2="227.5" y2="250"></line>

            <!-- axes -->
            <line class="axis" x1="48" y1="206.8" x2="407" y2="206.8"></line>
            <line class="axis" x1="89.5" y1="23" x2="89.5" y2="257"></line>

            <!-- parabole calculee point par point -->
            <polyline class="curve-main" points="55.0,41.8 66.5,67.1 78.0,90.7 89.5,112.5 101.0,132.6 112.5,150.9 124.0,167.5 135.5,182.3 147.0,195.4 158.5,206.8 170.0,216.4 181.5,224.2 193.0,230.4 204.5,234.7 216.0,237.3 227.5,238.2 239.0,237.3 250.5,234.7 262.0,230.4 273.5,224.2 285.0,216.4 296.5,206.8 308.0,195.4 319.5,182.3 331.0,167.5 342.5,150.9 354.0,132.6 365.5,112.5 377.0,90.7 388.5,67.1 400.0,41.8"></polyline>

            <!-- racines -->
            <circle class="plot-point" cx="158.5" cy="206.8" r="5"></circle>
            <circle class="plot-point" cx="296.5" cy="206.8" r="5"></circle>
            <!-- sommet -->
            <circle class="plot-point-alt" cx="227.5" cy="238.2" r="5"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="227" y="16" text-anchor="middle">g(x) = 2x² − 8x + 6</text>
            <text class="annotation-label" x="158.5" y="194" text-anchor="middle">x₁ = 1</text>
            <text class="annotation-label" x="296.5" y="194" text-anchor="middle">x₂ = 3</text>
            <text class="annotation-label" x="236" y="248" text-anchor="start">S(2 ; -2)</text>
            <text class="label-soft" x="227.5" y="44" text-anchor="middle">axe de symétrie (x = 2)</text>

            <text class="tick-label" x="89.5" y="222" text-anchor="middle">0</text>
            <text class="tick-label" x="158.5" y="222" text-anchor="middle">1</text>
            <text class="tick-label" x="227.5" y="222" text-anchor="middle">2</text>
            <text class="tick-label" x="296.5" y="222" text-anchor="middle">3</text>
            <text class="tick-label" x="365.5" y="222" text-anchor="middle">4</text>
            <text class="tick-label" x="79" y="242" text-anchor="end">-2</text>
            <text class="tick-label" x="79" y="116" text-anchor="end">6</text>
            <text class="tick-label" x="79" y="53" text-anchor="end">10</text>
            <text class="axis-label" x="412" y="211">x</text>
            <text class="axis-label" x="94" y="20">y</text>
          </svg>
        `,
        notes: [
          'Le discriminant vaut $\\Delta = (-8)^2 - 4\\times2\\times6 = 64-48=16$, donc $\\sqrt{\\Delta}=4$ : il y a deux racines distinctes.',
          'Les racines sont $x_1=\\dfrac{8-4}{4}=1$ et $x_2=\\dfrac{8+4}{4}=3$ : ce sont les deux points où la parabole coupe l\'axe des abscisses (points pleins sur le graphique).',
          'Le sommet est en $x_S=-\\dfrac{b}{2a}=\\dfrac{8}{4}=2$, à mi-chemin entre les deux racines (axe de symétrie en tirets). Son ordonnée est $g(2)=8-16+6=-2$.',
          'Comme $a=2>0$, la parabole "sourit" vers le haut : le sommet $S(2\\,;\\,-2)$ est un <strong>minimum</strong>.'
        ],
        reading: 'Repère d\'abord les deux racines (là où la courbe touche l\'axe horizontal), puis le sommet exactement à mi-chemin entre elles : c\'est l\'axe de symétrie de la parabole.',
        caption: 'Parabole de $g(x)=2x^2-8x+6$, exemple du cours, avec racines et sommet vérifiés indépendamment ($\\Delta=16$, $x_1=1$, $x_2=3$, $S(2\\,;\\,-2)$).'
      },

      /* SCHEMAS SECONDAIRES ajoutes le 2026-09-14.
         Un schema par malentendu, jamais un schema par formule :
         1. le discriminant n'est pas une formule a appliquer, c'est la POSITION
            de la parabole par rapport a l'axe ;
         2. « $x^2 = 9$ donne $x = 3$ » : l'oubli de la seconde solution, que le
            cours signale deja comme l'erreur la plus frequente du chapitre ;
         3. le sommet n'est pas un quatrieme nombre a retenir, il est a
            MI-CHEMIN entre les racines.
         Toutes les coordonnees sont calculees par script, jamais posees a
         l'oeil : sommets exacts, racines exactes, et coherence entre le signe
         du discriminant annonce et la position dessinee. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que dit le discriminant',
          title: 'Les trois positions de la parabole selon le signe du discriminant',
          description: 'Le discriminant n\'est pas une formule à appliquer pour elle-même : c\'est un <strong>capteur de position</strong>. Il dit où se trouve la parabole par rapport à l\'axe des abscisses, et donc combien de fois elle le rencontre.<br/><br/>Les trois paraboles ci-dessous ont le <strong>même</strong> coefficient $a = 1$ et le <strong>même</strong> sommet d\'abscisse $3$. Seule leur hauteur change — et c\'est exactement ce que $\\Delta$ mesure.',
          svg: `
            <svg viewBox="0 0 470 300" role="img" aria-labelledby="sd-trois-title sd-trois-desc">
              <title id="sd-trois-title">Trois positions de la parabole selon le signe du discriminant</title>
              <desc id="sd-trois-desc">Trois paraboles tournees vers le haut, placees cote a cote a la meme echelle et partageant la meme ligne horizontale. La premiere descend sous cette ligne et la traverse en deux points : son discriminant vaut 16, il est positif, et il y a deux racines. La deuxieme touche la ligne en un seul point, son sommet : son discriminant est nul et il y a une racine double. La troisieme reste entierement au-dessus de la ligne sans jamais la toucher : son discriminant vaut moins 16, il est negatif, et il n'y a aucune racine reelle.</desc>

              <!-- PANNEAU 1 : Delta = 16 > 0, sommet en (3 ; -4), racines 1 et 5 -->
              <line class="axis" x1="12" y1="150" x2="152" y2="150"></line>
              <polyline class="curve-main" points="15.2,35.4 18.4,52.0 21.5,67.8 24.7,82.8 27.9,97.0 31.1,110.3 34.3,122.9 37.5,134.6 40.6,145.6 43.8,155.7 47.0,165.0 50.2,173.5 53.4,181.2 56.5,188.1 59.7,194.2 62.9,199.4 66.1,203.9 69.3,207.5 72.5,210.4 75.6,212.4 78.8,213.6 82.0,214.0 85.2,213.6 88.4,212.4 91.5,210.4 94.7,207.5 97.9,203.9 101.1,199.4 104.3,194.2 107.5,188.1 110.6,181.2 113.8,173.5 117.0,165.0 120.2,155.7 123.4,145.6 126.5,134.6 129.7,122.9 132.9,110.3 136.1,97.0 139.3,82.8 142.5,67.8 145.6,52.0 148.8,35.4"></polyline>
              <circle class="plot-point" cx="42.0" cy="150.0" r="5"></circle>
              <circle class="plot-point" cx="122.0" cy="150.0" r="5"></circle>
              <circle class="plot-point-alt" cx="82.0" cy="214.0" r="4"></circle>
              <text class="annotation-label" x="82" y="24" text-anchor="middle">delta = 16</text>
              <text class="tick-label" x="82" y="245" text-anchor="middle">deux racines</text>
              <text class="label-soft" x="82" y="266" text-anchor="middle">la parabole traverse</text>

              <!-- PANNEAU 2 : Delta = 0, sommet en (3 ; 0), racine double 3 -->
              <line class="axis" x1="167" y1="150" x2="307" y2="150"></line>
              <polyline class="curve-main" points="182.9,33.0 186.1,46.3 189.3,58.9 192.5,70.6 195.6,81.6 198.8,91.7 202.0,101.0 205.2,109.5 208.4,117.2 211.5,124.1 214.7,130.2 217.9,135.4 221.1,139.9 224.3,143.5 227.5,146.4 230.6,148.4 233.8,149.6 237.0,150.0 240.2,149.6 243.4,148.4 246.5,146.4 249.7,143.5 252.9,139.9 256.1,135.4 259.3,130.2 262.5,124.1 265.6,117.2 268.8,109.5 272.0,101.0 275.2,91.7 278.4,81.6 281.5,70.6 284.7,58.9 287.9,46.3 291.1,33.0"></polyline>
              <circle class="plot-point" cx="237.0" cy="150.0" r="5"></circle>
              <text class="annotation-label" x="237" y="24" text-anchor="middle">delta = 0</text>
              <text class="tick-label" x="237" y="245" text-anchor="middle">une racine double</text>
              <text class="label-soft" x="237" y="266" text-anchor="middle">la parabole effleure</text>

              <!-- PANNEAU 3 : Delta = -16 < 0, sommet en (3 ; 4), aucune racine -->
              <line class="axis" x1="322" y1="150" x2="462" y2="150"></line>
              <polyline class="curve-main" points="353.8,27.7 357.0,37.0 360.2,45.5 363.4,53.2 366.5,60.1 369.7,66.2 372.9,71.4 376.1,75.9 379.3,79.5 382.5,82.4 385.6,84.4 388.8,85.6 392.0,86.0 395.2,85.6 398.4,84.4 401.5,82.4 404.7,79.5 407.9,75.9 411.1,71.4 414.3,66.2 417.5,60.1 420.6,53.2 423.8,45.5 427.0,37.0 430.2,27.7"></polyline>
              <circle class="plot-point-alt" cx="392.0" cy="86.0" r="4"></circle>
              <text class="annotation-label" x="392" y="24" text-anchor="middle">delta = -16</text>
              <text class="tick-label" x="392" y="245" text-anchor="middle">aucune racine reelle</text>
              <text class="label-soft" x="392" y="266" text-anchor="middle">la parabole ne touche pas</text>
            </svg>
          `,
          notes: [
            'Les trois trinômes sont $x^2-6x+5$, $x^2-6x+9$ et $x^2-6x+13$ : même $a=1$, même $b=-6$, seul $c$ change.',
            'Comme $\\Delta = 36 - 4c$, augmenter $c$ <strong>relève</strong> la parabole et fait décroître $\\Delta$ : $\\Delta = 16$, puis $0$, puis $-16$.',
            'Le sommet est chaque fois en $x_S = -\\dfrac{b}{2a} = 3$, et son ordonnée vaut successivement $-4$, $0$ et $+4$ : c\'est elle qui décide de tout.',
            'Le signe de $\\Delta$ et celui de l\'ordonnée du sommet sont donc <strong>opposés</strong> lorsque $a>0$ : une parabole qui plonge sous l\'axe le coupe deux fois, une parabole qui reste au-dessus ne le coupe jamais.'
          ],
          reading: 'Ne regarde pas d\'abord la formule, regarde la ligne horizontale. Pose ton doigt sur le point le plus bas de chaque parabole et demande-toi s\'il est sous la ligne, sur la ligne, ou au-dessus. Ces trois réponses sont exactement les trois signes possibles de $\\Delta$ — et tu viens de lire le discriminant sans rien calculer.',
          caption: 'Trois trinômes de même $a$ et de même sommet d\'abscisse $3$ : $\\Delta = 16$ (sommet en $-4$), $\\Delta = 0$ (sommet sur l\'axe), $\\Delta = -16$ (sommet en $+4$).'
        },
        {
          theme: 'maths',
          kicker: 'La solution qu\'on oublie',
          title: 'Pourquoi $x^2 = 9$ a deux solutions et non une',
          description: 'C\'est l\'erreur que le cours signale comme la plus fréquente du chapitre, et elle ne se corrige pas en répétant la règle : il faut la <strong>voir</strong>.<br/><br/>Résoudre $x^2 = 9$, c\'est chercher les abscisses où la courbe de $y = x^2$ atteint la hauteur $9$. On trace donc cette hauteur, et on compte les rencontres.',
          svg: `
            <svg viewBox="0 0 420 280" role="img" aria-labelledby="sd-deux-title sd-deux-desc">
              <title id="sd-deux-title">La droite de hauteur 9 coupe la parabole en deux points</title>
              <desc id="sd-deux-desc">La courbe de la fonction carre forme une vallee symetrique par rapport a l'axe vertical. Une droite horizontale de hauteur 9 la traverse et la rencontre en deux points, l'un a l'abscisse moins 3, l'autre a l'abscisse 3. Deux traits verticaux descendent de ces deux points jusqu'a l'axe des abscisses, montrant que les deux abscisses sont a la meme distance de zero, l'une a gauche et l'autre a droite.</desc>

              <line class="grid-line" x1="96.0" y1="20" x2="96.0" y2="250"></line>
              <line class="grid-line" x1="324.0" y1="20" x2="324.0" y2="250"></line>
              <line class="grid-line" x1="73.2" y1="150.0" x2="346.8" y2="150.0"></line>

              <line class="axis" x1="73.2" y1="232" x2="346.8" y2="232"></line>
              <line class="axis" x1="210" y1="18.8" x2="210" y2="244.3"></line>

              <polyline class="curve-main" points="89.4,25.6 93.7,40.0 98.0,54.0 102.3,67.4 106.6,80.3 110.9,92.7 115.3,104.6 119.6,115.9 123.9,126.7 128.2,136.9 132.5,146.7 136.8,155.9 141.1,164.6 145.4,172.8 149.7,180.4 154.0,187.5 158.3,194.1 162.6,200.1 166.9,205.7 171.2,210.7 175.5,215.1 179.9,219.1 184.2,222.5 188.5,225.4 192.8,227.8 197.1,229.6 201.4,230.9 205.7,231.7 210.0,232.0 214.3,231.7 218.6,230.9 222.9,229.6 227.2,227.8 231.5,225.4 235.8,222.5 240.1,219.1 244.5,215.1 248.8,210.7 253.1,205.7 257.4,200.1 261.7,194.1 266.0,187.5 270.3,180.4 274.6,172.8 278.9,164.6 283.2,155.9 287.5,146.7 291.8,136.9 296.1,126.7 300.4,115.9 304.7,104.6 309.1,92.7 313.4,80.3 317.7,67.4 322.0,54.0 326.3,40.0 330.6,25.6"></polyline>

              <line class="focus-line" x1="77.0" y1="47.5" x2="343.0" y2="47.5"></line>

              <line class="guide-line" x1="96.0" y1="47.5" x2="96.0" y2="232.0"></line>
              <line class="guide-line" x1="324.0" y1="47.5" x2="324.0" y2="232.0"></line>

              <circle class="plot-point" cx="96.0" cy="47.5" r="5"></circle>
              <circle class="plot-point" cx="324.0" cy="47.5" r="5"></circle>

              <text class="annotation-label" x="210" y="40" text-anchor="middle">hauteur 9</text>
              <text class="annotation-label" x="96" y="252" text-anchor="middle">x = -3</text>
              <text class="annotation-label" x="324" y="252" text-anchor="middle">x = 3</text>
              <text class="tick-label" x="134.0" y="246" text-anchor="middle">-2</text>
              <text class="tick-label" x="172.0" y="246" text-anchor="middle">-1</text>
              <text class="tick-label" x="248.0" y="246" text-anchor="middle">1</text>
              <text class="tick-label" x="286.0" y="246" text-anchor="middle">2</text>
              <text class="tick-label" x="202" y="154" text-anchor="end">4</text>
              <text class="tick-label" x="202" y="51" text-anchor="end">9</text>
              <text class="label-soft" x="210" y="272" text-anchor="middle">deux abscisses, une seule hauteur</text>
            </svg>
          `,
          notes: [
            'La courbe tracée est celle de $y = x^2$, et la droite horizontale est celle de $y = 9$.',
            'Elles se rencontrent en <strong>deux</strong> points, $(-3\\,;\\,9)$ et $(3\\,;\\,9)$ : il y a donc deux valeurs de $x$ dont le carré vaut $9$.',
            'Le calcul le confirme des deux côtés : $3^2 = 9$ et $(-3)^2 = 9$, car le carré d\'un nombre négatif est positif.',
            'La touche « racine carrée » de la calculatrice ne rend qu\'une seule de ces deux valeurs, la positive. C\'est elle, et non la parabole, qui fait oublier l\'autre.',
            'On retrouve ici, sous une autre forme, le schéma des trois positions : la droite $y=9$ joue le rôle de l\'axe, et elle est franchement traversée — donc deux solutions.'
          ],
          reading: 'Pose ton doigt sur la droite horizontale et fais-le glisser de la gauche vers la droite. Tu croises la courbe une première fois, puis une seconde. Chacune de ces deux rencontres est une solution, et il n\'y a aucune raison de n\'en retenir qu\'une : la parabole est symétrique, donc elle atteint chaque hauteur exactement deux fois.',
          caption: 'La droite $y=9$ coupe la parabole $y=x^2$ en $x=-3$ et en $x=3$ : l\'équation $x^2=9$ a bien deux solutions.'
        },
        {
          theme: 'maths',
          kicker: 'Où se cache le sommet',
          title: 'Le sommet est toujours à mi-chemin entre les racines',
          description: 'Le sommet n\'est pas un quatrième nombre à mémoriser à côté de $\\Delta$, $x_1$ et $x_2$ : il se <strong>déduit</strong> des deux racines, parce que la parabole est symétrique.<br/><br/>Sur $f(x) = x^2 - 8x + 12$, les racines sont $2$ et $6$, et le sommet tombe exactement entre les deux.',
          svg: `
            <svg viewBox="0 0 430 280" role="img" aria-labelledby="sd-sommet-title sd-sommet-desc">
              <title id="sd-sommet-title">Le sommet de la parabole a mi-chemin entre ses deux racines</title>
              <desc id="sd-sommet-desc">Une parabole tournee vers le haut coupe l'axe horizontal en deux points, aux abscisses 2 et 6. Un trait vertical en tirets descend depuis l'axe jusqu'au point le plus bas de la courbe, situe a l'abscisse 4. Deux fleches horizontales, de meme longueur, relient chacune une racine a ce trait vertical : la distance de la racine 2 au trait vaut 2, et la distance du trait a la racine 6 vaut aussi 2. Le sommet se trouve donc exactement au milieu des deux racines.</desc>

              <line class="grid-line" x1="156.0" y1="18" x2="156.0" y2="246"></line>
              <line class="grid-line" x1="348.0" y1="18" x2="348.0" y2="246"></line>

              <line class="axis" x1="36.0" y1="150" x2="424.0" y2="150"></line>
              <line class="axis" x1="60.0" y1="14" x2="60.0" y2="238.4"></line>

              <polyline class="curve-main" points="86.1,14.8 93.6,32.9 101.1,50.1 108.7,66.5 116.2,82.0 123.8,96.7 131.3,110.5 138.9,123.5 146.4,135.7 153.9,147.1 161.5,157.5 169.0,167.2 176.6,176.0 184.1,184.0 191.7,191.1 199.2,197.4 206.7,202.9 214.3,207.5 221.8,211.3 229.4,214.2 236.9,216.3 244.5,217.6 252.0,218.0 259.5,217.6 267.1,216.3 274.6,214.2 282.2,211.3 289.7,207.5 297.3,202.9 304.8,197.4 312.3,191.1 319.9,184.0 327.4,176.0 335.0,167.2 342.5,157.5 350.1,147.1 357.6,135.7 365.1,123.5 372.7,110.5 380.2,96.7 387.8,82.0 395.3,66.5 402.9,50.1 410.4,32.9 417.9,14.8"></polyline>

              <line class="guide-line" x1="252.0" y1="18" x2="252.0" y2="246"></line>

              <line class="focus-line" x1="156.0" y1="150.0" x2="252.0" y2="150.0"></line>
              <line class="focus-line" x1="252.0" y1="150.0" x2="348.0" y2="150.0"></line>

              <circle class="plot-point" cx="156.0" cy="150.0" r="5"></circle>
              <circle class="plot-point" cx="348.0" cy="150.0" r="5"></circle>
              <circle class="plot-point-alt" cx="252.0" cy="218.0" r="5"></circle>

              <text class="annotation-label" x="156" y="140" text-anchor="middle">racine 2</text>
              <text class="annotation-label" x="348" y="140" text-anchor="middle">racine 6</text>
              <text class="annotation-label" x="262" y="234" text-anchor="start">sommet en 4</text>
              <text class="tick-label" x="204" y="168" text-anchor="middle">2</text>
              <text class="tick-label" x="300" y="168" text-anchor="middle">2</text>
              <text class="tick-label" x="252" y="14" text-anchor="middle">axe de symetrie</text>
              <text class="tick-label" x="52" y="222" text-anchor="end">-4</text>
              <text class="tick-label" x="52" y="86" text-anchor="end">4</text>
              <text class="label-soft" x="228" y="270" text-anchor="middle">memes ecarts de part et d autre</text>
            </svg>
          `,
          notes: [
            'La fonction est $f(x) = x^2 - 8x + 12$, de discriminant $\\Delta = 64 - 48 = 16$ et de racines $x_1 = 2$ et $x_2 = 6$.',
            'La moyenne des racines vaut $\\dfrac{2+6}{2} = 4$, et la formule donne $x_S = -\\dfrac{b}{2a} = \\dfrac{8}{2} = 4$ : les deux chemins mènent au même nombre.',
            'Les deux écarts marqués sur la figure valent exactement $2$ chacun : c\'est ce que signifie « à mi-chemin ».',
            'L\'ordonnée du sommet se calcule ensuite en une ligne : $f(4) = 16 - 32 + 12 = -4$.',
            'Cette symétrie sert aussi de <strong>vérification</strong> : si le sommet trouvé ne tombe pas entre les deux racines, c\'est qu\'une des trois valeurs est à revoir.'
          ],
          reading: 'Repère les deux points où la courbe touche la ligne horizontale, puis place ton doigt exactement au milieu de ces deux points. Descends tout droit : tu tombes sur le point le plus bas de la parabole. Ce n\'est pas une coïncidence de cet exemple — la parabole est symétrique par rapport à cette verticale, donc c\'est toujours vrai.',
          caption: 'Sur $f(x)=x^2-8x+12$, les racines $2$ et $6$ encadrent le sommet d\'abscisse $4$, à distance $2$ de chacune.'
        }
      ],

      recap: [
        'Toujours calculer $\\Delta = b^2 - 4ac$ <strong>en premier</strong> : c\'est lui qui dicte le nombre de solutions.',
        '$\\Delta > 0$ : deux racines ; $\\Delta = 0$ : racine double ; $\\Delta < 0$ : aucune racine réelle.',
        'Le sommet de la parabole est en $x_S = -b/(2a)$ : c\'est l\'abscisse de l\'extremum.',
        'Si $a > 0$ : parabole "souriante" (minimum). Si $a < 0$ : parabole "triste" (maximum).'
      ],
      piege: 'Attention au <strong>signe de $a$</strong> : si $a<0$ le coefficient de $x^2$ est négatif, ne pas oublier de l\'inclure dans $\\Delta$.<br/><br/>Autre piège classique : résoudre $x^2 = k$ et ne donner qu\'une seule solution. Il y en a toujours <strong>deux</strong> si $k > 0$ : $x = \\sqrt{k}$ et $x = -\\sqrt{k}$.'
    },
    quiz: [
      { q: 'Résoudre $x^2 = 9$. Laquelle de ces affirmations est CORRECTE ?', options: ['La seule solution est $x = 3$ car $\\sqrt{9} = 3$', 'Les solutions sont $x = 3$ et $x = -3$ car $(\\pm 3)^2 = 9$', 'La seule solution est $x = -3$ car le discriminant donne une solution négative', 'Il n\'y a pas de solution car $b = c = 0$'], answer: 1, correction: '$x^2 = 9$ revient à $x^2 - 9 = 0$, soit $(x-3)(x+3) = 0$.<br/><br/>Il y a bien <strong>deux solutions</strong> : $x = 3$ et $x = -3$. L\'erreur classique est d\'écrire uniquement $x = \\sqrt{9} = 3$ car on oublie que $(-3)^2 = 9$ également.<br/><br/>Retiens : toujours vérifier les deux signes !' },
      { q: 'Si $\\Delta=0$, l\'équation $ax^2+bx+c=0$ a :', options: ['Deux solutions distinctes', 'Pas de solution', 'Une solution double', 'Une infinité de solutions'], answer: 2, correction: 'Quand le discriminant est nul ($\\Delta = 0$), la parabole est tangente à l\'axe des abscisses.<br/><br/>Il y a une <strong>solution double</strong> : $x_0 = -b/(2a)$.' },
      { q: 'Les solutions de $x^2-5x+6=0$ sont :', options: ['$x=1$ et $x=6$', '$x=2$ et $x=3$', '$x=-2$ et $x=-3$', '$x=5$ et $x=1$'], answer: 1, correction: 'On identifie $a = 1$, $b = -5$, $c = 6$. Le discriminant vaut $\\Delta = 25 - 24 = 1 > 0$.<br/><br/>Les deux racines sont $x_1 = \\frac{5-1}{2} = 2$ et $x_2 = \\frac{5+1}{2} = 3$.' },
      { q: 'Le sommet de la parabole $f(x) = -2x^2 + 8x - 3$ est en :', options: ['$(2\\,;\\,5)$', '$(4\\,;\\,-3)$', '$(-2\\,;\\,-27)$', '$(2\\,;\\,-3)$'], answer: 0, correction: 'L\'abscisse du sommet est $x_S = -\\dfrac{b}{2a} = -\\dfrac{8}{2 \\times (-2)} = -\\dfrac{8}{-4} = 2$.<br/><br/>L\'ordonnée du sommet est $f(2) = -2 \\times 4 + 8 \\times 2 - 3 = -8 + 16 - 3 = 5$.<br/><br/>Le sommet est donc $(2\\,;\\,5)$. Comme $a = -2 < 0$, c\'est un <strong>maximum</strong>.' },
      { q: 'L\'équation $3x^2 + 2x + 1 = 0$ a pour discriminant :', options: ['$\\Delta = 16$', '$\\Delta = -8$', '$\\Delta = 8$', '$\\Delta = -16$'], answer: 1, correction: 'On calcule le discriminant : $\\Delta = 2^2 - 4 \\times 3 \\times 1 = 4 - 12 = -8$.<br/><br/>Comme $\\Delta < 0$, l\'équation n\'a <strong>aucune solution réelle</strong>. La parabole ne coupe jamais l\'axe des abscisses.' }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE le 2026-09-14.
         Avant : une seule tâche (résoudre une équation dont les deux racines
         sont entières), tirée dix-huit fois. Le chapitre imprimait donc dix-huit
         fois la même question sous trois habillages.

         Sept tâches désormais, choisies pour couvrir ce que le chapitre demande
         réellement : le discriminant seul, le comptage de solutions à partir de
         son signe, la résolution, la factorisation, le sommet, la forme
         canonique lue comme un extremum, et l'équation-bilan d'un problème
         concret. La variété des décors se fait toujours par pick(), mais elle
         ne remplace plus la variété des questions. */
      generate() {
        const tache = pick(['delta', 'nombre', 'racines', 'factorisee', 'sommet', 'extremum', 'hauteur']);

        if (tache === 'delta') {
          /* Le discriminant seul, sans résolution. C'est le tout premier geste
             du chapitre, et celui sur lequel la double erreur de signe se joue :
             $b$ négatif au carré, et $-4ac$ avec $c$ négatif. On tire donc $b$
             négatif et $c$ de signe variable pour que les deux pièges tombent. */
          const a = rand(1, 4), b = rand(-9, -2), c = pick([-1, -2, -3, 2, 3, 4, 5]);
          const delta = b * b - 4 * a * c;
          return {
            statement: `Soit le trinôme $f(x) = ${a === 1 ? '' : a}x^2 ${b}x ${c >= 0 ? '+ ' + c : '- ' + (-c)}$.<br/><br/>Calculer son discriminant $\\Delta = b^2 - 4ac$.<br/><br/>Donner la valeur de $\\Delta$.`,
            answer: delta, tolerance: 0, unit: '',
            hint: `Identifie $a = ${a}$, $b = ${b}$ et $c = ${c}$. Attention : $b$ est négatif, donc $b^2$ est positif.`,
            solution: [
              `On identifie les trois coefficients : $a = ${a}$, $b = ${b}$ et $c = ${c}$.`,
              `On applique la formule : $\\Delta = (${b})^2 - 4 \\times ${a} \\times (${c}) = ${b * b} ${-4 * a * c >= 0 ? '+ ' + (-4 * a * c) : '- ' + (4 * a * c)} = ${delta}$.`,
              `Le discriminant vaut donc $\\Delta = ${delta}$.`
            ]
          };
        }

        if (tache === 'nombre') {
          /* Compter les solutions SANS les calculer : c'est exactement ce que le
             discriminant sert à faire, et c'est la tâche qui manquait le plus.
             On tire les trois cas ($\Delta$ positif, nul, négatif) par
             construction, jamais au hasard. */
          const cas = pick(['deux', 'double', 'aucune']);
          const a = rand(1, 3);
          let b, c, delta, nb;
          if (cas === 'double') {
            const s = rand(1, 4);            // racine double s  =>  a(x-s)^2
            b = -2 * a * s; c = a * s * s; nb = 1;
          } else if (cas === 'deux') {
            const r1 = rand(1, 3), r2 = r1 + rand(1, 4);
            b = -a * (r1 + r2); c = a * r1 * r2; nb = 2;
          } else {
            const s = rand(1, 4);
            b = -2 * a * s; c = a * s * s + rand(1, 5); nb = 0;   // sommet au-dessus de l'axe
          }
          delta = b * b - 4 * a * c;
          return {
            statement: `On considère l'équation $${a === 1 ? '' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + (-b)}x ${c >= 0 ? '+ ' + c : '- ' + (-c)} = 0$.<br/><br/>Sans calculer les solutions, déterminer <strong>combien</strong> de solutions réelles cette équation admet.<br/><br/>Donner ce nombre ($0$, $1$ ou $2$).`,
            answer: nb, tolerance: 0, unit: '',
            hint: `Le signe de $\\Delta$ suffit : $\\Delta > 0$ donne deux solutions, $\\Delta = 0$ une seule, $\\Delta < 0$ aucune.`,
            solution: [
              `On calcule le discriminant : $\\Delta = (${b})^2 - 4 \\times ${a} \\times (${c}) = ${delta}$.`,
              `${delta > 0 ? 'Comme $\\Delta > 0$, la parabole coupe l\'axe des abscisses en deux points : il y a <strong>deux</strong> solutions réelles distinctes.' : delta === 0 ? 'Comme $\\Delta = 0$, la parabole touche l\'axe des abscisses en un seul point : il y a <strong>une</strong> solution double.' : 'Comme $\\Delta < 0$, la parabole ne rencontre jamais l\'axe des abscisses : il n\'y a <strong>aucune</strong> solution réelle.'}`,
              `Le nombre de solutions réelles est donc $${nb}$.`
            ]
          };
        }

        if (tache === 'racines') {
          const r1 = rand(1, 5), r2 = rand(r1 + 1, r1 + 5);
          const a = pick([1, 2]);
          const bCoef = -a * (r1 + r2), cCoef = a * r1 * r2;
          const delta = bCoef * bCoef - 4 * a * cCoef;
          const sqrtDelta = Math.sqrt(delta);
          const ctx = pick([
            { intro: 'La trajectoire d\'un ballon est modélisée par $h(x) = ', question: 'Déterminer les distances $x$ auxquelles le ballon touche le sol ($h = 0$).' },
            { intro: 'Le bénéfice d\'une start-up (en k€) est donné par $B(x) = ', question: 'Pour quelles valeurs de $x$ le bénéfice est-il nul ?' },
            { intro: 'Soit l\'équation $', question: 'Résoudre cette équation.' }
          ]);
          return {
            statement: `${ctx.intro}${a === 1 ? '' : a}x^2 ${bCoef >= 0 ? '+' + bCoef : bCoef}x ${cCoef >= 0 ? '+' + cCoef : cCoef}${ctx.intro.includes('équation') ? ' = 0$.' : '$.'}<br/><br/>${ctx.question}<br/>1) Calculer $\\Delta$.<br/>2) En déduire les solutions.<br/><br/>Donner la <strong>plus grande</strong> racine.`,
            answer: r2,
            tolerance: 0.01,
            unit: '',
            hint: `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef}$. Puis $x = \\dfrac{-b \\pm \\sqrt{\\Delta}}{2a}$.`,
            solution: [
              `$\\Delta = (${bCoef})^2 - 4 \\times ${a} \\times ${cCoef} = ${bCoef * bCoef} - ${4 * a * cCoef} = ${delta}$.`,
              `$\\sqrt{\\Delta} = ${sqrtDelta}$. $x_1 = \\dfrac{${-bCoef} - ${sqrtDelta}}{${2 * a}} = ${r1}$ et $x_2 = \\dfrac{${-bCoef} + ${sqrtDelta}}{${2 * a}} = ${r2}$.`,
              `La plus grande racine est $x_2 = ${r2}$.`
            ]
          };
        }

        if (tache === 'factorisee') {
          /* La forme factorisée $a(x-x_1)(x-x_2)$, annoncée dans le cours et dans
             l'évaluation mais jamais travaillée dans la banque d'origine. On
             demande le PRODUIT des racines pour garder une réponse numérique
             unique tout en obligeant à trouver les deux. */
          const r1 = rand(2, 6), r2 = rand(1, r1 - 1);
          const a = pick([1, 2, 3]);
          const b = -a * (r1 + r2), c = a * r1 * r2;
          return {
            statement: `Soit $f(x) = ${a === 1 ? '' : a}x^2 ${b}x + ${c}$.<br/><br/>Factoriser $f$ sous la forme $${a === 1 ? '' : a}(x - x_1)(x - x_2)$.<br/><br/>Donner le <strong>produit</strong> $x_1 \\times x_2$ des deux racines.`,
            answer: r1 * r2, tolerance: 0, unit: '',
            hint: `Trouve d'abord les deux racines avec le discriminant. La forme factorisée s'écrit ensuite directement, et le produit des racines vaut $\\dfrac{c}{a}$.`,
            solution: [
              `Le discriminant vaut $\\Delta = (${b})^2 - 4 \\times ${a} \\times ${c} = ${b * b - 4 * a * c}$, donc $\\sqrt{\\Delta} = ${Math.sqrt(b * b - 4 * a * c)}$.`,
              `Les racines sont $x_1 = ${r2}$ et $x_2 = ${r1}$, et la forme factorisée s'écrit $f(x) = ${a === 1 ? '' : a}(x - ${r2})(x - ${r1})$.`,
              `Leur produit vaut $${r2} \\times ${r1} = ${r1 * r2}$, ce qui redonne bien $\\dfrac{c}{a} = \\dfrac{${c}}{${a}} = ${r1 * r2}$.`
            ]
          };
        }

        if (tache === 'sommet') {
          /* L'abscisse du sommet, lue comme un optimum concret. On évite $a = 1$
             pour que la division de $-b/(2a)$ soit un vrai calcul, et on choisit
             $b$ multiple de $2a$ pour que le résultat tombe entier. */
          const a = pick([-3, -2, 2, 3]);
          const xs = rand(1, 5);
          /* c ne doit jamais valoir 0 : le gabarit imprimerait « + 0 » en bout
             d'expression. Defaut repere le 2026-09-14 en relisant le tirage
             reel du livre, pas en relisant le code. */
          const c = pick([-4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8]);
          const b = -2 * a * xs;
          const ctx = pick([
            { intro: 'Le bénéfice (en milliers d\'euros) d\'un atelier qui produit $x$ centaines de pièces est', v: 'B', q: 'la production qui rend le bénéfice extrémal' },
            { intro: 'La hauteur (en mètres) d\'un jet d\'eau à la distance $x$ du bassin est', v: 'h', q: 'la distance où la hauteur est extrémale' },
            { intro: 'La consommation (en litres) d\'un moteur tournant à $x$ milliers de tours est', v: 'C', q: 'le régime où la consommation est extrémale' }
          ]);
          return {
            statement: `${ctx.intro} $${ctx.v}(x) = ${a}x^2 ${b >= 0 ? '+ ' + b : '- ' + (-b)}x ${c >= 0 ? '+ ' + c : '- ' + (-c)}$.<br/><br/>Déterminer ${ctx.q}, c'est-à-dire l'abscisse du sommet de la parabole.<br/><br/>Donner la valeur de $x_S$.`,
            answer: xs, tolerance: 0.001, unit: '',
            hint: `L'abscisse du sommet se lit directement sur les coefficients : $x_S = -\\dfrac{b}{2a}$, avec $a = ${a}$ et $b = ${b}$.`,
            solution: [
              `On identifie $a = ${a}$ et $b = ${b}$, puis on applique la formule du sommet : $x_S = -\\dfrac{b}{2a}$.`,
              // Le coefficient a est parenthésé quand il est négatif : sinon le
              // corrigé imprimait « $2 \times -2$ », deux signes à la suite
              // (2026-09-14, contrôle de la banque).
              `$x_S = -\\dfrac{${b}}{2 \\times ${a < 0 ? '(' + a + ')' : a}} = -\\dfrac{${b}}{${2 * a}} = ${xs}$.`,
              `Comme $a = ${a} ${a > 0 ? '> 0$, la parabole est tournée vers le haut : ce sommet est un <strong>minimum</strong>' : '< 0$, la parabole est tournée vers le bas : ce sommet est un <strong>maximum</strong>'}.`
            ]
          };
        }

        if (tache === 'extremum') {
          /* La VALEUR de l'extremum, pas seulement son abscisse. C'est l'étape
             que les élèves sautent : ils trouvent $x_S$ et rendent ce nombre
             comme s'il était le maximum cherché. La question porte donc
             explicitement sur $f(x_S)$. */
          const a = pick([-2, -1, 2]);
          const xs = rand(1, 4);
          const b = -2 * a * xs, c = rand(2, 9);
          const ys = a * xs * xs + b * xs + c;
          return {
            statement: `Soit $f(x) = ${a === 1 ? '' : a === -1 ? '-' : a}x^2 ${b >= 0 ? '+ ' + b : '- ' + (-b)}x + ${c}$.<br/><br/>On sait que le sommet de la parabole a pour abscisse $x_S = ${xs}$.<br/><br/>Calculer la <strong>valeur</strong> de l'extremum, c'est-à-dire $f(x_S)$.`,
            answer: ys, tolerance: 0.001, unit: '',
            hint: `L'abscisse du sommet est donnée : il ne reste qu'à calculer son image en remplaçant $x$ par $${xs}$ dans $f(x)$.`,
            solution: [
              `L'abscisse du sommet vaut $x_S = ${xs}$ ; l'extremum cherché est son <strong>image</strong>, donc $f(${xs})$.`,
              `$f(${xs}) = ${a === 1 ? '' : a === -1 ? '-' : a} \\times ${xs}^2 ${b >= 0 ? '+ ' + b : '- ' + (-b)} \\times ${xs} + ${c} = ${a * xs * xs} ${b * xs >= 0 ? '+ ' + (b * xs) : '- ' + (-b * xs)} + ${c} = ${ys}$.`,
              `Comme $a ${a > 0 ? '> 0$, il s\'agit du <strong>minimum</strong> de la fonction' : '< 0$, il s\'agit du <strong>maximum</strong> de la fonction'}, atteint en $x = ${xs}$.`
            ]
          };
        }

        // tache === 'hauteur' : une équation du second degré qui n'est pas déjà
        // écrite sous la forme « = 0 ». L'élève doit d'abord tout ramener d'un
        // même côté — étape que la banque d'origine faisait à sa place.
        /* CALCUL VERIFIE (2026-09-14). L'équation à résoudre est
           $-5t^2 + v_0 t + (h_0 - H) = 0$, et pour qu'elle ait exactement $t_1$
           et $t_2$ pour racines il faut $-5(t-t_1)(t-t_2)$, donc
           $v_0 = 5(t_1+t_2)$ ET $h_0 - H = -5t_1t_2$. Une première écriture
           posait $h_0 = H + 5t_1t_2$, de signe inverse : les racines annoncées
           n'étaient alors pas celles de l'équation. Le script de contrôle l'a
           attrapé, la relecture ne l'aurait pas vu. */
        const g = 5;                          // -5t^2 : modèle de chute libre usuel
        const t1 = rand(1, 3), t2 = t1 + rand(1, 3);
        const v0 = g * (t1 + t2);
        const h0 = rand(1, 6);                // hauteur de lancer, au-dessus du sol
        const H = h0 + g * t1 * t2;           // hauteur atteinte, franchie deux fois
        return {
          statement: `Une balle est lancée vers le haut. Sa hauteur, en mètres, à l'instant $t$ (en secondes) est $h(t) = -${g}t^2 + ${v0}t + ${h0}$.<br/><br/>Déterminer les instants où la balle se trouve à $${H}$ m de hauteur.<br/><br/>Donner le <strong>plus grand</strong> de ces deux instants, en secondes.`,
          answer: t2, tolerance: 0.001, unit: 's',
          hint: `Écris d'abord l'équation $h(t) = ${H}$, puis ramène tout du même côté pour obtenir une équation de la forme $at^2 + bt + c = 0$.`,
          solution: [
            `L'énoncé demande de résoudre $-${g}t^2 + ${v0}t + ${h0} = ${H}$ ; on ramène tout du même côté : $-${g}t^2 + ${v0}t - ${H - h0} = 0$.`,
            `Le discriminant vaut $\\Delta = ${v0}^2 - 4 \\times (-${g}) \\times (-${H - h0}) = ${v0 * v0} - ${4 * g * (H - h0)} = ${v0 * v0 - 4 * g * (H - h0)}$, donc $\\sqrt{\\Delta} = ${Math.sqrt(v0 * v0 - 4 * g * (H - h0))}$.`,
            `Les deux instants sont $t_1 = ${t1}$ s et $t_2 = ${t2}$ s : la balle passe à $${H}$ m une fois en montant, une fois en redescendant. Le plus grand est $t_2 = ${t2}$ s.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une balle est lancée verticalement. Sa hauteur (en m) est $h(t)=-5t^2+20t+1$ où $t$ est en secondes.',
      tasks: [
        'À quel instant la balle est-elle à $h=16$ m ?',
        'Calculer le discriminant et résoudre.',
        'Quand la balle touche-t-elle le sol ($h=0$) ?'
      ],
      solutions: [
        '$-5t^2+20t+1=16 \\Rightarrow -5t^2+20t-15=0 \\Rightarrow t^2-4t+3=0$.',
        '$\\Delta=16-12=4$. $t_1=\\frac{4-2}{2}=1$ s et $t_2=\\frac{4+2}{2}=3$ s.',
        '$-5t^2+20t+1=0$ ; $\\Delta=400+20=420$ ; on garde la racine positive $t=\\frac{-20-\\sqrt{420}}{-10}\\approx 4{,}05$ s (l\'autre racine, $t=\\frac{-20+\\sqrt{420}}{-10}\\approx -0{,}05$ s, est négative et donc physiquement impossible).'
      ],
      finalAnswer: 'La balle est à $16$ m en $t=1$ s et $t=3$ s. Elle touche le sol vers $t\\approx 4{,}05$ s.'
    },

    evaluation: {
      title: 'Évaluation — Second degré',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le discriminant de $2x^2 - 7x + 3 = 0$.',
          type: 'numeric',
          answer: 25,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On identifie $a = 2$, $b = -7$, $c = 3$ et on applique la formule du discriminant.<br/><br/>$\\Delta = b^2 - 4ac = (-7)^2 - 4 \\times 2 \\times 3 = 49 - 24 = 25$.'
        },
        {
          statement: 'Résoudre $2x^2 - 7x + 3 = 0$. Donner la plus grande racine.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On a trouvé $\\Delta = 25$, donc $\\sqrt{\\Delta} = 5$.<br/><br/>Les racines sont $x_1 = \\dfrac{7 - 5}{4} = \\dfrac{1}{2}$ et $x_2 = \\dfrac{7 + 5}{4} = 3$.<br/><br/>La plus grande racine est $x_2 = 3$.'
        },
        {
          statement: 'L\'équation $x^2 + 2x + 5 = 0$ admet :',
          type: 'multiple-choice',
          options: ['Deux solutions réelles distinctes', 'Une solution double', 'Aucune solution réelle', 'Une infinité de solutions'],
          answer: 2,
          points: 2,
          correction: 'On calcule $\\Delta = b^2 - 4ac = 4 - 20 = -16$.<br/><br/>Le discriminant est strictement négatif ($\\Delta < 0$), donc l\'équation n\'admet <strong>aucune solution réelle</strong>. La parabole ne coupe pas l\'axe des abscisses.'
        },
        {
          statement: 'La forme factorisée de $x^2 - 6x + 8$ est :',
          type: 'multiple-choice',
          options: ['$(x - 2)(x + 4)$', '$(x - 2)(x - 4)$', '$(x + 2)(x - 4)$', '$(x - 1)(x - 8)$'],
          answer: 1,
          points: 2,
          correction: 'On calcule $\\Delta = 36 - 32 = 4 > 0$, donc $\\sqrt{\\Delta} = 2$.<br/><br/>Les racines sont $x_1 = \\dfrac{6 - 2}{2} = 2$ et $x_2 = \\dfrac{6 + 2}{2} = 4$.<br/><br/>La forme factorisée s\'écrit $a(x - x_1)(x - x_2) = (x - 2)(x - 4)$ (ici $a = 1$).'
        },
        {
          /* QUESTION 5 RÉÉCRITE le 2026-09-14. Elle demandait l'abscisse d'un
             sommet par la formule, soit une troisième application de formule
             après les questions 1 et 2 : ce devoir comptait trois « calculer »
             sur cinq, et sur les cinquante questions du niveau « calculer »
             atteignait 50 %, très au-delà du plafond de 35 % du cahier des
             charges.

             La nouvelle question demande de MODÉLISER : traduire une situation
             concrète en équation du second degré, puis interpréter les deux
             racines — ce qui est un attendu explicite du programme, et que ce
             devoir n'évaluait nulle part. L'étiquette suit l'énoncé. */
          statement: 'On dispose de $28$ mètres de grillage pour clôturer un enclos rectangulaire d\'aire $48\\ \\text{m}^2$.<br/><br/>En notant $x$ la longueur d\'un côté, l\'équation à résoudre est $x^2 - 14x + 48 = 0$.<br/><br/>Quelles sont les dimensions possibles de l\'enclos ?',
          type: 'multiple-choice',
          options: [
            '$6$ m sur $8$ m — les deux racines sont les deux dimensions du même rectangle',
            '$6$ m sur $6$ m, ou bien $8$ m sur $8$ m : il y a deux enclos possibles',
            '$14$ m sur $48$ m, en lisant directement les coefficients',
            'Aucune solution : une aire ne peut pas donner une équation du second degré'
          ],
          answer: 0,
          points: 2,
          correction: 'Le périmètre $2(x + y) = 28$ donne $y = 14 - x$, et l\'aire $xy = 48$ conduit à $x(14 - x) = 48$, soit $x^2 - 14x + 48 = 0$.<br/><br/>Le discriminant vaut $\\Delta = 196 - 192 = 4$, donc $\\sqrt{\\Delta} = 2$ et les racines sont $x_1 = \\dfrac{14 - 2}{2} = 6$ et $x_2 = \\dfrac{14 + 2}{2} = 8$.<br/><br/>C\'est ici qu\'il faut <strong>interpréter</strong> plutôt que recopier : les deux racines ne décrivent pas deux enclos différents. Elles sont la longueur et la largeur du <strong>même</strong> rectangle, puisque $x = 6$ donne $y = 8$ et $x = 8$ donne $y = 6$.<br/><br/>Vérification : le périmètre vaut $2 \\times (6 + 8) = 28$ m et l\'aire $6 \\times 8 = 48\\ \\text{m}^2$. Les deux conditions sont satisfaites.'
        }
      ]
    }
  });
