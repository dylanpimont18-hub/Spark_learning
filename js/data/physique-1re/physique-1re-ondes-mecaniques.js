/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-ondes-mecaniques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-ondes-mecaniques',
    level: 2, subject: 'physique',
    icon: '🌊',
    title: 'Ondes mécaniques progressives',
    subtitle: 'Propagation sans transport de matière, célérité, ondes périodiques, longueur d\'onde et retard temporel',
    keywords: ['Onde mécanique', 'Célérité', 'Longueur d\'onde', 'Période', 'Retard'],
    physics: 'Les ondes mécaniques sont partout dans l\'industrie et la vie courante : ondes sismiques étudiées en génie civil, ultrasons utilisés pour le contrôle non destructif de pièces mécaniques ou l\'imagerie médicale, vagues étudiées en ingénierie portuaire, vibrations dans les structures. Comprendre leur célérité et leur périodicité permet d\'anticiper leurs effets et de les exploiter.',

    cours: {
      intro: 'Une <strong>onde mécanique progressive</strong> est la propagation d\'une perturbation dans un milieu matériel (corde, eau, air, sol…), <strong>sans transport de matière</strong> : chaque point du milieu oscille autour de sa position d\'équilibre, mais ne se déplace pas avec l\'onde. Seule l\'<strong>énergie</strong> se propage.<br/><br/>On distingue les ondes <strong>transversales</strong>, où la perturbation est perpendiculaire à la direction de propagation (onde sur une corde), des ondes <strong>longitudinales</strong>, où la perturbation est parallèle à la direction de propagation (onde sonore dans l\'air, onde sur un ressort).<br/><br/>La vitesse à laquelle la perturbation se propage est appelée <strong>célérité</strong> $v$ : elle dépend du milieu de propagation, pas de la source qui a créé l\'onde. Lorsque l\'onde est <strong>périodique</strong> (source qui oscille régulièrement), elle est caractérisée à la fois par une périodicité temporelle (la <strong>période</strong> $T$) et une périodicité spatiale (la <strong>longueur d\'onde</strong> $\\lambda$).',
      definitions: [
        { term: 'Onde mécanique progressive', def: 'Propagation d\'une perturbation dans un milieu matériel, sans transport de matière : seule l\'énergie se propage, chaque point du milieu oscille sur place.' },
        { term: 'Célérité ($v$)', def: 'Vitesse de propagation de la perturbation dans le milieu, en m/s. Elle dépend des propriétés du milieu (nature, température, tension…), pas de la source.' },
        { term: 'Onde transversale / longitudinale', def: 'Une onde est transversale si la perturbation est perpendiculaire à la direction de propagation (ex. corde), longitudinale si elle lui est parallèle (ex. son, ressort).' },
        { term: 'Longueur d\'onde ($\\lambda$)', def: 'Distance parcourue par l\'onde pendant une période $T$ : $\\lambda = v \\times T$, en mètres. C\'est la période spatiale de l\'onde, visible sur un graphe $y = f(x)$ à un instant donné.' },
        { term: 'Retard temporel ($\\tau$)', def: 'Durée nécessaire à la perturbation pour parcourir une distance $d$ entre deux points du milieu : $\\tau = \\dfrac{d}{v}$. Le point le plus éloigné de la source reproduit le même mouvement que le point source, avec ce retard.' }
      ],
      method: {
        title: 'Analyser un signal d\'onde périodique en 3 étapes',
        steps: [
          '<strong>Identifier le type de graphe</strong> : un graphe $y = f(t)$ en un point fixe du milieu donne accès à la <strong>période temporelle</strong> $T$ (durée d\'un motif) ; un graphe $y = f(x)$ à un instant fixé donne accès à la <strong>longueur d\'onde</strong> $\\lambda$ (distance d\'un motif).',
          '<strong>Lire graphiquement</strong> $T$ ou $\\lambda$ en repérant la distance entre deux motifs identiques consécutifs (par exemple deux crêtes successives).',
          '<strong>Relier les deux grandeurs</strong> grâce à la célérité : $\\lambda = v \\times T$, ou pour un retard entre deux points distants de $d$ : $\\tau = \\dfrac{d}{v}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Onde progressive périodique — représentation spatiale',
        title: 'Aspect d\'une onde transversale à un instant donné : amplitude et longueur d\'onde',
        description: 'Représentation de l\'élongation $y$ en fonction de la position $x$, à un instant $t$ fixé, pour une onde transversale périodique se propageant vers la droite. La distance entre deux crêtes consécutives est la longueur d\'onde $\\lambda$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="ondes1re-title ondes1re-desc">
            <title id="ondes1re-title">Elongation en fonction de la position pour une onde transversale periodique</title>
            <desc id="ondes1re-desc">Un graphique represente l'elongation y en fonction de la position x a un instant fixe. La courbe est une sinusoide oscillant symetriquement au-dessus et en-dessous d'une ligne de base horizontale representant la position d'equilibre. Deux cretes consecutives sont reperees par des lignes pointillees verticales reliees par une double cotation horizontale au-dessus de la courbe, indiquant la longueur d'onde. Une cotation verticale a gauche de la premiere crete indique l'amplitude entre la ligne de base et le sommet de la courbe. Une fleche en haut a droite indique le sens de propagation de l'onde vers la droite.</desc>

            <defs>
              <marker id="arrow-phys1re-onde" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="55" y1="150" x2="540" y2="150" marker-end="url(#arrow-phys1re-onde)"></line>
            <line class="frame-line" x1="60" y1="235" x2="60" y2="35" marker-end="url(#arrow-phys1re-onde)"></line>
            <text class="tick-label" x="546" y="156" text-anchor="start">x</text>
            <text class="tick-label" x="60" y="25" text-anchor="middle">y</text>

            <!-- courbe (sinusoide calculee, 2 longueurs d'onde) -->
            <path class="curve-main" fill="none" d="M60,150.0 L68,134.8 L76,120.4 L84,107.3 L92,96.3 L100,87.9 L108,82.3 L116,80.1 L124,81.1 L132,85.4 L140,92.8 L148,102.9 L156,115.3 L164,129.3 L172,144.3 L180,159.5 L188,174.3 L196,188.0 L204,199.8 L212,209.3 L220,216.0 L228,219.5 L236,219.7 L244,216.6 L252,210.3 L260,201.2 L268,189.6 L276,176.1 L284,161.4 L292,146.2 L300,131.1 L308,117.0 L316,104.4 L324,93.9 L332,86.2 L340,81.5 L348,80.0 L356,81.9 L364,87.0 L372,95.1 L380,105.8 L388,118.7 L396,133.0 L404,148.1 L412,163.3 L420,177.9 L428,191.1 L436,202.4 L444,211.3 L452,217.1 L460,219.8 L468,219.2 L476,215.3 L484,208.3 L492,198.5 L500,186.4 L508,172.5 L516,157.6"></path>

            <!-- ligne d'equilibre (deja tracee par l'axe x a y=150) -->

            <!-- cotation longueur d'onde (entre deux cretes) -->
            <line class="grid-line" x1="117.5" y1="45" x2="117.5" y2="80"></line>
            <line class="grid-line" x1="347.5" y1="45" x2="347.5" y2="80"></line>
            <line class="guide-line" x1="117.5" y1="52" x2="347.5" y2="52"></line>
            <text class="annotation-label" x="232.5" y="44" text-anchor="middle">λ</text>

            <!-- cotation amplitude -->
            <line class="guide-line" x1="100" y1="150" x2="100" y2="80"></line>
            <line class="grid-line" x1="94" y1="150" x2="106" y2="150"></line>
            <line class="grid-line" x1="94" y1="80" x2="106" y2="80"></line>
            <text class="annotation-label" x="84" y="118" text-anchor="end">A</text>

            <!-- sens de propagation -->
            <line class="curve-main" x1="430" y1="45" x2="490" y2="45" marker-end="url(#arrow-phys1re-onde)"></line>
            <text class="label-soft" x="460" y="34" text-anchor="middle">Sens de propagation</text>

            <text class="label-soft" x="300" y="270" text-anchor="middle">Position d'équilibre : ligne de base (y = 0)</text>
          </svg>
        `,
        notes: [
          'La distance entre deux crêtes consécutives (ou deux points identiques quelconques) est la <strong>longueur d\'onde</strong> $\\lambda$, exprimée en mètres.',
          'L\'<strong>amplitude</strong> $A$ mesure l\'écart maximal entre la position d\'équilibre et l\'élongation maximale : elle ne dépend pas de la célérité, seulement de l\'énergie apportée par la source.',
          'Ce graphe représente l\'onde à un <strong>instant figé</strong> ($y$ en fonction de $x$). Pour observer la période temporelle $T$, il faudrait au contraire figer la position et représenter $y$ en fonction du temps $t$ en un point donné.'
        ],
        reading: 'Repère deux crêtes successives et lis la distance horizontale qui les sépare : c\'est la longueur d\'onde $\\lambda$. Repère ensuite l\'écart vertical entre la ligne de base et une crête : c\'est l\'amplitude $A$.',
        caption: 'Aspect spatial d\'une onde transversale progressive périodique : la longueur d\'onde $\\lambda$ sépare deux motifs identiques, l\'amplitude $A$ mesure l\'écart maximal à l\'équilibre.'
      },
      example: {
        statement: 'Une onde se propage à la surface de l\'eau d\'un bassin avec une célérité $v = 1{,}5$ m/s. Un flotteur, mis en mouvement par l\'onde, oscille avec une période $T = 0{,}8$ s.<br/><br/>Calculer la longueur d\'onde $\\lambda$ de cette onde.',
        steps: [
          'La longueur d\'onde est la distance parcourue par l\'onde pendant une période : $\\lambda = v \\times T$.',
          'Application numérique : $\\lambda = 1{,}5 \\times 0{,}8$.',
          'Résultat : $\\lambda = 1{,}2$ m.'
        ],
        answer: '$\\lambda = 1{,}2$ m. Sur la surface de l\'eau, deux crêtes consécutives de la vague seraient donc distantes de $1{,}2$ m à cet instant.'
      },
      formulas: [
        'Célérité (définition) : $v = \\dfrac{d}{t}$',
        'Longueur d\'onde : $\\lambda = v \\times T = \\dfrac{v}{f}$',
        'Fréquence et période : $f = \\dfrac{1}{T}$',
        'Retard temporel entre deux points distants de $d$ : $\\tau = \\dfrac{d}{v}$'
      ],
      recap: [
        'Une onde mécanique transporte de l\'<strong>énergie</strong>, jamais de matière : chaque point du milieu oscille sur place.',
        'La <strong>célérité</strong> $v$ dépend uniquement du milieu de propagation, pas de la source ni de la fréquence de l\'onde.',
        'La <strong>longueur d\'onde</strong> $\\lambda$ (période spatiale, lue sur un graphe $y=f(x)$) et la <strong>période</strong> $T$ (période temporelle, lue sur un graphe $y=f(t)$) sont reliées par $\\lambda = v \\times T$.',
        'Le <strong>retard</strong> $\\tau = \\dfrac{d}{v}$ traduit le fait qu\'un point éloigné de la source reproduit le même mouvement qu\'elle, avec un décalage dans le temps.'
      ],
      piege: 'Une confusion fréquente consiste à mélanger la longueur d\'onde $\\lambda$ et la période $T$, en les lisant sur le mauvais type de graphe. Attention, $\\lambda$ se lit uniquement sur un graphe $y = f(x)$ à un instant figé (distance entre deux crêtes), tandis que $T$ se lit uniquement sur un graphe $y = f(t)$ en un point fixé (durée entre deux crêtes) : ce sont deux grandeurs de nature différente, reliées par $\\lambda = v \\times T$.'
    },

    quiz: [
      {
        q: 'Lorsqu\'une onde mécanique se propage à la surface de l\'eau, que transporte-t-elle réellement ?',
        options: [
          'De la matière : l\'eau se déplace avec l\'onde',
          'De l\'énergie, sans transport de matière',
          'De la matière et de l\'énergie à parts égales',
          'Ni matière ni énergie'
        ],
        answer: 1,
        correction: 'Une onde mécanique transporte de l\'<strong>énergie</strong> sans transport de matière : chaque molécule d\'eau oscille autour de sa position d\'équilibre, mais ne se déplace pas horizontalement avec l\'onde.'
      },
      {
        q: 'Sur quel type de graphe peut-on lire directement la longueur d\'onde $\\lambda$ d\'une onde périodique ?',
        options: [
          'Un graphe $y = f(t)$ en un point fixé',
          'Un graphe $y = f(x)$ à un instant fixé',
          'Les deux types de graphe indifféremment',
          'Aucun graphe ne permet de lire $\\lambda$ directement'
        ],
        answer: 1,
        correction: 'La longueur d\'onde $\\lambda$ est une période <strong>spatiale</strong> : elle se lit sur un graphe $y = f(x)$ tracé à un instant donné, en mesurant la distance entre deux motifs identiques.'
      },
      {
        q: 'Une onde de célérité $v = 340$ m/s (son dans l\'air) parcourt une distance $d = 680$ m entre une source et un observateur. Quel est le retard $\\tau$ perçu par l\'observateur ?',
        options: [
          '$\\tau = 0{,}5$ s',
          '$\\tau = 2$ s',
          '$\\tau = 231\\,200$ s',
          '$\\tau = 340$ s'
        ],
        answer: 1,
        correction: 'Le retard vaut $\\tau = \\dfrac{d}{v} = \\dfrac{680}{340} = 2$ s.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['celerite', 'longueurOnde']);

        if (typeExo === 'celerite') {
          var d = pick([10, 20, 34, 50, 68, 100, 150]);
          var v = pick([2, 5, 10, 17, 25, 340, 1500]);
          var t = parseFloat((d / v).toFixed(3));
          var contexte = pick([
            'une onde sismique enregistrée par deux capteurs',
            'un signal sonore émis dans un atelier',
            'une onde ultrasonore utilisée pour un contrôle non destructif',
            'une vague se propageant le long d\'un quai',
            'une onde mécanique sur une corde tendue en travaux pratiques'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', une onde mécanique de célérité $v = ' + v + '$ m/s parcourt une distance $d = ' + d + '$ m entre deux points du milieu.<br/><br/>Calcule le retard temporel $\\tau$ entre ces deux points (en s, arrondi au millième).',
            answer: t,
            tolerance: Math.max(0.001, parseFloat((t * 0.03).toFixed(3))),
            unit: 's',
            hint: 'Le retard temporel se calcule avec $\\tau = \\dfrac{d}{v}$.',
            solution: [
              'Retard temporel : $\\tau = \\dfrac{d}{v} = \\dfrac{' + d + '}{' + v + '}$.',
              'Résultat : $\\tau \\approx ' + fr(t, 3) + '$ s.'
            ]
          };
        } else {
          var vv = pick([1.2, 1.5, 2, 5, 10, 340]);
          var T = randFloat(0.05, 2, 2);
          var lam = parseFloat((vv * T).toFixed(3));
          var contexte2 = pick([
            'une onde à la surface d\'un bassin',
            'une onde sonore émise par un haut-parleur',
            'une onde produite en bout de corde en travaux pratiques',
            'une onde ultrasonore de contrôle industriel'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', une onde périodique se propage avec une célérité $v = ' + fr(vv, vv % 1 === 0 ? 0 : 1) + '$ m/s. La source qui la crée oscille avec une période $T = ' + fr(T, 2) + '$ s.<br/><br/>Calcule la longueur d\'onde $\\lambda$ correspondante (en m, arrondie au millième).',
            answer: lam,
            tolerance: Math.max(0.001, parseFloat((lam * 0.03).toFixed(3))),
            unit: 'm',
            hint: 'La longueur d\'onde se calcule avec $\\lambda = v \\times T$.',
            solution: [
              'Longueur d\'onde : $\\lambda = v \\times T = ' + fr(vv, vv % 1 === 0 ? 0 : 1) + ' \\times ' + fr(T, 2) + '$.',
              'Résultat : $\\lambda \\approx ' + fr(lam, 3) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un capteur de houle installé au large d\'un port enregistre des vagues qui se propagent avec une célérité $v = 4$ m/s. La période des vagues, mesurée par le capteur, est $T = 6$ s. Un second capteur est installé sur la jetée, à une distance $d = 120$ m du premier.',
      tasks: [
        'Calculer la longueur d\'onde $\\lambda$ de la houle.',
        'Calculer le retard temporel $\\tau$ entre le passage d\'une même crête au premier capteur puis au second.',
        'Sachant que l\'amplitude des vagues mesurée par le premier capteur est $A_1 = 0{,}8$ m, que peut-on dire de l\'amplitude $A_2$ mesurée par le second capteur, en l\'absence de tout phénomène d\'atténuation ou de réflexion ?'
      ],
      solutions: [
        'Longueur d\'onde : $\\lambda = v \\times T = 4 \\times 6 = 24$ m.',
        'Retard temporel : $\\tau = \\dfrac{d}{v} = \\dfrac{120}{4} = 30$ s.',
        'La célérité et la période d\'une onde mécanique ne dépendent que du milieu et de la source, pas de la distance parcourue. En l\'absence d\'atténuation, l\'<strong>amplitude</strong> de l\'onde se conserve également : on aurait donc $A_2 = A_1 = 0{,}8$ m, la houle arrivant simplement avec un retard $\\tau = 30$ s par rapport au premier capteur.'
      ],
      finalAnswer: '$\\lambda = 24$ m et $\\tau = 30$ s : le second capteur, situé $30$ s plus \"loin\" dans le temps, enregistre exactement le même signal que le premier, décalé de ce retard.'
    },

    evaluation: {
      title: 'Évaluation — Ondes mécaniques progressives',
      duration: '30 min',
      questions: [
        {
          statement: 'Une onde mécanique progressive transporte, entre deux points du milieu :',
          type: 'multiple-choice',
          options: [
            'De la matière uniquement',
            'De l\'énergie, sans transport de matière',
            'De la matière et de l\'énergie',
            'Ni matière ni énergie'
          ],
          answer: 1,
          points: 2,
          correction: 'Une onde mécanique transporte de l\'énergie sans déplacer la matière du milieu : chaque point oscille sur place autour de sa position d\'équilibre.'
        },
        {
          statement: 'Une onde de célérité $v = 250$ m/s parcourt une distance $d = 500$ m. Calculer le retard temporel $\\tau$ (en s).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.05,
          unit: 's',
          points: 2,
          correction: '$\\tau = \\dfrac{d}{v} = \\dfrac{500}{250} = 2$ s.'
        },
        {
          statement: 'Une onde périodique a une célérité $v = 3$ m/s et une période $T = 0{,}5$ s. Calculer sa longueur d\'onde $\\lambda$ (en m).',
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.05,
          unit: 'm',
          points: 2,
          correction: '$\\lambda = v \\times T = 3 \\times 0{,}5 = 1{,}5$ m.'
        },
        {
          statement: 'Dans une onde <strong>transversale</strong>, la perturbation est :',
          type: 'multiple-choice',
          options: [
            'Parallèle à la direction de propagation',
            'Perpendiculaire à la direction de propagation',
            'Toujours verticale, quelle que soit la direction de propagation',
            'Nulle par définition'
          ],
          answer: 1,
          points: 2,
          correction: 'Une onde est transversale lorsque la perturbation du milieu est perpendiculaire à la direction de propagation de l\'onde (exemple : onde sur une corde).'
        },
        {
          statement: 'La longueur d\'onde $\\lambda$ se lit graphiquement sur :',
          type: 'multiple-choice',
          options: [
            'Un graphe $y = f(t)$ en un point fixé',
            'Un graphe $y = f(x)$ à un instant fixé',
            'Un graphe de l\'amplitude en fonction de la célérité',
            'Un graphe de la fréquence en fonction du temps'
          ],
          answer: 1,
          points: 2,
          correction: 'La longueur d\'onde, période spatiale de l\'onde, se lit sur un graphe représentant l\'élongation $y$ en fonction de la position $x$, à un instant donné.'
        }
      ]
    }
  });
