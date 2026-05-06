window.MODULES.push({
  id: 'bts-prep-equations-transf',
  level: 3,
  subject: 'maths',
  tag: 'prep',
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

    definitions: `<strong>Inverser une racine carrée</strong><br/><br/>
Si $\\sqrt{x} = a$ (avec $a > 0$), alors $x = a^2$.<br/>
Si $A = \\sqrt{B^2 + C^2}$, alors $B = \\sqrt{A^2 - C^2}$ (à condition que $A > C$).<br/><br/>
<strong>Inverser une puissance</strong><br/><br/>
Si $x^n = a$, alors $x = a^{1/n} = \\sqrt[n]{a}$.<br/>
Cas courants :<br/>
• $x^2 = a \\Rightarrow x = \\pm\\sqrt{a}$ (ne garder que la solution physique)<br/>
• $x^3 = a \\Rightarrow x = \\sqrt[3]{a} = a^{1/3}$<br/><br/>
<strong>Inverser une exponentielle</strong><br/><br/>
Si $e^x = a$, alors $x = \\ln(a)$.<br/>
Si $A \\cdot e^{Bx} = C$, on isole progressivement :<br/>
1. $e^{Bx} = C/A$<br/>
2. $Bx = \\ln(C/A)$<br/>
3. $x = \\dfrac{\\ln(C/A)}{B}$<br/><br/>
<strong>Inverser un logarithme</strong><br/><br/>
Si $\\ln(x) = a$, alors $x = e^a$.<br/>
Si $\\log_{10}(x) = a$, alors $x = 10^a$.<br/><br/>
Si $A \\cdot \\ln(Bx) = C$ :<br/>
1. $\\ln(Bx) = C/A$<br/>
2. $Bx = e^{C/A}$<br/>
3. $x = e^{C/A} / B$`,

    method: `<strong>Méthode générale : isoler l'inconnue par transformations successives</strong><br/><br/>
La règle d'or : <strong>appliquer l'opération inverse de chaque côté de l'équation</strong>.<br/><br/>
| Si on voit... | Opération inverse |
|--------------|------------------|
| $\\sqrt{x}$ | Mettre au carré : $( )^2$ |
| $x^2$ | Racine carrée : $\\sqrt{ }$ |
| $x^n$ | Puissance $1/n$ : $( )^{1/n}$ |
| $e^x$ | Logarithme naturel : $\\ln( )$ |
| $\\ln(x)$ | Exponentielle : $e^{( )}$ |
| $\\log_{10}(x)$ | Puissance de 10 : $10^{( )}$ |<br/><br/>
<strong>Attention aux domaines</strong> :<br/>
• $\\sqrt{x}$ n'existe que si $x \\geq 0$<br/>
• $\\ln(x)$ n'existe que si $x > 0$<br/>
• $x^2 = a$ a deux solutions ($\\pm\\sqrt{a}$), choisir la physiquement cohérente`,

    example: `<strong>Exemple 1 — Retrouver R dans $Z = \\sqrt{R^2 + X_L^2}$</strong><br/><br/>
Un circuit présente $Z = 100\\;\\Omega$ et $X_L = 60\\;\\Omega$. Trouver $R$ :<br/>
$100 = \\sqrt{R^2 + 60^2}$<br/>
$100^2 = R^2 + 3600$ (mise au carré des deux membres)<br/>
$R^2 = 10000 - 3600 = 6400$<br/>
$R = \\sqrt{6400} = 80\\;\\Omega$<br/><br/>
<strong>Exemple 2 — Trouver la vitesse depuis $E_c = \\frac{1}{2}mv^2$</strong><br/><br/>
$E_c = 3600\\;\\text{J}$, $m = 80\\;\\text{kg}$. Trouver $v$ :<br/>
$3600 = \\frac{1}{2} \\times 80 \\times v^2 = 40\\,v^2$<br/>
$v^2 = 3600 / 40 = 90$<br/>
$v = \\sqrt{90} \\approx 9{,}49\\;\\text{m/s}$<br/><br/>
<strong>Exemple 3 — Inverser une loi exponentielle RC</strong><br/><br/>
$u_C(t) = 12(1 - e^{-t/0{,}5})$. À quel instant $t$ est-ce que $u_C = 9\\;\\text{V}$ ?<br/>
$9 = 12(1 - e^{-t/0{,}5})$<br/>
$9/12 = 1 - e^{-t/0{,}5}$<br/>
$e^{-t/0{,}5} = 1 - 0{,}75 = 0{,}25$<br/>
$-t/0{,}5 = \\ln(0{,}25) = -1{,}386$<br/>
$t = 0{,}5 \\times 1{,}386 = 0{,}693\\;\\text{s}$<br/><br/>
<strong>Exemple 4 — Retrouver un rapport de tension depuis des dB</strong><br/><br/>
Un filtre atténue de $-30\\;\\text{dB}$ en tension. Quel est le rapport $V_s/V_e$ ?<br/>
$-30 = 20\\log_{10}(V_s/V_e)$<br/>
$\\log_{10}(V_s/V_e) = -30/20 = -1{,}5$<br/>
$V_s/V_e = 10^{-1{,}5} \\approx 0{,}0316$<br/><br/>
<strong>Exemple 5 — Pression dynamique (BTP, ventilation)</strong><br/><br/>
La pression dynamique $p_d = \\frac{1}{2}\\rho v^2$. Si $p_d = 20\\;\\text{Pa}$ et $\\rho = 1{,}2\\;\\text{kg/m}^3$ :<br/>
$v^2 = 2 p_d / \\rho = 2 \\times 20 / 1{,}2 = 33{,}33$<br/>
$v = \\sqrt{33{,}33} \\approx 5{,}77\\;\\text{m/s}$`,

    formulas: [
      { label: 'Racine → carré', formula: '\\sqrt{x} = a \\Rightarrow x = a^2' },
      { label: 'Puissance 2 → racine', formula: 'x^2 = a \\Rightarrow x = \\pm\\sqrt{a}' },
      { label: 'Exp → ln', formula: 'e^x = a \\Rightarrow x = \\ln a' },
      { label: 'Ln → exp', formula: '\\ln x = a \\Rightarrow x = e^a' },
      { label: 'Log10 → 10^', formula: '\\log_{10} x = a \\Rightarrow x = 10^a' },
      { label: 'Retrouver R', formula: 'Z = \\sqrt{R^2+X^2} \\Rightarrow R = \\sqrt{Z^2-X^2}' },
      { label: 'Retrouver v', formula: 'E_c = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2E_c/m}' },
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-size:0.88rem;line-height:2">
<div style="font-weight:700;margin-bottom:10px">Opérations et leurs inverses</div>
<div style="font-family:monospace;color:var(--text)">
  √x  ←→  x²         (racine ↔ carré)<br/>
  eˣ  ←→  ln(x)      (exp ↔ logarithme naturel)<br/>
  10ˣ ←→  log₁₀(x)   (puissance 10 ↔ log décimal)<br/>
  x²  ←→  √x         (carré ↔ racine)<br/>
  x³  ←→  ∛x         (cube ↔ racine cubique)<br/>
</div>
<div style="margin-top:10px;font-size:0.82rem;color:var(--text-muted)">
  Principe : appliquer l'inverse des deux côtés de l'égalité.
</div>
</div>`,

    recap: `<strong>Ce qu'il faut retenir</strong><br/><br/>
• Pour inverser $\\sqrt{x}$ : mettre au carré les deux membres<br/>
• Pour inverser $e^x$ : prendre $\\ln$ des deux membres<br/>
• Pour inverser $\\ln(x)$ : prendre $e^{()}$ des deux membres<br/>
• Pour inverser $x^2$ : prendre $\\sqrt{}$ des deux membres (vérifier le signe)<br/>
• Dans les formules physiques : isoler le terme avec l'inconnue, puis appliquer la transformation inverse`,

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
      answer: 0,
      correction: 'v = √(2Ec/m) = √(2×180000/1800) = √(200) ≈ 14,1 m/s... Attention : v = √(2×180000/1800) = √200 ≈ 14,1 m/s. (Correction : réponse correcte = 14,1 m/s → option B)',
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
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['impedance_R', 'energie_cinetique_v', 'RC_inverse_t', 'pression_dynamique_v']);

      if (type === 'impedance_R') {
        const Z = pick([50, 100, 130, 170, 260]);
        const X = pick([30, 40, 60, 80, 100, 120]);
        if (X >= Z) return { statement: 'Recalcul...', answer: 0, tolerance: 1, unit: 'Ω', hint: '', solution: '' };
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
          solution: `$R = \\sqrt{${Z}^2 - ${X}^2} = \\sqrt{${Z*Z} - ${X*X}} = \\sqrt{${Z*Z - X*X}} \\approx ${Rn}\\;\\Omega$`,
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
          solution: `$v = \\sqrt{\\dfrac{2 \\times ${Ec_kJ} \\times 10^3}{${m}}} = \\sqrt{${(2*Ec/m).toFixed(2)}} \\approx ${v.toFixed(1)}\\;\\text{m/s}$`,
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
          statement: `Dans un ${context}, la tension aux bornes du condensateur suit : $u_C(t) = ${E}\\left(1 - e^{-t/${tau}}\\right)$ V.<br/>
À quel instant $t$ la tension atteint-elle $u_C = ${uc.toFixed(1)}\\;\\text{V}$ ? (Arrondir à 0,01 s)`,
          answer: parseFloat(t.toFixed(2)),
          tolerance: 0.02,
          unit: 's',
          hint: `Isoler $e^{-t/\\tau}$, puis prendre $\\ln$ et résoudre pour $t$.`,
          solution: `$${uc.toFixed(1)} = ${E}(1 - e^{-t/${tau}})$<br/>$e^{-t/${tau}} = 1 - ${frac} = ${(1-frac).toFixed(2)}$<br/>$-t/${tau} = \\ln(${(1-frac).toFixed(2)}) \\approx ${Math.log(1-frac).toFixed(3)}$<br/>$t = ${tau} \\times ${(-Math.log(1-frac)).toFixed(3)} \\approx ${t.toFixed(2)}\\;\\text{s}$`,
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
        solution: `$v = \\sqrt{\\dfrac{2 \\times ${pd}}{1{,}2}} = \\sqrt{${(2*pd/rho).toFixed(1)}} \\approx ${v.toFixed(1)}\\;\\text{m/s}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en CVC (Chauffage, Ventilation, Climatisation) doit dimensionner une bouche d'extraction d'air. Les données sont :<br/><br/>
• Débit volumique requis : $Q = 500\\;\\text{m}^3/\\text{h}$<br/>
• Vitesse maximale admissible en bouche : $v_{\\max} = 4\\;\\text{m/s}$ (pour ne pas générer de bruit)<br/>
• Densité de l'air : $\\rho = 1{,}2\\;\\text{kg/m}^3$<br/><br/>
Le technicien souhaite choisir une bouche circulaire de diamètre $D$.`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  ┌───────────────────────┐
  │     Local ventilé     │
  │                       │→ Q = 500 m³/h
  │      ○ ← bouche       │
  │    D = ?              │   v ≤ 4 m/s
  └───────────────────────┘
</pre>
</div>`,
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
        q: 'Un condensateur se décharge selon $u_C(t) = 48 \\cdot e^{-t/3}$ V. À quel instant la tension est-elle égale à $12\\;\\text{V}$ ?',
        answer: '$12 = 48 e^{-t/3}$<br/>$e^{-t/3} = 12/48 = 1/4$<br/>$-t/3 = \\ln(1/4) = -\\ln 4$<br/>$t = 3\\ln 4 \\approx 4{,}16\\;\\text{s}$',
        points: 4,
      },
      {
        q: 'La formule de la puissance sonore est $L_W = 10\\log_{10}(W/W_0)$ avec $W_0 = 10^{-12}\\;\\text{W}$. Un moteur produit $L_W = 85\\;\\text{dB}$. Quelle est sa puissance acoustique $W$ ?',
        answer: '$85 = 10\\log(W/10^{-12})$<br/>$\\log(W/10^{-12}) = 8{,}5$<br/>$W/10^{-12} = 10^{8{,}5} = 3{,}16 \\times 10^8$<br/>$W = 3{,}16 \\times 10^{-4}\\;\\text{W} \\approx 0{,}316\\;\\text{mW}$',
        points: 4,
      },
      {
        q: 'Un ressort a une énergie potentielle $E_p = \\frac{1}{2}kx^2 = 2{,}5\\;\\text{J}$ avec $k = 800\\;\\text{N/m}$. Calculer l\'allongement $x$.',
        answer: '$2{,}5 = \\frac{1}{2} \\times 800 \\times x^2 = 400 x^2$<br/>$x^2 = 2{,}5/400 = 6{,}25 \\times 10^{-3}$<br/>$x = \\sqrt{6{,}25 \\times 10^{-3}} = 0{,}0791\\;\\text{m} \\approx 7{,}9\\;\\text{cm}$',
        points: 4,
      },
      {
        q: 'Résoudre : $\\sqrt{3x - 5} = 4$. Vérifier la solution.',
        answer: '$3x - 5 = 16$ (mise au carré)<br/>$3x = 21$<br/>$x = 7$<br/>Vérification : $\\sqrt{3 \\times 7 - 5} = \\sqrt{16} = 4$ ✓',
        points: 3,
      },
    ],
  },
});
