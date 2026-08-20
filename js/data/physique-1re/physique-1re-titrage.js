/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-titrage.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-titrage',
    level: 2, subject: 'physique',
    icon: '🧪',
    title: 'Titrage',
    subtitle: 'Titrage par suivi conductimétrique, équivalence, dosage d\'une espèce en solution',
    keywords: ['Titrage', 'Équivalence', 'Dosage', 'Conductimétrie', 'Réaction support'],
    physics: 'Le titrage permet de contrôler la concentration en acide d\'un vinaigre commercial, de doser le taux d\'alcool ou de sucre dans une boisson, de vérifier la conformité d\'un rejet industriel avant évacuation, et de déterminer la concentration d\'un médicament en solution lors d\'un contrôle qualité pharmaceutique.',

    cours: {
      intro: 'Un <strong>titrage</strong> (ou dosage) permet de déterminer la concentration <strong>inconnue</strong> d\'une espèce en solution, appelée réactif titré, en la faisant réagir avec une solution de concentration <strong>connue</strong>, le réactif titrant, versée progressivement à l\'aide d\'une burette. La <strong>réaction support</strong> du titrage doit être rapide, totale, et unique (spécifique de l\'espèce titrée).<br/><br/>Au cours de l\'ajout, on suit l\'évolution d\'une grandeur physique caractéristique du système : la <strong>conductivité</strong> $\\sigma$ de la solution (suivi conductimétrique), son pH (suivi pH-métrique), ou sa couleur (suivi colorimétrique). Le point d\'<strong>équivalence</strong>, où les réactifs ont été mélangés en proportions stœchiométriques exactes, se repère alors graphiquement.<br/><br/>Pour un suivi conductimétrique, la courbe $\\sigma = f(V)$ présente typiquement une <strong>rupture de pente</strong> à l\'équivalence : deux segments de droite de pentes différentes, car la nature des ions en solution change brutalement une fois l\'espèce titrée entièrement consommée. Le volume équivalent $V_{eq}$, repéré à leur intersection, permet de calculer la concentration inconnue.',
      definitions: [
        { term: 'Titrage (dosage)', def: 'Technique permettant de déterminer la concentration inconnue d\'une espèce (réactif titré) en solution, par réaction avec un réactif titrant de concentration connue, versé progressivement.' },
        { term: 'Réaction support de titrage', def: 'Réaction chimique utilisée pour le titrage, qui doit être rapide, totale, et unique (elle ne doit faire réagir que l\'espèce que l\'on cherche à doser).' },
        { term: 'Équivalence', def: 'Point du titrage où les réactifs ont été introduits dans les proportions <strong>stœchiométriques</strong> exactes : ni le réactif titré, ni le réactif titrant, ne sont alors en excès.' },
        { term: 'Suivi conductimétrique', def: 'Méthode de titrage où l\'on mesure la conductivité $\\sigma$ de la solution après chaque ajout de solution titrante. L\'équivalence se repère à la <strong>rupture de pente</strong> (intersection de deux segments de droite) de la courbe $\\sigma = f(V)$.' }
      ],
      method: {
        title: 'Exploiter un titrage conductimétrique en 3 étapes',
        steps: [
          '<strong>Vérifier que la réaction support</strong> est rapide, totale et unique, puis réaliser le titrage en mesurant la conductivité $\\sigma$ de la solution après chaque ajout de solution titrante.',
          '<strong>Tracer la courbe</strong> $\\sigma = f(V)$ et repérer le volume équivalent $V_{eq}$ à la <strong>rupture de pente</strong>, c\'est-à-dire à l\'intersection des deux segments de droite.',
          '<strong>Appliquer la relation d\'équivalence</strong> adaptée à la stœchiométrie de la réaction support — $C_A V_A = C_B V_{eq}$ pour une réaction $1{:}1$, à adapter sinon — pour calculer la concentration inconnue.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Titrage acido-basique (méthode conductimétrique)',
        title: 'Courbe de conductivité σ = f(V) et rupture de pente à l\'équivalence',
        description: 'Lors du titrage d\'un acide fort par une base forte, la conductivité <strong>diminue</strong> d\'abord (les ions $H_3O^+$, très mobiles, sont remplacés par des ions $Na^+$ moins mobiles), puis <strong>augmente</strong> après l\'équivalence (accumulation d\'ions en excès). Le volume équivalent $V_{eq}$ se repère à la rupture de pente.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="titrage1re-title titrage1re-desc">
            <title id="titrage1re-title">Courbe de conductivite en fonction du volume verse lors d'un titrage conductimetrique</title>
            <desc id="titrage1re-desc">Un graphique represente la conductivite sur l'axe vertical en fonction du volume de solution titrante verse sur l'axe horizontal. La courbe decroit lineairement depuis l'origine jusqu'a un minimum, puis croit lineairement avec une pente differente jusqu'a la fin du graphique. Le point de rupture de pente, correspondant au minimum de la courbe, est relie par des lignes en pointilles aux deux axes, indiquant le volume equivalent. Une etiquette pres du segment decroissant indique que les ions oxonium sont consommes, et une etiquette pres du segment croissant indique un exces d'ions hydroxyde.</desc>

            <defs>
              <marker id="arrow-phy1re-titrage" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="270" x2="70" y2="45" marker-end="url(#arrow-phy1re-titrage)"></line>
            <line class="frame-line" x1="55" y1="260" x2="520" y2="260" marker-end="url(#arrow-phy1re-titrage)"></line>
            <text class="tick-label" x="70" y="36" text-anchor="middle">σ</text>
            <text class="tick-label" x="515" y="246" text-anchor="end">V (mL)</text>

            <!-- courbe : segment decroissant puis croissant -->
            <line class="curve-main" x1="70" y1="90" x2="328" y2="220" marker-end="url(#arrow-phy1re-titrage)"></line>
            <line class="curve-main" x1="328" y1="220" x2="500" y2="140"></line>

            <!-- point d'equivalence + guides -->
            <circle class="plot-point" cx="328" cy="220" r="4"></circle>
            <line class="guide-line" x1="328" y1="220" x2="328" y2="260"></line>
            <line class="guide-line" x1="70" y1="220" x2="328" y2="220"></line>
            <text class="tick-label" x="328" y="278" text-anchor="middle">V_eq</text>

            <!-- annotations chimiques -->
            <text class="label-soft" x="130" y="112" text-anchor="start">H₃O⁺ consommé</text>
            <text class="label-soft" x="420" y="168" text-anchor="middle">excès de HO⁻</text>
          </svg>
        `,
        notes: [
          'Avant l\'équivalence, les ions $H_3O^+$ (très mobiles) sont progressivement <strong>remplacés</strong> par des ions $Na^+$ (moins mobiles) : la conductivité <strong>diminue</strong>.',
          'Après l\'équivalence, il n\'y a plus de $H_3O^+$ à consommer : les ions $Na^+$ et $HO^-$ versés en excès <strong>s\'accumulent</strong> dans la solution, et la conductivité <strong>augmente</strong> à nouveau.',
          'Le volume équivalent $V_{eq}$ se repère à la <strong>rupture de pente</strong> : l\'intersection des deux segments de droite, sans avoir besoin d\'indicateur coloré.'
        ],
        reading: 'Suis la courbe qui descend jusqu\'à un minimum, puis remonte avec une pente différente : ce point anguleux, repéré par les pointillés, donne le volume équivalent $V_{eq}$.',
        caption: 'Titrage conductimétrique d\'un acide fort par une base forte : la conductivité décroît puis croît, la rupture de pente donnant le volume équivalent $V_{eq}$.'
      },
      example: {
        statement: 'On titre un volume $V_A = 10$ mL d\'une solution d\'acide chlorhydrique de concentration inconnue $C_A$ par une solution d\'hydroxyde de sodium de concentration $C_B = 0{,}1$ mol/L, en suivant l\'évolution de la conductivité de la solution. La rupture de pente est repérée pour un volume versé $V_{eq} = 8{,}0$ mL.<br/><br/>Calculer la concentration $C_A$ de la solution d\'acide chlorhydrique.',
        steps: [
          'La réaction support du titrage, $H_3O^+ + HO^- \\rightarrow 2\\,H_2O$, est une réaction acide-base $1{:}1$ : à l\'équivalence, les quantités de matière d\'acide et de base versée sont égales.',
          'Relation d\'équivalence : $C_A V_A = C_B V_{eq}$.',
          'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}1 \\times 8{,}0}{10} = \\dfrac{0{,}8}{10} = 0{,}08$ mol/L.'
        ],
        answer: '$C_A = 0{,}08$ mol/L. Le suivi conductimétrique permet de repérer l\'équivalence sans indicateur coloré : il suffit de tracer les deux segments de droite et de repérer leur intersection.'
      },
      formulas: [
        'Relation d\'équivalence (réaction $1{:}1$) : $C_A V_A = C_B V_{eq}$',
        'Réaction $aA+bB\\rightarrow\\dots$ : $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$',
        'Suivi conductimétrique : rupture de pente à l\'équivalence sur $\\sigma = f(V)$',
        'Suivi pH-métrique : point d\'inflexion à l\'équivalence sur $pH = f(V)$'
      ],
      recap: [
        'Un titrage détermine une concentration inconnue à partir d\'une réaction support <strong>rapide, totale et unique</strong> avec un réactif titrant de concentration connue.',
        'L\'équivalence correspond aux proportions <strong>stœchiométriques exactes</strong>, repérée graphiquement (rupture de pente en conductimétrie, inflexion en pH-métrie).',
        'La relation d\'équivalence $C_A V_A = C_B V_{eq}$ (réaction $1{:}1$) permet de calculer la concentration inconnue à partir du volume équivalent.',
        'Pour une réaction dont les coefficients stœchiométriques diffèrent de $1$, il faut adapter la relation d\'équivalence à la stœchiométrie exacte de la réaction support.'
      ],
      piege: 'Une erreur fréquente est d\'appliquer systématiquement la relation $C_A V_A = C_B V_{eq}$, y compris lorsque la réaction support du titrage n\'est pas une réaction $1{:}1$. Attention : il faut toujours vérifier les nombres stœchiométriques de la réaction support et adapter la relation d\'équivalence en conséquence, par exemple $\\dfrac{C_A V_A}{a} = \\dfrac{C_B V_{eq}}{b}$ pour une réaction $aA+bB\\rightarrow\\dots$'
    },

    quiz: [
      {
        q: 'Lors d\'un titrage, l\'équivalence correspond au moment où :',
        options: [
          'Les réactifs ont été mélangés dans les proportions stœchiométriques exactes',
          'Tout le réactif titrant a été versé',
          'Le volume versé est maximal',
          'La couleur de la solution ne change plus jamais'
        ],
        answer: 0,
        correction: 'L\'équivalence est le point du titrage où le réactif titré et le réactif titrant ont été mélangés exactement dans les proportions imposées par la stœchiométrie de la réaction support.'
      },
      {
        q: 'Pour un suivi conductimétrique, comment repère-t-on le volume équivalent sur la courbe $\\sigma = f(V)$ ?',
        options: [
          'À la rupture de pente (intersection des deux segments de droite)',
          'Au maximum de la courbe',
          'À mi-hauteur de la conductivité initiale',
          'À l\'origine du graphique ($V=0$)'
        ],
        answer: 0,
        correction: 'Le volume équivalent se repère à l\'intersection des deux segments de droite (rupture de pente) — cette méthode reste valable quelle que soit la forme exacte de la courbe (décroissante puis croissante, ou deux pentes de signes différents).'
      },
      {
        q: 'Pourquoi la réaction support d\'un titrage doit-elle être totale ?',
        options: [
          'Pour que tout le réactif titré soit consommé à l\'équivalence, rendant le calcul de concentration exact',
          'Pour que la réaction soit la plus lente possible',
          'Pour éviter d\'utiliser une burette',
          'Pour changer la couleur de la solution'
        ],
        answer: 0,
        correction: 'Si la réaction n\'était pas totale, une partie du réactif titré resterait non consommée à l\'équivalence apparente, ce qui fausserait le calcul de la concentration inconnue.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['simple', 'diacide']);

        if (typeExo === 'simple') {
          var VA = pick([10, 15, 20, 25, 30]);
          var CB = pick([0.05, 0.1, 0.15, 0.2]);
          var Veq = randFloat(5, VA * 1.4, 1);
          var CA = parseFloat((CB * Veq / VA).toFixed(4));
          var contexte = pick([
            'un contrôle qualité d\'eau adoucie',
            'un dosage d\'acide dans un produit d\'entretien',
            'une analyse de laboratoire de chimie appliquée',
            'un contrôle de conformité avant rejet',
            'un titrage conductimétrique de travaux pratiques'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte + ', on titre un volume $V_A = ' + VA + '$ mL d\'une solution d\'acide fort de concentration inconnue $C_A$ par une solution basique de concentration $C_B = ' + fr(CB, 2) + '$ mol/L (réaction support $1{:}1$). La rupture de pente est repérée pour un volume versé $V_{eq} = ' + fr(Veq, 1) + '$ mL.<br/><br/>Calcule la concentration $C_A$ (en mol/L, arrondie au millième).',
            answer: CA,
            tolerance: Math.max(0.001, parseFloat((CA * 0.05).toFixed(4))),
            unit: 'mol/L',
            hint: 'Réaction $1{:}1$ : utilise la relation d\'équivalence $C_A V_A = C_B V_{eq}$.',
            solution: [
              'Relation d\'équivalence (réaction $1{:}1$) : $C_A V_A = C_B V_{eq}$.',
              'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{' + fr(CB, 2) + '\\times' + fr(Veq, 1) + '}{' + VA + '}$.',
              'Résultat : $C_A \\approx ' + fr(CA, 3) + '$ mol/L.'
            ]
          };
        } else {
          var VA2 = pick([10, 15, 20, 25]);
          var CB2 = pick([0.05, 0.1, 0.15, 0.2]);
          var Veq2 = randFloat(5, VA2 * 1.5, 1);
          var CA2 = parseFloat((CB2 * Veq2 / (2 * VA2)).toFixed(4));
          var contexte2 = pick([
            'un laboratoire de contrôle alimentaire',
            'une séance de travaux pratiques de chimie',
            'un contrôle de la teneur en diacide d\'un produit',
            'une analyse de conformité industrielle'
          ]);
          return {
            statement: 'Dans ' + contexte2 + ', on titre un diacide (noté $AH_2$) selon la réaction support $AH_2 + 2\\,HO^- \\rightarrow A^{2-} + 2\\,H_2O$. Un volume $V_A = ' + VA2 + '$ mL d\'une solution de cet acide, de concentration inconnue $C_A$, est titré par une solution d\'hydroxyde de sodium de concentration $C_B = ' + fr(CB2, 2) + '$ mol/L. L\'équivalence est repérée pour $V_{eq} = ' + fr(Veq2, 1) + '$ mL.<br/><br/>Calcule la concentration $C_A$ (en mol/L, arrondie au millième).',
            answer: CA2,
            tolerance: Math.max(0.001, parseFloat((CA2 * 0.05).toFixed(4))),
            unit: 'mol/L',
            hint: 'La réaction support n\'est pas $1{:}1$ : adapte la relation d\'équivalence à la stœchiométrie, $\\dfrac{C_A V_A}{1} = \\dfrac{C_B V_{eq}}{2}$.',
            solution: [
              'Relation d\'équivalence adaptée à la stœchiométrie ($1$ mol de $AH_2$ pour $2$ mol de $HO^-$) : $\\dfrac{C_A V_A}{1} = \\dfrac{C_B V_{eq}}{2}$.',
              'On isole $C_A$ : $C_A = \\dfrac{C_B \\times V_{eq}}{2\\times V_A} = \\dfrac{' + fr(CB2, 2) + '\\times' + fr(Veq2, 1) + '}{2\\times' + VA2 + '}$.',
              'Résultat : $C_A \\approx ' + fr(CA2, 3) + '$ mol/L.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On souhaite déterminer la concentration en acide éthanoïque $CH_3COOH$ (masse molaire $M=60$ g/mol) d\'un vinaigre commercial. On prélève $V_A=10$ mL de ce vinaigre, que l\'on dilue $10$ fois, puis on titre la solution diluée par une solution d\'hydroxyde de sodium de concentration $C_B=0{,}10$ mol/L (réaction support $1{:}1$ : $CH_3COOH + HO^- \\rightarrow CH_3COO^- + H_2O$). L\'équivalence est repérée par suivi conductimétrique pour un volume versé $V_{eq}=8{,}0$ mL.',
      tasks: [
        'La réaction support étant $1{:}1$, écrire la relation d\'équivalence, puis calculer la concentration $C_{dil}$ de la solution diluée de vinaigre.',
        'En tenant compte du facteur de dilution ($10$), calculer la concentration $C_A$ du vinaigre commercial.',
        'Calculer la concentration massique $t$ du vinaigre commercial (en g/L), puis son degré d\'acidité approximatif (en %, en assimilant $1$ mL de vinaigre à $1$ g).'
      ],
      solutions: [
        'Réaction $1{:}1$ : $C_{dil} \\times V_A = C_B \\times V_{eq}$, donc $C_{dil} = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}10\\times8{,}0}{10} = 0{,}08$ mol/L.',
        'La dilution d\'un facteur $10$ signifie que la solution mère (vinaigre commercial) était $10$ fois plus concentrée : $C_A = 10\\times C_{dil} = 10\\times0{,}08 = 0{,}8$ mol/L.',
        'Concentration massique : $t=C_A\\times M=0{,}8\\times60=48$ g/L. En assimilant $1$ mL de vinaigre à $1$ g, $1$ L de vinaigre pèse environ $1\\,000$ g : le degré d\'acidité est $\\dfrac{48}{1\\,000}\\times100 \\approx 4{,}8$ %.'
      ],
      finalAnswer: '$C_{dil}=0{,}08$ mol/L, $C_A=0{,}8$ mol/L (vinaigre commercial), $t=48$ g/L, soit un degré d\'acidité d\'environ $4{,}8$ % — cohérent avec les vinaigres alimentaires courants (typiquement entre $5$ % et $8$ %). Oublier le facteur de dilution est l\'erreur la plus fréquente dans ce type de titrage indirect.'
    },

    evaluation: {
      title: 'Évaluation — Titrage',
      duration: '30 min',
      questions: [
        {
          statement: 'On titre $V_A=15$ mL d\'un acide par une base de concentration $C_B=0{,}2$ mol/L (réaction $1{:}1$). L\'équivalence est obtenue pour $V_{eq}=12$ mL. Calculer $C_A$ (en mol/L, arrondie au millième).',
          type: 'numeric',
          answer: 0.16,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 2,
          correction: '$C_A = \\dfrac{C_B \\times V_{eq}}{V_A} = \\dfrac{0{,}2\\times12}{15} = 0{,}16$ mol/L.'
        },
        {
          statement: 'Le point d\'équivalence d\'un titrage correspond au moment où :',
          type: 'multiple-choice',
          options: [
            'Les réactifs ont été introduits dans les proportions stœchiométriques exactes',
            'La totalité du réactif titré a disparu, indépendamment du réactif titrant',
            'Le volume versé est égal au volume initial',
            'La solution devient incolore'
          ],
          answer: 0,
          points: 2,
          correction: 'L\'équivalence correspond aux proportions stœchiométriques exactes entre réactif titré et réactif titrant, telles que fixées par l\'équation de la réaction support.'
        },
        {
          statement: 'On titre un diacide $AH_2$ ($AH_2+2\\,HO^-\\rightarrow A^{2-}+2\\,H_2O$) : $V_A=20$ mL, $C_B=0{,}1$ mol/L, $V_{eq}=10$ mL. Calculer $C_A$ (en mol/L, arrondie au millième).',
          type: 'numeric',
          answer: 0.025,
          tolerance: 0.002,
          unit: 'mol/L',
          points: 2,
          correction: 'Relation adaptée à la stœchiométrie : $C_A V_A = \\dfrac{C_B V_{eq}}{2}$, donc $C_A = \\dfrac{0{,}1\\times10}{2\\times20} = \\dfrac{1}{40} = 0{,}025$ mol/L.'
        },
        {
          statement: 'Pour un suivi conductimétrique, le volume équivalent est repéré :',
          type: 'multiple-choice',
          options: [
            'À l\'intersection des deux segments de droite (rupture de pente)',
            'Au point où $pH=7$',
            'À la moitié du volume total versé',
            'Lorsque la solution change de couleur'
          ],
          answer: 0,
          points: 2,
          correction: 'Le suivi conductimétrique repère l\'équivalence à la rupture de pente de la courbe $\\sigma=f(V)$, sans aucun besoin de mesurer le pH ni d\'utiliser d\'indicateur coloré.'
        },
        {
          statement: 'Une solution mère est diluée $5$ fois avant d\'être titrée ; le titrage de la solution diluée donne $C_{dil}=0{,}04$ mol/L. Calculer la concentration $C_A$ de la solution mère (en mol/L).',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: 'mol/L',
          points: 2,
          correction: 'Dilution d\'un facteur $5$ ⟹ $C_A = 5\\times C_{dil} = 5\\times0{,}04 = 0{,}2$ mol/L.'
        }
      ]
    }
  });
