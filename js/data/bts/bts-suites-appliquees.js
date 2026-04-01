/* =========================================================
   Spark Learning – data/bts/bts-suites-appliquees.js
   Module : Suites Appliquées (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-suites-appliquees',
    level: 3, subject: 'maths',
    icon: '💰',
    title: 'Suites numériques appliquées',
    subtitle: 'Amortissements, intérêts composés, annuités',
    keywords: ['Amortissement', 'Intérêts composés', 'Annuités', 'Capital', 'Emprunt'],
    physics: false,
    cours: {
      intro: 'Les intérêts composés ($C_n = C_0(1+t)^n$) et les intérêts simples ($C_n = C_0(1+nt)$) semblent proches à court terme, mais divergent considérablement sur longue durée : à $5\\%$ sur $30$ ans, les intérêts composés multiplient le capital par $4{,}32$ contre $2{,}5$ pour les simples. La différence vient de la "capitalisation" : en composés, les intérêts de chaque période produisent eux-mêmes des intérêts. En finance d\'entreprise BTS, les annuités (remboursements constants d\'un emprunt) combinent les deux : chaque versement $a$ couvre d\'abord les intérêts du solde restant, puis rembourse du capital. En début d\'emprunt, la part d\'intérêts est élevée et décroît à chaque annuité — c\'est pourquoi les premières mensualités remboursent peu de capital. La durée de doublement s\'approche par la "règle des 72" : $n \\approx 72/t\\%$ années.',
      definitions: [
        { term: 'Intérêts simples', def: 'Les intérêts sont calculés uniquement sur le capital initial : $C_n = C_0(1 + nt)$. C\'est une suite arithmétique de raison $C_0 \\times t$. Utilisés pour les placements courts (< 1 an).' },
        { term: 'Intérêts composés', def: 'Les intérêts sont capitalisés à chaque période : $C_n = C_0(1+t)^n$. C\'est une suite géométrique de raison $q = 1+t$. Standard pour les emprunts et placements longs.' },
        { term: 'Annuité constante $a$', def: 'Versement périodique fixe pour rembourser un emprunt. Formule : $a = C_0 \\times \\frac{t}{1-(1+t)^{-n}}$. Chaque annuité contient une part d\'intérêts (décroissante) et une part de capital (croissante).' },
        { term: 'Valeur acquise', def: 'Capital accumulé après $n$ versements réguliers de $a$ : $V_n = a \\times \\frac{(1+t)^n - 1}{t}$. C\'est la somme d\'une suite géométrique.' }
      ],
      method: {
        title: 'Calculs financiers avec les suites',
        steps: [
          'Intérêts composés : $C_n = C_0\\times(1+t)^n$ (suite géométrique de raison $q=1+t$). <strong>Exemple :</strong> $C_0 = 5000$ €, $t = 3\\%$, $n = 4$ ans → $C_4 = 5000 \\times 1{,}03^4 = 5000 \\times 1{,}1255 \\approx 5628$ €.',
          'Annuités constantes (emprunt) : somme des valeurs actualisées = capital emprunté. <strong>Exemple :</strong> Emprunt $10000$ € à $5\\%$ sur $3$ ans → $a = 10000 \\times \\frac{0{,}05}{1-1{,}05^{-3}} = 10000 \\times \\frac{0{,}05}{0{,}1426} \\approx 3672$ €/an.',
          'Amortissement constant : remboursement $=$ capital $/$ durée, intérêts dégressifs. <strong>Exemple :</strong> $10000$ € sur $4$ ans → amortissement $= 2500$ €/an. An 1 : intérêts $= 10000 \\times 0{,}05 = 500$ €, versement $= 3000$ €.',
          'Valeur acquise par $n$ versements $a$ : $V=a\\times\\dfrac{(1+t)^n-1}{t}$. <strong>Exemple :</strong> $a = 100$ €/mois ($1200$ €/an), $t = 4\\%$, $n = 10$ ans → $V = 1200 \\times \\frac{1{,}04^{10}-1}{0{,}04} \\approx 14400$ €.'
        ]
      },
      example: {
        statement: 'Un salarié épargne $200$ € par mois (soit $2400$ €/an) pendant $20$ ans sur un plan d\'épargne entreprise à $3{,}5\\%$ annuel. Quel capital aura-t-il accumulé ? Combien aura-t-il versé au total et combien les intérêts composés lui rapportent-ils ?',
        steps: [
          'Annuité : $a = 2400$ €/an, taux $t = 0{,}035$, durée $n = 20$ ans.',
          'Valeur acquise : $V = a \\times \\frac{(1+t)^n - 1}{t} = 2400 \\times \\frac{1{,}035^{20} - 1}{0{,}035}$.',
          '$1{,}035^{20} \\approx 1{,}9898$. Donc $V = 2400 \\times \\frac{0{,}9898}{0{,}035} = 2400 \\times 28{,}28 \\approx 67\\,872$ €.',
          'Total versé : $2400 \\times 20 = 48\\,000$ €.',
          'Gain dû aux intérêts composés : $67\\,872 - 48\\,000 = 19\\,872$ €, soit $41\\%$ de gain supplémentaire.'
        ],
        answer: 'Capital accumulé : $\\approx 67\\,872$ €. Versé : $48\\,000$ €. Les intérêts composés rapportent $\\approx 19\\,872$ € de plus, soit $+41\\%$ grâce à la capitalisation.'
      },
      formulas: [
        '$C_n = C_0(1+t)^n$',
        '$V_n = a\\cdot\\dfrac{(1+t)^n-1}{t}$ (valeur acquise d\'annuités)',
        '$C_0 = a\\cdot\\dfrac{1-(1+t)^{-n}}{t}$ (capital = valeur actuelle d\'annuités)',
        'Durée : $n = \\dfrac{\\ln(C_n/C_0)}{\\ln(1+t)}$'
      ],
      recap: [
        'Intérêts simples = suite arithmétique ($C_0(1+nt)$). Intérêts composés = suite géométrique ($C_0(1+t)^n$).',
        'La règle des 72 : le capital double en $\\approx 72/t\\%$ années (ex. : $72/6 = 12$ ans à $6\\%$).',
        'Annuité constante : chaque versement contient une part d\'intérêts (décroissante) et une part de capital (croissante).',
        'Sur longue durée, la capitalisation fait une énorme différence : à $5\\%$ sur $30$ ans, composés donnent $4{,}32 \\times C_0$ contre $2{,}5 \\times C_0$ en simples.'
      ],
      piege: 'Ne pas confondre intérêts simples ($C_0(1+nt)$) et intérêts composés ($C_0(1+t)^n$). Sur longue période, la différence est considérable.'
    },
    quiz: [
      { q: 'Un capital de $10\\,000$ € est placé à $5\\%$ par an pendant $10$ ans. En intérêts simples : $10\\,000+10\\,000\\times0{,}05\\times10=15\\,000$ €. La banque annonce $16\\,289$ €. Qui a raison ?', options: ['La banque : intérêts composés $10000\\times1{,}05^{10}\\approx16\\,289$ €. Les intérêts simples ne capitalisent pas les intérêts', 'L\'étudiant : les intérêts simples donnent bien $15\\,000$ € (la banque ajoute des frais)', 'Les deux selon le contrat : bancaire ou livret', 'Ni l\'un ni l\'autre : avec l\'inflation, la valeur réelle est différente'], answer: 0, correction: 'En intérêts composés, les intérêts de chaque période s\'ajoutent au capital et génèrent eux-mêmes des intérêts. $1{,}05^{10}\\approx1{,}6289$ : le capital est multiplié par $1{,}629$ (pas $1{,}5$). La différence ($16\\,289-15\\,000=1\\,289$ €) représente les "intérêts sur intérêts". Sur $30$ ans à $5\\%$, la différence explose : $43\\,219$ € (composés) vs $25\\,000$ € (simples).' },
      { q: 'La durée de doublement d\'un capital à taux $t$ est :', options: ['$2/t$', '$\\ln2/\\ln(1+t)$', '$t/\\ln2$', '$1/(2t)$'], answer: 1, correction: '$(1+t)^n=2 \\Rightarrow n=\\frac{\\ln2}{\\ln(1+t)}$. Approximation : $n\\approx\\frac{0{,}693}{t}$.' },
      { q: 'Un emprunt de $10000$ € à $4\\%$ sur $5$ ans. L\'annuité constante $a$ vérifie :', options: ['$a=10000/5$', '$a=10000\\times\\frac{0{,}04}{1-1{,}04^{-5}}$', '$a=10000\\times0{,}04$', '$a=10000\\times1{,}04^5$'], answer: 1, correction: 'Formule de l\'annuité : $a=C_0\\times\\frac{t}{1-(1+t)^{-n}}$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const C0 = rand(1, 5) * 1000, t = pick([0.02, 0.03, 0.04, 0.05]), n = rand(2, 4);
        const Cn = parseFloat((C0 * Math.pow(1+t, n)).toFixed(2));
        return {
          statement: `Un capital de $${C0}$ € est placé à $${t*100}\\%$ par an (intérêts composés). Quelle est sa valeur après $${n}$ ans ? (Arrondir à l'euro)`,
          answer: Math.round(Cn),
          tolerance: 1,
          unit: '€',
          hint: `$C_${n}=${C0}\\times(1+${t})^{${n}}$`,
          solution: [`$C_{${n}}=${C0}\\times${(1+t).toFixed(2)}^{${n}}\\approx${Cn}$ €`]
        };
      }
    },
    probleme: {
      context: 'Une entreprise emprunte $50\\,000$ € à $3\\%$ par an, remboursable par annuités constantes sur $10$ ans.',
      tasks: [
        'Calculer l\'annuité constante $a$.',
        'Calculer le coût total de l\'emprunt.',
        'Calculer la part d\'intérêts dans la première annuité.'
      ],
      solutions: [
        '$a=50000\\times\\frac{0{,}03}{1-1{,}03^{-10}}=50000\\times\\frac{0{,}03}{1-0{,}7441}=50000\\times\\frac{0{,}03}{0{,}2559}\\approx5863$ €.',
        'Coût total $=10\\times5863=58630$ €. Coût du crédit $=58630-50000=8630$ €.',
        'Intérêts 1re année $=50000\\times0{,}03=1500$ €. Remboursement capital $=5863-1500=4363$ €.'
      ],
      finalAnswer: 'Annuité $\\approx5863$ €. Coût du crédit $\\approx8630$ €. 1re annuité : $1500$ € d\'intérêts.'
    },

    evaluation: {
      title: 'Évaluation — Suites numériques appliquées',
      duration: '40 min',
      questions: [
        {
          statement: 'Un capital de $8\\,000$ € est placé à $4\\%$ par an en intérêts composés. Calculer sa valeur après $3$ ans (arrondir à l\'euro).',
          type: 'numeric',
          answer: 8998,
          tolerance: 1,
          unit: '€',
          points: 2,
          correction: '$C_3 = 8000 \\times 1{,}04^3 = 8000 \\times 1{,}124864 = 8\\,998{,}91 \\approx 8\\,999$ €.'
        },
        {
          statement: 'La durée nécessaire pour doubler un capital placé à un taux annuel $t$ est donnée par :',
          type: 'multiple-choice',
          options: ['$n = \\dfrac{2}{t}$', '$n = \\dfrac{\\ln 2}{\\ln(1+t)}$', '$n = \\dfrac{1}{2t}$', '$n = \\dfrac{t}{\\ln 2}$'],
          answer: 1,
          points: 2,
          correction: '$(1+t)^n = 2 \\Rightarrow n\\ln(1+t) = \\ln 2 \\Rightarrow n = \\dfrac{\\ln 2}{\\ln(1+t)}$. La règle des 72 donne l\'approximation $n \\approx 72/t\\%$.'
        },
        {
          statement: 'Un emprunt de $20\\,000$ € est remboursé à $5\\%$ par an sur $4$ ans par annuités constantes. L\'annuité $a$ vérifie $a = C_0 \\times \\dfrac{t}{1-(1+t)^{-n}}$. Calculer $a$ (arrondir à l\'euro).',
          type: 'numeric',
          answer: 5640,
          tolerance: 5,
          unit: '€',
          points: 3,
          correction: '$a = 20000 \\times \\dfrac{0{,}05}{1 - 1{,}05^{-4}} = 20000 \\times \\dfrac{0{,}05}{1 - 0{,}8227} = 20000 \\times \\dfrac{0{,}05}{0{,}1773} \\approx 20000 \\times 0{,}2820 \\approx 5\\,640$ €.'
        },
        {
          statement: 'On place $500$ € chaque année pendant $5$ ans à $3\\%$ annuel. La valeur acquise est $V = a \\times \\dfrac{(1+t)^n - 1}{t}$. Calculer $V$ (arrondir à l\'euro).',
          type: 'numeric',
          answer: 2655,
          tolerance: 5,
          unit: '€',
          points: 2,
          correction: '$V = 500 \\times \\dfrac{1{,}03^5 - 1}{0{,}03} = 500 \\times \\dfrac{1{,}1593 - 1}{0{,}03} = 500 \\times \\dfrac{0{,}1593}{0{,}03} = 500 \\times 5{,}3091 \\approx 2\\,655$ €.'
        },
        {
          statement: 'La différence entre intérêts simples et intérêts composés sur $10$ ans :',
          type: 'multiple-choice',
          options: ['Est nulle : les deux formules donnent le même résultat', 'Provient des intérêts sur les intérêts (capitalisation)', 'Provient de l\'inflation', 'N\'existe que pour des taux supérieurs à $10\\%$'],
          answer: 1,
          points: 1,
          correction: 'En intérêts composés, les intérêts de chaque période sont ajoutés au capital et produisent eux-mêmes des intérêts : c\'est la capitalisation. La différence croît exponentiellement avec la durée. Exemple : $10\\,000$ € à $5\\%$ sur $10$ ans → simples : $15\\,000$ €, composés : $16\\,289$ €.'
        }
      ]
    }
);
