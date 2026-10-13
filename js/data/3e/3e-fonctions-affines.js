/* =========================================================
   Spark Learning – data/3e/3e-fonctions-affines.js
   Module : Fonctions affines et linéaires (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-fonctions-affines',
    level: 1, subject: 'maths',
    icon: '📈',
    title: 'Fonctions affines et linéaires',
    subtitle: 'Coefficient directeur, ordonnée à l\'origine, droite',
    keywords: ['Fonction affine', 'Fonction linéaire', 'Coefficient directeur', 'Ordonnée à l\'origine', 'Droite'],
    physics: 'Toute grandeur qui évolue à taux constant : charge d\'un condensateur, dilatation d\'un métal, coût de production',
    cours: {
      intro: 'Un taxi affiche $4$ € dès que tu montes, puis $2$ € par kilomètre. Un autre ne prend rien au départ mais facture $3$ € du kilomètre.<br/><br/>' +
        'Lequel est le moins cher ? La réponse dépend de la distance — et pour la trouver <strong>sans tester tous les cas</strong>, il faut savoir écrire chaque tarif comme une <strong>fonction affine</strong>.<br/><br/>' +
        'Une fonction affine s\'écrit $f(x) = ax + b$. Elle décrit tout ce qui évolue à <strong>rythme constant</strong> à partir d\'une <strong>valeur de départ</strong> : le $b$ est ce qu\'on paie avant même de commencer, le $a$ est ce que chaque unité supplémentaire ajoute.<br/><br/>' +
        'Quand la valeur de départ est nulle ($b = 0$), la fonction devient <strong>linéaire</strong> : $f(x) = ax$. C\'est exactement une <strong>situation de proportionnalité</strong> — deux fois plus de kilomètres, deux fois plus cher.<br/><br/>' +
        'Ce qui rend ces fonctions si commodes : leur représentation graphique est toujours une <strong>droite</strong>. Deux points suffisent donc à la tracer, et une lecture graphique suffit souvent à conclure.',
      definitions: [
        { term: 'Fonction affine', def: 'Fonction qui s\'écrit $f(x) = ax + b$, où $a$ et $b$ sont deux nombres fixés. Sa représentation graphique est une <strong>droite</strong>.' },
        { term: 'Fonction linéaire', def: 'Cas particulier de fonction affine où $b = 0$ : $f(x) = ax$. Sa droite passe par l\'<strong>origine</strong> du repère. C\'est la traduction d\'une situation de <strong>proportionnalité</strong>, et $a$ en est le coefficient.' },
        { term: 'Coefficient directeur', def: 'Le nombre $a$. Il indique de combien $f(x)$ varie quand $x$ augmente de $1$. Si $a > 0$ la droite monte, si $a < 0$ elle descend, si $a = 0$ elle est horizontale.' },
        { term: 'Ordonnée à l\'origine', def: 'Le nombre $b$. C\'est la valeur de la fonction en $0$ : $f(0) = b$. Graphiquement, c\'est l\'endroit exact où la droite coupe l\'axe vertical.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Reconnaître et écrire la fonction</strong> : repérer la valeur de départ (elle donne $b$) et le rythme par unité (il donne $a$), puis écrire $f(x) = ax + b$.<br/><em>Exemple :</em> $4$ € de prise en charge puis $2$ € par km donnent $f(x) = 2x + 4$. S\'il n\'y a rien à payer au départ, alors $b = 0$ et la fonction est linéaire.',
          '<strong>Calculer le coefficient directeur à partir de deux points</strong> : si on connaît $f(x_1)$ et $f(x_2)$, alors $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$ — un rapport de deux <strong>écarts</strong>, jamais de deux valeurs.<br/><br/><em>Exemple :</em> $f(1) = 6$ et $f(4) = 12$ donnent $a = \\dfrac{12 - 6}{4 - 1} = \\dfrac{6}{3} = 2$.<br/><br/>On trouve ensuite $b$ en <strong>réinjectant</strong> un point : $6 = 2 \\times 1 + b$, donc $b = 4$.',
          '<strong>Tracer la droite</strong> : placer le point $(0 \\,;\\, b)$ sur l\'axe vertical, puis se déplacer de $1$ vers la droite et de $a$ vers le haut (vers le bas si $a$ est négatif). On obtient un second point, et deux points suffisent à tracer la droite.'
        ]
      },
      example: {
        statement: 'Un taxi facture $4$ € de prise en charge, puis $2$ € par kilomètre parcouru. Un second taxi ne prend rien au départ mais facture $3$ € du kilomètre. À partir de quelle distance le premier taxi devient-il plus avantageux ?',
        steps: [
          '<strong>Écrivons les deux tarifs.</strong> Le premier a une valeur de départ de $4$ et un rythme de $2$ par km : $f(x) = 2x + 4$. C\'est une fonction <strong>affine</strong>.',
          'Le second n\'a aucune valeur de départ : $g(x) = 3x$. C\'est une fonction <strong>linéaire</strong> — le prix y est proportionnel à la distance.',
          '<strong>Cherchons où les deux tarifs sont égaux</strong>, c\'est-à-dire où $f(x) = g(x)$ : $2x + 4 = 3x$.',
          'On soustrait $2x$ des deux côtés : $4 = x$. Les deux taxis coûtent donc exactement la même chose pour $4$ km — $12$ € dans les deux cas.',
          '<strong>Concluons.</strong> Au-delà de $4$ km, c\'est le second qui devient plus cher, car chaque kilomètre lui coûte $3$ € contre $2$ € au premier. Le premier taxi est donc plus avantageux <strong>dès que la course dépasse $4$ km</strong>.'
        ],
        answer: 'Les deux tarifs se croisent à $4$ km ($12$ €). Au-delà, le premier taxi ($f(x) = 2x + 4$) est moins cher.'
      },
      formulas: [
        'Fonction affine : $f(x) = ax + b$ (droite quelconque)',
        'Fonction linéaire : $f(x) = ax$ (droite passant par l\'origine)',
        'Ordonnée à l\'origine : $f(0) = b$',
        'Coefficient directeur : $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Affine et linéaire',
        title: 'Ce que $a$ et $b$ font à la droite',
        description: 'Deux droites de <strong>même</strong> coefficient directeur $a = 2$ : la linéaire $g(x) = 2x$ part de l\'origine, l\'affine $f(x) = 2x + 3$ part de la hauteur $b = 3$. Le petit escalier montre comment se lit $a$ : $1$ vers la droite, $2$ vers le haut.',
        svg: `
          <svg viewBox="0 0 380 260" role="img" aria-labelledby="affine-title affine-desc">
            <title id="affine-title">Fonction affine et fonction lineaire dans un repere</title>
            <desc id="affine-desc">Un repere avec deux droites paralleles de coefficient directeur 2 : la droite de la fonction lineaire g de x egale 2 x passe par l'origine, celle de la fonction affine f de x egale 2 x plus 3 coupe l'axe vertical a la hauteur 3. Un escalier entre les abscisses 1 et 2 montre que lorsque x augmente de 1, f augmente de 2.</desc>

            <line class="grid-line" x1="90" y1="40" x2="90" y2="210"></line>
            <line class="grid-line" x1="130" y1="40" x2="130" y2="210"></line>
            <line class="grid-line" x1="170" y1="40" x2="170" y2="210"></line>
            <line class="grid-line" x1="210" y1="40" x2="210" y2="210"></line>
            <line class="grid-line" x1="250" y1="40" x2="250" y2="210"></line>
            <line class="grid-line" x1="50" y1="176" x2="250" y2="176"></line>
            <line class="grid-line" x1="50" y1="142" x2="250" y2="142"></line>
            <line class="grid-line" x1="50" y1="108" x2="250" y2="108"></line>
            <line class="grid-line" x1="50" y1="74" x2="250" y2="74"></line>
            <line class="grid-line" x1="50" y1="40" x2="250" y2="40"></line>

            <line class="axis" x1="50" y1="210" x2="266" y2="210"></line>
            <line class="axis" x1="50" y1="210" x2="50" y2="34"></line>
            <text class="tick-label" x="272" y="214">x</text>
            <text class="tick-label" x="44" y="32">y</text>

            <text class="tick-label" x="88" y="224">1</text>
            <text class="tick-label" x="128" y="224">2</text>
            <text class="tick-label" x="168" y="224">3</text>
            <text class="tick-label" x="208" y="224">4</text>
            <text class="tick-label" x="248" y="224">5</text>
            <text class="tick-label" x="40" y="214" text-anchor="end">0</text>
            <text class="tick-label" x="44" y="180" text-anchor="end">2</text>
            <text class="tick-label" x="44" y="146" text-anchor="end">4</text>
            <text class="tick-label" x="44" y="112" text-anchor="end">6</text>
            <text class="tick-label" x="44" y="78" text-anchor="end">8</text>
            <text class="tick-label" x="44" y="44" text-anchor="end">10</text>

            <line class="graph-line" x1="50" y1="210" x2="210" y2="74"></line>
            <line class="curve-main" x1="50" y1="159" x2="190" y2="40"></line>

            <line class="guide-line" x1="90" y1="125" x2="130" y2="125"></line>
            <line class="guide-line" x1="130" y1="125" x2="130" y2="91"></line>
            <text class="tick-label" x="102" y="138">+1</text>
            <text class="tick-label" x="136" y="112">+2</text>
            <text class="annotation-label" x="140" y="152">a = 2</text>

            <circle class="plot-point" cx="50" cy="159" r="5"></circle>
            <text class="annotation-label" x="58" y="176">b = 3</text>
            <circle class="plot-point-alt" cx="50" cy="210" r="5"></circle>

            <text class="annotation-label" x="196" y="38">f(x) = 2x + 3</text>
            <text class="annotation-label" x="216" y="72">g(x) = 2x</text>
            <text class="label-soft" x="196" y="52">affine</text>
            <text class="label-soft" x="216" y="86">linéaire</text>
          </svg>
        `,
        notes: [
          'Les deux droites ont le <strong>même</strong> coefficient directeur $a = 2$ : elles montent exactement pareil, elles sont donc <strong>parallèles</strong>. Seule leur hauteur de départ diffère.',
          'La droite de $g$ passe par l\'<strong>origine</strong> : c\'est la signature d\'une fonction linéaire, donc d\'une situation de proportionnalité.',
          'La droite de $f$ coupe l\'axe vertical en $3$ : c\'est son <strong>ordonnée à l\'origine</strong>, et cela se lit directement dans l\'écriture $f(x) = 2x + \\mathbf{3}$.',
          'L\'escalier se lit ainsi : on avance de $1$ sur l\'axe horizontal, la droite monte de $2$. Ce « $2$ » <strong>est</strong> le coefficient directeur.'
        ],
        reading: 'Pour lire $b$, regarde où la droite coupe l\'axe vertical. Pour lire $a$, avance de $1$ vers la droite et compte de combien tu montes (ou descends).',
        caption: 'Deux droites de même coefficient directeur $a = 2$ : la linéaire $g(x) = 2x$ et l\'affine $f(x) = 2x + 3$, avec la lecture de $a$ en escalier.'
      },
      /* SCHÉMAS SECONDAIRES, ajoutés le 2026-09-13.
         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule. La figure principale de ce chapitre traite
         déjà « affine contre linéaire » et la lecture de $b$ ; les deux
         malentendus qui restent, et qui coûtent des points au brevet, sont :

           1. « la droite qui descend est moins pentue » — l'élève confond le
              SIGNE de $a$ (le sens) et sa VALEUR ABSOLUE (la raideur), et
              classe $-3x$ comme « moins raide » que $0{,}5x$ ;
           2. « j'ai divisé, donc c'est bon » — le coefficient directeur se
              calcule $\Delta y / \Delta x$, et l'élève inverse le quotient ou
              croit que le résultat change quand on lit la droite de droite à
              gauche.

         TOUTES LES COORDONNÉES SONT CALCULÉES. Le pas est IDENTIQUE en x et en
         y dans les deux schémas — sans quoi la pente vue à l'écran ne serait
         pas la vraie pente, ce qui ruinerait précisément le schéma 1. Vérifié
         par le calcul dans scripts/manuel/tests/diagrams-3e.test.js : la pente
         mesurée en pixels vaut exactement 3, -3 et 0,5 sur le premier schéma,
         et 1,5 sur les deux vignettes du second. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le signe et la raideur',
          title: 'Le signe de a donne le sens, sa valeur absolue donne la raideur',
          description: 'Trois droites, un seul repère. Le <strong>signe</strong> de $a$ dit si la droite monte ou descend. Sa <strong>valeur absolue</strong> dit à quel point elle est raide. Ce sont deux questions différentes, et $-3$ est bien plus raide que $0{,}5$.',
          svg: `
            <svg viewBox="0 0 232 244" role="img" aria-labelledby="affine-pente-title affine-pente-desc">
              <title id="affine-pente-title">Trois droites de coefficients directeurs differents</title>
              <desc id="affine-pente-desc">Dans un repere gradue de moins quatre a quatre sur les deux axes, avec le meme pas horizontal et vertical, trois droites passent toutes par l'origine. La premiere, de coefficient directeur trois, monte tres fortement vers la droite. La deuxieme, de coefficient directeur moins trois, descend tout aussi fortement vers la droite : elle est l'image de la premiere par un retournement. La troisieme, de coefficient directeur zero virgule cinq, monte tres doucement et reste presque horizontale. Les deux droites de coefficient trois et moins trois sont exactement aussi raides l'une que l'autre, alors que leurs signes sont opposes ; la droite de coefficient zero virgule cinq est de loin la moins raide des trois, bien qu'elle monte.</desc>

              <line class="grid-line" x1="28" y1="28" x2="28" y2="204"></line>
              <line class="grid-line" x1="50" y1="28" x2="50" y2="204"></line>
              <line class="grid-line" x1="72" y1="28" x2="72" y2="204"></line>
              <line class="grid-line" x1="94" y1="28" x2="94" y2="204"></line>
              <line class="grid-line" x1="138" y1="28" x2="138" y2="204"></line>
              <line class="grid-line" x1="160" y1="28" x2="160" y2="204"></line>
              <line class="grid-line" x1="182" y1="28" x2="182" y2="204"></line>
              <line class="grid-line" x1="204" y1="28" x2="204" y2="204"></line>
              <line class="grid-line" x1="28" y1="204" x2="204" y2="204"></line>
              <line class="grid-line" x1="28" y1="182" x2="204" y2="182"></line>
              <line class="grid-line" x1="28" y1="160" x2="204" y2="160"></line>
              <line class="grid-line" x1="28" y1="138" x2="204" y2="138"></line>
              <line class="grid-line" x1="28" y1="94" x2="204" y2="94"></line>
              <line class="grid-line" x1="28" y1="72" x2="204" y2="72"></line>
              <line class="grid-line" x1="28" y1="50" x2="204" y2="50"></line>
              <line class="grid-line" x1="28" y1="28" x2="204" y2="28"></line>

              <line class="axis" x1="28" y1="116" x2="214" y2="116"></line>
              <line class="axis" x1="116" y1="204" x2="116" y2="18"></line>

              <line class="curve-main" x1="88.5" y1="198.5" x2="143.5" y2="33.5"></line>
              <line class="curve-main" x1="88.5" y1="33.5" x2="143.5" y2="198.5"></line>
              <line class="graph-line" x1="28" y1="160" x2="204" y2="72"></line>

              <circle class="plot-point" cx="116" cy="116" r="4"></circle>

              <text class="tick-label" x="112" y="128" text-anchor="end">0</text>
              <text class="tick-label" x="160" y="128" text-anchor="middle">2</text>
              <text class="tick-label" x="72" y="128" text-anchor="middle">-2</text>
              <text class="tick-label" x="112" y="76" text-anchor="end">2</text>
              <text class="tick-label" x="112" y="164" text-anchor="end">-2</text>
              <text class="axis-label" x="218" y="120" text-anchor="start">x</text>
              <text class="axis-label" x="122" y="16" text-anchor="start">y</text>

              <text class="annotation-label" x="148" y="44" text-anchor="start">a = 3</text>
              <text class="annotation-label" x="148" y="196" text-anchor="start">a = -3</text>
              <text class="annotation-label" x="204" y="62" text-anchor="end">a = 0,5</text>

              <text class="label-soft" x="116" y="226" text-anchor="middle">même raideur pour 3 et pour -3</text>
              <text class="label-soft" x="116" y="240" text-anchor="middle">la plus douce est celle de 0,5</text>
            </svg>
          `,
          notes: [
            'Les droites $a = 3$ et $a = -3$ sont <strong>exactement aussi raides</strong> l\'une que l\'autre : elles se déduisent l\'une de l\'autre par un retournement. Seul leur <strong>sens</strong> diffère.',
            'La droite $a = 0{,}5$ monte, comme celle de $a = 3$ — mais elle est de loin la plus <strong>douce</strong> des trois, parce que $0{,}5$ est le plus petit des trois en valeur absolue.',
            'Retiens donc deux questions séparées : <strong>le signe de $a$</strong> répond à « ça monte ou ça descend ? », et <strong>$|a|$</strong> répond à « c\'est raide ou c\'est doux ? ».',
            'Une conséquence utile : entre $-3$ et $0{,}5$, la plus raide est celle de $-3$, bien qu\'elle soit la plus <strong>petite</strong> des deux comme nombre.'
          ],
          reading: 'Pour comparer deux raideurs, oublie un instant les signes et ne compare que les nombres sans leur signe. Pour dire qui monte et qui descend, ne regarde que les signes.',
          caption: 'Trois droites passant par l\'origine, de coefficients directeurs $3$, $-3$ et $0{,}5$, dans un repère au même pas horizontal et vertical.'
        },
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Le coefficient directeur ne dépend pas du sens de lecture',
          description: 'La <strong>même</strong> droite, lue deux fois. À gauche on part de $A$ vers $B$, à droite on part de $B$ vers $A$. Les deux écarts changent de signe <strong>en même temps</strong>, donc leur quotient, lui, ne bouge pas : $a = 1{,}5$ dans les deux cas.',
          svg: `
            <svg viewBox="0 0 372 232" role="img" aria-labelledby="affine-quotient-title affine-quotient-desc">
              <title id="affine-quotient-title">La meme droite lue dans les deux sens</title>
              <desc id="affine-quotient-desc">Deux reperes identiques, cote a cote, portent la meme droite passant par le point A d'abscisse moins deux et d'ordonnee moins un et par le point B d'abscisse deux et d'ordonnee cinq. Dans le repere de gauche, un trait horizontal part de A vers la droite sur quatre unites, puis un trait vertical monte sur six unites jusqu'a B : l'ecart horizontal vaut quatre et l'ecart vertical vaut six, donc le quotient vaut un virgule cinq. Dans le repere de droite, le parcours est fait dans l'autre sens, de B vers A : l'ecart horizontal vaut moins quatre et l'ecart vertical moins six, et le quotient de moins six par moins quatre vaut encore un virgule cinq. Le coefficient directeur est le meme dans les deux lectures.</desc>

              <line class="grid-line" x1="30" y1="12" x2="30" y2="192"></line>
              <line class="grid-line" x1="50" y1="12" x2="50" y2="192"></line>
              <line class="grid-line" x1="70" y1="12" x2="70" y2="192"></line>
              <line class="grid-line" x1="110" y1="12" x2="110" y2="192"></line>
              <line class="grid-line" x1="130" y1="12" x2="130" y2="192"></line>
              <line class="grid-line" x1="150" y1="12" x2="150" y2="192"></line>
              <line class="grid-line" x1="30" y1="192" x2="150" y2="192"></line>
              <line class="grid-line" x1="30" y1="172" x2="150" y2="172"></line>
              <line class="grid-line" x1="30" y1="152" x2="150" y2="152"></line>
              <line class="grid-line" x1="30" y1="112" x2="150" y2="112"></line>
              <line class="grid-line" x1="30" y1="92" x2="150" y2="92"></line>
              <line class="grid-line" x1="30" y1="72" x2="150" y2="72"></line>
              <line class="grid-line" x1="30" y1="52" x2="150" y2="52"></line>
              <line class="grid-line" x1="30" y1="32" x2="150" y2="32"></line>
              <line class="grid-line" x1="30" y1="12" x2="150" y2="12"></line>
              <line class="axis" x1="30" y1="132" x2="160" y2="132"></line>
              <line class="axis" x1="90" y1="192" x2="90" y2="2"></line>
              <line class="curve-main" x1="30" y1="182" x2="143.33" y2="12"></line>
              <line class="guide-line" x1="50" y1="152" x2="130" y2="152"></line>
              <line class="guide-line" x1="130" y1="152" x2="130" y2="32"></line>
              <circle class="plot-point-alt" cx="50" cy="152" r="5"></circle>
              <circle class="plot-point" cx="130" cy="32" r="5"></circle>
              <text class="tick-label" x="44" y="166" text-anchor="end">A</text>
              <text class="tick-label" x="136" y="28" text-anchor="start">B</text>
              <text class="tick-label" x="90" y="168" text-anchor="middle">+4</text>
              <text class="tick-label" x="136" y="96" text-anchor="start">+6</text>
              <text class="annotation-label" x="90" y="212" text-anchor="middle">de A vers B</text>
              <text class="label-soft" x="90" y="226" text-anchor="middle">6 divisé par 4 donne 1,5</text>

              <line class="grid-line" x1="222" y1="12" x2="222" y2="192"></line>
              <line class="grid-line" x1="242" y1="12" x2="242" y2="192"></line>
              <line class="grid-line" x1="262" y1="12" x2="262" y2="192"></line>
              <line class="grid-line" x1="302" y1="12" x2="302" y2="192"></line>
              <line class="grid-line" x1="322" y1="12" x2="322" y2="192"></line>
              <line class="grid-line" x1="342" y1="12" x2="342" y2="192"></line>
              <line class="grid-line" x1="222" y1="192" x2="342" y2="192"></line>
              <line class="grid-line" x1="222" y1="172" x2="342" y2="172"></line>
              <line class="grid-line" x1="222" y1="152" x2="342" y2="152"></line>
              <line class="grid-line" x1="222" y1="112" x2="342" y2="112"></line>
              <line class="grid-line" x1="222" y1="92" x2="342" y2="92"></line>
              <line class="grid-line" x1="222" y1="72" x2="342" y2="72"></line>
              <line class="grid-line" x1="222" y1="52" x2="342" y2="52"></line>
              <line class="grid-line" x1="222" y1="32" x2="342" y2="32"></line>
              <line class="grid-line" x1="222" y1="12" x2="342" y2="12"></line>
              <line class="axis" x1="222" y1="132" x2="352" y2="132"></line>
              <line class="axis" x1="282" y1="192" x2="282" y2="2"></line>
              <line class="curve-main" x1="222" y1="182" x2="335.33" y2="12"></line>
              <line class="guide-line" x1="322" y1="32" x2="322" y2="152"></line>
              <line class="guide-line" x1="322" y1="152" x2="242" y2="152"></line>
              <circle class="plot-point-alt" cx="242" cy="152" r="5"></circle>
              <circle class="plot-point" cx="322" cy="32" r="5"></circle>
              <text class="tick-label" x="236" y="166" text-anchor="end">A</text>
              <text class="tick-label" x="328" y="28" text-anchor="start">B</text>
              <text class="tick-label" x="282" y="168" text-anchor="middle">-4</text>
              <text class="tick-label" x="328" y="96" text-anchor="start">-6</text>
              <text class="annotation-label" x="282" y="212" text-anchor="middle">de B vers A</text>
              <text class="label-soft" x="282" y="226" text-anchor="middle">moins 6 divisé par moins 4 donne 1,5</text>
            </svg>
          `,
          notes: [
            'Le coefficient directeur est le quotient $a = \\dfrac{\\Delta y}{\\Delta x}$, c\'est-à-dire <strong>l\'écart vertical divisé par l\'écart horizontal</strong>. Ici $\\dfrac{6}{4} = 1{,}5$.',
            'À droite, on a lu la même droite <strong>dans l\'autre sens</strong>. Les deux écarts sont devenus négatifs <strong>ensemble</strong> : $\\dfrac{-6}{-4} = 1{,}5$. Le quotient est inchangé, et c\'est heureux — une droite n\'a qu\'un seul coefficient directeur.',
            'L\'erreur la plus fréquente est d\'inverser le quotient et d\'écrire $\\dfrac{\\Delta x}{\\Delta y} = \\dfrac{4}{6}$, soit environ $0{,}67$. Le contrôle immédiat : une droite qui monte de plus de $1$ quand on avance de $1$ a forcément $a > 1$.',
            'Le moyen le plus sûr de ne pas te tromper : lis toujours ton triangle <strong>dans le même ordre</strong> que la fraction — le haut de la fraction est le déplacement <strong>vertical</strong>, le bas le déplacement <strong>horizontal</strong>.'
          ],
          reading: 'Les deux triangles sont le même triangle, parcouru dans deux sens opposés. Quand tu changes de sens, les deux écarts changent de signe en même temps, donc leur quotient ne change pas.',
          caption: 'La droite passant par $A(-2\\,;\\,-1)$ et $B(2\\,;\\,5)$, lue de $A$ vers $B$ puis de $B$ vers $A$ : le coefficient directeur vaut $1{,}5$ dans les deux cas.'
        }
      ],
      recap: [
        'Une fonction <strong>affine</strong> s\'écrit $f(x) = ax + b$ et se représente par une <strong>droite</strong>.',
        'Une fonction <strong>linéaire</strong> est une affine avec $b = 0$ : sa droite passe par l\'<strong>origine</strong>, et elle traduit une proportionnalité.',
        'Le coefficient directeur $a$ donne la variation de $f(x)$ quand $x$ augmente de $1$ ; l\'ordonnée à l\'origine $b$ vaut $f(0)$.',
        'Deux points suffisent à tracer la droite — et deux points suffisent à retrouver $a$ grâce à $a = \\dfrac{f(x_2) - f(x_1)}{x_2 - x_1}$.',
        'Deux droites de même $a$ sont <strong>parallèles</strong>.'
      ],
      piege: 'Piège : toute fonction linéaire est affine, mais l\'inverse est faux. $f(x) = 2x + 3$ est affine et <strong>n\'est pas</strong> linéaire, car $f(0) = 3 \\neq 0$ — il n\'y a donc <strong>pas</strong> proportionnalité : doubler $x$ ne double pas $f(x)$. Vérifie : $f(1) = 5$ mais $f(2) = 7$, et $7 \\neq 2 \\times 5$. Seules les fonctions linéaires ($b = 0$) traduisent une proportionnalité.'
    },
    quiz: [
      {
        q: 'Parmi ces fonctions, laquelle est <strong>linéaire</strong> ?',
        options: ['$f(x) = 3x + 1$', '$g(x) = 5x$', '$h(x) = x^2$', '$k(x) = 7$'],
        answer: 1,
        correction: 'Une fonction linéaire s\'écrit $ax$ sans terme constant : $g(x) = 5x$ convient. $f$ est affine mais pas linéaire (son $b$ vaut $1$), $h$ n\'est pas affine du tout (le $x$ est au carré), et $k$ est affine constante ($a = 0$, $b = 7$).'
      },
      {
        q: 'Quelle est l\'ordonnée à l\'origine de $f(x) = -4x + 9$ ?',
        options: ['$-4$', '$0$', '$9$', '$-9$'],
        answer: 2,
        correction: 'L\'ordonnée à l\'origine est la valeur en $0$ : $f(0) = -4 \\times 0 + 9 = 9$. C\'est le terme constant, donc $9$. Le $-4$, lui, est le coefficient directeur : la droite descend.'
      },
      {
        q: 'Une fonction affine vérifie $f(2) = 7$ et $f(5) = 16$. Que vaut son coefficient directeur ?',
        options: ['$3$', '$9$', '$\\dfrac{1}{3}$', '$23$'],
        answer: 0,
        correction: 'Le coefficient directeur est un rapport de deux <strong>écarts</strong> : $a = \\dfrac{f(5) - f(2)}{5 - 2} = \\dfrac{16 - 7}{3} = \\dfrac{9}{3} = 3$.<br/><br/>$9$ est l\'écart des images seul, sans division par l\'écart des $x$. $\\dfrac{1}{3}$ est le quotient écrit à l\'envers, $\\dfrac{\\Delta x}{\\Delta y}$ : or la droite monte de $9$ quand on avance de $3$, elle est donc plus raide que $1$. $23$ est la somme $16 + 7$, qui n\'a aucun sens ici : on compare des écarts, on n\'additionne pas des valeurs.'
      },
      {
        q: 'La droite de $f(x) = 2x + 5$ et celle de $g(x) = 2x - 1$ sont :',
        options: ['sécantes en un point', 'confondues', 'perpendiculaires', 'parallèles'],
        answer: 3,
        correction: 'Les deux ont le même coefficient directeur $a = 2$ : elles montent exactement de la même façon, elles sont donc <strong>parallèles</strong>. Elles ne sont pas confondues car leurs ordonnées à l\'origine diffèrent ($5$ et $-1$).'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne le tarif fixe et le tarif
         unitaire, calcule le prix pour $x$ unités » — habillé de six contextes
         tirés par pick(). Mesure à 60 tirages : 6 moules d'énoncé, mais
         **1 seule tâche distincte**.

         Le manque est frappant pour un chapitre GRAPHIQUE par nature : la
         banque ne faisait jamais lire ni tracer une droite, ne demandait
         jamais le coefficient directeur à partir de deux points, et ne
         comparait jamais deux tarifs — alors que c'est la situation qui donne
         son sens aux fonctions affines, et celle que le brevet pose.
         L'énoncé FOURNISSAIT toujours $a$ et $b$ : l'élève n'avait qu'à
         substituer, et ne construisait jamais la fonction.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'tarif'      : la tâche d'origine, conservée ;
           - 'image'      : calculer $f(x)$ à partir de l'expression seule ;
           - 'antecedent' : remonter de $f(x)$ à $x$, donc résoudre une
                            équation — l'élève y applique la fonction au lieu
                            de l'inverser ;
           - 'coefficient': trouver $a$ à partir de DEUX points, c'est-à-dire
                            un rapport d'ACCROISSEMENTS et non de valeurs ;
           - 'ordonnee'   : trouver $b$ connaissant $a$ et un point ;
           - 'lineaire'   : reconnaître une situation de proportionnalité,
                            donc distinguer linéaire et affine ;
           - 'intersection' : le seuil où deux tarifs se croisent, qui prépare
                            les systèmes et la lecture graphique.

         Aucune figure : le chapitre porte sa propre figure de cours, et la
         bibliothèque n'a pas de helper de droite dans un repère. Une figure
         d'exercice y coterait les points qu'on demande de trouver. */
      generate() {
        const tache = pick(['tarif', 'image', 'antecedent', 'coefficient',
                            'ordonnee', 'lineaire', 'intersection']);

        if (tache === 'image') {
          /* L'expression est donnée, on demande une image. Le coefficient est
             parfois NÉGATIF, ce que l'ancienne banque ne produisait jamais :
             un tarif ne décroît pas, mais une fonction, si. */
          const a = pick([-4, -3, -2, 2, 3, 4, 5]);
          const b = rand(-8, 12);
          const x = rand(-6, 9);
          const bs = b === 0 ? '' : (b < 0 ? ' - ' + Math.abs(b) : ' + ' + b);   // « 3x », jamais « 3x + 0 »
          return {
            statement: `Soit la fonction affine $f$ définie par $f(x) = ${a}x${bs}$.<br/><br/>` +
              `Calcule <strong>$f(${x})$</strong>.`,
            answer: a * x + b, tolerance: 0.01, unit: '',
            hint: `Calculer $f(${x})$, c'est <strong>remplacer</strong> chaque $x$ de l'expression par $${x}$.<br/><br/>Attention aux signes : $${a} \\times (${x})$ se calcule avant l'addition.`,
            solution: [
              `Pour calculer une image, on remplace $x$ par la valeur donnée dans l'expression de la fonction.`,
              `$f(${x}) = ${a} \\times (${x})${bs} = ${a * x}${bs}$`,
              `$f(${x}) = ${a * x + b}$.`
            ]
          };
        }

        if (tache === 'antecedent') {
          /* REMONTER DE L'IMAGE À L'ANTÉCÉDENT : c'est une ÉQUATION, pas une
             substitution. L'élève calcule souvent $f$ de la valeur donnée,
             c'est-à-dire l'inverse de ce qu'on demande. On tire $x$ entier
             pour que la réponse reste ronde. */
          const a = pick([2, 3, 4, 5, -2, -3]);
          const b = rand(-9, 9);
          const x = rand(2, 12);
          const bs = b === 0 ? '' : (b < 0 ? ' - ' + Math.abs(b) : ' + ' + b);   // « 5x », jamais « 5x + 0 »
          const y = a * x + b;
          return {
            statement: `Soit la fonction affine $f$ définie par $f(x) = ${a}x${bs}$.<br/><br/>` +
              `Quel nombre a pour image $${y}$ ? Autrement dit, résous $f(x) = ${y}$.`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Ici on ne remplace <strong>pas</strong> $x$ : on cherche justement sa valeur.<br/><br/>Écris l'équation $${a}x${bs} = ${y}$ et résous-la.`,
            solution: [
              `On cherche un <strong>antécédent</strong> : la valeur de $x$ est l'inconnue, et c'est son image qui est donnée. Cela se résout comme une équation.`,
              `$${a}x${bs} = ${y}$, donc $${a}x = ${y - b}$.`,
              `$x = \\dfrac{${y - b}}{${a}} = ${x}$.<br/><br/>Contrôle : $f(${x}) = ${a} \\times ${x}${bs} = ${y}$, on retrouve bien l'image annoncée.`
            ]
          };
        }

        if (tache === 'coefficient') {
          /* UN RAPPORT D'ACCROISSEMENTS, et non de valeurs. C'est l'erreur que
             la fiche professeur de ce chapitre traite, et rien ne la
             travaillait. */
          const a = pick([2, 3, 4, 5, -2, -3, -4]);
          const b = rand(-8, 10);
          const x1 = rand(1, 5), x2 = x1 + rand(2, 6);
          const y1 = a * x1 + b, y2 = a * x2 + b;
          return {
            statement: `Une fonction affine $g$ vérifie $g(${x1}) = ${y1}$ et $g(${x2}) = ${y2}$.<br/><br/>` +
              `Calcule son <strong>coefficient directeur</strong>.`,
            answer: a, tolerance: 0.01, unit: '',
            hint: `Le coefficient directeur mesure de combien $g$ varie quand $x$ augmente de $1$.<br/><br/>C'est un rapport de deux <strong>écarts</strong> : $a = \\dfrac{g(${x2}) - g(${x1})}{${x2} - ${x1}}$.`,
            solution: [
              `Le coefficient directeur est le rapport de l'accroissement des images sur l'accroissement des abscisses — deux <strong>écarts</strong>, jamais deux valeurs.`,
              `$a = \\dfrac{${y2} - (${y1})}{${x2} - ${x1}} = \\dfrac{${y2 - y1}}{${x2 - x1}}$`,
              `$a = ${a}$.<br/><br/>Lecture : quand $x$ augmente de $1$, $g(x)$ ${a > 0 ? 'augmente' : 'diminue'} de $${Math.abs(a)}$.`
            ]
          };
        }

        if (tache === 'ordonnee') {
          const a = pick([2, 3, 4, -2, -3, 0.5]);
          const b = rand(-9, 11);
          const x = rand(2, 8);
          const y = a * x + b;
          return {
            statement: `Une fonction affine $h$ a pour coefficient directeur $a = ${fr(a)}$, et l'on sait que $h(${x}) = ${fr(y)}$.<br/><br/>` +
              `Quelle est son <strong>ordonnée à l'origine</strong> $b$ ?`,
            answer: b, tolerance: 0.01, unit: '',
            hint: `Écris $h(x) = ${fr(a)}x + b$, puis remplace $x$ par $${x}$ : tu obtiens une équation où $b$ est la seule inconnue.<br/><br/>L'ordonnée à l'origine est aussi la valeur de $h(0)$.`,
            solution: [
              `On écrit la forme générale $h(x) = ${fr(a)}x + b$, où seul $b$ manque.`,
              `En $x = ${x}$ : $${fr(a)} \\times ${x} + b = ${fr(y)}$, soit $${fr(a * x)} + b = ${fr(y)}$.`,
              `$b = ${fr(y)} - ${fr(a * x)} = ${fr(b)}$.<br/><br/>C'est aussi la valeur de $h(0)$, c'est-à-dire la hauteur à laquelle la droite coupe l'axe vertical.`
            ]
          };
        }

        if (tache === 'lineaire') {
          /* DISTINGUER LINÉAIRE ET AFFINE, donc reconnaître une
             proportionnalité. Réponse codée 1/0 pour rester numérique. */
          const cas = pick([
            { f: 'f(x) = 5x', prop: true, pourquoi: 'il n\'y a aucun terme constant : la fonction est <strong>linéaire</strong>, sa droite passe par l\'origine' },
            { f: 'f(x) = 5x + 2', prop: false, pourquoi: 'le terme constant $+2$ empêche la proportionnalité : pour $x = 0$ on a déjà $f(0) = 2$, alors qu\'une proportionnalité donnerait $0$' },
            { f: 'f(x) = -3x', prop: true, pourquoi: 'un coefficient négatif ne change rien à la proportionnalité : il n\'y a pas de terme constant' },
            { f: 'f(x) = 7', prop: false, pourquoi: 'la fonction est constante : $x$ peut doubler sans que $f(x)$ change, ce qui exclut toute proportionnalité' },
            { f: 'f(x) = x^2', prop: false, pourquoi: 'la fonction n\'est même pas affine : doubler $x$ multiplie $f(x)$ par $4$, pas par $2$' }
          ]);
          return {
            statement: `On considère la fonction $${cas.f}$.<br/><br/>` +
              `Traduit-elle une situation de <strong>proportionnalité</strong> ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: cas.prop ? 1 : 0, tolerance: 0.01, unit: '',
            hint: `Une situation de proportionnalité s'écrit $f(x) = ax$ : le coefficient multiplie $x$, et <strong>rien</strong> ne s'ajoute.<br/><br/>Un test rapide : que vaut $f(0)$ ? Une proportionnalité donne toujours $0$.`,
            solution: [
              `Seule une fonction <strong>linéaire</strong>, de la forme $f(x) = ax$, traduit une proportionnalité : sa droite passe par l'origine.`,
              `Ici, ${cas.pourquoi}.`,
              cas.prop ? `C'est donc bien une proportionnalité. Réponse : $1$.`
                       : `Ce n'est donc pas une proportionnalité. Réponse : $0$.`
            ]
          };
        }

        if (tache === 'intersection') {
          /* LE SEUIL OÙ DEUX TARIFS SE CROISENT. C'est la situation qui donne
             son sens au chapitre, et la banque ne la posait jamais. On
             construit le croisement pour qu'il tombe sur un entier. */
          const x = rand(4, 20);
          const a1 = rand(3, 9);
          const a2 = rand(1, a1 - 1);
          const a2s = a2 === 1 ? '' : String(a2);   // « x + 18 », jamais « 1x + 18 »
          const b2 = (a1 - a2) * x;
          /* L'ÉLISION est portée par le contexte (`de` ou `d'`), jamais
             reconstruite : « le nombre x de entrées » est sorti d'une première
             version qui écrivait « de » en dur. Quatrième défaut de ce genre
             attrapé le 2026-09-13, après l'accord du pronom en trigonométrie,
             l'élision en équations et le genre en systèmes — tous invisibles
             tant qu'un seul contexte était tiré. */
          const ctx = pick([
            { n1: 'sans abonnement', n2: 'avec abonnement', de: 'de séances', u: 'séances', v: 'séance' },
            { n1: 'à l\'unité', n2: 'avec carte', de: 'd\'entrées', u: 'entrées', v: 'entrée' },
            { n1: 'au trajet', n2: 'avec forfait', de: 'de trajets', u: 'trajets', v: 'trajet' }
          ]);
          return {
            statement: `Deux formules sont proposées, en euros, selon le nombre $x$ ${ctx.de}.<br/><br/>` +
              `<strong>Formule A</strong> (${ctx.n1}) : $f(x) = ${a1}x$.<br/><br/>` +
              `<strong>Formule B</strong> (${ctx.n2}) : $g(x) = ${a2s}x + ${b2}$.<br/><br/>` +
              `Pour quel nombre ${ctx.de} les deux formules coûtent-elles <strong>exactement le même prix</strong> ?`,
            answer: x, tolerance: 0.01, unit: '',
            hint: `Les deux prix sont égaux quand $f(x) = g(x)$.<br/><br/>Écris $${a1}x = ${a2s}x + ${b2}$ et résous cette équation.`,
            solution: [
              `Les deux formules coûtent le même prix lorsque leurs deux expressions sont égales : c'est le point où les deux droites se croisent.`,
              `$${a1}x = ${a2s}x + ${b2}$, donc $${a1 - a2 === 1 ? '' : a1 - a2}x = ${b2}$.`,
              `${a1 - a2 === 1 ? `L'inconnue est déjà isolée : $x = ${x}$.` : `$x = \\dfrac{${b2}}{${a1 - a2}} = ${x}$.`}<br/><br/>Au-delà de $${x}$ ${ctx.u}, la formule B devient la moins chère, puisque son prix augmente moins vite ($${a2}$ € par ${ctx.v} contre $${a1}$ €).`
            ]
          };
        }

        /* tache === 'tarif' : la tâche d'origine, conservée telle quelle.
           a porte UNE decimale (tarif au km, à l'heure...), b est entier.
           Le calcul se fait en dixièmes pour éviter toute dérive en virgule
           flottante : aDix * x + b*10 reste un entier exact. */
        const aDix = rand(8, 25);
        const b = rand(2, 9);
        const x = rand(4, 20);
        const a = aDix / 10;
        const ax = (aDix === 10 ? '' : fr(a)) + 'x';   // « x + 6 », jamais « 1x + 6 »
        const total = (aDix * x + b * 10) / 10;

        // `deUnite` porte l'elision : « de kilometres » mais « d'heures ».
        const ctx = pick([
          { emoji: '🚕', sujet: 'Un <strong>taxi</strong>', debut: 'de prise en charge', taux: 'par kilomètre',
            unite: 'kilomètres', deUnite: 'de kilomètres', question: 'Quel est le prix d\'une course de' },
          { emoji: '🏋️', sujet: 'Une <strong>salle de sport</strong>', debut: 'de frais d\'inscription', taux: 'par séance',
            unite: 'séances', deUnite: 'de séances', question: 'Combien coûte un abonnement de' },
          { emoji: '🚲', sujet: 'Un <strong>service de location de vélos</strong>', debut: 'de mise à disposition', taux: 'par heure',
            unite: 'heures', deUnite: 'd\'heures', question: 'Quel est le prix d\'une location de' },
          { emoji: '🎨', sujet: 'Un <strong>atelier de poterie</strong>', debut: 'de droit d\'entrée', taux: 'par pièce cuite',
            unite: 'pièces', deUnite: 'de pièces', question: 'Que paie-t-on pour' },
          { emoji: '📦', sujet: 'Un <strong>transporteur</strong>', debut: 'de frais de dossier', taux: 'par colis',
            unite: 'colis', deUnite: 'de colis', question: 'Quel est le coût d\'un envoi de' },
          { emoji: '🎣', sujet: 'Un <strong>étang de pêche</strong>', debut: 'de droit d\'accès', taux: 'par heure',
            unite: 'heures', deUnite: 'd\'heures', question: 'Combien coûte une journée de' }
        ]);

        return {
          statement: `${ctx.emoji} ${ctx.sujet} facture $${b}$ € ${ctx.debut}, puis $${fr(a)}$ € ${ctx.taux}.<br/><br/>` +
            `Exprime le prix $f(x)$ en fonction du nombre $x$ ${ctx.deUnite}, puis réponds : <strong>${ctx.question} $${x}$ ${ctx.unite} ?</strong>`,
          answer: total,
          tolerance: 0.01,
          unit: '€',
          hint: `La valeur de départ donne $b = ${b}$, le rythme donne $a = ${fr(a)}$. Donc $f(x) = ${ax} + ${b}$ — il ne reste qu'à remplacer $x$ par $${x}$.`,
          solution: [
            `La valeur de départ est $${b}$ € : c'est l'<strong>ordonnée à l'origine</strong>, donc $b = ${b}$.`,
            `Chaque unité supplémentaire ajoute $${fr(a)}$ € : c'est le <strong>coefficient directeur</strong>, donc $a = ${fr(a)}$.`,
            `La fonction s'écrit donc $f(x) = ${ax} + ${b}$.`,
            `On remplace $x$ par $${x}$ : $f(${x}) = ${fr(a)} \\times ${x} + ${b} = ${fr((aDix * x) / 10)} + ${b} = ${fr(total)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une médiathèque propose deux formules pour emprunter des DVD.<br/><br/>' +
        '<strong>Formule A</strong> : une carte annuelle à $30$ €, puis $1$ € par DVD emprunté.<br/>' +
        '<strong>Formule B</strong> : aucune carte à payer, mais $2{,}50$ € par DVD emprunté.<br/><br/>' +
        'On note $x$ le nombre de DVD empruntés dans l\'année.',
      schema: null,
      tasks: [
        '(Étape 1 de la méthode) Exprimer le coût annuel $A(x)$ de la formule A, puis le coût $B(x)$ de la formule B. Préciser pour chacune s\'il s\'agit d\'une fonction affine ou linéaire.',
        'Calculer le coût des deux formules pour $10$ DVD, puis pour $30$ DVD. Laquelle est la plus avantageuse dans chaque cas ?',
        '(Comme dans l\'exemple du cours) Déterminer par le calcul le nombre de DVD à partir duquel la formule A devient plus avantageuse.',
        'Réflexion : sans refaire le calcul, que peut-on dire des deux droites si la médiathèque augmente le prix de la carte à $40$ € sans toucher au prix par DVD ?'
      ],
      solutions: [
        '<strong>Formule A</strong> : $30$ € de départ puis $1$ € par DVD, donc $A(x) = x + 30$. C\'est une fonction <strong>affine</strong> ($b = 30 \\neq 0$).<br/><strong>Formule B</strong> : rien au départ, donc $B(x) = 2{,}5x$. C\'est une fonction <strong>linéaire</strong>, et le coût y est proportionnel au nombre de DVD.',
        'Pour $10$ DVD : $A(10) = 10 + 30 = 40$ € et $B(10) = 2{,}5 \\times 10 = 25$ €. La formule <strong>B</strong> est meilleure.<br/><br/>Pour $30$ DVD : $A(30) = 30 + 30 = 60$ € et $B(30) = 2{,}5 \\times 30 = 75$ €. Cette fois la formule <strong>A</strong> l\'emporte.',
        'On cherche le nombre de DVD pour lequel les deux coûtent pareil, c\'est-à-dire $A(x) = B(x)$ :<br/><br/>$x + 30 = 2{,}5x$, donc $30 = 1{,}5x$, donc $x = \\dfrac{30}{1{,}5} = 20$.<br/><br/>À $20$ DVD les deux formules coûtent $50$ €. <strong>Au-delà de $20$ DVD</strong>, la formule A devient plus avantageuse — ce qui est cohérent avec les deux calculs précédents.',
        'Le prix par DVD ne change pas, donc le coefficient directeur de $A$ reste $1$ : la nouvelle droite est <strong>parallèle</strong> à l\'ancienne, simplement décalée de $10$ vers le haut. Le seuil de rentabilité recule : il passe à $40 = 1{,}5x$, soit environ $27$ DVD.'
      ],
      finalAnswer: '$A(x) = x + 30$ (affine), $B(x) = 2{,}5x$ (linéaire). Les deux formules se valent à $20$ DVD ($50$ €) ; au-delà, la formule A est plus avantageuse.'
    },
    evaluation: {
      title: 'Évaluation — Fonctions affines et linéaires',
      duration: '20 min',
      questions: [
        {
          statement: 'Soit $f(x) = 3x - 7$. Calcule $f(5)$.',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'On remplace $x$ par $5$ : $f(5) = 3 \\times 5 - 7 = 15 - 7 = 8$.'
        },
        /* Q2 RÉÉCRITE le 2026-09-13. Elle demandait « quelle est l'ordonnée à
           l'origine de $g(x) = -2x + 11$ ? », c'est-à-dire de recopier le
           terme constant : la troisième application numérique d'affilée de
           l'évaluation, et la plus mécanique des trois.

           Elle demande maintenant de relier une ÉCRITURE à un DESSIN sans rien
           calculer : quatre droites sont décrites par leur allure et leur point
           de départ, et l'élève doit reconnaître laquelle correspond à
           $g(x) = -2x + 11$. Le signe de $a$ donne le sens de variation, le
           terme $b$ donne le point de départ — c'est « représenter », et
           c'était la compétence la plus rare de l'ouvrage (4 occurrences sur
           65 questions avant cette réécriture).

           Pourquoi une description verbale plutôt qu'une figure : l'évaluation
           est composée sans planche graphique, et une figure y serait la seule
           du livre à porter une question notée. La description nomme ce que
           l'élève doit lire sur un graphique — sens de variation et ordonnée à
           l'origine — sans exiger d'appareil supplémentaire. */
        {
          statement: 'On a tracé quatre droites dans un même repère. Laquelle représente la fonction $g(x) = -2x + 11$ ?',
          type: 'multiple-choice',
          options: [
            'Une droite qui <strong>descend</strong> et qui coupe l\'axe vertical au-dessus de zéro, à la hauteur $11$.',
            'Une droite qui <strong>monte</strong> et qui coupe l\'axe vertical à la hauteur $11$.',
            'Une droite qui <strong>descend</strong> et qui passe par l\'origine du repère.',
            'Une droite qui <strong>monte</strong> et qui coupe l\'axe vertical à la hauteur $-2$.'
          ],
          answer: 0,
          points: 2,
          correction: 'Deux informations se lisent directement dans l\'écriture $g(x) = ax + b$, et aucune ne demande de calcul.<br/><br/>' +
            'Le <strong>coefficient directeur</strong> $a = -2$ est <strong>négatif</strong> : la droite <strong>descend</strong> quand on va vers la droite. Cela élimine déjà les deux propositions où elle monte.<br/><br/>' +
            'L\'<strong>ordonnée à l\'origine</strong> $b = 11$ est la hauteur à laquelle la droite coupe l\'axe vertical : elle le coupe donc à $11$, et non à $-2$ ni à l\'origine.<br/><br/>' +
            '<strong>L\'erreur à éviter</strong> : prendre $-2$ pour la hauteur de départ. Le nombre collé au $x$ donne l\'<strong>inclinaison</strong>, celui qui est seul donne le <strong>départ</strong>.'
        },
        /* Q3 RÉÉCRITE le 2026-09-13. Elle demandait de calculer un coefficient
           directeur à partir de deux points, soit l'application d'une formule —
           la quatrième question calculatoire de l'évaluation.

           Elle demande maintenant de JUGER un raisonnement et d'expliquer
           pourquoi il échoue, donc de produire une explication et non un
           nombre : c'est « communiquer », la compétence la moins évaluée de
           l'ouvrage (3 occurrences sur 65 avant cette réécriture). L'erreur
           soumise au jugement — confondre accroissement et valeur — est celle
           que la fiche professeur de ce chapitre traite, ce qui referme la
           boucle entre le diagnostic et l'évaluation. */
        {
          statement: 'Une fonction affine $h$ vérifie $h(1) = 4$ et $h(6) = 24$.<br/><br/>' +
            'Pour trouver le coefficient directeur, Malo écrit : « $a = \\dfrac{24}{6} = 4$ ».<br/><br/>' +
            'Il trouve la bonne valeur, et pourtant son raisonnement est faux. Quelle affirmation l\'explique le mieux ?',
          type: 'multiple-choice',
          options: [
            'Il a divisé une valeur par une abscisse au lieu de diviser un <strong>accroissement</strong> par un accroissement : il fallait écrire $\\dfrac{24 - 4}{6 - 1}$. Sa méthode ne marcherait plus si $h(1)$ valait autre chose.',
            'Il aurait dû écrire $\\dfrac{6}{24}$ : le coefficient directeur est l\'inverse de ce qu\'il a calculé.',
            'Son erreur est de ne pas avoir arrondi : le coefficient directeur vaut en réalité $4{,}5$.',
            'On ne peut pas calculer un coefficient directeur à partir de deux points, il faut connaître l\'ordonnée à l\'origine.'
          ],
          answer: 0,
          points: 2,
          correction: 'Le coefficient directeur mesure de combien $h$ <strong>varie</strong> quand $x$ augmente : c\'est un rapport de deux <strong>écarts</strong>, pas un rapport de deux valeurs.<br/><br/>' +
            'La formule est $a = \\dfrac{h(6) - h(1)}{6 - 1} = \\dfrac{24 - 4}{5} = \\dfrac{20}{5} = 4$.<br/><br/>' +
            'Malo a écrit $\\dfrac{24}{6}$, c\'est-à-dire une valeur divisée par une abscisse. Il tombe sur $4$ par coïncidence, parce que $\\dfrac{20}{5}$ et $\\dfrac{24}{6}$ valent tous deux $4$.<br/><br/>' +
            '<strong>Le contre-exemple qui tranche</strong> : si l\'énoncé avait donné $h(1) = 9$ au lieu de $4$, la vraie réponse serait $\\dfrac{24 - 9}{5} = 3$, alors que la méthode de Malo donnerait encore $4$. Un résultat juste ne prouve pas qu\'une méthode l\'est.'
        },
        {
          statement: 'Parmi ces fonctions, laquelle traduit une situation de <strong>proportionnalité</strong> ?',
          type: 'multiple-choice',
          options: ['$f(x) = 6x + 2$', '$g(x) = 6x$', '$h(x) = 6$', '$k(x) = x^2 + 6$'],
          answer: 1,
          points: 2,
          correction: 'Seule une fonction <strong>linéaire</strong> traduit une proportionnalité, c\'est-à-dire une fonction de la forme $ax$ sans terme constant : $g(x) = 6x$. Sa droite passe par l\'origine, et doubler $x$ y double bien $g(x)$.'
        },
        {
          statement: 'Un abonnement téléphonique coûte $8$ € par mois, plus $0{,}30$ € par SMS hors forfait. Quel est le montant de la facture pour $40$ SMS hors forfait, en euros ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'La situation est affine : $f(x) = 0{,}3x + 8$, où $x$ est le nombre de SMS hors forfait.<br/><br/>Pour $x = 40$ : $f(40) = 0{,}3 \\times 40 + 8 = 12 + 8 = 20$ €.'
        }
      ]
    }
  }
);
