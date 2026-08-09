/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a1-2-hygrothermie.js
   BTS FED — S8-A1-2 Hygrothermie
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a1-2-hygrothermie',
    level: 3, subject: 'fed',
    icon: '💧',
    title: 'Hygrothermie',
    subtitle: 'Condensation surfacique et dispositions constructives',
    keywords: ['Point de rosée', 'Humidité relative', 'Condensation', 'Pression de vapeur saturante', 'Pont thermique'],
    physics: 'L\'air intérieur d\'un logement contient toujours de la vapeur d\'eau, produite par la respiration, la cuisine ou les douches. Dès que cette vapeur touche une surface assez froide — une fenêtre, un angle de mur mal isolé — elle se condense. En génie climatique, prévoir ce phénomène n\'est pas un détail : c\'est ce qui évite les moisissures et la dégradation des parois.',

    cours: {
      intro: 'L\'air humide se comporte comme une éponge dont la capacité à retenir la vapeur d\'eau dépend de sa <strong>température</strong> : plus l\'air est chaud, plus il peut contenir de vapeur avant saturation.<br/><br/>Quand cet air rencontre une surface plus froide, sa capacité locale à retenir la vapeur chute. Si la surface est assez froide, l\'air à son contact devient saturé : c\'est la <strong>condensation</strong>. Le rôle du technicien FED est d\'anticiper ce risque dès la conception de l\'enveloppe et des équipements.',
      definitions: [
        { term: 'Humidité relative HR', def: 'Rapport entre la pression de vapeur d\'eau réellement présente dans l\'air $p_v$ et la pression de vapeur saturante $p_{sat}$ à cette température : $HR = p_v / p_{sat}(\\theta)$. Exprimée en %.' },
        { term: 'Pression de vapeur saturante $p_{sat}(\\theta)$', def: 'Pression maximale de vapeur d\'eau que l\'air peut contenir à une température $\\theta$ donnée, avant saturation. Elle augmente fortement avec la température : environ $1\\,228$ Pa à $10\\,°C$, $1\\,705$ Pa à $15\\,°C$, $2\\,339$ Pa à $20\\,°C$, $3\\,169$ Pa à $25\\,°C$.' },
        { term: 'Point de rosée $\\theta_r$', def: 'Température à laquelle l\'air, en refroidissant à pression de vapeur $p_v$ constante, atteint la saturation ($HR = 100\\%$). En dessous de cette température, la vapeur excédentaire condense.' },
        { term: 'Condensation surfacique', def: 'Se produit quand la température de surface intérieure d\'une paroi $\\theta_{si}$ descend en dessous du point de rosée $\\theta_r$ de l\'air ambiant.' },
        { term: 'Pont thermique', def: 'Zone d\'une paroi où la résistance thermique est localement plus faible (jonction plancher/mur, tableau de fenêtre, linteau) : la surface y est plus froide, donc le risque de condensation y est accru — même quand le reste du mur est correctement isolé.' },
        { term: 'Dispositions constructives', def: 'Rupture de pont thermique, isolation continue, pare-vapeur côté chaud de la paroi (pour limiter la migration de vapeur vers les zones froides), ventilation suffisante des pièces humides.' }
      ],
      method: {
        title: 'Déterminer si une paroi présente un risque de condensation surfacique',
        steps: [
          '<strong>Température de surface intérieure</strong> : à partir de la résistance thermique superficielle intérieure $R_{si}$ (normalisée à $0{,}13$ m²·K/W pour une paroi verticale) et de la résistance totale $R_{\\text{total}}$ de la paroi, la chute de température est proportionnelle aux résistances : $\\theta_{si} = \\theta_i - \\dfrac{R_{si}}{R_{\\text{total}}}(\\theta_i - \\theta_e)$.',
          '<strong>Pression de vapeur intérieure</strong> : $p_v = HR \\times p_{sat}(\\theta_i)$, avec $HR$ l\'humidité relative de l\'air intérieur.',
          '<strong>Point de rosée</strong> : on cherche la température $\\theta_r$ telle que $p_{sat}(\\theta_r) = p_v$. En pratique, on utilise une table (ou un abaque) de $p_{sat}$, ou l\'approximation usuelle de Magnus : $\\theta_r = \\dfrac{237{,}3 \\times \\ln(p_v/611)}{17{,}27 - \\ln(p_v/611)}$ (avec $p_v$ en Pa, $\\theta_r$ en °C).',
          '<strong>Conclusion</strong> : si $\\theta_{si} < \\theta_r$, il y a un risque de condensation surfacique ; sinon, la paroi est saine dans ces conditions.'
        ]
      },
      example: {
        statement: 'Un séjour est chauffé à $\\theta_i = 20\\,°C$ avec une humidité relative $HR = 60\\%$, tandis que l\'extérieur est à $\\theta_e = 0\\,°C$. Le mur a une résistance thermique totale $R_{\\text{total}} = 2{,}5$ m²·K/W. Y a-t-il un risque de condensation surfacique ?',
        steps: [
          '$\\theta_{si} = 20 - \\dfrac{0{,}13}{2{,}5}(20 - 0) = 20 - 0{,}052 \\times 20 \\approx 19{,}0\\,°C$.',
          '$p_v = 0{,}60 \\times p_{sat}(20\\,°C) = 0{,}60 \\times 2\\,339 \\approx 1\\,403$ Pa.',
          'Avec la formule de Magnus : $\\theta_r = \\dfrac{237{,}3 \\times \\ln(1403/611)}{17{,}27 - \\ln(1403/611)} \\approx \\dfrac{237{,}3 \\times 0{,}832}{17{,}27 - 0{,}832} \\approx 12{,}0\\,°C$.'
        ],
        answer: '$\\theta_{si} \\approx 19{,}0\\,°C$ est bien supérieure à $\\theta_r \\approx 12{,}0\\,°C$ : aucun risque de condensation surfacique dans ces conditions. Mais au droit d\'un pont thermique (où $\\theta_{si}$ serait plus basse), la conclusion pourrait s\'inverser.'
      },
      formulas: [
        '$HR = p_v / p_{sat}(\\theta)$ (humidité relative)',
        '$\\theta_{si} = \\theta_i - \\dfrac{R_{si}}{R_{\\text{total}}}(\\theta_i - \\theta_e)$ (température de surface intérieure)',
        '$p_{sat}(\\theta) \\approx 611 \\times e^{\\frac{17{,}27\\,\\theta}{\\theta + 237{,}3}}$ (formule de Magnus, $\\theta$ en °C, $p_{sat}$ en Pa)',
        'Condensation surfacique si $\\theta_{si} < \\theta_r$'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Profil de température à travers une paroi',
        title: 'θᵢ = 20 °C, θₑ = 0 °C, R_total = 2,5 m²·K/W',
        description: 'Le profil de température chute peu au passage des films d\'air superficiels (Rsi, Rse), puis fortement à travers l\'épaisseur du mur. Le point clé est θsi, comparé à la ligne pointillée du point de rosée θr.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="hygro-graph-title hygro-graph-desc">
            <title id="hygro-graph-title">Profil de temperature a travers une paroi et point de rosee</title>
            <desc id="hygro-graph-desc">Graphique temperature en fonction de la position : chute progressive de l'air interieur chaud vers l'air exterieur froid, avec une bande representant l'epaisseur du mur. La ligne pointillee horizontale marque le point de rosee ; le point de la surface interieure est situe au-dessus de cette ligne, donc hors risque de condensation.</desc>

            <defs>
              <marker id="tickmark-hygro" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
                <circle cx="5" cy="5" r="4" fill="var(--diagram-accent)"></circle>
              </marker>
            </defs>

            <!-- bande murale -->
            <rect class="frame-line" x="180" y="20" width="160" height="210" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))"></rect>
            <text class="label-soft" x="260" y="14" text-anchor="middle">Paroi (mur)</text>

            <!-- axe temperature (ligne guide verticale) -->
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>

            <!-- ligne pointillee point de rosee -->
            <line class="guide-line" x1="50" y1="114" x2="430" y2="114" stroke-dasharray="6 5"></line>
            <text class="annotation-label" x="345" y="108" text-anchor="start">θr ≈ 12,0 °C (point de rosée)</text>

            <!-- profil de temperature -->
            <polyline class="curve-main" points="50,50 180,58 340,194 430,210" fill="none"></polyline>

            <!-- points cles -->
            <circle class="plot-point-alt" cx="50" cy="50" r="4"></circle>
            <circle class="plot-point" cx="180" cy="58" r="5"></circle>
            <circle class="plot-point-alt" cx="340" cy="194" r="4"></circle>
            <circle class="plot-point-alt" cx="430" cy="210" r="4"></circle>

            <!-- etiquettes -->
            <text class="tick-label" x="50" y="40" text-anchor="middle">θi = 20 °C</text>
            <text class="tick-label" x="180" y="46" text-anchor="middle">θsi ≈ 19,0 °C</text>
            <text class="tick-label" x="340" y="186" text-anchor="middle">θse ≈ 0,3 °C</text>
            <text class="tick-label" x="430" y="224" text-anchor="middle">θe = 0 °C</text>
          </svg>
        `,
        notes: [
          'La chute de température est faible au niveau des films d\'air superficiels (entre θi et θsi, puis entre θse et θe) : la vraie résistance thermique se trouve dans l\'épaisseur du mur.',
          'Le point θsi (mis en évidence) est le seul à comparer directement au point de rosée θr : c\'est lui qui détermine s\'il y a condensation surfacique ou non.',
          'Sur ce cas, θsi ≈ 19,0 °C reste largement au-dessus de θr ≈ 12,0 °C : le point est situé au-dessus de la ligne pointillée, donc hors risque.'
        ],
        reading: 'Compare la hauteur du point θsi à la ligne pointillée du point de rosée : au-dessus, pas de condensation ; en dessous (par exemple au droit d\'un pont thermique, où θsi chuterait), risque de condensation.',
        caption: 'Profil de température à travers une paroi verticale, avec comparaison de la température de surface intérieure θsi au point de rosée θr.'
      },
      recap: [
        'L\'humidité relative compare la vapeur réellement présente à la vapeur maximale que l\'air peut contenir à cette température.',
        'La température de surface intérieure $\\theta_{si}$ dépend du rapport $R_{si}/R_{\\text{total}}$ : plus la paroi est mal isolée, plus $\\theta_{si}$ se rapproche de $\\theta_e$.',
        'Condensation surfacique dès que $\\theta_{si}$ passe sous le point de rosée $\\theta_r$ de l\'air ambiant.',
        'Les ponts thermiques sont les points faibles : leur $\\theta_{si}$ locale est plus basse que celle du mur courant.',
        'Dispositions constructives : rupture de pont thermique, isolation continue, pare-vapeur côté chaud, ventilation des pièces humides.'
      ],
      piege: 'Beaucoup d\'étudiants comparent la température ambiante intérieure $\\theta_i$ au point de rosée, au lieu de la température de <strong>surface</strong> $\\theta_{si}$. Attention : c\'est toujours la température de la paroi elle-même qu\'il faut comparer au point de rosée, jamais la température de l\'air de la pièce — sinon on conclut à tort qu\'il n\'y a jamais de risque.'
    },

    quiz: [
      {
        q: 'Le point de rosée est :',
        options: [
          'La température minimale de l\'air extérieur en hiver',
          'La température à laquelle l\'air, à pression de vapeur constante, atteint la saturation (HR = 100 %)',
          'La température de consigne du chauffage',
          'La température moyenne annuelle d\'un local'
        ],
        answer: 1,
        correction: 'Le point de rosée dépend uniquement de la quantité de vapeur d\'eau présente dans l\'air (donc de $p_v$), pas de la température ambiante actuelle. C\'est la température en dessous de laquelle cette même quantité de vapeur commence à condenser.'
      },
      {
        q: 'Pour savoir s\'il y a un risque de condensation surfacique sur un mur, il faut comparer le point de rosée $\\theta_r$ à :',
        options: [
          'La température de l\'air intérieur $\\theta_i$',
          'La température de l\'air extérieur $\\theta_e$',
          'La température de surface intérieure de la paroi $\\theta_{si}$',
          'La température moyenne du mur sur toute son épaisseur'
        ],
        answer: 2,
        correction: 'C\'est la surface qui est en contact avec l\'air humide intérieur : c\'est donc sa température $\\theta_{si}$, pas la température de l\'air ambiant, qui détermine si la vapeur va condenser localement.'
      },
      {
        q: 'Pourquoi un pont thermique est-il une zone à risque particulier de condensation ?',
        options: [
          'Parce qu\'il laisse passer l\'air extérieur directement dans le logement',
          'Parce que sa résistance thermique locale plus faible fait chuter la température de surface intérieure à cet endroit',
          'Parce qu\'il augmente l\'humidité relative de l\'air intérieur',
          'Parce qu\'il empêche la ventilation du logement'
        ],
        answer: 1,
        correction: 'Un pont thermique est un point de résistance thermique localement plus faible : la chute de température y est plus importante, donc $\\theta_{si}$ y est plus basse qu\'ailleurs sur le mur — le risque de condensation (et de moisissures) y est donc concentré.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const saison = pick([
          { theta_e: rand(-5, 5), contexte: 'une nuit d\'hiver froide' },
          { theta_e: rand(0, 10), contexte: 'une journée d\'hiver' },
          { theta_e: rand(3, 8), contexte: 'un mois de janvier pluvieux' }
        ]);
        const theta_i = rand(18, 22);
        const Rsi = 0.13;
        const Rtotal = randFloat(1.5, 3.5, 2);
        const deltaT = theta_i - saison.theta_e;
        const theta_si = theta_i - (Rsi / Rtotal) * deltaT;
        const theta_si_r = parseFloat(theta_si.toFixed(1));
        const ratio = parseFloat((Rsi / Rtotal).toFixed(4));
        return {
          statement: `Pendant ${saison.contexte}, un local est chauffé à $\\theta_i = ${theta_i}\\,°C$ tandis que l'extérieur est à $\\theta_e = ${saison.theta_e}\\,°C$. Le mur a une résistance thermique totale $R_{\\text{total}} = ${fr(Rtotal, 2)}$ m²·K/W et une résistance superficielle intérieure normalisée $R_{si} = 0{,}13$ m²·K/W. Calcule la température de surface intérieure $\\theta_{si}$ (en °C, arrondi à $0{,}1$).`,
          answer: theta_si_r,
          tolerance: 0.3,
          unit: '°C',
          hint: 'La chute de température est proportionnelle aux résistances : $\\theta_{si} = \\theta_i - \\dfrac{R_{si}}{R_{\\text{total}}}(\\theta_i - \\theta_e)$.',
          solution: [
            `$\\theta_i - \\theta_e = ${theta_i} - (${saison.theta_e}) = ${fr(deltaT, 1)}\\,°C$`,
            `$\\dfrac{R_{si}}{R_{\\text{total}}} = \\dfrac{0{,}13}{${fr(Rtotal, 2)}} \\approx ${fr(ratio, 4)}$`,
            `$\\theta_{si} = ${theta_i} - ${fr(ratio, 4)} \\times ${fr(deltaT, 1)} \\approx ${fr(theta_si_r, 1)}\\,°C$`
          ]
        };
      }
    },

    probleme: {
      context: 'Une chambre est chauffée à $\\theta_i = 19\\,°C$ avec une humidité relative $HR = 65\\%$. Le mur donnant sur l\'extérieur a une résistance thermique totale $R_{\\text{total}} = 1{,}8$ m²·K/W (isolation ancienne, non conforme aux exigences actuelles). Une nuit d\'hiver, la température extérieure descend à $\\theta_e = -3\\,°C$. On donne $R_{si} = 0{,}13$ m²·K/W et $p_{sat}(19\\,°C) \\approx 2\\,198$ Pa.',
      tasks: [
        'Calculer la température de surface intérieure du mur $\\theta_{si}$.',
        'Calculer la pression de vapeur $p_v$ de l\'air intérieur, puis le point de rosée $\\theta_r$ à l\'aide de la formule de Magnus.',
        'Conclure sur le risque de condensation surfacique, et proposer une disposition constructive adaptée si le risque est avéré.'
      ],
      solutions: [
        '$\\theta_{si} = 19 - \\dfrac{0{,}13}{1{,}8}(19-(-3)) = 19 - 0{,}0722 \\times 22 \\approx 19 - 1{,}59 \\approx 17{,}4\\,°C$.',
        '$p_v = 0{,}65 \\times 2\\,198 \\approx 1\\,429$ Pa. $\\ln(1429/611) = \\ln(2{,}339) \\approx 0{,}850$. $\\theta_r = \\dfrac{237{,}3 \\times 0{,}850}{17{,}27 - 0{,}850} \\approx \\dfrac{201{,}7}{16{,}42} \\approx 12{,}3\\,°C$.',
        '$\\theta_{si} \\approx 17{,}4\\,°C$ reste supérieure à $\\theta_r \\approx 12{,}3\\,°C$ : pas de condensation sur le mur courant. Mais avec une isolation aussi faible ($R_{\\text{total}} = 1{,}8$), un pont thermique local (tableau de fenêtre, linteau) ferait facilement chuter $\\theta_{si}$ sous $12{,}3\\,°C$ : une isolation continue et une rupture de pont thermique sont recommandées en préventif.'
      ],
      finalAnswer: '$\\theta_{si} \\approx 17{,}4\\,°C$, $\\theta_r \\approx 12{,}3\\,°C$ : mur courant hors risque, mais marge insuffisante pour garantir l\'absence de condensation au droit des ponts thermiques — isolation continue et rupture de pont thermique recommandées.'
    },

    evaluation: {
      title: 'Évaluation — Hygrothermie',
      duration: '15 min',
      questions: [
        {
          statement: 'Un local est à $\\theta_i = 21\\,°C$, $\\theta_e = 2\\,°C$, avec un mur de $R_{\\text{total}} = 2{,}2$ m²·K/W et $R_{si} = 0{,}13$ m²·K/W. Calcule $\\theta_{si}$ (en °C, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 19.9,
          tolerance: 0.3,
          unit: '°C',
          points: 3,
          correction: '$\\theta_{si} = 21 - (0{,}13/2{,}2) \\times (21-2) = 21 - 0{,}0591 \\times 19 \\approx 21 - 1{,}12 \\approx 19{,}9\\,°C$.'
        },
        {
          statement: 'Une paroi présente un risque de condensation surfacique lorsque :',
          type: 'multiple-choice',
          options: [
            '$\\theta_{si} > \\theta_r$',
            '$\\theta_{si} < \\theta_r$',
            '$\\theta_i > \\theta_e$',
            '$HR < 50\\%$'
          ],
          answer: 1,
          points: 2,
          correction: 'La condensation surfacique apparaît quand la surface intérieure de la paroi est plus froide que le point de rosée de l\'air ambiant : $\\theta_{si} < \\theta_r$.'
        },
        {
          statement: 'La pression de vapeur saturante $p_{sat}(\\theta)$ :',
          type: 'multiple-choice',
          options: [
            'Diminue quand la température augmente',
            'Augmente fortement quand la température augmente',
            'Est indépendante de la température',
            'Ne dépend que de l\'humidité relative'
          ],
          answer: 1,
          points: 2,
          correction: 'Plus l\'air est chaud, plus il peut contenir de vapeur d\'eau avant saturation : $p_{sat}$ augmente fortement avec $\\theta$ (environ $1\\,228$ Pa à $10\\,°C$ contre $2\\,339$ Pa à $20\\,°C$).'
        },
        {
          statement: 'Un local est à $\\theta_i = 22\\,°C$ avec $HR = 55\\%$ ($p_{sat}(22\\,°C) \\approx 2\\,645$ Pa). Calcule la pression de vapeur $p_v$ de l\'air intérieur (en Pa, arrondi à l\'unité).',
          type: 'numeric',
          answer: 1455,
          tolerance: 20,
          unit: 'Pa',
          points: 2,
          correction: '$p_v = HR \\times p_{sat} = 0{,}55 \\times 2\\,645 \\approx 1\\,455$ Pa.'
        },
        {
          statement: 'Citer une disposition constructive qui réduit le risque de condensation superficielle au droit d\'un pont thermique.',
          type: 'multiple-choice',
          options: [
            'Augmenter la température de consigne du chauffage uniquement',
            'Rompre le pont thermique (isolation continue, rupteur) pour limiter la chute locale de $\\theta_{si}$',
            'Fermer les entrées d\'air de ventilation',
            'Peindre le mur avec une peinture imperméable'
          ],
          answer: 1,
          points: 3,
          correction: 'La rupture de pont thermique (ou une isolation continue qui l\'évite) supprime la zone de résistance thermique locale plus faible, donc remonte $\\theta_{si}$ à cet endroit au-dessus du point de rosée.'
        }
      ]
    }
  });
