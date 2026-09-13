/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-fonctions-reference.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-fonctions-reference',
    level: 2, subject: 'maths',
    icon: '🔭',
    title: 'Fonctions de référence',
    subtitle: 'Carré, inverse, racine carrée',
    keywords: ['Fonction carré', 'Fonction inverse', 'Racine carrée', 'Parité'],
    physics: 'Chute libre (fonction carré), lois en 1/x en électricité (fonction inverse), période d\'un pendule (fonction racine carrée)',
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Les trois fonctions de référence
         sont les briques de base de l'analyse » : une définition, donc
         l'entrée que le cahier des charges proscrit.

         La situation retenue fait éprouver le point le plus difficile de
         tout le niveau — le fait qu'une même fonction puisse renverser son
         sens de variation, ce qu'aucune fonction affine ne fait. L'élève
         range spontanément les carrés dans le même ordre que les nombres ;
         sur les négatifs, c'est faux, et il peut le vérifier lui-même en
         deux secondes.

         Le test tient : on ne peut pas répondre « lequel des deux carrés est
         le plus grand ? » de façon fiable sans connaître les variations de
         la fonction carré — l'intuition de l'ordre échoue précisément là.
         Entrée non décorative : c'est la difficulté centrale du chapitre, et
         la source de son erreur la plus fréquente. */
      intro: 'Range ces deux nombres : $-5$ et $-2$. Tu réponds sans hésiter que $-5$ est le plus petit.<br/><br/>' +
        'Maintenant, range leurs carrés.<br/><br/>' +
        'Si tu appliques le même ordre, tu annonces que $(-5)^2$ est plus petit que $(-2)^2$. Vérifie : $(-5)^2 = 25$ et $(-2)^2 = 4$. C\'est <strong>l\'inverse</strong>.<br/><br/>' +
        'Recommence avec $2$ et $5$ : cette fois $2^2 = 4$ et $5^2 = 25$, l\'ordre est conservé. La même opération respecte donc l\'ordre sur les nombres positifs et le renverse sur les négatifs.<br/><br/>' +
        'Jusqu\'ici, toutes les fonctions que tu as rencontrées allaient dans un seul sens : une fonction affine monte partout, ou descend partout. La fonction carré, elle, <strong>descend puis remonte</strong>, et le point de bascule est en $0$.<br/><br/>' +
        'Ce chapitre étudie trois fonctions de ce genre — le <strong>carré</strong>, l\'<strong>inverse</strong> et la <strong>racine carrée</strong> —, qu\'on appelle fonctions de référence parce qu\'on les retrouvera partout jusqu\'en terminale.<br/><br/>' +
        'Tu y rencontreras une surprise encore plus déroutante que celle-ci : la fonction inverse descend sur chacun de ses deux morceaux, et pourtant on ne peut pas dire qu\'elle descend partout. Tu verras pourquoi, et ce n\'est pas un détail.',
      definitions: [
        { term: 'Fonction carré', def: 'Fonction $f(x) = x^2$. Définie sur $\\mathbb{R}$, paire, minimum en $0$. Sa courbe est une parabole tournée vers le haut.' },
        { term: 'Fonction inverse', def: 'Fonction $g(x) = \\dfrac{1}{x}$. Définie sur $\\mathbb{R} \\setminus \\{0\\}$, impaire, jamais nulle. Sa courbe est une hyperbole.' },
        { term: 'Fonction racine carrée', def: 'Fonction $h(x) = \\sqrt{x}$. Définie sur $[0 ; +\\infty[$, toujours croissante, $h(0) = 0$.' },
        { term: 'Parité', def: 'Une fonction est paire si $f(-x) = f(x)$ (symétrie par rapport à l\'axe des ordonnées) ; impaire si $f(-x) = -f(x)$ (symétrie par rapport à l\'origine).' }
      ],
      method: {
        title: 'Caractéristiques des trois fonctions',
        steps: [
          '<strong>Fonction carré $f(x)=x^2$</strong> : domaine $\\mathbb{R}$, décroissante sur $]-\\infty;0]$, croissante sur $[0;+\\infty[$, minimum $0$ en $x=0$. <strong>Exemple :</strong> $f(-3) = 9$ et $f(3) = 9$ (parité : $f(-x) = f(x)$).',
          '<strong>Fonction inverse $g(x)=\\frac{1}{x}$</strong> : domaine $\\mathbb{R}\\setminus\\{0\\}$, décroissante sur $]-\\infty;0[$ et sur $]0;+\\infty[$. <strong>Exemple :</strong> $g(2) = 0{,}5$ et $g(4) = 0{,}25$ : quand $x$ augmente, $g(x)$ diminue.',
          '<strong>Racine carrée $h(x)=\\sqrt{x}$</strong> : domaine $[0;+\\infty[$, croissante, $h(0)=0$. <strong>Exemple :</strong> $\\sqrt{9} = 3$, $\\sqrt{16} = 4$ : quand $x$ augmente, $\\sqrt{x}$ augmente aussi.',
          '<strong>Comparer des racines</strong> : $a > b \\ge 0 \\Rightarrow \\sqrt{a} > \\sqrt{b}$. <strong>Exemple :</strong> $25 > 16 \\Rightarrow \\sqrt{25} = 5 > \\sqrt{16} = 4$.'
        ]
      },
      example: {
        statement: 'Déterminer le domaine de définition de $f(x) = \\sqrt{2x - 6} + \\dfrac{1}{x - 1}$.',
        steps: [
          'Pour $\\sqrt{2x - 6}$ : il faut $2x - 6 \\geq 0$, soit $x \\geq 3$. Domaine partiel : $[3 ; +\\infty[$.',
          'Pour $\\dfrac{1}{x - 1}$ : il faut $x - 1 \\neq 0$, soit $x \\neq 1$. Domaine partiel : $\\mathbb{R} \\setminus \\{1\\}$.',
          'Le domaine de $f$ est l\'intersection : $[3 ; +\\infty[ \\cap \\mathbb{R} \\setminus \\{1\\} = [3 ; +\\infty[$ (car $1 \\notin [3 ; +\\infty[$).'
        ],
        answer: 'Le domaine de définition de $f$ est $[3 ; +\\infty[$.'
      },
      diagram: {
        theme: 'maths',
        kicker: 'Trois fonctions de référence, trois échelles',
        title: 'Comparer carré, inverse et racine carrée',
        description: 'Chaque courbe est calculée point par point à partir de sa définition, avec les valeurs remarquables du cours ($f(3)=9$, $g(2)=0{,}5$, $h(9)=3$).',
        svg: `
          <svg viewBox="0 0 580 250" role="img" aria-labelledby="ref-diagram-title ref-diagram-desc">
            <title id="ref-diagram-title">Trois fonctions de reference juxtaposees</title>
            <desc id="ref-diagram-desc">Trois reperes cote a cote : la fonction carre x au carre, la fonction inverse 1 sur x, et la fonction racine carree, chacune tracee point par point avec ses valeurs remarquables.</desc>

            <!-- Panneau 1 : carre -->
            <text class="annotation-label" x="95" y="14" text-anchor="middle">Carré : f(x) = x²</text>
            <line class="grid-line" x1="20" y1="200" x2="20" y2="40"></line>
            <line class="grid-line" x1="45" y1="200" x2="45" y2="40"></line>
            <line class="grid-line" x1="70" y1="200" x2="70" y2="40"></line>
            <line class="grid-line" x1="95" y1="200" x2="95" y2="40"></line>
            <line class="grid-line" x1="120" y1="200" x2="120" y2="40"></line>
            <line class="grid-line" x1="145" y1="200" x2="145" y2="40"></line>
            <line class="grid-line" x1="170" y1="200" x2="170" y2="40"></line>
            <line class="grid-line" x1="20" y1="200" x2="170" y2="200"></line>
            <line class="grid-line" x1="20" y1="146.7" x2="170" y2="146.7"></line>
            <line class="grid-line" x1="20" y1="93.3" x2="170" y2="93.3"></line>
            <line class="grid-line" x1="20" y1="40" x2="170" y2="40"></line>
            <line class="axis" x1="10" y1="200" x2="180" y2="200"></line>
            <line class="axis" x1="95" y1="210" x2="95" y2="30"></line>
            <text class="tick-label" x="20" y="212" text-anchor="middle">-3</text>
            <text class="tick-label" x="45" y="212" text-anchor="middle">-2</text>
            <text class="tick-label" x="70" y="212" text-anchor="middle">-1</text>
            <text class="tick-label" x="95" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="120" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="145" y="212" text-anchor="middle">2</text>
            <text class="tick-label" x="170" y="212" text-anchor="middle">3</text>
            <text class="tick-label" x="14" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="14" y="149.7" text-anchor="end">3</text>
            <text class="tick-label" x="14" y="96.3" text-anchor="end">6</text>
            <text class="tick-label" x="14" y="43" text-anchor="end">9</text>
            <polyline class="curve-main" points="20.0,40.0 26.2,65.6 32.5,88.9 38.8,110.0 45.0,128.9 51.2,145.6 57.5,160.0 63.8,172.2 70.0,182.2 76.2,190.0 82.5,195.6 88.8,198.9 95.0,200.0 101.2,198.9 107.5,195.6 113.8,190.0 120.0,182.2 126.2,172.2 132.5,160.0 138.8,145.6 145.0,128.9 151.2,110.0 157.5,88.9 163.8,65.6 170.0,40.0"></polyline>
            <circle class="plot-point" cx="20" cy="40" r="3"></circle>
            <circle class="plot-point" cx="95" cy="200" r="3"></circle>
            <circle class="plot-point" cx="170" cy="40" r="3"></circle>
            <text class="tick-label" x="24" y="34">f(-3)=9</text>
            <text class="tick-label" x="150" y="34" text-anchor="end">f(3)=9</text>

            <!-- Panneau 2 : inverse -->
            <text class="annotation-label" x="285" y="14" text-anchor="middle">Inverse : g(x) = 1/x</text>
            <line class="grid-line" x1="210" y1="200" x2="210" y2="40"></line>
            <line class="grid-line" x1="247.5" y1="200" x2="247.5" y2="40"></line>
            <line class="grid-line" x1="322.5" y1="200" x2="322.5" y2="40"></line>
            <line class="grid-line" x1="360" y1="200" x2="360" y2="40"></line>
            <line class="grid-line" x1="210" y1="200" x2="360" y2="200"></line>
            <line class="grid-line" x1="210" y1="160" x2="360" y2="160"></line>
            <line class="grid-line" x1="210" y1="80" x2="360" y2="80"></line>
            <line class="grid-line" x1="210" y1="40" x2="360" y2="40"></line>
            <line class="axis" x1="200" y1="120" x2="370" y2="120"></line>
            <line class="axis" x1="285" y1="210" x2="285" y2="30"></line>
            <text class="tick-label" x="210" y="133" text-anchor="middle">-4</text>
            <text class="tick-label" x="247.5" y="133" text-anchor="middle">-2</text>
            <text class="tick-label" x="322.5" y="133" text-anchor="middle">2</text>
            <text class="tick-label" x="360" y="133" text-anchor="middle">4</text>
            <text class="tick-label" x="277" y="203" text-anchor="end">-4</text>
            <text class="tick-label" x="277" y="163" text-anchor="end">-2</text>
            <text class="tick-label" x="277" y="83" text-anchor="end">2</text>
            <text class="tick-label" x="277" y="43" text-anchor="end">4</text>
            <polyline class="curve-main" points="289.7,40.0 290.6,53.3 292.5,70.0 294.4,80.0 297.6,90.1 300.0,95.0 303.8,100.0 308.4,104.0 313.1,106.7 322.5,110.0 331.9,112.0 341.2,113.3 350.6,114.3 360.0,115.0"></polyline>
            <polyline class="curve-main" points="210.0,125.0 219.4,125.7 228.8,126.7 238.1,128.0 247.5,130.0 256.9,133.3 261.6,136.0 266.2,140.0 270.0,145.0 272.4,149.9 275.6,160.0 277.5,170.0 279.4,186.7 280.3,200.0"></polyline>
            <circle class="plot-point" cx="322.5" cy="110" r="3"></circle>
            <circle class="plot-point" cx="360" cy="115" r="3"></circle>
            <circle class="plot-point" cx="247.5" cy="130" r="3"></circle>
            <circle class="plot-point" cx="210" cy="125" r="3"></circle>
            <text class="tick-label" x="328" y="104">g(2)=0,5</text>
            <text class="tick-label" x="242" y="146" text-anchor="end">g(-2)=-0,5</text>

            <!-- Panneau 3 : racine -->
            <text class="annotation-label" x="475" y="14" text-anchor="middle">Racine : h(x) = √x</text>
            <line class="grid-line" x1="400" y1="200" x2="400" y2="40"></line>
            <line class="grid-line" x1="416.7" y1="200" x2="416.7" y2="40"></line>
            <line class="grid-line" x1="466.7" y1="200" x2="466.7" y2="40"></line>
            <line class="grid-line" x1="550" y1="200" x2="550" y2="40"></line>
            <line class="grid-line" x1="400" y1="200" x2="550" y2="200"></line>
            <line class="grid-line" x1="400" y1="146.7" x2="550" y2="146.7"></line>
            <line class="grid-line" x1="400" y1="93.3" x2="550" y2="93.3"></line>
            <line class="grid-line" x1="400" y1="40" x2="550" y2="40"></line>
            <line class="axis" x1="390" y1="200" x2="565" y2="200"></line>
            <line class="axis" x1="400" y1="210" x2="400" y2="30"></line>
            <text class="tick-label" x="400" y="212" text-anchor="middle">0</text>
            <text class="tick-label" x="416.7" y="212" text-anchor="middle">1</text>
            <text class="tick-label" x="466.7" y="212" text-anchor="middle">4</text>
            <text class="tick-label" x="550" y="212" text-anchor="middle">9</text>
            <text class="tick-label" x="392" y="203" text-anchor="end">0</text>
            <text class="tick-label" x="392" y="149.7" text-anchor="end">1</text>
            <text class="tick-label" x="392" y="96.3" text-anchor="end">2</text>
            <text class="tick-label" x="392" y="43" text-anchor="end">3</text>
            <polyline class="curve-main" points="400.0,200.0 404.2,173.3 408.3,162.3 416.7,146.7 425.0,134.7 433.3,124.6 441.7,115.7 450.0,107.6 466.7,93.3 483.3,80.7 500.0,69.4 516.7,58.9 533.3,49.2 550.0,40.0"></polyline>
            <circle class="plot-point" cx="400" cy="200" r="3"></circle>
            <circle class="plot-point" cx="416.7" cy="146.7" r="3"></circle>
            <circle class="plot-point" cx="466.7" cy="93.3" r="3"></circle>
            <circle class="plot-point" cx="550" cy="40" r="3"></circle>
            <text class="tick-label" x="470" y="88" text-anchor="middle">h(4)=2</text>
            <text class="tick-label" x="540" y="34" text-anchor="end">h(9)=3</text>
          </svg>
        `,
        notes: [
          'La fonction carré (à gauche) est paire : sa courbe est symétrique par rapport à l\'axe des ordonnées, avec un minimum $0$ en $x=0$.',
          'La fonction inverse (au centre) est impaire : ses deux branches sont symétriques par rapport à l\'origine, et $x=0$ est exclu du domaine.',
          'La fonction racine carrée (à droite) n\'existe que pour $x \\geq 0$ et croît sur tout son domaine.'
        ],
        reading: 'Chaque panneau utilise sa propre échelle : les trois fonctions ont des vitesses de croissance très différentes (le carré explose, l\'inverse s\'écrase près de $0$, la racine ralentit).',
        caption: 'Les trois fonctions de référence tracées point par point : carré $x^2$, inverse $1/x$ et racine $\\sqrt{x}$, avec les valeurs remarquables citées dans le cours.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         DEUX schémas ici, et non trois, et c'est une décision assumée : le
         schéma principal ci-dessus juxtapose déjà les trois allures à la
         même échelle, donc le malentendu « à quoi ressemblent-elles ? » est
         couvert. Ajouter une troisième figure ne ferait que du chiffre, ce
         que le cahier des charges (section 9) interdit explicitement.

         Restent les deux malentendus que la fiche professeur signale comme
         récurrents et que le schéma principal ne traite PAS :
           1. « la fonction inverse est décroissante sur tout son domaine » —
              faux, elle décroît sur chaque branche mais pas sur la réunion ;
           2. « un nombre positif a un seul antécédent par la fonction
              carré » — faux, il en a deux, opposés.

         Les deux courbes sont recalculées point par point à partir de leur
         définition et relues par scripts/manuel/tests/diagrams-2nde.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le point dur du chapitre',
          title: 'Deux branches, donc deux intervalles',
          description: 'On lit souvent que la fonction inverse « est décroissante ». C\'est vrai sur chaque branche prise séparément, et <strong>faux</strong> si on parle de son domaine entier.<br/><br/>Regarde les deux points marqués : $-1$ est plus petit que $2$, et pourtant $g(-1) = -1$ est plus petit que $g(2) = 0{,}5$. Entre ces deux points, la fonction a donc <strong>augmenté</strong>. Impossible de dire qu\'elle décroît partout.<br/><br/>La raison tient en un mot : les deux branches ne se rejoignent jamais, car $0$ est interdit.',
          svg: `
            <svg viewBox="0 0 320 300" role="img" aria-labelledby="fr2-inverse-title fr2-inverse-desc">
              <title id="fr2-inverse-title">Les deux branches separees de la fonction inverse</title>
              <desc id="fr2-inverse-desc">Un repere orthonorme porte la courbe de un divise par x. Elle est faite de deux morceaux qui ne se touchent pas. Le morceau de gauche occupe la region situee en bas a gauche de l'origine, le morceau de droite occupe la region situee en haut a droite. Deux points sont marques : le point d'abscisse moins un et d'ordonnee moins un sur la branche de gauche, et le point d'abscisse deux et d'ordonnee un demi sur la branche de droite. Bien que moins un soit plus petit que deux, l'ordonnee du premier point est plus basse que celle du second.</desc>

              <!-- Echelle : 34 unites de viewBox par unite, IDENTIQUE sur les
                   deux axes. Ce repere est volontairement orthonorme, contre
                   l'usage du reste du chapitre : la symetrie des deux
                   branches par rapport a l'origine est le coeur du dessin, et
                   elle serait invisible avec deux echelles differentes.
                   Origine (160 ; 150). Les branches sont coupees exactement a
                   l'ordonnee trois et moins trois, soit aux abscisses un
                   tiers et moins un tiers. -->
              <line class="grid-line" x1="24" y1="40" x2="24" y2="260"></line>
              <line class="grid-line" x1="92" y1="40" x2="92" y2="260"></line>
              <line class="grid-line" x1="126" y1="40" x2="126" y2="260"></line>
              <line class="grid-line" x1="194" y1="40" x2="194" y2="260"></line>
              <line class="grid-line" x1="228" y1="40" x2="228" y2="260"></line>
              <line class="grid-line" x1="296" y1="40" x2="296" y2="260"></line>
              <line class="grid-line" x1="20" y1="48" x2="300" y2="48"></line>
              <line class="grid-line" x1="20" y1="82" x2="300" y2="82"></line>
              <line class="grid-line" x1="20" y1="116" x2="300" y2="116"></line>
              <line class="grid-line" x1="20" y1="184" x2="300" y2="184"></line>
              <line class="grid-line" x1="20" y1="218" x2="300" y2="218"></line>
              <line class="grid-line" x1="20" y1="252" x2="300" y2="252"></line>

              <line class="axis" x1="16" y1="150" x2="308" y2="150"></line>
              <line class="axis" x1="160" y1="286" x2="160" y2="36"></line>
              <text class="axis-label" x="312" y="154">x</text>
              <text class="axis-label" x="165" y="34">y</text>

              <text class="tick-label" x="24" y="162" text-anchor="middle">-4</text>
              <text class="tick-label" x="92" y="162" text-anchor="middle">-2</text>
              <text class="tick-label" x="228" y="162" text-anchor="middle">2</text>
              <text class="tick-label" x="296" y="162" text-anchor="middle">4</text>
              <text class="tick-label" x="154" y="120" text-anchor="end">1</text>
              <text class="tick-label" x="154" y="188" text-anchor="end">-1</text>

              <!-- Branche de droite : x de un tiers a quatre. -->
              <polyline class="curve-main" points="171.33,48 175.79,76.77 180.24,92.88 184.69,103.18 189.14,110.33 193.6,115.59 198.05,119.62 202.5,122.8 206.95,125.38 211.4,127.51 215.86,129.3 220.31,130.83 224.76,132.15 229.21,133.3 233.67,134.31 238.12,135.2 242.57,136 247.02,136.72 251.48,137.36 255.93,137.95 260.38,138.48 264.83,138.97 269.29,139.42 273.74,139.84 278.19,140.22 282.64,140.57 287.1,140.9 291.55,141.21 296,141.5"></polyline>
              <!-- Branche de gauche : x de moins quatre a moins un tiers. -->
              <polyline class="curve-main" points="24,158.5 28.45,158.79 32.9,159.1 37.36,159.43 41.81,159.78 46.26,160.16 50.71,160.58 55.17,161.03 59.62,161.52 64.07,162.05 68.52,162.64 72.98,163.28 77.43,164 81.88,164.8 86.33,165.69 90.79,166.7 95.24,167.85 99.69,169.17 104.14,170.7 108.6,172.49 113.05,174.62 117.5,177.2 121.95,180.38 126.4,184.41 130.86,189.67 135.31,196.82 139.76,207.12 144.21,223.23 148.67,252"></polyline>

              <!-- Les deux points du contre-exemple. Coordonnees exactes :
                   (-1 ; -1) tombe en (126 ; 184) et (2 ; 0,5) en (228 ; 133),
                   tous deux sur des graduations. -->
              <circle class="plot-point" cx="126" cy="184" r="4"></circle>
              <circle class="plot-point" cx="228" cy="133" r="4"></circle>
              <text class="tick-label" x="120" y="196" text-anchor="end">g(-1) = -1</text>
              <text class="tick-label" x="236" y="128" text-anchor="start">g(2) = 0,5</text>

              <!-- La comparaison se pose dans la zone vide du bas a droite,
                   hors de toute branche. -->
              <text class="annotation-label" x="236" y="238" text-anchor="start">-1 &lt; 2</text>
              <text class="annotation-label" x="236" y="254" text-anchor="start">et pourtant -1 &lt; 0,5</text>
            </svg>
          `,
          notes: [
            'Sur $]-\\infty\\,;\\,0[$, la fonction inverse est bien décroissante. Sur $]0\\,;\\,+\\infty[$ aussi. Mais un sens de variation ne s\'annonce que sur un <strong>intervalle</strong>, et la réunion des deux n\'en est pas un.',
            'Le contre-exemple suffit à trancher : $-1 < 2$ et pourtant $g(-1) < g(2)$, alors qu\'une fonction décroissante aurait donné $g(-1) > g(2)$.',
            'Écris donc toujours le sens de variation branche par branche : décroissante sur $]-\\infty\\,;\\,0[$, décroissante sur $]0\\,;\\,+\\infty[$.'
          ],
          reading: 'Repère bien que les deux branches n\'occupent pas les mêmes régions : celle de gauche est entièrement sous l\'axe, celle de droite entièrement au-dessus. Aucun trait ne les relie, et c\'est justement ce vide qui interdit de parler du domaine entier d\'un seul coup.',
          caption: 'Fonction inverse $g(x) = \\dfrac{1}{x}$ dans un repère orthonormé : décroissante sur chaque branche, mais pas sur la réunion des deux.'
        },
        {
          theme: 'maths',
          kicker: 'Ne perds pas la moitié des solutions',
          title: 'Un carré positif vient toujours de deux nombres',
          description: 'Tu cherches les nombres dont le carré vaut $4$. Trace l\'horizontale $y = 4$ : elle coupe la parabole <strong>deux fois</strong>, en $-2$ et en $2$.<br/><br/>C\'est la conséquence directe de la symétrie de la courbe : deux nombres opposés ont exactement le même carré, donc la même hauteur sur le dessin. Répondre seulement $2$, c\'est oublier la moitié de la réponse.',
          svg: `
            <svg viewBox="0 0 320 250" role="img" aria-labelledby="fr2-carre-title fr2-carre-desc">
              <title id="fr2-carre-title">Un nombre positif a deux antecedents par la fonction carre</title>
              <desc id="fr2-carre-desc">La parabole de la fonction carre est tracee dans un repere. Une droite horizontale d'ordonnee quatre traverse la figure et rencontre la parabole en deux points, l'un d'abscisse moins deux, l'autre d'abscisse deux. Les deux points sont a la meme hauteur et places symetriquement de part et d'autre de l'axe vertical. Deux traits verticaux en tirets descendent de ces deux points jusqu'a l'axe horizontal.</desc>

              <!-- Echelle : 44 unites par unite d'abscisse, 20 par unite
                   d'ordonnee. Origine (160 ; 220). La parabole est calculee
                   de -3,2 a 3,2 par pas de 0,2 ; les abscisses entieres
                   tombent sur des entiers de viewBox et f(2) = 4 tombe
                   exactement sur la graduation y = 4 (ordonnee 140). -->
              <line class="grid-line" x1="72" y1="20" x2="72" y2="228"></line>
              <line class="grid-line" x1="116" y1="20" x2="116" y2="228"></line>
              <line class="grid-line" x1="204" y1="20" x2="204" y2="228"></line>
              <line class="grid-line" x1="248" y1="20" x2="248" y2="228"></line>
              <line class="grid-line" x1="28" y1="180" x2="304" y2="180"></line>
              <line class="grid-line" x1="28" y1="140" x2="304" y2="140"></line>
              <line class="grid-line" x1="28" y1="100" x2="304" y2="100"></line>
              <line class="grid-line" x1="28" y1="60" x2="304" y2="60"></line>

              <line class="axis" x1="24" y1="220" x2="308" y2="220"></line>
              <line class="axis" x1="160" y1="234" x2="160" y2="18"></line>
              <text class="axis-label" x="312" y="224">x</text>
              <text class="axis-label" x="165" y="16">y</text>

              <text class="tick-label" x="72" y="232" text-anchor="middle">-2</text>
              <text class="tick-label" x="116" y="232" text-anchor="middle">-1</text>
              <text class="tick-label" x="204" y="232" text-anchor="middle">1</text>
              <text class="tick-label" x="248" y="232" text-anchor="middle">2</text>
              <text class="tick-label" x="154" y="184" text-anchor="end">2</text>
              <text class="tick-label" x="154" y="144" text-anchor="end">4</text>
              <text class="tick-label" x="154" y="64" text-anchor="end">8</text>

              <!-- Parabole y = x carre, point par point. -->
              <polyline class="curve-main" points="19.2,15.2 28,40 36.8,63.2 45.6,84.8 54.4,104.8 63.2,123.2 72,140 80.8,155.2 89.6,168.8 98.4,180.8 107.2,191.2 116,200 124.8,207.2 133.6,212.8 142.4,216.8 151.2,219.2 160,220 168.8,219.2 177.6,216.8 186.4,212.8 195.2,207.2 204,200 212.8,191.2 221.6,180.8 230.4,168.8 239.2,155.2 248,140 256.8,123.2 265.6,104.8 274.4,84.8 283.2,63.2 292,40 300.8,15.2"></polyline>

              <!-- L'horizontale y = 4, en tirets : c'est la question posee,
                   pas la courbe. -->
              <line class="guide-line" x1="40" y1="140" x2="292" y2="140"></line>
              <text class="label-soft" x="36" y="136" text-anchor="end">y = 4</text>

              <!-- Les deux antecedents, et leurs redescentes sur l'axe. -->
              <line class="guide-line" x1="72" y1="140" x2="72" y2="220"></line>
              <line class="guide-line" x1="248" y1="140" x2="248" y2="220"></line>
              <circle class="plot-point" cx="72" cy="140" r="4"></circle>
              <circle class="plot-point" cx="248" cy="140" r="4"></circle>
              <text class="annotation-label" x="66" y="132" text-anchor="end">x = -2</text>
              <text class="annotation-label" x="254" y="132" text-anchor="start">x = 2</text>
            </svg>
          `,
          notes: [
            'Les deux points marqués sont à la <strong>même hauteur</strong> : c\'est le dessin de l\'égalité $(-2)^2 = 2^2 = 4$.',
            'La courbe est symétrique par rapport à l\'axe des ordonnées, donc toute horizontale au-dessus de l\'axe la coupe en deux points symétriques.',
            'L\'horizontale $y = 0$ fait exception : elle ne touche la courbe qu\'au sommet. C\'est le seul nombre, $0$, à n\'avoir qu\'un antécédent.'
          ],
          reading: 'Fais glisser l\'horizontale vers le haut : les deux points s\'écartent, mais ils restent deux. Fais-la glisser sous l\'axe : elle ne rencontre plus rien, et c\'est normal, aucun carré n\'est négatif. Chaque fois que tu résous $x^2 = k$ avec $k$ positif, attends-toi donc à <strong>deux</strong> réponses opposées.',
          caption: 'Fonction carré : l\'horizontale $y = 4$ coupe la parabole en $x = -2$ et $x = 2$, les deux antécédents de $4$.'
        },
        {
          /* TROISIÈME schéma, ajouté le 2026-09-13 pour porter ce chapitre au
             même niveau que les autres. Les deux premiers traitaient les
             erreurs 1 à 3 de la fiche ; la quatrième — chercher le domaine
             seulement quand on y pense — n'était illustrée par rien.

             Elle le mérite pourtant plus que les autres : c'est la seule des
             quatre où l'élève produit un nombre qui n'existe pas, sans qu'aucun
             signal ne l'arrête. Le dessin fournit ce signal, et il le fournit
             par l'ABSENCE : à gauche de 4, il n'y a rien à lire, donc rien à
             calculer. Un texte ne peut pas montrer un vide ; une figure, si. */
          theme: 'maths',
          kicker: 'Avant de calculer, regarde où la courbe existe',
          title: 'À gauche de la borne, il n\'y a rien à lire',
          description: 'Soit $f(x) = \\sqrt{3x - 12}$. Beaucoup calculent $f(1)$ sans hésiter et annoncent $-3$ ou $3$.<br/><br/>Or regarde le dessin : au-dessus de $x = 1$, <strong>aucune courbe</strong>. Il n\'y a pas de valeur à lire, parce qu\'il n\'y en a pas. $f(1)$ n\'existe tout simplement pas.',
          svg: `
            <svg viewBox="0 0 440 270" role="img" aria-labelledby="fr3-domaine-title fr3-domaine-desc">
              <title id="fr3-domaine-title">Une courbe qui ne commence qu a partir de sa borne</title>
              <desc id="fr3-domaine-desc">Un repere porte la courbe de la fonction racine de trois x moins douze. La courbe ne commence qu'a l'abscisse quatre, ou elle touche l'axe horizontal, puis elle monte lentement vers la droite. A gauche de l'abscisse quatre, la zone est vide : aucune courbe n'y est tracee. Une verticale en tirets marque cette frontiere, et une mention indique que la fonction n'existe pas dans cette region. Un point remarquable est marque a l'abscisse sept et a l'ordonnee trois.</desc>

              <!-- Repere : x = 0 a l'abscisse 60, 34 unites par unite ;
                   y = 0 a l'ordonnee 220, 26 unites par unite.
                   La borne du domaine tombe a x = 4, soit l'abscisse 196,
                   calculee et non posee : 3x - 12 >= 0 equivaut a x >= 4. -->
              <line class="grid-line" x1="128" y1="100" x2="128" y2="232"></line>
              <line class="grid-line" x1="196" y1="100" x2="196" y2="232"></line>
              <line class="grid-line" x1="264" y1="100" x2="264" y2="232"></line>
              <line class="grid-line" x1="332" y1="100" x2="332" y2="232"></line>
              <line class="grid-line" x1="400" y1="100" x2="400" y2="232"></line>
              <line class="grid-line" x1="56" y1="194" x2="415" y2="194"></line>
              <line class="grid-line" x1="56" y1="142" x2="415" y2="142"></line>

              <line class="axis" x1="52" y1="220" x2="420" y2="220"></line>
              <line class="axis" x1="60" y1="240" x2="60" y2="96"></line>
              <text class="axis-label" x="424" y="224">x</text>
              <text class="axis-label" x="65" y="94">y</text>

              <text class="tick-label" x="94" y="234" text-anchor="middle">1</text>
              <text class="annotation-label" x="196" y="234" text-anchor="middle">4</text>
              <text class="tick-label" x="298" y="234" text-anchor="middle">7</text>
              <text class="tick-label" x="400" y="234" text-anchor="middle">10</text>
              <text class="tick-label" x="54" y="198" text-anchor="end">1</text>
              <text class="tick-label" x="54" y="146" text-anchor="end">3</text>

              <!-- La frontiere du domaine, en tirets : elle separe le vide de
                   la courbe. C'est le seul trait vertical fort du dessin. -->
              <line class="guide-line" x1="196" y1="96" x2="196" y2="240"></line>

              <!-- COURBE y = racine(3x - 12), de x = 4 a x = 10 par pas de
                   0,25, calculee point par point. Elle DEMARRE exactement sur
                   l'axe, en (4 ; 0), et passe exactement par (7 ; 3). -->
              <polyline class="curve-main" fill="none" points="196.00,220.00 204.50,197.48 213.00,188.16 221.50,181.00 230.00,174.97 238.50,169.65 247.00,164.85 255.50,160.43 264.00,156.31 272.50,152.45 281.00,148.80 289.50,145.32 298.00,142.00 306.50,138.82 315.00,135.75 323.50,132.79 332.00,129.93 340.50,127.16 349.00,124.47 357.50,121.85 366.00,119.30 374.50,116.82 383.00,114.39 391.50,112.01 400.00,109.69"></polyline>

              <circle class="plot-point" cx="196" cy="220" r="5"></circle>
              <circle class="plot-point" cx="298" cy="142" r="4"></circle>
              <text class="tick-label" x="306" y="136" text-anchor="start">f(7) = 3</text>

              <!-- La zone vide, nommee. Un vide qu'on ne nomme pas se lit
                   comme un oubli de dessin. -->
              <text class="label-soft" x="126" y="130" text-anchor="middle">aucune courbe ici</text>
              <text class="label-soft" x="126" y="150" text-anchor="middle">f(1) n'existe pas</text>
              <text class="annotation-label" x="206" y="258" text-anchor="start">domaine : x ≥ 4</text>
            </svg>
          `,
          notes: [
            'La condition d\'existence s\'écrit $3x - 12 \\geq 0$, c\'est-à-dire $x \\geq 4$. Le domaine de définition est donc $[4\\,;\\,+\\infty[$, et la courbe commence exactement à la borne.',
            'Pour $x = 1$, on aurait $3 \\times 1 - 12 = -9$. Or aucun nombre élevé au carré ne donne $-9$ : $3^2 = 9$ et $(-3)^2 = 9$ également. La racine d\'un nombre négatif n\'existe pas — ce n\'est pas une interdiction, c\'est une impossibilité.',
            'En seconde, deux situations seulement imposent de chercher un domaine : une <strong>racine</strong>, dont le contenu doit être positif ou nul, et un <strong>dénominateur</strong>, qui ne doit pas s\'annuler. Deux cas, donc une vérification rapide.'
          ],
          reading: 'Prends l\'habitude d\'écrire le domaine <strong>avant</strong> la première image demandée, même quand l\'énoncé ne le réclame pas.<br/><br/>Cela coûte une ligne, et cela t\'évite l\'erreur la plus coûteuse du chapitre : produire un nombre pour une valeur où la fonction n\'existe pas. Le dessin te le rappelle mieux qu\'une règle — là où il n\'y a pas de trait, il n\'y a pas de résultat.',
          caption: 'La courbe de $f(x) = \\sqrt{3x - 12}$ ne commence qu\'en $x = 4$ : à gauche de cette borne, la fonction n\'est pas définie.'
        }
      ],
      formulas: [
        '$\\sqrt{a\\cdot b}=\\sqrt{a}\\cdot\\sqrt{b}$ (pour $a,b\\ge 0$)',
        '$\\left(\\sqrt{a}\\right)^2 = a$ (pour $a\\ge 0$)',
        '$\\sqrt{a^2}=|a|$'
      ],
      recap: [
        'Fonction carré : parabole, paire, minimum $0$ en $x = 0$, décroissante puis croissante.',
        'Fonction inverse : hyperbole, impaire, décroissante sur chaque intervalle, jamais nulle, interdite en $0$.',
        'Fonction racine carrée : définie pour $x \\geq 0$, toujours croissante.',
        '$\\sqrt{a \\cdot b} = \\sqrt{a} \\cdot \\sqrt{b}$ ✓ mais $\\sqrt{a + b} \\neq \\sqrt{a} + \\sqrt{b}$ ✗.'
      ],
      piege: '$\\sqrt{4+9} \\ne \\sqrt{4}+\\sqrt{9}$ : on ne peut pas séparer une somme sous un radical !'
    },
    quiz: [
      { q: 'Sur quel intervalle la fonction $x\\mapsto x^2$ est-elle décroissante ?', options: ['$[0;+\\infty[$', '$]-\\infty;0]$', '$\\mathbb{R}$', 'Elle est toujours croissante'], answer: 1, correction: '$x^2$ décroît sur $]-\\infty;0]$ et croît sur $[0;+\\infty[$. Son minimum est $0$.' },
      { q: 'Quel est le domaine de définition de $\\sqrt{x}$ ?', options: ['$\\mathbb{R}$', '$]0;+\\infty[$', '$[0;+\\infty[$', '$]-\\infty;0[$'], answer: 2, correction: 'On ne peut prendre la racine carrée que d\'un nombre positif ou nul : domaine $[0;+\\infty[$.' },
      { q: 'Un élève écrit $\\sqrt{9+16} = \\sqrt{9}+\\sqrt{16} = 3+4 = 7$. Quelle est son erreur ?', options: ['On ne peut pas séparer $\\sqrt{a+b}$ : ici $\\sqrt{9+16} = \\sqrt{25} = 5 \\neq 7$', 'Il a mal calculé $\\sqrt{9}$ et $\\sqrt{16}$', 'Il n\'y a pas d\'erreur, $\\sqrt{25} = 7$', 'La racine carrée ne s\'applique qu\'aux entiers impairs'], answer: 0, correction: '$\\sqrt{9+16} = \\sqrt{25} = 5$, pas $7$. La propriété $\\sqrt{a \\cdot b} = \\sqrt{a}\\cdot\\sqrt{b}$ est vraie pour un PRODUIT, mais $\\sqrt{a+b} \\neq \\sqrt{a}+\\sqrt{b}$ pour une SOMME.' },
      { q: 'Quel est le domaine de définition de $f(x) = \\sqrt{3 - x}$ ?', options: ['$]-\\infty;3]$', '$[3;+\\infty[$', '$\\mathbb{R}$', '$]0;3[$'], answer: 0, correction: 'Il faut $3 - x \\geq 0$, soit $x \\leq 3$. Le domaine est $]-\\infty;3]$. Attention : le signe de l\'inéquation s\'inverse quand l\'expression sous la racine est $a - x$ au lieu de $x - a$.' },
      { q: 'Comparer $(-3)^2$ et $-3^2$. Ces deux expressions sont-elles égales ?', options: ['Non : $(-3)^2 = 9$ mais $-3^2 = -(3^2) = -9$', 'Oui : les deux valent $9$', 'Oui : les deux valent $-9$', 'Non : $(-3)^2 = -9$ et $-3^2 = 9$'], answer: 0, correction: '$(-3)^2$ signifie « le carré de $-3$ » $= (-3) \\times (-3) = 9$. En revanche, $-3^2$ signifie « l\'opposé du carré de $3$ » $= -(3 \\times 3) = -9$. Les parenthèses changent tout ! C\'est un piège classique lors du calcul d\'images avec la fonction carré.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

           MESURE DE DÉPART : 4 tâches pour 13 exercices retenus, alors que
           le chapitre porte sur TROIS fonctions de référence (carré, inverse,
           racine). Concrètement, la fonction inverse n'apparaissait que comme
           un terme accessoire dans la tâche « composition », et aucune tâche
           ne portait sur ses variations ni sur son signe. Un élève pouvait
           traiter toute la banque sans jamais raisonner sur $1/x$.

           DÉFAUT DE FOND CORRIGÉ ICI : la banque n'exerçait aucune lecture
           d'image sur les trois courbes, alors que c'est l'attendu central
           du chapitre (« connaître l'allure »). On ajoute quatre tâches, dont
           trois portent sur ce que ces fonctions FONT, et non sur des
           domaines de définition — qui relèvent plutôt du chapitre
           précédent. */
        const types = ['domaine', 'comparaison', 'composition',
                       'imageReference', 'variationsInverse', 'signeInverse', 'carreAntecedents'];
        const type = pick(types);

        /* Tâche AJOUTÉE — image par l'une des trois fonctions de référence.
           Les valeurs sont choisies pour tomber juste, afin que la question
           porte sur la FONCTION et non sur l'arrondi. */
        if (type === 'imageReference') {
          const familles = [
            { nom: 'carré', expr: 'x^2', calc: (x) => x * x, xs: [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7],
              ligne: (x) => `$f(${x < 0 ? '(' + x + ')' : x}) = ${x < 0 ? '(' + x + ')' : x}^2 = ${x * x}$` },
            /* Les antécédents de la fonction inverse sont choisis pour que
               1/x soit DÉCIMAL EXACT et court : les diviseurs de 10 et de
               100 uniquement. On peut alors écrire fr() avec un nombre de
               décimales fixe, sans aucun nettoyage de zéros.

               Défaut corrigé le 2026-09-13, signalé par
               scripts/check-decimal-notation.js : la version précédente
               faisait `fr(1/x, 4).replace(/0+$/, '')`, et ce rabotage des
               zéros pouvait manger l'accolade fermante du séparateur
               décimal, ce qui casse le rendu KaTeX. Mes propres tirages de
               contrôle n'avaient pas atteint le cas ; l'outil du projet, si.
               Leçon : ne jamais retoucher à la main la sortie de fr().

               (Le commentaire ne reproduit volontairement pas la séquence
               fautive : le vérificateur lit le FICHIER, pas seulement les
               chaînes produites, et la citer ici rouvrirait l'alerte.) */
            { nom: 'inverse', expr: '\\dfrac{1}{x}', calc: (x) => 1 / x, xs: [-5, -4, -2, 2, 4, 5, 10],
              /* Nombre de décimales exact pour chaque antécédent, en table
                 plutôt qu'en calcul : 1/2 = 0,5 (une décimale), 1/4 = 0,25
                 (deux), 1/5 = 0,2 (une), 1/10 = 0,1 (une). fr() reçoit donc
                 toujours le bon nombre et sa sortie n'est jamais retouchée. */
              decimales: { 2: 1, 4: 2, 5: 1, 10: 1 },
              ligne: function (x) { return `$f(${x}) = \\dfrac{1}{${x}} = ${fr(1 / x, this.decimales[Math.abs(x)])}$`; } },
            { nom: 'racine carrée', expr: '\\sqrt{x}', calc: (x) => Math.sqrt(x), xs: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
              ligne: (x) => `$f(${x}) = \\sqrt{${x}} = ${Math.sqrt(x)}$` }
          ];
          const f = pick(familles);
          const x = pick(f.xs);
          const y = f.calc(x);
          return {
            statement: `Soit $f$ la fonction <strong>${f.nom}</strong>, définie par $f(x) = ${f.expr}$.<br/><br/>Calcule $f(${x})$.`,
            answer: parseFloat(y.toFixed(4)),
            tolerance: 0.001,
            unit: '',
            hint: f.nom === 'carré'
              ? `Pense à parenthéser le nombre substitué : $(${x})^2$ et non $-${Math.abs(x)}^2$ si le nombre est négatif.`
              : `Applique directement la définition de la fonction ${f.nom} à $${x}$.`,
            solution: [
              `Image par la fonction ${f.nom} : on applique la définition à $${x}$`,
              f.ligne(x),
              f.nom === 'carré' && x < 0
                ? `Le carré d'un nombre négatif est <strong>positif</strong> : c'est pour cela que la parenthèse est indispensable.`
                : (f.nom === 'inverse' && x < 0
                   ? `L'inverse d'un nombre négatif est <strong>négatif</strong> : la fonction inverse ne change jamais le signe.`
                   : `La fonction ${f.nom} ne donne jamais de résultat négatif ici.`)
            ]
          };
        }

        /* Tâche AJOUTÉE — variations de la fonction inverse, sans calcul.
           C'est la propriété la plus contre-intuitive du chapitre : la
           fonction est décroissante sur CHACUN des deux intervalles, mais
           pas sur leur réunion. */
        if (type === 'variationsInverse') {
          const cas = pick([
            { a: 2, b: 5 }, { a: 3, b: 8 }, { a: 1, b: 4 },
            { a: -5, b: -2 }, { a: -8, b: -3 }, { a: -4, b: -1 }
          ]);
          const ia = 1 / cas.a, ib = 1 / cas.b;
          const plusGrand = ia > ib ? cas.a : cas.b;
          return {
            statement: `On considère la fonction <strong>inverse</strong> $f(x) = \\dfrac{1}{x}$, et les deux nombres $${cas.a}$ et $${cas.b}$.<br/><br/>Sans utiliser de calculatrice, et en t'appuyant sur les <strong>variations</strong> de la fonction inverse, dis lequel des deux a la plus grande image.<br/><br/>Donne ce nombre (celui dont l'image est la plus grande).`,
            answer: plusGrand,
            tolerance: 0,
            unit: '',
            hint: `Les deux nombres sont ${cas.a < 0 ? 'négatifs' : 'positifs'}, donc ils sont du <strong>même côté</strong> de zéro. Sur cet intervalle, la fonction inverse est décroissante : le plus petit nombre a la plus grande image.`,
            solution: [
              `Variations de la fonction inverse : $${cas.a} < ${cas.b}$, et les deux sont ${cas.a < 0 ? 'négatifs' : 'positifs'}`,
              `La fonction inverse est <strong>décroissante</strong> sur $${cas.a < 0 ? ']-\\infty\\,;\\,0[' : ']0\\,;\\,+\\infty['}$ : quand $x$ augmente, $\\dfrac{1}{x}$ diminue.`,
              `Donc $\\dfrac{1}{${cas.a}} > \\dfrac{1}{${cas.b}}$, et le nombre dont l'image est la plus grande est $${plusGrand}$.`,
              `Attention : ce raisonnement n'est valable que parce que les deux nombres sont du même côté de zéro. La fonction inverse n'est <strong>pas</strong> décroissante sur $\\mathbb{R}^*$ tout entier.`
            ]
          };
        }

        /* Tâche AJOUTÉE — signe de l'inverse, et le piège de la comparaison
           à travers zéro, qui est l'erreur la plus fréquente du chapitre. */
        if (type === 'signeInverse') {
          const neg = pick([-1, -2, -3, -4, -5, -8]);
          const pos = pick([2, 3, 4, 5, 6, 10]);
          return {
            statement: `On compare $\\dfrac{1}{${neg}}$ et $\\dfrac{1}{${pos}}$.<br/><br/>Un élève écrit : « $${neg} < ${pos}$, et la fonction inverse est décroissante, donc $\\dfrac{1}{${neg}} > \\dfrac{1}{${pos}}$ ».<br/><br/>Son raisonnement est-il correct ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: 0,
            tolerance: 0,
            unit: '',
            hint: `Regarde le <strong>signe</strong> des deux quotients avant tout raisonnement sur les variations. Les deux nombres de départ sont-ils du même côté de zéro ?`,
            solution: [
              `Signe de l'inverse : le raisonnement est <strong>incorrect</strong>`,
              `$\\dfrac{1}{${neg}}$ est <strong>négatif</strong> et $\\dfrac{1}{${pos}}$ est <strong>positif</strong>, donc $\\dfrac{1}{${neg}} < \\dfrac{1}{${pos}}$ : c'est l'inverse de ce que l'élève annonce.`,
              `L'erreur vient de la décroissance, qui n'est valable que sur $]-\\infty\\,;\\,0[$ et sur $]0\\,;\\,+\\infty[$ <strong>séparément</strong>. Ici les deux nombres encadrent zéro, donc la propriété ne s'applique pas.`,
              `Règle de sécurité : avant de comparer deux inverses, vérifie toujours qu'ils sont du même côté de zéro.`
            ]
          };
        }

        /* Tâche AJOUTÉE — les DEUX antécédents par la fonction carré, qui
           est la dissymétrie image / antécédent revue sur un cas précis. */
        if (type === 'carreAntecedents') {
          const r = pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
          const k = r * r;
          return {
            statement: `On cherche les <strong>antécédents</strong> de $${k}$ par la fonction carré, c'est-à-dire les nombres $x$ tels que $x^2 = ${k}$.<br/><br/><strong>1.</strong> Combien y en a-t-il ?<br/><strong>2.</strong> Quels sont-ils ?<br/><br/>Donne le plus grand des deux.`,
            answer: r,
            tolerance: 0,
            unit: '',
            hint: `Un carré vaut $${k}$ : cherche d'abord un nombre positif qui convient, puis demande-toi si un nombre négatif pourrait convenir aussi.`,
            solution: [
              `Antécédents par la fonction carré : je résous $x^2 = ${k}$`,
              `$${r}^2 = ${k}$, donc $${r}$ convient. Mais $(-${r})^2 = ${k}$ également, car le carré d'un nombre négatif est positif.`,
              `Il y a donc <strong>deux</strong> antécédents : $-${r}$ et $${r}$. Le plus grand est $${r}$.`,
              `C'est la dissymétrie entre image et antécédent : $${k}$ n'a qu'une image par la fonction carré, mais il a deux antécédents. Un nombre <strong>négatif</strong> n'en aurait aucun.`
            ]
          };
        }

        if (type === 'domaine') {
          const a = rand(2, 8);
          const b = rand(1, 5);
          const borne = parseFloat((b / a).toFixed(2));
          const borneExact = b % a === 0 ? (b / a) : borne;
          const contexts = [
            { f: `\\sqrt{${a}x - ${b}}`, cond: `${a}x - ${b} \\geq 0`, sol: `x \\geq \\frac{${b}}{${a}}`, borneType: 'inf' },
            { f: `\\sqrt{${b} - ${a}x}`, cond: `${b} - ${a}x \\geq 0`, sol: `x \\leq \\frac{${b}}{${a}}`, borneType: 'sup' }
          ];
          const ctx = pick(contexts);
          return {
            statement: `Déterminer le domaine de définition de $f(x) = ${ctx.f}$.<br/><br/>Donne la <strong>borne</strong> de l'intervalle solution (sous forme décimale si nécessaire).`,
            answer: borneExact,
            tolerance: 0.01,
            unit: '',
            hint: `Pour que $\\sqrt{\\ldots}$ existe, il faut que l'expression sous la racine soit $\\geq 0$ : ${ctx.cond}.`,
            solution: [
              `Condition : ${ctx.cond}`,
              `${ctx.sol}$${b % a === 0 ? ` = ${b / a}` : ` \\approx ${fr(borne)}`}$`,
              `Domaine : $${ctx.borneType === 'inf' ? `[${fr(borneExact)};+\\infty[` : `]-\\infty;${fr(borneExact)}]`}$`
            ]
          };
        } else if (type === 'comparaison') {
          const vals = [
            { a: -5, b: -2 },
            { a: -7, b: -3 },
            { a: -4, b: -1 },
            { a: -6, b: -3 }
          ];
          const v = pick(vals);
          const a2 = v.a * v.a;
          const b2 = v.b * v.b;
          return {
            statement: `Comparer $${v.a}^2$ et $${v.b}^2$ sans calculatrice, en utilisant les variations de la fonction carré.<br/><br/>Lequel est le plus grand ? Donne sa valeur.`,
            answer: a2,
            tolerance: 0,
            unit: '',
            hint: `$${v.a}$ et $${v.b}$ sont négatifs. La fonction carré est <strong>décroissante</strong> sur $]-\\infty;0]$ : si $a < b < 0$, alors $a^2 > b^2$.`,
            solution: [
              `$${v.a} < ${v.b} < 0$ (les deux sont négatifs)`,
              `La fonction carré est décroissante sur $]-\\infty;0]$`,
              `Donc $${v.a}^2 > ${v.b}^2$, soit $${a2} > ${b2}$`,
              `Le plus grand est $${a2}$.`
            ]
          };
        } else {
          const a = rand(2, 5);
          const b = rand(1, 8);
          const xval = rand(2, 6);
          const innerVal = a * xval - b;
          if (innerVal <= 0) {
            return {
              statement: `Soit $f(x) = \\sqrt{2x + 1}$. Calculer $f(4)$.`,
              answer: 3,
              tolerance: 0,
              unit: '',
              hint: `$f(4) = \\sqrt{2 \\times 4 + 1} = \\sqrt{9}$.`,
              solution: [`$f(4) = \\sqrt{8 + 1} = \\sqrt{9} = 3$`]
            };
          }
          const sqrtVal = parseFloat(Math.sqrt(innerVal).toFixed(2));
          return {
            statement: `Soit $g(x) = \\sqrt{${a}x - ${b}} + \\frac{1}{x}$.<br/><br/><strong>1.</strong> Vérifier que $x = ${xval}$ appartient au domaine de définition.<br/><strong>2.</strong> Calculer $g(${xval})$ (arrondi au centième).<br/><br/>Donne la valeur de $g(${xval})$.`,
            answer: parseFloat((sqrtVal + 1/xval).toFixed(2)),
            tolerance: 0.05,
            unit: '',
            hint: `Domaine : $${a}x - ${b} \\geq 0$ (soit $x \\geq ${fr(b/a, 1)}$) ET $x \\neq 0$. Puis $g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}}$.`,
            solution: [
              `Condition racine : $${a} \\times ${xval} - ${b} = ${innerVal} \\geq 0$ ✓ ; $x = ${xval} \\neq 0$ ✓`,
              `$g(${xval}) = \\sqrt{${innerVal}} + \\frac{1}{${xval}} \\approx ${fr(sqrtVal)} + ${fr(1/xval, 2)} \\approx ${fr(sqrtVal + 1/xval, 2)}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'En physique, la période d\'un pendule simple est $T = 2\\pi\\sqrt{\\frac{L}{g}}$, où $L$ est la longueur du fil (en m) et $g = 9{,}81$ m/s². Un horloger veut fabriquer une horloge dont le pendule bat exactement la seconde ($T = 1$ s).',
      tasks: [
        'Exprimer $L$ en fonction de $T$ et $g$.',
        'Calculer la longueur $L$ nécessaire pour $T = 1$ s (arrondir au cm).',
        'Si l\'on double la longueur du fil, par combien est multipliée la période ? Pourquoi ?'
      ],
      solutions: [
        '$T = 2\\pi\\sqrt{L/g} \\Rightarrow T^2 = 4\\pi^2 \\cdot L/g \\Rightarrow L = \\frac{gT^2}{4\\pi^2}$.',
        '$L = \\frac{9{,}81 \\times 1^2}{4\\pi^2} = \\frac{9{,}81}{39{,}48} \\approx 0{,}25$ m $= 25$ cm.',
        'Si $L\' = 2L$ : $T\' = 2\\pi\\sqrt{2L/g} = \\sqrt{2} \\cdot 2\\pi\\sqrt{L/g} = \\sqrt{2} \\cdot T \\approx 1{,}41 \\cdot T$. La période est multipliée par $\\sqrt{2}$ (pas par $2$) car $T$ dépend de $\\sqrt{L}$.'
      ],
      finalAnswer: '$L \\approx 25$ cm pour $T = 1$ s. Doubler $L$ multiplie $T$ par $\\sqrt{2} \\approx 1{,}41$.'
    },

    evaluation: {
      title: 'Évaluation — Fonctions de référence',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer $\\sqrt{81}$.',
          type: 'numeric',
          answer: 9,
          tolerance: 0,
          unit: '',
          points: 1,
          correction: '$\\sqrt{81} = 9$ car $9^2 = 81$.'
        },
        {
          statement: 'Sur quel intervalle la fonction $x \\mapsto x^2$ est-elle croissante ?',
          type: 'multiple-choice',
          options: ['$]-\\infty ; 0]$', '$[0 ; +\\infty[$', '$\\mathbb{R}$', '$]-\\infty ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'La fonction carré est décroissante sur $]-\\infty ; 0]$ et croissante sur $[0 ; +\\infty[$. Son minimum est $0$, atteint en $x = 0$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-13. L'ancienne, « Calculer
             $\sqrt{4 \times 25}$ », était une application directe de plus,
             dans un devoir qui en comptait déjà trois. La nouvelle donne le
             résultat et demande de JUSTIFIER une égalité remarquée, ce qui
             mobilise le langage mathématique sans changer la réponse ($10$).
             Passage de « calculer » à « communiquer ». */
          statement: 'Amine remarque que $\\sqrt{4 \\times 25}$ et $\\sqrt{4} \\times \\sqrt{25}$ donnent le même résultat.<br/><br/>Vérifie-le en calculant les deux expressions, puis donne leur valeur commune.',
          type: 'numeric',
          answer: 10,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les deux expressions valent bien la même chose : $\\sqrt{4 \\times 25} = \\sqrt{100} = 10$, et $\\sqrt{4} \\times \\sqrt{25} = 2 \\times 5 = 10$.<br/><br/>Amine a donc raison, et ce n\'est pas un hasard : pour deux nombres positifs, $\\sqrt{a \\times b} = \\sqrt{a} \\times \\sqrt{b}$. La racine carrée « traverse » une multiplication.<br/><br/><strong>Attention cependant</strong> : cela ne marche <strong>pas</strong> avec une addition. $\\sqrt{9 + 16} = \\sqrt{25} = 5$, alors que $\\sqrt{9} + \\sqrt{16} = 3 + 4 = 7$.'
        },
        {
          statement: 'Quel est le domaine de définition de $f(x) = \\dfrac{1}{x-2}$ ?',
          type: 'multiple-choice',
          options: ['$\\mathbb{R}$', '$\\mathbb{R} \\setminus \\{2\\}$', '$\\mathbb{R} \\setminus \\{0\\}$', '$]2 ; +\\infty[$'],
          answer: 1,
          points: 2,
          correction: 'On ne peut pas diviser par $0$, donc $x - 2 \\neq 0$, soit $x \\neq 2$. Le domaine est $\\mathbb{R} \\setminus \\{2\\}$.'
        },
        {
          statement: 'Simplifier $\\sqrt{(-5)^2}$.',
          type: 'numeric',
          answer: 5,
          tolerance: 0,
          unit: '',
          points: 3,
          correction: '$\\sqrt{(-5)^2} = \\sqrt{25} = 5$. Attention : $\\sqrt{a^2} = |a|$, pas $a$. Ici $|{-5}| = 5$.'
        }
      ]
    }
  });
