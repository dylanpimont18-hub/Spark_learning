/* =========================================================
   Spark Learning – data/lycee-1re/1re-information-chiffree.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-information-chiffree',
    level: 2, subject: 'maths',
    icon: '💹',
    title: 'Information chiffrée',
    subtitle: 'Pourcentages, évolutions, indices',
    keywords: ['Pourcentage', 'Évolution', 'Taux', 'Indice', 'Coefficient multiplicateur'],
    physics: false,
    cours: {
      intro: 'L\'information chiffrée quantifie les évolutions avec un outil central : le <strong>coefficient multiplicateur</strong> (CM). Une hausse de $t\\%$ correspond à $CM = 1 + t/100$ ; une baisse de $t\\%$ à $CM = 1 - t/100$.<br/><br/>L\'avantage du CM : les <strong>évolutions successives</strong> se composent par multiplication des CM, pas par addition des taux (erreur classique).<br/><br/>Pour retrouver un prix initial après une hausse, il faut <strong>diviser par le CM</strong> — et non soustraire le pourcentage du prix final.<br/><br/>Exemple : $120$ € après $+25\\%$ vient d\'un prix initial de $120/1{,}25 = 96$ €, et non $120 - 30 = 90$ € (appliquer $25\\%$ au prix final est faux car la base de référence a changé).',
      definitions: [
        { term: 'Taux d\'évolution', def: 'Le <strong>taux d\'évolution</strong> entre une valeur initiale $V_i$ et une valeur finale $V_f$ est $t = \\dfrac{V_f - V_i}{V_i}$. Il s\'exprime en décimal ou en pourcentage.' },
        { term: 'Coefficient multiplicateur', def: 'Le <strong>coefficient multiplicateur</strong> (CM) est $1 + t$ (avec $t$ en décimal). On a $V_f = V_i \\times CM$. Hausse de $20\\%$ : $CM = 1{,}2$ ; baisse de $15\\%$ : $CM = 0{,}85$.' },
        { term: 'Évolutions successives', def: 'Pour des évolutions successives, on <strong>multiplie</strong> les CM : $CM_{\\text{global}} = CM_1 \\times CM_2 \\times \\cdots$ Attention : on n\'additionne <strong>jamais</strong> les taux !' },
        { term: 'Taux réciproque', def: 'Le <strong>taux réciproque</strong> est celui qui ramène au prix initial : $CM_{\\text{réciproque}} = \\dfrac{1}{CM}$. Après $+25\\%$ ($CM = 1{,}25$), il faut une baisse de $1 - 1/1{,}25 = 20\\%$.' }
      ],
      method: {
        title: 'Calculer un taux d\'évolution',
        steps: [
          'Taux d\'évolution : $t = \\dfrac{V_{final} - V_{initial}}{V_{initial}}$.',
          'Coefficient multiplicateur : $CM = 1 + t$ (si $t$ en décimal).',
          'Évolutions successives : multiplier les CM ($CM_{total} = CM_1 \\times CM_2$).',
          'Taux réciproque : $t_{reciproque} = \\dfrac{1}{CM}-1$.'
        ]
      },
      formulas: [
        '$t = \\dfrac{V_f - V_i}{V_i}$',
        '$CM = 1 + t$',
        '$CM_{total} = CM_1 \\times CM_2 \\times \\cdots$',
        'Taux réciproque : $CM_{reciproque} = \\dfrac{1}{CM}$'
      ],
      piege: 'Une hausse de $20\\%$ puis une baisse de $20\\%$ ne revient <strong>pas</strong> au point de départ !<br/><br/>En effet : $CM = 1{,}2 \\times 0{,}8 = 0{,}96$, soit une baisse globale de $4\\%$. Les taux ne s\'additionnent pas, les CM se multiplient.'
    },
    quiz: [
      { q: 'Un article vaut $120$ € après une hausse de $25\\%$. Un élève calcule le prix initial ainsi : $120 - 25\\% \\times 120 = 120 - 30 = 90$ €. Quelle est son erreur ?', options: ['Il a soustrait $25\\%$ du prix FINAL ; il faut diviser par le CM : $V_i = 120 \\div 1{,}25 = 96$ €', 'L\'élève a raison, le prix initial est bien $90$ €', 'Il fallait utiliser le taux réciproque : $120 \\times 0{,}75 = 90$ €', '$25\\%$ de $120 = 30$ donc $120 - 30 = 90$ est correct'], answer: 0, correction: 'Pour retrouver le prix initial APRÈS une hausse de $25\\%$, il faut diviser par le CM $= 1{,}25$ : $V_i = 120 / 1{,}25 = 96$ €. L\'erreur de l\'élève : il applique $25\\%$ au prix FINAL ($120$ €) alors que la hausse de $25\\%$ avait été calculée sur le prix INITIAL. Vérification : $96 \\times 1{,}25 = 120$ ✓ — et non $90 \\times 1{,}25 = 112{,}5 \\neq 120$.' },
      { q: 'Un article coûte $80$ € après une baisse de $20\\%$. Son prix initial était :', options: ['$64$ €', '$96$ €', '$100$ €', '$104$ €'], answer: 2, correction: '$80 = V_i \\times 0{,}8 \\Rightarrow V_i = 80/0{,}8 = 100$ €.' },
      { q: 'Hausse de $10\\%$ puis baisse de $10\\%$ : taux global ?', options: ['$0\\%$', '$-1\\%$', '$+1\\%$', '$-0{,}1\\%$'], answer: 1, correction: '$CM=1{,}1\\times0{,}9=0{,}99$ : baisse de $1\\%$.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const vi = rand(50, 200) * 2;
        const tp = rand(5, 30);
        const vf = vi * (1 + tp/100);
        return {
          statement: `Un produit coûte $${vi}$ €. Son prix augmente de $${tp}\\%$. Quel est le nouveau prix ?`,
          answer: vf,
          tolerance: 0.01,
          unit: '€',
          hint: `Multiplier par $CM = 1 + \\frac{${tp}}{100} = ${1+tp/100}$.`,
          solution: [`$V_f = ${vi} \\times ${1+tp/100} = ${vf}$ €`]
        };
      }
    },
    probleme: {
      context: 'Le chiffre d\'affaires d\'une entreprise était de $500\\,000$ € en 2020. Il a augmenté de $8\\%$ en 2021, puis baissé de $5\\%$ en 2022.',
      tasks: [
        'Calculer le chiffre d\'affaires en 2021 et en 2022.',
        'Calculer le coefficient multiplicateur global sur les deux années.',
        'Calculer le taux d\'évolution global entre 2020 et 2022.'
      ],
      solutions: [
        '$CA_{2021}=500000\\times1{,}08=540000$ € ; $CA_{2022}=540000\\times0{,}95=513000$ €.',
        '$CM=1{,}08\\times0{,}95=1{,}026$.',
        '$t=(1{,}026-1)\\times100=+2{,}6\\%$.'
      ],
      finalAnswer: '$CA_{2022}=513\\,000$ €. Évolution globale : $+2{,}6\\%$ sur deux ans.'
    },

    evaluation: {
      title: 'Évaluation — Information chiffrée',
      duration: '30 min',
      questions: [
        {
          statement: 'Un article coûte $250$ € et subit une hausse de $12\\%$. Calculer le nouveau prix.',
          type: 'numeric',
          answer: 280,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$V_f = 250 \\times 1{,}12 = 280$ €.'
        },
        {
          statement: 'Un produit coûte $180$ € après une baisse de $10\\%$. Quel était son prix initial ?',
          type: 'numeric',
          answer: 200,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: '$180 = V_i \\times 0{,}9$, donc $V_i = \\dfrac{180}{0{,}9} = 200$ €.'
        },
        {
          statement: 'Un prix augmente de $20\\%$ puis diminue de $15\\%$. Le coefficient multiplicateur global est :',
          type: 'numeric',
          answer: 1.02,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: '$CM = 1{,}20 \\times 0{,}85 = 1{,}02$. Cela correspond à une hausse globale de $2\\%$.'
        },
        {
          statement: 'Le loyer d\'un appartement passe de $800$ € à $856$ €. Quel est le taux d\'évolution ?',
          type: 'numeric',
          answer: 7,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$t = \\dfrac{856 - 800}{800} = \\dfrac{56}{800} = 0{,}07 = 7\\%$.'
        },
        {
          statement: 'Après deux augmentations successives de $10\\%$ chacune, le taux global d\'augmentation est :',
          type: 'multiple-choice',
          options: ['$20\\%$', '$21\\%$', '$22\\%$', '$10\\%$'],
          answer: 1,
          points: 2,
          correction: '$CM = 1{,}1 \\times 1{,}1 = 1{,}21$. Le taux global est $1{,}21 - 1 = 0{,}21 = 21\\%$. Ce n\'est PAS $10\\% + 10\\% = 20\\%$ car les évolutions se composent par multiplication des CM, pas par addition des taux.'
        }
      ]
    }
  });
