/* =========================================================
   Spark Learning – data/bts/bts-fourier.js
   Module : Série de Fourier (BTS)
   ========================================================= */

window.MODULES.push(
  {
    id: 'bts-fourier',
    level: 3, subject: 'maths',
    icon: '〰️',
    title: 'Séries de Fourier',
    subtitle: 'Décomposition en harmoniques, spectre fréquentiel',
    keywords: ['Fourier', 'Harmonique', 'Fréquence', 'Signal périodique', 'Coefficients'],
    physics: 'Analyse spectrale de signaux : harmoniques de courant, acoustique, traitement du signal',
    cours: {
      intro: 'Toute fonction périodique peut être décomposée en une somme infinie de sinusoïdes de fréquences multiples de la fréquence fondamentale : c\'est le théorème de Fourier.<br/><br/>L\'intuition : n\'importe quelle forme d\'onde — créneau, dent de scie, impulsion — est une superposition de "sons purs" (harmoniques), ce que l\'oreille et les filtres électroniques perçoivent séparément.<br/><br/>En BTS, cette décomposition est centrale en électronique de puissance (harmoniques de courant des variateurs de vitesse), en acoustique (timbre d\'un instrument) et en traitement numérique du signal.<br/><br/>L\'amplitude de la $n$-ième harmonique est $c_n=\\sqrt{a_n^2+b_n^2}$ : le tracé de $c_n$ en fonction de $n$ s\'appelle le spectre du signal.<br/><br/>Attention en un point de <strong>discontinuité</strong> (saut d\'un créneau) : la série de Fourier ne converge pas vers la valeur du signal.<br/><br/>Elle converge vers la <strong>moyenne des limites</strong> à gauche et à droite du saut : c\'est le <strong>théorème de Dirichlet</strong>.<br/><br/>Le <strong>phénomène de Gibbs</strong> est autre chose : juste à côté du saut, la somme des premières harmoniques dépasse le signal d\'environ $9\\,\\%$ de la hauteur du saut, quel que soit le nombre d\'harmoniques ajoutées.',
      definitions: [
        { term: 'Harmonique de rang $n$', def: 'Composante sinusoïdale de fréquence $nf_0$ ($n$ fois la fréquence fondamentale). Le fondamental ($n=1$) a la fréquence $f_0 = 1/T$. L\'harmonique 3 a la fréquence $3f_0$, etc.' },
        { term: 'Spectre fréquentiel', def: 'Graphe de l\'amplitude $c_n = \\sqrt{a_n^2+b_n^2}$ en fonction du rang $n$ (ou de la fréquence $nf_0$). Il montre la "recette" du signal en termes de sinusoïdes.' },
        { term: 'Valeur moyenne $a_0$', def: 'Composante continue du signal : $a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$. Un signal alternatif symétrique a $a_0 = 0$.' },
        { term: 'Phénomène de Gibbs', def: 'Au voisinage d\'une discontinuité, la série de Fourier tronquée présente un dépassement d\'environ $9\\,\\%$ de la hauteur du saut, qui ne disparaît jamais, même en ajoutant des harmoniques.' }
      ],
      method: {
        title: 'Calculer les coefficients de Fourier',
        steps: [
          '<strong>Signal périodique</strong> : de période $T$ (ou pulsation $\\omega_0=2\\pi/T$).<br/><br/><strong>Exemple :</strong> Signal de fréquence $f_0 = 50$ Hz → $T = 1/50 = 0{,}02$ s, $\\omega_0 = 2\\pi \\times 50 = 100\\pi$ rad/s.',
          '<strong>Composante continue</strong> : $a_0=\\frac{1}{T}\\int_0^T f(t)\\,dt$ (valeur moyenne).<br/><br/><strong>Exemple :</strong> Signal créneau $\\pm A$ symétrique → $a_0 = 0$ (aires positives et négatives s\'annulent).',
          '<strong>Coefficients de Fourier</strong> : $a_n=\\frac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$ et $b_n=\\frac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$.<br/><br/><strong>Exemple :</strong> Signal créneau impair d\'amplitude $A$ → $a_n = 0$ (impair, pas de cosinus) et $b_n = 4A/(n\\pi)$ pour $n$ impair, $0$ pour $n$ pair.',
          '<strong>Décomposition complète</strong> : $f(t)=a_0+\\sum_{n=1}^{\\infty}(a_n\\cos(n\\omega_0 t)+b_n\\sin(n\\omega_0 t))$.<br/><br/><strong>Exemple :</strong> Créneau $\\pm 5$ V → $f(t) \\approx \\frac{20}{\\pi}\\sin(\\omega_0 t) + \\frac{20}{3\\pi}\\sin(3\\omega_0 t) + \\frac{20}{5\\pi}\\sin(5\\omega_0 t) + \\ldots$'
        ]
      },
      example: {
        statement: 'Un variateur de vitesse produit un signal de courant créneau de fréquence $f_0 = 50$ Hz et d\'amplitude $\\pm 10$ A (signal impair). Calculer l\'amplitude du fondamental, de la $3^e$ et de la $5^e$ harmonique. Quel pourcentage de la puissance totale est contenu dans le fondamental seul ?',
        steps: [
          'Signal créneau impair : $a_0 = 0$, $a_n = 0$ (pas de cosinus), $b_n = \\frac{4A}{n\\pi}$ pour $n$ impair.',
          'Fondamental ($n=1$) : $b_1 = \\frac{4 \\times 10}{\\pi} = \\frac{40}{\\pi} \\approx 12{,}73$ A.',
          '$3^e$ harmonique ($n=3$) : $b_3 = \\frac{40}{3\\pi} \\approx 4{,}24$ A (fréquence $150$ Hz).',
          '$5^e$ harmonique ($n=5$) : $b_5 = \\frac{40}{5\\pi} \\approx 2{,}55$ A (fréquence $250$ Hz).',
          'Puissance relative du fondamental (Parseval) : la puissance de chaque harmonique est proportionnelle à $b_n^2$.<br/><br/>$\\dfrac{b_1^2}{b_1^2 + b_3^2 + b_5^2 + \\ldots} = \\dfrac{1}{1 + \\frac{1}{9} + \\frac{1}{25} + \\frac{1}{49} + \\ldots}$ car $b_n = \\dfrac{b_1}{n}$.<br/><br/>Or $1 + \\frac{1}{9} + \\frac{1}{25} + \\ldots = \\dfrac{\\pi^2}{8}$, donc la part du fondamental vaut $\\dfrac{8}{\\pi^2} \\approx 0{,}81$ : le <strong>fondamental porte environ $81\\,\\%$ de la puissance</strong>.'
        ],
        answer: 'Fondamental : $12{,}73$ A. Harmonique 3 : $4{,}24$ A. Harmonique 5 : $2{,}55$ A. Le fondamental porte environ $81\\%$ de la puissance totale.'
      },
      formulas: [
        '$a_0=\\dfrac{1}{T}\\int_0^T f(t)\\,dt$',
        '$a_n=\\dfrac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$',
        '$b_n=\\dfrac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$',
        'Théorème de Parseval : $\\frac{1}{T}\\int_0^T[f(t)]^2dt=a_0^2+\\frac{1}{2}\\sum(a_n^2+b_n^2)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Spectre fréquentiel',
        title: 'Passer d\'un signal créneau à ses harmoniques dominantes',
        description: 'Le signal temporel garde une forme brutale, mais son spectre isole des barres d\'amplitude aux fréquences multiples de la fondamentale.',
        svg: `
          <svg viewBox="0 0 360 260" role="img" aria-labelledby="fourier-graph-title fourier-graph-desc">
            <title id="fourier-graph-title">Signal temporel et spectre de Fourier</title>
            <desc id="fourier-graph-desc">Le haut du schema montre un signal creneau et le bas les amplitudes des harmoniques 1, 3 et 5.</desc>
            <text class="annotation-label" x="34" y="24">Signal temporel</text>
            <line class="axis" x1="38" y1="88" x2="324" y2="88"></line>
            <line class="axis" x1="38" y1="36" x2="38" y2="140"></line>
            <path class="curve-main" d="M38 52 L82 52 L82 124 L144 124 L144 52 L206 52 L206 124 L268 124 L268 52 L324 52"></path>
            <text class="tick-label" x="30" y="56">+A</text>
            <text class="tick-label" x="30" y="128">-A</text>
            <text class="tick-label" x="77" y="146">T/2</text>
            <text class="tick-label" x="140" y="146">T</text>
            <text class="tick-label" x="202" y="146">3T/2</text>
            <text class="tick-label" x="262" y="146">2T</text>
            <line class="guide-line" x1="30" y1="164" x2="324" y2="164"></line>
            <text class="annotation-label" x="34" y="182">Spectre</text>
            <line class="axis" x1="38" y1="232" x2="324" y2="232"></line>
            <line class="axis" x1="38" y1="232" x2="38" y2="182"></line>
            <rect x="82" y="188" width="24" height="44" rx="4" fill="var(--diagram-accent)"></rect>
            <rect x="166" y="217" width="24" height="15" rx="4" fill="color-mix(in srgb, var(--diagram-accent) 78%, white)"></rect>
            <rect x="250" y="223" width="24" height="9" rx="4" fill="color-mix(in srgb, var(--diagram-accent) 58%, white)"></rect>
            <text class="annotation-label" x="82" y="182">Fondamental</text>
            <text class="annotation-label" x="159" y="211">3e (÷3)</text>
            <text class="annotation-label" x="244" y="217">5e (÷5)</text>
            <text class="tick-label" x="88" y="246">1</text>
            <text class="tick-label" x="172" y="246">3</text>
            <text class="tick-label" x="256" y="246">5</text>
            <text class="tick-label" x="14" y="190">c<tspan baseline-shift="sub" font-size="70%">n</tspan></text>
            <text class="axis-label" x="327" y="236">n</text>
          </svg>
        `,
        notes: [
          'Le signal créneau est brutal dans le temps, mais il peut être décomposé en une somme d\'ondes sinusoïdales.',
          'Pour un créneau symétrique impair, seules les harmoniques impaires apparaissent : 1, 3, 5, etc.',
          'Les barres du spectre décroissent : le fondamental domine, puis les harmoniques corrigent la forme du signal.'
        ],
        reading: 'Le haut montre à quoi ressemble le signal. Le bas montre quelles fréquences il contient vraiment et avec quelle importance.',
        caption: 'Représentation conjointe d\'un créneau et de son spectre en harmoniques impaires.'
      },
      recap: [
        'Tout signal périodique = composante continue ($a_0$) + somme infinie d\'harmoniques ($a_n\\cos + b_n\\sin$).',
        'Signal pair → seulement des cosinus ($b_n = 0$). Signal impair → seulement des sinus ($a_n = 0$).',
        'Le spectre du créneau décroît en $1/n$ (harmoniques impaires seulement). Celui du triangle en $1/n^2$ (convergence plus rapide).',
        'Aux points de discontinuité, la série converge vers la moyenne des limites à gauche et à droite.'
      ],
      piege: 'Si $f$ est paire ($f(-t)=f(t)$), tous les $b_n=0$ (sinus nuls). Si $f$ est impaire, tous les $a_n=0$. Exploiter la symétrie simplifie considérablement les calculs.'
    },
    quiz: [
      { q: 'Le coefficient $a_0$ d\'une série de Fourier représente :', options: ['L\'amplitude de la fréquence fondamentale', 'La valeur moyenne du signal', 'Le déphasage', 'La fréquence fondamentale'], answer: 1, correction: '$a_0=\\frac{1}{T}\\int_0^T f(t)\\,dt$ est la <strong>valeur moyenne</strong> (composante continue) du signal.<br/><br/>L\'amplitude du fondamental est $b_1$ (ou $c_1$), pas $a_0$ : $a_0$ ne contient aucune sinusoïde.<br/><br/>La fréquence fondamentale $f_0 = 1/T$ et le déphasage ne sont pas des coefficients de la série : ce sont des caractéristiques du signal ou de chaque harmonique.' },
      { q: 'Un signal carré fait un saut de $-1$ à $+1$ en $t=0$. La série de Fourier converge en $t=0$ vers :', options: ['$+1$ (valeur juste après le saut)', '$-1$ (valeur juste avant le saut)', '$0$ (moyenne des deux valeurs)', '$+\\infty$ (la série diverge)'], answer: 2, correction: 'Au point de discontinuité, la série de Fourier converge vers $\\frac{f(0^-)+f(0^+)}{2}=\\frac{-1+1}{2}=0$, pas vers la valeur du signal. C\'est le théorème de Dirichlet. Ce résultat surprend souvent : la série "hésite" entre les deux valeurs et prend leur moyenne exacte.' },
      { q: 'La $3^e$ harmonique d\'un signal de fréquence $f_0=50$ Hz a pour fréquence :', options: ['$50$ Hz', '$100$ Hz', '$150$ Hz', '$200$ Hz'], answer: 2, correction: 'La $n$-ième harmonique a pour fréquence $nf_0$ : ici $3\\times50=150$ Hz.<br/><br/>$50$ Hz est le fondamental (rang 1) et $100$ Hz l\'harmonique de rang 2 : le rang se <strong>multiplie</strong> par $f_0$, il ne s\'ajoute pas.' },
      { q: 'Pour un créneau, $b_3 = b_1/3$. D\'après Parseval, la puissance portée par l\'harmonique 3 représente, par rapport à celle du fondamental :', options: ['$1/3$', '$1/6$', '$1/\\sqrt{3}$', '$1/9$'], answer: 3, correction: 'Parseval : la puissance d\'une harmonique est proportionnelle au <strong>carré</strong> de son amplitude, $\\frac{1}{2}b_n^2$.<br/><br/>$\\dfrac{\\frac{1}{2}b_3^2}{\\frac{1}{2}b_1^2} = \\left(\\dfrac{1}{3}\\right)^2 = \\dfrac{1}{9}$.<br/><br/>$1/3$ est le rapport des <strong>amplitudes</strong>, pas des puissances ; $1/6$ multiplie ce rapport par $\\frac{1}{2}$ alors que ce facteur se simplifie entre les deux puissances ; $1/\\sqrt{3}$ prend la racine au lieu du carré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const branch = pick(['a0', 'bn']);

        if (branch === 'a0') {
          // creneau non symetrique +A / -B (B different de A) : la valeur moyenne (A - B)/2 n'est jamais nulle
          const T = pick([1, 2, 4]);
          const A = rand(2, 6);
          const B = pick([1, 2, 3, 4, 5, 6].filter(v => v !== A));
          const a0 = (A - B) / 2;

          const ctx = pick([
            {
              build: () => `Le <strong>courant de sortie d'un hacheur réversible</strong> est un signal créneau qui vaut $+${A}$ A sur $[0;T/2]$ et $-${B}$ A sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> de ce courant.`
            },
            {
              build: () => `La <strong>tension de sortie d'un onduleur</strong> mal équilibré est un signal créneau qui vaut $+${A}$ V sur $[0;T/2]$ et $-${B}$ V sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> de cette tension.`
            },
            {
              build: () => `Le <strong>courant d'une batterie</strong> en cycle charge-décharge vaut $+${A}$ A (charge) sur $[0;T/2]$ et $-${B}$ A (décharge) sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> de ce courant.`
            },
            {
              build: () => `Un <strong>signal de commande</strong> issu d'un microcontrôleur vaut $+${A}$ V sur $[0;T/2]$ et $-${B}$ V sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> de ce signal de commande.`
            },
            {
              build: () => `Un <strong>synthétiseur</strong> émet un signal créneau décalé qui vaut $+${A}$ V sur $[0;T/2]$ et $-${B}$ V sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> (composante continue) de ce signal.`
            },
            {
              build: () => `Le <strong>couple d'un moteur</strong> en cycle alterné vaut $+${A}$ N·m (accélération) sur $[0;T/2]$ et $-${B}$ N·m (freinage) sur $[T/2;T]$ (période $T=${T}$ s).<br/><br/>Calcule $a_0$, la <strong>valeur moyenne</strong> de ce couple.`
            }
          ]);

          return {
            statement: ctx.build(),
            answer: a0,
            tolerance: 0.01,
            unit: '',
            hint: `$a_0=\\frac{1}{T}\\left(\\int_0^{T/2}${A}\\,dt+\\int_{T/2}^T(-${B})\\,dt\\right)$ : chaque intégrale vaut (valeur du palier) × (durée du palier).`,
            solution: [
              `Chaque palier dure $\\frac{T}{2}$ (ici $${fr(T / 2)}$ s) : $a_0=\\frac{1}{T}\\left(${A}\\times\\frac{T}{2}-${B}\\times\\frac{T}{2}\\right)=\\frac{${A}-${B}}{2}$.<br/><br/>La période $T$ se <strong>simplifie</strong> : seule compte la différence entre les deux paliers.`,
              `$a_0=${fr(a0)}$ : la valeur moyenne est ${a0 > 0 ? 'positive, le palier haut l\'emporte' : 'négative, le palier bas l\'emporte'}.<br/><br/>Elle ne serait nulle que pour un créneau <strong>symétrique</strong> ($+A$ et $-A$).`
            ]
          };
        }

        // branch === 'bn' : amplitude d'une harmonique impaire d'un créneau symétrique
        // (prolonge le calcul de a0 vers le cœur de la méthode : les coefficients b_n)
        const A = rand(4, 10);
        const n = pick([1, 3, 5, 7]);
        const bn = parseFloat((4 * A / (n * Math.PI)).toFixed(2));

        const ctxBn = pick([
          {
            build: () => `Le <strong>courant de sortie d'un variateur de vitesse</strong> est un signal créneau symétrique d'amplitude $${A}$ A.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          },
          {
            build: () => `La <strong>tension de sortie d'un onduleur</strong> est un signal créneau symétrique d'amplitude $${A}$ V.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          },
          {
            build: () => `Un <strong>signal de commande PWM</strong> piloté par un microcontrôleur est un créneau symétrique d'amplitude $${A}$ V.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          },
          {
            build: () => `Le courant absorbé par un <strong>redresseur</strong> alimentant une charge non linéaire est modélisé par un créneau symétrique d'amplitude $${A}$ A.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          },
          {
            build: () => `Un <strong>signal audio carré</strong> émis par un synthétiseur a une amplitude de $${A}$ V.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          },
          {
            build: () => `Un <strong>relais statique</strong> commute une charge industrielle en créneau symétrique d'amplitude $${A}$ A.<br/><br/>Calcule l'amplitude $b_{${n}}$ de l'harmonique de rang $${n}$, sachant que $b_n=\\dfrac{4A}{n\\pi}$ pour $n$ impair. (Arrondir à $0{,}01$.)`
          }
        ]);

        return {
          statement: ctxBn.build(),
          answer: bn,
          tolerance: 0.02,
          unit: '',
          hint: `$b_{${n}}=\\dfrac{4\\times${A}}{${n === 1 ? '' : n}\\pi}$.`,
          solution: [`$b_{${n}}=\\dfrac{4\\times${A}}{${n}\\times\\pi}=\\dfrac{${4 * A}}{${n === 1 ? '' : n}\\pi}\\approx${fr(bn)}$`]
        };
      }
    },
    probleme: {
      context: 'Un signal périodique triangulaire de période $T=2\\pi$ est défini par $f(t)=|t|$ sur $[-\\pi;\\pi]$.',
      tasks: [
        'Calculer $a_0$ (valeur moyenne sur $[-\\pi;\\pi]$).',
        'Ce signal est-il pair ou impair ? Que peut-on déduire pour les $b_n$ ?',
        'Donner l\'expression générale de la série de Fourier (premier terme non nul après $a_0$).'
      ],
      solutions: [
        '$a_0=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}|t|\\,dt=\\frac{2}{2\\pi}\\int_0^{\\pi}t\\,dt=\\frac{1}{\\pi}\\cdot\\frac{\\pi^2}{2}=\\frac{\\pi}{2}$.',
        '$f(-t)=|-t|=|t|=f(t)$ : signal pair. Donc $b_n=0$ pour tout $n$.',
        'Comme $f$ est paire, $a_n = \\dfrac{2}{T}\\int_{-\\pi}^{\\pi}|t|\\cos(nt)\\,dt = \\dfrac{2}{\\pi}\\int_0^{\\pi} t\\cos(nt)\\,dt$ (avec $T = 2\\pi$ et $\\omega_0 = 1$).<br/><br/>Intégration par parties ($u = t$, $v\' = \\cos(nt)$) : $\\int_0^{\\pi} t\\cos(nt)\\,dt = \\left[\\dfrac{t\\sin(nt)}{n}\\right]_0^{\\pi} - \\int_0^{\\pi}\\dfrac{\\sin(nt)}{n}\\,dt = 0 + \\left[\\dfrac{\\cos(nt)}{n^2}\\right]_0^{\\pi} = \\dfrac{(-1)^n - 1}{n^2}$.<br/><br/>Pour $n$ pair, $(-1)^n - 1 = 0$ : $a_n = 0$. Pour $n$ impair, $(-1)^n - 1 = -2$ : $a_n = \\dfrac{2}{\\pi} \\times \\dfrac{-2}{n^2} = -\\dfrac{4}{\\pi n^2}$.<br/><br/>Premier terme non nul après $a_0$ : $a_1\\cos t = -\\dfrac{4}{\\pi}\\cos t$.<br/><br/>$f(t)=\\dfrac{\\pi}{2}-\\dfrac{4}{\\pi}\\left(\\cos t+\\dfrac{\\cos 3t}{9}+\\dfrac{\\cos 5t}{25}+\\cdots\\right)$.'
      ],
      finalAnswer: 'Signal pair ($b_n=0$). Valeur moyenne $\\pi/2$. Série : harmoniques cosinus impaires seulement.'
    },

    evaluation: {
      title: 'Évaluation — Séries de Fourier',
      duration: '45 min',
      questions: [
        {
          statement: 'Un signal périodique a une fréquence fondamentale $f_0 = 100$ Hz. Quelle est la fréquence de la $5^e$ harmonique (en Hz) ?',
          type: 'numeric',
          answer: 500,
          tolerance: 0,
          unit: 'Hz',
          points: 1,
          correction: 'La $n$-ième harmonique a pour fréquence $nf_0 = 5 \\times 100 = 500$ Hz.'
        },
        {
          statement: 'Un signal de commande PWM vaut $+8$ V sur $[0; T/4[$ et $0$ V sur $[T/4; T[$. Calculer sa valeur moyenne $a_0$ (en V).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.01,
          unit: 'V',
          points: 2,
          correction: '$a_0 = \\dfrac{1}{T}\\int_0^T f(t)\\,dt = \\dfrac{1}{T}\\left(8 \\times \\dfrac{T}{4} + 0 \\times \\dfrac{3T}{4}\\right) = \\dfrac{8}{4} = 2$ V.<br/><br/>La valeur moyenne d\'un signal PWM est l\'amplitude multipliée par le <strong>rapport cyclique</strong> ($1/4$ ici) : c\'est ce principe qui permet de régler une tension moyenne avec un simple interrupteur.'
        },
        {
          statement: 'Un signal créneau vaut $+3$ sur $[0; T/2[$ et $-3$ sur $[T/2; T[$. Calculer l\'amplitude $b_3$ de son harmonique de rang 3 (arrondir à $0{,}01$).',
          type: 'numeric',
          answer: 1.27,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: 'Créneau impair d\'amplitude $A = 3$ : $b_n = \\dfrac{4A}{n\\pi}$ pour $n$ impair.<br/><br/>$b_3 = \\dfrac{4 \\times 3}{3\\pi} = \\dfrac{4}{\\pi} \\approx 1{,}27$.<br/><br/>C\'est le tiers du fondamental $b_1 = \\dfrac{12}{\\pi} \\approx 3{,}82$ : le spectre du créneau décroît en $1/n$.'
        },
        {
          statement: 'Si un signal est pair ($f(-t) = f(t)$), alors :',
          type: 'multiple-choice',
          options: ['Tous les $a_n = 0$ (pas de cosinus)', 'Tous les $b_n = 0$ (pas de sinus)', 'Tous les $a_n$ et $b_n$ sont nuls', '$a_0 = 0$ obligatoirement'],
          answer: 1,
          points: 2,
          correction: 'Une fonction paire n\'a que des composantes cosinus (paires aussi). Le produit $f(t)\\sin(n\\omega_0 t)$ est impair, donc son intégrale sur une période complète est nulle : $b_n = 0$ pour tout $n$.'
        },
        {
          statement: 'Un signal périodique vaut $-4$ sur $]-T/2; 0[$ et $+6$ sur $]0; T/2[$. Vers quelle valeur la série de Fourier converge-t-elle en $t = 0$ ?',
          type: 'numeric',
          answer: 1,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Théorème de Dirichlet : en un point de discontinuité, la série converge vers la demi-somme des limites à gauche et à droite.<br/><br/>$\\dfrac{f(0^-) + f(0^+)}{2} = \\dfrac{-4 + 6}{2} = 1$.<br/><br/>Ce n\'est ni $-4$ ni $+6$ : la série « hésite » entre les deux paliers et se fixe exactement au milieu.'
        }
      ]
    }
  }
);
