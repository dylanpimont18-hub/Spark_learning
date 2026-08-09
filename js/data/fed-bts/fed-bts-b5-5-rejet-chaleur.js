/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-5-rejet-chaleur.js
   BTS FED — S8-B5-5 Rejet de chaleur au condenseur — aérocondenseur, tour de
   refroidissement, condenseur évaporatif, approche et range
   Source (principes des systèmes de rejet de chaleur, approche 2-6°C, range 5-7°C) :
   https://energieplus-lesite.be/techniques/climatisation8/composants-installation-frigorifique/condenseurs-et-tours-de-refroidissement/
   (consulté 2026-08-03)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-5-rejet-chaleur',
    level: 3, subject: 'fed',
    icon: '🗼',
    title: 'Rejet de chaleur au condenseur',
    subtitle: 'Aérocondenseur, tour de refroidissement, condenseur évaporatif — approche et range',
    keywords: ['Condenseur', 'Tour de refroidissement', 'Aérocondenseur', 'Condenseur évaporatif', 'Approche', 'Range', 'Température humide'],
    physics: 'Au condenseur (module A5), le fluide frigorigène cède sa <strong>chaleur latente de condensation</strong>. Cette chaleur doit ensuite être <strong>rejetée vers l\'extérieur</strong> — vers l\'air ambiant ou vers de l\'eau. Le choix du système de rejet (aérocondenseur, tour de refroidissement, condenseur évaporatif) conditionne directement la <strong>performance</strong> et l\'<strong>encombrement</strong> de l\'installation frigorifique.',

    cours: {
      intro: 'Dans le cycle frigorifique étudié au module A5, le condenseur est l\'échangeur où le fluide frigorigène, comprimé et chaud, cède sa chaleur pour se liquéfier. Cette chaleur ne disparaît pas : elle doit être <strong>évacuée vers l\'extérieur</strong> du bâtiment.<br/><br/>Plusieurs technologies existent pour ce <strong>rejet de chaleur</strong>, avec des performances et des contraintes très différentes. Le choix se fait selon la puissance à rejeter, le climat local, la disponibilité en eau et les contraintes réglementaires (notamment sanitaires, pour les systèmes utilisant de l\'eau en circuit ouvert).<br/><br/>Deux grandeurs permettent de caractériser et comparer la <strong>performance thermique</strong> d\'un système de rejet à eau (tour de refroidissement, condenseur évaporatif) : l\'<strong>approche</strong> et le <strong>range</strong>.',
      definitions: [
        { term: 'Aérocondenseur', def: 'Système de rejet où le fluide frigorigène (ou l\'eau du circuit condenseur) cède sa chaleur directement à l\'<strong>air ambiant</strong>, à travers une batterie à ailettes ventilée, en <strong>circuit fermé</strong>. Solution simple et sans consommation d\'eau, mais dont la performance se dégrade fortement par forte chaleur (l\'air chaud absorbe moins bien la chaleur).' },
        { term: 'Tour de refroidissement ouverte', def: 'Système où l\'eau chaude issue du condenseur est pulvérisée au contact d\'un flux d\'air ; une <strong>fraction de l\'eau s\'évapore</strong>, ce qui refroidit le reste de l\'eau par prélèvement de sa <strong>chaleur latente de vaporisation</strong>. Très efficace, mais nécessite un traitement d\'eau rigoureux (risque de prolifération de la légionellose dans l\'eau stagnante et les aérosols).' },
        { term: 'Condenseur évaporatif', def: 'Système combinant les deux principes précédents : le fluide frigorigène circule dans un serpentin directement aspergé d\'eau et balayé par un flux d\'air, l\'évaporation partielle de l\'eau assurant le refroidissement. Plus compact qu\'une tour associée à un condenseur séparé.' },
        { term: 'Approche', def: 'Écart entre la température de l\'eau refroidie en sortie de tour et la température humide de l\'air ambiant : $\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air}$. Usuellement de $2$ à $6\\,°C$ : plus l\'approche est faible, plus la tour est performante (mais aussi plus grande et coûteuse).' },
        { term: 'Range (ou refroidissement)', def: 'Écart de température de l\'eau entre l\'entrée et la sortie de la tour : $\\text{Range} = T_{entrée\\,eau} - T_{sortie\\,eau}$. Usuellement de $5$ à $7\\,°C$, ce range dépend directement de la puissance à rejeter et du débit d\'eau en circulation.' }
      ],
      method: {
        title: 'Évaluer la performance d\'un système de rejet de chaleur à eau',
        steps: [
          '<strong>Identifier le type de système</strong> de rejet (aérocondenseur, tour ouverte, condenseur évaporatif) et les températures disponibles (entrée/sortie eau, température humide de l\'air).',
          '<strong>Relever ou estimer la température humide</strong> $T_{humide\\,air}$ de l\'air ambiant (donnée climatique locale, dépend de la température sèche et de l\'humidité relative).',
          '<strong>Calculer l\'approche</strong> $= T_{sortie\\,eau} - T_{humide\\,air}$ à partir de la température de l\'eau refroidie en sortie de tour.',
          '<strong>Calculer le range</strong> $= T_{entrée\\,eau} - T_{sortie\\,eau}$ à partir des températures d\'eau en entrée et en sortie.',
          '<strong>Comparer aux plages usuelles</strong> ($2$ à $6\\,°C$ pour l\'approche, $5$ à $7\\,°C$ pour le range) pour juger si la tour est correctement dimensionnée, en gardant à l\'esprit que ce sont des <strong>ordres de grandeur usuels</strong>, à confirmer sur la fiche constructeur.'
        ]
      },
      example: {
        statement: 'Une tour de refroidissement reçoit de l\'eau à $T_{entrée\\,eau} = 32\\,°C$ et la restitue à $T_{sortie\\,eau} = 27\\,°C$. La température humide de l\'air ambiant ce jour-là est $T_{humide\\,air} = 22\\,°C$.<br/><br/>Calculer l\'approche et le range de cette tour, et commenter.',
        steps: [
          'Approche $= T_{sortie\\,eau} - T_{humide\\,air} = 27 - 22 = 5\\,°C$.',
          'Range $= T_{entrée\\,eau} - T_{sortie\\,eau} = 32 - 27 = 5\\,°C$.'
        ],
        answer: 'L\'approche de $5\\,°C$ se situe dans la plage usuelle ($2$ à $6\\,°C$), tout comme le range de $5\\,°C$ (plage usuelle $5$ à $7\\,°C$) : cette tour de refroidissement fonctionne dans des conditions <strong>normales</strong> pour ce climat.'
      },
      formulas: [
        '$\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air}$ (usuellement $2$ à $6\\,°C$)',
        '$\\text{Range} = T_{entrée\\,eau} - T_{sortie\\,eau}$ (usuellement $5$ à $7\\,°C$)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Températures caractéristiques d\'une tour de refroidissement',
        title: 'Approche et range entre air humide et eau du circuit condenseur',
        description: 'Trois niveaux de température (entrée eau, sortie eau, air humide) permettent de lire directement deux écarts caractéristiques : le range, entre l\'entrée et la sortie d\'eau, et l\'approche, entre la sortie d\'eau et la température humide de l\'air ambiant.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="tour-graph-title tour-graph-desc">
            <title id="tour-graph-title">Approche et range d'une tour de refroidissement</title>
            <desc id="tour-graph-desc">Trois lignes horizontales representant, de haut en bas, la temperature d'entree eau, la temperature de sortie eau et la temperature humide de l'air. L'ecart vertical entre la premiere et la deuxieme ligne est appele range, l'ecart entre la deuxieme et la troisieme ligne est appele approche.</desc>

            <line class="guide-line" x1="90" y1="20" x2="90" y2="230"></line>
            <text class="tick-label" x="90" y="15" text-anchor="middle">T (°C)</text>
            <line class="frame-line" x1="50" y1="230" x2="440" y2="230"></line>

            <line class="curve-main" x1="90" y1="60" x2="400" y2="60"></line>
            <text class="label-soft" x="405" y="65" text-anchor="start">T entrée eau</text>

            <line class="curve-main" x1="90" y1="120" x2="400" y2="120"></line>
            <text class="label-soft" x="405" y="125" text-anchor="start">T sortie eau</text>

            <line class="curve-main" x1="90" y1="180" x2="400" y2="180"></line>
            <text class="label-soft" x="405" y="185" text-anchor="start">T humide (air)</text>

            <line class="guide-line" x1="150" y1="60" x2="150" y2="120"></line>
            <text class="annotation-label" x="158" y="95" text-anchor="start">Range</text>

            <line class="guide-line" x1="250" y1="120" x2="250" y2="180"></line>
            <text class="annotation-label" x="258" y="155" text-anchor="start">Approche</text>
          </svg>
        `,
        notes: [
          'Le <strong>range</strong> (écart entrée/sortie eau) dépend surtout de la <strong>puissance</strong> à rejeter et du débit d\'eau en circulation dans la tour.',
          'L\'<strong>approche</strong> (écart sortie eau/air humide) traduit l\'efficacité propre de l\'échange tour-air : plus elle est faible, plus la tour est performante, mais aussi plus volumineuse.',
          'La température humide de l\'air, et non la température sèche, est la référence pertinente car c\'est elle qui limite le <strong>potentiel de refroidissement par évaporation</strong>.'
        ],
        reading: 'Repère les trois lignes horizontales de haut en bas (entrée eau, sortie eau, air humide), puis lis les deux écarts verticaux annotés : range en haut, approche en bas.',
        caption: 'Lecture des écarts de température caractéristiques d\'une tour de refroidissement : range et approche.'
      },
      recap: [
        'Le condenseur (module A5) doit céder sa chaleur vers l\'extérieur : plusieurs technologies de <strong>rejet de chaleur</strong> existent.',
        'L\'<strong>aérocondenseur</strong> rejette vers l\'air en circuit fermé, simple mais moins performant par forte chaleur.',
        'La <strong>tour de refroidissement ouverte</strong> exploite l\'évaporation partielle de l\'eau (chaleur latente) — très efficace mais à surveiller sanitairement (légionellose).',
        'Le <strong>condenseur évaporatif</strong> combine les deux principes dans un seul échangeur compact.',
        'Deux indicateurs de performance : l\'<strong>approche</strong> ($T_{sortie\\,eau} - T_{humide\\,air}$, $2$-$6\\,°C$) et le <strong>range</strong> ($T_{entrée\\,eau} - T_{sortie\\,eau}$, $5$-$7\\,°C$).'
      ],
      piege: 'Les valeurs usuelles d\'approche ($2$ à $6\\,°C$) et de range ($5$ à $7\\,°C$) sont des <strong>ordres de grandeur courants</strong>, pas des constantes physiques universelles : elles dépendent du modèle de tour, de son dimensionnement et des conditions climatiques réelles. Elles doivent toujours être vérifiées sur la <strong>fiche technique du constructeur</strong> de la tour retenue. Attention également à ne pas confondre <strong>température humide</strong> (obtenue avec un thermomètre à bulbe humide, liée à l\'humidité de l\'air) et <strong>température sèche</strong> (température ambiante classique) : c\'est bien la température humide qui sert de référence pour l\'approche.'
    },

    quiz: [
      {
        q: 'Le principe de refroidissement d\'une tour de refroidissement ouverte repose sur :',
        options: [
          'La compression mécanique de l\'air',
          'L\'évaporation partielle de l\'eau, qui refroidit le reste de l\'eau par prélèvement de chaleur latente',
          'Le rayonnement thermique direct vers le ciel nocturne',
          'La condensation de l\'humidité de l\'air sur les ailettes'
        ],
        answer: 1,
        correction: 'Une fraction de l\'eau s\'évapore au contact de l\'air ; cette évaporation prélève de la chaleur latente sur le reste de l\'eau, qui se retrouve donc refroidi.'
      },
      {
        q: 'L\'approche d\'une tour de refroidissement se calcule par :',
        options: [
          '$T_{entrée\\,eau} - T_{sortie\\,eau}$',
          '$T_{sortie\\,eau} - T_{humide\\,air}$',
          '$T_{humide\\,air} - T_{entrée\\,eau}$',
          '$T_{entrée\\,eau} + T_{sortie\\,eau}$'
        ],
        answer: 1,
        correction: 'L\'approche compare la température d\'eau obtenue en sortie de tour à la température humide de l\'air ambiant : $\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air}$.'
      },
      {
        q: 'Comparé à une tour de refroidissement ouverte, un aérocondenseur :',
        options: [
          'Consomme davantage d\'eau et nécessite un traitement anti-légionellose',
          'Est plus performant par forte chaleur',
          'Fonctionne en circuit fermé, sans consommation d\'eau, mais avec des performances qui se dégradent par forte chaleur',
          'Ne peut être utilisé qu\'en climat froid'
        ],
        answer: 2,
        correction: 'L\'aérocondenseur rejette la chaleur directement vers l\'air ambiant en circuit fermé : il ne consomme pas d\'eau, mais ses performances chutent quand l\'air extérieur est chaud.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const calcType = pick(['approche', 'range']);
        const contexte = pick([
          'une tour de refroidissement desservant un groupe froid de bureaux',
          'une tour de refroidissement associée à un condenseur évaporatif industriel',
          'une installation de climatisation centralisée d\'un centre commercial',
          'une tour de refroidissement en toiture d\'un hôpital'
        ]);

        if (calcType === 'approche') {
          const Thumide = randFloat(16, 24, 1);
          const approcheVal = pick([2, 3, 4, 5, 6]);
          const Tsortie = parseFloat((Thumide + approcheVal).toFixed(1));
          return {
            statement: `Sur ${contexte}, la température humide de l'air ambiant est $T_{humide\\,air} = ${fr(Thumide, 1)}\\,°C$. L'eau ressort de la tour à $T_{sortie\\,eau} = ${fr(Tsortie, 1)}\\,°C$.<br/><br/>Calcule l'approche de cette tour (en °C).`,
            answer: approcheVal,
            tolerance: 0.3,
            unit: '°C',
            hint: 'L\'approche compare la température de sortie de l\'eau à la température humide de l\'air : $\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air}$.',
            solution: [
              `$\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air} = ${fr(Tsortie, 1)} - ${fr(Thumide, 1)} = ${approcheVal}\\,°C$.`,
              `Cette valeur se situe dans la plage usuelle de $2$ à $6\\,°C$ pour une tour correctement dimensionnée.`
            ]
          };
        }

        const Tsortie = randFloat(25, 30, 1);
        const rangeVal = pick([5, 6, 7]);
        const Tentree = parseFloat((Tsortie + rangeVal).toFixed(1));
        return {
          statement: `Sur ${contexte}, l'eau entre dans la tour à $T_{entrée\\,eau} = ${fr(Tentree, 1)}\\,°C$ et en ressort à $T_{sortie\\,eau} = ${fr(Tsortie, 1)}\\,°C$.<br/><br/>Calcule le range (refroidissement) de cette tour (en °C).`,
          answer: rangeVal,
          tolerance: 0.3,
          unit: '°C',
          hint: 'Le range compare les températures d\'eau en entrée et en sortie de tour : $\\text{Range} = T_{entrée\\,eau} - T_{sortie\\,eau}$.',
          solution: [
            `$\\text{Range} = T_{entrée\\,eau} - T_{sortie\\,eau} = ${fr(Tentree, 1)} - ${fr(Tsortie, 1)} = ${rangeVal}\\,°C$.`,
            `Cette valeur se situe dans la plage usuelle de $5$ à $7\\,°C$ pour une tour correctement dimensionnée.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un groupe frigorifique industriel rejette sa chaleur au condenseur vers une tour de refroidissement ouverte. Un jour de forte chaleur, la température humide de l\'air ambiant est mesurée à $T_{humide\\,air} = 23\\,°C$. Le constructeur de la tour annonce une approche nominale de $4\\,°C$ et un range nominal de $6\\,°C$.',
      tasks: [
        'En déduire la température de sortie d\'eau $T_{sortie\\,eau}$ attendue en sortie de tour.',
        'En déduire la température d\'entrée d\'eau $T_{entrée\\,eau}$ (température de l\'eau chaude issue du condenseur).',
        'Un relevé sur site indique en réalité $T_{sortie\\,eau} = 30\\,°C$. Recalculer l\'approche réelle et comparer à la valeur nominale.',
        'Proposer une explication possible à cet écart et une action corrective envisageable.'
      ],
      solutions: [
        '$T_{sortie\\,eau} = T_{humide\\,air} + \\text{Approche} = 23 + 4 = 27\\,°C$.',
        '$T_{entrée\\,eau} = T_{sortie\\,eau} + \\text{Range} = 27 + 6 = 33\\,°C$.',
        'Approche réelle $= 30 - 23 = 7\\,°C$, nettement supérieure à l\'approche nominale de $4\\,°C$ : la tour est moins performante que prévu dans ces conditions.',
        'Cet écart peut venir d\'un <strong>encrassement</strong> du corps d\'échange, d\'un <strong>débit d\'air insuffisant</strong> (ventilateur défaillant ou mal réglé), ou d\'une <strong>surcharge thermique</strong> (puissance à rejeter supérieure à celle prévue à la conception) ; une action corrective consiste à contrôler et nettoyer le corps de tour, puis à vérifier le débit d\'air du ventilateur.'
      ],
      finalAnswer: 'Dans les conditions nominales, la tour devrait produire de l\'eau à $27\\,°C$ pour une entrée à $33\\,°C$ ; l\'écart observé sur site (approche de $7\\,°C$ au lieu de $4\\,°C$) signale une perte de performance à investiguer (encrassement, débit d\'air, surcharge).'
    },

    evaluation: {
      title: 'Évaluation — Rejet de chaleur au condenseur',
      duration: '20 min',
      questions: [
        {
          statement: 'Une tour de refroidissement reçoit de l\'eau à $T_{entrée\\,eau} = 34\\,°C$ pour une sortie à $T_{sortie\\,eau} = 28\\,°C$. Calculer le range (en °C).',
          type: 'numeric',
          answer: 6,
          tolerance: 0.3,
          unit: '°C',
          points: 3,
          correction: '$\\text{Range} = 34 - 28 = 6\\,°C$, dans la plage usuelle de $5$ à $7\\,°C$.'
        },
        {
          statement: 'Pour cette même tour, la température humide de l\'air est $T_{humide\\,air} = 24\\,°C$. Calculer l\'approche (en °C).',
          type: 'numeric',
          answer: 4,
          tolerance: 0.3,
          unit: '°C',
          points: 3,
          correction: '$\\text{Approche} = T_{sortie\\,eau} - T_{humide\\,air} = 28 - 24 = 4\\,°C$, dans la plage usuelle de $2$ à $6\\,°C$.'
        },
        {
          statement: 'Un condenseur évaporatif se distingue d\'une tour de refroidissement classique associée à un condenseur séparé par :',
          type: 'multiple-choice',
          options: [
            'L\'absence totale d\'évaporation d\'eau',
            'La combinaison, dans un seul échangeur compact, du serpentin frigorifique et de l\'aspersion d\'eau/ventilation d\'air',
            'Un fonctionnement exclusivement en circuit fermé sans eau',
            'Une utilisation réservée aux très petites puissances résidentielles'
          ],
          answer: 1,
          points: 2,
          correction: 'Le condenseur évaporatif intègre directement le serpentin de fluide frigorigène dans le flux d\'eau aspergée et d\'air, dans un même appareil compact.'
        },
        {
          statement: 'Pourquoi les tours de refroidissement ouvertes nécessitent-elles un traitement d\'eau et une surveillance particulière ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'eau s\'évapore trop rapidement pour être remplacée',
            'Parce que le contact eau/air en circuit ouvert favorise la prolifération de bactéries comme la légionelle',
            'Parce que l\'eau doit être chauffée avant d\'entrer dans la tour',
            'Parce que la tour fonctionne uniquement en hiver'
          ],
          answer: 1,
          points: 2,
          correction: 'Le contact direct entre l\'eau, l\'air et les aérosols générés en circuit ouvert crée un environnement propice au développement de légionelles, d\'où l\'obligation d\'un traitement d\'eau (biocide, contrôle régulier).'
        },
        {
          statement: 'Un aérocondenseur perd en performance lorsque la température de l\'air extérieur augmente fortement. Pourquoi ?',
          type: 'multiple-choice',
          options: [
            'Parce que l\'air chaud transporte moins bien la chaleur cédée par le fluide, réduisant l\'écart de température moteur de l\'échange',
            'Parce que le ventilateur s\'arrête automatiquement au-delà de 25 °C',
            'Parce que l\'air chaud fait geler le fluide frigorigène',
            'Parce que l\'aérocondenseur ne fonctionne qu\'en circuit ouvert'
          ],
          answer: 0,
          points: 2,
          correction: 'Plus l\'air ambiant est chaud, plus l\'écart de température entre le fluide à condenser et l\'air se réduit, ce qui diminue l\'efficacité de l\'échange thermique et donc la performance du condenseur.'
        }
      ]
    }
  });
