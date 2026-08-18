/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-lumiere-ondes.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-lumiere-ondes',
    level: 2, subject: 'physique',
    icon: '💡',
    title: 'La lumière : modèle ondulatoire et diffraction',
    subtitle: 'Diffraction de la lumière (preuve de sa nature ondulatoire), écart angulaire $\\theta = \\lambda / a$',
    keywords: ['Diffraction', 'Modèle ondulatoire', 'Longueur d\'onde', 'Écart angulaire'],
    physics: 'La diffraction de la lumière n\'est pas qu\'une curiosité de laboratoire : elle limite la résolution des microscopes et télescopes, permet de mesurer par laser le diamètre d\'un cheveu ou d\'un fil très fin, explique le fonctionnement des réseaux de diffraction (lecture optique des CD/DVD), et fixe les limites physiques des technologies de gravure en microélectronique.',

    cours: {
      intro: 'L\'optique géométrique (propagation rectiligne de la lumière) explique de nombreux phénomènes, mais elle échoue à décrire ce qui se passe lorsque la lumière rencontre une ouverture ou un obstacle de très petite taille. Le <strong>modèle ondulatoire</strong> considère alors la lumière comme une onde, caractérisée par sa <strong>longueur d\'onde</strong> $\\lambda$ (dans le vide ou l\'air, de l\'ordre de $400$ à $800$ nm pour la lumière visible).<br/><br/>Ce modèle prédit un phénomène impossible à expliquer autrement : la <strong>diffraction</strong>. Quand un faisceau de lumière traverse une fente fine ou contourne un obstacle de taille $a$ comparable à $\\lambda$, il s\'écarte de la propagation rectiligne : sur un écran placé après l\'obstacle, on observe une <strong>figure de diffraction</strong>, avec une tache centrale large et lumineuse entourée de taches secondaires plus étroites, séparées par des zones sombres.<br/><br/>L\'observation expérimentale de la diffraction constitue la <strong>preuve</strong> que la lumière se comporte comme une onde.',
      definitions: [
        { term: 'Diffraction', def: 'Écart à la propagation rectiligne subi par une onde (ici la lumière) lorsqu\'elle traverse une ouverture ou contourne un obstacle de taille $a$ comparable à sa longueur d\'onde $\\lambda$.' },
        { term: 'Écart angulaire ($\\theta$)', def: 'Demi-angle d\'ouverture du faisceau diffracté, en radians. Il relie la longueur d\'onde $\\lambda$ et la taille $a$ de la fente ou de l\'obstacle : $\\theta \\approx \\dfrac{\\lambda}{a}$ (valable pour de petits angles, $\\lambda$ et $a$ dans la même unité).' },
        { term: 'Modèle ondulatoire de la lumière', def: 'Modèle décrivant la lumière comme une onde électromagnétique caractérisée par une longueur d\'onde $\\lambda$, seul modèle capable d\'expliquer la diffraction.' },
        { term: 'Figure de diffraction', def: 'Répartition de l\'intensité lumineuse observée sur un écran après une fente ou un obstacle diffractant : une tache centrale large, deux fois plus large que chacune des taches secondaires qui l\'entourent.' }
      ],
      method: {
        title: 'Exploiter la diffraction pour un calcul en 3 étapes',
        steps: [
          '<strong>Identifier</strong> la longueur d\'onde $\\lambda$ de la lumière utilisée et la taille $a$ de la fente ou de l\'obstacle diffractant, en les convertissant dans la <strong>même unité</strong> (le mètre, le plus souvent).',
          '<strong>Calculer l\'écart angulaire</strong> $\\theta \\approx \\dfrac{\\lambda}{a}$ (en radians).',
          'Si besoin, <strong>en déduire la largeur de la tache centrale</strong> sur un écran placé à une distance $D$ de la fente : $L = 2 \\times D \\times \\theta = \\dfrac{2 D \\lambda}{a}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Diffraction de la lumière par une fente fine',
        title: 'De l\'écart angulaire θ à la figure de diffraction sur l\'écran',
        description: 'Un faisceau de lumière parallèle traverse une fente de largeur $a$, puis diverge avec un écart angulaire $\\theta \\approx \\lambda / a$. Sur l\'écran, l\'intensité lumineuse forme une tache centrale large, entourée de taches secondaires deux fois plus étroites.',
        svg: `
          <svg viewBox="0 0 560 400" role="img" aria-labelledby="lumiere1re-title lumiere1re-desc">
            <title id="lumiere1re-title">Diffraction d'un faisceau lumineux par une fente et figure d'intensite obtenue sur un ecran</title>
            <desc id="lumiere1re-desc">Le schema du haut montre un faisceau de rayons paralleles arrivant sur une plaque opaque percee d'une fente etroite de largeur a. Apres la fente, trois rayons divergent vers un ecran place a droite : un rayon central et deux rayons obliques faisant un angle theta de part et d'autre du rayon central. Le graphique du bas represente l'intensite lumineuse recue sur l'ecran en fonction de la position : une courbe presente un pic central large et eleve, puis des pics secondaires beaucoup plus bas et deux fois plus etroits que le pic central, separes par des points d'intensite nulle regulierement espaces.</desc>

            <defs>
              <marker id="arrow-phys1re-lumiere" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ===== Schema du haut : fente et faisceau diffracte ===== -->
            <!-- faisceau incident (rayons paralleles) -->
            <line class="frame-line" x1="55" y1="80" x2="145" y2="80"></line>
            <line class="frame-line" x1="55" y1="105" x2="145" y2="105" marker-end="url(#arrow-phys1re-lumiere)"></line>
            <line class="frame-line" x1="55" y1="130" x2="145" y2="130"></line>
            <text class="label-soft" x="80" y="68" text-anchor="middle">Onde incidente (λ)</text>

            <!-- plaque opaque avec fente -->
            <rect class="frame-line" x="145" y="20" width="10" height="75" fill="var(--diagram-soft)"></rect>
            <rect class="frame-line" x="145" y="115" width="10" height="45" fill="var(--diagram-soft)"></rect>
            <line class="grid-line" x1="140" y1="95" x2="140" y2="115"></line>
            <text class="tick-label" x="128" y="109" text-anchor="end">a</text>

            <!-- rayons diffractes divergents -->
            <line class="guide-line" x1="150" y1="105" x2="480" y2="105"></line>
            <line class="curve-main" x1="150" y1="105" x2="480" y2="55" marker-end="url(#arrow-phys1re-lumiere)"></line>
            <line class="curve-main" x1="150" y1="105" x2="480" y2="155" marker-end="url(#arrow-phys1re-lumiere)"></line>
            <text class="annotation-label" x="185" y="88" text-anchor="start">θ</text>

            <!-- ecran -->
            <line class="frame-line" x1="480" y1="20" x2="480" y2="165"></line>
            <text class="label-soft" x="480" y="180" text-anchor="middle">Écran</text>
            <text class="label-soft" x="140" y="176" text-anchor="middle">Fente de largeur a</text>

            <!-- ===== Graphique du bas : intensite sur l'ecran ===== -->
            <line class="frame-line" x1="60" y1="350" x2="525" y2="350" marker-end="url(#arrow-phys1re-lumiere)"></line>
            <line class="frame-line" x1="70" y1="350" x2="70" y2="185" marker-end="url(#arrow-phys1re-lumiere)"></line>
            <text class="tick-label" x="70" y="178" text-anchor="middle">I</text>
            <text class="tick-label" x="530" y="356" text-anchor="start">x</text>

            <path class="curve-main" fill="none" d="M70.0,349.1 L77.3,349.5 L84.7,349.9 L92.0,350.0 L99.3,349.7 L106.7,349.0 L114.0,348.2 L121.3,347.6 L128.7,347.6 L136.0,348.1 L143.3,348.9 L150.7,349.7 L158.0,350.0 L165.3,349.3 L172.7,347.7 L180.0,345.6 L187.3,343.7 L194.7,342.9 L202.0,343.8 L209.3,346.1 L216.7,348.8 L224.0,350.0 L231.3,347.3 L238.7,338.8 L246.0,323.2 L253.3,301.0 L260.7,274.3 L268.0,246.6 L275.3,222.4 L282.7,205.9 L290.0,200.0 L297.3,205.9 L304.7,222.4 L312.0,246.6 L319.3,274.3 L326.7,301.0 L334.0,323.2 L341.3,338.8 L348.7,347.3 L356.0,350.0 L363.3,348.8 L370.7,346.1 L378.0,343.8 L385.3,342.9 L392.7,343.7 L400.0,345.6 L407.3,347.7 L414.7,349.3 L422.0,350.0 L429.3,349.7 L436.7,348.9 L444.0,348.1 L451.3,347.6 L458.7,347.6 L466.0,348.2 L473.3,349.0 L480.7,349.7 L488.0,350.0 L495.3,349.9 L502.7,349.5 L510.0,349.1"></path>

            <!-- cotation tache centrale vs secondaire -->
            <line class="grid-line" x1="223.3" y1="350" x2="223.3" y2="365"></line>
            <line class="grid-line" x1="356.7" y1="350" x2="356.7" y2="365"></line>
            <line class="grid-line" x1="423.3" y1="350" x2="423.3" y2="365"></line>
            <line class="guide-line" x1="223.3" y1="372" x2="356.7" y2="372"></line>
            <line class="guide-line" x1="356.7" y1="382" x2="423.3" y2="382"></line>
            <text class="annotation-label" x="290" y="367" text-anchor="middle">Tache centrale</text>
            <text class="tick-label" x="390" y="396" text-anchor="middle">Tache secondaire</text>
          </svg>
        `,
        notes: [
          'L\'écart angulaire $\\theta \\approx \\dfrac{\\lambda}{a}$ (en radians) augmente quand la fente $a$ <strong>diminue</strong> : plus l\'ouverture est étroite, plus la lumière diverge.',
          'Sur l\'écran, la <strong>tache centrale</strong> est deux fois plus large que chacune des taches secondaires qui l\'entourent : c\'est une signature caractéristique de la diffraction par une fente.',
          'La largeur de la tache centrale $L = 2D\\theta = \\dfrac{2D\\lambda}{a}$ dépend de la distance $D$ entre la fente et l\'écran : plus l\'écran est éloigné, plus la figure de diffraction est étalée.'
        ],
        reading: 'Suis le faisceau de gauche à droite : rayons parallèles avant la fente, divergence d\'angle $\\theta$ après la fente, puis la figure d\'intensité correspondante sur le graphique du bas, avec sa large tache centrale.',
        caption: 'Diffraction d\'un faisceau lumineux par une fente de largeur $a$ : écart angulaire $\\theta \\approx \\lambda/a$ et figure d\'intensité obtenue sur un écran, avec une tache centrale deux fois plus large que les taches secondaires.'
      },
      example: {
        statement: 'Un faisceau laser de longueur d\'onde $\\lambda = 633$ nm traverse une fente fine de largeur $a = 0{,}1$ mm. L\'écran d\'observation est placé à une distance $D = 2$ m de la fente.<br/><br/>Calculer l\'écart angulaire $\\theta$, puis la largeur $L$ de la tache centrale sur l\'écran.',
        steps: [
          'Conversion des grandeurs en mètres : $\\lambda = 633 \\times 10^{-9}$ m et $a = 0{,}1 \\times 10^{-3} = 1{,}0 \\times 10^{-4}$ m.',
          'Écart angulaire : $\\theta \\approx \\dfrac{\\lambda}{a} = \\dfrac{633 \\times 10^{-9}}{1{,}0 \\times 10^{-4}} = 6{,}33 \\times 10^{-3}$ rad.',
          'Largeur de la tache centrale : $L = 2 D \\theta = 2 \\times 2 \\times 6{,}33 \\times 10^{-3} = 2{,}53 \\times 10^{-2}$ m.'
        ],
        answer: '$\\theta \\approx 6{,}33 \\times 10^{-3}$ rad et $L \\approx 2{,}5$ cm. Une fente très fine (dixième de millimètre) suffit donc à produire une tache de diffraction bien visible à l\'œil nu, à quelques mètres de distance.'
      },
      formulas: [
        'Écart angulaire : $\\theta \\approx \\dfrac{\\lambda}{a}$ (en radians, $\\lambda$ et $a$ dans la même unité)',
        'Largeur de la tache centrale sur l\'écran : $L = 2 D \\theta = \\dfrac{2 D \\lambda}{a}$',
        'La tache centrale est deux fois plus large que chaque tache secondaire',
        'La diffraction est d\'autant plus marquée que $a$ est petit ou $\\lambda$ est grand'
      ],
      recap: [
        'L\'observation de la <strong>diffraction</strong> de la lumière prouve sa nature ondulatoire : elle est impossible à expliquer par l\'optique géométrique seule.',
        'L\'écart angulaire $\\theta \\approx \\dfrac{\\lambda}{a}$ est <strong>inversement proportionnel</strong> à la taille de la fente ou de l\'obstacle : plus l\'ouverture est étroite, plus la diffraction est marquée.',
        'La figure de diffraction présente une tache centrale <strong>deux fois plus large</strong> que les taches secondaires qui l\'entourent.',
        'Avant tout calcul, $\\lambda$ et $a$ doivent être exprimées dans la <strong>même unité</strong> (le mètre, en général), sous peine d\'obtenir un écart angulaire absurde.'
      ],
      piege: 'Une erreur fréquente est de penser qu\'une fente plus large diffracte davantage la lumière. Attention, c\'est l\'inverse : $\\theta \\approx \\lambda/a$ est une fonction <strong>décroissante</strong> de $a$, donc c\'est une fente <strong>étroite</strong> qui produit un écart angulaire important et une figure de diffraction bien visible, pas une fente large.'
    },

    quiz: [
      {
        q: 'Quel phénomène constitue la preuve expérimentale que la lumière se comporte comme une onde ?',
        options: [
          'La réflexion de la lumière sur un miroir',
          'La diffraction de la lumière par une fente fine',
          'La propagation rectiligne de la lumière',
          'L\'absorption de la lumière par un filtre coloré'
        ],
        answer: 1,
        correction: 'La diffraction — l\'écart à la propagation rectiligne observé lorsque la lumière traverse une ouverture de taille comparable à sa longueur d\'onde — ne peut s\'expliquer que par un modèle ondulatoire de la lumière.'
      },
      {
        q: 'Si l\'on réduit la largeur $a$ de la fente diffractante (à longueur d\'onde $\\lambda$ inchangée), l\'écart angulaire $\\theta$ de la figure de diffraction :',
        options: [
          'Diminue',
          'Augmente',
          'Reste inchangé',
          'Devient nul'
        ],
        answer: 1,
        correction: 'Comme $\\theta \\approx \\dfrac{\\lambda}{a}$, réduire $a$ (au dénominateur) fait <strong>augmenter</strong> $\\theta$ : une fente plus étroite diffracte davantage la lumière.'
      },
      {
        q: 'Sur une figure de diffraction observée sur un écran, comment se comparent la tache centrale et les taches secondaires ?',
        options: [
          'Elles ont toutes la même largeur',
          'La tache centrale est deux fois plus large que chaque tache secondaire',
          'Les taches secondaires sont plus larges que la tache centrale',
          'Seule la tache centrale est visible, les autres sont toujours nulles'
        ],
        answer: 1,
        correction: 'La figure de diffraction par une fente présente une tache centrale deux fois plus large que chacune des taches secondaires qui l\'entourent : c\'est une caractéristique typique de ce phénomène.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['ecart_angulaire', 'largeur_tache']);
        var lambdas = [400, 450, 532, 633, 700]; // nm
        var largeurs = [0.05, 0.08, 0.1, 0.15, 0.2, 0.3]; // mm

        if (typeExo === 'ecart_angulaire') {
          var lam1 = pick(lambdas);
          var a1 = pick(largeurs);
          // theta(rad) = lam(nm)*1e-9 / (a(mm)*1e-3) = (lam/a)*1e-6 ; en mrad (x1000) : (lam/a)*1e-3
          var thetaMrad = parseFloat(((lam1 / a1) * 0.001).toFixed(2));
          var contexte = pick([
            'un laser rouge de travaux pratiques traversant une fente réglable',
            'un banc d\'optique de contrôle qualité industriel',
            'une expérience de mesure du diamètre d\'un cheveu',
            'un dispositif de diffraction utilisé en cours de physique'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte + ', un faisceau de lumière de longueur d\'onde $\\lambda = ' + lam1 + '$ nm traverse une fente de largeur $a = ' + fr(a1, 2) + '$ mm.<br/><br/>Calcule l\'écart angulaire $\\theta$ de la figure de diffraction obtenue (en milliradians, mrad, arrondi au centième).',
            answer: thetaMrad,
            tolerance: Math.max(0.02, parseFloat((thetaMrad * 0.03).toFixed(2))),
            unit: 'mrad',
            hint: 'Utilise $\\theta \\approx \\dfrac{\\lambda}{a}$ en convertissant $\\lambda$ et $a$ dans la même unité (le mètre) avant de calculer.',
            solution: [
              'Conversion : $\\lambda = ' + lam1 + ' \\times 10^{-9}$ m et $a = ' + fr(a1, 2) + ' \\times 10^{-3}$ m.',
              'Écart angulaire : $\\theta \\approx \\dfrac{\\lambda}{a} = \\dfrac{' + lam1 + ' \\times 10^{-9}}{' + fr(a1, 2) + ' \\times 10^{-3}}$.',
              'Résultat : $\\theta \\approx ' + fr(thetaMrad, 2) + '$ mrad, soit $' + fr(thetaMrad, 2) + ' \\times 10^{-3}$ rad.'
            ]
          };
        } else {
          var lam2 = pick(lambdas);
          var a2 = pick(largeurs);
          var D = pick([1, 1.5, 2, 3, 5]);
          // L(m) = 2*D*lam(nm)*1e-9 / (a(mm)*1e-3) = 2*D*(lam/a)*1e-6 ; en cm (x100) : 2*D*(lam/a)*1e-4
          var Lcm = parseFloat((2 * D * (lam2 / a2) * 1e-4).toFixed(3));
          var contexte2 = pick([
            'un banc d\'optique de travaux pratiques',
            'un contrôle non destructif par diffraction laser',
            'une salle de projection utilisée pour illustrer la diffraction',
            'un laboratoire de métrologie optique'
          ]);
          return {
            statement: 'Dans le cadre de ' + contexte2 + ', un faisceau laser de longueur d\'onde $\\lambda = ' + lam2 + '$ nm traverse une fente de largeur $a = ' + fr(a2, 2) + '$ mm. L\'écran est placé à une distance $D = ' + fr(D, D % 1 === 0 ? 0 : 1) + '$ m de la fente.<br/><br/>Calcule la largeur $L$ de la tache centrale sur l\'écran (en cm, arrondie au centième).',
            answer: Lcm,
            tolerance: Math.max(0.02, parseFloat((Lcm * 0.03).toFixed(3))),
            unit: 'cm',
            hint: 'Calcule d\'abord $\\theta \\approx \\dfrac{\\lambda}{a}$, puis utilise $L = 2 D \\theta$.',
            solution: [
              'Écart angulaire : $\\theta \\approx \\dfrac{\\lambda}{a} = \\dfrac{' + lam2 + ' \\times 10^{-9}}{' + fr(a2, 2) + ' \\times 10^{-3}}$ rad.',
              'Largeur de la tache centrale : $L = 2 D \\theta = 2 \\times ' + fr(D, D % 1 === 0 ? 0 : 1) + ' \\times \\theta$ (en mètres), à convertir en centimètres.',
              'Résultat : $L \\approx ' + fr(Lcm, 3) + '$ cm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'En travaux pratiques, on souhaite mesurer le diamètre $a$ d\'un cheveu par diffraction laser, sans le manipuler directement. On envoie un faisceau laser de longueur d\'onde $\\lambda = 650$ nm sur le cheveu tendu, et on observe la figure de diffraction sur un écran placé à $D = 3$ m. On mesure une largeur de tache centrale $L = 3{,}9$ cm.',
      tasks: [
        'Rappeler la relation entre $L$, $D$, $\\lambda$ et $a$, puis l\'écrire sous une forme permettant de calculer $a$.',
        'Calculer l\'écart angulaire $\\theta$ à partir de $L$ et $D$ (en convertissant $L$ en mètres).',
        'En déduire le diamètre $a$ du cheveu (en mm, arrondie au centième).'
      ],
      solutions: [
        'La relation est $L = \\dfrac{2 D \\lambda}{a}$, donc en isolant $a$ : $a = \\dfrac{2 D \\lambda}{L}$.',
        'Conversion : $L = 3{,}9$ cm $= 3{,}9 \\times 10^{-2}$ m. Écart angulaire : $\\theta = \\dfrac{L}{2D} = \\dfrac{3{,}9 \\times 10^{-2}}{2 \\times 3} = 6{,}5 \\times 10^{-3}$ rad.',
        'Diamètre du cheveu : $a = \\dfrac{\\lambda}{\\theta} = \\dfrac{650 \\times 10^{-9}}{6{,}5 \\times 10^{-3}} = 1{,}0 \\times 10^{-4}$ m, soit $a \\approx 0{,}10$ mm.'
      ],
      finalAnswer: 'Le cheveu mesuré a un diamètre $a \\approx 0{,}10$ mm ($100$ μm), une valeur tout à fait cohérente avec un cheveu humain réel. Cette méthode par diffraction permet une mesure précise, sans contact, d\'un objet trop fin pour être mesuré directement au pied à coulisse.'
    },

    evaluation: {
      title: 'Évaluation — La lumière : modèle ondulatoire et diffraction',
      duration: '30 min',
      questions: [
        {
          statement: 'Quel phénomène prouve que la lumière possède une nature ondulatoire ?',
          type: 'multiple-choice',
          options: [
            'La propagation rectiligne',
            'La diffraction',
            'La réflexion sur un miroir plan',
            'L\'ombre portée d\'un objet opaque'
          ],
          answer: 1,
          points: 2,
          correction: 'La diffraction — écart à la propagation rectiligne — ne s\'explique que par un modèle ondulatoire de la lumière.'
        },
        {
          statement: 'Un faisceau de longueur d\'onde $\\lambda = 500$ nm traverse une fente de largeur $a = 0{,}5$ mm. Calculer l\'écart angulaire $\\theta$ (en mrad, arrondi au centième).',
          type: 'numeric',
          answer: 1,
          tolerance: 0.05,
          unit: 'mrad',
          points: 3,
          correction: '$\\theta \\approx \\dfrac{\\lambda}{a} = \\dfrac{500 \\times 10^{-9}}{0{,}5 \\times 10^{-3}} = 1{,}0 \\times 10^{-3}$ rad $= 1{,}00$ mrad.'
        },
        {
          statement: 'Si l\'on double la largeur $a$ de la fente (à $\\lambda$ constant), l\'écart angulaire $\\theta$ est :',
          type: 'multiple-choice',
          options: [
            'Doublé',
            'Divisé par deux',
            'Inchangé',
            'Multiplié par quatre'
          ],
          answer: 1,
          points: 2,
          correction: 'Comme $\\theta \\approx \\lambda/a$, doubler $a$ divise $\\theta$ par deux : la diffraction est moins marquée avec une fente plus large.'
        },
        {
          statement: 'Un écart angulaire $\\theta = 4 \\times 10^{-3}$ rad est obtenu à une distance écran-fente $D = 2{,}5$ m. Calculer la largeur $L$ de la tache centrale (en cm, arrondie au dixième).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: 'cm',
          points: 3,
          correction: '$L = 2 D \\theta = 2 \\times 2{,}5 \\times 4 \\times 10^{-3} = 2{,}0 \\times 10^{-2}$ m $= 2{,}0$ cm.'
        },
        {
          statement: 'Sur une figure de diffraction, la tache centrale est, par rapport à chaque tache secondaire :',
          type: 'multiple-choice',
          options: [
            'De largeur identique',
            'Deux fois plus large',
            'Deux fois plus étroite',
            'Toujours invisible'
          ],
          answer: 1,
          points: 2,
          correction: 'La tache centrale est deux fois plus large que chacune des taches secondaires qui l\'entourent : c\'est une propriété caractéristique de la figure de diffraction.'
        }
      ]
    }
  });
