/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-c2-1-moteurs-electriques.js
   BTS FED — S8-C2-1 Moteurs électriques (asynchrone, EC/brushless)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-c2-1-moteurs-electriques',
    level: 3, subject: 'fed',
    icon: '🔄',
    title: 'Moteurs électriques',
    subtitle: 'Moteur asynchrone (vitesse de synchronisme, glissement), moteurs EC',
    keywords: ['Moteur asynchrone', 'Vitesse de synchronisme', 'Glissement', 'Moteur EC', 'Brushless', 'Autosynchrone'],
    physics: 'Ventilateurs de CTA, pompes de circulation, compresseurs : la quasi-totalité des équipements en mouvement d\'une installation de génie climatique sont entraînés par un <strong>moteur électrique</strong>. Comprendre les deux grandes familles disponibles — <strong>asynchrone</strong> et <strong>à commutation électronique (EC)</strong> — permet de choisir le bon moteur selon l\'usage.',

    cours: {
      intro: 'Le <strong>moteur asynchrone</strong> est, historiquement, le moteur le plus répandu en génie climatique : robuste, simple, peu coûteux, il équipe pompes, ventilateurs et compresseurs depuis des décennies. Son principe de fonctionnement repose sur un champ magnétique tournant créé par le stator, qui entraîne le rotor à une vitesse légèrement <strong>inférieure</strong> à ce champ tournant — d\'où son nom.<br/><br/>Plus récemment, les <strong>moteurs à commutation électronique (EC)</strong>, aussi appelés moteurs <strong>brushless</strong> ou <strong>autosynchrones</strong>, se sont largement répandus sur les ventilateurs de CTA et les circulateurs modernes. Contrairement au moteur asynchrone, un moteur EC est piloté par une électronique intégrée qui synchronise parfaitement la vitesse du rotor avec le champ tournant : il n\'y a alors <strong>aucun glissement</strong>.<br/><br/>Ces deux familles de moteurs se distinguent aussi par leur domaine d\'application privilégié : le moteur asynchrone reste très employé pour des applications à vitesse fixe ou peu variable, tandis que le moteur EC excelle sur les ventilateurs et pompes à <strong>vitesse variable</strong>, où son excellent rendement à charge partielle en fait un choix particulièrement pertinent.',
      definitions: [
        { term: 'Moteur asynchrone', def: 'Moteur dont le rotor est entraîné par le champ magnétique tournant créé par le stator, à une vitesse toujours légèrement inférieure à celle de ce champ (d\'où l\'existence d\'un glissement). Robuste et économique, très répandu sur pompes, ventilateurs et compresseurs.' },
        { term: 'Vitesse de synchronisme $N_s$', def: 'Vitesse de rotation du champ magnétique tournant créé par le stator, exprimée en tr/min : $N_s = 60\\,f/p$, avec $f$ la fréquence du réseau (Hz) et $p$ le nombre de paires de pôles du moteur.' },
        { term: 'Glissement $g$', def: 'Écart relatif entre la vitesse de synchronisme $N_s$ et la vitesse réelle de rotation du rotor $N$ : $g = (N_s - N)/N_s$. Caractéristique du moteur asynchrone, généralement de quelques % à pleine charge.' },
        { term: 'Moteur EC (brushless, autosynchrone)', def: 'Moteur à commutation électronique, sans balais, dont une électronique intégrée synchronise en permanence la vitesse du rotor avec le champ tournant : contrairement au moteur asynchrone, il n\'existe <strong>aucun glissement</strong>. Utilisé notamment sur les ventilateurs de CTA et circulateurs à vitesse variable.' }
      ],
      method: {
        title: 'Calculer la vitesse de synchronisme et le glissement d\'un moteur asynchrone',
        steps: [
          '<strong>Relever la fréquence</strong> $f$ du réseau (Hz, $50$ Hz en France) et le <strong>nombre de paires de pôles</strong> $p$ du moteur (donnée constructeur, souvent $1$, $2$ ou $3$).',
          '<strong>Calculer la vitesse de synchronisme</strong> $N_s = 60\\,f/p$ (tr/min).',
          '<strong>Relever la vitesse réelle</strong> $N$ du rotor en charge (plaque signalétique ou mesure).',
          '<strong>Calculer le glissement</strong> $g = (N_s - N)/N_s$, généralement exprimé en %.',
          '<strong>Interpréter</strong> : un glissement nul ($N=N_s$) n\'existe jamais en pratique pour un moteur asynchrone — c\'est précisément l\'existence de ce glissement qui permet au rotor de recevoir un couple.'
        ]
      },
      example: {
        statement: 'Un moteur asynchrone triphasé possède $p=2$ paires de pôles et est alimenté par un réseau $f=50$ Hz. En pleine charge, sa vitesse réelle mesurée est $N=1450$ tr/min.<br/><br/>Calculer sa vitesse de synchronisme $N_s$, puis son glissement $g$ (en %).',
        steps: [
          'Vitesse de synchronisme : $N_s = 60\\,f/p = 60 \\times 50 / 2 = 1500$ tr/min.',
          'Glissement : $g = (N_s - N)/N_s = (1500 - 1450)/1500 \\approx 0{,}033$, soit environ $3{,}3\\%$.'
        ],
        answer: 'Ce moteur tourne à $1450$ tr/min, soit un glissement d\'environ $3{,}3\\%$ par rapport à sa vitesse de synchronisme de $1500$ tr/min — une valeur tout à fait typique pour un moteur asynchrone en pleine charge.'
      },
      formulas: [
        '$N_s = \\dfrac{60\\,f}{p}$ (vitesse de synchronisme, tr/min, avec $f$ en Hz et $p$ le nombre de paires de pôles)',
        '$g = \\dfrac{N_s - N}{N_s}$ (glissement du moteur asynchrone)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Deux familles de moteurs électriques',
        title: 'Moteur asynchrone (avec glissement) vs moteur EC (sans glissement)',
        description: 'Le moteur asynchrone tourne toujours à une vitesse inférieure à la vitesse de synchronisme (glissement), tandis que le moteur EC synchronise parfaitement la vitesse du rotor grâce à son électronique intégrée.',
        svg: `
          <svg viewBox="0 0 480 220" role="img" aria-labelledby="c21-graph-title c21-graph-desc">
            <title id="c21-graph-title">Comparaison moteur asynchrone et moteur EC</title>
            <desc id="c21-graph-desc">Deux boites cote a cote. A gauche, moteur asynchrone, avec une fleche indiquant une vitesse rotor legerement inferieure a la vitesse de synchronisme du champ tournant, ecart nomme glissement. A droite, moteur EC, avec une fleche indiquant une vitesse rotor egale a la vitesse de synchronisme, ecart nul, pilotee par une electronique integree.</desc>

            <rect class="frame-line" x="30" y="40" width="180" height="140" fill="none"></rect>
            <text class="label-soft" x="120" y="65" text-anchor="middle">Moteur asynchrone</text>
            <text class="tick-label" x="120" y="100" text-anchor="middle">Champ tournant : Ns</text>
            <text class="tick-label" x="120" y="125" text-anchor="middle">Rotor : N &lt; Ns</text>
            <text class="annotation-label" x="120" y="155" text-anchor="middle">glissement g = (Ns−N)/Ns ≠ 0</text>

            <rect class="frame-line" x="270" y="40" width="180" height="140" fill="none"></rect>
            <text class="label-soft" x="360" y="65" text-anchor="middle">Moteur EC (brushless)</text>
            <text class="tick-label" x="360" y="100" text-anchor="middle">Champ tournant : Ns</text>
            <text class="tick-label" x="360" y="125" text-anchor="middle">Rotor : N = Ns</text>
            <text class="annotation-label" x="360" y="155" text-anchor="middle">glissement nul (électronique)</text>
          </svg>
        `,
        notes: [
          'Le moteur <strong>asynchrone</strong> tourne toujours légèrement plus lentement que son champ tournant : c\'est le <strong>glissement</strong> qui rend possible le couple moteur.',
          'Le moteur <strong>EC</strong>, piloté électroniquement, synchronise en permanence la vitesse du rotor sur le champ tournant : le glissement est nul par construction.',
          'Cette différence explique pourquoi le moteur EC offre un excellent rendement à charge partielle, ce qui en fait un choix privilégié pour les ventilateurs et pompes à vitesse variable.'
        ],
        reading: 'Compare les deux boîtes : à gauche, un écart entre vitesse du champ et vitesse du rotor (glissement) ; à droite, aucun écart (moteur EC synchronisé électroniquement).',
        caption: 'Le glissement distingue fondamentalement le moteur asynchrone du moteur EC, piloté électroniquement sans glissement.'
      },
      recap: [
        'Le <strong>moteur asynchrone</strong> est entraîné par un champ tournant, à une vitesse toujours inférieure à celui-ci : c\'est le <strong>glissement</strong>.',
        'Vitesse de synchronisme : $N_s = 60f/p$. Glissement : $g = (N_s-N)/N_s$.',
        'Le <strong>moteur EC</strong> (brushless, autosynchrone) est piloté électroniquement, sans glissement, contrairement au moteur asynchrone.',
        'Le moteur EC est particulièrement adapté aux ventilateurs et pompes à <strong>vitesse variable</strong>, grâce à son excellent rendement à charge partielle.',
        'Le moteur asynchrone reste largement employé pour les applications à vitesse fixe ou peu variable, pour son coût et sa robustesse.'
      ],
      piege: 'Ne pas confondre <strong>vitesse de synchronisme</strong> $N_s$ (vitesse du champ tournant, calculée uniquement à partir de $f$ et $p$) et <strong>vitesse réelle</strong> $N$ du rotor (toujours inférieure pour un moteur asynchrone, mesurée ou lue sur plaque signalétique) : le glissement $g$ est précisément l\'écart relatif entre les deux. Attention aussi à ne pas croire qu\'un moteur EC serait simplement « un moteur asynchrone plus performant » : ce sont deux technologies différentes dans leur principe (champ tournant subi avec glissement, contre pilotage électronique synchronisé sans glissement), pas une simple amélioration incrémentale l\'une de l\'autre.'
    },

    quiz: [
      {
        q: 'La vitesse de synchronisme d\'un moteur asynchrone se calcule par :',
        options: ['$N_s = 60\\,f/p$', '$N_s = f/(60\\,p)$', '$N_s = 60\\,p/f$', '$N_s = f\\times p/60$'],
        answer: 0,
        correction: '$N_s = 60\\,f/p$, avec $f$ la fréquence du réseau (Hz) et $p$ le nombre de paires de pôles du moteur.'
      },
      {
        q: 'Le glissement d\'un moteur asynchrone traduit :',
        options: [
          'Une panne du moteur',
          'L\'écart relatif entre la vitesse de synchronisme du champ tournant et la vitesse réelle du rotor',
          'Le rendement électrique du moteur',
          'Le nombre de paires de pôles du moteur'
        ],
        answer: 1,
        correction: 'Le glissement $g=(N_s-N)/N_s$ traduit l\'écart relatif entre la vitesse du champ tournant et la vitesse réelle du rotor, toujours inférieure pour un moteur asynchrone — c\'est ce qui permet au rotor de recevoir un couple.'
      },
      {
        q: 'Contrairement au moteur asynchrone, un moteur EC (brushless, autosynchrone) :',
        options: [
          'Fonctionne uniquement en courant continu sans électronique',
          'Ne peut pas être utilisé à vitesse variable',
          'Est piloté par une électronique intégrée qui synchronise le rotor sans glissement',
          'Nécessite obligatoirement des balais pour fonctionner'
        ],
        answer: 2,
        correction: 'Un moteur EC est piloté par une électronique intégrée qui synchronise en permanence la vitesse du rotor avec le champ tournant, sans aucun glissement — d\'où son excellent rendement, notamment à vitesse variable.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const application = pick([
          'un ventilateur de CTA',
          'une pompe de circulation de chauffage',
          'un compresseur frigorifique',
          'un moto-ventilateur de condenseur'
        ]);
        const p = pick([1, 2, 3]);
        const Ns = (60 * 50) / p;
        const glissementPct = randFloat(2, 6, 1);
        const N = Math.round(Ns * (1 - glissementPct / 100));
        const gReel = parseFloat((((Ns - N) / Ns) * 100).toFixed(1));
        return {
          statement: `${application[0].toUpperCase()}${application.slice(1)} est entraîné(e) par un moteur asynchrone triphasé de $p=${p}$ paire(s) de pôles, alimenté par un réseau $f=50$ Hz. Sa vitesse réelle mesurée en charge est $N=${N}$ tr/min.<br/><br/>Calcule la vitesse de synchronisme $N_s$, puis le glissement $g$ de ce moteur (en %, arrondi au dixième).`,
          answer: gReel,
          tolerance: 0.3,
          unit: '%',
          hint: 'Calcule d\'abord $N_s = 60f/p$, puis $g = (N_s-N)/N_s$.',
          solution: [
            `$N_s = 60\\times 50/${p} = ${Ns}$ tr/min.`,
            `$g = (N_s-N)/N_s = (${Ns}-${N})/${Ns} \\approx ${fr(gReel, 1)}\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un exploitant hésite entre deux ventilateurs pour une CTA fonctionnant à débit variable toute l\'année, avec de longues périodes à charge partielle : un ventilateur à moteur asynchrone classique ($p=2$, $f=50$ Hz, vitesse mesurée en charge nominale $N=2880$ tr/min), et un ventilateur à moteur EC.',
      tasks: [
        'Calculer la vitesse de synchronisme $N_s$ du moteur asynchrone.',
        'Calculer son glissement $g$ en charge nominale.',
        'Quelle serait la valeur du glissement pour le moteur EC équivalent, dans les mêmes conditions de charge ?',
        'Sachant que la CTA fonctionne majoritairement à charge partielle, quel type de moteur recommander, et pourquoi ?'
      ],
      solutions: [
        '$N_s = 60\\times 50/2 = 3000$ tr/min.',
        '$g = (3000-2880)/3000 = 120/3000 = 0{,}04$, soit $4\\%$.',
        'Par définition du moteur EC, piloté électroniquement pour synchroniser exactement la vitesse du rotor avec la consigne, le glissement est <strong>nul</strong> ($g=0\\%$), quelle que soit la charge.',
        'Pour une CTA fonctionnant majoritairement à <strong>charge partielle</strong> et à <strong>vitesse variable</strong>, le moteur EC est recommandé : son rendement reste élevé même à charge réduite, contrairement à un moteur asynchrone classique dont le rendement se dégrade davantage hors de son point de fonctionnement nominal. Le surcoût à l\'achat d\'un moteur EC est généralement compensé par les économies d\'énergie sur la durée de vie de l\'installation.'
      ],
      finalAnswer: 'Moteur asynchrone : $N_s=3000$ tr/min, $g=4\\%$ en charge nominale. Moteur EC : glissement nul par principe. Pour une CTA à charge partielle fréquente, le moteur EC est préférable pour son meilleur rendement en dehors du point nominal.'
    },

    evaluation: {
      title: 'Évaluation — Moteurs électriques',
      duration: '15 min',
      questions: [
        {
          statement: 'Un moteur asynchrone a $p=1$ paire de pôles, alimenté en $f=50$ Hz. Calculer sa vitesse de synchronisme $N_s$ (en tr/min).',
          type: 'numeric',
          answer: 3000,
          tolerance: 5,
          unit: 'tr/min',
          points: 2,
          correction: '$N_s = 60\\times 50/1 = 3000$ tr/min.'
        },
        {
          statement: 'Pour ce moteur ($N_s=3000$ tr/min), la vitesse réelle mesurée en charge est $N=2910$ tr/min. Calculer le glissement $g$ (en %).',
          type: 'numeric',
          answer: 3,
          tolerance: 0.3,
          unit: '%',
          points: 3,
          correction: '$g = (3000-2910)/3000 = 90/3000 = 3\\%$.'
        },
        {
          statement: 'Un moteur EC (brushless, autosynchrone) se distingue d\'un moteur asynchrone par :',
          type: 'multiple-choice',
          options: [
            'L\'absence de glissement, grâce à un pilotage électronique intégré',
            'L\'impossibilité de fonctionner à vitesse variable',
            'Un fonctionnement uniquement en triphasé haute puissance',
            'L\'absence totale de champ magnétique tournant'
          ],
          answer: 0,
          points: 2,
          correction: 'Un moteur EC synchronise en permanence, par électronique intégrée, la vitesse du rotor avec le champ tournant : il n\'y a donc aucun glissement, contrairement au moteur asynchrone.'
        }
      ]
    }
  });
