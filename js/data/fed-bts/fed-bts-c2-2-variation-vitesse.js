/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-c2-2-variation-vitesse.js
   BTS FED — S8-C2-2 Variation de vitesse (variateur, lois d'affinité)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-c2-2-variation-vitesse',
    level: 3, subject: 'fed',
    icon: '🕹️',
    title: 'Variation de vitesse',
    subtitle: 'Variateur de vitesse, lois d\'affinité (débit, puissance absorbée)',
    keywords: ['Variateur de vitesse', 'Lois d\'affinité', 'Lois de similitude', 'Pompe centrifuge', 'Ventilateur centrifuge'],
    physics: 'Ralentir légèrement une pompe ou un ventilateur permet de réduire très fortement sa consommation électrique — bien plus que proportionnellement. Ce résultat, contre-intuitif au premier abord, découle des <strong>lois d\'affinité</strong> : l\'argument numéro un pour justifier l\'installation d\'un variateur de vitesse sur les réseaux hydrauliques et aérauliques (modules B4-1, B4-2).',

    cours: {
      intro: 'Un <strong>variateur de vitesse</strong> (ou variateur de fréquence) permet d\'ajuster en continu la vitesse de rotation d\'un moteur électrique, en modifiant la fréquence qui l\'alimente. Sur une pompe ou un ventilateur <strong>centrifuge</strong>, cet ajustement de vitesse a des conséquences directes et prévisibles sur le débit produit et la puissance électrique absorbée, décrites par les <strong>lois d\'affinité</strong> (ou lois de similitude).<br/><br/>Ces lois indiquent que le <strong>débit</strong> $Q$ varie proportionnellement à la vitesse $N$, mais que la <strong>puissance absorbée</strong> $P$ varie proportionnellement au <strong>cube</strong> de la vitesse. Cette relation cubique est la clé de la pertinence énergétique d\'un variateur : réduire modestement la vitesse d\'une pompe ou d\'un ventilateur permet de réduire très fortement sa consommation, bien plus qu\'une simple proportionnalité ne le laisserait supposer.<br/><br/>C\'est cette propriété qui justifie l\'installation d\'un variateur sur les réseaux hydrauliques (B4-1) et aérauliques (B4-2) fonctionnant à charge variable : plutôt que de faire tourner en permanence une pompe ou un ventilateur à pleine vitesse et de dissiper l\'excès de débit par une vanne ou un registre, on adapte directement la vitesse du moteur au besoin réel, ce qui économise l\'essentiel du surplus de puissance électrique.<br/><br/>Le choix, la configuration et le paramétrage d\'un variateur dépendent ensuite de l\'application précise (pompe, ventilateur, compresseur), de la plage de vitesse utile, et des contraintes du réseau électrique (harmoniques, compatibilité électromagnétique).',
      definitions: [
        { term: 'Variateur de vitesse', def: 'Dispositif électronique qui ajuste en continu la vitesse de rotation d\'un moteur électrique, en faisant varier la fréquence de son alimentation. Permet d\'adapter la vitesse d\'une pompe ou d\'un ventilateur au besoin réel plutôt que de fonctionner en permanence à pleine vitesse.' },
        { term: 'Lois d\'affinité (lois de similitude)', def: 'Relations décrivant l\'évolution du débit et de la puissance absorbée d\'une pompe ou d\'un ventilateur centrifuge lorsque sa vitesse de rotation varie : le débit varie proportionnellement à la vitesse, la puissance absorbée varie proportionnellement au <strong>cube</strong> de la vitesse.' },
        { term: 'Débit $Q$', def: 'Volume de fluide (eau, air) déplacé par unité de temps par la pompe ou le ventilateur, directement proportionnel à sa vitesse de rotation $N$ selon les lois d\'affinité.' },
        { term: 'Puissance absorbée $P$', def: 'Puissance électrique consommée par le moteur entraînant la pompe ou le ventilateur, variant selon les lois d\'affinité comme le <strong>cube</strong> de la vitesse de rotation $N$.' }
      ],
      method: {
        title: 'Appliquer les lois d\'affinité à une pompe ou un ventilateur centrifuge',
        steps: [
          '<strong>Relever les grandeurs de référence</strong> au point de fonctionnement initial : débit $Q_1$, puissance absorbée $P_1$, vitesse $N_1$.',
          '<strong>Identifier la nouvelle vitesse</strong> $N_2$ envisagée (réduction ou augmentation, souvent exprimée en % de $N_1$).',
          '<strong>Calculer le nouveau débit</strong> : $Q_2 = Q_1 \\times (N_2/N_1)$ — relation de <strong>proportionnalité simple</strong>.',
          '<strong>Calculer la nouvelle puissance absorbée</strong> : $P_2 = P_1 \\times (N_2/N_1)^3$ — relation <strong>cubique</strong>, à ne surtout pas confondre avec celle du débit.',
          '<strong>Comparer les deux résultats</strong> : une faible réduction de vitesse produit une réduction de débit proportionnelle, mais une réduction de puissance bien plus importante — c\'est cet écart qui justifie économiquement le variateur.'
        ]
      },
      example: {
        statement: 'Une pompe de circulation fonctionne initialement à $N_1=100\\%$ de sa vitesse nominale, avec un débit $Q_1=20$ m³/h et une puissance absorbée $P_1=1{,}5$ kW. On réduit sa vitesse à $N_2=80\\%$ de $N_1$ grâce à un variateur.<br/><br/>Calculer le nouveau débit $Q_2$ et la nouvelle puissance absorbée $P_2$.',
        steps: [
          'Rapport de vitesse : $N_2/N_1 = 80/100 = 0{,}8$.',
          'Nouveau débit (proportionnel) : $Q_2 = Q_1 \\times (N_2/N_1) = 20 \\times 0{,}8 = 16$ m³/h.',
          'Nouvelle puissance absorbée (cube) : $P_2 = P_1 \\times (N_2/N_1)^3 = 1{,}5 \\times 0{,}8^3 = 1{,}5 \\times 0{,}512 \\approx 0{,}77$ kW.'
        ],
        answer: 'En réduisant la vitesse de seulement $20\\%$, le débit ne baisse que de $20\\%$ (passant à $16$ m³/h), mais la puissance absorbée chute d\'environ $49\\%$ (passant à $0{,}77$ kW) : c\'est exactement cet effet de levier qui rend le variateur de vitesse si intéressant énergétiquement.'
      },
      formulas: [
        '$\\dfrac{Q_2}{Q_1} = \\dfrac{N_2}{N_1}$ (le débit varie proportionnellement à la vitesse)',
        '$\\dfrac{P_2}{P_1} = \\left(\\dfrac{N_2}{N_1}\\right)^3$ (la puissance absorbée varie comme le cube de la vitesse)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Lois d\'affinité d\'une pompe ou d\'un ventilateur centrifuge',
        title: 'Débit proportionnel à N, puissance proportionnelle à N³',
        description: 'Une réduction modeste de la vitesse de rotation entraîne une réduction proportionnelle du débit, mais une réduction beaucoup plus importante de la puissance absorbée, car celle-ci varie comme le cube de la vitesse.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="c22-graph-title c22-graph-desc">
            <title id="c22-graph-title">Comparaison graphique debit et puissance selon la vitesse</title>
            <desc id="c22-graph-desc">Repere avec vitesse en abscisse de 0 a 100 pourcent. Deux courbes : une droite representant le debit proportionnel a la vitesse, et une courbe cubique representant la puissance absorbee, nettement plus basse que la droite pour les vitesses reduites, illustrant qu'une baisse de 20 pourcent de vitesse ne reduit le debit que de 20 pourcent mais la puissance d'environ 49 pourcent.</desc>

            <line class="frame-line" x1="60" y1="200" x2="440" y2="200"></line>
            <line class="frame-line" x1="60" y1="200" x2="60" y2="30"></line>
            <text class="tick-label" x="440" y="218" text-anchor="end">Vitesse N (%)</text>
            <text class="tick-label" x="45" y="35" text-anchor="end">100%</text>

            <!-- droite debit Q = N -->
            <line class="curve-main" x1="60" y1="200" x2="440" y2="35"></line>
            <text class="annotation-label" x="420" y="55" text-anchor="end">Débit Q (∝ N)</text>

            <!-- courbe cubique puissance -->
            <path class="curve-main" d="M60,200 C 220,195 300,160 440,35" fill="none"></path>
            <text class="annotation-label" x="420" y="120" text-anchor="end">Puissance P (∝ N³)</text>

            <!-- repere a 80% -->
            <line class="guide-line" x1="380" y1="200" x2="380" y2="30"></line>
            <text class="tick-label" x="380" y="218" text-anchor="middle">80%</text>
          </svg>
        `,
        notes: [
          'La courbe du <strong>débit</strong> est une droite : elle suit exactement la vitesse de rotation.',
          'La courbe de la <strong>puissance absorbée</strong> s\'effondre bien plus vite aux vitesses réduites : elle suit le cube de la vitesse.',
          'À $N=80\\%$, le débit vaut encore $80\\%$ de sa valeur nominale, mais la puissance ne vaut plus qu\'environ $51\\%$ ($0{,}8^3\\approx 0{,}512$) de sa valeur nominale.'
        ],
        reading: 'Compare les deux courbes à une même vitesse réduite : l\'écart vertical entre la droite du débit et la courbe de la puissance illustre l\'économie d\'énergie permise par le variateur.',
        caption: 'Aux vitesses réduites, la puissance absorbée chute bien plus vite que le débit : c\'est l\'argument central en faveur du variateur de vitesse.'
      },
      recap: [
        'Le <strong>variateur de vitesse</strong> ajuste en continu la vitesse d\'un moteur électrique en faisant varier sa fréquence d\'alimentation.',
        'Loi d\'affinité sur le débit : $Q_2/Q_1 = N_2/N_1$ (proportionnalité simple).',
        'Loi d\'affinité sur la puissance absorbée : $P_2/P_1 = (N_2/N_1)^3$ (relation cubique).',
        'Une baisse modeste de vitesse produit une économie de puissance bien plus importante que la baisse de débit correspondante : c\'est l\'argument numéro un pour justifier un variateur sur pompe ou ventilateur (B4-1, B4-2).',
        'Le choix et le paramétrage du variateur dépendent de l\'application, de la plage de vitesse utile et des contraintes du réseau électrique.'
      ],
      piege: 'L\'erreur la plus fréquente est d\'appliquer la <strong>même loi de proportionnalité simple</strong> au débit et à la puissance : le débit suit $N_2/N_1$, mais la puissance suit $(N_2/N_1)^3$ — oublier l\'exposant $3$ conduit à sous-estimer très largement l\'économie d\'énergie réelle permise par un variateur de vitesse. Attention également : ces lois d\'affinité s\'appliquent à une <strong>pompe ou un ventilateur centrifuge</strong> donné, sur son propre réseau ; elles ne permettent pas de comparer directement les performances de deux machines différentes entre elles.'
    },

    quiz: [
      {
        q: 'Selon les lois d\'affinité, le débit d\'une pompe centrifuge varie :',
        options: [
          'Proportionnellement au carré de la vitesse',
          'Proportionnellement à la vitesse',
          'Proportionnellement au cube de la vitesse',
          'De façon inversement proportionnelle à la vitesse'
        ],
        answer: 1,
        correction: 'Le débit $Q$ varie proportionnellement à la vitesse $N$ : $Q_2/Q_1 = N_2/N_1$.'
      },
      {
        q: 'Selon les lois d\'affinité, la puissance absorbée par une pompe ou un ventilateur centrifuge varie :',
        options: [
          'Proportionnellement à la vitesse',
          'Proportionnellement au carré de la vitesse',
          'Proportionnellement au cube de la vitesse',
          'Elle ne dépend pas de la vitesse'
        ],
        answer: 2,
        correction: 'La puissance absorbée $P$ varie comme le cube de la vitesse : $P_2/P_1 = (N_2/N_1)^3$ — c\'est cette relation qui rend le variateur de vitesse si intéressant énergétiquement.'
      },
      {
        q: 'L\'argument principal en faveur de l\'installation d\'un variateur de vitesse sur une pompe ou un ventilateur est :',
        options: [
          'Il augmente la vitesse maximale de la machine',
          'Une réduction modeste de vitesse permet une réduction bien plus importante de la puissance absorbée',
          'Il supprime totalement le besoin d\'entretien du moteur',
          'Il permet de se passer de moteur électrique'
        ],
        answer: 1,
        correction: 'Grâce à la relation cubique entre puissance et vitesse, une réduction modeste de la vitesse (par exemple $20\\%$) entraîne une réduction bien plus importante de la puissance absorbée (environ $49\\%$) : c\'est l\'argument numéro un en faveur du variateur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const machine = pick([
          'une pompe de circulation de chauffage',
          'un ventilateur de CTA',
          'une pompe de relevage d\'un circuit hydraulique',
          'un ventilateur d\'extraction de désenfumage en mode confort'
        ]);
        const Q1 = rand(10, 40);
        const P1 = randFloat(1, 5, 1);
        const ratioPct = pick([90, 85, 80, 75, 70]);
        const ratio = ratioPct / 100;
        const P2 = parseFloat((P1 * Math.pow(ratio, 3)).toFixed(2));
        return {
          statement: `Pour ${machine}, la vitesse nominale $N_1$ correspond à une puissance absorbée $P_1=${fr(P1, 1)}$ kW. On réduit la vitesse à $N_2=${ratioPct}\\%$ de $N_1$ grâce à un variateur.<br/><br/>Calcule la nouvelle puissance absorbée $P_2$ (en kW, arrondie au centième).`,
          answer: P2,
          tolerance: Math.max(0.05, P2 * 0.05),
          unit: 'kW',
          hint: `Applique $P_2 = P_1 \\times (N_2/N_1)^3$, avec $N_2/N_1 = ${fr(ratio, 2)}$.`,
          solution: [
            `$P_2 = P_1 \\times (N_2/N_1)^3 = ${fr(P1, 1)} \\times ${fr(ratio, 2)}^3 \\approx ${fr(P1, 1)} \\times ${fr(parseFloat(Math.pow(ratio, 3).toFixed(3)), 3)} \\approx ${fr(P2, 2)}$ kW.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un ventilateur de CTA fonctionne à vitesse nominale $N_1$, avec un débit $Q_1=8000$ m³/h et une puissance absorbée $P_1=4$ kW. L\'exploitant souhaite réduire le débit à $Q_2=6000$ m³/h en période de faible occupation, en installant un variateur de vitesse plutôt qu\'en fermant partiellement un registre.',
      tasks: [
        'Calculer le rapport de vitesse $N_2/N_1$ nécessaire pour obtenir ce débit réduit (le débit étant proportionnel à la vitesse).',
        'En déduire la nouvelle puissance absorbée $P_2$ à cette vitesse réduite.',
        'Calculer l\'économie de puissance réalisée, en % par rapport à $P_1$.',
        'Pourquoi fermer un registre pour réduire le débit à $6000$ m³/h ne permettrait-il pas la même économie d\'énergie qu\'un variateur de vitesse ?'
      ],
      solutions: [
        'Le débit étant proportionnel à la vitesse : $N_2/N_1 = Q_2/Q_1 = 6000/8000 = 0{,}75$, soit $75\\%$ de la vitesse nominale.',
        '$P_2 = P_1 \\times (N_2/N_1)^3 = 4 \\times 0{,}75^3 = 4 \\times 0{,}422 \\approx 1{,}69$ kW.',
        'Économie : $(P_1-P_2)/P_1 = (4-1{,}69)/4 \\approx 0{,}578$, soit environ $57{,}8\\%$ d\'économie de puissance électrique.',
        'Fermer un registre <strong>ne réduit pas la vitesse</strong> du moteur : le ventilateur continue de tourner à pleine vitesse et donc de consommer une puissance proche de $P_1$, l\'énergie en excès étant simplement dissipée par la perte de charge supplémentaire créée par le registre partiellement fermé, sans aucune économie électrique réelle. Seule une réduction effective de la vitesse (variateur) permet de bénéficier de la loi cubique sur la puissance.'
      ],
      finalAnswer: 'Pour passer de $8000$ à $6000$ m³/h, il faut réduire la vitesse à $75\\%$ de $N_1$, ce qui fait chuter la puissance absorbée de $4$ kW à environ $1{,}69$ kW, soit près de $58\\%$ d\'économie — un gain impossible à obtenir en fermant simplement un registre à vitesse constante.'
    },

    evaluation: {
      title: 'Évaluation — Variation de vitesse',
      duration: '20 min',
      questions: [
        {
          statement: 'Une pompe centrifuge a un débit nominal $Q_1=30$ m³/h à vitesse $N_1$. On réduit la vitesse à $N_2=90\\%$ de $N_1$. Calculer le nouveau débit $Q_2$ (en m³/h).',
          type: 'numeric',
          answer: 27,
          tolerance: 0.5,
          unit: 'm³/h',
          points: 2,
          correction: '$Q_2 = Q_1\\times(N_2/N_1) = 30\\times 0{,}9 = 27$ m³/h.'
        },
        {
          statement: 'Pour cette même pompe, la puissance absorbée nominale est $P_1=3$ kW. Calculer la nouvelle puissance absorbée $P_2$ à $N_2=90\\%$ de $N_1$ (en kW, arrondie au centième).',
          type: 'numeric',
          answer: 2.19,
          tolerance: 0.1,
          unit: 'kW',
          points: 3,
          correction: '$P_2 = P_1\\times(N_2/N_1)^3 = 3\\times 0{,}9^3 = 3\\times 0{,}729 \\approx 2{,}19$ kW.'
        },
        {
          statement: 'La loi d\'affinité reliant puissance absorbée et vitesse d\'une pompe ou d\'un ventilateur centrifuge est de nature :',
          type: 'multiple-choice',
          options: ['Proportionnelle simple', 'Quadratique', 'Cubique', 'Logarithmique'],
          answer: 2,
          points: 2,
          correction: 'La puissance absorbée varie comme le <strong>cube</strong> de la vitesse : $P_2/P_1=(N_2/N_1)^3$.'
        },
        {
          statement: 'Réduire le débit d\'un ventilateur en fermant un registre plutôt qu\'en réduisant sa vitesse par variateur :',
          type: 'multiple-choice',
          options: [
            'Produit exactement la même économie d\'énergie',
            'Ne réduit pas la vitesse du moteur, donc n\'apporte pas l\'économie de puissance liée à la loi cubique',
            'Est toujours impossible techniquement',
            'Augmente automatiquement le débit réel'
          ],
          answer: 1,
          points: 3,
          correction: 'Le registre dissipe l\'excès de débit sans réduire la vitesse du moteur : la puissance absorbée reste proche de sa valeur nominale, contrairement à une réduction de vitesse par variateur qui bénéficie de la loi cubique.'
        }
      ]
    }
  });
