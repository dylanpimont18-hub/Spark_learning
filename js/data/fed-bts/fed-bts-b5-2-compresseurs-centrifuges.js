/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-2-compresseurs-centrifuges.js
   BTS FED — S8-B5-2 Compresseurs centrifuges — principe, vitesse périphérique, domaines d'utilisation
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-2-compresseurs-centrifuges',
    level: 3, subject: 'fed',
    icon: '🌪️',
    title: 'Compresseurs centrifuges',
    subtitle: 'Principe de fonctionnement, vitesse périphérique, domaines d\'utilisation',
    keywords: ['Compresseur centrifuge', 'Turbocompresseur', 'Vitesse périphérique', 'Groupe froid industriel'],
    physics: 'Là où un compresseur volumétrique (module B5-1) enferme et réduit un volume de gaz, un <strong>compresseur centrifuge</strong> ne comprime rien mécaniquement au sens strict : il <strong>accélère</strong> le gaz à très grande vitesse à l\'aide d\'une roue tournante, puis convertit cette vitesse en pression. Un principe radicalement différent, réservé à de très grandes installations.',

    cours: {
      intro: 'Le <strong>compresseur centrifuge</strong> (ou turbocompresseur) fonctionne selon un principe totalement différent des compresseurs volumétriques (piston, scroll, vis — module B5-1). Une <strong>roue à aubes</strong>, tournant à très grande vitesse, communique de l\'énergie cinétique au gaz frigorigène aspiré en son centre et l\'éjecte radialement à grande vitesse. Ce gaz, très rapide, traverse ensuite un <strong>diffuseur</strong> (canal qui s\'élargit progressivement) où sa vitesse est convertie en pression, selon le même principe qu\'un ventilateur centrifuge aéraulique (module B4-2), mais appliqué à un fluide frigorigène et à des vitesses de rotation bien plus élevées.<br/><br/>Cette technologie n\'est pertinente que pour de très <strong>grands débits de gaz</strong> à comprimer avec un <strong>taux de compression modéré</strong> par étage — à l\'inverse d\'un compresseur volumétrique, plus efficace sur de faibles débits avec un fort taux de compression. On la retrouve donc essentiellement dans les <strong>groupes froids industriels de forte puissance</strong> (production de froid pour un réseau urbain, une grande installation de climatisation tertiaire, un procédé industriel), rarement en dessous de plusieurs centaines de kW frigorifiques.<br/><br/>Pour cette raison, le compresseur centrifuge reste une technologie <strong>hors du champ courant</strong> de l\'option GCF (installations de bâtiment classiques) — mais un professionnel du génie climatique doit en connaître le principe et les domaines d\'utilisation, ne serait-ce que pour comprendre pourquoi certains très gros projets tertiaires ou industriels y ont recours plutôt qu\'à une association de compresseurs volumétriques.',
      definitions: [
        { term: 'Roue à aubes (turbine)', def: 'Élément tournant à très grande vitesse qui communique de l\'énergie cinétique au gaz aspiré en son centre, l\'éjectant radialement.' },
        { term: 'Diffuseur', def: 'Canal qui s\'élargit progressivement en sortie de roue, où la vitesse du gaz est convertie en pression (principe inverse d\'une buse qui accélère un fluide).' },
        { term: 'Vitesse périphérique $u$', def: 'Vitesse linéaire du bord extérieur de la roue : $u = \\pi \\times D \\times N$, avec $D$ le diamètre de la roue (m) et $N$ la vitesse de rotation (tr/s) — grandeur clé, car la pression développée par la roue augmente avec le carré de cette vitesse.' },
        { term: 'Domaine d\'utilisation', def: 'Très grands débits de gaz, taux de compression modéré par étage (souvent plusieurs étages en série pour atteindre un taux de compression global élevé) — groupes froids industriels ou tertiaires de forte puissance.' }
      ],
      method: {
        title: 'Calculer la vitesse périphérique d\'une roue de compresseur centrifuge',
        steps: [
          '<strong>Relever le diamètre</strong> $D$ de la roue (donnée constructeur, en m).',
          '<strong>Relever la vitesse de rotation</strong> $N$ (souvent donnée en tr/min sur les catalogues) et la convertir en tr/s ($N_{tr/s} = N_{tr/min}/60$).',
          '<strong>Calculer la vitesse périphérique</strong> $u = \\pi \\times D \\times N_{tr/s}$.',
          '<strong>Situer l\'ordre de grandeur</strong> : les compresseurs centrifuges frigorifiques atteignent typiquement des vitesses périphériques de $150$ à $300$ m/s, très supérieures aux vitesses linéaires rencontrées sur un compresseur volumétrique.'
        ]
      },
      example: {
        statement: 'La roue d\'un compresseur centrifuge a un diamètre $D=0{,}35$ m et tourne à $N=12\\,000$ tr/min.<br/><br/>Calculer sa vitesse périphérique $u$.',
        steps: [
          'Conversion de la vitesse de rotation : $N_{tr/s} = 12\\,000/60 = 200$ tr/s.',
          '$u = \\pi \\times D \\times N_{tr/s} = \\pi \\times 0{,}35 \\times 200 \\approx 219{,}9$ m/s.'
        ],
        answer: '$u \\approx 220$ m/s, soit plus de $790$ km/h en bout de roue : un ordre de grandeur qui illustre pourquoi ces compresseurs exigent une conception mécanique et des équilibrages très rigoureux, sans commune mesure avec un compresseur à piston.'
      },
      formulas: [
        '$u = \\pi \\times D \\times N$ (vitesse périphérique de la roue, $D$ en m, $N$ en tr/s, $u$ en m/s)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Principe du compresseur centrifuge',
        title: 'Le gaz est accéléré radialement, puis ralenti pour gagner en pression',
        description: 'Le gaz frigorigène entre au centre de la roue, à basse vitesse. La roue tournante l\'accélère radialement vers l\'extérieur. En sortie de roue, le gaz traverse un diffuseur qui s\'élargit progressivement, ce qui convertit sa vitesse élevée en pression.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="centrif-graph-title centrif-graph-desc">
            <title id="centrif-graph-title">Principe du compresseur centrifuge</title>
            <desc id="centrif-graph-desc">Vue de dessus schematique. Le gaz entre au centre d'une roue circulaire tournante, est accelere radialement vers l'exterieur, puis traverse un diffuseur en forme d'entonnoir inverse qui s'elargit progressivement, convertissant la vitesse en pression.</desc>

            <!-- roue -->
            <circle class="frame-line" cx="200" cy="130" r="80" fill="none"></circle>
            <circle class="frame-line" cx="200" cy="130" r="18" fill="none"></circle>
            <text class="label-soft" x="200" y="135" text-anchor="middle">Entrée</text>
            <text class="label-soft" x="200" y="60" text-anchor="middle">Roue à aubes</text>

            <!-- fleches radiales -->
            <line class="curve-main" x1="200" y1="130" x2="270" y2="90"></line>
            <line class="curve-main" x1="200" y1="130" x2="270" y2="170"></line>
            <line class="curve-main" x1="200" y1="130" x2="130" y2="70"></line>

            <!-- diffuseur -->
            <path class="frame-line" d="M300,80 L420,50 L420,210 L300,180" fill="none"></path>
            <text class="label-soft" x="360" y="35" text-anchor="middle">Diffuseur</text>
            <text class="annotation-label" x="330" y="230" text-anchor="middle">vitesse → pression</text>

            <text class="label-soft" x="200" y="245" text-anchor="middle">u = π × D × N (vitesse périphérique)</text>
          </svg>
        `,
        notes: [
          'Le gaz entre au <strong>centre</strong> de la roue, à faible vitesse.',
          'La roue tournante l\'<strong>accélère radialement</strong> vers l\'extérieur — c\'est là qu\'intervient la vitesse périphérique $u$.',
          'Le <strong>diffuseur</strong>, en s\'élargissant, ralentit le gaz : cette perte de vitesse se traduit par un gain de pression (principe inverse d\'une buse).'
        ],
        reading: 'Suis le trajet du gaz depuis le centre de la roue (entrée) jusqu\'au diffuseur qui s\'élargit : la vitesse acquise dans la roue devient de la pression dans le diffuseur.',
        caption: 'Principe de fonctionnement d\'un compresseur centrifuge : accélération radiale puis conversion vitesse-pression dans le diffuseur.'
      },
      recap: [
        'Le compresseur centrifuge accélère le gaz par une <strong>roue à aubes</strong>, puis convertit cette vitesse en pression dans un <strong>diffuseur</strong> — principe différent d\'un compresseur volumétrique (module B5-1).',
        'La <strong>vitesse périphérique</strong> $u = \\pi \\times D \\times N$ conditionne directement la pression développée par la roue.',
        'Domaine d\'utilisation : <strong>très grands débits</strong>, taux de compression modéré par étage — groupes froids industriels ou tertiaires de forte puissance.',
        'Technologie peu présente en GCF classique, mais dont un professionnel du génie climatique doit connaître le principe et les cas d\'usage.'
      ],
      piege: 'Le piège classique est de croire qu\'un compresseur centrifuge « comprime » le gaz de la même façon qu\'un compresseur volumétrique : il n\'y a <strong>aucune réduction mécanique de volume</strong> dans la roue elle-même — la compression résulte entièrement de la conversion vitesse-pression réalisée dans le diffuseur, en aval de la roue. Ne pas confondre non plus ce compresseur centrifuge frigorifique avec un <strong>ventilateur centrifuge</strong> (module B4-2) : le principe géométrique (roue à aubes + diffuseur) est analogue, mais les vitesses de rotation, les pressions développées et le fluide traité (gaz frigorigène sous pression, contre air à pression proche de l\'atmosphère) n\'ont aucune commune mesure.'
    },

    quiz: [
      {
        q: 'Dans un compresseur centrifuge, la compression du gaz résulte principalement de :',
        options: [
          'La réduction mécanique directe du volume dans la roue, comme un piston',
          'La conversion, dans le diffuseur, de la vitesse acquise dans la roue en pression',
          'Un détendeur placé avant la roue',
          'La lubrification du circuit'
        ],
        answer: 1,
        correction: 'La roue accélère le gaz radialement (énergie cinétique) ; c\'est ensuite le diffuseur, en ralentissant le gaz, qui convertit cette vitesse en pression.'
      },
      {
        q: 'Le compresseur centrifuge est plutôt réservé à :',
        options: [
          'De très faibles débits avec un fort taux de compression',
          'De très grands débits avec un taux de compression modéré par étage',
          'Exclusivement les installations domestiques',
          'Le pompage d\'eau glacée uniquement'
        ],
        answer: 1,
        correction: 'À l\'inverse d\'un compresseur volumétrique, le compresseur centrifuge est pertinent sur de très grands débits de gaz, avec un taux de compression modéré par étage — d\'où son usage en gros groupes froids industriels.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un groupe froid centrifuge de climatisation urbaine',
          'un turbocompresseur d\'une installation de production de froid industriel',
          'un groupe froid centrifuge d\'un grand centre commercial',
          'un compresseur centrifuge d\'un réseau de froid tertiaire'
        ]);
        const D = randFloat(0.25, 0.5, 2);
        const N = pick([9000, 10000, 12000, 15000]);
        const Nts = N / 60;
        const u = parseFloat((Math.PI * D * Nts).toFixed(1));
        return {
          statement: `Dans ${contexte}, la roue du compresseur a un diamètre $D=${fr(D, 2)}$ m et tourne à $N=${N}$ tr/min.<br/><br/>Calcule la vitesse périphérique $u$ de cette roue (en m/s, arrondie au dixième).`,
          answer: u,
          tolerance: 3,
          unit: 'm/s',
          hint: 'Convertis $N$ en tr/s ($/60$), puis applique $u=\\pi \\times D \\times N$.',
          solution: [
            `Vitesse de rotation convertie : $N = ${N}/60 = ${fr(Nts, 1)}$ tr/s.`,
            `$u = \\pi \\times ${fr(D, 2)} \\times ${fr(Nts, 1)} \\approx ${fr(u, 1)}$ m/s.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un groupe froid centrifuge de climatisation urbaine utilise une roue de diamètre $D=0{,}42$ m, tournant à $N=9\\,600$ tr/min. On compare deux configurations envisagées par le bureau d\'études : cette roue seule, ou une roue de plus petit diamètre $D\'=0{,}30$ m tournant plus vite, à $N\'=13\\,440$ tr/min, choisie pour viser la même vitesse périphérique.',
      tasks: [
        'Calculer la vitesse périphérique $u$ de la première configuration ($D=0{,}42$ m, $N=9\\,600$ tr/min).',
        'Calculer la vitesse périphérique $u\'$ de la seconde configuration ($D\'=0{,}30$ m, $N\'=13\\,440$ tr/min).',
        'Comparer les deux résultats et conclure sur l\'intérêt (ou non) de réduire le diamètre de roue en compensant par la vitesse de rotation.',
        'Expliquer en une phrase pourquoi ce choix technologique reste réservé à de grosses installations, et n\'a pas d\'équivalent en génie climatique de bâtiment courant (lien avec le module B5-1).'
      ],
      solutions: [
        '$N=9\\,600/60=160$ tr/s. $u = \\pi \\times 0{,}42 \\times 160 \\approx 211{,}1$ m/s.',
        '$N\'=13\\,440/60=224$ tr/s. $u\' = \\pi \\times 0{,}30 \\times 224 \\approx 211{,}1$ m/s.',
        'Les deux configurations donnent la <strong>même vitesse périphérique</strong> ($\\approx 211$ m/s) : réduire le diamètre de roue peut être compensé par une vitesse de rotation plus élevée pour conserver la même pression développée — un compromis d\'ingénierie entre encombrement de la roue et contraintes mécaniques (vitesse de rotation, équilibrage, paliers) à vitesse de rotation plus élevée.',
        'Cette technologie exige des vitesses de rotation et des débits de gaz bien au-delà de ce que rencontre une installation de bâtiment courant (PAC résidentielle ou tertiaire classique) : les compresseurs volumétriques (module B5-1), plus efficaces sur ces plages de débit et de taux de compression, restent la solution standard en génie climatique de bâtiment.'
      ],
      finalAnswer: 'Les deux configurations atteignent la même vitesse périphérique ($\\approx 211$ m/s) malgré des diamètres différents, en compensant par la vitesse de rotation — un compromis typique des groupes froids centrifuges industriels, hors du champ des installations de bâtiment courant.'
    },

    evaluation: {
      title: 'Évaluation — Compresseurs centrifuges',
      duration: '15 min',
      questions: [
        {
          statement: 'Une roue de diamètre $D=0{,}30$ m tourne à $N=10\\,800$ tr/min. Calculer sa vitesse périphérique $u$ (en m/s, arrondie à l\'unité).',
          type: 'numeric',
          answer: 170,
          tolerance: 5,
          unit: 'm/s',
          points: 3,
          correction: '$N=10\\,800/60=180$ tr/s. $u=\\pi\\times0{,}30\\times180\\approx169{,}6$ m/s.'
        },
        {
          statement: 'Le rôle du diffuseur dans un compresseur centrifuge est de :',
          type: 'multiple-choice',
          options: [
            'Accélérer davantage le gaz en sortie de roue',
            'Ralentir progressivement le gaz pour convertir sa vitesse en pression',
            'Lubrifier la roue',
            'Filtrer le fluide frigorigène'
          ],
          answer: 1,
          points: 2,
          correction: 'Le diffuseur, en s\'élargissant progressivement, ralentit le gaz sortant de la roue : cette perte de vitesse se traduit par un gain de pression.'
        },
        {
          statement: 'Comparé à un compresseur volumétrique (module B5-1), un compresseur centrifuge est généralement choisi pour :',
          type: 'multiple-choice',
          options: [
            'De très faibles puissances domestiques',
            'De très grandes puissances avec de grands débits de gaz à comprimer',
            'Remplacer un détendeur',
            'Les installations sans aucun besoin de régulation'
          ],
          answer: 1,
          points: 2,
          correction: 'Le compresseur centrifuge devient pertinent sur de très grandes puissances frigorifiques, avec des débits de gaz que les compresseurs volumétriques ne traiteraient pas efficacement.'
        },
        {
          statement: 'Si le diamètre de la roue double (vitesse de rotation inchangée), la vitesse périphérique $u$ est :',
          type: 'multiple-choice',
          options: [
            'Divisée par 2',
            'Multipliée par 2',
            'Inchangée',
            'Multipliée par 4'
          ],
          answer: 1,
          points: 2,
          correction: 'Comme $u=\\pi\\times D\\times N$, $u$ est directement proportionnelle à $D$ : doubler le diamètre (à vitesse de rotation inchangée) double la vitesse périphérique.'
        }
      ]
    }
  });
