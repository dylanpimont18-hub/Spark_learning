/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-forces.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-forces',
    level: 2, subject: 'physique',
    icon: '➡️',
    title: `Modélisation d'une action mécanique (forces)`,
    subtitle: `Vecteur force, actions de contact et à distance, poids, réaction, tension, frottement`,
    keywords: ['Force', 'Vecteur force', 'Poids', 'Action mécanique', 'Dynamomètre'],
    physics: `La modélisation des forces permet de comprendre pourquoi un pont ne s'effondre pas sous son propre poids, comment un grimpeur est retenu par sa corde d'assurage, pourquoi une voiture freine plus ou moins vite selon l'état de la route, ou comment un dynamomètre permet de mesurer l'intensité d'une force en newtons.`,

    cours: {
      intro: `Une <strong>action mécanique</strong> est ce qu'exerce un objet sur un autre pour modifier son mouvement (le mettre en mouvement, l'arrêter, dévier sa trajectoire, changer sa vitesse) ou pour le déformer. On distingue deux grandes familles d'actions mécaniques : les <strong>actions de contact</strong> (une main qui pousse, un fil qui tire, l'air qui freine) et les <strong>actions à distance</strong> (la gravité, le magnétisme), qui s'exercent sans contact direct entre les objets.<br/><br/>Chaque action mécanique se modélise par une <strong>force</strong>, une grandeur vectorielle notée $\\vec{F}$, mesurée en newtons (N) à l'aide d'un <strong>dynamomètre</strong>. Un vecteur force est entièrement défini par quatre caractéristiques : son <strong>point d'application</strong> (où elle s'exerce), sa <strong>direction</strong> (la droite selon laquelle elle agit), son <strong>sens</strong> (vers où elle pousse ou tire), et sa <strong>valeur</strong> (son intensité, en newtons).<br/><br/>Certaines actions de contact sont <strong>localisées</strong> (elles s'exercent en un point précis, comme la tension d'un fil) tandis que d'autres sont <strong>réparties</strong> sur toute une surface (comme le frottement d'un objet sur un support, ou la pression de l'air sur un parachute).`,
      definitions: [
        { term: `Force`, def: `Modélisation vectorielle d'une action mécanique, notée $\\vec{F}$, mesurée en newtons (N) à l'aide d'un dynamomètre. Une force peut modifier le mouvement d'un système (le faire démarrer, freiner, dévier) ou le déformer.` },
        { term: `Caractéristiques d'un vecteur force`, def: `Un vecteur force est entièrement défini par : son <strong>point d'application</strong>, sa <strong>direction</strong> (la droite qui porte le vecteur), son <strong>sens</strong>, et sa <strong>valeur</strong> $F$ (en newtons). Sur un schéma, la longueur du vecteur est proportionnelle à sa valeur, selon une échelle choisie.` },
        { term: `Poids`, def: `Force d'attraction exercée par la Terre sur un système, notée $\\vec{P}$. C'est une action <strong>à distance</strong>, verticale, dirigée vers le bas, appliquée au centre de gravité, de valeur $P = m \\times g$ (avec $g \\approx 9{,}81$ N/kg à la surface de la Terre).` },
        { term: `Réaction normale du support`, def: `Force $\\vec{N}$ exercée par un support sur un système posé dessus, perpendiculaire à la surface de contact, dirigée vers l'extérieur du support. C'est une action de contact qui empêche le système de s'enfoncer.` },
        { term: `Tension et frottement`, def: `La <strong>tension</strong> $\\vec{T}$ est la force exercée par un fil tendu, dirigée le long du fil. La <strong>force de frottement</strong> $\\vec{f}$ s'oppose au mouvement (ou à la tendance au mouvement) d'un système sur un support ou dans un fluide.` }
      ],
      method: {
        title: `Représenter le bilan des forces sur un système, en 3 étapes`,
        steps: [
          `<strong>Définir le système</strong> étudié et repérer toutes les actions mécaniques qu'il subit (qui exerce quoi, et comment : contact ou à distance).<br/>Exemple : une caisse tirée par une corde subit l'action de la Terre (poids), l'action du sol (réaction et frottement) et l'action de la corde (tension).`,
          `<strong>Modéliser chaque action</strong> par un vecteur force, en identifiant son point d'application, sa direction et son sens à partir de la situation physique (le poids est toujours vertical vers le bas, la tension est dirigée le long du fil...).`,
          `<strong>Représenter les vecteurs</strong> à une échelle cohérente : plus une force est intense, plus son vecteur doit être tracé long. Cette représentation graphique permet de comparer visuellement l'importance relative des différentes actions.`
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: `Bilan des forces sur un système`,
        title: `Modélisation vectorielle des actions mécaniques sur une caisse tirée`,
        description: `Quatre forces représentées depuis le centre de gravité $G$ de la caisse : le poids $\\vec{P}$, la réaction normale $\\vec{N}$, la tension $\\vec{T}$ du fil, et la force de frottement $\\vec{f}$.`,
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="forces-2nde-title forces-2nde-desc">
            <title id="forces-2nde-title">Bilan des forces sur une caisse tiree par un fil</title>
            <desc id="forces-2nde-desc">Une caisse rectangulaire repose sur un sol horizontal. Depuis son centre de gravite G, quatre vecteurs sont traces : le poids P vertical vers le bas jusqu'au sol, la reaction normale N verticale vers le haut de meme longueur que le poids, la tension T orientee obliquement vers le haut a droite representant la traction d'un fil, et la force de frottement f horizontale vers la gauche s'opposant au mouvement.</desc>

            <defs>
              <marker id="arrow-phys2nde-force" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- sol -->
            <line class="frame-line" x1="60" y1="240" x2="500" y2="240"></line>
            <line class="grid-line" x1="100" y1="240" x2="90" y2="252"></line>
            <line class="grid-line" x1="130" y1="240" x2="120" y2="252"></line>
            <line class="grid-line" x1="160" y1="240" x2="150" y2="252"></line>
            <line class="grid-line" x1="190" y1="240" x2="180" y2="252"></line>
            <line class="grid-line" x1="340" y1="240" x2="330" y2="252"></line>
            <line class="grid-line" x1="370" y1="240" x2="360" y2="252"></line>
            <line class="grid-line" x1="400" y1="240" x2="390" y2="252"></line>
            <line class="grid-line" x1="430" y1="240" x2="420" y2="252"></line>
            <line class="grid-line" x1="460" y1="240" x2="450" y2="252"></line>

            <!-- caisse -->
            <rect class="frame-line" x="220" y="170" width="100" height="70" fill="none"></rect>

            <!-- centre de gravite G -->
            <circle class="plot-point" cx="270" cy="205" r="4"></circle>
            <text class="label-soft" x="255" y="222" text-anchor="middle">G</text>

            <!-- poids P : vertical vers le bas -->
            <line class="curve-main" x1="270" y1="205" x2="270" y2="240" marker-end="url(#arrow-phys2nde-force)"></line>
            <text class="annotation-label" x="283" y="236" text-anchor="start">P</text>

            <!-- reaction normale N : vertical vers le haut, meme longueur que P -->
            <line class="curve-main" x1="270" y1="205" x2="270" y2="170" marker-end="url(#arrow-phys2nde-force)"></line>
            <text class="annotation-label" x="283" y="175" text-anchor="start">N</text>

            <!-- tension T : oblique vers le haut a droite -->
            <line class="curve-main" x1="270" y1="205" x2="343" y2="153" marker-end="url(#arrow-phys2nde-force)"></line>
            <text class="annotation-label" x="350" y="148" text-anchor="start">T</text>

            <!-- frottement f : horizontal vers la gauche -->
            <line class="curve-main" x1="270" y1="205" x2="225" y2="205" marker-end="url(#arrow-phys2nde-force)"></line>
            <text class="annotation-label" x="210" y="200" text-anchor="end">f</text>

            <text class="label-soft" x="270" y="260" text-anchor="middle">Caisse (assimilée à un point matériel G)</text>
          </svg>
        `,
        notes: [
          `Chaque force est modélisée par un <strong>vecteur</strong> caractérisé par un point d'application, une direction, un sens et une valeur (norme, en newtons N) — ici, les quatre vecteurs sont représentés depuis le centre de gravité $G$ du système, assimilé à un point.`,
          `Le <strong>poids</strong> $\\vec{P}$ (action à distance, exercée par la Terre) est toujours vertical, dirigé vers le bas. La <strong>réaction du support</strong> $\\vec{N}$ est verticale, dirigée vers le haut : elle s'oppose à l'enfoncement de la caisse dans le sol.`,
          `La <strong>tension</strong> $\\vec{T}$ (action de contact localisée, exercée par le fil) et la <strong>force de frottement</strong> $\\vec{f}$ (action de contact répartie, exercée par le sol, qui s'oppose au mouvement) complètent le bilan des forces agissant sur le système.`
        ],
        reading: `Repère d'abord le point $G$ où sont représentées toutes les forces, puis identifie chaque vecteur par sa direction et son sens : $\\vec{P}$ vers le bas, $\\vec{N}$ vers le haut, $\\vec{T}$ oblique, $\\vec{f}$ horizontale opposée au mouvement.`,
        caption: `Modélisation des actions mécaniques s'exerçant sur une caisse tirée par un fil : quatre forces représentées par des vecteurs depuis le centre de gravité $G$ (poids, réaction normale, tension, frottement).`
      },
      example: {
        statement: `Une valise de masse $m = 20$ kg est suspendue au repos à un dynamomètre accroché au plafond, dans le champ de pesanteur terrestre $g = 9{,}81$ N/kg.<br/><br/>Calculer la valeur du poids de la valise, puis en déduire la valeur affichée par le dynamomètre (qui mesure la tension du fil).`,
        steps: [
          `Le poids de la valise est une action à distance exercée par la Terre : $P = m \\times g = 20 \\times 9{,}81 = 196{,}2$ N.`,
          `La valise est immobile, suspendue par un seul fil : les deux seules forces qui s'exercent sur elle (le poids $\\vec{P}$ et la tension $\\vec{T}$ du fil) se compensent exactement.`,
          `La tension a donc la même valeur que le poids, mais un sens opposé : $T = P = 196{,}2$ N. C'est cette valeur qu'affiche le dynamomètre.`
        ],
        answer: `$P = 196{,}2$ N et $T = 196{,}2$ N. Le dynamomètre, en mesurant la tension du fil qui retient la valise, mesure indirectement la valeur du poids de celle-ci.`
      },
      formulas: [
        `Poids : $P = m \\times g$, avec $g \\approx 9{,}81$ N/kg`,
        `Une force est caractérisée par un point d'application, une direction, un sens et une valeur (en N)`,
        `Un dynamomètre mesure directement la valeur d'une force, en newtons`
      ],
      recap: [
        `Une action mécanique peut être <strong>de contact</strong> (localisée ou répartie) ou <strong>à distance</strong> ; elle se modélise toujours par un vecteur force $\\vec{F}$.`,
        `Un vecteur force est défini par quatre caractéristiques : point d'application, direction, sens, valeur (en newtons).`,
        `Le <strong>poids</strong> $\\vec{P} = m\\vec{g}$ est une action à distance, toujours verticale vers le bas, appliquée au centre de gravité.`,
        `Sur un schéma, la <strong>longueur</strong> d'un vecteur force représente son intensité selon une échelle choisie : deux forces de valeurs différentes doivent être représentées par des vecteurs de longueurs différentes.`
      ],
      piege: `Une confusion fréquente consiste à croire que la masse et le poids sont la même grandeur, ou à les exprimer avec la même unité. Attention, la masse $m$ (en kg) est une propriété invariable de l'objet, alors que le poids $P = mg$ (en newtons) est une force qui dépend du champ de pesanteur : un même objet garde la même masse partout, mais a un poids différent sur la Lune, où $g$ est environ six fois plus faible.`
    },

    quiz: [
      {
        q: `Une action mécanique <strong>à distance</strong> est une action qui :`,
        options: [
          `Nécessite un contact direct entre les deux objets`,
          `S'exerce sans contact direct entre les deux objets`,
          `Ne peut jamais modifier le mouvement d'un objet`,
          `Se mesure uniquement en kilogrammes`
        ],
        answer: 1,
        correction: `Une action à distance (comme le poids, exercé par la Terre) s'exerce <strong>sans contact direct</strong> entre les deux objets, contrairement à une action de contact (une main qui pousse, un fil qui tire).`
      },
      {
        q: `Parmi ces quatre éléments, lequel ne fait <strong>pas</strong> partie des caractéristiques d'un vecteur force ?`,
        options: [
          `Le point d'application`,
          `La direction`,
          `La couleur du vecteur sur le schéma`,
          `La valeur, en newtons`
        ],
        answer: 2,
        correction: `La couleur utilisée pour tracer un vecteur sur un schéma n'a aucune signification physique. Les quatre caractéristiques qui définissent réellement un vecteur force sont son <strong>point d'application</strong>, sa <strong>direction</strong>, son <strong>sens</strong> et sa <strong>valeur</strong> (en newtons).`
      },
      {
        q: `Un objet de masse $m = 5$ kg est posé sur Terre, où $g \\approx 9{,}81$ N/kg. Quelle est la valeur de son poids ?`,
        options: [
          `$P = 5$ N`,
          `$P \\approx 49{,}05$ N`,
          `$P = 9{,}81$ N`,
          `$P = 14{,}81$ N`
        ],
        answer: 1,
        correction: `$P = m \\times g = 5 \\times 9{,}81 = 49{,}05$ N. Attention à ne pas confondre la masse (en kg) et le poids (en N, obtenu en multipliant la masse par $g$).`
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['calcul_poids', 'calcul_masse']);
        var g = 9.81;

        if (typeExo === 'calcul_poids') {
          var m = randFloat(2, 80, 1);
          var P = parseFloat((m * g).toFixed(2));
          var contexte = pick([
            `une valise posée sur un tapis roulant d'aéroport`,
            `un sac à dos de randonnée`,
            `un colis déposé par un livreur`,
            `une caisse d'outils sur un chantier`,
            `un haltère utilisé en salle de sport`
          ]);
          return {
            statement: 'On considère ' + contexte + ', de masse $m = ' + fr(m, 1) + '$ kg, sur Terre où $g = 9{,}81$ N/kg.<br/><br/>Calcule la valeur du poids $P$ de cet objet (en N, arrondie au centième).',
            answer: P,
            tolerance: Math.max(0.1, parseFloat((P * 0.02).toFixed(2))),
            unit: 'N',
            hint: 'Le poids se calcule par $P = m \\times g$, une simple multiplication de la masse par le champ de pesanteur.',
            solution: [
              'Formule du poids : $P = m \\times g$.',
              'Application numérique : $P = ' + fr(m, 1) + ' \\times 9{,}81$.',
              'Résultat : $P \\approx ' + fr(P, 2) + '$ N.'
            ]
          };
        } else {
          var m2 = randFloat(2, 80, 1);
          var P2 = parseFloat((m2 * g).toFixed(2));
          var contexte2 = pick([
            `un dynamomètre accroché au plafond d'un atelier`,
            `un peson utilisé pour peser un colis suspendu`,
            `un crochet dynamométrique en salle de travaux pratiques`,
            `un dynamomètre de pêche`
          ]);
          return {
            statement: 'Un objet est suspendu au repos à ' + contexte2 + ', qui affiche une tension $T = ' + fr(P2, 2) + '$ N. On donne $g = 9{,}81$ N/kg.<br/><br/>Sachant que la tension du fil compense exactement le poids de l\'objet, calcule la masse $m$ de cet objet (en kg, arrondie au dixième).',
            answer: m2,
            tolerance: Math.max(0.1, parseFloat((m2 * 0.02).toFixed(2))),
            unit: 'kg',
            hint: `Si le fil compense exactement le poids, alors $T = P = m \\times g$, donc $m = \\dfrac{T}{g}$.`,
            solution: [
              'La tension compense le poids : $T = P = m \\times g$.',
              'On isole $m$ : $m = \\dfrac{T}{g} = \\dfrac{' + fr(P2, 2) + '}{9{,}81}$.',
              'Résultat : $m \\approx ' + fr(m2, 1) + '$ kg.'
            ]
          };
        }
      }
    },

    probleme: {
      context: `Un lustre de masse $m = 8$ kg est suspendu au plafond d'une salle par deux câbles identiques, disposés symétriquement, qui se partagent équitablement la charge. On donne $g = 9{,}81$ N/kg.`,
      tasks: [
        `Calculer la valeur du poids $P$ du lustre.`,
        `Sachant que les deux câbles se partagent équitablement la charge et que l'ensemble des forces se compense (le lustre est immobile), calculer la tension $T$ exercée par chacun des deux câbles.`,
        `Si l'un des deux câbles venait à céder, expliquer qualitativement ce qui arriverait à la tension supportée par le second câble, et pourquoi cela peut poser un problème de sécurité.`
      ],
      solutions: [
        `$P = m \\times g = 8 \\times 9{,}81 = 78{,}48$ N.`,
        `Les deux câbles se partagent également la charge : la somme des deux tensions compense le poids, donc $2T = P$, soit $T = \\dfrac{P}{2} = \\dfrac{78{,}48}{2} = 39{,}24$ N pour chaque câble.`,
        `Si un câble cède, le second doit à lui seul compenser tout le poids du lustre : sa tension double presque instantanément, passant d'environ $39{,}24$ N à $78{,}48$ N. Si ce câble n'est pas dimensionné pour supporter une telle valeur, il risque à son tour de céder — d'où l'importance de prévoir une marge de sécurité lors du dimensionnement d'une fixation.`
      ],
      finalAnswer: `$P = 78{,}48$ N, réparti en $T \\approx 39{,}24$ N sur chacun des deux câbles. La rupture d'un câble double la charge supportée par l'autre : un dimensionnement avec marge de sécurité est indispensable pour éviter une rupture en cascade.`
    },

    evaluation: {
      title: `Évaluation — Modélisation d'une action mécanique (forces)`,
      duration: '25 min',
      questions: [
        {
          statement: `Un objet de masse $m = 15$ kg est posé sur Terre ($g = 9{,}81$ N/kg). Calculer la valeur de son poids (en N, arrondie au centième).`,
          type: 'numeric',
          answer: 147.15,
          tolerance: 2,
          unit: 'N',
          points: 2,
          correction: `$P = m \\times g = 15 \\times 9{,}81 = 147{,}15$ N.`
        },
        {
          statement: `La masse d'un objet transporté de la Terre à la Lune :`,
          type: 'multiple-choice',
          options: [
            `Change, car elle dépend du champ de pesanteur du lieu`,
            `Reste la même, car c'est une propriété de l'objet indépendante du lieu`,
            `Devient nulle en l'absence d'atmosphère`,
            `Double systématiquement`
          ],
          answer: 1,
          points: 2,
          correction: `La masse $m$ est une propriété intrinsèque de l'objet (liée à la quantité de matière) : elle ne change pas, quel que soit le lieu. C'est le <strong>poids</strong> ($P = mg$) qui change, car il dépend du champ de pesanteur $g$, différent sur la Lune.`
        },
        {
          statement: `Un objet de masse $m = 12$ kg est suspendu au repos à un dynamomètre ($g = 9{,}81$ N/kg). Calculer la valeur affichée par le dynamomètre (en N, arrondie au centième).`,
          type: 'numeric',
          answer: 117.72,
          tolerance: 2,
          unit: 'N',
          points: 2,
          correction: `Le fil compense exactement le poids : $T = P = m \\times g = 12 \\times 9{,}81 = 117{,}72$ N.`
        },
        {
          statement: `Parmi ces quatre forces, laquelle est une action mécanique <strong>à distance</strong> ?`,
          type: 'multiple-choice',
          options: [
            `Le poids`,
            `La tension d'un fil`,
            `La réaction normale du support`,
            `La force de frottement`
          ],
          answer: 0,
          points: 2,
          correction: `Le poids, exercé par la Terre, s'exerce sans contact direct : c'est une action <strong>à distance</strong>. Les trois autres forces citées (tension, réaction, frottement) sont toutes des actions de <strong>contact</strong>.`
        },
        {
          statement: `Un objet a un poids $P = 58{,}86$ N, sur Terre où $g = 9{,}81$ N/kg. Calculer sa masse (en kg).`,
          type: 'numeric',
          answer: 6,
          tolerance: 0.2,
          unit: 'kg',
          points: 2,
          correction: `$m = \\dfrac{P}{g} = \\dfrac{58{,}86}{9{,}81} = 6$ kg.`
        }
      ]
    }
  });
