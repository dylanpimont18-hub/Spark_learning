/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-10-tuyauteries-froid.js
   BTS FED — S8-B5-10 Tuyauteries frigorifiques — matériaux, calorifugeage, pente d'écoulement
   Source : pente usuelle des tuyauteries frigorifiques (ligne d'aspiration notamment) de 2 cm par mètre
   (soit 2 %) dans le sens de l'écoulement vers le compresseur, pour favoriser le retour d'huile —
   https://energieplus-lesite.be/concevoir/froid-alimentaire3/choisir-les-tuyauteries-des-installations-frigorifiques-d1/
   et http://froidclime.blogspot.com/2012/04/tuyauteries.html (consultés 2026-08-03).
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-10-tuyauteries-froid',
    level: 3, subject: 'fed',
    icon: '🔗',
    title: 'Tuyauteries frigorifiques',
    subtitle: 'Matériaux, calorifugeage, pente d\'écoulement vers le compresseur',
    keywords: ['Tuyauterie frigorifique', 'Cuivre', 'Calorifugeage', 'Pente d\'écoulement', 'Ligne d\'aspiration'],
    physics: 'Relier les composants d\'un circuit frigorifique ne se résume pas à souder des tubes bout à bout : le <strong>matériau</strong>, l\'<strong>isolation thermique</strong> et même la <strong>pente</strong> de la tuyauterie sont choisis pour garantir à la fois l\'efficacité énergétique et le bon retour d\'huile vers le compresseur.',

    cours: {
      intro: 'Les tuyauteries qui relient les différents composants d\'un circuit frigorifique (compresseur, condenseur, détendeur, évaporateur) sont, sur la grande majorité des installations de bâtiment, réalisées en <strong>cuivre</strong> : cuivre écroui (rigide ou en couronne) pour les petits diamètres, cuivre recuit ou brasé pour les diamètres plus importants. Sur les très grosses installations industrielles, on utilise plutôt de l\'<strong>acier</strong>, notamment pour des raisons de tenue mécanique et de coût sur de grandes longueurs.<br/><br/>Ces tuyauteries doivent être <strong>calorifugées</strong> (isolées thermiquement) sur la <strong>ligne d\'aspiration</strong> (entre l\'évaporateur et le compresseur), où le fluide frigorigène circule à basse température : sans isolation, l\'humidité de l\'air ambiant se condenserait sur le tube froid, avec un risque de gouttes d\'eau, de corrosion à terme, et une perte de performance énergétique (le fluide se réchaufferait avant d\'atteindre le compresseur). La <strong>ligne liquide</strong> (haute pression, fluide à une température plus proche de l\'ambiante) n\'a généralement pas besoin d\'une telle isolation contre la condensation, sauf en cas d\'exposition directe au rayonnement solaire, où un calorifugeage peut limiter un réchauffement indésirable du liquide.<br/><br/>Enfin, les tronçons <strong>horizontaux</strong> de tuyauterie doivent respecter une <strong>pente</strong> dans le sens de l\'écoulement vers le compresseur. Cette pente usuelle, de l\'ordre de <strong>$2$ cm par mètre (soit $2\\,\\%$)</strong>, favorise l\'entraînement de l\'huile par gravité en complément de la vitesse du gaz — un enjeu directement lié au retour d\'huile étudié dans le module B5-8. Une tuyauterie horizontale posée à plat, sans pente, ou pire, en contre-pente, risquerait de créer des points bas où l\'huile s\'accumule au lieu de revenir au compresseur.',
      definitions: [
        { term: 'Calorifugeage', def: 'Isolation thermique d\'une tuyauterie, destinée ici à éviter la condensation de l\'humidité de l\'air ambiant sur un tube froid (ligne d\'aspiration) et à limiter les pertes thermiques.' },
        { term: 'Ligne d\'aspiration', def: 'Tronçon de tuyauterie qui relie la sortie de l\'évaporateur à l\'entrée du compresseur, parcouru par le fluide frigorigène à l\'état gazeux et à basse pression/température.' },
        { term: 'Ligne liquide', def: 'Tronçon de tuyauterie qui relie la sortie du condenseur (ou du récepteur) à l\'entrée du détendeur, parcouru par le fluide frigorigène à l\'état liquide et à haute pression.' },
        { term: 'Pente d\'écoulement', def: 'Inclinaison donnée à un tronçon horizontal de tuyauterie dans le sens de l\'écoulement vers le compresseur, favorisant l\'entraînement de l\'huile par gravité (usuellement $2$ cm/m, soit $2\\,\\%$).' }
      ],
      method: {
        title: 'Calculer le dénivelé d\'un tronçon horizontal de tuyauterie frigorifique',
        steps: [
          '<strong>Identifier</strong> le tronçon horizontal concerné (souvent en ligne d\'aspiration) et sa longueur $L$ (en mètres).',
          '<strong>Retenir la pente usuelle</strong> recommandée, de $2$ cm par mètre (soit $2\\,\\%$), dans le sens de l\'écoulement vers le compresseur.',
          '<strong>Calculer le dénivelé</strong> $\\Delta h = L \\times 0{,}02$ (en mètres), soit $\\Delta h_{cm} = L \\times 2$ en centimètres.',
          '<strong>Orienter</strong> la pente pour que l\'extrémité côté compresseur soit la plus basse, afin de favoriser l\'écoulement de l\'huile dans le bon sens.',
          '<strong>Vérifier</strong> qu\'aucun point bas intermédiaire ne crée une poche où l\'huile pourrait s\'accumuler sans repartir.'
        ]
      },
      example: {
        statement: 'Un tronçon horizontal de la ligne d\'aspiration, entre l\'évaporateur d\'une chambre froide et le mur où débute la colonne montante vers le compresseur, mesure $L=12$ m de long.<br/><br/>En appliquant la pente usuelle de $2$ cm par mètre, calculer le dénivelé total de ce tronçon.',
        steps: [
          'Dénivelé en mètres : $\\Delta h = L \\times 0{,}02 = 12 \\times 0{,}02 = 0{,}24$ m.',
          'Soit en centimètres : $\\Delta h_{cm} = 12 \\times 2 = 24$ cm.'
        ],
        answer: 'Le tronçon doit descendre de <strong>$24$ cm</strong> sur ses $12$ m de longueur, dans le sens de l\'écoulement vers le compresseur, pour respecter la pente usuelle de $2\\,\\%$ favorisant le retour d\'huile.'
      },
      formulas: [
        '$\\Delta h = L \\times 0{,}02$ (dénivelé en m, avec $L$ la longueur du tronçon horizontal en m, pour une pente usuelle de $2\\,\\%$)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Pente d\'une tuyauterie horizontale',
        title: 'Une pente légère, dans le sens de l\'écoulement vers le compresseur',
        description: 'Un tronçon horizontal de tuyauterie frigorifique doit descendre légèrement vers le compresseur, pour favoriser l\'entraînement de l\'huile par gravité en complément de la vitesse du gaz.',
        svg: `
          <svg viewBox="0 0 420 200" role="img" aria-labelledby="tuyau10-graph-title tuyau10-graph-desc">
            <title id="tuyau10-graph-title">Tuyauterie horizontale en pente vers le compresseur</title>
            <desc id="tuyau10-graph-desc">Une tuyauterie relie un evaporateur a gauche a un compresseur a droite, avec une legere pente descendante dans le sens de l'ecoulement vers le compresseur, annotee par sa longueur L et son denivele delta h.</desc>

            <rect class="frame-line" x="20" y="60" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="70" y="85" text-anchor="middle">Évaporateur</text>

            <rect class="frame-line" x="300" y="120" width="100" height="40" fill="none"></rect>
            <text class="label-soft" x="350" y="145" text-anchor="middle">Compresseur</text>

            <line class="curve-main" x1="120" y1="80" x2="300" y2="130"></line>

            <line class="guide-line" x1="120" y1="80" x2="300" y2="80"></line>
            <line class="guide-line" x1="300" y1="80" x2="300" y2="130"></line>

            <text class="tick-label" x="210" y="70" text-anchor="middle">L</text>
            <text class="tick-label" x="315" y="108" text-anchor="middle">Δh</text>

            <text class="annotation-label" x="150" y="115">Pente ≈ 2 % dans le sens</text>
            <text class="annotation-label" x="150" y="130">de l'écoulement</text>
          </svg>
        `,
        notes: [
          'La tuyauterie relie l\'<strong>évaporateur</strong> (gauche) au <strong>compresseur</strong> (droite), avec une pente descendante vers ce dernier.',
          'La longueur $L$ et le dénivelé $\\Delta h$ sont liés par la pente usuelle : $\\Delta h = L \\times 0{,}02$.',
          'Cette pente favorise l\'entraînement de l\'huile <strong>par gravité</strong>, en complément de la vitesse du gaz.'
        ],
        reading: 'Suis la ligne de gauche à droite : la légère descente vers le compresseur aide l\'huile à ne pas stagner en route.',
        caption: 'Une pente usuelle de $2\\,\\%$ dans le sens de l\'écoulement favorise le retour d\'huile sur les tronçons horizontaux.'
      },
      recap: [
        'Les tuyauteries frigorifiques sont réalisées en <strong>cuivre</strong> sur la majorité des installations de bâtiment, en <strong>acier</strong> sur les grosses installations industrielles.',
        'La <strong>ligne d\'aspiration</strong> doit être <strong>calorifugée</strong> pour éviter la condensation de l\'humidité ambiante sur le tube froid et limiter les pertes.',
        'La <strong>ligne liquide</strong> n\'a généralement pas besoin d\'isolation contre la condensation, sauf exposition directe au soleil.',
        'Les tronçons horizontaux doivent respecter une <strong>pente</strong> dans le sens de l\'écoulement vers le compresseur (usuellement $2$ cm/m, soit $2\\,\\%$), favorisant le retour d\'huile.',
        'Dénivelé d\'un tronçon horizontal : $\\Delta h = L \\times 0{,}02$.'
      ],
      piege: 'Le piège classique est de croire que le calorifugeage doit systématiquement couvrir <strong>toute</strong> la tuyauterie, ligne liquide comprise. En réalité, c\'est avant tout la <strong>ligne d\'aspiration</strong> (basse température) qui nécessite une isolation contre la condensation ; la ligne liquide reste généralement non calorifugée, sauf cas particulier d\'exposition au soleil. Autre piège fréquent : oublier que la pente doit être orientée dans le <strong>bon sens</strong> — vers le compresseur — et non l\'inverse, sous peine de favoriser l\'accumulation d\'huile au mauvais endroit plutôt que son retour.'
    },

    quiz: [
      {
        q: 'Sur la majorité des installations frigorifiques de bâtiment, les tuyauteries sont réalisées principalement en :',
        options: [
          'PVC',
          'Cuivre',
          'Béton',
          'Aluminium uniquement'
        ],
        answer: 1,
        correction: 'Le cuivre (écroui pour les petits diamètres, recuit ou brasé pour les plus gros) est le matériau majoritairement utilisé pour les tuyauteries frigorifiques de bâtiment ; l\'acier est réservé aux grosses installations industrielles.'
      },
      {
        q: 'Le calorifugeage de la ligne d\'aspiration sert principalement à :',
        options: [
          'Augmenter la pression du fluide frigorigène',
          'Éviter la condensation de l\'humidité ambiante sur le tube froid et limiter les pertes',
          'Faciliter le brasage des tuyauteries',
          'Remplacer la nécessité d\'une pente d\'écoulement'
        ],
        answer: 1,
        correction: 'Sans calorifugeage, l\'humidité de l\'air ambiant se condenserait sur le tube froid de la ligne d\'aspiration, avec un risque de corrosion à terme et une perte de performance énergétique.'
      },
      {
        q: 'Quel est le sens correct de la pente à donner à un tronçon horizontal de tuyauterie frigorifique ?',
        options: [
          'Aucune pente n\'est nécessaire si le diamètre est suffisant',
          'Une pente descendante dans le sens de l\'écoulement vers le compresseur, pour favoriser le retour d\'huile',
          'Une pente montante vers le compresseur, pour ralentir le fluide',
          'La pente n\'a d\'importance que sur la ligne liquide'
        ],
        answer: 1,
        correction: 'La pente usuelle (environ $2$ cm par mètre) doit descendre dans le sens de l\'écoulement vers le compresseur, ce qui favorise l\'entraînement de l\'huile par gravité en complément de la vitesse du gaz.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chambre froide dont la ligne d\'aspiration traverse un local technique',
          'un supermarché où la tuyauterie relie plusieurs meubles frigorifiques à la centrale',
          'un immeuble de bureaux avec un tronçon horizontal avant la colonne montante',
          'une installation industrielle avec un long tronçon horizontal en toiture'
        ]);
        const L = pick([5, 8, 10, 15, 18, 22, 30]);
        const dh_cm = L * 2;
        return {
          statement: `Dans ${contexte}, un tronçon horizontal de tuyauterie frigorifique mesure $L=${L}$ m de longueur.<br/><br/>En appliquant la pente usuelle de $2$ cm par mètre dans le sens de l'écoulement vers le compresseur, calcule le dénivelé total de ce tronçon (en centimètres).`,
          answer: dh_cm,
          tolerance: 0,
          unit: 'cm',
          hint: 'Applique $\\Delta h_{cm} = L \\times 2$.',
          solution: [
            `$\\Delta h = L \\times 0{,}02 = ${L} \\times 0{,}02 = ${fr(L * 0.02, 2)}$ m.`,
            `Soit $\\Delta h_{cm} = ${L} \\times 2 = ${dh_cm}$ cm.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un installateur frigoriste doit poser la ligne d\'aspiration d\'une centrale frigorifique desservant plusieurs chambres froides d\'un entrepôt. Le tracé comprend un tronçon horizontal de $L=20$ m avant d\'atteindre la colonne montante menant au compresseur, situé en toiture.',
      tasks: [
        'Quel matériau est le plus couramment utilisé pour ce type de tuyauterie sur une installation de bâtiment ?',
        'Ce tronçon horizontal doit-il être calorifugé ? Justifier.',
        'Calculer le dénivelé à donner à ce tronçon de $20$ m, en appliquant la pente usuelle de $2$ cm par mètre.',
        'Dans quel sens ce dénivelé doit-il être orienté, et pourquoi ?'
      ],
      solutions: [
        'Le cuivre est le matériau le plus couramment utilisé pour les tuyauteries frigorifiques de ce type d\'installation de bâtiment (acier réservé aux plus grosses installations industrielles).',
        'Oui : il s\'agit de la ligne d\'aspiration (fluide frigorigène froid), qui doit être calorifugée pour éviter la condensation de l\'humidité ambiante sur le tube et limiter les pertes thermiques.',
        '$\\Delta h = L \\times 0{,}02 = 20 \\times 0{,}02 = 0{,}4$ m, soit $40$ cm.',
        'Le dénivelé doit être orienté en <strong>descente</strong> dans le sens de l\'écoulement, c\'est-à-dire vers le compresseur : cela favorise l\'entraînement de l\'huile par gravité, en complément de la vitesse du gaz, et évite qu\'elle stagne dans un point bas.'
      ],
      finalAnswer: 'Ce tronçon de $20$ m en cuivre calorifugé doit descendre de $40$ cm dans le sens de l\'écoulement vers le compresseur, conformément à la pente usuelle de $2\\,\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Tuyauteries frigorifiques',
      duration: '15 min',
      questions: [
        {
          statement: 'Un tronçon horizontal de tuyauterie frigorifique mesure $L=25$ m. Calculer le dénivelé (en cm) correspondant à la pente usuelle de $2$ cm par mètre.',
          type: 'numeric',
          answer: 50,
          tolerance: 0,
          unit: 'cm',
          points: 3,
          correction: '$\\Delta h_{cm} = L \\times 2 = 25 \\times 2 = 50$ cm.'
        },
        {
          statement: 'Sur une grosse installation frigorifique industrielle, le matériau de tuyauterie le plus adapté (résistance mécanique, coût sur grande longueur) est plutôt :',
          type: 'multiple-choice',
          options: [
            'Le cuivre uniquement',
            'L\'acier',
            'Le PVC',
            'Le verre'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'acier est privilégié sur les grosses installations industrielles, tandis que le cuivre reste le matériau de référence pour la majorité des installations de bâtiment.'
        },
        {
          statement: 'La ligne liquide (haute pression) d\'une installation frigorifique nécessite-t-elle généralement un calorifugeage contre la condensation ?',
          type: 'multiple-choice',
          options: [
            'Oui, systématiquement, comme la ligne d\'aspiration',
            'Non, sauf exposition directe au rayonnement solaire',
            'Non, jamais, quelle que soit la situation',
            'Oui, mais uniquement si le fluide est inflammable'
          ],
          answer: 1,
          points: 2,
          correction: 'La ligne liquide, à une température plus proche de l\'ambiante, ne nécessite généralement pas de calorifugeage contre la condensation, sauf en cas d\'exposition directe au soleil pouvant réchauffer indésirablement le liquide.'
        },
        {
          statement: 'Pourquoi une tuyauterie horizontale posée en contre-pente (montante vers le compresseur) est-elle problématique ?',
          type: 'multiple-choice',
          options: [
            'Parce qu\'elle augmente le rendement du compresseur',
            'Parce qu\'elle favorise l\'accumulation d\'huile au lieu de son retour vers le compresseur',
            'Parce qu\'elle empêche toute condensation sur le tube',
            'Parce qu\'elle est interdite uniquement sur la ligne liquide'
          ],
          answer: 1,
          points: 3,
          correction: 'Une contre-pente s\'oppose à l\'écoulement gravitaire de l\'huile vers le compresseur, favorisant sa stagnation dans des points bas plutôt que son retour, à l\'inverse de l\'effet recherché par la pente usuelle de $2\\,\\%$.'
        }
      ]
    }
  });
