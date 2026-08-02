/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a5-thermodynamique-appliquee.js
   BTS FED — S8-A5 Thermodynamique appliquée (cycle frigorifique, COP)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a5-thermodynamique-appliquee',
    level: 3, subject: 'fed',
    icon: '❄️',
    title: 'Thermodynamique appliquée',
    subtitle: 'Cycle frigorifique à compression, coefficient de performance (COP)',
    keywords: ['Cycle frigorifique', 'COP', 'Évaporateur', 'Condenseur', 'Fluide frigorigène', 'GWP'],
    physics: 'Une pompe à chaleur ne « fabrique » pas de chaleur : elle la <strong>déplace</strong> d\'un milieu froid vers un milieu chaud, en consommant un peu de travail électrique pour y parvenir. Comprendre le <strong>cycle frigorifique à compression</strong> et savoir calculer son <strong>coefficient de performance (COP)</strong> est la clé pour évaluer l\'efficacité énergétique de toute PAC ou tout groupe froid.',

    cours: {
      intro: 'Le cycle frigorifique à compression fait circuler un <strong>fluide frigorigène</strong> dans une boucle fermée composée de quatre organes : l\'<strong>évaporateur</strong>, le <strong>compresseur</strong>, le <strong>condenseur</strong> et le <strong>détendeur</strong>.<br/><br/>À l\'évaporateur, le fluide, à basse pression et basse température, absorbe la chaleur $Q_f$ du milieu à refroidir en s\'évaporant. Le compresseur comprime ensuite cette vapeur en lui fournissant un travail électrique $W$, ce qui élève sa pression et sa température. Au condenseur, le fluide cède la chaleur $Q_c$ au milieu à chauffer en se condensant. Enfin, le détendeur fait chuter brutalement sa pression, ramenant le fluide à l\'état initial avant qu\'il ne retourne à l\'évaporateur.<br/><br/>Ce cycle permet aussi bien de <strong>chauffer</strong> (on valorise $Q_c$ au condenseur : c\'est une pompe à chaleur) que de <strong>refroidir</strong> (on valorise $Q_f$ à l\'évaporateur : c\'est un groupe froid ou un climatiseur) — les deux fonctions reposent sur exactement le même cycle.',
      definitions: [
        { term: 'Évaporateur', def: 'Échangeur où le fluide frigorigène, à basse pression, absorbe la chaleur $Q_f$ du milieu à refroidir en s\'évaporant (passage liquide → vapeur).' },
        { term: 'Compresseur', def: 'Organe qui comprime la vapeur de fluide frigorigène en lui fournissant un travail $W$ (électrique), ce qui augmente sa pression et sa température.' },
        { term: 'Condenseur', def: 'Échangeur où le fluide frigorigène, à haute pression, cède la chaleur $Q_c$ au milieu à chauffer en se condensant (passage vapeur → liquide).' },
        { term: 'Détendeur', def: 'Organe qui fait chuter la pression du fluide frigorigène liquide, provoquant une baisse de température, avant son retour à l\'évaporateur : referme le cycle.' },
        { term: 'Coefficient de performance en chauffage $\\text{COP}_{\\text{PAC}}$', def: 'Rapport entre la chaleur utile cédée au condenseur et le travail consommé au compresseur : $\\text{COP}_{\\text{PAC}} = Q_c / W$. Toujours supérieur à $1$.' },
        { term: 'Coefficient de performance en froid $\\text{COP}_{\\text{froid}}$', def: 'Rapport entre la chaleur extraite à l\'évaporateur et le travail consommé au compresseur : $\\text{COP}_{\\text{froid}} = Q_f / W$, utilisé pour un groupe froid ou un climatiseur.' },
        { term: 'GWP et ODP d\'un fluide frigorigène', def: 'Le <strong>GWP</strong> (Global Warming Potential) mesure l\'impact d\'une fuite de fluide sur l\'effet de serre, relativement au $\\text{CO}_2$ (GWP $=1$) ; l\'<strong>ODP</strong> (Ozone Depletion Potential) mesure son impact sur la couche d\'ozone. Le choix d\'un fluide frigorigène combine toujours performance thermodynamique et impact environnemental le plus faible possible.' }
      ],
      method: {
        title: 'Analyser un cycle frigorifique et calculer son COP',
        steps: [
          '<strong>Identifier les quatre organes</strong> et le sens de circulation du fluide : évaporateur → compresseur → condenseur → détendeur → retour évaporateur.',
          '<strong>Repérer les échanges d\'énergie</strong> : $Q_f$ absorbée à l\'évaporateur (basse température), $W$ fourni au compresseur (travail électrique), $Q_c$ cédée au condenseur (haute température).',
          '<strong>Appliquer la conservation de l\'énergie</strong> sur le cycle fermé : $Q_c = Q_f + W$.',
          '<strong>Calculer le COP adapté à l\'usage</strong> : $\\text{COP}_{\\text{PAC}} = Q_c/W$ pour une utilisation en chauffage, $\\text{COP}_{\\text{froid}} = Q_f/W$ pour une utilisation en production de froid.',
          '<strong>Vérifier la cohérence</strong> : la relation $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$ est toujours vraie, quel que soit le fluide ou la machine.'
        ]
      },
      example: {
        statement: 'Une pompe à chaleur air/eau extrait $Q_f = 6$ kW du jardin à l\'évaporateur, pour un travail fourni au compresseur $W = 2$ kW.<br/><br/>Calculer la chaleur $Q_c$ cédée au condenseur (valorisée pour le chauffage), puis le $\\text{COP}_{\\text{PAC}}$ de cette installation.',
        steps: [
          'Conservation de l\'énergie sur le cycle : $Q_c = Q_f + W = 6 + 2 = 8$ kW.',
          '$\\text{COP}_{\\text{PAC}} = Q_c / W = 8 / 2 = 4$.',
          'Vérification par l\'autre COP : $\\text{COP}_{\\text{froid}} = Q_f / W = 6 / 2 = 3$, et bien $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1 = 3 + 1 = 4$ : cohérent.'
        ],
        answer: '$Q_c = 8$ kW et $\\text{COP}_{\\text{PAC}} = 4$ : pour $1$ kWh électrique consommé au compresseur, cette PAC restitue $4$ kWh de chaleur au bâtiment — dont $3$ kWh prélevés gratuitement dans le jardin.'
      },
      formulas: [
        '$Q_c = Q_f + W$ (conservation de l\'énergie sur le cycle frigorifique)',
        '$\\text{COP}_{\\text{PAC}} = \\dfrac{Q_c}{W}$ (coefficient de performance en chauffage)',
        '$\\text{COP}_{\\text{froid}} = \\dfrac{Q_f}{W}$ (coefficient de performance en production de froid)',
        '$\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$ (relation toujours vraie)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Cycle frigorifique à compression',
        title: 'Évaporateur → Compresseur → Condenseur → Détendeur',
        description: 'Le fluide frigorigène circule en boucle fermée : il absorbe Qf à l\'évaporateur, reçoit le travail W au compresseur, cède Qc au condenseur, puis chute de pression au détendeur avant de revenir à l\'évaporateur.',
        svg: `
          <svg viewBox="0 0 480 300" role="img" aria-labelledby="thermo-graph-title thermo-graph-desc">
            <title id="thermo-graph-title">Cycle frigorifique a compression en quatre organes</title>
            <desc id="thermo-graph-desc">Schema en quatre boites reliees par des fleches formant une boucle fermee : evaporateur en bas a gauche, compresseur en haut a gauche, condenseur en haut a droite, detendeur en bas a droite. Une fleche Qf entre dans l'evaporateur, une fleche W entre dans le compresseur, une fleche Qc sort du condenseur. Le sens de circulation est evaporateur vers compresseur vers condenseur vers detendeur puis retour a l'evaporateur.</desc>

            <defs>
              <marker id="arrow-fed-thermo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- compresseur (haut gauche) -->
            <rect class="frame-line" x="60" y="60" width="140" height="60" fill="none"></rect>
            <text class="label-soft" x="130" y="95" text-anchor="middle">Compresseur</text>

            <!-- condenseur (haut droite) -->
            <rect class="frame-line" x="280" y="60" width="140" height="60" fill="none"></rect>
            <text class="label-soft" x="350" y="95" text-anchor="middle">Condenseur</text>

            <!-- detendeur (bas droite) -->
            <rect class="frame-line" x="280" y="180" width="140" height="60" fill="none"></rect>
            <text class="label-soft" x="350" y="215" text-anchor="middle">Détendeur</text>

            <!-- evaporateur (bas gauche) -->
            <rect class="frame-line" x="60" y="180" width="140" height="60" fill="none"></rect>
            <text class="label-soft" x="130" y="215" text-anchor="middle">Évaporateur</text>

            <!-- fleche evaporateur -> compresseur -->
            <line class="curve-main" x1="130" y1="180" x2="130" y2="120" marker-end="url(#arrow-fed-thermo)"></line>

            <!-- fleche compresseur -> condenseur -->
            <line class="curve-main" x1="200" y1="90" x2="280" y2="90" marker-end="url(#arrow-fed-thermo)"></line>

            <!-- fleche condenseur -> detendeur -->
            <line class="curve-main" x1="350" y1="120" x2="350" y2="180" marker-end="url(#arrow-fed-thermo)"></line>

            <!-- fleche detendeur -> evaporateur -->
            <line class="curve-main" x1="280" y1="210" x2="200" y2="210" marker-end="url(#arrow-fed-thermo)"></line>

            <!-- entree Qf sur evaporateur -->
            <line class="guide-line" x1="20" y1="240" x2="60" y2="215" marker-end="url(#arrow-fed-thermo)"></line>
            <text class="annotation-label" x="15" y="255" text-anchor="start">Qf (milieu froid)</text>

            <!-- entree W sur compresseur -->
            <line class="guide-line" x1="130" y1="20" x2="130" y2="60" marker-end="url(#arrow-fed-thermo)"></line>
            <text class="annotation-label" x="130" y="15" text-anchor="middle">W (travail électrique)</text>

            <!-- sortie Qc sur condenseur -->
            <line class="guide-line" x1="420" y1="65" x2="450" y2="40" marker-end="url(#arrow-fed-thermo)"></line>
            <text class="annotation-label" x="475" y="33" text-anchor="end">Qc (milieu chaud)</text>

            <text class="label-soft" x="240" y="285" text-anchor="middle">Qc = Qf + W</text>
          </svg>
        `,
        notes: [
          'Le cycle se parcourt toujours dans le même sens : <strong>évaporateur → compresseur → condenseur → détendeur</strong>, puis retour à l\'évaporateur.',
          'Trois échanges d\'énergie traversent la frontière du système : $Q_f$ entre à l\'évaporateur, $W$ entre au compresseur, $Q_c$ sort au condenseur.',
          'La conservation de l\'énergie impose $Q_c = Q_f + W$ : la chaleur cédée au condenseur est toujours supérieure à celle prélevée à l\'évaporateur.'
        ],
        reading: 'Suis la boucle dans le sens des flèches à partir de l\'évaporateur : repère où Qf entre, où W entre, et où Qc sort — leur somme algébrique se referme sur le cycle.',
        caption: 'Cycle frigorifique à compression : les quatre organes (évaporateur, compresseur, condenseur, détendeur) et les échanges d\'énergie associés.'
      },
      recap: [
        'Le cycle frigorifique fait circuler un fluide frigorigène dans quatre organes : <strong>évaporateur</strong> (absorbe $Q_f$), <strong>compresseur</strong> (reçoit $W$), <strong>condenseur</strong> (cède $Q_c$), <strong>détendeur</strong> (chute de pression).',
        'La conservation de l\'énergie sur le cycle donne $Q_c = Q_f + W$.',
        'En chauffage, on valorise $Q_c$ : $\\text{COP}_{\\text{PAC}} = Q_c/W$. En froid, on valorise $Q_f$ : $\\text{COP}_{\\text{froid}} = Q_f/W$.',
        'Relation toujours vraie : $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$.',
        'Le choix du fluide frigorigène combine performance thermodynamique et impact environnemental (<strong>GWP</strong>, <strong>ODP</strong>), à minimiser autant que possible.'
      ],
      piege: 'Un $\\text{COP} > 1$ ne viole pas le premier principe : la PAC ne <strong>crée</strong> pas d\'énergie, elle <strong>déplace</strong> une chaleur prélevée gratuitement dans le milieu extérieur ($Q_f$), le travail $W$ ne servant qu\'à « pomper » cette chaleur vers un niveau de température plus élevé. Attention aussi à ne pas confondre les deux COP d\'une même machine réversible : $\\text{COP}_{\\text{PAC}}$ (chauffage) est toujours supérieur de $1$ à $\\text{COP}_{\\text{froid}}$ (production de froid), ce n\'est jamais la même valeur pour les deux usages.'
    },

    quiz: [
      {
        q: 'Dans un cycle frigorifique à compression, l\'évaporateur :',
        options: [
          'Fournit le travail $W$ au fluide frigorigène',
          'Absorbe la chaleur $Q_f$ du milieu à refroidir, en évaporant le fluide frigorigène',
          'Cède la chaleur $Q_c$ au milieu à chauffer',
          'Fait chuter la pression du fluide frigorigène'
        ],
        answer: 1,
        correction: 'L\'évaporateur est l\'échangeur où le fluide frigorigène, à basse pression, absorbe la chaleur $Q_f$ du milieu à refroidir en s\'évaporant.'
      },
      {
        q: 'La relation entre $\\text{COP}_{\\text{PAC}}$ (chauffage) et $\\text{COP}_{\\text{froid}}$ (production de froid) d\'une même machine réversible est :',
        options: [
          '$\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}}$',
          '$\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} - 1$',
          '$\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$',
          '$\\text{COP}_{\\text{PAC}} = 2 \\times \\text{COP}_{\\text{froid}}$'
        ],
        answer: 2,
        correction: 'Comme $Q_c = Q_f + W$, on a $Q_c/W = Q_f/W + 1$, soit $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$ : cette relation est toujours vraie.'
      },
      {
        q: 'Le GWP d\'un fluide frigorigène mesure :',
        options: [
          'Son coefficient de performance maximal',
          'Son impact sur l\'effet de serre en cas de fuite, relativement au $\\text{CO}_2$',
          'Sa pression de condensation',
          'Son débit massique dans le circuit'
        ],
        answer: 1,
        correction: 'Le GWP (Global Warming Potential) mesure l\'impact d\'une fuite de fluide frigorigène sur l\'effet de serre, relativement au $\\text{CO}_2$ (GWP $=1$) — un critère de choix du fluide en plus de ses performances thermodynamiques.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'une pompe à chaleur air/eau pour le chauffage d\'une maison',
          'une pompe à chaleur géothermique',
          'un groupe froid alimentant une chambre positive',
          'un climatiseur réversible en mode chauffage'
        ]);
        const W = randFloat(1.5, 3.5, 1);
        const Qf = randFloat(4, 9, 1);
        const Qc = parseFloat((Qf + W).toFixed(1));
        const COP = parseFloat((Qc / W).toFixed(1));
        return {
          statement: `Pour ${contexte}, le compresseur reçoit un travail $W = ${fr(W, 1)}$ kW, tandis que l'évaporateur absorbe une chaleur $Q_f = ${fr(Qf, 1)}$ kW.<br/><br/>Calcule la chaleur $Q_c$ cédée au condenseur, puis le $\\text{COP}_{\\text{PAC}}$ de l'installation (arrondi au dixième).`,
          answer: COP,
          tolerance: 0.2,
          unit: '',
          hint: 'Calcule d\'abord $Q_c = Q_f + W$, puis $\\text{COP}_{\\text{PAC}} = Q_c / W$.',
          solution: [
            `Conservation de l'énergie : $Q_c = Q_f + W = ${fr(Qf, 1)} + ${fr(W, 1)} = ${fr(Qc, 1)}$ kW.`,
            `$\\text{COP}_{\\text{PAC}} = Q_c / W = ${fr(Qc, 1)} / ${fr(W, 1)} \\approx ${fr(COP, 1)}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Une pompe à chaleur air/eau réversible équipe un pavillon. En hiver, le compresseur reçoit un travail $W = 2{,}5$ kW et l\'évaporateur absorbe une chaleur $Q_f = 7{,}5$ kW de l\'air extérieur. En été, la même machine fonctionne en mode climatisation : l\'évaporateur (à l\'intérieur du logement) absorbe alors $Q_f\' = 6$ kW pour un travail $W\' = 2$ kW au compresseur.',
      tasks: [
        'En mode chauffage (hiver), calculer $Q_c$ cédée au condenseur, puis le $\\text{COP}_{\\text{PAC}}$.',
        'En mode climatisation (été), calculer $Q_c\'$ cédée au condenseur (côté extérieur), puis le $\\text{COP}_{\\text{froid}}$.',
        'Vérifier la relation $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$ dans chacun des deux cas.',
        'Expliquer pourquoi cette même machine physique donne deux valeurs de COP différentes selon le mode de fonctionnement.'
      ],
      solutions: [
        'Hiver : $Q_c = Q_f + W = 7{,}5 + 2{,}5 = 10$ kW. $\\text{COP}_{\\text{PAC}} = Q_c/W = 10/2{,}5 = 4$.',
        'Été : $Q_c\' = Q_f\' + W\' = 6 + 2 = 8$ kW. $\\text{COP}_{\\text{froid}} = Q_f\'/W\' = 6/2 = 3$.',
        'Hiver : $\\text{COP}_{\\text{froid,hiver}} = Q_f/W = 7{,}5/2{,}5 = 3$, et $\\text{COP}_{\\text{PAC}} = 4 = 3+1$, cohérent. Été : $\\text{COP}_{\\text{PAC,été}} = Q_c\'/W\' = 8/2 = 4 = 3+1$, cohérent également.',
        'Dans les deux modes, le cycle frigorifique est physiquement identique (mêmes échanges $Q_f$, $W$, $Q_c$ pour des valeurs proches) : seul change ce que l\'on <strong>valorise</strong> comme effet utile — la chaleur $Q_c$ au condenseur en hiver (chauffage), ou la chaleur $Q_f$ extraite à l\'évaporateur en été (climatisation). Le COP dépend donc de l\'usage, pas seulement de la machine.'
      ],
      finalAnswer: 'Hiver : $Q_c = 10$ kW, $\\text{COP}_{\\text{PAC}} = 4$. Été : $Q_c\' = 8$ kW, $\\text{COP}_{\\text{froid}} = 3$. Dans les deux cas, $\\text{COP}_{\\text{PAC}} = \\text{COP}_{\\text{froid}} + 1$ : la relation ne dépend pas du mode de fonctionnement, seulement de ce qu\'on choisit de valoriser.'
    },

    evaluation: {
      title: 'Évaluation — Thermodynamique appliquée',
      duration: '20 min',
      questions: [
        {
          statement: 'Un compresseur reçoit un travail $W = 2$ kW, et le condenseur cède une chaleur $Q_c = 9$ kW. Calculer la chaleur $Q_f$ absorbée à l\'évaporateur (en kW).',
          type: 'numeric',
          answer: 7,
          tolerance: 0.3,
          unit: 'kW',
          points: 2,
          correction: '$Q_c = Q_f + W \\Rightarrow Q_f = Q_c - W = 9 - 2 = 7$ kW.'
        },
        {
          statement: 'Une PAC absorbe $Q_f = 8$ kW à l\'évaporateur pour un travail $W = 2$ kW au compresseur. Calculer $\\text{COP}_{\\text{PAC}}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0.3,
          unit: '',
          points: 3,
          correction: '$Q_c = Q_f + W = 8 + 2 = 10$ kW. $\\text{COP}_{\\text{PAC}} = Q_c/W = 10/2 = 5$.'
        },
        {
          statement: 'Le compresseur, dans un cycle frigorifique à compression, a pour rôle de :',
          type: 'multiple-choice',
          options: [
            'Absorber la chaleur du milieu à refroidir',
            'Céder la chaleur au milieu à chauffer',
            'Comprimer le fluide frigorigène en lui fournissant un travail',
            'Faire chuter la pression du fluide frigorigène'
          ],
          answer: 2,
          points: 2,
          correction: 'Le compresseur comprime la vapeur de fluide frigorigène en lui fournissant un travail $W$, ce qui augmente sa pression et sa température.'
        },
        {
          statement: 'Un $\\text{COP}_{\\text{PAC}}$ supérieur à $1$ :',
          type: 'multiple-choice',
          options: [
            'Viole le premier principe de la thermodynamique',
            'Signifie que la PAC crée de l\'énergie',
            'Est normal : la PAC déplace une chaleur prélevée gratuitement dans le milieu extérieur, elle ne crée pas d\'énergie',
            'N\'est possible qu\'avec des fluides frigorigènes interdits'
          ],
          answer: 2,
          points: 3,
          correction: 'La PAC ne crée pas d\'énergie : elle déplace une chaleur $Q_f$ prélevée gratuitement dans le milieu extérieur vers le milieu à chauffer, le travail $W$ ne servant qu\'à opérer ce transfert. D\'où $\\text{COP}_{\\text{PAC}} = Q_c/W > 1$ sans contradiction.'
        },
        {
          statement: 'Le choix d\'un fluide frigorigène pour une nouvelle installation doit tenir compte :',
          type: 'multiple-choice',
          options: [
            'Uniquement de son coût d\'achat',
            'Uniquement de sa pression de condensation',
            'De ses performances thermodynamiques ainsi que de son impact environnemental (GWP, ODP)',
            'Uniquement de sa couleur de bouteille'
          ],
          answer: 2,
          points: 2,
          correction: 'Le choix d\'un fluide frigorigène combine toujours performance thermodynamique (COP obtenu) et impact environnemental le plus faible possible, mesuré par le GWP (effet de serre) et l\'ODP (couche d\'ozone).'
        }
      ]
    }
  });
