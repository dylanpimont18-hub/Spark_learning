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
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Sollicitation</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Formule de contrainte</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Section circulaire pleine ($d$)</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Localisation du max</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Traction / Compression</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N / S$</td><td style="border:1px solid var(--border);padding:8px">$S = \\pi d^2 / 4$</td><td style="border:1px solid var(--border);padding:8px">Uniforme</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Flexion</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = M_f \\cdot y / I_{Gz}$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$</td><td style="border:1px solid var(--border);padding:8px">Fibres extrêmes</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cisaillement</td><td style="border:1px solid var(--border);padding:8px">$\\tau = T / S$</td><td style="border:1px solid var(--border);padding:8px">$S = \\pi d^2 / 4$</td><td style="border:1px solid var(--border);padding:8px">Axe neutre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Torsion</td><td style="border:1px solid var(--border);padding:8px">$\\tau_t = M_t \\cdot r / I_0$</td><td style="border:1px solid var(--border);padding:8px">$\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$</td><td style="border:1px solid var(--border);padding:8px">Périphérie</td></tr></table>',
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
            `$\\sigma_{\\text{VM}} \\approx ${String(vm).replace('.', '{,')}$ MPa`,
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
          answer: 119,
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
