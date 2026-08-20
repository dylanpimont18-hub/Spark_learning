/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-modele-atome.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-modele-atome',
    level: 2, subject: 'physique',
    icon: '⚛️',
    title: 'Le modèle de l\'atome',
    subtitle: 'Structure de l\'atome, numéro atomique Z, nombre de masse A, répartition électronique, ions',
    keywords: ['Atome', 'Numéro atomique', 'Électron', 'Ion', 'Isotope'],
    physics: 'Comprendre la structure de l\'atome permet d\'expliquer la datation au carbone 14 en archéologie, le fonctionnement d\'un scanner médical utilisant des isotopes radioactifs, ou pourquoi le sodium métallique réagit violemment avec l\'eau en formant l\'ion $Na^+$.',

    cours: {
      intro: 'Toute la matière qui nous entoure, de l\'air que l\'on respire au métal d\'une pièce de monnaie, est constituée d\'<strong>atomes</strong>. Un atome est pourtant essentiellement... du vide : un minuscule <strong>noyau</strong>, extraordinairement dense, concentre presque toute sa masse, tandis qu\'un nuage d\'<strong>électrons</strong>, bien plus léger, occupe presque tout son volume.<br/><br/>Ce modèle simple permet pourtant d\'expliquer énormément de choses : pourquoi deux atomes appartiennent au même élément chimique, pourquoi certains atomes se transforment en ions, ou pourquoi deux isotopes d\'un même élément se comportent chimiquement de façon presque identique.',
      definitions: [
        { term: 'Numéro atomique $Z$', def: 'Nombre de protons contenus dans le noyau d\'un atome. Il caractérise l\'<strong>élément chimique</strong> : deux atomes de même $Z$ appartiennent au même élément.' },
        { term: 'Nombre de masse $A$', def: 'Nombre total de <strong>nucléons</strong> (protons + neutrons) dans le noyau : $A = Z + N$, où $N$ est le nombre de neutrons. Symbole complet de l\'atome : $^A_Z X$.' },
        { term: 'Électroneutralité', def: 'Un atome est électriquement neutre : il possède <strong>autant d\'électrons que de protons</strong>, soit $Z$ électrons pour $Z$ protons.' },
        { term: 'Ion', def: 'Espèce chimique obtenue quand un atome (ou groupe d\'atomes) gagne ou perd un ou plusieurs électrons, sans que son noyau change. <strong>Cation</strong> (perte d\'électrons, charge positive) ou <strong>anion</strong> (gain d\'électrons, charge négative).' }
      ],
      method: {
        title: 'Établir la structure électronique d\'un atome en 3 étapes',
        steps: [
          '<strong>Identifier le numéro atomique</strong> $Z$ (nombre de protons) : l\'atome neutre possède alors exactement $Z$ électrons.',
          '<strong>Répartir ces $Z$ électrons</strong> dans les couches électroniques en respectant l\'ordre de remplissage et leur capacité maximale : couche K ($2$ électrons maximum), puis couche L ($8$ électrons maximum), puis couche M.',
          '<strong>Vérifier</strong> que la somme des électrons de chaque couche est bien égale à $Z$, et que chaque couche interne est saturée avant de commencer à remplir la suivante.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèle en couches de l\'atome',
        title: 'Structure électronique de l\'atome de sodium',
        description: 'L\'atome de sodium $^{23}_{11}\\text{Na}$ possède $11$ protons, $12$ neutrons, et donc $11$ électrons répartis en trois couches : K ($2$ électrons), L ($8$ électrons), M ($1$ électron). <em>Le noyau est représenté bien plus gros que sa taille réelle, pour rester visible.</em>',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="atome2nde-title atome2nde-desc">
            <title id="atome2nde-title">Modele en couches de l'atome de sodium</title>
            <desc id="atome2nde-desc">Un noyau central porte l'etiquette Z egale onze. Autour de lui, trois cercles concentriques representent les couches electroniques K, L et M. Deux electrons sont places sur la couche K la plus proche du noyau, huit electrons regulierement espaces sur la couche L intermediaire, et un seul electron sur la couche M la plus exterieure. Une legende en bas indique la capacite de chaque couche : K deux electrons maximum, L huit electrons maximum, M ici un seul electron.</desc>

            <!-- couches electroniques (cercles de reference) -->
            <circle class="guide-line" fill="none" cx="280" cy="140" r="40"></circle>
            <circle class="guide-line" fill="none" cx="280" cy="140" r="75"></circle>
            <circle class="guide-line" fill="none" cx="280" cy="140" r="110"></circle>

            <!-- noyau -->
            <circle class="plot-point-alt" cx="280" cy="140" r="22"></circle>
            <text class="annotation-label" x="280" y="144" text-anchor="middle">Z = 11</text>

            <!-- electrons couche K (2) -->
            <circle class="plot-point" cx="280" cy="100" r="6"></circle>
            <circle class="plot-point" cx="280" cy="180" r="6"></circle>

            <!-- electrons couche L (8, tous les 45 degres) -->
            <circle class="plot-point" cx="355" cy="140" r="6"></circle>
            <circle class="plot-point" cx="333" cy="193" r="6"></circle>
            <circle class="plot-point" cx="280" cy="215" r="6"></circle>
            <circle class="plot-point" cx="227" cy="193" r="6"></circle>
            <circle class="plot-point" cx="205" cy="140" r="6"></circle>
            <circle class="plot-point" cx="227" cy="87" r="6"></circle>
            <circle class="plot-point" cx="280" cy="65" r="6"></circle>
            <circle class="plot-point" cx="333" cy="87" r="6"></circle>

            <!-- electron couche M (1) -->
            <circle class="plot-point" cx="383" cy="178" r="6"></circle>

            <!-- legende -->
            <text class="tick-label" x="150" y="280" text-anchor="middle">K : 2 e⁻ max</text>
            <text class="tick-label" x="280" y="280" text-anchor="middle">L : 8 e⁻ max</text>
            <text class="tick-label" x="410" y="280" text-anchor="middle">M : ici 1 e⁻</text>
          </svg>
        `,
        notes: [
          'Le noyau contient $11$ protons ($Z = 11$) et $12$ neutrons ($N = A - Z = 23 - 11 = 12$), soit $23$ nucléons au total ($A = 23$).',
          'L\'atome étant neutre, il possède exactement $11$ électrons, répartis couche par couche en respectant l\'ordre de remplissage : $2$ sur K (saturée), $8$ sur L (saturée), puis $1$ seul sur M — soit $2 + 8 + 1 = 11$ électrons au total.',
          'La couche M n\'est pas saturée ($1$ électron sur $8$ possibles) : c\'est cet unique électron externe, facile à perdre, qui explique pourquoi le sodium forme si facilement l\'ion $Na^+$ (cation).'
        ],
        reading: 'Repère le noyau au centre (Z = 11), puis compte les électrons sur chaque couche en partant de la plus proche (K), jusqu\'à la plus éloignée (M) : $2$, puis $8$, puis $1$.',
        caption: 'Modèle en couches de l\'atome de sodium $^{23}_{11}\\text{Na}$ : structure électronique K(2) L(8) M(1), soit $11$ électrons au total.'
      },
      example: {
        statement: 'L\'aluminium a pour numéro atomique $Z = 13$.<br/><br/>Détermine sa structure électronique, c\'est-à-dire la répartition de ses $13$ électrons dans les couches K, L, M.',
        steps: [
          'L\'atome d\'aluminium étant neutre, il possède exactement $Z = 13$ électrons.',
          'Remplissage de la couche K (maximum $2$ électrons) : $2$ électrons y sont placés. Il en reste $13 - 2 = 11$.',
          'Remplissage de la couche L (maximum $8$ électrons) : $8$ électrons y sont placés. Il en reste $11 - 8 = 3$.',
          'Les $3$ électrons restants occupent la couche M (non saturée, mais c\'est la dernière couche occupée).'
        ],
        answer: 'Structure électronique de l\'aluminium : K(2) L(8) M(3). Vérification : $2 + 8 + 3 = 13 = Z$. ✓'
      },
      formulas: [
        '$A = Z + N$ (nombre de masse = numéro atomique + nombre de neutrons)',
        'Symbole de l\'atome : $^A_Z X$',
        'Atome neutre : nombre d\'électrons $= Z$ = nombre de protons',
        'Répartition en couches : K ($2$ électrons max), puis L ($8$ électrons max), puis M'
      ],
      recap: [
        'L\'atome est formé d\'un <strong>noyau</strong> (protons + neutrons = nucléons) entouré d\'un nuage d\'<strong>électrons</strong>.',
        'Le numéro atomique <strong>Z</strong> (nombre de protons) caractérise l\'élément chimique ; le nombre de masse <strong>A</strong> compte tous les nucléons.',
        'Un atome neutre possède autant d\'<strong>électrons</strong> que de <strong>protons</strong> ($Z$).',
        'Les électrons se répartissent en couches K ($2$ max), L ($8$ max), puis M, dans cet ordre de remplissage.'
      ],
      piege: 'Une confusion très fréquente consiste à inverser les rôles de $Z$ et $A$ dans le symbole $^A_Z X$, ou à oublier que le nombre de neutrons se calcule par $N = A - Z$ et non l\'inverse. Attention : $Z$ (en bas) est le numéro atomique, le nombre de <strong>protons</strong>, qui définit l\'élément chimique ; $A$ (en haut) est le nombre de masse, le nombre <strong>total</strong> de nucléons (protons + neutrons), toujours supérieur ou égal à $Z$.'
    },

    quiz: [
      {
        q: 'Un atome a pour numéro atomique $Z = 8$ et nombre de masse $A = 16$. Combien de neutrons contient son noyau ?',
        options: [
          '$N = 8$',
          '$N = 16$',
          '$N = 24$',
          '$N = 2$'
        ],
        answer: 0,
        correction: '$N = A - Z = 16 - 8 = 8$ neutrons.'
      },
      {
        q: 'Un atome neutre possède $15$ protons. Combien d\'électrons possède-t-il ?',
        options: [
          '$15$ électrons',
          '$0$ électron',
          '$30$ électrons',
          '$7{,}5$ électrons'
        ],
        answer: 0,
        correction: 'Un atome <strong>neutre</strong> possède exactement autant d\'électrons que de protons (électroneutralité) : $15$ électrons.'
      },
      {
        q: 'Quelle est la répartition électronique correcte d\'un atome ayant $Z = 9$ électrons, dans les couches K puis L ?',
        options: [
          'K(9)',
          'K(2) L(7)',
          'K(8) L(1)',
          'K(2) L(8), et $-1$ électron sur M'
        ],
        answer: 1,
        correction: 'La couche K se sature à $2$ électrons maximum (pas $8$ ou $9$) : on place donc $2$ électrons sur K, puis les $9 - 2 = 7$ restants sur L, qui peut en accueillir jusqu\'à $8$ : K(2) L(7). Total : $2 + 7 = 9 = Z$. ✓'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['neutrons', 'electrons_M']);

        if (typeExo === 'neutrons') {
          var Z = rand(3, 30);
          var N0 = rand(0, 20);
          var A = Z + N0;
          var contexte = pick([
            'lors d\'une séance de travaux pratiques de chimie',
            'sur une fiche de classification périodique',
            'lors d\'une analyse isotopique en laboratoire',
            'dans un exercice de datation radioactive',
            'lors de l\'étude d\'un noyau atomique en cours'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', un noyau atomique a pour numéro atomique $Z = ' + Z + '$ et nombre de masse $A = ' + A + '$.<br/><br/>Calcule le nombre de neutrons $N$ de ce noyau.',
            answer: N0,
            tolerance: 0,
            unit: '',
            hint: 'Utilise $A = Z + N$, donc $N = A - Z$.',
            solution: [
              'Relation entre $A$, $Z$ et $N$ : $A = Z + N$, donc $N = A - Z$.',
              'Application numérique : $N = ' + A + ' - ' + Z + '$.',
              'Résultat : $N = ' + N0 + '$ neutrons.'
            ]
          };
        } else {
          var Zm = rand(11, 18);
          var electronsM = Zm - 10;
          var contexte2 = pick([
            'un atome étudié en classification périodique',
            'un élément analysé lors d\'un exercice de structure atomique',
            'un noyau présenté dans un exercice de cours',
            'un atome dont on établit la structure électronique'
          ]);
          return {
            statement: 'Pour ' + contexte2 + ', on considère un atome neutre de numéro atomique $Z = ' + Zm + '$. Ses électrons se répartissent en couches K, L, puis M (K et L étant saturées).<br/><br/>Calcule le nombre d\'électrons présents sur la couche M.',
            answer: electronsM,
            tolerance: 0,
            unit: '',
            hint: 'La couche K contient $2$ électrons, la couche L en contient $8$ (saturées) : le reste va sur M.',
            solution: [
              'Électrons sur K (saturée) : $2$. Électrons sur L (saturée) : $8$. Total sur K et L : $2 + 8 = 10$.',
              'Électrons restants sur M : $Z - 10 = ' + Zm + ' - 10$.',
              'Résultat : $' + electronsM + '$ électron(s) sur la couche M.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le chlore naturel est un mélange de deux isotopes : le chlore 35 ($^{35}_{17}\\text{Cl}$) et le chlore 37 ($^{37}_{17}\\text{Cl}$).',
      tasks: [
        'Justifier que ces deux noyaux appartiennent au même élément chimique.',
        'Calculer le nombre de neutrons de chacun de ces deux isotopes.',
        'Un atome de chlore neutre, quel que soit l\'isotope considéré, possède combien d\'électrons ? Justifier.'
      ],
      solutions: [
        'Les deux noyaux ont le même numéro atomique $Z = 17$ (même nombre de protons) : par définition, ils appartiennent au même <strong>élément chimique</strong>, le chlore. Seul leur nombre de masse $A$ diffère ($35$ et $37$), donc leur nombre de neutrons : ce sont des <strong>isotopes</strong>.',
        'Chlore 35 : $N = A - Z = 35 - 17 = 18$ neutrons. Chlore 37 : $N = 37 - 17 = 20$ neutrons.',
        'Un atome neutre possède autant d\'électrons que de protons, soit $Z = 17$ électrons, <strong>quel que soit l\'isotope</strong> : le nombre de neutrons n\'influence pas le nombre d\'électrons.'
      ],
      finalAnswer: '$N(\\text{Cl-35}) = 18$ et $N(\\text{Cl-37}) = 20$ neutrons ; $17$ électrons dans les deux cas. Les isotopes d\'un même élément ont des propriétés chimiques quasiment identiques (déterminées par le nombre d\'électrons), mais des masses légèrement différentes.'
    },

    evaluation: {
      title: 'Évaluation — Le modèle de l\'atome',
      duration: '30 min',
      questions: [
        {
          statement: 'Un noyau atomique a pour numéro atomique $Z = 6$ et nombre de masse $A = 13$. Calculer son nombre de neutrons $N$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$N = A - Z = 13 - 6 = 7$ neutrons.'
        },
        {
          statement: 'Le numéro atomique $Z$ d\'un atome représente :',
          type: 'multiple-choice',
          options: [
            'Le nombre de neutrons de son noyau',
            'Le nombre de protons de son noyau',
            'Le nombre total de nucléons',
            'Le nombre de couches électroniques'
          ],
          answer: 1,
          points: 2,
          correction: 'Le numéro atomique $Z$ est le nombre de <strong>protons</strong> du noyau. C\'est lui qui définit l\'élément chimique.'
        },
        {
          statement: 'Un atome neutre a pour numéro atomique $Z = 17$. Combien d\'électrons possède-t-il ?',
          type: 'numeric',
          answer: 17,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Par électroneutralité, un atome neutre possède autant d\'électrons que de protons : $17$ électrons.'
        },
        {
          statement: 'Quelle est la répartition électronique correcte d\'un atome de numéro atomique $Z = 12$ ?',
          type: 'multiple-choice',
          options: [
            'K(2) L(8) M(2)',
            'K(2) L(10)',
            'K(4) L(8)',
            'K(2) L(8) M(0) L(2)'
          ],
          answer: 0,
          points: 3,
          correction: 'La couche K se sature à $2$, la couche L à $8$ : il reste $12 - 2 - 8 = 2$ électrons pour la couche M, soit K(2) L(8) M(2). Les autres propositions dépassent la capacité maximale d\'une couche (L ne peut pas dépasser $8$, K ne peut pas dépasser $2$).'
        },
        {
          statement: 'Un atome qui perd un électron devient :',
          type: 'multiple-choice',
          options: [
            'Un anion (charge négative)',
            'Un cation (charge positive)',
            'Un isotope',
            'Un nucléon'
          ],
          answer: 1,
          points: 1,
          correction: 'En perdant un électron (chargé négativement), l\'atome devient globalement chargé positivement : c\'est un <strong>cation</strong>.'
        }
      ]
    }
  });

