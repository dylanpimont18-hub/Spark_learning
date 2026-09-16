/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-corps-purs.prof.js
   Fiche professeur du chapitre « Corps purs et mélanges » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 3, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés :
     - moule A (rapport frontal $R_f = d_{tache}/d_{eluant}$) : exercices
       IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (masse volumique $\rho = m/V$) : exercices PAIRS 2, 4, 6, 8,
       10, 12.
   Les deux moules s'arrêtent au CALCUL et ne demandent jamais la CONCLUSION :
   aucun exercice ne demande de comparer la valeur trouvée à une référence
   tabulée, de classer un échantillon en corps pur ou mélange, ni de lire une
   courbe de changement d'état — alors que c'est exactement la troisième étape
   de la méthode du cours et le cœur des trois attendus officiels. Deux des
   quatre erreurs ci-dessous sont donc volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-corps-purs"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Ce chapitre OUVRE le bloc chimie de la seconde et n'a besoin
     d'aucun des trois chapitres de mécanique qui le précèdent dans le livre.

     Candidats examinés et écartés un par un :
     - ch. 7 (Le modèle de l'atome) : le candidat le plus sérieux, puisque
       la définition D1 (« espèce chimique : ensemble d'entités — atomes,
       molécules ou ions — identiques ») emploie les trois mots que le
       chapitre 7 définit. Écarté quand même, pour deux raisons. D'abord la
       chronologie : le chapitre 7 vient APRÈS (rang 7 contre rang 4), et le
       déclarer produirait un prérequis de rang supérieur, que
       `validerPrerequis` refuse à juste titre. Ensuite et surtout, le fond :
       ce chapitre n'a pas besoin de SAVOIR ce qu'est un atome, il a besoin
       de savoir qu'il existe des espèces chimiques différentes, ce que
       l'élève sait depuis le collège. Une formule comme $H_2O$ y est un
       NOM, pas une structure à interpréter.
     - ch. 5 (Solutions aqueuses) : il s'appuie sur celui-ci (une solution
       est un mélange homogène), pas l'inverse. Le déclarer créerait le cycle
       que `validerPrerequis` refuse.
     - ch. 6 (Transformations) : même remarque, il vient après et réutilise
       la notion d'espèce chimique installée ici.
     - ch. 1 à 3 (mécanique), 8 à 10 (signaux, son, lumière) : aucun lien.
       On notera seulement que la masse volumique $\rho = m/V$ est, comme le
       poids $P = mg$ du chapitre 2, un quotient de grandeurs — mais c'est
       une parenté de forme, pas une dépendance. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 4, celui du livre. Ce chapitre ouvre le
     bloc chimie de la seconde (chapitres 4 à 7) et doit précéder les deux
     chapitres qui réutilisent sa notion centrale : le chapitre 5 (une solution
     aqueuse EST un mélange homogène) et le chapitre 6 (une transformation
     chimique fait apparaître de nouvelles ESPÈCES CHIMIQUES).

     Il est en outre le bon chapitre pour ouvrir la chimie du lycée, parce
     qu'il est le seul du bloc à partir d'une question d'observation (« ce
     liquide est-il pur ? ») plutôt que d'un modèle. La classe y entre par les
     mains et les yeux avant d'entrer par les formules.

     Le placer plus tôt dans l'année serait possible — le chapitre ne dépend
     d'aucun chapitre de seconde — mais sans intérêt : couper le bloc mécanique
     en deux pour caser une séance de chimie coûte plus qu'il ne rapporte.

     Le livre le place aussi en chapitre 4 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 4,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Constitution et transformations de la matière »,
     partie « Corps purs et mélanges au quotidien ». Repris aux mots du
     programme. */
  attendus: [
    "Identifier, à partir de valeurs de référence, une espèce chimique par ses températures de changement d'état, sa masse volumique ou par chromatographie sur couche mince",
    "Distinguer un mélange d'un corps pur à partir de résultats d'analyses physiques ou chimiques",
    "Réaliser une chromatographie sur couche mince pour comparer la composition de deux mélanges"
  ],

  note: "L'espèce chimique, le corps pur, le mélange homogène ou hétérogène, l'identification par " +
        "$T_{fus}$, par masse volumique ou par chromatographie sont au programme de seconde : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés s'arrêtent tous au <strong>calcul</strong> et ne demandent " +
        "jamais la <strong>conclusion</strong>. On y calcule un rapport frontal $R_f$ ou une masse " +
        "volumique $\\rho$, et l'exercice s'arrête là. Or la méthode du cours compte " +
        "<strong>trois</strong> étapes, et le calcul n'est que la première : comparer la valeur " +
        "obtenue à une référence tabulée, puis conclure « corps pur » ou « mélange », sont les deux " +
        "autres — et ce sont elles que les trois attendus officiels ci-dessus exigent, pas le " +
        "quotient. Aucun exercice ne fournit d'ailleurs de table de référence à laquelle comparer. " +
        "Aucun ne fait non plus lire une <strong>courbe de changement d'état</strong>, alors que le " +
        "palier de fusion est le critère le plus visuel et le plus mémorable du chapitre. " +
        "<strong>L'exemple résolu de la CCM du sirop de menthe, lui, va jusqu'au bout</strong> : il " +
        "calcule trois $R_f$, les compare entre eux, et conclut sur la pureté. C'est cet exemple, " +
        "et non les exercices, qu'il faut prendre comme modèle de la tâche attendue ; prévoir en " +
        "complément une table de valeurs tabulées et une courbe $\\theta = f(t)$ à interpréter, que " +
        "le manuel ne fournit pas.<br/><br/>" +
        "Deux remarques de terrain. D'abord, sur les valeurs tirées du moule B : elles sont " +
        "volontairement variées mais souvent <strong>invraisemblables</strong> pour l'objet " +
        "décrit — un bijou à $3{,}49$ g/cm³, un fragment minéral à $7{,}11$ g/cm³, un liquide à " +
        "$0{,}29$ g/cm³. Plutôt que d'y voir un défaut, en faire l'exercice que le chapitre ne " +
        "fournit pas : <strong>« cette valeur est-elle compatible avec de l'or ($19{,}3$) ? avec " +
        "de l'aluminium ($2{,}7$) ? »</strong> transforme un calcul isolé en identification, " +
        "gratuitement. Ensuite, le mot <strong>« pur »</strong> arrive chargé du sens du " +
        "supermarché (« pur jus », « pure laine »), où il signifie « sans additif » et non " +
        "« une seule espèce » : le premier quart d'heure gagne à séparer explicitement les deux " +
        "sens, faute de quoi un jus d'orange « pur » restera un corps pur pour une partie de la " +
        "classe jusqu'à l'évaluation.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 est celle que le cours désigne dans son encadré « piège »
     (homogène ≠ pur) et c'est la plus fréquente du chapitre ; l'erreur 2 est
     l'erreur de calcul réellement présente dans le moule A ; l'erreur 3 est
     l'erreur d'unité du moule B ; l'erreur 4 est l'erreur de lecture de la
     courbe de changement d'état, sans support dans le tirage. */
  erreurs: [
    {
      titre: "Confondre « homogène » et « pur »",
      eleve: "Devant un verre d'eau salée parfaitement limpide, l'élève conclut : « on ne voit " +
             "qu'une seule phase, donc c'est un corps pur ». Devant un sirop de fruits également. " +
             "Inversement, il refuse le statut de corps pur à un glaçon flottant dans l'eau, parce " +
             "qu'« on voit deux choses ».",
      cause: "Les deux mots répondent à deux questions que rien, dans le langage courant, ne " +
             "sépare : <strong>homogène</strong> répond à « combien de phases vois-je ? », qui est " +
             "une question d'<strong>apparence</strong> ; <strong>pur</strong> répond à « combien " +
             "d'espèces chimiques y a-t-il ? », qui est une question de <strong>composition</strong>. " +
             "L'élève ne dispose que de ses yeux, et ses yeux ne répondent qu'à la première. Sa " +
             "conclusion est donc raisonnable au vu de l'information dont il dispose — ce qui lui " +
             "manque, c'est de savoir que l'œil ne suffit pas.",
      remede: "Poser les <strong>deux questions séparément</strong>, dans cet ordre, à chaque " +
              "échantillon : « combien de phases ? » puis « combien d'espèces chimiques ? ». Deux " +
              "questions, deux réponses, deux mots. Tant qu'elles sont posées ensemble, elles se " +
              "confondent ; posées l'une après l'autre, elles ne se confondent plus.<br/><br/>" +
              "Montrer ensuite que les quatre combinaisons <strong>existent réellement</strong>, " +
              "ce qui interdit toute règle raccourcie : l'eau distillée est homogène et pure ; " +
              "l'eau salée est homogène et pourtant un mélange ; le mélange eau-huile est " +
              "hétérogène et un mélange ; et un glaçon dans son eau de fonte est hétérogène (deux " +
              "phases visibles) tout en étant un corps pur (une seule espèce, $H_2O$). Ce dernier " +
              "cas est le plus utile de tous, parce qu'il casse la règle « hétérogène donc " +
              "mélange » aussi sûrement que le premier casse « homogène donc pur ».<br/><br/>" +
              "Faire enfin trancher la question par une <strong>mesure</strong> plutôt que par un " +
              "raisonnement : chauffer l'eau salée et chercher le palier. Il n'y en a pas, alors " +
              "qu'il y en a un pour l'eau distillée. C'est l'expérience, et non le professeur, qui " +
              "dit que l'apparence trompait — et c'est ce qui rend la distinction durable.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : aucun des vingt-sept énoncés ne demande de CLASSER un
         échantillon. Les douze exercices numérotés et les quinze supplémentaires
         demandent tous un quotient — un R_f ou une masse volumique — et
         s'arrêtent avant la comparaison à une référence. Le mot « mélange »
         n'apparaît dans aucun énoncé autrement que dans le décor (« un bijou
         soupçonné d'être un alliage »), et jamais comme la réponse attendue.
         Pointer l'un d'eux enverrait l'enseignant vers une fausse remédiation,
         ce que le projet tient pour pire qu'un renvoi absent. La remédiation
         se fait sur les quatre combinaisons au tableau, puis au bec électrique,
         et le remède le dit. */
      exercice: null
    },
    {
      titre: "Inverser le rapport frontal $R_f$",
      eleve: "Pour une tache ayant migré de $5{,}12$ cm sous un front d'éluant à $6{,}4$ cm, l'élève " +
             "calcule $\\dfrac{6{,}4}{5{,}12} = 1{,}25$ au lieu de $0{,}80$. Il annonce parfois " +
             "sans sourciller un $R_f$ de $2{,}5$ ou de $3$.",
      cause: "Le quotient est mémorisé comme « une distance divisée par une autre », sans que " +
             "l'ordre soit ancré à quoi que ce soit : les deux nombres sont du même type, dans la " +
             "même unité, et rien dans l'énoncé ne dit lequel va en haut. L'élève reconstruit donc " +
             "le rapport au moment du calcul, et une chance sur deux le place à l'envers. Surtout, " +
             "rien dans le résultat ne l'alerte, parce qu'il ne sait pas encore ce qu'est un $R_f$ " +
             "« normal ».",
      remede: "Ancrer l'ordre sur un <strong>fait physique</strong> plutôt que sur une position " +
              "dans la formule : <strong>une tache ne peut jamais dépasser le front de " +
              "l'éluant</strong>, puisque c'est l'éluant qui la transporte. Le numérateur est donc " +
              "forcément le plus petit des deux nombres, et le rapport forcément inférieur à $1$. " +
              "Un $R_f$ supérieur à $1$ est impossible, comme une note supérieure à $20$ : il " +
              "s'écarte sans même être vérifié.<br/><br/>" +
              "Faire ensuite <strong>annoncer l'encadrement avant le calcul</strong> : " +
              "$0 \\leqslant R_f \\leqslant 1$, systématiquement, à voix haute. Un élève qui a " +
              "annoncé l'encadrement ne rend pas $1{,}25$ : il voit lui-même que quelque chose " +
              "cloche, ce qui vaut infiniment mieux qu'une correction reçue.<br/><br/>" +
              "Donner enfin du <strong>sens</strong> au nombre, ce qui est le plus sûr moyen de ne " +
              "plus l'inverser : un $R_f$ de $0{,}80$ signifie « cette tache a parcouru $80\\,\\%$ " +
              "du chemin de l'éluant ». C'est un pourcentage de trajet, et un pourcentage de " +
              "trajet ne dépasse pas $100\\,\\%$.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 3) : l'exercice 1 donne d_tache = 5,12 cm et
         d_eluant = 6,4 cm, réponse R_f = 0,80. Le renvoi le choisit parce que
         ce tirage est celui où l'inversion produit le résultat le plus
         DÉMONSTRATIF des six du moule A : 6,4/5,12 = 1,25, un nombre propre,
         plausible en apparence, et pourtant impossible — il annoncerait que la
         tache a doublé le front de l'éluant qui la transporte. L'élève n'a pas
         besoin de la correction pour voir l'absurdité, il lui suffit de
         l'encadrement 0 <= R_f <= 1. Les autres tirages du moule (0,4 ; 0,55 ;
         0,2 ; 0,5 ; 0,75) donnent des inverses moins parlants, parfois grands
         (1/0,2 = 5), où l'absurdité est visible mais la proximité avec 1
         — donc l'effet « presque juste » qui rend l'erreur instructive — est
         perdue. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Rendre une masse volumique sans unité, ou dans la mauvaise",
      eleve: "L'élève écrit « $\\rho = 3{,}49$ » sans rien d'autre, ou « $3{,}49$ g » pour une " +
             "masse volumique. Interrogé, il sait souvent que cela « se compte en g/cm³ » : " +
             "l'unité a été omise à l'écriture, pas ignorée.",
      cause: "Une unité <strong>composée</strong> n'est pas vécue comme une unité, mais comme un " +
             "ornement encombrant ajouté après le vrai travail. La difficulté de fond est que " +
             "g/cm³ ne désigne aucun objet familier : un gramme se soupèse, un centimètre cube se " +
             "regarde, mais « un gramme par centimètre cube » ne se représente pas — c'est un " +
             "rapport, et les rapports demandent un effort d'abstraction que l'élève n'a pas " +
             "encore fourni.",
      remede: "Renverser le statut de l'unité : elle n'est pas un ornement de la réponse, elle est " +
              "un <strong>outil de contrôle</strong> qui travaille pendant le calcul. Faire écrire " +
              "les unités <strong>dans</strong> la ligne de calcul et non seulement au bout : " +
              "$\\rho = \\dfrac{384{,}6\\ \\text{g}}{110{,}2\\ \\text{cm}^3} = 3{,}49\\ " +
              "\\text{g/cm}^3$. L'unité du résultat se lit alors dans le calcul lui-même, sans " +
              "qu'on ait à s'en souvenir.<br/><br/>" +
              "Donner ensuite à g/cm³ une <strong>traduction en français</strong> qui la rende " +
              "concrète : « $3{,}49$ g/cm³ » veut dire « un cube d'un centimètre de côté de cette " +
              "matière pèse $3{,}49$ grammes ». Une phrase qu'on peut se représenter ne s'oublie " +
              "pas, contrairement à un symbole. Enchaîner avec le repère universel, celui que " +
              "toute la classe doit garder : l'eau vaut $1{,}0$ g/cm³, donc tout ce qui est " +
              "au-dessus coule et tout ce qui est en dessous flotte.<br/><br/>" +
              "Utiliser enfin ce repère comme <strong>test de plausibilité</strong>, ce qui fait " +
              "d'une pierre deux coups : un métal est toujours nettement au-dessus de $1$ " +
              "(l'aluminium $2{,}7$, le fer $7{,}9$, l'or $19{,}3$), une huile en dessous. Une " +
              "valeur, son unité et son ordre de grandeur se contrôlent ainsi d'un même geste.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         m = 384,6 g et V = 110,2 cm³ pour « un bijou soupçonné d'être un
         alliage plutôt qu'un métal pur », réponse 3,49 g/cm³. Le renvoi le
         choisit parmi les six du moule B pour une raison précise et double.
         D'abord c'est le premier tirage du moule, donc celui que l'élève
         rencontre en premier, au moment où le pli de l'unité se prend. Ensuite
         et surtout, son DÉCOR rend le contrôle de plausibilité immédiat :
         l'énoncé parle d'un bijou, et 3,49 g/cm³ est très loin de l'or
         (19,3 g/cm³) comme de l'argent (10,5 g/cm³) — le soupçon d'alliage
         annoncé par l'énoncé se trouve donc confirmé par le calcul, à
         condition d'avoir gardé l'unité. Aucun autre tirage du moule ne relie
         aussi directement l'unité au sens de la réponse. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Ne pas voir le palier sur une courbe de changement d'état",
      eleve: "Sur une courbe $\\theta = f(t)$ qui monte, s'aplatit, puis remonte, l'élève annonce " +
             "que « la température augmente pendant toute la chauffe » et conclut à un mélange. " +
             "Ou, devant une courbe qui monte sans palier, il désigne comme palier la portion " +
             "où la pente lui semble la plus faible.",
      cause: "Lire un graphique n'est pas une compétence spontanée : ce que l'élève regarde, c'est " +
             "la <strong>montée d'ensemble</strong>, qui est le mouvement dominant de la courbe, " +
             "et le palier n'est qu'un accident local dans cette montée. S'ajoute une difficulté " +
             "de vocabulaire : « palier » n'a pas ici son sens courant d'« étape », mais le sens " +
             "très précis de « portion rigoureusement horizontale ». Rien dans le mot ne le " +
             "signale.",
      remede: "Faire d'abord tracer par la classe <strong>les deux courbes côte à côte</strong> " +
              "sur le même graphique, celle de l'eau distillée et celle de l'eau salée, à partir " +
              "de mesures réelles. La comparaison fait le travail que la description ne fait pas : " +
              "le palier de l'une se voit parce que l'autre n'en a pas.<br/><br/>" +
              "Imposer ensuite un <strong>geste de vérification</strong> plutôt qu'une " +
              "impression : poser une règle horizontale sur la portion suspectée et vérifier " +
              "qu'elle suit la courbe sur plusieurs points de mesure consécutifs. « Elle a l'air " +
              "plate » n'est pas un critère ; « elle coïncide avec l'horizontale sur quatre points » " +
              "en est un.<br/><br/>" +
              "Expliquer enfin le <strong>pourquoi</strong> du palier, qui est ce qui le rend " +
              "mémorable : pendant tout le changement d'état, l'énergie apportée sert à défaire " +
              "les liaisons entre les entités, pas à les agiter davantage — donc la température " +
              "n'augmente pas, même si l'on continue de chauffer. Un corps pur, ayant une seule " +
              "espèce, change d'état à une seule température ; un mélange, ayant plusieurs " +
              "espèces qui ne changent pas d'état au même moment, étale la transition et perd son " +
              "palier.",
      /* Volontairement SANS renvoi, même raison que l'erreur 1 et vérifiée sur
         le même tirage : les vingt-sept énoncés ne comportent AUCUNE courbe,
         aucun tableau de mesures, aucune température. Les deux moules
         (chromatographie et masse volumique) sont purement numériques et
         donnent leurs deux données dans le texte. Le critère du palier, qui
         est pourtant le plus visuel et le plus mémorable du chapitre, n'a donc
         aucun support dans les exercices — un exercice à réponse numérique
         unique ne peut pas évaluer une lecture graphique. La remédiation se
         fait sur un enregistrement réel au bec électrique, ou sur une courbe
         projetée, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — « un échantillon qui ne contient qu'une seule espèce chimique est
          appelé : … ». Pure restitution de la définition D2 du cours :
          « s'approprier ».
     Q2 — une tache migre de $4{,}5$ cm, l'éluant de $9{,}0$ cm, calculer
          $R_f$. La relation est donnée par le cours et s'applique dans le
          sens direct : « réaliser ».
     Q3 — un sirop limpide à une seule phase est-il un corps pur ? Le
          distracteur « oui, puisqu'il est homogène » est exactement l'erreur 1
          de cette fiche. Il faut juger la validité d'une conclusion tirée
          d'une observation, et reconnaître que l'observation ne suffit pas :
          « valider ».
     Q4 — $m = 270$ g, $V = 30$ cm³, calculer $\rho$. Relation donnée, sens
          direct, une division : « réaliser ».
     Q5 — la température continue d'augmenter pendant la fusion, sans palier :
          l'échantillon est probablement ? Il faut interpréter une observation
          expérimentale et remonter au critère du cours pour classer
          l'échantillon. Ce n'est pas une restitution (le mot « palier »
          n'apparaît pas dans les options) ni un simple jugement de validité :
          c'est le raisonnement d'identification lui-même, troisième étape de
          la méthode du cours — « analyser ».

     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. */
  competences: {
    evaluation: ["s'approprier", "réaliser", "valider", "réaliser", "analyser"]
  }
};
