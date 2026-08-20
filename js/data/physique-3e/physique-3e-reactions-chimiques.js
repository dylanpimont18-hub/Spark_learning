/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-reactions-chimiques.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-reactions-chimiques',
    level: 1, subject: 'physique',
    icon: '🧪',
    title: 'Les réactions chimiques (équilibrage)',
    subtitle: 'Réactifs et produits, loi de conservation de la masse, équation de réaction, équilibrage des coefficients stœchiométriques',
    keywords: ['Réaction chimique', 'Lavoisier', 'Équation', 'Coefficient', 'Conservation de la masse'],
    physics: 'Équilibrer une équation de réaction n\'est pas qu\'un exercice scolaire : c\'est ce qui permet de calculer les quantités de gaz produites par une combustion (chaudière, moteur), de doser les réactifs d\'un procédé industriel, ou de comprendre pourquoi une combustion incomplète dans un appareil mal réglé peut produire du monoxyde de carbone, gaz toxique.',

    cours: {
      intro: 'Une <strong>réaction chimique</strong> est une transformation au cours de laquelle des espèces chimiques de départ, appelées <strong>réactifs</strong>, disparaissent pour former de nouvelles espèces, appelées <strong>produits</strong>.<br/><br/>Cette transformation ne fait ni apparaître ni disparaître le moindre atome : les atomes présents dans les réactifs sont exactement les mêmes que ceux retrouvés dans les produits, simplement <strong>réorganisés</strong> différemment. C\'est le chimiste français Antoine Lavoisier qui a formulé ce principe à la fin du XVIIIe siècle : « Rien ne se perd, rien ne se crée, tout se transforme ».<br/><br/>On représente une réaction chimique par une <strong>équation de réaction</strong> : réactifs à gauche, produits à droite, séparés par une flèche. Pour respecter la conservation des atomes, cette équation doit être <strong>équilibrée</strong> à l\'aide de nombres appelés coefficients stœchiométriques.',
      definitions: [
        { term: 'Réactifs / produits', def: 'Les <strong>réactifs</strong> sont les espèces chimiques consommées au cours de la réaction ; les <strong>produits</strong> sont les espèces chimiques formées. Ils apparaissent respectivement à gauche et à droite de la flèche dans l\'équation de réaction.' },
        { term: 'Équation de réaction', def: 'Écriture symbolique d\'une réaction chimique : réactifs $\\rightarrow$ produits, chaque espèce étant précédée d\'un <strong>coefficient stœchiométrique</strong> assurant la conservation du nombre d\'atomes de chaque élément.' },
        { term: 'Loi de conservation de la masse (Lavoisier)', def: 'Au cours d\'une réaction chimique, la masse totale des réactifs consommés est égale à la masse totale des produits formés : $m_{réactifs} = m_{produits}$.' },
        { term: 'Coefficient stœchiométrique', def: 'Nombre entier placé devant la formule d\'une espèce chimique dans l\'équation, indiquant combien de molécules (ou d\'entités) de cette espèce interviennent. C\'est le <strong>seul</strong> élément que l\'on peut modifier pour équilibrer une équation.' }
      ],
      method: {
        title: 'Équilibrer une équation de réaction en 3 étapes',
        steps: [
          '<strong>Compter les atomes de chaque élément</strong> de part et d\'autre de la flèche, avec les coefficients actuels (souvent tous égaux à 1 au départ), et repérer les éléments en déséquilibre.<br/>Exemple : dans $CH_4 + O_2 \\rightarrow CO_2 + H_2O$, on compte à gauche C:1, H:4, O:2 et à droite C:1, H:2, O:3 — l\'hydrogène et l\'oxygène ne sont pas équilibrés.',
          '<strong>Ajuster les coefficients un élément à la fois</strong>, en commençant par celui qui apparaît dans une seule espèce de chaque côté, jusqu\'à obtenir le même nombre d\'atomes des deux côtés. Ne jamais toucher aux indices des formules chimiques : cela changerait la nature même de la substance.<br/>Exemple (suite) : pour équilibrer l\'hydrogène (4 à gauche), on place un coefficient 2 devant $H_2O$ : $CH_4 + O_2 \\rightarrow CO_2 + 2\\,H_2O$.',
          '<strong>Vérifier en recomptant</strong> tous les atomes des deux côtés une fois les coefficients ajustés.<br/>Exemple (suite) : à droite, l\'oxygène total devient $2 + 2\\times1 = 4$ ; il faut donc aussi 4 atomes d\'oxygène à gauche, soit un coefficient 2 devant $O_2$ : $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$, désormais équilibrée.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Équilibrage d\'une équation chimique',
        title: 'Conservation des atomes lors de la synthèse de l\'eau : $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$',
        description: 'La synthèse de l\'eau à partir de dihydrogène et de dioxygène illustre la conservation des atomes lors d\'une réaction chimique : les atomes d\'hydrogène (petites sphères claires) et d\'oxygène (grandes sphères colorées) présents dans les réactifs se retrouvent, en même nombre, dans les produits.',
        svg: `
          <svg viewBox="0 0 620 300" role="img" aria-labelledby="reaction-title reaction-desc">
            <title id="reaction-title">Conservation des atomes lors de la synthese de l'eau</title>
            <desc id="reaction-desc">A gauche, deux molecules de dihydrogene et une molecule de dioxygene, representees par des spheres reliees par des traits. Une fleche mene vers la droite, ou l'on trouve deux molecules d'eau, chacune formee d'un atome d'oxygene relie a deux atomes d'hydrogene. Un tableau sous le schema recapitule le nombre d'atomes d'hydrogene et d'oxygene avant et apres la reaction, montrant qu'ils sont identiques des deux cotes.</desc>

            <defs>
              <marker id="arrow-phys3e-reactions" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="annotation-label" x="150" y="40" text-anchor="middle">Réactifs</text>
            <text class="annotation-label" x="470" y="40" text-anchor="middle">Produits</text>

            <!-- reactifs : 2 molecules H2 -->
            <line class="frame-line" x1="70" y1="100" x2="110" y2="100"></line>
            <circle cx="70" cy="100" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <circle cx="110" cy="100" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <text class="label-soft" x="90" y="130" text-anchor="middle">H₂</text>

            <line class="frame-line" x1="70" y1="170" x2="110" y2="170"></line>
            <circle cx="70" cy="170" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <circle cx="110" cy="170" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <text class="label-soft" x="90" y="200" text-anchor="middle">H₂</text>

            <text class="annotation-label" x="150" y="140" text-anchor="middle">+</text>

            <!-- reactifs : 1 molecule O2 -->
            <line class="frame-line" x1="190" y1="135" x2="230" y2="135"></line>
            <circle cx="190" cy="135" r="18" fill="var(--diagram-accent)"></circle>
            <circle cx="230" cy="135" r="18" fill="var(--diagram-accent)"></circle>
            <text class="label-soft" x="210" y="170" text-anchor="middle">O₂</text>

            <!-- fleche de reaction -->
            <line class="curve-main" x1="270" y1="135" x2="340" y2="135" marker-end="url(#arrow-phys3e-reactions)"></line>

            <!-- produits : 2 molecules H2O -->
            <line class="frame-line" x1="410" y1="123" x2="378" y2="147"></line>
            <line class="frame-line" x1="410" y1="123" x2="442" y2="147"></line>
            <circle cx="410" cy="123" r="18" fill="var(--diagram-accent)"></circle>
            <circle cx="378" cy="147" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <circle cx="442" cy="147" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <text class="label-soft" x="410" y="178" text-anchor="middle">H₂O</text>

            <text class="annotation-label" x="470" y="140" text-anchor="middle">+</text>

            <line class="frame-line" x1="530" y1="123" x2="498" y2="147"></line>
            <line class="frame-line" x1="530" y1="123" x2="562" y2="147"></line>
            <circle cx="530" cy="123" r="18" fill="var(--diagram-accent)"></circle>
            <circle cx="498" cy="147" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <circle cx="562" cy="147" r="14" fill="var(--bg-card)" stroke="var(--text)" stroke-width="2"></circle>
            <text class="label-soft" x="530" y="178" text-anchor="middle">H₂O</text>

            <!-- tableau de bilan -->
            <line class="grid-line" x1="60" y1="200" x2="590" y2="200"></line>
            <text class="annotation-label" x="130" y="222" text-anchor="middle">Élément</text>
            <text class="annotation-label" x="340" y="222" text-anchor="middle">Avant (réactifs)</text>
            <text class="annotation-label" x="530" y="222" text-anchor="middle">Après (produits)</text>
            <line class="grid-line" x1="60" y1="232" x2="590" y2="232"></line>
            <text class="tick-label" x="130" y="250" text-anchor="middle">H</text>
            <text class="tick-label" x="340" y="250" text-anchor="middle">2 × H₂ = 4</text>
            <text class="tick-label" x="530" y="250" text-anchor="middle">2 × H₂O = 4</text>
            <text class="tick-label" x="130" y="272" text-anchor="middle">O</text>
            <text class="tick-label" x="340" y="272" text-anchor="middle">O₂ = 2</text>
            <text class="tick-label" x="530" y="272" text-anchor="middle">2 × H₂O = 2</text>
          </svg>
        `,
        notes: [
          'Avant la réaction (à gauche), on compte 4 atomes d\'hydrogène (2 molécules $H_2$) et 2 atomes d\'oxygène (1 molécule $O_2$) : 6 atomes au total.',
          'Après la réaction (à droite), ces mêmes atomes se retrouvent réorganisés en 2 molécules d\'eau $H_2O$ : toujours 4 atomes d\'hydrogène et 2 atomes d\'oxygène — aucun atome n\'a été créé ni perdu.',
          'C\'est cette conservation du nombre d\'atomes de chaque élément qui impose les <strong>coefficients stœchiométriques</strong> (les « 2 » devant $H_2$ et $H_2O$) : c\'est le principe même de l\'équilibrage d\'une équation.'
        ],
        reading: 'Compte les atomes de chaque type à gauche de la flèche, puis les mêmes atomes à droite : le tableau en bas confirme que les totaux sont identiques pour l\'hydrogène et pour l\'oxygène.',
        caption: 'Équation de la synthèse de l\'eau $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$ : les 4 atomes d\'hydrogène et 2 atomes d\'oxygène des réactifs se retrouvent, réorganisés, dans les produits.'
      },
      example: {
        statement: 'On réalise la combustion complète du méthane ($CH_4$) dans le dioxygène. L\'équation, incomplète, est : $CH_4 + O_2 \\rightarrow CO_2 + H_2O$.<br/><br/>Ajuste les coefficients stœchiométriques pour équilibrer cette équation.',
        steps: [
          'On compte les atomes de chaque côté avec les coefficients actuels (tous égaux à 1) : à gauche C:1, H:4, O:2 ; à droite C:1, H:2, O:3. Le carbone est déjà équilibré, mais pas l\'hydrogène ni l\'oxygène.',
          'On équilibre d\'abord l\'hydrogène : il en faut 4 à droite comme à gauche, donc on place un coefficient 2 devant $H_2O$ : $CH_4 + O_2 \\rightarrow CO_2 + 2\\,H_2O$.',
          'On recompte l\'oxygène à droite : $CO_2$ apporte 2 atomes, $2\\,H_2O$ en apporte $2\\times1=2$, soit $2+2=4$ atomes d\'oxygène au total.',
          'Il faut donc aussi 4 atomes d\'oxygène à gauche : on place un coefficient 2 devant $O_2$ ($2\\times2=4$), ce qui donne l\'équation équilibrée $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$.'
        ],
        answer: 'L\'équation équilibrée est $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$. On ne modifie jamais les indices des formules chimiques (ce qui définirait une autre substance) : seuls les coefficients placés devant peuvent être ajustés.'
      },
      formulas: [
        'Loi de Lavoisier : $m_{réactifs} = m_{produits}$',
        'Équation de réaction : réactifs $\\rightarrow$ produits, avec coefficients stœchiométriques équilibrés',
        'Synthèse de l\'eau : $2\\,H_2 + O_2 \\rightarrow 2\\,H_2O$',
        'Combustion du méthane : $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$',
        'Règle absolue : seuls les <strong>coefficients</strong> se modifient pour équilibrer — jamais les <strong>indices</strong> d\'une formule chimique'
      ],
      recap: [
        'Une réaction chimique réorganise les atomes des réactifs pour former les produits : aucun atome n\'est créé, aucun n\'est détruit.',
        'La masse totale se conserve au cours d\'une réaction chimique (loi de Lavoisier) : $m_{réactifs} = m_{produits}$.',
        'Équilibrer une équation, c\'est ajuster les coefficients stœchiométriques pour que chaque élément soit présent en quantité identique de part et d\'autre de la flèche.',
        'On ne modifie <strong>jamais</strong> les indices d\'une formule chimique : cela reviendrait à décrire une substance différente.'
      ],
      piege: 'Une erreur très fréquente consiste à équilibrer une équation en modifiant les indices d\'une formule, par exemple écrire $H_2O_2$ au lieu d\'ajouter un coefficient 2 devant $H_2O$. Attention : seuls les coefficients placés devant les formules peuvent être ajustés — modifier un indice transforme la substance en une espèce chimique totalement différente.'
    },

    quiz: [
      {
        q: 'L\'équation $Fe + O_2 \\rightarrow Fe_2O_3$ (formation de la rouille) n\'est pas équilibrée. Quelle est la version équilibrée ?',
        options: ['$4\\,Fe + 3\\,O_2 \\rightarrow 2\\,Fe_2O_3$', '$2\\,Fe + O_2 \\rightarrow Fe_2O_3$', '$Fe + O_2 \\rightarrow Fe_2O_3$ (déjà équilibrée)', '$2\\,Fe + 3\\,O_2 \\rightarrow 2\\,Fe_2O_3$'],
        answer: 0,
        correction: 'Avec $4\\,Fe + 3\\,O_2 \\rightarrow 2\\,Fe_2O_3$ : fer $4=2\\times2$, oxygène $3\\times2=6=2\\times3$. Les deux éléments sont bien équilibrés. La troisième option a le bon nombre d\'oxygène mais un fer déséquilibré ($2$ à gauche contre $4$ à droite).'
      },
      {
        q: 'Que signifie la loi de conservation de la masse énoncée par Lavoisier ?',
        options: [
          'La masse totale des réactifs consommés est égale à la masse totale des produits formés',
          'La masse des produits est toujours supérieure à celle des réactifs',
          'La masse totale diminue car des atomes disparaissent pendant la réaction',
          'La masse ne se conserve que pour les réactions sans dégagement gazeux'
        ],
        answer: 0,
        correction: '« Rien ne se perd, rien ne se crée, tout se transforme » : les atomes se réorganisent sans disparaître ni apparaître, donc la masse totale du système reste rigoureusement la même avant et après la réaction.'
      },
      {
        q: 'Pour équilibrer l\'équation $H_2 + Cl_2 \\rightarrow HCl$, que doit-on faire ?',
        options: ['Ajouter un coefficient 2 devant $HCl$', 'Changer $HCl$ en $H_2Cl_2$', 'Ajouter un coefficient 2 devant $H_2$', 'Laisser l\'équation ainsi, elle est déjà équilibrée'],
        answer: 0,
        correction: 'Avec $H_2 + Cl_2 \\rightarrow 2\\,HCl$ : hydrogène $2=2\\times1$, chlore $2=2\\times1$. Changer $HCl$ en $H_2Cl_2$ créerait une autre substance chimique, ce qui est interdit.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var reactions = [
          { nom: 'la combustion complète du carbone', eq: 'C + O_2 \\rightarrow CO_2', compte: { carbone: 1, oxygène: 2 } },
          { nom: 'la synthèse de l\'eau', eq: '2\\,H_2 + O_2 \\rightarrow 2\\,H_2O', compte: { hydrogène: 4, oxygène: 2 } },
          { nom: 'la combustion complète du méthane', eq: 'CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O', compte: { carbone: 1, hydrogène: 4, oxygène: 4 } },
          { nom: 'la formation de l\'ammoniac', eq: 'N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3', compte: { azote: 2, hydrogène: 6 } },
          { nom: 'l\'oxydation du fer (formation de la rouille)', eq: '4\\,Fe + 3\\,O_2 \\rightarrow 2\\,Fe_2O_3', compte: { fer: 4, oxygène: 6 } }
        ];
        var coeffCas = [
          { nomReaction: 'la combustion du méthane', eqAvecX: 'CH_4 + x\\,O_2 \\rightarrow CO_2 + 2\\,H_2O', element: 'oxygène', compteConnu: 4, compteParMolecule: 2, x: 2, detailConnu: 'CO_2\\ (2\\ O) + 2\\,H_2O\\ (2\\times1=2\\ O) = 4' },
          { nomReaction: 'la formation de l\'ammoniac', eqAvecX: 'N_2 + x\\,H_2 \\rightarrow 2\\,NH_3', element: 'hydrogène', compteConnu: 6, compteParMolecule: 2, x: 3, detailConnu: '2\\,NH_3 = 2\\times3 = 6' },
          { nomReaction: 'l\'oxydation du fer (rouille)', eqAvecX: '4\\,Fe + x\\,O_2 \\rightarrow 2\\,Fe_2O_3', element: 'oxygène', compteConnu: 6, compteParMolecule: 2, x: 3, detailConnu: '2\\,Fe_2O_3 = 2\\times3 = 6' },
          { nomReaction: 'la combustion du propane', eqAvecX: 'C_3H_8 + x\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O', element: 'oxygène', compteConnu: 10, compteParMolecule: 2, x: 5, detailConnu: '3\\,CO_2\\ (6\\ O) + 4\\,H_2O\\ (4\\ O) = 10' }
        ];
        var typeExo = pick(['compter', 'coefficient']);

        if (typeExo === 'compter') {
          var reaction = pick(reactions);
          var elementsDispo = Object.keys(reaction.compte);
          var elementNom = pick(elementsDispo);
          var n = reaction.compte[elementNom];
          var contexte = pick([
            'Lors d\'un TP de chimie,', 'Dans un exercice sur les équations de réaction,',
            'Sur une fiche de révision du brevet,', 'En classe, le professeur écrit au tableau'
          ]);
          return {
            statement: contexte + ' on étudie ' + reaction.nom + ', dont l\'équation équilibrée est : $' + reaction.eq + '$.<br/><br/>Combien d\'atomes d\'' + elementNom + ' sont présents du côté des produits (à droite de la flèche) ?',
            answer: n,
            tolerance: 0,
            unit: 'atomes',
            hint: 'L\'équation étant équilibrée, le nombre d\'atomes de chaque élément est le même des deux côtés de la flèche : compte-les du côté le plus simple à lire.',
            solution: [
              'L\'équation $' + reaction.eq + '$ est équilibrée : chaque élément est présent en même quantité côté réactifs et côté produits.',
              'En comptant du côté des produits, on trouve ' + n + ' atome' + (n > 1 ? 's' : '') + ' d\'' + elementNom + '.'
            ]
          };
        } else {
          var cas = pick(coeffCas);
          return {
            statement: 'Dans ' + cas.nomReaction + ', l\'équation de réaction n\'est pas complètement écrite : $' + cas.eqAvecX + '$.<br/><br/>Détermine la valeur du coefficient $x$ qui équilibre cette équation (conservation des atomes d\'' + cas.element + ').',
            answer: cas.x,
            tolerance: 0,
            unit: '',
            hint: 'Compte le nombre d\'atomes d\'' + cas.element + ' du côté où tous les coefficients sont connus, puis déduis-en $x$.',
            solution: [
              'Du côté où tous les coefficients sont connus, le nombre d\'atomes d\'' + cas.element + ' est : $' + cas.detailConnu + '$.',
              'De l\'autre côté, chaque molécule apporte ' + cas.compteParMolecule + ' atome' + (cas.compteParMolecule > 1 ? 's' : '') + ' d\'' + cas.element + ', donc $x \\times ' + cas.compteParMolecule + ' = ' + cas.compteConnu + '$.',
              'On isole $x$ : $x = \\dfrac{' + cas.compteConnu + '}{' + cas.compteParMolecule + '} = ' + cas.x + '$.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une chaudière à gaz brûle du méthane ($CH_4$) provenant du réseau de gaz de ville, selon la réaction de combustion complète $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$. Lors d\'une expérience de laboratoire reproduisant cette combustion, on fait réagir une masse $m(CH_4) = 8$ g de méthane avec une masse $m(O_2) = 32$ g de dioxygène ; la réaction produit une masse $m(CO_2) = 22$ g de dioxyde de carbone.',
      tasks: [
        'Vérifier que l\'équation $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$ est bien équilibrée, en comptant les atomes de carbone, d\'hydrogène et d\'oxygène de chaque côté.',
        'En utilisant la loi de conservation de la masse énoncée par Lavoisier, calculer la masse d\'eau $m(H_2O)$ formée au cours de cette combustion.',
        'Expliquer pourquoi, bien que la masse totale du système se conserve, sa composition chimique est totalement différente avant et après la réaction.'
      ],
      solutions: [
        'Côté réactifs : C = 1 (dans $CH_4$), H = 4 (dans $CH_4$), O $=2\\times2=4$ (dans $2\\,O_2$). Côté produits : C = 1 (dans $CO_2$), H $=2\\times2=4$ (dans $2\\,H_2O$), O $=2$ (dans $CO_2$) $+\\,2\\times1=2$ (dans $2\\,H_2O$), soit $4$. Les trois éléments sont bien en quantités égales des deux côtés : l\'équation est équilibrée.',
        'Loi de Lavoisier : $m_{réactifs} = m_{produits}$, soit $m(CH_4) + m(O_2) = m(CO_2) + m(H_2O)$. On isole $m(H_2O)$ : $m(H_2O) = m(CH_4) + m(O_2) - m(CO_2) = 8 + 32 - 22 = 18$ g.',
        'Les atomes présents (carbone, hydrogène, oxygène) sont exactement les mêmes avant et après la réaction : seule leur <strong>organisation</strong> change, passant des molécules de méthane et de dioxygène à des molécules de dioxyde de carbone et d\'eau. C\'est cette réorganisation, sans création ni perte d\'atomes, qui explique à la fois la conservation de la masse totale et le changement complet de composition chimique.'
      ],
      finalAnswer: 'L\'équation est bien équilibrée, et la masse d\'eau formée est $m(H_2O) = 18$ g. Cette expérience illustre concrètement la loi de Lavoisier : la masse totale ($8+32=40$ g de réactifs, $22+18=40$ g de produits) se conserve exactement, même si les substances chimiques présentes sont entièrement différentes avant et après la combustion.'
    },

    evaluation: {
      title: 'Évaluation — Les réactions chimiques (équilibrage)',
      duration: '30 min',
      questions: [
        {
          statement: 'Dans l\'équation équilibrée $N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$, combien d\'atomes d\'hydrogène sont présents côté réactifs ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'atomes',
          points: 2,
          correction: '$3\\,H_2$ apporte $3\\times2=6$ atomes d\'hydrogène, à retrouver côté produits dans $2\\,NH_3$ ($2\\times3=6$).'
        },
        {
          statement: 'La loi de conservation de la masse énoncée par Lavoisier signifie que :',
          type: 'multiple-choice',
          options: [
            'La masse totale des réactifs est égale à la masse totale des produits',
            'Le nombre de molécules se conserve toujours',
            'La masse des gaz n\'est jamais prise en compte',
            'La masse augmente si la réaction dégage de la chaleur'
          ],
          answer: 0,
          points: 2,
          correction: '« Rien ne se perd, rien ne se crée » : la masse totale du système reste identique avant et après la réaction, car les atomes se réorganisent sans disparaître ni apparaître.'
        },
        {
          statement: 'Pour équilibrer $C_3H_8 + x\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O$ (combustion du propane), calculer la valeur du coefficient $x$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'Côté produits, l\'oxygène total est $3\\,CO_2$ (6 O) $+\\,4\\,H_2O$ (4 O) $=10$. Comme chaque $O_2$ apporte 2 atomes d\'oxygène, $x\\times2=10$, donc $x=5$.'
        },
        {
          statement: 'Pour équilibrer une équation chimique, on a le droit de modifier :',
          type: 'multiple-choice',
          options: ['Les coefficients stœchiométriques uniquement', 'Les indices dans les formules chimiques', 'À la fois les indices et les coefficients', 'Le sens de la flèche de réaction'],
          answer: 0,
          points: 2,
          correction: 'Seuls les coefficients placés devant les formules peuvent être ajustés. Modifier un indice changerait la nature même de la substance chimique décrite.'
        },
        {
          statement: 'Lors d\'une réaction chimique, la masse totale des réactifs est $m_r = 15$ g. Elle forme deux produits, de masses $m_1 = 9$ g et $m_2$. Calculer $m_2$ (en g).',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: 'g',
          points: 1,
          correction: 'Conservation de la masse : $m_r = m_1 + m_2$, donc $m_2 = m_r - m_1 = 15 - 9 = 6$ g.'
        }
      ]
    }
  });
