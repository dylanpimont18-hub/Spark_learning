/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-9-securite-froid.js
   BTS FED — S8-B5-9 Sécurité du circuit frigorifique — pressostats HP/BP, soupape de sécurité, différentiel
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-9-securite-froid',
    level: 3, subject: 'fed',
    icon: '🚧',
    title: 'Sécurité du circuit frigorifique',
    subtitle: 'Pressostats haute et basse pression, soupape de sécurité, différentiel',
    keywords: ['Pressostat HP', 'Pressostat BP', 'Soupape de sécurité', 'Différentiel', 'Protection compresseur'],
    physics: 'Un circuit frigorifique fonctionne sous pression, parfois élevée : si cette pression s\'emballe, les conséquences peuvent être brutales. Trois dispositifs veillent en permanence à ramener — ou à évacuer — cet excès de pression avant qu\'il ne devienne dangereux, chacun avec sa propre logique et son propre seuil de déclenchement.',

    cours: {
      intro: 'Au-delà des composants annexes qui protègent la qualité du fluide (module B5-6), le circuit frigorifique embarque des <strong>dispositifs de sécurité</strong> dont le seul rôle est de prévenir un incident lié à une pression anormale.<br/><br/>On distingue deux familles bien différentes : les <strong>pressostats</strong>, des interrupteurs électriques qui coupent l\'alimentation du compresseur lorsqu\'une pression sort de sa plage normale, et la <strong>soupape de sécurité</strong>, un dispositif purement <strong>mécanique</strong> qui évacue le fluide vers l\'extérieur en dernier recours, si les pressostats n\'ont pas suffi.<br/><br/>Pour bien régler un pressostat, il faut comprendre la notion de <strong>différentiel</strong> : l\'écart entre la pression à laquelle il coupe le compresseur et celle à laquelle il l\'autorise à redémarrer. Un différentiel mal choisi peut provoquer des redémarrages beaucoup trop rapprochés, ou au contraire un redémarrage inutilement tardif.',
      definitions: [
        { term: 'Pressostat haute pression (HP)', def: 'Coupe électriquement l\'alimentation du compresseur si la pression de refoulement dépasse un seuil critique, protégeant contre l\'éclatement d\'un composant ou la surchauffe mécanique du compresseur.' },
        { term: 'Pressostat basse pression (BP)', def: 'Coupe électriquement l\'alimentation du compresseur si la pression d\'aspiration devient trop basse, protégeant contre le gel de l\'évaporateur et un fonctionnement à vide (manque de fluide) néfaste pour la lubrification.' },
        { term: 'Soupape de sécurité', def: 'Dispositif purement mécanique (sans électricité) qui évacue le fluide frigorigène vers l\'extérieur si la pression dépasse un seuil critique sur un récipient sous pression, agissant en dernier recours lorsque les pressostats n\'ont pas suffi à contenir la surpression.' },
        { term: 'Différentiel d\'un pressostat', def: 'Écart entre la pression à laquelle le pressostat coupe le compresseur ($P_{coupure}$) et la pression à laquelle il l\'autorise à redémarrer ($P_{enclenchement}$) : $\\text{Différentiel} = P_{coupure} - P_{enclenchement}$ (pour un pressostat HP).' }
      ],
      method: {
        title: 'Déterminer la pression de réenclenchement d\'un pressostat HP à partir de son différentiel',
        steps: [
          '<strong>Relever la pression de coupure</strong> $P_{coupure}$, le seuil auquel le pressostat coupe électriquement le compresseur (réglage ou notice constructeur).',
          '<strong>Relever le différentiel</strong> du pressostat, réglable sur certains modèles ou fixé par le constructeur sur d\'autres.',
          '<strong>Calculer la pression de réenclenchement</strong> pour un pressostat HP : $P_{enclenchement} = P_{coupure} - \\text{Différentiel}$.',
          '<strong>Vérifier la cohérence</strong> du réglage : un différentiel trop faible entraîne des redémarrages trop rapprochés (usure du compresseur) ; un différentiel trop élevé retarde inutilement le redémarrage.'
        ]
      },
      example: {
        statement: 'Un pressostat HP est réglé pour couper le compresseur à $P_{coupure}=27$ bar, avec un différentiel de $4$ bar.<br/><br/>Calculer la pression à laquelle le compresseur pourra redémarrer.',
        steps: [
          '$P_{enclenchement} = P_{coupure} - \\text{Différentiel} = 27 - 4 = 23$ bar.'
        ],
        answer: 'Le compresseur ne redémarrera que lorsque la pression HP sera redescendue à $23$ bar : cet écart de $4$ bar évite un redémarrage immédiat juste après la coupure, le temps que la pression retombe suffisamment.'
      },
      formulas: [
        '$\\text{Différentiel} = P_{coupure} - P_{enclenchement}$ (pressostat HP ; les rôles de $P_{coupure}$ et $P_{enclenchement}$ sont inversés pour un pressostat BP, qui coupe sur une pression basse)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Dispositifs de sécurité du circuit frigorifique',
        title: 'Trois dispositifs, une même mission de protection',
        description: 'Le pressostat HP, le pressostat BP et la soupape de sécurité protègent chacun le circuit frigorifique contre une pression anormale, avec des logiques et des seuils différents.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="secu-graph-title secu-graph-desc">
            <title id="secu-graph-title">Dispositifs de securite relies au circuit frigorifique</title>
            <desc id="secu-graph-desc">Trois boites en haut representant pressostat haute pression, pressostat basse pression et soupape de securite, toutes reliees a une boite centrale en bas representant le circuit frigorifique protege.</desc>

            <rect class="frame-line" x="20" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="80" y="55" text-anchor="middle">Pressostat</text>
            <text class="label-soft" x="80" y="70" text-anchor="middle">HP</text>

            <rect class="frame-line" x="180" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="55" text-anchor="middle">Pressostat</text>
            <text class="label-soft" x="240" y="70" text-anchor="middle">BP</text>

            <rect class="frame-line" x="340" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="400" y="55" text-anchor="middle">Soupape de</text>
            <text class="label-soft" x="400" y="70" text-anchor="middle">sécurité</text>

            <rect class="frame-line" x="140" y="150" width="200" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="175" text-anchor="middle">Circuit frigorifique</text>
            <text class="label-soft" x="240" y="190" text-anchor="middle">(compresseur protégé)</text>

            <line class="curve-main" x1="80" y1="80" x2="200" y2="150"></line>
            <line class="curve-main" x1="240" y1="80" x2="240" y2="150"></line>
            <line class="curve-main" x1="400" y1="80" x2="280" y2="150"></line>
          </svg>
        `,
        notes: [
          'Le <strong>pressostat HP</strong> coupe électriquement le compresseur en cas de pression de refoulement excessive.',
          'Le <strong>pressostat BP</strong> coupe électriquement le compresseur en cas de pression d\'aspiration trop basse.',
          'La <strong>soupape de sécurité</strong>, purement mécanique, agit en dernier recours si les pressostats n\'ont pas suffi.'
        ],
        reading: 'Repère les trois dispositifs en haut, tous reliés au même circuit à protéger en bas — mais chacun surveille un phénomène différent (HP, BP, surpression mécanique).',
        caption: 'Trois dispositifs de sécurité complémentaires protègent le circuit frigorifique contre une pression anormale.'
      },
      recap: [
        'Le <strong>pressostat HP</strong> coupe le compresseur si la pression de refoulement dépasse un seuil critique.',
        'Le <strong>pressostat BP</strong> coupe le compresseur si la pression d\'aspiration devient trop basse.',
        'La <strong>soupape de sécurité</strong> est purement mécanique et agit en dernier recours, en évacuant le fluide vers l\'extérieur.',
        'Le <strong>différentiel</strong> d\'un pressostat, $\\text{Différentiel} = P_{coupure} - P_{enclenchement}$, fixe l\'écart entre coupure et redémarrage autorisé.',
        'Un différentiel trop faible provoque des redémarrages trop rapprochés (usure) ; trop élevé, il retarde le redémarrage.'
      ],
      piege: 'Ne pas confondre un <strong>pressostat</strong> (dispositif <strong>électrique</strong>, qui coupe puis réautorise automatiquement le redémarrage une fois la pression revenue dans la plage normale) et une <strong>soupape de sécurité</strong> (dispositif purement <strong>mécanique</strong>, qui évacue physiquement du fluide et intervient en tout dernier recours, lorsque les pressostats n\'ont pas suffi à contenir la surpression). Autre piège fréquent : pour un pressostat <strong>BP</strong>, les rôles sont inversés par rapport au pressostat HP — il coupe sur une pression <strong>basse</strong> et ne réautorise le redémarrage qu\'une fois la pression suffisamment <strong>remontée</strong> ($P_{enclenchement} = P_{coupure} + \\text{Différentiel}$), et non l\'inverse.'
    },

    quiz: [
      {
        q: 'Le pressostat haute pression (HP) a pour rôle de :',
        options: [
          'Couper le compresseur si la pression d\'aspiration devient trop basse',
          'Couper le compresseur si la pression de refoulement dépasse un seuil critique',
          'Évacuer mécaniquement le fluide vers l\'extérieur en cas de surpression',
          'Réguler en continu la vitesse du compresseur'
        ],
        answer: 1,
        correction: 'Le pressostat HP surveille la pression de refoulement et coupe électriquement le compresseur si elle dépasse un seuil critique, protégeant le compresseur contre une avarie mécanique.'
      },
      {
        q: 'Contrairement à un pressostat, une soupape de sécurité :',
        options: [
          'Est un dispositif électrique qui réautorise automatiquement le redémarrage',
          'Est un dispositif purement mécanique qui évacue le fluide vers l\'extérieur, en dernier recours',
          'Ne peut être installée que sur la ligne d\'aspiration',
          'Remplace entièrement les pressostats HP et BP'
        ],
        answer: 1,
        correction: 'La soupape de sécurité est un dispositif mécanique qui évacue physiquement le fluide en cas de surpression, agissant en tout dernier recours, contrairement aux pressostats qui sont des interrupteurs électriques.'
      },
      {
        q: 'Le différentiel d\'un pressostat HP, $\\text{Différentiel} = P_{coupure} - P_{enclenchement}$, sert à :',
        options: [
          'Augmenter la puissance frigorifique de l\'installation',
          'Éviter un redémarrage immédiat du compresseur juste après la coupure',
          'Mesurer la surchauffe à l\'évaporateur',
          'Remplacer le filtre déshydrateur'
        ],
        answer: 1,
        correction: 'Le différentiel introduit un écart entre la pression de coupure et la pression de réenclenchement, laissant le temps à la pression de redescendre suffisamment avant d\'autoriser un nouveau démarrage.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une installation de climatisation tertiaire',
          'un groupe de production d\'eau glacée',
          'une chambre froide positive',
          'une PAC air/eau réversible'
        ]);
        const Pcoupure = pick([25, 26, 27, 28]);
        const diff = randFloat(3, 6, 1);
        const Penclenchement = parseFloat((Pcoupure - diff).toFixed(1));
        return {
          statement: `Sur ${contexte}, le pressostat HP est réglé pour couper le compresseur à $P_{coupure}=${Pcoupure}$ bar, avec un différentiel de $${fr(diff, 1)}$ bar.<br/><br/>Calcule la pression de réenclenchement $P_{enclenchement}$ (en bar, arrondie au dixième).`,
          answer: Penclenchement,
          tolerance: 0.2,
          unit: 'bar',
          hint: 'Applique $\\text{Différentiel} = P_{coupure} - P_{enclenchement}$, donc $P_{enclenchement} = P_{coupure} - \\text{Différentiel}$.',
          solution: [
            `$P_{enclenchement} = P_{coupure} - \\text{Différentiel} = ${Pcoupure} - ${fr(diff, 1)} = ${fr(Penclenchement, 1)}$ bar.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un compresseur redémarre anormalement souvent sur une installation de climatisation. Le pressostat HP est réglé avec $P_{coupure}=26$ bar et un différentiel de seulement $1$ bar.',
      tasks: [
        'Calculer la pression de réenclenchement $P_{enclenchement,1}$ avec ce réglage initial.',
        'Expliquer pourquoi un différentiel aussi faible peut provoquer des redémarrages trop rapprochés.',
        'Le frigoriste règle le différentiel à $5$ bar (pression de coupure inchangée). Calculer la nouvelle pression de réenclenchement $P_{enclenchement,2}$.',
        'Ce nouveau réglage présente-t-il un inconvénient si le différentiel devenait excessif ? Justifier.'
      ],
      solutions: [
        '$P_{enclenchement,1} = P_{coupure} - \\text{Différentiel} = 26 - 1 = 25$ bar.',
        'Avec un différentiel de seulement $1$ bar, la pression n\'a besoin de redescendre que très légèrement (de $26$ à $25$ bar) pour que le compresseur redémarre : dans une installation où la pression fluctue naturellement autour de ce seuil, cela provoque des <strong>cycles marche/arrêt très rapprochés</strong>, néfastes pour la durée de vie du compresseur (usure des contacts électriques et des organes mécaniques).',
        '$P_{enclenchement,2} = P_{coupure} - \\text{Différentiel} = 26 - 5 = 21$ bar.',
        'Oui : un différentiel excessif retarderait inutilement le redémarrage du compresseur (il faudrait attendre que la pression descende très bas avant réautorisation), ce qui peut nuire au confort ou à la production frigorifique attendue. Le bon réglage est donc un compromis, ni trop faible ni trop élevé.'
      ],
      finalAnswer: 'Passer d\'un différentiel de $1$ bar ($P_{enclenchement,1}=25$ bar, redémarrages trop rapprochés) à $5$ bar ($P_{enclenchement,2}=21$ bar) espace les redémarrages, mais un différentiel trop élevé retarderait à son tour inutilement le redémarrage : le réglage doit rester un compromis raisonnable.'
    },

    evaluation: {
      title: 'Évaluation — Sécurité du circuit frigorifique',
      duration: '15 min',
      questions: [
        {
          statement: 'Un pressostat HP coupe à $P_{coupure}=28$ bar avec un différentiel de $6$ bar. Calculer la pression de réenclenchement (en bar).',
          type: 'numeric',
          answer: 22,
          tolerance: 0.3,
          unit: 'bar',
          points: 3,
          correction: '$P_{enclenchement} = P_{coupure} - \\text{Différentiel} = 28 - 6 = 22$ bar.'
        },
        {
          statement: 'Le pressostat basse pression (BP) protège principalement contre :',
          type: 'multiple-choice',
          options: [
            'L\'éclatement d\'un composant côté refoulement',
            'Le gel de l\'évaporateur et un fonctionnement à vide du compresseur',
            'La saturation du filtre déshydrateur',
            'La surchauffe du condenseur'
          ],
          answer: 1,
          points: 2,
          correction: 'Le pressostat BP coupe le compresseur si la pression d\'aspiration devient trop basse, ce qui protège contre le gel de l\'évaporateur et un fonctionnement à vide néfaste pour la lubrification.'
        },
        {
          statement: 'La soupape de sécurité intervient :',
          type: 'multiple-choice',
          options: [
            'Avant les pressostats, pour anticiper toute variation de pression',
            'En dernier recours, si les pressostats n\'ont pas suffi à contenir la surpression',
            'Uniquement lors de la mise en service de l\'installation',
            'Pour réguler la vitesse du compresseur en fonctionnement normal'
          ],
          answer: 1,
          points: 2,
          correction: 'Dispositif purement mécanique, la soupape de sécurité évacue le fluide vers l\'extérieur en tout dernier recours, lorsque les pressostats électriques n\'ont pas suffi à contenir la surpression.'
        },
        {
          statement: 'Un différentiel de pressostat réglé beaucoup trop faible entraîne principalement :',
          type: 'multiple-choice',
          options: [
            'Un retard excessif au redémarrage du compresseur',
            'Des redémarrages trop rapprochés, source d\'usure prématurée du compresseur',
            'Une impossibilité totale de redémarrage',
            'Une augmentation de la puissance frigorifique disponible'
          ],
          answer: 1,
          points: 2,
          correction: 'Un différentiel trop faible ne laisse quasiment pas d\'écart entre la pression de coupure et celle de réenclenchement, provoquant des cycles marche/arrêt trop rapprochés et une usure prématurée du compresseur.'
        }
      ]
    }
  });
