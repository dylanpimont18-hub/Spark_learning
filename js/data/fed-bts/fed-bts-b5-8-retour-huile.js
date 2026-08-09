/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-8-retour-huile.js
   BTS FED — S8-B5-8 Retour d'huile — lubrification compresseur, pièges à huile, colonnes montantes
   Sources :
   - https://fluidsandlubricants.com/2021/07/27/presence-de-lhuile-dans-le-systeme-frigorifique-ou-et-comment/
     (consulté 2026-08-03) : l'huile de lubrification du compresseur est partiellement entraînée par le
     fluide frigorigène dans le circuit, typiquement 1 à 3 % en masse selon le fluide et les conditions.
   - https://colddistribution.fr/content/673-isolation-des-tuyauteries-frigorifiques-et-piegeage-dhuile
     (consulté 2026-08-03) : sur les colonnes montantes, on installe des pièges à huile (siphons) tous
     les 3 mètres pour garantir le retour d'huile au compresseur même à charge partielle.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-8-retour-huile',
    level: 3, subject: 'fed',
    icon: '🛢️',
    title: 'Retour d\'huile',
    subtitle: 'Lubrification du compresseur, entraînement par le fluide, pièges à huile sur colonnes montantes',
    keywords: ['Retour d\'huile', 'Piège à huile', 'Colonne montante', 'Lubrification compresseur', 'Siphon'],
    physics: 'Un compresseur frigorifique a besoin d\'être en permanence <strong>lubrifié</strong> par une huile qui circule dans son carter — mais cette huile ne reste pas sagement à l\'intérieur : elle est partiellement entraînée par le fluide frigorigène et part se promener dans tout le circuit, avant de devoir impérativement <strong>revenir</strong> au compresseur.',

    cours: {
      intro: 'Le compresseur d\'une installation frigorifique contient une réserve d\'<strong>huile de lubrification</strong>, indispensable pour réduire les frottements entre les pièces mécaniques mobiles (pistons, paliers, vis selon la technologie) et évacuer une partie de la chaleur produite.<br/><br/>Cette huile n\'est cependant pas totalement confinée dans le carter du compresseur : une partie est <strong>entraînée par le fluide frigorigène</strong> en circulation, sous forme de fines gouttelettes mélangées au gaz refoulé. Cette quantité entraînée reste faible — de l\'ordre de <strong>1 à 3 % en masse</strong> selon le fluide frigorigène utilisé et les conditions de fonctionnement — mais elle doit absolument <strong>revenir au compresseur</strong>, faute de quoi le niveau d\'huile du carter baisse progressivement, jusqu\'à un manque de lubrification qui finit par endommager mécaniquement le compresseur.<br/><br/>Ce retour d\'huile est globalement assuré par la <strong>vitesse du fluide frigorigène</strong> dans les tuyauteries, qui « pousse » les gouttelettes d\'huile le long du circuit. Le problème se pose surtout sur les <strong>colonnes montantes</strong> : des tronçons de tuyauterie verticaux (par exemple sur l\'aspiration, entre un évaporateur situé plus bas et le compresseur situé plus haut), où l\'huile — plus dense que le fluide frigorigène liquide ou gazeux — doit être « portée » vers le haut par le gaz. À <strong>charge partielle</strong> (fonctionnement réduit du compresseur), la vitesse du gaz diminue, et cette vitesse peut devenir insuffisante pour entraîner l\'huile sur toute la hauteur de la colonne : l\'huile risque alors de retomber par gravité, et de s\'accumuler dans le bas de la colonne au lieu de revenir au compresseur.<br/><br/>La solution consiste à installer des <strong>pièges à huile (siphons)</strong> à intervalles réguliers sur les colonnes montantes, typiquement <strong>tous les 3 mètres</strong>. Chaque piège accumule une petite quantité d\'huile, puis la relâche par « bouchons » successifs entraînés par le gaz vers l\'étage suivant, plutôt que de laisser l\'huile retomber sur toute la hauteur en cas de vitesse insuffisante. Le retour d\'huile se fait ainsi par étapes, de piège en piège, jusqu\'au compresseur.',
      definitions: [
        { term: 'Retour d\'huile', def: 'Phénomène par lequel l\'huile de lubrification, entraînée hors du carter par le fluide frigorigène en circulation, doit revenir au compresseur pour éviter un manque de lubrification.' },
        { term: 'Colonne montante', def: 'Tronçon de tuyauterie vertical (souvent côté aspiration) où le fluide frigorigène — et l\'huile qu\'il entraîne — doit être « poussé » vers le haut par la vitesse du gaz.' },
        { term: 'Piège à huile (siphon)', def: 'Dispositif installé sur une colonne montante qui accumule localement l\'huile puis la relâche par bouchons successifs, pour garantir son retour au compresseur même à charge partielle (vitesse de gaz réduite).' },
        { term: 'Charge partielle', def: 'Régime de fonctionnement du compresseur à puissance réduite par rapport à sa pleine charge, qui s\'accompagne d\'une vitesse de fluide plus faible dans les tuyauteries.' }
      ],
      method: {
        title: 'Déterminer le nombre de pièges à huile nécessaires sur une colonne montante',
        steps: [
          '<strong>Identifier</strong> les colonnes montantes du circuit (tronçons verticaux, généralement côté aspiration, entre un équipement bas et le compresseur situé plus haut).',
          '<strong>Relever la hauteur</strong> $H$ (en mètres) de la colonne montante concernée.',
          '<strong>Appliquer la règle usuelle</strong> d\'un piège à huile tous les $3$ m de hauteur : $n = \\lceil H/3 \\rceil$ (arrondi à l\'entier supérieur).',
          '<strong>Positionner</strong> les pièges à intervalles réguliers sur la hauteur de la colonne, en particulier avant tout changement de section ou avant l\'entrée au compresseur.',
          '<strong>Vérifier</strong> que le retour d\'huile reste assuré même en fonctionnement à charge partielle, situation la plus défavorable pour la vitesse du gaz.'
        ]
      },
      example: {
        statement: 'Une chambre froide négative est installée au sous-sol d\'un bâtiment, tandis que le groupe de condensation (avec compresseur) est positionné en toiture. La colonne montante d\'aspiration qui relie l\'évaporateur au compresseur mesure $H=11$ m de hauteur.<br/><br/>Combien de pièges à huile faut-il prévoir sur cette colonne montante ?',
        steps: [
          'Application de la règle d\'un piège tous les $3$ m : $H/3 = 11/3 \\approx 3{,}67$.',
          'On arrondit à l\'entier <strong>supérieur</strong> (un tronçon entamé nécessite tout de même son piège) : $n = 4$.'
        ],
        answer: 'Il faut prévoir <strong>$4$ pièges à huile</strong> sur cette colonne montante de $11$ m, répartis à intervalles réguliers, pour garantir le retour d\'huile au compresseur même à charge partielle.'
      },
      formulas: [
        '$n = \\lceil H/3 \\rceil$ (nombre de pièges à huile sur une colonne montante, avec $H$ la hauteur en mètres, arrondi à l\'entier supérieur)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Colonne montante et pièges à huile',
        title: 'Le retour d\'huile étagé sur une colonne montante',
        description: 'Sur une colonne montante d\'aspiration, l\'huile entraînée par le fluide frigorigène est relayée de piège en piège plutôt que d\'être poussée d\'un seul tenant sur toute la hauteur.',
        svg: `
          <svg viewBox="0 0 300 300" role="img" aria-labelledby="huile8-graph-title huile8-graph-desc">
            <title id="huile8-graph-title">Colonne montante d'aspiration avec pieges a huile etages</title>
            <desc id="huile8-graph-desc">Une tuyauterie verticale relie un evaporateur en bas a un compresseur en haut ; trois pieges a huile (siphons) sont espaces regulierement le long de la colonne, tous les trois metres environ.</desc>

            <rect class="frame-line" x="110" y="240" width="80" height="40" fill="none"></rect>
            <text class="label-soft" x="150" y="265" text-anchor="middle">Évaporateur</text>

            <rect class="frame-line" x="110" y="20" width="80" height="40" fill="none"></rect>
            <text class="label-soft" x="150" y="45" text-anchor="middle">Compresseur</text>

            <line class="curve-main" x1="150" y1="240" x2="150" y2="60"></line>

            <circle class="frame-line" cx="150" cy="190" r="12" fill="none"></circle>
            <circle class="frame-line" cx="150" cy="140" r="12" fill="none"></circle>
            <circle class="frame-line" cx="150" cy="90" r="12" fill="none"></circle>

            <text class="annotation-label" x="215" y="194">Piège n°1</text>
            <text class="annotation-label" x="215" y="144">Piège n°2</text>
            <text class="annotation-label" x="215" y="94">Piège n°3</text>

            <line class="guide-line" x1="60" y1="190" x2="60" y2="240"></line>
            <line class="guide-line" x1="60" y1="140" x2="60" y2="190"></line>
            <text class="tick-label" x="40" y="220" text-anchor="middle">3 m</text>
            <text class="tick-label" x="40" y="170" text-anchor="middle">3 m</text>
          </svg>
        `,
        notes: [
          'La colonne montante relie un <strong>évaporateur</strong> (bas) à un <strong>compresseur</strong> (haut), en général côté aspiration.',
          'Des <strong>pièges à huile</strong> sont espacés régulièrement (environ tous les $3$ m) sur toute la hauteur.',
          'Chaque piège relaie l\'huile vers l\'étage suivant, plutôt que de compter sur une seule poussée du gaz sur toute la hauteur.'
        ],
        reading: 'Suis la colonne de bas en haut : l\'huile entraînée par le gaz est relayée de piège en piège jusqu\'au compresseur.',
        caption: 'Le retour d\'huile sur une colonne montante se fait par étapes successives, via des pièges espacés régulièrement.'
      },
      recap: [
        'L\'huile de lubrification du compresseur est <strong>partiellement entraînée</strong> par le fluide frigorigène en circulation (typiquement $1$ à $3\\,\\%$ en masse).',
        'Cette huile doit impérativement <strong>revenir au compresseur</strong>, sous peine de manque de lubrification et de casse mécanique à terme.',
        'Le retour d\'huile est plus difficile sur les <strong>colonnes montantes</strong> (tronçons verticaux), où le gaz doit « pousser » l\'huile vers le haut.',
        'À <strong>charge partielle</strong>, la vitesse du gaz diminue et peut devenir insuffisante pour entraîner l\'huile sur toute la hauteur.',
        'Des <strong>pièges à huile (siphons)</strong> sont installés tous les $3$ m environ sur les colonnes montantes : $n = \\lceil H/3 \\rceil$.'
      ],
      piege: 'Le piège classique est de penser que le retour d\'huile n\'est un enjeu qu\'au démarrage ou à pleine charge du compresseur. C\'est en réalité à <strong>charge partielle</strong>, quand la vitesse du gaz est la plus faible, que le risque de rétention d\'huile dans une colonne montante est maximal — c\'est précisément pour cette situation défavorable que les pièges à huile sont dimensionnés, et non pour le seul régime nominal.'
    },

    quiz: [
      {
        q: 'Pourquoi l\'huile de lubrification du compresseur se retrouve-t-elle en circulation dans le reste du circuit frigorifique ?',
        options: [
          'Parce qu\'elle est volontairement injectée dans l\'évaporateur pour le lubrifier',
          'Parce qu\'elle est partiellement entraînée par le fluide frigorigène en circulation, sous forme de gouttelettes',
          'Parce que le condenseur produit de l\'huile par condensation',
          'Parce que l\'huile est un composant du fluide frigorigène lui-même'
        ],
        answer: 1,
        correction: 'L\'huile de lubrification est partiellement entraînée hors du carter par le fluide frigorigène refoulé (typiquement 1 à 3 % en masse), et doit ensuite revenir au compresseur pour ne pas créer de manque de lubrification.'
      },
      {
        q: 'Sur une colonne montante côté aspiration, le retour d\'huile devient difficile principalement :',
        options: [
          'Quand le compresseur fonctionne à pleine charge',
          'Quand la vitesse du gaz diminue, en particulier à charge partielle',
          'Quand la température ambiante augmente',
          'Quand le fluide frigorigène est remplacé par de l\'air'
        ],
        answer: 1,
        correction: 'À charge partielle, la vitesse du fluide frigorigène dans la tuyauterie diminue, ce qui peut la rendre insuffisante pour entraîner l\'huile — plus dense — sur toute la hauteur de la colonne montante.'
      },
      {
        q: 'Le rôle d\'un piège à huile (siphon) installé sur une colonne montante est de :',
        options: [
          'Filtrer les impuretés du fluide frigorigène',
          'Accumuler localement l\'huile puis la relâcher par bouchons successifs vers l\'étage suivant',
          'Réguler la pression d\'évaporation',
          'Remplacer le détendeur sur cette portion du circuit'
        ],
        answer: 1,
        correction: 'Un piège à huile retient une petite quantité d\'huile, qui est ensuite relâchée par bouchons successifs entraînés par le gaz, ce qui permet un retour d\'huile étagé plutôt qu\'une seule poussée sur toute la hauteur.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chambre froide négative installée au sous-sol, avec le groupe de condensation en toiture',
          'un immeuble de bureaux dont la centrale frigorifique dessert des étages supérieurs',
          'une installation industrielle sur plusieurs niveaux, avec un compresseur en local technique élevé',
          'un supermarché dont les meubles frigorifiques sont reliés à une centrale située en toiture'
        ]);
        const H = pick([4, 5, 7, 8, 10, 13, 15]);
        const n = Math.ceil(H / 3);
        return {
          statement: `Dans ${contexte}, la colonne montante d'aspiration reliant l'évaporateur au compresseur mesure $H=${H}$ m de hauteur.<br/><br/>En appliquant la règle usuelle d'un piège à huile tous les $3$ m, combien de pièges à huile faut-il prévoir sur cette colonne montante ?`,
          answer: n,
          tolerance: 0,
          unit: 'piège(s)',
          hint: 'Applique $n = \\lceil H/3 \\rceil$ (arrondi à l\'entier supérieur).',
          solution: [
            `$H/3 = ${H}/3 \\approx ${fr(H / 3, 2)}$.`,
            `On arrondit à l'entier supérieur : $n = ${n}$ pièges à huile.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un exploitant frigoriste doit équiper une installation industrielle dont la colonne montante d\'aspiration mesure $H=17$ m de hauteur, entre une chambre froide en sous-sol et un compresseur situé en toiture. L\'installation fonctionnera fréquemment à charge partielle en dehors des pics d\'activité.',
      tasks: [
        'Expliquer pourquoi une colonne montante de cette hauteur pose un risque particulier pour le retour d\'huile.',
        'Calculer le nombre de pièges à huile à installer, en appliquant la règle d\'un piège tous les $3$ m.',
        'Expliquer pourquoi le fonctionnement fréquent à charge partielle renforce la nécessité de ces pièges.',
        'Si l\'installation ne fonctionnait qu\'à pleine charge en permanence, la problématique de retour d\'huile disparaîtrait-elle totalement ? Justifier.'
      ],
      solutions: [
        'Sur une colonne montante, l\'huile entraînée par le fluide frigorigène doit être « poussée » vers le haut par la vitesse du gaz ; plus la colonne est haute, plus le trajet à parcourir contre la gravité est long, et plus le risque que l\'huile retombe avant d\'atteindre le sommet est important.',
        '$H/3 = 17/3 \\approx 5{,}67$, arrondi à l\'entier supérieur : $n = 6$ pièges à huile.',
        'À charge partielle, la vitesse du fluide frigorigène diminue, ce qui réduit sa capacité à entraîner l\'huile ; les pièges permettent alors un retour étagé (piège par piège) même lorsque la vitesse du gaz seule serait insuffisante sur toute la hauteur.',
        'Non : même à pleine charge, une part d\'huile est toujours entraînée par le fluide frigorigène et doit revenir au compresseur ; les pièges restent utiles pour sécuriser ce retour à tout régime, la charge partielle étant seulement la situation la plus défavorable, pas la seule concernée.'
      ],
      finalAnswer: 'Il faut prévoir $6$ pièges à huile sur cette colonne montante de $17$ m ; leur rôle est d\'autant plus important que l\'installation fonctionnera souvent à charge partielle, régime où la vitesse du gaz est la plus faible pour entraîner l\'huile.'
    },

    evaluation: {
      title: 'Évaluation — Retour d\'huile',
      duration: '15 min',
      questions: [
        {
          statement: 'Une colonne montante d\'aspiration mesure $H=8$ m. Combien de pièges à huile faut-il prévoir, à raison d\'un piège tous les $3$ m ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: 'piège(s)',
          points: 3,
          correction: '$H/3 = 8/3 \\approx 2{,}67$, arrondi à l\'entier supérieur : $n=3$ pièges à huile.'
        },
        {
          statement: 'L\'huile entraînée hors du carter du compresseur par le fluide frigorigène représente typiquement :',
          type: 'multiple-choice',
          options: [
            '$1$ à $3\\,\\%$ en masse',
            '$20$ à $30\\,\\%$ en masse',
            '$50\\,\\%$ en masse',
            'La totalité de l\'huile du carter à chaque cycle'
          ],
          answer: 0,
          points: 2,
          correction: 'La quantité d\'huile entraînée par le fluide frigorigène reste faible, de l\'ordre de $1$ à $3\\,\\%$ en masse selon le fluide et les conditions de fonctionnement — mais elle doit néanmoins revenir au compresseur.'
        },
        {
          statement: 'Le retour d\'huile est le plus critique sur une colonne montante :',
          type: 'multiple-choice',
          options: [
            'À pleine charge du compresseur, quand la vitesse du gaz est maximale',
            'À charge partielle, quand la vitesse du gaz est réduite',
            'Uniquement à l\'arrêt du compresseur',
            'Uniquement sur la ligne liquide, jamais sur l\'aspiration'
          ],
          answer: 1,
          points: 2,
          correction: 'À charge partielle, la vitesse réduite du fluide frigorigène peut ne plus suffire à entraîner l\'huile sur toute la hauteur d\'une colonne montante, d\'où l\'importance des pièges à huile.'
        },
        {
          statement: 'À quoi sert un piège à huile (siphon) installé sur une colonne montante ?',
          type: 'multiple-choice',
          options: [
            'À filtrer le fluide frigorigène',
            'À accumuler puis relâcher l\'huile par bouchons successifs, assurant un retour étagé vers le compresseur',
            'À faire baisser la pression d\'évaporation',
            'À remplacer le rôle du détendeur'
          ],
          answer: 1,
          points: 3,
          correction: 'Le piège à huile retient une petite quantité d\'huile puis la relâche par bouchons entraînés par le gaz vers l\'étage suivant, garantissant le retour d\'huile même à vitesse de gaz réduite.'
        }
      ]
    }
  });
