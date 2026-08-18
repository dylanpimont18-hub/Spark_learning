/* =========================================================
   Spark Learning – data/physique-2nde/physique-2nde-corps-purs.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-2nde-corps-purs',
    level: 2, subject: 'physique',
    icon: '⚗️',
    title: `Corps purs et mélanges`,
    subtitle: `Identification d'un corps pur, mélanges homogènes et hétérogènes, techniques de séparation`,
    keywords: ['Corps pur', 'Mélange', 'Grandeur caractéristique', `Changement d'état`, `Séparation`],
    physics: `Distinguer un corps pur d'un mélange permet de contrôler la qualité d'une eau minérale, de vérifier la pureté d'un métal précieux, de choisir la bonne technique pour séparer le pétrole brut en ses différents constituants (distillation), ou de comprendre pourquoi l'eau de mer ne bout pas exactement à la même température que l'eau pure.`,

    cours: {
      intro: `Toute matière qui nous entoure est soit un <strong>corps pur</strong> (une seule espèce chimique), soit un <strong>mélange</strong> (plusieurs espèces chimiques réunies). Un mélange est dit <strong>homogène</strong> lorsqu'on ne distingue aucun de ses constituants à l'œil nu, même après un temps de repos (l'eau salée, l'air) ; il est dit <strong>hétérogène</strong> lorsque plusieurs phases restent visibles (l'eau et l'huile, l'eau boueuse).<br/><br/>Comment savoir, sans microscope ni analyse chimique complexe, si un liquide est un corps pur ou un mélange ? On mesure une <strong>grandeur physique caractéristique</strong> : une propriété qui prend une valeur fixe et connue pour un corps pur donné, dans des conditions de pression fixées (par exemple sa température de fusion, sa température d'ébullition, sa masse volumique, ou son indice de réfraction). Si la valeur mesurée correspond à une valeur tabulée de référence, le corps est probablement pur ; sinon, il s'agit vraisemblablement d'un mélange.<br/><br/>Le suivi de la <strong>température au cours d'un changement d'état</strong> est une méthode particulièrement efficace : un corps pur change d'état à température constante (un <strong>palier</strong> apparaît sur la courbe temps-température), alors qu'un mélange change d'état de façon plus progressive, sans palier net.`,
      definitions: [
        { term: `Corps pur`, def: `Échantillon de matière ne contenant qu'une seule espèce chimique, à l'échelle macroscopique comme microscopique (par exemple l'eau distillée, le dioxygène pur, ou l'or à 24 carats).` },
        { term: `Mélange homogène`, def: `Association de plusieurs espèces chimiques dont on ne distingue aucun constituant à l'œil nu, même après un temps de repos : une seule phase est visible (l'eau salée, l'air, un jus de fruit filtré).` },
        { term: `Mélange hétérogène`, def: `Association de plusieurs espèces chimiques dont on distingue au moins deux phases à l'œil nu (l'eau et l'huile, l'eau boueuse, le sable dans l'eau).` },
        { term: `Grandeur physique caractéristique`, def: `Propriété physique (température de fusion, température d'ébullition, masse volumique, indice de réfraction...) qui prend une valeur fixe et connue pour un corps pur donné, à une pression fixée. Comparer une valeur mesurée à une valeur tabulée permet d'identifier un corps pur.` },
        { term: `Palier de changement d'état`, def: `Portion horizontale d'une courbe température-temps, pendant laquelle la température reste constante alors que la matière change d'état (fusion, ébullition...). Ce palier est net pour un corps pur, mais absent ou peu marqué pour un mélange.` }
      ],
      method: {
        title: `Déterminer si une substance est un corps pur, en 3 étapes`,
        steps: [
          `<strong>Choisir une grandeur physique caractéristique</strong> facile à mesurer dans les conditions du laboratoire : le plus souvent, la température de changement d'état (fusion ou ébullition), à pression atmosphérique normale.`,
          `<strong>Mesurer cette grandeur expérimentalement</strong>, par exemple en suivant l'évolution de la température au cours du temps à l'aide d'un thermomètre ou d'une sonde, pendant le changement d'état.`,
          `<strong>Comparer le résultat à une valeur de référence tabulée</strong> ET vérifier la présence d'un palier net sur la courbe température-temps : si les deux critères sont satisfaits, la substance est très probablement un corps pur ; sinon, c'est un mélange.`
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: `Identification d'un corps pur`,
        title: `Courbe température-temps : palier net pour un corps pur, absence de palier pour un mélange`,
        description: `Lors d'un changement d'état, la température d'un <strong>corps pur</strong> reste constante (palier net), alors que celle d'un <strong>mélange</strong> continue d'évoluer sans plateau marqué.`,
        svg: `
          <svg viewBox="0 0 560 320" role="img" aria-labelledby="corpspur-2nde-title corpspur-2nde-desc">
            <title id="corpspur-2nde-title">Courbes temperature-temps lors d'un changement d'etat</title>
            <desc id="corpspur-2nde-desc">Un graphique represente la temperature en ordonnee en fonction du temps en abscisse, avec deux courbes superposees. La courbe en trait plein, representant un corps pur, monte puis presente un long palier parfaitement horizontal a temperature constante pendant tout le changement d'etat, avant de remonter. La courbe en pointilles, representant un melange, monte de maniere continue sur toute la duree, sans jamais former de palier horizontal net.</desc>

            <defs>
              <marker id="arrow-phys2nde-corpspur" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="70" y1="280" x2="520" y2="280" marker-end="url(#arrow-phys2nde-corpspur)"></line>
            <line class="frame-line" x1="70" y1="280" x2="70" y2="40" marker-end="url(#arrow-phys2nde-corpspur)"></line>
            <text class="tick-label" x="70" y="26" text-anchor="middle">T (°C)</text>
            <text class="tick-label" x="518" y="298" text-anchor="end">t (min)</text>

            <!-- repere du palier sur l'axe des temperatures -->
            <line class="guide-line" x1="70" y1="150" x2="210" y2="150"></line>
            <text class="tick-label" x="58" y="154" text-anchor="end">T_fus</text>

            <!-- courbe du corps pur (trait plein, avec palier) -->
            <path class="curve-main" fill="none" d="M90,260 L210,150 L350,150 L480,80"></path>
            <circle class="plot-point" cx="210" cy="150" r="4"></circle>
            <circle class="plot-point" cx="350" cy="150" r="4"></circle>
            <text class="annotation-label" x="280" y="135" text-anchor="middle">Palier (T constante)</text>
            <text class="label-soft" x="480" y="65" text-anchor="middle">Corps pur</text>

            <!-- courbe du melange (pointilles, sans palier) -->
            <path class="guide-line" fill="none" d="M90,260 L170,205 L260,168 L350,145 L480,80"></path>
            <text class="label-soft" x="255" y="196" text-anchor="middle">Mélange (pas de palier net)</text>
          </svg>
        `,
        notes: [
          `Pour le <strong>corps pur</strong>, la température reste rigoureusement constante pendant tout le changement d'état : c'est le <strong>palier</strong>, une signature caractéristique qu'aucun mélange ne reproduit exactement.`,
          `Pour le <strong>mélange</strong>, la température continue de varier tout au long du changement d'état, sans plateau net : c'est un critère simple pour distinguer un mélange d'un corps pur, sans avoir besoin d'analyse chimique.`,
          `La température du palier ($T_{fus}$ ici) peut être comparée à une valeur tabulée de référence : si elle correspond, cela renforce l'hypothèse d'un corps pur.`
        ],
        reading: `Suis d'abord la courbe en trait plein (corps pur) : repère la portion parfaitement horizontale, le palier. Compare-la ensuite à la courbe en pointillés (mélange), qui continue de monter sans jamais former de plateau net.`,
        caption: `Courbes température-temps lors d'un changement d'état : un corps pur présente un palier net à température constante, alors qu'un mélange voit sa température évoluer en continu, sans plateau marqué.`
      },
      example: {
        statement: `On chauffe un échantillon liquide inconnu et on suit sa température au cours du temps pendant son ébullition. Le suivi expérimental montre que la température reste rigoureusement constante à $99{,}8$ °C pendant toute la durée de l'ébullition, à pression atmosphérique normale.<br/><br/>Sachant qu'une table de référence indique que l'eau pure bout à $100$ °C à pression atmosphérique normale, conclure sur la nature de cet échantillon.`,
        steps: [
          `Le fait que la température reste <strong>constante</strong> pendant tout le changement d'état (palier net) est le premier indice caractéristique d'un corps pur.`,
          `La valeur mesurée, $99{,}8$ °C, est très proche de la valeur tabulée pour l'eau pure ($100$ °C à pression atmosphérique normale) : l'écart, $|99{,}8 - 100| = 0{,}2$ °C, est faible et s'explique par les incertitudes de mesure (thermomètre, pression atmosphérique du jour légèrement différente).`,
          `Les deux critères — palier net et valeur proche de la référence tabulée — sont satisfaits.`
        ],
        answer: `L'échantillon est très probablement de l'<strong>eau pure</strong> (ou très proche de la pureté) : la présence d'un palier net à une température voisine de la valeur de référence tabulée pour l'eau ($100$ °C) confirme qu'il s'agit d'un corps pur, et non d'un mélange.`
      },
      formulas: [
        `Masse volumique (grandeur caractéristique) : $\\rho = \\dfrac{m}{V}$, en g/mL (ou kg/m³)`,
        `Densité par rapport à l'eau : $d = \\dfrac{\\rho_{substance}}{\\rho_{eau}}$ (sans unité)`,
        `Critère d'identification d'un corps pur : palier net à température constante <strong>et</strong> valeur mesurée proche d'une valeur tabulée de référence`
      ],
      recap: [
        `Un <strong>corps pur</strong> ne contient qu'une seule espèce chimique ; un <strong>mélange</strong> en contient plusieurs, réparties de façon homogène ou hétérogène.`,
        `Une <strong>grandeur physique caractéristique</strong> (température de changement d'état, masse volumique...) permet d'identifier un corps pur en comparant la valeur mesurée à une valeur tabulée.`,
        `Le <strong>palier</strong> observé sur une courbe température-temps pendant un changement d'état est net pour un corps pur, et absent ou flou pour un mélange.`,
        `Séparer les constituants d'un mélange fait appel à des techniques adaptées : <strong>filtration</strong> et <strong>décantation</strong> pour un mélange hétérogène, <strong>distillation</strong> ou <strong>chromatographie</strong> pour un mélange homogène.`
      ],
      piege: `Beaucoup d'élèves pensent qu'un mélange homogène, parce qu'on n'en distingue pas les constituants à l'œil nu, se comporte comme un corps pur lors d'un changement d'état. Attention, ce n'est pas le cas : même parfaitement homogène, un mélange (comme l'eau salée) change d'état sur toute une plage de température, sans palier net, contrairement à un corps pur.`
    },

    quiz: [
      {
        q: `Un mélange dans lequel on distingue au moins deux phases à l'œil nu est un mélange :`,
        options: [
          `Homogène`,
          `Hétérogène`,
          `Un corps pur`,
          `Impossible à observer`
        ],
        answer: 1,
        correction: `Dès qu'au moins deux phases restent visibles à l'œil nu (comme l'eau et l'huile), le mélange est dit <strong>hétérogène</strong>. Un mélange homogène, au contraire, ne présente qu'une seule phase visible.`
      },
      {
        q: `Lors du suivi de la température pendant un changement d'état, la présence d'un palier net (température constante) est caractéristique :`,
        options: [
          `D'un mélange hétérogène uniquement`,
          `D'un corps pur`,
          `De n'importe quel type de matière`,
          `D'une erreur de mesure`
        ],
        answer: 1,
        correction: `Un palier net à température constante pendant tout le changement d'état est la signature caractéristique d'un <strong>corps pur</strong>. Un mélange, même homogène, change d'état de façon progressive, sans palier net.`
      },
      {
        q: `Pour séparer un mélange hétérogène comme de l'eau boueuse (eau et particules solides en suspension), la technique la plus adaptée est :`,
        options: [
          `La distillation`,
          `La chromatographie`,
          `La filtration ou la décantation`,
          `Aucune technique n'existe pour ce mélange`
        ],
        answer: 2,
        correction: `La filtration (à l'aide d'un filtre) ou la décantation (en laissant les particules solides se déposer) sont les techniques adaptées pour séparer les phases d'un mélange <strong>hétérogène</strong> solide-liquide, comme l'eau boueuse.`
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['masse_volumique', 'ecart_temperature']);

        if (typeExo === 'masse_volumique') {
          var m = randFloat(10, 500, 1);
          var V = randFloat(5, 60, 1);
          var rho = parseFloat((m / V).toFixed(2));
          var contexte = pick([
            `un échantillon de métal inconnu`,
            `un liquide prélevé en laboratoire`,
            `un minerai à analyser`,
            `une pièce métallique issue d'une fonderie`
          ]);
          return {
            statement: 'On mesure la masse $m = ' + fr(m, 1) + '$ g et le volume $V = ' + fr(V, 1) + '$ mL de ' + contexte + '.<br/><br/>Calcule sa masse volumique $\\rho$ (en g/mL, arrondie au centième), une grandeur physique caractéristique utile pour identifier la substance.',
            answer: rho,
            tolerance: Math.max(0.05, parseFloat((rho * 0.03).toFixed(2))),
            unit: 'g/mL',
            hint: 'La masse volumique se calcule par $\\rho = \\dfrac{m}{V}$.',
            solution: [
              'Formule : $\\rho = \\dfrac{m}{V}$.',
              'Application numérique : $\\rho = \\dfrac{' + fr(m, 1) + '}{' + fr(V, 1) + '}$.',
              'Résultat : $\\rho \\approx ' + fr(rho, 2) + '$ g/mL.'
            ]
          };
        } else {
          var pairs = [
            { name: `de l'eau, relevée lors de son ébullition`, Tref: 100 },
            { name: `de la glace, relevée lors de sa fusion`, Tref: 0 },
            { name: `de l'éthanol, relevée lors de son ébullition`, Tref: 78 }
          ];
          var pair = pick(pairs);
          var ecartVal = randFloat(0.1, 3, 1);
          var sign = pick([1, -1]);
          var Tmeasured = parseFloat((pair.Tref + sign * ecartVal).toFixed(1));
          var ecart = parseFloat(Math.abs(Tmeasured - pair.Tref).toFixed(1));
          return {
            statement: 'Lors d\'un suivi expérimental de la température ' + pair.name + ', on mesure une température de changement d\'état $T_{mesurée} = ' + fr(Tmeasured, 1) + '$ °C, alors que la table de référence indique $T_{réf} = ' + pair.Tref + '$ °C à pression atmosphérique normale.<br/><br/>Calcule l\'écart, en valeur absolue, entre la température mesurée et la valeur tabulée (en °C, arrondi au dixième).',
            answer: ecart,
            tolerance: 0.05,
            unit: '°C',
            hint: `L'écart est la différence, en valeur absolue, entre la valeur mesurée et la valeur de référence tabulée : $|T_{mesurée} - T_{réf}|$.`,
            solution: [
              'Écart en valeur absolue : $|T_{mesurée} - T_{réf}|$.',
              'Application numérique : $|' + fr(Tmeasured, 1) + ' - ' + pair.Tref + '|$.',
              'Résultat : écart $\\approx ' + fr(ecart, 1) + '$ °C — un écart faible est cohérent avec un corps pur, aux incertitudes de mesure près.'
            ]
          };
        }
      }
    },

    probleme: {
      context: `On souhaite vérifier si un flacon étiqueté « eau distillée » contient réellement de l'eau pure, ou si elle a été contaminée. Le liquide observé est parfaitement limpide, sans aucune trace de dépôt ni de deuxième phase visible.`,
      tasks: [
        `À partir de son aspect visuel (liquide limpide, une seule phase visible), peut-on affirmer avec certitude qu'il s'agit d'un corps pur ? Justifier.`,
        `On suit sa température pendant l'ébullition : un palier net apparaît à $99{,}6$ °C, à pression atmosphérique normale. Comparer cette valeur à la valeur tabulée pour l'eau pure ($100$ °C) et calculer l'écart.`,
        `Conclure sur la nature probable de cet échantillon, en tenant compte à la fois du palier observé et de l'écart calculé.`
      ],
      solutions: [
        `Non : un liquide limpide et à une seule phase visible peut aussi bien être un <strong>corps pur</strong> qu'un <strong>mélange homogène</strong> (comme de l'eau très légèrement salée, elle aussi limpide). L'aspect visuel seul ne permet pas de trancher : il faut mesurer une grandeur physique caractéristique.`,
        `Écart $= |99{,}6 - 100| = 0{,}4$ °C : un écart faible, du même ordre de grandeur que les incertitudes de mesure habituelles (thermomètre, pression atmosphérique du jour).`,
        `Le palier net (température constante pendant tout le changement d'état) et l'écart faible avec la valeur tabulée sont deux indices cohérents avec un <strong>corps pur</strong> : l'échantillon est très probablement de l'eau pure, sans contamination significative.`
      ],
      finalAnswer: `L'aspect visuel seul ne suffit pas à conclure. Le palier net à $99{,}6$ °C, avec un écart de seulement $0{,}4$ °C par rapport à la valeur tabulée de $100$ °C, confirme que l'échantillon est très probablement de l'eau pure.`
    },

    evaluation: {
      title: `Évaluation — Corps purs et mélanges`,
      duration: '25 min',
      questions: [
        {
          statement: `Un mélange dont on ne distingue aucun constituant à l'œil nu, même après un temps de repos, est qualifié de :`,
          type: 'multiple-choice',
          options: [
            `Hétérogène`,
            `Homogène`,
            `Corps pur`,
            `Instable`
          ],
          answer: 1,
          points: 2,
          correction: `Un mélange dont on ne distingue aucun constituant à l'œil nu, même après un temps de repos, est un mélange <strong>homogène</strong> (une seule phase visible).`
        },
        {
          statement: `On mesure la masse $m = 270$ g et le volume $V = 30$ mL d'un échantillon métallique. Calculer sa masse volumique $\\rho$ (en g/mL).`,
          type: 'numeric',
          answer: 9,
          tolerance: 0.3,
          unit: 'g/mL',
          points: 2,
          correction: `$\\rho = \\dfrac{m}{V} = \\dfrac{270}{30} = 9$ g/mL.`
        },
        {
          statement: `Pour séparer l'huile et l'eau (mélange hétérogène de deux liquides non miscibles), on utilise plutôt :`,
          type: 'multiple-choice',
          options: [
            `La distillation`,
            `La décantation`,
            `La chromatographie`,
            `Aucune séparation n'est possible`
          ],
          answer: 1,
          points: 2,
          correction: `L'huile et l'eau, non miscibles, se séparent naturellement en deux phases superposées : la <strong>décantation</strong> (laisser reposer, puis séparer les deux couches) est la technique adaptée à ce mélange hétérogène liquide-liquide.`
        },
        {
          statement: `Lors du suivi de la température d'un échantillon pendant son ébullition, on mesure un palier à $T_{mesurée} = 101{,}5$ °C, alors que la table de référence indique $T_{réf} = 100$ °C. Calculer l'écart en valeur absolue (en °C).`,
          type: 'numeric',
          answer: 1.5,
          tolerance: 0.05,
          unit: '°C',
          points: 2,
          correction: `Écart $= |T_{mesurée} - T_{réf}| = |101{,}5 - 100| = 1{,}5$ °C.`
        },
        {
          statement: `Un palier de température observé lors d'un changement d'état est un argument en faveur de :`,
          type: 'multiple-choice',
          options: [
            `Un mélange hétérogène`,
            `Un corps pur`,
            `Un mélange homogène uniquement`,
            `Aucune conclusion n'est possible`
          ],
          answer: 1,
          points: 2,
          correction: `Un palier net (température constante pendant tout le changement d'état) est la signature caractéristique d'un <strong>corps pur</strong> : c'est l'un des deux critères, avec la comparaison à une valeur tabulée, permettant de l'identifier.`
        }
      ]
    }
  });
