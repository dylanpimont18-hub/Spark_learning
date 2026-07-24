/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-thermodynamique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-thermodynamique',
    level: 3, subject: 'physique',
    icon: '🌡️',
    title: 'Thermodynamique appliquée',
    subtitle: 'Chaleur sensible, chaleur latente, conduction thermique (loi de Fourier), résistance thermique',
    keywords: ['Chaleur', 'Fourier', 'Conduction', 'Isolation', 'Bilan thermique'],
    physics: 'La thermodynamique appliquée guide le dimensionnement des systèmes de chauffage et de climatisation, le choix des matériaux isolants du bâtiment, le calcul des déperditions thermiques, et le dimensionnement des ballons d\'eau chaude et échangeurs thermiques.',

    cours: {
      intro: 'La <strong>thermodynamique appliquée</strong> étudie les échanges de chaleur ($Q$, en joules) entre un système et son environnement, indispensable pour dimensionner un chauffage, une isolation, ou un échangeur thermique.<br/><br/>On distingue deux types de chaleur échangée : la <strong>chaleur sensible</strong>, qui fait varier la température d\'un corps sans changer son état ($Q = mc\\Delta T$), et la <strong>chaleur latente</strong>, qui provoque un changement d\'état (fusion, vaporisation…) à température constante ($Q = mL$).<br/><br/>La chaleur se propage aussi à travers les parois d\'un bâtiment par <strong>conduction</strong> : plus un matériau est isolant (faible conductivité thermique $\\lambda$), plus il limite les déperditions thermiques. C\'est ce qui guide le choix des matériaux d\'isolation.',
      definitions: [
        { term: 'Chaleur sensible ($Q$)', def: 'Énergie échangée qui fait varier la température d\'un corps sans changement d\'état : $Q = mc\\Delta T$, où $c$ est la <strong>capacité thermique massique</strong> (en J/(kg·K)) et $\\Delta T = T_f - T_i$.' },
        { term: 'Chaleur latente ($Q$)', def: 'Énergie échangée lors d\'un changement d\'état, à température constante : $Q = mL$, où $L$ est la <strong>chaleur latente massique</strong> du changement d\'état considéré (en J/kg).' },
        { term: 'Conductivité thermique ($\\lambda$)', def: 'Caractérise l\'aptitude d\'un matériau à conduire la chaleur (en W/(m·K)). Plus $\\lambda$ est faible, plus le matériau est isolant.' },
        { term: 'Flux et résistance thermiques', def: 'Le flux thermique conductif à travers une paroi plane est $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$ (loi de Fourier simplifiée), où $S$ est la surface et $e$ l\'épaisseur. On définit la résistance thermique $R = \\dfrac{e}{\\lambda S}$, telle que $\\varphi = \\dfrac{\\Delta T}{R}$.' }
      ],
      method: {
        title: 'Résoudre un problème de thermodynamique appliquée en 3 étapes',
        steps: [
          '<strong>Identifier le type d\'échange</strong> : chaleur sensible (variation de température) ou chaleur latente (changement d\'état) ? Parfois les deux se succèdent (exemple : chauffer de l\'eau puis la vaporiser).',
          '<strong>Appliquer la formule adaptée</strong> : $Q = mc\\Delta T$ pour la chaleur sensible, ou $Q = mL$ pour la chaleur latente. Pour une transformation en plusieurs étapes, additionner les quantités de chaleur de chaque étape.',
          'Pour un <strong>transfert à travers une paroi</strong> (isolation, déperditions), appliquer la loi de Fourier $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$ pour calculer le flux thermique (la puissance perdue), en veillant à convertir l\'épaisseur $e$ en mètres.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Conduction thermique à travers une paroi',
        title: 'Flux thermique et résistance thermique d\'une paroi plane',
        description: 'Le flux thermique conductif à travers une paroi dépend de sa conductivité $\\lambda$, de sa surface $S$, de l\'écart de température $\\Delta T$ entre ses deux faces et de son épaisseur $e$ (loi de Fourier).',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="thermo-title thermo-desc">
            <title id="thermo-title">Schema de la conduction thermique a travers une paroi</title>
            <desc id="thermo-desc">Une paroi verticale d'epaisseur e separe un espace interieur chaud a gauche (temperature T1) d'un espace exterieur froid a droite (temperature T2). Trois fleches horizontales traversent la paroi de gauche a droite, representant le flux thermique qui se propage par conduction de la zone chaude vers la zone froide. La conductivite thermique du materiau, notee lambda, est indiquee en haut de la paroi.</desc>

            <defs>
              <marker id="arrow-physbts-thermo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- paroi (mur) -->
            <rect class="frame-line" x="220" y="40" width="120" height="210" fill="none"></rect>

            <!-- conductivite thermique -->
            <text class="annotation-label" x="280" y="60" text-anchor="middle">λ</text>

            <!-- flux thermique traversant la paroi -->
            <line class="curve-main" x1="170" y1="90" x2="390" y2="90" marker-end="url(#arrow-physbts-thermo)"></line>
            <line class="curve-main" x1="170" y1="140" x2="390" y2="140" marker-end="url(#arrow-physbts-thermo)"></line>
            <line class="curve-main" x1="170" y1="190" x2="390" y2="190" marker-end="url(#arrow-physbts-thermo)"></line>

            <!-- zones interieure / exterieure -->
            <text class="annotation-label" x="110" y="150" text-anchor="middle">T₁ (chaud)</text>
            <text class="annotation-label" x="450" y="150" text-anchor="middle">T₂ (froid)</text>

            <!-- cotation epaisseur e -->
            <line class="guide-line" x1="220" y1="250" x2="220" y2="272"></line>
            <line class="guide-line" x1="340" y1="250" x2="340" y2="272"></line>
            <line class="guide-line" x1="220" y1="267" x2="340" y2="267"></line>
            <text class="tick-label" x="280" y="290" text-anchor="middle">e</text>
          </svg>
        `,
        notes: [
          'Le flux thermique $\\varphi$ (en watts) traverse la paroi de la zone <strong>chaude</strong> ($T_1$) vers la zone <strong>froide</strong> ($T_2$), jamais l\'inverse (deuxième principe de la thermodynamique).',
          'La loi de Fourier donne $\\varphi = \\dfrac{\\lambda S \\Delta T}{e} = \\dfrac{\\Delta T}{R}$, avec $R = \\dfrac{e}{\\lambda S}$ la <strong>résistance thermique</strong> de la paroi.',
          'Plus la conductivité $\\lambda$ est <strong>faible</strong> (matériau isolant) ou l\'épaisseur $e$ <strong>grande</strong>, plus la résistance thermique $R$ est élevée et plus le flux (les déperditions) diminue.'
        ],
        reading: 'Repère la zone chaude à gauche ($T_1$) et la zone froide à droite ($T_2$), puis suis les flèches qui traversent la paroi d\'épaisseur $e$ : le flux thermique va toujours du chaud vers le froid.',
        caption: 'Conduction thermique à travers une paroi plane : le flux thermique $\\varphi$ dépend de la conductivité $\\lambda$, de la surface $S$, de l\'écart de température $\\Delta T$ et de l\'épaisseur $e$.'
      },
      example: {
        statement: 'Une paroi de mur extérieur a une surface $S = 12$ m², une épaisseur $e = 20$ cm et une conductivité thermique $\\lambda = 0{,}04$ W/(m·K) (isolant classique). La température intérieure est $T_1 = 20°C$ et la température extérieure $T_2 = 2°C$.<br/><br/>Calculer le flux thermique $\\varphi$ (la puissance perdue) à travers cette paroi.',
        steps: [
          'Écart de température : $\\Delta T = T_1 - T_2 = 20 - 2 = 18°C$ (un écart de température a la même valeur en °C et en K).',
          'Loi de Fourier : $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$.',
          'Conversion de l\'épaisseur en mètres : $e = 20$ cm $= 0{,}2$ m.',
          'Application numérique : $\\varphi = \\dfrac{0{,}04 \\times 12 \\times 18}{0{,}2} = \\dfrac{8{,}64}{0{,}2} = 43{,}2$ W.'
        ],
        answer: '$\\varphi \\approx 43{,}2$ W. Cette paroi isolée perd continuellement environ $43$ W par conduction : sur une année, cela représente une quantité d\'énergie non négligeable, d\'où l\'importance de bien choisir l\'épaisseur et la conductivité des matériaux isolants.'
      },
      formulas: [
        '$Q = mc\\Delta T$ (chaleur sensible, en J)',
        '$Q = mL$ (chaleur latente, changement d\'état, en J)',
        'Loi de Fourier : $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$ (flux thermique conductif, en W)',
        'Résistance thermique : $R = \\dfrac{e}{\\lambda S}$, telle que $\\varphi = \\dfrac{\\Delta T}{R}$',
        'Puissance thermique : $P = \\dfrac{Q}{\\Delta t}$ (en W)'
      ],
      recap: [
        'La chaleur sensible ($Q = mc\\Delta T$) fait varier la température, tandis que la chaleur latente ($Q = mL$) provoque un changement d\'état à température constante.',
        'Le flux thermique conductif à travers une paroi va toujours du <strong>chaud</strong> vers le <strong>froid</strong>, jamais l\'inverse.',
        'Une résistance thermique $R$ élevée (isolant épais et peu conducteur) limite le flux thermique, donc les déperditions.',
        'Attention aux unités : $c$ en J/(kg·K), $\\lambda$ en W/(m·K), $S$ en m², $e$ en m — convertir systématiquement les centimètres en mètres avant de calculer.'
      ],
      piege: 'Ne pas confondre la <strong>capacité thermique massique</strong> $c$ (J/(kg·K), utilisée pour $Q = mc\\Delta T$) avec la <strong>conductivité thermique</strong> $\\lambda$ (W/(m·K), utilisée pour la loi de Fourier $\\varphi = \\frac{\\lambda S \\Delta T}{e}$) : ce sont deux grandeurs différentes qui interviennent dans des formules différentes. Attention également aux unités de l\'épaisseur $e$, presque toujours données en centimètres dans un énoncé mais à convertir en <strong>mètres</strong> avant tout calcul.'
    },

    quiz: [
      {
        q: 'On souhaite chauffer $m = 5$ kg d\'eau de $T_i = 15°C$ à $T_f = 65°C$. La capacité thermique massique de l\'eau est $c = 4\\,180$ J/(kg·K). Quelle quantité de chaleur $Q$ faut-il fournir ?',
        options: [
          '$Q \\approx 1\\,045\\,000$ J',
          '$Q \\approx 20\\,900$ J',
          '$Q \\approx 209\\,000$ J',
          '$Q \\approx 313\\,500$ J'
        ],
        answer: 0,
        correction: '$Q = mc\\Delta T = 5 \\times 4\\,180 \\times (65 - 15) = 5 \\times 4\\,180 \\times 50 = 1\\,045\\,000$ J, soit environ $1{,}045$ MJ.'
      },
      {
        q: 'Une paroi sépare une pièce chauffée à $22°C$ d\'un extérieur à $5°C$. Dans quel sens circule le flux thermique par conduction à travers cette paroi ?',
        options: [
          'De l\'extérieur froid vers l\'intérieur chaud',
          'De l\'intérieur chaud vers l\'extérieur froid',
          'Il ne circule pas du tout si la paroi est isolante',
          'Dans les deux sens simultanément'
        ],
        answer: 1,
        correction: 'Le flux thermique se propage toujours de la zone la plus chaude vers la zone la plus froide (deuxième principe de la thermodynamique), jamais l\'inverse — même à travers un isolant, qui limite le flux sans jamais l\'annuler totalement.'
      },
      {
        q: 'Deux parois ont la même surface, la même conductivité $\\lambda$ et le même écart de température, mais l\'une est deux fois plus épaisse que l\'autre. Comment se comparent leurs flux thermiques $\\varphi$ ?',
        options: [
          'Le flux est le même dans les deux cas',
          'Le flux de la paroi épaisse est deux fois plus grand',
          'Le flux de la paroi épaisse est deux fois plus petit',
          'Le flux de la paroi épaisse est quatre fois plus petit'
        ],
        answer: 2,
        correction: '$\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$ : à $\\lambda$, $S$ et $\\Delta T$ égaux, doubler l\'épaisseur $e$ divise le flux par $2$. C\'est pourquoi une isolation plus épaisse réduit les déperditions thermiques.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['sensible', 'fourier']);

        if (typeExo === 'sensible') {
          var materiaux = [
            { nom: 'eau', c: 4180 },
            { nom: 'huile de chauffage', c: 2000 },
            { nom: 'aluminium', c: 900 },
            { nom: 'cuivre', c: 385 }
          ];
          var mat = pick(materiaux);
          var m = randFloat(1, 20, 1);
          var Ti = rand(10, 25);
          var Tf = rand(Ti + 10, Ti + 60);
          var Q = Math.round(m * mat.c * (Tf - Ti));
          var contexte = pick([
            'un chauffe-eau domestique',
            'une cuve industrielle de process',
            'un ballon solaire thermique',
            'un échangeur de chaufferie',
            'un bain thermostaté d\'atelier'
          ]);
          return {
            statement: 'Dans ' + contexte + ', on chauffe une masse $m = ' + fr(m, 1) + '$ kg de ' + mat.nom + ' (capacité thermique massique $c = ' + mat.c + '$ J/(kg·K)) d\'une température initiale $T_i = ' + Ti + '°C$ à une température finale $T_f = ' + Tf + '°C$.<br/><br/>Calcule la quantité de chaleur $Q$ nécessaire (en J, arrondie à l\'unité).',
            answer: Q,
            tolerance: Math.max(500, Math.round(Q * 0.03)),
            unit: 'J',
            hint: 'Chaleur sensible : $Q = mc\\Delta T$, avec $\\Delta T = T_f - T_i$.',
            solution: [
              'Chaleur sensible : $Q = mc\\Delta T$, avec $\\Delta T = T_f - T_i = ' + Tf + ' - ' + Ti + ' = ' + (Tf - Ti) + '°C$.',
              'Application numérique : $Q = ' + fr(m, 1) + ' \\times ' + mat.c + ' \\times ' + (Tf - Ti) + '$.',
              'Résultat : $Q \\approx ' + fr(Q) + '$ J.'
            ]
          };
        } else {
          var materiauxIso = [
            { nom: 'laine de verre', lambda: 0.04 },
            { nom: 'polystyrène expansé', lambda: 0.038 },
            { nom: 'brique creuse', lambda: 0.23 },
            { nom: 'béton', lambda: 1.75 }
          ];
          var iso = pick(materiauxIso);
          var S = randFloat(5, 30, 1);
          var e = randFloat(5, 30, 1);
          var T1 = rand(18, 24);
          var T2 = rand(-5, 10);
          var phi = parseFloat((iso.lambda * S * (T1 - T2) / (e / 100)).toFixed(1));
          var contexte = pick([
            'un mur extérieur de bâtiment',
            'une toiture de local technique',
            'une cloison de chambre froide',
            'un caisson de VMC isolé'
          ]);
          return {
            statement: 'Une paroi de ' + contexte + ' en ' + iso.nom + ' ($\\lambda = ' + fr(iso.lambda) + '$ W/(m·K)) a une surface $S = ' + fr(S, 1) + '$ m² et une épaisseur $e = ' + fr(e, 1) + '$ cm. La température intérieure est $T_1 = ' + T1 + '°C$ et la température extérieure $T_2 = ' + T2 + '°C$.<br/><br/>D\'après la loi de Fourier, calcule le flux thermique $\\varphi$ à travers cette paroi (en W, arrondi au dixième).',
            answer: phi,
            tolerance: Math.max(0.5, parseFloat((phi * 0.05).toFixed(1))),
            unit: 'W',
            hint: 'Loi de Fourier : $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$, avec $e$ converti en mètres.',
            solution: [
              'Loi de Fourier : $\\varphi = \\dfrac{\\lambda S \\Delta T}{e}$, avec $\\Delta T = T_1 - T_2 = ' + T1 + ' - (' + T2 + ') = ' + (T1 - T2) + '°C$.',
              'Conversion de l\'épaisseur en mètres : $e = ' + fr(e, 1) + '$ cm $\\approx ' + fr(parseFloat((e / 100).toFixed(3)), 3) + '$ m.',
              'Application numérique : $\\varphi = \\dfrac{' + fr(iso.lambda) + ' \\times ' + fr(S, 1) + ' \\times ' + (T1 - T2) + '}{' + fr(parseFloat((e / 100).toFixed(3)), 3) + '}$.',
              'Résultat : $\\varphi \\approx ' + fr(phi, 1) + '$ W.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un ballon d\'eau chaude sanitaire de volume $V = 200$ L doit être chauffé de $15°C$ à $60°C$. La masse volumique de l\'eau est $\\rho = 1\\,000$ kg/m³ et sa capacité thermique massique $c = 4\\,180$ J/(kg·K). L\'isolant du ballon a une épaisseur $e = 5$ cm, une conductivité thermique $\\lambda = 0{,}03$ W/(m·K), une surface $S = 3$ m², pour un écart moyen de température de $40°C$ avec l\'extérieur ($1$ kWh $= 3{,}6 \\times 10^6$ J).',
      tasks: [
        'Convertir le volume $V = 200$ L en masse d\'eau $m$ (en kg).',
        'Calculer l\'énergie $Q$ nécessaire pour chauffer cette eau de $15°C$ à $60°C$ (chaleur sensible), puis la convertir en kWh.',
        'Calculer la puissance thermique perdue par conduction à travers l\'isolant du ballon (loi de Fourier), puis en déduire l\'énergie perdue sur une journée de $24$ h (en kWh), et commenter par rapport à l\'énergie de chauffe initiale.'
      ],
      solutions: [
        '$200$ L $= 0{,}2$ m³, donc $m = \\rho V = 1\\,000 \\times 0{,}2 = 200$ kg (la masse volumique de l\'eau vaut $1$ kg/L).',
        '$Q = mc\\Delta T = 200 \\times 4\\,180 \\times (60 - 15) = 200 \\times 4\\,180 \\times 45 = 37\\,620\\,000$ J. En kWh : $Q = \\dfrac{37\\,620\\,000}{3\\,600\\,000} \\approx 10{,}45$ kWh.',
        'Loi de Fourier : $\\varphi = \\dfrac{\\lambda S \\Delta T}{e} = \\dfrac{0{,}03 \\times 3 \\times 40}{0{,}05} = \\dfrac{3{,}6}{0{,}05} = 72$ W. Sur $24$ h : $E = \\varphi \\times t = 72 \\times 24 = 1\\,728$ Wh $\\approx 1{,}73$ kWh, soit environ $16{,}5\\%$ de l\'énergie de chauffe initiale ($10{,}45$ kWh).'
      ],
      finalAnswer: 'Les pertes par conduction représentent environ $1{,}73$ kWh par jour, soit près de $16{,}5\\%$ de l\'énergie nécessaire pour chauffer initialement le ballon : cela illustre pourquoi une bonne isolation du ballon d\'eau chaude est indispensable pour limiter la consommation énergétique liée aux pertes continues, jour après jour.'
    },

    evaluation: {
      title: 'Évaluation — Thermodynamique appliquée',
      duration: '30 min',
      questions: [
        {
          statement: 'On chauffe $m = 8$ kg d\'eau ($c = 4\\,180$ J/(kg·K)) de $20°C$ à $40°C$. Calculer la quantité de chaleur $Q$ nécessaire (en J).',
          type: 'numeric',
          answer: 668800,
          tolerance: 5000,
          unit: 'J',
          points: 2,
          correction: '$Q = mc\\Delta T = 8 \\times 4\\,180 \\times (40 - 20) = 8 \\times 4\\,180 \\times 20 = 668\\,800$ J.'
        },
        {
          statement: 'Le flux thermique par conduction à travers une paroi circule toujours :',
          type: 'multiple-choice',
          options: [
            'Du froid vers le chaud',
            'Du chaud vers le froid',
            'Dans le sens du gradient de pression',
            'De façon aléatoire selon le matériau'
          ],
          answer: 1,
          points: 2,
          correction: 'D\'après le deuxième principe de la thermodynamique, la chaleur se propage spontanément de la zone chaude vers la zone froide, jamais l\'inverse.'
        },
        {
          statement: 'Une paroi ($\\lambda = 0{,}035$ W/(m·K)) a une surface $S = 10$ m², une épaisseur $e = 15$ cm, pour un écart de température $\\Delta T = 25°C$. Calculer le flux thermique $\\varphi$ (en W).',
          type: 'numeric',
          answer: 58.3,
          tolerance: 1.5,
          unit: 'W',
          points: 3,
          correction: '$\\varphi = \\dfrac{\\lambda S \\Delta T}{e} = \\dfrac{0{,}035 \\times 10 \\times 25}{0{,}15} = \\dfrac{8{,}75}{0{,}15} \\approx 58{,}3$ W.'
        },
        {
          statement: 'Calculer l\'énergie nécessaire pour vaporiser $m = 2$ kg d\'eau à $100°C$, sachant que la chaleur latente de vaporisation de l\'eau est $L = 2{,}26 \\times 10^6$ J/kg (en J).',
          type: 'numeric',
          answer: 4520000,
          tolerance: 50000,
          unit: 'J',
          points: 2,
          correction: 'Chaleur latente : $Q = mL = 2 \\times 2{,}26 \\times 10^6 = 4{,}52 \\times 10^6$ J $= 4\\,520\\,000$ J.'
        },
        {
          statement: 'Une résistance thermique $R$ élevée pour une paroi signifie que :',
          type: 'multiple-choice',
          options: [
            'Le flux thermique la traversant est important',
            'Le flux thermique la traversant est faible (bon isolant)',
            'Sa conductivité $\\lambda$ est élevée',
            'Son épaisseur $e$ est faible'
          ],
          answer: 1,
          points: 1,
          correction: 'Comme $\\varphi = \\dfrac{\\Delta T}{R}$, une résistance thermique $R$ élevée réduit le flux thermique $\\varphi$ à écart de température égal : la paroi est un bon isolant. C\'est l\'objectif recherché pour limiter les déperditions.'
        }
      ]
    }
  });
