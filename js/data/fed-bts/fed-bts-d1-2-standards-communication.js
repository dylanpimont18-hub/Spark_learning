/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-d1-2-standards-communication.js
   BTS FED — S8-D1-2 Standards de communication (Modbus, BACnet, KNX, LonWorks)
   Domaines d'usage vérifiés par recherche web (voir sources en fin de fichier).
   Sources : agescom-gtb.fr, calculcee.fr, xpair.com (protocoles GTB) — consultées 2026-08.
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-d1-2-standards-communication',
    level: 3, subject: 'fed',
    icon: '🔖',
    title: 'Standards de communication',
    subtitle: 'Protocoles Modbus, BACnet, KNX, LonWorks : usages et compatibilités',
    keywords: ['Modbus', 'BACnet', 'KNX', 'LonWorks', 'Protocole GTB', 'Maître-esclave'],
    physics: 'L\'architecture d\'une GTB (module B8-1) et ses domaines d\'application (B8-2) ne prennent vie que grâce à un <strong>protocole</strong> qui définit précisément comment les équipements dialoguent entre eux, au-delà du simple média physique (module D1-1). Quatre standards dominent le marché du bâtiment, chacun avec son terrain de prédilection.',

    cours: {
      intro: 'Une architecture GTB (module B8-1) et ses applications concrètes (module B8-2) reposent toujours sur un <strong>protocole de communication</strong> précis, qui définit le langage commun entre capteurs, centrale et actionneurs. Quatre standards dominent aujourd\'hui le marché du bâtiment.<br/><br/>Le <strong>Modbus</strong> est l\'un des protocoles les plus anciens et les plus simples : architecture <strong>maître/esclave</strong>, peu coûteux à mettre en œuvre, très utilisé pour le comptage d\'énergie, les automates industriels et les variateurs de vitesse (lien direct avec les modules B9 et C2-2).<br/><br/>Le <strong>BACnet</strong>, développé spécifiquement pour la gestion technique du bâtiment (norme ASHRAE devenue internationale en 2003), s\'est imposé comme le standard de référence pour la <strong>production CVC</strong> (chauffage, ventilation, climatisation) dans le tertiaire, avec plusieurs millions de nœuds installés dans le monde.<br/><br/>Le <strong>KNX</strong>, standard européen, s\'est imposé comme la référence pour la <strong>domotique résidentielle</strong> et la <strong>gestion terminale</strong> dans le tertiaire — tout ce qui touche directement à l\'usager final et à l\'ambiance d\'une pièce (éclairage, stores, prises pilotées).<br/><br/>Le <strong>LonWorks (LON)</strong>, protocole <strong>peer-to-peer</strong> à topologie libre, ne nécessite pas de superviseur central obligatoire ; bien qu\'ayant perdu du terrain face à BACnet/IP et KNX sur les installations récentes, il reste très présent dans de nombreux bâtiments existants pour sa robustesse.<br/><br/>En pratique, un même bâtiment tertiaire combine souvent plusieurs protocoles selon les lots : KNX pour les bureaux et espaces de vie, BACnet pour la production CVC, Modbus pour le comptage et certaines pompes — d\'où l\'importance de connaître les <strong>compatibilités</strong> entre protocoles (passerelles) pour faire dialoguer ces différents lots au sein d\'une même supervision.',
      definitions: [
        { term: 'Modbus', def: 'Protocole ancien et simple, en architecture <strong>maître/esclave</strong>, peu coûteux à mettre en œuvre. Très utilisé pour le comptage d\'énergie, les automates industriels et les variateurs de vitesse.' },
        { term: 'BACnet', def: 'Protocole développé spécifiquement pour la gestion technique du bâtiment (norme ASHRAE, internationale depuis 2003). Standard de référence pour la <strong>production CVC</strong> dans le tertiaire, avec un très grand nombre de nœuds installés dans le monde.' },
        { term: 'KNX', def: 'Standard européen de référence pour la <strong>domotique résidentielle</strong> et la <strong>gestion terminale</strong> en tertiaire : éclairage, stores, prises pilotées — tout ce qui concerne directement l\'usager final et l\'ambiance d\'une pièce.' },
        { term: 'LonWorks (LON)', def: 'Protocole <strong>peer-to-peer</strong>, à topologie réseau libre, sans superviseur central obligatoire. A perdu du terrain face à BACnet/IP et KNX sur les installations récentes, mais reste très présent dans les bâtiments existants pour sa robustesse.' },
        { term: 'Temps de cycle d\'un bus maître-esclave', def: 'Temps total nécessaire au maître pour interroger l\'ensemble des esclaves connectés au bus, à raison d\'une requête par esclave : $t_{cycle} = n_{esclaves}\\times t_{requête}$.' }
      ],
      method: {
        title: 'Calculer le temps de cycle d\'interrogation d\'un bus maître-esclave (type Modbus)',
        steps: [
          '<strong>Identifier le nombre d\'esclaves</strong> $n_{esclaves}$ connectés au bus (capteurs, actionneurs, compteurs interrogés par le maître).',
          '<strong>Relever le temps par requête</strong> $t_{requête}$, propre à chaque installation (débit du bus, longueur de trame), donné dans l\'énoncé.',
          '<strong>Calculer le temps de cycle</strong> : $t_{cycle} = n_{esclaves}\\times t_{requête}$.',
          '<strong>Interpréter</strong> : plus le nombre d\'esclaves interrogés augmente, plus le temps de cycle s\'allonge — un point de vigilance pour une application nécessitant des données très fréquemment rafraîchies (régulation rapide, alarme).'
        ]
      },
      example: {
        statement: 'Un bus Modbus interroge $n_{esclaves}=12$ compteurs d\'énergie, chaque requête (envoi + réponse) durant $t_{requête}=80$ ms.<br/><br/>Calculer le temps de cycle complet d\'interrogation de tous les compteurs.',
        steps: [
          '$t_{cycle} = n_{esclaves}\\times t_{requête} = 12\\times 80 = 960$ ms.'
        ],
        answer: 'Il faut environ $960$ ms, soit un peu moins d\'une seconde, pour que le maître interroge l\'ensemble des $12$ compteurs — un rafraîchissement tout à fait suffisant pour du comptage d\'énergie, mais qui serait trop lent pour une régulation nécessitant une mesure toutes les quelques dizaines de millisecondes.'
      },
      formulas: [
        '$t_{cycle} = n_{esclaves}\\times t_{requête}$ (temps de cycle d\'interrogation d\'un bus maître-esclave)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Quatre protocoles, quatre terrains de prédilection',
        title: 'Modbus, BACnet, KNX, LonWorks dans un même bâtiment tertiaire',
        description: 'Un bâtiment tertiaire combine souvent plusieurs protocoles selon les lots : KNX pour la gestion terminale, BACnet pour la production CVC, Modbus pour le comptage, LonWorks pour l\'existant — reliés par des passerelles vers une supervision commune.',
        svg: `
          <svg viewBox="0 0 480 240" role="img" aria-labelledby="d12-graph-title d12-graph-desc">
            <title id="d12-graph-title">Quatre protocoles relies a une supervision commune</title>
            <desc id="d12-graph-desc">Quatre boites en haut representant Modbus, BACnet, KNX et LonWorks, chacune avec son usage typique, toutes reliees via des passerelles a une boite centrale en bas representant la supervision commune du batiment.</desc>

            <rect class="frame-line" x="10" y="30" width="105" height="70" fill="none"></rect>
            <text class="label-soft" x="62" y="55" text-anchor="middle">Modbus</text>
            <text class="tick-label" x="62" y="75" text-anchor="middle">Comptage,</text>
            <text class="tick-label" x="62" y="90" text-anchor="middle">variateurs</text>

            <rect class="frame-line" x="130" y="30" width="105" height="70" fill="none"></rect>
            <text class="label-soft" x="182" y="55" text-anchor="middle">BACnet</text>
            <text class="tick-label" x="182" y="75" text-anchor="middle">Production</text>
            <text class="tick-label" x="182" y="90" text-anchor="middle">CVC</text>

            <rect class="frame-line" x="250" y="30" width="105" height="70" fill="none"></rect>
            <text class="label-soft" x="302" y="55" text-anchor="middle">KNX</text>
            <text class="tick-label" x="302" y="75" text-anchor="middle">Gestion</text>
            <text class="tick-label" x="302" y="90" text-anchor="middle">terminale</text>

            <rect class="frame-line" x="370" y="30" width="100" height="70" fill="none"></rect>
            <text class="label-soft" x="420" y="55" text-anchor="middle">LonWorks</text>
            <text class="tick-label" x="420" y="75" text-anchor="middle">Bâtiments</text>
            <text class="tick-label" x="420" y="90" text-anchor="middle">existants</text>

            <rect class="frame-line" x="140" y="170" width="200" height="50" fill="none"></rect>
            <text class="label-soft" x="240" y="195" text-anchor="middle">Supervision commune</text>
            <text class="label-soft" x="240" y="210" text-anchor="middle">(via passerelles)</text>

            <line class="curve-main" x1="62" y1="100" x2="200" y2="170"></line>
            <line class="curve-main" x1="182" y1="100" x2="220" y2="170"></line>
            <line class="curve-main" x1="302" y1="100" x2="270" y2="170"></line>
            <line class="curve-main" x1="420" y1="100" x2="300" y2="170"></line>
          </svg>
        `,
        notes: [
          '<strong>Modbus</strong> : comptage d\'énergie, automates, variateurs de vitesse.',
          '<strong>BACnet</strong> : production CVC dans le tertiaire.',
          '<strong>KNX</strong> : gestion terminale (éclairage, stores) et domotique résidentielle.',
          '<strong>LonWorks</strong> : robuste, présent dans de nombreux bâtiments existants.'
        ],
        reading: 'Repère les quatre protocoles en haut avec leur usage typique, tous reliés via des passerelles à une supervision commune en bas.',
        caption: 'Un même bâtiment tertiaire combine fréquemment plusieurs protocoles, reliés via des passerelles à une supervision commune.'
      },
      recap: [
        '<strong>Modbus</strong> : maître/esclave, simple et économique — comptage, automates, variateurs.',
        '<strong>BACnet</strong> : standard de référence pour la production CVC dans le tertiaire (norme ASHRAE, internationale depuis 2003).',
        '<strong>KNX</strong> : standard européen de la domotique résidentielle et de la gestion terminale en tertiaire (éclairage, stores).',
        '<strong>LonWorks</strong> : peer-to-peer, topologie libre, présent surtout dans les bâtiments existants.',
        'Temps de cycle d\'un bus maître-esclave : $t_{cycle}=n_{esclaves}\\times t_{requête}$.'
      ],
      piege: 'Ne pas croire qu\'un seul protocole devrait couvrir <strong>l\'intégralité</strong> d\'un bâtiment tertiaire : dans la pratique, plusieurs protocoles cohabitent selon les lots (KNX pour les bureaux, BACnet pour la production CVC, Modbus pour le comptage), reliés par des <strong>passerelles</strong> vers une supervision commune — la compatibilité entre protocoles est donc un enjeu central, pas un cas exceptionnel. Attention aussi à ne pas confondre le <strong>protocole</strong> (langage logique de communication, ex : BACnet) avec le <strong>média physique</strong> sur lequel il circule (module D1-1, ex : bus filaire ou IP) : un même protocole peut souvent circuler sur plusieurs médias différents (par exemple BACnet sur bus filaire MS/TP ou sur réseau IP).'
    },

    quiz: [
      {
        q: 'Le protocole BACnet est principalement associé à :',
        options: [
          'La domotique résidentielle uniquement',
          'La production CVC (chauffage, ventilation, climatisation) dans le tertiaire',
          'Le comptage d\'énergie uniquement',
          'La téléphonie sur IP'
        ],
        answer: 1,
        correction: 'Le BACnet, développé spécifiquement pour la gestion technique du bâtiment et normalisé internationalement depuis 2003, s\'est imposé comme le standard de référence pour la production CVC dans le tertiaire.'
      },
      {
        q: 'Le protocole Modbus fonctionne selon une architecture :',
        options: ['Peer-to-peer sans superviseur', 'Maître/esclave', 'Uniquement sans fil', 'Uniquement sur fibre optique'],
        answer: 1,
        correction: 'Le Modbus fonctionne selon une architecture maître/esclave, simple et peu coûteuse à mettre en œuvre : très utilisé pour le comptage d\'énergie, les automates et les variateurs de vitesse.'
      },
      {
        q: 'Le KNX est principalement le standard de référence pour :',
        options: [
          'La production centralisée de chauffage',
          'La domotique résidentielle et la gestion terminale (éclairage, stores) en tertiaire',
          'Le comptage industriel',
          'Les réseaux longue distance entre bâtiments'
        ],
        answer: 1,
        correction: 'Le KNX, standard européen, est la référence pour tout ce qui touche directement à l\'usager final et à l\'ambiance d\'une pièce : éclairage, stores, prises pilotées, en domotique résidentielle comme en gestion terminale tertiaire.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'un bus Modbus de comptage d\'énergie',
          'un bus de supervision de variateurs de vitesse',
          'un réseau de capteurs de température d\'une GTB',
          'un bus d\'automates de production de chaud/froid'
        ]);
        const n = rand(6, 30);
        const tRequete = rand(30, 150);
        const tCycle = n * tRequete;
        return {
          statement: `Sur ${contexte}, le maître interroge $n_{esclaves}=${n}$ équipements, chaque requête durant $t_{requête}=${tRequete}$ ms.<br/><br/>Calcule le temps de cycle complet $t_{cycle}$ nécessaire pour interroger l'ensemble des équipements (en ms).`,
          answer: tCycle,
          tolerance: Math.max(5, tCycle * 0.02),
          unit: 'ms',
          hint: 'Applique $t_{cycle} = n_{esclaves}\\times t_{requête}$.',
          solution: [
            `$t_{cycle} = n_{esclaves}\\times t_{requête} = ${n}\\times ${tRequete} = ${tCycle}$ ms.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un bâtiment tertiaire neuf doit intégrer trois systèmes distincts au sein d\'une même supervision : la gestion de l\'éclairage et des stores des bureaux, la production de chauffage/climatisation centralisée (CTA, PAC), et le comptage divisionnaire des énergies de chaque étage.',
      tasks: [
        'Quel protocole recommander pour la gestion de l\'éclairage et des stores des bureaux ? Justifier.',
        'Quel protocole recommander pour la production de chauffage/climatisation centralisée ? Justifier.',
        'Quel protocole recommander pour le comptage divisionnaire des énergies ? Justifier.',
        'Ces trois protocoles pourront-ils remonter vers une supervision unique ? À quelle condition ?'
      ],
      solutions: [
        'Le <strong>KNX</strong> est recommandé pour l\'éclairage et les stores : c\'est le standard de référence pour la gestion terminale d\'un tertiaire, orientée usager final et ambiance de pièce.',
        'Le <strong>BACnet</strong> est recommandé pour la production CVC centralisée : c\'est le standard historiquement développé pour la gestion technique du bâtiment, largement adopté pour ce type d\'application.',
        'Le <strong>Modbus</strong> est recommandé pour le comptage divisionnaire : simple, économique, et particulièrement répandu pour ce type d\'application de relevé.',
        'Oui, ces trois protocoles peuvent remonter vers une <strong>supervision unique</strong>, à condition d\'installer des <strong>passerelles</strong> (gateways) assurant la traduction entre KNX, BACnet et Modbus vers le protocole ou le format de données utilisé par le superviseur central — c\'est précisément l\'enjeu de <strong>compatibilité</strong> entre protocoles évoqué dans ce module.'
      ],
      finalAnswer: 'KNX pour l\'éclairage/stores, BACnet pour la production CVC, Modbus pour le comptage : trois protocoles adaptés chacun à leur usage, réunis dans une supervision commune via des passerelles.'
    },

    evaluation: {
      title: 'Évaluation — Standards de communication',
      duration: '20 min',
      questions: [
        {
          statement: 'Un bus maître-esclave interroge $n_{esclaves}=15$ équipements, chaque requête durant $t_{requête}=60$ ms. Calculer $t_{cycle}$ (en ms).',
          type: 'numeric',
          answer: 900,
          tolerance: 20,
          unit: 'ms',
          points: 3,
          correction: '$t_{cycle} = n_{esclaves}\\times t_{requête} = 15\\times 60 = 900$ ms.'
        },
        {
          statement: 'Le protocole développé spécifiquement pour la gestion technique du bâtiment, devenu norme internationale en 2003, est :',
          type: 'multiple-choice',
          options: ['Modbus', 'KNX', 'BACnet', 'LonWorks'],
          answer: 2,
          points: 2,
          correction: 'Le BACnet a été développé par l\'ASHRAE spécifiquement pour la gestion technique du bâtiment, et est devenu une norme internationale en 2003.'
        },
        {
          statement: 'Le protocole LonWorks (LON) se caractérise notamment par :',
          type: 'multiple-choice',
          options: [
            'Une architecture obligatoirement maître/esclave',
            'Une communication peer-to-peer, sans superviseur central obligatoire',
            'Un usage exclusivement réservé à la domotique résidentielle neuve',
            'L\'absence totale de nœuds installés dans le monde'
          ],
          answer: 1,
          points: 2,
          correction: 'LonWorks est un protocole peer-to-peer à topologie réseau libre, sans superviseur central obligatoire ; il reste très présent dans de nombreux bâtiments existants pour sa robustesse.'
        },
        {
          statement: 'Faire dialoguer un lot KNX (éclairage) et un lot BACnet (CVC) au sein d\'une même supervision nécessite généralement :',
          type: 'multiple-choice',
          options: [
            'De remplacer systématiquement l\'un des deux protocoles',
            'Une passerelle assurant la traduction entre les deux protocoles',
            'Rien de particulier, ils sont nativement identiques',
            'De renoncer à toute supervision commune'
          ],
          answer: 1,
          points: 3,
          correction: 'KNX et BACnet sont deux protocoles distincts : les faire cohabiter dans une supervision commune nécessite une passerelle assurant la traduction entre les deux, c\'est l\'enjeu de compatibilité entre protocoles.'
        }
      ]
    }
  });
