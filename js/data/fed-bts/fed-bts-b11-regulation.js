/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-b11-regulation.js
   BTS FED — S8-B11 Régulation (boucles, modes d'action TOR/proportionnel)
   Module de synthèse : reprend B1-1/B1-2, B5-3/B5-4, B5-7, B5-9
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-b11-regulation',
    level: 3, subject: 'fed',
    icon: '🎯',
    title: 'Régulation',
    subtitle: 'Boucles ouverte/fermée, modes d\'action tout-ou-rien et proportionnel',
    keywords: ['Boucle ouverte', 'Boucle fermée', 'Tout-ou-rien', 'Action proportionnelle', 'Bande proportionnelle', 'Intermittence'],
    physics: 'Un générateur de chauffage, un détendeur, un pressostat : tous les modules déjà étudiés font intervenir, sans toujours le nommer, un principe commun de <strong>régulation</strong>. Ce module fait la synthèse : comment une installation « sait »-elle s\'adapter automatiquement aux conditions, et selon quelle logique — tout ou rien, ou progressive ?',

    cours: {
      intro: 'Réguler, c\'est faire en sorte qu\'une grandeur physique (température, pression, débit...) reste proche d\'une <strong>consigne</strong>, malgré des perturbations extérieures. Ce module formalise un principe déjà croisé dans plusieurs modules précédents, sans être nommé comme tel : le générateur et l\'émetteur de chauffage (B1-1, B1-2), la surchauffe pilotée par le détendeur (B5-3, B5-4), le taux de marche d\'un compresseur (B5-7), ou encore les seuils d\'un pressostat de sécurité (B5-9).<br/><br/>Deux architectures de principe existent : la <strong>boucle ouverte</strong>, où l\'action produite ne dépend pas du résultat obtenu (pas de mesure de retour), et la <strong>boucle fermée</strong>, où la grandeur réglée est mesurée en continu et renvoyée vers le régulateur pour corriger l\'action en fonction de l\'écart constaté. La quasi-totalité des régulations rencontrées en génie climatique fonctionnent en boucle fermée.<br/><br/>Au sein d\'une boucle fermée, deux <strong>modes d\'action</strong> principaux structurent la façon dont le régulateur transforme l\'écart mesuré en une commande : le mode <strong>tout ou rien (TOR)</strong>, déjà rencontré au module B5-7 via le taux de marche d\'un compresseur, et le mode <strong>proportionnel</strong>, qui module l\'action de façon continue plutôt que par à-coups. Deux notions complémentaires, plus qualitatives, complètent ce panorama : l\'<strong>intermittence</strong> (réduire le chauffage hors occupation) et l\'<strong>optimisation</strong> (calculer automatiquement l\'instant de relance le plus tardif possible tout en atteignant la consigne à l\'heure voulue).',
      definitions: [
        { term: 'Boucle ouverte', def: 'Régulation dans laquelle l\'action produite ne dépend pas d\'une mesure de la grandeur réglée : aucune information de retour ne vient corriger la commande (ex : une résistance électrique alimentée à puissance fixe, sans thermostat).' },
        { term: 'Boucle fermée (asservissement)', def: 'Régulation dans laquelle la grandeur réglée est mesurée en continu et renvoyée vers le régulateur, qui compare cette mesure à la consigne et ajuste son action en conséquence. C\'est le principe de la quasi-totalité des régulations en génie climatique.' },
        { term: 'Écart', def: 'Différence entre la consigne visée et la mesure réelle de la grandeur réglée : $\\text{écart} = \\text{consigne} - \\text{mesure}$. C\'est cet écart que le régulateur cherche à ramener à zéro.' },
        { term: 'Mode tout ou rien (TOR)', def: 'Le régulateur ne connaît que deux états : marche ou arrêt (déjà étudié au module B5-7 à travers le <strong>taux de marche</strong> d\'un compresseur, $\\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$). Simple et peu coûteux, mais générateur de cycles marche/arrêt.' },
        { term: 'Mode proportionnel', def: 'Le régulateur produit une action <strong>proportionnelle</strong> à l\'écart mesuré, via un gain $K_p$ lié à la <strong>bande proportionnelle</strong> $BP$ (%) par $K_p = 100/BP$ : $\\text{action} = K_p \\times \\text{écart}$. Plus $BP$ est faible, plus le gain est élevé et la régulation réactive.' },
        { term: 'Intermittence', def: 'Réduction volontaire du chauffage (ou du rafraîchissement) pendant les périodes d\'inoccupation d\'un local, avant une relance programmée avant le retour des occupants.' },
        { term: 'Optimisation (relance optimisée)', def: 'Calcul automatique, par le régulateur, de l\'instant de relance le plus tardif possible permettant néanmoins d\'atteindre la consigne de confort à l\'heure d\'occupation prévue — en tenant compte de l\'inertie du bâtiment et des conditions extérieures.' }
      ],
      method: {
        title: 'Calculer l\'action d\'un régulateur proportionnel',
        steps: [
          '<strong>Identifier la bande proportionnelle</strong> $BP$ (%) réglée sur le régulateur : c\'est la plage de variation de la grandeur réglée qui fait passer l\'action de $0$ à $100\\%$.',
          '<strong>Calculer le gain</strong> du régulateur : $K_p = 100/BP$.',
          '<strong>Mesurer l\'écart</strong> entre la consigne et la mesure réelle : $\\text{écart} = \\text{consigne} - \\text{mesure}$.',
          '<strong>Calculer l\'action produite</strong> : $\\text{action} = K_p \\times \\text{écart}$, exprimée en %.',
          '<strong>Interpréter</strong> : une bande proportionnelle étroite (gain élevé) rend la régulation très réactive au moindre écart, au risque d\'instabilité ; une bande large (gain faible) est plus stable mais tolère un écart résiduel plus important en régime établi.'
        ]
      },
      example: {
        statement: 'Un régulateur de température de départ de chauffage a une bande proportionnelle $BP=20\\%$. La consigne est de $60\\,°C$, la mesure réelle est de $58\\,°C$.<br/><br/>Calculer le gain $K_p$ du régulateur, l\'écart, puis l\'action produite (en %).',
        steps: [
          'Gain du régulateur : $K_p = 100/BP = 100/20 = 5$.',
          'Écart : $\\text{écart} = \\text{consigne} - \\text{mesure} = 60 - 58 = 2\\,°C$.',
          'Action produite : $\\text{action} = K_p \\times \\text{écart} = 5 \\times 2 = 10\\%$.'
        ],
        answer: 'Le régulateur commande son organe de réglage (vanne mélangeuse, brûleur modulant...) à $10\\%$ de son ouverture maximale : une action <strong>progressive</strong>, bien différente d\'un tout ou rien qui basculerait brutalement entre $0\\%$ et $100\\%$.'
      },
      formulas: [
        '$\\text{écart} = \\text{consigne} - \\text{mesure}$ (écart de régulation)',
        '$K_p = \\dfrac{100}{BP}$ (gain du régulateur proportionnel, à partir de la bande proportionnelle $BP$ en %)',
        '$\\text{action} = K_p \\times \\text{écart}$ (action produite par un régulateur proportionnel, en %)',
        '$\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$ (rappel B5-7, mode tout ou rien)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Boucle de régulation fermée',
        title: 'La mesure de sortie corrige en continu l\'action d\'entrée',
        description: 'Le régulateur compare en permanence la consigne à la mesure remontée par le capteur en sortie de procédé, et ajuste son action sur l\'actionneur en conséquence : c\'est la boucle fermée, qui referme le trajet de l\'information sur elle-même.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="regul11-graph-title regul11-graph-desc">
            <title id="regul11-graph-title">Boucle de regulation fermee a trois boites</title>
            <desc id="regul11-graph-desc">Schema de trois boites alignees horizontalement : regulateur a gauche, actionneur au centre, procede a droite. Une fleche de consigne entre par le haut dans le regulateur. Une ligne de mesure part de la sortie du procede et revient vers le regulateur en formant une boucle fermee en bas du schema, portant le texte ecart egale consigne moins mesure.</desc>

            <defs>
              <marker id="arrow-fed-regul11" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- regulateur -->
            <rect class="frame-line" x="30" y="100" width="110" height="60" fill="none"></rect>
            <text class="label-soft" x="85" y="135" text-anchor="middle">Régulateur</text>

            <!-- actionneur -->
            <rect class="frame-line" x="190" y="100" width="110" height="60" fill="none"></rect>
            <text class="label-soft" x="245" y="135" text-anchor="middle">Actionneur</text>

            <!-- procede -->
            <rect class="frame-line" x="350" y="100" width="110" height="60" fill="none"></rect>
            <text class="label-soft" x="405" y="135" text-anchor="middle">Procédé</text>

            <!-- consigne entrant dans le regulateur -->
            <line class="guide-line" x1="85" y1="40" x2="85" y2="100" marker-end="url(#arrow-fed-regul11)"></line>
            <text class="annotation-label" x="85" y="30" text-anchor="middle">Consigne</text>

            <!-- chaine directe -->
            <line class="curve-main" x1="140" y1="130" x2="190" y2="130" marker-end="url(#arrow-fed-regul11)"></line>
            <line class="curve-main" x1="300" y1="130" x2="350" y2="130" marker-end="url(#arrow-fed-regul11)"></line>

            <!-- boucle de retour (mesure) -->
            <path class="guide-line" d="M405,160 L405,220 L85,220 L85,160" fill="none" marker-end="url(#arrow-fed-regul11)"></path>
            <text class="tick-label" x="245" y="240" text-anchor="middle">Mesure (capteur en sortie de procédé)</text>

            <text class="label-soft" x="245" y="20" text-anchor="middle">écart = consigne − mesure</text>
          </svg>
        `,
        notes: [
          'La <strong>consigne</strong> entre dans le régulateur, qui pilote l\'<strong>actionneur</strong> agissant sur le <strong>procédé</strong>.',
          'La grandeur réglée en sortie de procédé est <strong>mesurée</strong> puis renvoyée vers le régulateur : c\'est cette boucle de retour qui fait la différence entre boucle ouverte et boucle fermée.',
          'Le régulateur recalcule en permanence l\'<strong>écart</strong> (consigne − mesure) pour ajuster son action, en tout ou rien ou en proportionnel selon le mode choisi.'
        ],
        reading: 'Suis la chaîne directe de gauche à droite (régulateur → actionneur → procédé), puis remonte la boucle de retour du bas qui ramène la mesure vers le régulateur : c\'est cette boucle qui referme le système et le rend « fermé ».',
        caption: 'Boucle de régulation fermée : la mesure de sortie vient corriger en continu l\'action d\'entrée, quel que soit le mode d\'action choisi (TOR ou proportionnel).'
      },
      recap: [
        'La <strong>boucle ouverte</strong> ne mesure pas le résultat obtenu ; la <strong>boucle fermée</strong> mesure la grandeur réglée et corrige l\'action en fonction de l\'écart — c\'est le principe de la quasi-totalité des régulations en génie climatique.',
        'Le mode <strong>tout ou rien (TOR)</strong> (rappel B5-7) ne connaît que deux états, caractérisé par son <strong>taux de marche</strong>.',
        'Le mode <strong>proportionnel</strong> module l\'action en continu : $K_p = 100/BP$, puis $\\text{action} = K_p \\times \\text{écart}$.',
        'L\'<strong>intermittence</strong> réduit le chauffage hors occupation ; l\'<strong>optimisation</strong> calcule l\'instant de relance le plus tardif compatible avec le confort à l\'heure d\'occupation.',
        'Ce module est une <strong>synthèse</strong> : il formalise des principes déjà rencontrés dans les modules de production (B1-1, B1-2) et de froid (B5-3, B5-4, B5-7, B5-9).'
      ],
      piege: 'Ne pas confondre la <strong>bande proportionnelle</strong> $BP$ (qui définit le gain d\'un régulateur en fonctionnement normal, $K_p=100/BP$) avec la <strong>bande morte</strong> d\'une régulation tout ou rien (qui évite des cycles marche/arrêt trop rapprochés, déjà vue au module B5-7) : la première pilote une action continue, la seconde ne concerne qu\'un fonctionnement à deux états. Attention aussi à ne pas croire qu\'un mode proportionnel supprime totalement l\'écart : contrairement à un mode intégral (hors programme ici), un régulateur proportionnel pur laisse toujours subsister un <strong>écart résiduel</strong> en régime établi, d\'autant plus faible que le gain $K_p$ est élevé (donc $BP$ faible).'
    },

    quiz: [
      {
        q: 'Une régulation en boucle fermée se caractérise par :',
        options: [
          'Une action qui ne dépend jamais du résultat obtenu',
          'La mesure en continu de la grandeur réglée, renvoyée vers le régulateur pour corriger l\'action',
          'L\'absence totale de capteur dans l\'installation',
          'Un fonctionnement uniquement en tout ou rien'
        ],
        answer: 1,
        correction: 'En boucle fermée, la grandeur réglée est mesurée en continu et cette mesure est renvoyée vers le régulateur, qui compare à la consigne et ajuste son action en fonction de l\'écart constaté.'
      },
      {
        q: 'Pour un régulateur proportionnel de bande proportionnelle $BP=25\\%$, le gain $K_p$ vaut :',
        options: ['$K_p = 25$', '$K_p = 0{,}25$', '$K_p = 4$', '$K_p = 2{,}5$'],
        answer: 2,
        correction: '$K_p = 100/BP = 100/25 = 4$.'
      },
      {
        q: 'Le mode tout ou rien (TOR), déjà étudié au module B5-7 à travers le taux de marche d\'un compresseur :',
        options: [
          'Module l\'action de façon continue selon l\'écart mesuré',
          'Ne connaît que deux états, marche ou arrêt',
          'Calcule automatiquement l\'instant de relance optimal',
          'Ne s\'applique qu\'aux régulateurs proportionnels'
        ],
        answer: 1,
        correction: 'Le mode tout ou rien ne connaît que deux états (marche/arrêt), caractérisé par son taux de marche $\\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100$ — à ne pas confondre avec le mode proportionnel, qui module l\'action en continu.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const contexte = pick([
          'la régulation de la température de départ d\'un circuit de chauffage',
          'la régulation de la pression de condensation d\'un groupe froid',
          'la régulation du débit d\'un ventilateur de CTA',
          'la régulation de la température d\'un ballon d\'ECS'
        ]);
        const BP = pick([10, 20, 25, 40, 50]);
        const Kp = parseFloat((100 / BP).toFixed(2));
        const ecart = randFloat(0.5, 3, 1);
        const action = parseFloat((Kp * ecart).toFixed(1));
        return {
          statement: `Pour ${contexte}, un régulateur proportionnel a une bande proportionnelle $BP = ${BP}\\%$, pour un écart mesuré $\\text{écart} = \\text{consigne} - \\text{mesure} = ${fr(ecart, 1)}$ (unité de la grandeur régulée).<br/><br/>Calcule le gain $K_p$ du régulateur, puis l'action produite (en %, arrondie au dixième).`,
          answer: action,
          tolerance: 0.3,
          unit: '%',
          hint: 'Calcule d\'abord $K_p = 100/BP$, puis $\\text{action} = K_p \\times \\text{écart}$.',
          solution: [
            `$K_p = 100/BP = 100/${BP} = ${fr(Kp, 2)}$.`,
            `$\\text{action} = K_p \\times \\text{écart} = ${fr(Kp, 2)} \\times ${fr(ecart, 1)} \\approx ${fr(action, 1)}\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un système de chauffage collectif est actuellement régulé par un thermostat tout ou rien : la chaudière fonctionne $t_{ON}=12$ min puis s\'arrête $t_{OFF}=18$ min, selon un cycle qui se répète. On envisage de remplacer cette régulation par une action proportionnelle, avec une bande proportionnelle $BP=25\\%$.',
      tasks: [
        'Calculer le taux de marche de la régulation tout ou rien actuelle (rappel du module B5-7).',
        'Calculer le gain $K_p$ de la régulation proportionnelle envisagée.',
        'Pour un écart mesuré de $2\\,°C$ entre consigne et mesure, calculer l\'action que produirait ce régulateur proportionnel.',
        'Expliquer pourquoi une régulation proportionnelle limite les à-coups (cycles marche/arrêt complets) par rapport à une régulation tout ou rien.'
      ],
      solutions: [
        '$\\text{Taux de marche} = \\dfrac{t_{ON}}{t_{ON}+t_{OFF}} \\times 100 = \\dfrac{12}{12+18} \\times 100 = \\dfrac{12}{30} \\times 100 = 40\\%$.',
        '$K_p = 100/BP = 100/25 = 4$.',
        '$\\text{action} = K_p \\times \\text{écart} = 4 \\times 2 = 8\\%$.',
        'En tout ou rien, la chaudière bascule brutalement entre $0\\%$ (arrêt complet) et $100\\%$ (marche complète), ce qui crée des à-coups thermiques et mécaniques à chaque démarrage. En mode proportionnel, l\'action ($8\\%$ dans cet exemple) varie de façon <strong>continue</strong> et proportionnelle à l\'écart réel : la chaudière module sa puissance sans jamais s\'arrêter complètement tant que l\'écart existe, ce qui réduit l\'usure liée aux cycles et stabilise la température autour de la consigne.'
      ],
      finalAnswer: 'Taux de marche actuel : $40\\%$. Avec la régulation proportionnelle envisagée ($BP=25\\%$, $K_p=4$), un écart de $2\\,°C$ produirait une action de $8\\%$ : une modulation continue, plus douce qu\'un basculement tout ou rien.'
    },

    evaluation: {
      title: 'Évaluation — Régulation',
      duration: '20 min',
      questions: [
        {
          statement: 'Un régulateur proportionnel a une bande proportionnelle $BP=40\\%$. Calculer son gain $K_p$.',
          type: 'numeric',
          answer: 2.5,
          tolerance: 0.1,
          unit: '',
          points: 2,
          correction: '$K_p = 100/BP = 100/40 = 2{,}5$.'
        },
        {
          statement: 'Pour ce même régulateur ($K_p=2{,}5$), un écart de $3\\,°C$ est mesuré entre la consigne et la mesure. Calculer l\'action produite (en %).',
          type: 'numeric',
          answer: 7.5,
          tolerance: 0.3,
          unit: '%',
          points: 3,
          correction: '$\\text{action} = K_p \\times \\text{écart} = 2{,}5 \\times 3 = 7{,}5\\%$.'
        },
        {
          statement: 'La différence essentielle entre boucle ouverte et boucle fermée est :',
          type: 'multiple-choice',
          options: [
            'La boucle fermée ne comporte aucun régulateur',
            'La boucle fermée mesure la grandeur réglée et corrige l\'action en fonction de l\'écart, contrairement à la boucle ouverte',
            'La boucle ouverte est toujours plus précise',
            'Les deux boucles sont strictement équivalentes'
          ],
          answer: 1,
          points: 2,
          correction: 'En boucle fermée, une mesure de la grandeur réglée est renvoyée vers le régulateur pour ajuster l\'action ; en boucle ouverte, aucune information de retour ne vient corriger la commande.'
        },
        {
          statement: 'L\'intermittence, en régulation de chauffage, consiste à :',
          type: 'multiple-choice',
          options: [
            'Augmenter systématiquement la consigne pendant l\'occupation',
            'Réduire le chauffage pendant les périodes d\'inoccupation, avant une relance programmée',
            'Basculer en permanence entre deux régulateurs proportionnels',
            'Supprimer la boucle de retour du régulateur'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'intermittence réduit volontairement le chauffage (ou le rafraîchissement) pendant l\'inoccupation, avant une relance programmée pour retrouver le confort au moment du retour des occupants.'
        },
        {
          statement: 'Une régulation optimisée (relance optimisée) calcule automatiquement :',
          type: 'multiple-choice',
          options: [
            'Le taux de marche exact du compresseur',
            'L\'instant de relance le plus tardif possible permettant d\'atteindre la consigne à l\'heure d\'occupation prévue',
            'La bande proportionnelle idéale pour tous les bâtiments',
            'Le nombre de cycles marche/arrêt à ne pas dépasser'
          ],
          answer: 1,
          points: 2,
          correction: 'L\'optimisation calcule, en tenant compte de l\'inertie du bâtiment et des conditions extérieures, l\'instant de relance le plus tardif compatible avec l\'atteinte du confort à l\'heure voulue — ce qui limite la durée de chauffage sans dégrader le confort.'
        }
      ]
    }
  });
