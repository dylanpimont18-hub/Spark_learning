/* =========================================================
   Spark Learning – data/lycee-1re/1re-variables-aleatoires.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-variables-aleatoires',
    level: 2, subject: 'maths',
    icon: '🎰',
    title: 'Variables aléatoires et loi binomiale',
    subtitle: 'Espérance, variance, loi B(n,p)',
    keywords: ['Variable aléatoire', 'Espérance', 'Loi binomiale', 'Variance'],
    physics: false,
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version enchaînait
         trois définitions et une mise en garde sur une formule, c'est-à-dire
         qu'elle donnait les réponses avant d'avoir posé une question.

         La question retenue résiste à ce que l'élève sait déjà : il sait
         calculer la probabilité d'UNE série précise, il ne sait pas encore
         compter combien de séries différentes donnent le même nombre de
         succès. C'est exactement ce que le coefficient binomial apporte, et
         l'énoncé est construit pour que ce manque se fasse sentir avant qu'on
         y réponde. */
      intro: 'Tu lances une pièce $10$ fois de suite. Quelle est la probabilité d\'obtenir exactement $3$ fois « pile » ?<br/><br/>Tu sais déjà répondre à une question voisine : la probabilité d\'obtenir « pile, pile, pile, face, face, face, face, face, face, face » <strong>dans cet ordre</strong> vaut $\\left(\\dfrac{1}{2}\\right)^{10}$, soit environ $0{,}001$.<br/><br/>Mais la question ne dit pas dans quel ordre. Les trois « pile » peuvent tomber n\'importe où, et chacune de ces dispositions a la même probabilité. Il faudrait donc savoir <strong>combien il y en a</strong> — et les compter une par une n\'est pas raisonnable.<br/><br/>C\'est tout le problème que ce chapitre résout. Le nombre de dispositions s\'appelle le <strong>coefficient binomial</strong>, il se note $\\binom{10}{3}$, et il vaut $120$. La réponse est donc $120 \\times \\left(\\dfrac{1}{2}\\right)^{10} \\approx 0{,}117$.<br/><br/>Une fois cet outil en main, une même formule répond à toutes les situations du même type : un nombre d\'essais fixé, des essais indépendants, et la même probabilité de réussite à chaque fois. C\'est ce qu\'on appelle une <strong>loi binomiale</strong>.',
      definitions: [
        { term: 'Variable aléatoire', def: 'Une <strong>variable aléatoire</strong> $X$ est une fonction qui associe un nombre réel à chaque issue d\'une expérience aléatoire. Exemple : le nombre de $6$ obtenus en lançant $5$ dés.' },
        { term: 'Espérance', def: 'L\'<strong>espérance</strong> $E(X)$ est la valeur moyenne attendue sur un grand nombre de répétitions. Pour $\\mathcal{B}(n,p)$ : $E(X) = np$.' },
        { term: 'Variance et écart-type', def: 'La <strong>variance</strong> $V(X)$ mesure la dispersion autour de l\'espérance. $V(X) = np(1-p)$ pour $\\mathcal{B}(n,p)$. L\'<strong>écart-type</strong> est $\\sigma = \\sqrt{V(X)}$.' },
        { term: 'Loi binomiale', def: 'La loi $\\mathcal{B}(n,p)$ modélise le nombre de succès dans $n$ épreuves <strong>indépendantes</strong>, chacune de probabilité de succès $p$. $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.' }
      ],
      method: {
        title: 'Calculer avec la loi binomiale',
        steps: [
          '<strong>Conditions</strong> : expériences indépendantes, même probabilité $p$, $n$ répétitions.',
          '<strong>Probabilité binomiale</strong> : $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$.',
          '<strong>Espérance</strong> : $E(X)=np$.',
          '<strong>Variance et écart-type</strong> : $V(X)=np(1-p)$, écart-type $\\sigma=\\sqrt{np(1-p)}$.'
        ]
      },
      example: {
        statement: 'On lance une pièce équilibrée $6$ fois. Soit $X$ le nombre de "Pile". Calculer $P(X = 4)$, $E(X)$ et $\\sigma(X)$.',
        steps: [
          '$X \\sim \\mathcal{B}(6\\,;\\,0{,}5)$. Coefficient binomial : $\\binom{6}{4} = \\dfrac{6!}{4! \\times 2!} = \\dfrac{6 \\times 5}{2} = 15$.',
          '$P(X = 4) = \\binom{6}{4} \\times (0{,}5)^4 \\times (0{,}5)^2 = 15 \\times \\dfrac{1}{64} = \\dfrac{15}{64} \\approx 0{,}234$.',
          '$E(X) = 6 \\times 0{,}5 = 3$. $V(X) = 6 \\times 0{,}5 \\times 0{,}5 = 1{,}5$. $\\sigma = \\sqrt{1{,}5} \\approx 1{,}22$.'
        ],
        answer: '$P(X = 4) \\approx 0{,}234$. En moyenne on obtient $3$ "Pile" sur $6$ lancers, avec un écart-type d\'environ $1{,}22$.'
      },
      formulas: [
        '$P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$',
        '$E(X) = np$',
        '$V(X) = np(1-p)$',
        '$\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Diagramme en bâtons — $\\mathcal{B}(6\\,;\\,0{,}5)$',
        title: 'Loi de $X$ = nombre de "Pile" en $6$ lancers, avec $E(X)$ repéré',
        description: 'Reprise de l\'exemple du cours : une pièce équilibrée lancée $6$ fois, $X\\sim\\mathcal{B}(6\\,;\\,0{,}5)$. Chaque bâton donne $P(X=k)=\\binom{6}{k}\\times(0{,}5)^6$, recalculée indépendamment pour $k=0$ à $6$ ; le repère vertical marque $E(X)=np=3$, qui tombe exactement sur le bâton le plus haut.',
        svg: `
          <svg viewBox="0 0 460 290" role="img" aria-labelledby="binom-bar-title binom-bar-desc">
            <title id="binom-bar-title">Diagramme en batons de la loi binomiale B(6;0,5)</title>
            <desc id="binom-bar-desc">Sept batons verticaux representant P(X=k) pour k de 0 a 6, avec X le nombre de Pile en 6 lancers d'une piece equilibree. La distribution est symetrique, maximale en k=3 avec une probabilite de 0,3125, ce qui correspond a l'esperance E(X)=3 marquee par un repere vertical.</desc>

            <rect class="frame-line" x="60" y="30" width="360" height="220" fill="none"></rect>
            <line class="grid-line" x1="60" y1="187.14" x2="420" y2="187.14"></line>
            <line class="grid-line" x1="60" y1="124.29" x2="420" y2="124.29"></line>
            <line class="grid-line" x1="60" y1="61.43" x2="420" y2="61.43"></line>

            <rect x="68.71" y="240.18" width="34" height="9.82" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
            <rect x="120.14" y="191.07" width="34" height="58.93" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)"></rect>
            <rect x="171.57" y="102.68" width="34" height="147.32" fill="color-mix(in srgb, var(--diagram-accent) 70%, transparent)"></rect>
            <rect x="223.00" y="53.57" width="34" height="196.43" fill="var(--diagram-accent)"></rect>
            <rect x="274.43" y="102.68" width="34" height="147.32" fill="color-mix(in srgb, var(--diagram-accent) 70%, transparent)"></rect>
            <rect x="325.86" y="191.07" width="34" height="58.93" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)"></rect>
            <rect x="377.29" y="240.18" width="34" height="9.82" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>

            <line class="guide-line" x1="240" y1="16" x2="240" y2="53.57"></line>
            <circle class="plot-point" cx="240" cy="53.57" r="5"></circle>
            <text class="annotation-label" x="240" y="10" text-anchor="middle">E(X) = 3</text>

            <text class="tick-label" x="50" y="254" text-anchor="end">0</text>
            <text class="tick-label" x="50" y="191.14" text-anchor="end">0,10</text>
            <text class="tick-label" x="50" y="128.29" text-anchor="end">0,20</text>
            <text class="tick-label" x="50" y="65.43" text-anchor="end">0,30</text>

            <text class="tick-label" x="85.71" y="266" text-anchor="middle">0</text>
            <text class="tick-label" x="137.14" y="266" text-anchor="middle">1</text>
            <text class="tick-label" x="188.57" y="266" text-anchor="middle">2</text>
            <text class="tick-label" x="240" y="266" text-anchor="middle">3</text>
            <text class="tick-label" x="291.43" y="266" text-anchor="middle">4</text>
            <text class="tick-label" x="342.86" y="266" text-anchor="middle">5</text>
            <text class="tick-label" x="394.29" y="266" text-anchor="middle">6</text>

            <text class="axis-label" x="430" y="254" text-anchor="start">k</text>
            <text class="label-soft" x="20" y="140" text-anchor="middle" transform="rotate(-90 20 140)">P(X=k)</text>

            <text class="annotation-label" x="188.57" y="97" text-anchor="middle">0,234</text>
            <text class="annotation-label" x="291.43" y="97" text-anchor="middle">0,234</text>
            <text class="annotation-label" x="262" y="58" text-anchor="start">0,3125</text>
          </svg>
        `,
        notes: [
          'Distribution complète recalculée : $P(X=0)=P(X=6)\\approx0{,}016$, $P(X=1)=P(X=5)\\approx0{,}094$, $P(X=2)=P(X=4)\\approx0{,}234$, $P(X=3)=0{,}3125$. La somme des $7$ valeurs fait bien $1$.',
          'Le bâton le plus haut est exactement en $k=3$ : ce n\'est pas une coïncidence — avec $p=0{,}5$, la loi est symétrique et $E(X)=np=3$ tombe sur une valeur entière de $k$.',
          'La valeur $P(X=4)\\approx0{,}234$ est celle calculée dans l\'exemple du cours ($P(X=4)=\\binom{6}{4}\\times(0{,}5)^4\\times(0{,}5)^2=15/64$) — on la retrouve ici sur le bâton correspondant.'
        ],
        reading: 'Avec $p=0{,}5$, la loi binomiale est parfaitement symétrique autour de $E(X)=np$ : $P(X=k)=P(X=n-k)$. Le repère vertical (pointillé) tombe exactement sur le bâton central car $E(X)=3$ est un entier compris entre $0$ et $6$ — ce ne serait pas toujours aussi net pour d\'autres valeurs de $p$.',
        caption: 'Diagramme en bâtons de $\\mathcal{B}(6\\,;\\,0{,}5)$ avec $E(X)=3$ repéré.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         DEUX schémas et non trois, et c'est délibéré. Le cahier des charges
         demande une figure par MALENTENDU, pas une figure par formule : ce
         chapitre en porte deux qui méritent un dessin, et le troisième que
         j'ai envisagé — une illustration de la formule binomiale — n'aurait
         fait que redessiner ce que le cours écrit déjà. Sur la quatrième, la
         troisième et la seconde, plusieurs chapitres ont reçu deux figures
         pour cette même raison.

         Les deux malentendus retenus :
           1. l'espérance n'est pas la valeur la plus probable, et elle n'a pas
              besoin d'être entière — l'erreur que la fiche professeur
              diagnostique en quatrième position ;
           2. le coefficient binomial compte des dispositions, il n'est pas un
              facteur de correction tombé du ciel.

         Le premier schéma complète le schéma principal plutôt que de le
         répéter : celui-ci montre $\mathcal{B}(6\,;\,0{,}5)$, symétrique, où
         $E(X) = 3$ tombe pile sur le bâton central — et sa lecture dit
         elle-même que « ce ne serait pas toujours aussi net ». Le schéma
         ci-dessous montre justement le cas où ça ne l'est pas.

         TOUTES les valeurs sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-1re.test.js : les onze probabilités
         somment exactement à $1$, et les hauteurs des bâtons sont
         proportionnelles à ces probabilités. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Ce que l\'espérance n\'est pas',
          title: 'L\'espérance ne tombe pas sur le plus grand bâton',
          description: 'Voici la loi du nombre de bonnes réponses d\'un élève qui répond au hasard à un questionnaire de $10$ questions à $4$ choix, soit $\\mathcal{B}(10\\,;\\,0{,}25)$.<br/><br/>Le bâton le plus haut est celui de $k = 2$ : c\'est le résultat le plus <strong>probable</strong>. L\'espérance, elle, vaut $2{,}5$ et tombe entre deux bâtons.<br/><br/>Ce sont deux nombres différents, et aucun des deux n\'est faux.',
          svg: `
            <svg viewBox="0 0 430 240" role="img" aria-labelledby="va-esp-title va-esp-desc">
              <title id="va-esp-title">Diagramme en batons ou l esperance tombe entre deux batons</title>
              <desc id="va-esp-desc">Diagramme en batons de la loi binomiale de parametres dix et zero virgule vingt-cinq. Les batons montent de la gauche jusqu'a un maximum atteint pour la valeur deux, puis redescendent regulierement et deviennent presque invisibles a partir de la valeur six. Un trait vertical en pointilles marque l'esperance, qui vaut deux virgule cinq : il ne tombe sur aucun baton, mais dans l'intervalle qui separe le baton de la valeur deux de celui de la valeur trois. Le baton le plus haut est celui de la valeur deux, qui est donc le resultat le plus probable, alors que l'esperance vaut deux virgule cinq.</desc>

              <line class="grid-line" x1="52" y1="48" x2="396" y2="48"></line>
              <line class="grid-line" x1="52" y1="114" x2="396" y2="114"></line>
              <line class="axis" x1="52" y1="180" x2="396" y2="180"></line>

              <rect x="60.4" y="153.6" width="21.4" height="26.4" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="98.6" y="92" width="21.4" height="88" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="136.9" y="48" width="21.4" height="132" fill="color-mix(in srgb, var(--diagram-accent) 55%, transparent)"></rect>
              <rect x="175.1" y="62.7" width="21.4" height="117.3" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="213.3" y="111.6" width="21.4" height="68.4" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="251.5" y="152.6" width="21.4" height="27.4" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="289.7" y="172.4" width="21.4" height="7.6" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="328" y="178.6" width="21.4" height="1.4" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>

              <!-- Le trait de l'esperance tombe a 166,7, entre le baton de
                   k = 2 (centre 147,6) et celui de k = 3 (centre 185,8). -->
              <line class="guide-line" x1="166.7" y1="36" x2="166.7" y2="190"></line>
              <text class="annotation-label" x="174" y="32" text-anchor="start">E(X) = 2,5</text>
              <text class="annotation-label" x="147.6" y="40" text-anchor="middle">le plus probable</text>

              <text class="tick-label" x="71.1" y="196" text-anchor="middle">0</text>
              <text class="tick-label" x="109.3" y="196" text-anchor="middle">1</text>
              <text class="tick-label" x="147.6" y="196" text-anchor="middle">2</text>
              <text class="tick-label" x="185.8" y="196" text-anchor="middle">3</text>
              <text class="tick-label" x="224" y="196" text-anchor="middle">4</text>
              <text class="tick-label" x="262.2" y="196" text-anchor="middle">5</text>
              <text class="tick-label" x="300.4" y="196" text-anchor="middle">6</text>
              <text class="tick-label" x="338.7" y="196" text-anchor="middle">7</text>
              <text class="label-soft" x="224" y="222" text-anchor="middle">nombre de bonnes reponses</text>
            </svg>
          `,
          notes: [
            'La loi est $\\mathcal{B}(10\\,;\\,0{,}25)$, donc $E(X) = 10 \\times 0{,}25 = 2{,}5$.',
            'Le plus grand bâton est celui de $k = 2$, avec $P(X = 2) \\approx 0{,}282$. C\'est le résultat qu\'on rencontrera le plus souvent.',
            'L\'espérance $2{,}5$ n\'est pas ce résultat : c\'est la <strong>moyenne</strong> des résultats obtenus si l\'on faisait passer ce questionnaire à des milliers d\'élèves répondant au hasard.',
            'Les bâtons au-delà de $k = 7$ ne sont pas dessinés : leur probabilité totale vaut $0{,}0004$, soit moins d\'une chance sur deux mille, et ils seraient invisibles à l\'impression. Les onze probabilités de la loi somment bien à $1$.'
          ],
          reading: 'Cherche le bâton le plus haut, puis cherche le trait en pointillés : ils ne sont pas au même endroit. Retiens-en la formule qui évite l\'erreur : l\'espérance répond à « combien en moyenne ? », et le plus grand bâton répond à « quel résultat est le plus fréquent ? ». Ce sont deux questions différentes, donc deux réponses différentes.',
          caption: 'Loi $\\mathcal{B}(10\\,;\\,0{,}25)$ : le mode vaut $2$ alors que $E(X) = 2{,}5$.'
        },
        {
          theme: 'maths',
          kicker: 'D\'où vient le coefficient',
          title: 'Le coefficient binomial compte des dispositions',
          description: 'L\'oubli du coefficient $\\binom{n}{k}$ est l\'erreur la plus fréquente du chapitre, et elle vient de ce qu\'on le prend pour un facteur de correction arbitraire. Il n\'en est rien : c\'est un <strong>dénombrement</strong>, et sur un petit cas on peut l\'écrire à la main.<br/><br/>Voici les $\\binom{4}{2} = 6$ façons de placer $2$ succès parmi $4$ essais.',
          svg: `
            <svg viewBox="0 0 430 230" role="img" aria-labelledby="va-coef-title va-coef-desc">
              <title id="va-coef-title">Les six facons de placer deux succes parmi quatre essais</title>
              <desc id="va-coef-desc">Six lignes de quatre cases chacune sont disposees en deux colonnes de trois. Dans chaque ligne, exactement deux cases sont remplies et deux sont vides, et aucune des six lignes ne repete la disposition d'une autre. Les six dispositions correspondent aux positions un et deux, un et trois, un et quatre, deux et trois, deux et quatre, puis trois et quatre. Ces six lignes epuisent toutes les possibilites, ce qui explique que le coefficient binomial de quatre parmi deux vaut six.</desc>

              <text class="annotation-label" x="215" y="24" text-anchor="middle">deux succes parmi quatre essais</text>

              <rect x="40" y="46" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="70" y="46" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="40" y1="46" x2="160" y2="46"></line>
              <line class="frame-line" x1="40" y1="72" x2="160" y2="72"></line>
              <line class="frame-line" x1="40" y1="46" x2="40" y2="72"></line>
              <line class="frame-line" x1="70" y1="46" x2="70" y2="72"></line>
              <line class="frame-line" x1="100" y1="46" x2="100" y2="72"></line>
              <line class="frame-line" x1="130" y1="46" x2="130" y2="72"></line>
              <line class="frame-line" x1="160" y1="46" x2="160" y2="72"></line>

              <rect x="40" y="92" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="100" y="92" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="40" y1="92" x2="160" y2="92"></line>
              <line class="frame-line" x1="40" y1="118" x2="160" y2="118"></line>
              <line class="frame-line" x1="40" y1="92" x2="40" y2="118"></line>
              <line class="frame-line" x1="70" y1="92" x2="70" y2="118"></line>
              <line class="frame-line" x1="100" y1="92" x2="100" y2="118"></line>
              <line class="frame-line" x1="130" y1="92" x2="130" y2="118"></line>
              <line class="frame-line" x1="160" y1="92" x2="160" y2="118"></line>

              <rect x="40" y="138" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="130" y="138" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="40" y1="138" x2="160" y2="138"></line>
              <line class="frame-line" x1="40" y1="164" x2="160" y2="164"></line>
              <line class="frame-line" x1="40" y1="138" x2="40" y2="164"></line>
              <line class="frame-line" x1="70" y1="138" x2="70" y2="164"></line>
              <line class="frame-line" x1="100" y1="138" x2="100" y2="164"></line>
              <line class="frame-line" x1="130" y1="138" x2="130" y2="164"></line>
              <line class="frame-line" x1="160" y1="138" x2="160" y2="164"></line>

              <rect x="250" y="46" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="280" y="46" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="220" y1="46" x2="340" y2="46"></line>
              <line class="frame-line" x1="220" y1="72" x2="340" y2="72"></line>
              <line class="frame-line" x1="220" y1="46" x2="220" y2="72"></line>
              <line class="frame-line" x1="250" y1="46" x2="250" y2="72"></line>
              <line class="frame-line" x1="280" y1="46" x2="280" y2="72"></line>
              <line class="frame-line" x1="310" y1="46" x2="310" y2="72"></line>
              <line class="frame-line" x1="340" y1="46" x2="340" y2="72"></line>

              <rect x="250" y="92" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="310" y="92" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="220" y1="92" x2="340" y2="92"></line>
              <line class="frame-line" x1="220" y1="118" x2="340" y2="118"></line>
              <line class="frame-line" x1="220" y1="92" x2="220" y2="118"></line>
              <line class="frame-line" x1="250" y1="92" x2="250" y2="118"></line>
              <line class="frame-line" x1="280" y1="92" x2="280" y2="118"></line>
              <line class="frame-line" x1="310" y1="92" x2="310" y2="118"></line>
              <line class="frame-line" x1="340" y1="92" x2="340" y2="118"></line>

              <rect x="280" y="138" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <rect x="310" y="138" width="26" height="26" fill="color-mix(in srgb, var(--diagram-accent) 45%, transparent)"></rect>
              <line class="frame-line" x1="220" y1="138" x2="340" y2="138"></line>
              <line class="frame-line" x1="220" y1="164" x2="340" y2="164"></line>
              <line class="frame-line" x1="220" y1="138" x2="220" y2="164"></line>
              <line class="frame-line" x1="250" y1="138" x2="250" y2="164"></line>
              <line class="frame-line" x1="280" y1="138" x2="280" y2="164"></line>
              <line class="frame-line" x1="310" y1="138" x2="310" y2="164"></line>
              <line class="frame-line" x1="340" y1="138" x2="340" y2="164"></line>

              <text class="annotation-label" x="215" y="200" text-anchor="middle">six dispositions, donc six chemins</text>
              <text class="label-soft" x="215" y="220" text-anchor="middle">et aucune autre n est possible</text>
            </svg>
          `,
          notes: [
            'Chaque ligne est une série possible de $4$ essais ; les cases pleines sont les succès.',
            'Il y en a exactement <strong>six</strong>, et l\'on peut vérifier qu\'aucune n\'a été oubliée : les deux succès occupent les positions $1$-$2$, $1$-$3$, $1$-$4$, $2$-$3$, $2$-$4$ ou $3$-$4$.',
            'Six est donc la valeur de $\\binom{4}{2}$ — non par une formule, mais par un comptage qu\'on vient de faire.',
            'Chacune de ces six séries a exactement la même probabilité, $p^2(1-p)^2$. C\'est pour cela qu\'on multiplie cette probabilité par $6$ : les six cas donnent tous « deux succès », et ils sont incompatibles.'
          ],
          reading: 'Compte les cases pleines de chaque ligne : il y en a toujours deux, jamais une ni trois. Puis vérifie qu\'aucune ligne n\'est la copie d\'une autre. Tu viens de démontrer que $\\binom{4}{2} = 6$, sans aucune formule. Pour $n = 10$, l\'idée est exactement la même — c\'est seulement le dessin qui deviendrait trop grand, et c\'est à ce moment-là que la calculatrice prend le relais.',
          caption: 'Les $\\binom{4}{2} = 6$ dispositions de $2$ succès parmi $4$ essais.'
        }
      ],
      recap: [
        'Loi binomiale : $n$ épreuves <strong>indépendantes</strong>, même probabilité $p$. Si l\'une de ces conditions manque, ce n\'est pas binomial.',
        '$E(X) = np$ donne le nombre moyen de succès ; $\\sigma = \\sqrt{np(1-p)}$ mesure la dispersion.',
        'Le coefficient binomial $\\binom{n}{k}$ compte le nombre de façons de choisir $k$ succès parmi $n$ essais.',
        'Une probabilité est toujours entre $0$ et $1$ : si ton résultat dépasse $1$ ou est négatif, c\'est une erreur de calcul !'
      ],
      piege: 'La loi binomiale suppose des épreuves <strong>indépendantes</strong>. Si on tire sans remise, les tirages ne sont plus indépendants et la loi binomiale ne s\'applique plus exactement.<br/><br/>Autre piège : oublier les puissances dans la formule $P(X=k) = \\binom{n}{k}p^k(1-p)^{n-k}$. Une probabilité doit toujours être comprise entre $0$ et $1$.'
    },
    quiz: [
      { q: 'Pour $X\\sim\\mathcal{B}(4\\,;\\,0{,}5)$, un élève calcule $P(X=2) = \\binom{4}{2} \\times 0{,}5 = 6 \\times 0{,}5 = 3$. Quelle est son erreur ?', options: ['Il a oublié les puissances : $P(X=2) = \\binom{4}{2} \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\dfrac{1}{16} = \\dfrac{3}{8}$', 'Le coefficient binomial est faux : $\\binom{4}{2} \\neq 6$', 'Il aurait dû écrire $P(X=2) = (0{,}5)^2 = 0{,}25$ sans coefficient binomial', 'La loi binomiale ne s\'applique pas car $p = 0{,}5$'], answer: 0, correction: 'La formule est $P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$. L\'élève a oublié les <strong>puissances</strong> sur $p$ et $(1-p)$.<br/><br/>Avec $n=4, k=2, p=0{,}5$ : $P(X=2) = 6 \\times (0{,}5)^2 \\times (0{,}5)^2 = 6 \\times \\frac{1}{4} \\times \\frac{1}{4} = \\frac{6}{16} = \\frac{3}{8} \\approx 0{,}375$.<br/><br/>Une probabilité ne peut <strong>jamais dépasser $1$</strong> — un résultat de $3$ aurait dû alerter l\'élève !' },
      { q: 'Pour $X\\sim\\mathcal{B}(5;0{,}5)$, $P(X=2)=$ ?', options: ['$\\frac{5}{16}$', '$\\frac{5}{32}$', '$\\frac{10}{32}$', '$\\frac{1}{32}$'], answer: 2, correction: 'On applique la formule binomiale : $P(X=2) = \\binom{5}{2}(0{,}5)^2(0{,}5)^3$.<br/><br/>$P(X=2) = 10 \\times \\frac{1}{32} = \\frac{10}{32} = \\frac{5}{16} \\approx 0{,}3125$.' },
      { q: 'La variance de $\\mathcal{B}(n;p)$ est maximale quand :', options: ['$p=0$', '$p=1$', '$p=0{,}5$', '$p=n$'], answer: 2, correction: 'La variance $V(X) = np(1-p)$ est maximale quand le produit $p(1-p)$ est maximal.<br/><br/>Ce produit atteint son maximum pour $p = 0{,}5$ (c\'est un résultat classique de l\'étude du trinôme $p - p^2$). La dispersion est maximale quand le succès est aussi probable que l\'échec.' },
      { q: 'Le coefficient binomial $\\binom{5}{2}$ vaut :', options: ['$20$', '$10$', '$25$', '$5$'], answer: 1, correction: 'On applique la formule du coefficient binomial : $\\binom{5}{2} = \\dfrac{5!}{2! \\times 3!} = \\dfrac{5 \\times 4}{2 \\times 1} = 10$.<br/><br/>Cela représente le nombre de façons de choisir $2$ éléments parmi $5$, sans tenir compte de l\'ordre.' },
      { q: 'Pour $X \\sim \\mathcal{B}(10\\,;\\,0{,}3)$, la probabilité $P(X = 0)$ vaut :', options: ['$0$', '$(0{,}7)^{10} \\approx 0{,}028$', '$(0{,}3)^{10}$', '$1 - 0{,}3 = 0{,}7$'], answer: 1, correction: 'Pour $k = 0$, la formule se simplifie : $P(X = 0) = \\binom{10}{0} \\times (0{,}3)^0 \\times (0{,}7)^{10} = 1 \\times 1 \\times (0{,}7)^{10}$.<br/><br/>$(0{,}7)^{10} \\approx 0{,}028$. Il y a environ $2{,}8\\%$ de chances de n\'avoir <strong>aucun succès</strong> en $10$ essais.' }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-14. Mesure d'avant : 12 tirages pour UNE
         SEULE tâche réelle — « calculer P(X = k) pour une binomiale » —
         habillée de quatre décors (archer, vaccin, machine, basket). Le décor
         fabriquait quatre moules là où l'élève ne rencontrait qu'un exercice.

         Sept tâches distinctes désormais, couvrant ce que le chapitre demande
         réellement :
           t1 P(X = k), la tâche d'origine, conservée ;
           t2 espérance, dont le calcul est trivial mais l'interprétation non ;
           t3 variance et écart-type ;
           t4 P(X >= 1) par l'événement contraire, le geste le plus utile ;
           t5 loi d'une variable aléatoire quelconque, hors binomiale, qui
              manquait entièrement alors que le chapitre s'appelle « variables
              aléatoires ET loi binomiale » ;
           t6 reconnaître si une situation relève ou non de la binomiale, ce
              qui est un attendu explicite du programme ;
           t7 P(X <= k) par somme, la lecture cumulative. */
      generate() {
        const tache = pick(['pk', 'esperance', 'variance', 'aumoins', 'loiSimple', 'reconnaitre', 'auplus']);

        // Coefficient binomial, en entiers : la boucle flottante d'origine
        // pouvait rendre 119,99999 pour C(10,3) sur certains n.
        const binom = (n, k) => {
          let r = 1;
          for (let i = 0; i < k; i++) r = r * (n - i) / (i + 1);
          return Math.round(r);
        };

        const DECORS = (n, p) => pick([
          { intro: `Un archer touche la cible avec une probabilité de $${fr(p)}$ à chaque tir. Il effectue $${n}$ tirs indépendants.`, v: 'le nombre de tirs réussis' },
          { intro: `Un vaccin a une efficacité de $${fr(p * 100)}\\%$. On vaccine $${n}$ patients.`, v: 'le nombre de patients protégés' },
          { intro: `Une machine produit $${fr(p * 100)}\\%$ de pièces défectueuses. On prélève $${n}$ pièces au hasard.`, v: 'le nombre de pièces défectueuses' },
          { intro: `Un joueur de basket réussit $${fr(p * 100)}\\%$ de ses lancers francs. Il tire $${n}$ lancers.`, v: 'le nombre de lancers réussis' }
        ]);

        if (tache === 'pk') {
          const n = rand(5, 10), p = pick([0.2, 0.25, 0.5]), k = rand(1, 3);
          const c = binom(n, k);
          const proba = parseFloat((c * Math.pow(p, k) * Math.pow(1 - p, n - k)).toFixed(4));
          const ctx = DECORS(n, p);
          return {
            statement: `${ctx.intro}<br/><br/>Soit $X$ ${ctx.v}.<br/><br/>Identifier la loi de $X$, puis calculer $P(X = ${k})$.<br/><br/>Arrondir à $0{,}001$.`,
            answer: proba, tolerance: 0.005, unit: '',
            hint: `$X$ suit la loi $\\mathcal{B}(${n}\\,;\\,${fr(p)})$, et $P(X = ${k}) = \\binom{${n}}{${k}} \\times ${fr(p)}^{${k}} \\times ${fr(1 - p)}^{${n - k}}$.`,
            solution: [
              `Il s'agit de $${n}$ épreuves indépendantes de même probabilité de succès, donc $X$ suit la loi binomiale $\\mathcal{B}(${n}\\,;\\,${fr(p)})$.`,
              `Le coefficient binomial vaut $\\binom{${n}}{${k}} = ${c}$, c'est-à-dire le nombre de façons de placer les $${k}$ succès parmi les $${n}$ essais.`,
              `On obtient $P(X = ${k}) = ${c} \\times ${fr(p)}^{${k}} \\times ${fr(1 - p)}^{${n - k}} \\approx ${fr(proba)}$.`
            ]
          };
        }

        if (tache === 'esperance') {
          /* n borné à 25 : au-delà, les décors deviennent invraisemblables
             (« il tire 31 lancers francs »), ce que la mesure du tirage réel a
             montré et la relecture non. */
          const n = rand(10, 25), p = pick([0.1, 0.2, 0.25, 0.4, 0.5]);
          const e = parseFloat((n * p).toFixed(4));
          const ctx = DECORS(n, p);
          return {
            statement: `${ctx.intro}<br/><br/>Soit $X$ ${ctx.v}.<br/><br/>Calculer l'espérance $E(X)$, puis dire ce qu'elle représente concrètement.<br/><br/>Donner la valeur de $E(X)$.`,
            answer: e, tolerance: 0.005, unit: '',
            hint: `Pour une loi binomiale, l'espérance se calcule très simplement : c'est le produit du nombre d'essais par la probabilité de succès.`,
            solution: [
              `Pour une loi binomiale $\\mathcal{B}(n\\,;\\,p)$, l'espérance vaut $E(X) = np$.`,
              `Ici $E(X) = ${n} \\times ${fr(p)} = ${fr(e)}$.`,
              `Concrètement : en répétant un grand nombre de fois cette expérience de $${n}$ essais, on obtiendrait en moyenne $${fr(e)}$ succès. L'espérance n'est pas la valeur la plus probable, et elle n'a pas besoin d'être un nombre entier.`
            ]
          };
        }

        if (tache === 'variance') {
          const n = rand(8, 30), p = pick([0.2, 0.25, 0.5, 0.6]);
          const v = parseFloat((n * p * (1 - p)).toFixed(4));
          const sigma = parseFloat(Math.sqrt(v).toFixed(4));
          return {
            statement: `Soit $X$ une variable aléatoire suivant la loi $\\mathcal{B}(${n}\\,;\\,${fr(p)})$.<br/><br/>Calculer la variance $V(X)$, puis l'écart-type $\\sigma$.<br/><br/>Donner la valeur de $\\sigma$, arrondie à $0{,}001$.`,
            answer: sigma, tolerance: 0.005, unit: '',
            hint: `La variance d'une binomiale vaut $np(1-p)$. L'écart-type en est la racine carrée — c'est lui qui s'exprime dans la même unité que $X$.`,
            solution: [
              `La variance d'une loi binomiale vaut $V(X) = np(1-p)$, soit ici $${n} \\times ${fr(p)} \\times ${fr(parseFloat((1 - p).toFixed(4)))} = ${fr(v)}$.`,
              `L'écart-type en est la racine carrée : $\\sigma = \\sqrt{${fr(v)}} \\approx ${fr(sigma)}$.`,
              `C'est l'écart-type, et non la variance, qui se compare directement à $E(X)$ : il s'exprime dans la même unité, alors que la variance est un carré.`
            ]
          };
        }

        if (tache === 'aumoins') {
          /* Le geste le plus utile du chapitre, et le plus absent de la banque
             d'origine : passer par l'événement contraire plutôt que de sommer
             n termes. */
          const n = rand(4, 8), p = pick([0.1, 0.2, 0.25, 0.3]);
          const res = parseFloat((1 - Math.pow(1 - p, n)).toFixed(4));
          const ctx = DECORS(n, p);
          return {
            statement: `${ctx.intro}<br/><br/>Soit $X$ ${ctx.v}.<br/><br/>Calculer $P(X \\geqslant 1)$, la probabilité d'obtenir <strong>au moins un</strong> succès.<br/><br/>Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: '',
            hint: `Sommer $P(X=1)$, $P(X=2)$... jusqu'à $P(X=${n})$ serait très long. L'événement contraire de « au moins un » est « aucun », et celui-là ne demande qu'un seul calcul.`,
            solution: [
              `L'événement contraire de « au moins un succès » est « aucun succès », c'est-à-dire $X = 0$ : il est bien plus rapide à calculer que la somme des $${n}$ autres cas.`,
              `Or $P(X = 0) = ${fr(parseFloat((1 - p).toFixed(4)))}^{${n}} \\approx ${fr(parseFloat(Math.pow(1 - p, n).toFixed(4)))}$, puisque les $${n}$ essais doivent tous échouer.`,
              `On en déduit $P(X \\geqslant 1) = 1 - ${fr(parseFloat(Math.pow(1 - p, n).toFixed(4)))} \\approx ${fr(res)}$.`
            ]
          };
        }

        if (tache === 'loiSimple') {
          /* Une variable aléatoire QUELCONQUE, définie par sa loi : le chapitre
             s'appelle « variables aléatoires et loi binomiale », mais la banque
             d'origine ne traitait que la binomiale. L'espérance générale,
             somme des x_i p_i, n'y était jamais calculée. */
          const g1 = rand(2, 5), g2 = rand(8, 15), perte = rand(1, 4);
          const p1 = pick([0.1, 0.2]), p2 = pick([0.05, 0.1]);
          const p0 = parseFloat((1 - p1 - p2).toFixed(4));
          const e = parseFloat((g1 * p1 + g2 * p2 - perte * p0).toFixed(4));
          return {
            statement: `À une kermesse, un jeu coûte quelques euros. Le gain algébrique $X$ du joueur, en euros, prend trois valeurs :<br/><br/>$X = ${g1}$ avec la probabilité $${fr(p1)}$ ;<br/>$X = ${g2}$ avec la probabilité $${fr(p2)}$ ;<br/>$X = -${perte}$ avec la probabilité $${fr(p0)}$.<br/><br/>Calculer l'espérance de gain $E(X)$.<br/><br/>Arrondir à $0{,}001$.`,
            answer: e, tolerance: 0.005, unit: '',
            hint: `Ici $X$ ne suit pas une loi binomiale : il faut revenir à la définition générale de l'espérance, qui multiplie chaque valeur par sa probabilité, puis additionne le tout.`,
            solution: [
              `Cette variable aléatoire ne suit pas une loi binomiale : on revient donc à la définition générale, $E(X) = \\sum x_i \\times P(X = x_i)$.`,
              `On calcule terme à terme : $E(X) = ${g1} \\times ${fr(p1)} + ${g2} \\times ${fr(p2)} + (-${perte}) \\times ${fr(p0)}$.`,
              `On obtient $E(X) \\approx ${fr(e)}$ euros. ${e < 0 ? 'L\'espérance est <strong>négative</strong> : sur un grand nombre de parties, le joueur perd en moyenne, ce qui est la règle pour tout jeu payant.' : 'L\'espérance est positive, ce qui serait très inhabituel pour un jeu payant : vérifie que les probabilités somment bien à $1$.'}`
            ]
          };
        }

        if (tache === 'reconnaitre') {
          /* Reconnaître si une situation relève de la binomiale est un attendu
             explicite du programme, et la banque d'origine ne le travaillait
             jamais : tous ses énoncés annonçaient la loi. */
          const binomiale = pick([true, false]);
          const n = rand(5, 12);
          const cas = binomiale
            ? pick([
                { txt: `On lance $${n}$ fois un dé équilibré et on compte le nombre de $6$ obtenus.`, pourquoi: `les $${n}$ lancers sont indépendants et la probabilité d'obtenir un $6$ reste $\\dfrac{1}{6}$ à chaque lancer` },
                { txt: `On prélève $${n}$ pièces dans une production très nombreuse, en notant celles qui sont défectueuses.`, pourquoi: `la production étant très nombreuse, retirer une pièce ne modifie pas sensiblement la proportion de défectueuses : les prélèvements sont assimilables à des tirages indépendants de même probabilité` }
              ])
            : pick([
                { txt: `Une urne contient $10$ boules. On en tire $${Math.min(n, 5)}$ <strong>sans remise</strong> et on compte les boules rouges.`, pourquoi: `les tirages ne sont pas indépendants : chaque boule retirée modifie la composition de l'urne, donc la probabilité de succès change d'un tirage à l'autre` },
                { txt: `Un joueur tire au but jusqu'à ce qu'il marque, et on compte le nombre de tirs effectués.`, pourquoi: `le nombre d'épreuves n'est pas fixé à l'avance : il dépend du résultat, alors qu'une loi binomiale suppose un nombre d'essais connu` }
              ]);
          return {
            statement: `${cas.txt}<br/><br/>La variable aléatoire décrite suit-elle une loi binomiale ?<br/><br/>Répondre par $1$ si oui, par $0$ si non.`,
            answer: binomiale ? 1 : 0, tolerance: 0.001, unit: '',
            hint: `Une loi binomiale demande trois choses : un nombre d'épreuves fixé à l'avance, des épreuves indépendantes, et une même probabilité de succès à chaque épreuve. Vérifie les trois.`,
            solution: [
              `Une loi binomiale suppose trois conditions : un nombre d'épreuves fixé à l'avance, des épreuves indépendantes, et une probabilité de succès identique à chaque épreuve.`,
              `Ici, ${cas.pourquoi}.`,
              binomiale
                ? `Les trois conditions sont réunies : la variable suit bien une loi binomiale.`
                : `Une des conditions n'est pas remplie : la variable ne suit <strong>pas</strong> une loi binomiale, même si la situation lui ressemble.`
            ]
          };
        }

        // tache === 'auplus' : lecture cumulative, par somme de deux ou trois termes.
        const n = rand(4, 7), p = pick([0.2, 0.25, 0.5]), k = rand(1, 2);
        let cum = 0;
        for (let i = 0; i <= k; i++) cum += binom(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i);
        const res = parseFloat(cum.toFixed(4));
        const termes = [];
        for (let i = 0; i <= k; i++) {
          termes.push(`$P(X = ${i}) = ${binom(n, i)} \\times ${fr(p)}^{${i}} \\times ${fr(parseFloat((1 - p).toFixed(4)))}^{${n - i}} \\approx ${fr(parseFloat((binom(n, i) * Math.pow(p, i) * Math.pow(1 - p, n - i)).toFixed(4)))}$`);
        }
        return {
          statement: `Soit $X$ une variable aléatoire suivant la loi $\\mathcal{B}(${n}\\,;\\,${fr(p)})$.<br/><br/>Calculer $P(X \\leqslant ${k})$, la probabilité d'obtenir <strong>au plus</strong> $${k}$ succès.<br/><br/>Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.005, unit: '',
          hint: `« Au plus $${k}$ » regroupe plusieurs cas : $X = 0$, $X = 1$${k >= 2 ? `, jusqu'à $X = ${k}$` : ''}. Calcule chacun, puis additionne — ces cas ne peuvent pas se produire ensemble.`,
          solution: [
            `L'événement « au plus $${k}$ succès » regroupe les cas $X = 0$ jusqu'à $X = ${k}$, qui sont incompatibles deux à deux : leurs probabilités s'additionnent.`,
            termes.join('<br/><br/>'),
            `En additionnant ces ${k + 1} termes, on obtient $P(X \\leqslant ${k}) \\approx ${fr(res)}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un QCM comporte $10$ questions, chacune avec $4$ propositions. Un élève répond au hasard à toutes les questions.',
      tasks: [
        'Quelle loi suit le nombre de bonnes réponses $X$ ? Préciser les paramètres.',
        'Calculer l\'espérance et l\'écart-type.',
        'Calculer la probabilité d\'avoir exactement $2$ bonnes réponses.'
      ],
      solutions: [
        '$X\\sim\\mathcal{B}(10;0{,}25)$ : $10$ questions indépendantes, $p=1/4$.',
        '$E(X)=10\\times0{,}25=2{,}5$ ; $V(X)=10\\times0{,}25\\times0{,}75=1{,}875$ ; $\\sigma\\approx1{,}37$.',
        '$P(X=2)=\\binom{10}{2}(0{,}25)^2(0{,}75)^8=45\\times0{,}0625\\times0{,}1001\\approx0{,}282$.'
      ],
      finalAnswer: '$X\\sim\\mathcal{B}(10;0{,}25)$, $E(X)=2{,}5$, $P(X=2)\\approx28{,}2\\%$.'
    },

    evaluation: {
      title: 'Évaluation — Variables aléatoires et loi binomiale',
      duration: '35 min',
      questions: [
        {
          statement: 'Soit $X$ une variable aléatoire suivant la loi $\\mathcal{B}(8\\,;\\,0{,}3)$. Calculer l\'espérance $E(X)$.',
          type: 'numeric',
          answer: 2.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Pour une loi binomiale, l\'espérance est $E(X) = np$.<br/><br/>$E(X) = 8 \\times 0{,}3 = 2{,}4$. En moyenne, on attend $2{,}4$ succès sur $8$ essais.'
        },
        /* QUESTION 2 RÉÉCRITE le 2026-09-14. Elle demandait la variance, c'est-à-dire
           une seconde application de formule après l'espérance de la question 1 :
           quatre des cinq questions de ce devoir relevaient alors de « calculer »,
           et la compétence « raisonner » n'était évaluée nulle part.

           La nouvelle question porte sur les trois conditions du schéma de
           Bernoulli, qui est un attendu explicite du programme. Elle ne se
           résout par aucune formule : l'élève doit confronter une situation à
           trois critères et trancher. L'étiquette suit l'énoncé. */
        {
          statement: 'Une urne contient $4$ boules rouges et $6$ boules noires. On tire successivement $3$ boules <strong>sans les remettre</strong> dans l\'urne, et on note $X$ le nombre de boules rouges obtenues.<br/><br/>La variable $X$ suit-elle une loi binomiale ?',
          type: 'multiple-choice',
          options: [
            'Non, car la probabilité de tirer une rouge change à chaque tirage',
            'Oui, avec $n = 3$ et $p = 0{,}4$',
            'Non, car le nombre de tirages n\'est pas fixé à l\'avance',
            'Oui, car il n\'y a que deux issues possibles à chaque tirage'
          ],
          answer: 0,
          points: 2,
          correction: 'Une loi binomiale suppose <strong>trois</strong> conditions : un nombre d\'épreuves fixé à l\'avance, des épreuves indépendantes, et une même probabilité de succès à chaque épreuve.<br/><br/>Ici les deux premières semblent réunies — $3$ tirages annoncés, deux issues par tirage — et c\'est ce qui rend le piège efficace.<br/><br/>Mais le tirage se fait <strong>sans remise</strong> : au premier tirage la probabilité d\'obtenir une rouge vaut $\\dfrac{4}{10}$, alors qu\'au deuxième elle vaut $\\dfrac{3}{9}$ ou $\\dfrac{4}{9}$ selon ce qui a été tiré. La troisième condition tombe, et $X$ ne suit donc pas une loi binomiale.<br/><br/>À retenir : c\'est presque toujours cette troisième condition qui fait échouer le modèle, et c\'est la seule que l\'énoncé ne donne jamais explicitement.'
        },
        {
          statement: 'On lance un dé équilibré $5$ fois. Soit $X$ le nombre de $6$ obtenus. Quelle loi suit $X$ ?',
          type: 'multiple-choice',
          options: ['$\\mathcal{B}(5\\,;\\,1/6)$', '$\\mathcal{B}(6\\,;\\,1/5)$', '$\\mathcal{B}(5\\,;\\,1/2)$', '$\\mathcal{B}(6\\,;\\,5)$'],
          answer: 0,
          points: 2,
          correction: 'On identifie les paramètres : $n = 5$ lancers indépendants, chacun avec une probabilité de succès $p = 1/6$.<br/><br/>Donc $X \\sim \\mathcal{B}(5\\,;\\,1/6)$. Les conditions de la loi binomiale sont bien réunies : épreuves indépendantes et même probabilité.'
        },
        {
          statement: 'Pour $X \\sim \\mathcal{B}(3\\,;\\,0{,}4)$, calculer $P(X = 2)$ (arrondir à $0{,}001$).',
          type: 'numeric',
          answer: 0.288,
          tolerance: 0.001,
          unit: '',
          points: 2,
          correction: 'On applique la formule binomiale : $P(X=2) = \\binom{3}{2} (0{,}4)^2 (0{,}6)^1$.<br/><br/>$P(X=2) = 3 \\times 0{,}16 \\times 0{,}6 = 0{,}288$. Il y a environ $28{,}8\\%$ de chances d\'obtenir exactement $2$ succès.'
        },
        /* QUESTION 5 RÉÉCRITE le 2026-09-14, pour deux raisons.

           D'abord le fond : elle demandait la valeur de $\binom{7}{3}$ et sa
           correction la calculait par la formule factorielle, qui n'est PAS
           exigible en première — le programme demande de lire un coefficient
           binomial dans le triangle de Pascal ou à la calculatrice, pas de le
           calculer ainsi. Le devoir noté exigeait donc une notion hors
           programme.

           Ensuite l'équilibre : c'était la quatrième question de « calculer »
           sur cinq. La nouvelle question demande d'expliquer un résultat en
           langue naturelle, ce que ce devoir ne demandait nulle part, et elle
           porte donc « communiquer ». Elle reste corrigeable objectivement,
           puisque l'explication attendue est une des quatre propositions. */
        {
          statement: 'Un élève calcule $E(X) = 2{,}4$ pour le nombre de tirs réussis d\'un archer sur $8$ tirs. Il écrit alors : « ce n\'est pas possible, on ne peut pas réussir $2{,}4$ tirs », et corrige sa réponse en $2$.<br/><br/>Quelle explication lui donnerais-tu ?',
          type: 'multiple-choice',
          options: [
            'Son calcul est juste : l\'espérance est une moyenne sur un grand nombre de répétitions, elle n\'a pas à être un nombre entier',
            'Il a raison de corriger : une espérance doit toujours être arrondie au résultat possible le plus proche',
            'Son calcul est faux : pour une loi binomiale, $E(X)$ vaut toujours un nombre entier',
            'Il faut plutôt arrondir à $3$, car on arrondit toujours une espérance vers le haut'
          ],
          answer: 0,
          points: 2,
          correction: 'Le calcul $E(X) = 8 \\times 0{,}3 = 2{,}4$ est parfaitement juste, et il ne faut surtout pas l\'arrondir.<br/><br/>L\'espérance n\'est pas une issue de l\'expérience : c\'est la <strong>moyenne</strong> des résultats qu\'on obtiendrait en répétant un très grand nombre de fois la série des $8$ tirs. Cette moyenne n\'a aucune raison d\'être entière, exactement comme la moyenne « $2{,}3$ enfants par famille » — que personne ne songe à arrondir, alors qu\'aucune famille n\'a $2{,}3$ enfants.<br/><br/>Le réflexe de l\'élève vient d\'une confusion très répandue entre l\'espérance et la valeur la plus probable, qui sont deux nombres différents et souvent distincts.'
        }
      ]
    }
  });
