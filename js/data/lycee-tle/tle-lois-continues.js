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
      intro: 'Pour une loi <strong>CONTINUE</strong>, la probabilité d\'une valeur <strong>EXACTE</strong> est nulle : $P(X = 5) = 0$ (on ne peut pas mesurer précisément un point sur une courbe).<br/><br/>On calcule uniquement des probabilités sur des <strong>intervalles</strong> : $P(a \\leq X \\leq b)$ = aire sous la courbe de densité entre $a$ et $b$.<br/><br/>La loi normale $\\mathcal{N}(\\mu;\\sigma^2)$ est <strong>symétrique</strong> autour de $\\mu$ : $P(X \\leq \\mu) = 0{,}5$ exactement. La <strong>règle des $2\\sigma$</strong> donne $P(\\mu-2\\sigma \\leq X \\leq \\mu+2\\sigma) \\approx 0{,}954$.<br/><br/><strong>Piège classique</strong> : en déduire $P(X \\leq \\mu-2\\sigma) \\approx 0{,}046$ (mauvais !) = la bonne valeur est $(1-0{,}954)/2 \\approx 0{,}023$ par symétrie.',
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
    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { intro: 'La masse d\'un sachet de bonbons en sortie d\'usine suit', unite: 'g' },
          { intro: 'Le QI d\'une population suit', unite: 'points' },
          { intro: 'La durée de vie d\'un composant électronique suit', unite: 'heures' },
          { intro: 'Le diamètre de roulements à billes en production suit', unite: 'mm' }
        ]);
        const mu = rand(5, 20) * 10;
        const sigma = rand(2, 8);
        const k = pick([1, 2]);
        const lower = mu - k * sigma;
        const upper = mu + k * sigma;
        const probas = { 1: 0.683, 2: 0.954 };
        return {
          statement: `${ctx.intro} une loi $\\mathcal{N}(${mu};${sigma}^2)$ (en ${ctx.unite}). Calculer $P(${lower} \\leq X \\leq ${upper})$.`,
          answer: probas[k],
          tolerance: 0.005,
          unit: '',
          hint: `Identifie combien de $\\sigma$ séparent les bornes de $\\mu$ : $${lower} = ${mu} - ${k} \\times ${sigma}$ et $${upper} = ${mu} + ${k} \\times ${sigma}$. C'est l'intervalle $[\\mu - ${k}\\sigma ; \\mu + ${k}\\sigma]$.`,
          solution: [
            `$${lower} = \\mu - ${k}\\sigma$ et $${upper} = \\mu + ${k}\\sigma$`,
            `$P(\\mu - ${k}\\sigma \\leq X \\leq \\mu + ${k}\\sigma) \\approx ${probas[k].toFixed(3).replace('.', '{,}')}$`,
            `Soit environ $${(probas[k]*100).toFixed(1).replace('.', '{,}')}\\%$.`
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
          statement: 'Pour $X \\sim \\mathcal{N}(50;4^2)$, calculer $P(42 \\leq X \\leq 58)$ en utilisant la règle des $k\\sigma$.',
          type: 'numeric',
          answer: 0.954,
          tolerance: 0.005,
          unit: '',
          points: 2,
          correction: '$42 = 50 - 2 \\times 4 = \\mu - 2\\sigma$ et $58 = 50 + 2 \\times 4 = \\mu + 2\\sigma$. Donc $P(42 \\leq X \\leq 58) = P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 0{,}954$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(100;15^2)$, que vaut $P(X \\leq 100)$ ?',
          type: 'multiple-choice',
          options: ['$0{,}5$', '$0{,}683$', '$1$', '$0{,}954$'],
          answer: 0,
          points: 2,
          correction: 'La loi normale est symétrique autour de $\\mu$. Donc $P(X \\leq \\mu) = P(X \\leq 100) = 0{,}5$.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[2;10]$. Calculer $E(X)$.',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$E(X) = \\dfrac{a+b}{2} = \\dfrac{2+10}{2} = 6$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(80;5^2)$, quelle est la probabilité approchée $P(X > 90)$ ?',
          type: 'multiple-choice',
          options: ['$\\approx 0{,}023$ (environ $2{,}3\\%$)', '$\\approx 0{,}046$ (environ $4{,}6\\%$)', '$\\approx 0{,}159$ (environ $16\\%$)', '$\\approx 0{,}5$ (environ $50\\%$)'],
          answer: 0,
          points: 2,
          correction: '$90 = 80 + 2 \\times 5 = \\mu + 2\\sigma$. Donc $P(X > 90) = P(X > \\mu + 2\\sigma) = \\dfrac{1 - 0{,}954}{2} \\approx 0{,}023$. Par symétrie, la probabilité au-delà de $\\mu + 2\\sigma$ est la moitié de la queue bilatérale.'
        },
        {
          statement: 'La variable $X$ suit la loi uniforme sur $[0;6]$. Calculer $P(1 \\leq X \\leq 4)$.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour la loi uniforme sur $[a;b]$ : $P(c \\leq X \\leq d) = \\dfrac{d-c}{b-a}$. Donc $P(1 \\leq X \\leq 4) = \\dfrac{4-1}{6-0} = \\dfrac{3}{6} = 0{,}5$.'
        }
      ]
    }
  });
