/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a3-dynamique-fluides.js
   BTS FED — S8-A3 Dynamique des fluides (réseaux CVC)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a3-dynamique-fluides',
    level: 3, subject: 'fed',
    icon: '🌀',
    title: 'Dynamique des fluides en réseau CVC',
    subtitle: 'Pertes de charge, courbe réseau et point de fonctionnement',
    keywords: ['Perte de charge', 'Courbe réseau', 'Point de fonctionnement', 'Circulateur', 'HMT'],
    physics: 'Choisir un circulateur ou un ventilateur ne se résume pas à prendre « le plus puissant possible » : une fois installé, l\'appareil ne fonctionnera jamais n\'importe où sur sa courbe. Il fonctionnera exactement là où sa courbe rencontre celle du réseau qu\'il alimente — le <strong>point de fonctionnement</strong>, une notion centrale pour tout dimensionnement hydraulique ou aéraulique en génie climatique.',

    cours: {
      intro: 'Un fluide qui circule dans un réseau (hydraulique ou aéraulique) perd de la pression tout au long de son parcours à cause des <strong>frottements</strong> : c\'est la <strong>perte de charge</strong>. Plus le débit est grand, plus cette perte de charge est importante — la courbe de pertes de charge d\'un réseau est <strong>croissante</strong> avec le débit.<br/><br/>À l\'inverse, un circulateur, une pompe ou un ventilateur fournit une pression (la HMT, hauteur manométrique totale) qui <strong>diminue</strong> quand le débit qu\'on lui demande augmente : c\'est sa courbe caractéristique, donnée par le constructeur.<br/><br/>Ces deux courbes évoluent en sens opposé. Le <strong>point de fonctionnement</strong> est l\'unique point où elles se croisent : c\'est le débit et la pression réellement obtenus dans l\'installation, quelle que soit la capacité théorique de la pompe ailleurs sur sa courbe.',
      definitions: [
        { term: 'Perte de charge linéique', def: 'Perte de pression due au frottement du fluide le long d\'une longueur droite de conduite : $\\Delta p_{\\text{lin}} = J \\times L$, avec $J$ (en Pa/m) donné par abaque ou formule de Darcy-Weisbach, et $L$ la longueur de la conduite (m).' },
        { term: 'Perte de charge singulière', def: 'Perte de pression localisée à un accident de parcours : coude, vanne, té, réduction de section. S\'ajoute à la perte linéique, souvent via un coefficient ou une longueur équivalente.' },
        { term: 'Courbe de pertes de charge du réseau', def: 'Perte de charge totale $\\Delta p_{\\text{réseau}}(Q) = \\Delta p_{\\text{lin}} + \\Delta p_{\\text{sing}}$, <strong>croissante</strong> avec le débit $Q$ — souvent modélisée par $\\Delta p_{\\text{réseau}} \\approx k \\times Q^2$.' },
        { term: 'Courbe caractéristique circulateur / pompe / ventilateur', def: 'HMT (hauteur manométrique totale) fournie par l\'appareil en fonction du débit demandé, <strong>décroissante</strong> avec $Q$. Donnée par le constructeur, propre à chaque modèle.' },
        { term: 'Point de fonctionnement', def: 'Intersection entre la courbe caractéristique du circulateur/pompe/ventilateur et la courbe de pertes de charge du réseau : c\'est le seul débit $Q_f$ et la seule HMT $\\text{HMT}_f$ que l\'installation peut réellement atteindre.' },
        { term: 'Cavitation', def: 'Phénomène de vaporisation locale du fluide lorsque la pression chute trop bas côté aspiration de la pompe (souvent pour un débit trop élevé) : à surveiller en réseau ouvert comme fermé.' },
        { term: 'Équilibrage', def: 'Réglage des organes du réseau (vannes de réglage) pour répartir correctement les débits entre plusieurs circuits en parallèle, chacun ayant sa propre courbe de pertes de charge.' }
      ],
      method: {
        title: 'Déterminer le point de fonctionnement d\'un circulateur sur son réseau',
        steps: [
          '<strong>Écrire la courbe caractéristique du circulateur</strong> $\\text{HMT}_{\\text{pompe}}(Q)$, décroissante avec $Q$ (donnée constructeur, souvent approchée par $\\text{HMT}_0 - c \\times Q^2$).',
          '<strong>Écrire la courbe de pertes de charge du réseau</strong> $\\text{HMT}_{\\text{réseau}}(Q) = \\Delta p_{\\text{lin}} + \\Delta p_{\\text{sing}}$, croissante avec $Q$, souvent approchée par $k \\times Q^2$.',
          '<strong>Poser l\'égalité au point de fonctionnement</strong> : $\\text{HMT}_{\\text{pompe}}(Q_f) = \\text{HMT}_{\\text{réseau}}(Q_f)$, et résoudre pour trouver $Q_f$.',
          '<strong>En déduire $\\text{HMT}_f$</strong> en réinjectant $Q_f$ dans l\'une ou l\'autre des deux courbes (les deux doivent donner le même résultat — c\'est une vérification utile).',
          '<strong>Vérifier la cohérence</strong> : un point de fonctionnement à débit trop élevé peut exposer la pompe à un risque de cavitation ; sur un réseau à plusieurs circuits, un équilibrage est nécessaire pour que chaque circuit reçoive le débit prévu.'
        ]
      },
      example: {
        statement: 'Un circulateur de chauffage collectif a pour courbe caractéristique $\\text{HMT}_{\\text{pompe}}(Q) = 8 - 0{,}008 \\times Q^2$ (HMT en mCE, $Q$ en m³/h). Le réseau qu\'il alimente présente une courbe de pertes de charge $\\text{HMT}_{\\text{réseau}}(Q) = 0{,}012 \\times Q^2$.<br/><br/>Déterminer le débit $Q_f$ et la HMT $\\text{HMT}_f$ au point de fonctionnement.',
        steps: [
          'Au point de fonctionnement, les deux courbes se croisent : $8 - 0{,}008\\,Q_f^2 = 0{,}012\\,Q_f^2$.',
          'On regroupe les termes en $Q_f^2$ : $8 = 0{,}012\\,Q_f^2 + 0{,}008\\,Q_f^2 = 0{,}020\\,Q_f^2$, donc $Q_f^2 = 8 / 0{,}020 = 400$.',
          '$Q_f = \\sqrt{400} = 20$ m³/h.',
          'Vérification par la courbe réseau : $\\text{HMT}_f = 0{,}012 \\times 20^2 = 0{,}012 \\times 400 = 4{,}8$ mCE. Par la courbe pompe : $8 - 0{,}008 \\times 400 = 8 - 3{,}2 = 4{,}8$ mCE — les deux coïncident, ce qui confirme le calcul.'
        ],
        answer: '$Q_f = 20$ m³/h et $\\text{HMT}_f = 4{,}8$ mCE : c\'est le débit et la pression réellement obtenus dans cette installation, même si le circulateur serait théoriquement capable de fournir un débit plus élevé sur un réseau moins résistant.'
      },
      formulas: [
        '$\\Delta p_{\\text{lin}} = J \\times L$ (perte de charge linéique, $J$ en Pa/m, $L$ en m)',
        '$\\text{HMT}_{\\text{réseau}}(Q) \\approx k \\times Q^2$ (courbe de pertes de charge du réseau, croissante avec $Q$)',
        '$\\text{HMT}_{\\text{pompe}}(Q) \\approx \\text{HMT}_0 - c \\times Q^2$ (courbe caractéristique du circulateur, décroissante avec $Q$)',
        'Point de fonctionnement : $\\text{HMT}_{\\text{pompe}}(Q_f) = \\text{HMT}_{\\text{réseau}}(Q_f)$'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Point de fonctionnement circulateur / réseau',
        title: 'Intersection de la courbe pompe et de la courbe réseau',
        description: 'La courbe caractéristique du circulateur (décroissante) et la courbe de pertes de charge du réseau (croissante) se croisent en un unique point : le point de fonctionnement, qui fixe le débit et la HMT réellement obtenus.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="pf-graph-title pf-graph-desc">
            <title id="pf-graph-title">Point de fonctionnement d'un circulateur sur un reseau</title>
            <desc id="pf-graph-desc">Graphique HMT en fonction du debit. Une courbe decroissante represente la caracteristique du circulateur, une courbe croissante represente les pertes de charge du reseau. Les deux courbes se croisent en un point unique, le point de fonctionnement, dont on projette le debit et la HMT sur les axes.</desc>

            <line class="frame-line" x1="50" y1="230" x2="430" y2="230"></line>
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>

            <!-- courbe pompe (decroissante) -->
            <polyline class="curve-main" points="60,50 180,90 300,140 420,205" fill="none"></polyline>
            <text class="annotation-label" x="65" y="38" text-anchor="start">HMT pompe</text>

            <!-- courbe reseau (croissante) -->
            <polyline class="curve-main" points="60,215 180,165 300,110 420,45" fill="none"></polyline>
            <text class="annotation-label" x="300" y="35" text-anchor="start">Courbe réseau</text>

            <!-- projections du point de fonctionnement -->
            <line class="guide-line" x1="266" y1="126" x2="266" y2="230"></line>
            <line class="guide-line" x1="50" y1="126" x2="266" y2="126"></line>

            <!-- point de fonctionnement -->
            <circle class="plot-point" cx="266" cy="126" r="5"></circle>
            <text class="annotation-label" x="285" y="95" text-anchor="start">Point de fonctionnement</text>

            <text class="tick-label" x="266" y="245" text-anchor="middle">Qf</text>
            <text class="tick-label" x="40" y="130" text-anchor="end">HMTf</text>
            <text class="label-soft" x="430" y="250" text-anchor="end">Débit Q</text>
            <text class="label-soft" x="55" y="15" text-anchor="start">HMT</text>
          </svg>
        `,
        notes: [
          'La courbe du circulateur (« HMT pompe ») est <strong>décroissante</strong> : plus on lui demande de débit, moins il peut fournir de pression.',
          'La courbe du réseau est <strong>croissante</strong> : plus le débit est important, plus le frottement dans les conduites (pertes linéiques et singulières) augmente.',
          'Les deux courbes ne se croisent qu\'en un seul point : c\'est le <strong>point de fonctionnement</strong>, dont on lit le débit $Q_f$ et la HMT $\\text{HMT}_f$ en projetant sur les axes.'
        ],
        reading: 'Suis la courbe décroissante (pompe) et la courbe croissante (réseau) jusqu\'à leur intersection : les pointillés projettent ce point unique sur les deux axes pour lire Qf et HMTf.',
        caption: 'Point de fonctionnement d\'un circulateur : intersection entre sa courbe caractéristique (décroissante) et la courbe de pertes de charge du réseau qu\'il alimente (croissante).'
      },
      recap: [
        'Un réseau perd de la pression par frottement : pertes de charge <strong>linéiques</strong> (le long des conduites) et <strong>singulières</strong> (coudes, vannes, tés).',
        'La courbe de pertes de charge du réseau est <strong>croissante</strong> avec le débit ; la courbe caractéristique du circulateur/pompe/ventilateur est <strong>décroissante</strong>.',
        'Le <strong>point de fonctionnement</strong> est l\'unique intersection de ces deux courbes : c\'est le débit et la HMT réellement obtenus, pas une valeur choisie librement.',
        'Fermer une vanne augmente la résistance du réseau (la courbe réseau devient plus raide) : le point de fonctionnement se déplace vers un débit plus faible et une HMT plus élevée.',
        'Sur un réseau à plusieurs circuits en parallèle, chacun a sa propre courbe de pertes de charge : un <strong>équilibrage</strong> est nécessaire pour répartir correctement les débits.'
      ],
      piege: 'On ne peut pas choisir indépendamment un débit et une HMT pour une installation donnée : les deux sont <strong>liés</strong> par l\'intersection des deux courbes, un seul point de fonctionnement existe pour un couple (circulateur, réseau) donné. Pour en obtenir un autre, il faut soit changer de circulateur (autre courbe pompe), soit modifier le réseau (vanne, diamètre de conduite — autre courbe réseau). Attention également : un point de fonctionnement à débit très élevé peut exposer la pompe à un risque de <strong>cavitation</strong>, en particulier côté aspiration.'
    },

    quiz: [
      {
        q: 'Que distingue une perte de charge linéique d\'une perte de charge singulière ?',
        options: [
          'La linéique dépend du débit, la singulière n\'en dépend jamais',
          'La linéique est due au frottement le long d\'une conduite droite, la singulière à un accident de parcours (coude, vanne, té)',
          'La linéique concerne l\'air, la singulière uniquement l\'eau',
          'Il n\'y a aucune différence, ce sont deux noms pour la même chose'
        ],
        answer: 1,
        correction: 'La perte de charge linéique ($\\Delta p_{\\text{lin}} = J \\times L$) est due au frottement sur la longueur droite de conduite ; la perte singulière est localisée à un accident de parcours (coude, vanne, té, réduction de section).'
      },
      {
        q: 'Comment évolue la courbe caractéristique d\'un circulateur (HMT en fonction du débit) ?',
        options: [
          'Elle est croissante avec le débit',
          'Elle est décroissante avec le débit',
          'Elle est constante quel que soit le débit',
          'Elle dépend uniquement de la longueur du réseau'
        ],
        answer: 1,
        correction: 'La courbe caractéristique d\'un circulateur, d\'une pompe ou d\'un ventilateur est décroissante : plus le débit demandé augmente, moins l\'appareil peut fournir de pression (HMT).'
      },
      {
        q: 'Le point de fonctionnement d\'une installation est défini par :',
        options: [
          'Le débit maximal que peut fournir le circulateur',
          'L\'intersection entre la courbe caractéristique du circulateur et la courbe de pertes de charge du réseau',
          'La perte de charge singulière la plus élevée du réseau',
          'La pression atmosphérique au point d\'aspiration'
        ],
        answer: 1,
        correction: 'Le point de fonctionnement est l\'unique point où la courbe (décroissante) du circulateur et la courbe (croissante) du réseau se croisent : c\'est le débit et la HMT réellement obtenus dans l\'installation.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un réseau de chauffage collectif',
          'un réseau de climatisation par poutres froides',
          'un réseau de distribution d\'ECS bouclée',
          'un circuit hydraulique de production sur PAC'
        ]);
        const HMT0 = randFloat(6, 14, 1);
        const c = randFloat(0.004, 0.012, 3);
        const k = randFloat(0.006, 0.018, 3);
        const Qf = Math.sqrt(HMT0 / (c + k));
        const QfR = parseFloat(Qf.toFixed(1));
        const somme = parseFloat((c + k).toFixed(3));
        const QfCarre = parseFloat((HMT0 / (c + k)).toFixed(1));
        return {
          statement: `Dans ${contexte}, le circulateur a pour courbe caractéristique $\\text{HMT}_{\\text{pompe}}(Q) = ${fr(HMT0, 1)} - ${fr(c, 3)} \\times Q^2$ (HMT en mCE, $Q$ en m³/h). Le réseau alimenté présente une courbe de pertes de charge $\\text{HMT}_{\\text{réseau}}(Q) = ${fr(k, 3)} \\times Q^2$.<br/><br/>Détermine le débit $Q_f$ au point de fonctionnement (en m³/h, arrondi au dixième).`,
          answer: QfR,
          tolerance: Math.max(0.5, parseFloat((QfR * 0.05).toFixed(2))),
          unit: 'm³/h',
          hint: 'Au point de fonctionnement, les deux courbes sont égales : résous $\\text{HMT}_0 - c\\,Q^2 = k\\,Q^2$.',
          solution: [
            `À l'égalité : $${fr(HMT0, 1)} - ${fr(c, 3)}\\,Q_f^2 = ${fr(k, 3)}\\,Q_f^2$, donc $${fr(HMT0, 1)} = (${fr(c, 3)} + ${fr(k, 3)}) \\times Q_f^2$.`,
            `$Q_f^2 = \\dfrac{${fr(HMT0, 1)}}{${fr(somme, 3)}} \\approx ${fr(QfCarre, 1)}$.`,
            `$Q_f = \\sqrt{${fr(QfCarre, 1)}} \\approx ${fr(QfR, 1)}$ m³/h.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un circulateur a pour courbe caractéristique $\\text{HMT}_{\\text{pompe}}(Q) = 10 - 0{,}01 \\times Q^2$ (HMT en mCE, $Q$ en m³/h). Le réseau qu\'il alimente présente initialement une courbe de pertes de charge $\\text{HMT}_{\\text{réseau,1}}(Q) = 0{,}015 \\times Q^2$. On ferme partiellement une vanne de réglage sur ce réseau, ce qui fait passer sa courbe de pertes de charge à $\\text{HMT}_{\\text{réseau,2}}(Q) = 0{,}025 \\times Q^2$.',
      tasks: [
        'Déterminer le débit $Q_1$ et la HMT $\\text{HMT}_1$ au point de fonctionnement avant fermeture partielle de la vanne.',
        'Déterminer le débit $Q_2$ et la HMT $\\text{HMT}_2$ au point de fonctionnement après fermeture partielle de la vanne.',
        'Commenter l\'effet de la fermeture de la vanne sur le débit et la HMT, et faire le lien avec la notion d\'équilibrage d\'un réseau à plusieurs circuits.'
      ],
      solutions: [
        '$10 - 0{,}01\\,Q_1^2 = 0{,}015\\,Q_1^2 \\Rightarrow 10 = 0{,}025\\,Q_1^2 \\Rightarrow Q_1^2 = 400 \\Rightarrow Q_1 = 20$ m³/h. $\\text{HMT}_1 = 0{,}015 \\times 400 = 6$ mCE (vérification : $10 - 0{,}01 \\times 400 = 6$ mCE, cohérent).',
        '$10 - 0{,}01\\,Q_2^2 = 0{,}025\\,Q_2^2 \\Rightarrow 10 = 0{,}035\\,Q_2^2 \\Rightarrow Q_2^2 \\approx 285{,}7 \\Rightarrow Q_2 \\approx 16{,}9$ m³/h. $\\text{HMT}_2 \\approx 0{,}025 \\times 285{,}7 \\approx 7{,}1$ mCE (vérification : $10 - 0{,}01 \\times 285{,}7 \\approx 7{,}1$ mCE, cohérent).',
        'En fermant partiellement la vanne, la courbe réseau devient plus raide (le coefficient passe de $0{,}015$ à $0{,}025$) : le point de fonctionnement se déplace naturellement le long de la courbe pompe vers un débit plus faible ($20 \\to 16{,}9$ m³/h) et une HMT plus élevée ($6 \\to 7{,}1$ mCE). C\'est exactement le principe utilisé pour l\'<strong>équilibrage</strong> d\'un réseau à plusieurs circuits en parallèle : en jouant sur les vannes de réglage de chaque circuit, on ajuste sa résistance propre pour obtenir le débit voulu, sans jamais pouvoir imposer indépendamment débit et pression.'
      ],
      finalAnswer: 'Avant fermeture : $Q_1 = 20$ m³/h, $\\text{HMT}_1 = 6$ mCE. Après fermeture partielle : $Q_2 \\approx 16{,}9$ m³/h, $\\text{HMT}_2 \\approx 7{,}1$ mCE — fermer une vanne réduit toujours le débit et augmente la HMT au point de fonctionnement, jamais l\'inverse.'
    },

    evaluation: {
      title: 'Évaluation — Dynamique des fluides en réseau CVC',
      duration: '20 min',
      questions: [
        {
          statement: 'Un circulateur a pour courbe $\\text{HMT}_{\\text{pompe}}(Q) = 6 - 0{,}006 \\times Q^2$ et le réseau une courbe $\\text{HMT}_{\\text{réseau}}(Q) = 0{,}009 \\times Q^2$ (HMT en mCE, $Q$ en m³/h). Calculer le débit $Q_f$ au point de fonctionnement (en m³/h).',
          type: 'numeric',
          answer: 20,
          tolerance: 1,
          unit: 'm³/h',
          points: 3,
          correction: '$6 = (0{,}006+0{,}009)\\,Q_f^2 = 0{,}015\\,Q_f^2 \\Rightarrow Q_f^2 = 400 \\Rightarrow Q_f = 20$ m³/h.'
        },
        {
          statement: 'La perte de charge linéique $\\Delta p_{\\text{lin}} = J \\times L$ d\'une conduite de $L = 25$ m, avec $J = 12$ Pa/m, vaut :',
          type: 'numeric',
          answer: 300,
          tolerance: 10,
          unit: 'Pa',
          points: 2,
          correction: '$\\Delta p_{\\text{lin}} = J \\times L = 12 \\times 25 = 300$ Pa.'
        },
        {
          statement: 'La courbe de pertes de charge d\'un réseau, en fonction du débit, est :',
          type: 'multiple-choice',
          options: [
            'Décroissante',
            'Croissante',
            'Constante',
            'Toujours nulle'
          ],
          answer: 1,
          points: 2,
          correction: 'Plus le débit augmente, plus le frottement dans les conduites augmente : la courbe de pertes de charge du réseau est croissante avec le débit.'
        },
        {
          statement: 'Si on remplace une vanne de réglage par une vanne plus résistante (courbe réseau plus raide) sur une installation, sans changer le circulateur, le nouveau point de fonctionnement présente :',
          type: 'multiple-choice',
          options: [
            'Un débit plus élevé et une HMT plus élevée',
            'Un débit plus faible et une HMT plus élevée',
            'Un débit plus élevé et une HMT plus faible',
            'Aucun changement, le point de fonctionnement ne dépend que du circulateur'
          ],
          answer: 1,
          points: 3,
          correction: 'Une courbe réseau plus raide croise la courbe (décroissante) du circulateur plus tôt, à un débit plus faible et une HMT plus élevée — c\'est le principe même de l\'équilibrage par vanne de réglage.'
        },
        {
          statement: 'La cavitation dans une pompe est particulièrement à surveiller :',
          type: 'multiple-choice',
          options: [
            'Quand la pression chute trop bas côté aspiration, souvent pour un débit trop élevé',
            'Uniquement quand le débit est nul',
            'Uniquement sur les réseaux fermés, jamais sur les réseaux ouverts',
            'Elle ne concerne que les réseaux aérauliques'
          ],
          answer: 0,
          points: 2,
          correction: 'La cavitation apparaît quand la pression locale chute suffisamment pour vaporiser le fluide, typiquement côté aspiration lorsque le débit demandé est élevé — un point à surveiller aussi bien en réseau ouvert que fermé.'
        }
      ]
    }
  });
