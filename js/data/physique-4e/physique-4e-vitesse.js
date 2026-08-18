/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-vitesse.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-vitesse',
    level: 1, subject: 'physique',
    icon: '🚗',
    title: 'La vitesse',
    subtitle: 'Distance, durée et vitesse moyenne : la relation $v = \\dfrac{d}{t}$',
    keywords: ['Vitesse', 'Distance', 'Durée', 'Mouvement', 'Conversion d\'unités'],
    physics: 'Calculer une vitesse permet d\'estimer le temps de trajet d\'un voyage, de vérifier le respect des limitations de vitesse sur la route, ou encore d\'analyser la performance d\'un athlète lors d\'une course.',

    cours: {
      intro: 'Un objet est en <strong>mouvement</strong> lorsque sa position change au cours du temps par rapport à un repère fixe (le sol, un bâtiment…). Pour décrire ce mouvement, on utilise la <strong>vitesse</strong>, qui indique la distance parcourue pendant une certaine durée.<br/><br/>La <strong>vitesse moyenne</strong> d\'un objet se calcule en divisant la distance $d$ parcourue par la durée $t$ du trajet : $v = \\dfrac{d}{t}$. Elle s\'exprime le plus souvent en <strong>mètres par seconde (m/s)</strong> ou en <strong>kilomètres par heure (km/h)</strong>.<br/><br/>Lorsque la vitesse d\'un objet reste constante tout au long de son trajet, on parle de <strong>mouvement uniforme</strong> : dans ce cas, l\'objet parcourt la même distance pendant chaque intervalle de temps identique.',
      definitions: [
        { term: 'Vitesse moyenne', def: 'Rapport entre la distance parcourue $d$ et la durée $t$ du trajet : $v = \\dfrac{d}{t}$. Elle s\'exprime en m/s (mètres par seconde) ou en km/h (kilomètres par heure).' },
        { term: 'Mouvement', def: 'Un objet est en mouvement par rapport à un repère si sa position, par rapport à ce repère, change au cours du temps. Un passager assis dans un train est immobile par rapport au train, mais en mouvement par rapport au sol.' },
        { term: 'Mouvement uniforme', def: 'Mouvement au cours duquel la vitesse de l\'objet reste <strong>constante</strong> : l\'objet parcourt des distances égales pendant des durées égales.' },
        { term: 'Conversion km/h ↔ m/s', def: 'Pour convertir une vitesse de km/h en m/s, on <strong>divise par $3{,}6$</strong>. Pour convertir de m/s en km/h, on <strong>multiplie par $3{,}6$</strong>.' }
      ],
      method: {
        title: 'Calculer une vitesse, une distance ou une durée en 3 étapes',
        steps: [
          '<strong>Identifier les données</strong> fournies par l\'énoncé (distance $d$, durée $t$, vitesse $v$) ainsi que la grandeur inconnue à calculer.',
          '<strong>Convertir toutes les grandeurs dans les mêmes unités</strong> avant tout calcul : mètres et secondes, ou kilomètres et heures. C\'est l\'étape la plus souvent oubliée !',
          '<strong>Appliquer la formule adaptée</strong> selon l\'inconnue recherchée : $v = \\dfrac{d}{t}$ pour la vitesse, $d = v \\times t$ pour la distance, ou $t = \\dfrac{d}{v}$ pour la durée.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Mouvement uniforme',
        title: 'Graphique distance-temps d\'un mouvement à vitesse constante',
        description: 'Pour un mouvement uniforme, le graphique $d = f(t)$ est une droite passant par l\'origine. La vitesse $v$ correspond à la pente de cette droite : $v = \\dfrac{\\Delta d}{\\Delta t}$.',
        svg: `
          <svg viewBox="0 0 560 340" role="img" aria-labelledby="vitesse-title vitesse-desc">
            <title id="vitesse-title">Graphique distance en fonction du temps pour un mouvement uniforme</title>
            <desc id="vitesse-desc">Un graphique represente la distance parcourue en metres en fonction du temps ecoule en secondes. La courbe est une droite passant par l'origine, traduisant une vitesse constante de vingt metres par seconde. Un triangle en pointilles entre les instants une seconde et trois secondes met en evidence que l'ecart de distance de quarante metres divise par l'ecart de temps de deux secondes redonne la vitesse de vingt metres par seconde.</desc>

            <defs>
              <marker id="arrow-phys4e-vitesse" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <!-- grille -->
            <line class="grid-line" x1="160" y1="300" x2="160" y2="40"></line>
            <line class="grid-line" x1="240" y1="300" x2="240" y2="40"></line>
            <line class="grid-line" x1="320" y1="300" x2="320" y2="40"></line>
            <line class="grid-line" x1="400" y1="300" x2="400" y2="40"></line>
            <line class="grid-line" x1="480" y1="300" x2="480" y2="40"></line>
            <line class="grid-line" x1="80" y1="252" x2="510" y2="252"></line>
            <line class="grid-line" x1="80" y1="204" x2="510" y2="204"></line>
            <line class="grid-line" x1="80" y1="156" x2="510" y2="156"></line>
            <line class="grid-line" x1="80" y1="108" x2="510" y2="108"></line>
            <line class="grid-line" x1="80" y1="60" x2="510" y2="60"></line>

            <!-- axes -->
            <line class="frame-line" x1="80" y1="300" x2="510" y2="300" marker-end="url(#arrow-phys4e-vitesse)"></line>
            <line class="frame-line" x1="80" y1="300" x2="80" y2="35" marker-end="url(#arrow-phys4e-vitesse)"></line>
            <text class="tick-label" x="520" y="304" text-anchor="start">t (s)</text>
            <text class="tick-label" x="80" y="24" text-anchor="middle">d (m)</text>

            <!-- graduations -->
            <text class="tick-label" x="65" y="304" text-anchor="end">0</text>
            <text class="tick-label" x="160" y="315" text-anchor="middle">1</text>
            <text class="tick-label" x="240" y="315" text-anchor="middle">2</text>
            <text class="tick-label" x="320" y="315" text-anchor="middle">3</text>
            <text class="tick-label" x="400" y="315" text-anchor="middle">4</text>
            <text class="tick-label" x="480" y="315" text-anchor="middle">5</text>
            <text class="tick-label" x="65" y="256" text-anchor="end">20</text>
            <text class="tick-label" x="65" y="208" text-anchor="end">40</text>
            <text class="tick-label" x="65" y="160" text-anchor="end">60</text>
            <text class="tick-label" x="65" y="112" text-anchor="end">80</text>
            <text class="tick-label" x="65" y="64" text-anchor="end">100</text>

            <!-- droite d = v.t -->
            <path class="curve-main" fill="none" d="M80,300 L480,60"></path>

            <!-- triangle des pentes entre t=1s et t=3s -->
            <line class="guide-line" x1="160" y1="252" x2="320" y2="252"></line>
            <line class="guide-line" x1="320" y1="252" x2="320" y2="156"></line>
            <circle class="plot-point" cx="160" cy="252" r="5"></circle>
            <circle class="plot-point" cx="320" cy="156" r="5"></circle>
            <text class="tick-label" x="240" y="270" text-anchor="middle">Δt = 2 s</text>
            <text class="tick-label" x="330" y="208" text-anchor="start">Δd = 40 m</text>

            <text class="annotation-label" x="345" y="115" text-anchor="start">v = 20 m/s</text>
          </svg>
        `,
        notes: [
          'Le graphique $d = f(t)$ est une <strong>droite passant par l\'origine</strong> : c\'est la signature d\'un <strong>mouvement uniforme</strong>, à vitesse constante.',
          'La <strong>pente</strong> de cette droite correspond à la vitesse : entre $t = 1$ s et $t = 3$ s, la distance passe de $20$ m à $60$ m, soit $\\Delta d = 40$ m pour $\\Delta t = 2$ s.',
          'Vitesse lue sur le graphique : $v = \\dfrac{\\Delta d}{\\Delta t} = \\dfrac{40}{2} = 20$ m/s, ce qui correspond bien à la pente constante de la droite sur tout le trajet.'
        ],
        reading: 'Repère deux points quelconques sur la droite, lis l\'écart de distance $\\Delta d$ et l\'écart de temps $\\Delta t$ correspondants, puis calcule leur rapport : tu retrouves toujours la même vitesse, car le mouvement est uniforme.',
        caption: 'Graphique distance-temps d\'un mouvement uniforme à $v = 20$ m/s : une droite passant par l\'origine, dont la pente donne directement la vitesse.'
      },
      example: {
        statement: 'Une voiture roule à vitesse constante et parcourt une distance $d = 90$ km en une durée $t = 1{,}5$ h.<br/><br/>Calcule sa vitesse moyenne en km/h, puis convertis-la en m/s (arrondie au dixième).',
        steps: [
          'Les deux grandeurs sont déjà dans des unités cohérentes (km et h) : on peut appliquer directement la formule.',
          'Vitesse moyenne : $v = \\dfrac{d}{t} = \\dfrac{90}{1{,}5} = 60$ km/h.',
          'Pour convertir en m/s, on divise par $3{,}6$ : $v = \\dfrac{60}{3{,}6} \\approx 16{,}7$ m/s.'
        ],
        answer: '$v = 60$ km/h, soit environ $16{,}7$ m/s. Diviser par $3{,}6$ permet de passer des km/h aux m/s en une seule étape, sans avoir besoin de convertir séparément les kilomètres en mètres et les heures en secondes.'
      },
      formulas: [
        'Vitesse moyenne : $v = \\dfrac{d}{t}$',
        'Distance parcourue : $d = v \\times t$',
        'Durée du trajet : $t = \\dfrac{d}{v}$',
        'Conversion : km/h $\\rightarrow$ m/s en divisant par $3{,}6$ ; m/s $\\rightarrow$ km/h en multipliant par $3{,}6$'
      ],
      recap: [
        'La vitesse moyenne se calcule avec $v = \\dfrac{d}{t}$, en veillant à utiliser des unités cohérentes.',
        'Un <strong>mouvement uniforme</strong> se traduit par un graphique $d = f(t)$ en forme de <strong>droite passant par l\'origine</strong>.',
        'La pente de cette droite est directement la vitesse : $v = \\dfrac{\\Delta d}{\\Delta t}$.',
        'Pour convertir entre km/h et m/s, on utilise toujours le facteur $3{,}6$ (diviser pour aller vers les m/s, multiplier pour aller vers les km/h).'
      ],
      piege: 'Une erreur fréquente est de calculer une vitesse en mélangeant des unités différentes, par exemple une distance en kilomètres avec une durée exprimée en minutes ou en secondes, ce qui donne un résultat totalement faux. Attention, il faut toujours convertir toutes les grandeurs dans le même système d\'unités avant tout calcul, en utilisant le facteur $3{,}6$ pour passer des km/h aux m/s ou inversement.'
    },

    quiz: [
      {
        q: 'Un cycliste parcourt $d = 30$ km en $t = 2$ h. Quelle est sa vitesse moyenne ?',
        options: [
          '$v = 60$ km/h',
          '$v = 15$ km/h',
          '$v = 32$ km/h',
          '$v = 28$ km/h'
        ],
        answer: 1,
        correction: '$v = \\dfrac{d}{t} = \\dfrac{30}{2} = 15$ km/h.'
      },
      {
        q: 'Pour convertir une vitesse exprimée en km/h vers des m/s, il faut :',
        options: [
          'Multiplier par $3{,}6$',
          'Diviser par $3{,}6$',
          'Multiplier par $1\\,000$',
          'Diviser par $60$'
        ],
        answer: 1,
        correction: 'On divise par $3{,}6$ pour passer des km/h aux m/s (et on multiplie par $3{,}6$ pour l\'opération inverse).'
      },
      {
        q: 'Sur un graphique $d = f(t)$, un mouvement uniforme (vitesse constante) se reconnaît par :',
        options: [
          'Une courbe qui monte puis qui descend',
          'Une droite passant par l\'origine',
          'Une droite horizontale',
          'Un nuage de points sans forme particulière'
        ],
        answer: 1,
        correction: 'Un mouvement uniforme correspond à une vitesse constante : le graphique $d = f(t)$ est alors une droite passant par l\'origine, dont la pente donne directement la vitesse.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var typeExo = pick(['vitesse', 'distance', 'duree']);
        var contextes = [
          'un TGV reliant deux gares',
          'un cycliste sur une piste cyclable',
          'un coureur lors d\'un marathon',
          'un bateau traversant un lac',
          'une voiture sur autoroute',
          'un avion de ligne en croisière'
        ];
        var contexte = pick(contextes);

        if (typeExo === 'vitesse') {
          var d = rand(10, 300);
          var t = randFloat(0.5, 5, 1);
          var v = parseFloat((d / t).toFixed(1));
          return {
            statement: 'Pour ' + contexte + ', une distance $d = ' + d + '$ km est parcourue en une durée $t = ' + fr(t, 1) + '$ h.<br/><br/>Calcule la vitesse moyenne $v$ (en km/h, arrondie au dixième).',
            answer: v,
            tolerance: Math.max(0.2, parseFloat((v * 0.03).toFixed(2))),
            unit: 'km/h',
            hint: 'Utilise la formule $v = \\dfrac{d}{t}$.',
            solution: [
              'Formule : $v = \\dfrac{d}{t} = \\dfrac{' + d + '}{' + fr(t, 1) + '}$.',
              'Résultat : $v \\approx ' + fr(v, 1) + '$ km/h.'
            ]
          };
        } else if (typeExo === 'distance') {
          var vv = rand(20, 130);
          var tt = randFloat(0.5, 4, 1);
          var dd = parseFloat((vv * tt).toFixed(1));
          return {
            statement: 'Pour ' + contexte + ', la vitesse moyenne est $v = ' + vv + '$ km/h, maintenue pendant une durée $t = ' + fr(tt, 1) + '$ h.<br/><br/>Calcule la distance $d$ parcourue (en km, arrondie au dixième).',
            answer: dd,
            tolerance: Math.max(0.5, parseFloat((dd * 0.03).toFixed(2))),
            unit: 'km',
            hint: 'Utilise la formule $d = v \\times t$.',
            solution: [
              'Formule : $d = v \\times t = ' + vv + ' \\times ' + fr(tt, 1) + '$.',
              'Résultat : $d \\approx ' + fr(dd, 1) + '$ km.'
            ]
          };
        } else {
          var dv = rand(20, 400);
          var vvv = rand(20, 120);
          var tv = parseFloat((dv / vvv).toFixed(2));
          return {
            statement: 'Pour ' + contexte + ', une distance $d = ' + dv + '$ km est parcourue à une vitesse moyenne constante $v = ' + vvv + '$ km/h.<br/><br/>Calcule la durée $t$ du trajet (en h, arrondie au centième).',
            answer: tv,
            tolerance: Math.max(0.05, parseFloat((tv * 0.03).toFixed(2))),
            unit: 'h',
            hint: 'Utilise la formule $t = \\dfrac{d}{v}$.',
            solution: [
              'Formule : $t = \\dfrac{d}{v} = \\dfrac{' + dv + '}{' + vvv + '}$.',
              'Résultat : $t \\approx ' + fr(tv, 2) + '$ h.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Un TGV parcourt une distance $d = 320$ km en une durée $t = 1{,}6$ h, à vitesse constante.',
      tasks: [
        'Calculer la vitesse moyenne $v$ du TGV, en km/h.',
        'Convertir cette vitesse en m/s (arrondie au dixième).',
        'En supposant cette vitesse constante, calculer la distance parcourue par le TGV en $10$ minutes (arrondie au dixième de km).'
      ],
      solutions: [
        '$v = \\dfrac{d}{t} = \\dfrac{320}{1{,}6} = 200$ km/h.',
        'Pour convertir en m/s, on divise par $3{,}6$ : $v = \\dfrac{200}{3{,}6} \\approx 55{,}6$ m/s.',
        '$10$ minutes représentent $\\dfrac{10}{60} \\approx 0{,}167$ h. Distance parcourue : $d = v \\times t = 200 \\times 0{,}167 \\approx 33{,}3$ km.'
      ],
      finalAnswer: '$v = 200$ km/h, soit environ $55{,}6$ m/s. En $10$ minutes à cette vitesse, le TGV parcourt environ $33{,}3$ km : un simple calcul de vitesse permet d\'estimer facilement une distance ou une durée sur un trajet.'
    },

    evaluation: {
      title: 'Évaluation — La vitesse',
      duration: '25 min',
      questions: [
        {
          statement: 'Un coureur parcourt $d = 21$ km en $t = 1{,}5$ h. Calculer sa vitesse moyenne (en km/h).',
          type: 'numeric',
          answer: 14,
          tolerance: 0.5,
          unit: 'km/h',
          points: 2,
          correction: '$v = \\dfrac{d}{t} = \\dfrac{21}{1{,}5} = 14$ km/h.'
        },
        {
          statement: 'Une vitesse de $v = 72$ km/h correspond, une fois convertie, à :',
          type: 'multiple-choice',
          options: [
            '$20$ m/s',
            '$259{,}2$ m/s',
            '$7{,}2$ m/s',
            '$36$ m/s'
          ],
          answer: 0,
          points: 2,
          correction: '$v = \\dfrac{72}{3{,}6} = 20$ m/s.'
        },
        {
          statement: 'Une voiture roule à $v = 90$ km/h pendant $t = 2$ h. Calculer la distance parcourue (en km).',
          type: 'numeric',
          answer: 180,
          tolerance: 2,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 90 \\times 2 = 180$ km.'
        },
        {
          statement: 'Sur un graphique $d = f(t)$, si la droite obtenue est plus « pentue » (plus inclinée), cela signifie que :',
          type: 'multiple-choice',
          options: [
            'La vitesse est plus faible',
            'La vitesse est plus grande',
            'Le mouvement n\'est plus uniforme',
            'La durée du trajet est plus longue'
          ],
          answer: 1,
          points: 2,
          correction: 'La pente de la droite $d = f(t)$ est égale à la vitesse : plus la droite est inclinée (pentue), plus la vitesse est grande.'
        },
        {
          statement: 'Un piéton parcourt $d = 1\\,500$ m à une vitesse $v = 1{,}5$ m/s. Calculer la durée du trajet (en s).',
          type: 'numeric',
          answer: 1000,
          tolerance: 10,
          unit: 's',
          points: 1,
          correction: '$t = \\dfrac{d}{v} = \\dfrac{1\\,500}{1{,}5} = 1\\,000$ s, soit environ $16$ min $40$ s.'
        }
      ]
    }
  });
