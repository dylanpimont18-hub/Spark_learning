window.MODULES.push(
    {
    id: '4e-probabilites',
    level: 1, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités : calcul et événements',
    subtitle: 'Union, intersection, complémentaire',
    keywords: ['Probabilité', 'Événement', 'Union', 'Intersection', 'Complémentaire', 'Incompatibles'],
    physics: false,
    cours: {
      intro: 'La probabilité mesure la fréquence à long terme d\'un événement dans une expérience aléatoire. En 4e, on apprend à combiner des événements : la réunion $A \\cup B$ (« au moins l\'un des deux se réalise ») et l\'intersection $A \\cap B$ (« les deux se réalisent simultanément »).' +
        '<br/><br/>' +
        'La formule $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ évite de compter deux fois les résultats favorables aux deux événements à la fois. Deux événements sont <strong>incompatibles</strong> si $A \\cap B = \\emptyset$ : ils ne peuvent jamais se produire ensemble, et la formule se simplifie en $P(A \\cup B) = P(A) + P(B)$.' +
        '<br/><br/>' +
        'Enfin, $P(\\bar{A}) = 1 - P(A)$ car $A$ et son contraire couvrent tous les cas possibles. Cette formule est très utile quand le contraire est plus simple à calculer que l\'événement lui-même.' +
        '<br/><br/>' +
        'En pratique, les probabilités servent en météo (risque de pluie), en médecine (fiabilité d\'un test), en ingénierie (risque de panne) et dans bien d\'autres domaines.',
      definitions: [
        { term: 'Expérience aléatoire', def: 'Expérience dont on ne peut pas prévoir le résultat à l\'avance. L\'ensemble de tous les résultats possibles est l\'univers $\\Omega$.' },
        { term: 'Événement', def: 'Sous-ensemble de l\'univers $\\Omega$. Un événement est réalisé si le résultat de l\'expérience lui appartient.' },
        { term: 'Événements incompatibles', def: 'Deux événements $A$ et $B$ qui ne peuvent pas se produire simultanément : $A \\cap B = \\emptyset$.' },
        { term: 'Événement contraire', def: 'Le contraire de $A$, noté $\\bar{A}$, est l\'ensemble des résultats qui ne sont pas dans $A$. $P(\\bar{A}) = 1 - P(A)$.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Définir les événements</strong> et l\'univers $\\Omega$. <strong>Exemple :</strong> on lance un dé → $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. $A$ = « obtenir un pair » = $\\{2, 4, 6\\}$.',
          '<strong>Calculer $P(A)$, $P(B)$</strong> et si nécessaire $P(A \\cap B)$. <strong>Exemple :</strong> $P(A) = \\dfrac{3}{6} = 0{,}5$. Si $B$ = « obtenir un $6$ », alors $P(A \\cap B) = P(\\{6\\}) = \\dfrac{1}{6}$.',
          '<strong>Appliquer les formules</strong> : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si incompatibles : $P(A \\cap B) = 0$. <strong>Exemple :</strong> $P(A \\cup B) = \\dfrac{3}{6} + \\dfrac{1}{6} - \\dfrac{1}{6} = \\dfrac{3}{6} = 0{,}5$.'
        ]
      },
      example: {
        statement: 'Dans un jeu de $32$ cartes, on tire une carte au hasard. $A$ = « obtenir un cœur » ($8$ cartes) et $B$ = « obtenir un roi » ($4$ cartes). Quelle est la probabilité d\'obtenir un cœur ou un roi ?',
        steps: [
          '$P(A) = \\dfrac{8}{32} = \\dfrac{1}{4}$ et $P(B) = \\dfrac{4}{32} = \\dfrac{1}{8}$.',
          '$A \\cap B$ = « obtenir le roi de cœur » → $P(A \\cap B) = \\dfrac{1}{32}$.',
          '$P(A \\cup B) = \\dfrac{1}{4} + \\dfrac{1}{8} - \\dfrac{1}{32} = \\dfrac{8 + 4 - 1}{32} = \\dfrac{11}{32} \\approx 0{,}34$.'
        ],
        answer: 'La probabilité d\'obtenir un cœur ou un roi est $\\dfrac{11}{32} \\approx 0{,}34$.'
      },
      formulas: [
        '$P(\\bar{A}) = 1 - P(A)$',
        '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$',
        'Événements incompatibles : $P(A \\cap B) = 0 \\Rightarrow P(A \\cup B) = P(A) + P(B)$',
        '$0 \\leq P(A) \\leq 1$ et $P(\\Omega) = 1$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Diagramme de Venn',
        title: 'Union et intersection sur l\'exemple des cœurs et des rois',
        description: 'Dans un jeu de $32$ cartes : $A$ = « obtenir un cœur » ($8$ cartes), $B$ = « obtenir un roi » ($4$ cartes). La zone ombrée est l\'intersection $A \\cap B$ = « le roi de cœur », comptée une seule fois dans $P(A \\cup B)$.',
        svg: `
          <svg viewBox="0 0 440 320" role="img" aria-labelledby="proba-venn-title proba-venn-desc">
            <title id="proba-venn-title">Diagramme de Venn pour le tirage d'une carte parmi 32</title>
            <desc id="proba-venn-desc">Deux ensembles se chevauchent dans l'univers des 32 cartes : A regroupe les 8 coeurs, B regroupe les 4 rois, et leur intersection ombree, le roi de coeur, ne compte que pour une carte.</desc>
            <defs>
              <clipPath id="probaVennClip">
                <circle cx="290" cy="195" r="90"></circle>
              </clipPath>
            </defs>
            <rect class="frame-line" x="20" y="40" width="400" height="250" rx="10" fill="none"></rect>
            <text class="label-soft" x="34" y="60">Univers : 32 cartes</text>
            <circle class="axis" cx="170" cy="195" r="90" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></circle>
            <circle class="axis" cx="290" cy="195" r="90" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></circle>
            <circle cx="170" cy="195" r="90" clip-path="url(#probaVennClip)" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)" stroke="none"></circle>
            <text class="annotation-label" x="170" y="96" text-anchor="middle">A : Cœur</text>
            <text class="tick-label" x="170" y="112" text-anchor="middle">8 cartes</text>
            <text class="annotation-label" x="290" y="96" text-anchor="middle">B : Roi</text>
            <text class="tick-label" x="290" y="112" text-anchor="middle">4 cartes</text>
            <text class="annotation-label" x="135" y="200" text-anchor="middle">7</text>
            <text class="annotation-label" x="230" y="200" text-anchor="middle">1</text>
            <text class="annotation-label" x="325" y="200" text-anchor="middle">3</text>
            <text class="tick-label" x="25" y="272">21 cartes</text>
            <text class="tick-label" x="25" y="286">ni cœur ni roi</text>
            <rect x="105" y="8" width="230" height="30" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="tick-label" x="117" y="28">Zone ombrée = A ∩ B = roi de cœur</text>
            <line class="guide-line" x1="230" y1="38" x2="230" y2="160"></line>
          </svg>
        `,
        notes: [
          'L\'ensemble $A$ = « tirer un cœur » contient $8$ cartes sur $32$ : $P(A) = \\dfrac{8}{32} = \\dfrac{1}{4}$.',
          'L\'ensemble $B$ = « tirer un roi » contient $4$ cartes sur $32$ : $P(B) = \\dfrac{4}{32} = \\dfrac{1}{8}$.',
          'La zone ombrée (l\'intersection) est « le roi de cœur », une seule carte : $P(A \\cap B) = \\dfrac{1}{32}$.',
          'En dehors des deux cercles : $32 - 11 = 21$ cartes qui ne sont ni un cœur ni un roi.'
        ],
        reading: 'La zone ombrée n\'est comptée qu\'une seule fois : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = \\dfrac{8+4-1}{32} = \\dfrac{11}{32} \\approx 0{,}34$.',
        caption: 'Diagramme de Venn pour le tirage d\'une carte dans un jeu de $32$ cartes : $A$ = cœur, $B$ = roi, intersection ombrée = roi de cœur.'
      },
      recap: [
        '$P(A) = \\dfrac{\\text{nombre de cas favorables}}{\\text{nombre de cas possibles}}$ (équiprobabilité).',
        'Union : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — ne pas oublier de soustraire l\'intersection.',
        'Si $A$ et $B$ sont incompatibles ($A \\cap B = \\emptyset$), alors $P(A \\cup B) = P(A) + P(B)$.',
        'Événement contraire : $P(\\bar{A}) = 1 - P(A)$ — utile quand le contraire est plus simple à calculer.'
      ],
      piege: 'Piège : ne pas oublier de soustraire $P(A \\cap B)$ dans la formule de l\'union ! Si on additionne simplement $P(A) + P(B)$, on compte deux fois les cas où $A$ et $B$ se produisent simultanément.'
    },
    quiz: [
      {
        q: 'On lance un dé. $A$ = « obtenir un pair » et $B$ = « obtenir un multiple de $3$ ». Quelle est $P(A \\cup B)$ ?',
        options: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$'],
        answer: 1,
        correction: '$A = \\{2,4,6\\}$, $B = \\{3,6\\}$, $A \\cap B = \\{6\\}$. $P(A) = \\frac{3}{6}$, $P(B) = \\frac{2}{6}$, $P(A \\cap B) = \\frac{1}{6}$. $P(A \\cup B) = \\frac{3+2-1}{6} = \\frac{4}{6} = \\frac{2}{3}$.'
      },
      {
        q: 'Un élève dit : « $P(A) = 0{,}7$ et $P(B) = 0{,}5$, donc $P(A \\cup B) = 0{,}7 + 0{,}5 = 1{,}2$ ». Pourquoi est-ce impossible ?',
        options: [
          'Une probabilité ne peut jamais dépasser $1$ ; il faut soustraire $P(A \\cap B)$',
          'Les deux événements sont incompatibles donc on ne peut pas les additionner',
          'Il aurait dû multiplier : $P(A \\cup B) = 0{,}7 \\times 0{,}5 = 0{,}35$',
          'Le résultat est correct, une probabilité peut dépasser $1$'
        ],
        answer: 0,
        correction: 'Une probabilité est toujours comprise entre $0$ et $1$. En additionnant sans soustraire, l\'élève compte deux fois les résultats favorables aux deux événements. La formule correcte est $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Si $P(A \\cap B) = 0{,}3$, alors $P(A \\cup B) = 0{,}7 + 0{,}5 - 0{,}3 = 0{,}9 \\leq 1$.'
      },
      {
        q: '$P(A) = 0{,}6$ et $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Quelle est $P(\\overline{A \\cup B})$ ?',
        options: ['$0{,}1$', '$0{,}9$', '$0{,}7$', '$0{,}4$'],
        answer: 0,
        correction: '$P(A \\cup B) = 0{,}6 + 0{,}5 - 0{,}2 = 0{,}9$. Donc $P(\\overline{A \\cup B}) = 1 - 0{,}9 = 0{,}1$.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Mesure d'avant : UN SEUL moule (« P(A), P(B),
         P(A inter B), calculer P(A union B) »), soit 3 enonces distincts pour
         tout le chapitre et AUCUNE banque pour le professeur. Le generateur ne
         variait que trois decimales.

         Cinq taches maintenant, qui couvrent ce que le programme de quatrieme
         demande reellement : la reunion, l'evenement contraire, l'equiprobabilite
         sur un tirage concret, les evenements incompatibles, et la lecture d'un
         effectif en probabilite. Les contextes sont tires par pick(), comme la
         regle du projet le demande. */
      generate() {
        const tache = pick(['union', 'contraire', 'tirage', 'incompatibles', 'effectif']);

        if (tache === 'union') {
          const pa = pick([0.3, 0.4, 0.5, 0.6]);
          const pb = pick([0.2, 0.3, 0.4]);
          const pab = parseFloat((Math.min(pa, pb) * 0.5).toFixed(1));
          const punion = parseFloat((pa + pb - pab).toFixed(1));
          const ctx = pick([
            { a: 'aimer le sport', b: 'aimer la musique' },
            { a: 'porter des lunettes', b: 'être gaucher' },
            { a: 'prendre le bus', b: 'déjeuner a la cantine' },
            { a: 'jouer d un instrument', b: 'faire partie d un club' }
          ]);
          return {
            statement: 'Dans une classe, on note $A$ l\'événement « ' + ctx.a + ' » et $B$ l\'événement « ' + ctx.b + ' ». ' +
              'On sait que $P(A) = ' + fr(pa) + '$, $P(B) = ' + fr(pb) + '$ et $P(A \\cap B) = ' + fr(pab) + '$. Calcule $P(A \\cup B)$.',
            answer: punion,
            tolerance: 0.01,
            unit: '',
            hint: 'Additionner $P(A)$ et $P(B)$ compterait deux fois les élèves qui vérifient les deux conditions : il faut retrancher $P(A \\cap B)$.',
            solution: [
              'Les élèves qui vérifient les DEUX conditions sont comptes une fois dans $P(A)$ et une fois dans $P(B)$ : on les compte donc deux fois si on additionne simplement.',
              '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = ' + fr(pa) + ' + ' + fr(pb) + ' - ' + fr(pab) + ' = ' + fr(punion) + '$.'
            ]
          };
        }

        if (tache === 'contraire') {
          const p = pick([0.15, 0.25, 0.35, 0.45, 0.6, 0.72, 0.8]);
          const q = parseFloat((1 - p).toFixed(2));
          const ctx = pick([
            { e: 'qu il pleuve demain', c: 'qu il ne pleuve pas' },
            { e: 'que le train soit à l\'heure', c: 'qu il soit en retard' },
            { e: 'de gagner une partie', c: 'de ne pas la gagner' },
            { e: 'que la pièce tombee soit defectueuse', c: 'qu elle ne le soit pas' }
          ]);
          return {
            statement: 'La probabilité ' + ctx.e + ' vaut $' + fr(p) + '$. Quelle est la probabilité ' + ctx.c + ' ?',
            answer: q,
            tolerance: 0.001,
            unit: '',
            hint: 'Un événement et son contraire couvrent toutes les possibilites : leurs probabilités font $1$ a elles deux.',
            solution: [
              'L\'événement et son contraire forment l\'ensemble de tous les cas possibles, donc leurs probabilités ont pour somme $1$.',
              '$P(\\bar{A}) = 1 - P(A) = 1 - ' + fr(p) + ' = ' + fr(q) + '$.'
            ]
          };
        }

        if (tache === 'tirage') {
          // Tirage dans un sac : la probabilite est un quotient d'effectifs, ce
          // qui est la definition meme de l'equiprobabilite.
          const a = rand(2, 7), b = rand(2, 7), c = rand(1, 5);
          const total = a + b + c;
          /* ACCORD EN NOMBRE (correctif du 2026-09-13). Les libelles servent a
             DEUX endroits de l'enonce, et pas dans le meme nombre : au pluriel
             pour compter (« 7 billes rouges »), au singulier dans la question
             (« obtenir une bille rouge »). Une seule liste produisait
             « obtenir un objet vertes », du francais fautif imprime dans un
             manuel. On distingue donc :
               pl  : l'adjectif au pluriel, pour le comptage ;
               sg  : l'adjectif au singulier, pour la question ;
               nom : le nom de l'objet au singulier, avec son article. */
          const ctx = pick([
            { objet: 'billes', nom: 'une bille', pl: ['rouges', 'bleues', 'vertes'], sg: ['rouge', 'bleue', 'verte'] },
            { objet: 'jetons', nom: 'un jeton', pl: ['jaunes', 'noirs', 'blancs'], sg: ['jaune', 'noir', 'blanc'] },
            { objet: 'bonbons', nom: 'un bonbon', pl: ['a la fraise', 'au citron', 'a la menthe'], sg: ['a la fraise', 'au citron', 'a la menthe'] },
            { objet: 'cartes', nom: 'une carte', pl: ['de coeur', 'de pique', 'de trefle'], sg: ['de coeur', 'de pique', 'de trefle'] }
          ]);
          const quoi = pick(['premiere', 'contraire']);
          const rep = quoi === 'premiere'
            ? parseFloat((a / total).toFixed(4))
            : parseFloat(((total - c) / total).toFixed(4));
          return {
            statement: 'Un sac contient $' + a + '$ ' + ctx.objet + ' ' + ctx.pl[0] + ', $' + b + '$ ' + ctx.pl[1] +
              ' et $' + c + '$ ' + ctx.pl[2] + '. On en tire un au hasard. ' +
              (quoi === 'premiere'
                ? 'Quelle est la probabilité d\'obtenir ' + ctx.nom + ' ' + ctx.sg[0] + ' ?'
                : 'Quelle est la probabilité de ne PAS obtenir ' + ctx.nom + ' ' + ctx.sg[2] + ' ?'),
            answer: rep,
            tolerance: 0.001,
            unit: '',
            hint: 'Tous les tirages ont la même chance : la probabilité est le nombre de cas favorables divise par le nombre total.',
            solution: [
              'Le sac contient $' + a + ' + ' + b + ' + ' + c + ' = ' + total + '$ objets, et chacun a la même chance d\'être tiré.',
              quoi === 'premiere'
                ? 'Cas favorables : $' + a + '$. Donc $P = \\dfrac{' + a + '}{' + total + '} \\approx ' + fr(rep) + '$.'
                : 'Il est plus rapide de passer par le contraire : $P = 1 - \\dfrac{' + c + '}{' + total + '} = \\dfrac{' + (total - c) + '}{' + total + '} \\approx ' + fr(rep) + '$.'
            ]
          };
        }

        if (tache === 'incompatibles') {
          const pa = pick([0.2, 0.25, 0.3, 0.35]);
          const pb = pick([0.15, 0.2, 0.4]);
          const punion = parseFloat((pa + pb).toFixed(2));
          const ctx = pick([
            { a: 'tirer un roi', b: 'tirer une dame' },
            { a: 'obtenir un $6$', b: 'obtenir un $1$' },
            { a: 'arriver premier', b: 'arriver dernier' },
            { a: 'reussir du premier coup', b: 'echouer trois fois' }
          ]);
          return {
            statement: 'Les événements $A$ (« ' + ctx.a + ' ») et $B$ (« ' + ctx.b + ' ») ne peuvent pas se produire en même temps. ' +
              'On donne $P(A) = ' + fr(pa) + '$ et $P(B) = ' + fr(pb) + '$. Calcule $P(A \\cup B)$.',
            answer: punion,
            tolerance: 0.001,
            unit: '',
            hint: 'Deux événements qui ne peuvent pas se produire ensemble sont dits incompatibles : leur intersection est vide.',
            solution: [
              'Les deux événements sont <strong>incompatibles</strong>, donc $P(A \\cap B) = 0$ : aucun cas ne vérifie les deux a la fois.',
              'La formule generale se simplifie : $P(A \\cup B) = P(A) + P(B) - 0 = ' + fr(pa) + ' + ' + fr(pb) + ' = ' + fr(punion) + '$.'
            ]
          };
        }

        // tache === 'effectif' : passer d'un effectif a une probabilite, puis
        // revenir a un effectif attendu. C'est le va-et-vient que le programme
        // demande entre frequence et probabilite.
        const total = pick([20, 25, 40, 50]);
        const fav = rand(3, Math.floor(total / 2));
        const p = parseFloat((fav / total).toFixed(4));
        const ctx = pick([
          { s: 'Dans un groupe de ' + total + ' élèves, ' + fav + ' sont inscrits au club de théâtre.', q: 'On interroge un élève au hasard. Quelle est la probabilité qu il soit inscrit au club de théâtre ?' },
          { s: 'Sur ' + total + ' pièces sorties d une machine, ' + fav + ' presentent un défaut.', q: 'On prend une pièce au hasard. Quelle est la probabilité qu elle presente un défaut ?' },
          { s: 'Une urne contient ' + total + ' tickets, dont ' + fav + ' sont gagnants.', q: 'On tire un ticket au hasard. Quelle est la probabilité de gagner ?' }
        ]);
        return {
          statement: ctx.s + ' ' + ctx.q,
          answer: p,
          tolerance: 0.001,
          unit: '',
          hint: 'La probabilité est le quotient du nombre de cas favorables par le nombre total de cas, tous etant equiprobables.',
          solution: [
            'Chaque tirage a la même chance, donc la probabilité est un quotient d\'effectifs.',
            '$P = \\dfrac{' + fav + '}{' + total + '} \\approx ' + fr(p) + '$.'
          ]
        };
      }
    },
    probleme: {
      context: 'Dans une classe de $30$ élèves : $18$ pratiquent un sport, $12$ jouent d\'un instrument, et $6$ font les deux activités.',
      tasks: [
        'Calculer la probabilité qu\'un élève tiré au sort pratique un sport.',
        'Calculer la probabilité qu\'il joue d\'un instrument.',
        'Calculer la probabilité qu\'il pratique au moins une des deux activités (sport ou instrument).',
        'Calculer la probabilité qu\'il ne fasse ni sport ni instrument.'
      ],
      solutions: [
        '$P(S) = \\dfrac{18}{30} = 0{,}6$.',
        '$P(I) = \\dfrac{12}{30} = 0{,}4$.',
        '$P(S \\cup I) = 0{,}6 + 0{,}4 - \\dfrac{6}{30} = 1 - 0{,}2 = 0{,}8$.',
        '$P(\\overline{S \\cup I}) = 1 - 0{,}8 = 0{,}2$.'
      ],
      finalAnswer: '$20\\%$ des élèves ne font ni sport ni instrument.'
    },

    evaluation: {
      title: 'Évaluation — Probabilités : calcul et événements',
      duration: '30 min',
      questions: [
        {
          statement: 'On lance un dé équilibré à $6$ faces. Quelle est la probabilité d\'obtenir un nombre strictement supérieur à $4$ ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{1}{2}$'],
          answer: 1,
          points: 2,
          correction: 'Les résultats favorables sont $\\{5, 6\\}$ → $2$ cas favorables sur $6$. $P = \\dfrac{2}{6} = \\dfrac{1}{3}$.'
        },
        {
          statement: '$P(A) = 0{,}4$ et $P(B) = 0{,}3$ et $P(A \\cap B) = 0{,}1$. Calculer $P(A \\cup B)$.',
          type: 'numeric',
          answer: 0.6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0{,}4 + 0{,}3 - 0{,}1 = 0{,}6$.'
        },
        {
          statement: 'Si $P(A) = 0{,}75$, que vaut $P(\\bar{A})$ ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$P(\\bar{A}) = 1 - P(A) = 1 - 0{,}75 = 0{,}25$.'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancienne
             question se répondait par la définition même du mot « incompatibles »
             ($P(A \cap B) = 0$), sans aucune démarche. Ici l'élève doit voir que
             la formule de la réunion, qu'il connaît dans un sens, se retourne
             pour donner l'intersection. */
          statement: 'On sait que $P(A) = 0{,}5$, $P(B) = 0{,}4$ et $P(A \\cup B) = 0{,}7$. Calculer $P(A \\cap B)$.',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'La formule connue donne la réunion à partir de l\'intersection. Ici c\'est l\'inverse qui est demandé : il faut la retourner.<br/><br/>' +
            'De $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$, on tire $P(A \\cap B) = P(A) + P(B) - P(A \\cup B)$.<br/><br/>' +
            '$P(A \\cap B) = 0{,}5 + 0{,}4 - 0{,}7 = 0{,}2$.<br/><br/>' +
            'Contrôle de cohérence : une intersection ne peut dépasser aucun des deux événements, et $0{,}2$ est bien inférieur à $0{,}5$ comme à $0{,}4$. ✓ Remarque : la valeur n\'étant pas nulle, les deux événements ne sont pas incompatibles.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question était un calcul d'événement contraire à choisir parmi quatre
             fractions. Celle-ci demande d'expliquer pourquoi une somme de
             probabilités dépasse $1$, ce qui est l'erreur la plus révélatrice du
             chapitre et la raison d\'être de la formule de la réunion. */
          statement: 'Dans une classe, $60\\,\\%$ des élèves font du sport et $50\\,\\%$ jouent d\'un instrument. Un élève en conclut que $110\\,\\%$ des élèves font du sport ou jouent d\'un instrument. Quelle explication corrige le mieux son raisonnement ?',
          type: 'multiple-choice',
          options: [
            'Il a raison : on additionne les pourcentages de deux événements pour obtenir celui de leur réunion.',
            'Il a tort : les élèves qui font du sport ET jouent d\'un instrument sont comptés deux fois. Il faut retrancher leur proportion, $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$ — et une probabilité ne peut jamais dépasser $1$, soit $100\\,\\%$.',
            'Il a tort : il aurait fallu multiplier les deux pourcentages, ce qui donne $30\\,\\%$.',
            'Il a tort : la somme de deux pourcentages est toujours égale à $100\\,\\%$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le résultat $110\\,\\%$ devrait suffire à alerter : une probabilité est toujours comprise entre $0$ et $1$, donc un pourcentage entre $0$ et $100$.<br/><br/>' +
            'L\'erreur est un double comptage. Un élève qui fait du sport ET joue d\'un instrument est compté une fois dans les $60\\,\\%$ et une fois dans les $50\\,\\%$ : il est donc compté deux fois dans la somme.<br/><br/>' +
            'La formule corrige exactement cela : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$. Avec, par exemple, $20\\,\\%$ d\'élèves faisant les deux, la réunion vaudrait $60 + 50 - 20 = 90\\,\\%$.<br/><br/>' +
            'La proposition 3 est fausse : on ne multiplie les probabilités que pour des événements indépendants, et c\'est alors l\'intersection qu\'on obtient, pas la réunion.'
        }
      ]
    }
  }

);

