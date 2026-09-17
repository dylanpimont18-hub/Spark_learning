/* =========================================================
   Spark Learning – js/data/prof/bts/complexes.prof.js
   Fiche professeur du chapitre « Les Nombres Complexes » (programme BTS),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU NOM DU FICHIER. L'`id` du module est `complexes`, SANS le
   préfixe `bts-` que portent la plupart des autres chapitres du dossier.
   `chargerProf()` construit le chemin de la fiche à partir de l'`id`, pas du
   nom du fichier de données : un fichier nommé `bts-complexes.prof.js` ne
   serait JAMAIS trouvé, et l'ouvrage compilerait « 12 fiches sur 13 » sans
   le moindre message d'erreur. Deux autres chapitres du dossier sont dans ce
   cas : `eq-diff-2` et `statistiques`.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 14 (ce chapitre est le quinzième de `bts-maths` : les
   quatorze de `bts-prep` le précèdent, d'où le +14 et non le +1).

   21 énoncés tirés, dont 12 numérotés et 9 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun donne une impédance
   $\underline{Z} = a + jb$ déjà écrite sous forme algébrique et demande son
   MODULE. Seuls le contexte (antenne, moteur asynchrone, soudure à
   induction, amplificateur audio...) et le couple $(a,b)$ changent — et
   encore : les quatre couples tirés sont $(3,4)$, $(6,8)$, $(5,12)$ et
   $(8,15)$, c'est-à-dire QUATRE TRIPLETS PYTHAGORICIENS, donc quatre racines
   carrées exactes.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours le
   définit : l'ARGUMENT (D2), la FORME EXPONENTIELLE (méthode 2), le CALCUL
   des impédances $\underline{Z}_L = jL\omega$ et $\underline{Z}_C = -j/(C\omega)$
   (méthode 3), la RÉSONANCE (D4). Or quatre des cinq questions de
   l'évaluation portent précisément là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["complexes"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli. Ce
     chapitre est le PREMIER du dossier (rang conseillé 1) : il ne peut, par
     construction, s'appuyer sur aucun chapitre de rang strictement
     inférieur. Il n'en a d'ailleurs pas besoin — les nombres complexes
     s'introduisent à partir de rien d'autre que la racine carrée et le
     théorème de Pythagore.

     Candidats examinés et ÉCARTÉS :
     - ch. 5 (Fonctions réelles) : aucun lien. Le module n'est pas une
       fonction à étudier, c'est une longueur à calculer.
     - ch. 12 (Séries de Fourier) : le lien est réel et FORT — la
       décomposition en harmoniques s'écrit naturellement en notation
       complexe — mais il joue dans l'AUTRE sens. C'est Fourier qui s'appuie
       sur les complexes, pas l'inverse ; le déclarer ici créerait un cycle
       que `validerPrerequis` refuse, à juste titre. C'est la fiche de
       Fourier qui porte ce prérequis.
     - ch. 2 (Équations différentielles du 2nd ordre) : même raisonnement.
       Le discriminant négatif y appelle des racines complexes, mais ce
       chapitre-ci n'utilise rien du 2nd ordre.
     - ch. 13 (Laplace) : la variable $p$ est complexe et $p = j\omega$ fait
       le pont, mais là encore c'est Laplace qui s'appuie sur les complexes.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la racine carrée,
     les puissances et le théorème de Pythagore viennent de la REMISE À
     NIVEAU (`bts-prep`), qui est dans un AUTRE dossier. `prerequis` ne vise
     qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 15 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 1 est celui du livre, et les deux ordres coïncident.

     Le placement en tête tient à deux raisons. D'abord, le chapitre
     n'attend rien du dossier : il peut être pris le premier jour. Ensuite et
     surtout, il OUTILLE deux chapitres situés loin derrière lui — Fourier
     (ch. 12) et Laplace (ch. 13) — qui manipulent des grandeurs complexes
     sans les redéfinir. Le retarder revient à retarder les deux. */
  rangConseille: 1,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et les nombres complexes appliqués à l'impédance
     relèvent typiquement des groupements industriels (électrotechnique,
     électronique, systèmes numériques).

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« forme algébrique », « module et argument », « interprétation ») et
     n'inventent aucune spécialité. La `note` le signale explicitement, pour
     qu'un enseignant vérifie le référentiel de SA filière avant de les
     citer. */
  attendus: [
    "Écrire un nombre complexe sous forme algébrique et en calculer le module",
    "Déterminer l'argument d'un nombre complexe et passer à la forme exponentielle",
    "Interpréter module et argument d'une impédance en termes d'amplitude et de déphasage"
  ],

  note: "Les nombres complexes appliqués au régime sinusoïdal — forme algébrique, module, " +
        "argument, impédance — relèvent du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Ce chapitre ouvre la " +
        "partie BTS : la colonne « S'appuie sur » y portera un tiret, ce qui est exact pour cette " +
        "partie-là et trompeur si on s'arrête là. Il suppose en réalité la <strong>racine " +
        "carrée</strong>, les <strong>puissances</strong> et le <strong>théorème de Pythagore</strong>, " +
        "qui sont dans la <strong>remise à niveau</strong>, l'autre partie de l'ouvrage. Un " +
        "prérequis ne pouvant viser qu'un chapitre de la même partie, <strong>rien ne le " +
        "montrera</strong> : si le groupe bute sur $\\sqrt{36 + 64}$, c'est là qu'il faut " +
        "revenir.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les douze énoncés numérotés sont <strong>tous le même exercice</strong> : une impédance " +
        "$\\underline{Z} = a + jb$ est donnée, on demande son module. Pire — ou mieux, selon le " +
        "moment de l'année — les quatre couples tirés sont $(3;4)$, $(6;8)$, $(5;12)$ et $(8;15)$, " +
        "c'est-à-dire <strong>quatre triplets pythagoriciens</strong> : la racine carrée tombe " +
        "toujours juste. Aucun exercice ne demande l'<strong>argument</strong>, la <strong>forme " +
        "exponentielle</strong>, le calcul de $\\underline{Z}_L = jL\\omega$ ou de " +
        "$\\underline{Z}_C = -j/(C\\omega)$, ni la <strong>résonance</strong> — alors que ce sont " +
        "les définitions D2, D3 et D4 du cours et <strong>quatre des cinq questions du devoir " +
        "noté</strong>. L'exemple résolu du cours (le circuit RL série) fait, lui, le chemin " +
        "complet : impédance, module, déphasage, intensité. <strong>C'est lui qu'il faut prendre " +
        "comme modèle de la tâche attendue</strong>, et non les exercices. Prévoir en complément " +
        "deux ou trois énoncés demandant un argument et une résonance, que le manuel ne fournit " +
        "pas.<br/><br/>" +
        "Dernier point, utile dès la première séance : la notation $j$ au lieu de $i$ n'est pas une " +
        "coquetterie d'électricien. En régime sinusoïdal, $i(t)$ désigne l'intensité : écrire " +
        "$i^2 = -1$ à côté de $i = 2$ A garantit la confusion. Annoncez-le avant le premier calcul, " +
        "pas après la première erreur.",

  erreurs: [
    {
      titre: "Additionner les modules au lieu de composer les impédances",
      eleve: "Sur un circuit RL série avec $R = 30$ Ω et $X_L = 40$ Ω, l'élève annonce " +
             "$|\\underline{Z}| = 70$ Ω. Il a ajouté les deux nombres, alors que le module vaut " +
             "$\\sqrt{30^2 + 40^2} = 50$ Ω. Le même réflexe lui fait écrire $|\\underline{Z}| = a + b$ " +
             "au lieu de $\\sqrt{a^2 + b^2}$.",
      cause: "En courant continu, les résistances en série S'AJOUTENT — c'est l'une des toutes " +
             "premières règles apprises en électricité, elle est juste, et elle a servi des " +
             "centaines de fois. L'étudiant ne fait donc pas une faute de calcul : il applique une " +
             "loi vraie hors de son domaine. Ce qui change en régime sinusoïdal, c'est que les deux " +
             "grandeurs ne sont plus des nombres mais des <strong>vecteurs perpendiculaires</strong> : " +
             "la résistance est sur l'axe réel, la réactance sur l'axe imaginaire. Additionner leurs " +
             "longueurs reviendrait à dire que la diagonale d'un rectangle vaut la somme de ses deux " +
             "côtés.",
      remede: "Faire <strong>dessiner le triangle</strong> avant tout calcul : $a$ horizontal, $b$ " +
              "vertical, $|\\underline{Z}|$ en diagonale. Une fois le dessin au tableau, plus " +
              "personne ne propose $30 + 40 = 70$ — on voit que l'hypoténuse est plus courte que le " +
              "chemin par les deux côtés. Le module n'est plus une formule, c'est " +
              "Pythagore.<br/><br/>" +
              "Installer un <strong>contrôle d'ordre de grandeur</strong> qui ne coûte rien : le " +
              "module est toujours <strong>plus grand que chacun des deux termes et plus petit que " +
              "leur somme</strong>. Sur $6 + 8j$, la réponse est donc entre $8$ et $14$ ; $10$ passe, " +
              "$14$ non. Deux secondes de vérification qui attrapent l'erreur à tous les " +
              "coups.<br/><br/>" +
              "Relier enfin à la <strong>conséquence métier</strong>, qui est loin d'être anodine : " +
              "le courant absorbé vaut $I = U/|\\underline{Z}|$. Surestimer l'impédance de $70$ au " +
              "lieu de $50$, c'est sous-estimer le courant de $40\\,\\%$ — on dimensionne alors un " +
              "câble et une protection trop faibles pour le courant réel. L'erreur ne se paie pas " +
              "en points, elle se paie en échauffement de conducteur.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 14) : l'exercice 4 est le circuit RL série,
         R = 8 Ω et X_L = 15 Ω, Z = 8 + 15j, réponse 17 Ω. C'est LE support de
         cette erreur pour une raison précise : c'est le seul énoncé du tirage
         (avec le 10) qui donne R et X_L SÉPARÉMENT avant d'écrire Z, donc le
         seul où l'élève est tenté d'additionner deux nombres qu'il a d'abord
         lus l'un à côté de l'autre. Le couple (8,15) est en outre le plus
         discriminant du tirage : 8 + 15 = 23 est très loin de 17, alors que
         sur (3,4) l'écart entre la somme 7 et le module 5 est faible et
         l'erreur passe plus inaperçue. Choix du 4 plutôt que du 10, qui a la
         même structure : l'exercice 10 porte le couple (5,12) et est réservé
         à l'erreur 3 ci-dessous. Deux erreurs d'un même chapitre ne pointent
         jamais le même énoncé. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Confondre $j$ et l'intensité $i$, ou traiter $j$ comme une lettre ordinaire",
      eleve: "L'élève écrit $\\underline{Z} = 6 + 8j$ puis « $j$ se simplifie » et conclut " +
             "$\\underline{Z} = 14$. Ou bien il calcule $j^2 = j \\times j = 2j$. Ou encore, sur une " +
             "copie où figure aussi $i = 0{,}2$ A, il remplace $j$ par cette valeur.",
      cause: "Depuis le collège, une lettre dans une expression est une INCONNUE ou une grandeur : " +
             "on la remplace par un nombre, on la factorise, on la simplifie. $j$ n'est rien de " +
             "tout cela — c'est une <strong>constante</strong>, au même titre que $\\pi$, et une " +
             "constante qui n'est sur aucune droite graduée. Pour un adulte en reprise d'études, " +
             "cette catégorie n'existe tout simplement pas : il n'a jamais rencontré de nombre qui " +
             "ne soit pas quelque part sur un axe. La confusion avec l'intensité $i(t)$ ajoute une " +
             "couche, et elle est d'autant plus tenace que les deux notations cohabitent sur la " +
             "même feuille en électrotechnique.",
      remede: "Poser la règle de notation <strong>avant</strong> le premier calcul, pas après la " +
              "première erreur : en électricité on écrit $j$ parce que $i$ est déjà pris par " +
              "l'intensité. Dit une fois, à l'écrit, au tableau, la question ne revient plus. C'est " +
              "aussi la convention de toutes les notices et de tous les sujets " +
              "d'examen.<br/><br/>" +
              "Faire fonctionner $j$ par sa <strong>seule règle de calcul</strong>, qui tient en " +
              "trois caractères : $j^2 = -1$. Tout le reste s'en déduit et rien d'autre n'est à " +
              "retenir. Faire calculer $j^3$ et $j^4$ au tableau pendant deux minutes : on obtient " +
              "$-j$ puis $+1$, et le cycle de période quatre suffit à convaincre que $j$ n'est ni " +
              "une inconnue ni une valeur à remplacer.<br/><br/>" +
              "Donner enfin la <strong>lecture physique</strong>, qui ancre la notation dans le " +
              "métier : la partie réelle est ce qui <strong>chauffe</strong> (énergie dissipée dans " +
              "la résistance), la partie imaginaire ce qui <strong>oscille</strong> (énergie stockée " +
              "puis restituée par la bobine ou le condensateur). « Imaginaire » ne veut pas dire " +
              "« qui n'existe pas » : la réactance se mesure à l'ohmmètre en alternatif, et elle " +
              "fait déclencher les protections.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés donnent tous Z = a + jb DÉJÀ ÉCRIT et ne
         demandent qu'un module par racine carrée. Aucun ne fait manipuler j
         lui-même — pas de j^2, pas de produit de deux complexes, pas de
         division, pas de Z_C = -j/(Cω) à établir. L'élève peut donc traverser
         les douze énoncés en ignorant totalement ce qu'est j : il lui suffit
         de lire deux nombres et d'appliquer Pythagore. Pointer l'un d'eux
         enverrait l'enseignant vers une remédiation qui n'en est pas une. La
         question 2 de l'évaluation (impédance du condensateur) la travaille
         bien, mais une remédiation ne renvoie jamais vers le devoir noté : le
         remède ramène donc au cours (méthode 3, piège du cours) et demande à
         l'enseignant de fabriquer le support. */
      exercice: null
    },
    {
      titre: "Oublier de mettre au carré, ou oublier la racine",
      eleve: "Sur $\\underline{Z} = 5 + 12j$, l'élève écrit $|\\underline{Z}| = \\sqrt{5 + 12} = " +
             "\\sqrt{17}$ (il a sauté les carrés), ou bien il s'arrête à $25 + 144 = 169$ et rend " +
             "$169$ Ω (il a oublié la racine). Les deux se produisent sur la même copie, à deux " +
             "lignes d'intervalle.",
      cause: "La formule $\\sqrt{a^2 + b^2}$ empile <strong>trois opérations</strong> — élever, " +
             "ajouter, extraire — dans un ordre que l'écriture ne rend pas visible : tout est " +
             "sous le même signe racine, et l'œil lit une expression, pas une séquence. Chez un " +
             "public qui a souvent appris à calculer de gauche à droite, la hiérarchie des " +
             "opérations sous un radical n'est pas automatique. L'oubli de la racine finale, lui, " +
             "a une cause plus discrète : $169$ est un nombre net, qui « a l'air » d'un résultat. " +
             "Rien dans la copie ne signale que le calcul n'est pas fini — et c'est justement ce " +
             "qu'il faut installer.",
      remede: "Imposer les <strong>trois lignes séparées</strong>, une opération par ligne, dès le " +
              "premier exercice : (1) $a^2 = 25$ et $b^2 = 144$, (2) somme $= 169$, (3) racine " +
              "$= 13$. Écrite ainsi, l'étape manquante se voit immédiatement — c'est une ligne qui " +
              "n'existe pas. En une seule expression, elle est invisible.<br/><br/>" +
              "Faire du <strong>contrôle d'unité</strong> un réflexe de fin de calcul : le module " +
              "s'exprime en ohms, comme $a$ et $b$. Or $169$ est de l'ordre du <strong>carré</strong> " +
              "des données, pas de leur ordre de grandeur. Si le résultat n'est pas « de la même " +
              "taille » que les nombres de l'énoncé, il manque la racine. Le contrôle vaut aussi " +
              "dans l'autre sens : $\\sqrt{17} \\approx 4{,}1$ est plus PETIT que $12$, ce qui est " +
              "impossible pour une hypoténuse.<br/><br/>" +
              "Signaler enfin le <strong>piège du tirage</strong>, et le signaler aux étudiants " +
              "eux-mêmes : les couples du chapitre — $(3;4)$, $(6;8)$, $(5;12)$, $(8;15)$ — sont " +
              "des triplets pythagoriciens, donc la racine tombe toujours juste. C'est confortable " +
              "mais trompeur : le jour où $\\sqrt{2^2 + 5^2} = \\sqrt{29} \\approx 5{,}39$ sortira, " +
              "un étudiant habitué aux entiers croira s'être trompé. Posez-leur une fois un cas non " +
              "entier, à l'oral, pour que la surprise ait lieu en classe et pas à l'épreuve.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 10 est le
         circuit RL série avec R = 5 Ω et X_L = 12 Ω, Z = 5 + 12j, réponse
         13 Ω. C'est le meilleur support des deux oublis à la fois, et c'est
         le couple (5,12) qui le rend meilleur que (3,4) ou (6,8) :
           - somme sans carrés : sqrt(17) ≈ 4,12, plus PETIT que 12 — absurde
             de façon flagrante, donc la vérification d'ordre de grandeur du
             remède se démontre là-dessus ;
           - somme des carrés sans racine : 169, soit treize fois le plus
             grand terme — l'écart est spectaculaire, là où sur (3,4) l'oubli
             donne 25 contre 5, moins parlant.
         Le couple (8,15) donnerait 289, plus spectaculaire encore, mais il
         est déjà pris par l'erreur 1 (exercice 4) : deux erreurs d'un même
         chapitre ne pointent jamais le même énoncé, et le principe vaut aussi
         pour deux énoncés jumeaux. Choix du 10 plutôt que du 5 ou du 12, qui
         portent aussi (5,12) : le 10 est le seul des trois à séparer R et X_L
         dans l'énoncé avant d'écrire Z, ce qui met les deux nombres à
         élever bien en évidence. */
      exercice: { type: "exercice", n: 10 }
    },
    {
      titre: "Rendre un module sans jamais interpréter le déphasage",
      eleve: "L'élève annonce « $|\\underline{Z}| = 50$ Ω » et s'arrête là. Interrogé sur ce que " +
             "signifie la partie imaginaire $40j$, il ne sait pas dire si le courant est en avance " +
             "ou en retard sur la tension, ni si le circuit est inductif ou capacitif — alors que " +
             "c'est l'information que le technicien cherche.",
      cause: "L'énoncé est habillé d'un contexte professionnel, mais la tâche demandée s'arrête à " +
             "un nombre : l'élève répond exactement à ce qu'on lui demande. L'habitude scolaire " +
             "veut d'ailleurs que la réponse soit le résultat du calcul, jamais son sens. Ce n'est " +
             "donc pas une négligence, c'est un <strong>contrat implicite</strong> — et il faudra " +
             "le changer explicitement, parce que l'épreuve de BTS, elle, évalue l'interprétation, " +
             "et parce qu'un module seul ne permet aucune décision technique.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur, son unité, et la <strong>nature du circuit</strong>. " +
              "« L'impédance vaut $50$ Ω et le circuit est inductif, le courant est en retard sur " +
              "la tension » plutôt que « $|\\underline{Z}| = 50$ ». C'est ce que l'épreuve attend, " +
              "et c'est ce qu'un collègue d'atelier comprendra.<br/><br/>" +
              "Faire lire le <strong>signe de la partie imaginaire</strong> à chaque fois, même " +
              "quand l'énoncé ne le demande pas : positive, le circuit est inductif (bobine " +
              "dominante, courant en retard) ; négative, il est capacitif (condensateur dominant, " +
              "courant en avance) ; nulle, on est à la résonance et le circuit se comporte comme " +
              "une résistance pure. C'est un ajout de dix secondes qui double la valeur de " +
              "l'exercice.<br/><br/>" +
              "Relier enfin à la <strong>conséquence métier</strong>, qui rend l'interprétation " +
              "indispensable plutôt que décorative : c'est le déphasage qui détermine le " +
              "<strong>facteur de puissance</strong> $\\cos\\varphi$, donc la puissance réactive " +
              "facturée par le distributeur et le dimensionnement des batteries de condensateurs. " +
              "Un module sans argument ne permet de compenser quoi que ce soit — c'est un demi-" +
              "résultat, pas un résultat.",
      /* Volontairement SANS renvoi, et pour une raison vérifiée sur le
         tirage : les douze énoncés demandent « calcule le module » et leur
         champ réponse attend un nombre d'ohms. Aucun ne demande l'argument,
         la nature du circuit, ni une phrase d'interprétation — la tâche
         s'arrête précisément là où l'erreur commence. Renvoyer à l'un d'eux
         pour remédier à un défaut d'interprétation serait un contresens :
         l'exercice n'exige pas ce qu'on reproche à l'élève de ne pas faire.
         Le remède demande donc à l'enseignant d'ÉTENDRE la consigne, ce qui
         est le vrai geste de remédiation ici. Le seul support du livre est
         l'exemple résolu du cours (circuit RL série, R = 30 Ω, L = 40 mH),
         qui va jusqu'au déphasage de 53,1° et à l'intensité : c'est vers lui
         que le remède ramène. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — module de $\underline{Z} = 5 + 12j$. Exécution de la procédure des
          douze exercices sur des nombres donnés, sans aucun choix de
          méthode : « calculer ».
     Q2 — « l'impédance d'un condensateur est : », avec $jC\omega$ (l'inverse)
          et $jL\omega$ (la bobine) en distracteurs. Aucun calcul : il faut
          écarter trois expressions voisines et justifier laquelle décrit le
          condensateur, ce qui suppose de savoir que $\underline{Z}_C$ est un
          INVERSE. Juger la validité de quatre énoncés concurrents :
          « raisonner ».
     Q3 — RLC série, $R$, $L$, $C$, $\omega$ donnés, calculer
          $L\omega - 1/(C\omega)$. La formule est FOURNIE dans l'énoncé : le
          travail est l'application numérique, avec la conversion des
          microfarads. Aucun choix de méthode : « calculer ».
     Q4 — argument de $1 + j$, à choix multiple. On pourrait y voir un
          calcul ($\arctan 1$), mais les quatre options sont $0°$, $45°$,
          $90°$, $180°$ : le vrai travail est de situer le point $(1;1)$ dans
          le plan complexe, sur la bissectrice. C'est la LECTURE d'une
          position dans un repère : « représenter ». C'est la seule question
          du corpus BTS qui mobilise cette compétence, et c'est pour cela
          qu'elle est signalée ici.
     Q5 — condition de résonance donnée ($L\omega_0 = 1/(C\omega_0)$), calculer
          $\omega_0$ pour $L$ et $C$ fournis. Application numérique de
          $1/\sqrt{LC}$ avec les microfarads : « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 1, représenter 1.
     « chercher », « modéliser » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de mettre une situation
     en équation, ni de rédiger une explication. C'est un constat sur les cinq
     énoncés, pas un choix — et il rejoint celui du corpus entier, dont les
     130 questions sont toutes `numeric` ou à choix multiple.

     À signaler : quatre des cinq questions (Q2 à Q5) portent sur des notions
     que les douze exercices ne travaillent JAMAIS — argument, impédances de
     composants, résonance (voir la `note`). Un étudiant qui n'aurait fait que
     les exercices n'aurait préparé que la Q1. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "représenter", "calculer"]
  }
};
