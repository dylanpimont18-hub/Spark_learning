/* =========================================================
   Spark Learning – data/lycee-tle/tle-lois-continues.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-lois-continues',
    level: 2, subject: 'maths',
    icon: '🔔',
    title: 'Lois de probabilité continues',
    subtitle: 'Loi uniforme, loi normale',
    keywords: ['Loi normale', 'Loi uniforme', 'Densité', 'Espérance', 'Écart-type'],
    physics: 'Répartition gaussienne des erreurs de mesure, durée de vie de composants, contrôle qualité industriel',
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version énonçait
         d'emblée le résultat le plus contre-intuitif du chapitre
         ($P(X = 5) = 0$), puis la règle des $2\sigma$, puis le piège : trois
         définitions et zéro question. Le cahier des charges proscrit
         l'ouverture par la définition.

         La question retenue ne se résout avec AUCUN outil déjà connu : tout
         ce que l'élève sait des probabilités suppose de compter des cas
         favorables, et ici il n'y a rien à compter. L'impasse est réelle et
         il peut la constater lui-même en essayant.

         On évite le travers inverse (l'anecdote plaquée) : le train n'est
         pas un décor, c'est la situation minimale où le dénombrement
         échoue. */
      intro: 'Un train passe à un horaire aléatoire, quelque part entre $8$ h et $9$ h — aucune minute n\'est plus probable qu\'une autre. Quelle est la probabilité qu\'il passe exactement à $8$ h $30$ ?<br/><br/>Essaie avec ce que tu sais. En probabilités, tu comptes les cas favorables et tu divises par le nombre de cas possibles. Un cas favorable, donc : $8$ h $30$.<br/><br/>Mais combien de cas possibles ? $60$, si tu comptes les minutes. $3600$, si tu comptes les secondes. Et si tu comptes les dixièmes de seconde, $36\\,000$. Le nombre de cas possibles dépend entièrement de la précision que tu choisis — et rien dans l\'énoncé ne la fixe.<br/><br/>Pire : rien ne t\'oblige à t\'arrêter. Entre deux instants, si proches soient-ils, il en existe toujours une infinité d\'autres. Le dénombrement <strong>ne s\'applique pas</strong>, et il n\'y a aucun moyen de le sauver.<br/><br/>Il faut donc changer complètement d\'outil. L\'idée qui fonctionne est inattendue : on abandonne l\'idée de mesurer un <strong>instant</strong>, et on ne mesure plus que des <strong>durées</strong>. On saura dire la probabilité que le train passe entre $8$ h $20$ et $8$ h $40$ — elle vaut un tiers — sans jamais pouvoir dire celle d\'un horaire exact.<br/><br/>Et l\'objet qui porte cette mesure est une <strong>aire</strong>. On trace une courbe, et la probabilité d\'un intervalle devient la surface au-dessus de cet intervalle. C\'est tout le chapitre, et c\'est aussi sa difficulté : la hauteur de la courbe ne sera jamais une probabilité, seule l\'aire en est une.<br/><br/>Quant à $8$ h $30$ exactement : une durée nulle donne une aire nulle. La probabilité est donc $0$ — ce qui ne veut pas dire que c\'est impossible, puisque le train passe bien à un instant précis.',
      definitions: [
        { term: 'Variable aléatoire continue', def: 'Variable $X$ pouvant prendre toute valeur dans un intervalle. Sa loi est définie par une <strong>fonction de densité</strong> $f$ telle que $P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$.' },
        { term: 'Loi normale $\\mathcal{N}(\\mu;\\sigma^2)$', def: 'Loi continue symétrique en cloche autour de $\\mu$ (espérance), d\'écart-type $\\sigma$. C\'est la loi la plus importante en statistique : par le théorème central limite, la moyenne de nombreuses mesures suit approximativement une loi normale.' },
        { term: 'Loi uniforme sur $[a;b]$', def: 'Toutes les valeurs dans $[a;b]$ sont équiprobables. Densité constante $f(x) = \\dfrac{1}{b-a}$. Espérance $E(X) = \\dfrac{a+b}{2}$, variance $V(X) = \\dfrac{(b-a)^2}{12}$.' },
        { term: 'Centrage-réduction', def: 'La transformation $Z = \\dfrac{X - \\mu}{\\sigma}$ ramène toute loi $\\mathcal{N}(\\mu;\\sigma^2)$ à la loi $\\mathcal{N}(0;1)$. On peut alors utiliser les tables ou la calculatrice.' }
      ],
      method: {
        title: 'Utiliser la loi normale',
        steps: [
          '<strong>Paramètres fondamentaux</strong> : $\\mu$ (espérance/moyenne) et $\\sigma$ (écart-type).',
          '<strong>Centrage-réduction</strong> : $Z=\\frac{X-\\mu}{\\sigma}\\sim\\mathcal{N}(0;1)$.',
          '<strong>Règle des $3\\sigma$</strong> : $P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$.',
          '<strong>Règle des $2\\sigma$</strong> : $P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$.'
        ]
      },
      example: {
        statement: 'La durée de vie d\'une ampoule LED suit une loi normale $\\mathcal{N}(20000;2000^2)$ (en heures). Quelle est la probabilité qu\'une ampoule dure entre $16000$ et $24000$ heures ?',
        steps: [
          'On identifie $\\mu = 20000$ et $\\sigma = 2000$.',
          '$16000 = 20000 - 2 \\times 2000 = \\mu - 2\\sigma$.',
          '$24000 = 20000 + 2 \\times 2000 = \\mu + 2\\sigma$.',
          'Par la règle des $2\\sigma$ : $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$.'
        ],
        answer: '$P(16000 \\leq X \\leq 24000) \\approx 0{,}954$ soit $95{,}4\\%$. Environ $95$ ampoules sur $100$ durent entre $16\\,000$ et $24\\,000$ h.'
      },
      formulas: [
        '$P(\\mu-\\sigma\\le X\\le\\mu+\\sigma)\\approx0{,}683$',
        '$P(\\mu-2\\sigma\\le X\\le\\mu+2\\sigma)\\approx0{,}954$',
        '$P(\\mu-3\\sigma\\le X\\le\\mu+3\\sigma)\\approx0{,}997$',
        'Loi uniforme sur $[a;b]$ : $E(X)=\\dfrac{a+b}{2}$, $f(x)=\\dfrac{1}{b-a}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Courbe de Gauss',
        title: 'Durée de vie d\'une LED : $\\mathcal{N}(20000\\,;\\,2000^2)$',
        description: 'Courbe de densité $f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ calculée point par point pour $\\mu = 20000$ h et $\\sigma = 2000$ h (l\'exemple ci-dessus) : les trois bandes montrent où se concentrent $68{,}3\\%$, $95{,}4\\%$ et $99{,}7\\%$ des ampoules.',
        svg: `
          <svg viewBox="0 0 470 310" role="img" aria-labelledby="loicontinue-tle-title loicontinue-tle-desc">
            <title id="loicontinue-tle-title">Courbe de Gauss de moyenne 20000 heures et d'ecart-type 2000 heures</title>
            <desc id="loicontinue-tle-desc">Courbe en cloche calculee a partir de la fonction de densite normale, avec trois bandes concentriques marquant 68,3%, 95,4% et 99,7% des ampoules autour de la duree de vie moyenne de 20000 heures.</desc>
            <line class="grid-line" x1="65.7" y1="40" x2="65.7" y2="224"></line>
            <line class="grid-line" x1="117.1" y1="40" x2="117.1" y2="224"></line>
            <line class="grid-line" x1="168.6" y1="40" x2="168.6" y2="224"></line>
            <line class="grid-line" x1="220.0" y1="40" x2="220.0" y2="224"></line>
            <line class="grid-line" x1="271.4" y1="40" x2="271.4" y2="224"></line>
            <line class="grid-line" x1="322.9" y1="40" x2="322.9" y2="224"></line>
            <line class="grid-line" x1="374.3" y1="40" x2="374.3" y2="224"></line>
            <path d="M65.7 224.0 L65.7 222.0 L78.6 219.8 L91.4 215.9 L104.3 209.4 L117.1 199.1 L130.0 184.2 L142.9 164.3 L155.7 139.8 L168.6 112.4 L181.4 85.1 L194.3 61.6 L207.1 45.7 L220.0 40.0 L232.9 45.7 L245.7 61.6 L258.6 85.1 L271.4 112.4 L284.3 139.8 L297.1 164.3 L310.0 184.2 L322.9 199.1 L335.7 209.4 L348.6 215.9 L361.4 219.8 L374.3 222.0 L374.3 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></path>
            <path d="M117.1 224.0 L117.1 199.1 L130.0 184.2 L142.9 164.3 L155.7 139.8 L168.6 112.4 L181.4 85.1 L194.3 61.6 L207.1 45.7 L220.0 40.0 L232.9 45.7 L245.7 61.6 L258.6 85.1 L271.4 112.4 L284.3 139.8 L297.1 164.3 L310.0 184.2 L322.9 199.1 L322.9 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)" stroke="none"></path>
            <path d="M168.6 224.0 L168.6 112.4 L181.4 85.1 L194.3 61.6 L207.1 45.7 L220.0 40.0 L232.9 45.7 L245.7 61.6 L258.6 85.1 L271.4 112.4 L271.4 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></path>
            <path class="curve-main" d="M40.0 223.6 L52.9 223.1 L65.7 222.0 L78.6 219.8 L91.4 215.9 L104.3 209.4 L117.1 199.1 L130.0 184.2 L142.9 164.3 L155.7 139.8 L168.6 112.4 L181.4 85.1 L194.3 61.6 L207.1 45.7 L220.0 40.0 L232.9 45.7 L245.7 61.6 L258.6 85.1 L271.4 112.4 L284.3 139.8 L297.1 164.3 L310.0 184.2 L322.9 199.1 L335.7 209.4 L348.6 215.9 L361.4 219.8 L374.3 222.0 L387.1 223.1 L400.0 223.6"></path>
            <line class="axis" x1="30" y1="224" x2="410" y2="224"></line>
            <line class="axis" x1="65.7" y1="224" x2="65.7" y2="230"></line>
            <line class="axis" x1="117.1" y1="224" x2="117.1" y2="230"></line>
            <line class="axis" x1="168.6" y1="224" x2="168.6" y2="230"></line>
            <line class="axis" x1="220.0" y1="224" x2="220.0" y2="230"></line>
            <line class="axis" x1="271.4" y1="224" x2="271.4" y2="230"></line>
            <line class="axis" x1="322.9" y1="224" x2="322.9" y2="230"></line>
            <line class="axis" x1="374.3" y1="224" x2="374.3" y2="230"></line>
            <circle class="plot-point" cx="220.0" cy="40.0" r="4"></circle>
            <circle class="plot-point-alt" cx="168.6" cy="112.4" r="3"></circle>
            <circle class="plot-point-alt" cx="271.4" cy="112.4" r="3"></circle>
            <text class="annotation-label" x="220.0" y="20" text-anchor="middle">μ = 20000 h</text>
            <text class="tick-label" x="65.7" y="242" text-anchor="middle">14000</text>
            <text class="tick-label" x="117.1" y="242" text-anchor="middle">16000</text>
            <text class="tick-label" x="168.6" y="242" text-anchor="middle">18000</text>
            <text class="tick-label" x="220.0" y="242" text-anchor="middle">20000</text>
            <text class="tick-label" x="271.4" y="242" text-anchor="middle">22000</text>
            <text class="tick-label" x="322.9" y="242" text-anchor="middle">24000</text>
            <text class="tick-label" x="374.3" y="242" text-anchor="middle">26000</text>
            <text class="axis-label" x="414" y="228">durée (h)</text>
            <line class="guide-line" x1="168.6" y1="254" x2="271.4" y2="254"></line>
            <text class="annotation-label" x="277.4" y="258">68,3 %</text>
            <line class="guide-line" x1="117.1" y1="270" x2="322.9" y2="270"></line>
            <text class="annotation-label" x="328.9" y="274">95,4 %</text>
            <line class="guide-line" x1="65.7" y1="286" x2="374.3" y2="286"></line>
            <text class="annotation-label" x="380.3" y="290">99,7 %</text>
          </svg>
        `,
        notes: [
          'Bande la plus foncée : $[18000\\,;\\,22000]$ h $=[\\mu-\\sigma\\,;\\,\\mu+\\sigma]$, soit $68{,}3\\%$ des ampoules.',
          'Bande intermédiaire : $[16000\\,;\\,24000]$ h $=[\\mu-2\\sigma\\,;\\,\\mu+2\\sigma]$, soit $95{,}4\\%$ — c\'est l\'exemple traité ci-dessus.',
          'Bande la plus large : $[14000\\,;\\,26000]$ h $=[\\mu-3\\sigma\\,;\\,\\mu+3\\sigma]$, soit $99{,}7\\%$ des ampoules.'
        ],
        reading: 'La hauteur de la courbe en chaque point $x$ est la vraie valeur de la densité $f(x)$, calculée formule en main — pas une cloche dessinée approximativement. Plus une durée de vie s\'éloigne de $\\mu=20000$ h, plus elle devient improbable.',
        caption: 'Courbe de densité de $\\mathcal{N}(20000\\,;\\,2000^2)$ (durée de vie en heures) avec la règle $68$-$95$-$99{,}7\\%$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14, sur le modèle du
         chapitre pilote (tle-primitives-integrales). Principe : une figure
         par MALENTENDU, pas une figure par formule.

         Le premier malentendu est LE malentendu du chapitre, et il commande
         les deux autres : l'élève confond la DENSITÉ (la hauteur de la
         courbe) et la PROBABILITÉ (l'aire sous la courbe). Tant qu'il ne
         l'a pas dissipé, $P(X = a) = 0$ lui paraît absurde et la règle des
         sigma reste une liste de nombres à retenir.

         Les trois figures suivent donc cet ordre :
           1. l'aire EST la probabilité — démontré sur la loi uniforme, où
              l'aire est un rectangle et se vérifie à la main ;
           2. $P(X = a) = 0$ — une largeur qu'on fait tendre vers zéro, et
              l'aire avec elle ;
           3. la règle des sigma lue en aires sur la cloche, et non comme
              trois nombres appris par cœur.

         TOUTES les aires ci-dessous sont CALCULÉES par intégration
         numérique (méthode de Simpson), jamais estimées à l'œil, et
         re-vérifiées par scripts/manuel/tests/diagrams-tle.test.js : aire
         totale de chaque densité égale à 1, et aire hachurée égale à la
         probabilité annoncée. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le point à comprendre',
          title: 'La probabilité est une aire, pas une hauteur',
          description: 'Un train passe à un horaire uniformément réparti sur une heure. La courbe de densité est <strong>plate</strong> : sa hauteur vaut $0{,}1$ partout, et cette hauteur n\'est la probabilité de rien. Ce qui est une probabilité, c\'est l\'<strong>aire</strong> — ici le rectangle hachuré, dont on peut vérifier la valeur de tête.',
          svg: `
            <svg viewBox="0 0 440 240" role="img" aria-labelledby="tle-lois-aire-title tle-lois-aire-desc">
              <title id="tle-lois-aire-title">Densite uniforme et rectangle hachure representant une probabilite</title>
              <desc id="tle-lois-aire-desc">La courbe de densite d'une loi uniforme est un palier horizontal de hauteur zero virgule un, s'etendant de zero a dix, et nulle partout ailleurs. La portion comprise entre deux et six est hachuree : c'est un rectangle de largeur quatre et de hauteur zero virgule un, donc d'aire zero virgule quatre. Cette aire est exactement la probabilite que la variable tombe entre deux et six. La hauteur seule, zero virgule un, n'est la probabilite de rien.</desc>

              <defs>
                <pattern id="tle-lois-hach-aire" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
                  <line x1="0" y1="0" x2="0" y2="8" stroke="var(--diagram-accent)" stroke-width="1.6" opacity="0.6"></line>
                </pattern>
              </defs>

              <rect x="139.8" y="86.6" width="104.8" height="103.4" fill="url(#tle-lois-hach-aire)" stroke="none"></rect>

              <line class="axis" x1="56" y1="190" x2="386" y2="190"></line>
              <line class="axis" x1="87.4" y1="32" x2="87.4" y2="190"></line>

              <line class="graph-line" x1="56" y1="190" x2="87.4" y2="190"></line>
              <line class="curve-main" x1="87.4" y1="86.6" x2="349.3" y2="86.6"></line>
              <line class="graph-line" x1="349.3" y1="190" x2="386" y2="190"></line>
              <line class="graph-line" x1="87.4" y1="190" x2="87.4" y2="86.6"></line>
              <line class="graph-line" x1="349.3" y1="86.6" x2="349.3" y2="190"></line>

              <line class="focus-line" x1="139.8" y1="86.6" x2="139.8" y2="190"></line>
              <line class="focus-line" x1="244.6" y1="86.6" x2="244.6" y2="190"></line>

              <text class="annotation-label" x="192" y="140" text-anchor="middle">aire hachurée</text>
              <text class="tick-label" x="192" y="156" text-anchor="middle">quatre fois zéro virgule un</text>
              <text class="tick-label" x="192" y="172" text-anchor="middle">soit zéro virgule quatre</text>

              <text class="annotation-label" x="356" y="80" text-anchor="start">hauteur</text>
              <text class="tick-label" x="356" y="96" text-anchor="start">zéro virgule un</text>

              <text class="tick-label" x="87.4" y="208" text-anchor="middle">0</text>
              <text class="tick-label" x="139.8" y="208" text-anchor="middle">2</text>
              <text class="tick-label" x="244.6" y="208" text-anchor="middle">6</text>
              <text class="tick-label" x="349.3" y="208" text-anchor="middle">10</text>
              <text class="tick-label" x="221" y="230" text-anchor="middle">valeur prise par la variable</text>
            </svg>
          `,
          notes: [
            'La densité vaut $f(x) = \\dfrac{1}{10 - 0} = 0{,}1$ sur $[0\\,;\\,10]$, et $0$ ailleurs. C\'est une <strong>hauteur</strong>, et une hauteur n\'est pas une probabilité — la preuve, elle pourrait très bien dépasser $1$ si l\'intervalle était plus court.',
            'Le rectangle hachuré a pour largeur $6 - 2 = 4$ et pour hauteur $0{,}1$ : son aire vaut $4 \\times 0{,}1 = 0{,}4$. Et $P(2 \\leq X \\leq 6) = 0{,}4$ exactement. <strong>L\'aire est la probabilité.</strong>',
            'L\'aire <strong>totale</strong> sous la densité vaut $10 \\times 0{,}1 = 1$, ce qui n\'est pas un hasard : c\'est la probabilité que la variable prenne une valeur quelconque, donc la certitude. Toute densité vérifie cette condition.'
          ],
          reading: 'Vérifie l\'aire toi-même : c\'est un rectangle, tu n\'as besoin d\'aucune intégrale. Largeur $4$, hauteur $0{,}1$, donc $0{,}4$. Et retiens le contraste que montre cette figure : la hauteur est la <strong>même</strong> sur tout l\'intervalle, alors que la probabilité, elle, change avec la largeur qu\'on prend. Chaque fois que tu liras une courbe de densité, la question à te poser sera donc « quelle aire ? » et jamais « quelle hauteur ? ».',
          caption: 'Densité uniforme sur $[0\\,;\\,10]$ : la hauteur vaut $0{,}1$ partout, et l\'aire hachurée $0{,}4$ est la probabilité $P(2 \\leq X \\leq 6)$.'
        },
        {
          theme: 'maths',
          kicker: 'Pourquoi une valeur exacte est de probabilité nulle',
          title: 'Une largeur qui disparaît emporte l\'aire avec elle',
          description: 'Trois fois la <strong>même</strong> densité, et trois intervalles de plus en plus étroits autour de $5$. L\'aire passe de $0{,}2$ à $0{,}02$ puis à $0{,}002$. En resserrant jusqu\'au point unique, il ne reste plus rien : c\'est pourquoi $P(X = 5) = 0$.',
          svg: `
            <svg viewBox="0 0 448 200" role="img" aria-labelledby="tle-lois-zero-title tle-lois-zero-desc">
              <title id="tle-lois-zero-title">Trois bandes de largeur decroissante sous la meme densite uniforme</title>
              <desc id="tle-lois-zero-desc">Trois vignettes a la meme echelle montrent la meme densite uniforme en forme de palier. Dans la premiere, une bande large est hachuree autour de la valeur cinq et son aire vaut zero virgule deux. Dans la deuxieme, la bande est dix fois plus etroite et son aire vaut zero virgule zero deux. Dans la troisieme, elle est encore dix fois plus etroite, presque reduite a un trait, et son aire vaut zero virgule zero zero deux. En poursuivant, l'aire tend vers zero : la probabilite d'une valeur exacte est nulle.</desc>

              <!-- VIGNETTE 1 : demi-largeur 1, aire 0,2. -->
              <rect x="77" y="70" width="22.1" height="60" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></rect>
              <line class="axis" x1="24" y1="130" x2="152" y2="130"></line>
              <line class="curve-main" x1="32.8" y1="70" x2="143.2" y2="70"></line>
              <line class="graph-line" x1="32.8" y1="130" x2="32.8" y2="70"></line>
              <line class="graph-line" x1="143.2" y1="70" x2="143.2" y2="130"></line>
              <text class="annotation-label" x="88" y="28" text-anchor="middle">bande large</text>
              <text class="tick-label" x="88" y="150" text-anchor="middle">aire : 0,2</text>

              <!-- VIGNETTE 2 : demi-largeur 0,1, aire 0,02. -->
              <rect x="234.9" y="70" width="2.2" height="60" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></rect>
              <line class="axis" x1="172" y1="130" x2="300" y2="130"></line>
              <line class="curve-main" x1="180.8" y1="70" x2="291.2" y2="70"></line>
              <line class="graph-line" x1="180.8" y1="130" x2="180.8" y2="70"></line>
              <line class="graph-line" x1="291.2" y1="70" x2="291.2" y2="130"></line>
              <text class="annotation-label" x="236" y="28" text-anchor="middle">dix fois plus fine</text>
              <text class="tick-label" x="236" y="150" text-anchor="middle">aire : 0,02</text>

              <!-- VIGNETTE 3 : demi-largeur 0,01, aire 0,002. La bande y est
                   plus fine qu'un trait de crayon : c'est le message.
                   LARGEUR EXACTE 0,2207, et non arrondie a 0,4 « pour qu'on
                   la voie » : le test du niveau remesure l'aire dessinee, et
                   une bande elargie annoncerait 0,0036 sous une etiquette
                   disant 0,002. Une figure ne triche pas sur ce qu'elle
                   mesure, meme pour etre plus lisible. -->
              <rect x="383.9" y="70" width="0.2207" height="60" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></rect>
              <line class="axis" x1="320" y1="130" x2="448" y2="130"></line>
              <line class="curve-main" x1="328.8" y1="70" x2="439.2" y2="70"></line>
              <line class="graph-line" x1="328.8" y1="130" x2="328.8" y2="70"></line>
              <line class="graph-line" x1="439.2" y1="70" x2="439.2" y2="130"></line>
              <!-- La bande de la troisieme vignette est plus fine qu'un
                   trait imprime : ce repere vertical, POSE SOUS L'AXE, dit
                   au lecteur ou elle se trouve sans rien ajouter a l'aire
                   mesuree au-dessus. -->
              <line class="focus-line" x1="384" y1="130" x2="384" y2="140"></line>
              <text class="annotation-label" x="384" y="28" text-anchor="middle">cent fois plus fine</text>
              <text class="tick-label" x="384" y="150" text-anchor="middle">aire : 0,002</text>

              <text class="tick-label" x="224" y="178" text-anchor="middle">en resserrant encore, il ne reste aucune aire</text>
            </svg>
          `,
          notes: [
            'Les trois vignettes portent la <strong>même</strong> densité uniforme, de hauteur $0{,}1$, à la <strong>même</strong> échelle. Seule la largeur de la bande change.',
            'Les aires valent $0{,}2$ puis $0{,}02$ puis $0{,}002$ : chaque fois qu\'on divise la largeur par dix, l\'aire est divisée par dix. Rien ne s\'oppose à continuer.',
            'À la limite, la largeur est nulle et l\'aire aussi : $P(X = 5) = 0$. Ce n\'est <strong>pas</strong> une convention commode, c\'est la conséquence directe du fait que la probabilité est une aire.'
          ],
          reading: 'Attention à ne pas conclure trop vite : une probabilité nulle ne signifie <strong>pas</strong> que l\'événement est impossible. Le train passe bien à un instant précis, et cet instant avait pourtant une probabilité nulle d\'être choisi. C\'est déroutant, et c\'est propre au continu — en probabilités discrètes, seule l\'impossibilité donne zéro. Une conséquence pratique à retenir : puisque les points isolés ne pèsent rien, les inégalités strictes et larges donnent la même chose, et $P(X \\leq 5) = P(X < 5)$.',
          caption: 'La même densité uniforme, avec des bandes de largeur $2$ ; $0{,}2$ ; $0{,}02$ autour de $5$ : les aires valent $0{,}2$ ; $0{,}02$ ; $0{,}002$ et tendent vers $0$.'
        },
        {
          theme: 'maths',
          kicker: 'La règle des sigma',
          title: 'Les trois nombres à retenir sont trois aires',
          description: 'Les valeurs $68{,}3\\%$, $95{,}4\\%$ et $99{,}7\\%$ ne sont pas trois nombres à apprendre par cœur : ce sont les <strong>aires</strong> découpées sous la cloche par $1$, $2$ et $3$ écarts-types autour de la moyenne. La figure hachure la première.',
          svg: `
            <svg viewBox="0 0 440 260" role="img" aria-labelledby="tle-lois-sigma-title tle-lois-sigma-desc">
              <title id="tle-lois-sigma-title">Aire hachuree entre moins un et plus un ecart-type sous la courbe en cloche</title>
              <desc id="tle-lois-sigma-desc">La courbe en cloche de la loi normale centree reduite est tracee point par point a partir de sa formule. La portion comprise entre moins un et plus un ecart-type est hachuree : son aire vaut zero virgule six cent quatre-vingt-trois, soit soixante-huit virgule trois pour cent. Deux traits verticaux marquent les bornes moins deux et plus deux ecarts-types, qui delimitent quatre-vingt-quinze virgule quatre pour cent de l'aire, et deux autres marquent moins trois et plus trois ecarts-types, qui en delimitent quatre-vingt-dix-neuf virgule sept pour cent.</desc>

              <defs>
                <pattern id="tle-lois-hach-sigma" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
                  <rect width="8" height="8" fill="color-mix(in srgb, var(--success) 12%, transparent)"></rect>
                  <line x1="0" y1="0" x2="0" y2="8" stroke="var(--success)" stroke-width="1.6" opacity="0.6"></line>
                </pattern>
              </defs>

              <polygon points="176.4,194 176.4,108 178.8,103.7 181.3,99.4 183.7,95.2 186.1,91 188.5,86.9 191,83 193.4,79.2 195.8,75.5 198.3,72.1 200.7,68.8 203.1,65.8 205.6,63.1 208,60.6 210.4,58.4 212.8,56.5 215.3,55 217.7,53.7 220.1,52.9 222.6,52.3 225,52.2 227.4,52.3 229.9,52.9 232.3,53.7 234.7,55 237.2,56.5 239.6,58.4 242,60.6 244.4,63.1 246.9,65.8 249.3,68.8 251.7,72.1 254.2,75.5 256.6,79.2 259,83 261.5,86.9 263.9,91 266.3,95.2 268.8,99.4 271.2,103.7 273.6,108 273.6,194" fill="url(#tle-lois-hach-sigma)" stroke="none"></polygon>

              <line class="axis" x1="40" y1="194" x2="410" y2="194"></line>

              <line class="guide-line" x1="127.8" y1="174.8" x2="127.8" y2="194"></line>
              <line class="guide-line" x1="322.2" y1="174.8" x2="322.2" y2="194"></line>
              <line class="grid-line" x1="79.2" y1="192.4" x2="79.2" y2="194"></line>
              <line class="grid-line" x1="370.8" y1="192.4" x2="370.8" y2="194"></line>
              <line class="focus-line" x1="176.4" y1="108" x2="176.4" y2="194"></line>
              <line class="focus-line" x1="273.6" y1="108" x2="273.6" y2="194"></line>

              <polyline class="curve-main" points="50,193.8 54.9,193.7 59.7,193.6 64.6,193.4 69.4,193.2 74.3,192.8 79.2,192.4 84,191.9 88.9,191.2 93.8,190.3 98.6,189.2 103.5,187.8 108.3,186 113.2,183.9 118.1,181.4 122.9,178.4 127.8,174.8 132.6,170.7 137.5,165.9 142.4,160.6 147.2,154.6 152.1,147.9 156.9,140.8 161.8,133.1 166.7,125 171.5,116.5 176.4,108 181.3,99.4 186.1,91 191,83 195.8,75.5 200.7,68.8 205.6,63.1 210.4,58.4 215.3,55 220.1,52.9 225,52.2 229.9,52.9 234.7,55 239.6,58.4 244.4,63.1 249.3,68.8 254.2,75.5 259,83 263.9,91 268.8,99.4 273.6,108 278.5,116.5 283.3,125 288.2,133.1 293.1,140.8 297.9,147.9 302.8,154.6 307.6,160.6 312.5,165.9 317.4,170.7 322.2,174.8 327.1,178.4 331.9,181.4 336.8,183.9 341.7,186 346.5,187.8 351.4,189.2 356.3,190.3 361.1,191.2 366,191.9 370.8,192.4 375.7,192.8 380.6,193.2 385.4,193.4 390.3,193.6 395.1,193.7 400,193.8"></polyline>
              <circle class="plot-point" cx="225" cy="52.2" r="4"></circle>

              <text class="annotation-label" x="225" y="36" text-anchor="middle">moyenne</text>
              <text class="annotation-label" x="225" y="146" text-anchor="middle">aire hachurée</text>
              <text class="tick-label" x="225" y="162" text-anchor="middle">soixante-huit virgule trois pour cent</text>

              <text class="tick-label" x="176.4" y="210" text-anchor="middle">−1σ</text>
              <text class="tick-label" x="273.6" y="210" text-anchor="middle">+1σ</text>
              <text class="tick-label" x="127.8" y="226" text-anchor="middle">−2σ</text>
              <text class="tick-label" x="322.2" y="226" text-anchor="middle">+2σ</text>
              <text class="tick-label" x="79.2" y="242" text-anchor="middle">−3σ</text>
              <text class="tick-label" x="370.8" y="242" text-anchor="middle">+3σ</text>
              <text class="tick-label" x="225" y="242" text-anchor="middle">à deux sigma : 95,4 % — à trois sigma : 99,7 %</text>
            </svg>
          `,
          notes: [
            'La courbe est tracée point par point à partir de la densité $f(z) = \\dfrac{1}{\\sqrt{2\\pi}}e^{-z^2/2}$, pas dessinée de mémoire. Son aire <strong>totale</strong> vaut $1$, vérifiée par intégration numérique.',
            'L\'aire hachurée entre $-1\\sigma$ et $+1\\sigma$ vaut $0{,}682\\,689$, soit les $68{,}3\\%$ annoncés. Entre $-2\\sigma$ et $+2\\sigma$ elle vaut $0{,}954\\,500$, et entre $-3\\sigma$ et $+3\\sigma$, $0{,}997\\,300$.',
            'Ces trois nombres ne dépendent <strong>ni</strong> de $\\mu$ <strong>ni</strong> de $\\sigma$ : ils valent la même chose pour des durées de vie d\'ampoules, des tailles d\'adultes ou des erreurs de mesure. C\'est ce qui en fait une règle utilisable partout.'
          ],
          reading: 'Regarde comme la cloche s\'écrase vite en s\'éloignant du centre : au-delà de $3\\sigma$, il ne reste que $0{,}3\\%$ de l\'aire, répartie sur les <strong>deux</strong> côtés. Et voilà le piège à éviter : pour une seule queue, il faut encore diviser par deux. La probabilité de dépasser $\\mu + 2\\sigma$ n\'est pas $1 - 0{,}954 = 0{,}046$, mais la moitié, soit $0{,}023$. Chaque fois que tu ne regardes qu\'un seul côté, la symétrie de la cloche te fait diviser par deux.',
          caption: 'Densité de la loi normale centrée réduite : l\'aire entre $-\\sigma$ et $+\\sigma$ vaut $0{,}683$, entre $-2\\sigma$ et $+2\\sigma$ $0{,}954$, entre $-3\\sigma$ et $+3\\sigma$ $0{,}997$.'
        }
      ],

      recap: [
        'Loi continue : $P(X = a) = 0$ toujours. On calcule des probabilités sur des <strong>intervalles</strong> : $P(a \\leq X \\leq b) = $ aire sous la courbe de densité.',
        'Loi normale $\\mathcal{N}(\\mu;\\sigma^2)$ : symétrique autour de $\\mu$, $P(X \\leq \\mu) = 0{,}5$. Les règles $1\\sigma$ / $2\\sigma$ / $3\\sigma$ donnent $68{,}3\\%$ / $95{,}4\\%$ / $99{,}7\\%$.',
        'Pour $P(X \\leq \\mu - k\\sigma)$ ou $P(X \\geq \\mu + k\\sigma)$, diviser la queue par $2$ grâce à la symétrie.',
        'Loi uniforme sur $[a;b]$ : $P(c \\leq X \\leq d) = \\dfrac{d-c}{b-a}$ (proportionnel à la longueur de l\'intervalle).'
      ],
      piege: 'La loi normale est symétrique autour de $\\mu$. Ne pas oublier de centrer-réduire avant de lire dans une table. $P(X\\le\\mu)=0{,}5$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{N}(100;10^2)$, un élève calcule $P(80\\le X\\le120)\\approx0{,}954$ puis conclut $P(X\\le80)\\approx0{,}046$. Quelle est son erreur ?', options: ['Par symétrie, $P(X\\le80)=(1-0{,}954)/2\\approx0{,}023$. L\'élève a oublié de diviser par $2$', 'L\'élève a raison : $P(X\\le80)=1-0{,}954=0{,}046$', '$P(X\\le80)$ ne peut pas être calculé avec la règle des $2\\sigma$', 'La bonne valeur est $P(X\\le80)=0{,}954/2=0{,}477$'], answer: 0, correction: '$[80;120]=[\\mu-2\\sigma;\\mu+2\\sigma]$ donc $P(80\\le X\\le120)\\approx0{,}954$. La probabilité en dehors est $1-0{,}954=0{,}046$, mais par SYMÉTRIE de la loi normale, cette probabilité se répartit également des deux côtés : $P(X\\le80)=P(X\\ge120)=0{,}046/2\\approx0{,}023$. L\'erreur : ne pas diviser par $2$ en oubliant la symétrie.' },
      { q: 'La loi uniforme sur $[2;8]$ a pour espérance :', options: ['$3$', '$5$', '$6$', '$4$'], answer: 1, correction: '$E(X)=(2+8)/2=5$.' },
      { q: 'Pour $X\\sim\\mathcal{N}(\\mu;\\sigma^2)$, $P(X\\le\\mu)=$ ?', options: ['$0{,}68$', '$0{,}25$', '$0{,}5$', '$1$'], answer: 2, correction: 'La loi normale est symétrique autour de $\\mu$, donc $P(X\\le\\mu)=0{,}5$.' },
      { q: 'Pour une loi continue, $P(X = 3{,}14)$ vaut :', options: ['$0$ (la probabilité d\'une valeur exacte est toujours nulle pour une loi continue)', 'Cela dépend de la densité en $3{,}14$', '$f(3{,}14)$ où $f$ est la densité', 'On ne peut pas calculer cette probabilité'], answer: 0, correction: 'Pour une loi CONTINUE, la probabilité d\'une valeur ponctuelle est toujours $0$ : $P(X = a) = \\int_a^a f(x)\\,dx = 0$. On ne peut calculer que des probabilités sur des intervalles. Conséquence : $P(X \\leq 3{,}14) = P(X < 3{,}14)$.' },
      { q: 'Pour $X \\sim \\mathcal{N}(100;10^2)$, que vaut $P(X \\leq 120)$ approximativement ?', options: ['$0{,}5$', '$0{,}683$', '$0{,}954$', '$0{,}977$'], answer: 3, correction: '$120 = 100 + 2 \\times 10 = \\mu + 2\\sigma$. On sait que $P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$. Donc $P(X \\leq \\mu + 2\\sigma) = 0{,}5 + 0{,}954/2 = 0{,}5 + 0{,}477 = 0{,}977$.' }
    ],
    /* BANQUE D'EXERCICES — élargie le 2026-09-14, sur le modèle du chapitre
       pilote.

       AVANT : une seule tâche distincte (appliquer la règle des $k\sigma$ sur
       un intervalle centré), habillée de quatre décors par pick(). Le
       professeur qui feuilletait la banque y lisait douze fois la même
       lecture de table.

       APRÈS : sept tâches réellement différentes, qui couvrent ce que le
       chapitre demande VRAIMENT — l'intervalle centré, mais aussi la queue
       unilatérale (où il faut diviser par deux), la probabilité cumulée
       jusqu'à une borne, la loi uniforme en probabilité et en espérance, la
       hauteur de la densité uniforme (pour séparer densité et probabilité),
       et le centrage-réduction.

       BUG CORRIGÉ AU PASSAGE : le generate() d'origine contenait DEUX
       `.replace('.', '{,}')` écrits à la main, ce que la charte du projet
       interdit expressément (bug récurrent du corpus : décimale anglaise qui
       fuite, ou accolade fermante oubliée). Ils sont remplacés par fr().

       Le décor continue de varier par pick(), mais il ne compte pas pour de
       la diversité : une tâche se reconnaît à la première ligne du corrigé. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['intervalleCentre', 'queueUnilaterale', 'cumulee',
                            'uniformeProba', 'uniformeEsperance', 'densiteUniforme',
                            'centrageReduction']);

        const PROBAS = { 1: 0.683, 2: 0.954, 3: 0.997 };

        /* TÂCHE 1 — intervalle centré sur la moyenne. La tâche historique,
           conservée : c'est l'application directe de la règle des sigma. */
        if (tache === 'intervalleCentre') {
          const ctx = pick([
            { intro: 'La masse d\'un sachet de bonbons en sortie d\'usine suit', u: 'g' },
            { intro: 'Le quotient intellectuel dans une population suit', u: 'points' },
            { intro: 'La durée de vie d\'un composant électronique suit', u: 'heures' },
            { intro: 'Le diamètre de roulements à billes en production suit', u: 'mm' }
          ]);
          const mu = rand(5, 20) * 10, sigma = rand(2, 8), k = pick([1, 2, 3]);
          const lo = mu - k * sigma, hi = mu + k * sigma;
          return {
            statement: `${ctx.intro} une loi $\\mathcal{N}(${mu}\\,;\\,${sigma}^2)$ (en ${ctx.u}). Calculer $P(${lo} \\leq X \\leq ${hi})$. Arrondir à $0{,}001$.`,
            answer: PROBAS[k], tolerance: 0.005, unit: '',
            hint: `Compte combien de $\\sigma$ séparent chaque borne de $\\mu$ : $${lo} = ${mu} - ${k} \\times ${sigma}$ et $${hi} = ${mu} + ${k} \\times ${sigma}$. C'est l'intervalle $[\\mu - ${k}\\sigma\\,;\\,\\mu + ${k}\\sigma]$.`,
            solution: [
              `$${lo} = \\mu - ${k}\\sigma$ et $${hi} = \\mu + ${k}\\sigma$ : l'intervalle est <strong>centré</strong> sur la moyenne.`,
              `$P(\\mu - ${k}\\sigma \\leq X \\leq \\mu + ${k}\\sigma) \\approx ${fr(PROBAS[k], 3)}$`,
              `Soit environ $${fr(PROBAS[k] * 100, 1)}\\%$ des valeurs.`
            ]
          };
        }

        /* TÂCHE 2 — queue unilatérale. LA tâche qui manquait : l'élève doit
           diviser par deux, et c'est l'erreur la plus coûteuse du chapitre.
           La réponse n'est jamais un nombre du formulaire. */
        if (tache === 'queueUnilaterale') {
          const ctx = pick([
            { intro: 'Le contrôle qualité rejette les pièces trop lourdes :', u: 'g' },
            { intro: 'Un seuil d\'alerte est fixé sur une mesure :', u: 'mV' },
            { intro: 'Une norme impose un maximum :', u: 'mm' }
          ]);
          const mu = rand(4, 15) * 10, sigma = rand(2, 9), k = pick([1, 2, 3]);
          const seuil = mu + k * sigma;
          const res = parseFloat(((1 - PROBAS[k]) / 2).toFixed(4));
          return {
            statement: `${ctx.intro} la grandeur $X$ suit $\\mathcal{N}(${mu}\\,;\\,${sigma}^2)$ (en ${ctx.u}). Calculer $P(X > ${seuil})$. Arrondir à $0{,}0001$.`,
            answer: res, tolerance: 0.001, unit: '',
            hint: `$${seuil} = \\mu + ${k}\\sigma$. Commence par la probabilité de l'intervalle centré, puis souviens-toi que ce qui reste se partage entre <strong>deux</strong> queues, à gauche et à droite.`,
            solution: [
              `$${seuil} = ${mu} + ${k} \\times ${sigma} = \\mu + ${k}\\sigma$`,
              `L'intervalle centré $[\\mu - ${k}\\sigma\\,;\\,\\mu + ${k}\\sigma]$ contient $${fr(PROBAS[k], 3)}$ de la population.`,
              `Il reste donc $1 - ${fr(PROBAS[k], 3)} = ${fr(parseFloat((1 - PROBAS[k]).toFixed(4)))}$ en dehors — mais réparti des <strong>deux</strong> côtés.`,
              `Par symétrie de la cloche, une seule queue en contient la moitié : $P(X > ${seuil}) = \\dfrac{${fr(parseFloat((1 - PROBAS[k]).toFixed(4)))}}{2} = ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 3 — probabilité cumulée jusqu'à une borne. Encore un autre
           découpage : ici on additionne la moitié centrale et une demi-bande,
           au lieu de retrancher. */
        if (tache === 'cumulee') {
          const ctx = pick([
            { intro: 'Un institut étudie une grandeur qui suit' },
            { intro: 'Un laboratoire mesure une grandeur qui suit' },
            { intro: 'Une étude statistique porte sur une grandeur qui suit' }
          ]);
          const mu = rand(5, 18) * 10, sigma = rand(2, 9), k = pick([1, 2]);
          const borne = mu + k * sigma;
          const res = parseFloat((0.5 + PROBAS[k] / 2).toFixed(4));
          return {
            statement: `${ctx.intro} $\\mathcal{N}(${mu}\\,;\\,${sigma}^2)$. Calculer $P(X \\leq ${borne})$. Arrondir à $0{,}0001$.`,
            answer: res, tolerance: 0.001, unit: '',
            hint: `Découpe en deux morceaux : tout ce qui est en dessous de la moyenne, puis la portion entre la moyenne et $${borne}$. Le premier morceau vaut $0{,}5$ par symétrie.`,
            solution: [
              `$${borne} = \\mu + ${k}\\sigma$`,
              `En dessous de la moyenne : $P(X \\leq \\mu) = 0{,}5$ exactement, par symétrie de la cloche.`,
              `Entre $\\mu$ et $\\mu + ${k}\\sigma$ : c'est la <strong>moitié</strong> de l'intervalle centré, soit $\\dfrac{${fr(PROBAS[k], 3)}}{2} = ${fr(parseFloat((PROBAS[k] / 2).toFixed(4)))}$`,
              `Total : $P(X \\leq ${borne}) = 0{,}5 + ${fr(parseFloat((PROBAS[k] / 2).toFixed(4)))} = ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 4 — loi uniforme, probabilité d'un intervalle. Change de loi,
           et la réponse se lit comme un rapport de longueurs : c'est le
           modèle le plus simple du « aire = probabilité ». */
        if (tache === 'uniformeProba') {
          const ctx = pick([
            { intro: 'Un bus passe à un horaire aléatoire, uniformément réparti sur' },
            { intro: 'Un appel arrive à un instant aléatoire, uniformément réparti sur' },
            { intro: 'Une panne survient à un instant aléatoire, uniformément réparti sur' }
          ]);
          const b = pick([10, 12, 20, 30, 60]);
          const c = rand(1, Math.floor(b / 3)), d = c + rand(2, Math.floor(b / 2));
          const res = parseFloat(((d - c) / b).toFixed(4));
          return {
            statement: `${ctx.intro} $[0\\,;\\,${b}]$ (en minutes). Calculer $P(${c} \\leq X \\leq ${d})$. Arrondir à $0{,}0001$.`,
            answer: res, tolerance: 0.001, unit: '',
            hint: `Pour une loi uniforme, la probabilité est proportionnelle à la <strong>longueur</strong> de l'intervalle : c'est l'aire d'un rectangle de hauteur $\\dfrac{1}{${b}}$.`,
            solution: [
              `Longueur de l'intervalle cherché : $${d} - ${c} = ${d - c}$ minutes.`,
              `Longueur totale : $${b}$ minutes.`,
              `$P(${c} \\leq X \\leq ${d}) = \\dfrac{${d - c}}{${b}} = ${fr(res)}$`,
              `Autrement dit : l'aire du rectangle de largeur $${d - c}$ et de hauteur $\\dfrac{1}{${b}}$.`
            ]
          };
        }

        /* TÂCHE 5 — espérance d'une loi uniforme. Aucune probabilité à
           calculer : c'est une formule différente, et la réponse est une
           valeur de la variable, pas un nombre entre 0 et 1. */
        if (tache === 'uniformeEsperance') {
          const ctx = pick([
            { intro: 'Le temps d\'attente à un guichet est uniformément réparti sur' },
            { intro: 'La position d\'un défaut sur une pièce est uniformément répartie sur' },
            { intro: 'Le retard d\'une livraison est uniformément réparti sur' }
          ]);
          const a = rand(0, 6), b = a + pick([6, 8, 10, 12, 14]);
          const res = parseFloat(((a + b) / 2).toFixed(2));
          return {
            statement: `${ctx.intro} $[${a}\\,;\\,${b}]$. Calculer l'espérance $E(X)$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.01, unit: '',
            hint: `Quand toutes les valeurs sont également probables, la valeur moyenne est simplement le <strong>milieu</strong> de l'intervalle.`,
            solution: [
              `Pour une loi uniforme sur $[a\\,;\\,b]$ : $E(X) = \\dfrac{a + b}{2}$`,
              `$E(X) = \\dfrac{${a} + ${b}}{2} = ${fr(res)}$`,
              `Ce résultat se comprend sans formule : la densité étant plate, la répartition est parfaitement symétrique autour du milieu.`
            ]
          };
        }

        /* TÂCHE 6 — hauteur de la densité uniforme. La tâche qui sépare
           DENSITÉ et PROBABILITÉ : la réponse peut dépasser 1, ce qui est
           impossible pour une probabilité. Adossée au premier schéma. */
        if (tache === 'densiteUniforme') {
          const ctx = pick([
            { intro: 'On modélise une grandeur par une loi uniforme sur' },
            { intro: 'Un logiciel simule une valeur uniformément répartie sur' },
            { intro: 'Un capteur renvoie une valeur uniformément répartie sur' }
          ]);
          const a = rand(0, 4);
          const largeur = pick([0.4, 0.5, 2, 4, 5]);
          const b = parseFloat((a + largeur).toFixed(2));
          const res = parseFloat((1 / largeur).toFixed(4));
          return {
            statement: `${ctx.intro} $[${fr(a)}\\,;\\,${fr(b)}]$. Quelle est la <strong>hauteur</strong> de sa densité, c'est-à-dire la valeur de $f(x)$ sur cet intervalle ? Arrondir à $0{,}0001$.`,
            answer: res, tolerance: 0.001, unit: '',
            hint: `L'aire totale sous une densité vaut toujours $1$. Ici la densité est un rectangle : si tu connais son aire et sa largeur, tu en déduis sa hauteur.`,
            solution: [
              `Largeur de l'intervalle : $${fr(b)} - ${fr(a)} = ${fr(largeur)}$`,
              `L'aire totale sous la densité doit valoir $1$, donc $\\text{hauteur} \\times ${fr(largeur)} = 1$`,
              `$f(x) = \\dfrac{1}{${fr(largeur)}} = ${fr(res)}$ sur $[${fr(a)}\\,;\\,${fr(b)}]$, et $0$ ailleurs.`,
              res > 1
                ? `Remarque importante : cette hauteur <strong>dépasse $1$</strong>. C'est possible parce qu'une densité n'est <strong>pas</strong> une probabilité — seule l'aire en est une, et elle vaut bien $1$.`
                : `Retiens que cette hauteur n'est <strong>pas</strong> une probabilité : seule l'aire sous la courbe en est une.`
            ]
          };
        }

        /* TÂCHE 7 — centrage-réduction. La seule tâche où l'élève transforme
           la variable au lieu de lire une table : la réponse est un nombre
           d'écarts-types, pas une probabilité. */
        const ctx = pick([
          { intro: 'Pour comparer deux mesures d\'échelles différentes, on centre et on réduit :' },
          { intro: 'Pour utiliser une table standard, on centre et on réduit :' },
          { intro: 'Pour situer une valeur par rapport à la moyenne, on centre et on réduit :' }
        ]);
        const mu = rand(4, 16) * 10, sigma = pick([2, 4, 5, 8, 10]);
        const ecarts = pick([-2, -1.5, 1.5, 2, 2.5]);
        const x = parseFloat((mu + ecarts * sigma).toFixed(2));
        const res = parseFloat(ecarts.toFixed(2));
        return {
          statement: `${ctx.intro} la variable $X$ suit $\\mathcal{N}(${mu}\\,;\\,${sigma}^2)$ et l'on observe la valeur $x = ${fr(x)}$. Calculer $z = \\dfrac{x - \\mu}{\\sigma}$. Arrondir à $0{,}01$.`,
          answer: res, tolerance: 0.01, unit: '',
          hint: `On retranche la moyenne, puis on divise par l'écart-type. Le nombre obtenu se lit « à tant d'écarts-types de la moyenne ».`,
          solution: [
            `Écart à la moyenne : $${fr(x)} - ${mu} = ${fr(parseFloat((x - mu).toFixed(2)))}$`,
            `Division par l'écart-type : $z = \\dfrac{${fr(parseFloat((x - mu).toFixed(2)))}}{${sigma}} = ${fr(res)}$`,
            `Interprétation : la valeur observée se situe à $${fr(Math.abs(res))}$ écart${Math.abs(res) >= 2 ? 's' : ''}-type${Math.abs(res) >= 2 ? 's' : ''} ${res < 0 ? 'en dessous' : 'au-dessus'} de la moyenne. Après centrage-réduction, $Z$ suit $\\mathcal{N}(0\\,;\\,1)$, la même pour toutes les grandeurs.`
          ]
        };
      }
    },
    probleme: {
      context: 'La taille des adultes français suit (approximativement) une loi normale $\\mathcal{N}(175;8^2)$ pour les hommes (en cm).',
      tasks: [
        'Quelle est la probabilité qu\'un homme mesure entre $167$ et $183$ cm ?',
        'Quelle proportion mesure entre $159$ et $191$ cm ?',
        'Un homme mesure plus de $191$ cm. Est-ce rare ?'
      ],
      solutions: [
        '$[167;183]=[\\mu-\\sigma;\\mu+\\sigma]$ : $P\\approx0{,}683$, soit $68{,}3\\%$.',
        '$[159;191]=[\\mu-2\\sigma;\\mu+2\\sigma]$ : $P\\approx0{,}954$, soit $95{,}4\\%$.',
        '$P(X>191)=P(X>\\mu+2\\sigma)\\approx\\frac{1-0{,}954}{2}\\approx2{,}3\\%$ : oui, c\'est rare.'
      ],
      finalAnswer: '$68\\%$ entre $167$-$183$ cm ; $95\\%$ entre $159$-$191$ cm ; être $>191$ cm est rare ($\\approx2{,}3\\%$).'
    },

    evaluation: {
      title: 'Évaluation — Lois de probabilité continues',
      duration: '35 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-14. L'ancienne demandait
             $P(42 \leq X \leq 58)$ pour $\mathcal{N}(50\,;\,4^2)$ : c'est
             exactement la même tâche que la question 2 — situer des bornes en
             nombre d'écarts-types, puis lire la règle des $k\sigma$. Deux
             questions sur cinq pour une seule compétence, dans une évaluation
             qui comptait déjà trop de calcul : sur les soixante questions du
             niveau, « calculer » dépassait le plafond de 35 %.

             La nouvelle question RENVERSE le sens de lecture : on donne la
             probabilité et l'on cherche l'écart-type. Aucune formule du cours
             ne s'applique directement, et l'élève doit reconnaître de
             lui-même que $99{,}7\%$ désigne l'intervalle à $3\sigma$, puis
             remonter de la demi-largeur à $\sigma$. C'est « chercher » :
             explorer une piste sans méthode donnée. */
          statement: 'Une machine produit des axes dont le diamètre suit une loi normale de moyenne $\\mu = 20$ mm. Le service qualité constate que $99{,}7\\%$ des axes ont un diamètre compris entre $19{,}4$ mm et $20{,}6$ mm.<br/><br/>En déduire l\'écart-type $\\sigma$ de la production, en mm.',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'mm',
          points: 2,
          correction: 'Le pourcentage est la clé : $99{,}7\\%$ est la valeur de la règle des $k\\sigma$ pour $k = 3$. L\'intervalle donné est donc $[\\mu - 3\\sigma\\,;\\,\\mu + 3\\sigma]$.<br/><br/>On vérifie que l\'intervalle est bien centré sur $\\mu$ : $20 - 19{,}4 = 0{,}6$ et $20{,}6 - 20 = 0{,}6$. Il l\'est.<br/><br/>Cette demi-largeur vaut donc $3\\sigma$ :<br/><br/>$3\\sigma = 0{,}6$, d\'où $\\sigma = \\dfrac{0{,}6}{3} = 0{,}2$ mm.<br/><br/>La démarche est l\'inverse de l\'habituelle : d\'ordinaire on connaît $\\sigma$ et l\'on cherche une probabilité. Ici la probabilité est <strong>donnée</strong>, et c\'est elle qui désigne le $k$ à employer. Retenir les trois repères — $68\\%$ pour $1\\sigma$, $95\\%$ pour $2\\sigma$, $99{,}7\\%$ pour $3\\sigma$ — sert donc dans les deux sens.'
        },
        {
          /* Q2 CONSERVÉE dans son intention (calcul), mais REFORMULÉE le
             2026-09-14 pour ne plus se cocher à la reconnaissance : la
             réponse $0{,}5$ était devinable sans rien comprendre, puisque
             c'était la seule « jolie » valeur de la liste. Elle demande
             maintenant une queue unilatérale, où il faut effectivement
             diviser par deux. C'est « calculer ». */
          statement: 'Pour $X \\sim \\mathcal{N}(100\\,;\\,15^2)$, calculer $P(X > 130)$. Arrondir à $0{,}0001$.',
          type: 'numeric',
          answer: 0.023,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On situe d\'abord la borne : $130 = 100 + 2 \\times 15 = \\mu + 2\\sigma$.<br/><br/>L\'intervalle centré $[\\mu - 2\\sigma\\,;\\,\\mu + 2\\sigma] = [70\\,;\\,130]$ contient $0{,}954$ de la population.<br/><br/>Il reste donc $1 - 0{,}954 = 0{,}046$ en dehors — mais cette part se trouve des <strong>deux</strong> côtés de la cloche, à gauche de $70$ et à droite de $130$.<br/><br/>Par symétrie, chaque queue en contient la moitié :<br/><br/>$P(X > 130) = \\dfrac{0{,}046}{2} = 0{,}023$.<br/><br/>L\'erreur à éviter est d\'annoncer $0{,}046$ : ce nombre est la probabilité d\'être <strong>loin</strong> de la moyenne, des deux côtés confondus, et non celle de dépasser $130$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-14. L'ancienne demandait $E(X)$ pour une
             loi uniforme : un troisième calcul, dans une évaluation qui en
             comptait déjà cinq. Aucune des cinq questions ne demandait de
             LIRE une courbe de densité, alors que c'est l'objet même du
             chapitre.

             La nouvelle question ne se calcule pas : elle demande de dire ce
             qu'on lit sur une densité, et notamment de ne PAS confondre la
             hauteur avec une probabilité. C'est « représenter ». */
          statement: 'On trace la densité d\'une loi uniforme sur $[0\\,;\\,0{,}5]$. C\'est un rectangle, et sa <strong>hauteur</strong> vaut $2$. Un élève s\'inquiète : « une probabilité ne peut pas valoir $2$, il y a une erreur dans la figure ». Que faut-il lui répondre ?',
          type: 'multiple-choice',
          options: [
            'La figure est juste : cette hauteur est une <strong>densité</strong>, pas une probabilité. Ce qui doit valoir $1$, c\'est l\'<strong>aire</strong>, et ici $0{,}5 \\times 2 = 1$',
            'Il a raison : la hauteur devrait valoir $0{,}5$',
            'Il a raison : une densité ne peut jamais dépasser $1$',
            'La figure est juste, mais seulement parce que l\'intervalle commence à $0$'
          ],
          answer: 0,
          points: 2,
          correction: 'L\'inquiétude de l\'élève est légitime, et c\'est exactement le malentendu central du chapitre : il lit la <strong>hauteur</strong> de la courbe comme une probabilité.<br/><br/>Or une densité n\'est pas une probabilité. Elle n\'est même pas un nombre sans dimension : c\'est une probabilité <strong>par unité de longueur</strong>. Rien ne lui interdit donc de dépasser $1$.<br/><br/>Ce qui est contraint, c\'est l\'<strong>aire totale</strong>, qui doit valoir exactement $1$ — puisqu\'elle représente la certitude que la variable prend une valeur quelconque.<br/><br/>Vérifions : le rectangle a pour largeur $0{,}5 - 0 = 0{,}5$ et pour hauteur $2$. Son aire vaut $0{,}5 \\times 2 = 1$. La figure est donc parfaitement correcte.<br/><br/>Le raisonnement général : plus l\'intervalle est étroit, plus la densité doit être haute pour que l\'aire reste égale à $1$. Sur $[0\\,;\\,0{,}01]$, elle vaudrait $100$.<br/><br/>Règle à retenir : sur une densité, on ne lit jamais une probabilité en hauteur, <strong>toujours en aire</strong>.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. L'ancienne demandait $P(X > 90)$ pour
             une loi normale : exactement la même tâche que la Q2 telle
             qu'elle est maintenant rédigée, ce qui aurait fait doublon.

             La nouvelle part d'une situation industrielle et demande de la
             TRADUIRE : identifier les paramètres dans un texte qui ne les
             nomme pas, choisir l'événement à calculer, puis interpréter le
             résultat en nombre de pièces. C'est « modéliser ». */
          statement: 'Une machine remplit des sachets. Les masses obtenues se répartissent autour de $250$ g, et l\'atelier constate que $95{,}4\\%$ des sachets pèsent entre $244$ g et $256$ g. Le service qualité rejette tout sachet de moins de $247$ g. Sur un lot de $10\\,000$ sachets, combien seront rejetés, environ ?',
          type: 'numeric',
          answer: 1585,
          tolerance: 120,
          unit: 'sachets',
          points: 2,
          correction: 'Rien n\'est donné directement : il faut d\'abord <strong>identifier les paramètres</strong>.<br/><br/>La moyenne est annoncée : $\\mu = 250$ g.<br/><br/>Pour l\'écart-type, on reconnaît la règle des $2\\sigma$ : $95{,}4\\%$ correspond à l\'intervalle $[\\mu - 2\\sigma\\,;\\,\\mu + 2\\sigma]$. Or cet intervalle est $[244\\,;\\,256]$, donc $\\mu - 2\\sigma = 244$, ce qui donne $2\\sigma = 6$ et $\\sigma = 3$ g.<br/><br/>Le seuil de rejet vaut $247 = 250 - 3 = \\mu - \\sigma$.<br/><br/>On cherche donc $P(X < \\mu - \\sigma)$. L\'intervalle $[\\mu - \\sigma\\,;\\,\\mu + \\sigma]$ contient $0{,}683$, il reste $1 - 0{,}683 = 0{,}317$ réparti des deux côtés, donc une seule queue en contient la moitié :<br/><br/>$P(X < 247) = \\dfrac{0{,}317}{2} \\approx 0{,}1585$.<br/><br/>Sur $10\\,000$ sachets : $10\\,000 \\times 0{,}1585 \\approx 1585$ sachets rejetés.<br/><br/>L\'interprétation compte autant que le calcul : près d\'un sachet sur six part au rebut. Un réglage aussi serré coûte cher, et l\'atelier a intérêt soit à viser une masse moyenne plus haute, soit à réduire $\\sigma$ — c\'est-à-dire à régler la machine plus finement.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. L'ancienne demandait
             $P(1 \leq X \leq 4)$ pour une uniforme : un quatrième calcul.

             La nouvelle ne produit aucun nombre : elle demande de trancher
             entre deux affirmations qui se ressemblent — « probabilité
             nulle » et « impossible » — c'est-à-dire de passer d'une
             propriété à sa portée. C'est « raisonner ». */
          statement: 'Un train passe à un horaire aléatoire uniformément réparti entre $8$ h et $9$ h. On a montré en cours que la probabilité qu\'il passe exactement à $8$ h $30$ min $00$ s vaut $0$. Pourtant, le train passe bien à un instant précis. Que faut-il en conclure ?',
          type: 'multiple-choice',
          options: [
            'En probabilités continues, un événement de probabilité nulle n\'est <strong>pas</strong> forcément impossible. Chaque instant a une probabilité nulle, et l\'un d\'eux se réalise pourtant',
            'Il y a une contradiction : la probabilité n\'est donc pas réellement nulle, seulement très petite',
            'Le train ne passe pas vraiment à un instant précis, mais pendant un intervalle de temps',
            'Le modèle uniforme est mal choisi pour cette situation'
          ],
          answer: 0,
          points: 2,
          correction: 'Il n\'y a aucune contradiction, mais il faut accepter de séparer deux idées que le langage courant confond.<br/><br/>En probabilités <strong>discrètes</strong>, « probabilité nulle » et « impossible » coïncident : si un dé ne peut pas faire $7$, c\'est que $7$ n\'est pas une face.<br/><br/>En probabilités <strong>continues</strong>, ce lien se rompt. La probabilité étant une <strong>aire</strong>, un instant isolé a une largeur nulle, donc une aire nulle, donc une probabilité nulle — et cela vaut pour <strong>tous</strong> les instants, sans exception.<br/><br/>Si « probabilité nulle » voulait dire « impossible », aucun instant ne serait possible, et le train ne passerait jamais. C\'est bien la preuve que l\'implication est fausse.<br/><br/>Ce qu\'on peut dire, en revanche, c\'est que la probabilité d\'un <strong>intervalle</strong> est calculable : entre $8$ h $29$ et $8$ h $31$, elle vaut $\\dfrac{2}{60} \\approx 0{,}033$.<br/><br/>Conséquence pratique à retenir : puisque les points isolés ne pèsent rien, inégalités strictes et larges donnent le même résultat, et $P(X \\leq a) = P(X < a)$ pour toute loi continue.'
        }
      ]
    }
  });
