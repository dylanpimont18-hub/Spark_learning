/* =========================================================
   Spark Learning – data/3e/3e-homotheties.js
   Module : Homothéties (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-homotheties',
    level: 1, subject: 'maths',
    icon: '🔍',
    title: 'Homothéties',
    subtitle: 'Centre, rapport, image d\'une figure',
    keywords: ['Homothétie', 'Rapport', 'Centre', 'Agrandissement', 'Réduction', 'Similitude'],
    physics: false,
    cours: {
      intro: 'L\'<strong>homothétie</strong> est la transformation géométrique qui réalise tous les agrandissements et réductions. Elle <strong>conserve les angles</strong> et multiplie toutes les longueurs par $|k|$, où $k$ est le <strong>rapport</strong>.<br/><br/>' +
        'Le <strong>centre $O$</strong> est le seul point fixe : tous les autres « glissent » sur leur droite passant par $O$. Si $k > 0$, l\'image est du même côté ; si $k < 0$, elle est de l\'autre côté du centre (retournement).<br/><br/>' +
        'En optique, une lentille réalise une <strong>homothétie entre objet et image</strong>.<br/><br/>' +
        '<strong>Piège des aires</strong> : multiplier les longueurs par $k$ multiplie les <strong>aires par $k^2$</strong> — un agrandissement de facteur $3$ donne une aire $9$ fois plus grande !',
      definitions: [
        { term: 'Homothétie', def: 'Transformation géométrique qui associe à tout point $A$ un point $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$. Elle <strong>conserve les formes</strong> mais change les dimensions.' },
        { term: 'Centre', def: 'Le point fixe $O$ de l\'homothétie : c\'est le <strong>seul point qui ne bouge pas</strong>. Tous les autres points « glissent » le long de la droite qui les relie à $O$.' },
        { term: 'Rapport', def: 'Le nombre $k$ qui détermine l\'<strong>agrandissement</strong> ($|k| > 1$), la <strong>réduction</strong> ($0 < |k| < 1$) ou le <strong>retournement</strong> ($k < 0$). $k = 1$ donne l\'identité.' },
        { term: 'Similitude', def: 'Transformation qui conserve les <strong>angles</strong> et multiplie les longueurs par un même facteur. L\'homothétie est un cas particulier de similitude.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Identifier</strong> le centre $O$ et le rapport $k$ (donné dans l\'énoncé).',
          '<strong>Étape 2 : Construire l\'image</strong> de $A$ : le point $A\'$ tel que $\\vec{OA\'} = k \\cdot \\vec{OA}$.<br/>En coordonnées : $A\'\\bigl(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O)\\bigr)$.',
          '<strong>Étape 3 : Calculer</strong> les nouvelles dimensions :<br/>— Longueurs : $\\times |k|$<br/>— Aires : $\\times k^2$<br/>— Angles : conservés (inchangés)'
        ]
      },
      example: {
        statement: 'On considère l\'homothétie de centre $O(0\\,;\\,0)$ et de rapport $k = 2$. Déterminer l\'image du point $A(3\\,;\\,1)$.',
        steps: [
          '<strong>Formule</strong> : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.<br/>Ici $O$ est l\'origine, donc $A\'(k \\cdot x_A \\,;\\, k \\cdot y_A)$.',
          '<strong>Calcul</strong> : $A\'(2 \\times 3 \\,;\\, 2 \\times 1) = A\'(6\\,;\\,2)$.',
          '<strong>Vérification</strong> : $OA = \\sqrt{3^2 + 1^2} = \\sqrt{10}$ et $OA\' = \\sqrt{6^2 + 2^2} = \\sqrt{40} = 2\\sqrt{10}$. On a bien $OA\' = 2 \\times OA$ ✓.'
        ],
        answer: '$A\'(6\\,;\\,2)$. La distance au centre est bien multipliée par $k = 2$.'
      },
      formulas: [
        '$\\vec{OA\'} = k \\cdot \\vec{OA}$',
        'Longueurs : $A\'B\' = |k| \\times AB$',
        'Aires : $\\mathcal{A}_{\\text{image}} = k^2 \\times \\mathcal{A}_{\\text{original}}$',
        'Les angles sont conservés (similitude)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Transformation géométrique',
        title: 'Visualiser une homothétie de rapport k = 2',
        description: 'Le triangle $ABC$ et son image $A\'B\'C\'$ par l\'homothétie de centre $O$ et de rapport $k = 2$ : chaque sommet image est deux fois plus loin de $O$ que le sommet d\'origine, sur la même droite.',
        svg: `
          <svg viewBox="0 0 340 290" role="img" aria-labelledby="homothetie-graph-title homothetie-graph-desc">
            <title id="homothetie-graph-title">Homothetie de centre O et de rapport k = 2</title>
            <desc id="homothetie-graph-desc">Le schema montre le triangle ABC et son image A'B'C' par l'homothetie de centre O et de rapport k = 2 : chaque sommet image est deux fois plus loin de O que le sommet d'origine, sur la meme droite.</desc>
            <rect x="20" y="8" width="280" height="30" rx="12" fill="color-mix(in srgb, var(--diagram-accent) 7%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 22%, var(--border))"></rect>
            <text class="annotation-label" x="32" y="28">Homothetie centre O, rapport k = 2</text>
            <line class="guide-line" x1="40" y1="250" x2="172" y2="206"></line>
            <line class="guide-line" x1="40" y1="250" x2="260" y2="74"></line>
            <line class="guide-line" x1="40" y1="250" x2="84" y2="74"></line>
            <line class="frame-line" x1="106" y1="228" x2="150" y2="162"></line>
            <line class="frame-line" x1="150" y1="162" x2="62" y2="162"></line>
            <line class="frame-line" x1="62" y1="162" x2="106" y2="228"></line>
            <line class="curve-main" x1="172" y1="206" x2="260" y2="74"></line>
            <line class="curve-main" x1="260" y1="74" x2="84" y2="74"></line>
            <line class="curve-main" x1="84" y1="74" x2="172" y2="206"></line>
            <text class="label-soft" x="100" y="190">ABC</text>
            <text class="label-soft" x="160" y="124">A'B'C'</text>
            <circle class="plot-point-alt" cx="40" cy="250" r="6"></circle>
            <circle class="plot-point-alt" cx="106" cy="228" r="5"></circle>
            <circle class="plot-point-alt" cx="150" cy="162" r="5"></circle>
            <circle class="plot-point-alt" cx="62" cy="162" r="5"></circle>
            <circle class="plot-point" cx="172" cy="206" r="5"></circle>
            <circle class="plot-point" cx="260" cy="74" r="5"></circle>
            <circle class="plot-point" cx="84" cy="74" r="5"></circle>
            <text class="annotation-label" x="20" y="266">O</text>
            <text class="annotation-label" x="112" y="246">A</text>
            <text class="annotation-label" x="140" y="146">B</text>
            <text class="annotation-label" x="18" y="168">C</text>
            <text class="annotation-label" x="182" y="220">A'</text>
            <text class="annotation-label" x="250" y="56">B'</text>
            <text class="annotation-label" x="36" y="56">C'</text>
          </svg>
        `,
        notes: [
          'Le centre $O$ est le seul point fixe de l\'homothétie : $A$, $B$, $C$ glissent chacun le long de leur droite $(OA)$, $(OB)$, $(OC)$ jusqu\'à leur image.',
          'Ici $k = 2$ : $\\vec{OA\'} = 2\\vec{OA}$ (idem pour $B$ et $C$), donc chaque point d\'origine se trouve exactement au milieu du segment reliant $O$ à son image.',
          'Le triangle image $A\'B\'C\'$ est semblable à $ABC$ : mêmes angles, côtés multipliés par $k = 2$, donc une aire multipliée par $k^2 = 4$.'
        ],
        reading: 'Pars toujours de $O$ et suis chaque droite jusqu\'à l\'image : avec $k = 2$, la distance double à chaque fois.',
        caption: 'Homothétie de centre $O$ et de rapport $k = 2$ : triangle $ABC$ et son image $A\'B\'C\'$, avec les droites $(OA)$, $(OB)$, $(OC)$ prolongées jusqu\'aux points images.'
      },
      recap: [
        'Les <strong>longueurs</strong> sont multipliées par $|k|$ et les <strong>aires</strong> par $k^2$ — ne pas confondre !',
        'Les <strong>angles</strong> sont toujours conservés : l\'image d\'un triangle équilatéral reste équilatéral.',
        'Si $k = -1$, l\'homothétie est une <strong>symétrie centrale</strong> par rapport au centre $O$.',
        'Pour trouver l\'image d\'un point en coordonnées : $A\'(x_O + k(x_A - x_O) \\,;\\, y_O + k(y_A - y_O))$.'
      ],
      piege: 'Piège : l\'homothétie multiplie les LONGUEURS par $|k|$ mais les AIRES par $k^2$. Si on agrandit d\'un facteur $3$, les longueurs sont $\\times 3$ mais l\'aire est $\\times 9$ !'
    },
    quiz: [
      {
        q: 'Une homothétie de rapport $k = 2$ agrandit un carré d\'aire $5$ cm². Quelle est l\'aire de l\'image ?',
        options: ['$10$ cm²', '$20$ cm²', '$40$ cm²', '$25$ cm²'],
        answer: 1,
        correction: 'L\'aire est multipliée par $k^2 = 2^2 = 4$. Aire image $= 5 \\times 4 = 20$ cm².'
      },
      {
        q: 'Sur un plan au $\\frac{1}{100}$, un salon mesure $3$ cm $\\times$ $4$ cm. Quelle est la superficie réelle du salon ?',
        options: ['$12$ cm²', '$1\\,200$ cm²', '$120\\,000$ cm²', '$12\\,000$ cm²'],
        answer: 2,
        correction: 'Le rapport est $k = 100$. Les longueurs réelles sont $300$ cm et $400$ cm. L\'aire réelle est $300 \\times 400 = 120\\,000$ cm² $= 12$ m². L\'erreur classique est de multiplier l\'aire du plan par $100$ au lieu de $100^2 = 10\\,000$, car les aires se multiplient par $k^2$, pas par $k$.'
      },
      {
        q: 'Qu\'est-ce qu\'une homothétie de rapport $k = -1$ réalise ?',
        options: ['Une réduction de moitié', 'Une symétrie centrale par rapport au centre', 'Un agrandissement', 'Une rotation de $90°$'],
        answer: 1,
        correction: '$k = -1$ : $\\vec{OA\'} = -1 \\cdot \\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
      }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const k = pick([2, 3, 0.5]);
        const ab = rand(3, 12);
        const kStr = String(k).replace('.', '{,}');
        const absKStr = String(Math.abs(k)).replace('.', '{,}');
        const resultStr = String(Math.abs(k) * ab).replace('.', '{,}');

        const ctx = pick([
          { build: () => `Une <strong>photocopieuse</strong> applique un rapport $k = ${kStr}$ à un document. Un segment y mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de son <strong>image</strong> sur la copie (en cm) ?` },
          { build: () => `Sur un <strong>plan d'architecte</strong>, une homothétie de rapport $k = ${kStr}$ transforme les dimensions d'un bâtiment. Un mur du plan mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de son <strong>image</strong> (en cm) ?` },
          { build: () => `Un modéliste construit une <strong>maquette d'avion</strong> selon un rapport $k = ${kStr}$. Une pièce d'origine mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de cette pièce sur la <strong>maquette</strong> (en cm) ?` },
          { build: () => `Un <strong>vidéoprojecteur</strong> agrandit une image selon un rapport $k = ${kStr}$. Un segment de l'image source mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de ce segment une fois <strong>projeté</strong> (en cm) ?` },
          { build: () => `Un graphiste redimensionne un <strong>logo</strong> pour une bannière selon un rapport $k = ${kStr}$. Un trait du logo original mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de ce trait sur la <strong>bannière</strong> (en cm) ?` },
          { build: () => `Au <strong>microscope</strong>, un rapport d'agrandissement $k = ${kStr}$ est appliqué à un échantillon. Un détail y mesure $${ab}$ cm.<br/><br/>Quelle est la longueur de son <strong>image observée</strong> (en cm) ?` }
        ]);

        return {
          statement: ctx.build(),
          answer: parseFloat((Math.abs(k) * ab).toFixed(1)),
          tolerance: 0.1,
          unit: 'cm',
          hint: `Longueur image $= |k| \\times$ longueur originale $= ${absKStr} \\times ${ab}$.`,
          solution: [`$A'B' = |${kStr}| \\times ${ab} = ${resultStr}$ cm.`]
        };
      }
    },
    probleme: {
      context: 'Un photographe veut agrandir une photo de $10$ cm × $15$ cm pour en faire une affiche.',
      tasks: [
        'L\'agrandissement a un rapport $k = 4$. Quelles sont les dimensions de l\'affiche ?',
        'Quelle est l\'aire de la photo originale ? Et de l\'affiche ?',
        'Par quel facteur l\'aire a-t-elle été multipliée ?'
      ],
      solutions: [
        'Affiche : $10 \\times 4 = 40$ cm et $15 \\times 4 = 60$ cm.',
        'Photo : $10 \\times 15 = 150$ cm². Affiche : $40 \\times 60 = 2400$ cm².',
        '$\\dfrac{2400}{150} = 16 = k^2 = 4^2$ ✓.'
      ],
      finalAnswer: 'L\'affiche mesure $40 \\times 60$ cm. Son aire est $16$ fois celle de la photo.'
    },

    evaluation: {
      title: 'Évaluation — Homothéties',
      duration: '25 min',
      questions: [
        {
          statement: 'Une homothétie de centre $O$ et de rapport $k = 3$ transforme un triangle d\'aire $8$ cm². Quelle est l\'aire de l\'image ?',
          type: 'numeric',
          answer: 72,
          tolerance: 0,
          unit: 'cm²',
          points: 2,
          correction: 'L\'aire est multipliée par $k^2 = 3^2 = 9$. Aire image $= 8 \\times 9 = 72$ cm².'
        },
        {
          statement: 'Sur un plan à l\'échelle $\\dfrac{1}{200}$, une pièce mesure $4$ cm de long. Quelle est la longueur réelle de la pièce ?',
          type: 'numeric',
          answer: 800,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: 'Le rapport d\'homothétie est $k = 200$. Longueur réelle $= 4 \\times 200 = 800$ cm $= 8$ m.'
        },
        {
          statement: 'Une homothétie de rapport $k = -2$ transforme un point $A$ tel que $OA = 5$ cm. Quelle est la distance $OA\'$ ?',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: 'cm',
          points: 2,
          correction: '$OA\' = |k| \\times OA = |-2| \\times 5 = 2 \\times 5 = 10$ cm. Le signe négatif signifie que $A\'$ est de l\'autre côté de $O$ par rapport à $A$, mais la distance est bien $10$ cm.'
        },
        {
          statement: 'Une homothétie de rapport $k = -1$ est équivalente à :',
          type: 'multiple-choice',
          options: ['Une translation', 'Une rotation de $90°$', 'Une symétrie centrale', 'L\'identité'],
          answer: 2,
          points: 2,
          correction: 'Pour $k = -1$ : $\\vec{OA\'} = -\\vec{OA}$, donc $O$ est le milieu de $[AA\']$. C\'est exactement la définition de la symétrie centrale de centre $O$.'
        },
        {
          statement: 'Un plan au $\\dfrac{1}{50}$ représente un jardin carré de côté $6$ cm sur le plan. Quelle est l\'aire réelle du jardin en m² ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: 'm²',
          points: 2,
          correction: 'Côté réel $= 6 \\times 50 = 300$ cm $= 3$ m. Aire réelle $= 3 \\times 3 = 9$ m². Attention : l\'aire se multiplie par $k^2 = 50^2 = 2500$, pas par $50$. Vérification : $6^2 \\times 2500 = 36 \\times 2500 = 90\\,000$ cm² $= 9$ m² ✓.'
        }
      ]
    }
  }
);
