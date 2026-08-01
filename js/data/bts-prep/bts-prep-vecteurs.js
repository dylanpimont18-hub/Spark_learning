window.MODULES.push({
  id: 'bts-prep-vecteurs',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '↗️',
  title: 'Vecteurs & Géométrie',
  subtitle: 'Coordonnées, norme, addition, produit scalaire',
  keywords: ['vecteur', 'norme', 'produit scalaire', 'composantes', 'résultante', 'force', 'projection', 'angle entre vecteurs'],
  physics: 'En mécanique, électromagnétisme et thermique, les grandeurs physiques ont une direction et un sens : force, vitesse, champ électrique, déplacement. Le calcul vectoriel est l\'outil qui permet de combiner ces grandeurs rigoureusement.',

  cours: {
    intro: `Un vecteur est une grandeur définie par trois informations : sa <strong>direction</strong>, son <strong>sens</strong> et sa <strong>valeur</strong> (ou norme). En BTS technique, on travaille principalement en 2D (plan) et parfois en 3D.<br/><br/>
Exemples concrets : la force exercée par un câble de levage, la vitesse d'un fluide dans une canalisation, le champ électrique créé par un conducteur, la poussée d'Archimède sur un sous-marin.`,

    definitions: [
      {
        term: 'Représentation d\'un vecteur',
        def: `Un vecteur $\\vec{u}$ dans le plan est défini par ses composantes dans un repère orthonormé $(O, \\vec{x}, \\vec{y})$ :<br/><br/>
$$\\vec{u} = \\begin{pmatrix} u_x \\\\ u_y \\end{pmatrix} = u_x\\,\\vec{x} + u_y\\,\\vec{y}$$<br/><br/>
La <strong>norme</strong> (ou module) du vecteur est sa longueur :<br/>
$$\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$$<br/><br/>
L'<strong>angle</strong> par rapport à l'axe horizontal : $\\theta = \\arctan\\left(\\dfrac{u_y}{u_x}\\right)$`,
      },
      {
        term: 'Opérations sur les vecteurs',
        def: `<em>Addition (résultante) :</em><br/>
$$\\vec{u} + \\vec{v} = \\begin{pmatrix} u_x + v_x \\\\ u_y + v_y \\end{pmatrix}$$<br/><br/>
<em>Multiplication par un scalaire :</em><br/>
$$k\\,\\vec{u} = \\begin{pmatrix} k\\,u_x \\\\ k\\,u_y \\end{pmatrix}$$<br/><br/>
<em>Vecteur opposé :</em> $-\\vec{u} = \\begin{pmatrix} -u_x \\\\ -u_y \\end{pmatrix}$`,
      },
      {
        term: 'Produit scalaire',
        def: `Le produit scalaire de deux vecteurs $\\vec{u}$ et $\\vec{v}$ est un <em>nombre</em> (pas un vecteur) :<br/><br/>
$$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$$<br/><br/>
où $\\theta$ est l'angle entre les deux vecteurs.<br/><br/>
Propriétés utiles :<br/>
• Si $\\vec{u} \\cdot \\vec{v} = 0$ → les vecteurs sont <strong>perpendiculaires</strong><br/>
• Si $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\|$ → ils sont <strong>colinéaires et de même sens</strong>`,
      },
    ],

    method: {
      title: 'Méthode de calcul vectoriel appliqué',
      steps: [
        `<strong>Décomposer une force en composantes</strong> : une force d'intensité $F$ faisant un angle $\\theta$ avec l'horizontale se décompose en composante horizontale $F_x = F\\cos\\theta$ et composante verticale $F_y = F\\sin\\theta$.`,
        `<strong>Calculer la résultante de plusieurs forces</strong> :<br/>(1) Décomposer chaque force en composantes $(F_{x,i},\\, F_{y,i})$<br/>(2) Additionner : $R_x = \\sum F_{x,i}$, $R_y = \\sum F_{y,i}$<br/>(3) Calculer la norme : $R = \\sqrt{R_x^2 + R_y^2}$<br/>(4) Calculer l'orientation : $\\alpha = \\arctan(R_y / R_x)$`,
        `<strong>Travail d'une force</strong> (produit scalaire appliqué) : le travail de $\\vec{F}$ lors du déplacement $\\vec{d}$ est :<br/>$$W = \\vec{F} \\cdot \\vec{d} = F \\times d \\times \\cos\\theta$$<br/>où $\\theta$ est l'angle entre la force et la direction du déplacement.`,
      ],
    },

    example: {
      statement: 'Trois applications du calcul vectoriel dans les filières BTS techniques.',
      steps: [
        `<strong>Exemple 1 — Mécanique : résultante de deux câbles</strong><br/><br/>Deux câbles soutiennent une charge. Câble 1 : $F_1 = 800\\;\\text{N}$ à 60° de l'horizontal. Câble 2 : $F_2 = 600\\;\\text{N}$ à 120° de l'horizontal.<br/><br/>Composantes :<br/>$F_{1x} = 800\\cos 60° = 400\\;\\text{N}$ ; $F_{1y} = 800\\sin 60° = 693\\;\\text{N}$<br/>$F_{2x} = 600\\cos 120° = -300\\;\\text{N}$ ; $F_{2y} = 600\\sin 120° = 520\\;\\text{N}$<br/><br/>Résultante :<br/>$R_x = 400 + (-300) = 100\\;\\text{N}$ ; $R_y = 693 + 520 = 1213\\;\\text{N}$<br/>$R = \\sqrt{100^2 + 1213^2} \\approx 1217\\;\\text{N}$ à $\\alpha = \\arctan(1213/100) \\approx 85{,}3°$ de l'horizontal`,
        `<strong>Exemple 2 — Électrotechnique : champ électrique résultant</strong><br/><br/>Deux charges créent des champs $\\vec{E_1} = (300,\\; 0)$ V/m et $\\vec{E_2} = (0,\\; 400)$ V/m en un point P.<br/><br/>Champ résultant : $\\vec{E} = (300,\\; 400)$ V/m<br/>Norme : $E = \\sqrt{300^2 + 400^2} = \\sqrt{250000} = 500\\;\\text{V/m}$`,
        `<strong>Exemple 3 — Mécanique des fluides : poussée d'Archimède</strong><br/><br/>Un réservoir est immergé. La poussée d'Archimède $\\vec{\\Pi}$ est verticale vers le haut. Le poids $\\vec{P}$ est vertical vers le bas. Ces deux vecteurs sont colinéaires et opposés.<br/><br/>$\\vec{\\Pi} \\cdot \\vec{P} = \\Pi \\times P \\times \\cos(180°) = -\\Pi \\times P$<br/>Si $\\Pi > P$, le flotteur monte ; si $\\Pi < P$, il coule.`,
      ],
      answer: 'Le calcul vectoriel transforme tout problème de forces orientées en additions algébriques de composantes. La clé : décomposer, additionner composante par composante, puis reconstruire norme et angle.',
    },

    formulas: [
      '<strong>Norme</strong> : $\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$',
      '<strong>Addition</strong> : $\\vec{u} + \\vec{v} = (u_x+v_x,\\; u_y+v_y)$',
      '<strong>Produit scalaire (composantes)</strong> : $\\vec{u}\\cdot\\vec{v} = u_x v_x + u_y v_y$',
      '<strong>Produit scalaire (géométrique)</strong> : $\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta$',
      '<strong>Angle entre deux vecteurs</strong> : $\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$',
      '<strong>Décomposition d\'une force</strong> : $F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta$',
      '<strong>Travail d\'une force</strong> : $W = \\vec{F}\\cdot\\vec{d} = F\\,d\\cos\\theta\\;\\text{(J)}$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Décomposition d\'un vecteur force',
      title: 'Comment décomposer une force selon ses deux axes ?',
      description: 'Un vecteur force $\\vec{F}$ se décompose en une composante <strong>horizontale</strong> $F_x$ et une composante <strong>verticale</strong> $F_y$, à l\'aide de l\'angle $\\theta$ qu\'il forme avec l\'axe horizontal : $F_x = F\\cos\\theta$ et $F_y = F\\sin\\theta$.<br/><br/>Reprend exactement le câble 1 de l\'exemple 1 du cours : $F_1 = 800$ N à $\\theta = 60°$ de l\'horizontale.',
      svg: `
        <svg viewBox="0 0 400 300" role="img" aria-labelledby="vecteurs-decomposition-title vecteurs-decomposition-desc">
          <title id="vecteurs-decomposition-title">Décomposition d'une force en composantes horizontale et verticale</title>
          <desc id="vecteurs-decomposition-desc">Un vecteur force de 800 newtons incline a 60 degres de l'horizontale est trace depuis l'origine ; des pointilles projettent son extremite sur l'axe horizontal, ou l'on lit la composante Fx de 400 newtons, et sur l'axe vertical, ou l'on lit la composante Fy d'environ 693 newtons, formant un rectangle dont la diagonale est le vecteur F.</desc>

          <!-- Axes -->
          <line class="axis" x1="60" y1="250" x2="365" y2="250"></line>
          <polygon class="axis" points="365,250 355,245 355,255"></polygon>
          <line class="axis" x1="60" y1="250" x2="60" y2="30"></line>
          <polygon class="axis" points="60,30 55,40 65,40"></polygon>
          <text class="axis-label" x="372" y="255">x</text>
          <text class="axis-label" x="46" y="26">y</text>
          <text class="label-soft" x="44" y="264">O</text>

          <!-- Composante horizontale Fx (sur l'axe x) -->
          <line class="graph-line" x1="60" y1="250" x2="180" y2="250"></line>
          <circle class="plot-point-alt" cx="180" cy="250" r="4"></circle>
          <text class="annotation-label" x="120" y="270" text-anchor="middle">Fx = 400 N</text>

          <!-- Composante verticale Fy (sur l'axe y) -->
          <line class="graph-line" x1="60" y1="250" x2="60" y2="42"></line>
          <circle class="plot-point-alt" cx="60" cy="42" r="4"></circle>
          <text class="annotation-label" x="50" y="146" text-anchor="end">Fy = 693 N</text>

          <!-- Pointillés de projection (rectangle de décomposition) -->
          <line class="guide-line" x1="180" y1="250" x2="180" y2="42"></line>
          <line class="guide-line" x1="60" y1="42" x2="180" y2="42"></line>

          <!-- Vecteur résultant F -->
          <line class="curve-main" x1="60" y1="250" x2="180" y2="42"></line>
          <polygon class="curve-main" points="180,42 178.5,52.7 171.5,48.7"></polygon>
          <circle class="plot-point" cx="180" cy="42" r="5"></circle>
          <text class="annotation-label" x="150" y="150">F = 800 N</text>

          <!-- Arc de l'angle theta -->
          <path class="focus-line" d="M 88 250 A 28 28 0 0 0 74 226" fill="none"></path>
          <text class="annotation-label" x="94" y="235">θ ≈ 60°</text>

          <text class="label-soft" x="220" y="288" text-anchor="middle">Vérification : F = √(Fx² + Fy²) ≈ √(400² + 693²) ≈ 800 N</text>
        </svg>
      `,
      notes: [
        'La composante <strong>horizontale</strong> se lit en projetant l\'extrémité du vecteur sur l\'axe des $x$ : $F_x = F\\cos\\theta = 800 \\times \\cos 60° = 400$ N.',
        'La composante <strong>verticale</strong> se lit en projetant l\'extrémité du vecteur sur l\'axe des $y$ : $F_y = F\\sin\\theta = 800 \\times \\sin 60° \\approx 692{,}8$ N, arrondi à $693$ N.',
        'On retrouve la <strong>norme</strong> du vecteur avec le théorème de Pythagore : $F = \\sqrt{F_x^2 + F_y^2} = \\sqrt{400^2 + 692{,}8^2} \\approx 800$ N — cohérent avec la valeur de départ.'
      ],
      reading: 'Le vecteur $\\vec{F}$ est la diagonale du rectangle formé par ses deux projections : $F_x$ sur l\'axe horizontal et $F_y$ sur l\'axe vertical. L\'angle $\\theta$ se lit entre le vecteur et l\'axe horizontal.',
      caption: 'Décomposition du vecteur force $\\vec{F_1} = 800$ N à $\\theta = 60°$ (câble 1 de l\'exemple 1 du cours) en ses composantes $F_x = 400$ N et $F_y \\approx 693$ N.'
    },

    recap: [
      'Un vecteur a une direction, un sens et une norme',
      'Norme : $\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$',
      'Addition composante par composante',
      'Produit scalaire : $\\vec{u}\\cdot\\vec{v} = u_x v_x + u_y v_y = \\|u\\|\\|v\\|\\cos\\theta$',
      '$\\vec{u}\\perp\\vec{v}$ ↔ $\\vec{u}\\cdot\\vec{v} = 0$',
      'Décomposition d\'une force en $F\\cos\\theta$ et $F\\sin\\theta$',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Additionner des normes</strong> : $\\|\\vec{F_1} + \\vec{F_2}\\| \\neq \\|\\vec{F_1}\\| + \\|\\vec{F_2}\\|$ en général. On additionne les composantes, pas les normes.<br/><br/>
• <strong>Signe des composantes</strong> : attention au quadrant. Un vecteur orienté à 150° de l'horizontal a $F_x = F\\cos(150°) < 0$.<br/><br/>
• <strong>Produit scalaire ≠ produit de normes</strong> : $\\vec{u}\\cdot\\vec{v} = \\|u\\|\\|v\\|\\cos\\theta$, pas $\\|u\\|\\|v\\|$.<br/><br/>
• <strong>Unités</strong> : le produit scalaire de deux forces (N·N) n'est pas une force. Le travail (N·m = J) est bien un scalaire avec une unité.`,
  },

  quiz: [
    {
      q: 'Un vecteur a pour composantes $(3, 4)$. Sa norme est :',
      options: ['7', '5', '√7', '25'],
      answer: 1,
      correction: '||u|| = √(3² + 4²) = √(9+16) = √25 = 5. Triplet pythagoricien classique : 3-4-5.',
    },
    {
      q: 'Deux vecteurs $\\vec{u} = (1, 0)$ et $\\vec{v} = (0, 1)$ sont :',
      options: ['Colinéaires', 'Perpendiculaires', 'Antiparallèles', 'De même norme et même direction'],
      answer: 1,
      correction: 'u·v = 1×0 + 0×1 = 0 → perpendiculaires. Ce sont les vecteurs unitaires de base.',
    },
    {
      q: 'Le produit scalaire $\\vec{u}\\cdot\\vec{v}$ avec $\\vec{u} = (2, 3)$ et $\\vec{v} = (4, -1)$ vaut :',
      options: ['11', '5', '8', '-11'],
      answer: 1,
      correction: 'u·v = 2×4 + 3×(-1) = 8 - 3 = 5.',
    },
    {
      q: 'Une force de 500 N est orientée à 30° de l\'horizontal. Sa composante verticale vaut :',
      options: ['$500\\cos 30° \\approx 433\\;\\text{N}$', '$500\\sin 30° = 250\\;\\text{N}$', '$500\\tan 30° \\approx 289\\;\\text{N}$', '$250\\sqrt{2}\\;\\text{N}$'],
      answer: 1,
      correction: 'F_y = F·sin(30°) = 500 × 0,5 = 250 N. La composante verticale utilise sin, la composante horizontale utilise cos.',
    },
    {
      q: 'Quelle est la résultante de $\\vec{F_1} = (200, 0)$ N et $\\vec{F_2} = (0, 150)$ N ?',
      options: ['350 N', '250 N', '√(200²+150²) N', '200 N'],
      answer: 1,
      correction: 'R = (200+0, 0+150) = (200, 150) N. Norme : √(200²+150²) = √(40000+22500) = √62500 = 250 N.',
    },
    {
      q: 'Deux forces de 600 N chacune sont opposées (sens contraires). Leur résultante est :',
      options: ['1200 N', '600 N', '0 N', '848 N'],
      answer: 2,
      correction: 'Vecteurs opposés → R = F₁ + F₂ = (600) + (-600) = 0. L\'objet est en équilibre si ces deux forces sont les seules.',
    },
    {
      q: 'Le travail d\'une force $F = 1000\\;\\text{N}$ perpendiculaire au déplacement $d = 5\\;\\text{m}$ est :',
      options: ['5000 J', '1000 J', '0 J', '-5000 J'],
      answer: 2,
      correction: 'W = F·d·cos(90°) = 1000 × 5 × 0 = 0 J. Une force perpendiculaire au déplacement ne produit aucun travail (ex: réaction normale sur un plan horizontal).',
    },
    {
      q: 'La poussée d\'Archimède sur un sous-marin est verticale vers le haut. Son poids est vertical vers le bas. Le produit scalaire $\\vec{\\Pi}\\cdot\\vec{P}$ est :',
      options: ['Positif', 'Nul', 'Négatif', 'Dépend des valeurs'],
      answer: 2,
      correction: 'L\'angle entre Π (vers le haut) et P (vers le bas) est 180°. Donc Π·P = ||Π||·||P||·cos(180°) = -||Π||·||P|| < 0.',
    },
    {
      q: 'Un vecteur de norme 10 est orienté à 45° de l\'axe x. Ses composantes sont :',
      options: ['$(10, 0)$', '$(\\frac{10}{\\sqrt{2}}, \\frac{10}{\\sqrt{2}}) \\approx (7{,}07, 7{,}07)$', '$(5, 5)$', '$(10\\cos 45°, 0)$'],
      answer: 1,
      correction: 'u_x = 10·cos(45°) = 10/√2 ≈ 7,07 et u_y = 10·sin(45°) = 10/√2 ≈ 7,07. Vérification : √(7,07²+7,07²) = √(50+50) = √100 = 10 ✓',
    },
    {
      q: 'Quelle est la condition vectorielle pour qu\'un système de forces soit en équilibre ?',
      options: ['La somme des normes est nulle', 'La somme vectorielle est le vecteur nul', 'Chaque force est perpendiculaire à la suivante', 'Toutes les forces ont la même norme'],
      answer: 1,
      correction: 'Équilibre : ΣF⃗ = 0⃗ (vecteur nul). Cela implique que chaque composante est nulle : ΣF_x = 0 ET ΣF_y = 0.',
    },
    {
      q: 'Un capteur de champ magnétique mesure un champ résultant de composantes $(5,\\;12)$ mT. Quelle est sa norme ?',
      options: ['17 mT', '13 mT', '√7 mT', '169 mT'],
      answer: 1,
      correction: '||u|| = √(5²+12²) = √(25+144) = √169 = 13 mT. Encore un triplet pythagoricien classique (5-12-13), à repérer pour aller plus vite.',
    },
    {
      q: 'Un bras robotisé applique une force $\\vec u = (3, -2)$ N ; un capteur détecte une réaction $\\vec v = (4, 6)$ N. Que peut-on dire de ces deux vecteurs ?',
      options: ['Colinéaires', 'Perpendiculaires', 'De même norme', 'Antiparallèles'],
      answer: 1,
      correction: 'u·v = 3×4 + (-2)×6 = 12 - 12 = 0 → les deux vecteurs sont perpendiculaires, quelle que soit leur norme respective.',
    },
    {
      q: 'Deux convoyeurs orientent leurs vecteurs vitesse selon $\\vec u = (2, 4)$ et $\\vec v = (3, 6)$ (m/s). Ces deux vecteurs sont :',
      options: ['Perpendiculaires', 'Colinéaires de même sens', 'Colinéaires de sens contraires', 'Sans relation particulière'],
      answer: 1,
      correction: 'v = 1,5 × u (chaque composante est multipliée par 1,5) : les vecteurs sont colinéaires et de même sens. On le vérifie aussi par u·v = 6+24 = 30 = ||u||×||v|| ≈ 4,47×6,71.',
    },
    {
      q: 'Une cuve de réacteur chimique est suspendue par trois câbles exerçant $\\vec F_1 = (300, 0)$ N, $\\vec F_2 = (-150, -260)$ N et $\\vec F_3 = (-150, 260)$ N. Le système est-il en équilibre ?',
      options: ['Oui, ΣF⃗ = 0⃗', 'Non, ΣF_x ≠ 0', 'Non, ΣF_y ≠ 0', 'Impossible à déterminer'],
      answer: 0,
      correction: 'ΣF_x = 300 - 150 - 150 = 0 et ΣF_y = 0 - 260 + 260 = 0. Les deux composantes de la résultante sont nulles : le système est bien en équilibre.',
    },
    {
      q: 'Une force de freinage de 400 N s\'oppose totalement (angle de 180°) au déplacement d\'un chariot sur 10 m. Quel est le travail de cette force ?',
      options: ['4000 J', '-4000 J', '0 J', '-400 J'],
      answer: 1,
      correction: 'W = F·d·cos(180°) = 400 × 10 × (-1) = -4000 J. Un travail négatif signifie que la force retire de l\'énergie cinétique au système : c\'est bien le rôle d\'un freinage.',
    },
    {
      q: 'Une force de traction de 250 N, parfaitement alignée avec le déplacement d\'un convoyeur sur 6 m, produit un travail de :',
      options: ['0 J', '1500 J', '250 J', '1506 J'],
      answer: 1,
      correction: 'Quand la force est alignée avec le déplacement, θ = 0° et cos 0° = 1, donc W = F·d = 250 × 6 = 1500 J : le travail est maximal pour une force donnée.',
    },
    {
      q: 'Un écoulement dans une conduite a une vitesse de norme 5 m/s orientée à 200° par rapport à l\'axe horizontal. Quelle est sa composante horizontale (arrondie à 0,1) ?',
      options: ['4,7 m/s', '-4,7 m/s', '-1,7 m/s', '1,7 m/s'],
      answer: 1,
      correction: 'v_x = v·cos(200°) = 5 × (-0,940) ≈ -4,7 m/s. Le signe négatif indique que la composante horizontale est orientée vers l\'arrière (200° est dans le troisième quadrant).',
    },
    {
      q: 'Dans une cellule d\'électrolyse, deux électrodes créent des champs électriques $\\vec E_1 = (150, 0)$ V/m et $\\vec E_2 = (0, 200)$ V/m en un point du bain électrolytique. Quelle est la norme du champ résultant ?',
      options: ['350 V/m', '250 V/m', '300 V/m', '200 V/m'],
      answer: 1,
      correction: 'Le champ résultant est $\\vec E = (150, 200)$ V/m. Norme : √(150²+200²) = √(22500+40000) = √62500 = 250 V/m (triplet 3-4-5 mis à l\'échelle par 50).',
    },
    {
      q: 'Deux poutres d\'une charpente métallique sont modélisées par les vecteurs $\\vec u = (1, 3)$ et $\\vec v = (-3, 1)$. Ces deux poutres sont-elles perpendiculaires ?',
      options: ['Oui, u·v = 0', 'Non, u·v = 6', 'Non, elles sont colinéaires', 'Impossible à dire sans les normes'],
      answer: 0,
      correction: 'u·v = 1×(-3) + 3×1 = -3+3 = 0. Le produit scalaire est nul indépendamment des normes : les deux poutres sont perpendiculaires.',
    },
    {
      q: 'Un vérin amplifie une force représentée par $\\vec u = (2, 3)$ kN d\'un facteur $k = -3$. Quel est le vecteur $k\\vec u$ ?',
      options: ['$(6, 9)$ kN', '$(-6, -9)$ kN', '$(-6, 9)$ kN', '$(-1, 0)$ kN'],
      answer: 1,
      correction: 'k\\vec u = (k u_x,\\; k u_y) = (-3×2,\\; -3×3) = (-6, -9) kN. Le signe négatif de k inverse le sens du vecteur, sa valeur absolue multiplie sa norme.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['resultante', 'travail', 'angle', 'travail_vectoriel', 'norme_directe', 'composante_manquante']);

      if (type === 'resultante') {
        const F1 = pick([500, 600, 800, 1000]);
        const theta1 = pick([30, 45, 60]);
        const F2 = pick([300, 400, 500, 600]);
        const theta2 = pick([90, 120, 135]);
        const F1x = F1 * Math.cos(theta1 * Math.PI / 180);
        const F1y = F1 * Math.sin(theta1 * Math.PI / 180);
        const F2x = F2 * Math.cos(theta2 * Math.PI / 180);
        const F2y = F2 * Math.sin(theta2 * Math.PI / 180);
        const Rx = F1x + F2x;
        const Ry = F1y + F2y;
        const R = Math.sqrt(Rx * Rx + Ry * Ry);
        const context = pick(['point de levage d\'une structure métallique', 'nœud d\'un treillis de charpente', 'point d\'accrochage d\'un équipement suspendu']);
        return {
          statement: `En un ${context}, deux forces s'appliquent :<br/>
$\\vec{F_1}$ : intensité $F_1 = ${F1}\\;\\text{N}$ à $${theta1}°$ de l'horizontale.<br/>
$\\vec{F_2}$ : intensité $F_2 = ${F2}\\;\\text{N}$ à $${theta2}°$ de l'horizontale.<br/><br/>
Calculez la norme de la résultante $R = \\|\\vec{F_1} + \\vec{F_2}\\|$ en N (arrondi à l'unité).`,
          answer: Math.round(R),
          tolerance: 2,
          unit: 'N',
          hint: 'Décomposer chaque force en composantes x et y, additionner, puis calculer la norme.',
          solution: `$F_{1x} = ${F1}\\cos${theta1}° = ${fr(F1x, 1)}\\;\\text{N}$, $F_{1y} = ${F1}\\sin${theta1}° = ${fr(F1y, 1)}\\;\\text{N}$<br/>
$F_{2x} = ${F2}\\cos${theta2}° = ${fr(F2x, 1)}\\;\\text{N}$, $F_{2y} = ${F2}\\sin${theta2}° = ${fr(F2y, 1)}\\;\\text{N}$<br/>
$R_x = ${fr(Rx, 1)}\\;\\text{N}$, $R_y = ${fr(Ry, 1)}\\;\\text{N}$<br/>
$R = \\sqrt{${fr(Rx, 1)}^2 + ${fr(Ry, 1)}^2} \\approx ${Math.round(R)}\\;\\text{N}$`,
        };
      }

      if (type === 'travail') {
        const F = pick([200, 300, 500, 800, 1000]);
        const d = pick([5, 8, 10, 15, 20]);
        const theta = pick([0, 20, 30, 45, 60]);
        const W = F * d * Math.cos(theta * Math.PI / 180);
        const context = pick(['chariot de manutention', 'palet sur une glissière industrielle', 'caisse sur un convoyeur incliné']);
        return {
          statement: `Un ${context} est déplacé sur une distance $d = ${d}\\;\\text{m}$. La force de traction vaut $F = ${F}\\;\\text{N}$ et fait un angle $\\theta = ${theta}°$ avec la direction du déplacement.<br/><br/>
Calculez le travail $W$ de cette force (en J, arrondi à l'unité).`,
          answer: Math.round(W),
          tolerance: 2,
          unit: 'J',
          hint: '$W = F \\times d \\times \\cos\\theta$',
          solution: `$W = ${F} \\times ${d} \\times \\cos${theta}° = ${F} \\times ${d} \\times ${fr(Math.cos(theta * Math.PI/180), 3)} \\approx ${Math.round(W)}\\;\\text{J}$`,
        };
      }

      if (type === 'angle') {
        const u = [pick([1, 2, 3, 4]), pick([1, 2, 3, 4])];
        const v = [pick([1, 2, 3, 4]), pick([-1, -2, 1, 2])];
        const dot = u[0] * v[0] + u[1] * v[1];
        const nu = Math.sqrt(u[0] ** 2 + u[1] ** 2);
        const nv = Math.sqrt(v[0] ** 2 + v[1] ** 2);
        const cosTheta = dot / (nu * nv);
        const theta = Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180 / Math.PI;
        const habillage = pick(['Deux vérins hydrauliques exercent chacun une force modélisée par un vecteur', 'Deux câbles de traction exercent chacun une force modélisée par un vecteur', 'Deux bras de manutention exercent chacun une force modélisée par un vecteur']);
        return {
          statement: `${habillage} dans un plan : $\\vec{u} = (${u[0]}, ${u[1]})$ kN et $\\vec{v} = (${v[0]}, ${v[1]})$ kN.<br/><br/>
Calculez l'angle $\\theta$ entre ces deux vecteurs (en degrés, arrondi à 0,1°).`,
          answer: parseFloat(theta.toFixed(1)),
          tolerance: 0.3,
          unit: '°',
          hint: '$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$',
          solution: `$\\vec{u}\\cdot\\vec{v} = ${u[0]}\\times${v[0]} + ${u[1]}\\times${v[1]} = ${dot}$<br/>
$\\|\\vec{u}\\| = \\sqrt{${u[0]}^2+${u[1]}^2} = ${fr(nu, 3)}$, $\\|\\vec{v}\\| = \\sqrt{${v[0]}^2+${v[1]}^2} = ${fr(nv, 3)}$<br/>
$\\cos\\theta = ${dot} / (${fr(nu, 3)} \\times ${fr(nv, 3)}) = ${fr(cosTheta, 3)}$<br/>
$\\theta = \\arccos(${fr(cosTheta, 3)}) \\approx ${fr(theta, 1)}°$`,
        };
      }

      if (type === 'travail_vectoriel') {
        const Fx = pick([100, 150, 200, 250, 300]);
        const Fy = pick([50, 80, 100, 120, 150]);
        const dx = pick([2, 3, 4, 5]);
        const dy = pick([1, 2, 3]);
        const W = Fx * dx + Fy * dy;
        const context = pick(['treuil de levage', 'chariot de manutention', 'palan électrique']);
        return {
          statement: `Un ${context} exerce une force $\\vec F = (${Fx}, ${Fy})\\;\\text{N}$ lors d'un déplacement $\\vec d = (${dx}, ${dy})\\;\\text{m}$.<br/><br/>Calculez le travail $W = \\vec F \\cdot \\vec d$ (en J).`,
          answer: W,
          tolerance: 1,
          unit: 'J',
          hint: `$\\vec F \\cdot \\vec d = F_x d_x + F_y d_y$`,
          solution: `$W = ${Fx}\\times${dx} + ${Fy}\\times${dy} = ${Fx * dx} + ${Fy * dy} = ${W}\\;\\text{J}$`,
        };
      }

      if (type === 'norme_directe') {
        const scenarios = [
          { context: 'champ magnétique résultant d\'un moteur électrique', unit: 'mT' },
          { context: 'débit vectoriel dans un réseau de tuyauterie industrielle', unit: 'm³/h' },
          { context: 'vecteur vitesse résultant d\'un mobile sur un tapis roulant', unit: 'm/s' },
        ];
        const scenario = pick(scenarios);
        const ux = pick([30, 40, 60, 80, 90, 120]);
        const uy = pick([40, 30, 80, 60, 120, 160]);
        const norme = Math.sqrt(ux * ux + uy * uy);
        return {
          statement: `On mesure un ${scenario.context}, de composantes $\\vec u = (${ux}, ${uy})$ ${scenario.unit}.<br/><br/>Calculez la norme $\\|\\vec u\\|$ (arrondie à 0,1).`,
          answer: parseFloat(norme.toFixed(1)),
          tolerance: 0.2,
          unit: scenario.unit,
          hint: `$\\|\\vec u\\| = \\sqrt{u_x^2+u_y^2}$`,
          solution: `$\\|\\vec u\\| = \\sqrt{${ux}^2+${uy}^2} = \\sqrt{${ux * ux + uy * uy}} \\approx ${fr(norme, 1)}\\;${scenario.unit}$`,
        };
      }

      // composante manquante pour la perpendicularité
      const a = pick([2, 3, 4, 5, 6]);
      const b = pick([2, 3, 4, 5]);
      const m = pick([1, 2, 3, 4]);
      const c = b * m;
      const y = -a * m;
      const context = pick(['support de fixation perpendiculaire à une poutre de charpente', 'bras de levier perpendiculaire à un arbre de transmission', 'renfort perpendiculaire à un tirant de structure métallique']);
      return {
        statement: `Pour qu'un ${context} soit correctement positionné, le vecteur $\\vec v = (${c},\\; y)$ doit être perpendiculaire au vecteur de référence $\\vec u = (${a}, ${b})$.<br/><br/>Calculez la valeur de $y$ qui rend $\\vec u \\perp \\vec v$.`,
        answer: y,
        tolerance: 0.1,
        unit: '',
        hint: `Perpendicularité ⟺ $\\vec u \\cdot \\vec v = 0$, donc $u_x v_x + u_y v_y = 0$.`,
        solution: `$\\vec u \\cdot \\vec v = ${a}\\times ${c} + ${b}\\times y = 0$<br/>$${a * c} + ${b}y = 0 \\Rightarrow y = -\\dfrac{${a * c}}{${b}} = ${y}$`,
      };
    },
  },

  probleme: {
    context: `Une grue de chantier soulève une pièce d'équipement de masse $m = 2{,}5\\;\\text{t}$ ($m = 2500\\;\\text{kg}$) au moyen de deux câbles faisant respectivement des angles $\\alpha = 40°$ et $\\beta = 55°$ avec la verticale.<br/><br/>
La pièce est en équilibre statique sous l'action de trois forces : son poids $\\vec{P}$ (vertical vers le bas), la tension $\\vec{T_1}$ dans le câble 1 et la tension $\\vec{T_2}$ dans le câble 2.`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
      T1 ↖      ↗ T2
      (α=40°)  (β=55°)
           \\ /
            ●  ← pièce d'équipement
            |
            ↓ P = mg
</pre>
<div style="font-family:sans-serif;font-size:0.85rem;color:var(--text-muted);margin-top:8px">
  Angles mesurés depuis la verticale
</div>
</div>`,
    tasks: [
      'Écrire les conditions d\'équilibre statique en x et en y. (Rappel : à l\'équilibre, $\\sum F_x = 0$ et $\\sum F_y = 0$)',
      'Calculer le poids de la pièce $P = mg$ en N. (Prendre $g = 9{,}81\\;\\text{m/s}^2$)',
      'En résolvant le système d\'équations, calculer les tensions $T_1$ et $T_2$ dans chaque câble.',
      'Vérifier que la résultante verticale des deux tensions compense bien le poids.',
    ],
    solutions: [
      `Les angles depuis la verticale donnent les composantes suivantes (câble 1 incliné à gauche, câble 2 à droite) :<br/>
$\\sum F_x = 0$ : $-T_1\\sin\\alpha + T_2\\sin\\beta = 0$ → $T_1\\sin 40° = T_2\\sin 55°$<br/>
$\\sum F_y = 0$ : $T_1\\cos\\alpha + T_2\\cos\\beta - P = 0$ → $T_1\\cos 40° + T_2\\cos 55° = P$`,
      `$P = 2500 \\times 9{,}81 = 24\\,525\\;\\text{N} \\approx 24{,}5\\;\\text{kN}$`,
      `De l'équation en x : $T_1 = T_2 \\times \\dfrac{\\sin 55°}{\\sin 40°} = T_2 \\times \\dfrac{0{,}819}{0{,}643} = 1{,}274\\,T_2$<br/>
Substituer dans l'équation en y :<br/>
$1{,}274\\,T_2 \\times 0{,}766 + T_2 \\times 0{,}574 = 24\\,525$<br/>
$(0{,}976 + 0{,}574)\\,T_2 = 24\\,525$<br/>
$1{,}550\\,T_2 = 24\\,525 \\Rightarrow T_2 \\approx 15\\,823\\;\\text{N} \\approx 15{,}8\\;\\text{kN}$<br/>
$T_1 = 1{,}274 \\times 15\\,823 \\approx 20\\,158\\;\\text{N} \\approx 20{,}2\\;\\text{kN}$`,
      `Vérification verticale :<br/>$T_1\\cos 40° + T_2\\cos 55° = 20158 \\times 0{,}766 + 15823 \\times 0{,}574$<br/>$= 15441 + 9082 = 24\\,523\\;\\text{N} \\approx 24\\,525\\;\\text{N}$ ✓ (erreur < 0,01% due aux arrondis)`,
    ],
    finalAnswer: 'Tension câble 1 : $T_1 \\approx 20{,}2\\;\\text{kN}$. Tension câble 2 : $T_2 \\approx 15{,}8\\;\\text{kN}$.',
  },

  evaluation: {
    title: 'Évaluation — Vecteurs & Géométrie',
    duration: '25 min',
    questions: [
      {
        q: 'Un robot de soudage exerce une force $\\vec{F} = (350, -200)\\;\\text{N}$ sur une pièce. Calculez la norme de cette force et son angle par rapport à l\'horizontal.',
        answer: '$\\|\\vec{F}\\| = \\sqrt{350^2 + 200^2} = \\sqrt{122500+40000} = \\sqrt{162500} \\approx 403\\;\\text{N}$<br/>$\\theta = \\arctan(-200/350) = \\arctan(-0{,}571) \\approx -29{,}7°$ (inclinée vers le bas)',
        points: 3,
      },
      {
        q: 'Trois forces s\'appliquent en un point : $\\vec{F_1} = (400, 0)$ N, $\\vec{F_2} = (-150, 300)$ N, $\\vec{F_3} = (0, -200)$ N. Le système est-il en équilibre ?',
        answer: '$\\sum F_x = 400 - 150 + 0 = 250\\;\\text{N} \\neq 0$ → le système n\'est pas en équilibre. La résultante vaut $(250, 100)$ N, de norme $\\sqrt{250^2+100^2} \\approx 269\\;\\text{N}$.',
        points: 3,
      },
      {
        q: 'Un opérateur tire une palette sur 12 m avec une force de 300 N à 25° de l\'horizontale. Calculez le travail effectué.',
        answer: '$W = F \\times d \\times \\cos\\theta = 300 \\times 12 \\times \\cos 25° = 3600 \\times 0{,}906 \\approx 3263\\;\\text{J} \\approx 3{,}26\\;\\text{kJ}$',
        points: 3,
      },
      {
        q: 'Deux vecteurs tension : $\\vec{T_1} = (0, 800)\\;\\text{N}$ (vers le haut) et $\\vec{T_2} = (600, 0)\\;\\text{N}$ (horizontal). Calculez l\'angle entre ces deux vecteurs.',
        answer: '$\\vec{T_1}\\cdot\\vec{T_2} = 0\\times600 + 800\\times0 = 0$ → les vecteurs sont perpendiculaires, l\'angle est $90°$.',
        points: 3,
      },
    ],
  },
});
