/* =========================================================
   Spark Learning – data/physique-4e/physique-4e-vitesse.js
   ========================================================= */

window.MODULES.push({
    id: 'physique-4e-vitesse',
    level: 1, subject: 'physique',
    icon: '🚴',
    title: 'La vitesse (distance, temps, mouvement)',
    subtitle: 'Référentiel, trajectoire, vitesse moyenne, mouvement uniforme, conversions m/s et km/h',
    keywords: ['Vitesse', 'Référentiel', 'Trajectoire', 'Mouvement uniforme', 'Chronophotographie'],
    physics: 'Le calcul d\'une vitesse moyenne permet d\'estimer un temps de trajet avant un départ, de comprendre les limitations de vitesse routières, ou d\'interpréter les performances d\'un sportif (temps au 100 m, vitesse moyenne d\'un marathon).',

    cours: {
      intro: 'En physique, décrire un mouvement nécessite de préciser par rapport à quoi on l\'observe : c\'est le <strong>référentiel</strong>. Un passager assis dans un train est immobile par rapport au train, mais en mouvement par rapport au sol — le mouvement n\'a de sens que si l\'on précise le référentiel choisi.<br/><br/>La <strong>trajectoire</strong> est l\'ensemble des positions successives occupées par un objet en mouvement : elle peut être rectiligne (une droite) ou curviligne (une courbe). La <strong>vitesse</strong> mesure la rapidité de ce mouvement : plus une distance est parcourue en peu de temps, plus la vitesse est grande.<br/><br/>La <strong>vitesse moyenne</strong> se calcule simplement en divisant la distance parcourue par la durée du parcours : $v = \\dfrac{d}{t}$. Elle s\'exprime en mètres par seconde (m/s) ou en kilomètres par heure (km/h), deux unités qu\'il faut savoir convertir l\'une en l\'autre.',
      definitions: [
        { term: 'Référentiel', def: 'Objet ou solide par rapport auquel on décrit un mouvement (le sol, un train, une voiture…). Un même objet peut être immobile dans un référentiel et en mouvement dans un autre.' },
        { term: 'Trajectoire', def: 'Ensemble des positions successives occupées par un objet en mouvement. Elle est <strong>rectiligne</strong> si c\'est une droite, <strong>curviligne</strong> si c\'est une courbe.' },
        { term: 'Vitesse moyenne', def: 'Grandeur qui mesure la rapidité d\'un mouvement : $v = \\dfrac{d}{t}$, où $d$ est la distance parcourue et $t$ la durée du parcours. S\'exprime en m/s ou en km/h.' },
        { term: 'Mouvement uniforme', def: 'Mouvement au cours duquel la vitesse reste <strong>constante</strong> au cours du temps (la distance parcourue est proportionnelle à la durée).' },
        { term: 'Chronophotographie', def: 'Succession de photographies d\'un objet en mouvement prises à intervalles de temps <strong>égaux</strong>. Des points régulièrement espacés indiquent un mouvement uniforme ; des écarts croissants indiquent un mouvement accéléré.' }
      ],
      method: {
        title: 'Calculer une vitesse moyenne en 3 étapes',
        steps: [
          '<strong>Identifier la distance parcourue $d$ et la durée $t$</strong> correspondante, en vérifiant que les unités sont cohérentes entre elles (ne pas mélanger des minutes et des heures sans convertir).',
          '<strong>Appliquer la formule</strong> $v = \\dfrac{d}{t}$ pour calculer la vitesse moyenne.',
          '<strong>Convertir l\'unité si nécessaire</strong> : pour passer de m/s à km/h, multiplier par $3{,}6$ ; pour passer de km/h à m/s, diviser par $3{,}6$.'
        ]
      },
      diagram: {
        theme: 'physique',
        kicker: 'Distance en fonction du temps',
        title: 'Comparer deux mouvements uniformes sur un graphique',
        description: 'Deux mobiles partent du même point : plus la vitesse est grande, plus la droite $d = f(t)$ est <strong>pentue</strong>. À chaque instant, le mobile le plus rapide a parcouru la plus grande distance.',
        svg: `
          <svg viewBox="0 0 580 300" role="img" aria-labelledby="vitesse-graph-title vitesse-graph-desc">
            <title id="vitesse-graph-title">Graphique distance en fonction du temps pour deux mobiles</title>
            <desc id="vitesse-graph-desc">Un repere porte le temps en abscisse de 0 a 10 secondes et la distance parcourue en ordonnee de 0 a 100 metres. Deux droites partent toutes les deux de l'origine : la droite pleine du mobile A, de pente plus faible, correspondant a une vitesse de 5 metres par seconde, et la droite en tirets du mobile B, de pente plus forte, correspondant a une vitesse de 8 metres par seconde. A l'instant 6 secondes, des lignes pointillees indiquent que le mobile A a parcouru 30 metres tandis que le mobile B a parcouru 48 metres : le mobile le plus rapide est toujours plus haut sur le graphique a un instant donne.</desc>

            <!-- grille -->
            <line class="grid-line" x1="148" y1="260" x2="148" y2="40"></line>
            <line class="grid-line" x1="236" y1="260" x2="236" y2="40"></line>
            <line class="grid-line" x1="324" y1="260" x2="324" y2="40"></line>
            <line class="grid-line" x1="412" y1="260" x2="412" y2="40"></line>
            <line class="grid-line" x1="500" y1="260" x2="500" y2="40"></line>
            <line class="grid-line" x1="60" y1="216" x2="520" y2="216"></line>
            <line class="grid-line" x1="60" y1="172" x2="520" y2="172"></line>
            <line class="grid-line" x1="60" y1="128" x2="520" y2="128"></line>
            <line class="grid-line" x1="60" y1="84" x2="520" y2="84"></line>
            <line class="grid-line" x1="60" y1="40" x2="520" y2="40"></line>

            <!-- axes -->
            <line class="axis" x1="60" y1="260" x2="530" y2="260"></line>
            <line class="axis" x1="60" y1="266" x2="60" y2="22"></line>
            <text class="axis-label" x="536" y="264">t (s)</text>
            <text class="axis-label" x="30" y="20">d (m)</text>

            <!-- graduations t -->
            <text class="tick-label" x="60" y="276" text-anchor="middle">0</text>
            <text class="tick-label" x="148" y="276" text-anchor="middle">2</text>
            <text class="tick-label" x="236" y="276" text-anchor="middle">4</text>
            <text class="tick-label" x="324" y="276" text-anchor="middle">6</text>
            <text class="tick-label" x="412" y="276" text-anchor="middle">8</text>
            <text class="tick-label" x="500" y="276" text-anchor="middle">10</text>

            <!-- graduations d -->
            <text class="tick-label" x="50" y="264" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="220" text-anchor="end">20</text>
            <text class="tick-label" x="50" y="176" text-anchor="end">40</text>
            <text class="tick-label" x="50" y="132" text-anchor="end">60</text>
            <text class="tick-label" x="50" y="88" text-anchor="end">80</text>
            <text class="tick-label" x="50" y="44" text-anchor="end">100</text>

            <!-- droite mobile A : v = 5 m/s (pleine) -->
            <polyline class="curve-main" points="60,260 500,150"></polyline>
            <!-- droite mobile B : v = 8 m/s (tirets) -->
            <polyline class="curve-main" points="60,260 500,84" stroke-dasharray="11 7"></polyline>

            <!-- lecture a t = 6 s -->
            <line class="guide-line" x1="324" y1="260" x2="324" y2="154"></line>
            <line class="guide-line" x1="60" y1="194" x2="324" y2="194"></line>
            <line class="guide-line" x1="60" y1="154" x2="324" y2="154"></line>
            <circle class="plot-point" cx="324" cy="194" r="5"></circle>
            <circle class="plot-point-alt" cx="324" cy="154" r="5"></circle>
            <text class="tick-label" x="330" y="198" text-anchor="start">30 m</text>
            <text class="tick-label" x="324" y="140" text-anchor="middle">48 m</text>

            <!-- etiquettes des droites -->
            <text class="annotation-label" x="430" y="178" text-anchor="middle">Mobile A — 5 m/s</text>
            <text class="annotation-label" x="430" y="68" text-anchor="middle">Mobile B — 8 m/s</text>
          </svg>
        `,
        notes: [
          'Les deux droites partent du même point (à $t = 0$, aucune distance n\'est encore parcourue) : c\'est la signature d\'un mouvement <strong>uniforme</strong>, où $d$ est proportionnelle à $t$.',
          'La <strong>pente</strong> de chaque droite est exactement la vitesse du mobile : le mobile B, plus rapide (pente plus forte), parcourt $8$ m chaque seconde contre $5$ m pour le mobile A.',
          'À l\'instant $t = 6$ s, on lit directement sur le graphique : le mobile A a parcouru $30$ m, le mobile B a parcouru $48$ m — on retrouve bien $v = \\dfrac{d}{t}$ dans les deux cas ($\\dfrac{30}{6} = 5$ et $\\dfrac{48}{6} = 8$).'
        ],
        reading: 'Pour lire une distance à un instant donné, pars de l\'axe des temps, monte verticalement jusqu\'à la droite du mobile étudié, puis lis l\'ordonnée à gauche.',
        caption: 'Graphique distance-temps de deux mobiles en mouvement uniforme : la droite la plus pentue (mobile B, $8$ m/s) correspond toujours à la vitesse la plus élevée.'
      },
      diagrams: [
        {
          theme: 'physique',
          kicker: 'Chronophotographie',
          title: 'Lire un mouvement uniforme ou accéléré sur une chronophotographie',
          description: 'Deux séries de photos prises aux <strong>mêmes instants</strong> (intervalles de temps égaux) : seul l\'espacement entre les points change selon que le mouvement est uniforme ou accéléré.',
          svg: `
            <svg viewBox="0 0 540 270" role="img" aria-labelledby="vitesse-chrono-title vitesse-chrono-desc">
              <title id="vitesse-chrono-title">Chronophotographie : mouvement uniforme et mouvement accelere</title>
              <desc id="vitesse-chrono-desc">Deux rangees de points representent des photographies prises a intervalles de temps egaux. Dans la rangee du haut, les six points numerotes de zero a cinq sont regulierement espaces : le mouvement est uniforme. Dans la rangee du bas, l'ecart entre les points augmente a chaque intervalle : le mouvement est accelere. Une ligne pointillee horizontale separe les deux rangees.</desc>

              <text class="annotation-label" x="230" y="20" text-anchor="middle">MOUVEMENT UNIFORME</text>

              <!-- ===== Rangee 1 : mouvement uniforme (ecarts constants de 60) ===== -->
              <line class="frame-line" x1="70" y1="100" x2="390" y2="100"></line>
              <circle class="plot-point" cx="80" cy="100" r="6"></circle>
              <circle class="plot-point" cx="140" cy="100" r="6"></circle>
              <circle class="plot-point" cx="200" cy="100" r="6"></circle>
              <circle class="plot-point" cx="260" cy="100" r="6"></circle>
              <circle class="plot-point" cx="320" cy="100" r="6"></circle>
              <circle class="plot-point" cx="380" cy="100" r="6"></circle>
              <text class="tick-label" x="80" y="120" text-anchor="middle">0</text>
              <text class="tick-label" x="140" y="120" text-anchor="middle">1</text>
              <text class="tick-label" x="200" y="120" text-anchor="middle">2</text>
              <text class="tick-label" x="260" y="120" text-anchor="middle">3</text>
              <text class="tick-label" x="320" y="120" text-anchor="middle">4</text>
              <text class="tick-label" x="380" y="120" text-anchor="middle">5</text>
              <text class="label-soft" x="230" y="138" text-anchor="middle">écarts toujours égaux</text>

              <line class="guide-line" x1="40" y1="157" x2="500" y2="157"></line>

              <!-- ===== Rangee 2 : mouvement accelere (ecarts en 1:3:5:7:9, unite 16) ===== -->
              <text class="annotation-label" x="280" y="178" text-anchor="middle">MOUVEMENT ACCÉLÉRÉ</text>
              <line class="frame-line" x1="70" y1="200" x2="490" y2="200" stroke-dasharray="11 7"></line>
              <circle class="plot-point-alt" cx="80" cy="200" r="6"></circle>
              <circle class="plot-point-alt" cx="96" cy="200" r="6"></circle>
              <circle class="plot-point-alt" cx="144" cy="200" r="6"></circle>
              <circle class="plot-point-alt" cx="224" cy="200" r="6"></circle>
              <circle class="plot-point-alt" cx="336" cy="200" r="6"></circle>
              <circle class="plot-point-alt" cx="480" cy="200" r="6"></circle>
              <text class="tick-label" x="80" y="220" text-anchor="middle">0</text>
              <text class="tick-label" x="96" y="220" text-anchor="middle">1</text>
              <text class="tick-label" x="144" y="220" text-anchor="middle">2</text>
              <text class="tick-label" x="224" y="220" text-anchor="middle">3</text>
              <text class="tick-label" x="336" y="220" text-anchor="middle">4</text>
              <text class="tick-label" x="480" y="220" text-anchor="middle">5</text>
              <text class="label-soft" x="280" y="238" text-anchor="middle">écarts de plus en plus grands</text>
            </svg>
          `,
          notes: [
            'Sur la rangée du haut, les points numérotés $0$ à $5$ (six instants séparés par le même intervalle de temps) sont <strong>régulièrement espacés</strong> : c\'est la signature d\'un <strong>mouvement uniforme</strong>, la distance parcourue est la même à chaque intervalle.',
            'Sur la rangée du bas, les mêmes six instants montrent un écart <strong>de plus en plus grand</strong> entre les points : l\'objet parcourt une distance croissante à chaque intervalle, son mouvement est <strong>accéléré</strong>.',
            'Dans les deux cas, l\'intervalle de temps entre deux photos consécutives est <strong>le même</strong> : seul ce qui change dans l\'espace (l\'écart entre les points) permet de distinguer les deux mouvements.'
          ],
          reading: 'Compare l\'espacement entre les points numérotés dans chaque rangée : constant en haut (mouvement uniforme), croissant en bas (mouvement accéléré) — sans avoir besoin de mesurer une seule distance.',
          caption: 'Chronophotographies de deux mouvements différents : espacement régulier pour un mouvement uniforme, espacement croissant pour un mouvement accéléré.'
        }
      ],
      example: {
        statement: 'Une voiture parcourt une distance $d = 90$ km en une durée $t = 1{,}5$ h.<br/><br/>Calcule sa vitesse moyenne en km/h, puis convertis le résultat en m/s.',
        steps: [
          'Vitesse moyenne en km/h : $v = \\dfrac{d}{t} = \\dfrac{90}{1{,}5} = 60$ km/h.',
          'Pour convertir en m/s, on divise par $3{,}6$ (puisque $1$ km/h $= \\dfrac{1}{3{,}6}$ m/s) : $v = \\dfrac{60}{3{,}6} \\approx 16{,}7$ m/s.'
        ],
        answer: '$v = 60$ km/h, soit environ $16{,}7$ m/s. Retiens que $3{,}6$ est le facteur de conversion entre ces deux unités de vitesse, dans les deux sens.'
      },
      formulas: [
        '$v = \\dfrac{d}{t}$ (vitesse moyenne)',
        '$d = v \\times t$ (distance parcourue)',
        '$t = \\dfrac{d}{v}$ (durée du parcours)',
        'Conversion : $v(\\text{km/h}) = v(\\text{m/s}) \\times 3{,}6$',
        'Conversion : $v(\\text{m/s}) = v(\\text{km/h}) \\div 3{,}6$'
      ],
      recap: [
        'Le mouvement d\'un objet ne se décrit que par rapport à un <strong>référentiel</strong> précis.',
        'La vitesse moyenne se calcule par $v = \\dfrac{d}{t}$ : plus la distance parcourue par unité de temps est grande, plus la vitesse est élevée.',
        'Sur une chronophotographie, des points <strong>régulièrement espacés</strong> traduisent un mouvement <strong>uniforme</strong> (vitesse constante) ; des écarts <strong>croissants</strong> traduisent une <strong>accélération</strong>.',
        'Le facteur $3{,}6$ permet de convertir entre m/s et km/h : on <strong>multiplie</strong> par $3{,}6$ pour passer en km/h, on <strong>divise</strong> par $3{,}6$ pour revenir en m/s.'
      ],
      piege: 'Une erreur fréquente est d\'appliquer directement la formule $v = \\dfrac{d}{t}$ sans vérifier que les unités sont cohérentes, par exemple en divisant une distance en kilomètres par une durée exprimée en minutes sans conversion préalable. Attention à toujours convertir toutes les grandeurs dans un système d\'unités cohérent avant de calculer, et à vérifier ensuite l\'ordre de grandeur du résultat : un piéton ne dépasse pas quelques km/h, une voiture sur autoroute atteint une centaine de km/h.'
    },

    quiz: [
      {
        q: 'Un cycliste parcourt $24$ km en $2$ h. Quelle est sa vitesse moyenne ?',
        options: ['$48$ km/h', '$12$ km/h', '$22$ km/h', '$26$ km/h'],
        answer: 1,
        correction: '$v = \\dfrac{d}{t} = \\dfrac{24}{2} = 12$ km/h.'
      },
      {
        q: 'Une vitesse de $36$ km/h correspond à combien de m/s ?',
        options: ['$10$ m/s', '$129{,}6$ m/s', '$3{,}6$ m/s', '$0{,}1$ m/s'],
        answer: 0,
        correction: 'Pour convertir de km/h en m/s, on divise par $3{,}6$ : $v = \\dfrac{36}{3{,}6} = 10$ m/s. Multiplier par $3{,}6$ au lieu de diviser est une erreur fréquente — elle donnerait $129{,}6$, une vitesse bien trop grande pour être réaliste ici.'
      },
      {
        q: 'Sur une chronophotographie (photos prises à intervalles de temps égaux), les points représentant les positions successives d\'un objet sont de plus en plus <strong>espacés</strong>. Que peut-on en conclure sur son mouvement ?',
        options: [
          'Il est uniforme (vitesse constante)',
          'Il est accéléré (la vitesse augmente)',
          'Il est immobile',
          'Il ralentit (la vitesse diminue)'
        ],
        answer: 1,
        correction: 'Comme les intervalles de temps entre deux photos sont égaux, un écart <strong>croissant</strong> entre les points signifie que l\'objet parcourt une distance de plus en plus grande à chaque intervalle : sa vitesse <strong>augmente</strong>, le mouvement est accéléré.'
      }
    ],

    exercice: {
      type: 'numeric',
      generate() {
        var mode = pick(['vitesse', 'distance']);

        if (mode === 'vitesse') {
          var ctx = pick([
            { nom: 'un piéton qui se promène', unite: 'm/s', du: 'm', tu: 's', dMin: 40, dMax: 300, tMin: 20, tMax: 150, tDecimal: false },
            { nom: 'un cycliste sur une piste cyclable', unite: 'km/h', du: 'km', tu: 'h', dMin: 6, dMax: 45, tMin: 1, tMax: 3, tDecimal: true },
            { nom: 'une voiture sur une route départementale', unite: 'km/h', du: 'km', tu: 'h', dMin: 30, dMax: 180, tMin: 1, tMax: 3, tDecimal: true },
            { nom: 'un TGV entre deux gares', unite: 'km/h', du: 'km', tu: 'h', dMin: 150, dMax: 700, tMin: 1, tMax: 4, tDecimal: true }
          ]);
          var d = rand(ctx.dMin, ctx.dMax);
          var t = ctx.tDecimal ? randFloat(ctx.tMin, ctx.tMax, 1) : rand(ctx.tMin, ctx.tMax);
          var v = parseFloat((d / t).toFixed(2));
          var tol = Math.max(0.2, parseFloat((v * 0.03).toFixed(2)));
          var tTexte = ctx.tDecimal ? fr(t, 1) : String(t);
          return {
            statement: 'Pour ' + ctx.nom + ', on mesure une distance parcourue $d = ' + d + '$ ' + ctx.du + ' en une durée $t = ' + tTexte + '$ ' + ctx.tu + '.<br/><br/>Calcule la vitesse moyenne $v$ (en ' + ctx.unite + ', arrondie au centième).',
            answer: v,
            tolerance: tol,
            unit: ctx.unite,
            hint: 'Utilise la formule $v = \\dfrac{d}{t}$ : divise la distance parcourue par la durée du parcours.',
            solution: [
              'Formule de la vitesse moyenne : $v = \\dfrac{d}{t}$.',
              'Application numérique : $v = \\dfrac{' + d + '}{' + tTexte + '}$.',
              'Résultat : $v \\approx ' + fr(v, 2) + '$ ' + ctx.unite + '.'
            ]
          };
        } else {
          var ctx2 = pick([
            { nom: 'un coureur à pied', unite: 'm/s', du: 'm', tu: 's', vMin: 2, vMax: 8, tMin: 10, tMax: 60 },
            { nom: 'un scooter en ville', unite: 'km/h', du: 'km', tu: 'h', vMin: 20, vMax: 50, tMin: 1, tMax: 2 },
            { nom: 'un avion de ligne en croisière', unite: 'km/h', du: 'km', tu: 'h', vMin: 700, vMax: 900, tMin: 1, tMax: 3 }
          ]);
          var v2 = randFloat(ctx2.vMin, ctx2.vMax, 1);
          var t2 = ctx2.unite === 'km/h' ? randFloat(ctx2.tMin, ctx2.tMax, 1) : rand(ctx2.tMin, ctx2.tMax);
          var dCalc = parseFloat((v2 * t2).toFixed(1));
          var tol2 = Math.max(0.5, parseFloat((dCalc * 0.03).toFixed(1)));
          var t2Texte = ctx2.unite === 'km/h' ? fr(t2, 1) : String(t2);
          return {
            statement: 'Pour ' + ctx2.nom + ', on considère une vitesse moyenne $v = ' + fr(v2, 1) + '$ ' + ctx2.unite + ', maintenue pendant une durée $t = ' + t2Texte + '$ ' + ctx2.tu + '.<br/><br/>Calcule la distance $d$ parcourue (en ' + ctx2.du + ', arrondie au dixième).',
            answer: dCalc,
            tolerance: tol2,
            unit: ctx2.du,
            hint: 'Utilise la relation $d = v \\times t$, déduite de $v = \\dfrac{d}{t}$.',
            solution: [
              'Relation entre distance, vitesse et durée : $d = v \\times t$.',
              'Application numérique : $d = ' + fr(v2, 1) + ' \\times ' + t2Texte + '$.',
              'Résultat : $d \\approx ' + fr(dCalc, 1) + '$ ' + ctx2.du + '.'
            ]
          };
        }
      }
    },

    probleme: {
      context: 'Deux amis, Léa et Noah, partent en même temps du même point pour rejoindre un village situé à $18$ km. Léa roule à vitesse moyenne constante $v_L = 15$ km/h ; Noah roule à vitesse moyenne constante $v_N = 20$ km/h.',
      tasks: [
        'Calculer la durée du trajet de Léa, puis celle de Noah, pour parcourir les $18$ km (en heures, puis en minutes).',
        'Lequel des deux amis arrive le premier au village ? De combien de minutes le devance-t-il ?',
        'Au moment précis où Léa a parcouru la moitié du trajet (soit $9$ km), quelle distance Noah a-t-il déjà parcourue ?'
      ],
      solutions: [
        'Durée de Léa : $t_L = \\dfrac{d}{v_L} = \\dfrac{18}{15} = 1{,}2$ h, soit $1{,}2 \\times 60 = 72$ min. Durée de Noah : $t_N = \\dfrac{d}{v_N} = \\dfrac{18}{20} = 0{,}9$ h, soit $0{,}9 \\times 60 = 54$ min.',
        'Noah met moins de temps ($54$ min contre $72$ min) : il arrive donc le premier, avec $72 - 54 = 18$ minutes d\'avance sur Léa.',
        'Le temps nécessaire à Léa pour parcourir $9$ km est $t = \\dfrac{9}{15} = 0{,}6$ h. Pendant cette même durée, Noah parcourt $d_N = v_N \\times t = 20 \\times 0{,}6 = 12$ km : il a donc $12 - 9 = 3$ km d\'avance sur Léa à cet instant.'
      ],
      finalAnswer: 'Léa met $72$ min, Noah $54$ min : Noah arrive $18$ minutes avant Léa. À mi-parcours de Léa, Noah a déjà $3$ km d\'avance sur elle. Une vitesse plus grande signifie systématiquement une durée plus courte pour une même distance — et une avance qui se creuse au fil du trajet.'
    },

    evaluation: {
      title: 'Évaluation — La vitesse',
      duration: '20 min',
      questions: [
        {
          statement: 'Un train parcourt $240$ km en $2$ h. Calculer sa vitesse moyenne (en km/h).',
          type: 'numeric',
          answer: 120,
          tolerance: 2,
          unit: 'km/h',
          points: 3,
          correction: '$v = \\dfrac{d}{t} = \\dfrac{240}{2} = 120$ km/h.'
        },
        {
          statement: 'Le mouvement d\'un objet est toujours décrit par rapport à :',
          type: 'multiple-choice',
          options: [
            'Un référentiel',
            'Une trajectoire obligatoirement rectiligne',
            'Une horloge uniquement',
            'Rien, le mouvement est absolu'
          ],
          answer: 0,
          points: 1,
          correction: 'Le mouvement n\'a de sens que par rapport à un référentiel choisi : un même objet peut être immobile dans un référentiel et en mouvement dans un autre.'
        },
        {
          statement: 'Une vitesse de $72$ km/h correspond à combien de m/s ?',
          type: 'numeric',
          answer: 20,
          tolerance: 0.5,
          unit: 'm/s',
          points: 2,
          correction: '$v = \\dfrac{72}{3{,}6} = 20$ m/s.'
        },
        {
          statement: 'Un cycliste roule à vitesse moyenne constante $v = 18$ km/h pendant $t = 0{,}5$ h. Calculer la distance parcourue (en km).',
          type: 'numeric',
          answer: 9,
          tolerance: 0.3,
          unit: 'km',
          points: 2,
          correction: '$d = v \\times t = 18 \\times 0{,}5 = 9$ km.'
        },
        {
          statement: 'Sur une chronophotographie, les points représentant les positions successives d\'un objet sont régulièrement espacés (toujours le même écart). Cela signifie que le mouvement est :',
          type: 'multiple-choice',
          options: [
            'Accéléré',
            'Uniforme (vitesse constante)',
            'À l\'arrêt',
            'Impossible à déterminer'
          ],
          answer: 1,
          points: 2,
          correction: 'Des écarts constants entre positions, pour des intervalles de temps égaux, signifient que l\'objet parcourt toujours la même distance dans le même temps : sa vitesse est constante, le mouvement est uniforme.'
        }
      ]
    }
  });
