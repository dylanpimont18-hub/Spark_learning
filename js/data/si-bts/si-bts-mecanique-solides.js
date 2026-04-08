/* =========================================================
   Spark Learning – data/si-bts/si-bts-mecanique-solides.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-bts-mecanique-solides',
    level: 3, subject: 'si',
    icon: '🔩',
    title: 'Mécanique des Solides Rigides',
    subtitle: 'Torseurs, Chasles, CIR, PFD en translation et rotation',
    keywords: ['Cinématique', 'Dynamique', 'Torseur', 'Solide rigide', 'CIR'],
    physics: 'Les torseurs cinématiques et des actions mécaniques sont les outils fondamentaux pour analyser les robots industriels, les bras manipulateurs et les mécanismes de transmission dans les systèmes automatisés.',

    cours: {
      intro: 'La mécanique du solide rigide est le socle de l\'analyse des systèmes mécaniques industriels. Un solide rigide est un corps dont la distance entre deux points quelconques reste constante au cours du mouvement.<br/><br/>Le formalisme des <strong>torseurs</strong> unifie la description des vitesses et des efforts en un seul objet mathématique. Le torseur cinématique regroupe le vecteur rotation $\\vec{\\omega}$ et le vecteur vitesse $\\vec{V}(A)$ en un point $A$. Le torseur des actions mécaniques regroupe la résultante $\\vec{R}$ et le moment $\\vec{M}(A)$.<br/><br/>La <strong>relation de Chasles</strong> $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$ lie les vitesses de deux points d\'un même solide. Elle permet de calculer la vitesse de n\'importe quel point si l\'on connaît la vitesse d\'un point et le vecteur rotation.<br/><br/>Le <strong>Centre Instantané de Rotation (CIR)</strong> est le point du solide (ou de son prolongement) dont la vitesse est nulle à un instant donné. Tout mouvement plan peut être décrit comme une rotation instantanée autour du CIR. Sa position se détermine en traçant les perpendiculaires aux vecteurs vitesse de deux points du solide.<br/><br/>Le <strong>PFD</strong> relie actions mécaniques extérieures et accélération : $\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}_G$ (translation), $\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$ (rotation autour d\'un axe fixe).',
      definitions: [
        { term: 'Solide rigide', def: 'Corps idéal indéformable : $\\forall A, B \\in S$, $\\|\\vec{AB}\\| = \\text{cste}$. Modèle valable quand les déformations sont négligeables devant les dimensions.' },
        { term: 'Torseur cinématique', def: 'Champ de vecteurs décrivant le mouvement d\'un solide : $\\{\\mathcal{V}\\}_A = \\begin{Bmatrix} \\vec{\\omega} \\\\ \\vec{V}(A) \\end{Bmatrix}_A$. La résultante $\\vec{\\omega}$ est indépendante du point, le moment $\\vec{V}(A)$ en dépend via la relation de Chasles.' },
        { term: 'Torseur des actions mécaniques', def: 'Regroupe la résultante $\\vec{R}$ et le moment $\\vec{M}(A)$ : $\\{\\mathcal{T}\\}_A = \\begin{Bmatrix} \\vec{R} \\\\ \\vec{M}(A) \\end{Bmatrix}_A$. La formule de transport est $\\vec{M}(B) = \\vec{M}(A) + \\vec{BA} \\wedge \\vec{R}$.' },
        { term: 'Relation de Chasles', def: '$\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$. Lie les vitesses de deux points quelconques d\'un même solide. Le terme $\\vec{\\omega} \\wedge \\vec{AB}$ traduit la contribution de la rotation.' },
        { term: 'Centre Instantané de Rotation (CIR)', def: 'Point $I$ du plan tel que $\\vec{V}(I) = \\vec{0}$ à l\'instant considéré. Pour tout point $P$ du solide, $\\vec{V}(P) = \\vec{\\omega} \\wedge \\vec{IP}$, donc $\\|V(P)\\| = \\omega \\cdot IP$.' },
        { term: 'PFD (Principe Fondamental de la Dynamique)', def: 'Translation : $\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}_G$. Rotation autour d\'un axe fixe : $\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$, avec $J_{\\Delta}$ le moment d\'inertie et $\\alpha = \\mathrm{d}\\omega/\\mathrm{d}t$.' }
      ],
      method: {
        title: 'Appliquer le PFD à un solide en mouvement',
        steps: [
          '<strong>Isolation et torseurs</strong> : Isoler le solide et dresser le bilan des actions mécaniques extérieures (poids, liaisons, couples moteurs, frottements).<br/>Écrire chaque action sous forme de torseur au même point de réduction.<br/><strong>Exemple :</strong> Un volant d\'inertie soumis à un couple moteur $C_m$ et à un couple de frottement $C_f$.',
          '<strong>PFD en translation</strong> : Écrire le PFD en translation : $\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}_G$. Projeter sur les axes pour obtenir les équations scalaires.<br/><strong>Exemple :</strong> Chariot horizontal : $F_{\\text{motrice}} - F_{\\text{frottement}} = m \\cdot a$.',
          '<strong>PFD en rotation</strong> : Écrire le PFD en rotation : $\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$. Identifier $J$ et $\\alpha$.<br/><strong>Exemple :</strong> $C_m - C_f = J \\cdot \\alpha$, d\'où $\\alpha = (C_m - C_f)/J$.',
          '<strong>Cinématique multi-points</strong> : Utiliser la relation de Chasles pour relier les vitesses entre points du solide : $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$.<br/><strong>Exemple :</strong> Disque tournant à $\\omega = 10$ rad/s, point à $r = 0{,}3$ m du centre : $V = \\omega \\times r = 3$ m/s.'
        ]
      },
      example: {
        statement: 'Un volant d\'inertie ($J = 0{,}5$ kg·m², rayon $R = 0{,}2$ m) est entraîné par un couple moteur $C_m = 4$ N·m. Le couple de frottement vaut $C_f = 1$ N·m. Calculer l\'accélération angulaire, la vitesse angulaire après 2 s (départ arrêté) et la vitesse linéaire d\'un point de la périphérie.',
        steps: [
          'PFD en rotation : $C_m - C_f = J \\cdot \\alpha$.',
          '$\\alpha = (C_m - C_f) / J = (4 - 1) / 0{,}5 = 6$ rad/s².',
          'Vitesse angulaire après 2 s : $\\omega = \\alpha \\cdot t = 6 \\times 2 = 12$ rad/s.',
          'Vitesse linéaire en périphérie (Chasles) : $V = \\omega \\times R = 12 \\times 0{,}2 = 2{,}4$ m/s.'
        ],
        answer: '$\\alpha = 6$ rad/s², $\\omega(2\\text{s}) = 12$ rad/s, $V = 2{,}4$ m/s.'
      },
      formulas: [
        '$\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$ (Chasles)',
        '$\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}_G$ (PFD translation)',
        '$\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$ (PFD rotation)',
        '$V = \\omega \\times R$ (vitesse linéaire sur un cercle)',
        '$\\omega = \\alpha \\cdot t + \\omega_0$ (mouvement uniformément accéléré)',
        '$\\omega = 2\\pi n / 60$ (conversion tr/min → rad/s)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Type de torseur</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Résultante</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Moment en $A$</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Exemple</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Translation pure</td><td style="border:1px solid var(--border);padding:8px">$\\vec{\\omega} = \\vec{0}$</td><td style="border:1px solid var(--border);padding:8px">$\\vec{V}(A) = \\vec{V}_0$</td><td style="border:1px solid var(--border);padding:8px">Chariot sur rail</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Rotation pure (axe fixe)</td><td style="border:1px solid var(--border);padding:8px">$\\vec{\\omega} \\neq \\vec{0}$</td><td style="border:1px solid var(--border);padding:8px">$\\vec{V}(I) = \\vec{0}$ (CIR)</td><td style="border:1px solid var(--border);padding:8px">Roue, volant</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Mouvement hélicoïdal</td><td style="border:1px solid var(--border);padding:8px">$\\vec{\\omega} \\neq \\vec{0}$</td><td style="border:1px solid var(--border);padding:8px">$\\vec{V}(A) \\parallel \\vec{\\omega}$</td><td style="border:1px solid var(--border);padding:8px">Vis, hélice</td></tr></table>',
      recap: [
        'Le torseur cinématique regroupe $\\vec{\\omega}$ et $\\vec{V}(A)$ : il décrit complètement le mouvement d\'un solide.',
        'La relation de Chasles $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$ est la formule fondamentale de la cinématique du solide.',
        'Le CIR est le point de vitesse nulle : tout mouvement plan est une rotation instantanée autour du CIR.',
        'Le PFD en translation ($\\sum F = ma$) et en rotation ($\\sum M = J\\alpha$) sont les deux équations de la dynamique.',
        'Le moment d\'inertie $J$ est l\'analogue de la masse pour la rotation : plus $J$ est grand, plus le solide résiste à la mise en rotation.'
      ],
      piege: 'Ne pas confondre la vitesse angulaire $\\omega$ (en rad/s) et la fréquence de rotation $n$ (en tr/min). La conversion est $\\omega = 2\\pi n / 60$. Oublier cette conversion est l\'erreur la plus fréquente en mécanique des solides.'
    },

    quiz: [
      {
        q: 'La relation de Chasles (changement de point des vitesses) s\'écrit :',
        options: [
          '$\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$',
          '$\\vec{V}(B) = \\vec{V}(A) + m \\cdot \\vec{a}$',
          '$\\vec{V}(B) = \\vec{V}(A) \\times \\vec{\\omega}$',
          '$\\vec{V}(B) = \\vec{\\omega} \\cdot \\vec{AB}$'
        ],
        answer: 0,
        correction: 'La relation fondamentale est $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$. Le produit vectoriel $\\vec{\\omega} \\wedge \\vec{AB}$ traduit l\'effet de la rotation du solide sur la vitesse du point $B$. Attention : c\'est un produit <strong>vectoriel</strong> ($\\wedge$), pas un produit scalaire ($\\cdot$).'
      },
      {
        q: 'Un disque de rayon $R = 0{,}3$ m roule sans glisser sur un plan horizontal à $\\omega = 20$ rad/s. La vitesse de son centre $G$ vaut :',
        options: [
          '$V_G = 0$ m/s (le centre ne bouge pas)',
          '$V_G = \\omega / R = 66{,}7$ m/s',
          '$V_G = \\omega \\times R = 6$ m/s',
          '$V_G = 2\\omega R = 12$ m/s'
        ],
        answer: 2,
        correction: 'Le point de contact $I$ est le CIR (roulement sans glissement : $V(I) = 0$). Par Chasles : $V_G = \\omega \\times IG = \\omega \\times R = 20 \\times 0{,}3 = 6$ m/s. Le sommet du disque a, lui, une vitesse $V = 2\\omega R = 12$ m/s.'
      },
      {
        q: 'Le PFD en rotation autour d\'un axe fixe s\'écrit :',
        options: [
          '$\\sum F = m \\cdot a$',
          '$\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$',
          '$\\sum M_{\\Delta} = m \\cdot \\omega$',
          '$\\sum F = J \\cdot \\omega^2$'
        ],
        answer: 1,
        correction: 'Le PFD en rotation : $\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$, où $J_{\\Delta}$ est le moment d\'inertie et $\\alpha$ l\'accélération angulaire. C\'est l\'analogue en rotation de $\\sum F = m \\cdot a$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { desc: 'volant d\'inertie', obj: 'volant' },
          { desc: 'roue de machine', obj: 'roue' },
          { desc: 'disque de frein', obj: 'disque' }
        ]);
        const J = randFloat(0.2, 2.0, 1);
        const Cm = rand(3, 15);
        const Cf = rand(1, Math.max(1, Cm - 2));
        const alpha = parseFloat(((Cm - Cf) / J).toFixed(2));
        return {
          statement: `Un ${scenario.desc} a un moment d'inertie $J = ${String(J).replace('.', '{,')}$ kg·m². Il est soumis à un couple moteur $C_m = ${Cm}$ N·m et un couple de frottement $C_f = ${Cf}$ N·m. Calcule l'accélération angulaire $\\alpha$ (en rad/s², arrondi à $0{,}01$).`,
          answer: alpha,
          tolerance: 0.1,
          unit: 'rad/s²',
          hint: 'Applique le PFD en rotation : $C_m - C_f = J \\cdot \\alpha$, donc $\\alpha = (C_m - C_f) / J$.',
          solution: [
            'PFD en rotation : $C_m - C_f = J \\cdot \\alpha$',
            `$\\alpha = (C_m - C_f) / J = (${Cm} - ${Cf}) / ${String(J).replace('.', '{,')}$`,
            `$\\alpha = ${Cm - Cf} / ${String(J).replace('.', '{,')} = ${String(alpha).replace('.', '{,')}$ rad/s²`
          ]
        };
      }
    },

    probleme: {
      context: 'Un motoréducteur entraîne un tapis roulant industriel. Le moteur fournit un couple $C_m = 5$ N·m à la vitesse $n_m = 1400$ tr/min. Le réducteur a un rapport de réduction $r = 1/20$ et un rendement $\\eta_r = 0{,}90$. Le tambour d\'entraînement a un rayon $R = 0{,}15$ m et un moment d\'inertie $J = 0{,}6$ kg·m². Le couple de frottement sur l\'axe du tambour est $C_f = 1$ N·m.',
      tasks: [
        'Calculer le couple en sortie du réducteur : $C_{\\text{sortie}} = C_m \\times (1/r) \\times \\eta_r$ et la vitesse de sortie $\\omega_s = \\omega_m \\times r$.',
        'Appliquer le PFD en rotation au tambour pour trouver l\'accélération angulaire $\\alpha$ lors du démarrage.',
        'En déduire le temps nécessaire pour atteindre la vitesse de régime et la vitesse linéaire du tapis (relation de Chasles au bord du tambour).'
      ],
      solutions: [
        '$\\omega_m = 2\\pi \\times 1400 / 60 \\approx 146{,}6$ rad/s. $\\omega_s = 146{,}6 \\times (1/20) = 7{,}33$ rad/s. $C_{\\text{sortie}} = 5 \\times 20 \\times 0{,}90 = 90$ N·m.',
        'PFD rotation : $C_{\\text{sortie}} - C_f = J \\cdot \\alpha$. $\\alpha = (90 - 1) / 0{,}6 = 89 / 0{,}6 = 148{,}3$ rad/s².',
        'Temps pour atteindre $\\omega_s$ : $t = \\omega_s / \\alpha = 7{,}33 / 148{,}3 = 0{,}049$ s $\\approx 50$ ms. Vitesse du tapis (Chasles au bord) : $V = \\omega_s \\times R = 7{,}33 \\times 0{,}15 = 1{,}1$ m/s.'
      ],
      finalAnswer: '$C_{\\text{sortie}} = 90$ N·m, $\\omega_s = 7{,}33$ rad/s, $\\alpha = 148{,}3$ rad/s², $t \\approx 50$ ms, $V = 1{,}1$ m/s.'
    },

    evaluation: {
      title: 'Évaluation — Mécanique des Solides Rigides',
      duration: '20 min',
      questions: [
        {
          statement: 'Un volant d\'inertie ($J = 0{,}8$ kg·m²) est soumis à un couple résultant $C = 6$ N·m. Calculer l\'accélération angulaire $\\alpha$ (en rad/s²).',
          type: 'numeric',
          answer: 7.5,
          tolerance: 0.1,
          unit: 'rad/s²',
          points: 2,
          correction: '$\\alpha = C / J = 6 / 0{,}8 = 7{,}5$ rad/s². Le PFD en rotation donne directement $\\alpha = \\sum M / J$.'
        },
        {
          statement: 'Un moteur tourne à $n = 1500$ tr/min. Sa vitesse angulaire $\\omega$ en rad/s vaut (arrondi à l\'entier) :',
          type: 'numeric',
          answer: 157,
          tolerance: 1,
          unit: 'rad/s',
          points: 2,
          correction: '$\\omega = 2\\pi n / 60 = 2\\pi \\times 1500 / 60 = 50\\pi \\approx 157$ rad/s.'
        },
        {
          statement: 'Le Centre Instantané de Rotation (CIR) d\'un solide en mouvement plan est :',
          type: 'multiple-choice',
          options: [
            'Le centre de gravité du solide',
            'Le point du solide (ou de son prolongement) dont la vitesse est nulle',
            'Le point de vitesse maximale',
            'Le centre géométrique de la trajectoire'
          ],
          answer: 1,
          points: 3,
          correction: 'Le CIR est le point dont la vitesse instantanée est nulle. Tout mouvement plan peut être vu comme une rotation autour du CIR. On le trouve à l\'intersection des perpendiculaires aux vecteurs vitesse de deux points du solide.'
        },
        {
          statement: 'Un disque de rayon $R = 0{,}25$ m tourne à $\\omega = 40$ rad/s. La vitesse linéaire d\'un point de la périphérie (par Chasles, en prenant le centre comme référence) est :',
          type: 'numeric',
          answer: 10,
          tolerance: 0.1,
          unit: 'm/s',
          points: 3,
          correction: '$\\vec{V}(P) = \\vec{V}(O) + \\vec{\\omega} \\wedge \\vec{OP}$. Si le centre $O$ est fixe : $V(P) = \\omega \\times R = 40 \\times 0{,}25 = 10$ m/s.'
        }
      ]
    }
  });
