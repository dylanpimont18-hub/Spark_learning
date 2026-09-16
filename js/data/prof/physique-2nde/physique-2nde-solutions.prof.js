/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-solutions.prof.js
   Fiche professeur du chapitre « Solutions aqueuses (concentration) »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 4, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés :
     - moule A (concentration massique $c_m = m/V$, avec conversion mL → L à
       faire) : exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (dilution, $C_f = C_m V_{prélevé} / V_{fille}$) : exercices
       PAIRS 2, 4, 6, 8, 10, 12.
   Aucun exercice ne demande de passer par la quantité de matière $n = m/M$,
   donc la CONCENTRATION MOLAIRE — pourtant la définition D3 du cours et
   l'objet de l'exemple résolu — n'est jamais calculée à partir d'une masse.
   Aucun exercice ne demande non plus de choisir la VERRERIE, ni de calculer
   un VOLUME À PRÉLEVER (la méthode du cours, pourtant, ne traite que ce
   sens-là), ni un facteur de dilution. Deux des quatre erreurs ci-dessous
   sont donc volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-solutions"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     ch. 4 (Corps purs et mélanges) : RETENU. La définition D1 de ce chapitre
     ouvre sur « mélange liquide HOMOGÈNE obtenu en dissolvant une espèce
     chimique » : les trois mots qui la portent — mélange, homogène, espèce
     chimique — sont exactement les définitions D1, D2 et D3 du chapitre 4.
     Une solution aqueuse n'est pas un objet nouveau, c'est un cas
     particulier de mélange homogène, et l'élève qui n'a pas fait le
     chapitre 4 n'a aucun moyen de comprendre pourquoi l'eau salée reste un
     mélange alors qu'on n'y voit rien. Le prérequis est donc de fond, pas de
     politesse. La dissolution est en outre l'exemple canonique de ce que le
     chapitre 4 appelle « mélange homogène ».

     Écartés, et il faut le dire parce que chacun a un argument :
     - ch. 6 (Transformation physique et chimique) : la dissolution y figure
       explicitement comme exemple de transformation PHYSIQUE, et ce
       chapitre-ci dissout sans arrêt. Mais le ch. 6 vient APRÈS (rang 6
       contre rang 5), et `validerPrerequis` refuserait à juste titre un
       prérequis de rang supérieur. Sur le fond, le rapport est d'ailleurs
       inverse : c'est le ch. 6 qui a besoin de la dissolution comme exemple,
       pas ce chapitre-ci qui a besoin de la classification des
       transformations.
     - ch. 7 (Le modèle de l'atome) : la masse molaire $M$ de la définition
       D3 est une grandeur atomique. Mais elle est ici une DONNÉE d'énoncé
       (« $M = 40$ g/mol »), jamais à retrouver, et le chapitre 7 ne la
       définit pas davantage. Écarté.
     - ch. 1 à 3 (mécanique), 8 à 10 (signaux, son, lumière) : aucun lien. */
  prerequis: [4],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre. Ce chapitre est le
     deuxième du bloc chimie de la seconde et doit venir après le chapitre 4,
     dont il est le prolongement quantitatif direct : le chapitre 4 apprend à
     dire « c'est un mélange », celui-ci apprend à dire « combien ».

     On pourrait plaider de le placer après le chapitre 6, au motif que la
     dissolution y est classée comme transformation physique. Ce serait une
     erreur de progression : le chapitre 6 utilise la dissolution comme
     EXEMPLE de sa classification, il ne l'enseigne pas. Repousser les
     solutions après lui priverait le chapitre 6 de son exemple le plus parlant
     et n'apporterait rien en échange.

     Le livre le place aussi en chapitre 5 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 5,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Constitution et transformations de la matière »,
     partie « Solutions aqueuses ». Repris aux mots du programme. */
  attendus: [
    "Déterminer la valeur d'une concentration en masse à partir de la masse de soluté dissoute dans un volume donné de solution",
    "Concevoir et mettre en œuvre un protocole pour préparer une solution par dissolution ou par dilution",
    "Déterminer la valeur de la concentration en masse d'une espèce dissoute dans une solution à l'aide d'une échelle de teintes ou d'une gamme d'étalonnage"
  ],

  note: "La solution aqueuse, le soluté et le solvant, la concentration massique, la concentration " +
        "molaire, la dilution et la verrerie de précision sont au programme de seconde : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés ne travaillent que <strong>deux</strong> gestes : diviser une " +
        "masse par un volume, et appliquer la relation de dilution dans un seul sens, celui qui " +
        "donne $C_{fille}$. Trois manques doivent être connus avant de distribuer. D'abord, la " +
        "<strong>concentration molaire n'est jamais calculée à partir d'une masse</strong> : aucun " +
        "exercice ne fait passer par $n = m/M$, alors que c'est la définition D3 du cours et tout " +
        "l'objet de l'exemple résolu de la soude. Ensuite, la <strong>relation de dilution n'est " +
        "jamais renversée</strong> : le cours, dans sa méthode, ne traite pourtant QUE l'autre " +
        "sens — « quel volume dois-je prélever pour préparer telle solution fille ? » — qui est " +
        "précisément la question du laboratoire et celle du deuxième attendu officiel ci-dessus. " +
        "Enfin, aucun exercice ne demande de <strong>choisir la verrerie</strong> ni de calculer " +
        "un facteur de dilution. Prévoir donc, en complément du manuel, au moins un exercice de " +
        "dilution « à l'envers » et une séance de travaux pratiques avec fiole et pipette " +
        "jaugées.<br/><br/>" +
        "Deux remarques de terrain. La première tient aux valeurs tirées du moule A : elles " +
        "produisent des concentrations très élevées — $247$ g/L à l'exercice 5, $260$ g/L à " +
        "l'exercice 11. Ce sont des solutions proches de la <strong>saturation</strong> (le sel de " +
        "cuisine sature l'eau vers $360$ g/L), ce qu'aucun énoncé ne signale : l'occasion, en une " +
        "minute, de dire qu'on ne peut pas dissoudre indéfiniment, et que la solubilité est une " +
        "limite physique et non une commodité de calcul. La seconde : ce chapitre repose " +
        "entièrement sur la <strong>proportionnalité</strong> et sur la manipulation des " +
        "puissances de dix (mL → L), qui sont des acquis de <strong>collège</strong> et un " +
        "chapitre de <strong>mathématiques</strong> plus qu'un chapitre de physique — la colonne " +
        "« S'appuie sur » ne peut pas le montrer, puisqu'un prérequis ne vise qu'un chapitre du " +
        "même niveau, de la même discipline.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (oubli de la conversion mL → L) est, de loin, la plus coûteuse
     du chapitre et la seule que l'exemple résolu du cours signale lui-même ;
     l'erreur 2 est l'inversion de la relation de dilution, que le cours
     désigne dans son encadré « piège » ; l'erreur 3 est la confusion entre le
     volume de solvant ajouté et le volume de solution obtenu, purement
     expérimentale ; l'erreur 4 est la confusion des deux concentrations, sans
     support dans le tirage. */
  erreurs: [
    {
      titre: "Oublier de convertir les millilitres en litres",
      eleve: "Pour $m = 46{,}6$ g de soluté dans $V = 250$ mL de solution, l'élève écrit " +
             "$c_m = \\dfrac{46{,}6}{250} = 0{,}19$ g/L au lieu de $186{,}4$ g/L. Le résultat est " +
             "mille fois trop petit, et rien dans sa copie ne le signale.",
      cause: "L'énoncé donne un volume en millilitres parce que c'est ainsi qu'on travaille au " +
             "laboratoire ; l'unité de la réponse est le g/L parce que c'est ainsi qu'on exprime " +
             "une concentration. L'élève doit donc opérer une conversion que <strong>rien dans " +
             "l'énoncé ne réclame explicitement</strong> — il faut la déduire de l'unité attendue, " +
             "ce qui suppose d'avoir lu la question jusqu'au bout et compris que « par litre » est " +
             "une consigne de calcul et pas seulement une étiquette. C'est un raisonnement, pas un " +
             "réflexe, et il n'est pas encore installé.",
      remede: "Imposer une <strong>ligne de conversion séparée</strong>, écrite avant tout calcul " +
              "et jamais dans la tête : « $V = 250$ mL $= 0{,}250$ L ». Une ligne qui existe ne " +
              "s'oublie pas ; une conversion mentale, si. L'exemple résolu du cours procède " +
              "exactement ainsi, et il faut en faire le rituel du chapitre.<br/><br/>" +
              "Faire ensuite porter les <strong>unités dans le calcul</strong> lui-même, ce qui " +
              "rend l'oubli visible : $c_m = \\dfrac{46{,}6\\ \\text{g}}{0{,}250\\ \\text{L}} = " +
              "186{,}4\\ \\text{g/L}$. Un élève qui écrit $\\dfrac{46{,}6\\ \\text{g}}{250\\ " +
              "\\text{mL}}$ obtient des g/mL, qui ne sont pas l'unité demandée — le contrôle " +
              "dimensionnel attrape l'erreur avant la correction.<br/><br/>" +
              "Donner enfin le <strong>test du facteur mille</strong>, qui est la signature de " +
              "cette erreur et la rend reconnaissable en un coup d'œil : une concentration de " +
              "l'ordre de $0{,}1$ g/L quand on a dissous des dizaines de grammes est " +
              "physiquement absurde. Repère utile à garder toute l'année : l'eau de mer contient " +
              "environ $35$ g/L de sel, un sérum physiologique $9$ g/L. Une réponse mille fois " +
              "plus petite se repère sans calcul.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 4) : l'exercice 1 donne m = 46,6 g et
         V = 250 mL, réponse 186,4 g/L. Le renvoi le choisit parmi les six du
         moule A pour une raison chiffrée. C'est le tirage où le volume n'est
         NI 1000 mL (exercice 9, où l'oubli de la conversion est sans
         conséquence : 40,8/1000 puis *1000 redonne 40,8, et l'erreur reste
         invisible) NI 100 mL (exercices 5 et 11, où le facteur 10 rattrape
         partiellement l'ordre de grandeur). Avec 250 mL, l'oubli donne 0,19
         contre 186,4 attendus : un facteur 1000 franc, immédiatement visible,
         sur un énoncé — le sérum physiologique — dont le repère réel (9 g/L)
         est justement celui que le remède installe. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Inverser les volumes dans la relation de dilution",
      eleve: "Pour un prélèvement de $50$ mL à $0{,}5$ mol/L complété à $500$ mL, l'élève écrit " +
             "$C_f = \\dfrac{0{,}5 \\times 500}{50} = 5$ mol/L au lieu de $0{,}05$ mol/L : il " +
             "trouve une solution fille <strong>plus concentrée</strong> que la solution mère.",
      cause: "La relation $C_m \\times V_{prélevé} = C_f \\times V_{fille}$ comporte quatre lettres " +
             "dont deux volumes, et l'élève associe spontanément le grand volume à la solution " +
             "mère : après tout, c'est bien la mère qui est « la grande bouteille » dans son " +
             "image mentale de la paillasse. L'erreur n'est donc pas un hasard de placement, c'est " +
             "une <strong>image concrète qui va à l'encontre de la relation</strong> — et c'est " +
             "pour cela qu'elle résiste à la simple relecture de la formule.",
      remede: "Renoncer à la formule pour commencer, et raisonner sur ce qui se " +
              "<strong>conserve</strong> : lors d'une dilution, on n'ajoute que du solvant, donc " +
              "la <strong>quantité de soluté prélevée ne change pas</strong>. Elle est la même " +
              "dans le petit volume prélevé et dans la grande fiole finale. La relation n'est que " +
              "l'écriture de cette phrase : « ce que j'ai prélevé » = « ce que j'obtiens ». Une " +
              "phrase ne s'inverse pas au hasard, contrairement à un produit en croix.<br/><br/>" +
              "Imposer ensuite un <strong>contrôle de sens systématique</strong>, avant même de " +
              "calculer : <strong>une dilution ne peut que diminuer la concentration</strong>. " +
              "Si $C_f > C_m$, le calcul est à refaire, sans même le relire — on n'a jamais " +
              "concentré une solution en y versant de l'eau. Ce test attrape l'erreur à tous les " +
              "coups et ne demande aucune mémoire.<br/><br/>" +
              "Ancrer enfin le résultat sur le <strong>facteur de dilution</strong>, qui rend le " +
              "calcul presque inutile : passer de $50$ mL à $500$ mL, c'est multiplier le volume " +
              "par $10$, donc <strong>diviser</strong> la concentration par $10$. L'élève peut " +
              "annoncer $0{,}05$ mol/L de tête et vérifier son calcul ensuite, au lieu de subir " +
              "le résultat du calcul.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         V_prélevé = 50 mL, C_m = 0,5 mol/L, V_fille = 500 mL, réponse
         0,05 mol/L. Le renvoi le choisit parmi les six du moule B parce que
         c'est celui où le facteur de dilution est le plus lisible : 500/50 = 10
         tout rond, donc la concentration est exactement divisée par dix et
         l'élève peut annoncer la réponse de tête avant de poser le calcul —
         c'est précisément le geste que le remède installe. L'inversion, elle,
         donne 5 mol/L, soit DIX FOIS la concentration mère : l'absurdité est
         maximale et se voit sans correction. Les autres tirages du moule
         (25→200, 15→250, 5→100, 10→250, 20→200) donnent des facteurs 8, 16,67
         ou 12,5 sur lesquels le calcul mental est moins immédiat, ou bien
         (l'exercice 12, facteur 10 également) arrivent trop tard dans la
         série pour installer le réflexe. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Ajouter le volume de solvant au lieu de compléter jusqu'au trait",
      eleve: "Pour préparer $100$ mL de solution, l'élève verse son soluté dans la fiole puis " +
             "ajoute $100$ mL d'eau mesurés à l'éprouvette. Ou, lors d'une dilution, il prélève " +
             "$10$ mL de solution mère puis ajoute $100$ mL d'eau, croyant obtenir une solution " +
             "fille de $100$ mL.",
      cause: "La formule $c_m = m/V$ ne dit pas de quel volume il s'agit, et l'élève choisit le " +
             "seul qu'il a mesuré : celui de l'eau. La confusion est renforcée par le langage " +
             "courant — « dissoudre dans $100$ mL d'eau » se dit tous les jours en cuisine — alors " +
             "que $V$ désigne ici le volume de la <strong>solution finale</strong>, soluté " +
             "compris. La différence est invisible pour un peu de sel, mais elle devient " +
             "considérable dès que le soluté occupe une place réelle.",
      remede: "Faire constater la différence <strong>expérimentalement</strong> plutôt que de " +
              "l'énoncer : dissoudre une masse importante de sel dans une fiole de $100$ mL " +
              "d'abord à moitié remplie, puis compléter jusqu'au trait — et faire noter que " +
              "l'eau ajoutée au total est nettement inférieure à $100$ mL. Le soluté occupe de la " +
              "place ; la voir occuper cette place vaut toutes les définitions.<br/><br/>" +
              "Réécrire ensuite la définition dans les mots du geste : $V$ est le volume " +
              "<strong>de la solution</strong>, celui qu'on lit sur la fiole au trait de jauge, " +
              "et non le volume de solvant qu'on a versé. Faire dire aux élèves " +
              "<strong>« je complète jusqu'au trait »</strong> et jamais « j'ajoute tant de " +
              "mL » : le vocabulaire du protocole porte à lui seul la distinction.<br/><br/>" +
              "Nommer enfin la <strong>verrerie</strong> par sa fonction, ce qui verrouille le " +
              "geste : la <strong>fiole jaugée</strong> mesure un volume TOTAL de solution — elle " +
              "n'a qu'un seul trait, et c'est tout son intérêt ; la <strong>pipette jaugée</strong> " +
              "mesure un volume PRÉLEVÉ ; l'éprouvette graduée, qui semble pouvoir tout faire, ne " +
              "fait précisément ni l'un ni l'autre avec la précision requise, et n'a pas sa place " +
              "dans une dilution.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : les vingt-sept énoncés emploient tous la formule exacte
         (« on complète jusqu'à un volume V = 250 mL de solution », « on
         complète avec de l'eau distillée jusqu'à un volume V_fille »), qui
         écarte l'erreur par sa seule rédaction. Aucun n'expose donc l'élève au
         choix entre « volume d'eau ajouté » et « volume de solution », et
         aucun ne demande de décrire ou de choisir un protocole : un exercice
         sur papier ne peut pas évaluer un geste de paillasse. Pointer l'un
         d'eux enverrait l'enseignant vers une remédiation qui n'en est pas
         une. L'erreur se remédie en travaux pratiques, fiole en main, et le
         remède le dit. */
      exercice: null
    },
    {
      titre: "Confondre concentration massique et concentration molaire",
      eleve: "L'élève annonce « $c = 186{,}4$ mol/L » pour une concentration massique, ou divise " +
             "directement une masse par un volume en attendant des mol/L. Interrogé sur la " +
             "différence, il répond que « c'est la même chose, juste écrit autrement ».",
      cause: "Les deux grandeurs se calculent par le même geste — une division par un volume — " +
             "portent des symboles voisins ($c_m$ et $c$) et répondent à la même question " +
             "intuitive : « y en a-t-il beaucoup ? ». Ce qui les sépare n'est pas le calcul, c'est " +
             "la façon de <strong>compter le soluté</strong> : en grammes d'un côté, en " +
             "<strong>nombre d'entités</strong> de l'autre. Or la mole est une notion neuve et " +
             "abstraite, et rien dans l'expérience quotidienne ne pousse à compter des molécules " +
             "plutôt qu'à les peser.",
      remede: "Séparer les deux par la <strong>question à laquelle chacune répond</strong>, et " +
              "non par leur formule : $c_m$ répond à « quelle MASSE de soluté par litre ? », $c$ " +
              "répond à « COMBIEN D'ENTITÉS de soluté par litre ? ». Deux questions différentes, " +
              "deux grandeurs différentes, et le lien entre elles est la masse molaire $M$, qui " +
              "est le prix d'une mole en grammes.<br/><br/>" +
              "Rendre ensuite la distinction <strong>indispensable</strong> par un exemple où elle " +
              "décide : $1$ g de dihydrogène et $1$ g de dioxygène ont la même concentration " +
              "massique dans un même volume, mais le dihydrogène contient seize fois plus " +
              "d'entités — donc seize fois plus de « choses » capables de réagir. En chimie, ce " +
              "qui compte n'est presque jamais la masse : c'est le nombre. La mole n'est pas une " +
              "complication, c'est ce qui permet de compter l'invisible.<br/><br/>" +
              "Imposer enfin l'<strong>unité comme test systématique</strong>, qui ne demande " +
              "aucune compréhension et attrape l'erreur à tous les coups : un résultat en g/L " +
              "n'est jamais une concentration molaire, un résultat en mol/L n'est jamais une " +
              "concentration massique. Et pour passer de l'une à l'autre, il faut " +
              "<strong>obligatoirement</strong> avoir divisé par $M$ à un moment : si $M$ " +
              "n'apparaît nulle part dans le calcul, le résultat n'est pas en mol/L.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : aucun des vingt-sept énoncés ne fait passer de la masse à la
         quantité de matière. Le moule A donne une masse et demande des g/L
         (jamais des mol/L) ; le moule B donne des mol/L et rend des mol/L
         (jamais de masse, jamais de masse molaire). La masse molaire M
         n'apparaît dans AUCUN des vingt-sept énoncés. La confrontation des
         deux concentrations, qui est le seul geste capable de remédier à cette
         erreur, n'a donc aucun support dans les exercices : un élève peut les
         réussir tous en ignorant qu'il existe deux concentrations. Seul
         l'exemple résolu du cours (la soude, M = 40 g/mol) travaille
         réellement le passage par n = m/M — c'est vers lui qu'il faut ramener
         l'élève, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — $m = 12$ g, $V = 400$ mL, calculer $c_m$ en g/L. La relation est
          donnée par le cours et s'applique dans le sens direct. On aurait pu
          plaider « analyser » au motif que la conversion mL → L doit être
          décidée par l'élève ; c'est excessif — la conversion est une
          exécution, pas un choix de méthode, et la relation n'est ni à
          renverser ni à sélectionner. « réaliser ».
     Q2 — « quelle grandeur reste rigoureusement conservée lors d'une
          dilution ? », avec « le volume » et « la concentration » en
          distracteurs. Restitution du principe énoncé en D4 du cours :
          « s'approprier ».
     Q3 — $V_{prélevé} = 50$ mL, $C_m = 0{,}50$ mol/L, $V_{fille} = 250$ mL,
          calculer $C_f$. La relation de dilution est donnée sous forme de
          produit croisé et doit être RENVERSÉE pour isoler $C_f$, en plaçant
          correctement les deux volumes — c'est exactement l'erreur 2 de cette
          fiche, et c'est un choix de méthode avant d'être un calcul :
          « analyser ».
     Q4 — RÉÉCRITE le 2026-09-17. L'ancien énoncé ($n = 0{,}30$ mol,
          $V = 1{,}5$ L, calculer $c$) appliquait une relation donnée dans le
          sens direct, sans même une conversion — le geste que la Q1
          ($c_m = m/V$) et la Q3 (dilution) du même devoir mobilisent déjà, et
          que les vingt-sept exercices du chapitre répètent : la question était
          redondante, et elle étiquetait « réaliser » une troisième exécution.
          Le nouvel énoncé demande de juger le protocole de Sarah, qui calcule
          correctement $V = n/c = 1{,}5$ L puis ajoute $1{,}5$ L d'eau à son
          soluté, et d'EXPLIQUER pourquoi le volume de la relation est celui de
          la solution et non celui du solvant ajouté : produire une
          explication, donc « communiquer ».
          Le calcul reste nécessaire pour écarter le distracteur 1, qui divise
          à l'envers ($0{,}30/0{,}20$ contre $0{,}20/0{,}30$).
          La question porte désormais sur l'erreur 3 de cette fiche — « ajouter
          le volume de solvant au lieu de compléter jusqu'au trait » — qui est
          explicitement SANS renvoi parce que les vingt-sept énoncés tirés
          emploient tous la formule « on complète jusqu'à un volume $V$ de
          solution » et n'exposent donc jamais l'élève au choix.
     Q5 — quel instrument pour prélever avec précision ? La question porte sur
          le choix de la verrerie, donc sur le geste de laboratoire :
          « réaliser ». Elle ne peut l'évaluer que déclarativement — c'est la
          limite d'une évaluation écrite, et c'est pourquoi l'erreur 3 de cette
          fiche reste sans renvoi vers un exercice.

     « Communiquer » est mobilisé une fois depuis la réécriture de la Q4, sur
     le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique. « Valider » reste absent : aucune question ne
     demande de juger une vraisemblance. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "communiquer", "réaliser"]
  }
};
