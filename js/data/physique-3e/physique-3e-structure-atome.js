/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-structure-atome.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-structure-atome',
    level: 1, subject: 'physique',
    icon: '⚛️',
    title: 'Structure de l\'atome et ions',
    subtitle: 'Noyau, électrons, numéro atomique, formation des ions',
    keywords: ['Atome', 'Proton', 'Neutron', 'Électron', 'Ion', 'Numéro atomique'],
    physics: 'La structure de l\'atome explique pourquoi les métaux conduisent l\'électricité (électrons libres), pourquoi le sel de cuisine se dissout dans l\'eau (transfert d\'électrons entre sodium et chlore), et comment fonctionne une pile électrochimique, où le courant électrique naît justement d\'un échange d\'électrons entre deux matériaux.',

    cours: {
      intro: 'Toute la matière qui nous entoure — l\'eau, l\'air, le métal d\'une pièce de monnaie — est constituée de <strong>minuscules briques élémentaires</strong> appelées atomes. Un atome est si petit qu\'il faudrait aligner environ dix millions d\'atomes pour couvrir seulement un millimètre !<br/><br/>Chaque atome est composé de deux parties bien distinctes. Au centre, un <strong>noyau</strong> minuscule mais extrêmement dense, qui concentre presque toute la masse de l\'atome. Autour de ce noyau, un <strong>nuage d\'électrons</strong> qui occupe presque tout le volume de l\'atome, mais dont la masse totale est négligeable en comparaison.<br/><br/>Le noyau est lui-même formé de deux types de particules : les <strong>protons</strong>, chargés positivement, et les <strong>neutrons</strong>, électriquement neutres. Autour du noyau, les <strong>électrons</strong>, chargés négativement, se répartissent en couches successives.<br/><br/>Dans un atome <strong>neutre</strong>, le nombre d\'électrons est toujours égal au nombre de protons : les charges positives et négatives se compensent exactement. Mais un atome peut <strong>gagner ou perdre des électrons</strong> : il devient alors un <strong>ion</strong>, une particule chargée électriquement.',
      definitions: [
        { term: 'Numéro atomique (Z)', def: 'Nombre de protons contenus dans le noyau d\'un atome. Il caractérise l\'élément chimique : tous les atomes de numéro atomique $Z$ identique appartiennent au même élément (par exemple, tout atome avec $Z=6$ est un atome de carbone).' },
        { term: 'Nombre de masse (A)', def: 'Nombre total de <strong>nucléons</strong> (protons + neutrons) dans le noyau : $A = Z + N$, où $N$ est le nombre de neutrons. On le note en haut à gauche du symbole chimique, par exemple $^{23}_{11}\\text{Na}$ pour le sodium.' },
        { term: 'Électron', def: 'Particule chargée <strong>négativement</strong>, environ deux mille fois plus légère qu\'un proton, qui se déplace autour du noyau, répartie en couches électroniques successives notées $K$, $L$, $M$…' },
        { term: 'Couche électronique', def: 'Niveau occupé par les électrons autour du noyau. Elles se remplissent toujours dans l\'ordre $K$ (2 électrons maximum), puis $L$ (8 électrons maximum), puis $M$ (8 électrons maximum au collège), en commençant par la couche la plus proche du noyau.' },
        { term: 'Ion', def: 'Atome (ou groupe d\'atomes) ayant gagné ou perdu un ou plusieurs électrons. Un <strong>cation</strong> (charge positive) résulte d\'une perte d\'électrons ; un <strong>anion</strong> (charge négative) résulte d\'un gain d\'électrons.' }
      ],
      method: {
        title: 'Déterminer la structure électronique d\'un atome ou d\'un ion en 3 étapes',
        steps: [
          '<strong>Identifier le numéro atomique $Z$</strong> (nombre de protons) grâce au symbole chimique ou à la classification périodique : pour un atome neutre, c\'est aussi le nombre d\'électrons à répartir.',
          '<strong>Répartir les électrons couche par couche</strong>, en remplissant $K$ (2 électrons max) avant $L$ (8 électrons max), puis $M$, jusqu\'à épuiser les $Z$ électrons disponibles.',
          'Pour un <strong>ion</strong>, ajuster le nombre d\'électrons selon la charge : on <strong>retire</strong> des électrons pour une charge positive (cation), on en <strong>ajoute</strong> pour une charge négative (anion), puis on répartit à nouveau les électrons restants dans les couches.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèle simplifié de l\'atome (modèle de Bohr)',
        title: 'Structure électronique de l\'atome de sodium (Na)',
        description: 'Autour d\'un noyau central (protons et neutrons), les électrons se répartissent en couches successives $K$, $L$, $M$ — ici pour l\'atome de sodium, de numéro atomique $Z=11$.',
        svg: `
          <svg viewBox="0 0 400 400" role="img" aria-labelledby="atome-title atome-desc">
            <title id="atome-title">Structure electronique de l'atome de sodium</title>
            <desc id="atome-desc">Schema du modele de Bohr de l'atome de sodium : un noyau central contenant 11 protons et 12 neutrons, entoure de trois couches electroniques concentriques K, L et M contenant respectivement 2, 8 et 1 electrons, soit 11 electrons au total.</desc>

            <!-- couches electroniques -->
            <circle class="guide-line" cx="200" cy="200" r="70" fill="none"></circle>
            <circle class="guide-line" cx="200" cy="200" r="120" fill="none"></circle>
            <circle class="guide-line" cx="200" cy="200" r="170" fill="none"></circle>

            <!-- noyau -->
            <circle cx="200" cy="200" r="34" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="2"></circle>
            <text class="annotation-label" x="200" y="196" text-anchor="middle">11 p⁺</text>
            <text class="annotation-label" x="200" y="212" text-anchor="middle">12 n⁰</text>

            <!-- electrons couche K (2) -->
            <circle class="plot-point" cx="200" cy="130" r="6"></circle>
            <circle class="plot-point" cx="200" cy="270" r="6"></circle>

            <!-- electrons couche L (8) -->
            <circle class="plot-point" cx="200" cy="80" r="6"></circle>
            <circle class="plot-point" cx="284.9" cy="115.1" r="6"></circle>
            <circle class="plot-point" cx="320" cy="200" r="6"></circle>
            <circle class="plot-point" cx="284.9" cy="284.9" r="6"></circle>
            <circle class="plot-point" cx="200" cy="320" r="6"></circle>
            <circle class="plot-point" cx="115.1" cy="284.9" r="6"></circle>
            <circle class="plot-point" cx="80" cy="200" r="6"></circle>
            <circle class="plot-point" cx="115.1" cy="115.1" r="6"></circle>

            <!-- electron couche M (1) -->
            <circle class="plot-point" cx="200" cy="30" r="6"></circle>

            <!-- etiquettes couches -->
            <text class="label-soft" x="222" y="134" text-anchor="start">K (2)</text>
            <text class="label-soft" x="222" y="84" text-anchor="start">L (8)</text>
            <text class="label-soft" x="222" y="34" text-anchor="start">M (1)</text>
          </svg>
        `,
        notes: [
          'Le noyau, minuscule mais extrêmement dense, concentre $11$ protons (charge positive) et $12$ neutrons (sans charge) : $A = Z + N = 11 + 12 = 23$.',
          'Les $11$ électrons de l\'atome neutre se répartissent en couches successives : $K(2)$, puis $L(8)$, puis $M(1)$ — la somme $2+8+1=11$ retombe bien sur le nombre d\'électrons attendu.',
          'La couche externe $M$ n\'est occupée que par un seul électron, loin de sa capacité maximale de $8$ : c\'est cet électron externe, facilement cédé, qui explique la grande réactivité chimique du sodium (il devient volontiers l\'ion $\\text{Na}^+$).'
        ],
        reading: 'Repère d\'abord le noyau central avec ses protons et neutrons, puis compte les électrons couche par couche en partant du centre : $K$, puis $L$, puis $M$.',
        caption: 'Modèle de Bohr de l\'atome de sodium ($Z=11$) : noyau central et répartition électronique $K(2)\\ L(8)\\ M(1)$.'
      },
      example: {
        statement: 'L\'atome de sodium a pour symbole $^{23}_{11}\\text{Na}$, avec un numéro atomique $Z=11$ et un nombre de masse $A=23$.<br/><br/>Détermine sa structure électronique (répartition en couches), puis indique combien d\'électrons possède l\'ion sodium $\\text{Na}^+$.',
        steps: [
          'Numéro atomique $Z=11$ : l\'atome neutre possède donc $11$ protons et $11$ électrons à répartir.',
          'Répartition en couches : la couche $K$ se remplit en premier avec $2$ électrons, puis la couche $L$ avec $8$ électrons ($2+8=10$) ; il reste $11-10=1$ électron pour la couche $M$.',
          'Structure électronique du sodium : $K(2)\\ L(8)\\ M(1)$ — on vérifie bien que $2+8+1=11$ électrons au total.',
          'L\'ion $\\text{Na}^+$ correspond à un atome de sodium ayant <strong>perdu un électron</strong> (charge $+1$) : il possède donc $11-1=10$ électrons, soit exactement la structure $K(2)\\ L(8)$, une couche externe saturée particulièrement stable.'
        ],
        answer: 'Structure de l\'atome de sodium : $K(2)\\ L(8)\\ M(1)$. L\'ion $\\text{Na}^+$ possède $10$ électrons.'
      },
      formulas: [
        '$Z$ = nombre de protons = nombre d\'électrons (atome neutre)',
        '$A = Z + N$ (nombre de masse = protons + neutrons)',
        'Nombre de neutrons : $N = A - Z$',
        'Ion de charge $q$ : nombre d\'électrons $= Z - q$ ($q$ positif pour un cation, négatif pour un anion)',
        'Remplissage des couches : $K$ (2 max), puis $L$ (8 max), puis $M$ (8 max au collège)'
      ],
      recap: [
        'Le numéro atomique $Z$ identifie l\'élément chimique : c\'est le nombre de protons, qui ne change jamais pour un élément donné.',
        'Un atome neutre a autant d\'électrons que de protons ; un ion en a plus (anion, charge négative) ou moins (cation, charge positive).',
        'Les couches électroniques se remplissent toujours dans l\'ordre $K \\to L \\to M$, en commençant par la plus proche du noyau.',
        'La formation d\'un ion s\'accompagne toujours d\'une nouvelle répartition des électrons restants dans les couches.'
      ],
      piege: 'Une confusion fréquente est de croire qu\'un ion <strong>positif</strong> (cation) a <strong>gagné</strong> des électrons, alors qu\'il en a en réalité <strong>perdu</strong>. Attention à toujours relier le signe de la charge au sens du transfert : un cation (charge positive) a perdu des électrons, un anion (charge négative) en a gagné.'
    },

    quiz: [
      {
        q: 'Un atome de carbone a pour numéro atomique $Z=6$. Combien d\'électrons possède cet atome neutre ?',
        options: ['$6$ électrons', '$12$ électrons', '$3$ électrons', '$0$ électron'],
        answer: 0,
        correction: 'Dans un atome neutre, le nombre d\'électrons est toujours égal au numéro atomique $Z$ (nombre de protons) : ici $Z=6$, donc $6$ électrons.'
      },
      {
        q: 'L\'ion chlorure $\\text{Cl}^-$ se forme à partir de l\'atome de chlore ($Z=17$). Que s\'est-il passé ?',
        options: [
          'L\'atome a gagné un électron',
          'L\'atome a perdu un électron',
          'L\'atome a gagné un proton',
          'L\'atome a perdu un neutron'
        ],
        answer: 0,
        correction: 'La charge négative de l\'ion $\\text{Cl}^-$ indique un excès d\'électrons par rapport aux protons : l\'atome de chlore a <strong>gagné un électron</strong> (il en possède désormais $18$ au lieu de $17$).'
      },
      {
        q: 'Quelle est la répartition électronique correcte d\'un atome possédant $10$ électrons ?',
        options: ['$K(2)\\ L(8)$', '$K(10)$', '$K(2)\\ L(2)\\ M(6)$', '$K(8)\\ L(2)$'],
        answer: 0,
        correction: 'On remplit d\'abord la couche $K$ (maximum $2$ électrons), puis la couche $L$ (maximum $8$ électrons) : $2+8=10$. La répartition est donc $K(2)\\ L(8)$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var elements = [
          { sym: 'H', Z: 1, A: 1, nom: 'hydrogène' },
          { sym: 'He', Z: 2, A: 4, nom: 'hélium' },
          { sym: 'Li', Z: 3, A: 7, nom: 'lithium' },
          { sym: 'C', Z: 6, A: 12, nom: 'carbone' },
          { sym: 'N', Z: 7, A: 14, nom: 'azote' },
          { sym: 'O', Z: 8, A: 16, nom: 'oxygène' },
          { sym: 'F', Z: 9, A: 19, nom: 'fluor' },
          { sym: 'Ne', Z: 10, A: 20, nom: 'néon' },
          { sym: 'Na', Z: 11, A: 23, nom: 'sodium' },
          { sym: 'Mg', Z: 12, A: 24, nom: 'magnésium' },
          { sym: 'Al', Z: 13, A: 27, nom: 'aluminium' },
          { sym: 'Cl', Z: 17, A: 35, nom: 'chlore' }
        ];
        var ions = [
          { sym: 'Na', Z: 11, nom: 'sodium', charge: 1, ionSym: '\\text{Na}^+' },
          { sym: 'Mg', Z: 12, nom: 'magnésium', charge: 2, ionSym: '\\text{Mg}^{2+}' },
          { sym: 'Al', Z: 13, nom: 'aluminium', charge: 3, ionSym: '\\text{Al}^{3+}' },
          { sym: 'K', Z: 19, nom: 'potassium', charge: 1, ionSym: '\\text{K}^+' },
          { sym: 'Ca', Z: 20, nom: 'calcium', charge: 2, ionSym: '\\text{Ca}^{2+}' },
          { sym: 'F', Z: 9, nom: 'fluor', charge: -1, ionSym: '\\text{F}^-' },
          { sym: 'Cl', Z: 17, nom: 'chlore', charge: -1, ionSym: '\\text{Cl}^-' },
          { sym: 'O', Z: 8, nom: 'oxygène', charge: -2, ionSym: '\\text{O}^{2-}' }
        ];
        var typeExo = pick(['neutrons', 'ion']);

        if (typeExo === 'neutrons') {
          var el = pick(elements);
          var N = el.A - el.Z;
          var contexte = pick([
            'un manuel de chimie',
            'une fiche de la classification périodique',
            'un exercice de laboratoire',
            'une étiquette de flacon de gaz'
          ]);
          return {
            statement: 'D\'après ' + contexte + ', l\'atome de ' + el.nom + ' (' + el.sym + ') a pour numéro atomique $Z=' + el.Z + '$ et pour nombre de masse $A=' + el.A + '$.<br/><br/>Calcule le nombre de neutrons $N$ contenus dans son noyau.',
            answer: N,
            tolerance: 0,
            unit: '',
            hint: 'Utilise la relation $A = Z + N$, donc $N = A - Z$.',
            solution: [
              'Relation entre nombre de masse, numéro atomique et neutrons : $A = Z + N$.',
              'On isole $N$ : $N = A - Z = ' + el.A + ' - ' + el.Z + '$.',
              'Résultat : $N = ' + N + '$ neutrons.'
            ]
          };
        } else {
          var ion = pick(ions);
          var elec = ion.Z - ion.charge;
          var sensCharge = ion.charge > 0 ? 'perdu ' + ion.charge + ' électron' + (ion.charge > 1 ? 's' : '') : 'gagné ' + Math.abs(ion.charge) + ' électron' + (Math.abs(ion.charge) > 1 ? 's' : '');
          return {
            statement: 'L\'atome de ' + ion.nom + ' possède un numéro atomique $Z=' + ion.Z + '$. Il forme l\'ion $' + ion.ionSym + '$.<br/><br/>Calcule le nombre d\'électrons que possède cet ion.',
            answer: elec,
            tolerance: 0,
            unit: '',
            hint: 'Le nombre d\'électrons d\'un ion se calcule avec le numéro atomique $Z$ et la charge $q$ de l\'ion : électrons $= Z - q$ (compte $q$ négatif pour un anion).',
            solution: [
              'Pour former l\'ion $' + ion.ionSym + '$, l\'atome a ' + sensCharge + '.',
              'Nombre d\'électrons de l\'ion : $Z - q = ' + ion.Z + ' - (' + (ion.charge >= 0 ? '+' : '') + ion.charge + ')$.',
              'Résultat : ' + elec + ' électrons.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'L\'atome de chlore a pour symbole $^{35}_{17}\\text{Cl}$, avec un numéro atomique $Z=17$.',
      tasks: [
        'Détermine la répartition électronique de l\'atome de chlore neutre (couches $K$, $L$, $M$).',
        'Sachant que la couche $M$ peut contenir au maximum $8$ électrons, indique combien d\'électrons il manque à l\'atome de chlore pour saturer sa couche externe $M$.',
        'En déduire la formule et la charge de l\'ion que forme le chlore, puis son nombre d\'électrons.'
      ],
      solutions: [
        '$Z=17$ électrons à répartir : $K(2)$, puis $L(8)$ (soit $2+8=10$), il reste $17-10=7$ électrons pour la couche $M$. Structure : $K(2)\\ L(8)\\ M(7)$.',
        'La couche $M$ peut contenir jusqu\'à $8$ électrons ; l\'atome n\'en a que $7$ : il lui en manque donc $8-7=1$ pour saturer cette couche externe.',
        'Pour saturer sa couche $M$, l\'atome de chlore <strong>capte un électron</strong> supplémentaire : il devient l\'ion chlorure $\\text{Cl}^-$, de charge $-1$, avec $17+1=18$ électrons, soit la structure stable $K(2)\\ L(8)\\ M(8)$.'
      ],
      finalAnswer: 'L\'atome de chlore ($K(2)\\ L(8)\\ M(7)$) forme l\'ion chlorure $\\text{Cl}^-$ ($18$ électrons, structure $K(2)\\ L(8)\\ M(8)$ saturée). C\'est exactement ce type de transformation qui explique la formation du sel de cuisine (chlorure de sodium, $\\text{NaCl}$) : le sodium cède l\'électron que le chlore capte.'
    },

    evaluation: {
      title: 'Évaluation — Structure de l\'atome et ions',
      duration: '25 min',
      questions: [
        {
          statement: 'Un atome d\'oxygène a pour numéro atomique $Z=8$ et pour nombre de masse $A=16$. Calculer son nombre de neutrons.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$N = A - Z = 16 - 8 = 8$ neutrons.'
        },
        {
          statement: 'Dans un atome neutre, le nombre d\'électrons est toujours égal :',
          type: 'multiple-choice',
          options: [
            'Au nombre de neutrons',
            'Au numéro atomique $Z$ (nombre de protons)',
            'Au nombre de masse $A$',
            'À la moitié du nombre de masse'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un atome neutre, les charges positives (protons) et négatives (électrons) se compensent exactement : le nombre d\'électrons est donc toujours égal au numéro atomique $Z$.'
        },
        {
          statement: 'L\'ion aluminium $\\text{Al}^{3+}$ est obtenu à partir de l\'atome d\'aluminium ($Z=13$). Calculer le nombre d\'électrons de cet ion.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'ion $\\text{Al}^{3+}$ a perdu $3$ électrons par rapport à l\'atome neutre : $13 - 3 = 10$ électrons.'
        },
        {
          statement: 'La couche électronique $K$ peut contenir au maximum :',
          type: 'multiple-choice',
          options: ['$2$ électrons', '$8$ électrons', '$18$ électrons', '$1$ électron'],
          answer: 0,
          points: 1,
          correction: 'La couche $K$, la plus proche du noyau, est la plus petite : elle ne peut contenir que $2$ électrons au maximum.'
        },
        {
          statement: 'Un atome possède $12$ électrons. Donner le nombre d\'électrons de la couche $M$ dans sa répartition $K$, $L$, $M$.',
          type: 'numeric',
          answer: 2,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'On remplit $K(2)$ puis $L(8)$, soit $2+8=10$ électrons placés. Il reste $12-10=2$ électrons pour la couche $M$.'
        }
      ]
    }
  });
