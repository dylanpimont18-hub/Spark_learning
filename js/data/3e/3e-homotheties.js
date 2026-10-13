/* =========================================================
   Spark Learning – data/3e/3e-homotheties.js
   Module : Homothéties (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-homotheties',
    level: 1, subject: 'maths',
    icon: '🔍',
    title: 'Homothéties',
    subtitle: 'Centre, rapport, image d\'une figure',
    keywords: ['Homothétie', 'Rapport', 'Centre', 'Agrandissement', 'Réduction', 'Similitude'],
    physics: false,
    cours: {
      /* « Découvrir » réécrit le 2026-09-13.

         L'ancienne version ouvrait sur « L'homothétie est la transformation
         géométrique qui... », c'est-à-dire sur une définition. Le test du
         cahier des charges (section 10) est sans appel : si on peut répondre à
         la question d'ouverture sans la notion du chapitre, la question est
         mal choisie — et une définition ne pose même pas de question.

         La nouvelle ouverture part d'une DIFFICULTÉ RÉELLE, et non d'une
         anecdote plaquée : un agrandissement double les longueurs mais
         quadruple la surface à peindre. C'est un fait que l'élève trouve faux
         tant qu'il ne l'a pas compté, et rien d'autre que le chapitre ne le
         lui explique. Le comptage est fait devant lui, cases à l'appui : il
         n'a pas à croire le résultat, il le voit. Ce déséquilibre entre
         longueurs et aires est exactement ce que l'homothétie met en forme,
         et c'est aussi la source d'erreur numéro deux de la fiche
         professeur. */
      intro: 'Tu veux repeindre une affiche carrée de $1$ mètre de côté, puis la même affiche <strong>deux fois plus grande</strong>, soit $2$ mètres de côté. Tu as acheté un pot de peinture qui a exactement couvert la petite. Combien de pots faut-il pour la grande ?<br/><br/>' +
        'La réponse spontanée est « deux pots », puisque tout est deux fois plus grand. Compte les cases : la grande affiche se pave <strong>exactement</strong> par quatre petites affiches, deux en largeur et deux en hauteur. Il en faut donc <strong>quatre</strong> pots.<br/><br/>' +
        'Voilà ce que ce chapitre met en forme : quand une figure est agrandie, les <strong>longueurs</strong> sont multipliées par le rapport, mais les <strong>aires</strong> sont multipliées par son <strong>carré</strong>. Doubler les côtés quadruple la surface ; les tripler la multiplie par neuf.<br/><br/>' +
        'La transformation qui réalise cet agrandissement porte un nom : l\'<strong>homothétie</strong>. Elle est définie par un <strong>centre $O$</strong>, qui est le seul point à ne pas bouger, et un <strong>rapport $k$</strong>, qui dit de combien chaque point s\'éloigne du centre.<br/><br/>' +
        'Elle <strong>conserve les angles</strong> et multiplie toutes les longueurs par $|k|$ : la figure garde donc exactement sa forme, seule sa taille change.<br/><br/>' +
        'Le signe de $k$ raconte autre chose. Si $k > 0$, l\'image reste du même côté du centre. Si $k < 0$, elle <strong>bascule de l\'autre côté</strong> de $O$ : la figure fait un demi-tour. C\'est le point du chapitre qui se perd le plus vite, et c\'est celui que les schémas ci-dessous mettent sous les yeux.<br/><br/>' +
        'En optique, une lentille réalise précisément une <strong>homothétie entre l\'objet et son image</strong> — et l\'image renversée que tu observes, c\'est un rapport négatif.',
      definitions: [
        { term: 'Homothétie', def: 'Transformation géométrique qui associe à tout point $A$ un point $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$. Elle <strong>conserve les formes</strong> mais change les dimensions.' },
        { term: 'Centre', def: 'Le point fixe $O$ de l\'homothétie : c\'est le <strong>seul point qui ne bouge pas</strong>. Tous les autres points « glissent » le long de la droite qui les relie à $O$.' },
        { term: 'Rapport', def: 'Le nombre $k$ qui détermine l\'<strong>agrandissement</strong> ($|k| > 1$), la <strong>réduction</strong> ($0 < |k| < 1$) ou le <strong>retournement</strong> ($k < 0$). $k = 1$ donne l\'identité.' },
        { term: 'Similitude', def: 'Transformation qui conserve les <strong>angles</strong> et multiplie les longueurs par un même facteur. L\'homothétie est un cas particulier de similitude.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> le centre $O$ et le rapport $k$ (donné dans l\'énoncé).',
          '<strong>Étape 2 : Construire l\'image</strong> de $A$ : le point $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$.<br/>En coordonnées : $A\'\\bigl(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O)\\bigr)$.',
          '<strong>Étape 3 : Calculer</strong> les nouvelles dimensions :<br/>— Longueurs : $\\times |k|$<br/>— Aires : $\\times k^2$<br/>— Angles : conservés (inchangés)'
        ]
      },
      example: {
        statement: 'On considère l\'homothétie de centre $O(0\\,;\\,0)$ et de rapport $k = 2$. Déterminer l\'image du point $A(3\\,;\\,1)$.',
        steps: [
          '<strong>Formule</strong> : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.<br/>Ici $O$ est l\'origine, donc $A\'(k \\cdot x_A \\,;\\, k \\cdot y_A)$.',
          '<strong>Calcul</strong> : $A\'(2 \\times 3 \\,;\\, 2 \\times 1) = A\'(6\\,;\\,2)$.',
          '<strong>Vérification</strong> : $OA = \\sqrt{3^2 + 1^2} = \\sqrt{10}$ et $OA\' = \\sqrt{6^2 + 2^2} = \\sqrt{40} = 2\\sqrt{10}$. On a bien $OA\' = 2 \\times OA$ ✓.'
        ],
        answer: '$A\'(6\\,;\\,2)$. La distance au centre est bien multipliée par $k = 2$.'
      },
      formulas: [
        '$\\vec{OA\'} = k \\cdot \\vec{OA}$',
        'Longueurs : $A\'B\' = |k| \\times AB$',
        'Aires : $\\mathcal{A}_{\\text{image}} = k^2 \\times \\mathcal{A}_{\\text{original}}$',
        'Les angles sont conservés (similitude)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Transformation géométrique',
        title: 'Visualiser une homothétie de rapport k = 2',
        description: 'Le triangle $ABC$ et son image $A\'B\'C\'$ par l\'homothétie de centre $O$ et de rapport $k = 2$ : chaque sommet image est deux fois plus loin de $O$ que le sommet d\'origine, sur la même droite.',
        svg: `
          <svg viewBox="0 0 340 290" role="img" aria-labelledby="homothetie-graph-title homothetie-graph-desc">
            <title id="homothetie-graph-title">Homothetie de centre O et de rapport k = 2</title>
            <desc id="homothetie-graph-desc">Le schema montre le triangle ABC et son image A'B'C' par l'homothetie de centre O et de rapport k = 2 : chaque sommet image est deux fois plus loin de O que le sommet d'origine, sur la meme droite.</desc>
            <rect x="20" y="8" width="280" height="30" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="28">Homothetie centre O, rapport k = 2</text>
            <line class="guide-line" x1="40" y1="250" x2="172" y2="206"></line>
            <line class="guide-line" x1="40" y1="250" x2="260" y2="74"></line>
            <line class="guide-line" x1="40" y1="250" x2="84" y2="74"></line>
            <line class="frame-line" x1="106" y1="228" x2="150" y2="162"></line>
            <line class="frame-line" x1="150" y1="162" x2="62" y2="162"></line>
            <line class="frame-line" x1="62" y1="162" x2="106" y2="228"></line>
            <line class="curve-main" x1="172" y1="206" x2="260" y2="74"></line>
            <line class="curve-main" x1="260" y1="74" x2="84" y2="74"></line>
            <line class="curve-main" x1="84" y1="74" x2="172" y2="206"></line>
            <text class="label-soft" x="100" y="190">ABC</text>
            <text class="label-soft" x="160" y="124">A'B'C'</text>
            <circle class="plot-point-alt" cx="40" cy="250" r="6"></circle>
            <circle class="plot-point-alt" cx="106" cy="228" r="5"></circle>
            <circle class="plot-point-alt" cx="150" cy="162" r="5"></circle>
            <circle class="plot-point-alt" cx="62" cy="162" r="5"></circle>
            <circle class="plot-point" cx="172" cy="206" r="5"></circle>
            <circle class="plot-point" cx="260" cy="74" r="5"></circle>
            <circle class="plot-point" cx="84" cy="74" r="5"></circle>
            <text class="annotation-label" x="20" y="266">O</text>
            <text class="annotation-label" x="112" y="246">A</text>
            <text class="annotation-label" x="140" y="146">B</text>
            <text class="annotation-label" x="18" y="168">C</text>
            <text class="annotation-label" x="182" y="220">A'</text>
            <text class="annotation-label" x="250" y="56">B'</text>
            <text class="annotation-label" x="36" y="56">C'</text>
          </svg>
        `,
        notes: [
          'Le centre $O$ est le seul point fixe de l\'homothétie : $A$, $B$, $C$ glissent chacun le long de leur droite $(OA)$, $(OB)$, $(OC)$ jusqu\'à leur image.',
          'Ici $k = 2$ : $\\vec{OA\'} = 2\\vec{OA}$ (idem pour $B$ et $C$), donc chaque point d\'origine se trouve exactement au milieu du segment reliant $O$ à son image.',
          'Le triangle image $A\'B\'C\'$ est semblable à $ABC$ : mêmes angles, côtés multipliés par $k = 2$, donc une aire multipliée par $k^2 = 4$.'
        ],
        reading: 'Pars toujours de $O$ et suis chaque droite jusqu\'à l\'image : avec $k = 2$, la distance double à chaque fois.',
        caption: 'Homothétie de centre $O$ et de rapport $k = 2$ : triangle $ABC$ et son image $A\'B\'C\'$, avec les droites $(OA)$, $(OB)$, $(OC)$ prolongées jusqu\'aux points images.'
      },

      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.

         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. Les trois malentendus retenus
         sont, dans l'ordre de gravité mesurée en classe :

           1. « l'image est un peu plus loin, dans la même direction » — le
              RAPPORT NÉGATIF, jamais compris, et c'est LE malentendu du
              chapitre. Une figure qui se tromperait de côté enseignerait
              l'inverse de la leçon ;
           2. « si les longueurs doublent, l'aire double » — le carré du
              rapport, confondu avec le rapport ;
           3. « une symétrie centrale, ça n'a rien à voir avec une
              homothétie » — alors que c'est exactement le cas $k = -1$.

         TOUTES LES COORDONNÉES SONT CALCULÉES par un script Node, jamais
         posées à vue, et les propriétés affirmées sont VÉRIFIÉES au calcul
         avant d'être écrites ici :

         Schéma 1 (k = +1,6 et k = -1,6, même centre, même triangle) : pour
         chacun des six sommets, le rapport MESURÉ sur le dessin
         (distance O-image divisée par distance O-antécédent) vaut exactement
         1,600000 ; le produit vectoriel (O, M, M') vaut au plus 9,1e-13, soit
         l'alignement exact aux erreurs d'arrondi flottantes près ; le produit
         scalaire donne le côté +1 à gauche (même côté de O) et -1 à droite
         (de l'autre côté). C'est cette dernière mesure qui garantit que la
         figure n'enseigne pas l'inverse de la leçon.

         Schéma 2 (k = 2 sur un carré) : côté 44 puis 88, donc rapport des
         côtés 2 = |k| ; aires 1 936 et 7 744, donc rapport des aires 4 = k².
         Le pavage compte quatre cases de 1 936 chacune, dont la somme vaut
         7 744, exactement l'aire du grand carré : l'élève COMPTE, il ne croit
         pas sur parole.

         Schéma 3 (k = -1) : pour chacun des trois sommets, le milieu de
         [M M'] tombe sur O à 0,00e+0 près, le rapport des distances vaut
         1,000000, et les trois longueurs de côtés du triangle image sont
         identiques à celles du triangle de départ (48,4665 / 40,3609 /
         51,2640). Une symétrie centrale, donc, et pas une ressemblance. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Un rapport négatif fait basculer la figure de l\'autre côté',
          description: 'Les deux dessins ci-dessous ont le <strong>même centre</strong> $O$, le <strong>même triangle</strong> de départ et la <strong>même valeur absolue</strong> de rapport : $1{,}6$. Seul le <strong>signe</strong> change. À gauche l\'image reste du même côté du centre ; à droite elle bascule de l\'autre côté, et la figure fait un demi-tour.',
          svg: `
            <svg viewBox="0 0 400 184" role="img" aria-labelledby="homo-signe-title homo-signe-desc">
              <title id="homo-signe-title">Homothetie de rapport positif et de rapport negatif</title>
              <desc id="homo-signe-desc">A gauche, le triangle A B C et son image par l'homothetie de centre O et de rapport un virgule six : les trois rayons partent du centre O, traversent d'abord chaque sommet du triangle de depart puis atteignent le sommet image plus loin, du meme cote du centre. A droite, le meme triangle et le meme centre, mais le rapport vaut moins un virgule six : les trois rayons traversent le centre et les sommets images se trouvent de l'autre cote, si bien que le triangle image est retourne. Dans les deux cas les distances au centre sont multipliees par un virgule six.</desc>

              <!-- GAUCHE : k = +1,6. Rapport mesure sur le dessin : 1,600000
                   pour les trois sommets. Cote (produit scalaire) : +1. -->
              <text class="annotation-label" x="108" y="16" text-anchor="middle">rapport positif</text>
              <line class="guide-line" x1="66" y1="100" x2="107.6" y2="77.12"></line>
              <line class="guide-line" x1="66" y1="100" x2="149.2" y2="91.68"></line>
              <line class="guide-line" x1="66" y1="100" x2="122.16" y2="131.2"></line>
              <polygon class="frame-line" points="92,85.7 118,94.8 101.1,119.5" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <polygon class="curve-main" points="107.6,77.12 149.2,91.68 122.16,131.2" fill="none"></polygon>
              <circle class="plot-point-alt" cx="66" cy="100" r="4"></circle>
              <circle class="plot-point-alt" cx="92" cy="85.7" r="3"></circle>
              <circle class="plot-point-alt" cx="118" cy="94.8" r="3"></circle>
              <circle class="plot-point-alt" cx="101.1" cy="119.5" r="3"></circle>
              <circle class="plot-point" cx="107.6" cy="77.12" r="3"></circle>
              <circle class="plot-point" cx="149.2" cy="91.68" r="3"></circle>
              <circle class="plot-point" cx="122.16" cy="131.2" r="3"></circle>
              <text class="tick-label" x="58" y="104" text-anchor="end">O</text>
              <text class="tick-label" x="86" y="80" text-anchor="end">A</text>
              <text class="tick-label" x="124" y="106" text-anchor="start">B</text>
              <text class="tick-label" x="95" y="131" text-anchor="end">C</text>
              <text class="label-soft" x="108" y="158" text-anchor="middle">k = 1,6</text>
              <text class="label-soft" x="108" y="174" text-anchor="middle">image du même côté</text>

              <!-- DROITE : k = -1,6. Meme rapport mesure 1,600000, mais cote
                   -1 : les images sont de l'autre cote du centre. Les rayons
                   TRAVERSENT donc O, ce qui est precisement ce qu'il faut
                   voir. -->
              <text class="annotation-label" x="284" y="16" text-anchor="middle">rapport négatif</text>
              <line class="guide-line" x1="326" y1="85.7" x2="258.4" y2="122.88"></line>
              <line class="guide-line" x1="352" y1="94.8" x2="216.8" y2="108.32"></line>
              <line class="guide-line" x1="335.1" y1="119.5" x2="222.56" y2="68.8"></line>
              <polygon class="frame-line" points="326,85.7 352,94.8 335.1,119.5" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <polygon class="curve-main" points="258.4,122.88 216.8,108.32 243.84,68.8" fill="none"></polygon>
              <circle class="plot-point-alt" cx="300" cy="100" r="4"></circle>
              <circle class="plot-point-alt" cx="326" cy="85.7" r="3"></circle>
              <circle class="plot-point-alt" cx="352" cy="94.8" r="3"></circle>
              <circle class="plot-point-alt" cx="335.1" cy="119.5" r="3"></circle>
              <circle class="plot-point" cx="258.4" cy="122.88" r="3"></circle>
              <circle class="plot-point" cx="216.8" cy="108.32" r="3"></circle>
              <circle class="plot-point" cx="243.84" cy="68.8" r="3"></circle>
              <text class="tick-label" x="306" y="96" text-anchor="start">O</text>
              <text class="tick-label" x="322" y="80" text-anchor="end">A</text>
              <text class="tick-label" x="358" y="92" text-anchor="start">B</text>
              <text class="tick-label" x="341" y="128" text-anchor="start">C</text>
              <text class="label-soft" x="284" y="158" text-anchor="middle">k = -1,6</text>
              <text class="label-soft" x="284" y="174" text-anchor="middle">image de l'autre côté</text>
            </svg>
          `,
          notes: [
            'Dans les deux dessins, chaque point image est à $1{,}6$ fois la distance du centre : la <strong>valeur absolue</strong> du rapport est la même, et les deux triangles images ont exactement la même taille.',
            'À gauche $k = 1{,}6 > 0$ : le rayon part de $O$, rencontre le sommet, puis son image plus loin. Les trois points sont dans cet ordre.',
            'À droite $k = -1{,}6 < 0$ : le rayon <strong>traverse</strong> $O$. Le centre est entre le sommet et son image, et le triangle est retourné.',
            'Le signe ne change donc ni la forme ni la taille de l\'image : il change seulement le <strong>côté</strong> où elle se trouve.'
          ],
          reading: 'Suis un rayon du doigt en partant du sommet $A$. À gauche tu t\'éloignes de $O$ pour atteindre son image ; à droite tu dois passer par $O$ et continuer au-delà.',
          caption: 'Le même triangle et le même centre, transformés par deux rapports opposés : $k = 1{,}6$ à gauche, $k = -1{,}6$ à droite.'
        },
        {
          theme: 'maths',
          kicker: 'Longueurs et aires',
          title: 'Les longueurs doublent, la surface est multipliée par quatre',
          description: 'Un carré agrandi par une homothétie de rapport $k = 2$ : son côté est bien deux fois plus long. Mais le grand carré se pave <strong>exactement</strong> par quatre copies du petit, et non par deux. C\'est ce que dit la formule $\\mathcal{A}_{\\text{image}} = k^2 \\times \\mathcal{A}$.',
          svg: `
            <svg viewBox="0 0 268 168" role="img" aria-labelledby="homo-aires-title homo-aires-desc">
              <title id="homo-aires-title">Un carre et son agrandissement de rapport deux</title>
              <desc id="homo-aires-desc">A gauche, un petit carre dont le cote est note c. A droite, le carre image par une homothetie de rapport deux : son cote mesure deux fois c, et il est decoupe par un trait vertical et un trait horizontal en quatre cases identiques, chacune ayant exactement la taille du petit carre. Les quatre cases portent les numeros un, deux, trois et quatre. Le lecteur compte donc quatre copies du petit carre dans le grand, alors que les longueurs n'ont ete multipliees que par deux.</desc>

              <!-- Cote 44 puis 88 : rapport des cotes 2, rapport des aires 4.
                   Le pavage compte quatre cases de 1936 unites carrees dont la
                   somme vaut 7744, exactement l'aire du grand carre. -->
              <rect class="frame-line" x="30" y="80" width="44" height="44" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></rect>
              <text class="annotation-label" x="52" y="140" text-anchor="middle">côté c</text>
              <text class="label-soft" x="52" y="156" text-anchor="middle">aire de départ</text>

              <rect class="curve-main" x="150" y="36" width="88" height="88" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></rect>
              <line class="grid-line" x1="194" y1="36" x2="194" y2="124"></line>
              <line class="grid-line" x1="150" y1="80" x2="238" y2="80"></line>
              <text class="tick-label" x="172" y="63" text-anchor="middle">1</text>
              <text class="tick-label" x="216" y="63" text-anchor="middle">2</text>
              <text class="tick-label" x="172" y="107" text-anchor="middle">3</text>
              <text class="tick-label" x="216" y="107" text-anchor="middle">4</text>
              <text class="annotation-label" x="194" y="140" text-anchor="middle">côté 2c</text>
              <text class="label-soft" x="194" y="156" text-anchor="middle">quatre fois cette aire</text>

              <text class="annotation-label" x="112" y="86" text-anchor="middle">k = 2</text>
            </svg>
          `,
          notes: [
            'Le côté passe de $c$ à $2c$ : les <strong>longueurs</strong> sont bien multipliées par $|k| = 2$.',
            'Le grand carré contient <strong>quatre</strong> copies du petit, pas deux : l\'<strong>aire</strong> est multipliée par $k^2 = 4$.',
            'Avec $k = 3$, le pavage compterait $9$ cases ; avec $k = 10$, il en compterait $100$. Le nombre de cases est toujours $k^2$.',
            '<strong>Le réflexe utile</strong> : dès qu\'un énoncé parle de surface, de superficie, de peinture ou de carrelage, le facteur à utiliser est $k^2$, jamais $k$.'
          ],
          reading: 'Compte les cases du grand carré : il y en a quatre, et chacune a exactement la taille du carré de gauche.',
          caption: 'Un carré et son image de rapport $2$, le grand pavé par quatre copies du petit.'
        },
        {
          theme: 'maths',
          kicker: 'Cas particulier',
          title: 'Le rapport moins un est exactement la symétrie centrale',
          description: 'Quand $k = -1$, l\'image est à la <strong>même distance</strong> du centre que le point de départ, mais de l\'autre côté. Le centre $O$ est donc le <strong>milieu</strong> de chaque segment reliant un point à son image : c\'est mot pour mot la définition de la symétrie centrale vue en cinquième.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="homo-moins1-title homo-moins1-desc">
              <title id="homo-moins1-title">Homothetie de rapport moins un</title>
              <desc id="homo-moins1-desc">Le triangle A B C et son image par l'homothetie de centre O et de rapport moins un. Chaque sommet est relie a son image par un segment qui passe par le centre O, et le centre est exactement au milieu de chacun de ces trois segments. Le triangle image a donc la meme taille que le triangle de depart, mais il est retourne : c'est la symetrie centrale de centre O.</desc>

              <!-- k = -1. Verifie au calcul : le milieu de chaque segment
                   [M M'] tombe sur O a 0 pres, le rapport des distances vaut
                   1,000000 et les trois cotes du triangle image mesurent
                   exactement ceux du triangle de depart. -->
              <line class="guide-line" x1="227" y1="60.5" x2="173" y2="123.5"></line>
              <line class="guide-line" x1="272" y1="78.5" x2="128" y2="105.5"></line>
              <line class="guide-line" x1="245" y1="108.5" x2="155" y2="75.5"></line>
              <polygon class="frame-line" points="227,60.5 272,78.5 245,108.5" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>
              <polygon class="curve-main" points="173,123.5 128,105.5 155,75.5" fill="none"></polygon>
              <circle class="plot-point-alt" cx="200" cy="92" r="5"></circle>
              <circle class="plot-point-alt" cx="227" cy="60.5" r="3"></circle>
              <circle class="plot-point-alt" cx="272" cy="78.5" r="3"></circle>
              <circle class="plot-point-alt" cx="245" cy="108.5" r="3"></circle>
              <circle class="plot-point" cx="173" cy="123.5" r="3"></circle>
              <circle class="plot-point" cx="128" cy="105.5" r="3"></circle>
              <circle class="plot-point" cx="155" cy="75.5" r="3"></circle>
              <text class="tick-label" x="206" y="88" text-anchor="start">O</text>
              <text class="tick-label" x="231" y="54" text-anchor="start">A</text>
              <text class="tick-label" x="278" y="76" text-anchor="start">B</text>
              <text class="tick-label" x="251" y="116" text-anchor="start">C</text>
              <text class="tick-label" x="169" y="134" text-anchor="middle">A'</text>
              <text class="tick-label" x="122" y="110" text-anchor="end">B'</text>
              <text class="tick-label" x="151" y="68" text-anchor="end">C'</text>
              <text class="annotation-label" x="200" y="26" text-anchor="middle">k = -1</text>
              <text class="label-soft" x="200" y="166" text-anchor="middle">O est le milieu de chaque segment tracé</text>
            </svg>
          `,
          notes: [
            'Avec $k = -1$, on a $|k| = 1$ : les longueurs sont <strong>inchangées</strong>, et le triangle image a exactement la même taille que celui de départ.',
            'Le signe négatif place l\'image de l\'autre côté de $O$, à la même distance : $O$ est donc le <strong>milieu</strong> de $[AA\']$, de $[BB\']$ et de $[CC\']$.',
            'Une symétrie centrale n\'est pas un cas à part de l\'homothétie : c\'est <strong>exactement</strong> l\'homothétie de rapport $-1$.',
            'À ne pas confondre avec $k = 1$, qui ne bouge rien du tout : le triangle et son image sont alors confondus.'
          ],
          reading: 'Pose ta règle sur $A$ et $A\'$ : elle passe par $O$, et $O$ tombe au milieu. Refais-le avec $B$ puis $C$, c\'est vrai à chaque fois.',
          caption: 'Homothétie de centre $O$ et de rapport $-1$ : le triangle et son image sont symétriques par rapport à $O$.'
        }
      ],

      recap: [
        'Les <strong>longueurs</strong> sont multipliées par $|k|$ et les <strong>aires</strong> par $k^2$ — ne pas confondre !',
        'Les <strong>angles</strong> sont toujours conservés : l\'image d\'un triangle équilatéral reste équilatéral.',
        'Si $k = -1$, l\'homothétie est une <strong>symétrie centrale</strong> par rapport au centre $O$.',
        'Pour trouver l\'image d\'un point en coordonnées : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.'
      ],
      piege: 'Piège : l\'homothétie multiplie les LONGUEURS par $|k|$ mais les AIRES par $k^2$. Si on agrandit d\'un facteur $3$, les longueurs sont $\\times 3$ mais l\'aire est $\\times 9$ !'
    },
    quiz: [
      {
        q: 'Une homothétie de rapport $k = 2$ agrandit un carré d\'aire $5$ cm². Quelle est l\'aire de l\'image ?',
        options: ['$10$ cm²', '$20$ cm²', '$40$ cm²', '$25$ cm²'],
        answer: 1,
        correction: 'L\'aire est multipliée par $k^2 = 2^2 = 4$. Aire image $= 5 \\times 4 = 20$ cm².'
      },
      {
        q: 'Sur un plan au $\\frac{1}{100}$, un salon mesure $3$ cm $\\times$ $4$ cm. Quelle est la superficie réelle du salon ?',
        options: ['$12$ cm²', '$1\\,200$ cm²', '$120\\,000$ cm²', '$12\\,000$ cm²'],
        answer: 2,
        correction: 'Le rapport est $k = 100$. Les longueurs réelles sont $300$ cm et $400$ cm. L\'aire réelle est $300 \\times 400 = 120\\,000$ cm² $= 12$ m². L\'erreur classique est de multiplier l\'aire du plan par $100$ au lieu de $100^2 = 10\\,000$, car les aires se multiplient par $k^2$, pas par $k$.'
      },
      {
        q: 'Qu\'est-ce qu\'une homothétie de rapport $k = -1$ réalise ?',
        options: ['Une réduction de moitié', 'Une symétrie centrale par rapport au centre', 'Un agrandissement', 'Une rotation de $90°$'],
        answer: 1,
        correction: '$k = -1$ : $\\vec{OA\'} = -1 \\cdot \\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne $k$ et une longueur,
         multiplie » — habillé de six contextes tirés par pick(). Mesure à 60
         tirages : 6 moules d'énoncé, mais **1 seule tâche distincte**.

         Deux manques graves, au-delà de la répétition. D'abord le rapport
         n'était JAMAIS négatif, alors que c'est la difficulté propre du
         chapitre et le sujet du premier schéma de cours. Ensuite les AIRES
         n'apparaissaient jamais, alors que la confusion entre $k$ et $k^2$ est
         l'erreur la plus coûteuse du chapitre — et celle que le programme
         évalue. La banque entraînait donc précisément ce que personne ne rate.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'longueur'  : la tâche d'origine, conservée ;
           - 'aire'      : le facteur $k^2$, l'erreur numéro un du chapitre ;
           - 'negatif'   : un rapport négatif, où seule la VALEUR ABSOLUE agit
                           sur la longueur — le signe ne change que le côté ;
           - 'retrouver' : remonter au rapport à partir de deux longueurs ;
           - 'antecedent': remonter à la longueur de DÉPART, où l'élève
                           multiplie au lieu de diviser ;
           - 'aireInverse' : remonter du rapport des aires au rapport des
                           longueurs, donc prendre une racine carrée ;
           - 'symetrie'  : reconnaître que $k = -1$ est la symétrie centrale.

         Les figures emploient figureHomothetie, qui construit l'image point par
         point par $M' = O + k(M - O)$ : le rapport dessiné est donc exactement
         le rapport annoncé, signe compris (vérifié dans
         scripts/manuel/tests/figures-3e.test.js). Les tâches purement
         numériques n'en reçoivent pas : dessiner un rapport d'aires ne montre
         rien de plus que la formule. */
      generate() {
        const tache = pick(['longueur', 'aire', 'negatif', 'retrouver',
                            'antecedent', 'aireInverse', 'symetrie']);

        if (tache === 'longueur') {
          const k = pick([2, 3, 4, 0.5, 1.5]);
          const ab = rand(3, 12);
          const img = parseFloat((k * ab).toFixed(2));
          const ctx = pick([
            { d: 'Une <strong>photocopieuse</strong> applique un rapport à un document.', o: 'un segment du document', i: 'sur la copie' },
            { d: 'Un modéliste construit une <strong>maquette d\'avion</strong>.', o: 'une pièce de l\'avion réel', i: 'sur la maquette' },
            { d: 'Un <strong>vidéoprojecteur</strong> agrandit une image sur l\'écran.', o: 'un segment de l\'image source', i: 'une fois projeté' },
            { d: 'Un graphiste redimensionne un <strong>logo</strong> pour une bannière.', o: 'un trait du logo d\'origine', i: 'sur la bannière' }
          ]);
          return {
            statement: ctx.d + `<br/><br/>La transformation est une homothétie de rapport $k = ${fr(k)}$, et ${ctx.o} mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de son <strong>image</strong> ${ctx.i} ?`,
            answer: img, tolerance: 0.05, unit: 'cm',
            figure: figureHomothetie(k),
            hint: `Les longueurs sont multipliées par $|k|$.<br/><br/>Ici $|k| = ${fr(Math.abs(k))}$, donc l'image mesure $${fr(Math.abs(k))} \\times ${ab}$.`,
            solution: [
              `Une homothétie de rapport $k$ multiplie toutes les <strong>longueurs</strong> par $|k|$.`,
              `$A'B' = ${fr(Math.abs(k))} \\times ${ab} = ${fr(img)}$ cm.`,
              k > 1 ? `Comme $|k| > 1$, il s'agit d'un <strong>agrandissement</strong> : l'image est plus grande que l'original.`
                    : `Comme $|k| < 1$, il s'agit d'une <strong>réduction</strong> : l'image est plus petite que l'original.`
            ]
          };
        }

        if (tache === 'aire') {
          /* LE FACTEUR k², erreur numéro un du chapitre. L'énoncé parle de
             surface en toutes lettres (peinture, gazon, carrelage) parce que
             c'est ce mot-là qui doit déclencher le réflexe. */
          const k = pick([2, 3, 4, 0.5]);
          const aire = rand(4, 30);
          const img = parseFloat((k * k * aire).toFixed(2));
          const ctx = pick([
            { d: 'Un <strong>terrain</strong> est agrandi sur un plan', s: 'sa surface de gazon', u: 'm²' },
            { d: 'Un <strong>mur</strong> est reproduit à une autre échelle', s: 'sa surface à peindre', u: 'm²' },
            { d: 'Une <strong>pièce</strong> est redessinée à une autre échelle', s: 'sa surface à carreler', u: 'm²' }
          ]);
          return {
            statement: ctx.d + ` par une homothétie de rapport $k = ${fr(k)}$.<br/><br/>Sur le dessin d'origine, ${ctx.s} vaut $${aire}$ ${ctx.u}.<br/><br/>Quelle est la <strong>surface</strong> correspondante après la transformation ?`,
            answer: img, tolerance: 0.05, unit: ctx.u,
            hint: `Attention : les longueurs sont multipliées par $|k|$, mais les <strong>aires</strong> le sont par $k^2$.<br/><br/>Ici $k^2 = ${fr(k)}^2 = ${fr(parseFloat((k * k).toFixed(2)))}$.`,
            solution: [
              `Une surface a <strong>deux</strong> dimensions, et chacune est multipliée par $|k|$ : l'aire est donc multipliée par $k^2$, jamais par $k$.`,
              `$k^2 = ${fr(k)}^2 = ${fr(parseFloat((k * k).toFixed(2)))}$`,
              `Aire image $= ${fr(parseFloat((k * k).toFixed(2)))} \\times ${aire} = ${fr(img)}$ ${ctx.u}.<br/><br/>Le réflexe : dès qu'un énoncé parle de surface, de peinture ou de carrelage, le facteur est $k^2$.`
            ]
          };
        }

        if (tache === 'negatif') {
          /* RAPPORT NÉGATIF. Le piège est de croire que la longueur devient
             négative : seule la VALEUR ABSOLUE agit sur les longueurs, le
             signe ne change que le côté. La solution le dit à chaque tirage. */
          const k = pick([-2, -3, -1.5, -0.5]);
          const ab = rand(4, 12);
          const img = parseFloat((Math.abs(k) * ab).toFixed(2));
          return {
            statement: `Une homothétie de centre $O$ et de rapport $k = ${fr(k)}$ transforme un segment $[AB]$ de longueur $${ab}$ cm en un segment $[A'B']$.<br/><br/>` +
              `Quelle est la <strong>longueur</strong> de $[A'B']$, en centimètres ?`,
            answer: img, tolerance: 0.05, unit: 'cm',
            figure: figureHomothetie(k),
            hint: `Une longueur ne peut jamais être négative.<br/><br/>Le rapport agit sur la longueur par sa <strong>valeur absolue</strong> $|k| = ${fr(Math.abs(k))}$ ; son signe, lui, dit seulement de quel côté de $O$ se trouve l'image.`,
            solution: [
              `Un rapport négatif ne donne pas une longueur négative : une longueur est toujours positive.`,
              `Le signe de $k$ indique seulement que l'image est de l'<strong>autre côté</strong> du centre $O$, et que la figure fait un demi-tour. La taille, elle, ne dépend que de $|k| = ${fr(Math.abs(k))}$.`,
              `$A'B' = ${fr(Math.abs(k))} \\times ${ab} = ${fr(img)}$ cm.`
            ]
          };
        }

        if (tache === 'retrouver') {
          const k = pick([2, 3, 4, 2.5]);
          const ab = rand(3, 10);
          const img = parseFloat((k * ab).toFixed(2));
          const ctx = pick([
            'Sur un <strong>plan à l\'échelle</strong>, une longueur du dessin et la longueur réelle correspondante sont connues.',
            'Entre une <strong>maquette</strong> et l\'objet réel, une arête est mesurée sur chacun.',
            'Entre une <strong>photo</strong> et son agrandissement, un même détail est mesuré sur les deux.'
          ]);
          return {
            statement: ctx + `<br/><br/>La longueur de départ mesure $${ab}$ cm, son image mesure $${fr(img)}$ cm.<br/><br/>Quel est le <strong>rapport</strong> $k$ de l'homothétie ? (On le suppose positif.)`,
            answer: k, tolerance: 0.02, unit: '',
            hint: `Le rapport compare l'image à l'original : $k = \\dfrac{\\text{longueur image}}{\\text{longueur de départ}}$.<br/><br/>Attention au sens : l'image est au numérateur.`,
            solution: [
              `Le rapport se lit toujours dans le même sens : l'image divisée par l'original.`,
              `$k = \\dfrac{${fr(img)}}{${ab}} = ${fr(k)}$`,
              `Comme $k > 1$, la transformation est bien un <strong>agrandissement</strong>, ce que confirme le fait que l'image soit la plus grande des deux longueurs.`
            ]
          };
        }

        if (tache === 'antecedent') {
          /* REMONTER À LA LONGUEUR DE DÉPART : l'inconnue est l'ANTÉCÉDENT, et
             l'élève multiplie par k au lieu de diviser. Le contrôle de grandeur
             est écrit dans la solution. */
          const k = pick([2, 3, 4, 2.5]);
          const ab = rand(3, 10);
          const img = parseFloat((k * ab).toFixed(2));
          const ctx = pick([
            { d: 'Un <strong>agrandissement photo</strong> a été tiré au rapport', o: 'sur le tirage', r: 'sur la photo d\'origine' },
            { d: 'Une <strong>maquette</strong> reproduit un bâtiment au rapport', o: 'sur le bâtiment réel', r: 'sur la maquette' },
            { d: 'Un <strong>plan agrandi</strong> a été obtenu au rapport', o: 'sur le plan agrandi', r: 'sur le plan initial' }
          ]);
          return {
            statement: ctx.d + ` $k = ${fr(k)}$.<br/><br/>Une longueur mesure $${fr(img)}$ cm ${ctx.o}.<br/><br/>Combien mesurait-elle <strong>${ctx.r}</strong> ?`,
            answer: ab, tolerance: 0.05, unit: 'cm',
            hint: `Ici c'est la longueur de <strong>départ</strong> qu'on cherche : ton résultat doit être plus petit que $${fr(img)}$ cm.<br/><br/>On remonte en <strong>divisant</strong> par $k$, pas en multipliant.`,
            solution: [
              `Avant tout calcul : le rapport vaut $${fr(k)} > 1$, donc l'image est la plus grande des deux. La longueur de départ sera plus <strong>petite</strong> que $${fr(img)}$ cm — tout résultat plus grand serait à reprendre.`,
              `De $\\text{image} = k \\times \\text{départ}$ on tire $\\text{départ} = \\dfrac{\\text{image}}{k} = \\dfrac{${fr(img)}}{${fr(k)}}$.`,
              `La longueur de départ vaut $${ab}$ cm, bien plus petite que $${fr(img)}$ cm.`
            ]
          };
        }

        if (tache === 'aireInverse') {
          /* REMONTER DU RAPPORT DES AIRES AU RAPPORT DES LONGUEURS : il faut
             prendre une RACINE CARRÉE. C'est le chemin retour du facteur k²,
             et l'élève répond presque toujours le rapport des aires lui-même. */
          const k = pick([2, 3, 4, 5]);
          const aire = rand(3, 15);
          const img = aire * k * k;
          return {
            statement: `Deux figures sont semblables : l'une est l'image de l'autre par une homothétie de rapport positif $k$.<br/><br/>` +
              `La petite a une aire de $${aire}$ cm², la grande une aire de $${img}$ cm².<br/><br/>` +
              `Quel est le <strong>rapport $k$</strong> entre leurs longueurs ?`,
            answer: k, tolerance: 0.02, unit: '',
            hint: `Le quotient des aires ne donne pas $k$, il donne $k^2$.<br/><br/>Calcule d'abord $\\dfrac{${img}}{${aire}}$, puis prends la <strong>racine carrée</strong> du résultat.`,
            solution: [
              `Les aires sont dans le rapport $k^2$, pas $k$ : $\\dfrac{${img}}{${aire}} = ${k * k}$, et ce nombre est $k^2$.`,
              `On remonte donc à $k$ par une racine carrée : $k = \\sqrt{${k * k}} = ${k}$.`,
              `Contrôle : les longueurs sont $${k}$ fois plus grandes, et les aires $${k * k}$ fois. Répondre $${k * k}$ pour le rapport des longueurs aurait confondu les deux.`
            ]
          };
        }

        /* tache === 'symetrie' : reconnaître que k = -1 est exactement la
           symétrie centrale. La réponse est codée 1 ou 0 pour rester
           numérique. C'est la seule tâche du chapitre qui demande de CONCLURE
           plutôt que de calculer. */
        const cas = pick([
          { k: -1, oui: true, quoi: 'une symétrie centrale de centre $O$' },
          { k: 1, oui: false, quoi: 'une symétrie centrale de centre $O$',
            pourquoi: 'avec $k = 1$, chaque point est sa propre image : la figure ne bouge pas du tout' },
          { k: -2, oui: false, quoi: 'une symétrie centrale de centre $O$',
            pourquoi: 'avec $k = -2$, l\'image est bien de l\'autre côté de $O$, mais deux fois plus grande : une symétrie conserve les longueurs' },
          { k: -1, oui: true, quoi: 'une transformation qui conserve les longueurs' }
        ]);
        return {
          statement: `On applique à une figure une homothétie de centre $O$ et de rapport $k = ${fr(cas.k)}$.<br/><br/>` +
            `Cette transformation est-elle <strong>${cas.quoi}</strong> ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
          answer: cas.oui ? 1 : 0, tolerance: 0.01, unit: '',
          figure: figureHomothetie(cas.k),
          hint: `Demande-toi deux choses : la figure change-t-elle de <strong>taille</strong> (cela dépend de $|k|$), et change-t-elle de <strong>côté</strong> (cela dépend du signe) ?<br/><br/>Une symétrie centrale ne change pas la taille et change le côté.`,
          solution: [
            `Une symétrie centrale de centre $O$ conserve les longueurs et place l'image de l'autre côté de $O$ : c'est exactement l'homothétie de rapport $-1$.`,
            cas.oui
              ? `Ici $k = ${fr(cas.k)}$ : $|k| = 1$ conserve les longueurs, et le signe négatif place l'image de l'autre côté. C'est donc bien le cas. Réponse : $1$.`
              : `Ici $k = ${fr(cas.k)}$ : ${cas.pourquoi}. Réponse : $0$.`,
            `À retenir : la symétrie centrale n'est pas un cas à part de l'homothétie, elle en est le cas $k = -1$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un photographe veut agrandir une photo de $10$ cm × $15$ cm pour en faire une affiche.',
      tasks: [
        'L\'agrandissement a un rapport $k = 4$. Quelles sont les dimensions de l\'affiche ?',
        'Quelle est l\'aire de la photo originale ? Et de l\'affiche ?',
        'Par quel facteur l\'aire a-t-elle été multipliée ?'
      ],
      solutions: [
        'Affiche : $10 \\times 4 = 40$ cm et $15 \\times 4 = 60$ cm.',
        'Photo : $10 \\times 15 = 150$ cm². Affiche : $40 \\times 60 = 2400$ cm².',
        '$\\dfrac{2400}{150} = 16 = k^2 = 4^2$ ✓.'
      ],
      finalAnswer: 'L\'affiche mesure $40 \\times 60$ cm. Son aire est $16$ fois celle de la photo.'
    },

    evaluation: {
      title: 'Évaluation — Homothéties',
      duration: '25 min',
      questions: [
        {
          statement: 'Une homothétie de centre $O$ et de rapport $k = 3$ transforme un triangle d\'aire $8$ cm². Quelle est l\'aire de l\'image ?',
          type: 'numeric',
          answer: 72,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: 'L\'aire est multipliée par $k^2 = 3^2 = 9$. Aire image $= 8 \\times 9 = 72$ cm².'
        },
        {
          statement: 'Sur un plan à l\'échelle $\\dfrac{1}{200}$, une pièce mesure $4$ cm de long. Quelle est la longueur réelle de la pièce ?',
          type: 'numeric',
          answer: 800,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le rapport d\'homothétie est $k = 200$. Longueur réelle $= 4 \\times 200 = 800$ cm $= 8$ m.'
        },
        {
          statement: 'Une homothétie de rapport $k = -2$ transforme un point $A$ tel que $OA = 5$ cm. Quelle est la distance $OA\'$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$OA\' = |k| \\times OA = |-2| \\times 5 = 2 \\times 5 = 10$ cm. Le signe négatif signifie que $A\'$ est de l\'autre côté de $O$ par rapport à $A$, mais la distance est bien $10$ cm.'
        },
        {
          statement: 'Une homothétie de rapport $k = -1$ est équivalente à :',
          type: 'multiple-choice',
          options: ['Une translation', 'Une rotation de $90°$', 'Une symétrie centrale', 'L\'identité'],
          answer: 2,
          points: 2,
          correction: 'Pour $k = -1$ : $\\vec{OA\'} = -\\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
        },
        {
          statement: 'Un plan au $\\dfrac{1}{50}$ représente un jardin carré de côté $6$ cm sur le plan. Quelle est l\'aire réelle du jardin en m² ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'm²',
          points: 2,
          correction: 'Côté réel $= 6 \\times 50 = 300$ cm $= 3$ m. Aire réelle $= 3 \\times 3 = 9$ m². Attention : l\'aire se multiplie par $k^2 = 50^2 = 2500$, pas par $50$. Vérification : $6^2 \\times 2500 = 36 \\times 2500 = 90\\,000$ cm² $= 9$ m² ✓.'
        }
      ]
    }
  }
);
