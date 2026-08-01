/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-calcul-litteral.js
   Remise à niveau BTS — Calcul littéral & manipulation d'équations
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-calcul-litteral',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
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

    diagram: {
      theme: 'maths',
      kicker: 'Calcul littéral — la balance des deux côtés',
      title: 'Isoler une grandeur, c\'est garder la balance en équilibre',
      description: 'Reprenons l\'exemple du cours : le bilan d\'un échangeur de chaleur <strong>$\\dot{Q} = \\dot{m} \\cdot c_p \\cdot (T_e - T_s)$</strong>. Pour isoler $T_s$, on applique la <strong>même opération aux deux plateaux</strong> de la balance, étape par étape.',
      svg: `
        <svg viewBox="0 0 640 280" role="img" aria-labelledby="bts-calcullitteral-balance-title bts-calcullitteral-balance-desc">
          <title id="bts-calcullitteral-balance-title">Isoler Ts par la métaphore de la balance</title>
          <desc id="bts-calcullitteral-balance-desc">Trois balances a deux plateaux montrent, etape par etape, comment isoler Ts dans l'equation du bilan d'un echangeur de chaleur : la balance de depart, puis apres division des deux cotes par m fois cp, puis apres avoir retire Te et change les signes des deux cotes, ce qui isole Ts seul sur son plateau.</desc>

          <text class="axis-label" x="100" y="30" text-anchor="middle">Départ</text>
          <line class="frame-line" x1="45" y1="120" x2="155" y2="120"></line>
          <polygon class="plot-point" points="84,158 116,158 100,120"></polygon>
          <circle class="plot-point-alt" cx="100" cy="120" r="4"></circle>
          <line class="grid-line" x1="45" y1="120" x2="45" y2="170"></line>
          <line class="grid-line" x1="155" y1="120" x2="155" y2="170"></line>
          <line class="frame-line" x1="23" y1="170" x2="67" y2="170"></line>
          <line class="frame-line" x1="133" y1="170" x2="177" y2="170"></line>
          <text class="annotation-label" x="45" y="165" text-anchor="middle">Q</text>
          <text class="label-soft" x="155" y="165" text-anchor="middle">m·cp·(Te−Ts)</text>
          <text class="label-soft" x="100" y="108" text-anchor="middle">=</text>

          <line class="graph-line" x1="183" y1="120" x2="233" y2="120"></line>
          <polygon class="plot-point" points="227,113 239,120 227,127"></polygon>
          <text class="annotation-label" x="208" y="102" text-anchor="middle">÷ (m·cp)</text>
          <text class="label-soft" x="208" y="145" text-anchor="middle">(les deux côtés)</text>

          <text class="axis-label" x="320" y="30" text-anchor="middle">Après division par m·cp</text>
          <line class="frame-line" x1="265" y1="120" x2="375" y2="120"></line>
          <polygon class="plot-point" points="304,158 336,158 320,120"></polygon>
          <circle class="plot-point-alt" cx="320" cy="120" r="4"></circle>
          <line class="grid-line" x1="265" y1="120" x2="265" y2="170"></line>
          <line class="grid-line" x1="375" y1="120" x2="375" y2="170"></line>
          <line class="frame-line" x1="243" y1="170" x2="287" y2="170"></line>
          <line class="frame-line" x1="353" y1="170" x2="397" y2="170"></line>
          <text class="label-soft" x="265" y="165" text-anchor="middle">Q / (m·cp)</text>
          <text class="annotation-label" x="375" y="165" text-anchor="middle">Te − Ts</text>
          <text class="label-soft" x="320" y="108" text-anchor="middle">=</text>

          <line class="graph-line" x1="403" y1="120" x2="453" y2="120"></line>
          <polygon class="plot-point" points="447,113 459,120 447,127"></polygon>
          <text class="annotation-label" x="428" y="102" text-anchor="middle">− Te puis ×(−1)</text>
          <text class="label-soft" x="428" y="145" text-anchor="middle">(les deux côtés)</text>

          <text class="axis-label" x="540" y="30" text-anchor="middle">Ts isolé</text>
          <line class="frame-line" x1="485" y1="120" x2="595" y2="120"></line>
          <polygon class="plot-point" points="524,158 556,158 540,120"></polygon>
          <circle class="plot-point-alt" cx="540" cy="120" r="4"></circle>
          <line class="grid-line" x1="485" y1="120" x2="485" y2="170"></line>
          <line class="grid-line" x1="595" y1="120" x2="595" y2="170"></line>
          <line class="frame-line" x1="463" y1="170" x2="507" y2="170"></line>
          <line class="frame-line" x1="573" y1="170" x2="617" y2="170"></line>
          <text class="label-soft" x="485" y="165" text-anchor="middle">Te − Q/(m·cp)</text>
          <text class="annotation-label" x="595" y="165" text-anchor="middle">Ts</text>
          <text class="label-soft" x="540" y="108" text-anchor="middle">=</text>

          <text class="annotation-label" x="320" y="250" text-anchor="middle">Ts = Te − Q / (m·cp)</text>
        </svg>
      `,
      notes: [
        '<strong>Étape 1 — Départ :</strong> la balance est en équilibre : $\\dot{Q}$ sur un plateau, $\\dot{m} \\cdot c_p \\cdot (T_e - T_s)$ sur l\'autre.',
        '<strong>Étape 2 — Diviser les deux côtés par $\\dot{m} \\cdot c_p$ :</strong> la balance reste équilibrée, il reste $\\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p} = T_e - T_s$.',
        '<strong>Étape 3 — Retirer $T_e$ des deux côtés puis changer les signes :</strong> $T_s$ se retrouve seul sur son plateau : $T_s = T_e - \\dfrac{\\dot{Q}}{\\dot{m} \\cdot c_p}$.'
      ],
      reading: 'Le principe est toujours le même : <strong>ce qu\'on fait à un plateau, on le fait à l\'autre</strong> — sinon la balance penche et l\'égalité n\'est plus vraie. (Sur le schéma, $\\dot{Q}$ et $\\dot{m}$ sont notés simplement Q et m par souci de lisibilité.)',
      caption: 'Résolution en 3 étapes de l\'équation du cours (bilan de l\'échangeur de chaleur), illustrée par la métaphore de la balance à deux plateaux.'
    },

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
      figure: {
        svg: `
          <svg viewBox="0 0 300 160" role="img" aria-labelledby="qcalc-section-title qcalc-section-desc">
            <title id="qcalc-section-title">Section circulaire d'une conduite</title>
            <desc id="qcalc-section-desc">La coupe circulaire d'une conduite, dont le diametre interieur d est trace horizontalement. L'aire hachuree correspond a la section de passage du fluide, egale a pi d au carre divise par quatre.</desc>
            <circle cx="110" cy="80" r="58" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 45%, var(--border))" stroke-width="3"></circle>
            <line class="graph-line" x1="52" y1="80" x2="168" y2="80" stroke="var(--secondary)"></line>
            <polygon points="52,80 66,74 66,86" fill="var(--secondary)"></polygon>
            <polygon points="168,80 154,74 154,86" fill="var(--secondary)"></polygon>
            <circle class="plot-point" cx="110" cy="80" r="4"></circle>
            <text class="annotation-label" x="110" y="72" text-anchor="middle" fill="var(--secondary)">d</text>
            <text class="tick-label" x="110" y="150" text-anchor="middle">section de passage</text>
            <text class="axis-label" x="192" y="70">A = π d² / 4</text>
            <text class="tick-label" x="192" y="92">on cherche d</text>
            <text class="tick-label" x="192" y="108">→ il faut défaire</text>
            <text class="tick-label" x="192" y="124">le carré</text>
          </svg>
        `,
        caption: 'Le diamètre est au carré : l\'isoler demandera une racine carrée, jamais une simple division.'
      },
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
      answer: 1,
      correction: '$Q = 200 \\times 4180 \\times 40 = 33\\,440\\,000$ J $= 33{,}44$ MJ $= 33\\,440$ kJ. La bonne réponse est B : 33,44 MJ. Attention à ne pas confondre les puissances de 10 (33,44 MJ ≠ 836 kJ).',
    },
    {
      q: 'La puissance dissipée par effet Joule dans une résistance est $P = \\dfrac{U^2}{R}$. Pour isoler la tension $U$ (positive) :',
      options: [
        '$U = \\sqrt{P \\cdot R}$',
        '$U = P \\cdot R$',
        '$U = \\sqrt{P/R}$',
        '$U = \\dfrac{P}{R}$'
      ],
      answer: 0,
      correction: 'On multiplie les deux membres par $R$ : $U^2 = P \\cdot R$. On prend la racine carrée (U ≥ 0) : $U = \\sqrt{P \\cdot R}$. Utile pour dimensionner la tension nécessaire à une résistance chauffante donnée.'
    },
    {
      q: 'Pour une rampe d\'accès PMR, le théorème de Pythagore donne $L^2 = h^2 + d^2$, où $L$ est la longueur de la rampe, $h$ la hauteur à franchir et $d$ la projection horizontale. Pour isoler $h$ :',
      figure: {
        svg: `
          <svg viewBox="0 0 340 170" role="img" aria-labelledby="qcalc-rampe-title qcalc-rampe-desc">
            <title id="qcalc-rampe-title">Rampe d'acces PMR en triangle rectangle</title>
            <desc id="qcalc-rampe-desc">Une rampe d'acces forme un triangle rectangle : la longueur L de la rampe est l'hypotenuse, la hauteur h a franchir est le cote vertical et la projection horizontale d est la base. Un fauteuil roulant symbolise l'usage de la rampe.</desc>
            <line class="axis" x1="30" y1="135" x2="310" y2="135"></line>
            <polygon points="60,135 260,135 260,60" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="curve-main" x1="60" y1="135" x2="260" y2="60"></line>
            <line class="frame-line" x1="260" y1="135" x2="260" y2="60" stroke="var(--accent)"></line>
            <line class="grid-line" x1="60" y1="141" x2="260" y2="141"></line>
            <path class="axis" fill="none" d="M 246 135 L 246 121 L 260 121"></path>
            <rect x="255" y="35" width="60" height="25" rx="4" fill="color-mix(in srgb, var(--secondary) 16%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 40%, var(--border))"></rect>
            <text class="tick-label" x="285" y="52" text-anchor="middle">palier</text>
            <text class="annotation-label" x="150" y="88">L (hypoténuse)</text>
            <text class="annotation-label" x="272" y="102" fill="var(--accent)">h = ?</text>
            <text class="annotation-label" x="160" y="158" text-anchor="middle">d (projection)</text>
            <circle class="plot-point-alt" cx="60" cy="135" r="5"></circle>
            <circle class="plot-point" cx="260" cy="60" r="5"></circle>
          </svg>
        `,
        caption: 'L est l\'hypoténuse : c\'est donc $L^2$ qui contient les deux autres, et $h^2 = L^2 - d^2$.'
      },
      options: [
        '$h = \\sqrt{L^2 - d^2}$',
        '$h = L^2 - d^2$',
        '$h = \\sqrt{L^2 + d^2}$',
        '$h = L - d$'
      ],
      answer: 0,
      correction: 'On soustrait $d^2$ aux deux membres : $L^2 - d^2 = h^2$. On prend la racine carrée (h ≥ 0) : $h = \\sqrt{L^2 - d^2}$. Cette formule permet de vérifier qu\'une rampe respecte la pente réglementaire pour une longueur donnée.'
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
    },
    {
      q: 'La puissance active en triphasé équilibré est $P = \\sqrt{3}\\, U \\cdot I \\cdot \\cos\\varphi$. Pour isoler le courant de ligne $I$, on écrit :',
      options: [
        '$I = \\dfrac{P}{\\sqrt{3}\\,U\\cos\\varphi}$',
        '$I = \\sqrt{3}\\,U\\,P\\cos\\varphi$',
        '$I = \\dfrac{\\sqrt{3}\\,U\\cos\\varphi}{P}$',
        '$I = P\\cos\\varphi - \\sqrt{3}U$'
      ],
      answer: 0,
      correction: 'On divise les deux membres par le facteur qui multiplie $I$, à savoir $\\sqrt{3}\\,U\\cos\\varphi$ : $I = P/(\\sqrt{3}\\,U\\cos\\varphi)$. C\'est la formule du courant de ligne en triphasé équilibré.'
    },
    {
      q: 'Le moment d\'une force est $M = F \\cdot d$ (force × bras de levier). Pour isoler le bras de levier $d$ :',
      options: ['$d = M \\cdot F$', '$d = \\dfrac{M}{F}$', '$d = M - F$', '$d = \\dfrac{F}{M}$'],
      answer: 1,
      correction: 'On divise les deux membres par $F$ : $d = M/F$. Unités : N·m / N = m ✓'
    },
    {
      q: 'La force de rappel d\'un ressort suit la loi de Hooke $F = k \\cdot x$. Pour une raideur $k = 250$ N/m et une force $F = 37{,}5$ N, l\'allongement $x$ vaut :',
      options: ['$x = 0{,}15$ m', '$x = 9375$ m', '$x = 6{,}67$ m', '$x = 212{,}5$ m'],
      answer: 0,
      correction: 'On isole $x$ en divisant les deux membres par $k$ : $x = F/k = 37{,}5/250 = 0{,}15$ m.'
    },
    {
      q: 'Le volume de béton d\'une dalle est $V = L \\cdot l \\cdot h$ (longueur × largeur × épaisseur). Pour isoler l\'épaisseur $h$ :',
      options: ['$h = \\dfrac{V}{L \\cdot l}$', '$h = V \\cdot L \\cdot l$', '$h = \\dfrac{L \\cdot l}{V}$', '$h = V - L \\cdot l$'],
      answer: 0,
      correction: 'On divise les deux membres par $L \\cdot l$ (le facteur commun qui multiplie $h$) : $h = V/(L \\cdot l)$. Utile pour retrouver l\'épaisseur d\'une dalle connaissant son volume total.'
    },
    {
      q: 'Un dallage carré a une aire $A = 36$ m². Sachant que $A = c^2$ (avec $c$ le côté du carré), la longueur du côté $c$ vaut :',
      options: ['$c = 6$ m', '$c = 18$ m', '$c = 1296$ m', '$c = 12$ m'],
      answer: 0,
      correction: 'On prend la racine carrée des deux membres (c ≥ 0 car c\'est une longueur) : $c = \\sqrt{A} = \\sqrt{36} = 6$ m.'
    },
    {
      q: 'Le débit d\'une pompe est $\\dot{V} = V/t$ (volume déplacé / temps). Pour isoler le temps de remplissage $t$ d\'une cuve de volume $V$ :',
      options: ['$t = \\dfrac{V}{\\dot{V}}$', '$t = V \\cdot \\dot{V}$', '$t = \\dfrac{\\dot{V}}{V}$', '$t = V - \\dot{V}$'],
      answer: 0,
      correction: '$t$ est au dénominateur : on multiplie d\'abord les deux membres par $t$ : $\\dot{V} \\cdot t = V$. Puis on divise par $\\dot{V}$ : $t = V/\\dot{V}$.'
    },
    {
      q: 'Un radiateur électrique de puissance $P = 1000$ W fonctionne pendant une durée $t$ et consomme une énergie $E = 2500$ Wh (avec $E = P \\cdot t$). La durée de fonctionnement $t$ vaut :',
      options: ['$t = 2{,}5$ h', '$t = 0{,}4$ h', '$t = 2\\,500\\,000$ h', '$t = 1{,}5$ h'],
      answer: 0,
      correction: 'On isole $t$ en divisant les deux membres par $P$ : $t = E/P = 2500/1000 = 2{,}5$ h.'
    },
    {
      q: 'La concentration molaire d\'une solution est $C = n/V$ (quantité de matière / volume). Pour isoler la quantité de matière $n$ :',
      options: ['$n = C \\cdot V$', '$n = C/V$', '$n = V/C$', '$n = C - V$'],
      answer: 0,
      correction: 'On multiplie les deux membres par $V$ : $n = C \\cdot V$. Unités : mol/L × L = mol ✓'
    },
    {
      q: 'La masse volumique est $\\rho = m/V$. Un volume $V = 0{,}25$ L d\'une solution de masse volumique $\\rho = 1{,}2$ kg/L a une masse $m$ qui vaut :',
      options: ['$m = 0{,}3$ kg', '$m = 4{,}8$ kg', '$m = 1{,}45$ kg', '$m = 0{,}208$ kg'],
      answer: 0,
      correction: 'On isole $m$ en multipliant les deux membres par $V$ : $m = \\rho \\cdot V = 1{,}2 \\times 0{,}25 = 0{,}3$ kg.'
    },
    {
      q: 'La relation de dilution s\'écrit $C_1 \\cdot V_1 = C_2 \\cdot V_2$. Pour isoler le volume final $V_2$ de la solution diluée :',
      options: [
        '$V_2 = \\dfrac{C_1 \\cdot V_1}{C_2}$',
        '$V_2 = C_1 \\cdot V_1 \\cdot C_2$',
        '$V_2 = \\dfrac{C_2}{C_1 \\cdot V_1}$',
        '$V_2 = C_1 \\cdot V_1 - C_2$'
      ],
      answer: 0,
      correction: 'On divise les deux membres par $C_2$ : $V_2 = C_1 V_1 / C_2$. Comme $C_2 < C_1$ lors d\'une dilution, on trouve bien $V_2 > V_1$ — le volume final est plus grand que le volume prélevé.'
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
            return { q: `La tension aux bornes d'une résistance est $U = ${U}$ V et le courant qui la traverse est $I = ${I}$ A. Calcule la résistance $R$ (en Ω) à l'aide de $U = R \\cdot I$.`, ans: U / I, unit: 'Ω', hint: `Isole $R$ : $R = U / I = ${U} / ${I}$.`, sol: [`$R = \\dfrac{U}{I} = \\dfrac{${U}}{${I}} = ${fr(U/I)}$ Ω`] };
          }
        },
        {
          context: 'mécanique (Maintenance / Production)',
          statement: () => {
            const P = pick([1500, 3000, 5500, 7500, 11000]);
            const v = pick([1, 1.5, 2, 2.5, 3]);
            const F = Math.round(P / v);
            return { q: `Un moteur de convoyeur développe une puissance $P = ${P}$ W pour une vitesse de déplacement $v = ${fr(v)}$ m/s. Calcule la force de traction $F$ (en N) à l'aide de $P = F \\cdot v$.`, ans: F, unit: 'N', hint: `Isole $F$ : $F = P / v = ${P} / ${fr(v)}$.`, sol: [`$F = \\dfrac{P}{v} = \\dfrac{${P}}{${fr(v)}} = ${F}$ N`] };
          }
        },
        {
          context: 'hydraulique (FED / BTP)',
          statement: () => {
            const Vdot = pick([0.02, 0.05, 0.08, 0.1]);
            const A = pick([0.01, 0.02, 0.04, 0.05]);
            const v = Math.round((Vdot / A) * 100) / 100;
            return { q: `Un réseau hydraulique a un débit volumique $\\dot{V} = ${fr(Vdot)}$ m³/s et une section de conduite $A = ${fr(A)}$ m². Calcule la vitesse d'écoulement $v$ (en m/s) à l'aide de $\\dot{V} = v \\cdot A$.`, ans: v, unit: 'm/s', hint: `Isole $v$ : $v = \\dot{V} / A = ${fr(Vdot)} / ${fr(A)}$.`, sol: [`$v = \\dfrac{\\dot{V}}{A} = \\dfrac{${fr(Vdot)}}{${fr(A)}} = ${fr(v)}$ m/s`] };
          }
        },
        {
          context: pick(['BTP (dalle béton)', 'BTP (fondation)']),
          statement: () => {
            const L = pick([4, 5, 6, 8, 10]);
            const l = pick([2, 2.5, 3, 4]);
            const h = pick([0.1, 0.15, 0.2, 0.25, 0.3]);
            const V = Math.round(L * l * h * 1000) / 1000;
            return { q: `Une dalle béton rectangulaire mesure $L = ${fr(L)}$ m de longueur et $l = ${fr(l)}$ m de largeur. Le volume total de béton coulé est $V = ${fr(V, 3)}$ m³. Calcule l'épaisseur $h$ (en m) à l'aide de $V = L \\cdot l \\cdot h$.`, ans: h, unit: 'm', hint: `Isole $h$ : $h = V/(L \\cdot l) = ${fr(V, 3)} / (${fr(L)} \\times ${fr(l)})$.`, sol: [`$h = \\dfrac{V}{L \\cdot l} = \\dfrac{${fr(V, 3)}}{${fr(L)} \\times ${fr(l)}} = ${fr(h)}$ m`] };
          }
        },
        {
          context: 'chimie (dilution d\'une solution)',
          statement: () => {
            const C1 = pick([0.5, 1, 2, 4, 5]);
            const V1 = pick([10, 20, 25, 50]);
            const facteur = pick([2, 4, 5, 10]);
            const C2 = C1 / facteur;
            const V2 = V1 * facteur;
            return { q: `Un chimiste dilue $V_1 = ${V1}$ mL d'une solution mère de concentration $C_1 = ${fr(C1)}$ mol/L pour obtenir une solution fille de concentration $C_2 = ${fr(C2)}$ mol/L. Calcule le volume final $V_2$ (en mL) à l'aide de $C_1 \\cdot V_1 = C_2 \\cdot V_2$.`, ans: V2, unit: 'mL', hint: `Isole $V_2$ : $V_2 = C_1 V_1 / C_2 = ${fr(C1)} \\times ${V1} / ${fr(C2)}$.`, sol: [`$V_2 = \\dfrac{C_1 \\cdot V_1}{C_2} = \\dfrac{${fr(C1)} \\times ${V1}}{${fr(C2)}} = ${fr(V2)}$ mL`] };
          }
        },
        {
          context: 'génie climatique (radiateur électrique)',
          statement: () => {
            const P = pick([500, 750, 1000, 1500, 2000]);
            const t = pick([0.5, 1, 1.5, 2, 3]);
            const E = P * t;
            return { q: `Un radiateur électrique de puissance $P = ${P}$ W fonctionne pendant une durée $t$ et consomme une énergie $E = ${fr(E)}$ Wh. Calcule la durée de fonctionnement $t$ (en h) à l'aide de $E = P \\cdot t$.`, ans: t, unit: 'h', hint: `Isole $t$ : $t = E/P = ${fr(E)}/${P}$.`, sol: [`$t = \\dfrac{E}{P} = \\dfrac{${fr(E)}}{${P}} = ${fr(t)}$ h`] };
          }
        }
      ];
      const scenario = pick(scenarios);
      const s = scenario.statement();
      return {
        statement: `<em>${scenario.context}</em><br/><br/>${s.q}`,
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
    figure: {
      svg: `
        <svg viewBox="0 0 450 220" role="img" aria-labelledby="pb-calcullit-title pb-calcullit-desc">
          <title id="pb-calcullit-title">Boucle solaire thermique : collecteur, pompe et ballon</title>
          <desc id="pb-calcullit-desc">Un circuit ferme relie un collecteur solaire, une pompe de circulation et un ballon de stockage. Le fluide entre dans le collecteur a 25 degres, en ressort plus chaud a la temperature Ts cherchee, puis cede sa chaleur au ballon avant de revenir a la pompe. La puissance captee vaut 3,5 kilowatts.</desc>

          <rect x="30" y="40" width="120" height="56" rx="8" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 36%, var(--border))"></rect>
          <line class="grid-line" x1="45" y1="52" x2="135" y2="52"></line>
          <line class="grid-line" x1="45" y1="68" x2="135" y2="68"></line>
          <line class="grid-line" x1="45" y1="84" x2="135" y2="84"></line>
          <text class="annotation-label" x="90" y="30" text-anchor="middle">Collecteur solaire</text>
          <line class="graph-line" x1="60" y1="8" x2="72" y2="26" stroke="var(--accent)"></line>
          <line class="graph-line" x1="90" y1="8" x2="102" y2="26" stroke="var(--accent)"></line>
          <line class="graph-line" x1="120" y1="8" x2="132" y2="26" stroke="var(--accent)"></line>

          <rect x="300" y="30" width="90" height="120" rx="12" fill="color-mix(in srgb, var(--secondary) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 34%, var(--border))"></rect>
          <line class="grid-line" x1="300" y1="72" x2="390" y2="72"></line>
          <text class="annotation-label" x="345" y="22" text-anchor="middle">Ballon</text>
          <text class="tick-label" x="345" y="60" text-anchor="middle">échangeur</text>
          <text class="tick-label" x="345" y="106" text-anchor="middle">eau chaude</text>
          <text class="tick-label" x="345" y="122" text-anchor="middle">sanitaire</text>

          <circle cx="215" cy="180" r="20" class="plot-point-alt"></circle>
          <text class="annotation-label" x="215" y="185" text-anchor="middle">P</text>
          <text class="tick-label" x="215" y="216" text-anchor="middle">pompe de circulation</text>

          <line class="curve-main" x1="150" y1="55" x2="300" y2="55"></line>
          <polygon points="292,49 306,55 292,61" fill="var(--primary)"></polygon>
          <text class="annotation-label" x="225" y="46" text-anchor="middle">Ts = ?  (sortie chaude)</text>

          <line class="curve-main" x1="330" y1="150" x2="330" y2="180" stroke="var(--secondary)"></line>
          <line class="curve-main" x1="330" y1="180" x2="235" y2="180" stroke="var(--secondary)"></line>
          <line class="curve-main" x1="195" y1="180" x2="60" y2="180" stroke="var(--secondary)"></line>
          <line class="curve-main" x1="60" y1="180" x2="60" y2="96" stroke="var(--secondary)"></line>
          <polygon points="54,104 60,90 66,104" fill="var(--secondary)"></polygon>
          <text class="annotation-label" x="130" y="170" text-anchor="middle" fill="var(--secondary)">Te = 25 °C (retour froid)</text>

          <text class="annotation-label" x="90" y="120" text-anchor="middle">Q = 3,5 kW</text>
          <text class="tick-label" x="90" y="138" text-anchor="middle">ṁ = 0,12 kg/s</text>
          <text class="tick-label" x="90" y="154" text-anchor="middle">cp = 3800 J/(kg·K)</text>
        </svg>
      `,
      caption: 'Boucle fermée : le fluide capte $\\dot{Q}$ dans le collecteur, cède cette chaleur au ballon, puis revient à $T_e$.'
    },
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
