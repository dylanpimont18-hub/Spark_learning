/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-logique-boole.prof.js
   Fiche professeur du chapitre « Circuits logiques et algèbre de Boole »
   (première SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 8 (chapitre 9 du livre `lycee-si`).

   ATTENTION, CHAPITRE LE PLUS PAUVRE DE L'OUVRAGE EN VOLUME D'EXERCICES, et
   cela change les règles d'écriture de cette fiche :
     - 8 énoncés tirés SEULEMENT, tous numérotés dans le corps du chapitre ;
     - donc AUCUNE banque supplémentaire ($8 - 12 < 0$). Un renvoi
       `{type:"supplement", n}` serait REFUSÉ par `validerProf` avec le
       message « ce chapitre n'a aucune banque supplémentaire » ;
     - et le renvoi maximal en `{type:"exercice", n}` est donc 8, non 12.
   À comparer aux 42 énoncés de `si-1re-poo` ou aux 36 de
   `si-1re-energie-rendement` : la richesse du tirage varie d'un facteur 5
   dans ce dossier, et il faut la mesurer chapitre par chapitre.

   LES QUATRE MOULES, relevés énoncé par énoncé sur les huit tirages :
     - $S = (A + B) \cdot C$          : exercices 1 et 7 ;
     - $S = (A \oplus B) \cdot C$     : exercices 2 et 5 ;
     - $S = (A \cdot B) + C$          : exercices 3 et 6 ;
     - $S = \overline{A \cdot B} + C$ : exercices 4 et 8.
   Les huit énoncés sont donc quatre expressions, chacune évaluée sur DEUX
   triplets seulement : $(A,B,C) = (0,1,0)$ et $(1,0,1)$.

   LE FAIT DÉCISIF, et il contraint deux des quatre erreurs : les huit énoncés
   demandent tous d'ÉVALUER une expression sur un triplet donné. Aucun ne
   demande de SIMPLIFIER, aucun n'applique De Morgan, aucun ne construit ni ne
   compte une table de vérité — alors que ce sont les trois objets centraux du
   cours (De Morgan est dans l'introduction, dans les formules, dans le
   récapitulatif et dans une définition) et QUATRE des cinq questions de
   l'évaluation (Q1 $2^4$, Q2 De Morgan, Q4 factorisation, et seule la Q5 est
   une évaluation directe).
   Le quiz, lui, traite exactement ce que les exercices ignorent : De Morgan
   généralisé (Q1), une simplification algébrique (Q2), le comptage $2^n$
   (Q3). Sur les quatre erreurs de cette fiche, DEUX renvoient donc au quiz,
   une à un exercice, et une reste sans support — c'est un chapitre où il faut
   accepter de renvoyer peu plutôt que de renvoyer faux.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-logique-boole"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     AUCUN prérequis de SI. Ce chapitre est le plus autonome du dossier : son
     objet — deux valeurs, trois opérateurs, des tables de vérité — ne
     réutilise rien des autres chapitres de première et n'est réutilisé par
     aucun d'eux. C'est un bloc « information » posé au milieu d'une année
     très mécanicienne.

     Candidats examinés et ÉCARTÉS :
     - ch. 8 (POO) : c'est LE candidat qu'on écrirait par réflexe, puisque les
       deux chapitres relèvent de l'informatique. MESURE FAITE, et elle
       tranche : les 8 énoncés de Boole ne contiennent aucune ligne de code,
       aucune variable Python, aucun booléen de programmation ; les 42 énoncés
       de POO ne contiennent aucune porte logique ni aucun opérateur booléen.
       Les deux chapitres ne se croisent nulle part dans le corpus. Le lien est
       de culture, pas de dépendance — et il joue plutôt dans l'autre sens
       (savoir ce qu'est un booléen aide en POO). Écarté.
     - ch. 1 (SysML) : le diagramme stm (états) serait le pont naturel entre
       une machine à états et la logique combinatoire, mais SysML ne traite pas
       le stm au-delà de son nom, et ce chapitre-ci ne fait aucun diagramme.
       Écarté.
     - ch. 5 (Asservissement) : la régulation « tout ou rien » (thermostat)
       est le premier exemple intuitif où la logique binaire pilote un
       système. Mais l'asservissement ne traite QUE la correction
       proportionnelle, continue, et n'utilise aucune porte. Écarté — c'est
       toutefois le rapprochement le plus fécond à faire à l'oral.
     - ch. 2, 3, 6, 7 : aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLE, traité dans la `note` : les PUISSANCES de 2.
     La question 1 de l'évaluation demande $2^4$, le quiz 3 aussi, et la
     notion de table de vérité à $2^n$ lignes est dans le récapitulatif du
     cours. C'est une notion de mathématiques, non déclarable ici. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 4. L'ordre complet des huit rangs du
     dossier est justifié une fois dans `si-1re-sysml.prof.js` (rang 1).

     Rang 4 par choix de RESPIRATION plutôt que par contrainte : ce chapitre
     ne dépend de rien et rien ne dépend de lui, donc il pourrait tomber
     n'importe où. On le place au milieu de l'année pour deux raisons.
     D'abord, il coupe la série mécanique (cinématique 2, statique 3) avant
     qu'elle ne reprenne avec l'énergie (6) et la RDM (7) : trois chapitres
     mécaniques d'affilée fatiguent un groupe de première. Ensuite, il installe
     la culture binaire (deux états, une table, une convention) bien avant la
     POO (rang 8), qui en tirera profit sans en avoir formellement besoin.

     Le livre le range en chapitre 9 de l'ouvrage, soit le 4e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 4,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 4 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Modéliser et résoudre le comportement logique des systèmes ».

     Bornés à ce que le chapitre traite VRAIMENT : les trois opérateurs de
     base, les portes dérivées (NAND, NOR, XOR), la table de vérité, De Morgan
     et la simplification algébrique. Rien sur les tableaux de Karnaugh (non
     cités par le cours), rien sur la logique séquentielle (bascules,
     compteurs), rien sur les technologies de portes. Citer un attendu sur
     Karnaugh serait citer ce que le chapitre n'enseigne pas. */
  attendus: [
    "Établir la table de vérité d'une fonction logique combinatoire et en déduire la sortie pour un état d'entrée donné",
    "Traduire une fonction logique en équation booléenne et en logigramme à partir des opérateurs de base et des portes dérivées",
    "Simplifier une expression booléenne à l'aide des lois de l'algèbre de Boole, dont les lois de De Morgan"
  ],

  note: "Les trois opérateurs de base (ET, OU, NON), les portes dérivées (NAND, NOR, XOR), la " +
        "table de vérité à $2^n$ lignes, les lois de De Morgan et la simplification d'une " +
        "expression : le chapitre installe l'outil qui décrit toute la logique combinatoire d'un " +
        "système.<br/><br/>" +
        "<strong>La colonne « S'appuie sur » affichera un tiret, et c'est exact.</strong> " +
        "Ce chapitre est le plus autonome de l'année : il ne dépend d'aucun autre chapitre de SI " +
        "et aucun ne dépend de lui. Un seul prérequis compte et ne pourra pas être affiché — les " +
        "<strong>puissances de $2$</strong>, qui relèvent des mathématiques et que la table de " +
        "vérité à $2^n$ lignes réclame dès le premier cours.<br/><br/>" +
        "<strong>LA LIMITE À CONNAÎTRE AVANT DE PRÉPARER VOTRE SÉQUENCE, et elle est la plus " +
        "sévère de l'ouvrage.</strong> Ce chapitre ne tire que <strong>$8$ énoncés</strong>, " +
        "contre $24$ à $42$ pour les autres chapitres de cette partie. Il n'y a donc " +
        "<strong>aucune banque supplémentaire</strong> : les huit exercices imprimés sont tout ce " +
        "que le manuel contient. Prévoyez de compléter — c'est le seul chapitre où le volume " +
        "d'entraînement ne suffit pas à une séquence entière.<br/><br/>" +
        "<strong>Et ces huit énoncés ne travaillent qu'une seule tâche.</strong> Tous demandent " +
        "d'<strong>évaluer</strong> une expression sur un triplet $(A,B,C)$ donné — quatre " +
        "expressions, chacune sur deux triplets. <strong>Aucun</strong> ne demande de " +
        "<strong>simplifier</strong>, aucun n'applique <strong>De Morgan</strong>, aucun ne " +
        "construit ni ne compte une <strong>table de vérité</strong>. Or ce sont les trois objets " +
        "centraux du cours, et <strong>quatre des cinq questions du devoir noté</strong> en " +
        "relèvent. Un élève qui n'aurait fait que les exercices serait entraîné à la seule tâche " +
        "que l'évaluation ne demande presque pas.<br/><br/>" +
        "<strong>Votre recours est le quiz, et il est excellent ici.</strong> Ses trois questions " +
        "portent exactement sur ce que les exercices ignorent : De Morgan généralisé à trois " +
        "variables, une simplification algébrique de $A + \\overline{A} \\cdot B$, et le comptage " +
        "$2^4 = 16$. Faites-le passer avant les exercices, pas après : il ne double aucun énoncé " +
        "et il couvre le devoir.",

  erreurs: [
    {
      titre: "Complémenter les variables sans changer l'opérateur (De Morgan à moitié)",
      eleve: "L'élève écrit $\\overline{A \\cdot B} = \\overline{A} \\cdot \\overline{B}$, ou " +
             "$\\overline{A + B} = \\overline{A} + \\overline{B}$. Il barre les lettres et laisse " +
             "le signe en place.",
      cause: "La complémentation ressemble visuellement à une distribution — on « passe la barre » " +
             "sur chaque terme, comme on distribue un signe moins en algèbre. Le geste appris en " +
             "mathématiques ($-(a + b) = -a - b$, où l'opérateur ne change pas) est donc transposé " +
             "tel quel, et c'est un faux ami redoutable : en Boole, la barre échange aussi le ET " +
             "et le OU. L'élève n'oublie pas la loi, il en applique la moitié — celle qui lui est " +
             "familière. C'est l'erreur emblématique de la culture « information » de ce chapitre.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 1 est bâti exactement sur cette erreur : « appliquer la 1ère
         loi de De Morgan : $\overline{A \cdot B \cdot C}$ est équivalent
         à : », bonne réponse $\overline{A} + \overline{B} + \overline{C}$,
         et son PREMIER distracteur est $\overline{A} \cdot \overline{B} \cdot
         \overline{C}$ — littéralement l'erreur de l'élève, barres mises et
         opérateur inchangé. Sa correction énonce la règle explicitement : « le
         complément d'un produit (ET) est la somme (OU) des compléments ».
         COMPARÉ AUX CANDIDATS EXERCICES : les 8 énoncés tirés n'appliquent
         JAMAIS De Morgan. L'exercice 4 et l'exercice 8 contiennent bien une
         barre ($S = \overline{A \cdot B} + C$), mais leur correction calcule
         $A \cdot B$ PUIS complémente le résultat numérique ($\overline{0} =
         1$) : c'est une évaluation, pas une transformation d'expression.
         L'élève y obtient la bonne réponse même s'il croit que
         $\overline{A \cdot B} = \overline{A} \cdot \overline{B}$ — sur
         $(1,0,1)$, les deux lectures donnent $1$. Renvoyer à l'exercice 4
         aurait donc été un renvoi plausible et FAUX : il est le seul énoncé
         qui ressemble à l'erreur, et il ne la révèle pas. Le quiz 1 est le
         seul support du livre qui la piège. */
      exercice: { type: "quiz", n: 1 },
      remede: "Le <strong>quiz $1$</strong> est fait pour cette erreur, et son premier distracteur " +
              "EST la réponse fausse de l'élève : $\\overline{A \\cdot B \\cdot C}$ donne " +
              "$\\overline{A} + \\overline{B} + \\overline{C}$, pas " +
              "$\\overline{A} \\cdot \\overline{B} \\cdot \\overline{C}$. Faites justifier le rejet " +
              "du distracteur, pas seulement cocher la bonne case.<br/><br/>" +
              "Attention : les exercices du chapitre ne vous aideront pas ici. Les exercices $4$ et " +
              "$8$ portent bien une barre, mais on y évalue l'expression sur des valeurs, on ne la " +
              "transforme jamais — et sur leurs triplets, l'erreur donne quand même la bonne " +
              "réponse. Le quiz est votre seul support.<br/><br/>" +
              "Installez la règle comme un <strong>geste à deux temps, indissociables</strong>, à " +
              "dire à voix haute : « je barre chaque lettre <strong>ET</strong> je retourne " +
              "l'opérateur ». Une barre franchie, un opérateur échangé. Un élève qui n'a fait " +
              "qu'un seul des deux gestes n'a pas fini.<br/><br/>" +
              "Faites enfin <strong>vérifier sur la table de vérité</strong>, parce que c'est la " +
              "preuve et qu'elle tient en quatre lignes : sur $A = 1$, $B = 0$, " +
              "$\\overline{A \\cdot B} = \\overline{0} = 1$, tandis que " +
              "$\\overline{A} \\cdot \\overline{B} = 0 \\cdot 1 = 0$. Les deux expressions " +
              "diffèrent, la démonstration est faite, et elle ne repose sur aucune autorité."
    },
    {
      titre: "Donner au OU logique le sens du OU exclusif",
      eleve: "Pour $A = 1$ et $B = 1$, l'élève annonce $A + B = 0$ — « l'un ou l'autre, mais pas " +
             "les deux ». Ou l'inverse : il calcule $1 \\oplus 1 = 1$.",
      cause: "Le « ou » du français courant est presque toujours exclusif : « fromage ou dessert » " +
             "signifie l'un des deux, pas les deux. L'élève arrive donc avec une intuition " +
             "linguistique qui contredit l'opérateur mathématique, et il n'a aucune raison de s'en " +
             "méfier. Le cours signale d'ailleurs ce point dans son encadré « piège ». Ce n'est " +
             "pas un défaut de raisonnement : c'est un conflit entre deux langues, et il faut le " +
             "nommer pour le résoudre.",
      /* RENVOI VÉRIFIÉ. Exercice 7 du livre (graine 20260816 + 8, septième
         tirage) : $S = (A + B) \cdot C$ avec $A = 1$, $B = 0$, $C = 1$, donc
         $A + B = 1 + 0 = 1$ puis $S = 1 \cdot 1 = 1$.
         POURQUOI CELUI-LÀ, et le raisonnement compte ici. Le moule OU est
         partagé par les exercices 1 et 7. L'exercice 1 est sur $(0,1,0)$ :
         $A + B = 0 + 1 = 1$, puis $S = 1 \cdot 0 = 0$. Sur ce triplet, UNE
         SEULE entrée vaut $1$, donc le OU et le XOR donnent le même
         résultat — l'erreur y est invisible, l'exercice ne peut rien
         remédier. Sur l'exercice 7, une seule entrée vaut $1$ aussi
         ($A = 1$, $B = 0$)… donc MÊME PROBLÈME.
         MESURE COMPLÈTE DES HUIT TIRAGES : les deux triplets employés par le
         générateur sont $(0,1,0)$ et $(1,0,1)$. Dans les DEUX, $A$ et $B$ ne
         valent jamais $1$ ensemble. Le cas $A = B = 1$, qui est le SEUL où le
         OU et le XOR diffèrent, N'APPARAÎT DANS AUCUN des huit énoncés.
         Aucun exercice ne peut donc révéler l'erreur — un renvoi aurait été
         faux. Le quiz ne la traite pas non plus (De Morgan, simplification,
         $2^n$).
         Restent l'encadré « piège » du cours, qui dit exactement « pour
         $A = 1, B = 1$ : $A + B = 1$ mais $A \oplus B = 0$ », et l'exercice 2
         ($S = (A \oplus B) \cdot C$ sur $(1,0,1)$), qui fait au moins
         apparaître le XOR avec sa définition dans la correction (« vaut $1$
         si exactement une entrée vaut $1$ »). Ce renvoi-là est HONNÊTE et
         utile : il ne prétend pas piéger l'erreur, il donne à l'élève la
         définition écrite du XOR à côté d'un calcul qu'il sait faire, ce qui
         est le point d'appui du remède. Retenu pour cela, et préféré à
         l'exercice 5 (même moule, triplet $(0,1,0)$) parce que sa correction
         est la première du chapitre à énoncer la condition « exactement
         une ». */
      exercice: { type: "exercice", n: 2 },
      remede: "Prenez l'<strong>exercice $2$</strong> pour ce qu'il apporte, en le disant " +
              "franchement aux élèves : sa correction énonce la définition du XOR " +
              "(« vaut $1$ si <strong>exactement une</strong> entrée vaut $1$ ») à côté d'un " +
              "calcul simple. C'est le point d'appui — mais ce n'est pas un test.<br/><br/>" +
              "<strong>Car le livre a un angle mort, et il faut le combler vous-même.</strong> " +
              "Les huit énoncés du chapitre n'emploient que deux triplets, $(0,1,0)$ et $(1,0,1)$ : " +
              "dans les deux, $A$ et $B$ ne valent <strong>jamais $1$ ensemble</strong>. Or c'est " +
              "le seul cas où le OU et le XOR diffèrent. Vos élèves peuvent donc réussir les huit " +
              "exercices avec la mauvaise définition. Posez le cas manquant à l'oral : " +
              "« $A = 1$, $B = 1$, combien vaut $A + B$ ? et $A \\oplus B$ ? ». L'encadré " +
              "« piège » du cours le traite exactement.<br/><br/>" +
              "Nommez le conflit de langue, parce que c'est lui qui bloque : en français, " +
              "« fromage <strong>ou</strong> dessert » veut dire un seul des deux. En logique, " +
              "$A + B$ veut dire <strong>au moins un</strong>, les deux compris. Le « ou » du " +
              "restaurant, c'est le XOR ; le « ou » de Boole, c'est le OU inclusif.<br/><br/>" +
              "Le support technique qui ancre la différence : <strong>la lampe à deux " +
              "interrupteurs</strong>. Deux interrupteurs en parallèle allument la lampe si l'un " +
              "OU l'autre OU les deux sont fermés — c'est le OU. Le va-et-vient d'un couloir, lui, " +
              "allume quand les deux positions sont différentes : c'est le XOR, et c'est pour cela " +
              "qu'il est monté ainsi."
    },
    {
      titre: "Évaluer une expression parenthésée dans l'ordre d'écriture",
      eleve: "Pour $S = (A \\cdot B) + C$ avec $A = 1$, $B = 0$, $C = 1$, l'élève calcule de " +
             "gauche à droite sans hiérarchie : $1 \\cdot 0 = 0$, puis il enchaîne mal, ou bien " +
             "sur $\\overline{A \\cdot B} + C$ il complémente $A$ seul avant de multiplier.",
      cause: "En algèbre de Boole, le ET a priorité sur le OU — exactement comme la multiplication " +
             "sur l'addition — et la barre de complémentation porte sur <strong>tout ce qu'elle " +
             "couvre</strong>, ce qui en fait une parenthèse invisible. L'élève, lui, lit une " +
             "chaîne de symboles de gauche à droite. La notation est en cause autant que l'élève : " +
             "$\\overline{A \\cdot B}$ et $\\overline{A} \\cdot B$ ne diffèrent que par la " +
             "longueur d'un trait. C'est une erreur de lecture de notation, propre à la culture " +
             "formelle de ce chapitre.",
      /* RENVOI VÉRIFIÉ. Exercice 4 du livre (graine 20260816 + 8, quatrième
         tirage) : $S = \overline{A \cdot B} + C$ avec $A = 1$, $B = 0$,
         $C = 1$. Sa correction est en TROIS étapes explicitement ordonnées —
         « Calcul du ET : $A \cdot B = 1 \cdot 0 = 0$ », puis
         « Complémentation (NAND) : $\overline{0} = 1$ », puis « Calcul du
         OU : $1 + 1 = 1$ » — ce qui montre littéralement la hiérarchie
         d'évaluation que l'élève escamote : d'abord ce qui est sous la barre,
         puis la barre, puis le OU.
         COMPARÉ AUX AUTRES CANDIDATS : l'exercice 8 est le jumeau de moule
         (même expression, triplet $(0,1,0)$) et sa correction a la même
         structure en trois étapes — il conviendrait aussi. L'exercice 4 est
         retenu parce que son triplet $(1,0,1)$ met $A = 1$, ce qui rend la
         confusion VISIBLE : un élève qui complémente $A$ seul obtient
         $\overline{1} \cdot 0 = 0$ puis $0 + 1 = 1$, soit la même réponse par
         hasard, tandis que sur l'exercice 8 ($A = 0$) l'écart se voit moins
         bien encore. Le vrai motif du choix est donc la CORRECTION la plus
         démonstrative, pas le triplet : c'est le premier énoncé du chapitre
         dont le corrigé nomme les trois niveaux de priorité dans l'ordre.
         Les exercices 1, 3, 6, 7 n'ont que deux étapes (pas de barre), donc
         ne montrent pas la parenthèse invisible. Distinct du renvoi de
         l'erreur 2 (exercice 2), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 4 },
      remede: "L'<strong>exercice $4$</strong> est le meilleur support du chapitre pour ce point, " +
              "et c'est sa correction qui fait le travail : elle numérote les trois étapes dans " +
              "l'ordre exact de priorité — d'abord le <strong>ET</strong> sous la barre " +
              "($1 \\cdot 0 = 0$), ensuite la <strong>complémentation</strong> " +
              "($\\overline{0} = 1$), enfin le <strong>OU</strong> ($1 + 1 = 1$). Faites recopier " +
              "ces trois lignes, une par ligne, plutôt qu'un calcul en une seule " +
              "expression.<br/><br/>" +
              "Donnez la règle par l'<strong>analogie arithmétique</strong>, qui est exacte et " +
              "déjà connue : le <strong>ET se comporte comme la multiplication</strong>, le " +
              "<strong>OU comme l'addition</strong>. Dans $A \\cdot B + C$, on fait le produit " +
              "avant la somme, comme dans $2 \\times 3 + 4$. La notation du cours est faite pour " +
              "cela — c'est pour ça qu'on écrit le ET comme un produit.<br/><br/>" +
              "Traitez la <strong>barre comme une parenthèse</strong>, et faites-la réécrire pour " +
              "de bon : $\\overline{A \\cdot B}$ s'écrit $\\text{NON}(A \\cdot B)$, et " +
              "$\\overline{A} \\cdot B$ s'écrit $\\text{NON}(A) \\cdot B$. Deux expressions " +
              "différentes, que la barre seule distinguait par la longueur d'un trait. Dès qu'un " +
              "élève hésite, faites-lui écrire les parenthèses explicites : l'hésitation " +
              "disparaît."
    },
    {
      titre: "Ne pas voir qu'une variable disparaît lors d'une simplification",
      eleve: "Devant $S = A \\cdot B + A \\cdot \\overline{B}$, l'élève répond « ça dépend de $A$ " +
             "et de $B$ » et refuse la réponse $S = A$ : « on ne peut pas faire disparaître $B$, " +
             "elle est dans l'expression ».",
      cause: "L'élève croit qu'une variable présente dans l'écriture influence forcément le " +
             "résultat — ce qui est faux, et contre-intuitif. Ici $B + \\overline{B} = 1$ quelle " +
             "que soit la valeur de $B$ : la variable est bien là, mais elle n'a aucun effet. " +
             "S'y ajoute un obstacle propre au chapitre : l'élève n'a jamais VU une variable " +
             "disparaître, parce que les huit exercices ne simplifient jamais rien — ils évaluent " +
             "des expressions sur des valeurs numériques, où toutes les variables ont un rôle " +
             "apparent. La difficulté n'est donc pas un défaut de l'élève, c'est un manque du " +
             "corpus.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 2 est la seule simplification algébrique de tout le chapitre :
         « simplifier $S = A + \overline{A} \cdot B$ », bonne réponse
         $A + B$ — donc une expression où le $\overline{A}$ écrit DISPARAÎT du
         résultat, ce qui est exactement le phénomène à faire admettre. Sa
         correction est doublement utile : elle raisonne d'abord par CAS
         ($A = 1$ donne $S = 1$ ; $A = 0$ donne $S = B$), puis donne la preuve
         algébrique par distributivité. Les deux voies du remède y sont.
         COMPARÉ AUX CANDIDATS EXERCICES : les 8 énoncés tirés demandent tous
         d'ÉVALUER sur un triplet donné. AUCUN ne simplifie, aucun ne
         factorise, aucun ne manipule d'expression littérale. Renvoyer à l'un
         d'eux serait un contresens : l'exercice n'exige jamais ce qu'on
         reproche à l'élève de ne pas savoir faire. Le quiz 2 est le seul
         support du livre. Distinct du renvoi de l'erreur 1 (quiz 1). */
      exercice: { type: "quiz", n: 2 },
      remede: "Le <strong>quiz $2$</strong> est la seule simplification de tout le chapitre, et " +
              "c'est votre support : $S = A + \\overline{A} \\cdot B$ se simplifie en $A + B$ — le " +
              "$\\overline{A}$ écrit a disparu du résultat. Sa correction donne les deux " +
              "démonstrations, par cas puis par distributivité.<br/><br/>" +
              "Aucun exercice ne peut aider ici, et il faut le savoir : les huit énoncés du " +
              "chapitre évaluent des expressions sur des valeurs, ils n'en simplifient jamais " +
              "aucune. Vos élèves n'auront jamais vu une variable s'évanouir avant le devoir, où " +
              "<strong>deux questions sur cinq</strong> le demandent.<br/><br/>" +
              "La démonstration qui convainc, et elle ne demande aucune loi : le " +
              "<strong>raisonnement par cas</strong>. Sur $S = A \\cdot B + A \\cdot \\overline{B}$, " +
              "faites tester les deux valeurs de $A$. Si $A = 0$ : les deux termes sont nuls, " +
              "$S = 0$. Si $A = 1$ : $S = B + \\overline{B} = 1$. Dans les deux cas, $S$ vaut " +
              "exactement $A$ — <strong>et $B$ n'a jamais servi</strong>. L'élève le constate " +
              "lui-même, ce qui vaut mieux que de le lui affirmer.<br/><br/>" +
              "Reliez enfin la simplification à son <strong>sens industriel</strong>, qui est la " +
              "raison d'être du chapitre : $S = A$ se câble avec <strong>zéro porte</strong>, " +
              "là où $A \\cdot B + A \\cdot \\overline{B}$ en demande quatre. Simplifier, ce n'est " +
              "pas faire joli : c'est enlever des composants d'une carte, donc du coût et de la " +
              "consommation. Dit ainsi, la question « peut-on faire disparaître $B$ ? » devient " +
              "« peut-on enlever ces trois portes ? », et l'élève a envie de la réponse."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 (combien de lignes pour une table de vérité à $4$ entrées ? → $16$)
        → résoudre : application de $2^n$, calcul direct.
     Q2 (simplifier $\overline{\overline{A} + \overline{B}}$ par De Morgan
        → $A \cdot B$) → résoudre : application d'une loi à une expression
        littérale. C'est une transformation formelle guidée (« en utilisant
        De Morgan » est dans l'énoncé), donc une exécution de procédure, pas
        un choix de stratégie.
     Q3 (sortie du XOR pour $A = 1$ et $B = 1$ → $0$) → analyser :
        caractériser le comportement d'un opérateur dans le cas qui le
        distingue du OU. Aucun calcul n'est en jeu — c'est la définition
        même de l'opérateur qui est interrogée, sur le seul état où elle se
        joue. À rattacher à `analyser` comme les questions de restitution de
        l'ouvrage (voir REFERENTIELS dans prof.js).
     Q4 ($S = A \cdot B + A \cdot \overline{B}$ se simplifie en → $A$)
        → modéliser : ici RIEN n'indique la loi à employer, contrairement à la
        Q2. Il faut reconnaître une structure factorisable, choisir la
        factorisation, et admettre qu'une variable sort du modèle. C'est le
        travail de mise en forme d'une fonction logique, donc `modéliser`.
     Q5 ($A = 0$, $B = 1$, $C = 1$, calculer $S = (A + B) \cdot \overline{C}$
        → $0$) → résoudre : évaluation directe, le moule des huit exercices.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `communiquer` n'est pas mobilisé, ce qui est notable sur un chapitre dont
     le deuxième attendu parle de LOGIGRAMME : aucune question ne demande de
     dessiner ni de lire un schéma de portes, alors que le cours les présente.
     Si vous voulez évaluer `communiquer`, il faudra ajouter votre propre
     question — par exemple faire traduire $\overline{A \cdot B} + C$ en
     logigramme.
     `expérimenter` et `concevoir` ne sont pas mobilisés non plus, comme dans
     tout l'ouvrage. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'modéliser', 'résoudre']
  }
};
