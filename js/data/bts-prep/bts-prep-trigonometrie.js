window.MODULES.push({
  id: 'bts-prep-trigonometrie',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '📐',
  title: 'Trigonométrie',
  subtitle: 'Sin, cos, tan — du triangle aux phénomènes alternatifs',
  keywords: ['sinus', 'cosinus', 'tangente', 'angle', 'triangle rectangle', 'hypoténuse', 'cercle trigonométrique', 'radian', 'déphasage'],
  physics: 'La trigonométrie est le langage commun de l\'électricité alternative, de la mécanique des structures et de la topographie. Dès que l\'on travaille avec des signaux AC, des pentes, des forces obliques ou des composantes, elle est incontournable.',

  cours: {
    intro: `En BTS technique, la trigonométrie n'est pas un exercice abstrait : c'est l'outil qui permet de calculer un angle de phase entre tension et courant en électrotechnique, une pente de canalisation en BTP, un effort sur un plan incliné en mécanique, ou encore la résolution vectorielle d'une force de traction.<br/><br/>
Ce module couvre les trois fonctions essentielles dans le triangle rectangle, les valeurs remarquables à connaître de mémoire, et l'extension au cercle trigonométrique pour les angles quelconques (nécessaire pour les signaux sinusoïdaux).`,

    definitions: [
      {
        term: 'Le triangle rectangle',
        def: `Dans un triangle rectangle, par rapport à un angle $\\theta$ (différent de 90°) :<br/><br/>
$$\\sin\\theta = \\frac{\\text{côté opposé}}{\\text{hypoténuse}} \\qquad \\cos\\theta = \\frac{\\text{côté adjacent}}{\\text{hypoténuse}} \\qquad \\tan\\theta = \\frac{\\text{côté opposé}}{\\text{côté adjacent}}$$<br/><br/>
Moyen mnémotechnique : <strong>SOH-CAH-TOA</strong> (Sin = Opposé/Hypoténuse, Cos = Adjacent/Hypoténuse, Tan = Opposé/Adjacent).<br/><br/>
Relation fondamentale (identité trigonométrique) : $\\cos^2\\theta + \\sin^2\\theta = 1$`,
      },
      {
        term: 'Degrés et radians',
        def: `Les ingénieurs utilisent les deux systèmes. La conversion est :<br/><br/>
$$\\theta_{\\text{rad}} = \\theta_{°} \\times \\frac{\\pi}{180} \\qquad \\theta_{°} = \\theta_{\\text{rad}} \\times \\frac{180}{\\pi}$$<br/><br/>
Un tour complet = 360° = $2\\pi$ rad. Un angle droit = 90° = $\\dfrac{\\pi}{2}$ rad.`,
      },
      {
        term: 'Valeurs remarquables',
        def: `Ces valeurs sont à connaître absolument :<br/><br/>
| Angle | $\\sin$ | $\\cos$ | $\\tan$ |
|-------|--------|--------|--------|
| 0° | 0 | 1 | 0 |
| 30° | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}} \\approx 0{,}577$ |
| 45° | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | 1 |
| 60° | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3} \\approx 1{,}732$ |
| 90° | 1 | 0 | indéfinie |`,
      },
      {
        term: 'Le cercle trigonométrique',
        def: `Pour les angles supérieurs à 90° (signaux AC, rotations), on utilise le cercle de rayon 1 centré à l'origine. Un point sur ce cercle a pour coordonnées $M = (\\cos\\theta,\\; \\sin\\theta)$.<br/><br/>
Les fonctions sin et cos sont périodiques de période $2\\pi$ (360°). C'est la base de la représentation des signaux sinusoïdaux : $u(t) = U_{\\max} \\sin(\\omega t + \\varphi)$.`,
      },
    ],

    method: {
      title: 'Résoudre un triangle rectangle',
      steps: [
        'Identifier l\'angle de référence $\\theta$ dans le triangle (l\'angle dont on connaît la valeur ou qu\'on cherche, différent de 90°).',
        'Nommer les trois côtés par rapport à $\\theta$ : <strong>opposé</strong> (face à $\\theta$), <strong>adjacent</strong> (touche $\\theta$ sans être l\'hypoténuse), <strong>hypoténuse</strong> (face à l\'angle droit, toujours le plus long).',
        'Choisir la bonne fonction selon les éléments connus et inconnus : <strong>SOH</strong> si l\'hypoténuse et l\'opposé sont impliqués, <strong>CAH</strong> si l\'hypoténuse et l\'adjacent sont impliqués, <strong>TOA</strong> si les deux côtés non-hypoténuse sont impliqués.',
        'Isoler l\'inconnu algébriquement et calculer numériquement.',
        'Pour trouver un <strong>angle inconnu</strong> à partir de deux côtés connus, utiliser les fonctions réciproques : $\\arcsin$, $\\arccos$ ou $\\arctan$ (notées $\\sin^{-1}$, $\\cos^{-1}$, $\\tan^{-1}$ sur les calculatrices).',
      ],
    },

    example: {
      statement: 'Trois applications de la trigonométrie dans les filières BTS techniques.',
      steps: [
        `<strong>Exemple 1 — Électrotechnique (angle de phase)</strong><br/><br/>Un circuit RL présente une résistance $R = 60\\;\\Omega$ et une réactance $X_L = 80\\;\\Omega$.<br/>L'impédance vaut $Z = \\sqrt{R^2 + X_L^2} = \\sqrt{3600 + 6400} = \\sqrt{10000} = 100\\;\\Omega$.<br/><br/>L'angle de déphasage est :<br/>$$\\varphi = \\arctan\\left(\\frac{X_L}{R}\\right) = \\arctan\\left(\\frac{80}{60}\\right) = \\arctan(1{,}333) \\approx 53{,}1°$$<br/><br/>Vérification : $\\cos\\varphi = \\dfrac{R}{Z} = \\dfrac{60}{100} = 0{,}6$ → $\\varphi = \\arccos(0{,}6) \\approx 53{,}1°$ ✓`,
        `<strong>Exemple 2 — BTP (pente d'une canalisation)</strong><br/><br/>Une canalisation d'assainissement doit être posée avec une pente de 2 % sur une longueur horizontale de 25 m.<br/><br/>L'angle par rapport à l'horizontale est :<br/>$$\\theta = \\arctan(0{,}02) \\approx 1{,}15°$$<br/><br/>La dénivellation verticale est :<br/>$$h = 25 \\times \\tan(1{,}15°) = 25 \\times 0{,}02 = 0{,}5\\;\\text{m} = 50\\;\\text{cm}$$`,
        `<strong>Exemple 3 — Mécanique (effort sur plan incliné)</strong><br/><br/>Une pièce de masse $m = 200\\;\\text{kg}$ est posée sur un plan incliné à $\\theta = 30°$.<br/>Le poids $P = mg = 200 \\times 9{,}81 = 1962\\;\\text{N}$.<br/><br/>Composante parallèle au plan (tend à faire glisser) : $P_{//} = P\\sin 30° = 1962 \\times 0{,}5 = 981\\;\\text{N}$<br/>Composante perpendiculaire (réaction normale) : $P_\\perp = P\\cos 30° = 1962 \\times 0{,}866 = 1699\\;\\text{N}$`,
      ],
      answer: 'La trigonométrie permet de passer d\'une description angulaire à des composantes quantifiables. SOH-CAH-TOA et les fonctions réciproques arcsin, arccos, arctan sont les outils universels.',
    },

    formulas: [
      '<strong>SOH</strong> : $\\sin\\theta = \\dfrac{\\text{opposé}}{\\text{hypoténuse}}$',
      '<strong>CAH</strong> : $\\cos\\theta = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$',
      '<strong>TOA</strong> : $\\tan\\theta = \\dfrac{\\text{opposé}}{\\text{adjacent}} = \\dfrac{\\sin\\theta}{\\cos\\theta}$',
      '<strong>Identité fondamentale</strong> : $\\cos^2\\theta + \\sin^2\\theta = 1$',
      '<strong>Pythagore</strong> : $a^2 + b^2 = c^2 \\quad (c=\\text{hypoténuse})$',
      '<strong>Conversion °→rad</strong> : $\\theta_{\\text{rad}} = \\theta_{°} \\times \\dfrac{\\pi}{180}$',
      '<strong>Signal sinusoïdal</strong> : $u(t) = U_{\\max}\\sin(\\omega t + \\varphi)$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Triangle rectangle',
      title: 'SOH-CAH-TOA appliqué à un cas concret : le circuit RL',
      description: 'Le même triangle abstrait décrit n\'importe quelle situation BTS : ici, le déphasage φ d\'un circuit RL est un angle comme un autre, avec sa propre hypoténuse et ses deux côtés.',
      svg: `
        <svg viewBox="0 0 460 316" role="img" aria-labelledby="btstrig-graph-title btstrig-graph-desc">
          <title id="btstrig-graph-title">Triangle rectangle SOH-CAH-TOA et triangle des impedances</title>
          <desc id="btstrig-graph-desc">A gauche, triangle rectangle abstrait avec angle theta, cote oppose, cote adjacent et hypotenuse, et les formules sinus cosinus tangente. A droite, le meme triangle applique a un circuit RL avec R = 60 ohms, X_L = 80 ohms, Z = 100 ohms et phi environ 53,1 degres.</desc>

          <rect x="16" y="12" width="137" height="38" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
          <text class="annotation-label" x="26" y="27">SOH</text>
          <text class="tick-label" x="26" y="43">sin θ = opp / hyp</text>

          <rect x="161" y="12" width="137" height="38" rx="10" fill="color-mix(in srgb, var(--accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 38%, var(--border))"></rect>
          <text class="annotation-label" x="171" y="27">CAH</text>
          <text class="tick-label" x="171" y="43">cos θ = adj / hyp</text>

          <rect x="306" y="12" width="138" height="38" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 34%, var(--border))"></rect>
          <text class="annotation-label" x="316" y="27">TOA</text>
          <text class="tick-label" x="316" y="43">tan θ = opp / adj</text>

          <text class="tick-label label-soft" x="40" y="78">Cas général</text>
          <polygon points="60,230 230,230 60,90" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
          <line class="frame-line" x1="60" y1="230" x2="60" y2="90"></line>
          <line class="frame-line" x1="60" y1="230" x2="230" y2="230"></line>
          <line class="curve-main" x1="230" y1="230" x2="60" y2="90"></line>
          <path class="axis" d="M60 216 L74 216 L74 230"></path>
          <line class="guide-line" x1="206" y1="230" x2="211" y2="215"></line>
          <text class="annotation-label" x="192" y="221">θ</text>
          <circle class="plot-point-alt" cx="60" cy="230" r="5"></circle>
          <circle class="plot-point-alt" cx="60" cy="90" r="5"></circle>
          <circle class="plot-point" cx="230" cy="230" r="5"></circle>
          <text class="annotation-label" x="117" y="246">adjacent</text>
          <text class="annotation-label" x="12" y="164">opposé</text>
          <text class="annotation-label" x="145" y="133">hypoténuse</text>
          <line class="guide-line" x1="150" y1="128" x2="130" y2="148"></line>

          <text class="tick-label label-soft" x="296" y="128">Application : circuit RL</text>
          <polygon points="300,230 430,230 300,140" fill="color-mix(in srgb, var(--secondary) 8%, transparent)" stroke="none"></polygon>
          <line class="frame-line" x1="300" y1="230" x2="300" y2="140"></line>
          <line class="frame-line" x1="300" y1="230" x2="430" y2="230"></line>
          <line class="curve-main" x1="430" y1="230" x2="300" y2="140"></line>
          <path class="axis" d="M300 216 L314 216 L314 230"></path>
          <line class="guide-line" x1="408" y1="230" x2="412" y2="217"></line>
          <text class="annotation-label" x="393" y="224">φ</text>
          <circle class="plot-point-alt" cx="300" cy="230" r="5"></circle>
          <circle class="plot-point-alt" cx="300" cy="140" r="5"></circle>
          <circle class="plot-point" cx="430" cy="230" r="5"></circle>
          <text class="annotation-label" x="358" y="246">R</text>
          <text class="annotation-label" x="266" y="189">XL</text>
          <text class="annotation-label" x="374" y="161">Z</text>

          <rect x="16" y="258" width="428" height="50" rx="10" fill="color-mix(in srgb, var(--diagram-accent) 6%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 20%, var(--border))"></rect>
          <text class="tick-label" x="26" y="272">Exemple du cours — circuit RL : R = 60 Ω, X_L = 80 Ω</text>
          <text class="tick-label" x="26" y="288">Z = √(60² + 80²) = √10000 = 100 Ω</text>
          <text class="tick-label" x="26" y="304">φ = arctan(80/60) ≈ 53,1°  (vérif. : cos φ = 60/100 = 0,6)</text>
        </svg>
      `,
      notes: [
        'Le côté adjacent à θ (ou φ) touche l\'angle sans être l\'hypoténuse ; le côté opposé ne touche jamais l\'angle ; l\'hypoténuse est toujours en face de l\'angle droit.',
        'Le triangle des impédances est exactement le même objet géométrique : $R$ joue le rôle de l\'adjacent, $X_L$ celui de l\'opposé, $Z$ celui de l\'hypoténuse.',
        'Vérification indépendante : $60^2+80^2=3600+6400=10000=100^2$ (Pythagore), et $\\arctan(80/60)=\\arctan(1{,}333)\\approx 53{,}1°$ — cohérent avec $\\arccos(0{,}6)\\approx 53{,}1°$.'
      ],
      reading: 'Avant toute application (électrotechnique, BTP, mécanique), reviens à ce triangle générique : identifie l\'angle droit, puis l\'angle de référence, puis nomme les trois côtés.',
      caption: 'Triangle SOH-CAH-TOA de référence et son application directe au calcul de déphasage d\'un circuit RL (exemple du cours).'
    },

    diagrams: [
      {
        theme: 'maths',
        kicker: 'Cercle trigonométrique',
        title: 'Au-delà de 90° : cos et sin deviennent des coordonnées',
        description: 'Le triangle rectangle ne sait traiter que des angles entre 0° et 90°. Le cercle de rayon 1 lève cette limite : pour <strong>n\'importe quel angle</strong>, $\\cos\\theta$ est l\'abscisse du point $M$ et $\\sin\\theta$ son ordonnée. C\'est ce qui rend possible la description des signaux alternatifs.',
        svg: `
          <svg viewBox="0 0 420 320" role="img" aria-labelledby="btstrig-cercle-title btstrig-cercle-desc">
            <title id="btstrig-cercle-title">Cercle trigonometrique de rayon 1</title>
            <desc id="btstrig-cercle-desc">Un cercle de rayon 1 centre sur l'origine d'un repere. Un point M place a environ 52 degres est relie au centre par un rayon. Sa projection sur l'axe horizontal donne cosinus theta, sa projection sur l'axe vertical donne sinus theta. Les quatre quadrants sont annotes avec les signes de cosinus et sinus, et les angles remarquables 0, 90, 180 et 270 degres sont reperes sur le cercle.</desc>

            <line class="grid-line" x1="70" y1="160" x2="340" y2="160"></line>
            <line class="grid-line" x1="200" y1="30" x2="200" y2="290"></line>
            <circle cx="200" cy="160" r="105" fill="none" class="frame-line"></circle>

            <line class="guide-line" x1="265" y1="77" x2="265" y2="160"></line>
            <line class="guide-line" x1="265" y1="77" x2="200" y2="77"></line>
            <line class="curve-main" x1="200" y1="160" x2="265" y2="77"></line>
            <circle class="plot-point" cx="265" cy="77" r="6"></circle>
            <text class="annotation-label" x="274" y="70">M (cos θ ; sin θ)</text>

            <line class="graph-line" x1="200" y1="168" x2="265" y2="168" stroke="var(--secondary)"></line>
            <text class="annotation-label" x="232" y="184" text-anchor="middle" fill="var(--secondary)">cos θ</text>
            <line class="graph-line" x1="192" y1="160" x2="192" y2="77" stroke="var(--accent)"></line>
            <text class="annotation-label" x="150" y="118" fill="var(--accent)">sin θ</text>

            <path class="axis" d="M 232 160 A 32 32 0 0 0 220 141" fill="none"></path>
            <text class="annotation-label" x="228" y="140">θ</text>
            <text class="tick-label" x="244" y="138">rayon = 1</text>

            <circle class="plot-point-alt" cx="305" cy="160" r="4"></circle>
            <circle class="plot-point-alt" cx="200" cy="55" r="4"></circle>
            <circle class="plot-point-alt" cx="95" cy="160" r="4"></circle>
            <circle class="plot-point-alt" cx="200" cy="265" r="4"></circle>
            <text class="tick-label" x="312" y="176">0° / 360°</text>
            <text class="tick-label" x="207" y="48">90° (π/2)</text>
            <text class="tick-label" x="52" y="176">180° (π)</text>
            <text class="tick-label" x="207" y="280">270°</text>

            <text class="tick-label label-soft" x="300" y="92">I : cos + / sin +</text>
            <text class="tick-label label-soft" x="100" y="92" text-anchor="end">II : cos − / sin +</text>
            <text class="tick-label label-soft" x="100" y="232" text-anchor="end">III : cos − / sin −</text>
            <text class="tick-label label-soft" x="300" y="232">IV : cos + / sin −</text>

            <text class="axis-label" x="348" y="164">x</text>
            <text class="axis-label" x="205" y="26">y</text>
          </svg>
        `,
        notes: [
          '<strong>La lecture change de nature :</strong> $\\cos\\theta$ et $\\sin\\theta$ ne sont plus des rapports de longueurs, mais les <strong>coordonnées</strong> du point $M$ sur le cercle de rayon 1.',
          '<strong>Le signe se lit directement :</strong> dans le quadrant II (angles entre 90° et 180°), le point est à gauche de l\'axe vertical, donc $\\cos\\theta$ est négatif alors que $\\sin\\theta$ reste positif.',
          '<strong>Pythagore réapparaît :</strong> le rayon vaut 1, donc $\\cos^2\\theta + \\sin^2\\theta = 1^2 = 1$. L\'identité fondamentale n\'est rien d\'autre que le théorème de Pythagore appliqué à ce cercle.'
        ],
        reading: 'Quand un exercice donne un angle supérieur à 90° (rotation d\'arbre, phase d\'un signal, position angulaire), abandonne le triangle et reviens au cercle : c\'est le seul outil qui gère les signes correctement.',
        caption: 'Cercle trigonométrique de rayon 1 : cos et sin lus comme coordonnées, avec le signe de chaque fonction par quadrant.'
      },
      {
        theme: 'maths',
        kicker: 'Électrotechnique — régime alternatif',
        title: 'Deux sinusoïdes déphasées : ce que φ signifie vraiment',
        description: 'En monophasé, la tension et le courant sont deux sinusoïdes de <strong>même fréquence</strong> mais décalées dans le temps. Ce décalage est le <strong>déphasage φ</strong>, et c\'est lui qui apparaît dans $P = U I \\cos\\varphi$.',
        svg: `
          <svg viewBox="0 0 470 282" role="img" aria-labelledby="btstrig-sinus-title btstrig-sinus-desc">
            <title id="btstrig-sinus-title">Tension et courant sinusoidaux dephases</title>
            <desc id="btstrig-sinus-desc">Deux courbes sinusoidales de meme periode tracees sur un axe des temps. La courbe de tension u de t atteint son maximum avant celle du courant i de t : le courant est en retard d'un angle phi de 60 degres, materialise par une double fleche entre les deux maximums. La periode T correspondant a 20 millisecondes est reperee sous l'axe.</desc>

            <line class="grid-line" x1="50" y1="94" x2="440" y2="94"></line>
            <line class="grid-line" x1="50" y1="196" x2="440" y2="196"></line>
            <line class="axis" x1="50" y1="145" x2="440" y2="145"></line>
            <line class="axis" x1="60" y1="70" x2="60" y2="215"></line>

            <path class="curve-main" fill="none" d="M 60 145 L 70 127 L 80 112 L 90 100 L 100 94 L 110 94 L 120 100 L 130 112 L 140 127 L 150 145 L 160 163 L 170 178 L 180 190 L 190 196 L 200 196 L 210 190 L 220 178 L 230 163 L 240 145 L 250 127 L 260 112 L 270 100 L 280 94 L 290 94 L 300 100 L 310 112 L 320 127 L 330 145 L 340 163 L 350 178 L 360 190 L 370 196 L 380 196 L 390 190 L 400 178 L 410 163 L 420 145"></path>
            <path class="curve-main" fill="none" stroke="var(--secondary)" d="M 60 177 L 70 169 L 80 158 L 90 145 L 100 132 L 110 121 L 120 113 L 130 108 L 140 108 L 150 113 L 160 121 L 170 132 L 180 145 L 190 158 L 200 169 L 210 177 L 220 182 L 230 182 L 240 177 L 250 169 L 260 158 L 270 145 L 280 132 L 290 121 L 300 113 L 310 108 L 320 108 L 330 113 L 340 121 L 350 132 L 360 145 L 370 158 L 380 169 L 390 177 L 400 182 L 410 182 L 420 177"></path>

            <line class="guide-line" x1="105" y1="94" x2="105" y2="215"></line>
            <line class="guide-line" x1="135" y1="108" x2="135" y2="215"></line>
            <line class="graph-line" x1="105" y1="210" x2="135" y2="210" stroke="var(--accent)"></line>
            <circle class="plot-point" cx="105" cy="94" r="5"></circle>
            <circle class="plot-point" cx="135" cy="108" r="5" fill="var(--secondary)"></circle>
            <text class="annotation-label" x="120" y="228" text-anchor="middle" fill="var(--accent)">φ = 60°</text>

            <text class="annotation-label" x="112" y="86">u(t)</text>
            <text class="annotation-label" x="146" y="104" fill="var(--secondary)">i(t) — en retard</text>
            <text class="tick-label" x="20" y="98">+U max</text>
            <text class="tick-label" x="20" y="200">− U max</text>
            <text class="tick-label" x="428" y="140">t</text>

            <line class="frame-line" x1="60" y1="252" x2="240" y2="252"></line>
            <line class="frame-line" x1="60" y1="246" x2="60" y2="258"></line>
            <line class="frame-line" x1="240" y1="246" x2="240" y2="258"></line>
            <text class="tick-label" x="150" y="274" text-anchor="middle">T = 20 ms (50 Hz)</text>
          </svg>
        `,
        notes: [
          '<strong>Même période, origines différentes :</strong> les deux courbes bouclent en $T = 20$ ms (50 Hz). Seul l\'instant où elles passent par leur maximum diffère.',
          '<strong>φ est un angle, pas une durée :</strong> le décalage de 60° correspond à $\\dfrac{60}{360} \\times 20 \\approx 3{,}3$ ms. On raisonne en angle parce que la conversion dépend de la fréquence.',
          '<strong>D\'où vient $\\cos\\varphi$ :</strong> plus le décalage est grand, plus $\\cos\\varphi$ diminue, et moins la puissance active $P = U I \\cos\\varphi$ est grande pour un même courant. Un $\\cos\\varphi$ dégradé fait circuler du courant qui ne produit aucun travail utile.'
        ],
        reading: 'Retiens le lien entre les deux schémas : le <strong>triangle des impédances</strong> ci-dessus et ce <strong>décalage temporel</strong> décrivent le même angle φ. L\'un est la vue géométrique, l\'autre la vue temporelle.',
        caption: 'Tension et courant sinusoïdaux de même fréquence, décalés de φ = 60° — la lecture temporelle du déphasage.'
      }
    ],

    recap: [
      '<strong>SOH-CAH-TOA</strong> : le triptyque à ne jamais oublier',
      '$\\cos^2\\theta + \\sin^2\\theta = 1$ : l\'identité fondamentale (toujours vraie)',
      'Valeurs clés : sin 30° = 0,5 — cos 60° = 0,5 — tan 45° = 1 — sin 90° = 1',
      'Pour trouver un angle : utiliser $\\arctan$, $\\arcsin$ ou $\\arccos$',
      'Les signaux AC utilisent le cercle trigo : $u(t) = U_{\\max}\\sin(\\omega t + \\varphi)$',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Degrés vs radians sur la calculatrice</strong> : vérifier systématiquement le mode. $\\sin(90)$ en radians ≠ $\\sin(90°)$. En radians, $\\sin(\\pi/2) = 1$.<br/><br/>
• <strong>Confondre opposé et adjacent</strong> : l'opposé est le côté en face de l'angle, l'adjacent est le côté qui "touche" l'angle (sans être l'hypoténuse).<br/><br/>
• <strong>Arctan ne donne pas toujours l'angle voulu</strong> : $\\arctan$ renvoie une valeur entre -90° et 90°. Pour les angles dans d'autres quadrants, il faut analyser le signe des composantes.<br/><br/>
• <strong>Pente en % ≠ angle</strong> : une pente de 100% correspond à 45°, pas à 90°. Pente % = $\\tan\\theta \\times 100$, donc $\\theta = \\arctan(\\text{pente}/100)$.`,
  },

  quiz: [
    {
      q: 'Dans un triangle rectangle, sin θ est égal à :',
      options: ['adjacent / hypoténuse', 'opposé / adjacent', 'opposé / hypoténuse', 'hypoténuse / opposé'],
      answer: 2,
      correction: 'SOH : Sin = Opposé / Hypoténuse. À ne pas confondre avec cos (adjacent/hypoténuse).',
    },
    {
      q: 'Quelle est la valeur de cos 60° ?',
      options: ['$\\frac{\\sqrt{3}}{2} \\approx 0{,}87$', '$\\frac{1}{2} = 0{,}5$', '$\\frac{\\sqrt{2}}{2} \\approx 0{,}71$', '1'],
      answer: 1,
      correction: 'cos 60° = 1/2 = 0,5. Astuce : cos 60° = sin 30° (angles complémentaires). Valeur à connaître par cœur.',
    },
    {
      q: 'Dans un circuit RL, l\'angle de déphasage φ vérifie tan φ = X_L / R. Si X_L = R, quel est φ ?',
      options: ['0°', '30°', '45°', '90°'],
      answer: 2,
      correction: 'tan φ = 1 ⟹ φ = arctan(1) = 45°. C\'est la valeur remarquable de la tangente.',
    },
    {
      q: 'Un signal sinusoïdal a une amplitude maximale de 325 V et une fréquence de 50 Hz. Sa pulsation ω vaut :',
      options: ['50 rad/s', '$50\\pi$ rad/s', '$100\\pi$ rad/s', '$200\\pi$ rad/s'],
      answer: 2,
      correction: 'ω = 2πf = 2π × 50 = 100π ≈ 314,2 rad/s. Attention à ne pas oublier le facteur 2 dans $\\omega = 2\\pi f$ (piège de la réponse B, $50\\pi$) ni à ne pas le doubler en trop (piège de la réponse D, $200\\pi$, qui correspondrait à $f = 100$ Hz).',
    },
    {
      q: 'Quelle identité trigonométrique est toujours vraie, pour tout angle θ ?',
      options: ['sin θ + cos θ = 1', 'sin²θ + cos²θ = 1', 'tan θ = sin θ + cos θ', 'sin²θ = cos²θ'],
      answer: 1,
      correction: 'sin²θ + cos²θ = 1 est l\'identité fondamentale. Elle découle du théorème de Pythagore appliqué au cercle de rayon 1.',
    },
    {
      q: 'Pour convertir 90° en radians, on calcule :',
      options: ['$90 \\times 180 / \\pi$', '$90 / \\pi$', '$90 \\times \\pi / 180$', '$\\pi / 90$'],
      answer: 2,
      correction: '90° × π/180 = π/2 ≈ 1,571 rad. Règle : °→rad, on multiplie par π/180.',
    },
    {
      q: 'Une force F = 500 N est inclinée à 30° de l\'horizontal. Sa composante horizontale est :',
      options: ['$500 \\times \\sin 30° = 250\\;\\text{N}$', '$500 \\times \\cos 30° \\approx 433\\;\\text{N}$', '$500 \\times \\tan 30° \\approx 289\\;\\text{N}$', '$500 / \\cos 30° \\approx 577\\;\\text{N}$'],
      answer: 1,
      correction: 'La composante sur l\'axe horizontal : F_x = F cos 30° = 500 × √3/2 ≈ 433 N. La composante sur l\'axe vertical : F_y = F sin 30° = 250 N.',
    },
    {
      q: 'Une canalisation d\'eau pluviale a une pente de 1 %. Quel est l\'angle approximatif avec l\'horizontale ?',
      options: ['1°', '0,57°', '5,7°', '10°'],
      answer: 1,
      correction: 'θ = arctan(0,01) ≈ 0,573°. Pour de petits angles, tan θ ≈ θ en radians ≈ pente. Une pente de 1% ≈ 0,57°.',
    },
    {
      q: 'Dans un triangle rectangle, si l\'hypoténuse vaut 10 m et un angle θ = 37°, le côté adjacent vaut :',
      options: ['6,02 m', '7,99 m', '6,03 m', '8,00 m'],
      answer: 1,
      correction: 'adjacent = hypoténuse × cos 37° = 10 × 0,7986 ≈ 7,99 m. (sin 37° ≈ 0,602 → opposé ≈ 6,02 m)',
    },
    {
      q: 'Un panneau solaire est incliné à 35° de l\'horizontal. L\'irradiance normale au panneau est 900 W/m². L\'irradiance reçue sur la surface horizontale est :',
      options: ['900 × sin 35° ≈ 516 W/m²', '900 × cos 35° ≈ 737 W/m²', '900 × tan 35° ≈ 630 W/m²', '900 W/m²'],
      answer: 1,
      correction: 'La projection sur l\'horizontale utilise cos : I_horiz = I × cos(inclinaison) = 900 × cos 35° ≈ 737 W/m². L\'angle entre la normale au panneau incliné et l\'horizontale est 35°.',
    },
    {
      q: 'La tangente d\'un angle peut être négative. Dans quel quadrant sin θ > 0 ET cos θ < 0 ?',
      options: ['1er quadrant (0°–90°)', '2e quadrant (90°–180°)', '3e quadrant (180°–270°)', '4e quadrant (270°–360°)'],
      answer: 1,
      correction: 'Dans le 2e quadrant (90°–180°), sin est positif (axe y > 0) et cos est négatif (axe x < 0). Donc tan = sin/cos < 0 dans ce quadrant.',
    },
    {
      q: 'Un technicien mesure une distance horizontale de 15 m et une hauteur de 8 m. L\'angle de la pente est :',
      options: ['arcsin(8/15) ≈ 32,2°', 'arctan(8/15) ≈ 28,1°', 'arccos(8/15) ≈ 57,8°', 'arctan(15/8) ≈ 61,9°'],
      answer: 1,
      correction: 'tan θ = opposé / adjacent = hauteur / distance horizontale = 8/15. Donc θ = arctan(8/15) ≈ 28,1°. arcsin donnerait le bon résultat seulement si 15 était l\'hypoténuse.',
    },
    {
      q: 'Un circuit RC (résistance + condensateur) présente $R = 100\\;\\Omega$ et une réactance capacitive $X_C = 100\\;\\Omega$. L\'angle de déphasage φ vaut :',
      options: ['0°', '30°', '45°', '90°'],
      answer: 2,
      correction: 'tan φ = X_C / R = 100/100 = 1, donc φ = arctan(1) = 45°. Le même raisonnement que pour un circuit RL s\'applique : seul le rôle de la réactance change de nature.',
    },
    {
      q: 'Un moteur asynchrone affiche un facteur de puissance cos φ = 0,8. Quel est l\'angle de déphasage φ (arrondi au degré) ?',
      options: ['80°', '37°', '53°', '20°'],
      answer: 1,
      correction: 'φ = arccos(0,8) ≈ 36,9° ≈ 37°. Le facteur de puissance cos φ est directement lu sur la plaque signalétique du moteur, l\'angle s\'obtient par la fonction réciproque arccos.',
    },
    {
      q: 'Un toit a une pente de 30 %. Quel est l\'angle θ approximatif avec l\'horizontale ?',
      figure: {
        svg: `
          <svg viewBox="0 0 340 150" role="img" aria-labelledby="qtrig-pente-title qtrig-pente-desc">
            <title id="qtrig-pente-title">Pente de toit exprimee en pourcentage</title>
            <desc id="qtrig-pente-desc">Un triangle rectangle representant un pan de toit : la base horizontale mesure 100 unites, la hauteur verticale 30 unites, et l'angle theta se situe entre la base et le rampant.</desc>
            <polygon points="40,115 280,115 280,43" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="axis" x1="40" y1="115" x2="280" y2="115"></line>
            <line class="frame-line" x1="280" y1="115" x2="280" y2="43"></line>
            <line class="curve-main" x1="40" y1="115" x2="280" y2="43"></line>
            <path class="axis" fill="none" d="M 80 115 A 40 40 0 0 0 78 103"></path>
            <text class="annotation-label" x="88" y="110">θ</text>
            <text class="annotation-label" x="160" y="134" text-anchor="middle">100 (horizontal)</text>
            <text class="annotation-label" x="292" y="83">30</text>
            <text class="tick-label" x="120" y="60">pente 30 % = 30/100</text>
          </svg>
        `,
        caption: 'Une pente en % est un rapport hauteur / distance horizontale — donc une tangente, pas un angle.'
      },
      options: ['30°', '16,7°', '73,3°', '60°'],
      answer: 1,
      correction: 'θ = arctan(0,30) ≈ 16,7°. Attention à ne pas confondre le pourcentage de pente avec la valeur de l\'angle en degrés : ce sont deux façons différentes d\'exprimer une inclinaison.',
    },
    {
      q: 'Une caisse de $m = 150\\;\\text{kg}$ repose sur un plan incliné à $\\theta = 20°$. Quelle est la composante du poids perpendiculaire au plan (arrondie à l\'unité) ?',
      figure: {
        svg: `
          <svg viewBox="0 0 360 190" role="img" aria-labelledby="qtrig-plan-title qtrig-plan-desc">
            <title id="qtrig-plan-title">Caisse sur un plan incline et decomposition du poids</title>
            <desc id="qtrig-plan-desc">Une caisse posee sur un plan incline a 20 degres. Son poids vertical se decompose en une composante parallele au plan, qui tend a la faire glisser, et une composante perpendiculaire au plan, qui la plaque contre la surface.</desc>
            <line class="axis" x1="30" y1="150" x2="330" y2="150"></line>
            <line class="frame-line" x1="30" y1="150" x2="300" y2="52" stroke-width="4"></line>
            <path class="axis" fill="none" d="M 78 150 A 48 48 0 0 0 75 133"></path>
            <text class="annotation-label" x="86" y="145">20°</text>
            <rect x="150" y="79" width="46" height="30" rx="4" transform="rotate(-20 173 94)" fill="color-mix(in srgb, var(--diagram-accent) 18%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 42%, var(--border))"></rect>
            <line class="graph-line" x1="173" y1="94" x2="173" y2="168" stroke="var(--secondary)"></line>
            <polygon points="173,178 166,160 180,160" fill="var(--secondary)"></polygon>
            <text class="annotation-label" x="180" y="174" fill="var(--secondary)">P = mg</text>
            <line class="graph-line" x1="173" y1="94" x2="198" y2="163" stroke="var(--accent)"></line>
            <polygon points="200,170 190,155 205,152" fill="var(--accent)"></polygon>
            <text class="annotation-label" x="206" y="140" fill="var(--accent)">P⊥ = P cos θ</text>
            <line class="graph-line" x1="173" y1="94" x2="120" y2="122" stroke="var(--primary)"></line>
            <polygon points="112,126 124,113 128,127" fill="var(--primary)"></polygon>
            <text class="annotation-label" x="34" y="118">P∥ = P sin θ</text>
          </svg>
        `,
        caption: 'Sur un plan incliné, le poids se scinde en P∥ (qui fait glisser) et P⊥ (qui plaque).'
      },
      options: ['503 N', '1383 N', '1472 N', '1550 N'],
      answer: 1,
      correction: 'P = mg = 150 × 9,81 ≈ 1472 N. La composante perpendiculaire est P⊥ = P cos θ = 1472 × cos 20° ≈ 1383 N (à distinguer de la composante parallèle P sin 20° ≈ 503 N, qui tend à faire glisser la caisse).',
    },
    {
      q: 'Une gaine de ventilation de 6 m de longueur traverse un faux-plafond avec une inclinaison de 10°. Quelle est la dénivellation verticale (arrondie à 0,1 m) ?',
      options: ['0,6 m', '1,0 m', '3,0 m', '5,9 m'],
      answer: 1,
      correction: 'Ici, la longueur de la gaine (6 m) est l\'hypoténuse. La dénivellation est le côté opposé : h = 6 × sin 10° ≈ 1,0 m.',
    },
    {
      q: 'Une conduite forcée de centrale hydroélectrique mesure 500 m de long et forme un angle de 40° avec l\'horizontale. Quelle est la hauteur de chute (arrondie à l\'unité) ?',
      options: ['500 m', '383 m', '321 m', '420 m'],
      answer: 2,
      correction: 'La conduite est l\'hypoténuse : la hauteur de chute est le côté opposé, h = 500 × sin 40° ≈ 321 m.',
    },
    {
      q: 'Une conduite de vidange gravitaire d\'un réacteur chimique a une pente de 3 %. Sur 12 m de longueur horizontale, la dénivellation est :',
      options: ['3,6 cm', '36 cm', '25 cm', '40 cm'],
      answer: 1,
      correction: 'Pour une pente en %, tan θ = pente/100. Ici h = 12 × 0,03 = 0,36 m = 36 cm.',
    },
    {
      q: 'Un tas de poudre chimique dans un silo forme un angle de repos de 35° avec l\'horizontale. Le rayon de sa base est 2 m. Quelle est la hauteur du tas (arrondie à 0,1 m) ?',
      options: ['0,7 m', '1,4 m', '2,8 m', '1,15 m'],
      answer: 1,
      correction: 'h = r × tan θ = 2 × tan 35° ≈ 1,4 m. L\'angle de repos décrit la pente maximale que peut adopter un tas de matière granulaire sans s\'effondrer.',
    },
    {
      q: 'Une échelle de 5 m est appuyée contre un mur, sa base étant à 3 m du pied du mur. Quel angle fait-elle avec le sol (arrondi au degré) ?',
      figure: {
        svg: `
          <svg viewBox="0 0 320 190" role="img" aria-labelledby="qtrig-echelle-title qtrig-echelle-desc">
            <title id="qtrig-echelle-title">Echelle appuyee contre un mur</title>
            <desc id="qtrig-echelle-desc">Une echelle de 5 metres, qui joue le role d'hypotenuse, s'appuie contre un mur vertical. Sa base est posee a 3 metres du pied du mur, ce qui constitue le cote adjacent a l'angle cherche au sol. La hauteur atteinte sur le mur est inconnue.</desc>
            <line class="axis" x1="20" y1="155" x2="300" y2="155"></line>
            <line class="axis" x1="240" y1="155" x2="240" y2="25" stroke-width="4"></line>
            <line class="curve-main" x1="90" y1="155" x2="240" y2="45"></line>
            <line class="grid-line" x1="90" y1="160" x2="240" y2="160"></line>
            <path class="axis" fill="none" d="M 128 155 A 38 38 0 0 0 122 138"></path>
            <text class="annotation-label" x="134" y="150">θ</text>
            <text class="annotation-label" x="165" y="176" text-anchor="middle">3 m (adjacent)</text>
            <text class="annotation-label" x="140" y="92">5 m (hypoténuse)</text>
            <text class="tick-label" x="252" y="100">mur</text>
            <circle class="plot-point-alt" cx="90" cy="155" r="5"></circle>
            <circle class="plot-point" cx="240" cy="45" r="5"></circle>
          </svg>
        `,
        caption: 'Hypoténuse et côté adjacent connus : c\'est le cosinus qu\'il faut inverser, pas la tangente.'
      },
      options: ['37°', '53°', '30°', '60°'],
      answer: 1,
      correction: 'Le sol, le mur et l\'échelle forment un triangle rectangle où l\'échelle est l\'hypoténuse (5 m) et la distance au mur est le côté adjacent à l\'angle au sol (3 m). θ = arccos(3/5) ≈ 53°.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['phase', 'incline', 'composante', 'pente_angle', 'perpendiculaire', 'signal']);

      if (type === 'phase') {
        const R = pick([30, 40, 50, 60, 80]);
        const X = pick([40, 30, 120, 80, 60]);
        const Z = Math.sqrt(R * R + X * X);
        const phi = Math.atan(X / R) * 180 / Math.PI;
        const filiere = pick(['réseau triphasé industriel', 'variateur de vitesse', 'transformateur de puissance']);
        return {
          statement: `Dans un ${filiere}, un circuit RL présente une résistance $R = ${R}\\;\\Omega$ et une réactance inductance $X_L = ${X}\\;\\Omega$.<br/><br/>Calculez l'impédance $Z$ (en Ω) et l'angle de déphasage $\\varphi$ (en degrés, arrondi à 0,1°).`,
          answer: parseFloat(phi.toFixed(1)),
          tolerance: 0.2,
          unit: '°',
          hint: `Commencer par $Z = \\sqrt{R^2 + X_L^2}$, puis $\\varphi = \\arctan(X_L / R)$.`,
          solution: `$Z = \\sqrt{${R}^2 + ${X}^2} = \\sqrt{${R*R + X*X}} = ${fr(Z, 1)}\\;\\Omega$<br/>$\\varphi = \\arctan\\left(\\dfrac{${X}}{${R}}\\right) = \\arctan(${fr(X/R, 3)}) \\approx ${fr(phi, 1)}°$`,
        };
      }

      if (type === 'incline') {
        const theta = pick([15, 20, 25, 30]);
        const mass = pick([150, 200, 250, 300, 400]);
        const g = 9.81;
        const P = mass * g;
        const Ppar = P * Math.sin(theta * Math.PI / 180);
        const context = pick(['plan incliné de montage d\'équipements industriels', 'rampe d\'accès à un bâtiment industriel', 'glissière de convoyeur inclinée']);
        return {
          statement: `Une charge de $m = ${mass}\\;\\text{kg}$ est posée sur un ${context} incliné à $\\theta = ${theta}°$.<br/><br/>Calculez la composante du poids parallèle au plan incliné $P_{//}$ (en N, arrondi à l'unité).`,
          answer: Math.round(Ppar),
          tolerance: 2,
          unit: 'N',
          hint: `$P = mg$, puis $P_{//} = P \\sin\\theta$.`,
          solution: `$P = ${mass} \\times 9{,}81 = ${P.toFixed(0)}\\;\\text{N}$<br/>$P_{//} = P\\sin${theta}° = ${P.toFixed(0)} \\times ${fr(Math.sin(theta * Math.PI/180), 3)} \\approx ${Math.round(Ppar)}\\;\\text{N}$`,
        };
      }

      if (type === 'composante') {
        const F = pick([200, 300, 400, 500, 600, 800]);
        const theta = pick([20, 25, 30, 35, 40, 45, 60]);
        const Fx = F * Math.cos(theta * Math.PI / 180);
        const Fy = F * Math.sin(theta * Math.PI / 180);
        const context = pick(['câble de levage', 'bielle de compresseur', 'bras de robot industriel']);
        const comp = pick(['horizontale', 'verticale']);
        const answer = comp === 'horizontale' ? Fx : Fy;
        const trig = comp === 'horizontale' ? `\\cos${theta}°` : `\\sin${theta}°`;
        return {
          statement: `Un ${context} exerce une force $F = ${F}\\;\\text{N}$ orientée à $${theta}°$ de l'horizontale.<br/><br/>Calculez la composante <strong>${comp}</strong> de cette force (en N, arrondi à l'unité).`,
          answer: Math.round(answer),
          tolerance: 2,
          unit: 'N',
          hint: `Composante horizontale = $F\\cos\\theta$, verticale = $F\\sin\\theta$.`,
          solution: `$F_{${comp === 'horizontale' ? 'x' : 'y'}} = F \\times ${trig} = ${F} \\times ${fr((comp === 'horizontale' ? Math.cos : Math.sin)(theta * Math.PI/180), 3)} \\approx ${Math.round(answer)}\\;\\text{N}$`,
        };
      }

      if (type === 'pente_angle') {
        const distHoriz = pick([10, 15, 20, 25, 30, 50]);
        const denivele = pick([1, 1.5, 2, 3, 4]);
        const theta = Math.atan(denivele / distHoriz) * 180 / Math.PI;
        const context = pick(['conduite de vidange gravitaire d\'un atelier de chimie', 'canalisation d\'évacuation d\'une station de traitement des eaux', 'gaine de câbles d\'une galerie technique']);
        return {
          statement: `Une ${context} présente une dénivellation de $${fr(denivele)}\\;\\text{m}$ sur une longueur horizontale de $${distHoriz}\\;\\text{m}$.<br/><br/>Calculez l'angle $\\theta$ de la pente par rapport à l'horizontale (en degrés, arrondi à 0,1°).`,
          answer: parseFloat(theta.toFixed(1)),
          tolerance: 0.2,
          unit: '°',
          hint: `$\\tan\\theta = \\dfrac{\\text{dénivellation}}{\\text{longueur horizontale}}$, puis $\\theta = \\arctan(...)$.`,
          solution: `$\\tan\\theta = \\dfrac{${fr(denivele)}}{${distHoriz}} = ${fr(denivele / distHoriz, 3)}$<br/>$\\theta = \\arctan(${fr(denivele / distHoriz, 3)}) \\approx ${fr(theta, 1)}°$`,
        };
      }

      if (type === 'perpendiculaire') {
        const theta = pick([15, 20, 25, 30, 35, 40]);
        const mass = pick([100, 150, 200, 250, 300]);
        const P = mass * 9.81;
        const Pperp = P * Math.cos(theta * Math.PI / 180);
        const context = pick(['plan incliné de manutention en atelier', 'plan incliné d\'un quai de chargement', 'plan incliné de stockage de cuves industrielles']);
        return {
          statement: `Une charge de $m = ${mass}\\;\\text{kg}$ est posée sur un ${context} à $\\theta = ${theta}°$.<br/><br/>Calculez la composante du poids perpendiculaire au plan incliné $P_\\perp$ (en N, arrondi à l'unité).`,
          answer: Math.round(Pperp),
          tolerance: 2,
          unit: 'N',
          hint: `$P = mg$, puis $P_\\perp = P\\cos\\theta$.`,
          solution: `$P = ${mass} \\times 9{,}81 = ${P.toFixed(0)}\\;\\text{N}$<br/>$P_\\perp = P\\cos${theta}° = ${P.toFixed(0)} \\times ${fr(Math.cos(theta * Math.PI / 180), 3)} \\approx ${Math.round(Pperp)}\\;\\text{N}$`,
        };
      }

      // signal
      const Umax = pick([230, 325, 400, 566]);
      const f = pick([50, 60, 400]);
      const omega = 2 * Math.PI * f;
      const context = pick(['réseau électrique domestique', 'réseau d\'alimentation d\'un moteur triphasé industriel', 'onduleur d\'un variateur de vitesse']);
      return {
        statement: `Un signal de tension sinusoïdal d'un ${context} s'écrit $u(t) = ${Umax}\\sin(\\omega t)$, avec une fréquence $f = ${f}\\;\\text{Hz}$.<br/><br/>Calculez la pulsation $\\omega$ (en rad/s, arrondie à l'unité).`,
        answer: Math.round(omega),
        tolerance: 2,
        unit: 'rad/s',
        hint: `$\\omega = 2\\pi f$`,
        solution: `$\\omega = 2\\pi \\times ${f} = ${fr(omega, 1)} \\approx ${Math.round(omega)}\\;\\text{rad/s}$`,
      };
    },
  },

  probleme: {
    context: `Une installation solaire thermique est posée sur un toit incliné à $\\alpha = 30°$ par rapport à l'horizontal. Le capteur solaire mesure 2 m × 1 m (surface $S = 2\\;\\text{m}^2$). Le soleil est à un angle $\\beta = 50°$ au-dessus de l'horizon, dans le plan du capteur.<br/><br/>L'irradiance solaire directe (normale aux rayons) est $G = 850\\;\\text{W/m}^2$.`,
    figure: {
      svg: `
        <svg viewBox="0 0 460 240" role="img" aria-labelledby="pb-trigo-title pb-trigo-desc">
          <title id="pb-trigo-title">Capteur solaire incline et angle d'incidence des rayons</title>
          <desc id="pb-trigo-desc">Un capteur solaire de 2 metres carres est pose sur un toit incline a 30 degres par rapport a l'horizontale. Les rayons du soleil arrivent avec une hauteur de 50 degres au-dessus de l'horizon. La normale au capteur est tracee en pointilles ; l'angle entre cette normale et les rayons vaut 20 degres, difference entre les deux angles donnes.</desc>

          <line class="axis" x1="40" y1="185" x2="420" y2="185"></line>
          <text class="tick-label" x="46" y="200">horizontale</text>

          <line class="frame-line" x1="120" y1="185" x2="300" y2="130" stroke-width="4"></line>
          <line class="curve-main" x1="150" y1="176" x2="290" y2="133"></line>
          <text class="annotation-label" x="222" y="164" text-anchor="middle">capteur S = 2 m²</text>
          <path class="axis" fill="none" d="M 165 185 A 45 45 0 0 0 163 172"></path>
          <text class="annotation-label" x="172" y="180">α = 30°</text>

          <line class="guide-line" x1="220" y1="157" x2="253" y2="52"></line>
          <text class="tick-label" x="258" y="52">normale au capteur</text>

          <line class="graph-line" x1="330" y1="30" x2="240" y2="137" stroke="var(--accent)"></line>
          <polygon points="240,137 256,130 251,143" fill="var(--accent)"></polygon>
          <line class="graph-line" x1="370" y1="55" x2="286" y2="155" stroke="var(--accent)"></line>
          <polygon points="286,155 302,148 297,161" fill="var(--accent)"></polygon>
          <line class="graph-line" x1="292" y1="18" x2="200" y2="127" stroke="var(--accent)"></line>
          <polygon points="200,127 216,120 211,133" fill="var(--accent)"></polygon>
          <text class="annotation-label" x="344" y="94" fill="var(--accent)">G = 850 W/m²</text>

          <path class="axis" fill="none" d="M 336 185 A 100 100 0 0 0 316 128"></path>
          <text class="annotation-label" x="342" y="164">β = 50°</text>

          <path class="curve-main" fill="none" stroke="var(--secondary)" d="M 232 108 A 55 55 0 0 1 253 116"></path>
          <text class="annotation-label" x="196" y="100" fill="var(--secondary)">β − α = 20°</text>

          <text class="tick-label" x="40" y="224">Surface « vue » par le soleil : S·cos(β − α)</text>
        </svg>
      `,
      caption: 'L\'angle utile n\'est ni α ni β, mais leur différence : c\'est l\'écart entre la normale au capteur et la direction des rayons.'
    },
    tasks: [
      'Quel est l\'angle $\\gamma$ entre les rayons solaires et la normale au capteur ? (La normale est perpendiculaire au capteur, soit à 90°-30°=60° de l\'horizontal)',
      'Calculez la puissance interceptée par le capteur $P_{\\text{cap}} = G \\times S \\times \\cos\\gamma$.',
      'Si le rendement du capteur est $\\eta = 0{,}72$, quelle puissance thermique $P_{\\text{th}}$ est effectivement produite ?',
      'On souhaite comparer avec un capteur horizontal ($\\alpha = 0°$). Calculez $P_{\\text{horiz}} = G \\times S \\times \\cos(90° - \\beta)$ et conclure.',
    ],
    solutions: [
      `La normale au capteur est à $90° - 30° = 60°$ de l'horizontal.<br/>Le soleil est à $\\beta = 50°$ de l'horizontal.<br/>L'angle entre la normale et les rayons : $\\gamma = 60° - 50° = 10°$.<br/>*(Si le soleil était exactement dans l'axe de la normale, γ = 0° et l'absorption serait maximale.)*`,
      `$P_{\\text{cap}} = G \\times S \\times \\cos\\gamma = 850 \\times 2 \\times \\cos 10°$<br/>$= 1700 \\times 0{,}985 = 1674\\;\\text{W} \\approx 1{,}67\\;\\text{kW}$`,
      `$P_{\\text{th}} = \\eta \\times P_{\\text{cap}} = 0{,}72 \\times 1674 \\approx 1205\\;\\text{W} \\approx 1{,}2\\;\\text{kW}$`,
      `Pour le capteur horizontal : $\\cos(90° - 50°) = \\cos 40° = 0{,}766$<br/>$P_{\\text{horiz}} = 850 \\times 2 \\times 0{,}766 = 1302\\;\\text{W}$<br/>Le capteur incliné à 30° produit $1674 - 1302 = 372\\;\\text{W}$ de plus (+28,5%) dans ces conditions. L'orientation du capteur améliore significativement le rendement.`,
    ],
    finalAnswer: 'Puissance thermique produite : $P_{\\text{th}} \\approx 1{,}2\\;\\text{kW}$. Le capteur incliné est 28,5 % plus performant que le capteur horizontal dans ces conditions.',
  },

  evaluation: {
    title: 'Évaluation — Trigonométrie',
    duration: '25 min',
    questions: [
      {
        statement: 'Un bras de robot hydraulique exerce une force de $F = 1200\\;\\text{N}$ à $\\theta = 25°$ de la verticale. Calculez la composante horizontale de cette force (en N, arrondie à l\'unité).',
        type: 'numeric',
        answer: 507,
        tolerance: 3,
        unit: 'N',
        points: 3,
        correction: 'Comme $\\theta$ est mesuré depuis la verticale, la composante horizontale s\'obtient avec le sinus : $F_h = F \\sin 25° = 1200 \\times 0{,}423 \\approx 507\\;\\text{N}$.',
      },
      {
        statement: 'Un transformateur de distribution présente $R = 0{,}4\\;\\Omega$ et $X_L = 0{,}9\\;\\Omega$. Calculez l\'impédance $Z$ (en Ω, arrondie à 0,01).',
        type: 'numeric',
        answer: 0.98,
        tolerance: 0.02,
        unit: 'Ω',
        points: 2,
        correction: '$Z = \\sqrt{R^2 + X_L^2} = \\sqrt{0{,}4^2 + 0{,}9^2} = \\sqrt{0{,}16 + 0{,}81} = \\sqrt{0{,}97} \\approx 0{,}98\\;\\Omega$.',
      },
      {
        statement: 'Pour ce même transformateur ($R = 0{,}4\\;\\Omega$, $X_L = 0{,}9\\;\\Omega$), calculez l\'angle de déphasage $\\varphi$ (en degrés, arrondi à l\'unité).',
        type: 'numeric',
        answer: 66,
        tolerance: 1,
        unit: '°',
        points: 2,
        correction: '$\\varphi = \\arctan(X_L/R) = \\arctan(0{,}9/0{,}4) = \\arctan(2{,}25) \\approx 66°$.',
      },
      {
        statement: 'Une canalisation de gaz naturel suit un terrain avec une pente de 5 %. Sur 400 m de longueur horizontale, quelle est la différence de hauteur (en m) ?',
        type: 'numeric',
        answer: 20,
        tolerance: 0.5,
        unit: 'm',
        points: 2,
        correction: 'Pour une pente exprimée en %, $\\tan\\theta = $ pente/100. Ici $h = 400 \\times 0{,}05 = 20\\;\\text{m}$.',
      },
      {
        statement: 'Pour cette même canalisation (pente de 5 %), quel est l\'angle θ avec l\'horizontale (en degrés, arrondi à 0,01°) ?',
        type: 'numeric',
        answer: 2.86,
        tolerance: 0.05,
        unit: '°',
        points: 1,
        correction: '$\\theta = \\arctan(0{,}05) \\approx 2{,}86°$.',
      },
      {
        statement: 'Un signal de tension mesure $u(t) = 230\\sqrt{2}\\,\\sin(100\\pi t - \\pi/6)\\;\\text{V}$. Quelle est sa valeur maximale $U_{\\max}$ (en V, arrondie à l\'unité) ?',
        type: 'numeric',
        answer: 325,
        tolerance: 2,
        unit: 'V',
        points: 1,
        correction: '$U_{\\max} = 230\\sqrt{2} \\approx 325\\;\\text{V}$.',
      },
      {
        statement: 'Pour ce même signal, quelle est sa fréquence $f$ (en Hz) ?',
        type: 'numeric',
        answer: 50,
        tolerance: 0.5,
        unit: 'Hz',
        points: 2,
        correction: '$\\omega = 100\\pi$ rad/s, donc $f = \\omega/(2\\pi) = 50\\;\\text{Hz}$.',
      },
      {
        statement: 'Pour ce même signal, quel est le déphasage à l\'origine (en degrés, avec son signe) ?',
        type: 'numeric',
        answer: -30,
        tolerance: 1,
        unit: '°',
        points: 1,
        correction: '$\\varphi = -\\pi/6 = -30°$ : le signal est en retard de 30° par rapport à la référence.',
      },
    ],
  },
});
