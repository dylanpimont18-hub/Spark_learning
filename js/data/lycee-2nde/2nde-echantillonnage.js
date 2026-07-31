/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-echantillonnage.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-echantillonnage',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Échantillonnage et estimation',
    subtitle: 'Fréquences, fluctuation, intervalle de confiance',
    keywords: ['Échantillon', 'Fréquence', 'Fluctuation', 'Intervalle de confiance'],
    physics: false,
    cours: {
      intro: 'L\'échantillonnage permet d\'inférer des propriétés d\'une grande population à partir d\'un sous-groupe représentatif. La fréquence observée dans un échantillon de taille $n$ fluctue aléatoirement autour de la vraie proportion $p$ — cette variabilité diminue quand $n$ augmente. L\'intervalle de confiance à $95\\%$ fournit une plage dans laquelle se trouve la vraie proportion dans $95\\%$ des cas si on répétait l\'expérience. La marge d\'erreur $e = 1/\\sqrt{n}$ montre que passer de $100$ à $400$ personnes divise l\'erreur par $2$ (pas par $4$) : améliorer la précision coûte cher en taille d\'échantillon. Cette formule est une approximation valable pour $n \\geq 30$.',
      definitions: [
        { term: 'Échantillon', def: 'Sous-groupe de taille $n$ tiré au hasard dans une population. Il doit être représentatif pour que les résultats soient fiables.' },
        { term: 'Fréquence observée', def: '$f = \\dfrac{\\text{effectif du caractère}}{n}$ : proportion mesurée dans l\'échantillon. Elle fluctue d\'un échantillon à l\'autre.' },
        { term: 'Intervalle de confiance', def: 'Plage $[f - e ; f + e]$ qui contient la vraie proportion $p$ avec un niveau de confiance donné (ici $95\\%$).' },
        { term: 'Marge d\'erreur', def: '$e = \\dfrac{1}{\\sqrt{n}}$ (approximation au niveau $95\\%$). Plus $n$ est grand, plus $e$ est petit.' }
      ],
      method: {
        title: 'Construire un intervalle de confiance (niveau 95%)',
        steps: [
          'Calculer la fréquence observée $f = \\frac{\\text{effectif}}{n}$ dans l\'échantillon de taille $n$. <strong>Exemple :</strong> $120$ personnes sur $400$ sont favorables → $f = \\frac{120}{400} = 0{,}3$.',
          'Calculer la marge d\'erreur $e = \\frac{1}{\\sqrt{n}}$. <strong>Exemple :</strong> $e = \\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$.',
          'L\'intervalle de confiance est $\\left[f - \\frac{1}{\\sqrt{n}} ; f + \\frac{1}{\\sqrt{n}}\\right]$. <strong>Exemple :</strong> $[0{,}3 - 0{,}05 ; 0{,}3 + 0{,}05] = [0{,}25 ; 0{,}35]$.',
          'Interpréter : on est sûr à 95% que la vraie proportion $p$ est dans cet intervalle. <strong>Exemple :</strong> La vraie proportion de personnes favorables est entre $25\\%$ et $35\\%$ avec $95\\%$ de confiance.'
        ]
      },
      example: {
        statement: 'Un sondage interroge $n = 900$ personnes. $540$ sont satisfaites d\'un produit. Construire l\'intervalle de confiance à $95\\%$ pour la proportion de satisfaits.',
        steps: [
          'Fréquence observée : $f = \\dfrac{540}{900} = 0{,}6$.',
          'Marge d\'erreur : $e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$.',
          'Intervalle de confiance : $[0{,}6 - 0{,}033 ; 0{,}6 + 0{,}033] = [0{,}567 ; 0{,}633]$.'
        ],
        answer: 'On peut affirmer, avec $95\\%$ de confiance, que la vraie proportion de satisfaits est comprise entre $56{,}7\\%$ et $63{,}3\\%$.'
      },
      formulas: [
        '$I_{conf} = \\left[f - \\dfrac{1}{\\sqrt{n}} ; f + \\dfrac{1}{\\sqrt{n}}\\right]$',
        'Marge d\'erreur $e = \\dfrac{1}{\\sqrt{n}}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Fluctuation d\'échantillonnage',
        title: 'Distribution de la fréquence $f$ pour $n = 900$',
        description: 'Courbe en cloche calculée à partir de l\'approximation normale du théorème central limite (écart-type $\\sigma = \\sqrt{f(1-f)/n} \\approx 1{,}63$ point), sur l\'exemple du cours : $n = 900$ personnes interrogées, $540$ satisfaites, $f = 0{,}6$. La bande centrale surligne l\'intervalle de confiance $[f-e\\,;\\,f+e]$.',
        svg: `
          <svg viewBox="0 0 470 285" role="img" aria-labelledby="ech2nde-title ech2nde-desc">
            <title id="ech2nde-title">Distribution approchee de la frequence observee pour n=900</title>
            <desc id="ech2nde-desc">Courbe en cloche centree sur f=60%, avec la bande de l'intervalle de confiance a 95% entre 56,7% et 63,3% surlignee.</desc>
            <line class="grid-line" x1="40.0" y1="40" x2="40.0" y2="224"></line>
            <line class="grid-line" x1="105.0" y1="40" x2="105.0" y2="224"></line>
            <line class="grid-line" x1="170.0" y1="40" x2="170.0" y2="224"></line>
            <line class="grid-line" x1="235.0" y1="40" x2="235.0" y2="224"></line>
            <line class="grid-line" x1="300.0" y1="40" x2="300.0" y2="224"></line>
            <line class="grid-line" x1="365.0" y1="40" x2="365.0" y2="224"></line>
            <line class="grid-line" x1="430.0" y1="40" x2="430.0" y2="224"></line>
            <path d="M20.5 224.0 L20.5 223.9 L40.0 223.8 L59.5 223.2 L79.0 221.6 L98.5 217.3 L118.0 207.8 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L352.0 207.8 L371.5 217.3 L391.0 221.6 L410.5 223.2 L430.0 223.8 L449.5 223.9 L449.5 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" stroke="none"></path>
            <path d="M126.7 224.0 L126.7 201.1 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L343.3 201.1 L343.3 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></path>
            <path class="curve-main" d="M20.5 223.9 L40.0 223.8 L59.5 223.2 L79.0 221.6 L98.5 217.3 L118.0 207.8 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L352.0 207.8 L371.5 217.3 L391.0 221.6 L410.5 223.2 L430.0 223.8 L449.5 223.9"></path>
            <line class="axis" x1="15" y1="224" x2="455" y2="224"></line>
            <line class="axis" x1="40.0" y1="224" x2="40.0" y2="230"></line>
            <line class="axis" x1="105.0" y1="224" x2="105.0" y2="230"></line>
            <line class="axis" x1="170.0" y1="224" x2="170.0" y2="230"></line>
            <line class="axis" x1="235.0" y1="224" x2="235.0" y2="230"></line>
            <line class="axis" x1="300.0" y1="224" x2="300.0" y2="230"></line>
            <line class="axis" x1="365.0" y1="224" x2="365.0" y2="230"></line>
            <line class="axis" x1="430.0" y1="224" x2="430.0" y2="230"></line>
            <circle class="plot-point" cx="235.0" cy="40.0" r="4"></circle>
            <circle class="plot-point-alt" cx="126.7" cy="201.1" r="3"></circle>
            <circle class="plot-point-alt" cx="343.3" cy="201.1" r="3"></circle>
            <text class="annotation-label" x="235.0" y="20" text-anchor="middle">f = 60 %</text>
            <text class="annotation-label" x="121" y="193" text-anchor="end">56,7 %</text>
            <text class="annotation-label" x="348" y="193" text-anchor="start">63,3 %</text>
            <text class="tick-label" x="40.0" y="242" text-anchor="middle">54 %</text>
            <text class="tick-label" x="105.0" y="242" text-anchor="middle">56 %</text>
            <text class="tick-label" x="170.0" y="242" text-anchor="middle">58 %</text>
            <text class="tick-label" x="235.0" y="242" text-anchor="middle">60 %</text>
            <text class="tick-label" x="300.0" y="242" text-anchor="middle">62 %</text>
            <text class="tick-label" x="365.0" y="242" text-anchor="middle">64 %</text>
            <text class="tick-label" x="430.0" y="242" text-anchor="middle">66 %</text>
            <text class="axis-label" x="459" y="228">f</text>
            <line class="guide-line" x1="126.7" y1="256" x2="343.3" y2="256"></line>
            <text class="annotation-label" x="349" y="260">IC 95 %</text>
          </svg>
        `,
        notes: [
          'Fréquence observée : $f = 540/900 = 0{,}6$, soit $60\\%$.',
          'Marge d\'erreur du cours : $e = 1/\\sqrt{900} = 1/30 \\approx 0{,}033$, soit environ $3{,}3$ points.',
          'Intervalle de confiance à $95\\%$ : $[f-e\\,;\\,f+e] = [0{,}567\\,;\\,0{,}633]$, soit $[56{,}7\\,\\%\\,;\\,63{,}3\\,\\%]$ — la bande foncée du schéma.'
        ],
        reading: 'La marge $e=1/\\sqrt{n}$ du cours majore légèrement l\'écart-type théorique $\\sigma = \\sqrt{f(1-f)/n} \\approx 1{,}63$ point : elle correspond au pire cas $f=0{,}5$ (où $\\sigma$ est maximal), ce qui rend la formule valable quelle que soit la valeur de $f$.',
        caption: 'Distribution approchée de la fréquence observée $f$ autour de la vraie proportion, avec l\'intervalle de confiance $[f-e\\,;\\,f+e]$ en évidence.'
      },
      recap: [
        'La fréquence observée $f$ fluctue autour de la vraie proportion $p$ : c\'est la fluctuation d\'échantillonnage.',
        'La marge d\'erreur $e = 1/\\sqrt{n}$ diminue quand $n$ augmente, mais lentement (il faut multiplier $n$ par $4$ pour diviser $e$ par $2$).',
        'L\'intervalle de confiance ne garantit pas à $100\\%$ que $p$ est dedans : il y a $5\\%$ de risque d\'erreur.',
        'La formule $1/\\sqrt{n}$ est une approximation valable pour $n \\geq 30$.'
      ],
      piege: 'L\'intervalle de confiance ne garantit pas à 100% que $p$ est dedans, seulement à 95%. De plus, la formule $\\frac{1}{\\sqrt{n}}$ est une approximation valable pour $n\\ge 30$.'
    },
    quiz: [
      { q: 'Pour réduire la marge d\'erreur de $10\\%$ à $5\\%$, par combien faut-il multiplier la taille de l\'échantillon ?', options: ['$4$', '$2$', '$10$', '$\\sqrt{2}$'], answer: 0, correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $2$ exige que $\\sqrt{n}$ soit multiplié par $2$, donc $n$ multiplié par $4$. Exemple : $e=0{,}1 \\Rightarrow n=100$ ; $e=0{,}05 \\Rightarrow n=400$. Améliorer la précision d\'un facteur $2$ coûte $4$ fois plus de participants.' },
      { q: 'Doubler la taille de l\'échantillon réduit la marge d\'erreur d\'un facteur :', options: ['$2$', '$\\sqrt{2}$', '$4$', '$\\sqrt{2}/2$'], answer: 1, correction: '$e=1/\\sqrt{n}$. Si $n\\to 2n$ : $e\'=1/\\sqrt{2n}=e/\\sqrt{2}$. Réduction d\'un facteur $\\sqrt{2}\\approx 1{,}41$.' },
      { q: 'Un sondage sur $400$ personnes donne $f=0{,}6$. L\'intervalle de confiance à 95% est :', options: ['$[0{,}55;0{,}65]$', '$[0{,}59;0{,}61]$', '$[0{,}5;0{,}7]$', '$[0{,}56;0{,}64]$'], answer: 0, correction: '$e=1/\\sqrt{400}=0{,}05$. IC $=[0{,}6-0{,}05;0{,}6+0{,}05]=[0{,}55;0{,}65]$.' },
      { q: 'Un sondage donne $f = 0{,}52$ avec $n = 2500$. Peut-on affirmer que la vraie proportion $p$ est supérieure à $0{,}5$ (avec $95\\%$ de confiance) ?', options: ['Oui : l\'IC est $[0{,}50 ; 0{,}54]$, entièrement $\\geq 0{,}5$', 'Non : l\'IC contient des valeurs inférieures à $0{,}5$', 'Oui : $0{,}52 > 0{,}5$ suffit', 'Non : il faudrait $n > 10\\,000$'], answer: 0, correction: '$e = 1/\\sqrt{2500} = 0{,}02$. L\'IC est $[0{,}52 - 0{,}02 ; 0{,}52 + 0{,}02] = [0{,}50 ; 0{,}54]$. La borne inférieure est exactement $0{,}50$, donc on peut tout juste affirmer que $p \\geq 0{,}50$ à $95\\%$ de confiance. En pratique, c\'est à la limite — un échantillon plus grand serait recommandé.' },
      { q: 'Deux sondages donnent $f_1 = 0{,}48$ ($n_1 = 100$) et $f_2 = 0{,}52$ ($n_2 = 100$). Peut-on conclure que les deux populations sont différentes ?', options: ['Non : les IC se chevauchent largement ($[0{,}38;0{,}58]$ et $[0{,}42;0{,}62]$), donc on ne peut pas distinguer les proportions', 'Oui : $0{,}52 > 0{,}48$', 'Non : les deux intervalles sont identiques', 'Oui : les fréquences sont différentes'], answer: 0, correction: '$e = 1/\\sqrt{100} = 0{,}1$. IC$_1 = [0{,}38;0{,}58]$ et IC$_2 = [0{,}42;0{,}62]$. Les intervalles se chevauchent : on ne peut pas conclure que les vraies proportions sont différentes. Il faudrait un échantillon bien plus grand pour distinguer deux proportions aussi proches.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un sondage politique interroge', question: 'votants déclarant soutenir un candidat', unit: 'personnes' },
          { intro: 'Un contrôle qualité examine', question: 'pièces défectueuses trouvées dans l\'échantillon', unit: 'pièces' },
          { intro: 'Une enquête de satisfaction interroge', question: 'clients satisfaits du service', unit: 'clients' }
        ];
        const ctx = pick(contexts);
        const squares = [100, 225, 400, 625, 900];
        const n = pick(squares);
        const sqrtN = Math.sqrt(n);
        const fPercent = rand(30, 70);
        const f = fPercent / 100;
        const fav = Math.round(f * n);
        const fActual = parseFloat((fav / n).toFixed(4));
        const e = parseFloat((1 / sqrtN).toFixed(4));
        const bInf = parseFloat((fActual - e).toFixed(4));
        const bSup = parseFloat((fActual + e).toFixed(4));
        return {
          statement: `${ctx.intro} $n = ${n}$ ${ctx.unit}. On trouve $${fav}$ ${ctx.question}.<br/><br/><strong>1.</strong> Calculer la fréquence observée $f$.<br/><strong>2.</strong> Calculer la marge d'erreur $e = 1/\\sqrt{n}$.<br/><strong>3.</strong> Construire l'intervalle de confiance à $95\\%$ : $[f-e ; f+e]$.<br/><br/>Donne la <strong>borne supérieure</strong> de l'intervalle de confiance (arrondie à $0{,}01$).`,
          answer: parseFloat(bSup.toFixed(2)),
          tolerance: 0.02,
          unit: '',
          hint: `$f = \\frac{${fav}}{${n}} = ${fActual}$. Puis $e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${e}$.`,
          solution: [
            `$f = \\frac{${fav}}{${n}} = ${fActual}$`,
            `$e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${e}$`,
            `IC = $[${fActual} - ${e} ; ${fActual} + ${e}] = [${bInf} ; ${bSup}]$`,
            `On est sûr à $95\\%$ que la vraie proportion est entre $${fr(bInf*100, 1)}\\%$ et $${fr(bSup*100, 1)}\\%$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une usine produit des pièces. On vérifie un échantillon de $n=625$ pièces et on trouve $25$ pièces défectueuses.',
      tasks: [
        'Calculer la fréquence de pièces défectueuses dans l\'échantillon.',
        'Construire l\'intervalle de confiance à 95%.',
        'Peut-on affirmer que le taux de défauts est inférieur à 5% dans la production ?'
      ],
      solutions: [
        '$f=\\frac{25}{625}=0{,}04$.',
        '$e=\\frac{1}{\\sqrt{625}}=0{,}04$. IC $=[0;0{,}08]$.',
        'Non : l\'IC inclut des valeurs jusqu\'à $8\\%$, on ne peut pas garantir que $p < 5\\%$.'
      ],
      finalAnswer: '$f=4\\%$ ; IC $=[0\\%;8\\%]$ : le taux de défauts n\'est pas garanti inférieur à $5\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Échantillonnage et estimation',
      duration: '25 min',
      questions: [
        {
          statement: 'Calculer la marge d\'erreur $e$ pour un échantillon de taille $n = 400$.',
          type: 'numeric',
          answer: 0.05,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$e = \\dfrac{1}{\\sqrt{n}} = \\dfrac{1}{\\sqrt{400}} = \\dfrac{1}{20} = 0{,}05$.'
        },
        {
          statement: 'Un sondage sur $n = 900$ personnes donne une fréquence $f = 0{,}4$. Donner la borne supérieure de l\'intervalle de confiance à $95\\%$. (Arrondir à $0{,}01$.)',
          type: 'numeric',
          answer: 0.43,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$. Borne supérieure $= f + e = 0{,}4 + 0{,}033 \\approx 0{,}43$.'
        },
        {
          statement: 'Pour réduire la marge d\'erreur d\'un facteur $3$, par combien faut-il multiplier la taille de l\'échantillon ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $3$ exige $\\sqrt{n}$ multiplié par $3$, donc $n$ multiplié par $3^2 = 9$.'
        },
        {
          statement: 'Doubler la taille de l\'échantillon divise la marge d\'erreur par :',
          type: 'multiple-choice',
          options: ['$2$', '$4$', '$\\sqrt{2} \\approx 1{,}41$', '$\\sqrt{3}$'],
          answer: 2,
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Si $n$ est remplacé par $2n$ : $e\' = 1/\\sqrt{2n} = e/\\sqrt{2}$. La marge est divisée par $\\sqrt{2} \\approx 1{,}41$.'
        },
        {
          statement: 'L\'intervalle de confiance à $95\\%$ garantit-il à $100\\%$ que la vraie proportion est à l\'intérieur ?',
          type: 'multiple-choice',
          options: ['Oui, c\'est une certitude mathématique', 'Non, il y a $5\\%$ de risque que $p$ soit hors de l\'intervalle', 'Oui, si $n \\geq 30$', 'Non, seulement si l\'échantillon est biaisé'],
          answer: 1,
          points: 2,
          correction: 'L\'intervalle de confiance à $95\\%$ signifie que, si l\'on répétait l\'expérience un grand nombre de fois, $95\\%$ des intervalles construits contiendraient la vraie proportion $p$. Il y a donc $5\\%$ de risque que $p$ soit en dehors.'
        }
      ]
    }
  });
