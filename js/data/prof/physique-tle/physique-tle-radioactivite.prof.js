/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-radioactivite.prof.js
   Fiche professeur du chapitre « Radioactivité et réactions nucléaires »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 10 : 24 énoncés tirés — le tirage le plus court du
   niveau —, dont 12 numérotés et 12 en banque supplémentaire. Deux moules
   strictement alternés :
     - moule CONSERVATION DE Z (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : un Z et
       un type de désintégration donnés, on demande Z' du noyau fils ;
     - moule DEMI-VIE (exercices PAIRS 2, 4, 6, 8, 10, 12) : t_1/2 et t donnés,
       on demande la fraction N/N0 restante.
   FAIT NOTABLE : dans le moule pair, la durée t est TOUJOURS un multiple
   ENTIER de la demi-vie (1, 2, 3 ou 4 demi-vies), si bien que la réponse est
   toujours 0,5 ; 0,25 ; 0,125 ou 0,0625. Aucun exercice n'exige donc réellement
   l'exponentielle $N = N_0 e^{-\lambda t}$ : on compte des demi-vies. C'est une
   facilité qu'il faut signaler, car le baccalauréat, lui, ne la garantit pas.
   Aucun exercice non plus ne demande d'ÉCRIRE une équation de désintégration
   complète (seul Z est demandé, jamais A ni le symbole du noyau fils), ni ne
   fait intervenir $\lambda$, l'activité, la fission ou la fusion — pourtant
   quatre objets du cours. C'est ce qui contraint les erreurs 3 et 4 à rester
   sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-radioactivite"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale n'est un prérequis réel de celui-ci. Le
     chapitre se suffit à lui-même, et c'est une propriété rare qui mérite
     d'être dite : il pourrait être traité à n'importe quel moment de l'année
     du point de vue de la PHYSIQUE. Seules les mathématiques le contraignent
     (voir `rangConseille`).

     ch. 10 (Physique quantique) : ÉCARTÉ, et c'est le candidat le plus
     tentant — les deux chapitres parlent d'atomes, d'énergies en
     électronvolts, de particules émises. Mais ils portent sur deux objets
     différents : la quantique traite des ÉLECTRONS périphériques et de leurs
     transitions, la radioactivité du NOYAU et de sa stabilité. Aucune
     relation, aucune grandeur, aucune méthode ne passe de l'un à l'autre. Un
     élève qui n'aurait pas fait le ch. 10 suivrait celui-ci sans la moindre
     gêne — et réciproquement. Déclarer le prérequis ferait dire au tableau
     imprimé quelque chose de faux, et contraindrait l'ordre sans nécessité.
     L'usage commun de l'électronvolt et de $E = mc^2$ dans les deux chapitres
     est une coïncidence d'unités, pas une dépendance.

     ch. 9 (Ondes et signaux) : ÉCARTÉ. Les deux chapitres emploient la lettre
     lambda pour deux grandeurs sans rapport (longueur d'onde là-bas, constante
     radioactive ici), ce qui est une collision de notation — signalée dans la
     `note` — et non une dépendance.
     ch. 1 à 8 : aucun lien.

     LE PRÉREQUIS DÉCISIF EST MATHÉMATIQUE, pas physique, et il n'est pas
     déclarable : l'exponentielle et le logarithme népérien. Il est traité dans
     `note`, qui est imprimée, et il commande le rang conseillé. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 11, celui du livre, et ce rang est
     CONTRAINT — non par la physique, mais par les mathématiques.

     Le chapitre repose sur $N(t) = N_0 e^{-\lambda t}$ et sur
     $t_{1/2} = \ln 2 / \lambda$. L'exponentielle et le logarithme népérien sont
     traités en mathématiques de terminale au deuxième et au troisième
     trimestre selon les progressions. Placer ce chapitre au premier trimestre
     le rendrait inabordable : les élèves manipuleraient $e^{-\lambda t}$ et
     $\ln 2$ comme des suites de touches sur la calculatrice, sans aucun
     contrôle sur ce qu'ils écrivent — exactement le travers que la fiche du
     chapitre 7 signale pour le logarithme décimal.

     Le rang 11, dernière place de l'année, est donc le placement naturel : il
     garantit que l'outil mathématique a été vu. Si la progression de
     mathématiques de l'établissement traite l'exponentielle tôt, le chapitre
     peut remonter — il ne dépend d'aucun chapitre de physique. C'est
     l'enseignant de mathématiques qu'il faut consulter avant de le déplacer,
     pas le sommaire du manuel. */
  rangConseille: 11,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Utiliser les lois de conservation pour écrire l'équation d'une réaction nucléaire",
    "Exploiter la loi de décroissance radioactive et la notion de demi-vie pour déterminer la quantité de noyaux restants",
    "Utiliser la relation entre la variation de masse et l'énergie libérée lors d'une réaction nucléaire"
  ],

  note: "Le noyau, les désintégrations $\\alpha$, $\\beta^-$ et $\\beta^+$, les lois de " +
        "conservation de Soddy, la décroissance exponentielle, la demi-vie, la fission et la " +
        "fusion sont au programme de spécialité de terminale : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Ce chapitre ne dépend d'aucun chapitre de terminale, et la colonne " +
        "« S'appuie sur » affichera donc un tiret — c'est exact, et c'est même une " +
        "particularité.</strong> Le chapitre 10 (« Physique quantique ») en est le voisin dans le " +
        "livre, mais pas le prérequis : la quantique traite des <strong>électrons</strong> " +
        "périphériques, la radioactivité du <strong>noyau</strong>, et aucune relation ne passe de " +
        "l'un à l'autre. Du point de vue de la physique, ce chapitre pourrait être traité à " +
        "n'importe quel moment de l'année.<br/><br/>" +
        "<strong>Le prérequis décisif est mathématique, et c'est lui qui commande la place du " +
        "chapitre.</strong> Toute la décroissance repose sur l'<strong>exponentielle</strong> " +
        "($N(t) = N_0 e^{-\\lambda t}$) et sur le <strong>logarithme népérien</strong> " +
        "($t_{1/2} = \\ln 2 / \\lambda$). Ces deux fonctions sont vues en mathématiques au " +
        "deuxième ou au troisième trimestre selon les progressions. Placer ce chapitre au premier " +
        "trimestre le rendrait inabordable : les élèves appliqueraient $e^{-\\lambda t}$ comme une " +
        "suite de touches, sans aucun contrôle sur le résultat. Le rang 11 garantit que l'outil a " +
        "été vu ; si la progression de mathématiques de l'établissement traite l'exponentielle " +
        "tôt, le chapitre peut remonter sans difficulté. <strong>C'est l'enseignant de " +
        "mathématiques qu'il faut consulter avant de le déplacer</strong>, pas le sommaire du " +
        "manuel.<br/><br/>" +
        "<strong>Attention à deux collisions de notation, toutes deux dangereuses.</strong> La " +
        "lettre $\\lambda$ désigne ici la <strong>constante radioactive</strong> (en " +
        "jour$^{-1}$ ou s$^{-1}$) ; au chapitre 9, elle désignait une <strong>longueur " +
        "d'onde</strong>. Et la lettre $A$ désigne à la fois le <strong>nombre de masse</strong> " +
        "d'un noyau et l'<strong>activité</strong> d'un échantillon en becquerels — le piège du " +
        "cours le signale, et seul le contexte permet de trancher.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les vingt-quatre énoncés tirés " +
        "alternent deux moules : conservation du numéro atomique $Z$, et fraction restante après " +
        "un certain temps. Deux limites importantes. D'abord, dans le second moule, la durée est " +
        "<strong>toujours un multiple entier de la demi-vie</strong> : la réponse vaut " +
        "invariablement $0{,}5$ ; $0{,}25$ ; $0{,}125$ ou $0{,}0625$, et l'élève peut tout " +
        "réussir <strong>sans jamais utiliser l'exponentielle</strong>, en comptant des demi-vies. " +
        "C'est une facilité que le baccalauréat ne garantit pas : prévoir au moins un exercice où " +
        "$t$ n'est pas un multiple de $t_{1/2}$. Ensuite, aucun exercice ne demande d'écrire une " +
        "<strong>équation de désintégration complète</strong> (seul $Z'$ est demandé, jamais $A'$ " +
        "ni le symbole du noyau fils) — pourtant le premier attendu officiel —, et " +
        "<strong>aucun</strong> ne porte sur la <strong>fission</strong>, la <strong>fusion</strong> " +
        "ou la relation $|\\Delta E| = |\\Delta m|c^2$, qui constituent le troisième attendu " +
        "officiel. Prévoir un travail spécifique sur ces points, que le manuel ne fournit pas sous " +
        "forme d'exercice.",

  erreurs: [
    {
      titre: "Croire que la décroissance radioactive est linéaire",
      eleve: "L'élève affirme qu'« après deux demi-vies il ne reste plus rien, puisque la moitié " +
             "part à chaque fois : $50\\%$ puis $50\\%$, cela fait $100\\%$ ». Pour une durée de " +
             "quatre demi-vies, il annonce une fraction restante nulle ou négative, au lieu de " +
             "$0{,}0625$.",
      cause: "L'élève <strong>additionne des pourcentages</strong> au lieu de multiplier des " +
             "fractions. C'est le réflexe le plus solide de sa scolarité : les grandeurs qu'il " +
             "manipule depuis le collège s'ajoutent. Or la décroissance radioactive est " +
             "<strong>multiplicative</strong> : chaque demi-vie divise par deux ce qui " +
             "<strong>reste</strong>, pas ce qu'il y avait au départ. La deuxième demi-vie n'enlève " +
             "pas $50\\%$ du total mais $50\\%$ de la moitié, soit $25\\%$ du total. Le piège du " +
             "cours nomme exactement cette erreur, mais il se lit sans convaincre : rien dans " +
             "l'expérience de l'élève ne ressemble à une décroissance exponentielle.",
      remede: "Faire construire le <strong>tableau</strong> plutôt que d'énoncer la règle, car il " +
              "produit l'évidence : $N_0$, puis $N_0/2$, puis $N_0/4$, puis $N_0/8$, puis " +
              "$N_0/16$. Cinq lignes écrites, et la question « quand arrive-t-on à zéro ? » se " +
              "répond d'elle-même : jamais. On divise toujours par deux ce qui reste, et il reste " +
              "toujours quelque chose.<br/><br/>" +
              "Donner ensuite une <strong>analogie qui ne se discute pas</strong> : une feuille de " +
              "papier qu'on plie en deux, puis en deux encore. Après dix pliages, elle est " +
              "minuscule — mais elle existe toujours. Personne ne soutiendrait qu'elle disparaît au " +
              "deuxième pliage. C'est exactement le même calcul.<br/><br/>" +
              "Ancrer enfin sur une <strong>conséquence concrète</strong>, qui donne du poids à " +
              "l'idée : c'est précisément parce que la décroissance n'est jamais totale que les " +
              "déchets nucléaires restent dangereux si longtemps. On ne parle jamais de la date à " +
              "laquelle un échantillon sera « éteint » — elle n'existe pas — mais du temps au bout " +
              "duquel son activité devient négligeable. La différence n'est pas une subtilité de " +
              "cours, c'est ce qui structure toute la gestion des déchets radioactifs.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 10) : l'exercice 2 donne t_1/2 = 6 jours et
         t = 24 jours, soit exactement QUATRE demi-vies, réponse 0,0625. C'est
         avec l'exercice 10 (t_1/2 = 5 j, t = 20 j) le plus long en nombre de
         demi-vies du tirage, donc celui où l'erreur est la plus spectaculaire :
         l'élève qui additionne annonce « 200 % éliminés », c'est-à-dire un
         non-sens, alors qu'il reste en réalité un seizième de l'échantillon.
         Le renvoi pointe le 2 plutôt que le 10 parce qu'il vient tôt dans le
         chapitre, avant que l'habitude ne se prenne. Le tirage permet ensuite
         de construire le tableau du remède SANS RIEN INVENTER : l'exercice 4
         (1 demi-vie, 0,5), l'exercice 8 (2 demi-vies, 0,25), l'exercice 6
         (3 demi-vies, 0,125) et l'exercice 2 (4 demi-vies, 0,0625) donnent les
         quatre lignes dans l'ordre. C'est le meilleur usage possible de ce
         tirage, et il mérite d'être fait au tableau. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Se tromper de sens sur la variation de Z en désintégration bêta",
      eleve: "Pour un noyau de $Z = 6$ subissant une désintégration $\\beta^-$, l'élève annonce " +
             "$Z' = 5$ au lieu de $7$ : « bêta moins, donc $Z$ diminue de $1$ ». Le raisonnement " +
             "est cohérent et faux, et l'élève l'applique ensuite à tous les cas.",
      cause: "Le signe qui figure dans le nom de la désintégration est celui de la " +
             "<strong>particule émise</strong>, pas celui de la variation de $Z$ — et c'est même " +
             "l'inverse. En $\\beta^-$, un électron (charge $-1$) part : pour que la charge totale " +
             "se conserve, le noyau doit gagner une charge positive, donc " +
             "$Z$ <strong>augmente</strong>. En $\\beta^+$, un positon (charge $+1$) part, donc $Z$ " +
             "<strong>diminue</strong>. La règle mnémotechnique naturelle — « moins fait " +
             "diminuer » — est donc exactement contraire à la réalité, ce qui rend l'erreur " +
             "particulièrement tenace : l'élève a une raison de croire ce qu'il croit.",
      remede: "Ne jamais faire mémoriser le sens de variation, mais toujours le faire " +
              "<strong>retrouver par la conservation</strong>, qui est infaillible : on écrit " +
              "l'équation, on compte les charges à gauche et à droite, on équilibre. Pour " +
              "$\\beta^-$ : $^A_Z X \\rightarrow\\ ^A_{Z'} Y + ^{\\ 0}_{-1}e$, donc " +
              "$Z = Z' + (-1)$, donc $Z' = Z + 1$. Vingt secondes, et aucune mémoire " +
              "sollicitée.<br/><br/>" +
              "Faire ensuite dire <strong>ce qui se passe dans le noyau</strong>, ce qui donne du " +
              "sens à la règle au lieu de la laisser formelle : en $\\beta^-$, un " +
              "<strong>neutron devient proton</strong> — un proton de plus, donc $Z$ augmente. En " +
              "$\\beta^+$, un <strong>proton devient neutron</strong> — un proton de moins, donc " +
              "$Z$ diminue. La définition D2 du cours l'énonce exactement ainsi, et cette " +
              "formulation-là se retient parce qu'elle raconte quelque chose.<br/><br/>" +
              "Prévenir enfin explicitement contre la <strong>fausse mnémotechnique</strong>, car " +
              "elle se reforme spontanément : « bêta moins » ne veut pas dire « $Z$ moins ». Le " +
              "signe qualifie la particule qui part, jamais le noyau qui reste. Le dire une fois " +
              "clairement, en le désignant comme le piège qu'il est, vaut mieux que de le corriger " +
              "dix fois en aval.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne Z = 6
         et une désintégration bêta moins, réponse Z' = 7. C'est le meilleur
         support du tirage pour deux raisons. D'abord Z = 6 est le CARBONE et
         Z' = 7 l'AZOTE : c'est la désintégration du carbone 14, la plus connue
         de toutes, celle qui sert à la datation — l'ancrage culturel est
         gratuit et il aide. Ensuite les nombres sont assez petits pour être
         suivis mentalement, ce qui n'est pas le cas de l'exercice 11 (Z = 88
         en bêta moins, réponse 89). Le tirage fournit en outre le
         contre-exemple symétrique : l'exercice 3 (Z = 27 en bêta plus, réponse
         26) et l'exercice 9 (Z = 53 en bêta plus, réponse 52) montrent la
         variation INVERSE. Faire corriger le 5 puis le 3 à la suite installe
         l'opposition en une minute, sans discours. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Confondre le nombre de masse et l'activité, tous deux notés A",
      eleve: "Devant un énoncé mentionnant « $A = 226$ », l'élève cherche à convertir en " +
             "becquerels. Ou, devant une activité, il tente d'appliquer les lois de conservation " +
             "de Soddy. Il demande « laquelle des deux valeurs de $A$ faut-il prendre ? » devant un " +
             "énoncé qui n'en donne qu'une.",
      cause: "Une même lettre pour deux grandeurs sans aucun rapport : le <strong>nombre de " +
             "masse</strong> (un entier, sans unité, qui compte les nucléons) et l'<strong>activité" +
             "</strong> (un nombre de désintégrations par seconde, en becquerels, qui peut valoir " +
             "$10^{12}$). Le piège du cours signale explicitement cette ambiguïté et précise que " +
             "seul le contexte la lève. Mais un élève en situation d'évaluation n'a pas le recul " +
             "nécessaire pour lire un contexte : il cherche une règle, et il n'y en a pas.",
      remede: "Donner les <strong>trois indices de contexte</strong> qui tranchent " +
              "immédiatement, et les faire noter : la <strong>position</strong> (le nombre de masse " +
              "s'écrit en exposant à gauche du symbole, $^{226}_{88}Ra$ — jamais l'activité) ; " +
              "l'<strong>unité</strong> (une activité porte des becquerels, un nombre de masse " +
              "n'en porte aucune) ; l'<strong>ordre de grandeur</strong> (un nombre de masse va de " +
              "$1$ à environ $240$, une activité se compte souvent en millions). Trois critères " +
              "indépendants : il suffit qu'un seul réponde.<br/><br/>" +
              "Préférer ensuite, à l'écrit, la notation <strong>$a(t)$</strong> pour l'activité, " +
              "comme le font les formules du cours. Ce n'est pas une convention universelle, mais " +
              "c'est celle du manuel, et elle supprime l'ambiguïté dans les copies. L'exiger des " +
              "élèves les protège d'eux-mêmes.<br/><br/>" +
              "Rappeler enfin, pour donner un repère de sens, que les deux grandeurs ne décrivent " +
              "même pas le <strong>même objet</strong> : le nombre de masse caractérise " +
              "<strong>un noyau</strong>, l'activité caractérise <strong>un échantillon</strong> " +
              "entier, c'est-à-dire des milliards de milliards de noyaux. Demander l'activité d'un " +
              "noyau unique n'aurait aucun sens. Un élève qui a saisi cette différence d'échelle " +
              "ne les confond plus.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les vingt-quatre
         énoncés tirés ne mentionnent JAMAIS l'activité ni le becquerel. Le
         moule impair ne donne que Z et demande Z' (jamais A), le moule pair ne
         donne qu'une demi-vie et une durée. La lettre A n'apparaît dans aucun
         énoncé du chapitre — l'ambiguïté que le piège du cours signale n'est
         donc réalisée nulle part dans les exercices, alors qu'elle l'est au
         baccalauréat, où les énoncés donnent couramment un noyau complet
         (^226_88 Ra) ET une activité. L'erreur ne peut donc pas être remédiée
         par un exercice du chapitre : elle se remédie sur la notation, en
         amont. Le seul énoncé du livre à écrire un nombre de masse est la
         question 1 de l'évaluation (radium 226, A = 226, Z = 88), mais la
         règle éditoriale du projet interdit de renvoyer vers l'évaluation
         notée : on remédie avant d'évaluer. */
      exercice: null
    },
    {
      titre: "Croire que la masse se conserve dans une réaction nucléaire",
      eleve: "L'élève applique la conservation de la masse apprise en chimie et refuse la perte de " +
             "masse : « les nucléons sont les mêmes avant et après, donc la masse ne change pas, " +
             "donc $\\Delta m = 0$ et aucune énergie n'est libérée ». Ou bien il accepte la formule " +
             "mais ne comprend pas d'où vient l'énergie, et parle de matière « détruite ».",
      cause: "Toute la chimie de la seconde à la terminale repose sur la conservation de la " +
             "masse — c'est même ce qui permet d'équilibrer une équation. Les lois de Soddy, qui " +
             "ouvrent ce chapitre, conservent d'ailleurs $A$ et $Z$, ce qui renforce l'idée. Mais " +
             "$A$ compte des <strong>nucléons</strong>, pas des <strong>kilogrammes</strong> : le " +
             "nombre de nucléons se conserve, leur masse totale non, parce que l'énergie de " +
             "liaison du noyau final diffère de celle du noyau initial. Rien dans la scolarité " +
             "antérieure ne prépare à cette distinction, et l'élève a de bonnes raisons de " +
             "résister.",
      remede: "Distinguer nettement les <strong>deux conservations</strong>, qui sont toutes deux " +
              "vraies et ne parlent pas de la même chose : le <strong>nombre</strong> de nucléons " +
              "se conserve (lois de Soddy), la <strong>masse</strong> totale ne se conserve pas. " +
              "Il n'y a pas de contradiction : un nucléon lié dans un noyau n'a pas la même masse " +
              "effective qu'un nucléon lié dans un autre, parce que l'énergie de liaison " +
              "diffère.<br/><br/>" +
              "Nommer alors ce que dit vraiment $E = mc^2$, car l'élève l'a entendue sans jamais " +
              "l'avoir comprise : la masse est une <strong>forme d'énergie</strong>, pas une " +
              "substance distincte. Rien n'est détruit ; une partie de l'énergie qui était " +
              "« stockée sous forme de masse » est libérée sous une autre forme. C'est un " +
              "changement de forme, exactement comme l'énergie potentielle devenant cinétique au " +
              "chapitre 4 — et faire ce rapprochement-là dédramatise beaucoup.<br/><br/>" +
              "Faire enfin sentir l'<strong>ordre de grandeur</strong>, qui explique pourquoi " +
              "personne n'a jamais remarqué ce phénomène en chimie : le facteur $c^2$ vaut " +
              "$9\\times10^{16}$, si bien qu'un milligramme de masse perdue libère " +
              "$9\\times10^{10}$ joules. Réciproquement, une réaction chimique ordinaire perd une " +
              "masse si infime qu'aucune balance ne peut la mesurer. La conservation de la masse en " +
              "chimie n'est donc pas fausse : c'est une excellente approximation, et le dire ainsi " +
              "évite à l'élève de croire qu'on lui a menti pendant quatre ans.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : AUCUN des
         vingt-quatre énoncés tirés ne porte sur la fission, la fusion, une
         perte de masse ou la relation E = mc². Le générateur ne produit que
         deux moules — conservation de Z, et fraction restante — et le
         troisième attendu officiel du chapitre (« utiliser la relation entre
         la variation de masse et l'énergie libérée ») n'est travaillé par
         aucun exercice, alors que la relation figure dans les formules du
         cours et dans sa méthode 3. Le seul support du livre est la question 5
         de l'évaluation (|delta m| = 1,0e-29 kg, énergie en MeV), mais la
         règle éditoriale du projet interdit de renvoyer vers l'évaluation
         notée : on remédie avant d'évaluer. C'est la limite la plus sérieuse
         signalée dans la `note`, et elle appelle un exercice écrit par
         l'enseignant — d'autant que la conversion joules/MeV, qui n'apparaît
         nulle part ailleurs, s'y apprend. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — radium 226 en désintégration $\alpha$, calculer $A'$. La conservation
          du nombre de masse est donnée dans la définition D3, et la particule
          $\alpha$ est identifiée dans D2 comme un noyau d'hélium ($A = 4$) :
          il reste à soustraire. Exécution : « réaliser ».
     Q2 — que se passe-t-il dans le noyau lors d'une désintégration $\beta^-$ ?
          Restitution de la définition D2, avec la transformation inverse
          (proton en neutron) en distracteur — exactement l'erreur 2 de cette
          fiche : « s'approprier ».
     Q3 — $t_{1/2} = 5{,}0$ ans, fraction restante après $20$ ans. Il faut
          d'abord reconnaître que la durée vaut QUATRE demi-vies, puis appliquer
          $(1/2)^n$. Ce passage du temps au nombre de demi-vies est un choix de
          méthode — c'est d'ailleurs celui que le cours recommande pour
          « éviter le calcul complet de l'exponentielle » : « analyser ». C'est
          l'erreur 1 de cette fiche.
     Q4 — comment $t_{1/2}$ et $\lambda$ sont-ils reliés ? Restitution de la
          définition D4, avec trois variantes fausses de la même relation en
          distracteurs : « s'approprier ».
     Q5 — perte de masse donnée, calculer l'énergie en MeV. Deux étapes : la
          relation $|\Delta E| = |\Delta m|c^2$ puis une conversion joules vers
          MeV, toutes deux fournies par l'énoncé et les formules du cours.
          Enchaînement direct : « réaliser ». À noter : c'est la SEULE
          apparition de la relation d'Einstein dans tout le chapitre, exercices
          compris — voir la `note`.

     « Valider » et « communiquer » ne sont pas mobilisés, et c'est une perte
     réelle sur ce chapitre. « Valider » aurait naturellement porté sur la
     non-linéarité de la décroissance (« après deux demi-vies, il ne reste
     plus rien : vrai ou faux ? »), qui est l'erreur 1 de cette fiche et le
     piège du cours — aucune question ne la met en jeu sous forme de jugement.
     Et aucune question ne demande d'explication rédigée, alors que le premier
     attendu officiel — écrire une équation de réaction nucléaire — appelle
     précisément une production écrite. On ne maquille pas ces absences. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "s'approprier", "réaliser"]
  }
};
