/* =========================================================
   Spark Learning – data/5e/proportionnalite.js
   Extrait de 5e.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'proportionnalite',
    level: 1, subject: 'maths',
    icon: '⚖️',
    title: 'Proportionnalité et Règle de trois',
    subtitle: 'Produit en croix, coefficients, tableaux',
    keywords: ['Produit en croix', 'Coefficient', 'Linéarité', 'Pourcentage'],
    physics: 'Loi d\'Ohm, concentrations, stœchiométrie',

    cours: {
      intro: 'Deux grandeurs sont <strong>proportionnelles</strong> quand leur rapport est constant — ce rapport s\'appelle le <strong>coefficient de proportionnalité</strong>. Si l\'on connaît une paire de valeurs, on peut calculer n\'importe quelle autre grâce à ce coefficient.<br/><br/>' +
        '<strong>Pourquoi est-ce si puissant ?</strong> Parce que la règle de trois (ou produit en croix) est la technique opératoire de cette propriété. Elle permet de résoudre en une étape des problèmes de conversion, de mise à l\'échelle et de dosage.<br/><br/>' +
        '<strong>Attention :</strong> toutes les relations ne sont pas proportionnelles ! La distance de freinage d\'une voiture n\'est pas proportionnelle à la vitesse (elle est quadratique : $d \\propto v^2$). Avant de poser un produit en croix, toujours vérifier que les deux grandeurs varient de façon linéaire.<br/><br/>' +
        'En physique-chimie, la proportionnalité est omniprésente : loi d\'Ohm ($U = RI$), concentration massique ($m = c_m \\times V$), stœchiométrie (les masses réagissantes sont proportionnelles aux coefficients).',
      definitions: [
        { term: 'Coefficient de proportionnalité', def: 'Constante $k$ telle que $y = k \\cdot x$ pour tout couple $(x, y)$ du tableau. On le calcule par $k = \\dfrac{y}{x}$.' },
        { term: 'Produit en croix', def: 'Si $\\dfrac{a}{b} = \\dfrac{c}{d}$, alors $a \\times d = b \\times c$. Technique pour trouver la quatrième valeur quand trois sont connues.' },
        { term: 'Proportion inverse', def: 'Situation où quand une grandeur double, l\'autre est divisée par deux. Exemple : plus d\'ouvriers → moins de temps. Le produit $x \\times y$ est constant.' },
        { term: 'Pourcentage', def: 'Proportion exprimée sur 100 : $p\\% = \\dfrac{p}{100}$. C\'est un cas particulier de proportionnalité.' }
      ],
      example: {
        statement: '$5$ cahiers coûtent $7{,}50$ €. Combien coûtent $8$ cahiers ?',
        steps: [
          'Coefficient de proportionnalité : $k = \\dfrac{7{,}50}{5} = 1{,}50$ €/cahier.',
          'Prix de $8$ cahiers : $8 \\times 1{,}50 = 12{,}00$ €.',
          'Ou par produit en croix : $\\dfrac{7{,}50}{5} = \\dfrac{x}{8}$ → $x = \\dfrac{7{,}50 \\times 8}{5} = 12{,}00$ €.'
        ],
        answer: '$12{,}00$ €'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Proportionnalité directe',
        title: 'Le prix des cahiers : une droite qui passe par l\'origine',
        description: 'L\'exemple du cours : $5$ cahiers coûtent $7{,}50$ €, donc le coefficient de proportionnalité est $k = \\dfrac{7{,}50}{5} = 1{,}50$ €/cahier. La droite $y = 1{,}50x$ passe par l\'origine et par les points $A(5\\,;\\,7{,}50)$ et $B(8\\,;\\,12{,}00)$.',
        svg: `
          <svg viewBox="0 0 360 250" role="img" aria-labelledby="propor-title propor-desc">
            <title id="propor-title">Droite de proportionnalite prix en fonction du nombre de cahiers</title>
            <desc id="propor-desc">Droite passant par l'origine, le point A cinq cahiers sept virgule cinquante euros et le point B huit cahiers douze euros, de pente un virgule cinquante euro par cahier.</desc>
            <line class="grid-line" x1="50" y1="30" x2="310" y2="30"></line>
            <line class="grid-line" x1="50" y1="70" x2="310" y2="70"></line>
            <line class="grid-line" x1="50" y1="110" x2="310" y2="110"></line>
            <line class="grid-line" x1="50" y1="150" x2="310" y2="150"></line>
            <line class="grid-line" x1="50" y1="190" x2="310" y2="190"></line>
            <line class="grid-line" x1="50" y1="30" x2="50" y2="190"></line>
            <line class="grid-line" x1="102" y1="30" x2="102" y2="190"></line>
            <line class="grid-line" x1="154" y1="30" x2="154" y2="190"></line>
            <line class="grid-line" x1="206" y1="30" x2="206" y2="190"></line>
            <line class="grid-line" x1="258" y1="30" x2="258" y2="190"></line>
            <line class="grid-line" x1="310" y1="30" x2="310" y2="190"></line>
            <line class="axis" x1="50" y1="190" x2="318" y2="190"></line>
            <line class="axis" x1="50" y1="198" x2="50" y2="22"></line>
            <line class="guide-line" x1="180" y1="190" x2="180" y2="90"></line>
            <line class="guide-line" x1="50" y1="90" x2="180" y2="90"></line>
            <line class="graph-line" x1="50" y1="190" x2="258" y2="30"></line>
            <circle class="plot-point" cx="50" cy="190" r="6"></circle>
            <circle class="plot-point-alt" cx="180" cy="90" r="6"></circle>
            <circle class="plot-point-alt" cx="258" cy="30" r="6"></circle>
            <text class="annotation-label" x="58" y="172">O(0 ; 0)</text>
            <text class="annotation-label" x="190" y="82">A(5 ; 7,50 €)</text>
            <text class="annotation-label" x="224" y="22">B(8 ; 12,00 €)</text>
            <text class="annotation-label" x="58" y="115">k = 1,50 €/cahier</text>
            <text class="axis-label" x="270" y="228">Cahiers</text>
            <text class="axis-label" x="56" y="20">Prix (€)</text>
            <text class="tick-label" x="46" y="206">0</text>
            <text class="tick-label" x="98" y="206">2</text>
            <text class="tick-label" x="150" y="206">4</text>
            <text class="tick-label" x="202" y="206">6</text>
            <text class="tick-label" x="254" y="206">8</text>
            <text class="tick-label" x="300" y="206">10</text>
            <text class="tick-label" x="36" y="194">0</text>
            <text class="tick-label" x="36" y="154">3</text>
            <text class="tick-label" x="36" y="114">6</text>
            <text class="tick-label" x="36" y="74">9</text>
            <text class="tick-label" x="30" y="34">12</text>
          </svg>
        `,
        notes: [
          'La droite passe par l\'origine $O(0\\,;\\,0)$ : c\'est la signature d\'une situation de proportionnalité, $0$ cahier coûte $0$ €.',
          'Le point $A(5\\,;\\,7{,}50)$ est la donnée de l\'énoncé ; le point $B(8\\,;\\,12{,}00)$ est calculé avec le coefficient $k = 1{,}50$.',
          'La pente de la droite est justement le coefficient de proportionnalité : chaque cahier supplémentaire ajoute $1{,}50$ € au prix.'
        ],
        reading: 'Sur une droite de proportionnalité, il suffit de connaître la pente $k$ pour calculer n\'importe quel prix : $y = k \\times x$.',
        caption: 'Droite $y = 1{,}50x$ passant par l\'origine, avec les points $A(5\\,;\\,7{,}50\\,€)$ et $B(8\\,;\\,12{,}00\\,€)$ de l\'exemple du cours.'
      },
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Identifier les grandeurs</strong> proportionnelles et les noter dans un tableau à deux colonnes.',
          '<strong>Produit en croix</strong> : si $\\frac{a}{b} = \\frac{c}{d}$, alors $a \\times d = b \\times c$.',
          '<strong>Isoler l\'inconnue</strong> et vérifier que le résultat est cohérent (ordre de grandeur, signe).'
        ]
      },
      formulas: [
        '$\\dfrac{a}{b} = \\dfrac{c}{d} \\Rightarrow a \\times d = b \\times c$',
        '$k = \\dfrac{y}{x}$ (coefficient de proportionnalité)',
        '$\\text{Pourcentage} = \\dfrac{\\text{valeur}}{\\text{total}} \\times 100$'
      ],
      recap: [
        'Deux grandeurs sont proportionnelles si et seulement si leur rapport $\\dfrac{y}{x}$ est constant.',
        'Le produit en croix permet de trouver la 4ᵉ valeur quand 3 sont connues.',
        'Toujours vérifier la proportionnalité avant d\'appliquer la règle de trois.',
        'Proportion inverse : le produit $x \\times y$ est constant (pas le rapport).'
      ],
      piege: 'Attention aux inversions ! Si le prix augmente quand la quantité augmente, on est dans une proportion directe. Mais si la vitesse augmente quand le temps diminue, c\'est une proportion inverse (règle de trois inverse) — méthode différente !'
    },

    quiz: [
      {
        q: 'Si $4$ mètres de tissu coûtent $18{,}40$ €, combien coûtent $7$ mètres de ce même tissu ?',
        options: ['$29{,}40$ €', '$32{,}20$ €', '$36{,}80$ €', '$46{,}00$ €'],
        answer: 1,
        correction: 'On pose la règle de trois : $\\frac{18{,}40}{4} = \\frac{x}{7}$. Donc $x = \\frac{18{,}40 \\times 7}{4} = \\frac{128{,}80}{4} = 32{,}20$ €.'
      },
      {
        q: 'Un skieur parcourt $150$ m en $12$ s. En supposant la vitesse constante, quelle distance parcourt-il en $20$ s ?',
        options: ['$200$ m', '$250$ m', '$300$ m', '$180$ m'],
        answer: 1,
        correction: 'Coefficient directeur : $k = \\frac{150}{12} = 12{,}5$ m/s. Distance en 20 s : $12{,}5 \\times 20 = 250$ m.'
      },
      {
        q: 'Un élève dit : « Si 3 ouvriers font un mur en 6 jours, 6 ouvriers le feront en 12 jours ». Quelle est son erreur ?',
        options: [
          'Il a raison : plus d\'ouvriers = plus de temps.',
          'Il confond proportion directe et proportion inverse : plus d\'ouvriers = moins de temps. 6 ouvriers feront le mur en 3 jours.',
          'Il fallait utiliser la règle de trois directe : $\\frac{3}{6} = \\frac{6}{x}$ → $x = 12$.',
          'Il n\'y a pas assez d\'informations pour répondre.'
        ],
        answer: 1,
        correction: 'C\'est une proportion inverse : quand les ouvriers doublent, le temps est divisé par 2. $3$ ouvriers → $6$ jours, donc $6$ ouvriers → $6 \\div 2 = 3$ jours. La règle de trois directe ($x = 12$) s\'applique aux proportions directes (prix/quantité, vitesse/distance), pas aux proportions inverses (ouvriers/temps, vitesse/temps de trajet).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const ctx = pick([
          { item: 'essence', unit: '€/L', qUnit: 'litres', emoji: '⛽' },
          { item: 'peinture', unit: '€/L', qUnit: 'litres', emoji: '🎨' },
          { item: 'tissu', unit: '€/m', qUnit: 'mètres', emoji: '🧵' },
          { item: 'câble électrique', unit: '€/m', qUnit: 'mètres', emoji: '🔌' },
          { item: 'jus de fruits', unit: '€/L', qUnit: 'litres', emoji: '🧃' }
        ]);
        const pricePerUnit = randFloat(1.5, 4.5, 2);
        const quantity = rand(5, 40);
        const answer = parseFloat((pricePerUnit * quantity).toFixed(2));
        return {
          statement: `${ctx.emoji} Le prix du ${ctx.item} est de $${pricePerUnit.toString().replace('.', '{,}')}$ ${ctx.unit}. Quel est le coût total pour $${quantity}$ ${ctx.qUnit} ? (arrondir au centime)`,
          answer,
          tolerance: 0.02,
          unit: '€',
          hint: `Rappel : si le prix est proportionnel à la quantité, utilise la formule $\\text{Coût} = \\text{prix unitaire} \\times \\text{quantité}$.`,
          solution: [
            `Données : prix unitaire $p = ${pricePerUnit.toString().replace('.', '{,}')}$ ${ctx.unit}, quantité $q = ${quantity}$ ${ctx.qUnit}.`,
            `Application de la proportionnalité directe : $\\text{Coût} = p \\times q$`,
            `$\\text{Coût} = ${pricePerUnit.toString().replace('.', '{,}')} \\times ${quantity} = ${answer.toString().replace('.', '{,}')}$ €`
          ]
        };
      }
    },

    probleme: {
      context: 'La loi d\'Ohm stipule que la tension $U$ (en volts) est proportionnelle à l\'intensité $I$ (en ampères) : $U = R \\cdot I$, où $R$ est la résistance en ohms (Ω). Un technicien mesure une tension de $U = 12$ V aux bornes d\'un résistor parcouru par un courant d\'intensité $I = 0{,}04$ A.',
      schema: 'Schéma : générateur → résistor R → ampèremètre (I = 0,04 A) | voltmètre indique U = 12 V',
      tasks: [
        'Identifier la grandeur inconnue et écrire la formule qui la relie aux grandeurs connues.',
        'Appliquer la règle de trois (ou isoler $R$) pour calculer la résistance.',
        'Exprimer le résultat avec l\'unité correcte et vérifier sa cohérence physique.'
      ],
      solutions: [
        'On cherche $R$. La formule de la loi d\'Ohm est : $U = R \\cdot I$.',
        'On isole $R$ : $R = \\dfrac{U}{I} = \\dfrac{12}{0{,}04} = 300$ Ω.',
        'Résultat : $R = 300$ Ω. Cohérence : une résistance de 300 Ω est réaliste pour un circuit électronique courant.'
      ],
      finalAnswer: '$R = 300$ Ω'
    },

    evaluation: {
      title: 'Évaluation — Proportionnalité et Règle de trois',
      duration: '25 min',
      questions: [
        {
          statement: 'Dans un tableau de proportionnalité, on sait que $5$ kg de pommes coûtent $8{,}75$ €. Quel est le coefficient de proportionnalité (prix par kg) ?',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.01,
          unit: '€/kg',
          points: 2,
          correction: 'Le coefficient de proportionnalité est $k = \\dfrac{8{,}75}{5} = 1{,}75$ €/kg.'
        },
        {
          statement: 'Si $8$ mètres de corde coûtent $12{,}40$ €, combien coûtent $15$ mètres de cette même corde ?',
          type: 'numeric',
          answer: 23.25,
          tolerance: 0.01,
          unit: '€',
          points: 2,
          correction: 'Produit en croix : $\\dfrac{12{,}40}{8} = \\dfrac{x}{15}$, donc $x = \\dfrac{12{,}40 \\times 15}{8} = \\dfrac{186}{8} = 23{,}25$ €.'
        },
        {
          statement: 'Quelle affirmation est correcte concernant la proportionnalité ?',
          type: 'multiple-choice',
          options: [
            'Si $y$ est proportionnel à $x$, alors le graphique de $y$ en fonction de $x$ est une droite passant par l\'origine.',
            'Si $y$ est proportionnel à $x$, alors $y = ax + b$ avec $b \\neq 0$.',
            'Le coefficient de proportionnalité peut être négatif mais jamais nul.',
            'La distance de freinage d\'une voiture est proportionnelle à sa vitesse.'
          ],
          answer: 0,
          points: 2,
          correction: 'Une situation de proportionnalité se traduit par $y = kx$ (avec $k$ constant). Le graphique est une droite passant par l\'origine. Si $b \\neq 0$, ce n\'est plus de la proportionnalité.'
        },
        {
          statement: 'Un robinet remplit un bassin de $120$ litres en $8$ minutes. Combien de litres sont versés en $5$ minutes ?',
          type: 'numeric',
          answer: 75,
          tolerance: 0,
          unit: 'L',
          points: 2,
          correction: 'Coefficient : $k = \\dfrac{120}{8} = 15$ L/min. En $5$ min : $15 \\times 5 = 75$ L.'
        },
        {
          statement: 'Dans un tableau, on lit : $x = 3 \\to y = 9$ et $x = 7 \\to y = 22$. Ce tableau est-il un tableau de proportionnalité ?',
          type: 'multiple-choice',
          options: [
            'Oui, car $y$ augmente quand $x$ augmente.',
            'Non, car $\\dfrac{9}{3} = 3$ et $\\dfrac{22}{7} \\approx 3{,}14$ : les rapports ne sont pas égaux.',
            'Oui, car $22 - 9 = 13$ et $7 - 3 = 4$.',
            'On ne peut pas savoir avec seulement deux points.'
          ],
          answer: 1,
          points: 2,
          correction: 'Pour une proportionnalité, le rapport $\\dfrac{y}{x}$ doit être constant. Ici $\\dfrac{9}{3} = 3$ et $\\dfrac{22}{7} \\approx 3{,}14$. Les rapports sont différents, donc ce n\'est pas un tableau de proportionnalité.'
        }
      ]
    }
  });
