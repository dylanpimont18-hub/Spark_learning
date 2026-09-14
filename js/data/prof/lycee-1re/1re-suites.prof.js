/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-suites.prof.js
   Fiche professeur du chapitre « Suites numériques » (première), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js
   le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote de la première
   (1re-derivation.prof.js), conventions et commentaires compris.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-suites"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE. Le chapitre visé doit avoir un
     rang conseillé STRICTEMENT INFÉRIEUR à celui du chapitre courant (rang 2),
     sinon la validation échoue. Un seul chapitre est donc éligible : celui de
     rang 1, l'information chiffrée.

     ATTENTION, PIÈGE VÉRIFIÉ LE 2026-09-14 : la numérotation des chapitres du
     livre vient de l'ordre de `DATA_FILES` dans js/loader.js, et NON de
     l'ordre alphabétique des fichiers. L'information chiffrée est le chapitre
     10 du livre, et non le chapitre 3. Une première version de cette fiche
     déclarait [3], c'est-à-dire le produit scalaire, dont ce chapitre n'a
     évidemment aucun besoin. Le test scripts/manuel/tests/renvois-1re.test.js
     a été écrit pour attraper cette famille d'erreurs, et c'est lui qui a
     trouvé celle-ci.

     ch. 10 (information chiffrée, rang conseillé 1) : il n'est pas retenu
     faute de mieux, il est le prérequis réel. Une suite géométrique de raison
     $1{,}03$ EST une évolution répétée de $+3\%$, et le coefficient
     multiplicateur de l'information chiffrée est exactement la raison $q$ sous
     un autre nom. L'exemple du cours (un capital placé à intérêts composés) et
     une des sept tâches de la banque reposent entièrement dessus. Un élève qui
     n'a pas vu le coefficient multiplicateur doit se voir expliquer ici
     pourquoi multiplier par $1{,}03$ revient à ajouter trois pour cent, ce qui
     est une leçon d'un autre chapitre glissée au milieu de celui-ci. */
  prerequis: [10],

  /* Rang conseillé (2026-09-14) : rang 2.

     Le LIVRE range ce chapitre en huitième position, un rangement par thème.
     En classe, les suites gagnent à venir très tôt, pour une raison de
     dépendances : elles ne s'appuient sur presque rien. Pas de dérivée, pas de
     discriminant, pas de repère — seulement du calcul numérique et la notion
     de fonction, déjà vue en seconde.

     Elles ouvrent en revanche sur beaucoup : le raisonnement par récurrence et
     les limites en terminale, mais aussi, dès cette année, l'habitude de
     décrire un objet par une relation plutôt que par un nombre. Les placer au
     rang 2, juste après l'information chiffrée qui remet le calcul en route,
     les met au travail pendant toute l'année plutôt qu'en fin de parcours. */
  rangConseille: 2,

  /* Attendus de fin d'année de première générale, spécialité mathématiques
     (programme de 2019), partie « Algèbre », sous-partie « Suites numériques,
     modèles discrets ».

     CE CHAPITRE PRÉPARE DIRECTEMENT LA TERMINALE. Les lignes ci-dessous sont
     écrites pour être lues par la session qui traitera la terminale : ce que
     l'élève doit maîtriser EN SORTIE, et sur quoi la terminale s'appuiera sans
     le réexpliquer. Trois points en particulier. D'abord le terme général
     explicite, qui est la forme sur laquelle tout calcul de limite de suite
     s'effectue en terminale. Ensuite le comportement d'une suite géométrique
     selon la valeur de $q$ — la terminale y greffera directement les limites
     de $q^n$, et l'élève doit arriver en sachant déjà, sans démonstration, que
     $q$ entre $0$ et $1$ fait décroître indéfiniment sans jamais atteindre
     zéro (c'est l'objet du second schéma secondaire de ce chapitre). Enfin la
     recherche d'un seuil de proche en proche, qui devient en terminale un
     algorithme puis une résolution par logarithme : l'élève qui n'a jamais
     cherché un seuil à la main ne verra pas ce que le logarithme lui fait
     gagner. */
  attendus: [
    "Reconnaître qu'une suite est arithmétique, géométrique, ou ni l'une ni l'autre, en testant différences puis quotients",
    "Déterminer la raison d'une suite à partir de deux de ses termes, y compris non consécutifs",
    "Calculer le terme général d'une suite arithmétique ($u_n = u_0 + nr$) ou géométrique ($u_n = u_0 q^n$)",
    "Calculer la somme des premiers termes d'une suite arithmétique ou géométrique, en comptant correctement les termes",
    "Déterminer le premier rang à partir duquel une suite franchit un seuil, par calculs successifs",
    "Décrire le comportement d'une suite géométrique selon la valeur de sa raison, notamment lorsque $0 < q < 1$"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La définition des suites arithmétiques et géométriques, les termes généraux, les sommes et " +
        "la recherche de seuil sont tous au programme de première.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>limite</strong>. Le second schéma secondaire du chapitre montre une suite " +
        "géométrique de raison $\\dfrac{1}{2}$ qui décroît sans jamais atteindre zéro, et sa dernière " +
        "note emploie l'expression « tend vers ». C'est délibéré, et c'est aussi la limite de ce " +
        "qu'on peut faire ici : la notion de limite se définit en terminale. La figure en montre le " +
        "sens sans le formaliser, et il vaut mieux le dire à la classe que laisser croire qu'une " +
        "définition a été donnée.<br/><br/>" +
        "Ensuite le <strong>raisonnement par récurrence</strong>. Établir qu'une suite définie par " +
        "$u_{n+1} = u_n + r$ vérifie $u_n = u_0 + nr$ pour TOUT $n$ demande formellement une " +
        "récurrence, qui relève de la terminale. En première, on établit la formule en observant le " +
        "cumul des pas — ce que fait le premier schéma secondaire du chapitre, avec ses six termes et " +
        "ses cinq pas — et c'est le niveau de justification attendu. Inutile de s'excuser de ne pas " +
        "démontrer : c'est le programme.<br/><br/>" +
        "Enfin le <strong>problème de datation au carbone 14</strong> proposé en fin de module. Sa " +
        "résolution complète fait intervenir un logarithme, qui n'est pas au programme de première " +
        "et dont le corrigé ne peut pas se passer, faute d'un nombre de demi-vies entier. Ce problème " +
        "est donc à réserver à une ouverture, à une classe de bon niveau, ou à une reprise en " +
        "terminale — mais pas à donner en autonomie tel quel.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre
       (2026-09-14), APRÈS l'élargissement de la banque : un renvoi écrit
       contre l'ancien tirage aurait été décalé par les nouveaux rangs. LA
       QUATRIÈME ERREUR EST DÉLIBÉRÉMENT SANS RENVOI, et le remède le dit. */
  erreurs: [
    {
      titre: "Confondre le rang et le nombre de termes",
      eleve: "Pour la somme $u_0 + u_1 + \\cdots + u_{10}$ d'une suite arithmétique, l'élève écrit " +
             "$S = \\dfrac{(u_0 + u_{10}) \\times 10}{2}$ au lieu de multiplier par $11$.",
      cause: "Le décalage vient de ce que la numérotation commence à <strong>zéro</strong>, ce qui est " +
             "une convention nouvelle pour l'élève : partout ailleurs dans sa scolarité, le premier " +
             "élément d'une liste porte le numéro un. Le rang $10$ désigne donc le onzième terme, et " +
             "rien dans l'écriture ne le signale.<br/><br/>" +
             "Ce qui rend l'erreur coûteuse, c'est qu'elle ne fait pas échouer le calcul : elle donne " +
             "un résultat <strong>plausible</strong>, du bon ordre de grandeur, qui ne déclenche " +
             "aucune alerte. L'élève ne peut pas la détecter par relecture, seulement par recomptage " +
             "— et il n'a aucune raison de recompter quelque chose qu'il croit avoir compté.",
      remede: "Ne pas se contenter d'annoncer « il y a $n+1$ termes » : cette phrase est exactement ce " +
              "que l'élève a déjà entendu et déjà oublié, parce qu'elle se retient sans se " +
              "comprendre.<br/><br/>" +
              "Partir du schéma « De $u_0$ à $u_5$, il y a six termes et cinq pas », et faire compter " +
              "à voix haute d'abord les ronds, puis les traits. Six d'un côté, cinq de l'autre, sur " +
              "la même ligne. Le décalage cesse d'être une règle à mémoriser dès qu'on l'a compté " +
              "soi-même.<br/><br/>" +
              "Poser ensuite la question qui installe le réflexe durable : « le nombre que j'écris " +
              "compte-t-il des termes ou des pas ? ». Le rang compte les pas, la somme compte les " +
              "termes. Deux comptages différents, donc deux nombres différents.<br/><br/>" +
              "Faire enfin vérifier une fois le résultat en additionnant à la main sur un petit cas : " +
              "pour $u_n = 2 + 3n$, les six termes $2, 5, 8, 11, 14, 17$ donnent $57$, et la formule " +
              "avec le facteur $6$ donne bien $57$ — avec le facteur $5$, elle donnerait $47{,}5$, un " +
              "nombre qui n'est même pas entier alors qu'on additionne des entiers. Cette " +
              "invraisemblance est un signal que l'élève peut apprendre à guetter.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), dans l'ORDRE DES
         CHAPITRES DE `DATA_FILES` et non dans l'ordre alphabétique du dossier :
         les suites sont le chapitre 2 du livre, donc leur graine est
         20260816+1, et le tirage n'est pas celui qu'on obtient en classant les
         fichiers par nom. Un premier jeu de renvois écrit contre le tirage
         alphabétique était entièrement décalé.

         Les exercices 4 et 12 demandent tous deux, en troisième question, la
         somme des termes d'une suite arithmétique, et leur corrigé fait
         apparaître explicitement le facteur $n+1$. Tous deux tirent $n = 14$,
         donc $15$ termes : l'écart entre les deux nombres est assez grand pour
         que l'erreur change nettement le résultat, ce qui n'aurait pas été le
         cas avec un rang plus petit. On renvoie au 4, le premier des deux. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Classer toute suite régulière comme arithmétique",
      eleve: "Devant les termes $2$, $6$, $18$, $54$, $162$, l'élève calcule $6 - 2 = 4$, annonce une " +
             "suite arithmétique de raison $4$, et ne vérifie pas sur la paire suivante — où l'écart " +
             "vaut $12$.",
      cause: "L'élève teste UNE différence et généralise. Ce n'est pas de la négligence : c'est ce " +
             "qu'il a toujours fait avec succès, parce que les suites rencontrées jusqu'ici étaient " +
             "arithmétiques et qu'une seule vérification suffisait donc.<br/><br/>" +
             "Plus profondément, « régulier » est pour lui synonyme d'« arithmétique ». Il voit bien " +
             "que les nombres croissent selon une loi, et il ne dispose que d'un seul modèle de loi. " +
             "Une suite géométrique lui paraît régulière, donc arithmétique — l'erreur porte sur le " +
             "répertoire des possibles, pas sur le calcul.<br/><br/>" +
             "Le cas « ni l'une ni l'autre » est encore plus invisible : rien dans son expérience ne " +
             "lui suggère qu'une suite puisse n'appartenir à aucune des deux familles.",
      remede: "Installer une procédure de test à deux vérifications minimum, et en faire une exigence " +
              "de rédaction : jamais une différence seule, toujours deux au moins, et la conclusion " +
              "n'est écrite qu'après.<br/><br/>" +
              "Faire ensuite le geste que l'élève ne fait pas spontanément : quand les différences " +
              "échouent, <strong>essayer les quotients</strong>. Sur $2, 6, 18$, les différences " +
              "donnent $4$ puis $12$, mais les quotients donnent $3$ puis $3$. C'est un second test, " +
              "et il doit devenir aussi automatique que le premier.<br/><br/>" +
              "Utiliser le schéma du cours qui compare $u_n = 2+3n$ et $u_n = 2\\times 3^n$ : les deux " +
              "partent de $2$ et emploient le même nombre $3$, et pourtant leurs nuages de points " +
              "n'ont rien à voir — points alignés d'un côté, courbe qui s'envole de l'autre.<br/><br/>" +
              "Montrer enfin, au moins une fois, une suite qui n'est ni arithmétique ni géométrique — " +
              "les carrés $2, 3, 6, 11, 18$, dont les différences sont $1, 3, 5, 7$. Sans ce " +
              "contre-exemple, l'élève choisit toujours entre deux cases, et tombe juste une fois sur " +
              "deux par hasard.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 5 est le seul des douze exercices numérotés à demander la
         NATURE d'une suite à partir de ses premiers termes, et il impose
         l'ordre des tests — différences d'abord, quotients ensuite. C'est la
         tâche « nature », ajoutée le 2026-09-14 : la banque d'origine
         annonçait toujours la nature de la suite dans l'énoncé, donc ne la
         faisait jamais chercher.

         RÉSERVE HONNÊTE, et elle compte. Dans CE tirage-ci, l'exercice 5 tire
         le cas ARITHMÉTIQUE ($5, 12, 19, 26, 33$). Un élève qui classe tout en
         arithmétique y répond donc juste sans avoir rien vérifié. Le renvoi
         reste le bon — c'est le seul exercice du chapitre qui fasse faire le
         geste de diagnostic, et sa rédaction impose les deux tests — mais il
         ne suffit pas à lui seul : l'enseignant doit faire mener les deux
         tests à voix haute, ou compléter d'une suite géométrique de son cru.
         Les cas géométrique et « ni l'un ni l'autre » existent bien dans la
         tâche, mais ce tirage ne les place pas dans les douze exercices
         imprimés. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Diviser par le rang au lieu de l'écart des rangs",
      eleve: "Sachant que $u_2 = 24$ et $u_8 = 42$ pour une suite arithmétique, l'élève calcule " +
             "$\\dfrac{42 - 24}{8} = 2{,}25$ au lieu de $\\dfrac{42 - 24}{8 - 2} = 3$.",
      cause: "C'est le même décalage que pour le comptage des termes, mais sous une forme où l'élève " +
             "ne le reconnaît pas. Il sait que la raison est « l'écart divisé par le nombre de pas », " +
             "et il prend pour nombre de pas le rang d'arrivée — parce que dans tous les exemples " +
             "vus, le point de départ était $u_0$, et qu'alors les deux nombres coïncident.<br/><br/>" +
             "La formule $u_n = u_0 + nr$ entretient d'ailleurs la confusion : le $n$ qui y figure " +
             "est à la fois un rang et un nombre de pas, précisément parce qu'on part du rang zéro. " +
             "Dès que le point de départ n'est plus $u_0$, les deux sens se séparent, et rien dans la " +
             "formule ne prévient qu'ils se séparent.",
      remede: "Faire dessiner la situation avant de calculer : une ligne, un point marqué au rang $2$, " +
              "un point marqué au rang $8$, et les flèches entre les deux — il y en a six, pas " +
              "huit.<br/><br/>" +
              "Réutiliser le schéma « De $u_0$ à $u_5$, il y a six termes et cinq pas », mais en " +
              "posant la question autrement : combien de flèches entre le deuxième rond et le " +
              "cinquième ? L'élève compte trois, et constate qu'il a soustrait les rangs sans qu'on " +
              "le lui demande.<br/><br/>" +
              "Imposer ensuite l'écriture de la formule sous sa forme générale, $u_n = u_p + (n-p)r$, " +
              "où la soustraction est <strong>visible dans la formule</strong> plutôt que laissée à " +
              "la charge de l'élève. La forme $u_n = u_0 + nr$ en devient le cas particulier $p = 0$, " +
              "et non l'inverse.<br/><br/>" +
              "Exiger enfin la vérification en sens inverse, qui coûte dix secondes : repartir de " +
              "$u_2 = 24$, ajouter six fois la raison trouvée, et vérifier qu'on retombe sur $42$. " +
              "Avec $r = 2{,}25$, on obtiendrait $37{,}5$ : l'élève voit sa propre erreur sans qu'on " +
              "la lui signale.",
      /* Vérifié contre le tirage réel du livre (2026-09-14), ordre DATA_FILES :
         l'exercice 7 donne $u_2 = 24$ et $u_8 = 42$ et demande la raison. Son
         corrigé s'ouvre sur la ligne « entre le rang 2 et le rang 8, la suite
         fait 8 - 2 = 6 pas », qui est la phrase même du diagnostic.

         Le tirage est particulièrement favorable ici : l'élève qui divise par
         le rang d'arrivée obtient $18 div 8 = 2{,}25$, un nombre décimal là
         où tous les termes sont entiers. L'invraisemblance est visible sans
         qu'on la lui signale. L'exercice 11 est de la même tâche et convient
         aussi. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Croire qu'une suite décroissante finit par atteindre zéro",
      eleve: "Interrogé sur ce qu'il reste d'un échantillon radioactif après un très grand nombre de " +
             "demi-vies, l'élève répond « plus rien » ou « zéro », et cherche le rang à partir duquel " +
             "la suite s'annule.",
      cause: "Toutes les décroissances que l'élève a rencontrées jusqu'ici s'arrêtaient : on vide un " +
             "réservoir, on dépense une somme, on retranche jusqu'à épuisement. Une décroissance " +
             "<strong>multiplicative</strong> ne se comporte pas ainsi, et rien dans son expérience " +
             "ne le prépare à cela.<br/><br/>" +
             "L'obstacle n'est pas le calcul — il sait diviser par deux autant de fois qu'on veut — " +
             "c'est l'idée qu'un processus puisse se poursuivre indéfiniment sans jamais aboutir. " +
             "Il lui manque la distinction entre « devenir aussi petit qu'on veut » et « devenir " +
             "nul », qui est exactement la distinction que la notion de limite formalisera en " +
             "terminale. En attendant, il comble le vide avec l'intuition physique qu'à force de " +
             "diviser, il ne reste rien.",
      remede: "Poser la question de façon à ce que l'élève s'y heurte lui-même : « donne-moi le rang " +
              "du premier terme nul ». Il cherche, divise, et n'en trouve aucun — parce que la moitié " +
              "d'un nombre strictement positif est strictement positive, à chaque étape, sans " +
              "exception.<br/><br/>" +
              "Appuyer sur le schéma « Une raison entre $0$ et $1$ », dont les huit barres passent de " +
              "$64$ à $0{,}5$ : les dernières sont minuscules, et aucune n'a disparu. La figure " +
              "montre exactement ce que le calcul dit, et elle le montre <strong>avant</strong> qu'on " +
              "ait à en parler.<br/><br/>" +
              "Nommer alors la distinction, sans la formaliser : la suite s'approche de zéro autant " +
              "qu'on veut, mais ne s'y pose jamais. Cette formulation est honnête au niveau de la " +
              "première, elle prépare la définition de terminale, et elle n'énonce rien qu'il " +
              "faudrait ensuite défaire.<br/><br/>" +
              "<strong>Aucun exercice de la banque ne travaille réellement cette erreur</strong>, et " +
              "il ne faut pas la traiter par un renvoi approximatif. Les tâches sur la demi-vie " +
              "(exercices 5 et 11 du tirage actuel) demandent une masse restante après un nombre " +
              "FINI de périodes : un élève qui croit la suite capable de s'annuler y répond " +
              "parfaitement juste, et son erreur reste intacte. La remédiation se fait donc en " +
              "classe, sur la figure et sur la question « le premier terme nul », et non par un " +
              "exercice écrit. Le jour où une tâche portant sur le comportement à long terme sera " +
              "ajoutée, ce renvoi pourra être renseigné.",
      /* DÉLIBÉRÉMENT SANS RENVOI (2026-09-14). Vérifié contre le tirage réel :
         les douze exercices du chapitre portent tous sur un rang fini ou une
         somme finie. Aucun ne demande ce que devient la suite « à la longue »,
         et aucun ne peut donc prendre cette erreur à revers — un élève qui la
         commet réussit l'intégralité de la banque. Un renvoi vers les
         exercices 1 ou 3, dont l'un parle bien de demi-vie, aurait l'air juste et
         serait faux : c'est précisément le cas que la règle éditoriale
         interdit de combler. Le remède le dit explicitement à l'enseignant. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     L'évaluation porte bien CINQ questions pour un total de DIX points,
     vérifié sur le tirage réel le 2026-09-14. Le barème n'est pas uniforme ici
     — 2, 1, 3, 2 et 2 points — et c'est cohérent : la question 3, qui cumule
     le terme général, le comptage des termes et la formule de somme, vaut
     davantage que la question 2, qui se répond d'un coup d'œil. Aucune
     correction n'a été nécessaire.

     Q1 calculer $u_{20}$ d'une suite arithmétique donnée par $u_0$ et $r$ :
        application directe du terme général, donc « calculer ».
     Q2 nature de la suite définie par $v_{n+1} = 3v_n$ : l'élève doit
        reconnaître, dans une relation de récurrence, laquelle des deux
        familles est en jeu — il ne calcule aucun terme, il déduit la nature de
        la FORME de la relation. C'est « raisonner ».
     Q3 somme $u_0 + \cdots + u_{10}$ pour $u_n = 2 + 4n$ : application de la
        formule de somme, après avoir calculé $u_{10}$ et compté onze termes.
        Le comptage est un point d'attention, mais l'ensemble reste une suite
        d'applications, donc « calculer ».
     Q4 capital placé à intérêts composés, $C_3 = 1000 \times 1{,}05^3$ :
        l'élève part d'une situation financière décrite en français — un taux
        annuel de cinq pour cent — dont l'énoncé fournit la traduction en suite
        géométrique, et doit relier les deux registres pour arrondir au centime
        une valeur monétaire. C'est « modéliser », et c'est la seule question
        de l'évaluation qui sorte du registre purement mathématique.
     Q5 somme des six premiers termes d'une géométrique de raison $2$ : de
        nouveau une formule de somme, avec le même piège de comptage qu'en Q3
        ($v_0$ à $v_5$ font six termes, donc un exposant $6$). C'est
        « calculer ».

     « Chercher », « représenter » et « communiquer » ne sont pas déclarées ici :
     aucune des cinq questions ne demande d'explorer une piste sans méthode
     donnée, de lire ou produire une représentation graphique, ni de rédiger
     une explication — deux des cinq questions sont à choix multiples. Ces
     compétences sont portées par d'autres chapitres du niveau, où les énoncés
     ont été écrits pour cela.

     Je signale un déséquilibre dont je ne suis pas pleinement satisfait :
     trois des cinq questions portent l'étiquette « calculer », et deux d'entre
     elles (Q3 et Q5) testent exactement le même point d'attention, le comptage
     des termes dans une somme. Le doublon n'est pas absurde — c'est l'erreur
     la plus coûteuse du chapitre, et la tester deux fois dans deux contextes
     différents se défend — mais il laisse « représenter » absente d'un
     chapitre dont le schéma principal est justement un nuage de points. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "modéliser", "communiquer"]
  }
};
