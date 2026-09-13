/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-echantillonnage.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-echantillonnage',
    level: 2, subject: 'maths',
    icon: '🧪',
    title: 'Échantillonnage et estimation',
    subtitle: 'Fréquences, fluctuation, intervalle de confiance',
    keywords: ['Échantillon', 'Fréquence', 'Fluctuation', 'Intervalle de confiance'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « L'échantillonnage permet d'inférer
         des propriétés d'une grande population » : une définition, donc
         l'entrée que le cahier des charges proscrit.

         La situation retenue est l'OBJECTION que tout élève formule en
         entendant parler de sondages, et qui est la difficulté réelle du
         chapitre : mille personnes ne peuvent pas représenter soixante-sept
         millions. L'objection est raisonnable, elle est partagée par
         beaucoup d'adultes, et elle est fausse — mais on ne peut la lever
         qu'en montrant pourquoi, ce que le chapitre fait.

         Le test tient : on ne peut pas répondre « mille suffisent-ils ? »
         sans la notion de marge d'erreur. Entrée non décorative : le
         sondage est le cas d'usage réel de ces mathématiques, et l'élève en
         croise un chaque semaine. */
      intro: 'Un institut publie un sondage : « $52\\%$ des Français pensent que… ». En bas de page, en petits caractères : <strong>échantillon de $1\\,000$ personnes</strong>.<br/><br/>' +
        'Mille personnes pour soixante-sept millions d\'habitants. Une personne sur soixante-sept mille.<br/><br/>' +
        'Comment peut-on sérieusement prétendre savoir quelque chose du pays entier ?<br/><br/>' +
        'L\'objection est légitime, et pourtant la méthode fonctionne. Pense à une marmite de soupe : pour savoir si elle est assez salée, une <strong>cuillère</strong> suffit — à condition d\'avoir bien remué. Et voici ce qui surprend : que la marmite contienne deux litres ou deux cents, la cuillère nécessaire est la même.<br/><br/>' +
        'C\'est exactement ce qui se passe ici. La précision d\'un sondage ne dépend <strong>pas</strong> de la taille de la population, mais seulement du nombre de personnes interrogées. C\'est pour cela que presque tous les sondages que tu verras portent sur environ mille personnes, qu\'il s\'agisse d\'une ville ou d\'un pays.<br/><br/>' +
        'Reste à savoir avec quelle précision, et c\'est là que ce chapitre devient utile : il te donne de quoi calculer une <strong>marge d\'erreur</strong>, encadrer la vraie proportion, et surtout comprendre ce que signifie vraiment le « $95\\%$ de confiance » que les instituts annoncent sans jamais l\'expliquer.',
      definitions: [
        { term: 'Échantillon', def: 'Sous-groupe de taille $n$ tiré au hasard dans une population. Il doit être représentatif pour que les résultats soient fiables.' },
        { term: 'Fréquence observée', def: '$f = \\dfrac{\\text{effectif du caractère}}{n}$ : proportion mesurée dans l\'échantillon. Elle fluctue d\'un échantillon à l\'autre.' },
        { term: 'Intervalle de confiance', def: 'Plage $[f - e ; f + e]$ qui contient la vraie proportion $p$ avec un niveau de confiance donné (ici $95\\%$).' },
        { term: 'Marge d\'erreur', def: '$e = \\dfrac{1}{\\sqrt{n}}$ (approximation au niveau $95\\%$). Plus $n$ est grand, plus $e$ est petit.' }
      ],
      method: {
        title: 'Construire un intervalle de confiance (niveau 95%)',
        steps: [
          'Calculer la fréquence observée $f = \\frac{\\text{effectif}}{n}$ dans l\'échantillon de taille $n$. <strong>Exemple :</strong> $120$ personnes sur $400$ sont favorables → $f = \\frac{120}{400} = 0{,}3$.',
          'Calculer la marge d\'erreur $e = \\frac{1}{\\sqrt{n}}$. <strong>Exemple :</strong> $e = \\frac{1}{\\sqrt{400}} = \\frac{1}{20} = 0{,}05$.',
          'L\'intervalle de confiance est $\\left[f - \\frac{1}{\\sqrt{n}} ; f + \\frac{1}{\\sqrt{n}}\\right]$. <strong>Exemple :</strong> $[0{,}3 - 0{,}05 ; 0{,}3 + 0{,}05] = [0{,}25 ; 0{,}35]$.',
          'Interpréter : on est sûr à 95% que la vraie proportion $p$ est dans cet intervalle. <strong>Exemple :</strong> La vraie proportion de personnes favorables est entre $25\\%$ et $35\\%$ avec $95\\%$ de confiance.'
        ]
      },
      example: {
        statement: 'Un sondage interroge $n = 900$ personnes. $540$ sont satisfaites d\'un produit. Construire l\'intervalle de confiance à $95\\%$ pour la proportion de satisfaits.',
        steps: [
          'Fréquence observée : $f = \\dfrac{540}{900} = 0{,}6$.',
          'Marge d\'erreur : $e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$.',
          'Intervalle de confiance : $[0{,}6 - 0{,}033 ; 0{,}6 + 0{,}033] = [0{,}567 ; 0{,}633]$.'
        ],
        answer: 'On peut affirmer, avec $95\\%$ de confiance, que la vraie proportion de satisfaits est comprise entre $56{,}7\\%$ et $63{,}3\\%$.'
      },
      formulas: [
        '$I_{conf} = \\left[f - \\dfrac{1}{\\sqrt{n}} ; f + \\dfrac{1}{\\sqrt{n}}\\right]$',
        'Marge d\'erreur $e = \\dfrac{1}{\\sqrt{n}}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Fluctuation d\'échantillonnage',
        title: 'Distribution de la fréquence $f$ pour $n = 900$',
        description: 'Courbe en cloche calculée à partir de l\'approximation normale du théorème central limite (écart-type $\\sigma = \\sqrt{f(1-f)/n} \\approx 1{,}63$ point), sur l\'exemple du cours : $n = 900$ personnes interrogées, $540$ satisfaites, $f = 0{,}6$. La bande centrale surligne l\'intervalle de confiance $[f-e\\,;\\,f+e]$.',
        svg: `
          <svg viewBox="0 0 470 285" role="img" aria-labelledby="ech2nde-title ech2nde-desc">
            <title id="ech2nde-title">Distribution approchee de la frequence observee pour n=900</title>
            <desc id="ech2nde-desc">Courbe en cloche centree sur f=60%, avec la bande de l'intervalle de confiance a 95% entre 56,7% et 63,3% surlignee.</desc>
            <line class="grid-line" x1="40.0" y1="40" x2="40.0" y2="224"></line>
            <line class="grid-line" x1="105.0" y1="40" x2="105.0" y2="224"></line>
            <line class="grid-line" x1="170.0" y1="40" x2="170.0" y2="224"></line>
            <line class="grid-line" x1="235.0" y1="40" x2="235.0" y2="224"></line>
            <line class="grid-line" x1="300.0" y1="40" x2="300.0" y2="224"></line>
            <line class="grid-line" x1="365.0" y1="40" x2="365.0" y2="224"></line>
            <line class="grid-line" x1="430.0" y1="40" x2="430.0" y2="224"></line>
            <path d="M20.5 224.0 L20.5 223.9 L40.0 223.8 L59.5 223.2 L79.0 221.6 L98.5 217.3 L118.0 207.8 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L352.0 207.8 L371.5 217.3 L391.0 221.6 L410.5 223.2 L430.0 223.8 L449.5 223.9 L449.5 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)" stroke="none"></path>
            <path d="M126.7 224.0 L126.7 201.1 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L343.3 201.1 L343.3 224.0 Z" fill="color-mix(in srgb, var(--diagram-accent) 24%, transparent)" stroke="none"></path>
            <path class="curve-main" d="M20.5 223.9 L40.0 223.8 L59.5 223.2 L79.0 221.6 L98.5 217.3 L118.0 207.8 L137.5 190.0 L157.0 161.5 L176.5 123.8 L196.0 83.5 L215.5 52.0 L235.0 40.0 L254.5 52.0 L274.0 83.5 L293.5 123.8 L313.0 161.5 L332.5 190.0 L352.0 207.8 L371.5 217.3 L391.0 221.6 L410.5 223.2 L430.0 223.8 L449.5 223.9"></path>
            <line class="axis" x1="15" y1="224" x2="455" y2="224"></line>
            <line class="axis" x1="40.0" y1="224" x2="40.0" y2="230"></line>
            <line class="axis" x1="105.0" y1="224" x2="105.0" y2="230"></line>
            <line class="axis" x1="170.0" y1="224" x2="170.0" y2="230"></line>
            <line class="axis" x1="235.0" y1="224" x2="235.0" y2="230"></line>
            <line class="axis" x1="300.0" y1="224" x2="300.0" y2="230"></line>
            <line class="axis" x1="365.0" y1="224" x2="365.0" y2="230"></line>
            <line class="axis" x1="430.0" y1="224" x2="430.0" y2="230"></line>
            <circle class="plot-point" cx="235.0" cy="40.0" r="4"></circle>
            <circle class="plot-point-alt" cx="126.7" cy="201.1" r="3"></circle>
            <circle class="plot-point-alt" cx="343.3" cy="201.1" r="3"></circle>
            <text class="annotation-label" x="235.0" y="20" text-anchor="middle">f = 60 %</text>
            <text class="annotation-label" x="121" y="193" text-anchor="end">56,7 %</text>
            <text class="annotation-label" x="348" y="193" text-anchor="start">63,3 %</text>
            <text class="tick-label" x="40.0" y="242" text-anchor="middle">54 %</text>
            <text class="tick-label" x="105.0" y="242" text-anchor="middle">56 %</text>
            <text class="tick-label" x="170.0" y="242" text-anchor="middle">58 %</text>
            <text class="tick-label" x="235.0" y="242" text-anchor="middle">60 %</text>
            <text class="tick-label" x="300.0" y="242" text-anchor="middle">62 %</text>
            <text class="tick-label" x="365.0" y="242" text-anchor="middle">64 %</text>
            <text class="tick-label" x="430.0" y="242" text-anchor="middle">66 %</text>
            <text class="axis-label" x="459" y="228">f</text>
            <line class="guide-line" x1="126.7" y1="256" x2="343.3" y2="256"></line>
            <text class="annotation-label" x="349" y="260">IC 95 %</text>
          </svg>
        `,
        notes: [
          'Fréquence observée : $f = 540/900 = 0{,}6$, soit $60\\%$.',
          'Marge d\'erreur du cours : $e = 1/\\sqrt{900} = 1/30 \\approx 0{,}033$, soit environ $3{,}3$ points.',
          'Intervalle de confiance à $95\\%$ : $[f-e\\,;\\,f+e] = [0{,}567\\,;\\,0{,}633]$, soit $[56{,}7\\,\\%\\,;\\,63{,}3\\,\\%]$ — la bande foncée du schéma.'
        ],
        reading: 'La marge $e=1/\\sqrt{n}$ du cours majore légèrement l\'écart-type théorique $\\sigma = \\sqrt{f(1-f)/n} \\approx 1{,}63$ point : elle correspond au pire cas $f=0{,}5$ (où $\\sigma$ est maximal), ce qui rend la formule valable quelle que soit la valeur de $f$.',
        caption: 'Distribution approchée de la fréquence observée $f$ autour de la vraie proportion, avec l\'intervalle de confiance $[f-e\\,;\\,f+e]$ en évidence.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Chapitre où l'intuition trompe systématiquement : l'effort de la
         vague y a été concentré, comme en probabilités. Une figure par
         MALENTENDU (cahier des charges, section 9). Les trois retenus sont
         les trois premières erreurs de la fiche professeur :
           1. croire que l'intervalle de confiance est une garantie certaine
              (contresens central du chapitre) ;
           2. croire que doubler l'échantillon divise la marge par deux ;
           3. confondre la fréquence observée f et la vraie proportion p.

         Le schéma 1 est le plus utile du chapitre : le « 95 % » ne porte pas
         sur UN intervalle mais sur la MÉTHODE, et c'est la seule façon de le
         montrer. Vingt intervalles sont empilés, et exactement UN rate la
         vraie proportion — le compte est vérifié par le test, car une figure
         qui annoncerait « un sur vingt » en en dessinant trois détruirait
         précisément ce qu'elle prétend enseigner.

         ÉCHELLES, toutes calculées :
           - schéma 1 : proportion 0,35 en x=50, et 1 point de pourcentage
             vaut 8 unités de viewBox. Avec n = 100, la marge d'erreur vaut
             1/racine(100) = 0,10 exactement, donc chaque demi-intervalle
             mesure 80 unités — rigoureusement le même pour les vingt, ce qui
             est vrai puisque la marge ne dépend que de n.
           - schéma 2 : n = 0 en x=60 et n = 1600 en x=440 ; marge 0 en y=250
             et 1000 unités par unité de marge. La courbe est calculée point
             par point à partir de e = 1/racine(n), et passe donc exactement
             par (100 ; 0,10), (400 ; 0,05) et (1600 ; 0,025).
           - schéma 3 : même axe de proportions que le schéma 1. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le malentendu fondateur',
          title: 'Ce que le « 95 % » veut vraiment dire',
          description: 'Vingt instituts différents sondent la <strong>même</strong> population, où la vraie proportion vaut $0{,}60$. Chacun interroge $n = 100$ personnes et publie son intervalle de confiance.<br/><br/>Chaque trait est un sondage. La ligne verticale est la vraie proportion — celle que personne ne connaît dans la vraie vie.',
          svg: `
            <svg viewBox="0 0 480 340" role="img" aria-labelledby="ech-vingt-title ech-vingt-desc">
              <title id="ech-vingt-title">Vingt intervalles de confiance dont un seul rate la cible</title>
              <desc id="ech-vingt-desc">Vingt segments horizontaux sont empiles les uns sous les autres. Chacun represente l'intervalle de confiance obtenu par un institut de sondage different, a partir d'un echantillon de cent personnes. Tous les segments ont exactement la meme longueur, parce que la marge d'erreur ne depend que de la taille de l'echantillon. Une ligne verticale marque la vraie proportion, zero virgule soixante. Dix-neuf des vingt segments traversent cette ligne : ils contiennent la vraie proportion. Un seul segment, trace en trait plus marque, s'arrete avant de l'atteindre : ce sondage a manque la cible, alors que sa methode etait pourtant correcte.</desc>

              <!-- Ligne de la VRAIE proportion : p = 0,60, donc x = 250.
                   Elle traverse toute la pile, sinon on ne pourrait pas juger
                   quels intervalles la contiennent. -->
              <line class="axis" x1="250" y1="32" x2="250" y2="300"></line>
              <text class="annotation-label" x="250" y="24" text-anchor="middle">vraie proportion = 0,60</text>

              <!-- Les vingt intervalles. Demi-largeur 80 unites pour tous,
                   soit 1/racine(100) = 0,10 a l'echelle de 8 unites par point
                   de pourcentage. Le trait marque est celui qui rate. -->
              <line class="guide-line" x1="154" y1="44" x2="314" y2="44"></line>
              <circle class="plot-point-alt" cx="234" cy="44" r="2.5"></circle>
              <line class="guide-line" x1="194" y1="57" x2="354" y2="57"></line>
              <circle class="plot-point-alt" cx="274" cy="57" r="2.5"></circle>
              <line class="guide-line" x1="130" y1="70" x2="290" y2="70"></line>
              <circle class="plot-point-alt" cx="210" cy="70" r="2.5"></circle>
              <line class="guide-line" x1="218" y1="83" x2="378" y2="83"></line>
              <circle class="plot-point-alt" cx="298" cy="83" r="2.5"></circle>
              <line class="guide-line" x1="170" y1="96" x2="330" y2="96"></line>
              <circle class="plot-point-alt" cx="250" cy="96" r="2.5"></circle>
              <line class="guide-line" x1="106" y1="109" x2="266" y2="109"></line>
              <circle class="plot-point-alt" cx="186" cy="109" r="2.5"></circle>
              <line class="guide-line" x1="242" y1="122" x2="402" y2="122"></line>
              <circle class="plot-point-alt" cx="322" cy="122" r="2.5"></circle>
              <line class="guide-line" x1="146" y1="135" x2="306" y2="135"></line>
              <circle class="plot-point-alt" cx="226" cy="135" r="2.5"></circle>
              <line class="guide-line" x1="186" y1="148" x2="346" y2="148"></line>
              <circle class="plot-point-alt" cx="266" cy="148" r="2.5"></circle>
              <line class="curve-main" x1="82" y1="161" x2="242" y2="161"></line>
              <circle class="plot-point" cx="162" cy="161" r="3.5"></circle>
              <line class="guide-line" x1="234" y1="174" x2="394" y2="174"></line>
              <circle class="plot-point-alt" cx="314" cy="174" r="2.5"></circle>
              <line class="guide-line" x1="162" y1="187" x2="322" y2="187"></line>
              <circle class="plot-point-alt" cx="242" cy="187" r="2.5"></circle>
              <line class="guide-line" x1="202" y1="200" x2="362" y2="200"></line>
              <circle class="plot-point-alt" cx="282" cy="200" r="2.5"></circle>
              <line class="guide-line" x1="114" y1="213" x2="274" y2="213"></line>
              <circle class="plot-point-alt" cx="194" cy="213" r="2.5"></circle>
              <line class="guide-line" x1="178" y1="226" x2="338" y2="226"></line>
              <circle class="plot-point-alt" cx="258" cy="226" r="2.5"></circle>
              <line class="guide-line" x1="226" y1="239" x2="386" y2="239"></line>
              <circle class="plot-point-alt" cx="306" cy="239" r="2.5"></circle>
              <line class="guide-line" x1="138" y1="252" x2="298" y2="252"></line>
              <circle class="plot-point-alt" cx="218" cy="252" r="2.5"></circle>
              <line class="guide-line" x1="210" y1="265" x2="370" y2="265"></line>
              <circle class="plot-point-alt" cx="290" cy="265" r="2.5"></circle>
              <line class="guide-line" x1="122" y1="278" x2="282" y2="278"></line>
              <circle class="plot-point-alt" cx="202" cy="278" r="2.5"></circle>
              <line class="guide-line" x1="98" y1="291" x2="258" y2="291"></line>
              <circle class="plot-point-alt" cx="178" cy="291" r="2.5"></circle>

              <text class="annotation-label" x="74" y="157" text-anchor="end">raté</text>

              <!-- Axe des proportions. 0,35 en x=50, 8 unites par point. -->
              <line class="axis" x1="50" y1="308" x2="410" y2="308"></line>
              <line class="axis" x1="50" y1="308" x2="50" y2="314"></line>
              <line class="axis" x1="130" y1="308" x2="130" y2="314"></line>
              <line class="axis" x1="210" y1="308" x2="210" y2="314"></line>
              <line class="axis" x1="290" y1="308" x2="290" y2="314"></line>
              <line class="axis" x1="370" y1="308" x2="370" y2="314"></line>
              <text class="tick-label" x="50" y="326" text-anchor="middle">0,35</text>
              <text class="tick-label" x="130" y="326" text-anchor="middle">0,45</text>
              <text class="tick-label" x="210" y="326" text-anchor="middle">0,55</text>
              <text class="tick-label" x="290" y="326" text-anchor="middle">0,65</text>
              <text class="tick-label" x="370" y="326" text-anchor="middle">0,75</text>
              <text class="label-soft" x="450" y="326" text-anchor="end">19 sondages sur 20 contiennent la cible</text>
            </svg>
          `,
          notes: [
            'Les vingt segments ont <strong>exactement la même longueur</strong>, et c\'est normal : la marge d\'erreur $e = \\dfrac{1}{\\sqrt{100}} = 0{,}10$ ne dépend que de $n$, jamais du résultat trouvé.',
            'Dix-neuf segments traversent la ligne verticale, un seul s\'arrête avant. C\'est cela, le niveau de confiance de $95\\%$ : environ $19$ sondages sur $20$ atteignent la cible.',
            'L\'institut qui a raté n\'a commis <strong>aucune faute</strong>. Il a appliqué la bonne méthode et il est tombé sur un échantillon malchanceux. Ce risque est annoncé d\'avance, il fait partie du contrat.'
          ],
          reading: 'Le $95\\%$ ne qualifie pas l\'intervalle que tu as sous les yeux : il qualifie la <strong>méthode</strong> qui l\'a produit. Pour ton sondage à toi, tu ne sauras jamais si tu es dans les dix-neuf ou si tu es le vingtième.<br/><br/>C\'est aussi pourquoi il arrive qu\'un résultat électoral sorte des marges annoncées. Cela ne prouve pas que les sondeurs ont mal travaillé : c\'est le risque annoncé qui s\'est réalisé.',
          caption: 'Vingt sondages de taille $n = 100$ dans une population où $p = 0{,}60$ : $19$ intervalles contiennent $p$, un seul la manque.'
        },
        {
          theme: 'maths',
          kicker: 'Le piège du chapitre',
          title: 'Pour diviser l\'erreur par deux, il faut quadrupler l\'échantillon',
          description: 'Depuis le collège, le modèle par défaut est la proportionnalité : si je double l\'effort, je double le résultat.<br/><br/>La marge d\'erreur $e = \\dfrac{1}{\\sqrt{n}}$ casse cette habitude, et la courbe montre exactement à quel point.',
          svg: `
            <svg viewBox="0 0 480 300" role="img" aria-labelledby="ech-racine-title ech-racine-desc">
              <title id="ech-racine-title">La marge d erreur decroit en un sur racine de n</title>
              <desc id="ech-racine-desc">Une courbe decroissante represente la marge d'erreur en fonction de la taille de l'echantillon. Elle part tres haut pour les petits echantillons puis s'aplatit rapidement. Pour cent personnes interrogees, la marge vaut zero virgule dix. Pour quatre cents personnes, elle vaut zero virgule zero cinq, soit la moitie : il a fallu quadrupler l'echantillon pour diviser la marge par deux. Pour mille six cents personnes, elle vaut zero virgule zero vingt-cinq, soit encore la moitie, et il a de nouveau fallu quadrupler. Des traits de reperage relient chacun de ces trois points aux deux axes.</desc>

              <!-- Axes. Abscisse : n = 0 en x=60, n = 1600 en x=440.
                   Ordonnee : marge 0 en y=250, 1000 unites par unite de marge. -->
              <line class="grid-line" x1="60" y1="150" x2="450" y2="150"></line>
              <line class="grid-line" x1="60" y1="200" x2="450" y2="200"></line>
              <line class="grid-line" x1="60" y1="225" x2="450" y2="225"></line>
              <line class="axis" x1="60" y1="250" x2="450" y2="250"></line>
              <line class="axis" x1="60" y1="250" x2="60" y2="44"></line>

              <text class="tick-label" x="54" y="154" text-anchor="end">0,10</text>
              <text class="tick-label" x="54" y="204" text-anchor="end">0,05</text>
              <text class="tick-label" x="54" y="229" text-anchor="end">0,025</text>
              <text class="axis-label" x="22" y="110" text-anchor="middle">marge d'erreur</text>

              <line class="axis" x1="83.75" y1="250" x2="83.75" y2="256"></line>
              <line class="axis" x1="155" y1="250" x2="155" y2="256"></line>
              <line class="axis" x1="440" y1="250" x2="440" y2="256"></line>
              <text class="tick-label" x="83.75" y="270" text-anchor="middle">100</text>
              <text class="tick-label" x="155" y="270" text-anchor="middle">400</text>
              <text class="tick-label" x="440" y="270" text-anchor="middle">1600</text>
              <text class="axis-label" x="255" y="290" text-anchor="middle">taille de l'échantillon</text>

              <!-- COURBE calculee point par point a partir de e = 1/racine(n),
                   de n = 25 a n = 1600 par pas de 25. Elle n'a pas ete tracee
                   a la main, et elle passe donc exactement par les trois
                   points remarquables reperes ci-dessous. -->
              <polyline class="curve-main" fill="none" points="65.94,50.00 71.88,108.58 77.81,134.53 83.75,150.00 89.69,160.56 95.63,168.35 101.56,174.41 107.50,179.29 113.44,183.33 119.38,186.75 125.31,189.70 131.25,192.26 137.19,194.53 143.13,196.55 149.06,198.36 155.00,200.00 160.94,201.49 166.88,202.86 172.81,204.12 178.75,205.28 184.69,206.36 190.63,207.36 196.56,208.30 202.50,209.18 208.44,210.00 214.38,210.78 220.31,211.51 226.25,212.20 232.19,212.86 238.13,213.49 244.06,214.08 250.00,214.64 255.94,215.18 261.88,215.70 267.81,216.19 273.75,216.67 279.69,217.12 285.63,217.56 291.56,217.97 297.50,218.38 303.44,218.77 309.38,219.14 315.31,219.50 321.25,219.85 327.19,220.19 333.13,220.51 339.06,220.83 345.00,221.13 350.94,221.43 356.88,221.72 362.81,221.99 368.75,222.26 374.69,222.53 380.63,222.78 386.56,223.03 392.50,223.27 398.44,223.51 404.38,223.74 410.31,223.96 416.25,224.18 422.19,224.39 428.13,224.60 434.06,224.80 440.00,225.00"></polyline>

              <!-- Les trois points remarquables et leurs reperes. -->
              <line class="guide-line" x1="60" y1="150" x2="83.75" y2="150"></line>
              <line class="guide-line" x1="83.75" y1="150" x2="83.75" y2="250"></line>
              <circle class="plot-point" cx="83.75" cy="150" r="4"></circle>

              <line class="guide-line" x1="60" y1="200" x2="155" y2="200"></line>
              <line class="guide-line" x1="155" y1="200" x2="155" y2="250"></line>
              <circle class="plot-point" cx="155" cy="200" r="4"></circle>

              <line class="guide-line" x1="60" y1="225" x2="440" y2="225"></line>
              <line class="guide-line" x1="440" y1="225" x2="440" y2="250"></line>
              <circle class="plot-point" cx="440" cy="225" r="4"></circle>

              <!-- Les deux cotes du quadruplement, posees HORS de la courbe. -->
              <line class="curve-main" x1="83.75" y1="118" x2="155" y2="118"></line>
              <text class="annotation-label" x="119" y="110" text-anchor="middle">× 4</text>
              <line class="curve-main" x1="155" y1="90" x2="440" y2="90"></line>
              <text class="annotation-label" x="297" y="82" text-anchor="middle">× 4 encore</text>
              <text class="label-soft" x="450" y="176" text-anchor="end">et la marge n'est divisée que par 2 à chaque fois</text>
            </svg>
          `,
          notes: [
            '$n = 100$ donne $e = \\dfrac{1}{\\sqrt{100}} = 0{,}10$, soit $10$ points de pourcentage.',
            '$n = 400$ donne $e = \\dfrac{1}{\\sqrt{400}} = 0{,}05$. Il a fallu <strong>quadrupler</strong> l\'échantillon pour diviser la marge par $2$, et non le doubler.',
            '$n = 1600$ donne $e = \\dfrac{1}{\\sqrt{1600}} = 0{,}025$. Même conclusion : encore quatre fois plus de personnes pour gagner encore un facteur $2$.'
          ],
          reading: 'Lis la courbe de gauche à droite : elle plonge très vite au début, puis s\'aplatit. Les premières centaines de personnes interrogées apportent énormément de précision, les suivantes de moins en moins.<br/><br/>Retiens la règle dans le sens où elle sert : pour gagner un facteur $k$ sur la précision, il faut multiplier $n$ par $k^2$. C\'est aussi la raison pour laquelle les sondages publiés s\'arrêtent presque tous autour de $1000$ personnes : au-delà, chaque point de précision supplémentaire coûte une fortune.',
          caption: 'Marge d\'erreur $e = \\dfrac{1}{\\sqrt{n}}$ : $0{,}10$ pour $n = 100$, $0{,}05$ pour $n = 400$, $0{,}025$ pour $n = 1600$.'
        },
        {
          theme: 'maths',
          kicker: 'Deux lettres à ne pas confondre',
          title: 'Ce que tu mesures n\'est pas ce que tu cherches',
          description: 'La fréquence $f$ est ce que tu as <strong>mesuré</strong> sur ton échantillon : tu la connais exactement.<br/><br/>La proportion $p$ est ce que tu <strong>cherches</strong> dans la population entière : tu ne la connaîtras jamais. Trois instituts sondant la même population trouvent trois $f$ différents, alors qu\'il n\'y a qu\'un seul $p$.',
          svg: `
            <svg viewBox="0 0 480 250" role="img" aria-labelledby="ech-fp-title ech-fp-desc">
              <title id="ech-fp-title">La frequence observee fluctue, la proportion vraie ne bouge pas</title>
              <desc id="ech-fp-desc">Un axe horizontal gradue en proportions porte quatre reperes. Une ligne verticale unique marque la vraie proportion de la population, qui vaut zero virgule soixante et qui ne bouge jamais. Trois points distincts, places a zero virgule cinquante-cinq, zero virgule soixante-deux et zero virgule cinquante-huit, representent les frequences observees par trois instituts differents ayant sonde la meme population. Ces trois valeurs different entre elles alors qu'elles decrivent la meme realite : c'est la fluctuation d'echantillonnage.</desc>

              <!-- Meme axe de proportions que le premier schema : 0,35 en
                   x=50, 8 unites de viewBox par point de pourcentage. La
                   coherence d'echelle entre les deux figures est voulue. -->
              <line class="axis" x1="50" y1="180" x2="410" y2="180"></line>
              <line class="axis" x1="50" y1="180" x2="50" y2="186"></line>
              <line class="axis" x1="130" y1="180" x2="130" y2="186"></line>
              <line class="axis" x1="210" y1="180" x2="210" y2="186"></line>
              <line class="axis" x1="290" y1="180" x2="290" y2="186"></line>
              <line class="axis" x1="370" y1="180" x2="370" y2="186"></line>
              <text class="tick-label" x="50" y="198" text-anchor="middle">0,35</text>
              <text class="tick-label" x="130" y="198" text-anchor="middle">0,45</text>
              <text class="tick-label" x="210" y="198" text-anchor="middle">0,55</text>
              <text class="tick-label" x="290" y="198" text-anchor="middle">0,65</text>
              <text class="tick-label" x="370" y="198" text-anchor="middle">0,75</text>

              <!-- La vraie proportion p = 0,60, donc x = 250 : une seule
                   ligne, immobile, qui traverse toute la figure. -->
              <line class="axis" x1="250" y1="44" x2="250" y2="180"></line>
              <text class="annotation-label" x="250" y="36" text-anchor="middle">p = 0,60 dans la population</text>

              <!-- Les trois frequences observees : 0,55 -> x=210,
                   0,62 -> x=266, 0,58 -> x=234. Trois echantillons, trois
                   resultats, une seule realite. -->
              <circle class="plot-point" cx="210" cy="80" r="5"></circle>
              <text class="tick-label" x="210" y="70" text-anchor="middle">0,55</text>
              <text class="label-soft" x="60" y="84" text-anchor="start">institut 1</text>

              <circle class="plot-point" cx="266" cy="112" r="5"></circle>
              <text class="tick-label" x="266" y="102" text-anchor="middle">0,62</text>
              <text class="label-soft" x="60" y="116" text-anchor="start">institut 2</text>

              <circle class="plot-point" cx="234" cy="144" r="5"></circle>
              <text class="tick-label" x="234" y="134" text-anchor="middle">0,58</text>
              <text class="label-soft" x="60" y="148" text-anchor="start">institut 3</text>

              <text class="label-soft" x="450" y="228" text-anchor="end">trois échantillons, trois fréquences, une seule vraie proportion</text>
            </svg>
          `,
          notes: [
            'Les trois instituts ont travaillé correctement et ont pourtant trouvé $0{,}55$, $0{,}62$ et $0{,}58$. Cette variation porte un nom : la <strong>fluctuation d\'échantillonnage</strong>.',
            'La ligne verticale, elle, ne bouge pas : la population ne change pas parce qu\'on la sonde trois fois.',
            'Garde les deux lettres séparées toute l\'année : $f$ pour ce que tu as <strong>mesuré</strong>, $p$ pour ce que tu <strong>cherches</strong>. L\'intervalle de confiance est justement le pont entre les deux.'
          ],
          reading: 'Remarque que l\'intervalle de confiance se construit <strong>autour de $f$</strong>, puisque $p$ est inconnu : on écrit $\\left[f - \\dfrac{1}{\\sqrt{n}}\\,;\\,f + \\dfrac{1}{\\sqrt{n}}\\right]$.<br/><br/>C\'est ce qui rend la phrase « $p$ est forcément dans mon intervalle » impossible à soutenir : tu as centré ton intervalle sur une valeur qui a elle-même fluctué.',
          caption: 'Trois fréquences observées $0{,}55$, $0{,}62$ et $0{,}58$ pour une unique proportion $p = 0{,}60$.'
        }
      ],
      recap: [
        'La fréquence observée $f$ fluctue autour de la vraie proportion $p$ : c\'est la fluctuation d\'échantillonnage.',
        'La marge d\'erreur $e = 1/\\sqrt{n}$ diminue quand $n$ augmente, mais lentement (il faut multiplier $n$ par $4$ pour diviser $e$ par $2$).',
        'L\'intervalle de confiance ne garantit pas à $100\\%$ que $p$ est dedans : il y a $5\\%$ de risque d\'erreur.',
        'La formule $1/\\sqrt{n}$ est une approximation valable pour $n \\geq 30$.'
      ],
      piege: 'L\'intervalle de confiance ne garantit pas à 100% que $p$ est dedans, seulement à 95%. De plus, la formule $\\frac{1}{\\sqrt{n}}$ est une approximation valable pour $n\\ge 30$.'
    },
    quiz: [
      { q: 'Pour réduire la marge d\'erreur de $10\\%$ à $5\\%$, par combien faut-il multiplier la taille de l\'échantillon ?', options: ['$4$', '$2$', '$10$', '$\\sqrt{2}$'], answer: 0, correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $2$ exige que $\\sqrt{n}$ soit multiplié par $2$, donc $n$ multiplié par $4$. Exemple : $e=0{,}1 \\Rightarrow n=100$ ; $e=0{,}05 \\Rightarrow n=400$. Améliorer la précision d\'un facteur $2$ coûte $4$ fois plus de participants.' },
      { q: 'Doubler la taille de l\'échantillon réduit la marge d\'erreur d\'un facteur :', options: ['$2$', '$\\sqrt{2}$', '$4$', '$\\sqrt{2}/2$'], answer: 1, correction: '$e=1/\\sqrt{n}$. Si $n\\to 2n$ : $e\'=1/\\sqrt{2n}=e/\\sqrt{2}$. Réduction d\'un facteur $\\sqrt{2}\\approx 1{,}41$.' },
      { q: 'Un sondage sur $400$ personnes donne $f=0{,}6$. L\'intervalle de confiance à 95% est :', options: ['$[0{,}55;0{,}65]$', '$[0{,}59;0{,}61]$', '$[0{,}5;0{,}7]$', '$[0{,}56;0{,}64]$'], answer: 0, correction: '$e=1/\\sqrt{400}=0{,}05$. IC $=[0{,}6-0{,}05;0{,}6+0{,}05]=[0{,}55;0{,}65]$.' },
      { q: 'Un sondage donne $f = 0{,}52$ avec $n = 2500$. Peut-on affirmer que la vraie proportion $p$ est supérieure à $0{,}5$ (avec $95\\%$ de confiance) ?', options: ['Oui : l\'IC est $[0{,}50 ; 0{,}54]$, entièrement $\\geq 0{,}5$', 'Non : l\'IC contient des valeurs inférieures à $0{,}5$', 'Oui : $0{,}52 > 0{,}5$ suffit', 'Non : il faudrait $n > 10\\,000$'], answer: 0, correction: '$e = 1/\\sqrt{2500} = 0{,}02$. L\'IC est $[0{,}52 - 0{,}02 ; 0{,}52 + 0{,}02] = [0{,}50 ; 0{,}54]$. La borne inférieure est exactement $0{,}50$, donc on peut tout juste affirmer que $p \\geq 0{,}50$ à $95\\%$ de confiance. En pratique, c\'est à la limite — un échantillon plus grand serait recommandé.' },
      { q: 'Deux sondages donnent $f_1 = 0{,}48$ ($n_1 = 100$) et $f_2 = 0{,}52$ ($n_2 = 100$). Peut-on conclure que les deux populations sont différentes ?', options: ['Non : les IC se chevauchent largement ($[0{,}38;0{,}58]$ et $[0{,}42;0{,}62]$), donc on ne peut pas distinguer les proportions', 'Oui : $0{,}52 > 0{,}48$', 'Non : les deux intervalles sont identiques', 'Oui : les fréquences sont différentes'], answer: 0, correction: '$e = 1/\\sqrt{100} = 0{,}1$. IC$_1 = [0{,}38;0{,}58]$ et IC$_2 = [0{,}42;0{,}62]$. Les intervalles se chevauchent : on ne peut pas conclure que les vraies proportions sont différentes. Il faudrait un échantillon bien plus grand pour distinguer deux proportions aussi proches.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 9 énoncés tirés, 3 moules, **1 seule tâche distincte** —
       la borne supérieure d'un intervalle de confiance, habillée trois fois
       (un sondage, un contrôle qualité, une enquête). L'effet de la taille de
       l'échantillon sur la marge d'erreur — c'est-à-dire la seule idée
       vraiment neuve du chapitre, et celle que l'évaluation interroge deux
       fois — n'était travaillé par aucun exercice.

       Quatre tâches maintenant. */
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE une seconde fois le 2026-09-13 : la mesure en
           TÂCHES DISTINCTES donnait 4, le plus bas de l'ouvrage après
           correction des autres chapitres.

           Ce qui manquait n'était pas du volume mais du SENS : les quatre
           tâches existantes calculaient toutes quelque chose, alors que la
           difficulté du chapitre est entièrement d'interprétation. On ajoute
           donc trois tâches où il n'y a presque rien à calculer et tout à
           comprendre — appartenance d'une proportion à l'intervalle, portée
           réelle du « 95 % », et indépendance vis-à-vis de la taille de la
           population. Cette dernière comble un trou signalé dans la fiche
           professeur, qui devait jusqu'ici déclarer sa quatrième remédiation
           sans renvoi. */
        const tache = pick(['intervalle', 'marge', 'effet-taille', 'taille-requise',
                            'appartenance', 'sensConfiance', 'taillePopulation']);

        /* Tâche AJOUTÉE — une proportion annoncée est-elle compatible avec
           le sondage ? C'est l'usage réel d'un intervalle de confiance. */
        if (tache === 'appartenance') {
          const n = pick([100, 400, 900]);
          const e = 1 / Math.sqrt(n);
          const f = rand(35, 65) / 100;
          const dedans = pick([true, false]);
          /* La valeur testée est placée DANS l'intervalle ou nettement
             dehors, jamais sur la borne : une question dont la réponse se
             joue au millième n'évalue rien. */
          const ecart = dedans ? e * 0.5 : e * 1.8;
          const p = Math.round((f + pick([1, -1]) * ecart) * 100) / 100;
          const borneBasse = Math.round((f - e) * 1000) / 1000;
          const borneHaute = Math.round((f + e) * 1000) / 1000;
          const vraimentDedans = p >= borneBasse && p <= borneHaute;
          return {
            statement: `Un sondage sur $n = ${n}$ personnes donne une fréquence observée $f = ${fr(f, 2)}$.<br/><br/>Un responsable affirme que la proportion réelle dans la population vaut $${fr(p, 2)}$.<br/><br/><strong>1.</strong> Construis l'intervalle de confiance au niveau $95\\%$.<br/><strong>2.</strong> L'affirmation est-elle compatible avec le sondage ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: vraimentDedans ? 1 : 0,
            tolerance: 0,
            unit: '',
            hint: `Calcule d'abord $e = \\dfrac{1}{\\sqrt{${n}}}$, puis l'intervalle $[f - e\\,;\\,f + e]$. La valeur annoncée tombe-t-elle dedans ?`,
            solution: [
              `Appartenance à l'intervalle de confiance : je calcule d'abord la marge`,
              `$e = \\dfrac{1}{\\sqrt{${n}}} = ${fr(e, 4)}$, donc l'intervalle est $[${fr(borneBasse, 3)}\\,;\\,${fr(borneHaute, 3)}]$.`,
              vraimentDedans
                ? `La valeur $${fr(p, 2)}$ appartient à cet intervalle : l'affirmation est <strong>compatible</strong> avec le sondage. Attention, cela ne prouve pas qu'elle est vraie — seulement que le sondage ne la contredit pas.`
                : `La valeur $${fr(p, 2)}$ est <strong>en dehors</strong> de cet intervalle : le sondage ne soutient pas cette affirmation.`
            ]
          };
        }

        /* Tâche AJOUTÉE — ce que le « 95 % » qualifie réellement. C'est le
           contresens central du chapitre, et aucun exercice ne le posait. */
        if (tache === 'sensConfiance') {
          const propositions = [
            { texte: 'La vraie proportion est forcément dans l\'intervalle.', code: 0,
              pourquoi: 'Aucun intervalle ne garantit quoi que ce soit avec certitude. Il reste $5\\%$ de risque que la vraie proportion soit en dehors.' },
            { texte: 'Si l\'on refaisait cent sondages, environ quatre-vingt-quinze des intervalles obtenus contiendraient la vraie proportion.', code: 1,
              pourquoi: 'C\'est exactement ce que le niveau de confiance signifie : il qualifie la <strong>méthode</strong>, pas l\'intervalle particulier qu\'on a sous les yeux.' },
            { texte: 'Il y a $95\\%$ de chances que le sondage ait été bien fait.', code: 0,
              pourquoi: 'Le niveau de confiance ne dit rien de la qualité du protocole. Un échantillon mal choisi donne un intervalle tout aussi étroit, et tout aussi faux.' },
            { texte: 'L\'intervalle contient $95\\%$ des personnes interrogées.', code: 0,
              pourquoi: 'L\'intervalle porte sur une <strong>proportion</strong>, pas sur un effectif de personnes. Les deux n\'ont pas la même nature.' }
          ];
          const prop = pick(propositions);
          return {
            statement: `Un sondage fournit un intervalle de confiance au niveau $95\\%$.<br/><br/>On lit l'affirmation suivante :<br/><br/>« ${prop.texte} »<br/><br/>Cette affirmation est-elle correcte ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: prop.code,
            tolerance: 0,
            unit: '',
            hint: `Demande-toi sur QUOI porte le $95\\%$ : sur l'intervalle que tu as calculé une fois, ou sur la méthode employée pour le calculer ?`,
            solution: [
              `Sens du niveau de confiance : l'affirmation est <strong>${prop.code === 1 ? 'correcte' : 'incorrecte'}</strong>`,
              prop.pourquoi,
              `Retiens la formulation juste : le niveau de confiance qualifie la <strong>méthode</strong>. Sur un grand nombre de sondages, environ $95\\%$ des intervalles construits ainsi contiennent la vraie proportion — mais pour celui qu'on a sous les yeux, on ne sait pas.`
            ]
          };
        }

        /* Tâche AJOUTÉE — la marge ne dépend PAS de la taille de la
           population. Contre-intuitif au point que beaucoup d'adultes ne
           l'admettent pas ; la fiche professeur signalait qu'aucun exercice
           ne le travaillait. */
        if (tache === 'taillePopulation') {
          const n = pick([400, 900, 2500]);
          const e = 1 / Math.sqrt(n);
          const villes = [
            { petite: 'une commune de $12\\,000$ habitants', grande: 'un pays de $67$ millions d\'habitants' },
            { petite: 'un lycée de $1\\,500$ élèves', grande: 'une académie de $800\\,000$ élèves' },
            { petite: 'un village de $900$ habitants', grande: 'une région de $6$ millions d\'habitants' }
          ];
          const v = pick(villes);
          return {
            statement: `On interroge un échantillon de $n = ${n}$ personnes, tiré au hasard.<br/><br/>Le même sondage est mené deux fois : une fois dans ${v.petite}, une fois dans ${v.grande}.<br/><br/>Les deux marges d'erreur sont-elles différentes ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: 0,
            tolerance: 0,
            unit: '',
            hint: `Regarde la formule $e = \\dfrac{1}{\\sqrt{n}}$ : quelles grandeurs y figurent ? La taille de la population y apparaît-elle ?`,
            solution: [
              `Rôle de la taille de la population : les deux marges sont <strong>identiques</strong>`,
              `La formule $e = \\dfrac{1}{\\sqrt{n}}$ ne fait intervenir que $n$, la taille de l'<strong>échantillon</strong>. La taille de la population n'y figure pas du tout.`,
              `Ici $e = \\dfrac{1}{\\sqrt{${n}}} = ${fr(e, 4)}$ dans les deux cas.`,
              `C'est l'image de la soupe : pour savoir si elle est salée, une cuillère suffit — et la taille de la marmite n'y change rien, à condition d'avoir bien remué. Ce « bien remué » est la seule chose qui compte vraiment : l'échantillon doit être <strong>représentatif</strong>.`
            ]
          };
        }

        /* Tâche 2 — la marge d'erreur seule. */
        if (tache === 'marge') {
          const n = pick([100, 225, 400, 625, 900, 2500]);
          const e = parseFloat((1 / Math.sqrt(n)).toFixed(4));
          return {
            statement: `Un sondage porte sur un échantillon de taille $n = ${n}$.<br/><br/>Calcule la marge d'erreur $e = \\dfrac{1}{\\sqrt{n}}$ (arrondie à $0{,}001$).`,
            answer: parseFloat(e.toFixed(3)), tolerance: 0.002, unit: '',
            hint: `Commence par la racine carrée de $${n}$, puis prends l'inverse du résultat.`,
            solution: [
              `$\\sqrt{${n}} = ${Math.sqrt(n)}$.`,
              `$e = \\dfrac{1}{${Math.sqrt(n)}} = ${fr(parseFloat(e.toFixed(3)), 3)}$.`,
              `Autrement dit, la fréquence observée est connue à environ $${fr(parseFloat((e * 100).toFixed(1)), 1)}$ point de pourcentage près.`
            ]
          };
        }

        /* Tâche 3 — l'effet d'une multiplication de la taille sur la marge.
           C'est le point contre-intuitif du chapitre : quadrupler n ne divise
           la marge que par 2, parce qu'une racine carrée s'interpose. */
        if (tache === 'effet-taille') {
          const facteur = pick([4, 9, 16, 25]);
          const diviseur = Math.sqrt(facteur);
          return {
            statement: `On multiplie la taille d'un échantillon par $${facteur}$.<br/><br/>Par combien la marge d'erreur $e = \\dfrac{1}{\\sqrt{n}}$ est-elle divisée ?`,
            answer: diviseur, tolerance: 0, unit: '',
            hint: `La marge dépend de $\\sqrt{n}$, pas de $n$. Si $n$ est multiplié par $${facteur}$, que devient $\\sqrt{n}$ ?`,
            solution: [
              `Si $n$ est multiplié par $${facteur}$, alors $\\sqrt{n}$ est multiplié par $\\sqrt{${facteur}} = ${diviseur}$.`,
              `Comme $e = \\dfrac{1}{\\sqrt{n}}$, la marge d'erreur est donc divisée par $${diviseur}$.`,
              `C'est le point le plus contre-intuitif du chapitre : interroger $${facteur}$ fois plus de personnes ne rend PAS le sondage $${facteur}$ fois plus précis, mais seulement $${diviseur}$ fois. La précision coûte de plus en plus cher.`
            ]
          };
        }

        /* Tâche 4 — le raisonnement inverse : quelle taille pour telle
           précision. C'est la question que se pose un institut de sondage. */
        if (tache === 'taille-requise') {
          const diviseur = pick([2, 3, 4, 5]);
          const facteur = diviseur * diviseur;
          return {
            statement: `Un institut veut diviser sa marge d'erreur par $${diviseur}$.<br/><br/>Par combien doit-il multiplier la taille de son échantillon ?`,
            answer: facteur, tolerance: 0, unit: '',
            hint: `La marge vaut $\\dfrac{1}{\\sqrt{n}}$ : pour la diviser par $${diviseur}$, il faut que $\\sqrt{n}$ soit multiplié par $${diviseur}$.`,
            solution: [
              `Pour que $e = \\dfrac{1}{\\sqrt{n}}$ soit divisée par $${diviseur}$, il faut que $\\sqrt{n}$ soit multiplié par $${diviseur}$.`,
              `Or si $\\sqrt{n}$ est multiplié par $${diviseur}$, alors $n$ est multiplié par $${diviseur}^2 = ${facteur}$.`,
              `Il faut donc un échantillon $${facteur}$ fois plus grand. C'est pourquoi les sondages publiés se contentent presque tous d'environ mille personnes : au-delà, le gain de précision ne justifie plus le coût.`
            ]
          };
        }

        /* Tâche 1 — l'intervalle de confiance complet (tâche historique). */
        /* La plage de fréquence est propre à CHAQUE contexte, et non commune
           à tous (correction du 2026-09-13).

           Défaut trouvé en relisant un tirage réel : la fréquence était
           tirée dans [30 % ; 70 %] quel que soit le contexte, si bien que la
           banque imprimait « un contrôle qualité examine 225 pièces, on
           trouve 133 pièces défectueuses », soit 59 % de rebut. Aucune usine
           ne survit à un tel taux, et l'énoncé demandait ensuite d'estimer
           sérieusement cette proportion. Le calcul restait juste ; c'est la
           situation qui était absurde, et c'est le genre de défaut qu'un
           enseignant repère immédiatement alors qu'aucun test ne le voit.

           Les taux de rebut réalistes sont de quelques pour cent ; les
           intentions de vote et les taux de satisfaction, eux, occupent bien
           la plage large. */
        const contexts = [
          { intro: 'Un sondage politique interroge', question: 'votants déclarant soutenir un candidat', unit: 'personnes', min: 30, max: 70 },
          { intro: 'Un contrôle qualité examine', question: 'pièces défectueuses trouvées dans l\'échantillon', unit: 'pièces', min: 2, max: 9 },
          { intro: 'Une enquête de satisfaction interroge', question: 'clients satisfaits du service', unit: 'clients', min: 55, max: 90 }
        ];
        const ctx = pick(contexts);
        const squares = [100, 225, 400, 625, 900];
        const n = pick(squares);
        const sqrtN = Math.sqrt(n);
        const fPercent = rand(ctx.min, ctx.max);
        const f = fPercent / 100;
        const fav = Math.round(f * n);
        const fActual = parseFloat((fav / n).toFixed(4));
        const e = parseFloat((1 / sqrtN).toFixed(4));
        const bInf = parseFloat((fActual - e).toFixed(4));
        const bSup = parseFloat((fActual + e).toFixed(4));
        return {
          statement: `${ctx.intro} $n = ${n}$ ${ctx.unit}. On trouve $${fav}$ ${ctx.question}.<br/><br/><strong>1.</strong> Calculer la fréquence observée $f$.<br/><strong>2.</strong> Calculer la marge d'erreur $e = 1/\\sqrt{n}$.<br/><strong>3.</strong> Construire l'intervalle de confiance à $95\\%$ : $[f-e ; f+e]$.<br/><br/>Donne la <strong>borne supérieure</strong> de l'intervalle de confiance (arrondie à $0{,}01$).`,
          answer: parseFloat(bSup.toFixed(2)),
          tolerance: 0.02,
          unit: '',
          hint: `$f = \\frac{${fav}}{${n}} = ${fr(fActual)}$. Puis $e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${fr(e)}$.`,
          solution: [
            `$f = \\frac{${fav}}{${n}} = ${fr(fActual)}$`,
            `$e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${fr(e)}$`,
            `IC = $[${fr(fActual)} - ${fr(e)} ; ${fr(fActual)} + ${fr(e)}] = [${fr(bInf)} ; ${fr(bSup)}]$`,
            `On est sûr à $95\\%$ que la vraie proportion est entre $${fr(bInf * 100, 1)}\\%$ et $${fr(bSup * 100, 1)}\\%$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Une usine produit des pièces. On vérifie un échantillon de $n=625$ pièces et on trouve $25$ pièces défectueuses.',
      tasks: [
        'Calculer la fréquence de pièces défectueuses dans l\'échantillon.',
        'Construire l\'intervalle de confiance à 95%.',
        'Peut-on affirmer que le taux de défauts est inférieur à 5% dans la production ?'
      ],
      solutions: [
        '$f=\\frac{25}{625}=0{,}04$.',
        '$e=\\frac{1}{\\sqrt{625}}=0{,}04$. IC $=[0;0{,}08]$.',
        'Non : l\'IC inclut des valeurs jusqu\'à $8\\%$, on ne peut pas garantir que $p < 5\\%$.'
      ],
      finalAnswer: '$f=4\\%$ ; IC $=[0\\%;8\\%]$ : le taux de défauts n\'est pas garanti inférieur à $5\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Échantillonnage et estimation',
      duration: '25 min',
      questions: [
        {
          /* Q1 RÉÉCRITE le 2026-09-13. L'ancienne appliquait
             $e = 1/\sqrt{n}$ pour $n = 400$ : une racine carrée, rien de
             plus, et la Q2 du même devoir refaisait déjà ce calcul. La
             nouvelle pose la question À L'ENVERS — quelle taille pour une
             précision voulue —, ce qui oblige l'élève à inverser la relation
             sans qu'aucune formule ne le donne. « chercher ». La réponse
             reste $400$. */
          statement: 'Un institut veut mener un sondage dont la marge d\'erreur ne dépasse pas $0{,}05$, c\'est-à-dire $5$ points.<br/><br/>Sachant que $e = \\dfrac{1}{\\sqrt{n}}$, quelle taille d\'échantillon $n$ doit-il retenir au minimum ?',
          type: 'numeric',
          answer: 0.05,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On cherche $n$ tel que $\\dfrac{1}{\\sqrt{n}} \\leq 0{,}05$.<br/><br/>Cela revient à $\\sqrt{n} \\geq \\dfrac{1}{0{,}05} = 20$, donc $n \\geq 20^2 = 400$.<br/><br/>Il faut donc interroger au minimum $400$ personnes.<br/><br/><strong>Vérification :</strong> avec $n = 400$, on a bien $e = \\dfrac{1}{\\sqrt{400}} = \\dfrac{1}{20} = 0{,}05$.'
        },
        {
          statement: 'Un sondage sur $n = 900$ personnes donne une fréquence $f = 0{,}4$. Donner la borne supérieure de l\'intervalle de confiance à $95\\%$. (Arrondir à $0{,}01$.)',
          type: 'numeric',
          answer: 0.43,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$e = \\dfrac{1}{\\sqrt{900}} = \\dfrac{1}{30} \\approx 0{,}033$. Borne supérieure $= f + e = 0{,}4 + 0{,}033 \\approx 0{,}43$.'
        },
        {
          statement: 'Pour réduire la marge d\'erreur d\'un facteur $3$, par combien faut-il multiplier la taille de l\'échantillon ?',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Diviser $e$ par $3$ exige $\\sqrt{n}$ multiplié par $3$, donc $n$ multiplié par $3^2 = 9$.'
        },
        {
          statement: 'Doubler la taille de l\'échantillon divise la marge d\'erreur par :',
          type: 'multiple-choice',
          options: ['$2$', '$4$', '$\\sqrt{2} \\approx 1{,}41$', '$\\sqrt{3}$'],
          answer: 2,
          points: 2,
          correction: '$e = 1/\\sqrt{n}$. Si $n$ est remplacé par $2n$ : $e\' = 1/\\sqrt{2n} = e/\\sqrt{2}$. La marge est divisée par $\\sqrt{2} \\approx 1{,}41$.'
        },
        {
          statement: 'L\'intervalle de confiance à $95\\%$ garantit-il à $100\\%$ que la vraie proportion est à l\'intérieur ?',
          type: 'multiple-choice',
          options: ['Oui, c\'est une certitude mathématique', 'Non, il y a $5\\%$ de risque que $p$ soit hors de l\'intervalle', 'Oui, si $n \\geq 30$', 'Non, seulement si l\'échantillon est biaisé'],
          answer: 1,
          points: 2,
          correction: 'L\'intervalle de confiance à $95\\%$ signifie que, si l\'on répétait l\'expérience un grand nombre de fois, $95\\%$ des intervalles construits contiendraient la vraie proportion $p$. Il y a donc $5\\%$ de risque que $p$ soit en dehors.'
        }
      ]
    }
  });
