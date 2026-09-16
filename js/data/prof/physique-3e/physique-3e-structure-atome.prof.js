/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-structure-atome.prof.js
   Fiche professeur du chapitre « Structure de l'atome et ions » (troisième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-3e-resistance-ohm.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-structure-atome"] = {

  /* Aucun prérequis de troisième : le chapitre ouvre l'année et n'a rien
     devant lui.

     Son prérequis réel est le chapitre « Les atomes et les molécules » de
     QUATRIÈME, qui a installé le symbole chimique, la formule et l'atome comme
     bille insécable. Il n'est pas déclarable ici — `prerequis` ne vise que des
     chapitres du même niveau — et la note le signale à l'enseignant, parce que
     ce chapitre-ci commence précisément par OUVRIR la bille.

     C'est lui, en revanche, qui prépare le chapitre 2 (Les réactions
     chimiques) : la progression le montrera dans sa colonne « Prépare ». */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 1, celui du livre. Le chapitre est la
     reprise naturelle de la chimie de quatrième en début d'année — on
     réouvre l'atome connu pour en montrer l'intérieur — et il fournit les
     ions dont le chapitre 2 a besoin.

     Aucune raison de le déplacer : il ne dépend de rien et conditionne la
     suite du bloc chimie. */
  rangConseille: 1,

  // Attendus de fin d'année, cycle 4 (2020), thème « Organisation et
  // transformations de la matière ». Aux mots du programme.
  attendus: [
    "Décrire la constitution de l'atome : noyau composé de protons et de neutrons, entouré d'électrons",
    "Utiliser le numéro atomique et le nombre de masse pour déterminer la composition d'un atome",
    "Interpréter la formation d'un ion par gain ou perte d'électrons"
  ],

  note: "Le modèle de l'atome, le numéro atomique, le nombre de masse et la formation des ions " +
        "sont au programme du cycle 4.<br/><br/>" +
        "<strong>Ce chapitre ouvre la bille de quatrième.</strong> En quatrième, l'atome était " +
        "insécable ; ici il a un intérieur. Le dire explicitement en ouverture évite que les " +
        "élèves croient avoir mal retenu le cours de l'an passé — les deux modèles sont vrais, " +
        "à deux niveaux de description différents, et c'est une leçon de physique en soi.<br/><br/>" +
        "<strong>La répartition en couches K, L, M n'est plus au programme du cycle 4</strong> " +
        "depuis 2016 : elle figure dans le cours de ce chapitre (définition D5, méthode étape 2, " +
        "schéma du sodium) mais n'est demandée par <strong>aucun</strong> exercice tiré, ni par " +
        "aucune question d'évaluation. C'est un choix de l'ouvrage, utile pour expliquer " +
        "<strong>pourquoi</strong> un atome forme tel ion plutôt que tel autre, et à traiter " +
        "comme une ouverture — pas comme une notion à évaluer. Une classe en difficulté peut " +
        "l'écarter sans rien perdre des attendus.<br/><br/>" +
        "<strong>Un mot sur les valeurs.</strong> Les exercices tirés utilisent de vrais éléments " +
        "avec leurs vrais $Z$ et $A$ (fluor, sodium, magnésium, chlore...). Un tableau périodique " +
        "affiché en classe permet donc de vérifier chaque donnée, ce qui vaut mieux que de " +
        "s'en remettre à l'énoncé et habitue à la source.",

  erreurs: [
    {
      titre: "Changer le nombre de protons pour former un ion",
      eleve: "Pour l'ion $Na^{+}$, l'élève retire un <strong>proton</strong> au noyau, ou ajoute " +
             "un proton « pour rendre positif ». Il obtient une autre espèce sans s'en apercevoir.",
      cause: "Le raisonnement sur la charge est correct — il faut un déséquilibre pour obtenir une " +
             "charge — mais l'élève choisit la particule la plus simple à manipuler dans sa tête : " +
             "le proton porte « le plus », donc pour être positif il faut « du plus ». Rien ne lui " +
             "signale que les protons sont hors d'atteinte d'une transformation chimique.",
      remede: "Poser la règle comme une <strong>interdiction absolue</strong>, et la justifier : le " +
              "noyau ne change <strong>jamais</strong> au cours d'une transformation chimique. Ce " +
              "qui bouge, ce sont uniquement les électrons — ils sont à l'extérieur, ils sont " +
              "deux mille fois plus légers, et ce sont eux qu'un atome voisin peut " +
              "attraper.<br/><br/>" +
              "L'argument qui emporte l'adhésion est celui de l'<strong>identité</strong> : changer " +
              "le nombre de protons, c'est changer d'<strong>élément chimique</strong>. Retirer un " +
              "proton au sodium ($Z=11$) donne du néon ($Z=10$), pas un ion sodium. On aurait " +
              "transformé du sel en gaz noble, ce qu'aucune réaction chimique ne fait — c'est de " +
              "la physique nucléaire.<br/><br/>" +
              "Faire écrire le bilan en trois lignes séparées pour chaque ion : protons " +
              "(inchangés), neutrons (inchangés), électrons (seuls modifiés). Trois lignes dont " +
              "deux ne changent pas : la structure de l'écriture porte la règle, et l'élève ne " +
              "peut plus toucher au noyau par distraction.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 0) : l'exercice 2 est « l'atome de sodium
         (Z = 11), qui perd 1 électron pour former l'ion Na+ ; calcule le
         nombre d'électrons que possède cet ion » — réponse 10. L'énoncé dit
         explicitement « perd 1 électron », ce qui est exactement le garde-fou
         du remède : la particule concernée est nommée, l'élève n'a pas à
         choisir, et la nouvelle figure du chapitre porte la charge du noyau
         (+11) inchangée à côté du compte d'électrons. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre le nombre de masse et le nombre de neutrons",
      eleve: "Pour le fluor ($Z=9$, $A=19$), l'élève annonce $19$ neutrons : il lit $A$ comme le " +
             "nombre de neutrons au lieu du total des nucléons.",
      cause: "Le mot « masse » est associé à ce qui est lourd, et l'élève sait que les neutrons " +
             "sont dans le noyau : il en conclut que le « nombre de masse » les compte. Les deux " +
             "lettres $A$ et $Z$ n'ont par ailleurs aucun contenu mnémonique, et rien dans leur " +
             "forme ne dit laquelle compte quoi.",
      remede: "Faire nommer $A$ par ce qu'il compte, et non par son nom : $A$ est le nombre de " +
              "particules <strong>dans le noyau</strong>, protons et neutrons confondus — " +
              "c'est-à-dire le <strong>total</strong>. Le nombre de neutrons est donc un reste, " +
              "obtenu par soustraction, et jamais une donnée lue directement.<br/><br/>" +
              "Écrire systématiquement la relation dans le sens du total, avant de l'inverser : " +
              "$A = Z + N$ d'abord, $N = A - Z$ ensuite. Dans ce sens, l'égalité se lit comme une " +
              "phrase vraie (« le total, c'est les protons plus les neutrons »), alors que " +
              "$N = A - Z$ seule est une formule à retenir.<br/><br/>" +
              "Ajouter un contrôle de vraisemblance qui vaut pour presque tout le tableau " +
              "périodique : le nombre de neutrons est du même ordre que le nombre de protons, " +
              "en général un peu supérieur. Annoncer $19$ neutrons pour $9$ protons, c'est " +
              "annoncer un noyau deux fois trop lourd — l'élève peut le voir seul.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 1 donne le
         fluor, Z = 9 et A = 19, et demande le nombre de neutrons (réponse 10).
         C'est le tirage le plus favorable du chapitre pour cette erreur :
         confondre A et N donne 19, presque le double de la bonne réponse, et
         le contrôle de vraisemblance du remède (N voisin de Z) tranche
         immédiatement. C'est aussi le premier exercice, donc celui où
         l'habitude se prend. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Se tromper de signe entre cation et anion",
      eleve: "« L'atome gagne un électron, donc il devient positif. » L'élève associe le gain à " +
             "la charge positive, et la perte à la charge négative.",
      cause: "L'association « gagner = plus » est solide et vraie partout ailleurs. Elle est ici " +
             "exactement inversée, parce que ce qu'on gagne est <strong>négatif</strong> : gagner " +
             "des charges négatives rend négatif. Le raisonnement de l'élève est cohérent, il " +
             "manque seulement le signe de ce qui est échangé.",
      remede: "Toujours faire dire la charge de l'électron <strong>avant</strong> de conclure sur " +
              "celle de l'ion. L'électron est <strong>négatif</strong> : en gagner rend plus " +
              "négatif, en perdre laisse un excédent de positif. Deux étapes, dans cet ordre, et " +
              "l'erreur devient impossible.<br/><br/>" +
              "Le comptage explicite vaut mieux que la règle : pour $Na^{+}$, $11$ protons " +
              "positifs contre $10$ électrons négatifs, donc il reste $+1$. L'élève voit alors " +
              "que le « plus » ne vient pas de ce qu'on a ajouté, mais de ce qui " +
              "<strong>reste</strong> quand on a enlevé du négatif.<br/><br/>" +
              "Éviter absolument le moyen mnémotechnique sur les mots « cation » et « anion », " +
              "qui ajoute deux termes à retenir sans expliquer quoi que ce soit. Un élève qui " +
              "compte protons et électrons n'a besoin d'aucun des deux mots pour trouver la " +
              "charge ; il les apprendra comme du vocabulaire, une fois la notion en place.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 4 est « l'atome
         de chlore (Z = 17), qui gagne 1 électron pour former l'ion Cl- ».
         C'est le seul des deux sens qui prend l'erreur à revers : l'élève y
         GAGNE un électron et l'ion est NÉGATIF, ce qui contredit directement
         l'association fautive « gagner = positif ». L'exercice 2 (sodium qui
         perd, ion positif) la confirmerait au contraire, et serait un mauvais
         renvoi pour cette erreur-ci — il est d'ailleurs déjà pris par
         l'erreur 1, pour une autre raison. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Remplir les couches sans respecter leur ordre",
      eleve: "Pour le sodium ($Z=11$), l'élève écrit K(2) L(9), ou répartit les électrons " +
             "également sur les trois couches, ou place un électron sur M avant de saturer L.",
      cause: "Deux règles se cumulent et l'élève n'en applique qu'une : les couches ont une " +
             "<strong>capacité maximale</strong> (2, 8, 8) et elles se remplissent dans un " +
             "<strong>ordre imposé</strong> (K, puis L, puis M). Sans l'ordre, la capacité ne " +
             "suffit pas à déterminer la configuration ; sans la capacité, l'ordre non plus.",
      remede: "Présenter le remplissage comme un <strong>escalier</strong> : on ne monte pas une " +
              "marche avant d'avoir posé le pied sur la précédente. K se remplit complètement " +
              "($2$), puis L complètement ($8$), et seul le reste va sur M. Pour le sodium : " +
              "$11 - 2 - 8 = 1$, donc K(2) L(8) M(1).<br/><br/>" +
              "Exiger la <strong>vérification par la somme</strong>, qui attrape toutes les " +
              "erreurs de ce type sans en distinguer la cause : le total des électrons répartis " +
              "doit valoir exactement $Z$. K(2) L(9) donne $11$ — la somme est juste, mais la " +
              "capacité de L est dépassée. Il faut donc les deux contrôles : la somme " +
              "<strong>et</strong> le respect des capacités.<br/><br/>" +
              "Le schéma du sodium dans le cours est fait pour cela, et son intérêt dépasse la " +
              "configuration : l'unique électron de la couche M y est marqué différemment, " +
              "parce que c'est celui que l'atome cède pour former $Na^{+}$. La répartition sert " +
              "alors à expliquer l'ion, au lieu d'être un exercice de rangement.",
      /* Volontairement SANS renvoi, et c'est cohérent avec la note du
         chapitre : les quarante-deux exercices tirés ne demandent JAMAIS de
         répartition électronique — le générateur ne produit que deux moules
         (nombre de neutrons, nombre d'électrons d'un ion). La notion n'est
         d'ailleurs plus au programme du cycle 4 depuis 2016, et l'évaluation
         ne l'aborde pas non plus. Elle vit dans le cours seul, en ouverture,
         et la remédiation s'y fait — pas sur un exercice du livre. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — calcium, $Z=20$ et $A=40$, nombre de neutrons. Application directe
          de $N = A - Z$ avec les deux données fournies : « s'approprier ».
     Q2 — le numéro atomique correspond toujours à … ? Restitution d'une
          définition du cours : « s'approprier ».
     Q3 — potassium ($Z=19$) qui perd un électron : combien d'électrons ?
          Il faut articuler neutralité de l'atome et effet de la perte, ce qui
          est l'erreur 1 de cette fiche : « analyser ».
     Q4 — lors de la transformation d'un atome en ion, qu'est-ce qui change ?
          Il faut juger quatre affirmations dont trois sont plausibles, et
          écarter celles qui touchent au noyau : « valider ».
     Q5 — l'ion $O^{2-}$ a dix électrons, $Z=8$ : gain ou perte ? Il faut
          remonter de la composition à la transformation, donc raisonner à
          l'envers : « analyser ».

     Ni « réaliser » ni « communiquer » ne sont mobilisés : le chapitre n'a
     aucune activité expérimentale (on ne manipule pas un atome) et aucune
     question ne demande d'expliquer par écrit. C'est le même profil que
     « Les atomes et les molécules » en quatrième, et la grille imprimée le
     montrera. */
  competences: {
    evaluation: ["s'approprier", "s'approprier", "analyser", "valider", "analyser"]
  }
};
