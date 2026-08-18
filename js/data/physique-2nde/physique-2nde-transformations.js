/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-transformations.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-transformations',
    level: 2, subject: 'physique',
    icon: '🧊',
    title: 'Transformation physique et chimique',
    subtitle: 'Changement d\'état, dissolution, réaction chimique, conservation de la masse (loi de Lavoisier)',
    keywords: ['Transformation physique', 'Transformation chimique', 'Changement d\'état', 'Conservation de la masse', 'Lavoisier'],
    physics: 'Distinguer une transformation physique d\'une transformation chimique permet de comprendre des situations très concrètes : la fonte des glaciers, la cuisson d\'un aliment, la prise du ciment dans le bâtiment, ou encore le contrôle de masse effectué dans l\'industrie pour vérifier qu\'aucune matière première n\'a été perdue lors d\'une fabrication.',

    cours: {
      intro: 'Un système matériel peut subir deux grands types de <strong>transformation</strong>.<br/><br/>Lors d\'une <strong>transformation physique</strong>, la nature chimique des espèces présentes ne change pas : seul l\'état physique (solide, liquide, gaz) ou la répartition de la matière se modifie. La fonte d\'un glaçon, l\'évaporation d\'une flaque d\'eau ou la dissolution du sucre dans le café en sont des exemples : c\'est toujours de l\'eau, ou toujours du sucre, avant et après.<br/><br/>Lors d\'une <strong>transformation chimique</strong>, au contraire, des <strong>espèces chimiques nouvelles</strong> apparaissent : les réactifs de départ disparaissent (au moins partiellement) pour former des produits de nature différente. La combustion du bois, la rouille d\'un clou ou la digestion sont des transformations chimiques.<br/><br/>Dans les deux cas, un principe fondamental s\'applique : la <strong>conservation de la masse</strong>, énoncée par Lavoisier dès 1789 : « Rien ne se perd, rien ne se crée, tout se transforme ». Tant que le système est <strong>clos</strong> (rien n\'entre, rien ne sort), la masse totale avant transformation est rigoureusement égale à la masse totale après transformation.',
      definitions: [
        { term: 'Transformation physique', def: 'Transformation au cours de laquelle la nature chimique des espèces présentes ne change pas : seul l\'état physique (fusion, vaporisation, dissolution, mélange…) est modifié. Exemple : la fonte de la glace reste de l\'eau, sous une autre forme.' },
        { term: 'Transformation chimique', def: 'Transformation au cours de laquelle des <strong>réactifs</strong> se transforment en <strong>produits</strong> de nature chimique différente. Elle se traduit par une équation de réaction et s\'accompagne souvent de signes observables : changement de couleur, dégagement gazeux, formation d\'un précipité, dégagement ou absorption de chaleur.' },
        { term: 'Changement d\'état', def: 'Passage d\'un état physique à un autre (fusion, solidification, vaporisation, liquéfaction, sublimation) sans changement de nature chimique. Pendant tout le changement d\'état, la <strong>température reste constante</strong> (ex : $0°C$ pour la fusion de l\'eau sous pression atmosphérique normale).' },
        { term: 'Conservation de la masse (loi de Lavoisier)', def: 'Dans un système <strong>clos</strong>, la masse totale se conserve au cours de toute transformation, physique ou chimique : $m_{avant} = m_{après}$. Cette loi ne s\'applique que si aucune matière n\'entre ou ne sort du système étudié.' }
      ],
      method: {
        title: 'Distinguer une transformation physique d\'une transformation chimique en 3 étapes',
        steps: [
          '<strong>Repérer les espèces chimiques présentes</strong> avant et après la transformation. Si ce sont toujours les mêmes (seule leur forme ou leur état a changé), la transformation est <strong>physique</strong>. Si de nouvelles espèces sont apparues, elle est <strong>chimique</strong>.<br/>Exemple : le sucre qui se dissout dans l\'eau reste du sucre (physique) ; le fer qui rouille devient de l\'oxyde de fer, une espèce nouvelle (chimique).',
          '<strong>Repérer les signes macroscopiques</strong> d\'une transformation chimique : changement de couleur, apparition d\'un trouble ou d\'un précipité, dégagement d\'un gaz (effervescence, bulles), ou variation de température qui persiste au-delà d\'un simple transfert thermique.',
          '<strong>Vérifier la conservation de la masse</strong> dans un système clos : peser l\'ensemble avant, puis après la transformation. En l\'absence d\'échange de matière avec l\'extérieur, la masse totale mesurée doit être identique, que la transformation soit physique ou chimique.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Transformation physique : changement d\'état de l\'eau',
        title: 'Courbe d\'échauffement de l\'eau : palier de fusion à $0°C$',
        description: 'En chauffant régulièrement de la glace initialement à $-10°C$, la température augmente d\'abord, puis se <strong>stabilise à $0°C$</strong> tant que la fusion n\'est pas terminée (palier de changement d\'état), avant de reprendre son augmentation dans l\'eau liquide.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="echauff-title echauff-desc">
            <title id="echauff-title">Courbe d'echauffement de l'eau avec palier de fusion</title>
            <desc id="echauff-desc">Un graphique represente la temperature en degres Celsius en ordonnee, en fonction du temps de chauffage en minutes en abscisse. La courbe part de moins dix degres et monte lineairement jusqu'a zero degre, puis reste parfaitement horizontale a zero degre pendant un palier prolonge le temps que la glace fonde entierement, avant de remonter lineairement jusqu'a quarante degres une fois toute la glace transformee en eau liquide.</desc>

            <defs>
              <marker id="arrow-phys2nde-echauff" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-phys2nde-echauff)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="45" marker-end="url(#arrow-phys2nde-echauff)"></line>
            <text class="tick-label" x="60" y="30" text-anchor="middle">T (°C)</text>
            <text class="tick-label" x="518" y="278" text-anchor="end">t (min)</text>

            <!-- ligne des 0°C -->
            <line class="guide-line" x1="60" y1="221.8" x2="500" y2="221.8"></line>
            <text class="tick-label" x="48" y="225.5" text-anchor="end">0</text>

            <!-- guides verticaux debut/fin de palier -->
            <line class="guide-line" x1="148" y1="221.8" x2="148" y2="260"></line>
            <line class="guide-line" x1="280" y1="221.8" x2="280" y2="260"></line>

            <!-- courbe d'echauffement -->
            <path class="curve-main" fill="none" d="M60,260 L148,221.8 L280,221.8 L500,69.1"></path>

            <!-- points cles -->
            <circle class="plot-point" cx="60" cy="260" r="4"></circle>
            <circle class="plot-point-alt" cx="148" cy="221.8" r="4"></circle>
            <circle class="plot-point-alt" cx="280" cy="221.8" r="4"></circle>
            <circle class="plot-point" cx="500" cy="69.1" r="4"></circle>

            <!-- annotations -->
            <text class="label-soft" x="95" y="248" text-anchor="middle">Glace</text>
            <text class="annotation-label" x="214" y="212" text-anchor="middle">Palier de fusion</text>
            <text class="label-soft" x="214" y="196" text-anchor="middle">(solide + liquide, T constante)</text>
            <text class="label-soft" x="420" y="100" text-anchor="middle">Eau liquide</text>
          </svg>
        `,
        notes: [
          'Avant et après le palier, un chauffage régulier fait <strong>monter la température</strong> régulièrement : la glace se réchauffe, puis l\'eau liquide se réchauffe.',
          'Pendant le palier, toute la chaleur apportée sert à <strong>faire fondre la glace</strong> (changement d\'état) : la température n\'augmente plus tant que les deux états, solide et liquide, coexistent.',
          'Tout au long de la transformation, c\'est toujours de l\'<strong>eau</strong> : aucune nouvelle espèce chimique n\'apparaît. C\'est bien une <strong>transformation physique</strong>, malgré le changement d\'aspect (de la glace à l\'eau liquide).'
        ],
        reading: 'Suis la courbe de gauche à droite : une montée, un palier horizontal à $0°C$ le temps de la fusion complète, puis une nouvelle montée dans l\'eau liquide.',
        caption: 'Courbe d\'échauffement de l\'eau : le palier horizontal à $0°C$ marque le changement d\'état (fusion), une transformation physique qui ne modifie pas la nature chimique de l\'eau.'
      },
      example: {
        statement: 'Dans un tube à essai scellé (système clos), on introduit $m_1 = 4$ g de poudre de fer et $m_2 = 2{,}3$ g de poudre de soufre. On chauffe légèrement : une réaction chimique se produit, avec une lueur rougeoyante caractéristique, et il ne reste aucun réactif en excès à la fin.<br/><br/>Le produit obtenu est du sulfure de fer. Calculer la masse de sulfure de fer formée.',
        steps: [
          'Identifier la nature de la transformation : une nouvelle espèce chimique apparaît (le sulfure de fer, différent du fer et du soufre de départ) — il s\'agit bien d\'une <strong>transformation chimique</strong>.',
          'Le système étant <strong>clos</strong> (tube scellé), la loi de Lavoisier s\'applique intégralement : $m_{avant} = m_{après}$.',
          'La masse avant réaction est la somme des masses des réactifs : $m_{avant} = m_1 + m_2 = 4 + 2{,}3 = 6{,}3$ g.',
          'Comme il ne reste aucun réactif en excès, toute cette masse se retrouve dans le seul produit formé : $m_{\\text{sulfure de fer}} = 6{,}3$ g.'
        ],
        answer: '$m_{\\text{sulfure de fer}} = 6{,}3$ g. La masse totale ne dépend pas de la nature de la transformation (physique ou chimique) : seule compte la fermeture du système.'
      },
      formulas: [
        'Conservation de la masse (système clos) : $m_{avant} = m_{après}$',
        'Cas d\'une transformation chimique sans réactif en excès : $m_{réactifs} = m_{produits}$',
        'Pendant un changement d\'état, la température reste constante tant que les deux états coexistent (ex : fusion de l\'eau à $0°C$)'
      ],
      recap: [
        'Une transformation <strong>physique</strong> ne change pas la nature chimique des espèces (changement d\'état, dissolution, mélange) ; une transformation <strong>chimique</strong> fait apparaître de nouvelles espèces (réactifs → produits).',
        'Les signes macroscopiques d\'une transformation chimique : changement de couleur, précipité, dégagement gazeux, dégagement ou absorption de chaleur.',
        'Pendant un changement d\'état, la <strong>température reste constante</strong> (palier) tant que la transformation n\'est pas terminée.',
        'La loi de <strong>Lavoisier</strong> ($m_{avant} = m_{après}$) s\'applique à toute transformation, physique ou chimique, à condition que le système soit <strong>clos</strong>.'
      ],
      piege: 'Beaucoup d\'élèves pensent que la masse « disparaît » lorsqu\'un liquide s\'évapore ou qu\'un gaz s\'échappe d\'un bécher ouvert, en contradiction apparente avec la loi de Lavoisier. Attention : la loi de conservation de la masse ne s\'applique qu\'à un <strong>système clos</strong> — dans un système ouvert, la matière qui s\'échappe (vapeur d\'eau, gaz) reste bel et bien de la matière, elle a simplement quitté le système pesé.'
    },

    quiz: [
      {
        q: 'Parmi les situations suivantes, laquelle est une transformation chimique ?',
        options: [
          'De la cire de bougie fondue qui se resolidifie en refroidissant',
          'Un clou en fer qui se couvre progressivement de rouille',
          'Du sel qui se dissout entièrement dans l\'eau',
          'De l\'eau liquide qui s\'évapore au soleil'
        ],
        answer: 1,
        correction: 'La formation de rouille (oxyde de fer) fait apparaître une <strong>nouvelle espèce chimique</strong>, différente du fer de départ : c\'est une transformation chimique. Les trois autres situations (fusion, dissolution, vaporisation) sont des transformations physiques : la matière change d\'état ou de répartition, mais reste chimiquement la même.'
      },
      {
        q: 'Dans un flacon fermé, on fait réagir entièrement $m_1 = 3$ g d\'un réactif A avec $m_2 = 5$ g d\'un réactif B. Quelle est la masse totale des produits formés ?',
        options: [
          '$2$ g',
          '$8$ g',
          '$15$ g',
          'Impossible à déterminer sans connaître la réaction'
        ],
        answer: 1,
        correction: 'Le système étant clos, la loi de Lavoisier impose $m_{produits} = m_{réactifs} = m_1 + m_2 = 3 + 5 = 8$ g, quelle que soit la réaction chimique précise mise en jeu.'
      },
      {
        q: 'Pendant la fusion d\'un glaçon, tant que la glace et l\'eau liquide coexistent, que peut-on dire de la température du mélange ?',
        options: [
          'Elle continue d\'augmenter progressivement',
          'Elle reste constante, à $0°C$ (sous pression atmosphérique normale)',
          'Elle diminue, car la fusion absorbe de la chaleur',
          'Elle dépend uniquement de la masse du glaçon'
        ],
        answer: 1,
        correction: 'Pendant tout le temps où solide et liquide coexistent, la température reste <strong>constante</strong> (palier de changement d\'état) : toute la chaleur apportée sert à faire fondre la glace, pas à augmenter la température.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['fusion', 'dissolution', 'synthese']);
        var m1 = randFloat(5, 40, 1);
        var m2 = randFloat(2, 20, 1);
        var total = parseFloat((m1 + m2).toFixed(1));

        if (typeExo === 'fusion') {
          var contexte = pick([
            'un saladier posé sur une balance de cuisine',
            'un cristallisoir de travaux pratiques',
            'un récipient isolé thermiquement',
            'un bac fermé posé sur une balance de précision'
          ]);
          return {
            statement: 'Dans ' + contexte + ', un premier glaçon de masse $m_1 = ' + fr(m1, 1) + '$ g fond entièrement, sans aucune perte par évaporation (système clos). On y ajoute un second glaçon de masse $m_2 = ' + fr(m2, 1) + '$ g, qui fond également en totalité.<br/><br/>Calcule la masse totale d\'eau liquide obtenue à la fin (en g).',
            answer: total,
            tolerance: 0.2,
            unit: 'g',
            hint: 'La fonte de la glace est une transformation physique : la masse totale se conserve. Additionne simplement les masses des deux glaçons.',
            solution: [
              'La fusion de la glace est une transformation <strong>physique</strong> (c\'est toujours de l\'eau) : la masse se conserve dans ce système clos.',
              'Masse totale d\'eau obtenue : $m = m_1 + m_2 = ' + fr(m1, 1) + ' + ' + fr(m2, 1) + '$.',
              'Résultat : $m = ' + fr(total, 1) + '$ g.'
            ]
          };
        } else if (typeExo === 'dissolution') {
          var contexte2 = pick([
            'un verre d\'eau sur une balance',
            'un bécher de travaux pratiques de chimie',
            'un flacon de préparation de solution saline',
            'un récipient gradué posé sur une balance électronique'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on pèse $m_1 = ' + fr(m1, 1) + '$ g d\'eau, puis on y dissout entièrement $m_2 = ' + fr(m2, 1) + '$ g de sel de cuisine. Aucune matière n\'entre ni ne sort du récipient pendant la dissolution.<br/><br/>Calcule la masse totale de la solution obtenue (en g).',
            answer: total,
            tolerance: 0.2,
            unit: 'g',
            hint: 'La dissolution est une transformation physique (le sel reste du sel, dissous dans l\'eau) : la masse totale se conserve, il suffit d\'additionner.',
            solution: [
              'La dissolution est une transformation <strong>physique</strong> : le sel ne disparaît pas, il se répartit dans l\'eau sous forme d\'ions dissous.',
              'Masse totale de la solution : $m = m_1 + m_2 = ' + fr(m1, 1) + ' + ' + fr(m2, 1) + '$.',
              'Résultat : $m = ' + fr(total, 1) + '$ g. La masse de la solution est toujours supérieure à celle de l\'eau seule : rien ne se perd lors d\'une dissolution.'
            ]
          };
        } else {
          var contexte3 = pick([
            'un ballon scellé de travaux pratiques',
            'un tube à essai fermé par un bouchon',
            'une enceinte close de laboratoire',
            'un flacon hermétique posé sur une balance'
          ]);
          return {
            statement: 'Dans ' + contexte3 + ' (système clos), on fait réagir entièrement un réactif A de masse $m_1 = ' + fr(m1, 1) + '$ g avec un réactif B de masse $m_2 = ' + fr(m2, 1) + '$ g. La réaction chimique forme un unique produit, sans qu\'il ne reste de réactif en excès.<br/><br/>D\'après la loi de Lavoisier, calcule la masse du produit formé (en g).',
            answer: total,
            tolerance: 0.2,
            unit: 'g',
            hint: 'La loi de Lavoisier impose $m_{avant} = m_{après}$ dans un système clos : additionne les masses des réactifs.',
            solution: [
              'Le système est <strong>clos</strong> : la loi de Lavoisier s\'applique intégralement, $m_{réactifs} = m_{produits}$.',
              'Masse totale des réactifs : $m = m_1 + m_2 = ' + fr(m1, 1) + ' + ' + fr(m2, 1) + '$.',
              'Résultat : $m = ' + fr(total, 1) + '$ g, entièrement retrouvée dans le produit puisqu\'il n\'y a pas de réactif en excès.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On verse du vinaigre dans un bécher contenant $m = 4$ g de bicarbonate de soude, le tout posé sur une balance affichant la masse en temps réel. Le bécher est <strong>ouvert</strong> à l\'air libre. Dès le contact, une forte effervescence se produit (dégagement de nombreuses bulles de gaz), et la masse affichée par la balance <strong>diminue progressivement</strong> pendant la réaction.',
      tasks: [
        'Identifier les signes macroscopiques qui montrent qu\'il s\'agit bien d\'une transformation chimique.',
        'Expliquer pourquoi la masse affichée par la balance diminue, alors que la loi de Lavoisier affirme que la masse se conserve.',
        'Décrire ce que l\'on observerait sur la balance si la même réaction était réalisée dans un ballon fermé, relié à une baudruche capable de recueillir tout le gaz produit.'
      ],
      solutions: [
        'L\'effervescence (dégagement de nombreuses bulles de gaz) est un signe caractéristique d\'une transformation chimique : une nouvelle espèce gazeuse (le dioxyde de carbone) apparaît, ce qui n\'aurait pas lieu lors d\'une simple transformation physique.',
        'Le bécher étant <strong>ouvert</strong>, le système n\'est pas clos : le dioxyde de carbone gazeux produit par la réaction s\'échappe dans l\'air ambiant et n\'est plus pesé par la balance. La masse affichée diminue donc, mais la loi de Lavoisier n\'est pas violée : elle ne s\'applique qu\'à un système clos, et ici de la matière (le gaz) quitte réellement le système pesé.',
        'Dans un système clos où tout le gaz produit resterait captif (par exemple recueilli dans une baudruche reliée au ballon), aucune matière ne quitterait le système : la masse totale affichée par la balance resterait <strong>rigoureusement constante</strong> avant et après la réaction, conformément à la loi de Lavoisier.'
      ],
      finalAnswer: 'L\'effervescence signale une transformation chimique ; la baisse de masse observée en système ouvert s\'explique par la fuite du gaz produit, et non par une disparition de matière. En système clos, la masse totale resterait invariante : c\'est la fermeture du système, et non le type de transformation, qui conditionne l\'application de la loi de Lavoisier.'
    },

    evaluation: {
      title: 'Évaluation — Transformation physique et chimique',
      duration: '25 min',
      questions: [
        {
          statement: 'Laquelle de ces transformations est une transformation physique ?',
          type: 'multiple-choice',
          options: [
            'La combustion du gaz naturel dans une gazinière',
            'La formation de rouille sur une carrosserie',
            'La vaporisation de l\'eau dans une casserole',
            'La digestion des aliments'
          ],
          answer: 2,
          points: 2,
          correction: 'La vaporisation de l\'eau ne change pas sa nature chimique (c\'est toujours de l\'eau, à l\'état gazeux) : c\'est une transformation physique. Les trois autres exemples font apparaître de nouvelles espèces chimiques.'
        },
        {
          statement: 'Dans un système clos, on fait réagir entièrement $m_1 = 6$ g d\'un réactif avec $m_2 = 9$ g d\'un second réactif, sans réactif en excès. Calculer la masse totale des produits formés (en g).',
          type: 'numeric',
          answer: 15,
          tolerance: 0.5,
          unit: 'g',
          points: 2,
          correction: 'D\'après la loi de Lavoisier, $m_{produits} = m_{réactifs} = m_1 + m_2 = 6 + 9 = 15$ g.'
        },
        {
          statement: 'Pendant un changement d\'état (par exemple la fusion), la température du système :',
          type: 'multiple-choice',
          options: [
            'Augmente continûment',
            'Reste constante tant que les deux états coexistent',
            'Diminue puis augmente',
            'N\'est pas définie'
          ],
          answer: 1,
          points: 2,
          correction: 'Pendant un changement d\'état, la température reste constante (palier) tant que les deux états (par exemple solide et liquide) coexistent dans le système.'
        },
        {
          statement: 'Un bécher ouvert contenant $50$ g d\'eau est laissé au soleil. Après une heure, on ne pèse plus que $47$ g. Quelle est la meilleure explication ?',
          type: 'multiple-choice',
          options: [
            'La loi de Lavoisier est prise en défaut',
            'Une partie de l\'eau s\'est évaporée et a quitté le système ouvert',
            'De la matière a été créée puis détruite',
            'La balance est nécessairement mal réglée'
          ],
          answer: 1,
          points: 2,
          correction: 'Le système étant ouvert, la vapeur d\'eau formée par évaporation s\'échappe dans l\'air : la masse pesée diminue, sans que la loi de Lavoisier (valable seulement en système clos) ne soit contredite.'
        },
        {
          statement: 'On dissout entièrement $m_1 = 12$ g de sucre dans $m_2 = 100$ g d\'eau, dans un récipient clos. Calculer la masse totale de la solution sucrée obtenue (en g).',
          type: 'numeric',
          answer: 112,
          tolerance: 1,
          unit: 'g',
          points: 2,
          correction: 'La dissolution est une transformation physique : la masse se conserve, $m = m_1 + m_2 = 12 + 100 = 112$ g.'
        }
      ]
    }
  });
