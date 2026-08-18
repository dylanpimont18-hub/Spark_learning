/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-lumiere.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-lumiere',
    level: 1, subject: 'physique',
    icon: '💡',
    title: 'La lumière : propagation et couleur',
    subtitle: 'Propagation rectiligne, vitesse de la lumière, ombres et décomposition de la lumière blanche',
    keywords: ['Lumière', 'Propagation rectiligne', 'Vitesse de la lumière', 'Ombre', 'Couleur'],
    physics: 'La propagation rectiligne de la lumière explique la formation des éclipses, le fonctionnement d\'un appareil photo ou d\'une fibre optique. La vitesse finie de la lumière explique pourquoi on observe les étoiles telles qu\'elles étaient dans le passé, parfois même après leur disparition.',

    cours: {
      intro: 'Une <strong>source de lumière</strong> peut être <strong>primaire</strong> (elle produit elle-même sa lumière, comme le Soleil ou une lampe) ou <strong>secondaire</strong> (elle ne fait que diffuser la lumière qu\'elle reçoit, comme la Lune ou les objets qui nous entourent).<br/><br/>Dans un milieu transparent et homogène, comme l\'air ou le vide, la lumière se propage en <strong>ligne droite</strong> : c\'est la <strong>propagation rectiligne</strong> de la lumière, que l\'on représente par un <strong>rayon lumineux</strong>. Cette propriété explique la formation des <strong>ombres</strong> : un objet opaque, placé sur le trajet de la lumière, bloque les rayons et crée une zone non éclairée.<br/><br/>La lumière se déplace extrêmement vite, mais pas de façon instantanée : sa <strong>vitesse</strong>, notée $c$, vaut environ $300\\,000$ km/s dans le vide ou dans l\'air. Enfin, la lumière blanche (celle du Soleil) n\'est pas une couleur unique : c\'est un mélange de <strong>lumières colorées</strong>, que l\'on peut séparer à l\'aide d\'un prisme.',
      definitions: [
        { term: 'Source primaire / secondaire', def: 'Une source <strong>primaire</strong> produit sa propre lumière (Soleil, lampe, flamme). Une source <strong>secondaire</strong> ne fait que diffuser la lumière reçue d\'une autre source (la Lune, une page de livre, un mur éclairé).' },
        { term: 'Propagation rectiligne', def: 'Dans un milieu transparent et homogène, la lumière se propage en <strong>ligne droite</strong>. On représente son trajet par un <strong>rayon lumineux</strong>, symbolisé par une droite fléchée.' },
        { term: 'Vitesse de la lumière ($c$)', def: 'La lumière se propage à une vitesse très grande mais <strong>finie</strong> : $c \\approx 300\\,000$ km/s dans le vide (et approximativement dans l\'air). La lumière du Soleil met ainsi environ $8$ minutes à atteindre la Terre.' },
        { term: 'Ombre propre / ombre portée', def: 'L\'<strong>ombre propre</strong> est la partie non éclairée d\'un objet opaque lui-même. L\'<strong>ombre portée</strong> est la zone non éclairée projetée par cet objet sur un écran ou le sol, à cause de la propagation rectiligne de la lumière.' },
        { term: 'Décomposition de la lumière blanche', def: 'La lumière blanche (Soleil, lampe) est en réalité un <strong>mélange de lumières colorées</strong>. Un prisme peut la décomposer (dispersion) et faire apparaître les différentes couleurs qui la composent, comme dans un arc-en-ciel.' }
      ],
      method: {
        title: 'Construire une ombre portée par propagation rectiligne en 3 étapes',
        steps: [
          '<strong>Tracer les rayons lumineux</strong> en lignes droites depuis la source, en les faisant passer exactement par les deux bords de l\'objet opaque.',
          '<strong>Prolonger ces rayons</strong> en ligne droite jusqu\'à l\'écran (ou le sol) situé derrière l\'objet.',
          '<strong>Identifier la zone d\'ombre</strong> : c\'est la portion de l\'écran comprise entre les deux points où les rayons prolongés l\'atteignent. Le reste de l\'écran est éclairé.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Propagation de la lumière',
        title: 'Propagation rectiligne de la lumière et formation d\'une ombre portée',
        description: 'Dans un milieu transparent et homogène, la lumière se propage en ligne droite : les rayons issus de la source, bloqués par l\'objet opaque, délimitent une zone d\'ombre sur l\'écran.',
        svg: `
          <svg viewBox="0 0 600 340" role="img" aria-labelledby="lumiere-title lumiere-desc">
            <title id="lumiere-title">Propagation rectiligne de la lumiere et formation d'une ombre portee</title>
            <desc id="lumiere-desc">Une source de lumiere ponctuelle emet deux rayons lumineux en ligne droite qui rasent le bord superieur et le bord inferieur d'un objet opaque rectangulaire, puis se prolongent jusqu'a un ecran vertical. Sur l'ecran, la zone comprise entre les deux points d'arrivee des rayons forme la zone d'ombre, tandis que les zones situees au-dessus et en dessous restent eclairees.</desc>

            <!-- source lumineuse -->
            <line class="guide-line" x1="60" y1="160" x2="60" y2="144"></line>
            <line class="guide-line" x1="60" y1="160" x2="44" y2="160"></line>
            <line class="guide-line" x1="60" y1="160" x2="49" y2="149"></line>
            <line class="guide-line" x1="60" y1="160" x2="49" y2="171"></line>
            <circle class="plot-point" cx="60" cy="160" r="6"></circle>
            <text class="tick-label" x="45" y="180" text-anchor="middle">S</text>

            <!-- objet opaque -->
            <rect class="plot-point" x="215" y="120" width="10" height="80"></rect>
            <text class="label-soft" x="220" y="100" text-anchor="middle">objet opaque</text>

            <!-- ecran -->
            <line class="frame-line" x1="480" y1="20" x2="480" y2="320"></line>
            <text class="tick-label" x="480" y="14" text-anchor="middle">écran</text>

            <!-- rayons lumineux -->
            <line class="curve-main" x1="60" y1="160" x2="480" y2="55"></line>
            <line class="curve-main" x1="60" y1="160" x2="480" y2="265"></line>

            <!-- zone d'ombre : cotation -->
            <line class="guide-line" x1="495" y1="55" x2="500" y2="55"></line>
            <line class="guide-line" x1="495" y1="265" x2="500" y2="265"></line>
            <line class="guide-line" x1="500" y1="55" x2="500" y2="265"></line>
            <text class="tick-label" x="510" y="164" text-anchor="start">zone d'ombre</text>

            <text class="label-soft" x="500" y="35" text-anchor="start">éclairé</text>
            <text class="label-soft" x="500" y="305" text-anchor="start">éclairé</text>
          </svg>
        `,
        notes: [
          'La lumière se propage en <strong>ligne droite</strong> (propagation rectiligne) tant qu\'elle traverse un milieu transparent et homogène comme l\'air. On représente ce trajet par un <strong>rayon lumineux</strong>.',
          'L\'objet opaque bloque les rayons lumineux qui le rencontrent : la zone de l\'écran qui ne reçoit aucun rayon direct forme la <strong>zone d\'ombre</strong> (ombre portée).',
          'Les limites de la zone d\'ombre se construisent en prolongeant les deux rayons qui rasent tout juste les bords de l\'objet opaque jusqu\'à l\'écran.'
        ],
        reading: 'Suis les deux rayons lumineux depuis la source $S$ : ils rasent les deux bords de l\'objet opaque, puis se prolongent jusqu\'à l\'écran, où ils délimitent exactement la zone d\'ombre.',
        caption: 'Construction d\'une ombre portée par propagation rectiligne : les rayons issus de la source $S$, bloqués par l\'objet opaque, délimitent une zone d\'ombre sur l\'écran, entourée de deux zones éclairées.'
      },
      example: {
        statement: 'La distance moyenne entre la Terre et la Lune est $d \\approx 384\\,000$ km. On prend $c \\approx 300\\,000$ km/s pour la vitesse de la lumière.<br/><br/>Calcule la durée $t$ mise par la lumière pour parcourir cette distance (arrondie au centième de seconde).',
        steps: [
          'La lumière parcourt une distance à vitesse constante, comme tout mouvement : $t = \\dfrac{d}{c}$.',
          'Application numérique : $t = \\dfrac{384\\,000}{300\\,000}$.'
        ],
        answer: '$t \\approx 1{,}28$ s. Même pour la distance, pourtant très grande, qui nous sépare de la Lune, la lumière met plus d\'une seconde à nous parvenir : sa vitesse est immense, mais elle n\'est pas infinie.'
      },
      formulas: [
        'Vitesse de la lumière (valeur approchée) : $c \\approx 300\\,000$ km/s',
        'Distance parcourue par la lumière : $d = c \\times t$',
        'Durée de propagation : $t = \\dfrac{d}{c}$'
      ],
      recap: [
        'Dans un milieu transparent et homogène, la lumière se propage en <strong>ligne droite</strong> (propagation rectiligne).',
        'La vitesse de la lumière est très grande mais <strong>finie</strong> : $c \\approx 300\\,000$ km/s.',
        'Une <strong>ombre portée</strong> se construit en prolongeant jusqu\'à l\'écran les rayons qui rasent les bords d\'un objet opaque.',
        'La lumière blanche est un <strong>mélange de couleurs</strong>, que l\'on peut séparer (dispersion) à l\'aide d\'un prisme.'
      ],
      piege: 'Une erreur fréquente est de croire que la lumière se propage de façon instantanée, sans aucun délai, y compris sur de très grandes distances. Attention, la vitesse de la lumière est extrêmement grande mais reste finie ($c \\approx 300\\,000$ km/s) : la lumière du Soleil, par exemple, met environ $8$ minutes pour atteindre la Terre.'
    },

    quiz: [
      {
        q: 'La propagation rectiligne de la lumière signifie que :',
        options: [
          'La lumière ralentit progressivement en s\'éloignant de sa source',
          'Dans un milieu transparent et homogène, la lumière se propage en ligne droite',
          'La lumière change toujours de couleur en se propageant',
          'La lumière ne peut se propager que dans le vide'
        ],
        answer: 1,
        correction: 'Dans un milieu transparent et homogène (comme l\'air), la lumière se propage en ligne droite : c\'est cette propriété qui permet de représenter son trajet par un rayon lumineux.'
      },
      {
        q: 'Une ombre portée se forme lorsque :',
        options: [
          'Une source de lumière secondaire diffuse de la lumière',
          'Un objet opaque bloque des rayons lumineux, empêchant certaines zones d\'un écran d\'être éclairées',
          'La lumière change de vitesse en traversant l\'air',
          'Deux sources de lumière primaire se superposent'
        ],
        answer: 1,
        correction: 'Un objet opaque placé sur le trajet de la lumière bloque certains rayons : la zone de l\'écran qui ne reçoit alors aucun rayon direct forme la zone d\'ombre (ombre portée).'
      },
      {
        q: 'Lorsqu\'un prisme décompose la lumière blanche, on observe :',
        options: [
          'Une lumière blanche qui reste inchangée',
          'Un spectre de plusieurs couleurs, comme dans un arc-en-ciel',
          'Une disparition totale de la lumière',
          'Une seule couleur, toujours le rouge'
        ],
        answer: 1,
        correction: 'La lumière blanche est un mélange de lumières colorées. Le prisme les sépare (dispersion) et fait apparaître un spectre de couleurs, comme celui d\'un arc-en-ciel.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['temps', 'distance']);
        var contextes = [
          'la lumière du Soleil voyageant jusqu\'à la Terre',
          'un signal lumineux envoyé vers un satellite',
          'la lumière d\'une étoile proche captée par un télescope',
          'un faisceau laser utilisé pour mesurer une distance',
          'la lumière de la Lune réfléchie vers la Terre'
        ];
        var contexte = pick(contextes);

        if (typeExo === 'temps') {
          var d = rand(30000, 900000);
          var t = parseFloat((d / 300000).toFixed(2));
          return {
            statement: 'Pour ' + contexte + ', une distance $d = ' + d + '$ km sépare la source de l\'observateur. On prend $c \\approx 300\\,000$ km/s pour la vitesse de la lumière.<br/><br/>Calcule la durée $t$ mise par la lumière pour parcourir cette distance (en s, arrondie au centième).',
            answer: t,
            tolerance: Math.max(0.02, parseFloat((t * 0.03).toFixed(2))),
            unit: 's',
            hint: 'Utilise $t = \\dfrac{d}{c}$.',
            solution: [
              'Formule : $t = \\dfrac{d}{c} = \\dfrac{' + d + '}{300\\,000}$.',
              'Résultat : $t \\approx ' + fr(t, 2) + '$ s.'
            ]
          };
        } else {
          var t2 = randFloat(0.1, 5, 2);
          var d2 = Math.round(300000 * t2);
          return {
            statement: 'Pour ' + contexte + ', la lumière met une durée $t = ' + fr(t2, 2) + '$ s pour parcourir la distance qui sépare la source de l\'observateur. On prend $c \\approx 300\\,000$ km/s.<br/><br/>Calcule la distance $d$ parcourue par la lumière (en km).',
            answer: d2,
            tolerance: Math.max(500, Math.round(d2 * 0.03)),
            unit: 'km',
            hint: 'Utilise $d = c \\times t$.',
            solution: [
              'Formule : $d = c \\times t = 300\\,000 \\times ' + fr(t2, 2) + '$.',
              'Résultat : $d \\approx ' + d2 + '$ km.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'La distance moyenne entre le Soleil et la Terre est $d \\approx 150\\,000\\,000$ km. On prend $c \\approx 300\\,000$ km/s pour la vitesse de la lumière.',
      tasks: [
        'Calculer la durée $t$ mise par la lumière du Soleil pour atteindre la Terre (en s).',
        'Convertir cette durée en minutes (arrondie à l\'unité).',
        'Expliquer pourquoi, lorsqu\'on observe le Soleil, on ne le voit jamais « en direct », mais toujours tel qu\'il était quelques minutes plus tôt.'
      ],
      solutions: [
        '$t = \\dfrac{d}{c} = \\dfrac{150\\,000\\,000}{300\\,000} = 500$ s.',
        '$500$ s $= \\dfrac{500}{60} \\approx 8$ min (plus précisément $8$ min $20$ s).',
        'La lumière met un temps non nul, même s\'il est très court à notre échelle, pour parcourir la distance Soleil-Terre. L\'image du Soleil perçue à un instant donné correspond donc à la lumière qu\'il a émise environ $8$ minutes plus tôt : on l\'observe toujours avec un léger décalage dans le temps, jamais « en direct ».'
      ],
      finalAnswer: 'La lumière met environ $8$ minutes pour parcourir la distance Soleil-Terre. Ce délai, bien réel, montre que même la vitesse de la lumière, bien qu\'extrêmement grande, reste <strong>finie</strong> : rien ne se propage de façon parfaitement instantanée.'
    },

    evaluation: {
      title: 'Évaluation — La lumière : propagation et couleur',
      duration: '25 min',
      questions: [
        {
          statement: 'Une distance $d = 600\\,000$ km sépare une source lumineuse d\'un observateur. Avec $c \\approx 300\\,000$ km/s, calculer la durée $t$ mise par la lumière pour parcourir cette distance (en s).',
          type: 'numeric',
          answer: 2,
          tolerance: 0.1,
          unit: 's',
          points: 2,
          correction: '$t = \\dfrac{d}{c} = \\dfrac{600\\,000}{300\\,000} = 2$ s.'
        },
        {
          statement: 'La lumière se propage en ligne droite (propagation rectiligne) :',
          type: 'multiple-choice',
          options: [
            'Uniquement dans le vide',
            'Dans un milieu transparent et homogène',
            'Uniquement la nuit',
            'Seulement si elle est colorée'
          ],
          answer: 1,
          points: 2,
          correction: 'La propagation rectiligne se produit dans tout milieu transparent et homogène, comme l\'air ou le vide, pas uniquement dans le vide.'
        },
        {
          statement: 'La lumière met une durée $t = 1{,}5$ s pour parcourir une certaine distance, avec $c \\approx 300\\,000$ km/s. Calculer cette distance $d$ (en km).',
          type: 'numeric',
          answer: 450000,
          tolerance: 5000,
          unit: 'km',
          points: 2,
          correction: '$d = c \\times t = 300\\,000 \\times 1{,}5 = 450\\,000$ km.'
        },
        {
          statement: 'Lorsqu\'un prisme décompose la lumière blanche, il fait apparaître :',
          type: 'multiple-choice',
          options: [
            'Un spectre de plusieurs couleurs',
            'Une lumière plus intense mais toujours blanche',
            'Uniquement de la lumière rouge',
            'Aucun changement visible'
          ],
          answer: 0,
          points: 2,
          correction: 'La lumière blanche étant un mélange de lumières colorées, le prisme les sépare et fait apparaître un spectre de couleurs (dispersion).'
        },
        {
          statement: 'La distance moyenne Terre-Lune est $d = 384\\,000$ km. Avec $c \\approx 300\\,000$ km/s, calculer la durée $t$ mise par la lumière pour parcourir cette distance (en s, arrondie au centième).',
          type: 'numeric',
          answer: 1.28,
          tolerance: 0.05,
          unit: 's',
          points: 1,
          correction: '$t = \\dfrac{d}{c} = \\dfrac{384\\,000}{300\\,000} \\approx 1{,}28$ s.'
        }
      ]
    }
  });
