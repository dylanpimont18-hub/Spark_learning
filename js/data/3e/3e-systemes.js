/* =========================================================
   Spark Learning – data/3e/3e-systemes.js
   Module : Systèmes d'équations (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-systemes',
    level: 1, subject: 'maths',
    icon: '🔗',
    title: "Systèmes d'équations",
    subtitle: 'Substitution, combinaison, deux inconnues',
    keywords: ['Système', 'Substitution', 'Addition', 'Élimination', 'Deux inconnues'],
    physics: 'Lois de Kirchhoff (tensions et courants), mélange de solutions, bilan forces',

    cours: {
      intro: 'Au distributeur du lycée, tu prends $3$ boissons et $2$ sandwichs : le ticket affiche $17$ €. Un camarade prend $1$ boisson et $4$ sandwichs et paie $24$ €.<br/><br/>' +
        '<strong>Combien coûte une boisson ?</strong><br/><br/>' +
        'Regarde d\'abord ton seul ticket. Il dit que $3b + 2s = 17$. C\'est vrai si la boisson vaut $1$ € et le sandwich $7$ €. C\'est tout aussi vrai si la boisson vaut $3$ € et le sandwich $4$ €. Et encore si elle vaut $5$ € et le sandwich $1$ €. Une seule information laisse une <strong>infinité de possibilités</strong> : elle ne suffit pas, et aucun calcul ne la rendra suffisante.<br/><br/>' +
        'Maintenant ajoute le second ticket : $b + 4s = 24$. Parmi toutes les combinaisons compatibles avec le premier ticket, une seule l\'est aussi avec le second. Les deux informations, <strong>prises ensemble</strong>, verrouillent la réponse — ici $b = 2$ € et $s = 5{,}5$ €, que tu peux vérifier sur les deux tickets.<br/><br/>' +
        'C\'est exactement cela, un <strong>système</strong> : deux inconnues exigent deux relations indépendantes. Une de moins, et le problème reste ouvert.<br/><br/>' +
        'Un <strong>système de deux équations</strong> à deux inconnues apparaît donc dès qu\'un problème lie deux quantités par deux relations. On dispose de deux méthodes pour le résoudre : la <strong>substitution</strong> et la <strong>combinaison</strong> (addition).<br/><br/>' +
        'La <strong>substitution</strong> isole une variable dans une équation et la remplace dans l\'autre. La <strong>combinaison</strong> multiplie une équation par un coefficient pour éliminer directement une variable — plus rapide quand les coefficients s\'y prêtent.<br/><br/>' +
        'En physique, les <strong>lois de Kirchhoff</strong> (circuits électriques) et les bilans de mélange (chimie) donnent naturellement des systèmes.<br/><br/>' +
        '<strong>Vérification obligatoire</strong> : réinjecter les valeurs dans LES DEUX équations — une erreur peut satisfaire l\'une mais pas l\'autre.',
      definitions: [
        { term: 'Système d\'équations', def: 'Ensemble de <strong>deux équations</strong> à <strong>deux inconnues</strong> ($x$ et $y$) que l\'on doit résoudre <strong>simultanément</strong>. La solution est le couple $(x\\,;\\,y)$ qui vérifie les deux équations en même temps.' },
        { term: 'Substitution', def: 'Méthode qui consiste à <strong>isoler une inconnue</strong> dans une équation (par exemple $y = 7 - 2x$) puis à <strong>remplacer</strong> cette expression dans l\'autre équation pour ne garder qu\'une seule inconnue.' },
        { term: 'Combinaison (addition)', def: 'Méthode qui consiste à <strong>multiplier</strong> une ou deux équations par des coefficients bien choisis, puis à les <strong>additionner</strong> pour éliminer directement une inconnue.' },
        { term: 'Solution du système', def: 'Le couple $(x\\,;\\,y)$ qui satisfait <strong>les deux équations</strong> simultanément. Un système peut avoir une solution unique, aucune solution (droites parallèles) ou une infinité (droites confondues).' }
      ],
      method: {
        title: 'Deux méthodes',
        steps: [
          '<strong>Méthode 1 — Substitution</strong> : exprimer une inconnue en fonction de l\'autre (ex. $y = 7 - 2x$), puis substituer dans la 2e équation pour n\'avoir qu\'une seule inconnue.',
          '<strong>Méthode 2 — Combinaison</strong> : multiplier une équation par un coefficient bien choisi, puis additionner les deux équations pour éliminer directement une inconnue.',
          '<strong>Vérification obligatoire</strong> : réinjecter les valeurs trouvées dans les <strong>deux</strong> équations de départ. Une seule vérification ne suffit pas !'
        ]
      },
      example: {
        statement: 'Résoudre le système $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$ par la méthode de combinaison.',
        steps: [
          '<strong>Addition des deux équations</strong> : $(2x + y) + (x - y) = 7 + 2$, soit $3x = 9$, donc $x = 3$.',
          '<strong>Substitution de $x$</strong> dans la 2e équation : $3 - y = 2$, donc $y = 1$.',
          '<strong>Vérification</strong> : dans la 1re : $2(3) + 1 = 7$ ✓ ; dans la 2e : $3 - 1 = 2$ ✓. Le couple $(3\\,;\\,1)$ est bien la solution.'
        ],
        answer: 'La solution du système est $(x\\,;\\,y) = (3\\,;\\,1)$.'
      },
      formulas: [
        '$\\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$',
        'Par substitution : $x = \\dfrac{c - by}{a}$ puis substituer.',
        'Par combinaison : multiplier pour éliminer une variable.'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Résolution graphique',
        title: 'Deux droites, un point d\'intersection : la solution du système',
        description: 'Le système $\\begin{cases} 2x+y=7 \\\\ x-y=2 \\end{cases}$ de l\'exemple du cours, résolu ici graphiquement : chaque droite représente une équation, et leur point commun est la solution.',
        svg: `
          <svg viewBox="0 0 380 400" role="img" aria-labelledby="sys3e-title sys3e-desc">
            <title id="sys3e-title">Deux droites et leur point d'intersection</title>
            <desc id="sys3e-desc">Repere avec deux droites D1 d'equation 2x plus y egal 7 et D2 d'equation x moins y egal 2, qui se croisent au point de coordonnees 3 et 1, solution du systeme.</desc>
            <defs>
              <marker id="arrow-3e-systemes" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <line class="grid-line" x1="70" y1="350" x2="70" y2="75"></line>
            <line class="grid-line" x1="120" y1="350" x2="120" y2="75"></line>
            <line class="grid-line" x1="170" y1="350" x2="170" y2="75"></line>
            <line class="grid-line" x1="220" y1="350" x2="220" y2="75"></line>
            <line class="grid-line" x1="270" y1="350" x2="270" y2="75"></line>
            <line class="grid-line" x1="320" y1="350" x2="320" y2="75"></line>

            <line class="grid-line" x1="70" y1="350" x2="345" y2="350"></line>
            <line class="grid-line" x1="70" y1="325" x2="345" y2="325"></line>
            <line class="grid-line" x1="70" y1="300" x2="345" y2="300"></line>
            <line class="grid-line" x1="70" y1="275" x2="345" y2="275"></line>
            <line class="grid-line" x1="70" y1="250" x2="345" y2="250"></line>
            <line class="grid-line" x1="70" y1="225" x2="345" y2="225"></line>
            <line class="grid-line" x1="70" y1="200" x2="345" y2="200"></line>
            <line class="grid-line" x1="70" y1="175" x2="345" y2="175"></line>
            <line class="grid-line" x1="70" y1="150" x2="345" y2="150"></line>
            <line class="grid-line" x1="70" y1="125" x2="345" y2="125"></line>
            <line class="grid-line" x1="70" y1="100" x2="345" y2="100"></line>
            <line class="grid-line" x1="70" y1="75" x2="345" y2="75"></line>

            <line class="axis" x1="70" y1="275" x2="345" y2="275" marker-end="url(#arrow-3e-systemes)"></line>
            <line class="axis" x1="120" y1="350" x2="120" y2="75" marker-end="url(#arrow-3e-systemes)"></line>
            <text class="axis-label" x="350" y="268">x</text>
            <text class="axis-label" x="128" y="80">y</text>

            <text class="tick-label" x="120" y="289" text-anchor="middle">0</text>
            <text class="tick-label" x="170" y="289" text-anchor="middle">1</text>
            <text class="tick-label" x="220" y="289" text-anchor="middle">2</text>
            <text class="tick-label" x="270" y="289" text-anchor="middle">3</text>
            <text class="tick-label" x="320" y="289" text-anchor="middle">4</text>

            <text class="tick-label" x="112" y="329" text-anchor="end">-2</text>
            <text class="tick-label" x="112" y="254" text-anchor="end">1</text>
            <text class="tick-label" x="112" y="204" text-anchor="end">3</text>
            <text class="tick-label" x="112" y="154" text-anchor="end">5</text>
            <text class="tick-label" x="112" y="104" text-anchor="end">7</text>

            <line class="curve-main" x1="95" y1="75" x2="345" y2="325"></line>
            <line x1="70" y1="350" x2="345" y2="212.5" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>

            <line class="guide-line" x1="270" y1="250" x2="270" y2="275"></line>
            <line class="guide-line" x1="120" y1="250" x2="270" y2="250"></line>
            <circle class="plot-point" cx="270" cy="250" r="6"></circle>
            <text class="annotation-label" x="280" y="238">S(3 ; 1)</text>

            <circle class="plot-point-alt" cx="120" cy="100" r="4"></circle>
            <circle class="plot-point-alt" cx="120" cy="325" r="4"></circle>

            <line x1="140" y1="25" x2="170" y2="25" class="curve-main"></line>
            <text class="annotation-label" x="178" y="29">D1 : 2x + y = 7</text>
            <line x1="140" y1="45" x2="170" y2="45" stroke="color-mix(in srgb, var(--diagram-accent) 55%, var(--text))" stroke-width="3" stroke-dasharray="9 6" stroke-linecap="round"></line>
            <text class="annotation-label" x="178" y="49">D2 : x − y = 2</text>
          </svg>
        `,
        notes: [
          'La droite D1 représente l\'équation $2x + y = 7$ ; la droite D2 représente $x - y = 2$.',
          'Le point d\'intersection $S(3\\,;\\,1)$ est l\'unique couple qui appartient aux deux droites, donc qui vérifie les deux équations en même temps.',
          'Vérification : $2 \\times 3 + 1 = 7$ ✓ et $3 - 1 = 2$ ✓ — cela confirme la solution trouvée par combinaison dans le cours.'
        ],
        reading: 'Repère l\'unique point où les deux droites se croisent : c\'est le seul point du plan qui appartient à la fois à D1 et à D2, donc l\'unique solution du système.',
        caption: 'Représentation graphique du système $\\begin{cases} 2x+y=7 \\\\ x-y=2 \\end{cases}$ : les droites se croisent en $(x\\,;\\,y)=(3\\,;\\,1)$, solution trouvée par combinaison dans l\'exemple du cours.'
      },
      /* SCHÉMA SECONDAIRE — UN SEUL, ajouté le 2026-09-13.
         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule.

         Ce chapitre était le seul du niveau à n'avoir aucun schéma secondaire.
         Sa figure principale montre deux droites qui se coupent, donc le cas
         GÉNÉRAL — celui où tout se passe bien. Or le récapitulatif du chapitre
         annonce trois cas possibles, et les deux autres n'étaient illustrés
         nulle part : l'élève lit « si les droites sont parallèles, le système
         n'a aucune solution » sans avoir jamais vu à quoi cela ressemble.

         LE MALENTENDU EXACT, et il coûte des points au brevet : devant un
         système sans solution, l'élève ne conclut pas « aucune solution », il
         conclut qu'il s'est trompé. Il refait le calcul deux fois, perd du
         temps, et finit par écrire un couple au hasard — parce que rien dans
         son expérience ne lui a montré qu'un système PEUT ne pas avoir de
         solution. Le cas des droites confondues produit la même panique en
         sens inverse : il tombe sur $0 = 0$ et croit avoir tout effacé.

         TOUTES LES COORDONNÉES SONT CALCULÉES à partir des trois systèmes, et
         les trois cas sont vérifiés ALGÉBRIQUEMENT par leur déterminant dans
         scripts/manuel/tests/diagrams-3e.test.js : $-3$ pour le premier (une
         solution, le couple $(3\,;\,1)$), $0$ pour les deux autres, distingués
         par la proportionnalité des constantes. Les trois repères partagent le
         même pas, la même origine relative et le même cadrage : seule change
         la position des droites. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Les trois cas',
          title: 'Un système peut n\'avoir aucune solution, ou en avoir une infinité',
          description: 'Deux droites du plan n\'ont que trois façons de se placer l\'une par rapport à l\'autre, et un système à deux inconnues n\'a donc que trois réponses possibles. <strong>Tomber sur « aucune solution » n\'est pas s\'être trompé</strong> : c\'est une réponse complète.',
          svg: `
            <svg viewBox="0 0 400 187" role="img" aria-labelledby="sys-cas-title sys-cas-desc">
              <title id="sys-cas-title">Les trois positions possibles de deux droites</title>
              <desc id="sys-cas-desc">Trois reperes identiques sont places cote a cote, avec le meme pas et le meme cadrage. Dans celui de gauche, les deux droites se croisent en un point unique, marque d'un rond plein, d'abscisse trois et d'ordonnee un : le systeme possede une solution et une seule. Dans celui du milieu, les deux droites montent exactement de la meme facon sans jamais se rencontrer : elles sont paralleles et distinctes, et le systeme n'a aucune solution. Dans celui de droite, les deux droites sont confondues, l'une exactement sur l'autre : toutes les deux representent la meme equation, et le systeme possede une infinite de solutions. Ce sont les trois seules configurations possibles pour deux droites du plan.</desc>

              <line class="axis" x1="14" y1="126" x2="119" y2="126"></line>
              <line class="axis" x1="29" y1="141" x2="29" y2="36"></line>
              <line class="curve-main" x1="36.5" y1="36" x2="89" y2="141"></line>
              <line class="curve-main" x1="44" y1="141" x2="119" y2="66"></line>
              <circle class="plot-point" cx="74" cy="111" r="5"></circle>
              <text class="annotation-label" x="66.5" y="26" text-anchor="middle">une seule solution</text>
              <text class="label-soft" x="66.5" y="160" text-anchor="middle">les droites se croisent</text>
              <text class="tick-label" x="66.5" y="174" text-anchor="middle">ici le couple 3 et 1</text>

              <line class="axis" x1="148" y1="126" x2="253" y2="126"></line>
              <line class="axis" x1="163" y1="141" x2="163" y2="36"></line>
              <line class="curve-main" x1="148" y1="81" x2="208" y2="141"></line>
              <line class="curve-main" x1="148" y1="36" x2="253" y2="141"></line>
              <text class="annotation-label" x="200.5" y="26" text-anchor="middle">aucune solution</text>
              <text class="label-soft" x="200.5" y="160" text-anchor="middle">les droites sont paralleles</text>
              <text class="tick-label" x="200.5" y="174" text-anchor="middle">elles ne se rencontrent jamais</text>

              <line class="axis" x1="282" y1="126" x2="387" y2="126"></line>
              <line class="axis" x1="297" y1="141" x2="297" y2="36"></line>
              <line class="graph-line" x1="284" y1="66" x2="357" y2="139"></line>
              <line class="curve-main" x1="282" y1="68" x2="355" y2="141"></line>
              <text class="annotation-label" x="334.5" y="26" text-anchor="middle">une infinite de solutions</text>
              <text class="label-soft" x="334.5" y="160" text-anchor="middle">les droites sont confondues</text>
              <text class="tick-label" x="334.5" y="174" text-anchor="middle">tous les points conviennent</text>
            </svg>
          `,
          notes: [
            '<strong>Deux droites qui se croisent</strong> : un seul point leur est commun, donc un seul couple vérifie les deux équations à la fois. C\'est le cas ordinaire, celui de la figure du cours.',
            '<strong>Deux droites parallèles distinctes</strong> : aucun point commun, donc <strong>aucune</strong> solution. Au calcul, tu t\'en aperçois en tombant sur quelque chose d\'impossible, du genre $0 = 3$. Ce n\'est pas une erreur de ta part : c\'est la réponse.',
            '<strong>Deux droites confondues</strong> : la seconde équation est un multiple de la première, elle ne dit donc rien de neuf. Tous les points de la droite conviennent, d\'où une <strong>infinité</strong> de solutions. Au calcul, tu tombes sur $0 = 0$.',
            'Les deux dernières vignettes sont exactement ce que l\'on obtient quand les deux inconnues <strong>disparaissent ensemble</strong> pendant la résolution. Le réflexe à prendre est alors de regarder ce qui reste : si c\'est faux, aucune solution ; si c\'est vrai, une infinité.',
            'Il n\'existe pas de quatrième cas. Deux droites du plan ne peuvent pas se couper en deux points, ni en trois : c\'est pourquoi un système du premier degré ne répond jamais « deux solutions ».'
          ],
          reading: 'Regarde uniquement la position relative des deux droites, jamais leurs équations. C\'est elle qui décide du nombre de solutions, et les trois cas ci-dessus sont les seuls possibles.',
          caption: 'Les trois positions possibles de deux droites : sécantes (une solution), parallèles distinctes (aucune), confondues (une infinité).'
        }
      ],
      recap: [
        '<strong>Deux méthodes</strong> : la substitution isole puis remplace ; la combinaison multiplie puis additionne pour éliminer une inconnue.',
        '<strong>Vérification obligatoire</strong> : toujours tester le couple trouvé dans les DEUX équations de départ. Une seule ne suffit pas !',
        '<strong>Cas particuliers</strong> : si les deux droites sont parallèles, le système n\'a aucune solution ; si elles sont confondues, il en a une infinité.',
        '<strong>En physique</strong> : les lois de Kirchhoff et les bilans de mélange donnent naturellement des systèmes à résoudre.'
      ],
      piege: 'Oublier de vérifier les solutions dans les deux équations. Une erreur de calcul dans la substitution peut donner un résultat faux qui satisfait une équation mais pas l\'autre. La vérification ne prend que 30 secondes et évite les erreurs.'
    },

    quiz: [
      {
        q: 'Un élève résout $\\begin{cases} x + y = 7 \\\\ 2x - y = 5 \\end{cases}$ et trouve $x = 4$, $y = 4$. Comment vérifier qu\'il a tort ?',
        options: [
          'Vérifier dans la 1re équation : $4 + 4 = 8 \\neq 7$, donc la solution est fausse',
          'On ne peut pas vérifier sans tout recalculer',
          'Vérifier dans une seule équation suffit pour confirmer',
          'Le résultat est correct, $x = 4, y = 4$'
        ],
        answer: 0,
        correction: 'La vérification dans la 1re équation : $4 + 4 = 8 \\neq 7$ — la solution est fausse. La vraie solution : addition des deux équations $\\Rightarrow 3x = 12 \\Rightarrow x = 4$, puis $y = 7 - 4 = 3$ (et non $4$). L\'erreur vient d\'avoir oublié de recalculer $y$ après avoir trouvé $x$.'
      },
      {
        q: 'Résoudre $\\begin{cases} 2x + y = 7 \\\\ x - y = 2 \\end{cases}$',
        options: ['$x = 2,\\ y = 3$', '$x = 3,\\ y = 1$', '$x = 4,\\ y = -1$', '$x = 1,\\ y = 5$'],
        answer: 1,
        correction: 'Addition : $3x = 9 \\Rightarrow x = 3$. Puis : $3 - y = 2 \\Rightarrow y = 1$. Vérif : $2(3)+1 = 7$ ✓'
      },
      {
        q: 'Un mélange contient deux solutions : l\'une à $20\\%$ de sel, l\'autre à $5\\%$. On mélange $x$ L de la première avec $y$ L de la seconde pour obtenir $10$ L à $10\\%$. Quelle équation représente la conservation du sel ?',
        options: ['$0{,}2x + 0{,}05y = 10$', '$0{,}2x + 0{,}05y = 1$', '$x + y = 1$', '$0{,}15x = 0{,}5y$'],
        answer: 1,
        correction: 'Conservation du sel : $0{,}20x + 0{,}05y = 10\\% \\times 10\\,\\text{L} = 1\\,\\text{L}$. Et $x + y = 10$. C\'est bien l\'équation b.'
      }
    ],

    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — un système d'achats à deux articles,
         dont on demande toujours $x$ — habillé de six contextes tirés par
         pick(). Mesure à 60 tirages : 6 moules d'énoncé, mais **1 seule tâche
         distincte**.

         Deux défauts au-delà de la répétition. D'abord l'énoncé DONNAIT le
         système tout écrit (« Le système correspondant est ... »), ce qui
         supprimait la mise en équation : la seule vraie difficulté du chapitre
         au brevet. Ensuite la « solution » ne résolvait rien — elle annonçait
         $x$ et $y$ puis vérifiait, ce qui est un contrôle, pas une méthode. Un
         élève bloqué n'y trouvait aucune aide : le corrigé supposait connue la
         réponse qu'il cherchait.

         APRÈS : sept familles de tâches, toutes au programme de troisième.
           - 'combinaison' : le système est donné, résolu par combinaison, avec
                           la méthode RÉELLEMENT déroulée dans le corrigé ;
           - 'substitution' : un coefficient vaut 1, la substitution s'impose ;
           - 'miseEnEquation' : la situation seule, le système à écrire ;
           - 'secondeInconnue' : on demande $y$ et non $x$, pour que la réponse
                           attendue ne soit pas toujours la première inconnue ;
           - 'choisirMethode' : nommer la méthode la plus rapide, sans résoudre ;
           - 'verifier'  : tester si un couple est solution, ce qui installe la
                           définition — un couple doit vérifier les DEUX
                           équations, et l'élève n'en teste qu'une ;
           - 'somme'     : le classique « somme et différence », où le système
                           se devine avant de se résoudre.

         Aucune figure : chapitre de calcul pur (section 9). */
      generate() {
        const tache = pick(['combinaison', 'substitution', 'miseEnEquation',
                            'secondeInconnue', 'choisirMethode', 'verifier', 'somme']);

        /* Fabrique un système à solution ENTIÈRE, de déterminant non nul. On
           part toujours de la solution et on en déduit les seconds membres :
           aucun tirage ne peut donner un système impossible ou indéterminé. */
        function systeme(maxCoef) {
          const x = rand(2, 8), y = rand(1, 7);
          const a = rand(1, maxCoef), b = rand(1, maxCoef);
          let d, e;
          do { d = rand(1, maxCoef); e = rand(1, maxCoef); } while (a * e === b * d);
          return { x, y, a, b, d, e, c: a * x + b * y, f: d * x + e * y };
        }
        /* Un coefficient 1 ne s'écrit PAS devant l'inconnue : « 1x + 1y = 9 »
           est sorti d'une première version qui interpolait le coefficient tel
           quel. C'est une faute d'écriture mathématique, pas une coquette :
           aucun manuel n'écrit 1x, et l'élève qui la voit imprimée la
           reproduit. */
        const coef = (n, lettre) => (n === 1 ? lettre : n + lettre);
        const ecrire = (s) => `$\\begin{cases} ${coef(s.a, 'x')} + ${coef(s.b, 'y')} = ${s.c} \\\\ ${coef(s.d, 'x')} + ${coef(s.e, 'y')} = ${s.f} \\end{cases}$`;

        if (tache === 'combinaison') {
          const s = systeme(4);
          /* On élimine y en multipliant chaque ligne par le coefficient de y de
             l'autre. Le corrigé DÉROULE ce calcul au lieu d'annoncer la
             réponse : c'est ce qui manquait à l'ancienne version. */
          const m1 = s.e, m2 = s.b;
          const coefX = s.a * m1 - s.d * m2, membre = s.c * m1 - s.f * m2;
          return {
            statement: `Résous le système suivant par la méthode de <strong>combinaison</strong> :<br/><br/>${ecrire(s)}<br/><br/>Donne la valeur de $x$.`,
            answer: s.x, tolerance: 0.01, unit: '',
            hint: `Pour éliminer $y$, multiplie la première ligne par $${m1}$ et la seconde par $${m2}$ : les coefficients de $y$ deviendront égaux.<br/><br/>Il ne restera qu'à soustraire les deux lignes.`,
            solution: [
              `On multiplie la première ligne par $${m1}$ et la seconde par $${m2}$, pour que $y$ ait le même coefficient dans les deux : $${s.a * m1}x + ${s.b * m1}y = ${s.c * m1}$ et $${s.d * m2}x + ${s.e * m2}y = ${s.f * m2}$.`,
              `On soustrait la seconde de la première : les termes en $y$ disparaissent, et il reste $${coefX}x = ${membre}$.`,
              `$x = \\dfrac{${membre}}{${coefX}} = ${s.x}$.<br/><br/>En reportant dans la première équation de départ, on obtiendrait $y = ${s.y}$. Contrôle : $${s.a} \\times ${s.x} + ${s.b} \\times ${s.y} = ${s.c}$.`
            ]
          };
        }

        if (tache === 'substitution') {
          /* UN COEFFICIENT VAUT 1 : la substitution est alors la méthode
             rapide, et c'est ce qu'il faut apprendre à repérer. */
          const x = rand(2, 8), y = rand(1, 7);
          const b = rand(2, 4), d = rand(2, 4), e = rand(1, 4);
          const c = x + b * y, f = d * x + e * y;
          return {
            /* Le système est écrit ici à la main (le coefficient de x vaut 1
               par construction), donc il passe AUSSI par coef() : sans cela il
               imprimait « 3x + 1y », le helper ne couvrant que ecrire(). */
            statement: `Résous le système suivant par la méthode de <strong>substitution</strong> :<br/><br/>` +
              `$\\begin{cases} x + ${coef(b, 'y')} = ${c} \\\\ ${coef(d, 'x')} + ${coef(e, 'y')} = ${f} \\end{cases}$<br/><br/>Donne la valeur de $y$.`,
            answer: y, tolerance: 0.01, unit: '',
            hint: `Dans la première équation, $x$ est déjà presque seul : son coefficient vaut $1$.<br/><br/>Isole-le — $x = ${c} - ${b}y$ — puis remplace $x$ par cette expression dans la seconde équation.`,
            solution: [
              `Le coefficient de $x$ vaut $1$ dans la première équation : on l'isole sans aucun calcul, $x = ${c} - ${b}y$.`,
              `On remplace $x$ par cette expression dans la seconde : $${d}(${c} - ${b}y) + ${e}y = ${f}$, soit $${d * c} - ${d * b}y + ${e}y = ${f}$, donc $${e - d * b < 0 ? '-' : ''}${Math.abs(e - d * b)}y = ${f - d * c}$.`,
              `$y = ${y}$, puis $x = ${c} - ${b} \\times ${y} = ${x}$.<br/><br/>La substitution est la bonne méthode ici précisément parce qu'un coefficient valait $1$ : sans cela, isoler aurait introduit des fractions.`
            ]
          };
        }

        if (tache === 'miseEnEquation') {
          /* LE SYSTÈME N'EST PLUS DONNÉ. C'est la vraie difficulté du brevet,
             et l'ancienne banque l'écrivait dans l'énoncé. */
          const s = systeme(3);
          /* GENRE ET PLURIEL PORTÉS PAR LE CONTEXTE, jamais déduits du mot.
             Une première version écrivait « un » en dur et ajoutait « s » à
             l'aveugle : elle a produit « un vis », « un baguette » et surtout
             « 2 viss », le mot se terminant déjà par un s. Troisième défaut du
             même genre attrapé ce jour-là, après l'accord du pronom en
             trigonométrie et l'élision en équations — tous invisibles tant que
             le générateur ne tirait qu'un seul contexte. */
          const ctx = pick([
            { p1: 'cahier', pl1: 'cahiers', a1: 'un', p2: 'stylo', pl2: 'stylos', a2: 'un', l: 'Dans une papeterie', v: 'commande', av: 'Une première', bv: 'Une seconde' },
            { p1: 'baguette', pl1: 'baguettes', a1: 'une', p2: 'croissant', pl2: 'croissants', a2: 'un', l: 'Dans une boulangerie', v: 'achat', av: 'Un premier', bv: 'Un second' },
            { p1: 'rosier', pl1: 'rosiers', a1: 'un', p2: 'bulbe', pl2: 'bulbes', a2: 'un', l: 'Dans une jardinerie', v: 'achat', av: 'Un premier', bv: 'Un second' },
            { p1: 'vis', pl1: 'vis', a1: 'une', p2: 'boulon', pl2: 'boulons', a2: 'un', l: 'Dans une quincaillerie', v: 'achat', av: 'Un premier', bv: 'Un second' }
          ]);
          const n1 = (n) => `$${n}$ ` + (n > 1 ? ctx.pl1 : ctx.p1);
          const n2 = (n) => `$${n}$ ` + (n > 1 ? ctx.pl2 : ctx.p2);
          return {
            statement: `${ctx.l}, ${ctx.a1} <strong>${ctx.p1}</strong> coûte $x$ € et ${ctx.a2} <strong>${ctx.p2}</strong> coûte $y$ €.<br/><br/>` +
              `${ctx.av} ${ctx.v} : ${n1(s.a)} et ${n2(s.b)} pour $${s.c}$ €.<br/><br/>` +
              `${ctx.bv} ${ctx.v} : ${n1(s.d)} et ${n2(s.e)} pour $${s.f}$ €.<br/><br/>` +
              `Quel est le <strong>prix ${ctx.a1 === 'une' ? "d'une" : "d'un"} ${ctx.p1}</strong>, en euros ?<br/><br/><em>Écris d'abord le système, puis résous-le.</em>`,
            answer: s.x, tolerance: 0.01, unit: '',
            hint: `Chaque ${ctx.v} donne une équation : le nombre de ${ctx.pl1} multiplié par son prix $x$, plus le nombre de ${ctx.pl2} multiplié par son prix $y$, égale le total payé.<br/><br/>Deux ${ctx.v}s, donc deux équations.`,
            solution: [
              `Chaque ${ctx.v} se traduit par une équation. Le système est ${ecrire(s)}.`,
              `On le résout par combinaison ou par substitution.`,
              `On trouve $x = ${s.x}$ et $y = ${s.y}$ : un ${ctx.p1} coûte $${s.x}$ €.<br/><br/>Contrôle sur le second ${ctx.v} : $${s.d} \\times ${s.x} + ${s.e} \\times ${s.y} = ${s.f}$ €, ce qui correspond bien à l'énoncé.`
            ]
          };
        }

        if (tache === 'secondeInconnue') {
          /* ON DEMANDE y. L'ancienne banque demandait TOUJOURS x : un élève
             pouvait finir par répondre sans lire la question. */
          const s = systeme(4);
          return {
            statement: `Résous le système suivant :<br/><br/>${ecrire(s)}<br/><br/>Donne la valeur de <strong>$y$</strong>.`,
            answer: s.y, tolerance: 0.01, unit: '',
            hint: `Lis bien ce qu'on te demande : c'est $y$, et non $x$.<br/><br/>Tu peux éliminer $x$ directement, en multipliant la première ligne par $${s.d}$ et la seconde par $${s.a}$.`,
            solution: [
              `On choisit d'éliminer $x$, puisque c'est $y$ que l'on cherche : on multiplie la première ligne par $${s.d}$ et la seconde par $${s.a}$.`,
              `Les termes en $x$ deviennent identiques et disparaissent par soustraction ; il reste une équation à la seule inconnue $y$.`,
              `On obtient $y = ${s.y}$ (et $x = ${s.x}$).<br/><br/>Contrôle : $${s.a} \\times ${s.x} + ${s.b} \\times ${s.y} = ${s.c}$.`
            ]
          };
        }

        if (tache === 'choisirMethode') {
          /* NOMMER LA MÉTHODE, sans résoudre. Le choix de méthode est ce qui
             sépare un élève rapide d'un élève qui s'enlise, et rien ne le
             travaillait. */
          const cas = pick([
            { s: '$\\begin{cases} x + 3y = 11 \\\\ 2x - y = 1 \\end{cases}$', bon: 1, nom: 'la substitution',
              pourquoi: 'le coefficient de $x$ vaut $1$ dans la première équation : on l\'isole sans introduire la moindre fraction' },
            { s: '$\\begin{cases} 3x + 2y = 16 \\\\ 5x - 2y = 8 \\end{cases}$', bon: 2, nom: 'la combinaison',
              pourquoi: 'les coefficients de $y$ sont opposés, $+2$ et $-2$ : il suffit d\'additionner les deux lignes pour que $y$ disparaisse, sans aucune multiplication préalable' },
            { s: '$\\begin{cases} 4x + 3y = 27 \\\\ 4x - y = 11 \\end{cases}$', bon: 2, nom: 'la combinaison',
              pourquoi: 'les coefficients de $x$ sont déjà égaux : une simple soustraction élimine $x$' },
            { s: '$\\begin{cases} y = 2x - 1 \\\\ 3x + 2y = 12 \\end{cases}$', bon: 1, nom: 'la substitution',
              pourquoi: '$y$ est déjà exprimé en fonction de $x$ : il n\'y a plus qu\'à le remplacer dans la seconde équation' }
          ]);
          return {
            statement: `On considère le système suivant :<br/><br/>${cas.s}<br/><br/>` +
              `Quelle méthode est la plus <strong>rapide</strong> pour le résoudre ?<br/><br/>` +
              `Réponds par $1$ pour la <strong>substitution</strong>, $2$ pour la <strong>combinaison</strong>.`,
            answer: cas.bon, tolerance: 0.01, unit: '',
            hint: `Regarde les coefficients avant de te lancer.<br/><br/>Un coefficient égal à $1$ appelle la substitution ; des coefficients égaux ou opposés appellent la combinaison.`,
            solution: [
              `Les deux méthodes aboutissent toujours : la question n'est pas laquelle marche, mais laquelle évite les fractions et les calculs inutiles.`,
              `Ici, ${cas.pourquoi}.`,
              `La méthode la plus rapide est donc <strong>${cas.nom}</strong>. Réponse : $${cas.bon}$.`
            ]
          };
        }

        if (tache === 'verifier') {
          /* UN COUPLE DOIT VÉRIFIER LES DEUX ÉQUATIONS. L'élève n'en teste
             souvent qu'une, et le tirage propose justement, une fois sur deux,
             un couple qui vérifie la première et pas la seconde. */
          const s = systeme(3);
          const juste = Math.random() > 0.5;
          const xt = juste ? s.x : s.x + pick([-1, 1]);
          const yt = juste ? s.y : parseFloat(((s.c - s.a * xt) / s.b).toFixed(2));
          const v1 = Math.abs(s.a * xt + s.b * yt - s.c) < 0.005;
          const v2 = Math.abs(s.d * xt + s.e * yt - s.f) < 0.005;
          return {
            statement: `On considère le système ${ecrire(s)}<br/><br/>` +
              `Le couple $(x\\,;\\,y) = (${fr(xt)}\\,;\\,${fr(yt)})$ est-il <strong>solution</strong> de ce système ?<br/><br/>` +
              `Réponds par $1$ pour oui, $0$ pour non.`,
            answer: (v1 && v2) ? 1 : 0, tolerance: 0.01, unit: '',
            hint: `Un couple est solution du système seulement s'il vérifie les <strong>deux</strong> équations.<br/><br/>Teste-les l'une après l'autre : vérifier la première ne suffit pas.`,
            solution: [
              `Première équation : $${s.a} \\times ${fr(xt)} + ${s.b} \\times ${fr(yt)} = ${fr(parseFloat((s.a * xt + s.b * yt).toFixed(2)))}$, à comparer à $${s.c}$ — ${v1 ? 'elle est vérifiée' : 'elle n\'est pas vérifiée'}.`,
              `Seconde équation : $${s.d} \\times ${fr(xt)} + ${s.e} \\times ${fr(yt)} = ${fr(parseFloat((s.d * xt + s.e * yt).toFixed(2)))}$, à comparer à $${s.f}$ — ${v2 ? 'elle est vérifiée' : 'elle n\'est pas vérifiée'}.`,
              (v1 && v2)
                ? `Les <strong>deux</strong> équations sont vérifiées : le couple est bien solution. Réponse : $1$.`
                : `Une équation au moins n'est pas vérifiée : le couple n'est <strong>pas</strong> solution. Réponse : $0$.<br/><br/>C'est le piège du chapitre : un couple peut vérifier une équation et pas l'autre. Il faut toujours tester les deux.`
            ]
          };
        }

        /* tache === 'somme' : le classique « somme et différence ». Le système
           est si simple qu'on peut le deviner, ce qui permet de travailler la
           MISE EN ÉQUATION sans que la résolution fasse écran. */
        const grand = rand(8, 25), petit = rand(2, grand - 2);
        const somme = grand + petit, diff = grand - petit;
        const ctx = pick([
          { d: 'Deux nombres', a: 'Leur somme', b: 'leur différence', q: 'le plus grand des deux' },
          { d: 'Deux entiers', a: 'Leur somme', b: 'leur différence', q: 'le plus grand des deux' }
        ]);
        return {
          statement: `${ctx.d} sont tels que :<br/><br/>${ctx.a} vaut $${somme}$, et ${ctx.b} vaut $${diff}$.<br/><br/>` +
            `Quel est <strong>${ctx.q}</strong> ?<br/><br/><em>Pose un système, puis résous-le.</em>`,
          answer: grand, tolerance: 0.01, unit: '',
          hint: `Appelle $x$ le plus grand et $y$ le plus petit.<br/><br/>Tu obtiens $x + y = ${somme}$ et $x - y = ${diff}$ : en <strong>additionnant</strong> ces deux lignes, $y$ disparaît tout seul.`,
          solution: [
            `On note $x$ le plus grand et $y$ le plus petit : $\\begin{cases} x + y = ${somme} \\\\ x - y = ${diff} \\end{cases}$`,
            `Les coefficients de $y$ sont opposés : en additionnant les deux lignes, $y$ disparaît et il reste $2x = ${somme} + ${diff} = ${somme + diff}$.`,
            `$x = ${grand}$, puis $y = ${somme} - ${grand} = ${petit}$.<br/><br/>Contrôle : $${grand} + ${petit} = ${somme}$ et $${grand} - ${petit} = ${diff}$.`
          ]
        };
      }
    },

    probleme: {
      context: 'Dans un circuit avec deux branches en parallèle, les lois de Kirchhoff donnent : $I_1 + I_2 = 3\\,\\text{A}$ (loi des nœuds) et $2I_1 - 3I_2 = 0$ (loi des mailles, car les tensions sont égales et $R_1 = 2\\,\\Omega$, $R_2 = 3\\,\\Omega$).',
      schema: null,
      tasks: [
        'Identifier les deux inconnues et les deux équations du système.',
        'Résoudre le système par substitution ou combinaison.',
        'Calculer les tensions $U_1 = R_1 I_1$ et $U_2 = R_2 I_2$ et vérifier qu\'elles sont égales (branches parallèles).'
      ],
      solutions: [
        'Inconnues : $I_1$ et $I_2$. Système : $\\begin{cases} I_1 + I_2 = 3 \\\\ 2I_1 = 3I_2 \\end{cases}$.',
        'De l\'éq 2 : $I_1 = \\dfrac{3}{2}I_2$. Substitution : $\\dfrac{3}{2}I_2 + I_2 = 3 \\Rightarrow \\dfrac{5}{2}I_2 = 3 \\Rightarrow I_2 = 1{,}2\\,\\text{A}$. Donc $I_1 = 1{,}8\\,\\text{A}$.',
        '$U_1 = 2 \\times 1{,}8 = 3{,}6\\,\\text{V}$ et $U_2 = 3 \\times 1{,}2 = 3{,}6\\,\\text{V}$. Égaux ✓ — cohérent avec un montage en parallèle.'
      ],
      finalAnswer: '$I_1 = 1{,}8\\,\\text{A}$, $I_2 = 1{,}2\\,\\text{A}$, $U = 3{,}6\\,\\text{V}$'
    },

    evaluation: {
      title: 'Évaluation — Systèmes d\'équations',
      duration: '30 min',
      questions: [
        {
          statement: 'Résoudre le système $\\begin{cases} x + y = 10 \\\\ 3x - y = 6 \\end{cases}$. Donner la valeur de $x$.',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Addition des deux équations : $x + y + 3x - y = 10 + 6 \\Rightarrow 4x = 16 \\Rightarrow x = 4$. Puis $y = 10 - 4 = 6$. Vérification : $3 \\times 4 - 6 = 6$ ✓.'
        },
        {
          statement: 'Pour résoudre $\\begin{cases} 2x + 3y = 12 \\\\ 4x + 3y = 18 \\end{cases}$, la méthode la plus directe est :',
          type: 'multiple-choice',
          options: [
            'Soustraire la 1re équation de la 2e pour éliminer $y$',
            'Substituer $x$ de la 1re dans la 2e',
            'Multiplier les deux équations entre elles',
            'Additionner les deux équations'
          ],
          answer: 0,
          points: 2,
          correction: 'Les coefficients de $y$ sont identiques ($3y$). En soustrayant : $(4x + 3y) - (2x + 3y) = 18 - 12 \\Rightarrow 2x = 6 \\Rightarrow x = 3$. Puis $y = \\dfrac{12 - 6}{3} = 2$.'
        },
        {
          statement: 'Résoudre $\\begin{cases} 5x - 2y = 1 \\\\ 3x + 2y = 15 \\end{cases}$. Donner la valeur de $y$.',
          type: 'numeric',
          answer: 4.5,
          tolerance: 0.01,
          unit: '',
          points: 2,
          correction: 'Addition : $8x = 16 \\Rightarrow x = 2$. Puis $3 \\times 2 + 2y = 15 \\Rightarrow 2y = 9 \\Rightarrow y = 4{,}5$. Vérification : $5 \\times 2 - 2 \\times 4{,}5 = 10 - 9 = 1$ ✓.'
        },
        {
          statement: 'Un magasin vend des cahiers à $2$ € et des stylos à $3$ €. Un client achète $7$ articles pour $17$ €. Combien de cahiers a-t-il achetés ?',
          type: 'numeric',
          answer: 4,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Soit $c$ le nombre de cahiers et $s$ le nombre de stylos. $\\begin{cases} c + s = 7 \\\\ 2c + 3s = 17 \\end{cases}$. De la 1re : $s = 7 - c$. Substitution : $2c + 3(7-c) = 17 \\Rightarrow 2c + 21 - 3c = 17 \\Rightarrow -c = -4 \\Rightarrow c = 4$. Il a acheté $4$ cahiers et $3$ stylos.'
        },
        {
          statement: 'Le système $\\begin{cases} 2x + 4y = 10 \\\\ x + 2y = 5 \\end{cases}$ admet :',
          type: 'multiple-choice',
          options: [
            'Une solution unique',
            'Aucune solution',
            'Une infinité de solutions',
            'Exactement deux solutions'
          ],
          answer: 2,
          points: 2,
          correction: 'La 1re équation est le double de la 2e : $2(x + 2y) = 2 \\times 5 = 10$. Les deux équations sont proportionnelles, donc elles représentent la même droite. Le système a une infinité de solutions : tous les couples $(x, y)$ vérifiant $x + 2y = 5$.'
        }
      ]
    }
  }
);
