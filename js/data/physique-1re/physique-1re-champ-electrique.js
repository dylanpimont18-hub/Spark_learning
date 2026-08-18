/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-champ-electrique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-champ-electrique',
    level: 2, subject: 'physique',
    icon: '⚡',
    title: 'Champ électrostatique',
    subtitle: 'Loi de Coulomb, champ électrostatique créé par une charge ponctuelle, force électrique',
    keywords: ['Coulomb', 'Champ électrostatique', 'Charge ponctuelle', 'Force électrique'],
    physics: 'Le champ électrostatique explique le fonctionnement du paratonnerre, des imprimantes laser, des filtres à particules électrostatiques, ainsi que l\'attraction entre objets chargés observée après un frottement (règle en plastique frottée qui attire de petits morceaux de papier).',

    cours: {
      intro: 'Deux objets porteurs de charges électriques exercent l\'un sur l\'autre une force à distance : c\'est l\'<strong>interaction électrostatique</strong>. Contrairement à l\'interaction gravitationnelle, toujours attractive, l\'interaction électrostatique peut être <strong>attractive</strong> (charges de signes opposés) ou <strong>répulsive</strong> (charges de même signe).<br/><br/>Cette interaction obéit à la <strong>loi de Coulomb</strong>, dont la structure mathématique ressemble beaucoup à celle de la gravitation : la force dépend du produit des charges et décroît avec le <strong>carré</strong> de la distance.<br/><br/>Comme pour la gravitation, on introduit un <strong>champ électrostatique</strong> $\\vec{E}$ pour décrire l\'effet d\'une charge en un point de l\'espace, indépendamment de toute charge test qu\'on y placerait. C\'est ce champ qui, appliqué à une charge $q$, produit la force électrique $\\vec{F} = q\\vec{E}$.',
      definitions: [
        { term: 'Charge électrique $q$', def: 'Grandeur scalaire, positive ou négative, exprimée en coulombs (C). Deux charges de même signe se repoussent, deux charges de signes opposés s\'attirent.' },
        { term: 'Loi de Coulomb', def: 'Deux charges ponctuelles $q_1$ et $q_2$, séparées d\'une distance $d$, exercent l\'une sur l\'autre une force de norme $F = k\\dfrac{|q_1 \\, q_2|}{d^2}$, avec $k \\approx 8{,}99\\times10^9$ N·m²/C² (constante de Coulomb). Cette force est dirigée le long de la droite joignant les deux charges : attractive si $q_1$ et $q_2$ sont de signes opposés, répulsive s\'ils sont de même signe.' },
        { term: 'Champ électrostatique $\\vec{E}$', def: 'Grandeur vectorielle définie en tout point par $\\vec{E}(M) = \\dfrac{\\vec{F}}{q}$, en V/m (ou N/C). Le champ créé par une charge ponctuelle $Q$ à distance $r$ a pour norme $E(r) = k\\dfrac{|Q|}{r^2}$, dirigé <strong>en s\'éloignant</strong> de $Q$ si $Q>0$, et <strong>vers</strong> $Q$ si $Q<0$.' },
        { term: 'Force électrique subie par une charge test', def: 'Une charge $q$ placée dans un champ $\\vec{E}$ subit une force $\\vec{F} = q\\vec{E}$. Si $q>0$, $\\vec{F}$ est dans le <strong>même sens</strong> que $\\vec{E}$ ; si $q<0$, $\\vec{F}$ est de <strong>sens opposé</strong> à $\\vec{E}$.' }
      ],
      method: {
        title: 'Déterminer une force ou un champ électrostatique en 3 étapes',
        steps: [
          '<strong>Identifier</strong> les charges en présence (signe et valeur) ainsi que la distance $d$ qui les sépare.',
          '<strong>Appliquer la loi de Coulomb</strong> pour calculer la norme de la force : $F = k\\dfrac{|q_1 q_2|}{d^2}$, puis déterminer le sens (attractif si signes opposés, répulsif si même signe) à partir des signes des charges — jamais à partir de la seule formule numérique.',
          'Si besoin, <strong>déduire le champ</strong> créé en un point ($E = F/q$) ou la <strong>force subie</strong> par une charge test placée dans un champ connu ($F = qE$), en faisant bien attention au signe de la charge test pour orienter le vecteur force.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Champ électrostatique créé par une charge ponctuelle positive',
        title: 'Décroissance du champ $\\vec{E}$ avec la distance (loi en $1/r^2$)',
        description: 'Le champ électrostatique $\\vec{E}$ créé par une charge positive $+Q$ pointe radialement <strong>vers l\'extérieur</strong>, et sa norme diminue très vite avec la distance : à $2r$, le champ vaut le quart de sa valeur à $r$ ; à $3r$, il n\'en vaut plus qu\'un neuvième.',
        svg: `
          <svg viewBox="0 0 420 220" role="img" aria-labelledby="champe-title champe-desc">
            <title id="champe-title">Champ electrostatique cree par une charge ponctuelle positive, decroissant avec la distance</title>
            <desc id="champe-desc">Une charge positive notee Q est placee a gauche du schema, sur un axe horizontal en pointilles. Trois points sont places sur cet axe a des distances respectives r, 2r et 3r de la charge. En chacun de ces points, une fleche horizontale pointe vers la droite, dans le sens qui s'eloigne de la charge. La fleche la plus proche de la charge, a la distance r, est la plus longue. Celle a la distance 2r est nettement plus courte, environ le quart de la premiere. Celle a la distance 3r est encore plus courte, environ le neuvieme de la premiere, illustrant la decroissance du champ avec le carre de la distance.</desc>

            <defs>
              <marker id="arrow-phys1re-champe" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axe radial -->
            <line class="guide-line" x1="60" y1="170" x2="380" y2="170"></line>

            <!-- charge Q -->
            <circle class="plot-point" cx="60" cy="170" r="9"></circle>
            <text class="annotation-label" x="60" y="145" text-anchor="middle">+Q</text>

            <!-- point a r, vecteur E1 (le plus long) -->
            <circle class="plot-point-alt" cx="140" cy="170" r="4"></circle>
            <line class="curve-main" x1="140" y1="170" x2="210" y2="170" marker-end="url(#arrow-phys1re-champe)"></line>
            <text class="tick-label" x="140" y="192" text-anchor="middle">r</text>
            <text class="annotation-label" x="178" y="155" text-anchor="middle">E₁</text>

            <!-- point a 2r, vecteur E2 = E1/4 -->
            <circle class="plot-point-alt" cx="220" cy="170" r="4"></circle>
            <line class="curve-main" x1="220" y1="170" x2="237.5" y2="170" marker-end="url(#arrow-phys1re-champe)"></line>
            <text class="tick-label" x="220" y="192" text-anchor="middle">2r</text>
            <text class="annotation-label" x="245" y="160" text-anchor="start">E₂</text>

            <!-- point a 3r, vecteur E3 = E1/9 -->
            <circle class="plot-point-alt" cx="300" cy="170" r="4"></circle>
            <line class="curve-main" x1="300" y1="170" x2="307.8" y2="170" marker-end="url(#arrow-phys1re-champe)"></line>
            <text class="tick-label" x="300" y="192" text-anchor="middle">3r</text>
            <text class="annotation-label" x="315" y="160" text-anchor="start">E₃</text>
          </svg>
        `,
        notes: [
          'Les trois points sont alignés sur le même axe radial issu de la charge $+Q$, à des distances $r$, $2r$ et $3r$ : le champ $\\vec{E}$ pointe partout <strong>en s\'éloignant</strong> de la charge, car $Q$ est positive.',
          'La norme du champ suit une loi en $1/r^2$ : en doublant la distance ($2r$), le champ est divisé par $2^2 = 4$ ; en la triplant ($3r$), il est divisé par $3^2 = 9$. C\'est exactement la même décroissance que pour le champ gravitationnel.',
          'Si la charge $Q$ était <strong>négative</strong>, les trois vecteurs $\\vec{E}$ pointeraient tous dans l\'autre sens, <strong>vers</strong> la charge, mais leur norme suivrait la même loi de décroissance.'
        ],
        reading: 'Repère la charge $+Q$ à gauche, puis compare la longueur des trois flèches en t\'éloignant vers la droite : elle diminue très rapidement, bien plus vite que la distance elle-même.',
        caption: 'Champ électrostatique radial créé par une charge ponctuelle positive : sa norme décroît en $1/r^2$, ici illustrée à $r$, $2r$ et $3r$ (rapports $1$, $1/4$ et $1/9$).'
      },
      example: {
        statement: 'Deux petites sphères chargées sont séparées d\'une distance $d = 15$ cm dans l\'air. La première porte une charge $q_1 = +4{,}0\\times10^{-6}$ C, la seconde $q_2 = -2{,}0\\times10^{-6}$ C. On donne $k \\approx 8{,}99\\times10^9$ N·m²/C².<br/><br/>Calculer la norme de la force électrostatique entre les deux sphères, et préciser si elle est attractive ou répulsive.',
        steps: [
          'Conversion de la distance en mètres : $d = 15$ cm $= 0{,}15$ m.',
          'Loi de Coulomb : $F = k\\dfrac{|q_1 \\, q_2|}{d^2} = 8{,}99\\times10^9 \\times \\dfrac{|4{,}0\\times10^{-6} \\times (-2{,}0\\times10^{-6})|}{0{,}15^2}$.',
          'Produit des charges (en valeur absolue) : $|q_1 q_2| = 4{,}0\\times10^{-6} \\times 2{,}0\\times10^{-6} = 8{,}0\\times10^{-12}$. Carré de la distance : $0{,}15^2 = 0{,}0225$ m².',
          '$F = 8{,}99\\times10^9 \\times \\dfrac{8{,}0\\times10^{-12}}{0{,}0225} = 8{,}99\\times10^9 \\times 3{,}56\\times10^{-10} \\approx 3{,}2$ N.',
          'Les charges $q_1$ et $q_2$ sont de <strong>signes opposés</strong> ($q_1 > 0$ et $q_2 < 0$) : la force est donc <strong>attractive</strong>.'
        ],
        answer: '$F \\approx 3{,}2$ N, force attractive. Le signe des charges ne modifie jamais la formule numérique de Coulomb (on prend toujours la valeur absolue du produit), mais il détermine entièrement le <strong>sens</strong> de la force : c\'est une étape à part entière du raisonnement, pas un détail accessoire.'
      },
      formulas: [
        'Loi de Coulomb : $F = k\\dfrac{|q_1 \\, q_2|}{d^2}$, avec $k \\approx 8{,}99\\times10^9$ N·m²/C²',
        'Champ électrostatique : $\\vec{E}(M) = \\dfrac{\\vec{F}}{q}$ (en V/m ou N/C)',
        'Champ créé par une charge ponctuelle $Q$ à distance $r$ : $E(r) = k\\dfrac{|Q|}{r^2}$',
        'Force électrique subie par une charge test : $\\vec{F} = q\\vec{E}$',
        'Charge élémentaire : $e \\approx 1{,}6\\times10^{-19}$ C'
      ],
      recap: [
        'L\'interaction électrostatique peut être <strong>attractive</strong> (charges de signes opposés) ou <strong>répulsive</strong> (charges de même signe), contrairement à la gravitation, toujours attractive.',
        'La loi de Coulomb a la même structure que la loi de gravitation universelle : elle décroît avec le <strong>carré</strong> de la distance ($1/d^2$).',
        'Le champ électrostatique $\\vec{E}$ créé par une charge positive pointe en s\'<strong>éloignant</strong> d\'elle ; celui créé par une charge négative pointe <strong>vers</strong> elle.',
        'La force subie par une charge test $q$ placée dans un champ $\\vec{E}$ vaut $\\vec{F} = q\\vec{E}$ : son sens dépend du <strong>signe</strong> de $q$, pas seulement de celui du champ.'
      ],
      piege: 'Une erreur fréquente est d\'oublier de tenir compte du signe des charges pour déterminer le sens de la force, en ne calculant que sa norme avec la formule de Coulomb. Attention, la formule $F = k\\dfrac{|q_1 q_2|}{d^2}$ ne donne que la <strong>norme</strong> de la force (toujours positive) : c\'est en comparant les signes de $q_1$ et $q_2$, séparément, qu\'on détermine si l\'interaction est attractive ou répulsive.'
    },

    quiz: [
      {
        q: 'Deux charges électriques $q_1 = +3\\,\\mu C$ et $q_2 = +5\\,\\mu C$ sont placées à proximité l\'une de l\'autre. Quelle est la nature de la force électrostatique entre elles ?',
        options: [
          'Attractive, car les deux charges sont positives',
          'Répulsive, car les deux charges sont de même signe',
          'Nulle, car les deux charges sont positives',
          'On ne peut pas savoir sans connaître la distance'
        ],
        answer: 1,
        correction: 'Deux charges de <strong>même signe</strong> (ici, toutes deux positives) se repoussent : la force est répulsive, quelle que soit la distance qui les sépare (seule la norme de la force dépend de la distance, pas sa nature attractive ou répulsive).'
      },
      {
        q: 'Le champ électrostatique créé par une charge ponctuelle $Q$ à une distance $r$ de celle-ci vaut $E$. Si on double la distance (on se place à $2r$), que devient le champ ?',
        options: [
          'Il double',
          'Il est divisé par 2',
          'Il est divisé par 4',
          'Il reste identique'
        ],
        answer: 2,
        correction: 'Le champ électrostatique suit une loi en $1/r^2$ : $E(2r) = k\\dfrac{|Q|}{(2r)^2} = k\\dfrac{|Q|}{4r^2} = \\dfrac{E(r)}{4}$. En doublant la distance, le champ est bien divisé par $4$, pas par $2$.'
      },
      {
        q: 'Une charge test $q = -2\\,\\mu C$ (négative) est placée dans un champ électrostatique $\\vec{E}$ orienté vers la droite. Quel est le sens de la force électrique $\\vec{F} = q\\vec{E}$ subie par cette charge ?',
        options: [
          'Vers la droite, comme $\\vec{E}$',
          'Vers la gauche, opposé à $\\vec{E}$, car $q$ est négative',
          'La force est nulle, car $q$ est négative',
          'On ne peut pas déterminer le sens sans connaître la norme de $\\vec{E}$'
        ],
        answer: 1,
        correction: 'Comme $q<0$, le vecteur $\\vec{F} = q\\vec{E}$ est de <strong>sens opposé</strong> à $\\vec{E}$ : la force pointe donc vers la gauche, même si le champ lui-même pointe vers la droite. Le signe de la charge test inverse toujours le sens de la force par rapport au champ.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['coulomb', 'champ']);
        var k = 8.99e9;

        if (typeExo === 'coulomb') {
          var q1mant = randFloat(1, 9, 1);
          var q2mant = randFloat(1, 9, 1);
          var d = randFloat(0.05, 0.5, 2);
          var q1 = q1mant * 1e-6;
          var q2 = q2mant * 1e-6;
          var F = k * q1 * q2 / (d * d);
          var expF = Math.floor(Math.log10(F));
          var mantF = parseFloat((F / Math.pow(10, expF)).toFixed(2));
          if (mantF >= 10) { mantF = parseFloat((mantF / 10).toFixed(2)); expF += 1; }
          var Fdisplay = fr(mantF, 2) + ' \\times 10^{' + expF + '}';
          var contexte = pick([
            'un générateur électrostatique de laboratoire',
            'deux sphères conductrices d\'une expérience de Coulomb',
            'un dispositif de démonstration en salle de physique',
            'un capteur électrostatique de contrôle industriel'
          ]);
          return {
            statement: 'Sur ' + contexte + ', deux charges ponctuelles $q_1 = ' + fr(q1mant, 1) + '\\times10^{-6}$ C et $q_2 = ' + fr(q2mant, 1) + '\\times10^{-6}$ C sont séparées d\'une distance $d = ' + fr(d, 2) + '$ m.<br/><br/>Avec $k \\approx 8{,}99\\times10^9$ N·m²/C², calcule la norme $F$ de la force électrostatique entre elles (en N, en notation scientifique, arrondie à deux chiffres significatifs).',
            answer: F,
            tolerance: F * 0.05,
            unit: 'N',
            hint: 'Loi de Coulomb : $F = k\\dfrac{|q_1 q_2|}{d^2}$. N\'oublie pas d\'élever $d$ au carré avant de diviser.',
            solution: [
              'Loi de Coulomb : $F = k\\dfrac{|q_1 \\, q_2|}{d^2}$.',
              'Produit des charges : $' + fr(q1mant, 1) + '\\times10^{-6} \\times ' + fr(q2mant, 1) + '\\times10^{-6}$. Carré de la distance : $d^2 = ' + fr(parseFloat((d * d).toFixed(4)), 4) + '$ m².',
              'Résultat : $F \\approx ' + Fdisplay + '$ N.'
            ]
          };
        } else {
          var Qmant = randFloat(1, 9, 1);
          var Q = Qmant * 1e-6;
          var r = randFloat(0.1, 1, 2);
          var E = k * Q / (r * r);
          var expE = Math.floor(Math.log10(E));
          var mantE = parseFloat((E / Math.pow(10, expE)).toFixed(2));
          if (mantE >= 10) { mantE = parseFloat((mantE / 10).toFixed(2)); expE += 1; }
          var Edisplay = fr(mantE, 2) + ' \\times 10^{' + expE + '}';
          var appareil = pick([
            'un capteur de champ électrostatique',
            'une électrode d\'un dispositif de dépoussiérage industriel',
            'un paratonnerre en cours de modélisation',
            'un module de mesure en salle de travaux pratiques'
          ]);
          return {
            statement: 'Sur ' + appareil + ', une charge ponctuelle $Q = ' + fr(Qmant, 1) + '\\times10^{-6}$ C crée un champ électrostatique à une distance $r = ' + fr(r, 2) + '$ m.<br/><br/>Avec $k \\approx 8{,}99\\times10^9$ N·m²/C², calcule la norme $E$ de ce champ (en V/m, en notation scientifique, arrondie à deux chiffres significatifs).',
            answer: E,
            tolerance: E * 0.05,
            unit: 'V/m',
            hint: 'Utilise $E(r) = k\\dfrac{|Q|}{r^2}$, la formule du champ créé par une charge ponctuelle.',
            solution: [
              'Formule du champ électrostatique : $E(r) = k\\dfrac{|Q|}{r^2}$.',
              'On élève d\'abord $r$ au carré, puis on multiplie $k$ par $|Q|$ avant de diviser.',
              'Résultat : $E \\approx ' + Edisplay + '$ V/m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Dans un dispositif de dépoussiérage électrostatique, une électrode porte une charge $Q = +2{,}5\\times10^{-5}$ C. Une petite particule de poussière porte une charge $q = -8{,}0\\times10^{-9}$ C et se trouve à une distance $r = 0{,}20$ m de l\'électrode. On donne $k \\approx 8{,}99\\times10^9$ N·m²/C².',
      tasks: [
        'Calculer la norme du champ électrostatique $E$ créé par l\'électrode à la distance $r$.',
        'En déduire la norme de la force électrique $F$ subie par la particule de poussière.',
        'Préciser le sens de cette force (attirance ou répulsion de la particule vers l\'électrode), en justifiant à partir des signes des charges.'
      ],
      solutions: [
        '$E = k\\dfrac{|Q|}{r^2} = 8{,}99\\times10^9 \\times \\dfrac{2{,}5\\times10^{-5}}{0{,}20^2} = 8{,}99\\times10^9 \\times \\dfrac{2{,}5\\times10^{-5}}{0{,}04} \\approx 5{,}62\\times10^6$ V/m.',
        '$F = |q| \\times E = 8{,}0\\times10^{-9} \\times 5{,}62\\times10^6 \\approx 4{,}5\\times10^{-2}$ N, soit environ $45$ mN.',
        'L\'électrode porte une charge <strong>positive</strong> ($Q>0$) et la particule une charge <strong>négative</strong> ($q<0$) : les deux charges sont de signes opposés, donc la force est <strong>attractive</strong>. La particule de poussière est attirée vers l\'électrode, ce qui permet de la capturer.'
      ],
      finalAnswer: '$E \\approx 5{,}62\\times10^6$ V/m et $F \\approx 4{,}5\\times10^{-2}$ N, force attractive. C\'est exactement ce principe d\'attraction électrostatique qui est exploité dans les filtres à particules industriels pour capter les poussières chargées.'
    },

    evaluation: {
      title: 'Évaluation — Champ électrostatique',
      duration: '30 min',
      questions: [
        {
          statement: 'Deux charges $q_1 = +2\\,\\mu C$ et $q_2 = +6\\,\\mu C$ sont séparées de $d = 0{,}10$ m. Calculer la norme de la force électrostatique entre elles (en N, avec $k \\approx 8{,}99\\times10^9$ N·m²/C²).',
          type: 'numeric',
          answer: 10.788,
          tolerance: 0.3,
          unit: 'N',
          points: 2,
          correction: '$F = k\\dfrac{q_1 q_2}{d^2} = 8{,}99\\times10^9 \\times \\dfrac{2\\times10^{-6}\\times6\\times10^{-6}}{0{,}10^2} = 8{,}99\\times10^9 \\times \\dfrac{1{,}2\\times10^{-11}}{0{,}01} \\approx 10{,}8$ N.'
        },
        {
          statement: 'Le champ électrostatique créé par une charge ponctuelle négative est orienté :',
          type: 'multiple-choice',
          options: [
            'En s\'éloignant de la charge',
            'Vers la charge',
            'Toujours vers le haut',
            'De façon aléatoire, selon l\'observateur'
          ],
          answer: 1,
          points: 2,
          correction: 'Une charge négative crée un champ électrostatique orienté <strong>vers elle</strong> (contrairement à une charge positive, dont le champ pointe en s\'en éloignant).'
        },
        {
          statement: 'Une charge ponctuelle $Q = 5{,}0\\times10^{-6}$ C crée un champ à une distance $r = 0{,}5$ m. Calculer la norme de ce champ (en V/m, avec $k \\approx 8{,}99\\times10^9$ N·m²/C²).',
          type: 'numeric',
          answer: 179800,
          tolerance: 5000,
          unit: 'V/m',
          points: 3,
          correction: '$E = k\\dfrac{|Q|}{r^2} = 8{,}99\\times10^9 \\times \\dfrac{5{,}0\\times10^{-6}}{0{,}5^2} = 8{,}99\\times10^9 \\times \\dfrac{5{,}0\\times10^{-6}}{0{,}25} \\approx 1{,}798\\times10^5$ V/m.'
        },
        {
          statement: 'Une charge test $q = +4\\,\\mu C$ placée dans un champ $E = 2\\,000$ V/m subit une force électrique de norme (en N) :',
          type: 'numeric',
          answer: 0.008,
          tolerance: 0.0005,
          unit: 'N',
          points: 2,
          correction: '$F = q \\times E = 4\\times10^{-6} \\times 2\\,000 = 8\\times10^{-3}$ N $= 0{,}008$ N.'
        },
        {
          statement: 'Si on triple la distance $r$ entre une charge ponctuelle et un point de mesure, le champ électrostatique en ce point est :',
          type: 'multiple-choice',
          options: [
            'Divisé par 3',
            'Divisé par 9',
            'Multiplié par 3',
            'Inchangé'
          ],
          answer: 1,
          points: 1,
          correction: 'Le champ suit une loi en $1/r^2$ : en triplant $r$, il est divisé par $3^2 = 9$.'
        }
      ]
    }
  });
