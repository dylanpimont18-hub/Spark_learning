/* =========================================================
   Spark Learning – js/data/prof/si-2nde/si-2nde-programmation.prof.js
   Fiche professeur du chapitre « Initiation à la programmation
   (Arduino/Python) » (seconde SI), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   Conventions calées sur le CHAPITRE PILOTE du dossier,
   `si-2nde-analyse-fonctionnelle.prof.js`.

   RÉFÉRENTIEL SCIENCES DE L'INGÉNIEUR : analyser, modéliser, résoudre,
   expérimenter, concevoir, communiquer (programme de spécialité SI, 2019).
   `expérimenter` et `concevoir` ne seront jamais tirés par cet ouvrage — le
   corpus ne contient ni travail pratique ni tâche de conception. Sur ce
   chapitre-ci, l'absence de `concevoir` est la plus lourde de tout le niveau :
   le programme attend qu'un élève ÉCRIVE du code, et le livre ne peut que lui
   en faire LIRE. La `note` le dit à l'enseignant plutôt que de le masquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 3 (ce chapitre est le quatrième de l'ouvrage).

   24 énoncés tirés, dont 12 numérotés et 12 en banque supplémentaire. UN SEUL
   MOULE, répété vingt-quatre fois : un accumulateur initialisé
   (`int s = s0;`), une boucle `for` d'une seule ligne (`s = s + p;`), et la
   question « quelle est la valeur finale de s ? ». Réponse toujours
   $s_0 + k \times p$ où $k$ est le nombre d'itérations.

   MAIS — et c'est le fait déterminant, invisible sans lire les énoncés BRUTS —
   le moule alterne strictement les DEUX BORNES de boucle, et c'est exactement
   le piège que l'encadré « piège » du cours annonce :
     - exercices 1, 3, 5, 7, 9, 11  : borne STRICTE `i < N`  ($N$ itérations) ;
     - exercices 2, 4, 6, 8, 10, 12 : borne LARGE `i <= N`  ($N+1$ itérations).
   Relevé exercice par exercice sur les douze numérotés :
     Ex1  `i < 8`, s=1, +2  -> 17      Ex2  `i <= 6`, s=2, +1  -> 9
     Ex3  `i < 7`, s=3, +5  -> 38      Ex4  `i <= 4`, s=1, +5  -> 26
     Ex5  `i < 4`, s=4, +3  -> 16      Ex6  `i <= 4`, s=0, +3  -> 15
     Ex7  `i < 6`, s=0, +4  -> 24      Ex8  `i <= 4`, s=3, +5  -> 28
     Ex9  `i < 8`, s=4, +1  -> 12      Ex10 `i <= 7`, s=0, +3  -> 24
     Ex11 `i < 4`, s=5, +3  -> 17      Ex12 `i <= 2`, s=1, +3  -> 10
   ATTENTION À LA LECTURE DU SCRIPT DE MESURE : `voir-module.js` passe les
   énoncés dans un `plat()` qui retire les balises HTML, et `< 8; i++) {` y
   ressemble à une balise — la borne DISPARAÎT donc de l'affichage. Les valeurs
   ci-dessus ont été relevées sur les énoncés bruts (JSON), pas sur l'affichage
   aplati. Un auteur pressé aurait écrit des renvois faux sans le savoir.

   Conséquence heureuse : l'erreur reine du chapitre — l'oubli d'une itération
   — a un support parfait, une PAIRE d'exercices adjacents qui ne diffèrent que
   par la borne. Trois des quatre erreurs reçoivent un renvoi vers un exercice
   numéroté.

   L'ANGLE MORT DU TIRAGE. Le cours couvre variables, conditions (`if/else`),
   boucles (`for`, `while`), `setup()`/`loop()` et les fonctions
   d'entrée/sortie. Le tirage ne travaille QUE la boucle `for` à accumulateur
   additif. Ne sont touchés par AUCUN des 24 énoncés : la CONDITION `if/else`,
   la boucle `while`, la structure `setup()`/`loop()`, et les fonctions
   `digitalRead`/`digitalWrite`/`analogRead`. Le quiz couvre le produit
   (question 1), `analogRead()` (question 2) et la condition dans une boucle
   (question 3) ; l'évaluation couvre en plus `digitalRead()`. Deux des quatre
   erreurs s'appuient donc sur le quiz.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-2nde-programmation"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-2nde`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 5 chapitres, donc les numéros vont de 1 à 5.

     ch. 3 (Capteurs et actionneurs) : RETENU, et c'est le prérequis dur.
     Le chapitre parle de `analogRead(pin)` en annonçant qu'elle « retourne
     $0$ à $1023$ », et sa question 5 d'évaluation demande littéralement
     quelle valeur `analogRead()` renvoie pour $3{,}7$ V sur un CAN $10$ bits
     — c'est-à-dire, mot pour mot, le calcul de quantum du chapitre 3. Sans
     ce chapitre, le $1023$ reste un nombre magique, et l'élève apprend une
     incantation au lieu d'une mesure. Le quiz 2 d'ici refait le même calcul
     ($2{,}5$ V donne $512$) : la dépendance n'est donc pas marginale, elle
     porte deux des cinq questions notées.

     ch. 2 (Chaîne d'énergie et chaîne d'information) : RETENU également, et
     c'est le prérequis de sens plutôt que de technique. Un programme, c'est le
     bloc « Traiter » de la chaîne d'information — celui qui reçoit du bloc
     « Acquérir » et qui commande la chaîne d'énergie. Sans cette place, la
     programmation devient une matière à part, détachée du système, ce qui est
     exactement le contresens que la spécialité SI cherche à éviter : on ne
     programme pas pour programmer, on programme pour piloter.
     Le chapitre 3 déclare déjà le chapitre 2 en prérequis, donc la chaîne de
     dépendances est cohérente et sans cycle ; on le redéclare ici parce que
     l'appui est direct et non transitif (le bloc « Traiter » est nommé ici,
     pas par l'intermédiaire des capteurs).

     Candidats examinés et ÉCARTÉS :
     - ch. 1 (Analyse fonctionnelle) : appui lointain, déjà porté
       transitivement par le chapitre 2. Le redéclarer n'ajouterait aucune
       information à la colonne « S'appuie sur » et alourdirait le tableau.
       Écarté.
     - ch. 5 (Principes mécaniques de base) : aucun lien. Aucun énoncé du
       chapitre ne fait intervenir une force, un moment ni une vitesse.
       Écarté. */
  prerequis: [2, 3],

  /* Rang conseillé (2026-09-17) : rang 4, celui du livre.

     La place est imposée par les deux prérequis : après la chaîne
     d'information (ch. 2) et après le CAN (ch. 3), dont il réutilise le
     calcul. Elle correspond aussi à la progression classique de seconde SI,
     où la programmation arrive quand les élèves ont un système à piloter et
     des capteurs à lire — plutôt qu'en ouverture, où elle devient un cours
     d'informatique hors sol. Le livre le range aussi en chapitre 4 : les deux
     ordres coïncident et la colonne « Chap. » de la progression ne portera pas
     le triangle d'alerte.

     RAPPEL SUR `rangConseille`, tout ou rien par dossier : tant qu'une seule
     fiche de `si-2nde` le porte, l'ouvrage REFUSE de compiler. Les cinq
     fiches du dossier le portent donc toutes, et leurs rangs forment une
     permutation complète de 1 à 5. */
  rangConseille: 4,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 4 de seconde), qui ne
     donne que des titres de chapitres — vérifié — et le programme de
     spécialité Sciences de l'ingénieur (2019).

     Formulés en VERBES D'ACTION vérifiables, à la manière du chapitre pilote,
     et strictement bornés à ce que le chapitre traite RÉELLEMENT : lire un
     programme court, déterminer l'état d'une variable, identifier la fonction
     d'entrée/sortie adaptée. RIEN sur l'écriture d'un programme complet, sur
     le débogage sur carte, ni sur les structures de données : le corpus ne
     demande jamais de PRODUIRE du code, seulement d'en lire. Ne pas
     extrapoler vers ce que le programme officiel attend d'une séance de
     travaux pratiques — la `note` le dit explicitement. */
  attendus: [
    "Lire un programme court en langage Arduino et déterminer la valeur finale d'une variable en déroulant son exécution",
    "Compter exactement les itérations d'une boucle « for » selon que sa borne est stricte ou large",
    "Choisir la fonction d'entrée-sortie adaptée à la nature du signal : digitalRead, digitalWrite ou analogRead"
  ],

  note: "Les variables, les conditions, les boucles, la structure " +
        "<code>setup()</code>/<code>loop()</code> et les fonctions d'entrée-sortie d'une carte " +
        "Arduino : le chapitre donne au bloc « Traiter » de la chaîne d'information le langage qui " +
        "lui manquait.<br/><br/>" +
        "<strong>Ce que la colonne « S'appuie sur » affiche, et pourquoi deux prérequis.</strong> " +
        "Le <strong>chapitre 3</strong> d'abord, et c'est le prérequis dur : ce chapitre-ci annonce " +
        "que <code>analogRead()</code> « retourne $0$ à $1023$ », et sa question 5 d'évaluation " +
        "refait exactement le calcul de quantum du chapitre 3. Sans lui, le $1023$ reste un nombre " +
        "magique. Le <strong>chapitre 2</strong> ensuite, et c'est le prérequis de sens : un " +
        "programme est le bloc <strong>Traiter</strong>, celui qui reçoit d'« Acquérir » et " +
        "commande la chaîne d'énergie. Sans cette place, la programmation devient une matière à " +
        "part — exactement le contresens que la spécialité cherche à éviter.<br/><br/>" +
        "<strong>Les dépendances que la colonne ne peut pas montrer.</strong> Un prérequis ne vise " +
        "qu'un chapitre du même niveau, or l'obstacle réel est ici <strong>arithmétique et " +
        "logique</strong> plutôt qu'informatique. D'une part le " +
        "<strong>dénombrement d'un intervalle d'entiers</strong> — « combien d'entiers de $0$ à " +
        "$7$ ? » — qui est la source de la moitié des erreurs du chapitre et qu'aucun cours de " +
        "seconde ne traite explicitement. D'autre part la <strong>suite arithmétique</strong> : la " +
        "réponse de tout exercice du chapitre vaut $s_0 + k \\times p$, et un élève qui ne voit pas " +
        "cette structure déroule douze lignes là où trois suffisent.<br/><br/>" +
        "<strong>Le piège du chapitre est dans le tirage, et c'est une bonne nouvelle.</strong> Les " +
        "douze exercices numérotés <strong>alternent strictement les deux bornes</strong> : les " +
        "impairs portent une borne stricte (<code>i &lt; N</code>, donc $N$ tours), les pairs une " +
        "borne large (<code>i &lt;= N</code>, donc $N+1$ tours). Deux exercices voisins ne " +
        "diffèrent donc que par le signe de comparaison, ce qui permet de construire la " +
        "confrontation qui installe la règle — voir l'erreur 1 ci-dessous.<br/><br/>" +
        "<strong>L'angle mort du livre, à connaître avant de composer un devoir.</strong> Les " +
        "24 énoncés tirés reposent <strong>tous</strong> sur le même moule : une boucle " +
        "<code>for</code> à accumulateur additif. Quatre notions du cours ne sont travaillées par " +
        "<strong>aucun exercice</strong> : la <strong>condition <code>if/else</code></strong>, la " +
        "<strong>boucle <code>while</code></strong>, la structure " +
        "<strong><code>setup()</code>/<code>loop()</code></strong>, et les " +
        "<strong>fonctions d'entrée-sortie</strong>. Le quiz rattrape la condition (question 3) et " +
        "<code>analogRead()</code> (question 2) ; l'évaluation ajoute " +
        "<code>digitalRead()</code>.<br/><br/>" +
        "<strong>Enfin, la limite la plus importante.</strong> Le livre fait " +
        "<strong>lire</strong> du code ; le programme officiel attend qu'on en " +
        "<strong>écrive</strong>. Aucun énoncé ne demande de produire un programme, de le " +
        "téléverser ni de le déboguer — les compétences <em>concevoir</em> et " +
        "<em>expérimenter</em> restent vides dans la grille, et c'est un constat, pas un oubli. " +
        "Une séance sur carte reste indispensable, et les exercices du livre en sont le préalable " +
        "de lecture, pas le substitut.",

  /* Les quatre erreurs fréquentes. TROIS reçoivent un renvoi vers un exercice
     numéroté — chiffre inhabituellement élevé pour ce niveau, et il est dû
     entièrement à l'alternation `<` / `<=` documentée en en-tête. La quatrième
     renvoie au quiz, seul support à traiter la multiplication et la condition.

     Les erreurs sont propres à la culture du chapitre : bornes de boucle,
     accumulateur, ordre d'exécution, portée du corps de boucle. Aucune n'est
     une erreur de calcul plaquée d'un autre domaine. */
  erreurs: [
    {
      titre: "Compter une itération de trop ou de moins : la confusion entre <code>&lt;</code> et <code>&lt;=</code>",
      eleve: "Sur <code>for (int i = 0; i &lt; 8; i++)</code>, l'élève compte $7$ tours (« $i$ va " +
             "jusqu'à $7$, donc sept ») et trouve $15$ au lieu de $17$. Ou, sur " +
             "<code>for (int i = 0; i &lt;= 6; i++)</code>, il compte $6$ tours et trouve $8$ au " +
             "lieu de $9$.",
      cause: "Deux difficultés se superposent, et c'est ce qui rend l'erreur si tenace. D'abord la " +
             "boucle commence à $0$ et non à $1$, alors que compter depuis $1$ est le réflexe de " +
             "toute la scolarité antérieure. Ensuite le dénombrement d'un intervalle d'entiers " +
             "— « combien d'entiers de $0$ à $7$ ? » — n'est enseigné explicitement dans aucun " +
             "cours de seconde : l'élève l'improvise. Ce n'est donc ni de l'étourderie ni un " +
             "problème de programmation, mais une lacune d'arithmétique que le code met à nu.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17, graine 20260816 + 3),
         relevé sur les énoncés BRUTS parce que `plat()` mange les bornes.
         Exercice 2 : `int s = 2; for (int i = 0; i <= 6; i++) { s = s + 1; }`,
         réponse 9. Le corrigé écrit « i <= 6 -> i prend les valeurs 0, 1, 2,
         ..., 6 », puis « Nombre d'itérations : 7 (car i va de 0 à 6) ».
         POURQUOI CELUI-LÀ, ET C'EST UN CHOIX FORT. Son pas vaut +1, donc
         LA RÉPONSE COMPTE LITTÉRALEMENT LES TOURS : s passe de 2 à 9, et
         9 - 2 = 7 est le nombre d'itérations lui-même. Une erreur d'une
         itération se lit donc directement sur le résultat, sans division ni
         raisonnement intermédiaire — l'élève qui répond 8 a compté 6 tours, et
         il le voit.
         Et surtout il porte la borne LARGE (`<=`), la plus piégeuse des deux :
         celle où il faut ajouter 1 au nombre écrit.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 9 (`i < 8`, s=4, +1,
         réponse 12) est l'AUTRE exercice à pas unitaire, avec la borne
         STRICTE. Les deux forment la PAIRE de confrontation idéale, et le
         remède les utilise ensemble : même pas, bornes opposées, nombres
         voisins (8 et 6). L'exercice 1 (`i < 8`, s=1, +2, réponse 17) et
         l'exercice 11 (`i < 4`, s=5, +3, réponse 17) seraient de moins bons
         premiers supports : leur pas n'est pas unitaire, donc une itération
         manquante décale la réponse de 2 ou de 3 et l'élève ne peut pas lire
         le nombre de tours sur le résultat. Pire encore, ces deux exercices
         donnent la MÊME réponse 17 par des chemins différents : les enchaîner
         sèmerait la confusion. */
      exercice: { type: "exercice", n: 2 },
      remede: "Le livre offre pour cette erreur un support que peu de chapitres ont : les exercices " +
              "2 et 9 ont <strong>le même pas</strong> (<code>s = s + 1</code>) et " +
              "<strong>des bornes opposées</strong>. Faites-les <strong>l'un après l'autre, au " +
              "tableau, côte à côte</strong>.<br/><br/>" +
              "Sur l'exercice 2 (<code>i &lt;= 6</code>, $s$ part de $2$), la réponse est $9$ : " +
              "l'écart $9 - 2 = 7$ <strong>est</strong> le nombre de tours, et il vaut $6 + 1$. " +
              "Sur l'exercice 9 (<code>i &lt; 8</code>, $s$ part de $4$), la réponse est $12$ : " +
              "l'écart vaut $8$, soit exactement le nombre écrit. Le pas unitaire fait que le " +
              "résultat <strong>compte les tours</strong>, donc l'élève lit la règle au lieu de " +
              "l'entendre.<br/><br/>" +
              "La règle à écrire en rouge dans le cahier, en deux lignes seulement : " +
              "<strong><code>i &lt; N</code> depuis $0$ fait exactement $N$ tours</strong> — c'est " +
              "l'écriture la plus courante, et la plus confortable. " +
              "<strong><code>i &lt;= N</code> depuis $0$ fait $N+1$ tours</strong> — il faut " +
              "ajouter un. C'est le seul point à retenir de tout le chapitre sur ce " +
              "sujet.<br/><br/>" +
              "Et le geste de vérification qui fonctionne toujours, pour les élèves que la règle " +
              "n'a pas convaincus : <strong>écrire la liste des valeurs de <code>i</code></strong>, " +
              "puis la compter du doigt. $0, 1, 2, 3, 4, 5, 6$ : sept nombres. C'est lent, c'est " +
              "juste, et cela devient rapide en trois exercices. Interdisez seulement d'écrire " +
              "« sept » sans avoir écrit la liste, tant que l'automatisme n'est pas là."
    },
    {
      titre: "Oublier la valeur initiale de l'accumulateur",
      eleve: "Sur <code>int s = 3; for (int i = 0; i &lt; 7; i++) { s = s + 5; }</code>, l'élève " +
             "annonce $35$ — le total des ajouts — au lieu de $38$. Ou, sur le même moule avec " +
             "<code>int s = 5;</code> et quatre tours de $+3$, il annonce $12$ au lieu de $17$.",
      cause: "L'attention de l'élève est tout entière absorbée par la boucle, qui est la partie " +
             "difficile et nouvelle. La ligne d'initialisation, elle, est courte, arrive avant, et " +
             "paraît n'être qu'une formalité de déclaration — d'autant que le mot-clé " +
             "<code>int</code> la fait ressembler à une annonce de type plutôt qu'à une " +
             "affectation de valeur. L'élève ne l'a pas négligée : il ne l'a pas lue comme une " +
             "donnée du problème.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17), sur les énoncés
         bruts.
         Exercice 3 : `int s = 3; for (int i = 0; i < 7; i++) { s = s + 5; }`,
         réponse 38. Le corrigé écrit la formule en séparant les deux termes :
         « s = 3 + 7 x 5 = 3 + 35 = 38 ».
         POURQUOI CELUI-LÀ. C'est le tirage où l'oubli de la valeur initiale
         produit un nombre PARTICULIÈREMENT crédible : 35 est un multiple rond
         de 5 et de 7, il « a l'air » d'un résultat de boucle, et rien ne
         signale qu'il est faux. L'élève ne peut donc pas s'autocorriger, ce
         qui est exactement la situation où le renvoi sert.
         Et le corrigé du livre écrit le calcul en DEUX TERMES VISIBLES
         (3 + 35 = 38), donc le geste de remédiation se lit directement dans
         la correction imprimée — l'enseignant n'a rien à reconstruire.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 11 (s = 5, quatre tours
         de +3, réponse 17) est le même défaut et fait un bon second support,
         avec l'avantage que sa valeur initiale (5) est plus grosse que
         d'ordinaire, donc l'oubli coûte cher. Les exercices 6, 7 et 10
         seraient les PIRES choix pour cette erreur : leur valeur initiale
         vaut ZÉRO (`int s = 0;`), donc l'oubli est SANS CONSÉQUENCE et
         l'élève y verrait sa méthode fausse confirmée. C'est le piège à
         éviter absolument dans ce chapitre : un tiers des exercices
         numérotés partent de zéro. */
      exercice: { type: "exercice", n: 3 },
      remede: "Imposez la <strong>formule en deux termes</strong>, que le corrigé de l'exercice 3 " +
              "écrit déjà tel quel : <strong>valeur finale $=$ valeur de départ $+$ (nombre de " +
              "tours $\\times$ pas)</strong>. Sur l'exercice 3 : $3 + 7 \\times 5 = 3 + 35 = 38$. " +
              "Exiger les deux termes écrits séparément, jamais le résultat seul, rend l'oubli " +
              "impossible à cacher.<br/><br/>" +
              "Faites lire la ligne d'initialisation <strong>à voix haute comme une action</strong>, " +
              "pas comme une déclaration : « <code>int s = 3;</code> se lit : <em>je crée une " +
              "boîte appelée <code>s</code> et je mets $3$ dedans</em> ». La boucle ne remplit pas " +
              "une boîte vide, elle <strong>ajoute dans une boîte qui contient déjà quelque " +
              "chose</strong>.<br/><br/>" +
              "<strong>Point de vigilance à l'usage, qui vaut la peine d'être connu avant de " +
              "choisir un exercice.</strong> Un tiers des exercices numérotés de ce chapitre " +
              "partent de <code>int s = 0;</code> — les exercices 6, 7 et 10. Sur ceux-là, l'oubli " +
              "de la valeur initiale <strong>ne change rien au résultat</strong> : un élève qui a " +
              "cette erreur y trouve la bonne réponse et se croit corrigé. Choisissez donc " +
              "délibérément un exercice à départ non nul pour diagnostiquer, l'exercice 3 ou " +
              "l'exercice 11 ($s$ part de $5$), et gardez ceux qui partent de zéro pour plus " +
              "tard."
    },
    {
      titre: "Croire que le compteur de boucle intervient dans le calcul",
      eleve: "Sur <code>int s = 0; for (int i = 0; i &lt; 6; i++) { s = s + 4; }</code>, l'élève " +
             "annonce $0 + 1 + 2 + 3 + 4 + 5 = 15$, ou bien $4 + 4 \\times 5 = 24$ « parce que $i$ " +
             "augmente aussi ». Ou il multiplie par $i$ à chaque tour.",
      cause: "Le compteur <code>i</code> est l'objet le plus visible de la boucle : il apparaît " +
             "trois fois sur la ligne d'en-tête, il change à chaque tour, et l'élève suppose " +
             "légitimement que ce qui bouge le plus est ce qui compte. Or dans ce moule, " +
             "<code>i</code> ne sert QU'À COMPTER LES TOURS et n'apparaît jamais dans le corps de " +
             "la boucle. La confusion est d'autant plus compréhensible que dans d'autres " +
             "programmes — la question 1 de l'évaluation, par exemple, où l'on écrit " +
             "<code>s = s + i</code> — le compteur intervient bel et bien.",
      /* RENVOI VÉRIFIÉ contre le tirage réel (2026-09-17), sur les énoncés
         bruts.
         Exercice 7 : `int s = 0; for (int i = 0; i < 6; i++) { s = s + 4; }`,
         réponse 24.
         POURQUOI CELUI-LÀ, et le raisonnement est fin. Son pas (+4) et sa
         borne (6) sont choisis de sorte que les DEUX erreurs concurrentes
         donnent des réponses DISTINCTES et toutes deux fausses : sommer les
         valeurs de i donne 0+1+2+3+4+5 = 15, et le bon calcul donne
         6 x 4 = 24. Quinze et vingt-quatre ne se confondent pas, donc la
         correction diagnostique immédiatement laquelle des deux méthodes
         l'élève a suivie.
         Par ailleurs sa valeur initiale est NULLE (s = 0), ce qui est ici un
         AVANTAGE et non un défaut : l'erreur sur l'accumulateur (erreur 2
         ci-dessus) est neutralisée, donc l'exercice isole proprement la
         confusion sur i, sans qu'une seconde faute vienne brouiller le
         diagnostic. C'est précisément pour cette raison qu'il a été écarté de
         l'erreur 2 et retenu ici.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 10 (`i <= 7`, s = 0, +3,
         réponse 24) est aussi à départ nul, mais sa réponse (24) coïncide avec
         celle de l'exercice 7 tout en venant d'un calcul différent — les
         enchaîner brouillerait le tableau. L'exercice 6 (`i <= 4`, s = 0, +3,
         réponse 15) serait le PIRE choix possible : la somme des valeurs de i
         (0+1+2+3+4) y vaut 10 mais sa bonne réponse vaut 15, or 15 est
         justement le nombre qu'on obtient en sommant les i de l'exercice 7 —
         un télescopage de nombres qui ferait douter l'enseignant lui-même. */
      exercice: { type: "exercice", n: 7 },
      remede: "Faites d'abord le <strong>tableau de déroulement à trois colonnes</strong> sur " +
              "l'exercice 7, parce qu'il montre le fait au lieu de l'affirmer : une colonne " +
              "<code>i</code>, une colonne « ce qu'on ajoute », une colonne <code>s</code>. La " +
              "colonne du milieu affiche $4$, $4$, $4$, $4$, $4$, $4$ — <strong>toujours la même " +
              "valeur</strong>, alors que <code>i</code> défile de $0$ à $5$. L'élève voit que la " +
              "colonne qui bouge n'est pas celle qui compte.<br/><br/>" +
              "Puis nommez le rôle de <code>i</code> d'une phrase, et il faut qu'elle soit " +
              "exacte : <strong><code>i</code> compte les tours ; il ne fait partie du calcul que " +
              "s'il est écrit DANS le corps de la boucle</strong>. Ici le corps est " +
              "<code>s = s + 4</code> : pas de <code>i</code>, donc pas de <code>i</code> dans le " +
              "résultat.<br/><br/>" +
              "Confrontez enfin les deux réponses concurrentes sur ce même exercice 7 : sommer les " +
              "valeurs de <code>i</code> donne $0+1+2+3+4+5 = 15$, le bon calcul donne " +
              "$6 \\times 4 = 24$. Deux nombres nettement différents, donc le désaccord ne peut " +
              "pas passer pour un arrondi.<br/><br/>" +
              "Et pour montrer que la règle n'est pas arbitraire, donnez le contre-exemple qui la " +
              "complète — c'est le geste qui empêche la surgénéralisation inverse : " +
              "<code>s = s + i</code> <strong>utilise</strong> le compteur, et la somme " +
              "$0+1+2+\\ldots$ devient alors la bonne réponse. La question 1 de l'évaluation est " +
              "bâtie sur ce cas ; ne la donnez pas maintenant, mais sachez qu'elle attend l'élève."
    },
    {
      titre: "Traiter une multiplication répétée comme une addition répétée",
      eleve: "Sur <code>int x = 2; for (int i = 0; i &lt; 5; i++) { x = x * 2; }</code>, l'élève " +
             "annonce $20$ (« $2 \\times 2 \\times 5$ ») ou $12$ (« $2 + 2 \\times 5$ »), ou encore " +
             "$32$ (« $2^5$ »). La bonne réponse est $64$.",
      cause: "Les douze exercices du chapitre sont TOUS additifs, donc l'élève a installé un " +
             "automatisme — « départ plus nombre de tours fois le pas » — qui est correct partout " +
             "où il l'a pratiqué. Devant une multiplication, il applique la même forme de calcul " +
             "avec un autre signe. C'est une surgénéralisation d'une règle vraie, pas une " +
             "méconnaissance : le corpus l'a entraîné à ce réflexe sans jamais lui montrer sa " +
             "limite.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les 24 énoncés tirés sont TOUS à accumulateur ADDITIF
         (`s = s + p;`) : pas un seul `x = x * p`. Aucun exercice ne peut donc
         mettre cette surgénéralisation en défaut, et renvoyer vers l'un d'eux
         serait un renvoi faux — pire, cela renforcerait l'automatisme
         additif qui EST la cause de l'erreur.
         Le QUIZ, lui, la traite de front, et c'est sa question 1 :
         « int x = 2; for (int i = 0; i < 5; i++) { x = x * 2; } », avec les
         quatre options 20 / 64 / 32 / 12. Les trois distractions sont
         EXACTEMENT les trois erreurs décrites ci-dessus, chacune assortie de
         son calcul fautif (« 20 car 2 x 2 x 5 », « 32 car x = 2^5 », « 12 car
         x = 2 + 2 x 5 ») : le quiz a été écrit contre cette erreur. Sa
         correction déroule en outre la suite complète
         (2 -> 4 -> 8 -> 16 -> 32 -> 64) et prend soin d'expliquer pourquoi la
         réponse n'est pas 2^5 — la valeur de départ étant déjà 2.
         C'est le seul renvoi honnête du livre pour cette erreur. La question 4
         de l'évaluation porte sur le même moule (p = 1, quatre
         multiplications par 3, réponse 81) mais on ne renvoie jamais vers
         l'évaluation notée. */
      exercice: { type: "quiz", n: 1 },
      remede: "Aucun des 24 exercices du chapitre n'est multiplicatif : ils sont tous additifs, ce " +
              "qui explique l'erreur et interdit d'y remédier par un exercice. Passez donc par le " +
              "<strong>quiz 1</strong>, écrit exactement contre elle : ses trois mauvaises options " +
              "($20$, $32$, $12$) sont les trois calculs fautifs, chacune avec sa " +
              "justification.<br/><br/>" +
              "Le geste qui tranche, et il vaut pour les deux familles : <strong>dérouler trois " +
              "tours à la main avant d'appliquer une formule</strong>. Sur " +
              "<code>x = x * 2</code> depuis $2$ : $2 \\to 4 \\to 8$. Le saut de $4$ à $8$ " +
              "n'est pas le même que celui de $2$ à $4$, alors qu'une addition répétée avancerait " +
              "toujours du même pas. L'élève voit la différence de nature en trois " +
              "lignes.<br/><br/>" +
              "Puis donnez les <strong>deux formes</strong> côte à côte, parce que c'est leur " +
              "opposition qui les fixe : une addition répétée donne " +
              "<strong>$s_0 + k \\times p$</strong> ; une multiplication répétée donne " +
              "<strong>$x_0 \\times p^k$</strong>. Le nombre de tours est <em>facteur</em> dans un " +
              "cas, <em>exposant</em> dans l'autre.<br/><br/>" +
              "Attirez enfin l'attention sur la subtilité que la correction du quiz souligne " +
              "elle-même, et qui piège aussi les bons élèves : la réponse n'est pas $2^5 = 32$ " +
              "mais $2 \\times 2^5 = 64$, <strong>parce que la valeur de départ vaut déjà $2$</strong>. " +
              "C'est la même vigilance que pour l'erreur sur l'accumulateur — la valeur initiale " +
              "compte toujours."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ avec `voir-module.js`, pas supposé : `validerProf` refuse
     toute autre longueur. (Le chapitre 2 du même dossier n'en a que quatre.)

     Référentiel SI (2019). ÉTIQUETAGE HONNÊTE (règle du projet) : la
     compétence est lue sur la tâche RÉELLEMENT demandée par l'énoncé, jamais
     choisie pour équilibrer la grille.

     Q1 (`int s = 0; for (int i = 1; i <= 10; i++) { s = s + i; }` : $55$)
        → analyser : et l'étiquette mérite un mot, car la question paraît être
        un calcul. Le vrai travail est de REMARQUER que le corps de boucle
        utilise `i`, contrairement aux douze exercices du chapitre où il ne
        l'utilise jamais. L'élève doit lire la structure du programme avant
        de calculer quoi que ce soit — identifier ce qui varie et ce qui ne
        varie pas. C'est l'erreur 3 ci-dessus, retournée en question notée.
     Q2 (`int x = 100; for (int i = 0; i < 5; i++) { x = x - 7; }` : $65$)
        → résoudre : exactement le moule des exercices, au signe près.
        Procédure connue, appliquée sur des nombres donnés.
     Q3 (quelle fonction lit un bouton-poussoir sur la broche 2 :
        `digitalRead(2)`) → analyser : identifier le constituant adapté à la
        nature du signal. Restitution appliquée, sans calcul.
     Q4 (`int p = 1; for (int i = 0; i < 4; i++) { p = p * 3; }` : $81$)
        → modéliser : le moule multiplicatif n'apparaît dans AUCUN exercice du
        chapitre (voir l'erreur 4). L'élève ne peut pas exécuter une procédure
        apprise : il doit reconnaître que la répétition d'un produit donne une
        puissance, c'est-à-dire changer de modèle de calcul. C'est le seul
        vrai pas de traduction du chapitre.
     Q5 (`analogRead(A0)` pour $3{,}7$ V, CAN $10$ bits : $758$) → résoudre :
        application de la formule du quantum, héritée du chapitre 3, suivie
        d'une troncature. Les deux étapes sont données par le cours.

     RÉPARTITION DE CE CHAPITRE : résoudre 2, analyser 2, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont PAS mobilisés. Le cas
     de `concevoir` mérite d'être souligné plutôt que masqué : c'est LE
     chapitre où le programme officiel en attendrait — écrire un programme, le
     téléverser, le corriger — et les cinq questions notées ne demandent que
     de LIRE du code. Constat, pas oubli. */
  competences: {
    evaluation: ['analyser', 'résoudre', 'analyser', 'modéliser', 'résoudre']
  }
};
