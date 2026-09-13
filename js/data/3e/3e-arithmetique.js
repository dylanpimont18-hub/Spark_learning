/* =========================================================
   Spark Learning – data/3e/3e-arithmetique.js
   Module : Arithmétique (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-arithmetique',
    level: 1, subject: 'maths',
    icon: '🔢',
    title: 'Arithmétique',
    subtitle: 'PGCD, nombres premiers, décomposition',
    keywords: ['PGCD', 'PPCM', 'Nombre premier', 'Décomposition', 'Divisibilité'],
    physics: false,
    cours: {
      intro: 'Deux roues dentées sont engrenées l\'une dans l\'autre : la petite a $12$ dents, la grande en a $18$. Sur chacune, une dent est marquée d\'un trait rouge, et au départ les deux traits sont exactement face à face.<br/><br/>' +
        'Tu fais tourner le mécanisme. Les traits se séparent aussitôt. Question : <strong>au bout de combien de dents défilées les deux traits se retrouveront-ils face à face ?</strong><br/><br/>' +
        'La réponse spontanée est « au bout de $18$ », puisque la grande roue est la plus lente. Mais après $18$ dents, la petite roue a fait un tour et demi : son trait pointe à l\'opposé. Compter, essayer, tâtonner ne mène nulle part — il faut un nombre qui soit <strong>à la fois</strong> un multiple de $12$ et un multiple de $18$. Le premier est $36$ : la petite roue fait alors trois tours, la grande en fait deux, et les deux traits se rejoignent.<br/><br/>' +
        'Ce nombre $36$ a un nom : c\'est le <strong>PPCM</strong> de $12$ et $18$, le Plus Petit Commun Multiple. Il donne le premier instant où <strong>deux cycles se synchronisent</strong> — engrenages, feux de circulation, éclipses, rythmes de rotation des planètes.<br/><br/>' +
        'Son jumeau répond à la question inverse. Tu dois répartir $12$ bonbons et $18$ caramels en sachets tous identiques, sans rien laisser de côté : combien de sachets au maximum ? Pas $12$, pas $18$ — il faut un nombre qui divise <strong>les deux</strong>, et le plus grand est $6$. Ce $6$ est le <strong>PGCD</strong>, le Plus Grand Commun Diviseur : il donne la <strong>part équitable la plus fine possible</strong>.<br/><br/>' +
        'D\'où viennent ces nombres ? De la structure profonde des entiers. Tout entier $n \\geq 2$ admet une décomposition en <strong>facteurs premiers</strong> unique, à l\'ordre près : c\'est le <strong>théorème fondamental de l\'arithmétique</strong>. Cette décomposition est le « code-barres » du nombre — elle révèle d\'un coup tous ses diviseurs, son PGCD et son PPCM.<br/><br/>' +
        'L\'<strong>algorithme d\'Euclide</strong> calcule le PGCD en quelques divisions successives, sans décomposer en facteurs premiers — très pratique pour les grands nombres, et vieux de vingt-trois siècles.<br/><br/>' +
        '<strong>Relation clé</strong> : $a \\times b = \\text{PGCD}(a,b) \\times \\text{PPCM}(a,b)$ — connaître l\'un permet de calculer l\'autre.',
      definitions: [
        { term: 'Nombre premier', def: 'Entier $n \\geq 2$ qui n\'a que <strong>deux diviseurs distincts</strong> : $1$ et lui-même.<br/><br/>Exemples : $2, 3, 5, 7, 11, 13\\ldots$ Le nombre $1$ n\'est <strong>pas</strong> premier.' },
        { term: 'PGCD', def: '<strong>Plus Grand Commun Diviseur</strong> de deux entiers $a$ et $b$ : c\'est le plus grand entier qui divise à la fois $a$ et $b$.<br/><br/>Exemple : $\\text{PGCD}(12, 18) = 6$.' },
        { term: 'PPCM', def: '<strong>Plus Petit Commun Multiple</strong> de deux entiers $a$ et $b$ : c\'est le plus petit entier strictement positif qui est multiple de $a$ et de $b$ simultanément.<br/><br/>Exemple : $\\text{PPCM}(4, 6) = 12$.' },
        { term: 'Algorithme d\'Euclide', def: 'Méthode de calcul du PGCD par <strong>divisions euclidiennes successives</strong> : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$, jusqu\'à obtenir un reste nul. Le dernier diviseur non nul est le PGCD.' }
      ],
      method: {
        title: 'Méthode en 3 étapes',
        steps: [
          '<strong>Étape 1 : Décomposer</strong> chaque nombre en produit de facteurs premiers (diviser successivement par $2$, $3$, $5$, $7$, $11\\ldots$ jusqu\'à $1$).',
          '<strong>Étape 2 : PGCD</strong> — prendre les facteurs premiers <strong>communs</strong> avec le <strong>plus petit exposant</strong>.',
          '<strong>Étape 3 : PPCM</strong> — prendre <strong>tous</strong> les facteurs premiers (communs ou non) avec le <strong>plus grand exposant</strong>.'
        ]
      },
      example: {
        statement: 'Trouver le PGCD de $84$ et $56$ par l\'algorithme d\'Euclide.',
        steps: [
          '<strong>1re division</strong> : $84 = 56 \\times 1 + 28$. Le reste est $28 \\neq 0$, on continue avec $\\text{PGCD}(56, 28)$.',
          '<strong>2e division</strong> : $56 = 28 \\times 2 + 0$. Le reste est $0$, on s\'arrête.',
          '<strong>Conclusion</strong> : le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$. Vérification : $84 = 28 \\times 3$ et $56 = 28 \\times 2$ ✓'
        ],
        answer: '$\\text{PGCD}(84, 56) = 28$.'
      },
      formulas: [
        'PGCD × PPCM $= a \\times b$',
        'Fraction irréductible : diviser numérateur et dénominateur par le PGCD',
        'Algorithme d\'Euclide : $\\text{PGCD}(a, b) = \\text{PGCD}(b, a \\mod b)$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Décomposition en facteurs premiers',
        title: 'Un arbre pour décomposer 180 en facteurs premiers',
        description: 'Chaque nombre composé se sépare en deux facteurs jusqu\'à n\'obtenir que des nombres premiers, en bout de branche.',
        svg: `
          <svg viewBox="0 0 480 380" role="img" aria-labelledby="arithmetique-graph-title arithmetique-graph-desc">
            <title id="arithmetique-graph-title">Arbre de decomposition en facteurs premiers de 180</title>
            <desc id="arithmetique-graph-desc">Le schema montre 180 se separant en 4 et 45, puis 4 en 2 et 2, 45 en 9 et 5, et 9 en 3 et 3, jusqu'a n'obtenir que des nombres premiers.</desc>
            <rect x="16" y="12" width="230" height="26" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 24%, var(--border))"></rect>
            <circle class="plot-point-alt" cx="30" cy="25" r="7"></circle>
            <text class="tick-label" x="44" y="29">Nombre compose : on continue</text>
            <rect x="16" y="44" width="230" height="26" rx="8" fill="color-mix(in srgb, var(--diagram-accent) 8%, var(--bg-card))" stroke="color-mix(in srgb, var(--diagram-accent) 24%, var(--border))"></rect>
            <circle class="plot-point" cx="30" cy="57" r="7"></circle>
            <text class="tick-label" x="44" y="61">Nombre premier : on s'arrete</text>
            <line class="frame-line" x1="240" y1="110" x2="120" y2="185"></line>
            <line class="frame-line" x1="240" y1="110" x2="360" y2="185"></line>
            <line class="frame-line" x1="120" y1="185" x2="70" y2="255"></line>
            <line class="frame-line" x1="120" y1="185" x2="170" y2="255"></line>
            <line class="frame-line" x1="360" y1="185" x2="310" y2="255"></line>
            <line class="frame-line" x1="360" y1="185" x2="410" y2="255"></line>
            <line class="frame-line" x1="310" y1="255" x2="280" y2="320"></line>
            <line class="frame-line" x1="310" y1="255" x2="340" y2="320"></line>
            <circle class="plot-point-alt" cx="240" cy="110" r="22"></circle>
            <text class="annotation-label" text-anchor="middle" x="240" y="115">180</text>
            <circle class="plot-point-alt" cx="120" cy="185" r="19"></circle>
            <text class="annotation-label" text-anchor="middle" x="120" y="190">4</text>
            <circle class="plot-point-alt" cx="360" cy="185" r="19"></circle>
            <text class="annotation-label" text-anchor="middle" x="360" y="190">45</text>
            <circle class="plot-point" cx="70" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="70" y="260" style="fill:var(--bg-card)">2</text>
            <circle class="plot-point" cx="170" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="170" y="260" style="fill:var(--bg-card)">2</text>
            <circle class="plot-point-alt" cx="310" cy="255" r="18"></circle>
            <text class="annotation-label" text-anchor="middle" x="310" y="260">9</text>
            <circle class="plot-point" cx="410" cy="255" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="410" y="260" style="fill:var(--bg-card)">5</text>
            <circle class="plot-point" cx="280" cy="320" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="280" y="325" style="fill:var(--bg-card)">3</text>
            <circle class="plot-point" cx="340" cy="320" r="15"></circle>
            <text class="annotation-label" text-anchor="middle" x="340" y="325" style="fill:var(--bg-card)">3</text>
            <text class="annotation-label" text-anchor="middle" x="240" y="362">180 = 2² × 3² × 5</text>
          </svg>
        `,
        notes: [
          'Peu importe la paire de facteurs choisie au départ (ici 4 et 45) : on retombe toujours sur la même décomposition finale. C\'est le théorème fondamental de l\'arithmétique.',
          'Les cercles bordés (180, 4, 45, 9) sont des nombres composés : on continue à les décomposer. Les cercles pleins (2, 2, 3, 3, 5) sont des nombres premiers : la branche s\'arrête.',
          'On regroupe ensuite les facteurs identiques avec des exposants : $180 = 2^2 \\times 3^2 \\times 5$.'
        ],
        reading: 'Un arbre de décomposition se lit de haut en bas : à chaque nœud composé, on choisit deux facteurs dont le produit redonne le nombre, jusqu\'à n\'obtenir que des nombres premiers.',
        caption: 'Décomposition de $180$ en produit de facteurs premiers : $180 = 2^2 \\times 3^2 \\times 5$.'
      },
      /* SCHÉMA SECONDAIRE — UN SEUL, ajouté le 2026-09-13, et c'est délibéré.
         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule, et « on n'ajoute pas de figure pour faire
         du chiffre ».

         Ce chapitre est le moins demandeur en figures du niveau, avec
         l'algorithmique. La raison est qu'il est presque entièrement
         ARITHMÉTIQUE : décomposer, diviser, comparer des listes. Sa figure
         principale — l'arbre de décomposition de 180 — couvre déjà la
         décomposition, la distinction premier/composé et l'unicité du
         résultat. Les autres difficultés du chapitre sont des RÈGLES, pas des
         images : « 1 n'est pas premier » se règle en une phrase, l'algorithme
         d'Euclide est une suite de divisions que le cours déroule mieux qu'un
         dessin ne le ferait.

         Reste un vrai malentendu, et il est massif : l'élève confond le PGCD
         et le PPCM, et surtout il ne sait pas LEQUEL DES DEUX est le plus
         grand. Ce malentendu-là est spatial, donc il se traite en image : le
         PGCD se loge SOUS les deux nombres, le PPCM AU-DESSUS. Une fois cette
         image en tête, le nom même des deux ne peut plus s'inverser.

         Toutes les valeurs sont CALCULÉES sur 12 et 18, les nombres du cours :
         diviseurs communs 1, 2, 3, 6 (le plus grand est 6) ; multiples communs
         36, 72, 108 (le plus petit est 36). Le produit 6 × 36 = 216 = 12 × 18
         vérifie la relation du chapitre, et il est testé comme tel dans
         scripts/manuel/tests/diagrams-3e.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Le PGCD se loge sous les deux nombres, le PPCM au-dessus',
          description: 'Les deux noms se ressemblent, et c\'est là tout le problème. Mais leurs <strong>places</strong> ne se ressemblent pas : un diviseur commun est forcément plus petit que les deux nombres, un multiple commun forcément plus grand. Sur $12$ et $18$, le PGCD vaut $6$ et le PPCM vaut $36$.',
          svg: `
            <svg viewBox="0 0 400 250" role="img" aria-labelledby="arith-pgcd-title arith-pgcd-desc">
              <title id="arith-pgcd-title">Position du PGCD et du PPCM par rapport aux deux nombres</title>
              <desc id="arith-pgcd-desc">Une echelle verticale de valeurs croissantes du bas vers le haut. Tout en bas figure le nombre six, designe comme le plus grand commun diviseur de douze et de dix-huit ; a cote de lui sont rappeles les autres diviseurs communs, un, deux et trois, tous plus petits que six. Au milieu figurent les deux nombres de depart, douze et dix-huit. Tout en haut figure le nombre trente-six, designe comme le plus petit commun multiple de douze et de dix-huit ; a cote de lui sont rappeles les multiples communs suivants, soixante-douze et cent huit, tous plus grands que trente-six. Le plus grand commun diviseur est donc situe en dessous des deux nombres de depart, et le plus petit commun multiple au-dessus : les diviseurs communs sont plus petits que les nombres, les multiples communs plus grands.</desc>

              <line class="axis" x1="60" y1="222" x2="60" y2="24"></line>
              <text class="tick-label" x="46" y="28" text-anchor="end">grand</text>
              <text class="tick-label" x="46" y="222" text-anchor="end">petit</text>

              <rect class="frame-line" x="96" y="24" width="180" height="34" rx="10" fill="none"></rect>
              <text class="annotation-label" x="186" y="46" text-anchor="middle">PPCM de 12 et 18 : 36</text>
              <text class="label-soft" x="290" y="46" text-anchor="start">puis 72, puis 108</text>
              <text class="tick-label" x="186" y="72" text-anchor="middle">le plus petit des multiples communs</text>

              <line class="grid-line" x1="96" y1="118" x2="276" y2="118"></line>
              <text class="annotation-label" x="140" y="112" text-anchor="middle">12</text>
              <text class="annotation-label" x="232" y="112" text-anchor="middle">18</text>
              <text class="tick-label" x="290" y="116" text-anchor="start">les deux nombres</text>

              <rect class="frame-line" x="96" y="164" width="180" height="34" rx="10" fill="none"></rect>
              <text class="annotation-label" x="186" y="186" text-anchor="middle">PGCD de 12 et 18 : 6</text>
              <text class="label-soft" x="290" y="186" text-anchor="start">apres 1, 2 et 3</text>
              <text class="tick-label" x="186" y="212" text-anchor="middle">le plus grand des diviseurs communs</text>

              <line class="guide-line" x1="110" y1="164" x2="110" y2="126"></line>
              <line class="guide-line" x1="110" y1="110" x2="110" y2="58"></line>

              <text class="label-soft" x="200" y="242" text-anchor="middle">un diviseur est plus petit, un multiple est plus grand</text>
            </svg>
          `,
          notes: [
            'Un <strong>diviseur</strong> de $12$ ne peut pas dépasser $12$. Donc un diviseur commun à $12$ et à $18$ est plus petit que les deux, et le PGCD se trouve nécessairement <strong>en dessous</strong>.',
            'Un <strong>multiple</strong> de $12$ vaut au moins $12$. Donc un multiple commun est plus grand que les deux, et le PPCM se trouve nécessairement <strong>au-dessus</strong>.',
            'Les diviseurs communs de $12$ et $18$ sont $1$, $2$, $3$ et $6$ : on prend le plus <strong>grand</strong>, d\'où $\\text{PGCD} = 6$. Les multiples communs sont $36$, $72$, $108$… : on prend le plus <strong>petit</strong>, d\'où $\\text{PPCM} = 36$.',
            'Le mot « grand » dans PGCD et le mot « petit » dans PPCM ne parlent donc pas du résultat final, mais du <strong>choix dans la liste</strong>. C\'est exactement ce qui trompe.',
            '<strong>Le contrôle qui sauve</strong> : $6 \\times 36 = 216$ et $12 \\times 18 = 216$. Si ton PGCD multiplié par ton PPCM ne redonne pas le produit des deux nombres de départ, l\'un des deux est faux.'
          ],
          reading: 'Ne retiens pas les deux noms, retiens les deux hauteurs. Ce qui divise est en bas, ce qui est multiple est en haut, et les deux nombres de départ sont toujours entre les deux.',
          caption: 'Positions relatives du PGCD et du PPCM de $12$ et $18$ : le PGCD ($6$) sous les deux nombres, le PPCM ($36$) au-dessus.'
        }
      ],
      recap: [
        '<strong>Théorème fondamental</strong> : tout entier $\\geq 2$ se décompose de manière <strong>unique</strong> en produit de nombres premiers.',
        '<strong>Relation PGCD-PPCM</strong> : $\\text{PGCD}(a, b) \\times \\text{PPCM}(a, b) = a \\times b$. Connaître l\'un permet de calculer l\'autre.',
        '<strong>$1$ n\'est pas premier</strong> : un nombre premier a exactement deux diviseurs distincts. $1$ n\'en a qu\'un.',
        '<strong>Algorithme d\'Euclide</strong> : méthode rapide pour calculer le PGCD sans décomposer en facteurs premiers — idéal pour les grands nombres.'
      ],
      piege: 'Piège : $1$ n\'est PAS un nombre premier (il faut exactement deux diviseurs distincts). Le plus petit nombre premier est $2$. Et $2$ est le seul nombre premier pair.'
    },
    quiz: [
      {
        q: 'Quel est le PGCD de $36$ et $48$ ?',
        options: ['$6$', '$12$', '$9$', '$144$'],
        answer: 1,
        correction: '$36 = 2^2 \\times 3^2$ et $48 = 2^4 \\times 3$. PGCD $= 2^2 \\times 3 = 12$.'
      },
      {
        q: 'Un élève dit : « $1$ est un nombre premier car il n\'est divisible que par lui-même ». Où est l\'erreur ?',
        options: [
          'Un nombre premier doit avoir exactement DEUX diviseurs distincts ; $1$ n\'en a qu\'un seul ($1$ lui-même)',
          'L\'élève a raison, $1$ est bien premier',
          '$1$ n\'est pas premier car il est inférieur à $2$, mais pas pour la raison citée',
          '$1$ n\'est pas premier car il est pair'
        ],
        answer: 0,
        correction: 'Un nombre premier est un entier $\\geq 2$ ayant exactement deux diviseurs distincts : $1$ et lui-même. Le nombre $1$ n\'a qu\'un seul diviseur ($1 = 1 \\times 1$), donc il ne satisfait pas la définition. Exclure $1$ est crucial pour garantir l\'unicité de la décomposition en facteurs premiers.'
      },
      {
        q: 'Parmi ces nombres, lequel est premier ?',
        options: ['$1$', '$27$', '$51$', '$37$'],
        answer: 3,
        correction: '$1$ n\'est pas premier. $27 = 3^3$, $51 = 3 \\times 17$. $37$ n\'est divisible que par $1$ et $37$ : il est premier.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « on donne deux effectifs, calcule le
         PGCD » — habillé de six décors tirés par pick() (bouquets, sachets,
         équipes, rubans, carreaux, rangées). Mesure à 60 tirages : 6 moules
         d'énoncé, mais **1 seule tâche distincte**. Le professeur qui imprimait
         la banque obtenait dix-sept fois la même division euclidienne sous six
         habillages, et l'élève ne rencontrait JAMAIS le PPCM, jamais une
         décomposition en facteurs premiers, jamais un test de primalité, jamais
         une fraction à rendre irréductible — c'est-à-dire tout le reste du
         chapitre, y compris les trois quarts de ce que l'évaluation exige.

         C'est le défaut que le cahier des charges (section 11) demande de
         mesurer sur la TÂCHE et non sur le moule : varier le décor n'est pas
         varier l'exercice.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'pgcd'       : la tâche d'origine, conservée, mais l'algorithme
                            d'Euclide part désormais du plus GRAND des deux
                            nombres. L'ancienne version affichait pour la paire
                            (12 ; 18) la ligne « 12 = 18 × 0 + 12 », premier pas
                            juste mais vide, que personne n'écrit à la main ;
           - 'ppcm'       : le jumeau du PGCD, celui de la synchronisation, que
                            l'introduction du chapitre met en scène avec les
                            engrenages et que la banque n'atteignait jamais ;
           - 'decompo'    : lire un exposant dans la décomposition en facteurs
                            premiers — le « code-barres » du nombre, dont le
                            schéma du cours est entièrement consacré ;
           - 'premier'    : décider si un nombre est premier, réponse codée 1/0.
                            Le seul critère d'arrêt (tester jusqu'à la racine)
                            n'était travaillé nulle part ;
           - 'irreductible': simplifier une fraction par le PGCD, c'est-à-dire
                            l'usage le plus fréquent du chapitre dans le reste
                            du programme ;
           - 'relation'   : PGCD × PPCM = a × b, qui permet de déduire l'un de
                            l'autre sans recalculer ;
           - 'diviseurs'  : compter les diviseurs d'un entier à partir des
                            exposants de sa décomposition — la tâche qui montre
                            à quoi sert vraiment de décomposer.

         LES NOMBRES SONT CONSTRUITS À PARTIR DE LA RÉPONSE, jamais l'inverse :
         on tire d'abord le PGCD et les deux cofacteurs premiers entre eux, puis
         on en déduit les deux entiers de l'énoncé. Tirer deux entiers au hasard
         en espérant un PGCD intéressant donne une fois sur deux un PGCD de 1 ou
         2, c'est-à-dire un exercice sans contenu. */
      generate() {
        const tache = pick(['pgcd', 'ppcm', 'decompo', 'premier',
                            'irreductible', 'relation', 'diviseurs']);

        /* Écrit la CHAÎNE COMPLÈTE des divisions euclidiennes, autant de lignes
           qu'il en faut, jusqu'au reste nul. Une version antérieure affichait
           deux lignes en dur et calculait la seconde même lorsque la première
           avait déjà un reste nul : elle produisait alors une division par
           zéro. Ici la boucle s'arrête d'elle-même. */
        function euclide(x, y) {
          const lignes = [];
          let p = x, q = y;
          while (q !== 0) {
            lignes.push(`$${p} = ${q} \\times ${Math.floor(p / q)} + ${p % q}$`);
            const r = p % q; p = q; q = r;
          }
          return `Algorithme d'Euclide, en divisant à chaque étape le diviseur par le reste : ${lignes.join(', puis ')}.<br/><br/>Le <strong>dernier reste non nul</strong> est $${p}$ : c'est le PGCD.`;
        }

        /* Couples (u ; v) premiers entre eux : multipliés par un même d, ils
           donnent deux entiers dont le PGCD vaut exactement d et le PPCM
           exactement d × u × v. La réponse est donc connue AVANT l'énoncé. */
        const COPREMIERS = [[2, 3], [3, 4], [3, 5], [4, 5], [2, 5], [5, 6], [4, 7], [3, 7]];

        if (tache === 'pgcd') {
          const d = pick([4, 6, 7, 8, 9, 12]);
          const [u, v] = pick(COPREMIERS);
          const a = d * v, b = d * u;              // a > b par construction
          /* Le mot qui désigne l'ensemble des objets (« fleurs », « friandises »,
             « bulbes ») est porté par le CONTEXTE, avec son genre et son
             pluriel. Une première version écrivait « en utilisant toutes les
             fleurs » dans le patron commun : le décor « traiteur » parlait donc
             de $28$ chocolats, $16$ bonbons… et de fleurs. Un accord se
             transporte avec son nom, il ne se devine pas. */
          const ctx = pick([
            { d: 'Un <strong>fleuriste</strong> dispose de', x: 'roses', y: 'tulipes', tout: 'toutes les fleurs', q: 'de <strong>bouquets identiques</strong>', r: 'bouquets' },
            { d: 'Un <strong>traiteur</strong> dispose de', x: 'chocolats', y: 'bonbons', tout: 'toutes les friandises', q: 'de <strong>sachets identiques</strong>', r: 'sachets' },
            { d: 'Un <strong>jardinier</strong> dispose de', x: 'tulipes', y: 'jonquilles', tout: 'tous les bulbes', q: 'de <strong>rangées identiques</strong>', r: 'rangées' }
          ]);
          return {
            statement: `${ctx.d} $${a}$ ${ctx.x} et $${b}$ ${ctx.y}.<br/><br/>` +
              `Il veut tout répartir en un <strong>maximum</strong> ${ctx.q}, en utilisant <strong>${ctx.tout}</strong> et sans qu'il en reste aucun.<br/><br/>` +
              `Quel est le nombre maximal de ${ctx.r} ?`,
            answer: d, tolerance: 0, unit: '',
            hint: `Le nombre cherché doit diviser $${a}$ <strong>et</strong> diviser $${b}$ : c'est un diviseur commun, et on en veut le plus grand.<br/><br/>Utilise l'<strong>algorithme d'Euclide</strong> : $\\text{PGCD}(${a}\\,;\\,${b}) = \\text{PGCD}(${b}\\,;\\,${a % b})$…`,
            solution: [
              `Chaque part doit contenir le même nombre de ${ctx.x} et le même nombre de ${ctx.y}, sans reste : le nombre de parts <strong>divise</strong> à la fois $${a}$ et $${b}$. On cherche donc le plus grand diviseur commun.`,
              euclide(a, b),
              `Il peut donc composer <strong>$${d}$</strong> parts.<br/><br/>Contrôle : chacune contient $${a} \\div ${d} = ${v}$ ${ctx.x} et $${b} \\div ${d} = ${u}$ ${ctx.y}, et il ne reste rien.`
            ]
          };
        }

        if (tache === 'ppcm') {
          /* LE PPCM, celui de la synchronisation — exactement la situation des
             engrenages de l'introduction, que la banque n'atteignait jamais. */
          const d = pick([1, 2, 3, 4]);
          const [u, v] = pick(COPREMIERS);
          const a = d * u, b = d * v;
          const ppcm = d * u * v;
          const ctx = pick([
            { d: `Deux <strong>feux de circulation</strong> passent au vert l'un toutes les $${a}$ secondes, l'autre toutes les $${b}$ secondes.`, e: 'Ils viennent de passer au vert en même temps.', q: 'Dans combien de secondes seront-ils à nouveau au vert ensemble ?', u: 's' },
            { d: `Deux <strong>phares</strong> émettent un éclat, l'un toutes les $${a}$ secondes, l'autre toutes les $${b}$ secondes.`, e: 'Ils viennent d\'émettre en même temps.', q: 'Dans combien de secondes émettront-ils à nouveau ensemble ?', u: 's' },
            { d: `Deux <strong>satellites</strong> survolent la même base, l'un tous les $${a}$ jours, l'autre tous les $${b}$ jours.`, e: 'Ils l\'ont survolée ensemble aujourd\'hui.', q: 'Dans combien de jours la survoleront-ils à nouveau ensemble ?', u: 'jours' }
          ]);
          return {
            statement: `${ctx.d}<br/><br/>${ctx.e}<br/><br/>${ctx.q}`,
            answer: ppcm, tolerance: 0, unit: ctx.u,
            hint: `L'instant cherché est un <strong>multiple de $${a}$</strong> et un <strong>multiple de $${b}$</strong> à la fois, et on veut le plus petit : c'est le <strong>PPCM</strong>.<br/><br/>Une fois le PGCD connu, la relation $\\text{PGCD} \\times \\text{PPCM} = a \\times b$ donne le PPCM sans lister les multiples.`,
            solution: [
              `Deux cycles se rejoignent à un instant qui est <strong>multiple des deux</strong> périodes ; le premier de ces instants est le <strong>PPCM</strong> de $${a}$ et $${b}$. Ce n'est pas le plus grand des deux nombres : après $${b}$ unités, le premier cycle n'est pas forcément revenu à son point de départ.`,
              `$\\text{PGCD}(${a}\\,;\\,${b}) = ${d}$, donc $\\text{PPCM} = \\dfrac{${a} \\times ${b}}{${d}} = \\dfrac{${a * b}}{${d}} = ${ppcm}$.`,
              `Ils se retrouveront donc après <strong>$${ppcm}$</strong> ${ctx.u}.<br/><br/>Contrôle : $${ppcm} \\div ${a} = ${v}$ et $${ppcm} \\div ${b} = ${u}$, deux nombres entiers — les deux cycles sont bien tous les deux à leur départ.`
            ]
          };
        }

        if (tache === 'decompo') {
          /* LIRE UN EXPOSANT dans la décomposition. Le schéma du cours lui est
             entièrement consacré, et aucun exercice ne la demandait. On tire
             les exposants d'abord, on construit le nombre ensuite : c'est ainsi
             qu'on est certain de ne pas tomber sur un nombre trop grand ou sur
             un facteur absent. */
          const e2 = rand(2, 4), e3 = rand(1, 3), e5 = rand(0, 1);
          const n = Math.pow(2, e2) * Math.pow(3, e3) * Math.pow(5, e5);
          const cible = pick(e5 === 1 ? [2, 3, 5] : [2, 3]);
          const exposant = cible === 2 ? e2 : (cible === 3 ? e3 : e5);
          const ecriture = `2^{${e2}} \\times ${e3 === 1 ? '3' : `3^{${e3}}`}` + (e5 === 1 ? ' \\times 5' : '');
          return {
            statement: `Tout entier supérieur ou égal à $2$ s'écrit d'une <strong>seule façon</strong> comme produit de nombres premiers : c'est le théorème fondamental de l'arithmétique.<br/><br/>` +
              `Décompose $${n}$ en produit de facteurs premiers.<br/><br/>` +
              `Quel est l'<strong>exposant de $${cible}$</strong> dans cette décomposition ?`,
            answer: exposant, tolerance: 0, unit: '',
            hint: `Divise $${n}$ par $2$ autant de fois que possible, puis par $3$, puis par $5$, et note à chaque fois combien de divisions tu as pu faire.<br/><br/>Le nombre de divisions par $${cible}$ est exactement l'exposant cherché.`,
            solution: [
              `On divise par le plus petit nombre premier possible, encore et encore, jusqu'à ne plus pouvoir : $${n}$ se divise $${e2}$ fois par $2$, puis ce qui reste se divise $${e3}$ fois par $3$${e5 === 1 ? ', puis une fois par $5$' : ''}.`,
              `On regroupe ensuite les facteurs identiques avec des exposants : $${n} = ${ecriture}$.`,
              `L'exposant de $${cible}$ vaut donc <strong>$${exposant}$</strong>.` +
              (exposant === 1 ? ` Un facteur écrit sans exposant porte l'exposant $1$ : il est simplement sous-entendu.` : '') +
              `<br/><br/>Contrôle : remultiplie la décomposition, tu dois retomber exactement sur $${n}$.`
            ]
          };
        }

        if (tache === 'premier') {
          /* DÉCIDER SI UN NOMBRE EST PREMIER. Le critère d'arrêt — s'arrêter à
             la racine carrée — n'était travaillé nulle part, alors que
             l'évaluation le suppose connu. Réponse codée 1/0 pour rester une
             question numérique. */
          const cas = pick([
            { n: 83, premier: true }, { n: 89, premier: true }, { n: 97, premier: true },
            { n: 79, premier: true }, { n: 91, premier: false, f: 7, g: 13 },
            { n: 87, premier: false, f: 3, g: 29 }, { n: 93, premier: false, f: 3, g: 31 },
            { n: 51, premier: false, f: 3, g: 17 }, { n: 57, premier: false, f: 3, g: 19 },
            { n: 77, premier: false, f: 7, g: 11 }
          ]);
          const racine = Math.floor(Math.sqrt(cas.n));
          const aTester = [2, 3, 5, 7].filter(p => p <= racine);
          return {
            statement: `Un <strong>nombre premier</strong> est un entier supérieur ou égal à $2$ qui n'admet que deux diviseurs : $1$ et lui-même.<br/><br/>` +
              `Le nombre $${cas.n}$ est-il premier ?<br/><br/>` +
              `Réponds par $1$ si <strong>oui</strong>, par $0$ si <strong>non</strong>.`,
            answer: cas.premier ? 1 : 0, tolerance: 0, unit: '',
            hint: `Inutile de tester tous les diviseurs jusqu'à $${cas.n}$ : il suffit de tester les nombres premiers <strong>inférieurs ou égaux à $\\sqrt{${cas.n}}$</strong>.<br/><br/>Ici $\\sqrt{${cas.n}} \\approx ${fr(Math.sqrt(cas.n), 1)}$, donc les seuls candidats sont $${aTester.join('$, $')}$.`,
            solution: [
              `On ne teste pas tous les nombres : si $${cas.n}$ avait un diviseur plus grand que $\\sqrt{${cas.n}} \\approx ${fr(Math.sqrt(cas.n), 1)}$, son diviseur associé serait plus petit et on l'aurait déjà trouvé. Il suffit donc de tester les premiers jusqu'à $${racine}$, c'est-à-dire $${aTester.join('$, $')}$.`,
              cas.premier
                ? `Aucun ne divise $${cas.n}$ : il n'est ni pair, ni multiple de $3$ (la somme de ses chiffres ne l'est pas), ni multiple de $5$ (il ne finit ni par $0$ ni par $5$), ni multiple de $7$.`
                : `On trouve un diviseur : $${cas.n} = ${cas.f} \\times ${cas.g}$. Le nombre a donc au moins quatre diviseurs, et pas seulement deux.`,
              cas.premier
                ? `Donc $${cas.n}$ est <strong>premier</strong>. Réponse : $1$.`
                : `Donc $${cas.n}$ n'est <strong>pas premier</strong>. Réponse : $0$.<br/><br/>Piège fréquent : un nombre impair n'est pas premier pour autant — $${cas.n}$ en est la preuve.`
            ]
          };
        }

        if (tache === 'irreductible') {
          /* SIMPLIFIER UNE FRACTION par le PGCD : l'usage le plus fréquent du
             chapitre dans tout le reste du programme, et pourtant absent de la
             banque. La fraction est fabriquée depuis sa forme réduite. */
          const [u, v] = pick(COPREMIERS);
          const d = pick([4, 6, 7, 8, 9, 12, 15]);
          const num = d * u, den = d * v;
          const veut = pick([
            { q: 'numérateur', val: u },
            { q: 'dénominateur', val: v }
          ]);
          return {
            statement: `Une fraction est <strong>irréductible</strong> lorsque son numérateur et son dénominateur n'ont plus aucun diviseur commun autre que $1$.<br/><br/>` +
              `Rends la fraction $\\dfrac{${num}}{${den}}$ irréductible.<br/><br/>` +
              `Quel est le <strong>${veut.q}</strong> de la fraction obtenue ?`,
            answer: veut.val, tolerance: 0, unit: '',
            hint: `Simplifier par $2$, puis encore par $2$, puis par $3$ finit par marcher, mais c'est long.<br/><br/>En divisant d'un coup par le <strong>PGCD</strong> du numérateur et du dénominateur, on obtient la forme irréductible en une seule étape.`,
            solution: [
              `Pour arriver en une seule étape à la forme irréductible, on divise haut et bas par leur <strong>PGCD</strong>. Ici $\\text{PGCD}(${num}\\,;\\,${den}) = ${d}$.`,
              `$\\dfrac{${num}}{${den}} = \\dfrac{${num} \\div ${d}}{${den} \\div ${d}} = \\dfrac{${u}}{${v}}$.`,
              `Le ${veut.q} cherché vaut donc <strong>$${veut.val}$</strong>.<br/><br/>Contrôle : $${u}$ et $${v}$ n'ont plus aucun diviseur commun, la fraction ne peut plus être simplifiée.`
            ]
          };
        }

        if (tache === 'relation') {
          /* LA RELATION PGCD × PPCM = a × b. Elle est écrite dans le cours et
             dans le récapitulatif, et aucun exercice ne s'en servait. On donne
             ici l'un des deux et on demande l'autre : c'est tout l'intérêt de
             la formule, éviter un second calcul. */
          const d = pick([4, 6, 8, 9, 12]);
          const [u, v] = pick(COPREMIERS);
          const a = d * u, b = d * v;
          const ppcm = d * u * v;
          const sens = pick(['ppcm', 'pgcd']);
          const donne = sens === 'ppcm' ? d : ppcm;
          const cherche = sens === 'ppcm' ? ppcm : d;
          return {
            statement: `Pour deux entiers $a$ et $b$, on dispose de la relation <strong>$\\text{PGCD}(a\\,;\\,b) \\times \\text{PPCM}(a\\,;\\,b) = a \\times b$</strong>.<br/><br/>` +
              `On considère $a = ${a}$ et $b = ${b}$, et on sait que leur <strong>${sens === 'ppcm' ? 'PGCD' : 'PPCM'}</strong> vaut $${donne}$.<br/><br/>` +
              `Sans refaire l'algorithme d'Euclide, déduis-en leur <strong>${sens === 'ppcm' ? 'PPCM' : 'PGCD'}</strong>.`,
            answer: cherche, tolerance: 0, unit: '',
            hint: `Commence par calculer le produit $a \\times b$.<br/><br/>La relation dit que ce produit est aussi égal à $\\text{PGCD} \\times \\text{PPCM}$ : une seule division suffit alors pour obtenir le facteur manquant.`,
            solution: [
              `La relation transforme la recherche en une simple division : le produit $a \\times b$ se partage exactement entre le PGCD et le PPCM. On calcule d'abord ce produit : $${a} \\times ${b} = ${a * b}$.`,
              `Donc $\\text{${sens === 'ppcm' ? 'PGCD' : 'PPCM'}} \\times \\text{${sens === 'ppcm' ? 'PPCM' : 'PGCD'}} = ${a * b}$, d'où $\\text{${sens === 'ppcm' ? 'PPCM' : 'PGCD'}} = \\dfrac{${a * b}}{${donne}} = ${cherche}$.`,
              `Le ${sens === 'ppcm' ? 'PPCM' : 'PGCD'} vaut donc <strong>$${cherche}$</strong>.<br/><br/>Contrôle de vraisemblance : le PGCD ne dépasse jamais le plus petit des deux nombres, et le PPCM n'est jamais inférieur au plus grand — ici $${d} \\leq ${Math.min(a, b)}$ et $${ppcm} \\geq ${Math.max(a, b)}$.`
            ]
          };
        }

        /* tache === 'diviseurs' : compter les diviseurs d'un entier à partir
           des exposants de sa décomposition. C'est la tâche qui montre à quoi
           sert vraiment de décomposer : on obtient un décompte sans écrire la
           liste. On limite à deux facteurs premiers pour que la liste reste
           écrivable à la main en cas de vérification. */
        const e2 = rand(1, 3), e3 = rand(1, 2);
        const n = Math.pow(2, e2) * Math.pow(3, e3);
        const nb = (e2 + 1) * (e3 + 1);
        const liste = [];
        for (let k = 1; k <= n; k++) if (n % k === 0) liste.push(k);
        return {
          statement: `Décomposer un nombre en facteurs premiers ne sert pas qu'à trouver un PGCD : cela permet aussi de <strong>compter ses diviseurs sans les écrire</strong>.<br/><br/>` +
            `Combien l'entier $${n}$ admet-il de <strong>diviseurs</strong> au total (en comptant $1$ et $${n}$ lui-même) ?`,
          answer: nb, tolerance: 0, unit: '',
          hint: `Décompose d'abord $${n}$ en facteurs premiers.<br/><br/>Tout diviseur s'écrit $2^{\\alpha} \\times 3^{\\beta}$ : il suffit alors de compter <strong>combien de valeurs</strong> chaque exposant peut prendre, sans oublier la valeur $0$.`,
          solution: [
            `On décompose d'abord : $${n} = 2^{${e2}} \\times 3^{${e3}}$. Tout diviseur de $${n}$ s'écrit alors $2^{\\alpha} \\times 3^{\\beta}$, et ne peut rien contenir d'autre.`,
            `L'exposant $\\alpha$ prend les valeurs $0$ à $${e2}$, soit $${e2 + 1}$ choix ; l'exposant $\\beta$ prend les valeurs $0$ à $${e3}$, soit $${e3 + 1}$ choix. Chaque combinaison donne un diviseur différent : $${e2 + 1} \\times ${e3 + 1} = ${nb}$.`,
            `L'entier $${n}$ admet donc <strong>$${nb}$</strong> diviseurs.<br/><br/>Contrôle en les écrivant : $${liste.join('$, $')}$ — on en compte bien $${nb}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un maître-fromager coupe des meules de fromage en parts de même taille. Il a une meule de $360$ g et une autre de $252$ g.',
      tasks: [
        'Trouver le PGCD de $360$ et $252$.',
        'Quelle est la masse maximale de chaque part pour que les deux meules donnent un nombre entier de parts ?',
        'Combien de parts obtient-on de chaque meule ?'
      ],
      solutions: [
        'PGCD$(360, 252)$ : $360 = 252 \\times 1 + 108$ ; $252 = 108 \\times 2 + 36$ ; $108 = 36 \\times 3 + 0$. PGCD $= 36$.',
        'Chaque part pèse $36$ g.',
        '$360 \\div 36 = 10$ parts et $252 \\div 36 = 7$ parts.'
      ],
      finalAnswer: 'Le PGCD est $36$ g : on obtient $10$ parts de la première meule et $7$ de la seconde.'
    },

    evaluation: {
      title: 'Évaluation — Arithmétique',
      duration: '30 min',
      questions: [
        {
          statement: 'Calculer le PGCD de $84$ et $56$ en utilisant l\'algorithme d\'Euclide.',
          type: 'numeric',
          answer: 28,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$84 = 56 \\times 1 + 28$. $56 = 28 \\times 2 + 0$. Le dernier reste non nul est $28$, donc $\\text{PGCD}(84, 56) = 28$.'
        },
        {
          statement: 'La décomposition en facteurs premiers de $180$ est :',
          type: 'multiple-choice',
          options: ['$2^2 \\times 3^2 \\times 5$', '$2 \\times 3 \\times 5^2$', '$2^3 \\times 3 \\times 5$', '$4 \\times 9 \\times 5$'],
          answer: 0,
          points: 2,
          correction: '$180 = 2 \\times 90 = 2 \\times 2 \\times 45 = 2^2 \\times 9 \\times 5 = 2^2 \\times 3^2 \\times 5$. La réponse d) n\'est pas valide car $4$ et $9$ ne sont pas des nombres premiers.'
        },
        /* Q3 RÉÉCRITE le 2026-09-13. Elle demandait de rendre $\frac{48}{72}$
           irréductible, c'est-à-dire de calculer un PGCD et de diviser : la
           deuxième application directe de l'algorithme d'Euclide dans la même
           évaluation, après la Q1 qui le demandait explicitement.

           Elle demande maintenant de RECONNAÎTRE qu'une situation concrète est
           un problème de PGCD, ce que rien dans l'énoncé ne nomme : ni le mot
           « PGCD », ni le mot « diviseur » n'y figurent. L'élève doit
           comprendre que « des parts identiques, sans reste, et le plus grand
           nombre possible par part » est exactement la définition du plus
           grand diviseur commun. C'est « modéliser », et c'est la compétence
           qui manquait à ce chapitre — dont les quatre autres questions sont
           purement techniques. */
        {
          statement: 'Un fleuriste dispose de $48$ roses et de $72$ tulipes.<br/><br/>' +
            'Il veut composer des bouquets <strong>tous identiques</strong>, en utilisant <strong>toutes</strong> les fleurs, sans qu\'il en reste aucune.<br/><br/>' +
            'Quel est le <strong>plus grand nombre de bouquets</strong> qu\'il peut composer ?',
          type: 'numeric',
          answer: 24,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Rien dans l\'énoncé ne prononce le mot « PGCD » : c\'est à toi de reconnaître la situation.<br/><br/>' +
            'Chaque bouquet doit contenir le même nombre de roses et le même nombre de tulipes, et aucune fleur ne doit rester. Le nombre de bouquets doit donc <strong>diviser $48$</strong> et <strong>diviser $72$</strong> : c\'est un diviseur commun. Comme on en veut le plus grand nombre possible, c\'est le <strong>PGCD</strong>.<br/><br/>' +
            '$\\text{PGCD}(48\\,;\\,72) = 24$, par l\'algorithme d\'Euclide : $72 = 1 \\times 48 + 24$, puis $48 = 2 \\times 24 + 0$. Le dernier reste non nul est $24$.<br/><br/>' +
            'Il peut donc composer <strong>$24$ bouquets</strong>, contenant chacun $48 \\div 24 = 2$ roses et $72 \\div 24 = 3$ tulipes.<br/><br/>' +
            '<strong>Le piège à éviter</strong> : répondre $2$ ou $3$, c\'est-à-dire le contenu d\'un bouquet au lieu du nombre de bouquets. Relis toujours ce que la question demande exactement.'
        },
        {
          statement: 'Quel est le PPCM de $12$ et $18$ ?',
          type: 'numeric',
          answer: 36,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$12 = 2^2 \\times 3$ et $18 = 2 \\times 3^2$. PPCM $= 2^2 \\times 3^2 = 4 \\times 9 = 36$. Vérification : $\\text{PGCD} \\times \\text{PPCM} = 6 \\times 36 = 216 = 12 \\times 18$ ✓.'
        },
        {
          statement: 'Parmi ces nombres, lequel est premier ?',
          type: 'multiple-choice',
          options: ['$91$', '$87$', '$83$', '$93$'],
          answer: 2,
          points: 2,
          correction: '$91 = 7 \\times 13$, $87 = 3 \\times 29$, $93 = 3 \\times 31$. $83$ n\'est divisible par aucun nombre premier $\\leq \\sqrt{83} \\approx 9{,}1$ (on teste $2, 3, 5, 7$) : $83$ est premier.'
        }
      ]
    }
  }
);
