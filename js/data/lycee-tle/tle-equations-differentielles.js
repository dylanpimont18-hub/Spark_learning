/* =========================================================
   Spark Learning – data/lycee-tle/tle-equations-differentielles.js
   Extrait de lycee-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'tle-equations-differentielles',
    level: 2, subject: 'maths',
    icon: '🌊',
    title: 'Équations Différentielles du 1er Ordre',
    subtitle: 'Constante de temps τ, régime transitoire',
    keywords: ['Équation différentielle', 'Constante de temps τ', 'Régime transitoire', 'Circuit RC'],
    physics: 'Charge condensateur RC, chute libre avec frottements',

    cours: {
      intro: 'Une <strong>équation différentielle</strong> relie une grandeur à sa propre dérivée.<br/><br/>Dès que la vitesse de variation d\'une grandeur est proportionnelle à son écart à une valeur cible, on obtient $\\tau \\frac{dy}{dt} + y = y_\\infty$ dont la solution est toujours exponentielle : $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$.<br/><br/>La <strong>constante de temps</strong> $\\tau$ (tau) est l\'empreinte temporelle du système : à $t = \\tau$, la grandeur a parcouru $63{,}2\\%$ du chemin vers $y_\\infty$ — ce n\'est PAS le temps de chargement total.<br/><br/>En pratique, on considère le régime permanent atteint à $5\\tau$ (moins de $1\\%$ d\'écart).<br/><br/>Dans un circuit RC : $\\tau = RC$. Plus $R$ ou $C$ est grand, plus le <strong>transitoire</strong> est lent.',
      definitions: [
        { term: 'Équation différentielle', def: 'Équation reliant une fonction inconnue $y(t)$ à sa dérivée $y\'(t)$ (et éventuellement ses dérivées d\'ordres supérieurs). L\'ordre de l\'ED est celui de la plus haute dérivée présente.' },
        { term: 'Constante de temps $\\tau$', def: 'Paramètre qui caractérise la rapidité de la réponse du système. À $t = \\tau$, la grandeur a atteint $63{,}2\\%$ de sa valeur finale. Le régime permanent est considéré atteint à $5\\tau$.' },
        { term: 'Régime transitoire', def: 'Phase pendant laquelle le système évolue depuis sa condition initiale vers sa valeur d\'équilibre. La durée du transitoire est d\'environ $5\\tau$.' },
        { term: 'Régime permanent', def: 'État atteint quand le transitoire est terminé : la grandeur ne varie plus (ou de manière négligeable). $y(t) \\approx y_\\infty$ pour $t \\gg \\tau$.' }
      ],
      method: {
        title: 'Méthode de résolution',
        steps: [
          '<strong>Forme canonique</strong> : écrire sous $\\tau \\dfrac{dy}{dt} + y = y_{\\infty}$ où $\\tau$ est la constante de temps et $y_{\\infty}$ la valeur en régime permanent.',
          '<strong>Solution générale</strong> : $y(t) = y_{\\infty} + (y_0 - y_{\\infty}) e^{-t/\\tau}$ où $y_0 = y(0)$ est la condition initiale.',
          '<strong>Paramètres physiques</strong> : circuit RC, $\\tau = RC$ ; charge depuis $U_0 = 0$ : $U_C(t) = E(1 - e^{-t/\\tau})$.'
        ]
      },
      example: {
        statement: 'Un circuit RC avec $R = 5$ kΩ et $C = 200$ μF est alimenté par un générateur $E = 12$ V. Le condensateur est initialement déchargé. Calculer $U_C$ à $t = 2$ s.',
        steps: [
          'Calcul de la constante de temps : $\\tau = RC = 5 \\times 10^3 \\times 200 \\times 10^{-6} = 1$ s.',
          'Expression de $U_C(t)$ : $U_C(t) = E(1 - e^{-t/\\tau}) = 12(1 - e^{-t})$.',
          'À $t = 2$ s : $U_C(2) = 12(1 - e^{-2}) = 12(1 - 0{,}1353) = 12 \\times 0{,}8647$.',
          '$U_C(2) \\approx 10{,}38$ V.'
        ],
        answer: '$U_C(2) \\approx 10{,}38$ V. Après $2\\tau$, le condensateur a atteint $86{,}5\\%$ de la tension finale $E$.'
      },
      formulas: [
        '$\\tau \\dfrac{dU_C}{dt} + U_C = E$ (circuit RC en charge)',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ (solution en charge)',
        '$\\tau = R \\times C$ (circuit RC)',
        'À $t = \\tau$ : $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 E$'
      ],
      recap: [
        'L\'équation $\\tau y\' + y = y_\\infty$ a pour solution $y(t) = y_\\infty + (y_0 - y_\\infty)e^{-t/\\tau}$ : exponentielle décroissante vers $y_\\infty$.',
        'La constante de temps $\\tau$ fixe la rapidité du transitoire : à $\\tau$, on est à $63{,}2\\%$ ; à $5\\tau$, à $99{,}3\\%$.',
        'Dans un circuit RC : $\\tau = RC$. Les unités $\\Omega \\times F = s$ donnent bien un temps.',
        'Deux cas classiques : charge ($U_C(0) = 0 \\to E$) et décharge ($U_C(0) = E \\to 0$). La décharge suit $U_C(t) = E \\cdot e^{-t/\\tau}$.'
      ],
      piege: 'Le régime permanent est atteint théoriquement à l\'infini.<br/><br/>En pratique, on considère qu\'après $5\\tau$, le transitoire est terminé ($U_C \\approx 0{,}993E$).<br/><br/>Ne pas confondre $\\tau$ (constante de temps en secondes) et la "durée du transitoire" ($5\\tau$).'
    },

    quiz: [
      {
        q: 'Dans un circuit RC série avec $R = 10$ kΩ et $C = 100$ μF, la constante de temps est :',
        options: ['$\\tau = 1$ ms', '$\\tau = 0{,}1$ s', '$\\tau = 1$ s', '$\\tau = 10$ s'],
        answer: 2,
        correction: 'On applique la formule $\\tau = RC$ en convertissant les unités :<br/><br/>$\\tau = RC = 10 \\times 10^3 \\times 100 \\times 10^{-6} = 10^4 \\times 10^{-4} = 1$ s.'
      },
      {
        q: 'Lors de la charge d\'un condensateur via $RC$, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
        options: ['$0{,}5 E$', '$0{,}632 E$', '$0{,}865 E$', '$E$'],
        answer: 1,
        correction: '$U_C(\\tau) = E(1 - e^{-1}) = E(1 - 0{,}368) = 0{,}632 E$.<br/><br/>La valeur $63{,}2\\%$ est fondamentale : elle permet d\'identifier $\\tau$ expérimentalement sur une courbe de charge.'
      },
      {
        q: 'Un élève dit : "La constante de temps $\\tau = RC$ est le temps nécessaire pour charger complètement le condensateur." Est-il correct ?',
        options: [
          'Non : $\\tau$ est le temps pour atteindre $63{,}2\\%$ de la tension finale. Le chargement "complet" est à $5\\tau$ (pratiquement) ou à l\'infini (théoriquement)',
          'Oui : à $t = \\tau$, $U_C = E$ exactement',
          'Oui : après $\\tau$ secondes, le condensateur est chargé à $100\\%$',
          'Non : $\\tau$ est le temps pour atteindre $50\\%$ de $E$ (demi-vie du circuit)'
        ],
        answer: 0,
        correction: 'À $t = \\tau$, $U_C(\\tau) = E(1-e^{-1}) \\approx 0{,}632\\,E$ soit $63{,}2\\%$ seulement.<br/><br/>La charge n\'atteint théoriquement $E$ qu\'à $t \\to +\\infty$. Par convention, on dit que le régime permanent est atteint à $5\\tau$ car $e^{-5} \\approx 0{,}007$, soit moins de $1\\%$ d\'écart.<br/><br/>L\'option D décrirait la demi-vie radioactive ($50\\%$), pas un circuit RC.'
      },
      {
        q: 'Lors de la DÉCHARGE d\'un condensateur initialement chargé à $E$, l\'expression de $U_C(t)$ est :',
        options: [
          '$U_C(t) = E \\cdot e^{-t/\\tau}$',
          '$U_C(t) = E(1 - e^{-t/\\tau})$',
          '$U_C(t) = E \\cdot e^{t/\\tau}$',
          '$U_C(t) = E(1 + e^{-t/\\tau})$'
        ],
        answer: 0,
        correction: 'En décharge, la valeur finale est $y_\\infty = 0$ et la valeur initiale est $y_0 = E$.<br/><br/>En substituant dans la solution générale : $U_C(t) = 0 + (E - 0)e^{-t/\\tau} = E \\cdot e^{-t/\\tau}$.<br/><br/>La tension décroît exponentiellement vers $0$.'
      },
      {
        q: 'On double la résistance $R$ dans un circuit RC. Quel est l\'effet sur $\\tau$ ?',
        options: [
          '$\\tau$ est divisé par $2$',
          '$\\tau$ est multiplié par $2$',
          '$\\tau$ reste inchangé',
          '$\\tau$ est multiplié par $4$'
        ],
        answer: 1,
        correction: '$\\tau = RC$. Si $R$ est doublée, $\\tau\' = 2R \\times C = 2\\tau$.<br/><br/>Le transitoire dure deux fois plus longtemps : le condensateur se charge plus lentement. C\'est logique car une résistance plus grande limite le courant de charge.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { nom: 'un circuit de temporisation pour une alarme', R: rand(2, 8), C: rand(100, 500) },
          { nom: 'le système de charge d\'un flash d\'appareil photo', R: rand(1, 5), C: rand(200, 800) },
          { nom: 'un capteur de température avec filtre RC', R: rand(3, 10), C: rand(50, 300) },
          { nom: 'un circuit de protection contre les surtensions', R: rand(1, 6), C: rand(100, 600) }
        ]);
        const E = rand(5, 15);
        const tau_s = parseFloat((ctx.R * 1e3 * ctx.C * 1e-6).toFixed(3));
        const UC_tau = parseFloat((E * (1 - Math.exp(-1))).toFixed(2));
        return {
          statement: `On réalise ${ctx.nom} avec $R = ${ctx.R}$ kΩ, $C = ${ctx.C}$ μF et $E = ${E}$ V. Calcule la tension $U_C(\\tau)$ aux bornes du condensateur au bout d'une constante de temps. Arrondir à $0{,}01$ V.`,
          answer: UC_tau,
          tolerance: 0.05,
          unit: 'V',
          hint: `D'abord, rappelle-toi qu'à $t = \\tau$, $U_C(\\tau) = E(1 - e^{-1}) \\approx 0{,}632 \\times E$. Ici $E = ${E}$ V.`,
          solution: [
            `$\\tau = RC = ${ctx.R} \\times 10^3 \\times ${ctx.C} \\times 10^{-6} = ${tau_s}$ s`,
            `$U_C(\\tau) = E(1 - e^{-1}) = ${E} \\times 0{,}6321$`,
            `$U_C(\\tau) \\approx ${UC_tau}$ V`
          ]
        };
      }
    },

    probleme: {
      context: 'Un condensateur de capacité $C = 470$ μF est chargé à travers une résistance $R = 2{,}2$ kΩ par un générateur de f.e.m. $E = 9$ V. Le condensateur est initialement déchargé ($U_C(0) = 0$).',
      schema: null,
      tasks: [
        'Calculer la constante de temps $\\tau = RC$.',
        'Exprimer la tension $U_C(t)$ au cours du temps.',
        'Quelle est la tension aux bornes du condensateur à $t = \\tau$ ? Arrondir à 3 chiffres significatifs.'
      ],
      solutions: [
        '$\\tau = RC = 2{,}2 \\times 10^3 \\times 470 \\times 10^{-6} = 2200 \\times 470 \\times 10^{-6} = 1{,}034$ s $\\approx 1{,}03$ s.',
        '$U_C(t) = E\\left(1 - e^{-t/\\tau}\\right) = 9\\left(1 - e^{-t/1{,}03}\\right)$ V.',
        '$U_C(\\tau) = 9 \\times (1 - e^{-1}) = 9 \\times 0{,}6321 = 5{,}69$ V $\\approx 5{,}69$ V.'
      ],
      finalAnswer: '$U_C(\\tau) \\approx 5{,}69$ V (soit $63{,}2\\%$ de $E = 9$ V)'
    },

    evaluation: {
      title: 'Évaluation — Équations différentielles du 1er ordre',
      duration: '35 min',
      questions: [
        {
          statement: 'Un circuit RC a $R = 4{,}7$ kΩ et $C = 220$ μF. Calculer $\\tau$ en secondes. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 1.03,
          tolerance: 0.02,
          unit: 's',
          points: 2,
          correction: 'On convertit les unités et on applique $\\tau = RC$ :<br/><br/>$\\tau = 4{,}7 \\times 10^3 \\times 220 \\times 10^{-6} = 4700 \\times 0{,}000220 = 1{,}034$ s $\\approx 1{,}03$ s.'
        },
        {
          statement: 'Dans un circuit RC en charge, à $t = \\tau$, la tension aux bornes du condensateur vaut environ :',
          type: 'multiple-choice',
          options: ['$50\\%$ de $E$', '$63{,}2\\%$ de $E$', '$86{,}5\\%$ de $E$', '$99{,}3\\%$ de $E$'],
          answer: 1,
          points: 2,
          correction: '$U_C(\\tau) = E(1 - e^{-1}) = E \\times (1 - 0{,}368) = 0{,}632 E$, soit $63{,}2\\%$ de $E$.<br/><br/>Cette valeur caractéristique permet de retrouver $\\tau$ sur un graphe expérimental.'
        },
        {
          statement: 'Un condensateur est chargé par $E = 12$ V avec $\\tau = 2$ s. Calculer $U_C(2)$ en V. Arrondir à $0{,}1$.',
          type: 'numeric',
          answer: 7.6,
          tolerance: 0.1,
          unit: 'V',
          points: 2,
          correction: 'Ici $t = 2 = \\tau$, donc on est exactement à une constante de temps.<br/><br/>$U_C(\\tau) = E(1 - e^{-1}) = 12 \\times 0{,}6321 = 7{,}6$ V.'
        },
        {
          statement: 'On considère le régime permanent comme atteint après :',
          type: 'multiple-choice',
          options: ['$\\tau$', '$2\\tau$', '$3\\tau$', '$5\\tau$'],
          answer: 3,
          points: 2,
          correction: 'Après $5\\tau$, $U_C = E(1 - e^{-5}) \\approx E \\times 0{,}993$, soit moins de $1\\%$ d\'écart avec $E$.<br/><br/>Par convention, le <strong>régime permanent</strong> est considéré comme atteint à $5\\tau$.'
        },
        {
          statement: 'La solution de $\\tau \\dfrac{dy}{dt} + y = 5$ avec $y(0) = 0$ et $\\tau = 3$ est $y(t) = 5(1 - e^{-t/3})$. Calculer $y(3)$. Arrondir à $0{,}01$.',
          type: 'numeric',
          answer: 3.16,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: 'On substitue $t = 3$ dans la solution : $y(3) = 5(1 - e^{-3/3}) = 5(1 - e^{-1})$.<br/><br/>$y(3) = 5 \\times 0{,}6321 = 3{,}16$. On retrouve le fameux $63{,}2\\%$ de la valeur finale.'
        }
      ]
    }
  });
