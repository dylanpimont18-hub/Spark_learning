/* =========================================================
   Spark Learning – data/bts/statistiques.js
   Module : Statistiques descriptives (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'statistiques',
    level: 3, subject: 'maths',
    icon: '📏',
    title: 'Statistiques et Calculs d\'Incertitudes',
    subtitle: 'Moyenne, écart-type, incertitude type A',
    keywords: ['Moyenne', 'Écart-type', 'Incertitude', 'Intervalle de confiance'],
    physics: 'Validation expérimentale, expression du résultat avec incertitude',

    cours: {
      intro: 'En métrologie industrielle, un résultat sans incertitude n\'a aucune valeur : $R = 100{,}0$ Ω seul est inutile, $R = 100{,}0 \\pm 1{,}1$ Ω à 95% est un résultat exploitable.<br/><br/>Le GUM (Guide for the Expression of Uncertainty in Measurement) distingue deux types : type A (évaluation statistique sur répétitions) et type B (abaques, certificats d\'étalonnage, notices).<br/><br/>L\'incertitude type A se réduit en $1/\\sqrt{n}$ : doubler le nombre de mesures divise l\'incertitude par $\\sqrt{2}$, pas par 2.<br/><br/>L\'écart-type d\'un échantillon se calcule avec $(n-1)$ au dénominateur — et non $n$ — pour obtenir un estimateur non biaisé de la dispersion de la population. Cette correction de Bessel est cruciale pour les petits échantillons ($n < 10$).<br/><br/>L\'incertitude élargie $U = k \\cdot u_A$ avec $k=2$ correspond à environ $95\\%$ des cas (loi normale).',
      definitions: [
        { term: 'Moyenne $\\bar{x}$', def: 'Valeur centrale d\'un ensemble de mesures : $\\bar{x} = \\frac{1}{n}\\sum x_i$. C\'est la meilleure estimation de la grandeur mesurée.' },
        { term: 'Écart-type expérimental $s$', def: 'Mesure de la dispersion des mesures autour de la moyenne : $s = \\sqrt{\\frac{\\sum(x_i - \\bar{x})^2}{n-1}}$. Plus $s$ est grand, plus les mesures sont dispersées.' },
        { term: 'Incertitude type A $u_A$', def: 'Incertitude sur la moyenne estimée par méthode statistique : $u_A = s/\\sqrt{n}$. Elle diminue quand le nombre de mesures $n$ augmente.' },
        { term: 'Correction de Bessel', def: 'Division par $(n-1)$ au lieu de $n$ dans le calcul de la variance d\'un échantillon. Cela compense le fait que $\\bar{x}$ est elle-même estimée sur l\'échantillon, consommant un degré de liberté.' }
      ],
      method: {
        title: 'Méthode d\'évaluation de type A',
        steps: [
          '<strong>Moyenne des mesures</strong> : réaliser $n$ mesures $x_1, x_2, \\ldots, x_n$ puis calculer $\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i$.<br/><br/><strong>Exemple :</strong> $n = 4$ mesures de tension : $5{,}1$ ; $4{,}9$ ; $5{,}0$ ; $5{,}2$ V → $\\bar{x} = (5{,}1+4{,}9+5{,}0+5{,}2)/4 = 20{,}2/4 = 5{,}05$ V.',
          '<strong>Écart-type expérimental</strong> : $s = \\sqrt{\\dfrac{1}{n-1} \\sum_{i=1}^n (x_i - \\bar{x})^2}$.<br/><br/><strong>Exemple :</strong> Écarts : $(0{,}05)^2 + (-0{,}15)^2 + (-0{,}05)^2 + (0{,}15)^2 = 0{,}05$ → $s = \\sqrt{0{,}05/3} \\approx 0{,}129$ V.',
          '<strong>Incertitude type A</strong> : $u_A = \\dfrac{s}{\\sqrt{n}}$. Le résultat final s\'exprime : $\\bar{x} \\pm k \\cdot u_A$ où $k = 2$ (intervalle à 95%) ou $k = 3$ (99%).<br/><br/><strong>Exemple :</strong> $u_A = 0{,}129/\\sqrt{4} = 0{,}065$ V → résultat : $U = 5{,}05 \\pm 0{,}13$ V (à 95%, $k=2$).'
        ]
      },
      example: {
        statement: 'Un technicien mesure 5 fois la longueur d\'une pièce usinée (en mm) : $50{,}12$ ; $49{,}95$ ; $50{,}08$ ; $50{,}01$ ; $49{,}94$. Exprimer le résultat avec son incertitude à 95%.',
        steps: [
          'Moyenne : $\\bar{x} = (50{,}12 + 49{,}95 + 50{,}08 + 50{,}01 + 49{,}94)/5 = 250{,}10/5 = 50{,}02$ mm.',
          'Écarts à la moyenne : $0{,}10$ ; $-0{,}07$ ; $0{,}06$ ; $-0{,}01$ ; $-0{,}08$.',
          'Somme des carrés des écarts : $0{,}01 + 0{,}0049 + 0{,}0036 + 0{,}0001 + 0{,}0064 = 0{,}025$.',
          'Écart-type : $s = \\sqrt{0{,}025/4} = \\sqrt{0{,}00625} \\approx 0{,}079$ mm.',
          'Incertitude type A : $u_A = 0{,}079/\\sqrt{5} \\approx 0{,}035$ mm.',
          'Résultat à 95% ($k=2$) : $L = 50{,}02 \\pm 0{,}07$ mm.'
        ],
        answer: '$L = 50{,}02 \\pm 0{,}07$ mm (à 95% de confiance).'
      },
      formulas: [
        '$\\bar{x} = \\dfrac{1}{n} \\sum_{i=1}^n x_i$ (moyenne)',
        '$s = \\sqrt{\\dfrac{\\sum(x_i - \\bar{x})^2}{n-1}}$ (écart-type)',
        '$u_A = \\dfrac{s}{\\sqrt{n}}$ (incertitude type A)',
        'Résultat : $R = \\bar{x} \\pm k \\cdot u_A$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Intervalles emboîtés',
        title: 'Intervalles de confiance autour de $\\bar{x} = 100{,}0$ Ω',
        description: 'En reprenant l\'exemple du problème du cours ($n=5$ résistances, $\\bar{x} = 100{,}0$ Ω, $s \\approx 1{,}19$ Ω, $u_A \\approx 0{,}53$ Ω), l\'axe gradué place la moyenne au centre et fait apparaître <strong>deux intervalles emboîtés</strong> : $\\bar{x} \\pm u_A$ (zone foncée) et $\\bar{x} \\pm 2u_A$ (zone claire), ce dernier englobant entièrement le premier.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="stats-bts-ic-title stats-bts-ic-desc">
            <title id="stats-bts-ic-title">Intervalles de confiance autour de la moyenne</title>
            <desc id="stats-bts-ic-desc">Axe gradue de la resistance en ohms, moyenne x barre egale 100,0, avec deux intervalles emboites : x barre plus ou moins u_A soit de 99,47 a 100,53, et x barre plus ou moins 2 u_A soit de 98,94 a 101,06, ce dernier englobant totalement le premier.</desc>
            <rect x="98.13" y="60" width="283.74" height="100" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)" stroke="none"></rect>
            <rect x="169.07" y="60" width="141.86" height="100" fill="color-mix(in srgb, var(--diagram-accent) 26%, transparent)" stroke="none"></rect>
            <text class="label-soft" x="125" y="78" text-anchor="middle">zone ± 2u_A</text>
            <text class="label-soft" x="240" y="98" text-anchor="middle">zone ± u_A</text>
            <line class="axis" x1="30" y1="160" x2="450" y2="160"></line>
            <line class="axis" x1="40" y1="160" x2="40" y2="166"></line>
            <line class="axis" x1="106.67" y1="160" x2="106.67" y2="166"></line>
            <line class="axis" x1="173.33" y1="160" x2="173.33" y2="166"></line>
            <line class="axis" x1="240" y1="160" x2="240" y2="166"></line>
            <line class="axis" x1="306.67" y1="160" x2="306.67" y2="166"></line>
            <line class="axis" x1="373.33" y1="160" x2="373.33" y2="166"></line>
            <line class="axis" x1="440" y1="160" x2="440" y2="166"></line>
            <text class="tick-label" x="40" y="182" text-anchor="middle">98,5</text>
            <text class="tick-label" x="106.67" y="182" text-anchor="middle">99</text>
            <text class="tick-label" x="173.33" y="182" text-anchor="middle">99,5</text>
            <text class="tick-label" x="240" y="182" text-anchor="middle">100</text>
            <text class="tick-label" x="306.67" y="182" text-anchor="middle">100,5</text>
            <text class="tick-label" x="373.33" y="182" text-anchor="middle">101</text>
            <text class="tick-label" x="440" y="182" text-anchor="middle">101,5</text>
            <text class="axis-label" x="454" y="164" text-anchor="start">R (Ω)</text>
            <line class="focus-line" x1="98.13" y1="150" x2="98.13" y2="170"></line>
            <line class="focus-line" x1="169.07" y1="150" x2="169.07" y2="170"></line>
            <line class="focus-line" x1="310.93" y1="150" x2="310.93" y2="170"></line>
            <line class="focus-line" x1="381.87" y1="150" x2="381.87" y2="170"></line>
            <circle class="plot-point" cx="240" cy="160" r="5"></circle>
            <circle class="plot-point-alt" cx="169.07" cy="160" r="3"></circle>
            <circle class="plot-point-alt" cx="310.93" cy="160" r="3"></circle>
            <circle class="plot-point-alt" cx="98.13" cy="160" r="3"></circle>
            <circle class="plot-point-alt" cx="381.87" cy="160" r="3"></circle>
            <text class="annotation-label" x="240" y="145" text-anchor="middle">x̄ = 100,0</text>
            <line class="guide-line" x1="169.07" y1="210" x2="310.93" y2="210"></line>
            <line class="guide-line" x1="169.07" y1="204" x2="169.07" y2="216"></line>
            <line class="guide-line" x1="310.93" y1="204" x2="310.93" y2="216"></line>
            <text class="annotation-label" x="240" y="228" text-anchor="middle">± u_A → [99,47 ; 100,53]</text>
            <line class="guide-line" x1="98.13" y1="250" x2="381.87" y2="250"></line>
            <line class="guide-line" x1="98.13" y1="244" x2="98.13" y2="256"></line>
            <line class="guide-line" x1="381.87" y1="244" x2="381.87" y2="256"></line>
            <text class="annotation-label" x="240" y="268" text-anchor="middle">± 2u_A → [98,94 ; 101,06]</text>
          </svg>
        `,
        notes: [
          'Intervalle $\\bar{x} \\pm u_A$ : $[100{,}0 - 0{,}53\\,;\\,100{,}0 + 0{,}53] = [99{,}47\\,;\\,100{,}53]$ Ω (zone foncée, la plus étroite).',
          'Intervalle $\\bar{x} \\pm 2u_A$ : $[100{,}0 - 1{,}06\\,;\\,100{,}0 + 1{,}06] = [98{,}94\\,;\\,101{,}06]$ Ω (zone claire, deux fois plus large, qui englobe entièrement la première).',
          'Valeurs reprises du problème du cours : $\\bar{R} = 100{,}0$ Ω et $s \\approx 1{,}19$ Ω pour $n = 5$ mesures, d\'où $u_A = s/\\sqrt{5} \\approx 0{,}53$ Ω.'
        ],
        reading: 'Ce qu\'il faut lire : le second intervalle ($\\pm 2u_A$) englobe complètement le premier ($\\pm u_A$) — il est deux fois plus large et correspond au niveau de confiance à $95\\%$ utilisé dans le cours (contre un niveau de confiance plus faible pour $\\pm u_A$ seul).',
        caption: 'Axe gradué de la résistance $R$ (Ω) : intervalles de confiance emboîtés $\\bar{x} \\pm u_A$ et $\\bar{x} \\pm 2u_A$, recalculés à partir de l\'exemple du cours ($\\bar{x}=100{,}0$ Ω, $u_A \\approx 0{,}53$ Ω).'
      },
      recap: [
        'Toujours exprimer un résultat expérimental avec son incertitude : $\\bar{x} \\pm k \\cdot u_A$.',
        'L\'écart-type $s$ (dispersion) se calcule avec $(n-1)$ au dénominateur (correction de Bessel), pas $n$.',
        'L\'incertitude $u_A = s/\\sqrt{n}$ diminue en $1/\\sqrt{n}$ : pour diviser l\'incertitude par 2, il faut 4 fois plus de mesures.',
        '$k = 2$ donne un intervalle de confiance à 95%, $k = 3$ à 99%.'
      ],
      piege: 'On divise par $(n-1)$ et non par $n$ pour l\'écart-type d\'un échantillon.<br/><br/>Diviser par $n$ donnerait l\'écart-type de la population entière (si on la connaissait). Avec un échantillon fini, $(n-1)$ donne un estimateur non biaisé.'
    },

    quiz: [
      {
        q: 'On effectue $n = 9$ mesures de résistance et on obtient un écart-type $s = 0{,}3$ Ω. L\'incertitude type A est :',
        options: ['$u_A = 0{,}3$ Ω', '$u_A = 0{,}1$ Ω', '$u_A = 0{,}033$ Ω', '$u_A = 0{,}9$ Ω'],
        answer: 1,
        correction: '$u_A = s/\\sqrt{n} = 0{,}3/\\sqrt{9} = 0{,}3/3 = 0{,}1$ Ω. Augmenter le nombre de mesures réduit l\'incertitude (en $1/\\sqrt{n}$).'
      },
      {
        q: 'Pour un intervalle de confiance à 95%, le facteur d\'élargissement $k$ est environ :',
        options: ['$k = 1$', '$k = 2$', '$k = 3$', '$k = 5$'],
        answer: 1,
        correction: 'Conventionnellement : $k = 2$ pour 95% et $k = 3$ pour 99%. Ces valeurs correspondent à la loi normale standard (approximation valable pour $n$ grand).'
      },
      {
        q: 'Pour calculer l\'écart-type d\'un échantillon de $n = 5$ mesures, on divise la somme des carrés des écarts par :',
        options: [
          '$n - 1 = 4$ : estimateur non biaisé de la variance de la population (correction de Bessel)',
          '$n = 5$ : donne l\'écart-type de l\'échantillon uniquement, biaisé',
          '$n + 1 = 6$ : surcorrection inutile',
          '$\\sqrt{n} = \\sqrt{5}$ : comme pour l\'incertitude type A'
        ],
        answer: 0,
        correction: 'Diviser par $n-1$ plutôt que $n$ donne un estimateur non biaisé : en moyenne, $s^2 = \\sum(x_i-\\bar{x})^2/(n-1)$ estime correctement la variance $\\sigma^2$ de la population. Diviser par $n$ sous-estimerait $\\sigma^2$ car $\\bar{x}$ est lui-même calculé sur l\'échantillon (il "consomme" un degré de liberté). Pour $n$ grand, la différence est négligeable ; pour $n = 5$, diviser par $4$ ou $5$ fait une différence de $25\\%$ !'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const fr = x => String(x).replace('.', '{,}');
        const vals = [rand(5,15), rand(5,15), rand(5,15), rand(5,15)];
        const sum = vals.reduce((a,b) => a+b, 0);
        const mean = parseFloat((sum / 4).toFixed(2));

        const ctx = pick([
          {
            build: () => `Un technicien mesure 4 fois la <strong>résistance</strong> d'un résistor au multimètre et obtient (en Ω) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          },
          {
            build: () => `Un contrôleur qualité mesure 4 fois l'<strong>épaisseur</strong> d'une tôle usinée au pied à coulisse et obtient (en mm) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          },
          {
            build: () => `Lors du test d'une <strong>alimentation stabilisée</strong>, on relève 4 fois la tension de sortie (en V) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          },
          {
            build: () => `Sur un <strong>circuit hydraulique</strong>, un capteur relève 4 fois la pression (en bar) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          },
          {
            build: () => `Un contrôle de production pèse 4 fois le même <strong>connecteur</strong> sortant de la chaîne et obtient (en g) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          },
          {
            build: () => `On relève 4 fois l'<strong>écart de température</strong> à l'intérieur d'une enceinte climatique et obtient (en °C) : $\\{${vals[0]};\\; ${vals[1]};\\; ${vals[2]};\\; ${vals[3]}\\}$.<br/><br/>Calcule la <strong>moyenne</strong> $\\bar{x}$ de ces mesures.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: mean,
          tolerance: 0.05,
          unit: '',
          hint: `La moyenne, c'est la somme de toutes les valeurs divisée par le nombre de valeurs : $\\bar{x} = \\dfrac{${vals[0]} + ${vals[1]} + ${vals[2]} + ${vals[3]}}{4}$.`,
          solution: [
            `Somme : $${vals[0]} + ${vals[1]} + ${vals[2]} + ${vals[3]} = ${sum}$`,
            `Nombre de valeurs : $n = 4$`,
            `Moyenne : $\\bar{x} = \\dfrac{${sum}}{4} = ${fr(mean)}$`
          ]
        };
      }
    },

    probleme: {
      context: 'Un étudiant mesure 5 fois la résistance d\'un résistor et obtient les valeurs suivantes (en Ω) : $R_1 = 98{,}2$, $R_2 = 101{,}5$, $R_3 = 99{,}8$, $R_4 = 100{,}3$, $R_5 = 100{,}2$.',
      schema: null,
      tasks: [
        'Calculer la valeur moyenne $\\bar{R}$.',
        'Calculer l\'écart-type expérimental $s$ de la série de mesures.',
        'Calculer l\'incertitude type A $u_A = s/\\sqrt{n}$ et exprimer le résultat final sous la forme $\\bar{R} \\pm 2u_A$ (intervalle de confiance 95%).'
      ],
      solutions: [
        '$\\bar{R} = \\dfrac{98{,}2 + 101{,}5 + 99{,}8 + 100{,}3 + 100{,}2}{5} = \\dfrac{500{,}0}{5} = 100{,}0$ Ω.',
        'Écarts : $(-1{,}8)^2 + (1{,}5)^2 + (-0{,}2)^2 + (0{,}3)^2 + (0{,}2)^2 = 3{,}24 + 2{,}25 + 0{,}04 + 0{,}09 + 0{,}04 = 5{,}66$. $s = \\sqrt{5{,}66/(5-1)} = \\sqrt{1{,}415} \\approx 1{,}19$ Ω.',
        '$u_A = s/\\sqrt{5} = 1{,}19/2{,}236 \\approx 0{,}53$ Ω. Résultat : $R = 100{,}0 \\pm 1{,}1$ Ω (95%).'
      ],
      finalAnswer: '$R = 100{,}0 \\pm 1{,}1$ Ω (à 95% de confiance)'
    },

    evaluation: {
      title: 'Évaluation — Statistiques et Calculs d\'Incertitudes',
      duration: '40 min',
      questions: [
        {
          statement: 'On effectue $n = 16$ mesures d\'une tension et on obtient un écart-type $s = 0{,}8$ V. Calculer l\'incertitude type A $u_A = s/\\sqrt{n}$ (en V).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'V',
          points: 2,
          correction: '$u_A = \\dfrac{s}{\\sqrt{n}} = \\dfrac{0{,}8}{\\sqrt{16}} = \\dfrac{0{,}8}{4} = 0{,}2$ V.'
        },
        {
          statement: 'Pour l\'écart-type d\'un échantillon de $n$ mesures, on divise par $(n-1)$ et non par $n$ car :',
          type: 'multiple-choice',
          options: ['Cela simplifie les calculs', 'C\'est la correction de Bessel : $(n-1)$ donne un estimateur non biaisé de la variance', 'C\'est une convention arbitraire', 'Diviser par $n$ donnerait une valeur trop grande'],
          answer: 1,
          points: 2,
          correction: 'La moyenne $\\bar{x}$ est elle-même estimée à partir de l\'échantillon, ce qui "consomme" un degré de liberté. Diviser par $(n-1)$ (correction de Bessel) donne un estimateur non biaisé de la variance de la population. Diviser par $n$ sous-estimerait systématiquement la variance.'
        },
        {
          statement: 'Cinq mesures de masse donnent (en g) : $50{,}2$ ; $49{,}8$ ; $50{,}0$ ; $50{,}4$ ; $49{,}6$. Calculer la moyenne $\\bar{x}$.',
          type: 'numeric',
          answer: 50.0,
          tolerance: 0.01,
          unit: 'g',
          points: 2,
          correction: '$\\bar{x} = \\dfrac{50{,}2 + 49{,}8 + 50{,}0 + 50{,}4 + 49{,}6}{5} = \\dfrac{250{,}0}{5} = 50{,}0$ g.'
        },
        {
          statement: 'L\'incertitude élargie avec facteur $k = 2$ correspond à un intervalle de confiance d\'environ :',
          type: 'multiple-choice',
          options: ['$68\\%$', '$90\\%$', '$95\\%$', '$99\\%$'],
          answer: 2,
          points: 2,
          correction: 'Conventionnellement : $k = 1 \\to 68\\%$, $k = 2 \\to 95\\%$, $k = 3 \\to 99\\%$. Ces valeurs correspondent aux quantiles de la loi normale.'
        },
        {
          statement: 'On mesure $n = 25$ fois une résistance. $\\bar{R} = 47{,}0$ Ω, $s = 1{,}0$ Ω. Exprimer le résultat avec incertitude élargie à $95\\%$ ($k = 2$). Quelle est la demi-largeur de l\'intervalle (en Ω) ?',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: 'Ω',
          points: 2,
          correction: '$u_A = s/\\sqrt{n} = 1{,}0/\\sqrt{25} = 0{,}2$ Ω. Demi-largeur $= k \\times u_A = 2 \\times 0{,}2 = 0{,}4$ Ω. Résultat : $R = 47{,}0 \\pm 0{,}4$ Ω (à $95\\%$).'
        }
      ]
    }
  }
);
