/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-inertie.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-inertie',
    level: 2, subject: 'physique',
    icon: '⚖️',
    title: 'Principe d\'inertie',
    subtitle: 'Compensation des forces, mouvement rectiligne uniforme, référentiel galiléen',
    keywords: ['Principe d\'inertie', 'MRU', 'Référentiel galiléen', 'Newton', 'Compensation des forces'],
    physics: 'Le principe d\'inertie explique pourquoi une ceinture de sécurité est indispensable en voiture, pourquoi un palet de curling glisse si loin sur la glace, ou pourquoi un satellite peut poursuivre sa route sans moteur allumé.',

    cours: {
      intro: 'Une idée reçue très répandue veut qu\'un objet en mouvement finisse toujours par s\'arrêter « naturellement », et qu\'il faille sans cesse le pousser pour qu\'il continue d\'avancer. C\'est faux : c\'est justement ce que le physicien italien Galilée, puis Newton, ont mis en évidence avec le <strong>principe d\'inertie</strong>.<br/><br/>Ce principe relie l\'état de mouvement d\'un système à l\'équilibre (ou non) des forces qu\'il subit. Il permet de répondre à une question essentielle : pourquoi certains objets restent-ils immobiles ou filent-ils en ligne droite à vitesse constante, alors que d\'autres accélèrent, freinent ou changent de direction ?',
      definitions: [
        { term: 'Principe d\'inertie', def: 'Première loi de Newton : dans un référentiel galiléen, si les forces qui s\'exercent sur un système se compensent (ou si aucune force ne s\'exerce sur lui), alors son centre de gravité est soit <strong>immobile</strong>, soit animé d\'un <strong>mouvement rectiligne uniforme</strong> (MRU). La réciproque est vraie.' },
        { term: 'Référentiel galiléen', def: 'Référentiel dans lequel le principe d\'inertie est vérifié. Le référentiel terrestre en est une très bonne approximation pour la plupart des mouvements du quotidien.' },
        { term: 'Mouvement rectiligne uniforme (MRU)', def: 'Mouvement dont la trajectoire est une <strong>droite</strong> et dont la valeur de la vitesse est <strong>constante</strong>. Les deux conditions sont nécessaires : une trajectoire courbe, même à vitesse de valeur constante, n\'est pas un MRU.' },
        { term: 'Inertie', def: 'Tendance naturelle d\'un système à conserver son état de mouvement (repos ou MRU) tant qu\'aucune action extérieure déséquilibrée ne vient le perturber. C\'est cette tendance qui projette les passagers vers l\'avant lors d\'un freinage brutal.' }
      ],
      method: {
        title: 'Appliquer le principe d\'inertie en 3 étapes',
        steps: [
          '<strong>Faire l\'inventaire des forces</strong> qui s\'exercent sur le système étudié (bilan des forces, de contact et à distance).',
          '<strong>Comparer ces forces</strong> : se compensent-elles (somme vectorielle nulle) ou non ? Il faut comparer direction, sens et valeur de chaque force.',
          '<strong>Conclure</strong> : si elles se compensent, le système est immobile ou en MRU (et réciproquement, observer un repos ou un MRU permet d\'affirmer qu\'elles se compensent). Si elles ne se compensent pas, le mouvement du centre de gravité est modifié : trajectoire déviée et/ou vitesse qui varie.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Principe d\'inertie (mécanique)',
        title: 'Forces compensées et mouvement rectiligne uniforme',
        description: 'En haut : un palet glisse sur une table à coussin d\'air horizontale (frottements négligeables) — les positions successives sont <strong>également espacées</strong>, signe d\'un MRU. En bas : le bilan des forces verticales qui s\'exercent sur le palet explique cette observation.',
        svg: `
          <svg viewBox="0 0 560 330" role="img" aria-labelledby="inertie2nde-title inertie2nde-desc">
            <title id="inertie2nde-title">Mouvement rectiligne uniforme et bilan des forces compensees</title>
            <desc id="inertie2nde-desc">En partie haute, six positions successives M0 a M5 d'un palet sont regulierement espacees le long d'une trajectoire rectiligne horizontale, avec un ecart constant entre chaque position, ce qui traduit un mouvement rectiligne uniforme. Deux vecteurs vitesse de meme longueur sont traces en deux points differents, confirmant que la valeur de la vitesse reste constante. En partie basse, un schema de face montre le palet pose sur une table : deux vecteurs verticaux de meme longueur et de sens opposes representent le poids, oriente vers le bas, et la reaction de la table, orientee vers le haut, dont la somme est nulle.</desc>

            <defs>
              <marker id="arrow-phys2-inertie" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- ZONE HAUTE : trajectoire MRU (ecarts constants) -->
            <line class="frame-line" x1="55" y1="90" x2="480" y2="90" marker-end="url(#arrow-phys2-inertie)"></line>

            <circle class="plot-point" cx="60" cy="90" r="4"></circle>
            <circle class="plot-point" cx="130" cy="90" r="4"></circle>
            <circle class="plot-point" cx="200" cy="90" r="4"></circle>
            <circle class="plot-point" cx="270" cy="90" r="4"></circle>
            <circle class="plot-point" cx="340" cy="90" r="4"></circle>
            <circle class="plot-point" cx="410" cy="90" r="4"></circle>

            <text class="tick-label" x="60" y="112" text-anchor="middle">M₀</text>
            <text class="tick-label" x="130" y="112" text-anchor="middle">M₁</text>
            <text class="tick-label" x="200" y="112" text-anchor="middle">M₂</text>
            <text class="tick-label" x="270" y="112" text-anchor="middle">M₃</text>
            <text class="tick-label" x="340" y="112" text-anchor="middle">M₄</text>
            <text class="tick-label" x="410" y="112" text-anchor="middle">M₅</text>

            <line class="guide-line" x1="130" y1="90" x2="130" y2="45"></line>
            <line class="guide-line" x1="340" y1="90" x2="340" y2="45"></line>

            <line class="curve-main" x1="130" y1="45" x2="185" y2="45" marker-end="url(#arrow-phys2-inertie)"></line>
            <text class="annotation-label" x="157" y="33" text-anchor="middle">v = 2,0 m/s</text>

            <line class="curve-main" x1="340" y1="45" x2="395" y2="45" marker-end="url(#arrow-phys2-inertie)"></line>
            <text class="annotation-label" x="367" y="33" text-anchor="middle">v = 2,0 m/s</text>

            <text class="label-soft" x="460" y="78" text-anchor="middle">écarts égaux → MRU</text>

            <!-- ZONE BASSE : bilan des forces (vue de face) -->
            <text class="label-soft" x="280" y="160" text-anchor="middle">Vue de face : bilan des forces sur le palet</text>

            <line class="frame-line" x1="220" y1="260" x2="340" y2="260"></line>
            <line class="frame-line" x1="225" y1="260" x2="215" y2="270"></line>
            <line class="frame-line" x1="245" y1="260" x2="235" y2="270"></line>
            <line class="frame-line" x1="265" y1="260" x2="255" y2="270"></line>
            <line class="frame-line" x1="285" y1="260" x2="275" y2="270"></line>
            <line class="frame-line" x1="305" y1="260" x2="295" y2="270"></line>
            <line class="frame-line" x1="325" y1="260" x2="315" y2="270"></line>

            <rect class="frame-line" x="250" y="235" width="60" height="25" fill="none"></rect>
            <circle class="plot-point-alt" cx="280" cy="247" r="3"></circle>

            <line class="curve-main" x1="280" y1="247" x2="280" y2="202" marker-end="url(#arrow-phys2-inertie)"></line>
            <text class="annotation-label" x="298" y="210" text-anchor="start">N = 2,45 N</text>

            <line class="curve-main" x1="280" y1="247" x2="280" y2="292" marker-end="url(#arrow-phys2-inertie)"></line>
            <text class="annotation-label" x="298" y="288" text-anchor="start">P = 2,45 N</text>

            <text class="label-soft" x="280" y="315" text-anchor="middle">N et P se compensent : ΣF = 0</text>
          </svg>
        `,
        notes: [
          'Dans la zone haute, les écarts entre positions successives sont <strong>égaux</strong> pour des durées égales : c\'est la signature d\'un <strong>mouvement rectiligne uniforme</strong> (les deux vecteurs vitesse tracés ont d\'ailleurs exactement la même longueur).',
          'Dans la zone basse, le palet (masse $m = 250$ g) subit deux forces verticales : son poids $\\vec{P}$ et la réaction normale $\\vec{N}$ de la table. Comme il ne quitte pas la table et que le support est horizontal, ces deux forces se <strong>compensent</strong> : $N = P = m \\times g \\approx 0{,}250 \\times 9{,}8 \\approx 2{,}45$ N.',
          'Aucune force horizontale ne s\'exerçant sur le palet (frottements négligés), la somme des forces est nulle dans les deux directions : le principe d\'inertie prévoit alors exactement ce qui est observé en haut, un <strong>MRU</strong>.'
        ],
        reading: 'Commence par la zone haute : observe que les points sont régulièrement espacés et que les deux vecteurs vitesse ont la même longueur. Regarde ensuite la zone basse pour comprendre pourquoi, grâce à la compensation des forces verticales.',
        caption: 'Un palet glissant sans frottement sur une table à coussin d\'air horizontale : les forces verticales ($\\vec{P}$ et $\\vec{N}$) se compensent, donc, d\'après le principe d\'inertie, le mouvement est rectiligne uniforme.'
      },
      example: {
        statement: 'Sur un banc à coussin d\'air parfaitement horizontal, un mobile autoporteur de masse $m = 250$ g est lancé. Une caméra relève sa position toutes les $\\tau = 0{,}1$ s : $x_0 = 0$ cm, $x_1 = 8$ cm, $x_2 = 16$ cm, $x_3 = 24$ cm.<br/><br/>Montre que ce mouvement est un mouvement rectiligne uniforme, calcule sa vitesse, puis relie cette observation au principe d\'inertie.',
        steps: [
          'Distances parcourues à chaque intervalle : $x_1 - x_0 = 8$ cm, $x_2 - x_1 = 8$ cm, $x_3 - x_2 = 8$ cm. Les durées sont égales ($\\tau = 0{,}1$ s) et les distances sont <strong>égales</strong> : la trajectoire est rectiligne (le banc est un rail droit) et la vitesse est constante, c\'est donc bien un <strong>MRU</strong>.',
          'Vitesse : $v = \\dfrac{d}{\\tau} = \\dfrac{0{,}08}{0{,}1} = 0{,}8$ m/s (identique à chaque intervalle).',
          'Bilan des forces : le support étant horizontal et les frottements négligeables, seules deux forces verticales s\'exercent sur le mobile, son poids $\\vec{P}$ et la réaction $\\vec{N}$ du banc, qui se compensent exactement.',
          'D\'après le principe d\'inertie, des forces qui se compensent impliquent un système immobile ou en MRU : c\'est exactement ce qui est observé, ce qui <strong>confirme</strong> la cohérence entre le modèle théorique et l\'expérience.'
        ],
        answer: 'Mouvement rectiligne uniforme de vitesse $v = 0{,}8$ m/s. Les forces verticales ($\\vec{P}$ et $\\vec{N}$) se compensent et aucune force horizontale n\'agit : le principe d\'inertie prévoit alors un MRU, en accord parfait avec les mesures.'
      },
      formulas: [
        'Principe d\'inertie (référentiel galiléen) : $\\sum \\vec{F} = \\vec{0}$ $\\Leftrightarrow$ système immobile OU en mouvement rectiligne uniforme (MRU)',
        'Réciproque : système immobile ou en MRU $\\Rightarrow$ $\\sum \\vec{F} = \\vec{0}$',
        'Si $\\sum \\vec{F} \\neq \\vec{0}$ : le mouvement du centre de gravité est modifié (trajectoire déviée et/ou vitesse qui varie)',
        'MRU : trajectoire rectiligne <strong>et</strong> valeur de la vitesse constante (les deux conditions sont nécessaires)'
      ],
      recap: [
        'Le <strong>principe d\'inertie</strong> (1ère loi de Newton) : dans un référentiel galiléen, si les forces se compensent, le système est immobile ou en <strong>MRU</strong> — et réciproquement.',
        'Un <strong>MRU</strong> combine deux conditions : trajectoire rectiligne <strong>et</strong> vitesse de valeur constante.',
        'Si les forces <strong>ne se compensent pas</strong>, le mouvement du centre de gravité est modifié (trajectoire déviée et/ou vitesse qui varie).',
        'Le référentiel terrestre est une bonne approximation d\'un <strong>référentiel galiléen</strong> pour les mouvements usuels du quotidien.'
      ],
      piege: 'Une idée reçue très répandue est de penser qu\'il faut une force pour « entretenir » un mouvement rectiligne uniforme, comme si la vitesse retombait dès qu\'on arrête de pousser. Attention : c\'est l\'inverse, un système livré à lui-même avec des forces compensées garde spontanément sa vitesse constante ; ce sont les frottements non compensés, bien réels dans la vie quotidienne, qui freinent les objets, et non l\'absence d\'une force motrice.'
    },

    quiz: [
      {
        q: 'D\'après le principe d\'inertie, un système sur lequel les forces se compensent est nécessairement :',
        options: [
          'Immobile, et uniquement immobile',
          'Immobile ou en mouvement rectiligne uniforme',
          'En mouvement accéléré',
          'En mouvement circulaire'
        ],
        answer: 1,
        correction: 'Le principe d\'inertie prévoit <strong>deux</strong> cas possibles lorsque les forces se compensent : le système peut être immobile, ou animé d\'un mouvement rectiligne uniforme (MRU). Se limiter au seul cas « immobile » oublie la moitié du principe.'
      },
      {
        q: 'Un traîneau glisse sur la neige à vitesse constante, en ligne droite. Que peut-on en conclure sur les forces qui s\'exercent sur lui ?',
        options: [
          'Aucune force ne s\'exerce sur lui',
          'Les forces qui s\'exercent sur lui se compensent',
          'Il est nécessairement soumis à une force motrice supérieure aux frottements',
          'On ne peut rien conclure sans connaître sa masse'
        ],
        answer: 1,
        correction: 'Le traîneau étant en MRU (trajectoire rectiligne, vitesse constante), la <strong>réciproque</strong> du principe d\'inertie s\'applique : les forces qui s\'exercent sur lui se compensent nécessairement, même si plusieurs forces non nulles sont bien présentes (poids, réaction, frottements, traction).'
      },
      {
        q: 'Un vélo accélère en ligne droite en sortie de feu rouge. Que peut-on dire des forces qui s\'exercent sur le système {vélo + cycliste} ?',
        options: [
          'Elles se compensent',
          'Elles ne se compensent pas : leur somme n\'est pas nulle',
          'Il n\'y a aucune force qui s\'exerce sur le système',
          'Seul le poids agit sur le système'
        ],
        answer: 1,
        correction: 'Le mouvement n\'est pas un MRU (la vitesse augmente) : d\'après le principe d\'inertie, cela signifie que les forces <strong>ne se compensent pas</strong>. Ici, la force motrice exercée par le cycliste sur les pédales dépasse les frottements qui s\'opposent au mouvement.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse_mru', 'prediction_mru']);

        if (typeExo === 'vitesse_mru') {
          var tau = pick([0.1, 0.2, 0.5]);
          var pas = randFloat(0.2, 3, 2);
          var v = parseFloat((pas / tau).toFixed(2));
          var contexte = pick([
            'un palet sur une table à coussin d\'air',
            'une pierre de curling sur la glace',
            'un chariot sur un rail à coussin d\'air',
            'une bille sur un rail horizontal parfaitement lisse',
            'un palet de hockey sur une patinoire'
          ]);
          return {
            statement: 'Sur ' + contexte + ', les frottements sont négligeables. Toutes les $\\tau = ' + fr(tau, 1) + '$ s, la position du mobile avance d\'exactement $' + fr(pas, 2) + '$ m : le mouvement est rectiligne uniforme.<br/><br/>Calcule la vitesse $v$ de ce mobile (en m/s, arrondie au centième).',
            answer: v,
            tolerance: Math.max(0.02, parseFloat((v * 0.03).toFixed(2))),
            unit: 'm/s',
            hint: 'En MRU, la vitesse est constante : $v = \\dfrac{d}{\\tau}$, où $d$ est la distance parcourue à chaque intervalle de durée $\\tau$.',
            solution: [
              'Le mouvement étant uniforme, la vitesse est la même à chaque intervalle : $v = \\dfrac{d}{\\tau}$.',
              'Application numérique : $v = \\dfrac{' + fr(pas, 2) + '}{' + fr(tau, 1) + '}$.',
              'Résultat : $v \\approx ' + fr(v, 2) + '$ m/s.'
            ]
          };
        } else {
          var vP = randFloat(0.5, 10, 1);
          var x0 = randFloat(0, 20, 1);
          var t = rand(2, 15);
          var xFinal = parseFloat((x0 + vP * t).toFixed(1));
          var contexte2 = pick([
            'un patineur glissant sur la glace, forces compensées',
            'une luge lancée sur un lac gelé parfaitement plat',
            'un chariot roulant sans frottement sur un rail rectiligne',
            'un palet propulsé sur une table à coussin d\'air'
          ]);
          return {
            statement: 'Dans le cas de ' + contexte2 + ', les forces qui s\'exercent sur le système se compensent : d\'après le principe d\'inertie, sa vitesse $v = ' + fr(vP, 1) + '$ m/s reste constante. À un instant donné, le système se trouve à la position $x_0 = ' + fr(x0, 1) + '$ m.<br/><br/>Calcule sa position $x$ après une durée $t = ' + t + '$ s (en m, arrondie au dixième).',
            answer: xFinal,
            tolerance: Math.max(0.3, parseFloat((xFinal * 0.02).toFixed(1))),
            unit: 'm',
            hint: 'En MRU, la position évolue selon $x = x_0 + v \\times t$ (la vitesse ne change pas).',
            solution: [
              'Loi horaire d\'un MRU : $x = x_0 + v \\times t$.',
              'Application numérique : $x = ' + fr(x0, 1) + ' + ' + fr(vP, 1) + ' \\times ' + t + '$.',
              'Résultat : $x \\approx ' + fr(xFinal, 1) + '$ m.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un traîneau tiré par un attelage de chiens avance en ligne droite à vitesse constante sur la neige, malgré les frottements qui s\'exercent sur les patins.',
      tasks: [
        'Le traîneau étant en MRU, que peut-on dire de la somme des forces qui s\'exercent sur lui ?',
        'Sachant que les frottements s\'opposent au mouvement avec une force de valeur $f = 180$ N et que la réaction verticale équilibre exactement le poids, quelle doit être la valeur de la force de traction horizontale $F$ exercée par l\'attelage ?',
        'Les chiens accélèrent soudainement l\'allure : que peut-on en conclure sur l\'équilibre des forces horizontales à cet instant ?'
      ],
      solutions: [
        'Le traîneau étant en MRU (trajectoire rectiligne, vitesse constante), la réciproque du principe d\'inertie s\'applique : la somme vectorielle des forces qui s\'exercent sur lui est <strong>nulle</strong>, les forces se compensent exactement.',
        'Horizontalement, seules la force de traction $F$ (vers l\'avant) et le frottement $f$ (vers l\'arrière) agissent. Pour qu\'elles se compensent : $F = f = 180$ N.',
        'Si les chiens accélèrent, le mouvement n\'est plus uniforme (la vitesse augmente) : d\'après le principe d\'inertie, les forces horizontales ne se compensent <strong>plus</strong> — la force de traction $F$ devient supérieure au frottement $f$.'
      ],
      finalAnswer: '$F = 180$ N pendant la phase à vitesse constante. Dès que le traîneau accélère, $F$ devient supérieure à $f$ : ce déséquilibre horizontal illustre concrètement la réciproque du principe d\'inertie — un mouvement qui n\'est plus uniforme signe des forces qui ne se compensent plus.'
    },

    evaluation: {
      title: 'Évaluation — Principe d\'inertie',
      duration: '30 min',
      questions: [
        {
          statement: 'Le principe d\'inertie s\'applique dans un référentiel dit :',
          type: 'multiple-choice',
          options: [
            'Accéléré',
            'Galiléen',
            'Curviligne',
            'Terrestre uniquement, et dans aucun autre'
          ],
          answer: 1,
          points: 2,
          correction: 'Un référentiel dans lequel le principe d\'inertie est vérifié est appelé référentiel <strong>galiléen</strong>. Le référentiel terrestre en est un excellent exemple, mais ce n\'est pas le seul possible.'
        },
        {
          statement: 'Un mobile en MRU avance de $1{,}5$ m toutes les $\\tau = 0{,}3$ s. Calculer sa vitesse (en m/s).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.2,
          unit: 'm/s',
          points: 2,
          correction: '$v = \\dfrac{d}{\\tau} = \\dfrac{1{,}5}{0{,}3} = 5$ m/s.'
        },
        {
          statement: 'Un bloc de glace glisse en ligne droite à vitesse constante sur un lac gelé (frottements négligeables). Que peut-on dire des forces qui s\'exercent sur lui ?',
          type: 'multiple-choice',
          options: [
            'Elles se compensent',
            'Elles ne se compensent pas',
            'Il n\'existe aucune force',
            'On ne peut pas savoir sans connaître sa masse'
          ],
          answer: 0,
          points: 2,
          correction: 'Trajectoire rectiligne et vitesse constante : c\'est un MRU. D\'après la réciproque du principe d\'inertie, les forces qui s\'exercent sur le bloc se <strong>compensent</strong> nécessairement.'
        },
        {
          statement: 'Un système en MRU a une vitesse constante $v = 3$ m/s. Il se trouve à la position $x_0 = 2$ m. Calculer sa position après $t = 4$ s (en m).',
          type: 'numeric',
          answer: 14,
          tolerance: 0.5,
          unit: 'm',
          points: 3,
          correction: '$x = x_0 + v \\times t = 2 + 3 \\times 4 = 14$ m.'
        },
        {
          statement: 'Une voiture aborde un virage à vitesse constante <strong>en valeur</strong>, sur une trajectoire courbe. Que peut-on en conclure sur les forces qui s\'exercent sur elle ?',
          type: 'multiple-choice',
          options: [
            'Elles se compensent, puisque la valeur de la vitesse ne change pas',
            'Elles ne se compensent pas, même si la valeur de la vitesse ne change pas',
            'Il n\'existe aucune force centripète dans ce cas',
            'Le principe d\'inertie ne s\'applique pas à cette situation'
          ],
          answer: 1,
          points: 1,
          correction: 'Une trajectoire <strong>courbe</strong> n\'est pas un MRU, même si la valeur de la vitesse reste constante : le vecteur vitesse change de direction. D\'après le principe d\'inertie, les forces ne se compensent donc <strong>pas</strong> (leur résultante, centripète, dévie la trajectoire).'
        }
      ]
    }
  });
