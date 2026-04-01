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
      intro: 'La loi normale est omniprésente car le théorème central limite garantit que la MOYENNE d\'un grand nombre de variables indépendantes converge vers une loi normale — quelle que soit la distribution d\'origine. En contrôle qualité, les cotes d\'usinage, les résistances de composants, les erreurs de pesée suivent toutes une loi normale. La règle des $68$-$95$-$99{,}7\\%$ (une, deux, trois fois $\\sigma$) est à connaître par cœur. La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi $\\mathcal{N}(\\mu,\\sigma^2)$ à la loi standard $\\mathcal{N}(0,1)$, dont on lit les probabilités dans une table unique. Pour les petits échantillons ($n < 30$), la loi de Student remplace la loi normale : ses queues sont plus épaisses, ce qui élargit les intervalles de confiance.',
      definitions: [
        { term: 'Espérance $\\mu$', def: 'Centre de la distribution normale. C\'est la valeur la plus probable (mode = médiane = moyenne). La courbe de Gauss est symétrique autour de $\\mu$.' },
        { term: 'Écart-type $\\sigma$', def: 'Largeur de la cloche de Gauss. $68\\%$ des valeurs tombent dans $[\\mu - \\sigma ; \\mu + \\sigma]$. Plus $\\sigma$ est petit, plus la distribution est concentrée.' },
        { term: 'Centration-réduction (z-score)', def: 'Transformation $Z = (X - \\mu)/\\sigma$ qui ramène toute loi $\\mathcal{N}(\\mu, \\sigma^2)$ à la loi standard $\\mathcal{N}(0, 1)$, permettant d\'utiliser une table unique.' },
        { term: 'Intervalle de confiance', def: 'Intervalle $[\\bar{x} - z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n} ;\\ \\bar{x} + z_{\\alpha/2} \\cdot \\sigma/\\sqrt{n}]$ qui contient la vraie moyenne $\\mu$ avec une probabilité donnée (95% pour $z = 1{,}96$).' }
      ],
      method: {
        title: 'Méthode',
        steps: [
          'Centrer-réduire : $Z = \\dfrac{X - \\mu}{\\sigma}$ suit une loi normale centrée réduite $\\mathcal{N}(0, 1)$. <strong>Exemple :</strong> Si $X \\sim \\mathcal{N}(80, 10^2)$ et $x = 95$ → $Z = (95 - 80)/10 = 1{,}5$.',
          'Lire la table de la loi normale : $P(Z \\leq z) = \\Phi(z)$. La table donne les probabilités pour des valeurs positives. <strong>Exemple :</strong> $P(Z \\leq 1{,}5) = \\Phi(1{,}5) \\approx 0{,}9332$, donc $P(X \\leq 95) \\approx 93{,}3\\%$.',
          'Intervalle de confiance à 95 % : $\\left[\\bar{x} - 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\ ;\\ \\bar{x} + 1{,}96\\dfrac{\\sigma}{\\sqrt{n}}\\right]$ (ou $\\pm 2\\sigma$ en approximation). <strong>Exemple :</strong> $\\bar{x} = 80$, $\\sigma = 10$, $n = 25$ → IC = $[80 - 1{,}96 \\times 2 ;\\ 80 + 1{,}96 \\times 2] = [76{,}08 ;\\ 83{,}92]$.'
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
      recap: [
        'La règle $68$-$95$-$99{,}7$ : $\\pm 1\\sigma$ contient $68\\%$, $\\pm 2\\sigma$ contient $95\\%$, $\\pm 3\\sigma$ contient $99{,}7\\%$ des valeurs.',
        'La centration-réduction $Z = (X-\\mu)/\\sigma$ ramène toute loi normale à $\\mathcal{N}(0,1)$ pour utiliser une table unique.',
        'L\'intervalle de confiance se rétrécit quand $n$ augmente (en $1/\\sqrt{n}$) ou quand $\\sigma$ diminue.',
        'Pour $n < 30$, utiliser la loi de Student (queues plus épaisses que la loi normale).'
      ],
      piege: 'La loi normale est définie par $\\mu$ (espérance = centre) et $\\sigma$ (écart-type = largeur). Ne pas confondre $\\sigma$ (paramètre de la population) et $s$ (écart-type de l\'échantillon, estimateur de $\\sigma$). Pour un petit échantillon ($n < 30$), on utilise la loi de Student au lieu de la loi normale.'
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
        answer: 3,
        correction: '$\\text{IC}_{95\\%} = 200 \\pm 1{,}96 \\times \\dfrac{10}{\\sqrt{100}} = 200 \\pm 1{,}96 \\approx [198{,}04 ; 201{,}96] \\approx [198 ; 202]$. Mais l\'option la plus proche avec $\\pm 2 \\times 10/\\sqrt{100} = \\pm 2$ → $[198;202]$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const mu = rand(50, 200), sigma = rand(5, 20);
        const k = pick([1, 2, 3]);
        const pcts = [68.27, 95.45, 99.73];
        return {
          statement: `Une variable suit $\\mathcal{N}(${mu}, ${sigma}^2)$. Quelle est la borne supérieure de l'intervalle $[\\mu - ${k}\\sigma ;\\ \\mu + ${k}\\sigma]$ ?`,
          answer: mu + k * sigma,
          tolerance: 0,
          unit: '',
          hint: `$\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma}$.`,
          solution: [
            `Borne supérieure : $\\mu + ${k}\\sigma = ${mu} + ${k} \\times ${sigma} = ${mu + k * sigma}$`,
            `Cet intervalle contient environ $${pcts[k-1]}\\%$ des valeurs.`
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
);
