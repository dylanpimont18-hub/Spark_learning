/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-reactions-chimiques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-reactions-chimiques',
    level: 1, subject: 'physique',
    icon: '⚗️',
    title: 'Les réactions chimiques (équilibrage)',
    subtitle: 'Réactifs, produits, conservation de la masse, équilibrage des équations-bilans',
    keywords: ['Réaction chimique', 'Équation-bilan', 'Conservation de la masse', 'Lavoisier', 'Équilibrage'],
    physics: 'L\'équilibrage des équations chimiques permet de calculer les quantités exactes de réactifs nécessaires et de produits obtenus dans l\'industrie (combustion, synthèse de médicaments, production d\'engrais), et d\'évaluer la quantité de dioxyde de carbone rejetée par une combustion.',

    cours: {
      intro: 'Quand tu fais brûler du gaz, quand un clou rouille ou quand un aliment cuit, tu observes une <strong>réaction chimique</strong> : des substances de départ, les <strong>réactifs</strong>, se transforment en de nouvelles substances, les <strong>produits</strong>.<br/><br/>Cette transformation obéit à une loi fondamentale découverte par le chimiste français Antoine Lavoisier : la <strong>loi de conservation de la masse</strong>. « Rien ne se perd, rien ne se crée, tout se transforme » — autrement dit, les <strong>atomes ne disparaissent jamais</strong> et ne sont jamais créés lors d\'une réaction chimique : ils se réarrangent simplement pour former de nouvelles molécules.<br/><br/>Une <strong>équation-bilan</strong> décrit cette transformation avec des symboles chimiques. Pour qu\'elle respecte la conservation des atomes, il faut souvent l\'<strong>équilibrer</strong> : ajuster des <strong>nombres stœchiométriques</strong> devant les formules, sans jamais modifier les formules elles-mêmes.',
      definitions: [
        { term: 'Réactifs', def: 'Les substances présentes <strong>avant</strong> la réaction chimique, qui sont consommées au cours de la transformation. Elles sont écrites à gauche de la flèche dans l\'équation-bilan.' },
        { term: 'Produits', def: 'Les substances obtenues <strong>après</strong> la réaction chimique. Elles sont écrites à droite de la flèche.' },
        { term: 'Équation-bilan', def: 'Écriture symbolique d\'une réaction chimique, du type $\\text{réactifs} \\rightarrow \\text{produits}$, où chaque espèce chimique est précédée d\'un <strong>nombre stœchiométrique</strong> assurant la conservation des atomes.' },
        { term: 'Loi de conservation de la masse', def: 'Énoncée par Lavoisier : au cours d\'une réaction chimique, la masse totale des réactifs est égale à la masse totale des produits. Elle se traduit, au niveau microscopique, par la conservation du <strong>nombre d\'atomes de chaque élément</strong> entre réactifs et produits.' }
      ],
      method: {
        title: 'Équilibrer une équation-bilan en 3 étapes',
        steps: [
          '<strong>Compter les atomes</strong> de chaque élément chimique présents dans les réactifs, puis dans les produits, à partir des formules chimiques (indices en bas des symboles).',
          '<strong>Ajuster les nombres stœchiométriques</strong> (les grands nombres placés devant les formules) pour égaliser le nombre d\'atomes de chaque élément de part et d\'autre de la flèche, en commençant par l\'élément le moins « partagé » entre plusieurs molécules.<br/>Attention : on ne modifie <strong>jamais</strong> les indices à l\'intérieur d\'une formule (par exemple $\\text{CO}_2$ reste $\\text{CO}_2$), sous peine de changer la nature même de la substance.',
          '<strong>Vérifier</strong>, élément par élément, que le nombre total d\'atomes est bien identique des deux côtés de la flèche.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Loi de conservation de la masse (Lavoisier)',
        title: 'Comptage des atomes avant et après la combustion du méthane',
        description: 'Pour l\'équation équilibrée $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$, on compare le nombre d\'atomes de chaque élément côté réactifs et côté produits : les barres ont exactement la même hauteur.',
        svg: `
          <svg viewBox="0 0 520 300" role="img" aria-labelledby="reaction-title reaction-desc">
            <title id="reaction-title">Conservation des atomes lors de la combustion du methane</title>
            <desc id="reaction-desc">Diagramme en barres comparant, pour chaque element chimique (carbone, hydrogene, oxygene), le nombre total d'atomes du cote des reactifs et du cote des produits dans l'equation equilibree CH4 + 2 O2 -&gt; CO2 + 2 H2O. Pour chaque element, la barre des reactifs et la barre des produits ont exactement la meme hauteur : 1 atome de carbone, 4 atomes d'hydrogene et 4 atomes d'oxygene de chaque cote, ce qui illustre la loi de conservation de la masse.</desc>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="40" x2="60" y2="260"></line>
            <line class="frame-line" x1="60" y1="260" x2="480" y2="260"></line>

            <!-- groupe Carbone (1 et 1) -->
            <rect x="95" y="225" width="30" height="35" fill="var(--diagram-accent)"></rect>
            <rect x="135" y="225" width="30" height="35" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="annotation-label" x="110" y="218" text-anchor="middle">1</text>
            <text class="annotation-label" x="150" y="218" text-anchor="middle">1</text>
            <text class="tick-label" x="130" y="278" text-anchor="middle">Carbone (C)</text>

            <!-- groupe Hydrogene (4 et 4) -->
            <rect x="235" y="120" width="30" height="140" fill="var(--diagram-accent)"></rect>
            <rect x="275" y="120" width="30" height="140" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="annotation-label" x="250" y="113" text-anchor="middle">4</text>
            <text class="annotation-label" x="290" y="113" text-anchor="middle">4</text>
            <text class="tick-label" x="270" y="278" text-anchor="middle">Hydrogène (H)</text>

            <!-- groupe Oxygene (4 et 4) -->
            <rect x="375" y="120" width="30" height="140" fill="var(--diagram-accent)"></rect>
            <rect x="415" y="120" width="30" height="140" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="annotation-label" x="390" y="113" text-anchor="middle">4</text>
            <text class="annotation-label" x="430" y="113" text-anchor="middle">4</text>
            <text class="tick-label" x="410" y="278" text-anchor="middle">Oxygène (O)</text>

            <!-- legende -->
            <rect x="330" y="46" width="14" height="14" fill="var(--diagram-accent)"></rect>
            <text class="label-soft" x="348" y="57" text-anchor="start">Réactifs</text>
            <rect x="330" y="66" width="14" height="14" fill="color-mix(in srgb, var(--diagram-accent) 35%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="1.5"></rect>
            <text class="label-soft" x="348" y="77" text-anchor="start">Produits</text>
          </svg>
        `,
        notes: [
          'Équation équilibrée : $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$.',
          'Côté réactifs : $1$ atome de carbone (dans $\\text{CH}_4$), $4$ atomes d\'hydrogène (dans $\\text{CH}_4$) et $2\\times2=4$ atomes d\'oxygène (dans $2\\,\\text{O}_2$).',
          'Côté produits : $1$ atome de carbone (dans $\\text{CO}_2$), $2\\times2=4$ atomes d\'hydrogène (dans $2\\,\\text{H}_2\\text{O}$) et $2 + 2\\times1 = 4$ atomes d\'oxygène (dans $\\text{CO}_2$ et $2\\,\\text{H}_2\\text{O}$) : les trois barres coïncident exactement.'
        ],
        reading: 'Compare, pour chaque élément, la hauteur de la barre foncée (réactifs) et de la barre claire (produits) : une équation bien équilibrée donne toujours deux barres de même hauteur.',
        caption: 'Comptage des atomes de la combustion du méthane : autant d\'atomes de chaque élément côté réactifs que côté produits, conformément à la loi de Lavoisier.'
      },
      example: {
        statement: 'Équilibre l\'équation de combustion du méthane : $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$.',
        steps: [
          'Comptage initial (équation non équilibrée) : à gauche, $1$ carbone, $4$ hydrogènes, $2$ oxygènes ; à droite, $1$ carbone, $2$ hydrogènes, $3$ oxygènes. Les hydrogènes et les oxygènes ne sont pas encore équilibrés.',
          'On équilibre d\'abord l\'hydrogène en plaçant un coefficient $2$ devant $\\text{H}_2\\text{O}$ : $\\text{CH}_4 + \\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$. À droite, il y a désormais $2\\times2=4$ hydrogènes, ce qui équilibre les $4$ hydrogènes du méthane.',
          'On compte à nouveau les oxygènes à droite : $2$ (dans $\\text{CO}_2$) $+ 2\\times1 = 2$ (dans $2\\,\\text{H}_2\\text{O}$), soit $4$ oxygènes au total. Il faut donc $4$ oxygènes à gauche, soit un coefficient $2$ devant $\\text{O}_2$ : $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$.',
          'Vérification finale : à gauche $1$ C, $4$ H, $4$ O ; à droite $1$ C, $4$ H, $4$ O. L\'équation est équilibrée.'
        ],
        answer: 'Équation équilibrée : $\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$.'
      },
      formulas: [
        'Équation-bilan générale : $a\\,A + b\\,B \\rightarrow c\\,C + d\\,D$ (avec $a,b,c,d$ les nombres stœchiométriques)',
        'Conservation de la masse : $m_{\\text{réactifs}} = m_{\\text{produits}}$',
        'Conservation des atomes : pour chaque élément, le nombre d\'atomes à gauche est égal au nombre d\'atomes à droite'
      ],
      recap: [
        'Une réaction chimique transforme des réactifs en produits, mais ne crée ni ne détruit aucun atome : c\'est la loi de conservation de la masse de Lavoisier.',
        'Équilibrer une équation, c\'est ajuster les <strong>nombres stœchiométriques</strong> devant les formules, jamais les indices à l\'intérieur des formules.',
        'La méthode la plus sûre consiste à équilibrer les éléments un par un, puis à vérifier l\'ensemble avec un comptage final.',
        'Un nombre stœchiométrique égal à $1$ ne s\'écrit jamais explicitement devant une formule.'
      ],
      piege: 'Une erreur très fréquente est de vouloir équilibrer une équation en modifiant les <strong>indices</strong> à l\'intérieur d\'une formule (par exemple transformer $\\text{H}_2\\text{O}$ en $\\text{H}_2\\text{O}_2$) plutôt que le nombre stœchiométrique placé devant. Attention : modifier un indice change la nature chimique de la substance elle-même — seuls les nombres stœchiométriques placés <strong>devant</strong> les formules peuvent être ajustés.'
    },

    quiz: [
      {
        q: 'Dans l\'équation $2\\,\\text{H}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{H}_2\\text{O}$, combien d\'atomes d\'oxygène y a-t-il du côté des produits ?',
        options: ['$1$', '$2$', '$3$', '$4$'],
        answer: 1,
        correction: 'Le coefficient $2$ devant $\\text{H}_2\\text{O}$ signifie deux molécules d\'eau, chacune contenant un atome d\'oxygène : $2 \\times 1 = 2$ atomes d\'oxygène.'
      },
      {
        q: 'Que peut-on dire de la masse totale des réactifs et de la masse totale des produits au cours d\'une réaction chimique ?',
        options: [
          'Elles sont égales (loi de Lavoisier)',
          'La masse des produits est toujours plus grande',
          'La masse des réactifs est toujours plus grande',
          'On ne peut rien dire sans connaître la réaction'
        ],
        answer: 0,
        correction: 'D\'après la loi de conservation de la masse énoncée par Lavoisier, la masse totale se conserve au cours d\'une réaction chimique : $m_{\\text{réactifs}} = m_{\\text{produits}}$.'
      },
      {
        q: 'Pour équilibrer une équation-bilan, on peut modifier :',
        options: [
          'Les indices à l\'intérieur des formules chimiques',
          'Les nombres stœchiométriques placés devant les formules',
          'Le sens de la flèche de réaction',
          'Les symboles chimiques des éléments'
        ],
        answer: 1,
        correction: 'Seuls les nombres stœchiométriques (les coefficients devant les formules) peuvent être ajustés. Modifier un indice changerait la nature chimique de la substance.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var reactions = [
          { left: [[2, '\\text{H}_2'], [1, '\\text{O}_2']], right: [[2, '\\text{H}_2\\text{O}']], nom: 'la synthèse de l\'eau' },
          { left: [[1, '\\text{N}_2'], [3, '\\text{H}_2']], right: [[2, '\\text{NH}_3']], nom: 'la synthèse de l\'ammoniac' },
          { left: [[1, '\\text{C}_3\\text{H}_8'], [5, '\\text{O}_2']], right: [[3, '\\text{CO}_2'], [4, '\\text{H}_2\\text{O}']], nom: 'la combustion du propane' },
          { left: [[4, '\\text{Fe}'], [3, '\\text{O}_2']], right: [[2, '\\text{Fe}_2\\text{O}_3']], nom: 'la formation de la rouille' },
          { left: [[2, '\\text{H}_2\\text{O}_2']], right: [[2, '\\text{H}_2\\text{O}'], [1, '\\text{O}_2']], nom: 'la décomposition de l\'eau oxygénée' }
        ];
        var contexte = pick([
          'un exercice de chimie',
          'un contrôle de sciences',
          'une fiche de révision',
          'un compte-rendu de laboratoire'
        ]);
        var reaction = pick(reactions);

        // Termes avec coefficient > 1 uniquement : un coefficient 1 ne s'écrit jamais, on ne peut pas le "cacher"
        var candidats = [];
        reaction.left.forEach(function(t, i) { if (t[0] > 1) candidats.push({ side: 'left', i: i }); });
        reaction.right.forEach(function(t, i) { if (t[0] > 1) candidats.push({ side: 'right', i: i }); });
        var blank = pick(candidats);

        function formatSide(terms, blankSide) {
          return terms.map(function(t, i) {
            var isBlank = (blankSide === 'left' ? blank.side === 'left' && blank.i === i : blank.side === 'right' && blank.i === i);
            var coefStr = isBlank ? '\\,?\\,' : (t[0] > 1 ? t[0] + '\\,' : '');
            return coefStr + t[1];
          }).join(' + ');
        }
        function formatSideFull(terms) {
          return terms.map(function(t) { return (t[0] > 1 ? t[0] + '\\,' : '') + t[1]; }).join(' + ');
        }

        var eqBlank = formatSide(reaction.left, 'left') + ' \\rightarrow ' + formatSide(reaction.right, 'right');
        var eqFull = formatSideFull(reaction.left) + ' \\rightarrow ' + formatSideFull(reaction.right);
        var answer = blank.side === 'left' ? reaction.left[blank.i][0] : reaction.right[blank.i][0];

        return {
          statement: 'Dans ' + contexte + ', l\'équation traduisant ' + reaction.nom + ' comporte un nombre stœchiométrique remplacé par un point d\'interrogation :<br/><br/>$$' + eqBlank + '$$<br/><br/>Détermine la valeur de ce nombre stœchiométrique pour que l\'équation soit équilibrée.',
          answer: answer,
          tolerance: 0,
          unit: '',
          hint: 'Compte les atomes de l\'élément concerné de chaque côté de la flèche : ils doivent être en nombre égal à gauche et à droite (conservation de la masse).',
          solution: [
            'L\'équation complète, une fois équilibrée, est : $' + eqFull + '$.',
            'Le nombre stœchiométrique manquant est donc $' + answer + '$.',
            'Vérification : en comptant les atomes de chaque élément, on retrouve bien le même total de part et d\'autre de la flèche.'
          ]
        };
      }
    },

    probleme: {
      context: 'On réalise la combustion complète du propane, utilisé notamment dans les barbecues et certains chauffe-eau : $\\text{C}_3\\text{H}_8 + \\text{O}_2 \\rightarrow \\text{CO}_2 + \\text{H}_2\\text{O}$ (équation non équilibrée). On fait réagir $m_1 = 22$ g de propane avec du dioxygène, produisant $m_2 = 66$ g de dioxyde de carbone et $m_3 = 36$ g d\'eau.',
      tasks: [
        'Équilibre l\'équation de la combustion du propane.',
        'D\'après la loi de conservation de la masse, calcule la masse $m_{O_2}$ de dioxygène consommée au cours de cette réaction.',
        'Vérifie ta réponse en additionnant les masses des produits obtenus.'
      ],
      solutions: [
        'On équilibre d\'abord le carbone ($3\\,\\text{CO}_2$ pour les $3$ atomes de C de $\\text{C}_3\\text{H}_8$), puis l\'hydrogène ($4\\,\\text{H}_2\\text{O}$ pour les $8$ atomes de H), puis l\'oxygène ($3\\times2 + 4\\times1 = 10$ atomes d\'O à droite, donc $5\\,\\text{O}_2$ à gauche) : $\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$.',
        'Loi de conservation de la masse : $m_{\\text{réactifs}} = m_{\\text{produits}}$, soit $m_1 + m_{O_2} = m_2 + m_3$. On isole $m_{O_2} = m_2 + m_3 - m_1 = 66 + 36 - 22 = 80$ g.',
        'Vérification : masse totale des réactifs $= 22 + 80 = 102$ g ; masse totale des produits $= 66 + 36 = 102$ g. Les deux masses sont bien égales : la loi de Lavoisier est vérifiée.'
      ],
      finalAnswer: '$m_{O_2} = 80$ g de dioxygène ont été consommés. Comme dans toute réaction chimique, la masse totale s\'est conservée : $102$ g de réactifs ont donné $102$ g de produits, seule leur nature chimique a changé.'
    },

    evaluation: {
      title: 'Évaluation — Les réactions chimiques (équilibrage)',
      duration: '25 min',
      questions: [
        {
          statement: 'Dans l\'équation équilibrée $\\text{N}_2 + 3\\,\\text{H}_2 \\rightarrow 2\\,\\text{NH}_3$, combien d\'atomes d\'hydrogène y a-t-il du côté des réactifs ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les $3$ molécules de $\\text{H}_2$ contiennent chacune $2$ atomes d\'hydrogène : $3 \\times 2 = 6$ atomes.'
        },
        {
          statement: 'La loi de conservation de la masse énoncée par Lavoisier affirme que :',
          type: 'multiple-choice',
          options: [
            'La masse totale se conserve au cours d\'une réaction chimique',
            'Le volume total se conserve au cours d\'une réaction chimique',
            'Le nombre de molécules se conserve au cours d\'une réaction chimique',
            'La température reste constante au cours d\'une réaction chimique'
          ],
          answer: 0,
          points: 2,
          correction: 'Lavoisier a établi que la masse totale des réactifs est égale à la masse totale des produits : rien ne se perd, rien ne se crée, tout se transforme.'
        },
        {
          statement: 'On fait réagir $m_1 = 8$ g de dihydrogène avec du dioxygène pour former de l\'eau. Si la masse de dioxygène consommée est $m_2 = 64$ g, quelle est la masse d\'eau produite (en g) ?',
          type: 'numeric',
          answer: 72,
          tolerance: 0,
          unit: 'g',
          points: 2,
          correction: 'Conservation de la masse : $m_{\\text{eau}} = m_1 + m_2 = 8 + 64 = 72$ g.'
        },
        {
          statement: 'Pour équilibrer une équation-bilan, on ajuste :',
          type: 'multiple-choice',
          options: [
            'Les indices à l\'intérieur des formules',
            'Les nombres stœchiométriques devant les formules',
            'Les états physiques des espèces chimiques',
            'Le nom des éléments chimiques'
          ],
          answer: 1,
          points: 1,
          correction: 'Seuls les nombres stœchiométriques (les coefficients placés devant les formules) peuvent être modifiés pour équilibrer une équation.'
        },
        {
          statement: 'Dans l\'équation $\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}$, combien d\'atomes d\'oxygène au total y a-t-il du côté des produits ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Les $3$ molécules de $\\text{CO}_2$ apportent $3\\times2=6$ atomes d\'oxygène, et les $4$ molécules de $\\text{H}_2\\text{O}$ en apportent $4\\times1=4$ : au total $6+4=10$ atomes d\'oxygène.'
        }
      ]
    }
  });
