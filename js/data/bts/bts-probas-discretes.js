/* =========================================================
   Spark Learning – data/bts/bts-probas-discretes.js
   Module : Probabilités Discrètes (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-probas-discretes',
    level: 3, subject: 'maths',
    icon: '🎲',
    title: 'Lois de probabilité discrètes',
    subtitle: 'Loi binomiale et loi de Poisson',
    keywords: ['Loi binomiale', 'Loi de Poisson', 'Espérance', 'Variance', 'Processus aléatoire'],
    physics: 'Fiabilité et contrôle qualité : taux de défauts, pannes machines, événements rares',
    cours: {
      intro: 'En BTS, les lois discrètes modélisent les défauts de production, les pannes, les demandes clients.<br/><br/>La loi binomiale $\\mathcal{B}(n,p)$ compte les succès en $n$ essais indépendants avec probabilité $p$ constante — typiquement un contrôle qualité par échantillonnage.<br/><br/>La loi de Poisson $\\mathcal{P}(\\lambda)$ modélise les événements rares dans un intervalle : pannes/heure, arrivées/minute dans un centre d\'appels, défauts/m² sur une tôle.<br/><br/>Quand $n$ est grand et $p$ petit, la Poisson approche la binomiale avec $\\lambda = np$ : un contrôle sur $500$ pièces avec $2\\%$ de défauts ($\\lambda = 10$) se calcule bien plus simplement avec Poisson. Le critère pratique d\'approximation : $n \\geq 30$ et $p \\leq 0{,}1$.<br/><br/>La propriété clé de Poisson : $E(X) = V(X) = \\lambda$ — variance égale à la moyenne, ce qui n\'est pas le cas en général.',
      definitions: [
        { term: 'Loi binomiale $\\mathcal{B}(n, p)$', def: 'Loi du nombre de succès en $n$ épreuves indépendantes, chacune avec probabilité de succès $p$. $E(X) = np$, $V(X) = np(1-p)$.' },
        { term: 'Loi de Poisson $\\mathcal{P}(\\lambda)$', def: 'Loi du nombre d\'événements rares dans un intervalle donné (temps, surface, volume). Paramètre $\\lambda$ = nombre moyen d\'événements. Propriété clé : $E(X) = V(X) = \\lambda$.' },
        { term: 'Coefficient binomial $\\binom{n}{k}$', def: 'Nombre de façons de choisir $k$ éléments parmi $n$ : $\\binom{n}{k} = \\frac{n!}{k!(n-k)!}$. Exemple : $\\binom{5}{2} = \\frac{5!}{2!3!} = 10$.' },
        { term: 'Approximation de Poisson', def: 'Quand $n \\geq 30$ et $p \\leq 0{,}1$, on approche $\\mathcal{B}(n,p)$ par $\\mathcal{P}(\\lambda = np)$. Les calculs sont beaucoup plus simples et la précision est excellente.' }
      ],
      method: {
        title: 'Choisir entre binomiale et Poisson',
        steps: [
          '<strong>Loi binomiale</strong> : $n$ répétitions indépendantes, probabilité $p$ constante.<br/><br/><strong>Exemple :</strong> On tire $n = 10$ pièces d\'un lot à $5\\%$ de défauts. $X \\sim \\mathcal{B}(10 ; 0{,}05)$. $P(X = 0) = 0{,}95^{10} \\approx 0{,}599$.',
          '<strong>Loi de Poisson</strong> : événements rares ($\\lambda=np$ fixé, $n$ grand, $p$ petit).<br/><br/><strong>Exemple :</strong> Une machine a $2$ pannes/jour en moyenne. $P(X = 0) = e^{-2} \\approx 0{,}135$ (probabilité d\'aucune panne).',
          '<strong>Formule de Poisson</strong> : $P_{\\mathcal{P}(\\lambda)}(X=k)=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$.<br/><br/><strong>Exemple :</strong> $\\lambda = 3$, $k = 2$ → $P(X=2) = \\frac{9}{2} \\times e^{-3} \\approx 4{,}5 \\times 0{,}0498 \\approx 0{,}224$.',
          '<strong>Moments de Poisson</strong> : $E(X)=V(X)=\\lambda$.<br/><br/><strong>Exemple :</strong> Si $\\lambda = 5$ pannes/jour, l\'écart-type est $\\sigma = \\sqrt{5} \\approx 2{,}24$ pannes/jour.'
        ]
      },
      example: {
        statement: 'Un fabricant de circuits imprimés sait que $1\\%$ des composants soudés sont défectueux. Une carte contient $200$ soudures. Quelle est la probabilité d\'avoir exactement $3$ soudures défectueuses sur une carte ?',
        steps: [
          'Modèle : $n = 200$ essais indépendants, $p = 0{,}01$. C\'est une loi $\\mathcal{B}(200 ; 0{,}01)$.',
          'Comme $n \\geq 30$ et $p \\leq 0{,}1$, on approche par Poisson avec $\\lambda = np = 200 \\times 0{,}01 = 2$.',
          '$P(X = 3) = \\frac{\\lambda^3}{3!}e^{-\\lambda} = \\frac{2^3}{6} \\times e^{-2} = \\frac{8}{6} \\times 0{,}1353$.',
          '$P(X = 3) = 1{,}333 \\times 0{,}1353 \\approx 0{,}180$.',
          'Il y a environ $18\\%$ de chances d\'avoir exactement $3$ soudures défectueuses.'
        ],
        answer: '$P(X = 3) \\approx 0{,}180$ soit $18\\%$. Avec Poisson ($\\lambda = 2$), le calcul est immédiat comparé à la formule binomiale avec $\\binom{200}{3}$.'
      },
      formulas: [
        '$P_{\\mathcal{B}(n,p)}(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}$',
        '$P_{\\mathcal{P}(\\lambda)}(X=k)=\\dfrac{\\lambda^k}{k!}e^{-\\lambda}$',
        '$E_{\\mathcal{P}}(X)=V_{\\mathcal{P}}(X)=\\lambda$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Loi de Poisson',
        title: 'Diagramme en bâtons de $\\mathcal{P}(\\lambda = 5)$',
        description: 'En reprenant $\\lambda = 5$ appels par minute (exemple du centre d\'appels du problème du cours), chaque bâton a une hauteur <strong>calculée</strong> avec $P(X=k) = \\dfrac{\\lambda^k}{k!}e^{-\\lambda}$ pour $k = 0$ à $10$ : la distribution est asymétrique, avec un pic autour de $\\lambda$.',
        svg: `
          <svg viewBox="0 0 600 320" role="img" aria-labelledby="poisson-bts-title poisson-bts-desc">
            <title id="poisson-bts-title">Diagramme en batons de la loi de Poisson de parametre 5</title>
            <desc id="poisson-bts-desc">Diagramme en batons montrant P(X=k) pour k de 0 a 10 pour une loi de Poisson de parametre lambda egal 5, calculee avec la formule lambda puissance k sur k factorielle fois exponentielle de moins lambda. La distribution est asymetrique avec un maximum partage entre k=4 et k=5.</desc>
            <text class="axis-label" x="20" y="26" text-anchor="start">P(X = k)</text>
            <line class="axis" x1="50" y1="40" x2="50" y2="260"></line>
            <line class="axis" x1="50" y1="260" x2="560" y2="260"></line>
            <line class="grid-line" x1="50" y1="205" x2="560" y2="205"></line>
            <line class="grid-line" x1="50" y1="150" x2="560" y2="150"></line>
            <line class="grid-line" x1="50" y1="95" x2="560" y2="95"></line>
            <line class="grid-line" x1="50" y1="40" x2="560" y2="40"></line>
            <text class="tick-label" x="42" y="264" text-anchor="end">0</text>
            <text class="tick-label" x="42" y="209" text-anchor="end">0,05</text>
            <text class="tick-label" x="42" y="154" text-anchor="end">0,10</text>
            <text class="tick-label" x="42" y="99" text-anchor="end">0,15</text>
            <text class="tick-label" x="42" y="44" text-anchor="end">0,20</text>
            <rect x="59" y="252.59" width="30" height="7.41" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="104" y="222.94" width="30" height="37.06" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="149" y="167.35" width="30" height="92.65" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="194" y="105.59" width="30" height="154.41" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="239" y="66.99" width="30" height="193.01" fill="color-mix(in srgb, var(--diagram-accent) 58%, transparent)" stroke="none"></rect>
            <rect x="284" y="66.99" width="30" height="193.01" fill="color-mix(in srgb, var(--diagram-accent) 58%, transparent)" stroke="none"></rect>
            <rect x="329" y="99.15" width="30" height="160.85" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="374" y="145.11" width="30" height="114.89" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="419" y="188.19" width="30" height="71.81" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="464" y="220.11" width="30" height="39.89" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <rect x="509" y="240.05" width="30" height="19.95" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)" stroke="none"></rect>
            <text class="tick-label" x="74" y="244.59" text-anchor="middle">0,007</text>
            <text class="tick-label" x="119" y="214.94" text-anchor="middle">0,034</text>
            <text class="tick-label" x="164" y="159.35" text-anchor="middle">0,084</text>
            <text class="tick-label" x="209" y="97.59" text-anchor="middle">0,140</text>
            <text class="tick-label" x="254" y="58.99" text-anchor="middle">0,175</text>
            <text class="tick-label" x="299" y="58.99" text-anchor="middle">0,175</text>
            <text class="tick-label" x="344" y="91.15" text-anchor="middle">0,146</text>
            <text class="tick-label" x="389" y="137.11" text-anchor="middle">0,104</text>
            <text class="tick-label" x="434" y="180.19" text-anchor="middle">0,065</text>
            <text class="tick-label" x="479" y="212.11" text-anchor="middle">0,036</text>
            <text class="tick-label" x="524" y="232.05" text-anchor="middle">0,018</text>
            <text class="annotation-label" x="276.5" y="50" text-anchor="middle">λ = 5</text>
            <text class="tick-label" x="74" y="278" text-anchor="middle">0</text>
            <text class="tick-label" x="119" y="278" text-anchor="middle">1</text>
            <text class="tick-label" x="164" y="278" text-anchor="middle">2</text>
            <text class="tick-label" x="209" y="278" text-anchor="middle">3</text>
            <text class="tick-label" x="254" y="278" text-anchor="middle">4</text>
            <text class="tick-label" x="299" y="278" text-anchor="middle">5</text>
            <text class="tick-label" x="344" y="278" text-anchor="middle">6</text>
            <text class="tick-label" x="389" y="278" text-anchor="middle">7</text>
            <text class="tick-label" x="434" y="278" text-anchor="middle">8</text>
            <text class="tick-label" x="479" y="278" text-anchor="middle">9</text>
            <text class="tick-label" x="524" y="278" text-anchor="middle">10</text>
            <text class="axis-label" x="305" y="300" text-anchor="middle">k (nombre d'appels par minute)</text>
          </svg>
        `,
        notes: [
          'Calcul $P(X=k) = \\dfrac{\\lambda^k}{k!}e^{-\\lambda}$ pour $\\lambda = 5$ : $P(X=3) \\approx 0{,}140$ (valeur du problème du cours), $P(X=4) \\approx 0{,}175$, $P(X=5) \\approx 0{,}175$ — les deux valeurs les plus probables.',
          'Bâtons foncés : $k=4$ et $k=5$, qui se partagent exactement le maximum de probabilité — particularité de la loi de Poisson quand $\\lambda$ est un entier (les deux valeurs entières encadrant $\\lambda$ sont alors co-modales).',
          'La distribution est asymétrique : la probabilité décroît plus lentement à droite ($P(X=10) \\approx 0{,}018$) qu\'elle ne le ferait par symétrie stricte, contrairement à la loi normale.'
        ],
        reading: 'Ce qu\'il faut lire : la hauteur de chaque bâton est calculée avec la vraie formule $P(X=k)=\\lambda^k e^{-\\lambda}/k!$, pas dessinée à main levée — la probabilité culmine autour de $k \\approx \\lambda$ puis décroît, plus lentement à droite qu\'à gauche.',
        caption: 'Diagramme en bâtons de $\\mathcal{P}(\\lambda=5)$, calculé pour $k=0$ à $10$ (exemple du centre d\'appels du cours).'
      },
      recap: [
        'Binomiale = $n$ essais indépendants avec $p$ constant. Poisson = événements rares dans un intervalle.',
        'Si $n \\geq 30$ et $p \\leq 0{,}1$ : approcher $\\mathcal{B}(n,p)$ par $\\mathcal{P}(np)$ pour simplifier les calculs.',
        'Propriété clé de Poisson : $E(X) = V(X) = \\lambda$ (moyenne = variance). Si ce n\'est pas vérifié sur les données, Poisson n\'est pas un bon modèle.',
        '$P(X \\geq 1) = 1 - P(X = 0) = 1 - e^{-\\lambda}$ : très utilisé pour la probabilité d\'au moins un événement.'
      ],
      piege: 'La loi de Poisson suppose des événements rares et indépendants. Si les pannes se "groupent", la loi de Poisson n\'est plus adaptée.'
    },
    quiz: [
      { q: 'Un contrôleur vérifie une production où $2\\%$ des pièces sont défectueuses. Il prélève $n=500$ pièces. Un étudiant dit : "la loi binomiale s\'applique mais avec $n=500$ et $p=0{,}02$, c\'est incalculable." Quelle est son erreur ?', options: ['On approche par Poisson avec $\\lambda=np=10$ ($n\\ge30$, $p\\le0{,}1$) : les calculs deviennent simples et précis', 'Il a raison : pas d\'approximation possible dans ce cas', 'La loi normale est la seule approximation disponible ici', 'Il faut utiliser la loi hypergéométrique car on tire sans remise'], answer: 0, correction: 'Quand $n\\ge30$ et $p\\le0{,}1$ (événements rares), la loi de Poisson approche excellemment la binomiale avec $\\lambda=np=500\\times0{,}02=10$. Ainsi $P(X=k)\\approx\\frac{10^k}{k!}e^{-10}$, facilement calculable. La calculatrice donne directement ces valeurs. L\'approximation normale est aussi possible ($n$ grand), mais Poisson est plus précise ici car $p$ est petit.' },
      { q: 'Pour $\\mathcal{P}(\\lambda=4)$, l\'espérance est :', options: ['$2$', '$4$', '$16$', '$\\sqrt{4}$'], answer: 1, correction: 'Loi de Poisson : $E(X)=\\lambda=4$.' },
      { q: 'La loi de Poisson est une approximation de la binomiale quand :', options: ['$n$ est petit et $p$ est grand', '$n$ est grand et $p$ est petit', '$n=p$', '$np>10$'], answer: 1, correction: 'Poisson approche $\\mathcal{B}(n,p)$ quand $n\\ge30$, $p\\le0{,}1$ et $\\lambda=np$ modéré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const fr = x => String(x).replace('.', '{,}');
        const lambda = pick([2, 3, 4, 5]);
        const ans = parseFloat((Math.exp(-lambda)).toFixed(3));

        const ctx = pick([
          {
            build: () => `Une <strong>machine industrielle</strong> tombe en panne en moyenne $\\lambda=${lambda}$ fois par semaine (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité de <strong>ne subir aucune panne</strong> une semaine donnée. Arrondir à $0{,}001$.`
          },
          {
            build: () => `Un <strong>centre d'appels</strong> reçoit en moyenne $\\lambda=${lambda}$ appels par minute (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité de <strong>ne recevoir aucun appel</strong> pendant une minute. Arrondir à $0{,}001$.`
          },
          {
            build: () => `Un contrôle qualité relève en moyenne $\\lambda=${lambda}$ <strong>défauts par tôle</strong> produite (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité qu'une tôle soit <strong>sans aucun défaut</strong>. Arrondir à $0{,}001$.`
          },
          {
            build: () => `Un <strong>serveur informatique</strong> reçoit en moyenne $\\lambda=${lambda}$ requêtes par seconde (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité de <strong>n'avoir aucune requête</strong> pendant une seconde. Arrondir à $0{,}001$.`
          },
          {
            build: () => `Un assureur observe en moyenne $\\lambda=${lambda}$ <strong>sinistres déclarés</strong> par jour sur un portefeuille de contrats (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité de <strong>n'avoir aucun sinistre</strong> un jour donné. Arrondir à $0{,}001$.`
          },
          {
            build: () => `Un magasin enregistre en moyenne $\\lambda=${lambda}$ <strong>arrivées de clients</strong> par minute aux heures creuses (loi de Poisson).<br/><br/>Pour $X\\sim\\mathcal{P}(${lambda})$, calcule $P(X=0)$, la probabilité de <strong>n'avoir aucun client</strong> pendant une minute. Arrondir à $0{,}001$.`
          }
        ]);

        return {
          statement: ctx.build(),
          answer: ans,
          tolerance: 0.002,
          unit: '',
          hint: `$P(X=0)=e^{-${lambda}}$`,
          solution: [`$P(X=0)=e^{-${lambda}}\\approx${fr(ans)}$`]
        };
      }
    },
    probleme: {
      context: 'Un centre d\'appels reçoit en moyenne $\\lambda=5$ appels par minute (loi de Poisson).',
      tasks: [
        'Calculer la probabilité de recevoir exactement $3$ appels en une minute.',
        'Calculer la probabilité de recevoir au moins $1$ appel.',
        'Calculer l\'espérance et l\'écart-type du nombre d\'appels.'
      ],
      solutions: [
        '$P(X=3)=\\frac{5^3}{3!}e^{-5}=\\frac{125}{6}e^{-5}\\approx0{,}1404$.',
        '$P(X\\ge1)=1-P(X=0)=1-e^{-5}\\approx1-0{,}0067=0{,}9933$.',
        '$E(X)=5$ ; $\\sigma=\\sqrt{V(X)}=\\sqrt{5}\\approx2{,}24$ appels/min.'
      ],
      finalAnswer: '$P(X=3)\\approx14\\%$ ; $P(X\\ge1)\\approx99{,}3\\%$ ; $\\sigma\\approx2{,}24$.'
    },

    evaluation: {
      title: 'Évaluation — Lois de probabilité discrètes',
      duration: '40 min',
      questions: [
        {
          statement: 'Un lot contient $5\\%$ de pièces défectueuses. On prélève $n = 20$ pièces. Calculer $P(X = 0)$ avec la loi binomiale $\\mathcal{B}(20\\,;\\,0{,}05)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.358,
          tolerance: 0.002,
          unit: '',
          points: 2,
          correction: '$P(X=0) = \\binom{20}{0} \\times 0{,}05^0 \\times 0{,}95^{20} = 0{,}95^{20} \\approx 0{,}3585$. Il y a environ $36\\%$ de chances de n\'avoir aucun défaut.'
        },
        {
          statement: 'Pour une loi de Poisson $\\mathcal{P}(\\lambda)$, quelle propriété caractéristique est vraie ?',
          type: 'multiple-choice',
          options: ['$E(X) = \\lambda$ et $V(X) = \\lambda^2$', '$E(X) = V(X) = \\lambda$', '$E(X) = \\lambda$ et $V(X) = \\sqrt{\\lambda}$', '$E(X) = 0$ et $V(X) = \\lambda$'],
          answer: 1,
          points: 2,
          correction: 'La propriété caractéristique de la loi de Poisson est $E(X) = V(X) = \\lambda$ : la moyenne et la variance sont égales. Si des données montrent des valeurs très différentes pour la moyenne et la variance, la loi de Poisson n\'est probablement pas un bon modèle.'
        },
        {
          statement: 'Un serveur reçoit en moyenne $\\lambda = 3$ requêtes par seconde (loi de Poisson). Calculer $P(X = 2)$ (arrondir à $0{,}001$). On donne $e^{-3} \\approx 0{,}0498$.',
          type: 'numeric',
          answer: 0.224,
          tolerance: 0.002,
          unit: '',
          points: 3,
          correction: '$P(X=2) = \\dfrac{3^2}{2!}e^{-3} = \\dfrac{9}{2} \\times 0{,}0498 = 4{,}5 \\times 0{,}0498 \\approx 0{,}224$.'
        },
        {
          statement: 'L\'approximation de la loi binomiale par la loi de Poisson est valable quand :',
          type: 'multiple-choice',
          options: ['$n$ est petit et $p$ est grand', '$n \\geq 30$ et $p \\leq 0{,}1$ (événements rares)', '$n = p$', '$np > 100$'],
          answer: 1,
          points: 1,
          correction: 'L\'approximation de Poisson est pertinente quand $n$ est grand ($\\geq 30$) et $p$ est petit ($\\leq 0{,}1$), avec $\\lambda = np$ modéré. Les événements sont alors rares et la formule de Poisson est beaucoup plus simple à calculer.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{P}(4)$, calculer $P(X \\geq 1) = 1 - P(X=0)$ (arrondir à $0{,}001$). On donne $e^{-4} \\approx 0{,}0183$.',
          type: 'numeric',
          answer: 0.982,
          tolerance: 0.002,
          unit: '',
          points: 2,
          correction: '$P(X \\geq 1) = 1 - P(X=0) = 1 - e^{-4} = 1 - 0{,}0183 = 0{,}982$. Il y a plus de $98\\%$ de chances d\'observer au moins un événement.'
        }
      ]
    }
  }
);
