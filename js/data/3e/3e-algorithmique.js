/* =========================================================
   Spark Learning – data/3e/3e-algorithmique.js
   Module : Algorithmes et programmation (3e)
   ========================================================= */

window.MODULES.push(
  {
    id: '3e-algorithmique',
    level: 1, subject: 'maths',
    icon: '💻',
    title: 'Algorithmes et programmation',
    subtitle: 'Variables, boucles, conditions, pseudo-code et Scratch',
    keywords: ['Algorithme', 'Variable', 'Boucle', 'Condition', 'Instruction', 'Pseudo-code'],
    physics: false,
    cours: {
      intro: 'Voici une ligne que tu vas croiser dans tous les programmes du monde :<br/><br/>' +
        '$$x \\leftarrow x + 1$$<br/>' +
        'Lis-la comme une égalité mathématique et elle est <strong>absurde</strong>. Aucun nombre ne vérifie $x = x + 1$ : en retirant $x$ des deux côtés, il resterait $0 = 1$. Pourtant cette ligne est parfaitement correcte en programmation, et elle s\'exécute des milliards de fois par seconde dans les machines autour de toi.<br/><br/>' +
        '<strong>Comment une chose impossible peut-elle être juste ?</strong><br/><br/>' +
        'Parce que la flèche ne dit pas « est égal à ». Elle dit « <strong>reçoit</strong> ». La machine lit l\'<em>ancienne</em> valeur de $x$, lui ajoute $1$, puis range le résultat dans $x$, écrasant ce qu\'il y avait. Si $x$ valait $7$ avant la ligne, il vaut $8$ après. Rien n\'est affirmé : quelque chose est <strong>fait</strong>, et le temps est passé entre les deux côtés de la flèche.<br/><br/>' +
        'Tout le chapitre tient dans ce basculement. En mathématiques, $x$ désigne un nombre fixe qu\'on cherche à connaître. En algorithmique, $x$ désigne une <strong>case mémoire</strong> dont le contenu change au fil de l\'exécution. Confondre les deux, c\'est ne plus rien comprendre à un programme dès la troisième ligne.<br/><br/>' +
        'Un <strong>algorithme</strong> est une suite finie et non ambiguë d\'instructions permettant de résoudre un problème. Les trois <strong>structures fondamentales</strong> — séquence, condition, boucle — suffisent à exprimer n\'importe quel calcul, du plus simple au moteur de recherche.<br/><br/>' +
        'Pour <strong>déboguer</strong> un algorithme, une seule technique vaut vraiment : tracer son exécution ligne par ligne dans un tableau de valeurs — une colonne par variable, une ligne par étape. On y voit chaque affectation faire son effet, et l\'erreur saute aux yeux.<br/><br/>' +
        'Deux types de boucles : la boucle <strong>bornée</strong> ($\\mathtt{pour}$) avec un nombre fixé de tours ; la boucle <strong>non bornée</strong> ($\\mathtt{tant\\ que}$) qui continue tant qu\'une condition reste vraie.',
      definitions: [
        { term: 'Algorithme', def: 'Suite <strong>finie et non ambiguë</strong> d\'instructions qui résout un problème donné. Chaque étape doit être suffisamment précise pour être exécutée mécaniquement.' },
        { term: 'Variable', def: 'Espace mémoire nommé qui <strong>stocke une valeur</strong>. Une variable peut contenir un nombre, du texte, etc. Sa valeur peut changer au cours de l\'exécution.' },
        { term: 'Affectation', def: 'Instruction $x \\leftarrow \\text{valeur}$ qui <strong>donne une nouvelle valeur</strong> à la variable $x$. Attention : $x \\leftarrow x + 1$ n\'est pas une équation, c\'est une mise à jour.' },
        { term: 'Boucle', def: 'Structure qui <strong>répète un bloc d\'instructions</strong>. La boucle <strong>bornée</strong> ($\\mathtt{pour}$) a un nombre fixé de tours ; la boucle <strong>non bornée</strong> ($\\mathtt{tant\\ que}$) continue jusqu\'à ce qu\'une condition devienne fausse.' },
        { term: 'Et en Scratch ?', def: 'Le pseudo-code du cours se traduit bloc par bloc dans Scratch, le langage du brevet.<br/><br/>$x \\leftarrow 0$ est le bloc <strong>« mettre x à 0 »</strong> ; $x \\leftarrow x + 1$ est <strong>« ajouter 1 à x »</strong>.<br/><br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 10$ est <strong>« répéter 10 fois »</strong>.<br/><br/>$\\mathtt{tant\\ que}$ (condition) est <strong>« répéter jusqu\'à »</strong> — attention, la condition y est <strong>contraire</strong> : « tant que $n > 1$ » devient « répéter jusqu\'à $n < 2$ » pour un entier $n$.<br/><br/>$\\mathtt{si} \\ldots \\mathtt{alors} \\ldots \\mathtt{sinon}$ est le bloc <strong>« si … alors … sinon »</strong>.' }
      ],
      method: {
        title: 'Les trois structures de base',
        steps: [
          '<strong>Séquence</strong> : les instructions s\'exécutent dans l\'ordre, l\'une après l\'autre. C\'est la structure la plus simple.',
          '<strong>Condition</strong> : $\\mathtt{si}$ (condition) $\\mathtt{alors}$ (bloc A) $\\mathtt{sinon}$ (bloc B). Exécution <strong>conditionnelle</strong> — un seul des deux blocs s\'exécute.',
          '<strong>Boucle bornée</strong> : $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$ — nombre de tours <strong>fixé à l\'avance</strong>.<br/><strong>Boucle non bornée</strong> : $\\mathtt{tant\\ que}$ (condition) — continue jusqu\'à ce que la condition devienne fausse.'
        ]
      },
      example: {
        statement: 'Tracer l\'exécution de l\'algorithme suivant :<br/>$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 3\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i^2$<br/>$\\mathtt{fin\\ pour}$',
        steps: [
          '<strong>Initialisation</strong> : $S = 0$.',
          '<strong>Tour $i = 1$</strong> : $S \\leftarrow 0 + 1^2 = 1$.<br/><strong>Tour $i = 2$</strong> : $S \\leftarrow 1 + 2^2 = 1 + 4 = 5$.<br/><strong>Tour $i = 3$</strong> : $S \\leftarrow 5 + 3^2 = 5 + 9 = 14$.',
          'La boucle est terminée ($i$ a atteint $3$). La valeur finale de $S$ est $14 = 1^2 + 2^2 + 3^2$.'
        ],
        answer: '$S = 14$. L\'algorithme calcule la somme des carrés de $1$ à $3$ : $1 + 4 + 9 = 14$.'
      },
      formulas: [
        'Affectation : $x \\leftarrow 5$ (la variable $x$ prend la valeur $5$)',
        'Boucle bornée : $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}\\; \\ldots$',
        'Test : $\\mathtt{si}\\; (x > 0)\\; \\mathtt{alors}\\; \\ldots\\; \\mathtt{sinon}\\; \\ldots$'
      ],
      diagram: {
        theme: 'maths',
        kicker: 'Algorigramme',
        title: 'Une boucle bornée pas à pas : calculer S = 1² + 2² + 3²',
        description: 'Le même algorithme que dans l\'exemple du cours, sous forme d\'organigramme normalisé : rectangles pour les actions, losange pour le test de la boucle, terminaux arrondis pour le début et la fin.',
        svg: `
          <svg viewBox="0 0 540 460" role="img" aria-labelledby="algo3e-title algo3e-desc">
            <title id="algo3e-title">Algorigramme de la boucle bornée</title>
            <desc id="algo3e-desc">Organigramme : debut, S recoit 0, i recoit 1, puis tant que i est inferieur ou egal a 3 on execute S recoit S plus i au carre et i recoit i plus 1 en bouclant sur le test, sinon on affiche S et on termine. Le deroulement donne S egal a 14.</desc>
            <defs>
              <marker id="arrow-3e-algorithmique" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--diagram-accent)"></path>
              </marker>
            </defs>

            <rect class="frame-line" x="100" y="20" width="140" height="40" rx="20" fill="none"></rect>
            <text class="annotation-label" x="170" y="45" text-anchor="middle">Début</text>
            <line class="curve-main" x1="170" y1="60" x2="170" y2="80" marker-end="url(#arrow-3e-algorithmique)"></line>

            <rect class="frame-line" x="90" y="80" width="160" height="40" fill="none"></rect>
            <text class="annotation-label" x="170" y="105" text-anchor="middle">S ← 0</text>
            <line class="curve-main" x1="170" y1="120" x2="170" y2="140" marker-end="url(#arrow-3e-algorithmique)"></line>

            <rect class="frame-line" x="90" y="140" width="160" height="40" fill="none"></rect>
            <text class="annotation-label" x="170" y="165" text-anchor="middle">i ← 1</text>
            <line class="curve-main" x1="170" y1="180" x2="170" y2="205" marker-end="url(#arrow-3e-algorithmique)"></line>

            <polygon class="frame-line" points="170,205 260,250 170,295 80,250" fill="none"></polygon>
            <text class="annotation-label" x="170" y="254" text-anchor="middle">i ≤ 3 ?</text>

            <line class="curve-main" x1="170" y1="295" x2="170" y2="330" marker-end="url(#arrow-3e-algorithmique)"></line>
            <text class="label-soft" x="184" y="317">Oui</text>

            <rect class="frame-line" x="80" y="330" width="180" height="40" fill="none"></rect>
            <text class="annotation-label" x="170" y="355" text-anchor="middle">S ← S + i²</text>
            <line class="curve-main" x1="170" y1="370" x2="170" y2="390" marker-end="url(#arrow-3e-algorithmique)"></line>

            <rect class="frame-line" x="90" y="390" width="160" height="40" fill="none"></rect>
            <text class="annotation-label" x="170" y="415" text-anchor="middle">i ← i + 1</text>

            <path class="curve-main" d="M90,410 L30,410 L30,250 L80,250" marker-end="url(#arrow-3e-algorithmique)"></path>

            <line class="curve-main" x1="260" y1="250" x2="340" y2="250" marker-end="url(#arrow-3e-algorithmique)"></line>
            <text class="label-soft" x="272" y="240">Non</text>

            <rect class="frame-line" x="340" y="230" width="150" height="40" fill="none"></rect>
            <text class="annotation-label" x="415" y="255" text-anchor="middle">Afficher S</text>
            <line class="curve-main" x1="415" y1="270" x2="415" y2="320" marker-end="url(#arrow-3e-algorithmique)"></line>

            <rect class="frame-line" x="345" y="320" width="140" height="40" rx="20" fill="none"></rect>
            <text class="annotation-label" x="415" y="345" text-anchor="middle">Fin</text>
          </svg>
        `,
        notes: [
          'Initialisation : S ← 0 puis i ← 1, avant d\'entrer dans la boucle.',
          'Tant que i ≤ 3 (branche « Oui ») : on exécute S ← S + i² puis i ← i + 1, et on revient tester la condition.',
          'Dès que i ≤ 3 devient faux, c\'est-à-dire à i = 4 (branche « Non ») : on sort de la boucle et on affiche S.'
        ],
        reading: 'Suis la boucle « Oui » qui revient sur le losange tant que i ≤ 3 ; dès qu\'elle devient fausse, la branche « Non » mène à l\'affichage du résultat.',
        caption: 'Algorigramme de l\'exemple du cours : $S \\leftarrow 0$, $\\mathtt{pour}\\ i\\ \\mathtt{de}\\ 1\\ \\mathtt{à}\\ 3$, $S \\leftarrow S + i^2$, ce qui donne $S = 1^2+2^2+3^2 = 14$.'
      },
      /* SCHÉMA SECONDAIRE — UN SEUL, ajouté le 2026-09-13, et c'est délibéré.
         Principe du cahier des charges, section 9 : une figure par MALENTENDU,
         pas une figure par formule, et « on n'ajoute pas de figure pour faire
         du chiffre ».

         Ce chapitre est, avec l'arithmétique, le moins demandeur en figures du
         niveau — pour une raison précise : son objet EST déjà une figure.
         L'algorigramme principal montre la structure complète de la boucle,
         ses deux branches et son retour. Redessiner une seconde structure de
         contrôle n'apprendrait rien de plus ; ce serait une figure par
         formule.

         Le seul malentendu qui ne se voit PAS sur un algorigramme est celui
         que le chapitre désigne lui-même comme son piège : l'affectation
         `x ← x + 1`, que l'élève lit comme une équation et déclare
         impossible. Un algorigramme ne peut pas le lever, justement parce
         qu'il dessine le CHEMIN et jamais les VALEURS. Ce qui le lève, c'est
         une table d'état : les valeurs successives des variables, ligne à
         ligne. C'est donc cela, et rien d'autre, que ce schéma ajoute.

         LA TRACE EST CALCULÉE, pas recopiée : elle est obtenue en exécutant
         réellement l'algorithme du cours (S ← 0, i ← 1, tant que i ≤ 3), et
         le test de scripts/manuel/tests/diagrams-3e.test.js la rejoue à
         l'identique pour vérifier chaque case du tableau, y compris le
         résultat final S = 14. */
      diagrams: [
        {
          theme: 'maths',
          kicker: 'Piège',
          title: 'Une affectation n\'est pas une équation',
          description: '$x = x + 1$ est impossible en mathématiques, et pourtant $x \\leftarrow x + 1$ s\'écrit tous les jours en algorithmique. La raison tient en une image : la flèche ne compare pas deux choses, elle <strong>remplace</strong> l\'ancienne valeur par la nouvelle. Voici les valeurs, ligne à ligne, pendant l\'exécution de l\'exemple du cours.',
          svg: `
            <svg viewBox="0 0 400 262" role="img" aria-labelledby="algo-trace-title algo-trace-desc">
              <title id="algo-trace-title">Table des valeurs successives pendant la boucle</title>
              <desc id="algo-trace-desc">Un tableau de suivi donne les valeurs des deux variables apres chaque instruction de l'algorithme du cours. Au depart, la somme vaut zero et le compteur vaut un. Apres la premiere addition la somme vaut un, puis le compteur passe a deux. Apres la deuxieme addition la somme vaut cinq, puis le compteur passe a trois. Apres la troisieme addition la somme vaut quatorze, puis le compteur passe a quatre. Comme quatre est superieur a trois, la boucle s'arrete et la somme finale vaut quatorze, ce qui est bien un plus quatre plus neuf. A chaque ligne, la nouvelle valeur d'une variable remplace l'ancienne au lieu de s'y ajouter comme le ferait une equation.</desc>

              <text class="tick-label" x="20" y="24" text-anchor="start">instruction exécutée</text>
              <text class="tick-label" x="286" y="24" text-anchor="middle">somme</text>
              <text class="tick-label" x="350" y="24" text-anchor="middle">compteur</text>
              <line class="axis" x1="20" y1="32" x2="380" y2="32"></line>

              <text class="label-soft" x="20" y="52" text-anchor="start">au départ</text>
              <text class="annotation-label" x="286" y="52" text-anchor="middle">0</text>
              <text class="annotation-label" x="350" y="52" text-anchor="middle">1</text>

              <text class="label-soft" x="20" y="76" text-anchor="start">la somme reçoit somme plus 1 au carré</text>
              <text class="annotation-label" x="286" y="76" text-anchor="middle">1</text>
              <text class="tick-label" x="350" y="76" text-anchor="middle">1</text>

              <text class="label-soft" x="20" y="100" text-anchor="start">le compteur reçoit compteur plus 1</text>
              <text class="tick-label" x="286" y="100" text-anchor="middle">1</text>
              <text class="annotation-label" x="350" y="100" text-anchor="middle">2</text>

              <text class="label-soft" x="20" y="124" text-anchor="start">la somme reçoit somme plus 2 au carré</text>
              <text class="annotation-label" x="286" y="124" text-anchor="middle">5</text>
              <text class="tick-label" x="350" y="124" text-anchor="middle">2</text>

              <text class="label-soft" x="20" y="148" text-anchor="start">le compteur reçoit compteur plus 1</text>
              <text class="tick-label" x="286" y="148" text-anchor="middle">5</text>
              <text class="annotation-label" x="350" y="148" text-anchor="middle">3</text>

              <text class="label-soft" x="20" y="172" text-anchor="start">la somme reçoit somme plus 3 au carré</text>
              <text class="annotation-label" x="286" y="172" text-anchor="middle">14</text>
              <text class="tick-label" x="350" y="172" text-anchor="middle">3</text>

              <text class="label-soft" x="20" y="196" text-anchor="start">le compteur reçoit compteur plus 1</text>
              <text class="tick-label" x="286" y="196" text-anchor="middle">14</text>
              <text class="annotation-label" x="350" y="196" text-anchor="middle">4</text>

              <line class="axis" x1="20" y1="210" x2="380" y2="210"></line>
              <text class="label-soft" x="20" y="230" text-anchor="start">4 dépasse 3, la boucle s'arrête</text>
              <text class="annotation-label" x="286" y="230" text-anchor="middle">14</text>
              <text class="tick-label" x="350" y="230" text-anchor="middle">4</text>

              <text class="label-soft" x="200" y="254" text-anchor="middle">la valeur en gras vient de remplacer celle de la ligne au-dessus</text>
            </svg>
          `,
          notes: [
            'Lis une ligne à la fois. À chaque ligne, <strong>une seule</strong> des deux variables change : celle que l\'instruction nomme à gauche de la flèche. L\'autre garde sa valeur.',
            'Regarde la ligne « le compteur reçoit compteur plus $1$ » quand le compteur vaut $1$ : il passe à $2$. Il n\'y a aucune contradiction, parce que le $1$ de droite est l\'<strong>ancienne</strong> valeur et le $2$ de gauche la <strong>nouvelle</strong>.',
            'C\'est pour cela que l\'ordre des instructions compte en algorithmique alors qu\'il ne compte pas dans un système d\'équations. Intervertir deux lignes change le résultat.',
            'La somme suit le même mécanisme : $0$, puis $1$, puis $5$, puis $14$. Chaque valeur est l\'ancienne <strong>plus</strong> le nouveau carré, et elle écrase l\'ancienne.',
            'On retrouve bien $14 = 1 + 4 + 9$, le résultat annoncé par l\'algorigramme. Une table de ce genre est le moyen le plus sûr de vérifier un algorithme dont tu doutes.'
          ],
          reading: 'Une table de suivi se remplit de haut en bas, une instruction par ligne, sans jamais sauter d\'étape. La colonne qui change est celle de la variable nommée avant la flèche.',
          caption: 'Table de suivi de l\'algorithme du cours : valeurs de la somme et du compteur après chaque instruction, jusqu\'au résultat $14$.'
        }
      ],
      recap: [
        'Les trois structures fondamentales sont la <strong>séquence</strong>, la <strong>condition</strong> ($\\mathtt{si/sinon}$) et la <strong>boucle</strong> ($\\mathtt{pour}$ ou $\\mathtt{tant\\ que}$).',
        'L\'<strong>affectation</strong> $x \\leftarrow x + 1$ n\'est PAS une équation : c\'est une mise à jour qui lit l\'ancienne valeur, calcule, et stocke le résultat.',
        '<strong>Tracer</strong> l\'exécution dans un tableau (une ligne par étape, une colonne par variable) est la méthode la plus sûre pour comprendre et déboguer.',
        'Une boucle <strong>bornée</strong> ($\\mathtt{pour}$) a un nombre de tours fixé à l\'avance ; une boucle <strong>non bornée</strong> ($\\mathtt{tant\\ que}$) peut tourner indéfiniment si la condition ne devient jamais fausse.'
      ],
      piege: 'Piège : l\'affectation $x \\leftarrow x + 1$ signifie « prendre la valeur actuelle de $x$, y ajouter $1$, et stocker le résultat dans $x$ ». Ce n\'est pas une équation : $x = x + 1$ est impossible en maths, mais parfaitement valide en algorithmique.'
    },
    quiz: [
      {
        q: 'Quelle est la valeur de $S$ à la fin de cet algorithme ?<br/>$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 4\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i$',
        options: ['$4$', '$6$', '$10$', '$16$'],
        answer: 2,
        correction: '$S = 0 + 1 + 2 + 3 + 4 = 10$. La boucle additionne tous les entiers de $1$ à $4$.'
      },
      {
        q: 'Un algorithme initialise $S \\leftarrow 1$, puis exécute $S \\leftarrow S \\times i$ pour $i$ allant de $1$ à $3$. Quelle est la valeur finale de $S$ ?',
        options: ['$6$', '$1$', '$3$', '$9$'],
        answer: 0,
        correction: 'Déroulement : $S=1$. $i=1 : S = 1 \\times 1 = 1$. $i=2 : S = 1 \\times 2 = 2$. $i=3 : S = 2 \\times 3 = 6$. L\'erreur fréquente est d\'additionner au lieu de multiplier ($1+2+3 = 6$ ici par coïncidence, mais pas pour $n=4$), ou d\'oublier que $S$ part de $1$ (pas $0$) car on multiplie.'
      },
      {
        q: 'Dans un algorithme, on écrit $x \\leftarrow x + 1$. Que fait cette instruction ?',
        options: [
          'Elle prouve que $x = x + 1$',
          'Elle augmente la valeur de $x$ de $1$',
          'Elle réinitialise $x$ à $0$',
          'Elle est impossible'
        ],
        answer: 1,
        correction: 'En algorithmique, $x \\leftarrow x + 1$ est une affectation : on lit la valeur actuelle de $x$, on lui ajoute $1$, et on stocke le résultat dans $x$. C\'est un incrément.'
      }
    ],
    exercice: {
      type: 'numeric',
      /* BANQUE ÉLARGIE le 2026-09-13.

         AVANT : un seul moule de tâche — « exécute une boucle pour qui
         accumule $S \leftarrow S + i$, donne $S$ » — habillé de six décors
         tirés par pick() (Léa en Python, le professeur, le robot, Tom, une
         application, un jeu vidéo). Mesure à 60 tirages : 6 moules d'énoncé,
         mais **1 seule tâche distincte**. Pire, l'unique corrigé ne traçait
         rien : il appliquait $\dfrac{n(n+1)}{2}$, c'est-à-dire une formule
         extérieure au chapitre, si bien que l'élève pouvait résoudre tous les
         exercices de la banque SANS JAMAIS exécuter un algorithme.

         Or exécuter est précisément ce que le chapitre demande, et l'affectation
         qui écrase — le $x \leftarrow x + 1$ sur lequel l'introduction tout
         entière est bâtie — n'apparaissait dans aucun exercice. Ni la
         condition, ni la boucle « tant que », ni la lecture du rôle d'un
         algorithme, que l'évaluation exige pourtant toutes les trois.

         DÉFAUT ADJACENT CORRIGÉ AU PASSAGE : l'énoncé annonçait « avec
         $n = 5$ » alors que le pseudo-code portait déjà la borne en dur
         ($\mathtt{pour}\; i\; \mathtt{de}\; 1\; \mathtt{à}\; 5$). La variable
         $n$ n'existait donc nulle part dans l'algorithme montré : une donnée
         fantôme, contredite par le code sous les yeux de l'élève.

         APRÈS : sept familles de tâches.
           - 'echange'   : deux affectations qui s'écrasent ($x \leftarrow x+y$
                           puis $y \leftarrow x-y$). C'est LE piège du chapitre,
                           et le corrigé trace ligne par ligne ;
           - 'somme'     : la tâche d'origine, conservée, mais le corrigé
                           déroule maintenant les tours de boucle avant de
                           mentionner la formule, et la borne du code est
                           celle de l'énoncé ;
           - 'condition' : une boucle qui n'accumule que sous condition ;
           - 'tantque'   : une boucle non bornée avec compteur — on divise par
                           $2$ jusqu'à $1$ — dont le nombre de tours ne se
                           devine pas ;
           - 'produit'   : un produit accumulé (puissance ou factorielle), où
                           l'initialisation à $1$ et non à $0$ est décisive ;
           - 'tours'     : compter les tours d'une boucle $\mathtt{pour}$ de $a$
                           à $b$ — la fameuse erreur du « décalage de un » ;
           - 'role'      : identifier ce que CALCULE un algorithme, réponse
                           codée 1/2/3. Lire un programme, pas l'exécuter.

         TOUTES LES RÉPONSES SONT CALCULÉES PAR EXÉCUTION RÉELLE en JavaScript,
         jamais par une formule fermée recopiée à la main : le corrigé et la
         réponse ne peuvent donc pas diverger. */
      generate() {
        const tache = pick(['echange', 'somme', 'condition', 'tantque',
                            'produit', 'tours', 'role']);

        /* Décors neutres : ils habillent l'énoncé sans jamais porter de donnée
           chiffrée, pour qu'aucun contexte ne puisse contredire le pseudo-code
           (c'est exactement ce qui produisait le « $n = 5$ » fantôme). */
        const DECORS = [
          'Ton professeur d\'informatique te demande de <strong>tracer l\'exécution</strong> de ce programme.',
          'Léa débute en <strong>programmation</strong> et veut prévoir le résultat de son script <strong>avant</strong> de le lancer.',
          'Un <strong>robot programmable</strong> exécute ce script au démarrage de sa mission.',
          'Sur sa calculatrice, Tom saisit cet <strong>algorithme</strong> et veut anticiper ce qu\'il affichera.'
        ];

        if (tache === 'echange') {
          /* LE PIÈGE DU CHAPITRE : une affectation écrase l'ancienne valeur, si
             bien que la deuxième ligne ne travaille PAS sur le $x$ de départ.
             L'introduction du cours est construite là-dessus et aucun exercice
             ne l'atteignait. */
          /* x0 et y0 doivent être DIFFÉRENTS : à valeurs égales, l'échange est
             invisible (les deux variables finissent sur leur propre valeur) et
             la ligne de contrôle « les deux variables ont échangé » ne prouve
             plus rien. Défaut vu seulement à la relecture des tirages. */
          const x0 = rand(2, 12);
          let y0 = rand(3, 15);
          if (y0 === x0) y0 = x0 + 3;
          const x1 = x0 + y0;
          const y1 = x1 - y0;                  // vaut x0 : c'est le point
          const x2 = x1 - y1;                  // vaut y0
          const quelle = pick(['x', 'y']);
          const rep = quelle === 'x' ? x2 : y1;
          const code = `$x \\leftarrow ${x0}$<br/>$y \\leftarrow ${y0}$<br/>$x \\leftarrow x + y$<br/>$y \\leftarrow x - y$<br/>$x \\leftarrow x - y$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $${quelle}$ ?`,
            answer: rep, tolerance: 0, unit: '',
            hint: `La flèche $\\leftarrow$ ne signifie pas « est égal à » mais « <strong>reçoit</strong> ».<br/><br/>Dresse un tableau à deux colonnes, $x$ et $y$, et remplis une ligne par instruction : dès la troisième ligne, $x$ ne vaut plus $${x0}$.`,
            solution: [
              `On trace ligne par ligne, en n'utilisant à chaque fois que les valeurs <strong>courantes</strong> — jamais celles du départ, qui ont pu être écrasées.`,
              `Après $x \\leftarrow ${x0}$ et $y \\leftarrow ${y0}$ : $x = ${x0}$, $y = ${y0}$.<br/><br/>` +
              `$x \\leftarrow x + y$ donne $x = ${x0} + ${y0} = ${x1}$ (et $y$ ne bouge pas).<br/><br/>` +
              `$y \\leftarrow x - y$ utilise le <strong>nouveau</strong> $x$ : $y = ${x1} - ${y0} = ${y1}$.<br/><br/>` +
              `$x \\leftarrow x - y$ donne $x = ${x1} - ${y1} = ${x2}$.`,
              `La valeur finale de $${quelle}$ est donc <strong>$${rep}$</strong>.<br/><br/>Contrôle : les deux variables ont <strong>échangé</strong> leurs valeurs de départ, sans passer par une troisième variable. C'est tout l'intérêt de ces trois lignes.`
            ]
          };
        }

        if (tache === 'somme') {
          /* LA TÂCHE D'ORIGINE, conservée — mais le corrigé déroule désormais
             les tours avant de citer la formule, et la borne affichée dans le
             code est bien celle de l'énoncé. */
          const n = rand(4, 9);
          let s = 0; const tours = [];
          for (let i = 1; i <= n; i++) { const av = s; s += i; tours.push(`tour $i = ${i}$ : $S = ${av} + ${i} = ${s}$`); }
          const code = `$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; ${n}\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i$<br/>$\\mathtt{fin\\ pour}$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $S$ ?`,
            answer: s, tolerance: 0, unit: '',
            hint: `À chaque tour, $S$ <strong>s'augmente</strong> de la valeur courante de $i$, qui va de $1$ à $${n}$.<br/><br/>Écris les $${n}$ valeurs successives de $S$ : la dernière est la réponse.`,
            solution: [
              `La variable $S$ sert d'<strong>accumulateur</strong> : elle part de $0$ et se voit ajouter, à chaque tour, la valeur courante de $i$. On déroule donc les $${n}$ tours.`,
              `${tours.slice(0, 4).join(' ; ')}${n > 4 ? ' ; … et ainsi de suite jusqu\'au dernier tour' : ''}.`,
              `À la sortie de la boucle, $S = 1 + 2 + \\ldots + ${n} = ${s}$.<br/><br/>Contrôle rapide : la somme des entiers de $1$ à $${n}$ vaut aussi $\\dfrac{${n} \\times ${n + 1}}{2} = ${s}$ — même résultat, ce qui confirme la trace.`
            ]
          };
        }

        if (tache === 'condition') {
          /* UNE CONDITION DANS LA BOUCLE : tous les tours ne contribuent pas.
             L'élève qui somme sans filtrer se trahit immédiatement. */
          const n = rand(6, 12);
          const cas = pick([
            { test: '$i$ est <strong>pair</strong>', garde: (i) => i % 2 === 0, dit: 'pairs' },
            { test: '$i$ est <strong>impair</strong>', garde: (i) => i % 2 === 1, dit: 'impairs' },
            { test: '$i$ est un <strong>multiple de $3$</strong>', garde: (i) => i % 3 === 0, dit: 'multiples de $3$' }
          ]);
          let s = 0; const retenus = [];
          for (let i = 1; i <= n; i++) if (cas.garde(i)) { s += i; retenus.push(i); }
          const code = `$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; ${n}\\; \\mathtt{faire}$<br/>$\\quad \\mathtt{si}\\;$ ${cas.test} $\\mathtt{alors}$<br/>$\\quad\\quad S \\leftarrow S + i$<br/>$\\quad \\mathtt{fin\\ si}$<br/>$\\mathtt{fin\\ pour}$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $S$ ?`,
            answer: s, tolerance: 0, unit: '',
            hint: `La boucle fait bien $${n}$ tours, mais l'instruction $S \\leftarrow S + i$ ne s'exécute <strong>que</strong> lorsque le test est vrai.<br/><br/>Commence par lister les valeurs de $i$ qui passent le test.`,
            solution: [
              `Une condition à l'intérieur d'une boucle ne change pas le <strong>nombre de tours</strong> — il y en a toujours $${n}$ — mais elle filtre ceux qui font quelque chose. On liste donc d'abord les valeurs retenues.`,
              `Parmi $1$ à $${n}$, les ${cas.dit} sont $${retenus.join('$, $')}$.`,
              `Il ne reste qu'à les additionner : $S = ${retenus.join(' + ')} = ${s}$.<br/><br/>Contrôle : seuls $${retenus.length}$ tours sur $${n}$ ont modifié $S$ ; les autres ont bien tourné à vide.`
            ]
          };
        }

        if (tache === 'tantque') {
          /* LA BOUCLE NON BORNÉE : le nombre de tours n'est pas écrit dans le
             code, il se découvre en exécutant. L'évaluation pose exactement
             cette question et aucun exercice ne l'entraînait. */
          const depart = pick([40, 60, 80, 100, 120, 200]);
          let v = depart, c = 0; const trace = [depart];
          while (v > 1) { v = Math.floor(v / 2); c += 1; trace.push(v); }
          const code = `$c \\leftarrow 0$<br/>$n \\leftarrow ${depart}$<br/>$\\mathtt{tant\\ que}\\; n > 1\\; \\mathtt{faire}$<br/>$\\quad n \\leftarrow n \\div 2$ (division entière)<br/>$\\quad c \\leftarrow c + 1$<br/>$\\mathtt{fin\\ tant\\ que}$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Ici, le nombre de tours n'est <strong>pas écrit</strong> dans le programme : il dépend de la valeur de $n$.<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $c$ ?`,
            answer: c, tolerance: 0, unit: '',
            hint: `Écris la suite des valeurs prises par $n$ : $${depart}$, puis sa moitié, puis la moitié de celle-ci…<br/><br/>La division est <strong>entière</strong> : $25 \\div 2$ donne $12$, pas $12{,}5$. Le compteur $c$ augmente d'un à chaque passage.`,
            solution: [
              `Une boucle « tant que » ne dit pas combien de tours elle fera : il faut la dérouler jusqu'à ce que la condition $n > 1$ devienne fausse. On écrit donc la suite des valeurs de $n$.`,
              `$${trace.join(' \\to ')}$. La division étant entière, les décimales sont abandonnées à chaque étape.`,
              `On s'arrête dès que $n \\leq 1$. Le compteur a été augmenté une fois par passage, soit <strong>$${c}$</strong> fois.<br/><br/>Contrôle : il y a bien $${trace.length}$ valeurs dans la suite, dont la première n'est pas issue d'un tour — d'où $${trace.length} - 1 = ${c}$ tours.`
            ]
          };
        }

        if (tache === 'produit') {
          /* PRODUIT ACCUMULÉ : l'initialisation à $1$ et non à $0$ est
             décisive, et c'est l'erreur que fait tout élève venant de la somme.
             La solution le dit explicitement. */
          const cas = pick([
            { n: rand(3, 6), mult: 2, nom: 'puissance de $2$' },
            { n: rand(3, 5), mult: 3, nom: 'puissance de $3$' },
            { n: rand(3, 5), mult: 0, nom: 'factorielle' }   // mult 0 => multiplie par i
          ]);
          let p = 1; const tours = [];
          for (let i = 1; i <= cas.n; i++) {
            const av = p, f = cas.mult === 0 ? i : cas.mult;
            p *= f; tours.push(`$${av} \\times ${f} = ${p}$`);
          }
          const ligne = cas.mult === 0 ? '$\\quad P \\leftarrow P \\times i$' : `$\\quad P \\leftarrow P \\times ${cas.mult}$`;
          const code = `$P \\leftarrow 1$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; ${cas.n}\\; \\mathtt{faire}$<br/>${ligne}<br/>$\\mathtt{fin\\ pour}$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $P$ ?`,
            answer: p, tolerance: 0, unit: '',
            hint: `Remarque que $P$ part de $1$, et non de $0$ : dans un produit accumulé, partir de $0$ laisserait $P$ à $0$ pour toujours.<br/><br/>Écris les $${cas.n}$ valeurs successives de $P$.`,
            solution: [
              `Ici $P$ accumule un <strong>produit</strong>, et non une somme : c'est pourquoi il part de $1$. Partir de $0$ le condamnerait à rester nul, puisque $0$ multiplié par quoi que ce soit vaut $0$.`,
              `On déroule les tours : ${tours.join(', puis ')}.`,
              /* Pour une factorielle de 3 ou 4, on écrit le produit EN ENTIER :
                 « $1 \times 2 \times \ldots \times 3$ » était absurde, les
                 points de suspension ne sautant aucun facteur. */
              `La valeur finale est $P = ${p}$.<br/><br/>Contrôle : l'algorithme calcule ${cas.mult === 0 ? `$${Array.from({ length: cas.n }, (_, j) => j + 1).join(' \\times ')}$, la <strong>factorielle</strong> de $${cas.n}$` : `$${cas.mult}^{${cas.n}}$, une <strong>${cas.nom}</strong>`}, et $${p}$ est bien ce nombre.`
            ]
          };
        }

        if (tache === 'tours') {
          /* COMPTER LES TOURS d'une boucle pour de a à b. L'erreur du
             « décalage de un » — répondre b - a — est la plus répandue du
             chapitre, et le corrigé la prend de front sur un petit exemple
             vérifiable à la main. */
          const a = rand(1, 9), b = a + rand(3, 14);
          const nb = b - a + 1;
          const code = `$c \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; ${a}\\; \\mathtt{à}\\; ${b}\\; \\mathtt{faire}$<br/>$\\quad c \\leftarrow c + 1$<br/>$\\mathtt{fin\\ pour}$`;
          return {
            statement: `${pick(DECORS)}<br/><br/>${code}<br/><br/>` +
              `Le compteur $c$ augmente de $1$ à chaque tour de boucle.<br/><br/>` +
              `Quelle est la <strong>valeur finale</strong> de $c$, autrement dit combien de tours la boucle effectue-t-elle ?`,
            answer: nb, tolerance: 0, unit: '',
            hint: `Attention : la boucle exécute un tour pour $i = ${a}$ <strong>et</strong> un tour pour $i = ${b}$ — les deux bornes sont incluses.<br/><br/>Vérifie ta méthode sur un cas minuscule : de $3$ à $5$, il y a $3$ tours et non $2$.`,
            solution: [
              `Dans une boucle $\\mathtt{pour}\\; i\\; \\mathtt{de}\\; a\\; \\mathtt{à}\\; b$, les <strong>deux bornes sont incluses</strong> : $i$ prend la valeur $a$, puis toutes les suivantes, jusqu'à $b$ compris.`,
              `Le nombre de tours vaut donc $b - a + 1$, et non $b - a$. Ici : $${b} - ${a} + 1 = ${nb}$.`,
              `La valeur finale de $c$ est <strong>$${nb}$</strong>.<br/><br/>Contrôle sur un cas minuscule : de $3$ à $5$, la formule donne $5 - 3 + 1 = 3$, et on compte bien trois tours ($i = 3$, $i = 4$, $i = 5$). Le « $+1$ » oublié est l'erreur la plus fréquente sur les boucles $\\mathtt{pour}$.`
            ]
          };
        }

        /* tache === 'role' : LIRE un algorithme au lieu de l'exécuter. On ne
           demande aucun nombre à calculer, mais ce que le programme CALCULE en
           général. Réponse codée 1, 2 ou 3 pour rester une question numérique.
           L'évaluation pose cette question et rien ne l'entraînait. */
        const enigmes = [
          {
            code: `$P \\leftarrow 1$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad P \\leftarrow P \\times 2$<br/>$\\mathtt{fin\\ pour}$`,
            props: ['$2 \\times n$', '$2^n$', '$n^2$'],
            bon: 2,
            pourquoi: 'à chaque tour $P$ est multiplié par $2$, et il y a $n$ tours : on multiplie donc $n$ fois par $2$',
            essai: 'Avec $n = 3$ : $P$ passe de $1$ à $2$, puis $4$, puis $8$. Or $2 \\times 3 = 6$ et $3^2 = 9$, tandis que $2^3 = 8$'
          },
          {
            code: `$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + 2$<br/>$\\mathtt{fin\\ pour}$`,
            props: ['$2 \\times n$', '$2^n$', '$n + 2$'],
            bon: 1,
            pourquoi: 'à chaque tour on <strong>ajoute</strong> $2$, et il y a $n$ tours : on ajoute donc $n$ fois le nombre $2$',
            essai: 'Avec $n = 4$ : $S$ passe de $0$ à $2$, $4$, $6$, $8$. Or $2^4 = 16$ et $4 + 2 = 6$, tandis que $2 \\times 4 = 8$'
          },
          {
            code: `$P \\leftarrow 1$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad P \\leftarrow P \\times i$<br/>$\\mathtt{fin\\ pour}$`,
            props: ['$n \\times n$', '$1 + 2 + \\ldots + n$', '$1 \\times 2 \\times \\ldots \\times n$'],
            bon: 3,
            pourquoi: 'le facteur n\'est pas fixe : c\'est $i$, qui change à chaque tour et prend toutes les valeurs de $1$ à $n$',
            essai: 'Avec $n = 4$ : $P$ passe de $1$ à $1$, $2$, $6$, $24$. Or $4 \\times 4 = 16$ et $1 + 2 + 3 + 4 = 10$, tandis que $1 \\times 2 \\times 3 \\times 4 = 24$'
          },
          {
            code: `$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i$<br/>$\\mathtt{fin\\ pour}$`,
            props: ['$1 \\times 2 \\times \\ldots \\times n$', '$n \\times n$', '$1 + 2 + \\ldots + n$'],
            bon: 3,
            pourquoi: 'on <strong>ajoute</strong> la valeur courante de $i$, qui prend successivement toutes les valeurs de $1$ à $n$',
            essai: 'Avec $n = 4$ : $S$ passe de $0$ à $1$, $3$, $6$, $10$. Or $1 \\times 2 \\times 3 \\times 4 = 24$ et $4 \\times 4 = 16$, tandis que $1 + 2 + 3 + 4 = 10$'
          }
        ];
        const e = pick(enigmes);
        return {
          statement: `Cet algorithme ne porte aucune valeur chiffrée : il travaille sur un entier $n$ quelconque.<br/><br/>${e.code}<br/><br/>` +
            `Que <strong>calcule</strong>-t-il ?<br/><br/>` +
            `Réponds par $1$ pour ${e.props[0]}, $2$ pour ${e.props[1]}, $3$ pour ${e.props[2]}.`,
          answer: e.bon, tolerance: 0, unit: '',
          hint: `Impossible d'exécuter le programme tel quel, puisque $n$ n'a pas de valeur : c'est voulu.<br/><br/>La bonne méthode est de <strong>l'essayer sur un petit nombre</strong>, $n = 3$ ou $n = 4$, puis de regarder laquelle des trois propositions donne ce résultat.`,
          solution: [
            `Quand un algorithme travaille sur un $n$ quelconque, on ne l'exécute pas : on le <strong>lit</strong>, puis on vérifie sur une petite valeur. Ici, ${e.pourquoi}.`,
            `${e.essai}. Une seule proposition survit à l'essai.`,
            `L'algorithme calcule donc ${e.props[e.bon - 1]}. Réponse : $${e.bon}$.<br/><br/>Contrôle : reprends l'essai avec une autre valeur de $n$ — si la proposition retenue est la bonne, elle doit encore convenir.`
          ]
        };
      }
    },
    probleme: {
      context: 'Un élève code un algorithme pour calculer la moyenne d\'une liste de $5$ notes.',
      tasks: [
        'Écrire en pseudo-code un algorithme qui demande $5$ notes, les additionne et affiche la moyenne.',
        'Simuler cet algorithme avec les notes $12, 15, 8, 17, 13$.',
        'Modifier l\'algorithme pour compter combien de notes sont supérieures à la moyenne.'
      ],
      solutions: [
        '$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$<br/>$\\quad$ Saisir $n_i$<br/>$\\quad S \\leftarrow S + n_i$<br/>$\\mathtt{fin\\ pour}$<br/>Afficher $S \\div 5$',
        '$S = 12+15+8+17+13 = 65$. Moyenne $= 65/5 = 13$.',
        'Ajouter un compteur $c \\leftarrow 0$ et tester $\\mathtt{si}\\; n_i > 13\\; \\mathtt{alors}\\; c \\leftarrow c + 1$. Ici : $15, 17$ → $c = 2$.'
      ],
      finalAnswer: 'Moyenne $= 13$ ; $2$ notes sur $5$ sont supérieures à la moyenne.'
    },

    evaluation: {
      title: 'Évaluation — Algorithmes et programmation',
      duration: '30 min',
      questions: [
        {
          /* SAUTS DE LIGNE EN `<br/>` ET NON EN `\n` (2026-09-13). Defaut
             PREEXISTANT, vu seulement a l'epreuve : LaTeX traite un `\n` isole
             comme une simple espace, si bien que les cinq lignes de cet
             algorithme s'imprimaient bout a bout sur une seule — « x <- 3
             y <- 5 x <- x + y ... » — c'est-a-dire illisibles, dans le devoir
             NOTE. Les exercices du meme chapitre employaient deja `<br/>` :
             seule l'evaluation etait touchee, sur ses cinq questions. */
          statement: 'On exécute l\'algorithme suivant :<br/>$x \\leftarrow 3$<br/>$y \\leftarrow 5$<br/>$x \\leftarrow x + y$<br/>$y \\leftarrow x - y$<br/>Quelle est la valeur de $y$ à la fin ?',
          type: 'numeric',
          answer: 3,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Ligne par ligne : $x = 3$, $y = 5$. Puis $x \\leftarrow 3 + 5 = 8$. Puis $y \\leftarrow x - y$ utilise le <strong>nouveau</strong> $x$ : $y = 8 - 5 = 3$.<br/><br/>La valeur finale de $y$ est $3$ — c\'est l\'ancienne valeur de $x$.<br/><br/>Avec une troisième ligne $x \\leftarrow x - y$, on obtiendrait $x = 8 - 3 = 5$ : les deux variables auraient alors <strong>échangé</strong> leurs valeurs sans variable intermédiaire. Ici, après deux lignes seulement, $x$ vaut encore $8$.'
        },
        {
          statement: 'Quel est le rôle de cet algorithme ?<br/>$S \\leftarrow 1$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S \\times 2$',
          type: 'multiple-choice',
          options: ['Il calcule $2n$', 'Il calcule $2^n$', 'Il calcule $n!$', 'Il calcule $n^2$'],
          answer: 1,
          points: 2,
          correction: 'À chaque passage dans la boucle, $S$ est multiplié par $2$. Après $n$ passages : $S = 1 \\times 2^n = 2^n$. Par exemple pour $n = 3$ : $S = 1 \\to 2 \\to 4 \\to 8 = 2^3$.'
        },
        {
          statement: 'On exécute :<br/>$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; 5\\; \\mathtt{faire}$<br/>$\\quad \\mathtt{si}\\; i\\; \\mathtt{est\\; pair}\\; \\mathtt{alors}$<br/>$\\quad\\quad S \\leftarrow S + i$<br/>Quelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 6,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: 'Les entiers de $1$ à $5$ sont : $1, 2, 3, 4, 5$. Les pairs sont $2$ et $4$. Donc $S = 0 + 2 + 4 = 6$.'
        },
        {
          statement: 'Un algorithme contient la boucle :<br/>$c \\leftarrow 0$<br/>$n \\leftarrow 100$<br/>$\\mathtt{tant\\; que}\\; n > 1\\; \\mathtt{faire}$<br/>$\\quad n \\leftarrow n \\div 2$ (division entière)<br/>$\\quad c \\leftarrow c + 1$<br/>Quelle est la valeur finale de $c$ ?',
          type: 'multiple-choice',
          options: ['$5$', '$6$', '$7$', '$50$'],
          answer: 1,
          points: 2,
          correction: 'On divise $n$ par $2$ (division entière) successivement : $100 \\to 50 \\to 25 \\to 12 \\to 6 \\to 3 \\to 1$. On s\'arrête quand $n \\leq 1$. Le compteur $c$ a été incrémenté $6$ fois (une par passage dans la boucle).'
        },
        {
          statement: 'On exécute l\'algorithme suivant avec $n = 6$ :<br/>$S \\leftarrow 0$<br/>$\\mathtt{pour}\\; i\\; \\mathtt{de}\\; 1\\; \\mathtt{à}\\; n\\; \\mathtt{faire}$<br/>$\\quad S \\leftarrow S + i \\times i$<br/>Quelle est la valeur finale de $S$ ?',
          type: 'numeric',
          answer: 91,
          tolerance: 0,
          unit: '',
          points: 2,
          correction: '$S = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 + 6^2 = 1 + 4 + 9 + 16 + 25 + 36 = 91$. Cet algorithme calcule la somme des carrés des entiers de $1$ à $n$.'
        }
      ]
    }
  }
);
