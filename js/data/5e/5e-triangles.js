/* =========================================================
   Spark Learning – data/5e/5e-triangles.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '5e-triangles',
    level: 1, subject: 'maths',
    icon: '🔺',
    title: 'Triangles',
    subtitle: 'Construction, types, inégalité triangulaire',
    keywords: ['Triangle', 'Inégalité triangulaire', 'Isocèle', 'Équilatéral', 'Rectangle', 'Somme des angles'],
    physics: false,

    cours: {
      /* DECOUVRIR REECRIT LE 2026-09-13. L'intro ouvrait sur « le triangle est
         la forme la plus simple », une definition a laquelle l'eleve n'a rien a
         repondre. La question retenue n'est resoluble par AUCUN outil
         anterieur : rien en sixieme ne dit qu'un triplet de longueurs peut etre
         impossible, et l'eleve qui essaie de tracer le decouvre par l'echec.
         Longueurs VERIFIEES : 3 + 4 = 7 < 8, le triangle ne ferme pas ;
         6 + 7 = 13 > 10, celui-la ferme. */
      intro: 'Prends trois baguettes de $3$ cm, $4$ cm et $8$ cm et essaie de fabriquer un triangle. Tu n\'y arriveras pas.<br/><br/>' +
        'Avec $6$ cm, $7$ cm et $10$ cm, en revanche, cela marche du premier coup. Trois longueurs ne suffisent donc pas à faire un triangle : encore faut-il qu\'elles puissent se rejoindre. Sais-tu dire à l\'avance lesquelles conviennent, sans rien tracer ?<br/><br/>' +
        'Le triangle est la <strong>forme géométrique la plus simple</strong> que l\'on puisse tracer avec des segments : trois côtés, trois sommets, trois angles. Mais derrière cette simplicité se cachent des propriétés puissantes, utilisées partout dans le monde réel.<br/><br/>' +
        'Sa propriété fondamentale : la <strong>somme des angles intérieurs est toujours $180°$</strong>, quelle que soit la forme du triangle. <strong>Pourquoi $180°$ ?</strong> Si l\'on trace une droite parallèle au côté de base passant par le sommet opposé, les trois angles du triangle forment exactement un angle plat (alternes-internes). Connaître deux angles suffit donc toujours à trouver le troisième !<br/><br/>' +
        'L\'<strong>inégalité triangulaire</strong> ($c < a + b$) traduit une réalité physique : le chemin direct entre deux points est toujours plus court que le chemin qui passe par un troisième point. Il suffit de vérifier que le <strong>plus grand côté</strong> est strictement inférieur à la somme des deux autres. Si cette condition n\'est pas respectée, le triangle est tout simplement impossible à construire : essaie de fermer un triangle avec des baguettes de $3$ cm, $4$ cm et $10$ cm — tu n\'y arriveras pas !<br/><br/>' +
        'Dans la <strong>vie courante</strong>, le triangle est partout : la charpente d\'un toit, les pylônes électriques, les ponts en treillis, les grues de chantier… Pourquoi ? Parce que le triangle est la seule figure géométrique qui est <strong>indéformable</strong> : un carré peut s\'aplatir en losange, mais un triangle garde toujours sa forme. C\'est pour cela que les ingénieurs l\'utilisent dans toute structure qui doit résister à des forces.<br/><br/>' +
        'Les triangles <strong>isocèles</strong> (2 côtés égaux → 2 angles de base égaux) et <strong>équilatéraux</strong> (3 côtés égaux → angles de $60°$) ont des propriétés de symétrie particulières qui les rendent encore plus utiles en architecture et en design.',
      definitions: [
        { term: 'Triangle', def: 'Polygone à 3 côtés. La somme de ses angles intérieurs vaut toujours $180°$.' },
        { term: 'Inégalité triangulaire', def: 'Pour que trois longueurs $a$, $b$, $c$ forment un triangle, le plus grand côté doit être strictement inférieur à la somme des deux autres.' },
        { term: 'Triangle isocèle', def: 'Triangle ayant au moins deux côtés de même longueur. Les deux angles à la base sont égaux.' },
        { term: 'Triangle équilatéral', def: 'Triangle dont les trois côtés sont égaux. Les trois angles valent $60°$.' }
      ],
      example: {
        statement: 'Peut-on construire un triangle avec des côtés de $5$ cm, $7$ cm et $10$ cm ? Si oui, quelle est la nature du triangle ?',
        steps: [
          'Plus grand côté : $10$. Somme des deux autres : $5 + 7 = 12$. $10 < 12$ ✓ → triangle possible.',
          'Tous les côtés sont différents → triangle scalène (quelconque).'
        ],
        answer: 'Triangle scalène (quelconque)'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Types de triangles',
        title: 'Isocèle, équilatéral, rectangle : les marques conventionnelles',
        description: 'Les tics indiquent une égalité de longueur ; le petit carré indique un angle droit.',
        svg: `
          <svg viewBox="0 0 560 260" role="img" aria-labelledby="triangles-types-title triangles-types-desc">
            <title id="triangles-types-title">Trois types de triangles : isocele, equilateral, rectangle</title>
            <desc id="triangles-types-desc">Trois petits triangles cote a cote avec leurs marques conventionnelles : tics d'egalite sur les cotes egaux pour l'isocele et l'equilateral, petit carre d'angle droit pour le rectangle.</desc>
            <line class="grid-line" x1="20" y1="200" x2="530" y2="200"></line>

            <polygon points="40,200 90,80 140,200" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="40" y1="200" x2="90" y2="80"></line>
            <line class="frame-line" x1="90" y1="80" x2="140" y2="200"></line>
            <line class="frame-line" x1="40" y1="200" x2="140" y2="200"></line>
            <line class="axis" x1="59.5" y1="137.7" x2="70.5" y2="142.3"></line>
            <line class="axis" x1="109.5" y1="142.3" x2="120.5" y2="137.7"></line>
            <text class="annotation-label" x="90" y="228" text-anchor="middle">Isocèle</text>

            <polygon points="220,200 270,113.4 320,200" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="220" y1="200" x2="270" y2="113.4"></line>
            <line class="frame-line" x1="270" y1="113.4" x2="320" y2="200"></line>
            <line class="frame-line" x1="220" y1="200" x2="320" y2="200"></line>
            <line class="axis" x1="239.8" y1="153.7" x2="250.2" y2="159.7"></line>
            <line class="axis" x1="289.8" y1="159.7" x2="300.2" y2="153.7"></line>
            <line class="axis" x1="270" y1="194" x2="270" y2="206"></line>
            <text class="annotation-label" x="270" y="228" text-anchor="middle">Équilatéral</text>

            <polygon points="400,200 400,110 500,200" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="400" y1="200" x2="400" y2="110"></line>
            <line class="frame-line" x1="400" y1="200" x2="500" y2="200"></line>
            <line class="curve-main" x1="400" y1="110" x2="500" y2="200"></line>
            <path class="axis" d="M400,186 L414,186 L414,200"></path>
            <circle class="plot-point-alt" cx="400" cy="200" r="4"></circle>
            <circle class="plot-point-alt" cx="400" cy="110" r="4"></circle>
            <circle class="plot-point" cx="500" cy="200" r="4"></circle>
            <text class="annotation-label" x="382" y="217">A</text>
            <text class="annotation-label" x="382" y="106">B</text>
            <text class="annotation-label" x="506" y="217">C</text>
            <text class="annotation-label" x="450" y="228" text-anchor="middle">Rectangle</text>
          </svg>
        `,
        notes: [
          'Isocèle : les deux côtés marqués du même tic sont égaux, donc les deux angles à la base sont égaux.',
          'Équilatéral : les trois côtés portent le même tic, les trois angles valent 60 degrés.',
          'Rectangle : le petit carré signale l\'angle droit, opposé à l\'hypoténuse (en couleur).'
        ],
        reading: 'Les marques sur la figure (tics, carré) remplacent les mesures : elles suffisent à identifier le type de triangle sans mesurer.',
        caption: 'Les trois grandes familles de triangles et leurs marques conventionnelles.'
      },
      /* SCHEMAS SECONDAIRES — 2026-09-13. Une figure par malentendu :
         l'inegalite triangulaire vue comme un echec de fermeture, le role du
         PLUS GRAND cote, et la distinction base/sommet d'un isocele. Aucune
         quatrieme figure : la somme des angles est deja portee par la figure
         principale du chapitre. Conventions de la section 9 du cahier des
         charges ; proportions verifiees par le calcul, jamais a l'oeil. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Quand le triangle ne se ferme pas',
          title: 'Pourquoi certaines longueurs sont impossibles',
          description: 'Avec $3$ cm, $4$ cm et $10$ cm, le triangle ne peut pas exister : les deux petits côtés, même dépliés en ligne droite, <strong>n\'atteignent pas</strong> l\'extrémité du grand.',
          svg: `
            <svg viewBox="0 0 400 176" role="img" aria-labelledby="tri-ferme-title tri-ferme-desc">
              <title id="tri-ferme-title">Deux petits cotes trop courts pour fermer un triangle</title>
              <desc id="tri-ferme-desc">Un segment de 10 centimetres est trace horizontalement. Au-dessus, les deux autres cotes, de 3 et 4 centimetres, sont deplies bout a bout en ligne droite depuis l'extremite gauche : ensemble ils ne mesurent que 7 centimetres et s'arretent nettement avant l'extremite droite du grand cote. Un ecart de 3 centimetres reste a franchir, ce qui montre que le triangle ne peut pas se fermer.</desc>

              <!-- Echelle : 30 unites de viewBox par centimetre. Le grand cote
                   de 10 cm mesure donc 300 unites, de x=50 a x=350. Les deux
                   petits, 3 et 4 cm, font 90 et 120 unites : deplies bout a
                   bout ils s'arretent a x=50+210=260, soit 90 unites (3 cm)
                   avant l'extremite. C'est cet ecart que la figure montre. -->
              <line class="frame-line" x1="50" y1="120" x2="350" y2="120"></line>
              <text class="annotation-label" x="200" y="144" text-anchor="middle">10 cm</text>

              <!-- Les deux petits cotes, deplies en ligne droite au-dessus -->
              <line class="frame-line" x1="50" y1="70" x2="140" y2="70"></line>
              <text class="annotation-label" x="95" y="60" text-anchor="middle">3 cm</text>
              <line class="frame-line" x1="140" y1="70" x2="260" y2="70"></line>
              <text class="annotation-label" x="200" y="60" text-anchor="middle">4 cm</text>
              <circle class="plot-point" cx="140" cy="70" r="3"></circle>

              <!-- Les deux verticales de report, puis l'ecart qui reste. Un
                   seul trait porte l'etiquette : trois mots empiles au milieu
                   du dessin se liraient comme du texte tombe la par accident. -->
              <line class="grid-line" x1="50" y1="70" x2="50" y2="120"></line>
              <line class="grid-line" x1="260" y1="70" x2="260" y2="120"></line>
              <line class="guide-line" x1="260" y1="96" x2="350" y2="96"></line>
              <text class="label-soft" x="305" y="88" text-anchor="middle">il manque 3 cm</text>
            </svg>
          `,
          notes: [
            'Somme des deux petits côtés : $3 + 4 = 7$ cm.',
            'Le plus grand côté mesure $10$ cm, or $10 > 7$ : les deux petits ne se rejoignent jamais.',
            'Condition pour construire : le plus grand côté doit être <strong>strictement inférieur</strong> à la somme des deux autres.'
          ],
          reading: 'Imagine que tu fais pivoter les deux petits côtés autour de leurs extrémités, comme deux bras articulés. Même complètement dépliés, ils s\'arrêtent $3$ cm trop tôt : aucune position ne permet de les faire se toucher.',
          caption: 'Avec $3$ cm, $4$ cm et $10$ cm, les deux petits côtés réunis ($7$ cm) n\'atteignent pas le grand ($10$ cm).'
        },
        {
          theme: 'maths',
          kicker: 'Une seule inégalité à tester',
          title: 'C\'est le plus grand côté qui décide',
          description: 'Inutile de tester les trois sommes possibles : dès qu\'un côté est le plus long, les deux autres inégalités sont <strong>automatiquement vraies</strong>. Une seule vérification suffit.',
          svg: `
            <svg viewBox="0 0 400 178" role="img" aria-labelledby="tri-plusgrand-title tri-plusgrand-desc">
              <title id="tri-plusgrand-title">Les trois inegalites a comparer, dont une seule est utile</title>
              <desc id="tri-plusgrand-desc">Pour les longueurs 6, 8 et 13 centimetres, les trois inegalites sont representees par des barres horizontales. Les deux premieres, qui comparent un petit cote a la somme des deux autres, sont largement verifiees et donc sans interet. La troisieme, qui compare le plus grand cote de 13 centimetres a la somme 6 plus 8 egale 14 centimetres, se joue a un centimetre pres : c'est la seule qui decide.</desc>

              <!-- Echelle : 13 unites de viewBox par centimetre. Chaque ligne
                   compare un cote (barre du haut) a la somme des deux autres
                   (barre du bas). La longueur des barres est donc FIDELE, et
                   c'est ce qui rend visible que les deux premieres comparaisons
                   sont gagnees d'avance. -->
              <text class="tick-label" x="20" y="30" text-anchor="start">6 contre 8 + 13</text>
              <line class="grid-line" x1="170" y1="26" x2="248" y2="26"></line>
              <line class="frame-line" x1="170" y1="34" x2="443" y2="34"></line>
              <text class="tick-label" x="360" y="24" text-anchor="start">sans intérêt</text>

              <text class="tick-label" x="20" y="76" text-anchor="start">8 contre 6 + 13</text>
              <line class="grid-line" x1="170" y1="72" x2="274" y2="72"></line>
              <line class="frame-line" x1="170" y1="80" x2="417" y2="80"></line>
              <text class="tick-label" x="360" y="70" text-anchor="start">sans intérêt</text>

              <text class="tick-label" x="20" y="126" text-anchor="start">13 contre 6 + 8</text>
              <line class="frame-line" x1="170" y1="122" x2="339" y2="122"></line>
              <line class="frame-line" x1="170" y1="130" x2="352" y2="130"></line>
              <text class="label-soft" x="200" y="158" text-anchor="start">tout se joue ici : 13 est plus court que 14, donc ça passe</text>
            </svg>
          `,
          notes: [
            '$6 < 8 + 13 = 21$ : vrai, et de loin.',
            '$8 < 6 + 13 = 19$ : vrai, et de loin.',
            '$13 < 6 + 8 = 14$ : vrai de justesse — <strong>la seule inégalité qui informe</strong>.'
          ],
          reading: 'Compare les longueurs des barres : sur les deux premières lignes, la barre du bas dépasse énormément celle du haut, le test est gagné d\'avance. Sur la dernière, les deux barres sont presque de la même longueur : c\'est là que la réponse se décide.',
          caption: 'Des trois inégalités, seule celle qui porte sur le plus grand côté peut échouer.'
        },
        {
          theme: 'maths',
          kicker: 'Base ou sommet',
          title: 'Dans un triangle isocèle, quels angles sont égaux ?',
          description: 'Les deux angles égaux sont ceux qui s\'appuient sur la <strong>base</strong>, c\'est-à-dire sur le côté qui n\'est pas codé. L\'angle du sommet, lui, est différent des deux autres.',
          svg: `
            <svg viewBox="0 0 400 186" role="img" aria-labelledby="tri-iso-title tri-iso-desc">
              <title id="tri-iso-title">Triangle isocele : angle au sommet et angles de base</title>
              <desc id="tri-iso-desc">Un triangle isocele pointe vers le haut. Ses deux cotes obliques portent chacun un tic d'egalite, ce qui indique qu'ils sont de meme longueur. L'angle au sommet, en haut, mesure 40 degres. Les deux angles de base, en bas a gauche et en bas a droite, sont marques d'un point d'interrogation car ce sont eux que l'on cherche ; ils sont egaux entre eux et valent chacun 70 degres.</desc>

              <!-- Triangle isocele de sommet (200,30) et de base de (156.32,150)
                   a (243.68,150).

                   LES COORDONNEES SONT CALCULEES, PAS ESTIMEES (correction du
                   2026-09-13). Le premier jet posait la base de 110 a 290, ce
                   qui donnait un angle au sommet de 73,74 degres et des angles
                   de base de 53,13 — alors que la figure ANNONCE 40 et 70. Le
                   dessin contredisait donc son propre texte, et rien ne se
                   voyait a la relecture : c'est le script de recette, qui
                   recalcule les angles par produit scalaire, qui l'a signale.

                   Construction juste : l'angle au sommet vaut 40 degres, donc
                   le demi-angle vaut 20 degres et la demi-base vaut
                   h x tan(20 degres) = 120 x 0,36397 = 43,68 unites. D'ou une
                   base de 200 - 43,68 a 200 + 43,68. Verification apres arrondi
                   a deux decimales : sommet 40,003 degres, base 69,999 degres. -->
              <polygon class="frame-line" points="200,30 243.68,150 156.32,150" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)"></polygon>

              <!-- Tics d'egalite sur les deux cotes obliques, poses au MILIEU de
                   chacun et PERPENDICULAIREMENT a lui (coordonnees calculees a
                   partir de la normale unitaire, comme le reste de la figure). -->
              <line class="frame-line" x1="184.74" y1="92.39" x2="171.58" y2="87.61"></line>
              <line class="frame-line" x1="228.42" y1="87.61" x2="215.26" y2="92.39"></line>

              <!-- L'angle au sommet, chiffre : c'est la donnee. -->
              <text class="annotation-label" x="200" y="66" text-anchor="middle">40°</text>
              <text class="label-soft" x="200" y="20" text-anchor="middle">sommet</text>

              <!-- Les angles de base, marques d'un point d'interrogation : ce
                   sont eux que l'on cherche, la figure ne les chiffre donc pas. -->
              <text class="annotation-label" x="178" y="140" text-anchor="middle">?</text>
              <text class="annotation-label" x="222" y="140" text-anchor="middle">?</text>
              <text class="label-soft" x="200" y="172" text-anchor="middle">base : les deux angles égaux</text>
            </svg>
          `,
          notes: [
            'Les deux côtés codés sont égaux : le triangle est isocèle.',
            'Les angles égaux sont ceux qui s\'appuient sur la <strong>base</strong>, jamais celui du sommet.',
            'Calcul en deux temps : $180 - 40 = 140$, puis $140 \\div 2 = 70$. Contrôle : $70 + 70 + 40 = 180$ ✓'
          ],
          reading: 'Suis du doigt les deux côtés qui portent un tic : ils partent tous les deux du sommet. Les angles égaux sont donc à l\'autre bout de ces côtés, en bas — jamais celui d\'où ils partent.',
          caption: 'Angle au sommet $40°$ ; les deux angles de base, égaux, valent $70°$ chacun.'
        }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Vérifier l\'inégalité triangulaire</strong> : le plus grand côté < somme des deux autres.',
          '<strong>Identifier le type</strong> : isocèle (2 côtés égaux), équilatéral (3 côtés égaux), rectangle (angle droit, repéré au rapporteur ou à l\'équerre).',
          '<strong>Calculer un angle manquant</strong> : angle inconnu = $180° - $ (somme des deux autres angles).'
        ]
      },
      formulas: [
        'Somme des angles : $\\hat{A} + \\hat{B} + \\hat{C} = 180°$',
        'Inégalité triangulaire : $c < a + b$ (le plus grand côté)',
        'Triangle isocèle : deux côtés égaux ⟹ deux angles à la base égaux',
        'Triangle équilatéral : $a = b = c$ ⟹ $\\hat{A} = \\hat{B} = \\hat{C} = 60°$'
      ],
      recap: [
        'La somme des angles d\'un triangle est toujours $180°$.',
        'Le plus grand côté doit être strictement inférieur à la somme des deux autres.',
        'Triangle isocèle = 2 côtés égaux = 2 angles de base égaux.',
        'Triangle équilatéral = 3 côtés égaux = 3 angles de $60°$.'
      ],
      piege: 'Piège : ne vérifier l\'inégalité triangulaire que pour un seul cas. Il faut que LE PLUS GRAND côté soit inférieur à la somme des deux autres. Si $c$ est le plus grand, seule la vérification $c < a + b$ est nécessaire.'
    },

    quiz: [
      {
        q: 'Peut-on construire un triangle avec les côtés $4$ cm, $7$ cm et $12$ cm ?',
        options: ['Oui', 'Non, $12 \\geq 4 + 7$', 'Oui, si le triangle est isocèle', 'Non, les angles ne conviendraient pas'],
        answer: 1,
        correction: '$12 \\geq 4 + 7 = 11$. L\'inégalité triangulaire n\'est pas vérifiée ($12 \\not< 11$). On ne peut pas former ce triangle.'
      },
      {
        q: 'Dans un triangle $ABC$, $\\hat{A} = 65°$ et $\\hat{B} = 80°$. Combien vaut $\\hat{C}$ ?',
        options: ['$35°$', '$145°$', '$25°$', '$45°$'],
        answer: 0,
        correction: '$\\hat{C} = 180° - 65° - 80° = 35°$. La somme des angles d\'un triangle vaut toujours $180°$.'
      },
      {
        q: 'Un élève affirme qu\'un triangle avec des côtés $5$ cm, $5$ cm et $10$ cm est isocèle. Est-ce possible ?',
        options: [
          'Oui, car deux côtés sont égaux ($5$ cm = $5$ cm).',
          'Non : $10 = 5 + 5$, donc l\'inégalité triangulaire n\'est pas stricte ($10 \\not< 10$). Ce triangle est dégénéré (les trois points sont alignés).',
          'Oui, un triangle isocèle peut avoir deux côtés égaux à la somme du troisième.',
          'Non, un triangle isocèle doit avoir des côtés de longueurs différentes.'
        ],
        answer: 1,
        correction: 'Pour qu\'un triangle existe, il faut que chaque côté soit <em>strictement</em> inférieur à la somme des deux autres : $10 < 5 + 5 = 10$ est faux ($10 = 10$, pas $<$).'
      }
    ],

    /* ELARGISSEMENT DU 2026-09-13.

       ETAT DE DEPART : le generateur ne rendait qu'UNE tache, le troisieme
       angle par la somme, declinee en quatre contextes — 4 moules, 12 enonces,
       aucune banque pour le professeur. L'evaluation, elle, teste l'inegalite
       triangulaire (deux fois), la nature d'un triangle et les angles d'un
       isocele : trois des cinq questions n'avaient AUCUN exercice
       d'entrainement correspondant, et les remediations de la fiche professeur
       n'avaient donc nulle part ou renvoyer.

       On ajoute les deux taches manquantes, chacune adossee a une erreur
       frequente reelle :
         - l'inegalite triangulaire, ou l'eleve ne teste pas le PLUS GRAND cote ;
         - les angles d'un triangle isocele, ou il confond base et sommet.
       Les tirages sont construits pour que les deux issues (constructible ou
       non) se presentent, faute de quoi l'eleve repondrait « oui » par reflexe. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['somme', 'inegalite', 'isocele']);

        if (tache === 'inegalite') {
          const ctx = pick([
            { objet: 'trois baguettes de bois', emoji: '🪵' },
            { objet: 'trois barres de meccano', emoji: '🔩' },
            { objet: 'trois poutres de charpente', emoji: '🏠' },
            { objet: 'trois segments tracés au compas', emoji: '📐' }
          ]);
          /* Un tirage sur deux est IMPOSSIBLE a construire : sans cela, l'eleve
             qui repond toujours « oui » aurait toujours raison, et l'exercice
             ne mesurerait rien. La reponse attendue est 1 (constructible) ou
             0 (impossible), format numerique impose par le chapitre. */
          const a = rand(3, 9);
          const b = rand(3, 9);
          const possible = rand(0, 1) === 1;
          // Le plus grand cote : soit strictement plus petit que a + b, soit
          // strictement plus grand — le cas d'egalite (triangle plat) est
          // ecarte, il demanderait une discussion qui n'est pas de ce niveau.
          const c = possible ? Math.max(a, b) + rand(1, Math.max(1, Math.min(a, b) - 1))
                             : a + b + rand(1, 4);
          return {
            statement: `${ctx.emoji} On dispose de ${ctx.objet} mesurant $${a}$ cm, $${b}$ cm et $${c}$ cm.<br/>Peut-on former un triangle avec ces trois longueurs ? Réponds $1$ pour oui, $0$ pour non.`,
            answer: possible ? 1 : 0,
            tolerance: 0,
            hint: `Repère le <strong>plus grand</strong> côté, ici $${Math.max(a, b, c)}$ cm.<br/><br/>Compare-le à la somme des deux autres : une seule inégalité à tester, pas trois.`,
            /* La PREMIERE ligne du corrige sert d'intertitre a la banque du
               professeur (titreDeGroupe, scripts/manuel/chapitre.js) : ses
               nombres et ses formules en sont retires. Elle doit donc nommer la
               METHODE, jamais porter une valeur — « Le plus grand cote mesure
               $11$ cm » s'imprimait « Le plus grand cote mesure cm », constate
               sur la page rendue le 2026-09-13. */
            solution: [
              `On compare le plus grand côté à la somme des deux autres.`,
              `Le plus grand côté mesure $${Math.max(a, b, c)}$ cm.`,
              `La somme des deux autres vaut $${a + b + c - Math.max(a, b, c)}$ cm.`,
              possible
                ? `$${Math.max(a, b, c)} < ${a + b + c - Math.max(a, b, c)}$ : l'inégalité triangulaire est vérifiée, le triangle existe.`
                : `$${Math.max(a, b, c)} > ${a + b + c - Math.max(a, b, c)}$ : les deux petits côtés sont trop courts pour se rejoindre, le triangle est impossible.`
            ]
          };
        }

        if (tache === 'isocele') {
          const ctx = pick([
            { objet: 'fanion isocèle', emoji: '🚩' },
            { objet: 'pignon de maison isocèle', emoji: '🏡' },
            { objet: 'panneau isocèle', emoji: '🛑' },
            { objet: 'voile de cerf-volant isocèle', emoji: '🪁' }
          ]);
          /* Angle au sommet PAIR : les deux angles de base restent entiers, le
             chapitre portant sur les angles et non sur la division decimale. */
          const sommet = 2 * rand(10, 70);
          const base = (180 - sommet) / 2;
          return {
            statement: `${ctx.emoji} Un ${ctx.objet} a un angle au sommet de $${sommet}°$.<br/>Combien mesure chacun de ses deux angles de base (en degrés) ?`,
            answer: base,
            tolerance: 0,
            unit: '°',
            hint: `Les deux angles de <strong>base</strong> sont égaux entre eux.<br/><br/>Retire d'abord l'angle du sommet à $180°$, puis partage ce qui reste en deux.`,
            // Meme raison : la premiere ligne nomme la methode, la valeur suit.
            solution: [
              `Dans un triangle isocèle, les deux angles de base sont égaux.`,
              `Somme des angles $= 180°$, donc ils valent ensemble $180 - ${sommet} = ${180 - sommet}°$.`,
              `Ils sont égaux, donc chacun vaut $${180 - sommet} \\div 2 = ${fr(base)}°$.`,
              `Vérification : $${fr(base)} + ${fr(base)} + ${sommet} = 180°$ ✓`
            ]
          };
        }

        const ctx = pick([
          { shape: 'triangle de signalisation', emoji: '⚠️' },
          { shape: 'toiture triangulaire', emoji: '🏠' },
          { shape: 'voile de bateau', emoji: '⛵' },
          { shape: 'triangle de géométrie', emoji: '📐' }
        ]);
        const a = rand(30, 70);
        const b = rand(30, 70);
        const c = 180 - a - b;
        return {
          statement: `${ctx.emoji} Dans un ${ctx.shape}, deux angles mesurent $${a}°$ et $${b}°$. Combien mesure le troisième angle (en degrés) ?`,
          /* La figure dessine les DEUX angles connus a leur vraie mesure et
             marque le troisieme d'un point d'interrogation : l'eleve peut
             estimer avant de calculer, ce qui est le remede a l'erreur
             « additionner au lieu de retrancher ». La figure pose la question,
             elle ne la resout pas. */
          figure: figureTriangleAngles(a, b),
          answer: c,
          tolerance: 0,
          unit: '°',
          hint: `La somme des angles d'un triangle est $180°$. Donc le troisième angle vaut $180 - (${a} + ${b})$.`,
          solution: [
            `Somme des angles = $180°$`,
            `Troisième angle $= 180 - (${a} + ${b}) = ${c}°$`
          ]
        };
      }
    },
    probleme: {
      context: 'Un architecte dessine une charpente triangulaire avec trois poutres mesurant $5$ m, $8$ m et $11$ m.',
      tasks: [
        'Vérifier que ces trois longueurs forment bien un triangle (inégalité triangulaire).',
        'Quelle est la nature de ce triangle (isocèle, équilatéral ou scalène) au vu des longueurs des trois côtés ?',
        'Si l\'un des angles de la charpente mesure $40°$ et un autre $65°$, quel est le troisième angle ?'
      ],
      solutions: [
        '$11 < 5 + 8 = 13$ ✓. L\'inégalité est vérifiée, le triangle existe.',
        'Les trois côtés ($5$, $8$ et $11$ m) sont tous différents : c\'est un triangle scalène (quelconque).',
        '$180 - 40 - 65 = 75°$.'
      ],
      finalAnswer: 'La charpente forme un triangle scalène ; le troisième angle de la charpente est $75°$.'
    },

    evaluation: {
      title: 'Évaluation — Triangles',
      duration: '20 min',
      questions: [
        {
          statement: 'Dans un triangle $ABC$, $\\hat{A} = 72°$ et $\\hat{B} = 53°$. Combien mesure $\\hat{C}$ (en degrés) ?',
          type: 'numeric',
          answer: 55,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: '$\\hat{C} = 180° - 72° - 53° = 55°$.'
        },
        {
          statement: 'Peut-on construire un triangle avec des côtés de $3$ cm, $5$ cm et $9$ cm ?',
          type: 'multiple-choice',
          options: [
            'Oui, car $3 + 5 + 9 = 17$.',
            'Non, car $9 > 3 + 5 = 8$ : l\'inégalité triangulaire n\'est pas vérifiée.',
            'Oui, si on utilise un rapporteur.',
            'Oui, car $9 < 3 \\times 5 = 15$.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le plus grand côté ($9$) doit être strictement inférieur à la somme des deux autres ($3 + 5 = 8$). Or $9 > 8$, donc ce triangle n\'existe pas.'
        },
        {
          statement: 'Un triangle a des angles de $60°$, $60°$ et $60°$. De quel type est-il ?',
          type: 'multiple-choice',
          options: [
            'Triangle rectangle.',
            'Triangle isocèle.',
            'Triangle équilatéral.',
            'Triangle quelconque.'
          ],
          answer: 2,
          points: 2,
          correction: 'Si les trois angles sont égaux ($60°$), les trois côtés sont aussi égaux : c\'est un triangle équilatéral.'
        },
        {
          statement: 'Un triangle isocèle a un angle au sommet de $40°$. Combien mesure chaque angle de la base (en degrés) ?',
          type: 'numeric',
          answer: 70,
          tolerance: 0,
          unit: '°',
          points: 2,
          correction: 'Les deux angles de la base sont égaux. Soit $x$ leur mesure : $40 + 2x = 180$, donc $2x = 140$ et $x = 70°$.'
        },
        /* QUESTION REECRITE LE 2026-09-13.

           Elle redemandait de trancher une inegalite triangulaire, exactement
           comme la question 2, avec d'autres nombres : deux questions sur cinq
           pour une meme tache, et aucune information supplementaire sur
           l'eleve. Surtout, l'ouvrage n'evaluait « chercher » nulle part alors
           que la grille de suivi photocopiable en imprime la colonne.

           La nouvelle question n'a pas de reponse immediate : il faut essayer
           des valeurs et les encadrer par les deux inegalites, ce qui est
           precisement « chercher ». Elle reste a la portee d'un eleve de
           cinquieme parce que les nombres sont petits et que la reponse se
           compte sur les doigts. Le distracteur 3 est celui de l'eleve qui
           oublie que le troisieme cote doit AUSSI depasser la difference. */
        {
          statement: 'Un triangle a deux côtés de $4$ cm et $9$ cm. Le troisième côté mesure un nombre <strong>entier</strong> de centimètres. Combien de longueurs différentes sont possibles pour ce troisième côté ?',
          type: 'multiple-choice',
          options: [
            'Une seule : $12$ cm.',
            '$7$ longueurs : de $6$ cm à $12$ cm.',
            '$12$ longueurs : de $1$ cm à $12$ cm.',
            'Une infinité, car un côté peut mesurer n\'importe quoi.'
          ],
          answer: 1,
          points: 2,
          correction: 'Appelons $c$ le troisième côté. Il faut à la fois que $c$ ne soit pas trop grand ' +
            '($c < 4 + 9 = 13$) et qu\'il ne soit pas trop petit — sinon c\'est le côté de $9$ cm qui deviendrait ' +
            'trop grand, et il faut donc $9 < 4 + c$, c\'est-à-dire $c > 5$. ' +
            'Les entiers qui conviennent sont donc $6, 7, 8, 9, 10, 11$ et $12$ : <strong>$7$ longueurs</strong>. ' +
            'La réponse 3 oublie la seconde condition : avec $c = 2$ par exemple, les côtés $2$ et $4$ ne se ' +
            'rejoindraient jamais autour du côté de $9$ cm.'
        }
      ]
    }
  });
