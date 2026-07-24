/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-mecanique-point.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-mecanique-point',
    level: 3, subject: 'physique',
    icon: '🚀',
    title: 'Mécanique du point (cinématique, dynamique)',
    subtitle: 'Vecteurs position, vitesse, accélération, mouvement rectiligne uniformément varié, principe fondamental de la dynamique',
    keywords: ['Cinématique', 'Dynamique', 'PFD', 'Vitesse', 'Accélération', 'Newton'],
    physics: 'La mécanique du point est le socle de nombreux calculs techniques : temps de freinage d\'un véhicule, dimensionnement d\'un vérin, trajectoire d\'un objet lancé, accélération d\'un ascenseur ou d\'un convoyeur industriel.',

    cours: {
      intro: 'En mécanique du point, on modélise un système matériel (voiture, colis, projectile…) par un <strong>point matériel</strong> : toute sa masse est supposée concentrée en un seul point, généralement son centre de gravité. Ce modèle simplifie l\'étude du mouvement tant que la rotation propre de l\'objet n\'est pas étudiée.<br/><br/>Décrire le mouvement d\'un point matériel nécessite un <strong>référentiel</strong> (un solide de référence associé à une horloge). Sans référentiel précisé, la notion de mouvement n\'a pas de sens : un passager assis dans un train est immobile <strong>par rapport au train</strong>, mais en mouvement <strong>par rapport au sol</strong>.<br/><br/>La <strong>cinématique</strong> décrit le mouvement (position, vitesse, accélération) sans se soucier de ses causes. La <strong>dynamique</strong> relie ce mouvement aux forces qui le provoquent, via le <strong>principe fondamental de la dynamique</strong> (PFD, ou deuxième loi de Newton) : $\\sum \\vec{F} = m \\vec{a}$.',
      definitions: [
        { term: 'Point matériel', def: 'Modèle simplifié d\'un système dont toute la masse $m$ est concentrée en un point, généralement le centre de gravité. Valide tant que les dimensions du système sont négligeables devant les distances du mouvement étudié.' },
        { term: 'Vecteur position ($\\vec{OM}$)', def: 'Vecteur reliant l\'origine $O$ du référentiel au point matériel $M$ à l\'instant $t$. Sa trajectoire est l\'ensemble des positions successives de $M$.' },
        { term: 'Vecteur vitesse ($\\vec{v}$)', def: 'Dérivée du vecteur position par rapport au temps : $\\vec{v}(t) = \\dfrac{d\\vec{OM}}{dt}$. Toujours tangent à la trajectoire, en m/s.' },
        { term: 'Vecteur accélération ($\\vec{a}$)', def: 'Dérivée du vecteur vitesse par rapport au temps : $\\vec{a}(t) = \\dfrac{d\\vec{v}}{dt}$. Traduit toute variation de la vitesse, <strong>en norme ou en direction</strong>, en m/s².' },
        { term: 'Référentiel', def: 'Solide de référence (associé à une horloge) par rapport auquel on décrit le mouvement. Le référentiel terrestre est le plus courant en BTS.' }
      ],
      method: {
        title: 'Résoudre un problème de mécanique du point en 3 étapes',
        steps: [
          '<strong>Modéliser</strong> : choisir le référentiel, définir le système (point matériel de masse $m$) et faire le bilan des forces extérieures qui s\'exercent sur lui (poids, réaction, frottements, force de traction…).<br/>Exemple : pour un camion qui freine, les forces sont le poids, la réaction de la route et la force de freinage.',
          '<strong>Appliquer le PFD</strong> : écrire $\\sum \\vec{F} = m \\vec{a}$, puis projeter sur un axe orienté dans le sens du mouvement pour obtenir une relation scalaire donnant $a$.<br/>Exemple : si seule une force de freinage $F$ s\'oppose au mouvement, $-F = m \\times a$, donc $a = -\\dfrac{F}{m}$ (accélération négative = décélération).',
          '<strong>Intégrer</strong> pour remonter à la vitesse puis à la position, en utilisant les conditions initiales ($v_0$, $x_0$ à $t = 0$) : $v(t) = v_0 + a \\times t$, puis $x(t) = x_0 + v_0 \\times t + \\dfrac{1}{2} a \\times t^2$.<br/>Astuce : pour relier directement vitesse et distance sans passer par le temps, utiliser $v^2 = v_0^2 + 2 a \\times (x - x_0)$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mouvement d\'un projectile (mécanique du point)',
        title: 'Trajectoire parabolique sous l\'effet de la seule pesanteur',
        description: 'Décomposition de la vitesse initiale $\\vec{v_0}$ en composante horizontale (constante) et verticale (freinée par $g$), le long de la trajectoire.',
        svg: `
          <svg viewBox="0 0 560 380" role="img" aria-labelledby="traj-meca-title traj-meca-desc">
            <title id="traj-meca-title">Trajectoire parabolique d'un point matériel lance obliquement</title>
            <desc id="traj-meca-desc">Schema d'un point materiel lance depuis le sol avec une vitesse initiale inclinee, decrivant une trajectoire parabolique sous l'effet de la seule pesanteur. La composante horizontale de la vitesse reste constante tout au long du mouvement, representee par une fleche de meme longueur au lancement et au sommet, tandis que la composante verticale diminue progressivement jusqu'a s'annuler au sommet de la trajectoire.</desc>

            <defs>
              <marker id="arrow-physbts-meca" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="40" y1="290" x2="540" y2="290"></line>
            <line class="grid-line" x1="55" y1="290" x2="45" y2="302"></line>
            <line class="grid-line" x1="80" y1="290" x2="70" y2="302"></line>
            <line class="grid-line" x1="105" y1="290" x2="95" y2="302"></line>
            <line class="grid-line" x1="130" y1="290" x2="120" y2="302"></line>
            <line class="grid-line" x1="155" y1="290" x2="145" y2="302"></line>
            <line class="grid-line" x1="180" y1="290" x2="170" y2="302"></line>

            <!-- trajectoire parabolique -->
            <path class="curve-main" d="M80,290 Q300,-110 520,290" fill="none"></path>

            <!-- point de lancement -->
            <circle class="plot-point" cx="80" cy="290" r="5"></circle>
            <text class="label-soft" x="80" y="312" text-anchor="middle">Point de lancement</text>

            <!-- vecteur v0 -->
            <line class="curve-main" x1="80" y1="290" x2="185" y2="175" marker-end="url(#arrow-physbts-meca)"></line>
            <text class="annotation-label" x="192" y="170">v₀</text>

            <!-- composantes vx0 / vy0 (projections en pointilles) -->
            <line class="guide-line" x1="80" y1="290" x2="185" y2="290"></line>
            <line class="guide-line" x1="185" y1="290" x2="185" y2="175"></line>
            <text class="tick-label" x="130" y="283" text-anchor="middle">vₓ₀</text>
            <text class="tick-label" x="200" y="235" text-anchor="start">vy₀</text>

            <!-- sommet -->
            <circle class="plot-point-alt" cx="300" cy="90" r="5"></circle>
            <line class="curve-main" x1="300" y1="90" x2="355" y2="90" marker-end="url(#arrow-physbts-meca)"></line>
            <text class="annotation-label" x="330" y="78" text-anchor="middle">vₓ₀ (vy = 0)</text>
            <text class="label-soft" x="300" y="66" text-anchor="middle">Sommet de la trajectoire</text>

            <!-- point de chute -->
            <circle class="plot-point" cx="520" cy="290" r="5"></circle>
            <text class="label-soft" x="520" y="312" text-anchor="middle">Point de chute</text>

            <!-- cotation hauteur max -->
            <line class="frame-line" x1="55" y1="290" x2="41" y2="290"></line>
            <line class="frame-line" x1="55" y1="90" x2="41" y2="90"></line>
            <line class="guide-line" x1="48" y1="290" x2="48" y2="90"></line>
            <text class="tick-label" x="30" y="190" text-anchor="middle" transform="rotate(-90 30 190)">h_max</text>

            <!-- cotation portee -->
            <line class="frame-line" x1="80" y1="318" x2="80" y2="330"></line>
            <line class="frame-line" x1="520" y1="318" x2="520" y2="330"></line>
            <line class="guide-line" x1="80" y1="324" x2="520" y2="324"></line>
            <text class="tick-label" x="300" y="346" text-anchor="middle">Portée</text>
          </svg>
        `,
        notes: [
          'La vitesse initiale $\\vec{v_0}$ se décompose en une composante horizontale $v_{x0}$ (constante, car aucune force horizontale n\'agit) et une composante verticale $v_{y0}$ (freinée par la pesanteur).',
          'Au sommet de la trajectoire, la composante verticale s\'annule ($v_y = 0$) : il ne reste que la composante horizontale, identique à celle du lancement.',
          'La trajectoire est une <strong>parabole</strong> car $x(t)$ varie linéairement avec $t$ (vitesse horizontale constante) alors que $y(t)$ varie de façon quadratique (accélération verticale constante $-g$).'
        ],
        reading: 'Repère d\'abord le point de lancement en bas à gauche et le vecteur $v_0$ incliné, puis suis la courbe jusqu\'au sommet (vitesse verticale nulle), puis jusqu\'au point de chute.',
        caption: 'Trajectoire parabolique d\'un point matériel lancé avec une vitesse initiale inclinée : seule la pesanteur agit après le lancement (mouvement de projectile, frottements de l\'air négligés).'
      },
      example: {
        statement: 'Un colis est lancé horizontalement avec une vitesse initiale $v_0 = 15$ m/s depuis un tapis convoyeur situé à une hauteur $h = 20$ m au-dessus du sol. On néglige les frottements de l\'air et on prend $g = 9{,}81$ m/s².<br/><br/>Calculer la durée de chute du colis, puis la distance horizontale parcourue avant qu\'il touche le sol (la portée).',
        steps: [
          'Système : le colis, assimilé à un point matériel. Référentiel terrestre. Seule la pesanteur agit (chute libre après le lancement).',
          'Sur l\'axe vertical (orienté vers le bas, origine au point de lancement) : PFD → $m \\times g = m \\times a_y$, donc $a_y = g$ (l\'accélération verticale ne dépend pas de la masse).',
          'Position verticale : $y(t) = \\dfrac{1}{2} g t^2$ (le colis part avec $v_{y0} = 0$, car le lancement est horizontal).',
          'Le colis touche le sol quand $y(t) = h$ : $\\dfrac{1}{2} g t^2 = h$ → $t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2 \\times 20}{9{,}81}} = \\sqrt{4{,}08} \\approx 2{,}02$ s.',
          'Sur l\'axe horizontal, aucune force n\'agit : la vitesse $v_0$ reste constante. La portée est $x = v_0 \\times t = 15 \\times 2{,}02 \\approx 30{,}3$ m.'
        ],
        answer: 'Durée de chute $t \\approx 2{,}02$ s, portée $x \\approx 30{,}3$ m. Le mouvement horizontal (vitesse constante) et le mouvement vertical (chute libre) sont <strong>indépendants</strong> : c\'est ce qui permet de les étudier séparément.'
      },
      formulas: [
        '$\\vec{v}(t) = \\dfrac{d\\vec{OM}}{dt}$ et $\\vec{a}(t) = \\dfrac{d\\vec{v}}{dt}$ (définitions cinématiques)',
        'MRUA : $v(t) = v_0 + a \\times t$ et $x(t) = x_0 + v_0 \\times t + \\dfrac{1}{2} a \\times t^2$',
        'Relation sans le temps : $v^2 = v_0^2 + 2 a \\times (x - x_0)$',
        'Principe fondamental de la dynamique (PFD) : $\\sum \\vec{F} = m \\vec{a}$',
        'Chute libre (sans frottement) : $a = g \\approx 9{,}81$ m/s², indépendante de la masse'
      ],
      recap: [
        'Un point matériel est décrit par trois grandeurs vectorielles liées par dérivation : position → vitesse → accélération.',
        'L\'accélération traduit toute variation de la vitesse, en norme <strong>ou</strong> en direction : un mouvement circulaire à vitesse constante en norme a tout de même une accélération.',
        'Le PFD ($\\sum \\vec{F} = m \\vec{a}$) relie les causes (forces) à l\'effet (accélération). Il doit toujours être projeté sur un axe avant tout calcul numérique.',
        'En chute libre, l\'accélération $g$ ne dépend pas de la masse de l\'objet : deux objets de masses différentes tombent avec la même accélération (en l\'absence de frottement).'
      ],
      piege: 'Une <strong>vitesse constante en norme</strong> ne signifie pas une <strong>accélération nulle</strong> : dans un mouvement circulaire uniforme, la direction de $\\vec{v}$ change à chaque instant, donc $\\vec{a} \\neq \\vec{0}$ (l\'accélération est alors centripète, dirigée vers le centre). L\'accélération est nulle uniquement si le vecteur vitesse est <strong>rigoureusement constant</strong> (norme ET direction).'
    },

    quiz: [
      {
        q: 'Un manège de fête foraine tourne à une vitesse de norme constante (mouvement circulaire uniforme). Que peut-on dire de l\'accélération d\'un point situé sur ce manège ?',
        options: [
          'Elle est nulle, car la norme de la vitesse ne change pas',
          'Elle est non nulle, car la direction de la vitesse change en permanence',
          'Elle est nulle, car le mouvement est uniforme par définition',
          'Elle est infinie, car le mouvement est circulaire'
        ],
        answer: 1,
        correction: 'L\'accélération est un vecteur qui traduit <strong>toute</strong> variation de la vitesse, en norme ou en direction. Même si la norme de $\\vec{v}$ ne change pas ici, sa direction change à chaque instant : l\'accélération n\'est donc pas nulle. Elle est dirigée vers le centre du manège (accélération centripète).'
      },
      {
        q: 'Un objet de masse $m = 4$ kg est soumis à une résultante des forces de norme $F = 20$ N. D\'après le principe fondamental de la dynamique, quelle est son accélération ?',
        options: [
          '$a = 80$ m/s² (en multipliant $F$ par $m$)',
          '$a = 5$ m/s²',
          '$a = 0{,}2$ m/s² (en inversant $F$ et $m$)',
          '$a = 24$ m/s² (en additionnant $F$ et $m$)'
        ],
        answer: 1,
        correction: 'Le PFD s\'écrit $\\sum \\vec{F} = m \\vec{a}$, donc $a = \\dfrac{F}{m} = \\dfrac{20}{4} = 5$ m/s². Attention à ne pas confondre : c\'est bien une <strong>division</strong> de la force par la masse, pas une multiplication.'
      },
      {
        q: 'Un train part avec une vitesse initiale $v_0 = 10$ m/s et subit une accélération constante $a = 0{,}5$ m/s² pendant $t = 20$ s. Quelle vitesse atteint-il ?',
        options: [
          '$v = 20$ m/s',
          '$v = 10{,}5$ m/s',
          '$v = 30$ m/s',
          '$v = 200$ m/s'
        ],
        answer: 0,
        correction: 'La loi horaire de la vitesse en MRUA est $v(t) = v_0 + a \\times t = 10 + 0{,}5 \\times 20 = 10 + 10 = 20$ m/s. L\'accélération s\'ajoute à la vitesse initiale, elle ne la remplace pas et ne se limite pas à un seul terme du produit $a \\times t$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['cinematique', 'dynamique']);

        if (typeExo === 'cinematique') {
          var v0 = rand(2, 20);
          var a = randFloat(0.5, 4, 1);
          var t = rand(3, 12);
          var v = parseFloat((v0 + a * t).toFixed(1));
          var contexte = pick([
            'un TGV qui accélère en sortie de gare',
            'une voiture sur une bretelle d\'autoroute',
            'un ascenseur industriel',
            'un vélo à assistance électrique',
            'un chariot de manutention automatisé'
          ]);
          return {
            statement: 'Un mobile assimilé à ' + contexte + ' part avec une vitesse initiale $v_0 = ' + v0 + '$ m/s et subit une accélération constante $a = ' + fr(a, 1) + '$ m/s² pendant une durée $t = ' + t + '$ s.<br/><br/>Calcule la vitesse $v$ atteinte à l\'instant $t$ (en m/s, arrondie au dixième).',
            answer: v,
            tolerance: 0.3,
            unit: 'm/s',
            hint: 'En mouvement rectiligne uniformément varié (MRUA), la vitesse suit la loi $v(t) = v_0 + a \\times t$. C\'est une simple addition après multiplication, aucune intégration compliquée n\'est nécessaire.',
            solution: [
              'Loi horaire de la vitesse en MRUA : $v(t) = v_0 + a \\times t$.',
              'Application numérique : $v = ' + v0 + ' + ' + fr(a, 1) + ' \\times ' + t + '$.',
              'Calcul du terme d\'accélération : $' + fr(a, 1) + ' \\times ' + t + ' = ' + fr(parseFloat((a * t).toFixed(1)), 1) + '$.',
              'Résultat : $v = ' + v0 + ' + ' + fr(parseFloat((a * t).toFixed(1)), 1) + ' = ' + fr(v, 1) + '$ m/s.'
            ]
          };
        } else {
          var m = randFloat(2, 60, 1);
          var F = rand(10, 600);
          var aVal = parseFloat((F / m).toFixed(2));
          var tol = parseFloat(Math.max(0.1, aVal * 0.05).toFixed(2));
          var systeme = pick([
            'un colis sur un tapis roulant',
            'une palette déplacée par un chariot élévateur',
            'un wagonnet de mine',
            'une luge sur une pente instrumentée',
            'un patin de guidage industriel'
          ]);
          return {
            statement: 'Un système assimilé à ' + systeme + ', de masse $m = ' + fr(m, 1) + '$ kg, est soumis à une résultante des forces de norme $F = ' + F + '$ N selon l\'axe de déplacement (les autres forces se compensent).<br/><br/>D\'après le principe fondamental de la dynamique, calcule l\'accélération $a$ du système (en m/s², arrondie au centième).',
            answer: aVal,
            tolerance: tol,
            unit: 'm/s²',
            hint: 'Le PFD s\'écrit $\\sum \\vec{F} = m \\vec{a}$. Projeté sur l\'axe du mouvement, il donne simplement $a = \\dfrac{F}{m}$.',
            solution: [
              'Principe fondamental de la dynamique projeté sur l\'axe du mouvement : $F = m \\times a$.',
              'On isole $a$ : $a = \\dfrac{F}{m} = \\dfrac{' + F + '}{' + fr(m, 1) + '}$.',
              'Résultat : $a = ' + fr(aVal, 2) + '$ m/s².',
              'Vérification : $' + fr(m, 1) + ' \\times ' + fr(aVal, 2) + ' \\approx ' + F + '$ N — on retrouve bien la force appliquée.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un camion de masse $m = 12\\,000$ kg roule à vitesse constante $v_0 = 90$ km/h sur une route plate et rectiligne. Le conducteur freine brutalement : le système de freinage exerce une force constante $F = 15\\,000$ N, opposée au mouvement. On néglige les autres frottements pendant le freinage.',
      tasks: [
        'Convertir la vitesse initiale $v_0 = 90$ km/h en m/s.',
        'Appliquer le principe fondamental de la dynamique sur l\'axe du mouvement pendant le freinage, et en déduire la valeur de la décélération (accélération négative).',
        'En utilisant la relation $v^2 = v_0^2 + 2 a d$ (avec $v = 0$ à l\'arrêt), calculer la distance de freinage $d$.'
      ],
      solutions: [
        'Pour convertir des km/h en m/s, on divise par $3{,}6$ : $v_0 = \\dfrac{90}{3{,}6} = 25$ m/s.',
        'Sur l\'axe horizontal orienté dans le sens du mouvement, seule la force de freinage agit : $-F = m \\times a$ → $a = -\\dfrac{F}{m} = -\\dfrac{15\\,000}{12\\,000} = -1{,}25$ m/s² (le signe négatif traduit un freinage, donc une décélération).',
        '$v^2 = v_0^2 + 2 a d$, avec $v = 0$ (arrêt) : $0 = 25^2 + 2 \\times (-1{,}25) \\times d$ → $0 = 625 - 2{,}5 \\times d$ → $d = \\dfrac{625}{2{,}5} = 250$ m.'
      ],
      finalAnswer: 'Distance de freinage $d = 250$ m (le camion s\'immobilise après environ $t = \\dfrac{v_0}{|a|} = \\dfrac{25}{1{,}25} = 20$ s). Plus la masse ou la vitesse initiale sont élevées, plus la distance de freinage est grande — d\'où l\'importance des distances de sécurité pour les poids lourds.'
    },

    evaluation: {
      title: 'Évaluation — Mécanique du point (cinématique et dynamique)',
      duration: '30 min',
      questions: [
        {
          statement: 'Un chariot automatisé part d\'une position $x_0 = 0$ avec une vitesse initiale $v_0 = 5$ m/s et subit une accélération constante $a = 1{,}5$ m/s² pendant $t = 6$ s. Calculer la position $x(t)$ atteinte (en m).',
          type: 'numeric',
          answer: 57,
          tolerance: 1,
          unit: 'm',
          points: 2,
          correction: '$x(t) = x_0 + v_0 t + \\dfrac{1}{2} a t^2 = 0 + 5 \\times 6 + 0{,}5 \\times 1{,}5 \\times 6^2 = 30 + 27 = 57$ m. Ne pas oublier le facteur $\\dfrac{1}{2}$ devant le terme en accélération : c\'est l\'erreur la plus fréquente.'
        },
        {
          statement: 'Le principe fondamental de la dynamique (deuxième loi de Newton) s\'écrit :',
          type: 'multiple-choice',
          options: [
            '$\\sum \\vec{F} = m \\vec{v}$',
            '$\\sum \\vec{F} = m \\vec{a}$',
            '$\\sum \\vec{F} = \\dfrac{v}{t}$',
            '$\\sum \\vec{F} = m + a$'
          ],
          answer: 1,
          points: 2,
          correction: 'Le PFD relie la résultante des forces à l\'accélération, pas à la vitesse : $\\sum \\vec{F} = m \\vec{a}$. C\'est cette relation qui permet de calculer l\'effet dynamique d\'une force sur un système de masse connue.'
        },
        {
          statement: 'Un robot de manutention de masse $m = 45$ kg est soumis à une résultante des forces de $90$ N selon son axe de déplacement. Calculer son accélération (en m/s²).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: 'm/s²',
          points: 3,
          correction: '$a = \\dfrac{F}{m} = \\dfrac{90}{45} = 2$ m/s². C\'est une application directe du PFD projeté sur l\'axe du mouvement.'
        },
        {
          statement: 'Un objet est lâché sans vitesse initiale depuis une hauteur $h = 45$ m (chute libre, $g = 9{,}81$ m/s²). Calculer la durée de chute (en s, arrondie au dixième).',
          type: 'numeric',
          answer: 3.0,
          tolerance: 0.2,
          unit: 's',
          points: 2,
          correction: 'En chute libre sans vitesse initiale, $h = \\dfrac{1}{2} g t^2$, donc $t = \\sqrt{\\dfrac{2h}{g}} = \\sqrt{\\dfrac{2 \\times 45}{9{,}81}} = \\sqrt{9{,}17} \\approx 3{,}0$ s.'
        },
        {
          statement: 'Lorsqu\'un point matériel décrit un mouvement circulaire à vitesse constante <strong>en norme</strong>, son accélération est :',
          type: 'multiple-choice',
          options: [
            'Nulle, car la norme de la vitesse ne change pas',
            'Non nulle, dirigée vers le centre du cercle',
            'Non nulle, dirigée vers l\'extérieur du cercle',
            'Non nulle, tangente à la trajectoire'
          ],
          answer: 1,
          points: 1,
          correction: 'L\'accélération traduit toute variation du <strong>vecteur</strong> vitesse, pas seulement de sa norme. Ici la direction de $\\vec{v}$ change en permanence : l\'accélération est non nulle et dirigée vers le centre (accélération centripète), même si la norme de la vitesse est constante.'
        }
      ]
    }
  });
