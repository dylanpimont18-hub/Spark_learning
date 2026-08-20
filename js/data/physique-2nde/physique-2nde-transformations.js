/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-transformations.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-transformations',
    level: 2, subject: 'physique',
    icon: '🔥',
    title: 'Transformation physique et chimique',
    subtitle: 'Transformation physique vs chimique, réactifs et produits, conservation de la masse (Lavoisier)',
    keywords: ['Transformation chimique', 'Transformation physique', 'Conservation de la masse', 'Équation de réaction', 'Lavoisier'],
    physics: 'Distinguer transformation physique et chimique permet de calculer les émissions de $CO_2$ d\'une combustion, de comprendre le durcissement du béton, de doser les réactifs d\'une synthèse industrielle, ou d\'expliquer pourquoi une glace qui fond ne change pas de composition chimique.',

    cours: {
      intro: 'De la glace qui fond à une bûche qui brûle, la matière se transforme sans cesse sous nos yeux. Mais toutes les transformations ne se valent pas : dans un cas, les espèces chimiques présentes restent les mêmes ; dans l\'autre, de nouvelles espèces apparaissent tandis que d\'autres disparaissent.<br/><br/>Cette distinction entre <strong>transformation physique</strong> et <strong>transformation chimique</strong> est fondamentale en chimie. Elle s\'accompagne d\'une loi fondatrice, énoncée par Antoine Lavoisier à la fin du XVIIIe siècle : au cours d\'une transformation chimique, <strong>rien ne se perd, rien ne se crée, tout se transforme</strong> — la masse totale se conserve.',
      definitions: [
        { term: 'Transformation physique', def: 'Modification de l\'état physique (fusion, vaporisation, solidification...) ou de la répartition (dissolution) de la matière, <strong>sans apparition de nouvelle espèce chimique</strong> : les espèces présentes avant et après sont identiques.' },
        { term: 'Transformation chimique', def: 'Transformation au cours de laquelle une ou plusieurs espèces chimiques, les <strong>réactifs</strong>, disparaissent, tandis que d\'autres, les <strong>produits</strong>, apparaissent. Elle est modélisée par une <strong>équation de réaction</strong>.' },
        { term: 'Conservation de la masse (loi de Lavoisier)', def: 'Dans un système fermé, la masse totale se conserve au cours d\'une transformation chimique : $m_{réactifs} = m_{produits}$.' },
        { term: 'Équation de réaction', def: 'Écriture symbolique Réactifs $\\rightarrow$ Produits, dont les nombres stœchiométriques sont ajustés pour que chaque élément chimique soit présent en <strong>même nombre d\'atomes</strong> avant et après.' }
      ],
      method: {
        title: 'Distinguer et modéliser une transformation en 3 étapes',
        steps: [
          '<strong>Observer</strong> si de nouvelles espèces chimiques apparaissent : si oui, c\'est une transformation <strong>chimique</strong> ; si les espèces restent identiques (seul l\'état physique ou la répartition change), c\'est une transformation <strong>physique</strong>.',
          'Pour une transformation chimique, <strong>identifier réactifs et produits</strong>, puis écrire l\'équation de réaction Réactifs $\\rightarrow$ Produits.',
          '<strong>Ajuster (équilibrer)</strong> les nombres stœchiométriques pour que chaque élément chimique soit en même nombre d\'atomes de part et d\'autre — c\'est ce qui garantit la conservation de la masse.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Transformation chimique et conservation de la masse',
        title: 'Combustion du carbone : $C + O_2 \\rightarrow CO_2$',
        description: 'Un atome de carbone réagit avec une molécule de dioxygène pour former une molécule de dioxyde de carbone. Le nombre d\'atomes de chaque élément (1 carbone, 2 oxygènes) est <strong>identique</strong> avant et après, et la masse totale se conserve.',
        svg: `
          <svg viewBox="0 0 560 270" role="img" aria-labelledby="transfo2nde-title transfo2nde-desc">
            <title id="transfo2nde-title">Combustion du carbone modelisee par une equation de reaction</title>
            <desc id="transfo2nde-desc">A gauche, sous le titre avant reactifs, un atome de carbone isole et une molecule de dioxygene composee de deux atomes d'oxygene relies sont representes par des cercles, avec une masse totale de quarante-quatre grammes. Une fleche horizontale annotee reaction chimique relie cette zone a la partie droite, sous le titre apres produit, ou une molecule de dioxyde de carbone lineaire est representee par trois cercles alignes, oxygene carbone oxygene, avec la meme masse totale de quarante-quatre grammes. Une legende en bas precise que les cercles pleins representent des atomes de carbone et les cercles creux des atomes d'oxygene.</desc>

            <defs>
              <marker id="arrow-phys2-transfo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- AVANT : reactifs -->
            <text class="label-soft" x="160" y="100" text-anchor="middle">AVANT (réactifs)</text>

            <circle class="plot-point" cx="110" cy="150" r="11"></circle>
            <text class="tick-label" x="110" y="176" text-anchor="middle">C</text>

            <circle class="plot-point-alt" cx="170" cy="150" r="11"></circle>
            <circle class="plot-point-alt" cx="192" cy="150" r="11"></circle>
            <text class="tick-label" x="181" y="176" text-anchor="middle">O₂</text>

            <text class="annotation-label" x="150" y="204" text-anchor="middle">12 g + 32 g = 44 g</text>

            <!-- fleche de reaction -->
            <line class="curve-main" x1="240" y1="150" x2="330" y2="150" marker-end="url(#arrow-phys2-transfo)"></line>
            <text class="annotation-label" x="285" y="138" text-anchor="middle">réaction chimique</text>

            <!-- APRES : produit -->
            <text class="label-soft" x="430" y="100" text-anchor="middle">APRÈS (produit)</text>

            <circle class="plot-point-alt" cx="397" cy="150" r="11"></circle>
            <circle class="plot-point" cx="419" cy="150" r="11"></circle>
            <circle class="plot-point-alt" cx="441" cy="150" r="11"></circle>
            <text class="tick-label" x="419" y="176" text-anchor="middle">CO₂</text>

            <text class="annotation-label" x="419" y="204" text-anchor="middle">44 g</text>

            <!-- legende -->
            <circle class="plot-point" cx="170" cy="234" r="6"></circle>
            <text class="tick-label" x="182" y="238" text-anchor="start">atome de carbone (C)</text>
            <circle class="plot-point-alt" cx="360" cy="234" r="6"></circle>
            <text class="tick-label" x="372" y="238" text-anchor="start">atome d'oxygène (O)</text>
          </svg>
        `,
        notes: [
          'Avant la réaction, on compte $1$ atome de carbone et $2$ atomes d\'oxygène (dans la molécule $O_2$) : soit une masse de $12 + 32 = 44$ g pour une mole de chaque réactif.',
          'Après la réaction, la molécule de dioxyde de carbone $CO_2$ contient exactement $1$ atome de carbone et $2$ atomes d\'oxygène : <strong>aucun atome n\'a disparu ni n\'a été créé</strong>, ils se sont seulement réorganisés.',
          'La masse totale est identique avant et après ($44$ g $= 44$ g) : c\'est la <strong>loi de conservation de la masse</strong> énoncée par Lavoisier, directement liée à la conservation du nombre d\'atomes de chaque élément.'
        ],
        reading: 'Compte d\'abord les atomes à gauche (avant), puis à droite (après) : même nombre de ronds pleins (carbone) et de ronds creux (oxygène) de part et d\'autre de la flèche.',
        caption: 'Combustion du carbone $C + O_2 \\rightarrow CO_2$ : le nombre d\'atomes de chaque élément et la masse totale ($44$ g) sont conservés entre les réactifs et le produit.'
      },
      example: {
        statement: 'On réalise la combustion complète de $n = 1$ mol de méthane $CH_4$ dans le dioxygène, selon l\'équation $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$. On donne $M(CH_4) = 16$ g/mol, $M(O_2) = 32$ g/mol, $M(CO_2) = 44$ g/mol, $M(H_2O) = 18$ g/mol.<br/><br/>Vérifie que la masse totale se conserve au cours de cette réaction.',
        steps: [
          'Masse des réactifs : $m(CH_4) = 1 \\times 16 = 16$ g. L\'équation indique $2$ mol de $O_2$ consommées : $m(O_2) = 2 \\times 32 = 64$ g. Masse totale des réactifs : $16 + 64 = 80$ g.',
          'Masse des produits : $m(CO_2) = 1 \\times 44 = 44$ g. L\'équation indique $2$ mol de $H_2O$ formées : $m(H_2O) = 2 \\times 18 = 36$ g. Masse totale des produits : $44 + 36 = 80$ g.',
          'Comparaison : $80$ g de réactifs consommés, $80$ g de produits formés.'
        ],
        answer: 'La masse totale ($80$ g) est bien conservée, conformément à la loi de Lavoisier. Ce résultat n\'est pas une coïncidence : il découle directement du fait que l\'équation de réaction est équilibrée (même nombre d\'atomes de C, H et O de chaque côté).'
      },
      formulas: [
        'Conservation de la masse (Lavoisier) : $m_{réactifs} = m_{produits}$ (dans un système fermé)',
        'Équation de réaction : Réactifs $\\rightarrow$ Produits, avec des nombres stœchiométriques ajustés',
        'Une transformation chimique fait apparaître de nouvelles espèces chimiques ; une transformation physique conserve les espèces déjà présentes',
        'Chaque élément chimique se retrouve en <strong>même nombre d\'atomes</strong> dans les réactifs et dans les produits'
      ],
      recap: [
        'Une <strong>transformation physique</strong> change l\'état ou la répartition de la matière, sans nouvelle espèce chimique.',
        'Une <strong>transformation chimique</strong> fait disparaître des réactifs et apparaître des produits, via une réaction chimique.',
        'La <strong>masse totale se conserve</strong> (loi de Lavoisier) dans un système fermé : $m_{réactifs} = m_{produits}$.',
        'Une équation de réaction équilibrée conserve le nombre d\'atomes de <strong>chaque élément</strong> chimique.'
      ],
      piege: 'Une confusion fréquente est de croire que dissoudre du sucre dans l\'eau est une transformation chimique, puisque le sucre semble « disparaître » à l\'œil nu. Attention : les molécules de sucre sont toujours présentes, simplement dispersées entre les molécules d\'eau — aucune nouvelle espèce chimique n\'apparaît, c\'est une <strong>transformation physique</strong> (une dissolution), pas une transformation chimique.'
    },

    quiz: [
      {
        q: 'Laquelle de ces transformations est une transformation PHYSIQUE ?',
        options: [
          'La combustion du bois dans une cheminée',
          'La fusion de la glace en eau liquide',
          'La rouille (oxydation) d\'un clou en fer',
          'La digestion des aliments'
        ],
        answer: 1,
        correction: 'La fusion ne change pas l\'espèce chimique : l\'eau reste de l\'eau ($H_2O$), qu\'elle soit solide ou liquide. C\'est une <strong>transformation physique</strong>. Les trois autres exemples font apparaître de nouvelles espèces chimiques : ce sont des transformations chimiques.'
      },
      {
        q: 'Lors d\'une réaction chimique en système fermé, $50$ g de réactifs sont totalement consommés. Quelle est la masse de produits obtenue ?',
        options: [
          '$50$ g',
          '$25$ g',
          '$100$ g',
          'Cela dépend de la réaction, impossible à savoir'
        ],
        answer: 0,
        correction: 'D\'après la loi de Lavoisier, dans un système fermé, la masse se conserve : $m_{réactifs} = m_{produits} = 50$ g, quelle que soit la réaction chimique considérée.'
      },
      {
        q: 'Dans l\'équation $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$, combien d\'atomes d\'oxygène trouve-t-on du côté des produits ?',
        options: [
          '$1$',
          '$2$',
          '$3$',
          '$4$'
        ],
        answer: 1,
        correction: 'Il y a $2$ molécules de $H_2O$, chacune contenant $1$ atome d\'oxygène : soit $2 \\times 1 = 2$ atomes d\'oxygène au total, ce qui correspond bien aux $2$ atomes d\'oxygène de la molécule $O_2$ côté réactifs (équation équilibrée).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['conservation_masse', 'masse_manquante']);

        if (typeExo === 'conservation_masse') {
          var mA = randFloat(2, 80, 1);
          var mB = randFloat(2, 80, 1);
          var mTotal = parseFloat((mA + mB).toFixed(1));
          var contexte = pick([
            'la combustion du butane dans un briquet',
            'une réaction acido-basique en système fermé',
            'la combustion de l\'essence dans un moteur expérimental étanche',
            'une réaction de synthèse en laboratoire de chimie industrielle',
            'la combustion du bois dans une enceinte fermée'
          ]);
          return {
            statement: 'Lors de ' + contexte + ', une masse $m_1 = ' + fr(mA, 1) + '$ g d\'un premier réactif réagit entièrement avec une masse $m_2 = ' + fr(mB, 1) + '$ g d\'un second réactif, dans un système fermé.<br/><br/>D\'après la loi de Lavoisier, calcule la masse totale de produits formés (en g, arrondie au dixième).',
            answer: mTotal,
            tolerance: Math.max(0.3, parseFloat((mTotal * 0.02).toFixed(1))),
            unit: 'g',
            hint: 'Dans un système fermé, la masse totale se conserve : $m_{produits} = m_1 + m_2$.',
            solution: [
              'Loi de conservation de la masse (Lavoisier) : $m_{produits} = m_{réactifs} = m_1 + m_2$.',
              'Application numérique : $m_{produits} = ' + fr(mA, 1) + ' + ' + fr(mB, 1) + '$.',
              'Résultat : $m_{produits} \\approx ' + fr(mTotal, 1) + '$ g.'
            ]
          };
        } else {
          var mReactifsTotal = randFloat(20, 150, 1);
          var mProduit1 = randFloat(5, parseFloat((mReactifsTotal - 5).toFixed(1)), 1);
          var mProduit2 = parseFloat((mReactifsTotal - mProduit1).toFixed(1));
          var contexte2 = pick([
            'la combustion complète d\'un hydrocarbure en laboratoire',
            'une réaction de neutralisation en système fermé',
            'la fermentation contrôlée en enceinte étanche',
            'une synthèse organique en système fermé'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', la masse totale des réactifs consommés est $m_{réactifs} = ' + fr(mReactifsTotal, 1) + '$ g. La réaction forme deux produits ; on mesure la masse du premier, $m_1 = ' + fr(mProduit1, 1) + '$ g.<br/><br/>D\'après la loi de Lavoisier, calcule la masse $m_2$ du second produit (en g, arrondie au dixième).',
            answer: mProduit2,
            tolerance: Math.max(0.3, parseFloat((mProduit2 * 0.02).toFixed(1))),
            unit: 'g',
            hint: 'La masse totale se conserve : $m_{réactifs} = m_1 + m_2$, donc $m_2 = m_{réactifs} - m_1$.',
            solution: [
              'Conservation de la masse : $m_{réactifs} = m_1 + m_2$.',
              'On isole $m_2$ : $m_2 = m_{réactifs} - m_1 = ' + fr(mReactifsTotal, 1) + ' - ' + fr(mProduit1, 1) + '$.',
              'Résultat : $m_2 \\approx ' + fr(mProduit2, 1) + '$ g.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une chaudière domestique brûle du méthane $CH_4$ selon l\'équation $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$. On brûle une masse $m(CH_4) = 160$ g de méthane avec un excès de dioxygène, $m(O_2) = 640$ g étant effectivement consommés. On donne $M(CH_4) = 16$ g/mol, $M(CO_2) = 44$ g/mol.',
      tasks: [
        'Calculer la masse totale des réactifs consommés.',
        'Sachant que la masse d\'eau formée est $m(H_2O) = 360$ g, en déduire par conservation de la masse la masse de dioxyde de carbone $CO_2$ rejetée.',
        'Vérifier ce résultat en calculant la quantité de matière de $CH_4$ initiale, puis la masse de $CO_2$ attendue stœchiométriquement.'
      ],
      solutions: [
        'Masse totale des réactifs : $m_{réactifs} = m(CH_4) + m(O_2) = 160 + 640 = 800$ g.',
        'D\'après la loi de Lavoisier, $m_{réactifs} = m(CO_2) + m(H_2O)$, donc $m(CO_2) = 800 - 360 = 440$ g.',
        'Quantité de matière initiale : $n(CH_4) = \\dfrac{m(CH_4)}{M(CH_4)} = \\dfrac{160}{16} = 10$ mol. L\'équation indique $1$ mol de $CO_2$ formée pour $1$ mol de $CH_4$ consommée, donc $n(CO_2) = 10$ mol, soit $m(CO_2) = 10 \\times 44 = 440$ g : on retrouve exactement le même résultat.'
      ],
      finalAnswer: '$m(CO_2) = 440$ g, confirmée par deux méthodes indépendantes (conservation de la masse, puis calcul stœchiométrique). Ce recoupement est une bonne pratique : si les deux méthodes ne donnaient pas le même résultat, cela signalerait une erreur de calcul ou une équation mal équilibrée.'
    },

    evaluation: {
      title: 'Évaluation — Transformation physique et chimique',
      duration: '30 min',
      questions: [
        {
          statement: 'La vaporisation de l\'eau lors de l\'ébullition est une transformation :',
          type: 'multiple-choice',
          options: [
            'Chimique, car l\'eau change complètement d\'aspect',
            'Physique, car l\'espèce chimique $H_2O$ reste la même',
            'Ni physique ni chimique',
            'Chimique uniquement si l\'eau est salée'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'eau liquide et la vapeur d\'eau sont la même espèce chimique ($H_2O$), seul l\'état physique change : c\'est une transformation <strong>physique</strong>.'
        },
        {
          statement: 'Dans un système fermé, $m_1 = 25$ g d\'un réactif réagissent entièrement avec $m_2 = 15$ g d\'un second réactif. Calculer la masse totale de produits formés (en g).',
          type: 'numeric',
          answer: 40,
          tolerance: 1,
          unit: 'g',
          points: 2,
          correction: '$m_{produits} = m_1 + m_2 = 25 + 15 = 40$ g (conservation de la masse).'
        },
        {
          statement: 'Dans l\'équation $N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$, combien d\'atomes d\'hydrogène trouve-t-on du côté des réactifs ?',
          type: 'multiple-choice',
          options: [
            '$2$',
            '$3$',
            '$6$',
            '$9$'
          ],
          answer: 2,
          points: 2,
          correction: 'Il y a $3$ molécules de $H_2$, chacune avec $2$ atomes d\'hydrogène : $3 \\times 2 = 6$ atomes d\'hydrogène, ce qui correspond bien aux $2$ molécules de $NH_3$ ($2 \\times 3 = 6$ atomes d\'hydrogène) côté produits.'
        },
        {
          statement: 'Dans un système fermé, la masse totale des réactifs consommés est $90$ g. La réaction forme deux produits ; le premier a une masse de $35$ g. Calculer la masse du second produit (en g).',
          type: 'numeric',
          answer: 55,
          tolerance: 1,
          unit: 'g',
          points: 3,
          correction: '$m_2 = m_{réactifs} - m_1 = 90 - 35 = 55$ g.'
        },
        {
          statement: 'Dissoudre du sel dans l\'eau fait « disparaître » le sel à l\'œil nu. S\'agit-il d\'une transformation chimique ?',
          type: 'multiple-choice',
          options: [
            'Oui, car le sel n\'est plus visible',
            'Non, c\'est une transformation physique : le sel est toujours présent, juste dispersé',
            'Oui, car une nouvelle espèce chimique est formée',
            'Impossible à dire sans analyse en laboratoire'
          ],
          answer: 1,
          points: 1,
          correction: 'Le sel dissous reste du sel, sous forme d\'ions dispersés dans l\'eau : aucune nouvelle espèce chimique n\'apparaît. C\'est une <strong>transformation physique</strong> (une dissolution), pas une transformation chimique.'
        }
      ]
    }
  });

