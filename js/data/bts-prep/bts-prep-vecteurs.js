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
          <text class="annotation-label" x="62" y="146" text-anchor="end">Fy = 693 N</text>

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

    diagrams: [
      {
        theme: 'maths',
        kicker: 'Somme de deux forces',
        title: 'Deux méthodes, une seule résultante',
        description: 'Additionner deux vecteurs se fait de deux façons équivalentes : la <strong>règle du parallélogramme</strong> (les deux forces partent du même point) et la <strong>mise bout à bout</strong> (relation de Chasles). Les deux donnent exactement le même vecteur résultant.',
        svg: `
          <svg viewBox="0 0 460 272" role="img" aria-labelledby="btsvect-somme-title btsvect-somme-desc">
            <title id="btsvect-somme-title">Somme de deux vecteurs : parallelogramme et mise bout a bout</title>
            <desc id="btsvect-somme-desc">A gauche, deux vecteurs force partant du meme point O forment un parallelogramme dont la diagonale est la resultante R. A droite, les deux memes vecteurs sont places bout a bout : l'extremite du second donne le meme point d'arrivee, donc la meme resultante.</desc>
            <defs>
              <marker id="btsvect-tip-a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--primary)"></path>
              </marker>
              <marker id="btsvect-tip-b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--secondary)"></path>
              </marker>
              <marker id="btsvect-tip-r" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--accent)"></path>
              </marker>
            </defs>

            <text class="axis-label" x="112" y="26" text-anchor="middle">Règle du parallélogramme</text>
            <line class="grid-line" x1="30" y1="210" x2="215" y2="210"></line>
            <line class="grid-line" x1="45" y1="225" x2="45" y2="55"></line>
            <line class="guide-line" x1="165" y1="170" x2="205" y2="90"></line>
            <line class="guide-line" x1="85" y1="130" x2="205" y2="90"></line>
            <line class="curve-main" x1="45" y1="210" x2="165" y2="170" marker-end="url(#btsvect-tip-a)"></line>
            <line class="curve-main" x1="45" y1="210" x2="85" y2="130" stroke="var(--secondary)" marker-end="url(#btsvect-tip-b)"></line>
            <line class="curve-main" x1="45" y1="210" x2="205" y2="90" stroke="var(--accent)" marker-end="url(#btsvect-tip-r)"></line>
            <circle class="plot-point-alt" cx="45" cy="210" r="5"></circle>
            <text class="annotation-label" x="30" y="228">O</text>
            <text class="annotation-label" x="104" y="204">F₁</text>
            <text class="annotation-label" x="48" y="160" fill="var(--secondary)">F₂</text>
            <text class="annotation-label" x="130" y="136" fill="var(--accent)">R</text>

            <text class="axis-label" x="345" y="26" text-anchor="middle">Bout à bout (Chasles)</text>
            <line class="grid-line" x1="265" y1="210" x2="450" y2="210"></line>
            <line class="grid-line" x1="280" y1="225" x2="280" y2="55"></line>
            <line class="curve-main" x1="280" y1="210" x2="400" y2="170" marker-end="url(#btsvect-tip-a)"></line>
            <line class="curve-main" x1="400" y1="170" x2="440" y2="90" stroke="var(--secondary)" marker-end="url(#btsvect-tip-b)"></line>
            <line class="curve-main" x1="280" y1="210" x2="440" y2="90" stroke="var(--accent)" marker-end="url(#btsvect-tip-r)"></line>
            <circle class="plot-point-alt" cx="280" cy="210" r="5"></circle>
            <circle class="plot-point-alt" cx="400" cy="170" r="4"></circle>
            <text class="annotation-label" x="265" y="228">O</text>
            <text class="annotation-label" x="339" y="204">F₁</text>
            <text class="annotation-label" x="442" y="132" text-anchor="end" fill="var(--secondary)">F₂</text>
            <text class="annotation-label" x="322" y="152" fill="var(--accent)">R</text>

            <text class="tick-label" x="30" y="248">En composantes, la règle est la même dans les deux cas :</text>
            <text class="annotation-label" x="30" y="264">Rx = F₁x + F₂x    et    Ry = F₁y + F₂y</text>
          </svg>
        `,
        notes: [
          '<strong>Le calcul est indépendant du dessin :</strong> quelle que soit la méthode graphique, on additionne <strong>composante par composante</strong>. C\'est toujours la voie la plus sûre en examen.',
          '<strong>La norme ne s\'additionne PAS :</strong> $\\|\\vec{R}\\| \\neq \\|\\vec{F_1}\\| + \\|\\vec{F_2}\\|$, sauf si les deux vecteurs sont colinéaires et de même sens. Deux forces de 100 N à 90° donnent $\\|\\vec{R}\\| = 100\\sqrt{2} \\approx 141$ N, pas 200 N.',
          '<strong>Puis on revient aux polaires :</strong> $\\|\\vec{R}\\| = \\sqrt{R_x^2 + R_y^2}$ et $\\theta = \\arctan\\left(\\dfrac{R_y}{R_x}\\right)$ — c\'est le chemin inverse de la décomposition du schéma précédent.'
        ],
        reading: 'Le parallélogramme sert à <strong>comprendre</strong> et à vérifier l\'ordre de grandeur ; le calcul en composantes sert à <strong>répondre</strong>. Fais toujours les deux : le dessin détecte les erreurs de signe que le calcul laisse passer.',
        caption: 'Les deux constructions graphiques de la somme vectorielle, et la règle de calcul en composantes qu\'elles traduisent.'
      },
      {
        theme: 'maths',
        kicker: 'Statique — condition d\'équilibre',
        title: 'Trois forces en équilibre : le triangle se referme',
        description: 'Un solide est en équilibre quand $\\sum \\vec{F} = \\vec{0}$. Graphiquement, cela a une signature imparable : mises bout à bout, les forces forment un <strong>polygone fermé</strong> — on revient exactement au point de départ.',
        svg: `
          <svg viewBox="0 0 460 250" role="img" aria-labelledby="btsvect-equilibre-title btsvect-equilibre-desc">
            <title id="btsvect-equilibre-title">Equilibre de trois forces et triangle des forces ferme</title>
            <desc id="btsvect-equilibre-desc">A gauche, une charge suspendue a deux cables : les tensions T1 et T2 montent en oblique et le poids P descend a la verticale. A droite, les trois memes vecteurs places bout a bout referment exactement un triangle, ce qui traduit la condition somme des forces egale zero.</desc>
            <defs>
              <marker id="btsvect-eq-tip" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--primary)"></path>
              </marker>
              <marker id="btsvect-eq-tip2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--secondary)"></path>
              </marker>
            </defs>

            <text class="axis-label" x="112" y="26" text-anchor="middle">La situation réelle</text>
            <line class="frame-line" x1="25" y1="55" x2="200" y2="55"></line>
            <line class="guide-line" x1="45" y1="55" x2="112" y2="130"></line>
            <line class="guide-line" x1="180" y1="55" x2="112" y2="130"></line>
            <line class="curve-main" x1="112" y1="130" x2="62" y2="74" marker-end="url(#btsvect-eq-tip)"></line>
            <line class="curve-main" x1="112" y1="130" x2="162" y2="74" marker-end="url(#btsvect-eq-tip)"></line>
            <line class="curve-main" x1="112" y1="130" x2="112" y2="205" stroke="var(--secondary)" marker-end="url(#btsvect-eq-tip2)"></line>
            <circle class="plot-point" cx="112" cy="130" r="6"></circle>
            <text class="annotation-label" x="52" y="106">T₁</text>
            <text class="annotation-label" x="160" y="106">T₂</text>
            <text class="annotation-label" x="120" y="182" fill="var(--secondary)">P = mg</text>

            <text class="axis-label" x="345" y="26" text-anchor="middle">Le triangle des forces</text>
            <line class="curve-main" x1="280" y1="200" x2="345" y2="90" marker-end="url(#btsvect-eq-tip)"></line>
            <line class="curve-main" x1="345" y1="90" x2="410" y2="200" marker-end="url(#btsvect-eq-tip)"></line>
            <line class="curve-main" x1="410" y1="200" x2="280" y2="200" stroke="var(--secondary)" marker-end="url(#btsvect-eq-tip2)"></line>
            <circle class="plot-point-alt" cx="280" cy="200" r="6"></circle>
            <circle class="plot-point-alt" cx="345" cy="90" r="4"></circle>
            <circle class="plot-point-alt" cx="410" cy="200" r="4"></circle>
            <text class="annotation-label" x="292" y="140">T₁</text>
            <text class="annotation-label" x="382" y="140">T₂</text>
            <text class="annotation-label" x="345" y="222" text-anchor="middle" fill="var(--secondary)">P</text>
            <text class="tick-label" x="240" y="216">départ = arrivée</text>

            <text class="annotation-label" x="30" y="240">Σ Fx = 0    et    Σ Fy = 0    ⟺    le polygone des forces est fermé</text>
          </svg>
        `,
        notes: [
          '<strong>Deux équations, pas une :</strong> l\'équilibre impose $\\sum F_x = 0$ <em>et</em> $\\sum F_y = 0$. Deux équations permettent de trouver deux inconnues — typiquement les deux tensions de câbles.',
          '<strong>Le poids est toujours vertical vers le bas :</strong> $\\vec{P} = (0\\,;\\, -mg)$. C\'est la seule force dont on connaît la direction sans réfléchir, et donc le meilleur point de départ.',
          '<strong>Contrôle graphique gratuit :</strong> si ton triangle ne se referme pas quand tu reportes tes résultats à l\'échelle, tu as une erreur de signe ou d\'angle. Ce test attrape la majorité des fautes de statique.'
        ],
        reading: 'Le triangle fermé n\'est pas une figure décorative : c\'est <strong>la traduction graphique exacte</strong> de $\\sum \\vec{F} = \\vec{0}$. Un polygone ouvert signifie qu\'il reste une résultante, donc que le solide accélère.',
        caption: 'Équilibre d\'une charge suspendue à deux câbles, et le triangle des forces fermé qui traduit $\\sum \\vec{F} = \\vec{0}$.'
      }
    ],

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
      figure: {
        svg: `
          <svg viewBox="0 0 300 190" role="img" aria-labelledby="qvect-norme-title qvect-norme-desc">
            <title id="qvect-norme-title">Vecteur de composantes 3 et 4 dans un repere</title>
            <desc id="qvect-norme-desc">Un vecteur part de l'origine et rejoint le point de coordonnees 3 en abscisse et 4 en ordonnee. Ses deux composantes forment les cotes d'un triangle rectangle dont le vecteur lui-meme est l'hypotenuse.</desc>
            <line class="grid-line" x1="40" y1="130" x2="260" y2="130"></line>
            <line class="grid-line" x1="40" y1="100" x2="260" y2="100"></line>
            <line class="grid-line" x1="40" y1="70" x2="260" y2="70"></line>
            <line class="grid-line" x1="40" y1="40" x2="260" y2="40"></line>
            <line class="grid-line" x1="80" y1="20" x2="80" y2="160"></line>
            <line class="grid-line" x1="120" y1="20" x2="120" y2="160"></line>
            <line class="grid-line" x1="160" y1="20" x2="160" y2="160"></line>
            <line class="axis" x1="40" y1="160" x2="270" y2="160"></line>
            <line class="axis" x1="40" y1="175" x2="40" y2="20"></line>
            <line class="graph-line" x1="40" y1="160" x2="160" y2="160" stroke="var(--secondary)"></line>
            <line class="graph-line" x1="160" y1="160" x2="160" y2="40" stroke="var(--accent)"></line>
            <line class="curve-main" x1="40" y1="160" x2="160" y2="40"></line>
            <polygon points="160,40 148,56 164,58" fill="var(--primary)"></polygon>
            <circle class="plot-point" cx="160" cy="40" r="6"></circle>
            <text class="annotation-label" x="100" y="178" text-anchor="middle" fill="var(--secondary)">3</text>
            <text class="annotation-label" x="172" y="104" fill="var(--accent)">4</text>
            <text class="annotation-label" x="76" y="76">‖u‖ = ?</text>
            <text class="tick-label" x="170" y="34">(3 ; 4)</text>
          </svg>
        `,
        caption: 'La norme est l\'hypoténuse du triangle formé par les deux composantes.'
      },
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
      figure: {
        svg: `
          <svg viewBox="0 0 320 190" role="img" aria-labelledby="qvect-result-title qvect-result-desc">
            <title id="qvect-result-title">Resultante de deux forces perpendiculaires</title>
            <desc id="qvect-result-desc">Deux forces perpendiculaires partent du meme point : une force horizontale de 200 newtons et une force verticale de 150 newtons. Le parallelogramme qu'elles forment est un rectangle, dont la diagonale est la resultante cherchee.</desc>
            <line class="axis" x1="50" y1="155" x2="290" y2="155"></line>
            <line class="axis" x1="50" y1="170" x2="50" y2="25"></line>
            <line class="guide-line" x1="210" y1="155" x2="210" y2="65"></line>
            <line class="guide-line" x1="50" y1="65" x2="210" y2="65"></line>
            <line class="curve-main" x1="50" y1="155" x2="210" y2="155"></line>
            <polygon points="210,155 196,149 196,161" fill="var(--primary)"></polygon>
            <line class="curve-main" x1="50" y1="155" x2="50" y2="65" stroke="var(--secondary)"></line>
            <polygon points="50,65 44,79 56,79" fill="var(--secondary)"></polygon>
            <line class="curve-main" x1="50" y1="155" x2="210" y2="65" stroke="var(--accent)"></line>
            <polygon points="210,65 194,68 202,80" fill="var(--accent)"></polygon>
            <circle class="plot-point-alt" cx="50" cy="155" r="5"></circle>
            <text class="annotation-label" x="130" y="176" text-anchor="middle">F₁ = 200 N</text>
            <text class="annotation-label" x="10" y="112" fill="var(--secondary)">F₂</text>
            <text class="tick-label" x="6" y="128" fill="var(--secondary)">150 N</text>
            <text class="annotation-label" x="120" y="98" fill="var(--accent)">R = ?</text>
          </svg>
        `,
        caption: 'Forces perpendiculaires : la résultante est la diagonale du rectangle, jamais la somme des normes.'
      },
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
      figure: {
        svg: `
          <svg viewBox="0 0 340 160" role="img" aria-labelledby="qvect-travail-title qvect-travail-desc">
            <title id="qvect-travail-title">Force perpendiculaire au deplacement</title>
            <desc id="qvect-travail-desc">Un objet se deplace horizontalement sur cinq metres tandis qu'une force de mille newtons s'exerce verticalement, donc perpendiculairement au deplacement. Aucune projection de la force ne se trouve dans la direction du mouvement.</desc>
            <line class="axis" x1="30" y1="120" x2="310" y2="120"></line>
            <rect x="70" y="92" width="40" height="26" rx="4" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 42%, var(--border))"></rect>
            <line class="curve-main" x1="115" y1="105" x2="255" y2="105" stroke="var(--secondary)"></line>
            <polygon points="265,105 247,98 247,112" fill="var(--secondary)"></polygon>
            <text class="annotation-label" x="185" y="98" text-anchor="middle" fill="var(--secondary)">déplacement d = 5 m</text>
            <line class="curve-main" x1="90" y1="88" x2="90" y2="40"></line>
            <polygon points="90,30 83,48 97,48" fill="var(--primary)"></polygon>
            <text class="annotation-label" x="100" y="46">F = 1000 N</text>
            <path class="axis" fill="none" d="M 104 105 L 104 91 L 118 91"></path>
            <text class="tick-label" x="118" y="80">90°</text>
            <text class="annotation-label" x="30" y="150">W = F·d·cos 90° — que vaut cos 90° ?</text>
          </svg>
        `,
        caption: 'Une force perpendiculaire n\'a aucune composante dans la direction du mouvement.'
      },
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
    figure: {
      svg: `
        <svg viewBox="0 0 440 250" role="img" aria-labelledby="pb-vecteurs-title pb-vecteurs-desc">
          <title id="pb-vecteurs-title">Charge de 2,5 tonnes suspendue a deux cables</title>
          <desc id="pb-vecteurs-desc">Une piece de 2500 kilogrammes est suspendue a deux cables fixes a une poutre. Le cable de gauche fait 40 degres avec la verticale, celui de droite 55 degres. Les deux tensions tirent vers le haut en oblique, tandis que le poids tire verticalement vers le bas. Une verticale en pointilles sert de reference pour les deux angles.</desc>

          <line class="frame-line" x1="40" y1="35" x2="400" y2="35" stroke-width="4"></line>
          <line class="grid-line" x1="60" y1="35" x2="80" y2="20"></line>
          <line class="grid-line" x1="110" y1="35" x2="130" y2="20"></line>
          <line class="grid-line" x1="160" y1="35" x2="180" y2="20"></line>
          <line class="grid-line" x1="210" y1="35" x2="230" y2="20"></line>
          <line class="grid-line" x1="260" y1="35" x2="280" y2="20"></line>
          <line class="grid-line" x1="310" y1="35" x2="330" y2="20"></line>

          <line class="curve-main" x1="120" y1="35" x2="220" y2="155"></line>
          <line class="curve-main" x1="330" y1="35" x2="220" y2="155"></line>
          <line class="guide-line" x1="220" y1="35" x2="220" y2="235"></line>

          <line class="graph-line" x1="220" y1="155" x2="160" y2="83" stroke="var(--primary)"></line>
          <polygon points="160,83 178,88 168,98" fill="var(--primary)"></polygon>
          <line class="graph-line" x1="220" y1="155" x2="286" y2="83" stroke="var(--primary)"></line>
          <polygon points="286,83 278,100 268,89" fill="var(--primary)"></polygon>
          <line class="graph-line" x1="220" y1="155" x2="220" y2="225" stroke="var(--secondary)"></line>
          <polygon points="220,235 212,217 228,217" fill="var(--secondary)"></polygon>

          <path class="axis" fill="none" d="M 220 105 A 50 50 0 0 0 188 118"></path>
          <text class="annotation-label" x="180" y="128">α = 40°</text>
          <path class="axis" fill="none" d="M 220 95 A 60 60 0 0 1 268 118"></path>
          <text class="annotation-label" x="256" y="130">β = 55°</text>

          <text class="annotation-label" x="130" y="76">T₁</text>
          <text class="annotation-label" x="296" y="76">T₂</text>
          <text class="annotation-label" x="232" y="205" fill="var(--secondary)">P = mg</text>
          <text class="tick-label" x="232" y="222" fill="var(--secondary)">= 2500 × 9,81</text>

          <circle class="plot-point" cx="220" cy="155" r="9"></circle>
          <text class="tick-label" x="120" y="164" text-anchor="end">pièce m = 2,5 t</text>

          <text class="tick-label" x="40" y="246">Angles mesurés depuis la VERTICALE</text>
        </svg>
      `,
      caption: 'Équilibre statique à trois forces : deux tensions obliques et un poids vertical, angles repérés depuis la verticale.'
    },
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
        statement: 'Un robot de soudage exerce une force $\\vec{F} = (350\\,;\\, -200)\\;\\text{N}$ sur une pièce. Calculer la <strong>norme</strong> de cette force (en N, arrondie à l\'unité).',
        figure: {
          svg: `
            <svg viewBox="0 0 320 180" role="img" aria-labelledby="ev-vect-title ev-vect-desc">
              <title id="ev-vect-title">Force de composantes 350 et moins 200 newtons</title>
              <desc id="ev-vect-desc">Un vecteur force part de l'origine, avance de 350 newtons horizontalement et descend de 200 newtons verticalement. Ses deux composantes forment un triangle rectangle dont la norme cherchee est l'hypotenuse.</desc>
              <line class="axis" x1="40" y1="60" x2="290" y2="60"></line>
              <line class="axis" x1="55" y1="20" x2="55" y2="160"></line>
              <line class="graph-line" x1="55" y1="60" x2="235" y2="60" stroke="var(--secondary)"></line>
              <line class="graph-line" x1="235" y1="60" x2="235" y2="140" stroke="var(--accent)"></line>
              <line class="curve-main" x1="55" y1="60" x2="235" y2="140"></line>
              <polygon points="235,140 219,130 227,124" fill="var(--primary)"></polygon>
              <circle class="plot-point" cx="235" cy="140" r="6"></circle>
              <text class="annotation-label" x="145" y="52" text-anchor="middle" fill="var(--secondary)">350 N</text>
              <text class="annotation-label" x="246" y="104" fill="var(--accent)">−200 N</text>
              <text class="annotation-label" x="110" y="112">‖F‖ = ?</text>
              <text class="tick-label" x="40" y="172">Le signe donne le sens, pas la longueur.</text>
            </svg>
          `,
          caption: 'Les composantes forment les deux côtés de l\'angle droit ; la norme est l\'hypoténuse.'
        },
        type: 'numeric',
        answer: 403,
        tolerance: 2,
        unit: 'N',
        points: 3,
        correction: '$\\|\\vec{F}\\| = \\sqrt{350^2 + (-200)^2} = \\sqrt{122\\,500 + 40\\,000} = \\sqrt{162\\,500} \\approx 403\\;\\text{N}$.<br/><br/>Son orientation : $\\theta = \\arctan\\left(\\dfrac{-200}{350}\\right) \\approx -29{,}7°$ — la force est inclinée <strong>vers le bas</strong>.',
      },
      {
        statement: 'Trois forces s\'appliquent en un même point : $\\vec{F_1} = (400\\,;\\, 0)$ N, $\\vec{F_2} = (-150\\,;\\, 300)$ N et $\\vec{F_3} = (0\\,;\\, -200)$ N. Le système est-il en équilibre ?',
        type: 'multiple-choice',
        options: [
          'Non : $\\sum \\vec{F} = (250\\,;\\, 100)$ N, de norme $\\approx 269$ N',
          'Oui : les trois forces se compensent exactement',
          'Non : $\\sum \\vec{F} = (550\\,;\\, 500)$ N',
          'Impossible à dire sans connaître les points d\'application',
        ],
        answer: 0,
        points: 3,
        correction: 'On somme composante par composante.<br/><br/>$\\sum F_x = 400 - 150 + 0 = 250\\;\\text{N}$<br/>$\\sum F_y = 0 + 300 - 200 = 100\\;\\text{N}$<br/><br/>La résultante n\'est pas nulle : $\\|\\sum\\vec{F}\\| = \\sqrt{250^2 + 100^2} \\approx 269\\;\\text{N}$. Le système <strong>n\'est pas en équilibre</strong> — il faudrait une quatrième force $(-250\\,;\\, -100)$ N pour l\'équilibrer.',
      },
      {
        statement: 'Un opérateur tire une palette sur $d = 12$ m avec une force de $300$ N inclinée à $25°$ au-dessus de l\'horizontale. Calculer le travail effectué (en J, arrondi à l\'unité).',
        type: 'numeric',
        answer: 3263,
        tolerance: 20,
        unit: 'J',
        points: 3,
        correction: 'Seule la composante <strong>parallèle au déplacement</strong> travaille :<br/><br/>$W = F \\times d \\times \\cos\\theta = 300 \\times 12 \\times \\cos 25°$<br/>$W = 3600 \\times 0{,}906 \\approx 3263\\;\\text{J} \\approx 3{,}26\\;\\text{kJ}$.<br/><br/>C\'est exactement le produit scalaire $\\vec{F} \\cdot \\vec{d}$.',
      },
      {
        statement: 'Deux tensions s\'exercent sur un même anneau : $\\vec{T_1} = (0\\,;\\, 800)\\;\\text{N}$ (verticale) et $\\vec{T_2} = (600\\,;\\, 0)\\;\\text{N}$ (horizontale). Calculer l\'angle entre ces deux vecteurs (en degrés).',
        type: 'numeric',
        answer: 90,
        tolerance: 1,
        unit: '°',
        points: 3,
        correction: 'Le produit scalaire vaut $\\vec{T_1}\\cdot\\vec{T_2} = 0\\times600 + 800\\times0 = 0$.<br/><br/>Un produit scalaire nul entre deux vecteurs non nuls signifie qu\'ils sont <strong>perpendiculaires</strong> : l\'angle est de $90°$.<br/><br/>C\'est le test le plus rapide pour vérifier une perpendicularité sans tracer quoi que ce soit.',
      },
    ],
  },
});
