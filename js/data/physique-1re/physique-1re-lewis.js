/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-lewis.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-lewis',
    level: 2, subject: 'physique',
    icon: '⚛️',
    title: 'Structure des entités chimiques',
    subtitle: 'Représentation de Lewis, règles du duet et de l\'octet, géométrie des molécules (modèle VSEPR)',
    keywords: ['Lewis', 'Octet', 'Duet', 'Géométrie moléculaire', 'VSEPR'],
    physics: 'La représentation de Lewis et la géométrie moléculaire expliquent pourquoi l\'eau est une molécule polaire (géométrie coudée) essentielle au vivant, pourquoi certains gaz comme le CO2 sont linéaires et donc non polaires malgré des liaisons polarisées, et permettent de prévoir la réactivité chimique d\'une molécule à partir de la disposition de ses doublets non liants.',

    cours: {
      intro: 'Les atomes évoluent chimiquement pour <strong>saturer leur couche électronique externe</strong> : c\'est la <strong>règle du duet</strong> (2 électrons, pour l\'hydrogène et l\'hélium) et la <strong>règle de l\'octet</strong> (8 électrons, pour la plupart des autres éléments légers). Pour cela, ils forment des <strong>liaisons covalentes</strong> (mise en commun d\'un doublet d\'électrons entre deux atomes) ou deviennent des ions.<br/><br/>Le <strong>schéma de Lewis</strong> d\'une molécule représente tous les électrons de valence sous forme de doublets : les <strong>doublets liants</strong> (partagés entre deux atomes, représentés par un trait) forment les liaisons covalentes, et les <strong>doublets non liants</strong> (propres à un seul atome, aussi appelés paires libres) complètent son octet ou son duet.<br/><br/>La répartition de ces doublets autour d\'un atome central détermine la <strong>géométrie de la molécule</strong> (modèle VSEPR) : tous les doublets, liants <strong>et</strong> non liants, se répartissent dans l\'espace pour minimiser leur répulsion mutuelle — ce qui donne des géométries caractéristiques (tétraédrique, pyramidale, coudée, linéaire...).',
      definitions: [
        { term: 'Règle du duet', def: 'Les atomes d\'hydrogène (H) et d\'hélium (He) tendent à s\'entourer de $2$ électrons (couche K saturée), le plus souvent en formant une seule liaison covalente.' },
        { term: 'Règle de l\'octet', def: 'Les atomes des éléments légers proches du néon ou de l\'argon (C, N, O, F, Cl...) tendent à s\'entourer de $8$ électrons sur leur couche de valence.' },
        { term: 'Doublet liant / doublet non liant', def: 'Un <strong>doublet liant</strong> (2 électrons partagés) forme une liaison covalente entre deux atomes, représenté par un trait. Un <strong>doublet non liant</strong> (2 électrons propres à un seul atome, ou « paire libre ») n\'est pas partagé.' },
        { term: 'Modèle VSEPR (géométrie moléculaire)', def: 'Les doublets — liants <strong>et</strong> non liants — autour d\'un atome central se répartissent dans l\'espace pour minimiser leur répulsion mutuelle, ce qui détermine la géométrie de la molécule (tétraédrique, pyramidale, coudée...).' }
      ],
      method: {
        title: 'Construire un schéma de Lewis et en déduire la géométrie en 3 étapes',
        steps: [
          '<strong>Compter les électrons de valence</strong> de chaque atome (donné par son groupe dans la classification, ou déduit de sa configuration électronique), et en déduire le nombre total de doublets à placer.',
          '<strong>Placer les doublets liants</strong> (une liaison covalente entre chaque paire d\'atomes liés), puis <strong>compléter chaque atome</strong> par des doublets non liants jusqu\'à satisfaire la règle du duet (pour H) ou de l\'octet (pour les autres).',
          '<strong>Dénombrer tous les doublets</strong> (liants + non liants) autour de l\'atome central pour en déduire la géométrie — ne jamais compter uniquement les liaisons visibles, les doublets non liants comptent tout autant dans la répulsion géométrique.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Molécule d\'ammoniac NH₃ (schéma de Lewis et géométrie)',
        title: 'De la représentation de Lewis à la géométrie pyramidale',
        description: 'Autour de l\'azote : $3$ doublets liants (les $3$ liaisons N–H) et $1$ doublet non liant. Ces $4$ doublets se répartissent selon une géométrie tétraédrique, mais seules les $3$ liaisons sont « visibles » : la molécule $NH_3$ a donc une géométrie <strong>pyramidale</strong>.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="lewis-title lewis-desc">
            <title id="lewis-title">Schema de Lewis et geometrie de la molecule d'ammoniac NH3</title>
            <desc id="lewis-desc">Deux panneaux cote a cote. A gauche, le schema de Lewis de l'ammoniac : un atome d'azote central relie a trois atomes d'hydrogene par un trait chacun, representant trois doublets liants, avec deux points au-dessus de l'azote representant son doublet non liant. A droite, la representation geometrique en trois dimensions de la meme molecule : une liaison en trait plein vers le bas dans le plan de la feuille, une liaison en triangle plein vers l'avant en haut a droite, une liaison en trait pointille vers l'arriere en haut a gauche, et deux points au-dessus de l'azote representant le doublet non liant, formant une geometrie pyramidale.</desc>

            <defs>
              <marker id="arrow-phy1re-lewis" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- separateur -->
            <line class="guide-line" x1="290" y1="50" x2="290" y2="270"></line>

            <!-- PANNEAU GAUCHE : schema de Lewis -->
            <line class="frame-line" x1="150" y1="160" x2="90" y2="95"></line>
            <line class="frame-line" x1="150" y1="160" x2="210" y2="95"></line>
            <line class="frame-line" x1="150" y1="160" x2="150" y2="235"></line>
            <text class="annotation-label" x="150" y="166" text-anchor="middle">N</text>
            <text class="annotation-label" x="80" y="86" text-anchor="middle">H</text>
            <text class="annotation-label" x="220" y="86" text-anchor="middle">H</text>
            <text class="annotation-label" x="150" y="256" text-anchor="middle">H</text>
            <circle class="plot-point" cx="144" cy="72" r="2.5"></circle>
            <circle class="plot-point" cx="156" cy="72" r="2.5"></circle>
            <text class="label-soft" x="150" y="288" text-anchor="middle">Représentation de Lewis</text>

            <!-- PANNEAU DROIT : geometrie pyramidale -->
            <line class="frame-line" x1="430" y1="160" x2="430" y2="235"></line>
            <polygon points="430,160 493.5,103.5 486.5,96.5" style="fill:var(--diagram-accent);stroke:none;"></polygon>
            <line class="guide-line" x1="430" y1="160" x2="370" y2="100"></line>
            <text class="annotation-label" x="430" y="166" text-anchor="middle">N</text>
            <text class="annotation-label" x="358" y="92" text-anchor="middle">H</text>
            <text class="annotation-label" x="502" y="92" text-anchor="middle">H</text>
            <text class="annotation-label" x="430" y="256" text-anchor="middle">H</text>
            <circle class="plot-point" cx="424" cy="82" r="2.5"></circle>
            <circle class="plot-point" cx="436" cy="82" r="2.5"></circle>
            <text class="label-soft" x="430" y="288" text-anchor="middle">Géométrie (modèle VSEPR)</text>
          </svg>
        `,
        notes: [
          'Dans le schéma de Lewis (à gauche), chaque trait N–H représente un <strong>doublet liant</strong> ; les deux points au-dessus de l\'azote représentent son unique <strong>doublet non liant</strong>.',
          'Autour de l\'azote : $3$ doublets liants $+$ $1$ doublet non liant $=4$ doublets $=8$ électrons — la règle de l\'<strong>octet</strong> est satisfaite. Chaque hydrogène, avec $1$ doublet liant, satisfait la règle du <strong>duet</strong>.',
          'Dans la représentation géométrique (à droite), le trait plein figure une liaison dans le plan, le triangle plein une liaison <strong>vers l\'avant</strong>, et le trait en pointillés une liaison <strong>vers l\'arrière</strong> : le doublet non liant occupe la quatrième direction, ce qui incurve la molécule en pyramide.'
        ],
        reading: 'Compare les deux panneaux : à gauche, le schéma de Lewis « à plat » avec ses doublets ; à droite, la même molécule en perspective, où le doublet non liant (invisible dans le contour de la molécule) explique pourquoi elle n\'est pas plane.',
        caption: 'Molécule d\'ammoniac $NH_3$ : $3$ doublets liants et $1$ doublet non liant autour de l\'azote donnent une géométrie <strong>pyramidale</strong> (modèle VSEPR).'
      },
      example: {
        statement: 'Le schéma ci-dessous détaille la méthode sur l\'ammoniac $NH_3$, de géométrie <strong>pyramidale</strong> ; appliquons maintenant exactement la même démarche à une autre molécule, l\'eau $H_2O$, dont la géométrie s\'avère différente.<br/><br/>La molécule d\'eau $H_2O$ est constituée d\'un atome d\'oxygène ($6$ électrons de valence) et de deux atomes d\'hydrogène.<br/><br/>Combien de doublets liants et de doublets non liants entourent l\'atome d\'oxygène ? En déduire la géométrie de la molécule.',
        steps: [
          'L\'oxygène possède $6$ électrons de valence. Chaque atome d\'hydrogène forme une liaison covalente (un doublet liant) avec l\'oxygène : cela utilise $2$ électrons de l\'oxygène (un par liaison), donc $2$ doublets liants au total.',
          'Il reste $6-2=4$ électrons de valence sur l\'oxygène, soit $2$ doublets non liants (paires libres).',
          'Vérification de l\'octet : autour de l\'oxygène, $2$ doublets liants $+$ $2$ doublets non liants $=4$ doublets $=8$ électrons. L\'octet est bien satisfait ; chaque hydrogène, avec son unique doublet liant, satisfait la règle du duet.',
          'Géométrie : $4$ doublets au total autour de l\'atome central se répartissent selon une géométrie tétraédrique ; comme $2$ de ces doublets sont non liants (invisibles dans le contour de la molécule), $H_2O$ a une géométrie <strong>coudée</strong> (en V).'
        ],
        answer: 'Autour de l\'oxygène : $2$ doublets liants et $2$ doublets non liants (octet satisfait). La molécule $H_2O$ a une géométrie <strong>coudée</strong> : les deux doublets non liants « repoussent » les deux liaisons O–H, qui ne sont donc pas alignées.'
      },
      formulas: [
        'Règle du duet : $H$, $He$ → $2$ électrons (couche K saturée)',
        'Règle de l\'octet : la plupart des autres éléments légers → $8$ électrons sur la couche de valence',
        'Doublets non liants d\'un atome $= \\dfrac{\\text{électrons de valence} - \\text{nombre de liaisons}}{2}$',
        'Géométrie VSEPR (4 doublets) : tétraédrique (0 non liant), pyramidale (1 non liant), coudée (2 non liants)'
      ],
      recap: [
        'Un <strong>doublet liant</strong> (un trait) est partagé entre deux atomes et forme une liaison covalente ; un <strong>doublet non liant</strong> (une paire libre) appartient à un seul atome.',
        'La règle du <strong>duet</strong> concerne $H$ et $He$ ($2$ électrons) ; la règle de l\'<strong>octet</strong> concerne la plupart des autres éléments légers ($8$ électrons).',
        'Le nombre de doublets non liants se calcule par différence entre les électrons de valence et ceux engagés dans les liaisons, divisée par $2$.',
        'La géométrie d\'une molécule dépend du nombre <strong>total</strong> de doublets (liants + non liants) autour de l\'atome central, jamais des seules liaisons visibles.'
      ],
      piege: 'Une erreur fréquente est de ne prendre en compte, pour déterminer la géométrie d\'une molécule, que les doublets liants (les liaisons visibles), en oubliant les doublets non liants. Attention : un doublet non liant occupe lui aussi une direction de l\'espace et repousse les autres doublets, ce qui explique pourquoi $NH_3$ est pyramidale et non plane, contrairement à ce que l\'on pourrait croire en ne comptant que ses $3$ liaisons N–H.'
    },

    quiz: [
      {
        q: 'Un atome d\'hydrogène, engagé dans une seule liaison covalente, est entouré de :',
        options: [
          '2 électrons (règle du duet)',
          '8 électrons (règle de l\'octet)',
          '4 électrons',
          '1 électron seulement'
        ],
        answer: 0,
        correction: 'L\'hydrogène suit la règle du duet : engagé dans une liaison covalente (un doublet liant, soit $2$ électrons partagés), il est entouré de $2$ électrons au total, ce qui sature sa couche K.'
      },
      {
        q: 'Dans la molécule d\'ammoniac $NH_3$, l\'atome d\'azote est entouré de $3$ doublets liants et $1$ doublet non liant. Quelle est la géométrie de cette molécule ?',
        options: [
          'Pyramidale',
          'Plane (trigonale)',
          'Linéaire',
          'Tétraédrique parfaite (comme le méthane)'
        ],
        answer: 0,
        correction: '$4$ doublets au total ($3$ liants $+1$ non liant) se répartissent selon une géométrie tétraédrique, mais seuls les $3$ doublets liants sont « visibles » dans la forme de la molécule : la géométrie observée est donc pyramidale, le doublet non liant occupant la quatrième direction.'
      },
      {
        q: 'Combien de doublets non liants possède un atome de chlore (7 électrons de valence) engagé dans une seule liaison covalente (comme dans $HCl$) ?',
        options: [
          '3 doublets non liants',
          '1 doublet non liant',
          '4 doublets non liants',
          '0 doublet non liant'
        ],
        answer: 0,
        correction: 'Le chlore a $7$ électrons de valence ; $1$ est engagé dans la liaison covalente avec H, il en reste $6$, soit $3$ doublets non liants — ce qui satisfait bien la règle de l\'octet ($1$ doublet liant $+3$ non liants $=4$ doublets $=8$ électrons).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var atomes = [
          { nom: 'carbone (C)', valence: 4, liaisons: 4, exemple: 'le méthane $CH_4$' },
          { nom: 'azote (N)', valence: 5, liaisons: 3, exemple: 'l\'ammoniac $NH_3$' },
          { nom: 'oxygène (O)', valence: 6, liaisons: 2, exemple: 'la molécule d\'eau $H_2O$' },
          { nom: 'fluor (F)', valence: 7, liaisons: 1, exemple: 'le fluorure d\'hydrogène $HF$' },
          { nom: 'chlore (Cl)', valence: 7, liaisons: 1, exemple: 'le chlorure d\'hydrogène $HCl$' },
          { nom: 'soufre (S)', valence: 6, liaisons: 2, exemple: 'le sulfure d\'hydrogène $H_2S$' },
          { nom: 'phosphore (P)', valence: 5, liaisons: 3, exemple: 'la phosphine $PH_3$' }
        ];
        var atome = pick(atomes);
        var restants = atome.valence - atome.liaisons;
        var doublets = restants / 2;

        return {
          statement: 'Dans ' + atome.exemple + ', un atome de ' + atome.nom + ' possède ' + atome.valence + ' électrons de valence et forme ' + atome.liaisons + ' liaison(s) covalente(s) (doublet(s) liant(s)) avec d\'autres atomes.<br/><br/>Calcule le nombre de doublets non liants (paires libres) que porte cet atome, en supposant qu\'il respecte la règle de l\'octet (ou du duet).',
          answer: doublets,
          tolerance: 0.1,
          unit: '',
          hint: 'Calcule d\'abord le nombre d\'électrons de valence qui ne sont pas engagés dans une liaison : $\\text{électrons de valence} - \\text{nombre de liaisons}$ (chaque liaison n\'utilise qu\'1 électron de cet atome), puis divise par 2.',
          solution: [
            'Électrons engagés dans les liaisons : ' + atome.liaisons + ' liaison(s) $\\times$ 1 électron $=$ ' + atome.liaisons + ' électron(s).',
            'Électrons restants (non engagés dans une liaison) : ' + atome.valence + ' $-$ ' + atome.liaisons + ' $=$ ' + restants + ' électron(s).',
            'Nombre de doublets non liants : ' + restants + ' $\\div$ 2 $=$ ' + doublets + '.'
          ]
        };
      }
    },

    probleme: {
      context: 'La molécule de dioxyde de carbone $CO_2$ est linéaire, de formule développée $O=C=O$ : l\'atome de carbone central est relié à chacun des deux atomes d\'oxygène par une <strong>double liaison</strong> (2 doublets liants par liaison). Le carbone possède $4$ électrons de valence, chaque atome d\'oxygène en possède $6$.',
      tasks: [
        'Calculer le nombre d\'électrons de valence que l\'atome de carbone engage dans ses liaisons avec les deux atomes d\'oxygène, et vérifier que la règle de l\'octet est satisfaite pour le carbone.',
        'Pour un atome d\'oxygène, calculer le nombre d\'électrons qu\'il engage dans sa double liaison avec le carbone, puis le nombre de doublets non liants qu\'il porte.',
        'Vérifier que la règle de l\'octet est également satisfaite pour chaque atome d\'oxygène.'
      ],
      solutions: [
        'Chaque double liaison correspond à $2$ doublets partagés, soit $2$ électrons apportés par le carbone par double liaison. Avec $2$ doubles liaisons, le carbone engage $2\\times2=4$ électrons, soit la totalité de ses $4$ électrons de valence. Autour du carbone : $2$ doubles liaisons $=4$ doublets liants $=8$ électrons : l\'octet est satisfait, sans aucun doublet non liant sur le carbone.',
        'Dans sa double liaison avec le carbone, un atome d\'oxygène engage $2$ électrons (comme le carbone, pour former les $2$ doublets partagés). Il lui reste $6-2=4$ électrons de valence, soit $4\\div2=2$ doublets non liants.',
        'Autour de chaque oxygène : $1$ double liaison ($2$ doublets liants) $+$ $2$ doublets non liants $=4$ doublets $=8$ électrons : l\'octet est bien satisfait pour chaque atome d\'oxygène.'
      ],
      finalAnswer: 'Le carbone ne porte aucun doublet non liant (ses $4$ électrons de valence sont tous engagés dans les $2$ doubles liaisons) ; chaque oxygène porte $2$ doublets non liants. L\'octet est satisfait pour les trois atomes de la molécule $CO_2$, dont la géométrie est <strong>linéaire</strong> : seuls $2$ doublets liants entourent le carbone (aucun doublet non liant pour l\'écarter de l\'alignement).'
    },

    evaluation: {
      title: 'Évaluation — Structure des entités chimiques',
      duration: '30 min',
      questions: [
        {
          statement: 'Un atome de soufre (S), $6$ électrons de valence, forme $2$ liaisons covalentes (comme dans $H_2S$). Calculer son nombre de doublets non liants.',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$6-2=4$ électrons restants, soit $4\\div2=2$ doublets non liants.'
        },
        {
          statement: 'La règle de l\'octet s\'applique à un atome qui tend à s\'entourer de :',
          type: 'multiple-choice',
          options: [
            '8 électrons sur sa couche de valence',
            '2 électrons uniquement',
            '6 électrons',
            'Un nombre d\'électrons égal à son numéro atomique'
          ],
          answer: 0,
          points: 2,
          correction: 'La règle de l\'octet correspond à une couche de valence saturée à $8$ électrons, caractéristique de la structure électronique des gaz nobles voisins (néon, argon).'
        },
        {
          statement: 'Un atome central est entouré de $4$ doublets, dont $2$ doublets liants et $2$ doublets non liants. Quelle est la géométrie de la molécule ?',
          type: 'multiple-choice',
          options: [
            'Coudée (en V)',
            'Tétraédrique',
            'Linéaire',
            'Pyramidale'
          ],
          answer: 0,
          points: 2,
          correction: '$2$ doublets liants $+2$ non liants (comme dans $H_2O$) donnent une géométrie coudée : la répartition tétraédrique concerne la disposition spatiale des $4$ doublets, mais la géométrie « visible » de la molécule (définie par les seules liaisons) est coudée.'
        },
        {
          statement: 'Un atome de fluor (F), $7$ électrons de valence, forme $1$ liaison covalente (comme dans $HF$). Calculer son nombre de doublets non liants.',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$7-1=6$ électrons restants, soit $6\\div2=3$ doublets non liants.'
        },
        {
          statement: 'Pourquoi la molécule $NH_3$ (azote entouré de $3$ doublets liants et $1$ doublet non liant) est-elle pyramidale plutôt que plane ?',
          type: 'multiple-choice',
          options: [
            'Parce que le doublet non liant occupe une direction de l\'espace et repousse les 3 liaisons N–H',
            'Parce que l\'azote est plus lourd que l\'hydrogène',
            'Parce que les liaisons N–H sont des doubles liaisons',
            'La molécule NH3 est en réalité plane, contrairement à ce qu\'indique le modèle VSEPR'
          ],
          answer: 0,
          points: 2,
          correction: 'Le doublet non liant, bien qu\'invisible dans le contour de la molécule, occupe une direction de l\'espace et repousse les $3$ liaisons N–H, ce qui incurve la molécule en pyramide plutôt qu\'un plan.'
        }
      ]
    }
  });
