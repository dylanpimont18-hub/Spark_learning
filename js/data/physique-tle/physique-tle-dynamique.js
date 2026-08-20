/* =========================================================
   Spark Learning – data/physique-tle/physique-tle-dynamique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-tle-dynamique',
    level: 2, subject: 'physique',
    icon: '🎱',
    title: 'Dynamique newtonienne',
    subtitle: 'Quantité de mouvement, lois de Newton (inertie, principe fondamental, actions réciproques), conservation dans un système isolé',
    keywords: ['Quantité de mouvement', 'Lois de Newton', 'Action-réaction', 'Système isolé', 'Conservation'],
    physics: 'La dynamique newtonienne explique le recul d\'une arme à feu ou d\'un canon, le principe de propulsion des fusées et des moteurs à réaction, le fonctionnement des airbags et zones de déformation automobiles, ainsi que les manœuvres de séparation des étages de lanceurs spatiaux.',

    cours: {
      intro: 'Le principe fondamental de la dynamique, sous sa forme $\\sum\\vec F=m\\vec a$, ne raconte qu\'une partie de l\'histoire : Newton l\'a en réalité énoncé à l\'aide d\'une grandeur plus générale, la <strong>quantité de mouvement</strong> $\\vec p=m\\vec v$, qui reste valable même lorsque la masse du système varie (une fusée qui éjecte du gaz, par exemple).<br/><br/>Cette approche s\'appuie sur <strong>trois lois</strong> : le principe d\'inertie (un système livré à lui-même garde sa vitesse), le principe fondamental généralisé (les forces font varier la quantité de mouvement), et le principe des actions réciproques (toute force a une force « jumelle » opposée, exercée sur l\'autre système).<br/><br/>Ensemble, ces lois permettent d\'analyser des situations où <strong>plusieurs parties d\'un système interagissent</strong> — recul d\'une arme, propulsion, collision — sans avoir besoin de connaître le détail des forces internes mises en jeu : il suffit que le système global soit isolé ou pseudo-isolé.',
      definitions: [
        { term: 'Quantité de mouvement ($\\vec p$)', def: 'Grandeur vectorielle associée à un point matériel de masse $m$ et de vitesse $\\vec v$ : $\\vec p=m\\vec v$ (en kg·m/s). Elle combine en une seule grandeur l\'inertie (la masse) et le mouvement (la vitesse).' },
        { term: 'Première loi de Newton (principe d\'inertie)', def: 'Dans un référentiel galiléen, un système <strong>isolé</strong> (aucune force extérieure) ou <strong>pseudo-isolé</strong> (résultante des forces extérieures nulle) est soit au repos, soit en mouvement rectiligne uniforme.' },
        { term: 'Deuxième loi de Newton (PFD)', def: 'Dans un référentiel galiléen, la somme des forces extérieures appliquées à un système est égale à la dérivée de sa quantité de mouvement : $\\sum\\vec F=\\dfrac{d\\vec p}{dt}$. Si la masse est constante, cette loi se réduit à $\\sum\\vec F=m\\vec a$.' },
        { term: 'Troisième loi de Newton (actions réciproques)', def: 'Si un système $A$ exerce une force $\\vec F_{A\\to B}$ sur un système $B$, alors $B$ exerce sur $A$ une force $\\vec F_{B\\to A}$ de même droite d\'action et de même norme, mais de sens opposé : $\\vec F_{B\\to A}=-\\vec F_{A\\to B}$.' }
      ],
      method: {
        title: 'Appliquer la conservation de la quantité de mouvement en 3 étapes',
        steps: [
          '<strong>Définir le système</strong> (une ou plusieurs parties) et vérifier qu\'il est isolé ou pseudo-isolé : la résultante des forces extérieures doit être nulle (ou ces forces négligeables devant les interactions internes, très brèves et intenses, comme lors d\'une explosion).',
          'Si le système, initialement solidaire, se sépare en plusieurs parties, <strong>appliquer la conservation de la quantité de mouvement</strong> : $\\vec p_{avant}=\\vec p_{après}$, en sommant les quantités de mouvement de chaque partie après séparation.',
          '<strong>Projeter</strong> cette égalité vectorielle sur un axe orienté, puis résoudre pour la grandeur cherchée. Attention aux signes : deux parties qui s\'éloignent en sens opposés ont des vitesses de signes opposés sur l\'axe choisi.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Action-réaction et conservation de la quantité de mouvement',
        title: 'Deux patineurs initialement immobiles se repoussent',
        description: 'Pendant la poussée, les forces $\\vec F_{2\\to1}$ et $\\vec F_{1\\to2}$ sont opposées (troisième loi de Newton). Une fois séparés, les deux patineurs s\'éloignent avec des quantités de mouvement opposées : le plus léger (1) va plus vite que le plus lourd (2).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="dyn-title dyn-desc">
            <title id="dyn-title">Deux patineurs se repoussant : action-reaction puis conservation de la quantite de mouvement</title>
            <desc id="dyn-desc">Le schema comporte deux scenes. A gauche, deux patineurs numerotes 1 et 2 sont en contact, immobiles ; deux fleches opposees partant de la zone de contact representent les forces de la troisieme loi de Newton, F de 2 vers 1 dirigee vers la gauche et F de 1 vers 2 dirigee vers la droite, de meme longueur. A droite, apres la separation, les deux patineurs se sont eloignes l'un de l'autre ; le patineur 1, plus petit donc moins massif, porte une fleche de vitesse v1 plus longue dirigee vers la gauche, tandis que le patineur 2, plus grand donc plus massif, porte une fleche de vitesse v2 plus courte dirigee vers la droite, illustrant la conservation de la quantite de mouvement totale, nulle avant comme apres.</desc>

            <defs>
              <marker id="arrow-tle-dyn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="20" y1="185" x2="540" y2="185"></line>

            <!-- separateur entre les deux scenes -->
            <line class="guide-line" x1="270" y1="65" x2="270" y2="210"></line>

            <!-- titres des scenes -->
            <text class="label-soft" x="145" y="55" text-anchor="middle">Pendant la poussée</text>
            <text class="label-soft" x="410" y="55" text-anchor="middle">Après la séparation</text>

            <!-- SCENE 1 : contact -->
            <circle class="frame-line" cx="108" cy="150" r="18" fill="var(--diagram-soft)"></circle>
            <circle class="frame-line" cx="148" cy="150" r="22" fill="var(--diagram-soft)"></circle>
            <text class="annotation-label" x="108" y="155" text-anchor="middle">1</text>
            <text class="annotation-label" x="148" y="155" text-anchor="middle">2</text>

            <line class="curve-main" x1="120" y1="102" x2="90" y2="102" marker-end="url(#arrow-tle-dyn)"></line>
            <line class="curve-main" x1="136" y1="102" x2="166" y2="102" marker-end="url(#arrow-tle-dyn)"></line>
            <text class="tick-label" x="105" y="90" text-anchor="middle">F(2→1)</text>
            <text class="tick-label" x="151" y="90" text-anchor="middle">F(1→2)</text>

            <!-- SCENE 2 : apres separation -->
            <circle class="frame-line" cx="340" cy="150" r="18" fill="var(--diagram-soft)"></circle>
            <circle class="frame-line" cx="480" cy="150" r="22" fill="var(--diagram-soft)"></circle>
            <text class="annotation-label" x="340" y="155" text-anchor="middle">1</text>
            <text class="annotation-label" x="480" y="155" text-anchor="middle">2</text>

            <line class="curve-main" x1="322" y1="150" x2="288" y2="150" marker-end="url(#arrow-tle-dyn)"></line>
            <line class="curve-main" x1="502" y1="150" x2="527" y2="150" marker-end="url(#arrow-tle-dyn)"></line>
            <text class="tick-label" x="282" y="145" text-anchor="end">v₁</text>
            <text class="tick-label" x="533" y="145" text-anchor="start">v₂</text>
          </svg>
        `,
        notes: [
          'Pendant la poussée, les forces $\\vec F_{2\\to1}$ et $\\vec F_{1\\to2}$ ont la <strong>même norme</strong> et des sens <strong>opposés</strong> (troisième loi de Newton), mais elles s\'appliquent à deux systèmes différents : elles ne s\'annulent jamais entre elles.',
          'Le système {1+2}, initialement au repos, est <strong>pseudo-isolé</strong> horizontalement (poids compensé par la réaction du sol) : sa quantité de mouvement totale reste nulle après la séparation.',
          'Comme $m_1\\vec v_1=-m_2\\vec v_2$, le patineur le <strong>plus léger</strong> (1) s\'éloigne avec la vitesse la plus <strong>grande</strong> : les flèches ne sont pas de même longueur.'
        ],
        reading: 'Compare les deux scènes de gauche à droite : pendant la poussée, les deux forces opposées agissent sur des systèmes différents ; après la séparation, les deux vitesses sont opposées mais de normes différentes.',
        caption: 'Deux patineurs initialement immobiles se repoussent : couple action-réaction pendant la poussée, puis conservation de la quantité de mouvement (nulle avant et après) une fois séparés.'
      },
      example: {
        statement: 'Deux patineurs sur glace, de masses $m_1=50$ kg et $m_2=75$ kg, sont initialement immobiles, face à face. Ils se repoussent mutuellement des mains. Après la poussée, le patineur 1 recule à une vitesse de norme $v_1=3{,}0$ m/s. On néglige les frottements sur la glace.<br/><br/>Calculer la norme de la vitesse $v_2$ du patineur 2 après la poussée.',
        steps: [
          'Système : {patineur 1 + patineur 2}. Horizontalement, ce système est pseudo-isolé (poids de chacun compensé par la réaction de la glace, frottements négligés).',
          'Avant la poussée, les deux patineurs sont immobiles : la quantité de mouvement totale du système est nulle, $\\vec p_{avant}=\\vec 0$.',
          'Par conservation de la quantité de mouvement, $\\vec p_{après}=\\vec 0$ également : $m_1\\vec v_1+m_2\\vec v_2=\\vec 0$. En projetant sur un axe orienté dans le sens du mouvement du patineur 2, $-m_1v_1+m_2v_2=0$, donc $v_2=\\dfrac{m_1v_1}{m_2}$.',
          'Application numérique : $v_2=\\dfrac{50\\times3{,}0}{75}=\\dfrac{150}{75}=2{,}0$ m/s.'
        ],
        answer: '$v_2=2{,}0$ m/s. Le patineur le plus léger (1) recule plus vite ($3{,}0$ m/s) que le patineur le plus lourd (2), qui recule moins vite ($2{,}0$ m/s) : leurs quantités de mouvement, $m_1v_1=150$ kg·m/s et $m_2v_2=150$ kg·m/s, restent bien opposées et de même norme.'
      },
      formulas: [
        '$\\vec p=m\\vec v$ (quantité de mouvement)',
        'PFD généralisé : $\\sum\\vec F=\\dfrac{d\\vec p}{dt}$ (se réduit à $\\sum\\vec F=m\\vec a$ si $m$ est constante)',
        'Principe des actions réciproques : $\\vec F_{B\\to A}=-\\vec F_{A\\to B}$',
        'Système isolé ou pseudo-isolé : $\\sum\\vec F_{ext}=\\vec 0 \\Rightarrow \\vec p=\\text{constante}$',
        'Séparation d\'un système au repos en 2 parties : $m_1\\vec v_1+m_2\\vec v_2=\\vec 0$'
      ],
      recap: [
        'La quantité de mouvement $\\vec p=m\\vec v$ généralise le PFD : $\\sum\\vec F=\\dfrac{d\\vec p}{dt}$, valable même si la masse du système varie (fusée qui éjecte du gaz).',
        'Les deux forces d\'un couple action-réaction s\'appliquent à <strong>deux systèmes différents</strong> : elles ne peuvent jamais s\'annuler dans l\'étude du mouvement de l\'un ou l\'autre.',
        'Pour un système <strong>isolé ou pseudo-isolé</strong>, la quantité de mouvement totale se conserve : c\'est ce qui permet de calculer une vitesse de recul sans connaître le détail des forces internes.',
        'Un système initialement au repos qui se sépare en plusieurs parties conserve une quantité de mouvement totale <strong>nulle</strong> : les parties s\'éloignent de sorte que leurs quantités de mouvement se compensent exactement.'
      ],
      piege: 'Une confusion fréquente consiste à croire que les deux forces d\'un couple action-réaction s\'annulent et n\'ont donc aucun effet : en réalité, elles s\'appliquent chacune à un système <strong>différent</strong> et ne s\'annulent jamais dans l\'équation du mouvement de l\'un ou l\'autre système. Attention à toujours préciser sur quel système s\'applique chaque force avant d\'écrire le principe fondamental de la dynamique ou la conservation de la quantité de mouvement.'
    },

    quiz: [
      {
        q: 'Un système isolé, initialement au repos, se sépare spontanément en deux parties sous l\'effet de forces internes (explosion, ressort, réaction chimique...). Que peut-on dire de la quantité de mouvement totale du système juste après la séparation ?',
        options: [
          'Elle reste nulle, comme avant la séparation',
          'Elle devient égale à la somme des masses multipliée par une vitesse commune',
          'Elle double par rapport à sa valeur initiale',
          'Elle dépend uniquement de l\'énergie libérée par la séparation'
        ],
        answer: 0,
        correction: 'Le système étant isolé (ou pseudo-isolé), sa quantité de mouvement totale se conserve. Comme elle était nulle avant la séparation (système au repos), elle reste nulle après : les deux parties s\'éloignent avec des quantités de mouvement opposées, $m_1\\vec v_1=-m_2\\vec v_2$.'
      },
      {
        q: 'Un patineur 1 pousse un patineur 2. Quelle affirmation décrit correctement le couple de forces mis en jeu ?',
        options: [
          '$\\vec F_{1\\to2}$ et $\\vec F_{2\\to1}$ ont la même norme et des sens opposés, mais s\'appliquent à des systèmes différents',
          'Les deux forces s\'annulent, donc aucun des deux patineurs ne bouge',
          'Seul le patineur 2 subit une force, le patineur 1 n\'en subit aucune',
          'La force sur 2 est plus grande si 2 est plus léger que 1'
        ],
        answer: 0,
        correction: 'D\'après la troisième loi de Newton, les deux forces ont même norme et des sens opposés, mais elles s\'appliquent à des systèmes différents (1 et 2) : elles ne s\'annulent donc jamais entre elles, et chaque patineur accélère sous l\'effet de la force qu\'il subit.'
      },
      {
        q: 'Deux wagonnets initialement immobiles et accrochés se séparent sous l\'effet d\'un ressort comprimé (système pseudo-isolé horizontalement). Le premier, de masse $m_1=30$ kg, s\'éloigne à $v_1=2{,}0$ m/s. Le second a une masse $m_2=20$ kg. Quelle est la norme de sa vitesse $v_2$ ?',
        options: [
          '$v_2=3{,}0$ m/s',
          '$v_2=1{,}33$ m/s',
          '$v_2=6{,}0$ m/s',
          '$v_2=0{,}67$ m/s'
        ],
        answer: 0,
        correction: 'Conservation de la quantité de mouvement (système initialement au repos) : $m_1v_1=m_2v_2$, donc $v_2=\\dfrac{m_1v_1}{m_2}=\\dfrac{30\\times2{,}0}{20}=3{,}0$ m/s.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['patineurs', 'recul']);

        if (typeExo === 'patineurs') {
          var m1 = pick([40, 45, 50, 55, 60, 65, 70]);
          var m2 = pick([60, 65, 70, 75, 80, 85, 90]);
          var v1 = randFloat(1.5, 4, 1);
          var v2 = parseFloat((m1 * v1 / m2).toFixed(2));
          var contexte = pick([
            'deux patineurs sur une patinoire',
            'deux skateurs immobiles qui se repoussent',
            'deux nageurs qui se repoussent au bord d\'une piscine',
            'deux astronautes en apesanteur qui se repoussent',
            'deux joueurs de curling au moment d\'une poussée mutuelle'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', deux personnes de masses $m_1=' + m1 + '$ kg et $m_2=' + m2 + '$ kg, initialement immobiles, se repoussent mutuellement. On néglige tout frottement. Après la poussée, la personne 1 s\'éloigne à une vitesse de norme $v_1=' + fr(v1, 1) + '$ m/s.<br/><br/>Calcule la norme de la vitesse $v_2$ de la personne 2 après la poussée (en m/s, arrondie au centième).',
            answer: v2,
            tolerance: Math.max(0.05, parseFloat((v2 * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'Le système {1+2}, initialement au repos, est pseudo-isolé : $m_1v_1=m_2v_2$.',
            solution: [
              'Système initialement au repos, pseudo-isolé : $m_1v_1=m_2v_2$.',
              'On isole $v_2$ : $v_2=\\dfrac{m_1v_1}{m_2}=\\dfrac{' + m1 + '\\times' + fr(v1, 1) + '}{' + m2 + '}$.',
              'Résultat : $v_2\\approx' + fr(v2, 2) + '$ m/s.'
            ]
          };
        } else {
          var M = pick([500, 600, 700, 800, 900, 1000]);
          var mProj = pick([4, 6, 8, 10, 12]);
          var vProj = pick([300, 350, 400, 450, 500]);
          var vRecul = parseFloat((mProj * vProj / M).toFixed(2));
          var contexte2 = pick([
            'un canon qui tire un obus',
            'un extincteur qui propulse violemment son gaz',
            'une carabine qui tire une balle',
            'un petit lanceur-fusée testé en laboratoire',
            'un système de propulsion par éjection de masse'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', de masse totale (avant tir) $M=' + M + '$ kg, initialement immobile, éjecte une masse $m=' + mProj + '$ kg à une vitesse $v=' + vProj + '$ m/s par rapport au sol. On néglige tout frottement externe pendant l\'éjection.<br/><br/>Calcule la norme de la vitesse de recul $V$ du système restant (en m/s, arrondie au centième).',
            answer: vRecul,
            tolerance: Math.max(0.05, parseFloat((vRecul * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'Système {support + masse éjectée}, initialement au repos, pseudo-isolé : $M_{restant}V=mv$ (avec $M_{restant}\\approx M$).',
            solution: [
              'Système initialement au repos, pseudo-isolé : $MV\\approx mv$ (la masse éjectée étant petite devant $M$).',
              'On isole $V$ : $V=\\dfrac{mv}{M}=\\dfrac{' + mProj + '\\times' + vProj + '}{' + M + '}$.',
              'Résultat : $V\\approx' + fr(vRecul, 2) + '$ m/s, dans le sens opposé à l\'éjection.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un module spatial de masse totale $M=2\\,000$ kg est immobile dans l\'espace, loin de toute planète (système isolé). Il se sépare en deux parties : un compartiment de service de masse $m_1=1\\,200$ kg et une capsule de masse $m_2=800$ kg, éjectés par un mécanisme pyrotechnique. Après séparation, la capsule s\'éloigne à une vitesse de norme $v_2=3{,}0$ m/s (mesurée dans le référentiel initial du module).',
      tasks: [
        'Justifier que le système {compartiment + capsule} peut être considéré comme isolé, et donner la valeur de sa quantité de mouvement totale avant la séparation.',
        'En appliquant la conservation de la quantité de mouvement, calculer la norme de la vitesse $v_1$ du compartiment de service après la séparation.',
        'Comparer les quantités de mouvement des deux parties après séparation, et expliquer pourquoi le compartiment (plus massif) s\'éloigne moins vite que la capsule.'
      ],
      solutions: [
        'Loin de toute planète, aucune force gravitationnelle notable ne s\'exerce sur le module : le système est isolé. Avant la séparation, le module est immobile : sa quantité de mouvement totale est $\\vec p_{avant}=\\vec 0$.',
        'Conservation de la quantité de mouvement : $\\vec p_{après}=\\vec 0$, donc $m_1\\vec v_1+m_2\\vec v_2=\\vec 0$. En norme, $m_1v_1=m_2v_2$, donc $v_1=\\dfrac{m_2v_2}{m_1}=\\dfrac{800\\times3{,}0}{1\\,200}=\\dfrac{2\\,400}{1\\,200}=2{,}0$ m/s.',
        'Quantités de mouvement : $m_1v_1=1\\,200\\times2{,}0=2\\,400$ kg·m/s et $m_2v_2=800\\times3{,}0=2\\,400$ kg·m/s : elles sont bien égales en norme (et de sens opposés). Le compartiment, plus massif, doit donc avoir une vitesse plus faible pour que le produit $m\\times v$ reste le même que celui de la capsule, plus légère.'
      ],
      finalAnswer: '$v_1=2{,}0$ m/s, avec $m_1v_1=m_2v_2=2\\,400$ kg·m/s de part et d\'autre. C\'est exactement ce principe — conservation de la quantité de mouvement d\'un système isolé — qui est utilisé pour calculer les vitesses de séparation des étages de fusées ou la vitesse d\'éjection des capsules de secours.'
    },

    evaluation: {
      title: 'Évaluation — Dynamique newtonienne',
      duration: '30 min',
      questions: [
        {
          statement: 'Deux personnes de masses $m_1=40$ kg et $m_2=50$ kg, initialement immobiles, se repoussent mutuellement (frottements négligés). La personne 1 s\'éloigne à $v_1=2{,}5$ m/s. Calculer la norme de la vitesse $v_2$ de la personne 2 (en m/s).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: 'm/s',
          points: 2,
          correction: '$m_1v_1=m_2v_2$, donc $v_2=\\dfrac{m_1v_1}{m_2}=\\dfrac{40\\times2{,}5}{50}=\\dfrac{100}{50}=2{,}0$ m/s.'
        },
        {
          statement: 'D\'après le principe d\'inertie, dans un référentiel galiléen, un système pseudo-isolé (résultante des forces extérieures nulle) est :',
          type: 'multiple-choice',
          options: [
            'Toujours immobile',
            'Toujours en mouvement circulaire',
            'Soit au repos, soit en mouvement rectiligne uniforme',
            'Nécessairement soumis à une accélération constante'
          ],
          answer: 2,
          points: 2,
          correction: 'Le principe d\'inertie (première loi de Newton) énonce qu\'un système isolé ou pseudo-isolé conserve un mouvement rectiligne uniforme (ou reste au repos, cas particulier de vitesse nulle) : sa quantité de mouvement, donc sa vitesse, reste constante.'
        },
        {
          statement: 'Un canon de masse totale $M=750$ kg, initialement immobile, tire un obus de masse $m=5$ kg à une vitesse $v=450$ m/s par rapport au sol. Calculer la norme de la vitesse de recul $V$ du canon (en m/s).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.2,
          unit: 'm/s',
          points: 3,
          correction: '$MV\\approx mv$ (masse de l\'obus petite devant celle du canon), donc $V=\\dfrac{mv}{M}=\\dfrac{5\\times450}{750}=\\dfrac{2\\,250}{750}=3{,}0$ m/s.'
        },
        {
          statement: 'La quantité de mouvement $\\vec p$ d\'un point matériel de masse $m$ et de vitesse $\\vec v$ s\'exprime :',
          type: 'multiple-choice',
          options: [
            '$\\vec p=\\dfrac{m}{\\vec v}$',
            '$\\vec p=m\\vec v$',
            '$\\vec p=m\\vec a$',
            '$\\vec p=\\dfrac{1}{2}m\\vec v^2$'
          ],
          answer: 1,
          points: 2,
          correction: 'La quantité de mouvement est définie par $\\vec p=m\\vec v$ : c\'est un vecteur, colinéaire et de même sens que la vitesse.'
        },
        {
          statement: 'Un patineur léger et un patineur lourd, tous deux immobiles, se repoussent mutuellement avec la même paire de forces (action-réaction). Comment se comparent les forces qu\'ils subissent chacun ?',
          type: 'multiple-choice',
          options: [
            'Le patineur lourd subit une force plus grande, car il est plus massif',
            'Le patineur léger subit une force plus grande, car il accélère plus',
            'Les deux forces ont exactement la même norme, quelle que soit la masse de chacun',
            'La force dépend de la vitesse finale de chaque patineur'
          ],
          answer: 2,
          points: 2,
          correction: 'D\'après la troisième loi de Newton, les deux forces d\'un couple action-réaction ont toujours la même norme, indépendamment des masses des deux systèmes : seule leur <strong>accélération</strong> diffère ensuite ($a=F/m$), ce qui explique pourquoi le patineur le plus léger prend plus de vitesse.'
        }
      ]
    }
  });
