/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-lumiere-ondes.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-lumiere-ondes',
    level: 2, subject: 'physique',
    icon: '🌈',
    title: 'La lumière : modèle ondulatoire',
    subtitle: 'Diffraction de la lumière, longueur d\'onde, écart angulaire, preuve du caractère ondulatoire',
    keywords: ['Diffraction', 'Longueur d\'onde', 'Modèle ondulatoire', 'Écart angulaire', 'Lumière'],
    physics: 'La diffraction explique les irisations colorées observées à la surface d\'un CD ou d\'un DVD, permet de mesurer avec précision le diamètre d\'un cheveu ou d\'une fibre optique par une simple expérience laser, et impose une limite physique fondamentale à la résolution des microscopes et télescopes optiques.',

    cours: {
      intro: 'La lumière peut être décrite par un <strong>modèle ondulatoire</strong> : elle se propage comme une onde électromagnétique, caractérisée par sa <strong>longueur d\'onde</strong> $\\lambda$, qui détermine sa couleur dans le domaine visible (du violet, $\\lambda \\approx 400$ nm, au rouge, $\\lambda \\approx 800$ nm).<br/><br/>La <strong>diffraction</strong> est un phénomène caractéristique des ondes : lorsqu\'une onde rencontre un obstacle ou une ouverture de taille $a$ comparable à sa longueur d\'onde, elle s\'écarte de la propagation rectiligne prévue par l\'optique géométrique. Observer la diffraction de la lumière (à travers une fente fine, un cheveu, un CD...) constitue une <strong>preuve directe</strong> de son caractère ondulatoire.<br/><br/>Pour une fente de largeur $a$, l\'<strong>écart angulaire</strong> de diffraction $\\theta$ (demi-angle, en radians) vaut $\\theta = \\dfrac{\\lambda}{a}$. Plus la fente est <strong>étroite</strong>, plus la diffraction est marquée. Sur un écran situé à une distance $D$ de la fente, la tache centrale de diffraction a une largeur $L \\approx 2D\\theta = \\dfrac{2D\\lambda}{a}$.',
      definitions: [
        { term: 'Modèle ondulatoire de la lumière', def: 'Modèle décrivant la lumière comme une onde électromagnétique, caractérisée par sa longueur d\'onde $\\lambda$ (qui détermine sa couleur dans le domaine visible).' },
        { term: 'Diffraction', def: 'Phénomène caractéristique des ondes : elles s\'écartent de la propagation rectiligne lors de la rencontre d\'un obstacle ou d\'une ouverture de taille comparable à leur longueur d\'onde.' },
        { term: 'Écart angulaire de diffraction ($\\theta$)', def: 'Demi-angle (en radians) de l\'étalement du faisceau diffracté par une ouverture de largeur $a$ : $\\theta = \\dfrac{\\lambda}{a}$ (valable pour $a \\gg \\lambda$, petits angles).' },
        { term: 'Largeur de la tache de diffraction ($L$)', def: 'Sur un écran situé à une distance $D$ de la fente : $L \\approx 2D\\theta = \\dfrac{2D\\lambda}{a}$.' }
      ],
      method: {
        title: 'Calculer un écart angulaire ou une tache de diffraction en 3 étapes',
        steps: [
          '<strong>Identifier la longueur d\'onde</strong> $\\lambda$ de la lumière utilisée et la <strong>largeur</strong> $a$ de la fente ou de l\'obstacle diffractant, puis convertir toutes les longueurs en mètres.',
          '<strong>Calculer l\'écart angulaire</strong> $\\theta = \\dfrac{\\lambda}{a}$ (en radians ; valable pour $a \\gg \\lambda$).',
          '<strong>Si nécessaire, calculer la largeur</strong> de la tache observée sur un écran à distance $D$ : $L = 2D\\theta = \\dfrac{2D\\lambda}{a}$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Diffraction de la lumière par une fente fine',
        title: 'Écart angulaire θ et tache de diffraction sur un écran',
        description: 'Un faisceau lumineux rencontre une fente de largeur $a$. Au-delà de la fente, le faisceau <strong>s\'étale</strong> avec un écart angulaire $\\theta = \\lambda/a$ (fortement exagéré ici pour la lisibilité), formant une tache de largeur $L$ sur l\'écran placé à la distance $D$.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="diffraction-title diffraction-desc">
            <title id="diffraction-title">Diffraction de la lumiere par une fente et tache observee sur un ecran</title>
            <desc id="diffraction-desc">Des rayons lumineux horizontaux paralleles arrivent depuis la gauche et rencontrent un ecran opaque perce d'une fente etroite en son centre. Au-dela de la fente, au lieu de continuer en ligne droite, le faisceau s'etale en eventail selon un angle theta de part et d'autre de l'axe central, materialise par un arc et une etiquette. Ce faisceau elargi atteint un ecran d'observation place a une distance D de la fente, ou une cotation verticale indique la largeur L de la tache lumineuse centrale.</desc>

            <defs>
              <marker id="arrow-phy1re-diffraction" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- rayons incidents (onde plane) -->
            <line class="frame-line" x1="70" y1="80" x2="150" y2="80"></line>
            <line class="frame-line" x1="70" y1="110" x2="150" y2="110"></line>
            <line class="frame-line" x1="70" y1="190" x2="150" y2="190"></line>
            <line class="frame-line" x1="70" y1="220" x2="150" y2="220"></line>

            <!-- ecran perce de la fente (largeur a) -->
            <line class="frame-line" x1="150" y1="50" x2="150" y2="140"></line>
            <line class="frame-line" x1="150" y1="160" x2="150" y2="250"></line>
            <line class="guide-line" x1="132" y1="140" x2="132" y2="160"></line>
            <text class="tick-label" x="122" y="153" text-anchor="end">a</text>

            <!-- axe central (reference) -->
            <line class="guide-line" x1="150" y1="150" x2="480" y2="150"></line>

            <!-- faisceau diffracte (eventail) -->
            <line class="curve-main" x1="150" y1="150" x2="480" y2="30" marker-end="url(#arrow-phy1re-diffraction)"></line>
            <line class="curve-main" x1="150" y1="150" x2="480" y2="270" marker-end="url(#arrow-phy1re-diffraction)"></line>

            <!-- angle theta -->
            <path class="guide-line" d="M210,150 A60,60 0 0,0 207,130.5" fill="none"></path>
            <text class="annotation-label" x="222" y="128" text-anchor="start">θ</text>

            <!-- ecran d'observation -->
            <line class="frame-line" x1="480" y1="20" x2="480" y2="280"></line>
            <text class="label-soft" x="480" y="292" text-anchor="middle">Écran</text>

            <!-- cotation D -->
            <line class="guide-line" x1="150" y1="30" x2="480" y2="30"></line>
            <line class="frame-line" x1="150" y1="24" x2="150" y2="36"></line>
            <line class="frame-line" x1="480" y1="24" x2="480" y2="36"></line>
            <text class="tick-label" x="315" y="22" text-anchor="middle">D</text>

            <!-- cotation L (tache centrale) -->
            <line class="guide-line" x1="500" y1="30" x2="500" y2="270"></line>
            <line class="frame-line" x1="494" y1="30" x2="506" y2="30"></line>
            <line class="frame-line" x1="494" y1="270" x2="506" y2="270"></line>
            <text class="tick-label" x="514" y="154" text-anchor="start">L</text>
          </svg>
        `,
        notes: [
          'Sans diffraction, l\'optique géométrique prévoirait un faisceau qui continue tout droit à travers la fente, sans jamais s\'étaler : c\'est la persistance d\'un faisceau <strong>large</strong> après la fente qui trahit le comportement ondulatoire.',
          'L\'écart angulaire $\\theta = \\lambda/a$ est ici très <strong>exagéré</strong> pour la lisibilité : dans une expérience réelle (fente de $0{,}1$ mm, lumière visible), $\\theta$ vaut seulement quelques milliradians.',
          'La largeur $L$ de la tache observée augmente proportionnellement à la distance $D$ entre la fente et l\'écran : $L \\approx 2D\\theta$.'
        ],
        reading: 'Suis les rayons horizontaux qui arrivent sur l\'écran percé, puis repère l\'éventail qui s\'ouvre après la fente selon l\'angle $\\theta$, jusqu\'à la tache de largeur $L$ sur l\'écran d\'observation.',
        caption: 'Diffraction d\'un faisceau lumineux par une fente de largeur $a$ : écart angulaire $\\theta=\\lambda/a$ et tache de largeur $L\\approx2D\\theta$ sur l\'écran placé à la distance $D$.'
      },
      example: {
        statement: 'Un faisceau laser de longueur d\'onde $\\lambda = 633$ nm (rouge) éclaire une fente fine de largeur $a = 0{,}10$ mm. La figure de diffraction est observée sur un écran placé à $D = 2{,}0$ m de la fente.<br/><br/>Calculer l\'écart angulaire de diffraction $\\theta$, puis la largeur $L$ de la tache centrale observée sur l\'écran.',
        steps: [
          'Conversion des unités : $\\lambda = 633$ nm $= 6{,}33\\times10^{-7}$ m ; $a = 0{,}10$ mm $= 1{,}0\\times10^{-4}$ m.',
          'Écart angulaire : $\\theta = \\dfrac{\\lambda}{a} = \\dfrac{6{,}33\\times10^{-7}}{1{,}0\\times10^{-4}} = 6{,}33\\times10^{-3}$ rad.',
          'Largeur de la tache centrale : $L = 2D\\theta = 2\\times2{,}0\\times6{,}33\\times10^{-3} \\approx 2{,}5\\times10^{-2}$ m, soit environ $2{,}5$ cm.'
        ],
        answer: '$\\theta \\approx 6{,}33\\times10^{-3}$ rad et $L \\approx 2{,}5$ cm. Une fente presque $1\\,000$ fois plus grande que la longueur d\'onde produit déjà une tache de diffraction bien visible à l\'œil nu sur l\'écran.'
      },
      formulas: [
        'Écart angulaire de diffraction : $\\theta = \\dfrac{\\lambda}{a}$ (en radians, pour $a \\gg \\lambda$)',
        'Largeur de la tache de diffraction sur un écran : $L \\approx 2D\\theta = \\dfrac{2D\\lambda}{a}$',
        'Domaine visible : $\\lambda$ entre $400$ nm (violet) et $800$ nm (rouge) environ',
        'Plus $a$ est petit, plus $\\theta$ est grand : la diffraction est d\'autant plus marquée que l\'ouverture est étroite'
      ],
      recap: [
        'La <strong>diffraction</strong> (étalement d\'une onde à la traversée d\'un obstacle ou d\'une ouverture) est une signature caractéristique du comportement ondulatoire.',
        'L\'écart angulaire $\\theta=\\lambda/a$ est <strong>inversement</strong> proportionnel à la largeur $a$ de la fente : plus la fente est étroite, plus la lumière s\'étale.',
        'La largeur de la tache observée $L=2D\\theta$ augmente proportionnellement à la distance $D$ entre la fente et l\'écran.',
        'L\'optique géométrique (rayons rectilignes) ne prédit aucun étalement : c\'est justement l\'observation de la diffraction qui a validé le modèle ondulatoire de la lumière.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'une fente plus LARGE produit une diffraction plus marquée, en confondant la taille de l\'ouverture avec l\'intensité de l\'étalement observé. Attention : la relation $\\theta=\\lambda/a$ montre au contraire que l\'écart angulaire est inversement proportionnel à $a$ — c\'est en rétrécissant la fente que la diffraction devient plus visible, jusqu\'à devenir imperceptible si $a$ devient très grand devant $\\lambda$.'
    },

    quiz: [
      {
        q: 'La diffraction de la lumière est observée lorsqu\'elle traverse une ouverture dont la largeur est :',
        options: [
          'Du même ordre de grandeur que sa longueur d\'onde',
          'Beaucoup plus grande que sa longueur d\'onde',
          'Exactement égale à 1 mètre',
          'Indépendante de sa longueur d\'onde'
        ],
        answer: 0,
        correction: 'La diffraction devient sensible lorsque la taille de l\'ouverture ou de l\'obstacle est comparable à la longueur d\'onde de l\'onde considérée ; si l\'ouverture est très grande devant $\\lambda$, la diffraction devient imperceptible.'
      },
      {
        q: 'Si on remplace une fente de largeur $a=0{,}2$ mm par une fente deux fois plus étroite ($a=0{,}1$ mm), l\'écart angulaire de diffraction $\\theta$ :',
        options: [
          'Double',
          'Est divisé par deux',
          'Reste inchangé',
          'Est multiplié par quatre'
        ],
        answer: 0,
        correction: '$\\theta=\\lambda/a$ est inversement proportionnel à $a$ : diviser $a$ par $2$ multiplie $\\theta$ par $2$, donc $\\theta$ double.'
      },
      {
        q: 'La diffraction de la lumière constitue une preuve expérimentale de :',
        options: [
          'Son caractère ondulatoire',
          'Son caractère uniquement corpusculaire',
          'Sa vitesse infinie',
          'L\'absence de longueur d\'onde'
        ],
        answer: 0,
        correction: 'L\'étalement d\'un faisceau lumineux à la traversée d\'une fente fine est un phénomène caractéristique des ondes : son observation constitue une preuve directe du caractère ondulatoire de la lumière.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['ecart_angulaire', 'largeur_tache']);
        var longueurs = [400, 450, 500, 550, 589, 633, 650, 700, 750];
        var largeurs = [0.05, 0.08, 0.1, 0.15, 0.2, 0.3, 0.5];

        if (typeExo === 'ecart_angulaire') {
          var lambdaNm = pick(longueurs);
          var aMm = pick(largeurs);
          var theta = (lambdaNm * 1e-9) / (aMm * 1e-3);
          var thetaCoeff = parseFloat((theta * 1000).toFixed(2));
          var tol = parseFloat(Math.max(0.02, thetaCoeff * 0.04).toFixed(2));
          var contexte = pick([
            'un laser de laboratoire',
            'une expérience de diffraction en travaux pratiques',
            'un dispositif d\'analyse optique',
            'un banc d\'optique de démonstration'
          ]);
          return {
            statement: 'Dans ' + contexte + ', une lumière de longueur d\'onde $\\lambda = ' + lambdaNm + '$ nm éclaire une fente de largeur $a = ' + fr(aMm, 2) + '$ mm.<br/><br/>Calcule l\'écart angulaire de diffraction $\\theta$, exprimé en $10^{-3}$ rad (donne uniquement le coefficient, arrondi au centième).',
            answer: thetaCoeff,
            tolerance: tol,
            unit: '× 10⁻³ rad',
            hint: 'Convertis $\\lambda$ et $a$ en mètres, puis utilise $\\theta=\\lambda/a$.',
            solution: [
              'Conversion : $\\lambda = ' + lambdaNm + '\\times10^{-9}$ m et $a = ' + fr(aMm, 2) + '\\times10^{-3}$ m.',
              'Écart angulaire : $\\theta = \\dfrac{\\lambda}{a} = \\dfrac{' + lambdaNm + '\\times10^{-9}}{' + fr(aMm, 2) + '\\times10^{-3}}$.',
              'Résultat : $\\theta \\approx ' + fr(thetaCoeff, 2) + '\\times10^{-3}$ rad.'
            ]
          };
        } else {
          var lambdaNm2 = pick(longueurs);
          var aMm2 = pick(largeurs);
          var Dm = pick([0.5, 1, 1.5, 2, 2.5, 3, 4, 5]);
          var L = 2 * Dm * (lambdaNm2 * 1e-9) / (aMm2 * 1e-3);
          var LcmRound = parseFloat((L * 100).toFixed(2));
          var tol2 = parseFloat(Math.max(0.1, LcmRound * 0.04).toFixed(2));
          return {
            statement: 'Une lumière de longueur d\'onde $\\lambda = ' + lambdaNm2 + '$ nm traverse une fente de largeur $a = ' + fr(aMm2, 2) + '$ mm ; l\'écran d\'observation est placé à $D = ' + fr(Dm, 1) + '$ m de la fente.<br/><br/>Calcule la largeur $L$ de la tache centrale de diffraction observée sur l\'écran (en cm, arrondie au centième).',
            answer: LcmRound,
            tolerance: tol2,
            unit: 'cm',
            hint: 'Utilise $L \\approx 2D\\theta = \\dfrac{2D\\lambda}{a}$, en convertissant toutes les longueurs en mètres avant le calcul, puis reconvertis le résultat en cm.',
            solution: [
              'Écart angulaire : $\\theta = \\dfrac{\\lambda}{a} = \\dfrac{' + lambdaNm2 + '\\times10^{-9}}{' + fr(aMm2, 2) + '\\times10^{-3}}$ rad.',
              'Largeur de la tache : $L = 2D\\theta = 2\\times' + fr(Dm, 1) + '\\times\\theta$ (en m).',
              'Résultat : $L \\approx ' + fr(LcmRound, 2) + '$ cm.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On réalise l\'expérience de diffraction d\'un faisceau laser à travers une fente de largeur $a = 0{,}12$ mm, avec un écran placé à $D = 3{,}0$ m. On compare deux lasers : un laser rouge ($\\lambda_R = 660$ nm) et un laser bleu ($\\lambda_B = 450$ nm).',
      tasks: [
        'Calculer l\'écart angulaire de diffraction $\\theta_R$ pour le laser rouge.',
        'Calculer l\'écart angulaire de diffraction $\\theta_B$ pour le laser bleu.',
        'Calculer la largeur des taches $L_R$ et $L_B$ sur l\'écran pour chaque laser, et comparer les deux résultats.'
      ],
      solutions: [
        '$\\theta_R=\\dfrac{\\lambda_R}{a}=\\dfrac{660\\times10^{-9}}{0{,}12\\times10^{-3}} \\approx 5{,}5\\times10^{-3}$ rad.',
        '$\\theta_B=\\dfrac{\\lambda_B}{a}=\\dfrac{450\\times10^{-9}}{0{,}12\\times10^{-3}} \\approx 3{,}75\\times10^{-3}$ rad.',
        '$L_R=2D\\theta_R=2\\times3{,}0\\times5{,}5\\times10^{-3}\\approx3{,}3$ cm. $L_B=2D\\theta_B=2\\times3{,}0\\times3{,}75\\times10^{-3}\\approx2{,}25$ cm. La tache du laser rouge est donc <strong>plus large</strong> que celle du laser bleu.'
      ],
      finalAnswer: '$\\theta_R\\approx5{,}5\\times10^{-3}$ rad, $\\theta_B\\approx3{,}75\\times10^{-3}$ rad, $L_R\\approx3{,}3$ cm, $L_B\\approx2{,}25$ cm : à fente et distance identiques, le laser <strong>rouge</strong> (plus grande longueur d\'onde) diffracte davantage que le laser bleu — la diffraction dépend directement de la longueur d\'onde utilisée, à ouverture fixée.'
    },

    evaluation: {
      title: 'Évaluation — La lumière : modèle ondulatoire',
      duration: '30 min',
      questions: [
        {
          statement: 'Une lumière de longueur d\'onde $\\lambda=500$ nm traverse une fente de largeur $a=0{,}25$ mm. Calculer l\'écart angulaire de diffraction $\\theta$ (exprimé en $10^{-3}$ rad, arrondi au centième).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: '× 10⁻³ rad',
          points: 2,
          correction: '$\\theta=\\dfrac{\\lambda}{a}=\\dfrac{500\\times10^{-9}}{0{,}25\\times10^{-3}}=2{,}0\\times10^{-3}$ rad.'
        },
        {
          statement: 'L\'observation de la diffraction de la lumière à travers une fente fine constitue une preuve expérimentale :',
          type: 'multiple-choice',
          options: [
            'Du caractère ondulatoire de la lumière',
            'Que la lumière est composée uniquement de particules',
            'Que la lumière ne se propage pas en ligne droite dans le vide',
            'Que la vitesse de la lumière est infinie'
          ],
          answer: 0,
          points: 2,
          correction: 'L\'étalement du faisceau à la traversée d\'une fente fine est un phénomène caractéristique des ondes, ce qui constitue une preuve directe du caractère ondulatoire de la lumière.'
        },
        {
          statement: 'Avec $\\theta=4{,}0\\times10^{-3}$ rad et un écran placé à $D=1{,}5$ m de la fente, calculer la largeur $L$ de la tache de diffraction (en cm, arrondie au dixième).',
          type: 'numeric',
          answer: 1.2,
          tolerance: 0.1,
          unit: 'cm',
          points: 2,
          correction: '$L=2D\\theta=2\\times1{,}5\\times4{,}0\\times10^{-3}=1{,}2\\times10^{-2}$ m $=1{,}2$ cm.'
        },
        {
          statement: 'Pour observer une diffraction plus marquée (écart angulaire $\\theta$ plus grand) avec une même longueur d\'onde $\\lambda$, il faut :',
          type: 'multiple-choice',
          options: [
            'Rétrécir la fente (diminuer $a$)',
            'Élargir la fente (augmenter $a$)',
            'Éloigner l\'écran uniquement',
            'Changer la couleur de l\'écran'
          ],
          answer: 0,
          points: 2,
          correction: '$\\theta=\\lambda/a$ est inversement proportionnel à $a$ : il faut rétrécir la fente pour augmenter $\\theta$, jamais l\'élargir.'
        },
        {
          statement: 'Une fente de largeur $a=0{,}15$ mm est éclairée successivement par une lumière rouge ($\\lambda_R=700$ nm) et une lumière violette ($\\lambda_V=400$ nm). Calculer le rapport $\\theta_R/\\theta_V$ des écarts angulaires (arrondi au centième).',
          type: 'numeric',
          answer: 1.75,
          tolerance: 0.05,
          unit: '',
          points: 2,
          correction: 'Comme $a$ est identique pour les deux, le rapport $\\theta_R/\\theta_V=\\lambda_R/\\lambda_V=700/400=1{,}75$ : la lumière rouge diffracte $1{,}75$ fois plus que la violette.'
        }
      ]
    }
  });
