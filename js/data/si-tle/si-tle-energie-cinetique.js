/* =========================================================
   Spark Learning – data/si-tle/si-tle-energie-cinetique.js
   Extrait de si-tle.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-tle-energie-cinetique',
    level: 2, subject: 'si',
    icon: '💨',
    title: 'Énergie cinétique et théorème de l\'énergie cinétique',
    subtitle: 'Ec translation et rotation, travail d\'une force, TEC',
    keywords: ['Énergie cinétique', 'Travail', 'TEC', 'Vitesse', 'Distance d\'arrêt'],
    physics: 'Freinage automobile, balistique, crash-tests, dimensionnement de moteurs — tout calcul de vitesse atteinte ou de distance d\'arrêt.',

    cours: {
      intro: 'L\'<strong>énergie cinétique</strong> quantifie l\'énergie liée au mouvement d\'un solide. C\'est une grandeur scalaire, toujours positive ou nulle.<br/><br/>' +
        'En <strong>translation</strong> : $E_c = \\frac{1}{2} m v^2$ (en Joules). En <strong>rotation</strong> autour d\'un axe fixe : $E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$, où $\\omega$ est la vitesse angulaire en rad/s. Pour un mouvement combinant translation et rotation (ex. : une roue qui roule sans glisser), l\'énergie cinétique totale est la somme des deux termes.<br/><br/>' +
        'Le <strong>travail d\'une force</strong> constante $\\vec{F}$ sur un déplacement $\\vec{d}$ est $W = F \\cdot d \\cdot \\cos(\\alpha)$, où $\\alpha$ est l\'angle entre $\\vec{F}$ et $\\vec{d}$. Un travail <strong>positif</strong> (force motrice) accélère le système ; un travail <strong>négatif</strong> (force résistante, frottements) le freine. Si $\\alpha = 90°$, le travail est nul (force perpendiculaire au déplacement).<br/><br/>' +
        'Le <strong>théorème de l\'énergie cinétique</strong> (TEC) relie directement variation d\'énergie cinétique et travaux : $\\Delta E_c = E_{c,f} - E_{c,i} = \\sum W(\\vec{F}_{\\text{ext}})$. Le TEC est souvent plus pratique que le PFD quand on cherche une vitesse finale ou une distance d\'arrêt, car il évite de passer par les équations horaires.',

      definitions: [
        { term: 'Énergie cinétique de translation', def: '$E_c = \\frac{1}{2} m v^2$ (en J). Proportionnelle au carré de la vitesse : doubler $v$ quadruple $E_c$.' },
        { term: 'Énergie cinétique de rotation', def: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$ (en J). $J$ est le moment d\'inertie et $\\omega$ la vitesse angulaire.' },
        { term: 'Travail d\'une force', def: '$W = F \\cdot d \\cdot \\cos(\\alpha)$ (en J). Positif si la force est motrice, négatif si elle est résistante (frottements), nul si perpendiculaire.' },
        { term: 'Théorème de l\'énergie cinétique', def: '$\\Delta E_c = \\sum W(\\vec{F}_{\\text{ext}})$ — la variation d\'énergie cinétique entre deux instants est égale à la somme algébrique de tous les travaux.' }
      ],

      method: {
        title: 'Appliquer le TEC',
        steps: [
          '<strong>État initial / État final</strong> : identifier les vitesses $v_i$ et $v_f$ (ou l\'inconnue recherchée).<br/>Exemple : freinage → $v_i = 20$ m/s, $v_f = 0$.',
          '<strong>Calculer $\\Delta E_c$</strong> : $\\Delta E_c = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2$.<br/>Si le solide s\'arrête : $\\Delta E_c = -\\frac{1}{2} m v_i^2$ (négatif = perte d\'énergie).',
          '<strong>Bilan des travaux</strong> : recenser toutes les forces qui travaillent. Calculer $W = F \\cdot d \\cdot \\cos(\\alpha)$ pour chacune.<br/>Les frottements donnent un travail négatif : $W_f = -f \\times d$.',
          '<strong>Appliquer le TEC</strong> : $\\Delta E_c = \\sum W$. Résoudre pour l\'inconnue ($v_f$, $d$, ou $F$).',
          '<strong>Vérifier les signes</strong> : si $\\Delta E_c > 0$, le solide accélère ; si $\\Delta E_c < 0$, il ralentit. La distance d\'arrêt est toujours positive.'
        ]
      },

      example: {
        statement: 'Une voiture de $1\\,000$ kg roule à $v_i = 20$ m/s et freine jusqu\'à l\'arrêt ($v_f = 0$). La force de freinage est $F_f = 5\\,000$ N. Quelle est la distance d\'arrêt ?',
        steps: [
          '$\\Delta E_c = \\frac{1}{2} \\times 1000 \\times 0^2 - \\frac{1}{2} \\times 1000 \\times 20^2 = -200\\,000$ J',
          '$W_{\\text{frein}} = -F_f \\times d = -5000 \\times d$',
          'TEC : $-200\\,000 = -5000 \\times d$, soit $d = 40$ m'
        ],
        answer: '$d = 40$ m'
      },

      formulas: [
        '$E_c = \\dfrac{1}{2} m v^2$ — Énergie cinétique de translation',
        '$E_{c,\\text{rot}} = \\dfrac{1}{2} J \\omega^2$ — Énergie cinétique de rotation',
        '$W = F \\cdot d \\cdot \\cos(\\alpha)$ — Travail d\'une force constante',
        '$\\Delta E_c = \\sum W(\\vec{F}_{\\text{ext}})$ — Théorème de l\'énergie cinétique',
        '$d_{\\text{arrêt}} = \\dfrac{m v_i^2}{2 F_f}$ — Distance d\'arrêt (freinage pur)'
      ],

      diagram: '<table style="border-collapse:collapse;text-align:center;margin:auto;width:100%"><tr style="background:var(--bg-card);"><th style="border:1px solid var(--border);padding:8px">Grandeur</th><th style="border:1px solid var(--border);padding:8px">Translation</th><th style="border:1px solid var(--border);padding:8px">Rotation</th></tr><tr><td style="border:1px solid var(--border);padding:8px">Énergie cinétique</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2} m v^2$</td><td style="border:1px solid var(--border);padding:8px">$E_c = \\frac{1}{2} J \\omega^2$</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètre d\'inertie</td><td style="border:1px solid var(--border);padding:8px">Masse $m$ (kg)</td><td style="border:1px solid var(--border);padding:8px">Moment d\'inertie $J$ (kg·m²)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Paramètre cinématique</td><td style="border:1px solid var(--border);padding:8px">Vitesse $v$ (m/s)</td><td style="border:1px solid var(--border);padding:8px">Vitesse angulaire $\\omega$ (rad/s)</td></tr><tr><td style="border:1px solid var(--border);padding:8px">Travail / Puissance</td><td style="border:1px solid var(--border);padding:8px">$W = F \\cdot d \\cdot \\cos \\alpha$</td><td style="border:1px solid var(--border);padding:8px">$W = M \\cdot \\theta$</td></tr></table>',

      recap: [
        'L\'énergie cinétique est proportionnelle à $v^2$ : doubler la vitesse quadruple l\'énergie (et la distance de freinage).',
        'Le TEC relie directement travaux et variation de vitesse, sans passer par les équations horaires.',
        'Un travail positif (force motrice) accélère le système, un travail négatif (frottements) le freine.',
        'Quand utiliser le TEC plutôt que le PFD ? Quand on cherche une vitesse ou une distance sans avoir besoin de connaître $a(t)$.'
      ],

      piege: 'L\'énergie cinétique est proportionnelle à $v^2$, pas à $v$ ! Si la vitesse double, l\'énergie cinétique est multipliée par $4$ (et la distance de freinage aussi). Autre erreur fréquente : oublier le $\\cos(\\alpha)$ dans le calcul du travail — si la force est perpendiculaire au déplacement ($\\alpha = 90°$), son travail est nul, elle ne contribue donc pas à la variation d\'énergie cinétique.'
    },

    quiz: [
      {
        q: 'L\'énergie cinétique d\'un véhicule de $800$ kg roulant à $v = 10$ m/s vaut :',
        options: [
          '$E_c = 40\\,000$ J',
          '$E_c = 8\\,000$ J',
          '$E_c = 80\\,000$ J',
          '$E_c = 4\\,000$ J'
        ],
        answer: 0,
        correction: '$E_c = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 800 \\times 10^2 = 400 \\times 100 = 40\\,000$ J. Bien penser à élever la vitesse au carré avant de multiplier !'
      },
      {
        q: 'Si la vitesse d\'un véhicule est doublée, sa distance de freinage est :',
        options: [
          'Multipliée par 4',
          'Doublée',
          'Multipliée par 8',
          'Inchangée'
        ],
        answer: 0,
        correction: '$d = \\frac{m v^2}{2 F_f}$. Si $v$ est remplacée par $2v$ : $d\' = \\frac{m (2v)^2}{2 F_f} = 4 \\times \\frac{m v^2}{2 F_f} = 4d$. La distance de freinage est proportionnelle à $v^2$, ce qui explique le danger des excès de vitesse.'
      },
      {
        q: 'Un volant d\'inertie ($J = 0{,}4$ kg·m²) tourne à $\\omega = 50$ rad/s. Son énergie cinétique de rotation vaut :',
        options: [
          '$E_c = 500$ J',
          '$E_c = 1000$ J',
          '$E_c = 20$ J',
          '$E_c = 250$ J'
        ],
        answer: 0,
        correction: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2 = \\frac{1}{2} \\times 0{,}4 \\times 50^2 = 0{,}2 \\times 2500 = 500$ J.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick(['arret', 'rotation', 'acceleration']);
        if (scenario === 'arret') {
          const m = rand(500, 2000);
          const vi = rand(10, 30);
          const F = rand(2000, 8000);
          const d = parseFloat(((0.5 * m * vi * vi) / F).toFixed(1));
          return {
            statement: `Un véhicule de masse $m = ${m}$ kg roule à $v_i = ${vi}$ m/s et freine jusqu'à l'arrêt ($v_f = 0$). La force de freinage constante est $F_f = ${F}$ N. Calcule la distance d'arrêt $d$ (en m).`,
            answer: d,
            tolerance: 0.5,
            unit: 'm',
            hint: `Utilise le TEC : $\\Delta E_c = W_{\\text{frein}}$. Ici $\\Delta E_c = -\\frac{1}{2} m v_i^2$ et $W_{\\text{frein}} = -F_f \\times d$.`,
            solution: [
              `$\\Delta E_c = 0 - \\frac{1}{2} \\times ${m} \\times ${vi}^2 = -${0.5 * m * vi * vi}$ J`,
              `$W_{\\text{frein}} = -${F} \\times d$`,
              `TEC : $-${0.5 * m * vi * vi} = -${F} \\times d$`,
              `$d = \\dfrac{${0.5 * m * vi * vi}}{${F}} = ${d}$ m`
            ]
          };
        } else if (scenario === 'rotation') {
          const J = randFloat(0.1, 2, 1);
          const omega = rand(20, 100);
          const Ec = parseFloat((0.5 * J * omega * omega).toFixed(0));
          return {
            statement: `Un volant d'inertie a un moment d'inertie $J = ${J.toFixed(1).replace('.', '{,}')}$ kg·m² et tourne à $\\omega = ${omega}$ rad/s. Calcule son énergie cinétique de rotation (en J).`,
            answer: Ec,
            tolerance: 1,
            unit: 'J',
            hint: `Utilise la formule $E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2$.`,
            solution: [
              `$E_{c,\\text{rot}} = \\frac{1}{2} \\times ${J.toFixed(1).replace('.', '{,')} \\times ${omega}^2$`,
              `$E_{c,\\text{rot}} = ${(0.5 * J).toFixed(2).replace('.', '{,')} \\times ${omega * omega}$`,
              `$E_{c,\\text{rot}} = ${Ec}$ J`
            ]
          };
        } else {
          const m = rand(30, 100);
          const F_mot = rand(100, 500);
          const f_frot = rand(10, 80);
          const d = rand(5, 20);
          const vf = parseFloat(Math.sqrt(2 * (F_mot - f_frot) * d / m).toFixed(1));
          return {
            statement: `Un chariot de $m = ${m}$ kg part du repos. Il est poussé par $F = ${F_mot}$ N sur $d = ${d}$ m avec des frottements $f = ${f_frot}$ N. Calcule la vitesse finale $v_f$ (en m/s).`,
            answer: vf,
            tolerance: 0.2,
            unit: 'm/s',
            hint: `TEC : $\\frac{1}{2} m v_f^2 = (F - f) \\times d$, donc $v_f = \\sqrt{\\dfrac{2(F-f) d}{m}}$.`,
            solution: [
              `$W_F = ${F_mot} \\times ${d} = ${F_mot * d}$ J, $W_f = -${f_frot} \\times ${d} = -${f_frot * d}$ J`,
              `$\\Delta E_c = \\frac{1}{2} m v_f^2 = ${F_mot * d} - ${f_frot * d} = ${(F_mot - f_frot) * d}$ J`,
              `$v_f = \\sqrt{\\dfrac{2 \\times ${(F_mot - f_frot) * d}}{${m}}} \\approx ${vf}$ m/s`
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un chariot de masse $m = 50$ kg part du repos ($v_i = 0$) et est poussé par une force constante $F = 200$ N sur un sol horizontal avec des frottements $f = 50$ N. On veut déterminer sa vitesse après un déplacement de $d = 10$ m.',
      tasks: [
        'Calculer le travail de la force motrice $W_F$ et le travail des frottements $W_f$ sur $d = 10$ m.',
        'Appliquer le TEC pour exprimer $v_f$ en fonction des travaux.',
        'Calculer numériquement la vitesse finale $v_f$.'
      ],
      solutions: [
        '$W_F = F \\times d = 200 \\times 10 = 2000$ J. $W_f = -f \\times d = -50 \\times 10 = -500$ J.',
        '$\\Delta E_c = \\frac{1}{2} m v_f^2 - 0 = W_F + W_f$, soit $v_f = \\sqrt{\\dfrac{2(W_F + W_f)}{m}}$.',
        '$v_f = \\sqrt{\\dfrac{2 \\times 1500}{50}} = \\sqrt{60} \\approx 7{,}75$ m/s.'
      ],
      finalAnswer: '$v_f \\approx 7{,}75$ m/s, soit environ $28$ km/h.'
    },

    evaluation: {
      title: 'Évaluation — Énergie cinétique et TEC',
      duration: '20 min',
      questions: [
        {
          statement: 'Calculer l\'énergie cinétique d\'un objet de masse $m = 5$ kg se déplaçant à $v = 6$ m/s (en J).',
          type: 'numeric',
          answer: 90,
          tolerance: 0.5,
          unit: 'J',
          points: 2,
          correction: '$E_c = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 5 \\times 6^2 = 2{,}5 \\times 36 = 90$ J.'
        },
        {
          statement: 'Un objet de $2$ kg passe de $v_i = 3$ m/s à $v_f = 7$ m/s. Quelle est la variation d\'énergie cinétique $\\Delta E_c$ (en J) ?',
          type: 'numeric',
          answer: 40,
          tolerance: 0.5,
          unit: 'J',
          points: 2,
          correction: '$\\Delta E_c = \\frac{1}{2} \\times 2 \\times (7^2 - 3^2) = 1 \\times (49 - 9) = 40$ J. Le solide a gagné de l\'énergie cinétique.'
        },
        {
          statement: 'Le travail d\'une force perpendiculaire au déplacement est :',
          type: 'multiple-choice',
          options: ['Positif', 'Négatif', 'Nul', 'Dépend de l\'intensité de la force'],
          answer: 2,
          points: 2,
          correction: '$W = F \\cdot d \\cdot \\cos(90°) = F \\cdot d \\times 0 = 0$. Une force perpendiculaire au déplacement ne travaille pas et ne modifie pas l\'énergie cinétique.'
        },
        {
          statement: 'Une moto de $200$ kg roule à $v = 20$ m/s. Quelle force de freinage constante faut-il pour l\'arrêter en $d = 50$ m ? (en N)',
          type: 'numeric',
          answer: 800,
          tolerance: 5,
          unit: 'N',
          points: 2,
          correction: 'TEC : $0 - \\frac{1}{2} \\times 200 \\times 20^2 = -F \\times 50$. Donc $-40\\,000 = -50 F$, soit $F = 800$ N.'
        },
        {
          statement: 'Un volant d\'inertie ($J = 0{,}5$ kg·m²) tourne à $\\omega = 100$ rad/s. Son énergie cinétique de rotation vaut (en J) :',
          type: 'numeric',
          answer: 2500,
          tolerance: 10,
          unit: 'J',
          points: 2,
          correction: '$E_{c,\\text{rot}} = \\frac{1}{2} J \\omega^2 = \\frac{1}{2} \\times 0{,}5 \\times 100^2 = 0{,}25 \\times 10\\,000 = 2\\,500$ J.'
        }
      ]
    }
  });
