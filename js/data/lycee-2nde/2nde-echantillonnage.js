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
            `On est sûr à $95\\%$ que la vraie proportion est entre $${(bInf*100).toFixed(1)}\\%$ et $${(bSup*100).toFixed(1)}\\%$.`
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
