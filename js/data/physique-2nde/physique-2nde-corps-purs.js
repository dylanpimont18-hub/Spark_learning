/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-corps-purs.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-corps-purs',
    level: 2, subject: 'physique',
    icon: '🧊',
    title: 'Corps purs et mélanges',
    subtitle: 'Espèce chimique, corps pur, mélange homogène/hétérogène, identification (Tfus, CCM, masse volumique)',
    keywords: ['Corps pur', 'Mélange', 'Chromatographie', 'Température de fusion', 'Espèce chimique'],
    physics: 'Distinguer un corps pur d\'un mélange permet de contrôler la pureté d\'un médicament, de détecter une fraude alimentaire (dilution d\'une huile essentielle), d\'authentifier des pigments en analyse d\'œuvres d\'art, ou d\'identifier un carburant lors d\'une expertise après incendie.',

    cours: {
      intro: 'Un verre d\'eau du robinet et un verre d\'eau distillée se ressemblent en tout point à l\'œil nu : transparents, incolores, liquides. Pourtant, l\'un est un <strong>mélange</strong> (eau, sels dissous, traces de chlore...) et l\'autre se rapproche d\'un <strong>corps pur</strong> (une seule espèce chimique, $H_2O$). L\'apparence ne suffit donc jamais à conclure : il faut des <strong>critères physiques mesurables</strong>.<br/><br/>Ce chapitre présente ces critères : la température de changement d\'état, la masse volumique, et une technique de séparation et d\'identification très utilisée en laboratoire, la <strong>chromatographie sur couche mince</strong>.',
      definitions: [
        { term: 'Espèce chimique', def: 'Ensemble d\'entités (atomes, molécules ou ions) identiques, caractérisées par une formule chimique précise (ex : le dioxygène $O_2$, l\'eau $H_2O$, l\'ion chlorure $Cl^-$).' },
        { term: 'Corps pur', def: 'Échantillon de matière ne contenant qu\'<strong>une seule</strong> espèce chimique. Il est caractérisé par des grandeurs physiques constantes (température de fusion $T_{fus}$, température d\'ébullition $T_{eb}$, masse volumique $\\rho$), comparables à des valeurs de référence tabulées.' },
        { term: 'Mélange', def: 'Échantillon contenant <strong>plusieurs</strong> espèces chimiques. <strong>Homogène</strong> si on ne distingue qu\'une seule phase à l\'œil nu (ex : eau salée) ; <strong>hétérogène</strong> si plusieurs phases sont visibles (ex : eau et huile).' },
        { term: 'Chromatographie sur couche mince (CCM)', def: 'Technique séparant les espèces chimiques d\'un mélange par migration différentielle sur une plaque, sous l\'effet d\'un éluant. Chaque espèce migre avec un rapport frontal $R_f$ caractéristique, comparable à des références déposées côte à côte.' }
      ],
      method: {
        title: 'Identifier un corps pur (ou repérer un mélange) en 3 étapes',
        steps: [
          '<strong>Relever une grandeur physique caractéristique</strong> de l\'échantillon : température de changement d\'état par un suivi $\\theta = f(t)$ lors d\'un chauffage, masse volumique $\\rho = \\dfrac{m}{V}$, ou rapport frontal $R_f$ en chromatographie.',
          '<strong>Comparer</strong> l\'allure de la courbe (ou la valeur mesurée) à une référence tabulée : un <strong>palier net</strong> (température rigoureusement constante) et une valeur conforme à la table signent un corps pur.',
          '<strong>Conclure</strong> : en l\'absence de palier net (la température continue de varier), ou si la valeur mesurée diffère nettement de la référence, ou si plusieurs taches apparaissent en CCM, l\'échantillon est un <strong>mélange</strong> (ou contient des impuretés).'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Identifier un corps pur par sa température de fusion',
        title: 'Courbe de chauffage θ = f(t) : palier net ou pas de palier ?',
        description: 'On chauffe régulièrement deux échantillons partant de $-10°C$ : de la <strong>glace pure</strong> (courbe pleine) et un <strong>mélange eau + sel</strong> (courbe en pointillés). Seul le corps pur présente un <strong>palier net</strong> à température constante pendant le changement d\'état.',
        svg: `
          <svg viewBox="0 0 560 310" role="img" aria-labelledby="corpspurs2nde-title corpspurs2nde-desc">
            <title id="corpspurs2nde-title">Courbes de chauffage comparant un corps pur et un melange</title>
            <desc id="corpspurs2nde-desc">Un graphique represente la temperature en ordonnee, de moins dix a quinze degres Celsius, en fonction du temps de chauffage en abscisse, de zero a dix minutes. Deux courbes partent du meme point a moins dix degres. La courbe pleine, representant de la glace pure, monte puis forme un palier parfaitement horizontal a zero degre pendant plusieurs minutes avant de remonter : c'est la signature d'un corps pur. La courbe en pointilles, representant un melange eau et sel, monte de facon continue sans jamais former de palier horizontal, meme si sa pente se reduit temporairement autour de zero degre.</desc>

            <defs>
              <marker id="arrow-phys2-corpspurs" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="50" y1="270" x2="500" y2="270" marker-end="url(#arrow-phys2-corpspurs)"></line>
            <line class="frame-line" x1="55" y1="270" x2="55" y2="25" marker-end="url(#arrow-phys2-corpspurs)"></line>
            <text class="tick-label" x="55" y="18" text-anchor="middle">θ (°C)</text>
            <text class="tick-label" x="512" y="274" text-anchor="start">t (min)</text>

            <!-- graduations verticales (temperature) -->
            <line class="frame-line" x1="50" y1="250" x2="55" y2="250"></line>
            <text class="tick-label" x="44" y="254" text-anchor="end">−10</text>
            <line class="frame-line" x1="50" y1="210" x2="55" y2="210"></line>
            <text class="tick-label" x="44" y="214" text-anchor="end">−5</text>
            <line class="frame-line" x1="50" y1="170" x2="55" y2="170"></line>
            <text class="tick-label" x="44" y="174" text-anchor="end">0</text>
            <line class="frame-line" x1="50" y1="130" x2="55" y2="130"></line>
            <text class="tick-label" x="44" y="134" text-anchor="end">5</text>
            <line class="frame-line" x1="50" y1="90" x2="55" y2="90"></line>
            <text class="tick-label" x="44" y="94" text-anchor="end">10</text>
            <line class="frame-line" x1="50" y1="50" x2="55" y2="50"></line>
            <text class="tick-label" x="44" y="54" text-anchor="end">15</text>

            <!-- graduations horizontales (temps) -->
            <line class="frame-line" x1="70" y1="270" x2="70" y2="275"></line>
            <text class="tick-label" x="70" y="286" text-anchor="middle">0</text>
            <line class="frame-line" x1="152" y1="270" x2="152" y2="275"></line>
            <text class="tick-label" x="152" y="286" text-anchor="middle">2</text>
            <line class="frame-line" x1="234" y1="270" x2="234" y2="275"></line>
            <text class="tick-label" x="234" y="286" text-anchor="middle">4</text>
            <line class="frame-line" x1="316" y1="270" x2="316" y2="275"></line>
            <text class="tick-label" x="316" y="286" text-anchor="middle">6</text>
            <line class="frame-line" x1="398" y1="270" x2="398" y2="275"></line>
            <text class="tick-label" x="398" y="286" text-anchor="middle">8</text>
            <line class="frame-line" x1="480" y1="270" x2="480" y2="275"></line>
            <text class="tick-label" x="480" y="286" text-anchor="middle">10</text>

            <!-- legende -->
            <line class="curve-main" fill="none" x1="75" y1="45" x2="105" y2="45"></line>
            <text class="tick-label" x="112" y="49" text-anchor="start">Corps pur (glace)</text>
            <line class="guide-line" fill="none" x1="75" y1="64" x2="105" y2="64"></line>
            <text class="tick-label" x="112" y="68" text-anchor="start">Mélange (eau + sel)</text>

            <!-- courbe corps pur (avec palier net a 0 degre) -->
            <path class="curve-main" fill="none" d="M70,250 L111,218 L152,186 L168,170 L300,170 L337,138 L398,98 L480,50"></path>
            <circle class="plot-point" cx="168" cy="170" r="4"></circle>
            <circle class="plot-point" cx="300" cy="170" r="4"></circle>

            <!-- courbe melange (pas de palier net, reste distincte de la courbe corps pur sur toute sa longueur) -->
            <path class="guide-line" fill="none" d="M70,250 L111,222 L152,198 L193,190 L234,186 L275,184 L316,176 L357,158 L398,134 L439,114 L480,94"></path>

            <!-- annotation palier net -->
            <line class="guide-line" x1="250" y1="170" x2="250" y2="143"></line>
            <text class="annotation-label" x="250" y="131" text-anchor="middle">Palier net à 0°C</text>

            <!-- annotation melange -->
            <line class="guide-line" x1="193" y1="190" x2="193" y2="212"></line>
            <text class="annotation-label" x="200" y="226" text-anchor="start">Pas de palier net</text>
          </svg>
        `,
        notes: [
          'La glace pure fond à <strong>température constante</strong> ($0°C$) : tant que les deux phases (solide + liquide) coexistent, toute l\'énergie apportée sert au changement d\'état, pas à élever la température. C\'est le <strong>palier de fusion</strong>, signature d\'un corps pur.',
          'Le mélange eau + sel n\'a pas ce palier net : sa fusion commence à une température plus basse (dépression du point de fusion) et la température continue de varier progressivement pendant tout le changement d\'état.',
          'Cette différence de comportement est un <strong>critère d\'identification</strong> à part entière : observer un palier net et comparer sa valeur à une table de référence permet de confirmer qu\'un échantillon est un corps pur.'
        ],
        reading: 'Suis d\'abord la courbe pleine (corps pur) : repère la portion parfaitement horizontale autour de $0°C$. Compare-la ensuite à la courbe en pointillés (mélange), qui continue de monter sans jamais former de palier.',
        caption: 'Courbes de chauffage $\\theta = f(t)$ : la glace pure (corps pur) présente un palier net à $0°C$ pendant sa fusion, contrairement au mélange eau + sel dont la température continue de varier.'
      },
      diagrams: [{
        theme: 'physique',
        kicker: 'Identifier un corps pur par chromatographie (CCM)',
        title: 'Lecture d\'un rapport frontal $R_f$ en CCM',
        description: 'Une tache de référence et un échantillon (le sirop de menthe de l\'exemple ci-dessous) sont déposés côte à côte sur la même plaque, puis élués simultanément : le front du solvant parcourt $d_{front} = 8{,}0$ cm. Comparer la hauteur de chaque tache à celle de la référence permet de calculer un rapport frontal $R_f$ et d\'identifier les espèces présentes.',
        svg: `
          <svg viewBox="0 0 460 300" role="img" aria-labelledby="corpspurs2nde-ccm-title corpspurs2nde-ccm-desc">
            <title id="corpspurs2nde-ccm-title">Plaque de chromatographie sur couche mince comparant une reference et un echantillon</title>
            <desc id="corpspurs2nde-ccm-desc">Une plaque rectangulaire verticale porte deux lignes horizontales en pointilles : la ligne de depot en bas et le front du solvant huit centimetres plus haut. Deux colonnes de depot sont representees : a gauche la reference, avec une seule tache situee a cinq virgule deux centimetres au-dessus de la ligne de depot ; a droite l'echantillon, avec deux taches, l'une exactement a la meme hauteur que la reference, l'autre nettement plus basse, a deux virgule quatre centimetres seulement. Une ligne pointillee horizontale relie la tache de reference a la tache de l'echantillon situee a la meme hauteur, pour montrer qu'elles partagent le meme rapport frontal.</desc>

            <!-- en-tetes de colonnes -->
            <text class="label-soft" x="170" y="34" text-anchor="middle">Référence</text>
            <text class="label-soft" x="270" y="34" text-anchor="middle">Échantillon</text>

            <!-- plaque CCM -->
            <rect class="frame-line" x="110" y="45" width="220" height="205" fill="none"></rect>

            <!-- front du solvant (8,0 cm au-dessus du depot) -->
            <line class="guide-line" x1="110" y1="70" x2="330" y2="70"></line>
            <text class="annotation-label" x="336" y="74" text-anchor="start">Front (8,0 cm)</text>

            <!-- ligne de depot (origine) -->
            <line class="guide-line" x1="110" y1="230" x2="330" y2="230"></line>
            <text class="tick-label" x="336" y="234" text-anchor="start">Dépôt (0 cm)</text>

            <!-- tache de reference : 5,2 cm -> Rf = 0,65 -->
            <circle class="plot-point" cx="170" cy="126" r="6"></circle>

            <!-- tache 1 de l'echantillon : meme hauteur que la reference -->
            <circle class="plot-point" cx="270" cy="126" r="6"></circle>
            <line class="guide-line" x1="170" y1="126" x2="270" y2="126"></line>
            <text class="annotation-label" x="220" y="116" text-anchor="middle">Rf = 0,65 (identique)</text>

            <!-- tache 2 de l'echantillon : 2,4 cm -> Rf = 0,30, aucune correspondance -->
            <circle class="plot-point-alt" cx="270" cy="182" r="6"></circle>
            <text class="annotation-label" x="286" y="186" text-anchor="start">Rf = 0,30</text>
          </svg>
        `,
        notes: [
          'Le rapport frontal se calcule par $R_f = \\dfrac{\\text{distance parcourue par la tache}}{\\text{distance parcourue par l\'éluant}}$. Ici, le front du solvant a parcouru $d_{front} = 8{,}0$ cm.',
          'La tache de <strong>référence</strong> a parcouru $5{,}2$ cm, soit $R_f = \\dfrac{5{,}2}{8{,}0} = 0{,}65$. Dans l\'échantillon, la <strong>tache 1</strong> est exactement à la même hauteur : même $R_f = 0{,}65$, donc probablement la même espèce chimique que la référence.',
          'La <strong>tache 2</strong> de l\'échantillon n\'a parcouru que $2{,}4$ cm, soit $R_f = \\dfrac{2{,}4}{8{,}0} = 0{,}30$ : aucune tache de référence ne correspond à cette valeur. L\'échantillon contient donc <strong>au moins deux espèces chimiques</strong> : ce n\'est pas un corps pur.'
        ],
        reading: 'Repère d\'abord la ligne de dépôt (bas) et le front du solvant (haut), puis compare la hauteur de chaque tache de l\'échantillon à celle de la référence : une même hauteur signale un même $R_f$, donc probablement la même espèce chimique.',
        caption: 'Chromatographie sur couche mince (CCM) : la tache 1 de l\'échantillon migre à la même hauteur que la référence ($R_f = 0{,}65$), mais la tache 2 ($R_f = 0{,}30$) ne correspond à aucune référence — l\'échantillon est un mélange d\'au moins deux espèces chimiques (mêmes valeurs que l\'exemple résolu ci-dessous).'
      }],
      example: {
        statement: 'Un chimiste réalise une chromatographie sur couche mince (CCM) pour vérifier la pureté d\'un sirop de menthe colorée. Il dépose l\'échantillon à côté d\'un dépôt de référence (colorant alimentaire pur). Après élution, le front du solvant a parcouru $d_{front} = 8{,}0$ cm. La tache de référence a parcouru $d_{ref} = 5{,}2$ cm. L\'échantillon présente deux taches, ayant parcouru respectivement $5{,}2$ cm et $2{,}4$ cm.<br/><br/>Calcule les rapports frontaux $R_f$ et conclus sur la pureté du sirop.',
        steps: [
          'Formule du rapport frontal : $R_f = \\dfrac{\\text{distance parcourue par la tache}}{\\text{distance parcourue par l\'éluant}}$.',
          'Référence : $R_f = \\dfrac{5{,}2}{8{,}0} = 0{,}65$.',
          'Échantillon, tache 1 : $R_f = \\dfrac{5{,}2}{8{,}0} = 0{,}65$ (identique à la référence). Tache 2 : $R_f = \\dfrac{2{,}4}{8{,}0} = 0{,}30$ (aucune tache de référence ne correspond).',
          'L\'échantillon présente <strong>deux</strong> taches distinctes, donc au moins deux espèces chimiques : ce n\'est pas un corps pur.'
        ],
        answer: 'Le sirop contient au moins deux espèces chimiques différentes (mélange) : le colorant de référence ($R_f = 0{,}65$) et une seconde espèce non identifiée par cette référence ($R_f = 0{,}30$).'
      },
      formulas: [
        '$R_f = \\dfrac{\\text{distance parcourue par la tache}}{\\text{distance parcourue par l\'éluant}}$ (chromatographie sur couche mince)',
        'Masse volumique : $\\rho = \\dfrac{m}{V}$ (grandeur caractéristique d\'un corps pur, en g/cm³ ou kg/m³)',
        'Corps pur : température de changement d\'état <strong>constante</strong> (palier net) à pression donnée, valeur conforme à une table de référence',
        'Mélange homogène : une seule phase visible ; mélange hétérogène : plusieurs phases visibles'
      ],
      recap: [
        'Un <strong>corps pur</strong> ne contient qu\'une seule espèce chimique ; un <strong>mélange</strong> en contient plusieurs (homogène ou hétérogène).',
        'Un corps pur présente une température de changement d\'état <strong>constante</strong> (palier net) ; un mélange n\'a généralement pas de palier net.',
        'La <strong>chromatographie sur couche mince</strong> (CCM) sépare et identifie les espèces d\'un mélange en comparant leurs $R_f$ à des références.',
        'Identifier un corps pur, c\'est comparer une grandeur physique caractéristique mesurée (température, masse volumique, $R_f$) à une valeur de référence tabulée.'
      ],
      piege: 'Une confusion fréquente est de croire qu\'un mélange homogène (une seule phase visible, comme l\'eau salée limpide) est forcément un corps pur, simplement parce qu\'on n\'y distingue rien à l\'œil nu. Attention : l\'homogénéité ne concerne que l\'aspect visuel (une seule phase), alors que la pureté concerne le nombre d\'espèces chimiques présentes — un mélange parfaitement homogène, comme l\'eau salée, reste un <strong>mélange</strong> (au moins deux espèces chimiques), pas un corps pur.'
    },

    quiz: [
      {
        q: 'Un échantillon d\'eau salée est parfaitement limpide : on n\'y distingue qu\'une seule phase. Peut-on affirmer qu\'il s\'agit d\'un corps pur ?',
        options: [
          'Oui, puisqu\'il est homogène',
          'Non, c\'est un mélange homogène : il contient au moins deux espèces chimiques (eau et sel)',
          'Oui, tant qu\'on n\'observe aucun dépôt au fond du récipient',
          'Impossible à savoir sans microscope'
        ],
        answer: 1,
        correction: 'L\'homogénéité (une seule phase visible) ne dit rien sur la pureté (une seule espèce chimique). L\'eau salée est un <strong>mélange homogène</strong> : elle contient au moins deux espèces chimiques, l\'eau et le sel dissous.'
      },
      {
        q: 'Lors du chauffage d\'un échantillon, la température reste rigoureusement constante pendant tout le changement d\'état. Que peut-on en conclure ?',
        options: [
          'L\'échantillon est probablement un mélange',
          'L\'échantillon est probablement un corps pur',
          'L\'échantillon est nécessairement de l\'eau',
          'On ne peut rien conclure sur sa composition'
        ],
        answer: 1,
        correction: 'Un palier net (température constante) pendant un changement d\'état est la signature caractéristique d\'un <strong>corps pur</strong>. Un mélange présente généralement une température qui continue de varier.'
      },
      {
        q: 'En chromatographie sur couche mince, une tache migre de $3{,}0$ cm alors que l\'éluant a parcouru $6{,}0$ cm. Quel est le rapport frontal $R_f$ de cette tache ?',
        options: [
          '$R_f = 2{,}0$',
          '$R_f = 0{,}50$',
          '$R_f = 3{,}0$',
          '$R_f = 18$'
        ],
        answer: 1,
        correction: '$R_f = \\dfrac{\\text{distance de la tache}}{\\text{distance de l\'éluant}} = \\dfrac{3{,}0}{6{,}0} = 0{,}50$. Le rapport frontal est toujours compris entre $0$ et $1$, jamais supérieur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['rf', 'masse_volumique']);

        if (typeExo === 'rf') {
          var dEluant = randFloat(4, 10, 1);
          var rfCible = pick([0.2, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8]);
          var dTache = parseFloat((rfCible * dEluant).toFixed(2));
          var rf = parseFloat((dTache / dEluant).toFixed(2));
          var contexte = pick([
            'un sirop de fruits rouges analysé en laboratoire agroalimentaire',
            'une encre noire examinée dans le cadre d\'une expertise',
            'un extrait de plante médicinale',
            'un colorant alimentaire testé en contrôle qualité',
            'un résidu de peinture prélevé sur une scène d\'enquête'
          ]);
          return {
            statement: 'Pour ' + contexte + ', une chromatographie sur couche mince est réalisée. Une tache migre de $' + fr(dTache, 2) + '$ cm, tandis que l\'éluant a parcouru $' + fr(dEluant, 1) + '$ cm.<br/><br/>Calcule le rapport frontal $R_f$ de cette tache (arrondi au centième).',
            answer: rf,
            tolerance: 0.02,
            unit: '',
            hint: 'Utilise $R_f = \\dfrac{\\text{distance parcourue par la tache}}{\\text{distance parcourue par l\'éluant}}$.',
            solution: [
              'Formule du rapport frontal : $R_f = \\dfrac{\\text{distance de la tache}}{\\text{distance de l\'éluant}}$.',
              'Application numérique : $R_f = \\dfrac{' + fr(dTache, 2) + '}{' + fr(dEluant, 1) + '}$.',
              'Résultat : $R_f \\approx ' + fr(rf, 2) + '$.'
            ]
          };
        } else {
          var m = randFloat(5, 500, 1);
          var V = randFloat(2, 200, 1);
          var rho = parseFloat((m / V).toFixed(2));
          var contexte2 = pick([
            'un bijou soupçonné d\'être un alliage plutôt qu\'un métal pur',
            'un échantillon de liquide inconnu retrouvé en laboratoire',
            'une bille métallique utilisée en contrôle qualité industriel',
            'un fragment minéral analysé par un géologue'
          ]);
          return {
            statement: 'Pour identifier ' + contexte2 + ', on mesure sa masse $m = ' + fr(m, 1) + '$ g pour un volume $V = ' + fr(V, 1) + '$ cm³.<br/><br/>Calcule la masse volumique $\\rho$ de cet échantillon (en g/cm³, arrondie au centième).',
            answer: rho,
            tolerance: Math.max(0.02, parseFloat((rho * 0.03).toFixed(2))),
            unit: 'g/cm³',
            hint: 'Utilise $\\rho = \\dfrac{m}{V}$.',
            solution: [
              'Formule de la masse volumique : $\\rho = \\dfrac{m}{V}$.',
              'Application numérique : $\\rho = \\dfrac{' + fr(m, 1) + '}{' + fr(V, 1) + '}$.',
              'Résultat : $\\rho \\approx ' + fr(rho, 2) + '$ g/cm³, valeur à comparer à une table de référence pour identifier le matériau.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un technicien de laboratoire agroalimentaire vérifie si un lot d\'huile essentielle est pur ou dilué frauduleusement. La table de référence indique une température d\'ébullition $T_{eb} = 176°C$ pour cette huile essentielle pure.',
      tasks: [
        'Le suivi de température lors du chauffage du lot n°1 montre un palier net à $\\theta = 176°C$. Qu\'est-ce que cela indique sur cet échantillon ?',
        'Le lot n°2 présente un palier, mais à $\\theta = 168°C$, sensiblement inférieur à la référence, et ce palier est légèrement moins net (la température varie d\'environ $\\pm 1°C$ pendant le changement d\'état). Que peut-on en déduire ?',
        'Proposer une méthode complémentaire (autre que la température d\'ébullition) pour confirmer cette conclusion.'
      ],
      solutions: [
        'Le palier net à $176°C$, exactement conforme à la valeur de référence tabulée, indique que le lot n°1 est très probablement un <strong>corps pur</strong> : l\'huile essentielle n\'est pas diluée.',
        'Une température d\'ébullition sensiblement différente de la référence ($168°C$ au lieu de $176°C$), associée à un palier moins net, indique que le lot n°2 n\'est <strong>pas pur</strong> : il s\'agit probablement d\'un mélange (huile essentielle diluée dans un solvant ou une autre huile), une fraude possible.',
        'Une <strong>chromatographie sur couche mince</strong> permettrait de comparer les taches obtenues à celles d\'une huile essentielle de référence : plusieurs taches confirmeraient un mélange, une seule tache au même $R_f$ confirmerait la pureté. Une mesure de masse volumique $\\rho = \\dfrac{m}{V}$ serait une autre alternative possible.'
      ],
      finalAnswer: 'Lot n°1 (palier net à $176°C$, conforme à la référence) : corps pur probable. Lot n°2 ($168°C$, palier moins net) : mélange probable, fraude possible par dilution. La CCM ou la masse volumique permettraient de confirmer par une seconde méthode indépendante — un recoupement essentiel en contrôle qualité.'
    },

    evaluation: {
      title: 'Évaluation — Corps purs et mélanges',
      duration: '30 min',
      questions: [
        {
          statement: 'Un échantillon qui ne contient qu\'une seule espèce chimique est appelé :',
          type: 'multiple-choice',
          options: [
            'Un mélange homogène',
            'Un corps pur',
            'Une solution',
            'Un mélange hétérogène'
          ],
          answer: 1,
          points: 2,
          correction: 'Un <strong>corps pur</strong> ne contient qu\'une seule espèce chimique. Un mélange, homogène ou hétérogène, en contient toujours au moins deux.'
        },
        {
          statement: 'En chromatographie, une tache migre de $4{,}5$ cm alors que l\'éluant a parcouru $9{,}0$ cm. Calculer le rapport frontal $R_f$.',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.02,
          unit: '',
          points: 2,
          correction: '$R_f = \\dfrac{4{,}5}{9{,}0} = 0{,}50$.'
        },
        {
          statement: 'Un sirop de fruits est limpide et ne présente qu\'une seule phase visible. Peut-on affirmer qu\'il s\'agit d\'un corps pur ?',
          type: 'multiple-choice',
          options: [
            'Oui, puisqu\'il est homogène',
            'Non : l\'homogénéité ne garantit pas la pureté, c\'est probablement un mélange homogène',
            'Oui, tous les liquides limpides sont des corps purs',
            'Impossible à savoir sans le goûter'
          ],
          answer: 1,
          points: 2,
          correction: 'Un sirop contient de l\'eau, du sucre, des arômes... : c\'est un <strong>mélange homogène</strong>, même s\'il ne présente qu\'une seule phase visible. L\'homogénéité et la pureté sont deux notions différentes.'
        },
        {
          statement: 'Un échantillon a une masse $m = 270$ g pour un volume $V = 30$ cm³. Calculer sa masse volumique $\\rho$ (en g/cm³).',
          type: 'numeric',
          answer: 9,
          tolerance: 0.3,
          unit: 'g/cm³',
          points: 2,
          correction: '$\\rho = \\dfrac{m}{V} = \\dfrac{270}{30} = 9$ g/cm³.'
        },
        {
          statement: 'Lors du chauffage d\'un échantillon, la température continue d\'augmenter tout au long de la fusion, sans jamais former de palier net. Cet échantillon est probablement :',
          type: 'multiple-choice',
          options: [
            'Un corps pur',
            'Un mélange',
            'De l\'eau pure',
            'Impossible à déterminer'
          ],
          answer: 1,
          points: 1,
          correction: 'L\'absence de palier net (température qui continue de varier pendant le changement d\'état) est caractéristique d\'un <strong>mélange</strong>, contrairement au corps pur qui présente une température constante.'
        }
      ]
    }
  });

