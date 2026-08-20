/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-transformations-chimiques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-transformations-chimiques',
    level: 1, subject: 'physique',
    icon: '🔥',
    title: 'Les transformations chimiques',
    subtitle: 'Réactifs, produits, combustions, loi de conservation de la masse, tests d\'identification de gaz',
    keywords: ['Transformation chimique', 'Combustion', 'Conservation de la masse', 'Lavoisier', 'Test caractéristique'],
    physics: 'Comprendre la combustion permet d\'expliquer le fonctionnement d\'une chaudière à gaz, d\'une bougie ou d\'un barbecue, mais aussi les précautions de sécurité liées aux flammes dans une pièce mal ventilée (renouvellement du dioxygène, évacuation du dioxyde de carbone).',

    cours: {
      intro: 'Une <strong>transformation chimique</strong> est un phénomène au cours duquel des espèces chimiques de départ, les <strong>réactifs</strong>, disparaissent pour laisser place à de nouvelles espèces chimiques, les <strong>produits</strong>. Contrairement à une transformation physique (comme la fusion de la glace), la nature même de la matière change : on ne retrouve plus les mêmes molécules qu\'au départ.<br/><br/>La <strong>combustion</strong> est l\'exemple de transformation chimique le plus courant : un combustible (bois, gaz, cire…) réagit avec un comburant, le plus souvent le <strong>dioxygène</strong> de l\'air, en dégageant de la chaleur et souvent de la lumière.<br/><br/>Aussi spectaculaire soit-elle, une transformation chimique ne fait <strong>ni apparaître ni disparaître de matière</strong> : les atomes présents avant la réaction se retrouvent tous après, simplement réorganisés autrement. C\'est la <strong>loi de conservation de la masse</strong>, énoncée par le chimiste français Antoine Lavoisier à la fin du XVIIIe siècle.',
      definitions: [
        { term: 'Transformation chimique', def: 'Processus au cours duquel des réactifs disparaissent pour former de nouveaux produits, aux propriétés chimiques différentes. À distinguer d\'une transformation physique (changement d\'état, dissolution), où la nature des espèces chimiques ne change pas.' },
        { term: 'Réactif', def: 'Espèce chimique présente <strong>avant</strong> la transformation chimique, et qui est consommée au cours de celle-ci.' },
        { term: 'Produit', def: 'Nouvelle espèce chimique formée <strong>pendant</strong> la transformation chimique, absente avant celle-ci.' },
        { term: 'Combustion', def: 'Réaction chimique, souvent vive et lumineuse, entre un <strong>combustible</strong> (ce qui brûle) et un <strong>comburant</strong> (le plus souvent le dioxygène de l\'air), dégageant de la chaleur.' },
        { term: 'Loi de conservation de la masse', def: 'Énoncée par Lavoisier : dans un système fermé, la masse totale ne change pas au cours d\'une transformation chimique. « Rien ne se perd, rien ne se crée, tout se transforme. »' }
      ],
      method: {
        title: 'Étudier une transformation chimique en 3 étapes',
        steps: [
          '<strong>Identifier réactifs et produits</strong> : lister les espèces chimiques présentes avant la transformation (réactifs) et celles présentes après (produits).<br/>Exemple : dans la combustion du carbone, les réactifs sont le carbone et le dioxygène ; le produit est le dioxyde de carbone.',
          '<strong>Écrire l\'équation de la réaction</strong> avec les formules chimiques, réactifs à gauche et produits à droite d\'une flèche, en vérifiant qu\'il y a bien <strong>autant d\'atomes de chaque élément</strong> de part et d\'autre.<br/>Exemple : $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$ : on retrouve $1$ atome de carbone et $2$ atomes d\'oxygène de chaque côté.',
          '<strong>Appliquer la loi de conservation de la masse</strong> pour un calcul : dans un système fermé, la somme des masses des réactifs consommés est égale à la somme des masses des produits formés.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conservation de la masse',
        title: 'Combustion du carbone : les atomes se réorganisent, la masse se conserve',
        description: 'Avant et après la transformation chimique, on retrouve exactement les mêmes atomes, uniquement réorganisés autrement. La balance reste à l\'équilibre : la masse totale ne change pas.',
        svg: `
          <svg viewBox="0 0 560 360" role="img" aria-labelledby="transfo-chim-title transfo-chim-desc">
            <title id="transfo-chim-title">Combustion du carbone et conservation de la masse</title>
            <desc id="transfo-chim-desc">En haut, un atome de carbone isole et une molecule de dioxygene, avant la transformation, sont relies par une fleche a une molecule de dioxyde de carbone apres la transformation : on y retrouve exactement le meme atome de carbone et les deux memes atomes d'oxygene, seulement reorganises. En bas, une balance a deux plateaux illustre la conservation de la masse : le plateau gauche porte le carbone et le dioxygene consommes, pour une masse totale de quarante-quatre grammes, le plateau droit porte le dioxyde de carbone forme, egalement quarante-quatre grammes, et le fleau de la balance reste parfaitement horizontal, signe d'equilibre.</desc>

            <defs>
              <marker id="arrow-phys4e-transfo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- AVANT : C isole + O2 -->
            <text class="label-soft" x="119" y="42" text-anchor="middle">AVANT (réactifs)</text>
            <circle class="plot-point" cx="70" cy="110" r="13"></circle>
            <text class="label" x="70" y="115" text-anchor="middle">C</text>
            <text class="annotation-label" x="108" y="116" text-anchor="middle">+</text>
            <line class="frame-line" x1="140" y1="110" x2="168" y2="110"></line>
            <circle class="plot-point-alt" cx="140" cy="110" r="13"></circle>
            <circle class="plot-point-alt" cx="168" cy="110" r="13"></circle>
            <text class="label" x="140" y="115" text-anchor="middle">O</text>
            <text class="label" x="168" y="115" text-anchor="middle">O</text>
            <text class="label-soft" x="119" y="146" text-anchor="middle">carbone + dioxygène</text>

            <!-- fleche de transformation -->
            <line class="curve-main" x1="205" y1="110" x2="268" y2="110" marker-end="url(#arrow-phys4e-transfo)"></line>

            <!-- APRES : CO2 lineaire -->
            <text class="label-soft" x="345" y="42" text-anchor="middle">APRÈS (produit)</text>
            <line class="frame-line" x1="310" y1="110" x2="345" y2="110"></line>
            <line class="frame-line" x1="345" y1="110" x2="380" y2="110"></line>
            <circle class="plot-point-alt" cx="310" cy="110" r="13"></circle>
            <circle class="plot-point" cx="345" cy="110" r="13"></circle>
            <circle class="plot-point-alt" cx="380" cy="110" r="13"></circle>
            <text class="label" x="310" y="115" text-anchor="middle">O</text>
            <text class="label" x="345" y="115" text-anchor="middle">C</text>
            <text class="label" x="380" y="115" text-anchor="middle">O</text>
            <text class="label-soft" x="345" y="146" text-anchor="middle">dioxyde de carbone</text>

            <!-- balance -->
            <text class="annotation-label" x="280" y="196" text-anchor="middle">m(réactifs) = m(produits)</text>
            <line class="frame-line" x1="120" y1="210" x2="440" y2="210"></line>
            <polygon class="frame-line" points="280,210 260,250 300,250" fill="none"></polygon>
            <line class="frame-line" x1="120" y1="210" x2="120" y2="280"></line>
            <line class="frame-line" x1="440" y1="210" x2="440" y2="280"></line>
            <line class="frame-line" x1="80" y1="280" x2="160" y2="280"></line>
            <line class="frame-line" x1="400" y1="280" x2="480" y2="280"></line>
            <text class="label-soft" x="120" y="302" text-anchor="middle">carbone + dioxygène</text>
            <text class="annotation-label" x="120" y="322" text-anchor="middle">12 g + 32 g</text>
            <text class="label-soft" x="440" y="302" text-anchor="middle">dioxyde de carbone</text>
            <text class="annotation-label" x="440" y="322" text-anchor="middle">44 g</text>
          </svg>
        `,
        notes: [
          'Lors d\'une transformation chimique, les atomes des réactifs (ici $1$ atome de carbone et $2$ atomes d\'oxygène, apportés par une molécule de $\\text{O}_2$) se retrouvent <strong>tous</strong> dans les produits, simplement réorganisés autrement : ici en une seule molécule de dioxyde de carbone $\\text{CO}_2$.',
          'Aucun atome n\'apparaît ni ne disparaît pendant une transformation chimique : c\'est ce qui explique la <strong>loi de conservation de la masse</strong> énoncée par Lavoisier.',
          'La balance en équilibre symbolise cette loi : dans un système fermé, la masse totale des réactifs consommés (ici $12\\,\\text{g}$ de carbone $+$ $32\\,\\text{g}$ de dioxygène) est <strong>strictement égale</strong> à la masse totale des produits formés (ici $44\\,\\text{g}$ de dioxyde de carbone).'
        ],
        reading: 'Suis d\'abord la réorganisation des atomes en haut (même nombre de chaque côté de la flèche), puis vérifie que la balance en bas reste bien à l\'équilibre : les masses totales sont égales.',
        caption: 'Combustion du carbone : $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$. Les atomes se réorganisent sans disparaître ($1$ carbone $+$ $2$ oxygènes des deux côtés de la flèche), et la masse totale se conserve ($12\\,\\text{g} + 32\\,\\text{g} = 44\\,\\text{g}$).'
      },
      example: {
        statement: 'Dans un récipient fermé, on fait brûler $12\\,\\text{g}$ de carbone avec $32\\,\\text{g}$ de dioxygène. La réaction produit uniquement du dioxyde de carbone, selon l\'équation $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$.<br/><br/>Calcule la masse de dioxyde de carbone formée.',
        steps: [
          'Le système étant fermé, aucun gaz ne peut entrer ni sortir : la loi de conservation de la masse s\'applique directement.',
          'La masse totale des réactifs consommés est $m(\\text{réactifs}) = 12 + 32 = 44\\,\\text{g}$.',
          'D\'après la loi de conservation de la masse, la masse des produits formés est égale à la masse des réactifs consommés : $m(\\text{CO}_2) = 44\\,\\text{g}$.'
        ],
        answer: '$m(\\text{CO}_2) = 44\\,\\text{g}$. Cette égalité ne serait plus vérifiable par simple pesée si le récipient était ouvert : une partie du dioxyde de carbone gazeux s\'échapperait alors dans l\'air.'
      },
      formulas: [
        'Conservation de la masse (système fermé) : $m(\\text{réactifs}) = m(\\text{produits})$',
        'Combustion du carbone : $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$',
        'Combustion du méthane : $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$',
        'Test du dioxyde de carbone $\\text{CO}_2$ : trouble l\'eau de chaux',
        'Test du dioxygène $\\text{O}_2$ : ravive une bûchette incandescente'
      ],
      recap: [
        'Une <strong>transformation chimique</strong> fait disparaître des <strong>réactifs</strong> et apparaître de nouveaux <strong>produits</strong>, chimiquement différents.',
        'Une <strong>combustion</strong> est la réaction d\'un combustible avec un comburant (souvent le dioxygène de l\'air), avec dégagement de chaleur.',
        'La <strong>loi de conservation de la masse</strong> (Lavoisier) : dans un système fermé, $m(\\text{réactifs}) = m(\\text{produits})$ — les atomes se réorganisent, ils ne disparaissent jamais.',
        'Des tests caractéristiques permettent d\'identifier certains gaz produits : eau de chaux troublée pour $\\text{CO}_2$, bûchette incandescente ravivée pour $\\text{O}_2$.'
      ],
      piege: 'Une erreur fréquente est de croire que la masse « disparaît » lorsqu\'on pèse seulement les cendres ou le résidu solide après une combustion à l\'air libre : on oublie que le dioxygène consommé (invisible, gazeux) et les produits gazeux échappés (comme la vapeur d\'eau ou le dioxyde de carbone) font partie du bilan. Attention à ne vérifier la conservation de la masse que dans un <strong>système fermé</strong> (récipient hermétique) où rien ne peut entrer ni sortir : c\'est la seule situation où « masse des réactifs = masse des produits » peut réellement se vérifier par pesée.'
    },

    quiz: [
      {
        q: 'Lors de la combustion complète du carbone ($\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$), on fait réagir $6\\,\\text{g}$ de carbone avec $16\\,\\text{g}$ de dioxygène, dans un récipient fermé. Quelle est la masse de dioxyde de carbone formée ?',
        options: ['10 g', '16 g', '22 g', '96 g'],
        answer: 2,
        correction: 'D\'après la loi de conservation de la masse (système fermé) : $m(\\text{CO}_2) = m(\\text{C}) + m(\\text{O}_2) = 6 + 16 = 22\\,\\text{g}$.'
      },
      {
        q: 'Comment reconnaît-on la présence de dioxyde de carbone $\\text{CO}_2$ lors d\'une expérience ?',
        options: [
          'Il ravive une bûchette incandescente',
          'Il trouble l\'eau de chaux',
          'Il produit une légère détonation à l\'approche d\'une flamme',
          'Il n\'a aucun test caractéristique connu'
        ],
        answer: 1,
        correction: 'Le test caractéristique du dioxyde de carbone est le trouble de l\'eau de chaux, qui devient laiteuse à son contact. Raviver une bûchette incandescente est le test du dioxygène ; la détonation est le test du dihydrogène.'
      },
      {
        q: 'Un élève affirme : « Après avoir brûlé une bougie à l\'air libre, la bougie pèse moins qu\'avant : la masse n\'est donc pas conservée. » Que penser de cette affirmation ?',
        options: [
          'Elle est correcte : la combustion fait toujours disparaître de la masse',
          'Elle est incorrecte : la loi de conservation de la masse ne s\'applique que dans un système fermé, or ici des gaz (dioxygène consommé, vapeur d\'eau et dioxyde de carbone formés) entrent et sortent librement dans l\'air',
          'Elle est incorrecte : une bougie ne subit jamais de transformation chimique',
          'Elle est correcte, car la cire se transforme en lumière et en chaleur, qui n\'ont pas de masse'
        ],
        answer: 1,
        correction: 'La loi de conservation de la masse ne s\'applique que dans un <strong>système fermé</strong>. À l\'air libre, le dioxygène consommé et les produits gazeux formés (vapeur d\'eau, dioxyde de carbone) s\'échangent librement avec l\'air ambiant : la pesée du seul résidu solide ne peut donc pas vérifier la conservation de la masse.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var contextes = [
          { combustible: 'une bougie de paraffine', comburant: 'le dioxygène de l\'air' },
          { combustible: 'un morceau de charbon de bois', comburant: 'le dioxygène de l\'air' },
          { combustible: 'du gaz butane', comburant: 'le dioxygène de l\'air' },
          { combustible: 'une allumette', comburant: 'le dioxygène de l\'air' },
          { combustible: 'un ruban de magnésium', comburant: 'le dioxygène de l\'air' }
        ];
        var ctx = pick(contextes);
        var mode = pick(['produit', 'reactif']);

        if (mode === 'produit') {
          var m1 = randFloat(4, 40, 1);
          var m2 = randFloat(4, 40, 1);
          var mProduits = parseFloat((m1 + m2).toFixed(1));
          return {
            statement: 'Dans un récipient fermé, on fait brûler ' + ctx.combustible + ' (masse $' + fr(m1, 1) + '\\,\\text{g}$) avec ' + ctx.comburant + ' (masse $' + fr(m2, 1) + '\\,\\text{g}$).<br/><br/>D\'après la loi de conservation de la masse, calcule la masse totale des produits formés (en g).',
            answer: mProduits,
            tolerance: 0.1,
            unit: 'g',
            hint: 'Dans un système fermé, la masse totale des produits est égale à la masse totale des réactifs consommés : additionne simplement les deux masses.',
            solution: [
              'Système fermé → loi de conservation de la masse : $m(\\text{produits}) = m(\\text{réactifs})$.',
              'Masse des réactifs : $' + fr(m1, 1) + ' + ' + fr(m2, 1) + '$.',
              'Résultat : $m(\\text{produits}) = ' + fr(mProduits, 1) + '$ g.'
            ]
          };
        } else {
          var mReactif1 = randFloat(4, 40, 1);
          var mProduitsTotal = randFloat(mReactif1 + 3, mReactif1 + 40, 1);
          var mReactif2 = parseFloat((mProduitsTotal - mReactif1).toFixed(1));
          return {
            statement: 'Dans un récipient fermé, on fait brûler ' + ctx.combustible + ' (masse $' + fr(mReactif1, 1) + '\\,\\text{g}$) avec une masse inconnue de ' + ctx.comburant + '. Cette transformation chimique produit une masse totale de $' + fr(mProduitsTotal, 1) + '\\,\\text{g}$ de produits.<br/><br/>D\'après la loi de conservation de la masse, calcule la masse de ' + ctx.comburant + ' qui a été consommée (en g).',
            answer: mReactif2,
            tolerance: 0.1,
            unit: 'g',
            hint: 'La masse totale des réactifs est égale à la masse totale des produits. Tu connais déjà la masse d\'un réactif : soustrais-la à la masse totale des produits.',
            solution: [
              'Système fermé → loi de conservation de la masse : $m(\\text{réactifs}) = m(\\text{produits}) = ' + fr(mProduitsTotal, 1) + '$ g.',
              'Masse du premier réactif déjà connue : $' + fr(mReactif1, 1) + '$ g.',
              'Masse du second réactif : $' + fr(mProduitsTotal, 1) + ' - ' + fr(mReactif1, 1) + ' = ' + fr(mReactif2, 1) + '$ g.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On réalise la combustion complète du méthane $\\text{CH}_4$ (le gaz naturel utilisé pour la cuisson) dans un récipient fermé, en présence d\'une quantité suffisante de dioxygène. L\'équation de la réaction est $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$. On fait réagir $16\\,\\text{g}$ de méthane avec $64\\,\\text{g}$ de dioxygène ; la réaction produit $44\\,\\text{g}$ de dioxyde de carbone et une certaine masse de vapeur d\'eau.',
      tasks: [
        'Calculer la masse totale des réactifs consommés.',
        'En déduire, grâce à la loi de conservation de la masse, la masse totale des produits formés, puis la masse de vapeur d\'eau produite (sachant que $44\\,\\text{g}$ de dioxyde de carbone sont formés).',
        'Le récipient est maintenant ouvert à l\'air libre pendant la combustion. Expliquer si l\'on peut encore vérifier la conservation de la masse en pesant simplement le contenu du récipient avant et après.'
      ],
      solutions: [
        'Masse totale des réactifs : $m(\\text{CH}_4) + m(\\text{O}_2) = 16 + 64 = 80\\,\\text{g}$.',
        'D\'après la loi de conservation de la masse (système fermé), la masse totale des produits est égale à celle des réactifs : $m(\\text{produits}) = 80\\,\\text{g}$. Comme $44\\,\\text{g}$ de dioxyde de carbone sont formés, la masse de vapeur d\'eau est $m(\\text{H}_2\\text{O}) = 80 - 44 = 36\\,\\text{g}$.',
        'Non : dans un récipient ouvert, le dioxygène consommé peut être renouvelé depuis l\'air ambiant et les produits gazeux (vapeur d\'eau, dioxyde de carbone) peuvent s\'échapper librement. Une simple pesée du contenu du récipient ne suffit donc plus à vérifier la loi, qui n\'est garantie que dans un <strong>système fermé</strong>.'
      ],
      finalAnswer: 'Réactifs : $80\\,\\text{g}$ au total ; produits : $44\\,\\text{g}$ de $\\text{CO}_2$ et $36\\,\\text{g}$ de $\\text{H}_2\\text{O}$ (soit $80\\,\\text{g}$ au total, la masse est bien conservée). En système ouvert, cette vérification par simple pesée n\'est plus possible : c\'est pourquoi les expériences de vérification de la loi de Lavoisier se font toujours en récipient fermé.'
    },

    evaluation: {
      title: 'Évaluation — Les transformations chimiques',
      duration: '20 min',
      questions: [
        {
          statement: 'On fait brûler, dans un récipient fermé, $8\\,\\text{g}$ d\'un combustible avec $20\\,\\text{g}$ de dioxygène. Calculer la masse totale des produits formés (en g).',
          type: 'numeric',
          answer: 28,
          tolerance: 0.5,
          unit: 'g',
          points: 2,
          correction: '$m(\\text{produits}) = m(\\text{réactifs}) = 8 + 20 = 28$ g, d\'après la loi de conservation de la masse.'
        },
        {
          statement: 'Une transformation chimique se distingue d\'une transformation physique (comme la fusion de la glace) par le fait que :',
          type: 'multiple-choice',
          options: [
            'De nouvelles espèces chimiques apparaissent',
            'La masse totale change',
            'La température varie forcément',
            'Elle ne peut se produire qu\'avec du dioxygène'
          ],
          answer: 0,
          points: 2,
          correction: 'Dans une transformation chimique, des réactifs disparaissent et de nouvelles espèces chimiques (produits) apparaissent. Dans une transformation physique comme la fusion, l\'eau reste de l\'eau : aucune nouvelle espèce chimique n\'apparaît.'
        },
        {
          statement: 'Dans un récipient fermé, une transformation chimique consomme $15\\,\\text{g}$ d\'un premier réactif et produit au total $52\\,\\text{g}$ de produits. Calculer la masse du second réactif consommé (en g).',
          type: 'numeric',
          answer: 37,
          tolerance: 0.5,
          unit: 'g',
          points: 3,
          correction: '$m(\\text{réactifs}) = m(\\text{produits}) = 52$ g. Comme le premier réactif apporte $15$ g, le second en apporte $52 - 15 = 37$ g.'
        },
        {
          statement: 'Quel test permet d\'identifier la présence de dioxygène $\\text{O}_2$ ?',
          type: 'multiple-choice',
          options: [
            'Le trouble de l\'eau de chaux',
            'Une bûchette incandescente qui se ravive',
            'Une légère détonation à l\'approche d\'une flamme',
            'Un changement de couleur d\'un indicateur coloré'
          ],
          answer: 1,
          points: 1,
          correction: 'Le dioxygène ravive une bûchette incandescente. Le trouble de l\'eau de chaux teste le dioxyde de carbone ; la détonation teste le dihydrogène.'
        },
        {
          statement: 'La combustion du carbone s\'écrit $\\text{C} + \\text{O}_2 \\rightarrow \\text{CO}_2$. Que représente la flèche dans cette écriture ?',
          type: 'multiple-choice',
          options: [
            'Une addition mathématique',
            'La transformation des réactifs (à gauche) en produits (à droite)',
            'Une égalité entre deux nombres',
            'Un signe de conservation de l\'énergie uniquement'
          ],
          answer: 1,
          points: 2,
          correction: 'La flèche symbolise le sens de la transformation chimique : les réactifs, à gauche, se transforment en produits, à droite.'
        }
      ]
    }
  });
