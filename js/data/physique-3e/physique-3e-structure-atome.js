/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-structure-atome.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-structure-atome',
    level: 1, subject: 'physique',
    icon: '⚛️',
    title: 'Structure de l\'atome et ions',
    subtitle: 'Modèle de l\'atome, numéro atomique, répartition électronique en couches (K, L, M), formation des ions',
    keywords: ['Atome', 'Proton', 'Neutron', 'Électron', 'Ion', 'Numéro atomique'],
    physics: 'La notion d\'ion explique de nombreux phénomènes du quotidien : la conductivité électrique de l\'eau du robinet (due aux ions dissous), le fonctionnement d\'une pile électrique, la formation du calcaire dans les canalisations, ou encore les dosages sanguins réalisés en analyse médicale (ions sodium, potassium, calcium).',

    cours: {
      intro: 'Toute la matière qui nous entoure est constituée d\'<strong>atomes</strong>, des entités extrêmement petites (environ $10^{-10}$ m de diamètre) et électriquement neutres.<br/><br/>Un atome est formé d\'un <strong>noyau</strong> central, très petit mais très dense, autour duquel se déplacent des <strong>électrons</strong>. Le noyau contient deux types de particules : les <strong>protons</strong>, chargés positivement, et les <strong>neutrons</strong>, électriquement neutres. Les électrons, eux, portent une charge négative.<br/><br/>Puisque l\'atome est neutre, le nombre d\'électrons qui gravitent autour du noyau est toujours égal au nombre de protons qu\'il contient. Lorsqu\'un atome perd ou gagne un ou plusieurs électrons, il devient une entité chargée appelée <strong>ion</strong> : c\'est ce mécanisme, et lui seul, qui est à l\'origine de la formation des ions.',
      definitions: [
        { term: 'Atome', def: 'Entité électriquement neutre, constituant de base de la matière, formée d\'un noyau (protons + neutrons) entouré d\'électrons en mouvement.' },
        { term: 'Numéro atomique ($Z$)', def: 'Nombre de protons contenus dans le noyau d\'un atome. Il caractérise l\'élément chimique et, pour un atome neutre, est aussi égal au nombre d\'électrons.' },
        { term: 'Nombre de masse ($A$)', def: 'Nombre total de nucléons (protons + neutrons) contenus dans le noyau. Un atome se note $^{A}_{Z}\\text{X}$, où X est le symbole chimique de l\'élément.' },
        { term: 'Ion', def: 'Espèce chimique chargée électriquement, obtenue lorsqu\'un atome (ou un groupe d\'atomes) perd ou gagne un ou plusieurs électrons. Un <strong>cation</strong> (charge positive) résulte d\'une perte d\'électrons ; un <strong>anion</strong> (charge négative) résulte d\'un gain d\'électrons.' },
        { term: 'Couche électronique', def: 'Niveau sur lequel se répartissent les électrons autour du noyau, noté K, L, M en partant du plus proche du noyau. Capacité maximale : 2 électrons sur K, 8 électrons sur L, 8 électrons sur M (dans le cadre étudié au collège).' }
      ],
      method: {
        title: 'Déterminer la composition d\'un atome ou d\'un ion en 3 étapes',
        steps: [
          '<strong>Lire le numéro atomique $Z$ et le nombre de masse $A$</strong> (donnés dans le tableau périodique ou l\'énoncé) : ils donnent directement le nombre de protons ($Z$) et permettent de calculer le nombre de neutrons $N = A - Z$.<br/>Exemple : pour l\'aluminium, $Z=13$ et $A=27$, donc $N = 27-13 = 14$ neutrons.',
          '<strong>Répartir les $Z$ électrons sur les couches</strong> K, L puis M, en respectant les capacités maximales (2, puis 8, puis 8), en commençant toujours par remplir la couche la plus proche du noyau avant de passer à la suivante.<br/>Exemple : l\'aluminium ($Z=13$) a la configuration K(2) L(8) M(3).',
          '<strong>Pour un ion</strong>, ajuster uniquement le nombre d\'électrons (jamais le nombre de protons ni de neutrons, qui ne changent pas lors d\'une transformation chimique) : un cation $X^{n+}$ a perdu $n$ électrons, un anion $X^{n-}$ en a gagné $n$.<br/>Exemple : l\'ion aluminium $Al^{3+}$ possède $13-3=10$ électrons, soit la configuration K(2) L(8) — une couche externe pleine, comme un gaz noble.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèle de l\'atome (structure en couches)',
        title: 'Répartition électronique de l\'atome de sodium (Z = 11) sur les couches K, L, M',
        description: 'Le noyau de l\'atome de sodium contient 11 protons et 12 neutrons. Ses 11 électrons se répartissent sur trois couches : K (2 électrons), L (8 électrons) et M (1 seul électron, très facilement perdu).',
        svg: `
          <svg viewBox="0 0 560 380" role="img" aria-labelledby="atome-na-title atome-na-desc">
            <title id="atome-na-title">Modele en couches de l'atome de sodium</title>
            <desc id="atome-na-desc">Un noyau central represente par un petit disque plein est entoure de trois cercles concentriques en pointilles representant les couches electroniques K, L et M. Deux electrons sont places sur la couche K la plus proche du noyau, huit electrons sont repartis regulierement sur la couche L, et un seul electron isole, mis en evidence par un marqueur different, occupe la couche M la plus exterieure : c'est celui que l'atome cede facilement pour former l'ion sodium.</desc>

            <!-- couches (orbites) -->
            <circle class="guide-line" cx="280" cy="195" r="55" fill="none"></circle>
            <circle class="guide-line" cx="280" cy="195" r="100" fill="none"></circle>
            <circle class="guide-line" cx="280" cy="195" r="145" fill="none"></circle>

            <!-- noyau -->
            <circle cx="280" cy="195" r="14" fill="var(--diagram-accent)"></circle>
            <text class="label-soft" x="280" y="228" text-anchor="middle">Noyau</text>

            <!-- electrons couche K (2) -->
            <circle class="plot-point" cx="280" cy="140" r="6"></circle>
            <circle class="plot-point" cx="280" cy="250" r="6"></circle>

            <!-- electrons couche L (8) -->
            <circle class="plot-point" cx="280" cy="95" r="6"></circle>
            <circle class="plot-point" cx="351" cy="124" r="6"></circle>
            <circle class="plot-point" cx="380" cy="195" r="6"></circle>
            <circle class="plot-point" cx="351" cy="266" r="6"></circle>
            <circle class="plot-point" cx="280" cy="295" r="6"></circle>
            <circle class="plot-point" cx="209" cy="266" r="6"></circle>
            <circle class="plot-point" cx="180" cy="195" r="6"></circle>
            <circle class="plot-point" cx="209" cy="124" r="6"></circle>

            <!-- electron couche M (1, mis en evidence) -->
            <circle class="plot-point-alt" cx="280" cy="50" r="7"></circle>

            <!-- etiquettes des couches -->
            <text class="tick-label" x="332" y="214" text-anchor="start">K</text>
            <text class="tick-label" x="374" y="229" text-anchor="start">L</text>
            <text class="tick-label" x="416" y="245" text-anchor="start">M</text>
          </svg>
        `,
        notes: [
          'Le <strong>noyau</strong>, ici formé de 11 protons et 12 neutrons, concentre à lui seul plus de 99,9 % de la masse de l\'atome : les électrons sont environ 2000 fois plus légers qu\'un nucléon.',
          'Les 11 électrons se répartissent en respectant les capacités maximales des couches : K (2 électrons), L (8 électrons), puis M (1 seul électron, car $11-2-8=1$).',
          'Cet unique <strong>électron externe</strong> de la couche M (marqué différemment sur le schéma) est très facilement cédé : en le perdant, le sodium atteint la configuration K(2) L(8), stable car saturée, et devient l\'ion $Na^+$.'
        ],
        reading: 'Repère d\'abord le noyau au centre (disque coloré), puis les couches K, L, M en pointillés du centre vers l\'extérieur : compte les électrons (points) présents sur chacune.',
        caption: 'Structure en couches de l\'atome de sodium (Z = 11) : 2 électrons sur la couche K, 8 sur la couche L, et un seul électron externe sur la couche M — celui que l\'atome perd pour former l\'ion $Na^+$.'
      },
      example: {
        statement: 'Le chlore est un élément chimique de numéro atomique $Z=17$ et de nombre de masse $A=35$.<br/><br/>Détermine la composition de l\'atome de chlore (protons, neutrons, électrons), sa répartition électronique, puis explique pourquoi il forme facilement l\'ion chlorure $Cl^-$.',
        steps: [
          'Nombre de protons $=Z=17$. Nombre d\'électrons $=Z=17$ (atome neutre). Nombre de neutrons $=A-Z=35-17=18$.',
          'Répartition électronique des 17 électrons sur les couches : K(2), L(8), il reste $17-2-8=7$ électrons pour la couche M, soit M(7).',
          'La couche M du chlore contient 7 électrons sur 8 possibles : il lui manque un seul électron pour atteindre une couche externe saturée (8 électrons), configuration très stable.',
          'En <strong>gagnant</strong> un électron supplémentaire, le chlore atteint la configuration K(2) L(8) M(8) : il forme ainsi l\'ion chlorure $Cl^-$, chargé négativement car il compte alors 18 électrons pour seulement 17 protons.'
        ],
        answer: 'L\'atome de chlore compte 17 protons, 18 neutrons et 17 électrons, de configuration K(2) L(8) M(7). Il forme l\'ion $Cl^-$ (18 électrons) en captant un électron supplémentaire pour saturer sa couche M.'
      },
      formulas: [
        '$Z = $ nombre de protons $=$ nombre d\'électrons (atome neutre)',
        '$A = Z + N$, soit $N = A - Z$ (nombre de neutrons)',
        'Notation d\'un noyau : $^{A}_{Z}\\text{X}$',
        'Cation $X^{n+}$ : $Z - n$ électrons — Anion $X^{n-}$ : $Z + n$ électrons',
        'Charge électrique d\'un ion : $q = \\pm n \\times e$, avec $e \\approx 1{,}6\\times10^{-19}$ C (charge élémentaire)'
      ],
      recap: [
        'Un atome est électriquement neutre : il possède toujours autant de protons (charge $+$) que d\'électrons (charge $-$).',
        'Le numéro atomique $Z$ (nombre de protons) identifie l\'élément chimique ; le nombre de masse $A$ (nombre de nucléons) permet de calculer le nombre de neutrons $N=A-Z$.',
        'Les électrons se répartissent sur des couches K, L, M de capacités maximales 2, 8 et 8, en commençant toujours par la couche la plus proche du noyau.',
        'Un ion se forme uniquement par <strong>perte ou gain d\'électrons</strong> : le noyau (protons et neutrons) n\'est jamais modifié lors de cette transformation.'
      ],
      piege: 'Une confusion fréquente consiste à mélanger le numéro atomique $Z$ (nombre de protons) et le nombre de masse $A$ (nombre de nucléons), ou à imaginer qu\'un ion se forme en modifiant le noyau. Attention : seul le nombre d\'électrons change lors de la formation d\'un ion — les protons et les neutrons du noyau restent strictement les mêmes.'
    },

    quiz: [
      {
        q: 'L\'atome de magnésium a pour numéro atomique $Z=12$ et pour nombre de masse $A=24$. Combien de neutrons contient son noyau ?',
        options: ['12 neutrons', '24 neutrons', '36 neutrons', '2 neutrons'],
        answer: 0,
        correction: 'Le nombre de neutrons se calcule par $N=A-Z=24-12=12$. Il ne faut pas confondre cette soustraction avec une addition ($A+Z$), ni oublier de soustraire $Z$.'
      },
      {
        q: 'Un atome de fluor ($Z=9$) gagne un électron pour former un ion fluorure. Quelle est la charge de cet ion, et combien d\'électrons possède-t-il ?',
        options: ['Ion $F^-$, 10 électrons', 'Ion $F^+$, 8 électrons', 'Ion $F^-$, 8 électrons', 'Ion $F^{2-}$, 11 électrons'],
        answer: 0,
        correction: 'En gagnant un électron, l\'atome de fluor passe de 9 à $9+1=10$ électrons pour toujours 9 protons : il devient l\'ion fluorure $F^-$, chargé négativement (un électron en excès par rapport aux protons).'
      },
      {
        q: 'Lorsqu\'un atome de sodium (configuration K(2) L(8) M(1)) devient l\'ion $Na^+$, que se passe-t-il ?',
        options: [
          'Il perd l\'unique électron de sa couche M, atteignant la configuration stable K(2) L(8)',
          'Il perd un proton de son noyau',
          'Il gagne un électron sur sa couche M',
          'Il perd un neutron de son noyau'
        ],
        answer: 0,
        correction: 'La formation d\'un ion ne modifie jamais le noyau. Le sodium perd l\'unique électron de sa couche M (la plus externe), ce qui lui laisse la configuration K(2) L(8), particulièrement stable car sa couche externe est saturée.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var atomes = [
          { symbole: 'H',  nom: 'hydrogène',  Z: 1,  A: 1,  charge: 1, sens: 'perd' },
          { symbole: 'Na', nom: 'sodium',     Z: 11, A: 23, charge: 1, sens: 'perd' },
          { symbole: 'Mg', nom: 'magnésium',  Z: 12, A: 24, charge: 2, sens: 'perd' },
          { symbole: 'Al', nom: 'aluminium',  Z: 13, A: 27, charge: 3, sens: 'perd' },
          { symbole: 'F',  nom: 'fluor',      Z: 9,  A: 19, charge: 1, sens: 'gagne' },
          { symbole: 'O',  nom: 'oxygène',    Z: 8,  A: 16, charge: 2, sens: 'gagne' },
          { symbole: 'S',  nom: 'soufre',     Z: 16, A: 32, charge: 2, sens: 'gagne' },
          { symbole: 'Cl', nom: 'chlore',     Z: 17, A: 35, charge: 1, sens: 'gagne' }
        ];
        var typeExo = pick(['composition', 'ion']);
        var atome = pick(atomes);

        if (typeExo === 'composition') {
          var neutrons = atome.A - atome.Z;
          var contexte = pick([
            'sur une étiquette de flacon au laboratoire de chimie',
            'dans le tableau périodique affiché en classe',
            'sur une fiche technique d\'un manuel de sciences',
            'lors d\'un contrôle sur la structure de l\'atome',
            'dans un exercice de préparation au brevet'
          ]);
          return {
            statement: 'Un professeur présente ' + contexte + ' l\'élément ' + atome.nom + ' (symbole ' + atome.symbole + '), de numéro atomique $Z=' + atome.Z + '$ et de nombre de masse $A=' + atome.A + '$.<br/><br/>Calcule le nombre de neutrons contenus dans le noyau de cet atome.',
            answer: neutrons,
            tolerance: 0,
            unit: '',
            hint: 'Le nombre de neutrons se calcule par $N = A - Z$.',
            solution: [
              'Le nombre de masse $A$ compte tous les nucléons (protons + neutrons) : $A = Z + N$.',
              'On isole $N$ : $N = A - Z = ' + atome.A + ' - ' + atome.Z + '$.',
              'Résultat : $N = ' + neutrons + '$ neutrons.'
            ]
          };
        } else {
          var electronsIon = atome.sens === 'perd' ? (atome.Z - atome.charge) : (atome.Z + atome.charge);
          var symboleIon = atome.symbole + '^{' + (atome.charge > 1 ? atome.charge : '') + (atome.sens === 'perd' ? '+' : '-') + '}';
          var contexte2 = pick([
            'En cours de chimie',
            'Dans un exercice sur les ions',
            'Sur une fiche de révision',
            'Lors d\'un TP sur la conductivité des solutions'
          ]);
          return {
            statement: contexte2 + ', on étudie l\'atome de ' + atome.nom + ' ($Z=' + atome.Z + '$), qui ' + (atome.sens === 'perd' ? 'perd' : 'gagne') + ' ' + atome.charge + ' électron' + (atome.charge > 1 ? 's' : '') + ' pour former l\'ion $' + symboleIon + '$.<br/><br/>Calcule le nombre d\'électrons que possède cet ion.',
            answer: electronsIon,
            tolerance: 0,
            unit: '',
            hint: atome.sens === 'perd' ? 'Un cation a perdu des électrons : il en compte moins que l\'atome neutre.' : 'Un anion a gagné des électrons : il en compte plus que l\'atome neutre.',
            solution: [
              'L\'atome neutre de ' + atome.nom + ' possède $Z=' + atome.Z + '$ électrons.',
              atome.sens === 'perd'
                ? 'En perdant ' + atome.charge + ' électron' + (atome.charge > 1 ? 's' : '') + ', il en reste $' + atome.Z + ' - ' + atome.charge + ' = ' + electronsIon + '$.'
                : 'En gagnant ' + atome.charge + ' électron' + (atome.charge > 1 ? 's' : '') + ', il en compte désormais $' + atome.Z + ' + ' + atome.charge + ' = ' + electronsIon + '$.',
              'Résultat : l\'ion $' + symboleIon + '$ possède ' + electronsIon + ' électrons.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le sulfate d\'aluminium est utilisé comme <strong>floculant</strong> dans le traitement de l\'eau potable : il libère des ions aluminium $Al^{3+}$ qui permettent d\'agglomérer les impuretés en suspension pour les éliminer par filtration. L\'aluminium a pour numéro atomique $Z=13$ et pour nombre de masse $A=27$.',
      tasks: [
        'Déterminer la composition de l\'atome d\'aluminium neutre (nombre de protons, de neutrons et d\'électrons).',
        'Donner la répartition électronique de cet atome sur les couches K, L, M, puis expliquer pourquoi il perd facilement 3 électrons.',
        'Calculer le nombre d\'électrons de l\'ion $Al^{3+}$, puis la charge électrique totale de cet ion (en coulombs), sachant que $e \\approx 1{,}6\\times10^{-19}$ C.'
      ],
      solutions: [
        'Protons $=Z=13$. Électrons $=Z=13$ (atome neutre). Neutrons $=A-Z=27-13=14$.',
        'Répartition : K(2), L(8), il reste $13-2-8=3$ électrons pour la couche M, soit M(3). La couche M n\'est occupée qu\'à 3 électrons sur 8 : en les perdant tous les trois, l\'aluminium atteint la configuration stable K(2) L(8), une couche externe saturée.',
        'L\'ion $Al^{3+}$ possède $13-3=10$ électrons. Sa charge est $q = 3 \\times e = 3 \\times 1{,}6\\times10^{-19} = 4{,}8\\times10^{-19}$ C.'
      ],
      finalAnswer: 'L\'atome d\'aluminium (13 protons, 14 neutrons, 13 électrons) forme l\'ion $Al^{3+}$ (10 électrons) de charge $q \\approx 4{,}8\\times10^{-19}$ C. C\'est précisément cette charge positive qui permet aux ions $Al^{3+}$ d\'attirer les impuretés chargées négativement en suspension dans l\'eau, facilitant leur élimination lors du traitement.'
    },

    evaluation: {
      title: 'Évaluation — Structure de l\'atome et ions',
      duration: '30 min',
      questions: [
        {
          statement: 'Un atome de calcium a pour numéro atomique $Z=20$ et pour nombre de masse $A=40$. Calculer son nombre de neutrons.',
          type: 'numeric',
          answer: 20,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$N=A-Z=40-20=20$ neutrons. Il se trouve que le calcium a ici autant de neutrons que de protons, mais ce n\'est pas systématique.'
        },
        {
          statement: 'Le numéro atomique $Z$ d\'un atome neutre correspond toujours à :',
          type: 'multiple-choice',
          options: ['Son nombre de neutrons', 'Son nombre de protons, égal à son nombre d\'électrons', 'Son nombre de nucléons', 'La somme de ses protons et neutrons'],
          answer: 1,
          points: 2,
          correction: '$Z$ est le nombre de protons du noyau. Pour un atome neutre, ce nombre est aussi égal au nombre d\'électrons — c\'est le nombre de nucléons (protons + neutrons) qui correspond à $A$, pas à $Z$.'
        },
        {
          statement: 'Un atome de potassium ($Z=19$) perd un électron. Combien d\'électrons possède l\'ion ainsi formé ?',
          type: 'numeric',
          answer: 18,
          tolerance: 0,
          unit: 'électrons',
          points: 3,
          correction: 'L\'ion $K^+$ possède $19-1=18$ électrons pour 19 protons, d\'où sa charge positive.'
        },
        {
          statement: 'Lors de la transformation d\'un atome en ion :',
          type: 'multiple-choice',
          options: ['Le nombre de protons change', 'Le nombre de neutrons change', 'Seul le nombre d\'électrons change', 'Le nombre de protons et d\'électrons changent tous les deux'],
          answer: 2,
          points: 2,
          correction: 'Un ion se forme uniquement par perte ou gain d\'électrons : le noyau (protons et neutrons) n\'est jamais modifié lors de cette transformation chimique.'
        },
        {
          statement: 'Un ion oxygène $O^{2-}$ possède 10 électrons. Sachant que l\'oxygène a pour numéro atomique $Z=8$, cet ion résulte :',
          type: 'multiple-choice',
          options: ['D\'une perte de 2 électrons', 'D\'un gain de 2 électrons', 'D\'une perte de 2 protons', 'D\'un gain de 2 protons'],
          answer: 1,
          points: 1,
          correction: 'L\'atome neutre d\'oxygène possède $Z=8$ électrons. Pour atteindre 10 électrons, il en a <strong>gagné</strong> 2 ($8+2=10$), d\'où la charge $2-$ de l\'ion.'
        }
      ]
    }
  });
