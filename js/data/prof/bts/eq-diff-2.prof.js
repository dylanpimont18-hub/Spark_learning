/* =========================================================
   Spark Learning – js/data/prof/bts/eq-diff-2.prof.js
   Fiche professeur du chapitre « Équations Différentielles du 2nd Ordre »
   (programme BTS), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   ATTENTION AU NOM DU FICHIER. L'`id` du module est `eq-diff-2`, SANS le
   préfixe `bts-` que portent la plupart des autres chapitres du dossier.
   `chargerProf()` construit le chemin de la fiche à partir de l'`id`, pas du
   nom du fichier de données : un fichier nommé `bts-eq-diff-2.prof.js` ne
   serait JAMAIS trouvé, et l'ouvrage compilerait « 12 fiches sur 13 » sans
   le moindre message d'erreur. Deux autres chapitres du dossier sont dans ce
   cas : `complexes` et `statistiques`.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 15 (ce chapitre est le seizième de `bts-maths` : les
   quatorze de `bts-prep` le précèdent).

   21 énoncés tirés, dont 12 numérotés et 9 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun donne $\alpha$ et $\omega_0$ en
   rad/s et demande $\Delta = 4(\alpha^2 - \omega_0^2)$ puis le régime. Seuls
   le contexte (sismomètre, immeuble au vent, haut-parleur, bras de robot,
   suspension, ferme-porte, circuit RLC) et le couple de valeurs changent.

   Le tirage est cependant MOINS pauvre qu'il n'y paraît, et c'est important
   pour la fiche : les douze valeurs de Delta se répartissent en 8 négatives
   (pseudo-périodique) et 4 positives (apériodique). L'enseignant dispose
   donc des deux régimes, ce qui rend possible un vrai travail de lecture du
   signe. En revanche AUCUN tirage ne donne Delta = 0 : le régime CRITIQUE,
   qui est le plus important des trois en automatique et qui fait l'objet de
   la question 2 du devoir, n'est jamais rencontré.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours le
   définit : le facteur de qualité $Q$ (D3), la pseudo-pulsation $\omega_p$
   (D4), le passage de $R$, $L$, $C$ à $\alpha$ et $\omega_0$ (formules), et
   l'équation caractéristique elle-même (méthode 1). Or trois des cinq
   questions de l'évaluation portent là-dessus.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["eq-diff-2"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 1 (Les Nombres Complexes, `complexes`) : RETENU. Le lien n'est pas
     décoratif, il est au cœur du chapitre. Quand $\Delta < 0$ — c'est-à-dire
     dans huit des douze exercices tirés — l'équation caractéristique
     $r^2 + 2\alpha r + \omega_0^2 = 0$ n'a pas de racine réelle : ses racines
     sont $r = -\alpha \pm j\omega_p$, et c'est exactement de là que sort la
     pseudo-pulsation $\omega_p = \sqrt{\omega_0^2 - \alpha^2}$. Un étudiant
     qui n'a pas rencontré $j$ ne peut pas comprendre pourquoi un discriminant
     négatif produit des OSCILLATIONS plutôt que rien du tout : il l'apprend
     par cœur. Le chapitre 1 lui donne le sens.

     Candidats examinés et ÉCARTÉS :
     - ch. 13 (Transformée de Laplace) : le lien est réel et fort — Laplace
       résout précisément les équations différentielles — mais il joue dans
       l'AUTRE sens. C'est Laplace qui s'appuie sur les équations
       différentielles, pas l'inverse ; le déclarer ici créerait un cycle que
       `validerPrerequis` refuse, à juste titre. C'est la fiche de Laplace
       qui porte ce prérequis.
     - ch. 5 (Fonctions réelles) et ch. 6 (Dérivation appliquée) : la dérivée
       intervient, évidemment, puisqu'on écrit $y''$ et $y'$. Mais elle n'est
       jamais CALCULÉE dans ce chapitre : la méthode consiste à remplacer
       $y''$ par $r^2$ et $y'$ par $r$, ce qui est un geste formel. Aucun des
       douze exercices ne demande de dériver quoi que ce soit. Le prérequis
       serait donc affiché sans être utilisé, ce qui trompe le lecteur du
       tableau autant qu'un prérequis manquant.
     - ch. 3 (Statistiques) à ch. 12 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la résolution d'une
     équation du second degré et surtout le rôle du DISCRIMINANT viennent du
     chapitre 3 de la REMISE À NIVEAU (`bts-prep-second-degre`), et le calcul
     sur les puissances et racines carrées de la même partie. `prerequis` ne
     vise qu'un chapitre du même dossier, donc rien ne les affichera. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 2 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 16 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 2 est celui du livre, et les deux ordres coïncident.

     Le placement est contraint par le chapitre 1 (Complexes), qui doit
     précéder pour que le discriminant négatif ait un sens. Il l'est aussi,
     plus faiblement, par l'intérêt de garder ce chapitre LOIN devant le
     chapitre 13 (Laplace), qui le reprend intégralement dans un autre
     formalisme : l'étudiant doit avoir résolu une équation différentielle
     « à la main » avant qu'on lui montre l'outil qui la rend algébrique,
     faute de quoi Laplace n'est plus un raccourci mais une recette. */
  rangConseille: 2,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et les équations différentielles du second ordre à
     coefficients constants relèvent des groupements industriels
     (électrotechnique, mécanique, automatique) comme de plusieurs BTS du
     bâtiment.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« équation caractéristique », « discriminant et régimes », « lecture
     physique ») et n'inventent aucune spécialité. La `note` le signale
     explicitement, pour qu'un enseignant vérifie le référentiel de SA filière
     avant de les citer. */
  attendus: [
    "Écrire l'équation caractéristique associée à une équation différentielle linéaire du second ordre à coefficients constants",
    "Calculer le discriminant et en déduire la forme des solutions selon son signe",
    "Interpréter le régime obtenu (pseudo-périodique, critique, apériodique) dans le contexte du système étudié"
  ],

  note: "Les équations différentielles linéaires du second ordre à coefficients constants — équation " +
        "caractéristique, discriminant, trois régimes d'amortissement — relèvent du tronc commun de " +
        "mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Le chapitre s'appuie sur " +
        "« Les Nombres Complexes » (chapitre 1 de cette partie), qui donne son sens au discriminant " +
        "négatif — cela, la colonne « S'appuie sur » l'affiche. Mais il suppose aussi de savoir " +
        "manier un <strong>discriminant du second degré</strong> et une <strong>racine carrée</strong>, " +
        "qui sont dans la <strong>remise à niveau</strong>, l'autre partie de l'ouvrage. Un prérequis " +
        "ne pouvant viser qu'un chapitre de la même partie, <strong>rien ne le montrera</strong> : si " +
        "le groupe bute sur le signe de $\\Delta$ avant même d'ouvrir ce chapitre, c'est là qu'il " +
        "faut revenir.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les douze énoncés numérotés sont <strong>tous le même exercice</strong> : $\\alpha$ et " +
        "$\\omega_0$ sont donnés, on calcule $\\Delta = 4(\\alpha^2 - \\omega_0^2)$ et on nomme le " +
        "régime. Bonne nouvelle : les douze tirages donnent <strong>huit $\\Delta$ négatifs et " +
        "quatre positifs</strong>, donc les deux régimes sont représentés et la lecture du signe se " +
        "travaille vraiment. Mauvaise nouvelle : <strong>aucun tirage ne donne $\\Delta = 0$</strong>. " +
        "Le <strong>régime critique</strong> — le plus important des trois en automatique, celui " +
        "qu'on recherche dans tout asservissement bien réglé, et l'objet de la question 2 du devoir " +
        "noté — n'est <strong>jamais rencontré en exercice</strong>. Il faudra le fabriquer : " +
        "n'importe quel couple $\\alpha = \\omega_0$ convient, par exemple $\\alpha = 3$ et " +
        "$\\omega_0 = 3$.<br/><br/>" +
        "Ne sont pas travaillés non plus : le <strong>facteur de qualité</strong> $Q$ (D3), la " +
        "<strong>pseudo-pulsation</strong> $\\omega_p$ (D4) et le passage de $R$, $L$, $C$ à " +
        "$\\alpha$ et $\\omega_0$ — alors que ce sont trois des cinq questions du devoir. L'exemple " +
        "résolu du cours (le circuit RLC à $R = 40$ Ω) fait, lui, le chemin complet : " +
        "<strong>c'est lui qu'il faut prendre comme modèle de la tâche attendue</strong>, et non les " +
        "exercices.",

  erreurs: [
    {
      titre: "Lire le signe de $\\Delta$ à l'envers",
      eleve: "L'élève calcule correctement $\\Delta = 4(4 - 9) = -20$, puis annonce « $\\Delta < 0$, " +
             "donc pas de solution, le système n'oscille pas ». Il conclut à un régime apériodique " +
             "là où il y a des oscillations, et inversement sur $\\Delta > 0$.",
      cause: "C'est le transfert d'une règle vraie, apprise au lycée et jamais démentie depuis : " +
             "« $\\Delta < 0$ : pas de solution ». Elle est exacte pour une équation du second degré " +
             "qu'on résout DANS LES RÉELS, et c'est le seul cadre que l'étudiant a connu. Ici, " +
             "l'équation caractéristique n'est pas une équation à résoudre pour elle-même : c'est un " +
             "<strong>test de nature</strong>, et $\\Delta < 0$ ne dit pas « rien » mais " +
             "« racines complexes », donc « oscillations ». La règle ancienne fonctionne parfaitement " +
             "dans son domaine — et c'est précisément pour cela qu'elle est appliquée avec assurance " +
             "hors de lui.",
      remede: "Faire le lien <strong>explicitement avec le chapitre 1</strong>, et pas en passant : " +
              "$\\Delta < 0$ donne $r = -\\alpha \\pm j\\omega_p$. Le $j$ n'est pas un accident de " +
              "calcul, c'est <strong>la signature de l'oscillation</strong> — c'est lui qui produit " +
              "les sinus dans la solution. Écrit une fois au tableau, ce lien remplace une règle " +
              "arbitraire par une conséquence.<br/><br/>" +
              "Installer la <strong>lecture physique du signe</strong>, qui est mémorisable et ne " +
              "s'inverse pas : $\\Delta < 0$ signifie $\\alpha < \\omega_0$, c'est-à-dire " +
              "<strong>l'amortissement est plus faible que la tendance à osciller</strong> — le " +
              "système oscille en s'éteignant. $\\Delta > 0$ signifie $\\alpha > \\omega_0$ : " +
              "<strong>l'amortissement l'emporte</strong>, le système revient sans osciller. Formulée " +
              "en français plutôt qu'en signes, la règle est difficile à prendre à " +
              "l'envers.<br/><br/>" +
              "Ancrer enfin sur une <strong>image que tout le monde a en tête</strong> : la porte " +
              "d'entrée avec son ferme-porte. Mal réglé, elle claque en oscillant (pseudo-" +
              "périodique) ; trop serré, elle met dix secondes à se fermer (apériodique) ; bien " +
              "réglé, elle arrive au chambranle sans rebondir (critique). C'est d'ailleurs " +
              "littéralement l'un des contextes du chapitre, et l'étudiant peut vérifier la théorie " +
              "en sortant de la salle.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 15) : l'exercice 5 est la suspension de voiture,
         alpha = 2 rad/s, omega_0 = 3 rad/s, Delta = 4(4 - 9) = -20, donc
         régime pseudo-périodique. C'est LE support de cette erreur pour une
         raison précise : Delta y est NÉGATIF et le régime est pourtant celui
         où « il se passe quelque chose » (la caisse oscille après le
         nid-de-poule), ce qui contredit frontalement le « pas de solution »
         du lycée. Le contexte aide : chacun a senti une voiture rebondir sur
         un dos-d'âne, personne ne croira que rien ne se passe.
         Choix du 5 plutôt que du 4 (robot, alpha = 3, omega_0 = 4,
         Delta = -28) ou du 7 (RLC, Delta = -80) : le 5 a les plus petits
         nombres du tirage négatif, donc le calcul ne masque pas la lecture du
         signe, qui est le vrai objet de la remédiation. L'exercice 6
         (ferme-porte) porte exactement les mêmes valeurs alpha = 2,
         omega_0 = 3 et le même Delta = -20 : il est le doublon parfait du 5
         et sert de deuxième support si le groupe en redemande. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Confondre la pulsation propre $\\omega_0$ et la pseudo-pulsation $\\omega_p$",
      eleve: "L'élève a trouvé $\\omega_0 = 10$ rad/s et $\\alpha = 6$ rad/s, et annonce que le " +
             "système oscille à $10$ rad/s. Il donne la pulsation du système NON amorti là où la " +
             "question porte sur les oscillations réelles, qui se font à " +
             "$\\omega_p = \\sqrt{100 - 36} = 8$ rad/s.",
      cause: "Les deux grandeurs portent la même lettre à un indice près, se mesurent dans la même " +
             "unité et décrivent la même chose — une vitesse d'oscillation. Rien dans la notation ne " +
             "les sépare, et $\\omega_0$ a en plus l'avantage d'être DONNÉE dans l'énoncé quand " +
             "$\\omega_p$ demande un calcul. L'étudiant prend donc celle qu'il a sous la main, ce qui " +
             "est un comportement rationnel. S'y ajoute une intuition fausse mais très répandue : on " +
             "imagine que le frottement ne fait que « réduire l'amplitude », alors qu'il " +
             "<strong>ralentit aussi</strong> l'oscillation.",
      remede: "Dire ce que chacune désigne, en une phrase et sans symbole : $\\omega_0$ est la " +
              "pulsation <strong>si l'on supprimait tout frottement</strong> — un idéal de calcul, " +
              "qui n'est jamais observé ; $\\omega_p$ est la pulsation <strong>réellement mesurée à " +
              "l'oscilloscope</strong>. La première est une donnée du modèle, la seconde un résultat " +
              "d'expérience.<br/><br/>" +
              "Faire retenir l'<strong>inégalité et son sens</strong> : $\\omega_p < \\omega_0$, " +
              "<strong>toujours</strong>, puisque $\\omega_p = \\sqrt{\\omega_0^2 - \\alpha^2}$ " +
              "retranche quelque chose. L'amortissement ne fait pas que réduire l'amplitude, il " +
              "<strong>ralentit</strong> l'oscillation. Cela donne un contrôle immédiat : une " +
              "pseudo-pulsation supérieure à la pulsation propre est fausse, sans même relire le " +
              "calcul.<br/><br/>" +
              "Ancrer sur une <strong>conséquence métier</strong> qui rend la distinction coûteuse à " +
              "ignorer : en analyse vibratoire, on identifie un défaut de roulement à la fréquence " +
              "relevée sur le spectre. Chercher $\\omega_0$ quand la machine tourne à $\\omega_p$, " +
              "c'est chercher une raie au mauvais endroit et déclarer la machine saine. L'écart " +
              "n'est pas négligeable : pour $\\omega_0 = 10$ et $\\alpha = 6$, il est de " +
              "<strong>$20\\,\\%$</strong>.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés s'arrêtent à Delta et au NOM du régime. Aucun ne
         demande omega_p, et aucun ne demande Q — le mot « pseudo-pulsation »
         n'apparaît dans aucun des douze énoncés. L'élève ne peut donc pas
         rencontrer la confusion en faisant les exercices : elle ne surgit
         qu'au devoir (question 5) et en situation professionnelle. Pointer
         l'un des douze enverrait l'enseignant vers une remédiation qui n'en
         est pas une. Le seul support du livre est l'exemple résolu du cours
         (RLC, R = 40 Ω, L = 0,1 H, C = 100 µF), qui va jusqu'à
         omega_p ≈ 245 rad/s contre omega_0 ≈ 316 : les deux nombres y sont
         côte à côte, ce qui est exactement ce qu'il faut montrer. C'est vers
         lui que le remède ramène. */
      exercice: null
    },
    {
      titre: "Oublier le facteur $4$ ou se tromper de signe dans $\\Delta = 4(\\alpha^2 - \\omega_0^2)$",
      eleve: "Sur $\\alpha = 5$ et $\\omega_0 = 1$, l'élève écrit $\\Delta = 5^2 - 1^2 = 24$ (il a " +
             "oublié le facteur $4$), ou $\\Delta = 4(\\omega_0^2 - \\alpha^2) = -96$ (il a inversé " +
             "les deux termes), ou encore $\\Delta = 4 \\times 5^2 - 1^2 = 99$ (il n'a distribué le " +
             "$4$ que sur le premier terme).",
      cause: "La formule superpose trois sources d'erreur dans un espace typographique minuscule : " +
             "un facteur devant la parenthèse, un carré sur chaque terme, et une soustraction dont " +
             "l'ordre compte. La <strong>distributivité partielle</strong> est de loin la plus " +
             "fréquente, et elle ne relève pas de l'étourderie : l'œil lit le $4$ comme collé au " +
             "premier terme, parce que c'est de lui qu'il est le plus proche. Chez un adulte qui a " +
             "reconstruit ses automatismes de calcul sur le tas, le parenthésage n'est plus une " +
             "habitude motrice — il faut le repenser à chaque fois.",
      remede: "Faire calculer en <strong>trois étapes séparées, une par ligne</strong> : (1) " +
              "$\\alpha^2$ et $\\omega_0^2$, (2) la <strong>différence</strong>, dans cet ordre, " +
              "(3) la multiplication par $4$. Écrite ainsi, l'étape sautée se voit — c'est une ligne " +
              "qui manque. En une seule expression, elle est invisible.<br/><br/>" +
              "Donner le <strong>raccourci qui dispense du facteur $4$</strong> pour la lecture du " +
              "régime, car c'est souvent tout ce qu'on demande : multiplier par $4$ ne change " +
              "<strong>pas le signe</strong>. Comparer $\\alpha$ et $\\omega_0$ suffit donc à " +
              "trancher — si $\\alpha < \\omega_0$, le régime est pseudo-périodique, point. Le " +
              "facteur $4$ ne sert que si l'on veut la valeur numérique de $\\Delta$. Dit une fois, " +
              "cela retire à l'erreur la moitié de ses occasions.<br/><br/>" +
              "Installer enfin un <strong>contrôle de cohérence</strong> propre au chapitre : le " +
              "signe de $\\Delta$ doit s'accorder avec la comparaison de $\\alpha$ et $\\omega_0$ " +
              "faite à l'œil sur l'énoncé. Si $\\alpha = 5$ est visiblement plus grand que " +
              "$\\omega_0 = 1$ mais que le calcul rend un $\\Delta$ négatif, l'erreur est dans le " +
              "calcul et non dans la lecture : on ne relit pas tout, on relit la ligne du signe.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 est le
         capteur sismique, alpha = 5 rad/s, omega_0 = 1 rad/s,
         Delta = 4(25 - 1) = 96, régime apériodique. C'est le meilleur support
         des trois variantes de l'erreur, et c'est l'écart entre les deux
         valeurs qui le rend meilleur que les autres :
           - oubli du facteur 4 : on obtient 24 au lieu de 96, soit un
             rapport de 4 impossible à confondre avec un arrondi ;
           - inversion des termes : on obtient -96 au lieu de +96, et le
             régime annoncé bascule de apériodique à pseudo-périodique, donc
             l'erreur se paie immédiatement sur la conclusion ;
           - distributivité partielle : 4 × 25 - 1 = 99 au lieu de 96, un
             écart PETIT et donc pédagogiquement précieux — c'est la seule
             variante qui ne se voit pas à l'ordre de grandeur, et c'est
             exactement ce qu'il faut montrer pour justifier le calcul en
             trois lignes.
         C'est en outre le premier énoncé du chapitre, donc celui sur lequel
         l'enseignant peut imposer la disposition dès le départ. Distinct du
         renvoi de l'erreur 1 (exercice 5) et de celui de l'erreur 4
         (exercice 11), conformément à la règle du projet : deux erreurs d'un
         même chapitre ne pointent jamais le même énoncé. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Rendre un discriminant sans nommer le régime ni le traduire",
      eleve: "L'élève écrit « $\\Delta = 20$ » et s'arrête là, alors que l'énoncé demande " +
             "explicitement « et détermine le régime de fermeture de la porte ». Ou bien il écrit " +
             "« apériodique » sans pouvoir dire ce que la porte fait réellement — se ferme-t-elle " +
             "vite ? lentement ? en claquant ?",
      cause: "Le calcul de $\\Delta$ produit un nombre, et l'habitude scolaire veut que la réponse " +
             "soit le résultat du calcul. La deuxième moitié de la consigne se lit alors comme un " +
             "habillage, d'autant qu'elle ne demande aucun calcul : elle n'a pas l'air d'être du " +
             "travail. Quand la réponse « apériodique » vient quand même, elle est souvent " +
             "<strong>récitée sans contenu</strong> — trois mots savants appris ensemble, dont " +
             "l'étudiant ne sait pas lequel décrit un système qui oscille. Ce n'est pas de la " +
             "négligence : c'est un vocabulaire technique acquis en bloc, sans image associée, " +
             "comme il arrive souvent quand on reprend des études après plusieurs années.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : le signe de $\\Delta$, le <strong>nom</strong> du régime, et ce que " +
              "le système <strong>fait</strong> concrètement. « $\\Delta = 20 > 0$, régime " +
              "apériodique : la porte se referme lentement, sans claquer ni rebondir » plutôt que " +
              "« $\\Delta = 20$ ». C'est ce que l'énoncé demande, et c'est ce que l'épreuve " +
              "évalue.<br/><br/>" +
              "Construire une <strong>table des trois régimes</strong> en début de chapitre, avec " +
              "pour chacun le signe, le nom, le comportement en une image, et un exemple " +
              "d'équipement. Elle tient en six lignes au tableau et supprime l'apprentissage en " +
              "bloc : chaque mot savant est accroché à quelque chose qu'on a vu " +
              "bouger.<br/><br/>" +
              "Poser enfin la <strong>question inverse, à l'oral</strong>, qui vaut tous les " +
              "exercices : « ce ferme-porte est en régime apériodique — le client se plaint. De " +
              "quoi ? ». La réponse attendue (« la porte est trop lente, les gens la poussent, le " +
              "mécanisme s'use ») montre que le régime n'est pas une étiquette mais un " +
              "<strong>diagnostic</strong>. C'est exactement la compétence que l'épreuve cherche, " +
              "et c'est celle que le calcul seul ne construit jamais.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 11 est le
         ferme-porte, alpha = 3 rad/s, omega_0 = 2 rad/s, Delta = 4(9 - 4) =
         20, régime apériodique. Il est choisi pour trois raisons convergentes :
           - son Delta est POSITIF, donc le régime est apériodique, et c'est
             le cas où l'interprétation est la moins intuitive (rien n'oscille,
             donc l'étudiant a du mal à dire ce qui se passe) ;
           - son contexte est le seul du tirage dont l'étudiant a l'expérience
             physique quotidienne, ce qui permet d'exiger une traduction
             vérifiable plutôt qu'une formule ;
           - l'énoncé demande LITTÉRALEMENT « détermine le régime de fermeture
             de la porte », c'est-à-dire qu'il réclame déjà l'interprétation
             que l'élève omet. Le renvoi est donc légitime au sens strict du
             projet : l'exercice EXIGE ce qu'on reproche à l'élève de ne pas
             faire, contrairement au cas de l'erreur 2.
         Les trois autres exercices à Delta positif sont le 1 (déjà pris par
         l'erreur 3), le 2 (immeuble au vent, Delta = 140) et le 3
         (haut-parleur, Delta = 36) ; le 2 et le 3 conviendraient aussi, mais
         leurs contextes sont moins familiers. */
      exercice: { type: "exercice", n: 11 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\alpha = 4$, $\omega_0 = 10$, calculer $\Delta = 4(\alpha^2 - \omega_0^2)$.
          La formule est donnée dans l'énoncé, les valeurs aussi : exécution
          d'une procédure connue sur des nombres donnés. « calculer ».
     Q2 — « le régime critique est celui qui : », avec « produit le plus
          d'oscillations », « n'existe que pour $R = 0$ » et « correspond à
          $\alpha = 0$ » en distracteurs. Aucun calcul : il faut juger la
          validité de quatre affirmations et distinguer le régime critique de
          ses deux voisins. « raisonner ».
     Q3 — $R$, $L$, $C$ donnés, calculer $\omega_0 = 1/\sqrt{LC}$. La formule
          est fournie ; le travail est l'application numérique avec la
          conversion des microfarads. Aucun choix de méthode : « calculer ».
     Q4 — $Q = 0{,}3$ : quel régime ? Les trois seuils ($Q > 0{,}5$,
          $Q = 0{,}5$, $Q < 0{,}5$) figurent dans les options elles-mêmes, ce
          qui pourrait faire croire à une simple comparaison. Mais la tâche
          réelle est de DÉCIDER entre trois conditions voisines et d'écarter
          la quatrième option (« impossible à déterminer ») qui conteste la
          possibilité même de conclure. C'est un jugement de validité :
          « raisonner ».
     Q5 — $\omega_0 = 10$, $\alpha = 6$, calculer $\omega_p = \sqrt{\omega_0^2 - \alpha^2}$.
          Formule donnée, application numérique : « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 2. « chercher »,
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de mettre une situation
     en équation, de produire ou lire un graphique, ni de rédiger une
     explication. C'est un constat sur les cinq énoncés, pas un choix — et il
     rejoint celui du corpus entier, dont les 130 questions sont toutes
     `numeric` ou à choix multiple.

     À signaler : la Q2 porte sur le régime CRITIQUE, que les douze exercices
     ne font jamais rencontrer (aucun tirage ne donne $\Delta = 0$, voir la
     `note`). Un étudiant qui n'aurait fait que les exercices découvrirait ce
     régime le jour du devoir, et seulement par son nom. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "calculer"]
  }
};
