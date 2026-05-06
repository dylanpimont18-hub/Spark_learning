window.MODULES.push({
  id: 'bts-prep-vecteurs',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '↗️',
  title: 'Vecteurs & Géométrie',
  subtitle: 'Coordonnées, norme, addition, produit scalaire',
  keywords: ['vecteur', 'norme', 'produit scalaire', 'composantes', 'résultante', 'force', 'projection', 'angle entre vecteurs'],
  physics: 'En mécanique, électromagnétisme et thermique, les grandeurs physiques ont une direction et un sens : force, vitesse, champ électrique, déplacement. Le calcul vectoriel est l\'outil qui permet de combiner ces grandeurs rigoureusement.',

  cours: {
    intro: `Un vecteur est une grandeur définie par trois informations : sa <strong>direction</strong>, son <strong>sens</strong> et sa <strong>valeur</strong> (ou norme). En BTS technique, on travaille principalement en 2D (plan) et parfois en 3D.<br/><br/>
Exemples concrets : la force exercée par un câble de levage, la vitesse d'un fluide dans une canalisation, le champ électrique créé par un conducteur, la poussée d'Archimède sur un sous-marin.`,

    definitions: `<strong>Représentation d'un vecteur</strong><br/><br/>
Un vecteur $\\vec{u}$ dans le plan est défini par ses composantes dans un repère orthonormé $(O, \\vec{x}, \\vec{y})$ :<br/>
$$\\vec{u} = \\begin{pmatrix} u_x \\\\ u_y \\end{pmatrix} = u_x\\,\\vec{x} + u_y\\,\\vec{y}$$<br/><br/>
La <strong>norme</strong> (ou module) du vecteur est sa longueur :<br/>
$$\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$$<br/><br/>
L'<strong>angle</strong> par rapport à l'axe horizontal :<br/>
$$\\theta = \\arctan\\left(\\frac{u_y}{u_x}\\right)$$<br/><br/>
<strong>Opérations sur les vecteurs</strong><br/><br/>
<em>Addition (résultante) :</em><br/>
$$\\vec{u} + \\vec{v} = \\begin{pmatrix} u_x + v_x \\\\ u_y + v_y \\end{pmatrix}$$<br/><br/>
<em>Multiplication par un scalaire :</em><br/>
$$k\\,\\vec{u} = \\begin{pmatrix} k\\,u_x \\\\ k\\,u_y \\end{pmatrix}$$<br/><br/>
<em>Vecteur opposé :</em> $-\\vec{u} = \\begin{pmatrix} -u_x \\\\ -u_y \\end{pmatrix}$<br/><br/>
<strong>Produit scalaire</strong><br/><br/>
Le produit scalaire de deux vecteurs $\\vec{u}$ et $\\vec{v}$ est un <em>nombre</em> (pas un vecteur) :<br/>
$$\\vec{u} \\cdot \\vec{v} = u_x v_x + u_y v_y = \\|\\vec{u}\\| \\times \\|\\vec{v}\\| \\times \\cos\\theta$$<br/>
où $\\theta$ est l'angle entre les deux vecteurs.<br/><br/>
Propriétés utiles :<br/>
• Si $\\vec{u} \\cdot \\vec{v} = 0$ → les vecteurs sont <strong>perpendiculaires</strong><br/>
• Si $\\vec{u} \\cdot \\vec{v} = \\|\\vec{u}\\| \\times \\|\\vec{v}\\|$ → ils sont <strong>colinéaires et de même sens</strong>`,

    method: `<strong>Décomposer une force en composantes</strong><br/><br/>
C'est l'application la plus courante en BTS technique. Une force d'intensité $F$ faisant un angle $\\theta$ avec l'horizontale se décompose en :<br/>
$$F_x = F\\cos\\theta \\qquad F_y = F\\sin\\theta$$<br/><br/>
<strong>Calculer la résultante de plusieurs forces</strong><br/><br/>
1. Décomposer chaque force en composantes $(F_{x,i}, F_{y,i})$<br/>
2. Additionner composante par composante : $R_x = \\sum F_{x,i}$, $R_y = \\sum F_{y,i}$<br/>
3. Calculer la norme : $R = \\sqrt{R_x^2 + R_y^2}$<br/>
4. Calculer l'angle : $\\alpha = \\arctan(R_y / R_x)$<br/><br/>
<strong>Travail d'une force (produit scalaire)</strong><br/><br/>
En mécanique, le travail d'une force $\\vec{F}$ lors d'un déplacement $\\vec{d}$ est :<br/>
$$W = \\vec{F} \\cdot \\vec{d} = F \\times d \\times \\cos\\theta$$<br/>
où $\\theta$ est l'angle entre la force et le déplacement.`,

    example: `<strong>Exemple 1 — Mécanique : résultante de deux câbles</strong><br/><br/>
Deux câbles soutiennent une charge. Câble 1 : $F_1 = 800\\;\\text{N}$ à 60° de l'horizontal. Câble 2 : $F_2 = 600\\;\\text{N}$ à 120° de l'horizontal.<br/><br/>
Composantes :<br/>
$F_{1x} = 800\\cos 60° = 400\\;\\text{N}$ ; $F_{1y} = 800\\sin 60° = 693\\;\\text{N}$<br/>
$F_{2x} = 600\\cos 120° = -300\\;\\text{N}$ ; $F_{2y} = 600\\sin 120° = 520\\;\\text{N}$<br/><br/>
Résultante :<br/>
$R_x = 400 + (-300) = 100\\;\\text{N}$ ; $R_y = 693 + 520 = 1213\\;\\text{N}$<br/>
$R = \\sqrt{100^2 + 1213^2} = \\sqrt{10000 + 1471369} \\approx 1217\\;\\text{N}$<br/>
$\\alpha = \\arctan(1213/100) \\approx 85{,}3°$ par rapport à l'horizontal.<br/><br/>
<strong>Exemple 2 — Électrotechnique : champ électrique résultant</strong><br/><br/>
Deux charges créent des champs $\\vec{E_1} = (300, 0)$ V/m et $\\vec{E_2} = (0, 400)$ V/m en un point P.<br/>
Champ résultant : $\\vec{E} = (300, 400)$ V/m<br/>
Norme : $E = \\sqrt{300^2 + 400^2} = \\sqrt{90000 + 160000} = \\sqrt{250000} = 500\\;\\text{V/m}$<br/><br/>
<strong>Exemple 3 — Thermique : poussée d'Archimède</strong><br/><br/>
Un réservoir cylindrique de 3 m de long est immergé horizontalement. La poussée d'Archimède $\\vec{\\Pi}$ est verticale vers le haut. Le poids $\\vec{P}$ est vertical vers le bas. Ces deux vecteurs sont colinéaires et opposés.<br/>
$\\vec{\\Pi} \\cdot \\vec{P} = \\Pi \\times P \\times \\cos(180°) = -\\Pi \\times P$<br/>
Si $\\Pi > P$, le flotteur monte ; si $\\Pi < P$, il coule.`,

    formulas: [
      { label: 'Norme', formula: '\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}' },
      { label: 'Addition', formula: '\\vec{u} + \\vec{v} = (u_x+v_x,\\; u_y+v_y)' },
      { label: 'Produit scalaire (composantes)', formula: '\\vec{u}\\cdot\\vec{v} = u_x v_x + u_y v_y' },
      { label: 'Produit scalaire (géométrique)', formula: '\\vec{u}\\cdot\\vec{v} = \\|\\vec{u}\\|\\,\\|\\vec{v}\\|\\cos\\theta' },
      { label: 'Angle entre deux vecteurs', formula: '\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}' },
      { label: 'Décomposition d\'une force', formula: 'F_x = F\\cos\\theta, \\quad F_y = F\\sin\\theta' },
      { label: 'Travail d\'une force', formula: 'W = \\vec{F}\\cdot\\vec{d} = F\\,d\\cos\\theta\\;\\text{(J)}' },
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-family:monospace;font-size:0.88rem;line-height:1.8">
<div style="font-weight:700;margin-bottom:10px;font-family:sans-serif">Décomposition d'un vecteur force</div>
<pre style="margin:0;color:var(--text)">
       y
       │     ↗ F (norme = F, angle θ)
  F_y  │   ↗
       │ ↗ θ
       O──────────── x
            F_x

  F_x = F·cos(θ)   (composante horizontale)
  F_y = F·sin(θ)   (composante verticale)
  F   = √(F_x² + F_y²)  (retour à la norme)
</pre>
</div>`,

    recap: `<strong>Ce qu'il faut retenir</strong><br/><br/>
• Un vecteur a une direction, un sens et une norme<br/>
• Norme : $\\|\\vec{u}\\| = \\sqrt{u_x^2 + u_y^2}$<br/>
• Addition composante par composante<br/>
• Produit scalaire : $\\vec{u}\\cdot\\vec{v} = u_x v_x + u_y v_y = \\|u\\|\\|v\\|\\cos\\theta$<br/>
• $\\vec{u}\\perp\\vec{v}$ ↔ $\\vec{u}\\cdot\\vec{v} = 0$<br/>
• Décomposition d'une force en $F\\cos\\theta$ et $F\\sin\\theta$`,

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
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['resultante', 'travail', 'angle']);

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
          solution: `$F_{1x} = ${F1}\\cos${theta1}° = ${F1x.toFixed(1)}\\;\\text{N}$, $F_{1y} = ${F1}\\sin${theta1}° = ${F1y.toFixed(1)}\\;\\text{N}$<br/>
$F_{2x} = ${F2}\\cos${theta2}° = ${F2x.toFixed(1)}\\;\\text{N}$, $F_{2y} = ${F2}\\sin${theta2}° = ${F2y.toFixed(1)}\\;\\text{N}$<br/>
$R_x = ${Rx.toFixed(1)}\\;\\text{N}$, $R_y = ${Ry.toFixed(1)}\\;\\text{N}$<br/>
$R = \\sqrt{${Rx.toFixed(1)}^2 + ${Ry.toFixed(1)}^2} \\approx ${Math.round(R)}\\;\\text{N}$`,
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
          solution: `$W = ${F} \\times ${d} \\times \\cos${theta}° = ${F} \\times ${d} \\times ${Math.cos(theta * Math.PI/180).toFixed(3)} \\approx ${Math.round(W)}\\;\\text{J}$`,
        };
      }

      // angle entre deux vecteurs
      const u = [pick([1, 2, 3, 4]), pick([1, 2, 3, 4])];
      const v = [pick([1, 2, 3, 4]), pick([-1, -2, 1, 2])];
      const dot = u[0] * v[0] + u[1] * v[1];
      const nu = Math.sqrt(u[0] ** 2 + u[1] ** 2);
      const nv = Math.sqrt(v[0] ** 2 + v[1] ** 2);
      const cosTheta = dot / (nu * nv);
      const theta = Math.acos(Math.max(-1, Math.min(1, cosTheta))) * 180 / Math.PI;
      return {
        statement: `Deux vecteurs force sont définis dans un plan : $\\vec{u} = (${u[0]}, ${u[1]})$ kN et $\\vec{v} = (${v[0]}, ${v[1]})$ kN.<br/><br/>
Calculez l'angle $\\theta$ entre ces deux vecteurs (en degrés, arrondi à 0,1°).`,
        answer: parseFloat(theta.toFixed(1)),
        tolerance: 0.3,
        unit: '°',
        hint: '$\\cos\\theta = \\dfrac{\\vec{u}\\cdot\\vec{v}}{\\|\\vec{u}\\|\\,\\|\\vec{v}\\|}$',
        solution: `$\\vec{u}\\cdot\\vec{v} = ${u[0]}\\times${v[0]} + ${u[1]}\\times${v[1]} = ${dot}$<br/>
$\\|\\vec{u}\\| = \\sqrt{${u[0]}^2+${u[1]}^2} = ${nu.toFixed(3)}$, $\\|\\vec{v}\\| = \\sqrt{${v[0]}^2+${v[1]}^2} = ${nv.toFixed(3)}$<br/>
$\\cos\\theta = ${dot} / (${nu.toFixed(3)} \\times ${nv.toFixed(3)}) = ${cosTheta.toFixed(3)}$<br/>
$\\theta = \\arccos(${cosTheta.toFixed(3)}) \\approx ${theta.toFixed(1)}°$`,
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
        answer: '$W = F \\times d \\times \\cos\\theta = 300 \\times 12 \\times \\cos 25° = 3600 \\times 0{,}906 \\approx 3262\\;\\text{J} \\approx 3{,}26\\;\\text{kJ}$',
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
