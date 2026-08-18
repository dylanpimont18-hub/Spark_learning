/* =========================================================
   Spark Learning – data/physique-1re/physique-1re-newton.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-1re-newton',
    level: 2, subject: 'physique',
    icon: '🍎',
    title: 'Lois de Newton',
    subtitle: 'Principe d\'inertie, principe fondamental de la dynamique, principe des actions réciproques',
    keywords: ['Newton', 'Inertie', 'PFD', 'Actions réciproques', 'Bilan des forces'],
    physics: 'Les lois de Newton expliquent le fonctionnement des airbags et des ceintures de sécurité (inertie), permettent de dimensionner la force de traction d\'un véhicule ou d\'un convoyeur (PFD), et justifient la propulsion d\'une fusée (actions réciproques).',

    cours: {
      intro: 'Isaac Newton a formulé trois lois qui relient les forces subies par un système à son mouvement. Elles forment le socle de toute la mécanique classique.<br/><br/>Le <strong>principe d\'inertie</strong> (1ʳᵉ loi) affirme que, dans un référentiel galiléen, un système soumis à des forces qui se compensent ($\\sum \\vec{F} = \\vec{0}$) est soit immobile, soit en mouvement rectiligne uniforme.<br/><br/>Le <strong>principe fondamental de la dynamique</strong>, ou PFD (2ᵉ loi), relie la résultante des forces à l\'accélération du système : $\\sum \\vec{F} = m\\vec{a}$. Il généralise le principe d\'inertie au cas où les forces ne se compensent pas.<br/><br/>Le <strong>principe des actions réciproques</strong> (3ᵉ loi) affirme que si un système A exerce une force sur un système B, alors B exerce sur A une force de <strong>même norme</strong>, de <strong>même direction</strong>, mais de <strong>sens opposé</strong> : $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$.',
      definitions: [
        { term: 'Référentiel galiléen', def: 'Référentiel dans lequel les lois de Newton s\'appliquent directement. Le référentiel terrestre est considéré galiléen pour la plupart des mouvements étudiés au lycée.' },
        { term: 'Principe d\'inertie (1ʳᵉ loi)', def: 'Dans un référentiel galiléen, un système est au repos ou en mouvement rectiligne uniforme <strong>si et seulement si</strong> la somme vectorielle des forces qu\'il subit est nulle : $\\sum \\vec{F} = \\vec{0}$.' },
        { term: 'Principe fondamental de la dynamique, PFD (2ᵉ loi)', def: 'Dans un référentiel galiléen, la somme des forces extérieures appliquées à un système de masse $m$ est égale au produit de sa masse par son vecteur accélération : $\\sum \\vec{F} = m\\vec{a}$.' },
        { term: 'Principe des actions réciproques (3ᵉ loi)', def: 'Si un système A exerce sur un système B une force $\\vec{F}_{A/B}$, alors B exerce sur A une force $\\vec{F}_{B/A}$ telle que $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$ : même norme, même direction, sens opposé. Ces deux forces s\'exercent sur deux systèmes <strong>différents</strong>, elles ne peuvent donc jamais se compenser l\'une l\'autre.' }
      ],
      method: {
        title: 'Appliquer les lois de Newton en 3 étapes',
        steps: [
          '<strong>Faire le bilan des forces</strong> extérieures qui s\'exercent sur le système étudié (poids, réaction du support, force appliquée, frottements…), en précisant leur point d\'application, leur direction et leur sens.',
          '<strong>Choisir la loi adaptée</strong> : si le système est au repos ou en MRU, appliquer le <strong>principe d\'inertie</strong> ($\\sum \\vec{F} = \\vec{0}$) pour trouver une force inconnue par équilibre ; sinon, appliquer le <strong>PFD</strong> ($\\sum \\vec{F} = m\\vec{a}$) pour relier la résultante des forces à l\'accélération.',
          '<strong>Projeter</strong> la relation vectorielle sur les axes pertinents (souvent horizontal et vertical) pour obtenir des équations scalaires, puis résoudre.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Bilan des forces sur un solide en mouvement',
        title: 'Principe d\'inertie (équilibre vertical) et PFD (résultante horizontale)',
        description: 'Une caisse tractée horizontalement subit quatre forces : le poids $\\vec{P}$, la réaction normale $\\vec{N}$, la force de traction $\\vec{F}$ et le frottement $\\vec{f}$. L\'équilibre vertical ($N=P$) et la résultante horizontale (qui donne $\\vec{a}$) illustrent respectivement le principe d\'inertie et le PFD.',
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="newton-title newton-desc">
            <title id="newton-title">Bilan des forces sur une caisse tractee horizontalement sur le sol</title>
            <desc id="newton-desc">Une caisse rectangulaire posee sur une ligne horizontale representant le sol est soumise a quatre forces partant de son centre. Une fleche vers le bas represente le poids. Une fleche vers le haut, de meme longueur que le poids, represente la reaction normale du sol, illustrant leur egalite a l'equilibre vertical. Une fleche vers la droite, plus longue, represente la force de traction. Une fleche vers la gauche, plus courte, represente le frottement qui s'oppose au mouvement. En dessous du schema, une fleche plus courte et separee represente le vecteur acceleration resultant, oriente vers la droite comme la somme des forces horizontales.</desc>

            <defs>
              <marker id="arrow-phys1re-newton" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="40" y1="230" x2="520" y2="230"></line>

            <!-- caisse -->
            <rect class="frame-line" x="200" y="160" width="100" height="70" fill="none"></rect>
            <circle class="plot-point" cx="250" cy="195" r="4"></circle>

            <!-- N (haut) -->
            <line class="curve-main" x1="250" y1="195" x2="250" y2="160" marker-end="url(#arrow-phys1re-newton)"></line>
            <text class="annotation-label" x="264" y="150" text-anchor="start">N</text>

            <!-- P (bas) -->
            <line class="curve-main" x1="250" y1="195" x2="250" y2="230" marker-end="url(#arrow-phys1re-newton)"></line>
            <text class="annotation-label" x="264" y="245" text-anchor="start">P</text>

            <!-- F (droite) -->
            <line class="curve-main" x1="250" y1="195" x2="340" y2="195" marker-end="url(#arrow-phys1re-newton)"></line>
            <text class="annotation-label" x="345" y="190" text-anchor="start">F</text>

            <!-- f (gauche) -->
            <line class="curve-main" x1="250" y1="195" x2="190" y2="195" marker-end="url(#arrow-phys1re-newton)"></line>
            <text class="annotation-label" x="150" y="190" text-anchor="start">f</text>

            <!-- vecteur acceleration resultant, sous le sol -->
            <line class="curve-main" x1="235" y1="280" x2="265" y2="280" marker-end="url(#arrow-phys1re-newton)"></line>
            <text class="annotation-label" x="270" y="285" text-anchor="start">a</text>
            <text class="label-soft" x="250" y="300" text-anchor="middle">résultante horizontale ÷ m</text>
          </svg>
        `,
        notes: [
          'Sur l\'axe vertical, la caisse ne décolle pas du sol et ne s\'y enfonce pas : $\\vec{N}$ et $\\vec{P}$ se compensent exactement ($N = P$), une application directe du <strong>principe d\'inertie</strong> selon cet axe.',
          'Sur l\'axe horizontal, $\\vec{F}$ (traction) est plus grande que $\\vec{f}$ (frottement) : la résultante n\'est pas nulle, ce qui produit une accélération $\\vec{a}$, orientée dans le <strong>même sens</strong> que cette résultante — c\'est le <strong>PFD</strong>.',
          'Toutes les forces sont représentées à partir du même point, le centre du solide assimilé à un point matériel, conformément au modèle vu en cinématique.'
        ],
        reading: 'Repère d\'abord les deux forces verticales ($N$ et $P$, de même longueur), puis les deux forces horizontales ($F$ plus longue que $f$), et enfin le vecteur $\\vec{a}$ en dessous, orienté comme la résultante horizontale.',
        caption: 'Bilan des forces sur une caisse tractée horizontalement : équilibre vertical ($N=P$, principe d\'inertie) et résultante horizontale non nulle, à l\'origine de l\'accélération $\\vec{a}$ (PFD).'
      },
      example: {
        statement: 'Un traîneau de masse $m = 25$ kg glisse sur une piste horizontale enneigée. Il est tiré par une force horizontale $F = 150$ N, tandis que les frottements exercent une force horizontale $f = 30$ N, opposée au mouvement.<br/><br/>Calculer l\'accélération du traîneau.',
        steps: [
          'Système : le traîneau, assimilé à un point matériel. Référentiel terrestre, supposé galiléen.',
          'Bilan des forces : le poids $\\vec{P}$, la réaction normale $\\vec{N}$ (verticales), la force de traction $\\vec{F}$ et le frottement $\\vec{f}$ (horizontales).',
          'Sur l\'axe vertical, le traîneau reste sur la piste sans s\'enfoncer : d\'après le principe d\'inertie appliqué à cet axe, $N = P$ (ces deux forces se compensent, elles n\'interviennent donc pas dans le mouvement horizontal).',
          'Sur l\'axe horizontal, on applique le PFD projeté : $F - f = m \\times a$, donc $a = \\dfrac{F - f}{m} = \\dfrac{150 - 30}{25} = \\dfrac{120}{25}$.',
          'Résultat : $a = 4{,}8$ m/s².'
        ],
        answer: '$a = 4{,}8$ m/s², dans le sens du mouvement (car $F > f$). Seules les forces qui ne se compensent pas contribuent à l\'accélération : ici, $\\vec{N}$ et $\\vec{P}$ s\'annulent, seule la différence $F - f$ agit horizontalement.'
      },
      formulas: [
        'Principe d\'inertie (1ʳᵉ loi) : $\\sum \\vec{F} = \\vec{0} \\iff$ repos ou mouvement rectiligne uniforme',
        'Principe fondamental de la dynamique, PFD (2ᵉ loi) : $\\sum \\vec{F} = m\\vec{a}$',
        'Principe des actions réciproques (3ᵉ loi) : $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$',
        'PFD projeté sur un axe (cas 1D) : $a = \\dfrac{\\sum F}{m}$'
      ],
      recap: [
        'Le principe d\'inertie et le PFD sont en réalité une seule et même loi : le premier est le cas particulier du second lorsque $\\vec{a} = \\vec{0}$.',
        'Le PFD est une relation <strong>vectorielle</strong> : il doit être projeté sur des axes bien choisis avant tout calcul numérique.',
        'Le principe des actions réciproques relie deux forces qui s\'exercent sur <strong>deux systèmes différents</strong> : elles ne peuvent donc jamais apparaître ensemble dans le bilan des forces d\'un seul système, et ne peuvent jamais se compenser.',
        'Seule la <strong>résultante</strong> des forces détermine l\'accélération : des forces individuellement grandes peuvent produire une accélération nulle si elles se compensent exactement.'
      ],
      piege: 'Une confusion très fréquente consiste à croire que la réaction normale $\\vec{N}$ du sol est la force réciproque du poids $\\vec{P}$, puisqu\'elles ont la même norme et des sens opposés sur le schéma. Attention, $\\vec{P}$ est exercée par la Terre sur l\'objet, tandis que $\\vec{N}$ est exercée par le sol sur l\'objet : ce sont deux forces différentes qui s\'exercent sur le <strong>même</strong> système, pas une paire action-réciproque (celle-ci relierait plutôt l\'objet et la Terre elle-même).'
    },

    quiz: [
      {
        q: 'Un objet posé sur une table est immobile. D\'après le principe d\'inertie, que peut-on dire des forces qu\'il subit ?',
        options: [
          'Elles sont toutes nulles',
          'Leur somme vectorielle est nulle',
          'Elles sont toutes égales entre elles',
          'On ne peut rien dire sans connaître la masse de l\'objet'
        ],
        answer: 1,
        correction: 'Le principe d\'inertie relie le repos (ou le MRU) à une résultante des forces <strong>nulle</strong> ($\\sum \\vec{F} = \\vec{0}$), pas à des forces individuellement nulles : le poids et la réaction du support existent bien, mais elles se compensent exactement.'
      },
      {
        q: 'Un chariot de masse $m = 20$ kg subit une résultante des forces de norme $F = 60$ N. D\'après le PFD, quelle est son accélération ?',
        options: [
          '$a = 1\\,200$ m/s²',
          '$a = 3$ m/s²',
          '$a = 0{,}33$ m/s²',
          '$a = 80$ m/s²'
        ],
        answer: 1,
        correction: '$\\sum \\vec{F} = m\\vec{a}$, donc $a = \\dfrac{F}{m} = \\dfrac{60}{20} = 3$ m/s².'
      },
      {
        q: 'Une fusée éjecte des gaz vers le bas pour être propulsée vers le haut. Quelle loi de Newton explique ce phénomène ?',
        options: [
          'Le principe d\'inertie',
          'Le principe fondamental de la dynamique',
          'Le principe des actions réciproques',
          'Aucune de ces lois, c\'est un phénomène chimique uniquement'
        ],
        answer: 2,
        correction: 'La fusée exerce une force sur les gaz éjectés (vers le bas) ; d\'après le principe des actions réciproques, les gaz exercent en retour une force de même norme sur la fusée, mais de sens opposé (vers le haut) : c\'est cette force qui la propulse.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['pfd', 'equilibre']);

        if (typeExo === 'pfd') {
          var m = rand(5, 80);
          var F = rand(20, 400);
          var f = rand(5, Math.floor(F * 0.7));
          var a = parseFloat(((F - f) / m).toFixed(2));
          var systeme = pick([
            'une remorque tractée par un quad',
            'un chariot de manutention poussé à la main',
            'une luge tirée sur la neige',
            'un diable de déménageur chargé de cartons',
            'un traîneau utilitaire sur une piste verglacée'
          ]);
          return {
            statement: 'Sur ' + systeme + ' de masse $m = ' + m + '$ kg, une force de traction horizontale $F = ' + F + '$ N s\'exerce, tandis que le frottement s\'oppose au mouvement avec une force $f = ' + f + '$ N.<br/><br/>D\'après le PFD, calcule l\'accélération du système (en m/s², arrondie au centième).',
            answer: a,
            tolerance: Math.max(0.05, Math.abs(a) * 0.05),
            unit: 'm/s²',
            hint: 'Sur l\'axe horizontal, le PFD donne $F - f = m \\times a$, donc $a = \\dfrac{F-f}{m}$.',
            solution: [
              'PFD projeté sur l\'axe horizontal : $F - f = m \\times a$.',
              'On isole $a$ : $a = \\dfrac{F-f}{m} = \\dfrac{' + F + ' - ' + f + '}{' + m + '} = \\dfrac{' + (F - f) + '}{' + m + '}$.',
              'Résultat : $a \\approx ' + fr(a, 2) + '$ m/s².'
            ]
          };
        } else {
          var mass = rand(10, 200);
          var g = 9.81;
          var P = parseFloat((mass * g).toFixed(1));
          var objet = pick([
            'une caisse de matériel posée sur un quai',
            'un moteur suspendu à un palan',
            'une armoire électrique installée sur un support',
            'un bloc en équilibre sur un support rigide'
          ]);
          return {
            statement: 'Une ' + objet + ', de masse $m = ' + mass + '$ kg, est immobile, posée sur un support horizontal (on prend $g = 9{,}81$ m/s²).<br/><br/>D\'après le principe d\'inertie, calcule la norme de la force $N$ exercée par le support sur l\'objet (en N, arrondie au dixième).',
            answer: P,
            tolerance: Math.max(1, P * 0.02),
            unit: 'N',
            hint: 'Le système est immobile : la résultante des forces est nulle, donc $N = P = mg$.',
            solution: [
              'Le système est à l\'équilibre : $\\sum \\vec{F} = \\vec{0}$, donc $N = P$.',
              'Poids : $P = m \\times g = ' + mass + ' \\times 9{,}81$.',
              'Résultat : $N = P \\approx ' + fr(P, 1) + '$ N.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un skieur de masse $m = 70$ kg descend une piste. On étudie d\'abord son démarrage sur une portion horizontale, où il est poussé par une force $F = 210$ N, avec un frottement des skis sur la neige $f = 42$ N (on prend $g = 9{,}81$ m/s²).',
      tasks: [
        'Faire le bilan des forces verticales et déterminer la norme de la réaction normale $N$ exercée par la neige.',
        'Appliquer le PFD sur l\'axe horizontal pour calculer l\'accélération du skieur.',
        'Sachant qu\'il part de $v_0 = 0$, calculer sa vitesse après $t = 4$ s de poussée (en m/s, puis en km/h).'
      ],
      solutions: [
        'Sur l\'axe vertical, le skieur ne s\'enfonce pas dans la neige et ne décolle pas : $N = P = m \\times g = 70 \\times 9{,}81 \\approx 686{,}7$ N.',
        'Sur l\'axe horizontal, $\\sum F = F - f = m \\times a$, donc $a = \\dfrac{F-f}{m} = \\dfrac{210-42}{70} = \\dfrac{168}{70} = 2{,}4$ m/s².',
        '$v(t) = v_0 + a \\times t = 0 + 2{,}4 \\times 4 = 9{,}6$ m/s. En km/h : $v = 9{,}6 \\times 3{,}6 = 34{,}56$ km/h.'
      ],
      finalAnswer: '$N \\approx 686{,}7$ N, $a = 2{,}4$ m/s², $v \\approx 9{,}6$ m/s soit environ $34{,}6$ km/h après $4$ s. La réaction normale $N$ n\'intervient à aucun moment dans le calcul de l\'accélération horizontale : seules les forces horizontales ($F$ et $f$) sont responsables du mouvement étudié ici.'
    },

    evaluation: {
      title: 'Évaluation — Lois de Newton',
      duration: '30 min',
      questions: [
        {
          statement: 'Le principe fondamental de la dynamique s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$\\sum \\vec{F} = m \\vec{v}$',
            '$\\sum \\vec{F} = m \\vec{a}$',
            '$\\sum \\vec{F} = \\vec{a}/m$',
            '$\\sum \\vec{F} = m + a$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PFD relie la résultante des forces à l\'accélération : $\\sum \\vec{F} = m\\vec{a}$.'
        },
        {
          statement: 'Un objet de masse $m = 15$ kg est soumis à une résultante des forces $F = 45$ N selon son axe de déplacement. Calculer son accélération (en m/s²).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.1,
          unit: 'm/s²',
          points: 2,
          correction: '$a = \\dfrac{F}{m} = \\dfrac{45}{15} = 3$ m/s².'
        },
        {
          statement: 'D\'après le principe des actions réciproques, si un nageur pousse l\'eau vers l\'arrière avec ses bras, l\'eau exerce en retour sur le nageur une force :',
          type: 'multiple-choice',
          options: [
            'De même norme, vers l\'avant',
            'De norme plus faible, vers l\'avant',
            'Nulle, l\'eau ne peut pas exercer de force en retour',
            'De même norme, dans le même sens (vers l\'arrière)'
          ],
          answer: 0,
          points: 2,
          correction: 'D\'après le principe des actions réciproques, la force exercée par l\'eau sur le nageur a la même norme que celle exercée par le nageur sur l\'eau, mais un sens opposé : elle le propulse donc vers l\'avant.'
        },
        {
          statement: 'Un solide de masse $m = 8$ kg, posé sur un plan horizontal, est immobile (on prend $g = 9{,}81$ m/s²). Calculer la norme de la réaction normale $N$ du support (en N, arrondie au dixième).',
          type: 'numeric',
          answer: 78.5,
          tolerance: 1,
          unit: 'N',
          points: 2,
          correction: 'À l\'équilibre, $N = P = m \\times g = 8 \\times 9{,}81 \\approx 78{,}5$ N.'
        },
        {
          statement: 'Une force $\\vec{F}_{A/B}$ exercée par un système A sur un système B et la force réciproque $\\vec{F}_{B/A}$ ont :',
          type: 'multiple-choice',
          options: [
            'La même norme et le même sens',
            'Des normes différentes et des sens opposés',
            'La même norme et des sens opposés',
            'Toujours une norme nulle pour l\'une des deux'
          ],
          answer: 2,
          points: 1,
          correction: 'Le principe des actions réciproques impose $\\vec{F}_{A/B} = -\\vec{F}_{B/A}$ : même norme, même direction, mais sens opposés.'
        }
      ]
    }
  });
