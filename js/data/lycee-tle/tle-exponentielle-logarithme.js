/* =========================================================
   Spark Learning – data/lycee-tle/tle-exponentielle-logarithme.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-exponentielle-logarithme',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Fonctions Exponentielle et Logarithme',
    subtitle: 'pH, demi-vie radioactive, décroissance',
    keywords: ['Logarithme', 'pH', 'Exponentielle', 'Demi-vie'],
    physics: 'pH = −log[H₃O⁺], décroissance radioactive, décibels',

    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14.

         L'ancienne version énumérait les définitions : « l'exponentielle est
         l'unique fonction égale à sa dérivée », « le logarithme naturel est
         l'inverse », « le logarithme décimal est différent ». C'est un
         formulaire, pas une entrée : le test du cahier des charges est « si
         on peut répondre à la question d'ouverture sans la notion du
         chapitre, la question est mal choisie », et une définition ne pose
         aucune question.

         La question retenue est une VRAIE impasse, et elle est vérifiable
         par l'élève lui-même : il sait calculer $m_0/2$, $m_0/4$, $m_0/8$ ;
         il ne sait PAS calculer ce qu'il reste au bout d'une durée qui ne
         tombe pas sur un nombre entier de demi-vies. L'interpolation
         linéaire, qu'il propose naturellement, donne un résultat FAUX, et
         il peut s'en apercevoir seul en la testant sur une durée où il
         connaît la réponse.

         On évite le travers inverse (la mise en situation décorative) : la
         difficulté est mathématique, et la radioactivité n'est pas un décor,
         c'est le phénomène même qui impose l'exponentielle. */
      intro: 'On te dit qu\'un échantillon radioactif a une <strong>demi-vie</strong> de $8$ jours : tous les $8$ jours, il en reste la moitié. Tu pars de $160$ mg.<br/><br/>Au bout de $8$ jours, il en reste $80$. Au bout de $16$, il en reste $40$. Au bout de $24$, $20$. Jusque-là, tu n\'as besoin de rien de neuf : tu divises par $2$ à chaque palier.<br/><br/>Maintenant la vraie question : <strong>combien en reste-t-il au bout de $12$ jours ?</strong><br/><br/>Douze jours, c\'est entre le premier et le deuxième palier. La réponse qui vient naturellement, c\'est de couper la poire en deux : entre $80$ et $40$, on prendrait $60$.<br/><br/>Teste cette idée, elle se réfute toute seule. Si l\'on « coupe la poire en deux » à chaque fois, alors après $4$ jours il resterait $120$, puis après $4$ jours de plus $80$ — d\'accord jusqu\'ici. Mais recommence avec des pas de $2$ jours : $140$, $120$, $100$, $80$. Puis avec des pas de $1$ jour : tu n\'obtiens plus les mêmes nombres intermédiaires. Une réponse qui dépend de la façon dont on découpe le temps ne peut pas être la bonne.<br/><br/>Ce qui est constant ici n\'est pas ce qu\'on <strong>enlève</strong>, c\'est ce par quoi on <strong>multiplie</strong>. Chaque jour, la masse est multipliée par un même facteur, légèrement inférieur à $1$. Sur $8$ jours, ces facteurs s\'accumulent jusqu\'à donner exactement $\\dfrac{1}{2}$.<br/><br/>Une grandeur qui se multiplie par un facteur constant à chaque instant, cela porte un nom : c\'est une <strong>exponentielle</strong>. Et pour faire le chemin inverse — retrouver la durée à partir de ce qu\'il reste — il faudra son miroir, le <strong>logarithme</strong>.',
      definitions: [
        { term: 'Fonction exponentielle', def: 'Unique fonction $f$ définie sur $\\mathbb{R}$ telle que $f\' = f$ et $f(0) = 1$. On la note $\\exp$ ou $e^x$. Elle est strictement positive et strictement croissante sur $\\mathbb{R}$.' },
        { term: 'Logarithme népérien', def: 'Fonction réciproque de l\'exponentielle, définie sur $]0;+\\infty[$. Pour tout $x > 0$ : $\\ln(x) = y \\Leftrightarrow e^y = x$. Sa dérivée est $(\\ln x)\' = \\dfrac{1}{x}$.' },
        { term: 'Logarithme décimal', def: 'Logarithme en base $10$ : $\\log_{10}(x) = \\dfrac{\\ln x}{\\ln 10}$. Propriété clé : $\\log_{10}(10^n) = n$. Utilisé en chimie (pH) et en acoustique (décibels).' },
        { term: 'Demi-vie ($t_{1/2}$)', def: 'Durée au bout de laquelle la moitié d\'un échantillon radioactif s\'est désintégrée. Reliée à la constante de décroissance par $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$.' }
      ],
      method: {
        title: 'Propriétés essentielles',
        steps: [
          '<strong>Logarithme décimal et pH</strong> : $\\log(a \\times b) = \\log a + \\log b$ ; $\\log(10^n) = n$ ; $pH = -\\log[H_3O^+]$.',
          '<strong>Exponentielle naturelle</strong> : $(e^x)\' = e^x$ (unique égale à sa dérivée). Propriété : $e^{a+b} = e^a \\cdot e^b$.',
          '<strong>Croissance exponentielle</strong> : demi-vie après $k$ périodes : $m = m_0 \\times (1/2)^k$ ; continu : $m(t) = m_0 e^{-\\lambda t}$ où $\\lambda = \\ln 2 / t_{1/2}$.'
        ]
      },
      example: {
        statement: 'Le strontium 90 ($^{90}$Sr) a une demi-vie $t_{1/2} = 28{,}8$ ans. Un échantillon contient initialement $m_0 = 200$ mg. Quelle masse reste après $50$ ans ?',
        steps: [
          'On calcule la constante de décroissance : $\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}693}{28{,}8} \\approx 0{,}02407\\ \\text{an}^{-1}$.',
          'On applique la loi de décroissance : $m(t) = m_0 e^{-\\lambda t} = 200 \\times e^{-0{,}02407 \\times 50}$.',
          'On calcule l\'exposant : $-0{,}02407 \\times 50 = -1{,}2035$, donc $e^{-1{,}2035} \\approx 0{,}3005$.',
          '$m(50) = 200 \\times 0{,}3005 \\approx 60{,}1$ mg.'
        ],
        answer: 'Après $50$ ans, il reste environ $60{,}1$ mg sur les $200$ mg initiaux, soit $30\\%$ de l\'échantillon.'
      },
      formulas: [
        '$pH = -\\log[H_3O^+]$',
        '$[H_3O^+] = 10^{-pH}$',
        '$m(t) = m_0 \\left(\\dfrac{1}{2}\\right)^{t/t_{1/2}} = m_0 e^{-\\lambda t}$',
        '$\\log(10^n) = n$ ; $\\ln(e^n) = n$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Décroissance radioactive',
        title: '$m(t) = m_0 e^{-\\lambda t}$ avec $m_0 = 200$ mg et $t_{1/2} = 28{,}8$ ans (strontium 90, exemple du cours)',
        description: 'Tracé point par point de la masse restante de strontium 90 au cours du temps, avec les paliers de demi-vie ($t_{1/2}$, $2t_{1/2}$, $3t_{1/2}$) marqués et vérifiés par calcul.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="decay-graph-title decay-graph-desc">
            <title id="decay-graph-title">Decroissance radioactive du strontium 90</title>
            <desc id="decay-graph-desc">Courbe de la masse restante m(t) en fonction du temps pour le strontium 90, avec m0 = 200 mg et une demi-vie de 28,8 ans. Trois paliers de demi-vie sont marques : a 28,8 ans il reste 100 mg (la moitie), a 57,6 ans il reste 50 mg (le quart), a 86,4 ans il reste 25 mg (le huitieme). Le point a t = 50 ans, repris de l'exemple du cours, est egalement marque avec une masse restante d'environ 60 mg.</desc>

            <!-- grille -->
            <line class="grid-line" x1="60" y1="169.5" x2="440" y2="169.5"></line>
            <line class="grid-line" x1="60" y1="88.6" x2="440" y2="88.6"></line>
            <line class="grid-line" x1="186.7" y1="20" x2="186.7" y2="210"></line>
            <line class="grid-line" x1="313.3" y1="20" x2="313.3" y2="210"></line>

            <!-- axes -->
            <line class="axis" x1="60" y1="210" x2="460" y2="210"></line>
            <line class="axis" x1="60" y1="210" x2="60" y2="20"></line>

            <!-- valeur initiale m0 -->
            <line class="guide-line" x1="60" y1="48.1" x2="440" y2="48.1"></line>
            <text class="annotation-label" x="436" y="41" text-anchor="end">m0 = 200 mg</text>

            <!-- courbe m(t) = m0 * e^(-lambda t) -->
            <path class="curve-main" d="M60.0 48.1 L72.7 58.9 L85.3 69.1 L98.0 78.5 L110.7 87.3 L123.3 95.5 L136.0 103.2 L148.7 110.3 L161.3 117.0 L174.0 123.2 L186.7 129.0 L199.3 134.5 L212.0 139.5 L224.7 144.2 L237.3 148.6 L250.0 152.8 L262.7 156.6 L275.3 160.2 L288.0 163.5 L300.7 166.6 L313.3 169.5 L326.0 172.2 L338.7 174.8 L351.3 177.1 L364.0 179.3 L376.7 181.4 L389.3 183.3 L402.0 185.1 L414.7 186.8 L427.3 188.3 L440.0 189.8"></path>

            <!-- repere a 1 demi-vie : 100 mg -->
            <line class="guide-line" x1="186.7" y1="210" x2="186.7" y2="129.0"></line>
            <line class="guide-line" x1="60" y1="129.0" x2="186.7" y2="129.0"></line>
            <circle class="plot-point" cx="186.7" cy="129.0" r="5"></circle>
            <text class="annotation-label" x="191.7" y="124" text-anchor="start">100 mg (1/2)</text>

            <!-- repere a 2 demi-vies : 50 mg -->
            <line class="guide-line" x1="313.3" y1="210" x2="313.3" y2="169.5"></line>
            <circle class="plot-point-alt" cx="313.3" cy="169.5" r="5"></circle>
            <text class="annotation-label" x="318.3" y="150" text-anchor="start">50 mg (1/4)</text>

            <!-- repere a 3 demi-vies : 25 mg -->
            <circle class="plot-point-alt" cx="440" cy="189.8" r="4"></circle>
            <text class="annotation-label" x="435" y="206" text-anchor="end">25 mg (1/8)</text>

            <!-- point exemple t = 50 ans (repris de l'exemple du cours) -->
            <circle class="plot-point-alt" cx="279.9" cy="161.4" r="4"></circle>
            <text class="annotation-label" x="225" y="188" text-anchor="start">t = 50 ans</text>

            <!-- ticks x -->
            <text class="tick-label" x="60" y="228" text-anchor="middle">0</text>
            <text class="tick-label" x="186.7" y="228" text-anchor="middle">t½ = 28,8 ans</text>
            <text class="tick-label" x="313.3" y="228" text-anchor="middle">2t½ = 57,6 ans</text>
            <text class="tick-label" x="440" y="228" text-anchor="end">3t½ = 86,4 ans</text>
            <text class="axis-label" x="440" y="245" text-anchor="end">t (années)</text>

            <!-- ticks y -->
            <text class="tick-label" x="50" y="213" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="172.5" text-anchor="end">50</text>
            <text class="tick-label" x="50" y="91.6" text-anchor="end">150</text>
            <text class="axis-label" x="16" y="13" text-anchor="start">m (mg)</text>
          </svg>
        `,
        notes: [
          'À chaque demi-vie $t_{1/2}=28{,}8$ ans, la masse est divisée par $2$ : $200 \\to 100 \\to 50 \\to 25$ mg — c\'est la définition même de la demi-vie, vérifiée par $\\lambda = \\ln 2 / t_{1/2} \\approx 0{,}02407$ an$^{-1}$.',
          'À $t=50$ ans (l\'exemple du cours, entre $1$ et $2$ demi-vies), il reste $m(50) = 200\\,e^{-\\lambda \\times 50} \\approx 60{,}0$ mg, soit environ $30\\%$ de la masse initiale.',
          'La courbe s\'aplatit progressivement mais ne touche jamais l\'axe $m=0$ : en théorie, il reste toujours une trace de l\'échantillon, aussi petite soit-elle.'
        ],
        reading: 'Repère d\'abord les trois paliers régulièrement espacés dans le temps (une demi-vie à chaque fois) : la masse y est systématiquement divisée par $2$, ce qui donne la forme caractéristique en "marches qui s\'aplatissent" d\'une décroissance exponentielle.',
        caption: 'Décroissance radioactive du strontium 90 : $m(t) = m_0\\,e^{-\\lambda t}$, avec $m_0 = 200$ mg et $t_{1/2} = 28{,}8$ ans (mêmes valeurs que l\'exemple du cours).'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         Principe du cahier des charges : une figure par MALENTENDU, pas une
         figure par formule. Les trois retenus sont ceux qui coûtent le
         chapitre :

           1. « réciproque » est un mot que l'élève récite sans jamais avoir
              vu ce qu'il désigne. La symétrie par rapport à la droite
              $y = x$ n'est pas une propriété de plus : c'est la DÉFINITION,
              rendue visible ;
           2. la décroissance radioactive lue comme une soustraction
              régulière (« il en part toujours autant ») au lieu d'une
              division régulière ;
           3. $\log$ et $\ln$ confondus, alors qu'ils ne diffèrent que d'un
              facteur constant — un facteur qu'on peut MESURER sur la figure.

         La première figure impose un repère ORTHONORMÉ : sans échelles
         égales sur les deux axes, la symétrie serait fausse à l'œil, et la
         figure contredirait le texte qu'elle illustre. Les points de la
         courbe de $\ln$ sont d'ailleurs obtenus en ÉCHANGEANT les
         coordonnées de ceux de $\exp$ — la symétrie est donc exacte par
         construction, pas approchée par calcul séparé.

         Toutes les coordonnées sont CALCULÉES par script et vérifiées par
         scripts/manuel/tests/diagrams-tle.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que « réciproque » veut dire',
          title: 'Deux courbes en miroir de part et d\'autre de la première bissectrice',
          description: 'La courbe de $\\ln$ n\'est pas une courbe de plus à retenir : c\'est <strong>exactement</strong> celle de $\\exp$, retournée. Chaque point $(x\\,;\\,e^x)$ de l\'une a pour reflet le point $(e^x\\,;\\,x)$ de l\'autre, par symétrie autour de la droite $y = x$. Le repère est orthonormé, sans quoi le miroir ne se verrait pas.',
          svg: `
            <svg viewBox="0 0 340 330" role="img" aria-labelledby="tle-recip-title tle-recip-desc">
              <title id="tle-recip-title">Les courbes de exponentielle et de logarithme, symetriques par rapport a la droite y egale x</title>
              <desc id="tle-recip-desc">Dans un repere orthonorme, la courbe de la fonction exponentielle monte tres vite a droite et s'aplatit vers la gauche en restant au-dessus de l'axe des abscisses. La courbe du logarithme neperien monte tres lentement a droite et plonge vers le bas pres de l'axe des ordonnees. La droite d'equation y egale x traverse la figure en diagonale : les deux courbes sont l'image l'une de l'autre par symetrie par rapport a cette droite. Deux couples de points en miroir sont marques et relies : le point d'abscisse zero et d'ordonnee un sur l'exponentielle correspond au point d'abscisse un et d'ordonnee zero sur le logarithme.</desc>

              <!-- Repere ORTHONORME : 40 unites de viewBox par unite, sur les
                   deux axes. X(x) = 150 + 40x ; Y(y) = 180 - 40y. -->
              <line class="grid-line" x1="70" y1="15" x2="70" y2="305"></line>
              <line class="grid-line" x1="110" y1="15" x2="110" y2="305"></line>
              <line class="grid-line" x1="190" y1="15" x2="190" y2="305"></line>
              <line class="grid-line" x1="230" y1="15" x2="230" y2="305"></line>
              <line class="grid-line" x1="270" y1="15" x2="270" y2="305"></line>
              <line class="grid-line" x1="25" y1="260" x2="315" y2="260"></line>
              <line class="grid-line" x1="25" y1="220" x2="315" y2="220"></line>
              <line class="grid-line" x1="25" y1="140" x2="315" y2="140"></line>
              <line class="grid-line" x1="25" y1="100" x2="315" y2="100"></line>
              <line class="grid-line" x1="25" y1="60" x2="315" y2="60"></line>

              <line class="axis" x1="25" y1="180" x2="315" y2="180"></line>
              <line class="axis" x1="150" y1="305" x2="150" y2="15"></line>

              <!-- La droite y = x, axe de la symetrie. -->
              <line class="focus-line" x1="30" y1="300" x2="310" y2="20"></line>
              <text class="label-soft" x="296" y="38" text-anchor="end">y = x</text>

              <!-- exp, echantillonnee en x puis coupee au bord du cadre. -->
              <polyline class="curve-main" points="30,178 35,177.7 40,177.4 45,177.1 50,176.7 55,176.3 60,175.8 65,175.2 70,174.6 75,173.9 80,173 85,172.1 90,171.1 95,169.9 100,168.5 105,167 110,165.3 115,163.3 120,161.1 125,158.6 130,155.7 135,152.5 140,148.8 145,144.7 150,140 155,134.7 160,128.6 165,121.8 170,114.1 175,105.3 180,95.3 185,84 190,71.3 195,56.8 200,40.4 205,21.8"></polyline>

              <!-- ln : LES MEMES points, coordonnees echangees. La symetrie
                   est donc exacte, pas approchee. -->
              <polyline class="graph-line" points="152,300 152.3,295 152.6,290 152.9,285 153.3,280 153.7,275 154.2,270 154.8,265 155.4,260 156.1,255 157,250 157.9,245 158.9,240 160.1,235 161.5,230 163,225 164.7,220 166.7,215 168.9,210 171.4,205 174.3,200 177.5,195 181.2,190 185.3,185 190,180 195.3,175 201.4,170 208.2,165 215.9,160 224.7,155 234.7,150 246,145 258.7,140 273.2,135 289.6,130 308.2,125"></polyline>

              <!-- Premier couple en miroir : (0 ; 1) et (1 ; 0). -->
              <circle class="plot-point" cx="150" cy="140" r="5"></circle>
              <circle class="plot-point-alt" cx="190" cy="180" r="5"></circle>
              <line class="guide-line" x1="150" y1="140" x2="190" y2="180"></line>

              <!-- Second couple : (1 ; e) et (e ; 1). -->
              <circle class="plot-point" cx="190" cy="71.3" r="5"></circle>
              <circle class="plot-point-alt" cx="258.7" cy="140" r="5"></circle>
              <line class="guide-line" x1="190" y1="71.3" x2="258.7" y2="140"></line>

              <text class="annotation-label" x="196" y="42" text-anchor="start">exponentielle</text>
              <text class="annotation-label" x="300" y="118" text-anchor="end">logarithme</text>
              <text class="tick-label" x="144" y="134" text-anchor="end">1</text>
              <text class="tick-label" x="192" y="196" text-anchor="start">1</text>
              <text class="axis-label" x="318" y="176">x</text>
              <text class="axis-label" x="156" y="24">y</text>
            </svg>
          `,
          notes: [
            'Les deux courbes sont l\'image l\'une de l\'autre par la symétrie d\'axe $y = x$. Autrement dit, chaque fois que $\\exp$ passe par $(x\\,;\\,y)$, $\\ln$ passe par $(y\\,;\\,x)$ : c\'est la traduction géométrique exacte de $\\ln(e^x) = x$.',
            'Le premier couple marqué le dit en clair : $\\exp$ passe par $(0\\,;\\,1)$ — puisque $e^0 = 1$ — et $\\ln$ passe donc par $(1\\,;\\,0)$, puisque $\\ln 1 = 0$. Le second couple, $(1\\,;\\,e)$ et $(e\\,;\\,1)$, dit de même que $\\ln e = 1$.',
            'La symétrie explique aussi les domaines. L\'exponentielle prend toutes les valeurs strictement <strong>positives</strong>, donc son miroir ne peut être défini que pour des $x$ strictement positifs : $\\ln$ n\'existe pas en $0$ ni pour les négatifs, et ce n\'est pas une interdiction arbitraire.'
          ],
          reading: 'Pose une règle le long de la diagonale et regarde la figure en biais : les deux courbes se superposent. Repère ensuite l\'axe vertical — l\'exponentielle ne le traverse jamais vers le bas, elle reste au-dessus de l\'axe horizontal. Par symétrie, le logarithme ne peut donc jamais franchir l\'axe vertical vers la gauche. Quand tu écris $\\ln(-3)$, tu demandes à quelle puissance il faut élever $e$ pour obtenir un nombre négatif : la figure te montre qu\'aucune ne convient.',
          caption: 'Les courbes de $\\exp$ et de $\\ln$ dans un repère orthonormé, symétriques par rapport à la droite $y = x$.'
        },
        {
          theme: 'maths',
          kicker: 'Ce que « demi-vie » veut dire',
          title: 'Des paliers réguliers dans le temps, une division par deux à chaque fois',
          description: 'Pour l\'iode 131, de demi-vie $8$ jours, la masse passe de $160$ à $80$, puis à $40$, puis à $20$ mg. Les intervalles de <strong>temps</strong> sont égaux ; les quantités perdues, elles, ne le sont pas du tout : $80$ mg lors du premier palier, puis $40$, puis $20$. Ce qui se répète n\'est pas une soustraction, c\'est une division.',
          svg: `
            <svg viewBox="0 0 460 250" role="img" aria-labelledby="tle-paliers-title tle-paliers-desc">
              <title id="tle-paliers-title">Decroissance de l'iode 131 avec quatre paliers de demi-vie</title>
              <desc id="tle-paliers-desc">Courbe decroissante de la masse d'iode 131 en fonction du temps, partant de cent soixante milligrammes. Quatre paliers de demi-vie sont marques, espaces de huit jours chacun : a huit jours il reste quatre-vingts milligrammes, a seize jours quarante, a vingt-quatre jours vingt, a trente-deux jours dix. Les intervalles de temps sont tous egaux, mais les quantites perdues diminuent a chaque palier : quatre-vingts milligrammes perdus lors du premier, puis quarante, puis vingt, puis dix.</desc>

              <!-- Echelle : X(t) = 60 + 11,25 t ; Y(m) = 200 - m. -->
              <line class="grid-line" x1="150" y1="20" x2="150" y2="200"></line>
              <line class="grid-line" x1="240" y1="20" x2="240" y2="200"></line>
              <line class="grid-line" x1="330" y1="20" x2="330" y2="200"></line>
              <line class="grid-line" x1="420" y1="20" x2="420" y2="200"></line>

              <line class="axis" x1="50" y1="200" x2="440" y2="200"></line>
              <line class="axis" x1="60" y1="210" x2="60" y2="20"></line>

              <polyline class="curve-main" points="60,40 71.3,53.3 82.5,65.5 93.8,76.6 105,86.9 116.3,96.3 127.5,104.9 138.8,112.8 150,120 161.3,126.6 172.5,132.7 183.8,138.3 195,143.4 206.3,148.1 217.5,152.4 228.8,156.4 240,160 251.3,163.3 262.5,166.4 273.8,169.2 285,171.7 296.3,174.1 307.5,176.2 318.8,178.2 330,180 341.3,181.7 352.5,183.2 363.8,184.6 375,185.9 386.3,187 397.5,188.1 408.8,189.1 420,190"></polyline>

              <!-- Les quatre paliers, avec leur report horizontal. -->
              <line class="guide-line" x1="60" y1="120" x2="150" y2="120"></line>
              <line class="guide-line" x1="60" y1="160" x2="240" y2="160"></line>
              <line class="guide-line" x1="60" y1="180" x2="330" y2="180"></line>
              <circle class="plot-point" cx="60" cy="40" r="5"></circle>
              <circle class="plot-point" cx="150" cy="120" r="5"></circle>
              <circle class="plot-point" cx="240" cy="160" r="5"></circle>
              <circle class="plot-point" cx="330" cy="180" r="5"></circle>
              <circle class="plot-point-alt" cx="420" cy="190" r="4"></circle>

              <!-- Les pertes successives, mesurees sur la verticale. -->
              <line class="focus-line" x1="44" y1="40" x2="44" y2="120"></line>
              <line class="focus-line" x1="44" y1="120" x2="44" y2="160"></line>
              <line class="focus-line" x1="44" y1="160" x2="44" y2="180"></line>
              <text class="tick-label" x="38" y="84" text-anchor="end">80</text>
              <text class="tick-label" x="38" y="144" text-anchor="end">40</text>
              <text class="tick-label" x="38" y="176" text-anchor="end">20</text>

              <text class="annotation-label" x="156" y="114" text-anchor="start">80 mg</text>
              <text class="annotation-label" x="246" y="154" text-anchor="start">40 mg</text>
              <text class="annotation-label" x="336" y="174" text-anchor="start">20 mg</text>
              <text class="annotation-label" x="66" y="34" text-anchor="start">160 mg au départ</text>

              <text class="tick-label" x="150" y="216" text-anchor="middle">8 jours</text>
              <text class="tick-label" x="240" y="216" text-anchor="middle">16</text>
              <text class="tick-label" x="330" y="216" text-anchor="middle">24</text>
              <text class="tick-label" x="420" y="216" text-anchor="middle">32</text>
              <text class="axis-label" x="440" y="234" text-anchor="end">temps en jours</text>
              <text class="label-soft" x="20" y="232" text-anchor="start">pertes successives</text>
            </svg>
          `,
          notes: [
            'Les quatre paliers sont espacés de la <strong>même</strong> durée, $t_{1/2} = 8$ jours, et à chacun la masse est divisée par $2$ : $160 \\to 80 \\to 40 \\to 20 \\to 10$ mg.',
            'Les quantités perdues, elles, sont toutes <strong>différentes</strong> : $80$ mg lors du premier palier, puis $40$, puis $20$, puis $10$. Une décroissance exponentielle ne perd pas une quantité fixe par unité de temps — elle perd une <strong>proportion</strong> fixe.',
            'C\'est pourquoi la courbe s\'aplatit sans jamais toucher l\'axe : à chaque palier il reste la moitié de ce qu\'il y avait, et la moitié d\'un nombre strictement positif reste strictement positive. La masse tend vers $0$ sans l\'atteindre.'
          ],
          reading: 'Regarde les trois segments à gauche, sur l\'axe vertical : ils mesurent ce qui disparaît à chaque palier, et ils rétrécissent de moitié à chaque fois. Puis regarde les intervalles en bas : ils sont tous identiques. Voilà l\'erreur à ne pas faire — croire qu\'après $12$ jours il en reste $60$ mg parce que ce serait « à mi-chemin » entre $80$ et $40$. Ce raisonnement suppose une perte régulière, et la figure te montre qu\'il n\'y en a pas. La vraie valeur est $160 \\times e^{-\\lambda \\times 12} \\approx 56{,}6$ mg.',
          caption: 'Iode 131, $t_{1/2} = 8$ jours : quatre paliers réguliers dans le temps, et une masse divisée par $2$ à chacun.'
        },
        {
          theme: 'maths',
          kicker: 'Deux logarithmes, un seul facteur',
          title: 'Le logarithme décimal est le népérien, à une constante près',
          description: 'Les deux courbes ont exactement la même allure, et pour cause : $\\log(x) = \\dfrac{\\ln x}{\\ln 10}$. Elles s\'annulent au même endroit, en $x = 1$, et l\'une est partout $2{,}303$ fois plus haute que l\'autre. En $x = 10$, l\'écart se lit d\'un coup d\'œil : $\\ln(10) \\approx 2{,}30$ contre $\\log(10) = 1$.',
          svg: `
            <svg viewBox="0 0 440 260" role="img" aria-labelledby="tle-deuxlogs-title tle-deuxlogs-desc">
              <title id="tle-deuxlogs-title">Comparaison du logarithme neperien et du logarithme decimal</title>
              <desc id="tle-deuxlogs-desc">Deux courbes croissantes tracees dans le meme repere entre x egale zero virgule trois et x egale trente. Les deux passent par le meme point d'abscisse un et d'ordonnee zero. La courbe du logarithme neperien est partout plus haute que celle du logarithme decimal : en x egale dix, la premiere vaut environ deux virgule trois tandis que la seconde vaut exactement un. Le rapport entre les deux hauteurs est constant et vaut environ deux virgule trois zero trois, qui est le logarithme neperien de dix.</desc>

              <line class="grid-line" x1="170.9" y1="27" x2="170.9" y2="223"></line>
              <line class="grid-line" x1="290.5" y1="27" x2="290.5" y2="223"></line>
              <line class="grid-line" x1="410" y1="27" x2="410" y2="223"></line>
              <line class="grid-line" x1="47" y1="126.8" x2="430" y2="126.8"></line>
              <line class="grid-line" x1="47" y1="91.5" x2="430" y2="91.5"></line>
              <line class="grid-line" x1="47" y1="56.2" x2="430" y2="56.2"></line>

              <line class="axis" x1="47" y1="162.1" x2="430" y2="162.1"></line>
              <line class="axis" x1="63.4" y1="223" x2="63.4" y2="27"></line>

              <!-- logarithme neperien -->
              <polyline class="curve-main" points="55,204.6 62.9,163.5 70.8,145 78.7,133 86.6,124 94.4,116.8 102.3,110.9 110.2,105.8 118.1,101.4 126,97.4 133.9,93.9 141.8,90.7 149.7,87.7 157.6,85 165.4,82.5 173.3,80.1 181.2,77.9 189.1,75.8 197,73.8 204.9,72 212.8,70.2 220.7,68.5 228.6,66.9 236.4,65.4 244.3,63.9 252.2,62.5 260.1,61.1 268,59.8 275.9,58.5 283.8,57.3 291.7,56.2 299.6,55 307.4,53.9 315.3,52.8 323.2,51.8 331.1,50.8 339,49.8 346.9,48.8 354.8,47.9 362.7,47 370.6,46.1 378.4,45.3 386.3,44.4 394.2,43.6 402.1,42.8 410,42"></polyline>

              <!-- logarithme decimal -->
              <polyline class="graph-line" points="55,180.5 62.9,162.7 70.8,154.7 78.7,149.4 86.6,145.5 94.4,142.4 102.3,139.8 110.2,137.6 118.1,135.7 126,134 133.9,132.5 141.8,131.1 149.7,129.8 157.6,128.6 165.4,127.5 173.3,126.5 181.2,125.5 189.1,124.6 197,123.7 204.9,122.9 212.8,122.2 220.7,121.4 228.6,120.7 236.4,120.1 244.3,119.4 252.2,118.8 260.1,118.2 268,117.7 275.9,117.1 283.8,116.6 291.7,116.1 299.6,115.6 307.4,115.1 315.3,114.6 323.2,114.2 331.1,113.7 339,113.3 346.9,112.9 354.8,112.5 362.7,112.1 370.6,111.7 378.4,111.3 386.3,111 394.2,110.6 402.1,110.3 410,109.9"></polyline>

              <!-- point commun en x = 1 -->
              <circle class="plot-point" cx="63.4" cy="162.1" r="5"></circle>

              <!-- lecture en x = 10 -->
              <line class="guide-line" x1="170.9" y1="126.8" x2="170.9" y2="80.8"></line>
              <circle class="plot-point" cx="170.9" cy="80.8" r="5"></circle>
              <circle class="plot-point-alt" cx="170.9" cy="126.8" r="5"></circle>

              <text class="annotation-label" x="380" y="36" text-anchor="end">népérien</text>
              <text class="annotation-label" x="404" y="104" text-anchor="end">décimal</text>
              <text class="annotation-label" x="178" y="70" text-anchor="start">écart en x = 10</text>
              <text class="label-soft" x="178" y="88" text-anchor="start">2,30 contre 1</text>

              <text class="tick-label" x="63.4" y="180" text-anchor="middle">1</text>
              <text class="tick-label" x="170.9" y="180" text-anchor="middle">10</text>
              <text class="tick-label" x="290.5" y="180" text-anchor="middle">20</text>
              <text class="tick-label" x="410" y="180" text-anchor="middle">30</text>
              <text class="tick-label" x="55" y="131" text-anchor="end">1</text>
              <text class="tick-label" x="55" y="96" text-anchor="end">2</text>
              <text class="tick-label" x="55" y="60" text-anchor="end">3</text>
              <text class="axis-label" x="434" y="158">x</text>
            </svg>
          `,
          notes: [
            'Les deux courbes s\'annulent au <strong>même</strong> point, $x = 1$, parce que $\\ln 1 = 0$ et $\\log 1 = 0$. Aucun logarithme, quelle que soit sa base, ne peut valoir autre chose que $0$ en $1$.',
            'Le rapport entre les deux hauteurs est <strong>constant</strong> : $\\dfrac{\\ln x}{\\log x} = \\ln 10 \\approx 2{,}303$ pour tout $x > 0$. En $x = 10$ on lit $2{,}30$ contre $1$ ; en $x = 100$ on lirait $4{,}61$ contre $2$ ; le rapport ne bouge pas.',
            'C\'est pourquoi les deux fonctions ne sont pas interchangeables mais se convertissent : $\\log(x) = \\dfrac{\\ln x}{\\ln 10}$. Le pH et les décibels emploient le logarithme <strong>décimal</strong>, parce qu\'une unité y doit correspondre à un facteur $10$ exactement ; les équations différentielles emploient le népérien, parce que c\'est lui dont la dérivée vaut $\\dfrac{1}{x}$.'
          ],
          reading: 'Choisis n\'importe quelle abscisse et compare les deux hauteurs : la courbe du haut est toujours un peu plus de deux fois plus haute que celle du bas, et ce rapport ne change pas d\'un bout à l\'autre de la figure. C\'est le signe d\'un simple facteur multiplicatif, pas de deux fonctions différentes. La conséquence pratique est directe : si tu écris $\\ln(10^{-4}) = -4$, tu confonds les deux courbes. Le bon résultat est $-4 \\times 2{,}303 \\approx -9{,}21$ ; c\'est $\\log(10^{-4})$ qui vaut $-4$.',
          caption: 'Logarithme népérien et logarithme décimal sur $[0{,}3\\,;\\,30]$ : mêmes zéros, et un rapport constant $\\ln 10 \\approx 2{,}303$.'
        }
      ],

      recap: [
        '$e^x$ est l\'unique fonction égale à sa propre dérivée, strictement positive, avec $e^0 = 1$ et $e^{a+b} = e^a \\cdot e^b$.',
        '$\\ln$ et $\\exp$ sont réciproques : $\\ln(e^x) = x$ et $e^{\\ln x} = x$. Ne jamais confondre $\\ln$ (base $e$) et $\\log$ (base $10$).',
        'La décroissance radioactive suit $m(t) = m_0 e^{-\\lambda t}$ avec $\\lambda = \\ln 2 / t_{1/2}$ — après $k$ demi-vies, il reste $m_0 / 2^k$.',
        'Le pH utilise le logarithme DÉCIMAL : $pH = -\\log_{10}[H_3O^+]$. Une unité de pH = un facteur $10$ sur la concentration.'
      ],
      piege: 'Ne confonds pas $\\log$ (logarithme base 10) et $\\ln$ (logarithme naturel, base $e$).<br/><br/>En chimie, le pH utilise le $\\log$ base 10. Dans les équations différentielles de la radioactivité, on utilise $\\ln$.<br/><br/>Relation : $\\log(x) = \\ln(x) / \\ln(10) \\approx \\ln(x) / 2{,}303$.'
    },

    quiz: [
      {
        q: 'Un élève calcule $\\ln(10^{-4})$ et trouve $-4$. Est-il correct ?',
        options: [
          'Non : $\\ln(10^{-4}) = -4\\ln(10) \\approx -9{,}21$. C\'est $\\log_{10}(10^{-4}) = -4$, pas le logarithme naturel',
          'Oui : $\\ln(10^n) = n$ quelle que soit la base du logarithme',
          'Oui : $\\ln(10) = 1$ donc $\\ln(10^{-4}) = -4$',
          'Non : $\\ln(10^{-4}) = -4 \\times 10 = -40$ car $\\ln(10) = 10$'
        ],
        answer: 0,
        correction: '$\\ln(10^{-4}) = -4\\ln(10) \\approx -4 \\times 2{,}303 \\approx -9{,}21$.<br/><br/>La formule $\\log_{10}(10^n) = n$ est vraie pour le logarithme <strong>BASE 10</strong>, pas pour le logarithme naturel $\\ln$.<br/><br/>En chimie, le pH utilise $\\log_{10}$ : $pH = -\\log_{10}[H_3O^+] = -(-4) = 4$. Toujours vérifier quelle base est utilisée !'
      },
      {
        q: 'La constante de décroissance radioactive est liée à la demi-vie par :',
        options: [
          '$\\lambda = t_{1/2}$',
          '$\\lambda = \\ln 2 \\cdot t_{1/2}$',
          '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$',
          '$\\lambda = \\dfrac{t_{1/2}}{\\ln 2}$'
        ],
        answer: 2,
        correction: 'À $t = t_{1/2}$, la masse restante est $m = m_0/2$ par définition de la demi-vie.<br/><br/>Donc $m_0/2 = m_0 e^{-\\lambda t_{1/2}}$, ce qui donne $1/2 = e^{-\\lambda t_{1/2}}$.<br/><br/>En passant au logarithme : $\\ln(1/2) = -\\lambda t_{1/2}$, d\'où $\\lambda = \\ln 2 / t_{1/2}$.'
      },
      {
        q: 'Le pH d\'une solution de jus de citron est $2{,}5$. Sa concentration en ions $H_3O^+$ est :',
        options: [
          '$3{,}16 \\times 10^{-3}$ mol/L',
          '$2{,}5 \\times 10^{-1}$ mol/L',
          '$10^{2{,}5}$ mol/L',
          '$2{,}5$ mol/L'
        ],
        answer: 0,
        correction: '$[H_3O^+] = 10^{-pH} = 10^{-2{,}5} = 3{,}16 \\times 10^{-3}$ mol/L.<br/><br/>On utilise la relation inverse du pH : si $pH = -\\log[H_3O^+]$, alors $[H_3O^+] = 10^{-pH}$.'
      },
      {
        q: 'Simplifier $e^{2\\ln 3}$ :',
        options: [
          '$6$',
          '$9$',
          '$e^6$',
          '$3^e$'
        ],
        answer: 1,
        correction: '$e^{2\\ln 3} = e^{\\ln(3^2)} = e^{\\ln 9} = 9$.<br/><br/>On utilise d\'abord la propriété $n\\ln a = \\ln(a^n)$ pour réécrire l\'exposant, puis la relation fondamentale $e^{\\ln x} = x$ pour simplifier.'
      },
      {
        q: 'La fonction $f(x) = e^x - x$ admet-elle un minimum ? Si oui, en quel point ?',
        options: [
          'Oui, en $x = 0$ car $f\'(0) = e^0 - 1 = 0$ et $f\'\'(0) = e^0 = 1 > 0$',
          'Non, $e^x - x$ est toujours croissante',
          'Oui, en $x = 1$ car $f(1) = e - 1$',
          'Non, $f$ n\'a pas de dérivée seconde'
        ],
        answer: 0,
        correction: '$f\'(x) = e^x - 1 = 0 \\Rightarrow x = 0$.<br/><br/>$f\'\'(x) = e^x > 0$ partout : $f$ est convexe, donc $x = 0$ est bien un <strong>minimum global</strong>.<br/><br/>$f(0) = e^0 - 0 = 1$. La valeur minimale de $f$ est donc $1$.'
      }
    ],

    /* BANQUE D'EXERCICES — élargie le 2026-09-14.

       AVANT : une seule tâche (masse restante après un nombre ENTIER de
       demi-vies), habillée de quatre décors par pick(). Mesuré sur 400
       tirages : 4 moules d'énoncé, mais UNE tâche. Le livre imprimait douze
       fois la même question sous quatre habillages, et — plus gênant — cette
       unique tâche était justement celle qui se résout SANS exponentielle,
       par simples divisions successives par $2$.

       APRÈS : sept tâches réellement différentes, réparties sur les deux
       versants du chapitre — l'exponentielle (masse restante, demi-vie non
       entière, dérivée, temps de doublement) et le logarithme appliqué
       (pH dans les deux sens, décibels).

       Notation décimale : toujours par fr(), jamais par un .replace() écrit
       à la main — bug récurrent du corpus. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['demiViesEntieres', 'dureeQuelconque', 'tempsRestant',
                            'pHversConc', 'concVersPH', 'decibels', 'derivee']);

        /* TÂCHE 1 — masse restante après un nombre ENTIER de demi-vies. La
           tâche historique, conservée : c'est l'entrée du chapitre, et elle
           installe le geste « diviser par 2 à chaque palier ». */
        if (tache === 'demiViesEntieres') {
          const ctx = pick([
            { substance: 'un échantillon de césium 137', t12: 30, m0: 480, unit: 'ans' },
            { substance: 'un traceur au technétium 99m', t12: 6, m0: 320, unit: 'heures' },
            { substance: 'un isotope d\'iode 131 de médecine nucléaire', t12: 8, m0: 160, unit: 'jours' }
          ]);
          const k = rand(2, 4);
          const t = k * ctx.t12;
          const res = ctx.m0 / Math.pow(2, k);
          return {
            statement: `Un laboratoire conserve ${ctx.substance}, contenant $m_0 = ${ctx.m0}$ mg d'isotope, de demi-vie $t_{1/2} = ${ctx.t12}$ ${ctx.unit}. Quelle masse, en mg, reste-t-il après $t = ${t}$ ${ctx.unit} ?`,
            answer: res, tolerance: 0.01, unit: 'mg',
            hint: `Compte d'abord combien de demi-vies se sont écoulées : $k = \\dfrac{${t}}{${ctx.t12}} = ${k}$. Chaque demi-vie divise la masse par $2$.`,
            solution: [
              `Nombre de demi-vies écoulées : $k = \\dfrac{${t}}{${ctx.t12}} = ${k}$`,
              `$m = ${ctx.m0} \\times \\left(\\dfrac{1}{2}\\right)^{${k}} = \\dfrac{${ctx.m0}}{${Math.pow(2, k)}}$`,
              `$m = ${fr(res)}$ mg`
            ]
          };
        }

        /* TÂCHE 2 — durée QUELCONQUE, qui ne tombe pas sur un palier. C'est
           la tâche qui rend l'exponentielle indispensable : les divisions
           successives ne suffisent plus. Elle est adossée au « Découvrir »,
           dont c'est exactement la question. */
        if (tache === 'dureeQuelconque') {
          const ctx = pick([
            { substance: 'du fluor 18 utilisé en imagerie médicale', t12: 110, unit: 'minutes' },
            { substance: 'du radon 222 mesuré dans une cave', t12: 4, unit: 'jours' },
            { substance: 'du tritium contenu dans un balisage lumineux', t12: 12, unit: 'ans' }
          ]);
          const m0 = pick([100, 150, 200, 250]);
          // Une duree strictement entre deux paliers : de 0,3 a 1,7 demi-vie.
          const frac = pick([0.5, 0.75, 1.25, 1.5]);
          const t = parseFloat((frac * ctx.t12).toFixed(2));
          const lam = Math.log(2) / ctx.t12;
          const res = parseFloat((m0 * Math.exp(-lam * t)).toFixed(2));
          return {
            statement: `On prélève ${ctx.substance} : il contient $m_0 = ${m0}$ mg d'isotope, de demi-vie $t_{1/2} = ${ctx.t12}$ ${ctx.unit}. Quelle masse, en mg, reste-t-il après $t = ${fr(t)}$ ${ctx.unit} ? Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.1, unit: 'mg',
            hint: `Cette durée ne tombe pas sur un palier : les divisions par $2$ ne suffisent plus. Passe par $\\lambda = \\dfrac{\\ln 2}{t_{1/2}}$, puis par $m(t) = m_0 e^{-\\lambda t}$.`,
            solution: [
              `$\\lambda = \\dfrac{\\ln 2}{${ctx.t12}} \\approx ${fr(parseFloat(lam.toFixed(5)))}$ ${ctx.unit.replace(/s$/, '')}$^{-1}$`,
              `$m(t) = ${m0} \\times e^{-${fr(parseFloat(lam.toFixed(5)))} \\times ${fr(t)}}$`,
              `$m \\approx ${fr(res)}$ mg — à comparer à ce que donnerait une perte régulière, qui serait nettement différente`
            ]
          };
        }

        /* TÂCHE 3 — le chemin INVERSE : on connaît ce qu'il reste, on cherche
           la durée. C'est ici que le logarithme devient nécessaire, et non
           décoratif. */
        if (tache === 'tempsRestant') {
          const ctx = pick([
            { substance: 'un échantillon de cobalt 60 en radiothérapie', t12: 5, unit: 'ans' },
            { substance: 'un déchet contenant du strontium 90', t12: 29, unit: 'ans' },
            { substance: 'un traceur au sodium 24', t12: 15, unit: 'heures' }
          ]);
          const m0 = pick([200, 400, 600, 800]);
          const mf = m0 / pick([3, 5, 10]);
          const res = parseFloat((ctx.t12 * Math.log(m0 / mf) / Math.log(2)).toFixed(2));
          return {
            statement: `On surveille ${ctx.substance}, de demi-vie $t_{1/2} = ${ctx.t12}$ ${ctx.unit}. Il y avait $${m0}$ mg au départ. Au bout de combien de ${ctx.unit} n'en reste-t-il plus que $${fr(parseFloat(mf.toFixed(2)))}$ mg ? Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.1, unit: ctx.unit,
            hint: `Écris $m_0\\,e^{-\\lambda t} = m$, isole l'exponentielle, puis prends le logarithme des deux côtés : c'est lui qui fait descendre $t$ de l'exposant.`,
            solution: [
              `$\\lambda = \\dfrac{\\ln 2}{${ctx.t12}}$, et l'on cherche $t$ tel que $e^{-\\lambda t} = \\dfrac{${fr(parseFloat(mf.toFixed(2)))}}{${m0}}$`,
              `En prenant le logarithme : $-\\lambda t = \\ln\\left(\\dfrac{${fr(parseFloat(mf.toFixed(2)))}}{${m0}}\\right)$, donc $t = \\dfrac{t_{1/2}}{\\ln 2}\\ln\\left(\\dfrac{${m0}}{${fr(parseFloat(mf.toFixed(2)))}}\\right)$`,
              `$t \\approx ${fr(res)}$ ${ctx.unit}`
            ]
          };
        }

        /* TÂCHE 4 — du pH à la concentration. Logarithme DÉCIMAL, et un pH
           non entier : l'élève qui confond log et ln se trompe d'un facteur
           important, et l'exposant non entier interdit la lecture directe. */
        if (tache === 'pHversConc') {
          const ctx = pick([
            { sol: 'une eau de pluie légèrement acide' },
            { sol: 'un jus de fruit du commerce' },
            { sol: 'une solution de nettoyage industrielle' }
          ]);
          /* Le pH ne doit PAS tomber sur un entier : sinon le coefficient
             vaut exactement 1 et la question perd tout intérêt — l'élève
             lirait la réponse sans rien calculer. On tire donc la décimale
             séparément, entre 1 et 9. */
          const pH = parseFloat((rand(2, 5) + rand(1, 9) / 10).toFixed(1));
          const p = Math.ceil(pH);
          // [H3O+] = 10^(-pH) = a x 10^(-p)
          const res = parseFloat((Math.pow(10, -pH) * Math.pow(10, p)).toFixed(2));
          return {
            statement: `On mesure le pH sur un prélèvement — ${ctx.sol} — et il vaut $${fr(pH, 1)}$. On écrit sa concentration sous la forme $[H_3O^+] = a \\times 10^{-${p}}$ mol/L. Que vaut le coefficient $a$ ? Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: '',
            hint: `De $pH = -\\log[H_3O^+]$ on tire $[H_3O^+] = 10^{-pH}$. Sépare ensuite $10^{-${fr(pH, 1)}}$ en un produit $10^{-${p}} \\times 10^{q}$, où $q$ est la part décimale qu'il reste : ce second facteur est exactement le coefficient cherché.`,
            solution: [
              `$[H_3O^+] = 10^{-pH} = 10^{-${fr(pH, 1)}}$`,
              `On sépare : $10^{-${fr(pH, 1)}} = 10^{-${p}} \\times 10^{${fr(parseFloat((p - pH).toFixed(1)), 1)}}$`,
              `Or $10^{${fr(parseFloat((p - pH).toFixed(1)), 1)}} \\approx ${fr(res)}$, donc $a \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 5 — le chemin inverse : de la concentration au pH. Nouvelle,
           et elle fait travailler $\log(a \times 10^{-n}) = \log a - n$, la
           seule propriété algébrique du logarithme décimal exigible ici. */
        if (tache === 'concVersPH') {
          const ctx = pick([
            { sol: 'un lait frais' },
            { sol: 'une eau de piscine' },
            { sol: 'une boisson gazeuse' }
          ]);
          const a = rand(2, 9), n = rand(3, 8);
          const res = parseFloat((-Math.log10(a * Math.pow(10, -n))).toFixed(2));
          return {
            statement: `On analyse ${ctx.sol}, dont la concentration en ions oxonium vaut $[H_3O^+] = ${a} \\times 10^{-${n}}$ mol/L. Calculer son pH. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.02, unit: '',
            hint: `$pH = -\\log[H_3O^+]$, et $\\log(a \\times 10^{-n}) = \\log a - n$. Attention : il s'agit du logarithme <strong>décimal</strong>, pas du népérien.`,
            solution: [
              `$\\log(${a} \\times 10^{-${n}}) = \\log ${a} - ${n} \\approx ${fr(parseFloat(Math.log10(a).toFixed(3)))} - ${n}$`,
              `$pH = -\\left(${fr(parseFloat(Math.log10(a).toFixed(3)))} - ${n}\\right) = ${n} - ${fr(parseFloat(Math.log10(a).toFixed(3)))}$`,
              `$pH \\approx ${fr(res)}$`
            ]
          };
        }

        /* TÂCHE 6 — décibels. Nouvelle : le chapitre annonce les décibels
           dans ses mots-clés sans jamais les faire calculer. C'est aussi la
           seule tâche où le logarithme décimal sert à COMPRIMER une échelle,
           ce qui est son usage réel. */
        if (tache === 'decibels') {
          const ctx = pick([
            { lieu: 'à proximité d\'une route passante' },
            { lieu: 'dans un atelier de mécanique' },
            { lieu: 'au premier rang d\'une salle de concert' }
          ]);
          const a = rand(1, 9), n = rand(3, 7);
          const I = a * Math.pow(10, -n);
          const res = parseFloat((10 * Math.log10(I / 1e-12)).toFixed(2));
          return {
            statement: `On mesure une intensité sonore $I = ${a} \\times 10^{-${n}}$ W/m² ${ctx.lieu}. Le niveau sonore est $L = 10\\log\\left(\\dfrac{I}{I_0}\\right)$ décibels, avec $I_0 = 10^{-12}$ W/m². Calculer $L$. Arrondir à $0{,}01$.`,
            answer: res, tolerance: 0.05, unit: 'dB',
            hint: `Commence par simplifier le quotient $\\dfrac{I}{I_0}$ en soustrayant les exposants de $10$, puis applique $\\log(a \\times 10^{k}) = \\log a + k$.`,
            solution: [
              `$\\dfrac{I}{I_0} = \\dfrac{${a} \\times 10^{-${n}}}{10^{-12}} = ${a} \\times 10^{${12 - n}}$`,
              `$\\log\\left(\\dfrac{I}{I_0}\\right) = \\log ${a} + ${12 - n} \\approx ${fr(parseFloat((Math.log10(a) + 12 - n).toFixed(3)))}$`,
              `$L = 10 \\times ${fr(parseFloat((Math.log10(a) + 12 - n).toFixed(3)))} \\approx ${fr(res)}$ dB`
            ]
          };
        }

        /* TÂCHE 7 — dérivée d'une exponentielle décroissante. Nouvelle : elle
           fait le lien avec le chapitre 5 et prépare les équations
           différentielles (chapitre 3), où cette dérivée est l'inconnue. Le
           signe négatif du résultat est le point à faire comprendre : une
           grandeur qui décroît a une dérivée négative. */
        const ctx = pick([
          { intro: 'Le courant de décharge d\'un condensateur vaut', f: 'f(t)' },
          { intro: 'La concentration d\'un médicament dans le sang vaut', f: 'f(t)' },
          { intro: 'L\'activité d\'un échantillon vaut', f: 'f(t)' }
        ]);
        const k = rand(2, 8), a = pick([0.2, 0.5, 1]);
        const t0 = rand(0, 3);
        const res = parseFloat((-k * a * Math.exp(-a * t0)).toFixed(3));
        return {
          statement: `${ctx.intro} $${ctx.f} = ${k}e^{-${fr(a, 1)}t}$. Calculer $f'(${t0})$. Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.005, unit: '',
          hint: `$(e^{u})' = u'e^{u}$ avec $u = -${fr(a, 1)}t$, donc $u' = -${fr(a, 1)}$. Ne perds pas ce facteur — et attends-toi à un résultat <strong>négatif</strong>, puisque la grandeur décroît.`,
          solution: [
            `$f'(t) = ${k} \\times (-${fr(a, 1)}) \\times e^{-${fr(a, 1)}t} = -${fr(parseFloat((k * a).toFixed(2)))}e^{-${fr(a, 1)}t}$`,
            `$f'(${t0}) = -${fr(parseFloat((k * a).toFixed(2)))} \\times e^{-${fr(parseFloat((a * t0).toFixed(2)))}}$`,
            `$f'(${t0}) \\approx ${fr(res)}$ — le signe moins dit que la grandeur diminue`
          ]
        };
      }
    },

    probleme: {
      context: 'Le carbone 14 ($^{14}$C) est un isotope radioactif utilisé en archéologie pour dater des matériaux organiques. Sa demi-vie est $t_{1/2} = 5730$ ans. Un objet ancien contient initialement $m_0$ de carbone 14. On cherche à savoir quelle fraction de la masse initiale reste après $k$ demi-vies.',
      schema: null,
      tasks: [
        'Exprimer la masse restante $m$ après $k$ demi-vies à partir de la formule de décroissance radioactive.',
        'Calculer la fraction $m / m_0$ après $k = 3$ demi-vies (soit $3 \\times 5730 = 17190$ ans).',
        'Si initialement $m_0 = 80$ mg, quelle masse reste après 3 demi-vies ?'
      ],
      solutions: [
        '$m = m_0 \\times \\left(\\dfrac{1}{2}\\right)^k$. Après chaque demi-vie, la moitié se désintègre.',
        '$\\dfrac{m}{m_0} = \\left(\\dfrac{1}{2}\\right)^3 = \\dfrac{1}{8} = 0{,}125 = 12{,}5\\%$.',
        '$m = 80 \\times \\dfrac{1}{8} = 10$ mg. Après 17 190 ans, il ne reste que 10 mg sur 80 mg initiaux.'
      ],
      finalAnswer: '$m = 10$ mg (12,5 % de la masse initiale restante après 3 demi-vies)'
    },

    evaluation: {
      title: 'Évaluation — Exponentielle et Logarithme',
      duration: '35 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-14. Elle donnait le pH et demandait la
             concentration : l'élève n'avait qu'à appliquer une formule
             écrite deux pages plus haut.

             La nouvelle question part d'une SITUATION (deux mesures, une
             comparaison dont on demande le facteur) et n'énonce aucune
             formule : l'élève doit décider lui-même que la relation entre
             les deux pH est multiplicative, l'écrire, et seulement ensuite
             calculer. Traduire une situation concrète en écriture
             mathématique, c'est « modéliser ».

             Le contexte est choisi pour que le piège soit réel : une
             différence de pH de 2,4 se lit spontanément comme un écart
             additif, alors qu'elle désigne un rapport de concentrations. */
          statement: 'Un laboratoire mesure le pH de deux prélèvements : $5{,}9$ pour une eau de pluie, et $3{,}5$ pour un jus de fruit. On demande <strong>combien de fois</strong> le jus de fruit est plus concentré en ions $H_3O^+$ que l\'eau de pluie. Quelle est ce facteur ? Arrondir à l\'unité.',
          type: 'numeric',
          answer: 251,
          tolerance: 3,
          unit: '',
          points: 2,
          correction: 'Le piège est de répondre « $2{,}4$ fois », parce que $5{,}9 - 3{,}5 = 2{,}4$. Mais le pH n\'est pas la concentration : c\'est son <strong>logarithme décimal</strong>, changé de signe. Une différence de pH ne traduit donc pas une différence de concentration, mais un <strong>rapport</strong>.<br/><br/>Écrivons-le. Pour chaque prélèvement, $[H_3O^+] = 10^{-pH}$ :<br/><br/>eau de pluie : $10^{-5{,}9}$ mol/L ; jus de fruit : $10^{-3{,}5}$ mol/L.<br/><br/>Le facteur cherché est le quotient des deux concentrations :<br/><br/>$\\dfrac{10^{-3{,}5}}{10^{-5{,}9}} = 10^{-3{,}5 + 5{,}9} = 10^{2{,}4}$.<br/><br/>Or $10^{2{,}4} \\approx 251$.<br/><br/>Le jus de fruit est donc environ $251$ fois plus concentré, et non $2{,}4$ fois. C\'est tout l\'intérêt d\'une échelle logarithmique : elle range des nombres très étalés sur une petite règle. Une unité de pH d\'écart, c\'est déjà un facteur $10$ ; $2{,}4$ unités, c\'est un facteur $10^{2{,}4}$.'
        },
        {
          statement: 'La demi-vie du carbone 14 est $t_{1/2} = 5730$ ans. Quelle est la constante de décroissance $\\lambda$ (en $\\mathrm{an}^{-1}$) ? Donner $\\lambda \\times 10^4$ arrondi à $0{,}01$.',
          type: 'numeric',
          answer: 1.21,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$\\lambda = \\dfrac{\\ln 2}{t_{1/2}} = \\dfrac{0{,}6931}{5730} \\approx 1{,}21 \\times 10^{-4}$ an$^{-1}$.<br/><br/>On multiplie par $10^4$ pour obtenir $\\lambda \\times 10^4 \\approx 1{,}21$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-14. Elle demandait la dérivée de
             $e^{3x}$ : un calcul de plus, et un calcul qui relève du
             chapitre 5 plus que de celui-ci.

             La nouvelle question porte sur une LECTURE de courbe. L'élève
             dispose de deux courbes décrites par leurs points, doit
             reconnaître laquelle est exponentielle, et justifier par ce
             qu'il voit — un rapport constant d'un point au suivant, contre
             un écart constant. Passer d'une représentation graphique ou
             tabulée à une propriété de la fonction, c'est « représenter ».

             Les valeurs sont données sous forme de tableau dans l'énoncé,
             pour que la question reste autoportante : le livre imprime les
             schémas, mais une évaluation ne doit pas dépendre de la page en
             vis-à-vis. */
          statement: 'Deux grandeurs sont relevées toutes les heures. La première prend les valeurs $80$, $70$, $60$, $50$. La seconde prend les valeurs $80$, $60$, $45$, $33{,}75$. Laquelle des deux décroît de façon <strong>exponentielle</strong>, et à quoi le voit-on ?',
          type: 'multiple-choice',
          options: [
            'La seconde : d\'un relevé au suivant, elle est multipliée par le même facteur $0{,}75$, alors que la première perd toujours la même quantité $10$',
            'La première : elle décroît régulièrement, ce qui est la définition d\'une exponentielle',
            'Les deux, puisque toutes deux décroissent en partant de $80$',
            'Aucune des deux : une exponentielle ne peut pas prendre de valeurs décimales'
          ],
          answer: 0,
          points: 2,
          correction: 'La question se tranche en calculant, pour chaque suite de valeurs, à la fois les <strong>écarts</strong> et les <strong>rapports</strong> d\'un relevé au suivant.<br/><br/>Première grandeur — écarts : $-10$, $-10$, $-10$. Ils sont constants. Rapports : $0{,}875$, puis $0{,}857$, puis $0{,}833$ : ils changent. C\'est une décroissance <strong>linéaire</strong> (affine), pas exponentielle.<br/><br/>Seconde grandeur — écarts : $-20$, $-15$, $-11{,}25$. Ils changent. Rapports : $\\dfrac{60}{80} = 0{,}75$, $\\dfrac{45}{60} = 0{,}75$, $\\dfrac{33{,}75}{45} = 0{,}75$. Ils sont <strong>constants</strong>.<br/><br/>C\'est la signature d\'une exponentielle : ce qui se répète n\'est pas une soustraction, c\'est une multiplication. On peut d\'ailleurs l\'écrire $m(t) = 80 \\times 0{,}75^{\\,t}$.<br/><br/>Sur un graphique, la différence est tout aussi lisible : une décroissance linéaire est une droite qui finirait par passer sous l\'axe, tandis qu\'une décroissance exponentielle s\'incurve et s\'aplatit sans jamais l\'atteindre.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-14. Elle demandait de simplifier
             $\log(10^{-2} \times 10^{5})$, c'est-à-dire une application en
             deux lignes d'une propriété du cours.

             La nouvelle question ne fournit AUCUNE méthode : elle demande un
             ordre de grandeur — le nombre de demi-vies nécessaires pour
             passer sous un seuil — que l'élève peut obtenir par plusieurs
             chemins (divisions successives, essais, ou logarithme). Explorer
             une piste sans méthode donnée, c'est « chercher ».

             Le seuil est choisi de sorte que la réponse ne tombe pas sur un
             palier rond : l'élève doit décider ce que « au moins » impose,
             et donc conclure par un entier. */
          statement: 'Un stock de $500$ g d\'un isotope doit descendre sous $10$ g avant d\'être évacué. Sa demi-vie est de $4$ ans. Au bout de combien de demi-vies <strong>entières</strong> ce seuil est-il franchi pour la première fois ? (Aucune méthode n\'est imposée : divisions successives, essais ou logarithme, à toi de choisir.)',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le plus direct est de diviser par $2$ jusqu\'à passer sous le seuil, en comptant les étapes :<br/><br/>$500 \\to 250 \\to 125 \\to 62{,}5 \\to 31{,}25 \\to 15{,}625 \\to 7{,}8125$.<br/><br/>On compte $6$ divisions pour descendre sous $10$ g. Après $5$ demi-vies il reste encore $15{,}6$ g, ce qui est au-dessus du seuil ; après $6$, il reste $7{,}8$ g. La réponse est donc $6$ demi-vies, soit $24$ ans.<br/><br/>Le chemin par le logarithme donne le même résultat et se prête mieux aux grands nombres. On cherche $k$ tel que $\\dfrac{500}{2^k} < 10$, c\'est-à-dire $2^k > 50$. En prenant le logarithme : $k > \\dfrac{\\ln 50}{\\ln 2} \\approx 5{,}64$. Le plus petit entier qui convient est $6$.<br/><br/>Remarque l\'intérêt de la seconde méthode : si le stock avait été de $500$ tonnes et le seuil de $1$ gramme, les divisions successives auraient demandé une vingtaine de lignes, tandis que le logarithme donne la réponse en un calcul.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-14. Elle demandait la masse restante
             après un nombre entier de demi-vies : la même tâche que
             l'unique tâche qu'avait alors la banque d'exercices, et un
             quatrième calcul dans une évaluation qui en comptait déjà
             quatre.

             La nouvelle question ne demande AUCUN nombre : elle part d'une
             propriété (la demi-vie est la même quel que soit l'instant
             choisi comme origine) et demande d'en tirer une conséquence sur
             une situation nouvelle. C'est « raisonner ».

             Le scénario retenu — un échantillon déjà entamé — est celui qui
             fait échouer le plus souvent, parce que l'élève croit qu'une
             demi-vie « se compte depuis le début ». */
          statement: 'Un technicien reçoit un flacon d\'isotope de demi-vie $6$ heures. L\'étiquette indique qu\'il a été préparé $18$ heures plus tôt, et qu\'il en reste aujourd\'hui $30$ mg. Il demande : « dans $6$ heures, en restera-t-il encore la moitié, ou la décroissance a-t-elle ralenti depuis le temps ? » Que lui répondre ?',
          type: 'multiple-choice',
          options: [
            'Il en restera exactement la moitié, soit $15$ mg : la demi-vie ne dépend pas de l\'instant choisi comme origine, ni de la quantité présente',
            'Il en restera plus de la moitié, car la décroissance ralentit avec le temps',
            'Il en restera moins de la moitié, car l\'échantillon est déjà bien entamé',
            'On ne peut pas répondre sans connaître la masse qu\'il y avait à la préparation'
          ],
          answer: 0,
          points: 2,
          correction: 'La bonne réponse tient en une propriété, sans aucun calcul : la demi-vie est une <strong>durée</strong>, et cette durée est la même où que l\'on place l\'origine du temps.<br/><br/>Voyons pourquoi. À partir d\'un instant $t_1$ quelconque, la masse restante s\'écrit $m(t_1 + h) = m_0 e^{-\\lambda(t_1 + h)} = m(t_1) \\times e^{-\\lambda h}$. Le facteur $e^{-\\lambda h}$ ne dépend que de la durée $h$ écoulée <strong>depuis</strong> $t_1$, jamais de $t_1$ lui-même ni de ce qui reste. Pour $h = t_{1/2}$, ce facteur vaut $\\dfrac{1}{2}$, un point c\'est tout.<br/><br/>L\'intuition qui fait échouer les options B et C est la même : on imagine que l\'échantillon « se fatigue », qu\'il reste de moins en moins à perdre et donc que cela ralentit. En quantité absolue, c\'est vrai — il part $30$ mg cette fois-ci, contre $60$ mg lors de la période précédente. Mais en <strong>proportion</strong>, rien ne change : c\'est toujours la moitié.<br/><br/>L\'option D est la plus tentante, et elle est fausse pour la même raison : la masse initiale ne sert à rien ici, puisque la question porte sur un rapport. On peut d\'ailleurs la retrouver, $30 \\times 2^3 = 240$ mg, mais on n\'en a nul besoin.'
        }
      ]
    }
  });
