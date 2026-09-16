/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-acides-bases.prof.js
   Fiche professeur du chapitre « Acides et bases : pH et constante
   d'acidité » (terminale spécialité), pour l'édition du professeur. JAMAIS
   chargée par le site : ce fichier n'est référencé ni dans index.html ni dans
   js/loader.js. Seul scripts/manuel/prof.js le lit, au moment de compiler le
   livre.

   CHAPITRE PILOTE de la terminale physique-chimie (2026-09-17) : les
   conventions des dix autres fiches du niveau y sont calées.

   POURQUOI CELUI-CI COMME PILOTE. C'est le chapitre de terminale qui cumule
   le plus grand nombre d'erreurs NOUVELLES par rapport au collège : le
   logarithme (et le piège de 10^{-pH}), l'inversion d'une échelle (pKa petit
   = acide fort), et une dépendance forte à un chapitre d'un AUTRE NIVEAU
   (1re-titrage) qui n'est pas déclarable. Il calibre donc à la fois
   l'étiquetage, le traitement des prérequis inter-niveaux, et le ton à tenir
   sur les erreurs mathématiques.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 6, ouvrage MONO-NIVEAU `lycee-physique-tle` :
   30 énoncés tirés, dont 12 numérotés et 18 en banque supplémentaire. Deux
   moules alternés, tous deux fondés sur la relation
   $pH = pK_a + \log([A^-]/[AH])$ :
     - moule A (rapport donné -> calculer le pH)      : exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (pH donné -> calculer le rapport)      : exercices PAIRS 2, 4, 6, 8, 10, 12.
   Aucun exercice ne demande de calculer un $K_a$, de tracer un diagramme de
   prédominance, ni de conclure sur l'espèce prédominante — alors que le
   diagramme est le cœur du cours et la définition D4. C'est ce qui contraint
   l'erreur 4 à rester sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-acides-bases"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     ch. 6 (Évolution spontanée d'un système chimique) : RETENU. La constante
     d'acidité $K_a$ n'est pas un objet nouveau — c'est la constante
     d'équilibre $K$ du chapitre 6, appliquée à la réaction particulière
     $AH + H_2O \rightleftharpoons A^- + H_3O^+$. La définition D2 du cours le
     dit mot pour mot (« constante d'équilibre associée à la réaction »). Un
     élève qui n'a pas vu le quotient de réaction et l'équilibre reçoit $K_a$
     comme une formule tombée du ciel, au lieu d'un cas particulier de ce qu'il
     connaît déjà.

     ch. 7 est ce chapitre-ci ; les chapitres 1 à 5 (mécanique, thermo) n'ont
     aucun lien ; le ch. 8 (Oxydoréduction) est un autre type de couple, sans
     dépendance dans un sens ni dans l'autre.

     LE PRÉREQUIS LE PLUS IMPORTANT N'EST PAS DÉCLARABLE : c'est le chapitre 7
     de PREMIÈRE (« Titrage »), qui installe la manipulation des concentrations
     et le suivi de pH. Il est traité dans `note`, qui est imprimée. */
  prerequis: [6],

  /* Rang conseillé (2026-09-17) : rang 7, celui du livre.

     Contrainte dure : ce chapitre doit suivre le chapitre 6 (équilibre et
     quotient de réaction), dont il est une application. Le bloc chimie de la
     terminale se tient donc dans l'ordre 6 -> 7 -> 8, et le livre le respecte
     déjà.

     PRÉREQUIS MATHÉMATIQUE, décisif pour le placement : ce chapitre est le
     premier de l'année à exiger le <strong>logarithme décimal</strong> en
     usage courant — $pK_a = -\log K_a$, et surtout l'inversion
     $[A^-]/[AH] = 10^{(pH-pK_a)}$. En terminale, le log est vu en
     mathématiques vers le milieu de l'année. Placer ce chapitre au premier
     trimestre, ce qui serait tentant pour aérer le bloc chimie, le rendrait
     inabordable : les élèves manipuleraient une fonction qu'ils n'ont pas
     encore rencontrée. Le rang 7 le place naturellement après, et c'est la
     vraie raison de ne pas le déplacer. */
  rangConseille: 7,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Constitution et transformations de la
     matière ». Repris aux mots du programme. */
  attendus: [
    "Identifier les couples acide-base mis en jeu et écrire l'équation d'une réaction acide-base",
    "Exploiter la relation entre pH et pKa pour déterminer l'espèce prédominante d'un couple acide-base",
    "Déterminer la constante d'acidité Ka d'un couple à partir de mesures et exploiter un diagramme de prédominance"
  ],

  note: "Le couple acide/base, la constante $K_a$, le $pK_a$ et le diagramme de prédominance sont au " +
        "programme de spécialité de terminale : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Deux prérequis qui comptent, et un seul est visible.</strong> Le chapitre s'appuie " +
        "sur le chapitre 6 (« Évolution spontanée d'un système chimique ») — $K_a$ n'est rien " +
        "d'autre que la constante d'équilibre $K$ appliquée à la réaction de l'acide sur l'eau — et " +
        "cela, la colonne « S'appuie sur » l'affiche. Mais il suppose aussi acquis le " +
        "<strong>« Titrage »</strong> de <strong>première</strong>, qui installe les " +
        "concentrations et le suivi de pH : un prérequis ne pouvant viser qu'un chapitre du même " +
        "niveau, <strong>rien ne le montrera</strong>. Si la classe est fragile sur les " +
        "concentrations, le reprendre avant d'entrer dans le $pK_a$.<br/><br/>" +
        "<strong>Le prérequis mathématique est le vrai facteur limitant.</strong> Tout le chapitre " +
        "repose sur le <strong>logarithme décimal</strong> et sur son inverse, la puissance de dix. " +
        "Si le log n'a pas encore été traité en mathématiques, il faut soit décaler le chapitre, " +
        "soit consacrer une séance entière à $\\log$ et $10^x$ avant d'aborder la chimie : sans " +
        "cela, les élèves appliqueront $10^{(pH-pK_a)}$ comme une suite de touches sur la " +
        "calculatrice, sans aucun contrôle sur le résultat.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés " +
        "n'exercent que la relation $pH = pK_a + \\log([A^-]/[AH])$, dans un sens ou dans l'autre. " +
        "Aucun ne demande de calculer un $K_a$, d'écrire une équation de réaction acide-base, ni de " +
        "tracer ou lire un <strong>diagramme de prédominance</strong> — alors que ce sont le " +
        "premier et le troisième attendus officiels, et le cœur du cours. Prévoir un travail " +
        "spécifique sur le diagramme, que le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Inverser l'échelle de force des acides",
      eleve: "L'élève affirme qu'un acide de $pK_a = 9{,}2$ est plus fort qu'un acide de " +
             "$pK_a = 3{,}2$, « puisque $9{,}2 > 3{,}2$ ». Il classe les acides dans l'ordre " +
             "croissant des $pK_a$ en croyant les classer par force.",
      cause: "Deux inversions se superposent, et c'est ce qui rend l'erreur si tenace. D'abord le " +
             "signe : $pK_a = -\\log K_a$, donc un grand $K_a$ — un acide fort — donne un " +
             "<strong>petit</strong> $pK_a$. Ensuite l'habitude : partout ailleurs en sciences, une " +
             "grandeur plus grande signale un effet plus intense. Le $pK_a$ est l'une des rares " +
             "échelles inversées que rencontre l'élève, et rien dans sa notation ne le signale.",
      remede: "Faire remonter à la <strong>définition</strong> plutôt qu'à la règle : la force d'un " +
              "acide, c'est sa tendance à se dissocier, donc $K_a$ — pas $pK_a$. Le $pK_a$ n'est " +
              "qu'une <strong>réécriture logarithmique</strong>, commode parce qu'elle donne des " +
              "nombres entre $0$ et $14$, et le signe moins de sa définition inverse l'ordre. " +
              "Écrire les deux au tableau l'un sous l'autre et faire constater l'inversion sur deux " +
              "exemples chiffrés.<br/><br/>" +
              "Ancrer ensuite sur une <strong>analogie d'échelle inversée déjà connue</strong> : le " +
              "pH lui-même. Personne ne s'étonne qu'un pH de $1$ soit plus acide qu'un pH de $6$ ; " +
              "c'est exactement le même mécanisme, et pour la même raison — un logarithme précédé " +
              "d'un signe moins. Un élève qui accepte l'un accepte l'autre.<br/><br/>" +
              "Donner enfin deux <strong>repères mémorisables</strong> plutôt qu'une règle " +
              "abstraite : l'acide chlorhydrique, acide fort, a un $pK_a$ négatif ; l'ion " +
              "ammonium, acide très faible, a un $pK_a$ de $9{,}2$. Deux bornes concrètes " +
              "orientent l'échelle une fois pour toutes.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 6) : l'exercice 2 (pKa = 9,2, pH = 8,8) et
         l'exercice 12 (pKa = 3,2, pH = 4,3) sont les deux extrêmes de pKa du
         tirage, et ils donnent des rapports opposés — 0,398 (l'acide domine)
         contre 12,589 (la base domine). Le renvoi pointe le 2 : c'est le
         pKa le plus élevé du chapitre, donc l'acide le plus FAIBLE, et le
         rapport inférieur à 1 qu'il produit contredit directement l'idée
         qu'un grand pKa signalerait un acide fort. Les deux exercices se
         lisent utilement en vis-à-vis. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre le rapport des concentrations et la différence des pH",
      eleve: "Pour $pK_a = 4{,}8$ et $pH = 6{,}0$, l'élève annonce un rapport de $1{,}2$ — il a " +
             "soustrait $6{,}0 - 4{,}8$ et s'est arrêté là, sans passer à la puissance de dix. La " +
             "réponse attendue est $15{,}849$.",
      cause: "L'élève effectue la première moitié du calcul, qui est la seule qu'il comprend, et " +
             "traite l'exponentiation comme une formalité. Le fond du problème est que l'écart de " +
             "pH et le rapport des concentrations sont <strong>deux grandeurs de natures " +
             "différentes</strong> : l'une est additive, l'autre multiplicative. Passer de l'une à " +
             "l'autre exige précisément la fonction $10^x$, et c'est le pas que l'élève saute " +
             "parce qu'il n'en perçoit pas la nécessité.",
      remede: "Faire dire à l'échelle ce qu'elle signifie, avec des nombres ronds : un écart de " +
              "<strong>une</strong> unité de pH correspond à un rapport de <strong>10</strong>, " +
              "deux unités à <strong>100</strong>, trois à <strong>1 000</strong>. Le cours le dit " +
              "déjà dans son récapitulatif ; le faire calculer une fois pour chacune de ces trois " +
              "valeurs vaut mieux que de le lire.<br/><br/>" +
              "Imposer alors un <strong>encadrement avant tout calcul</strong> : ici, l'écart " +
              "$6{,}0 - 4{,}8 = 1{,}2$ est compris entre $1$ et $2$, donc le rapport est " +
              "nécessairement compris entre $10$ et $100$. Une réponse de $1{,}2$ tombe hors de " +
              "l'encadrement et se rejette sans même refaire le calcul. C'est le contrôle le plus " +
              "rentable du chapitre, et il ne demande pas de calculatrice.<br/><br/>" +
              "Faire vérifier enfin la <strong>cohérence qualitative</strong> : $pH > pK_a$, donc " +
              "la base $A^-$ prédomine, donc le rapport $[A^-]/[AH]$ doit être " +
              "<strong>supérieur à 1</strong>. La réponse $1{,}2$ passe ce test-là, ce qui explique " +
              "qu'elle ne déclenche aucune alerte — d'où la nécessité de l'encadrement chiffré, qui " +
              "lui la rejette.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 donne
         pKa = 4,8 et pH = 6,0, réponse 15,849. Choisi parmi les six exercices
         du moule B parce que son écart (1,2) est le plus proche de 1 tout en
         restant supérieur : l'erreur produit 1,2 et la bonne réponse 15,849,
         soit un facteur 13 — l'écart le plus spectaculaire du tirage, donc le
         plus convaincant pour l'élève. Sur l'exercice 8 (écart 0,3), l'erreur
         donnerait 0,3 contre 1,995 : moins parlant. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Se tromper de sens dans la relation, et ne pas le voir",
      eleve: "Pour $pK_a = 9{,}2$ et un rapport de $0{,}1$, l'élève calcule $pH = 9{,}2 + 0{,}1$ ou " +
             "$pH = 9{,}2 - \\log(0{,}1) = 10{,}2$ au lieu de $8{,}2$ : il ajoute le rapport " +
             "lui-même au lieu de son logarithme, ou se trompe de signe sur un logarithme négatif.",
      cause: "Le logarithme d'un nombre <strong>inférieur à 1</strong> est négatif, ce qui " +
             "déstabilise : $\\log(0{,}1) = -1$. L'élève, peu sûr, choisit le signe qui « fait un " +
             "résultat raisonnable » — et comme les deux options donnent un pH plausible (entre $0$ " +
             "et $14$), rien ne l'arrête. C'est une erreur de SIGNE, la plus fréquente du lycée, et " +
             "elle est ici invisible au contrôle de vraisemblance ordinaire.",
      remede: "Substituer au contrôle numérique un contrôle <strong>qualitatif préalable</strong>, " +
              "qui est infaillible et ne coûte rien : si le rapport $[A^-]/[AH]$ est " +
              "<strong>inférieur à 1</strong>, l'acide $AH$ domine, donc le milieu est plus acide " +
              "que la demi-équivalence, donc $pH < pK_a$. On sait avant de calculer que la réponse " +
              "doit être <strong>inférieure</strong> à $9{,}2$. Le résultat $10{,}2$ se rejette " +
              "alors immédiatement.<br/><br/>" +
              "Faire écrire ce pronostic <strong>à côté du calcul</strong>, systématiquement : " +
              "« rapport $< 1$ donc $pH < pK_a$ ». Une prédiction posée avant le calcul transforme " +
              "le résultat en vérification ; une prédiction faite après ne sert à rien, parce qu'on " +
              "s'aligne toujours sur ce qu'on vient de trouver.<br/><br/>" +
              "Réviser enfin explicitement les <strong>trois valeurs de $\\log$</strong> qui " +
              "suffisent à tout le chapitre : $\\log(1) = 0$, $\\log(10) = 1$, " +
              "$\\log(0{,}1) = -1$. Le signe du logarithme se lit alors sur la position du nombre " +
              "par rapport à $1$, sans réfléchir.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         pKa = 5,0 et un rapport de 0,1, réponse pH = 4. C'est le seul exercice
         du moule A dont le rapport est INFÉRIEUR à 1 (les autres tirent 5,0 ;
         1,0 ; 20,0 ; 2,0 ; 10,0), donc le seul où le logarithme est négatif et
         où cette erreur peut se produire. Le renvoi est donc contraint, et
         c'est heureux : sa réponse ronde (4, exactement une unité sous le pKa)
         rend l'erreur de signe visible d'un coup d'œil — l'élève qui se trompe
         trouve 6. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que la prédominance dépend de la concentration de la solution",
      eleve: "Devant deux solutions du même couple, l'une concentrée et l'autre diluée, au même pH, " +
             "l'élève affirme que « l'espèce prédominante n'est pas la même, puisque les " +
             "concentrations diffèrent ». Ou il cherche la concentration totale dans l'énoncé pour " +
             "pouvoir répondre, et se bloque quand elle n'y est pas.",
      cause: "L'élève raisonne sur des quantités <strong>absolues</strong> alors que le diagramme " +
             "de prédominance porte sur un <strong>rapport</strong>. La confusion est renforcée par " +
             "le mot « prédominance » lui-même, qui évoque une abondance, donc une quantité. Rien " +
             "dans l'énoncé ne signale que la concentration totale est hors sujet, et l'élève " +
             "suppose raisonnablement que toute donnée manquante est une donnée oubliée.",
      remede: "Montrer sur l'<strong>expression même</strong> que la réponse est déjà là : dans " +
              "$pH = pK_a + \\log([A^-]/[AH])$, seul un <strong>quotient</strong> de concentrations " +
              "intervient. Diluer une solution divise les deux concentrations par le même facteur, " +
              "qui se simplifie : le rapport ne bouge pas, donc la prédominance non plus. " +
              "L'argument est algébrique et définitif.<br/><br/>" +
              "Nommer alors ce que le diagramme compare vraiment : il ne compare pas les espèces à " +
              "une quantité de référence, il compare le <strong>pH au $pK_a$</strong>. Ces deux " +
              "nombres suffisent, et c'est bien pourquoi l'énoncé n'a pas besoin de donner la " +
              "concentration totale. Le cours le dit dans son récapitulatif — le diagramme « ne " +
              "dépend que du $pK_a$ du couple, jamais des concentrations absolues » — et cette " +
              "phrase mérite d'être relue au moment de l'erreur, pas avant.<br/><br/>" +
              "Distinguer enfin deux questions que l'élève fond en une : « <strong>laquelle</strong> " +
              "des deux espèces domine ? » (réponse : le pH et le $pK_a$ suffisent) et " +
              "« <strong>combien</strong> y en a-t-il ? » (là, il faut la concentration totale). " +
              "Séparer les deux dissipe le blocage devant un énoncé « incomplet ».",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés donnent TOUS un pKa et soit un pH, soit un rapport, et
         demandent l'autre. Aucun ne pose de question de prédominance, aucun ne
         mentionne de concentration totale ni de dilution, et aucun ne fait
         intervenir un diagramme. L'erreur ne peut donc pas être remédiée par
         un exercice du chapitre — c'est la limite signalée dans la `note`.
         L'exemple résolu du cours, lui, commence par comparer pH et pKa pour
         conclure sur l'espèce prédominante : c'est le seul support disponible
         dans le livre, et le remède y ramène. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $pK_a = 6{,}0$ et $pH = 6{,}0$ : que peut-on affirmer ? Il faut
          reconnaître le cas d'égalité et écarter trois conclusions erronées,
          dont « le pH n'a pas de sens à cette valeur » : « valider ».
     Q2 — $pK_a = 5{,}0$, $pH = 6{,}0$, calculer le rapport. Application
          directe de $10^{(pH-pK_a)}$ avec un écart entier : exécution,
          « réaliser ».
     Q3 — un acide est d'autant plus fort que son $pK_a$ est... Restitution de
          la propriété du cours, avec l'inversion d'échelle en distracteur
          (erreur 1 de cette fiche) : « s'approprier ».
     Q4 — $pK_a = 4{,}0$, rapport $= 100$, calculer le pH. La relation doit
          être utilisée dans l'autre sens et le logarithme évalué
          ($\log 100 = 2$), ce qui est un choix de méthode : « analyser ».
     Q5 — où se situe la zone où $A^-$ prédomine sur le diagramme ? Relier une
          propriété chimique à une position graphique : « analyser ».

     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée — et c'est particulièrement coûteux
     sur ce chapitre, où justifier une prédominance À L'ÉCRIT est exactement
     ce que le baccalauréat demande. Constat mesuré sur les 160 questions du
     lycée physique-chimie et écrit dans CODEBASE_MAP.md. */
  competences: {
    evaluation: ["valider", "réaliser", "s'approprier", "analyser", "analyser"]
  }
};
