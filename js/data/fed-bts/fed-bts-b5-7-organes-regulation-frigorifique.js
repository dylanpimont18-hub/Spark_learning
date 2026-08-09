/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b5-7-organes-regulation-frigorifique.js
   BTS FED — S8-B5-7 Organes de régulation du circuit frigorifique
   Régulateur de pression de condensation, vanne d'inversion 4 voies, régulation tout-ou-rien
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b5-7-organes-regulation-frigorifique',
    level: 3, subject: 'fed',
    icon: '🎛️',
    title: 'Organes de régulation du circuit frigorifique',
    subtitle: 'Régulation de la condensation, vanne d\'inversion 4 voies, marche/arrêt du compresseur',
    keywords: ['Régulation pression condensation', 'Vanne d\'inversion 4 voies', 'Réversibilité', 'Tout-ou-rien', 'Taux de marche'],
    physics: 'Un circuit frigorifique ne fonctionne jamais dans des conditions parfaitement constantes : température extérieure qui chute en hiver, besoin de passer du chauffage au rafraîchissement, charge thermique qui varie au fil de la journée. Plusieurs organes de régulation adaptent alors le fonctionnement du circuit à ces conditions changeantes, sans intervention humaine.',

    cours: {
      intro: 'Au-delà des composants annexes (module B5-6) et des dispositifs de sécurité (module B5-9), certains organes ont pour rôle d\'<strong>adapter le fonctionnement</strong> du circuit frigorifique aux conditions du moment.<br/><br/>Trois exemples illustrent cette régulation : le <strong>régulateur de pression de condensation</strong>, qui maintient une pression de condensation minimale même par temps froid ; la <strong>vanne d\'inversion 4 voies</strong>, qui permet à une pompe à chaleur réversible de passer du mode chauffage au mode climatisation ; et la <strong>régulation tout-ou-rien</strong> du compresseur, qui gère les cycles marche/arrêt selon la demande.<br/><br/>Pour ce dernier point, un indicateur simple permet de caractériser le fonctionnement d\'un compresseur sur la durée : le <strong>taux de marche</strong>, qui exprime la part du temps où le compresseur fonctionne réellement sur un cycle complet.',
      definitions: [
        { term: 'Régulateur de pression de condensation', def: 'Dispositif qui maintient une pression de condensation minimale même par temps froid, en freinant partiellement l\'échange au condenseur (par exemple en réduisant la vitesse du ventilateur). Sans cette régulation, une pression de condensation trop basse par grand froid empêcherait le détendeur de fonctionner correctement.' },
        { term: 'Vanne d\'inversion 4 voies', def: 'Sur une pompe à chaleur (PAC) réversible, cette vanne permute le sens de circulation du fluide frigorigène entre les deux échangeurs (intérieur et extérieur), inversant leurs rôles respectifs d\'évaporateur et de condenseur selon que l\'on est en mode chauffage ou en mode climatisation.' },
        { term: 'Régulation tout-ou-rien (TOR) du compresseur', def: 'Le compresseur démarre et s\'arrête selon un thermostat (ou pressostat), avec une <strong>bande morte</strong> (écart entre seuil de démarrage et seuil d\'arrêt) qui évite des cycles marche/arrêt trop rapprochés.' },
        { term: 'Taux de marche', def: 'Proportion du temps de fonctionnement effectif du compresseur sur un cycle complet : $\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$ (%), avec $t_{ON}$ le temps de fonctionnement et $t_{OFF}$ le temps d\'arrêt.' }
      ],
      method: {
        title: 'Calculer le taux de marche d\'un compresseur en régulation tout-ou-rien',
        steps: [
          '<strong>Relever la durée de fonctionnement</strong> $t_{ON}$ du compresseur sur un cycle complet (chronométrage ou données de supervision).',
          '<strong>Relever la durée d\'arrêt</strong> $t_{OFF}$ sur ce même cycle.',
          '<strong>Calculer le taux de marche</strong> $\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$, exprimé en pourcentage.',
          '<strong>Interpréter</strong> : un taux de marche très proche de $100\\%$ signale un compresseur qui tourne presque en continu (installation en limite de puissance, charge excessive ou manque de fluide) ; un taux très faible traduit à l\'inverse des cycles très courts, favorables à l\'usure du compresseur.'
        ]
      },
      example: {
        statement: 'Sur une vitrine réfrigérée, le compresseur fonctionne $t_{ON}=15$ min puis s\'arrête $t_{OFF}=10$ min, avant de redémarrer selon le même schéma.<br/><br/>Calculer le taux de marche de ce compresseur.',
        steps: [
          'Durée totale du cycle : $t_{ON}+t_{OFF} = 15+10 = 25$ min.',
          'Taux de marche : $\\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100 = \\dfrac{15}{25} \\times 100 = 60\\%$.'
        ],
        answer: 'Le compresseur fonctionne $60\\%$ du temps sur ce cycle : une valeur raisonnable, ni un fonctionnement quasi continu, ni des cycles anormalement courts.'
      },
      formulas: [
        '$\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$ (%)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Réversibilité d\'une PAC par vanne 4 voies',
        title: 'Une même vanne pour deux modes de fonctionnement',
        description: 'La vanne d\'inversion 4 voies relie le compresseur aux deux échangeurs (intérieur et extérieur) et permute leurs rôles selon le mode choisi : chauffage ou climatisation.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="regul-graph-title regul-graph-desc">
            <title id="regul-graph-title">Vanne d'inversion 4 voies reliant compresseur et echangeurs</title>
            <desc id="regul-graph-desc">Trois boites en haut representant le compresseur, l'echangeur interieur et l'echangeur exterieur, toutes reliees a une boite centrale en bas representant la vanne d'inversion 4 voies, qui permute les roles des deux echangeurs selon le mode chauffage ou climatisation.</desc>

            <rect class="frame-line" x="20" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="80" y="55" text-anchor="middle">Compresseur</text>
            <text class="label-soft" x="80" y="70" text-anchor="middle">(refoulement)</text>

            <rect class="frame-line" x="180" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="55" text-anchor="middle">Échangeur</text>
            <text class="label-soft" x="240" y="70" text-anchor="middle">intérieur</text>

            <rect class="frame-line" x="340" y="30" width="120" height="50" fill="none"></rect>
            <text class="label-soft" x="400" y="55" text-anchor="middle">Échangeur</text>
            <text class="label-soft" x="400" y="70" text-anchor="middle">extérieur</text>

            <rect class="frame-line" x="140" y="150" width="200" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="175" text-anchor="middle">Vanne d'inversion</text>
            <text class="label-soft" x="240" y="190" text-anchor="middle">4 voies</text>

            <line class="curve-main" x1="80" y1="80" x2="200" y2="150"></line>
            <line class="curve-main" x1="240" y1="80" x2="240" y2="150"></line>
            <line class="curve-main" x1="400" y1="80" x2="280" y2="150"></line>
          </svg>
        `,
        notes: [
          'En <strong>mode chauffage</strong>, l\'échangeur intérieur joue le rôle de condenseur (il rejette la chaleur dans le local) et l\'échangeur extérieur celui d\'évaporateur (il capte la chaleur dehors).',
          'En <strong>mode climatisation</strong>, la vanne 4 voies inverse ces rôles : l\'échangeur intérieur devient évaporateur, l\'échangeur extérieur devient condenseur.',
          'C\'est la <strong>même vanne</strong> qui permet ce basculement, sans changer physiquement les échangeurs ni le compresseur.'
        ],
        reading: 'Repère les trois boîtes en haut (compresseur, échangeur intérieur, échangeur extérieur), toutes reliées à la vanne 4 voies en bas, qui permute les rôles des échangeurs selon le mode choisi.',
        caption: 'La vanne d\'inversion 4 voies permet à une PAC réversible de basculer entre mode chauffage et mode climatisation.'
      },
      recap: [
        'Le <strong>régulateur de pression de condensation</strong> maintient une pression minimale au condenseur même par temps froid.',
        'La <strong>vanne d\'inversion 4 voies</strong> permute les rôles des deux échangeurs d\'une PAC réversible (chauffage ↔ climatisation).',
        'La <strong>régulation tout-ou-rien</strong> gère les cycles marche/arrêt du compresseur, avec une bande morte pour éviter des cycles trop rapprochés.',
        'Le <strong>taux de marche</strong>, $\\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$, caractérise la proportion de temps de fonctionnement réel du compresseur.',
        'Un taux de marche proche de $100\\%$ n\'est pas forcément un signe positif : il peut traduire une installation en limite de puissance.'
      ],
      piege: 'Un taux de marche <strong>élevé</strong> ne doit pas être interprété comme un signe d\'efficacité : un compresseur qui tourne presque en continu ($t_{OFF}$ très faible) peut au contraire signaler une installation <strong>sous-dimensionnée</strong>, une charge thermique excessive, ou un manque de fluide frigorigène — pas un fonctionnement optimal. À l\'inverse, un taux de marche très faible, avec des cycles très courts, favorise l\'usure prématurée du compresseur (démarrages fréquents). Ne pas confondre non plus la <strong>bande morte</strong> d\'une régulation tout-ou-rien (qui gère un cycle de fonctionnement normal) avec le <strong>différentiel</strong> d\'un pressostat de sécurité (module B5-9) : les deux notions se ressemblent dans leur principe, mais l\'une régule le fonctionnement courant, l\'autre protège le circuit d\'un incident.'
    },

    quiz: [
      {
        q: 'Le régulateur de pression de condensation a pour rôle de :',
        options: [
          'Augmenter systématiquement la pression de condensation en toute saison',
          'Maintenir une pression de condensation minimale, notamment par temps froid',
          'Inverser le sens de circulation du fluide frigorigène',
          'Mesurer le taux de marche du compresseur'
        ],
        answer: 1,
        correction: 'Sans ce régulateur, une pression de condensation trop basse par temps froid empêcherait le détendeur de fonctionner correctement : il maintient donc une pression minimale en freinant partiellement l\'échange au condenseur.'
      },
      {
        q: 'Sur une pompe à chaleur réversible, la vanne d\'inversion 4 voies permet de :',
        options: [
          'Couper le compresseur en cas de surpression',
          'Permuter le sens de circulation du fluide entre les deux échangeurs, pour passer du mode chauffage au mode climatisation',
          'Filtrer les particules solides du circuit',
          'Réguler le taux d\'humidité du local'
        ],
        answer: 1,
        correction: 'La vanne 4 voies inverse le rôle des deux échangeurs (intérieur et extérieur) en permutant le sens de circulation du fluide, ce qui permet de basculer entre mode chauffage et mode climatisation.'
      },
      {
        q: 'Un compresseur en régulation tout-ou-rien affichant un taux de marche très proche de $100\\%$ traduit généralement :',
        options: [
          'Un fonctionnement optimal, à privilégier systématiquement',
          'Une installation potentiellement en limite de puissance ou en manque de fluide',
          'Une bande morte trop large',
          'Un différentiel de pressostat mal réglé'
        ],
        answer: 1,
        correction: 'Un taux de marche proche de $100\\%$ signifie que le compresseur tourne quasiment en continu, ce qui peut signaler une installation sous-dimensionnée, une charge thermique excessive, ou un manque de fluide frigorigène.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une chambre froide positive',
          'une vitrine réfrigérée de supermarché',
          'une PAC air/eau réversible en mode chauffage',
          'un climatiseur split de bureau'
        ]);
        const tON = rand(8, 20);
        const tOFF = rand(5, 15);
        const taux = parseFloat(((tON / (tON + tOFF)) * 100).toFixed(1));
        return {
          statement: `Sur ${contexte}, le compresseur fonctionne $t_{ON}=${tON}$ min puis s'arrête $t_{OFF}=${tOFF}$ min, avant de redémarrer selon le même schéma.<br/><br/>Calcule le taux de marche de ce compresseur (en %, arrondi au dixième).`,
          answer: taux,
          tolerance: 1,
          unit: '%',
          hint: 'Applique $\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$.',
          solution: [
            `$\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100 = \\dfrac{${tON}}{${tON}+${tOFF}} \\times 100 \\approx ${fr(taux, 1)}\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un exploitant compare le fonctionnement de deux chambres froides positives. Sur la chambre A, le compresseur fonctionne $t_{ON,A}=10$ min puis s\'arrête $t_{OFF,A}=15$ min. Sur la chambre B, il fonctionne $t_{ON,B}=22$ min puis s\'arrête seulement $t_{OFF,B}=3$ min.',
      tasks: [
        'Calculer le taux de marche de la chambre A.',
        'Calculer le taux de marche de la chambre B.',
        'Laquelle des deux installations fonctionne le plus près d\'un régime quasi continu ? Que cela peut-il signaler pour cette installation ?',
        'Proposer une action de vérification pour l\'installation la plus sollicitée.'
      ],
      solutions: [
        '$\\text{Taux de marche}_A = \\dfrac{10}{10+15} \\times 100 = \\dfrac{10}{25} \\times 100 = 40\\%$.',
        '$\\text{Taux de marche}_B = \\dfrac{22}{22+3} \\times 100 = \\dfrac{22}{25} \\times 100 = 88\\%$.',
        'La chambre B ($88\\%$) fonctionne beaucoup plus près d\'un régime continu que la chambre A ($40\\%$). Un taux de marche aussi élevé peut signaler une <strong>installation sous-dimensionnée</strong> par rapport à la charge thermique réelle, une <strong>charge en fluide frigorigène insuffisante</strong>, ou un encrassement d\'un échangeur (condenseur ou évaporateur).',
        'Il serait pertinent de vérifier, sur la chambre B, la charge en fluide frigorigène (voyant liquide, module B5-6), l\'état de propreté des échangeurs, et la cohérence entre la puissance frigorifique installée et la charge thermique réelle du local.'
      ],
      finalAnswer: 'Chambre A : taux de marche de $40\\%$ (fonctionnement raisonnable) ; chambre B : taux de marche de $88\\%$ (fonctionnement quasi continu), à investiguer en priorité.'
    },

    evaluation: {
      title: 'Évaluation — Organes de régulation du circuit frigorifique',
      duration: '15 min',
      questions: [
        {
          statement: 'Un compresseur fonctionne $t_{ON}=18$ min puis s\'arrête $t_{OFF}=12$ min. Calculer son taux de marche (en %, arrondi au dixième).',
          type: 'numeric',
          answer: 60,
          tolerance: 1,
          unit: '%',
          points: 3,
          correction: '$\\text{Taux de marche} = \\dfrac{18}{18+12} \\times 100 = \\dfrac{18}{30} \\times 100 = 60\\%$.'
        },
        {
          statement: 'La vanne d\'inversion 4 voies équipe principalement :',
          type: 'multiple-choice',
          options: [
            'Une pompe à chaleur réversible, pour basculer entre chauffage et climatisation',
            'Un filtre déshydrateur, pour retenir les particules solides',
            'Un pressostat, pour couper le compresseur en cas de surpression',
            'Une soupape de sécurité, pour évacuer le fluide vers l\'extérieur'
          ],
          answer: 0,
          points: 2,
          correction: 'La vanne 4 voies permet à une PAC réversible d\'inverser le sens de circulation du fluide entre les deux échangeurs, pour passer du mode chauffage au mode climatisation.'
        },
        {
          statement: 'Le régulateur de pression de condensation intervient principalement :',
          type: 'multiple-choice',
          options: [
            'Par temps chaud, pour limiter la pression de condensation',
            'Par temps froid, pour maintenir une pression de condensation minimale',
            'Uniquement lors de la mise en service de l\'installation',
            'Sur la ligne d\'aspiration, pour protéger le compresseur'
          ],
          answer: 1,
          points: 2,
          correction: 'Sans ce régulateur, une pression de condensation trop basse par temps froid empêcherait le détendeur de fonctionner correctement : il freine partiellement l\'échange au condenseur pour maintenir une pression minimale.'
        },
        {
          statement: 'Un taux de marche très faible, avec des cycles marche/arrêt très courts, traduit surtout un risque de :',
          type: 'multiple-choice',
          options: [
            'Manque de fluide frigorigène généralisé',
            'Usure prématurée du compresseur liée à des démarrages trop fréquents',
            'Surpression au condenseur',
            'Coup de liquide systématique'
          ],
          answer: 1,
          points: 2,
          correction: 'Des cycles marche/arrêt très courts et fréquents sollicitent mécaniquement et électriquement le compresseur à chaque démarrage, ce qui favorise une usure prématurée.'
        }
      ]
    }
  });
