/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-gravitation.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-gravitation',
    level: 1, subject: 'physique',
    icon: '🌍',
    title: 'La gravitation universelle',
    subtitle: 'Interaction gravitationnelle, loi de Newton $F=G\\dfrac{m_1m_2}{d^2}$, poids et masse',
    keywords: ['Gravitation', 'Newton', 'Poids', 'Masse', 'Interaction gravitationnelle'],
    physics: 'La gravitation universelle explique pourquoi les objets tombent, pourquoi la Lune reste en orbite autour de la Terre, pourquoi les satellites artificiels ne s\'échappent pas dans l\'espace, et pourquoi un astronaute pèse moins sur la Lune que sur Terre tout en gardant exactement la même masse.',

    cours: {
      intro: 'Isaac Newton a énoncé au XVIIe siècle la loi de <strong>gravitation universelle</strong> : deux corps quelconques, dotés d\'une masse, s\'attirent mutuellement. Cette force d\'attraction agit à distance, sans contact, et concerne aussi bien une pomme qui tombe qu\'une planète en orbite.<br/><br/>L\'intensité de cette <strong>force gravitationnelle</strong> $F$ dépend de deux facteurs : elle est d\'autant plus grande que les masses $m_1$ et $m_2$ des deux corps sont importantes, et d\'autant plus <strong>faible</strong> que la distance $d$ qui les sépare est grande — et ce, très rapidement, puisque $F$ diminue avec le <strong>carré</strong> de la distance.<br/><br/>D\'après le principe des actions réciproques, si un corps 1 attire un corps 2 avec une force $\\vec{F}_{1\\to2}$, alors le corps 2 attire le corps 1 avec une force $\\vec{F}_{2\\to1}$ de même intensité, mais de direction opposée.',
      definitions: [
        { term: 'Force gravitationnelle', def: 'Force d\'attraction mutuelle qui s\'exerce entre deux corps ayant une masse, dirigée le long de la droite qui joint leurs centres. Elle existe entre tous les corps, mais n\'est perceptible qu\'avec des masses importantes (planètes, étoiles).' },
        { term: 'Loi de gravitation universelle', def: 'La norme de la force gravitationnelle entre deux corps de masses $m_1$ et $m_2$, séparés d\'une distance $d$ (entre leurs centres), est $F = G\\dfrac{m_1 \\times m_2}{d^2}$, avec $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg² (constante de gravitation universelle).' },
        { term: 'Principe des actions réciproques', def: 'La force exercée par un corps 1 sur un corps 2 est toujours égale en intensité, et opposée en direction, à la force exercée par le corps 2 sur le corps 1 : $\\vec{F}_{1\\to2} = -\\vec{F}_{2\\to1}$.' },
        { term: 'Poids et masse', def: 'La <strong>masse</strong> $m$ (en kg) mesure la quantité de matière d\'un objet : elle est invariable, où que soit l\'objet dans l\'Univers. Le <strong>poids</strong> $P$ (en N) est la force gravitationnelle exercée par un astre sur cet objet : $P = m \\times g$, il varie selon le lieu.' }
      ],
      method: {
        title: 'Calculer une force gravitationnelle en 3 étapes',
        steps: [
          '<strong>Identifier les deux masses</strong> $m_1$ et $m_2$ en jeu (en kg) et la distance $d$ qui sépare leurs centres (en m), en convertissant si nécessaire dans les unités du système international.<br/>Exemple : la Terre ($m_1\\approx6\\times10^{24}$ kg) et un satellite ($m_2=1000$ kg) séparés de $d=7\\times10^6$ m.',
          '<strong>Appliquer la loi de gravitation universelle</strong> $F=G\\dfrac{m_1m_2}{d^2}$, en utilisant $G\\approx6{,}67\\times10^{-11}$ N·m²/kg², et en calculant $d^2$ avant de diviser.<br/>Exemple (suite) : $F=6{,}67\\times10^{-11}\\times\\dfrac{6\\times10^{24}\\times1000}{(7\\times10^6)^2}$.',
          '<strong>Vérifier le sens physique</strong> du résultat : la force doit être attirante, dirigée vers l\'autre corps, et diminuer si l\'on augmente la distance $d$ dans le calcul.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Interaction gravitationnelle (principe des actions réciproques)',
        title: 'Attraction gravitationnelle mutuelle entre la Terre et la Lune',
        description: 'La Terre et la Lune s\'attirent avec des forces $\\vec{F}_{L\\to T}$ et $\\vec{F}_{T\\to L}$ de même intensité, dirigées en sens opposés le long de la droite qui joint leurs centres, séparés d\'une distance $d$.',
        svg: `
          <svg viewBox="0 0 580 270" role="img" aria-labelledby="gravitation-title gravitation-desc">
            <title id="gravitation-title">Interaction gravitationnelle entre la Terre et la Lune</title>
            <desc id="gravitation-desc">Un grand disque represente la Terre a gauche et un petit disque represente la Lune a droite, separes par une distance d. Deux fleches de meme longueur partent chacune du bord d'un astre et pointent l'une vers l'autre le long d'une ligne pointillee commune : celle partant de la Terre est dirigee vers la Lune, celle partant de la Lune est dirigee vers la Terre, illustrant deux forces d'attraction egales en intensite et opposees en direction.</desc>

            <defs>
              <marker id="arrow-phys3e-gravitation" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- Terre et Lune -->
            <circle cx="140" cy="140" r="55" fill="var(--diagram-accent)"></circle>
            <text class="label-soft" x="140" y="72" text-anchor="middle">Terre (m₁)</text>
            <circle cx="440" cy="140" r="22" fill="var(--text-muted)"></circle>
            <text class="label-soft" x="440" y="100" text-anchor="middle">Lune (m₂)</text>

            <!-- ligne d'action commune -->
            <line class="guide-line" x1="245" y1="140" x2="368" y2="140"></line>

            <!-- forces (memes longueurs, sens opposes) -->
            <line class="curve-main" x1="195" y1="140" x2="245" y2="140" marker-end="url(#arrow-phys3e-gravitation)"></line>
            <text class="annotation-label" x="220" y="128" text-anchor="middle">F(L→T)</text>
            <line class="curve-main" x1="418" y1="140" x2="368" y2="140" marker-end="url(#arrow-phys3e-gravitation)"></line>
            <text class="annotation-label" x="393" y="128" text-anchor="middle">F(T→L)</text>

            <!-- cotation distance d -->
            <line class="guide-line" x1="140" y1="140" x2="140" y2="230"></line>
            <line class="guide-line" x1="440" y1="140" x2="440" y2="230"></line>
            <line class="frame-line" x1="140" y1="225" x2="140" y2="235"></line>
            <line class="frame-line" x1="440" y1="225" x2="440" y2="235"></line>
            <line class="guide-line" x1="140" y1="230" x2="440" y2="230"></line>
            <text class="tick-label" x="290" y="250" text-anchor="middle">d</text>
          </svg>
        `,
        notes: [
          'Les deux forces $\\vec{F}_{L\\to T}$ (exercée par la Lune sur la Terre) et $\\vec{F}_{T\\to L}$ (exercée par la Terre sur la Lune) ont la <strong>même longueur</strong> sur le schéma : elles ont la même intensité, conformément au principe des actions réciproques.',
          'Ces deux forces sont dirigées en sens opposés, mais le long de la <strong>même droite</strong>, celle qui relie les centres des deux astres.',
          'Bien que la Terre soit environ 81 fois plus massive que la Lune, elle n\'exerce pas une force plus grande que celle que la Lune exerce sur elle : seule la <strong>conséquence</strong> de cette force diffère (la Lune est bien plus accélérée que la Terre, car elle est bien moins massive).'
        ],
        reading: 'Repère les deux astres, puis les deux flèches de même longueur pointant l\'une vers l\'autre le long de la ligne pointillée : elles représentent des forces d\'intensité égale, mais de sens opposés.',
        caption: 'Interaction gravitationnelle entre la Terre et la Lune : les forces $\\vec{F}_{L\\to T}$ et $\\vec{F}_{T\\to L}$ ont la même intensité (principe des actions réciproques), dirigées en sens opposés le long de la distance $d$ qui sépare leurs centres.'
      },
      diagrams: [{
        theme: 'physique',
        kicker: 'Loi en 1/d² — effet de la distance sur la force',
        title: 'Effet de la distance sur l\'intensité de la force gravitationnelle',
        description: 'Deux mêmes masses $m_1$ et $m_2$, comparées à deux distances différentes : lorsque la distance $d$ qui les sépare est <strong>doublée</strong>, la force gravitationnelle $F$ n\'est pas divisée par 2, mais par <strong>4</strong> — conséquence directe du carré au dénominateur de $F=G\\dfrac{m_1m_2}{d^2}$.',
        svg: `
          <svg viewBox="0 0 520 260" role="img" aria-labelledby="gravitation-loi-title gravitation-loi-desc">
            <title id="gravitation-loi-title">Effet de la distance sur la force gravitationnelle : comparaison a distance d et 2d</title>
            <desc id="gravitation-loi-desc">Deux schemas identiques juxtaposes, chacun avec une grande masse m1 a gauche et une petite masse m2 a droite, reliees par une fleche horizontale au-dessus symbolisant l'intensite de la force gravitationnelle. Dans le schema de gauche, les deux masses sont separees d'une distance d, et la fleche de force F a une certaine longueur. Dans le schema de droite, les deux memes masses sont separees d'une distance deux fois plus grande, notee 2d, et la fleche de force, notee F/4, est quatre fois plus courte que celle de gauche : doubler la distance divise la force par quatre, pas par deux.</desc>

            <defs>
              <marker id="arrow-phys3e-gravitation-loi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- separateur entre les deux configurations -->
            <line class="guide-line" x1="225" y1="45" x2="225" y2="235"></line>

            <!-- ===== Configuration A : distance d ===== -->
            <text class="label-soft" x="120" y="28" text-anchor="middle">Distance d</text>

            <line class="curve-main" x1="80" y1="100" x2="160" y2="100" marker-end="url(#arrow-phys3e-gravitation-loi)"></line>
            <text class="annotation-label" x="120" y="88" text-anchor="middle">F</text>

            <circle cx="70" cy="160" r="16" fill="var(--diagram-accent)"></circle>
            <text class="label-soft" x="70" y="136" text-anchor="middle">m₁</text>
            <circle cx="170" cy="160" r="10" fill="var(--text-muted)"></circle>
            <text class="label-soft" x="170" y="142" text-anchor="middle">m₂</text>

            <line class="guide-line" x1="70" y1="160" x2="70" y2="205"></line>
            <line class="guide-line" x1="170" y1="160" x2="170" y2="205"></line>
            <line class="frame-line" x1="70" y1="200" x2="70" y2="210"></line>
            <line class="frame-line" x1="170" y1="200" x2="170" y2="210"></line>
            <line class="guide-line" x1="70" y1="205" x2="170" y2="205"></line>
            <text class="tick-label" x="120" y="225" text-anchor="middle">d</text>

            <!-- ===== Configuration B : distance 2d ===== -->
            <text class="label-soft" x="370" y="28" text-anchor="middle">Distance 2d</text>

            <line class="curve-main" x1="360" y1="100" x2="380" y2="100" marker-end="url(#arrow-phys3e-gravitation-loi)"></line>
            <text class="annotation-label" x="370" y="88" text-anchor="middle">F/4</text>

            <circle cx="270" cy="160" r="16" fill="var(--diagram-accent)"></circle>
            <text class="label-soft" x="270" y="136" text-anchor="middle">m₁</text>
            <circle cx="470" cy="160" r="10" fill="var(--text-muted)"></circle>
            <text class="label-soft" x="470" y="142" text-anchor="middle">m₂</text>

            <line class="guide-line" x1="270" y1="160" x2="270" y2="205"></line>
            <line class="guide-line" x1="470" y1="160" x2="470" y2="205"></line>
            <line class="frame-line" x1="270" y1="200" x2="270" y2="210"></line>
            <line class="frame-line" x1="470" y1="200" x2="470" y2="210"></line>
            <line class="guide-line" x1="270" y1="205" x2="470" y2="205"></line>
            <text class="tick-label" x="370" y="225" text-anchor="middle">2d</text>
          </svg>
        `,
        notes: [
          'À distance $d$, la force gravitationnelle vaut $F=G\\dfrac{m_1m_2}{d^2}$ : c\'est la longueur de référence de la flèche du schéma de gauche.',
          'À distance $2d$ (mêmes masses $m_1$ et $m_2$), la force devient $F\'=G\\dfrac{m_1m_2}{(2d)^2}=G\\dfrac{m_1m_2}{4d^2}=\\dfrac{F}{4}$ : la flèche du schéma de droite est donc <strong>quatre fois plus courte</strong>, pas deux fois.',
          'Cette sensibilité à la distance est plus forte qu\'une simple proportionnalité : doubler $d$ divise $F$ par 4, le tripler la diviserait par 9 ($3^2$).'
        ],
        reading: 'Compare la longueur des deux flèches $F$ et $F/4$ : à masses égales, doubler la distance ne divise pas la force par 2, mais par 4, à cause du carré au dénominateur.',
        caption: 'La force gravitationnelle décroît avec le <strong>carré</strong> de la distance : à distance $2d$, la force n\'est plus que $F/4$, pour les mêmes masses $m_1$ et $m_2$.'
      }],
      example: {
        statement: 'Calcule l\'intensité de la force gravitationnelle exercée par la Terre ($m_1 = 5{,}97\\times10^{24}$ kg) sur la Lune ($m_2 = 7{,}35\\times10^{22}$ kg), sachant que la distance moyenne Terre-Lune est $d = 3{,}84\\times10^{8}$ m. On donne $G \\approx 6{,}67\\times10^{-11}$ N·m²/kg².',
        steps: [
          'On applique la loi de gravitation universelle : $F = G\\dfrac{m_1 \\times m_2}{d^2}$.',
          'Calcul du numérateur : $m_1\\times m_2 = 5{,}97\\times10^{24}\\times7{,}35\\times10^{22} \\approx 4{,}39\\times10^{47}$ kg².',
          'Calcul du dénominateur : $d^2 = (3{,}84\\times10^{8})^2 \\approx 1{,}47\\times10^{17}$ m².',
          'On assemble : $F \\approx 6{,}67\\times10^{-11}\\times\\dfrac{4{,}39\\times10^{47}}{1{,}47\\times10^{17}} \\approx 1{,}98\\times10^{20}$ N.'
        ],
        answer: 'La Terre attire la Lune (et réciproquement, d\'après le principe des actions réciproques) avec une force $F\\approx1{,}98\\times10^{20}$ N — une valeur immense, mais qui serait multipliée par 4 si la distance Terre-Lune était deux fois plus petite, tant la force gravitationnelle est sensible à la distance.'
      },
      formulas: [
        '$F = G\\dfrac{m_1 \\times m_2}{d^2}$ (loi de gravitation universelle)',
        '$G \\approx 6{,}67\\times10^{-11}$ N·m²/kg² (constante de gravitation universelle)',
        'Principe des actions réciproques : $\\vec{F}_{1\\to2} = -\\vec{F}_{2\\to1}$',
        '$P = m \\times g$ (poids, à partir de la masse et de l\'intensité de pesanteur locale)',
        'Si $d$ est multipliée par $k$, alors $F$ est divisée par $k^2$'
      ],
      recap: [
        'La force gravitationnelle entre deux corps est <strong>proportionnelle</strong> au produit de leurs masses, et <strong>inversement proportionnelle au carré</strong> de la distance qui les sépare.',
        'D\'après le principe des actions réciproques, deux corps s\'attirent toujours avec des forces de <strong>même intensité</strong>, quelle que soit la différence entre leurs masses.',
        'La masse d\'un objet (en kg) ne change jamais ; son poids (en N), lié à l\'attraction gravitationnelle de l\'astre sur lequel il se trouve, varie selon le lieu.',
        'Doubler la distance entre deux corps divise la force gravitationnelle par 4 ($2^2$), pas seulement par 2 : c\'est l\'effet du carré au dénominateur.'
      ],
      piege: 'Une confusion très fréquente est de croire qu\'un corps plus massif (la Terre) exerce une force plus grande que celle exercée par un corps moins massif (la Lune) sur lui. Attention : d\'après le principe des actions réciproques, les deux forces ont exactement la <strong>même intensité</strong> — seule leur conséquence diffère, car l\'accélération produite dépend, elle, de la masse de chaque corps.'
    },

    quiz: [
      {
        q: 'D\'après la loi de gravitation universelle, si on double la masse d\'un des deux corps (l\'autre masse et la distance restant fixes), la force gravitationnelle entre eux est :',
        options: ['Multipliée par 2', 'Multipliée par 4', 'Divisée par 2', 'Inchangée'],
        answer: 0,
        correction: 'La force est <strong>proportionnelle</strong> à chacune des deux masses ($F=G\\frac{m_1m_2}{d^2}$) : doubler une seule masse double directement la force. Seule la distance intervient au carré.'
      },
      {
        q: 'Que dit le principe des actions réciproques appliqué à l\'interaction gravitationnelle Terre-Lune ?',
        options: [
          'La Terre attire la Lune, mais la Lune n\'attire pas la Terre',
          'La force exercée par la Terre sur la Lune est égale en intensité et opposée en direction à celle exercée par la Lune sur la Terre',
          'La force exercée par la Terre sur la Lune est plus grande, car la Terre est plus massive',
          'Les deux corps s\'attirent avec des forces différentes, proportionnelles à leur taille respective'
        ],
        answer: 1,
        correction: 'Quelle que soit la différence de masse entre les deux corps, les forces qu\'ils exercent l\'un sur l\'autre ont toujours la <strong>même intensité</strong> : $\\vec{F}_{Terre\\to Lune} = -\\vec{F}_{Lune\\to Terre}$.'
      },
      {
        q: 'Un astronaute a une masse $m=80$ kg. Sur la Lune, où $g_{Lune}\\approx1{,}6$ N/kg, quel est son poids ?',
        options: ['$128$ N', '$80$ N', '$1{,}6$ N', '$800$ N'],
        answer: 0,
        correction: '$P=m\\times g_{Lune}=80\\times1{,}6=128$ N. Sa masse, elle, reste $80$ kg où qu\'il se trouve dans l\'Univers.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['poids', 'facteur']);

        if (typeExo === 'poids') {
          var corps = [
            { nom: 'la Terre', g: 9.8 }, { nom: 'la Lune', g: 1.6 }, { nom: 'Mars', g: 3.7 },
            { nom: 'Jupiter', g: 24.8 }, { nom: 'Vénus', g: 8.9 }
          ];
          var astre = pick(corps);
          var m = randFloat(40, 90, 1);
          var Poids = parseFloat((m * astre.g).toFixed(1));
          var contexte = pick([
            'un astronaute équipé de sa combinaison', 'un rover d\'exploration',
            'un instrument scientifique embarqué', 'un sac d\'échantillons géologiques'
          ]);
          return {
            statement: 'Sur ' + astre.nom + ' (intensité de pesanteur $g=' + fr(astre.g, 1) + '$ N/kg), ' + contexte + ' a une masse $m=' + fr(m, 1) + '$ kg.<br/><br/>Calcule son poids $P$ sur ' + astre.nom + ' (en N, arrondi au dixième).',
            answer: Poids,
            tolerance: Math.max(0.5, parseFloat((Poids * 0.03).toFixed(1))),
            unit: 'N',
            hint: 'Le poids se calcule par $P=m\\times g$.',
            solution: [
              'Formule du poids : $P = m \\times g = ' + fr(m, 1) + ' \\times ' + fr(astre.g, 1) + '$.',
              'Résultat : $P \\approx ' + fr(Poids, 1) + '$ N.'
            ]
          };
        } else {
          var k = pick([2, 3, 4, 5]);
          var facteur = k * k;
          var contexte2 = pick([
            'deux satellites qui s\'éloignent l\'un de l\'autre',
            'une sonde spatiale qui s\'éloigne d\'une planète',
            'deux étoiles d\'un système binaire qui s\'écartent',
            'un astéroïde qui s\'éloigne d\'une planète'
          ]);
          return {
            statement: 'Pour ' + contexte2 + ' (masses inchangées), la distance qui les sépare est multipliée par ' + k + '.<br/><br/>Par quel facteur la force gravitationnelle qui les attire est-elle alors divisée ?',
            answer: facteur,
            tolerance: 0,
            unit: '',
            hint: 'La force gravitationnelle est inversement proportionnelle au <strong>carré</strong> de la distance : $F=G\\dfrac{m_1m_2}{d^2}$.',
            solution: [
              'La force s\'écrit $F=G\\dfrac{m_1m_2}{d^2}$ : si $d$ est multipliée par ' + k + ', alors $d^2$ est multiplié par $' + k + '^2=' + facteur + '$.',
              'Comme $F$ est <strong>inversement</strong> proportionnelle à $d^2$, elle est donc divisée par ' + facteur + '.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un astronaute et son équipement ont une masse totale $m=110$ kg (identique partout dans l\'Univers). Sur Terre, l\'intensité de la pesanteur est $g_{Terre}=9{,}8$ N/kg ; sur la Lune, elle n\'est que de $g_{Lune}=1{,}6$ N/kg, car la Lune est beaucoup moins massive et plus petite que la Terre.',
      tasks: [
        'Calculer le poids de l\'astronaute et de son équipement sur Terre.',
        'Calculer son poids sur la Lune, puis comparer les deux valeurs : par quel facteur approximatif le poids est-il réduit ?',
        'La masse de l\'astronaute a-t-elle changé entre la Terre et la Lune ? Expliquer la différence entre masse et poids à partir de cet exemple.'
      ],
      solutions: [
        '$P_{Terre}=m\\times g_{Terre}=110\\times9{,}8=1078$ N.',
        '$P_{Lune}=m\\times g_{Lune}=110\\times1{,}6=176$ N. Le rapport est $\\dfrac{P_{Terre}}{P_{Lune}}=\\dfrac{1078}{176}\\approx6{,}1$ : le poids sur la Lune est environ 6 fois plus faible que sur Terre.',
        'La masse de l\'astronaute reste $m=110$ kg, <strong>inchangée</strong>, qu\'il soit sur Terre ou sur la Lune : c\'est une propriété intrinsèque de la matière qui le compose. Seul le <strong>poids</strong>, force gravitationnelle exercée par l\'astre, change, car la Lune, moins massive, exerce une attraction gravitationnelle plus faible.'
      ],
      finalAnswer: 'Le poids de l\'astronaute passe de $1078$ N sur Terre à seulement $176$ N sur la Lune (environ 6 fois moins), alors que sa masse reste rigoureusement $110$ kg dans les deux cas. C\'est cette réduction de poids, et non de masse, qui explique pourquoi les astronautes bondissent si facilement à la surface lunaire.'
    },

    evaluation: {
      title: 'Évaluation — La gravitation universelle',
      duration: '30 min',
      questions: [
        {
          statement: 'Un objet de masse $m=75$ kg se trouve sur Terre, où $g=9{,}8$ N/kg. Calculer son poids (en N).',
          type: 'numeric',
          answer: 735,
          tolerance: 5,
          unit: 'N',
          points: 2,
          correction: '$P=m\\times g=75\\times9{,}8=735$ N.'
        },
        {
          statement: 'La loi de gravitation universelle s\'écrit :',
          type: 'multiple-choice',
          options: ['$F = G\\dfrac{m_1 \\times m_2}{d^2}$', '$F = G\\times m_1 \\times m_2 \\times d^2$', '$F = G\\dfrac{d^2}{m_1\\times m_2}$', '$F = G\\times(m_1+m_2)\\times d$'],
          answer: 0,
          points: 2,
          correction: 'La force gravitationnelle est proportionnelle au produit des masses et inversement proportionnelle au <strong>carré</strong> de la distance : $F=G\\dfrac{m_1m_2}{d^2}$.'
        },
        {
          statement: 'La distance entre deux corps (masses inchangées) est multipliée par 2. Par quel facteur la force gravitationnelle est-elle alors divisée ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: 'La force dépend de $\\dfrac{1}{d^2}$ : si $d$ double, $d^2$ est multiplié par $2^2=4$, donc la force est divisée par 4.'
        },
        {
          statement: 'D\'après le principe des actions réciproques, la force exercée par le Soleil sur la Terre, comparée à celle exercée par la Terre sur le Soleil, est :',
          type: 'multiple-choice',
          options: ['Beaucoup plus grande, car le Soleil est bien plus massif', 'Beaucoup plus faible', 'Exactement de même intensité, mais de direction opposée', 'Nulle, car seul le Soleil attire la Terre'],
          answer: 2,
          points: 2,
          correction: 'Quelle que soit la différence de masse entre les deux astres, les forces qu\'ils exercent l\'un sur l\'autre sont toujours de <strong>même intensité</strong>, dirigées en sens opposés.'
        },
        {
          statement: 'La masse d\'un objet transporté de la Terre vers la Lune :',
          type: 'multiple-choice',
          options: ['Diminue, comme son poids', 'Reste rigoureusement identique', 'Augmente, car la Lune est plus petite', 'Devient nulle en apesanteur'],
          answer: 1,
          points: 1,
          correction: 'La masse est une propriété intrinsèque de la matière : elle ne dépend pas du lieu. Seul le poids, lié à l\'attraction gravitationnelle locale, varie d\'un astre à l\'autre.'
        }
      ]
    }
  });
