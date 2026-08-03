/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b4-2-reseaux-aerauliques.js
   BTS FED — S8-B4-2 Réseaux aérauliques — composants, ventilateurs, puissance absorbée
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b4-2-reseaux-aerauliques',
    level: 3, subject: 'fed',
    icon: '💨',
    title: 'Réseaux aérauliques',
    subtitle: 'Composants, ventilateurs hélicoïdes/centrifuges, puissance absorbée',
    keywords: ['Gaines', 'Registres', 'Ventilateur centrifuge', 'Ventilateur hélicoïde', 'Puissance aéraulique'],
    physics: 'Faire circuler de l\'air dans un réseau de gaines demande de vaincre des <strong>pertes de charge</strong> (module A3), exactement comme pour l\'eau d\'un réseau hydraulique (module B4-1) — sauf que le fluide est de l\'air, et que l\'organe moteur n\'est plus un circulateur mais un <strong>ventilateur</strong>.',

    cours: {
      intro: 'Un <strong>réseau aéraulique</strong> distribue de l\'air (traitement d\'air, module A4 ; ventilation, module B2-1) via un ensemble de composants : <strong>gaines</strong> (rigides ou souples), <strong>registres</strong> (réglage de débit), <strong>filtres</strong> (qualité d\'air), <strong>diffuseurs</strong> (soufflage dans le local) et <strong>pièges à son</strong> (atténuation acoustique, module A7).<br/><br/>Le moteur de ce réseau est un <strong>ventilateur</strong>, dont il existe deux grandes familles constructives : le ventilateur <strong>hélicoïde</strong> (hélice simple, adapté aux faibles pertes de charge, par exemple une extraction directe en façade) et le ventilateur <strong>centrifuge</strong> (roue à aubes, capable de vaincre des pertes de charge plus importantes, adapté aux réseaux de gaines longs avec filtres et batteries).<br/><br/>Comme pour un circulateur hydraulique, la consommation électrique d\'un ventilateur dépend directement du <strong>débit d\'air</strong> à fournir et de la <strong>perte de charge totale</strong> du réseau à vaincre — le principe est rigoureusement le même qu\'en hydraulique (module B4-1), seule la nature du fluide change.',
      definitions: [
        { term: 'Ventilateur hélicoïde', def: 'Ventilateur à hélice simple, monté directement dans le flux d\'air (souvent en paroi ou en gaine courte), adapté aux faibles pertes de charge et aux grands débits à basse pression.' },
        { term: 'Ventilateur centrifuge', def: 'Ventilateur à roue à aubes, qui accélère l\'air radialement avant de le rediriger vers la sortie, capable de vaincre des pertes de charge plus élevées — adapté aux réseaux de gaines longs, avec filtres, batteries ou pièges à son.' },
        { term: 'Registre', def: 'Organe de réglage manuel ou motorisé qui ajuste le débit d\'air dans une gaine, utilisé notamment pour l\'équilibrage du réseau.' },
        { term: 'Piège à son', def: 'Élément de gaine garni d\'un matériau absorbant, destiné à atténuer le niveau sonore transmis par le réseau (dimensionnement au module A7).' },
        { term: 'Puissance aéraulique $P_{\\text{aer}}$', def: 'Puissance mécanique que le ventilateur transmet réellement à l\'air : $P_{\\text{aer}} = \\Delta P \\times Q_v$, avec $\\Delta P$ la perte de charge totale du réseau (Pa) et $Q_v$ le débit volumique (m³/s).' },
        { term: 'Puissance absorbée $P_{\\text{abs}}$', def: 'Puissance électrique réellement consommée par le ventilateur : $P_{\\text{abs}} = P_{\\text{aer}}/\\eta$, avec $\\eta$ le rendement global (moteur + roue), typiquement $0{,}4$ à $0{,}7$ selon la technologie et le point de fonctionnement.' }
      ],
      method: {
        title: 'Calculer la puissance absorbée d\'un ventilateur',
        steps: [
          '<strong>Déterminer le point de fonctionnement</strong> du réseau (débit $Q_v$ et perte de charge totale $\\Delta P$), comme au module A3.',
          '<strong>Convertir le débit</strong> en m³/s si besoin (division par $3\\,600$ à partir de m³/h).',
          '<strong>Calculer la puissance aéraulique</strong> $P_{\\text{aer}} = \\Delta P \\times Q_v$.',
          '<strong>Diviser par le rendement</strong> $\\eta$ du ventilateur pour obtenir la puissance absorbée $P_{\\text{abs}} = P_{\\text{aer}}/\\eta$.',
          '<strong>Choisir la technologie</strong> (hélicoïde ou centrifuge) selon l\'ordre de grandeur de $\\Delta P$ : un hélicoïde convient à de faibles pertes de charge, un centrifuge devient nécessaire dès que le réseau se complexifie (filtres, batteries, longueur importante).'
        ]
      },
      example: {
        statement: 'Une centrale de traitement d\'air doit fournir un débit $Q_v=1\\,500$ m³/h contre une perte de charge totale $\\Delta P=250$ Pa (réseau avec filtres et batterie), avec un rendement global du ventilateur $\\eta=0{,}55$.<br/><br/>Calculer la puissance aéraulique puis la puissance absorbée de ce ventilateur.',
        steps: [
          'Conversion du débit : $Q_v = 1\\,500/3\\,600 \\approx 0{,}417$ m³/s.',
          '$P_{\\text{aer}} = \\Delta P \\times Q_v = 250 \\times 0{,}417 \\approx 104{,}2$ W.',
          '$P_{\\text{abs}} = P_{\\text{aer}}/\\eta = 104{,}2/0{,}55 \\approx 189{,}5$ W.'
        ],
        answer: '$P_{\\text{abs}} \\approx 189{,}5$ W : une perte de charge de $250$ Pa (filtres + batterie) justifie ici un ventilateur <strong>centrifuge</strong> plutôt qu\'un hélicoïde, qui ne serait pas capable de vaincre une telle résistance à ce débit.'
      },
      formulas: [
        '$P_{\\text{aer}} = \\Delta P \\times Q_v$ (puissance aéraulique, en W, avec $\\Delta P$ en Pa et $Q_v$ en m³/s)',
        '$P_{\\text{abs}} = P_{\\text{aer}}/\\eta$ (puissance absorbée, en W)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Deux technologies de ventilateur',
        title: 'Hélicoïde (faible ΔP) contre centrifuge (ΔP plus élevée)',
        description: 'Le domaine d\'emploi typique d\'un ventilateur hélicoïde se limite aux faibles pertes de charge, tandis que le ventilateur centrifuge couvre une plage de pertes de charge beaucoup plus large, au prix d\'un encombrement et d\'un coût généralement supérieurs.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="aer-graph-title aer-graph-desc">
            <title id="aer-graph-title">Domaines d'emploi compares helicoide et centrifuge</title>
            <desc id="aer-graph-desc">Graphique perte de charge en fonction du debit. Une bande basse et etroite en hauteur represente le domaine d'emploi du ventilateur helicoide, limite aux faibles pertes de charge. Une bande plus haute et plus large represente le domaine d'emploi du ventilateur centrifuge, capable de couvrir des pertes de charge nettement superieures.</desc>

            <line class="frame-line" x1="55" y1="220" x2="440" y2="220"></line>
            <line class="guide-line" x1="55" y1="20" x2="55" y2="220"></line>

            <!-- domaine helicoide -->
            <rect class="frame-line" x="70" y="185" width="200" height="30" fill="none"></rect>
            <text class="label-soft" x="170" y="204" text-anchor="middle">Hélicoïde</text>

            <!-- domaine centrifuge -->
            <rect class="frame-line" x="70" y="45" width="340" height="130" fill="none"></rect>
            <text class="label-soft" x="240" y="70" text-anchor="middle">Centrifuge</text>

            <text class="label-soft" x="245" y="235" text-anchor="middle">Débit Qv</text>
            <text class="label-soft" x="50" y="15" text-anchor="start">Perte de charge ΔP</text>
          </svg>
        `,
        notes: [
          'Le domaine du <strong>ventilateur hélicoïde</strong> reste limité aux faibles pertes de charge : au-delà, il ne parvient plus à maintenir le débit voulu.',
          'Le domaine du <strong>ventilateur centrifuge</strong> couvre une plage bien plus large, en débit comme en perte de charge.',
          'Le choix entre les deux dépend directement du réseau à desservir : longueur de gaine, nombre de filtres et batteries, présence de pièges à son.'
        ],
        reading: 'Compare la hauteur des deux domaines : plus la perte de charge du réseau est élevée, plus on sort du domaine d\'emploi de l\'hélicoïde pour entrer dans celui du centrifuge.',
        caption: 'Domaines d\'emploi comparés d\'un ventilateur hélicoïde et d\'un ventilateur centrifuge, selon débit et perte de charge.'
      },
      recap: [
        'Un réseau aéraulique combine <strong>gaines</strong>, <strong>registres</strong>, <strong>filtres</strong>, <strong>diffuseurs</strong> et <strong>pièges à son</strong>.',
        'Le <strong>ventilateur hélicoïde</strong> convient aux faibles pertes de charge ; le <strong>ventilateur centrifuge</strong> couvre une plage bien plus large.',
        'Puissance aéraulique utile : $P_{\\text{aer}} = \\Delta P \\times Q_v$, avec $\\Delta P$ en Pa et $Q_v$ en m³/s.',
        'Puissance réellement absorbée : $P_{\\text{abs}} = P_{\\text{aer}}/\\eta$, toujours supérieure à $P_{\\text{aer}}$.',
        'Le principe est rigoureusement identique à celui d\'un circulateur hydraulique (module B4-1) : seule la nature du fluide (air contre eau) et les unités ($\\Delta P$ en Pa plutôt qu\'en m CE) changent.'
      ],
      piege: 'Le piège classique est de vouloir réutiliser directement $\\rho \\times g \\times Q \\times H$ (formule hydraulique du module B4-1) pour un réseau d\'air : la perte de charge aéraulique se donne directement en <strong>pascals (Pa)</strong>, pas en mètres de colonne de fluide, donc la formule se simplifie en $P_{\\text{aer}} = \\Delta P \\times Q_v$ sans terme $\\rho \\times g$ séparé (il est déjà implicitement contenu dans le $\\Delta P$ exprimé en Pa). Ne pas non plus confondre le débit $Q_v$ en m³/s (utilisé dans la formule) avec le débit en m³/h couramment affiché sur les catalogues constructeurs — la conversion ($/3\\,600$) est indispensable avant tout calcul.'
    },

    quiz: [
      {
        q: 'Un ventilateur hélicoïde, comparé à un ventilateur centrifuge, est plutôt adapté à :',
        options: [
          'Des réseaux longs avec filtres et batteries, à perte de charge élevée',
          'Des applications à faible perte de charge, comme une extraction directe en façade',
          'Uniquement les réseaux d\'eau glacée',
          'Le dimensionnement d\'un vase d\'expansion'
        ],
        answer: 1,
        correction: 'Le ventilateur hélicoïde convient aux faibles pertes de charge ; dès que le réseau se complexifie (filtres, batteries, longueur), le ventilateur centrifuge devient nécessaire.'
      },
      {
        q: 'La formule $P_{\\text{aer}} = \\Delta P \\times Q_v$ donne :',
        options: [
          'La puissance absorbée directement, sans tenir compte du rendement',
          'La puissance aéraulique utile, réellement transmise à l\'air',
          'Le débit volumique du réseau',
          'La perte de charge totale du réseau'
        ],
        answer: 1,
        correction: 'Cette formule donne la puissance aéraulique utile ; la puissance électrique réellement absorbée s\'obtient en divisant par le rendement $\\eta$ du ventilateur.'
      },
      {
        q: 'Un piège à son, dans un réseau aéraulique, a pour fonction principale de :',
        options: [
          'Filtrer les particules de l\'air',
          'Atténuer le niveau sonore transmis par le réseau de gaines',
          'Augmenter le débit d\'air',
          'Remplacer un registre de réglage'
        ],
        answer: 1,
        correction: 'Le piège à son est garni d\'un matériau absorbant destiné à réduire la transmission acoustique dans le réseau de gaines, en complément du travail vu au module A7.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une CTA desservant un plateau de bureaux',
          'un réseau d\'extraction d\'une cuisine collective',
          'une VMC double flux d\'un bâtiment tertiaire',
          'un réseau de soufflage d\'une salle de classe'
        ]);
        const Qm3h = rand(600, 3000);
        const dP = rand(80, 350);
        const eta = randFloat(0.4, 0.65, 2);
        const Qs = Qm3h / 3600;
        const Paer = dP * Qs;
        const Pabs = parseFloat((Paer / eta).toFixed(1));
        return {
          statement: `Dans ${contexte}, le point de fonctionnement impose un débit $Q_v=${Qm3h}$ m³/h contre une perte de charge totale $\\Delta P=${dP}$ Pa. Le rendement global du ventilateur est $\\eta=${fr(eta, 2)}$.<br/><br/>Calcule la puissance absorbée $P_{\\text{abs}}$ de ce ventilateur (en W, arrondie à l'unité).`,
          answer: Math.round(Pabs),
          tolerance: 4,
          unit: 'W',
          hint: 'Convertis $Q_v$ en m³/s ($/3\\,600$), calcule $P_{\\text{aer}} = \\Delta P \\times Q_v$, puis divise par $\\eta$.',
          solution: [
            `Débit converti : $Q_v = ${Qm3h}/3\\,600 \\approx ${fr(Qs, 4)}$ m³/s.`,
            `$P_{\\text{aer}} = ${dP} \\times ${fr(Qs, 4)} \\approx ${fr(Paer, 1)}$ W.`,
            `$P_{\\text{abs}} = P_{\\text{aer}}/\\eta \\approx ${fr(Paer, 1)}/${fr(eta, 2)} \\approx ${fr(Pabs, 1)}$ W.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une CTA double flux dessert un bâtiment tertiaire avec un débit de soufflage $Q_v=2\\,400$ m³/h contre une perte de charge totale $\\Delta P=300$ Pa (gaines + filtres + batterie + récupérateur, module B2-1). Deux ventilateurs sont comparés : un modèle standard ($\\eta=0{,}45$) et un modèle à haut rendement, roue à aubes inclinées vers l\'arrière ($\\eta=0{,}68$).',
      tasks: [
        'Calculer la puissance aéraulique utile $P_{\\text{aer}}$ du réseau.',
        'Calculer la puissance absorbée $P_{\\text{abs}}$ pour le ventilateur standard.',
        'Calculer la puissance absorbée $P_{\\text{abs}}$ pour le ventilateur à haut rendement.',
        'Le bâtiment fonctionne $10$ h/jour, $250$ jours/an à ce point de fonctionnement. Calculer l\'économie annuelle d\'énergie électrique (en kWh) permise par le ventilateur à haut rendement.'
      ],
      solutions: [
        '$Q_v = 2\\,400/3\\,600 \\approx 0{,}667$ m³/s. $P_{\\text{aer}} = 300\\times0{,}667 \\approx 200{,}1$ W.',
        '$P_{\\text{abs,standard}} = 200{,}1/0{,}45 \\approx 444{,}7$ W.',
        '$P_{\\text{abs,haut rendement}} = 200{,}1/0{,}68 \\approx 294{,}3$ W.',
        'Écart de puissance : $444{,}7-294{,}3 = 150{,}4$ W. Fonctionnement annuel : $10\\times250=2\\,500$ h. Économie : $150{,}4\\times2\\,500 = 376\\,000$ Wh $\\approx 376$ kWh/an.'
      ],
      finalAnswer: 'Le ventilateur à haut rendement consomme environ $294$ W contre $445$ W pour le modèle standard, soit une économie d\'environ $376$ kWh par an pour cette CTA — un écart qui pèse directement sur la facture électrique du bâtiment tertiaire.'
    },

    evaluation: {
      title: 'Évaluation — Réseaux aérauliques',
      duration: '20 min',
      questions: [
        {
          statement: 'Un ventilateur fournit $Q_v=1\\,000$ m³/h contre $\\Delta P=180$ Pa. Calculer la puissance aéraulique $P_{\\text{aer}}$ (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 50,
          tolerance: 3,
          unit: 'W',
          points: 3,
          correction: '$Q_v=1\\,000/3\\,600\\approx0{,}278$ m³/s. $P_{\\text{aer}}=180\\times0{,}278\\approx50$ W.'
        },
        {
          statement: 'Pour cette puissance aéraulique, avec un rendement $\\eta=0{,}5$, calculer la puissance absorbée $P_{\\text{abs}}$ (en W, arrondie à l\'unité).',
          type: 'numeric',
          answer: 100,
          tolerance: 5,
          unit: 'W',
          points: 3,
          correction: '$P_{\\text{abs}}=50/0{,}5=100$ W.'
        },
        {
          statement: 'Un ventilateur centrifuge, comparé à un ventilateur hélicoïde, est mieux adapté aux réseaux à perte de charge élevée car :',
          type: 'multiple-choice',
          options: [
            'Sa roue à aubes accélère l\'air radialement, ce qui lui permet de vaincre des pertes de charge plus importantes',
            'Il ne consomme jamais d\'électricité',
            'Il ne peut fonctionner qu\'à très faible débit',
            'Il remplace systématiquement les filtres du réseau'
          ],
          answer: 0,
          points: 2,
          correction: 'La roue à aubes d\'un ventilateur centrifuge accélère l\'air radialement avant redirection, ce qui lui permet de développer une pression plus élevée et donc de vaincre des pertes de charge plus importantes qu\'un hélicoïde.'
        },
        {
          statement: 'Un registre, dans un réseau aéraulique, sert principalement à :',
          type: 'multiple-choice',
          options: [
            'Filtrer les poussières de l\'air',
            'Régler le débit d\'air dans une gaine, notamment pour l\'équilibrage du réseau',
            'Atténuer le niveau sonore',
            'Remplacer le ventilateur'
          ],
          answer: 1,
          points: 2,
          correction: 'Le registre est un organe de réglage de débit, manuel ou motorisé, utilisé pour équilibrer le réseau entre ses différentes branches.'
        },
        {
          statement: 'Pourquoi ne peut-on pas appliquer directement la formule hydraulique $P=\\rho \\times g \\times Q \\times H$ (module B4-1) à un réseau aéraulique ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'air n\'a pas de masse volumique',
            'Parce que la perte de charge aéraulique se donne déjà en pascals, unité de pression, ce qui simplifie directement la formule en $P_{\\text{aer}}=\\Delta P \\times Q_v$',
            'Parce que les ventilateurs n\'ont pas de rendement',
            'Parce que le débit d\'air ne peut jamais être converti en m³/s'
          ],
          answer: 1,
          points: 3,
          correction: 'La perte de charge d\'un réseau aéraulique est directement exprimée en Pa (contrairement à la hauteur manométrique hydraulique, en m de colonne d\'eau) : la formule se simplifie donc en $P_{\\text{aer}}=\\Delta P \\times Q_v$, sans terme $\\rho \\times g$ séparé.'
        }
      ]
    }
  });
