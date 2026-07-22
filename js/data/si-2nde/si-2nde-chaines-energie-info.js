/* =========================================================
   Spark Learning – data/si-2nde/si-2nde-chaines-energie-info.js
   Extrait de si-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: 'si-2nde-chaines-energie-info',
    level: 2, subject: 'si',
    icon: '⚡',
    title: 'Chaîne d\'énergie et chaîne d\'information',
    subtitle: 'Alimenter, distribuer, convertir, transmettre / Acquérir, traiter, communiquer',
    keywords: ['Alimenter', 'Distribuer', 'Convertir', 'Transmettre', 'Acquérir', 'Traiter', 'Communiquer'],
    physics: 'La chaîne d\'énergie et la chaîne d\'information sont les deux piliers de l\'analyse de tout système automatisé, du robot industriel à la voiture autonome en passant par la chaîne de production.',

    cours: {
      intro: 'Tout système technique transforme de l\'<strong>énergie</strong> et utilise de l\'<strong>information</strong> pour fonctionner. Ces deux flux sont modélisés par deux chaînes complémentaires.<br/><br/>La <strong>chaîne d\'énergie</strong> décrit le parcours de l\'énergie en 4 blocs : <strong>Alimenter</strong> (batterie, secteur $230$ V, panneau solaire) → <strong>Distribuer</strong> (relais, contacteur, hacheur) → <strong>Convertir</strong> (moteur CC, moteur MAS, vérin, résistance chauffante) → <strong>Transmettre</strong> (réducteur, courroie, engrenage, crémaillère).<br/><br/>La <strong>chaîne d\'information</strong> décrit le parcours de l\'information en 3 blocs : <strong>Acquérir</strong> (capteurs) → <strong>Traiter</strong> (microcontrôleur, automate programmable) → <strong>Communiquer</strong> (afficheur, réseau, signalisation). Elle pilote la chaîne d\'énergie via des ordres.<br/><br/>Le <strong>rendement global</strong> $\\eta$ mesure l\'efficacité de la chaîne d\'énergie : c\'est le rapport $\\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$, toujours compris entre $0$ et $1$.',
      definitions: [
        { term: 'Chaîne d\'énergie', def: 'Ensemble des composants assurant le flux d\'énergie. Ses 4 blocs : Alimenter → Distribuer → Convertir → Transmettre.' },
        { term: 'Chaîne d\'information', def: 'Ensemble des composants assurant le flux d\'information. Ses 3 blocs : Acquérir → Traiter → Communiquer. Elle pilote la chaîne d\'énergie.' },
        { term: 'Rendement ($\\eta$)', def: 'Rapport entre puissance utile et puissance absorbée : $\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$. Compris entre $0$ et $1$. Les pertes sont principalement thermiques (effet Joule, frottement).' },
        { term: 'Actionneur', def: 'Composant du bloc « Convertir » qui transforme une énergie en une autre. Exemples : moteur CC (électrique $\\to$ mécanique rotation, $P \\approx 50$ à $500$ W), vérin (hydraulique $\\to$ translation).' }
      ],
      method: {
        title: 'Identifier les chaînes et calculer le rendement global',
        steps: [
          '<strong>Bloc Alimenter + Distribuer</strong> : Identifier la source d\'énergie et le distributeur.<br/>Exemples concrets : batterie Li-ion $12$ V / $7$ Ah (Alimenter) → relais électromécanique ou hacheur série (Distribuer).<br/>Un portail automatique : batterie $12$ V → carte de commande avec relais inverseur.',
          '<strong>Bloc Convertir + Transmettre</strong> : Le convertisseur (actionneur) transforme l\'énergie, le transmetteur l\'adapte.<br/>Exemples concrets : moteur CC $12$ V / $50$ W (Convertir) → réducteur roue-vis sans fin $r = 1/40$ + crémaillère (Transmettre) → le portail translate.<br/>Un store automatique : moteur tubulaire ($\\eta = 0{,}80$) → tube d\'enroulement.',
          '<strong>Chaîne d\'information</strong> : Capteur (Acquérir), microcontrôleur (Traiter), interface (Communiquer).<br/>Exemples concrets : capteur infrarouge de présence (Acquérir) → Arduino Uno / ATmega328 (Traiter) → LED de signalisation + buzzer (Communiquer).',
          '<strong>Rendement global</strong> : Multiplier les rendements de chaque bloc traversé : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$.<br/>Exemple numérique : moteur CC ($\\eta_1 = 0{,}85$, soit $P_{\\text{utile}} = 0{,}85 \\times 200 = 170$ W) + réducteur ($\\eta_2 = 0{,}90$) → $\\eta_{\\text{global}} = 0{,}85 \\times 0{,}90 = 0{,}765$ soit $76{,}5\\%$. Puissance utile finale : $0{,}765 \\times 200 = 153$ W.'
        ]
      },
      diagram: {
        theme: 'si',
        kicker: 'Schéma-bloc SysML',
        title: 'Chaîne d\'énergie et chaîne d\'information — exemple du portail automatique',
        description: 'En bas, la <strong>chaîne d\'énergie</strong> (4 blocs) reprend l\'exemple du cours : batterie $12$ V → relais → moteur CC $12$ V / $50$ W → réducteur + crémaillère. En haut, la <strong>chaîne d\'information</strong> (3 blocs) pilote cette chaîne d\'énergie : capteur infrarouge → Arduino → LED/buzzer.',
        svg: `
          <svg viewBox="0 0 620 430" role="img" aria-labelledby="chaines-title chaines-desc">
            <title id="chaines-title">Chaine d'energie et chaine d'information du portail automatique</title>
            <desc id="chaines-desc">En haut, la chaine d'information : acquerir avec un capteur infrarouge, traiter avec un Arduino, communiquer avec une LED et un buzzer. En bas, la chaine d'energie : alimenter avec une batterie 12 volts, distribuer avec un relais, convertir avec un moteur CC 12 volts 50 watts, transmettre avec un reducteur et une cremaillere. Une fleche pointillee descend de traiter vers distribuer pour les ordres de commande, une autre fleche pointillee remonte du bas vers acquerir pour la presence detectee par le capteur.</desc>

            <defs>
              <marker id="arrow-si2nde-chaines" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <text class="label-soft" x="30" y="27">CHAÎNE D'INFORMATION</text>
            <text class="label-soft" x="30" y="292">CHAÎNE D'ÉNERGIE</text>

            <!-- ===== Chaîne d'information (haut) ===== -->
            <rect class="frame-line" x="30" y="40" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="90" y="65" text-anchor="middle">Acquérir</text>
            <text class="label-soft" x="90" y="81" text-anchor="middle">Capteur infrarouge</text>

            <rect class="frame-line" x="170" y="40" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="230" y="65" text-anchor="middle">Traiter</text>
            <text class="label-soft" x="230" y="81" text-anchor="middle">Arduino / ATmega328</text>

            <rect class="frame-line" x="340" y="40" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="400" y="65" text-anchor="middle">Communiquer</text>
            <text class="label-soft" x="400" y="81" text-anchor="middle">LED + buzzer</text>

            <line class="curve-main" x1="150" y1="70" x2="168" y2="70" marker-end="url(#arrow-si2nde-chaines)"></line>
            <line class="curve-main" x1="290" y1="70" x2="338" y2="70" marker-end="url(#arrow-si2nde-chaines)"></line>

            <!-- ===== Chaîne d'énergie (bas) ===== -->
            <rect class="frame-line" x="30" y="300" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="90" y="324" text-anchor="middle">Alimenter</text>
            <text class="label-soft" x="90" y="340" text-anchor="middle">Batterie 12 V</text>

            <rect class="frame-line" x="170" y="300" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="230" y="324" text-anchor="middle">Distribuer</text>
            <text class="label-soft" x="230" y="340" text-anchor="middle">Relais</text>

            <rect class="frame-line" x="310" y="300" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="370" y="324" text-anchor="middle">Convertir</text>
            <text class="label-soft" x="370" y="340" text-anchor="middle">Moteur CC 12 V/50 W</text>

            <rect class="frame-line" x="450" y="300" width="120" height="60" rx="8" fill="var(--bg-card)"></rect>
            <text class="annotation-label" x="510" y="324" text-anchor="middle">Transmettre</text>
            <text class="label-soft" x="510" y="340" text-anchor="middle">Réducteur + crémaillère</text>

            <line class="curve-main" x1="150" y1="330" x2="168" y2="330" marker-end="url(#arrow-si2nde-chaines)"></line>
            <line class="curve-main" x1="290" y1="330" x2="308" y2="330" marker-end="url(#arrow-si2nde-chaines)"></line>
            <line class="curve-main" x1="430" y1="330" x2="448" y2="330" marker-end="url(#arrow-si2nde-chaines)"></line>

            <!-- ===== Interactions entre les deux chaînes ===== -->
            <line class="focus-line" x1="230" y1="100" x2="230" y2="298" marker-end="url(#arrow-si2nde-chaines)"></line>
            <text class="annotation-label" x="240" y="205">Ordres</text>

            <polyline class="focus-line" points="570,300 570,130 90,130 90,102" marker-end="url(#arrow-si2nde-chaines)" fill="none"></polyline>
            <text class="annotation-label" x="330" y="123" text-anchor="middle">Présence détectée (capteur)</text>

            <!-- ===== Légende ===== -->
            <line class="curve-main" x1="30" y1="400" x2="70" y2="400"></line>
            <text class="label-soft" x="78" y="404">Flux principal de la chaîne (énergie ou information)</text>
            <line class="focus-line" x1="30" y1="418" x2="70" y2="418"></line>
            <text class="label-soft" x="78" y="422">Interaction entre les deux chaînes (ordres / mesure)</text>
          </svg>
        `,
        notes: [
          'La chaîne d\'information <strong>pilote</strong> la chaîne d\'énergie : le bloc « Traiter » (Arduino) envoie des <strong>ordres</strong> au bloc « Distribuer » (relais) — exactement ce que dit le cours : « elle pilote la chaîne d\'énergie via des ordres ».',
          'En retour, le capteur infrarouge (bloc « Acquérir ») détecte la présence d\'un obstacle ou d\'un véhicule près du portail : c\'est une grandeur physique issue de la chaîne d\'énergie / matière d\'œuvre.',
          'Chaque bloc de la chaîne d\'énergie reprend l\'exemple du cours (portail automatique) : batterie $12$ V → relais → moteur CC $12$ V / $50$ W → réducteur + crémaillère.'
        ],
        reading: 'Lis d\'abord chaque chaîne horizontalement (flèches pleines), puis repère les deux flèches pointillées verticales qui relient les deux chaînes : l\'une envoie un ordre vers le bas, l\'autre remonte une mesure vers le haut.',
        caption: 'Chaîne d\'énergie (Alimenter → Distribuer → Convertir → Transmettre) et chaîne d\'information (Acquérir → Traiter → Communiquer) du portail automatique, avec leurs interactions.'
      },
      example: {
        statement: 'Un store automatique est alimenté par le secteur ($230$ V). Un moteur tubulaire de rendement $\\eta_1 = 0{,}80$ entraîne un réducteur de rendement $\\eta_2 = 0{,}90$, qui fait tourner un tube d\'enroulement. La puissance absorbée par le moteur est $P_{\\text{abs}} = 150$ W. Calculer le rendement global et la puissance utile transmise au store.',
        steps: [
          'Rendement global : $\\eta = \\eta_1 \\times \\eta_2 = 0{,}80 \\times 0{,}90 = 0{,}72$ soit $72\\%$.',
          'Puissance utile : $P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}72 \\times 150 = 108$ W.',
          'Pertes totales : $P_{\\text{pertes}} = P_{\\text{abs}} - P_{\\text{utile}} = 150 - 108 = 42$ W (dissipées en chaleur par effet Joule et frottement).'
        ],
        answer: '$\\eta = 0{,}72$ ($72\\%$) et $P_{\\text{utile}} = 108$ W. Les $42$ W de pertes sont dissipés en chaleur.'
      },
      formulas: [
        '$\\eta = \\dfrac{P_{\\text{utile}}}{P_{\\text{absorbée}}}$ (rendement, sans unité, entre $0$ et $1$)',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots \\times \\eta_n$ (produit des rendements en série)',
        '$P_{\\text{utile}} = \\eta \\times P_{\\text{absorbée}}$ (puissance utile, en W)',
        '$P_{\\text{pertes}} = (1 - \\eta) \\times P_{\\text{absorbée}}$ (puissance dissipée)',
        'Énergie : $E = P \\times t$ (en J si $t$ en s, en Wh si $t$ en h)'
      ],
      recap: [
        'La chaîne d\'énergie (Alimenter → Distribuer → Convertir → Transmettre) décrit le flux d\'énergie de la source à la matière d\'œuvre.',
        'La chaîne d\'information (Acquérir → Traiter → Communiquer) pilote la chaîne d\'énergie via des ordres.',
        'Le rendement global est le <strong>produit</strong> des rendements individuels — il est toujours inférieur au plus petit rendement.',
        'Les pertes sont principalement thermiques : effet Joule dans les conducteurs et frottement dans les transmissions mécaniques.'
      ],
      piege: 'Le rendement global n\'est <strong>pas</strong> la moyenne des rendements, c\'est leur <strong>produit</strong>. Exemple : deux blocs à $80\\%$ chacun donnent $0{,}80 \\times 0{,}80 = 0{,}64$ soit $64\\%$ (et non $80\\%$). Plus il y a d\'étages en série, plus le rendement global chute.'
    },

    quiz: [
      {
        q: 'Un moteur CC $12$ V / $60$ W alimente un réducteur puis une courroie. Dans quel bloc de la chaîne d\'énergie se situe le moteur ?',
        options: [
          'Alimenter — il fournit l\'énergie au système',
          'Distribuer — il répartit l\'énergie',
          'Convertir — il transforme l\'énergie électrique en mécanique',
          'Transmettre — il transmet le mouvement'
        ],
        answer: 2,
        correction: 'Le moteur CC convertit l\'énergie électrique en énergie mécanique de rotation : il assure le bloc <strong>Convertir</strong>. Le bloc Alimenter est assuré par la batterie ou le secteur, et le réducteur/courroie assurent le bloc Transmettre.'
      },
      {
        q: 'Un système comporte un hacheur ($\\eta_1 = 0{,}92$), un moteur ($\\eta_2 = 0{,}85$) et un réducteur ($\\eta_3 = 0{,}90$). La puissance absorbée est $P_{\\text{abs}} = 400$ W. Quelle est la puissance utile ?',
        options: [
          '$P_{\\text{utile}} = 400 \\times (0{,}92 + 0{,}85 + 0{,}90) / 3 \\approx 356$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}92 \\times 0{,}85 \\times 0{,}90 \\approx 281{,}5$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}92 \\approx 368$ W',
          '$P_{\\text{utile}} = 400 \\times 0{,}85 = 340$ W'
        ],
        answer: 1,
        correction: '$\\eta_{\\text{global}} = 0{,}92 \\times 0{,}85 \\times 0{,}90 = 0{,}7038$. Donc $P_{\\text{utile}} = 0{,}7038 \\times 400 = 281{,}5$ W. On multiplie les rendements (pas de moyenne !), puis on applique au $P_{\\text{abs}}$.'
      },
      {
        q: 'La chaîne d\'information se compose, dans l\'ordre, de :',
        options: [
          'Alimenter → Distribuer → Convertir → Transmettre',
          'Communiquer → Traiter → Acquérir',
          'Acquérir → Traiter → Communiquer',
          'Mesurer → Calculer → Afficher → Stocker'
        ],
        answer: 2,
        correction: 'La chaîne d\'information suit le flux : <strong>Acquérir</strong> (capteurs) → <strong>Traiter</strong> (microcontrôleur, automate) → <strong>Communiquer</strong> (afficheur, réseau). C\'est toujours dans cet ordre, du capteur vers l\'interface utilisateur. L\'option « Alimenter → Distribuer → Convertir → Transmettre » décrit la chaîne d\'énergie.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var nbBlocs = rand(2, 4);
        var rendements = [];
        var labels = [];
        var blocs = pick([
          [{ nom: 'hacheur', eta: [0.88, 0.95] }, { nom: 'moteur CC', eta: [0.75, 0.90] }, { nom: 'réducteur', eta: [0.85, 0.95] }, { nom: 'courroie', eta: [0.90, 0.98] }],
          [{ nom: 'transformateur', eta: [0.90, 0.97] }, { nom: 'variateur', eta: [0.88, 0.94] }, { nom: 'moteur MAS', eta: [0.80, 0.92] }, { nom: 'réducteur', eta: [0.85, 0.95] }],
          [{ nom: 'batterie', eta: [0.92, 0.98] }, { nom: 'hacheur', eta: [0.88, 0.95] }, { nom: 'moteur CC', eta: [0.78, 0.88] }, { nom: 'engrenage', eta: [0.90, 0.96] }]
        ]);
        for (var i = 0; i < nbBlocs; i++) {
          var b = blocs[i];
          var eta = randFloat(b.eta[0], b.eta[1], 2);
          rendements.push(eta);
          labels.push(b.nom);
        }
        var etaGlobal = 1;
        for (var j = 0; j < rendements.length; j++) {
          etaGlobal *= rendements[j];
        }
        etaGlobal = parseFloat(etaGlobal.toFixed(3));
        var Pabs = rand(2, 10) * 50;

        var systeme = pick([
          'un bras robotisé', 'un tapis roulant industriel', 'une pompe hydraulique',
          'un portail coulissant', 'un treuil de chantier', 'un convoyeur à bande'
        ]);

        var rendStr = rendements.map(function(r, idx) {
          return '$\\eta_' + (idx + 1) + ' = ' + r.toFixed(2).replace('.', '{,}') + '$ (' + labels[idx] + ')';
        }).join(', ');

        var solSteps = ['Système étudié : ' + systeme + ' avec ' + nbBlocs + ' blocs en série.'];
        solSteps.push('Rendement global : $\\eta = ' + rendements.map(function(r, idx) { return '\\eta_' + (idx + 1); }).join(' \\times ') + '$');
        solSteps.push('$\\eta = ' + rendements.map(function(r) { return r.toFixed(2).replace('.', '{,}'); }).join(' \\times ') + ' = ' + etaGlobal.toFixed(3).replace('.', '{,}') + '$');

        var Putile = parseFloat((etaGlobal * Pabs).toFixed(1));
        solSteps.push('Puissance utile : $P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = ' + etaGlobal.toFixed(3).replace('.', '{,}') + ' \\times ' + Pabs + ' = ' + Putile.toFixed(1).replace('.', '{,}') + '$ W');
        var Ppertes = parseFloat((Pabs - Putile).toFixed(1));
        solSteps.push('Pertes : $P_{\\text{pertes}} = ' + Pabs + ' - ' + Putile.toFixed(1).replace('.', '{,}') + ' = ' + Ppertes.toFixed(1).replace('.', '{,}') + '$ W dissipés en chaleur.');

        return {
          statement: 'La chaîne d\'énergie de ' + systeme + ' comporte ' + nbBlocs + ' blocs en série : ' + rendStr + '.<br/>La puissance absorbée en entrée est $P_{\\text{abs}} = ' + Pabs + '$ W.<br/><br/>Calcule la puissance utile $P_{\\text{utile}}$ en sortie (arrondie au dixième).',
          answer: Putile,
          tolerance: 2,
          unit: 'W',
          hint: 'Calcule d\'abord le rendement global : $\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\cdots$ (c\'est un <strong>produit</strong>, pas une moyenne). Puis applique : $P_{\\text{utile}} = \\eta_{\\text{global}} \\times P_{\\text{abs}}$.',
          solution: solSteps
        };
      }
    },

    probleme: {
      context: 'Un bras robotisé KUKA dans une usine automobile est alimenté par le réseau électrique ($230$ V, $50$ Hz). Il déplace des pièces métalliques de $5$ kg. La chaîne d\'énergie comporte : un transformateur $230$ V → $48$ V (rendement $\\eta_1 = 0{,}95$), un variateur de vitesse à IGBT ($\\eta_2 = 0{,}92$), un moteur brushless Maxon $48$ V / $200$ W ($\\eta_3 = 0{,}88$) et un réducteur planétaire ($\\eta_4 = 0{,}90$). La puissance absorbée au primaire du transformateur est $P_{\\text{abs}} = 800$ W.',
      tasks: [
        'Identifier les 4 blocs de la chaîne d\'énergie (Alimenter, Distribuer, Convertir, Transmettre) et associer chaque composant au bon bloc.',
        'Calculer le rendement global de la chaîne d\'énergie.',
        'Calculer la puissance utile transmise à la pièce métallique et la puissance totale perdue sous forme de chaleur.'
      ],
      solutions: [
        'Alimenter : réseau $230$ V / transformateur abaisseur. Distribuer : variateur de vitesse à IGBT. Convertir : moteur brushless Maxon (énergie électrique → mécanique de rotation). Transmettre : réducteur planétaire → bras articulé → pince → pièce.',
        '$\\eta_{\\text{global}} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\eta_4 = 0{,}95 \\times 0{,}92 \\times 0{,}88 \\times 0{,}90 = 0{,}6920$ soit environ $69{,}2\\%$.',
        '$P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}692 \\times 800 = 553{,}6$ W. $P_{\\text{pertes}} = 800 - 553{,}6 = 246{,}4$ W dissipés en chaleur (effet Joule dans le moteur, frottement dans le réducteur, pertes cuivre/fer dans le transformateur).'
      ],
      finalAnswer: 'Le rendement global est d\'environ $69{,}2\\%$ et la puissance utile vaut $553{,}6$ W sur les $800$ W absorbés. Plus de $246$ W sont perdus en chaleur.'
    },

    evaluation: {
      title: 'Évaluation — Chaîne d\'énergie et chaîne d\'information',
      duration: '20 min',
      questions: [
        {
          statement: 'Un moteur CC $24$ V est relié à un réducteur à engrenages puis à une vis à billes. Quel bloc de la chaîne d\'énergie le moteur assure-t-il ?',
          type: 'multiple-choice',
          options: [
            'Alimenter',
            'Distribuer',
            'Convertir',
            'Transmettre'
          ],
          answer: 2,
          points: 2,
          correction: 'Le moteur CC convertit l\'énergie électrique en énergie mécanique de rotation. Il assure le bloc <strong>Convertir</strong>. Le réducteur et la vis à billes assurent le bloc Transmettre (ils adaptent et transmettent le mouvement).'
        },
        {
          statement: 'Un système industriel a deux blocs de rendements $\\eta_1 = 0{,}82$ (variateur) et $\\eta_2 = 0{,}91$ (moteur). La puissance absorbée est $P_{\\text{abs}} = 500$ W. Calculer la puissance utile en sortie (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 373,
          tolerance: 2,
          unit: 'W',
          points: 3,
          correction: '$\\eta_{\\text{global}} = 0{,}82 \\times 0{,}91 = 0{,}7462$. Puis $P_{\\text{utile}} = 0{,}7462 \\times 500 = 373{,}1 \\approx 373$ W. Les pertes valent $500 - 373 = 127$ W.'
        },
        {
          statement: 'Dans un système automatisé de tri postal, quel composant assure la fonction « Acquérir » de la chaîne d\'information ?',
          type: 'multiple-choice',
          options: [
            'Le moteur du tapis roulant',
            'Le lecteur de code-barres (capteur optique)',
            'L\'automate programmable Siemens S7',
            'L\'écran de supervision SCADA'
          ],
          answer: 1,
          points: 2,
          correction: 'Le lecteur de code-barres est un <strong>capteur</strong> optique qui acquiert l\'information (identifiant du colis). Le moteur est dans la chaîne d\'énergie (bloc Convertir). L\'automate traite l\'information (bloc Traiter). L\'écran SCADA communique (bloc Communiquer).'
        },
        {
          statement: 'Un moteur MAS absorbe $P_{\\text{abs}} = 750$ W et a un rendement $\\eta = 0{,}84$. Quelle est la puissance perdue sous forme de chaleur (en W, arrondie à l\'unité) ?',
          type: 'numeric',
          answer: 120,
          tolerance: 2,
          unit: 'W',
          points: 3,
          correction: '$P_{\\text{utile}} = \\eta \\times P_{\\text{abs}} = 0{,}84 \\times 750 = 630$ W. Pertes : $P_{\\text{pertes}} = P_{\\text{abs}} - P_{\\text{utile}} = 750 - 630 = 120$ W. On peut aussi calculer directement : $P_{\\text{pertes}} = (1 - 0{,}84) \\times 750 = 0{,}16 \\times 750 = 120$ W.'
        }
      ]
    }
  });
