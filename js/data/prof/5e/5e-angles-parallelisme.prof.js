/* =========================================================
   Spark Learning – js/data/prof/5e/5e-angles-parallelisme.prof.js
   Fiche professeur du chapitre « Angles et parallélisme » (cinquième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit, au
   moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-angles-parallelisme"] = {

  /* ch. 8 (triangles) : le chapitre sert à DÉMONTRER la somme des angles du
     triangle, admise au chapitre 8 et prouvée ici par les alternes-internes.
     L'ordre est donc contraint dans ce sens, et la promesse faite au chapitre 8
     (« nous le prouverons ») n'est tenue qu'ici. C'est aussi le chapitre qui
     fournit les premières figures où un angle se déduit sans être mesuré, ce
     qui suppose qu'on ait déjà pratiqué la somme des angles. */
  prerequis: [8],

  /* Rang conseillé 9 sur 14, immédiatement après les parallélogrammes : les
     deux chapitres se renforcent, les angles opposés d'un parallélogramme
     s'expliquant par les correspondants. Le livre le range en 10e position,
     soit un décalage d'un rang seulement — sans conséquence pédagogique. */
  rangConseille: 9,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Identifier des angles alternes-internes, correspondants ou internes de même côté sur une figure",
    "Utiliser les propriétés des angles formés par deux parallèles et une sécante pour calculer une mesure d'angle",
    "Démontrer que deux droites sont parallèles, ou qu'elles ne le sont pas, à partir de mesures d'angles"
  ],

  note: "Le programme de cinquième demande de reconnaître ces configurations et d'en déduire des mesures. " +
        "Deux points dépassent l'année. D'abord la RÉCIPROQUE utilisée comme outil de démonstration " +
        "(« si les alternes-internes sont égaux, alors les droites sont parallèles ») : l'implication dans " +
        "les deux sens est un objet de quatrième, et on l'installe ici sur des cas concrets sans exiger " +
        "la formulation logique. Ensuite la mention de l'optique dans le « Découvrir », qui relève de la " +
        "physique de quatrième : elle est là pour montrer que ces angles servent ailleurs, jamais comme " +
        "un contenu exigible. " +
        "Attention enfin au vocabulaire : « internes de même côté » est le terme du programme ; " +
        "« configuration en U » est un moyen mnémotechnique utile en classe mais qui ne doit pas " +
        "remplacer le mot juste dans une copie.",

  erreurs: [
    {
      titre: "Appliquer les propriétés sans vérifier que les droites sont parallèles",
      eleve: "Deux droites quelconques sont coupées par une sécante ; un angle mesure $62°$, et l'élève " +
             "conclut que son alterne-interne mesure aussi $62°$.",
      cause: "La propriété est mémorisée comme une règle sur les ANGLES (« les alternes-internes sont " +
             "égaux ») et non comme une implication dont le parallélisme est l'hypothèse. Toutes les " +
             "figures du cours montrant des parallèles, l'élève n'a jamais vu le cas où la règle " +
             "tombe — il ne soupçonne donc pas qu'il y ait une condition.",
      remede: "Montrer une figure à deux droites franchement NON parallèles et faire mesurer les deux " +
              "alternes-internes au rapporteur : ils diffèrent. La règle a donc bien une condition, et " +
              "l'élève vient de la constater plutôt que de l'entendre. Exiger ensuite que toute " +
              "justification commence par nommer l'hypothèse : « les droites étant parallèles, alors… ». " +
              "Une copie qui conclut sans l'avoir écrit est incomplète, même si le résultat est juste.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre « égaux » et « supplémentaires » selon la configuration",
      eleve: "Pour deux angles internes du même côté dont l'un mesure $125°$, l'élève répond $125°$ ; " +
             "ou inversement, il répond $180 - 74 = 106°$ pour deux alternes-internes.",
      cause: "Trois configurations, deux comportements : l'élève retient qu'« il y a une relation » sans " +
             "retenir laquelle va avec quoi. Les noms n'aident pas, car « alterne-interne » et " +
             "« interne de même côté » partagent le mot « interne », qui est justement le mot le moins " +
             "discriminant des deux.",
      remede: "Faire du CÔTÉ DE LA SÉCANTE le seul critère de décision, parce qu'il se voit sans " +
              "vocabulaire : deux angles de part et d'autre de la sécante sont égaux ; deux angles du " +
              "même côté sont supplémentaires. Le schéma « De quel côté de la sécante ? » est construit " +
              "pour cela. Ajouter un contrôle de vraisemblance qui rattrape l'erreur seul : deux angles " +
              "visiblement tous deux obtus ne peuvent pas être supplémentaires, et un angle aigu avec " +
              "un angle obtus ne peuvent pas être égaux.",
      /* 2026-09-13 : renvoi verifie contre le tirage reel du livre, et CORRIGE.
         Il visait d'abord l'exercice 3, qui est un « correspondant » — donc un
         cas d'angles EGAUX, c'est-a-dire le cote de l'erreur que l'eleve
         reussit deja. L'exercice 2 porte sur des « internes de meme cote »,
         le cas supplementaire, qui est celui ou l'erreur se produit. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Chercher les angles sur la mauvaise paire de droites",
      eleve: "Sur une figure à trois droites (deux parallèles et une sécante), l'élève apparie un angle " +
             "de la première parallèle avec un angle formé par la sécante et… l'autre sécante, ou bien " +
             "apparie deux angles situés sur la même droite.",
      cause: "Une figure d'angles et parallélisme comporte jusqu'à huit angles, dont beaucoup sont égaux " +
             "par des raisons différentes (opposés par le sommet, alternes-internes, correspondants). " +
             "L'élève reconnaît une égalité sans identifier par quelle propriété, et ne sait donc pas " +
             "quels angles il a le droit d'apparier.",
      remede: "Imposer un ordre de lecture en deux temps, toujours le même : repérer d'abord la SÉCANTE " +
              "(la droite qui coupe les deux autres), puis ne considérer que des paires dont un angle est " +
              "sur chaque parallèle. Faire surligner les deux parallèles d'une couleur et la sécante " +
              "d'une autre avant tout raisonnement. Rappeler que deux angles de la même parallèle " +
              "relèvent des angles opposés par le sommet ou supplémentaires, vus en sixième, et non de " +
              "ce chapitre.",
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE, et le remede le dit.
         Tous les exercices du chapitre DONNENT la configuration dans leur
         enonce (« un angle alterne-interne mesure… ») : l'eleve n'a donc
         jamais a reperer lui-meme la secante ni a choisir la bonne paire, qui
         est exactement la difficulte decrite ici. Elle ne se travaille que sur
         une figure complete a huit angles, que le generateur ne produit pas.
         Plutot que de renvoyer vers un exercice qui escamote le probleme — un
         renvoi faux est pire qu'un renvoi absent —, le remede s'appuie sur le
         surlignage d'une figure construite en classe. */
      exercice: null
    }
  ],

  /* Q1 alterne-interne, mesure directe        -> calculer
     Q2 nommer la configuration                -> représenter
     Q3 conclure au parallélisme (réciproque)  -> raisonner
     Q4 mise en équation de x et 3x            -> modéliser
     Q5 conclure au NON-parallélisme           -> raisonner

     Q4 est bien « modéliser » et non « calculer » : l'élève doit traduire
     « supplémentaires » en une équation ($x + 3x = 180$) avant tout calcul,
     et c'est cette traduction qui est évaluée — le calcul qui suit est trivial.
     Les deux « raisonner » ne sont pas un doublon : Q3 applique la réciproque
     pour conclure que les droites SONT parallèles, Q5 l'applique pour conclure
     qu'elles ne le sont PAS, et les élèves réussissent très inégalement les
     deux sens. */
  competences: {
    evaluation: ["calculer", "représenter", "raisonner", "modéliser", "raisonner"]
  }
};
