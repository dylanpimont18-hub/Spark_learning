/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-atomes-molecules.prof.js
   Fiche professeur du chapitre « Les atomes et les molécules » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au moment
   de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau
   (physique-4e-lois-circuits.prof.js). Référentiel PHYSIQUE : s'approprier,
   analyser, réaliser, valider, communiquer.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-atomes-molecules"] = {

  /* Premier chapitre du niveau dans l'ordre des dépendances comme dans celui
     du livre : il n'a aucun prérequis de quatrième, et c'est un fait sur la
     matière. Le vocabulaire de l'atome et de la molécule s'installe ici pour
     la première fois ; le cycle 3 n'a introduit que les états de la matière et
     les mélanges, sans modèle particulaire chiffré.

     C'est en revanche LUI le prérequis de deux autres chapitres du niveau :
     ch. 2 (Les transformations chimiques) réutilise formules et équations, et
     la progression le montrera dans sa colonne « Prépare ». */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 1. Le chapitre fournit le langage —
     symboles, formules, indices, coefficients — sans lequel aucune équation de
     réaction n'est lisible. Le placer ailleurs qu'en ouverture obligerait à
     parler de combustion avant de savoir écrire $\text{CO}_2$.

     Le livre le place aussi en chapitre 1 : les deux ordres coïncident. */
  rangConseille: 1,

  /* Attendus de fin d'année, programme du cycle 4 (2020), thème
     « Organisation et transformations de la matière ». Aux mots du programme. */
  attendus: [
    "Décrire la constitution et les états de la matière à l'échelle macroscopique et microscopique",
    "Interpréter les différences entre corps purs et mélanges à partir du modèle moléculaire",
    "Utiliser le symbole des atomes et la formule chimique des molécules pour décrire une espèce chimique"
  ],

  note: "Le modèle atomique et moléculaire, les symboles, les formules chimiques et la " +
        "distinction corps pur / mélange sont au programme du cycle 4. Le chapitre s'y tient.<br/><br/>" +
        "<strong>Ce que le chapitre ne fait pas, volontairement.</strong> Aucune " +
        "<strong>masse</strong> et aucune <strong>mole</strong> n'apparaissent : on compte des " +
        "atomes, on ne les pèse jamais. C'est conforme au cycle 4, et il est utile de le dire aux " +
        "élèves qui auraient entendu parler de « masse molaire » — cette notion est de seconde. De " +
        "même, la structure interne de l'atome (noyau, protons, électrons) n'est " +
        "<strong>pas</strong> abordée ici : l'atome y est une bille insécable, et c'est le " +
        "chapitre de troisième « Structure de l'atome et ions » qui l'ouvrira. Annoncer cette " +
        "limite évite la question « mais qu'est-ce qu'il y a dedans ? » en pleine séance, ou " +
        "permet d'y répondre d'un mot.<br/><br/>" +
        "Un point de vigilance sur les exercices : tous portent sur le " +
        "<strong>dénombrement</strong> d'atomes à partir d'une formule et d'un coefficient. " +
        "L'écriture des formules elle-même (savoir que l'eau s'écrit $\\text{H}_2\\text{O}$) n'est " +
        "donc jamais évaluée par les exercices tirés : elle relève du cours et de l'évaluation, " +
        "dont la question 2 porte sur le symbole du fer.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées : jamais de renvoi vers l'évaluation notée, et chaque renvoi
     vérifié contre le tirage réel de la graine du livre.

     Les erreurs de ce chapitre sont des erreurs de LECTURE D'ÉCRITURE
     SYMBOLIQUE — où se place un nombre, ce qu'il compte — et non des erreurs
     de calcul : l'arithmétique se réduit à une multiplication d'entiers. */
  erreurs: [
    {
      titre: "Confondre le coefficient et l'indice",
      eleve: "Pour $3\\,\\text{O}_2$, l'élève annonce $3$ atomes d'oxygène (il lit le coefficient " +
             "comme un nombre d'atomes), ou $32$, ou encore $5$ en additionnant les deux nombres.",
      cause: "Deux nombres encadrent le symbole et rien, dans leur apparence, ne dit qu'ils " +
             "comptent des choses différentes. L'élève n'a pas encore associé la " +
             "<strong>position</strong> à une <strong>fonction</strong> : devant la formule, on " +
             "compte des molécules ; collé au symbole, en bas, on compte des atomes " +
             "<strong>dans une seule</strong> molécule.",
      remede: "Faire dire la formule en français avant tout calcul, dans cet ordre exact : " +
              "« <strong>trois</strong> molécules, et <strong>chaque</strong> molécule contient " +
              "<strong>deux</strong> atomes d'oxygène ». Le mot « chaque » est celui qui débloque " +
              "l'erreur : il force à séparer le nombre de molécules du contenu d'une " +
              "molécule.<br/><br/>" +
              "Puis faire écrire le calcul en deux temps, jamais en un seul : d'abord le contenu " +
              "d'<strong>une</strong> molécule, ensuite la multiplication par le nombre de " +
              "molécules. Un élève qui écrit « $1$ molécule $\\rightarrow 2$ atomes, donc " +
              "$3 \\times 2 = 6$ » ne peut plus confondre les deux nombres, parce qu'ils " +
              "n'apparaissent pas à la même ligne.<br/><br/>" +
              "Le dessin aide plus que la règle : faire tracer les trois molécules côte à côte, " +
              "deux ronds chacune, et compter les ronds. C'est la seule fois de l'année où " +
              "compter sur un dessin est plus rapide que d'appliquer une règle.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 0) : l'exercice 2 est « on dispose de
         7 CH4 (soit 7 molécules du méthane) ; combien d'atomes
         contiennent-elles au total, tous éléments confondus ? ». Les DEUX
         nombres y sont indispensables et distincts (7 molécules, 5 atomes par
         molécule, 35 au total), si bien qu'aucune confusion ne donne la bonne
         réponse : lire le coefficient seul donne 7, l'indice seul donne 4 ou
         5, les additionner donne 12. La solution imprimée détaille exactement
         les deux temps que le remède demande d'exiger. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier l'atome sans indice",
      eleve: "Pour $\\text{CH}_4$, l'élève compte $4$ atomes au total : il lit l'indice $4$ sur " +
             "l'hydrogène et ne compte pas le carbone, qui ne porte aucun indice.",
      cause: "L'absence de signe est lue comme une absence de quantité. C'est un réflexe " +
             "raisonnable ailleurs — une case vide vaut souvent zéro — et il est ici exactement " +
             "faux : en chimie, l'absence d'indice signifie <strong>un</strong>. Rien dans " +
             "l'écriture ne le rappelle, la convention doit être installée.",
      remede: "Faire <strong>réécrire</strong> la formule avec tous ses indices explicites avant de " +
              "compter : $\\text{C}_1\\text{H}_4$. L'écriture n'est pas conventionnelle et il faut " +
              "le dire — on ne l'utilise pas en chimie — mais comme étape de brouillon elle " +
              "supprime l'erreur, parce qu'il n'y a plus de case vide à interpréter.<br/><br/>" +
              "Ancrer ensuite la convention par sa raison : écrire $\\text{C}_1$ serait redondant, " +
              "comme écrire « $1x$ » au lieu de « $x$ » en mathématiques. Le parallèle avec le " +
              "calcul littéral de quatrième, vu la même année, rend la règle familière au lieu " +
              "d'arbitraire.<br/><br/>" +
              "Le quiz 1 du chapitre porte précisément là-dessus : son distracteur « $4$ atomes " +
              "(seulement les atomes d'hydrogène) » est exactement la réponse de l'élève qui " +
              "oublie le carbone. Le poser à l'oral avant les exercices écrits attrape l'erreur " +
              "avant qu'elle ne se répète douze fois.",
      /* Renvoi vers le QUIZ, en connaissance de cause. Les exercices « total »
         du chapitre contiennent bien un atome sans indice, mais leur solution
         imprimée donne la décomposition complète (« 1 (C) + 4 (H) = 5 »), qui
         révèle la réponse avant que l'élève ait pu se tromper. Le quiz 1, lui,
         propose l'erreur comme distracteur : c'est lui qui la travaille. */
      exercice: { type: "quiz", n: 1 }
    },
    {
      titre: "Couper un symbole de deux lettres",
      eleve: "Devant $\\text{Fe}$, l'élève lit « du fluor et un autre atome », ou compte deux " +
             "éléments différents. Devant $\\text{Na}$, il cherche de l'azote.",
      cause: "L'élève lit lettre à lettre, comme un mot, alors qu'un symbole chimique est un " +
             "<strong>bloc</strong> indivisible. La règle typographique — majuscule seule, ou " +
             "majuscule suivie d'une minuscule — n'a pas encore été perçue comme porteuse " +
             "d'information, alors qu'elle est ce qui permet de découper la formule.",
      remede: "Donner la règle de découpage comme une règle de lecture, et la faire appliquer sur " +
              "des formules à trois éléments : <strong>une majuscule ouvre toujours un nouveau " +
              "symbole, une minuscule appartient toujours au symbole précédent</strong>. " +
              "S'entraîner sur $\\text{NaCl}$, $\\text{CaCO}_3$, $\\text{FeS}$ : trois découpages, " +
              "trois vérifications.<br/><br/>" +
              "Faire ensuite chercher les symboles dans un tableau périodique affiché : constater " +
              "qu'« Fe » y figure et que « F » + « e » n'a pas de sens ancre la règle sur une " +
              "source extérieure, ce qui vaut mieux qu'une affirmation du professeur.<br/><br/>" +
              "L'étape 1 de la méthode du cours porte cet avertissement mot pour mot (« attention " +
              "à ne pas couper un symbole à deux lettres : $\\text{Fe}$ est un seul symbole, pas " +
              "« F » suivi de « e » ») : la relire au moment où l'erreur apparaît, et non à " +
              "l'avance.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les cinq molécules du générateur sont H2O, CO2, CH4, NH3 et
         C2H6, dont AUCUNE ne contient de symbole à deux lettres. Les
         quarante-deux exercices tirés ne peuvent donc pas travailler cette
         erreur, et l'évaluation seule la traite (sa question 2 porte sur le
         symbole du fer, mais une remédiation ne renvoie jamais vers
         l'évaluation notée). La remédiation demande des formules à construire
         hors du livre, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Appeler « mélange » un corps pur composé",
      eleve: "Pour $\\text{CO}_2$ : « c'est un mélange, puisqu'il y a du carbone et de l'oxygène ».",
      cause: "Le mot « mélange » est emprunté au langage courant, où il désigne tout ce qui " +
             "contient plusieurs ingrédients. L'élève applique ce sens à la formule, ce qui est " +
             "cohérent avec le français et faux en chimie : ce qui distingue un mélange, ce n'est " +
             "pas la présence de plusieurs éléments, c'est la présence de plusieurs " +
             "<strong>espèces chimiques</strong> en proportions <strong>variables</strong>.",
      remede: "Déplacer la question. Ne pas demander « y a-t-il plusieurs éléments ? » mais " +
              "« combien de <strong>sortes de molécules</strong> ? ». Une seule sorte, quelle que " +
              "soit sa complexité, fait un corps pur ; plusieurs sortes font un mélange. Le " +
              "critère porte sur les molécules, jamais sur les atomes qu'elles " +
              "contiennent.<br/><br/>" +
              "Opposer ensuite deux cas concrets qui ont le même « air » : l'eau pure " +
              "($\\text{H}_2\\text{O}$ seulement, donc corps pur, malgré deux éléments) et l'eau " +
              "salée (molécules d'eau <strong>et</strong> de sel, donc mélange). Deux éléments " +
              "d'un côté, deux espèces de l'autre : c'est l'écart entre les deux notions, et il se " +
              "voit mieux sur cet exemple que dans une définition.<br/><br/>" +
              "Le test de la <strong>proportion</strong> tranche les cas douteux : dans un " +
              "mélange, on peut ajouter du sel ; dans un corps pur composé, la proportion des " +
              "atomes est imposée par la formule et ne se modifie pas. On ne peut pas faire de " +
              "l'eau « plus oxygénée » en ajoutant de l'oxygène — on obtient une autre espèce.",
      /* Volontairement SANS renvoi. Les quarante-deux exercices tirés sont
         tous des dénombrements d'atomes : le générateur ne produit que deux
         moules (compter un élément, compter le total), et aucun ne demande de
         classer une substance. Le quiz 3 travaille bien cette erreur, mais il
         est déjà pris comme renvoi par l'erreur 2 pour un autre point, et le
         quiz ne compte que trois questions — y renvoyer deux fois donnerait à
         l'enseignant l'impression d'un chapitre plus outillé qu'il ne l'est.
         Mieux vaut le dire : cette erreur se remédie en classe, sur des
         exemples, pas sur un exercice du livre. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — combien d'atomes d'oxygène dans une molécule de $\text{CO}_2$ ?
          Prélever une information dans une écriture symbolique donnée :
          « s'approprier ».
     Q2 — le symbole chimique du fer est : … (F / Fe / FE / fer). Restitution
          d'une convention d'écriture, et jugement sur trois écritures fausses :
          « s'approprier » également — c'est la connaissance du code qui est
          évaluée, pas un raisonnement.
     Q3 — $4\,\text{CH}_4$, combien d'atomes d'hydrogène au total ? Il faut
          articuler coefficient et indice, ce qui est l'erreur 1 de cette
          fiche : « analyser ».
     Q4 — laquelle de ces substances est un mélange ? Il faut appliquer un
          critère de classement à quatre cas dont trois sont des pièges
          plausibles : « analyser ».
     Q5 — juger le raisonnement d'une élève qui ADDITIONNE le coefficient au
          lieu de le multiplier. RÉÉCRITE le 2026-09-16 : elle demandait un
          troisième dénombrement d'atomes après Q1 et Q3, soit la même tâche
          pour la troisième fois dans le même devoir. Elle porte maintenant
          sur l'erreur 1 de cette fiche et demande de produire une
          explication : « communiquer ». Le dénombrement reste nécessaire pour
          écarter les distracteurs, donc la question est plus exigeante, pas
          plus facile.

     « Réaliser » n'est pas mobilisé, et ne peut pas l'être : le chapitre n'a
     aucune activité expérimentale — on ne manipule pas un atome. La grille
     imprimée le montrera, et c'est l'information utile : un enseignant qui
     veut une trace expérimentale sur la chimie de quatrième la trouvera au
     chapitre 2, sur les tests d'identification des gaz. */
  competences: {
    evaluation: ["s'approprier", "s'approprier", "analyser", "analyser", "communiquer"]
  }
};
