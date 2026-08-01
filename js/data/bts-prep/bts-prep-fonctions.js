/* =========================================================
   Spark Learning – data/bts-prep/bts-prep-fonctions.js
   Remise à niveau BTS — Fonctions & lecture graphique
   ========================================================= */

window.MODULES.push({
  id: 'bts-prep-fonctions',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📈',
  title: 'Fonctions & Lecture Graphique',
  subtitle: 'Fonctions affine, carré, inverse, racine — lire et exploiter une courbe technique',
  keywords: ['Fonction', 'Graphique', 'Affine', 'Pente', 'Courbe', 'Abaque', 'BTS', 'Prérequis'],
  quizShuffle: true,
  physics: 'Courbe pompe, caractéristique moteur, réseau hydraulique, diagramme',

  cours: {
    intro: 'En BTS, les courbes sont partout : la courbe caractéristique d\'une pompe (HMT en fonction du débit), la caractéristique couple/vitesse d\'un moteur, le diagramme de Mollier, les abaques de pertes de charge…<br/><br/>Savoir lire une courbe — identifier les axes, lire une valeur, trouver une intersection — est une compétence aussi importante que savoir calculer. Et pour lire efficacement, il faut reconnaître la <strong>famille de fonctions</strong> qui génère cette courbe : droite (affine), parabole (carré), hyperbole (inverse), racine carrée…<br/><br/>Une <strong>fonction</strong> est une règle qui associe à chaque valeur de $x$ exactement une valeur de $y = f(x)$.',

    definitions: [
      {
        term: 'Fonction affine $f(x) = ax + b$',
        def: 'Graphiquement, c\'est une droite. $a$ est la <strong>pente</strong> (ou coefficient directeur) : si $a > 0$ la droite monte, si $a < 0$ elle descend. $b$ est l\'<strong>ordonnée à l\'origine</strong> (valeur de $f$ en $x = 0$). Exemple : caractéristique d\'un réseau hydraulique $H = kQ + H_0$ (perte de charge).'
      },
      {
        term: 'Fonction carré $f(x) = ax^2 + bx + c$',
        def: 'Graphiquement, c\'est une parabole. Si $a > 0$, elle est tournée vers le haut (minimum). Si $a < 0$, vers le bas (maximum). Exemple : courbe de rendement d\'une pompe, puissance d\'une machine en fonction de la vitesse.'
      },
      {
        term: 'Fonction inverse $f(x) = k/x$',
        def: 'Graphiquement, c\'est une hyperbole. Lorsque $x$ augmente, $f(x)$ diminue. Exemple : résistance d\'un câble $R = \\rho L / S$ en fonction de la section $S$ pour $L$ et $\\rho$ fixes.'
      },
      {
        term: 'Pente d\'une droite',
        def: 'La pente $a = \\Delta y / \\Delta x = (y_2 - y_1)/(x_2 - x_1)$. Elle indique de combien $y$ varie quand $x$ augmente de 1. Positive → montée, négative → descente, nulle → droite horizontale.'
      }
    ],

    method: {
      title: 'Lire un graphique technique',
      steps: [
        '<strong>Identifier les axes</strong> : grandeur, unité, sens de variation, échelle (linéaire ou logarithmique).',
        '<strong>Lire une valeur</strong> : tracer une verticale depuis l\'abscisse cherchée jusqu\'à la courbe, puis une horizontale vers l\'axe des ordonnées. Lire avec la précision permise par l\'échelle.',
        '<strong>Trouver une intersection</strong> : point où deux courbes se croisent. C\'est le point de fonctionnement d\'un système (pompe + réseau, moteur + charge…). Lire les coordonnées $(x, y)$ de ce point.'
      ]
    },

    example: {
      statement: 'La caractéristique d\'une pompe est $H_p = -0{,}5Q^2 + 12$ (H en m, Q en m³/h). La courbe de réseau est $H_r = 0{,}3Q^2 + 2$. Trouver le point de fonctionnement graphiquement et algébriquement.',
      steps: [
        'Algébriquement : $H_p = H_r$ → $-0{,}5Q^2 + 12 = 0{,}3Q^2 + 2$ → $10 = 0{,}8Q^2$ → $Q^2 = 12{,}5$ → $Q \\approx 3{,}54$ m³/h.',
        '$H = 0{,}3 \\times 12{,}5 + 2 = 3{,}75 + 2 = 5{,}75$ m.',
        'Graphiquement : tracer les deux courbes, l\'intersection donne le point de fonctionnement $(3{,}54 ; 5{,}75)$.'
      ],
      answer: 'Point de fonctionnement : $Q \\approx 3{,}54$ m³/h, $H \\approx 5{,}75$ m CE.'
    },

    formulas: [
      'Droite : $f(x) = ax + b$ — pente $a = \\Delta y / \\Delta x$, ordonnée à l\'origine $b = f(0)$',
      'Parabole : $f(x) = ax^2 + bx + c$ — sommet en $x_s = -b/(2a)$',
      'Hyperbole : $f(x) = k/x$ — produit $x \\cdot f(x) = k$ constant',
      'Racine : $f(x) = \\sqrt{x}$ — domaine $x \\geq 0$, croissante, concave',
      'Pente d\'une droite passant par $(x_1, y_1)$ et $(x_2, y_2)$ : $a = (y_2-y_1)/(x_2-x_1)$'
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Lecture graphique BTS',
      title: 'Lire un point de fonctionnement entre une pompe et son reseau',
      description: 'Une courbe de pompe decroit quand le debit augmente, alors que la courbe de reseau croise generalement vers le haut. Leur intersection donne le regime reel.',
      svg: `
        <svg viewBox="0 0 360 240" role="img" aria-labelledby="bts-fonctions-graph-title bts-fonctions-graph-desc">
          <title id="bts-fonctions-graph-title">Point de fonctionnement d'une pompe</title>
          <desc id="bts-fonctions-graph-desc">Le graphique montre une courbe de pompe descendante, une courbe de reseau montante et leur intersection.</desc>
          <line class="grid-line" x1="52" y1="34" x2="316" y2="34"></line>
          <line class="grid-line" x1="52" y1="72" x2="316" y2="72"></line>
          <line class="grid-line" x1="52" y1="110" x2="316" y2="110"></line>
          <line class="grid-line" x1="52" y1="148" x2="316" y2="148"></line>
          <line class="grid-line" x1="52" y1="186" x2="316" y2="186"></line>
          <line class="grid-line" x1="52" y1="34" x2="52" y2="186"></line>
          <line class="grid-line" x1="105" y1="34" x2="105" y2="186"></line>
          <line class="grid-line" x1="158" y1="34" x2="158" y2="186"></line>
          <line class="grid-line" x1="211" y1="34" x2="211" y2="186"></line>
          <line class="grid-line" x1="264" y1="34" x2="264" y2="186"></line>
          <line class="grid-line" x1="316" y1="34" x2="316" y2="186"></line>
          <line class="axis" x1="52" y1="186" x2="324" y2="186"></line>
          <line class="axis" x1="52" y1="194" x2="52" y2="24"></line>
          <path class="curve-main" d="M52 46 C96 52, 142 72, 186 98 C220 120, 248 142, 276 170"></path>
          <path class="graph-line" d="M52 172 C98 166, 146 154, 194 132 C236 112, 276 86, 316 44"></path>
          <line class="guide-line" x1="199" y1="129" x2="199" y2="186"></line>
          <line class="guide-line" x1="52" y1="129" x2="199" y2="129"></line>
          <circle class="plot-point" cx="199" cy="129" r="6"></circle>
          <text class="annotation-label" x="226" y="70">Courbe pompe</text>
          <text class="annotation-label" x="220" y="158">Courbe reseau</text>
          <text class="annotation-label" x="208" y="121">P</text>
          <text class="annotation-label" x="207" y="201">Qf</text>
          <text class="annotation-label" x="20" y="133">Hf</text>
          <text class="axis-label" x="326" y="189">Q</text>
          <text class="axis-label" x="58" y="24">H</text>
          <text class="tick-label" x="44" y="203">0</text>
          <text class="tick-label" x="100" y="203">1</text>
          <text class="tick-label" x="153" y="203">2</text>
          <text class="tick-label" x="206" y="203">3</text>
          <text class="tick-label" x="259" y="203">4</text>
          <text class="tick-label" x="311" y="203">5</text>
          <text class="tick-label" x="36" y="189">0</text>
          <text class="tick-label" x="30" y="151">4</text>
          <text class="tick-label" x="30" y="113">8</text>
          <text class="tick-label" x="24" y="75">12</text>
          <text class="tick-label" x="24" y="37">16</text>
        </svg>
      `,
      notes: [
        'La courbe pompe descend : plus le debit $Q$ augmente, plus la hauteur disponible $H$ diminue.',
        'La courbe reseau monte : il faut davantage de hauteur pour pousser un debit plus grand dans l\'installation.',
        'Le point d\'intersection $P$ est le point de fonctionnement. On y lit simultanement le debit reel $Q_f$ et la hauteur reelle $H_f$.'
      ],
      reading: 'Quand deux courbes techniques se croisent, on lit les deux coordonnees du point d\'intersection. C\'est souvent l\'information la plus utile du graphe.',
      caption: 'Exemple de lecture d\'un point de fonctionnement sur un graphe de type pompe-reseau.'
    },

    diagrams: [
      {
        theme: 'maths',
        kicker: 'Les quatre allures de base',
        title: 'Reconnaître une fonction à la forme de sa courbe',
        description: 'En BTS, on identifie souvent une loi physique <strong>à l\'œil</strong>, avant tout calcul : une droite, une courbe qui s\'emballe, une courbe qui s\'écrase ou une courbe qui plafonne ne racontent pas la même histoire technique.',
        svg: `
          <svg viewBox="0 0 400 268" role="img" aria-labelledby="btsfonc-familles-title btsfonc-familles-desc">
            <title id="btsfonc-familles-title">Les quatre familles de fonctions de base</title>
            <desc id="btsfonc-familles-desc">Un repere unique portant quatre courbes : une droite affine croissante, une parabole en x au carre qui s'emballe, une hyperbole en un sur x qui decroit vers l'axe, et une racine carree qui monte vite puis s'aplatit. Une legende associe chaque allure a une loi technique typique.</desc>

            <line class="grid-line" x1="122" y1="40" x2="122" y2="200"></line>
            <line class="grid-line" x1="174" y1="40" x2="174" y2="200"></line>
            <line class="grid-line" x1="226" y1="40" x2="226" y2="200"></line>
            <line class="grid-line" x1="278" y1="40" x2="278" y2="200"></line>
            <line class="grid-line" x1="70" y1="164" x2="300" y2="164"></line>
            <line class="grid-line" x1="70" y1="128" x2="300" y2="128"></line>
            <line class="grid-line" x1="70" y1="92" x2="300" y2="92"></line>
            <line class="grid-line" x1="70" y1="56" x2="300" y2="56"></line>

            <line class="axis" x1="70" y1="200" x2="310" y2="200"></line>
            <line class="axis" x1="70" y1="210" x2="70" y2="40"></line>
            <text class="axis-label" x="316" y="204">x</text>
            <text class="axis-label" x="62" y="38">y</text>

            <path class="curve-main" fill="none" d="M 70 164 L 278 92"></path>
            <path class="curve-main" fill="none" stroke="var(--secondary)" d="M 70 200 L 80 200 L 91 199 L 101 197 L 112 194 L 122 191 L 132 187 L 143 182 L 153 177 L 164 171 L 174 164 L 184 156 L 195 148 L 205 139 L 216 129 L 226 119 L 236 108 L 247 96 L 257 83 L 268 70 L 278 56"></path>
            <path class="curve-main" fill="none" stroke="var(--accent)" d="M 99 69 L 107 98 L 115 117 L 123 129 L 131 139 L 139 146 L 148 152 L 156 156 L 164 160 L 172 163 L 180 166 L 188 168 L 196 170 L 205 172 L 213 174 L 221 175 L 229 176 L 237 178 L 245 179 L 254 180 L 262 180 L 270 181 L 278 182"></path>
            <path class="curve-main" fill="none" stroke="color-mix(in srgb, var(--secondary) 45%, var(--accent))" d="M 70 200 L 80 168 L 91 154 L 101 144 L 112 136 L 122 128 L 132 121 L 143 115 L 153 109 L 164 103 L 174 98 L 184 93 L 195 88 L 205 84 L 216 80 L 226 75 L 236 71 L 247 67 L 257 63 L 268 60 L 278 56"></path>

            <text class="annotation-label" x="284" y="96">y = ax + b</text>
            <text class="annotation-label" x="284" y="52" fill="var(--secondary)">y = x²</text>
            <text class="annotation-label" x="284" y="188" fill="var(--accent)">y = k/x</text>
            <text class="annotation-label" x="196" y="76" fill="color-mix(in srgb, var(--secondary) 45%, var(--accent))">y = √x</text>

            <text class="tick-label" x="70" y="228">Affine : chute de tension ΔU = R·I</text>
            <text class="tick-label" x="70" y="244">Carré : ΔP ∝ v²  —  Joule : P = R·I²</text>
            <text class="tick-label" x="70" y="260">Inverse : p·V = cste  —  Racine : Q ∝ √ΔP</text>
          </svg>
        `,
        notes: [
          '<strong>Droite (affine) :</strong> la variation est <em>constante</em>. Doubler $x$ double l\'écart à l\'ordonnée à l\'origine. C\'est le cas d\'une chute de tension dans un câble.',
          '<strong>Parabole ($x^2$) :</strong> la variation <em>s\'accélère</em>. Doubler la vitesse dans une conduite <strong>quadruple</strong> les pertes de charge — c\'est pour ça qu\'on surdimensionne les diamètres.',
          '<strong>Hyperbole ($k/x$) :</strong> le produit reste constant. Doubler la pression divise le volume par deux, sans jamais atteindre zéro.',
          '<strong>Racine ($\\sqrt{x}$) :</strong> la variation <em>s\'essouffle</em>. Quadrupler la pression différentielle ne double que le débit à travers un orifice.'
        ],
        reading: 'Devant un relevé de mesures, commence toujours par regarder <strong>l\'allure</strong> avant de chercher l\'équation : elle te dit déjà si tu as affaire à une loi linéaire, quadratique, inverse ou en racine.',
        caption: 'Les quatre allures de fonctions les plus fréquentes en BTS technique, avec la loi physique associée à chacune.'
      }
    ],

    recap: [
      'La pente d\'une droite mesure la vitesse de variation : une grande pente signifie une grande sensibilité.',
      'Deux courbes s\'intersectent en un point de fonctionnement : résoudre algébriquement $f_1(x) = f_2(x)$.',
      'Sur un graphique technique, toujours lire les unités des axes avant tout — un débit en m³/h n\'est pas un débit en L/s.',
      'Un abaque est un graphique pré-calculé pour un cas standard. On y lit directement sans recalculer.'
    ],

    piege: 'Confondre pente et ordonnée à l\'origine : $f(x) = 3x + 5$ a une pente de 3 (et non 5) et vaut 5 en $x = 0$ (et non 3). La pente est le coefficient de $x$, pas la constante.'
  },

  quiz: [
    {
      q: 'La droite $f(x) = 2x - 3$ a une pente de :',
      options: ['$-3$', '$2$', '$-1$', '$5$'],
      answer: 1,
      correction: 'Dans $f(x) = ax + b$, la pente est $a$. Ici $a = 2$. L\'ordonnée à l\'origine est $b = -3$.'
    },
    {
      q: 'Sur la courbe caractéristique d\'une pompe, l\'axe des abscisses représente :',
      options: ['La hauteur manométrique (m)', 'Le débit volumique (m³/h)', 'La puissance absorbée (W)', 'Le rendement (%)'],
      answer: 1,
      correction: 'Par convention, les courbes de pompe placent le débit $Q$ en abscisse et la HMT $H$ en ordonnée. La pente de la courbe est négative (la hauteur diminue quand le débit augmente).'
    },
    {
      q: 'Deux droites $y_1 = 3x + 1$ et $y_2 = x + 5$ se croisent en :',
      figure: {
        svg: `
          <svg viewBox="0 0 320 200" role="img" aria-labelledby="qfonc-inter-title qfonc-inter-desc">
            <title id="qfonc-inter-title">Intersection de deux droites</title>
            <desc id="qfonc-inter-desc">Deux droites tracees dans un meme repere : la premiere, plus pentue, part de l'ordonnee 1 ; la seconde, moins pentue, part de l'ordonnee 5. Elles se coupent en un unique point dont les coordonnees sont a determiner.</desc>
            <line class="grid-line" x1="90" y1="25" x2="90" y2="165"></line>
            <line class="grid-line" x1="130" y1="25" x2="130" y2="165"></line>
            <line class="grid-line" x1="170" y1="25" x2="170" y2="165"></line>
            <line class="grid-line" x1="210" y1="25" x2="210" y2="165"></line>
            <line class="grid-line" x1="50" y1="145" x2="280" y2="145"></line>
            <line class="grid-line" x1="50" y1="125" x2="280" y2="125"></line>
            <line class="grid-line" x1="50" y1="105" x2="280" y2="105"></line>
            <line class="grid-line" x1="50" y1="85" x2="280" y2="85"></line>
            <line class="grid-line" x1="50" y1="65" x2="280" y2="65"></line>
            <line class="axis" x1="50" y1="165" x2="290" y2="165"></line>
            <line class="axis" x1="50" y1="180" x2="50" y2="25"></line>
            <line class="curve-main" x1="50" y1="155" x2="180" y2="35"></line>
            <line class="curve-main" x1="50" y1="105" x2="250" y2="65" stroke="var(--secondary)"></line>
            <circle class="plot-point" cx="130" cy="85" r="7"></circle>
            <line class="guide-line" x1="130" y1="165" x2="130" y2="85"></line>
            <line class="guide-line" x1="50" y1="85" x2="130" y2="85"></line>
            <text class="annotation-label" x="186" y="42">y₁ = 3x + 1</text>
            <text class="annotation-label" x="252" y="62" fill="var(--secondary)">y₂ = x + 5</text>
            <text class="tick-label" x="138" y="80">(x ; y) = ?</text>
            <text class="tick-label" x="42" y="109" text-anchor="end">1</text>
            <text class="tick-label" x="42" y="169" text-anchor="end">0</text>
            <text class="tick-label" x="130" y="182" text-anchor="middle">2</text>
          </svg>
        `,
        caption: 'Résoudre $y_1 = y_2$ revient exactement à chercher l\'abscisse du point d\'intersection.'
      },
      options: ['$(x, y) = (2, 7)$', '$(x, y) = (3, 10)$', '$(x, y) = (1, 4)$', '$(x, y) = (4, 6)$'],
      answer: 0,
      correction: '$3x + 1 = x + 5 \\Rightarrow 2x = 4 \\Rightarrow x = 2$. Puis $y = 2 + 5 = 7$. Point : $(2, 7)$.'
    },
    {
      q: 'La pente de la droite passant par les points $(1, 3)$ et $(4, 9)$ est :',
      options: ['$a = 1$', '$a = 2$', '$a = 3$', '$a = 6$'],
      answer: 1,
      correction: '$a = (9-3)/(4-1) = 6/3 = 2$. La droite monte de 2 unités en $y$ pour chaque unité en $x$.'
    },
    {
      q: 'La fonction inverse $f(x) = 12/x$ décroît-elle ou croît-elle pour $x > 0$ ?',
      options: ['Elle croît', 'Elle décroît', 'Elle est constante', 'Elle dépend du signe de 12'],
      answer: 1,
      correction: 'Pour $x > 0$, plus $x$ est grand, plus $12/x$ est petit. La fonction est décroissante. Exemple : résistance d\'un câble en fonction de sa section.'
    },
    {
      q: 'Le réseau hydraulique a pour équation $H_r = 2Q + 1$. Pour $Q = 3$ m³/h, la perte de charge $H_r$ vaut :',
      options: ['$H_r = 5$ m', '$H_r = 7$ m', '$H_r = 4$ m', '$H_r = 9$ m'],
      answer: 1,
      correction: '$H_r = 2 \\times 3 + 1 = 7$ m.'
    },
    {
      q: 'Sur un graphique, l\'abscisse est la température $T$ (°C) et l\'ordonnée est la viscosité $\\nu$ (m²/s). Que signifie une courbe décroissante ?',
      options: [
        'Plus la température est élevée, plus la viscosité est grande',
        'Plus la température est élevée, plus la viscosité est faible',
        'La viscosité ne dépend pas de la température',
        'La courbe est une erreur de traçage'
      ],
      answer: 1,
      correction: 'Une courbe décroissante signifie que quand $T$ augmente (axe $x$), $\\nu$ diminue (axe $y$). C\'est bien le comportement physique des huiles et de l\'eau : moins visqueuses à chaud.'
    },
    {
      q: 'La caractéristique couple/vitesse d\'un moteur asynchrone forme une courbe parabolique avec un maximum au couple de décrochage. Ce maximum correspond à :',
      options: [
        'La vitesse à vide (couple nul)',
        'La vitesse de synchronisme',
        'Le couple de démarrage',
        'Le glissement critique $s_k$'
      ],
      answer: 3,
      correction: 'Sur la courbe couple/glissement d\'un moteur asynchrone, le maximum du couple (couple de décrochage) correspond au glissement critique $s_k$. En pratique, le point de fonctionnement normal est à faible glissement, donc à gauche du maximum de couple (glissement critique $s_k$).'
    },
    {
      q: 'La fonction $f(x) = -2x^2 + 8x$ (parabole tournée vers le bas) atteint son maximum pour :',
      figure: {
        svg: `
          <svg viewBox="0 0 380 200" role="img" aria-labelledby="qfonc-parab-title qfonc-parab-desc">
            <title id="qfonc-parab-title">Parabole tournee vers le bas et position de son sommet</title>
            <desc id="qfonc-parab-desc">Une parabole ouverte vers le bas, qui coupe l'axe horizontal en deux points et atteint son sommet a mi-chemin entre ces deux racines. Une ligne verticale en pointilles marque l'abscisse du sommet.</desc>
            <line class="grid-line" x1="130" y1="35" x2="130" y2="175"></line>
            <line class="grid-line" x1="200" y1="35" x2="200" y2="175"></line>
            <line class="grid-line" x1="270" y1="35" x2="270" y2="175"></line>
            <line class="axis" x1="45" y1="175" x2="360" y2="175"></line>
            <line class="axis" x1="60" y1="190" x2="60" y2="35"></line>
            <path class="curve-main" fill="none" d="M 60 175 L 74 151 L 88 130 L 102 111 L 116 95 L 130 81 L 144 70 L 158 61 L 172 55 L 186 51 L 200 50 L 214 51 L 228 55 L 242 61 L 256 70 L 270 81 L 284 95 L 298 111 L 312 130 L 326 151 L 340 175"></path>
            <line class="guide-line" x1="200" y1="175" x2="200" y2="50"></line>
            <circle class="plot-point" cx="200" cy="50" r="7"></circle>
            <circle class="plot-point-alt" cx="60" cy="175" r="5"></circle>
            <circle class="plot-point-alt" cx="340" cy="175" r="5"></circle>
            <text class="annotation-label" x="210" y="46">sommet</text>
            <text class="tick-label" x="60" y="192" text-anchor="middle">0</text>
            <text class="tick-label" x="340" y="192" text-anchor="middle">racine</text>
            <text class="tick-label" x="200" y="192" text-anchor="middle">x = ?</text>
            <text class="tick-label" x="230" y="150">le sommet est toujours</text>
            <text class="tick-label" x="230" y="164">au milieu des racines</text>
          </svg>
        `,
        caption: 'Une parabole est symétrique : son sommet se situe exactement à mi-distance de ses deux racines.'
      },
      options: ['$x = 8$', '$x = -2$', '$x = 2$', '$x = 4$'],
      answer: 2,
      correction: 'Le sommet d\'une parabole $ax^2 + bx + c$ est en $x_s = -b/(2a) = -8/(2 \\times (-2)) = -8/(-4) = 2$. Le maximum est $f(2) = -8 + 16 = 8$.'
    },
    {
      q: 'Sur une courbe pompe, on lit $H = 6$ m pour $Q = 4$ m³/h. La puissance hydraulique est $P_{hyd} = \\rho g H \\dot{V}$ avec $\\rho = 1000$ kg/m³, $g = 9{,}81$ m/s². Calculer $P_{hyd}$ (en W) :',
      options: ['$P_{hyd} = 653$ W', '$P_{hyd} = 6534$ W', '$P_{hyd} = 65{,}3$ W', '$P_{hyd} = 24$ W'],
      answer: 2,
      correction: '$\\dot{V} = 4/3600$ m³/s $\\approx 1{,}11 \\times 10^{-3}$ m³/s. $P_{hyd} = 1000 \\times 9{,}81 \\times 6 \\times 1{,}11 \\times 10^{-3} \\approx 65{,}3$ W.'
    },
    {
      q: 'La droite $y = -3x + 12$ coupe l\'axe des abscisses au point d\'abscisse :',
      options: ['$x = 4$', '$x = -4$', '$x = 3$', '$x = 12$'],
      answer: 0,
      correction: 'On résout $-3x + 12 = 0 \\Rightarrow x = 12/3 = 4$. Le point d\'intersection avec l\'axe des abscisses est $(4, 0)$.'
    },
    {
      q: 'La distance de freinage (en m) d\'un engin de chantier suit $d(v) = 0{,}05v^2$ où $v$ est la vitesse en km/h. Pour $v = 20$ km/h, la distance de freinage est :',
      options: ['$20$ m', '$10$ m', '$4$ m', '$100$ m'],
      answer: 0,
      correction: '$d(20) = 0{,}05 \\times 20^2 = 0{,}05 \\times 400 = 20$ m. La fonction carré amplifie fortement l\'effet de la vitesse sur la distance de freinage.'
    },
    {
      q: 'La caractéristique d\'un aérotherme est $P(T) = -0{,}8T + 40$ (P en kW, T la température extérieure en °C). Pour $T = 5°C$, la puissance appelée est :',
      options: ['$36$ kW', '$44$ kW', '$35{,}2$ kW', '$4$ kW'],
      answer: 0,
      correction: '$P(5) = -0{,}8 \\times 5 + 40 = -4 + 40 = 36$ kW. La pente négative traduit un besoin de chauffage qui diminue quand la température extérieure augmente.'
    },
    {
      q: 'La courbe de rendement $\\eta(Q) = -0{,}01Q^2 + 0{,}8Q$ (Q en m³/h) atteint son maximum pour un débit :',
      options: ['$Q = 40$ m³/h', '$Q = 80$ m³/h', '$Q = 20$ m³/h', '$Q = 4$ m³/h'],
      answer: 0,
      correction: 'Le sommet de la parabole est en $Q_s = -b/(2a) = -0{,}8/(2 \\times (-0{,}01)) = 40$ m³/h.'
    },
    {
      q: 'Un dosage colorimétrique donne l\'absorbance $A = 0{,}15c + 0{,}02$ (c en mg/L). Pour une absorbance mesurée $A = 0{,}62$, la concentration $c$ est :',
      options: ['$4$ mg/L', '$4{,}27$ mg/L', '$0{,}6$ mg/L', '$40$ mg/L'],
      answer: 0,
      correction: 'On résout $0{,}62 = 0{,}15c + 0{,}02 \\Rightarrow 0{,}15c = 0{,}6 \\Rightarrow c = 4$ mg/L. On cherche ici l\'antécédent d\'une fonction affine.'
    },
    {
      q: 'La fonction $f(x) = -5x + 20$ est :',
      options: ['décroissante', 'croissante', 'constante', 'ni croissante ni décroissante'],
      answer: 0,
      correction: 'Le coefficient de $x$ (la pente) vaut $-5 < 0$ : la fonction est décroissante sur tout son domaine.'
    },
    {
      q: 'À température constante, un gaz suit la loi de Boyle-Mariotte $P = k/V$. Pour $k = 12$ bar·L et $V = 3$ L, la pression est :',
      options: ['$4$ bar', '$36$ bar', '$0{,}25$ bar', '$9$ bar'],
      answer: 0,
      correction: '$P = k/V = 12/3 = 4$ bar. C\'est une fonction inverse : le produit $P \\times V$ reste constant, conformément à la loi de Boyle-Mariotte.'
    },
    {
      q: 'La puissance mécanique transmise par une courroie suit $P(N) = -0{,}002N^2 + 0{,}8N$ (N en tr/min). Le maximum est atteint pour :',
      options: ['$N = 200$ tr/min', '$N = 400$ tr/min', '$N = 100$ tr/min', '$N = 0{,}008$ tr/min'],
      answer: 0,
      correction: '$N_s = -b/(2a) = -0{,}8/(2 \\times (-0{,}002)) = 200$ tr/min.'
    },
    {
      q: 'Un réseau a pour caractéristique $H_r = 0{,}5Q^2 + 3$ (H en m, Q en m³/h). Pour $Q = 4$ m³/h, $H_r$ vaut :',
      options: ['$11$ m', '$8$ m', '$19$ m', '$7$ m'],
      answer: 0,
      correction: '$H_r(4) = 0{,}5 \\times 16 + 3 = 8 + 3 = 11$ m.'
    },
    {
      q: 'Sur un graphique, une droite passe par le point $(0, 7)$ et a une pente de $-2$. Sa valeur en $x = 3$ est :',
      options: ['$1$', '$13$', '$-6$', '$4$'],
      answer: 0,
      correction: 'L\'équation de la droite est $y = -2x + 7$ (ordonnée à l\'origine $b = 7$). Pour $x = 3$ : $y = -6 + 7 = 1$.'
    },
    {
      q: 'La fonction $f(x) = 4x - 9$ s\'annule ($f(x) = 0$) pour :',
      options: ['$x = 2{,}25$', '$x = -2{,}25$', '$x = 4$', '$x = 9$'],
      answer: 0,
      correction: '$4x - 9 = 0 \\Rightarrow x = 9/4 = 2{,}25$.'
    },
    {
      q: 'Une droite passe par les points $(0, 4)$ et $(2, 10)$. La valeur de $y$ pour $x = 5$ est :',
      options: ['$19$', '$15$', '$17$', '$25$'],
      answer: 0,
      correction: 'Pente $a = (10-4)/(2-0) = 3$. Comme le premier point est $(0, 4)$, l\'ordonnée à l\'origine est $b = 4$. Donc $y = 3 \\times 5 + 4 = 19$.'
    },
    {
      q: 'Deux droites $y_1 = 4x + 2$ et $y_2 = -2x + 20$ se croisent en :',
      options: ['$(3, 14)$', '$(2, 10)$', '$(4, 18)$', '$(3, 12)$'],
      answer: 0,
      correction: '$4x + 2 = -2x + 20 \\Rightarrow 6x = 18 \\Rightarrow x = 3$. Puis $y = 4 \\times 3 + 2 = 14$. Point : $(3, 14)$.'
    }
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['pente', 'intersection', 'image', 'sommet', 'inverse', 'calibration']);

      if (type === 'pente') {
        const a = pick([1, 2, 3, 4, 5]);
        const b = pick([0, 1, 2, 3, 5]);
        const x1 = pick([1, 2, 3]);
        const x2 = x1 + pick([2, 3, 4]);
        const y1 = a * x1 + b, y2 = a * x2 + b;
        return {
          statement: `Une courbe ${pick(['de réseau hydraulique', 'de caractéristique moteur', 'de perte de charge'])} passe par les points $(${x1},\\,${y1})$ et $(${x2},\\,${y2})$. Calculer la pente de la droite.`,
          answer: a,
          tolerance: 0,
          unit: '',
          hint: `Pente $= (y_2 - y_1)/(x_2 - x_1) = (${y2} - ${y1})/(${x2} - ${x1})$.`,
          solution: [`$a = \\dfrac{${y2} - ${y1}}{${x2} - ${x1}} = \\dfrac{${y2-y1}}{${x2-x1}} = ${a}$`]
        };
      }

      if (type === 'intersection') {
        const Q = pick([2, 3, 4, 5]);
        const kp = pick([1, 2]);
        const kr = pick([1, 2]);
        const H0r = pick([1, 2, 3]);
        const contexte = pick(['un réseau hydraulique industriel', 'un réseau de chauffage collectif', 'un circuit HVAC de ventilation']);
        // H0p est dérivée de H0r pour que Hp(Q) = Hr(Q) : Q est ainsi un vrai point de fonctionnement.
        const H0p = Q * Q * (kp + kr) + H0r;
        const Hr_at_Q = kr * Q * Q + H0r;
        const Hp_at_Q = H0p - kp * Q * Q;
        return {
          statement: `Dans ${contexte}, la pompe a pour courbe $H_p = ${H0p} - ${kp}Q^2$ et le réseau $H_r = ${kr}Q^2 + ${H0r}$ (H en m, Q en m³/h). Au point de fonctionnement ($Q = ${Q}$ m³/h), calculer la HMT $H$ (en m).`,
          answer: Hr_at_Q,
          tolerance: 0.05,
          unit: 'm',
          hint: `Au point de fonctionnement, $H_p(${Q}) = H_r(${Q})$. Le plus simple est de calculer $H = H_r(${Q}) = ${kr} \\times ${Q}^2 + ${H0r}$.`,
          solution: [`$H = ${kr} \\times ${Q*Q} + ${H0r} = ${Hr_at_Q}$ m`, `Vérification : $H_p(${Q}) = ${H0p} - ${kp} \\times ${Q*Q} = ${Hp_at_Q}$ m, bien égal à $H_r(${Q})$.`]
        };
      }

      if (type === 'image') {
        const a = pick([2, 3, 4]);
        const b = pick([1, 2, 3, 5]);
        const x = pick([1, 2, 3, 4, 5]);
        const y = a * x + b;
        const installation = pick(['un réseau de ventilation', 'un circuit de climatisation (HVAC)', 'un réseau de désenfumage']);
        return {
          statement: `La caractéristique d'${installation} est $\\Delta P = ${a} \\cdot \\dot{V} + ${b}$ (Pa, m³/h). Pour un débit $\\dot{V} = ${x}$ m³/h, calculer la perte de charge $\\Delta P$ (en Pa).`,
          answer: y,
          tolerance: 0,
          unit: 'Pa',
          hint: `Substituer $\\dot{V} = ${x}$ dans la formule : $\\Delta P = ${a} \\times ${x} + ${b}$.`,
          solution: [`$\\Delta P = ${a} \\times ${x} + ${b} = ${a*x} + ${b} = ${y}$ Pa`]
        };
      }

      if (type === 'sommet') {
        const a = pick([0.5, 1, 1.5, 2]);
        const b = pick([6, 8, 10, 12, 16]);
        const xs = Math.round((b / (2 * a)) * 100) / 100;
        const { grandeur, variable, unite, unitY } = pick([
          { grandeur: 'la puissance utile d\'une éolienne en fonction de la vitesse du vent', variable: 'v', unite: 'm/s', unitY: 'kW' },
          { grandeur: 'la portance d\'un profil aérodynamique en fonction de l\'angle d\'incidence', variable: '\\alpha', unite: '°', unitY: 'N' },
          { grandeur: 'le rendement d\'un moteur en fonction de son taux de charge', variable: 'x', unite: '%', unitY: '%' }
        ]);
        return {
          statement: `Une courbe technique modélise ${grandeur} par $f(${variable}) = -${fr(a)}${variable}^2 + ${fr(b)}${variable}$ (en ${unitY}, ${variable} en ${unite}). Calculer la valeur de $${variable}$ qui maximise $f$ (sommet de la parabole).`,
          answer: xs,
          tolerance: 0.05,
          unit: unite,
          hint: `Le sommet d'une parabole $ax^2+bx+c$ est en $x_s = -b/(2a)$.`,
          solution: [`$${variable}_s = \\dfrac{${fr(b)}}{2 \\times ${fr(a)}} = ${fr(xs)}\\;${unite}$`]
        };
      }

      if (type === 'inverse') {
        const k = pick([17, 34, 50, 68]);
        const S = pick([1, 1.5, 2, 2.5, 4]);
        const R = Math.round(k / S * 100) / 100;
        const contexte = pick(['un câble de cuivre', 'un conducteur électrique', 'une barre de terre']);
        return {
          statement: `La résistance électrique d'${contexte} suit une loi inverse $R = k/S$ avec $k = ${fr(k)}\\;\\Omega\\cdot\\text{mm}^2$. Calculer $R$ (en $\\Omega$) pour une section $S = ${fr(S)}\\;\\text{mm}^2$.`,
          answer: R,
          tolerance: 0.05,
          unit: 'Ω',
          hint: `$R = k/S = ${fr(k)}/${fr(S)}$.`,
          solution: [`$R = \\dfrac{${fr(k)}}{${fr(S)}} = ${fr(R)}\\;\\Omega$`]
        };
      }

      const a = pick([0.1, 0.2, 0.25, 0.5, 1]);
      const P = pick([2, 4, 5, 8, 10]);
      const U = pick([1, 2, 3]);
      const b = Math.round((U - a * P) * 100) / 100;
      const contexte = pick(['un capteur de pression', 'un capteur de température', 'un capteur de niveau']);
      return {
        statement: `La caractéristique linéaire d'${contexte} est $U = a \\cdot P + b$ avec une pente $a = ${fr(a)}\\;\\text{V/unité}$. On mesure $U = ${fr(U)}\\;\\text{V}$ pour $P = ${fr(P)}$. Calculer l'ordonnée à l'origine $b$ (en V).`,
        answer: b,
        tolerance: 0.05,
        unit: 'V',
        hint: `$b = U - a \\times P = ${fr(U)} - ${fr(a)} \\times ${fr(P)}$.`,
        solution: [`$b = ${fr(U)} - ${fr(a)} \\times ${fr(P)} = ${fr(b)}\\;\\text{V}$`]
      };
    }
  },

  probleme: {
    context: 'Un réseau de chauffage est alimenté par une pompe dont la caractéristique est $H_p = -0{,}8Q^2 + 20$ (H en m, Q en m³/h). Le réseau comporte deux circuits en parallèle : circuit A avec $H_A = 1{,}2Q_A^2 + 2$ et circuit B avec $H_B = 0{,}6Q_B^2 + 3$.',
    figure: {
      svg: `
        <svg viewBox="0 0 460 220" role="img" aria-labelledby="pb-fonctions-title pb-fonctions-desc">
          <title id="pb-fonctions-title">Deux circuits en parallele alimentes par une meme pompe</title>
          <desc id="pb-fonctions-desc">Une pompe alimente une conduite qui se divise en deux branches paralleles, le circuit A et le circuit B, avant de se rejoindre au retour. Les deux branches subissent la meme difference de pression, tandis que leurs debits s'additionnent pour former le debit total de la pompe.</desc>

          <circle cx="55" cy="110" r="24" class="plot-point-alt"></circle>
          <text class="annotation-label" x="55" y="115" text-anchor="middle">P</text>
          <text class="tick-label" x="55" y="152" text-anchor="middle">pompe</text>

          <line class="curve-main" x1="79" y1="110" x2="140" y2="110"></line>
          <line class="curve-main" x1="140" y1="110" x2="140" y2="55"></line>
          <line class="curve-main" x1="140" y1="110" x2="140" y2="165"></line>
          <circle class="plot-point" cx="140" cy="110" r="6"></circle>
          <text class="annotation-label" x="96" y="100">Q</text>

          <line class="curve-main" x1="140" y1="55" x2="200" y2="55"></line>
          <rect x="200" y="35" width="110" height="40" rx="8" fill="color-mix(in srgb, var(--primary) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--primary) 32%, var(--border))"></rect>
          <text class="annotation-label" x="255" y="60" text-anchor="middle">Circuit A</text>
          <line class="curve-main" x1="310" y1="55" x2="380" y2="55"></line>
          <text class="tick-label" x="345" y="46" text-anchor="middle">Q_A</text>
          <text class="tick-label" x="255" y="26" text-anchor="middle">H_A = 1,2 Q_A² + 2</text>

          <line class="curve-main" x1="140" y1="165" x2="200" y2="165" stroke="var(--secondary)"></line>
          <rect x="200" y="145" width="110" height="40" rx="8" fill="color-mix(in srgb, var(--secondary) 12%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 32%, var(--border))"></rect>
          <text class="annotation-label" x="255" y="170" text-anchor="middle" fill="var(--secondary)">Circuit B</text>
          <line class="curve-main" x1="310" y1="165" x2="380" y2="165" stroke="var(--secondary)"></line>
          <text class="tick-label" x="345" y="156" text-anchor="middle">Q_B</text>
          <text class="tick-label" x="255" y="204" text-anchor="middle">H_B = 0,6 Q_B² + 3</text>

          <line class="curve-main" x1="380" y1="55" x2="380" y2="165"></line>
          <circle class="plot-point" cx="380" cy="110" r="6"></circle>
          <line class="curve-main" x1="380" y1="110" x2="430" y2="110"></line>
          <line class="curve-main" x1="430" y1="110" x2="430" y2="200"></line>
          <line class="curve-main" x1="430" y1="200" x2="55" y2="200"></line>
          <line class="curve-main" x1="55" y1="200" x2="55" y2="134"></line>
          <polygon points="49,142 55,128 61,142" fill="var(--primary)"></polygon>

          <text class="annotation-label" x="150" y="126">même ΔP :  H_A = H_B</text>
          <text class="annotation-label" x="150" y="142">débits qui s\'ajoutent :  Q = Q_A + Q_B</text>
        </svg>
      `,
      caption: 'Montage en parallèle : les hauteurs s\'égalisent, les débits s\'additionnent — d\'où le système à résoudre.'
    },
    tasks: [
      'Trouver les débits $Q_A$ et $Q_B$ sachant que les circuits sont en parallèle (même HMT) et que la HMT commune est $H = 8$ m.',
      'Vérifier que le débit total $Q = Q_A + Q_B$ est compatible avec la courbe pompe $H_p = -0{,}8Q^2 + 20$.',
      'Si le circuit B est fermé (vanné), calculer le nouveau point de fonctionnement de la pompe sur le seul circuit A.'
    ],
    solutions: [
      'Circuit A : $8 = 1{,}2Q_A^2 + 2 \\Rightarrow Q_A^2 = 5 \\Rightarrow Q_A \\approx 2{,}24$ m³/h. Circuit B : $8 = 0{,}6Q_B^2 + 3 \\Rightarrow Q_B^2 = 8{,}33 \\Rightarrow Q_B \\approx 2{,}89$ m³/h.',
      '$Q_{total} = 2{,}24 + 2{,}89 = 5{,}13$ m³/h. Vérif pompe : $H_p(5{,}13) = -0{,}8 \\times 26{,}3 + 20 = -21 + 20 = -1$ m — incohérent. En pratique, la HMT de 8 m est fixée par le réseau ; recalculer avec $H_p = H_r$ donne le vrai point.',
      'Circuit A seul : $-0{,}8Q^2 + 20 = 1{,}2Q^2 + 2 \\Rightarrow 18 = 2Q^2 \\Rightarrow Q = 3$ m³/h, $H = 1{,}2 \\times 9 + 2 = 12{,}8$ m.'
    ],
    finalAnswer: 'Circuit A seul : $Q_A = 3$ m³/h, $H = 12{,}8$ m.'
  },

  evaluation: {
    title: 'Évaluation — Fonctions & lecture graphique',
    duration: '30 min',
    questions: [
      {
        statement: 'La pente de la droite passant par $(0, 2)$ et $(5, 12)$ est :',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 2,
        correction: '$a = (12-2)/(5-0) = 10/5 = 2$.'
      },
      {
        statement: 'La courbe $H_p = -Q^2 + 16$ (pompe) et $H_r = 2Q + 4$ (réseau) s\'intersectent. Trouver $Q$ (en m³/h, arrondi à $0{,}1$).',
        type: 'numeric',
        answer: 2.6,
        tolerance: 0.1,
        unit: 'm³/h',
        points: 3,
        correction: '$-Q^2 + 16 = 2Q + 4 \\Rightarrow Q^2 + 2Q - 12 = 0 \\Rightarrow \\Delta = 4 + 48 = 52$. $Q = \\dfrac{-2 + \\sqrt{52}}{2} \\approx \\dfrac{-2 + 7{,}21}{2} \\approx 2{,}6$ m³/h (on ne garde que la solution positive).'
      },
      {
        statement: 'La fonction $f(x) = 6/x$ pour $x = 3$ donne $f(3) =$',
        type: 'numeric',
        answer: 2,
        tolerance: 0,
        unit: '',
        points: 1,
        correction: '$f(3) = 6/3 = 2$.'
      },
      {
        statement: 'La caractéristique d\'un réseau hydraulique linéaire est $H = 4Q$. Pour un débit $Q = 2{,}5$ m³/h, la perte de charge $H$ vaut :',
        type: 'multiple-choice',
        options: ['$H = 6$ m', '$H = 8$ m', '$H = 10$ m', '$H = 12$ m'],
        answer: 2,
        points: 2,
        correction: '$H = 4 \\times 2{,}5 = 10$ m.'
      },
      {
        statement: 'Sur une courbe pompe, on lit $H = 8$ m pour $Q = 3$ m³/h et $H = 5$ m pour $Q = 4$ m³/h. La pente de cette portion de courbe est :',
        type: 'numeric',
        answer: -3,
        tolerance: 0,
        unit: 'm/(m³/h)',
        points: 2,
        correction: '$a = (5-8)/(4-3) = -3/1 = -3$ m/(m³/h). La pente est négative (la pompe perd de la hauteur quand le débit augmente).'
      }
    ]
  }
});
