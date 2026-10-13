/* =========================================================
   Spark Learning – data/lycee-1re/1re-probas-conditionnelles.js
   Extrait de lycee-1re.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '1re-probas-conditionnelles',
    level: 2, subject: 'maths',
    icon: '🎯',
    title: 'Probabilités conditionnelles',
    subtitle: 'Probabilité sachant, indépendance, arbre',
    keywords: ['Probabilité conditionnelle', 'Indépendance', 'Arbre', 'Bayes'],
    physics: false,
    cours: {
      /* « DÉCOUVRIR » RÉÉCRIT le 2026-09-14. L'ancienne version ouvrait sur la
         définition et sa formule, c'est-à-dire sur le symbole avant la
         question. Le test du cahier des charges (section 10) : si on peut
         répondre à la question d'ouverture sans la notion du chapitre, la
         question est mal choisie.

         La question retenue est celle du test médical, et elle est choisie
         parce qu'on ne peut PAS y répondre sans la notion : l'intuition donne
         ici une réponse fausse, et pas une réponse approximative. C'est une
         difficulté réelle — l'erreur du procureur a envoyé des gens en prison —
         et non une mise en situation décorative. L'élève est invité à parier
         AVANT de savoir, ce qui rend le résultat mémorable. */
      intro: 'Un test dépiste une maladie qui touche une personne sur cent. Quand quelqu\'un est malade, le test le détecte $95$ fois sur $100$ ; quand quelqu\'un est sain, il se déclare positif à tort $5$ fois sur $100$.<br/><br/>Ton test est positif. <strong>Quelle est la probabilité que tu sois réellement malade ?</strong><br/><br/>Écris ton estimation quelque part avant de lire la suite. La très grande majorité des gens — y compris des médecins, l\'expérience a été faite — répondent « environ $95\\%$ ».<br/><br/>La bonne réponse est d\'environ $16\\%$. Sur $1000$ personnes testées, $10$ sont malades et environ $9$ d\'entre elles auront un test positif ; mais parmi les $990$ personnes saines, environ $50$ seront positives à tort. Sur la cinquantaine de tests positifs, moins d\'un sur six correspond donc à un vrai malade.<br/><br/>Ce n\'est pas une subtilité de calcul : c\'est que les deux questions « quelle est la probabilité que le test soit positif <strong>sachant que</strong> je suis malade ? » et « quelle est la probabilité que je sois malade <strong>sachant que</strong> le test est positif ? » n\'ont aucune raison d\'avoir la même réponse. Confondre les deux porte un nom, l\'<strong>erreur du procureur</strong>, et elle a fait condamner des innocents.<br/><br/>Tout ce chapitre sert à ne plus la commettre. L\'outil s\'appelle la <strong>probabilité conditionnelle</strong>, et il tient en une idée : on ne calcule plus sur la population entière, mais seulement sur ceux qui vérifient la condition.',
      definitions: [
        { term: 'Probabilité conditionnelle', def: '$P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$ : la probabilité de $A$ <strong>sachant que</strong> $B$ est réalisé. On restreint l\'univers à $B$.' },
        { term: 'Indépendance', def: 'Deux événements $A$ et $B$ sont <strong>indépendants</strong> si $P(A \\cap B) = P(A) \\times P(B)$, ce qui équivaut à $P(A|B) = P(A)$ : savoir que $B$ s\'est produit ne change rien.' },
        { term: 'Formule des probabilités totales', def: 'Si $B$ et $\\bar{B}$ forment une partition : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$. C\'est la somme des "chemins" menant à $A$.' },
        { term: 'Formule de Bayes', def: '$P(B|A) = \\dfrac{P(A|B) \\times P(B)}{P(A)}$. Elle permet d\'"inverser" une probabilité conditionnelle, typiquement en diagnostic médical.' }
      ],
      method: {
        title: 'Utiliser un arbre de probabilité',
        steps: [
          '<strong>Arbre de probabilité</strong> : représenter les événements en branches, les probabilités sur chaque branche.',
          '<strong>Multiplication des branches</strong> : $P(A\\cap B) = P(B)\\times P(A|B)$.',
          '<strong>Normalisation</strong> : la somme des probabilités à chaque nœud est $1$.',
          '<strong>Somme des chemins</strong> : additionner les branches favorables pour obtenir $P(A)$.'
        ]
      },
      example: {
        statement: 'Dans un lycée, $40\\%$ des élèves pratiquent un sport ($S$). Parmi les sportifs, $70\\%$ ont la moyenne en maths ($M$). Parmi les non-sportifs, $50\\%$ ont la moyenne. Calculer $P(M)$ et $P(S|M)$.',
        steps: [
          'Données : $P(S) = 0{,}4$, $P(\\bar{S}) = 0{,}6$, $P(M|S) = 0{,}7$, $P(M|\\bar{S}) = 0{,}5$.',
          'Probabilités totales : $P(M) = P(M|S) \\times P(S) + P(M|\\bar{S}) \\times P(\\bar{S}) = 0{,}7 \\times 0{,}4 + 0{,}5 \\times 0{,}6 = 0{,}28 + 0{,}30 = 0{,}58$.',
          'Bayes : $P(S|M) = \\dfrac{P(M|S) \\times P(S)}{P(M)} = \\dfrac{0{,}28}{0{,}58} \\approx 0{,}483$.'
        ],
        answer: '$P(M) = 0{,}58$ et $P(S|M) \\approx 0{,}483$. Un élève qui a la moyenne a environ $48\\%$ de chances d\'être sportif.'
      },
      formulas: [
        '$P(A|B) = \\dfrac{P(A\\cap B)}{P(B)}$ (si $P(B)>0$)',
        '$P(A\\cap B) = P(B)\\times P(A|B)$',
        '$A$ et $B$ indépendants $\\Leftrightarrow P(A\\cap B)=P(A)\\times P(B)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Arbre pondéré à deux niveaux',
        title: 'Arbre de probabilité — sport et moyenne en maths',
        description: 'Sur l\'exemple du cours : $40\\%$ des élèves pratiquent un sport ($S$). Parmi les sportifs, $70\\%$ ont la moyenne ($M$) ; parmi les non-sportifs, $50\\%$ ont la moyenne. Le chemin en couleur (racine $\\to S \\to M$) est celui qui donne $P(S\\cap M)$.',
        svg: `
          <svg viewBox="0 0 720 400" role="img" aria-labelledby="probas-arbre-title probas-arbre-desc">
            <title id="probas-arbre-title">Arbre pondere a deux niveaux, exemple sport et moyenne en maths</title>
            <desc id="probas-arbre-desc">Arbre de probabilite a deux niveaux. Niveau 1 : depuis la racine, deux branches, S (sport) avec probabilite 0,4 et non S avec probabilite 0,6. Niveau 2 : sous S, deux branches, M (moyenne) avec probabilite 0,7 et non M avec probabilite 0,3 ; sous non S, deux branches, M avec probabilite 0,5 et non M avec probabilite 0,5. Le chemin racine vers S vers M est mis en evidence en trait plein colore et aboutit a l'intersection S inter M dont la probabilite vaut 0,4 fois 0,7 soit 0,28. Les trois autres chemins sont en pointilles : S inter non M egale 0,12, non S inter M egale 0,30, non S inter non M egale 0,30. La somme des quatre chemins vaut 1.</desc>

            <!-- repères de colonnes -->
            <line class="grid-line" x1="250" y1="10" x2="250" y2="390"></line>
            <line class="grid-line" x1="470" y1="10" x2="470" y2="390"></line>
            <text class="tick-label" x="250" y="18" text-anchor="middle">Niveau 1 — sport (S)</text>
            <text class="tick-label" x="470" y="18" text-anchor="middle">Niveau 2 — moyenne (M) sachant S</text>

            <!-- branches niveau 1 -->
            <line class="curve-main" x1="60" y1="200" x2="250" y2="90"></line>
            <line class="guide-line" x1="60" y1="200" x2="250" y2="310"></line>

            <!-- branches niveau 2 -->
            <line class="curve-main" x1="250" y1="90" x2="470" y2="35"></line>
            <line class="guide-line" x1="250" y1="90" x2="470" y2="145"></line>
            <line class="guide-line" x1="250" y1="310" x2="470" y2="255"></line>
            <line class="guide-line" x1="250" y1="310" x2="470" y2="365"></line>

            <!-- probabilites sur les branches (valeur seule, l'evenement se lit au noeud d'arrivee) -->
            <text class="annotation-label" x="136" y="132" text-anchor="middle">0,4</text>
            <text class="tick-label" x="136" y="266" text-anchor="middle">0,6</text>
            <text class="annotation-label" x="338" y="50" text-anchor="middle">0,7</text>
            <text class="tick-label" x="338" y="130" text-anchor="middle">0,3</text>
            <text class="tick-label" x="338" y="270" text-anchor="middle">0,5</text>
            <text class="tick-label" x="338" y="350" text-anchor="middle">0,5</text>

            <!-- noeuds -->
            <circle class="plot-point" cx="60" cy="200" r="7"></circle>
            <text class="annotation-label" x="45" y="195" text-anchor="end">Ω</text>

            <circle class="plot-point" cx="250" cy="90" r="7"></circle>
            <text class="annotation-label" x="235" y="80" text-anchor="end">S</text>

            <circle class="plot-point-alt" cx="250" cy="310" r="6"></circle>
            <text class="tick-label" x="235" y="330" text-anchor="end">non S</text>

            <circle class="plot-point" cx="470" cy="35" r="8"></circle>
            <text class="annotation-label" x="484" y="30" text-anchor="start">M</text>

            <circle class="plot-point-alt" cx="470" cy="145" r="6"></circle>
            <text class="tick-label" x="484" y="150" text-anchor="start">non M</text>

            <circle class="plot-point-alt" cx="470" cy="255" r="6"></circle>
            <text class="tick-label" x="484" y="260" text-anchor="start">M</text>

            <circle class="plot-point-alt" cx="470" cy="365" r="6"></circle>
            <text class="tick-label" x="484" y="370" text-anchor="start">non M</text>

            <!-- chemins et intersections -->
            <text class="annotation-label" x="545" y="30" text-anchor="start" style="fill:var(--diagram-accent)">S∩M = 0,28</text>
            <text class="tick-label" x="545" y="150" text-anchor="start">S∩(non M) = 0,12</text>
            <text class="tick-label" x="545" y="260" text-anchor="start">(non S)∩M = 0,30</text>
            <text class="tick-label" x="545" y="370" text-anchor="start">(non S)∩(non M) = 0,30</text>
          </svg>
        `,
        notes: [
          'Niveau 1 : $P(S) = 0{,}4$ et $P(\\bar{S}) = 0{,}6$ — la somme des deux branches vaut bien $1$.',
          'Niveau 2 sous $S$ : $P(M|S) = 0{,}7$ et $P(\\bar{M}|S) = 0{,}3$ (somme $=1$). Sous $\\bar{S}$ : $P(M|\\bar{S}) = 0{,}5$ et $P(\\bar{M}|\\bar{S}) = 0{,}5$ (somme $=1$).',
          'Chemin mis en évidence : $P(S\\cap M) = P(S)\\times P(M|S) = 0{,}4 \\times 0{,}7 = 0{,}28$ — la multiplication le long des branches.',
          'Les quatre chemins somment à $1$ : $0{,}28+0{,}12+0{,}30+0{,}30=1$, ce qui redonne $P(M)=0{,}28+0{,}30=0{,}58$, retrouvé dans l\'exemple du cours.'
        ],
        reading: 'Multiplie les probabilités le long d\'un chemin (racine → branche 1 → branche 2) pour obtenir la probabilité d\'une intersection ; le chemin en trait plein coloré, racine → $S$ → $M$, donne $P(S\\cap M) = 0{,}28$.',
        caption: 'Arbre pondéré à deux niveaux de l\'exemple du cours : $P(S)=0{,}4$, $P(M|S)=0{,}7$, $P(M|\\bar{S})=0{,}5$. Chemin $S\\cap M$ mis en évidence, avec $P(S\\cap M)=0{,}28$.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-14.

         C'est le chapitre où l'intuition trompe le plus, et où les figures
         valent des paragraphes. Les trois malentendus retenus :
           1. l'arbre et le tableau croisé disent la MÊME chose, vue autrement ;
           2. $P_A(B)$ n'est pas $P_B(A)$ — même numérateur, dénominateurs
              différents, et c'est le dénominateur qui change tout ;
           3. indépendant ne veut pas dire incompatible, et cela se voit sur
              une découpe d'aire.

         TOUTES les valeurs sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-1re.test.js : les probabilités somment à
         $1$ à chaque nœud de l'arbre, et le tableau croisé redonne exactement
         les mêmes valeurs que l'arbre.

         Le calcul a rattrapé un défaut pendant la rédaction : l'effectif de la
         case $S \cap M$, obtenu par $0{,}4 \times 0{,}7 \times 1000$ en
         flottant, valait $279{,}99999999999994$ et non $280$. Les effectifs du
         tableau sont donc posés en ENTIERS, et c'est le test qui vérifie que
         l'arbre les redonne. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Deux façons de dire la même chose',
          title: 'Le tableau croisé redonne exactement l\'arbre',
          description: 'L\'arbre et le tableau croisé ne sont pas deux notions concurrentes : ce sont deux écritures du <strong>même</strong> énoncé. Le tableau ci-dessous est celui de l\'exemple du cours, ramené à $1000$ élèves pour que tout tombe sur des effectifs entiers.<br/><br/>Chaque case vient d\'un chemin de l\'arbre, et chaque total de ligne vient d\'un nœud.',
          svg: `
            <svg viewBox="0 0 430 250" role="img" aria-labelledby="prob-tableau-title prob-tableau-desc">
              <title id="prob-tableau-title">Tableau croise des effectifs sur mille eleves</title>
              <desc id="prob-tableau-desc">Un tableau a deux entrees porte en colonnes les eleves qui ont la moyenne et ceux qui ne l'ont pas, et en lignes les sportifs et les non sportifs. La case des sportifs ayant la moyenne contient 280 eleves, celle des sportifs sans la moyenne 120, celle des non sportifs avec la moyenne 300, celle des non sportifs sans la moyenne 300. Le total de la ligne des sportifs vaut 400, celui des non sportifs 600. Le total de la colonne moyenne vaut 580, celui de la colonne sans moyenne 420. Le total general vaut mille.</desc>

              <line class="frame-line" x1="92" y1="58" x2="350" y2="58"></line>
              <line class="frame-line" x1="92" y1="104" x2="350" y2="104"></line>
              <line class="frame-line" x1="92" y1="150" x2="350" y2="150"></line>
              <line class="frame-line" x1="92" y1="196" x2="350" y2="196"></line>
              <line class="frame-line" x1="92" y1="58" x2="92" y2="196"></line>
              <line class="frame-line" x1="178" y1="58" x2="178" y2="196"></line>
              <line class="frame-line" x1="264" y1="58" x2="264" y2="196"></line>
              <line class="frame-line" x1="350" y1="58" x2="350" y2="196"></line>

              <text class="annotation-label" x="135" y="48" text-anchor="middle">moyenne</text>
              <text class="annotation-label" x="221" y="48" text-anchor="middle">pas moyenne</text>
              <text class="annotation-label" x="307" y="48" text-anchor="middle">total</text>
              <text class="annotation-label" x="84" y="86" text-anchor="end">sportifs</text>
              <text class="annotation-label" x="84" y="132" text-anchor="end">non sportifs</text>
              <text class="annotation-label" x="84" y="178" text-anchor="end">total</text>

              <text class="annotation-label" x="135" y="86" text-anchor="middle">280</text>
              <text class="tick-label" x="221" y="86" text-anchor="middle">120</text>
              <text class="tick-label" x="307" y="86" text-anchor="middle">400</text>
              <text class="tick-label" x="135" y="132" text-anchor="middle">300</text>
              <text class="tick-label" x="221" y="132" text-anchor="middle">300</text>
              <text class="tick-label" x="307" y="132" text-anchor="middle">600</text>
              <text class="tick-label" x="135" y="178" text-anchor="middle">580</text>
              <text class="tick-label" x="221" y="178" text-anchor="middle">420</text>
              <text class="annotation-label" x="307" y="178" text-anchor="middle">1000</text>

              <text class="label-soft" x="221" y="228" text-anchor="middle">meme enonce que l arbre, ecrit en effectifs</text>
            </svg>
          `,
          notes: [
            'La case $280$ est le chemin $S \\to M$ de l\'arbre : $0{,}4 \\times 0{,}7 \\times 1000 = 280$.',
            'Le total de ligne $400$ est le nœud $S$ : $P(S) = 0{,}4$, soit $400$ élèves sur $1000$.',
            'Le total de colonne $580$ est $P(M) = 0{,}58$, que l\'exemple du cours obtenait par la formule des probabilités totales. On le lit ici sans aucun calcul.',
            'Les quatre cases somment à $1000$, exactement comme les quatre chemins de l\'arbre somment à $1$.'
          ],
          reading: 'Choisis une case du tableau et retrouve le chemin de l\'arbre qui lui correspond : il y en a toujours un, et un seul. Le tableau est plus commode quand on te donne des effectifs, l\'arbre quand on te donne des pourcentages — mais tu peux passer de l\'un à l\'autre quand tu veux, et c\'est souvent le moyen le plus rapide de sortir d\'un blocage.',
          caption: 'Tableau croisé de l\'exemple du cours, ramené à $1000$ élèves : chaque case est un chemin de l\'arbre.'
        },
        {
          theme: 'maths',
          kicker: 'Le malentendu qui coûte le plus cher',
          title: 'Même numérateur, deux dénominateurs',
          description: 'L\'erreur la plus fréquente du chapitre consiste à croire que $P_S(M)$ et $P_M(S)$ sont le même nombre. Les deux barres ci-dessous sont à la <strong>même échelle</strong> et leur portion colorée a la <strong>même longueur</strong> : ce sont les mêmes $280$ élèves.<br/><br/>Ce qui change, c\'est ce à quoi on les rapporte.',
          svg: `
            <svg viewBox="0 0 430 210" role="img" aria-labelledby="prob-deux-title prob-deux-desc">
              <title id="prob-deux-title">Deux barres de references differentes</title>
              <desc id="prob-deux-desc">Deux barres horizontales sont tracees l'une sous l'autre, a la meme echelle. La premiere represente les 400 sportifs ; la seconde represente les 580 eleves ayant la moyenne, elle est donc plus longue. Sur chacune, une portion coloree de longueur identique represente les 280 eleves qui sont a la fois sportifs et ont la moyenne. Sur la premiere barre cette portion occupe sept dixiemes de la longueur, sur la seconde un peu moins de la moitie. La portion est pourtant la meme dans les deux cas : seule la barre de reference a change.</desc>

              <text class="annotation-label" x="66" y="52" text-anchor="end">parmi les sportifs</text>
              <line class="frame-line" x1="74" y1="38" x2="194" y2="38"></line>
              <line class="frame-line" x1="74" y1="64" x2="194" y2="64"></line>
              <line class="frame-line" x1="74" y1="38" x2="74" y2="64"></line>
              <line class="frame-line" x1="194" y1="38" x2="194" y2="64"></line>
              <rect x="74" y="38" width="84" height="26" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)"></rect>
              <line class="curve-main" x1="158" y1="38" x2="158" y2="64"></line>
              <text class="annotation-label" x="116" y="57" text-anchor="middle">280</text>
              <text class="tick-label" x="202" y="57" text-anchor="start">sur 400</text>
              <text class="annotation-label" x="290" y="57" text-anchor="start">soit 0,7</text>

              <text class="annotation-label" x="66" y="122" text-anchor="end">parmi ceux qui ont la moyenne</text>
              <line class="frame-line" x1="74" y1="108" x2="248" y2="108"></line>
              <line class="frame-line" x1="74" y1="134" x2="248" y2="134"></line>
              <line class="frame-line" x1="74" y1="108" x2="74" y2="134"></line>
              <line class="frame-line" x1="248" y1="108" x2="248" y2="134"></line>
              <rect x="74" y="108" width="84" height="26" fill="color-mix(in srgb, var(--diagram-accent) 34%, transparent)"></rect>
              <line class="curve-main" x1="158" y1="108" x2="158" y2="134"></line>
              <text class="annotation-label" x="116" y="127" text-anchor="middle">280</text>
              <text class="tick-label" x="256" y="127" text-anchor="start">sur 580</text>
              <text class="annotation-label" x="330" y="127" text-anchor="start">soit 0,48</text>

              <line class="guide-line" x1="158" y1="64" x2="158" y2="108"></line>
              <text class="label-soft" x="215" y="176" text-anchor="middle">la portion coloree est la meme, la barre de reference non</text>
            </svg>
          `,
          notes: [
            '$P_S(M) = \\dfrac{280}{400} = 0{,}7$ : parmi les sportifs, $7$ sur $10$ ont la moyenne.',
            '$P_M(S) = \\dfrac{280}{580} \\approx 0{,}48$ : parmi ceux qui ont la moyenne, un peu moins de la moitié sont sportifs.',
            'Le numérateur est <strong>le même</strong> dans les deux cas : ce sont les $280$ mêmes élèves, comptés une seule fois.',
            'Seul le dénominateur change, parce que la population à laquelle on se restreint change. Écrire $P_S(M) = P_M(S)$ revient à dire que $400 = 580$.'
          ],
          reading: 'Le trait vertical qui relie les deux barres marque la fin de la portion colorée : elle tombe au même endroit, parce que c\'est le même effectif. Regarde maintenant où s\'arrête chaque barre — c\'est là toute la différence. Quand tu hésites sur un « sachant que », demande-toi toujours : sachant quoi, c\'est-à-dire sur quelle barre je me place.',
          caption: 'Les mêmes $280$ élèves rapportés à deux populations différentes : $P_S(M) = 0{,}7$ mais $P_M(S) \\approx 0{,}48$.'
        },
        {
          theme: 'maths',
          kicker: 'Indépendant n\'est pas incompatible',
          title: 'L\'indépendance se voit sur la découpe',
          description: 'Deux événements sont indépendants quand savoir que l\'un s\'est produit ne change <strong>rien</strong> à la probabilité de l\'autre. Sur un carré d\'aire $1$ découpé en deux bandes, cela se lit immédiatement : la coupure verticale tombe-t-elle au même endroit dans les deux bandes ?<br/><br/>À gauche oui, à droite non.',
          svg: `
            <svg viewBox="0 0 430 220" role="img" aria-labelledby="prob-indep-title prob-indep-desc">
              <title id="prob-indep-title">Deux decoupes comparees, independance et dependance</title>
              <desc id="prob-indep-desc">Deux carres de meme taille sont poses cote a cote. Chacun est coupe horizontalement en deux bandes, la bande du haut occupant six dixiemes de la hauteur. Dans le carre de gauche, chaque bande est coupee verticalement au meme endroit, a la moitie de la largeur : savoir dans quelle bande on se trouve ne renseigne pas sur le cote ou l'on tombe, les deux evenements sont independants. Dans le carre de droite, la bande du haut est coupee aux trois quarts et la bande du bas au quart : les deux coupures ne sont pas alignees, donc savoir dans quelle bande on se trouve renseigne bien, et les deux evenements ne sont pas independants.</desc>

              <text class="annotation-label" x="131" y="48" text-anchor="middle">independants</text>
              <line class="frame-line" x1="56" y1="66" x2="206" y2="66"></line>
              <line class="frame-line" x1="56" y1="186" x2="206" y2="186"></line>
              <line class="frame-line" x1="56" y1="66" x2="56" y2="186"></line>
              <line class="frame-line" x1="206" y1="66" x2="206" y2="186"></line>
              <line class="frame-line" x1="56" y1="138" x2="206" y2="138"></line>
              <rect x="56" y="66" width="75" height="72" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="56" y="138" width="75" height="48" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <line class="curve-main" x1="131" y1="66" x2="131" y2="186"></line>
              <text class="tick-label" x="48" y="106" text-anchor="end">A</text>
              <text class="tick-label" x="48" y="166" text-anchor="end">non A</text>
              <text class="label-soft" x="131" y="204" text-anchor="middle">une seule coupure, bien droite</text>

              <text class="annotation-label" x="319" y="48" text-anchor="middle">non independants</text>
              <line class="frame-line" x1="244" y1="66" x2="394" y2="66"></line>
              <line class="frame-line" x1="244" y1="186" x2="394" y2="186"></line>
              <line class="frame-line" x1="244" y1="66" x2="244" y2="186"></line>
              <line class="frame-line" x1="394" y1="66" x2="394" y2="186"></line>
              <line class="frame-line" x1="244" y1="138" x2="394" y2="138"></line>
              <rect x="244" y="66" width="112.5" height="72" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <rect x="244" y="138" width="37.5" height="48" fill="color-mix(in srgb, var(--diagram-accent) 30%, transparent)"></rect>
              <line class="curve-main" x1="356.5" y1="66" x2="356.5" y2="138"></line>
              <line class="curve-main" x1="281.5" y1="138" x2="281.5" y2="186"></line>
              <text class="tick-label" x="236" y="106" text-anchor="end">A</text>
              <text class="tick-label" x="236" y="166" text-anchor="end">non A</text>
              <text class="label-soft" x="319" y="204" text-anchor="middle">deux coupures decalees</text>
            </svg>
          `,
          notes: [
            'À gauche : $P_A(B) = 0{,}5$ et $P_{\\bar{A}}(B) = 0{,}5$. La coupure est au même endroit dans les deux bandes, donc savoir si $A$ est réalisé n\'apprend rien sur $B$.',
            'La vérification chiffrée confirme : $P(A \\cap B) = 0{,}6 \\times 0{,}5 = 0{,}3$ et $P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$. Les deux coïncident.',
            'À droite : $P_A(B) = 0{,}75$ mais $P_{\\bar{A}}(B) = 0{,}25$. Les coupures sont décalées, et $P(A \\cap B) = 0{,}45$ alors que $P(A) \\times P(B) = 0{,}6 \\times 0{,}55 = 0{,}33$.',
            'Remarque importante : dans les deux carrés, la zone colorée n\'est <strong>jamais vide</strong>. Indépendant ne veut donc pas dire « qui ne se produisent jamais ensemble » — ce serait incompatible, ce qui est tout autre chose.'
          ],
          reading: 'Pose une règle verticale sur chacun des deux carrés et essaie de couvrir les deux coupures d\'un coup. À gauche tu y arrives : une seule droite suffit. À droite c\'est impossible, il en faut deux. Ce simple test « est-ce que la coupure est droite ? » est exactement le test d\'indépendance, et il est plus sûr qu\'une formule récitée.',
          caption: 'Deux découpes d\'un carré d\'aire $1$ : à gauche $A$ et $B$ indépendants, à droite non.'
        }
      ],
      recap: [
        '$P(A|B) \\neq P(B|A)$ en général : ne <strong>jamais</strong> inverser les conditionnements sans Bayes.',
        'Sur un arbre : multiplier le long d\'un chemin, additionner les chemins menant au même événement.',
        'Indépendance : $P(A \\cap B) = P(A) \\times P(B)$. Tester avant de conclure !',
        'Formule de Bayes : indispensable pour "retourner" un conditionnement (diagnostic, fiabilité, etc.).'
      ],
      piege: 'Ne pas confondre $P(A|B)$ et $P(B|A)$ : ce n\'est <strong>pas la même chose</strong> !<br/><br/>En médecine par exemple, la probabilité que le test soit positif si on est malade ($P(T+|M)$) est très différente de la probabilité d\'être malade si le test est positif ($P(M|T+)$). Pour "inverser" le conditionnement, il faut la <strong>formule de Bayes</strong>.'
    },
    quiz: [
      { q: 'Un test médical a une sensibilité de $95\\%$ : $P(\\text{Test}+|\\text{Malade}) = 0{,}95$. Un médecin conclut : "si le test est positif, le patient a $95\\%$ de chances d\'être malade." Cette conclusion est-elle correcte ?', options: ['Non : $P(\\text{Test}+|\\text{Malade})$ est la sensibilité, mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la prévalence de la maladie', 'Oui : $P(A|B) = P(B|A)$ par définition des probabilités conditionnelles', 'Oui : si le test est positif à $95\\%$ de fiabilité, la probabilité d\'être malade est bien $95\\%$', 'Non : la bonne valeur est $100\\% - 95\\% = 5\\%$'], answer: 0, correction: 'C\'est l\'"<strong>erreur du procureur</strong>". $P(\\text{Test}+|\\text{Malade}) = 0{,}95$ est la sensibilité du test.<br/><br/>Mais $P(\\text{Malade}|\\text{Test}+)$ dépend aussi de la rareté de la maladie. Si la maladie touche $1\\%$ de la population et le test fait $3\\%$ de faux positifs, un test positif ne signifie que $24\\%$ de chances d\'être malade !<br/><br/>Les deux probabilités conditionnelles $P(A|B)$ et $P(B|A)$ ne sont généralement <strong>pas égales</strong>.' },
      { q: 'Si $A$ et $B$ sont indépendants avec $P(A)=0{,}5$ et $P(B)=0{,}6$, alors $P(A\\cap B)=$ ?', options: ['$1{,}1$', '$0{,}3$', '$0{,}1$', '$0{,}11$'], answer: 1, correction: 'Quand les événements sont <strong>indépendants</strong>, on multiplie les probabilités : $P(A \\cap B) = P(A) \\times P(B)$.<br/><br/>Ici : $P(A \\cap B) = 0{,}5 \\times 0{,}6 = 0{,}3$.' },
      { q: 'Sur un arbre : $P(B)=0{,}3$, $P(A|B)=0{,}8$. Quelle est la probabilité d\'emprunter la branche $B$ puis $A$ ?', options: ['$0{,}24$', '$0{,}8$', '$1{,}1$', '$0{,}3$'], answer: 0, correction: 'Sur un arbre, on multiplie les probabilités le long du chemin : $P(A \\cap B) = P(B) \\times P(A|B)$.<br/><br/>$P(A \\cap B) = 0{,}3 \\times 0{,}8 = 0{,}24$.' },
      { q: 'On sait que $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}3$. $A$ et $B$ sont-ils indépendants ?', options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $0{,}3 \\neq 0{,}6 \\times 0{,}5 = 0{,}30$... en fait oui !', 'Oui, car $P(A|B) = 0{,}6 = P(A)$', 'Non, car $P(A) + P(B) > 1$'], answer: 2, correction: 'On vérifie la condition d\'indépendance : $P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3 = P(A \\cap B)$. C\'est bien vérifié !<br/><br/>On peut aussi le voir autrement : $P(A|B) = 0{,}3/0{,}5 = 0{,}6 = P(A)$. Savoir $B$ ne change rien pour $A$ : les événements sont <strong>indépendants</strong>.' },
      { q: 'Un sac contient $5$ boules rouges et $5$ boules bleues. On tire <strong>sans remise</strong> deux boules. $P(R_2|R_1)$ vaut :', options: ['$\\dfrac{5}{10} = 0{,}5$', '$\\dfrac{4}{9}$', '$\\dfrac{5}{9}$', '$\\dfrac{4}{10} = 0{,}4$'], answer: 1, correction: 'Après avoir tiré une boule rouge, il reste $4$ rouges sur $9$ boules au total.<br/><br/>Donc $P(R_2|R_1) = \\dfrac{4}{9}$.<br/><br/>Attention : le tirage <strong>sans remise</strong> change la composition du sac, les tirages ne sont donc pas indépendants !' }
    ],
    /* BANQUE ÉLARGIE le 2026-09-14. Mesure d'avant : 9 tirages pour UNE SEULE
       tâche réelle — la formule des probabilités totales — habillée de trois
       décors (pluie, embouteillage, grippe). Le chapitre le plus riche en
       malentendus du niveau n'entraînait donc qu'un seul geste.

       Sept tâches distinctes désormais, choisies pour couvrir ce que le
       chapitre demande réellement, et surtout pour faire travailler les
       erreurs que la fiche professeur diagnostique :
         t1 probabilités totales (la tâche d'origine, conservée) ;
         t2 conditionnelle par la définition, à partir d'une intersection ;
         t3 lecture d'un tableau croisé, où le dénominateur est à choisir ;
         t4 test d'indépendance, qui demande une comparaison et non un calcul ;
         t5 Bayes, l'inversion du conditionnement ;
         t6 intersection par multiplication le long d'un chemin ;
         t7 tirage sans remise, où la deuxième probabilité dépend de la première.

       Les effectifs des tâches à tableau sont posés en ENTIERS : calculés en
       flottant depuis des probabilités, ils donnaient des « 279,99999 » que
       l'énoncé aurait imprimés tels quels. */
    exercice: {
      type: 'numeric',
      generate() {
        const tache = pick(['totales', 'definition', 'tableau', 'independance', 'bayes', 'intersection', 'sansRemise']);

        if (tache === 'totales') {
          const pB = pick([0.2, 0.3, 0.4, 0.5]);
          const pAgivenB = pick([0.6, 0.7, 0.8, 0.9]);
          const pAgivenBbar = pick([0.1, 0.2, 0.3]);
          const pBbar = parseFloat((1 - pB).toFixed(1));
          const pA = parseFloat((pAgivenB * pB + pAgivenBbar * pBbar).toFixed(4));
          const ctx = pick([
            { phrB: `La météo annonce $${fr(pB * 100)}\\%$ de jours de pluie`, phrAB: `Les jours de pluie, la probabilité d'être en retard au lycée est $${fr(pAgivenB)}$`, phrABbar: `Les jours de beau temps, elle est de $${fr(pAgivenBbar)}$`, evt: 'être en retard' },
            { phrB: `La probabilité d'embouteillage est $${fr(pB)}$`, phrAB: `En cas d'embouteillage, la probabilité d'arriver en retard est $${fr(pAgivenB)}$`, phrABbar: `Sinon, elle est de $${fr(pAgivenBbar)}$`, evt: 'arriver en retard' },
            { phrB: `En hiver, $${fr(pB * 100)}\\%$ de la population a la grippe`, phrAB: `Si on a la grippe, la probabilité d'avoir de la fièvre est $${fr(pAgivenB)}$`, phrABbar: `Sinon, elle est de $${fr(pAgivenBbar)}$`, evt: 'avoir de la fièvre' }
          ]);
          return {
            statement: `${ctx.phrB}. ${ctx.phrAB}. ${ctx.phrABbar}.<br/><br/>Construire l'arbre de probabilité, puis calculer la probabilité de ${ctx.evt} par la formule des probabilités totales.<br/><br/>Arrondir à $0{,}001$.`,
            answer: pA, tolerance: 0.005, unit: '',
            hint: `Les deux chemins mènent au même événement : additionne-les. $P(A) = ${fr(pAgivenB)} \\times ${fr(pB)} + ${fr(pAgivenBbar)} \\times ${fr(pBbar)}$.`,
            solution: [
              `La formule des probabilités totales additionne les deux chemins de l'arbre : $P(A) = P_B(A) \\times P(B) + P_{\\bar{B}}(A) \\times P(\\bar{B})$.`,
              `On remplace : $P(A) = ${fr(pAgivenB)} \\times ${fr(pB)} + ${fr(pAgivenBbar)} \\times ${fr(pBbar)} = ${fr(pAgivenB * pB, 4)} + ${fr(pAgivenBbar * pBbar, 4)}$.`,
              `La probabilité cherchée vaut donc $${fr(pA)}$.`
            ]
          };
        }

        if (tache === 'definition') {
          const pInter = pick([0.12, 0.15, 0.18, 0.24, 0.28]);
          const pCond = pick([0.4, 0.5, 0.6, 0.8]);
          const res = parseFloat((pInter / pCond).toFixed(4));
          return {
            statement: `On donne $P(A \\cap B) = ${fr(pInter)}$ et $P(B) = ${fr(pCond)}$.<br/><br/>Calculer $P_B(A)$, la probabilité de $A$ sachant que $B$ est réalisé.<br/><br/>Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: '',
            hint: `Une probabilité conditionnelle est un recentrage : on divise ce qui vérifie les deux conditions par ce qui vérifie la condition de départ.`,
            solution: [
              `La définition de la probabilité conditionnelle donne $P_B(A) = \\dfrac{P(A \\cap B)}{P(B)}$ : on se restreint à $B$, qui devient le nouvel univers.`,
              `On remplace : $P_B(A) = \\dfrac{${fr(pInter)}}{${fr(pCond)}} = ${fr(res)}$.`,
              `Remarque : le dénominateur est $P(B)$ et non $P(A)$. C'est lui qui dit sur quelle population on se place.`
            ]
          };
        }

        if (tache === 'tableau') {
          /* Effectifs ENTIERS par construction : on tire les quatre cases, et
             les totaux s'en déduisent. Aucune division flottante ne vient
             produire un « 279,99999 » dans l'énoncé. */
          const a = rand(12, 40) * 5;   // A et B
          const b = rand(8, 30) * 5;    // A et non B
          const c = rand(10, 35) * 5;   // non A et B
          const d = rand(10, 35) * 5;   // non A et non B
          const colB = a + c;
          const res = parseFloat((a / colB).toFixed(4));
          /* Les libellés sont écrits au masculin pluriel dans les deux jeux,
             pour que « sont ... » s'accorde quel que soit le tirage. Une
             première version opposait « filles » et « garçons » avec des
             attributs au masculin, ce qui produisait « les filles ... sont
             inscrits » : la mesure du tirage réel l'a montré, la relecture
             non. */
          const ctx = pick([
            { l1: 'internes', l2: 'externes', c1: 'demi-pensionnaires le mercredi', c2: 'absents le mercredi', quoi: 'un élève pris parmi les demi-pensionnaires du mercredi soit interne' },
            { l1: 'élèves de première', l2: 'élèves de terminale', c1: 'inscrits en option musique', c2: 'non inscrits', quoi: 'un élève pris parmi les inscrits en option musique soit en première' }
          ]);
          return {
            statement: `Dans un lycée, on relève les effectifs suivants.<br/><br/>Parmi les ${ctx.l1} : $${a}$ sont ${ctx.c1} et $${b}$ sont ${ctx.c2}.<br/>Parmi les ${ctx.l2} : $${c}$ sont ${ctx.c1} et $${d}$ sont ${ctx.c2}.<br/><br/>Calculer la probabilité que ${ctx.quoi}.<br/><br/>Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: '',
            hint: `On te demande une probabilité « parmi ceux qui... » : la population de référence n'est pas le lycée entier, mais seulement la colonne concernée. Compte d'abord combien ils sont en tout.`,
            solution: [
              `La question restreint la population aux ${ctx.c1}, il faut donc d'abord compter combien ils sont : $${a} + ${c} = ${colB}$.`,
              `Parmi eux, ceux qui sont aussi ${ctx.l1} sont au nombre de $${a}$.`,
              `La probabilité cherchée vaut donc $\\dfrac{${a}}{${colB}} = ${fr(res)}$. Le dénominateur est le total de la <strong>colonne</strong>, pas l'effectif du lycée.`
            ]
          };
        }

        if (tache === 'independance') {
          /* Une chance sur deux que les événements soient indépendants : si la
             réponse était toujours « non », l'élève répondrait sans calculer. */
          const pA = pick([0.4, 0.5, 0.6]);
          const pB = pick([0.3, 0.5, 0.8]);
          const independants = pick([true, false]);
          const pInter = independants
            ? parseFloat((pA * pB).toFixed(4))
            : parseFloat((pA * pB + pick([0.06, 0.08, 0.1])).toFixed(4));
          return {
            statement: `On donne $P(A) = ${fr(pA)}$, $P(B) = ${fr(pB)}$ et $P(A \\cap B) = ${fr(pInter)}$.<br/><br/>Les événements $A$ et $B$ sont-ils indépendants ?<br/><br/>Répondre par $1$ si oui, par $0$ si non.`,
            answer: independants ? 1 : 0, tolerance: 0.001, unit: '',
            hint: `Le test d'indépendance consiste à comparer deux nombres : $P(A \\cap B)$ d'un côté, le produit $P(A) \\times P(B)$ de l'autre. Calcule le produit avant de conclure.`,
            solution: [
              `Le test d'indépendance compare $P(A \\cap B)$ au produit $P(A) \\times P(B)$, qui vaut ici $${fr(pA)} \\times ${fr(pB)} = ${fr(parseFloat((pA * pB).toFixed(4)))}$.`,
              `Or l'énoncé donne $P(A \\cap B) = ${fr(pInter)}$.`,
              independants
                ? `Les deux nombres sont égaux : les événements sont bien <strong>indépendants</strong>. Savoir que $B$ est réalisé ne change rien à la probabilité de $A$.`
                : `Les deux nombres diffèrent : les événements ne sont <strong>pas indépendants</strong>. Savoir que $B$ est réalisé modifie la probabilité de $A$.`
            ]
          };
        }

        if (tache === 'bayes') {
          const pM = pick([0.01, 0.02, 0.05]);
          const sens = pick([0.9, 0.95]);
          const fauxPos = pick([0.02, 0.03, 0.05]);
          const pTplus = pM * sens + (1 - pM) * fauxPos;
          const res = parseFloat((pM * sens / pTplus).toFixed(4));
          return {
            statement: `Une maladie touche $${fr(pM * 100)}\\%$ de la population. Un test est positif dans $${fr(sens * 100)}\\%$ des cas si la personne est malade, et dans $${fr(fauxPos * 100)}\\%$ des cas si elle est saine.<br/><br/>Une personne a un test positif. Calculer la probabilité qu'elle soit réellement malade.<br/><br/>Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: '',
            hint: `On te donne « positif sachant malade » et on te demande « malade sachant positif » : c'est l'inversion du conditionnement. Calcule d'abord la probabilité totale d'un test positif, tous cas confondus.`,
            solution: [
              `On calcule d'abord la probabilité d'un test positif, en additionnant les deux chemins qui y mènent : $P(T) = ${fr(pM)} \\times ${fr(sens)} + ${fr(parseFloat((1 - pM).toFixed(4)))} \\times ${fr(fauxPos)} = ${fr(parseFloat(pTplus.toFixed(4)))}$.`,
              `Parmi ces tests positifs, ceux qui viennent d'une personne réellement malade représentent $${fr(pM)} \\times ${fr(sens)} = ${fr(parseFloat((pM * sens).toFixed(4)))}$.`,
              `La probabilité cherchée est le quotient des deux : $\\dfrac{${fr(parseFloat((pM * sens).toFixed(4)))}}{${fr(parseFloat(pTplus.toFixed(4)))}} = ${fr(res)}$. Le résultat surprend : un test très fiable sur une maladie rare laisse beaucoup de faux positifs.`
            ]
          };
        }

        if (tache === 'intersection') {
          const pB = pick([0.2, 0.3, 0.4, 0.6]);
          const pAB = pick([0.25, 0.5, 0.75, 0.8]);
          const res = parseFloat((pB * pAB).toFixed(4));
          /* Les deux évènements sont écrits comme des GROUPES NOMINAUX, et non
             comme des propositions : « la probabilité que un client entre »
             produisait une élision fautive, que seule la mesure du tirage réel
             a montrée. Un groupe nominal supprime le problème à la racine. */
          /* Chaque évènement est une PHRASE COMPLÈTE introduite par deux points,
             jamais un complément à faire suivre une préposition : « la
             probabilité que un client entre » et « la probabilité de le rejet »
             produisaient tous deux une faute d'élision ou de contraction, que
             seule la mesure du tirage réel a montrée — la relecture non. */
          const ctx = pick([
            { lieu: 'Dans une boutique', e1: 'Un passant entre dans le magasin', e2: 'ce passant achète quelque chose', deux: 'un passant entre et achète quelque chose' },
            { lieu: 'Dans un atelier', e1: 'Une pièce sort de la chaîne avec un défaut visible', e2: 'cette pièce est écartée au contrôle', deux: 'une pièce ait un défaut et soit écartée' }
          ]);
          return {
            statement: `${ctx.lieu}, on relève les probabilités suivantes.<br/><br/>${ctx.e1} avec une probabilité de $${fr(pB)}$.<br/><br/>Lorsque c'est le cas, ${ctx.e2} avec une probabilité de $${fr(pAB)}$.<br/><br/>Calculer la probabilité que ${ctx.deux}.<br/><br/>Arrondir à $0{,}001$.`,
            answer: res, tolerance: 0.005, unit: '',
            hint: `Sur un arbre, on multiplie les probabilités le long d'un chemin. Les deux nombres donnés sont justement les deux branches d'un même chemin.`,
            solution: [
              `Les deux nombres donnés sont les deux branches successives d'un même chemin de l'arbre, et sur un chemin les probabilités se <strong>multiplient</strong>.`,
              `On obtient $P(A \\cap B) = P(B) \\times P_B(A) = ${fr(pB)} \\times ${fr(pAB)} = ${fr(res)}$.`,
              `Attention à ne pas additionner : une intersection est toujours plus rare que chacun des deux événements pris séparément.`
            ]
          };
        }

        // tache === 'sansRemise' : la dépendance créée par le tirage lui-même.
        const rouges = rand(3, 6), bleues = rand(3, 6);
        const total = rouges + bleues;
        const res = parseFloat((rouges / total * (rouges - 1) / (total - 1)).toFixed(4));
        return {
          statement: `Un sac contient $${rouges}$ boules rouges et $${bleues}$ boules bleues.<br/><br/>On tire deux boules <strong>sans remise</strong>, l'une après l'autre.<br/><br/>Calculer la probabilité d'obtenir deux boules rouges.<br/><br/>Arrondir à $0{,}001$.`,
          answer: res, tolerance: 0.005, unit: '',
          hint: `Après le premier tirage, le sac a changé : il y a une boule de moins au total, et une rouge de moins si la première était rouge. La deuxième probabilité n'est donc pas la même que la première.`,
          solution: [
            `Au premier tirage, la probabilité d'obtenir une rouge vaut $\\dfrac{${rouges}}{${total}}$.`,
            `Le sac ayant changé, la deuxième probabilité se calcule sur ce qu'il reste : $\\dfrac{${rouges - 1}}{${total - 1}}$, puisqu'il manque une rouge et une boule au total.`,
            `On multiplie les deux étapes du chemin : $\\dfrac{${rouges}}{${total}} \\times \\dfrac{${rouges - 1}}{${total - 1}} = ${fr(res)}$. Sans remise, les deux tirages ne sont pas indépendants.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un test médical détecte une maladie présente chez $2\\%$ de la population. Le test est positif dans $95\\%$ des cas si la personne est malade et dans $3\\%$ des cas si elle est saine.',
      tasks: [
        'Construire un arbre de probabilité.',
        'Calculer la probabilité d\'avoir un test positif.',
        'Calculer la probabilité d\'être malade sachant que le test est positif (Bayes).'
      ],
      solutions: [
        'Branches : Malade ($0{,}02$) / Sain ($0{,}98$). Sous Malade : $T+$ ($0{,}95$) / $T-$ ($0{,}05$). Sous Sain : $T+$ ($0{,}03$) / $T-$ ($0{,}97$).',
        '$P(T+)=0{,}02\\times0{,}95+0{,}98\\times0{,}03=0{,}019+0{,}0294=0{,}0484$.',
        '$P(M|T+)=\\frac{0{,}019}{0{,}0484}\\approx0{,}393$ soit environ $39\\%$.'
      ],
      finalAnswer: 'Probabilité d\'être malade avec test positif $\\approx 39\\%$ malgré un test fiable à $95\\%$ (paradoxe de la rareté).'
    },

    evaluation: {
      title: 'Évaluation — Probabilités conditionnelles',
      duration: '35 min',
      questions: [
        {
          statement: 'On donne $P(A) = 0{,}6$, $P(B) = 0{,}5$ et $P(A \\cap B) = 0{,}2$. Calculer $P(A|B)$.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la définition de la probabilité conditionnelle : $P(A|B) = \\dfrac{P(A \\cap B)}{P(B)}$.<br/><br/>$P(A|B) = \\dfrac{0{,}2}{0{,}5} = 0{,}4$. Sachant que $B$ est réalisé, la probabilité de $A$ est $0{,}4$.'
        },
        {
          statement: 'Les événements $A$ et $B$ de la question précédente ($P(A) = 0{,}6$, $P(B) = 0{,}5$, $P(A \\cap B) = 0{,}2$) sont-ils indépendants ?',
          type: 'multiple-choice',
          options: ['Oui, car $P(A \\cap B) = P(A) \\times P(B)$', 'Non, car $P(A \\cap B) \\neq P(A) \\times P(B)$', 'Oui, car $P(A) + P(B) = 1{,}1$', 'On ne peut pas conclure sans connaître $P(A \\cup B)$'],
          answer: 1,
          points: 2,
          correction: 'Pour tester l\'indépendance, on compare $P(A \\cap B)$ et $P(A) \\times P(B)$.<br/><br/>$P(A) \\times P(B) = 0{,}6 \\times 0{,}5 = 0{,}3$. Or $P(A \\cap B) = 0{,}2 \\neq 0{,}3$.<br/><br/>Les événements ne sont <strong>pas indépendants</strong> : la réalisation de $B$ modifie la probabilité de $A$.'
        },
        {
          statement: 'Dans un lycée, $60\\%$ des élèves font de l\'anglais (événement $A$). Parmi ceux qui font de l\'anglais, $30\\%$ font aussi de l\'espagnol (événement $E$). Calculer $P(A \\cap E)$.',
          type: 'numeric',
          answer: 0.18,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On utilise la formule de l\'intersection : $P(A \\cap E) = P(A) \\times P(E|A)$.<br/><br/>$P(A \\cap E) = 0{,}6 \\times 0{,}3 = 0{,}18$. Cela signifie que $18\\%$ des élèves font à la fois anglais et espagnol.'
        },
        {
          /* QUESTION 4 RÉÉCRITE le 2026-09-14, pour deux raisons.

             Sur le fond : elle demandait un tirage AVEC remise, dont le corrigé
             se réduit à une multiplication de deux fractions identiques. C'est
             le cas le plus simple du chapitre, et surtout le seul qui
             n'utilise pas de conditionnement — dans un devoir sur les
             probabilités conditionnelles.

             Sur l'équilibre : mesuré sur les cinquante questions du niveau,
             « calculer » dépassait le plafond de 35 % du cahier des charges,
             tandis que « représenter » restait sous 10 %. La nouvelle question
             demande de LIRE un tableau croisé et d'y choisir le bon
             dénominateur — ce qui est une lecture de représentation, et ce que
             la fiche professeur diagnostique comme la deuxième erreur du
             chapitre. L'étiquette suit l'énoncé. */
          statement: 'Dans un club de $200$ adhérents, on relève :<br/><br/>parmi les $120$ adultes, $90$ pratiquent la natation ;<br/>parmi les $80$ jeunes, $30$ pratiquent la natation.<br/><br/>On choisit au hasard un adhérent qui pratique la natation. Quelle est la probabilité que ce soit un jeune ?',
          type: 'numeric',
          answer: 0.25,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'La question restreint la population aux nageurs : c\'est ce groupe, et non le club entier, qui sert de référence.<br/><br/>On commence donc par compter les nageurs : $90 + 30 = 120$.<br/><br/>Parmi eux, les jeunes sont au nombre de $30$. La probabilité cherchée vaut donc $\\dfrac{30}{120} = 0{,}25$.<br/><br/>Le piège classique consiste à diviser par $200$, l\'effectif total du club, ce qui donnerait $0{,}15$. Mais on ne tire pas au hasard dans tout le club : on tire parmi ceux qui nagent, et c\'est le mot « qui pratique la natation » qui le dit.<br/><br/>À ne pas confondre non plus avec la probabilité qu\'un jeune pris au hasard pratique la natation, qui vaut $\\dfrac{30}{80} \\approx 0{,}375$ : même numérateur, autre dénominateur, autre question.'
        },
        {
          statement: 'On sait que $P(B) = 0{,}4$, $P(A|B) = 0{,}7$ et $P(A|\\bar{B}) = 0{,}2$. Calculer $P(A)$ par la formule des probabilités totales.',
          type: 'numeric',
          answer: 0.4,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'On applique la <strong>formule des probabilités totales</strong> : $P(A) = P(A|B) \\times P(B) + P(A|\\bar{B}) \\times P(\\bar{B})$.<br/><br/>$P(A) = 0{,}7 \\times 0{,}4 + 0{,}2 \\times 0{,}6 = 0{,}28 + 0{,}12 = 0{,}4$.'
        }
      ]
    }
  });
