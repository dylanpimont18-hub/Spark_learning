/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-equations-inequations.prof.js
   Fiche professeur du chapitre « Équations et inéquations du 1er degré »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site :
   seul scripts/manuel/prof.js la lit, au moment de compiler le livre.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE DE REPRISE. C'est la caractéristique dominante de ce chapitre et
   elle conditionne toute la préparation : l'équation du premier degré est
   au programme depuis la quatrième, et l'élève arrive en sachant résoudre
   $7x - 3 = 25$. Ce qui est réellement NEUF en seconde tient en deux points,
   et la fiche insiste sur eux plutôt que sur la technique de résolution :
   l'INÉQUATION avec sa règle du signe, et l'écriture de l'ensemble solution
   sous forme d'INTERVALLE. Un enseignant qui traite ce chapitre comme une
   découverte perd trois semaines ; un enseignant qui le traite comme un
   simple rappel laisse passer la règle d'or.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-equations-inequations"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (résolus par niveau
     depuis le correctif 6eb58c7).

     ch. 3 (ensembles de nombres) : l'ensemble solution d'une inéquation
     S'ÉCRIT en intervalle, et l'intervalle est défini au chapitre 3. Sans
     lui, l'élève résout correctement et ne sait pas noter sa réponse — ce
     qui est exactement ce que l'évaluation demande en Q2 et Q4.

     ch. 4 (calcul algébrique) : réduire les deux membres avant d'isoler
     l'inconnue, et notamment gérer $5 - 2x = 3x + 15$ (Q5), suppose de
     savoir transposer et réduire sans faute de signe.

     Le chapitre 2 (fonctions affines) n'est PAS retenu, bien que la
     résolution graphique de $ax + b = 0$ s'y rattache : ce chapitre-ci
     résout par le calcul et ne se sert d'aucun graphique. Le déclarer serait
     un prérequis décoratif. */
  prerequis: [3, 4],

  /* Rang conseillé (2026-09-13) : rang 3.

     Juste après les ensembles de nombres (rang 1) et le calcul algébrique
     (rang 2), dont il est l'application immédiate. Le placer plus tard
     priverait les chapitres de fonctions d'un outil qu'ils utilisent sans
     cesse (chercher un antécédent, c'est résoudre une équation).

     Le LIVRE le range en chapitre 5, ce qui est proche : l'ordre du livre et
     la progression conseillée coïncident presque sur tout le début d'année. */
  rangConseille: 3,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Nombres et calculs », sous-partie « Équations, inéquations ».
  attendus: [
    "Résoudre une équation du premier degré à une inconnue",
    "Modéliser un problème concret par une équation ou une inéquation",
    "Résoudre une inéquation du premier degré et appliquer la règle du changement de sens",
    "Exprimer un ensemble de solutions sous forme d'intervalle",
    "Contrôler la vraisemblance d'une solution par une valeur test"
  ],

  /* Ce qui déborde, et ce qui au contraire est une reprise : en seconde, la
     seconde information est aussi utile que la première. */
  note: "Tout le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>En revanche, la moitié en est une reprise, et il faut le savoir avant de " +
        "bâtir la progression.</strong><br/><br/>" +
        "L'équation du premier degré est travaillée depuis la classe de quatrième. Un élève " +
        "de seconde sait, en général, résoudre $7x - 3 = 25$ ; ce n'est pas là qu'il faut " +
        "passer du temps. La mise en équation d'un problème, elle, reste difficile pour " +
        "beaucoup, alors même qu'elle est officiellement acquise : c'est le point de " +
        "reprise à traiter sérieusement.<br/><br/>" +
        "<strong>Deux notions sont réellement nouvelles cette année.</strong> D'abord " +
        "l'<strong>inéquation</strong> et sa règle du changement de sens, qui n'a aucun " +
        "équivalent au collège et qui est la source d'erreur dominante du chapitre. Ensuite " +
        "l'écriture de l'ensemble solution en <strong>intervalle</strong>, qui suppose le " +
        "chapitre sur les ensembles de nombres et qui donne à la réponse une forme que " +
        "l'élève n'a jamais eu à produire.<br/><br/>" +
        "Concrètement : on peut aller vite sur les équations, à condition de ne pas aller " +
        "vite sur la mise en équation, et il faut prendre le temps sur les inéquations.",

  /* Quatre erreurs typiques. Les renvois ont tous été vérifiés contre un
     tirage réel de la graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Oublier d'inverser le sens en divisant par un négatif",
      eleve: "Pour $-2x > 6$, l'élève écrit $x > -3$ au lieu de $x < -3$. Il a divisé les deux " +
             "membres par $-2$ correctement, mais a recopié le symbole $>$ tel quel.",
      cause: "C'est l'erreur dominante du chapitre, et elle n'est pas une étourderie. Pendant " +
             "quatre ans, l'élève a manipulé des ÉGALITÉS, où l'on peut effectivement appliquer " +
             "la même opération des deux côtés sans jamais rien changer d'autre. L'inéquation " +
             "ressemble tellement à une équation que la règle apprise s'y transporte " +
             "spontanément.<br/><br/>" +
             "Le problème de fond est que rien, dans l'écriture, ne signale qu'il se passe " +
             "quelque chose de spécial : le $-2$ est déjà là depuis le début.",
      remede: "Ne pas énoncer la règle avant de l'avoir fait constater, sans quoi elle devient " +
              "une bizarrerie de plus à mémoriser.<br/><br/>" +
              "Partir d'une inégalité vraie et évidente, $3 < 5$, et faire multiplier les deux " +
              "membres par $-1$. On obtient $-3$ et $-5$. L'élève sait parfaitement que $-3$ est " +
              "<strong>plus grand</strong> que $-5$ : il vient de produire lui-même le " +
              "renversement, sur des nombres qu'il maîtrise, sans aucune inconnue pour " +
              "brouiller la lecture.<br/><br/>" +
              "Faire ensuite placer les quatre nombres sur une droite graduée. Multiplier par un " +
              "négatif <strong>retourne la droite</strong> : ce qui était à droite passe à " +
              "gauche. La règle cesse d'être arbitraire.<br/><br/>" +
              "Installer enfin le réflexe de contrôle par une <strong>valeur test</strong>, qui " +
              "rend l'élève autonome : il prend un nombre de son ensemble solution, le " +
              "réinjecte dans l'inéquation de départ, et voit immédiatement s'il s'est trompé de " +
              "sens. C'est le seul garde-fou qui fonctionne encore en contrôle.",
      /* Vérifié contre le tirage réel (2026-09-13) : la tâche « inéquation à
         coefficient NÉGATIF » a été ajoutée au générateur ce jour. Avant
         cela, la banque ne tirait que des inéquations du type $ax + b > c$
         avec $a > 0$ — c'est-à-dire qu'aucun exercice du chapitre ne
         travaillait l'erreur la plus fréquente du chapitre. L'exercice 2 du
         tirage courant est désormais de ce type. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre la borne et l'ensemble solution",
      eleve: "Pour $4x + 10 > 22$, l'élève trouve $x > 3$ puis écrit « $S = 3$ », ou bien " +
             "« $S = [3]$ ». Il donne le nombre trouvé, pas l'ensemble des solutions.",
      cause: "Quatre années d'équations ont installé une attente : une question de ce genre a " +
             "UNE réponse, qui est un nombre. L'inéquation en a une infinité, et l'élève n'a " +
             "aucune expérience d'une réponse qui ne soit pas un nombre.<br/><br/>" +
             "Il ne confond donc pas deux notations : il ne perçoit pas encore que l'objet " +
             "demandé a changé de nature.",
      remede: "Faire d'abord énumérer. Demander trois nombres qui conviennent, puis trois " +
              "autres, puis un très grand. L'élève constate lui-même qu'il ne finira jamais, et " +
              "c'est cette expérience — et non une définition — qui justifie une notation " +
              "capable de désigner une infinité de nombres d'un seul coup.<br/><br/>" +
              "Exiger ensuite deux écritures systématiquement appariées à chaque réponse : la " +
              "<strong>condition</strong> ($x > 3$) et l'<strong>intervalle</strong> " +
              "($]3\\,;\\,+\\infty[$). Tant que les deux ne sont pas écrites côte à côte, la " +
              "réponse est incomplète.<br/><br/>" +
              "Faire hachurer la zone sur une droite graduée, comme le fait le schéma du cours. " +
              "Une infinité de solutions se voit sur un dessin ; elle ne se voit pas dans un " +
              "nombre isolé.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 résout une
         inéquation et demande explicitement la BORNE de l'intervalle solution.
         L'énoncé nomme donc la distinction — la borne est un nombre,
         l'ensemble n'en est pas un — à l'endroit exact où l'élève les
         confond. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Traduire « au plus » et « au moins » par le mauvais symbole",
      eleve: "Pour « le budget ne doit pas dépasser $50$ € », l'élève écrit $C \\geq 50$ au lieu " +
             "de $C \\leq 50$. Il a retenu que la contrainte portait sur $50$, mais pas dans " +
             "quel sens.",
      cause: "La difficulté est de langue avant d'être de mathématiques. « Au plus », « au " +
             "moins », « ne pas dépasser », « à partir de » sont des expressions du français " +
             "courant que l'élève comprend parfaitement en situation, et qu'il n'a jamais eu à " +
             "convertir en symbole.<br/><br/>" +
             "S'y ajoute un piège de surface : « au <strong>moins</strong> $50$ » contient le " +
             "mot « moins » et se traduit par $\\geq$. L'élève qui traduit mot à mot se trompe " +
             "systématiquement, et il se trompe d'autant plus qu'il lit vite.",
      remede: "Interdire la traduction mot à mot, qui est précisément ce qui échoue, et lui " +
              "substituer un test sur un exemple.<br/><br/>" +
              "La question à poser à chaque fois est : « est-ce que $60$ convient ? ». Pour un " +
              "budget qui ne doit pas dépasser $50$, la réponse est non, donc les valeurs " +
              "acceptées sont EN DESSOUS, donc c'est $\\leq$. L'élève tranche sur un cas " +
              "concret, où son bon sens ne le trompe jamais, au lieu de tirer au sort entre " +
              "deux symboles.<br/><br/>" +
              "Faire ensuite vérifier la borne elle-même, séparément : « est-ce que $50$ tout " +
              "juste convient ? ». C'est ce qui décide entre $<$ et $\\leq$, et cette " +
              "question-là est presque toujours sautée.<br/><br/>" +
              "Construire enfin, avec la classe, un petit répertoire des formulations " +
              "rencontrées. La liste est courte — une dizaine d'expressions couvrent tous les " +
              "énoncés de l'année — et elle sert jusqu'en terminale.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 1 est un
         problème de budget (« un client dispose d'un budget maximal de... »)
         dont la mise en inéquation est exactement cette traduction. La tâche
         est présente dans la banque sous plusieurs habillages (plombier,
         forfait téléphonique, artisan), ce qui permet de la faire répéter
         sans que l'élève reconnaisse un exercice déjà fait. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Changer un terme de membre sans changer son signe",
      eleve: "Pour $5 - 2x = 3x + 15$, l'élève écrit $5 + 15 = 3x + 2x$, soit $20 = 5x$ et " +
             "$x = 4$, au lieu de $5 - 15 = 3x + 2x$, qui donne $x = -2$.",
      cause: "L'élève a mémorisé « on fait passer de l'autre côté », qui est une formule de " +
             "classe et non une opération. Elle ne dit rien du signe, donc elle ne peut pas " +
             "guider le calcul : l'élève déplace les termes comme on déplace des objets, et le " +
             "signe reste attaché à la place plutôt qu'au nombre.<br/><br/>" +
             "L'erreur est d'autant plus tenace que la méthode marche une fois sur deux, quand " +
             "les signes tombent bien.",
      remede: "Bannir provisoirement l'expression « faire passer » et exiger l'écriture de " +
              "l'opération réellement effectuée : « je retire $15$ aux deux membres ». Écrite, " +
              "elle s'applique identiquement à gauche et à droite, et le signe suit tout " +
              "seul.<br/><br/>" +
              "Demander cette ligne intermédiaire explicitement pendant quelques séances, même " +
              "si elle alourdit. Elle disparaîtra d'elle-même une fois le geste " +
              "compris ; supprimée trop tôt, elle laisse la formule creuse.<br/><br/>" +
              "Faire systématiquement la <strong>vérification</strong> en réinjectant la " +
              "solution dans l'équation de départ. Avec $x = 4$, le membre de gauche vaut $-3$ " +
              "et celui de droite $27$ : l'élève voit que sa réponse est fausse sans que " +
              "personne ait à le lui dire, ce qui est exactement le ton qu'on cherche.<br/><br/>" +
              "Aucun exercice de la banque ne travaille spécifiquement cette erreur : les " +
              "générateurs produisent des équations à inconnue dans un seul membre, ou des " +
              "inéquations, mais pas d'équation à inconnue des deux côtés. La remédiation " +
              "demande donc quelques équations écrites à la main, du type $a - bx = cx + d$ " +
              "avec une solution négative.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : pointer une inéquation ou une équation à inconnue unique
         n'aiderait pas un élève qui bute sur la transposition entre deux
         membres. Le remède le dit explicitement et indique quoi écrire à la
         place, comme le font déjà six remédiations de la sixième, une de la
         quatrième et une des vecteurs. */
      exercice: null
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 résoudre $7x - 3 = 25$ : technique pure, aucune décision à prendre.
        « calculer ».
     Q2 ensemble solution de $-3x + 9 > 0$ parmi quatre intervalles : l'élève
        doit conclure du signe du coefficient au sens de l'inégalité, puis
        reconnaître l'écriture correcte. Le calcul est trivial ($x < 3$) ;
        toute la difficulté est le raisonnement sur le sens. « raisonner ».
     Q3 RÉÉCRITE le 2026-09-13 par la session précédente : une situation
        d'abonnement à mettre en inéquation. Traduire un énoncé en écriture
        mathématique, c'est « modéliser ».
     Q4 ensemble solution de $4x - 2 \geq 10$ : ici le coefficient est
        positif, donc aucun renversement ; ce qui est en jeu est l'ÉCRITURE
        de l'ensemble, crochet compris. Lire et produire la notation
        d'intervalle, c'est « représenter ».
     Q5 résoudre $5 - 2x = 3x + 15$ : inconnue des deux côtés, donc une
        transposition à mener sans faute de signe. Reste « calculer ».

     « Chercher » et « communiquer » ne sont PAS déclarées : aucune des cinq
     questions ne demande d'explorer une piste ni de rédiger une explication.
     Elles sont portées par d'autres chapitres du niveau — l'étiquette suit
     l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "raisonner", "modéliser", "représenter", "calculer"]
  }
};
