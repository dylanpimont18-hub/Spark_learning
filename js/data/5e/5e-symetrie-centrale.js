/* =========================================================
   Spark Learning – data/5e/5e-symetrie-centrale.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-symetrie-centrale',
    level: 1, subject: 'maths',
    icon: '🔄',
    title: 'Symétrie centrale',
    subtitle: 'Centre de symétrie, construction du symétrique',
    keywords: ['Symétrie centrale', 'Centre', 'Rotation 180°', 'Milieu', 'Point symétrique'],
    physics: false,

    cours: {
      intro: 'Imagine une photo punaisée par son centre sur un panneau : si tu la fais pivoter d\'un demi-tour ($180°$) autour de la punaise, chaque point de la photo se retrouve exactement de l\'autre côté, à la même distance du centre. C\'est exactement ce que fait la <strong>symétrie centrale</strong>.<br/><br/>' +
        'La symétrie centrale par rapport à un point $O$ fait correspondre à chaque point $A$ un point $A\'$ tel que <strong>$O$ est le milieu de $[AA\']$</strong> — autrement dit, $O$ est « entre » $A$ et $A\'$, à égale distance des deux.<br/><br/>' +
        'C\'est équivalent à une <strong>rotation de $180°$</strong> autour de $O$. Visuellement, tout « tourne d\'un demi-tour ».<br/><br/>' +
        '<strong>Différence avec la symétrie axiale :</strong> la symétrie axiale utilise un axe (droite), la symétrie centrale utilise un point. Une figure peut avoir un centre de symétrie sans avoir d\'axe de symétrie (ex : le parallélogramme non rectangle).<br/><br/>' +
        'En coordonnées, la formule est simple : $A\'(2x_O - x_A \\;; 2y_O - y_A)$. La symétrie centrale conserve les distances et les angles, mais <strong>inverse l\'orientation</strong>.',
      definitions: [
        { term: 'Symétrie centrale', def: 'Transformation qui associe à chaque point $A$ un point $A\'$ tel que le centre $O$ est le milieu de $[AA\']$.' },
        { term: 'Centre de symétrie', def: 'Point $O$ par rapport auquel la symétrie est définie. Il est le milieu de chaque paire de points symétriques.' },
        { term: 'Isométrie', def: 'Transformation qui conserve les distances. La symétrie centrale est une isométrie (indirecte car elle inverse l\'orientation).' },
        { term: 'Milieu d\'un segment', def: 'Point $M$ tel que $M = \\left(\\dfrac{x_A + x_B}{2} ; \\dfrac{y_A + y_B}{2}\\right)$. Partage le segment en deux parties égales.' }
      ],
      example: {
        statement: 'Trouver le symétrique de $A(5 ; 3)$ par rapport à $O(2 ; 1)$.',
        steps: [
          '$x_{A\'} = 2 \\times 2 - 5 = 4 - 5 = -1$.',
          '$y_{A\'} = 2 \\times 1 - 3 = 2 - 3 = -1$.',
          'Vérification : milieu de $[AA\'] = \\left(\\dfrac{5+(-1)}{2} ; \\dfrac{3+(-1)}{2}\\right) = (2 ; 1) = O$ ✓.'
        ],
        answer: '$A\'(-1 ; -1)$'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Symétrie centrale dans un repère',
        title: 'Construire le symétrique d\'un point par rapport à un centre',
        description: 'Le point $A(5 ; 3)$ est réfléchi par rapport au centre $O(2 ; 1)$. Le symétrique $A\'$ est tel que $O$ est le milieu de $[AA\']$ : on trouve $A\'(-1 ; -1)$.',
        svg: `
          <svg viewBox="0 0 360 290" role="img" aria-labelledby="symcentrale-title symcentrale-desc">
            <title id="symcentrale-title">Symétrique d'un point par rapport à un centre</title>
            <desc id="symcentrale-desc">Le point A en 5 ; 3 est réfléchi par rapport au centre O en 2 ; 1. Les points A, O et A' sont alignés, avec O au milieu du segment AA'. Le symétrique A' est en moins 1 ; moins 1.</desc>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="246"></line>
            <line class="grid-line" x1="122" y1="30" x2="122" y2="246"></line>
            <line class="grid-line" x1="158" y1="30" x2="158" y2="246"></line>
            <line class="grid-line" x1="194" y1="30" x2="194" y2="246"></line>
            <line class="grid-line" x1="230" y1="30" x2="230" y2="246"></line>
            <line class="grid-line" x1="266" y1="30" x2="266" y2="246"></line>
            <line class="grid-line" x1="50" y1="30" x2="266" y2="30"></line>
            <line class="grid-line" x1="50" y1="66" x2="266" y2="66"></line>
            <line class="grid-line" x1="50" y1="102" x2="266" y2="102"></line>
            <line class="grid-line" x1="50" y1="138" x2="266" y2="138"></line>
            <line class="grid-line" x1="50" y1="210" x2="266" y2="210"></line>
            <line class="grid-line" x1="50" y1="246" x2="266" y2="246"></line>
            <line class="axis" x1="86" y1="20" x2="86" y2="256"></line>
            <line class="axis" x1="40" y1="174" x2="280" y2="174"></line>
            <line class="guide-line" x1="266" y1="66" x2="50" y2="210"></line>
            <line class="frame-line" x1="208" y1="96" x2="216" y2="108"></line>
            <line class="frame-line" x1="100" y1="168" x2="108" y2="180"></line>
            <circle class="plot-point-alt" cx="266" cy="66" r="6"></circle>
            <circle class="plot-point" cx="158" cy="138" r="7"></circle>
            <circle class="plot-point" cx="50" cy="210" r="6"></circle>
            <text class="annotation-label" x="270" y="58">A(5 ; 3)</text>
            <text class="annotation-label" x="132" y="118">O(2 ; 1)</text>
            <text class="annotation-label" x="4" y="236">A'(-1 ; -1)</text>
            <text class="axis-label" x="284" y="178">x</text>
            <text class="axis-label" x="92" y="26">y</text>
            <text class="tick-label" x="40" y="260">-1</text>
            <text class="tick-label" x="82" y="260">0</text>
            <text class="tick-label" x="118" y="260">1</text>
            <text class="tick-label" x="154" y="260">2</text>
            <text class="tick-label" x="190" y="260">3</text>
            <text class="tick-label" x="226" y="260">4</text>
            <text class="tick-label" x="262" y="260">5</text>
            <text class="tick-label" x="36" y="34">4</text>
            <text class="tick-label" x="36" y="70">3</text>
            <text class="tick-label" x="36" y="106">2</text>
            <text class="tick-label" x="36" y="142">1</text>
            <text class="tick-label" x="36" y="178">0</text>
            <text class="tick-label" x="28" y="214">-1</text>
            <text class="tick-label" x="28" y="250">-2</text>
          </svg>
        `,
        notes: [
          'Les points $A$, $O$ et $A\'$ sont alignés : $A\'$ se trouve sur la droite $(AO)$, de l\'autre côté de $O$.',
          'Les deux petites marques sur $[OA]$ et $[OA\']$ indiquent des distances égales : $OA = OA\'$.',
          'Formule : $x_{A\'} = 2x_O - x_A = 2 \\times 2 - 5 = -1$ et $y_{A\'} = 2y_O - y_A = 2 \\times 1 - 3 = -1$.'
        ],
        reading: 'Le centre $O$ est le milieu de $[AA\']$ : il se trouve exactement au milieu du segment qui relie un point à son symétrique.',
        caption: 'Symétrique de $A(5 ; 3)$ par rapport au centre $O(2 ; 1)$ : on obtient $A\'(-1 ; -1)$, avec $O$ milieu de $[AA\']$.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13) — une figure par MALENTENDU.
         Les trois retenus :
           1. la symetrie centrale confondue avec la symetrie axiale ;
           2. « le centre est le milieu » reste une phrase tant qu'on n'a pas vu
              les deux longueurs egales sur le meme trait ;
           3. une figure peut avoir un centre de symetrie SANS avoir d'axe,
              ce que le cours affirme sans le montrer.

         La figure 1 emploie un « L », qui est CHIRAL : c'est la seule facon de
         rendre la difference visible. Sur une figure symetrique (un carre, un
         disque), les deux transformees se superposent et la figure ne
         demontrerait rien. Verification par le calcul : l'aire signee du L vaut
         +5 avant transformation, +5 apres symetrie centrale (l'orientation est
         conservee, c'est une rotation) et -5 apres symetrie axiale (elle
         l'inverse). C'est ce signe, et non l'apparence, qui distingue les deux.

         COORDONNEES CALCULEES, jamais posees a l'oeil : origine ecran (200,120)
         pour la figure 1, echelle 22 unites ; (120,150) et echelle 26 pour la
         figure 2. Alignement de A, O et A' verifie par produit vectoriel nul,
         et OA = OA' = 3,6056 exactement. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Centrale ou axiale',
          title: 'Un demi-tour n\'est pas un reflet',
          description: 'Sur une figure <strong>non symétrique</strong>, les deux transformations ne donnent pas le même résultat. La symétrie axiale se lit comme un <strong>reflet dans un miroir</strong> ; la symétrie centrale, comme un <strong>demi-tour</strong>. Sur un carré ou un disque, l\'écart serait invisible : c\'est pourquoi la figure choisie a la forme d\'un L.',
          svg: `
            <svg viewBox="60 12 300 212" role="img" aria-labelledby="symc-comp-title symc-comp-desc">
              <title id="symc-comp-title">Une figure en L, son symetrique central et son symetrique axial</title>
              <desc id="symc-comp-desc">Une figure en forme de L est dessinee en haut a droite d'un centre marque O. Son symetrique par rapport au point O se trouve en bas a gauche : la figure a tourne d'un demi-tour, si bien que le pied du L pointe dans la direction opposee. Son symetrique par rapport a l'axe vertical passant par O se trouve en haut a gauche : la figure est retournee comme dans un miroir, mais reste en haut. Les deux transformees partent de la meme figure de depart et sont dessinees a la meme echelle. Comme la figure en L n'a elle-meme aucune symetrie, les deux resultats ne se superposent pas, ce qui montre que les deux transformations sont bien differentes.</desc>

              <!-- Repere : origine ecran (200,120), 22 unites par unite. L'axe
                   vertical de la symetrie AXIALE passe par O. -->
              <line class="grid-line" x1="200" y1="24" x2="200" y2="216" stroke-dasharray="4 4"></line>
              <text class="tick-label" x="206" y="222" text-anchor="start">axe</text>

              <!-- Figure de depart, en teinte forte : c'est l'objet a suivre. -->
              <polygon class="frame-line" points="222,98 288,98 288,76 244,76 244,32 222,32" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></polygon>
              <text class="annotation-label" x="292" y="60" text-anchor="start">départ</text>

              <!-- Symetrique CENTRAL par rapport a O : chaque sommet (x,y)
                   devient (-x,-y). La figure passe en bas a GAUCHE. -->
              <polygon class="frame-line" points="178,142 112,142 112,164 156,164 156,208 178,208" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
              <text class="annotation-label" x="108" y="196" text-anchor="end">demi-tour</text>

              <!-- Symetrique AXIAL par rapport a l'axe vertical : (x,y) devient
                   (-x,y). La figure reste en HAUT, a gauche. -->
              <polygon class="guide-line" points="178,98 112,98 112,76 156,76 156,32 178,32" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)" stroke-dasharray="5 4"></polygon>
              <text class="label-soft" x="108" y="60" text-anchor="end">reflet</text>

              <circle class="plot-point" cx="200" cy="120" r="4"></circle>
              <text class="annotation-label" x="207" y="134" text-anchor="start">O</text>
            </svg>
          `,
          notes: [
            'Le <strong>demi-tour</strong> autour de $O$ envoie la figure en bas à gauche : elle a pivoté de $180°$.',
            'Le <strong>reflet</strong> dans l\'axe vertical la laisse en haut : elle a seulement été retournée de gauche à droite.',
            'Les deux résultats sont différents parce que le L n\'a aucune symétrie propre. La symétrie centrale <strong>conserve le sens de parcours</strong> de la figure, la symétrie axiale l\'inverse.'
          ],
          reading: 'Pose ton doigt sur le pied du L de départ, puis cherche-le sur chaque transformée. Après le demi-tour, il pointe vers le bas ; après le reflet, il pointe encore vers le haut. C\'est ce détail qui distingue les deux transformations.',
          caption: 'La même figure en L, son symétrique par rapport au point $O$ (demi-tour) et son symétrique par rapport à un axe vertical (reflet) : deux résultats distincts.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que veut dire « milieu »',
          title: 'Le centre est à égale distance, et sur la même droite',
          description: 'Dire que $O$ est le <strong>milieu de $[AA\']$</strong> impose deux choses à la fois, et les deux comptent : les points $A$, $O$ et $A\'$ sont <strong>alignés</strong>, et les longueurs $OA$ et $OA\'$ sont <strong>égales</strong>. Oublier l\'alignement est l\'erreur la plus fréquente.',
          svg: `
            <svg viewBox="60 30 260 168" role="img" aria-labelledby="symc-milieu-title symc-milieu-desc">
              <title id="symc-milieu-title">Le centre O milieu du segment joignant un point et son symetrique</title>
              <desc id="symc-milieu-desc">Le point A de coordonnees 5 et 3, le centre O de coordonnees 2 et 1, et le point A prime de coordonnees moins 1 et moins 1 sont places dans un repere. Les trois points sont alignes sur une meme droite, ce qui est verifie par le calcul. Le segment joignant A a A prime passe donc par O, et O le partage en deux parties de meme longueur, chacune marquee d'un tic identique. Les deux longueurs valent la meme chose a la quatrieme decimale. Un point mal place, hors de la droite, est montre a cote en trait tirete pour rappeler que l'egalite des distances ne suffit pas : il faut aussi l'alignement.</desc>

              <!-- Repere : origine (120,150), 26 unites par unite de repere.
                   A(5;3) -> (250,72) ; O(2;1) -> (172,124) ; A'(-1;-1) -> (94,176).
                   Alignement verifie par produit vectoriel EXACTEMENT nul. -->
              <line class="frame-line" x1="94" y1="176" x2="250" y2="72"></line>

              <!-- Les deux moitiees portent le MEME tic : c'est le codage du
                   manuel pour deux longueurs egales. Tic perpendiculaire au
                   segment, pose au milieu de chaque moitie. -->
              <line class="frame-line" x1="127" y1="144" x2="139" y2="156"></line>
              <line class="frame-line" x1="205" y1="92" x2="217" y2="104"></line>

              <circle class="plot-point" cx="250" cy="72" r="4"></circle>
              <text class="annotation-label" x="258" y="66" text-anchor="start">A</text>
              <circle class="plot-point" cx="172" cy="124" r="4"></circle>
              <text class="annotation-label" x="180" y="140" text-anchor="start">O</text>
              <circle class="plot-point" cx="94" cy="176" r="4"></circle>
              <text class="annotation-label" x="86" y="190" text-anchor="end">A′</text>

              <!-- Le contre-exemple : un point a la BONNE distance de O mais
                   HORS de la droite. Trait tirete, teinte faible.

                   2026-09-13 — CORRIGE PAR LE CALCUL. Le point etait d'abord
                   pose a (120,86), soit a 64,41 de O quand OA vaut 93,74 : la
                   figure ANNONCAIT « meme distance » et montrait une distance
                   plus courte d'un tiers. Le contre-exemple se refutait donc
                   lui-meme, et rien dans le dessin ne le laissait voir. Le point
                   est desormais pris sur le CERCLE de centre O et de rayon OA,
                   a 60 degres de la direction de OA' : (88,82), a 93,74 de O
                   exactement, et dans le cadre. -->
              <circle class="plot-point-alt" cx="88" cy="82" r="4"></circle>
              <line class="guide-line" x1="172" y1="124" x2="88" y2="82" stroke-dasharray="5 4"></line>
              <text class="label-soft" x="96" y="66" text-anchor="middle">même distance,</text>
              <text class="label-soft" x="96" y="50" text-anchor="middle">mais pas aligné</text>

              <text class="tick-label" x="190" y="44" text-anchor="middle">O est le milieu de AA′</text>
            </svg>
          `,
          notes: [
            'Alignement : $A$, $O$ et $A\'$ sont sur une même droite. Le vérifier revient à s\'assurer que le segment $[AA\']$ <strong>passe</strong> par $O$.',
            'Égalité : $OA = OA\'$, ce que codent les deux tics identiques sur les deux moitiés du segment.',
            'Le point en tirets est à la <strong>bonne distance</strong> de $O$ mais hors de la droite : il n\'est donc <strong>pas</strong> le symétrique de $A$. La distance seule ne suffit jamais.'
          ],
          reading: 'Place ta règle sur $A$ et $A\'$ : elle doit passer exactement sur $O$. Mesure ensuite les deux moitiés, elles doivent être égales. Ces deux vérifications ensemble définissent le symétrique, l\'une sans l\'autre ne suffit pas.',
          caption: 'Le centre $O(2 ; 1)$ milieu de $[AA\']$ avec $A(5 ; 3)$ et $A\'(-1 ; -1)$ : alignement et égalité des deux moitiés.'
        },
        {
          theme: 'maths',
          kicker: 'Centre sans axe',
          title: 'Le parallélogramme a un centre, mais aucun axe',
          description: 'Le cours l\'affirme : une figure peut avoir un centre de symétrie <strong>sans</strong> avoir d\'axe de symétrie. Le parallélogramme quelconque en est l\'exemple, et il vaut la peine d\'être vu : plier la figure en deux ne marche jamais, alors que la faire tourner d\'un demi-tour la remet exactement sur elle-même.',
          svg: `
            <svg viewBox="0 0 400 200" role="img" aria-labelledby="symc-para-title symc-para-desc">
              <title id="symc-para-title">Un parallelogramme a un centre de symetrie mais aucun axe de symetrie</title>
              <desc id="symc-para-desc">A gauche, un parallelogramme quelconque avec son centre marque au croisement des diagonales : un demi-tour autour de ce point ramene la figure exactement sur elle-meme, ce que montrent deux sommets opposes reperes par le meme marquage. A droite, le meme parallelogramme avec deux pliages essayes, l'un vertical et l'autre horizontal, tous deux traces en tirets : dans les deux cas les deux moities ne se superposent pas, car la figure penche d'un cote. Le parallelogramme possede donc un centre de symetrie sans posseder le moindre axe de symetrie.</desc>

              <!-- Parallelogramme de base 100, decalage 34, hauteur 70. Le centre
                   est le croisement des diagonales, calcule : moyenne des quatre
                   sommets. Sommets (24,150) (124,150) (158,80) (58,80) :
                   centre = ((24+124+158+58)/4, (150+150+80+80)/4) = (91,115). -->
              <polygon class="frame-line" points="24,150 124,150 158,80 58,80" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></polygon>
              <line class="guide-line" x1="24" y1="150" x2="158" y2="80"></line>
              <line class="guide-line" x1="124" y1="150" x2="58" y2="80"></line>
              <circle class="plot-point" cx="91" cy="115" r="4"></circle>
              <text class="annotation-label" x="98" y="130" text-anchor="start">O</text>
              <text class="tick-label" x="91" y="176" text-anchor="middle">demi-tour : ça marche</text>

              <!-- Le MEME parallelogramme a droite, meme echelle, meme ligne de
                   base : sommets translates de +220. Deux pliages essayes. -->
              <polygon class="frame-line" points="244,150 344,150 378,80 278,80" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></polygon>
              <line class="guide-line" x1="311" y1="66" x2="311" y2="164" stroke-dasharray="5 4"></line>
              <line class="guide-line" x1="232" y1="115" x2="390" y2="115" stroke-dasharray="5 4"></line>
              <text class="tick-label" x="311" y="176" text-anchor="middle">pliage : ça ne marche pas</text>

              <text class="annotation-label" x="200" y="24" text-anchor="middle">un centre, aucun axe</text>
              <text class="label-soft" x="200" y="42" text-anchor="middle">la figure penche, donc aucun pli ne la referme sur elle-même</text>
            </svg>
          `,
          notes: [
            'Le centre du parallélogramme est le point de croisement de ses <strong>diagonales</strong> : un demi-tour autour de lui redonne exactement la même figure.',
            'Aucun pliage ne fonctionne : la figure penche d\'un côté, donc les deux moitiés ne se recouvrent jamais.',
            'Ce n\'est pas un cas exotique — le rectangle, lui, possède les deux ; le parallélogramme quelconque montre que le centre et l\'axe sont bien deux propriétés <strong>indépendantes</strong>.'
          ],
          reading: 'Décalque le parallélogramme de gauche, plante ton crayon sur $O$ et fais tourner le calque d\'un demi-tour : il retombe exactement sur le dessin. Essaie maintenant de plier ta feuille sur l\'un des traits de droite : les deux moitiés ne coïncident jamais.',
          caption: 'Le parallélogramme quelconque : un centre de symétrie au croisement des diagonales, et aucun axe de symétrie.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Symétrique d\'un point</strong> : tracer la droite $(OA)$ passant par $A$ et le centre $O$.',
          '<strong>Reporter la distance</strong> $OA$ de l\'autre côté de $O$ : $OA\' = OA$, et $O$ est entre $A$ et $A\'$.',
          '<strong>Pour une figure</strong> : construire le symétrique de chaque sommet, puis relier dans le même ordre.'
        ]
      },
      formulas: [
        '$O = $ milieu de $[AA\']$, donc $\\vec{OA\'} = -\\vec{OA}$',
        'En coordonnées : si $O(x_O ; y_O)$ et $A(x_A ; y_A)$, alors $A\'(2x_O - x_A ; 2y_O - y_A)$',
        'La symétrie centrale conserve : distances, angles, aires (isométrie indirecte).'
      ],
      recap: [
        'Le centre $O$ est le milieu de chaque paire de points symétriques.',
        'Formule : $A\'(2x_O - x_A ; 2y_O - y_A)$.',
        'Symétrie centrale = rotation de $180°$.',
        'Ne pas confondre avec la symétrie axiale (axe vs point).'
      ],
      piege: 'Piège : ne pas confondre symétrie axiale et symétrie centrale. La symétrie axiale utilise un axe (droite) ; la symétrie centrale utilise un point. La symétrie centrale revient à une rotation de $180°$.'
    },

    quiz: [
      {
        q: 'Le symétrique du point $A(3 ; 5)$ par rapport au point $O(1 ; 2)$ a pour coordonnées :',
        options: ['$(-1 ; -1)$', '$(2 ; 3)$', '$(-3 ; -5)$', '$(4 ; 7)$'],
        answer: 0,
        correction: '$A\'(2 \\times 1 - 3 ; 2 \\times 2 - 5) = (2 - 3 ; 4 - 5) = (-1 ; -1)$. Vérification : milieu de $[A\\ A\']$ : $\\left(\\frac{3-1}{2}; \\frac{5-1}{2}\\right) = (1; 2) = O$ ✓.'
      },
      {
        q: 'Un parallélogramme (non rectangle) possède-t-il un axe de symétrie ? Un centre de symétrie ?',
        options: [
          'Oui à un axe, non à un centre.',
          'Non à un axe, oui à un centre (intersection des diagonales).',
          'Oui aux deux.',
          'Non aux deux.'
        ],
        answer: 1,
        correction: 'Le parallélogramme général n\'a pas d\'axe de symétrie. En revanche, il a un centre de symétrie : le point d\'intersection de ses diagonales.'
      },
      {
        q: 'Un rectangle admet-il un centre de symétrie ?',
        options: ['Non, jamais', 'Oui, c\'est le milieu des diagonales', 'Oui, c\'est n\'importe quel sommet', 'Seulement s\'il est un carré'],
        answer: 1,
        correction: 'Le rectangle admet bien un centre de symétrie : le point d\'intersection de ses diagonales (leur milieu commun).'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ELARGIE LE 2026-09-13.

         Le generateur ne produisait qu'UNE tache : appliquer $2 x_O - x_A$.
         Les cinq contextes et les deux coordonnees ne faisaient varier que le
         DECOR, si bien que la banque du professeur imprimait 42 enonces tires
         d'une seule et meme question. C'est exactement la repetition que le
         plafond par moule est cense empecher : il ne la voyait pas, parce que
         le moule est le TEXTE et que le texte, lui, changeait.

         La mesure qui compte n'est donc pas le nombre de moules mais le nombre
         de TACHES, qu'on lit sur la premiere ligne du corrige (elle nomme la
         methode depuis le commit 6e94e89). Mesure du jour, avant/apres :
         1 tache pour 42 enonces -> 4 taches.

         Les trois taches ajoutees ne sont pas des variantes d'habillage : elles
         prennent la symetrie par ses autres entrees, celles que l'evaluation
         mobilise et que rien n'entrainait.
           - retrouver le CENTRE a partir de A et A' (la relation lue a
             l'envers, qui est le vrai test de « O est le milieu ») ;
           - retrouver l'ANTECEDENT A a partir de A' et O (meme relation, autre
             inconnue) ;
           - lire une LONGUEUR conservee, la symetrie centrale etant une
             isometrie — propriete enoncee par le cours et jamais exercee. */
      generate() {
        const tache = pick(['image', 'image', 'centre', 'antecedent', 'longueur']);
        const coordType = pick([
          { ask: 'abscisse', coord: 'x' },
          { ask: 'ordonnée', coord: 'y' }
        ]);

        /* TACHE 2 — retrouver le centre. On part du centre voulu pour garantir
           des coordonnees entieres : O est le milieu, donc A' = 2O - A. */
        if (tache === 'centre') {
          const ox = rand(-2, 6), oy = rand(-2, 6);
          const ax = rand(-4, 7), ay = rand(-4, 7);
          const apx = 2 * ox - ax, apy = 2 * oy - ay;
          const ctx = pick([
            { lieu: 'deux bornes de randonnée', nomA: 'la première borne', nomB: 'la seconde borne', nomO: 'le refuge à mi-chemin' },
            { lieu: 'deux antennes relais', nomA: 'la première antenne', nomB: 'la seconde antenne', nomO: 'le central téléphonique' },
            { lieu: 'deux bouées d\'un plan d\'eau', nomA: 'la première bouée', nomB: 'la seconde bouée', nomO: 'la plateforme centrale' }
          ]);
          return {
            statement: `Sur une carte quadrillée figurent ${ctx.lieu} : ${ctx.nomA} $A(${ax} ; ${ay})$ et ${ctx.nomB} $A'(${apx} ; ${apy})$.<br/>On sait que ${ctx.nomO} $O$ est le <strong>centre de symétrie</strong> qui échange les deux.<br/>Quelle est l'<strong>${coordType.ask}</strong> de $O$ ?`,
            answer: coordType.coord === 'x' ? ox : oy,
            tolerance: 0,
            unit: '',
            hint: `Le centre est le <strong>milieu</strong> de $[AA']$ : chacune de ses coordonnées est la <strong>moyenne</strong> des deux coordonnées correspondantes.<br/><br/>Pour l'abscisse : $x_O = \\dfrac{${ax} + ${apx}}{2}$.`,
            solution: [
              `Le centre étant le milieu, ses coordonnées sont les moyennes de celles des deux points.`,
              `$x_O = \\dfrac{${ax} + ${apx}}{2} = \\dfrac{${ax + apx}}{2} = ${ox}$`,
              `$y_O = \\dfrac{${ay} + ${apy}}{2} = \\dfrac{${ay + apy}}{2} = ${oy}$`,
              `Le centre est $O(${ox} ; ${oy})$. Contrôle : $2 \\times ${ox} - ${ax} = ${apx}$, on retombe bien sur $A'$.`
            ]
          };
        }

        /* TACHE 3 — remonter a l'antecedent. Meme relation que la tache 1, mais
           l'inconnue change de place : l'eleve qui applique la formule par
           reflexe, sans la comprendre, se trompe de sens. */
        if (tache === 'antecedent') {
          const ox = rand(-2, 6), oy = rand(-2, 6);
          const apx = rand(-4, 7), apy = rand(-4, 7);
          const ax = 2 * ox - apx, ay = 2 * oy - apy;
          const ctx = pick([
            { objet: 'le reflet d\'un phare dans un lac', dep: 'le reflet', arr: 'le phare' },
            { objet: 'l\'ombre portée d\'une lampe', dep: 'l\'ombre', arr: 'l\'objet' },
            { objet: 'la pièce jumelle d\'un mécanisme', dep: 'la pièce visible', arr: 'la pièce jumelle' }
          ]);
          return {
            statement: `On étudie ${ctx.objet} sur un plan quadrillé.<br/>${ctx.dep.charAt(0).toUpperCase() + ctx.dep.slice(1)} occupe le point $A'(${apx} ; ${apy})$, et le centre de symétrie est $O(${ox} ; ${oy})$.<br/>Quelle est l'<strong>${coordType.ask}</strong> de ${ctx.arr}, c'est-à-dire du point $A$ dont $A'$ est le symétrique ?`,
            answer: coordType.coord === 'x' ? ax : ay,
            tolerance: 0,
            unit: '',
            hint: `La relation est <strong>symétrique</strong> : si $A'$ est le symétrique de $A$, alors $A$ est le symétrique de $A'$.<br/><br/>La même formule s'applique donc, en partant cette fois de $A'$.`,
            solution: [
              `La relation joue dans les deux sens : on repart du point connu vers le point cherché.`,
              `$x_A = 2 \\times ${ox} - ${apx} = ${2 * ox} - ${apx} = ${ax}$`,
              `$y_A = 2 \\times ${oy} - ${apy} = ${2 * oy} - ${apy} = ${ay}$`,
              `Le point cherché est $A(${ax} ; ${ay})$, et $O$ est bien le milieu de $[AA']$.`
            ]
          };
        }

        /* TACHE 4 — la symetrie centrale CONSERVE les longueurs. Le cours le
           dit (« isometrie »), rien ne le faisait travailler. On evite le
           calcul de racine carree, hors programme de cinquieme : le segment est
           horizontal ou vertical, sa longueur est donc une difference. */
        if (tache === 'longueur') {
          const horizontal = pick([true, false]);
          const ox = rand(0, 5), oy = rand(0, 5);
          const ax = rand(-3, 4), ay = rand(-3, 4);
          const d = rand(2, 7);
          const bx = horizontal ? ax + d : ax;
          const by = horizontal ? ay : ay + d;
          const ctx = pick([
            { objet: 'une passerelle', unite: 'unités' },
            { objet: 'un tronçon de rail', unite: 'unités' },
            { objet: 'une barre de charpente', unite: 'unités' }
          ]);
          return {
            statement: `Sur un plan quadrillé, ${ctx.objet} est représentée par le segment $[AB]$ avec $A(${ax} ; ${ay})$ et $B(${bx} ; ${by})$.<br/>On construit son symétrique $[A'B']$ par rapport au centre $O(${ox} ; ${oy})$.<br/>Quelle est la longueur de $[A'B']$, en ${ctx.unite} ?`,
            answer: d,
            tolerance: 0,
            unit: '',
            hint: `La symétrie centrale est une <strong>isométrie</strong> : elle déplace la figure sans jamais la déformer.<br/><br/>Nul besoin de calculer les coordonnées de $A'$ et $B'$ : mesure simplement $[AB]$.`,
            solution: [
              `La symétrie centrale conserve les longueurs, donc le segment image a la même longueur.`,
              horizontal
                ? `Le segment $[AB]$ est horizontal : sa longueur vaut $${bx} - ${ax} = ${d}$.`
                : `Le segment $[AB]$ est vertical : sa longueur vaut $${by} - ${ay} = ${d}$.`,
              `L'image $[A'B']$ mesure donc elle aussi $${d}$ : la figure a tourné d'un demi-tour, elle n'a ni grandi ni rétréci.`
            ]
          };
        }
        const ox = rand(0, 5);
        const oy = rand(0, 5);
        const ax = rand(-3, 8);
        const ay = rand(-3, 8);
        const symX = 2 * ox - ax;
        const symY = 2 * oy - ay;
        const answer = coordType.coord === 'x' ? symX : symY;

        const ctx = pick([
          {
            intro: `Sur un plan de ville, un monument $A$ se trouve aux coordonnées $(${ax} ; ${ay})$ et la place centrale $O$ est en $(${ox} ; ${oy})$.<br/>On veut construire un monument symétrique $A'$ par rapport à la place $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du monument $A'$ ?`
          },
          {
            intro: `Dans un jeu vidéo, un personnage $A$ est en $(${ax} ; ${ay})$ et un portail magique $O$ se situe en $(${ox} ; ${oy})$.<br/>Le portail téléporte le personnage vers son <strong>symétrique</strong> par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position d'arrivée $A'$ ?`
          },
          {
            intro: `Sur une carte au trésor, un repère $A$ est placé en $(${ax} ; ${ay})$. Le centre de la carte est le point $O(${ox} ; ${oy})$.<br/>L'indice dit : « le trésor est le symétrique de $A$ par rapport à $O$ ».`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> du trésor $A'$ ?`
          },
          {
            intro: `En astronomie simplifiée, une planète $A$ orbite en $(${ax} ; ${ay})$ autour d'une étoile $O$ en $(${ox} ; ${oy})$.<br/>Le point diamétralement opposé de l'orbite est le symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de ce point opposé $A'$ ?`
          },
          {
            intro: `Sur un terrain de sport quadrillé, un joueur $A$ est en $(${ax} ; ${ay})$ et le centre du terrain $O$ est en $(${ox} ; ${oy})$.<br/>Son coéquipier $A'$ se place au point symétrique de $A$ par rapport à $O$.`,
            question: `Quelle est l'<strong>${coordType.ask}</strong> de la position de $A'$ ?`
          }
        ]);

        return {
          statement: `${ctx.intro}<br/>${ctx.question}`,
          answer,
          tolerance: 0,
          unit: '',
          hint: coordType.coord === 'x'
            ? `Formule : $x_{A'} = 2 \\times x_O - x_A = 2 \\times ${ox} - ${ax}$.`
            : `Formule : $y_{A'} = 2 \\times y_O - y_A = 2 \\times ${oy} - ${ay}$.`,
          solution: [
            `Le centre est le milieu du segment joignant le point et son symétrique.`,
            `$x_{A'} = 2 \\times ${ox} - ${ax} = ${2 * ox} - ${ax} = ${symX}$`,
            `$y_{A'} = 2 \\times ${oy} - ${ay} = ${2 * oy} - ${ay} = ${symY}$`,
            `Le symétrique est $A'(${symX} ; ${symY})$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Sur une carte routière, une ville $A$ est à la position $(2 ; 5)$ et une ville $B$ est à $(8 ; 3)$ (en cm sur la carte). La gare $G$ est le milieu de $[AB]$.',
      tasks: [
        'Calculer les coordonnées de $G$ (milieu de $[AB]$).',
        'Trouver les coordonnées de $A\'$, symétrique de $A$ par rapport à $G$.',
        'Vérifier que $A\'$ coïncide avec $B$.'
      ],
      solutions: [
        '$G = \\left(\\dfrac{2+8}{2} ; \\dfrac{5+3}{2}\\right) = (5 ; 4)$.',
        '$A\'\\left(2 \\times 5 - 2 ; 2 \\times 4 - 5\\right) = (8 ; 3)$.',
        '$A\'(8 ; 3) = B(8 ; 3)$ ✓. Normal : $G$ est le milieu de $[AB]$, donc $B$ est le symétrique de $A$ par rapport à $G$.'
      ],
      finalAnswer: 'La gare est en $G(5 ; 4)$, et $B$ est bien le symétrique de $A$ par rapport à $G$.'
    },

    evaluation: {
      title: 'Évaluation — Symétrie centrale',
      duration: '20 min',
      questions: [
        {
          statement: 'Le symétrique du point $A(5 ; 3)$ par rapport au point $O(2 ; 1)$ a pour abscisse :',
          type: 'numeric',
          answer: -1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_{A\'} = 2 \\times x_O - x_A = 2 \\times 2 - 5 = 4 - 5 = -1$.'
        },
        {
        /* QUESTION REECRITE LE 2026-09-13.

           Elle demandait l'ordonnee du symetrique, exactement comme la question
           1 demandait son abscisse : deux fois la meme tache, et un DEUXIEME
           « calculer » sur cinq questions dans un ouvrage ou cette competence
           pesait 45,7 % du total, loin au-dela du plafond de 35 %.

           La nouvelle question est un PROBLEME INVERSE : on donne le point et
           son symetrique, on cherche le CENTRE. Aucune formule directe n'est
           disponible au niveau cinquieme — il faut comprendre que le centre est
           le MILIEU du segment, donc revenir a la definition plutot qu'a une
           regle de calcul. C'est « chercher », la competence que l'ouvrage
           n'evaluait presque nulle part. */
          statement: 'Le symétrique du point $A(1 ; 2)$ est le point $A\'(7 ; 10)$. Quelle est l\'abscisse du centre de symétrie $O$ ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Par définition, le centre $O$ est le <strong>milieu</strong> du segment $[AA\']$. ' +
            'Son abscisse est donc au milieu de $1$ et $7$ : $x_O = \\dfrac{1 + 7}{2} = 4$. ' +
            'Vérification : de $A$ à $O$ on avance de $3$ ($1 \\to 4$), et de $O$ à $A\'$ on avance encore de $3$ ' +
            '($4 \\to 7$) — les deux écarts sont bien égaux, ce qui confirme que $O$ est au milieu. ' +
            '(Son ordonnée vaudrait de même $\\dfrac{2 + 10}{2} = 6$.)'
        },
        {
          statement: 'Si $O$ est le centre de symétrie d\'une figure et $A$ est un point de cette figure, alors :',
          type: 'multiple-choice',
          options: [
            '$O$ est sur le segment $[AA\']$ mais pas forcément au milieu.',
            '$O$ est le milieu du segment $[AA\']$.',
            '$A$ et $A\'$ sont à la même distance de l\'axe de symétrie.',
            '$A\'$ est le point le plus éloigné de $A$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Par définition de la symétrie centrale, $O$ est le milieu de $[AA\']$.'
        },
        {
          statement: 'Le milieu du segment $[AB]$ avec $A(-2 ; 6)$ et $B(4 ; -2)$ a pour abscisse :',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$x_M = \\dfrac{x_A + x_B}{2} = \\dfrac{-2 + 4}{2} = \\dfrac{2}{2} = 1$.'
        },
        {
          statement: 'Un parallélogramme possède-t-il un centre de symétrie ?',
          type: 'multiple-choice',
          options: [
            'Non, jamais.',
            'Oui, c\'est l\'intersection de ses diagonales.',
            'Seulement s\'il est un rectangle.',
            'Seulement s\'il est un carré.'
          ],
          answer: 1,
          points: 2,
          correction: 'Tout parallélogramme possède un centre de symétrie : c\'est le point d\'intersection de ses diagonales.'
        }
      ]
    }
  });
