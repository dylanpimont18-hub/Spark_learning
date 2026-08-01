window.MODULES.push({
  id: 'bts-prep-equations-transf',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  quizShuffle: true,
  icon: '🔄',
  title: 'Équations à Transformations',
  subtitle: 'Isoler avec racine, puissance, ln et exp — aller plus loin',
  keywords: ['équation', 'racine carrée', 'puissance', 'logarithme', 'exponentielle', 'isoler', 'transformation', 'ln', 'exp'],
  physics: 'De nombreuses formules en physique et en technique font intervenir des racines (impédance, énergie), des puissances (pression dynamique, énergie cinétique) ou des exponentielles (constantes de temps, décibels). Savoir les inverser est indispensable pour résoudre des problèmes de dimensionnement.',

  cours: {
    intro: `Ce module complète le module "Équations" en traitant les cas où l'inconnue est sous une racine, à une puissance, dans une exponentielle ou dans un logarithme. Ces situations apparaissent régulièrement en physique appliquée :<br/><br/>
• Calculer une impédance ($Z = \\sqrt{R^2 + X^2}$) ou retrouver $R$ à partir de $Z$<br/>
• Trouver une vitesse à partir d'une énergie cinétique ($v = \\sqrt{2E_c/m}$)<br/>
• Inverser une loi de charge RC : retrouver $t$ à partir de $u_C$<br/>
• Calculer une atténuation en dB ou retrouver un rapport de tension`,

    definitions: [
      {
        term: 'Inverser une racine carrée',
        def: `Si $\\sqrt{x} = a$ (avec $a > 0$), alors $x = a^2$.<br/><br/>Si $A = \\sqrt{B^2 + C^2}$, alors $B = \\sqrt{A^2 - C^2}$ (à condition que $A > C$).`,
      },
      {
        term: 'Inverser une puissance',
        def: `Si $x^n = a$, alors $x = a^{1/n} = \\sqrt[n]{a}$.<br/><br/>Cas courants :<br/>• $x^2 = a \\Rightarrow x = \\pm\\sqrt{a}$ (ne garder que la solution physique)<br/>• $x^3 = a \\Rightarrow x = \\sqrt[3]{a} = a^{1/3}$`,
      },
      {
        term: 'Inverser une exponentielle',
        def: `Si $e^x = a$, alors $x = \\ln(a)$.<br/><br/>Si $A \\cdot e^{Bx} = C$, on isole progressivement :<br/>1. $e^{Bx} = C/A$<br/>2. $Bx = \\ln(C/A)$<br/>3. $x = \\dfrac{\\ln(C/A)}{B}$`,
      },
      {
        term: 'Inverser un logarithme',
        def: `Si $\\ln(x) = a$, alors $x = e^a$.<br/>Si $\\log_{10}(x) = a$, alors $x = 10^a$.<br/><br/>Si $A \\cdot \\ln(Bx) = C$ :<br/>1. $\\ln(Bx) = C/A$<br/>2. $Bx = e^{C/A}$<br/>3. $x = e^{C/A} / B$`,
      },
    ],

    method: {
      title: 'Méthode générale : isoler l\'inconnue par transformations successives',
      steps: [
        'La règle d\'or : <strong>appliquer l\'opération inverse de chaque côté de l\'équation</strong>.',
        '| Si on voit... | Opération inverse |\n|--------------|------------------|\n| $\\sqrt{x}$ | Mettre au carré : $( )^2$ |\n| $x^2$ | Racine carrée : $\\sqrt{ }$ |\n| $x^n$ | Puissance $1/n$ : $( )^{1/n}$ |\n| $e^x$ | Logarithme naturel : $\\ln( )$ |\n| $\\ln(x)$ | Exponentielle : $e^{( )}$ |\n| $\\log_{10}(x)$ | Puissance de 10 : $10^{( )}$ |',
        '<strong>Attention aux domaines</strong> : $\\sqrt{x}$ n\'existe que si $x \\geq 0$ — $\\ln(x)$ n\'existe que si $x > 0$ — $x^2 = a$ a deux solutions ($\\pm\\sqrt{a}$), choisir la physiquement cohérente.',
      ],
    },

    example: {
      statement: 'Cinq applications des transformations algébriques inverses dans des contextes techniques réels.',
      steps: [
        '<strong>Exemple 1 — Retrouver R dans $Z = \\sqrt{R^2 + X_L^2}$</strong><br/><br/>Un circuit présente $Z = 100\\;\\Omega$ et $X_L = 60\\;\\Omega$. Trouver $R$ :<br/>$100 = \\sqrt{R^2 + 60^2}$<br/>$100^2 = R^2 + 3600$ (mise au carré des deux membres)<br/>$R^2 = 10000 - 3600 = 6400$<br/>$R = \\sqrt{6400} = 80\\;\\Omega$',
        '<strong>Exemple 2 — Trouver la vitesse depuis $E_c = \\frac{1}{2}mv^2$</strong><br/><br/>$E_c = 3600\\;\\text{J}$, $m = 80\\;\\text{kg}$. Trouver $v$ :<br/>$3600 = \\frac{1}{2} \\times 80 \\times v^2 = 40\\,v^2$<br/>$v^2 = 3600 / 40 = 90$<br/>$v = \\sqrt{90} \\approx 9{,}49\\;\\text{m/s}$',
        '<strong>Exemple 3 — Inverser une loi exponentielle RC</strong><br/><br/>$u_C(t) = 12(1 - e^{-t/0{,}5})$. À quel instant $t$ est-ce que $u_C = 9\\;\\text{V}$ ?<br/>$9 = 12(1 - e^{-t/0{,}5})$<br/>$9/12 = 1 - e^{-t/0{,}5}$<br/>$e^{-t/0{,}5} = 1 - 0{,}75 = 0{,}25$<br/>$-t/0{,}5 = \\ln(0{,}25) = -1{,}386$<br/>$t = 0{,}5 \\times 1{,}386 = 0{,}693\\;\\text{s}$',
        '<strong>Exemple 4 — Retrouver un rapport de tension depuis des dB</strong><br/><br/>Un filtre atténue de $-30\\;\\text{dB}$ en tension. Quel est le rapport $V_s/V_e$ ?<br/>$-30 = 20\\log_{10}(V_s/V_e)$<br/>$\\log_{10}(V_s/V_e) = -30/20 = -1{,}5$<br/>$V_s/V_e = 10^{-1{,}5} \\approx 0{,}0316$',
        '<strong>Exemple 5 — Pression dynamique (BTP, ventilation)</strong><br/><br/>La pression dynamique $p_d = \\frac{1}{2}\\rho v^2$. Si $p_d = 20\\;\\text{Pa}$ et $\\rho = 1{,}2\\;\\text{kg/m}^3$ :<br/>$v^2 = 2 p_d / \\rho = 2 \\times 20 / 1{,}2 = 33{,}33$<br/>$v = \\sqrt{33{,}33} \\approx 5{,}77\\;\\text{m/s}$',
      ],
      answer: 'La clé est d\'identifier le type de transformation (racine, puissance, exponentielle, logarithme) et d\'appliquer l\'opération inverse des deux côtés de l\'équation.',
    },

    formulas: [
      '<strong>Racine → carré</strong> : $\\sqrt{x} = a \\Rightarrow x = a^2$',
      '<strong>Puissance 2 → racine</strong> : $x^2 = a \\Rightarrow x = \\pm\\sqrt{a}$',
      '<strong>Exp → ln</strong> : $e^x = a \\Rightarrow x = \\ln a$',
      '<strong>Ln → exp</strong> : $\\ln x = a \\Rightarrow x = e^a$',
      '<strong>Log10 → 10^</strong> : $\\log_{10} x = a \\Rightarrow x = 10^a$',
      '<strong>Retrouver R</strong> : $Z = \\sqrt{R^2+X^2} \\Rightarrow R = \\sqrt{Z^2-X^2}$',
      '<strong>Retrouver v</strong> : $E_c = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2E_c/m}$',
    ],

    diagram: {
      theme: 'maths',
      kicker: 'Fonctions réciproques',
      title: 'Symétrie entre $e^x$ et $\\ln x$ par rapport à $y = x$',
      description: 'Les courbes de $y = e^x$ et $y = \\ln x$ sont le reflet exact l\'une de l\'autre par rapport à la droite $y = x$ (en pointillés) — la signature graphique de deux fonctions réciproques.',
      svg: `
        <svg viewBox="0 0 380 330" role="img" aria-labelledby="bts-transf-graph-title bts-transf-graph-desc">
          <title id="bts-transf-graph-title">Symetrie entre exponentielle et logarithme</title>
          <desc id="bts-transf-graph-desc">Le graphique montre la courbe de e a la puissance x, la courbe de ln x, et la droite y=x en pointilles montrant leur symetrie.</desc>
          <line class="grid-line" x1="215" y1="25" x2="215" y2="305"></line>
          <line class="grid-line" x1="295" y1="25" x2="295" y2="305"></line>
          <line class="grid-line" x1="55" y1="145" x2="335" y2="145"></line>
          <line class="grid-line" x1="55" y1="65" x2="335" y2="65"></line>
          <rect class="frame-line" x="55" y="25" width="280" height="280" fill="none"></rect>
          <line class="axis" x1="55" y1="225" x2="335" y2="225"></line>
          <line class="axis" x1="135" y1="305" x2="135" y2="25"></line>
          <line class="guide-line" x1="55" y1="305" x2="335" y2="25"></line>
          <path class="curve-main" d="M55,219.6 L75,216.1 L95,210.3 L115,200.7 L135,185 L155,159 L175,116.3 L187,78.2 L195,45.7 L199.4,25"></path>
          <path class="graph-line" d="M140.4,305 L143.9,285 L149.7,265 L159.3,245 L175,225 L201,205 L243.7,185 L281.8,173 L314.3,165 L335,160.6"></path>
          <line class="guide-line" x1="175" y1="116.3" x2="243.7" y2="185"></line>
          <circle class="plot-point" cx="175" cy="116.3" r="5"></circle>
          <circle class="plot-point-alt" cx="243.7" cy="185" r="5"></circle>
          <circle class="plot-point-alt" cx="135" cy="185" r="3.5"></circle>
          <circle class="plot-point-alt" cx="175" cy="225" r="3.5"></circle>
          <text class="axis-label" x="341" y="229">x</text>
          <text class="axis-label" x="140" y="17">y</text>
          <text class="tick-label" x="47" y="242">-2</text>
          <text class="tick-label" x="118" y="242">0</text>
          <text class="tick-label" x="207" y="242">2</text>
          <text class="tick-label" x="287" y="242">4</text>
          <text class="tick-label" x="108" y="309">-2</text>
          <text class="tick-label" x="118" y="149">2</text>
          <text class="tick-label" x="118" y="69">4</text>
          <text class="annotation-label" x="58" y="202">y = eˣ</text>
          <text class="annotation-label" x="255" y="160">y = ln x</text>
          <text class="annotation-label" x="250" y="78">y = x</text>
          <text class="annotation-label" x="145" y="100">e ≈ 2,72</text>
          <text class="annotation-label" x="250" y="205">ln(2,72) ≈ 1</text>
        </svg>
      `,
      notes: [
        '$e^x$ et $\\ln x$ sont des <strong>fonctions réciproques</strong> : si $y = e^x$ alors $x = \\ln y$, et réciproquement. Leurs courbes sont donc symétriques par rapport à la droite $y = x$.',
        'Vérification numérique : $e^1 \\approx 2{,}72$ (point $(1\\,;\\,2{,}72)$ sur $e^x$), et $\\ln(2{,}72) \\approx 1$ (point $(2{,}72\\,;\\,1)$ sur $\\ln x$) — les deux points sont bien le reflet l\'un de l\'autre.',
        'L\'axe des abscisses ($y=0$) est l\'<strong>asymptote horizontale</strong> de $e^x$ quand $x \\to -\\infty$. L\'axe des ordonnées ($x=0$) est l\'<strong>asymptote verticale</strong> de $\\ln x$ quand $x \\to 0^+$.',
      ],
      reading: 'Pour tout point $(a\\,;\\,b)$ situé sur la courbe de $e^x$, le point $(b\\,;\\,a)$ se retrouve exactement sur la courbe de $\\ln x$ : c\'est la définition graphique d\'une fonction réciproque.',
      caption: 'Symétrie de $e^x$ et $\\ln x$ par rapport à $y=x$, avec le couple de points $(1\\,;\\,2{,}72)$ / $(2{,}72\\,;\\,1)$ recalculé et vérifié indépendamment.',
    },

    recap: [
      'Pour inverser $\\sqrt{x}$ : mettre au carré les deux membres',
      'Pour inverser $e^x$ : prendre $\\ln$ des deux membres',
      'Pour inverser $\\ln(x)$ : prendre $e^{()}$ des deux membres',
      'Pour inverser $x^2$ : prendre $\\sqrt{}$ des deux membres (vérifier le signe)',
      'Dans les formules physiques : isoler le terme avec l\'inconnue, puis appliquer la transformation inverse',
    ],

    piege: `<strong>Pièges fréquents</strong><br/><br/>
• <strong>Oublier d'isoler avant de transformer</strong> : si $\\ln(x+1) = 3$, c'est $x+1 = e^3$, donc $x = e^3 - 1$. On ne peut pas appliquer $e^{()}$ membre par membre à $\\ln(x) + 1 = 3$.<br/><br/>
• <strong>Signe de la racine carrée</strong> : $x^2 = 9$ donne $x = \\pm 3$. En physique, on garde la solution positive (vitesse, résistance, longueur sont positives).<br/><br/>
• <strong>Mettre au carré peut créer de fausses solutions</strong> : $\\sqrt{x} = -2$ n'a pas de solution (racine toujours positive), mais si on met au carré des deux membres, on obtient $x = 4$. Toujours vérifier la solution dans l'équation originale.<br/><br/>
• <strong>$\\ln(a-b) \\neq \\ln(a) - \\ln(b)$</strong> : rappel crucial. La propriété s'applique au quotient : $\\ln(a/b) = \\ln a - \\ln b$.`,
  },

  quiz: [
    {
      q: 'Si $x^2 = 144$, quelle est la valeur positive de $x$ ?',
      options: ['72', '12', '14,4', '288'],
      answer: 1,
      correction: 'x = √144 = 12. (144 = 12² car 12 × 12 = 144.)',
    },
    {
      q: 'Dans un circuit RLC, $Z = \\sqrt{R^2 + X^2}$ avec $Z = 130\\;\\Omega$ et $X = 50\\;\\Omega$. Trouver $R$.',
      figure: {
        svg: `
          <svg viewBox="0 0 320 180" role="img" aria-labelledby="qeqt-imp-title qeqt-imp-desc">
            <title id="qeqt-imp-title">Triangle des impedances</title>
            <desc id="qeqt-imp-desc">Un triangle rectangle dont l'hypotenuse est l'impedance Z de 130 ohms, le cote vertical la reactance X de 50 ohms et le cote horizontal la resistance R, qui est l'inconnue a determiner.</desc>
            <polygon points="55,140 245,140 245,55" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)" stroke="none"></polygon>
            <line class="frame-line" x1="55" y1="140" x2="245" y2="140"></line>
            <line class="frame-line" x1="245" y1="140" x2="245" y2="55" stroke="var(--secondary)"></line>
            <line class="curve-main" x1="55" y1="140" x2="245" y2="55"></line>
            <path class="axis" fill="none" d="M 231 140 L 231 126 L 245 126"></path>
            <text class="annotation-label" x="150" y="160" text-anchor="middle" fill="var(--accent)">R = ?</text>
            <text class="annotation-label" x="256" y="102" fill="var(--secondary)">X = 50 Ω</text>
            <text class="annotation-label" x="120" y="88">Z = 130 Ω</text>
            <circle class="plot-point-alt" cx="55" cy="140" r="5"></circle>
            <circle class="plot-point" cx="245" cy="55" r="5"></circle>
            <text class="tick-label" x="55" y="30">Z est l\'hypoténuse</text>
          </svg>
        `,
        caption: 'Isoler R impose d\'élever Z et X au carré avant de soustraire, puis de reprendre la racine.'
      },
      options: ['80 Ω', '120 Ω', '100 Ω', '√(130²+50²) Ω'],
      answer: 1,
      correction: 'R = √(Z²-X²) = √(130²-50²) = √(16900-2500) = √14400 = 120 Ω.',
    },
    {
      q: 'Si $e^{2x} = 7$, alors $x$ vaut :',
      options: ['$\\ln(7)/2 \\approx 0{,}973$', '$7/2 = 3{,}5$', '$\\ln(2)/7 \\approx 0{,}099$', '$7^2 = 49$'],
      answer: 0,
      correction: 'e^(2x) = 7 ⟹ 2x = ln(7) ⟹ x = ln(7)/2 ≈ 1,946/2 ≈ 0,973.',
    },
    {
      q: 'Si $\\ln(x) = -1$, alors $x$ vaut :',
      options: ['$-e$', '$1/e \\approx 0{,}368$', '$e^{-e}$', '$-1/e$'],
      answer: 1,
      correction: 'ln(x) = -1 ⟹ x = e^(-1) = 1/e ≈ 0,368. Rappel : ln(x) peut être négatif si 0 < x < 1.',
    },
    {
      q: 'L\'énergie cinétique d\'un véhicule est $E_c = 180\\;\\text{kJ}$ pour une masse $m = 1800\\;\\text{kg}$. Sa vitesse est :',
      options: ['10 m/s', '14,1 m/s', '100 m/s', '200 m/s'],
      answer: 1,
      correction: 'v = √(2Ec/m) = √(2×180000/1800) = √200 ≈ 14,1 m/s.',
    },
    {
      q: 'Un filtre a un gain de $-40\\;\\text{dB}$ en tension. Le rapport $V_s/V_e$ est :',
      options: ['40', '0,1', '0,01', '0,001'],
      answer: 2,
      correction: '-40 = 20·log(Vs/Ve) ⟹ log(Vs/Ve) = -2 ⟹ Vs/Ve = 10⁻² = 0,01.',
    },
    {
      q: 'La pression dynamique d\'un écoulement d\'air est $p_d = 45\\;\\text{Pa}$ ($\\rho = 1{,}2\\;\\text{kg/m}^3$). La vitesse d\'écoulement est :',
      options: ['$\\sqrt{45/1{,}2} \\approx 6{,}1\\;\\text{m/s}$', '$\\sqrt{2 \\times 45/1{,}2} = \\sqrt{75} \\approx 8{,}66\\;\\text{m/s}$', '$45/1{,}2 = 37{,}5\\;\\text{m/s}$', '$2 \\times 45 / 1{,}2 = 75\\;\\text{m/s}$'],
      answer: 1,
      correction: 'p_d = ½ρv² ⟹ v² = 2p_d/ρ = 2×45/1,2 = 75 ⟹ v = √75 ≈ 8,66 m/s.',
    },
    {
      q: 'La décharge d\'un condensateur suit $u_C(t) = 24 \\cdot e^{-t/2}$ V. À quel instant $u_C = 6\\;\\text{V}$ ?',
      options: ['$t = 2\\ln(4) \\approx 2{,}77\\;\\text{s}$', '$t = \\ln(4) \\approx 1{,}39\\;\\text{s}$', '$t = 4\\;\\text{s}$', '$t = \\ln(6/24) \\approx -1{,}39\\;\\text{s}$'],
      answer: 0,
      correction: '6 = 24·e^(-t/2) ⟹ e^(-t/2) = 1/4 ⟹ -t/2 = ln(1/4) = -ln(4) ⟹ t = 2·ln(4) ≈ 2,77 s.',
    },
    {
      q: 'Résoudre $\\sqrt{2x + 1} = 5$.',
      options: ['$x = 12$', '$x = 24$', '$x = 13$', '$x = 2$'],
      answer: 0,
      correction: '√(2x+1) = 5 ⟹ 2x+1 = 25 (mise au carré) ⟹ 2x = 24 ⟹ x = 12. Vérification : √(2×12+1) = √25 = 5 ✓',
    },
    {
      q: 'Un signal subit un gain de $G = 10\\;\\text{dB}$ en puissance. La puissance de sortie $P_s$ par rapport à l\'entrée $P_e$ vaut :',
      options: ['$P_s = 10 \\times P_e$', '$P_s = \\sqrt{10} \\times P_e$', '$P_s = 100 \\times P_e$', '$P_s = P_e / 10$'],
      answer: 0,
      correction: '10 = 10·log(Ps/Pe) ⟹ log(Ps/Pe) = 1 ⟹ Ps/Pe = 10¹ = 10. Une augmentation de 10 dB en puissance = ×10 la puissance.',
    },
    {
      q: 'Le pH d\'une solution est défini par $pH = -\\log_{10}[H^+]$. Si $pH = 3$, la concentration $[H^+]$ (en mol/L) vaut :',
      options: ['$10^{-3}$ mol/L', '$-3$ mol/L', '$3$ mol/L', '$10^{3}$ mol/L'],
      answer: 0,
      correction: '$pH = -\\log_{10}[H^+] \\Rightarrow \\log_{10}[H^+] = -pH = -3 \\Rightarrow [H^+] = 10^{-3}$ mol/L.',
    },
    {
      q: 'Une solution a une concentration $[H^+] = 10^{-5}$ mol/L. Son pH vaut :',
      options: ['$5$', '$-5$', '$10^5$', '$0{,}5$'],
      answer: 0,
      correction: '$pH = -\\log_{10}(10^{-5}) = -(-5) = 5$.',
    },
    {
      q: 'Une solution a $[H^+] = 2 \\times 10^{-4}$ mol/L. Son pH (arrondi à 0,1) vaut :',
      options: ['$3{,}7$', '$4{,}3$', '$2{,}0$', '$0{,}3$'],
      answer: 0,
      correction: '$pH = -\\log_{10}(2\\times10^{-4}) = -(\\log_{10}2 - 4) \\approx -(0{,}301-4) = 3{,}7$.',
    },
    {
      q: 'Un ressort de raideur $k = 800$ N/m emmagasine une énergie potentielle $E_p = 4$ J. Sachant que $E_p = \\frac{1}{2}kx^2$, l\'allongement $x$ vaut :',
      options: ['$0{,}1$ m', '$0{,}01$ m', '$10$ m', '$0{,}316$ m'],
      answer: 0,
      correction: '$x^2 = 2E_p/k = 8/800 = 0{,}01 \\Rightarrow x = \\sqrt{0{,}01} = 0{,}1$ m.',
    },
    {
      q: 'Un mur atténue le son de $20$ dB en pression. Le rapport des pressions $p_s/p_e$ vaut :',
      options: ['$0{,}1$', '$0{,}05$', '$2$', '$20$'],
      answer: 0,
      correction: '$-20 = 20\\log_{10}(p_s/p_e) \\Rightarrow \\log_{10}(p_s/p_e) = -1 \\Rightarrow p_s/p_e = 10^{-1} = 0{,}1$.',
    },
    {
      q: 'Un chariot de masse $m = 200$ kg possède une énergie cinétique $E_c = 2{,}5$ kJ. Sa vitesse (en m/s) vaut :',
      options: ['$5$', '$25$', '$12{,}5$', '$2{,}5$'],
      answer: 0,
      correction: '$v = \\sqrt{2E_c/m} = \\sqrt{2\\times2500/200} = \\sqrt{25} = 5$ m/s.',
    },
    {
      q: 'Un circuit a une impédance $Z = 25\\;\\Omega$ et une réactance $X = 15\\;\\Omega$. La résistance $R$ vaut :',
      options: ['$20\\;\\Omega$', '$10\\;\\Omega$', '$40\\;\\Omega$', '$\\sqrt{625+225}\\;\\Omega$'],
      answer: 0,
      correction: '$R = \\sqrt{Z^2-X^2} = \\sqrt{625-225} = \\sqrt{400} = 20\\;\\Omega$.',
    },
    {
      figure: {
        svg: `
          <svg viewBox="0 0 340 175" role="img" aria-labelledby="qeqt-charge-title qeqt-charge-desc">
            <title id="qeqt-charge-title">Charge d'un condensateur vers une tension finale de 10 volts</title>
            <desc id="qeqt-charge-desc">Une courbe de charge monte depuis zero et s'approche de l'asymptote a 10 volts sans jamais l'atteindre. Un niveau cible intermediaire est trace en pointilles ; l'instant auquel la courbe le franchit est l'inconnue, et son calcul necessite un logarithme neperien.</desc>
            <line class="axis" x1="55" y1="145" x2="315" y2="145"></line>
            <line class="axis" x1="55" y1="158" x2="55" y2="30"></line>
            <line class="guide-line" x1="55" y1="45" x2="310" y2="45" stroke="var(--secondary)"></line>
            <text class="tick-label" x="47" y="49" text-anchor="end">10 V</text>
            <path class="curve-main" fill="none" d="M 55 145 L 65 128 L 75 114 L 85 102 L 95 92 L 105 84 L 115 78 L 125 72 L 135 67 L 145 63 L 155 60 L 165 58 L 175 56 L 185 54 L 195 52 L 205 51 L 215 50 L 225 49 L 235 48 L 245 48 L 255 47 L 265 47 L 275 46 L 285 46 L 295 46 L 305 45"></path>
            <line class="graph-line" x1="55" y1="72" x2="310" y2="72" stroke="var(--accent)"></line>
            <text class="tick-label" x="270" y="66" fill="var(--accent)">seuil visé</text>
            <line class="guide-line" x1="125" y1="72" x2="125" y2="145"></line>
            <circle class="plot-point" cx="125" cy="72" r="7"></circle>
            <text class="annotation-label" x="132" y="90">t = ?</text>
            <text class="axis-label" x="315" y="162" text-anchor="end">t</text>
            <text class="axis-label" x="55" y="24">u_C(t)</text>
          </svg>
        `,
        caption: 'L\'inconnue est dans l\'exposant : seul le logarithme népérien permet de la faire redescendre.'
      },
      q: 'Un condensateur se charge selon $u_C(t) = 10(1 - e^{-t/2})$ V. Au bout de combien de temps $u_C = 5$ V (arrondi à 0,01 s) ?',
      options: ['$2\\ln2 \\approx 1{,}39$ s', '$\\ln2 \\approx 0{,}69$ s', '$2$ s', '$\\ln(0{,}5) \\approx -0{,}69$ s'],
      answer: 0,
      correction: '$0{,}5 = 1-e^{-t/2} \\Rightarrow e^{-t/2} = 0{,}5 \\Rightarrow -t/2 = \\ln(0{,}5) = -\\ln2 \\Rightarrow t = 2\\ln2 \\approx 1{,}39$ s.',
    },
    {
      q: 'Le niveau de puissance acoustique est $L_W = 10\\log_{10}(W/W_0)$ avec $W_0 = 10^{-12}$ W. Une machine a $L_W = 70$ dB. Sa puissance acoustique $W$ vaut :',
      options: ['$10^{-5}$ W', '$10^{-7}$ W', '$70\\times10^{-12}$ W', '$7\\times10^{-12}$ W'],
      answer: 0,
      correction: '$70 = 10\\log_{10}(W/10^{-12}) \\Rightarrow \\log_{10}(W/10^{-12}) = 7 \\Rightarrow W = 10^{7}\\times10^{-12} = 10^{-5}$ W.',
    },
    {
      q: 'Si $x^3 = 125$, la valeur de $x$ est :',
      options: ['$5$', '$41{,}67$', '$375$', '$\\sqrt{125}$'],
      answer: 0,
      correction: '$x = \\sqrt[3]{125} = 125^{1/3} = 5$ (car $5^3 = 125$).',
    },
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['impedance_R', 'energie_cinetique_v', 'RC_inverse_t', 'pression_dynamique_v', 'ph_concentration', 'ressort_allongement']);

      if (type === 'impedance_R') {
        const Z = pick([50, 100, 130, 170, 260]);
        const X = pick([30, 40, 60, 80, 100, 120].filter(x => x < Z));
        const R = Math.sqrt(Z * Z - X * X);
        const Rn = parseFloat(R.toFixed(1));
        const context = pick(['circuit de filtre LC', 'transformateur de mesure', 'ligne d\'alimentation BT']);
        return {
          statement: `Dans un ${context}, l'impédance totale est $Z = ${Z}\\;\\Omega$ et la réactance vaut $X = ${X}\\;\\Omega$.<br/>
D'après $Z = \\sqrt{R^2 + X^2}$, calculez la résistance $R$ en ohms (arrondi à 0,1 Ω).`,
          answer: Rn,
          tolerance: 0.2,
          unit: 'Ω',
          hint: `Isoler $R$ : $R = \\sqrt{Z^2 - X^2}$.`,
          solution: `$R = \\sqrt{${Z}^2 - ${X}^2} = \\sqrt{${Z*Z} - ${X*X}} = \\sqrt{${Z*Z - X*X}} \\approx ${fr(Rn)}\\;\\Omega$`,
        };
      }

      if (type === 'energie_cinetique_v') {
        const m = pick([500, 800, 1000, 1200, 2000]);
        const Ec_kJ = pick([10, 20, 36, 50, 80, 100]);
        const Ec = Ec_kJ * 1000;
        const v = Math.sqrt(2 * Ec / m);
        const context = pick(['véhicule de manutention', 'objet en chute libre', 'chariot automatisé (AGV)']);
        return {
          statement: `Un ${context} de masse $m = ${m}\\;\\text{kg}$ possède une énergie cinétique $E_c = ${Ec_kJ}\\;\\text{kJ}$.<br/>
Calculez sa vitesse $v$ en m/s (arrondi à 0,1 m/s). ($E_c = \\frac{1}{2}mv^2$)`,
          answer: parseFloat(v.toFixed(1)),
          tolerance: 0.1,
          unit: 'm/s',
          hint: `Isoler $v$ : $v = \\sqrt{2E_c/m}$. Attention : convertir $E_c$ en joules.`,
          solution: `$v = \\sqrt{\\dfrac{2 \\times ${Ec_kJ} \\times 10^3}{${m}}} = \\sqrt{${fr(2*Ec/m, 2)}} \\approx ${fr(v, 1)}\\;\\text{m/s}$`,
        };
      }

      if (type === 'RC_inverse_t') {
        const tau = pick([0.5, 1, 2, 5]);
        const E = pick([12, 24, 48, 5]);
        const frac = pick([0.5, 0.75, 0.9, 0.95]);
        const uc = E * frac;
        const t = -tau * Math.log(1 - frac);
        const context = pick(['circuit de temporisation', 'alimentation à découpage', 'système de démarrage progressif']);
        return {
          statement: `Dans un ${context}, la tension aux bornes du condensateur suit : $u_C(t) = ${E}\\left(1 - e^{-t/${fr(tau)}}\\right)$ V.<br/>
À quel instant $t$ la tension atteint-elle $u_C = ${fr(uc, 1)}\\;\\text{V}$ ? (Arrondir à 0,01 s)`,
          answer: parseFloat(t.toFixed(2)),
          tolerance: 0.02,
          unit: 's',
          hint: `Isoler $e^{-t/\\tau}$, puis prendre $\\ln$ et résoudre pour $t$.`,
          solution: `$${fr(uc, 1)} = ${E}(1 - e^{-t/${fr(tau)}})$<br/>$e^{-t/${fr(tau)}} = 1 - ${fr(frac)} = ${fr(1-frac, 2)}$<br/>$-t/${fr(tau)} = \\ln(${fr(1-frac, 2)}) \\approx ${fr(Math.log(1-frac), 3)}$<br/>$t = ${fr(tau)} \\times ${fr(-Math.log(1-frac), 3)} \\approx ${fr(t, 2)}\\;\\text{s}$`,
        };
      }

      if (type === 'ph_concentration') {
        const pH = pick([2, 3, 4, 5, 6, 8]);
        const H = Math.pow(10, -pH);
        const context = pick(['analyse d\'eau de process industriel', 'contrôle qualité d\'un bain de traitement de surface', 'suivi d\'une solution de nettoyage en agroalimentaire']);
        return {
          statement: `Dans le cadre d'un(e) ${context}, on mesure un $pH = ${pH}$.<br/>
Sachant que $pH = -\\log_{10}[H^+]$, calculez la concentration $[H^+]$ en mol/L (notation scientifique).`,
          answer: H,
          tolerance: H * 0.05,
          unit: 'mol/L',
          hint: `Isoler $[H^+]$ : $[H^+] = 10^{-pH}$.`,
          solution: `$\\log_{10}[H^+] = -${pH} \\Rightarrow [H^+] = 10^{-${pH}}\\;\\text{mol/L}$`,
        };
      }

      if (type === 'ressort_allongement') {
        const k = pick([200, 400, 500, 800, 1000]);
        const x_cm = pick([5, 10, 15, 20]);
        const x = x_cm / 100;
        const Ep = 0.5 * k * x * x;
        const context = pick(['amortisseur de machine industrielle', 'suspension d\'un chariot de manutention', 'système ressort-tampon d\'un quai de chargement']);
        return {
          statement: `Un ${context} utilise un ressort de raideur $k = ${k}\\;\\text{N/m}$ qui emmagasine une énergie potentielle $E_p = ${fr(Ep, 2)}\\;\\text{J}$.<br/>
Sachant que $E_p = \\frac{1}{2}kx^2$, calculez l'allongement $x$ en cm (arrondi à 0,1 cm).`,
          answer: x_cm,
          tolerance: 0.2,
          unit: 'cm',
          hint: `Isoler $x$ : $x = \\sqrt{2E_p/k}$, puis convertir en cm.`,
          solution: `$x = \\sqrt{\\dfrac{2 \\times ${fr(Ep, 2)}}{${k}}} = \\sqrt{${fr(2 * Ep / k, 4)}} \\approx ${fr(x, 2)}\\;\\text{m} = ${x_cm}\\;\\text{cm}$`,
        };
      }

      // pression dynamique → vitesse
      const pd = pick([20, 30, 45, 60, 80, 100]);
      const rho = 1.2;
      const v = Math.sqrt(2 * pd / rho);
      const context = pick(['conduit de ventilation industrielle', 'bouche de soufflage en CVC', 'gaine de désenfumage']);
      return {
        statement: `La pression dynamique mesurée dans un ${context} est $p_d = ${pd}\\;\\text{Pa}$ (avec $\\rho_{\\text{air}} = 1{,}2\\;\\text{kg/m}^3$).<br/>
Calculez la vitesse d'écoulement de l'air $v$ en m/s (arrondi à 0,1 m/s). ($p_d = \\frac{1}{2}\\rho v^2$)`,
        answer: parseFloat(v.toFixed(1)),
        tolerance: 0.1,
        unit: 'm/s',
        hint: `Isoler $v$ : $v = \\sqrt{2p_d / \\rho}$.`,
        solution: `$v = \\sqrt{\\dfrac{2 \\times ${pd}}{1{,}2}} = \\sqrt{${fr(2*pd/rho, 1)}} \\approx ${fr(v, 1)}\\;\\text{m/s}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en CVC (Chauffage, Ventilation, Climatisation) doit dimensionner une bouche d'extraction d'air. Les données sont :<br/><br/>
• Débit volumique requis : $Q = 500\\;\\text{m}^3/\\text{h}$<br/>
• Vitesse maximale admissible en bouche : $v_{\\max} = 4\\;\\text{m/s}$ (pour ne pas générer de bruit)<br/>
• Densité de l'air : $\\rho = 1{,}2\\;\\text{kg/m}^3$<br/><br/>
Le technicien souhaite choisir une bouche circulaire de diamètre $D$.`,
    figure: {
      svg: `
        <svg viewBox="0 0 450 210" role="img" aria-labelledby="pb-eqtransf-title pb-eqtransf-desc">
          <title id="pb-eqtransf-title">Bouche d'extraction circulaire d'un local ventile</title>
          <desc id="pb-eqtransf-desc">Un local ventile est represente par un rectangle. Sur sa paroi droite, une bouche d'extraction circulaire de diametre inconnu laisse sortir un debit de 500 metres cubes par heure. La vitesse dans la bouche ne doit pas depasser 4 metres par seconde pour eviter le bruit. Un agrandissement montre la section circulaire et rappelle que l'aire vaut pi D au carre sur quatre.</desc>

          <rect x="25" y="40" width="230" height="130" rx="8" fill="color-mix(in srgb, var(--primary) 5%, var(--bg-card))" stroke="color-mix(in srgb, var(--primary) 30%, var(--border))"></rect>
          <text class="annotation-label" x="140" y="30" text-anchor="middle">Local ventilé</text>
          <line class="graph-line" x1="70" y1="80" x2="180" y2="90" stroke="var(--secondary)"></line>
          <line class="graph-line" x1="70" y1="130" x2="180" y2="118" stroke="var(--secondary)"></line>
          <text class="tick-label" x="90" y="108">air vicié</text>

          <circle cx="255" cy="105" r="22" fill="color-mix(in srgb, var(--accent) 18%, var(--bg-card))" stroke="color-mix(in srgb, var(--accent) 45%, var(--border))" stroke-width="2.5"></circle>
          <line class="curve-main" x1="277" y1="105" x2="360" y2="105" stroke="var(--accent)"></line>
          <polygon points="358,98 376,105 358,112" fill="var(--accent)"></polygon>
          <text class="annotation-label" x="330" y="94" text-anchor="middle" fill="var(--accent)">Q = 500 m³/h</text>
          <text class="annotation-label" x="330" y="128" text-anchor="middle">v ≤ 4 m/s</text>

          <circle cx="410" cy="105" r="30" fill="none" class="frame-line"></circle>
          <line class="guide-line" x1="380" y1="105" x2="440" y2="105"></line>
          <text class="annotation-label" x="410" y="98" text-anchor="middle">D = ?</text>
          <text class="tick-label" x="410" y="160" text-anchor="middle">A = πD²/4</text>

          <text class="tick-label" x="25" y="196">Au-delà de 4 m/s la bouche siffle : on cherche le D minimal.</text>
        </svg>
      `,
      caption: 'La vitesse impose une section minimale : $A = Q/v$, puis on remonte au diamètre par $A = \\pi D^2/4$.'
    },
    tasks: [
      'Convertir le débit $Q$ de m³/h en m³/s.',
      'La relation débit/vitesse/section est $Q = v \\times S$. Calculer la section minimale $S_{\\min}$ de la bouche pour respecter $v \\leq v_{\\max}$.',
      'La bouche est circulaire : $S = \\pi D^2 / 4$. Isoler $D$ et calculer le diamètre minimal en mm.',
      'Calculer la pression dynamique $p_d = \\frac{1}{2}\\rho v_{\\max}^2$ à la vitesse maximale. Comparer à la pression statique d\'un réseau typique (50 à 150 Pa).',
    ],
    solutions: [
      `$Q = 500 / 3600 \\approx 0{,}1389\\;\\text{m}^3/\\text{s}$`,
      `$S_{\\min} = Q / v_{\\max} = 0{,}1389 / 4 = 0{,}0347\\;\\text{m}^2$`,
      `$S = \\pi D^2/4$ → $D^2 = 4S/\\pi$ → $D = \\sqrt{4S_{\\min}/\\pi} = \\sqrt{4 \\times 0{,}0347 / \\pi} = \\sqrt{0{,}0442} \\approx 0{,}210\\;\\text{m} = 210\\;\\text{mm}$<br/>On choisit un diamètre normalisé : $D = 224\\;\\text{mm}$ (taille commerciale supérieure).`,
      `$p_d = \\frac{1}{2} \\times 1{,}2 \\times 4^2 = 0{,}6 \\times 16 = 9{,}6\\;\\text{Pa}$<br/>Cette pression dynamique est faible (9,6 Pa) par rapport à la pression statique d'un réseau (50–150 Pa). La perte de charge principale provient du réseau de gaines, pas de la vitesse en bouche.`,
    ],
    finalAnswer: 'Diamètre minimal calculé : 210 mm → choisir DN 224 mm (normalisé). Pression dynamique à la bouche : 9,6 Pa.',
  },

  evaluation: {
    title: 'Évaluation — Équations à Transformations',
    duration: '25 min',
    questions: [
      {
        statement: 'Un condensateur se décharge selon $u_C(t) = 48 \\cdot e^{-t/3}$ V. À quel instant $t$ (en s) la tension est-elle égale à $12\\;\\text{V}$ ? (Arrondir à 0,01 s)',
        type: 'numeric',
        answer: 4.16,
        tolerance: 0.02,
        unit: 's',
        points: 4,
        correction: '$12 = 48 e^{-t/3}$<br/>$e^{-t/3} = 12/48 = 1/4$<br/>$-t/3 = \\ln(1/4) = -\\ln 4$<br/>$t = 3\\ln 4 \\approx 4{,}16\\;\\text{s}$'
      },
      {
        statement: 'La formule de la puissance sonore est $L_W = 10\\log_{10}(W/W_0)$ avec $W_0 = 10^{-12}\\;\\text{W}$. Un moteur produit $L_W = 85\\;\\text{dB}$. Quelle est sa puissance acoustique $W$, en mW (arrondi à 0,01 mW) ?',
        type: 'numeric',
        answer: 0.316,
        tolerance: 0.01,
        unit: 'mW',
        points: 4,
        correction: '$85 = 10\\log(W/10^{-12})$<br/>$\\log(W/10^{-12}) = 8{,}5$<br/>$W/10^{-12} = 10^{8{,}5} = 3{,}16 \\times 10^8$<br/>$W = 3{,}16 \\times 10^{-4}\\;\\text{W} \\approx 0{,}316\\;\\text{mW}$'
      },
      {
        statement: 'Un ressort a une énergie potentielle $E_p = \\frac{1}{2}kx^2 = 2{,}5\\;\\text{J}$ avec $k = 800\\;\\text{N/m}$. Calculer l\'allongement $x$, en cm (arrondi à 0,1 cm).',
        type: 'numeric',
        answer: 7.9,
        tolerance: 0.1,
        unit: 'cm',
        points: 4,
        correction: '$2{,}5 = \\frac{1}{2} \\times 800 \\times x^2 = 400 x^2$<br/>$x^2 = 2{,}5/400 = 6{,}25 \\times 10^{-3}$<br/>$x = \\sqrt{6{,}25 \\times 10^{-3}} = 0{,}0791\\;\\text{m} \\approx 7{,}9\\;\\text{cm}$'
      },
      {
        statement: 'Résoudre : $\\sqrt{3x - 5} = 4$. Donner la valeur de $x$.',
        type: 'numeric',
        answer: 7,
        tolerance: 0,
        unit: '',
        points: 3,
        correction: '$3x - 5 = 16$ (mise au carré)<br/>$3x = 21$<br/>$x = 7$<br/>Vérification : $\\sqrt{3 \\times 7 - 5} = \\sqrt{16} = 4$ ✓'
      },
    ],
  },
});
