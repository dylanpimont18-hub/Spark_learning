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
    physics: true,
    cours: {
      intro: 'Toute fonction périodique peut être décomposée en une somme infinie de sinusoïdes de fréquences multiples de la fréquence fondamentale : c\'est le théorème de Fourier. L\'intuition : n\'importe quelle forme d\'onde — créneau, dent de scie, impulsion — est une superposition de "sons purs" (harmoniques), ce que l\'oreille et les filtres électroniques perçoivent séparément. En BTS, cette décomposition est centrale en électronique de puissance (harmoniques de courant des variateurs de vitesse), en acoustique (timbre d\'un instrument) et en traitement numérique du signal. L\'amplitude de la $n$-ième harmonique est $c_n=\\sqrt{a_n^2+b_n^2}$ : le tracé de $c_n$ en fonction de $n$ s\'appelle le spectre du signal. Piège fréquent : en un point de discontinuité (signal carré, créneau), la série de Fourier ne converge pas vers la valeur du signal mais vers la moyenne des limites à gauche et à droite — phénomène de Gibbs.',
      definitions: [
        { term: 'Harmonique de rang $n$', def: 'Composante sinusoïdale de fréquence $nf_0$ ($n$ fois la fréquence fondamentale). Le fondamental ($n=1$) a la fréquence $f_0 = 1/T$. L\'harmonique 3 a la fréquence $3f_0$, etc.' },
        { term: 'Spectre fréquentiel', def: 'Graphe de l\'amplitude $c_n = \\sqrt{a_n^2+b_n^2}$ en fonction du rang $n$ (ou de la fréquence $nf_0$). Il montre la "recette" du signal en termes de sinusoïdes.' },
        { term: 'Valeur moyenne $a_0$', def: 'Composante continue du signal : $a_0 = \\frac{1}{T}\\int_0^T f(t)\\,dt$. Un signal alternatif symétrique a $a_0 = 0$.' },
        { term: 'Phénomène de Gibbs', def: 'Au voisinage d\'une discontinuité, la série de Fourier tronquée présente un dépassement d\'environ $9\\%$ qui ne disparaît jamais, même en ajoutant des harmoniques.' }
      ],
      method: {
        title: 'Calculer les coefficients de Fourier',
        steps: [
          'Signal périodique de période $T$ (ou pulsation $\\omega_0=2\\pi/T$). <strong>Exemple :</strong> Signal de fréquence $f_0 = 50$ Hz → $T = 1/50 = 0{,}02$ s, $\\omega_0 = 2\\pi \\times 50 = 100\\pi$ rad/s.',
          '$a_0=\\frac{1}{T}\\int_0^T f(t)\\,dt$ (valeur moyenne). <strong>Exemple :</strong> Signal créneau $\\pm A$ symétrique → $a_0 = 0$ (aires positives et négatives s\'annulent).',
          '$a_n=\\frac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$ et $b_n=\\frac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$. <strong>Exemple :</strong> Signal créneau impair d\'amplitude $A$ → $a_n = 0$ (impair, pas de cosinus) et $b_n = 4A/(n\\pi)$ pour $n$ impair, $0$ pour $n$ pair.',
          'Développement : $f(t)=a_0+\\sum_{n=1}^{\\infty}(a_n\\cos(n\\omega_0 t)+b_n\\sin(n\\omega_0 t))$. <strong>Exemple :</strong> Créneau $\\pm 5$ V → $f(t) \\approx \\frac{20}{\\pi}\\sin(\\omega_0 t) + \\frac{20}{3\\pi}\\sin(3\\omega_0 t) + \\frac{20}{5\\pi}\\sin(5\\omega_0 t) + \\ldots$'
        ]
      },
      example: {
        statement: 'Un variateur de vitesse produit un signal de courant créneau de fréquence $f_0 = 50$ Hz et d\'amplitude $\\pm 10$ A (signal impair). Calculer l\'amplitude du fondamental, de la $3^e$ et de la $5^e$ harmonique. Quel pourcentage de la puissance totale est contenu dans le fondamental seul ?',
        steps: [
          'Signal créneau impair : $a_0 = 0$, $a_n = 0$ (pas de cosinus), $b_n = \\frac{4A}{n\\pi}$ pour $n$ impair.',
          'Fondamental ($n=1$) : $b_1 = \\frac{4 \\times 10}{\\pi} = \\frac{40}{\\pi} \\approx 12{,}73$ A.',
          '$3^e$ harmonique ($n=3$) : $b_3 = \\frac{40}{3\\pi} \\approx 4{,}24$ A (fréquence $150$ Hz).',
          '$5^e$ harmonique ($n=5$) : $b_5 = \\frac{40}{5\\pi} \\approx 2{,}55$ A (fréquence $250$ Hz).',
          'Puissance relative du fondamental (Parseval) : $b_1^2/(b_1^2+b_3^2+b_5^2+\\ldots) = (4/\\pi)^2 \\times \\frac{1}{\\sum 1/n^2} \\approx 81\\%$. Le fondamental porte $\\sim 81\\%$ de la puissance.'
        ],
        answer: 'Fondamental : $12{,}73$ A. Harmonique 3 : $4{,}24$ A. Harmonique 5 : $2{,}55$ A. Le fondamental porte environ $81\\%$ de la puissance totale.'
      },
      formulas: [
        '$a_0=\\dfrac{1}{T}\\int_0^T f(t)\\,dt$',
        '$a_n=\\dfrac{2}{T}\\int_0^T f(t)\\cos(n\\omega_0 t)\\,dt$',
        '$b_n=\\dfrac{2}{T}\\int_0^T f(t)\\sin(n\\omega_0 t)\\,dt$',
        'Théorème de Parseval : $\\frac{1}{T}\\int_0^T[f(t)]^2dt=a_0^2+\\frac{1}{2}\\sum(a_n^2+b_n^2)$'
      ],
      diagram: '<table style="width:100%;border-collapse:collapse;text-align:center;"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px;">Signal</th><th style="border:1px solid var(--border);padding:8px;">Parité</th><th style="border:1px solid var(--border);padding:8px;">Coefficients</th><th style="border:1px solid var(--border);padding:8px;">Harmoniques présentes</th></tr><tr><td style="border:1px solid var(--border);padding:8px;">Créneau symétrique</td><td style="border:1px solid var(--border);padding:8px;">Impair</td><td style="border:1px solid var(--border);padding:8px;">$a_n=0$, $b_n=\\frac{4A}{n\\pi}$</td><td style="border:1px solid var(--border);padding:8px;">Sinus impairs ($1, 3, 5, \\ldots$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Triangle symétrique</td><td style="border:1px solid var(--border);padding:8px;">Pair</td><td style="border:1px solid var(--border);padding:8px;">$b_n=0$, $a_n=\\frac{-8A}{n^2\\pi^2}$</td><td style="border:1px solid var(--border);padding:8px;">Cosinus impairs ($1, 3, 5, \\ldots$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px;">Dent de scie</td><td style="border:1px solid var(--border);padding:8px;">Impair</td><td style="border:1px solid var(--border);padding:8px;">$a_n=0$, $b_n=\\frac{2A}{n\\pi}(-1)^{n+1}$</td><td style="border:1px solid var(--border);padding:8px;">Tous les sinus ($1, 2, 3, \\ldots$)</td></tr></table>',
      recap: [
        'Tout signal périodique = composante continue ($a_0$) + somme infinie d\'harmoniques ($a_n\\cos + b_n\\sin$).',
        'Signal pair → seulement des cosinus ($b_n = 0$). Signal impair → seulement des sinus ($a_n = 0$).',
        'Le spectre du créneau décroît en $1/n$ (harmoniques impaires seulement). Celui du triangle en $1/n^2$ (convergence plus rapide).',
        'Aux points de discontinuité, la série converge vers la moyenne des limites à gauche et à droite.'
      ],
      piege: 'Si $f$ est paire ($f(-t)=f(t)$), tous les $b_n=0$ (sinus nuls). Si $f$ est impaire, tous les $a_n=0$. Exploiter la symétrie simplifie considérablement les calculs.'
    },
    quiz: [
      { q: 'Le coefficient $a_0$ d\'une série de Fourier représente :', options: ['L\'amplitude de la fréquence fondamentale', 'La valeur moyenne du signal', 'Le déphasage', 'La fréquence fondamentale'], answer: 1, correction: '$a_0=\\frac{1}{T}\\int_0^T f(t)dt$ est la valeur moyenne (composante continue) du signal.' },
      { q: 'Un signal carré fait un saut de $-1$ à $+1$ en $t=0$. La série de Fourier converge en $t=0$ vers :', options: ['$+1$ (valeur juste après le saut)', '$-1$ (valeur juste avant le saut)', '$0$ (moyenne des deux valeurs)', '$+\\infty$ (la série diverge)'], answer: 2, correction: 'Au point de discontinuité, la série de Fourier converge vers $\\frac{f(0^-)+f(0^+)}{2}=\\frac{-1+1}{2}=0$, pas vers la valeur du signal. C\'est le théorème de Dirichlet. Ce résultat surprend souvent : la série "hésite" entre les deux valeurs et prend leur moyenne exacte.' },
      { q: 'La $3^e$ harmonique d\'un signal de fréquence $f_0=50$ Hz a pour fréquence :', options: ['$50$ Hz', '$100$ Hz', '$150$ Hz', '$200$ Hz'], answer: 2, correction: 'La $n$-ième harmonique a fréquence $nf_0$. Ici $3\\times50=150$ Hz.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        const T = pick([1, 2, 4]);
        const A = rand(2, 5);
        return {
          statement: `Un signal créneau vaut $+${A}$ sur $[0;T/2]$ et $-${A}$ sur $[T/2;T]$ (période $T=${T}$ s). Calculer $a_0$ (valeur moyenne).`,
          answer: 0,
          tolerance: 0,
          unit: '',
          hint: `$a_0=\\frac{1}{T}\\left(\\int_0^{T/2}${A}\\,dt+\\int_{T/2}^T(-${A})\\,dt\\right)$`,
          solution: [
            `$a_0=\\frac{1}{${T}}\\left(${A}\\times\\frac{${T}}{2}+(-${A})\\times\\frac{${T}}{2}\\right)=\\frac{1}{${T}}\\times0=0$`,
            'Signal alternatif symétrique : valeur moyenne nulle.'
          ]
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
        '$f(t)=\\frac{\\pi}{2}-\\frac{4}{\\pi}\\left(\\cos t+\\frac{\\cos 3t}{9}+\\frac{\\cos 5t}{25}+\\cdots\\right)$.'
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
          statement: 'Le coefficient $a_0$ d\'une série de Fourier représente :',
          type: 'multiple-choice',
          options: ['L\'amplitude maximale du signal', 'La valeur moyenne du signal sur une période', 'La fréquence fondamentale', 'Le déphasage du fondamental'],
          answer: 1,
          points: 2,
          correction: '$a_0 = \\dfrac{1}{T}\\int_0^T f(t)\\,dt$ est la composante continue, c\'est-à-dire la valeur moyenne du signal.'
        },
        {
          statement: 'Un signal créneau vaut $+3$ sur $[0; T/2[$ et $-3$ sur $[T/2; T[$ avec $T = 2$ s. Calculer le coefficient $b_1$ sachant que $b_1 = \\dfrac{2}{T}\\int_0^T f(t)\\sin\\left(\\dfrac{2\\pi t}{T}\\right)dt = \\dfrac{12}{\\pi}$. Donner la valeur numérique arrondie à $0{,}01$.',
          type: 'numeric',
          answer: 3.82,
          tolerance: 0.02,
          unit: '',
          points: 3,
          correction: '$b_1 = \\dfrac{12}{\\pi} \\approx 3{,}82$. Pour un créneau d\'amplitude $A$, les coefficients sont $b_n = \\dfrac{4A}{n\\pi}$ pour $n$ impair et $b_n = 0$ pour $n$ pair. Ici $A = 3$, donc $b_1 = \\dfrac{4 \\times 3}{1 \\times \\pi} = \\dfrac{12}{\\pi} \\approx 3{,}82$.'
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
          statement: 'En un point de discontinuité $t_0$, la série de Fourier converge vers :',
          type: 'multiple-choice',
          options: ['$f(t_0^+)$ (limite à droite)', '$f(t_0^-)$ (limite à gauche)', '$\\dfrac{f(t_0^-) + f(t_0^+)}{2}$ (moyenne des limites)', 'La série diverge en ce point'],
          answer: 2,
          points: 2,
          correction: 'Théorème de Dirichlet : en un point de discontinuité, la série de Fourier converge vers la demi-somme des limites à gauche et à droite : $\\dfrac{f(t_0^-) + f(t_0^+)}{2}$.'
        }
      ]
    }
  }
);
