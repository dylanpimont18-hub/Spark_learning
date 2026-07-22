/* =========================================================
   Spark Learning – data/si-bts/si-bts-rdm-avancee.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-rdm-avancee',
    level: 3, subject: 'si',
    icon: '🏗️',
    title: 'Résistance des Matériaux Avancée',
    subtitle: 'Flexion, cisaillement, torsion, Von Mises, moments quadratiques',
    keywords: ['Flexion', 'Cisaillement', 'Torsion', 'Contrainte équivalente', 'Von Mises'],
    physics: 'La RDM avancée est utilisée pour dimensionner les poutres de structures métalliques, les arbres de transmission de machines tournantes et les châssis de véhicules soumis à des sollicitations combinées.',

    cours: {
      intro: 'La Résistance des Matériaux (RDM) permet de vérifier qu\'une pièce mécanique résiste aux sollicitations sans se rompre ni se déformer excessivement.<br/><br/>En BTS, on étudie quatre types de sollicitations : la <strong>traction/compression</strong> ($\\sigma = N/S$), la <strong>flexion</strong> ($\\sigma = M_f \\cdot y / I_{Gz}$), le <strong>cisaillement</strong> ($\\tau = T/S$) et la <strong>torsion</strong> ($\\tau_t = M_t \\cdot r / I_0$).<br/><br/>Le <strong>moment quadratique</strong> $I_{Gz}$ caractérise la résistance géométrique de la section à la flexion. Pour une section rectangulaire : $I_{Gz} = bh^3/12$. Pour une section circulaire pleine de diamètre $d$ : $I_{Gz} = \\pi d^4/64$. Le moment quadratique polaire $I_0$ intervient en torsion : $I_0 = \\pi d^4/32$ pour un cercle plein.<br/><br/>Lorsqu\'une pièce subit simultanément flexion et torsion (cas fréquent : arbre de transmission), on utilise le <strong>critère de Von Mises</strong> : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Le dimensionnement impose $\\sigma_{\\text{VM}} \\leq R_e / s$, avec $s$ le coefficient de sécurité.<br/><br/>Données matériaux courantes : acier S235 ($R_e = 235$ MPa), acier S355 ($R_e = 355$ MPa), aluminium 6061-T6 ($R_e = 275$ MPa), inox 304 ($R_e = 205$ MPa).',
      definitions: [
        { term: 'Contrainte normale de traction $\\sigma$', def: 'Contrainte due à un effort normal $N$ : $\\sigma = N / S$. En flexion, $\\sigma = M_f \\cdot y / I_{Gz}$, maximale aux fibres extrêmes ($y = y_{\\max}$).' },
        { term: 'Contrainte de cisaillement $\\tau$', def: 'Contrainte tangentielle due à l\'effort tranchant $T$ : $\\tau = T / S$ (formule simplifiée). Maximale à l\'axe neutre.' },
        { term: 'Contrainte de torsion $\\tau_t$', def: 'Contrainte tangentielle due au moment de torsion $M_t$ : $\\tau_t = M_t \\cdot r / I_0$, maximale à la périphérie ($r = r_{\\max}$).' },
        { term: 'Moment quadratique $I_{Gz}$', def: 'Caractérise la résistance géométrique à la flexion. Rectangle : $I_{Gz} = bh^3/12$. Cercle plein : $I_{Gz} = \\pi d^4/64$. Tube : $I_{Gz} = \\pi(D^4 - d^4)/64$. Unité : m⁴.' },
        { term: 'Contrainte de Von Mises $\\sigma_{\\text{VM}}$', def: 'Contrainte équivalente uniaxiale : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Provient du critère d\'énergie de distorsion. La limite en cisaillement pur est $\\tau_e = R_e / \\sqrt{3} \\approx 0{,}577\\,R_e$.' }
      ],
      method: {
        title: 'Dimensionner une pièce en sollicitations combinées',
        steps: [
          '<strong>Diagrammes de sollicitations</strong> : Identifier les sollicitations et dresser les diagrammes ($N$, $T$, $M_f$, $M_t$).<br/>Repérer la section la plus sollicitée (moment fléchissant maximal).<br/><strong>Exemple :</strong> Arbre de transmission soumis à $M_f = 200$ N·m et $M_t = 300$ N·m.',
          '<strong>Contrainte de flexion</strong> : Calculer $\\sigma_{\\max}$ en flexion. Pour une section circulaire pleine de diamètre $d$ :<br/>$I_{Gz} = \\pi d^4 / 64$, $y_{\\max} = d/2$, donc $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$.<br/><strong>Exemple :</strong> $d = 50$ mm → $\\sigma_{\\max} = 32 \\times 200 / (\\pi \\times 0{,}05^3) = 16{,}3$ MPa.',
          '<strong>Contrainte de torsion</strong> : Calculer $\\tau_{\\max}$ en torsion. Pour une section circulaire pleine :<br/>$I_0 = \\pi d^4 / 32$, $r_{\\max} = d/2$, donc $\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$.<br/><strong>Exemple :</strong> $\\tau_{\\max} = 16 \\times 300 / (\\pi \\times 0{,}05^3) = 12{,}2$ MPa.',
          '<strong>Critère de Von Mises</strong> : Calculer Von Mises : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma_{\\max}^2 + 3\\tau_{\\max}^2}$ et vérifier $\\sigma_{\\text{VM}} \\leq R_e / s$.<br/><strong>Exemple :</strong> $\\sigma_{\\text{VM}} = \\sqrt{16{,}3^2 + 3 \\times 12{,}2^2} \\approx 25{,}6$ MPa. Avec $R_e = 235$ MPa et $s = 2$ : $\\sigma_{\\text{adm}} = 117{,}5$ MPa. OK.'
        ]
      },
      example: {
        statement: 'Un arbre circulaire plein de diamètre $d = 40$ mm en acier S235 ($R_e = 235$ MPa, $s = 2$) subit $M_f = 150$ N·m et $M_t = 250$ N·m. Vérifier la résistance.',
        steps: [
          '$\\sigma_{\\max} = 32 M_f / (\\pi d^3) = 32 \\times 150 / (\\pi \\times 0{,}04^3) = 4800 / (2{,}011 \\times 10^{-4}) = 23{,}9$ MPa.',
          '$\\tau_{\\max} = 16 M_t / (\\pi d^3) = 16 \\times 250 / (\\pi \\times 0{,}04^3) = 4000 / (2{,}011 \\times 10^{-4}) = 19{,}9$ MPa.',
          '$\\sigma_{\\text{VM}} = \\sqrt{23{,}9^2 + 3 \\times 19{,}9^2} = \\sqrt{571 + 1188} = \\sqrt{1759} = 41{,}9$ MPa.',
          '$\\sigma_{\\text{adm}} = R_e / s = 235 / 2 = 117{,}5$ MPa. $41{,}9 < 117{,}5$ : l\'arbre résiste.'
        ],
        answer: '$\\sigma_{\\text{VM}} \\approx 41{,}9$ MPa $< \\sigma_{\\text{adm}} = 117{,}5$ MPa. L\'arbre est correctement dimensionné.'
      },
      formulas: [
        '$\\sigma = \\dfrac{N}{S}$ (traction/compression)',
        '$\\sigma = \\dfrac{M_f \\cdot y}{I_{Gz}}$ (flexion)',
        '$\\tau = \\dfrac{T}{S}$ (cisaillement simplifié)',
        '$\\tau_t = \\dfrac{M_t \\cdot r}{I_0}$ (torsion)',
        '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$ (Von Mises)',
        '$\\sigma_{\\text{VM}} \\leq \\dfrac{R_e}{s}$ (critère de dimensionnement)'
      ],
      diagram: {
        theme: 'si',
        kicker: 'Répartition des contraintes dans une section',
        title: 'Arbre circulaire (d = 40 mm) : flexion Mf = 150 N·m et torsion Mt = 250 N·m',
        description: 'À gauche, la contrainte normale σ(y) en flexion : nulle sur la fibre neutre, maximale (en valeur absolue, signe opposé) aux fibres extrêmes. À droite, la contrainte de cisaillement τ(r) en torsion : nulle au centre, maximale à la périphérie, toujours tangentielle. Les deux lois sont linéaires.',
        svg: `
          <svg viewBox="0 0 660 170" role="img" aria-labelledby="rdm-graph-title rdm-graph-desc">
            <title id="rdm-graph-title">Repartition des contraintes de flexion et de torsion dans une section circulaire</title>
            <desc id="rdm-graph-desc">A gauche, section circulaire en flexion avec la contrainte normale sigma qui varie lineairement de moins sigma max a la fibre inferieure a plus sigma max a la fibre superieure, en passant par zero sur la fibre neutre au centre. A droite, section circulaire en torsion avec la contrainte de cisaillement tau, tangentielle, nulle au centre et maximale a la peripherie, croissant lineairement avec le rayon.</desc>

            <defs>
              <marker id="rdm-arrow-avancee" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== BLOC 1 : FLEXION ===== -->
            <text class="annotation-label" x="160" y="18" text-anchor="middle">FLEXION — contrainte normale σ(y)</text>

            <!-- section circulaire -->
            <circle class="frame-line" cx="90" cy="85" r="45" fill="none"></circle>
            <line class="guide-line" x1="35" y1="85" x2="145" y2="85"></line>
            <text class="label-soft" x="150" y="89">σ = 0</text>
            <circle class="plot-point" cx="90" cy="40" r="4"></circle>
            <text class="annotation-label" x="90" y="28" text-anchor="middle">+y_max</text>
            <circle class="plot-point-alt" cx="90" cy="85" r="4"></circle>
            <circle class="plot-point" cx="90" cy="130" r="4"></circle>
            <text class="annotation-label" x="90" y="150" text-anchor="middle">−y_max</text>

            <!-- graphe sigma(y) -->
            <line class="axis" x1="235" y1="35" x2="235" y2="135"></line>
            <line class="axis" x1="190" y1="85" x2="300" y2="85"></line>
            <line class="curve-main" x1="205" y1="135" x2="265" y2="35"></line>
            <circle class="plot-point" cx="265" cy="35" r="4"></circle>
            <text class="annotation-label" x="270" y="32" text-anchor="start">+σmax ≈ 23,9 MPa</text>
            <circle class="plot-point" cx="205" cy="135" r="4"></circle>
            <text class="annotation-label" x="200" y="150" text-anchor="end">−σmax ≈ −23,9 MPa</text>
            <circle class="plot-point-alt" cx="235" cy="85" r="4"></circle>
            <text class="label-soft" x="241" y="90" text-anchor="start">0</text>
            <text class="axis-label" x="235" y="28" text-anchor="middle">y</text>
            <text class="axis-label" x="305" y="89" text-anchor="start">σ</text>

            <!-- séparateur -->
            <line class="grid-line" x1="330" y1="8" x2="330" y2="165"></line>

            <!-- ===== BLOC 2 : TORSION ===== -->
            <text class="annotation-label" x="500" y="18" text-anchor="middle">TORSION — cisaillement τ(r)</text>

            <!-- section circulaire -->
            <circle class="frame-line" cx="430" cy="85" r="45" fill="none"></circle>
            <line class="guide-line" x1="430" y1="85" x2="430" y2="40"></line>
            <circle class="plot-point-alt" cx="430" cy="85" r="4"></circle>
            <text class="label-soft" x="430" y="103" text-anchor="middle">r = 0 : τ = 0</text>
            <circle class="plot-point" cx="430" cy="40" r="4"></circle>
            <text class="annotation-label" x="430" y="28" text-anchor="middle">R (périphérie)</text>

            <!-- contraintes tangentielles croissant avec r -->
            <line class="curve-main" x1="430" y1="70" x2="439" y2="70" marker-end="url(#rdm-arrow-avancee)"></line>
            <line class="curve-main" x1="430" y1="55" x2="448" y2="55" marker-end="url(#rdm-arrow-avancee)"></line>
            <line class="curve-main" x1="430" y1="40" x2="457" y2="40" marker-end="url(#rdm-arrow-avancee)"></line>

            <!-- graphe tau(r) -->
            <line class="axis" x1="520" y1="125" x2="520" y2="35"></line>
            <line class="axis" x1="520" y1="125" x2="610" y2="125"></line>
            <line class="curve-main" x1="520" y1="125" x2="600" y2="40"></line>
            <circle class="plot-point-alt" cx="520" cy="125" r="4"></circle>
            <text class="label-soft" x="512" y="130" text-anchor="end">0</text>
            <circle class="plot-point" cx="600" cy="40" r="4"></circle>
            <text class="annotation-label" x="605" y="36" text-anchor="start">τmax ≈ 19,9 MPa</text>
            <text class="axis-label" x="520" y="28" text-anchor="middle">τ</text>
            <text class="axis-label" x="615" y="130" text-anchor="start">r</text>
            <text class="tick-label" x="600" y="138" text-anchor="middle">R</text>
          </svg>
        `,
        notes: [
          'En flexion, $\\sigma(y) = M_f \\cdot y / I_{Gz}$ est proportionnelle à $y$ : nulle sur la fibre neutre, maximale aux fibres extrêmes. Avec l\'exemple du cours ($d = 40$ mm, $M_f = 150$ N·m) : $\\sigma_{\\max} = 32\\,M_f/(\\pi d^3) \\approx 23{,}9$ MPa.',
          'En torsion, $\\tau(r) = M_t \\cdot r / I_0$ est proportionnelle à $r$ (distance au centre) : nulle sur l\'axe, maximale à la périphérie. Avec $M_t = 250$ N·m : $\\tau_{\\max} = 16\\,M_t/(\\pi d^3) \\approx 19{,}9$ MPa.',
          'La flexion crée des contraintes de signes opposés de part et d\'autre de la fibre neutre (traction/compression) ; la torsion ne change pas de signe : c\'est une contrainte tangentielle, la même dans toutes les directions autour du centre à un rayon donné.',
          'Ces deux répartitions se combinent dans le critère de Von Mises : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma_{\\max}^2 + 3\\tau_{\\max}^2} \\approx 41{,}9$ MPa pour cet arbre (cf. exemple du cours).'
        ],
        reading: 'Repère d\'abord le point où chaque contrainte s\'annule (fibre neutre pour σ, centre pour τ), puis suis la droite jusqu\'à la valeur maximale, aux fibres extrêmes ou à la périphérie.',
        caption: 'Répartition linéaire de la contrainte normale σ(y) en flexion et de la contrainte de cisaillement τ(r) en torsion, pour l\'arbre de l\'exemple du cours (d = 40 mm, Mf = 150 N·m, Mt = 250 N·m).'
      },
      recap: [
        'La flexion crée des contraintes normales $\\sigma$ maximales aux fibres extrêmes, nulles à l\'axe neutre.',
        'Le cisaillement crée des contraintes tangentielles $\\tau$ maximales à l\'axe neutre.',
        'La torsion crée des contraintes tangentielles $\\tau_t$ maximales à la périphérie de la section.',
        'Von Mises $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$ combine $\\sigma$ et $\\tau$ en une valeur comparable à $R_e$.',
        'Le coefficient de sécurité $s$ est imposé par les normes ($s = 2$ statique, $s = 3$ à $5$ en fatigue).'
      ],
      piege: 'Attention aux unités ! Les moments sont en N·m, les contraintes en Pa (ou MPa). $1$ MPa $= 10^6$ Pa $= 1$ N/mm². La confusion m / mm est la source d\'erreur la plus courante. Pensez aussi à la cohérence : si $d$ est en mm, utilisez $d^3$ en mm³ et les moments en N·mm.'
    },

    quiz: [
      {
        q: 'La contrainte de flexion maximale dans une poutre s\'écrit :',
        options: [
          '$\\sigma_{\\max} = M_f \\cdot y_{\\max} / I_{Gz}$',
          '$\\sigma_{\\max} = T / S$',
          '$\\sigma_{\\max} = M_t \\cdot r / I_0$',
          '$\\sigma_{\\max} = F / S$'
        ],
        answer: 0,
        correction: 'La contrainte de flexion est $\\sigma = M_f \\cdot y / I_{Gz}$. Elle est maximale quand $y = y_{\\max}$, c\'est-à-dire aux fibres les plus éloignées de l\'axe neutre. Pour un cercle plein : $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$.'
      },
      {
        q: 'La contrainte équivalente de Von Mises combine $\\sigma$ et $\\tau$ par :',
        options: [
          '$\\sigma_{\\text{VM}} = \\sigma + \\tau$',
          '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$',
          '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + \\tau^2}$',
          '$\\sigma_{\\text{VM}} = \\sigma \\times \\tau$'
        ],
        answer: 1,
        correction: 'Le critère de Von Mises est $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Le facteur 3 provient du critère d\'énergie de distorsion : le cisaillement est plus « nocif » que la traction pure à intensité égale. La limite élastique en cisaillement pur est $\\tau_e = R_e / \\sqrt{3} \\approx 0{,}577\\,R_e$.'
      },
      {
        q: 'Le moment quadratique d\'une section circulaire pleine de diamètre $d$ en flexion est :',
        options: [
          '$I_{Gz} = \\pi d^4 / 64$',
          '$I_{Gz} = \\pi d^4 / 32$',
          '$I_{Gz} = \\pi d^2 / 4$',
          '$I_{Gz} = bh^3 / 12$'
        ],
        answer: 0,
        correction: '$I_{Gz} = \\pi d^4 / 64$ pour la flexion d\'une section circulaire pleine. En torsion, le moment quadratique polaire est $I_0 = \\pi d^4 / 32 = 2\\,I_{Gz}$. La formule $bh^3/12$ s\'applique à une section rectangulaire.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { mat: 'acier S235', Re: 235 },
          { mat: 'acier S355', Re: 355 },
          { mat: 'aluminium 6061-T6', Re: 275 }
        ]);
        const sigma = rand(40, 150);
        const tau = rand(10, 70);
        const vm = parseFloat(Math.sqrt(sigma * sigma + 3 * tau * tau).toFixed(1));
        return {
          statement: `Une pièce en ${scenario.mat} ($R_e = ${scenario.Re}$ MPa) subit une contrainte de flexion $\\sigma = ${sigma}$ MPa et une contrainte de cisaillement $\\tau = ${tau}$ MPa. Calcule la contrainte de Von Mises $\\sigma_{\\text{VM}}$ (en MPa, arrondi à $0{,}1$).`,
          answer: vm,
          tolerance: 0.5,
          unit: 'MPa',
          hint: 'La contrainte de Von Mises se calcule par $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. N\'oublie pas le facteur 3 devant $\\tau^2$ !',
          solution: [
            '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$',
            `$= \\sqrt{${sigma}^2 + 3 \\times ${tau}^2}$`,
            `$= \\sqrt{${sigma * sigma} + ${3 * tau * tau}} = \\sqrt{${sigma * sigma + 3 * tau * tau}}$`,
            `$\\sigma_{\\text{VM}} \\approx ${String(vm).replace('.', '{,}')}$ MPa`,
            `Comparaison : $\\sigma_{\\text{adm}} = R_e / s = ${scenario.Re} / 2 = ${scenario.Re / 2}$ MPa (avec $s = 2$). ${vm <= scenario.Re / 2 ? 'La pièce résiste.' : 'La pièce ne résiste pas : il faut augmenter la section.'}`
          ]
        };
      }
    },

    probleme: {
      context: 'Un arbre de transmission en acier S235 ($R_e = 235$ MPa, coefficient de sécurité $s = 2$) de section circulaire pleine de diamètre $d = 50$ mm est soumis simultanément à un moment fléchissant $M_f = 400$ N·m et un moment de torsion $M_t = 600$ N·m.',
      tasks: [
        'Calculer la contrainte de flexion maximale $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$ (en MPa).',
        'Calculer la contrainte de torsion maximale $\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$ (en MPa).',
        'Calculer la contrainte de Von Mises $\\sigma_{\\text{VM}}$ et vérifier le dimensionnement ($\\sigma_{\\text{VM}} \\leq R_e / s$).'
      ],
      solutions: [
        '$\\sigma_{\\max} = 32 \\times 400 / (\\pi \\times 0{,}05^3) = 12\\,800 / (3{,}927 \\times 10^{-4}) \\approx 32{,}6$ MPa.',
        '$\\tau_{\\max} = 16 \\times 600 / (\\pi \\times 0{,}05^3) = 9\\,600 / (3{,}927 \\times 10^{-4}) \\approx 24{,}4$ MPa.',
        '$\\sigma_{\\text{VM}} = \\sqrt{32{,}6^2 + 3 \\times 24{,}4^2} = \\sqrt{1063 + 1786} = \\sqrt{2849} \\approx 53{,}4$ MPa. Admissible : $R_e / s = 235 / 2 = 117{,}5$ MPa. $53{,}4 < 117{,}5$ : l\'arbre résiste avec un coefficient de sécurité effectif de $235/53{,}4 \\approx 4{,}4$.'
      ],
      finalAnswer: '$\\sigma_{\\text{VM}} \\approx 53{,}4$ MPa $< 117{,}5$ MPa : l\'arbre est correctement dimensionné.'
    },

    evaluation: {
      title: 'Évaluation — RDM Avancée',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la contrainte de Von Mises pour $\\sigma = 100$ MPa et $\\tau = 40$ MPa (arrondi à l\'entier).',
          type: 'numeric',
          answer: 122,
          tolerance: 1,
          unit: 'MPa',
          points: 2,
          correction: '$\\sigma_{\\text{VM}} = \\sqrt{100^2 + 3 \\times 40^2} = \\sqrt{10000 + 4800} = \\sqrt{14800} \\approx 121{,}7$ MPa. (Arrondi : $122$ MPa.)'
        },
        {
          statement: 'En flexion simple, la contrainte normale est maximale :',
          type: 'multiple-choice',
          options: [
            'À l\'axe neutre',
            'Aux fibres extrêmes (les plus éloignées de l\'axe neutre)',
            'Au centre de la section',
            'Elle est uniforme dans toute la section'
          ],
          answer: 1,
          points: 2,
          correction: 'La contrainte $\\sigma = M_f \\cdot y / I_{Gz}$ est proportionnelle à $y$. Elle est maximale aux fibres extrêmes ($y = y_{\\max}$) et nulle à l\'axe neutre ($y = 0$).'
        },
        {
          statement: 'Un arbre circulaire plein de $d = 60$ mm subit $M_f = 500$ N·m. Calculer $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$ (en MPa, arrondi à l\'entier).',
          type: 'numeric',
          answer: 24,
          tolerance: 1,
          unit: 'MPa',
          points: 3,
          correction: '$\\sigma_{\\max} = 32 \\times 500 / (\\pi \\times 0{,}06^3) = 16000 / (6{,}786 \\times 10^{-4}) \\approx 23{,}6$ MPa $\\approx 24$ MPa.'
        },
        {
          statement: 'En acier S235 ($R_e = 235$ MPa), la limite élastique en cisaillement pur (Von Mises) est $\\tau_e = R_e / \\sqrt{3}$ (arrondi à l\'entier, en MPa) :',
          type: 'numeric',
          answer: 136,
          tolerance: 1,
          unit: 'MPa',
          points: 3,
          correction: '$\\tau_e = R_e / \\sqrt{3} = 235 / 1{,}732 \\approx 135{,}7$ MPa $\\approx 136$ MPa. C\'est la valeur pour laquelle $\\sigma_{\\text{VM}} = \\sqrt{0 + 3 \\times 136^2} = 235$ MPa.'
        }
      ]
    }
  });
