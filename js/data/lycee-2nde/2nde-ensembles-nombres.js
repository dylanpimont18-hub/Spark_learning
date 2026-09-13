/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-ensembles-nombres.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-ensembles-nombres',
    level: 2, subject: 'maths',
    icon: '🔢',
    title: 'Ensembles de nombres et intervalles',
    subtitle: 'ℕ, ℤ, ℚ, ℝ et notation intervalle',
    keywords: ['Ensemble', 'Intervalle', 'Réels', 'Appartenance'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Les nombres se classent en
         ensembles emboîtés » : une définition, donc l'entrée que le cahier
         des charges proscrit.

         ENTRÉE HISTORIQUE ASSUMÉE, et c'est un choix. Ce chapitre est
         technique et ne se prête à aucune mise en situation quotidienne
         honnête : personne n'a jamais eu besoin de savoir si un nombre est
         irrationnel pour faire ses courses, et inventer un prétexte serait
         exactement le travers que le cahier des charges appelle « une mise
         en situation décorative, pire qu'une définition ».

         Le cahier des charges prévoit ce cas : « sur les chapitres
         techniques, une entrée historique ou une difficulté réelle vaut
         mieux qu'une anecdote plaquée ». La découverte de l'irrationalité de
         racine de deux est à la fois historique ET la difficulté réelle du
         chapitre : elle montre qu'il existe des longueurs parfaitement
         constructibles qu'AUCUNE fraction ne peut écrire.

         Le test tient : on ne peut pas répondre « quelle fraction mesure
         cette diagonale ? » sans la notion d'irrationnel — la réponse est
         précisément qu'il n'en existe aucune. */
      intro: 'Trace un carré de côté $1$, puis sa diagonale.<br/><br/>' +
        'Cette diagonale a bien une longueur : tu peux la mesurer, la reporter, la comparer. Par le théorème de Pythagore, son carré vaut $1^2 + 1^2 = 2$, donc elle mesure $\\sqrt{2}$.<br/><br/>' +
        'Maintenant, écris cette longueur sous forme de fraction.<br/><br/>' +
        'Tu peux chercher longtemps. $\\dfrac{7}{5}$ donne $1{,}4$, c\'est un peu court. $\\dfrac{141}{100}$ donne $1{,}41$, c\'est encore un peu court. $\\dfrac{1414}{1000}$ s\'approche davantage… mais aucune de ces fractions ne tombe <strong>exactement</strong> juste.<br/><br/>' +
        'Et ce n\'est pas une question de patience : on peut <strong>démontrer</strong> qu\'aucune fraction ne convient, quelle qu\'elle soit. Cette découverte a bouleversé les mathématiciens grecs, qui étaient persuadés que tout nombre était un rapport d\'entiers.<br/><br/>' +
        'Il existe donc des longueurs parfaitement constructibles à la règle et au compas que <strong>aucune fraction ne peut écrire</strong>. On les appelle des nombres <strong>irrationnels</strong>, et ils sont bien plus nombreux que les autres.<br/><br/>' +
        'Ce chapitre met de l\'ordre dans tout cela : quels nombres s\'écrivent en fraction, lesquels non, comment ils s\'emboîtent les uns dans les autres, et comment décrire d\'un seul coup tous les nombres compris entre deux bornes.',
      definitions: [
        { term: 'Entiers naturels $\\mathbb{N}$', def: 'Ensemble $\\{0 ; 1 ; 2 ; 3 ; \\ldots\\}$ : les nombres entiers positifs ou nuls.' },
        { term: 'Entiers relatifs $\\mathbb{Z}$', def: 'Ensemble $\\{\\ldots ; -2 ; -1 ; 0 ; 1 ; 2 ; \\ldots\\}$ : les entiers avec leur signe.' },
        { term: 'Rationnels $\\mathbb{Q}$', def: 'Ensemble des nombres qui s\'écrivent $\\dfrac{p}{q}$ avec $p \\in \\mathbb{Z}$ et $q \\in \\mathbb{Z}^*$. Inclut tous les décimaux périodiques.' },
        { term: 'Irrationnel', def: 'Réel qui ne peut pas s\'écrire sous forme de fraction. Exemples : $\\sqrt{2}$, $\\pi$, $\\sqrt{3}$. Leur écriture décimale est infinie et non périodique.' }
      ],
      method: {
        title: 'Lire et écrire un intervalle',
        steps: [
          '<strong>Crochet fermé</strong> $[$ ou $]$ : la borne est incluse. <strong>Exemple :</strong> $[3 ; 7]$ signifie $3 \\le x \\le 7$ (les bornes $3$ et $7$ font partie de l\'ensemble).',
          '<strong>Crochet ouvert</strong> $]$ ou $[$ : la borne est exclue. <strong>Exemple :</strong> $]2 ; 5[$ signifie $2 < x < 5$ (ni $2$ ni $5$ ne font partie de l\'ensemble).',
          '<strong>Bornes infinies</strong> : toujours utiliser un crochet ouvert pour $+\\infty$ ou $-\\infty$. <strong>Exemple :</strong> $[3 ; +\\infty[$ signifie $x \\ge 3$.',
          '<strong>Intersection $\\cap$</strong> = valeurs communes ; <strong>union $\\cup$</strong> = toutes les valeurs. <strong>Exemple :</strong> $[1 ; 5] \\cap [3 ; 8] = [3 ; 5]$ ; $[1 ; 5] \\cup [3 ; 8] = [1 ; 8]$.'
        ]
      },
      example: {
        statement: 'Classer les nombres suivants dans les ensembles $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$, irrationnel : $7$ ; $-3$ ; $\\dfrac{2}{5}$ ; $\\sqrt{5}$.',
        steps: [
          '$7 \\in \\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ : c\'est un entier naturel.',
          '$-3 \\in \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$ : entier relatif négatif (pas dans $\\mathbb{N}$).',
          '$\\dfrac{2}{5} = 0{,}4 \\in \\mathbb{Q}$ : rationnel (quotient de deux entiers).',
          '$\\sqrt{5}$ est irrationnel : $5$ n\'est pas un carré parfait, donc $\\sqrt{5}$ ne s\'écrit pas sous forme $p/q$.'
        ],
        answer: '$7 \\in \\mathbb{N}$ ; $-3 \\in \\mathbb{Z}$ ; $\\frac{2}{5} \\in \\mathbb{Q}$ ; $\\sqrt{5} \\notin \\mathbb{Q}$ (irrationnel).'
      },
      formulas: [
        '$[a;b] = \\{x \\in \\mathbb{R} \\mid a \\le x \\le b\\}$',
        '$]a;b[ = \\{x \\in \\mathbb{R} \\mid a < x < b\\}$',
        '$[a;+\\infty[ = \\{x \\in \\mathbb{R} \\mid x \\ge a\\}$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Ensembles de nombres emboîtés',
        title: 'Quatre exemples du cours placés dans l\'ensemble le plus restreint',
        description: 'Reprend l\'exemple du cours : $7 \\in \\mathbb{N}$, $-3 \\in \\mathbb{Z}$, $\\dfrac{2}{5} \\in \\mathbb{Q}$, $\\sqrt{5}$ irrationnel (dans $\\mathbb{R}$ seulement), chacun placé dans l\'anneau le plus intérieur possible.',
        svg: `
          <svg viewBox="0 0 460 460" role="img" aria-labelledby="ensembles-nombres-title ensembles-nombres-desc">
            <title id="ensembles-nombres-title">Cercles emboites des ensembles de nombres</title>
            <desc id="ensembles-nombres-desc">Quatre cercles concentriques centres au meme point, du plus petit au plus grand : N (entiers naturels), Z (entiers relatifs), Q (rationnels), R (reels). Le nombre 7 est place dans le cercle N, le nombre moins 3 entre les cercles N et Z, la fraction 2 cinquiemes entre les cercles Z et Q, et racine de 5 entre les cercles Q et R, chacun dans l'anneau le plus restreint possible.</desc>

            <text class="label-soft" x="230" y="22" text-anchor="middle">ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</text>

            <circle class="frame-line" cx="230" cy="230" r="185" fill="color-mix(in srgb, var(--diagram-accent) 5%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="135" fill="color-mix(in srgb, var(--diagram-accent) 8%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="90" fill="color-mix(in srgb, var(--diagram-accent) 12%, transparent)"></circle>
            <circle class="frame-line" cx="230" cy="230" r="45" fill="color-mix(in srgb, var(--diagram-accent) 18%, transparent)"></circle>

            <text class="axis-label" x="110" y="114" text-anchor="middle">ℝ</text>
            <text class="axis-label" x="145" y="149" text-anchor="middle">ℚ</text>
            <text class="axis-label" x="177" y="181" text-anchor="middle">ℤ</text>
            <text class="axis-label" x="209" y="213" text-anchor="middle">ℕ</text>

            <circle class="plot-point" cx="235" cy="230" r="4"></circle>
            <text class="annotation-label" x="235" y="215" text-anchor="middle">7</text>
            <circle class="plot-point" cx="295" cy="230" r="4"></circle>
            <text class="annotation-label" x="295" y="215" text-anchor="middle">-3</text>
            <circle class="plot-point" cx="342" cy="230" r="4"></circle>
            <text class="annotation-label" x="342" y="215" text-anchor="middle">2/5</text>
            <circle class="plot-point" cx="390" cy="230" r="4"></circle>
            <text class="annotation-label" x="390" y="215" text-anchor="middle">√5</text>
          </svg>
        `,
        notes: [
          '$7 \\in \\mathbb{N}$ : entier naturel, c\'est l\'ensemble le plus restreint possible pour ce nombre.',
          '$-3 \\in \\mathbb{Z}$ mais $-3 \\notin \\mathbb{N}$ (les entiers naturels sont positifs ou nuls).',
          '$\\dfrac{2}{5} \\in \\mathbb{Q}$ mais $\\dfrac{2}{5} \\notin \\mathbb{Z}$ (ce n\'est pas un entier).',
          '$\\sqrt{5}$ est irrationnel : il appartient à $\\mathbb{R}$ mais pas à $\\mathbb{Q}$, comme le rappelle l\'exemple du cours.'
        ],
        reading: 'Chaque nombre est placé dans l\'anneau le plus intérieur possible : c\'est cet anneau qui donne son ensemble de référence le plus précis.',
        caption: 'Reprend exactement l\'exemple du cours : $7$, $-3$, $\\dfrac{2}{5}$, $\\sqrt{5}$, chacun classé dans $\\mathbb{N}$, $\\mathbb{Z}$, $\\mathbb{Q}$ ou $\\mathbb{R}$ (irrationnel).'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13. Ils sont DEUX, et c'est
         un choix assumé, comme pour le calcul algébrique.

         La fiche professeur liste trois erreurs. Deux se voient :
           — le crochet ouvert et le crochet fermé, qui ne diffèrent que par
             UN nombre, invisible dans la notation mais décisif ;
           — l'intersection et la réunion, qu'un dessin sépare mieux qu'une
             définition.
         La troisième — croire qu'un nombre à virgule ne peut pas être
         rationnel — ne se dessine pas : elle se tranche par un calcul, celui
         qui transforme $1{,}\overline{3}$ en $\dfrac{4}{3}$. Une figure y
         serait décorative, et le cahier des charges (section 10) avertit
         qu'une mise en situation décorative est pire qu'une définition.

         Les coordonnées sont CALCULÉES et vérifiées par
         scripts/manuel/tests/diagrams-2nde.test.js. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Un seul nombre de différence',
          title: 'Le crochet se retourne pour un point',
          description: 'Les deux intervalles ci-dessous occupent la <strong>même</strong> portion de droite. Ils ne diffèrent que par leurs deux extrémités : incluses en haut, exclues en bas.<br/><br/>C\'est peu, et c\'est tout. Le rond plein dit « ce nombre en fait partie », le rond vide dit « il s\'arrête juste avant ».',
          svg: `
            <svg viewBox="0 0 460 210" role="img" aria-labelledby="ens-crochets-title ens-crochets-desc">
              <title id="ens-crochets-title">Un intervalle ferme compare au meme intervalle ouvert</title>
              <desc id="ens-crochets-desc">Deux droites graduees de zero a huit, de meme echelle et de meme origine. Sur celle du haut, un segment epais joint deux et cinq, et ses deux extremites portent un rond plein : les bornes font partie de l'intervalle, qui se note crochet fermant deux point-virgule cinq crochet fermant. Sur celle du bas, le segment occupe exactement la meme portion, mais ses extremites portent un rond vide : les bornes sont exclues, et l'intervalle se note crochet ouvrant deux point-virgule cinq crochet ouvrant. La seule difference entre les deux dessins est le remplissage des deux ronds.</desc>

              <!-- Echelle COMMUNE : x = 0 a l'abscisse 60, 45 unites de
                   viewBox par unite. Les deux droites sont rigoureusement
                   superposables — patron « comparaison » : la seule
                   difference visible doit etre celle qu'on demontre, ici le
                   remplissage des ronds. -->

              <!-- DROITE DU HAUT : intervalle FERME. -->
              <text class="annotation-label" x="60" y="32" text-anchor="start">bornes incluses</text>
              <line class="axis" x1="50" y1="66" x2="440" y2="66"></line>
              <line class="grid-line" x1="60" y1="61" x2="60" y2="71"></line>
              <line class="grid-line" x1="150" y1="61" x2="150" y2="71"></line>
              <line class="grid-line" x1="240" y1="61" x2="240" y2="71"></line>
              <line class="grid-line" x1="285" y1="61" x2="285" y2="71"></line>
              <line class="grid-line" x1="330" y1="61" x2="330" y2="71"></line>
              <line class="grid-line" x1="420" y1="61" x2="420" y2="71"></line>
              <text class="tick-label" x="60" y="84" text-anchor="middle">0</text>
              <text class="annotation-label" x="150" y="84" text-anchor="middle">2</text>
              <text class="annotation-label" x="285" y="84" text-anchor="middle">5</text>
              <text class="tick-label" x="420" y="84" text-anchor="middle">8</text>
              <line class="curve-main" x1="150" y1="66" x2="285" y2="66"></line>
              <circle class="plot-point" cx="150" cy="66" r="6"></circle>
              <circle class="plot-point" cx="285" cy="66" r="6"></circle>
              <text class="annotation-label" x="310" y="60" text-anchor="start">[2 ; 5]</text>

              <!-- DROITE DU BAS : intervalle OUVERT. Memes abscisses. -->
              <text class="label-soft" x="60" y="132" text-anchor="start">bornes exclues</text>
              <line class="axis" x1="50" y1="166" x2="440" y2="166"></line>
              <line class="grid-line" x1="60" y1="161" x2="60" y2="171"></line>
              <line class="grid-line" x1="150" y1="161" x2="150" y2="171"></line>
              <line class="grid-line" x1="240" y1="161" x2="240" y2="171"></line>
              <line class="grid-line" x1="285" y1="161" x2="285" y2="171"></line>
              <line class="grid-line" x1="330" y1="161" x2="330" y2="171"></line>
              <line class="grid-line" x1="420" y1="161" x2="420" y2="171"></line>
              <text class="tick-label" x="60" y="184" text-anchor="middle">0</text>
              <text class="annotation-label" x="150" y="184" text-anchor="middle">2</text>
              <text class="annotation-label" x="285" y="184" text-anchor="middle">5</text>
              <text class="tick-label" x="420" y="184" text-anchor="middle">8</text>
              <line class="curve-main" x1="150" y1="166" x2="285" y2="166"></line>
              <circle class="plot-point-alt" cx="150" cy="166" r="6"></circle>
              <circle class="plot-point-alt" cx="285" cy="166" r="6"></circle>
              <text class="label-soft" x="310" y="160" text-anchor="start">]2 ; 5[</text>
            </svg>
          `,
          notes: [
            'Le nombre $2$ appartient à $[2\\,;\\,5]$, mais pas à $]2\\,;\\,5[$. C\'est la seule différence entre les deux intervalles, avec celle qui porte sur $5$.',
            'Retiens le crochet par son orientation : tourné <strong>vers l\'intérieur</strong>, il retient la borne ; tourné vers l\'extérieur, il la laisse dehors.',
            'Du côté de $+\\infty$ ou de $-\\infty$, le crochet est <strong>toujours</strong> ouvert. L\'infini n\'est pas un nombre : il n\'y a rien à inclure. On n\'écrit donc jamais $[2\\,;\\,+\\infty]$.'
          ],
          reading: 'Demande-toi chaque fois : « le nombre écrit au bord fait-il partie de l\'ensemble ? »<br/><br/>Si oui, le rond est plein et le crochet se ferme. Si non, le rond est vide et le crochet s\'ouvre. Un énoncé qui dit « strictement supérieur à $2$ » exclut $2$ : rond vide. « Au moins $2$ » l\'inclut : rond plein.',
          caption: 'Les intervalles $[2\\,;\\,5]$ et $]2\\,;\\,5[$ couvrent la même portion de droite et ne diffèrent que par leurs deux bornes.'
        },
        {
          theme: 'maths',
          kicker: 'Deux opérations, deux résultats',
          title: 'Ce qui est commun, ce qui est réuni',
          description: 'Avec $I = [1\\,;\\,6]$ et $J = [4\\,;\\,9]$, deux questions différentes se posent.<br/><br/>« Dans les <strong>deux</strong> à la fois ? » donne l\'<strong>intersection</strong>, qui est plus petite que chacun. « Dans <strong>l\'un ou l\'autre</strong> ? » donne la <strong>réunion</strong>, qui est plus grande que chacun.',
          svg: `
            <svg viewBox="0 0 470 280" role="img" aria-labelledby="ens-inter-title ens-inter-desc">
              <title id="ens-inter-title">Intersection et reunion de deux intervalles</title>
              <desc id="ens-inter-desc">Quatre droites graduees de zero a dix, toutes de meme echelle et de meme origine. La premiere porte l'intervalle allant de un a six. La deuxieme porte l'intervalle allant de quatre a neuf. La troisieme porte leur intersection, qui va de quatre a six : c'est la portion ou les deux premiers se chevauchent, et elle est plus courte que chacun d'eux. La quatrieme porte leur reunion, qui va de un a neuf, et elle est plus longue que chacun d'eux.</desc>

              <!-- Echelle COMMUNE aux quatre droites : x = 0 a l'abscisse 60,
                   38 unites par unite. Sans cette echelle commune, comparer
                   les longueurs n'aurait aucun sens, et c'est precisement ce
                   que la figure demande de faire. -->

              <text class="label-soft" x="30" y="42" text-anchor="start">I</text>
              <line class="axis" x1="52" y1="46" x2="450" y2="46"></line>
              <line class="curve-main" x1="98" y1="46" x2="288" y2="46"></line>
              <circle class="plot-point" cx="98" cy="46" r="5"></circle>
              <circle class="plot-point" cx="288" cy="46" r="5"></circle>
              <text class="tick-label" x="98" y="36" text-anchor="middle">1</text>
              <text class="tick-label" x="288" y="36" text-anchor="middle">6</text>

              <text class="label-soft" x="30" y="102" text-anchor="start">J</text>
              <line class="axis" x1="52" y1="106" x2="450" y2="106"></line>
              <line class="curve-main" x1="212" y1="106" x2="402" y2="106"></line>
              <circle class="plot-point" cx="212" cy="106" r="5"></circle>
              <circle class="plot-point" cx="402" cy="106" r="5"></circle>
              <text class="tick-label" x="212" y="96" text-anchor="middle">4</text>
              <text class="tick-label" x="402" y="96" text-anchor="middle">9</text>

              <!-- Les deux verticales de lecture : elles montrent OU commence
                   et OU finit la zone commune, sans qu'on ait a la calculer. -->
              <line class="guide-line" x1="212" y1="40" x2="212" y2="172"></line>
              <line class="guide-line" x1="288" y1="40" x2="288" y2="172"></line>

              <text class="annotation-label" x="30" y="166" text-anchor="start">I ∩ J</text>
              <line class="axis" x1="52" y1="170" x2="450" y2="170"></line>
              <line class="curve-main" x1="212" y1="170" x2="288" y2="170"></line>
              <circle class="plot-point" cx="212" cy="170" r="5"></circle>
              <circle class="plot-point" cx="288" cy="170" r="5"></circle>
              <text class="annotation-label" x="250" y="192" text-anchor="middle">[4 ; 6]</text>
              <text class="label-soft" x="310" y="192" text-anchor="start">dans les deux</text>

              <text class="annotation-label" x="30" y="234" text-anchor="start">I ∪ J</text>
              <line class="axis" x1="52" y1="238" x2="450" y2="238"></line>
              <line class="curve-main" x1="98" y1="238" x2="402" y2="238"></line>
              <circle class="plot-point" cx="98" cy="238" r="5"></circle>
              <circle class="plot-point" cx="402" cy="238" r="5"></circle>
              <text class="annotation-label" x="250" y="260" text-anchor="middle">[1 ; 9]</text>
              <text class="label-soft" x="310" y="260" text-anchor="start">dans l'un ou l'autre</text>
            </svg>
          `,
          notes: [
            'L\'intersection $I \\cap J = [4\\,;\\,6]$ se lit sur les bornes : elle commence au <strong>plus grand</strong> des deux débuts ($\\max(1\\,;\\,4) = 4$) et finit au <strong>plus petit</strong> des deux fins ($\\min(6\\,;\\,9) = 6$).',
            'La réunion $I \\cup J = [1\\,;\\,9]$ fait l\'inverse : elle commence au plus petit début et finit à la plus grande fin. Elle ne se simplifie ainsi que parce que les deux intervalles se <strong>chevauchent</strong>.',
            'Attention : si les intervalles étaient disjoints, comme $[2\\,;\\,6]$ et $[8\\,;\\,10]$, leur réunion ne serait pas un intervalle et devrait s\'écrire avec le symbole $\\cup$ tel quel, sans simplification.'
          ],
          reading: 'Un moyen de ne plus les confondre : compare les <strong>longueurs</strong>.<br/><br/>L\'intersection est toujours plus courte que chacun des deux intervalles, puisqu\'elle exige les deux conditions en même temps. La réunion est toujours plus longue, puisqu\'il suffit d\'une seule. Sur le dessin, le troisième trait est le plus court et le quatrième le plus long : si tu obtiens l\'inverse, tu as échangé les deux symboles.',
          caption: 'Avec $I = [1\\,;\\,6]$ et $J = [4\\,;\\,9]$ : $I \\cap J = [4\\,;\\,6]$ et $I \\cup J = [1\\,;\\,9]$.'
        }
      ],
      recap: [
        'Les ensembles s\'emboîtent : $\\mathbb{N} \\subset \\mathbb{Z} \\subset \\mathbb{Q} \\subset \\mathbb{R}$.',
        'Un décimal périodique est toujours rationnel ; un irrationnel a une écriture décimale infinie non périodique.',
        'Crochet fermé = borne incluse ; crochet ouvert = borne exclue ; l\'infini est toujours exclu.',
        '$\\cap$ donne les valeurs communes, $\\cup$ donne toutes les valeurs des deux intervalles.'
      ],
      piege: 'Ne jamais écrire $[+\\infty]$ ou $[-\\infty]$ : l\'infini n\'est pas un nombre, la borne est toujours ouverte de ce côté.'
    },
    quiz: [
      { q: 'Un élève dit que $1{,}333\\ldots = 1{,}\\overline{3}$ est irrationnel car « il ne se termine pas ». Quelle est son erreur ?', options: ['$1{,}\\overline{3} = \\frac{4}{3}$ est rationnel — tout décimal périodique est rationnel', 'L\'élève a raison, les décimaux infinis sont irrationnels', '$1{,}\\overline{3}$ est irrationnel comme $\\pi$', 'Cela dépend de la base de numération'], answer: 0, correction: 'Un rationnel peut s\'écrire $p/q$. Or $1{,}\\overline{3} = 4/3$. Les décimaux périodiques (motif répété indéfiniment) sont TOUS rationnels. Les irrationnels comme $\\sqrt{2}$ et $\\pi$ ont une expansion décimale infinie et non périodique.' },
      { q: 'Comment écrire "$x$ strictement supérieur à $2$ et inférieur ou égal à $7$" ?', options: ['$[2;7]$', '$]2;7]$', '$[2;7[$', '$]2;7[$'], answer: 1, correction: 'Strictement supérieur à $2$ → crochet ouvrant. Inférieur ou égal à $7$ → crochet fermant : $]2;7]$.' },
      { q: 'Que vaut $[-1;3] \\cap [1;5]$ ?', options: ['$[-1;5]$', '$[1;3]$', '$[-1;3]$', '$[1;5]$'], answer: 1, correction: 'L\'intersection contient les valeurs communes : de $\\max(-1,1)=1$ à $\\min(3,5)=3$.' },
      { q: 'Le nombre $\\sqrt{49}$ appartient-il à $\\mathbb{Q}$ ?', options: ['Oui, car $\\sqrt{49} = 7 \\in \\mathbb{N} \\subset \\mathbb{Q}$', 'Non, car toute racine carrée est irrationnelle', 'Oui, car $49$ est pair', 'Non, car $\\sqrt{49}$ ne s\'écrit pas $p/q$'], answer: 0, correction: '$\\sqrt{49} = 7$, qui est un entier naturel. Attention : $\\sqrt{n}$ n\'est irrationnel que si $n$ n\'est pas un carré parfait. $49 = 7^2$, donc $\\sqrt{49}$ est parfaitement rationnel. Ne pas confondre « racine carrée » et « irrationnel ».' },
      { q: 'Que vaut $[2;6] \\cup [8;10]$ ? Peut-on simplifier ?', options: ['$[2;10]$', '$[2;6] \\cup [8;10]$ (non simplifiable, intervalles disjoints)', '$[8;10]$', '$\\varnothing$ (ensemble vide)'], answer: 1, correction: 'Les intervalles $[2;6]$ et $[8;10]$ ne se chevauchent pas (aucune valeur entre $6$ et $8$ n\'est dans les deux). L\'union ne peut pas se simplifier en un seul intervalle. On écrit $[2;6] \\cup [8;10]$.' }
    ],
    /* GÉNÉRATEUR ÉLARGI le 2026-09-13.
       Mesure AVANT : 12 énoncés tirés, 4 moules, **1 seule tâche distincte**.
       Les quatre moules ne différaient que par le décor (un médicament, une
       plante, un capteur, un poisson) et posaient tous la même question : la
       longueur d'une intersection. Un enseignant qui feuilletait la banque y
       voyait douze fois le même exercice.

       Cinq tâches maintenant, distinguées par ce qu'on DEMANDE : intersection,
       réunion (avec le cas où elle ne se simplifie pas), appartenance d'un
       nombre à un intervalle, traduction d'une phrase en intervalle, et
       nature d'un nombre. */
    exercice: {
      type: 'numeric',
      generate() {
        const contexts = [
          { intro: 'Un médicament est efficace pour des températures corporelles dans', unit: '°C' },
          { intro: 'Une plante pousse à des altitudes comprises dans', unit: 'm' },
          { intro: 'Un capteur fonctionne correctement pour des pressions dans', unit: 'hPa' },
          { intro: 'Un poisson survit dans des températures d\'eau comprises dans', unit: '°C' }
        ];
        const tache = pick(['intersection', 'reunion', 'appartenance', 'traduction', 'nature']);

        /* Tâche 1 — longueur de l'intersection (la tâche historique). */
        if (tache === 'intersection') {
          const ctx = pick(contexts);
          const a1 = rand(1, 5);
          const b1 = a1 + rand(4, 8);
          const a2 = a1 + rand(2, 4);
          const b2 = b1 + rand(1, 4);
          const g = Math.max(a1, a2), d = Math.min(b1, b2);
          return {
            statement: `${ctx.intro} l'intervalle $I_1 = [${a1};${b1}]$ ${ctx.unit}, et un second phénomène se produit dans $I_2 = [${a2};${b2}]$ ${ctx.unit}.<br/><br/>Détermine $I_1 \\cap I_2$, puis donne la <strong>longueur</strong> de cette intersection.`,
            answer: d - g, tolerance: 0, unit: ctx.unit,
            hint: `L'intersection garde ce qui est dans les DEUX intervalles : $[a_1;b_1] \\cap [a_2;b_2] = [\\max(a_1,a_2)\\,;\\,\\min(b_1,b_2)]$.`,
            solution: [
              `$I_1 \\cap I_2 = [\\max(${a1},${a2})\\,;\\,\\min(${b1},${b2})] = [${g};${d}]$`,
              `Sa longueur vaut $${d} - ${g} = ${d - g}$ ${ctx.unit}.`
            ]
          };
        }

        /* Tâche 2 — la réunion, avec le cas DISJOINT.
           Une fois sur deux les deux intervalles ne se touchent pas : la
           réunion ne se simplifie alors pas en un seul intervalle, ce qui est
           précisément le point que l'évaluation interroge. */
        if (tache === 'reunion') {
          const disjoint = pick([true, false]);
          const a1 = rand(1, 4), b1 = a1 + rand(2, 4);
          const a2 = disjoint ? b1 + rand(2, 4) : b1 - rand(0, 2);
          const b2 = a2 + rand(2, 5);
          return {
            statement: `On considère $I_1 = [${a1};${b1}]$ et $I_2 = [${a2};${b2}]$.<br/><br/>La réunion $I_1 \\cup I_2$ peut-elle s'écrire comme un <strong>seul</strong> intervalle ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: disjoint ? 0 : 1, tolerance: 0, unit: '',
            hint: `Place les deux intervalles sur une droite graduée. S'ils se touchent ou se chevauchent, leur réunion est d'un seul tenant. S'il reste un « trou » entre eux, elle ne peut pas s'écrire en un seul intervalle.`,
            solution: disjoint ? [
              `Sur une droite graduée, $I_1$ s'arrête à $${b1}$ et $I_2$ ne commence qu'à $${a2}$.`,
              `Entre les deux, les nombres de $]${b1};${a2}[$ n'appartiennent à aucun des deux intervalles : il y a un trou.`,
              `La réunion ne se simplifie donc pas : on doit l'écrire $[${a1};${b1}] \\cup [${a2};${b2}]$. Réponse : $0$.`
            ] : [
              `Sur une droite graduée, $I_2$ commence à $${a2}$, avant la fin de $I_1$ qui est $${b1}$ : les deux intervalles se chevauchent.`,
              `La réunion est donc d'un seul tenant : $I_1 \\cup I_2 = [${Math.min(a1, a2)};${Math.max(b1, b2)}]$.`,
              `Réponse : $1$.`
            ]
          };
        }

        /* Tâche 3 — appartenance, et le rôle du crochet ouvert. */
        if (tache === 'appartenance') {
          const a = rand(2, 6), b = a + rand(3, 6);
          const ferme = pick([true, false]);
          const teste = pick([a, b, rand(a + 1, b - 1)]);
          const dedans = (teste > a && teste < b) || (ferme && (teste === a || teste === b));
          const notation = ferme ? `[${a};${b}]` : `]${a};${b}[`;
          return {
            statement: `Le nombre $${teste}$ appartient-il à l'intervalle $I = ${notation}$ ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
            answer: dedans ? 1 : 0, tolerance: 0, unit: '',
            hint: `Un crochet ${ferme ? 'fermé inclut' : 'ouvert exclut'} la borne qu'il touche. Regarde d'abord si le nombre testé est justement une borne.`,
            solution: [
              `L'intervalle $${notation}$ contient les nombres compris entre $${a}$ et $${b}$, bornes ${ferme ? 'INCLUSES' : 'EXCLUES'}.`,
              teste === a || teste === b
                ? `Or $${teste}$ est précisément une borne, et le crochet est ${ferme ? 'fermé : elle appartient donc à l\'intervalle' : 'ouvert : elle n\'appartient donc PAS à l\'intervalle'}.`
                : `Or $${a} < ${teste} < ${b}$, donc $${teste}$ est strictement à l'intérieur.`,
              `Réponse : $${dedans ? 1 : 0}$.`
            ]
          };
        }

        /* Tâche 4 — traduire une phrase en intervalle, puis en donner une
           borne. Le sens du crochet est l'enjeu, pas le calcul. */
        if (tache === 'traduction') {
          const a = rand(-6, 4), b = a + rand(3, 8);
          const strictG = pick([true, false]);
          return {
            statement: `Traduis en notation d'intervalle : « $x$ est ${strictG ? 'strictement supérieur' : 'supérieur ou égal'} à $${a}$ et strictement inférieur à $${b}$ ».<br/><br/>Donne la <strong>borne de gauche</strong> de cet intervalle.`,
            answer: a, tolerance: 0, unit: '',
            hint: `« Strictement » se traduit par un crochet OUVERT, « ou égal » par un crochet FERMÉ. Du côté droit, « strictement inférieur à $${b}$ » donne toujours un crochet ouvert.`,
            solution: [
              `« ${strictG ? 'Strictement supérieur' : 'Supérieur ou égal'} à $${a}$ » donne un crochet ${strictG ? 'ouvert' : 'fermé'} à gauche.`,
              `« Strictement inférieur à $${b}$ » donne un crochet ouvert à droite.`,
              `L'intervalle s'écrit donc $${strictG ? ']' : '['}${a};${b}[$, et sa borne de gauche est $${a}$.`
            ]
          };
        }

        /* Tâche 5 — nature d'un nombre. Réponse codée : 1 rationnel,
           0 irrationnel. C'est la classification, sans aucun calcul. */
        const cas = pick([
          { ecrit: `\\dfrac{${rand(2, 9)}}{${rand(2, 9)}}`, rationnel: true, pourquoi: 'c\'est un quotient de deux entiers, donc un rationnel par définition' },
          { ecrit: `${rand(1, 9)}{,}${rand(10, 99)}`, rationnel: true, pourquoi: 'un nombre décimal s\'écrit toujours comme une fraction de dénominateur une puissance de dix' },
          { ecrit: '\\sqrt{2}', rationnel: false, pourquoi: 'sa racine n\'est pas exacte : son écriture décimale est infinie et sans période' },
          { ecrit: '\\sqrt{3}', rationnel: false, pourquoi: 'sa racine n\'est pas exacte : son écriture décimale est infinie et sans période' },
          { ecrit: '\\pi', rationnel: false, pourquoi: 'c\'est l\'exemple historique d\'irrationnel : aucune fraction ne le donne exactement' },
          { ecrit: '\\sqrt{16}', rationnel: true, pourquoi: 'la racine tombe juste : $\\sqrt{16} = 4$, qui est même un entier' }
        ]);
        return {
          statement: `Le nombre $${cas.ecrit}$ est-il rationnel ?<br/><br/>Réponds par $1$ pour oui, $0$ pour non.`,
          answer: cas.rationnel ? 1 : 0, tolerance: 0, unit: '',
          hint: `Un nombre est rationnel s'il PEUT s'écrire comme un quotient de deux entiers — peu importe la façon dont il est écrit dans l'énoncé. Attention aux racines carrées : certaines tombent juste.`,
          solution: [
            `On ne juge pas sur l'écriture, mais sur la possibilité d'écrire le nombre comme un quotient de deux entiers.`,
            `Ici, ${cas.pourquoi}.`,
            `$${cas.ecrit}$ est donc ${cas.rationnel ? 'rationnel' : 'irrationnel'}. Réponse : $${cas.rationnel ? 1 : 0}$.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un aquarium doit maintenir une température entre $22\\,°C$ et $28\\,°C$ pour les poissons tropicaux ($I_1 = [22;28]$). Les plantes aquatiques nécessitent des températures entre $18\\,°C$ et $26\\,°C$ ($I_2 = [18;26]$). Le chauffage peut régler entre $15\\,°C$ et $30\\,°C$ ($I_3 = [15;30]$).',
      tasks: [
        'Déterminer l\'intervalle de températures convenant simultanément aux poissons et aux plantes ($I_1 \\cap I_2$).',
        'Déterminer l\'intervalle de températures convenant à au moins l\'un des deux ($I_1 \\cup I_2$).',
        'La plage du chauffage permet-elle de couvrir tout l\'intervalle $I_1 \\cap I_2$ ? Justifier avec $I_3 \\cap (I_1 \\cap I_2)$.'
      ],
      solutions: [
        '$I_1 \\cap I_2 = [22;28] \\cap [18;26] = [22;26]$.',
        '$I_1 \\cup I_2 = [22;28] \\cup [18;26] = [18;28]$.',
        '$I_3 \\cap [22;26] = [15;30] \\cap [22;26] = [22;26]$ : oui, le chauffage couvre entièrement l\'intervalle requis.'
      ],
      finalAnswer: 'Température idéale pour les deux : $[22;26]$°C. Le chauffage couvre cette plage.'
    },

    evaluation: {
      title: 'Évaluation — Ensembles de nombres et intervalles',
      duration: '25 min',
      questions: [
        {
          statement: 'Parmi les nombres suivants, lequel est irrationnel ?',
          type: 'multiple-choice',
          options: ['$\\dfrac{7}{3}$', '$0{,}\\overline{142857}$', '$\\sqrt{2}$', '$-4$'],
          answer: 2,
          points: 2,
          correction: '$\\frac{7}{3}$ et $0{,}\\overline{142857} = \\frac{1}{7}$ sont rationnels (quotient d\'entiers). $-4 \\in \\mathbb{Z} \\subset \\mathbb{Q}$. Seul $\\sqrt{2}$ est irrationnel : il ne peut pas s\'écrire sous forme $\\frac{p}{q}$.'
        },
        {
          statement: 'Écrire « $x$ supérieur ou égal à $-3$ et strictement inférieur à $5$ » en notation intervalle. Quelle est la bonne réponse ?',
          type: 'multiple-choice',
          options: ['$[-3;5]$', '$]-3;5[$', '$[-3;5[$', '$]-3;5]$'],
          answer: 2,
          points: 2,
          correction: '$x \\geq -3$ : crochet fermé en $-3$. $x < 5$ : crochet ouvert en $5$. Notation : $[-3;5[$.'
        },
        {
          statement: 'Calculer la longueur de l\'intervalle $]-2{,}5 ; 4{,}5[$.',
          type: 'numeric',
          answer: 7,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Longueur $= 4{,}5 - (-2{,}5) = 4{,}5 + 2{,}5 = 7$. Le type de crochets (ouverts ou fermés) ne change pas la longueur.'
        },
        {
          statement: 'Que vaut $[0;4] \\cap [2;7]$ ?',
          type: 'multiple-choice',
          options: ['$[0;7]$', '$[2;4]$', '$[0;4]$', '$[2;7]$'],
          answer: 1,
          points: 2,
          correction: 'L\'intersection contient les valeurs communes aux deux intervalles : de $\\max(0,2) = 2$ à $\\min(4,7) = 4$. Donc $[0;4] \\cap [2;7] = [2;4]$.'
        },
        {
          statement: 'Que vaut $[-1;3] \\cup [5;8]$ ? Peut-on simplifier cette union en un seul intervalle ?',
          type: 'multiple-choice',
          options: ['$[-1;8]$', '$[-1;3] \\cup [5;8]$ (non simplifiable car les intervalles sont disjoints)', '$[5;8]$', '$[-1;3]$'],
          answer: 1,
          points: 2,
          correction: 'Les intervalles $[-1;3]$ et $[5;8]$ ne se chevauchent pas (il n\'y a aucune valeur commune entre $3$ et $5$). L\'union ne peut donc pas se simplifier en un seul intervalle : on écrit $[-1;3] \\cup [5;8]$.'
        }
      ]
    }
  });
