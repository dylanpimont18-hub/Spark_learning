/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b4-1-reseaux-hydrauliques.js
   BTS FED — S8-B4-1 Réseaux hydrauliques — typologie, circulateurs, puissance absorbée
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b4-1-reseaux-hydrauliques',
    level: 3, subject: 'fed',
    icon: '⚙️',
    title: 'Réseaux hydrauliques',
    subtitle: 'Typologie de réseau, composants, puissance absorbée par un circulateur',
    keywords: ['Réseau bitube', 'Réseau pieuvre', 'Vase d\'expansion', 'Circulateur', 'Puissance hydraulique'],
    physics: 'Faire circuler l\'eau d\'un générateur (module B1-1) vers ses émetteurs (module B1-2) exige un <strong>circulateur</strong>, dont la consommation électrique dépend directement du <strong>débit</strong> et de la <strong>hauteur manométrique</strong> qu\'il doit fournir — deux grandeurs déjà rencontrées lors de l\'étude du point de fonctionnement d\'un réseau (module A3).',

    cours: {
      intro: 'Un <strong>réseau hydraulique</strong> de chauffage ou de climatisation distribue un fluide caloporteur (eau, eau glycolée, eau glacée...) du générateur vers les émetteurs, puis le ramène. Deux typologies dominent : le réseau <strong>bitube</strong> (un tube aller, un tube retour, chaque émetteur alimenté en parallèle, débit et température homogènes) et le réseau en <strong>pieuvre</strong> (chaque émetteur relié individuellement à un collecteur central par deux tubes dédiés, facilitant l\'équilibrage et la maintenance).<br/><br/>Plusieurs composants clés équipent ces réseaux : le <strong>vase d\'expansion</strong> absorbe la dilatation de l\'eau lorsqu\'elle chauffe (l\'eau, incompressible, ferait éclater le circuit sans cet organe de sécurité) ; la <strong>bouteille de découplage</strong> sépare hydrauliquement le circuit primaire (générateur) du circuit secondaire (distribution), pour que chacun conserve son propre débit indépendamment de l\'autre.<br/><br/>Le <strong>circulateur</strong> (ou pompe) est le cœur actif du réseau : il doit vaincre les pertes de charge du circuit (module A3) pour maintenir le débit voulu. Sa consommation électrique dépend directement de la <strong>puissance hydraulique</strong> qu\'il doit fournir, elle-même liée au débit et à la hauteur manométrique du point de fonctionnement.',
      definitions: [
        { term: 'Réseau bitube', def: 'Typologie où chaque émetteur est alimenté en parallèle par un tube aller et un tube retour communs à tous les émetteurs — simple à installer, mais équilibrage plus délicat sur un réseau étendu.' },
        { term: 'Réseau en pieuvre (collecteur)', def: 'Typologie où chaque émetteur est relié individuellement, par deux tubes dédiés, à un collecteur central — équilibrage et intervention facilités émetteur par émetteur.' },
        { term: 'Vase d\'expansion', def: 'Réservoir à membrane qui absorbe l\'augmentation de volume de l\'eau du circuit lorsqu\'elle chauffe, évitant une montée en pression dangereuse dans un circuit fermé rempli d\'un fluide incompressible.' },
        { term: 'Bouteille de découplage', def: 'Élément hydraulique qui sépare le circuit primaire (générateur) du circuit secondaire (distribution), permettant à chacun de fonctionner avec son propre débit, indépendamment de l\'autre.' },
        { term: 'Puissance hydraulique $P_{\\text{hyd}}$', def: 'Puissance mécanique que le circulateur transmet réellement au fluide : $P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$, avec $\\rho$ la masse volumique de l\'eau ($1\\,000$ kg/m³), $g=9{,}81$ m/s², $Q$ le débit (m³/s) et $H$ la hauteur manométrique (m de colonne d\'eau).' },
        { term: 'Puissance absorbée $P_{\\text{abs}}$', def: 'Puissance électrique réellement consommée par le circulateur : $P_{\\text{abs}} = P_{\\text{hyd}}/\\eta$, avec $\\eta$ le rendement global du circulateur (moteur + roue), typiquement $0{,}3$ à $0{,}6$ selon la technologie (classique ou à rotor noyé à vitesse variable).' }
      ],
      method: {
        title: 'Calculer la puissance absorbée d\'un circulateur',
        steps: [
          '<strong>Déterminer le point de fonctionnement</strong> du réseau (débit $Q$ et hauteur manométrique $H$), comme au module A3.',
          '<strong>Convertir le débit</strong> en m³/s si besoin (division par $3\\,600$ à partir de m³/h).',
          '<strong>Calculer la puissance hydraulique</strong> $P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$.',
          '<strong>Diviser par le rendement</strong> $\\eta$ du circulateur pour obtenir la puissance absorbée $P_{\\text{abs}} = P_{\\text{hyd}}/\\eta$.',
          '<strong>Comparer à la plaque signalétique</strong> du circulateur envisagé, pour vérifier sa compatibilité avec le point de fonctionnement réel du réseau.'
        ]
      },
      example: {
        statement: 'Un circulateur doit fournir un débit $Q=2$ m³/h sous une hauteur manométrique $H=6$ m CE, avec un rendement global $\\eta=0{,}30$.<br/><br/>Calculer la puissance hydraulique puis la puissance absorbée de ce circulateur.',
        steps: [
          'Conversion du débit : $Q = 2/3\\,600 \\approx 0{,}000556$ m³/s.',
          '$P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H = 1\\,000 \\times 9{,}81 \\times 0{,}000556 \\times 6 \\approx 32{,}7$ W.',
          '$P_{\\text{abs}} = P_{\\text{hyd}}/\\eta = 32{,}7/0{,}30 \\approx 109$ W.'
        ],
        answer: '$P_{\\text{abs}} \\approx 109$ W : une valeur cohérente avec la consommation d\'un petit circulateur domestique — on constate que la puissance réellement absorbée est plus de <strong>trois fois supérieure</strong> à la puissance hydraulique utile, l\'essentiel de l\'écart étant dissipé sous forme de pertes internes (rendement modeste, surtout à vitesse fixe).'
      },
      formulas: [
        '$P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$ (puissance hydraulique, en W, avec $Q$ en m³/s et $H$ en m CE)',
        '$P_{\\text{abs}} = P_{\\text{hyd}}/\\eta$ (puissance absorbée, en W)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Répartition de la puissance d\'un circulateur',
        title: 'De la puissance électrique absorbée à la puissance hydraulique utile',
        description: 'Sur la puissance électrique absorbée par le circulateur, seule une fraction se retrouve sous forme de puissance hydraulique réellement transmise au fluide. Le reste est dissipé par les pertes internes (moteur, frottements).',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="circ-graph-title circ-graph-desc">
            <title id="circ-graph-title">Repartition de la puissance absorbee d'un circulateur</title>
            <desc id="circ-graph-desc">Diagramme en barres. Une barre large a gauche represente la puissance absorbee totale. Une barre plus etroite a droite, de hauteur nettement inferieure, represente la puissance hydraulique utile transmise au fluide. La difference de hauteur represente les pertes internes.</desc>

            <line class="frame-line" x1="50" y1="200" x2="440" y2="200"></line>

            <!-- barre puissance absorbee -->
            <rect class="frame-line" x="100" y="50" width="90" height="150" fill="none"></rect>
            <text class="label-soft" x="145" y="40" text-anchor="middle">Pabs</text>
            <text class="label-soft" x="145" y="215" text-anchor="middle">(absorbée)</text>

            <!-- barre puissance hydraulique -->
            <rect class="frame-line" x="290" y="155" width="90" height="45" fill="none"></rect>
            <text class="label-soft" x="335" y="145" text-anchor="middle">Phyd</text>
            <text class="label-soft" x="335" y="215" text-anchor="middle">(hydraulique)</text>

            <!-- fleche pertes -->
            <line class="guide-line" x1="200" y1="60" x2="280" y2="160"></line>
            <text class="annotation-label" x="205" y="100" text-anchor="start">Pertes internes</text>
            <text class="annotation-label" x="205" y="118" text-anchor="start">(rendement η)</text>
          </svg>
        `,
        notes: [
          'La barre de gauche représente toute l\'énergie électrique <strong>absorbée</strong> par le circulateur.',
          'Seule la barre de droite, plus petite, représente la puissance <strong>hydraulique utile</strong>, réellement transmise au fluide.',
          'L\'écart entre les deux barres correspond aux <strong>pertes internes</strong> du circulateur (frottements mécaniques, pertes électriques du moteur), quantifiées par le rendement $\\eta$.'
        ],
        reading: 'Compare la hauteur des deux barres : plus le rendement $\\eta$ est faible, plus la barre de puissance absorbée doit être haute pour fournir la même puissance hydraulique utile.',
        caption: 'Seule une fraction de la puissance électrique absorbée par un circulateur se retrouve sous forme de puissance hydraulique utile.'
      },
      recap: [
        'Un réseau hydraulique peut être <strong>bitube</strong> (simple, émetteurs en parallèle) ou en <strong>pieuvre</strong> (collecteur, équilibrage facilité).',
        'Le <strong>vase d\'expansion</strong> absorbe la dilatation de l\'eau chauffée ; la <strong>bouteille de découplage</strong> sépare primaire et secondaire.',
        'La puissance hydraulique utile : $P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$, avec $Q$ en m³/s et $H$ en m CE.',
        'La puissance réellement absorbée par le circulateur : $P_{\\text{abs}} = P_{\\text{hyd}}/\\eta$, toujours supérieure à $P_{\\text{hyd}}$.',
        'Un circulateur à vitesse variable adapte $Q$ et $H$ au besoin réel, réduisant $P_{\\text{abs}}$ par rapport à un circulateur à vitesse fixe surdimensionné en permanence.'
      ],
      piege: 'Le piège classique est d\'oublier la conversion d\'unités : $Q$ doit être en <strong>m³/s</strong> (pas m³/h) et $H$ en <strong>mètres de colonne d\'eau</strong> (pas en Pa ni en bar) dans la formule $P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$ — un oubli de conversion du débit ($/3\\,600$) fausse le résultat d\'un facteur $3\\,600$. Ne pas confondre non plus la puissance hydraulique (utile, transmise au fluide) avec la puissance absorbée (payée sur la facture électrique) : c\'est toujours cette dernière, plus élevée, qui doit être comparée à la puissance indiquée sur la plaque signalétique du circulateur.'
    },

    quiz: [
      {
        q: 'Le rôle du vase d\'expansion dans un réseau hydraulique fermé est de :',
        options: [
          'Filtrer les impuretés du circuit',
          'Absorber la dilatation de l\'eau chauffée, pour éviter une montée en pression dangereuse',
          'Séparer le circuit primaire du circuit secondaire',
          'Remplacer le circulateur'
        ],
        answer: 1,
        correction: 'L\'eau étant incompressible, sa dilatation lors du chauffage doit être absorbée par le vase d\'expansion, sous peine de faire monter dangereusement la pression du circuit fermé.'
      },
      {
        q: 'La formule $P_{\\text{hyd}} = \\rho \\times g \\times Q \\times H$ donne :',
        options: [
          'La puissance électrique absorbée par le circulateur',
          'La puissance hydraulique utile, réellement transmise au fluide',
          'Le rendement du circulateur',
          'La hauteur manométrique du réseau'
        ],
        answer: 1,
        correction: 'Cette formule donne la puissance hydraulique utile ; la puissance réellement absorbée (électrique) est obtenue en divisant par le rendement $\\eta$ du circulateur.'
      },
      {
        q: 'Un circulateur avec un rendement $\\eta$ plus faible, pour la même puissance hydraulique utile à fournir, aura une puissance absorbée :',
        options: [
          'Plus faible',
          'Plus élevée',
          'Identique, le rendement n\'a pas d\'effet',
          'Nulle'
        ],
        answer: 1,
        correction: 'Comme $P_{\\text{abs}} = P_{\\text{hyd}}/\\eta$, un rendement plus faible au dénominateur augmente mécaniquement la puissance absorbée nécessaire pour fournir la même puissance hydraulique utile.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un circulateur de chauffage d\'une maison individuelle',
          'une pompe de distribution d\'un réseau de climatisation à eau glacée',
          'un circulateur de bouclage ECS d\'un immeuble',
          'une pompe primaire reliant une chaudière à sa bouteille de découplage'
        ]);
        const Qm3h = randFloat(1, 5, 1);
        const H = rand(3, 10);
        const eta = randFloat(0.25, 0.45, 2);
        const Qs = Qm3h / 3600;
        const Phyd = 1000 * 9.81 * Qs * H;
        const Pabs = parseFloat((Phyd / eta).toFixed(1));
        return {
          statement: `Dans ${contexte}, le point de fonctionnement impose un débit $Q=${fr(Qm3h, 1)}$ m³/h sous une hauteur manométrique $H=${H}$ m CE. Le rendement global du circulateur est $\\eta=${fr(eta, 2)}$.<br/><br/>Calcule la puissance absorbée $P_{\\text{abs}}$ de ce circulateur (en W, arrondie à l'unité).`,
          answer: Math.round(Pabs),
          tolerance: 3,
          unit: 'W',
          hint: 'Convertis $Q$ en m³/s ($/3\\,600$), calcule $P_{\\text{hyd}} = \\rho g Q H$, puis divise par $\\eta$.',
          solution: [
            `Débit converti : $Q = ${fr(Qm3h, 1)}/3\\,600 \\approx ${fr(Qs, 6)}$ m³/s.`,
            `$P_{\\text{hyd}} = 1\\,000 \\times 9{,}81 \\times ${fr(Qs, 6)} \\times ${H} \\approx ${fr(Phyd, 1)}$ W.`,
            `$P_{\\text{abs}} = P_{\\text{hyd}}/\\eta \\approx ${fr(Phyd, 1)}/${fr(eta, 2)} \\approx ${fr(Pabs, 1)}$ W.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un réseau de chauffage de type bitube dessert un immeuble. Son point de fonctionnement (module A3) impose un débit $Q=4{,}5$ m³/h sous une hauteur manométrique $H=8$ m CE. Deux circulateurs sont proposés : un modèle à vitesse fixe classique ($\\eta=0{,}28$) et un modèle à rotor noyé à vitesse variable ($\\eta=0{,}48$ au point de fonctionnement réel, plus souvent atteint qu\'à vitesse fixe).',
      tasks: [
        'Calculer la puissance hydraulique utile $P_{\\text{hyd}}$ du réseau.',
        'Calculer la puissance absorbée $P_{\\text{abs}}$ pour le circulateur à vitesse fixe.',
        'Calculer la puissance absorbée $P_{\\text{abs}}$ pour le circulateur à vitesse variable.',
        'Calculer l\'économie annuelle d\'énergie électrique (en kWh) permise par le circulateur à vitesse variable, si l\'installation fonctionne en moyenne $2\\,000$ h/an à ce point de fonctionnement.'
      ],
      solutions: [
        '$Q = 4{,}5/3\\,600 = 0{,}00125$ m³/s. $P_{\\text{hyd}} = 1\\,000\\times9{,}81\\times0{,}00125\\times8 \\approx 98{,}1$ W.',
        '$P_{\\text{abs,fixe}} = 98{,}1/0{,}28 \\approx 350{,}4$ W.',
        '$P_{\\text{abs,variable}} = 98{,}1/0{,}48 \\approx 204{,}4$ W.',
        'Écart de puissance : $350{,}4-204{,}4 = 146$ W. Sur $2\\,000$ h/an : $146\\times2\\,000 = 292\\,000$ Wh $\\approx 292$ kWh/an économisés grâce au circulateur à vitesse variable, mieux adapté au point de fonctionnement réel du réseau.'
      ],
      finalAnswer: 'Le circulateur à vitesse variable consomme environ $204$ W contre $350$ W pour le modèle à vitesse fixe, soit une économie d\'environ $292$ kWh par an pour ce réseau — un gain qui justifie souvent le surcoût à l\'achat sur la durée de vie de l\'équipement.'
    },

    evaluation: {
      title: 'Évaluation — Réseaux hydrauliques',
      duration: '20 min',
      questions: [
        {
          statement: 'Un circulateur fournit $Q=3$ m³/h sous $H=5$ m CE. Calculer la puissance hydraulique $P_{\\text{hyd}}$ (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 41,
          tolerance: 3,
          unit: 'W',
          points: 3,
          correction: '$Q=3/3\\,600\\approx0{,}000833$ m³/s. $P_{\\text{hyd}}=1\\,000\\times9{,}81\\times0{,}000833\\times5\\approx40{,}9$ W.'
        },
        {
          statement: 'Pour cette puissance hydraulique, avec un rendement $\\eta=0{,}35$, calculer la puissance absorbée $P_{\\text{abs}}$ (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 117,
          tolerance: 5,
          unit: 'W',
          points: 3,
          correction: '$P_{\\text{abs}}=40{,}9/0{,}35\\approx116{,}9$ W.'
        },
        {
          statement: 'Un réseau hydraulique en pieuvre (collecteur), comparé à un réseau bitube, se caractérise par :',
          type: 'multiple-choice',
          options: [
            'Chaque émetteur relié individuellement au collecteur par deux tubes dédiés',
            'Un seul tube aller et retour commun à tous les émetteurs',
            'L\'absence totale de vase d\'expansion',
            'Un fonctionnement uniquement en eau glacée'
          ],
          answer: 0,
          points: 2,
          correction: 'Le réseau en pieuvre relie chaque émetteur individuellement au collecteur central, ce qui facilite l\'équilibrage et l\'intervention émetteur par émetteur — à la différence du bitube, où les émetteurs sont en parallèle sur un tube commun.'
        },
        {
          statement: 'La bouteille de découplage a pour fonction de :',
          type: 'multiple-choice',
          options: [
            'Chauffer directement l\'eau du circuit',
            'Séparer hydrauliquement le circuit primaire et le circuit secondaire, chacun conservant son propre débit',
            'Remplacer le vase d\'expansion',
            'Mesurer le débit du réseau'
          ],
          answer: 1,
          points: 2,
          correction: 'La bouteille de découplage permet au circuit primaire (générateur) et au circuit secondaire (distribution) de fonctionner chacun avec son propre débit, sans interférence hydraulique entre eux.'
        },
        {
          statement: 'À point de fonctionnement identique, un circulateur à vitesse variable bien réglé consomme généralement moins qu\'un circulateur à vitesse fixe classique car :',
          type: 'multiple-choice',
          options: [
            'Il fournit une puissance hydraulique plus faible',
            'Son rendement effectif au point de fonctionnement réel est meilleur, réduisant la puissance absorbée pour la même puissance hydraulique',
            'Il ne nécessite pas de vase d\'expansion',
            'Il fonctionne uniquement la nuit'
          ],
          answer: 1,
          points: 3,
          correction: 'Un circulateur à vitesse variable adapte son fonctionnement au besoin réel du réseau, avec un meilleur rendement effectif : pour la même puissance hydraulique utile, la puissance absorbée ($P_{\\text{abs}}=P_{\\text{hyd}}/\\eta$) est donc réduite.'
        }
      ]
    }
  });
