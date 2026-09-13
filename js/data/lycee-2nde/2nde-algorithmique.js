/* =========================================================
   Spark Learning – data/lycee-2nde/2nde-algorithmique.js
   Extrait de lycee-2nde.js (découpage automatique)
   ========================================================= */

window.MODULES.push({
    id: '2nde-algorithmique',
    level: 2, subject: 'maths',
    icon: '💻',
    title: 'Algorithmique et programmation (Python)',
    subtitle: 'Variables, boucles, conditions en Python',
    keywords: ['Python', 'Boucle', 'Condition', 'Variable', 'Algorithme'],
    physics: false,
    cours: {
      /* « Découvrir » RÉÉCRIT le 2026-09-13.

         L'ancienne version ouvrait sur « Un algorithme est une suite finie
         d'instructions non ambiguës » : une définition, donc l'entrée que le
         cahier des charges proscrit.

         DIFFICULTÉ PROPRE À CE CHAPITRE : l'élève a déjà programmé au
         collège avec Scratch, donc « à quoi sert un programme ? » ne pose
         aucune question. Ce qui est réellement neuf, c'est l'EXIGENCE DE
         NON-AMBIGUÏTÉ : une machine ne comble aucun sous-entendu, là où un
         humain en comble des dizaines sans s'en apercevoir.

         La situation retenue le fait éprouver : une consigne parfaitement
         claire pour un humain devient inexécutable dès qu'on retire le bon
         sens. C'est aussi le meilleur passage vers l'erreur dominante du
         chapitre (range commence à zéro), où la machine fait exactement ce
         qu'on a écrit et non ce qu'on voulait.

         Le test tient : on ne peut pas répondre « pourquoi la machine
         échoue-t-elle ? » sans la notion d'instruction non ambiguë. */
      intro: 'Explique à quelqu\'un comment préparer des pâtes. Tu diras sans doute : « fais bouillir de l\'eau, jette les pâtes, attends dix minutes, égoutte ».<br/><br/>' +
        'Parfait pour un humain. Catastrophique pour une machine.<br/><br/>' +
        'Combien d\'eau ? Dans quoi ? Bouillir, c\'est quoi — quelle température, et comment le sait-on ? « Jette les pâtes » : toutes, d\'un coup, depuis quelle hauteur ? Et « attends dix minutes » : à partir de quand exactement ?<br/><br/>' +
        'Chacune de ces questions, ton interlocuteur y répond tout seul, sans même remarquer qu\'elle se posait. Une machine, elle, ne comble <strong>aucun</strong> sous-entendu. Elle fait exactement ce qui est écrit — ni plus, ni moins, ni autrement.<br/><br/>' +
        'C\'est toute la difficulté d\'un <strong>algorithme</strong> : une suite d\'instructions si précises qu\'aucune interprétation n\'est possible. Et c\'est aussi sa force, car une instruction non ambiguë peut être répétée un million de fois sans fatigue et sans erreur.<br/><br/>' +
        'Tu as déjà programmé au collège. Ce que la seconde ajoute, c\'est l\'écriture en <strong>Python</strong>, où la moindre imprécision se paie comptant : une indentation de travers, et le programme change de sens ou refuse de démarrer.<br/><br/>' +
        'Tu verras d\'ailleurs très vite un cas où la machine fait scrupuleusement ce que tu as écrit, alors que tu voulais dire autre chose — c\'est l\'erreur la plus fréquente de tout ce chapitre.',
      definitions: [
        { term: 'Algorithme', def: 'Suite finie d\'instructions non ambiguës qui, à partir de données d\'entrée, produit un résultat en un nombre fini d\'étapes.' },
        { term: 'Variable', def: 'Espace mémoire nommé qui stocke une valeur. En Python : $\\texttt{x = 5}$ crée la variable $x$ avec la valeur $5$.' },
        { term: 'Boucle $\\texttt{for}$', def: 'Répète un bloc un nombre fixé de fois. $\\texttt{for i in range(n)}$ exécute le bloc $n$ fois avec $i = 0, 1, \\ldots, n-1$.' },
        { term: 'Boucle $\\texttt{while}$', def: 'Répète un bloc tant qu\'une condition est vraie. Risque de boucle infinie si la condition ne devient jamais fausse.' }
      ],
      method: {
        title: 'Écrire un algorithme en Python',
        steps: [
          'Déclarer les variables et leurs valeurs initiales. <strong>Exemple :</strong> $\\texttt{s = 0}$ (accumulateur initialisé à zéro pour une somme).',
          'Utiliser $\\texttt{for i in range(n)}$ pour répéter $n$ fois. <strong>Exemple :</strong> $\\texttt{for i in range(1, 6):}$ fait varier $i$ de $1$ à $5$ inclus.',
          'Utiliser $\\texttt{while condition}$ pour répéter tant qu\'une condition est vraie. <strong>Exemple :</strong> $\\texttt{while n > 1: n = n // 2}$ divise $n$ par $2$ jusqu\'à ce qu\'il atteigne $1$.',
          'Tester avec des exemples pour vérifier la correction de l\'algorithme. <strong>Exemple :</strong> Pour un programme de somme $1+\\ldots+5$, vérifier que le résultat est bien $15$.'
        ]
      },
      example: {
        statement: 'Écrire un algorithme Python qui calcule la factorielle de $n$ (c\'est-à-dire $n! = 1 \\times 2 \\times \\ldots \\times n$). Tester pour $n = 5$.',
        steps: [
          'Initialiser le résultat : $\\texttt{resultat = 1}$.',
          'Boucle : $\\texttt{for i in range(1, n+1):}$ puis $\\texttt{resultat = resultat * i}$.',
          'Exécution pour $n = 5$ : $i = 1$ → $1$, $i = 2$ → $2$, $i = 3$ → $6$, $i = 4$ → $24$, $i = 5$ → $120$.'
        ],
        answer: '$5! = 120$. Le programme affiche $\\texttt{120}$.'
      },
      formulas: [
        '$\\texttt{for i in range(a, b)}$ : $i$ prend les valeurs $a, a+1, \\ldots, b-1$',
        '$\\texttt{range(n)}$ est équivalent à $\\texttt{range(0, n)}$',
        'Indentation obligatoire en Python (4 espaces ou 1 tabulation)'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Algorithmique — boucle for',
        title: 'Organigramme de l\'exemple du cours : factorielle avec une boucle for',
        description: 'Traduction en organigramme normalisé de l\'exemple du cours ($\\texttt{resultat = 1}$ puis $\\texttt{for i in range(1, n+1): resultat = resultat * i}$), déroulé pour $n = 5$.',
        svg: `
          <svg viewBox="0 0 500 430" role="img" aria-labelledby="algo-flow-title algo-flow-desc">
            <title id="algo-flow-title">Organigramme de la boucle for pour calculer une factorielle</title>
            <desc id="algo-flow-desc">Organigramme vertical : terminal Debut, rectangle d'initialisation resultat egal 1 et i egal 1, puis losange de condition i inferieur ou egal a n. Si oui, deux rectangles d'action a droite : resultat = resultat fois i, puis i = i plus 1, avec une boucle de retour qui ramene vers le cote gauche du losange. Si non, un rectangle affiche le resultat puis le terminal Fin.</desc>

            <defs>
              <marker id="arrow-2nde-algorithmique" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <rect x="330" y="10" width="160" height="44" rx="10" fill="color-mix(in srgb, var(--secondary) 10%, var(--bg-card))" stroke="color-mix(in srgb, var(--secondary) 30%, var(--border))"></rect>
            <text class="annotation-label" x="345" y="28">Exemple :</text>
            <text class="tick-label" x="345" y="44">n = 5 -&gt; resultat = 120 (5!)</text>

            <!-- Terminal Debut -->
            <ellipse class="frame-line" cx="170" cy="28" rx="62" ry="20" fill="none"></ellipse>
            <text class="annotation-label" x="170" y="32" text-anchor="middle">Début</text>
            <line class="curve-main" x1="170" y1="48" x2="170" y2="74"></line>

            <!-- Initialisation -->
            <rect class="frame-line" x="95" y="74" width="150" height="50" fill="none"></rect>
            <text class="annotation-label" x="170" y="94" text-anchor="middle">resultat = 1</text>
            <text class="annotation-label" x="170" y="114" text-anchor="middle">i = 1</text>
            <line class="curve-main" x1="170" y1="124" x2="170" y2="150"></line>

            <!-- Condition -->
            <polygon class="frame-line" points="170,150 260,192 170,234 80,192" fill="none"></polygon>
            <text class="annotation-label" x="170" y="196" text-anchor="middle">i &lt;= n ?</text>

            <!-- Branche Oui : corps de la boucle -->
            <text class="tick-label" x="270" y="182">Oui</text>
            <line class="curve-main" x1="260" y1="192" x2="300" y2="192" marker-end="url(#arrow-2nde-algorithmique)"></line>
            <rect class="frame-line" x="300" y="169" width="170" height="44" fill="none"></rect>
            <text class="annotation-label" x="385" y="196" text-anchor="middle" font-size="11">resultat = resultat * i</text>
            <line class="curve-main" x1="385" y1="213" x2="385" y2="239"></line>
            <rect class="frame-line" x="300" y="239" width="170" height="44" fill="none"></rect>
            <text class="annotation-label" x="385" y="266" text-anchor="middle" font-size="11">i = i + 1</text>
            <polyline class="curve-main" points="385,283 385,400 20,400 20,192 80,192" fill="none" marker-end="url(#arrow-2nde-algorithmique)"></polyline>
            <text class="label-soft" x="8" y="350" text-anchor="middle" transform="rotate(-90 8 350)">Retour au test (boucle for)</text>

            <!-- Branche Non : sortie -->
            <text class="tick-label" x="185" y="248">Non</text>
            <line class="curve-main" x1="170" y1="234" x2="170" y2="260"></line>
            <rect class="frame-line" x="95" y="260" width="150" height="44" fill="none"></rect>
            <text class="annotation-label" x="170" y="287" text-anchor="middle">Afficher resultat</text>
            <line class="curve-main" x1="170" y1="304" x2="170" y2="330"></line>

            <!-- Terminal Fin -->
            <ellipse class="frame-line" cx="170" cy="352" rx="55" ry="20" fill="none"></ellipse>
            <text class="annotation-label" x="170" y="356" text-anchor="middle">Fin</text>
          </svg>
        `,
        notes: [
          'En Python, l\'incrémentation $\\texttt{i = i + 1}$ est gérée automatiquement par $\\texttt{range()}$ ; l\'organigramme la rend explicite pour montrer l\'équivalence avec une boucle $\\texttt{while}$.',
          'Pour $n = 5$, $\\texttt{range(1, n+1)}$ vaut $\\texttt{range(1, 6)}$ et fournit $i = 1, 2, 3, 4, 5$ (le $6$ est exclu, comme rappelé dans le piège du cours).',
          'Trace de l\'exécution : $i=1 \\to resultat=1$, $i=2 \\to 2$, $i=3 \\to 6$, $i=4 \\to 24$, $i=5 \\to 120$, puis $i=6$ fait sortir de la boucle ($i \\le n$ devient faux) : le programme affiche $120 = 5!$.'
        ],
        reading: 'Suis la branche « Oui » autour du losange tant que $i \\le n$ est vrai ; dès que $i$ dépasse $n$, la branche « Non » affiche le résultat final.',
        caption: 'Organigramme normalisé de l\'exemple du cours (calcul de $5!$ avec une boucle $\\texttt{for}$) : Début → initialisation → test $i \\le n$ → action répétée ou sortie.'
      },

      /* SCHÉMAS SECONDAIRES — ajoutés le 2026-09-13.
         Le cadrage de la vague signale ce chapitre comme peu demandeur en
         figures, et c'est vrai des formules : il n'y en a pas. Mais trois de
         ses quatre malentendus sont des malentendus d'EXÉCUTION, c'est-à-dire
         exactement ce qu'un dessin sait montrer et qu'un texte peine à dire :
           1. range(n) ne commence pas à 1 — on montre les deux listes ;
           2. on devine le résultat au lieu de dérouler — on déroule, et le
              tableau donne 6 là où l'intuition annonce 10 ;
           3. les deux branches d'un test ne s'exécutent pas — une seule
              route est empruntée, l'autre reste éteinte.

         La quatrième erreur — la boucle while qui ne s'arrête jamais — reste
         SANS figure : un dessin de boucle infinie ne montrerait qu'une flèche
         qui revient, ce que l'organigramme principal du chapitre fait déjà.
         Le remède est d'écrire la condition d'arrêt AVANT le corps, ce qui
         est un geste de rédaction, pas une image.

         ATTENTION aux étiquettes : pas de capitales (elles se fracturent à la
         conversion) et pas de lettre isolée en italique parasite. Les noms de
         variables sont donc écrits en minuscules et accompagnés d'un mot. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Le premier réflexe à corriger',
          title: 'Une liste qui commence à zéro',
          description: 'En Python, $\\texttt{range(5)}$ ne donne pas $1, 2, 3, 4, 5$. Il donne $0, 1, 2, 3, 4$.<br/><br/>Le compte y est — <strong>cinq</strong> valeurs dans les deux cas — mais ce ne sont pas les mêmes. C\'est ce décalage d\'un cran qui fausse silencieusement un programme sur deux.',
          svg: `
            <svg viewBox="0 0 460 230" role="img" aria-labelledby="algo-range-title algo-range-desc">
              <title id="algo-range-title">Les valeurs produites par range comparees a un comptage de un a cinq</title>
              <desc id="algo-range-desc">Deux rangees de cinq cases de meme taille sont alignees a la meme origine. La rangee du haut contient les valeurs zero, un, deux, trois et quatre : ce sont celles que produit range de cinq en Python. La rangee du bas contient les valeurs un, deux, trois, quatre et cinq : c'est le comptage que l'eleve attend spontanement. Les deux rangees comptent exactement cinq cases, mais la premiere valeur et la derniere valeur different d'une unite.</desc>

              <!-- Deux rangees de cinq cases de 70 unites, meme origine
                   x = 60 : patron « comparaison ». Le nombre de cases doit
                   etre visiblement IDENTIQUE, puisque c'est la longueur qui
                   trompe l'eleve, pas le contenu. -->

              <text class="annotation-label" x="60" y="34" text-anchor="start">ce que range(5) produit</text>
              <rect x="60" y="46" width="70" height="44" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="46" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="95" y="74" text-anchor="middle">0</text>
              <rect class="frame-line" x="130" y="46" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="165" y="74" text-anchor="middle">1</text>
              <rect class="frame-line" x="200" y="46" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="235" y="74" text-anchor="middle">2</text>
              <rect class="frame-line" x="270" y="46" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="305" y="74" text-anchor="middle">3</text>
              <rect x="340" y="46" width="70" height="44" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="340" y="46" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="375" y="74" text-anchor="middle">4</text>

              <text class="label-soft" x="60" y="142" text-anchor="start">ce que l'on attend spontanément</text>
              <rect x="60" y="154" width="70" height="44" fill="color-mix(in srgb, var(--secondary) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="60" y="154" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="95" y="182" text-anchor="middle">1</text>
              <rect class="frame-line" x="130" y="154" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="165" y="182" text-anchor="middle">2</text>
              <rect class="frame-line" x="200" y="154" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="235" y="182" text-anchor="middle">3</text>
              <rect class="frame-line" x="270" y="154" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="305" y="182" text-anchor="middle">4</text>
              <rect x="340" y="154" width="70" height="44" fill="color-mix(in srgb, var(--secondary) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="340" y="154" width="70" height="44" fill="none"></rect>
              <text class="annotation-label" x="375" y="182" text-anchor="middle">5</text>

              <text class="label-soft" x="425" y="74" text-anchor="start">5 cases</text>
              <text class="label-soft" x="425" y="182" text-anchor="start">5 cases</text>
            </svg>
          `,
          notes: [
            '$\\texttt{range(5)}$ produit $0, 1, 2, 3, 4$ : il commence à $0$ et s\'arrête <strong>avant</strong> $5$. La borne supérieure est toujours exclue.',
            'Pour obtenir $1, 2, 3, 4, 5$, il faut écrire $\\texttt{range(1, 6)}$ : on donne le début, et une fin qui dépasse d\'un cran la dernière valeur voulue.',
            'Le nombre de tours, lui, est le même dans les deux cas. Une boucle $\\texttt{range(5)}$ tourne bien $5$ fois — c\'est la <strong>valeur</strong> de la variable qui change, pas le compte.'
          ],
          reading: 'Quand un programme donne un résultat décalé d\'un cran, c\'est presque toujours ici que cela se joue.<br/><br/>Pose-toi alors deux questions séparées : « combien de tours ? » et « quelles valeurs prend la variable ? ». Ce sont deux choses différentes, et $\\texttt{range}$ répond honnêtement aux deux — à condition de les avoir distinguées.',
          caption: '$\\texttt{range(5)}$ produit $0, 1, 2, 3, 4$ : cinq valeurs, mais décalées d\'un cran par rapport au comptage habituel.'
        },
        {
          theme: 'maths',
          kicker: 'Dérouler au lieu de deviner',
          title: 'Le tableau de suivi tranche là où l\'intuition se trompe',
          description: 'Voici un programme de trois lignes : $\\texttt{s = 0}$, puis $\\texttt{for i in range(4)}$, et dans la boucle $\\texttt{s = s + i}$.<br/><br/>Beaucoup répondent $10$, en additionnant $1+2+3+4$. Le tableau ci-dessous déroule chaque tour et donne $6$. Il ne discute pas : il exécute.',
          svg: `
            <svg viewBox="0 0 440 280" role="img" aria-labelledby="algo-trace-title algo-trace-desc">
              <title id="algo-trace-title">Tableau de suivi des variables tour par tour</title>
              <desc id="algo-trace-desc">Un tableau de trois colonnes et cinq lignes. La premiere colonne donne la valeur de la variable de boucle a chaque tour : zero, un, deux, puis trois. La deuxieme colonne donne la valeur de la somme avant l'addition : zero, zero, un, puis trois. La troisieme colonne donne la valeur de la somme apres l'addition : zero, un, trois, puis six. La derniere valeur, six, est le resultat final du programme, et il differe de dix que l'on obtiendrait en additionnant un, deux, trois et quatre.</desc>

              <!-- Tableau : colonnes de 120 unites, lignes de 42.
                   Origine (40 ; 40). Les valeurs ne sont PAS recopiees a la
                   main : elles sortent du deroule s = s + i sur range(4),
                   verifie par le test. -->
              <rect x="40" y="40" width="360" height="42" fill="color-mix(in srgb, var(--diagram-accent) 14%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="40" y="40" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="160" y="40" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="280" y="40" width="120" height="42" fill="none"></rect>
              <text class="annotation-label" x="100" y="66" text-anchor="middle">tour</text>
              <text class="annotation-label" x="220" y="66" text-anchor="middle">somme avant</text>
              <text class="annotation-label" x="340" y="66" text-anchor="middle">somme après</text>

              <rect class="frame-line" x="40" y="82" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="160" y="82" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="280" y="82" width="120" height="42" fill="none"></rect>
              <text class="tick-label" x="100" y="108" text-anchor="middle">0</text>
              <text class="tick-label" x="220" y="108" text-anchor="middle">0</text>
              <text class="tick-label" x="340" y="108" text-anchor="middle">0</text>

              <rect class="frame-line" x="40" y="124" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="160" y="124" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="280" y="124" width="120" height="42" fill="none"></rect>
              <text class="tick-label" x="100" y="150" text-anchor="middle">1</text>
              <text class="tick-label" x="220" y="150" text-anchor="middle">0</text>
              <text class="tick-label" x="340" y="150" text-anchor="middle">1</text>

              <rect class="frame-line" x="40" y="166" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="160" y="166" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="280" y="166" width="120" height="42" fill="none"></rect>
              <text class="tick-label" x="100" y="192" text-anchor="middle">2</text>
              <text class="tick-label" x="220" y="192" text-anchor="middle">1</text>
              <text class="tick-label" x="340" y="192" text-anchor="middle">3</text>

              <rect x="280" y="208" width="120" height="42" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="40" y="208" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="160" y="208" width="120" height="42" fill="none"></rect>
              <rect class="frame-line" x="280" y="208" width="120" height="42" fill="none"></rect>
              <text class="tick-label" x="100" y="234" text-anchor="middle">3</text>
              <text class="tick-label" x="220" y="234" text-anchor="middle">3</text>
              <text class="annotation-label" x="340" y="234" text-anchor="middle">6</text>

              <text class="label-soft" x="40" y="270" text-anchor="start">résultat affiché : 6, et non 10</text>
            </svg>
          `,
          notes: [
            'La variable de boucle prend les valeurs $0, 1, 2, 3$ — celles de $\\texttt{range(4)}$ — et non $1, 2, 3, 4$. Le premier tour ajoute donc $0$, qui ne change rien.',
            'La somme vaut $0 + 1 + 2 + 3 = 6$. La réponse $10$ correspondrait à $1+2+3+4$, c\'est-à-dire à $\\texttt{range(1, 5)}$ : un programme différent.',
            'Deux colonnes valent mieux qu\'une. Séparer la valeur <strong>avant</strong> et <strong>après</strong> l\'affectation évite de se perdre : $\\texttt{s = s + i}$ n\'est pas une égalité, c\'est un remplacement.'
          ],
          reading: 'Prends l\'habitude de ce tableau dès qu\'un programme te résiste. Une colonne par variable, une ligne par tour, et tu remplis case par case sans jamais anticiper.<br/><br/>C\'est lent, et c\'est exactement pour cela que ça marche : l\'erreur vient presque toujours d\'un tour qu\'on a sauté en croyant le connaître.',
          caption: 'Déroulé de $\\texttt{s = s + i}$ sur $\\texttt{range(4)}$ : la somme vaut $6$, et non $10$.'
        },
        {
          theme: 'maths',
          kicker: 'Une seule route est prise',
          title: 'Un test choisit, il n\'exécute pas les deux branches',
          description: 'Devant un $\\texttt{if}$ suivi d\'un $\\texttt{else}$, beaucoup lisent les deux blocs et additionnent leurs effets.<br/><br/>Or un test est un <strong>aiguillage</strong> : selon la réponse, une seule voie est empruntée. L\'autre reste éteinte, comme si elle n\'existait pas.',
          svg: `
            <svg viewBox="0 0 440 260" role="img" aria-labelledby="algo-test-title algo-test-desc">
              <title id="algo-test-title">Un aiguillage ou une seule voie est empruntee</title>
              <desc id="algo-test-desc">Un losange de condition porte la question : la note est-elle superieure ou egale a dix. Deux fleches en sortent. Celle de gauche, tracee en trait plein et marquee oui, mene a une case affichant le mot recu. Celle de droite, tracee en tirets et marquee non, mene a une case affichant les mots a repasser. Pour une note de quatorze, seule la voie de gauche est parcourue ; la case de droite reste inutilisee, ce qu'indique la mention voie non empruntee.</desc>
              <defs>
                <marker id="fl-algo-test" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                  <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
                </marker>
              </defs>

              <!-- L'aiguillage, centre sur l'abscisse 220. Les deux branches
                   sont SYMETRIQUES : le dessin ne doit pas suggerer qu'une
                   voie est privilegiee avant qu'on ait lu la condition. -->
              <polygon class="frame-line" points="220,20 330,62 220,104 110,62" fill="color-mix(in srgb, var(--diagram-accent) 10%, transparent)"></polygon>
              <text class="annotation-label" x="220" y="66" text-anchor="middle">note ≥ 10 ?</text>

              <text class="annotation-label" x="128" y="128" text-anchor="middle">oui</text>
              <line class="curve-main" x1="160" y1="88" x2="110" y2="146" marker-end="url(#fl-algo-test)"></line>

              <text class="label-soft" x="312" y="128" text-anchor="middle">non</text>
              <line class="guide-line" x1="280" y1="88" x2="330" y2="146" marker-end="url(#fl-algo-test)"></line>

              <!-- Voie empruntee : teinte forte, trait plein. -->
              <rect x="30" y="152" width="160" height="46" fill="color-mix(in srgb, var(--diagram-accent) 22%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="30" y="152" width="160" height="46" fill="none"></rect>
              <text class="annotation-label" x="110" y="180" text-anchor="middle">afficher « reçu »</text>

              <!-- Voie non empruntee : teinte faible, pour que la hierarchie
                   des aplats dise elle-meme laquelle compte. -->
              <rect x="250" y="152" width="160" height="46" fill="color-mix(in srgb, var(--secondary) 8%, transparent)" stroke="none"></rect>
              <rect class="frame-line" x="250" y="152" width="160" height="46" fill="none"></rect>
              <text class="label-soft" x="330" y="180" text-anchor="middle">afficher « à repasser »</text>

              <text class="annotation-label" x="110" y="226" text-anchor="middle">voie parcourue</text>
              <text class="label-soft" x="330" y="226" text-anchor="middle">voie non empruntée</text>
              <text class="label-soft" x="30" y="250" text-anchor="start">exemple déroulé pour une note de 14</text>
            </svg>
          `,
          notes: [
            'Pour une note de $14$, la condition est vraie : la machine exécute le premier bloc, puis <strong>saute</strong> le second sans le lire.',
            'Pour une note de $7$, c\'est l\'inverse exact. Le programme n\'affiche jamais les deux messages : il en affiche toujours un, et un seul.',
            'C\'est ce qui distingue $\\texttt{else}$ de deux $\\texttt{if}$ écrits à la suite. Deux $\\texttt{if}$ indépendants sont évalués chacun de leur côté, et peuvent très bien s\'exécuter tous les deux.'
          ],
          reading: 'Quand tu lis un programme, ne lis jamais un $\\texttt{if}$ comme une liste d\'instructions. Lis-le comme une question posée à la machine, dont la réponse décide de la suite.<br/><br/>Et pour vérifier, choisis une valeur précise — ici $14$ — puis suis une seule route du doigt. Tu verras immédiatement quelle case est atteinte, et laquelle ne l\'est pas.',
          caption: 'Un test oriente vers une seule branche : pour une note de $14$, seule la voie « reçu » est parcourue.'
        }
      ],
      recap: [
        '$\\texttt{range(a, b)}$ produit les entiers de $a$ à $b-1$ : la borne supérieure est toujours exclue.',
        'La boucle $\\texttt{for}$ est utilisée quand le nombre de répétitions est connu à l\'avance ; $\\texttt{while}$ sinon.',
        'L\'indentation est obligatoire en Python : elle délimite les blocs de code (pas d\'accolades).',
        'Pour déboguer, exécuter le code à la main pas à pas avec des valeurs test.'
      ],
      piege: 'En Python, $\\texttt{range(1,6)}$ produit $1,2,3,4,5$ (pas $6$). La borne supérieure est exclue !'
    },
    quiz: [
      { q: 'Que calcule ce code ?\n$\\texttt{s=0}$\n$\\texttt{for i in range(1,5):}$\n$\\quad\\texttt{s=s+i}$', options: ['$s=10$', '$s=15$', '$s=4$', '$s=6$'], answer: 0, correction: '$i$ prend les valeurs $1,2,3,4$. $s=1+2+3+4=10$.' },
      { q: 'Un élève veut calculer $1+2+\\cdots+10$. Il écrit $\\texttt{s=0}$ puis $\\texttt{for i in range(10): s=s+i}$. Pourquoi son résultat sera-t-il incorrect ?', options: ['$\\texttt{range(10)}$ produit $0,1,\\ldots,9$ (le $10$ est exclu). Il faut $\\texttt{range(1,11)}$ pour inclure $10$', 'Il faut initialiser $\\texttt{s=1}$ et non $\\texttt{s=0}$', 'La boucle ne peut pas calculer une somme', 'Il n\'y a pas d\'erreur, le résultat est correct'], answer: 0, correction: '$\\texttt{range(10)}$ produit $0,1,2,\\ldots,9$ — la borne supérieure $10$ est exclue. La somme calculée est $0+1+\\ldots+9=45$ au lieu de $1+\\ldots+10=55$. Pour inclure $10$, il faut $\\texttt{range(1,11)}$.' },
      { q: '$\\texttt{range(3,8)}$ produit :', options: ['$3,4,5,6,7,8$', '$3,4,5,6,7$', '$3,4,5,6$', '$0,1,2,3,4$'], answer: 1, correction: 'La borne supérieure $8$ est exclue : $3,4,5,6,7$.' },
      { q: 'Quelle est la valeur de $x$ après :\n$\\texttt{x = 1}$\n$\\texttt{for i in range(4):}$\n$\\quad\\texttt{x = x * 3}$', options: ['$81$', '$12$', '$64$', '$27$'], answer: 0, correction: 'La boucle s\'exécute $4$ fois. $x$ est multiplié par $3$ à chaque passage : $1 \\to 3 \\to 9 \\to 27 \\to 81$. On calcule $3^4 = 81$. Attention : ce n\'est pas $3 \\times 4 = 12$ (multiplication) mais $3^4 = 81$ (puissance).' },
      { q: 'Ce code contient une erreur. Laquelle ?\n$\\texttt{n = 5}$\n$\\texttt{while n > 0:}$\n$\\quad\\texttt{print(n)}$', options: ['Boucle infinie : $n$ n\'est jamais modifié dans la boucle, la condition $n > 0$ reste toujours vraie', '$\\texttt{print}$ n\'est pas une fonction Python valide', 'Il faut $\\texttt{while n >= 0}$', 'Il manque un $\\texttt{return}$'], answer: 0, correction: 'Le corps de la boucle affiche $n$ mais ne le modifie jamais. Comme $n = 5 > 0$ est toujours vrai, la boucle ne s\'arrête jamais. Il faudrait ajouter $\\texttt{n = n - 1}$ dans le bloc. C\'est le risque principal des boucles $\\texttt{while}$ : toujours vérifier que la condition finira par devenir fausse.' }
    ],
    exercice: {
      type: 'numeric',
      generate() {
        /* BANQUE ÉLARGIE le 2026-09-13 (vague « manuel de référence »).

           MESURE DE DÉPART : 3 tâches pour 9 exercices retenus, la plus
           maigre banque de l'ouvrage.

           DÉFAUT DE FOND : l'évaluation consacre DEUX questions sur cinq
           (Q1 et Q4) aux valeurs prises par `range`, qui est le point de
           bascule du chapitre — et aucune tâche de la banque ne travaillait
           cela. Le devoir évaluait donc une compétence que la banque
           n'entraînait pas. On ajoute quatre tâches, dont deux sur `range`
           et une sur le test conditionnel, absent lui aussi alors que le
           cours le traite. */
        const types = ['produit', 'while_compteur', 'condition',
                       'rangeValeurs', 'rangeCompte', 'siAlors', 'sommeConditionnelle'];
        const type = pick(types);

        /* Tâche AJOUTÉE — les valeurs prises par range(a, b). C'est LE point
           de bascule : la borne de droite est exclue, et l'élève l'oublie. */
        if (type === 'rangeValeurs') {
          const a = rand(0, 6);
          const b = a + rand(3, 7);
          const valeurs = [];
          for (let k = a; k < b; k++) valeurs.push(k);
          const quoi = pick(['derniere', 'premiere', 'nombre']);
          const reponse = quoi === 'derniere' ? b - 1 : (quoi === 'premiere' ? a : b - a);
          const question = quoi === 'derniere'
            ? 'Quelle est la <strong>dernière</strong> valeur prise par $\\texttt{i}$ ?'
            : (quoi === 'premiere'
               ? 'Quelle est la <strong>première</strong> valeur prise par $\\texttt{i}$ ?'
               : 'Combien de valeurs $\\texttt{i}$ prend-elle au total ?');
          return {
            statement: `En Python, on écrit la boucle $\\texttt{for i in range(${a}, ${b}):}$.<br/><br/>${question}`,
            answer: reponse,
            tolerance: 0,
            unit: '',
            hint: `$\\texttt{range(a, b)}$ commence à $\\texttt{a}$ et s'arrête <strong>avant</strong> $\\texttt{b}$ : la borne de droite est exclue. Écris la liste complète si tu hésites.`,
            solution: [
              `Valeurs prises par range : $\\texttt{range(${a}, ${b})}$ produit $${valeurs.join(' ; ')}$`,
              `La borne de gauche est <strong>incluse</strong>, celle de droite est <strong>exclue</strong> : on s'arrête à $${b - 1}$ et non à $${b}$.`,
              `Il y a donc $${b} - ${a} = ${b - a}$ valeurs, la première est $${a}$ et la dernière $${b - 1}$.`
            ]
          };
        }

        /* Tâche AJOUTÉE — range à un seul argument, qui commence à ZÉRO.
           C'est l'autre moitié du malentendu, et l'évaluation la pose (Q4). */
        if (type === 'rangeCompte') {
          const n = rand(3, 9);
          const quoi = pick(['derniere', 'somme']);
          let somme = 0;
          for (let k = 0; k < n; k++) somme += k;
          const valeurs = [];
          for (let k = 0; k < n; k++) valeurs.push(k);
          return {
            statement: `On veut répéter une action $${n}$ fois et l'on écrit $\\texttt{for i in range(${n}):}$.<br/><br/>${quoi === 'derniere' ? 'Quelle est la <strong>dernière</strong> valeur prise par $\\texttt{i}$ ?' : 'Quelle est la <strong>somme</strong> de toutes les valeurs prises par $\\texttt{i}$ ?'}`,
            answer: quoi === 'derniere' ? n - 1 : somme,
            tolerance: 0,
            unit: '',
            hint: `Avec un seul argument, $\\texttt{range(n)}$ commence à $\\texttt{0}$, pas à $\\texttt{1}$. La boucle tourne bien $${n}$ fois, mais les valeurs vont de $0$ à $${n - 1}$.`,
            solution: [
              `Valeurs prises par range : $\\texttt{range(${n})}$ produit $${valeurs.join(' ; ')}$`,
              `La boucle tourne bien $${n}$ fois, mais $\\texttt{i}$ commence à $0$ : la dernière valeur est $${n - 1}$, et non $${n}$.`,
              quoi === 'derniere'
                ? `Réponse : $${n - 1}$.`
                : `Somme : $0 + 1 + \\ldots + ${n - 1} = ${somme}$.`
            ]
          };
        }

        /* Tâche AJOUTÉE — test conditionnel. Le cours traite le `if`, la
           banque ne le travaillait pas. */
        if (type === 'siAlors') {
          const seuil = rand(8, 25);
          const x = rand(3, 35);
          const siVrai = rand(2, 9);
          const siFaux = rand(2, 9);
          const prend = x > seuil ? siVrai : siFaux;
          return {
            statement: `On exécute le code suivant :<br/><br/>$\\texttt{x = ${x}}$<br/>$\\texttt{if x > ${seuil}:}$<br/>$\\quad\\texttt{y = ${siVrai}}$<br/>$\\texttt{else:}$<br/>$\\quad\\texttt{y = ${siFaux}}$<br/><br/>Quelle est la valeur finale de $\\texttt{y}$ ?`,
            answer: prend,
            tolerance: 0,
            unit: '',
            hint: `Commence par évaluer la condition $\\texttt{x > ${seuil}}$ avec $\\texttt{x = ${x}}$ : est-elle vraie ou fausse ? Une seule des deux branches est exécutée.`,
            solution: [
              `Test conditionnel : j'évalue la condition $\\texttt{${x} > ${seuil}}$`,
              `Elle est <strong>${x > seuil ? 'vraie' : 'fausse'}</strong>, donc c'est la branche $\\texttt{${x > seuil ? 'if' : 'else'}}$ qui s'exécute.`,
              `La valeur finale est $\\texttt{y} = ${prend}$. L'autre branche n'est <strong>jamais</strong> exécutée : ce n'est pas la dernière ligne écrite qui gagne, c'est la condition qui choisit.`
            ]
          };
        }

        /* Tâche AJOUTÉE — boucle ET condition combinées : compter dans une
           boucle, ce qui est l'usage réel de l'algorithmique en seconde. */
        if (type === 'sommeConditionnelle') {
          const n = rand(6, 14);
          const seuil = rand(3, Math.max(4, n - 2));
          let compte = 0;
          for (let k = 1; k <= n; k++) if (k > seuil) compte++;
          return {
            statement: `On exécute le code suivant :<br/><br/>$\\texttt{c = 0}$<br/>$\\texttt{for i in range(1, ${n + 1}):}$<br/>$\\quad\\texttt{if i > ${seuil}:}$<br/>$\\quad\\quad\\texttt{c = c + 1}$<br/><br/>Quelle est la valeur finale de $\\texttt{c}$ ?`,
            answer: compte,
            tolerance: 0,
            unit: '',
            hint: `La boucle parcourt $\\texttt{i}$ de $1$ à $${n}$. Le compteur n'augmente que pour les valeurs qui vérifient la condition : lesquelles ?`,
            solution: [
              `Comptage sous condition : $\\texttt{i}$ parcourt $1\\,;\\,2\\,;\\,\\ldots\\,;\\,${n}$`,
              `Le compteur n'augmente que si $\\texttt{i} > ${seuil}$, c'est-à-dire pour $\\texttt{i}$ allant de $${seuil + 1}$ à $${n}$.`,
              `Cela fait $${n} - ${seuil} = ${compte}$ valeurs, donc $\\texttt{c} = ${compte}$.`
            ]
          };
        }

        if (type === 'produit') {
          const base = rand(2, 4);
          const n = rand(3, 6);
          const ans = Math.pow(base, n);
          return {
            statement: `Déterminer la valeur finale de $\\texttt{p}$ après l'exécution du code suivant :<br/><br/>$\\texttt{p = 1}$<br/>$\\texttt{for i in range(${n}):}$<br/>$\\quad\\texttt{p = p * ${base}}$<br/><br/>Vérifie en exécutant le code « à la main » (pas à pas).`,
            answer: ans,
            tolerance: 0,
            unit: '',
            hint: `La boucle multiplie $\\texttt{p}$ par $${base}$ à chaque passage, $${n}$ fois. On calcule $${base}^{${n}}$.`,
            solution: [
              `Exécution pas à pas : $p = 1$`,
              `${Array.from({length: n}, (_, k) => `Passage $i=${k}$ : $p = ${Math.pow(base, k)} \\times ${base} = ${Math.pow(base, k+1)}$`).join('<br/>')}`,
              `Valeur finale : $p = ${base}^{${n}} = ${ans}$`
            ]
          };
        } else if (type === 'while_compteur') {
          const start = rand(50, 200);
          const divisor = pick([2, 3, 5]);
          let val = start, count = 0;
          while (val >= divisor) { val = Math.floor(val / divisor); count++; }
          return {
            statement: `Déterminer la valeur finale de $\\texttt{compteur}$ après l'exécution :<br/><br/>$\\texttt{n = ${start}}$<br/>$\\texttt{compteur = 0}$<br/>$\\texttt{while n >= ${divisor}:}$<br/>$\\quad\\texttt{n = n // ${divisor}}$<br/>$\\quad\\texttt{compteur = compteur + 1}$<br/><br/>Exécute le code à la main en notant les valeurs successives de $n$.`,
            answer: count,
            tolerance: 0,
            unit: '',
            hint: `$\\texttt{//}$ est la division entière. Trace les valeurs de $n$ : $${start}$, puis $${start} // ${divisor} = ${Math.floor(start/divisor)}$, etc. Compte le nombre de passages.`,
            solution: [
              `Valeurs successives de $n$ : ${(() => { let v = start, steps = []; while (v >= divisor) { let nv = Math.floor(v/divisor); steps.push(`$${v} \\to ${nv}$`); v = nv; } return steps.join(', '); })()}`,
              `$\\texttt{compteur} = ${count}$`
            ]
          };
        } else {
          const a = rand(2, 5);
          const b = rand(10, 30);
          const n = rand(5, 10);
          let s = 0;
          for (let i = 1; i <= n; i++) { s += a * i + b; }
          return {
            statement: `On exécute le code suivant :<br/><br/>$\\texttt{s = 0}$<br/>$\\texttt{for i in range(1, ${n+1}):}$<br/>$\\quad\\texttt{s = s + ${a}*i + ${b}}$<br/><br/>Quelle est la valeur finale de $\\texttt{s}$ ? (On calcule $\\sum_{i=1}^{${n}} (${a}i + ${b})$.)`,
            answer: s,
            tolerance: 0,
            unit: '',
            hint: `La somme est $\\sum_{i=1}^{${n}} (${a}i + ${b}) = ${a} \\cdot \\frac{${n}(${n}+1)}{2} + ${b} \\cdot ${n}$.`,
            solution: [
              `$s = \\sum_{i=1}^{${n}} (${a}i + ${b}) = ${a} \\cdot \\frac{${n} \\times ${n+1}}{2} + ${b} \\times ${n}$`,
              `$= ${a} \\times ${n*(n+1)/2} + ${b*n}$`,
              `$= ${a*n*(n+1)/2} + ${b*n} = ${s}$`
            ]
          };
        }
      }
    },
    probleme: {
      context: 'On place un capital initial $C_0 = 1000$ € sur un livret à taux annuel $t = 3\\%$ ($= 0{,}03$). Chaque année, les intérêts sont ajoutés au capital : $C_{n+1} = C_n \\times (1 + t)$.',
      tasks: [
        'Écrire un programme Python qui calcule le capital après $n$ années (avec une boucle $\\texttt{for}$).',
        'Modifier le programme pour qu\'il affiche le nombre d\'années nécessaires pour doubler le capital initial (utiliser une boucle $\\texttt{while}$).',
        'Exécuter à la main le programme $\\texttt{while}$ et donner le résultat.'
      ],
      solutions: [
        '$\\texttt{C = 1000}$<br/>$\\texttt{t = 0.03}$<br/>$\\texttt{for i in range(n):}$<br/>$\\quad\\texttt{C = C * (1 + t)}$<br/>$\\texttt{print(C)}$',
        '$\\texttt{C = 1000}$<br/>$\\texttt{t = 0.03}$<br/>$\\texttt{annees = 0}$<br/>$\\texttt{while C < 2000:}$<br/>$\\quad\\texttt{C = C * 1.03}$<br/>$\\quad\\texttt{annees = annees + 1}$<br/>$\\texttt{print(annees)}$',
        'Après $23$ ans : $C_{23} = 1000 \\times 1{,}03^{23} \\approx 1974$ € (pas encore doublé). Après $24$ ans : $C_{24} \\approx 2033$ €. Il faut $24$ ans pour doubler le capital.'
      ],
      finalAnswer: 'Il faut $24$ ans pour doubler un capital à $3\\%$ par an (intérêts composés).'
    },

    evaluation: {
      title: 'Évaluation — Algorithmique et programmation (Python)',
      duration: '25 min',
      questions: [
        {
          statement: 'Que produit $\\texttt{range(2, 7)}$ en Python ?',
          type: 'multiple-choice',
          options: ['$2, 3, 4, 5, 6, 7$', '$2, 3, 4, 5, 6$', '$0, 1, 2, 3, 4, 5, 6$', '$2, 4, 6$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(2, 7)}$ produit les entiers de $2$ à $6$ inclus. La borne supérieure $7$ est toujours exclue en Python.'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{s = 0}$\n$\\texttt{for i in range(1, 6):}$\n$\\quad\\texttt{s = s + i}$\nQuelle est la valeur finale de $s$ ?',
          type: 'numeric',
          answer: 15,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$i$ prend les valeurs $1, 2, 3, 4, 5$. La somme $s = 1 + 2 + 3 + 4 + 5 = 15$.'
        },
        {
          /* Q3 RÉÉCRITE le 2026-09-13. L'ancienne demandait la valeur
             finale après exécution, exactement comme la Q2 du même devoir :
             deux fois le même geste, dans un devoir où « calculer » était
             déjà sur-représenté. La nouvelle demande d'abord de DIRE ce que
             la boucle fait — combien de doublements, donc quel exposant —
             avant d'en donner la valeur. L'élève doit formuler le rôle de la
             boucle, pas seulement la dérouler. « communiquer ».
             La réponse reste $48$. */
          statement: 'On exécute le code :\n$\\texttt{x = 3}$\n$\\texttt{for i in range(4):}$\n$\\quad\\texttt{x = x * 2}$\nCe programme calcule $3 \\times 2^{k}$ pour un certain entier $k$.\nExplique ce que représente $k$, puis donne la valeur finale de $\\texttt{x}$.',
          type: 'numeric',
          answer: 48,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'L\'entier $k$ est le <strong>nombre de passages</strong> dans la boucle, c\'est-à-dire le nombre de doublements subis par $\\texttt{x}$.<br/><br/>Ici $\\texttt{range(4)}$ fait tourner la boucle $4$ fois ($i = 0, 1, 2, 3$), donc $k = 4$.<br/><br/>À chaque passage, $x$ est doublé : $3 \\to 6 \\to 12 \\to 24 \\to 48$. On retrouve bien $3 \\times 2^4 = 3 \\times 16 = 48$.'
        },
        {
          statement: 'Un élève écrit $\\texttt{for i in range(5)}$ pour répéter une action $5$ fois. Quelles valeurs prend $i$ ?',
          type: 'multiple-choice',
          options: ['$1, 2, 3, 4, 5$', '$0, 1, 2, 3, 4$', '$0, 1, 2, 3, 4, 5$', '$1, 2, 3, 4$'],
          answer: 1,
          points: 2,
          correction: '$\\texttt{range(5)}$ est équivalent à $\\texttt{range(0, 5)}$ et produit $0, 1, 2, 3, 4$ (cinq valeurs, la borne supérieure $5$ est exclue).'
        },
        {
          statement: 'On exécute le code :\n$\\texttt{n = 10}$\n$\\texttt{compteur = 0}$\n$\\texttt{while n > 1:}$\n$\\quad\\texttt{n = n // 2}$\n$\\quad\\texttt{compteur = compteur + 1}$\nQuelle est la valeur finale de $\\texttt{compteur}$ ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Division entière successive : $n = 10 \\to 5$ (compteur $= 1$), $5 \\to 2$ (compteur $= 2$), $2 \\to 1$ (compteur $= 3$). Ensuite $n = 1$, la condition $n > 1$ est fausse et la boucle s\'arrête. $\\texttt{compteur} = 3$.'
        }
      ]
    }
  });
