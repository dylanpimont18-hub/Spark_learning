/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-transformations-chimiques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-transformations-chimiques',
    level: 1, subject: 'physique',
    icon: '🔥',
    title: 'Les transformations chimiques',
    subtitle: 'Réactifs, produits, conservation de la masse et des atomes lors d\'une réaction chimique',
    keywords: ['Réaction chimique', 'Réactifs', 'Produits', 'Conservation de la masse', 'Combustion'],
    physics: 'Les transformations chimiques sont partout : la combustion du bois dans une cheminée, la formation de la rouille sur une pièce métallique, la cuisson d\'un aliment ou la respiration. Comprendre la conservation de la masse permet, par exemple, de calculer la quantité de dioxyde de carbone rejetée par une combustion.',

    cours: {
      intro: 'Une <strong>transformation chimique</strong> est une transformation au cours de laquelle des espèces chimiques de départ, appelées <strong>réactifs</strong>, disparaissent pour laisser place à de nouvelles espèces chimiques, appelées <strong>produits</strong>. C\'est le cas, par exemple, lorsqu\'une bougie brûle : la cire et le dioxygène de l\'air (réactifs) se transforment en dioxyde de carbone et en eau (produits).<br/><br/>À l\'échelle microscopique, aucun atome n\'est créé ni détruit pendant une transformation chimique : les atomes des réactifs se <strong>réorganisent</strong> simplement pour former les molécules des produits. C\'est ce principe, énoncé par le chimiste Antoine Lavoisier, qui garantit la <strong>conservation de la masse</strong> au cours de la réaction.<br/><br/>Une transformation particulièrement fréquente est la <strong>combustion</strong> : la réaction entre un combustible (bois, gaz, essence…) et un comburant, le plus souvent le dioxygène de l\'air, qui libère de la chaleur et souvent de la lumière.',
      definitions: [
        { term: 'Transformation chimique', def: 'Transformation au cours de laquelle des <strong>réactifs</strong> disparaissent pour former de nouveaux <strong>produits</strong>, différents chimiquement. Les atomes présents dans les réactifs se retrouvent tous dans les produits, simplement réarrangés.' },
        { term: 'Réactif / Produit', def: 'Un <strong>réactif</strong> est une espèce chimique présente avant la réaction et consommée pendant celle-ci. Un <strong>produit</strong> est une espèce chimique absente avant la réaction et formée pendant celle-ci.' },
        { term: 'Conservation de la masse (loi de Lavoisier)', def: '« Rien ne se perd, rien ne se crée, tout se transforme. » La masse totale des produits formés est toujours égale à la masse totale des réactifs consommés : $m_{réactifs} = m_{produits}$.' },
        { term: 'Combustion', def: 'Transformation chimique entre un <strong>combustible</strong> et un <strong>comburant</strong> (souvent le dioxygène de l\'air), qui produit de l\'énergie sous forme de chaleur et parfois de lumière (flamme).' }
      ],
      method: {
        title: 'Exploiter la conservation de la masse en 3 étapes',
        steps: [
          '<strong>Identifier les réactifs et le produit</strong> de la transformation chimique étudiée, à partir de l\'énoncé ou d\'un schéma de la réaction.',
          '<strong>Repérer les masses connues</strong> parmi les réactifs consommés et les produits formés (attention : un réactif ou un produit gazeux possède aussi une masse, même s\'il est invisible).',
          '<strong>Appliquer la conservation de la masse</strong> : la masse totale des réactifs consommés est égale à la masse totale des produits formés. Une simple addition ou soustraction permet alors de trouver la masse manquante.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Transformation chimique',
        title: 'Conservation de la masse lors de la combustion du carbone',
        description: 'Avant la réaction, le carbone et le dioxygène (réactifs) sont séparés ; après la réaction, ils forment le dioxyde de carbone (produit). Les mêmes atomes se retrouvent des deux côtés, et la masse totale ne change pas.',
        svg: `
          <svg viewBox="0 0 560 250" role="img" aria-labelledby="transf-title transf-desc">
            <title id="transf-title">Conservation de la masse lors d'une reaction de combustion</title>
            <desc id="transf-desc">A gauche, avant la reaction, un atome de carbone isole et une molecule de dioxygene composee de deux atomes d'oxygene lies. Une fleche horizontale symbolise la reaction chimique. A droite, apres la reaction, une molecule de dioxyde de carbone lineaire formee d'un atome de carbone entoure de deux atomes d'oxygene. En dessous, une balance a deux plateaux parfaitement horizontale illustre l'egalite entre la masse totale des reactifs et la masse totale des produits.</desc>

            <defs>
              <marker id="arrow-phys4e-transf" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- Panneau A : avant la reaction -->
            <text class="annotation-label" x="140" y="30" text-anchor="middle">Avant la réaction (réactifs)</text>

            <line class="frame-line" x1="170" y1="90" x2="170" y2="130"></line>
            <circle class="plot-point-alt" cx="90" cy="110" r="14"></circle>
            <text class="tick-label" x="90" y="114" text-anchor="middle">C</text>
            <circle class="plot-point-alt" cx="170" cy="90" r="12"></circle>
            <text class="tick-label" x="170" y="94" text-anchor="middle">O</text>
            <circle class="plot-point-alt" cx="170" cy="130" r="12"></circle>
            <text class="tick-label" x="170" y="134" text-anchor="middle">O</text>

            <!-- Fleche de reaction -->
            <line class="curve-main" x1="230" y1="110" x2="330" y2="110" marker-end="url(#arrow-phys4e-transf)"></line>
            <text class="annotation-label" x="280" y="95" text-anchor="middle">réaction chimique</text>
            <text class="label-soft" x="280" y="128" text-anchor="middle">(combustion)</text>

            <!-- Panneau B : apres la reaction -->
            <text class="annotation-label" x="420" y="30" text-anchor="middle">Après la réaction (produit)</text>

            <line class="frame-line" x1="370" y1="110" x2="470" y2="110"></line>
            <circle class="plot-point-alt" cx="370" cy="110" r="12"></circle>
            <text class="tick-label" x="370" y="114" text-anchor="middle">O</text>
            <circle class="plot-point-alt" cx="420" cy="110" r="14"></circle>
            <text class="tick-label" x="420" y="114" text-anchor="middle">C</text>
            <circle class="plot-point-alt" cx="470" cy="110" r="12"></circle>
            <text class="tick-label" x="470" y="114" text-anchor="middle">O</text>

            <!-- Balance en equilibre -->
            <text class="label-soft" x="280" y="155" text-anchor="middle">balance en équilibre : conservation de la masse</text>
            <line class="frame-line" x1="170" y1="165" x2="390" y2="165"></line>
            <polygon class="frame-line" fill="none" points="280,165 265,195 295,195"></polygon>
            <line class="frame-line" x1="170" y1="165" x2="170" y2="205"></line>
            <line class="frame-line" x1="150" y1="205" x2="190" y2="205"></line>
            <line class="frame-line" x1="390" y1="165" x2="390" y2="205"></line>
            <line class="frame-line" x1="370" y1="205" x2="410" y2="205"></line>
            <text class="tick-label" x="170" y="222" text-anchor="middle">m(réactifs)</text>
            <text class="tick-label" x="390" y="222" text-anchor="middle">m(produits)</text>
          </svg>
        `,
        notes: [
          'Lors d\'une <strong>transformation chimique</strong>, les réactifs (ici le carbone $C$ et le dioxygène $O_2$) disparaissent et de nouveaux produits apparaissent (ici le dioxyde de carbone $CO_2$) : les atomes se réorganisent, mais aucun atome n\'est créé ni détruit.',
          'On retrouve exactement les mêmes atomes avant et après la réaction : 1 atome de carbone et 2 atomes d\'oxygène, simplement réarrangés autrement. C\'est ce qu\'on appelle la <strong>conservation des atomes</strong>.',
          'La balance en équilibre traduit la <strong>loi de conservation de la masse</strong> énoncée par Lavoisier : la masse totale des produits formés est toujours égale à la masse totale des réactifs consommés.'
        ],
        reading: 'Suis la flèche de gauche à droite : les réactifs (carbone et dioxygène) se transforment en produit (dioxyde de carbone) ; en dessous, la balance en équilibre montre que la masse totale ne change pas au cours de la réaction.',
        caption: 'Combustion du carbone dans le dioxygène : les atomes présents avant la réaction se retrouvent tous après, et la masse totale des réactifs est égale à la masse totale des produits.'
      },
      example: {
        statement: 'On brûle une masse $m_C = 12$ g de carbone dans du dioxygène. La réaction consomme une masse $m_{O_2} = 32$ g de dioxygène et forme uniquement du dioxyde de carbone.<br/><br/>Calcule la masse $m_{CO_2}$ de dioxyde de carbone formée.',
        steps: [
          'Réactifs de cette transformation : le carbone (masse $m_C$) et le dioxygène (masse $m_{O_2}$). Produit : le dioxyde de carbone (masse $m_{CO_2}$).',
          'D\'après la loi de conservation de la masse, la masse totale des réactifs consommés est égale à la masse totale du produit formé : $m_C + m_{O_2} = m_{CO_2}$.',
          'Application numérique : $m_{CO_2} = 12 + 32$.'
        ],
        answer: '$m_{CO_2} = 44$ g. Même si le dioxygène consommé est un gaz invisible, sa masse compte pleinement dans le bilan : c\'est bien la somme des deux masses de réactifs qui donne la masse du produit formé.'
      },
      formulas: [
        'Conservation de la masse (loi de Lavoisier) : $m_{réactifs} = m_{produits}$',
        'Masse totale des réactifs consommés : $m_{réactifs} = m_1 + m_2 + \\dots$ (somme des masses de chaque réactif)'
      ],
      recap: [
        'Une transformation chimique fait disparaître des <strong>réactifs</strong> et apparaître de nouveaux <strong>produits</strong>, différents chimiquement.',
        'Aucun atome n\'est créé ni détruit pendant une transformation chimique : les atomes se <strong>réorganisent</strong> seulement.',
        'La loi de Lavoisier garantit que la <strong>masse totale</strong> est conservée : $m_{réactifs} = m_{produits}$.',
        'La <strong>combustion</strong> est une transformation chimique entre un combustible et un comburant (souvent le dioxygène), qui libère chaleur et parfois lumière.'
      ],
      piege: 'Une erreur fréquente est d\'oublier de comptabiliser la masse d\'un réactif ou d\'un produit gazeux, comme le dioxygène $O_2$ ou le dioxyde de carbone $CO_2$, sous prétexte qu\'un gaz semble « ne rien peser ». Attention, un gaz possède bel et bien une masse : il doit toujours être inclus dans le bilan de conservation de la masse, au même titre qu\'un solide ou qu\'un liquide.'
    },

    quiz: [
      {
        q: 'Que devient un réactif au cours d\'une transformation chimique ?',
        options: [
          'Il reste inchangé',
          'Il est consommé et disparaît, remplacé par de nouveaux produits',
          'Il se transforme en un autre réactif',
          'Sa masse devient nulle'
        ],
        answer: 1,
        correction: 'Un réactif est présent avant la réaction et disparaît progressivement au cours de celle-ci, tandis que de nouvelles espèces chimiques, les produits, apparaissent.'
      },
      {
        q: 'D\'après la loi de conservation de la masse énoncée par Lavoisier :',
        options: [
          'La masse des produits est toujours inférieure à celle des réactifs',
          'La masse totale des réactifs consommés est égale à la masse totale des produits formés',
          'La masse ne peut se conserver que pour les solides',
          'La masse double systématiquement pendant une combustion'
        ],
        answer: 1,
        correction: '« Rien ne se perd, rien ne se crée, tout se transforme » : la masse totale des réactifs consommés est exactement égale à la masse totale des produits formés.'
      },
      {
        q: 'Lors de la combustion du carbone ($C + O_2 \\rightarrow CO_2$), que peut-on dire des atomes présents ?',
        options: [
          'De nouveaux atomes d\'oxygène apparaissent pendant la réaction',
          'On retrouve exactement les mêmes atomes avant et après, simplement réarrangés',
          'Les atomes de carbone disparaissent complètement',
          'Le nombre total d\'atomes diminue pendant la réaction'
        ],
        answer: 1,
        correction: 'Aucun atome n\'est créé ni détruit au cours d\'une transformation chimique : les 1 atome de carbone et 2 atomes d\'oxygène présents avant la réaction se retrouvent tous, réorganisés, dans la molécule de dioxyde de carbone.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['produit', 'reactif']);
        var contextes = [
          'un feu de camp où du bois brûle au contact du dioxygène de l\'air',
          'la combustion du gaz dans une gazinière',
          'la formation de rouille sur une pièce métallique exposée à l\'air humide',
          'une réaction entre un comprimé effervescent et de l\'eau',
          'la combustion d\'une bougie'
        ];

        if (typeExo === 'produit') {
          var m1 = randFloat(1, 50, 1);
          var m2 = randFloat(1, 50, 1);
          var mProduits = parseFloat((m1 + m2).toFixed(1));
          var contexte = pick(contextes);
          return {
            statement: 'Lors de ' + contexte + ', une masse $m_1 = ' + fr(m1, 1) + '$ g d\'un premier réactif réagit entièrement avec une masse $m_2 = ' + fr(m2, 1) + '$ g d\'un second réactif.<br/><br/>D\'après la loi de conservation de la masse, calcule la masse totale $m_{produits}$ des produits formés (en g).',
            answer: mProduits,
            tolerance: 0.2,
            unit: 'g',
            hint: 'La masse totale des produits formés est égale à la somme des masses des réactifs consommés (conservation de la masse) : $m_{produits} = m_1 + m_2$.',
            solution: [
              'Conservation de la masse : $m_{produits} = m_1 + m_2$.',
              'Application numérique : $m_{produits} = ' + fr(m1, 1) + ' + ' + fr(m2, 1) + '$.',
              'Résultat : $m_{produits} = ' + fr(mProduits, 1) + '$ g.'
            ]
          };
        } else {
          var mTotal = randFloat(10, 80, 1);
          var mConnu = randFloat(1, parseFloat((mTotal - 1).toFixed(1)), 1);
          var mInconnu = parseFloat((mTotal - mConnu).toFixed(1));
          var contexte2 = pick(contextes);
          return {
            statement: 'Lors de ' + contexte2 + ', la réaction entre deux réactifs forme une masse totale $m_{produits} = ' + fr(mTotal, 1) + '$ g de produits. On sait que la masse du premier réactif consommé est $m_1 = ' + fr(mConnu, 1) + '$ g.<br/><br/>Calcule la masse $m_2$ du second réactif consommé (en g).',
            answer: mInconnu,
            tolerance: 0.2,
            unit: 'g',
            hint: 'La conservation de la masse donne $m_1 + m_2 = m_{produits}$, donc $m_2 = m_{produits} - m_1$.',
            solution: [
              'Conservation de la masse : $m_1 + m_2 = m_{produits}$, donc $m_2 = m_{produits} - m_1$.',
              'Application numérique : $m_2 = ' + fr(mTotal, 1) + ' - ' + fr(mConnu, 1) + '$.',
              'Résultat : $m_2 = ' + fr(mInconnu, 1) + '$ g.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une pièce métallique en fer, de masse initiale $m_{Fe} = 42$ g, rouille progressivement au contact du dioxygène de l\'air : toute la pièce se transforme en oxyde de fer (rouille). La masse de dioxygène ayant réagi au cours de cette transformation est $m_{O_2} = 18$ g.',
      tasks: [
        'Identifier les réactifs et le produit de cette transformation chimique.',
        'D\'après la loi de conservation de la masse, calculer la masse $m_{rouille}$ de rouille formée.',
        'Calculer le pourcentage que représente la masse de dioxygène $m_{O_2}$ par rapport à la masse totale de rouille formée (arrondi à l\'unité).'
      ],
      solutions: [
        'Les réactifs sont le fer ($Fe$) et le dioxygène ($O_2$) de l\'air ; le produit formé est la rouille (oxyde de fer).',
        'Conservation de la masse : $m_{rouille} = m_{Fe} + m_{O_2} = 42 + 18 = 60$ g.',
        'Pourcentage de dioxygène : $\\dfrac{m_{O_2}}{m_{rouille}} \\times 100 = \\dfrac{18}{60} \\times 100 = 30$%.'
      ],
      finalAnswer: '$m_{rouille} = 60$ g, dont $30$% proviennent du dioxygène capté dans l\'air. Cette prise de masse explique pourquoi une pièce rouillée pèse toujours plus lourd que la pièce de fer d\'origine : la rouille n\'est pas simplement de la « poussière », c\'est une nouvelle espèce chimique qui incorpore les atomes d\'oxygène de l\'air.'
    },

    evaluation: {
      title: 'Évaluation — Les transformations chimiques',
      duration: '25 min',
      questions: [
        {
          statement: 'Une réaction chimique consomme $m_1 = 15$ g d\'un réactif et $m_2 = 25$ g d\'un second réactif. Calculer la masse totale de produits formés (en g).',
          type: 'numeric',
          answer: 40,
          tolerance: 0.5,
          unit: 'g',
          points: 2,
          correction: '$m_{produits} = m_1 + m_2 = 15 + 25 = 40$ g.'
        },
        {
          statement: 'Pendant une transformation chimique, les atomes des réactifs :',
          type: 'multiple-choice',
          options: [
            'Disparaissent complètement',
            'Se réorganisent pour former les produits, sans être créés ni détruits',
            'Se dédoublent pour former deux fois plus de matière',
            'Ne participent pas à la réaction'
          ],
          answer: 1,
          points: 2,
          correction: 'Les atomes ne sont jamais créés ni détruits pendant une transformation chimique : ils se réorganisent pour former de nouvelles molécules, celles des produits.'
        },
        {
          statement: 'Une réaction chimique forme une masse totale de produits $m_{produits} = 70$ g. La masse du premier réactif consommé est $m_1 = 20$ g. Calculer la masse $m_2$ du second réactif (en g).',
          type: 'numeric',
          answer: 50,
          tolerance: 0.5,
          unit: 'g',
          points: 2,
          correction: '$m_2 = m_{produits} - m_1 = 70 - 20 = 50$ g.'
        },
        {
          statement: 'La loi de conservation de la masse, énoncée par Lavoisier, peut se résumer par la phrase :',
          type: 'multiple-choice',
          options: [
            '« Plus il y a de réactifs, plus la masse augmente »',
            '« Rien ne se perd, rien ne se crée, tout se transforme »',
            '« La masse des gaz ne compte pas dans le bilan »',
            '« Chaque réaction double la masse initiale »'
          ],
          answer: 1,
          points: 2,
          correction: 'Cette célèbre formule de Lavoisier traduit exactement la conservation de la masse : la matière change de forme chimique, mais sa masse totale reste inchangée.'
        },
        {
          statement: 'La combustion complète d\'un morceau de bois de masse $m_1 = 5$ g avec $m_2 = 15$ g de dioxygène forme uniquement des produits gazeux. Calculer la masse totale de ces produits (en g).',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'g',
          points: 1,
          correction: '$m_{produits} = m_1 + m_2 = 5 + 15 = 20$ g, même si les produits formés (dioxyde de carbone, vapeur d\'eau) sont invisibles.'
        }
      ]
    }
  });
