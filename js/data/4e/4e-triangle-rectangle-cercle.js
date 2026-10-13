window.MODULES.push(
    {
    id: '4e-triangle-rectangle-cercle',
    level: 1, subject: 'maths',
    icon: '⭕',
    title: 'Triangle rectangle et cercle circonscrit',
    subtitle: 'Angle inscrit dans un demi-cercle (Thalès)',
    keywords: ['Triangle rectangle', 'Cercle circonscrit', 'Angle inscrit', 'Diamètre', 'Hypoténuse'],
    physics: false,
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro ENONCAIT le theoreme et le
         qualifiait d'elegant : il ne restait plus rien a decouvrir. On ouvre
         sur un probleme d'atelier — tracer un angle droit sans equerre — dont
         la solution est precisement le theoreme. L'eleve peut essayer, il ne
         trouvera pas avec ses outils de cinquieme. */
      intro: 'Dans un atelier, il faut tracer un angle parfaitement droit sur une grande plaque. Pas d\'équerre assez grande, pas de rapporteur. On dispose seulement d\'une ficelle et d\'un crayon.<br/><br/>' +
        'Un menuisier trace alors un demi-cercle, place un point n\'importe où sur l\'arc, et le relie aux deux extrémités du diamètre. Il affirme que l\'angle obtenu est droit — <strong>à coup sûr</strong>, quel que soit le point choisi.<br/><br/>' +
        'Cela paraît trop beau : pourquoi un point pris au hasard donnerait-il toujours exactement $90°$ ? Ce chapitre montre pourquoi, et pourquoi il n\'y a aucune exception.<br/><br/>' +
        'Le théorème de l\'angle inscrit dans un demi-cercle est un résultat élégant : si un triangle $ABC$ est inscrit dans un cercle et que $[BC]$ est un diamètre, alors l\'angle $\\hat{A}$ est nécessairement droit — et ce quel que soit l\'emplacement de $A$ sur le cercle (tant qu\'il n\'est pas sur le diamètre).' +
        '<br/><br/>' +
        '<strong>Intuition géométrique :</strong> le centre $O$ du cercle est le milieu de $[BC]$, et $OA = OB = OC = R$ (rayons). Le triangle $OAB$ et $OAC$ sont isocèles. En additionnant les angles on obtient $\\hat{A} = 90°$.' +
        '<br/><br/>' +
        'La réciproque est aussi vraie et utile : si $\\hat{A} = 90°$ dans $ABC$, alors $[BC]$ est un diamètre du cercle circonscrit, et son rayon est $R = \\dfrac{BC}{2}$.' +
        '<br/><br/>' +
        'Ce résultat est utilisé en construction géométrique : pour tracer un angle droit, il suffit d\'inscrire un triangle dans un demi-cercle.',
      definitions: [
        { term: 'Cercle circonscrit', def: 'Cercle passant par les trois sommets d\'un triangle. Son centre est équidistant des trois sommets.' },
        { term: 'Angle inscrit', def: 'Angle dont le sommet est sur le cercle et dont les côtés sont des cordes du cercle.' },
        { term: 'Diamètre', def: 'Corde passant par le centre du cercle. C\'est la plus grande corde possible : $d = 2R$.' },
        { term: 'Hypoténuse', def: 'Côté le plus long d\'un triangle rectangle, situé en face de l\'angle droit.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier si un côté est un diamètre</strong> : si $O$ est le centre du cercle et le milieu de $[BC]$, alors $[BC]$ est un diamètre du cercle.',
          '<strong>Théorème direct</strong> : si un côté est un diamètre et $A$ est sur le cercle, l\'angle opposé à ce diamètre est nécessairement droit ($90°$). <strong>Exemple :</strong> $[BC]$ est un diamètre et $A$ est sur le cercle → $\\hat{A} = 90°$.',
          '<strong>Réciproque</strong> : si un angle d\'un triangle est droit, le côté opposé (hypoténuse) est un diamètre du cercle circonscrit. <strong>Exemple :</strong> $\\hat{A} = 90°$ et $BC = 14$ cm → le cercle circonscrit à pour rayon $R = \\dfrac{14}{2} = 7$ cm.'
        ]
      },
      example: {
        statement: 'Un pont en arc a la forme d\'un demi-cercle de diamètre $[BC] = 20$ m. Un câble relie un point $A$ situé sur l\'arc aux deux extrémités $B$ et $C$. Quel est l\'angle $\\hat{A}$ formé par les deux câbles ? Si $AB = 12$ m, quelle est la longueur $AC$ ?',
        steps: [
          '$[BC]$ est un diamètre et $A$ est sur le cercle → d\'après le théorème, $\\hat{A} = 90°$.',
          'Le triangle $ABC$ est rectangle en $A$. On applique Pythagore : $AC = \\sqrt{BC^2 - AB^2}$.',
          '$AC = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ m.'
        ],
        answer: 'L\'angle $\\hat{A} = 90°$ et le câble $AC$ mesure $16$ m.'
      },
      formulas: [
        'Théorème : $[BC]$ diamètre et $A$ sur le cercle $\\Rightarrow \\hat{A} = 90°$',
        'Réciproque : $\\hat{A} = 90°$ dans $ABC$ $\\Rightarrow$ $[BC]$ est un diamètre du cercle circonscrit',
        'Rayon du cercle circonscrit : $R = \\dfrac{BC}{2}$ (BC = hypoténuse)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Cercle circonscrit',
        title: 'Angle inscrit dans un demi-cercle : pourquoi l\'angle en A est droit',
        description: 'Le point A est n\'importe où sur le cercle (hors B et C) : l\'angle en A reste toujours droit tant que BC est un diamètre.',
        svg: `
          <svg viewBox="0 0 400 300" role="img" aria-labelledby="cercle-circonscrit-title cercle-circonscrit-desc">
            <title id="cercle-circonscrit-title">Triangle rectangle inscrit dans un demi-cercle</title>
            <desc id="cercle-circonscrit-desc">Cercle de centre O et de diamètre BC, avec un point A sur le cercle formant un angle droit en A, marque par un petit carre.</desc>
            <circle class="curve-main" cx="200" cy="150" r="90" fill="none"></circle>
            <polygon points="148.38,76.28 110,150 290,150" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="110" y1="150" x2="290" y2="150"></line>
            <line class="frame-line" x1="148.38" y1="76.28" x2="110" y2="150"></line>
            <line class="frame-line" x1="148.38" y1="76.28" x2="290" y2="150"></line>
            <line class="guide-line" x1="200" y1="150" x2="148.38" y2="76.28"></line>
            <path class="axis" d="M142.84,86.93 L153.48,92.47 L159.02,81.82"></path>
            <circle class="plot-point-alt" cx="110" cy="150" r="5"></circle>
            <circle class="plot-point-alt" cx="290" cy="150" r="5"></circle>
            <circle class="plot-point" cx="148.38" cy="76.28" r="5"></circle>
            <circle class="plot-point-alt" cx="200" cy="150" r="4"></circle>
            <text class="annotation-label" x="88" y="168">B</text>
            <text class="annotation-label" x="296" y="168">C</text>
            <text class="annotation-label" x="132" y="64">A</text>
            <text class="tick-label" x="204" y="145">O</text>
            <text class="tick-label" x="176" y="106">R</text>
          </svg>
        `,
        notes: [
          'O est le centre du cercle et le milieu du diamètre BC : donc OA = OB = OC = R.',
          'Où que se trouve A sur le cercle, l\'angle en A reste droit : ce n\'est pas une coïncidence liée à la position choisie ici.',
          'Ici A n\'est pas au sommet du demi-cercle, pour bien montrer que le théorème est général et ne dépend pas de cette position particulière.'
        ],
        reading: 'Repère d\'abord le diamètre BC : si A est sur le cercle, l\'angle opposé à ce diamètre est automatiquement droit, quelle que soit la position de A.',
        caption: 'Théorème de l\'angle inscrit dans un demi-cercle : BC diamètre et A sur le cercle donc l\'angle en A vaut 90 degrés.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. « quel que soit A » n'est credible que si on MONTRE plusieurs A ;
         2. l'hypothese « [BC] est un DIAMETRE » est celle qu'on oublie —
            contre-exemple avec une corde quelconque ;
         3. la mediane issue de l'angle droit vaut la moitie de l'hypotenuse,
            consequence directe qu'on ne relie pas spontanement au cercle.
         Coordonnees EXACTES : les points A sont des points RATIONNELS du cercle
         (triplets 3-4-5 et 8-15-17 mis a l'echelle 80), donc le produit
         scalaire vaut exactement 0 — un angle « rond » arrondi a deux
         decimales donnait 89,9994 deg (scratchpad geo-exact.js). */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Quel que soit le point',
          title: 'Trois positions de A, trois fois un angle droit',
          description: 'Le théorème affirme que l\'angle est droit <strong>où que soit</strong> le point $A$ sur le cercle. Une seule figure ne prouve rien : en voici trois, sur le même cercle, avec le même diamètre.',
          svg: `
            <svg viewBox="0 0 400 172" role="img" aria-labelledby="cercle-troisA-title cercle-troisA-desc">
              <title id="cercle-troisA-title">Trois triangles inscrits dans le meme demi-cercle</title>
              <desc id="cercle-troisA-desc">Un cercle de centre O porte un diametre horizontal BC. Trois points differents sont places sur le demi-cercle superieur et relies chacun aux deux extremites du diametre. Les trois triangles obtenus ont tous un angle droit au sommet situe sur le cercle, marque par un petit carre. Les trois positions sont pourtant tres differentes : une a gauche, une au milieu, une a droite. L'angle droit ne depend donc pas de l'endroit choisi sur le cercle.</desc>

              <circle class="frame-line" cx="200" cy="110" r="80" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)"></circle>
              <line class="curve-main" x1="120" y1="110" x2="280" y2="110"></line>
              <circle class="plot-point" cx="120" cy="110" r="4"></circle>
              <circle class="plot-point" cx="280" cy="110" r="4"></circle>
              <circle class="plot-point-alt" cx="200" cy="110" r="3"></circle>
              <text class="annotation-label" x="112" y="126" text-anchor="end">B</text>
              <text class="annotation-label" x="288" y="126" text-anchor="start">C</text>
              <text class="tick-label" x="200" y="126" text-anchor="middle">O</text>

              <!-- A1 = (136,62) : point rationnel, dot(AB,AC) = 0 exactement. -->
              <path class="grid-line" fill="none" d="M120 110 L136 62 L280 110"></path>
              <circle class="plot-point" cx="136" cy="62" r="4"></circle>
              <path class="guide-line" fill="none" d="M139.4 71.6 L147.9 74.4 L145.1 82.9"></path>
              <text class="tick-label" x="130" y="54" text-anchor="middle">A</text>

              <!-- A2 = (200,30) : sommet du demi-cercle. -->
              <path class="grid-line" fill="none" d="M120 110 L200 30 L280 110"></path>
              <circle class="plot-point" cx="200" cy="30" r="4"></circle>
              <path class="guide-line" fill="none" d="M193.6 36.4 L200 42.7 L206.4 36.4"></path>
              <text class="tick-label" x="200" y="22" text-anchor="middle">A</text>

              <!-- A3 = (264,62) : symetrique de A1. -->
              <path class="grid-line" fill="none" d="M120 110 L264 62 L280 110"></path>
              <circle class="plot-point" cx="264" cy="62" r="4"></circle>
              <path class="guide-line" fill="none" d="M254.9 82.9 L252.1 74.4 L260.6 71.6"></path>
              <text class="tick-label" x="270" y="54" text-anchor="middle">A</text>

              <text class="tick-label" x="200" y="164" text-anchor="middle">trois positions, trois angles droits</text>
            </svg>
          `,
          notes: [
            'Les trois points sont sur le <strong>même cercle</strong> et le segment $[BC]$ est le <strong>même diamètre</strong> à chaque fois.',
            'Dans les trois triangles, l\'angle au sommet posé sur le cercle vaut exactement $90°$ — ce n\'est pas un effet de dessin.',
            'C\'est ce que dit le théorème : la position de $A$ sur le cercle est <strong>libre</strong>, le résultat ne bouge pas.'
          ],
          reading: 'Choisis toi-même un quatrième point sur le cercle, relie-le à $B$ et à $C$ : tu obtiendras encore un angle droit. Le seul point interdit est celui qui tombe sur le diamètre lui-même.',
          caption: 'Trois positions différentes de $A$ sur le cercle, et trois fois un angle droit en $A$.'
        },
        {
          theme: 'maths',
          kicker: 'L\'hypothèse qu\'on oublie',
          title: 'Sans diamètre, plus d\'angle droit',
          description: 'Le théorème ne dit pas « un triangle inscrit dans un cercle est rectangle ». Il exige que $[BC]$ soit un <strong>diamètre</strong>, c\'est-à-dire qu\'il passe par le centre. Si la corde ne passe pas par le centre, l\'angle n\'est plus droit.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="cercle-diam-title cercle-diam-desc">
              <title id="cercle-diam-title">Comparaison entre une corde diametre et une corde quelconque</title>
              <desc id="cercle-diam-desc">Deux cercles identiques sont dessines cote a cote. Sur celui de gauche, la corde passe par le centre : c'est un diametre, et le triangle inscrit a un angle droit au sommet oppose. Sur celui de droite, la corde ne passe pas par le centre, elle est plus courte, et l'angle au sommet oppose mesure environ 66 degres. Le petit carre de l'angle droit est remplace par un arc, et le centre du cercle est visiblement en dehors de la corde. L'hypothese du diametre est donc indispensable.</desc>

              <!-- COMPARAISON : memes cercles, meme rayon 62, memes positions
                   verticales. La SEULE difference est la position de la corde. -->
              <circle class="frame-line" cx="100" cy="96" r="62" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)"></circle>
              <line class="curve-main" x1="38" y1="96" x2="162" y2="96"></line>
              <circle class="plot-point-alt" cx="100" cy="96" r="3"></circle>
              <text class="tick-label" x="100" y="112" text-anchor="middle">O</text>
              <!-- A sur le cercle : (100+62*3/5, 96-62*4/5) = (137.2, 46.4) -->
              <path class="grid-line" fill="none" d="M38 96 L137.2 46.4 L162 96"></path>
              <circle class="plot-point" cx="137.2" cy="46.4" r="4"></circle>
              <path class="guide-line" fill="none" d="M132.8 55.4 L141.1 58.6 L137.9 66.9"></path>
              <text class="annotation-label" x="100" y="26" text-anchor="middle">corde = diamètre</text>
              <text class="tick-label" x="100" y="168" text-anchor="middle">angle droit</text>

              <circle class="frame-line" cx="300" cy="96" r="62" fill="color-mix(in srgb, var(--diagram-accent) 6%, transparent)"></circle>
              <!-- Corde NON diametrale, a 24 unites sous le centre :
                   demi-longueur = racine(62^2 - 24^2) = 57,17. L'angle inscrit
                   vaut alors 67,2 deg, valeur MESUREE et annoncee telle quelle
                   sous la figure. Une premiere version placait la corde a 30
                   unites en annoncant « environ 66 degres » alors que l'angle
                   reel valait 61,1 : la legende contredisait le dessin. -->
              <line class="curve-main" x1="242.8" y1="120" x2="357.2" y2="120"></line>
              <circle class="plot-point-alt" cx="300" cy="96" r="3"></circle>
              <text class="tick-label" x="300" y="88" text-anchor="middle">O</text>
              <path class="grid-line" fill="none" d="M242.8 120 L354.7 66.8 L357.2 120"></path>
              <circle class="plot-point" cx="354.7" cy="66.8" r="4"></circle>
              <path class="guide-line" fill="none" d="M347 76 A11 11 0 0 1 356 78" ></path>
              <text class="annotation-label" x="300" y="26" text-anchor="middle">corde quelconque</text>
              <text class="tick-label" x="300" y="168" text-anchor="middle">environ 67 degrés</text>
            </svg>
          `,
          notes: [
            'À gauche, la corde <strong>passe par le centre</strong> $O$ : c\'est un diamètre, et l\'angle en $A$ vaut $90°$.',
            'À droite, la corde ne passe pas par $O$. Le sommet est pourtant bien sur le cercle, mais l\'angle ne vaut plus $90°$.',
            'Avant d\'appliquer le théorème, vérifie donc toujours que le segment passe par le centre — c\'est l\'hypothèse, pas un détail.'
          ],
          reading: 'Regarde où se trouve le point $O$ dans chaque figure. À gauche il est <strong>sur</strong> la corde, à droite il est au-dessus. C\'est cette différence, et elle seule, qui fait disparaître l\'angle droit.',
          caption: 'Le théorème exige un diamètre : avec une corde quelconque, l\'angle n\'est plus droit.'
        },
        {
          theme: 'maths',
          kicker: 'La conséquence utile',
          title: 'La médiane vers l\'hypoténuse vaut la moitié de l\'hypoténuse',
          description: 'Si $A$ est sur le cercle et $[BC]$ un diamètre, alors $O$ est le milieu de $[BC]$ et $OA$ est un rayon. Donc $OA = OB = OC$ : dans un triangle rectangle, le milieu de l\'hypoténuse est <strong>à égale distance des trois sommets</strong>.',
          svg: `
            <svg viewBox="0 0 400 180" role="img" aria-labelledby="cercle-mediane-title cercle-mediane-desc">
              <title id="cercle-mediane-title">Le milieu de l'hypotenuse est equidistant des trois sommets</title>
              <desc id="cercle-mediane-desc">Un triangle rectangle est inscrit dans un cercle dont l'hypotenuse est un diametre. Le centre du cercle, note M, est le milieu de l'hypotenuse. Trois segments egaux relient M aux trois sommets du triangle : ils mesurent tous le rayon du cercle, soit la moitie de l'hypotenuse. Les trois longueurs egales sont marquees par un meme codage.</desc>

              <!-- RAYON 68 et non 70 : avec 68, le point rationnel du triplet
                   8-15-17 tombe sur des ENTIERS (260,72) et le produit scalaire
                   est nul a la precision machine. A 70, l'arrondi a deux
                   decimales donnait un angle de 90,0082 deg et un point a
                   69,995 du centre — l'ecart est invisible a l'oeil mais la
                   figure cessait d'etre exacte. -->
              <circle class="grid-line" cx="200" cy="104" r="68" fill="none"></circle>
              <polygon class="frame-line" points="132,104 268,104 260,72" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></polygon>
              <path class="grid-line" fill="none" d="M251.6 75.2 L254.8 83.5 L263.1 80.3"></path>

              <line class="curve-main" x1="200" y1="104" x2="260" y2="72"></line>
              <circle class="plot-point-alt" cx="200" cy="104" r="4"></circle>
              <circle class="plot-point" cx="132" cy="104" r="4"></circle>
              <circle class="plot-point" cx="268" cy="104" r="4"></circle>
              <circle class="plot-point" cx="260" cy="72" r="4"></circle>

              <text class="annotation-label" x="124" y="120" text-anchor="end">B</text>
              <text class="annotation-label" x="276" y="120" text-anchor="start">C</text>
              <text class="annotation-label" x="266" y="64" text-anchor="start">A</text>
              <text class="annotation-label" x="200" y="122" text-anchor="middle">M</text>

              <!-- Etiquettes posees HORS des traits qu'elles nomment (les deux
                   premieres tombaient sur l'hypotenuse, la troisieme sur le
                   segment MA), constate sur l'epreuve du 2026-09-13. -->
              <text class="tick-label" x="165" y="124" text-anchor="middle">rayon</text>
              <text class="tick-label" x="235" y="124" text-anchor="middle">rayon</text>
              <text class="tick-label" x="216" y="76" text-anchor="middle">rayon</text>
              <!-- « l hypoténuse » : l'article elide seul devient une lettre
                   isolee, que le convertisseur passe en italique. On reformule
                   pour supprimer l'elision. -->
              <text class="tick-label" x="200" y="166" text-anchor="middle">M est le milieu de BC : MA = MB = MC</text>
            </svg>
          `,
          notes: [
            '$M$ est le milieu de $[BC]$, donc $MB = MC$ : c\'est la définition du milieu.',
            'Mais $M$ est aussi le <strong>centre du cercle</strong>, et $A$ est dessus : donc $MA$ est un rayon, comme $MB$ et $MC$.',
            'D\'où le résultat pratique : $MA = \\dfrac{BC}{2}$. Si l\'hypoténuse mesure $26$ cm, la médiane issue de l\'angle droit mesure $13$ cm.'
          ],
          reading: 'Les trois segments partant de $M$ ont la même longueur, parce que ce sont trois rayons du même cercle. C\'est la façon la plus rapide de retrouver ce résultat sans le retenir par cœur.',
          caption: 'Le milieu de l\'hypoténuse est le centre du cercle circonscrit : il est à égale distance des trois sommets.'
        }
      ],
      recap: [
        'Si un côté d\'un triangle inscrit est un diamètre, l\'angle opposé vaut $90°$.',
        'Réciproque : si un triangle est rectangle, l\'hypoténuse est un diamètre du cercle circonscrit.',
        'Le centre du cercle circonscrit à un triangle rectangle est le milieu de l\'hypoténuse.',
        'Le rayon du cercle circonscrit vaut la moitié de l\'hypoténuse : $R = \\dfrac{BC}{2}$.'
      ],
      piege: 'Piège : le théorème s\'applique uniquement quand le côté est un DIAMÈTRE, pas juste une corde du cercle. Un côté = diamètre signifie que son milieu est le centre du cercle.'
    },
    quiz: [
      {
        q: 'Un triangle $ABC$ est inscrit dans un cercle de diamètre $[BC]$. Quel est l\'angle $\\hat{A}$ ?',
        options: ['$45°$', '$60°$', '$90°$', '$180°$'],
        answer: 2,
        correction: 'Théorème de l\'angle inscrit dans un demi-cercle : si $[BC]$ est un diamètre, alors $\\hat{A} = 90°$.'
      },
      {
        q: 'Dans un triangle rectangle $ABC$ (angle droit en $A$) avec $BC = 10$ cm, quel est le rayon du cercle circonscrit ?',
        options: ['$10$ cm', '$5$ cm', '$20$ cm', '$7{,}07$ cm'],
        answer: 1,
        correction: 'L\'hypoténuse $BC$ est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{10}{2} = 5$ cm.'
      },
      {
        q: 'Le milieu d\'une hypoténuse d\'un triangle rectangle est :',
        options: ['Le centre de gravité', 'Le centre du cercle inscrit', 'Le centre du cercle circonscrit', 'L\'orthocentre'],
        answer: 2,
        correction: 'Dans un triangle rectangle, le milieu de l\'hypoténuse est le centre du cercle circonscrit, et le rayon vaut la moitié de l\'hypoténuse.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Le generateur ne posait qu'une tache : « le
         diametre vaut d, quel est le rayon ? ». C'est une division par deux.
         Elle n'emploie ni le theoreme de l'angle inscrit dans un demi-cercle,
         ni sa reciproque, ni Pythagore — c'est-a-dire rien de ce chapitre. Un
         eleve pouvait faire les douze exercices sans avoir compris pourquoi le
         triangle est rectangle.

         Quatre taches maintenant, et chacune mobilise le theoreme :
           - 'rayon-median' : la mediane issue de l'angle droit vaut la moitie de
             l'hypotenuse, ce qui EST le theoreme, pas une division ;
           - 'troisieme-cote' : Pythagore dans un triangle inscrit, ou
             l'hypotenuse doit d'abord etre reconnue comme le diametre ;
           - 'angle-inscrit' : reconnaitre l'angle droit sans calcul ;
           - 'diametre-inverse' : remonter du rayon au plus long cote. */
      generate() {
        const tache = pick(['rayon-median', 'troisieme-cote', 'angle-inscrit', 'diametre-inverse']);
        const lieu = pick([
          { intro: 'Un vitrail circulaire contient un triangle rectangle inscrit', emoji: '🎨' },
          { intro: 'Un pont en arc forme un demi-cercle avec un triangle inscrit', emoji: '🌉' },
          { intro: 'Sur un terrain de sport, un cercle contient un triangle rectangle', emoji: '🏟️' },
          { intro: 'En optique, un miroir circulaire encadre un triangle rectangle', emoji: '🔭' }
        ]);

        if (tache === 'rayon-median') {
          /* La MEDIANE issue de l'angle droit, et non le rayon : c'est la meme
             longueur, mais la formuler ainsi oblige a passer par le theoreme
             (le milieu de l'hypotenuse est le centre du cercle circonscrit)
             plutot que par une division par deux. */
          const hyp = pick([6, 8, 10, 12, 13, 14, 16, 18, 20]);
          const rep = hyp / 2;
          return {
            statement: lieu.emoji + ' Un triangle $ABC$ est rectangle en $A$ et son hypoténuse mesure $BC = ' + hyp + '$ cm. ' +
              'Soit $M$ le milieu de $[BC]$. Quelle est la longueur $AM$, en cm ?',
            answer: rep,
            tolerance: 0.01,
            unit: 'cm',
            hint: 'Le milieu de l\'hypoténuse est le centre du cercle circonscrit, et les trois sommets sont sur ce cercle : $MA$, $MB$ et $MC$ sont donc trois rayons.',
            solution: [
              'Le triangle est rectangle en $A$, donc $[BC]$ est un diamètre du cercle circonscrit et son milieu $M$ en est le centre.',
              'Les trois sommets sont sur le cercle, donc $MA = MB = MC = R$ : la médiane issue de l\'angle droit est un rayon.',
              '$AM = \\dfrac{BC}{2} = \\dfrac{' + hyp + '}{2} = ' + fr(rep) + '$ cm.'
            ]
          };
        }

        if (tache === 'troisieme-cote') {
          // Triplets pythagoriciens : la reponse reste entiere.
          const [a, b, c] = pick([[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25]]);
          const connu = pick([a, b]);
          const autre = connu === a ? b : a;
          return {
            statement: lieu.emoji + ' ' + lieu.intro + '. Le triangle $ABC$ est inscrit dans un cercle de rayon $' + fr(c / 2) + '$ cm, ' +
              'et $[BC]$ est un diamètre. On mesure $AB = ' + connu + '$ cm. Calcule $AC$, en cm.',
            answer: autre,
            tolerance: 0.01,
            unit: 'cm',
            hint: 'Commence par ce que le diamètre t\'apprend : le triangle est rectangle en $A$. Son hypoténuse $BC$ vaut deux fois le rayon.',
            solution: [
              '$[BC]$ est un diamètre et $A$ est sur le cercle, donc le triangle est rectangle en $A$ (angle inscrit dans un demi-cercle).',
              'L\'hypoténuse vaut $BC = 2 \\times ' + fr(c / 2) + ' = ' + c + '$ cm.',
              '$AC^2 = BC^2 - AB^2 = ' + c + '^2 - ' + connu + '^2 = ' + (c * c) + ' - ' + (connu * connu) + ' = ' + (autre * autre) + '$, donc $AC = ' + autre + '$ cm.'
            ]
          };
        }

        if (tache === 'angle-inscrit') {
          const pos = pick(['sur le cercle', 'sur le cercle']);
          return {
            statement: lieu.emoji + ' Un cercle a pour diamètre $[BC]$. Un point $A$ est place ' + pos + ', distinct de $B$ et de $C$. ' +
              'Combien vaut l\'angle $\\widehat{BAC}$, en degrés ?',
            answer: 90,
            tolerance: 0,
            unit: '°',
            hint: 'Ce résultat ne demande aucun calcul : il ne depend pas de l\'endroit ou se trouve $A$ sur le cercle.',
            solution: [
              'Tout point du cercle, autre que $B$ et $C$, voit le diamètre $[BC]$ sous un angle droit.',
              'C\'est le theoreme de l\'angle inscrit dans un demi-cercle : $\\widehat{BAC} = 90°$.',
              'La position exacte de $A$ ne change rien, et c\'est ce qui rend ce theoreme si utile.'
            ]
          };
        }

        // tache === 'diametre-inverse' : du rayon vers l'hypotenuse.
        const r = pick([2.5, 3, 3.5, 4, 4.5, 5, 6, 6.5, 7.5]);
        const d = parseFloat((2 * r).toFixed(1));
        return {
          statement: lieu.emoji + ' ' + lieu.intro + '. Le cercle circonscrit à ce triangle rectangle à un rayon de $' + fr(r) + '$ cm. ' +
            'Quelle est la longueur de l\'hypoténuse, en cm ?',
          answer: d,
          tolerance: 0.01,
          unit: 'cm',
          hint: 'Dans un triangle rectangle, l\'hypoténuse est un diamètre du cercle circonscrit.',
          solution: [
            'Le centre du cercle circonscrit à un triangle rectangle est le milieu de son hypoténuse : l\'hypoténuse est donc un diamètre.',
            '$\\text{hypoténuse} = 2R = 2 \\times ' + fr(r) + ' = ' + fr(d) + '$ cm.'
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte trace un vitrail circulaire de rayon $30$ cm. Il y inscrit un triangle $ABC$ avec $[BC]$ comme diamètre et $A$ sur le cercle.',
      tasks: [
        'Quelle est la longueur du diamètre $BC$ ?',
        'Quel est l\'angle $\\hat{A}$ dans ce triangle ?',
        'Si $AB = 36$ cm, calculer $AC$ en utilisant Pythagore.'
      ],
      solutions: [
        '$BC = 2 \\times 30 = 60$ cm.',
        '$\\hat{A} = 90°$ (angle inscrit dans un demi-cercle).',
        '$AC = \\sqrt{BC^2 - AB^2} = \\sqrt{3600 - 1296} = \\sqrt{2304} = 48$ cm.'
      ],
      finalAnswer: 'Le triangle a $BC = 60$ cm, $AB = 36$ cm, $AC = 48$ cm et $\\hat{A} = 90°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangle rectangle et cercle circonscrit',
      duration: '25 min',
      questions: [
        {
          statement: 'Un triangle $ABC$ est inscrit dans un cercle de centre $O$ et $[BC]$ est un diamètre. Que vaut l\'angle $\\hat{A}$ ?',
          type: 'numeric',
          answer: 90,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'D\'après le théorème de l\'angle inscrit dans un demi-cercle, si $[BC]$ est un diamètre et que $A$ est sur le cercle, alors $\\hat{A} = 90°$.'
        },
        {
          statement: 'Un triangle rectangle en $A$ a pour hypoténuse $BC = 26\\,\\text{cm}$. Quel est le rayon du cercle circonscrit ?',
          type: 'numeric',
          answer: 13,
          tolerance: 0.01,
          unit: 'cm',
          points: 2,
          correction: 'Dans un triangle rectangle, l\'hypoténuse est le diamètre du cercle circonscrit. Donc $R = \\dfrac{BC}{2} = \\dfrac{26}{2} = 13\\,\\text{cm}$.'
        },
        {
          statement: 'Le centre du cercle circonscrit à un triangle rectangle se trouve :',
          type: 'multiple-choice',
          options: [
            'Au centre de gravité du triangle',
            'Au milieu de l\'hypotenuse',
            'Au sommet de l\'angle droit',
            'À l\'intersection des hauteurs'
          ],
          answer: 1,
          points: 2,
          correction: 'Dans un triangle rectangle, le centre du cercle circonscrit est le milieu de l\'hypoténuse. Ce point est équidistant des trois sommets (distance = rayon $R = \\dfrac{\\text{hypoténuse}}{2}$).'
        },
        {
          /* Q4 RÉÉCRITE le 2026-09-13 pour mobiliser « chercher ». L'ancien énoncé
             donnait le rayon ET désignait l'angle droit : il ne restait qu'à
             doubler puis appliquer Pythagore, deux gestes annoncés. Ici on donne
             un PÉRIMÈTRE de cercle : l'élève doit remonter au rayon, puis au
             diamètre, puis reconnaître l'hypoténuse — trois étapes dont aucune
             n'est nommée. */
          statement: 'Un triangle $ABC$ est inscrit dans un cercle dont $[BC]$ est un diamètre. Le périmètre de ce cercle mesure $62{,}8\\,\\text{cm}$ et l\'on mesure $AB = 12\\,\\text{cm}$. Calculer $AC$, en cm. (Prendre $\\pi \\approx 3{,}14$.)',
          type: 'numeric',
          answer: 16,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: 'Rien n\'est donné directement : il faut remonter du périmètre jusqu\'à l\'hypoténuse.<br/><br/>' +
            'Le périmètre d\'un cercle vaut $2\\pi R$, donc $R = \\dfrac{62{,}8}{2 \\times 3{,}14} = 10\\,\\text{cm}$, et le diamètre $BC$ vaut $20\\,\\text{cm}$.<br/><br/>' +
            'Comme $[BC]$ est un diamètre et que $A$ est sur le cercle, le triangle est rectangle en $A$ : $BC$ est son hypoténuse.<br/><br/>' +
            'Par Pythagore : $AC^2 = 20^2 - 12^2 = 400 - 144 = 256$, donc $AC = 16\\,\\text{cm}$.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question demandait de nommer la conclusion (« il est rectangle »)
             sans jamais demander le raisonnement — et son énoncé disait déjà
             « hypoténuse », ce qui donnait la réponse. Ici l'élève doit choisir
             la JUSTIFICATION correcte, et le mot « hypoténuse » a disparu de
             l'énoncé. */
          statement: 'Dans un triangle $ABC$, on constate que le milieu $M$ de $[BC]$ vérifie $MA = MB = MC$. Un élève en conclut que le triangle est rectangle en $A$. Quelle justification est correcte ?',
          type: 'multiple-choice',
          options: [
            'Aucune : l\'égalité $MA = MB = MC$ prouve seulement que le triangle est isocèle.',
            'Comme $MA = MB = MC$, les trois sommets sont sur un même cercle de centre $M$ ; or $M$ est le milieu de $[BC]$, donc $[BC]$ en est un diamètre, et tout point du cercle voit un diamètre sous un angle droit.',
            'Parce que $M$ est le centre de gravité du triangle, et que le centre de gravité n\'est équidistant des sommets que dans un triangle rectangle.',
            'Parce que $MA$ est une hauteur du triangle, et qu\'une hauteur qui vaut la moitié d\'un côté crée un angle droit.'
          ],
          answer: 1,
          points: 2,
          correction: 'La conclusion de l\'élève est juste, et la justification passe par le cercle.<br/><br/>' +
            '$MA = MB = MC$ signifie que $A$, $B$ et $C$ sont à la même distance de $M$ : ils sont donc tous les trois sur le cercle de centre $M$ et de rayon $MA$.<br/><br/>' +
            'Comme $M$ est le milieu de $[BC]$, le segment $[BC]$ passe par le centre : c\'est un <strong>diamètre</strong>. Et tout point du cercle, distinct de $B$ et de $C$, voit un diamètre sous un angle droit. Donc $\\widehat{BAC} = 90°$.<br/><br/>' +
            'La proposition 3 confond $M$ avec le centre de gravité, qui est sur la médiane mais pas au milieu du côté ; la proposition 4 invente une propriété des hauteurs.'
        }
      ]
    }
  }
);
