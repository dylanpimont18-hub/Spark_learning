/* =========================================================
   Spark Learning – data/fed-bts/fed-bts-a2-2-std.js
   BTS FED — S8-A2-2 Simulation dynamique thermique (STD)
   ========================================================= */

window.MODULES.push({
    id: 'fed-bts-a2-2-std',
    level: 3, subject: 'fed',
    icon: '📊',
    title: 'Simulation dynamique thermique (STD)',
    subtitle: 'Lire et exploiter les résultats d\'une étude STD (confort d\'été)',
    keywords: ['STD', 'Confort d\'été', 'Heures d\'inconfort', 'Maquette numérique', 'Degrés-heures'],
    physics: 'Avant de construire, on simule. Un logiciel de <strong>simulation dynamique thermique</strong> (Pléiades+COMFIE, TRNSYS...) calcule, heure par heure sur une année entière, la température de chaque pièce d\'un bâtiment à partir d\'une maquette numérique. Le technicien FED n\'a pas besoin de savoir faire tourner ce logiciel : il doit savoir <strong>lire et interpréter</strong> les résultats qu\'il produit.',

    cours: {
      intro: 'Une étude de <strong>simulation dynamique thermique</strong> (STD) modélise un bâtiment complet — parois, vitrages, occupation, apports solaires, équipements — puis calcule l\'évolution de la température intérieure <strong>heure par heure</strong>, sur une journée type, une semaine ou une année complète.<br/><br/>Contrairement à un bilan thermique en régime permanent (une seule condition extérieure figée), la STD tient compte de l\'<strong>inertie thermique</strong> du bâtiment : elle capture la façon dont la chaleur emmagasinée le jour peut se restituer la nuit, ou inversement. C\'est l\'outil de référence pour étudier le <strong>confort d\'été</strong>, difficile à évaluer par un calcul statique.<br/><br/>Au niveau GCF2 (application guidée), l\'enjeu n\'est pas de savoir piloter le logiciel, mais de savoir <strong>exploiter un résultat déjà produit</strong> : une série de températures horaires, ou un indicateur agrégé de confort.',
      definitions: [
        { term: 'Maquette numérique', def: 'Modèle informatique du bâtiment (géométrie, matériaux, vitrages, occupation, équipements) utilisé comme donnée d\'entrée de la simulation STD.' },
        { term: 'Pas de temps horaire', def: 'La STD recalcule la température de chaque zone toutes les heures, sur toute la période étudiée (journée, semaine caniculaire, ou année complète) — contrairement à un bilan thermique en régime permanent, calculé pour une seule condition extérieure figée.' },
        { term: 'Seuil de confort d\'été $\\theta_{\\text{confort}}$', def: 'Température intérieure au-delà de laquelle l\'occupant est considéré en situation d\'inconfort. Valeur usuelle entre $26\\,°C$ et $28\\,°C$ selon le référentiel retenu (réglementation, cahier des charges du maître d\'ouvrage).' },
        { term: 'Heures d\'inconfort (ou de surchauffe)', def: 'Nombre d\'heures, sur la période étudiée, pendant lesquelles la température intérieure simulée dépasse le seuil de confort $\\theta_{\\text{confort}}$.' },
        { term: 'Indicateur de confort d\'été', def: 'Résultat agrégé exploitable directement : pourcentage d\'heures d\'inconfort sur la période, ou <strong>degrés-heures</strong> $DH = \\sum (\\theta_h - \\theta_{\\text{confort}})$ pour chaque heure où $\\theta_h > \\theta_{\\text{confort}}$ (cumul qui tient compte aussi de l\'intensité du dépassement, pas seulement de sa durée).' }
      ],
      method: {
        title: 'Exploiter un résultat d\'étude STD (confort d\'été)',
        steps: [
          '<strong>Identifier la zone et la période étudiées</strong> : quelle pièce (bureau, séjour, salle de classe...), sur quelle durée (une journée caniculaire, une semaine, une année complète).',
          '<strong>Repérer le seuil de confort $\\theta_{\\text{confort}}$</strong> retenu par l\'étude — il est toujours donné par l\'énoncé ou le cahier des charges, jamais à deviner.',
          '<strong>Compter les heures de dépassement</strong> : à partir de la série horaire fournie (tableau ou courbe), ou directement du résultat agrégé donné par le logiciel.',
          '<strong>Calculer l\'indicateur</strong> : pourcentage d\'heures d\'inconfort $= \\dfrac{\\text{heures de dépassement}}{\\text{heures totales de la période}} \\times 100$.',
          '<strong>Conclure</strong> : comparer à un objectif (souvent quelques % maximum) et, si besoin, comparer deux scénarios (avant/après protections solaires, sur-ventilation nocturne...) sans jamais avoir à relancer soi-même le logiciel.'
        ]
      },
      example: {
        statement: 'Une étude STD a simulé, heure par heure, la température intérieure d\'un bureau exposé plein sud lors d\'une journée de canicule de juillet ($24$ heures). Le seuil de confort d\'été retenu est $\\theta_{\\text{confort}} = 28\\,°C$. Le relevé simplifié montre que la température reste sous ce seuil de $0$h à $12$h, le dépasse de $12$h à $19$h (avec un pic à $33\\,°C$ vers $15$h), puis redescend en dessous après $19$h.<br/><br/>Calculer le pourcentage d\'heures d\'inconfort sur cette journée.',
        steps: [
          'Heures de dépassement du seuil : de $12$h à $19$h, soit $7$ heures sur les $24$ heures de la journée.',
          'Pourcentage d\'heures d\'inconfort $= \\dfrac{7}{24} \\times 100 \\approx 29{,}2\\%$.'
        ],
        answer: 'Environ $29{,}2\\%$ des heures de la journée sont en inconfort estival — un résultat qui appellerait probablement une action corrective (protections solaires, sur-ventilation nocturne) plutôt qu\'un simple constat.'
      },
      formulas: [
        '$\\%$ heures d\'inconfort $= \\dfrac{\\text{heures de dépassement}}{\\text{heures totales de la période}} \\times 100$',
        '$DH = \\displaystyle\\sum_{\\theta_h > \\theta_{\\text{confort}}} (\\theta_h - \\theta_{\\text{confort}})$ (degrés-heures, cumul tenant compte de l\'intensité du dépassement)'
      ],
      diagram: {
        theme: 'fed',
        kicker: 'Résultat d\'une étude STD — profil horaire',
        title: 'Journée caniculaire : θ_confort = 28 °C, dépassement de 12h à 19h',
        description: 'La température intérieure simulée heure par heure dépasse le seuil de confort entre 12h et 19h, avec un pic à 33 °C vers 15h : ce sont les 7 heures d\'inconfort de la journée.',
        svg: `
          <svg viewBox="0 0 480 260" role="img" aria-labelledby="std-graph-title std-graph-desc">
            <title id="std-graph-title">Profil de temperature horaire simule par une etude STD, avec seuil de confort</title>
            <desc id="std-graph-desc">Graphique temperature interieure en fonction de l'heure de la journee : la courbe reste sous le seuil de confort de 28 degres jusqu'a 12h, le depasse jusqu'a un pic de 33 degres vers 15h, puis repasse sous le seuil a 19h. La zone entre 12h et 19h, au-dessus du seuil, est mise en evidence comme periode d'inconfort.</desc>

            <line class="frame-line" x1="50" y1="230" x2="430" y2="230"></line>
            <line class="guide-line" x1="50" y1="20" x2="50" y2="230"></line>

            <!-- seuil de confort -->
            <line class="guide-line" x1="50" y1="99" x2="430" y2="99"></line>
            <text class="annotation-label" x="345" y="93" text-anchor="start">θ_confort = 28 °C</text>

            <!-- zone d'inconfort (12h a 19h) -->
            <polygon class="frame-line" points="240,99 288,33 351,99" fill="color-mix(in srgb, var(--diagram-accent) 16%, transparent)"></polygon>
            <text class="label-soft" x="294" y="20" text-anchor="middle">Zone d'inconfort</text>

            <!-- profil de temperature -->
            <polyline class="curve-main" points="50,204 145,217 193,180 240,99 288,33 351,99 383,151 430,191" fill="none"></polyline>

            <!-- points cles -->
            <circle class="plot-point-alt" cx="50" cy="204" r="4"></circle>
            <circle class="plot-point-alt" cx="145" cy="217" r="4"></circle>
            <circle class="plot-point-alt" cx="240" cy="99" r="4"></circle>
            <circle class="plot-point" cx="288" cy="33" r="5"></circle>
            <circle class="plot-point-alt" cx="351" cy="99" r="4"></circle>
            <circle class="plot-point-alt" cx="430" cy="191" r="4"></circle>

            <!-- etiquettes heures -->
            <text class="tick-label" x="50" y="245" text-anchor="middle">0h</text>
            <text class="tick-label" x="240" y="245" text-anchor="middle">12h</text>
            <text class="tick-label" x="288" y="258" text-anchor="middle">15h (pic 33 °C)</text>
            <text class="tick-label" x="351" y="245" text-anchor="middle">19h</text>
            <text class="tick-label" x="430" y="245" text-anchor="middle">24h</text>
          </svg>
        `,
        notes: [
          'La courbe franchit le seuil de confort $\\theta_{\\text{confort}} = 28\\,°C$ à $12$h et repasse en dessous à $19$h : c\'est cet intervalle qui compte comme heures d\'inconfort.',
          'Le pic à $33\\,°C$ vers $15$h montre l\'<strong>intensité</strong> du dépassement, information que le simple comptage d\'heures ne donne pas (c\'est ce que capture l\'indicateur $DH$).',
          'Sur les $24$ heures de la journée, $7$ heures sont en inconfort, soit environ $29{,}2\\%$ du temps.'
        ],
        reading: 'Repère la ligne pointillée du seuil de confort, puis les deux points où la courbe la traverse : c\'est la largeur de la zone surélevée entre ces deux points qui donne le nombre d\'heures d\'inconfort.',
        caption: 'Profil de température intérieure sur une journée caniculaire, avec zone d\'inconfort (θ > θ_confort) mise en évidence entre 12h et 19h.'
      },
      recap: [
        'Une étude STD calcule la température intérieure <strong>heure par heure</strong> à partir d\'une maquette numérique, en tenant compte de l\'inertie thermique du bâtiment.',
        'Le seuil de confort d\'été $\\theta_{\\text{confort}}$ est toujours une donnée de l\'étude (souvent entre $26$ et $28\\,°C$), jamais une valeur à deviner.',
        'Le pourcentage d\'heures d\'inconfort $= \\dfrac{\\text{heures de dépassement}}{\\text{heures totales}} \\times 100$ est l\'indicateur le plus simple à exploiter.',
        'Les degrés-heures $DH$ affinent l\'analyse en tenant compte de l\'intensité du dépassement, pas seulement de sa durée.',
        'Au niveau GCF2, il s\'agit de <strong>lire et interpréter</strong> des résultats déjà produits, pas de faire tourner soi-même le logiciel de simulation.'
      ],
      piege: 'Une étude STD n\'est <strong>pas</strong> un bilan thermique en régime permanent : elle simule l\'évolution heure par heure sur une période complète, en tenant compte de l\'inertie du bâtiment, alors que le bilan thermique (module suivant) fige une seule condition extérieure. Attention aussi à ne pas confondre le pourcentage d\'heures d\'inconfort (une <strong>durée</strong>) avec les degrés-heures $DH$ (une <strong>intensité</strong> cumulée) : deux bâtiments peuvent avoir le même nombre d\'heures d\'inconfort avec des degrés-heures très différents si l\'un dépasse le seuil de justesse et l\'autre largement.'
    },

    quiz: [
      {
        q: 'Une étude de simulation dynamique thermique (STD) se distingue d\'un bilan thermique en régime permanent car elle :',
        options: [
          'Calcule uniquement la déperdition maximale en hiver',
          'Calcule l\'évolution de la température heure par heure sur une période, en tenant compte de l\'inertie thermique',
          'Ne concerne que les bâtiments climatisés',
          'Remplace entièrement le calcul des déperditions par transmission'
        ],
        answer: 1,
        correction: 'La STD simule l\'évolution dynamique de la température, pas à pas dans le temps (souvent heure par heure sur une année), en tenant compte de l\'inertie thermique du bâtiment — c\'est ce qui la rend adaptée à l\'étude du confort d\'été, où le régime permanent n\'a pas de sens.'
      },
      {
        q: 'Au niveau GCF2 (application guidée), la compétence attendue sur la STD est de :',
        options: [
          'Savoir configurer entièrement le logiciel de simulation',
          'Savoir lire et exploiter des résultats de simulation déjà produits',
          'Savoir programmer un nouveau moteur de calcul thermique',
          'Ne rien connaître de la STD, réservée aux bureaux d\'études'
        ],
        answer: 1,
        correction: 'Le référentiel BTS FED S8-A2-2 se limite à l\'analyse et l\'exploitation des résultats d\'une étude STD déjà réalisée (par exemple par un bureau d\'études) — pas à la conduite du logiciel lui-même.'
      },
      {
        q: 'Sur une période de $100$ heures, une étude STD indique $18$ heures de dépassement du seuil de confort. Quel est le pourcentage d\'heures d\'inconfort ?',
        options: [
          '$1{,}8\\%$',
          '$18\\%$',
          '$82\\%$',
          '$180\\%$'
        ],
        answer: 1,
        correction: 'Pourcentage d\'heures d\'inconfort $= \\dfrac{18}{100} \\times 100 = 18\\%$.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        const local = pick([
          'un bureau exposé plein sud',
          'une salle de classe au dernier étage',
          'un logement sous combles',
          'un local commercial largement vitré',
          'une chambre d\'étudiant mansardée'
        ]);
        const periode = pick([
          { totalH: 24, label: 'une journée de canicule (24 h)' },
          { totalH: 168, label: 'une semaine caniculaire (168 h)' },
          { totalH: 720, label: 'un mois de juillet complet (720 h)' }
        ]);
        const seuil = pick([26, 27, 28]);
        const heuresDepassement = rand(Math.round(periode.totalH * 0.08), Math.round(periode.totalH * 0.45));
        const pourcentage = parseFloat(((heuresDepassement / periode.totalH) * 100).toFixed(1));
        return {
          statement: `Une étude STD a simulé, heure par heure, la température intérieure de ${local}, sur ${periode.label}. Le seuil de confort d'été retenu est $\\theta_{\\text{confort}} = ${seuil}\\,°C$.<br/><br/>Les résultats de simulation indiquent que ce seuil est dépassé pendant ${heuresDepassement} heures sur les ${periode.totalH} heures de la période étudiée. Calcule le pourcentage d'heures d'inconfort sur cette période (en %, arrondi à $0{,}1$).`,
          answer: pourcentage,
          tolerance: 0.3,
          unit: '%',
          hint: 'Pourcentage d\'heures d\'inconfort $= \\dfrac{\\text{heures de dépassement}}{\\text{heures totales}} \\times 100$.',
          solution: [
            `Heures de dépassement : ${heuresDepassement} h sur ${periode.totalH} h de la période.`,
            `Pourcentage $= \\dfrac{${heuresDepassement}}{${periode.totalH}} \\times 100 \\approx ${fr(pourcentage, 1)}\\%$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Un maître d\'ouvrage compare deux scénarios STD pour un même bureau, sur une semaine caniculaire de $168$ heures, avec un seuil de confort $\\theta_{\\text{confort}} = 28\\,°C$ : <br/><br/><strong>Scénario 1</strong> (sans protection solaire) : $52$ heures de dépassement.<br/><strong>Scénario 2</strong> (avec brise-soleil orientables et sur-ventilation nocturne) : $9$ heures de dépassement.',
      tasks: [
        'Calculer le pourcentage d\'heures d\'inconfort du scénario 1.',
        'Calculer le pourcentage d\'heures d\'inconfort du scénario 2.',
        'Conclure sur l\'efficacité des protections solaires et de la sur-ventilation nocturne, et indiquer un ordre de grandeur de gain acceptable pour valider ce type de solution.'
      ],
      solutions: [
        'Scénario 1 : $\\dfrac{52}{168} \\times 100 \\approx 31{,}0\\%$ des heures de la semaine en inconfort.',
        'Scénario 2 : $\\dfrac{9}{168} \\times 100 \\approx 5{,}4\\%$ des heures de la semaine en inconfort.',
        'Le passage de $31{,}0\\%$ à $5{,}4\\%$ d\'heures d\'inconfort montre un gain très significatif (division par plus de $5$) : les protections solaires limitent les apports directs, et la sur-ventilation nocturne évacue la chaleur stockée dans l\'inertie du bâtiment. Un scénario ramenant l\'inconfort sous quelques % de la période reste la référence usuelle recherchée en conception bioclimatique.'
      ],
      finalAnswer: 'Scénario 1 $\\approx 31{,}0\\%$ d\'heures d\'inconfort, scénario 2 $\\approx 5{,}4\\%$ : les protections solaires et la sur-ventilation nocturne réduisent très fortement le risque de surchauffe estivale, sans qu\'il soit nécessaire de refaire tourner la simulation pour le constater — la lecture comparée des deux résultats suffit.'
    },

    evaluation: {
      title: 'Évaluation — Simulation dynamique thermique (STD)',
      duration: '15 min',
      questions: [
        {
          statement: 'Sur une période de $720$ heures (un mois), une étude STD indique $72$ heures de dépassement du seuil de confort. Calculer le pourcentage d\'heures d\'inconfort (en %, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 10,
          tolerance: 0.3,
          unit: '%',
          points: 3,
          correction: 'Pourcentage $= \\dfrac{72}{720} \\times 100 = 10{,}0\\%$.'
        },
        {
          statement: 'Une étude STD calcule la température intérieure d\'un bâtiment :',
          type: 'multiple-choice',
          options: [
            'Une seule fois, pour la condition extérieure la plus défavorable',
            'Heure par heure, sur une période donnée, en tenant compte de l\'inertie thermique',
            'Uniquement pour la période estivale',
            'Uniquement à partir de mesures réelles sur site'
          ],
          answer: 1,
          points: 2,
          correction: 'La STD simule pas à pas dans le temps (heure par heure), à partir d\'une maquette numérique, ce qui permet de capturer l\'inertie thermique — contrairement à un calcul en régime permanent figé sur une seule condition.'
        },
        {
          statement: 'Les degrés-heures $DH$ apportent une information que le simple pourcentage d\'heures d\'inconfort ne donne pas :',
          type: 'multiple-choice',
          options: [
            'La durée totale de la période étudiée',
            'L\'intensité cumulée des dépassements du seuil de confort',
            'Le nombre de pièces du bâtiment',
            'La température extérieure moyenne'
          ],
          answer: 1,
          points: 2,
          correction: '$DH = \\sum (\\theta_h - \\theta_{\\text{confort}})$ pour chaque heure de dépassement : cet indicateur tient compte de l\'écart au seuil, pas seulement du nombre d\'heures — deux bâtiments peuvent avoir la même durée d\'inconfort avec des $DH$ très différents.'
        },
        {
          statement: 'Au niveau GCF2 du référentiel BTS FED, l\'étude STD est abordée comme :',
          type: 'multiple-choice',
          options: [
            'Une compétence de programmation du moteur de calcul',
            'Une compétence d\'analyse et d\'exploitation de résultats déjà produits',
            'Une compétence réservée uniquement à l\'option FCA',
            'Un simple exercice de dessin de bâtiment en 3D'
          ],
          answer: 1,
          points: 2,
          correction: 'Le référentiel limite l\'exigence GCF2 à l\'analyse et l\'exploitation des résultats d\'une étude STD à partir d\'une maquette numérique — pas à la conduite technique du logiciel.'
        },
        {
          statement: 'Sur une semaine de $168$ heures, un scénario avant travaux affiche $60$ heures de dépassement, un scénario après travaux $15$ heures. Calculer la réduction du pourcentage d\'heures d\'inconfort entre les deux scénarios (en points de %, arrondi à $0{,}1$).',
          type: 'numeric',
          answer: 26.8,
          tolerance: 0.5,
          unit: 'points de %',
          points: 3,
          correction: 'Avant : $\\dfrac{60}{168} \\times 100 \\approx 35{,}7\\%$. Après : $\\dfrac{15}{168} \\times 100 \\approx 8{,}9\\%$. Réduction $\\approx 35{,}7 - 8{,}9 = 26{,}8$ points de %.'
        }
      ]
    }
  });
