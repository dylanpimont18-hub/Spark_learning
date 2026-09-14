/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-primitives-integrales.prof.js
   Fiche professeur du chapitre « Intégration et Primitives » (terminale),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE DE LA TERMINALE (2026-09-14). C'est sur lui qu'ont été
   calées les conventions reprises dans les onze autres fiches du niveau, et
   c'est lui qui a servi à vérifier la chaîne complète jusqu'au PDF.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/tle/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-primitives-integrales"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7 ; le numéro imprimé reste celui du
     livre).

     ch. 5 (compléments sur la dérivation) : une primitive se cherche en
     REMONTANT une dérivation. Un élève qui hésite encore sur la dérivée d'un
     produit ou d'une composée ne peut pas reconnaître la forme $u'u^n$ ni
     vérifier son résultat — or la vérification par dérivation est la seule
     autocorrection disponible dans tout le chapitre.

     ch. 4 (limites de fonctions et continuité) : l'intégrale est définie
     comme une LIMITE de sommes de tranches, et le premier schéma du cours
     repose entièrement là-dessus. La continuité sur $[a\,;\,b]$ est aussi
     l'hypothèse qui garantit l'existence d'une primitive.

     Le chapitre sur l'exponentielle n'est PAS déclaré, bien que la banque
     d'exercices intègre des $e^{-t}$ : la primitive de l'exponentielle est
     donnée dans le formulaire du chapitre et ne suppose aucune étude de la
     fonction. Le déclarer serait un prérequis décoratif, et le cahier des
     charges demande les prérequis RÉELS. */
  prerequis: [4, 5],

  /* Rang conseillé (2026-09-14) : rang 8.

     L'intégration vient nécessairement APRÈS la dérivation (rang 5), dont
     elle est l'opération réciproque, et après les limites (rang 4) qui en
     fondent la définition. Elle vient AVANT les équations différentielles
     (rang 9), qui se résolvent en intégrant.

     La placer plus tôt dans l'année reviendrait à demander de remonter des
     dérivations que l'élève ne sait pas encore poser. */
  rangConseille: 8,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse ».
  attendus: [
    "Calculer une primitive d'une fonction usuelle ou d'une somme de telles fonctions",
    "Déterminer la primitive d'une fonction vérifiant une condition initiale donnée",
    "Calculer une intégrale à l'aide d'une primitive et de la notation entre crochets",
    "Interpréter une intégrale comme une aire signée, et distinguer aire signée et aire géométrique",
    "Calculer la valeur moyenne d'une fonction continue sur un intervalle"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Les primitives des fonctions usuelles, le calcul d'une intégrale par une primitive, " +
        "l'interprétation en aire et la valeur moyenne sont tous au programme de terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord les <strong>sommes de Riemann</strong>, sur lesquelles ouvre le premier schéma du " +
        "cours. Le programme les mentionne comme approche intuitive de l'intégrale, sans exiger " +
        "de calcul de somme ni d'étude de convergence. Le schéma est donc conforme tel qu'il est " +
        "employé — donner du sens — mais on ne demandera pas à l'élève de majorer l'erreur " +
        "commise.<br/><br/>" +
        "Ensuite l'<strong>intégration par parties</strong>, absente de ce chapitre : elle est au " +
        "programme et devra être traitée à part, en prolongement. Les exercices de la banque s'en " +
        "passent volontairement, pour que le chapitre reste centré sur le sens de l'intégrale " +
        "plutôt que sur les techniques.<br/><br/>" +
        "Enfin le <strong>travail d'une force</strong>, mobilisé par le problème : il relève de la " +
        "physique-chimie de terminale et suppose donc une coordination entre les deux " +
        "enseignements. En mathématiques seules, la loi de Hooke peut être admise sans être " +
        "justifiée.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre, ET sont
       protégés par un test qui rapproche chaque renvoi du tirage par
       MOTS-CLÉS (scripts/manuel/tests/prof-tle.test.js). Sans ce test, un
       renvoi écrit contre un tirage donné devient faux dès que la banque
       s'élargit : les rangs se décalent, le renvoi pointe vers un exercice
       qui existe — donc la validation l'accepte — mais qui parle d'autre
       chose. Cinq renvois de seconde étaient dans ce cas. */
  erreurs: [
    {
      titre: "Dériver au lieu de primitiver",
      eleve: "Pour une primitive de $5x^4$, l'élève écrit $20x^3$ : il a multiplié par l'exposant " +
             "et baissé le degré, c'est-à-dire qu'il a <strong>dérivé</strong>.",
      cause: "Depuis un an et demi, tout ce qu'on lui demande de faire à une puissance, c'est de la " +
             "dériver. Le geste est devenu automatique, et un automatisme ne se désactive pas sur " +
             "annonce : il ne lui manque pas la règle de la primitive, il lui manque un signal qui " +
             "lui dise dans quel sens aller.<br/><br/>" +
             "L'énoncé ne le lui donne pas toujours : « trouver $F$ telle que $F' = f$ » contient " +
             "le symbole de la dérivée, et c'est lui que l'œil attrape.",
      remede: "Ne pas commencer par réénoncer la règle : elle est connue, elle n'est simplement pas " +
              "déclenchée. Installer d'abord la <strong>vérification</strong>, qui est gratuite et " +
              "qui tranche : quelle que soit la primitive proposée, on la dérive et on regarde si " +
              "l'on retombe sur $f$. Ici $(20x^3)' = 60x^2$, qui n'est pas $5x^4$ : l'élève voit " +
              "son erreur sans qu'on la lui désigne.<br/><br/>" +
              "Cette habitude vaut mieux qu'une règle de plus, parce qu'elle sert toute l'année et " +
              "qu'elle ne suppose rien de nouveau.<br/><br/>" +
              "Ensuite seulement, faire formuler le contraste à voix haute : <strong>dériver fait " +
              "descendre</strong> l'exposant, <strong>primitiver le fait monter</strong>. Et " +
              "s'appuyer sur un ordre de grandeur : une primitive de $x^4$ doit croître plus vite " +
              "que $x^4$, jamais moins vite.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-14) :
         l'exercice 3 demande $\int_0^4 4\sqrt{x}\,dx$. L'exposant y vaut
         $\frac{1}{2}$, donc l'élève qui dérive au lieu de primitiver tombe sur
         un exposant NÉGATIF ($-\frac{1}{2}$) — un résultat qui ne ressemble à
         rien de ce qu'il attend, alors qu'avec un exposant entier il aurait
         obtenu une expression plausible et ne se serait aperçu de rien. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre l'intégrale et l'aire",
      eleve: "Sur $[0\\,;\\,5]$ avec $f(x) = x - 2$, l'élève calcule $\\int_0^5 (x-2)\\,dx = 2{,}5$ " +
             "et annonce que l'aire vaut $2{,}5$ unités d'aire. La bonne réponse est $6{,}5$.",
      cause: "Le cours dit « l'intégrale, c'est l'aire sous la courbe », et cette phrase est vraie " +
             "tant que $f$ reste positive — c'est-à-dire dans tous les exemples introductifs. " +
             "L'élève n'a donc jamais rencontré de contre-exemple, et il a raison de faire " +
             "confiance à ce qui a toujours marché.<br/><br/>" +
             "Le mot « aire » aggrave les choses : une aire est une quantité de surface, et une " +
             "quantité de surface ne peut pas être négative. Rien dans le vocabulaire ne prévient " +
             "que l'intégrale, elle, le peut.",
      remede: "Faire produire le contre-exemple par l'élève plutôt que le lui montrer. Poser " +
              "$\\int_0^{2\\pi} \\sin x\\,dx$ et laisser calculer : le résultat est $0$. Puis " +
              "demander, en désignant le dessin : « y a-t-il vraiment zéro surface entre cette " +
              "courbe et cet axe ? ». Personne ne répond oui.<br/><br/>" +
              "C'est exactement ce que montre le troisième schéma du cours, « Une intégrale nulle " +
              "sous une courbe bien visible » : les deux aplats hachurés y valent $+2$ et $-2$, et " +
              "le même dessin porte donc deux nombres, $0$ et $4$, selon ce qu'on mesure.<br/><br/>" +
              "Fixer ensuite la méthode en une phrase : <strong>dès qu'on demande une aire, " +
              "chercher d'abord où la fonction s'annule et découper l'intervalle en ces " +
              "points</strong>. C'est un réflexe de lecture d'énoncé, pas une formule " +
              "supplémentaire.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 5 demande
         explicitement l'AIRE GÉOMÉTRIQUE de $f(x) = x - 2$ sur $[0;5]$, une
         fonction qui change de signe à l'intérieur de l'intervalle. L'élève
         qui intègre sans découper obtient 2,5 au lieu de 6,5 : l'écart est
         grand, et l'indication nomme le piège sans donner la réponse. Cette
         tâche n'existait pas avant ce jour — la banque du chapitre ne
         contenait qu'une seule tâche, l'intégrale d'un monôme. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier la constante, ou la croire décorative",
      eleve: "L'élève écrit « une primitive de $6t$ est $3t^2$ » et s'arrête là, alors que l'énoncé " +
             "précise que le mobile part de la position $19$ m. Il répond $27$ au lieu de $46$.",
      cause: "Dans la quasi-totalité des exercices, le $+C$ ne sert à rien : on calcule une " +
             "intégrale définie, et la constante s'élimine dans la soustraction. L'élève en " +
             "conclut, très raisonnablement, que c'est une formalité d'écriture.<br/><br/>" +
             "La difficulté n'est donc pas de retenir le $+C$, c'est de reconnaître les rares " +
             "situations où il porte une information — celles où l'on cherche UNE primitive " +
             "particulière et non une intégrale.",
      remede: "Ne pas insister sur « n'oublie pas le $+C$ », consigne qui n'a jamais rien changé " +
              "parce qu'elle ne dit pas à quoi il sert. Montrer plutôt qu'<strong>il manque une " +
              "information</strong> sans lui.<br/><br/>" +
              "Le deuxième schéma du cours, « Une infinité de primitives, une seule pente », est " +
              "fait pour cela : trois courbes y sont dessinées, toutes primitives de la même " +
              "fonction, et leurs tangentes en une même abscisse sont rigoureusement parallèles. " +
              "Poser alors la question : « laquelle de ces trois courbes décrit le mobile ? ». " +
              "Impossible de répondre — jusqu'à ce qu'on donne sa position de départ.<br/><br/>" +
              "La condition initiale cesse d'être une contrainte d'exercice pour devenir ce " +
              "qu'elle est : la donnée qui <strong>choisit</strong> une courbe parmi une infinité.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 donne une
         position de départ (19 m) puis une vitesse, et demande la position à
         un instant donné. L'élève qui néglige la constante obtient un nombre
         trop petit de très exactement la position initiale — écart que
         l'énoncé lui permet de repérer seul, puisque le mobile ne peut pas
         avoir reculé. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Croire que l'intégrale et la valeur moyenne sont le même nombre",
      eleve: "On demande la valeur moyenne de $T(t) = 2t^2$ sur $[0\\,;\\,2]$. L'élève calcule " +
             "$\\int_0^2 2t^2\\,dt \\approx 5{,}33$ et s'arrête : il oublie de diviser par $2$, et " +
             "annonce $5{,}33$ au lieu de $2{,}67$.",
      cause: "L'intégrale est le travail difficile ; la division qui suit paraît anodine, donc elle " +
             "s'efface. Plus profondément, l'élève ne se représente pas ce qu'est une moyenne " +
             "<strong>de fonction</strong> : il sait faire une moyenne de notes, où l'on divise par " +
             "un nombre d'éléments qu'on peut compter. Ici il n'y a rien à compter, et la longueur " +
             "de l'intervalle ne lui apparaît pas comme le diviseur naturel.",
      remede: "Passer par une vérification de bon sens, avant tout calcul : la valeur moyenne d'une " +
              "fonction sur un intervalle est nécessairement <strong>comprise entre son minimum et " +
              "son maximum</strong> sur cet intervalle. Ici $T$ varie de $0$ à $8$ : une moyenne " +
              "annoncée à $5{,}33$ est possible, une moyenne à $50$ ne l'aurait pas été. " +
              "L'encadrement ne détecte pas toujours l'erreur, mais il installe le réflexe de " +
              "regarder si la réponse est plausible.<br/><br/>" +
              "Faire ensuite dessiner le <strong>rectangle de même aire</strong> : même base " +
              "$[0\\,;\\,2]$, hauteur $\\mu$, et aire égale à celle sous la courbe. La moyenne " +
              "devient une hauteur, c'est-à-dire un objet qu'on peut voir. La division par la " +
              "longueur de l'intervalle n'est alors plus une étape à retenir : c'est le calcul de " +
              "la hauteur d'un rectangle dont on connaît l'aire et la base.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 demande la
         valeur moyenne de $T(t) = 2t^2$ sur $[0;2]$, et son corrigé sépare
         explicitement les trois étapes — intégrale, longueur de l'intervalle,
         quotient. Tâche également créée ce jour : elle n'existait pas dans la
         banque d'origine. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Appliquer la règle des puissances à l'exponentielle",
      eleve: "Pour $\\int_0^1 e^x\\,dx$, l'élève écrit $\\left[\\dfrac{e^{x+1}}{x+1}\\right]_0^1$, " +
             "ou parfois $[xe^x]_0^1$.",
      cause: "La règle $\\dfrac{x^{n+1}}{n+1}$ a été présentée comme LA règle des primitives, sans " +
             "que sa condition d'emploi soit aussi visible qu'elle : elle porte sur une " +
             "<strong>base variable et un exposant constant</strong>. Or $e^x$ est exactement " +
             "l'inverse — base constante, exposant variable — et rien dans l'écriture ne signale " +
             "ce renversement.",
      remede: "Faire classer, avant tout calcul, les expressions en deux colonnes : celles où la " +
              "variable est en <strong>bas</strong> ($x^3$, $\\sqrt{x}$, $\\dfrac{1}{x^2}$) et " +
              "celles où elle est en <strong>haut</strong> ($e^x$, $e^{-t}$, $2^x$). La règle des " +
              "puissances ne s'applique qu'à la première colonne. Ce tri prend deux minutes et " +
              "règle la confusion pour l'année.<br/><br/>" +
              "Rappeler ensuite le fait remarquable qui fait de l'exponentielle un cas à part : " +
              "elle est sa <strong>propre</strong> dérivée, donc sa propre primitive. Il n'y a " +
              "aucune règle à appliquer, seulement un fait à reconnaître.<br/><br/>" +
              "Et là encore, la vérification par dérivation tranche sans discussion : " +
              "$(xe^x)' = e^x + xe^x \\neq e^x$.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 6 intègre
         $2e^{-t}$ entre 0 et 1. Le signe moins de l'exposant y ajoute la
         difficulté qui révèle l'erreur : l'élève qui applique la règle des
         puissances obtient un dénominateur nul dès que l'exposant vaut $-1$,
         ce qui rend l'impasse visible. La tâche exponentielle a été ajoutée à
         la banque ce jour. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 $\int_0^2 3x^2\,dx$ : application directe du crochet, donc
        « calculer ».
     Q2 reconnaître la primitive de $4x^3 + 2x$ parmi quatre propositions :
        l'élève ne calcule pas, il ÉLIMINE — en dérivant mentalement chaque
        candidate, ou en repérant celle dont le degré ne peut pas convenir.
        C'est « raisonner ».
     Q3 $\int_1^4 x^{-1/2}\,dx$ : la règle des puissances sur un exposant
        fractionnaire, donc « calculer ».
     Q4 de $v(t) = 6t$ et $x(0) = 5$ vers $x(t)$ : l'élève doit traduire une
        situation physique en objet mathématique, décider que la position est
        une primitive de la vitesse, et voir que la donnée « $x(0) = 5$ » sert
        à fixer la constante. C'est « modéliser ».
     Q5 juger la conclusion d'un camarade dont le calcul est juste mais la
        lecture fausse, et dire ce qui la corrige. Aucun nombre à produire :
        l'élève évalue un énoncé et en formule un autre. C'est
        « communiquer ».
        CETTE QUESTION A ÉTÉ RÉÉCRITE dans js/data/lycee-tle/tle-primitives-integrales.js
        le 2026-09-14 : elle demandait auparavant $\int_0^{\pi}\sin x\,dx$,
        c'est-à-dire un cinquième calcul. L'étiquette suit l'énoncé, jamais
        l'inverse.

     « Chercher » et « représenter » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni de
     produire ou lire une représentation graphique. Les deux compétences sont
     portées par d'autres chapitres du niveau, où les énoncés ont été écrits
     pour cela. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "modéliser", "communiquer"]
  }
};
