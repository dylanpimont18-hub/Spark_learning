/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-modele-atome.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-modele-atome',
    level: 2, subject: 'physique',
    icon: '⚛️',
    title: 'Le modèle de l\'atome',
    subtitle: 'Structure de l\'atome (noyau, électrons), numéro atomique, nombre de masse, isotopes, répartition électronique en couches K, L, M',
    keywords: ['Atome', 'Noyau', 'Électron', 'Numéro atomique', 'Isotope', 'Couches électroniques'],
    physics: 'Le modèle de l\'atome permet de comprendre la datation au carbone 14 (basée sur les isotopes), le fonctionnement des capteurs et composants électroniques à base de semi-conducteurs, ou encore l\'identification des éléments chimiques présents dans une étoile grâce à la spectroscopie.',

    cours: {
      intro: 'Un <strong>atome</strong> est constitué d\'un <strong>noyau</strong>, minuscule et très dense, entouré d\'<strong>électrons</strong> en mouvement autour de lui. Le noyau contient des <strong>protons</strong> (charge électrique positive) et des <strong>neutrons</strong> (électriquement neutres), appelés collectivement <strong>nucléons</strong>.<br/><br/>Les dimensions sont extrêmes : le diamètre du noyau est de l\'ordre de $10^{-15}$ m, alors que celui de l\'atome entier est de l\'ordre de $10^{-10}$ m, soit environ $100\\,000$ fois plus grand. Si le noyau avait la taille d\'une bille de $1$ cm, l\'atome entier aurait la taille d\'un stade de football : l\'atome est donc presque entièrement constitué de <strong>vide</strong>.<br/><br/>Un atome est électriquement <strong>neutre</strong> : il possède autant d\'électrons (charge négative) que de protons (charge positive). Les électrons se répartissent autour du noyau en <strong>couches successives</strong>, notées $K$, $L$, $M$… La couche la plus externe, dite <strong>couche de valence</strong>, joue un rôle central : c\'est elle qui détermine la réactivité chimique de l\'atome et sa position dans le tableau périodique.',
      definitions: [
        { term: 'Numéro atomique ($Z$)', def: 'Nombre de protons contenus dans le noyau. Pour un atome neutre, $Z$ est aussi le nombre d\'électrons. Il caractérise un élément chimique et détermine sa position dans le tableau périodique.' },
        { term: 'Nombre de masse ($A$)', def: 'Nombre total de nucléons (protons + neutrons) : $A = Z + N$, où $N$ est le nombre de neutrons. La masse de l\'atome est presque entièrement portée par le noyau.' },
        { term: 'Isotopes', def: 'Atomes d\'un même élément chimique (même $Z$, donc mêmes propriétés chimiques) mais possédant un nombre de neutrons $N$ différent, donc un nombre de masse $A$ différent. Exemple : le carbone 12 et le carbone 14.' },
        { term: 'Couche électronique de valence', def: 'Couche électronique la plus externe d\'un atome. Le nombre d\'électrons qu\'elle contient détermine la réactivité chimique de l\'atome : c\'est lui qui gouverne les liaisons que l\'atome peut former avec d\'autres atomes.' }
      ],
      method: {
        title: 'Établir la structure électronique d\'un atome en 3 étapes',
        steps: [
          '<strong>Déterminer le numéro atomique</strong> $Z$ de l\'atome neutre étudié (donné par le tableau périodique) : c\'est aussi son nombre d\'électrons à répartir.<br/>Exemple : pour l\'aluminium, $Z = 13$, donc $13$ électrons à placer.',
          '<strong>Répartir les électrons</strong> en couches successives, en respectant les capacités maximales admises au lycée : la couche $K$ accueille au maximum $2$ électrons, la couche $L$ au maximum $8$, la couche $M$ au maximum $8$. On remplit toujours la couche la plus proche du noyau en premier.<br/>Exemple : pour $Z=13$, on remplit $K$ (2 électrons), puis $L$ (8 électrons), puis les $13-2-8=3$ électrons restants vont sur $M$.',
          '<strong>Identifier la couche de valence</strong> (la dernière couche occupée, même partiellement) et compter son nombre d\'électrons : c\'est lui qui explique la réactivité chimique de l\'atome et sa colonne dans le tableau périodique.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Modèle de l\'atome (modèle en couches)',
        title: 'Structure de l\'atome de sodium ($Z=11$)',
        description: 'Le noyau, au centre, contient $11$ protons et $12$ neutrons. Les $11$ électrons se répartissent en trois couches : $K$ (2 électrons), $L$ (8 électrons) et $M$ (1 électron, sur la couche de valence).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="atome-title atome-desc">
            <title id="atome-title">Modele en couches de l'atome de sodium</title>
            <desc id="atome-desc">Un schema represente un noyau atomique central entoure de trois cercles concentriques representant les couches electroniques K, L et M. Le noyau, au centre, porte l'etiquette Z egal onze. Deux electrons sont repartis sur la couche K la plus proche du noyau, huit electrons sont repartis regulierement sur la couche L intermediaire, et un seul electron, dessine avec un contour distinct pour signaler qu'il s'agit de l'electron de valence, se trouve sur la couche M la plus externe.</desc>

            <!-- couches electroniques (cercles concentriques) -->
            <circle class="guide-line" cx="280" cy="150" r="35" fill="none"></circle>
            <circle class="guide-line" cx="280" cy="150" r="70" fill="none"></circle>
            <circle class="guide-line" cx="280" cy="150" r="105" fill="none"></circle>

            <!-- noyau -->
            <circle class="frame-line" cx="280" cy="150" r="18" fill="var(--diagram-soft)"></circle>
            <text class="annotation-label" x="280" y="154" text-anchor="middle">Z=11</text>

            <!-- electrons couche K (2) -->
            <circle class="plot-point" cx="273.9" cy="115.5" r="5"></circle>
            <circle class="plot-point" cx="286.1" cy="184.5" r="5"></circle>

            <!-- electrons couche L (8) -->
            <circle class="plot-point" cx="267.8" cy="81.1" r="5"></circle>
            <circle class="plot-point" cx="320.2" cy="92.7" r="5"></circle>
            <circle class="plot-point" cx="348.9" cy="137.8" r="5"></circle>
            <circle class="plot-point" cx="337.3" cy="190.2" r="5"></circle>
            <circle class="plot-point" cx="292.2" cy="218.9" r="5"></circle>
            <circle class="plot-point" cx="239.8" cy="207.3" r="5"></circle>
            <circle class="plot-point" cx="211.1" cy="162.2" r="5"></circle>
            <circle class="plot-point" cx="222.7" cy="109.8" r="5"></circle>

            <!-- electron couche M (1, electron de valence, style distinct) -->
            <circle class="plot-point-alt" cx="261.8" cy="46.6" r="6"></circle>

            <!-- etiquettes des couches -->
            <text class="tick-label" x="327" y="146" text-anchor="middle">K</text>
            <text class="tick-label" x="362" y="146" text-anchor="middle">L</text>
            <text class="tick-label" x="397" y="146" text-anchor="middle">M</text>
            <text class="label-soft" x="280" y="285" text-anchor="middle">Couche de valence M : 1 électron (cercle évidé)</text>
          </svg>
        `,
        notes: [
          'Le noyau (au centre) concentre presque toute la masse de l\'atome dans un volume extrêmement petit : il contient $11$ protons et $12$ neutrons, soit un nombre de masse $A = 11+12 = 23$.',
          'Les couches $K$ et $L$ sont <strong>complètes</strong> (2 puis 8 électrons) : elles ne participent pas aux réactions chimiques.',
          'La couche $M$, la couche de <strong>valence</strong>, ne contient qu\'un seul électron (représenté par un cercle évidé) : c\'est cet électron externe qui détermine la grande réactivité chimique du sodium.'
        ],
        reading: 'Pars du noyau central, puis compte les électrons couche par couche en t\'éloignant : $2$ sur $K$, $8$ sur $L$, et $1$ seul sur $M$, la couche de valence.',
        caption: 'Modèle en couches de l\'atome de sodium ($Z=11$) : répartition électronique $K(2)$–$L(8)$–$M(1)$, avec un unique électron de valence sur la couche externe.'
      },
      example: {
        statement: 'L\'aluminium a pour numéro atomique $Z = 13$ et pour nombre de masse $A = 27$.<br/><br/>Déterminer la composition du noyau (protons et neutrons), puis établir la répartition électronique de cet atome et identifier sa couche de valence.',
        steps: [
          'Nombre de protons : $Z = 13$. Nombre de neutrons : $N = A - Z = 27 - 13 = 14$.',
          'Atome neutre : nombre d\'électrons = nombre de protons = $13$.',
          'Répartition : couche $K$ se remplit en premier avec $2$ électrons (maximum) ; il reste $13 - 2 = 11$ électrons à placer.',
          'Couche $L$ se remplit ensuite avec $8$ électrons (maximum) ; il reste $11 - 8 = 3$ électrons à placer.',
          'Ces $3$ électrons restants se placent sur la couche $M$ (qui accepte jusqu\'à $8$ électrons) : la répartition est donc $K(2)$–$L(8)$–$M(3)$.'
        ],
        answer: 'Noyau : $13$ protons et $14$ neutrons. Répartition électronique : $K(2)$–$L(8)$–$M(3)$. La couche de valence est $M$, avec $3$ électrons.'
      },
      formulas: [
        'Atome neutre : nombre d\'électrons $=$ numéro atomique $Z$ (= nombre de protons)',
        'Nombre de masse : $A = Z + N$ (protons + neutrons)',
        'Capacités maximales des couches (niveau lycée) : $K \\leq 2$ électrons, $L \\leq 8$ électrons, $M \\leq 8$ électrons',
        'Isotopes : même $Z$, $A$ différent (donc $N$ différent)'
      ],
      recap: [
        'L\'atome est presque entièrement vide : le noyau ($\\approx 10^{-15}$ m) est environ $100\\,000$ fois plus petit que l\'atome entier ($\\approx 10^{-10}$ m).',
        'Le numéro atomique $Z$ (nombre de protons) définit l\'élément chimique ; le nombre de masse $A = Z+N$ définit l\'isotope précis.',
        'Les électrons se répartissent en couches $K$, $L$, $M$ (maximum $2$, $8$, $8$ au niveau lycée), en remplissant toujours la couche la plus proche du noyau en premier.',
        'La couche de <strong>valence</strong> (la couche externe) détermine la réactivité chimique de l\'atome et sa position dans le tableau périodique.'
      ],
      piege: 'Une confusion fréquente consiste à mélanger le numéro atomique $Z$ (nombre de protons, qui définit l\'élément chimique) et le nombre de masse $A$ (protons + neutrons). Attention : deux isotopes d\'un même élément ont toujours le <strong>même $Z$</strong> (donc les mêmes propriétés chimiques) mais un $A$ différent, car seul leur nombre de neutrons varie.'
    },

    quiz: [
      {
        q: 'Un atome neutre possède $17$ protons. Combien d\'électrons possède-t-il ?',
        options: [
          '$8$ électrons',
          '$17$ électrons',
          '$34$ électrons',
          'Cela dépend du nombre de neutrons'
        ],
        answer: 1,
        correction: 'Un atome <strong>neutre</strong> possède toujours autant d\'électrons que de protons : $17$ protons impliquent $17$ électrons, quel que soit le nombre de neutrons (qui n\'a aucune influence sur la charge électrique).'
      },
      {
        q: 'Le carbone 12 et le carbone 14 sont deux isotopes du carbone ($Z=6$). Que peut-on affirmer ?',
        options: [
          'Ils ont un nombre de protons différent',
          'Ils ont le même nombre de neutrons',
          'Ils ont le même nombre de protons mais un nombre de neutrons différent',
          'Ce sont deux éléments chimiques différents'
        ],
        answer: 2,
        correction: 'Des isotopes ont toujours le <strong>même numéro atomique</strong> $Z$ (même élément chimique), mais un nombre de neutrons différent : le carbone 12 a $6$ neutrons ($N=12-6$), le carbone 14 en a $8$ ($N=14-6$).'
      },
      {
        q: 'Un atome possède $15$ électrons. En suivant la règle de répartition $K \\leq 2$, $L \\leq 8$, $M \\leq 8$, quelle est sa couche de valence ?',
        options: [
          'La couche $K$, avec $2$ électrons',
          'La couche $L$, avec $8$ électrons',
          'La couche $M$, avec $5$ électrons',
          'La couche $M$, avec $8$ électrons'
        ],
        answer: 2,
        correction: 'On remplit $K$ (2 électrons), puis $L$ (8 électrons) : $2+8=10$. Il reste $15-10=5$ électrons, qui se placent sur la couche $M$ : c\'est donc la couche de valence, avec $5$ électrons.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var elements = [
          { nom: 'lithium', symbole: 'Li', Z: 3, A: 7 },
          { nom: 'béryllium', symbole: 'Be', Z: 4, A: 9 },
          { nom: 'carbone', symbole: 'C', Z: 6, A: 12 },
          { nom: 'azote', symbole: 'N', Z: 7, A: 14 },
          { nom: 'oxygène', symbole: 'O', Z: 8, A: 16 },
          { nom: 'fluor', symbole: 'F', Z: 9, A: 19 },
          { nom: 'sodium', symbole: 'Na', Z: 11, A: 23 },
          { nom: 'magnésium', symbole: 'Mg', Z: 12, A: 24 },
          { nom: 'aluminium', symbole: 'Al', Z: 13, A: 27 },
          { nom: 'silicium', symbole: 'Si', Z: 14, A: 28 },
          { nom: 'phosphore', symbole: 'P', Z: 15, A: 31 },
          { nom: 'soufre', symbole: 'S', Z: 16, A: 32 },
          { nom: 'chlore', symbole: 'Cl', Z: 17, A: 35 }
        ];
        var typeExo = pick(['neutrons', 'valence']);
        var element = pick(elements);

        if (typeExo === 'neutrons') {
          var N = element.A - element.Z;
          var contexte = pick([
            'un capteur à semi-conducteurs',
            'une analyse de spectroscopie stellaire',
            'un exercice de datation isotopique',
            'un contrôle qualité en laboratoire de chimie'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', on étudie un atome de ' + element.nom + ' (symbole ' + element.symbole + '), de numéro atomique $Z = ' + element.Z + '$ et de nombre de masse $A = ' + element.A + '$.<br/><br/>Calcule le nombre de neutrons $N$ contenus dans le noyau de cet atome.',
            answer: N,
            tolerance: 0,
            unit: '',
            hint: 'Utilise la relation $A = Z + N$, donc $N = A - Z$.',
            solution: [
              'Relation entre nombre de masse, numéro atomique et nombre de neutrons : $A = Z + N$.',
              'On isole $N$ : $N = A - Z = ' + element.A + ' - ' + element.Z + '$.',
              'Résultat : $N = ' + N + '$ neutrons.'
            ]
          };
        } else {
          // Restreindre aux elements Z=11 a 17 pour rester dans la regle simplifiee K<=2, L<=8, M<=8
          var elementsValence = elements.filter(function (e) { return e.Z >= 11 && e.Z <= 17; });
          var el = pick(elementsValence);
          var Mcount = el.Z - 10; // K=2, L=8 rempli, reste sur M
          var contexte2 = pick([
            'un exercice sur le tableau périodique',
            'une étude de la réactivité chimique',
            'un contrôle de structure électronique',
            'une analyse de composition atomique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on étudie un atome de ' + el.nom + ' (symbole ' + el.symbole + '), de numéro atomique $Z = ' + el.Z + '$.<br/><br/>Sachant que les couches $K$ et $L$ sont totalement remplies (respectivement $2$ et $8$ électrons), calcule le nombre d\'électrons présents sur la couche de valence $M$.',
            answer: Mcount,
            tolerance: 0,
            unit: '',
            hint: 'La couche K contient 2 électrons, la couche L en contient 8 : le reste des Z électrons se trouve sur la couche M.',
            solution: [
              'Nombre total d\'électrons (atome neutre) : $Z = ' + el.Z + '$.',
              'Couches internes déjà remplies : $K(2) + L(8) = 10$ électrons.',
              'Électrons restants sur la couche de valence $M$ : $' + el.Z + ' - 10 = ' + Mcount + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Le chlore naturel est un mélange de deux isotopes principaux : le chlore 35 (le plus abondant) et le chlore 37. Le numéro atomique du chlore est $Z = 17$.',
      tasks: [
        'Donner la composition du noyau de l\'atome de chlore 35 (nombre de protons et de neutrons), ainsi que son nombre d\'électrons.',
        'Donner la composition du noyau de l\'atome de chlore 37, et comparer avec celle du chlore 35.',
        'Expliquer pourquoi ces deux atomes sont considérés comme un seul et même élément chimique, bien qu\'ils n\'aient pas la même masse.'
      ],
      solutions: [
        'Pour le chlore 35 ($A=35$) : $Z=17$ protons, $N = A - Z = 35 - 17 = 18$ neutrons. Atome neutre : $17$ électrons.',
        'Pour le chlore 37 ($A=37$) : $Z=17$ protons (identique), $N = 37 - 17 = 20$ neutrons, $17$ électrons (identique). Comparaison : les deux isotopes ont le <strong>même nombre de protons et d\'électrons</strong>, mais le chlore 37 possède $2$ neutrons de plus que le chlore 35.',
        'Le numéro atomique $Z$ (donc le nombre de protons <strong>et</strong> d\'électrons pour un atome neutre) est identique dans les deux cas : c\'est lui qui définit l\'élément chimique « chlore » et sa répartition électronique, donc son comportement chimique. Le nombre de neutrons, qui ne modifie ni la charge ni la structure électronique, n\'a quasiment aucune influence sur les propriétés chimiques : c\'est pourquoi deux isotopes restent le même élément.'
      ],
      finalAnswer: 'Chlore 35 : $17$ protons, $18$ neutrons, $17$ électrons. Chlore 37 : $17$ protons, $20$ neutrons, $17$ électrons. Les deux isotopes partagent le même numéro atomique $Z=17$ (même structure électronique, donc même comportement chimique) mais diffèrent par leur nombre de neutrons et donc par leur nombre de masse $A$.'
    },

    evaluation: {
      title: 'Évaluation — Le modèle de l\'atome',
      duration: '25 min',
      questions: [
        {
          statement: 'Le noyau d\'un atome est constitué de :',
          type: 'multiple-choice',
          options: [
            'Protons et électrons',
            'Protons et neutrons',
            'Électrons et neutrons',
            'Uniquement de protons'
          ],
          answer: 1,
          points: 2,
          correction: 'Le noyau contient les <strong>protons</strong> et les <strong>neutrons</strong> (les nucléons) ; les électrons se trouvent autour du noyau, dans les couches électroniques.'
        },
        {
          statement: 'Un atome de magnésium a pour numéro atomique $Z=12$ et pour nombre de masse $A=24$. Calculer son nombre de neutrons.',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$N = A - Z = 24 - 12 = 12$ neutrons.'
        },
        {
          statement: 'Deux atomes isotopes d\'un même élément ont toujours :',
          type: 'multiple-choice',
          options: [
            'Le même nombre de neutrons',
            'Le même nombre de protons, mais un nombre de neutrons différent',
            'Un nombre de protons différent',
            'Le même nombre de masse $A$'
          ],
          answer: 1,
          points: 2,
          correction: 'Des isotopes ont le même numéro atomique $Z$ (même nombre de protons), donc les mêmes propriétés chimiques, mais un nombre de neutrons différent, donc un nombre de masse $A$ différent.'
        },
        {
          statement: 'Un atome possède $Z=16$ électrons. En appliquant la règle $K \\leq 2$, $L \\leq 8$, $M \\leq 8$, combien d\'électrons se trouvent sur sa couche de valence $M$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Couches internes : $K(2)+L(8)=10$. Électrons restants sur $M$ : $16-10=6$.'
        },
        {
          statement: 'Le noyau d\'un atome est environ $100\\,000$ fois plus petit que l\'atome entier. On peut en conclure que l\'atome est :',
          type: 'multiple-choice',
          options: [
            'Presque entièrement rempli de matière',
            'Presque entièrement vide',
            'De la même taille que son noyau',
            'Plus petit que son noyau'
          ],
          answer: 1,
          points: 1,
          correction: 'Le noyau n\'occupe qu\'une fraction infime du volume de l\'atome : l\'atome est donc presque entièrement constitué de <strong>vide</strong>, les électrons ne représentant eux-mêmes qu\'une masse négligeable.'
        }
      ]
    }
  });
