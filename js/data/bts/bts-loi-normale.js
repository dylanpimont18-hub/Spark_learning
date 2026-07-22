/* =========================================================
   Spark Learning – data/bts/bts-loi-normale.js
   Module : Loi Normale (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-loi-normale',
    level: 3, subject: 'maths',
    icon: '🔔',
    title: 'Loi normale',
    subtitle: 'Distribution de Gauss, intervalles de confiance, z-score',
    keywords: ['Loi normale', 'Gauss', 'Espérance', 'Écart-type', 'z-score', 'Intervalle de confiance'],
    physics: 'Analyse des erreurs de mesure, contrôle qualité, distribution des résultats expérimentaux',

    cours: {
      intro: 'La loi normale est omniprésente car le théorème central limite garantit que la MOYENNE d\'un grand nombre de variables indépendantes converge vers une loi normale — quelle que soit la distribution d\'origine.<br/><br/>En contrôle qualité, les cotes d\'usinage, les résistances de composants, les erreurs de pesée suivent toutes une loi normale. La règle des $68$-$95$-$99{,}7\\%$ (une, deux, trois fois $\\sigma$) est à connaître par cœur.<br/><br/>La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi $\\mathcal{N}(\\mu,\\sigma^2)$ à la loi standard $\\mathcal{N}(0,1)$, dont on lit les probabilités dans une table unique.<br/><br/>Pour les petits échantillons ($n < 30$), la loi de Student remplace la loi normale : ses queues sont plus épaisses, ce qui élargit les intervalles de confiance.',
      definitions: [
        { term: 'Espérance $\\mu$', def: 'Centre de la distribution normale. C\'est la valeur la plus probable (mode = médiane = moyenne). La courbe de Gauss est symétrique autour de $\\mu$.' },
        { term: 'Écart-type $\\sigma$', def: 'Largeur de la cloche de Gauss. $68\\%$ des valeurs tombent dans $[\\mu - \\sigma ; \\mu + \\sigma]$. Plus $\\sigma$ est petit, plus la distribution est concentrée.' },
        { term: 'Centration-réduction (z-score)', def: 'Transformation $Z = (X - \\mu)/\\sigma$ qui ramène toute loi $\\mathcal{N}(\\mu, \\sigma^2)$ à la loi standard $\\mathcal{N}(0, 1)$, permettant d\'utiliser une table unique.' },
        { term: 'Intervalle de confiance', def: 'Intervalle $[\\bar{x} - z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n} ;\\ \\bar{x} + z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}]$ qui contient la vraie moyenne $\\mu$ avec une probabilité donnée (95% pour $z = 1{,}96$).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          '<strong>Centrage-réduction</strong> : $Z = \\dfrac{X - \\mu}{\\sigma}$ suit une loi normale centrée réduite $\\mathcal{N}(0, 1)$.<br/><br/><strong>Exemple :</strong> Si $X \\sim \\mathcal{N}(80, 10^2)$ et $x = 95$ → $Z = (95 - 80)/10 = 1{,}5$.',
          '<strong>Lecture de la table</strong> : $P(Z \\leq z) = \\Phi(z)$. La table donne les probabilités pour des valeurs positives.<br/><br/><strong>Exemple :</strong> $P(Z \\leq 1{,}5) = \\Phi(1{,}5) \\approx 0{,}9332$, donc $P(X \\leq 95) \\approx 93{,}3\\%$.',
          '<strong>Intervalle de confiance</strong> : à 95 % : $\\left[\\bar{x} - 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\ ;\\ \\bar{x} + 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\right]$ (ou $\\pm 2\\sigma$ en approximation).<br/><br/><strong>Exemple :</strong> $\\bar{x} = 80$, $\\sigma = 10$, $n = 25$ → IC = $[80 - 1{,}96 \\times 2 ;\\ 80 + 1{,}96 \\times 2] = [76{,}08 ;\\ 83{,}92]$.'
        ]
      },
      example: {
        statement: 'Des résistances de $470$ Ω sont fabriquées avec une tolérance annoncée à $5\\%$. Un contrôle sur un échantillon de $n = 36$ pièces donne $\\bar{x} = 468$ Ω et $\\sigma = 12$ Ω. Calculer l\'intervalle de confiance à $95\\%$ pour la vraie moyenne $\\mu$. Les résistances sont-elles conformes ?',
        steps: [
          'La tolérance $5\\%$ de $470$ Ω donne l\'intervalle nominal $[446{,}5 ;\\ 493{,}5]$ Ω.',
          'Demi-largeur de l\'IC : $1{,}96 \\times \\sigma/\\sqrt{n} = 1{,}96 \\times 12/\\sqrt{36} = 1{,}96 \\times 2 = 3{,}92$ Ω.',
          'IC à $95\\%$ : $[468 - 3{,}92 ;\\ 468 + 3{,}92] = [464{,}08 ;\\ 471{,}92]$ Ω.',
          'L\'IC est entièrement inclus dans l\'intervalle de tolérance $[446{,}5 ;\\ 493{,}5]$ : la production est conforme à $95\\%$.'
        ],
        answer: 'IC = $[464{,}08 ;\\ 471{,}92]$ Ω. La production est conforme car l\'IC est inclus dans la tolérance $\\pm 5\\%$.'
      },
      formulas: [
        '$Z = \\dfrac{X - \\mu}{\\sigma}$',
        '$P(\\mu - \\sigma \\leq X \\leq \\mu + \\sigma) \\approx 68{,}3\\%$',
        '$P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$',
        '$\\text{IC}_{95\\%} = \\bar{x} \\pm 1{,}96 \\dfrac{\\sigma}{\\sqrt{n}}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Courbe de Gauss',
        title: 'Répartition des valeurs pour $\\mathcal{N}(100\\,;\\,15^2)$',
        description: 'Courbe de densité $f(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$ calculée point par point pour $\\mu = 100$ et $\\sigma = 15$ : les trois bandes montrent où se concentrent $68{,}3\\%$, $95{,}4\\%$ et $99{,}7\\%$ des valeurs autour de la moyenne.',
        svg: `
          <svg viewBox="0 0 470 310" role="img" aria-labelledby="loinormale-bts-title loinormale-bts-desc">
            <title id="loinormale-bts-title">Courbe de Gauss de moyenne 100 et d'ecart-type 15</title>
            <desc id="loinormale-bts-desc">Courbe en cloche calculee a partir de la fonction de densite normale, avec trois bandes concentriques marquant 68,3%, 95,4% et 99,7% des valeurs autour de la moyenne 100.</desc>
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
            <text class="annotation-label" x="220.0" y="20" text-anchor="middle">μ = 100</text>
            <text class="tick-label" x="65.7" y="242" text-anchor="middle">55</text>
            <text class="tick-label" x="117.1" y="242" text-anchor="middle">70</text>
            <text class="tick-label" x="168.6" y="242" text-anchor="middle">85</text>
            <text class="tick-label" x="220.0" y="242" text-anchor="middle">100</text>
            <text class="tick-label" x="271.4" y="242" text-anchor="middle">115</text>
            <text class="tick-label" x="322.9" y="242" text-anchor="middle">130</text>
            <text class="tick-label" x="374.3" y="242" text-anchor="middle">145</text>
            <text class="axis-label" x="414" y="228">x</text>
            <line class="guide-line" x1="168.6" y1="254" x2="271.4" y2="254"></line>
            <text class="annotation-label" x="277.4" y="258">68,3 %</text>
            <line class="guide-line" x1="117.1" y1="270" x2="322.9" y2="270"></line>
            <text class="annotation-label" x="328.9" y="274">95,4 %</text>
            <line class="guide-line" x1="65.7" y1="286" x2="374.3" y2="286"></line>
            <text class="annotation-label" x="380.3" y="290">99,7 %</text>
          </svg>
        `,
        notes: [
          'Bande la plus foncée : $[85\\,;\\,115] = [\\mu-\\sigma\\,;\\,\\mu+\\sigma]$, soit $68{,}3\\%$ des valeurs.',
          'Bande intermédiaire : $[70\\,;\\,130] = [\\mu-2\\sigma\\,;\\,\\mu+2\\sigma]$, soit $95{,}4\\%$ des valeurs — c\'est l\'intervalle du quiz ci-dessus.',
          'Bande la plus large : $[55\\,;\\,145] = [\\mu-3\\sigma\\,;\\,\\mu+3\\sigma]$, soit $99{,}7\\%$ des valeurs : au-delà, une valeur est quasiment exclue.'
        ],
        reading: 'La hauteur de la courbe en chaque point $x$ est calculée avec la vraie formule de densité $f(x)$, pas dessinée à main levée : plus $x$ s\'éloigne de $\\mu=100$, plus $f(x)$ chute, ce qui traduit la rareté des valeurs extrêmes.',
        caption: 'Courbe de densité de $\\mathcal{N}(100\\,;\\,15^2)$ avec la règle $68$-$95$-$99{,}7\\%$.'
      },
      recap: [
        'La règle $68$-$95$-$99{,}7$ : $\\pm 1\\sigma$ contient $68\\%$, $\\pm 2\\sigma$ contient $95\\%$, $\\pm 3\\sigma$ contient $99{,}7\\%$ des valeurs.',
        'La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi normale à $\\mathcal{N}(0,1)$ pour utiliser une table unique.',
        'L\'intervalle de confiance se rétrécit quand $n$ augmente (en $1/\\sqrt{n}$) ou quand $\\sigma$ diminue.',
        'Pour $n < 30$, utiliser la loi de Student (queues plus épaisses que la loi normale).'
      ],
      piege: 'La loi normale est définie par $\\mu$ (espérance = centre) et $\\sigma$ (écart-type = largeur). Ne pas confondre $\\sigma$ (paramètre de la population) et $s$ (écart-type de l\'échantillon, estimateur de $\\sigma$).<br/><br/>Pour un petit échantillon ($n < 30$), on utilise la loi de Student au lieu de la loi normale.'
    },

    quiz: [
      {
        q: 'Une variable suit $\\mathcal{N}(100, 15^2)$. Quel est l\'intervalle contenant 95 % des valeurs ?',
        options: ['$[85 ; 115]$', '$[70 ; 130]$', '$[55 ; 145]$', '$[100 ; 130]$'],
        answer: 1,
        correction: '$\\mu \\pm 2\\sigma = 100 \\pm 2 \\times 15 = 100 \\pm 30$. Intervalle $[70 ; 130]$.'
      },
      {
        q: 'Pour $X \\sim \\mathcal{N}(50\\,;\\,4^2)$, un étudiant calcule $P(48 \\leq X \\leq 52)$ et écrit : "$P(-0{,}5 \\leq Z \\leq 0{,}5) = 2 \\times P(Z \\leq -0{,}5) = 2 \\times 0{,}309 = 0{,}618$." Quelle est son erreur ?',
        options: [
          'Il a calculé $2\\Phi(-0{,}5)$ au lieu de $\\Phi(0{,}5) - \\Phi(-0{,}5) = 0{,}691 - 0{,}309 = 0{,}382$',
          'Il a raison : par symétrie $P(-0{,}5 \\leq Z \\leq 0{,}5) = 2 \\times 0{,}309$',
          'Le z-score est faux : $z = (48-50)/4 = -2$, pas $-0{,}5$',
          '$P(-0{,}5 \\leq Z \\leq 0{,}5) = 1 - 2 \\times 0{,}309 = 0{,}382$. L\'étudiant a raison sur le résultat.'
        ],
        answer: 0,
        correction: '$P(a \\leq Z \\leq b) = \\Phi(b) - \\Phi(a)$. Ici : $\\Phi(0{,}5) - \\Phi(-0{,}5) = 0{,}691 - 0{,}309 = 0{,}382$. L\'erreur : l\'étudiant a écrit $2\\Phi(-0{,}5)$ en multipliant par la valeur en $-0{,}5$ (probabilité de queue gauche), alors qu\'il fallait soustraire les deux bornes. La symétrie dit $\\Phi(-z) = 1-\\Phi(z)$, donc $2\\Phi(-0{,}5) = 2\\times(1-0{,}691) \\neq \\Phi(0{,}5)-\\Phi(-0{,}5)$.'
      },
      {
        q: 'Un échantillon de $n = 100$ mesures donne $\\bar{x} = 200$ et $s = 10$. Quel est l\'intervalle de confiance à 95 % pour $\\mu$ ?',
        options: ['$[180 ; 220]$', '$[198 ; 202]$', '$[190 ; 210]$', '$[196 ; 204]$'],
        answer: 1,
        correction: '$\\text{IC}_{95\\%} = 200 \\pm 1{,}96 \\times \\dfrac{10}{\\sqrt{100}} = 200 \\pm 1{,}96 \\approx [198{,}04 ; 201{,}96] \\approx [198 ; 202]$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const fr = x => String(x).replace('.', '{,}');
        const mu = rand(50, 200), sigma = rand(5, 20);
        const k = pick([1, 2, 3]);
        const pcts = [68.27, 95.45, 99.73];

        const ctx = pick([
          {
            build: () => `Le <strong>diamètre de pièces usinées</strong> sur un tour à commande numérique suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$ (en centièmes de mm).<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          },
          {
            build: () => `La <strong>durée de vie d'un composant électronique</strong> (en centaines d'heures) suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$.<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          },
          {
            build: () => `La <strong>résistance de sortie</strong> d'une série de composants (en Ω) fabriqués en usine suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$.<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          },
          {
            build: () => `Le <strong>poids de sachets</strong> conditionnés par une machine de remplissage (en grammes) suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$.<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          },
          {
            build: () => `La <strong>longueur de câbles</strong> découpés automatiquement (en cm) suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$.<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          },
          {
            build: () => `Le <strong>débit d'une pompe hydraulique</strong> (en L/min) mesuré sur banc d'essai suit une loi normale $\\mathcal{N}(${mu}, ${sigma}^2)$.<br/><br/>` +
              `Quelle est la <strong>borne supérieure</strong> de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: mu + k * sigma,
          tolerance: 0,
          unit: '',
          hint: `$\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma}$.`,
          solution: [
            `Borne supérieure : $\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma} = ${mu + k * sigma}$`,
            `Cet intervalle contient environ $${fr(pcts[k-1])}\\%$ des valeurs.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une machine remplit des bouteilles avec $\\mu = 500\\,\\text{mL}$ et $\\sigma = 5\\,\\text{mL}$ (loi normale). Une bouteille est rejetée si elle contient moins de $490\\,\\text{mL}$ ou plus de $510\\,\\text{mL}$.',
      schema: null,
      tasks: [
        'Calculer le z-score des bornes $490$ mL et $510$ mL.',
        'En utilisant $P(-2 \\leq Z \\leq 2) \\approx 95{,}45\\%$, estimer le pourcentage de bouteilles conformes.',
        'Sur $10000$ bouteilles produites, combien sont rejetées ?'
      ],
      solutions: [
        '$Z_{490} = \\dfrac{490 - 500}{5} = -2$ et $Z_{510} = \\dfrac{510 - 500}{5} = +2$.',
        '$P(490 \\leq X \\leq 510) = P(-2 \\leq Z \\leq 2) \\approx 95{,}45\\%$ de bouteilles conformes.',
        'Rejetées : $(100 - 95{,}45)\\% \\times 10000 = 4{,}55\\% \\times 10000 \\approx 455$ bouteilles.'
      ],
      finalAnswer: '$\\approx 455$ bouteilles rejetées sur $10000$'
    },

    evaluation: {
      title: 'Évaluation — Loi normale',
      duration: '40 min',
      questions: [
        {
          statement: 'Une variable suit $\\mathcal{N}(50\\,;\\,8^2)$. Calculer le z-score de la valeur $x = 66$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$Z = \\dfrac{x - \\mu}{\\sigma} = \\dfrac{66 - 50}{8} = \\dfrac{16}{8} = 2$.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{N}(\\mu\\,;\\,\\sigma^2)$, l\'intervalle $[\\mu - 2\\sigma\\,;\\,\\mu + 2\\sigma]$ contient environ :',
          type: 'multiple-choice',
          options: ['$68\\%$ des valeurs', '$95\\%$ des valeurs', '$99{,}7\\%$ des valeurs', '$50\\%$ des valeurs'],
          answer: 1,
          points: 2,
          correction: 'Règle empirique $68$-$95$-$99{,}7$ : $\\pm 1\\sigma \\to 68{,}3\\%$, $\\pm 2\\sigma \\to 95{,}4\\%$, $\\pm 3\\sigma \\to 99{,}7\\%$.'
        },
        {
          statement: 'Un échantillon de $n = 64$ mesures donne $\\bar{x} = 120$ et $\\sigma = 16$. Calculer la demi-largeur de l\'intervalle de confiance à $95\\%$ : $1{,}96 \\times \\dfrac{\\sigma}{\\sqrt{n}}$.',
          type: 'numeric',
          answer: 3.92,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: 'Demi-largeur $= 1{,}96 \\times \\dfrac{16}{\\sqrt{64}} = 1{,}96 \\times \\dfrac{16}{8} = 1{,}96 \\times 2 = 3{,}92$. L\'IC est $[120 - 3{,}92\\,;\\,120 + 3{,}92] = [116{,}08\\,;\\,123{,}92]$.'
        },
        {
          statement: 'La centration-réduction $Z = \\dfrac{X - \\mu}{\\sigma}$ transforme $X \\sim \\mathcal{N}(\\mu, \\sigma^2)$ en :',
          type: 'multiple-choice',
          options: ['$Z \\sim \\mathcal{N}(\\mu, 1)$', '$Z \\sim \\mathcal{N}(0, \\sigma^2)$', '$Z \\sim \\mathcal{N}(0, 1)$', '$Z \\sim \\mathcal{N}(1, 0)$'],
          answer: 2,
          points: 2,
          correction: 'La centration-réduction ramène toute loi normale $\\mathcal{N}(\\mu, \\sigma^2)$ à la loi standard $\\mathcal{N}(0, 1)$, dont les probabilités se lisent dans une table unique.'
        },
        {
          statement: 'Des pièces usinées ont un diamètre $X \\sim \\mathcal{N}(20\\,;\\,0{,}5^2)$ mm. Quel pourcentage de pièces a un diamètre compris entre $19$ mm et $21$ mm ? (Utiliser la règle $\\pm 2\\sigma \\approx 95{,}4\\%$)',
          type: 'numeric',
          answer: 95.4,
          tolerance: 0.5,
          unit: '%',
          points: 1,
          correction: '$19 = 20 - 2 \\times 0{,}5 = \\mu - 2\\sigma$ et $21 = 20 + 2 \\times 0{,}5 = \\mu + 2\\sigma$. Donc $P(19 \\leq X \\leq 21) = P(\\mu - 2\\sigma \\leq X \\leq \\mu + 2\\sigma) \\approx 95{,}4\\%$.'
        }
      ]
    }
  }
);
