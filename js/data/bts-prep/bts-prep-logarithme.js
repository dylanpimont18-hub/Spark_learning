window.MODULES.push({
  id: 'bts-prep-logarithme',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📉',
  title: 'Logarithmes & Exponentielles',
  subtitle: 'ln, exp, décibels et cinétiques — comprendre les échelles',
  keywords: ['logarithme', 'exponentielle', 'décibel', 'ln', 'exp', 'constante de temps', 'base 10', 'pH', 'cinétique'],
  quizShuffle: true,
  physics: 'Les fonctions logarithmique et exponentielle apparaissent dès qu\'on mesure des niveaux sonores (décibels), des temps de charge/décharge (RC, RL), des réactions chimiques (ordre 1) ou des échangeurs thermiques. Ce sont des outils fondamentaux en physique appliquée.',

  cours: {
    intro: `Les fonctions logarithme et exponentielle sont complémentaires — l'une est l'inverse de l'autre. Elles apparaissent systématiquement lorsqu'une grandeur physique <em>croît ou décroît proportionnellement à elle-même</em> : charge d'un condensateur, désintégration radioactive, refroidissement d'un corps, réaction d'ordre 1 en chimie.<br/><br/>
En BTS, vous les rencontrerez principalement sous deux formes : le <strong>logarithme décimal</strong> ($\\log_{10}$) pour les décibels et le pH, et le <strong>logarithme naturel</strong> ($\\ln$) pour les équations différentielles et les cinétiques.`,

    definitions: [
      {
        term: 'Rappels fondamentaux',
        def: `La fonction exponentielle $e^x$ (ou $\\exp(x)$) est définie pour tout réel $x$. Sa base $e \\approx 2{,}718$ est appelée la constante de Neper.<br/><br/>
Le logarithme naturel $\\ln(x)$ est la <strong>réciproque</strong> de $e^x$ :<br/>
$$\\ln(e^x) = x \\qquad e^{\\ln(x)} = x \\qquad (x > 0)$$<br/><br/>
Le logarithme décimal $\\log_{10}(x)$ (ou simplement $\\log$) est la réciproque de $10^x$ :<br/>
$$\\log_{10}(10^x) = x \\qquad 10^{\\log_{10}(x)} = x$$<br/><br/>
Relation entre les deux : $\\ln(x) = \\log_{10}(x) \\times \\ln(10) \\approx 2{,}303 \\times \\log_{10}(x)$`,
      },
      {
        term: 'Propriétés algébriques (ln et log)',
        def: `$$\\ln(a \\times b) = \\ln a + \\ln b$$
$$\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b$$
$$\\ln(a^n) = n \\times \\ln a$$
$$\\ln(1) = 0 \\qquad \\ln(e) = 1$$`,
      },
      {
        term: 'Propriétés de l\'exponentielle',
        def: `$$e^{a+b} = e^a \\times e^b \\qquad e^{a-b} = \\frac{e^a}{e^b} \\qquad (e^a)^n = e^{na}$$
$$e^0 = 1 \\qquad e^1 = e \\approx 2{,}718 \\qquad e^{-x} = \\frac{1}{e^x}$$`,
      },
      {
        term: 'Résoudre une équation avec ln ou exp',
        def: `Si $e^x = k$ → $x = \\ln(k)$<br/>
Si $\\ln(x) = k$ → $x = e^k$<br/>
Si $a \\cdot e^{bx} = c$ → $e^{bx} = c/a$ → $bx = \\ln(c/a)$ → $x = \\ln(c/a)/b$`,
      },
    ],

    method: {
      title: 'Applications clés : décibels et constante de temps',
      steps: [
        'Le décibel est une unité logarithmique qui permet d\'exprimer des rapports très grands sur une échelle comprimée.<br/>Niveau de puissance : $L_P = 10 \\times \\log_{10}\\left(\\dfrac{P}{P_0}\\right)\\;\\text{dB}$<br/>Niveau de pression sonore : $L_p = 20 \\times \\log_{10}\\left(\\dfrac{p}{p_0}\\right)\\;\\text{dB}$<br/>(Le facteur 20 vient de $P \\propto p^2$, donc $\\log(p^2/p_0^2) = 2\\log(p/p_0)$)',
        '<strong>Valeurs repères en dB :</strong> +3 dB ≈ doubler la puissance — +6 dB ≈ doubler la pression — +10 dB ≈ multiplier par 10 la puissance perçue.',
        '<strong>Constante de temps τ — systèmes RC et RL :</strong> la charge d\'un condensateur suit $u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$ avec $\\tau = RC$ ; la décharge suit $u_C(t) = U_0 \\cdot e^{-t/\\tau}$.<br/>À $t = \\tau$ : $u_C \\approx 0{,}632 \\times E$ (63,2% de la valeur finale). À $t = 5\\tau$ : régime permanent (>99%).',
      ],
    },

    example: {
      statement: 'Quatre applications de la fonction logarithme et de l\'exponentielle dans des contextes techniques BTS.',
      steps: [
        '<strong>Exemple 1 — Électrotechnique : atténuation en dB</strong><br/><br/>Un filtre passe-bas atténue le signal d\'un facteur 100 en tension. L\'atténuation en dB est :<br/>$$L = 20 \\times \\log_{10}(100) = 20 \\times 2 = 40\\;\\text{dB}$$<br/>Le signal de sortie est à -40 dB par rapport à l\'entrée.',
        '<strong>Exemple 2 — Chimie : constante de temps d\'une réaction d\'ordre 1</strong><br/><br/>Une réaction de décomposition suit $[A](t) = [A]_0 \\cdot e^{-kt}$ avec $k = 0{,}05\\;\\text{min}^{-1}$.<br/>Temps de demi-vie : $[A] = [A]_0 / 2 \\Rightarrow e^{-kt_{1/2}} = 1/2 \\Rightarrow -kt_{1/2} = -\\ln 2$<br/>$$t_{1/2} = \\frac{\\ln 2}{k} = \\frac{0{,}693}{0{,}05} = 13{,}9\\;\\text{min}$$',
        '<strong>Exemple 3 — Thermique : NTU d\'un échangeur</strong><br/><br/>L\'efficacité d\'un échangeur à courant croisé suit : $\\varepsilon = 1 - e^{-\\text{NTU}}$ (formule simplifiée).<br/>Si on souhaite $\\varepsilon = 0{,}8$ :<br/>$$0{,}8 = 1 - e^{-\\text{NTU}} \\Rightarrow e^{-\\text{NTU}} = 0{,}2 \\Rightarrow -\\text{NTU} = \\ln(0{,}2) = -1{,}609$$<br/>$$\\text{NTU} = 1{,}61$$',
        '<strong>Exemple 4 — Acoustique industrielle : addition de sources sonores</strong><br/><br/>Deux machines produisent chacune 80 dB. Le niveau combiné n\'est pas 160 dB, mais :<br/>$$L_{\\text{tot}} = 10\\log_{10}(10^{8} + 10^{8}) = 10\\log_{10}(2 \\times 10^{8}) = 10(0{,}301 + 8) = 83\\;\\text{dB}$$<br/>Deux sources identiques ajoutent toujours +3 dB.',
      ],
      answer: 'Le logarithme comprime les très grands rapports en valeurs maniables ; l\'exponentielle modélise tout phénomène dont la variation est proportionnelle à la valeur elle-même.',
    },

    formulas: [
      '<strong>Réciproque ln/exp</strong> : $e^{\\ln x} = x \\quad \\text{et} \\quad \\ln(e^x) = x$',
      '<strong>Produit → somme</strong> : $\\ln(ab) = \\ln a + \\ln b$',
      '<strong>Quotient → différence</strong> : $\\ln(a/b) = \\ln a - \\ln b$',
      '<strong>Puissance</strong> : $\\ln(a^n) = n\\ln a$',
      '<strong>Décibel (puissance)</strong> : $L = 10\\log_{10}(P/P_0)\\;\\text{dB}$',
      '<strong>Décibel (pression/tension)</strong> : $L = 20\\log_{10}(V/V_0)\\;\\text{dB}$',
      '<strong>Charge condensateur</strong> : $u_C(t) = E\\left(1 - e^{-t/\\tau}\\right), \\quad \\tau = RC$',
      '<strong>Demi-vie</strong> : $t_{1/2} = \\dfrac{\\ln 2}{k} \\approx \\dfrac{0{,}693}{k}$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Régime transitoire RC',
      title: 'Charge d\'un condensateur : la courbe exponentielle et ses repères',
      description: 'La tension $u(t)$ aux bornes du condensateur tend vers $E$ sans jamais l\'atteindre exactement. Les repères $\\tau$, $2\\tau$ et $5\\tau$ situent l\'avancement réel de la charge sur cette courbe.',
      svg: `
        <svg viewBox="0 0 360 240" role="img" aria-labelledby="bts-log-rc-title bts-log-rc-desc">
          <title id="bts-log-rc-title">Charge d'un condensateur RC</title>
          <desc id="bts-log-rc-desc">Courbe exponentielle croissante u(t) = E(1 - e^(-t/tau)) avec les reperes tau, 2tau et 5tau marquant 63,2%, 86,5% et 99,3% de la valeur finale E.</desc>
          <line class="guide-line" x1="55" y1="37.6" x2="330" y2="37.6"></line>
          <line class="axis" x1="55" y1="190" x2="345" y2="190"></line>
          <line class="axis" x1="55" y1="198" x2="55" y2="16"></line>
          <line class="guide-line" x1="105" y1="93.7" x2="105" y2="190"></line>
          <line class="guide-line" x1="55" y1="93.7" x2="105" y2="93.7"></line>
          <line class="guide-line" x1="155" y1="58.2" x2="155" y2="190"></line>
          <line class="guide-line" x1="55" y1="58.2" x2="155" y2="58.2"></line>
          <line class="guide-line" x1="305" y1="38.6" x2="305" y2="190"></line>
          <line class="guide-line" x1="55" y1="38.6" x2="305" y2="38.6"></line>
          <polyline class="curve-main" points="55,190 67.5,156.3 80,130.0 92.5,109.6 105,93.7 117.5,81.3 130,71.6 142.5,64.1 155,58.2 180,50.1 205,45.2 230,42.2 255,40.4 280,39.3 305,38.6 330,38.2"></polyline>
          <circle class="plot-point" cx="105" cy="93.7" r="4.5"></circle>
          <circle class="plot-point" cx="155" cy="58.2" r="4.5"></circle>
          <circle class="plot-point" cx="305" cy="38.6" r="4.5"></circle>
          <text class="annotation-label" x="112" y="116">63,2 %</text>
          <text class="annotation-label" x="162" y="82">86,5 %</text>
          <text class="annotation-label" x="298" y="62">99,3 %</text>
          <text class="annotation-label" x="270" y="30">E (valeur finale)</text>
          <text class="tick-label" x="50" y="204">0</text>
          <text class="tick-label" x="100" y="204">τ</text>
          <text class="tick-label" x="149" y="204">2τ</text>
          <text class="tick-label" x="299" y="204">5τ</text>
          <text class="tick-label" x="42" y="193">0</text>
          <text class="axis-label" x="336" y="207">t</text>
          <text class="axis-label" x="18" y="20">u(t)</text>
        </svg>
      `,
      notes: [
        'À $t = \\tau$, la tension a déjà atteint $u(\\tau) = E(1-e^{-1}) \\approx 0{,}632\\,E$, soit <strong>63,2 %</strong> de la valeur finale.',
        'À $t = 2\\tau$, $u(2\\tau) = E(1-e^{-2}) \\approx 0{,}865\\,E$, soit <strong>86,5 %</strong> — la progression ralentit nettement.',
        'À $t = 5\\tau$, $u(5\\tau) = E(1-e^{-5}) \\approx 0{,}993\\,E$, soit <strong>99,3 %</strong> : on considère alors le <strong>régime permanent</strong> atteint.'
      ],
      reading: 'La courbe se rapproche de $E$ de plus en plus lentement : chaque intervalle $\\tau$ supplémentaire ne comble qu\'une fraction de l\'écart restant, jamais la totalité.',
      caption: 'Charge d\'un condensateur RC : $u(t) = E\\left(1-e^{-t/\\tau}\\right)$, avec les repères usuels $\\tau$, $2\\tau$ et $5\\tau$.'
    },

    diagrams: [
      {
        theme: 'maths',
        kicker: 'Acoustique & électronique — le décibel',
        title: 'Pourquoi +3 dB double la puissance',
        description: 'Le décibel est une <strong>échelle logarithmique</strong> : il ne mesure pas une grandeur, mais un <strong>rapport</strong>. C\'est pour ça qu\'additionner des décibels revient à multiplier des puissances — la propriété $\\log(a \\times b) = \\log a + \\log b$ en action.',
        svg: `
          <svg viewBox="0 0 470 240" role="img" aria-labelledby="btslog-db-title btslog-db-desc">
            <title id="btslog-db-title">Echelle des decibels et rapport de puissance correspondant</title>
            <desc id="btslog-db-desc">Une reglette horizontale graduee en decibels de 0 a 30. Sous chaque graduation figure le rapport de puissance correspondant : 0 dB pour un rapport 1, 3 dB pour un rapport 2, 10 dB pour un rapport 10, 20 dB pour 100 et 30 dB pour 1000. Une seconde reglette situe des niveaux sonores reels du studio silencieux au marteau piqueur, avec le seuil de risque auditif a 85 decibels.</desc>

            <text class="axis-label" x="35" y="30">Addition en dB = multiplication en puissance</text>
            <line class="axis" x1="50" y1="72" x2="425" y2="72"></line>
            <line class="frame-line" x1="50" y1="66" x2="50" y2="78"></line>
            <line class="frame-line" x1="88" y1="66" x2="88" y2="78"></line>
            <line class="frame-line" x1="175" y1="66" x2="175" y2="78"></line>
            <line class="frame-line" x1="300" y1="66" x2="300" y2="78"></line>
            <line class="frame-line" x1="425" y1="66" x2="425" y2="78"></line>
            <text class="annotation-label" x="50" y="60" text-anchor="middle">0 dB</text>
            <text class="annotation-label" x="88" y="60" text-anchor="middle">3 dB</text>
            <text class="annotation-label" x="175" y="60" text-anchor="middle">10 dB</text>
            <text class="annotation-label" x="300" y="60" text-anchor="middle">20 dB</text>
            <text class="annotation-label" x="425" y="60" text-anchor="middle">30 dB</text>
            <text class="tick-label" x="50" y="92" text-anchor="middle">×1</text>
            <text class="tick-label" x="88" y="92" text-anchor="middle">×2</text>
            <text class="tick-label" x="175" y="92" text-anchor="middle">×10</text>
            <text class="tick-label" x="300" y="92" text-anchor="middle">×100</text>
            <text class="tick-label" x="425" y="92" text-anchor="middle">×1000</text>
            <circle class="plot-point" cx="88" cy="72" r="5"></circle>
            <text class="tick-label label-soft" x="96" y="108">+3 dB, c\'est deux fois plus de puissance</text>

            <text class="axis-label" x="35" y="148">Niveaux sonores réels (dB SPL)</text>
            <line class="axis" x1="50" y1="182" x2="425" y2="182"></line>
            <line class="frame-line" x1="50" y1="176" x2="50" y2="188"></line>
            <line class="frame-line" x1="136" y1="176" x2="136" y2="188"></line>
            <line class="frame-line" x1="222" y1="176" x2="222" y2="188"></line>
            <line class="frame-line" x1="294" y1="176" x2="294" y2="188"></line>
            <line class="frame-line" x1="366" y1="176" x2="366" y2="188"></line>
            <line class="frame-line" x1="425" y1="176" x2="425" y2="188"></line>
            <circle class="plot-point" cx="294" cy="182" r="6" fill="var(--secondary)"></circle>
            <text class="tick-label" x="50" y="172" text-anchor="middle">0</text>
            <text class="tick-label" x="136" y="172" text-anchor="middle">30</text>
            <text class="tick-label" x="222" y="172" text-anchor="middle">60</text>
            <text class="tick-label" x="294" y="172" text-anchor="middle">85</text>
            <text class="tick-label" x="366" y="172" text-anchor="middle">110</text>
            <text class="tick-label" x="425" y="172" text-anchor="middle">130</text>
            <text class="tick-label" x="50" y="200" text-anchor="middle">seuil</text>
            <text class="tick-label" x="136" y="200" text-anchor="middle">chambre</text>
            <text class="tick-label" x="222" y="200" text-anchor="middle">bureau</text>
            <text class="tick-label" x="366" y="200" text-anchor="middle">marteau-p.</text>
            <text class="tick-label" x="425" y="200" text-anchor="middle">douleur</text>
            <text class="annotation-label" x="294" y="218" text-anchor="middle" fill="var(--secondary)">85 dB : seuil de</text>
            <text class="annotation-label" x="294" y="232" text-anchor="middle" fill="var(--secondary)">port obligatoire des EPI</text>
          </svg>
        `,
        notes: [
          '<strong>La définition :</strong> $L = 10\\log_{10}\\left(\\dfrac{P}{P_0}\\right)$. Le décibel compare toujours une puissance à une <strong>référence</strong> $P_0$ — sans référence, un « niveau en dB » ne veut rien dire.',
          '<strong>+3 dB = ×2 :</strong> car $10\\log_{10}(2) \\approx 3{,}01$. Deux machines identiques côte à côte font 3 dB de plus qu\'une seule, pas le double de décibels.',
          '<strong>+10 dB = ×10 :</strong> car $10\\log_{10}(10) = 10$. Passer de 60 à 90 dB, ce n\'est pas « une fois et demie plus fort », c\'est <strong>mille fois</strong> plus de puissance acoustique.',
          '<strong>Conséquence réglementaire :</strong> le seuil de 85 dB déclenche l\'obligation de protection auditive. Le franchir de 3 dB double l\'énergie reçue par l\'oreille, ce qui divise par deux la durée d\'exposition admissible.'
        ],
        reading: 'Chaque fois que tu vois une unité « en dB » (bruit, gain d\'amplificateur, atténuation d\'un câble), traduis-la mentalement en <strong>facteur multiplicatif</strong> : c\'est la seule lecture qui a un sens physique.',
        caption: 'L\'échelle des décibels : équivalence entre addition de décibels et multiplication de puissances, appliquée aux niveaux sonores industriels.'
      },
      {
        theme: 'maths',
        kicker: 'Décroissance exponentielle',
        title: 'La demi-vie : toujours le même temps pour diviser par deux',
        description: 'Une décroissance exponentielle $N(t) = N_0 \\cdot e^{-t/\\tau}$ a une propriété contre-intuitive : le temps nécessaire pour <strong>diviser la quantité par deux</strong> est constant, quel que soit le point de départ.',
        svg: `
          <svg viewBox="0 0 440 250" role="img" aria-labelledby="btslog-demivie-title btslog-demivie-desc">
            <title id="btslog-demivie-title">Decroissance exponentielle et demi-vie constante</title>
            <desc id="btslog-demivie-desc">Une courbe decroissante partant de N zero et tendant vers l'axe horizontal sans le toucher. Des lignes en pointilles montrent qu'apres une demi-vie il reste la moitie, apres deux demi-vies le quart, apres trois demi-vies le huitieme, et que ces trois intervalles de temps ont exactement la meme largeur.</desc>

            <line class="grid-line" x1="70" y1="60" x2="400" y2="60"></line>
            <line class="grid-line" x1="70" y1="125" x2="400" y2="125"></line>
            <line class="grid-line" x1="70" y1="157" x2="400" y2="157"></line>
            <line class="grid-line" x1="70" y1="174" x2="400" y2="174"></line>
            <line class="axis" x1="70" y1="195" x2="410" y2="195"></line>
            <line class="axis" x1="70" y1="205" x2="70" y2="45"></line>

            <path class="curve-main" fill="none" d="M 70 60 L 80 69 L 91 77 L 101 84 L 111 91 L 122 98 L 132 104 L 142 110 L 153 115 L 163 120 L 173 125 L 184 129 L 194 133 L 204 137 L 215 141 L 225 144 L 235 147 L 246 150 L 256 153 L 266 155 L 277 158 L 287 160 L 297 162 L 308 164 L 318 165 L 328 167 L 339 169 L 349 170 L 359 171 L 370 173 L 380 174"></path>

            <line class="guide-line" x1="173" y1="125" x2="173" y2="195"></line>
            <line class="guide-line" x1="277" y1="157" x2="277" y2="195"></line>
            <line class="guide-line" x1="380" y1="174" x2="380" y2="195"></line>
            <circle class="plot-point" cx="70" cy="60" r="5"></circle>
            <circle class="plot-point" cx="173" cy="125" r="5"></circle>
            <circle class="plot-point" cx="277" cy="157" r="5"></circle>
            <circle class="plot-point" cx="380" cy="174" r="5"></circle>

            <text class="tick-label" x="62" y="64" text-anchor="end">N₀</text>
            <text class="tick-label" x="62" y="129" text-anchor="end">N₀/2</text>
            <text class="tick-label" x="62" y="161" text-anchor="end">N₀/4</text>
            <text class="tick-label" x="62" y="178" text-anchor="end">N₀/8</text>
            <text class="tick-label" x="173" y="210" text-anchor="middle">t½</text>
            <text class="tick-label" x="277" y="210" text-anchor="middle">2 t½</text>
            <text class="tick-label" x="380" y="210" text-anchor="middle">3 t½</text>
            <text class="axis-label" x="410" y="212" text-anchor="end">t</text>

            <line class="graph-line" x1="70" y1="226" x2="173" y2="226" stroke="var(--secondary)"></line>
            <line class="graph-line" x1="173" y1="226" x2="277" y2="226" stroke="var(--accent)"></line>
            <line class="graph-line" x1="277" y1="226" x2="380" y2="226" stroke="var(--secondary)"></line>
            <text class="annotation-label" x="225" y="240" text-anchor="middle">trois intervalles de même durée — chacun divise par 2</text>
          </svg>
        `,
        notes: [
          '<strong>La demi-vie se calcule avec un logarithme :</strong> on cherche $t$ tel que $e^{-t/\\tau} = 0{,}5$, d\'où $t_{1/2} = \\tau \\cdot \\ln 2 \\approx 0{,}693\\,\\tau$.',
          '<strong>Elle ne dépend pas du point de départ :</strong> passer de $N_0$ à $N_0/2$ prend exactement le même temps que passer de $N_0/2$ à $N_0/4$. C\'est la signature d\'une décroissance exponentielle.',
          '<strong>Zéro n\'est jamais atteint :</strong> mathématiquement la courbe tend vers l\'axe sans le toucher. En pratique, on considère le phénomène terminé après $5\\tau$ (il reste moins de 1 %).',
          '<strong>Où ça sert en BTS :</strong> décharge d\'un condensateur, refroidissement d\'une pièce, atténuation d\'un signal le long d\'une fibre, dégradation d\'un produit — même équation à chaque fois.'
        ],
        reading: 'Le réflexe : si un relevé montre que la grandeur est divisée par le <strong>même facteur</strong> à intervalles de temps égaux, tu tiens une exponentielle — et le logarithme est l\'outil qui la linéarise.',
        caption: 'Décroissance exponentielle : la demi-vie $t_{1/2} = \\tau \\ln 2$ est constante, quel que soit le niveau de départ.'
      }
    ],

    recap: [
      '$\\ln$ et $\\exp$ sont inverses l\'une de l\'autre : $e^{\\ln x} = x$',
      'Propriétés : $\\ln(ab) = \\ln a + \\ln b$ — $\\ln(a/b) = \\ln a - \\ln b$ — $\\ln(a^n) = n\\ln a$',
      'Décibels : $L = 10\\log(P/P_0)$ pour les puissances, $20\\log(V/V_0)$ pour les tensions',
      '+3 dB ≈ doubler la puissance — +10 dB ≈ ×10 la puissance perçue',
      'Constante de temps : à $t = \\tau$, on atteint 63% de la valeur finale — à $5\\tau$, régime permanent',
      'Demi-vie : $t_{1/2} = \\ln 2 / k \\approx 0{,}693/k$',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>$\\ln$ vs $\\log$</strong> : sur les calculatrices, "log" est souvent $\\log_{10}$ et "ln" est le logarithme naturel. Ne pas les confondre.<br/><br/>
• <strong>$\\ln(a + b) \\neq \\ln a + \\ln b$</strong> : la propriété s'applique au produit, pas à la somme.<br/><br/>
• <strong>$\\ln(0)$</strong> n'existe pas (domaine = $x > 0$ strictement).<br/><br/>
• <strong>Additionner des décibels</strong> : on ne peut pas additionner des dB directement comme des nombres. Deux sources de 80 dB ne font pas 160 dB mais 83 dB.<br/><br/>
• <strong>Signe de $\\ln$</strong> : $\\ln(x) < 0$ si $0 < x < 1$, et $\\ln(x) > 0$ si $x > 1$. $\\ln(1) = 0$.`,
  },

  quiz: [
    {
      q: 'Quelle est la valeur de $\\ln(e^3)$ ?',
      options: ['$e^3$', '3', '$3e$', '$\\log_{10}(3)$'],
      answer: 1,
      correction: 'ln et exp sont inverses : ln(e³) = 3. De même, e^(ln x) = x pour tout x > 0.',
    },
    {
      q: 'Un amplificateur audio multiplie la puissance par 1000. Quel est son gain en dB ?',
      options: ['10 dB', '20 dB', '30 dB', '60 dB'],
      answer: 2,
      correction: 'L = 10 × log₁₀(1000) = 10 × 3 = 30 dB. log₁₀(1000) = log₁₀(10³) = 3.',
    },
    {
      q: 'Quelle propriété est vraie ?',
      options: ['$\\ln(a + b) = \\ln a + \\ln b$', '$\\ln(a \\cdot b) = \\ln a + \\ln b$', '$\\ln(a - b) = \\ln a - \\ln b$', '$\\ln(2a) = 2\\ln a$'],
      answer: 1,
      correction: 'ln(a·b) = ln a + ln b est la propriété fondamentale. Les autres sont fausses : ln(a+b) ≠ ln a + ln b, et ln(2a) = ln 2 + ln a ≠ 2 ln a.',
    },
    {
      q: 'Un condensateur de $C = 100\\;\\mu\\text{F}$ est en série avec $R = 10\\;\\text{k}\\Omega$. Quelle est la constante de temps ?',
      options: ['$1\\;\\mu\\text{s}$', '$1\\;\\text{ms}$', '$1\\;\\text{s}$', '$100\\;\\text{s}$'],
      answer: 2,
      correction: 'τ = RC. Astuce dimensionnelle : quand R est exprimé en kΩ et C en μF, leur produit donne directement τ en ms, car kΩ × μF = 10³ × 10⁻⁶ = 10⁻³ = ms. Ici R = 10 kΩ et C = 100 μF, donc τ = 10 × 100 = 1000 ms = 1 s.',
    },
    {
      q: 'Si $e^x = 5$, alors $x$ vaut :',
      options: ['$5/e$', '$\\ln 5 \\approx 1{,}609$', '$\\log_{10} 5 \\approx 0{,}699$', '$5^e$'],
      answer: 1,
      correction: 'e^x = 5 ⟹ x = ln(5) ≈ 1,609. ln est la réciproque de exp.',
    },
    {
      q: 'Une machine produit un bruit de 85 dB. Une deuxième machine identique est allumée. Le niveau sonore combiné est :',
      figure: {
        svg: `
          <svg viewBox="0 0 380 160" role="img" aria-labelledby="qlog-db-title qlog-db-desc">
            <title id="qlog-db-title">Addition de deux sources sonores identiques</title>
            <desc id="qlog-db-desc">Deux machines identiques emettant chacune 85 decibels. Leurs puissances acoustiques s'additionnent, ce qui double la puissance totale, mais les decibels ne s'additionnent pas : le niveau resultant est a determiner.</desc>
            <rect x="30" y="45" width="80" height="55" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 40%, var(--border))"></rect>
            <text class="annotation-label" x="70" y="70" text-anchor="middle">Machine 1</text>
            <text class="tick-label" x="70" y="88" text-anchor="middle">85 dB</text>
            <rect x="30" y="105" width="80" height="45" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 14%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 40%, var(--border))"></rect>
            <text class="annotation-label" x="70" y="126" text-anchor="middle">Machine 2</text>
            <text class="tick-label" x="70" y="143" text-anchor="middle">85 dB</text>

            <line class="curve-main" x1="115" y1="72" x2="180" y2="95"></line>
            <line class="curve-main" x1="115" y1="126" x2="180" y2="103"></line>
            <polygon points="190,99 172,92 172,106" fill="var(--primary)"></polygon>

            <text class="annotation-label" x="205" y="72">puissance acoustique</text>
            <text class="annotation-label" x="205" y="92">P + P = 2P  (×2)</text>
            <line class="grid-line" x1="205" y1="104" x2="355" y2="104"></line>
            <text class="annotation-label" x="205" y="126" fill="var(--secondary)">niveau résultant = ?</text>
            <text class="tick-label" x="205" y="146" fill="var(--secondary)">(ce n\'est pas 170 dB)</text>
            <text class="tick-label" x="30" y="30">Les décibels ne s\'additionnent pas — les puissances, si.</text>
          </svg>
        `,
        caption: 'Deux sources identiques doublent la puissance : c\'est un ×2, donc un ajout fixe en décibels.'
      },
      options: ['85 dB', '88 dB', '90 dB', '170 dB'],
      answer: 1,
      correction: '88 dB. Deux sources identiques : L_tot = 10·log(2 × 10^(85/10)) = 85 + 10·log(2) = 85 + 3,01 ≈ 88 dB. On n\'additionne jamais les dB directement.',
    },
    {
      q: 'La constante de temps d\'un circuit RC représente le temps pour atteindre :',
      options: ['50 % de la valeur finale', '63,2 % de la valeur finale', '86,5 % de la valeur finale', '99 % de la valeur finale'],
      answer: 1,
      correction: 'À t = τ : u_C = E(1 - e⁻¹) = E × 0,632 = 63,2 % de E. À t = 2τ : 86,5 %. À t = 5τ : 99,3 % (régime permanent).',
    },
    {
      q: 'En chimie, le pH est défini par $\\text{pH} = -\\log_{10}[H^+]$. Si $[H^+] = 10^{-3}\\;\\text{mol/L}$, le pH vaut :',
      options: ['3', '-3', '0,001', '$\\ln(10^{-3})$'],
      answer: 0,
      correction: 'pH = -log₁₀(10⁻³) = -(-3) = 3. Un pH de 3 correspond à une solution acide (eau pure pH 7, vinaigre pH ≈ 3).',
    },
    {
      q: 'Quelle est la valeur de $\\ln(1)$ ?',
      options: ['1', 'e', '0', 'indéfinie'],
      answer: 2,
      correction: 'ln(1) = 0 car e⁰ = 1. De manière générale, ln de 1 vaut toujours 0 pour n\'importe quelle base logarithmique.',
    },
    {
      q: 'On mesure une atténuation de -20 dB sur un câble (en tension). Le rapport $V_{\\text{sortie}} / V_{\\text{entrée}}$ vaut :',
      options: ['0,01', '0,1', '0,5', '0,2'],
      answer: 1,
      correction: '-20 dB = 20 × log(V_s/V_e) ⟹ log(V_s/V_e) = -1 ⟹ V_s/V_e = 10⁻¹ = 0,1. Une atténuation de -20 dB en tension correspond au facteur 1/10.',
    },
    {
      q: 'Une solution a $[H^+] = 4 \\times 10^{-3}$ mol/L. Son pH est environ :',
      options: ['2,4', '3,6', '3', '0,4 × 10⁻³'],
      answer: 0,
      correction: 'pH = -log₁₀(4×10⁻³) = 3 - log₁₀(4) ≈ 3 - 0,602 ≈ 2,4.',
    },
    {
      q: 'Une substance a un temps de demi-vie de 20 min. Sa constante de vitesse $k$ est environ :',
      options: ['0,035 min⁻¹', '0,0693 min⁻¹', '14,43 min⁻¹', '0,5 min⁻¹'],
      answer: 0,
      correction: 'k = ln(2)/t₁/₂ = 0,693/20 ≈ 0,035 min⁻¹.',
    },
    {
      q: 'Un signal perd 99 % de sa puissance en traversant un câble. L\'atténuation en dB est :',
      options: ['20 dB', '10 dB', '100 dB', '1 dB'],
      answer: 0,
      correction: 'Il reste 1 % de la puissance, soit un rapport de 0,01. L = 10log₁₀(0,01) = -20 dB, soit une atténuation de 20 dB.',
    },
    {
      q: 'Un échangeur suit $\\varepsilon = 1 - e^{-\\text{NTU}}$. Pour NTU = 2, l\'efficacité est environ :',
      options: ['86,5 %', '13,5 %', '50 %', '100 %'],
      answer: 0,
      correction: 'ε = 1 - e⁻² = 1 - 0,135 ≈ 0,865 = 86,5 %.',
    },
    {
      q: 'Dans un circuit RC en charge, à $t = 3\\tau$, la tension atteint environ :',
      figure: {
        svg: `
          <svg viewBox="0 0 340 190" role="img" aria-labelledby="qlog-rc-title qlog-rc-desc">
            <title id="qlog-rc-title">Charge d'un condensateur et reperes en constantes de temps</title>
            <desc id="qlog-rc-desc">La courbe de charge d'un condensateur monte rapidement puis s'aplatit vers la tension finale E. Les instants correspondant a une, deux, trois et cinq constantes de temps sont reperes sur l'axe des temps ; le pourcentage atteint a trois constantes de temps est l'inconnue.</desc>
            <line class="grid-line" x1="108" y1="45" x2="108" y2="170"></line>
            <line class="grid-line" x1="156" y1="45" x2="156" y2="170"></line>
            <line class="grid-line" x1="204" y1="45" x2="204" y2="170"></line>
            <line class="axis" x1="60" y1="170" x2="315" y2="170"></line>
            <line class="axis" x1="60" y1="180" x2="60" y2="45"></line>
            <line class="guide-line" x1="60" y1="65" x2="310" y2="65" stroke="var(--secondary)"></line>
            <text class="tick-label" x="52" y="69" text-anchor="end">E</text>
            <path class="curve-main" fill="none" d="M 60 170 L 70 151 L 79 135 L 89 123 L 98 112 L 108 104 L 118 97 L 127 91 L 137 86 L 146 82 L 156 79 L 166 77 L 175 75 L 185 73 L 194 71 L 204 70 L 214 69 L 223 69 L 233 68 L 242 67 L 252 67 L 262 67 L 271 66 L 281 66 L 290 66 L 300 66"></path>
            <circle class="plot-point-alt" cx="108" cy="104" r="5"></circle>
            <circle class="plot-point-alt" cx="156" cy="79" r="5"></circle>
            <circle class="plot-point" cx="204" cy="70" r="7"></circle>
            <line class="guide-line" x1="204" y1="70" x2="60" y2="70"></line>
            <text class="tick-label" x="108" y="186" text-anchor="middle">τ</text>
            <text class="tick-label" x="156" y="186" text-anchor="middle">2τ</text>
            <text class="annotation-label" x="204" y="186" text-anchor="middle">3τ</text>
            <text class="tick-label" x="116" y="100">63 %</text>
            <text class="tick-label" x="164" y="76">86 %</text>
            <text class="annotation-label" x="214" y="60">? %</text>
            <text class="axis-label" x="315" y="186" text-anchor="end">t</text>
            <text class="axis-label" x="60" y="38">u(t)</text>
          </svg>
        `,
        caption: 'À chaque constante de temps, il reste $e^{-1} \\approx 37\\;\\%$ de l\'écart qui restait à combler.'
      },
      options: ['95 %', '86,5 %', '63,2 %', '99,3 %'],
      answer: 0,
      correction: 'u(3τ) = E(1-e⁻³) = E × (1-0,0498) ≈ 0,95E, soit 95 % de la valeur finale.',
    },
    {
      q: 'Après 3 demi-vies, la concentration restante d\'un réactif par rapport à la concentration initiale est :',
      options: ['12,5 %', '25 %', '33,3 %', '50 %'],
      answer: 0,
      correction: 'Après n demi-vies, il reste (1/2)ⁿ de la quantité initiale. Pour n=3 : (1/2)³ = 1/8 = 12,5 %.',
    },
    {
      q: 'Trois machines identiques produisent chacune 75 dB. Le niveau sonore combiné est environ :',
      options: ['80 dB', '78 dB', '225 dB', '84 dB'],
      answer: 0,
      correction: 'L_tot = 10log₁₀(3×10^(75/10)) = 75 + 10log₁₀(3) ≈ 75 + 4,77 ≈ 80 dB. On n\'additionne jamais les dB directement.',
    },
    {
      q: 'Résoudre $2e^{0{,}5x} = 10$ (x arrondi à 0,01) :',
      options: ['3,22', '1,61', '0,32', '5'],
      answer: 0,
      correction: '$e^{0{,}5x} = 5 \\Rightarrow 0{,}5x = \\ln 5 \\approx 1{,}609 \\Rightarrow x \\approx 3{,}22$.',
    },
    {
      q: 'La température d\'un objet suit $T(t) = 20 + 80e^{-t/15}$ (°C, min). La température initiale (à $t=0$) est :',
      options: ['100 °C', '20 °C', '80 °C', '15 °C'],
      answer: 0,
      correction: '$T(0) = 20 + 80 \\times e^0 = 20 + 80 = 100°C$.',
    },
    {
      q: 'Simplifier $\\ln(e^2 \\times e^3)$ :',
      options: ['5', '6', '$e^5$', '1'],
      answer: 0,
      correction: '$e^2 \\times e^3 = e^5$, donc $\\ln(e^5) = 5$.',
    },
    {
      q: 'Sur une courbe de charge RC, on lit que la tension atteint 63,2 % de sa valeur finale à $t = 4$ s. La constante de temps $\\tau$ est :',
      options: ['4 s', '2 s', '8 s', '63,2 s'],
      answer: 0,
      correction: 'Par définition, à $t = \\tau$, la tension atteint exactement 63,2 % de sa valeur finale. Donc $\\tau = 4$ s.',
    },
    {
      q: 'Un amplificateur multiplie la tension par 10. Son gain en dB est :',
      options: ['20 dB', '10 dB', '100 dB', '3 dB'],
      answer: 0,
      correction: '$G = 20\\log_{10}(10) = 20 \\times 1 = 20$ dB.',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['RC_charge', 'dB_gain', 'demi_vie', 'pH', 'resolution_exp', 'somme_dB']);

      if (type === 'RC_charge') {
        const R = pick([5, 10, 20, 47]);  // kΩ
        const C = pick([10, 22, 47, 100]); // μF
        const E = pick([12, 24, 5, 15]);   // V
        const tau = R * 1000 * C * 1e-6;   // secondes
        const t = parseFloat((2.5 * tau).toFixed(3));
        const uc = E * (1 - Math.exp(-t / tau));
        const context = pick(['circuit de temporisation d\'automate', 'alimentation à découpage', 'circuit de démarrage progressif']);
        return {
          statement: `Dans un ${context}, un condensateur $C = ${C}\\;\\mu\\text{F}$ se charge à travers $R = ${R}\\;\\text{k}\\Omega$ sous une tension $E = ${E}\\;\\text{V}$.<br/><br/>Calculez la tension aux bornes du condensateur à $t = 2{,}5\\tau$ (en V, arrondi à 0,01 V).`,
          answer: parseFloat(uc.toFixed(2)),
          tolerance: 0.05,
          unit: 'V',
          hint: `Calculer d'abord $\\tau = RC$, puis appliquer $u_C = E(1 - e^{-t/\\tau})$ avec $t = 2{,}5\\tau$.`,
          solution: `$\\tau = ${R} \\times 10^3 \\times ${C} \\times 10^{-6} = ${fr(tau, 3)}\\;\\text{s}$<br/>$u_C = ${E}\\left(1 - e^{-2{,}5}\\right) = ${E} \\times (1 - 0{,}0821) = ${E} \\times 0{,}9179 \\approx ${fr(uc, 2)}\\;\\text{V}$`,
        };
      }

      if (type === 'dB_gain') {
        const gain_dB = pick([-20, -40, 20, 40, 6, -6]);
        const factor = Math.pow(10, gain_dB / 20);
        const context = pick(['filtre actif', 'préamplificateur audio', 'câble de transmission', 'atténuateur RF']);
        const direction = gain_dB > 0 ? 'gain' : 'atténuation';
        return {
          statement: `Un ${context} présente un ${direction} de ${Math.abs(gain_dB)} dB en tension.<br/><br/>Calculez le rapport $|V_{\\text{sortie}} / V_{\\text{entrée}}|$ (arrondi à 4 chiffres significatifs).`,
          answer: parseFloat(factor.toFixed(4)),
          tolerance: 0.001,
          unit: '',
          hint: `$G_{dB} = 20\\log_{10}(V_s/V_e)$ → $V_s/V_e = 10^{G_{dB}/20}$.`,
          solution: `$\\dfrac{V_s}{V_e} = 10^{${gain_dB}/20} = 10^{${fr(gain_dB/20, 1)}} = ${fr(factor, 4)}$`,
        };
      }

      if (type === 'demi_vie') {
        const k = pick([0.02, 0.05, 0.1, 0.2, 0.5]); // min⁻¹
        const t_half = Math.log(2) / k;
        const context = pick(['traitement d\'eau potable (chloration)', 'réaction de saponification', 'dépollution d\'effluents industriels', 'désinfection UV de l\'air']);
        return {
          statement: `Une réaction de premier ordre lors d'un ${context} a une constante de vitesse $k = ${fr(k)}\\;\\text{min}^{-1}$.<br/><br/>Calculez le temps de demi-vie $t_{1/2}$ (en min, arrondi à 0,1 min).`,
          answer: parseFloat(t_half.toFixed(1)),
          tolerance: 0.1,
          unit: 'min',
          hint: `$t_{1/2} = \\ln 2 / k \\approx 0{,}693 / k$.`,
          solution: `$t_{1/2} = \\dfrac{\\ln 2}{k} = \\dfrac{0{,}6931}{${fr(k)}} \\approx ${fr(t_half, 1)}\\;\\text{min}$`,
        };
      }

      if (type === 'pH') {
        const n = pick([2, 3, 4, 5, 6]);
        const a = pick([1.5, 2, 3.2, 4.5, 5, 7.9]);
        const pH = Math.round((n - Math.log10(a)) * 100) / 100;
        const context = pick(['une eau de process industriel', 'un bain de traitement de surface', 'un effluent avant rejet en station d\'épuration', 'une solution de nettoyage CIP (agroalimentaire)']);
        return {
          statement: `On mesure $[H^+] = ${fr(a)} \\times 10^{-${n}}\\;\\text{mol/L}$ dans ${context}.<br/><br/>Calculez le pH (arrondi à 0,01) sachant que $\\text{pH} = -\\log_{10}[H^+]$.`,
          answer: pH,
          tolerance: 0.02,
          unit: '',
          hint: `$\\text{pH} = ${n} - \\log_{10}(${fr(a)})$.`,
          solution: `$\\text{pH} = -\\log_{10}(${fr(a)} \\times 10^{-${n}}) = ${n} - \\log_{10}(${fr(a)}) = ${n} - ${fr(Math.log10(a), 3)} = ${fr(pH, 2)}$`,
        };
      }

      if (type === 'resolution_exp') {
        const context = pick([
          { texte: 'un échangeur thermique à courant croisé', formule: '\\varepsilon = 1 - e^{-\\text{NTU}}', variable: '\\text{NTU}' },
          { texte: 'un filtre à charbon actif (efficacité d\'adsorption)', formule: '\\eta = 1 - e^{-kt}', variable: 'kt' },
        ]);
        const eps = pick([0.7, 0.75, 0.8, 0.85, 0.9, 0.95]);
        const ntu = Math.round(-Math.log(1 - eps) * 100) / 100;
        return {
          statement: `L'efficacité d'${context.texte} suit la loi $${context.formule}$.<br/><br/>Pour une efficacité souhaitée $\\varepsilon = ${fr(eps)}$, calculez $${context.variable}$ (arrondi à 0,01).`,
          answer: ntu,
          tolerance: 0.02,
          unit: '',
          hint: `$e^{-${context.variable}} = 1-\\varepsilon \\Rightarrow ${context.variable} = -\\ln(1-\\varepsilon)$.`,
          solution: `$${context.variable} = -\\ln(1 - ${fr(eps)}) = -\\ln(${fr(1 - eps, 2)}) = ${fr(ntu, 2)}$`,
        };
      }

      // somme_dB — addition de deux niveaux sonores différents
      const L1 = pick([70, 75, 80, 85, 90]);
      const deltaL = pick([2, 3, 5, 8, 10]);
      const L2 = L1 + deltaL;
      const Ltot = Math.round(10 * Math.log10(Math.pow(10, L1 / 10) + Math.pow(10, L2 / 10)) * 100) / 100;
      const context2 = pick(['deux compresseurs fonctionnant simultanément', 'deux ventilateurs de toiture', 'une pompe et son moteur d\'entraînement', 'deux machines-outils voisines']);
      return {
        statement: `Dans un atelier, ${context2} produisent respectivement $L_1 = ${L1}\\;\\text{dB}$ et $L_2 = ${L2}\\;\\text{dB}$.<br/><br/>Calculez le niveau sonore combiné $L_{tot}$ (en dB, arrondi à 0,1).`,
        answer: parseFloat(Ltot.toFixed(1)),
        tolerance: 0.1,
        unit: 'dB',
        hint: `$L_{tot} = 10\\log_{10}\\left(10^{L_1/10} + 10^{L_2/10}\\right)$.`,
        solution: `$L_{tot} = 10\\log_{10}(10^{${L1}/10} + 10^{${L2}/10}) = ${fr(Ltot, 1)}\\;\\text{dB}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en maintenance industrielle analyse la réponse d'un système d'asservissement de température. La régulation utilise un capteur thermique dont la réponse suit un modèle du premier ordre.<br/><br/>
Le four industriel monte de 20°C à 200°C selon la loi :<br/>
$$T(t) = 200 - 180 \\cdot e^{-t/\\tau}$$<br/>
avec $\\tau = 8\\;\\text{min}$ (constante de temps thermique).<br/><br/>
Le four est considéré opérationnel dès que $T \\geq 170°\\text{C}$.`,
    figure: {
      svg: `
        <svg viewBox="0 0 460 250" role="img" aria-labelledby="pb-log-title pb-log-desc">
          <title id="pb-log-title">Montee en temperature d'un four selon un premier ordre</title>
          <desc id="pb-log-desc">Un repere avec le temps en minutes en abscisse et la temperature en degres en ordonnee. La courbe part de 20 degres et croit en s'aplatissant vers une asymptote horizontale a 200 degres, sans jamais l'atteindre. Une ligne horizontale marque le seuil operationnel de 170 degres ; la date a laquelle la courbe le franchit est l'inconnue du probleme. Les reperes tau, deux tau et trois tau sont places sur l'axe des temps.</desc>

          <line class="grid-line" x1="70" y1="150" x2="410" y2="150"></line>
          <line class="grid-line" x1="70" y1="110" x2="410" y2="110"></line>
          <line class="grid-line" x1="140" y1="45" x2="140" y2="200"></line>
          <line class="grid-line" x1="210" y1="45" x2="210" y2="200"></line>
          <line class="grid-line" x1="280" y1="45" x2="280" y2="200"></line>
          <line class="grid-line" x1="350" y1="45" x2="350" y2="200"></line>
          <line class="axis" x1="70" y1="200" x2="420" y2="200"></line>
          <line class="axis" x1="70" y1="210" x2="70" y2="40"></line>

          <line class="guide-line" x1="70" y1="55" x2="410" y2="55" stroke="var(--secondary)"></line>
          <text class="annotation-label" x="340" y="48" fill="var(--secondary)">asymptote 200 °C</text>

          <path class="curve-main" fill="none" d="M 70 190 L 84 168 L 98 150 L 112 134 L 126 121 L 140 110 L 154 101 L 168 93 L 182 87 L 196 81 L 210 76 L 224 72 L 238 69 L 252 67 L 266 64 L 280 62 L 294 61 L 308 60 L 322 59 L 336 58 L 350 57 L 364 57 L 378 56 L 392 56 L 406 55"></path>

          <line class="graph-line" x1="70" y1="82" x2="410" y2="82" stroke="var(--accent)"></line>
          <text class="annotation-label" x="356" y="76" fill="var(--accent)">seuil 170 °C</text>
          <line class="guide-line" x1="203" y1="82" x2="203" y2="200"></line>
          <circle class="plot-point" cx="203" cy="82" r="7"></circle>
          <text class="annotation-label" x="212" y="100">t = ?</text>

          <circle class="plot-point-alt" cx="70" cy="190" r="6"></circle>
          <text class="tick-label" x="62" y="194" text-anchor="end">20</text>
          <text class="tick-label" x="62" y="114" text-anchor="end">145</text>
          <text class="tick-label" x="62" y="154" text-anchor="end">100</text>
          <text class="tick-label" x="140" y="216" text-anchor="middle">8 (τ)</text>
          <text class="tick-label" x="210" y="216" text-anchor="middle">16 (2τ)</text>
          <text class="tick-label" x="280" y="216" text-anchor="middle">24 (3τ)</text>
          <text class="tick-label" x="350" y="216" text-anchor="middle">32 (4τ)</text>
          <text class="axis-label" x="420" y="232" text-anchor="end">t (min)</text>
          <text class="axis-label" x="70" y="32">T (°C)</text>

          <text class="tick-label" x="70" y="244">T(t) = 200 − 180·e^(−t/τ)   avec τ = 8 min — isoler t exige un logarithme.</text>
        </svg>
      `,
      caption: 'Montée du four en premier ordre : le franchissement du seuil de 170 °C ne se lit pas, il se calcule avec un $\\ln$.'
    },
    tasks: [
      'Calculez la température à $t = \\tau = 8\\;\\text{min}$. Vérifiez que le résultat est cohérent avec la définition de la constante de temps.',
      'À quel instant $t^*$ le four atteint-il la température de 170°C ? (Isoler $t$ dans l\'équation $T(t) = 170$)',
      'Si l\'ingénieur doit vérifier que le four est opérationnel avant 25 min, cette contrainte est-elle respectée ? Justifier.',
      'Le fabricant garantit que le four atteint 99 % de sa valeur finale en un temps $t_{99}$. Calculez $t_{99}$.',
    ],
    solutions: [
      `$T(\\tau) = 200 - 180 \\cdot e^{-1} = 200 - 180 \\times 0{,}368 = 200 - 66{,}2 = 133{,}8°\\text{C}$<br/>Progression depuis 20°C jusqu'à 200°C : on a parcouru $133{,}8 - 20 = 113{,}8°\\text{C}$ sur $200 - 20 = 180°\\text{C}$, soit $113{,}8/180 = 63{,}2\\%$ ✓ (cohérent avec la définition : à $t = \\tau$, on atteint 63,2% de la variation totale).`,
      `$170 = 200 - 180 \\cdot e^{-t^*/8}$<br/>$180 \\cdot e^{-t^*/8} = 30$<br/>$e^{-t^*/8} = 30/180 = 1/6$<br/>$-t^*/8 = \\ln(1/6) = -\\ln 6$<br/>$t^* = 8\\ln 6 = 8 \\times 1{,}792 \\approx 14{,}3\\;\\text{min}$`,
      `$t^* \\approx 14{,}3\\;\\text{min} < 25\\;\\text{min}$ → la contrainte est respectée avec une marge confortable de $25 - 14{,}3 = 10{,}7\\;\\text{min}$.`,
      `$T(t_{99}) = 20 + 0{,}99 \\times 180 = 20 + 178{,}2 = 198{,}2°\\text{C}$<br/>$198{,}2 = 200 - 180 e^{-t_{99}/8}$<br/>$e^{-t_{99}/8} = 1{,}8/180 = 0{,}01$<br/>$-t_{99}/8 = \\ln(0{,}01) = -4{,}605$<br/>$t_{99} = 8 \\times 4{,}605 \\approx 36{,}8\\;\\text{min} \\approx 5\\tau$ ✓`,
    ],
    finalAnswer: 'Le four devient opérationnel à $t^* \\approx 14{,}3\\;\\text{min}$, bien avant la limite de 25 min. La valeur 99% est atteinte en $t_{99} \\approx 36{,}8\\;\\text{min}$ (proche de l\'approximation empirique usuelle $5\\tau = 40\\;\\text{min}$, qui correspond en réalité à 99,3 %).',
  },

  evaluation: {
    title: 'Évaluation — Logarithmes & Exponentielles',
    duration: '25 min',
    questions: [
      {
        statement: 'Résoudre : $3 \\cdot e^{2x} = 48$. Donner $x$ arrondi à 0,01.',
        type: 'numeric',
        answer: 1.39,
        tolerance: 0.02,
        unit: '',
        points: 3,
        correction: '$e^{2x} = 16 \\Rightarrow 2x = \\ln 16 = 4\\ln 2 \\approx 2{,}773 \\Rightarrow x \\approx 1{,}39$.',
      },
      {
        statement: 'Un câble de fibre optique présente une atténuation de 0,3 dB/km sur 80 km. Quel est le rapport $P_{\\text{sortie}}/P_{\\text{entrée}}$ (arrondi à 3 chiffres significatifs) ?',
        type: 'numeric',
        answer: 0.00398,
        tolerance: 0.0002,
        unit: '',
        points: 4,
        correction: '$L_{\\text{total}} = 0{,}3 \\times 80 = 24\\;\\text{dB}$. $P_s/P_e = 10^{-24/10} = 10^{-2{,}4} \\approx 3{,}98 \\times 10^{-3}$. La puissance de sortie est environ 0,4 % de la puissance d\'entrée.',
      },
      {
        statement: 'Simplifier : $\\ln(\\sqrt{x}) + \\ln(x^2) - \\ln(x^{3/2})$',
        type: 'multiple-choice',
        options: ['$\\ln x$', '$2\\ln x$', '$\\frac{1}{2}\\ln x$', '$0$'],
        answer: 0,
        points: 3,
        correction: '$\\frac{1}{2}\\ln x + 2\\ln x - \\frac{3}{2}\\ln x = \\left(\\frac{1}{2} + 2 - \\frac{3}{2}\\right)\\ln x = 1 \\times \\ln x = \\ln x$.',
      },
      {
        statement: 'Un condensateur $C = 470\\;\\mu\\text{F}$ se décharge à travers $R = 2{,}2\\;\\text{k}\\Omega$ depuis $U_0 = 50\\;\\text{V}$. Calculez la constante de temps $\\tau$ (en s, arrondie à 0,001).',
        type: 'numeric',
        answer: 1.034,
        tolerance: 0.01,
        unit: 's',
        points: 1,
        correction: '$\\tau = RC = 2200 \\times 470 \\times 10^{-6} = 1{,}034\\;\\text{s}$.',
      },
      {
        statement: 'Pour ce même condensateur ($\\tau \\approx 1{,}034\\;\\text{s}$, $U_0 = 50\\;\\text{V}$), après combien de temps la tension tombe-t-elle à $5\\;\\text{V}$ (en s, arrondi à 0,01) ?',
        type: 'numeric',
        answer: 2.38,
        tolerance: 0.05,
        unit: 's',
        points: 3,
        correction: '$5 = 50 \\cdot e^{-t/\\tau} \\Rightarrow e^{-t/\\tau} = 0{,}1 \\Rightarrow t = -\\tau \\ln(0{,}1) = 1{,}034 \\times 2{,}303 \\approx 2{,}38\\;\\text{s}$.',
      },
    ],
  },
});
