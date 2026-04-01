/* =========================================================
   Spark Learning – data/si-bts.js
   Modules BTS – Sciences de l'Ingénieur (8 modules)
   ========================================================= */

window.MODULES.push(

  /* -------------------------------------------------------
     1. Mécanique des solides rigides
     ------------------------------------------------------- */
  {
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
          'Isoler le solide et dresser le bilan des actions mécaniques extérieures (poids, liaisons, couples moteurs, frottements).<br/>Écrire chaque action sous forme de torseur au même point de réduction.<br/><strong>Exemple :</strong> Un volant d\'inertie soumis à un couple moteur $C_m$ et à un couple de frottement $C_f$.',
          'Écrire le PFD en translation : $\\sum \\vec{F}_{\\text{ext}} = m\\vec{a}_G$. Projeter sur les axes pour obtenir les équations scalaires.<br/><strong>Exemple :</strong> Chariot horizontal : $F_{\\text{motrice}} - F_{\\text{frottement}} = m \\cdot a$.',
          'Écrire le PFD en rotation : $\\sum M_{\\Delta} = J_{\\Delta} \\cdot \\alpha$. Identifier $J$ et $\\alpha$.<br/><strong>Exemple :</strong> $C_m - C_f = J \\cdot \\alpha$, d\'où $\\alpha = (C_m - C_f)/J$.',
          'Utiliser la relation de Chasles pour relier les vitesses entre points du solide : $\\vec{V}(B) = \\vec{V}(A) + \\vec{\\omega} \\wedge \\vec{AB}$.<br/><strong>Exemple :</strong> Disque tournant à $\\omega = 10$ rad/s, point à $r = 0{,}3$ m du centre : $V = \\omega \\times r = 3$ m/s.'
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
  },

  /* -------------------------------------------------------
     2. Résistance des matériaux avancée
     ------------------------------------------------------- */
  {
    id: 'si-bts-rdm-avancee',
    level: 3, subject: 'si',
    icon: '🏗️',
    title: 'Résistance des Matériaux Avancée',
    subtitle: 'Flexion, cisaillement, torsion, Von Mises, moments quadratiques',
    keywords: ['Flexion', 'Cisaillement', 'Torsion', 'Contrainte équivalente', 'Von Mises'],
    physics: 'La RDM avancée est utilisée pour dimensionner les poutres de structures métalliques, les arbres de transmission de machines tournantes et les châssis de véhicules soumis à des sollicitations combinées.',

    cours: {
      intro: 'La Résistance des Matériaux (RDM) permet de vérifier qu\'une pièce mécanique résiste aux sollicitations sans se rompre ni se déformer excessivement.<br/><br/>En BTS, on étudie quatre types de sollicitations : la <strong>traction/compression</strong> ($\\sigma = N/S$), la <strong>flexion</strong> ($\\sigma = M_f \\cdot y / I_{Gz}$), le <strong>cisaillement</strong> ($\\tau = T/S$) et la <strong>torsion</strong> ($\\tau_t = M_t \\cdot r / I_0$).<br/><br/>Le <strong>moment quadratique</strong> $I_{Gz}$ caractérise la résistance géométrique de la section à la flexion. Pour une section rectangulaire : $I_{Gz} = bh^3/12$. Pour une section circulaire pleine de diamètre $d$ : $I_{Gz} = \\pi d^4/64$. Le moment quadratique polaire $I_0$ intervient en torsion : $I_0 = \\pi d^4/32$ pour un cercle plein.<br/><br/>Lorsqu\'une pièce subit simultanément flexion et torsion (cas fréquent : arbre de transmission), on utilise le <strong>critère de Von Mises</strong> : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Le dimensionnement impose $\\sigma_{\\text{VM}} \\leq R_e / s$, avec $s$ le coefficient de sécurité.<br/><br/>Données matériaux courantes : acier S235 ($R_e = 235$ MPa), acier S355 ($R_e = 355$ MPa), aluminium 6061-T6 ($R_e = 275$ MPa), inox 304 ($R_e = 205$ MPa).',
      definitions: [
        { term: 'Contrainte normale de traction $\\sigma$', def: 'Contrainte due à un effort normal $N$ : $\\sigma = N / S$. En flexion, $\\sigma = M_f \\cdot y / I_{Gz}$, maximale aux fibres extrêmes ($y = y_{\\max}$).' },
        { term: 'Contrainte de cisaillement $\\tau$', def: 'Contrainte tangentielle due à l\'effort tranchant $T$ : $\\tau = T / S$ (formule simplifiée). Maximale à l\'axe neutre.' },
        { term: 'Contrainte de torsion $\\tau_t$', def: 'Contrainte tangentielle due au moment de torsion $M_t$ : $\\tau_t = M_t \\cdot r / I_0$, maximale à la périphérie ($r = r_{\\max}$).' },
        { term: 'Moment quadratique $I_{Gz}$', def: 'Caractérise la résistance géométrique à la flexion. Rectangle : $I_{Gz} = bh^3/12$. Cercle plein : $I_{Gz} = \\pi d^4/64$. Tube : $I_{Gz} = \\pi(D^4 - d^4)/64$. Unité : m⁴.' },
        { term: 'Contrainte de Von Mises $\\sigma_{\\text{VM}}$', def: 'Contrainte équivalente uniaxiale : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Provient du critère d\'énergie de distorsion. La limite en cisaillement pur est $\\tau_e = R_e / \\sqrt{3} \\approx 0{,}577\\,R_e$.' }
      ],
      method: {
        title: 'Dimensionner une pièce en sollicitations combinées',
        steps: [
          'Identifier les sollicitations et dresser les diagrammes ($N$, $T$, $M_f$, $M_t$).<br/>Repérer la section la plus sollicitée (moment fléchissant maximal).<br/><strong>Exemple :</strong> Arbre de transmission soumis à $M_f = 200$ N·m et $M_t = 300$ N·m.',
          'Calculer $\\sigma_{\\max}$ en flexion. Pour une section circulaire pleine de diamètre $d$ :<br/>$I_{Gz} = \\pi d^4 / 64$, $y_{\\max} = d/2$, donc $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$.<br/><strong>Exemple :</strong> $d = 50$ mm → $\\sigma_{\\max} = 32 \\times 200 / (\\pi \\times 0{,}05^3) = 16{,}3$ MPa.',
          'Calculer $\\tau_{\\max}$ en torsion. Pour une section circulaire pleine :<br/>$I_0 = \\pi d^4 / 32$, $r_{\\max} = d/2$, donc $\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$.<br/><strong>Exemple :</strong> $\\tau_{\\max} = 16 \\times 300 / (\\pi \\times 0{,}05^3) = 12{,}2$ MPa.',
          'Calculer Von Mises : $\\sigma_{\\text{VM}} = \\sqrt{\\sigma_{\\max}^2 + 3\\tau_{\\max}^2}$ et vérifier $\\sigma_{\\text{VM}} \\leq R_e / s$.<br/><strong>Exemple :</strong> $\\sigma_{\\text{VM}} = \\sqrt{16{,}3^2 + 3 \\times 12{,}2^2} \\approx 25{,}6$ MPa. Avec $R_e = 235$ MPa et $s = 2$ : $\\sigma_{\\text{adm}} = 117{,}5$ MPa. OK.'
        ]
      },
      example: {
        statement: 'Un arbre circulaire plein de diamètre $d = 40$ mm en acier S235 ($R_e = 235$ MPa, $s = 2$) subit $M_f = 150$ N·m et $M_t = 250$ N·m. Vérifier la résistance.',
        steps: [
          '$\\sigma_{\\max} = 32 M_f / (\\pi d^3) = 32 \\times 150 / (\\pi \\times 0{,}04^3) = 4800 / (2{,}011 \\times 10^{-4}) = 23{,}9$ MPa.',
          '$\\tau_{\\max} = 16 M_t / (\\pi d^3) = 16 \\times 250 / (\\pi \\times 0{,}04^3) = 4000 / (2{,}011 \\times 10^{-4}) = 19{,}9$ MPa.',
          '$\\sigma_{\\text{VM}} = \\sqrt{23{,}9^2 + 3 \\times 19{,}9^2} = \\sqrt{571 + 1188} = \\sqrt{1759} = 41{,}9$ MPa.',
          '$\\sigma_{\\text{adm}} = R_e / s = 235 / 2 = 117{,}5$ MPa. $41{,}9 < 117{,}5$ : l\'arbre résiste.'
        ],
        answer: '$\\sigma_{\\text{VM}} \\approx 41{,}9$ MPa $< \\sigma_{\\text{adm}} = 117{,}5$ MPa. L\'arbre est correctement dimensionné.'
      },
      formulas: [
        '$\\sigma = \\dfrac{N}{S}$ (traction/compression)',
        '$\\sigma = \\dfrac{M_f \\cdot y}{I_{Gz}}$ (flexion)',
        '$\\tau = \\dfrac{T}{S}$ (cisaillement simplifié)',
        '$\\tau_t = \\dfrac{M_t \\cdot r}{I_0}$ (torsion)',
        '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$ (Von Mises)',
        '$\\sigma_{\\text{VM}} \\leq \\dfrac{R_e}{s}$ (critère de dimensionnement)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Sollicitation</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Formule de contrainte</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Section circulaire pleine ($d$)</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Localisation du max</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Traction / Compression</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = N / S$</td><td style="border:1px solid var(--border);padding:8px">$S = \\pi d^2 / 4$</td><td style="border:1px solid var(--border);padding:8px">Uniforme</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Flexion</td><td style="border:1px solid var(--border);padding:8px">$\\sigma = M_f \\cdot y / I_{Gz}$</td><td style="border:1px solid var(--border);padding:8px">$\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$</td><td style="border:1px solid var(--border);padding:8px">Fibres extrêmes</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Cisaillement</td><td style="border:1px solid var(--border);padding:8px">$\\tau = T / S$</td><td style="border:1px solid var(--border);padding:8px">$S = \\pi d^2 / 4$</td><td style="border:1px solid var(--border);padding:8px">Axe neutre</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Torsion</td><td style="border:1px solid var(--border);padding:8px">$\\tau_t = M_t \\cdot r / I_0$</td><td style="border:1px solid var(--border);padding:8px">$\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$</td><td style="border:1px solid var(--border);padding:8px">Périphérie</td></tr></table>',
      recap: [
        'La flexion crée des contraintes normales $\\sigma$ maximales aux fibres extrêmes, nulles à l\'axe neutre.',
        'Le cisaillement crée des contraintes tangentielles $\\tau$ maximales à l\'axe neutre.',
        'La torsion crée des contraintes tangentielles $\\tau_t$ maximales à la périphérie de la section.',
        'Von Mises $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$ combine $\\sigma$ et $\\tau$ en une valeur comparable à $R_e$.',
        'Le coefficient de sécurité $s$ est imposé par les normes ($s = 2$ statique, $s = 3$ à $5$ en fatigue).'
      ],
      piege: 'Attention aux unités ! Les moments sont en N·m, les contraintes en Pa (ou MPa). $1$ MPa $= 10^6$ Pa $= 1$ N/mm². La confusion m / mm est la source d\'erreur la plus courante. Pensez aussi à la cohérence : si $d$ est en mm, utilisez $d^3$ en mm³ et les moments en N·mm.'
    },

    quiz: [
      {
        q: 'La contrainte de flexion maximale dans une poutre s\'écrit :',
        options: [
          '$\\sigma_{\\max} = M_f \\cdot y_{\\max} / I_{Gz}$',
          '$\\sigma_{\\max} = T / S$',
          '$\\sigma_{\\max} = M_t \\cdot r / I_0$',
          '$\\sigma_{\\max} = F / S$'
        ],
        answer: 0,
        correction: 'La contrainte de flexion est $\\sigma = M_f \\cdot y / I_{Gz}$. Elle est maximale quand $y = y_{\\max}$, c\'est-à-dire aux fibres les plus éloignées de l\'axe neutre. Pour un cercle plein : $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$.'
      },
      {
        q: 'La contrainte équivalente de Von Mises combine $\\sigma$ et $\\tau$ par :',
        options: [
          '$\\sigma_{\\text{VM}} = \\sigma + \\tau$',
          '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$',
          '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + \\tau^2}$',
          '$\\sigma_{\\text{VM}} = \\sigma \\times \\tau$'
        ],
        answer: 1,
        correction: 'Le critère de Von Mises est $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. Le facteur 3 provient du critère d\'énergie de distorsion : le cisaillement est plus « nocif » que la traction pure à intensité égale. La limite élastique en cisaillement pur est $\\tau_e = R_e / \\sqrt{3} \\approx 0{,}577\\,R_e$.'
      },
      {
        q: 'Le moment quadratique d\'une section circulaire pleine de diamètre $d$ en flexion est :',
        options: [
          '$I_{Gz} = \\pi d^4 / 64$',
          '$I_{Gz} = \\pi d^4 / 32$',
          '$I_{Gz} = \\pi d^2 / 4$',
          '$I_{Gz} = bh^3 / 12$'
        ],
        answer: 0,
        correction: '$I_{Gz} = \\pi d^4 / 64$ pour la flexion d\'une section circulaire pleine. En torsion, le moment quadratique polaire est $I_0 = \\pi d^4 / 32 = 2\\,I_{Gz}$. La formule $bh^3/12$ s\'applique à une section rectangulaire.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { mat: 'acier S235', Re: 235 },
          { mat: 'acier S355', Re: 355 },
          { mat: 'aluminium 6061-T6', Re: 275 }
        ]);
        const sigma = rand(40, 150);
        const tau = rand(10, 70);
        const vm = parseFloat(Math.sqrt(sigma * sigma + 3 * tau * tau).toFixed(1));
        return {
          statement: `Une pièce en ${scenario.mat} ($R_e = ${scenario.Re}$ MPa) subit une contrainte de flexion $\\sigma = ${sigma}$ MPa et une contrainte de cisaillement $\\tau = ${tau}$ MPa. Calcule la contrainte de Von Mises $\\sigma_{\\text{VM}}$ (en MPa, arrondi à $0{,}1$).`,
          answer: vm,
          tolerance: 0.5,
          unit: 'MPa',
          hint: 'La contrainte de Von Mises se calcule par $\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$. N\'oublie pas le facteur 3 devant $\\tau^2$ !',
          solution: [
            '$\\sigma_{\\text{VM}} = \\sqrt{\\sigma^2 + 3\\tau^2}$',
            `$= \\sqrt{${sigma}^2 + 3 \\times ${tau}^2}$`,
            `$= \\sqrt{${sigma * sigma} + ${3 * tau * tau}} = \\sqrt{${sigma * sigma + 3 * tau * tau}}$`,
            `$\\sigma_{\\text{VM}} \\approx ${String(vm).replace('.', '{,')}$ MPa`,
            `Comparaison : $\\sigma_{\\text{adm}} = R_e / s = ${scenario.Re} / 2 = ${scenario.Re / 2}$ MPa (avec $s = 2$). ${vm <= scenario.Re / 2 ? 'La pièce résiste.' : 'La pièce ne résiste pas : il faut augmenter la section.'}`
          ]
        };
      }
    },

    probleme: {
      context: 'Un arbre de transmission en acier S235 ($R_e = 235$ MPa, coefficient de sécurité $s = 2$) de section circulaire pleine de diamètre $d = 50$ mm est soumis simultanément à un moment fléchissant $M_f = 400$ N·m et un moment de torsion $M_t = 600$ N·m.',
      tasks: [
        'Calculer la contrainte de flexion maximale $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$ (en MPa).',
        'Calculer la contrainte de torsion maximale $\\tau_{\\max} = 16\\,M_t / (\\pi d^3)$ (en MPa).',
        'Calculer la contrainte de Von Mises $\\sigma_{\\text{VM}}$ et vérifier le dimensionnement ($\\sigma_{\\text{VM}} \\leq R_e / s$).'
      ],
      solutions: [
        '$\\sigma_{\\max} = 32 \\times 400 / (\\pi \\times 0{,}05^3) = 12\\,800 / (3{,}927 \\times 10^{-4}) \\approx 32{,}6$ MPa.',
        '$\\tau_{\\max} = 16 \\times 600 / (\\pi \\times 0{,}05^3) = 9\\,600 / (3{,}927 \\times 10^{-4}) \\approx 24{,}4$ MPa.',
        '$\\sigma_{\\text{VM}} = \\sqrt{32{,}6^2 + 3 \\times 24{,}4^2} = \\sqrt{1063 + 1786} = \\sqrt{2849} \\approx 53{,}4$ MPa. Admissible : $R_e / s = 235 / 2 = 117{,}5$ MPa. $53{,}4 < 117{,}5$ : l\'arbre résiste avec un coefficient de sécurité effectif de $235/53{,}4 \\approx 4{,}4$.'
      ],
      finalAnswer: '$\\sigma_{\\text{VM}} \\approx 53{,}4$ MPa $< 117{,}5$ MPa : l\'arbre est correctement dimensionné.'
    },

    evaluation: {
      title: 'Évaluation — RDM Avancée',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer la contrainte de Von Mises pour $\\sigma = 100$ MPa et $\\tau = 40$ MPa (arrondi à l\'entier).',
          type: 'numeric',
          answer: 119,
          tolerance: 1,
          unit: 'MPa',
          points: 2,
          correction: '$\\sigma_{\\text{VM}} = \\sqrt{100^2 + 3 \\times 40^2} = \\sqrt{10000 + 4800} = \\sqrt{14800} \\approx 121{,}7$ MPa. (Arrondi : $122$ MPa.)'
        },
        {
          statement: 'En flexion simple, la contrainte normale est maximale :',
          type: 'multiple-choice',
          options: [
            'À l\'axe neutre',
            'Aux fibres extrêmes (les plus éloignées de l\'axe neutre)',
            'Au centre de la section',
            'Elle est uniforme dans toute la section'
          ],
          answer: 1,
          points: 2,
          correction: 'La contrainte $\\sigma = M_f \\cdot y / I_{Gz}$ est proportionnelle à $y$. Elle est maximale aux fibres extrêmes ($y = y_{\\max}$) et nulle à l\'axe neutre ($y = 0$).'
        },
        {
          statement: 'Un arbre circulaire plein de $d = 60$ mm subit $M_f = 500$ N·m. Calculer $\\sigma_{\\max} = 32\\,M_f / (\\pi d^3)$ (en MPa, arrondi à l\'entier).',
          type: 'numeric',
          answer: 24,
          tolerance: 1,
          unit: 'MPa',
          points: 3,
          correction: '$\\sigma_{\\max} = 32 \\times 500 / (\\pi \\times 0{,}06^3) = 16000 / (6{,}786 \\times 10^{-4}) \\approx 23{,}6$ MPa $\\approx 24$ MPa.'
        },
        {
          statement: 'En acier S235 ($R_e = 235$ MPa), la limite élastique en cisaillement pur (Von Mises) est $\\tau_e = R_e / \\sqrt{3}$ (arrondi à l\'entier, en MPa) :',
          type: 'numeric',
          answer: 136,
          tolerance: 1,
          unit: 'MPa',
          points: 3,
          correction: '$\\tau_e = R_e / \\sqrt{3} = 235 / 1{,}732 \\approx 135{,}7$ MPa $\\approx 136$ MPa. C\'est la valeur pour laquelle $\\sigma_{\\text{VM}} = \\sqrt{0 + 3 \\times 136^2} = 235$ MPa.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     3. Hydraulique et pneumatique
     ------------------------------------------------------- */
  {
    id: 'si-bts-hydraulique',
    level: 3, subject: 'si',
    icon: '💧',
    title: 'Hydraulique et Pneumatique',
    subtitle: 'Pascal, vérins, débits, pertes de charge',
    keywords: ['Pression', 'Débit', 'Vérin', 'Pompe', 'Pascal', 'Pertes de charge'],
    physics: 'Les systèmes hydrauliques et pneumatiques sont omniprésents dans l\'industrie : presses hydrauliques, bras d\'engins de chantier, freins, suspensions actives, préhenseurs pneumatiques et robots de production.',

    cours: {
      intro: 'L\'hydraulique et la pneumatique utilisent des fluides (huile ou air comprimé) pour transmettre de l\'énergie mécanique.<br/><br/>Le <strong>théorème de Pascal</strong> affirme que toute variation de pression en un point d\'un fluide incompressible au repos se transmet intégralement à tous les points du fluide. C\'est le principe fondamental des systèmes hydrauliques.<br/><br/>Un <strong>vérin hydraulique</strong> convertit la pression en force linéaire. En poussée : $F = P \\times S_{\\text{piston}}$ avec $S = \\pi D^2/4$. En rétraction : la surface utile est la surface annulaire $S_{\\text{ann}} = \\pi(D^2 - d^2)/4$ (on soustrait la tige), donc la force est plus faible.<br/><br/>La <strong>conservation du débit</strong> (équation de continuité) : $Q = S \\times v$ lie la section, la vitesse du fluide et le volume déplacé. Le débit de la pompe fixe la vitesse du vérin : $v = Q / S$.<br/><br/>La <strong>puissance hydraulique</strong> est $P_h = p \\times Q$ (pression $\\times$ débit). Les <strong>pertes de charge</strong> régulières dans une conduite sont données par $\\Delta P = \\lambda \\cdot (L/D) \\cdot (\\rho v^2 / 2)$, où $\\lambda$ est le coefficient de frottement, $L$ la longueur, $D$ le diamètre intérieur. Elles réduisent la pression disponible au vérin.',
      definitions: [
        { term: 'Pression $P$', def: 'Force par unité de surface : $P = F/S$, en Pascal (Pa). 1 bar $= 10^5$ Pa. Hydraulique industrielle : 100 à 350 bars. Pneumatique : 4 à 10 bars.' },
        { term: 'Débit volumique $Q$', def: 'Volume de fluide traversant une section par unité de temps : $Q = S \\times v$ (m³/s ou L/min). En pratique : 1 L/min $= 1{,}667 \\times 10^{-5}$ m³/s.' },
        { term: 'Théorème de Pascal', def: 'Toute variation de pression appliquée en un point d\'un fluide incompressible au repos se transmet intégralement et instantanément à tous les points du fluide.' },
        { term: 'Puissance hydraulique', def: '$P_h = p \\times Q$ (en W), avec $p$ en Pa et $Q$ en m³/s. Également : $P_h = F \\times v$ (force $\\times$ vitesse du vérin).' },
        { term: 'Pertes de charge régulières', def: '$\\Delta P = \\lambda \\cdot (L/D) \\cdot (\\rho v^2 / 2)$, avec $\\lambda$ coefficient de frottement (Moody), $L$ longueur (m), $D$ diamètre intérieur (m), $\\rho$ masse volumique (kg/m³), $v$ vitesse (m/s).' }
      ],
      method: {
        title: 'Calculer la force et la vitesse d\'un vérin hydraulique',
        steps: [
          'Identifier la pression $P$ et le diamètre du piston $D$. Calculer la section : $S = \\pi D^2 / 4$.<br/><strong>Exemple :</strong> $P = 150$ bar, $D = 80$ mm → $S = \\pi \\times 0{,}08^2 / 4 = 5{,}027 \\times 10^{-3}$ m².',
          'Force de poussée : $F = P \\times S$. Convertir la pression en Pa : $150$ bar $= 150 \\times 10^5$ Pa.<br/><strong>Exemple :</strong> $F = 1{,}5 \\times 10^7 \\times 5{,}027 \\times 10^{-3} = 75{,}4$ kN.',
          'En rétraction, soustraire la section de la tige : $S_{\\text{ann}} = \\pi(D^2 - d^2)/4$.<br/><strong>Exemple :</strong> Tige $d = 40$ mm → $S_{\\text{ann}} = \\pi(0{,}08^2 - 0{,}04^2)/4 = 3{,}77 \\times 10^{-3}$ m² → $F_{\\text{ret}} = 56{,}5$ kN.',
          'Vitesse du vérin : $v = Q / S$, avec $Q$ le débit de la pompe (en m³/s).<br/><strong>Exemple :</strong> $Q = 15$ L/min $= 2{,}5 \\times 10^{-4}$ m³/s → $v = 2{,}5 \\times 10^{-4} / 5{,}027 \\times 10^{-3} = 0{,}050$ m/s $= 50$ mm/s.'
        ]
      },
      example: {
        statement: 'Un vérin hydraulique double effet a un piston de diamètre $D = 60$ mm et une tige de diamètre $d = 30$ mm. Pression : $P = 200$ bar. Calculer les forces de poussée et de rétraction.',
        steps: [
          '$S_{\\text{piston}} = \\pi \\times 0{,}06^2 / 4 = 2{,}827 \\times 10^{-3}$ m².',
          '$P = 200$ bar $= 2 \\times 10^7$ Pa.',
          'Poussée : $F = 2 \\times 10^7 \\times 2{,}827 \\times 10^{-3} = 56{,}5$ kN.',
          '$S_{\\text{ann}} = \\pi(0{,}06^2 - 0{,}03^2)/4 = 2{,}12 \\times 10^{-3}$ m².',
          'Rétraction : $F_{\\text{ret}} = 2 \\times 10^7 \\times 2{,}12 \\times 10^{-3} = 42{,}4$ kN.',
          'Rapport $F_{\\text{ret}} / F = 42{,}4 / 56{,}5 = 75\\%$ (la rétraction donne 75% de la poussée).'
        ],
        answer: '$F_{\\text{poussée}} \\approx 56{,}5$ kN, $F_{\\text{rétraction}} \\approx 42{,}4$ kN.'
      },
      formulas: [
        '$P = \\dfrac{F}{S}$ (pression)',
        '$F = P \\times S$ (force du vérin)',
        '$S_{\\text{ann}} = \\dfrac{\\pi(D^2 - d^2)}{4}$ (surface annulaire)',
        '$Q = S \\times v$ (conservation du débit)',
        '$P_h = p \\times Q$ (puissance hydraulique)',
        '$\\Delta P = \\lambda \\cdot \\dfrac{L}{D} \\cdot \\dfrac{\\rho v^2}{2}$ (pertes de charge)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Critère</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Hydraulique (huile)</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Pneumatique (air)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Fluide</td><td style="border:1px solid var(--border);padding:8px">Huile minérale (incompressible)</td><td style="border:1px solid var(--border);padding:8px">Air comprimé (compressible)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Pression usuelle</td><td style="border:1px solid var(--border);padding:8px">100 à 350 bars</td><td style="border:1px solid var(--border);padding:8px">4 à 10 bars</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Forces obtenues</td><td style="border:1px solid var(--border);padding:8px">Très élevées (centaines de kN)</td><td style="border:1px solid var(--border);padding:8px">Modérées (centaines de N)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Vitesse</td><td style="border:1px solid var(--border);padding:8px">Contrôlable finement</td><td style="border:1px solid var(--border);padding:8px">Rapide, moins précise</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Avantages</td><td style="border:1px solid var(--border);padding:8px">Puissance volumique élevée, rigidité</td><td style="border:1px solid var(--border);padding:8px">Propre, simple, peu coûteux</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Inconvénients</td><td style="border:1px solid var(--border);padding:8px">Fuites, entretien, pollution</td><td style="border:1px solid var(--border);padding:8px">Faible force, compressibilité</td></tr></table>',
      recap: [
        'Le théorème de Pascal est le fondement : la pression se transmet intégralement dans un fluide incompressible au repos.',
        'Force du vérin en poussée : $F = P \\times S$. En rétraction : $F = P \\times S_{\\text{ann}}$ (toujours inférieure).',
        'Le débit fixe la vitesse du vérin : $v = Q / S$.',
        'La puissance hydraulique est $P_h = p \\times Q$.',
        'Les pertes de charge réduisent la pression utile : elles dépendent de la longueur, du diamètre et de la vitesse du fluide.'
      ],
      piege: 'Attention à la distinction poussée / rétraction ! En poussée : $S = \\pi D^2/4$. En rétraction : $S_{\\text{ann}} = \\pi(D^2 - d^2)/4$. La force de traction est toujours inférieure. De plus, 1 bar $= 10^5$ Pa (pas $10^3$ !) et il faut convertir L/min en m³/s : diviser par $60\\,000$.'
    },

    quiz: [
      {
        q: 'Un vérin de diamètre $D = 100$ mm et de tige $d = 50$ mm : quel est le rapport $F_{\\text{rétraction}} / F_{\\text{poussée}}$ ?',
        options: [
          '$50\\%$',
          '$75\\%$',
          '$25\\%$',
          '$100\\%$ (les forces sont égales)'
        ],
        answer: 1,
        correction: '$S_{\\text{ann}} / S_{\\text{piston}} = (D^2 - d^2) / D^2 = (100^2 - 50^2) / 100^2 = 7500/10000 = 75\\%$. La rétraction donne 75% de la force de poussée.'
      },
      {
        q: 'La puissance hydraulique s\'exprime par :',
        options: [
          '$P_h = F \\times S$',
          '$P_h = p \\times Q$',
          '$P_h = F / v$',
          '$P_h = Q / S$'
        ],
        answer: 1,
        correction: '$P_h = p \\times Q$ (pression $\\times$ débit). En W si $p$ en Pa et $Q$ en m³/s. Équivalent à $P_h = F \\times v$ (force du vérin $\\times$ vitesse).'
      },
      {
        q: '1 bar correspond à :',
        options: [
          '$10^3$ Pa',
          '$10^4$ Pa',
          '$10^5$ Pa',
          '$10^6$ Pa'
        ],
        answer: 2,
        correction: '1 bar $= 10^5$ Pa $= 100$ kPa $\\approx$ pression atmosphérique. En hydraulique industrielle, on travaille entre 100 et 350 bars, soit $10^7$ à $3{,}5 \\times 10^7$ Pa.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { desc: 'presse hydraulique', usage: 'de pressage' },
          { desc: 'vérin de levage', usage: 'de levage' },
          { desc: 'vérin de serrage', usage: 'de serrage' }
        ]);
        const D_mm = rand(40, 120);
        const P_bar = rand(80, 300);
        const D_m = D_mm / 1000;
        const S = Math.PI * D_m * D_m / 4;
        const P_Pa = P_bar * 1e5;
        const F = P_Pa * S;
        const F_kN = parseFloat((F / 1000).toFixed(1));
        return {
          statement: `Un ${scenario.desc} a un piston de diamètre $D = ${D_mm}$ mm et est alimenté à $P = ${P_bar}$ bar. Calcule la force ${scenario.usage} en poussée (en kN, arrondi à $0{,}1$ kN).`,
          answer: F_kN,
          tolerance: 0.5,
          unit: 'kN',
          hint: 'Calcule la section $S = \\pi D^2 / 4$ (en m²), convertis la pression en Pa ($1$ bar $= 10^5$ Pa), puis applique $F = P \\times S$.',
          solution: [
            `$D = ${D_mm}$ mm $= ${String(D_m).replace('.', '{,')}$ m`,
            `$S = \\pi D^2 / 4 = \\pi \\times ${String(D_m).replace('.', '{,')}^2 / 4 \\approx ${String(parseFloat(S.toFixed(6))).replace('.', '{,')}$ m²`,
            `$P = ${P_bar}$ bar $= ${P_bar} \\times 10^5$ Pa`,
            `$F = P \\times S \\approx ${String(F_kN).replace('.', '{,')}$ kN`
          ]
        };
      }
    },

    probleme: {
      context: 'Une presse hydraulique industrielle est alimentée par une pompe délivrant un débit $Q = 15$ L/min à une pression $P = 250$ bar. Le vérin a un piston de diamètre $D = 100$ mm et une tige de diamètre $d = 50$ mm. Les pertes de charge dans le circuit sont estimées à $\\Delta P = 10$ bar.',
      tasks: [
        'Calculer la force de poussée du vérin en tenant compte des pertes de charge ($P_{\\text{utile}} = P - \\Delta P$).',
        'Calculer la vitesse de descente du piston (en mm/s) et la vitesse de remontée (rétraction).',
        'Calculer la puissance hydraulique fournie par la pompe et la puissance perdue par les pertes de charge.'
      ],
      solutions: [
        '$S_{\\text{piston}} = \\pi \\times 0{,}1^2 / 4 = 7{,}854 \\times 10^{-3}$ m². $P_{\\text{utile}} = 250 - 10 = 240$ bar $= 2{,}4 \\times 10^7$ Pa. $F = 2{,}4 \\times 10^7 \\times 7{,}854 \\times 10^{-3} = 188{,}5$ kN.',
        '$Q = 15 / 60000 = 2{,}5 \\times 10^{-4}$ m³/s. Descente : $v = Q / S_{\\text{piston}} = 2{,}5 \\times 10^{-4} / 7{,}854 \\times 10^{-3} = 0{,}0318$ m/s $= 31{,}8$ mm/s. $S_{\\text{ann}} = \\pi(0{,}1^2 - 0{,}05^2)/4 = 5{,}89 \\times 10^{-3}$ m². Remontée : $v_{\\text{ret}} = 2{,}5 \\times 10^{-4} / 5{,}89 \\times 10^{-3} = 0{,}0424$ m/s $= 42{,}4$ mm/s (plus rapide car section plus petite).',
        '$P_{\\text{pompe}} = p \\times Q = 250 \\times 10^5 \\times 2{,}5 \\times 10^{-4} = 6250$ W $= 6{,}25$ kW. $P_{\\text{pertes}} = \\Delta P \\times Q = 10 \\times 10^5 \\times 2{,}5 \\times 10^{-4} = 250$ W.'
      ],
      finalAnswer: '$F \\approx 188{,}5$ kN, $v_{\\text{descente}} \\approx 31{,}8$ mm/s, $v_{\\text{remontée}} \\approx 42{,}4$ mm/s, $P_{\\text{pompe}} = 6{,}25$ kW.'
    },

    evaluation: {
      title: 'Évaluation — Hydraulique et Pneumatique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un vérin de diamètre $D = 80$ mm est alimenté à $P = 150$ bar. Calculer la force de poussée (en kN, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 75.4,
          tolerance: 0.5,
          unit: 'kN',
          points: 3,
          correction: '$S = \\pi \\times 0{,}08^2 / 4 = 5{,}027 \\times 10^{-3}$ m². $F = 150 \\times 10^5 \\times 5{,}027 \\times 10^{-3} = 75\\,398$ N $\\approx 75{,}4$ kN.'
        },
        {
          statement: 'Le théorème de Pascal affirme que :',
          type: 'multiple-choice',
          options: [
            'La pression diminue avec la distance dans une conduite',
            'La pression se transmet intégralement dans un fluide incompressible au repos',
            'Le débit est constant dans un circuit fermé',
            'La force est proportionnelle au débit'
          ],
          answer: 1,
          points: 2,
          correction: 'Le théorème de Pascal stipule qu\'une variation de pression en un point d\'un fluide incompressible au repos se transmet intégralement et instantanément à tous les points. C\'est le fondement des systèmes hydrauliques.'
        },
        {
          statement: 'Une pompe fournit $Q = 20$ L/min à $P = 200$ bar. La puissance hydraulique est (en kW, arrondi à $0{,}1$) :',
          type: 'numeric',
          answer: 6.7,
          tolerance: 0.2,
          unit: 'kW',
          points: 3,
          correction: '$Q = 20/60000 = 3{,}33 \\times 10^{-4}$ m³/s. $P_h = p \\times Q = 200 \\times 10^5 \\times 3{,}33 \\times 10^{-4} = 6666$ W $\\approx 6{,}7$ kW.'
        },
        {
          statement: 'En rétraction, la force du vérin est :',
          type: 'multiple-choice',
          options: [
            'Égale à la force de poussée',
            'Supérieure à la force de poussée',
            'Inférieure car la surface utile est $S_{\\text{ann}} = \\pi(D^2 - d^2)/4$',
            'Nulle'
          ],
          answer: 2,
          points: 2,
          correction: 'En rétraction, on pousse sur la surface annulaire $S_{\\text{ann}} = \\pi(D^2 - d^2)/4 < S_{\\text{piston}}$. La force est donc inférieure. Le rapport est $(D^2 - d^2)/D^2$.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     4. Électrotechnique (machines tournantes)
     ------------------------------------------------------- */
  {
    id: 'si-bts-electrotechnique',
    level: 3, subject: 'si',
    icon: '🔌',
    title: 'Électrotechnique',
    subtitle: 'MCC, moteur asynchrone, synchrone, bilan de puissance',
    keywords: ['Moteur', 'Couple', 'Puissance', 'Rendement', 'Glissement'],
    physics: 'Les machines tournantes (moteurs à courant continu, asynchrones, synchrones) sont les actionneurs de base de l\'industrie : convoyeurs, robots, pompes, ventilateurs, véhicules électriques.',

    cours: {
      intro: 'L\'électrotechnique étudie les machines qui convertissent l\'énergie électrique en énergie mécanique (moteurs) et inversement (génératrices).<br/><br/>Le <strong>moteur à courant continu (MCC)</strong> est le plus simple à modéliser. La force électromotrice est $E = K \\Phi \\Omega$ (avec $\\Omega$ en rad/s, pas en tr/min !) et le couple est $C = K \\Phi I$. L\'équation électrique de l\'induit est $U = E + RI$.<br/><br/>Le <strong>moteur asynchrone triphasé</strong> est le plus répandu en industrie. Le champ tournant du stator a une vitesse de synchronisme $n_s = f/p$ (en tr/s) ou $n_s = 60f/p$ (en tr/min). Le rotor tourne toujours un peu moins vite : le <strong>glissement</strong> est $g = (n_s - n)/n_s$. En régime nominal, $g = 2$ à $5\\%$.<br/><br/>Le <strong>moteur synchrone</strong> tourne exactement à $n_s$ (pas de glissement). Il est utilisé quand on a besoin d\'une vitesse constante et précise.<br/><br/>Le <strong>bilan de puissance</strong> d\'un moteur décompose : $P_{\\text{absorbée}} = P_{\\text{Joule stator}} + P_{\\text{fer}} + P_{\\text{transmise rotor}}$, puis $P_{\\text{transmise}} = P_{\\text{Joule rotor}} + P_{\\text{mécaniques}} + P_{\\text{utile}}$. Le rendement global est $\\eta = P_u / P_a$.',
      definitions: [
        { term: 'Force électromotrice $E$ (MCC)', def: '$E = K \\Phi \\Omega$, avec $\\Omega$ en rad/s. C\'est la tension induite par la rotation. L\'équation de l\'induit est $U = E + RI$ ($R$ résistance d\'induit).' },
        { term: 'Couple moteur $C$ (MCC)', def: '$C = K \\Phi I$. Proportionnel au courant d\'induit $I$. Augmenter le couple nécessite plus de courant.' },
        { term: 'Vitesse de synchronisme $n_s$', def: '$n_s = f/p$ (tr/s) ou $n_s = 60f/p$ (tr/min), avec $f$ la fréquence (50 Hz) et $p$ le nombre de paires de pôles.' },
        { term: 'Glissement $g$', def: '$g = (n_s - n)/n_s$. Sans dimension. Nominal : $g = 2$ à $5\\%$. Démarrage ($n = 0$) : $g = 1$. Synchronisme ($n = n_s$) : $g = 0$ (impossible en charge pour l\'asynchrone).' },
        { term: 'Rendement $\\eta$', def: '$\\eta = P_u / P_a$ : rapport puissance utile (mécanique) sur puissance absorbée (électrique). Tient compte de toutes les pertes.' }
      ],
      method: {
        title: 'Analyser un moteur et établir son bilan de puissance',
        steps: [
          'Calculer la vitesse de synchronisme : $n_s = 60f / p$ (en tr/min).<br/><strong>Exemple :</strong> $f = 50$ Hz, $p = 2$ → $n_s = 1500$ tr/min.',
          'Calculer le glissement : $g = (n_s - n) / n_s$.<br/><strong>Exemple :</strong> $n = 1440$ tr/min → $g = (1500 - 1440)/1500 = 0{,}04 = 4\\%$.',
          'Convertir en rad/s et calculer la puissance mécanique : $\\Omega = 2\\pi n / 60$, puis $P_u = C \\times \\Omega$.<br/><strong>Exemple :</strong> $C = 50$ N·m → $\\Omega = 150{,}8$ rad/s → $P_u = 7540$ W.',
          'Établir le bilan : $P_a = P_{\\text{Joule}} + P_{\\text{fer}} + P_{\\text{méc}} + P_u$. Calculer $\\eta = P_u / P_a$.<br/><strong>Exemple :</strong> $P_a = 8500$ W → $\\eta = 7540/8500 = 88{,}7\\%$.'
        ]
      },
      example: {
        statement: 'Un MCC ($K\\Phi = 0{,}6$ V·s/rad, $R = 1{,}5$ Ω) est alimenté sous $U = 220$ V et absorbe $I = 8$ A. Calculer $E$, $\\Omega$, $C$ et $P_u$.',
        steps: [
          '$E = U - RI = 220 - 1{,}5 \\times 8 = 220 - 12 = 208$ V.',
          '$\\Omega = E / (K\\Phi) = 208 / 0{,}6 = 346{,}7$ rad/s. $n = 60\\Omega / (2\\pi) = 3311$ tr/min.',
          '$C = K\\Phi \\times I = 0{,}6 \\times 8 = 4{,}8$ N·m.',
          '$P_u = C \\times \\Omega = 4{,}8 \\times 346{,}7 = 1664$ W. $P_a = U \\times I = 220 \\times 8 = 1760$ W. $\\eta = 1664/1760 = 94{,}5\\%$.'
        ],
        answer: '$E = 208$ V, $\\Omega = 346{,}7$ rad/s, $C = 4{,}8$ N·m, $P_u = 1664$ W, $\\eta = 94{,}5\\%$.'
      },
      formulas: [
        '$n_s = \\dfrac{60f}{p}$ (tr/min) ou $n_s = \\dfrac{f}{p}$ (tr/s)',
        '$g = \\dfrac{n_s - n}{n_s}$ (glissement)',
        '$P = C \\times \\Omega$ (puissance mécanique, $\\Omega$ en rad/s)',
        '$\\Omega = \\dfrac{2\\pi n}{60}$ (conversion tr/min → rad/s)',
        '$E = K \\Phi \\Omega$ et $C = K \\Phi I$ (MCC)',
        '$U = E + RI$ (équation de l\'induit MCC)',
        '$\\eta = \\dfrac{P_u}{P_a}$ (rendement)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Caractéristique</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">MCC</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Asynchrone</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Synchrone</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Alimentation</td><td style="border:1px solid var(--border);padding:8px">Continu (DC)</td><td style="border:1px solid var(--border);padding:8px">Triphasé (AC)</td><td style="border:1px solid var(--border);padding:8px">Triphasé (AC)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Vitesse</td><td style="border:1px solid var(--border);padding:8px">Variable ($\\propto U$)</td><td style="border:1px solid var(--border);padding:8px">$n < n_s$ (glissement)</td><td style="border:1px solid var(--border);padding:8px">$n = n_s$ (exacte)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Couple</td><td style="border:1px solid var(--border);padding:8px">$C = K\\Phi I$</td><td style="border:1px solid var(--border);padding:8px">Variable avec $g$</td><td style="border:1px solid var(--border);padding:8px">Constant à $n_s$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Avantages</td><td style="border:1px solid var(--border);padding:8px">Contrôle simple de vitesse</td><td style="border:1px solid var(--border);padding:8px">Robuste, peu d\'entretien</td><td style="border:1px solid var(--border);padding:8px">Vitesse précise, $\\cos\\phi$ réglable</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Inconvénients</td><td style="border:1px solid var(--border);padding:8px">Balais, entretien</td><td style="border:1px solid var(--border);padding:8px">Courant d\'appel au démarrage</td><td style="border:1px solid var(--border);padding:8px">Démarrage complexe, coût</td></tr></table>',
      recap: [
        'MCC : $E = K\\Phi\\Omega$, $C = K\\Phi I$, $U = E + RI$. Couple proportionnel au courant.',
        'Moteur asynchrone : $n_s = 60f/p$, $g = (n_s - n)/n_s$. Toujours $n < n_s$ en charge.',
        'Puissance mécanique : $P = C \\times \\Omega$ (avec $\\Omega$ en rad/s, pas en tr/min !).',
        'Le rendement $\\eta = P_u/P_a$ est toujours $< 1$ (pertes Joule, fer, mécaniques).',
        'Le bilan de puissance permet d\'identifier les sources de pertes et d\'optimiser le système.'
      ],
      piege: 'Ne pas confondre $n_s$ en tr/s et en tr/min ! Si $n_s = f/p$, c\'est en tr/s. Pour des tr/min : $n_s = 60f/p$. Pour le MCC, $E = K\\Phi\\Omega$ utilise $\\Omega$ en rad/s, pas en tr/min. Toujours vérifier la cohérence des unités.'
    },

    quiz: [
      {
        q: 'La vitesse de synchronisme d\'un moteur asynchrone à $p = 3$ paires de pôles alimenté à $f = 50$ Hz est :',
        options: [
          '$n_s = 3000$ tr/min',
          '$n_s = 1500$ tr/min',
          '$n_s = 1000$ tr/min',
          '$n_s = 750$ tr/min'
        ],
        answer: 2,
        correction: '$n_s = 60f/p = 60 \\times 50 / 3 = 1000$ tr/min. Valeurs classiques : $p=1$ → $3000$, $p=2$ → $1500$, $p=3$ → $1000$, $p=4$ → $750$ tr/min.'
      },
      {
        q: 'Un MCC a $K\\Phi = 0{,}5$ V·s/rad et tourne à $\\Omega = 200$ rad/s. Sa f.é.m. vaut :',
        options: [
          '$E = 0{,}5 / 200 = 0{,}0025$ V',
          '$E = 200 / 0{,}5 = 400$ V',
          '$E = 0{,}5 \\times 200 = 100$ V',
          '$E = 0{,}5 + 200 = 200{,}5$ V'
        ],
        answer: 2,
        correction: '$E = K\\Phi \\times \\Omega = 0{,}5 \\times 200 = 100$ V. La f.é.m. est proportionnelle à la vitesse angulaire $\\Omega$ (en rad/s, pas en tr/min).'
      },
      {
        q: 'Le glissement d\'un moteur asynchrone en fonctionnement nominal est typiquement de :',
        options: [
          '$g = 0$ (vitesse de synchronisme)',
          '$g = 2$ à $5\\%$',
          '$g = 50\\%$',
          '$g = 100\\%$ (rotor bloqué)'
        ],
        answer: 1,
        correction: 'En nominal, $g = 2$ à $5\\%$. $g = 0$ : impossible en charge (pas de courant induit). $g = 1$ : rotor bloqué (démarrage). Un glissement trop élevé signale une surcharge.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { type: 'MCC', desc: 'moteur à courant continu' },
          { type: 'async', desc: 'moteur asynchrone' }
        ]);
        if (scenario.type === 'MCC') {
          const KPhi = randFloat(0.3, 0.8, 1);
          const U = pick([120, 220, 48]);
          const R = randFloat(0.5, 3.0, 1);
          const I = rand(5, 20);
          const E = U - R * I;
          const omega = parseFloat((E / KPhi).toFixed(1));
          return {
            statement: `Un ${scenario.desc} ($K\\Phi = ${String(KPhi).replace('.', '{,')}$ V·s/rad, $R = ${String(R).replace('.', '{,')}$ Ω) est alimenté sous $U = ${U}$ V et absorbe $I = ${I}$ A. Calcule la vitesse $\\Omega$ (en rad/s, arrondi à $0{,}1$).`,
            answer: omega,
            tolerance: 0.5,
            unit: 'rad/s',
            hint: 'D\'abord $E = U - RI$, puis $\\Omega = E / (K\\Phi)$.',
            solution: [
              `$E = U - RI = ${U} - ${String(R).replace('.', '{,')} \\times ${I} = ${U} - ${R * I} = ${E}$ V`,
              `$\\Omega = E / (K\\Phi) = ${E} / ${String(KPhi).replace('.', '{,')} = ${String(omega).replace('.', '{,')}$ rad/s`
            ]
          };
        } else {
          const p = pick([1, 2, 3]);
          const f = 50;
          const ns = 60 * f / p;
          const gPct = rand(2, 6);
          const n = Math.round(ns * (1 - gPct / 100));
          const gCalc = parseFloat((((ns - n) / ns) * 100).toFixed(1));
          return {
            statement: `Un moteur asynchrone a $p = ${p}$ paire${p > 1 ? 's' : ''} de pôles, alimenté à $f = 50$ Hz. La vitesse mesurée est $n = ${n}$ tr/min. Calcule le glissement $g$ (en %, arrondi à $0{,}1$).`,
            answer: gCalc,
            tolerance: 0.3,
            unit: '%',
            hint: 'Calcule $n_s = 60f/p$, puis $g = (n_s - n)/n_s \\times 100$.',
            solution: [
              `$n_s = 60f/p = 60 \\times 50 / ${p} = ${ns}$ tr/min`,
              `$g = (n_s - n)/n_s = (${ns} - ${n}) / ${ns} = ${ns - n} / ${ns}$`,
              `$g = ${String(gCalc).replace('.', '{,')}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un moteur à courant continu ($K\\Phi = 0{,}5$ V·s/rad, $R = 2$ Ω) est alimenté sous $U = 120$ V. En régime permanent, il absorbe $I = 10$ A.',
      tasks: [
        'Calculer la f.é.m. $E = U - RI$ et la vitesse $\\Omega = E / (K\\Phi)$ (en rad/s puis en tr/min).',
        'Calculer le couple $C = K\\Phi \\times I$ et la puissance utile $P_u = C \\times \\Omega$.',
        'Dresser le bilan de puissance : $P_a = UI$, pertes Joule $P_J = RI^2$, puissance utile $P_u$. Calculer le rendement $\\eta$.'
      ],
      solutions: [
        '$E = U - RI = 120 - 2 \\times 10 = 100$ V. $\\Omega = E / (K\\Phi) = 100 / 0{,}5 = 200$ rad/s. $n = 60\\Omega / (2\\pi) = 1910$ tr/min.',
        '$C = K\\Phi \\times I = 0{,}5 \\times 10 = 5$ N·m. $P_u = C \\times \\Omega = 5 \\times 200 = 1000$ W.',
        '$P_a = UI = 120 \\times 10 = 1200$ W. $P_J = RI^2 = 2 \\times 100 = 200$ W. $P_u = P_a - P_J = 1200 - 200 = 1000$ W. $\\eta = P_u / P_a = 1000 / 1200 = 83{,}3\\%$.'
      ],
      finalAnswer: '$E = 100$ V, $\\Omega = 200$ rad/s ($1910$ tr/min), $C = 5$ N·m, $P_u = 1$ kW, $\\eta = 83{,}3\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Électrotechnique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un MCC ($K\\Phi = 0{,}4$ V·s/rad, $R = 1$ Ω) alimenté sous $U = 48$ V absorbe $I = 12$ A. Calculer la vitesse $\\Omega$ (en rad/s).',
          type: 'numeric',
          answer: 90,
          tolerance: 1,
          unit: 'rad/s',
          points: 3,
          correction: '$E = U - RI = 48 - 1 \\times 12 = 36$ V. $\\Omega = E / (K\\Phi) = 36 / 0{,}4 = 90$ rad/s.'
        },
        {
          statement: 'Calculer la vitesse de synchronisme d\'un moteur asynchrone à $p = 2$, $f = 50$ Hz (en tr/min).',
          type: 'numeric',
          answer: 1500,
          tolerance: 0,
          unit: 'tr/min',
          points: 2,
          correction: '$n_s = 60f/p = 60 \\times 50 / 2 = 1500$ tr/min.'
        },
        {
          statement: 'Un moteur tourne à $n = 1455$ tr/min avec $n_s = 1500$ tr/min. Le glissement est :',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: '%',
          points: 2,
          correction: '$g = (n_s - n)/n_s = (1500 - 1455)/1500 = 45/1500 = 0{,}03 = 3\\%$.'
        },
        {
          statement: 'Pour un MCC, le couple est proportionnel :',
          type: 'multiple-choice',
          options: [
            'À la tension d\'alimentation $U$',
            'Au courant d\'induit $I$',
            'À la vitesse de rotation $\\Omega$',
            'À la résistance d\'induit $R$'
          ],
          answer: 1,
          points: 3,
          correction: '$C = K\\Phi I$ : le couple est directement proportionnel au courant d\'induit. Augmenter la charge nécessite plus de courant. La f.é.m. $E = K\\Phi\\Omega$ est proportionnelle à la vitesse, pas le couple.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     5. Automatique (systèmes linéaires continus)
     ------------------------------------------------------- */
  {
    id: 'si-bts-automatique',
    level: 3, subject: 'si',
    icon: '📊',
    title: 'Automatique',
    subtitle: 'Laplace, 1er et 2nd ordre, stabilité, marges',
    keywords: ['Laplace', 'Fonction de transfert', 'Stabilité', 'Bode', '1er ordre', '2nd ordre'],
    physics: 'L\'automatique est au cœur de la commande industrielle : régulation de température, pilotage de vitesse, asservissement de position, contrôle de niveau, autopilote.',

    cours: {
      intro: 'L\'automatique des systèmes linéaires continus utilise la <strong>transformée de Laplace</strong> pour convertir les équations différentielles en équations algébriques dans le domaine de $s$.<br/><br/>Transformées essentielles : échelon $\\to 1/s$, rampe $\\to 1/s^2$, exponentielle $e^{-at} \\to 1/(s+a)$, dérivée $\\to s\\cdot F(s)$, intégrale $\\to F(s)/s$.<br/><br/>La <strong>fonction de transfert</strong> $H(s) = S(s)/E(s)$ caractérise le comportement entrée-sortie. Le <strong>1er ordre</strong> $H(s) = K/(1+\\tau s)$ est défini par le gain statique $K$ et la constante de temps $\\tau$. La réponse indicielle est une exponentielle : $63\\%$ à $t = \\tau$, $95\\%$ à $t = 3\\tau$, $99\\%$ à $t = 5\\tau$.<br/><br/>Le <strong>2nd ordre</strong> $H(s) = K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$ dépend de $\\omega_n$ (pulsation naturelle) et $\\xi$ (amortissement). Si $\\xi < 1$ : oscillations amorties avec un <strong>premier dépassement</strong> $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$. Si $\\xi = 1$ : régime critique (le plus rapide sans dépassement). Si $\\xi > 1$ : apériodique.<br/><br/>La <strong>stabilité</strong> en boucle fermée est vérifiée par les marges de gain et de phase sur le diagramme de Bode. On vise $M_\\phi \\geq 45°$ et $M_G \\geq 6$ dB.',
      definitions: [
        { term: 'Transformée de Laplace', def: '$F(s) = \\int_0^{+\\infty} f(t)e^{-st}\\,\\mathrm{d}t$. Transforme les dérivées en multiplications par $s$ et les intégrales en divisions par $s$. Outil fondamental de l\'automatique.' },
        { term: 'Fonction de transfert $H(s)$', def: '$H(s) = S(s)/E(s)$. Rapport sortie/entrée dans le domaine de Laplace. Caractérise complètement le comportement dynamique d\'un système linéaire invariant.' },
        { term: 'Système du 1er ordre', def: '$H(s) = K/(1+\\tau s)$. Gain statique $K = H(0)$, constante de temps $\\tau$. Réponse indicielle sans dépassement. Temps de réponse à 5% : $t_r = 3\\tau$.' },
        { term: 'Système du 2nd ordre', def: '$H(s) = K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$. $\\omega_n$ : pulsation naturelle, $\\xi$ : amortissement. Pseudo-pulsation : $\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$.' },
        { term: 'Marge de phase $M_\\phi$', def: 'Complément de la phase de $H(j\\omega)$ par rapport à $-180°$ à la pulsation de coupure ($|H| = 0$ dB). $M_\\phi > 0$ : stable. On vise $M_\\phi \\geq 45°$.' }
      ],
      method: {
        title: 'Identifier les paramètres d\'une fonction de transfert',
        steps: [
          '<strong>1er ordre</strong> $H(s) = K/(1+\\tau s)$ : le gain $K = H(0)$, la constante de temps $\\tau$ se lit à $63\\%$ de la valeur finale sur la réponse indicielle.<br/><strong>Exemple :</strong> $H(s) = 5/(1+0{,}2s)$ → $K = 5$, $\\tau = 0{,}2$ s, $t_{95\\%} = 3 \\times 0{,}2 = 0{,}6$ s.',
          '<strong>2nd ordre</strong> : identifier $\\omega_n$ et $\\xi$ depuis le dénominateur. Le dépassement donne $\\xi$ : $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$.<br/><strong>Exemple :</strong> $H(s) = 300/(s^2+8s+100)$ → $\\omega_n^2 = 100$ → $\\omega_n = 10$ rad/s, $2\\xi\\omega_n = 8$ → $\\xi = 0{,}4$. $D\\% = e^{-\\pi \\times 0{,}4/\\sqrt{1-0{,}16}} \\times 100 = e^{-1{,}37} \\times 100 \\approx 25{,}4\\%$.',
          '<strong>Stabilité</strong> : un système bouclé est stable si tous les pôles de la FTBF ont une partie réelle négative. En pratique, on utilise les marges de Bode : $M_\\phi \\geq 45°$, $M_G \\geq 6$ dB.'
        ]
      },
      example: {
        statement: 'Un système du 2nd ordre a pour réponse indicielle un premier dépassement de $16{,}3\\%$. Déterminer $\\xi$, puis calculer $\\omega_n$ sachant que la pseudo-période est $T_p = 0{,}5$ s.',
        steps: [
          '$D\\% = 16{,}3\\%$ → $D_1 = 0{,}163$. $\\ln(D_1) = -\\pi\\xi/\\sqrt{1-\\xi^2}$. $\\ln(0{,}163) = -1{,}815$.',
          '$1{,}815 = \\pi\\xi/\\sqrt{1-\\xi^2}$ → $1{,}815^2(1-\\xi^2) = \\pi^2\\xi^2$ → $3{,}294 - 3{,}294\\xi^2 = 9{,}87\\xi^2$.',
          '$3{,}294 = 13{,}16\\xi^2$ → $\\xi^2 = 0{,}25$ → $\\xi = 0{,}5$.',
          '$\\omega_p = 2\\pi/T_p = 2\\pi/0{,}5 = 12{,}57$ rad/s. $\\omega_n = \\omega_p/\\sqrt{1-\\xi^2} = 12{,}57/\\sqrt{0{,}75} = 14{,}5$ rad/s.'
        ],
        answer: '$\\xi = 0{,}5$, $\\omega_n = 14{,}5$ rad/s.'
      },
      formulas: [
        '$H(s) = \\dfrac{K}{1 + \\tau s}$ (1er ordre)',
        '$H(s) = \\dfrac{K\\omega_n^2}{s^2 + 2\\xi\\omega_n s + \\omega_n^2}$ (2nd ordre)',
        '$t_{63\\%} = \\tau$, $t_{95\\%} = 3\\tau$, $t_{99\\%} = 5\\tau$',
        '$D\\% = e^{-\\pi\\xi / \\sqrt{1-\\xi^2}} \\times 100$ ($\\xi < 1$)',
        '$\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$ (pseudo-pulsation)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Propriété</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">1er ordre</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">2nd ordre ($\\xi < 1$)</th></tr><tr><td style="border:1px solid var(--border);padding:8px">$H(s)$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{K}{1+\\tau s}$</td><td style="border:1px solid var(--border);padding:8px">$\\dfrac{K\\omega_n^2}{s^2+2\\xi\\omega_n s+\\omega_n^2}$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Réponse indicielle</td><td style="border:1px solid var(--border);padding:8px">Exponentielle (sans dépassement)</td><td style="border:1px solid var(--border);padding:8px">Oscillations amorties (dépassement $D\\%$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Gain statique</td><td style="border:1px solid var(--border);padding:8px">$K$</td><td style="border:1px solid var(--border);padding:8px">$K$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Temps de réponse (5%)</td><td style="border:1px solid var(--border);padding:8px">$t_r = 3\\tau$</td><td style="border:1px solid var(--border);padding:8px">$t_r \\approx 3/(\\xi\\omega_n)$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètres clés</td><td style="border:1px solid var(--border);padding:8px">$K$, $\\tau$</td><td style="border:1px solid var(--border);padding:8px">$K$, $\\omega_n$, $\\xi$</td></tr></table>',
      recap: [
        'La transformée de Laplace convertit les équations différentielles en équations algébriques.',
        '1er ordre : $K$ (valeur finale) et $\\tau$ (vitesse de réponse). À $5\\tau$, régime permanent atteint.',
        '2nd ordre : $\\xi < 1$ → oscillations, $\\xi = 1$ → critique, $\\xi > 1$ → apériodique.',
        'Le dépassement $D\\%$ ne dépend que de $\\xi$ : $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$.',
        'Stabilité en boucle fermée : $M_\\phi \\geq 45°$ et $M_G \\geq 6$ dB sur le Bode de la FTBO.'
      ],
      piege: 'Ne pas confondre $\\omega_n$ et $\\omega_p = \\omega_n\\sqrt{1-\\xi^2}$. Les oscillations observées ont pour pulsation $\\omega_p$, pas $\\omega_n$. La période mesurée sur la réponse temporelle est $T_p = 2\\pi/\\omega_p$, et il faut corriger pour retrouver $\\omega_n$.'
    },

    quiz: [
      {
        q: 'Pour un 1er ordre $H(s) = K/(1+\\tau s)$, le temps pour atteindre $95\\%$ de la valeur finale est :',
        options: [
          '$t = \\tau$',
          '$t = 2\\tau$',
          '$t = 3\\tau$',
          '$t = 5\\tau$'
        ],
        answer: 2,
        correction: 'À $t = 3\\tau$ : $1 - e^{-3} \\approx 0{,}95 = 95\\%$. Repères : $\\tau \\to 63\\%$, $3\\tau \\to 95\\%$, $5\\tau \\to 99\\%$.'
      },
      {
        q: 'Un 2nd ordre avec $\\xi = 0{,}3$ et $\\omega_n = 10$ rad/s : le premier dépassement $D\\%$ vaut environ :',
        options: [
          '$D\\% \\approx 5\\%$',
          '$D\\% \\approx 37\\%$',
          '$D\\% \\approx 60\\%$',
          '$D\\% = 0\\%$ (pas de dépassement)'
        ],
        answer: 1,
        correction: '$D\\% = e^{-\\pi \\times 0{,}3 / \\sqrt{1 - 0{,}09}} \\times 100 = e^{-0{,}942/0{,}954} \\times 100 = e^{-0{,}987} \\times 100 \\approx 37{,}3\\%$. Un $\\xi$ de $0{,}3$ donne un dépassement important.'
      },
      {
        q: 'Le gain statique de $H(s) = 6/(s^2 + 4s + 25)$ vaut :',
        options: [
          '$K = 6$',
          '$K = 6/25 = 0{,}24$',
          '$K = 25$',
          '$K = 6/4 = 1{,}5$'
        ],
        answer: 1,
        correction: '$K = H(0) = 6/25 = 0{,}24$. Forme canonique : $K\\omega_n^2/(s^2+2\\xi\\omega_n s+\\omega_n^2)$ → $\\omega_n^2 = 25$, $K \\times 25 = 6$, donc $K = 0{,}24$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['1er_ordre', '2nd_ordre_D']);
        if (scenario === '1er_ordre') {
          const K = rand(2, 10);
          const tau = randFloat(0.1, 2.0, 1);
          const t95 = parseFloat((3 * tau).toFixed(1));
          return {
            statement: `Un système du 1er ordre a pour fonction de transfert $H(s) = ${K}/(1 + ${String(tau).replace('.', '{,')}s)$. Calcule le temps de réponse à $95\\%$ (en s, arrondi à $0{,}1$ s).`,
            answer: t95,
            tolerance: 0.1,
            unit: 's',
            hint: 'Pour un 1er ordre, $t_{95\\%} = 3\\tau$. Identifie $\\tau$ dans le dénominateur.',
            solution: [
              `$\\tau = ${String(tau).replace('.', '{,')}$ s (coefficient de $s$).`,
              `$t_{95\\%} = 3\\tau = 3 \\times ${String(tau).replace('.', '{,')} = ${String(t95).replace('.', '{,')}$ s.`
            ]
          };
        } else {
          const xi = randFloat(0.2, 0.8, 1);
          const D = parseFloat((Math.exp(-Math.PI * xi / Math.sqrt(1 - xi * xi)) * 100).toFixed(1));
          return {
            statement: `Un système du 2nd ordre a un amortissement $\\xi = ${String(xi).replace('.', '{,')}$. Calcule le premier dépassement $D\\%$ avec la formule $D\\% = e^{-\\pi\\xi/\\sqrt{1-\\xi^2}} \\times 100$ (arrondi à $0{,}1\\%$).`,
            answer: D,
            tolerance: 0.5,
            unit: '%',
            hint: 'Calcule d\'abord $\\pi\\xi/\\sqrt{1-\\xi^2}$, puis l\'exponentielle, puis multiplie par 100.',
            solution: [
              `$1 - \\xi^2 = 1 - ${String(xi).replace('.', '{,')}^2 = ${String(parseFloat((1 - xi * xi).toFixed(2))).replace('.', '{,')}$`,
              `$\\sqrt{1-\\xi^2} = ${String(parseFloat(Math.sqrt(1 - xi * xi).toFixed(3))).replace('.', '{,')}$`,
              `$\\pi\\xi/\\sqrt{1-\\xi^2} = ${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,')}$`,
              `$D\\% = e^{-${String(parseFloat((Math.PI * xi / Math.sqrt(1 - xi * xi)).toFixed(3))).replace('.', '{,')}} \\times 100 = ${String(D).replace('.', '{,')}\\%$`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un asservissement de vitesse est modélisé par une FTBO du 1er ordre $H_{BO}(s) = 10/(1+0{,}5s)$ avec un retour unitaire. On souhaite analyser les performances du système bouclé.',
      tasks: [
        'Écrire la FTBF $H_{BF}(s) = H_{BO}/(1+H_{BO})$ et l\'identifier comme un 1er ordre. Donner $K_{BF}$ et $\\tau_{BF}$.',
        'Calculer l\'erreur statique en régime permanent pour un échelon de consigne $E_0 = 1$ : $\\varepsilon = E_0 / (1 + K_{BO})$.',
        'Un correcteur proportionnel $K_c = 5$ est ajouté (nouvelle FTBO : $5 \\times 10/(1+0{,}5s) = 50/(1+0{,}5s)$). Recalculer $K_{BF}$, $\\tau_{BF}$ et l\'erreur statique. Conclure.'
      ],
      solutions: [
        '$H_{BF} = \\dfrac{10/(1+0{,}5s)}{1+10/(1+0{,}5s)} = \\dfrac{10}{11+0{,}5s} = \\dfrac{10/11}{1+0{,}5s/11}$. $K_{BF} = 10/11 \\approx 0{,}909$. $\\tau_{BF} = 0{,}5/11 \\approx 0{,}045$ s. Le bouclage réduit le gain mais accélère la réponse.',
        '$\\varepsilon = 1/(1+K_{BO}) = 1/(1+10) = 1/11 \\approx 0{,}091 = 9{,}1\\%$.',
        'Avec $K_c = 5$ : $K_{BO} = 50$. $K_{BF} = 50/51 \\approx 0{,}980$. $\\tau_{BF} = 0{,}5/51 \\approx 0{,}0098$ s. $\\varepsilon = 1/51 \\approx 1{,}96\\%$. Le correcteur réduit l\'erreur statique et accélère la réponse, mais augmente le risque d\'instabilité pour un système plus complexe.'
      ],
      finalAnswer: 'Sans correcteur : $K_{BF} = 0{,}909$, $\\tau_{BF} = 45$ ms, $\\varepsilon = 9{,}1\\%$. Avec $K_c = 5$ : $K_{BF} = 0{,}980$, $\\tau_{BF} = 9{,}8$ ms, $\\varepsilon = 2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Automatique',
      duration: '20 min',
      questions: [
        {
          statement: 'Un 1er ordre $H(s) = 8/(1+0{,}4s)$. Le gain statique est :',
          type: 'numeric',
          answer: 8,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$K = H(0) = 8/(1+0) = 8$. Pour un échelon unitaire, la valeur finale est $y_\\infty = K = 8$.'
        },
        {
          statement: 'Le premier dépassement d\'un 2nd ordre avec $\\xi = 0{,}5$ vaut (en %, arrondi à l\'entier) :',
          type: 'numeric',
          answer: 16,
          tolerance: 1,
          unit: '%',
          points: 3,
          correction: '$D\\% = e^{-\\pi \\times 0{,}5 / \\sqrt{1-0{,}25}} \\times 100 = e^{-1{,}814} \\times 100 = 16{,}3\\% \\approx 16\\%$.'
        },
        {
          statement: 'Un 2nd ordre a $\\omega_n = 20$ rad/s et $\\xi = 0{,}6$. Le régime est :',
          type: 'multiple-choice',
          options: [
            'Apériodique ($\\xi > 1$)',
            'Critique ($\\xi = 1$)',
            'Oscillant amorti ($\\xi < 1$)',
            'Instable'
          ],
          answer: 2,
          points: 2,
          correction: '$\\xi = 0{,}6 < 1$ : régime sous-amorti (oscillations amorties). $\\omega_p = 20\\sqrt{1-0{,}36} = 20 \\times 0{,}8 = 16$ rad/s.'
        },
        {
          statement: 'Pour un 1er ordre avec $\\tau = 0{,}2$ s, le temps de réponse à $99\\%$ est :',
          type: 'numeric',
          answer: 1,
          tolerance: 0.01,
          unit: 's',
          points: 3,
          correction: '$t_{99\\%} = 5\\tau = 5 \\times 0{,}2 = 1$ s.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     6. Capteurs industriels et instrumentation
     ------------------------------------------------------- */
  {
    id: 'si-bts-capteurs-industriels',
    level: 3, subject: 'si',
    icon: '📡',
    title: 'Capteurs Industriels et Instrumentation',
    subtitle: 'Wheatstone, sensibilité, résolution, incertitude',
    keywords: ['Capteur', 'Wheatstone', 'Sensibilité', 'Précision', 'Incertitude'],
    physics: 'Les capteurs sont les « organes sensoriels » des systèmes industriels. Ils mesurent température, pression, déplacement, force et débit pour les convertir en signaux exploitables par les automates et systèmes de commande.',

    cours: {
      intro: 'Un capteur transforme une grandeur physique (mesurande) en un signal électrique. Ses performances sont caractérisées par des critères métrologiques précis.<br/><br/>La <strong>sensibilité</strong> $S = \\Delta V_{\\text{sortie}} / \\Delta X_{\\text{entrée}}$ est la pente de la courbe d\'étalonnage. Plus $S$ est élevée, plus le capteur détecte de petites variations.<br/><br/>La <strong>résolution</strong> est la plus petite variation détectable. Pour un capteur numérique ($n$ bits) : résolution $= EM / 2^n$. La <strong>précision</strong> est l\'écart maximal entre mesure et valeur vraie, exprimée en classe (ex. : classe $0{,}5$ = $\\pm 0{,}5\\%$ de l\'EM). Ces deux notions sont distinctes : un capteur peut avoir une bonne résolution et une mauvaise précision.<br/><br/>Le <strong>pont de Wheatstone</strong> est le circuit de conditionnement le plus courant pour les capteurs résistifs (jauges, thermistances, Pt100). Pour un pont équilibré à $R_0$ avec une variation $\\Delta R$ :<br/>$$\\Delta V = E \\cdot \\dfrac{\\Delta R}{4R_0 + 2\\Delta R} \\approx E \\cdot \\dfrac{\\Delta R}{4R_0}$$<br/>(approximation valable si $\\Delta R \\ll R_0$).<br/><br/>L\'<strong>incertitude de mesure</strong> quantifie la confiance : $u = \\sigma / \\sqrt{n}$ (type A), et l\'incertitude élargie $U = k \\cdot u$ ($k = 2$ pour 95% de confiance).',
      definitions: [
        { term: 'Sensibilité $S$', def: '$S = \\Delta V_{\\text{sortie}} / \\Delta X_{\\text{entrée}}$. Pente de la droite d\'étalonnage. Unité : V/unité de mesurande (ex. mV/bar, mV/°C).' },
        { term: 'Résolution', def: 'Plus petite variation détectable. Capteur numérique : résolution $= EM / 2^n$ ($n$ = nombre de bits). Un CAN 12 bits sur 10 V a une résolution de $10/4096 \\approx 2{,}44$ mV.' },
        { term: 'Précision (classe)', def: 'Écart maximal entre mesure et valeur vraie, en % de l\'EM. Classe $0{,}5$ : erreur $\\leq \\pm 0{,}5\\%$ de l\'EM. Dépend de l\'étalonnage.' },
        { term: 'Pont de Wheatstone', def: 'Circuit en pont à 4 résistances alimenté par $E$. La tension de déséquilibre est $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$ pour une seule branche active. Permet de mesurer de très faibles variations de résistance.' },
        { term: 'Incertitude type $u$', def: '$u = \\sigma / \\sqrt{n}$ (type A, statistique). Incertitude élargie : $U = 2u$ (confiance $\\approx 95\\%$). On écrit : $x = \\bar{x} \\pm U$.' }
      ],
      method: {
        title: 'Caractériser un capteur et exploiter un pont de Wheatstone',
        steps: [
          'Identifier l\'étendue de mesure (EM) et calculer la sensibilité : $S = (V_{\\max} - V_{\\min}) / (X_{\\max} - X_{\\min})$.<br/><strong>Exemple :</strong> Capteur de force : $0$ à $500$ N → $0$ à $5$ V. $S = 5/500 = 10$ mV/N.',
          'Calculer la grandeur mesurée : $X = V / S$ (si linéaire passant par l\'origine).<br/><strong>Exemple :</strong> $V = 3{,}2$ V → $X = 3200/10 = 320$ N.',
          'Pour un pont de Wheatstone (Pt100 : $R_0 = 100$ Ω, $S_{\\text{Pt}} = 0{,}385$ Ω/°C) :<br/>$R(T) = R_0 + S_{\\text{Pt}} \\cdot T$, $\\Delta R = S_{\\text{Pt}} \\cdot T$, $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$.<br/><strong>Exemple :</strong> $T = 50°$C, $E = 10$ V → $\\Delta R = 19{,}25$ Ω → $\\Delta V = 10 \\times 19{,}25 / 400 = 0{,}481$ V.',
          'Incertitude : si $n$ mesures avec écart-type $\\sigma$ → $u = \\sigma / \\sqrt{n}$, $U = 2u$.<br/><strong>Exemple :</strong> $\\sigma = 0{,}3$ °C, $n = 16$ → $u = 0{,}3/4 = 0{,}075$ °C, $U = 0{,}15$ °C.'
        ]
      },
      example: {
        statement: 'Un capteur de pression a une EM de $0$ à $10$ bar et délivre $0$ à $5$ V (linéaire). On mesure $V = 3{,}5$ V. Donner $S$ et $P$. Si la classe est $0{,}5$, quelle est l\'erreur maximale ?',
        steps: [
          '$S = 5 / 10 = 0{,}5$ V/bar = 500 mV/bar.',
          '$P = V / S = 3{,}5 / 0{,}5 = 7$ bar.',
          'Classe $0{,}5$ : erreur max $= 0{,}5\\% \\times EM = 0{,}005 \\times 10 = 0{,}05$ bar.',
          'Résultat : $P = 7{,}00 \\pm 0{,}05$ bar.'
        ],
        answer: '$S = 0{,}5$ V/bar. $P = 7{,}00 \\pm 0{,}05$ bar.'
      },
      formulas: [
        '$S = \\dfrac{\\Delta V_{\\text{sortie}}}{\\Delta X_{\\text{entrée}}}$ (sensibilité)',
        '$X = \\dfrac{V_{\\text{mesurée}}}{S}$ (si linéaire)',
        '$\\Delta V \\approx E \\cdot \\dfrac{\\Delta R}{4R_0}$ (Wheatstone, 1 branche active)',
        '$\\text{Résolution} = \\dfrac{\\text{EM}}{2^n}$ ($n$ bits)',
        '$u = \\dfrac{\\sigma}{\\sqrt{n}}$ (incertitude type A)',
        '$U = 2u$ (incertitude élargie, 95%)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Type de capteur</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Mesurande</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Étendue typique</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Sensibilité typique</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Pt100 (résistif)</td><td style="border:1px solid var(--border);padding:8px">Température</td><td style="border:1px solid var(--border);padding:8px">$-200$ à $+850$ °C</td><td style="border:1px solid var(--border);padding:8px">$0{,}385$ Ω/°C</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Jauge de contrainte</td><td style="border:1px solid var(--border);padding:8px">Déformation / Force</td><td style="border:1px solid var(--border);padding:8px">$0$ à $2000$ $\\mu\\varepsilon$</td><td style="border:1px solid var(--border);padding:8px">$k \\approx 2$ (facteur de jauge)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Piézoélectrique</td><td style="border:1px solid var(--border);padding:8px">Pression / Accélération</td><td style="border:1px solid var(--border);padding:8px">$0$ à $700$ bar</td><td style="border:1px solid var(--border);padding:8px">$\\approx 5$ pC/bar</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Codeur incrémental</td><td style="border:1px solid var(--border);padding:8px">Position / Vitesse</td><td style="border:1px solid var(--border);padding:8px">360° (continu)</td><td style="border:1px solid var(--border);padding:8px">$1000$ à $10000$ pts/tour</td></tr></table>',
      recap: [
        'La sensibilité $S$ est la pente de la droite d\'étalonnage : $S = \\Delta V / \\Delta X$.',
        'Résolution $\\neq$ précision : la résolution dépend de la technologie, la précision de l\'étalonnage.',
        'Le pont de Wheatstone détecte de très faibles variations $\\Delta R$ : $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$.',
        'L\'incertitude $u = \\sigma / \\sqrt{n}$ diminue avec le nombre de mesures.',
        'Toujours exprimer le résultat sous la forme $x = \\bar{x} \\pm U$ avec l\'incertitude élargie.'
      ],
      piege: 'Ne pas confondre précision et résolution ! Un capteur peut avoir une excellente résolution (petites variations détectées) mais une mauvaise précision (valeur éloignée du vrai). La précision dépend de l\'étalonnage, la résolution de la technologie (nombre de bits, pas de quantification).'
    },

    quiz: [
      {
        q: 'La tension de déséquilibre d\'un pont de Wheatstone (1 branche active) s\'écrit :',
        options: [
          '$\\Delta V = E \\times R_0$',
          '$\\Delta V \\approx E \\times \\Delta R / (4R_0)$',
          '$\\Delta V = E / \\Delta R$',
          '$\\Delta V = 4R_0 / E$'
        ],
        answer: 1,
        correction: 'Pour un pont à une branche active, la tension de déséquilibre est $\\Delta V \\approx E \\cdot \\Delta R / (4R_0)$. Cette approximation est valable tant que $\\Delta R \\ll R_0$.'
      },
      {
        q: 'Un CAN 12 bits avec une EM de $0$ à $10$ V a une résolution de :',
        options: [
          '$10 / 12 \\approx 0{,}83$ V',
          '$10 / 4096 \\approx 2{,}44$ mV',
          '$10 / 1024 \\approx 9{,}77$ mV',
          '$12 / 10 = 1{,}2$ V'
        ],
        answer: 1,
        correction: 'Résolution $= EM / 2^n = 10 / 2^{12} = 10 / 4096 \\approx 2{,}44$ mV. Le CAN a $4096$ niveaux de quantification.'
      },
      {
        q: 'L\'incertitude type de $n = 9$ mesures d\'écart-type $\\sigma = 0{,}6$ est :',
        options: [
          '$u = 0{,}6 / 9 = 0{,}067$',
          '$u = 0{,}6 / \\sqrt{9} = 0{,}2$',
          '$u = 0{,}6 \\times \\sqrt{9} = 1{,}8$',
          '$u = 0{,}6 \\times 9 = 5{,}4$'
        ],
        answer: 1,
        correction: '$u = \\sigma / \\sqrt{n} = 0{,}6 / \\sqrt{9} = 0{,}6 / 3 = 0{,}2$. L\'incertitude élargie ($k = 2$) serait $U = 0{,}4$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { type: 'force', unit: 'N', Xmax: rand(200, 1000) },
          { type: 'pression', unit: 'bar', Xmax: rand(10, 400) },
          { type: 'température', unit: '°C', Xmax: rand(100, 500) }
        ]);
        const Vmax = pick([5, 10]);
        const S = parseFloat((Vmax / scenario.Xmax).toFixed(4));
        const V = randFloat(0.5, Vmax - 0.5, 1);
        const X = parseFloat((V / S).toFixed(1));
        return {
          statement: `Un capteur de ${scenario.type} a une EM de $0$ à $${scenario.Xmax}$ ${scenario.unit} et délivre $0$ à $${Vmax}$ V (linéaire). La tension mesurée est $V = ${String(V).replace('.', '{,')}$ V. Calcule la ${scenario.type} mesurée (en ${scenario.unit}, arrondi à $0{,}1$).`,
          answer: X,
          tolerance: 0.5,
          unit: scenario.unit,
          hint: `Calcule la sensibilité $S = V_{\\max} / X_{\\max}$, puis $X = V / S$.`,
          solution: [
            `$S = ${Vmax} / ${scenario.Xmax} = ${String(S).replace('.', '{,')}$ V/${scenario.unit}`,
            `$X = V / S = ${String(V).replace('.', '{,')} / ${String(S).replace('.', '{,')}$`,
            `$X = ${String(X).replace('.', '{,')}$ ${scenario.unit}`
          ]
        };
      }
    },

    probleme: {
      context: 'Une sonde Pt100 ($R_0 = 100$ Ω à $0°$C, sensibilité $0{,}385$ Ω/°C) est placée dans un pont de Wheatstone (trois résistances fixes de $100$ Ω, alimentation $E = 10$ V). On mesure une tension $\\Delta V = 0{,}481$ V.',
      tasks: [
        'Calculer la variation de résistance $\\Delta R$ à partir de la tension mesurée : $\\Delta R = 4R_0 \\cdot \\Delta V / E$.',
        'En déduire la température $T = \\Delta R / S_{\\text{Pt}}$ (avec $S_{\\text{Pt}} = 0{,}385$ Ω/°C).',
        'On effectue $n = 25$ mesures de température avec un écart-type $\\sigma = 0{,}8$ °C. Calculer l\'incertitude type $u$ et l\'incertitude élargie $U$ ($k = 2$).'
      ],
      solutions: [
        '$\\Delta R = 4 \\times 100 \\times 0{,}481 / 10 = 400 \\times 0{,}481 / 10 = 19{,}24$ Ω.',
        '$T = \\Delta R / S_{\\text{Pt}} = 19{,}24 / 0{,}385 = 49{,}97 \\approx 50$ °C.',
        '$u = \\sigma / \\sqrt{n} = 0{,}8 / \\sqrt{25} = 0{,}8 / 5 = 0{,}16$ °C. $U = 2u = 0{,}32$ °C. Résultat : $T = 50{,}0 \\pm 0{,}3$ °C.'
      ],
      finalAnswer: '$\\Delta R = 19{,}24$ Ω, $T \\approx 50$ °C. $U = \\pm 0{,}32$ °C (confiance 95%).'
    },

    evaluation: {
      title: 'Évaluation — Capteurs Industriels',
      duration: '20 min',
      questions: [
        {
          statement: 'Un capteur délivre $0$ à $5$ V pour $0$ à $200$ bar. Calculer la sensibilité (en mV/bar).',
          type: 'numeric',
          answer: 25,
          tolerance: 0.1,
          unit: 'mV/bar',
          points: 2,
          correction: '$S = 5000/200 = 25$ mV/bar.'
        },
        {
          statement: 'Un pont de Wheatstone ($R_0 = 120$ Ω, $E = 5$ V) a une branche dont la résistance varie de $\\Delta R = 2$ Ω. La tension de déséquilibre est (en mV, arrondi à l\'entier) :',
          type: 'numeric',
          answer: 21,
          tolerance: 1,
          unit: 'mV',
          points: 3,
          correction: '$\\Delta V \\approx E \\cdot \\Delta R / (4R_0) = 5 \\times 2 / (4 \\times 120) = 10/480 = 0{,}0208$ V $= 20{,}8$ mV $\\approx 21$ mV.'
        },
        {
          statement: 'La résolution d\'un CAN est :',
          type: 'multiple-choice',
          options: [
            'L\'écart entre la mesure et la valeur vraie',
            'La plus petite variation détectable, liée au nombre de bits',
            'La plage de fonctionnement du capteur',
            'La pente de la courbe d\'étalonnage'
          ],
          answer: 1,
          points: 2,
          correction: 'La résolution est la plus petite variation détectable : $EM / 2^n$ pour un CAN $n$ bits. C\'est différent de la précision (écart à la valeur vraie) et de la sensibilité (pente).'
        },
        {
          statement: 'Après $n = 16$ mesures d\'écart-type $\\sigma = 0{,}4$ °C, l\'incertitude élargie ($k = 2$) est (en °C) :',
          type: 'numeric',
          answer: 0.2,
          tolerance: 0.01,
          unit: '°C',
          points: 3,
          correction: '$u = \\sigma/\\sqrt{n} = 0{,}4/\\sqrt{16} = 0{,}4/4 = 0{,}1$ °C. $U = 2u = 0{,}2$ °C.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     7. CAO (Conception assistée par ordinateur)
     ------------------------------------------------------- */
  {
    id: 'si-bts-cao',
    level: 3, subject: 'si',
    icon: '🖥️',
    title: 'Conception Assistée par Ordinateur (CAO)',
    subtitle: 'Chaîne de cotes, tolérances ISO, ajustements H7/g6',
    keywords: ['CAO', 'Tolérancement', 'Chaîne de cotes', 'Ajustement', 'ISO'],
    physics: 'La CAO est l\'outil central de la conception mécanique. La cotation fonctionnelle et le tolérancement ISO garantissent la fabrication conforme et l\'interchangeabilité des pièces dans l\'industrie.',

    cours: {
      intro: 'La <strong>cotation fonctionnelle</strong> traduit les exigences de fonctionnement en spécifications géométriques mesurables. Chaque cote fonctionnelle est liée à une exigence (jeu, serrage, alignement).<br/><br/>L\'<strong>intervalle de tolérance</strong> (IT) est $IT = c_{\\max} - c_{\\min}$. Le système ISO de tolérances normalise les IT par <strong>qualités</strong> (IT5 à IT18) et <strong>positions</strong> (lettres : $H$, $g$, $h$, etc.). La qualité fixe l\'amplitude de la tolérance, la position fixe son placement par rapport au nominal.<br/><br/>La <strong>chaîne de cotes</strong> est une boucle fermée de cotes reliant les surfaces fonctionnelles. La cote condition (jeu) est la résultante. En méthode arithmétique (pire des cas) : $J_{\\max} = \\sum c_i^{\\max}(+) - \\sum c_j^{\\min}(-)$ et $J_{\\min} = \\sum c_i^{\\min}(+) - \\sum c_j^{\\max}(-)$. La tolérance du jeu est $IT_J = \\sum IT_i$.<br/><br/>Les <strong>ajustements</strong> courants : $H7/g6$ (jeu, tournant libre), $H7/h6$ (glissant), $H7/p6$ (serré). L\'alésage est coté en majuscule ($H$ = écart inférieur nul), l\'arbre en minuscule ($g$ = léger jeu, $h$ = ajusté, $p$ = serré).<br/><br/>Exemple concret : pour un arbre $\\varnothing 50\\,g6$, l\'IT6 pour $\\varnothing 50$ vaut $16$ $\\mu$m, avec des écarts de $-9$ à $-25$ $\\mu$m. L\'alésage $\\varnothing 50\\,H7$ a un IT7 de $25$ $\\mu$m, avec des écarts de $0$ à $+25$ $\\mu$m.',
      definitions: [
        { term: 'Intervalle de tolérance (IT)', def: '$IT = c_{\\max} - c_{\\min}$. Plus l\'IT est petit, plus la fabrication est précise (et coûteuse). Le système ISO normalise les IT par qualités (IT5 : précision, IT11 : courant).' },
        { term: 'Chaîne de cotes', def: 'Boucle fermée de cotes reliant les surfaces fonctionnelles. La cote condition (jeu/serrage) est la résultante. Méthode arithmétique : $IT_J = \\sum IT_i$.' },
        { term: 'Ajustement', def: 'Relation entre un alésage et un arbre. Jeu $= A - B$. Jeu > 0 : avec jeu. Jeu < 0 : serrage. $H7/g6$ (jeu), $H7/h6$ (glissant), $H7/p6$ (serré).' },
        { term: 'Position de tolérance', def: 'Lettre qui fixe la position de l\'IT par rapport au nominal. Majuscule pour l\'alésage ($H$ : écart inf. $= 0$), minuscule pour l\'arbre ($h$ : écart sup. $= 0$, $g$ : léger jeu).' },
        { term: 'Qualité de tolérance', def: 'Nombre (5 à 18) qui fixe l\'amplitude de l\'IT. Plus la qualité est basse, plus la tolérance est serrée. IT7 est courant pour les ajustements, IT11 pour les cotes libres.' }
      ],
      method: {
        title: 'Résoudre une chaîne de cotes (méthode arithmétique)',
        steps: [
          'Identifier la cote condition (jeu ou serrage fonctionnel). Nommer $J$.<br/><strong>Exemple :</strong> Jeu axial entre deux pièces, spécifié $0{,}1 \\leq J \\leq 0{,}5$ mm.',
          'Tracer la chaîne : relier les surfaces fonctionnelles. Orienter chaque cote : $+$ dans le sens de $J$, $-$ dans le sens opposé.',
          'Écrire : $J_{\\max} = \\sum c_i^{\\max}(+) - \\sum c_j^{\\min}(-)$, $J_{\\min} = \\sum c_i^{\\min}(+) - \\sum c_j^{\\max}(-)$.<br/><strong>Exemple :</strong> $J = a - b$ → $J_{\\max} = a_{\\max} - b_{\\min}$, $J_{\\min} = a_{\\min} - b_{\\max}$.',
          'Vérifier : $J_{\\min} \\geq 0$ (si jeu requis). $IT_J = J_{\\max} - J_{\\min} = \\sum IT_i$.<br/>Si le CdC n\'est pas respecté, réduire les IT des cotes composantes ou revoir les nominaux.'
        ]
      },
      example: {
        statement: 'Un assemblage avec alésage $\\varnothing 50\\,H7$ ($+0$ / $+25$ $\\mu$m) et arbre $\\varnothing 50\\,g6$ ($-9$ / $-25$ $\\mu$m). Calculer les jeux min et max.',
        steps: [
          'Alésage $H7$ : $A_{\\min} = 50{,}000$ mm, $A_{\\max} = 50{,}025$ mm.',
          'Arbre $g6$ : $B_{\\max} = 49{,}991$ mm, $B_{\\min} = 49{,}975$ mm.',
          '$J_{\\min} = A_{\\min} - B_{\\max} = 50{,}000 - 49{,}991 = 0{,}009$ mm $= 9$ $\\mu$m.',
          '$J_{\\max} = A_{\\max} - B_{\\min} = 50{,}025 - 49{,}975 = 0{,}050$ mm $= 50$ $\\mu$m.',
          '$IT_J = 50 - 9 = 41$ $\\mu$m $= IT_H + IT_g = 25 + 16 = 41$ $\\mu$m. ✓'
        ],
        answer: '$J_{\\min} = 9$ $\\mu$m, $J_{\\max} = 50$ $\\mu$m. Ajustement tournant libre.'
      },
      formulas: [
        '$IT = c_{\\max} - c_{\\min}$',
        '$\\text{Jeu} = \\text{Alésage} - \\text{Arbre}$',
        '$J_{\\max} = A_{\\max} - B_{\\min}$',
        '$J_{\\min} = A_{\\min} - B_{\\max}$',
        '$IT_J = \\sum IT_i$ (méthode arithmétique)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Qualité ISO</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">IT ($\\mu$m) pour $\\varnothing$ 50</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Usage typique</th></tr><tr><td style="border:1px solid var(--border);padding:8px">IT5</td><td style="border:1px solid var(--border);padding:8px">11</td><td style="border:1px solid var(--border);padding:8px">Roulements, pièces de précision</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT6</td><td style="border:1px solid var(--border);padding:8px">16</td><td style="border:1px solid var(--border);padding:8px">Arbres de qualité (ajustement $g6$, $h6$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT7</td><td style="border:1px solid var(--border);padding:8px">25</td><td style="border:1px solid var(--border);padding:8px">Alésages de qualité ($H7$)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT8</td><td style="border:1px solid var(--border);padding:8px">39</td><td style="border:1px solid var(--border);padding:8px">Pièces mécaniques courantes</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT9</td><td style="border:1px solid var(--border);padding:8px">62</td><td style="border:1px solid var(--border);padding:8px">Pièces usinées ordinaires</td></tr><tr><td style="border:1px solid var(--border);padding:8px">IT11</td><td style="border:1px solid var(--border);padding:8px">160</td><td style="border:1px solid var(--border);padding:8px">Cotes libres, tôlerie</td></tr></table>',
      recap: [
        'La cotation fonctionnelle ne retient que les cotes nécessaires au fonctionnement.',
        '$IT = c_{\\max} - c_{\\min}$ : plus l\'IT est serré, plus c\'est coûteux.',
        'Chaîne de cotes : $IT_J = \\sum IT_i$ (méthode arithmétique, pire des cas).',
        'Ajustements ISO : $H7/g6$ (jeu tournant), $H7/h6$ (glissant), $H7/p6$ (serré).',
        'Toujours vérifier $J_{\\min} \\geq 0$ pour un ajustement avec jeu.'
      ],
      piege: 'Attention au sens des cotes dans la chaîne ! Les cotes dans le sens de $J$ sont $+$ (max → $J_{\\max}$). Les cotes en sens opposé sont $-$ (min → $J_{\\max}$). Inverser le sens d\'une cote fausse tout le calcul. Attention aussi aux unités : les IT sont souvent en $\\mu$m mais les cotes en mm.'
    },

    quiz: [
      {
        q: 'L\'intervalle de tolérance de $50 \\pm 0{,}03$ mm vaut :',
        options: [
          '$IT = 0{,}03$ mm',
          '$IT = 0{,}06$ mm',
          '$IT = 50{,}03$ mm',
          '$IT = 50$ mm'
        ],
        answer: 1,
        correction: '$c_{\\max} = 50{,}03$, $c_{\\min} = 49{,}97$. $IT = 0{,}06$ mm. L\'IT est toujours le double de la valeur $\\pm$.'
      },
      {
        q: 'L\'ajustement $H7/g6$ est un ajustement :',
        options: [
          'Avec serrage (l\'arbre est plus gros que l\'alésage)',
          'Avec jeu (l\'alésage est toujours plus grand que l\'arbre)',
          'Incertain (parfois jeu, parfois serrage)',
          'Glissant juste ($J_{\\min} = 0$)'
        ],
        answer: 1,
        correction: '$H7$ : écart inf. de l\'alésage $= 0$. $g6$ : écart sup. de l\'arbre $< 0$ (négatif). Donc $A_{\\min} > B_{\\max}$ : jeu toujours positif. C\'est un ajustement tournant libre.'
      },
      {
        q: 'La tolérance du jeu dans une chaîne de cotes (méthode arithmétique) est :',
        options: [
          'Égale à la plus grande tolérance composante',
          'Égale à la somme des tolérances composantes',
          'Égale à la moyenne des tolérances',
          'Indépendante des tolérances composantes'
        ],
        answer: 1,
        correction: 'Méthode arithmétique (pire des cas) : $IT_J = \\sum IT_i$. Les tolérances s\'accumulent. C\'est pourquoi on minimise le nombre de cotes dans la chaîne.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const Anom = rand(30, 80);
        const tolA = randFloat(0.01, 0.05, 2);
        const ecart = randFloat(0.03, 0.12, 2);
        const Bnom = parseFloat((Anom - ecart).toFixed(2));
        const tolB = randFloat(0.01, 0.04, 2);
        const Amin = parseFloat((Anom - tolA).toFixed(2));
        const Bmax = parseFloat((Bnom + tolB).toFixed(2));
        const Jmin = parseFloat((Amin - Bmax).toFixed(2));
        const scenario = pick([
          'un assemblage de deux pièces mécaniques',
          'un guidage en translation',
          'un palier lisse'
        ]);
        return {
          statement: `Dans ${scenario}, l'alésage a pour cote $A = ${Anom} \\pm ${String(tolA).replace('.', '{,')}$ mm et l'arbre $B = ${String(Bnom).replace('.', '{,')} \\pm ${String(tolB).replace('.', '{,')}$ mm. Calcule le jeu minimal $J_{\\min}$ (en mm, arrondi à $0{,}01$).`,
          answer: Jmin,
          tolerance: 0.02,
          unit: 'mm',
          hint: '$J_{\\min} = A_{\\min} - B_{\\max}$. Le jeu minimal correspond au plus petit alésage et au plus grand arbre.',
          solution: [
            `$A_{\\min} = ${Anom} - ${String(tolA).replace('.', '{,')} = ${String(Amin).replace('.', '{,')}$ mm`,
            `$B_{\\max} = ${String(Bnom).replace('.', '{,')} + ${String(tolB).replace('.', '{,')} = ${String(Bmax).replace('.', '{,')}$ mm`,
            `$J_{\\min} = A_{\\min} - B_{\\max} = ${String(Amin).replace('.', '{,')} - ${String(Bmax).replace('.', '{,')} = ${String(Jmin).replace('.', '{,')}$ mm`
          ]
        };
      }
    },

    probleme: {
      context: 'Un assemblage $\\varnothing 40\\,H7/g6$. Données ISO pour $\\varnothing 40$ : $H7$ (écarts $+0$ / $+25$ $\\mu$m, IT $= 25$ $\\mu$m), $g6$ (écarts $-9$ / $-25$ $\\mu$m, IT $= 16$ $\\mu$m).',
      tasks: [
        'Calculer les dimensions limites de l\'alésage et de l\'arbre (en mm).',
        'Calculer le jeu minimal et le jeu maximal (en $\\mu$m).',
        'Vérifier que $IT_J = IT_H + IT_g$ et qualifier le type d\'ajustement.'
      ],
      solutions: [
        'Alésage $H7$ : $A_{\\min} = 40{,}000$ mm, $A_{\\max} = 40{,}025$ mm. Arbre $g6$ : $B_{\\max} = 40{,}000 - 0{,}009 = 39{,}991$ mm, $B_{\\min} = 40{,}000 - 0{,}025 = 39{,}975$ mm.',
        '$J_{\\min} = A_{\\min} - B_{\\max} = 40{,}000 - 39{,}991 = 0{,}009$ mm $= 9$ $\\mu$m. $J_{\\max} = A_{\\max} - B_{\\min} = 40{,}025 - 39{,}975 = 0{,}050$ mm $= 50$ $\\mu$m.',
        '$IT_J = J_{\\max} - J_{\\min} = 50 - 9 = 41$ $\\mu$m. $IT_H + IT_g = 25 + 16 = 41$ $\\mu$m. ✓ $J_{\\min} > 0$ : ajustement avec jeu (tournant libre).'
      ],
      finalAnswer: '$J_{\\min} = 9$ $\\mu$m, $J_{\\max} = 50$ $\\mu$m. Ajustement H7/g6 avec jeu, $IT_J = 41$ $\\mu$m.'
    },

    evaluation: {
      title: 'Évaluation — CAO et Tolérancement',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'IT de la cote $30 \\pm 0{,}02$ mm (en mm).',
          type: 'numeric',
          answer: 0.04,
          tolerance: 0.001,
          unit: 'mm',
          points: 2,
          correction: '$IT = 30{,}02 - 29{,}98 = 0{,}04$ mm.'
        },
        {
          statement: 'Un alésage $H7$ ($\\varnothing 50$) a des écarts de $+0$ / $+25$ $\\mu$m. Un arbre $g6$ a des écarts de $-9$ / $-25$ $\\mu$m. Le jeu maximal vaut (en $\\mu$m) :',
          type: 'numeric',
          answer: 50,
          tolerance: 1,
          unit: 'µm',
          points: 3,
          correction: '$J_{\\max} = A_{\\max} - B_{\\min} = (50 + 0{,}025) - (50 - 0{,}025) = 0{,}050$ mm $= 50$ $\\mu$m.'
        },
        {
          statement: 'Dans une chaîne de cotes à 3 composantes ($IT_1 = 20$ $\\mu$m, $IT_2 = 15$ $\\mu$m, $IT_3 = 10$ $\\mu$m), la tolérance du jeu est :',
          type: 'multiple-choice',
          options: [
            '$IT_J = 20$ $\\mu$m (la plus grande)',
            '$IT_J = 15$ $\\mu$m (la moyenne)',
            '$IT_J = 45$ $\\mu$m (la somme)',
            '$IT_J = 10$ $\\mu$m (la plus petite)'
          ],
          answer: 2,
          points: 2,
          correction: 'Méthode arithmétique : $IT_J = \\sum IT_i = 20 + 15 + 10 = 45$ $\\mu$m.'
        },
        {
          statement: 'Le jeu minimal d\'un assemblage : alésage $A_{\\min} = 49{,}98$ mm, $A_{\\max} = 50{,}02$ mm ; arbre $B_{\\min} = 49{,}92$ mm, $B_{\\max} = 49{,}96$ mm (en mm) :',
          type: 'numeric',
          answer: 0.02,
          tolerance: 0.005,
          unit: 'mm',
          points: 3,
          correction: '$J_{\\min} = A_{\\min} - B_{\\max} = 49{,}98 - 49{,}96 = 0{,}02$ mm. Jeu toujours positif : ajustement avec jeu.'
        }
      ]
    }
  },

  /* -------------------------------------------------------
     8. Gestion de l'énergie (bilan énergétique)
     ------------------------------------------------------- */
  {
    id: 'si-bts-gestion-energie',
    level: 3, subject: 'si',
    icon: '🌱',
    title: 'Gestion de l\'Énergie',
    subtitle: 'Bilan de puissance, rendement global, stockage',
    keywords: ['Bilan énergétique', 'Rendement global', 'Pertes Joule', 'Batterie', 'Supercondensateur'],
    physics: 'La gestion de l\'énergie est un enjeu central : réduire les pertes, dimensionner les stockages (batteries, supercondensateurs), optimiser l\'efficacité des chaînes de conversion dans les systèmes industriels et embarqués.',

    cours: {
      intro: 'Tout système technique transforme de l\'énergie. À chaque conversion, une partie est dissipée (Joule, frottements, pertes fer). Le <strong>rendement</strong> $\\eta = P_u / P_a$ mesure l\'efficacité.<br/><br/>Pour une <strong>chaîne de conversion</strong> (batterie → variateur → moteur → réducteur → charge), le rendement global est le produit des rendements : $\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$. Il est toujours inférieur au plus petit rendement individuel.<br/><br/>Les <strong>pertes Joule</strong> $P_J = RI^2$ sont proportionnelles au carré du courant. C\'est pourquoi le transport d\'électricité se fait en haute tension (courant faible). Doubler le courant quadruple les pertes.<br/><br/>Le <strong>stockage d\'énergie</strong> est dimensionné par :<br/>- Condensateur / supercondensateur : $E = \\frac{1}{2}CV^2$ (énergie proportionnelle à $V^2$)<br/>- Inductance : $E = \\frac{1}{2}LI^2$<br/>- Batterie : $E = Q \\times U$ (capacité en Ah $\\times$ tension). Le <strong>C-rate</strong> indique le régime de charge/décharge : $1C$ = décharge en 1h, $2C$ = en 30 min, $0{,}5C$ = en 2h. Le courant correspondant est $I = C\\text{-rate} \\times Q$.<br/><br/>Un bilan de puissance complet identifie chaque source de pertes pour optimiser le système.',
      definitions: [
        { term: 'Rendement $\\eta$', def: '$\\eta = P_u / P_a$. Sans dimension, entre 0 et 1. Le complément $1 - \\eta$ est la fraction perdue en chaleur, frottements, etc.' },
        { term: 'Rendement global $\\eta_g$', def: '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$. Produit (pas somme ni moyenne) des rendements de chaque étage.' },
        { term: 'Pertes Joule $P_J$', def: '$P_J = RI^2$. Proportionnelles au carré du courant. Principale source de pertes dans les machines électriques et les câbles.' },
        { term: 'Énergie d\'un condensateur', def: '$E = \\frac{1}{2}CV^2$. Pour les supercondensateurs : $C$ de 1 à 3000 F, $V$ de 2{,}5 à 3 V par cellule. Forte puissance, énergie modérée.' },
        { term: 'Capacité batterie et C-rate', def: 'Capacité $Q$ en Ah. Énergie : $E = Q \\times U$ (Wh). C-rate : $1C$ = $Q$ en 1h. $I = C\\text{-rate} \\times Q$. Ex. : batterie 100 Ah à $2C$ → $I = 200$ A, décharge en 30 min.' }
      ],
      method: {
        title: 'Réaliser un bilan de puissance complet',
        steps: [
          'Identifier chaque étage de la chaîne et son rendement.<br/><strong>Exemple :</strong> Batterie ($\\eta_1 = 95\\%$) → Variateur ($\\eta_2 = 98\\%$) → Moteur ($\\eta_3 = 90\\%$) → Réducteur ($\\eta_4 = 85\\%$).',
          'Calculer le rendement global : $\\eta_g = 0{,}95 \\times 0{,}98 \\times 0{,}90 \\times 0{,}85 = 0{,}712 = 71{,}2\\%$.',
          'Calculer la puissance absorbée : $P_a = P_u / \\eta_g$.<br/><strong>Exemple :</strong> $P_u = 500$ W → $P_a = 500 / 0{,}712 = 702$ W. Pertes : $P_a - P_u = 202$ W.',
          'Dimensionner le stockage : autonomie $= E_{\\text{batterie}} / P_a$.<br/><strong>Exemple :</strong> Batterie 48 V, 100 Ah → $E = 4800$ Wh. Autonomie $= 4800/702 = 6{,}84$ h.'
        ]
      },
      example: {
        statement: 'Un véhicule électrique : batterie 48 V / 100 Ah, chaîne $\\eta_1 = 96\\%$ (batterie), $\\eta_2 = 97\\%$ (onduleur), $\\eta_3 = 92\\%$ (moteur). Puissance utile à la roue : $P_u = 5$ kW. Calculer le rendement global, la puissance absorbée, les pertes et l\'autonomie.',
        steps: [
          '$\\eta_g = 0{,}96 \\times 0{,}97 \\times 0{,}92 = 0{,}857 = 85{,}7\\%$.',
          '$P_a = P_u / \\eta_g = 5000 / 0{,}857 = 5834$ W.',
          'Pertes : $P_a - P_u = 5834 - 5000 = 834$ W.',
          'Énergie batterie : $E = Q \\times U = 100 \\times 48 = 4800$ Wh. Autonomie : $4800 / 5834 = 0{,}823$ h $\\approx 49$ min.'
        ],
        answer: '$\\eta_g = 85{,}7\\%$, $P_a = 5{,}83$ kW, pertes $= 834$ W, autonomie $\\approx 49$ min.'
      },
      formulas: [
        '$\\eta = \\dfrac{P_u}{P_a}$ (rendement)',
        '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$',
        '$P_{\\text{pertes}} = P_a - P_u = P_a(1 - \\eta)$',
        '$P_J = R \\times I^2$ (pertes Joule)',
        '$E = \\dfrac{1}{2}CV^2$ (condensateur/supercap)',
        '$E = \\dfrac{1}{2}LI^2$ (inductance)',
        '$E = Q \\times U$ (batterie, en Wh)'
      ],
      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Technologie</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Densité d\'énergie</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Densité de puissance</th><th style="border:1px solid var(--border);padding:8px;background:var(--bg-card)">Durée de vie</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Batterie Li-ion</td><td style="border:1px solid var(--border);padding:8px">150 – 250 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">250 – 1000 W/kg</td><td style="border:1px solid var(--border);padding:8px">500 – 2000 cycles</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Supercondensateur</td><td style="border:1px solid var(--border);padding:8px">5 – 15 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">5000 – 15000 W/kg</td><td style="border:1px solid var(--border);padding:8px">> 500 000 cycles</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Volant d\'inertie</td><td style="border:1px solid var(--border);padding:8px">10 – 50 Wh/kg</td><td style="border:1px solid var(--border);padding:8px">1000 – 5000 W/kg</td><td style="border:1px solid var(--border);padding:8px">> 1 000 000 cycles</td></tr></table>',
      recap: [
        'Le rendement global est un PRODUIT (pas une moyenne) : $\\eta_g = \\prod \\eta_i$.',
        'Les pertes Joule $P_J = RI^2$ sont proportionnelles au carré du courant.',
        'Condensateur : $E = \\frac{1}{2}CV^2$ (forte puissance, faible énergie). Batterie : $E = QU$ (forte énergie, puissance limitée).',
        'Le C-rate caractérise le régime de décharge : $1C$ = 1h, $2C$ = 30 min.',
        'Un bilan complet identifie chaque source de pertes pour optimiser le rendement global.'
      ],
      piege: 'Le rendement global est un PRODUIT, pas une moyenne. 3 étages à $90\\%$ donnent $\\eta_g = 0{,}9^3 = 72{,}9\\%$ (pas $90\\%$!). De même, ne pas confondre $E = \\frac{1}{2}CV^2$ (condensateur) et $E = QU$ (batterie) : les supercondensateurs ont beaucoup de puissance mais peu d\'énergie, les batteries c\'est l\'inverse.'
    },

    quiz: [
      {
        q: 'Le rendement global de 3 étages ($\\eta_1 = 95\\%$, $\\eta_2 = 90\\%$, $\\eta_3 = 85\\%$) est :',
        options: [
          '$\\eta_g = 95 + 90 + 85 = 270\\%$',
          '$\\eta_g = (95 + 90 + 85)/3 = 90\\%$',
          '$\\eta_g = 0{,}95 \\times 0{,}90 \\times 0{,}85 = 72{,}7\\%$',
          '$\\eta_g = \\min(95, 90, 85) = 85\\%$'
        ],
        answer: 2,
        correction: '$\\eta_g = 0{,}95 \\times 0{,}90 \\times 0{,}85 = 0{,}727 = 72{,}7\\%$. C\'est un produit, pas une somme ni une moyenne.'
      },
      {
        q: 'Un supercondensateur de $C = 100$ F chargé à $V = 2{,}5$ V stocke :',
        options: [
          '$E = 100 \\times 2{,}5 = 250$ J',
          '$E = \\frac{1}{2} \\times 100 \\times 2{,}5^2 = 312{,}5$ J',
          '$E = \\frac{1}{2} \\times 100 \\times 2{,}5 = 125$ J',
          '$E = 100 \\times 2{,}5^2 = 625$ J'
        ],
        answer: 1,
        correction: '$E = \\frac{1}{2}CV^2 = \\frac{1}{2} \\times 100 \\times 6{,}25 = 312{,}5$ J. Ne pas oublier le $\\frac{1}{2}$ et le carré de $V$.'
      },
      {
        q: 'Une batterie de 50 Ah à $2C$ délivre un courant de :',
        options: [
          '$I = 50$ A pendant 2 h',
          '$I = 100$ A pendant 30 min',
          '$I = 25$ A pendant 2 h',
          '$I = 50$ A pendant 30 min'
        ],
        answer: 1,
        correction: '$2C$ signifie $I = 2 \\times Q = 2 \\times 50 = 100$ A. Durée : $Q / I = 50/100 = 0{,}5$ h $= 30$ min. Le C-rate multiplie directement la capacité pour donner le courant.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['rendement', 'supercap', 'batterie']);
        if (scenario === 'rendement') {
          const n = rand(2, 4);
          const etas = [];
          let etaG = 1;
          const parts = [];
          for (let i = 0; i < n; i++) {
            const e = rand(80, 98);
            etas.push(e);
            etaG *= e / 100;
            parts.push(`$\\eta_${i + 1} = ${e}\\%$`);
          }
          const result = parseFloat((etaG * 100).toFixed(1));
          return {
            statement: `Une chaîne de conversion a ${n} étages : ${parts.join(', ')}. Calcule le rendement global (en %, arrondi à $0{,}1$).`,
            answer: result,
            tolerance: 0.5,
            unit: '%',
            hint: '$\\eta_g = \\eta_1 \\times \\eta_2 \\times \\cdots$ Convertis les % en décimaux avant de multiplier.',
            solution: [
              `$\\eta_g = ${etas.map(e => String(e / 100).replace('.', '{,')).join(' \\times ')}$`,
              `$\\eta_g = ${String(etaG.toFixed(4)).replace('.', '{,')} = ${String(result).replace('.', '{,')}\\%$`
            ]
          };
        } else if (scenario === 'supercap') {
          const C = pick([10, 50, 100, 200, 500]);
          const V = randFloat(2.0, 5.0, 1);
          const E = parseFloat((0.5 * C * V * V).toFixed(1));
          return {
            statement: `Un supercondensateur de $C = ${C}$ F est chargé à $V = ${String(V).replace('.', '{,')}$ V. Calcule l'énergie stockée $E = \\frac{1}{2}CV^2$ (en J, arrondi à $0{,}1$).`,
            answer: E,
            tolerance: 1,
            unit: 'J',
            hint: '$E = \\frac{1}{2}CV^2$. N\'oublie pas le $\\frac{1}{2}$ et le carré de $V$.',
            solution: [
              `$E = \\frac{1}{2} \\times ${C} \\times ${String(V).replace('.', '{,')}^2$`,
              `$= \\frac{1}{2} \\times ${C} \\times ${String(parseFloat((V * V).toFixed(2))).replace('.', '{,')}$`,
              `$= ${String(E).replace('.', '{,')}$ J`
            ]
          };
        } else {
          const Q = pick([20, 50, 100, 150]);
          const U = pick([12, 24, 48]);
          const E_Wh = Q * U;
          const E_kWh = parseFloat((E_Wh / 1000).toFixed(1));
          return {
            statement: `Une batterie a une capacité $Q = ${Q}$ Ah et une tension $U = ${U}$ V. Calcule l'énergie stockée (en Wh puis en kWh, donne la valeur en kWh arrondie à $0{,}1$).`,
            answer: E_kWh,
            tolerance: 0.1,
            unit: 'kWh',
            hint: '$E = Q \\times U$ donne le résultat en Wh. Diviser par $1000$ pour obtenir des kWh.',
            solution: [
              `$E = Q \\times U = ${Q} \\times ${U} = ${E_Wh}$ Wh`,
              `$E = ${E_Wh} / 1000 = ${String(E_kWh).replace('.', '{,')}$ kWh`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un véhicule électrique embarque une batterie Li-ion ($Q = 100$ Ah, $U = 48$ V) et un pack de supercondensateurs ($C = 60$ F, $V_{\\max} = 48$ V) pour le freinage régénératif. La chaîne de traction a un rendement global $\\eta_g = 82\\%$. Le véhicule roule à puissance utile constante $P_u = 8$ kW.',
      tasks: [
        'Calculer l\'énergie stockée dans la batterie ($E_B = Q \\times U$, en kWh) et dans les supercondensateurs ($E_C = \\frac{1}{2}CV^2$, en kJ et en Wh). Comparer.',
        'Calculer la puissance absorbée $P_a = P_u / \\eta_g$ et l\'autonomie sur batterie seule.',
        'Le véhicule freine de $60$ km/h à $0$ (masse $m = 800$ kg). L\'énergie cinétique récupérée est $E_k = \\frac{1}{2}mv^2$. Quel pourcentage de $E_k$ peut être absorbé par les supercondensateurs (supposés initialement déchargés) ?'
      ],
      solutions: [
        '$E_B = 100 \\times 48 = 4800$ Wh $= 4{,}8$ kWh. $E_C = \\frac{1}{2} \\times 60 \\times 48^2 = 69\\,120$ J $= 69{,}1$ kJ $= 19{,}2$ Wh. La batterie stocke $4800 / 19{,}2 = 250$ fois plus.',
        '$P_a = 8000 / 0{,}82 = 9756$ W. Autonomie $= E_B / P_a = 4800 / 9756 = 0{,}492$ h $\\approx 29{,}5$ min.',
        '$v = 60/3{,}6 = 16{,}67$ m/s. $E_k = \\frac{1}{2} \\times 800 \\times 16{,}67^2 = 111\\,111$ J $= 111{,}1$ kJ. Les supercaps absorbent $69{,}1$ kJ max, soit $69{,}1/111{,}1 = 62{,}2\\%$ de l\'énergie cinétique.'
      ],
      finalAnswer: '$E_B = 4{,}8$ kWh, $E_C = 69{,}1$ kJ ($19{,}2$ Wh), autonomie $\\approx 29{,}5$ min, récupération au freinage : $62{,}2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Gestion de l\'Énergie',
      duration: '20 min',
      questions: [
        {
          statement: 'Le rendement global de 3 étages ($\\eta_1 = 92\\%$, $\\eta_2 = 95\\%$, $\\eta_3 = 88\\%$) est (en %, arrondi à $0{,}1$) :',
          type: 'numeric',
          answer: 76.9,
          tolerance: 0.5,
          unit: '%',
          points: 2,
          correction: '$\\eta_g = 0{,}92 \\times 0{,}95 \\times 0{,}88 = 0{,}769 = 76{,}9\\%$.'
        },
        {
          statement: 'L\'énergie d\'un condensateur $C = 10$ F à $V = 5$ V est :',
          type: 'numeric',
          answer: 125,
          tolerance: 1,
          unit: 'J',
          points: 2,
          correction: '$E = \\frac{1}{2}CV^2 = \\frac{1}{2} \\times 10 \\times 25 = 125$ J.'
        },
        {
          statement: 'Une batterie de 100 Ah, 24 V. L\'énergie stockée est (en kWh) :',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.05,
          unit: 'kWh',
          points: 3,
          correction: '$E = Q \\times U = 100 \\times 24 = 2400$ Wh $= 2{,}4$ kWh.'
        },
        {
          statement: 'Les pertes Joule $P_J = RI^2$ : si on double le courant, les pertes sont :',
          type: 'multiple-choice',
          options: [
            'Doublées',
            'Quadruplées',
            'Inchangées',
            'Divisées par 2'
          ],
          answer: 1,
          points: 3,
          correction: '$P_J = R(2I)^2 = 4RI^2$ : les pertes sont quadruplées. C\'est pourquoi le transport haute tension (faible courant) minimise les pertes.'
        }
      ]
    }
  }

);
