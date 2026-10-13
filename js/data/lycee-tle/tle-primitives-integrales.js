/* =========================================================
   Spark Learning – data/lycee-tle/tle-primitives-integrales.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-primitives-integrales',
    level: 2, subject: 'maths',
    icon: '∫',
    title: 'Intégration et Primitives',
    subtitle: 'Intégrale définie, aire sous la courbe, primitives',
    keywords: ['Primitive', 'Intégrale', 'Aire', 'Conditions initiales'],
    physics: 'Calcul du travail d\'une force, équations horaires',

    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14 (chapitre pilote de la terminale).
         L'ancienne version ouvrait sur « L'intégrale est à la fois la somme
         infinie de tranches... » — c'est-à-dire sur la définition, que le
         cahier des charges proscrit : le test est « si on peut répondre à la
         question d'ouverture sans la notion du chapitre, la question est mal
         choisie », et une définition ne pose aucune question.

         La question retenue ne se résout par AUCUN outil déjà connu de
         l'élève : un rectangle, un triangle, un trapèze ont des formules
         d'aire ; une surface à bord courbe n'en a pas. Il faut inventer autre
         chose, et c'est exactement ce que l'intégrale est. On évite aussi le
         travers inverse (l'anecdote plaquée) : la difficulté est réelle et
         l'élève peut la constater lui-même en essayant. */
      intro: 'Voici une question à laquelle aucune formule de ton collège ne répond.<br/><br/>Tu sais calculer l\'aire d\'un rectangle, d\'un triangle, d\'un disque. Mais quelle est l\'aire de la surface comprise entre l\'axe des abscisses et la courbe de $f(x) = x^2$, entre $x = 0$ et $x = 3$ ?<br/><br/>Ce n\'est ni un rectangle, ni un triangle, ni un morceau de disque. Son bord supérieur est <strong>courbe</strong>, et il l\'est différemment en chaque point. Essaie : tu peux l\'<strong>encadrer</strong> — elle est plus grande que le triangle qu\'on lit dessous, plus petite que le rectangle de hauteur $9$ — mais tu ne peux pas la <strong>calculer</strong>.<br/><br/>La sortie est inattendue. Découpe la surface en tranches verticales très fines. Chaque tranche est presque un rectangle, dont l\'aire est facile. Additionne-les toutes : tu obtiens une valeur approchée, et elle devient de plus en plus juste à mesure que les tranches s\'affinent.<br/><br/>C\'est cette limite qu\'on appelle l\'<strong>intégrale</strong>, notée $\\int_0^3 x^2\\,dx$ — le signe $\\int$ est un $S$ allongé, le $S$ de « somme ».<br/><br/>Et voici le coup de théâtre du chapitre, qui a trois siècles : pour calculer cette somme infinie, il suffit de <strong>remonter une dérivation</strong>. Trouver une fonction $F$ dont la dérivée est $f$, puis faire une soustraction. Rien de plus.<br/><br/>Une question d\'aire se règle par un calcul de dérivée : c\'est le lien le plus surprenant de toute l\'analyse, et il porte un nom — le théorème fondamental.',
      definitions: [
        { term: 'Primitive', def: 'Une fonction $F$ est une <strong>primitive</strong> de $f$ sur un intervalle $I$ si $F\'(x) = f(x)$ pour tout $x \\in I$. Deux primitives d\'une même fonction diffèrent d\'une constante : si $F$ est une primitive de $f$, toutes les primitives sont $F + C$ avec $C \\in \\mathbb{R}$.' },
        { term: 'Intégrale définie', def: '$\\int_a^b f(x)\\,dx = F(b) - F(a)$ où $F$ est une primitive quelconque de $f$. C\'est l\'<strong>aire signée</strong> entre la courbe de $f$ et l\'axe des abscisses sur $[a;b]$.' },
        { term: 'Aire signée', def: 'L\'intégrale peut être négative si la courbe est SOUS l\'axe $Ox$. L\'aire géométrique (toujours positive) est $\\int_a^b |f(x)|\\,dx$.' },
        { term: 'Valeur moyenne', def: 'La valeur moyenne de $f$ sur $[a;b]$ est $\\mu = \\dfrac{1}{b-a}\\int_a^b f(x)\\,dx$. C\'est la hauteur du rectangle de même aire que la surface sous la courbe.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Primitive de fonctions usuelles</strong> : trouver $F(x)$ telle que $F\'(x) = f(x)$ ; la primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1}$ (pour $n \\neq -1$).',
          '<strong>Intégrale définie</strong> : $\\int_a^b f(x)\\,dx = F(b) - F(a)$ (le crochet).',
          '<strong>Conditions initiales</strong> : utiliser les conditions initiales pour fixer la constante d\'intégration $C$. Si $v(0) = v_0$, on en déduit $C$.'
        ]
      },
      example: {
        statement: 'Calculer l\'aire entre la courbe de $f(x) = x^2 - 1$ et l\'axe des abscisses sur $[0;2]$.',
        steps: [
          'On cherche la primitive de $f(x) = x^2 - 1$ : $F(x) = \\dfrac{x^3}{3} - x$.',
          'On calcule l\'intégrale : $\\int_0^2 (x^2 - 1)\\,dx = \\left[\\dfrac{x^3}{3} - x\\right]_0^2 = \\left(\\dfrac{8}{3} - 2\\right) - 0 = \\dfrac{2}{3}$.',
          'Attention : $f$ change de signe en $x = 1$. Sur $[0;1]$, $f < 0$ et sur $[1;2]$, $f > 0$.',
          'L\'aire géométrique est : $\\int_0^1 |f(x)|\\,dx + \\int_1^2 f(x)\\,dx = \\dfrac{2}{3} + \\dfrac{4}{3} = 2$.'
        ],
        answer: 'L\'intégrale vaut $\\dfrac{2}{3}$, mais l\'aire géométrique réelle est $2$ unités d\'aire (il faut tenir compte du changement de signe).'
      },
      formulas: [
        '$\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C$ (pour $n \\neq -1$)',
        '$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$',
        '$\\int e^x\\,dx = e^x + C$',
        '$\\int \\cos x\\,dx = \\sin x + C$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Aire signée',
        title: 'Intégrale de $f(x) = x^2 - 1$ sur $[0\\,;\\,2]$ (exemple du cours)',
        description: 'La courbe passe sous l\'axe des abscisses sur $[0\\,;\\,1]$ (aire hachurée en rouge, contribution <strong>négative</strong>) puis au-dessus sur $[1\\,;\\,2]$ (aire hachurée en vert, contribution <strong>positive</strong>). L\'intégrale $\\int_0^2 f(x)\\,dx = \\dfrac{2}{3}$ est la somme signée de ces deux aires ; l\'aire géométrique réelle (sans compensation de signe) vaut $2$.',
        svg: `
          <svg viewBox="0 0 420 300" role="img" aria-labelledby="integrale-title integrale-desc">
            <title id="integrale-title">Aires positive et negative de f(x) = x^2 - 1 sur [0;2]</title>
            <desc id="integrale-desc">Courbe parabolique passant sous l'axe des abscisses entre 0 et 1 (aire negative hachuree en rouge) puis au-dessus entre 1 et 2 (aire positive hachuree en vert). L'integrale signee vaut 2/3 et l'aire geometrique totale vaut 2.</desc>

            <defs>
              <pattern id="conv-int-hatch-neg" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="color-mix(in srgb, var(--error) 10%, transparent)"></rect>
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--error)" stroke-width="1.6" opacity="0.6"></line>
              </pattern>
              <pattern id="conv-int-hatch-pos" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                <rect width="8" height="8" fill="color-mix(in srgb, var(--success) 10%, transparent)"></rect>
                <line x1="0" y1="0" x2="0" y2="8" stroke="var(--success)" stroke-width="1.6" opacity="0.6"></line>
              </pattern>
            </defs>

            <!-- grille verticale -->
            <line class="grid-line" x1="94.2" y1="40" x2="94.2" y2="235"></line>
            <line class="grid-line" x1="225.0" y1="40" x2="225.0" y2="235"></line>
            <line class="grid-line" x1="355.8" y1="40" x2="355.8" y2="235"></line>

            <!-- grille horizontale -->
            <line class="grid-line" x1="55" y1="225.1" x2="395" y2="225.1"></line>
            <line class="grid-line" x1="55" y1="159.0" x2="395" y2="159.0"></line>
            <line class="grid-line" x1="55" y1="125.9" x2="395" y2="125.9"></line>
            <line class="grid-line" x1="55" y1="92.9" x2="395" y2="92.9"></line>

            <!-- aire negative [0;1], hachures rouges -->
            <polygon points="94.2,192.0 94.2,225.1 107.3,224.8 120.4,223.8 133.5,222.1 146.5,219.8 159.6,216.8 172.7,213.2 185.8,208.9 198.8,203.9 211.9,198.3 225.0,192.0" fill="url(#conv-int-hatch-neg)" stroke="none"></polygon>

            <!-- aire positive [1;2], hachures vertes -->
            <polygon points="225.0,192.0 238.1,185.1 251.2,177.5 264.2,169.2 277.3,160.3 290.4,150.7 303.5,140.5 316.5,129.6 329.6,118.0 342.7,105.8 355.8,92.9 355.8,192.0" fill="url(#conv-int-hatch-pos)" stroke="none"></polygon>

            <!-- axes -->
            <line class="axis" x1="48" y1="192.0" x2="402" y2="192.0"></line>
            <line class="axis" x1="94.2" y1="30" x2="94.2" y2="245"></line>

            <!-- courbe -->
            <polyline class="curve-main" points="55.0,222.1 68.1,223.8 81.2,224.8 94.2,225.1 107.3,224.8 120.4,223.8 133.5,222.1 146.5,219.8 159.6,216.8 172.7,213.2 185.8,208.9 198.8,203.9 211.9,198.3 225.0,192.0 238.1,185.1 251.2,177.5 264.2,169.2 277.3,160.3 290.4,150.7 303.5,140.5 316.5,129.6 329.6,118.0 342.7,105.8 355.8,92.9 368.8,79.3 381.9,65.1 395.0,50.2"></polyline>

            <!-- points cles -->
            <circle class="plot-point" cx="94.2" cy="225.1" r="5"></circle>
            <circle class="plot-point-alt" cx="225.0" cy="192.0" r="5"></circle>
            <circle class="plot-point" cx="355.8" cy="92.9" r="5"></circle>

            <!-- etiquettes -->
            <text class="annotation-label" x="210" y="18" text-anchor="middle">f(x) = x² − 1</text>
            <text class="annotation-label" x="115" y="207" text-anchor="middle">Aire négative</text>
            <text class="label-soft" x="115" y="220" text-anchor="middle">2/3</text>
            <text class="annotation-label" x="333" y="140" text-anchor="middle">Aire positive</text>
            <text class="label-soft" x="333" y="154" text-anchor="middle">4/3</text>

            <text class="tick-label" x="94.2" y="250" text-anchor="middle">0</text>
            <text class="tick-label" x="225.0" y="250" text-anchor="middle">1</text>
            <text class="tick-label" x="355.8" y="250" text-anchor="middle">2</text>

            <text class="tick-label" x="35" y="229" text-anchor="middle">-1</text>
            <text class="tick-label" x="35" y="163" text-anchor="middle">1</text>
            <text class="tick-label" x="35" y="130" text-anchor="middle">2</text>
            <text class="tick-label" x="35" y="97" text-anchor="middle">3</text>

            <text class="axis-label" x="406" y="196">x</text>
            <text class="axis-label" x="99" y="24">y</text>
          </svg>
        `,
        notes: [
          'Sur $[0\\,;\\,1]$, $f(x) < 0$ : la courbe est sous l\'axe. La contribution signée à l\'intégrale est <strong>négative</strong> ($-\\dfrac{2}{3}$), hachurée en rouge.',
          'Sur $[1\\,;\\,2]$, $f(x) > 0$ : la courbe est au-dessus de l\'axe. La contribution signée est <strong>positive</strong> ($\\dfrac{4}{3}$), hachurée en vert.',
          'L\'intégrale $\\int_0^2 f(x)\\,dx = -\\dfrac{2}{3} + \\dfrac{4}{3} = \\dfrac{2}{3}$ additionne les deux contributions AVEC leur signe. L\'aire géométrique réelle (toujours positive) est $\\dfrac{2}{3} + \\dfrac{4}{3} = 2$.'
        ],
        reading: 'Le rouge et le vert distinguent les deux zones où la courbe change de côté par rapport à l\'axe. L\'intégrale les additionne avec leur signe ; l\'aire géométrique les additionne en valeur absolue.',
        caption: 'Aires signées de $f(x) = x^2 - 1$ sur $[0\\,;\\,2]$ : $-\\dfrac{2}{3}$ (rouge) et $\\dfrac{4}{3}$ (vert), soit $\\int_0^2 f(x)\\,dx = \\dfrac{2}{3}$ et une aire géométrique de $2$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14 (chapitre PILOTE de la
         terminale). Principe directeur du cahier des charges (section 9) :
         une figure par MALENTENDU, pas une figure par formule.

         Les trois malentendus retenus sont ceux qui coûtent le chapitre :
           1. l'intégrale est une formule à appliquer (alors qu'elle est
              d'abord une SOMME de tranches, dont la formule est le résultat) ;
           2. il y a « la » primitive (alors qu'il y en a une infinité, et
              que la constante ne change jamais la pente) ;
           3. l'intégrale EST l'aire (alors qu'elle est l'aire SIGNÉE, et que
              les deux nombres peuvent être totalement différents).

         TOUTES les coordonnées ci-dessous sont CALCULÉES par script, jamais
         posées à l'œil, et vérifiées par scripts/manuel/tests/diagrams-tle.test.js :
         hauteur de chaque rectangle de Riemann égale à $f$ au bord gauche,
         sommes de Riemann effectivement croissantes vers l'intégrale exacte,
         courbes translatées de la constante annoncée, tangentes de pente
         identique, et aire du sinus nulle par intégration numérique. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'D\'où vient l\'intégrale',
          title: 'Des tranches de plus en plus fines',
          description: 'Avant d\'être une formule, l\'intégrale est une <strong>somme d\'aires de rectangles</strong>. On découpe $[0\\,;\\,4]$ en tranches de même largeur, on remplace la courbe par un palier sur chaque tranche, et on additionne. Plus les tranches sont fines, plus la somme s\'approche de l\'aire cherchée.',
          svg: `
            <svg viewBox="0 0 448 176" role="img" aria-labelledby="tle-riemann-title tle-riemann-desc">
              <title id="tle-riemann-title">Somme de rectangles sous une courbe, pour deux puis quatre puis huit tranches</title>
              <desc id="tle-riemann-desc">Trois vignettes a la meme echelle montrent la meme courbe croissante tracee au-dessus d'un segment allant de zero a quatre. Dans la premiere vignette, l'aire sous la courbe est approchee par deux rectangles larges dont la somme des aires vaut six. Dans la deuxieme, quatre rectangles plus etroits donnent une somme de sept virgule cinq. Dans la troisieme, huit rectangles encore plus etroits donnent huit virgule trois sept cinq. Les rectangles restent toujours sous la courbe et la somme se rapproche de l'aire exacte, qui vaut environ neuf virgule trente-trois.</desc>

              <!-- VIGNETTE 1 : deux tranches. Chaque rectangle a pour hauteur
                   la valeur de f au bord GAUCHE de sa tranche : les sommes
                   sous-estiment donc toutes l'aire, et elles croissent. -->
              <rect class="frame-line" x="14" y="126.7" width="64" height="23.3" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="78" y="103.5" width="64" height="46.5" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <line class="axis" x1="14" y1="150" x2="142" y2="150"></line>
              <polyline class="curve-main" points="14,126.7 17.2,126.7 20.4,126.5 23.6,126.2 26.8,125.8 30,125.3 33.2,124.6 36.4,123.9 39.6,123 42.8,122 46,120.9 49.2,119.7 52.4,118.3 55.6,116.9 58.8,115.3 62,113.6 65.2,111.8 68.4,109.9 71.6,107.9 74.8,105.7 78,103.5 81.2,101.1 84.4,98.6 87.6,95.9 90.8,93.2 94,90.4 97.2,87.4 100.4,84.3 103.6,81.1 106.8,77.8 110,74.4 113.2,70.8 116.4,67.1 119.6,63.4 122.8,59.5 126,55.5 129.2,51.3 132.4,47.1 135.6,42.7 138.8,38.2 142,33.6"></polyline>
              <text class="annotation-label" x="78" y="20" text-anchor="middle">deux tranches</text>
              <text class="tick-label" x="78" y="166" text-anchor="middle">somme : 6</text>

              <!-- VIGNETTE 2 : quatre tranches, MEME echelle. -->
              <rect class="frame-line" x="160" y="126.7" width="32" height="23.3" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="192" y="120.9" width="32" height="29.1" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="224" y="103.5" width="32" height="46.5" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="256" y="74.4" width="32" height="75.6" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <line class="axis" x1="160" y1="150" x2="288" y2="150"></line>
              <polyline class="curve-main" points="160,126.7 163.2,126.7 166.4,126.5 169.6,126.2 172.8,125.8 176,125.3 179.2,124.6 182.4,123.9 185.6,123 188.8,122 192,120.9 195.2,119.7 198.4,118.3 201.6,116.9 204.8,115.3 208,113.6 211.2,111.8 214.4,109.9 217.6,107.9 220.8,105.7 224,103.5 227.2,101.1 230.4,98.6 233.6,95.9 236.8,93.2 240,90.4 243.2,87.4 246.4,84.3 249.6,81.1 252.8,77.8 256,74.4 259.2,70.8 262.4,67.1 265.6,63.4 268.8,59.5 272,55.5 275.2,51.3 278.4,47.1 281.6,42.7 284.8,38.2 288,33.6"></polyline>
              <text class="annotation-label" x="224" y="20" text-anchor="middle">quatre tranches</text>
              <text class="tick-label" x="224" y="166" text-anchor="middle">somme : 7,5</text>

              <!-- VIGNETTE 3 : huit tranches, MEME echelle. -->
              <rect class="frame-line" x="306" y="126.7" width="16" height="23.3" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="322" y="125.3" width="16" height="24.7" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="338" y="120.9" width="16" height="29.1" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="354" y="113.6" width="16" height="36.4" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="370" y="103.5" width="16" height="46.5" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="386" y="90.4" width="16" height="59.6" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="402" y="74.4" width="16" height="75.6" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <rect class="frame-line" x="418" y="55.5" width="16" height="94.5" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></rect>
              <line class="axis" x1="306" y1="150" x2="434" y2="150"></line>
              <polyline class="curve-main" points="306,126.7 309.2,126.7 312.4,126.5 315.6,126.2 318.8,125.8 322,125.3 325.2,124.6 328.4,123.9 331.6,123 334.8,122 338,120.9 341.2,119.7 344.4,118.3 347.6,116.9 350.8,115.3 354,113.6 357.2,111.8 360.4,109.9 363.6,107.9 366.8,105.7 370,103.5 373.2,101.1 376.4,98.6 379.6,95.9 382.8,93.2 386,90.4 389.2,87.4 392.4,84.3 395.6,81.1 398.8,77.8 402,74.4 405.2,70.8 408.4,67.1 411.6,63.4 414.8,59.5 418,55.5 421.2,51.3 424.4,47.1 427.6,42.7 430.8,38.2 434,33.6"></polyline>
              <text class="annotation-label" x="370" y="20" text-anchor="middle">huit tranches</text>
              <text class="tick-label" x="370" y="166" text-anchor="middle">somme : 8,375</text>
            </svg>
          `,
          notes: [
            'Les trois vignettes montrent la <strong>même</strong> courbe sur le <strong>même</strong> intervalle, à la <strong>même</strong> échelle : la seule chose qui change est la largeur des tranches.',
            'Les sommes valent $6$, puis $7{,}5$, puis $8{,}375$ : elles augmentent, et elles se rapprochent de l\'aire exacte $\\dfrac{28}{3} \\approx 9{,}33$.',
            'Chaque rectangle reste <strong>sous</strong> la courbe, parce que sa hauteur est prise au bord gauche de sa tranche. C\'est pourquoi toutes les sommes sous-estiment l\'aire, et jamais l\'inverse.'
          ],
          reading: 'Regarde l\'espace blanc entre le haut des rectangles et la courbe : c\'est exactement ce que la somme oublie. En passant de deux tranches à huit, cet espace se morcelle et se réduit. L\'intégrale est ce vers quoi la somme tend quand on continue à découper — la notation $\\int$ est d\'ailleurs un $S$ allongé, le $S$ de « somme ».',
          caption: 'Approximation de l\'aire sous $f(x) = \\dfrac{x^2}{4} + 1$ sur $[0\\,;\\,4]$ par $2$, $4$ puis $8$ rectangles.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi la constante',
          title: 'Une infinité de primitives, une seule pente',
          description: 'Ces trois courbes sont des primitives de la <strong>même</strong> fonction $f(x) = x$. Elles ne se superposent pas — elles sont décalées verticalement — mais en une abscisse donnée, leurs trois tangentes ont <strong>exactement la même pente</strong>. C\'est tout ce que dit le $+C$.',
          svg: `
            <svg viewBox="0 0 380 250" role="img" aria-labelledby="tle-constante-title tle-constante-desc">
              <title id="tle-constante-title">Trois primitives de la meme fonction, decalees verticalement</title>
              <desc id="tle-constante-desc">Trois paraboles identiques sont tracees dans un repere, decalees verticalement les unes des autres d'une hauteur constante d'une unite et demie. En l'abscisse un virgule six, une tangente est tracee sur chacune des trois courbes. Les trois tangentes sont paralleles entre elles : elles ont toutes la meme pente, egale a un virgule six. Seule la hauteur des courbes change, jamais leur inclinaison.</desc>

              <!-- Axes du repere. -->
              <line class="axis" x1="40" y1="161.8" x2="340" y2="161.8"></line>
              <line class="axis" x1="190" y1="230" x2="190" y2="20"></line>

              <!-- Les trois primitives F(x) = x^2/2 + C, avec C = -1,5 ; 0 ; 1,5.
                   Coordonnees calculees point par point : les trois courbes sont
                   la MEME, translatee, et l'ecart vertical entre deux courbes
                   voisines est constant sur toute la largeur. -->
              <polyline class="curve-main" points="40,117.5 46,124.2 52,130.6 58,136.7 64,142.6 70,148.2 76,153.5 82,158.5 88,163.3 94,167.8 100,172 106,176 112,179.7 118,183.1 124,186.2 130,189.1 136,191.7 142,194 148,196 154,197.8 160,199.3 166,200.5 172,201.5 178,202.2 184,202.6 190,202.7 196,202.6 202,202.2 208,201.5 214,200.5 220,199.3 226,197.8 232,196 238,194 244,191.7 250,189.1 256,186.2 262,183.1 268,179.7 274,176 280,172 286,167.8 292,163.3 298,158.5 304,153.5 310,148.2 316,142.6 322,136.7 328,130.6 334,124.2 340,117.5"></polyline>
              <polyline class="curve-main" points="40,76.6 46,83.3 52,89.7 58,95.8 64,101.7 70,107.3 76,112.6 82,117.6 88,122.4 94,126.9 100,131.1 106,135.1 112,138.8 118,142.2 124,145.3 130,148.2 136,150.8 142,153.1 148,155.1 154,156.9 160,158.4 166,159.6 172,160.6 178,161.3 184,161.7 190,161.8 196,161.7 202,161.3 208,160.6 214,159.6 220,158.4 226,156.9 232,155.1 238,153.1 244,150.8 250,148.2 256,145.3 262,142.2 268,138.8 274,135.1 280,131.1 286,126.9 292,122.4 298,117.6 304,112.6 310,107.3 316,101.7 322,95.8 328,89.7 334,83.3 340,76.6"></polyline>
              <polyline class="curve-main" points="40,35.7 46,42.4 52,48.8 58,54.9 64,60.8 70,66.4 76,71.7 82,76.7 88,81.5 94,86 100,90.2 106,94.2 112,97.9 118,101.3 124,104.4 130,107.3 136,109.9 142,112.2 148,114.2 154,116 160,117.5 166,118.7 172,119.7 178,120.4 184,120.8 190,120.9 196,120.8 202,120.4 208,119.7 214,118.7 220,117.5 226,116 232,114.2 238,112.2 244,109.9 250,107.3 256,104.4 262,101.3 268,97.9 274,94.2 280,90.2 286,86 292,81.5 298,76.7 304,71.7 310,66.4 316,60.8 322,54.9 328,48.8 334,42.4 340,35.7"></polyline>

              <!-- Les trois tangentes en x = 1,6. Pente identique : 1,6.
                   Chaque segment monte de 78,6 unites de viewBox pour 108 en
                   abscisse, sur les TROIS courbes. -->
              <line class="guide-line" x1="232" y1="207.1" x2="340" y2="128.5"></line>
              <line class="guide-line" x1="232" y1="166.2" x2="340" y2="87.6"></line>
              <line class="guide-line" x1="232" y1="125.3" x2="340" y2="46.7"></line>
              <circle class="plot-point" cx="286" cy="167.8" r="4"></circle>
              <circle class="plot-point" cx="286" cy="126.9" r="4"></circle>
              <circle class="plot-point" cx="286" cy="86" r="4"></circle>

              <text class="annotation-label" x="36" y="33" text-anchor="end">C = 1,5</text>
              <text class="annotation-label" x="36" y="74" text-anchor="end">C = 0</text>
              <text class="annotation-label" x="8" y="115" text-anchor="start">C = −1,5</text>
              <text class="tick-label" x="286" y="244" text-anchor="middle">même pente en x = 1,6</text>
              <text class="axis-label" x="344" y="156" text-anchor="start">x</text>
            </svg>
          `,
          notes: [
            'Les trois courbes sont $F(x) = \\dfrac{x^2}{2} + C$ pour $C = -1{,}5$, $C = 0$ et $C = 1{,}5$ : elles se déduisent l\'une de l\'autre par une translation <strong>verticale</strong>.',
            'En $x = 1{,}6$, les trois tangentes ont la même pente $1{,}6$, c\'est-à-dire $f(1{,}6)$. La dérivée ne voit pas la constante, puisque $(F + C)\' = F\'$.',
            'C\'est pourquoi une primitive ne suffit pas à décrire un mouvement : il faut une <strong>condition initiale</strong> pour choisir laquelle des trois courbes est la bonne.'
          ],
          reading: 'Pose une règle sur les trois tangentes : tu verras qu\'elles sont parallèles. Quelle que soit la courbe choisie, la pente est la même — donc la dérivée est la même, donc les trois sont bien des primitives de la même fonction. Et si l\'énoncé te dit « à l\'instant zéro, le mobile est à $5$ mètres », il te désigne une seule de ces courbes.',
          caption: 'Trois primitives de $f(x) = x$, et leurs tangentes de pente $1{,}6$ en $x = 1{,}6$.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Une intégrale nulle sous une courbe bien visible',
          description: 'Sur $[0\\,;\\,2\\pi]$, l\'intégrale de $\\sin$ vaut $0$. Pourtant la courbe n\'est nulle part plate et la surface qu\'elle délimite est bien réelle : son aire géométrique vaut $4$. Deux nombres, une seule figure — et c\'est la différence entre aire <strong>signée</strong> et aire <strong>géométrique</strong>.',
          svg: `
            <svg viewBox="0 0 400 210" role="img" aria-labelledby="tle-signe-title tle-signe-desc">
              <title id="tle-signe-title">Une sinusoide dont les deux bosses se compensent exactement</title>
              <desc id="tle-signe-desc">La courbe du sinus est tracee de zero a deux pi. Entre zero et pi elle forme une bosse au-dessus de l'axe des abscisses, dont l'aire vaut deux. Entre pi et deux pi elle forme un creux de meme forme sous l'axe, dont l'aire vaut aussi deux mais compte negativement. Les deux contributions s'annulent, donc l'integrale vaut zero, alors que l'aire geometrique totale de la surface dessinee vaut quatre.</desc>

              <defs>
                <pattern id="tle-int-pos" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="color-mix(in srgb, var(--success) 10%, transparent)"></rect>
                  <line x1="0" y1="0" x2="0" y2="8" stroke="var(--success)" stroke-width="1.6" opacity="0.6"></line>
                </pattern>
                <pattern id="tle-int-neg" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="color-mix(in srgb, var(--error) 10%, transparent)"></rect>
                  <line x1="0" y1="0" x2="0" y2="8" stroke="var(--error)" stroke-width="1.6" opacity="0.6"></line>
                </pattern>
              </defs>

              <!-- Bosse positive [0 ; pi], puis creux negatif [pi ; 2pi].
                   Les deux polygones sont construits a partir des MEMES points
                   de la sinusoide, donc leurs aires sont rigoureusement egales
                   en valeur absolue : chacune vaut 2, verifie par integration
                   numerique dans le test du niveau. -->
              <polygon points="45,110 47.8,106.6 50.5,103.2 53.3,99.8 56,96.4 58.8,93.1 61.5,89.8 64.3,86.6 67,83.5 69.8,80.4 72.5,77.4 75.3,74.5 78,71.7 80.8,69 83.5,66.4 86.3,63.9 89,61.5 91.8,59.3 94.5,57.2 97.3,55.3 100,53.5 102.8,51.9 105.5,50.4 108.3,49.1 111,48 113.8,47 116.5,46.2 119.3,45.6 122,45.1 124.8,44.9 127.5,44.8 130.3,44.9 133,45.1 135.8,45.6 138.5,46.2 141.3,47 144,48 146.8,49.1 149.5,50.4 152.3,51.9 155,53.5 157.8,55.3 160.5,57.2 163.3,59.3 166,61.5 168.8,63.9 171.5,66.4 174.3,69 177,71.7 179.8,74.5 182.5,77.4 185.3,80.4 188,83.5 190.8,86.6 193.5,89.8 196.3,93.1 199,96.4 201.8,99.8 204.5,103.2 207.3,106.6 210,110" fill="url(#tle-int-pos)" stroke="none"></polygon>
              <polygon points="210,110 212.8,113.4 215.5,116.8 218.3,120.2 221,123.6 223.8,126.9 226.5,130.2 229.3,133.4 232,136.5 234.7,139.6 237.5,142.6 240.3,145.5 243,148.3 245.8,151 248.5,153.6 251.3,156.1 254,158.5 256.8,160.7 259.5,162.8 262.3,164.7 265,166.5 267.8,168.1 270.5,169.6 273.3,170.9 276,172 278.8,173 281.5,173.8 284.3,174.4 287,174.9 289.8,175.1 292.5,175.2 295.3,175.1 298,174.9 300.8,174.4 303.5,173.8 306.3,173 309,172 311.8,170.9 314.5,169.6 317.3,168.1 320,166.5 322.8,164.7 325.5,162.8 328.3,160.7 331,158.5 333.8,156.1 336.5,153.6 339.3,151 342,148.3 344.8,145.5 347.5,142.6 350.3,139.6 353,136.5 355.8,133.4 358.5,130.2 361.3,126.9 364,123.6 366.8,120.2 369.5,116.8 372.3,113.4 375,110" fill="url(#tle-int-neg)" stroke="none"></polygon>

              <line class="axis" x1="27" y1="110" x2="393" y2="110"></line>
              <line class="axis" x1="45" y1="185" x2="45" y2="35"></line>

              <polyline class="curve-main" points="45,110 47.8,106.6 50.5,103.2 53.3,99.8 56,96.4 58.8,93.1 61.5,89.8 64.3,86.6 67,83.5 69.8,80.4 72.5,77.4 75.3,74.5 78,71.7 80.8,69 83.5,66.4 86.3,63.9 89,61.5 91.8,59.3 94.5,57.2 97.3,55.3 100,53.5 102.8,51.9 105.5,50.4 108.3,49.1 111,48 113.8,47 116.5,46.2 119.3,45.6 122,45.1 124.8,44.9 127.5,44.8 130.3,44.9 133,45.1 135.8,45.6 138.5,46.2 141.3,47 144,48 146.8,49.1 149.5,50.4 152.3,51.9 155,53.5 157.8,55.3 160.5,57.2 163.3,59.3 166,61.5 168.8,63.9 171.5,66.4 174.3,69 177,71.7 179.8,74.5 182.5,77.4 185.3,80.4 188,83.5 190.8,86.6 193.5,89.8 196.3,93.1 199,96.4 201.8,99.8 204.5,103.2 207.3,106.6 210,110 212.8,113.4 215.5,116.8 218.3,120.2 221,123.6 223.8,126.9 226.5,130.2 229.3,133.4 232,136.5 234.7,139.6 237.5,142.6 240.3,145.5 243,148.3 245.7,151 248.5,153.6 251.3,156.1 254,158.5 256.8,160.7 259.5,162.8 262.3,164.7 265,166.5 267.8,168.1 270.5,169.6 273.3,170.9 276,172 278.8,173 281.5,173.8 284.3,174.4 287,174.9 289.8,175.1 292.5,175.2 295.3,175.1 298,174.9 300.8,174.4 303.5,173.8 306.3,173 309,172 311.7,170.9 314.5,169.6 317.3,168.1 320,166.5 322.8,164.7 325.5,162.8 328.3,160.7 331,158.5 333.8,156.1 336.5,153.6 339.3,151 342,148.3 344.7,145.5 347.5,142.6 350.3,139.6 353,136.5 355.8,133.4 358.5,130.2 361.3,126.9 364,123.6 366.8,120.2 369.5,116.8 372.3,113.4 375,110"></polyline>

              <text class="annotation-label" x="127.5" y="80.7" text-anchor="middle">aire + 2</text>
              <text class="annotation-label" x="292.5" y="139.3" text-anchor="middle">aire − 2</text>
              <text class="tick-label" x="210" y="126" text-anchor="middle">π</text>
              <text class="tick-label" x="375" y="126" text-anchor="middle">2π</text>
              <text class="tick-label" x="40" y="48" text-anchor="end">1</text>
              <text class="tick-label" x="40" y="179" text-anchor="end">−1</text>
              <text class="tick-label" x="200" y="200" text-anchor="middle">intégrale : 0</text>
            </svg>
          `,
          notes: [
            'Sur $[0\\,;\\,\\pi]$, $\\sin x > 0$ : la bosse compte <strong>positivement</strong>, et $\\displaystyle\\int_0^{\\pi} \\sin x\\,dx = 2$.',
            'Sur $[\\pi\\,;\\,2\\pi]$, $\\sin x < 0$ : le creux compte <strong>négativement</strong>, et $\\displaystyle\\int_{\\pi}^{2\\pi} \\sin x\\,dx = -2$.',
            'Total : $\\displaystyle\\int_0^{2\\pi} \\sin x\\,dx = 2 + (-2) = 0$, alors que l\'aire géométrique de la surface dessinée vaut $2 + 2 = 4$. Un même dessin, deux nombres différents — parce que ce ne sont pas deux mesures de la même chose.'
          ],
          reading: 'Une intégrale nulle ne veut pas dire « rien sous la courbe ». Elle veut dire que ce qui est au-dessus de l\'axe compense exactement ce qui est en dessous. Chaque fois qu\'on te demande une <strong>aire</strong>, cherche donc d\'abord où la fonction change de signe, et découpe l\'intervalle en ces points : sinon, tu risques d\'annoncer $0$ pour une surface parfaitement visible.',
          caption: 'La fonction $\\sin$ sur $[0\\,;\\,2\\pi]$ : intégrale nulle, aire géométrique égale à $4$.'
        }
      ],

      recap: [
        'La primitive de $x^n$ est $\\dfrac{x^{n+1}}{n+1} + C$ — on augmente l\'exposant de $1$ et on divise par le nouvel exposant.',
        'L\'intégrale définie $\\int_a^b f(x)\\,dx = F(b) - F(a)$ : le crochet évalue la primitive aux bornes.',
        'L\'intégrale est une aire SIGNÉE : si $f < 0$, la contribution est négative. Pour l\'aire géométrique, intégrer $|f|$.',
        'Ne jamais oublier la constante $+C$ pour une primitive indéfinie, et utiliser les conditions initiales pour la déterminer en physique.'
      ],
      piege: 'On divise par $(n+1)$, on ne multiplie pas ! La primitive de $3x^2$ est $\\dfrac{3x^3}{3} = x^3$, PAS $6x^3$.<br/><br/>Et n\'oublie jamais la constante $+C$ pour une primitive indéfinie !'
    },

    quiz: [
      {
        q: 'Pour trouver la primitive de $f(x) = 5x^4$, un élève écrit : "la primitive est $5 \\times 4 \\times x^3 = 20x^3 + C$." Quelle est son erreur ?',
        options: [
          'Il a DÉRIVÉ au lieu d\'intégrer. La primitive de $5x^4$ est $\\dfrac{5x^5}{5} = x^5 + C$',
          'Il a raison, mais il faut écrire $+C$ à la fin',
          'La primitive est $\\dfrac{5}{4}x^5 + C$ car on divise par l\'exposant',
          'La primitive de $5x^4$ est $20x^5 + C$ car on multiplie par $x$'
        ],
        answer: 0,
        correction: 'L\'élève a appliqué la règle de la <strong>DÉRIVÉE</strong> (multiplier par l\'exposant et baisser d\'un degré) au lieu de la règle de la <strong>PRIMITIVE</strong> (augmenter d\'un degré et diviser par le nouvel exposant).<br/><br/>La primitive de $5x^4$ est $\\frac{5x^{4+1}}{4+1} = \\frac{5x^5}{5} = x^5 + C$.<br/><br/>Vérification : $(x^5)\' = 5x^4$ ✓'
      },
      {
        q: 'Calculer $\\int_1^3 2x\\,dx$.',
        options: ['$4$', '$8$', '$6$', '$16$'],
        answer: 1,
        correction: 'La primitive de $2x$ est $x^2$.<br/><br/>On évalue aux bornes : $\\int_1^3 2x\\,dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8$.'
      },
      {
        q: 'En physique, si $v(t) = at$ (accélération constante) et $x(0) = 0$, alors $x(t) = ?$',
        options: ['$x(t) = a$', '$x(t) = \\dfrac{a}{2}$', '$x(t) = at^2$', '$x(t) = \\dfrac{1}{2}at^2$'],
        answer: 3,
        correction: 'La position est la <strong>primitive de la vitesse</strong> : $x(t) = \\int v(t)\\,dt = \\int at\\,dt = \\dfrac{at^2}{2} + C$.<br/><br/>Avec la condition initiale $x(0) = 0$, on trouve $C = 0$.<br/><br/>Donc $x(t) = \\dfrac{1}{2}at^2$.'
      },
      {
        q: 'La valeur moyenne de $f(x) = 2x$ sur $[0;4]$ est :',
        options: ['$2$', '$4$', '$8$', '$16$'],
        answer: 1,
        correction: '$\\mu = \\dfrac{1}{4-0}\\int_0^4 2x\\,dx = \\dfrac{1}{4}[x^2]_0^4 = \\dfrac{16}{4} = 4$.<br/><br/>Intuitivement, la <strong>valeur moyenne</strong> est la hauteur du rectangle de même base et de même aire que la surface sous la courbe.'
      },
      {
        q: 'Un élève écrit : "$\\int_0^1 e^x\\,dx = [xe^x]_0^1 = e$". Quelle est son erreur ?',
        options: [
          'La primitive de $e^x$ est $e^x$ (et non $xe^x$). Le résultat correct est $[e^x]_0^1 = e - 1$',
          'L\'élève a raison, $\\int e^x\\,dx = xe^x + C$',
          'La primitive de $e^x$ est $e^{x+1}/(x+1) + C$',
          'L\'intégrale de $e^x$ n\'existe pas sur $[0;1]$'
        ],
        answer: 0,
        correction: 'La primitive de $e^x$ est $e^x + C$ (et non $xe^x$).<br/><br/>Donc $\\int_0^1 e^x\\,dx = [e^x]_0^1 = e^1 - e^0 = e - 1 \\approx 1{,}718$.<br/><br/>L\'erreur vient d\'une confusion avec la règle $\\int x^n\\,dx = \\frac{x^{n+1}}{n+1}$ qui ne s\'applique pas à $e^x$. L\'exponentielle est sa propre primitive !'
      }
    ],

    /* BANQUE D'EXERCICES — élargie le 2026-09-14 (chapitre pilote de la
       terminale).

       AVANT : une seule tâche distincte (l'intégrale de $at^2$ entre $0$ et
       une borne), habillée de quatre décors par pick(). Mesuré sur 400
       tirages : 4 moules d'énoncé, mais UNE tâche. Le professeur qui
       feuilletait la banque y voyait douze fois la même question.

       APRÈS : sept tâches réellement différentes, chacune travaillant une
       compétence ou une erreur distincte du chapitre. Le décor continue de
       varier par pick(), mais il ne compte plus pour de la diversité.

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['puissance', 'affine', 'exponentielle', 'moyenne',
                            'aireSignee', 'condition', 'inverseRacine', 'aireFiguree']);

        /* TÂCHE 8 — l'aire LUE SUR UNE FIGURE (ajoutée le 2026-09-14).
           C'est la seule tâche du chapitre où l'élève voit la région dont on
           lui demande la mesure, au lieu de la deviner derrière une notation.
           Elle est adossée au helper figureTleAireSousCourbe, dont le test du
           niveau vérifie par intégration numérique que l'aire hachurée vaut
           bien l'intégrale annoncée. */
        if (tache === 'aireFiguree') {
          const ctx = pick([
            { intro: 'La section d\'un canal a pour profil' },
            { intro: 'Le flanc d\'une dune a pour profil' },
            { intro: 'La coupe d\'une pièce moulée a pour profil' }
          ]);
          const a = pick([1, 2]), b = rand(0, 3), borne = rand(2, 4);
          const res = parseFloat((a * Math.pow(borne, 3) / 3 + b * borne).toFixed(2));
          return {
            statement: `${ctx.intro} la courbe de $f(x) = ${a === 1 ? '' : a}x^2${b === 0 ? '' : ' + ' + b}$, entre $x = 0$ et $x = ${borne}$.<br/><br/>Calculer l'aire de la partie hachurée, comprise entre la courbe et l'axe des abscisses. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            // La figure POSE la question : la zone porte « aire ? », jamais sa valeur.
            figure: figureTleAireSousCourbe(a, b, borne, {}),
            hint: `La fonction est positive sur tout l'intervalle, donc l'aire hachurée est exactement $\\int_0^{${borne}} f(x)\\,dx$ — aucun découpage n'est nécessaire ici.`,
            solution: [
              `$f$ est positive sur $[0\\,;\\,${borne}]$ : l'aire hachurée est directement l'intégrale`,
              `Primitive : $F(x) = ${a === 1 ? '' : a}\\dfrac{x^3}{3}${b === 0 ? '' : ' + ' + b + 'x'}$`,
              `$F(${borne}) - F(0) = ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 1 — intégrale d'un monôme. La tâche historique, conservée :
           c'est l'application directe du crochet, et il en faut une. */
        if (tache === 'puissance') {
          const ctx = pick([
            { intro: 'La vitesse d\'un mobile est', f: 'v(t)', v: 't', u: 'm' },
            { intro: 'La puissance instantanée d\'une machine est', f: 'P(t)', v: 't', u: 'J' },
            { intro: 'Le débit d\'eau d\'une fontaine est', f: 'q(t)', v: 't', u: 'L' },
            { intro: 'L\'intensité du courant dans un circuit est', f: 'i(t)', v: 't', u: 'C' }
          ]);
          const a = rand(2, 6), b = rand(2, 4);
          const res = parseFloat((a * Math.pow(b, 3) / 3).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = ${a}${ctx.v}^2$. Calculer $\\int_0^{${b}} ${a}${ctx.v}^2\\,d${ctx.v}$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: ctx.u,
            hint: `La primitive de $${a}${ctx.v}^2$ est $\\dfrac{${a}${ctx.v}^3}{3}$ : on augmente l'exposant de $1$, puis on divise par le nouvel exposant.`,
            solution: [
              `Primitive d'un monôme : $F(${ctx.v}) = \\dfrac{${a}}{3}${ctx.v}^3$`,
              `$\\left[\\dfrac{${a}}{3}${ctx.v}^3\\right]_0^{${b}} = \\dfrac{${a}}{3} \\times ${Math.pow(b, 3)} - 0$`,
              `$= ${fr(res)}$ ${ctx.u}`
            ]
          };
        }

        /* TÂCHE 2 — intégrale d'une fonction affine. Deux termes, donc deux
           règles de primitive à enchaîner ; c'est là que l'élève oublie l'un
           des deux. */
        if (tache === 'affine') {
          const ctx = pick([
            { intro: 'Un tapis roulant accélère : sa vitesse est', f: 'v(t)', v: 't', u: 'm' },
            { intro: 'Le remplissage d\'une cuve suit le débit', f: 'q(t)', v: 't', u: 'L' },
            { intro: 'La force exercée par un vérin vaut', f: 'F(x)', v: 'x', u: 'J' }
          ]);
          const a = rand(2, 5), c = rand(1, 6), b = rand(2, 5);
          const res = parseFloat((a * b * b / 2 + c * b).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = ${a}${ctx.v} + ${c}$. Calculer $\\int_0^{${b}} (${a}${ctx.v} + ${c})\\,d${ctx.v}$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: ctx.u,
            hint: `Traite les deux termes séparément : la primitive de $${a}${ctx.v}$ est $\\dfrac{${a}${ctx.v}^2}{2}$, celle de la constante $${c}$ est $${c}${ctx.v}$.`,
            solution: [
              // Un coefficient 1 ne s'ecrit pas : « $1t$ » trahit un corrige
              // genere, et l'eleve le lit comme une faute du livre.
              `Primitive terme à terme : $F(${ctx.v}) = \\dfrac{${a}}{2}${ctx.v}^2 + ${c === 1 ? '' : c}${ctx.v}$`,
              `$F(${b}) = \\dfrac{${a}}{2} \\times ${b * b} + ${c} \\times ${b} = ${fr(parseFloat((a * b * b / 2).toFixed(2)))} + ${c * b}$`,
              `$F(${b}) - F(0) = ${fr(res)}$ ${ctx.u}`
            ]
          };
        }

        /* TÂCHE 3 — intégrale d'une exponentielle. Change complètement de
           règle : l'exponentielle est sa propre primitive, et l'élève qui
           applique $x^{n+1}/(n+1)$ se trompe de famille. */
        if (tache === 'exponentielle') {
          const ctx = pick([
            { intro: 'Le courant de décharge d\'un condensateur vaut', f: 'i(t)' },
            { intro: 'Le taux de refroidissement d\'une pièce vaut', f: 'r(t)' },
            { intro: 'L\'activité d\'un échantillon radioactif vaut', f: 'a(t)' }
          ]);
          const k = rand(2, 5), b = rand(1, 3);
          // integrale de k*e^(-x) de 0 a b = k*(1 - e^(-b))
          const res = parseFloat((k * (1 - Math.exp(-b))).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = ${k}e^{-t}$. Calculer $\\int_0^{${b}} ${k}e^{-t}\\,dt$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `La primitive de $e^{-t}$ est $-e^{-t}$ : la dérivée de $-e^{-t}$ redonne bien $e^{-t}$. L'exponentielle ne suit pas la règle des puissances.`,
            solution: [
              `Primitive : $F(t) = -${k}e^{-t}$, car $F'(t) = ${k}e^{-t}$`,
              `$\\left[-${k}e^{-t}\\right]_0^{${b}} = -${k}e^{-${b}} + ${k} = ${k}\\left(1 - e^{-${b}}\\right)$`,
              `$= ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 4 — valeur moyenne. L'intégrale y sert de MOYEN, pas de but :
           l'élève doit encore diviser par la longueur de l'intervalle, étape
           systématiquement oubliée. */
        if (tache === 'moyenne') {
          const ctx = pick([
            { intro: 'La température d\'un four, en degrés, évolue selon', f: 'T(t)', u: '°C' },
            { intro: 'La tension aux bornes d\'un capteur, en volts, vaut', f: 'u(t)', u: 'V' },
            { intro: 'La concentration d\'un réactif, en g/L, vaut', f: 'c(t)', u: 'g/L' }
          ]);
          const a = rand(2, 4), b = rand(2, 5);
          // moyenne de a*t^2 sur [0;b] = a*b^2/3
          const res = parseFloat((a * b * b / 3).toFixed(2));
          return {
            statement: `${ctx.intro} $${ctx.f} = ${a}t^2$ sur $[0\\,;\\,${b}]$. Calculer la valeur moyenne de $${ctx.f}$ sur cet intervalle. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: ctx.u,
            hint: `La valeur moyenne est $\\mu = \\dfrac{1}{b - a}\\int_a^b f$. Calcule d'abord l'intégrale, puis n'oublie pas de diviser par la longueur de l'intervalle.`,
            solution: [
              `Intégrale : $\\int_0^{${b}} ${a}t^2\\,dt = \\left[\\dfrac{${a}}{3}t^3\\right]_0^{${b}} = ${fr(parseFloat((a * Math.pow(b, 3) / 3).toFixed(2)))}$`,
              `Longueur de l'intervalle : $${b} - 0 = ${b}$`,
              `$\\mu = \\dfrac{1}{${b}} \\times ${fr(parseFloat((a * Math.pow(b, 3) / 3).toFixed(2)))} = ${fr(res)}$ ${ctx.u}`
            ]
          };
        }

        /* TÂCHE 5 — aire signée contre aire géométrique. La tâche qui donne
           son sens au chapitre, et la seule où la réponse attendue n'est PAS
           l'intégrale. Elle est adossée au troisième schéma du cours. */
        if (tache === 'aireSignee') {
          const ctx = pick([
            { intro: 'Un mobile se déplace sur un axe : sa vitesse algébrique est' },
            { intro: 'Le solde horaire d\'un compte varie selon' },
            { intro: 'Le débit net d\'un bassin, comptant négativement en vidange, vaut' }
          ]);
          const b = rand(2, 5);                 // f(x) = x - b, s'annule en b
          const fin = b + rand(1, 3);
          // integrale de (x-b) de 0 a fin ; aire geometrique = |...| decoupee en b
          const integrale = (fin * fin / 2 - b * fin) - 0;
          const aireGauche = Math.abs(0 - (0 - 0)) + Math.abs((b * b / 2 - b * b));
          const aireDroite = (fin * fin / 2 - b * fin) - (b * b / 2 - b * b);
          const res = parseFloat((aireGauche + aireDroite).toFixed(2));
          return {
            statement: `${ctx.intro} $f(x) = x - ${b}$ sur $[0\\,;\\,${fin}]$. Calculer l'<strong>aire géométrique</strong> comprise entre la courbe et l'axe des abscisses (donc en comptant positivement la partie située sous l'axe). Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `La fonction s'annule en $x = ${b}$ et change de signe. Découpe l'intervalle en ce point et additionne les deux aires en <strong>valeur absolue</strong> : ce n'est pas la même chose que l'intégrale.`,
            solution: [
              `$f$ s'annule en $x = ${b}$ : négative sur $[0\\,;\\,${b}]$, positive sur $[${b}\\,;\\,${fin}]$`,
              `Aire sous l'axe : $\\left|\\int_0^{${b}} (x - ${b})\\,dx\\right| = ${fr(parseFloat(aireGauche.toFixed(2)))}$ ; aire au-dessus : $\\int_{${b}}^{${fin}} (x - ${b})\\,dx = ${fr(parseFloat(aireDroite.toFixed(2)))}$`,
              `Aire géométrique $= ${fr(res)}$, alors que l'intégrale ne vaut que $${fr(parseFloat(integrale.toFixed(2)))}$ — les deux nombres diffèrent.`
            ]
          };
        }

        /* TÂCHE 6 — primitive avec condition initiale. Le seul endroit où la
           constante $+C$ cesse d'être un ornement : sans la condition, la
           question n'a pas de réponse unique. */
        if (tache === 'condition') {
          const ctx = pick([
            { intro: 'Un mobile part de la position', g: 'x(t)', d: 'sa vitesse est', f: 'v(t)', u: 'm' },
            { intro: 'Une cuve contient au départ', g: 'V(t)', d: 'le débit de remplissage est', f: 'q(t)', u: 'L' },
            { intro: 'Un compteur affiche au départ', g: 'E(t)', d: 'la puissance consommée est', f: 'p(t)', u: 'kWh' }
          ]);
          const a = rand(2, 8), c0 = rand(3, 20), t = rand(2, 4);
          // g'(t) = a*t donc g(t) = a t^2/2 + c0
          const res = parseFloat((a * t * t / 2 + c0).toFixed(2));
          return {
            statement: `${ctx.intro} $${c0}$ ${ctx.u} et ${ctx.d} $${ctx.f} = ${a}t$. Déterminer $${ctx.g}$, puis calculer $${ctx.g.replace('(t)', '(' + t + ')')}$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: ctx.u,
            hint: `Toutes les primitives de $${a}t$ sont $\\dfrac{${a}t^2}{2} + C$. C'est la valeur de départ qui fixe $C$ : remplace $t$ par $0$.`,
            solution: [
              // Idem : quand a est pair, on donne la fraction SIMPLIFIEE plutot
              // que $\dfrac{6}{2}t^2$, qu'aucun professeur n'ecrirait au tableau.
              `Primitives de $${a}t$ : $${ctx.g} = ${a % 2 === 0 ? (a / 2 === 1 ? '' : a / 2) : '\\dfrac{' + a + '}{2}'}t^2 + C$`,
              `Condition initiale : $${ctx.g.replace('(t)', '(0)')} = ${c0}$, donc $C = ${c0}$`,
              `$${ctx.g.replace('(t)', '(' + t + ')')} = \\dfrac{${a}}{2} \\times ${t * t} + ${c0} = ${fr(res)}$ ${ctx.u}`
            ]
          };
        }

        /* TÂCHE 7 — exposant fractionnaire. La règle $x^{n+1}/(n+1)$ doit
           survivre à un exposant qui n'est pas entier : c'est le test qui
           distingue la règle comprise de la règle récitée. */
        const ctx = pick([
          { intro: 'Le profil d\'une voûte suit' },
          { intro: 'La section d\'un déversoir suit' },
          { intro: 'Le rendement d\'un capteur suit' }
        ]);
        const k = rand(2, 6), b = pick([4, 9, 16, 25]);
        // integrale de k*sqrt(x) de 0 a b = k * 2/3 * b^(3/2)
        const res = parseFloat((k * 2 / 3 * Math.pow(b, 1.5)).toFixed(2));
        return {
          statement: `${ctx.intro} $f(x) = ${k}\\sqrt{x}$. Calculer $\\int_0^{${b}} ${k}\\sqrt{x}\\,dx$. Arrondir à $0{,}01$.`,
          answer: res, tolerance: 0.05, unit: '',
          hint: `Réécris d'abord $\\sqrt{x}$ en $x^{1/2}$. La règle reste la même : on augmente l'exposant de $1$, ce qui donne $\\dfrac{3}{2}$, puis on divise par ce nouvel exposant.`,
          solution: [
            `$\\sqrt{x} = x^{1/2}$, donc la primitive est $\\dfrac{x^{3/2}}{3/2} = \\dfrac{2}{3}x^{3/2}$`,
            `$\\left[${k} \\times \\dfrac{2}{3}x^{3/2}\\right]_0^{${b}} = \\dfrac{2 \\times ${k}}{3} \\times ${Math.pow(b, 1.5)}$`,
            `$= ${fr(res)}$`
          ]
        };
      }
    },
    probleme: {
      context: 'En thermodynamique, le travail élémentaire d\'une force de rappel élastique est $dW = F\\,dx$ avec $F = kx$ (loi de Hooke). On veut calculer le travail total $W$ pour étirer un ressort de $x = 0$ à $x = d$, avec $k = 200$ N/m et $d = 0{,}15$ m.',
      schema: null,
      tasks: [
        'Écrire l\'intégrale à calculer : $W = \\int_0^d kx\\,dx$.',
        'Calculer la primitive de $kx$ par rapport à $x$.',
        'Calculer numériquement $W$ en substituant $k = 200$ N/m et $d = 0{,}15$ m.'
      ],
      solutions: [
        '$W = \\int_0^d kx\\,dx = k \\int_0^d x\\,dx$.',
        'Primitive de $x$ : $\\dfrac{x^2}{2}$. Donc $W = k \\left[\\dfrac{x^2}{2}\\right]_0^d = k \\dfrac{d^2}{2}$.',
        '$W = 200 \\times \\dfrac{(0{,}15)^2}{2} = 200 \\times \\dfrac{0{,}0225}{2} = 200 \\times 0{,}01125 = 2{,}25$ J.'
      ],
      finalAnswer: '$W = 2{,}25$ J'
    },

    evaluation: {
      title: 'Évaluation — Intégration et primitives',
      duration: '35 min',
      questions: [
        {
          statement: 'Calculer $\\int_0^2 3x^2\\,dx$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La primitive de $3x^2$ est $x^3$ (on divise le coefficient $3$ par le nouvel exposant $3$).<br/><br/>$\\int_0^2 3x^2\\,dx = [x^3]_0^2 = 8 - 0 = 8$.'
        },
        {
          statement: 'Quelle est la primitive de $f(x) = 4x^3 + 2x$ ?',
          type: 'multiple-choice',
          options: ['$12x^2 + 2 + C$', '$x^4 + x^2 + C$', '$4x^4 + 2x^2 + C$', '$x^4 + x + C$'],
          answer: 1,
          points: 2,
          correction: 'Primitive de $4x^3$ : $\\dfrac{4x^4}{4} = x^4$.<br/><br/>Primitive de $2x$ : $\\dfrac{2x^2}{2} = x^2$.<br/><br/>Donc $F(x) = x^4 + x^2 + C$.'
        },
        {
          statement: 'Calculer $\\int_1^4 \\dfrac{1}{\\sqrt{x}}\\,dx$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On réécrit : $\\dfrac{1}{\\sqrt{x}} = x^{-1/2}$.<br/><br/>La primitive est $\\dfrac{x^{1/2}}{1/2} = 2\\sqrt{x}$.<br/><br/>On évalue : $[2\\sqrt{x}]_1^4 = 2 \\times 2 - 2 \\times 1 = 4 - 2 = 2$.'
        },
        {
          statement: 'Si $v(t) = 6t$ (accélération constante $a = 6$ m/s²) et $x(0) = 5$ m, alors $x(t) = ?$',
          type: 'multiple-choice',
          options: ['$6t + 5$', '$3t^2$', '$3t^2 + 5$', '$6t^2 + 5$'],
          answer: 2,
          points: 2,
          correction: 'La position est la primitive de la vitesse : $x(t) = \\int 6t\\,dt = 3t^2 + C$.<br/><br/>On utilise la condition initiale pour trouver $C$ : $x(0) = 3 \\times 0 + C = 5$, donc $C = 5$.<br/><br/>Finalement, $x(t) = 3t^2 + 5$.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. L'ancienne demandait
             $\int_0^{\pi} \sin x\,dx$ : un calcul de plus, alors que les
             quatre autres questions en étaient déjà. Aucune des cinq ne
             mobilisait « communiquer », compétence dont la grille de suivi
             imprime pourtant la colonne toute l'année.

             La nouvelle question demande de JUGER une explication et de dire
             ce qui y manque — l'élève ne produit aucun nombre, il produit un
             raisonnement énoncé. L'étiquette suit l'énoncé, jamais l'inverse. */
          statement: 'Un camarade calcule $\\int_0^{2\\pi} \\sin x\\,dx$ et trouve $0$. Il en conclut : « donc il n\'y a aucune aire entre la courbe du sinus et l\'axe des abscisses sur cet intervalle ». Son calcul est juste. Sa conclusion ne l\'est pas. Quelle phrase corrige son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Son calcul donne l\'aire <strong>signée</strong> : la bosse au-dessus de l\'axe ($+2$) et le creux en dessous ($-2$) se compensent. L\'aire géométrique, elle, vaut $2 + 2 = 4$',
            'Son calcul est faux : $\\int_0^{2\\pi} \\sin x\\,dx$ vaut $4$, pas $0$',
            'Une intégrale nulle signifie toujours que la fonction est nulle sur l\'intervalle',
            'Il aurait dû intégrer $\\cos x$ à la place de $\\sin x$'
          ],
          answer: 0,
          points: 2,
          correction: 'Son calcul est exact : $[-\\cos x]_0^{2\\pi} = -1 + 1 = 0$.<br/><br/>Ce qui est faux, c\'est la <strong>lecture</strong> du résultat. Une intégrale mesure une aire <strong>signée</strong> : ce qui est au-dessus de l\'axe compte positivement, ce qui est en dessous compte négativement.<br/><br/>Ici $\\int_0^{\\pi} \\sin x\\,dx = 2$ et $\\int_{\\pi}^{2\\pi} \\sin x\\,dx = -2$. Les deux se compensent exactement, d\'où le $0$.<br/><br/>Mais la surface dessinée existe bel et bien, et son aire <strong>géométrique</strong> vaut $2 + 2 = 4$ : c\'est $\\int_0^{2\\pi} |\\sin x|\\,dx$.<br/><br/>La règle à retenir : dès qu\'on te demande une <strong>aire</strong>, cherche d\'abord où la fonction change de signe, et découpe l\'intervalle en ces points.'
        }
      ]
    }
  });
