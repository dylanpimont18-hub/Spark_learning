window.MODULES.push({
  id: 'bts-prep-analyse-dim',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '🔬',
  title: 'Analyse Dimensionnelle',
  subtitle: 'Homogénéité, vérification et détection d\'erreurs',
  keywords: ['analyse dimensionnelle', 'homogénéité', 'dimension', 'vérification', 'erreur dimensionnelle', 'adimensionnel', 'formule'],
  physics: 'L\'analyse dimensionnelle est un outil de contrôle redoutable : si votre formule est dimensionnellement incohérente, le résultat est forcément faux. Elle permet aussi de retrouver des formules, de vérifier des calculs et de construire des nombres adimensionnels comme le Reynolds ou le COP.',

  cours: {
    intro: `L'analyse dimensionnelle est fondée sur un principe simple : dans toute équation physique, les deux membres doivent avoir les <strong>mêmes dimensions</strong>. C'est ce qu'on appelle le <em>principe d'homogénéité</em>.<br/><br/>
Cette règle permet :<br/>
• de <strong>vérifier</strong> si une formule est cohérente (mais attention : une formule homogène n'est pas forcément juste)<br/>
• de <strong>détecter des erreurs</strong> de calcul ou de formule<br/>
• de <strong>retrouver des formules</strong> partiellement oubliées<br/>
• de comprendre les <strong>nombres adimensionnels</strong> utilisés en thermique et en mécanique des fluides`,

    definitions: [
      {
        term: 'Dimensions fondamentales',
        def: `En analyse dimensionnelle, on utilise des symboles pour les dimensions (pas des unités) :<br/><br/>
| Grandeur de base | Dimension |
|-----------------|-----------|
| Longueur | L |
| Masse | M |
| Temps | T |
| Courant électrique | I |
| Température | θ (thêta) |
| Quantité de matière | N |<br/><br/>
Notation : $[x]$ désigne "la dimension de la grandeur x".<br/><br/>
Exemples : $[v] = \\text{L·T}^{-1}$ (vitesse), $[F] = \\text{M·L·T}^{-2}$ (force), $[P] = \\text{M·L}^{-1}\\text{·T}^{-2}$ (pression), $[W] = \\text{M·L}^2\\text{·T}^{-2}$ (énergie), $[P_{\\text{élec}}] = \\text{M·L}^2\\text{·T}^{-3}$ (puissance)`
      },
      {
        term: 'Principe d\'homogénéité',
        def: `Une équation $A = B + C$ est homogène si et seulement si $[A] = [B] = [C]$.<br/><br/>
<strong>On ne peut pas additionner des grandeurs de dimensions différentes.</strong><br/>
$5\\;\\text{m} + 3\\;\\text{kg}$ est physiquement absurde.`
      },
      {
        term: 'Nombres adimensionnels',
        def: `Certains groupes de grandeurs forment des nombres sans dimension : ce sont des <em>nombres adimensionnels</em>. Ils ont la même valeur dans n'importe quel système d'unités.<br/>
Exemples : nombre de Reynolds $Re = \\rho v D / \\mu$, rendement $\\eta = P_{\\text{utile}} / P_{\\text{absorbée}}$, COP.`
      }
    ],

    method: {
      title: 'Méthode de vérification dimensionnelle',
      steps: [
        'Identifier toutes les grandeurs de la formule.',
        'Écrire la dimension de chaque grandeur en termes de M, L, T, I, θ…',
        'Substituer dans la formule.',
        'Simplifier et vérifier que les deux membres sont identiques.',
        '<strong>Méthode de détermination d\'une inconnue</strong> : si une formule est de la forme $A = k \\cdot B^a \\cdot C^b$ et qu\'on connaît les dimensions de A, B et C, on peut trouver les exposants a et b en écrivant l\'équation dimensionnelle et en identifiant les puissances de chaque dimension.'
      ]
    },

    example: {
      statement: 'Quatre applications de l\'analyse dimensionnelle : vérification d\'une énergie cinétique, détection d\'une erreur de formule, vérification d\'une loi électrique, et calcul du nombre de Reynolds.',
      steps: [
        '<strong>Exemple 1 — Vérification : $E = \\frac{1}{2}mv^2$ (énergie cinétique)</strong><br/>$[m] = \\text{M}$, $[v] = \\text{L·T}^{-1}$<br/>$\\left[\\frac{1}{2}mv^2\\right] = \\text{M} \\times (\\text{L·T}^{-1})^2 = \\text{M·L}^2\\text{·T}^{-2}$<br/>$[E] = \\text{J} = \\text{M·L}^2\\text{·T}^{-2}$ ✓',
        '<strong>Exemple 2 — Détection d\'erreur : $P = F \\times v^2$ (faux !)</strong><br/>$[F \\times v^2] = \\text{M·L·T}^{-2} \\times (\\text{L·T}^{-1})^2 = \\text{M·L}^3\\text{·T}^{-4}$<br/>$[P] = \\text{W} = \\text{M·L}^2\\text{·T}^{-3}$<br/>$\\text{M·L}^3\\text{·T}^{-4} \\neq \\text{M·L}^2\\text{·T}^{-3}$ → formule <strong>fausse</strong>. La formule correcte est $P = F \\times v$.',
        '<strong>Exemple 3 — Électrotechnique : vérifier $U = \\sqrt{P \\times R}$</strong><br/>$[P \\times R] = \\text{M}^2\\text{·L}^4\\text{·T}^{-6}\\text{·I}^{-2}$<br/>$\\left[\\sqrt{P \\times R}\\right] = \\text{M·L}^2\\text{·T}^{-3}\\text{·I}^{-1} = [\\text{V}]$ ✓',
        '<strong>Exemple 4 — Hydraulique : nombre de Reynolds</strong><br/>$Re = \\rho v D / \\mu$ où $[\\rho] = \\text{M·L}^{-3}$, $[v] = \\text{L·T}^{-1}$, $[D] = \\text{L}$, $[\\mu] = \\text{M·L}^{-1}\\text{·T}^{-1}$<br/>$[Re] = \\frac{\\text{M·L}^{-1}\\text{·T}^{-1}}{\\text{M·L}^{-1}\\text{·T}^{-1}} = 1$ → adimensionnel ✓'
      ],
      answer: 'L\'analyse dimensionnelle permet de vérifier toute formule physique, de détecter des erreurs et de construire des nombres adimensionnels universels comme le nombre de Reynolds.'
    },

    formulas: [
      '<strong>Force</strong> : $[F] = \\text{M·L·T}^{-2}$',
      '<strong>Énergie</strong> : $[W] = \\text{M·L}^2\\text{·T}^{-2}$',
      '<strong>Puissance</strong> : $[P] = \\text{M·L}^2\\text{·T}^{-3}$',
      '<strong>Pression</strong> : $[P_{\\text{press}}] = \\text{M·L}^{-1}\\text{·T}^{-2}$',
      '<strong>Tension électrique</strong> : $[U] = \\text{M·L}^2\\text{·T}^{-3}\\text{·I}^{-1}$',
      '<strong>Viscosité dynamique</strong> : $[\\mu] = \\text{M·L}^{-1}\\text{·T}^{-1}$',
      '<strong>Principe d\'homogénéité</strong> : $A = B \\Rightarrow [A] = [B]$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Mécanique des fluides — nombre de Reynolds',
      title: 'Écoulement dans une tuyauterie : laminaire ou turbulent ?',
      description: 'Le nombre de Reynolds <strong>Re = ρvD/µ</strong> compare les forces d\'inertie aux forces de viscosité dans un fluide en écoulement. Reprenons l\'exemple chiffré du cours : une conduite d\'eau de diamètre $D = 50$ mm parcourue à $v = 1{,}5$ m/s.',
      svg: `
        <svg viewBox="0 0 460 260" role="img" aria-labelledby="bts-analysedim-reynolds-title bts-analysedim-reynolds-desc">
          <title id="bts-analysedim-reynolds-title">Écoulement turbulent dans une conduite d'eau</title>
          <desc id="bts-analysedim-reynolds-desc">Coupe longitudinale d'une tuyauterie : le fluide entre à gauche avec sa vitesse v, s'écoule dans un tube de diamètre D, et les lignes de courant chaotiques à l'intérieur indiquent un régime turbulent ; le nombre de Reynolds est calculé en bas du schéma.</desc>
          <text class="annotation-label" x="14" y="45">ρ = 1000 kg/m³</text>
          <text class="annotation-label" x="14" y="60">µ = 1,002×10⁻³ Pa·s</text>
          <text class="annotation-label" x="14" y="118">v = 1,5 m/s</text>
          <line class="graph-line" x1="14" y1="130" x2="52" y2="130"></line>
          <polygon class="plot-point" points="46,124 56,130 46,136"></polygon>
          <line class="grid-line" x1="58" y1="80" x2="366" y2="80"></line>
          <line class="frame-line" x1="58" y1="90" x2="366" y2="90"></line>
          <line class="frame-line" x1="58" y1="170" x2="366" y2="170"></line>
          <line class="grid-line" x1="58" y1="180" x2="366" y2="180"></line>
          <line class="grid-line" x1="70" y1="80" x2="62" y2="90"></line>
          <line class="grid-line" x1="100" y1="80" x2="92" y2="90"></line>
          <line class="grid-line" x1="130" y1="80" x2="122" y2="90"></line>
          <line class="grid-line" x1="160" y1="80" x2="152" y2="90"></line>
          <line class="grid-line" x1="190" y1="80" x2="182" y2="90"></line>
          <line class="grid-line" x1="220" y1="80" x2="212" y2="90"></line>
          <line class="grid-line" x1="250" y1="80" x2="242" y2="90"></line>
          <line class="grid-line" x1="280" y1="80" x2="272" y2="90"></line>
          <line class="grid-line" x1="310" y1="80" x2="302" y2="90"></line>
          <line class="grid-line" x1="340" y1="80" x2="332" y2="90"></line>
          <line class="grid-line" x1="70" y1="180" x2="62" y2="170"></line>
          <line class="grid-line" x1="100" y1="180" x2="92" y2="170"></line>
          <line class="grid-line" x1="130" y1="180" x2="122" y2="170"></line>
          <line class="grid-line" x1="160" y1="180" x2="152" y2="170"></line>
          <line class="grid-line" x1="190" y1="180" x2="182" y2="170"></line>
          <line class="grid-line" x1="220" y1="180" x2="212" y2="170"></line>
          <line class="grid-line" x1="250" y1="180" x2="242" y2="170"></line>
          <line class="grid-line" x1="280" y1="180" x2="272" y2="170"></line>
          <line class="grid-line" x1="310" y1="180" x2="302" y2="170"></line>
          <line class="grid-line" x1="340" y1="180" x2="332" y2="170"></line>
          <path class="graph-line" d="M65,105 Q95,92 125,105 Q155,118 185,104 Q215,90 245,106 Q275,120 305,104 Q335,90 365,106" fill="none"></path>
          <path class="graph-line" d="M65,130 Q95,142 125,130 Q155,118 185,131 Q215,144 245,129 Q275,116 305,131 Q335,144 365,129" fill="none"></path>
          <path class="graph-line" d="M65,155 Q95,168 125,155 Q155,142 185,156 Q215,170 245,154 Q275,140 305,156 Q335,170 365,154" fill="none"></path>
          <circle class="plot-point-alt" cx="145" cy="118" r="4"></circle>
          <circle class="plot-point-alt" cx="225" cy="144" r="4"></circle>
          <circle class="plot-point-alt" cx="305" cy="112" r="4"></circle>
          <path class="grid-line" d="M141,118 q4,-6 8,0 q4,6 -8,0" fill="none"></path>
          <path class="grid-line" d="M221,144 q4,-6 8,0 q4,6 -8,0" fill="none"></path>
          <path class="grid-line" d="M301,112 q4,-6 8,0 q4,6 -8,0" fill="none"></path>
          <line class="graph-line" x1="366" y1="130" x2="396" y2="130"></line>
          <polygon class="plot-point" points="390,124 400,130 390,136"></polygon>
          <line class="guide-line" x1="408" y1="90" x2="408" y2="170"></line>
          <line class="axis" x1="402" y1="90" x2="414" y2="90"></line>
          <line class="axis" x1="402" y1="170" x2="414" y2="170"></line>
          <polygon class="plot-point" points="404,96 408,88 412,96"></polygon>
          <polygon class="plot-point" points="404,164 408,172 412,164"></polygon>
          <text class="axis-label" x="420" y="126">D</text>
          <text class="tick-label" x="420" y="142">50 mm</text>
          <text class="annotation-label" x="212" y="200" text-anchor="middle">Re = ρ·v·D / µ ≈ 74 850</text>
          <text class="annotation-label" x="212" y="220" text-anchor="middle">Écoulement TURBULENT (Re > 4000)</text>
        </svg>
      `,
      notes: [
        'Données reprises de l\'exemple chiffré du cours : <strong>ρ = 1000 kg/m³</strong> (eau), <strong>v = 1{,}5 m/s</strong>, <strong>D = 50 mm</strong>, <strong>µ = 1{,}002 × 10⁻³ Pa·s</strong> (viscosité à 20°C).',
        'Calcul indépendant : $Re = \\dfrac{\\rho v D}{\\mu} = \\dfrac{1000 \\times 1{,}5 \\times 0{,}050}{1{,}002 \\times 10^{-3}} \\approx 74\\,850$.',
        'Comme <strong>Re ≈ 74 850 > 4000</strong>, l\'écoulement est <strong>turbulent</strong> : les lignes de courant se mélangent de façon chaotique au lieu de glisser en couches parallèles comme en régime laminaire.'
      ],
      reading: 'Un nombre de Reynolds élevé (régime turbulent) annonce des <strong>pertes de charge plus importantes</strong> dans la tuyauterie qu\'en régime laminaire — un point essentiel pour bien dimensionner une pompe.',
      caption: 'Schéma de principe d\'une conduite d\'eau en régime turbulent (Re ≈ 74 850), avec les grandeurs du nombre de Reynolds reprises de l\'exemple chiffré du cours.'
    },

    recap: [
      'Le principe d\'homogénéité : les deux membres d\'une équation doivent avoir les mêmes dimensions.',
      'Notation : $[x]$ = dimension de x en termes de M, L, T, I, θ…',
      'Une formule homogène n\'est pas forcément juste (peut manquer un facteur numérique).',
      'Une formule non homogène est forcément fausse.',
      'Un nombre adimensionnel a une valeur indépendante du système d\'unités.'
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Homogène ≠ correct</strong> : $E = mv^2$ est homogène mais faux (il manque le facteur 1/2). L'analyse dimensionnelle détecte les incohérences, pas les erreurs numériques.<br/><br/>
• <strong>Les constantes numériques sont adimensionnelles</strong> : le $\\frac{1}{2}$ dans $\\frac{1}{2}mv^2$ n'a pas de dimension.<br/><br/>
• <strong>Confondre dimension et unité</strong> : la dimension de la vitesse est L·T⁻¹, que l'unité soit m/s, km/h ou nœuds.<br/><br/>
• <strong>Les fonctions transcendantes (sin, ln, exp) ne s'appliquent qu'à des nombres adimensionnels</strong> : $\\sin(\\theta)$ est correct si $\\theta$ est en radians (adimensionnel). $\\sin(5\\;\\text{m})$ n'a aucun sens.`,
  },

  quiz: [
    {
      q: 'Quelle est la dimension de la vitesse ?',
      options: ['M·L·T⁻²', 'L·T⁻¹', 'M·L⁻¹·T⁻¹', 'L²·T⁻²'],
      answer: 1,
      correction: '[v] = [distance/temps] = L/T = L·T⁻¹. La dimension M·L·T⁻² est celle d\'une force (newton).',
    },
    {
      q: 'Une équation physique est homogène si :',
      options: ['Tous les termes ont la même valeur numérique', 'Tous les termes ont la même dimension', 'Tous les termes ont la même unité', 'Les deux membres sont positifs'],
      answer: 1,
      correction: 'L\'homogénéité dimensionnelle signifie que tous les termes d\'une somme, et les deux membres d\'une égalité, ont la même dimension.',
    },
    {
      q: 'La formule $P = F \\times v$ (puissance = force × vitesse) est-elle homogène ?',
      options: ['Non, les dimensions ne correspondent pas', 'Oui : [F·v] = M·L²·T⁻³ = [P]', 'Non, la puissance est en joules', 'Oui, mais seulement en SI'],
      answer: 1,
      correction: '[F·v] = (M·L·T⁻²)·(L·T⁻¹) = M·L²·T⁻³ = [W]. Homogène ✓. (Les dimensions sont universelles, pas les unités.)',
    },
    {
      q: 'Le rendement $\\eta = P_{\\text{utile}} / P_{\\text{totale}}$ est :',
      options: ['Exprimé en watts', 'Adimensionnel', 'Exprimé en joules', 'Exprimé en %·s'],
      answer: 1,
      correction: '[η] = [W]/[W] = 1 : adimensionnel. Les pourcentages sont une convention de représentation, pas une dimension.',
    },
    {
      q: 'Quelle formule est dimensionnellement incorrecte pour l\'énergie potentielle ?',
      options: ['$E_p = mgh$', '$E_p = \\frac{1}{2}mv^2$', '$E_p = F \\times v$', '$E_p = P \\times t$'],
      answer: 2,
      correction: '[F·v] = N·m/s = W (puissance), pas J (énergie). Les autres formules donnent bien des joules : [mgh] = kg·m/s²·m = J ; [½mv²] = kg·(m/s)² = J ; [Pt] = W·s = J.',
    },
    {
      q: 'La viscosité dynamique μ a pour dimension M·L⁻¹·T⁻¹. Son unité SI est :',
      options: ['m²/s', 'N/m²', 'Pa·s', 'kg/m³'],
      answer: 2,
      correction: '[μ] = M·L⁻¹·T⁻¹ = kg/(m·s) = (kg·m⁻¹·s⁻²)·s = Pa·s. L\'unité Pa·s (pascal-seconde) est bien l\'unité SI de la viscosité dynamique.',
    },
    {
      q: 'Le nombre de Reynolds $Re = \\rho v D / \\mu$ est adimensionnel. Cela signifie que :',
      options: ['Re n\'a pas d\'unité mais dépend du système', 'Re a la même valeur en SI et en CGS', 'Re s\'exprime en Pa', 'Re est toujours égal à 1'],
      answer: 1,
      correction: 'Un nombre adimensionnel a la même valeur quel que soit le système d\'unités utilisé (SI, CGS, impérial). C\'est l\'intérêt fondamental des nombres adimensionnels.',
    },
    {
      q: 'On veut vérifier si $U = \\frac{P}{I}$ est homogène. En dimensions :',
      options: ['$[P/I] = \\text{M·L}^2\\text{·T}^{-3}\\text{·I}^{-1}$ = [V] ✓', '$[P/I] = \\text{M·L}^2\\text{·T}^{-3}\\text{·I}$ ≠ [V] ✗', '$[P/I] = \\text{W/A} \\neq \\text{V}$ ✗', '$[P/I] = \\text{M·L}^2\\text{·T}^{-2}$ = [J] ✓'],
      answer: 0,
      correction: '[P/I] = (M·L²·T⁻³) / I = M·L²·T⁻³·I⁻¹ = [V] ✓. Et en unités : W/A = V effectivement (c\'est la définition du volt).',
    },
    {
      q: 'Peut-on écrire la formule $d = v + t$ (distance = vitesse + temps) ?',
      options: ['Oui si on utilise des unités cohérentes', 'Non, car [v] ≠ [t]', 'Oui, en choisissant les bonnes unités', 'Non, seulement si d est en mètres'],
      answer: 1,
      correction: 'Non. [v] = L·T⁻¹ et [t] = T. On ne peut pas additionner des grandeurs de dimensions différentes, quelle que soit l\'unité choisie. C\'est une violation du principe d\'homogénéité.',
    },
    {
      q: 'La constante de temps d\'un circuit RC est $\\tau = RC$. Vérifier que $\\tau$ s\'exprime bien en secondes.',
      options: ['[RC] = Ω·F = (V/A)·(C/V) = C/A = s ✓', '[RC] = Ω·F = V²/W ≠ s ✗', '[RC] = Ω·F = W·s² ≠ s ✗', '[RC] = Ω·F = A²·s ≠ s ✗'],
      answer: 0,
      correction: '[R·C] = Ω × F = (V/A) × (A·s/V) = s ✓. La constante de temps RC est bien homogène à un temps.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      // Exercice de vérification numérique : calculer une puissance à partir d'une force et d'une vitesse
      // puis vérifier l'homogénéité avec une deuxième formule
      const type = pick(['puissance_fv', 'pression_F_sur_A', 'energie_cinetique']);

      if (type === 'puissance_fv') {
        const F = pick([500, 800, 1200, 2000, 3000]);
        const v_kmh = pick([3.6, 7.2, 10.8, 18]);
        const v_ms = v_kmh / 3.6;
        const P = F * v_ms;
        const context = pick(['chariot élévateur', 'tapis roulant logistique', 'système de convoyage automatisé']);
        return {
          statement: `Un ${context} exerce une force motrice de $F = ${F}\\;\\text{N}$ et avance à $v = ${String(v_kmh).replace('.', '{,}')}\\;\\text{km/h}$.<br/><br/>
1. Convertir $v$ en m/s.<br/>
2. Calculer la puissance mécanique $P = F \\times v$ (en W).`,
          answer: parseFloat(P.toFixed(1)),
          tolerance: 1,
          unit: 'W',
          hint: `Convertir d'abord : $v(\\text{m/s}) = v(\\text{km/h}) / 3{,}6$.`,
          solution: `$v = ${String(v_kmh).replace('.', '{,}')} / 3{,}6 = ${v_ms.toFixed(2).replace('.', '{,}')}\\;\\text{m/s}$<br/>$P = ${F} \\times ${v_ms.toFixed(2).replace('.', '{,}')} = ${P.toFixed(1).replace('.', '{,}')}\\;\\text{W}$<br/>Vérification : $[F \\times v] = \\text{N·m·s}^{-1} = \\text{W}$ ✓`,
        };
      }

      if (type === 'pression_F_sur_A') {
        const F_kN = pick([10, 15, 20, 25, 30, 50]);
        const A_cm2 = pick([4, 8, 10, 16, 20, 25]);
        const F_N = F_kN * 1000;
        const A_m2 = A_cm2 * 1e-4;
        const P_Pa = F_N / A_m2;
        const P_MPa = P_Pa / 1e6;
        const context = pick(['piston de vérin hydraulique', 'socle de machine-outil', 'pied de charpente métallique']);
        return {
          statement: `Un ${context} supporte une force $F = ${F_kN}\\;\\text{kN}$ sur une surface $A = ${A_cm2}\\;\\text{cm}^2$.<br/><br/>
Calculer la pression $p = F/A$ en MPa (arrondi à 0,01 MPa).`,
          answer: parseFloat(P_MPa.toFixed(2)),
          tolerance: 0.01,
          unit: 'MPa',
          hint: `Convertir F en N et A en m², puis $p = F/A$ en Pa, puis en MPa ($\\div 10^6$).`,
          solution: `$F = ${F_kN} \\times 10^3 = ${F_N}\\;\\text{N}$<br/>$A = ${A_cm2} \\times 10^{-4} = ${String(A_m2).replace('.', '{,}')}\\;\\text{m}^2$<br/>$p = ${F_N} / ${String(A_m2).replace('.', '{,}')} = ${P_Pa.toFixed(0)}\\;\\text{Pa} = ${P_MPa.toFixed(2).replace('.', '{,}')}\\;\\text{MPa}$`,
        };
      }

      const m = pick([500, 800, 1000, 1200, 2000]);
      const v_kmh = pick([36, 54, 72, 90, 108]);
      const v_ms = v_kmh / 3.6;
      const Ec = 0.5 * m * v_ms * v_ms;
      const Ec_kJ = Ec / 1000;
      const context = pick(['véhicule de livraison', 'chariot de manutention motorisé', 'nacelle élévatrice en déplacement']);
      return {
        statement: `Un ${context} de masse $m = ${m}\\;\\text{kg}$ se déplace à $v = ${v_kmh}\\;\\text{km/h}$.<br/><br/>
Calculer son énergie cinétique $E_c = \\dfrac{1}{2}mv^2$ en kilojoules (kJ, arrondi à 0,1 kJ).`,
        answer: parseFloat(Ec_kJ.toFixed(1)),
        tolerance: 0.1,
        unit: 'kJ',
        hint: `Convertir $v$ en m/s, puis $E_c = \\frac{1}{2}mv^2$, résultat en J divisé par 1000.`,
        solution: `$v = ${v_kmh}/3{,}6 = ${v_ms.toFixed(2).replace('.', '{,}')}\\;\\text{m/s}$<br/>$E_c = \\frac{1}{2} \\times ${m} \\times ${v_ms.toFixed(2).replace('.', '{,}')}^2 = \\frac{1}{2} \\times ${m} \\times ${(v_ms*v_ms).toFixed(2).replace('.', '{,}')} = ${Ec.toFixed(0)}\\;\\text{J} = ${Ec_kJ.toFixed(1).replace('.', '{,}')}\\;\\text{kJ}$<br/>Vérification : $[\\frac{1}{2}mv^2] = \\text{kg·m}^2\\text{·s}^{-2} = \\text{J}$ ✓`,
      };
    },
  },

  probleme: {
    context: `Un ingénieur en bureau d'études dimensionne une tuyauterie d'eau. Il doit vérifier si le régime d'écoulement est laminaire ou turbulent grâce au nombre de Reynolds :<br/><br/>
$$Re = \\frac{\\rho \\cdot v \\cdot D}{\\mu}$$<br/><br/>
Données :<br/>
• Diamètre intérieur : $D = 50\\;\\text{mm}$<br/>
• Vitesse d'écoulement : $v = 1{,}5\\;\\text{m/s}$<br/>
• Masse volumique de l'eau : $\\rho = 1000\\;\\text{kg/m}^3$<br/>
• Viscosité dynamique de l'eau à 20°C : $\\mu = 1{,}002 \\times 10^{-3}\\;\\text{Pa·s}$<br/><br/>
Rappel : si $Re < 2300$ → laminaire ; si $Re > 4000$ → turbulent.`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  ρ, μ (eau) →→→→ v = 1,5 m/s →→→→→→→
            ┌──────────────────┐
  ══════════│   D = 50 mm      │══════
            └──────────────────┘
                 tuyauterie
</pre>
</div>`,
    tasks: [
      'Vérifier par analyse dimensionnelle que le nombre de Reynolds est bien adimensionnel. (Rappel : [Pa·s] = M·L⁻¹·T⁻¹)',
      'Convertir le diamètre $D$ en mètres.',
      'Calculer la valeur numérique de $Re$ (arrondi à la dizaine).',
      'Déterminer le régime d\'écoulement et expliquer les conséquences pratiques sur les pertes de charge dans la canalisation.',
    ],
    solutions: [
      `$[Re] = \\dfrac{[\\rho][v][D]}{[\\mu]} = \\dfrac{(\\text{M·L}^{-3})(\\text{L·T}^{-1})(\\text{L})}{\\text{M·L}^{-1}\\text{·T}^{-1}} = \\dfrac{\\text{M·L}^{-1}\\text{·T}^{-1}}{\\text{M·L}^{-1}\\text{·T}^{-1}} = 1$ → adimensionnel ✓`,
      `$D = 50\\;\\text{mm} = 50 \\times 10^{-3}\\;\\text{m} = 0{,}050\\;\\text{m}$`,
      `$Re = \\dfrac{1000 \\times 1{,}5 \\times 0{,}050}{1{,}002 \\times 10^{-3}} = \\dfrac{75}{1{,}002 \\times 10^{-3}} \\approx 74\\,850$`,
      `$Re \\approx 74\\,850 > 4000$ → régime <strong>turbulent</strong>.<br/>En régime turbulent, les pertes de charge sont beaucoup plus importantes qu'en régime laminaire et varient approximativement avec $v^{1{,}75}$ à $v^2$. Il faudra donc reconsidérer la puissance de la pompe ou augmenter le diamètre de la canalisation pour réduire la vitesse.`,
    ],
    finalAnswer: '$Re \\approx 74\\,850$ → régime turbulent. Les pertes de charge seront significatives ; envisager d\'augmenter $D$ ou de réduire $v$.',
  },

  evaluation: {
    title: 'Évaluation — Analyse Dimensionnelle',
    duration: '25 min',
    questions: [
      {
        q: 'Vérifier par analyse dimensionnelle que $F = m \\times a$ est homogène (avec [F] = N, [m] = kg, [a] = m·s⁻²).',
        answer: '$[m \\times a] = \\text{kg} \\times \\text{m·s}^{-2} = \\text{kg·m·s}^{-2} = \\text{N}$ ✓',
        points: 3,
      },
      {
        q: 'Montrer que la formule $P = U^2 / R$ (puissance électrique) est dimensionnellement cohérente.',
        answer: '$[U^2/R] = \\text{V}^2/\\Omega$<br/>$[\\text{V}^2] = (\\text{M·L}^2\\text{·T}^{-3}\\text{·I}^{-1})^2 = \\text{M}^2\\text{·L}^4\\text{·T}^{-6}\\text{·I}^{-2}$<br/>$[\\Omega] = \\text{M·L}^2\\text{·T}^{-3}\\text{·I}^{-2}$<br/>$[U^2/R] = \\text{M·L}^2\\text{·T}^{-3} = [\\text{W}]$ ✓',
        points: 4,
      },
      {
        q: 'Un élève écrit : "La fréquence d\'un pendule vaut $f = \\sqrt{g/l}$ avec $g$ en m/s² et $l$ en m." Vérifier si cette formule est homogène.',
        answer: '$[g/l] = (\\text{m·s}^{-2}) / \\text{m} = \\text{s}^{-2}$<br/>$[\\sqrt{g/l}] = \\text{s}^{-1} = [\\text{Hz}]$ ✓<br/>La formule est dimensionnellement cohérente. (La formule exacte est $f = \\frac{1}{2\\pi}\\sqrt{g/l}$, le facteur $2\\pi$ est adimensionnel.)',
        points: 4,
      },
      {
        q: 'La constante de Stefan-Boltzmann $\\sigma = 5{,}67 \\times 10^{-8}\\;\\text{W·m}^{-2}\\text{·K}^{-4}$. Quelle est la dimension de $\\sigma$ ?',
        answer: '$[\\sigma] = \\text{M·T}^{-3}\\text{·θ}^{-4}$ (avec θ pour la température)<br/>Vérification : la loi de Stefan-Boltzmann $\\Phi = \\sigma T^4 S$ → $[\\sigma T^4 S] = \\text{M·T}^{-3}\\text{·θ}^{-4} \\times \\text{θ}^4 \\times \\text{L}^2 = \\text{M·L}^2\\text{·T}^{-3} = \\text{W}$ ✓',
        points: 3,
      },
    ],
  },
});
