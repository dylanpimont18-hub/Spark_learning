window.MODULES.push(
    {
    id: '4e-statistiques',
    level: 1, subject: 'maths',
    icon: '📊',
    title: 'Statistiques : médiane et quartiles',
    subtitle: 'Médiane, Q1, Q3, boîte à moustaches',
    keywords: ['Médiane', 'Quartile', 'Étendue', 'Boîte à moustaches', 'Série ordonnée'],
    physics: false,
    cours: {
      /* DECOUVRIR reecrit le 2026-09-13. L'intro definissait la mediane et
         annoncait sa qualite. On ouvre desormais sur une moyenne VRAIE mais
         trompeuse : l'eleve sait deja calculer une moyenne, il constate qu'elle
         ne decrit personne, et c'est ce constat qui rend la mediane necessaire.
         La question ne peut pas se resoudre avec les outils de cinquieme. */
      intro: 'Dans une petite entreprise de $9$ salariés, le salaire moyen est de $2\\,250$ € par mois. Pourtant, huit des neuf salariés gagnent moins de $1\\,800$ €.<br/><br/>' +
        'La moyenne n\'est pas fausse : elle est correctement calculée. Le patron se paie $7\\,400$ € et tire à lui tout seul le résultat vers le haut.<br/><br/>' +
        'Alors comment donner un salaire « typique » de cette entreprise, un nombre qui décrive vraiment la situation des salariés ? La moyenne ne sait pas le faire. Il faut un autre indicateur.<br/><br/>' +
        'La médiane est la valeur qui partage une série ordonnée en deux groupes d\'effectif égal : autant de valeurs en dessous qu\'au-dessus. Contrairement à la moyenne, elle n\'est pas perturbée par les valeurs extrêmes (salaires de PDG, erreurs de mesure…).' +
        '<br/><br/>' +
        'Les quartiles $Q_1$ et $Q_3$ affinent cette idée : $25\\%$ des valeurs sont inférieures à $Q_1$ et $75\\%$ sont inférieures à $Q_3$. L\'écart interquartile $IQR = Q_3 - Q_1$ mesure la dispersion de la moitié centrale des données, sans être biaisé par les extrêmes.' +
        '<br/><br/>' +
        'La <strong>boîte à moustaches</strong> représente graphiquement la médiane et les quartiles pour visualiser rapidement la distribution : la « boîte » contient les $50\\%$ centraux, et les « moustaches » s\'étendent jusqu\'aux valeurs min et max.' +
        '<br/><br/>' +
        'En sciences, on utilise la médiane quand les données contiennent des valeurs aberrantes (outliers), car la moyenne serait alors trompeuse.',
      definitions: [
        { term: 'Médiane', def: 'Valeur qui partage une série ordonnée en deux moitiés d\'effectif égal. Pour $n$ impair : valeur centrale ; pour $n$ pair : moyenne des deux valeurs centrales.' },
        { term: 'Premier quartile $Q_1$', def: 'Valeur en dessous de laquelle se trouvent $25\\%$ des données. C\'est la médiane de la moitié inférieure de la série.' },
        { term: 'Troisième quartile $Q_3$', def: 'Valeur en dessous de laquelle se trouvent $75\\%$ des données. C\'est la médiane de la moitié supérieure de la série.' },
        { term: 'Écart interquartile', def: '$IQR = Q_3 - Q_1$. Mesure la dispersion des $50\\%$ centraux des données, sans être affecté par les valeurs extrêmes.' }
      ],
      method: {
        title: 'Méthode en 4 étapes',
        steps: [
          '<strong>Ordonner</strong> la série dans l\'ordre croissant. <strong>Exemple :</strong> $7, 3, 9, 1, 5$ → $1, 3, 5, 7, 9$.',
          '<strong>Médiane $Me$</strong> : valeur centrale si $n$ est impair ; moyenne des deux valeurs centrales si $n$ est pair. <strong>Exemple :</strong> série $1, 3, 5, 7, 9$ ($n = 5$) → $Me = 5$ (la $3^e$ valeur).',
          '<strong>Premier quartile $Q_1$</strong> : médiane de la moitié inférieure (valeurs $< Me$). <strong>Exemple :</strong> moitié inférieure $\\{1, 3\\}$ → $Q_1 = \\dfrac{1+3}{2} = 2$.',
          '<strong>Troisième quartile $Q_3$</strong> : médiane de la moitié supérieure (valeurs $> Me$). <strong>Exemple :</strong> moitié supérieure $\\{7, 9\\}$ → $Q_3 = \\dfrac{7+9}{2} = 8$. $IQR = 8 - 2 = 6$.'
        ]
      },
      example: {
        statement: 'Les temps (en secondes) de $8$ coureurs au $100$ m sont : $12{,}3$ ; $11{,}8$ ; $13{,}5$ ; $11{,}2$ ; $12{,}7$ ; $14{,}1$ ; $11{,}5$ ; $12{,}0$. Calculer la médiane et les quartiles.',
        steps: [
          'Série ordonnée : $11{,}2$ ; $11{,}5$ ; $11{,}8$ ; $12{,}0$ ; $12{,}3$ ; $12{,}7$ ; $13{,}5$ ; $14{,}1$.',
          '$n = 8$ (pair) → $Me = \\dfrac{x_4 + x_5}{2} = \\dfrac{12{,}0 + 12{,}3}{2} = 12{,}15$ s.',
          'Moitié inférieure $\\{11{,}2 ; 11{,}5 ; 11{,}8 ; 12{,}0\\}$ → $Q_1 = \\dfrac{11{,}5 + 11{,}8}{2} = 11{,}65$ s. Moitié supérieure $\\{12{,}3 ; 12{,}7 ; 13{,}5 ; 14{,}1\\}$ → $Q_3 = \\dfrac{12{,}7 + 13{,}5}{2} = 13{,}1$ s.'
        ],
        answer: '$Me = 12{,}15$ s, $Q_1 = 11{,}65$ s, $Q_3 = 13{,}1$ s, $IQR = 13{,}1 - 11{,}65 = 1{,}45$ s.'
      },
      formulas: [
        'Écart interquartile : $IQR = Q_3 - Q_1$',
        'Série de $n$ valeurs ordonnées : $Me = x_{(n+1)/2}$ si $n$ impair',
        'Si $n$ pair : $Me = \\dfrac{x_{n/2} + x_{n/2+1}}{2}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Boîte à moustaches',
        title: 'Les 8 temps au 100 m : de la série à la boîte à moustaches',
        description: 'Série ordonnée (en secondes) : $11{,}2\\,;\\,11{,}5\\,;\\,11{,}8\\,;\\,12{,}0\\,;\\,12{,}3\\,;\\,12{,}7\\,;\\,13{,}5\\,;\\,14{,}1$. La boîte va de $Q_1 = 11{,}65$ à $Q_3 = 13{,}1$, coupée par la médiane $Me = 12{,}15$, avec des moustaches jusqu\'au minimum et au maximum.',
        svg: `
          <svg viewBox="0 0 490 230" role="img" aria-labelledby="stats-boxplot-title stats-boxplot-desc">
            <title id="stats-boxplot-title">Boite a moustaches des temps de 8 coureurs au 100 m</title>
            <desc id="stats-boxplot-desc">Huit points representant les temps ordonnes sont places au dessus d'une boite a moustaches allant du minimum 11,2 au maximum 14,1 secondes, avec la boite entre le premier quartile 11,65 et le troisième quartile 13,1, coupée par la médiane 12,15.</desc>
            <line class="grid-line" x1="60.0" y1="40" x2="60.0" y2="170"></line>
            <line class="grid-line" x1="112.9" y1="40" x2="112.9" y2="170"></line>
            <line class="grid-line" x1="165.7" y1="40" x2="165.7" y2="170"></line>
            <line class="grid-line" x1="218.6" y1="40" x2="218.6" y2="170"></line>
            <line class="grid-line" x1="271.4" y1="40" x2="271.4" y2="170"></line>
            <line class="grid-line" x1="324.3" y1="40" x2="324.3" y2="170"></line>
            <line class="grid-line" x1="377.1" y1="40" x2="377.1" y2="170"></line>
            <line class="grid-line" x1="430.0" y1="40" x2="430.0" y2="170"></line>
            <text class="label-soft" x="60" y="26">Les 8 temps mesurés (s)</text>
            <circle class="plot-point-alt" cx="81.1" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="112.9" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="144.6" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="165.7" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="197.4" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="239.7" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="324.3" cy="45" r="3"></circle>
            <circle class="plot-point-alt" cx="387.7" cy="45" r="3"></circle>
            <line class="axis" x1="81.1" y1="110" x2="128.7" y2="110"></line>
            <line class="axis" x1="282.0" y1="110" x2="387.7" y2="110"></line>
            <line class="axis" x1="81.1" y1="100" x2="81.1" y2="120"></line>
            <line class="axis" x1="387.7" y1="100" x2="387.7" y2="120"></line>
            <rect class="frame-line" x="128.7" y="90" width="153.3" height="40" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></rect>
            <line class="curve-main" x1="181.6" y1="90" x2="181.6" y2="130"></line>
            <circle class="plot-point-alt" cx="81.1" cy="110" r="4"></circle>
            <circle class="plot-point" cx="181.6" cy="110" r="4"></circle>
            <circle class="plot-point-alt" cx="387.7" cy="110" r="4"></circle>
            <text class="tick-label" x="128.7" y="84" text-anchor="middle">Q1</text>
            <text class="annotation-label" x="181.6" y="84" text-anchor="middle">Médiane</text>
            <text class="tick-label" x="282.0" y="84" text-anchor="middle">Q3</text>
            <text class="tick-label" x="81.1" y="145" text-anchor="end">Min : 11,2 s</text>
            <text class="tick-label" x="128.7" y="145" text-anchor="middle">11,65 s</text>
            <text class="annotation-label" x="181.6" y="145" text-anchor="middle">12,15 s</text>
            <text class="tick-label" x="282.0" y="145" text-anchor="middle">13,1 s</text>
            <text class="tick-label" x="387.7" y="145" text-anchor="start">Max : 14,1 s</text>
            <line class="axis" x1="30" y1="170" x2="460" y2="170"></line>
            <line class="axis" x1="60.0" y1="170" x2="60.0" y2="176"></line>
            <line class="axis" x1="112.9" y1="170" x2="112.9" y2="176"></line>
            <line class="axis" x1="165.7" y1="170" x2="165.7" y2="176"></line>
            <line class="axis" x1="218.6" y1="170" x2="218.6" y2="176"></line>
            <line class="axis" x1="271.4" y1="170" x2="271.4" y2="176"></line>
            <line class="axis" x1="324.3" y1="170" x2="324.3" y2="176"></line>
            <line class="axis" x1="377.1" y1="170" x2="377.1" y2="176"></line>
            <line class="axis" x1="430.0" y1="170" x2="430.0" y2="176"></line>
            <text class="tick-label" x="60.0" y="188" text-anchor="middle">11,0</text>
            <text class="tick-label" x="112.9" y="188" text-anchor="middle">11,5</text>
            <text class="tick-label" x="165.7" y="188" text-anchor="middle">12,0</text>
            <text class="tick-label" x="218.6" y="188" text-anchor="middle">12,5</text>
            <text class="tick-label" x="271.4" y="188" text-anchor="middle">13,0</text>
            <text class="tick-label" x="324.3" y="188" text-anchor="middle">13,5</text>
            <text class="tick-label" x="377.1" y="188" text-anchor="middle">14,0</text>
            <text class="tick-label" x="430.0" y="188" text-anchor="middle">14,5</text>
            <text class="tick-label" x="460" y="205" text-anchor="end">Temps (s)</text>
          </svg>
        `,
        notes: [
          'Série ordonnée : $11{,}2\\,;\\,11{,}5\\,;\\,11{,}8\\,;\\,12{,}0\\,;\\,12{,}3\\,;\\,12{,}7\\,;\\,13{,}5\\,;\\,14{,}1$ (les 8 points au-dessus de la boîte).',
          '$n = 8$ (pair) → $Me = \\dfrac{x_4 + x_5}{2} = \\dfrac{12{,}0 + 12{,}3}{2} = 12{,}15$ s (trait épais dans la boîte).',
          'La boîte va de $Q_1 = 11{,}65$ s à $Q_3 = 13{,}1$ s : elle contient les $50\\%$ centraux des temps.',
          'Les moustaches relient la boîte au minimum ($11{,}2$ s) et au maximum ($14{,}1$ s).'
        ],
        reading: 'La largeur de la boîte, $IQR = Q_3 - Q_1 = 13{,}1 - 11{,}65 = 1{,}45$ s, mesure la dispersion des temps centraux sans être influencée par le coureur le plus lent.',
        caption: 'Boîte à moustaches construite à partir des 8 temps réels de l\'exemple du cours.'
      },

      /* SCHEMAS SECONDAIRES (2026-09-13). Une figure par MALENTENDU :
         1. la moyenne suit la valeur extreme, la mediane ne bouge pas — c'est
            la reponse a la question d'ouverture, en une image ;
         2. la mediane d'un effectif PAIR n'est pas une valeur de la serie,
            erreur systematique ;
         3. il faut ORDONNER avant de chercher la mediane, oubli le plus
            frequent en devoir.
         Serie de l'intro verifiee : moyenne 2250 exactement, mediane 1650
         (scratchpad geo-all.js). */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'La réponse à la question d\'ouverture',
          title: 'Une seule valeur extrême déplace la moyenne, pas la médiane',
          description: 'Les neuf salaires de l\'introduction sont posés sur un axe. La <strong>médiane</strong> reste au milieu du groupe ; la <strong>moyenne</strong>, elle, est tirée vers le salaire du patron, loin de tous les autres.',
          svg: `
            <svg viewBox="0 0 400 172" role="img" aria-labelledby="stat-extreme-title stat-extreme-desc">
              <title id="stat-extreme-title">Position de la moyenne et de la mediane sur une serie de salaires</title>
              <desc id="stat-extreme-desc">Neuf salaires sont places sur un axe horizontal gradue de 1000 a 7500 euros. Huit d'entre eux sont serres entre 1450 et 1750 euros, le neuvieme vaut 7400 euros et se trouve tres a droite, isole. La mediane, marquee a 1650 euros, tombe au milieu du groupe serre. La moyenne, marquee a 2250 euros, se trouve nettement a droite du groupe, tiree par le salaire isole, alors qu'aucun salarie ne gagne cette somme.</desc>

              <!-- Axe 1000..7500 euros sur 40..372 unites de viewBox :
                   echelle = 332 / 6500 = 0,05108 unite par euro.
                   x(v) = 40 + (v - 1000) * 0,05108. Positions calculees :
                   1450 -> 63,0   1500 -> 65,5   1600 -> 70,6   1650 -> 73,2
                   1700 -> 75,8   1750 -> 78,3   2250 -> 103,9  7400 -> 367,0 -->
              <line class="axis" x1="40" y1="112" x2="372" y2="112"></line>
              <line class="grid-line" x1="40" y1="106" x2="40" y2="118"></line>
              <line class="grid-line" x1="372" y1="106" x2="372" y2="118"></line>
              <text class="tick-label" x="40" y="132" text-anchor="middle">1000</text>
              <text class="tick-label" x="372" y="132" text-anchor="middle">7500</text>
              <text class="tick-label" x="200" y="152" text-anchor="middle">salaires en euros</text>

              <circle class="plot-point" cx="63" cy="112" r="4"></circle>
              <circle class="plot-point" cx="65.5" cy="112" r="4"></circle>
              <circle class="plot-point" cx="65.5" cy="112" r="4"></circle>
              <circle class="plot-point" cx="70.6" cy="112" r="4"></circle>
              <circle class="plot-point" cx="73.2" cy="112" r="4"></circle>
              <circle class="plot-point" cx="75.8" cy="112" r="4"></circle>
              <circle class="plot-point" cx="75.8" cy="112" r="4"></circle>
              <circle class="plot-point" cx="78.3" cy="112" r="4"></circle>
              <circle class="plot-point" cx="367" cy="112" r="4"></circle>

              <line class="curve-main" x1="73.2" y1="112" x2="73.2" y2="72"></line>
              <text class="annotation-label" x="73.2" y="64" text-anchor="middle">médiane</text>
              <text class="tick-label" x="73.2" y="48" text-anchor="middle">1650</text>

              <line class="guide-line" x1="103.9" y1="112" x2="103.9" y2="88"></line>
              <text class="annotation-label" x="140" y="82" text-anchor="start">moyenne 2250</text>

              <text class="tick-label" x="340" y="96" text-anchor="middle">le patron</text>
            </svg>
          `,
          notes: [
            'Huit salaires sont serrés entre $1\\,450$ et $1\\,750$ € : c\'est là que vit réellement l\'entreprise, et c\'est là que tombe la médiane.',
            'La moyenne vaut $2\\,250$ €, une somme que <strong>personne ne gagne</strong> : elle est tirée par le seul salaire de $7\\,400$ €.',
            'Retire le patron de la liste et la moyenne s\'effondre, alors que la médiane bouge à peine. C\'est ce qu\'on appelle la <strong>sensibilité aux valeurs extrêmes</strong>.'
          ],
          reading: 'Regarde où se trouvent les points. La médiane est au milieu du paquet, la moyenne est déjà sortie du paquet. C\'est pourquoi on préfère la médiane pour décrire un salaire « typique ».',
          caption: 'Neuf salaires : la médiane reste dans le groupe, la moyenne est tirée par la valeur extrême.'
        },
        {
          theme: 'maths',
          kicker: 'Effectif pair',
          title: 'La médiane n\'est pas toujours une valeur de la série',
          description: 'Avec un nombre <strong>impair</strong> de valeurs, la médiane est celle du milieu. Avec un nombre <strong>pair</strong>, il n\'y a pas de valeur centrale : la médiane est la moyenne des deux du milieu, et elle peut ne figurer nulle part dans la liste.',
          svg: `
            <svg viewBox="0 0 400 180" role="img" aria-labelledby="stat-pair-title stat-pair-desc">
              <title id="stat-pair-title">Mediane d'une serie impaire puis d'une serie paire</title>
              <desc id="stat-pair-desc">En haut, une serie de sept valeurs ordonnees : la valeur du milieu, la quatrieme, est entouree et constitue la mediane. En bas, une serie de six valeurs ordonnees : il n'y a pas de valeur du milieu, les deux valeurs centrales, la troisieme et la quatrieme, sont entourees ensemble et leur moyenne donne la mediane, un nombre qui ne figure pas dans la serie.</desc>

              <text class="tick-label" x="24" y="46" text-anchor="start">7 valeurs</text>
              <text class="tick-label" x="140" y="46" text-anchor="middle">4</text>
              <text class="tick-label" x="176" y="46" text-anchor="middle">7</text>
              <text class="tick-label" x="212" y="46" text-anchor="middle">9</text>
              <text class="annotation-label" x="248" y="46" text-anchor="middle">12</text>
              <text class="tick-label" x="284" y="46" text-anchor="middle">15</text>
              <text class="tick-label" x="320" y="46" text-anchor="middle">18</text>
              <text class="tick-label" x="356" y="46" text-anchor="middle">21</text>
              <circle class="plot-point-alt" cx="248" cy="41" r="13"></circle>
              <text class="tick-label" x="248" y="76" text-anchor="middle">médiane = 12, une valeur de la série</text>

              <text class="tick-label" x="24" y="126" text-anchor="start">6 valeurs</text>
              <text class="tick-label" x="158" y="126" text-anchor="middle">3</text>
              <text class="tick-label" x="194" y="126" text-anchor="middle">5</text>
              <text class="annotation-label" x="230" y="126" text-anchor="middle">8</text>
              <text class="annotation-label" x="266" y="126" text-anchor="middle">11</text>
              <text class="tick-label" x="302" y="126" text-anchor="middle">14</text>
              <text class="tick-label" x="338" y="126" text-anchor="middle">20</text>
              <path class="guide-line" fill="none" d="M214 134 L214 142 L282 142 L282 134"></path>
              <text class="tick-label" x="248" y="160" text-anchor="middle">médiane = moitié de 8 plus 11, soit 9,5 : absente de la série</text>
            </svg>
          `,
          notes: [
            'Sept valeurs : la médiane est la <strong>quatrième</strong>, car il y en a trois avant et trois après.',
            'Six valeurs : les deux du milieu sont $8$ et $11$, donc la médiane vaut $\\dfrac{8 + 11}{2} = 9{,}5$.',
            'Ce $9{,}5$ ne figure pas dans la série, et c\'est <strong>normal</strong> : la médiane est une position, pas forcément une valeur observée.'
          ],
          reading: 'Compte d\'abord combien tu as de valeurs. Nombre impair : tu cherches une valeur. Nombre pair : tu en cherches deux, et tu calcules leur moyenne.',
          caption: 'Effectif impair : la médiane est une valeur de la série. Effectif pair : c\'est la moyenne des deux valeurs centrales.'
        },
        {
          theme: 'maths',
          kicker: 'L\'oubli qui fausse tout',
          title: 'Ordonner d\'abord, chercher la médiane ensuite',
          description: 'La médiane se lit sur une série <strong>rangée dans l\'ordre croissant</strong>. Prendre la valeur du milieu d\'une liste en désordre donne un résultat qui n\'a aucun sens — et l\'erreur ne se voit pas sur la copie.',
          svg: `
            <svg viewBox="0 0 400 168" role="img" aria-labelledby="stat-ordre-title stat-ordre-desc">
              <title id="stat-ordre-title">Effet de l'oubli du rangement sur le calcul de la mediane</title>
              <desc id="stat-ordre-desc">En haut, une serie donnee en desordre : en prenant la valeur du milieu telle quelle on obtient 4, ce qui est faux. En dessous, la meme serie rangee dans l'ordre croissant : la valeur du milieu est cette fois 9, la vraie mediane. Les deux resultats different alors que les nombres sont exactement les memes, seule leur disposition a change.</desc>

              <!-- PATRON « PIEGE » inverse ici : l'erreur est en HAUT parce que
                   c'est l'ordre chronologique du geste de l'eleve (il lit la
                   serie telle qu'on la lui donne), et la correction dessous. Le
                   trait tirete et la teinte faible marquent malgre tout la
                   ligne fausse. -->
              <text class="label-soft" x="24" y="44" text-anchor="start">en désordre</text>
              <text class="tick-label" x="150" y="44" text-anchor="middle">12</text>
              <text class="tick-label" x="186" y="44" text-anchor="middle">3</text>
              <text class="label-soft" x="222" y="44" text-anchor="middle">4</text>
              <text class="tick-label" x="258" y="44" text-anchor="middle">15</text>
              <text class="tick-label" x="294" y="44" text-anchor="middle">9</text>
              <line class="guide-line" x1="140" y1="52" x2="306" y2="52"></line>
              <text class="label-soft" x="222" y="70" text-anchor="middle">valeur du milieu : 4, mais ce nombre n’est pas la médiane</text>

              <text class="annotation-label" x="24" y="114" text-anchor="start">rangée</text>
              <text class="tick-label" x="150" y="114" text-anchor="middle">3</text>
              <text class="tick-label" x="186" y="114" text-anchor="middle">4</text>
              <text class="annotation-label" x="222" y="114" text-anchor="middle">9</text>
              <text class="tick-label" x="258" y="114" text-anchor="middle">12</text>
              <text class="tick-label" x="294" y="114" text-anchor="middle">15</text>
              <circle class="plot-point-alt" cx="222" cy="109" r="13"></circle>
              <text class="tick-label" x="222" y="146" text-anchor="middle">valeur du milieu : 9, la vraie médiane</text>
            </svg>
          `,
          notes: [
            'Les deux lignes contiennent <strong>exactement les mêmes nombres</strong> : $3$, $4$, $9$, $12$ et $15$. Seul leur ordre change.',
            'En désordre, la troisième position tombe sur $4$ ; une fois rangée, elle tombe sur $9$. La médiane est bien $9$.',
            'Le rangement n\'est pas une politesse de présentation : c\'est <strong>la définition même</strong> de la médiane.'
          ],
          reading: 'Prends l\'habitude de réécrire la série dans l\'ordre avant tout calcul, même si elle paraît déjà rangée. C\'est la seule protection contre cette erreur.',
          caption: 'La même série en désordre puis rangée : la valeur du milieu passe de $4$ à $9$.'
        }
      ],
      recap: [
        'Toujours ordonner la série avant de calculer médiane et quartiles.',
        '$n$ impair → la médiane est la valeur centrale ; $n$ pair → c\'est la moyenne des deux valeurs centrales.',
        'La médiane résiste aux valeurs extrêmes, contrairement à la moyenne.',
        '$IQR = Q_3 - Q_1$ mesure la dispersion des $50\\%$ centraux des données.'
      ],
      piege: 'Piège : la médiane d\'une série impaire est la valeur du milieu (pas la moyenne). Pour $n = 7$, la médiane est la $4^e$ valeur (pas la moyenne des $3^e$ et $4^e$).'
    },
    quiz: [
      {
        q: 'Quelle est la médiane de la série : $3, 5, 7, 9, 11$ ?',
        options: ['$6$', '$7$', '$5$', '$9$'],
        answer: 1,
        correction: 'Série déjà ordonnée, $n = 5$ (impair). La médiane est la $3^e$ valeur : $7$.'
      },
      {
        q: 'Pour la série $2, 4, 6, 8, 10, 12$, quelle est la médiane ?',
        options: ['$6$', '$7$', '$6{,}5$', '$8$'],
        answer: 1,
        correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{6 + 8}{2} = 7$.'
      },
      {
        q: 'Un élève calcule la médiane de la série $1, 3, 5, 7, 9, 11$ ($6$ valeurs). Il prend la $3^e$ valeur et écrit : médiane $= 5$. Quelle est son erreur ?',
        options: [
          'Pour $n$ pair, la médiane est la moyenne des $3^e$ et $4^e$ valeurs : $(5+7)/2 = 6$',
          'Il devait prendre la $4^e$ valeur : médiane $= 7$',
          'Il devait d\'abord trier la série dans l\'ordre croissant',
          'Il n\'y a pas d\'erreur, médiane $= 5$'
        ],
        answer: 0,
        correction: 'Pour une série de $n = 6$ valeurs (nombre pair), la médiane n\'est pas une valeur de la série : c\'est la moyenne des deux valeurs centrales, soit la $3^e$ et la $4^e$. Ici, médiane $= \\dfrac{5 + 7}{2} = 6$. Prendre uniquement la $3^e$ valeur est l\'erreur classique quand $n$ est pair.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* ELARGI LE 2026-09-13. Mesure d'avant : 3 moules, 9 enonces, AUCUNE
         banque pour le professeur.

         Surtout, un DEFAUT DE COUVERTURE que la mesure a fait apparaitre : le
         generateur tirait n dans [5, 7, 9], donc UNIQUEMENT des series de
         longueur impaire. Or la mediane d'une serie de longueur PAIRE — la
         demi-somme des deux valeurs centrales — est precisement la difficulte
         du chapitre, et l'evaluation la pose (question 2). Le chapitre evaluait
         donc une technique que ses exercices ne faisaient jamais travailler.

         Quatre taches maintenant : mediane impaire, mediane paire, premier ou
         troisieme quartile, et etendue. */
      generate() {
        const tache = pick(['mediane-impaire', 'mediane-paire', 'quartile', 'etendue']);
        const ctx = pick([
          { quoi: 'les notes obtenues à un contrôle', u: '' },
          { quoi: 'les températures relevées à midi, en degrés', u: '' },
          { quoi: 'les temps de trajet des élèves, en minutes', u: '' },
          { quoi: 'les nombres de livres empruntés en une semaine', u: '' },
          { quoi: 'les tailles relevées dans un groupe, en centimètres', u: '' }
        ]);

        if (tache === 'mediane-impaire') {
          const n = pick([5, 7, 9, 11]);
          const vals = Array.from({ length: n }, () => rand(1, 20)).sort((a, b) => a - b);
          const rang = Math.floor(n / 2) + 1;
          const med = vals[rang - 1];
          return {
            statement: 'Voici ' + ctx.quoi + ', déjà rangées dans l\'ordre croissant : $' + vals.join(', ') + '$. Calcule la médiane de cette série.',
            answer: med,
            tolerance: 0,
            unit: '',
            hint: 'La série compte $' + n + '$ valeurs, un nombre impair : la médiane est la valeur qui occupe la position centrale.',
            solution: [
              'La série compte $' + n + '$ valeurs, et $' + n + '$ est impair : il y a donc une valeur exactement au milieu.',
              'Cette position est la $' + rang + '^e$ : autant de valeurs avant qu\'apres.',
              'La médiane vaut donc $' + med + '$.'
            ]
          };
        }

        if (tache === 'mediane-paire') {
          const n = pick([6, 8, 10]);
          const vals = Array.from({ length: n }, () => rand(1, 20)).sort((a, b) => a - b);
          const g = vals[n / 2 - 1], d = vals[n / 2];
          const med = (g + d) / 2;
          return {
            statement: 'Voici ' + ctx.quoi + ', déjà rangées dans l\'ordre croissant : $' + vals.join(', ') + '$. Calcule la médiane de cette série.',
            answer: med,
            tolerance: 0.001,
            unit: '',
            hint: 'La série compte $' + n + '$ valeurs, un nombre pair : aucune valeur n\'est seule au milieu, il y en a deux.',
            solution: [
              'La série compte $' + n + '$ valeurs, et $' + n + '$ est pair : aucune valeur n\'occupe seule le centre.',
              'Les deux valeurs centrales sont la $' + (n / 2) + '^e$ et la $' + (n / 2 + 1) + '^e$, soit $' + g + '$ et $' + d + '$.',
              'La médiane est leur demi-somme : $\\dfrac{' + g + ' + ' + d + '}{2} = ' + fr(med) + '$. Elle peut ne pas figurer dans la série, et ce n\'est pas une erreur.'
            ]
          };
        }

        if (tache === 'quartile') {
          // Serie de taille multiple de 4 : les quartiles tombent alors sur des
          // valeurs de la serie, ce qui evite d'ajouter la difficulte de
          // l'interpolation a celle de la definition.
          const n = pick([8, 12]);
          const vals = Array.from({ length: n }, () => rand(1, 25)).sort((a, b) => a - b);
          const lequel = pick([1, 3]);
          const moitie = lequel === 1 ? vals.slice(0, n / 2) : vals.slice(n / 2);
          const m = moitie.length;
          const q = m % 2 ? moitie[(m - 1) / 2] : (moitie[m / 2 - 1] + moitie[m / 2]) / 2;
          return {
            statement: 'Voici ' + ctx.quoi + ', rangées dans l\'ordre croissant : $' + vals.join(', ') + '$. ' +
              'Calcule le ' + (lequel === 1 ? 'premier quartile $Q_1$, médiane de la moitié inférieure' : 'troisième quartile $Q_3$, médiane de la moitié supérieure') + '.',
            answer: q,
            tolerance: 0.001,
            unit: '',
            hint: 'Coupe d\'abord la série en deux moitiés de même effectif, puis cherche la médiane de la moitié ' + (lequel === 1 ? 'inférieure' : 'supérieure') + '.',
            solution: [
              'La série compte $' + n + '$ valeurs : chaque moitié en contient donc $' + (n / 2) + '$.',
              'Moitié ' + (lequel === 1 ? 'inférieure' : 'supérieure') + ' : $' + moitie.join(', ') + '$.',
              'Sa médiane est $' + fr(q) + '$, donc $Q_' + lequel + ' = ' + fr(q) + '$.'
            ]
          };
        }

        // tache === 'etendue'
        const n = pick([6, 7, 8, 9]);
        const vals = Array.from({ length: n }, () => rand(1, 30)).sort((a, b) => a - b);
        const e = vals[n - 1] - vals[0];
        return {
          statement: 'Voici ' + ctx.quoi + ' : $' + vals.join(', ') + '$. Calcule l\'étendue de cette série.',
          answer: e,
          tolerance: 0,
          unit: '',
          hint: 'L\'étendue mesure la dispersion : c\'est l\'écart entre la plus grande et la plus petite valeur.',
          solution: [
            'La plus grande valeur est $' + vals[n - 1] + '$, la plus petite est $' + vals[0] + '$.',
            'L\'étendue vaut $' + vals[n - 1] + ' - ' + vals[0] + ' = ' + e + '$.',
            'Attention : l\'étendue dit comment les valeurs sont <strong>dispersées</strong>, pas ou elles se situent. Deux séries de même étendue peuvent avoir des médianes très differentes.'
          ]
        };
      }
    },
    probleme: {
      context: 'Les salaires mensuels (en k€) dans une petite entreprise de $9$ employés sont : $1{,}5$ ; $1{,}8$ ; $2{,}0$ ; $2{,}1$ ; $2{,}3$ ; $2{,}5$ ; $2{,}8$ ; $3{,}0$ ; $12{,}0$ (le dirigeant).',
      tasks: [
        'Calculer la moyenne des salaires.',
        'Calculer la médiane.',
        'Laquelle est plus représentative de la majorité des employés ? Pourquoi ?'
      ],
      solutions: [
        'Somme : $1{,}5+1{,}8+2{,}0+2{,}1+2{,}3+2{,}5+2{,}8+3{,}0+12{,}0 = 30$ k€. Moyenne : $30/9 \\approx 3{,}33$ k€.',
        '$n = 9$ impair → $5^e$ valeur : $2{,}3$ k€.',
        'La médiane ($2{,}3$ k€) est plus représentative : la moyenne est tirée vers le haut par le salaire élevé du dirigeant ($12$ k€).'
      ],
      finalAnswer: 'Médiane $= 2{,}3$ k€, bien plus représentative que la moyenne $\\approx 3{,}33$ k€ biaisée par le dirigeant.'
    },

    evaluation: {
      title: 'Évaluation — Statistiques : médiane et quartiles',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer la médiane de la série : $4, 7, 9, 12, 15, 18, 21$.',
          type: 'numeric',
          answer: 12,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Série déjà ordonnée, $n = 7$ (impair). La médiane est la $4^e$ valeur : $12$.'
        },
        {
          statement: 'Calculer la médiane de la série : $3, 5, 8, 11, 14, 20$.',
          type: 'numeric',
          answer: 9.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: '$n = 6$ (pair). Médiane $= \\dfrac{x_3 + x_4}{2} = \\dfrac{8 + 11}{2} = 9{,}5$.'
        },
        {
          /* Q3 — « représenter ». La tâche consiste à situer une valeur dans une
             série ordonnée : l'élève ne calcule rien, il lit une POSITION. Le
             découpage de la série en moitiés, qui était donné dans l'ancien
             énoncé, a été retiré le 2026-09-13 — c'était précisément le travail
             de représentation demandé. */
          statement: 'Pour la série ordonnée $2, 5, 7, 9, 11, 14, 17, 20$, le premier quartile $Q_1$ est la médiane de la moitié inférieure de la série. Que vaut $Q_1$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Il faut d\'abord partager la série en deux moitiés de même effectif. Elle compte $8$ valeurs, donc chaque moitié en contient $4$ : la moitié inférieure est $\\{2, 5, 7, 9\\}$.<br/><br/>' +
            'On cherche ensuite la médiane de cette moitié. Elle compte $4$ valeurs, un nombre pair : la médiane est la demi-somme des deux valeurs centrales, $5$ et $7$.<br/><br/>' +
            '$Q_1 = \\dfrac{5 + 7}{2} = 6$. La valeur $6$ ne figure pas dans la série, et ce n\'est pas une erreur : un quartile, comme une médiane, peut tomber entre deux valeurs.'
        },
        {
          statement: 'Quel indicateur statistique n\'est pas affecté par les valeurs extrêmes ?',
          type: 'multiple-choice',
          options: ['La moyenne', 'La médiane', 'La somme', 'L\'etendue'],
          answer: 1,
          points: 2,
          correction: 'La médiane est robuste aux valeurs extrêmes car elle dépend uniquement de la position centrale, pas de la grandeur des valeurs. La moyenne, la somme et l\'étendue sont toutes sensibles aux valeurs extrêmes.'
        },
        {
          /* Q5 RÉÉCRITE le 2026-09-13 pour mobiliser « communiquer ». L'ancienne
             question était une soustraction dont l'énoncé fournissait $Q_1$ ET le
             découpage de la série : du calcul. Celle-ci demande de justifier le
             choix d'un indicateur devant une série à valeur extrême, ce qui est
             l'usage réel des statistiques et la raison d\'être de la médiane.

             Les nombres ont été choisis pour que la moyenne tombe JUSTE :
             somme $25\,200$ pour neuf salaires, soit exactement $2\,800$ euros.
             Une première version annonçait $2\,711$ euros à partir d'une somme
             fausse — erreur trouvée par le contrôle arithmétique de tous les
             énoncés réécrits, et invisible à la relecture puisque le chiffre
             était plausible. */
          statement: 'Dans une entreprise de $9$ salariés, les salaires mensuels sont $1\\,500$, $1\\,500$, $1\\,600$, $1\\,600$, $1\\,700$, $1\\,800$, $1\\,800$, $1\\,900$ et $11\\,800$ euros. Le directeur annonce « un salaire moyen de $2\\,800$ euros ». Quelle explication décrit le mieux la situation ?',
          type: 'multiple-choice',
          options: [
            'Le calcul du directeur est faux : la moyenne de ces salaires ne vaut pas $2\\,800$ euros.',
            'Le calcul est juste, mais la moyenne décrit mal cette série : le salaire de $11\\,800$ euros la tire vers le haut, si bien que huit salariés sur neuf gagnent moins que la « moyenne ». La médiane, $1\\,700$ euros, est ici plus représentative.',
            'La moyenne est toujours le meilleur indicateur, car elle tient compte de toutes les valeurs.',
            'Il aurait fallu calculer l\'étendue, qui est le seul indicateur fiable en présence d\'une valeur extrême.'
          ],
          answer: 1,
          points: 2,
          correction: 'Le calcul est correct : la somme des neuf salaires vaut $25\\,200$ euros, et $25\\,200 \\div 9 = 2\\,800$ euros exactement.<br/><br/>' +
            'Mais cette moyenne est trompeuse. Le salaire de $11\\,800$ euros, très éloigné des autres, la tire fortement vers le haut : <strong>huit salariés sur neuf</strong> gagnent moins que la moyenne annoncée.<br/><br/>' +
            'La médiane est la cinquième valeur de cette série de neuf, soit $1\\,700$ euros. Elle ne dépend que de la position centrale, jamais de la grandeur des extrêmes, et décrit donc bien mieux ce que gagne « un salarié de cette entreprise ».<br/><br/>' +
            'La proposition 4 se trompe d\'indicateur : l\'étendue, $11\\,800 - 1\\,500 = 10\\,300$ euros, est au contraire <strong>très</strong> sensible aux valeurs extrêmes — elle ne dépend que d\'elles.'
        }
      ]
    }
  }
);
