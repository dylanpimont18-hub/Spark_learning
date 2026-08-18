/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-gravitation.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-gravitation',
    level: 1, subject: 'physique',
    icon: '🪐',
    title: 'La gravitation universelle',
    subtitle: 'Force gravitationnelle, loi de Newton, distinction masse/poids',
    keywords: ['Gravitation', 'Newton', 'Masse', 'Poids', 'Force gravitationnelle'],
    physics: 'La gravitation universelle explique pourquoi les objets tombent, pourquoi les satellites restent en orbite autour de la Terre, pourquoi la Lune provoque les marées océaniques, et pourquoi un astronaute pèse moins lourd sur la Lune que sur Terre tout en gardant la même masse.',

    cours: {
      intro: 'Pourquoi une pomme tombe-t-elle d\'un arbre ? Pourquoi la Lune reste-t-elle en orbite autour de la Terre plutôt que de s\'échapper dans l\'espace ? Isaac Newton a compris que ces deux phénomènes, en apparence très différents, obéissent en réalité à la <strong>même loi</strong> : tous les objets ayant une masse s\'<strong>attirent mutuellement</strong>.<br/><br/>Cette <strong>interaction gravitationnelle</strong> existe entre deux objets quelconques — deux billes, la Terre et la Lune, le Soleil et une planète — mais elle n\'est perceptible que lorsque l\'une des masses (ou les deux) est <strong>très grande</strong>, comme celle d\'une planète.<br/><br/>La <strong>loi de la gravitation universelle</strong> de Newton donne l\'intensité de cette force en fonction des deux masses en présence et de la distance qui les sépare.<br/><br/>Il ne faut pas confondre la <strong>masse</strong> d\'un objet, qui ne change jamais, et son <strong>poids</strong>, qui résulte de l\'attraction gravitationnelle et qui varie selon l\'astre sur lequel on se trouve.',
      definitions: [
        { term: 'Force gravitationnelle', def: 'Force d\'attraction qui s\'exerce entre deux objets ayant une masse, quelle que soit leur taille. Elle est toujours <strong>attractive</strong> (jamais répulsive) et dirigée de chaque objet vers l\'autre.' },
        { term: 'Loi de la gravitation universelle', def: 'Établie par Isaac Newton : deux objets de masses $m_1$ et $m_2$ (en kg), séparés par une distance $d$ (en m), s\'attirent avec une force d\'intensité $F = G \\times \\dfrac{m_1 \\times m_2}{d^2}$, en newtons (N), où $G \\approx 6{,}67 \\times 10^{-11}$ N·m²/kg² est la constante de gravitation universelle.' },
        { term: 'Masse', def: 'Quantité de matière que contient un objet, exprimée en kilogrammes (kg). La masse d\'un objet est <strong>la même partout</strong> dans l\'Univers : sur Terre, sur la Lune, ou dans l\'espace.' },
        { term: 'Poids', def: 'Force exercée par l\'attraction gravitationnelle d\'un astre (souvent la Terre) sur un objet : $P = m \\times g$, en newtons (N). Contrairement à la masse, le poids <strong>varie</strong> selon l\'astre, car la valeur de $g$ change.' }
      ],
      method: {
        title: 'Calculer une force gravitationnelle en 3 étapes',
        steps: [
          '<strong>Convertir toutes les grandeurs</strong> dans les unités du système international : masses en kg, distance en m.',
          '<strong>Appliquer la loi de Newton</strong> : $F = G \\times \\dfrac{m_1 \\times m_2}{d^2}$, avec $G \\approx 6{,}67 \\times 10^{-11}$ N·m²/kg².',
          '<strong>Vérifier l\'ordre de grandeur</strong> du résultat : la force gravitationnelle entre deux objets du quotidien est extrêmement faible (imperceptible), elle ne devient significative qu\'entre des masses astronomiques (planètes, étoiles).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Interaction gravitationnelle',
        title: 'Deux masses s\'attirent mutuellement avec la même intensité',
        description: 'Deux objets de masses $m_1$ et $m_2$, séparés par une distance $d$, exercent l\'un sur l\'autre une force gravitationnelle attractive $F$, dirigée vers l\'autre objet.',
        svg: `
          <svg viewBox="0 0 480 230" role="img" aria-labelledby="gravit-title gravit-desc">
            <title id="gravit-title">Attraction gravitationnelle entre deux masses</title>
            <desc id="gravit-desc">Deux cercles representent deux masses m1 (grande) et m2 (petite), separees par une distance d indiquee par une cotation horizontale en dessous. Une fleche partant de la masse m1 pointe vers la droite en direction de m2, et une fleche partant de la masse m2 pointe vers la gauche en direction de m1, toutes deux etiquetees F : les deux masses s'attirent mutuellement avec des forces de meme intensite, dirigees l'une vers l'autre.</desc>

            <defs>
              <marker id="arrow-3e-gravit" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- masses -->
            <circle cx="100" cy="130" r="45" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="2"></circle>
            <circle cx="380" cy="130" r="22" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="var(--diagram-accent)" stroke-width="2"></circle>
            <text class="annotation-label" x="100" y="135" text-anchor="middle">m₁</text>
            <text class="annotation-label" x="380" y="135" text-anchor="middle">m₂</text>

            <!-- forces d'attraction mutuelle -->
            <line class="curve-main" x1="150" y1="100" x2="195" y2="100" marker-end="url(#arrow-3e-gravit)"></line>
            <text class="annotation-label" x="172" y="88" text-anchor="middle">F</text>
            <line class="curve-main" x1="350" y1="100" x2="305" y2="100" marker-end="url(#arrow-3e-gravit)"></line>
            <text class="annotation-label" x="327" y="88" text-anchor="middle">F</text>

            <!-- cotation distance d -->
            <line class="frame-line" x1="100" y1="183" x2="100" y2="197"></line>
            <line class="frame-line" x1="380" y1="183" x2="380" y2="197"></line>
            <line class="guide-line" x1="100" y1="190" x2="380" y2="190"></line>
            <text class="tick-label" x="240" y="212" text-anchor="middle">d</text>
          </svg>
        `,
        notes: [
          'Les deux masses $m_1$ et $m_2$ s\'attirent mutuellement : chaque force est dirigée <strong>vers l\'autre objet</strong>, jamais dans le sens opposé.',
          'D\'après la loi de Newton, les deux forces ont exactement la <strong>même intensité</strong> $F = G\\dfrac{m_1 m_2}{d^2}$, même si les masses $m_1$ et $m_2$ sont très différentes.',
          'Si la distance $d$ double, la force $F$ est divisée par $2^2 = 4$ : la force gravitationnelle diminue très rapidement avec la distance.'
        ],
        reading: 'Repère les deux masses de tailles différentes, la distance $d$ qui les sépare en dessous, puis les deux flèches $F$ qui pointent chacune vers l\'autre masse.',
        caption: 'Deux masses $m_1$ et $m_2$ séparées d\'une distance $d$ s\'attirent avec des forces gravitationnelles de même intensité $F$, dirigées l\'une vers l\'autre.'
      },
      example: {
        statement: 'Deux boules de pétanque, assimilées à des masses ponctuelles $m_1 = 1$ kg et $m_2 = 1$ kg, sont séparées d\'une distance $d = 0{,}5$ m. On donne $G \\approx 6{,}67 \\times 10^{-11}$ N·m²/kg².<br/><br/>Calcule l\'intensité de la force gravitationnelle qui les attire l\'une vers l\'autre.',
        steps: [
          'On applique la loi de la gravitation universelle : $F = G \\times \\dfrac{m_1 \\times m_2}{d^2}$.',
          'Calcul du dénominateur : $d^2 = 0{,}5^2 = 0{,}25$ m².',
          'Application numérique : $F = 6{,}67\\times10^{-11} \\times \\dfrac{1 \\times 1}{0{,}25}$.',
          'Résultat : $F = 6{,}67\\times10^{-11} \\times 4 = 2{,}668\\times10^{-10}$ N.'
        ],
        answer: '$F \\approx 2{,}67\\times10^{-10}$ N — une force totalement imperceptible : l\'attraction gravitationnelle entre deux objets du quotidien est négligeable, contrairement à celle exercée par une planète entière.'
      },
      formulas: [
        'Loi de la gravitation universelle : $F = G \\times \\dfrac{m_1 \\times m_2}{d^2}$',
        'Constante de gravitation universelle : $G \\approx 6{,}67 \\times 10^{-11}$ N·m²/kg²',
        'Poids : $P = m \\times g$ (à ne pas confondre avec la masse $m$, invariante)'
      ],
      recap: [
        'Tous les objets massifs s\'attirent mutuellement : c\'est la <strong>gravitation universelle</strong>, une force toujours attractive.',
        'La force gravitationnelle $F = G\\frac{m_1 m_2}{d^2}$ augmente avec les masses, et diminue très rapidement quand la distance augmente (elle est divisée par $4$ si la distance double).',
        'La <strong>masse</strong> (en kg) ne change jamais ; le <strong>poids</strong> (en N), lui, dépend du lieu (Terre, Lune…) car $g$ varie.',
        'La force gravitationnelle entre deux objets du quotidien est négligeable ; elle ne devient importante qu\'à l\'échelle des astres (planètes, étoiles).'
      ],
      piege: 'Une confusion très fréquente est d\'utiliser le mot « poids » pour désigner la masse d\'un objet, ou de croire qu\'un objet a le même poids partout dans l\'Univers. Attention : la masse (en kg) est invariable, mais le poids $P = mg$ (en N) change selon l\'astre, car la valeur de $g$ n\'est pas la même sur la Lune que sur la Terre.'
    },

    quiz: [
      {
        q: 'D\'après la loi de la gravitation universelle, que se passe-t-il si on double la distance entre deux masses (masses inchangées) ?',
        options: [
          'La force est divisée par $2$',
          'La force est divisée par $4$',
          'La force est multipliée par $2$',
          'La force ne change pas'
        ],
        answer: 1,
        correction: 'La force est proportionnelle à $\\dfrac{1}{d^2}$ : si $d$ est doublée, $F$ est divisée par $2^2 = 4$.'
      },
      {
        q: 'Un astronaute de masse $m = 80$ kg voyage de la Terre à la Lune. Que peut-on dire de sa masse et de son poids ?',
        options: [
          'Sa masse et son poids restent les mêmes',
          'Sa masse ne change pas, mais son poids change car $g$ est différent sur la Lune',
          'Sa masse change, mais son poids reste le même',
          'Sa masse et son poids changent tous les deux de la même façon'
        ],
        answer: 1,
        correction: 'La masse (quantité de matière) ne change jamais. Le poids $P = mg$ change car la valeur de $g$ est différente sur la Lune (environ $6$ fois plus faible que sur Terre).'
      },
      {
        q: 'La force gravitationnelle entre deux objets dépend de :',
        options: [
          'Uniquement de leurs masses',
          'Uniquement de la distance qui les sépare',
          'De leurs masses ET de la distance qui les sépare',
          'De leur couleur et de leur forme'
        ],
        answer: 2,
        correction: 'D\'après $F = G\\dfrac{m_1 m_2}{d^2}$, la force dépend à la fois des deux masses $m_1$, $m_2$ et de la distance $d$ qui les sépare.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['poids', 'ratio']);

        if (typeExo === 'poids') {
          var m = rand(40, 120);
          var lieu = pick([
            { nom: 'la Terre', g: 9.8 },
            { nom: 'la Lune', g: 1.6 },
            { nom: 'Mars', g: 3.7 }
          ]);
          var P = parseFloat((m * lieu.g).toFixed(1));
          var objet = pick(['un astronaute', 'un sac d\'équipement scientifique', 'une caisse de matériel', 'un robot d\'exploration']);
          return {
            statement: 'Sur ' + lieu.nom + ' (où $g \\approx ' + fr(lieu.g, 1) + '$ N/kg), ' + objet + ' a une masse $m = ' + m + '$ kg.<br/><br/>Calcule son poids $P$ (en N, arrondi au dixième).',
            answer: P,
            tolerance: Math.max(0.5, parseFloat((P * 0.02).toFixed(1))),
            unit: 'N',
            hint: 'Utilise $P = m \\times g$.',
            solution: [
              'Formule du poids : $P = m \\times g$.',
              'Application numérique : $P = ' + m + ' \\times ' + fr(lieu.g, 1) + '$.',
              'Résultat : $P \\approx ' + fr(P, 1) + '$ N.'
            ]
          };
        } else {
          var F0 = pick([10, 20, 50, 100, 200]);
          var d0 = pick([1, 2, 3, 4, 5]);
          var k = pick([2, 3, 0.5, 4]);
          var d1 = parseFloat((d0 * k).toFixed(2));
          var F1 = parseFloat((F0 / (k * k)).toFixed(3));
          return {
            statement: 'Deux objets massifs exercent l\'un sur l\'autre une force gravitationnelle $F_0 = ' + F0 + '$ N lorsqu\'ils sont séparés d\'une distance $d_0 = ' + d0 + '$ m (valeurs fictives pour l\'exercice, choisies pour faciliter le calcul).<br/><br/>Si la distance entre eux devient $d_1 = ' + fr(d1, 2) + '$ m, quelle est la nouvelle force gravitationnelle $F_1$ (en N, arrondie au millième) ?',
            answer: F1,
            tolerance: Math.max(0.01, parseFloat((F1 * 0.03).toFixed(3))),
            unit: 'N',
            hint: 'La force gravitationnelle est proportionnelle à $\\dfrac{1}{d^2}$ : calcule le rapport $\\dfrac{d_1}{d_0}$, puis divise $F_0$ par ce rapport élevé au carré.',
            solution: [
              'La force est proportionnelle à $\\dfrac{1}{d^2}$, donc $F_1 = F_0 \\times \\left(\\dfrac{d_0}{d_1}\\right)^2$.',
              'Rapport des distances : $\\dfrac{d_0}{d_1} = \\dfrac{' + d0 + '}{' + fr(d1, 2) + '}$.',
              'Résultat : $F_1 \\approx ' + fr(F1, 3) + '$ N.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'La Terre a une masse $M_T \\approx 6{,}0 \\times 10^{24}$ kg et un rayon $R_T \\approx 6{,}4 \\times 10^6$ m. On donne $G \\approx 6{,}67 \\times 10^{-11}$ N·m²/kg². Un satellite de masse $m = 500$ kg se trouve à la surface de la Terre, à une distance du centre de la Terre égale à $R_T$.',
      tasks: [
        'Calcule l\'intensité de la force gravitationnelle $F$ exercée par la Terre sur le satellite.',
        'En identifiant cette force au poids du satellite ($F = P = mg$), déduis-en la valeur du champ de pesanteur $g$ à la surface de la Terre.',
        'Compare cette valeur à celle habituellement utilisée en physique-chimie ($g \\approx 9{,}8$ N/kg) et commente.'
      ],
      solutions: [
        'Loi de la gravitation universelle : $F = G \\times \\dfrac{M_T \\times m}{R_T^2} = 6{,}67\\times10^{-11} \\times \\dfrac{6{,}0\\times10^{24} \\times 500}{(6{,}4\\times10^6)^2} \\approx 4\\,885$ N.',
        'Le poids du satellite s\'écrit aussi $P = m \\times g$. En identifiant $F = P$ : $g = \\dfrac{F}{m} = \\dfrac{4\\,885}{500} \\approx 9{,}77$ N/kg.',
        'On retrouve bien une valeur très proche de $g \\approx 9{,}8$ N/kg (l\'écart vient des arrondis sur $M_T$ et $R_T$) : le champ de pesanteur $g$ n\'est donc rien d\'autre que la manifestation, à la surface de la Terre, de la force de gravitation universelle exercée par la planète entière.'
      ],
      finalAnswer: '$F \\approx 4\\,885$ N et $g \\approx 9{,}77$ N/kg, très proche de la valeur habituelle $9{,}8$ N/kg. Ce calcul montre que le poids $P=mg$, utilisé depuis le début du collège, est en réalité un <strong>cas particulier</strong> de la loi de la gravitation universelle, appliquée à un objet à la surface de la Terre.'
    },

    evaluation: {
      title: 'Évaluation — La gravitation universelle',
      duration: '25 min',
      questions: [
        {
          statement: 'Sur Terre ($g \\approx 9{,}8$ N/kg), un objet de masse $m = 15$ kg. Calculer son poids $P$ (en N).',
          type: 'numeric',
          answer: 147,
          tolerance: 2,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 15 \\times 9{,}8 = 147$ N.'
        },
        {
          statement: 'La force gravitationnelle entre deux objets est toujours :',
          type: 'multiple-choice',
          options: ['Attractive', 'Répulsive', 'Nulle', 'Attractive ou répulsive selon les masses'],
          answer: 0,
          points: 1,
          correction: 'La gravitation universelle est toujours une force d\'<strong>attraction</strong> entre deux masses, jamais de répulsion.'
        },
        {
          statement: 'Si la distance entre deux masses est multipliée par $3$ (masses inchangées), par quel nombre la force gravitationnelle est-elle multipliée ?',
          type: 'numeric',
          answer: 0.111,
          tolerance: 0.01,
          unit: '',
          points: 3,
          correction: 'La force est proportionnelle à $\\dfrac{1}{d^2}$ : elle est donc multipliée par $\\dfrac{1}{3^2} = \\dfrac{1}{9} \\approx 0{,}111$.'
        },
        {
          statement: 'Un objet de masse $m = 20$ kg est transporté sur la Lune, où $g \\approx 1{,}6$ N/kg. Calculer son poids sur la Lune (en N).',
          type: 'numeric',
          answer: 32,
          tolerance: 1,
          unit: 'N',
          points: 2,
          correction: '$P = m \\times g = 20 \\times 1{,}6 = 32$ N.'
        },
        {
          statement: 'Que peut-on dire de la masse d\'un objet transporté de la Terre à la Lune ?',
          type: 'multiple-choice',
          options: [
            'Elle diminue, comme le poids',
            'Elle augmente',
            'Elle reste la même, contrairement au poids',
            'Elle devient nulle en apesanteur'
          ],
          answer: 2,
          points: 2,
          correction: 'La masse (quantité de matière) est une propriété intrinsèque de l\'objet : elle ne change pas selon le lieu, contrairement au poids qui dépend de $g$.'
        }
      ]
    }
  });
