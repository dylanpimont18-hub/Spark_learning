/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-calcul-litteral.js
   Remise à niveau BTS — Calcul littéral & manipulation d'équations
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-calcul-litteral',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '🔧',
  title: 'Calcul Littéral & Isolation de l\'Inconnue',
  subtitle: 'Manipuler une formule technique pour exprimer n\'importe quelle grandeur',
  keywords: ['Calcul littéral', 'Isoler', 'Formule', 'Équation', 'BTS', 'Prérequis'],
  physics: 'Loi d\'Ohm, bilan thermique, débit, contrainte mécanique',

  cours: {
    intro: 'En BTS, chaque formule technique est un outil à double sens : elle peut calculer la puissance <strong>ou</strong> la température <strong>ou</strong> le débit, selon ce que l\'on cherche.<br/><br/>Par exemple, la loi d\'Ohm s\'écrit $U = R \\cdot I$. Si tu connais $U$ et $I$ mais pas $R$, tu dois <strong>isoler</strong> $R$ en divisant les deux membres par $I$ : $R = \\dfrac{U}{I}$. C\'est exactement ce que fait le calcul littéral : manipuler des lettres comme des nombres, sans perdre l\'égalité.<br/><br/><strong>Règle d\'or :</strong> toute opération effectuée sur un membre de l\'égalité doit être effectuée sur l\'autre. L\'égalité est une balance — tu ne peux pas enlever du poids d\'un seul côté.',

    definitions: [
      {
        term: 'Équation littérale',
        def: 'Relation entre plusieurs grandeurs physiques exprimées par des lettres. Exemple : $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot \\Delta T$ relie la puissance thermique $\\dot{Q}$ au débit massique $\\dot{m}$, à la capacité calorifique $c_p$ et à l\'écart de température $\\Delta T$.'
      },
      {
        term: 'Isoler une grandeur',
        def: 'Opérer sur les deux membres de l\'égalité (diviser, multiplier, additionner, soustraire) jusqu\'à ce que la grandeur cherchée soit seule d\'un côté. Exemple : depuis $P = F \\cdot v$, isoler $F$ donne $F = \\dfrac{P}{v}$.'
      },
      {
        term: 'Membre de gauche / membre de droite',
        def: 'Les deux parties d\'une égalité séparées par le signe $=$. Pour isoler une grandeur, on applique des opérations identiques aux deux membres afin de préserver l\'égalité.'
      },
      {
        term: 'Facteur commun',
        def: 'Grandeur qui multiplie plusieurs termes et peut être mise en évidence. Exemple : $P = R \\cdot I^2$ — si l\'on cherche $R$, on divise par $I^2$ : $R = \\dfrac{P}{I^2}$.'
      }
    ],

    method: {
      title: 'Méthode pour isoler une grandeur',
      steps: [
        '<strong>Repérer la grandeur à isoler</strong> et identifier comment elle apparaît dans la formule (est-elle multipliée ? divisée ? soustraite ? dans une racine ?).<br/>Exemple : dans $\\Delta P = \\lambda \\cdot \\dfrac{L}{D} \\cdot \\dfrac{\\rho v^2}{2}$, pour isoler $D$, il est au dénominateur.',
        '<strong>Effectuer l\'opération inverse</strong> pour déplacer chaque terme gênant de l\'autre côté.<br/>Si la grandeur est <em>multipliée</em> par $k$ → diviser les deux membres par $k$.<br/>Si la grandeur est <em>au dénominateur</em> → multiplier les deux membres par la grandeur, puis diviser par le reste.<br/>Si la grandeur est <em>sous une racine</em> → élever les deux membres au carré.',
        '<strong>Vérifier l\'homogénéité</strong> du résultat : les unités du membre de gauche et du membre de droite doivent être identiques.<br/>Exemple : $R = \\dfrac{U}{I}$ → $\\dfrac{\\mathrm{V}}{\\mathrm{A}} = \\Omega$ ✓'
      ]
    },

    example: {
      statement: 'Le bilan énergétique d\'un échangeur de chaleur est $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_{e} - T_{s})$. Exprimer la température de sortie $T_s$ en fonction de $\\dot{Q}$, $\\dot{m}$, $c_p$ et $T_e$.',
      steps: [
        'On part de $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_e - T_s)$.',
        'On divise les deux membres par $\\dot{m} \\cdot c_p$ (non nul) : $\\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p} = T_e - T_s$.',
        'On isole $T_s$ en soustrayant $T_e$ puis en changeant les signes : $T_s = T_e - \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$.'
      ],
      answer: '$T_s = T_e - \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$. Plus la puissance échangée est grande, plus la température de sortie est basse.'
    },

    formulas: [
      'Si $A = B \\cdot C$ → $B = \\dfrac{A}{C}$ et $C = \\dfrac{A}{B}$',
      'Si $A = \\dfrac{B}{C}$ → $B = A \\cdot C$ et $C = \\dfrac{B}{A}$',
      'Si $A = B + C$ → $B = A - C$ et $C = A - B$',
      'Si $A = \\sqrt{B}$ → $B = A^2$ (avec $A \\geq 0$)',
      'Si $A = B^2$ → $B = \\sqrt{A}$ (avec $B \\geq 0$ en physique)'
    ],

    diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;font-size:0.9rem"><tr style="background:var(--bg-card)"><th style="border:1px solid var(--border);padding:8px">Formule de départ</th><th style="border:1px solid var(--border);padding:8px">Grandeur cherchée</th><th style="border:1px solid var(--border);padding:8px">Résultat</th><th style="border:1px solid var(--border);padding:8px">Domaine</th></tr><tr><td style="border:1px solid var(--border);padding:7px">$U = R \\cdot I$</td><td style="border:1px solid var(--border);padding:7px">$R$</td><td style="border:1px solid var(--border);padding:7px">$R = U/I$</td><td style="border:1px solid var(--border);padding:7px">Électrotechnique</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$P = F \\cdot v$</td><td style="border:1px solid var(--border);padding:7px">$F$</td><td style="border:1px solid var(--border);padding:7px">$F = P/v$</td><td style="border:1px solid var(--border);padding:7px">Mécanique</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\dot{Q} = \\dot{m} c_p \\Delta T$</td><td style="border:1px solid var(--border);padding:7px">$\\Delta T$</td><td style="border:1px solid var(--border);padding:7px">$\\Delta T = \\dot{Q}/(\\dot{m} c_p)$</td><td style="border:1px solid var(--border);padding:7px">Thermique / FED</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\sigma = F/A$</td><td style="border:1px solid var(--border);padding:7px">$F$</td><td style="border:1px solid var(--border);padding:7px">$F = \\sigma \\cdot A$</td><td style="border:1px solid var(--border);padding:7px">RDM / Mécanique</td></tr><tr><td style="border:1px solid var(--border);padding:7px">$\\dot{V} = v \\cdot A$</td><td style="border:1px solid var(--border);padding:7px">$A$</td><td style="border:1px solid var(--border);padding:7px">$A = \\dot{V}/v$</td><td style="border:1px solid var(--border);padding:7px">Hydraulique / FED</td></tr></table>',

    recap: [
      'Isoler une grandeur = appliquer l\'opération inverse de la même façon aux deux membres.',
      'Multiplier → diviser ; additionner → soustraire ; carré → racine carrée.',
      'Toujours vérifier que le résultat est dimensionnellement cohérent (les unités s\'accordent).',
      'En BTS, les formules se manipulent dans tous les sens : entraîne-toi à exprimer chaque grandeur d\'une formule en fonction de toutes les autres.'
    ],

    piege: 'Attention au signe lors d\'un passage de membre : $T_s = T_e - \\dot{Q}/(\\dot{m} c_p)$ et non $T_e + \\dot{Q}/(\\dot{m} c_p)$. Une erreur de signe donne une température de sortie supérieure à l\'entrée — physiquement absurde pour un refroidissement !'
  },

  quiz: [
    {
      q: 'La loi d\'Ohm s\'écrit $U = R \\cdot I$. En isolant $R$, on obtient :',
      options: ['$R = U - I$', '$R = \\dfrac{U}{I}$', '$R = U \\cdot I$', '$R = \\dfrac{I}{U}$'],
      answer: 1,
      correction: 'On divise les deux membres par $I$ : $\\dfrac{U}{I} = \\dfrac{R \\cdot I}{I} = R$. Donc $R = U/I$. Unités : V/A = Ω ✓'
    },
    {
      q: 'La puissance d\'une pompe est $P = \\dot{V} \\cdot \\Delta P$ (débit volumique × pression différentielle). Pour trouver $\\dot{V}$, on écrit :',
      options: ['$\\dot{V} = P - \\Delta P$', '$\\dot{V} = P \\cdot \\Delta P$', '$\\dot{V} = \\dfrac{P}{\\Delta P}$', '$\\dot{V} = \\dfrac{\\Delta P}{P}$'],
      answer: 2,
      correction: 'On divise les deux membres par $\\Delta P$ : $\\dot{V} = P / \\Delta P$. Unités : W/Pa = (kg·m²·s⁻³)/(kg·m⁻¹·s⁻²) = m³/s ✓'
    },
    {
      q: 'La contrainte normale est $\\sigma = F/A$ (force/section). Pour trouver la section $A$ supportant une force $F$ sans dépasser $\\sigma_{max}$, on isole $A$ :',
      options: ['$A = \\sigma \\cdot F$', '$A = F - \\sigma$', '$A = \\dfrac{F}{\\sigma}$', '$A = \\dfrac{\\sigma}{F}$'],
      answer: 2,
      correction: '$A$ est au dénominateur. On multiplie d\'abord les deux membres par $A$ : $\\sigma \\cdot A = F$. Puis on divise par $\\sigma$ : $A = F/\\sigma$. Unités : N/(N/m²) = m² ✓'
    },
    {
      q: 'Le bilan thermique d\'un radiateur donne $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_e - T_s)$. En isolant $T_e$ :',
      options: [
        '$T_e = T_s + \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$',
        '$T_e = T_s - \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$',
        '$T_e = \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$',
        '$T_e = T_s \\cdot \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$'
      ],
      answer: 0,
      correction: 'On divise par $\\dot{m} c_p$ : $\\dot{Q}/(\\dot{m} c_p) = T_e - T_s$. On ajoute $T_s$ aux deux membres : $T_e = T_s + \\dot{Q}/(\\dot{m} c_p)$. La température d\'entrée est supérieure à la sortie pour un circuit de chauffage.'
    },
    {
      q: 'La section d\'une conduite circulaire est $A = \\pi d^2 / 4$. En isolant le diamètre $d$ :',
      options: [
        '$d = \\sqrt{\\dfrac{4A}{\\pi}}$',
        '$d = \\dfrac{4A}{\\pi}$',
        '$d = \\sqrt{\\dfrac{A}{4\\pi}}$',
        '$d = \\dfrac{A}{\\pi}$'
      ],
      answer: 0,
      correction: 'On multiplie par 4 : $4A = \\pi d^2$. On divise par $\\pi$ : $d^2 = 4A/\\pi$. On prend la racine carrée (positive car $d > 0$) : $d = \\sqrt{4A/\\pi} = 2\\sqrt{A/\\pi}$.'
    },
    {
      q: 'La résistance thermique d\'une paroi est $R_{th} = e/(\\lambda \\cdot A)$ où $e$ est l\'épaisseur, $\\lambda$ la conductivité, $A$ la surface. Pour isoler $\\lambda$ :',
      options: ['$\\lambda = e \\cdot A \\cdot R_{th}$', '$\\lambda = \\dfrac{e}{R_{th} \\cdot A}$', '$\\lambda = \\dfrac{R_{th} \\cdot A}{e}$', '$\\lambda = \\dfrac{e - A}{R_{th}}$'],
      answer: 1,
      correction: '$\\lambda$ est au dénominateur avec $A$. On multiplie par $\\lambda$ : $R_{th} \\cdot \\lambda \\cdot A = e$. On divise par $R_{th} \\cdot A$ : $\\lambda = e/(R_{th} \\cdot A)$.'
    },
    {
      q: 'La vitesse dans une conduite est $v = \\dot{V}/A$. Si le débit $\\dot{V} = 0{,}05$ m³/s et $A = 0{,}02$ m², la vitesse vaut :',
      options: ['$v = 0{,}001$ m/s', '$v = 2{,}5$ m/s', '$v = 0{,}4$ m/s', '$v = 25$ m/s'],
      answer: 1,
      correction: '$v = \\dot{V}/A = 0{,}05/0{,}02 = 2{,}5$ m/s. C\'est une vitesse typique dans un réseau hydraulique industriel (1 à 3 m/s).'
    },
    {
      q: 'La force de traction d\'un convoyeur est $F = P/v$ où $P$ est la puissance moteur et $v$ la vitesse de la bande. Si $P = 7{,}5$ kW et $v = 1{,}5$ m/s, alors $F$ vaut :',
      options: ['$F = 5$ N', '$F = 11{,}25$ kN', '$F = 5$ kN', '$F = 50$ N'],
      answer: 2,
      correction: '$F = P/v = 7500/1{,}5 = 5000$ N $= 5$ kN. Attention aux unités : $P$ doit être en W (pas kW) pour obtenir $F$ en N.'
    },
    {
      q: 'La quantité de chaleur stockée est $Q = m \\cdot c \\cdot \\Delta T$. Un ballon d\'eau chaude de $m = 200$ kg avec $c = 4180$ J/(kg·K) monte de $\\Delta T = 40$ K. Quelle est l\'énergie stockée (en MJ) ?',
      options: ['$Q = 8{,}36$ MJ', '$Q = 33{,}44$ MJ', '$Q = 0{,}836$ MJ', '$Q = 836$ kJ'],
      answer: 3,
      correction: '$Q = 200 \\times 4180 \\times 40 = 33\\,440\\,000$ J $= 33{,}44$ MJ $= 33\\,440$ kJ. La réponse D (836 kJ) est fausse car $200 \\times 4180 \\times 40 \\neq 836\\,000$. La bonne réponse est A : 33,44 MJ. Attention à ne pas confondre les puissances de 10.',
    },
    {
      q: 'La tension aux bornes d\'un condensateur en régime permanent est $U_C = U_0 \\cdot (1 - e^{-t/RC})$. Pour isoler $t$ :',
      options: [
        '$t = -RC \\cdot \\ln\\left(1 - \\dfrac{U_C}{U_0}\\right)$',
        '$t = RC \\cdot \\ln\\left(1 - \\dfrac{U_C}{U_0}\\right)$',
        '$t = -RC \\cdot \\left(1 - \\dfrac{U_C}{U_0}\\right)$',
        '$t = \\dfrac{U_C}{U_0 \\cdot RC}$'
      ],
      answer: 0,
      correction: 'On divise par $U_0$ : $U_C/U_0 = 1 - e^{-t/RC}$. On soustrait 1 : $U_C/U_0 - 1 = -e^{-t/RC}$. Donc $e^{-t/RC} = 1 - U_C/U_0$. On prend $\\ln$ : $-t/RC = \\ln(1 - U_C/U_0)$. Donc $t = -RC \\cdot \\ln(1 - U_C/U_0)$.'
    },
    {
      q: 'La loi de Poiseuille pour une conduite donne $\\dot{V} = \\dfrac{\\pi D^4 \\Delta P}{128 \\mu L}$. En isolant $D$ :',
      options: [
        '$D = \\left(\\dfrac{128 \\mu L \\dot{V}}{\\pi \\Delta P}\\right)^{1/4}$',
        '$D = \\dfrac{128 \\mu L \\dot{V}}{\\pi \\Delta P}$',
        '$D = \\sqrt{\\dfrac{128 \\mu L \\dot{V}}{\\pi \\Delta P}}$',
        '$D = \\left(\\dfrac{\\pi \\Delta P}{128 \\mu L \\dot{V}}\\right)^{1/4}$'
      ],
      answer: 0,
      correction: 'On multiplie par $128 \\mu L$ et divise par $\\pi \\Delta P$ : $D^4 = \\dfrac{128 \\mu L \\dot{V}}{\\pi \\Delta P}$. On élève à la puissance $1/4$ : $D = \\left(\\dfrac{128 \\mu L \\dot{V}}{\\pi \\Delta P}\\right)^{1/4}$.'
    },
    {
      q: 'Un étudiant isole $I$ depuis $P = U \\cdot I \\cdot \\cos\\varphi$ et écrit $I = P \\cdot U \\cdot \\cos\\varphi$. Quelle erreur a-t-il commise ?',
      options: [
        'Il a multiplié au lieu de diviser : $I = \\dfrac{P}{U \\cdot \\cos\\varphi}$',
        'Il a oublié $\\cos\\varphi$ : $I = \\dfrac{P}{U}$',
        'Il n\'a pas fait d\'erreur',
        'Il faut écrire $I = P + U \\cdot \\cos\\varphi$'
      ],
      answer: 0,
      correction: 'Pour isoler $I$, on divise les deux membres par $U \\cdot \\cos\\varphi$ (pas on multiplie). La formule correcte est $I = P/(U \\cdot \\cos\\varphi)$. C\'est la formule du courant efficace en régime alternatif monophasé.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const scenarios = [
        {
          context: pick(['circuit résistif (Électrotechnique)', 'circuit de chauffage électrique']),
          statement: () => {
            const U = pick([12, 24, 48, 120, 230]);
            const I = pick([2, 4, 5, 10]);
            return { q: `La tension aux bornes d'une résistance est $U = ${U}$ V et le courant qui la traverse est $I = ${I}$ A. Calcule la résistance $R$ (en Ω) à l'aide de $U = R \\cdot I$.`, ans: U / I, unit: 'Ω', hint: `Isole $R$ : $R = U / I = ${U} / ${I}$.`, sol: [`$R = \\dfrac{U}{I} = \\dfrac{${U}}{${I}} = ${U/I}$ Ω`] };
          }
        },
        {
          context: 'mécanique (Maintenance / Production)',
          statement: () => {
            const P = pick([1500, 3000, 5500, 7500, 11000]);
            const v = pick([1, 1.5, 2, 2.5, 3]);
            const F = Math.round(P / v);
            return { q: `Un moteur de convoyeur développe une puissance $P = ${P}$ W pour une vitesse de déplacement $v = ${v}$ m/s. Calcule la force de traction $F$ (en N) à l'aide de $P = F \\cdot v$.`, ans: F, unit: 'N', hint: `Isole $F$ : $F = P / v = ${P} / ${v}$.`, sol: [`$F = \\dfrac{P}{v} = \\dfrac{${P}}{${v}} = ${F}$ N`] };
          }
        },
        {
          context: 'hydraulique (FED / BTP)',
          statement: () => {
            const Vdot = pick([0.02, 0.05, 0.08, 0.1]);
            const A = pick([0.01, 0.02, 0.04, 0.05]);
            const v = Math.round((Vdot / A) * 100) / 100;
            return { q: `Un réseau hydraulique a un débit volumique $\\dot{V} = ${Vdot}$ m³/s et une section de conduite $A = ${A}$ m². Calcule la vitesse d'écoulement $v$ (en m/s) à l'aide de $\\dot{V} = v \\cdot A$.`, ans: v, unit: 'm/s', hint: `Isole $v$ : $v = \\dot{V} / A = ${Vdot} / ${A}$.`, sol: [`$v = \\dfrac{\\dot{V}}{A} = \\dfrac{${Vdot}}{${A}} = ${v}$ m/s`] };
          }
        }
      ];
      const s = pick(scenarios).statement();
      return {
        statement: s.q,
        answer: s.ans,
        tolerance: 0.05,
        unit: s.unit,
        hint: s.hint,
        solution: s.sol
      };
    }
  },

  probleme: {
    context: 'Un chauffe-eau solaire alimente un ballon de stockage. Le collecteur solar transfère une puissance $\\dot{Q} = 3{,}5$ kW à un fluide caloporteur (eau glycolée) de débit massique $\\dot{m} = 0{,}12$ kg/s et de capacité calorifique $c_p = 3800$ J/(kg·K). Le fluide entre dans le collecteur à $T_e = 25$ °C.',
    schema: 'Schéma : collecteur solaire → pompe de circulation → ballon de stockage. Le fluide circule en boucle fermée. $\\dot{Q}$ est absorbé par le collecteur et cédé au ballon via un échangeur.',
    tasks: [
      'Exprimer $T_s$ (température de sortie du collecteur) en isolant $T_s$ depuis $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_s - T_e)$.',
      'Calculer numériquement $T_s$ avec les données de l\'énoncé.',
      'Un technicien propose de doubler le débit ($\\dot{m} = 0{,}24$ kg/s) tout en maintenant $\\dot{Q}$ constant. Calculer la nouvelle température de sortie et conclure sur l\'intérêt de cette modification.'
    ],
    solutions: [
      '$\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_s - T_e)$ → on divise par $\\dot{m} c_p$ : $T_s - T_e = \\dot{Q}/(\\dot{m} c_p)$ → $T_s = T_e + \\dot{Q}/(\\dot{m} c_p)$.',
      '$T_s = 25 + \\dfrac{3500}{0{,}12 \\times 3800} = 25 + \\dfrac{3500}{456} = 25 + 7{,}68 \\approx 32{,}7$ °C.',
      'Avec $\\dot{m} = 0{,}24$ kg/s : $T_s = 25 + \\dfrac{3500}{0{,}24 \\times 3800} = 25 + 3{,}84 \\approx 28{,}8$ °C. Le fluide sort moins chaud — moins efficace pour charger le ballon. Doubler le débit sans augmenter la puissance collectée n\'est pas avantageux ici.'
    ],
    finalAnswer: '$T_s \\approx 32{,}7$ °C (débit nominal) et $28{,}8$ °C (débit doublé). Réduire le débit améliore la montée en température.'
  },

  evaluation: {
    title: 'Évaluation — Calcul littéral & isolation',
    duration: '30 min',
    questions: [
      {
        statement: 'Isole $\\Delta T$ depuis $\\dot{Q} = \\dot{m} \\cdot c_p \\cdot \\Delta T$. Avec $\\dot{Q} = 6000$ W, $\\dot{m} = 0{,}2$ kg/s, $c_p = 4180$ J/(kg·K), calculer $\\Delta T$ (en K, arrondi à 0,1 K).',
        type: 'numeric',
        answer: 7.2,
        tolerance: 0.1,
        unit: 'K',
        points: 3,
        correction: '$\\Delta T = \\dot{Q}/(\\dot{m} c_p) = 6000/(0{,}2 \\times 4180) = 6000/836 \\approx 7{,}18 \\approx 7{,}2$ K.'
      },
      {
        statement: 'La section d\'une conduite est $A = \\pi d^2/4$. Pour $d = 0{,}05$ m, calculer $A$ en m² (4 chiffres significatifs).',
        type: 'numeric',
        answer: 0.001963,
        tolerance: 0.000005,
        unit: 'm²',
        points: 2,
        correction: '$A = \\pi \\times 0{,}05^2 / 4 = \\pi \\times 0{,}0025 / 4 \\approx 0{,}001963$ m².'
      },
      {
        statement: 'Depuis $P = R \\cdot I^2$, isoler $R$, puis calculer $R$ pour $P = 500$ W et $I = 5$ A.',
        type: 'multiple-choice',
        options: ['$R = P \\cdot I^2 = 12500\\,\\Omega$', '$R = P / I^2 = 20\\,\\Omega$', '$R = P / I = 100\\,\\Omega$', '$R = I^2 / P = 0{,}05\\,\\Omega$'],
        answer: 1,
        points: 2,
        correction: '$R = P/I^2 = 500/25 = 20\\,\\Omega$. C\'est la puissance dissipée par effet Joule dans une résistance.'
      },
      {
        statement: 'La contrainte normale $\\sigma = F/A$. Un câble en acier ($\\sigma_{max} = 200$ MPa) doit supporter $F = 80$ kN. Calculer la section minimale $A_{min}$ en mm².',
        type: 'numeric',
        answer: 400,
        tolerance: 1,
        unit: 'mm²',
        points: 3,
        correction: '$A = F/\\sigma = 80\\,000\\,\\text{N} / (200 \\times 10^6\\,\\text{Pa}) = 4 \\times 10^{-4}\\,\\text{m}^2 = 400\\,\\text{mm}^2$.'
      }
    ]
  }
});
