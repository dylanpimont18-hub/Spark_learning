/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-equations-inequations.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-equations-inequations',
    level: 2, subject: 'maths',
    icon: '⚖️',
    title: 'Équations et inéquations du 1er degré',
    subtitle: 'Résoudre et représenter les solutions',
    keywords: ['Équation', 'Inéquation', 'Intervalle solution', 'Premier degré'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Une équation du premier degré
         établit une condition d'égalité sur une inconnue x » : définition
         pure, entrée proscrite par le cahier des charges.

         DIFFICULTÉ PROPRE AU CHAPITRE : l'équation est connue depuis la
         quatrième, donc toute situation d'équation se résout SANS rien
         apprendre de neuf. L'ouverture porte donc sur ce qui est réellement
         nouveau cette année, l'INÉQUATION, et sur le fait qu'elle change la
         NATURE de la réponse : on ne cherche plus un nombre, on cherche un
         ensemble. La question posée — « quel est le plus grand nombre de
         personnes ? » — a une réponse unique, mais la question complète
         (« lesquels conviennent ? ») en a une infinité, et c'est ce saut que
         l'élève n'a jamais fait.

         Entrée non décorative : l'ascenseur est un vrai cas de contrainte,
         et la surcharge est précisément ce que l'inéquation décrit. */
      intro: 'Dans un ascenseur, une plaque annonce une charge maximale de $525$ kg. Chaque personne pèse en moyenne $75$ kg.<br/><br/>' +
        'Combien de personnes peuvent monter ?<br/><br/>' +
        'Tu trouves sept sans difficulté, parce que $7 \\times 75 = 525$. Mais regarde ce que tu viens vraiment de répondre : <strong>sept personnes ou moins</strong>. Six conviennent aussi, et cinq, et quatre. La plaque n\'annonce pas un nombre à atteindre, elle annonce une limite à ne pas dépasser.<br/><br/>' +
        'C\'est là que ce chapitre se sépare de tout ce que tu as fait jusqu\'ici. Une <strong>équation</strong> demande quel nombre rend une égalité vraie, et elle a en général une seule réponse. Une <strong>inéquation</strong> demande quels nombres respectent une contrainte, et elle en a presque toujours une <strong>infinité</strong>.<br/><br/>' +
        'La réponse change alors de nature : ce n\'est plus un nombre, c\'est un <strong>ensemble</strong> de nombres. Il faut donc une écriture capable de désigner d\'un seul coup tous les nombres inférieurs ou égaux à sept — c\'est ce que fait la notation en <strong>intervalle</strong>.<br/><br/>' +
        'Tu sais déjà résoudre une équation depuis la quatrième, et les techniques sont les mêmes ici. Une seule règle est nouvelle, et elle surprend tout le monde la première fois : multiplier ou diviser par un nombre <strong>négatif</strong> retourne le sens de l\'inégalité. Tu verras d\'où cela vient, et pourquoi ce n\'est pas une bizarrerie.',
      definitions: [
        { term: 'Équation du 1er degré', def: 'Relation $ax + b = 0$ où $a \\neq 0$. Elle admet une unique solution : $x = -b/a$.' },
        { term: 'Inéquation', def: 'Relation d\'ordre portant sur une inconnue ($ax + b < 0$, $\\geq$, etc.). L\'ensemble des solutions est un intervalle.' },
        { term: 'Ensemble solution', def: 'L\'ensemble de toutes les valeurs de $x$ qui vérifient l\'équation ou l\'inéquation. Noté sous forme d\'intervalle pour les inéquations.' },
        { term: 'Valeur test', def: 'Valeur numérique substituée dans l\'inéquation pour vérifier que la solution est correcte.' }
      ],
      method: {
        title: 'Résoudre une inéquation',
        steps: [
          'Isoler l\'inconnue en appliquant les mêmes opérations des deux côtés. <strong>Exemple :</strong> $3x + 7 > 1$ → $3x > -6$.',
          'Multiplier ou diviser par un nombre négatif inverse le sens de l\'inégalité. <strong>Exemple :</strong> $-2x > 6$ → on divise par $-2$ et on inverse : $x < -3$.',
          'Exprimer la solution en notation intervalle. <strong>Exemple :</strong> $x < -3$ s\'écrit $]-\\infty ; -3[$.',
          'Vérifier avec une valeur test. <strong>Exemple :</strong> Prendre $x = -5$ (dans $]-\\infty ; -3[$) : $-2 \\times (-5) = 10 > 6$ ✓.'
        ]
      },
      example: {
        statement: 'Résoudre l\'inéquation $-5x + 3 \\geq 18$.',
        steps: [
          'Isoler le terme en $x$ : $-5x \\geq 18 - 3$, soit $-5x \\geq 15$.',
          'Diviser par $-5$ (négatif !) et inverser le sens : $x \\leq \\dfrac{15}{-5} = -3$.',
          'Ensemble solution : $]-\\infty ; -3]$.',
          'Vérification : pour $x = -4$ (dans l\'intervalle) : $-5 \\times (-4) + 3 = 23 \\geq 18$ ✓.'
        ],
        answer: '$S = ]-\\infty ; -3]$.'
      },
      formulas: [
        '$ax + b = 0 \\Rightarrow x = -\\dfrac{b}{a}$ (si $a \\ne 0$)',
        'Si $a > 0$ : $ax < c \\Rightarrow x < \\dfrac{c}{a}$',
        'Si $a < 0$ : $ax < c \\Rightarrow x > \\dfrac{c}{a}$ (inversion !)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Droite graduée',
        title: 'L\'ensemble solution de −5x + 3 ≥ 18',
        description: 'La solution de l\'inéquation résolue dans l\'exemple du cours ($x \\leq -3$) représentée sur une droite graduée : cercle rempli en $-3$ (borne incluse) et zone hachurée vers $-\\infty$.',
        svg: `
          <svg viewBox="0 0 400 150" role="img" aria-labelledby="ineq2nde-title ineq2nde-desc">
            <title id="ineq2nde-title">Droite graduee : ensemble solution de l'inequation</title>
            <desc id="ineq2nde-desc">Droite graduee de -6 a 0, avec un cercle rempli au point -3 car l'inegalite est large, et une portion hachuree partant de -3 vers la gauche jusqu'a moins l'infini, representant l'ensemble des solutions x inferieur ou egal a -3.</desc>
            <defs>
              <marker id="arrow-2nde-eq-ineq" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="axis" x1="15" y1="80" x2="385" y2="80" marker-start="url(#arrow-2nde-eq-ineq)" marker-end="url(#arrow-2nde-eq-ineq)"></line>

            <line class="grid-line" x1="45" y1="75" x2="45" y2="85"></line>
            <text class="tick-label" x="45" y="102" text-anchor="middle">-6</text>
            <line class="grid-line" x1="90" y1="75" x2="90" y2="85"></line>
            <text class="tick-label" x="90" y="102" text-anchor="middle">-5</text>
            <line class="grid-line" x1="135" y1="75" x2="135" y2="85"></line>
            <text class="tick-label" x="135" y="102" text-anchor="middle">-4</text>
            <line class="grid-line" x1="180" y1="75" x2="180" y2="85"></line>
            <text class="annotation-label" x="180" y="102" text-anchor="middle">-3</text>
            <line class="grid-line" x1="225" y1="75" x2="225" y2="85"></line>
            <text class="tick-label" x="225" y="102" text-anchor="middle">-2</text>
            <line class="grid-line" x1="270" y1="75" x2="270" y2="85"></line>
            <text class="tick-label" x="270" y="102" text-anchor="middle">-1</text>
            <line class="grid-line" x1="315" y1="75" x2="315" y2="85"></line>
            <text class="tick-label" x="315" y="102" text-anchor="middle">0</text>

            <line class="curve-main" x1="174" y1="80" x2="55" y2="80" marker-end="url(#arrow-2nde-eq-ineq)"></line>
            <line x1="62" y1="72" x2="74" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="82" y1="72" x2="94" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="102" y1="72" x2="114" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="122" y1="72" x2="134" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="142" y1="72" x2="154" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>
            <line x1="162" y1="72" x2="174" y2="88" stroke="var(--diagram-accent)" stroke-width="2" stroke-linecap="round"></line>

            <circle class="plot-point" cx="180" cy="80" r="6"></circle>

            <text class="annotation-label" x="115" y="55" text-anchor="middle">x ≤ -3</text>
            <text class="label-soft" x="35" y="60" text-anchor="middle">-∞</text>
            <text class="axis-label" x="368" y="70">x</text>
          </svg>
        `,
        notes: [
          'Le cercle est <strong>fermé</strong> (rempli) en $-3$ car l\'inégalité est large ($\\geq$) : $-3$ lui-même fait partie de la solution.',
          'Les hachures et la flèche s\'étendent vers la gauche ($-\\infty$) car $x$ doit être inférieur ou égal à $-3$.',
          'Notation : $x \\in\\, ]-\\infty\\,;\\,-3]$ — le crochet est tourné vers l\'intérieur du côté de $-3$ car la borne est incluse.'
        ],
        reading: 'Repère le cercle rempli en $-3$ : il signale une borne incluse. La zone hachurée à sa gauche représente toutes les valeurs solutions.',
        caption: 'Ensemble solution de l\'inéquation $-5x + 3 \\geq 18$ résolue dans l\'exemple du cours, soit $x \\in\\, ]-\\infty\\,;\\,-3]$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Principe du cahier des charges (section 9) : une figure par
         MALENTENDU, pas une figure par formule. Ce chapitre en compte trois
         qui coûtent des points toute l'année, et la fiche professeur les
         nomme :
           1. on divise par un négatif et on oublie d'inverser le sens ;
           2. on confond la BORNE (un nombre) et l'ENSEMBLE (une infinité) ;
           3. « au plus » et « au moins » reçoivent le mauvais symbole.

         La quatrième erreur de la fiche — changer un terme de membre sans
         changer son signe — reste SANS figure, délibérément : c'est une
         faute de geste, qui se corrige en refaisant le calcul ligne à ligne,
         et un dessin n'y ajouterait rien. Une figure par malentendu ne
         signifie pas une figure par erreur listée.

         TOUTES les coordonnées sortent d'un calcul, jamais de l'œil, et sont
         vérifiées par scripts/manuel/tests/diagrams-2nde.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Diviser par un négatif retourne l\'inégalité',
          description: 'Les deux droites ci-dessous sont <strong>identiques</strong> : même échelle, même origine, mêmes graduations. Seul change le côté colorié.<br/><br/>En haut, les nombres qui vérifient $-2x < 6$. En bas, ce que l\'on obtient en divisant par $-2$ <strong>sans</strong> retourner le symbole. Les deux zones n\'ont aucun point commun : l\'une est exactement le contraire de l\'autre.',
          svg: `
            <svg viewBox="0 0 320 210" role="img" aria-labelledby="ineq-inv-title ineq-inv-desc">
              <title id="ineq-inv-title">Deux droites graduees identiques, deux zones opposees</title>
              <desc id="ineq-inv-desc">Deux droites graduees sont superposees, avec la meme echelle et la meme origine, graduees de moins cinq a deux. Sur la droite du haut, la zone coloriee part de moins trois et s'etend vers la droite : ce sont les solutions de moins deux x inferieur a six, c'est-a-dire x superieur a moins trois. Sur la droite du bas, la zone coloriee part de moins trois et s'etend vers la gauche : c'est le resultat que l'on obtient en divisant par moins deux sans retourner le symbole. Les deux zones n'ont aucun point commun et sont exactement complementaires l'une de l'autre.</desc>
              <defs>
                <marker id="fl-ineq-inv" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Echelle COMMUNE aux deux droites : x = 0 a l'abscisse 200,
                   30 unites de viewBox par unite. C'est le patron
                   « comparaison » : l'echelle ne doit jamais faire partie des
                   differences visibles, sans quoi l'oeil la lit comme un
                   argument. -->

              <!-- DROITE DU HAUT : la bonne reponse, x > -3. -->
              <text class="annotation-label" x="50" y="36" text-anchor="start">le bon calcul</text>
              <line class="axis" x1="40" y1="70" x2="285" y2="70" marker-end="url(#fl-ineq-inv)"></line>
              <line class="grid-line" x1="50" y1="65" x2="50" y2="75"></line>
              <line class="grid-line" x1="80" y1="65" x2="80" y2="75"></line>
              <line class="grid-line" x1="110" y1="65" x2="110" y2="75"></line>
              <line class="grid-line" x1="140" y1="65" x2="140" y2="75"></line>
              <line class="grid-line" x1="170" y1="65" x2="170" y2="75"></line>
              <line class="grid-line" x1="200" y1="65" x2="200" y2="75"></line>
              <line class="grid-line" x1="230" y1="65" x2="230" y2="75"></line>
              <line class="grid-line" x1="260" y1="65" x2="260" y2="75"></line>
              <text class="tick-label" x="50" y="88" text-anchor="middle">-5</text>
              <text class="annotation-label" x="110" y="88" text-anchor="middle">-3</text>
              <text class="tick-label" x="200" y="88" text-anchor="middle">0</text>
              <text class="tick-label" x="260" y="88" text-anchor="middle">2</text>
              <line class="curve-main" x1="110" y1="70" x2="272" y2="70" marker-end="url(#fl-ineq-inv)"></line>
              <circle class="plot-point-alt" cx="110" cy="70" r="5"></circle>
              <text class="annotation-label" x="150" y="58" text-anchor="start">x &gt; -3</text>

              <!-- DROITE DU BAS : l'erreur, x < -3. Meme origine, meme pas. -->
              <text class="label-soft" x="50" y="136" text-anchor="start">si on oublie de retourner le symbole</text>
              <line class="axis" x1="40" y1="170" x2="285" y2="170" marker-end="url(#fl-ineq-inv)"></line>
              <line class="grid-line" x1="50" y1="165" x2="50" y2="175"></line>
              <line class="grid-line" x1="80" y1="165" x2="80" y2="175"></line>
              <line class="grid-line" x1="110" y1="165" x2="110" y2="175"></line>
              <line class="grid-line" x1="140" y1="165" x2="140" y2="175"></line>
              <line class="grid-line" x1="170" y1="165" x2="170" y2="175"></line>
              <line class="grid-line" x1="200" y1="165" x2="200" y2="175"></line>
              <line class="grid-line" x1="230" y1="165" x2="230" y2="175"></line>
              <line class="grid-line" x1="260" y1="165" x2="260" y2="175"></line>
              <text class="tick-label" x="50" y="188" text-anchor="middle">-5</text>
              <text class="annotation-label" x="110" y="188" text-anchor="middle">-3</text>
              <text class="tick-label" x="200" y="188" text-anchor="middle">0</text>
              <text class="tick-label" x="260" y="188" text-anchor="middle">2</text>
              <line class="guide-line" x1="110" y1="170" x2="45" y2="170" marker-end="url(#fl-ineq-inv)"></line>
              <circle class="plot-point-alt" cx="110" cy="170" r="5"></circle>
              <text class="label-soft" x="122" y="158" text-anchor="start">x &lt; -3</text>
            </svg>
          `,
          notes: [
            'Teste $x = 0$ dans $-2x < 6$ : on obtient $0 < 6$, qui est vrai. Donc $0$ est bien une solution — et $0$ se trouve dans la zone du haut, pas dans celle du bas.',
            'Ce test d\'une seule valeur suffit à trancher entre les deux dessins, sans refaire le calcul. Prends l\'habitude de le faire : il coûte trois secondes.',
            'La règle, une fois pour toutes : multiplier ou diviser les deux membres par un nombre <strong>négatif</strong> retourne le symbole. Additionner ou soustraire ne le retourne jamais.'
          ],
          reading: 'Pose ton doigt sur $0$ et regarde les deux droites. En haut, $0$ est dans la zone coloriée ; en bas, il n\'y est pas. Comme $x = 0$ vérifie bien l\'inéquation de départ, c\'est le dessin du haut qui dit vrai. Tu viens de vérifier ton résultat sans rien recalculer.',
          caption: 'L\'inéquation $-2x < 6$ a pour solutions $x > -3$ : diviser par $-2$ retourne le symbole.'
        },
        {
          theme: 'maths',
          kicker: 'Deux objets, pas un',
          title: 'La borne est un nombre, la solution est un intervalle',
          description: 'Beaucoup de copies s\'arrêtent à « $x = 4$ » et perdent tous les points de la question.<br/><br/>Or $4$ n\'est pas la réponse : c\'est l\'endroit où la réponse <strong>commence</strong>. La solution, elle, contient $4$, mais aussi $4{,}1$, $7$, $250$ — une infinité de nombres.',
          svg: `
            <svg viewBox="0 0 400 190" role="img" aria-labelledby="ineq-borne-title ineq-borne-desc">
              <title id="ineq-borne-title">Une borne isolee comparee a un intervalle entier</title>
              <desc id="ineq-borne-desc">Deux droites graduees de zero a sept, de meme echelle et de meme origine. Sur la droite du haut, un seul point est marque, a l'abscisse quatre : c'est la borne. Sur la droite du bas, un trait epais part du meme point quatre et s'etend vers la droite jusqu'au bord du dessin, avec une fleche : c'est l'ensemble des solutions. Trois valeurs d'exemple, quatre virgule un, cinq et sept, sont marquees sur ce trait pour montrer qu'elles en font toutes partie.</desc>
              <defs>
                <marker id="fl-ineq-borne" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- Echelle commune : x = 0 a l'abscisse 70, 40 unites par
                   unite. Les deux droites sont rigoureusement superposables :
                   seul l'objet dessine dessus change. -->

              <!-- HAUT : la borne, un point unique. -->
              <text class="label-soft" x="70" y="32" text-anchor="start">la borne : un seul nombre</text>
              <line class="axis" x1="60" y1="66" x2="375" y2="66" marker-end="url(#fl-ineq-borne)"></line>
              <line class="grid-line" x1="70" y1="61" x2="70" y2="71"></line>
              <line class="grid-line" x1="150" y1="61" x2="150" y2="71"></line>
              <line class="grid-line" x1="230" y1="61" x2="230" y2="71"></line>
              <line class="grid-line" x1="310" y1="61" x2="310" y2="71"></line>
              <text class="tick-label" x="70" y="84" text-anchor="middle">0</text>
              <text class="tick-label" x="150" y="84" text-anchor="middle">2</text>
              <text class="annotation-label" x="230" y="84" text-anchor="middle">4</text>
              <text class="tick-label" x="310" y="84" text-anchor="middle">6</text>
              <circle class="plot-point" cx="230" cy="66" r="5"></circle>

              <!-- BAS : l'ensemble, une demi-droite. Meme origine, meme pas. -->
              <text class="annotation-label" x="70" y="130" text-anchor="start">la solution : tous ces nombres</text>
              <line class="axis" x1="60" y1="164" x2="375" y2="164" marker-end="url(#fl-ineq-borne)"></line>
              <line class="grid-line" x1="70" y1="159" x2="70" y2="169"></line>
              <line class="grid-line" x1="150" y1="159" x2="150" y2="169"></line>
              <line class="grid-line" x1="230" y1="159" x2="230" y2="169"></line>
              <line class="grid-line" x1="310" y1="159" x2="310" y2="169"></line>
              <text class="tick-label" x="70" y="182" text-anchor="middle">0</text>
              <text class="tick-label" x="150" y="182" text-anchor="middle">2</text>
              <text class="annotation-label" x="230" y="182" text-anchor="middle">4</text>
              <text class="tick-label" x="310" y="182" text-anchor="middle">6</text>
              <line class="curve-main" x1="230" y1="164" x2="368" y2="164" marker-end="url(#fl-ineq-borne)"></line>
              <circle class="plot-point" cx="230" cy="164" r="5"></circle>
              <circle class="plot-point-alt" cx="234" cy="164" r="3"></circle>
              <circle class="plot-point-alt" cx="270" cy="164" r="3"></circle>
              <circle class="plot-point-alt" cx="350" cy="164" r="3"></circle>
              <text class="tick-label" x="280" y="152" text-anchor="middle">4,1 ; 5 ; 7 ...</text>
            </svg>
          `,
          notes: [
            'La borne se trouve en résolvant $x - 4 = 0$. C\'est une étape du travail, pas sa conclusion.',
            'L\'ensemble solution s\'écrit $S = [4\\,;\\,+\\infty[$. Le crochet tourné vers l\'intérieur en $4$ dit que la borne est <strong>incluse</strong> ; celui du côté de $+\\infty$ est toujours tourné vers l\'extérieur, car l\'infini n\'est pas un nombre qu\'on pourrait inclure.',
            'Une bonne habitude de relecture : si ta réponse à une inéquation tient en un seul nombre, elle est incomplète.'
          ],
          reading: 'Compte les points marqués sur chaque droite. En haut, il y en a un. En bas, il y en a trois visibles — et le trait continue au-delà du bord de la figure, car les solutions ne s\'arrêtent jamais. C\'est cette différence de nature que la notation $[4\\,;\\,+\\infty[$ enregistre.',
          caption: 'Pour $x - 4 \\geq 0$, la borne vaut $4$ et l\'ensemble solution est $[4\\,;\\,+\\infty[$.'
        },
        {
          theme: 'maths',
          kicker: 'Traduire un énoncé',
          title: '« Au plus » se lit sur un budget, pas dans une règle',
          description: 'Un club demande $22$ € d\'inscription, puis $7$ € par séance. Tu disposes de $90$ €.<br/><br/>La dépense s\'écrit $C = 7s + 22$, et « ne pas dépasser le budget » se traduit par $7s + 22 \\leqslant 90$. Le dessin montre pourquoi c\'est bien ce symbole-là.',
          svg: `
            <svg viewBox="0 0 480 200" role="img" aria-labelledby="ineq-budget-title ineq-budget-desc">
              <title id="ineq-budget-title">Deux depenses comparees a un meme budget</title>
              <desc id="ineq-budget-desc">Deux barres horizontales partent de la meme origine et sont tracees a la meme echelle, ou chaque euro occupe la meme longueur. Chaque barre commence par une portion sombre representant les vingt-deux euros d'inscription, suivie de portions claires representant les seances a sept euros. La barre du haut compte neuf seances et s'arrete a quatre-vingt-cinq euros, avant le trait vertical du budget place a quatre-vingt-dix euros. La barre du bas compte dix seances et atteint quatre-vingt-douze euros : elle depasse le trait du budget de deux euros.</desc>

              <!-- Echelle : 1 EUR = 4 unites de viewBox, origine x = 60.
                   Verifie par le calcul : inscription 22 EUR -> 88 unites ;
                   une seance 7 EUR -> 28 unites. Neuf seances coutent
                   22 + 63 = 85 EUR, la barre finit donc a 60 + 340 = 400 ;
                   dix seances coutent 92 EUR et finissent a 428, soit 8
                   unites APRES le trait de budget place a 60 + 360 = 420.
                   Le depassement dessine vaut donc exactement 2 EUR. -->

              <!-- Le budget : une seule verticale, commune aux deux barres. -->
              <line class="curve-main" x1="420" y1="26" x2="420" y2="176"></line>
              <text class="annotation-label" x="420" y="18" text-anchor="middle">budget : 90 €</text>

              <text class="label-soft" x="60" y="46" text-anchor="start">9 séances : 85 €</text>
              <rect x="60" y="54" width="88" height="30" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="54" width="88" height="30" fill="none"></rect>
              <text class="tick-label" x="104" y="74" text-anchor="middle">22 €</text>
              <rect x="148" y="54" width="252" height="30" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="148" y="54" width="252" height="30" fill="none"></rect>
              <text class="tick-label" x="274" y="74" text-anchor="middle">9 × 7 = 63 €</text>

              <text class="label-soft" x="60" y="126" text-anchor="start">10 séances : 92 €</text>
              <rect x="60" y="134" width="88" height="30" fill="color-mix(in srgb, var(--diagram-accent) 28%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="134" width="88" height="30" fill="none"></rect>
              <text class="tick-label" x="104" y="154" text-anchor="middle">22 €</text>
              <rect x="148" y="134" width="280" height="30" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="148" y="134" width="280" height="30" fill="none"></rect>
              <text class="tick-label" x="288" y="154" text-anchor="middle">10 × 7 = 70 €</text>
              <text class="label-soft" x="432" y="154" text-anchor="start">+2 €</text>
            </svg>
          `,
          notes: [
            '« Au plus $90$ € » signifie « $90$ € ou moins », donc $7s + 22 \\leqslant 90$. Le symbole $\\leqslant$ autorise l\'égalité : dépenser exactement $90$ € resterait permis.',
            'La résolution donne $s \\leqslant \\dfrac{68}{7}$, c\'est-à-dire $s \\leqslant 9{,}71$ environ. Mais une séance ne se découpe pas : la réponse est $9$ séances, et non $9{,}71$.',
            'C\'est pour cela qu\'on revient toujours à l\'énoncé après le calcul. Ici, $9$ séances coûtent $85$ € et passent ; $10$ séances coûtent $92$ € et ne passent pas. Le dessin le confirme sans aucune formule.'
          ],
          reading: 'Regarde où chaque barre s\'arrête par rapport au trait vertical. Celle du haut reste en deçà : le budget tient. Celle du bas le franchit de deux euros à peine — et deux euros suffisent à rendre la dépense impossible. C\'est exactement ce que dit le symbole $\\leqslant$, et c\'est pourquoi « au plus » ne se traduit jamais par $\\geqslant$.',
          caption: 'Inscription de $22$ € et séances à $7$ € : avec $90$ €, on peut suivre au plus $9$ séances.'
        }
      ],
      recap: [
        'Équation du 1er degré : isoler $x$ par opérations réversibles ; une unique solution.',
        'Inéquation : même méthode, mais inverser le sens si on multiplie/divise par un négatif.',
        'La solution d\'une inéquation est un intervalle (souvent infini) à exprimer en notation correcte.',
        'Toujours vérifier avec une valeur test appartenant à l\'intervalle trouvé.'
      ],
      piege: 'Diviser par $-2$ transforme $<$ en $>$. C\'est l\'erreur la plus fréquente dans les inéquations !'
    },
    quiz: [
      { q: 'Un élève résout $-4x + 8 > 0$ et obtient $x > 2$. Quelle est son erreur ?', options: ['Il a oublié d\'inverser l\'inégalité en divisant par $-4$ : la solution correcte est $x < 2$', 'Il n\'y a pas d\'erreur, $x > 2$ est correct', 'Il devait soustraire $8$ des deux membres, pas diviser', 'La solution est $x > -2$'], answer: 0, correction: '$-4x + 8 > 0 \\Rightarrow -4x > -8 \\Rightarrow x < \\frac{-8}{-4} = 2$. Diviser par $-4$ (négatif) inverse $>$ en $<$. La solution correcte est $]-\\infty ; 2[$.' },
      { q: 'Résoudre $-2x + 4 > 0$', options: ['$x>2$', '$x<2$', '$x>-2$', '$x<-2$'], answer: 1, correction: '$-2x > -4 \\Rightarrow x < 2$ (division par $-2$, inversion du sens).' },
      { q: 'L\'ensemble solution de $5x + 1 \\le 11$ est :', options: ['$[2;+\\infty[$', '$]-\\infty;2]$', '$]-\\infty;2[$', '$[2;11]$'], answer: 1, correction: '$5x \\le 10 \\Rightarrow x \\le 2$, soit $]-\\infty;2]$.' },
      { q: 'Résoudre l\'inéquation $3(x - 2) \\geq 2(x + 1)$. L\'ensemble solution est :', options: ['$[8;+\\infty[$', '$]-\\infty;8]$', '$[4;+\\infty[$', '$]-\\infty;4]$'], answer: 0, correction: '$3x - 6 \\geq 2x + 2 \\Rightarrow 3x - 2x \\geq 2 + 6 \\Rightarrow x \\geq 8$. Ensemble solution : $[8;+\\infty[$. Bien développer avant de regrouper les termes : c\'est une source d\'erreur classique quand on oublie de distribuer le coefficient à tous les termes entre parenthèses.' },
      { q: 'L\'équation $3x + 5 = 3x - 2$ admet :', options: ['Aucune solution (impossible : $5 = -2$)', 'Une infinité de solutions', '$x = 0$', '$x = 7/6$'], answer: 0, correction: '$3x + 5 = 3x - 2 \\Rightarrow 5 = -2$, ce qui est une contradiction. L\'équation n\'admet aucune solution. On écrit $S = \\varnothing$. Cela se produit lorsque les deux membres ont le même coefficient en $x$ mais des constantes différentes.' }
    ],
    /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

       MESURE DE DÉPART : 4 tâches distinctes seulement, dont deux
       quasi-identiques (inéquation à coefficient POSITIF, sous deux
       habillages). Le générateur tirait donc, sur 300 tirages, la même
       question à deux ou trois visages — exactement le défaut que la
       section 11 du cahier des charges décrit : la variété des NOMBRES
       masque l'absence de variété des TÂCHES.

       DÉFAUT DE FOND CORRIGÉ ICI, et il est grave : aucune tâche ne tirait
       d'inéquation à coefficient NÉGATIF. Or le changement de sens est
       l'erreur dominante du chapitre et le seul contenu réellement nouveau
       de l'année. La banque ne travaillait donc pas la difficulté centrale
       du chapitre. Le défaut préexistait, il était simplement invisible
       tant que personne ne comptait les tâches.

       On passe à SEPT tâches, dispatchées explicitement plutôt que par
       retombée d'un `if` sur un cas dégénéré (l'ancienne écriture ne
       produisait sa deuxième tâche que lorsque la division tombait mal,
       ce qui rendait sa fréquence imprévisible). */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['budget', 'ineqPositive', 'ineqNegative', 'equation',
                            'equationDeuxMembres', 'seuil', 'traduction']);

        /* 1. Mise en inéquation d'une contrainte de budget. Six habillages
              pour une seule tâche : c'est du DÉCOR, pas de la diversité, et
              c'est assumé — il sert à faire répéter la traduction
              « ne pas dépasser » sans que l'élève reconnaisse l'exercice. */
        if (tache === 'budget') {
          const contexts = [
            { intro: 'Un plombier facture un déplacement fixe et un tarif horaire. Le coût total est', v: 'h', unit: 'heures' },
            { intro: 'Un forfait téléphonique inclut un abonnement fixe et un coût par Go. La facture est', v: 'g', unit: 'Go' },
            { intro: 'Un artisan facture des frais fixes et un tarif au mètre carré. Le devis est', v: 'm', unit: 'm²' },
            { intro: 'Un club de sport demande une inscription fixe puis un prix par séance. La dépense est', v: 's', unit: 'séances' },
            { intro: 'Une imprimerie facture une mise en route puis un prix par affiche. Le total est', v: 'n', unit: 'affiches' },
            { intro: 'Un loueur de vélos demande une caution fixe puis un tarif journalier. Le montant est', v: 'j', unit: 'jours' }
          ];
          const ctx = pick(contexts);
          const a = rand(2, 8);
          const b = rand(5, 30);
          const sol = rand(3, 12);
          const c = a * sol + b;
          return {
            statement: `${ctx.intro} $C = ${a}${ctx.v} + ${b}$ (en €). Un client dispose d'un budget maximal de $${c}$ €.<br/><br/><strong>1.</strong> Mets le problème en inéquation.<br/><strong>2.</strong> Résous-la pour trouver le nombre maximal de ${ctx.unit}.<br/><strong>3.</strong> Exprime la solution en notation intervalle.<br/><br/>Donne la borne supérieure de l'intervalle (nombre maximal de ${ctx.unit}).`,
            answer: sol,
            tolerance: 0,
            unit: ctx.unit,
            hint: `« Ne pas dépasser » se traduit par $\\leq$. Écris $${a}${ctx.v} + ${b} \\leq ${c}$, puis isole $${ctx.v}$.`,
            solution: [
              `Mise en inéquation : $${a}${ctx.v} + ${b} \\leq ${c}$`,
              `$${a}${ctx.v} \\leq ${c} - ${b} = ${c - b}$`,
              `$${ctx.v} \\leq \\dfrac{${c - b}}{${a}} = ${sol}$`,
              `Ensemble solution : $]0\\,;\\,${sol}]$ (en ${ctx.unit}), donc au plus $${sol}$ ${ctx.unit}.`
            ]
          };
        }

        /* 2. Inéquation à coefficient positif : aucun renversement, seule
              l'écriture de l'intervalle est en jeu. */
        if (tache === 'ineqPositive') {
          const a = rand(2, 7), b = rand(3, 15), sol = rand(2, 9);
          const total = a * sol + b;
          return {
            statement: `Résous l'inéquation $${a}x + ${b} > ${total}$, puis donne l'ensemble solution sous forme d'intervalle.<br/><br/>Quelle est la borne de l'intervalle solution ?`,
            answer: sol,
            tolerance: 0,
            unit: '',
            hint: `Retire $${b}$ aux deux membres, puis divise par $${a}$. Ce coefficient est positif : le sens de l'inégalité ne change pas.`,
            solution: [
              `Inéquation à coefficient positif : $${a}x + ${b} > ${total}$`,
              `$${a}x > ${total} - ${b} = ${total - b}$`,
              `$x > ${sol}$ — le coefficient $${a}$ étant positif, le sens est conservé.`,
              `Ensemble solution : $]${sol}\\,;\\,+\\infty[$`
            ]
          };
        }

        /* 3. Inéquation à coefficient NÉGATIF. Tâche AJOUTÉE le 2026-09-13 :
              c'est elle qui travaille la règle d'or du chapitre, et elle
              manquait entièrement. La borne est choisie entière et le
              résultat est vérifié par une valeur test dans le corrigé, pour
              que l'élève dispose du garde-fou qu'on lui demande d'utiliser. */
        if (tache === 'ineqNegative') {
          const a = rand(2, 6);              // on écrira -a
          const sol = rand(-6, 6);
          const b = rand(3, 20);
          const c = -a * sol + b;            // -a*x + b = c en x = sol
          const test = sol - 1;              // strictement dans ]-inf ; sol[
          const gauche = -a * test + b;
          return {
            statement: `Résous l'inéquation $-${a}x + ${b} > ${c}$, puis donne l'ensemble solution sous forme d'intervalle.<br/><br/><strong>Sois attentif au signe du coefficient devant $x$.</strong><br/><br/>Quelle est la borne de l'intervalle solution ?`,
            answer: sol,
            tolerance: 0,
            unit: '',
            hint: `Isole d'abord $-${a}x$. Tu devras ensuite diviser par $-${a}$, qui est négatif : que devient alors le sens de l'inégalité ?`,
            solution: [
              `Inéquation à coefficient négatif : $-${a}x + ${b} > ${c}$`,
              `$-${a}x > ${c} - ${b} = ${c - b}$`,
              `On divise par $-${a}$, qui est <strong>négatif</strong> : le sens de l'inégalité <strong>s'inverse</strong>, et l'on obtient $x < ${sol}$.`,
              `Ensemble solution : $]-\\infty\\,;\\,${sol}[$`,
              `Valeur test : pour $x = ${test}$, le membre de gauche vaut $${gauche}$, et $${gauche} > ${c}$ ✓`
            ]
          };
        }

        /* 4. Équation du premier degré à inconnue dans un seul membre.
              Tâche de reprise, volontairement conservée : elle sert de
              point d'appui, pas de difficulté. */
        if (tache === 'equation') {
          const a = rand(2, 9), sol = rand(-8, 9), b = rand(2, 20);
          const c = a * sol - b;
          return {
            statement: `Résous l'équation $${a}x - ${b} = ${c}$.<br/><br/>Donne la valeur de $x$.`,
            answer: sol,
            tolerance: 0,
            unit: '',
            hint: `Ajoute $${b}$ aux deux membres, puis divise par $${a}$.`,
            solution: [
              `Équation du premier degré : $${a}x - ${b} = ${c}$`,
              `J'ajoute $${b}$ aux deux membres : $${a}x = ${c} + ${b} = ${c + b}$`,
              `Je divise les deux membres par $${a}$ : $x = ${sol}$`,
              `Vérification : $${a} \\times ${sol < 0 ? '(' + sol + ')' : sol} - ${b} = ${c}$ ✓`
            ]
          };
        }

        /* 5. Équation à inconnue DES DEUX CÔTÉS. Tâche ajoutée le
              2026-09-13 : elle est la seule qui oblige à transposer un
              terme en x, geste que la banque ne demandait jamais. */
        if (tache === 'equationDeuxMembres') {
          const sol = rand(-7, 8);
          /* DEUX pièges de génération, tous deux trouvés en relisant le
             TIRAGE RÉEL et non le code (2026-09-13).

             1. a et c ne doivent jamais être égaux, sinon les termes en x
                s'annulent et l'équation n'a plus d'inconnue. On ne peut pas
                traiter le cas par un `return null` : normaliserExercice()
                (scripts/manuel/schema.js) lit ex.solution sans garde et
                planterait.

             2. c ne doit pas non plus valoir 0, sinon l'énoncé imprime
                « $0x$ », qui est une écriture que personne n'écrit et qui
                laisse croire à une inconnue des deux côtés alors qu'il n'y
                en a qu'une. Le premier tirage de la graine du livre
                produisait exactement « $3x - 5 = 0x - 5$ ».

             On tire donc a et c dans un intervalle strictement positif et
             on impose l'écart non nul, plutôt que de dériver c de a. */
          const a = rand(2, 7);
          let c = rand(2, 7);
          while (c === a) c = rand(2, 7);
          /* d non nul, et b non nul par construction du couple : une
             constante nulle imprimerait « $+ 0$ », qui ne s'écrit pas.
             Défaut trouvé sur le tirage réel, pas à la lecture du code. */
          let d = rand(-15, 15);
          while (d === 0) d = rand(-15, 15);
          // a*sol + b = c*sol + d  ->  b = (c-a)*sol + d
          let b = (c - a) * sol + d;
          /* Si b tombe à zéro, on décale d d'une unité : le couple reste
             cohérent puisque b est recalculé à partir de lui. */
          if (b === 0) { d = d + 1; b = (c - a) * sol + d; }
          // Écriture d'un terme constant signé, sans « + 0 » ni « + -3 ».
          const signe = (n) => (n < 0 ? '- ' + Math.abs(n) : '+ ' + n);
          return {
            statement: `Résous l'équation $${a}x ${signe(b)} = ${c}x ${signe(d)}$.<br/><br/>L'inconnue apparaît des deux côtés : rassemble d'abord les termes en $x$ dans un seul membre.<br/><br/>Donne la valeur de $x$.`,
            answer: sol,
            tolerance: 0,
            unit: '',
            hint: `Retire $${c}x$ aux deux membres pour ne garder les $x$ qu'à gauche, puis occupe-toi du terme constant. Écris chaque opération plutôt que de « faire passer ».`,
            solution: [
              `Équation à inconnue dans les deux membres : $${a}x ${signe(b)} = ${c}x ${signe(d)}$`,
              `Je retire $${c}x$ aux deux membres : $${a - c}x ${signe(b)} = ${d}$`,
              `Je ${b < 0 ? 'ajoute $' + Math.abs(b) + '$' : 'retire $' + b + '$'} aux deux membres : $${a - c}x = ${d - b}$`,
              `Je divise par $${a - c}$ : $x = ${sol}$`,
              `Vérification dans l'équation de départ : les deux membres valent $${a * sol + b}$ ✓`
            ]
          };
        }

        /* 6. Seuil de rentabilité : deux expressions à comparer. Tâche
              ajoutée le 2026-09-13 — elle modélise, là où les autres
              appliquent. */
        if (tache === 'seuil') {
          const contexts = [
            { a: 'Une association', o1: 'un stand', o2: 'une buvette', u: 'entrées' },
            { a: 'Un atelier', o1: 'la machine A', o2: 'la machine B', u: 'pièces' },
            { a: 'Une salle de sport', o1: 'la formule à la séance', o2: 'l\'abonnement', u: 'séances' }
          ];
          const ctx = pick(contexts);
          const p1 = rand(4, 12);            // prix unitaire formule 1
          const fixe = rand(20, 90);         // part fixe formule 2
          const p2 = rand(1, p1 - 1);        // prix unitaire formule 2, moins cher
          const sol = Math.ceil(fixe / (p1 - p2));
          return {
            statement: `${ctx.a} compare deux formules pour $n$ ${ctx.u}.<br/><br/>Avec ${ctx.o1}, la dépense est $${p1}n$ € ; avec ${ctx.o2}, elle est $${p2}n + ${fixe}$ €.<br/><br/><strong>1.</strong> Écris l'inéquation traduisant « ${ctx.o2} revient moins cher ».<br/><strong>2.</strong> Résous-la.<br/><br/>À partir de combien de ${ctx.u} ${ctx.o2} devient-${ctx.o2.startsWith('l\'') ? 'elle' : 'elle'} plus avantageuse ?`,
            answer: sol,
            tolerance: 0,
            unit: ctx.u,
            hint: `« Revient moins cher » signifie que la dépense de ${ctx.o2} est INFÉRIEURE : $${p2}n + ${fixe} < ${p1}n$.`,
            solution: [
              `Seuil de rentabilité : je compare $${p1}n$ et $${p2}n + ${fixe}$`,
              `Inéquation : $${p2}n + ${fixe} < ${p1}n$`,
              `$${fixe} < ${p1 - p2}n$, donc $n > \\dfrac{${fixe}}{${p1 - p2}} \\approx ${fr(fixe / (p1 - p2), 2)}$`,
              `Le nombre de ${ctx.u} est entier : il faut donc $n \\geq ${sol}$. À partir de $${sol}$ ${ctx.u}, ${ctx.o2} est plus avantageuse.`
            ]
          };
        }

        /* 7. Traduction pure d'une formulation en symbole, sans calcul.
              Tâche ajoutée le 2026-09-13, et volontairement minuscule : elle
              isole la difficulté de LANGUE, qui reste invisible tant qu'elle
              est noyée dans un calcul. */
        const formulations = [
          { texte: 'la masse $m$ ne doit pas dépasser $30$ kg', sym: '$m \\leq 30$', code: 1, pourquoi: '« ne pas dépasser $30$ » autorise $30$ lui-même, et interdit tout ce qui est au-dessus' },
          { texte: 'la température $T$ doit rester strictement au-dessus de $5$ °C', sym: '$T > 5$', code: 2, pourquoi: '« strictement au-dessus » exclut la valeur $5$' },
          { texte: 'il faut au moins $12$ participants ($n$)', sym: '$n \\geq 12$', code: 3, pourquoi: '« au moins $12$ » accepte $12$ et tout ce qui est plus grand — malgré le mot « moins »' },
          { texte: 'le budget $B$ doit être inférieur à $200$ € sans jamais l\'atteindre', sym: '$B < 200$', code: 4, pourquoi: '« sans jamais l\'atteindre » exclut la borne' },
          { texte: 'la durée $d$ doit valoir au plus $45$ minutes', sym: '$d \\leq 45$', code: 1, pourquoi: '« au plus $45$ » accepte $45$ et tout ce qui est en dessous' },
          { texte: 'la note $x$ doit être supérieure ou égale à $10$', sym: '$x \\geq 10$', code: 3, pourquoi: '« ou égale » inclut explicitement la borne' }
        ];
        const f = pick(formulations);
        return {
          statement: `Traduis la contrainte suivante par une inéquation :<br/><br/>« ${f.texte} ».<br/><br/>Réponds par le <strong>code du symbole</strong> qui convient :<br/><strong>1</strong> pour $\\leq$, <strong>2</strong> pour $>$, <strong>3</strong> pour $\\geq$, <strong>4</strong> pour $<$.`,
          answer: f.code,
          tolerance: 0,
          unit: '',
          hint: `Ne traduis pas mot à mot. Teste une valeur : est-ce qu'une valeur nettement plus grande convient ? Puis demande-toi séparément si la borne elle-même est acceptée.`,
          solution: [
            `Traduction d'une formulation en symbole : « ${f.texte} »`,
            `${f.pourquoi.charAt(0).toUpperCase() + f.pourquoi.slice(1)}.`,
            `L'inéquation s'écrit donc ${f.sym}, ce qui correspond au code <strong>${f.code}</strong>.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une salle de cinéma propose deux formules :<br/>- <strong>Formule A</strong> : carte d\'abonnement à $30$ € + $5$ € par séance.<br/>- <strong>Formule B</strong> : pas d\'abonnement, $8{,}50$ € par séance.<br/>Un spectateur hésite entre les deux.',
      tasks: [
        'Exprimer le coût total $C_A(n)$ et $C_B(n)$ en fonction du nombre de séances $n$.',
        'Résoudre l\'inéquation $C_A(n) < C_B(n)$ pour déterminer à partir de combien de séances la formule A est avantageuse.',
        'Vérifier la réponse en calculant les coûts pour la valeur seuil et la valeur suivante.'
      ],
      solutions: [
        '$C_A(n) = 5n + 30$ ; $C_B(n) = 8{,}5n$.',
        '$5n + 30 < 8{,}5n \\Rightarrow 30 < 3{,}5n \\Rightarrow n > \\frac{30}{3{,}5} \\approx 8{,}57$. Donc à partir de $n = 9$ séances.',
        'Pour $n = 8$ : $C_A = 70$ €, $C_B = 68$ € → B est moins cher. Pour $n = 9$ : $C_A = 75$ €, $C_B = 76{,}5$ € → A est moins cher ✓.'
      ],
      finalAnswer: 'La formule A est avantageuse à partir de $9$ séances.'
    },

    evaluation: {
      title: 'Évaluation — Équations et inéquations du 1er degré',
      duration: '25 min',
      questions: [
        {
          statement: 'Résoudre $7x - 3 = 25$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$7x - 3 = 25 \\Rightarrow 7x = 28 \\Rightarrow x = 4$.'
        },
        {
          statement: 'Résoudre $-3x + 9 > 0$. L\'ensemble des solutions est :',
          type: 'multiple-choice',
          options: ['$x > 3$', '$x < 3$', '$x > -3$', '$x < -3$'],
          answer: 1,
          points: 2,
          correction: '$-3x + 9 > 0 \\Rightarrow -3x > -9 \\Rightarrow x < 3$ (on divise par $-3$, on inverse le sens de l\'inégalité). Ensemble solution : $]-\\infty ; 3[$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-13. L'ancienne version, « Résoudre
             $\dfrac{2x+1}{3} = 5$ », donnait l'équation toute faite : il ne
             restait qu'à dérouler, soit « calculer », déjà porté par Q1 et Q5
             du même devoir. La nouvelle version donne une SITUATION et laisse
             l'élève écrire l'équation lui-même : c'est la mise en équation qui
             est évaluée, donc « modéliser ». Le calcul final reste le même, et
             la réponse aussi ($x = 7$), pour ne pas changer la difficulté. */
          statement: 'Un club de sport propose un abonnement : on paie $1$ € à l\'inscription, puis $2$ € par séance. À la fin de l\'année, le total dépensé, partagé entre les $3$ membres d\'une famille, revient à $5$ € par personne.<br/><br/>Écris l\'équation qui traduit cette situation, puis résous-la pour trouver le nombre $x$ de séances.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Le total dépensé pour $x$ séances vaut $2x + 1$ euros. Partagé entre $3$ personnes, cela donne $\\dfrac{2x+1}{3}$ euros par personne.<br/><br/>L\'équation à résoudre est donc $\\dfrac{2x+1}{3} = 5$.<br/><br/>On multiplie les deux membres par $3$ : $2x + 1 = 15$, puis $2x = 14$, donc $x = 7$.<br/><br/>Vérification : $7$ séances coûtent $2 \\times 7 + 1 = 15$ €, soit $15 \\div 3 = 5$ € par personne. C\'est bien ce qu\'annonce l\'énoncé.'
        },
        {
          statement: 'L\'ensemble solution de $4x - 2 \\geq 10$ est :',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 3]$', '$[3 ; +\\infty[$', '$]-\\infty ; 2]$', '$[2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: '$4x - 2 \\geq 10 \\Rightarrow 4x \\geq 12 \\Rightarrow x \\geq 3$. Ensemble solution : $[3 ; +\\infty[$.'
        },
        {
          statement: 'Résoudre $5 - 2x = 3x + 15$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: -2,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$5 - 2x = 3x + 15 \\Rightarrow 5 - 15 = 3x + 2x \\Rightarrow -10 = 5x \\Rightarrow x = -2$.'
        }
      ]
    }
  });
