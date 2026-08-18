/* =========================================================
   Spark Learning – data/physique-3e/physique-3e-puissance-electrique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-3e-puissance-electrique',
    level: 1, subject: 'physique',
    icon: '💡',
    title: 'Puissance et énergie électrique',
    subtitle: 'Puissance électrique P = UI, énergie électrique E = Pt, kilowattheure et facture d\'électricité',
    keywords: ['Puissance électrique', 'Énergie électrique', 'Watt', 'kWh', 'Effet Joule'],
    physics: 'Le calcul de la puissance et de l\'énergie électrique permet de choisir le bon disjoncteur pour une installation, d\'estimer la consommation et le coût d\'un appareil électroménager sur une facture d\'électricité, et d\'expliquer l\'échauffement d\'une résistance chauffante (effet Joule) dans un grille-pain ou un radiateur.',

    cours: {
      intro: 'Chaque appareil électrique — une ampoule, un radiateur, un ordinateur — <strong>consomme de l\'énergie électrique</strong> pour fonctionner, à un rythme plus ou moins rapide selon sa <strong>puissance</strong>.<br/><br/>La <strong>puissance électrique</strong> $P$, exprimée en <strong>watts (W)</strong>, indique la quantité d\'énergie consommée <strong>par seconde</strong> : $P = U \\times I$, où $U$ est la tension (en volts) et $I$ l\'intensité du courant (en ampères).<br/><br/>Plus un appareil fonctionne <strong>longtemps</strong>, plus il consomme d\'<strong>énergie électrique</strong> $E$, exprimée en <strong>joules (J)</strong> si le temps est en secondes : $E = P \\times t$. Pour les appareils domestiques, on préfère souvent exprimer cette énergie en <strong>kilowattheures (kWh)</strong>, l\'unité utilisée sur les factures d\'électricité (avec $P$ en kW et $t$ en heures).<br/><br/>Une partie de cette énergie électrique se transforme en <strong>chaleur</strong> par <strong>effet Joule</strong> dans les résistances des appareils chauffants (radiateur, grille-pain, fer à repasser).',
      definitions: [
        { term: 'Puissance électrique ($P$)', def: 'Énergie consommée par un appareil <strong>par unité de temps</strong> : $P = U \\times I$, exprimée en <strong>watts (W)</strong>, avec $U$ en volts et $I$ en ampères.' },
        { term: 'Énergie électrique ($E$)', def: 'Quantité totale d\'énergie consommée par un appareil pendant une durée $t$ : $E = P \\times t$, exprimée en <strong>joules (J)</strong> si $t$ est en secondes, ou en <strong>wattheures/kilowattheures (Wh/kWh)</strong> si $t$ est en heures.' },
        { term: 'Kilowattheure (kWh)', def: 'Unité d\'énergie utilisée sur les factures d\'électricité : $1$ kWh correspond à l\'énergie consommée par un appareil de puissance $1$ kW fonctionnant pendant $1$ heure.' },
        { term: 'Effet Joule', def: 'Échauffement d\'un conducteur traversé par un courant électrique, dû à sa résistance. C\'est le principe de fonctionnement des appareils chauffants, mais aussi une cause de pertes d\'énergie (échauffement indésirable d\'un fil ou d\'un composant).' }
      ],
      method: {
        title: 'Calculer une puissance ou une énergie électrique en 3 étapes',
        steps: [
          '<strong>Identifier les grandeurs connues</strong> (tension $U$, intensité $I$, durée $t$) et repérer si le résultat est demandé en joules, en wattheures ou en kilowattheures.',
          '<strong>Calculer la puissance</strong> si elle n\'est pas donnée : $P = U \\times I$, en watts.',
          '<strong>Calculer l\'énergie</strong> avec $E = P \\times t$, en veillant à la cohérence des unités : secondes avec joules, heures avec wattheures ou kilowattheures.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Énergie électrique consommée au cours du temps',
        title: 'Droite $E = f(t)$ et détermination de la puissance par le coefficient directeur',
        description: 'Pour un appareil de puissance constante, l\'énergie consommée $E = f(t)$ est une droite passant par l\'origine, dont la pente donne directement la puissance $P$ de l\'appareil.',
        svg: `
          <svg viewBox="0 0 510 320" role="img" aria-labelledby="energie-elec-title energie-elec-desc">
            <title id="energie-elec-title">Energie electrique consommee en fonction du temps</title>
            <desc id="energie-elec-desc">Un graphique represente l'energie electrique consommee en kilowattheures en fonction du temps de fonctionnement en heures, pour un radiateur de puissance constante. Les points sont alignes sur une droite passant par l'origine, allant de 0 heure/0 kilowattheure a 4 heures/6 kilowattheures. Un triangle de pente est trace entre deux points de la droite, situes a 1 heure/1,5 kilowattheure et 3 heures/4,5 kilowattheures, avec un cote horizontal representant une variation de 2 heures et un cote vertical representant une variation de 3 kilowattheures. Le rapport de ces deux variations donne la puissance P egale a 1,5 kilowatt.</desc>

            <defs>
              <marker id="arrow-3e-elec" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="460" y2="260" marker-end="url(#arrow-3e-elec)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="30" marker-end="url(#arrow-3e-elec)"></line>
            <text class="tick-label" x="60" y="20" text-anchor="middle">E (kWh)</text>
            <text class="tick-label" x="465" y="254" text-anchor="start">t (h)</text>
            <text class="tick-label" x="46" y="264" text-anchor="end">0</text>

            <!-- droite E=f(t) -->
            <line class="curve-main" x1="60" y1="260" x2="440" y2="40"></line>

            <!-- triangle de pente -->
            <line class="guide-line" x1="155" y1="205" x2="345" y2="205"></line>
            <line class="guide-line" x1="345" y1="205" x2="345" y2="95"></line>
            <text class="tick-label" x="250" y="223" text-anchor="middle">Δt = 2 h</text>
            <text class="tick-label" x="357" y="152" text-anchor="start">ΔE = 3 kWh</text>

            <!-- points -->
            <circle class="plot-point" cx="155" cy="205" r="5"></circle>
            <text class="label-soft" x="140" y="193" text-anchor="end">(1 h ; 1,5 kWh)</text>
            <circle class="plot-point" cx="345" cy="95" r="5"></circle>
            <text class="label-soft" x="357" y="87" text-anchor="start">(3 h ; 4,5 kWh)</text>

            <!-- graduations axe t -->
            <text class="tick-label" x="155" y="278" text-anchor="middle">1</text>
            <text class="tick-label" x="345" y="278" text-anchor="middle">3</text>
            <text class="tick-label" x="440" y="278" text-anchor="middle">4</text>

            <!-- graduations axe E -->
            <text class="tick-label" x="46" y="209" text-anchor="end">1,5</text>
            <text class="tick-label" x="46" y="99" text-anchor="end">4,5</text>
            <text class="tick-label" x="46" y="44" text-anchor="end">6</text>
          </svg>
        `,
        notes: [
          'La droite $E=f(t)$ passe par l\'origine : $E$ et $t$ sont proportionnelles, ce qui traduit une puissance $P$ constante au cours du temps.',
          'Entre les deux points repérés, $\\Delta t = 3 - 1 = 2$ h et $\\Delta E = 4{,}5 - 1{,}5 = 3$ kWh.',
          'Le coefficient directeur (la puissance) vaut $P = \\dfrac{\\Delta E}{\\Delta t} = \\dfrac{3}{2} = 1{,}5$ kW, soit environ $1\\,500$ W — la puissance typique d\'un radiateur électrique.'
        ],
        reading: 'Repère deux points bien espacés sur la droite, lis la variation d\'énergie $\\Delta E$ et la variation de temps $\\Delta t$ correspondante, puis divise-les pour obtenir la puissance $P$.',
        caption: 'Droite $E=f(t)$ d\'un appareil de puissance $1{,}5$ kW : la pente de la droite, calculée entre deux points, donne directement la puissance de l\'appareil.'
      },
      example: {
        statement: 'Un radiateur électrique fonctionne sous une tension $U = 230$ V avec une intensité $I \\approx 6{,}5$ A.<br/><br/>Calcule sa puissance électrique $P$, puis l\'énergie électrique $E$ qu\'il consomme en $3$ heures de fonctionnement (en kWh).',
        steps: [
          'Puissance électrique : $P = U \\times I = 230 \\times 6{,}5 \\approx 1\\,495$ W, soit environ $1{,}5$ kW.',
          'Énergie consommée en $3$ heures : $E = P \\times t = 1{,}5 \\times 3$.',
          'Résultat : $E \\approx 4{,}5$ kWh.'
        ],
        answer: 'Puissance $P \\approx 1{,}5$ kW, énergie consommée en $3$ h : $E \\approx 4{,}5$ kWh.'
      },
      formulas: [
        'Puissance électrique : $P = U \\times I$ ($U$ en V, $I$ en A, $P$ en W)',
        'Énergie électrique : $E = P \\times t$ ($t$ en s pour $E$ en J ; $t$ en h et $P$ en kW pour $E$ en kWh)',
        'Conversion : $1$ kWh $= 3\\,600\\,000$ J'
      ],
      recap: [
        'La puissance $P = U \\times I$ mesure l\'énergie consommée par seconde ; l\'énergie $E = P \\times t$ mesure l\'énergie totale consommée sur une durée donnée.',
        'Sur une droite $E = f(t)$, la pente donne directement la puissance $P$ de l\'appareil.',
        'Le kilowattheure (kWh), utilisé sur les factures, correspond à l\'énergie consommée par un appareil de $1$ kW pendant $1$ heure.',
        'Une partie de l\'énergie électrique se transforme en chaleur par effet Joule, utile dans les appareils chauffants mais source de pertes ailleurs.'
      ],
      piege: 'Une erreur fréquente est de confondre <strong>puissance</strong> (en watts, ce que l\'appareil consomme par seconde) et <strong>énergie</strong> (en joules ou en kWh, ce qu\'il a consommé au total sur une durée). Attention à ne jamais oublier de multiplier par le temps $t$ pour obtenir une énergie : un appareil plus puissant utilisé brièvement peut consommer moins d\'énergie qu\'un appareil moins puissant utilisé plus longtemps.'
    },

    quiz: [
      {
        q: 'Une ampoule fonctionne sous $U = 230$ V avec une intensité $I = 0{,}2$ A. Quelle est sa puissance $P$ ?',
        options: ['$46$ W', '$230{,}2$ W', '$1\\,150$ W', '$0{,}00087$ W'],
        answer: 0,
        correction: 'Puissance électrique : $P = U \\times I = 230 \\times 0{,}2 = 46$ W.'
      },
      {
        q: 'Un appareil de puissance $P = 2$ kW fonctionne pendant $t = 2$ h. Quelle énergie a-t-il consommée ?',
        options: ['$1$ kWh', '$4$ kWh', '$4$ Wh', '$0{,}5$ kWh'],
        answer: 1,
        correction: 'Énergie : $E = P \\times t = 2 \\times 2 = 4$ kWh.'
      },
      {
        q: 'Un appareil de faible puissance utilisé longtemps et un appareil de forte puissance utilisé brièvement peuvent consommer :',
        options: [
          'Toujours la même énergie, quelle que soit la durée',
          'La même énergie, si le produit puissance × durée est identique',
          'Toujours plus d\'énergie pour l\'appareil le plus puissant',
          'Toujours moins d\'énergie pour l\'appareil le plus puissant'
        ],
        answer: 1,
        correction: 'L\'énergie consommée est $E = P \\times t$ : deux appareils différents peuvent consommer la même énergie si leur produit puissance × durée est égal.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['puissance', 'energieJ', 'energieKWh']);
        var contexte = pick([
          'un sèche-cheveux',
          'une bouilloire électrique',
          'un four à micro-ondes',
          'une console de jeux',
          'un chargeur de vélo électrique',
          'un aspirateur'
        ]);

        if (typeExo === 'puissance') {
          var U = pick([12, 24, 110, 230]);
          var I = randFloat(0.5, 10, 2);
          var P = parseFloat((U * I).toFixed(2));
          return {
            statement: 'On assimile ' + contexte + ' à un appareil fonctionnant sous une tension $U = ' + U + '$ V avec une intensité $I = ' + fr(I, 2) + '$ A.<br/><br/>Calcule sa puissance électrique $P$ (en W, arrondie au centième).',
            answer: P,
            tolerance: Math.max(0.5, parseFloat((P * 0.02).toFixed(2))),
            unit: 'W',
            hint: 'Utilise $P = U \\times I$.',
            solution: [
              'Formule de la puissance électrique : $P = U \\times I$.',
              'Application numérique : $P = ' + U + ' \\times ' + fr(I, 2) + '$.',
              'Résultat : $P \\approx ' + fr(P, 2) + '$ W.'
            ]
          };
        } else if (typeExo === 'energieJ') {
          var Pw = rand(50, 2000);
          var t = rand(10, 600);
          var E = Pw * t;
          return {
            statement: 'On assimile ' + contexte + ' à un appareil de puissance $P = ' + Pw + '$ W, fonctionnant pendant $t = ' + t + '$ s.<br/><br/>Calcule l\'énergie électrique $E$ consommée (en J).',
            answer: E,
            tolerance: Math.max(10, Math.round(E * 0.02)),
            unit: 'J',
            hint: 'Utilise $E = P \\times t$, avec $t$ en secondes pour obtenir $E$ en joules.',
            solution: [
              'Formule de l\'énergie électrique : $E = P \\times t$.',
              'Application numérique : $E = ' + Pw + ' \\times ' + t + '$.',
              'Résultat : $E = ' + E + '$ J.'
            ]
          };
        } else {
          var Pk = randFloat(0.2, 3, 2);
          var th = pick([0.5, 1, 1.5, 2, 3, 4, 6, 8]);
          var Ek = parseFloat((Pk * th).toFixed(2));
          return {
            statement: 'On assimile ' + contexte + ' à un appareil de puissance $P = ' + fr(Pk, 2) + '$ kW, fonctionnant pendant $t = ' + fr(th, 1) + '$ h.<br/><br/>Calcule l\'énergie électrique $E$ consommée (en kWh, arrondie au centième).',
            answer: Ek,
            tolerance: Math.max(0.05, parseFloat((Ek * 0.03).toFixed(2))),
            unit: 'kWh',
            hint: 'Utilise $E = P \\times t$, avec $P$ en kW et $t$ en heures pour obtenir $E$ en kWh.',
            solution: [
              'Formule de l\'énergie électrique : $E = P \\times t$.',
              'Application numérique : $E = ' + fr(Pk, 2) + ' \\times ' + fr(th, 1) + '$.',
              'Résultat : $E \\approx ' + fr(Ek, 2) + '$ kWh.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un lave-linge de puissance $P_1 = 2\\,000$ W fonctionne en moyenne $t_1 = 1$ h par jour. Un réfrigérateur de puissance $P_2 = 150$ W fonctionne en continu ($t_2 = 24$ h par jour). Le prix du kilowattheure est de $0{,}20$ €.',
      tasks: [
        'Calcule l\'énergie quotidienne consommée par le lave-linge, en kWh.',
        'Calcule l\'énergie quotidienne consommée par le réfrigérateur, en kWh.',
        'En déduire le coût total de l\'électricité consommée par ces deux appareils sur une journée.'
      ],
      solutions: [
        'Lave-linge : $P_1 = 2\\,000$ W $= 2$ kW. Énergie quotidienne : $E_1 = P_1 \\times t_1 = 2 \\times 1 = 2$ kWh.',
        'Réfrigérateur : $P_2 = 150$ W $= 0{,}15$ kW, fonctionnement $t_2 = 24$ h. Énergie quotidienne : $E_2 = P_2 \\times t_2 = 0{,}15 \\times 24 = 3{,}6$ kWh.',
        'Énergie totale : $E = E_1 + E_2 = 2 + 3{,}6 = 5{,}6$ kWh. Coût : $5{,}6 \\times 0{,}20 = 1{,}12$ €.'
      ],
      finalAnswer: 'Coût total $\\approx 1{,}12$ € par jour pour ces deux appareils, soit environ $34$ € sur un mois de $30$ jours. Le réfrigérateur, bien moins puissant que le lave-linge, consomme presque deux fois plus d\'énergie car il fonctionne <strong>en continu</strong> : la durée d\'utilisation compte autant que la puissance.'
    },

    evaluation: {
      title: 'Évaluation — Puissance et énergie électrique',
      duration: '25 min',
      questions: [
        {
          statement: 'Un appareil fonctionne sous $U = 230$ V avec $I = 4$ A. Calculer sa puissance $P$ (en W).',
          type: 'numeric',
          answer: 920,
          tolerance: 5,
          unit: 'W',
          points: 2,
          correction: '$P = U \\times I = 230 \\times 4 = 920$ W.'
        },
        {
          statement: 'L\'unité de la puissance électrique est :',
          type: 'multiple-choice',
          options: ['Le joule', 'Le watt', 'L\'ampère', 'Le volt'],
          answer: 1,
          points: 1,
          correction: 'La puissance électrique se mesure en watts (W). Le joule mesure l\'énergie, l\'ampère l\'intensité, et le volt la tension.'
        },
        {
          statement: 'Un appareil de puissance $P = 1{,}2$ kW fonctionne pendant $t = 5$ h. Calculer l\'énergie consommée (en kWh).',
          type: 'numeric',
          answer: 6,
          tolerance: 0.1,
          unit: 'kWh',
          points: 2,
          correction: '$E = P \\times t = 1{,}2 \\times 5 = 6$ kWh.'
        },
        {
          statement: 'Un radiateur de puissance $P = 1\\,000$ W fonctionne pendant $t = 1\\,800$ s. Calculer l\'énergie consommée (en J).',
          type: 'numeric',
          answer: 1800000,
          tolerance: 10000,
          unit: 'J',
          points: 3,
          correction: '$E = P \\times t = 1\\,000 \\times 1\\,800 = 1\\,800\\,000$ J.'
        },
        {
          statement: 'Un appareil de faible puissance utilisé très longtemps peut consommer :',
          type: 'multiple-choice',
          options: [
            'Toujours moins d\'énergie qu\'un appareil puissant utilisé peu de temps',
            'Autant, voire plus d\'énergie, selon la durée d\'utilisation',
            'Toujours plus d\'énergie, quelle que soit la durée',
            'Une énergie qui ne dépend pas du temps'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'énergie consommée dépend du produit $P \\times t$ : un appareil peu puissant utilisé très longtemps peut consommer autant, voire plus, qu\'un appareil puissant utilisé brièvement.'
        }
      ]
    }
  });
