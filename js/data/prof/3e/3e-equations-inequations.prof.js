/* =========================================================
   Spark Learning – js/data/prof/3e/3e-equations-inequations.prof.js
   Fiche professeur du chapitre « Équations et inéquations » (troisième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote du niveau
   (3e-thales.prof.js) : mêmes conventions, même niveau de détail, mêmes deux
   règles éditoriales.

   CE QUE LA TROISIÈME CHANGE. C'est l'année du brevet, et la démonstration y
   devient un attendu et non un ornement. Dans ce chapitre, la rédaction porte
   sur deux gestes que les élèves omettent en premier : nommer l'inconnue avant
   de poser l'équation, et exprimer une réponse dans les termes du problème et
   non dans ceux de l'algèbre. L'erreur 4 de cette fiche porte exactement
   là-dessus.

   CHAPITRE CHARNIÈRE VERS LA SECONDE. Les attendus ci-dessous sont écrits pour
   être lus par qui préparera le niveau seconde : ils nomment explicitement ce
   que l'élève doit maîtriser EN SORTIE de troisième, puisque tout le lycée
   repose dessus.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève, vouvoiement neutre de
   l'enseignant dans les fiches.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-equations-inequations"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 5 (identités remarquables) : la première étape de la méthode du
     chapitre est « développer et réduire les deux membres », et les membres
     qu'on développe au brevet contiennent presque toujours un carré ou un
     produit somme-différence. Surtout, les identités sont ce qui permet de
     passer d'une équation qu'on ne sait pas résoudre à un produit qu'on sait
     annuler : sans factorisation, l'équation-produit n'existe pas.

     L'arithmétique (ch. 4) n'est PAS un prérequis, contrairement à ce qu'on
     pourrait croire en voyant apparaître des fractions dans les solutions.
     Simplifier $\dfrac{17}{5}$ ne demande pas le PGCD : cela demande de savoir
     qu'une fraction est un nombre, ce qui est acquis depuis la cinquième. Le
     dire évite une révision inutile. */
  prerequis: [5],

  /* Rang conseillé (2026-09-13) : rang 3, après l'arithmétique et les
     identités remarquables.

     Il vient APRÈS les identités parce qu'il s'en sert : dès qu'une équation
     n'est plus du premier degré, la seule sortie au collège est la
     factorisation, et un élève qui ne sait pas factoriser $x^2 - 9$ ne peut
     pas résoudre $x^2 = 9$ autrement qu'en devinant.

     Il vient AVANT tout le reste de l'année parce que tout le reste s'en sert.
     Thalès se ramène à une équation (c'est d'ailleurs le prérequis déclaré du
     chapitre 8), la trigonométrie aussi, les fonctions affines demandent de
     résoudre $f(x) = k$, et les systèmes du chapitre suivant ne sont que deux
     équations menées de front. Placer ce chapitre tard, c'est condamner tous
     les suivants à s'arrêter sur une difficulté qui n'est pas la leur.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 3,

  /* Attendus de fin d'année de troisième (programme du cycle 4, 2020),
     domaine « Nombres et calculs », partie « Calcul littéral et équations ».

     CES LIGNES SONT ÉCRITES POUR ÊTRE LUES PAR LA SECONDE : elles nomment ce
     que l'élève doit maîtriser en sortie, puisque le lycée entier — fonctions,
     dérivation, systèmes, inéquations produit — suppose ces gestes
     automatisés. */
  attendus: [
    "Résoudre algébriquement une équation du premier degré à une inconnue, y compris avec des parenthèses ou une fraction",
    "Résoudre une inéquation du premier degré à une inconnue, et exprimer l'ensemble des solutions sur une droite graduée puis sous forme d'intervalle",
    "Savoir que multiplier ou diviser les deux membres d'une inégalité par un nombre négatif en change le sens, et l'appliquer sans hésitation",
    "Mettre un problème concret en équation en choisissant et en nommant explicitement l'inconnue, puis interpréter la solution dans le contexte de l'énoncé",
    "Rédiger une résolution complète : équation de départ, étapes justifiées, vérification, phrase de conclusion répondant à la question posée"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Sont pleinement au programme de troisième : les <strong>équations du premier degré</strong> " +
        "à une inconnue, les <strong>inéquations du premier degré</strong>, la représentation de " +
        "l'ensemble des solutions sur une droite graduée, et la mise en équation d'un problème. " +
        "C'est le cœur du chapitre, et l'un des exercices les plus régulièrement posés au " +
        "brevet.<br/><br/>" +
        "Un point mérite d'être nuancé : la <strong>notation par intervalles</strong>, " +
        "$]7\\,;\\,+\\infty[$, très présente dans le cours et dans le schéma. Le programme du cycle 4 " +
        "demande de décrire l'ensemble des solutions — par une phrase, par une inégalité, ou sur une " +
        "droite graduée — mais il n'exige pas le formalisme des crochets, qui est introduit en " +
        "seconde. Il est utile de le présenter, car il prépare le lycée et il est plus court " +
        "qu'une phrase ; ne le rendez pas obligatoire dans une évaluation, et acceptez toujours " +
        "« $x > 7$ » comme réponse complète.<br/><br/>" +
        "Deux contenus sont en revanche franchement hors année et ne doivent pas être introduits " +
        "ici : les <strong>équations du second degré</strong> avec discriminant, et les " +
        "<strong>systèmes d'inéquations</strong>. Si un élève arrive sur $x^2 = 25$, le chemin de " +
        "troisième passe par la factorisation $(x-5)(x+5) = 0$, vue au chapitre des identités " +
        "remarquables, et par la règle du produit nul — pas par une formule.<br/><br/>" +
        "Enfin, la mention de la <strong>physique</strong> dans l'introduction du cours (équations " +
        "horaires, seuils de tension) est une ouverture interdisciplinaire bienvenue, mais les " +
        "conditions de validité d'un modèle ne relèvent pas de l'évaluation de mathématiques.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre.

     UNE DIFFICULTÉ PROPRE À CE CHAPITRE, à connaître avant de lire la suite :
     le générateur d'exercices ne produit qu'UNE SEULE tâche, « résoudre
     $ax + b = c$ » avec $a$, $b$ et $c$ tous positifs, habillée de six décors
     différents. Vérifié sur douze tirages consécutifs (2026-09-13) : douze
     énoncés, une seule tâche, et AUCUNE inéquation. Or trois des cinq erreurs
     ci-dessous sont des erreurs d'inéquation ou de rédaction. Deux
     remédiations sont donc délibérément sans renvoi, et le disent. */
  erreurs: [
    {
      titre: "Ne pas inverser le sens en divisant par un nombre négatif",
      eleve: "L'élève écrit $-3x > 12$, donc $x > -4$. Ou, sur l'inéquation du cours : " +
             "$-4x + 8 \\leq 0$, donc $-4x \\leq -8$, donc $x \\leq 2$ — alors que la solution est " +
             "$x \\geq 2$.",
      cause: "Toutes les manipulations apprises jusque-là conservent la forme : ce qu'on fait à " +
             "gauche, on le fait à droite, et le symbole du milieu ne bouge pas. La règle " +
             "d'inversion est la première exception de toute la scolarité à ce principe, et une " +
             "exception ne s'installe pas par décret. L'élève ne l'oublie pas par distraction : il " +
             "applique fidèlement une règle plus ancienne et plus solide.",
      remede: "Ne pas énoncer la règle en premier : la faire découvrir sur des nombres, où elle est " +
              "indiscutable. Écrire $2 < 5$ au tableau, puis multiplier les deux membres par $-1$ : " +
              "$-2$ et $-5$. Et demander lequel est le plus grand. La classe répond " +
              "$-2 > -5$ sans difficulté, et vient de constater que l'inégalité s'est retournée " +
              "toute seule. La règle n'est plus une consigne, c'est un fait qu'on a vu.<br/><br/>" +
              "Donner ensuite l'image qui la rend mémorable : multiplier par un nombre négatif, " +
              "c'est <strong>retourner la droite graduée</strong>. Ce qui était à droite passe à " +
              "gauche, donc le plus grand devient le plus petit. Faire tracer physiquement la droite " +
              "et la faire pivoter d'un demi-tour ancre l'idée mieux qu'une formule.<br/><br/>" +
              "Proposer enfin la stratégie d'évitement, qui est parfaitement légitime et que " +
              "beaucoup d'élèves adoptent avec soulagement : <strong>ranger les $x$ du côté où leur " +
              "coefficient est positif</strong>. De $-4x + 8 \\leq 0$, on passe à $8 \\leq 4x$, puis " +
              "à $2 \\leq x$, donc $x \\geq 2$. Aucune inversion n'a été nécessaire, parce qu'on n'a " +
              "jamais divisé par un négatif. La règle reste à connaître — le brevet peut la tester — " +
              "mais elle n'a plus à être appliquée sous pression.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur : les douze tirages du " +
              "générateur sont des ÉQUATIONS à coefficients positifs, où la question ne se pose " +
              "jamais. L'entraînement utile est du côté du quiz, dont deux questions sur trois " +
              "portent précisément sur l'inversion du sens, et d'une série d'inéquations courtes à " +
              "résoudre en classe, la moitié à coefficient négatif.",
      /* Volontairement SANS renvoi, et c'est le constat le plus gênant de ce
         chapitre. Un renvoi faux est pire qu'un renvoi absent : les douze
         tirages du générateur sont tous du type $ax + b = c$ avec a, b, c > 0
         (vérifié le 2026-09-13), donc aucune inéquation, aucun coefficient
         négatif. Pointer l'un d'eux pour l'erreur la plus fréquente du
         chapitre enverrait l'enseignant vers une remédiation qui n'en est pas
         une. Les seuls supports du livre portant sur l'inversion sont deux
         questions du quiz et la question 2 de l'ÉVALUATION, qu'une
         remédiation ne peut pas viser. Le remède dit donc explicitement où
         chercher l'entraînement utile. */
      exercice: null
    },
    {
      titre: "Changer de membre sans changer de signe",
      eleve: "De $5x - 3 = 2x + 9$, l'élève écrit $5x - 2x = 9 - 3$, soit $3x = 6$ et $x = 2$ — au " +
             "lieu de $5x - 2x = 9 + 3$, donc $3x = 12$ et $x = 4$.",
      cause: "La formule « ça passe de l'autre côté, ça change de signe » est un raccourci verbal " +
             "qu'on retient sans son mode d'emploi : l'élève l'applique au terme qu'il déplace " +
             "volontairement — le $2x$ — et l'oublie pour celui qu'il déplace par nécessité — le " +
             "$-3$. Il n'y a pas de logique fautive derrière, il y a une recette appliquée à moitié, " +
             "et rien dans la mise en page d'une ligne d'équation ne signale l'omission.",
      remede: "Remplacer la recette par ce qu'elle abrège : <strong>on ajoute la même chose aux deux " +
              "membres</strong>. Faire écrire l'opération explicitement dans la marge, au moins " +
              "pendant deux semaines : « $+3$ des deux côtés », « $-2x$ des deux côtés ». C'est plus " +
              "long, et c'est exactement pour cela que ça marche — le raccourci revient tout seul " +
              "ensuite, mais adossé à quelque chose.<br/><br/>" +
              "L'image de la <strong>balance</strong> du cours sert ici, à condition de la manipuler " +
              "et pas seulement de la montrer : ce qu'on retire d'un plateau, on le retire de " +
              "l'autre, sinon la balance penche. Un élève qui pense « balance » ne peut pas " +
              "déplacer un seul terme.<br/><br/>" +
              "Et surtout, installer la <strong>vérification systématique</strong>, qui est l'étape " +
              "4 de la méthode du cours et qui détecte cette erreur à tous les coups. Avec $x = 2$ : " +
              "$5 \\times 2 - 3 = 7$ d'un côté, $2 \\times 2 + 9 = 13$ de l'autre. Les deux membres " +
              "diffèrent, donc la solution est à reprendre — et l'élève le sait avant de rendre sa " +
              "copie, ce qui change tout. Faire de cette vérification une ligne obligatoire, notée " +
              "comme telle, est le geste le plus rentable du chapitre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 est « un loueur de vélos demande une caution de 7 €, puis
         facture 5 € par heure ; la facture s'élève à 24 € ; on pose
         $5x + 7 = 24$ ». Sa solution imprimée tient en deux lignes dont la
         première est exactement le geste en cause : « $5x = 24 - 7 = 17$ ».
         Le terme constant y est déplacé, avec son changement de signe visible
         et isolé — l'élève n'a aucune autre difficulté à gérer en même temps.
         Les douze tirages ont tous cette structure ; on renvoie au 4 parce
         que ses valeurs (17 divisé par 5) obligent en plus à assumer une
         réponse décimale, ce qui ferme la porte à une réponse devinée. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Traiter une inéquation comme une équation et rendre un seul nombre",
      eleve: "Pour « à partir de combien de films la formule B est-elle plus avantageuse ? », l'élève " +
             "résout $20 + 3n = 8n$, trouve $n = 4$ et répond « $4$ films » — alors que pour $4$ " +
             "films les deux formules coûtent exactement pareil, et que la bonne réponse est $5$.",
      cause: "Deux causes se superposent, et il faut les distinguer pour y répondre. La première est " +
             "une habitude : depuis la cinquième, résoudre veut dire trouver LE nombre, et l'idée " +
             "qu'une réponse puisse être un ensemble entier de valeurs est neuve. La seconde est " +
             "plus subtile : l'égalité donne le point de bascule, ce qui est une démarche correcte " +
             "et même élégante ; ce qui manque, c'est l'étape d'après, celle où l'on décide de quel " +
             "côté de la bascule se trouve la réponse, et si le point lui-même en fait partie.",
      remede: "Valoriser la démarche avant de corriger le résultat : chercher le point d'égalité est " +
              "une bonne idée, elle est même celle qu'on utilisera au lycée. Ce qui manque est une " +
              "seule ligne — <strong>de quel côté, et la borne est-elle incluse ?</strong> — et elle " +
              "s'obtient en testant une valeur de chaque côté.<br/><br/>" +
              "Rendre ce test obligatoire et rapide : pour $n = 4$, la formule A coûte $32$ € et la " +
              "B coûte $32$ € — égalité, donc $4$ ne convient pas si l'on demande « plus " +
              "avantageuse ». Pour $n = 5$ : A coûte $40$ € et B coûte $35$ €. La réponse est $5$, " +
              "et l'élève l'a établie sans aucune théorie des intervalles.<br/><br/>" +
              "Appuyer sur le vocabulaire de l'énoncé, qui est ce que le brevet teste vraiment : " +
              "« strictement plus avantageuse » exclut la borne, « au moins aussi avantageuse » " +
              "l'inclut. Faire surligner ces mots AVANT de calculer est un geste de classe de dix " +
              "secondes qui évite la moitié des erreurs.<br/><br/>" +
              "Enfin, exiger que la réponse soit rendue dans l'unité du problème — « à partir de $5$ " +
              "films » — et non sous la forme $n > 4$. Le passage de l'inégalité à l'entier qui la " +
              "réalise est précisément ce que l'exercice évalue.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille cette erreur : les douze tirages du " +
              "générateur sont des équations à solution unique, sans aucun seuil ni comparaison de " +
              "deux offres. L'entraînement utile est le PROBLÈME du chapitre — le plombier et " +
              "l'électricien —, dont la troisième tâche demande précisément de conclure de quel côté " +
              "du point d'égalité on se trouve.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : aucun des douze tirages (vérifié le 2026-09-13) ne comporte
         de comparaison de deux tarifs ni de seuil, et le seul exercice du
         livre qui pose exactement cette tâche est la question 4 de
         l'ÉVALUATION (le cinéma), qu'une remédiation ne peut pas viser — on
         remédie avant d'évaluer. Le remède renvoie donc vers le PROBLÈME du
         chapitre, qui n'est pas noté et qui travaille réellement le geste. */
      exercice: null
    },
    {
      titre: "Résoudre juste sans jamais dire ce que $x$ représente",
      eleve: "Sur un problème de mise en équation, la copie commence directement par " +
             "$3x + 1 = 8$, se déroule correctement, et se termine par « $x = 2{,}33$ ». Ni phrase " +
             "d'introduction nommant l'inconnue, ni unité, ni phrase de conclusion.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que le " +
             "résultat EST le travail. Or le brevet évalue la mise en équation autant que la " +
             "résolution, et un barème de problème accorde régulièrement autant de points au choix " +
             "de l'inconnue et à la conclusion qu'au calcul lui-même. Ce n'est pas de la " +
             "négligence, c'est un contrat implicite qui a changé sans qu'on le dise.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : une " +
              "résolution de problème tient en quatre lignes, et les quatre sont exigibles.<br/><br/>" +
              "<strong>1. Le choix de l'inconnue</strong> : « soit $x$ le nombre de kilomètres " +
              "parcourus ». Une phrase, avec l'unité.<br/><br/>" +
              "<strong>2. La mise en équation</strong> : « le prix total s'écrit $3x + 1$, et il " +
              "vaut $8$, donc $3x + 1 = 8$ ».<br/><br/>" +
              "<strong>3. La résolution</strong>, avec sa vérification.<br/><br/>" +
              "<strong>4. La conclusion dans les termes du problème</strong> : « la course a couvert " +
              "environ $2{,}33$ km ». Pas « $x = 2{,}33$ ».<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : distribuer une copie fictive " +
              "comportant uniquement le calcul, juste, et demander aux élèves de la noter avec le " +
              "barème officiel sous les yeux. Ils constatent eux-mêmes le nombre de points perdus, " +
              "et aucun discours sur la rigueur n'obtient ce résultat aussi vite.<br/><br/>" +
              "Un point de vigilance sur ce chapitre en particulier : les énoncés du livre " +
              "fournissent l'équation toute faite (« on pose $3x + 1 = 8$ »), ce qui aide à " +
              "démarrer mais dispense justement de la ligne 1. Retirez cette indication au tableau " +
              "quand vous reprenez ces exercices en classe : c'est la moitié du travail du brevet " +
              "qu'elle escamote.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est
         « une compagnie de taxi facture 1 € de prise en charge, plus 3 € par
         km ; une course coûte 8 € ; combien de km ont été parcourus ? On pose
         $3x + 1 = 8$ ». C'est le support le plus simple du chapitre pour
         exiger la rédaction complète : l'élève n'a aucune difficulté de calcul
         à gérer en même temps, l'inconnue a une unité claire (des kilomètres),
         et la solution décimale (7/3) oblige à une conclusion soignée qui ne
         peut pas se réduire à un entier jeté. L'énoncé donne l'équation : c'est
         précisément ce que le remède demande de masquer au tableau pour
         travailler la ligne 1. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Perdre le dénominateur en multipliant un seul terme",
      eleve: "Pour $\\dfrac{2x + 1}{3} = 5$, l'élève écrit $2x + 1 = 5$, ou bien $2x + 3 = 15$, au " +
             "lieu de $2x + 1 = 15$.",
      cause: "La barre de fraction porte sur toute l'expression $2x + 1$, mais elle ne s'écrit pas " +
             "comme une parenthèse : rien, visuellement, ne rappelle qu'elle groupe. Quand l'élève " +
             "multiplie par $3$, il applique le facteur au terme le plus proche de la barre — ou " +
             "l'oublie du côté où il n'y a pas de fraction. C'est une difficulté de LECTURE de " +
             "l'écriture mathématique, pas une difficulté de résolution, et la traiter comme une " +
             "erreur de calcul ne la corrige jamais.",
      remede: "Faire apparaître la parenthèse que la barre de fraction cache. Exiger, pendant " +
              "quelques séances, la réécriture intermédiaire " +
              "$\\dfrac{2x + 1}{3} = \\dfrac{1}{3} \\times (2x + 1)$. Sous cette forme, le " +
              "groupement est visible et l'élève retrouve la double distributivité qu'il maîtrise " +
              "depuis la quatrième.<br/><br/>" +
              "Rappeler ensuite l'opération réelle, celle qui n'a rien d'un déplacement : on " +
              "<strong>multiplie les deux membres par $3$</strong>. À gauche, le $3$ du dénominateur " +
              "disparaît ; à droite, $5$ devient $15$. Le mot « les deux membres » est celui qui " +
              "manque quand le résultat est $2x + 1 = 5$.<br/><br/>" +
              "Un geste de classe qui vaut le détour : proposer côte à côte $\\dfrac{2x + 1}{3}$ et " +
              "$\\dfrac{2x}{3} + 1$, et faire calculer les deux pour $x = 1$. On obtient $1$ d'un " +
              "côté et environ $1{,}67$ de l'autre. Les deux écritures se ressemblent beaucoup et ne " +
              "valent pas la même chose : c'est la meilleure justification de la parenthèse " +
              "invisible, et elle tient en trois minutes.<br/><br/>" +
              "Et toujours la vérification finale : avec $x = 7$, $\\dfrac{2 \\times 7 + 1}{3} = " +
              "\\dfrac{15}{3} = 5$. Elle referme le doute et coûte dix secondes.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est
         « un pâtissier utilise 10 g de farine de base, puis ajoute 2 g par
         part, jusqu'à 20 g ; on pose $2x + 10 = 20$ ». AUCUN tirage du
         générateur ne comporte de fraction dans l'énoncé — les douze sont de
         la forme $ax + b = c$ —, si bien que le renvoi ne peut pas viser
         l'erreur de plein fouet. Ce qu'il vise en revanche réellement, c'est
         le geste dont elle dépend : la division finale par le coefficient de
         $x$, faite sur les deux membres. La solution imprimée l'isole en une
         ligne ($2x = 10$, puis $x = 5$), et c'est le prérequis à consolider
         avant d'attaquer une équation à dénominateur. Le remède, lui, fournit
         le travail spécifique sur la barre de fraction, que le livre ne
         propose pas. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Q1 (résoudre $5x - 3 = 2x + 9$) : application directe de la méthode,
     aucune décision à prendre. C'est « calculer ».
     Q2 (résoudre $-4x + 8 \leq 0$, QCM) : les quatre options diffèrent par le
     sens de l'inégalité et par le signe. Trancher demande de savoir POURQUOI
     le sens s'inverse, pas de calculer plus vite — le calcul, lui, tient en
     une ligne. C'est « raisonner ».
     Q3 (résoudre $\dfrac{2x+1}{3} = 5$) : application, avec la difficulté de
     lecture traitée à l'erreur 5. C'est « calculer ».
     Q4 (le cinéma, deux formules, à partir de combien de films) : l'élève doit
     traduire deux tarifs en deux expressions, poser l'inéquation qui compare,
     puis revenir au contexte pour rendre un nombre de films. C'est
     « modéliser », et c'est la seule question de l'évaluation qui l'évalue.
     Q5 (ensemble solution de $3(x-2) > 2(x+1)$, QCM) : développer, réduire,
     isoler. C'est « calculer ».

     CONSTAT À ASSUMER : « chercher », « représenter » et « communiquer » ne
     sont évaluées nulle part dans ce chapitre, et leurs colonnes resteront
     vides sur la grille. Deux d'entre elles mériteraient pourtant d'y être, et
     le livre en donne les moyens ailleurs : « représenter » est directement
     travaillée par le schéma de la droite graduée du cours (placer un ensemble
     solution, décider si la borne est pleine ou creuse), et « communiquer »
     par la troisième question du quiz, où il s'agit d'expliquer l'erreur d'un
     camarade. Si vous voulez les évaluer, construisez la question à partir de
     ces deux supports plutôt que de renommer une étiquette ici — déclarer une
     compétence ne suffit pas, la question doit réellement la mobiliser. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "modéliser", "calculer"]
  }
};
