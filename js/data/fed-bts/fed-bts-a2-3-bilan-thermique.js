/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a2-3-bilan-thermique.js
   BTS FED — S8-A2-3 Bilan thermique (déperditions)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a2-3-bilan-thermique',
    level: 3, subject: 'fed',
    icon: '🏠',
    title: 'Bilan thermique (déperditions)',
    subtitle: 'Déperditions par transmission et renouvellement d\'air, coefficient Gv',
    keywords: ['Déperditions', 'Coefficient U', 'Renouvellement d\'air', 'Bilan thermique', 'Gv'],
    physics: 'Avant de choisir la puissance d\'une chaudière ou d\'une pompe à chaleur, il faut savoir <strong>combien de watts</strong> le bâtiment perd réellement par grand froid. C\'est tout l\'enjeu du bilan thermique en régime permanent : additionner, paroi par paroi, ce qui s\'échappe par les murs, la toiture, les vitrages, et ce qu\'il faut réchauffer dans l\'air neuf entrant.',

    cours: {
      intro: 'Un bâtiment perd de la chaleur de deux façons bien distinctes.<br/><br/>D\'une part, la chaleur traverse les <strong>parois</strong> (murs, toiture, plancher bas, vitrages) : ce sont les <strong>déperditions par transmission</strong> $D_t$. D\'autre part, l\'air neuf qui entre en remplacement de l\'air vicié extrait (ventilation, infiltrations) doit être réchauffé : ce sont les <strong>déperditions par renouvellement d\'air</strong> $D_r$.<br/><br/>Le <strong>bilan thermique en régime permanent</strong> consiste à additionner ces deux termes pour une condition extérieure figée (souvent la température de base la plus froide du site) : $D = D_t + D_r$, exprimée en <strong>watts</strong>. C\'est ce calcul qui permet de dimensionner la puissance d\'un générateur de chauffage.',
      definitions: [
        { term: 'Coefficient de transmission thermique $U$', def: 'Quantité de chaleur traversant $1$ m² de paroi pour $1$ °C d\'écart entre les deux ambiances, en W/(m²·K). Plus $U$ est faible, plus la paroi est isolante.' },
        { term: 'Déperditions par transmission $D_t$', def: 'Somme, sur toutes les parois de l\'enveloppe, de $U_i \\times A_i \\times (\\theta_i - \\theta_e)$ : $D_t = \\displaystyle\\sum_i U_i A_i (\\theta_i - \\theta_e)$, en W.' },
        { term: 'Débit de renouvellement d\'air $Q_v$', def: 'Débit d\'air neuf entrant (ventilation mécanique + infiltrations), en m³/h, qui doit être réchauffé de $\\theta_e$ à $\\theta_i$.' },
        { term: 'Déperditions par renouvellement d\'air $D_r$', def: '$D_r = 0{,}34 \\times Q_v \\times (\\theta_i - \\theta_e)$, en W. Le coefficient $0{,}34$ Wh/(m³·K) vient de la masse volumique de l\'air ($\\rho \\approx 1{,}2$ kg/m³) et de sa chaleur massique ($c_p \\approx 1\\,004$ J/(kg·K)), divisés par $3\\,600$ s/h pour convertir en watts.' },
        { term: 'Déperdition totale $D$', def: '$D = D_t + D_r$, en W : c\'est la puissance de chauffage à compenser en permanence dans les conditions extérieures retenues.' },
        { term: 'Coefficient de déperdition globale $G_v$', def: '$G_v = \\dfrac{D}{\\theta_i - \\theta_e}$, en W/K : une caractéristique du bâtiment indépendante de la condition climatique du jour. C\'est cette valeur qui sera réutilisée pour estimer le besoin annuel de chauffage par la méthode des degrés-jours (DJU).' }
      ],
      method: {
        title: 'Établir un bilan thermique en régime permanent',
        steps: [
          '<strong>Lister chaque paroi</strong> de l\'enveloppe (murs, toiture, plancher bas, vitrages) avec son coefficient $U_i$ (W/(m²·K)) et sa surface $A_i$ (m²).',
          '<strong>Fixer l\'écart de température</strong> $(\\theta_i - \\theta_e)$ entre la température intérieure de consigne et la température extérieure de base du site.',
          '<strong>Calculer les déperditions par transmission</strong> : $D_t = \\displaystyle\\sum_i U_i A_i (\\theta_i - \\theta_e)$, en sommant la contribution de chaque paroi.',
          '<strong>Calculer les déperditions par renouvellement d\'air</strong> à partir du débit $Q_v$ : $D_r = 0{,}34 \\times Q_v \\times (\\theta_i - \\theta_e)$.',
          '<strong>Sommer</strong> $D = D_t + D_r$, puis en déduire si besoin $G_v = D / (\\theta_i - \\theta_e)$, qui servira de base au calcul du besoin annuel (module DJU).'
        ]
      },
      example: {
        statement: 'Un séjour est chauffé à $\\theta_i = 19\\,°C$ alors que la température extérieure de base retenue est $\\theta_e = -5\\,°C$. L\'enveloppe comprend : un mur de $A = 40$ m² ($U = 0{,}35$ W/(m²·K)), une toiture de $A = 25$ m² ($U = 0{,}20$ W/(m²·K)), et des vitrages de $A = 8$ m² ($U = 1{,}8$ W/(m²·K)). Le débit de renouvellement d\'air est $Q_v = 90$ m³/h.<br/><br/>Calculer la déperdition totale $D$, puis le coefficient $G_v$.',
        steps: [
          'Écart de température : $\\theta_i - \\theta_e = 19 - (-5) = 24\\,°C$.',
          'Mur : $40 \\times 0{,}35 \\times 24 = 336$ W. Toiture : $25 \\times 0{,}20 \\times 24 = 120$ W. Vitrages : $8 \\times 1{,}8 \\times 24 = 345{,}6$ W.',
          'Déperditions par transmission : $D_t = 336 + 120 + 345{,}6 = 801{,}6$ W.',
          'Déperditions par renouvellement d\'air : $D_r = 0{,}34 \\times 90 \\times 24 = 734{,}4$ W.',
          'Déperdition totale : $D = D_t + D_r = 801{,}6 + 734{,}4 = 1\\,536$ W.',
          'Coefficient global : $G_v = D / (\\theta_i - \\theta_e) = 1\\,536 / 24 = 64$ W/K.'
        ],
        answer: '$D \\approx 1\\,536$ W et $G_v = 64$ W/K. Ce dernier chiffre caractérise le bâtiment lui-même : il resservira tel quel pour estimer le besoin annuel de chauffage, quelle que soit la journée considérée.'
      },
      formulas: [
        '$D_t = \\displaystyle\\sum_i U_i A_i (\\theta_i - \\theta_e)$ (déperditions par transmission, en W)',
        '$D_r = 0{,}34 \\times Q_v \\times (\\theta_i - \\theta_e)$ (déperditions par renouvellement d\'air, en W, $Q_v$ en m³/h)',
        '$D = D_t + D_r$ (déperdition totale, en W)',
        '$G_v = \\dfrac{D}{\\theta_i - \\theta_e}$ (coefficient de déperdition globale, en W/K)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Bilan thermique d\'une enveloppe',
        title: 'D = Dt (mur, toiture, vitrage) + Dr (renouvellement d\'air)',
        description: 'Chaque paroi de l\'enveloppe contribue aux déperditions par transmission Dt ; l\'air neuf entrant par ventilation ou infiltration contribue aux déperditions par renouvellement d\'air Dr.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="bilan-graph-title bilan-graph-desc">
            <title id="bilan-graph-title">Schema d'une maison illustrant les postes de deperdition thermique</title>
            <desc id="bilan-graph-desc">Coupe schematique d'une maison avec toiture en pointe, murs et une fenetre. Des fleches sortent de la toiture, du mur et de la fenetre pour representer les deperditions par transmission Dt. Une fleche sort d'une grille de ventilation sur le mur gauche pour representer les deperditions par renouvellement d'air Dr. La deperdition totale D est la somme de ces contributions.</desc>

            <defs>
              <marker id="arrow-fed-bilan" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- toiture -->
            <path class="frame-line" d="M150,130 L240,60 L330,130 Z" fill="none"></path>
            <!-- mur -->
            <rect class="frame-line" x="150" y="130" width="180" height="100" fill="none"></rect>
            <!-- fenetre -->
            <rect class="frame-line" x="200" y="170" width="45" height="45" fill="none"></rect>
            <!-- grille de ventilation -->
            <rect class="frame-line" x="170" y="195" width="25" height="20" fill="none"></rect>
            <!-- sol -->
            <line class="guide-line" x1="110" y1="230" x2="370" y2="230"></line>

            <!-- fleche toiture -->
            <line class="curve-main" x1="280" y1="85" x2="325" y2="45" marker-end="url(#arrow-fed-bilan)"></line>
            <text class="annotation-label" x="330" y="38" text-anchor="start">Dt toiture</text>

            <!-- fleche mur -->
            <line class="curve-main" x1="330" y1="160" x2="395" y2="160" marker-end="url(#arrow-fed-bilan)"></line>
            <text class="annotation-label" x="400" y="155" text-anchor="start">Dt mur</text>

            <!-- fleche fenetre -->
            <line class="curve-main" x1="245" y1="192" x2="395" y2="210" marker-end="url(#arrow-fed-bilan)"></line>
            <text class="annotation-label" x="400" y="220" text-anchor="start">Dt vitrage</text>

            <!-- fleche renouvellement d'air -->
            <line class="curve-main" x1="170" y1="205" x2="100" y2="205" marker-end="url(#arrow-fed-bilan)"></line>
            <text class="annotation-label" x="95" y="192" text-anchor="end">Dr (air neuf)</text>

            <text class="label-soft" x="240" y="20" text-anchor="middle">Enveloppe du bâtiment</text>
            <text class="label-soft" x="240" y="285" text-anchor="middle">D = Dt + Dr (en W)</text>
          </svg>
        `,
        notes: [
          'Chaque flèche sortante représente une contribution aux déperditions par <strong>transmission</strong> $D_t$ : toiture, mur, vitrage — chacune proportionnelle à son $U_i \\times A_i$.',
          'La flèche issue de la grille de ventilation représente les déperditions par <strong>renouvellement d\'air</strong> $D_r$, liées au débit d\'air neuf $Q_v$ à réchauffer.',
          'La déperdition totale $D$ est la somme de toutes ces contributions : $D = D_t + D_r$.'
        ],
        reading: 'Repère les flèches sortant de chaque paroi (transmission) puis celle issue de la grille de ventilation (renouvellement d\'air) : leur somme donne la déperdition totale du local.',
        caption: 'Schéma des postes de déperdition thermique d\'un bâtiment : transmission par les parois (Dt) et renouvellement d\'air (Dr).'
      },
      recap: [
        'Les déperditions par transmission $D_t = \\sum U_i A_i (\\theta_i-\\theta_e)$ dépendent de chaque paroi (surface et coefficient $U$).',
        'Les déperditions par renouvellement d\'air $D_r = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e)$ dépendent du débit d\'air neuf $Q_v$.',
        'La déperdition totale $D = D_t + D_r$, en watts, sert à dimensionner la puissance d\'un générateur de chauffage.',
        'Le coefficient de déperdition globale $G_v = D/(\\theta_i-\\theta_e)$, en W/K, caractérise le bâtiment indépendamment de la condition climatique du jour.',
        '$G_v$ est directement réutilisé dans le calcul du besoin annuel de chauffage par la méthode des degrés-jours unifiés (DJU) — module suivant.'
      ],
      piege: 'Le coefficient $0{,}34$ de la formule de $D_r$ n\'est pas une constante à mémoriser sans comprendre : il vient de $\\rho \\times c_p / 3\\,600$ (masse volumique de l\'air × chaleur massique, convertis en Wh au lieu de joules). Attention aussi à ne pas oublier un poste de déperdition (plancher bas, ponts thermiques) dans la somme $D_t$ : un bilan thermique incomplet conduit à sous-dimensionner le générateur de chauffage.'
    },

    quiz: [
      {
        q: 'Les déperditions par transmission $D_t$ d\'une paroi dépendent de :',
        options: [
          'Uniquement de sa surface',
          'Son coefficient $U$, sa surface $A$, et l\'écart de température $(\\theta_i-\\theta_e)$',
          'Uniquement du débit de renouvellement d\'air',
          'Uniquement de la température extérieure'
        ],
        answer: 1,
        correction: '$D_t = U \\times A \\times (\\theta_i-\\theta_e)$ pour chaque paroi : les trois grandeurs interviennent, aucune ne suffit seule.'
      },
      {
        q: 'Le coefficient $0{,}34$ dans la formule $D_r = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e)$ provient de :',
        options: [
          'Une valeur réglementaire fixée arbitrairement',
          'La masse volumique de l\'air et sa chaleur massique, ramenées à l\'heure',
          'Le coefficient de transmission thermique moyen d\'un mur',
          'Le rendement moyen d\'une chaudière'
        ],
        answer: 1,
        correction: '$0{,}34$ Wh/(m³·K) $= \\rho \\times c_p / 3\\,600$, avec $\\rho \\approx 1{,}2$ kg/m³ et $c_p \\approx 1\\,004$ J/(kg·K) pour l\'air, le $3\\,600$ convertissant les secondes en heures.'
      },
      {
        q: 'Le coefficient de déperdition globale $G_v = D/(\\theta_i-\\theta_e)$ est utile car :',
        options: [
          'Il ne sert à rien de plus que $D$',
          'Il caractérise le bâtiment indépendamment de la condition climatique, et sert de base au calcul du besoin annuel (DJU)',
          'Il remplace entièrement le calcul de $D_t$',
          'Il ne s\'applique qu\'en été'
        ],
        answer: 1,
        correction: '$G_v$ isole la caractéristique propre au bâtiment (en W/K), indépendamment de l\'écart de température du jour retenu — c\'est cette valeur qui sera multipliée par les degrés-jours unifiés (DJU) pour estimer le besoin annuel de chauffage.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une maison individuelle', 'un bureau', 'un local commercial', 'un atelier artisanal', 'un pavillon de plain-pied'
        ]);
        const saison = pick([
          { theta_e: rand(-8, -2), desc: 'une vague de froid' },
          { theta_e: rand(-2, 3), desc: 'une nuit d\'hiver ordinaire' },
          { theta_e: rand(3, 7), desc: 'un hiver doux' }
        ]);
        const theta_i = rand(18, 21);
        const deltaT = theta_i - saison.theta_e;
        const Umur = randFloat(0.25, 0.45, 2);
        const Amur = rand(30, 70);
        const Uvitrage = randFloat(1.2, 2.4, 1);
        const Avitrage = rand(5, 15);
        const Qv = rand(60, 150);
        const DtMur = Umur * Amur * deltaT;
        const DtVitrage = Uvitrage * Avitrage * deltaT;
        const Dt = DtMur + DtVitrage;
        const Dr = 0.34 * Qv * deltaT;
        const D = Math.round(Dt + Dr);
        return {
          statement: `Dans ${contexte}, pendant ${saison.desc}, la température intérieure est $\\theta_i = ${theta_i}\\,°C$ et la température extérieure de base est $\\theta_e = ${saison.theta_e}\\,°C$.<br/><br/>L'enveloppe comprend un mur de $A = ${Amur}$ m² ($U = ${fr(Umur, 2)}$ W/(m²·K)) et des vitrages de $A = ${Avitrage}$ m² ($U = ${fr(Uvitrage, 1)}$ W/(m²·K)). Le débit de renouvellement d'air est $Q_v = ${Qv}$ m³/h.<br/><br/>Calcule la déperdition totale $D = D_t + D_r$ (en W, arrondie à l'unité).`,
          answer: D,
          tolerance: Math.max(30, Math.round(D * 0.05)),
          unit: 'W',
          hint: 'Calcule d\'abord $D_t$ (mur + vitrage), puis $D_r = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e)$, et additionne les deux.',
          solution: [
            `Écart de température : $\\theta_i - \\theta_e = ${theta_i} - (${saison.theta_e}) = ${fr(deltaT, 1)}\\,°C$.`,
            `Mur : $${Amur} \\times ${fr(Umur, 2)} \\times ${fr(deltaT, 1)} \\approx ${fr(DtMur, 1)}$ W. Vitrages : $${Avitrage} \\times ${fr(Uvitrage, 1)} \\times ${fr(deltaT, 1)} \\approx ${fr(DtVitrage, 1)}$ W.`,
            `Déperditions par transmission : $D_t \\approx ${fr(DtMur, 1)} + ${fr(DtVitrage, 1)} \\approx ${fr(Dt, 1)}$ W.`,
            `Déperditions par renouvellement d'air : $D_r = 0{,}34 \\times ${Qv} \\times ${fr(deltaT, 1)} \\approx ${fr(Dr, 1)}$ W.`,
            `Déperdition totale : $D = D_t + D_r \\approx ${fr(Dt, 1)} + ${fr(Dr, 1)} \\approx ${fr(D)}$ W.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bureau est chauffé à $\\theta_i = 20\\,°C$ ; la température extérieure de base retenue pour le site est $\\theta_e = -7\\,°C$. L\'enveloppe comprend : un mur de $A = 55$ m² ($U = 0{,}30$ W/(m²·K)), une toiture de $A = 60$ m² ($U = 0{,}18$ W/(m²·K)), un plancher bas de $A = 60$ m² ($U = 0{,}25$ W/(m²·K)), et des vitrages de $A = 12$ m² ($U = 1{,}6$ W/(m²·K)). Le débit de renouvellement d\'air est $Q_v = 180$ m³/h.',
      tasks: [
        'Calculer l\'écart de température $(\\theta_i - \\theta_e)$.',
        'Calculer les déperditions par transmission $D_t$ (mur, toiture, plancher bas, vitrages).',
        'Calculer les déperditions par renouvellement d\'air $D_r$, puis la déperdition totale $D$.',
        'En déduire le coefficient de déperdition globale $G_v$, qui sera réutilisé pour estimer le besoin annuel de chauffage de ce bureau.'
      ],
      solutions: [
        '$\\theta_i - \\theta_e = 20 - (-7) = 27\\,°C$.',
        'Mur : $55 \\times 0{,}30 \\times 27 = 445{,}5$ W. Toiture : $60 \\times 0{,}18 \\times 27 = 291{,}6$ W. Plancher bas : $60 \\times 0{,}25 \\times 27 = 405$ W. Vitrages : $12 \\times 1{,}6 \\times 27 = 518{,}4$ W. Total : $D_t = 445{,}5 + 291{,}6 + 405 + 518{,}4 = 1\\,660{,}5$ W.',
        '$D_r = 0{,}34 \\times 180 \\times 27 \\approx 1\\,652{,}4$ W. Déperdition totale : $D = D_t + D_r \\approx 1\\,660{,}5 + 1\\,652{,}4 \\approx 3\\,312{,}9$ W, soit environ $3{,}3$ kW.',
        '$G_v = D/(\\theta_i-\\theta_e) \\approx 3\\,312{,}9 / 27 \\approx 122{,}7$ W/K. Cette valeur, propre au bâtiment, sera multipliée par les degrés-jours unifiés (DJU) du site pour estimer le besoin annuel de chauffage.'
      ],
      finalAnswer: '$D \\approx 3{,}3$ kW et $G_v \\approx 122{,}7$ W/K. Ce coefficient global caractérise l\'enveloppe du bureau indépendamment des conditions du jour : c\'est lui qui servira de point de départ au calcul du besoin annuel de chauffage.'
    },

    evaluation: {
      title: 'Évaluation — Bilan thermique (déperditions)',
      duration: '20 min',
      questions: [
        {
          statement: 'Un mur de $A = 30$ m² ($U = 0{,}40$ W/(m²·K)) sépare un local à $\\theta_i = 20\\,°C$ d\'un extérieur à $\\theta_e = 0\\,°C$. Calculer les déperditions par transmission de ce mur (en W).',
          type: 'numeric',
          answer: 240,
          tolerance: 10,
          unit: 'W',
          points: 2,
          correction: '$D_t = U \\times A \\times (\\theta_i-\\theta_e) = 0{,}40 \\times 30 \\times 20 = 240$ W.'
        },
        {
          statement: 'Un local nécessite un débit de renouvellement d\'air $Q_v = 100$ m³/h, avec $\\theta_i = 19\\,°C$ et $\\theta_e = -1\\,°C$. Calculer les déperditions par renouvellement d\'air $D_r$ (en W).',
          type: 'numeric',
          answer: 680,
          tolerance: 30,
          unit: 'W',
          points: 3,
          correction: '$D_r = 0{,}34 \\times Q_v \\times (\\theta_i-\\theta_e) = 0{,}34 \\times 100 \\times 20 = 680$ W.'
        },
        {
          statement: 'La déperdition totale d\'un local est $D = 2\\,000$ W pour un écart $(\\theta_i-\\theta_e) = 25\\,°C$. Calculer le coefficient de déperdition globale $G_v$ (en W/K).',
          type: 'numeric',
          answer: 80,
          tolerance: 3,
          unit: 'W/K',
          points: 2,
          correction: '$G_v = D/(\\theta_i-\\theta_e) = 2\\,000/25 = 80$ W/K.'
        },
        {
          statement: 'Le bilan thermique en régime permanent total d\'un bâtiment s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$D = D_t \\times D_r$',
            '$D = D_t + D_r$',
            '$D = D_t - D_r$',
            '$D = D_t / D_r$'
          ],
          answer: 1,
          points: 2,
          correction: 'La déperdition totale est la somme des déperditions par transmission et par renouvellement d\'air : $D = D_t + D_r$.'
        },
        {
          statement: 'Pourquoi le coefficient $G_v$ est-il particulièrement utile pour la suite des calculs énergétiques (méthode des DJU) ?',
          type: 'multiple-choice',
          options: [
            'Parce qu\'il dépend de la température extérieure du jour du calcul',
            'Parce qu\'il caractérise le bâtiment indépendamment des conditions climatiques, et peut donc être multiplié par un cumul climatique (DJU) sur toute une saison',
            'Parce qu\'il remplace la puissance du générateur de chauffage',
            'Parce qu\'il ne s\'applique qu\'aux bâtiments climatisés'
          ],
          answer: 1,
          points: 3,
          correction: '$G_v$ isole une caractéristique propre à l\'enveloppe (en W/K), indépendante de l\'écart de température retenu un jour donné — ce qui permet de l\'utiliser directement avec un cumul climatique sur une saison entière (les degrés-jours unifiés).'
        }
      ]
    }
  });
