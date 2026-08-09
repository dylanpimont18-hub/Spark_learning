/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a1-1-thermique-tubes.js
   BTS FED — S8-A1-1 Thermique des tubes
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a1-1-thermique-tubes',
    level: 3, subject: 'fed',
    icon: '🔥',
    title: 'Thermique des tubes',
    subtitle: 'Flux linéique, isolation et évolution des températures dans les réseaux',
    keywords: ['Flux linéique', 'Résistance thermique', 'Isolation', 'Calorifugeage', 'Conduction cylindrique'],
    physics: 'Chaque mètre de tuyauterie non isolée dans un réseau de chauffage ou d\'ECS perd de la chaleur en continu, jour et nuit, toute la saison. Sur un réseau collectif de plusieurs centaines de mètres, ces pertes se chiffrent vite en milliers d\'euros par an : c\'est pourquoi le calorifugeage (l\'isolation des tuyauteries) est une étape de dimensionnement à part entière en génie climatique.',

    cours: {
      intro: 'Un tube qui transporte un fluide chaud (ou froid) perd de l\'énergie vers l\'ambiance par <strong>conduction</strong> à travers sa paroi puis, s\'il est isolé, à travers la couche d\'isolant.<br/><br/>La différence essentielle avec une paroi plane (un mur, par exemple) est que la <strong>surface d\'échange augmente avec le rayon</strong> : plus on s\'éloigne du centre du tube, plus la chaleur se répartit sur une surface cylindrique de plus en plus grande. La résistance thermique d\'une couche cylindrique ne s\'écrit donc pas comme celle d\'une paroi plane.',
      definitions: [
        { term: 'Flux thermique linéique $\\varphi$', def: 'Puissance perdue par mètre de tube, en W/m. C\'est la grandeur de référence en thermique des réseaux, indépendante de la longueur totale du tronçon.' },
        { term: 'Résistance thermique linéique $R_{\\text{lin}}$', def: 'Pour une couche cylindrique de rayon intérieur $r_1$, de rayon extérieur $r_2$ et de conductivité $\\lambda$ : $R_{\\text{lin}} = \\dfrac{\\ln(r_2/r_1)}{2\\pi\\lambda}$, en m·K/W. Le rapport $r_2/r_1$ est sans dimension : peu importe l\'unité des rayons, tant qu\'elle est la même pour les deux.' },
        { term: 'Conductivité thermique $\\lambda$', def: 'Caractéristique du matériau, en W/(m·K). Un métal (acier $\\lambda \\approx 50$, cuivre $\\lambda \\approx 380$) conduit très bien la chaleur : sa résistance propre est presque négligeable. Un isolant (laine minérale, mousse) a $\\lambda \\approx 0{,}035$ à $0{,}04$ : c\'est lui qui fait presque toute la résistance du système.' },
        { term: 'Résistances en série', def: 'Quand plusieurs couches cylindriques concentriques se succèdent (tube, isolant), leurs résistances linéiques s\'additionnent : $R_{\\text{tot}} = \\sum R_{\\text{lin},i}$, exactement comme des résistances électriques en série.' }
      ],
      method: {
        title: 'Calculer le flux thermique linéique perdu par une tuyauterie isolée',
        steps: [
          '<strong>Identifier les rayons</strong> : repérer $r_1$ (rayon extérieur du tube nu) et $r_2$ (rayon extérieur après isolation, donc $r_2 = r_1 + $ épaisseur d\'isolant), ainsi que la conductivité $\\lambda$ de l\'isolant. La résistance propre du tube métallique est négligée (métal très conducteur devant l\'isolant).',
          '<strong>Résistance linéique</strong> : $R_{\\text{lin}} = \\dfrac{\\ln(r_2/r_1)}{2\\pi\\lambda}$, en m·K/W.',
          '<strong>Écart de température</strong> : $\\Delta T = T_{\\text{fluide}} - T_{\\text{ambiant}}$.',
          '<strong>Flux linéique</strong> : $\\varphi = \\dfrac{\\Delta T}{R_{\\text{lin}}}$, en W/m.',
          '<strong>Déperdition totale</strong> sur une longueur $L$ de réseau, si besoin : $Q = \\varphi \\times L$, en W.'
        ]
      },
      example: {
        statement: 'Un tube en acier de rayon extérieur $r_1 = 30$ mm transporte de l\'eau de chauffage à $T_f = 80\\,°C$. Il est isolé par $40$ mm de laine de verre ($\\lambda = 0{,}04$ W/(m·K)) dans un local technique à $T_a = 15\\,°C$. Calcule le flux linéique perdu.',
        steps: [
          '$r_2 = r_1 + 40 = 30 + 40 = 70$ mm.',
          '$r_2/r_1 = 70/30 \\approx 2{,}333$, donc $\\ln(r_2/r_1) \\approx 0{,}847$.',
          '$R_{\\text{lin}} = \\dfrac{0{,}847}{2\\pi \\times 0{,}04} \\approx \\dfrac{0{,}847}{0{,}251} \\approx 3{,}37$ m·K/W.',
          '$\\Delta T = 80 - 15 = 65\\,°C$.',
          '$\\varphi = \\dfrac{65}{3{,}37} \\approx 19{,}3$ W/m.'
        ],
        answer: 'Sur 10 m de réseau, la déperdition totale serait $Q \\approx 193$ W — l\'équivalent d\'une ampoule allumée en permanence, rien que pour ce tronçon.'
      },
      formulas: [
        '$R_{\\text{lin}} = \\dfrac{\\ln(r_2/r_1)}{2\\pi\\lambda}$ (résistance thermique linéique d\'une couche cylindrique)',
        '$\\varphi = \\dfrac{\\Delta T}{R_{\\text{lin}}}$ (flux thermique linéique, W/m)',
        '$Q = \\varphi \\times L$ (déperdition totale sur une longueur $L$)',
        '$R_{\\text{tot}} = \\sum R_{\\text{lin},i}$ (couches cylindriques en série)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Coupe d\'une tuyauterie calorifugée',
        title: 'Tube de rayon r₁, isolé jusqu\'au rayon r₂, conductivité λ',
        description: 'Vue en coupe : le fluide chaud circule au centre, la couche d\'isolant entoure le tube, la chaleur s\'échappe radialement (flux φ) vers l\'air ambiant plus froid.',
        svg: `
          <svg viewBox="0 0 420 280" role="img" aria-labelledby="tube-graph-title tube-graph-desc">
            <title id="tube-graph-title">Coupe d'une tuyauterie isolée</title>
            <desc id="tube-graph-desc">Vue en coupe d'un tube calorifuge : le tube central de rayon r1 conduit le fluide chaud, entoure d'une couche isolante jusqu'au rayon r2, avant l'air ambiant plus froid.</desc>

            <defs>
              <marker id="flow-arrow-tube" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
              <marker id="dim-arrow-tube" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" markerUnits="userSpaceOnUse" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))"></path>
              </marker>
            </defs>

            <!-- couche isolante -->
            <circle class="frame-line" cx="210" cy="140" r="90" fill="color-mix(in srgb, var(--diagram-accent) 16%, var(--bg-card))"></circle>
            <!-- tube (metal) -->
            <circle class="frame-line" cx="210" cy="140" r="42" fill="color-mix(in srgb, var(--diagram-accent) 45%, var(--bg-card))"></circle>
            <!-- fluide -->
            <circle cx="210" cy="140" r="28" fill="color-mix(in srgb, var(--diagram-accent) 70%, var(--bg-card))"></circle>

            <!-- rayon r1 -->
            <line x1="210" y1="140" x2="210" y2="98" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-tube)" marker-end="url(#dim-arrow-tube)"></line>
            <text class="annotation-label" x="216" y="118" text-anchor="start">r₁</text>

            <!-- rayon r2 -->
            <line x1="210" y1="140" x2="210" y2="50" stroke="color-mix(in srgb, var(--text) 80%, var(--diagram-accent))" stroke-width="1.4" marker-start="url(#dim-arrow-tube)" marker-end="url(#dim-arrow-tube)"></line>
            <text class="annotation-label" x="234" y="70" text-anchor="start">r₂</text>

            <!-- fleche flux sortant -->
            <line class="curve-main" x1="272" y1="140" x2="330" y2="140" marker-end="url(#flow-arrow-tube)"></line>
            <text class="annotation-label" x="335" y="136" text-anchor="start">φ</text>

            <!-- labels -->
            <text class="label-soft" x="210" y="20" text-anchor="middle">Isolant (λ)</text>
            <text class="label-soft" x="210" y="145" text-anchor="middle" font-size="11" font-weight="700">Tf</text>
            <text class="tick-label" x="210" y="262" text-anchor="middle">Ta (air ambiant)</text>
          </svg>
        `,
        notes: [
          'Le rayon r₁ correspond au tube nu (métal), r₂ au rayon extérieur après isolation — c\'est la différence r₂ − r₁ qui donne l\'épaisseur d\'isolant, mais c\'est leur rapport $r_2/r_1$ qui compte dans le calcul.',
          'La flèche φ représente le flux linéique qui traverse la couche isolante par conduction, avant d\'être évacué vers l\'air ambiant.',
          'Plus la couche isolante est épaisse (r₂ grand devant r₁), plus $\\ln(r_2/r_1)$ augmente et plus φ diminue — mais pas proportionnellement, à cause du logarithme.'
        ],
        reading: 'Repère d\'abord le cercle central (le fluide chaud), puis l\'anneau isolant qui l\'entoure : c\'est l\'épaisseur de cet anneau, rapportée au rayon du tube, qui détermine la résistance thermique.',
        caption: 'Coupe de principe d\'une tuyauterie calorifugée (rayon tube r₁, rayon extérieur isolé r₂, conductivité isolant λ).'
      },
      recap: [
        'En géométrie cylindrique, la résistance thermique d\'une couche dépend du rapport des rayons $\\ln(r_2/r_1)$, pas de l\'épaisseur brute comme pour une paroi plane.',
        'Le flux linéique $\\varphi = \\Delta T / R_{\\text{lin}}$ s\'exprime en W par mètre de réseau.',
        'La résistance du tube métallique est négligeable devant celle de l\'isolant : c\'est l\'épaisseur et la conductivité de l\'isolant qui pilotent les pertes.',
        'Doubler l\'épaisseur d\'isolant ne divise pas le flux par deux, car la relation est logarithmique.'
      ],
      piege: 'Beaucoup d\'étudiants utilisent par réflexe la formule des parois planes $R = e/\\lambda$ pour une tuyauterie, ce qui sous-estime la résistance réelle car la surface d\'échange augmente avec le rayon. Attention : en géométrie cylindrique, utilise toujours $R_{\\text{lin}} = \\ln(r_2/r_1)/(2\\pi\\lambda)$, avec $r_1$ et $r_2$ exprimés dans la même unité.'
    },

    quiz: [
      {
        q: 'Pourquoi la résistance thermique d\'une couche isolante autour d\'un tube ne s\'écrit-elle pas simplement $R = e/\\lambda$ comme pour une paroi plane ?',
        options: [
          'Parce que la conductivité de l\'isolant change avec le rayon',
          'Parce que la surface d\'échange augmente avec le rayon : le flux se répartit sur une surface croissante',
          'Parce que la température ambiante varie autour du tube',
          'Ce n\'est pas différent, on peut utiliser la même formule'
        ],
        answer: 1,
        correction: 'Dans une paroi plane, la surface d\'échange est constante. Autour d\'un tube, elle augmente avec le rayon (surface d\'un cylindre $= 2\\pi r L$) : c\'est ce qui introduit le logarithme dans $R_{\\text{lin}} = \\ln(r_2/r_1)/(2\\pi\\lambda)$.'
      },
      {
        q: 'Un tube de rayon extérieur $r_1 = 25$ mm est isolé ($\\lambda = 0{,}035$ W/(m·K)) jusqu\'à un rayon $r_2 = 55$ mm. La résistance thermique linéique vaut environ :',
        options: [
          '$3{,}59$ m·K/W',
          '$0{,}86$ m·K/W',
          '$22{,}5$ m·K/W',
          '$7{,}17$ m·K/W'
        ],
        answer: 0,
        correction: '$\\ln(55/25) = \\ln(2{,}2) \\approx 0{,}788$. $R_{\\text{lin}} = 0{,}788 / (2\\pi \\times 0{,}035) \\approx 0{,}788/0{,}220 \\approx 3{,}59$ m·K/W. La valeur $0{,}86$ correspond à l\'erreur classique $R=e/\\lambda$ (formule des parois planes) ; $22{,}5$ correspond à l\'oubli du facteur $2\\pi$.'
      },
      {
        q: 'Si on double l\'épaisseur d\'isolant (à conductivité constante), le flux linéique perdu $\\varphi$ :',
        options: [
          'Double',
          'Est divisé par deux',
          'Diminue, mais pas proportionnellement, car $R_{\\text{lin}}$ dépend du logarithme du rapport des rayons',
          'Reste inchangé'
        ],
        answer: 2,
        correction: '$R_{\\text{lin}}$ dépend de $\\ln(r_2/r_1)$ : doubler l\'épaisseur ne double pas ce rapport de la même façon selon la valeur de départ de $r_1$. Le flux diminue donc, mais la relation n\'est pas linéaire — au-delà d\'une certaine épaisseur, isoler davantage rapporte de moins en moins.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const scenario = pick([
          { desc: 'réseau de chauffage collectif' },
          { desc: 'réseau de distribution d\'eau chaude sanitaire' },
          { desc: 'colonne montante de chauffage' }
        ]);
        const isolant = pick([
          { nom: 'laine de verre', lambda: 0.035 },
          { nom: 'laine de roche', lambda: 0.038 },
          { nom: 'mousse élastomère', lambda: 0.040 }
        ]);
        const r1 = rand(15, 35);
        const ep = rand(20, 50);
        const r2 = r1 + ep;
        const Tf = rand(60, 85);
        const Ta = rand(10, 20);
        const ratio = r2 / r1;
        const lnRatio = Math.log(ratio);
        const R_lin = lnRatio / (2 * Math.PI * isolant.lambda);
        const deltaT = Tf - Ta;
        const phi = deltaT / R_lin;
        const phi_r = parseFloat(phi.toFixed(1));
        const tolerance = parseFloat(Math.max(0.5, phi_r * 0.05).toFixed(2));
        return {
          statement: `Un ${scenario.desc} utilise un tube de rayon extérieur $r_1 = ${r1}$ mm, isolé avec une couche de ${isolant.nom} ($\\lambda = ${fr(isolant.lambda, 3)}$ W/(m·K)) jusqu'à un rayon $r_2 = ${r2}$ mm. Le fluide circule à $T_f = ${Tf}\\,°C$, le local technique est à $T_a = ${Ta}\\,°C$. Calcule le flux thermique linéique perdu $\\varphi$ (en W/m, arrondi à $0{,}1$).`,
          answer: phi_r,
          tolerance: tolerance,
          unit: 'W/m',
          hint: 'Calcule d\'abord $R_{\\text{lin}} = \\ln(r_2/r_1)/(2\\pi\\lambda)$ (le rapport $r_2/r_1$ est sans dimension), puis $\\varphi = \\Delta T / R_{\\text{lin}}$.',
          solution: [
            `$r_2/r_1 = ${r2}/${r1} \\approx ${fr(parseFloat(ratio.toFixed(3)), 3)}$`,
            `$R_{\\text{lin}} = \\ln(${fr(parseFloat(ratio.toFixed(3)), 3)}) / (2\\pi \\times ${fr(isolant.lambda, 3)}) \\approx ${fr(parseFloat(R_lin.toFixed(3)), 3)}$ m·K/W`,
            `$\\Delta T = ${Tf} - ${Ta} = ${deltaT}\\,°C$`,
            `$\\varphi = \\Delta T / R_{\\text{lin}} \\approx ${fr(phi_r, 1)}$ W/m`
          ]
        };
      }
    },

    probleme: {
      context: 'Un réseau de distribution de chauffage collectif comporte $120$ m de tuyauterie calorifugée. Le tube (acier) a un rayon extérieur $r_1 = 20$ mm, isolé sur une épaisseur de $30$ mm par de la laine de roche ($\\lambda = 0{,}038$ W/(m·K)). La température moyenne de l\'eau est de $75\\,°C$, le réseau traverse un vide sanitaire à $12\\,°C$ en moyenne. Le chauffage fonctionne $1\\,800$ heures par an à ce régime.',
      tasks: [
        'Calculer la résistance thermique linéique de l\'isolant.',
        'Calculer le flux linéique perdu $\\varphi$, puis la déperdition totale sur les $120$ m de réseau.',
        'Estimer l\'énergie annuelle perdue (en kWh) sur la période de fonctionnement donnée.'
      ],
      solutions: [
        '$r_2 = 20 + 30 = 50$ mm. $r_2/r_1 = 50/20 = 2{,}5$, $\\ln(2{,}5) \\approx 0{,}916$. $R_{\\text{lin}} = 0{,}916/(2\\pi \\times 0{,}038) \\approx 0{,}916/0{,}239 \\approx 3{,}84$ m·K/W.',
        '$\\Delta T = 75 - 12 = 63\\,°C$. $\\varphi = 63/3{,}84 \\approx 16{,}4$ W/m. $Q_{\\text{total}} = 16{,}4 \\times 120 \\approx 1\\,970$ W $\\approx 1{,}97$ kW.',
        '$E = Q_{\\text{total}} \\times 1\\,800\\,\\text{h} \\approx 1{,}97 \\times 1\\,800 \\approx 3\\,546$ kWh/an.'
      ],
      finalAnswer: '$R_{\\text{lin}} \\approx 3{,}84$ m·K/W ; $\\varphi \\approx 16{,}4$ W/m ; $Q_{\\text{total}} \\approx 1{,}97$ kW ; énergie annuelle perdue $\\approx 3\\,546$ kWh — soit l\'équivalent de la consommation de plusieurs logements, uniquement en pertes de réseau.'
    },

    evaluation: {
      title: 'Évaluation — Thermique des tubes',
      duration: '15 min',
      questions: [
        {
          statement: 'Un tube de rayon extérieur $r_1 = 25$ mm est isolé jusqu\'à $r_2 = 60$ mm avec $\\lambda = 0{,}036$ W/(m·K). Calcule la résistance thermique linéique $R_{\\text{lin}}$ (en m·K/W, arrondi à $0{,}01$).',
          type: 'numeric',
          answer: 3.87,
          tolerance: 0.05,
          unit: 'm·K/W',
          points: 3,
          correction: '$r_2/r_1 = 60/25 = 2{,}4$. $\\ln(2{,}4) \\approx 0{,}875$. $R_{\\text{lin}} = 0{,}875/(2\\pi \\times 0{,}036) \\approx 0{,}875/0{,}226 \\approx 3{,}87$ m·K/W.'
        },
        {
          statement: 'Lequel de ces changements AUGMENTE le flux linéique perdu $\\varphi$ ?',
          type: 'multiple-choice',
          options: [
            'Augmenter l\'épaisseur d\'isolant',
            'Diminuer la conductivité $\\lambda$ de l\'isolant',
            'Augmenter l\'écart de température $\\Delta T$',
            'Diminuer le rayon extérieur du tube nu $r_1$, à isolation égale'
          ],
          answer: 2,
          points: 2,
          correction: '$\\varphi = \\Delta T / R_{\\text{lin}}$ : augmenter $\\Delta T$ augmente directement $\\varphi$. Les trois autres options augmentent $R_{\\text{lin}}$, donc diminuent $\\varphi$.'
        },
        {
          statement: 'Pour le tube de la question 1, avec $T_f = 70\\,°C$ et $T_a = 15\\,°C$, calcule le flux linéique perdu $\\varphi$ (en W/m, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 14.2,
          tolerance: 0.5,
          unit: 'W/m',
          points: 3,
          correction: '$\\Delta T = 70 - 15 = 55\\,°C$. $\\varphi = 55/3{,}87 \\approx 14{,}2$ W/m.'
        },
        {
          statement: 'Dans un réseau de distribution CVC, le calorifugeage des tuyauteries permet principalement de :',
          type: 'multiple-choice',
          options: [
            'Augmenter la pression du fluide',
            'Réduire les pertes thermiques et l\'énergie consommée',
            'Diminuer le diamètre nécessaire des tubes',
            'Supprimer le besoin de purger le réseau'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'isolation limite les déperditions le long du réseau, ce qui réduit l\'énergie à produire pour maintenir la température au point d\'usage — c\'est un enjeu à la fois économique et réglementaire (RE2020).'
        },
        {
          statement: 'On double l\'épaisseur d\'isolant du tube de la question 1 (nouveau $r_2 = 95$ mm, $r_1$ et $\\lambda$ inchangés). Avec le même $\\Delta T = 55\\,°C$, calcule le nouveau flux linéique $\\varphi\'$ (en W/m, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 9.3,
          tolerance: 0.5,
          unit: 'W/m',
          points: 3,
          correction: '$r_2/r_1 = 95/25 = 3{,}8$. $\\ln(3{,}8) \\approx 1{,}335$. $R_{\\text{lin}}\' = 1{,}335/(2\\pi \\times 0{,}036) \\approx 5{,}90$ m·K/W. $\\varphi\' = 55/5{,}90 \\approx 9{,}3$ W/m — le flux a baissé d\'environ 35 %, pas de moitié, malgré le doublement de l\'épaisseur.'
        }
      ]
    }
  });
