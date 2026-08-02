/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a4-traitement-air.js
   BTS FED — S8-A4 Traitement d'air
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a4-traitement-air',
    level: 3, subject: 'fed',
    icon: '🌬️',
    title: 'Traitement d\'air',
    subtitle: 'Diagramme de l\'air humide, mélange et évolutions types',
    keywords: ['Diagramme de l\'air humide', 'Humidité absolue', 'Mélange d\'air', 'Enthalpie', 'Soufflage'],
    physics: 'Une centrale de traitement d\'air (CTA) mélange en permanence de l\'air neuf (extérieur) et de l\'air repris (recyclé depuis le local), puis chauffe ou refroidit ce mélange avant de le souffler dans les pièces. Le <strong>diagramme de l\'air humide</strong> est l\'outil qui permet de suivre chacune de ces évolutions d\'un simple coup d\'œil, sans recalculer toute la thermodynamique à chaque fois.',

    cours: {
      intro: 'L\'air humide se caractérise par deux grandeurs indépendantes de sa température : la quantité de vapeur d\'eau qu\'il transporte, et l\'énergie qu\'il contient.<br/><br/>L\'<strong>humidité absolue</strong> $r$ (en g d\'eau par kg d\'air sec) mesure la première ; l\'<strong>enthalpie</strong> $h$ (en kJ/kg d\'air sec) mesure la seconde. Le <strong>diagramme de l\'air humide</strong> place chaque état d\'air possible sur un graphique température/humidité absolue, ce qui permet de <strong>lire</strong> directement ces grandeurs et de <strong>suivre une évolution</strong> (mélange, chauffage, refroidissement) comme un simple déplacement sur ce graphique.<br/><br/>Deux évolutions types reviennent constamment en CTA : le <strong>mélange</strong> de deux flux d\'air (air neuf + air repris), et le <strong>chauffage simple</strong> par batterie chaude, qui n\'ajoute ni ne retire de vapeur d\'eau.',
      definitions: [
        { term: 'Humidité absolue $r$', def: 'Masse de vapeur d\'eau contenue dans $1$ kg d\'air sec, exprimée en g d\'eau/kg air sec. Ne change que si de l\'eau est ajoutée (humidification) ou retirée (déshumidification, condensation sur batterie froide).' },
        { term: 'Enthalpie de l\'air humide $h$', def: 'Quantité de chaleur contenue dans $1$ kg d\'air sec, en kJ/kg air sec. Elle augmente avec la température et avec l\'humidité absolue.' },
        { term: 'Diagramme de l\'air humide (abaque)', def: 'Graphique température (abscisse) / humidité absolue (ordonnée) sur lequel figurent aussi les courbes d\'humidité relative $HR$ constante et les droites d\'enthalpie $h$ constante. Chaque état d\'air est un point ; chaque évolution est un segment.' },
        { term: 'Mélange de deux flux d\'air', def: 'Le point représentatif du mélange se situe sur le segment reliant les deux points d\'air initiaux, à une position déterminée par le rapport des débits massiques : plus un débit est important, plus le point mélange est proche de son état d\'origine.' },
        { term: 'Chauffage simple (batterie chaude)', def: 'Évolution à humidité absolue $r$ constante : aucune vapeur d\'eau n\'est ajoutée ni retirée, seule la température augmente. Sur le diagramme, c\'est un déplacement <strong>horizontal</strong> vers la droite ; l\'humidité relative $HR$ diminue en conséquence.' },
        { term: 'Conditions de soufflage', def: 'État d\'air $(\\theta, r)$ introduit dans le local après traitement, choisi pour compenser exactement les apports de chaleur et d\'humidité du local (approfondi en système B).' }
      ],
      method: {
        title: 'Déterminer le point de mélange de deux flux d\'air',
        steps: [
          '<strong>Repérer les deux états d\'air</strong> à mélanger : $(\\theta_1, r_1)$ avec un débit massique $q_{m1}$, et $(\\theta_2, r_2)$ avec un débit massique $q_{m2}$.',
          '<strong>Calculer le débit total</strong> $q_m = q_{m1} + q_{m2}$.',
          '<strong>Calculer l\'humidité absolue du mélange</strong> par un bilan massique de vapeur d\'eau pondéré par les débits : $r_{\\text{mélange}} = \\dfrac{q_{m1} r_1 + q_{m2} r_2}{q_{m1} + q_{m2}}$.',
          '<strong>Calculer la température du mélange</strong> de la même façon (approximation usuelle à ce niveau) : $\\theta_{\\text{mélange}} \\approx \\dfrac{q_{m1} \\theta_1 + q_{m2} \\theta_2}{q_{m1} + q_{m2}}$.',
          '<strong>Vérifier sur le diagramme</strong> que le point mélange se situe bien sur le segment reliant les deux points initiaux, plus proche du point ayant le débit le plus élevé.'
        ]
      },
      example: {
        statement: 'Une CTA mélange un débit d\'air neuf $q_{m1} = 0{,}5$ kg/s à $\\theta_1 = 2\\,°C$ avec une humidité absolue $r_1 = 3$ g/kg air sec, avec un débit d\'air repris $q_{m2} = 1{,}5$ kg/s à $\\theta_2 = 21\\,°C$ avec $r_2 = 7$ g/kg air sec.<br/><br/>Déterminer la température et l\'humidité absolue de l\'air mélangé.',
        steps: [
          'Débit total : $q_m = q_{m1} + q_{m2} = 0{,}5 + 1{,}5 = 2$ kg/s.',
          'Humidité absolue du mélange : $r_{\\text{mélange}} = \\dfrac{0{,}5 \\times 3 + 1{,}5 \\times 7}{2} = \\dfrac{1{,}5 + 10{,}5}{2} = \\dfrac{12}{2} = 6$ g/kg air sec.',
          'Température du mélange : $\\theta_{\\text{mélange}} \\approx \\dfrac{0{,}5 \\times 2 + 1{,}5 \\times 21}{2} = \\dfrac{1 + 31{,}5}{2} = \\dfrac{32{,}5}{2} = 16{,}25\\,°C$.'
        ],
        answer: '$\\theta_{\\text{mélange}} \\approx 16{,}25\\,°C$ et $r_{\\text{mélange}} = 6$ g/kg air sec. Le débit d\'air repris étant $3$ fois plus important que celui d\'air neuf, le point mélange est logiquement bien plus proche de l\'état de l\'air repris que de celui de l\'air neuf.'
      },
      formulas: [
        '$r_{\\text{mélange}} = \\dfrac{q_{m1} r_1 + q_{m2} r_2}{q_{m1} + q_{m2}}$ (humidité absolue du mélange, bilan massique pondéré par les débits)',
        '$\\theta_{\\text{mélange}} \\approx \\dfrac{q_{m1} \\theta_1 + q_{m2} \\theta_2}{q_{m1} + q_{m2}}$ (température du mélange, même principe)',
        'Chauffage simple (batterie chaude) : $r$ constant, $\\theta$ augmente — déplacement horizontal sur le diagramme de l\'air humide'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Diagramme de l\'air humide (schématique)',
        title: 'Mélange air neuf / air repris, puis chauffage simple avant soufflage',
        description: 'Le point mélange se situe sur le segment reliant l\'air neuf et l\'air repris. La batterie chaude déplace ensuite ce point horizontalement (humidité absolue constante) jusqu\'aux conditions de soufflage.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="air-graph-title air-graph-desc">
            <title id="air-graph-title">Diagramme schematique de l'air humide, melange et chauffage simple</title>
            <desc id="air-graph-desc">Graphique humidite absolue en fonction de la temperature. Deux points representent l'air neuf, froid et sec, et l'air repris, chaud et humide. Un segment les relie, et le point de melange se situe dessus, plus proche de l'air repris car son debit est plus important. Une fleche horizontale part de ce point de melange vers la droite, a humidite absolue constante, jusqu'au point de soufflage apres chauffage.</desc>

            <line class="frame-line" x1="50" y1="230" x2="430" y2="230"></line>
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>

            <!-- segment air neuf - air repris -->
            <polyline class="curve-main" points="75,167 316,83" fill="none"></polyline>

            <!-- fleche chauffage a r constant -->
            <line class="curve-main" x1="256" y1="104" x2="354" y2="104" marker-end="url(#arrow-fed-air)"></line>

            <defs>
              <marker id="arrow-fed-air" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- points -->
            <circle class="plot-point-alt" cx="75" cy="167" r="4"></circle>
            <circle class="plot-point-alt" cx="316" cy="83" r="4"></circle>
            <circle class="plot-point" cx="256" cy="104" r="5"></circle>
            <circle class="plot-point-alt" cx="354" cy="104" r="4"></circle>

            <!-- etiquettes points -->
            <text class="annotation-label" x="80" y="182" text-anchor="start">Air neuf</text>
            <text class="annotation-label" x="270" y="65" text-anchor="start">Air repris</text>
            <text class="annotation-label" x="256" y="142" text-anchor="middle">Mélange</text>
            <text class="tick-label" x="354" y="90" text-anchor="middle">Soufflage</text>
            <text class="annotation-label" x="305" y="122" text-anchor="middle">Chauffage (r constant)</text>

            <!-- etiquettes axes -->
            <text class="tick-label" x="50" y="245" text-anchor="middle">0 °C</text>
            <text class="tick-label" x="177" y="245" text-anchor="middle">10 °C</text>
            <text class="tick-label" x="303" y="245" text-anchor="middle">20 °C</text>
            <text class="tick-label" x="430" y="245" text-anchor="middle">30 °C</text>
            <text class="label-soft" x="55" y="15" text-anchor="start">r (g/kg air sec)</text>
            <text class="label-soft" x="430" y="252" text-anchor="end">θ (°C)</text>
          </svg>
        `,
        notes: [
          'Le point <strong>Mélange</strong> se trouve sur le segment reliant Air neuf et Air repris, nettement plus proche d\'Air repris : c\'est cohérent, son débit ($1{,}5$ kg/s) est trois fois plus grand que celui de l\'air neuf ($0{,}5$ kg/s).',
          'La flèche horizontale représente le passage sur la <strong>batterie chaude</strong> : l\'humidité absolue $r$ ne change pas, seule la température augmente jusqu\'au point de <strong>soufflage</strong>.',
          'Un déplacement horizontal vers la droite à $r$ constant fait toujours <strong>diminuer</strong> l\'humidité relative $HR$, puisque $p_{sat}(\\theta)$ augmente avec la température (voir le module Hygrothermie).'
        ],
        reading: 'Repère d\'abord les deux points extrêmes (air neuf, air repris) et le point mélange sur leur segment ; suis ensuite la flèche horizontale pour voir comment la batterie chaude déplace ce point sans changer sa hauteur (donc son humidité absolue).',
        caption: 'Mélange de deux flux d\'air puis chauffage simple à humidité absolue constante, sur un diagramme de l\'air humide schématique.'
      },
      recap: [
        'L\'humidité absolue $r$ (g/kg air sec) mesure la quantité de vapeur d\'eau ; l\'enthalpie $h$ (kJ/kg air sec) mesure l\'énergie contenue dans l\'air humide.',
        'Le point de mélange de deux flux d\'air se situe sur le segment reliant leurs deux états, pondéré par leurs débits massiques : $r_{\\text{mélange}} = \\dfrac{q_{m1}r_1+q_{m2}r_2}{q_{m1}+q_{m2}}$.',
        'Un chauffage simple (batterie chaude) déplace le point <strong>horizontalement</strong> sur le diagramme : l\'humidité absolue reste constante, seule la température change.',
        'À humidité absolue constante, une hausse de température fait toujours <strong>diminuer</strong> l\'humidité relative $HR$ (car $p_{sat}(\\theta)$ augmente avec $\\theta$).',
        'Les conditions de soufflage sont choisies pour compenser exactement les apports de chaleur et d\'humidité du local desservi.'
      ],
      piege: 'Le bilan de mélange doit être pondéré par les <strong>débits massiques</strong> ($q_{m1}$, $q_{m2}$, en kg/s), pas par une simple moyenne arithmétique des deux états : un mélange de deux débits très différents donne un point bien plus proche de l\'état du débit le plus important, jamais à mi-chemin par défaut. Attention aussi à ne pas confondre chauffage simple ($r$ constant, déplacement horizontal) avec une évolution qui ajouterait ou retirerait de l\'humidité (déplacement qui aurait alors aussi une composante verticale sur le diagramme).'
    },

    quiz: [
      {
        q: 'Sur le diagramme de l\'air humide, le point représentant le mélange de deux flux d\'air se situe :',
        options: [
          'Toujours exactement à mi-chemin entre les deux points initiaux',
          'Sur le segment reliant les deux points initiaux, pondéré par les débits massiques',
          'Toujours au-dessus des deux points initiaux',
          'À un endroit qui ne dépend pas des débits'
        ],
        answer: 1,
        correction: 'Le point mélange se situe sur le segment reliant les deux états d\'air, à une position déterminée par le rapport des débits massiques : plus un débit est grand, plus le point mélange est proche de son état d\'origine.'
      },
      {
        q: 'Un chauffage simple par batterie chaude, sans apport d\'humidité, se traduit sur le diagramme de l\'air humide par :',
        options: [
          'Un déplacement vertical (l\'humidité absolue change, pas la température)',
          'Un déplacement horizontal (la température change, l\'humidité absolue reste constante)',
          'Un déplacement diagonal quelconque',
          'Aucun déplacement, le point reste fixe'
        ],
        answer: 1,
        correction: 'Sans ajout ni retrait de vapeur d\'eau, l\'humidité absolue $r$ ne change pas : seule la température augmente, ce qui se traduit par un déplacement horizontal sur le diagramme.'
      },
      {
        q: 'Lorsque la température augmente à humidité absolue $r$ constante, l\'humidité relative $HR$ :',
        options: [
          'Augmente',
          'Diminue',
          'Reste strictement constante',
          'Devient négative'
        ],
        answer: 1,
        correction: 'La pression de vapeur saturante $p_{sat}(\\theta)$ augmente avec la température (voir le module Hygrothermie) ; à quantité de vapeur d\'eau inchangée ($r$ constant), $HR = p_v/p_{sat}(\\theta)$ diminue donc mécaniquement.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une CTA de bureaux', 'un système de ventilation d\'atelier industriel', 'une CTA de salle de classe', 'un système de traitement d\'air d\'un commerce', 'une CTA d\'un gymnase'
        ]);
        const qm1 = randFloat(0.2, 1.0, 2);
        const qm2 = randFloat(0.5, 2.0, 2);
        const theta1 = rand(-2, 8);
        const theta2 = rand(18, 24);
        const r1 = randFloat(1, 5, 1);
        const r2 = randFloat(6, 10, 1);
        const qmTotal = parseFloat((qm1 + qm2).toFixed(2));
        const rMelange = parseFloat(((qm1 * r1 + qm2 * r2) / qmTotal).toFixed(1));
        return {
          statement: `Dans ${contexte}, on mélange un débit d'air neuf $q_{m1} = ${fr(qm1, 2)}$ kg/s à $\\theta_1 = ${theta1}\\,°C$ avec une humidité absolue $r_1 = ${fr(r1, 1)}$ g/kg air sec, avec un débit d'air repris $q_{m2} = ${fr(qm2, 2)}$ kg/s à $\\theta_2 = ${theta2}\\,°C$ avec $r_2 = ${fr(r2, 1)}$ g/kg air sec.<br/><br/>Calcule l'humidité absolue du mélange $r_{\\text{mélange}}$ (en g/kg air sec, arrondie au dixième).`,
          answer: rMelange,
          tolerance: 0.3,
          unit: 'g/kg',
          hint: 'Bilan massique pondéré par les débits : $r_{\\text{mélange}} = \\dfrac{q_{m1}r_1+q_{m2}r_2}{q_{m1}+q_{m2}}$.',
          solution: [
            `Débit total : $q_m = ${fr(qm1, 2)} + ${fr(qm2, 2)} = ${fr(qmTotal, 2)}$ kg/s.`,
            `$r_{\\text{mélange}} = \\dfrac{${fr(qm1, 2)} \\times ${fr(r1, 1)} + ${fr(qm2, 2)} \\times ${fr(r2, 1)}}{${fr(qmTotal, 2)}} \\approx ${fr(rMelange, 1)}$ g/kg air sec.`
          ]
        };
      }
    },

    probleme: {
      context: 'On reprend la CTA étudiée en cours : mélange d\'air neuf $q_{m1} = 0{,}5$ kg/s ($\\theta_1 = 2\\,°C$, $r_1 = 3$ g/kg air sec) et d\'air repris $q_{m2} = 1{,}5$ kg/s ($\\theta_2 = 21\\,°C$, $r_2 = 7$ g/kg air sec), qui donne un mélange à $\\theta_{\\text{mélange}} \\approx 16{,}25\\,°C$ et $r_{\\text{mélange}} = 6$ g/kg air sec. Une batterie chaude, placée juste après le point de mélange, élève ensuite la température jusqu\'aux conditions de soufflage $\\theta_{\\text{soufflage}} = 24\\,°C$, sans aucun apport ni retrait de vapeur d\'eau.',
      tasks: [
        'Rappeler la valeur de l\'humidité absolue au point de mélange, avant passage sur la batterie chaude.',
        'Donner l\'humidité absolue $r_{\\text{soufflage}}$ après passage sur la batterie chaude, en justifiant sans nouveau calcul.',
        'Expliquer qualitativement comment évolue l\'humidité relative $HR$ entre le point de mélange et le point de soufflage, en s\'appuyant sur la relation $HR = p_v/p_{sat}(\\theta)$.'
      ],
      solutions: [
        '$r_{\\text{mélange}} = 6$ g/kg air sec (calculé en cours par bilan massique pondéré des débits).',
        'Une batterie chaude n\'ajoute ni ne retire de vapeur d\'eau : $r_{\\text{soufflage}} = r_{\\text{mélange}} = 6$ g/kg air sec, malgré le changement de température.',
        'La pression de vapeur $p_v$ ne change pas (car $r$ est constant), mais la pression de vapeur saturante $p_{sat}(\\theta)$ augmente avec la température (de $16{,}25\\,°C$ à $24\\,°C$). Comme $HR = p_v/p_{sat}(\\theta)$, avec $p_v$ inchangé et $p_{sat}(\\theta)$ plus grand, $HR$ diminue nécessairement entre le mélange et le soufflage.'
      ],
      finalAnswer: '$r_{\\text{soufflage}} = 6$ g/kg air sec (inchangé), mais l\'humidité relative $HR$ diminue entre le mélange et le soufflage : la batterie chaude assèche l\'air « en relatif » sans lui retirer une seule goutte d\'eau, simplement parce que l\'air chaud peut contenir davantage de vapeur avant saturation.'
    },

    evaluation: {
      title: 'Évaluation — Traitement d\'air',
      duration: '20 min',
      questions: [
        {
          statement: 'On mélange un débit d\'air neuf $q_{m1} = 1$ kg/s à $r_1 = 2$ g/kg air sec avec un débit d\'air repris $q_{m2} = 3$ kg/s à $r_2 = 8$ g/kg air sec. Calculer l\'humidité absolue du mélange $r_{\\text{mélange}}$ (en g/kg air sec).',
          type: 'numeric',
          answer: 6.5,
          tolerance: 0.3,
          unit: 'g/kg',
          points: 3,
          correction: '$r_{\\text{mélange}} = \\dfrac{1 \\times 2 + 3 \\times 8}{1+3} = \\dfrac{2+24}{4} = \\dfrac{26}{4} = 6{,}5$ g/kg air sec.'
        },
        {
          statement: 'L\'humidité absolue $r$ d\'un air humide représente :',
          type: 'multiple-choice',
          options: [
            'Le pourcentage de vapeur d\'eau par rapport à la saturation',
            'La masse de vapeur d\'eau contenue dans 1 kg d\'air sec',
            'La température de l\'air',
            'L\'enthalpie totale de l\'air'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'humidité absolue $r$ est une masse de vapeur d\'eau par kg d\'air sec (g/kg air sec) — à distinguer de l\'humidité relative $HR$, qui elle est un pourcentage par rapport à la saturation.'
        },
        {
          statement: 'Un chauffage simple par batterie chaude ne change pas :',
          type: 'multiple-choice',
          options: [
            'La température de l\'air',
            'L\'humidité absolue de l\'air',
            'L\'enthalpie de l\'air',
            'L\'humidité relative de l\'air'
          ],
          answer: 1,
          points: 2,
          correction: 'Une batterie chaude n\'ajoute ni ne retire de vapeur d\'eau : l\'humidité absolue $r$ reste constante, alors que la température, l\'enthalpie et l\'humidité relative changent tous les trois.'
        },
        {
          statement: 'On mélange un débit d\'air à $\\theta_1 = 5\\,°C$ ($q_{m1} = 0{,}8$ kg/s) avec un débit d\'air à $\\theta_2 = 20\\,°C$ ($q_{m2} = 1{,}2$ kg/s). Calculer la température du mélange $\\theta_{\\text{mélange}}$ (en °C, arrondie au dixième).',
          type: 'numeric',
          answer: 14,
          tolerance: 0.3,
          unit: '°C',
          points: 3,
          correction: '$\\theta_{\\text{mélange}} \\approx \\dfrac{0{,}8 \\times 5 + 1{,}2 \\times 20}{0{,}8+1{,}2} = \\dfrac{4+24}{2} = \\dfrac{28}{2} = 14\\,°C$.'
        },
        {
          statement: 'Entre le point de mélange et le point de soufflage (après batterie chaude, à humidité absolue constante), l\'humidité relative $HR$ :',
          type: 'multiple-choice',
          options: [
            'Augmente, car l\'air est plus chaud',
            'Diminue, car $p_{sat}(\\theta)$ augmente avec la température alors que $p_v$ ne change pas',
            'Reste rigoureusement constante',
            'Devient nulle'
          ],
          answer: 1,
          points: 2,
          correction: 'À $r$ constant, $p_v$ ne change pas ; mais $p_{sat}(\\theta)$ augmente avec la température. Comme $HR = p_v/p_{sat}(\\theta)$, $HR$ diminue nécessairement lors d\'un chauffage simple.'
        }
      ]
    }
  });
