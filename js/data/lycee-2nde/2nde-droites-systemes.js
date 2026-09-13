/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-droites-systemes.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-droites-systemes',
    level: 2, subject: 'maths',
    icon: '➗',
    title: 'Droites et systèmes d\'équations',
    subtitle: 'Équation de droite, systèmes 2×2',
    keywords: ['Droite', 'Pente', 'Ordonnée à l\'origine', 'Système', 'Substitution'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « L'équation y = mx + p décrit toute
         droite non verticale » : une définition, donc l'entrée que le cahier
         des charges proscrit.

         La situation retenue fait éprouver ce que ce chapitre a de propre :
         la CORRESPONDANCE entre un objet géométrique et un objet algébrique.
         Un système sans solution n'est pas un calcul raté, c'est la
         traduction algébrique de deux droites parallèles — et c'est l'erreur
         la plus tenace du chapitre, celle de l'élève qui recommence trois
         fois son calcul en croyant s'être trompé.

         Le test tient : on ne peut pas répondre « pourquoi le calcul
         aboutit-il à une absurdité ? » sans voir les deux droites. Entrée
         non décorative : c'est exactement la difficulté du chapitre. */
      intro: 'Deux amis suivent chacun un tarif de téléphone. Le premier paie $3$ € par gigaoctet plus $10$ € d\'abonnement, le second $3$ € par gigaoctet plus $18$ € d\'abonnement.<br/><br/>' +
        'À partir de combien de gigaoctets paient-ils la même chose ?<br/><br/>' +
        'Écris l\'égalité et résous : $3g + 10 = 3g + 18$. Les $3g$ disparaissent des deux côtés, et il reste $10 = 18$.<br/><br/>' +
        'Ce n\'est pas une erreur de calcul. Recommence autant de fois que tu veux, tu retrouveras la même absurdité.<br/><br/>' +
        'Regarde maintenant les deux tarifs sur un graphique : ce sont deux droites de <strong>même pente</strong>, l\'une au-dessus de l\'autre, séparées de huit euros pour toujours. Elles ne se croisent jamais. Il n\'existe donc aucune valeur de $g$ qui convienne, et le $10 = 18$ est exactement la façon dont l\'algèbre te dit cela.<br/><br/>' +
        'C\'est la grande idée de ce chapitre : une <strong>droite</strong> que tu dessines et une <strong>équation</strong> que tu écris sont deux visages du même objet. Chercher un point d\'intersection sur un dessin ou résoudre un système par le calcul, c\'est faire la même chose de deux façons.<br/><br/>' +
        'Tu sais déjà résoudre des systèmes depuis la troisième. Ce que la seconde ajoute, c\'est de pouvoir dire ce que le résultat <strong>signifie</strong> : une solution unique, aucune solution, ou une infinité — et à chaque fois, deux droites qui expliquent pourquoi.',
      definitions: [
        { term: 'Équation de droite', def: 'Toute droite non verticale s\'écrit $y = mx + p$ avec $m$ la pente et $p$ l\'ordonnée à l\'origine. Une droite verticale s\'écrit $x = k$.' },
        { term: 'Droites parallèles', def: 'Deux droites non verticales sont parallèles si elles ont la même pente : $m_1 = m_2$. Elles n\'ont aucun point commun (sauf si elles sont confondues).' },
        { term: 'Droites sécantes', def: 'Deux droites de pentes différentes ($m_1 \\neq m_2$). Elles se coupent en un unique point dont les coordonnées sont la solution du système.' },
        { term: 'Système d\'équations', def: 'Ensemble de deux (ou plus) équations à résoudre simultanément. La solution est le couple $(x ; y)$ vérifiant toutes les équations.' }
      ],
      method: {
        title: 'Résoudre un système par substitution',
        steps: [
          'Isoler une inconnue dans l\'une des équations. <strong>Exemple :</strong> De $x + y = 5$, on tire $y = 5 - x$.',
          'Substituer dans l\'autre équation pour obtenir une équation à une inconnue. <strong>Exemple :</strong> $2x + 3(5 - x) = 12$ → $2x + 15 - 3x = 12$ → $-x = -3$ → $x = 3$.',
          'Résoudre, puis trouver la deuxième inconnue par retour substitution. <strong>Exemple :</strong> $y = 5 - 3 = 2$. Solution : $(3 ; 2)$.',
          'Vérifier dans les deux équations d\'origine. <strong>Exemple :</strong> $3 + 2 = 5$ ✓ et $2 \\times 3 + 3 \\times 2 = 12$ ✓.'
        ]
      },
      example: {
        statement: 'Déterminer le point d\'intersection des droites $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$.',
        steps: [
          'Les pentes sont différentes ($m_1 = 2 \\neq m_2 = -1$) : les droites sont sécantes, il existe un unique point d\'intersection.',
          'On égalise : $2x + 1 = -x + 7$ → $3x = 6$ → $x = 2$.',
          'On remplace : $y = 2 \\times 2 + 1 = 5$.'
        ],
        answer: 'Le point d\'intersection est $(2 ; 5)$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Résolution graphique d\'un système',
        title: 'Intersection de $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$',
        description: 'Reconstruction de l\'exemple du cours : les deux droites sont sécantes et se coupent en un unique point, solution du système.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="droites-diagram-title droites-diagram-desc">
            <title id="droites-diagram-title">Intersection des droites d1 et d2</title>
            <desc id="droites-diagram-desc">Repere avec la droite d1 : y = 2x + 1, la droite d2 : y = -x + 7, et leur point d'intersection (2 ; 5), solution graphique du systeme.</desc>

            <line class="grid-line" x1="50" y1="40" x2="50" y2="340"></line>
            <line class="grid-line" x1="95" y1="40" x2="95" y2="340"></line>
            <line class="grid-line" x1="140" y1="40" x2="140" y2="340"></line>
            <line class="grid-line" x1="185" y1="40" x2="185" y2="340"></line>
            <line class="grid-line" x1="230" y1="40" x2="230" y2="340"></line>
            <line class="grid-line" x1="275" y1="40" x2="275" y2="340"></line>
            <line class="grid-line" x1="320" y1="40" x2="320" y2="340"></line>
            <line class="grid-line" x1="365" y1="40" x2="365" y2="340"></line>
            <line class="grid-line" x1="410" y1="40" x2="410" y2="340"></line>

            <line class="grid-line" x1="50" y1="340" x2="410" y2="340"></line>
            <line class="grid-line" x1="50" y1="310" x2="410" y2="310"></line>
            <line class="grid-line" x1="50" y1="280" x2="410" y2="280"></line>
            <line class="grid-line" x1="50" y1="250" x2="410" y2="250"></line>
            <line class="grid-line" x1="50" y1="220" x2="410" y2="220"></line>
            <line class="grid-line" x1="50" y1="190" x2="410" y2="190"></line>
            <line class="grid-line" x1="50" y1="160" x2="410" y2="160"></line>
            <line class="grid-line" x1="50" y1="130" x2="410" y2="130"></line>
            <line class="grid-line" x1="50" y1="100" x2="410" y2="100"></line>
            <line class="grid-line" x1="50" y1="70" x2="410" y2="70"></line>
            <line class="grid-line" x1="50" y1="40" x2="410" y2="40"></line>

            <line class="axis" x1="45" y1="310" x2="440" y2="310"></line>
            <line class="axis" x1="95" y1="355" x2="95" y2="20"></line>
            <text class="axis-label" x="446" y="314">x</text>
            <text class="axis-label" x="100" y="16">y</text>

            <text class="tick-label" x="50" y="326" text-anchor="middle">-1</text>
            <text class="tick-label" x="80" y="328" text-anchor="end">0</text>
            <text class="tick-label" x="140" y="326" text-anchor="middle">1</text>
            <text class="tick-label" x="185" y="326" text-anchor="middle">2</text>
            <text class="tick-label" x="230" y="326" text-anchor="middle">3</text>
            <text class="tick-label" x="275" y="326" text-anchor="middle">4</text>
            <text class="tick-label" x="320" y="326" text-anchor="middle">5</text>
            <text class="tick-label" x="365" y="326" text-anchor="middle">6</text>
            <text class="tick-label" x="410" y="326" text-anchor="middle">7</text>

            <text class="tick-label" x="85" y="344" text-anchor="end">-1</text>
            <text class="tick-label" x="85" y="284" text-anchor="end">1</text>
            <text class="tick-label" x="85" y="254" text-anchor="end">2</text>
            <text class="tick-label" x="85" y="224" text-anchor="end">3</text>
            <text class="tick-label" x="85" y="194" text-anchor="end">4</text>
            <text class="tick-label" x="85" y="164" text-anchor="end">5</text>
            <text class="tick-label" x="85" y="134" text-anchor="end">6</text>
            <text class="tick-label" x="85" y="104" text-anchor="end">7</text>
            <text class="tick-label" x="85" y="74" text-anchor="end">8</text>
            <text class="tick-label" x="85" y="44" text-anchor="end">9</text>

            <line class="curve-main" x1="50" y1="340" x2="275" y2="40"></line>
            <text class="annotation-label" x="205" y="52">d1 : y = 2x + 1</text>

            <line class="curve-main" x1="50" y1="70" x2="410" y2="310" style="stroke: color-mix(in srgb, var(--diagram-accent) 55%, var(--text));"></line>
            <text class="annotation-label" x="330" y="262">d2 : y = -x + 7</text>

            <line class="guide-line" x1="185" y1="310" x2="185" y2="160"></line>
            <line class="guide-line" x1="95" y1="160" x2="185" y2="160"></line>
            <circle class="plot-point" cx="185" cy="160" r="5"></circle>
            <text class="annotation-label" x="192" y="150">(2 ; 5)</text>

            <circle class="plot-point-alt" cx="95" cy="280" r="4"></circle>
            <text class="label-soft" x="60" y="272" text-anchor="end">(0 ; 1)</text>
            <circle class="plot-point-alt" cx="95" cy="100" r="4"></circle>
            <text class="label-soft" x="60" y="94" text-anchor="end">(0 ; 7)</text>
          </svg>
        `,
        notes: [
          'Les deux droites ont des pentes différentes ($m_1 = 2 \\neq m_2 = -1$) : elles sont donc <strong>sécantes</strong> et se coupent en un unique point.',
          'Le point d\'intersection $(2 ; 5)$ se lit graphiquement à la croisée des deux droites, et se retrouve par le calcul : $2x + 1 = -x + 7 \\Rightarrow x = 2$.',
          'Les ordonnées à l\'origine se lisent où chaque droite coupe l\'axe des $y$ : $d_1$ en $(0 ; 1)$, $d_2$ en $(0 ; 7)$.'
        ],
        reading: 'Le point $(2 ; 5)$ est la solution du système : c\'est le seul couple $(x ; y)$ qui vérifie à la fois $y = 2x + 1$ et $y = -x + 7$.',
        caption: 'Droites $d_1 : y = 2x + 1$ et $d_2 : y = -x + 7$, sécantes en $(2 ; 5)$ — solution graphique de l\'exemple du cours.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Une figure par MALENTENDU (cahier des charges, section 9). Les trois
         retenus viennent directement de la fiche professeur :
           1. conclure au parallélisme à partir de l'ordonnée à l'origine —
              on dessine le contre-exemple exact que la fiche recommande de
              faire tracer, deux droites de même $b$ qui se coupent ;
           2. croire qu'un système sans solution est un système raté — on
              montre que « pas de solution » est un RÉSULTAT géométrique,
              lisible : deux parallèles ne se rencontrent jamais ;
           3. ne donner qu'une seule coordonnée du point d'intersection — on
              descend et on remonte les deux projections, et la réponse est
              nommée comme un point.

         Chaque droite est tracée entre deux points calculés à partir de son
         équation. Le test scripts/manuel/tests/diagrams-2nde.test.js
         recalcule les pentes en pixels (égalité STRICTE pour les parallèles)
         et résout le point d'intersection des deux segments dessinés pour
         vérifier qu'il tombe exactement sur le rond marqué. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le contre-exemple qui tranche',
          title: 'Même ordonnée à l\'origine, et pourtant sécantes',
          description: 'On entend souvent que deux droites qui « partent du même endroit » sont parallèles. Un seul dessin suffit à écarter cette idée pour de bon.<br/><br/>Ces deux droites ont la <strong>même ordonnée à l\'origine</strong> $b = 5$ : elles coupent l\'axe vertical exactement au même point. Et loin d\'être parallèles, elles se croisent — précisément en ce point.<br/><br/>Ce qui décide du parallélisme, c\'est la <strong>pente</strong>, et elle seule.',
          svg: `
            <svg viewBox="0 0 320 250" role="img" aria-labelledby="ds2-memeb-title ds2-memeb-desc">
              <title id="ds2-memeb-title">Deux droites de meme ordonnee a l origine se coupent</title>
              <desc id="ds2-memeb-desc">Deux droites sont tracees dans un repere. La premiere monte de gauche a droite, la seconde descend. Toutes deux traversent l'axe vertical au meme point, d'ordonnee cinq. Elles se croisent donc en ce point unique. Leurs inclinaisons sont nettement differentes : l'une monte de deux graduations quand on avance d'une, l'autre descend d'une graduation quand on avance d'une.</desc>

              <!-- Echelle : 42 unites par unite d'abscisse, 17 par unite
                   d'ordonnee. Origine (158 ; 215). L'axe des ordonnees doit
                   monter jusqu'a 11, d'ou le pas vertical plus serre. Les
                   quatre extremites sont calculees a partir des equations :
                   pour y = 2x + 5, x = -3 donne y = -1 et x = 3 donne y = 11 ;
                   pour y = -x + 5, x = -3 donne y = 8 et x = 3 donne y = 2. -->
              <line class="grid-line" x1="32" y1="20" x2="32" y2="238"></line>
              <line class="grid-line" x1="74" y1="20" x2="74" y2="238"></line>
              <line class="grid-line" x1="116" y1="20" x2="116" y2="238"></line>
              <line class="grid-line" x1="200" y1="20" x2="200" y2="238"></line>
              <line class="grid-line" x1="242" y1="20" x2="242" y2="238"></line>
              <line class="grid-line" x1="284" y1="20" x2="284" y2="238"></line>
              <line class="grid-line" x1="26" y1="181" x2="292" y2="181"></line>
              <line class="grid-line" x1="26" y1="130" x2="292" y2="130"></line>
              <line class="grid-line" x1="26" y1="79" x2="292" y2="79"></line>
              <line class="grid-line" x1="26" y1="28" x2="292" y2="28"></line>

              <line class="axis" x1="26" y1="215" x2="300" y2="215"></line>
              <line class="axis" x1="158" y1="242" x2="158" y2="18"></line>
              <text class="axis-label" x="304" y="219">x</text>
              <text class="axis-label" x="163" y="16">y</text>

              <text class="tick-label" x="152" y="227" text-anchor="end">0</text>
              <text class="tick-label" x="74" y="227" text-anchor="middle">-2</text>
              <text class="tick-label" x="242" y="227" text-anchor="middle">2</text>
              <text class="tick-label" x="152" y="134" text-anchor="end">5</text>
              <text class="tick-label" x="152" y="32" text-anchor="end">11</text>

              <!-- y = 2x + 5 : pente en pixels (28 - 232) / (284 - 32). -->
              <line class="curve-main" x1="32" y1="232" x2="284" y2="28"></line>
              <!-- y = -x + 5 : pente en pixels (181 - 79) / (284 - 32). -->
              <line class="curve-main" x1="32" y1="79" x2="284" y2="181"></line>

              <circle class="plot-point" cx="158" cy="130" r="5"></circle>
              <text class="annotation-label" x="150" y="118" text-anchor="end">elles se coupent ici</text>

              <text class="tick-label" x="278" y="42" text-anchor="end">pente 2</text>
              <text class="tick-label" x="278" y="194" text-anchor="end">pente -1</text>
              <text class="label-soft" x="158" y="248" text-anchor="middle">même b, pentes différentes : sécantes</text>
            </svg>
          `,
          notes: [
            'Les deux droites valent $5$ en $x = 0$ : elles ont donc la même ordonnée à l\'origine, $b = 5$.',
            'Leurs pentes valent $2$ et $-1$ : elles sont <strong>différentes</strong>, donc les droites sont sécantes.',
            'Le critère à retenir est unique : deux droites sont parallèles <strong>si et seulement si</strong> leurs pentes sont égales. L\'ordonnée à l\'origine ne dit rien là-dessus.'
          ],
          reading: 'Observe que le point de croisement est justement celui où elles rencontrent l\'axe vertical. Partager le même $b$, c\'est partager un point — et partager un point, pour deux droites distinctes, c\'est exactement le contraire d\'être parallèles.',
          caption: 'Deux droites de même ordonnée à l\'origine $b = 5$ et de pentes $2$ et $-1$ : elles se coupent en $(0\\,;\\,5)$.'
        },
        {
          theme: 'maths',
          kicker: 'Un résultat, pas un échec',
          title: 'Pas de solution, cela se voit',
          description: 'Quand un système ne donne aucune solution, beaucoup d\'élèves pensent avoir raté un calcul. Il n\'en est rien : « pas de solution » est un <strong>résultat</strong>, et il se lit sur le dessin.<br/><br/>Ces deux droites ont exactement la <strong>même pente</strong>. Elles avancent côte à côte, séparées par un écart qui ne se réduit jamais. Résoudre le système, c\'est chercher un point commun : il n\'y en a aucun, et le dessin le montre sans ambiguïté.',
          svg: `
            <svg viewBox="0 0 280 260" role="img" aria-labelledby="ds2-paralleles-title ds2-paralleles-desc">
              <title id="ds2-paralleles-title">Deux droites paralleles et un systeme sans solution</title>
              <desc id="ds2-paralleles-desc">Deux droites de meme inclinaison montent de gauche a droite dans un repere, sans jamais se rencontrer. L'ecart vertical qui les separe est mesure a deux endroits differents par deux segments en tirets : il vaut quatre graduations dans les deux cas. Les deux droites ne se croiseront donc jamais, et le systeme correspondant n'a aucune solution.</desc>

              <!-- Echelle : 42 unites par unite d'abscisse, 14 par unite
                   d'ordonnee. Origine (110 ; 200). Les extremites sont
                   calculees : pour y = 2x + 1, x = -2 donne y = -3 et x = 3
                   donne y = 7 ; pour y = 2x + 5, x = -2 donne y = 1 et x = 3
                   donne y = 11. Les deux pentes en pixels valent donc
                   exactement (102 - 242) / (236 - 26) : c'est ce que le test
                   verifie, en egalite stricte. -->
              <line class="grid-line" x1="26" y1="30" x2="26" y2="250"></line>
              <line class="grid-line" x1="68" y1="30" x2="68" y2="250"></line>
              <line class="grid-line" x1="152" y1="30" x2="152" y2="250"></line>
              <line class="grid-line" x1="194" y1="30" x2="194" y2="250"></line>
              <line class="grid-line" x1="236" y1="30" x2="236" y2="250"></line>
              <line class="grid-line" x1="20" y1="242" x2="250" y2="242"></line>
              <line class="grid-line" x1="20" y1="186" x2="250" y2="186"></line>
              <line class="grid-line" x1="20" y1="130" x2="250" y2="130"></line>
              <line class="grid-line" x1="20" y1="74" x2="250" y2="74"></line>
              <line class="grid-line" x1="20" y1="46" x2="250" y2="46"></line>

              <line class="axis" x1="20" y1="200" x2="256" y2="200"></line>
              <line class="axis" x1="110" y1="254" x2="110" y2="28"></line>
              <text class="axis-label" x="260" y="204">x</text>
              <text class="axis-label" x="115" y="26">y</text>

              <text class="tick-label" x="104" y="212" text-anchor="end">0</text>
              <text class="tick-label" x="68" y="212" text-anchor="middle">-1</text>
              <text class="tick-label" x="194" y="212" text-anchor="middle">2</text>
              <text class="tick-label" x="104" y="190" text-anchor="end">1</text>
              <text class="tick-label" x="104" y="134" text-anchor="end">5</text>
              <text class="tick-label" x="104" y="50" text-anchor="end">11</text>

              <line class="curve-main" x1="26" y1="242" x2="236" y2="102"></line>
              <line class="curve-main" x1="26" y1="186" x2="236" y2="46"></line>

              <!-- Deux mesures de l'ecart, prises a deux abscisses eloignees.
                   Elles valent 56 unites de viewBox l'une comme l'autre, soit
                   quatre graduations : c'est la preuve dessinee que l'ecart
                   ne se referme pas. Les cotes sont posees a cote des
                   segments, jamais dessus. -->
              <line class="guide-line" x1="68" y1="214" x2="68" y2="158"></line>
              <line class="guide-line" x1="194" y1="130" x2="194" y2="74"></line>
              <text class="tick-label" x="62" y="188" text-anchor="end">4</text>
              <text class="tick-label" x="200" y="106" text-anchor="start">4</text>

              <text class="annotation-label" x="244" y="96" text-anchor="end">y = 2x + 1</text>
              <text class="annotation-label" x="244" y="40" text-anchor="end">y = 2x + 5</text>
              <text class="label-soft" x="140" y="256" text-anchor="middle">aucun point commun, donc aucune solution</text>
            </svg>
          `,
          notes: [
            'Les deux équations ont la même pente $2$ mais des ordonnées à l\'origine différentes, $1$ et $5$ : les droites sont parallèles et <strong>distinctes</strong>.',
            'Par le calcul, $2x + 1 = 2x + 5$ conduit à $1 = 5$, qui est faux quel que soit $x$. Aucune valeur ne convient : l\'ensemble des solutions est vide.',
            'Les deux écarts mesurés valent $4$ tous les deux, et ce n\'est pas un hasard : l\'écart entre les deux droites vaut $5 - 1 = 4$ à n\'importe quelle abscisse.'
          ],
          reading: 'Quand ton calcul aboutit à une égalité fausse comme $1 = 5$, ne cherche pas l\'erreur : tu viens de démontrer que les droites sont parallèles. Écris simplement que le système n\'a pas de solution, c\'est une réponse complète et juste.',
          caption: 'Droites parallèles $y = 2x + 1$ et $y = 2x + 5$ : écart constant de $4$, donc système sans solution.'
        },
        {
          theme: 'maths',
          kicker: 'La réponse est un point',
          title: 'Deux coordonnées, pas une',
          description: 'Résoudre un système, c\'est trouver le <strong>couple</strong> $(x\\,;\\,y)$ qui convient aux deux équations à la fois. Beaucoup d\'élèves s\'arrêtent dès qu\'ils ont trouvé $x$ et rendent une demi-réponse.<br/><br/>Le point d\'intersection est ici marqué, et deux traits en tirets en descendent : l\'un rejoint l\'axe des abscisses, l\'autre l\'axe des ordonnées. <strong>Les deux lectures font partie de la réponse.</strong>',
          svg: `
            <svg viewBox="0 0 320 320" role="img" aria-labelledby="ds2-solution-title ds2-solution-desc">
              <title id="ds2-solution-title">Le point d intersection donne les deux coordonnees</title>
              <desc id="ds2-solution-desc">Deux droites se croisent en un point unique dans un repere. Depuis ce point, un trait en tirets descend verticalement jusqu'a l'axe horizontal, ou il indique l'abscisse deux. Un autre trait en tirets part horizontalement vers la gauche jusqu'a l'axe vertical, ou il indique l'ordonnee deux. Les deux lectures ensemble forment la solution du systeme.</desc>
              <defs>
                <marker id="ds2-solution-pointe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--secondary)"></path>
                </marker>
              </defs>

              <!-- Echelle : 56 unites par unite d'abscisse, 16 par unite
                   d'ordonnee. Origine (56 ; 216). Les extremites sont
                   calculees : pour y = 3x - 4, x = -0,5 donne y = -5,5 et
                   x = 4 donne y = 8 ; pour y = -x + 4, x = -0,5 donne y = 4,5
                   et x = 4 donne y = 0. Le point d'intersection resolu
                   algebriquement, 3x - 4 = -x + 4, vaut x = 2 et y = 2 : en
                   viewBox, (168 ; 184). Le test recalcule l'intersection des
                   deux segments dessines et verifie qu'elle tombe exactement
                   sur ce rond. -->
              <line class="grid-line" x1="56" y1="80" x2="56" y2="300"></line>
              <line class="grid-line" x1="112" y1="80" x2="112" y2="300"></line>
              <line class="grid-line" x1="168" y1="80" x2="168" y2="300"></line>
              <line class="grid-line" x1="224" y1="80" x2="224" y2="300"></line>
              <line class="grid-line" x1="280" y1="80" x2="280" y2="300"></line>
              <line class="grid-line" x1="24" y1="280" x2="300" y2="280"></line>
              <line class="grid-line" x1="24" y1="248" x2="300" y2="248"></line>
              <line class="grid-line" x1="24" y1="184" x2="300" y2="184"></line>
              <line class="grid-line" x1="24" y1="152" x2="300" y2="152"></line>
              <line class="grid-line" x1="24" y1="120" x2="300" y2="120"></line>
              <line class="grid-line" x1="24" y1="88" x2="300" y2="88"></line>

              <line class="axis" x1="24" y1="216" x2="306" y2="216"></line>
              <line class="axis" x1="56" y1="312" x2="56" y2="78"></line>
              <text class="axis-label" x="310" y="220">x</text>
              <text class="axis-label" x="61" y="76">y</text>

              <text class="tick-label" x="48" y="228" text-anchor="end">0</text>
              <text class="tick-label" x="112" y="228" text-anchor="middle">1</text>
              <text class="tick-label" x="224" y="228" text-anchor="middle">3</text>
              <text class="tick-label" x="280" y="228" text-anchor="middle">4</text>
              <text class="tick-label" x="48" y="156" text-anchor="end">4</text>
              <text class="tick-label" x="48" y="92" text-anchor="end">8</text>

              <line class="curve-main" x1="28" y1="304" x2="280" y2="88"></line>
              <line class="curve-main" x1="28" y1="144" x2="280" y2="216"></line>

              <!-- Les deux projections. Chacune porte UNE pointe de fleche et
                   une seule, dirigee vers l'axe qu'elle interroge. -->
              <line class="guide-line" x1="168" y1="184" x2="168" y2="212" marker-end="url(#ds2-solution-pointe)"></line>
              <line class="guide-line" x1="168" y1="184" x2="60" y2="184" marker-end="url(#ds2-solution-pointe)"></line>

              <circle class="plot-point" cx="168" cy="184" r="5"></circle>
              <text class="annotation-label" x="176" y="178" text-anchor="start">le point solution</text>
              <text class="annotation-label" x="168" y="244" text-anchor="middle">on lit x = 2</text>
              <text class="annotation-label" x="50" y="176" text-anchor="end">on lit y = 2</text>

              <text class="tick-label" x="272" y="100" text-anchor="end">y = 3x - 4</text>
              <text class="tick-label" x="272" y="208" text-anchor="end">y = -x + 4</text>
              <text class="label-soft" x="168" y="312" text-anchor="middle">la solution s'écrit (2 ; 2), avec ses deux nombres</text>
            </svg>
          `,
          notes: [
            'Par le calcul : $3x - 4 = -x + 4$ donne $4x = 8$, donc $x = 2$. Le travail n\'est pas fini pour autant.',
            'On remonte alors dans l\'une des deux équations : $y = -2 + 4 = 2$. La solution est le couple $(2\\,;\\,2)$.',
            'Vérifie toujours dans l\'<strong>autre</strong> équation, celle que tu n\'as pas utilisée : $3 \\times 2 - 4 = 2$. C\'est bien cohérent, le point convient aux deux droites.'
          ],
          reading: 'Le point d\'intersection est le seul endroit du plan qui appartient aux deux droites en même temps : voilà pourquoi il est <strong>la</strong> solution. Et comme un point du plan a toujours deux coordonnées, ta réponse en a deux aussi. Une réponse à un seul nombre est forcément incomplète.',
          caption: 'Droites $y = 3x - 4$ et $y = -x + 4$ sécantes en $(2\\,;\\,2)$ : les deux projections donnent les deux coordonnées de la solution.'
        }
      ],
      formulas: [
        'Équation de droite : $y = mx + p$',
        'Pente : $m = \\dfrac{y_B - y_A}{x_B - x_A}$',
        'Système : $\\begin{cases} y = m_1 x + p_1 \\\\ y = m_2 x + p_2 \\end{cases} \\Rightarrow m_1 x + p_1 = m_2 x + p_2$'
      ],
      recap: [
        'Toute droite non verticale a une équation $y = mx + p$ ; une droite verticale s\'écrit $x = k$.',
        'Même pente → droites parallèles (pas de solution) ; pentes différentes → un unique point d\'intersection.',
        'Par substitution : isoler, remplacer, résoudre, puis remonter à la deuxième inconnue.',
        'Toujours vérifier la solution dans les deux équations du système.'
      ],
      piege: 'Si $m_1 = m_2$ et $p_1 \\ne p_2$, les droites sont parallèles : le système n\'a pas de solution !'
    },
    quiz: [
      { q: 'Un élève affirme que les droites $y = 2x + 5$ et $y = 2x - 3$ se croisent en $x = 4$. Pourquoi est-ce impossible ?', options: ['Ces droites ont la même pente ($m=2$) — elles sont parallèles et ne se croisent jamais (et $2x+5=2x-3 \\Rightarrow 5=-3$, contradiction)', 'L\'élève a raison, elles se croisent en $x=4$', 'Elles se croisent uniquement si on change les signes', 'Impossible à dire sans le graphe'], answer: 0, correction: 'Même pente $m=2$ → droites parallèles. Algébriquement, $2x+5=2x-3 \\Rightarrow 5=-3$, qui est une contradiction. Il n\'existe aucun $x$ solution.' },
      { q: 'L\'équation $y=3x-1$ et $y=-x+7$ : quelle est l\'abscisse du point d\'intersection ?', options: ['$x=1$', '$x=2$', '$x=3$', '$x=4$'], answer: 1, correction: '$3x-1=-x+7 \\Rightarrow 4x=8 \\Rightarrow x=2$.' },
      { q: 'Deux droites de pente $m=4$ sont-elles sécantes ?', options: ['Oui, toujours', 'Non, elles sont parallèles', 'Oui, si même ordonnée à l\'origine', 'Impossible à dire'], answer: 1, correction: 'Même pente → droites parallèles (ou confondues). Elles ne se coupent pas si $p_1\\ne p_2$.' },
      { q: 'Un système $\\begin{cases} 2x + y = 7 \\\\ 4x + 2y = 14 \\end{cases}$ admet :', options: ['Une infinité de solutions (les deux équations sont proportionnelles : la 2e est le double de la 1re)', 'Aucune solution', 'Exactement une solution : $(2;3)$', 'Exactement deux solutions'], answer: 0, correction: 'La 2e équation est $2 \\times$ la 1re : $4x + 2y = 2(2x + y) = 14$. Les deux droites sont confondues. Tout couple $(x;y)$ vérifiant $2x + y = 7$ est solution : il y en a une infinité. C\'est un cas particulier à distinguer du cas « parallèles strictes » (aucune solution).' },
      { q: 'La droite $d$ passe par $A(1;5)$ et $B(3;5)$. Son équation est :', options: ['$y = 5$ (droite horizontale, pente nulle)', '$x = 5$', '$y = 5x$', '$y = x + 4$'], answer: 0, correction: 'Les ordonnées sont identiques ($y_A = y_B = 5$) : la droite est horizontale. La pente est $m = \\frac{5-5}{3-1} = 0$, donc $y = 0 \\cdot x + 5 = 5$. Ne pas confondre avec une droite verticale ($x = k$).' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 9 énoncés tirés, 3 moules, **1 seule tâche distincte** —
       un problème de système « deux articles, deux prix », habillé trois fois
       (un cinéma, un magasin, un traiteur). Tout le reste du chapitre (pente,
       parallélisme, ordonnée à l'origine, intersection de deux droites) n'était
       travaillé par AUCUN exercice de la banque.

       Cinq tâches maintenant, qui couvrent enfin le chapitre. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['systeme', 'pente', 'ordonnee', 'intersection', 'position']);

        /* Écritures normalisées, ajoutées le 2026-09-13 après relecture d'un
           TIRAGE RÉEL (et non du code) : la banque imprimait « $y = -1x + 11$ »
           et « $y = 1x - 2$ ». Un coefficient valant 1 ou -1 ne s'écrit pas,
           on écrit « x » et « -x ». Défaut invisible à la relecture du
           générateur, évident sur la page.

           `signe(0)` renvoie la chaîne vide, pour ne pas imprimer « + 0 ». */
        const coef = (m) => (m === 1 ? '' : (m === -1 ? '-' : String(m)));
        const signe = (n) => (n === 0 ? '' : (n < 0 ? ' - ' + Math.abs(n) : ' + ' + n));

        /* Tâche 1 — le système issu d'une situation (la tâche historique). */
        if (tache === 'systeme') {
          const ctx = pick([
            { intro: 'Un cinéma vend des places adultes à', objA: 'adultes', objB: 'enfants' },
            { intro: 'Un magasin vend des stylos à', objA: 'stylos', objB: 'cahiers' },
            { intro: 'Un traiteur propose des sandwichs à', objA: 'sandwichs', objB: 'boissons' }
          ]);
          const x = rand(2, 6), y = rand(1, 5);
          const total1 = x + y;
          const a2 = rand(2, 5);
          let b2 = rand(2, 5);
          while (a2 === b2) { b2 = rand(2, 5); }
          const total2 = a2 * x + b2 * y;
          return {
            statement: `${ctx.intro} $${a2}$ € l'un et des ${ctx.objB} à $${b2}$ € l'un. Un client achète $${total1}$ articles au total, pour $${total2}$ €.<br/><br/>Pose et résous le système donnant le nombre de ${ctx.objA} ($x$) et de ${ctx.objB} ($y$).<br/><br/>Donne le nombre de <strong>${ctx.objA}</strong>.`,
            answer: x, tolerance: 0, unit: '',
            hint: `Deux informations, donc deux équations : le nombre total d'articles, puis le prix total. Système : $\\begin{cases} x + y = ${total1} \\\\ ${a2}x + ${b2}y = ${total2} \\end{cases}$`,
            solution: [
              `Le système à résoudre est $\\begin{cases} x + y = ${total1} \\\\ ${a2}x + ${b2}y = ${total2} \\end{cases}$`,
              `De la première équation : $y = ${total1} - x$.`,
              `En substituant dans la seconde : $${a2}x + ${b2}(${total1} - x) = ${total2}$, soit $${coef(a2 - b2)}x = ${total2 - b2 * total1}$.`,
              `D'où $x = ${x}$, puis $y = ${y}$.`
            ]
          };
        }

        /* Tâche 2 — pente à partir de deux points. */
        if (tache === 'pente') {
          const xa = rand(-4, 3);
          const xb = xa + rand(2, 5);
          const m = pick([-3, -2, -1, 2, 3, 4]);
          const p = rand(-5, 5);
          const ya = m * xa + p, yb = m * xb + p;
          return {
            statement: `La droite $d$ passe par les points $A(${xa} ; ${ya})$ et $B(${xb} ; ${yb})$.<br/><br/>Calcule sa pente $m$.`,
            answer: m, tolerance: 0, unit: '',
            hint: `La pente se lit comme un rapport d'accroissements : $m = \\dfrac{y_B - y_A}{x_B - x_A}$. Attention à l'ordre : le même point doit être « premier » en haut et en bas.`,
            solution: [
              `$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{${yb} - (${ya})}{${xb} - (${xa})}$`,
              `$m = \\dfrac{${yb - ya}}{${xb - xa}} = ${m}$`,
              `La droite ${m > 0 ? 'monte' : 'descend'} : quand $x$ augmente de $1$, $y$ ${m > 0 ? 'augmente' : 'diminue'} de $${Math.abs(m)}$.`
            ]
          };
        }

        /* Tâche 3 — ordonnée à l'origine, connaissant un point et la pente. */
        if (tache === 'ordonnee') {
          const m = pick([-4, -3, -2, 2, 3, 5]);
          const xa = rand(1, 6);
          const p = rand(-8, 8);
          const ya = m * xa + p;
          return {
            statement: `La droite $d$ a pour pente $m = ${m}$ et passe par le point $A(${xa} ; ${ya})$.<br/><br/>Calcule son ordonnée à l'origine $p$.`,
            answer: p, tolerance: 0, unit: '',
            hint: `L'équation de la droite est $y = ${coef(m)}x + p$. Comme $A$ est SUR la droite, ses coordonnées vérifient cette équation : remplace $x$ et $y$ par celles de $A$.`,
            solution: [
              `L'équation est de la forme $y = ${coef(m)}x + p$, et le point $A$ appartient à la droite.`,
              `Ses coordonnées vérifient donc l'équation : $${ya} = ${m} \\times ${xa} + p$, soit $${ya} = ${m * xa} + p$.`,
              `D'où $p = ${ya} - (${m * xa}) = ${p}$. La droite coupe l'axe des ordonnées en $${p}$.`
            ]
          };
        }

        /* Tâche 4 — intersection de deux droites données par leur équation. */
        if (tache === 'intersection') {
          const xi = rand(-3, 5);
          const m1 = pick([2, 3, -2, 4]);
          let m2 = pick([-3, -1, 1, 5]);
          while (m2 === m1) { m2 = pick([-3, -1, 1, 5]); }
          const p1 = rand(-6, 6);
          const yi = m1 * xi + p1;
          const p2 = yi - m2 * xi;
          return {
            statement: `On considère les droites d'équations $y = ${coef(m1)}x${signe(p1)}$ et $y = ${coef(m2)}x${signe(p2)}$.<br/><br/>Calcule l'abscisse $x$ de leur point d'intersection.`,
            answer: xi, tolerance: 0, unit: '',
            hint: `Au point d'intersection, les deux droites ont la MÊME ordonnée pour la même abscisse. Il suffit donc d'égaler les deux expressions de $y$.`,
            solution: [
              `Au point d'intersection, les deux expressions de $y$ sont égales : $${coef(m1)}x${signe(p1)} = ${coef(m2)}x${signe(p2)}$.`,
              `On regroupe les $x$ d'un côté : $${coef(m1 - m2)}x = ${p2 - p1}$.`,
              `D'où $x = ${xi}$ (et l'ordonnée correspondante vaut $y = ${yi}$).`
            ]
          };
        }

        /* Tâche 5 — position relative. Réponse codée : 1 parallèles,
           0 sécantes. C'est une lecture de coefficients, sans calcul. */
        const m1 = pick([-3, -2, 2, 3, 4]);
        const paralleles = pick([true, false]);
        let m2 = m1;
        if (!paralleles) { while (m2 === m1) { m2 = pick([-3, -2, 1, 2, 3, 5]); } }
        const p1 = rand(-5, 5);
        let p2 = rand(-5, 5);
        while (paralleles && p2 === p1) { p2 = rand(-5, 5); }
        return {
          statement: `Les droites d'équations $y = ${coef(m1)}x${signe(p1)}$ et $y = ${coef(m2)}x${signe(p2)}$ sont-elles parallèles ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
          answer: paralleles ? 1 : 0, tolerance: 0, unit: '',
          hint: `Deux droites non verticales sont parallèles si et seulement si elles ont la MÊME pente. L'ordonnée à l'origine ne joue aucun rôle ici : elle dit seulement où chaque droite coupe l'axe vertical.`,
          solution: [
            `On compare les pentes : celle de la première vaut $${m1}$, celle de la seconde $${m2}$.`,
            paralleles
              ? `Les deux pentes sont égales, donc les droites ont la même inclinaison : elles sont parallèles. Comme $${p1} \\neq ${p2}$, elles sont distinctes et n'ont aucun point commun.`
              : `Les deux pentes diffèrent, donc les droites n'ont pas la même inclinaison : elles se coupent en un unique point. Elles sont sécantes.`,
            `Réponse : $${paralleles ? 1 : 0}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un agriculteur dispose de $200$ hectares et d\'un budget de $36\\,000$ €. Il veut cultiver du blé (coût $150$ €/ha, bénéfice $300$ €/ha) et du tournesol (coût $200$ €/ha, bénéfice $250$ €/ha).',
      tasks: [
        'Poser le système de contraintes : surface totale $\\leq 200$ ha et budget $\\leq 36\\,000$ €.',
        'Résoudre le système d\'égalités pour trouver la répartition qui utilise exactement toute la surface et tout le budget.',
        'Calculer le bénéfice total avec cette répartition.'
      ],
      solutions: [
        '$\\begin{cases} x + y = 200 \\\\ 150x + 200y = 36\\,000 \\end{cases}$ où $x$ = ha de blé, $y$ = ha de tournesol.',
        'De (1) : $x = 200 - y$. Dans (2) : $150(200-y) + 200y = 36\\,000 \\Rightarrow 30\\,000 + 50y = 36\\,000 \\Rightarrow y = 120$. Donc $x = 80$.',
        'Bénéfice : $300 \\times 80 + 250 \\times 120 = 24\\,000 + 30\\,000 = 54\\,000$ €.'
      ],
      finalAnswer: '$80$ ha de blé et $120$ ha de tournesol, pour un bénéfice de $54\\,000$ €.'
    },

    evaluation: {
      title: 'Évaluation — Droites et systèmes d\'équations',
      duration: '30 min',
      questions: [
        {
          statement: 'La droite $d$ passe par $A(1 ; 3)$ et $B(4 ; 9)$. Calculer sa pente $m$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$m = \\dfrac{y_B - y_A}{x_B - x_A} = \\dfrac{9 - 3}{4 - 1} = \\dfrac{6}{3} = 2$.'
        },
        {
          statement: 'Les droites $y = 3x + 1$ et $y = 3x - 4$ sont :',
          type: 'multiple-choice',
          options: ['Sécantes', 'Parallèles', 'Confondues', 'Perpendiculaires'],
          answer: 1,
          points: 2,
          correction: 'Les deux droites ont la même pente $m = 3$ mais des ordonnées à l\'origine différentes ($1 \\neq -4$). Elles sont donc parallèles (aucun point d\'intersection).'
        },
        {
          statement: 'Résoudre le système $\\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}$. Donner l\'abscisse $x$ du point d\'intersection.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On égalise : $2x + 1 = -x + 7 \\Rightarrow 3x = 6 \\Rightarrow x = 2$. (Puis $y = 2 \\times 2 + 1 = 5$, soit le point $(2 ; 5)$.)'
        },
        {
          statement: 'Résoudre le système $\\begin{cases} x + y = 10 \\\\ 3x - y = 6 \\end{cases}$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'De la 1re équation : $y = 10 - x$. Substitution dans la 2e : $3x - (10 - x) = 6 \\Rightarrow 4x - 10 = 6 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. (Et $y = 6$.)'
        },
        {
          statement: 'Quelle est l\'ordonnée à l\'origine de la droite passant par $A(2 ; 5)$ et de pente $m = -3$ ?',
          type: 'numeric',
          answer: 11,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$y = mx + p \\Rightarrow 5 = -3 \\times 2 + p \\Rightarrow 5 = -6 + p \\Rightarrow p = 11$. L\'ordonnée à l\'origine est $11$.'
        }
      ]
    }
  });
