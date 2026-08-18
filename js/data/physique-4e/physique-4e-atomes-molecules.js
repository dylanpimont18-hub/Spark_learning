/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-atomes-molecules.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-atomes-molecules',
    level: 1, subject: 'physique',
    icon: '⚛️',
    title: 'Les atomes et les molécules',
    subtitle: 'Constitution de la matière : atome, noyau, électrons, éléments chimiques, molécules et formules chimiques',
    keywords: ['Atome', 'Molécule', 'Noyau', 'Électron', 'Élément chimique', 'Formule chimique'],
    physics: 'Comprendre les atomes et les molécules permet d\'expliquer la composition de l\'air que l\'on respire (dioxygène $O_2$, diazote $N_2$), de l\'eau que l\'on boit ($H_2O$), ou encore la formation de la rouille sur une pièce en fer. C\'est la base de toute la chimie, de la cuisine à l\'industrie pharmaceutique.',

    cours: {
      intro: 'Toute la matière qui nous entoure, aussi variée soit-elle, est constituée d\'un tout petit nombre de « briques » de base appelées <strong>atomes</strong>. Un atome est une particule extrêmement petite (environ un dix-milliardième de mètre de diamètre), invisible à l\'œil nu et même au microscope optique.<br/><br/>Chaque atome possède un <strong>noyau</strong> central, minuscule mais très dense, autour duquel se déplacent des <strong>électrons</strong>. Le noyau est constitué de deux types de particules : les <strong>protons</strong>, chargés positivement, et les <strong>neutrons</strong>, électriquement neutres.<br/><br/>Quand plusieurs atomes s\'associent entre eux par des <strong>liaisons chimiques</strong>, ils forment une <strong>molécule</strong>. L\'eau ($H_2O$), le dioxygène ($O_2$) ou le dioxyde de carbone ($CO_2$) sont des exemples de molécules que l\'on rencontre au quotidien.',
      definitions: [
        { term: 'Atome', def: 'Plus petite particule de matière conservant l\'identité d\'un élément chimique. Il est constitué d\'un <strong>noyau</strong> (protons + neutrons) entouré d\'<strong>électrons</strong>. Un atome est électriquement <strong>neutre</strong> : il possède autant d\'électrons que de protons.' },
        { term: 'Élément chimique', def: 'Caractérisé par son <strong>numéro atomique</strong> $Z$, c\'est-à-dire son nombre de protons. Chaque élément est représenté par un <strong>symbole chimique</strong> à une ou deux lettres (la première toujours en majuscule) : $C$ pour le carbone, $O$ pour l\'oxygène, $H$ pour l\'hydrogène, $N$ pour l\'azote.' },
        { term: 'Molécule', def: 'Assemblage de plusieurs atomes reliés entre eux par des liaisons chimiques. Sa <strong>formule chimique</strong> indique la nature et le nombre de chaque atome présent, à l\'aide d\'un indice placé en bas à droite du symbole (ex. $H_2O$ : 2 atomes d\'hydrogène, 1 atome d\'oxygène).' },
        { term: 'Corps pur simple / corps pur composé', def: 'Un <strong>corps pur simple</strong> ne contient qu\'un seul type d\'atome (ex. $O_2$, $N_2$). Un <strong>corps pur composé</strong> contient plusieurs types d\'atomes différents (ex. $H_2O$, $CO_2$).' }
      ],
      method: {
        title: 'Lire et interpréter une formule chimique en 3 étapes',
        steps: [
          '<strong>Repérer chaque symbole chimique</strong> présent dans la formule : chaque symbole commence toujours par une lettre majuscule, éventuellement suivie d\'une lettre minuscule (ex. dans $CH_4$, on repère $C$ et $H$).',
          '<strong>Lire l\'indice</strong> placé en bas à droite de chaque symbole : il indique le nombre d\'atomes de cet élément présents dans la molécule. Un symbole sans indice compte pour <strong>1 seul atome</strong>.<br/>Exemple : dans $CH_4$, l\'indice $4$ après $H$ signifie 4 atomes d\'hydrogène ; le $C$ sans indice signifie 1 seul atome de carbone.',
          '<strong>Additionner tous les indices</strong> pour obtenir le nombre total d\'atomes contenus dans une molécule.<br/>Exemple : $CH_4$ contient $1 + 4 = 5$ atomes au total.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Constitution de la matière',
        title: 'De l\'atome à la molécule : deux modèles à l\'échelle microscopique',
        description: 'Comparaison entre le modèle simplifié d\'un atome isolé, avec son noyau et ses électrons répartis sur des couches, et une molécule, assemblage de plusieurs atomes reliés par des liaisons chimiques.',
        svg: `
          <svg viewBox="0 0 560 280" role="img" aria-labelledby="atmol-title atmol-desc">
            <title id="atmol-title">Modele simplifie de l'atome de carbone et molecule d'eau</title>
            <desc id="atmol-desc">A gauche, un atome de carbone est represente par un noyau central entoure de deux couches electroniques en pointilles : deux electrons sur la premiere couche, quatre electrons sur la seconde couche, soit six electrons au total, autant que de protons dans le noyau. A droite, une molecule d'eau est representee par un atome d'oxygene central relie par deux liaisons a deux atomes d'hydrogene, formant une forme coudee avec un angle d'environ cent quatre degres.</desc>

            <!-- Panneau A : atome de carbone -->
            <text class="annotation-label" x="140" y="30" text-anchor="middle">Atome de carbone (Z = 6)</text>

            <circle class="guide-line" fill="none" cx="140" cy="150" r="88"></circle>
            <circle class="guide-line" fill="none" cx="140" cy="150" r="50"></circle>

            <circle class="plot-point" cx="140" cy="100" r="5"></circle>
            <circle class="plot-point" cx="140" cy="200" r="5"></circle>
            <circle class="plot-point" cx="202" cy="88" r="5"></circle>
            <circle class="plot-point" cx="78" cy="88" r="5"></circle>
            <circle class="plot-point" cx="78" cy="212" r="5"></circle>
            <circle class="plot-point" cx="202" cy="212" r="5"></circle>

            <circle class="plot-point-alt" cx="140" cy="150" r="16"></circle>

            <!-- Panneau B : molecule d'eau -->
            <text class="annotation-label" x="420" y="30" text-anchor="middle">Molécule d'eau (H₂O)</text>

            <line class="frame-line" x1="420" y1="140" x2="361" y2="186"></line>
            <line class="frame-line" x1="420" y1="140" x2="479" y2="186"></line>

            <circle class="plot-point-alt" cx="420" cy="140" r="16"></circle>
            <text class="tick-label" x="420" y="144" text-anchor="middle">O</text>

            <circle class="plot-point-alt" cx="361" cy="186" r="11"></circle>
            <text class="tick-label" x="361" y="190" text-anchor="middle">H</text>

            <circle class="plot-point-alt" cx="479" cy="186" r="11"></circle>
            <text class="tick-label" x="479" y="190" text-anchor="middle">H</text>

            <text class="label-soft" x="420" y="171" text-anchor="middle">≈ 104,5°</text>
          </svg>
        `,
        notes: [
          'Le <strong>noyau</strong> de l\'atome (au centre) concentre presque toute sa masse : il contient les <strong>protons</strong> (charge positive) et les <strong>neutrons</strong> (sans charge). Les <strong>électrons</strong> (charge négative), bien plus légers, occupent l\'espace autour du noyau, répartis sur des couches successives.',
          'Pour l\'atome de carbone représenté ici ($Z = 6$), 2 électrons occupent la première couche (au maximum 2 électrons) et les 4 électrons restants occupent la seconde couche : au total, 6 électrons, autant que de protons dans le noyau.',
          'Une <strong>molécule</strong> est un assemblage d\'atomes reliés par des liaisons chimiques : la molécule d\'eau $H_2O$ associe 1 atome d\'oxygène et 2 atomes d\'hydrogène, selon une forme coudée d\'environ $104{,}5$°.'
        ],
        reading: 'Repère d\'abord le noyau au centre de l\'atome, puis les électrons répartis sur les deux couches en pointillés ; à droite, observe comment les atomes d\'hydrogène et d\'oxygène s\'assemblent pour former la molécule d\'eau.',
        caption: 'À gauche, modèle simplifié de l\'atome de carbone (noyau + 6 électrons répartis sur deux couches) ; à droite, modèle moléculaire de l\'eau ($H_2O$), assemblage de 3 atomes reliés par des liaisons chimiques.'
      },
      example: {
        statement: 'Un atome de sodium possède un numéro atomique $Z = 11$ et un nombre de masse $A = 23$.<br/><br/>Détermine le nombre d\'électrons, puis le nombre de neutrons contenus dans cet atome.',
        steps: [
          'L\'atome est électriquement neutre : il possède donc autant d\'électrons que de protons, soit un nombre d\'électrons égal au numéro atomique $Z$.',
          'Nombre d\'électrons : il y en a autant que $Z$, donc $11$ électrons.',
          'Le nombre de masse $A$ correspond au nombre total de protons <strong>et</strong> de neutrons dans le noyau : $A = Z + n$, où $n$ est le nombre de neutrons.',
          'On isole $n$ : $n = A - Z = 23 - 11 = 12$.'
        ],
        answer: 'Cet atome de sodium possède $11$ électrons et $12$ neutrons. Le numéro atomique $Z$ donne directement le nombre de protons (et donc d\'électrons), tandis que le nombre de masse $A$ regroupe protons <strong>et</strong> neutrons : il faut soustraire pour isoler les neutrons seuls.'
      },
      formulas: [
        'Neutralité électrique de l\'atome : nombre d\'électrons = nombre de protons = $Z$ (numéro atomique)',
        'Nombre de neutrons : $n = A - Z$ (avec $A$ le nombre de masse et $Z$ le numéro atomique)',
        'Indice dans une formule chimique = nombre d\'atomes de cet élément dans la molécule (ex. $H_2O$ : 2 atomes $H$, 1 atome $O$)'
      ],
      recap: [
        'Un atome est formé d\'un <strong>noyau</strong> (protons + neutrons) entouré d\'<strong>électrons</strong> ; il est toujours électriquement neutre.',
        'Le <strong>numéro atomique</strong> $Z$ (nombre de protons) caractérise un élément chimique et détermine son symbole.',
        'Une <strong>molécule</strong> est un assemblage d\'atomes ; sa formule chimique indique la nature et le nombre de chaque atome grâce aux indices.',
        'Les indices d\'une formule chimique s\'additionnent pour obtenir le nombre total d\'atomes d\'une molécule.'
      ],
      piege: 'Une erreur fréquente est de confondre le numéro atomique $Z$ (le nombre de protons) avec le nombre de masse $A$ (le nombre de protons plus le nombre de neutrons), alors que ce sont deux grandeurs bien différentes. Attention, pour trouver le nombre de neutrons d\'un atome, il faut toujours calculer $A - Z$, et jamais lire directement l\'une des deux valeurs comme si elle donnait le nombre de neutrons.'
    },

    quiz: [
      {
        q: 'Que trouve-t-on dans le noyau d\'un atome ?',
        options: [
          'Uniquement des électrons',
          'Des protons et des neutrons',
          'Uniquement des protons',
          'Des molécules'
        ],
        answer: 1,
        correction: 'Le noyau, situé au centre de l\'atome, contient les <strong>protons</strong> (charge positive) et les <strong>neutrons</strong> (sans charge). Les électrons, eux, se déplacent autour du noyau.'
      },
      {
        q: 'Le numéro atomique $Z$ d\'un élément chimique correspond à :',
        options: [
          'Son nombre de neutrons',
          'Son nombre de protons',
          'Sa masse totale',
          'Son nombre de molécules'
        ],
        answer: 1,
        correction: 'Le numéro atomique $Z$ est, par définition, le nombre de protons contenus dans le noyau. C\'est lui qui caractérise l\'élément chimique et détermine son symbole dans le tableau périodique.'
      },
      {
        q: 'Combien d\'atomes au total contient une molécule de méthane, de formule chimique $CH_4$ ?',
        options: [
          '1 atome',
          '4 atomes',
          '5 atomes',
          '14 atomes'
        ],
        answer: 2,
        correction: 'La formule $CH_4$ indique 1 atome de carbone (symbole $C$, sans indice) et 4 atomes d\'hydrogène (indice $4$ après $H$), soit $1 + 4 = 5$ atomes au total.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['neutrons', 'atomes']);

        if (typeExo === 'neutrons') {
          var elements = [
            { nom: 'carbone', symbole: 'C', Z: 6, A: 12 },
            { nom: 'azote', symbole: 'N', Z: 7, A: 14 },
            { nom: 'oxygène', symbole: 'O', Z: 8, A: 16 },
            { nom: 'sodium', symbole: 'Na', Z: 11, A: 23 },
            { nom: 'aluminium', symbole: 'Al', Z: 13, A: 27 },
            { nom: 'chlore', symbole: 'Cl', Z: 17, A: 35 },
            { nom: 'fer', symbole: 'Fe', Z: 26, A: 56 }
          ];
          var el = pick(elements);
          var neutrons = el.A - el.Z;
          return {
            statement: 'Un atome de ' + el.nom + ' (symbole ' + el.symbole + ') possède un numéro atomique $Z = ' + el.Z + '$ et un nombre de masse $A = ' + el.A + '$.<br/><br/>Calcule le nombre de neutrons que contient le noyau de cet atome.',
            answer: neutrons,
            tolerance: 0,
            unit: '',
            hint: 'Le nombre de neutrons se calcule par $n = A - Z$, où $A$ est le nombre de masse et $Z$ le numéro atomique (nombre de protons).',
            solution: [
              'Formule : $n = A - Z$.',
              'Application numérique : $n = ' + el.A + ' - ' + el.Z + '$.',
              'Résultat : le noyau de cet atome de ' + el.nom + ' contient $n = ' + neutrons + '$ neutrons.'
            ]
          };
        } else {
          var molecules = [
            { formule: 'H_2O', nom: 'l\'eau', total: 3 },
            { formule: 'CO_2', nom: 'le dioxyde de carbone', total: 3 },
            { formule: 'CH_4', nom: 'le méthane', total: 5 },
            { formule: 'NH_3', nom: 'l\'ammoniac', total: 4 },
            { formule: 'C_2H_6', nom: 'l\'éthane', total: 8 },
            { formule: 'C_6H_{12}O_6', nom: 'le glucose', total: 24 }
          ];
          var mol = pick(molecules);
          return {
            statement: 'La formule chimique de ' + mol.nom + ' est $' + mol.formule + '$.<br/><br/>Calcule le nombre total d\'atomes présents dans une molécule de ' + mol.nom + ' (tous éléments confondus).',
            answer: mol.total,
            tolerance: 0,
            unit: '',
            hint: 'Chaque indice en bas à droite d\'un symbole indique le nombre d\'atomes de cet élément ; additionne tous ces indices (un symbole sans indice compte pour 1 atome).',
            solution: [
              'On repère chaque symbole chimique présent dans la formule $' + mol.formule + '$ et son indice.',
              'On additionne le nombre d\'atomes de chaque élément pour obtenir le total.',
              'Résultat : une molécule de ' + mol.nom + ' contient $' + mol.total + '$ atomes au total.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On étudie une bouteille de gaz de camping contenant du butane, un corps pur composé de formule chimique $C_4H_{10}$. On rappelle qu\'un atome de carbone possède $Z = 6$ protons et qu\'un atome d\'hydrogène possède $Z = 1$ proton.',
      tasks: [
        'Identifier les deux éléments chimiques présents dans la molécule de butane et indiquer leur symbole.',
        'Déterminer le nombre d\'atomes de chaque élément, puis le nombre total d\'atomes contenus dans une molécule de butane.',
        'Calculer le nombre total de protons contenus dans une molécule de butane.'
      ],
      solutions: [
        'La formule $C_4H_{10}$ fait apparaître les symboles $C$ (carbone) et $H$ (hydrogène) : deux éléments chimiques différents.',
        'Les indices indiquent 4 atomes de carbone et 10 atomes d\'hydrogène, soit un total de $4 + 10 = 14$ atomes par molécule.',
        'Nombre total de protons : $(4 \\times 6) + (10 \\times 1) = 24 + 10 = 34$ protons par molécule.'
      ],
      finalAnswer: 'Une molécule de butane $C_4H_{10}$ contient $14$ atomes au total et $34$ protons. Comme chaque molécule reste électriquement neutre, elle possède aussi exactement $34$ électrons au total, répartis autour des noyaux de carbone et d\'hydrogène.'
    },

    evaluation: {
      title: 'Évaluation — Les atomes et les molécules',
      duration: '25 min',
      questions: [
        {
          statement: 'Un atome d\'oxygène possède $Z = 8$ et $A = 16$. Calculer son nombre de neutrons.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$n = A - Z = 16 - 8 = 8$ neutrons.'
        },
        {
          statement: 'Une molécule est :',
          type: 'multiple-choice',
          options: [
            'Un seul atome isolé',
            'Un assemblage de plusieurs atomes reliés par des liaisons chimiques',
            'Le noyau d\'un atome',
            'Un synonyme d\'électron'
          ],
          answer: 1,
          points: 2,
          correction: 'Une molécule résulte de l\'assemblage de plusieurs atomes (identiques ou différents) reliés entre eux par des liaisons chimiques.'
        },
        {
          statement: 'La formule chimique de l\'ammoniac est $NH_3$. Calculer le nombre total d\'atomes dans une molécule d\'ammoniac.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'La formule $NH_3$ indique 1 atome d\'azote et 3 atomes d\'hydrogène, soit $1 + 3 = 4$ atomes au total.'
        },
        {
          statement: 'Parmi les deux corps purs suivants, lequel est un corps pur <strong>simple</strong> ?',
          type: 'multiple-choice',
          options: [
            '$H_2O$ (eau)',
            '$O_2$ (dioxygène)',
            '$CO_2$ (dioxyde de carbone)',
            '$NH_3$ (ammoniac)'
          ],
          answer: 1,
          points: 2,
          correction: '$O_2$ ne contient qu\'un seul type d\'atome (l\'oxygène) : c\'est un corps pur simple. Les trois autres contiennent au moins deux éléments différents : ce sont des corps purs composés.'
        },
        {
          statement: 'Un atome d\'aluminium possède $Z = 13$ protons. Combien d\'électrons possède cet atome, sachant qu\'il est électriquement neutre ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: 'Un atome neutre possède autant d\'électrons que de protons : $13$ électrons.'
        }
      ]
    }
  });
