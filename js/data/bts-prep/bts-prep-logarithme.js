window.MODULES.push({
  id: 'bts-prep-logarithme',
  level: 3,
  subject: 'maths',
  tag: 'prep',
  icon: '📉',
  title: 'Logarithmes & Exponentielles',
  subtitle: 'ln, exp, décibels et cinétiques — comprendre les échelles',
  keywords: ['logarithme', 'exponentielle', 'décibel', 'ln', 'exp', 'constante de temps', 'base 10', 'pH', 'cinétique'],
  physics: 'Les fonctions logarithmique et exponentielle apparaissent dès qu\'on mesure des niveaux sonores (décibels), des temps de charge/décharge (RC, RL), des réactions chimiques (ordre 1) ou des échangeurs thermiques. Ce sont des outils fondamentaux en physique appliquée.',

  cours: {
    intro: `Les fonctions logarithme et exponentielle sont complémentaires — l'une est l'inverse de l'autre. Elles apparaissent systématiquement lorsqu'une grandeur physique <em>croît ou décroît proportionnellement à elle-même</em> : charge d'un condensateur, désintégration radioactive, refroidissement d'un corps, réaction d'ordre 1 en chimie.<br/><br/>
En BTS, vous les rencontrerez principalement sous deux formes : le <strong>logarithme décimal</strong> ($\\log_{10}$) pour les décibels et le pH, et le <strong>logarithme naturel</strong> ($\\ln$) pour les équations différentielles et les cinétiques.`,

    definitions: [
      { term: 'Fonction exponentielle $e^x$', def: 'Définie pour tout réel $x$. Base $e \\approx 2{,}718$ (constante de Neper).<br/>$e^{\\ln x} = x$ et $\\ln(e^x) = x$ pour tout $x > 0$.<br/>Relation : $\\ln(x) = \\log_{10}(x) \\times \\ln(10) \\approx 2{,}303 \\times \\log_{10}(x)$.' },
      { term: 'Propriétés de $\\ln$ (et $\\log$)', def: '$\\ln(a \\times b) = \\ln a + \\ln b$<br/>$\\ln(a/b) = \\ln a - \\ln b$<br/>$\\ln(a^n) = n \\times \\ln a$<br/>$\\ln(1) = 0$ — $\\ln(e) = 1$' },
      { term: 'Propriétés de $e^x$', def: '$e^{a+b} = e^a \\times e^b$ — $e^{a-b} = e^a/e^b$ — $(e^a)^n = e^{na}$<br/>$e^0 = 1$ — $e^1 \\approx 2{,}718$ — $e^{-x} = 1/e^x$' },
      { term: 'Résoudre une équation', def: 'Si $e^x = k$ → $x = \\ln(k)$<br/>Si $\\ln(x) = k$ → $x = e^k$<br/>Si $a \\cdot e^{bx} = c$ → $e^{bx} = c/a$ → $bx = \\ln(c/a)$ → $x = \\ln(c/a)/b$' },
    ],

    method: {
      title: 'Applications : décibels et constante de temps',
      steps: [
        '<strong>Décibels (dB)</strong> : unité logarithmique pour les rapports de puissance ou de pression.<br/>Niveau de puissance : $L_P = 10 \\times \\log_{10}(P/P_0)$ dB<br/>Niveau de pression/tension : $L_p = 20 \\times \\log_{10}(p/p_0)$ dB (facteur 20 car $P \\propto p^2$)',
        'Valeurs repères : +3 dB ≈ doubler la puissance ; +6 dB ≈ doubler la pression ; +10 dB ≈ ×10 la puissance perçue.',
        '<strong>Constante de temps τ (RC, RL)</strong> :<br/>Charge : $u_C(t) = E(1 - e^{-t/\\tau})$ avec $\\tau = RC$<br/>Décharge : $u_C(t) = U_0 \\cdot e^{-t/\\tau}$',
        'À $t = \\tau$ : $u_C \\approx 0{,}632 \\times E$ (63,2% de la valeur finale). À $t = 5\\tau$ : régime permanent (>99%).',
      ],
    },

    example: {
      statement: 'Quatre applications : atténuation en dB, réaction chimique d\'ordre 1, échangeur thermique, acoustique industrielle.',
      steps: [
        '<strong>Électrotechnique : atténuation en dB</strong><br/>Un filtre atténue d\'un facteur 100 en tension :<br/>$L = 20 \\times \\log_{10}(100) = 20 \\times 2 = 40\\;\\text{dB}$',
        '<strong>Chimie : réaction d\'ordre 1</strong><br/>$[A](t) = [A]_0 e^{-0{,}05t}$. Temps de demi-vie :<br/>$t_{1/2} = \\ln 2 / 0{,}05 = 0{,}693/0{,}05 = 13{,}9\\;\\text{min}$',
        '<strong>Thermique : NTU d\'un échangeur</strong><br/>Pour $\\varepsilon = 0{,}8$ : $e^{-\\text{NTU}} = 0{,}2$ → $\\text{NTU} = -\\ln(0{,}2) \\approx 1{,}61$',
        '<strong>Acoustique : addition de sources</strong><br/>Deux machines à 80 dB : $L_{\\text{tot}} = 10\\log_{10}(2 \\times 10^8) = 10(0{,}301 + 8) = 83{,}0\\;\\text{dB}$<br/>Deux sources identiques ajoutent toujours +3 dB.',
      ],
      answer: 'Les fonctions $\\ln$ et $\\exp$ permettent d\'inverser les équations exponentielles. Les décibels compriment des rapports très grands sur une échelle maniable.',
    },

    formulas: [
      '<strong>Réciproque ln/exp</strong> : $e^{\\ln x} = x$ et $\\ln(e^x) = x$',
      '<strong>Produit → somme</strong> : $\\ln(ab) = \\ln a + \\ln b$',
      '<strong>Quotient → différence</strong> : $\\ln(a/b) = \\ln a - \\ln b$',
      '<strong>Puissance</strong> : $\\ln(a^n) = n\\ln a$',
      '<strong>Décibel (puissance)</strong> : $L = 10\\log_{10}(P/P_0)\\;\\text{dB}$',
      '<strong>Décibel (pression/tension)</strong> : $L = 20\\log_{10}(V/V_0)\\;\\text{dB}$',
      '<strong>Charge condensateur</strong> : $u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$, $\\tau = RC$',
      '<strong>Demi-vie</strong> : $t_{1/2} = \\dfrac{\\ln 2}{k} \\approx \\dfrac{0{,}693}{k}$',
    ],

    diagram: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:10px;padding:20px;font-family:monospace;font-size:0.88rem;line-height:1.8">
<div style="font-weight:700;margin-bottom:10px;font-family:sans-serif">Charge d'un condensateur RC</div>
<pre style="margin:0;color:var(--text)">
  u_C
   E ─────────────────────────── 99%
 0.95E ─────────────────── 95%
 0.86E ────────────
 0.63E ─────                     ← t = τ
       │   τ   2τ  3τ  4τ  5τ → t

  u_C(τ)  = E(1 - 1/e) ≈ 0.632 E
  u_C(5τ) ≈ 0.993 E  → régime permanent
</pre>
<div style="margin-top:10px;font-family:sans-serif;font-size:0.85rem;color:var(--text-muted)">
  τ = RC (en secondes si R en Ω et C en F)
</div>
</div>`,

    recap: [
      '$\\ln$ et $\\exp$ sont inverses : $e^{\\ln x} = x$.',
      'Propriétés : $\\ln(ab) = \\ln a + \\ln b$ — $\\ln(a/b) = \\ln a - \\ln b$ — $\\ln(a^n) = n\\ln a$.',
      'Décibels : $L = 10\\log(P/P_0)$ pour les puissances, $20\\log(V/V_0)$ pour les tensions.',
      '+3 dB ≈ doubler la puissance ; +10 dB ≈ ×10 la puissance perçue.',
      'Constante de temps : à $t = \\tau$, on atteint $63\\%$ de la valeur finale ; à $5\\tau$, régime permanent.',
      'Demi-vie : $t_{1/2} = \\ln 2 / k \\approx 0{,}693/k$.',
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
      correction: 'τ = RC = 10×10³ × 100×10⁻⁶ = 1 s. Ne pas oublier les conversions d\'unités : kΩ × μF = 10³ × 10⁻⁶ = 10⁻³ = ms... ici R = 10 kΩ = 10⁴ Ω et C = 100 μF = 10⁻⁴ F donc τ = 10⁴ × 10⁻⁴ = 1 s.',
    },
    {
      q: 'Si $e^x = 5$, alors $x$ vaut :',
      options: ['$5/e$', '$\\ln 5 \\approx 1{,}609$', '$\\log_{10} 5 \\approx 0{,}699$', '$5^e$'],
      answer: 1,
      correction: 'e^x = 5 ⟹ x = ln(5) ≈ 1,609. ln est la réciproque de exp.',
    },
    {
      q: 'Une machine produit un bruit de 85 dB. Une deuxième machine identique est allumée. Le niveau sonore combiné est :',
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
  ],

  exercice: {
    type: 'numeric',
    generate() {
      const type = pick(['RC_charge', 'dB_gain', 'demi_vie']);

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
          solution: `$\\tau = ${R} \\times 10^3 \\times ${C} \\times 10^{-6} = ${tau.toFixed(3)}\\;\\text{s}$<br/>$u_C = ${E}\\left(1 - e^{-2{,}5}\\right) = ${E} \\times (1 - 0{,}0821) = ${E} \\times 0{,}9179 \\approx ${uc.toFixed(2)}\\;\\text{V}$`,
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
          solution: `$\\dfrac{V_s}{V_e} = 10^{${gain_dB}/20} = 10^{${(gain_dB/20).toFixed(1)}} = ${factor.toFixed(4)}$`,
        };
      }

      // demi_vie
      const k = pick([0.02, 0.05, 0.1, 0.2, 0.5]); // min⁻¹
      const t_half = Math.log(2) / k;
      const context = pick(['traitement d\'eau potable (chloration)', 'réaction de saponification', 'dépollution d\'effluents industriels', 'désinfection UV de l\'air']);
      return {
        statement: `Une réaction de premier ordre lors d'un ${context} a une constante de vitesse $k = ${k}\\;\\text{min}^{-1}$.<br/><br/>Calculez le temps de demi-vie $t_{1/2}$ (en min, arrondi à 0,1 min).`,
        answer: parseFloat(t_half.toFixed(1)),
        tolerance: 0.1,
        unit: 'min',
        hint: `$t_{1/2} = \\ln 2 / k \\approx 0{,}693 / k$.`,
        solution: `$t_{1/2} = \\dfrac{\\ln 2}{k} = \\dfrac{0{,}6931}{${k}} \\approx ${t_half.toFixed(1)}\\;\\text{min}$`,
      };
    },
  },

  probleme: {
    context: `Un technicien en maintenance industrielle analyse la réponse d'un système d'asservissement de température. La régulation utilise un capteur thermique dont la réponse suit un modèle du premier ordre.<br/><br/>
Le four industriel monte de 20°C à 200°C selon la loi :<br/>
$$T(t) = 200 - 180 \\cdot e^{-t/\\tau}$$<br/>
avec $\\tau = 8\\;\\text{min}$ (constante de temps thermique).<br/><br/>
Le four est considéré opérationnel dès que $T \\geq 170°\\text{C}$.`,
    schema: `<div style="background:var(--surface-alt);border:1px solid var(--border);border-radius:8px;padding:16px;font-family:monospace;font-size:0.85rem">
<pre>
  T(°C)
  200 ─────────────────────────────
  170 ─────────────────  ← seuil opérationnel
  145 ────────

  20  ●
      │   8   16  24  32  40 → t (min)
      │   τ   2τ  3τ  4τ  5τ
</pre>
</div>`,
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
    finalAnswer: 'Le four devient opérationnel à $t^* \\approx 14{,}3\\;\\text{min}$, bien avant la limite de 25 min. La valeur 99% est atteinte à $5\\tau = 40\\;\\text{min}$.',
  },

  evaluation: {
    title: 'Évaluation — Logarithmes & Exponentielles',
    duration: '25 min',
    questions: [
      {
        q: 'Résoudre : $3 \\cdot e^{2x} = 48$. Donner $x$ arrondi à 0,01.',
        answer: '$e^{2x} = 16 \\Rightarrow 2x = \\ln 16 = 4\\ln 2 \\approx 2{,}773 \\Rightarrow x \\approx 1{,}39$',
        points: 3,
      },
      {
        q: 'Un câble de fibre optique présente une atténuation de 0,3 dB/km sur 80 km. Quel est le rapport $P_{\\text{sortie}}/P_{\\text{entrée}}$ ?',
        answer: '$L_{\\text{total}} = 0{,}3 \\times 80 = 24\\;\\text{dB}$<br/>$P_s/P_e = 10^{-24/10} = 10^{-2{,}4} \\approx 3{,}98 \\times 10^{-3}$<br/>La puissance de sortie est environ 0,4 % de la puissance d\'entrée.',
        points: 4,
      },
      {
        q: 'Simplifier : $\\ln(\\sqrt{x}) + \\ln(x^2) - \\ln(x^{3/2})$',
        answer: '$\\frac{1}{2}\\ln x + 2\\ln x - \\frac{3}{2}\\ln x = (\\frac{1}{2} + 2 - \\frac{3}{2})\\ln x = 1 \\times \\ln x = \\ln x$',
        points: 3,
      },
      {
        q: 'Un condensateur $C = 470\\;\\mu\\text{F}$ se décharge à travers $R = 2{,}2\\;\\text{k}\\Omega$ depuis $U_0 = 50\\;\\text{V}$. Après combien de temps la tension tombe-t-elle à $5\\;\\text{V}$ ?',
        answer: '$\\tau = RC = 2200 \\times 470 \\times 10^{-6} = 1{,}034\\;\\text{s}$<br/>$5 = 50 \\cdot e^{-t/\\tau} \\Rightarrow e^{-t/\\tau} = 0{,}1 \\Rightarrow t = -\\tau \\ln(0{,}1) = 1{,}034 \\times 2{,}303 \\approx 2{,}38\\;\\text{s}$',
        points: 4,
      },
    ],
  },
});
