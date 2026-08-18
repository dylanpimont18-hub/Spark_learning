/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-travail-energie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-travail-energie',
    level: 2, subject: 'physique',
    icon: '🔋',
    title: 'Travail d\'une force et énergie',
    subtitle: 'Travail d\'une force constante, théorème de l\'énergie cinétique, énergie potentielle de pesanteur',
    keywords: ['Travail', 'Énergie cinétique', 'Énergie potentielle', 'Théorème de l\'énergie cinétique'],
    physics: 'Le travail et l\'énergie permettent de dimensionner un moteur de treuil, d\'évaluer le rendement d\'une pompe, de calculer la distance de freinage d\'un véhicule, ou de comprendre l\'échange d\'énergie entre vitesse et altitude sur des montagnes russes.',

    cours: {
      intro: 'Quand une force s\'exerce sur un système qui se déplace, elle peut lui transmettre de l\'énergie : c\'est le <strong>travail</strong> de cette force. Le travail d\'une force constante $\\vec{F}$, entre deux points $A$ et $B$, se calcule par un produit scalaire : $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\times d \\times \\cos\\alpha$, où $\\alpha$ est l\'angle entre $\\vec{F}$ et le déplacement $\\vec{AB}$, et $d$ la distance parcourue. Il s\'exprime en joules (J).<br/><br/>Seule la composante de $\\vec{F}$ <strong>parallèle au déplacement</strong> produit un travail : une force perpendiculaire au déplacement, comme la réaction normale d\'un sol horizontal, ne travaille jamais.<br/><br/>Le <strong>théorème de l\'énergie cinétique</strong> relie ce travail à la vitesse du système : la variation de son <strong>énergie cinétique</strong> $E_c = \\dfrac{1}{2}mv^2$ est égale à la somme des travaux de toutes les forces extérieures qu\'il subit.',
      definitions: [
        { term: 'Travail d\'une force constante', def: 'Pour un déplacement de $A$ à $B$, $W_{AB}(\\vec{F}) = \\vec{F} \\cdot \\vec{AB} = F \\times d \\times \\cos\\alpha$, en joules (J), où $\\alpha$ est l\'angle entre $\\vec{F}$ et $\\vec{AB}$.' },
        { term: 'Signe du travail', def: 'Le travail est <strong>moteur</strong> ($W>0$) si $0 \\leq \\alpha < 90°$ (la force accélère le mouvement), <strong>résistant</strong> ($W<0$) si $90° < \\alpha \\leq 180°$ (elle le freine), et <strong>nul</strong> si $\\alpha = 90°$ (force perpendiculaire au déplacement).' },
        { term: 'Énergie cinétique $E_c$', def: '$E_c = \\dfrac{1}{2}mv^2$, en joules, énergie associée au mouvement d\'un système de masse $m$ et de vitesse $v$.' },
        { term: 'Théorème de l\'énergie cinétique (TEC)', def: 'Entre deux instants, la variation d\'énergie cinétique d\'un système est égale à la somme des travaux des forces extérieures qu\'il subit : $\\Delta E_c = E_{c,B} - E_{c,A} = \\sum W_{AB}(\\vec{F}_{ext})$.' },
        { term: 'Énergie potentielle de pesanteur $E_{pp}$', def: '$E_{pp} = m g h$, où $h$ est l\'altitude par rapport à une origine choisie arbitrairement. Cette origine est libre, mais la <strong>variation</strong> $\\Delta E_{pp}$ entre deux points ne dépend pas de ce choix.' }
      ],
      method: {
        title: 'Calculer un travail et appliquer le TEC en 3 étapes',
        steps: [
          '<strong>Identifier</strong> la force $\\vec{F}$ étudiée, sa norme, et l\'angle $\\alpha$ qu\'elle fait avec le déplacement $\\vec{AB}$ (attention : un angle de $90°$ donne toujours un travail nul, quelle que soit l\'intensité de la force).',
          '<strong>Calculer le travail</strong> : $W_{AB}(\\vec{F}) = F \\times d \\times \\cos\\alpha$, puis vérifier la cohérence du signe obtenu (moteur si $\\alpha<90°$, résistant si $\\alpha>90°$).',
          'Si la question porte sur la vitesse, <strong>appliquer le théorème de l\'énergie cinétique</strong> : faire la somme des travaux de <strong>toutes</strong> les forces extérieures (y compris celles dont le travail est nul), puis en déduire $E_{c,B}$ et donc $v_B$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Travail d\'une force constante lors d\'un déplacement',
        title: 'Projection de $\\vec{F}$ sur la direction du déplacement $\\vec{AB}$',
        description: 'Seule la composante de $\\vec{F}$ parallèle à $\\vec{AB}$ (soit $F\\cos\\alpha$) contribue au travail moteur ; la composante perpendiculaire ne travaille pas.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="travail-title travail-desc">
            <title id="travail-title">Travail d'une force constante inclinee lors d'un deplacement rectiligne</title>
            <desc id="travail-desc">Un point A est relie a un point B par une ligne horizontale representant le deplacement. Depuis A, une fleche inclinee vers le haut represente la force F appliquee, formant un angle alpha avec la ligne AB. Une ligne pointillee verticale part de l'extremite de la fleche F et rejoint la ligne horizontale, marquant la projection de F sur la direction du deplacement. Un segment plus epais sur la ligne horizontale, entre A et ce point de projection, represente la longueur F fois cosinus alpha, la seule composante qui produit un travail.</desc>

            <defs>
              <marker id="arrow-phys1re-travail" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- deplacement AB -->
            <line class="frame-line" x1="80" y1="220" x2="420" y2="220" marker-end="url(#arrow-phys1re-travail)"></line>
            <circle class="plot-point" cx="80" cy="220" r="4"></circle>
            <text class="label-soft" x="80" y="240" text-anchor="middle">A</text>
            <circle class="plot-point" cx="420" cy="220" r="4"></circle>
            <text class="label-soft" x="420" y="240" text-anchor="middle">B</text>
            <text class="tick-label" x="250" y="252" text-anchor="middle">d</text>

            <!-- vecteur F -->
            <line class="curve-main" x1="80" y1="220" x2="243.8" y2="105.3" marker-end="url(#arrow-phys1re-travail)"></line>
            <text class="annotation-label" x="250" y="95" text-anchor="start">F</text>

            <!-- arc d'angle alpha -->
            <path class="guide-line" d="M120,220 A40,40 0 0 0 112.8,187.1" fill="none"></path>
            <text class="tick-label" x="130" y="200" text-anchor="middle">α</text>

            <!-- projection de F sur AB -->
            <line class="guide-line" x1="243.8" y1="105.3" x2="243.8" y2="220"></line>
            <line class="curve-main" x1="80" y1="228" x2="243.8" y2="228"></line>
            <text class="tick-label" x="160" y="245" text-anchor="middle">F·cos α</text>
          </svg>
        `,
        notes: [
          'Le segment épais sous l\'axe, de longueur $F\\cos\\alpha$, représente la <strong>seule composante</strong> de $\\vec{F}$ qui contribue au travail : c\'est elle qui apparaît dans la formule $W = F \\times d \\times \\cos\\alpha$.',
          'La composante de $\\vec{F}$ perpendiculaire au déplacement (verticale ici) ne produit <strong>aucun travail</strong>, quelle que soit son intensité : elle ne fait que « pousser » sans faire avancer le système le long de $\\vec{AB}$.',
          'Plus l\'angle $\\alpha$ est grand, plus $\\cos\\alpha$ diminue, et plus le travail moteur de $\\vec{F}$ est faible pour une même force appliquée.'
        ],
        reading: 'Repère le déplacement $A \\to B$ en bas, puis le vecteur $\\vec{F}$ incliné d\'un angle $\\alpha$, et enfin sa projection sur l\'axe horizontal, matérialisée par le segment épais.',
        caption: 'Seule la composante de $\\vec{F}$ parallèle au déplacement ($F\\cos\\alpha$) produit un travail : c\'est le principe géométrique de la formule $W_{AB}(\\vec{F}) = F \\times d \\times \\cos\\alpha$.'
      },
      example: {
        statement: 'Une caisse de masse $m = 50$ kg, initialement immobile, est tirée sur un sol horizontal parfaitement lisse (sans frottement) par une force $\\vec{F}$ de norme $F = 120$ N, inclinée d\'un angle $\\alpha = 30°$ par rapport au sol, sur une distance $d = 8$ m.<br/><br/>Calculer le travail de $\\vec{F}$, puis la vitesse de la caisse à la fin du déplacement.',
        steps: [
          'Travail de $\\vec{F}$ : $W(\\vec{F}) = F \\times d \\times \\cos\\alpha = 120 \\times 8 \\times \\cos(30°) = 960 \\times 0{,}866 \\approx 831{,}4$ J.',
          'Bilan des autres forces : le poids $\\vec{P}$ et la réaction normale $\\vec{N}$ sont verticales, perpendiculaires au déplacement horizontal : leur travail est <strong>nul</strong>. Sans frottement, aucune autre force ne travaille.',
          'Théorème de l\'énergie cinétique : $\\Delta E_c = \\sum W(\\vec{F}_{ext}) = W(\\vec{F}) + W(\\vec{P}) + W(\\vec{N}) = 831{,}4 + 0 + 0 = 831{,}4$ J.',
          'La caisse partant du repos, $E_{c,A} = 0$, donc $E_{c,B} = \\Delta E_c = 831{,}4$ J.',
          'On isole $v$ dans $E_{c,B} = \\dfrac{1}{2}mv^2$ : $v = \\sqrt{\\dfrac{2 E_{c,B}}{m}} = \\sqrt{\\dfrac{2 \\times 831{,}4}{50}} = \\sqrt{33{,}26} \\approx 5{,}77$ m/s.'
        ],
        answer: '$W(\\vec{F}) \\approx 831{,}4$ J et $v \\approx 5{,}77$ m/s. Le poids et la réaction normale, bien que présents, n\'interviennent pas dans le calcul car ils sont <strong>perpendiculaires</strong> au déplacement : c\'est un réflexe essentiel à vérifier avant de sommer les travaux.'
      },
      formulas: [
        'Travail d\'une force constante : $W_{AB}(\\vec{F}) = F \\times d \\times \\cos\\alpha$',
        'Énergie cinétique : $E_c = \\dfrac{1}{2}mv^2$',
        'Théorème de l\'énergie cinétique : $\\Delta E_c = \\sum W_{AB}(\\vec{F}_{ext})$',
        'Énergie potentielle de pesanteur : $E_{pp} = mgh$',
        'Travail du poids lors d\'une chute de hauteur $h$ : $W(\\vec{P}) = mgh$ (moteur si l\'objet descend)'
      ],
      recap: [
        'Le travail d\'une force dépend de l\'angle $\\alpha$ entre cette force et le déplacement : seule la composante <strong>parallèle</strong> au déplacement produit un travail.',
        'Une force perpendiculaire au déplacement (comme $\\vec{N}$ sur un sol horizontal) a toujours un travail <strong>nul</strong>, quelle que soit son intensité.',
        'Le théorème de l\'énergie cinétique permet de calculer une vitesse à partir des travaux des forces, sans devoir résoudre les équations horaires du mouvement.',
        'L\'énergie potentielle de pesanteur dépend d\'un choix arbitraire d\'origine des altitudes, mais sa <strong>variation</strong> entre deux points, elle, ne dépend jamais de ce choix.'
      ],
      piege: 'Une erreur fréquente consiste à calculer le travail d\'une force comme si elle était toujours parallèle au déplacement, en oubliant le facteur $\\cos\\alpha$. Attention, seule la composante de la force projetée sur la direction du déplacement produit un travail : une force perpendiculaire au déplacement, comme la réaction normale sur un sol horizontal, a toujours un travail nul, quelle que soit son intensité.'
    },

    quiz: [
      {
        q: 'Une force $\\vec{F}$ de norme $80$ N fait un angle de $90°$ avec le déplacement $\\vec{AB}$ de norme $d=5$ m. Quel est le travail de cette force ?',
        options: [
          '$W = 400$ J',
          '$W = 0$ J',
          '$W = -400$ J',
          '$W = 40$ J'
        ],
        answer: 1,
        correction: '$W = F \\times d \\times \\cos(90°) = F \\times d \\times 0 = 0$ J. Une force perpendiculaire au déplacement ne travaille jamais, quelle que soit son intensité.'
      },
      {
        q: 'Un objet de masse $m = 4$ kg se déplace à une vitesse $v = 3$ m/s. Quelle est son énergie cinétique ?',
        options: [
          '$E_c = 12$ J',
          '$E_c = 18$ J',
          '$E_c = 36$ J',
          '$E_c = 24$ J'
        ],
        answer: 1,
        correction: '$E_c = \\dfrac{1}{2}mv^2 = \\dfrac{1}{2} \\times 4 \\times 3^2 = \\dfrac{1}{2} \\times 4 \\times 9 = 18$ J. Attention à bien élever la vitesse au carré <strong>avant</strong> de multiplier par la masse.'
      },
      {
        q: 'D\'après le théorème de l\'énergie cinétique, si la somme des travaux des forces extérieures appliquées à un système est négative entre deux points, alors :',
        options: [
          'La vitesse du système augmente',
          'La vitesse du système diminue',
          'La vitesse du système reste constante',
          'On ne peut rien dire sur la vitesse'
        ],
        answer: 1,
        correction: 'Si $\\sum W < 0$, alors $\\Delta E_c < 0$ : l\'énergie cinétique diminue, donc la vitesse du système diminue également (les forces sont globalement résistantes).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['travail', 'tec']);

        if (typeExo === 'travail') {
          var F = rand(30, 300);
          var d = rand(2, 20);
          var alpha = pick([0, 20, 30, 45, 60, 90, 120]);
          var alphaRad = alpha * Math.PI / 180;
          var W = parseFloat((F * d * Math.cos(alphaRad)).toFixed(1));
          var contexte = pick([
            'un traîneau tiré sur une piste enneigée',
            'une caisse tractée dans un entrepôt',
            'une remorque déplacée sur un chantier',
            'un chariot poussé le long d\'un couloir'
          ]);
          return {
            statement: 'Sur ' + contexte + ', une force $F = ' + F + '$ N, inclinée d\'un angle $\\alpha = ' + alpha + '°$ par rapport au déplacement, s\'exerce sur une distance $d = ' + d + '$ m.<br/><br/>Calcule le travail $W$ de cette force (en J, arrondi au dixième), et précise s\'il est moteur, résistant ou nul.',
            answer: W,
            tolerance: Math.max(1, Math.abs(W) * 0.03),
            unit: 'J',
            hint: 'Utilise $W = F \\times d \\times \\cos\\alpha$, en convertissant l\'angle en radians si besoin pour le calcul du cosinus.',
            solution: [
              'Formule : $W = F \\times d \\times \\cos\\alpha = ' + F + ' \\times ' + d + ' \\times \\cos(' + alpha + '°)$.',
              'Produit $F \\times d = ' + (F * d) + '$ J, à multiplier par $\\cos(' + alpha + '°) \\approx ' + fr(parseFloat(Math.cos(alphaRad).toFixed(3)), 3) + '$.',
              'Résultat : $W \\approx ' + fr(W, 1) + '$ J, travail ' + (W > 0.01 ? 'moteur' : (W < -0.01 ? 'résistant' : 'nul')) + '.'
            ]
          };
        } else {
          var m = rand(5, 100);
          var F2 = rand(30, 250);
          var d2 = rand(3, 15);
          var W2 = parseFloat((F2 * d2).toFixed(1));
          var v0 = pick([0, 0, 0, 1, 2]);
          var Ec0 = parseFloat((0.5 * m * v0 * v0).toFixed(1));
          var EcB = parseFloat((Ec0 + W2).toFixed(1));
          var vB = parseFloat(Math.sqrt(2 * EcB / m).toFixed(2));
          var mobile = pick([
            'un skieur',
            'un cycliste',
            'un chariot de golf électrique',
            'un patineur sur glace'
          ]);
          return {
            statement: 'Un ' + mobile + ' de masse $m = ' + m + '$ kg, initialement à la vitesse $v_0 = ' + v0 + '$ m/s, est poussé par une force parallèle au déplacement de norme $F = ' + F2 + '$ N sur une distance $d = ' + d2 + '$ m (sol horizontal sans frottement).<br/><br/>D\'après le théorème de l\'énergie cinétique, calcule sa vitesse finale $v_B$ (en m/s, arrondie au centième).',
            answer: vB,
            tolerance: Math.max(0.05, vB * 0.03),
            unit: 'm/s',
            hint: 'Calcule d\'abord $W(\\vec F) = F \\times d$ (force parallèle au déplacement), puis utilise $E_{c,B} = E_{c,A} + \\Delta E_c$ et enfin $v_B = \\sqrt{2E_{c,B}/m}$.',
            solution: [
              'Travail de la force (parallèle au déplacement, $\\alpha=0°$) : $W(\\vec F) = F \\times d = ' + F2 + ' \\times ' + d2 + ' = ' + fr(W2, 1) + '$ J.',
              'Énergie cinétique initiale : $E_{c,A} = \\dfrac{1}{2} \\times ' + m + ' \\times ' + v0 + '^2 = ' + fr(Ec0, 1) + '$ J.',
              'TEC : $E_{c,B} = E_{c,A} + W(\\vec F) = ' + fr(Ec0, 1) + ' + ' + fr(W2, 1) + ' = ' + fr(EcB, 1) + '$ J.',
              'On isole $v_B$ : $v_B = \\sqrt{\\dfrac{2 E_{c,B}}{m}} \\approx ' + fr(vB, 2) + '$ m/s.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Une bille de masse $m = 0{,}2$ kg est lâchée sans vitesse initiale depuis une hauteur $h = 5$ m au-dessus du sol, en chute libre (frottements de l\'air négligés). On prend $g = 9{,}81$ m/s². On choisit l\'origine des altitudes au niveau du sol.',
      tasks: [
        'Calculer l\'énergie potentielle de pesanteur $E_{pp}$ de la bille à sa position initiale.',
        'Calculer le travail du poids lors de la chute jusqu\'au sol.',
        'En appliquant le théorème de l\'énergie cinétique, calculer la vitesse de la bille juste avant l\'impact.'
      ],
      solutions: [
        '$E_{pp} = m \\times g \\times h = 0{,}2 \\times 9{,}81 \\times 5 \\approx 9{,}81$ J.',
        'Le poids est une force verticale vers le bas, dans le même sens que le déplacement (la bille descend) : $W(\\vec{P}) = m \\times g \\times h = 0{,}2 \\times 9{,}81 \\times 5 \\approx 9{,}81$ J (travail moteur).',
        'La bille part du repos, $E_{c,A} = 0$. Seul le poids travaille (frottements négligés) : $E_{c,B} = E_{c,A} + W(\\vec{P}) = 0 + 9{,}81 = 9{,}81$ J. On isole $v$ : $v = \\sqrt{\\dfrac{2 \\times 9{,}81}{0{,}2}} = \\sqrt{98{,}1} \\approx 9{,}90$ m/s.'
      ],
      finalAnswer: '$v \\approx 9{,}90$ m/s juste avant l\'impact. On remarque que le travail du poids ($\\approx 9{,}81$ J) est exactement égal à l\'énergie potentielle initiale : en l\'absence de frottement, toute l\'énergie potentielle se convertit en énergie cinétique, ce qui traduit la <strong>conservation de l\'énergie mécanique</strong>.'
    },

    evaluation: {
      title: 'Évaluation — Travail d\'une force et énergie',
      duration: '30 min',
      questions: [
        {
          statement: 'Une force $F = 50$ N, parallèle au déplacement ($\\alpha = 0°$), agit sur une distance $d = 6$ m. Calculer son travail (en J).',
          type: 'numeric',
          answer: 300,
          tolerance: 5,
          unit: 'J',
          points: 2,
          correction: '$W = F \\times d \\times \\cos(0°) = 50 \\times 6 \\times 1 = 300$ J.'
        },
        {
          statement: 'Un objet de masse $m = 10$ kg a une vitesse $v = 4$ m/s. Calculer son énergie cinétique (en J).',
          type: 'numeric',
          answer: 80,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\dfrac{1}{2}mv^2 = \\dfrac{1}{2}\\times10\\times4^2 = \\dfrac{1}{2}\\times10\\times16 = 80$ J.'
        },
        {
          statement: 'Une force perpendiculaire au déplacement a un travail :',
          type: 'multiple-choice',
          options: [
            'Toujours positif',
            'Toujours négatif',
            'Toujours nul',
            'Cela dépend de sa norme'
          ],
          answer: 2,
          points: 2,
          correction: '$\\cos(90°) = 0$, donc le travail d\'une force perpendiculaire au déplacement est toujours nul, quelle que soit son intensité.'
        },
        {
          statement: 'Un système de masse $m = 2$ kg, partant du repos, subit un travail total des forces extérieures $W = 25$ J. Calculer sa vitesse finale (en m/s, arrondie au centième).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.2,
          unit: 'm/s',
          points: 3,
          correction: 'TEC : $E_{c,B} = 0 + W = 25$ J. $v = \\sqrt{\\dfrac{2\\times25}{2}} = \\sqrt{25} = 5$ m/s.'
        },
        {
          statement: 'L\'énergie potentielle de pesanteur $E_{pp} = mgh$ dépend :',
          type: 'multiple-choice',
          options: [
            'Uniquement de la masse',
            'D\'un choix arbitraire d\'origine des altitudes',
            'Uniquement de la vitesse du système',
            'Elle ne dépend d\'aucun paramètre'
          ],
          answer: 1,
          points: 1,
          correction: 'L\'énergie potentielle de pesanteur dépend du choix de l\'origine des altitudes ($h=0$), qui est arbitraire. Seule sa <strong>variation</strong> entre deux points est indépendante de ce choix.'
        }
      ]
    }
  });
