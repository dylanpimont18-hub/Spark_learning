/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-reaction-avancement.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-reaction-avancement',
    level: 2, subject: 'physique',
    icon: '⚗️',
    title: 'La réaction chimique : avancement et stœchiométrie',
    subtitle: 'Équation de réaction, tableau d\'avancement, réactif limitant, avancement maximal',
    keywords: ['Avancement', 'Stœchiométrie', 'Réactif limitant', 'Tableau d\'avancement', 'Équation de réaction'],
    physics: 'Le tableau d\'avancement permet de dimensionner les proportions de réactifs dans un procédé industriel (combustion, synthèse chimique), d\'éviter le gaspillage d\'un réactif coûteux en identifiant le réactif limitant, et de prévoir la quantité de produit qu\'une réaction peut former au maximum, une donnée essentielle en chimie de synthèse et en génie des procédés.',

    cours: {
      intro: 'Une réaction chimique transforme des <strong>réactifs</strong> en <strong>produits</strong>, décrite par une <strong>équation de réaction</strong> équilibrée : les mêmes éléments chimiques (et la même charge électrique totale) se retrouvent de part et d\'autre de la flèche, dans des proportions fixées par les <strong>nombres stœchiométriques</strong>.<br/><br/>Pour suivre l\'évolution des quantités de matière au cours de la transformation, on construit un <strong>tableau d\'avancement</strong> : chaque quantité de matière s\'exprime en fonction d\'une unique variable, l\'<strong>avancement</strong> $x$ (en mol), qui progresse de $0$ (état initial) jusqu\'à sa valeur finale.<br/><br/>La réaction s\'arrête dès qu\'un réactif est entièrement consommé : ce <strong>réactif limitant</strong> impose l\'<strong>avancement maximal</strong> $x_{max}$ de la transformation. Les autres réactifs, dits <strong>en excès</strong>, ne sont que partiellement consommés.',
      definitions: [
        { term: 'Équation de réaction', def: 'Écriture symbolique équilibrée d\'une transformation chimique, avec des nombres stœchiométriques devant chaque espèce, assurant la conservation des éléments chimiques et de la charge électrique.' },
        { term: 'Tableau d\'avancement', def: 'Tableau organisant les quantités de matière de chaque espèce à l\'état initial, en cours de transformation (en fonction de $x$), et à l\'état final, pour une équation de réaction donnée.' },
        { term: 'Avancement ($x$)', def: 'Grandeur, en mol, qui mesure la progression de la réaction : $x=0$ à l\'état initial, et $x$ augmente au fur et à mesure que les réactifs se transforment en produits.' },
        { term: 'Réactif limitant et avancement maximal ($x_{max}$)', def: 'Le réactif limitant est le premier réactif dont la quantité de matière s\'annule. Il impose $x_{max} = \\min\\left(\\dfrac{n_i(\\text{réactif})}{\\text{coefficient stœchiométrique}}\\right)$, calculé sur l\'ensemble des réactifs.' }
      ],
      method: {
        title: 'Déterminer le réactif limitant et l\'avancement maximal en 3 étapes',
        steps: [
          '<strong>Écrire et équilibrer l\'équation de réaction</strong> (mêmes éléments chimiques de chaque côté de la flèche), et identifier les nombres stœchiométriques de chaque réactif.',
          '<strong>Construire le tableau d\'avancement</strong> : pour chaque réactif, exprimer sa quantité de matière en cours de réaction sous la forme $n_i - (\\text{coefficient})\\times x$ ; pour chaque produit, sous la forme $0 + (\\text{coefficient})\\times x$.',
          '<strong>Calculer, pour chaque réactif, le rapport</strong> $\\dfrac{n_i}{\\text{coefficient stœchiométrique}}$ : le plus <strong>petit</strong> rapport donne $x_{max}$ et désigne le réactif limitant — jamais celui dont $n_i$ est le plus petit en valeur absolue.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Tableau d\'avancement (représentation graphique)',
        title: 'Quantités de matière en fonction de l\'avancement x',
        description: 'Pour la combustion du méthane $CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O$ (avec $n(CH_4)_i=2$ mol et $n(O_2)_i=3$ mol), les droites représentant les réactifs diminuent, celles des produits augmentent. Le dioxygène $O_2$ atteint zéro le premier : c\'est le <strong>réactif limitant</strong>, qui impose $x_{max}=1{,}5$ mol.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="avancement-title avancement-desc">
            <title id="avancement-title">Quantites de matiere des reactifs et produits en fonction de l'avancement x</title>
            <desc id="avancement-desc">Un graphique represente la quantite de matiere en mol sur l'axe vertical et l'avancement x en mol sur l'axe horizontal. Deux droites decroissantes representent les reactifs CH4 et O2, deux droites croissantes representent les produits CO2 et H2O. La droite du dioxygene O2 atteint zero la premiere, en trait plein, a l'avancement x egal a 1,5 mol, materialise par une ligne verticale en pointilles : c'est le reactif limitant. La droite du methane CH4 continue au-dela de ce point en trait pointille, jusqu'a ce qu'elle atteindrait zero si elle n'etait pas arretee par l'epuisement du dioxygene, ce qui montre qu'elle n'est pas le reactif limitant.</desc>

            <defs>
              <marker id="arrow-phy1re-avancement" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="260" x2="70" y2="30" marker-end="url(#arrow-phy1re-avancement)"></line>
            <line class="frame-line" x1="60" y1="250" x2="515" y2="250" marker-end="url(#arrow-phy1re-avancement)"></line>
            <text class="tick-label" x="70" y="22" text-anchor="middle">n (mol)</text>
            <text class="tick-label" x="510" y="238" text-anchor="end">x (mol)</text>

            <!-- graduations axe n -->
            <line class="grid-line" x1="66" y1="180" x2="74" y2="180"></line>
            <text class="tick-label" x="58" y="184" text-anchor="end">1</text>
            <line class="grid-line" x1="66" y1="110" x2="74" y2="110"></line>
            <text class="tick-label" x="58" y="114" text-anchor="end">2</text>
            <line class="grid-line" x1="66" y1="40" x2="74" y2="40"></line>
            <text class="tick-label" x="58" y="44" text-anchor="end">3</text>

            <!-- graduations axe x -->
            <line class="grid-line" x1="285" y1="246" x2="285" y2="254"></line>
            <text class="tick-label" x="285" y="266" text-anchor="middle">1</text>
            <line class="grid-line" x1="500" y1="246" x2="500" y2="254"></line>
            <text class="tick-label" x="500" y="266" text-anchor="middle">2</text>

            <!-- ligne verticale x_max -->
            <line class="guide-line" x1="392.5" y1="250" x2="392.5" y2="35"></line>
            <text class="tick-label" x="392.5" y="266" text-anchor="middle">x_max</text>

            <!-- O2 : reactif limitant, decroit jusqu'a 0 exactement en x_max -->
            <line class="curve-main" x1="70" y1="40" x2="392.5" y2="250" marker-end="url(#arrow-phy1re-avancement)"></line>
            <circle class="plot-point" cx="70" cy="40" r="4"></circle>
            <text class="annotation-label" x="115" y="70" text-anchor="start">O₂</text>

            <!-- CH4 : reactif en exces, continue au-dela de x_max en pointilles -->
            <line class="curve-main" x1="70" y1="110" x2="392.5" y2="215"></line>
            <line class="guide-line" x1="392.5" y1="215" x2="500" y2="250"></line>
            <circle class="plot-point" cx="70" cy="110" r="4"></circle>
            <circle class="plot-point-alt" cx="392.5" cy="215" r="4"></circle>
            <text class="annotation-label" x="115" y="132" text-anchor="start">CH₄</text>

            <!-- CO2 : produit -->
            <line class="frame-line" x1="70" y1="250" x2="392.5" y2="145" marker-end="url(#arrow-phy1re-avancement)"></line>
            <circle class="plot-point" cx="392.5" cy="145" r="4"></circle>
            <text class="annotation-label" x="340" y="168" text-anchor="middle">CO₂</text>

            <!-- H2O : produit -->
            <line class="frame-line" x1="70" y1="250" x2="392.5" y2="40" marker-end="url(#arrow-phy1re-avancement)"></line>
            <circle class="plot-point" cx="392.5" cy="40" r="4"></circle>
            <text class="annotation-label" x="330" y="70" text-anchor="middle">H₂O</text>
          </svg>
        `,
        notes: [
          'La droite de $O_2$ (accent plein) atteint <strong>exactement zéro</strong> à $x_{max}=1{,}5$ mol : c\'est le <strong>réactif limitant</strong>, la réaction ne peut pas aller plus loin.',
          'La droite de $CH_4$ n\'atteindrait zéro qu\'à $x=2$ mol (portion en pointillés, purement théorique) : à $x_{max}=1{,}5$ mol, il reste encore $0{,}5$ mol de $CH_4$ <strong>en excès</strong>.',
          'Les droites des produits $CO_2$ et $H_2O$ augmentent depuis $0$ : leurs valeurs à $x_{max}$ donnent directement les quantités de matière formées à l\'état final.'
        ],
        reading: 'Repère la ligne verticale en pointillés à $x_{max}=1{,}5$ mol : c\'est là que la droite de $O_2$ touche l\'axe horizontal (réactif limitant), alors que la droite de $CH_4$ n\'a pas encore atteint zéro (réactif en excès).',
        caption: 'Quantités de matière en fonction de l\'avancement $x$ pour $CH_4+2\\,O_2\\rightarrow CO_2+2\\,H_2O$ : $O_2$, dont la droite atteint zéro la première, est le réactif limitant ($x_{max}=1{,}5$ mol).'
      },
      example: {
        statement: 'On réalise la synthèse de l\'ammoniac selon l\'équation $N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3$, à partir de $n(N_2)_i = 1$ mol de diazote et $n(H_2)_i = 4$ mol de dihydrogène.<br/><br/>Déterminer le réactif limitant et l\'avancement maximal $x_{max}$ de cette réaction.',
        steps: [
          'Si $N_2$ était limitant : $x_{max} = \\dfrac{n(N_2)_i}{1} = \\dfrac{1}{1} = 1$ mol.',
          'Si $H_2$ était limitant : $x_{max} = \\dfrac{n(H_2)_i}{3} = \\dfrac{4}{3} \\approx 1{,}33$ mol.',
          'Le réactif limitant est celui qui donne la plus <strong>petite</strong> valeur de $x_{max}$ : c\'est donc $N_2$, avec $x_{max} = 1$ mol.',
          'Vérification à l\'état final : $n(N_2)_f = 1-1 = 0$ mol (épuisé), $n(H_2)_f = 4-3\\times1 = 1$ mol (en excès), $n(NH_3)_f = 2\\times1 = 2$ mol formé.'
        ],
        answer: 'Le réactif limitant est $N_2$ (diazote), avec $x_{max} = 1$ mol. À l\'état final, il reste $1$ mol de $H_2$ en excès, et $2$ mol de $NH_3$ ont été formées.'
      },
      formulas: [
        'Avancement $x$ (mol) : progresse de $0$ (état initial) à $x_{max}$ (état final)',
        'Quantité de matière en cours de réaction : $n(\\text{espèce}) = n_i \\pm (\\text{coefficient})\\times x$',
        'Avancement maximal : $x_{max} = \\min\\left(\\dfrac{n_i(\\text{réactif})}{\\text{coefficient stœchiométrique}}\\right)$',
        'Réactif limitant : celui qui donne la plus petite valeur de $x_{max}$ (épuisé le premier)'
      ],
      recap: [
        'L\'équation de réaction doit toujours être <strong>équilibrée</strong> avant de construire le tableau d\'avancement (mêmes éléments de chaque côté).',
        'Dans le tableau d\'avancement, chaque quantité de matière s\'exprime en fonction d\'une seule variable, l\'avancement $x$.',
        'Le <strong>réactif limitant</strong> est celui pour lequel le rapport $n_i/\\text{coefficient}$ est le plus petit : il impose $x_{max}$ et disparaît en premier.',
        'Au-delà de $x_{max}$, un réactif limitant donnerait une quantité de matière <strong>négative</strong> — physiquement impossible, ce qui borne la réaction.'
      ],
      piege: 'Une erreur fréquente est de désigner le réactif limitant en comparant directement les quantités de matière initiales $n_i$ des réactifs, sans tenir compte de leurs nombres stœchiométriques. Attention : il faut toujours comparer le rapport $\\dfrac{n_i}{\\text{coefficient stœchiométrique}}$ pour chaque réactif — un réactif introduit en plus grande quantité peut malgré tout être le réactif limitant si son coefficient stœchiométrique est élevé.'
    },

    quiz: [
      {
        q: 'Dans un tableau d\'avancement, l\'avancement maximal $x_{max}$ correspond à :',
        options: [
          'La valeur de $x$ pour laquelle un réactif est entièrement consommé',
          'La somme des quantités de matière initiales',
          'La quantité de matière du produit majoritaire',
          'Toujours la moitié de la quantité initiale du premier réactif'
        ],
        answer: 0,
        correction: '$x_{max}$ est atteint dès qu\'un réactif (le réactif limitant) voit sa quantité de matière s\'annuler ; la réaction s\'arrête alors, même s\'il reste d\'autres réactifs en excès.'
      },
      {
        q: 'Pour la réaction $2\\,A + B \\rightarrow C$, on introduit $n(A)_i=6$ mol et $n(B)_i=2$ mol. Quel est le réactif limitant ?',
        options: [
          'B, car $\\dfrac{n(B)_i}{1}=2$ est inférieur à $\\dfrac{n(A)_i}{2}=3$',
          'A, car il est introduit en plus grande quantité',
          'B, car sa quantité initiale est la plus petite',
          'Aucun, les deux sont consommés simultanément'
        ],
        answer: 0,
        correction: 'Il faut comparer les rapports $n_i/\\text{coefficient}$ : pour A, $6/2=3$ ; pour B, $2/1=2$. Le plus petit rapport ($2$, pour B) désigne le réactif limitant. Comparer directement les quantités initiales (une autre option) donnerait ici accidentellement la même conclusion, mais ce raisonnement est <strong>faux en général</strong>.'
      },
      {
        q: 'À l\'état final d\'une transformation chimique totale, la quantité de matière du réactif limitant vaut :',
        options: [
          '0 mol',
          'La moitié de sa quantité initiale',
          'Sa quantité initiale',
          'Cela dépend du produit formé'
        ],
        answer: 0,
        correction: 'Par définition, le réactif limitant est entièrement consommé à l\'état final d\'une transformation totale : sa quantité de matière finale est nulle.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var reactions = [
          { eq: 'CH_4 + 2\\,O_2 \\rightarrow CO_2 + 2\\,H_2O', coefA: 1, nomA: 'CH_4', coefB: 2, nomB: 'O_2' },
          { eq: 'N_2 + 3\\,H_2 \\rightarrow 2\\,NH_3', coefA: 1, nomA: 'N_2', coefB: 3, nomB: 'H_2' },
          { eq: '2\\,Al + 3\\,Cl_2 \\rightarrow 2\\,AlCl_3', coefA: 2, nomA: 'Al', coefB: 3, nomB: 'Cl_2' },
          { eq: '2\\,H_2 + O_2 \\rightarrow 2\\,H_2O', coefA: 2, nomA: 'H_2', coefB: 1, nomB: 'O_2' },
          { eq: 'Zn + 2\\,H_3O^+ \\rightarrow Zn^{2+} + H_2 + 2\\,H_2O', coefA: 1, nomA: 'Zn', coefB: 2, nomB: 'H_3O^+' }
        ];
        var reaction = pick(reactions);
        var nA = randFloat(1, 6, 1);
        var nB = randFloat(1, 8, 1);
        var xmaxA = parseFloat((nA / reaction.coefA).toFixed(3));
        var xmaxB = parseFloat((nB / reaction.coefB).toFixed(3));
        var xmax = Math.min(xmaxA, xmaxB);
        var xmaxRound = parseFloat(xmax.toFixed(2));
        var limitant = xmaxA < xmaxB ? reaction.nomA : (xmaxB < xmaxA ? reaction.nomB : (reaction.nomA + ' et ' + reaction.nomB + ' simultanément'));
        var tol = parseFloat(Math.max(0.02, xmaxRound * 0.04).toFixed(2));
        var contexte = pick([
          'en laboratoire de chimie',
          'dans un réacteur industriel',
          'lors d\'une séance de travaux pratiques',
          'dans un dispositif de synthèse contrôlée'
        ]);
        return {
          statement: 'On réalise ' + contexte + ' la réaction d\'équation $' + reaction.eq + '$, à partir de $n(' + reaction.nomA + ')_i = ' + fr(nA, 1) + '$ mol et $n(' + reaction.nomB + ')_i = ' + fr(nB, 1) + '$ mol.<br/><br/>Calcule l\'avancement maximal $x_{max}$ de cette réaction (en mol, arrondi au centième).',
          answer: xmaxRound,
          tolerance: tol,
          unit: 'mol',
          hint: 'Calcule le rapport $n_i/\\text{coefficient}$ pour chaque réactif : le plus petit rapport donne $x_{max}$.',
          solution: [
            'Rapport pour $' + reaction.nomA + '$ : $\\dfrac{n(' + reaction.nomA + ')_i}{' + reaction.coefA + '} = \\dfrac{' + fr(nA, 1) + '}{' + reaction.coefA + '} \\approx ' + fr(xmaxA, 2) + '$ mol.',
            'Rapport pour $' + reaction.nomB + '$ : $\\dfrac{n(' + reaction.nomB + ')_i}{' + reaction.coefB + '} = \\dfrac{' + fr(nB, 1) + '}{' + reaction.coefB + '} \\approx ' + fr(xmaxB, 2) + '$ mol.',
            'Le plus petit rapport correspond au réactif limitant (' + limitant + ') : $x_{max} \\approx ' + fr(xmaxRound, 2) + '$ mol.'
          ]
        };
      }
    },

    probleme: {
      context: 'On étudie la combustion du propane, selon l\'équation $C_3H_8 + 5\\,O_2 \\rightarrow 3\\,CO_2 + 4\\,H_2O$. On introduit initialement $n(C_3H_8)_i = 0{,}40$ mol de propane et $n(O_2)_i = 2{,}5$ mol de dioxygène.',
      tasks: [
        'Calculer le rapport $n_i/\\text{coefficient}$ pour chacun des deux réactifs, et en déduire le réactif limitant.',
        'En déduire l\'avancement maximal $x_{max}$ de la réaction.',
        'Calculer les quantités de matière de tous les réactifs et produits à l\'état final (transformation supposée totale).'
      ],
      solutions: [
        'Rapport pour $C_3H_8$ : $\\dfrac{0{,}40}{1}=0{,}40$ mol. Rapport pour $O_2$ : $\\dfrac{2{,}5}{5}=0{,}50$ mol. Le plus petit rapport ($0{,}40 < 0{,}50$) désigne $C_3H_8$ comme réactif limitant.',
        '$x_{max}=0{,}40$ mol, imposé par le réactif limitant $C_3H_8$.',
        'État final : $n(C_3H_8)_f=0{,}40-0{,}40=0$ mol (épuisé) ; $n(O_2)_f=2{,}5-5\\times0{,}40=2{,}5-2{,}0=0{,}5$ mol (en excès) ; $n(CO_2)_f=3\\times0{,}40=1{,}2$ mol ; $n(H_2O)_f=4\\times0{,}40=1{,}6$ mol.'
      ],
      finalAnswer: 'Réactif limitant : $C_3H_8$, $x_{max}=0{,}40$ mol. À l\'état final : $0$ mol de propane, $0{,}5$ mol de dioxygène restant (en excès), $1{,}2$ mol de $CO_2$ et $1{,}6$ mol de $H_2O$ formées. Le dioxygène en excès est une pratique courante en combustion, afin de garantir une combustion complète du carburant.'
    },

    evaluation: {
      title: 'Évaluation — La réaction chimique : avancement et stœchiométrie',
      duration: '30 min',
      questions: [
        {
          statement: 'Pour la réaction $2\\,H_2+O_2\\rightarrow2\\,H_2O$, avec $n(H_2)_i=5$ mol et $n(O_2)_i=2$ mol, calculer l\'avancement maximal $x_{max}$ (en mol).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.05,
          unit: 'mol',
          points: 2,
          correction: 'Rapport pour $H_2$ : $5/2=2{,}5$. Rapport pour $O_2$ : $2/1=2$. Le plus petit ($2$) donne $x_{max}=2$ mol : $O_2$ est le réactif limitant.'
        },
        {
          statement: 'Le réactif limitant d\'une transformation chimique est :',
          type: 'multiple-choice',
          options: [
            'Celui qui est entièrement consommé le premier, et qui impose l\'avancement maximal',
            'Celui dont la quantité de matière initiale est la plus grande',
            'Celui qui a le plus petit nombre stœchiométrique',
            'Celui qui ne réagit pas'
          ],
          answer: 0,
          points: 2,
          correction: 'Par définition, le réactif limitant est celui qui est totalement consommé en premier, ce qui fixe $x_{max}$ ; ce n\'est pas nécessairement celui dont $n_i$ est le plus grand ou le plus petit, tout dépend aussi des coefficients stœchiométriques.'
        },
        {
          statement: 'Pour la réaction précédente ($2\\,H_2+O_2\\rightarrow2\\,H_2O$, $x_{max}=2$ mol), calculer la quantité de matière d\'eau $n(H_2O)_f$ formée à l\'état final (en mol).',
          type: 'numeric',
          answer: 4,
          tolerance: 0.1,
          unit: 'mol',
          points: 2,
          correction: '$n(H_2O)_f=2\\times x_{max}=2\\times2=4$ mol.'
        },
        {
          statement: 'Pour déterminer le réactif limitant d\'une réaction dont les réactifs ont des nombres stœchiométriques différents, il faut comparer :',
          type: 'multiple-choice',
          options: [
            'Le rapport $n_i/\\text{coefficient stœchiométrique}$ de chaque réactif',
            'Directement les quantités de matière initiales $n_i$',
            'Les masses molaires des réactifs',
            'Les volumes des solutions utilisées, uniquement'
          ],
          answer: 0,
          points: 2,
          correction: 'Comparer directement les $n_i$ sans tenir compte des coefficients stœchiométriques est une erreur fréquente : le rapport $n_i/\\text{coefficient}$ est la seule comparaison valide pour identifier le réactif limitant.'
        },
        {
          statement: 'Pour la réaction $2\\,H_2+O_2\\rightarrow2\\,H_2O$ ($n(H_2)_i=5$ mol, $x_{max}=2$ mol), calculer la quantité de matière de dihydrogène restant $n(H_2)_f$ à l\'état final (en mol).',
          type: 'numeric',
          answer: 1,
          tolerance: 0.05,
          unit: 'mol',
          points: 2,
          correction: '$n(H_2)_f=n(H_2)_i-2\\times x_{max}=5-2\\times2=5-4=1$ mol (en excès, car $H_2$ n\'est pas le réactif limitant).'
        }
      ]
    }
  });
