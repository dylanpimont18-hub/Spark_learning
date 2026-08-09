/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-d1-1-medias-communication.js
   BTS FED — S8-D1-1 Médias de communication (bus, RF, CPL, fibre optique)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-d1-1-medias-communication',
    level: 3, subject: 'fed',
    icon: '📶',
    title: 'Médias de communication',
    subtitle: 'Bus filaire, radiofréquence (RF), courant porteur en ligne (CPL), fibre optique',
    keywords: ['Bus filaire', 'Radiofréquence', 'CPL', 'Fibre optique', 'GTB', 'Support de transmission'],
    physics: 'Une GTB (modules B8-1, B8-2) ne peut fonctionner que si ses capteurs, actionneurs et centrale peuvent effectivement communiquer entre eux. Le choix du <strong>support physique</strong> de cette communication — câble, ondes radio, réseau électrique existant, ou fibre optique — conditionne directement la portée, la fiabilité et le coût de mise en œuvre de l\'installation.',

    cours: {
      intro: 'Avant même de choisir un <strong>protocole</strong> de communication (module D1-2), il faut choisir le <strong>média</strong> physique sur lequel ce protocole va circuler. Quatre grandes familles se distinguent en génie climatique et en GTB, chacune avec ses avantages et ses limites.<br/><br/>Le <strong>bus filaire</strong> (paire torsadée dédiée) reste la solution la plus fiable et la plus répandue en installation neuve : câblage dédié, peu sensible aux perturbations électromagnétiques, mais nécessitant un tirage de câble spécifique. La <strong>radiofréquence (RF)</strong> supprime ce câblage : idéale en rénovation ou pour des points de mesure difficiles d\'accès, mais sensible aux obstacles (murs épais, structures métalliques) et aux perturbations d\'autres émetteurs radio.<br/><br/>Le <strong>courant porteur en ligne (CPL)</strong> fait circuler l\'information sur le réseau électrique existant (câbles $230$ V) : pas de câblage supplémentaire à tirer, mais un débit et une fiabilité qui dépendent fortement de la qualité du réseau électrique et de la présence d\'appareils perturbateurs. La <strong>fibre optique</strong> enfin offre la portée et le débit les plus élevés, une immunité totale aux perturbations électromagnétiques, mais un coût de mise en œuvre et de raccordement plus important, réservé aux liaisons longue distance ou aux besoins de débit élevé (vidéosurveillance, réseaux fédérateurs de plusieurs bâtiments).<br/><br/>Le choix entre ces médias dépend donc d\'un arbitrage entre <strong>portée</strong>, <strong>sensibilité aux perturbations</strong> et <strong>coût de mise en œuvre</strong>, à adapter au contexte précis du chantier (neuf ou rénovation, distance à couvrir, environnement électromagnétique).',
      definitions: [
        { term: 'Bus filaire (paire torsadée)', def: 'Câblage dédié reliant tous les équipements d\'un même réseau de communication. Fiable et peu sensible aux perturbations, mais nécessite un tirage de câble spécifique — solution de référence en installation neuve.' },
        { term: 'Radiofréquence (RF)', def: 'Transmission sans fil par ondes radio, évitant tout câblage. Pratique en rénovation ou pour des points difficiles d\'accès, mais sensible aux obstacles physiques (murs épais, structures métalliques) et aux perturbations d\'autres émetteurs.' },
        { term: 'Courant porteur en ligne (CPL)', def: 'Transmission de données en superposant un signal haute fréquence au réseau électrique $230$ V existant, sans câblage supplémentaire. Débit et fiabilité dépendants de la qualité du réseau électrique et des perturbations générées par d\'autres appareils.' },
        { term: 'Fibre optique', def: 'Support de transmission par impulsions lumineuses, offrant la portée et le débit les plus élevés, avec une immunité totale aux perturbations électromagnétiques. Coût de mise en œuvre plus élevé, réservé aux liaisons longue distance ou à fort besoin de débit.' }
      ],
      method: {
        title: 'Calculer le temps de transmission d\'un volume de données',
        steps: [
          '<strong>Identifier le volume de données</strong> à transmettre (Mo, Go...), propre à l\'application considérée (relevé de compteurs, flux vidéo, historique de mesures...).',
          '<strong>Relever le débit</strong> du support utilisé pour cette liaison précise (donnée d\'énoncé ou de constructeur, propre à chaque installation — le débit réel varie fortement d\'un média et d\'une configuration à l\'autre).',
          '<strong>Convertir</strong> volume et débit dans des unités cohérentes (par exemple Mo et Mo/s, ou Mbit et Mbit/s).',
          '<strong>Calculer le temps de transmission</strong> : $t = \\text{volume}/\\text{débit}$.',
          '<strong>Interpréter</strong> selon le contexte : un temps de transmission trop long peut rendre un média inadapté à une application temps réel (vidéosurveillance en direct), même si son coût de mise en œuvre est attractif.'
        ]
      },
      example: {
        statement: 'Une centrale de GTB doit transmettre un historique de mesures de $2$ Mo vers un serveur, via une liaison dont le débit effectif est de $0{,}5$ Mo/s.<br/><br/>Calculer le temps nécessaire à cette transmission.',
        steps: [
          '$t = \\text{volume}/\\text{débit} = 2 / 0{,}5 = 4$ s.'
        ],
        answer: 'La transmission de cet historique prend $4$ secondes : un temps tout à fait compatible avec un relevé périodique, mais qui deviendrait problématique pour un flux nécessitant une mise à jour continue.'
      },
      formulas: [
        '$t = \\dfrac{\\text{volume}}{\\text{débit}}$ (temps de transmission d\'un volume de données donné, à débit donné)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Quatre médias de communication',
        title: 'Bus filaire, RF, CPL, fibre optique : un arbitrage portée / perturbations / coût',
        description: 'Chaque média de communication se positionne différemment sur trois critères : la portée utile, la sensibilité aux perturbations, et le coût de mise en œuvre.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="d11-graph-title d11-graph-desc">
            <title id="d11-graph-title">Quatre medias de communication compares</title>
            <desc id="d11-graph-desc">Quatre boites alignees representant bus filaire, radiofrequence, courant porteur en ligne et fibre optique, chacune avec une breve caracteristique de portee, sensibilite aux perturbations et cout de mise en oeuvre.</desc>

            <rect class="frame-line" x="10" y="40" width="110" height="120" fill="none"></rect>
            <text class="label-soft" x="65" y="60" text-anchor="middle">Bus filaire</text>
            <text class="tick-label" x="65" y="90" text-anchor="middle">Fiable</text>
            <text class="tick-label" x="65" y="110" text-anchor="middle">Peu perturbé</text>
            <text class="tick-label" x="65" y="130" text-anchor="middle">Câblage requis</text>

            <rect class="frame-line" x="130" y="40" width="110" height="120" fill="none"></rect>
            <text class="label-soft" x="185" y="60" text-anchor="middle">RF</text>
            <text class="tick-label" x="185" y="90" text-anchor="middle">Sans câblage</text>
            <text class="tick-label" x="185" y="110" text-anchor="middle">Sensible obstacles</text>
            <text class="tick-label" x="185" y="130" text-anchor="middle">Rénovation</text>

            <rect class="frame-line" x="250" y="40" width="110" height="120" fill="none"></rect>
            <text class="label-soft" x="305" y="60" text-anchor="middle">CPL</text>
            <text class="tick-label" x="305" y="90" text-anchor="middle">Réseau existant</text>
            <text class="tick-label" x="305" y="110" text-anchor="middle">Sensible réseau élec.</text>
            <text class="tick-label" x="305" y="130" text-anchor="middle">Faible coût</text>

            <rect class="frame-line" x="370" y="40" width="100" height="120" fill="none"></rect>
            <text class="label-soft" x="420" y="60" text-anchor="middle">Fibre optique</text>
            <text class="tick-label" x="420" y="90" text-anchor="middle">Longue portée</text>
            <text class="tick-label" x="420" y="110" text-anchor="middle">Immunité totale</text>
            <text class="tick-label" x="420" y="130" text-anchor="middle">Coût élevé</text>
          </svg>
        `,
        notes: [
          'Le <strong>bus filaire</strong> reste la référence en fiabilité, au prix d\'un câblage dédié.',
          'La <strong>RF</strong> et le <strong>CPL</strong> évitent un câblage neuf, mais restent sensibles à leur environnement respectif (obstacles physiques, qualité du réseau électrique).',
          'La <strong>fibre optique</strong> offre la meilleure portée et la meilleure immunité aux perturbations, pour un coût de mise en œuvre plus élevé.'
        ],
        reading: 'Compare les quatre boîtes sur leurs trois lignes de caractéristiques : fiabilité/portée, sensibilité aux perturbations, contrainte de mise en œuvre.',
        caption: 'Le choix d\'un média de communication résulte toujours d\'un arbitrage entre portée, sensibilité aux perturbations et coût de mise en œuvre.'
      },
      recap: [
        'Le <strong>bus filaire</strong> est la solution de référence en fiabilité, mais nécessite un câblage dédié.',
        'La <strong>RF</strong> évite le câblage mais reste sensible aux obstacles physiques et aux perturbations radio.',
        'Le <strong>CPL</strong> utilise le réseau électrique existant, avec une fiabilité dépendante de sa qualité.',
        'La <strong>fibre optique</strong> offre portée et débit maximaux avec une immunité totale aux perturbations, pour un coût plus élevé.',
        'Le temps de transmission d\'un volume de données se calcule par $t=\\text{volume}/\\text{débit}$, le débit restant une donnée propre à chaque installation, pas une constante universelle par média.'
      ],
      piege: 'Ne pas considérer qu\'un média serait <strong>universellement meilleur</strong> qu\'un autre : chacun répond à un contexte précis (bus filaire en neuf, RF ou CPL en rénovation, fibre optique pour les liaisons longue distance ou fort débit). Attention aussi à ne pas traiter le débit d\'un média comme une <strong>valeur fixe et universelle</strong> : le débit réel dépend fortement des conditions d\'installation (longueur de câble, qualité du réseau électrique pour le CPL, obstacles pour la RF) — c\'est une donnée à vérifier au cas par cas, pas une caractéristique intrinsèque figée du média.'
    },

    quiz: [
      {
        q: 'Le courant porteur en ligne (CPL) permet de communiquer :',
        options: [
          'Uniquement via des ondes radio',
          'En superposant un signal de données au réseau électrique existant, sans câblage supplémentaire',
          'Uniquement via fibre optique',
          'En installant systématiquement un bus filaire dédié'
        ],
        answer: 1,
        correction: 'Le CPL fait circuler l\'information en superposant un signal haute fréquence au réseau électrique $230$ V existant, évitant ainsi tout câblage supplémentaire.'
      },
      {
        q: 'Parmi les quatre médias présentés, celui offrant la meilleure immunité aux perturbations électromagnétiques est :',
        options: ['Le bus filaire (paire torsadée)', 'La radiofréquence (RF)', 'Le courant porteur en ligne (CPL)', 'La fibre optique'],
        answer: 3,
        correction: 'La fibre optique, transmettant l\'information par impulsions lumineuses, est totalement immunisée contre les perturbations électromagnétiques — un avantage décisif pour les liaisons sensibles ou longue distance.'
      },
      {
        q: 'La radiofréquence (RF) est particulièrement adaptée :',
        options: [
          'Aux liaisons longue distance à très fort débit uniquement',
          'À la rénovation ou aux points de mesure difficiles d\'accès, en évitant tout câblage',
          'Aux environnements avec de nombreuses structures métalliques, sans aucune limitation',
          'Uniquement aux installations neuves avec câblage dédié'
        ],
        answer: 1,
        correction: 'La RF évite tout câblage, ce qui en fait une solution pratique en rénovation ou pour des points difficiles d\'accès — mais elle reste sensible aux obstacles physiques (murs épais, structures métalliques).'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un capteur de GTB transmettant son historique de mesures',
          'une centrale de comptage d\'énergie envoyant ses relevés',
          'un poste de vidéosurveillance transmettant un enregistrement',
          'une passerelle domotique synchronisant ses données'
        ]);
        const media = pick(['un bus filaire', 'une liaison RF', 'une liaison CPL', 'une liaison fibre optique']);
        const volume = randFloat(1, 20, 1);
        const debit = randFloat(0.2, 4, 2);
        const t = parseFloat((volume / debit).toFixed(1));
        return {
          statement: `Pour ${contexte}, via ${media} dont le débit effectif mesuré est de $${fr(debit, 2)}$ Mo/s, un volume de données de $${fr(volume, 1)}$ Mo doit être transmis.<br/><br/>Calcule le temps de transmission $t$ nécessaire (en secondes, arrondi au dixième).`,
          answer: t,
          tolerance: Math.max(0.3, t * 0.05),
          unit: 's',
          hint: 'Applique $t = \\text{volume}/\\text{débit}$.',
          solution: [
            `$t = \\text{volume}/\\text{débit} = ${fr(volume, 1)}/${fr(debit, 2)} \\approx ${fr(t, 1)}$ s.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un exploitant doit raccorder au réseau de GTB d\'un bâtiment tertiaire trois nouveaux points de mesure : un capteur de température dans un local technique difficile d\'accès (pas de gaine technique à proximité), un compteur d\'énergie placé à côté du tableau électrique existant, et une caméra de vidéosurveillance située à $150$ m du poste de supervision, nécessitant un débit élevé et stable.',
      tasks: [
        'Quel média serait le plus adapté pour le capteur de température difficile d\'accès ? Justifier.',
        'Quel média serait le plus adapté pour le compteur d\'énergie situé près du tableau électrique ? Justifier.',
        'Quel média serait le plus adapté pour la caméra de vidéosurveillance à $150$ m, à fort besoin de débit ? Justifier.',
        'Pourquoi ne pas utiliser le même média pour les trois points, alors qu\'ils appartiennent tous au même réseau de GTB ?'
      ],
      solutions: [
        'Pour le capteur difficile d\'accès, la <strong>radiofréquence (RF)</strong> est la plus adaptée : elle évite de tirer un câble jusqu\'à un local peu accessible, quitte à accepter une portée et une robustesse un peu moindres.',
        'Pour le compteur d\'énergie près du tableau électrique, le <strong>CPL</strong> est pertinent : la proximité immédiate du réseau électrique limite les risques d\'atténuation du signal, et aucun câblage supplémentaire n\'est nécessaire.',
        'Pour la caméra à $150$ m à fort besoin de débit, la <strong>fibre optique</strong> s\'impose : elle offre la portée et le débit nécessaires à un flux vidéo de qualité, avec une immunité totale aux perturbations électromagnétiques du bâtiment.',
        'Parce que chaque point de mesure a des <strong>contraintes différentes</strong> (accessibilité, distance, débit requis, environnement électromagnétique) : le choix du média n\'est pas une caractéristique du réseau de GTB dans son ensemble, mais un choix local adapté à chaque liaison — plusieurs médias peuvent parfaitement cohabiter au sein d\'une même installation, reliés via les passerelles appropriées.'
      ],
      finalAnswer: 'RF pour le capteur difficile d\'accès, CPL pour le compteur proche du tableau électrique, fibre optique pour la caméra à $150$ m à fort débit : trois médias différents pour un même réseau de GTB, chacun adapté à sa contrainte propre.'
    },

    evaluation: {
      title: 'Évaluation — Médias de communication',
      duration: '15 min',
      questions: [
        {
          statement: 'Une liaison a un débit effectif de $1{,}2$ Mo/s. Calculer le temps nécessaire pour transmettre un volume de $6$ Mo (en secondes).',
          type: 'numeric',
          answer: 5,
          tolerance: 0.3,
          unit: 's',
          points: 3,
          correction: '$t = \\text{volume}/\\text{débit} = 6/1{,}2 = 5$ s.'
        },
        {
          statement: 'Le bus filaire (paire torsadée) est généralement privilégié :',
          type: 'multiple-choice',
          options: [
            'En rénovation, pour éviter tout câblage',
            'En installation neuve, pour sa fiabilité et sa faible sensibilité aux perturbations',
            'Uniquement pour les liaisons de plus de 1 km',
            'Uniquement pour la vidéosurveillance'
          ],
          answer: 1,
          points: 2,
          correction: 'Le bus filaire reste la solution de référence en installation neuve, où le câblage dédié peut être posé facilement, pour sa fiabilité et sa faible sensibilité aux perturbations.'
        },
        {
          statement: 'Le CPL (courant porteur en ligne) présente comme principale limite :',
          type: 'multiple-choice',
          options: [
            'Un coût de mise en œuvre toujours très élevé',
            'Une fiabilité et un débit dépendants de la qualité du réseau électrique existant',
            'L\'obligation de tirer un câble dédié',
            'Une immunité totale aux perturbations, comme la fibre optique'
          ],
          answer: 1,
          points: 2,
          correction: 'Le CPL utilise le réseau électrique existant : sa fiabilité et son débit dépendent donc fortement de la qualité de ce réseau et de la présence d\'appareils perturbateurs, contrairement à la fibre optique.'
        }
      ]
    }
  });
