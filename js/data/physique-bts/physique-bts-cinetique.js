/* =========================================================
   Spark Learning – data/physique-bts/physique-bts-cinetique.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-bts-cinetique',
    level: 3, subject: 'physique',
    icon: '⏱️',
    title: 'Cinétique chimique',
    subtitle: 'Vitesse de réaction, temps de demi-réaction, facteurs cinétiques, suivi temporel d\'une transformation',
    keywords: ['Vitesse de réaction', 'Temps de demi-réaction', 'Catalyseur', 'Facteurs cinétiques'],
    physics: 'La cinétique chimique permet d\'estimer la durée d\'un procédé industriel (durcissement d\'une résine, traitement de surface, dépollution d\'un effluent), de choisir les conditions opératoires optimales, et d\'évaluer l\'effet d\'un catalyseur sur la vitesse d\'une réaction.',

    cours: {
      intro: 'Une transformation chimique ne se produit pas instantanément : elle progresse dans le temps, plus ou moins vite selon les conditions. La <strong>cinétique chimique</strong> étudie la vitesse à laquelle un réactif est consommé ou un produit est formé.<br/><br/>On suit généralement cette évolution en mesurant la concentration $[X]$ d\'une espèce $X$ au cours du temps, par exemple par spectrophotométrie, conductimétrie ou pH-métrie. La courbe $[X] = f(t)$ obtenue permet de définir la <strong>vitesse de réaction</strong> et le <strong>temps de demi-réaction</strong> $t_{1/2}$.<br/><br/>Plusieurs <strong>facteurs cinétiques</strong> influencent la rapidité d\'une transformation : la <strong>concentration</strong> des réactifs, la <strong>température</strong> du milieu, et la présence éventuelle d\'un <strong>catalyseur</strong>.',
      definitions: [
        { term: 'Vitesse de réaction', def: 'Grandeur qui traduit la rapidité d\'évolution d\'une transformation chimique. Pour un réactif $X$ consommé, elle est liée à la pente de la courbe $[X] = f(t)$ : plus la courbe est pentue, plus la réaction est rapide à cet instant.' },
        { term: 'Temps de demi-réaction $t_{1/2}$', def: 'Durée nécessaire pour que la concentration du réactif limitant diminue de <strong>moitié</strong> par rapport à sa valeur initiale : $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2}$. Il permet d\'estimer la durée de la transformation (souvent considérée comme quasi terminée après environ $5$ à $7$ fois $t_{1/2}$).' },
        { term: 'Catalyseur', def: 'Espèce chimique qui <strong>augmente la vitesse</strong> d\'une réaction sans être consommée (elle est régénérée en fin de réaction) et sans modifier l\'état final du système.' },
        { term: 'Facteurs cinétiques', def: 'Paramètres qui influencent la vitesse d\'une réaction : une <strong>concentration</strong> plus élevée des réactifs, une <strong>température</strong> plus élevée, ou l\'ajout d\'un <strong>catalyseur</strong> accélèrent en général la transformation.' }
      ],
      method: {
        title: 'Exploiter une courbe [X] = f(t) en 3 étapes',
        steps: [
          '<strong>Repérer la concentration initiale</strong> $[X]_0$ sur la courbe, à $t=0$, puis calculer la valeur à mi-hauteur $\\dfrac{[X]_0}{2}$.',
          '<strong>Lire graphiquement le temps de demi-réaction</strong> $t_{1/2}$ : c\'est l\'abscisse du point de la courbe où $[X] = \\dfrac{[X]_0}{2}$.',
          '<strong>Comparer la rapidité</strong> de la réaction en différents points en observant la <strong>pente</strong> de la courbe : une pente plus forte au début traduit une vitesse initiale plus grande, qui diminue ensuite au fur et à mesure que le réactif est consommé.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Suivi cinétique d\'une transformation chimique',
        title: 'Courbe [X] = f(t) et détermination du temps de demi-réaction',
        description: 'La concentration $[X]$ du réactif diminue au cours du temps, rapidement au début puis de plus en plus lentement. Le <strong>temps de demi-réaction</strong> $t_{1/2}$ est l\'instant où $[X]$ atteint la moitié de sa valeur initiale.',
        svg: `
          <svg viewBox="0 0 560 300" role="img" aria-labelledby="cinetique-title cinetique-desc">
            <title id="cinetique-title">Courbe de concentration en fonction du temps</title>
            <desc id="cinetique-desc">Un graphique represente la concentration du reactif en ordonnee en fonction du temps en abscisse. La courbe part d'une valeur initiale elevee, decroit rapidement au debut puis de plus en plus lentement, en tendant vers zero. Des lignes pointillees relient le point ou la concentration vaut la moitie de sa valeur initiale aux deux axes, donnant le temps de demi-reaction en abscisse.</desc>

            <defs>
              <marker id="arrow-physbts-cinetique" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- axes -->
            <line class="frame-line" x1="60" y1="260" x2="520" y2="260" marker-end="url(#arrow-physbts-cinetique)"></line>
            <line class="frame-line" x1="60" y1="260" x2="60" y2="50" marker-end="url(#arrow-physbts-cinetique)"></line>
            <text class="tick-label" x="60" y="32" text-anchor="middle">[X]</text>
            <text class="tick-label" x="518" y="276" text-anchor="end">t (min)</text>

            <!-- courbe de decroissance exponentielle -->
            <path class="curve-main" fill="none" d="M60,70 L90,92 L120,112 L150,130 L180,146 L210,161 L240,175 L270,188 L300,200 L340,213 L380,224 L420,233 L460,240 L500,246"></path>

            <!-- niveau [X]0 -->
            <line class="guide-line" x1="60" y1="70" x2="500" y2="70"></line>
            <text class="tick-label" x="50" y="74" text-anchor="end">[X]₀</text>

            <!-- niveau [X]0/2 et point de demi-reaction -->
            <line class="guide-line" x1="60" y1="165" x2="222" y2="165"></line>
            <line class="guide-line" x1="222" y1="165" x2="222" y2="260"></line>
            <circle class="plot-point" cx="222" cy="165" r="4"></circle>
            <text class="tick-label" x="50" y="169" text-anchor="end">[X]₀/2</text>
            <text class="tick-label" x="222" y="276" text-anchor="middle">t₁/₂</text>
            <text class="annotation-label" x="250" y="150" text-anchor="start">Demi-réaction</text>
          </svg>
        `,
        notes: [
          'La concentration $[X]$ décroît de façon <strong>de plus en plus lente</strong> au cours du temps : la réaction est plus rapide au début, quand les réactifs sont les plus concentrés.',
          'Le <strong>temps de demi-réaction</strong> $t_{1/2}$ se lit à l\'aplomb du point où la courbe atteint la moitié de la concentration initiale $[X]_0$.',
          'Après un temps de l\'ordre de $5$ à $7$ fois $t_{1/2}$, la transformation peut être considérée comme <strong>quasi terminée</strong>.'
        ],
        reading: 'Repère d\'abord $[X]_0$ à $t=0$, place le niveau $\\frac{[X]_0}{2}$, puis lis l\'abscisse du point de la courbe atteignant ce niveau : c\'est $t_{1/2}$.',
        caption: 'Courbe de suivi cinétique $[X]=f(t)$ : la décroissance ralentit avec le temps, et le temps de demi-réaction $t_{1/2}$ se lit à mi-hauteur de la concentration initiale.'
      },
      example: {
        statement: 'Lors du suivi d\'une transformation chimique, la concentration initiale du réactif est $[X]_0 = 0{,}80$ mol/L. Le suivi expérimental montre que $[X] = 0{,}40$ mol/L à l\'instant $t = 12$ min.<br/><br/>Déterminer le temps de demi-réaction $t_{1/2}$ de cette transformation.',
        steps: [
          'Le temps de demi-réaction correspond à l\'instant où la concentration atteint la <strong>moitié</strong> de sa valeur initiale : $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2} = \\dfrac{0{,}80}{2} = 0{,}40$ mol/L.',
          'Or on observe justement $[X] = 0{,}40$ mol/L à $t = 12$ min : cet instant correspond donc exactement au temps de demi-réaction.',
          'On conclut : $t_{1/2} = 12$ min.'
        ],
        answer: '$t_{1/2} = 12$ min. À cet instant, la moitié du réactif initial a été consommée ; la transformation sera quasi terminée après environ $5$ à $7$ fois cette durée, soit entre $1$h et $1$h $24$.'
      },
      formulas: [
        'Concentration à mi-réaction : $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2}$',
        'Durée quasi totale de la transformation (ordre de grandeur) : $t_{fin} \\approx 5 \\text{ à } 7 \\times t_{1/2}$',
        'Vitesse liée à la pente de $[X]=f(t)$ : plus la pente $\\left|\\dfrac{d[X]}{dt}\\right|$ est grande, plus la réaction est rapide à cet instant'
      ],
      recap: [
        'Le <strong>temps de demi-réaction</strong> $t_{1/2}$ est la durée nécessaire pour consommer la moitié du réactif limitant initial.',
        'La <strong>vitesse de réaction</strong> est liée à la pente de la courbe $[X]=f(t)$ : elle est maximale au début, puis diminue progressivement.',
        'Les <strong>facteurs cinétiques</strong> (concentration, température, catalyseur) permettent d\'accélérer une transformation sans en changer l\'état final.',
        'Un <strong>catalyseur</strong> accélère la réaction sans être consommé et sans modifier l\'état final du système.'
      ],
      piege: 'Une erreur fréquente est de croire qu\'un catalyseur modifie l\'état final ou la quantité de produit formé : ce n\'est pas le cas, il accélère uniquement la vitesse à laquelle cet état final est atteint. Attention également à ne pas confondre le temps de demi-réaction avec la durée totale de la transformation, qui est nettement plus longue (environ $5$ à $7$ fois $t_{1/2}$).'
    },

    quiz: [
      {
        q: 'La concentration initiale d\'un réactif est $[X]_0 = 0{,}60$ mol/L. Quelle est la concentration $[X]$ au temps de demi-réaction $t_{1/2}$ ?',
        options: [
          '$[X] = 0{,}30$ mol/L',
          '$[X] = 0{,}60$ mol/L',
          '$[X] = 0{,}15$ mol/L',
          '$[X] = 1{,}20$ mol/L'
        ],
        answer: 0,
        correction: 'Par définition, au temps de demi-réaction, la concentration vaut la moitié de la valeur initiale : $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2} = \\dfrac{0{,}60}{2} = 0{,}30$ mol/L.'
      },
      {
        q: 'Quel est l\'effet d\'un catalyseur sur une réaction chimique ?',
        options: [
          'Il augmente la vitesse de la réaction sans être consommé, sans modifier l\'état final',
          'Il modifie la quantité finale de produit formé',
          'Il ralentit systématiquement la réaction',
          'Il est entièrement consommé au cours de la réaction'
        ],
        answer: 0,
        correction: 'Un catalyseur accélère la réaction en abaissant son "obstacle" cinétique, mais il est régénéré à la fin de la réaction et ne change pas l\'état final du système.'
      },
      {
        q: 'Sur une courbe $[X]=f(t)$ de décroissance d\'un réactif, comment évolue la vitesse de la réaction au cours du temps ?',
        options: [
          'Elle diminue progressivement, car la pente de la courbe s\'atténue',
          'Elle reste constante tout au long de la réaction',
          'Elle augmente progressivement jusqu\'à la fin',
          'Elle est nulle au début puis maximale à la fin'
        ],
        answer: 0,
        correction: 'La vitesse de réaction est liée à la pente de $[X]=f(t)$. Cette pente est la plus forte (en valeur absolue) au début, quand les réactifs sont les plus concentrés, puis elle s\'atténue progressivement.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['demiReaction', 'estimationDuree']);

        if (typeExo === 'demiReaction') {
          var X0 = pick([0.4, 0.5, 0.6, 0.8, 1.0, 1.2]);
          var Xhalf = parseFloat((X0 / 2).toFixed(3));
          var contexte = pick([
            'un bain de traitement de surface',
            'un procédé de durcissement de résine',
            'une réaction de dépollution d\'un effluent industriel',
            'un contrôle qualité en laboratoire de chimie appliquée'
          ]);
          return {
            statement: 'Lors du suivi cinétique d\'' + contexte + ', la concentration initiale du réactif limitant est $[X]_0 = ' + fr(X0, 1) + '$ mol/L.<br/><br/>Calcule la concentration $[X]$ attendue au temps de demi-réaction $t_{1/2}$ (en mol/L).',
            answer: Xhalf,
            tolerance: 0.01,
            unit: 'mol/L',
            hint: 'Au temps de demi-réaction, $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2}$.',
            solution: [
              'Formule : $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2} = \\dfrac{' + fr(X0, 1) + '}{2}$.',
              'Résultat : $[X]_{t_{1/2}} = ' + fr(Xhalf, 2) + '$ mol/L.'
            ]
          };
        } else {
          var t12 = pick([2, 3, 4, 5, 6, 8, 10, 15]);
          var coeffFin = pick([5, 6, 7]);
          var tFin = t12 * coeffFin;
          var contexte2 = pick([
            'une réaction de synthèse en laboratoire',
            'un procédé de traitement en atelier',
            'une transformation suivie par spectrophotométrie',
            'un contrôle de fin de réaction avant conditionnement'
          ]);
          return {
            statement: 'Pour ' + contexte2 + ', le temps de demi-réaction mesuré est $t_{1/2} = ' + t12 + '$ min. On considère que la transformation est quasi terminée après $' + coeffFin + '$ fois $t_{1/2}$.<br/><br/>Calcule la durée $t_{fin}$ (en min) au bout de laquelle la transformation peut être considérée comme quasi terminée.',
            answer: tFin,
            tolerance: 0.5,
            unit: 'min',
            hint: 'La transformation est quasi terminée après $' + coeffFin + ' \\times t_{1/2}$.',
            solution: [
              'Formule : $t_{fin} \\approx ' + coeffFin + ' \\times t_{1/2} = ' + coeffFin + ' \\times ' + t12 + '$.',
              'Résultat : $t_{fin} \\approx ' + tFin + '$ min.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'On suit par spectrophotométrie la disparition d\'un réactif colorant lors d\'un procédé de dépollution d\'un effluent industriel. La concentration initiale est $[X]_0 = 1{,}0$ mol/L. Le suivi expérimental donne $[X] = 0{,}50$ mol/L à $t = 8$ min, et l\'expérience est renouvelée à une température plus élevée, en présence d\'un catalyseur : on obtient alors $[X] = 0{,}50$ mol/L dès $t = 3$ min.',
      tasks: [
        'Déterminer le temps de demi-réaction $t_{1/2}$ dans les conditions initiales (sans catalyseur).',
        'Déterminer le temps de demi-réaction $t_{1/2}\'$ dans les conditions avec catalyseur et température plus élevée, et comparer les deux valeurs.',
        'Expliquer pourquoi la concentration finale en réactif, une fois la transformation totalement terminée, est identique dans les deux cas.'
      ],
      solutions: [
        'Le temps de demi-réaction est l\'instant où $[X] = \\dfrac{[X]_0}{2} = \\dfrac{1{,}0}{2} = 0{,}50$ mol/L. Cette valeur est atteinte à $t=8$ min : donc $t_{1/2} = 8$ min.',
        'Dans les nouvelles conditions, $[X] = 0{,}50$ mol/L est atteint dès $t=3$ min : donc $t_{1/2}\' = 3$ min. La réaction est nettement plus rapide ($t_{1/2}\'$ presque $3$ fois plus court), car la température plus élevée et le catalyseur augmentent tous deux la vitesse de la réaction.',
        'Le catalyseur et la température sont des <strong>facteurs cinétiques</strong> : ils modifient uniquement la <strong>vitesse</strong> à laquelle l\'état final est atteint, pas la nature de cet état final. La quantité de réactif consommée au bout d\'un temps suffisamment long est donc la même dans les deux cas.'
      ],
      finalAnswer: '$t_{1/2} = 8$ min sans catalyseur, contre $t_{1/2}\' = 3$ min avec catalyseur et température plus élevée : la réaction est accélérée, mais son état final reste inchangé. C\'est tout l\'intérêt d\'un catalyseur en milieu industriel : réduire la durée d\'un procédé sans en modifier le résultat.'
    },

    evaluation: {
      title: 'Évaluation — Cinétique chimique',
      duration: '30 min',
      questions: [
        {
          statement: 'La concentration initiale d\'un réactif est $[X]_0 = 0{,}90$ mol/L. Calculer la concentration $[X]$ attendue au temps de demi-réaction (en mol/L).',
          type: 'numeric',
          answer: 0.45,
          tolerance: 0.02,
          unit: 'mol/L',
          points: 2,
          correction: '$[X]_{t_{1/2}} = \\dfrac{[X]_0}{2} = \\dfrac{0{,}90}{2} = 0{,}45$ mol/L.'
        },
        {
          statement: 'Un catalyseur ajouté à un mélange réactionnel :',
          type: 'multiple-choice',
          options: [
            'Est consommé intégralement pendant la réaction',
            'Modifie la quantité finale de produit formé',
            'Accélère la réaction sans être consommé ni modifier l\'état final',
            'N\'a aucun effet mesurable sur la vitesse'
          ],
          answer: 2,
          points: 2,
          correction: 'Un catalyseur accélère la transformation, est régénéré en fin de réaction, et ne modifie pas l\'état final du système.'
        },
        {
          statement: 'Le suivi d\'une transformation donne $[X] = 0{,}25$ mol/L au temps de demi-réaction. Calculer la concentration initiale $[X]_0$ (en mol/L).',
          type: 'numeric',
          answer: 0.5,
          tolerance: 0.02,
          unit: 'mol/L',
          points: 2,
          correction: 'Puisque $[X]_{t_{1/2}} = \\dfrac{[X]_0}{2}$, on a $[X]_0 = 2 \\times [X]_{t_{1/2}} = 2 \\times 0{,}25 = 0{,}5$ mol/L.'
        },
        {
          statement: 'Un temps de demi-réaction mesuré vaut $t_{1/2} = 5$ min. En prenant un coefficient de $6$, estimer la durée $t_{fin}$ (en min) à partir de laquelle la transformation est quasi terminée.',
          type: 'numeric',
          answer: 30,
          tolerance: 1,
          unit: 'min',
          points: 2,
          correction: '$t_{fin} \\approx 6 \\times t_{1/2} = 6 \\times 5 = 30$ min.'
        },
        {
          statement: 'Parmi les propositions suivantes, laquelle est un facteur cinétique augmentant en général la vitesse d\'une réaction ?',
          type: 'multiple-choice',
          options: [
            'Diminuer la température',
            'Diminuer la concentration des réactifs',
            'Augmenter la température',
            'Retirer le catalyseur'
          ],
          answer: 2,
          points: 3,
          correction: 'Une température plus élevée augmente en général la vitesse d\'une réaction chimique, tout comme une concentration plus élevée des réactifs ou l\'ajout d\'un catalyseur.'
        }
      ]
    }
  });
