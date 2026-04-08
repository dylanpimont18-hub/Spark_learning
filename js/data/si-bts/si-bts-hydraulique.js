/* =========================================================
   Spark Learning – data/si-bts/si-bts-hydraulique.js
   Extrait de si-bts.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
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
          '<strong>Section et pression</strong> : Identifier la pression $P$ et le diamètre du piston $D$. Calculer la section : $S = \\pi D^2 / 4$.<br/><strong>Exemple :</strong> $P = 150$ bar, $D = 80$ mm → $S = \\pi \\times 0{,}08^2 / 4 = 5{,}027 \\times 10^{-3}$ m².',
          '<strong>Force de poussée</strong> : Force de poussée : $F = P \\times S$. Convertir la pression en Pa : $150$ bar $= 150 \\times 10^5$ Pa.<br/><strong>Exemple :</strong> $F = 1{,}5 \\times 10^7 \\times 5{,}027 \\times 10^{-3} = 75{,}4$ kN.',
          '<strong>Rétraction avec tige</strong> : En rétraction, soustraire la section de la tige : $S_{\\text{ann}} = \\pi(D^2 - d^2)/4$.<br/><strong>Exemple :</strong> Tige $d = 40$ mm → $S_{\\text{ann}} = \\pi(0{,}08^2 - 0{,}04^2)/4 = 3{,}77 \\times 10^{-3}$ m² → $F_{\\text{ret}} = 56{,}5$ kN.',
          '<strong>Vitesse du vérin</strong> : Vitesse du vérin : $v = Q / S$, avec $Q$ le débit de la pompe (en m³/s).<br/><strong>Exemple :</strong> $Q = 15$ L/min $= 2{,}5 \\times 10^{-4}$ m³/s → $v = 2{,}5 \\times 10^{-4} / 5{,}027 \\times 10^{-3} = 0{,}050$ m/s $= 50$ mm/s.'
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
  });
