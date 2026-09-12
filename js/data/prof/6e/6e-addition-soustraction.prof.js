/* =========================================================
   Spark Learning – js/data/prof/6e/6e-addition-soustraction.prof.js
   Fiche professeur du chapitre « Addition et soustraction » (sixième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["6e-addition-soustraction"] = {

  // Additionner des décimaux suppose de savoir ce que vaut chaque rang :
  // le chapitre 4 est un prérequis direct, et il le précède dans le livre.
  prerequis: [4],

  // Rang conseillé (2026-09-12) : rang 3, juste après les décimaux (ch. 4),
  // qui sont déjà son prérequis déclaré. Le livre les place d'ailleurs déjà
  // dans cet ordre : ce chapitre est l'un des six où les deux ordres
  // s'accordent.
  rangConseille: 3,

  // Attendus de fin d'année de sixième (programme du cycle 3, 2020),
  // domaine « Nombres et calculs ».
  attendus: [
    "Calculer avec des nombres décimaux de façon exacte, posée ou en ligne, et mentalement",
    "Contrôler la vraisemblance d'un résultat, notamment par un ordre de grandeur",
    "Résoudre des problèmes à une ou plusieurs étapes relevant de l'addition et de la soustraction"
  ],

  note: "Le programme demande les quatre opérations sur les décimaux et, surtout, le contrôle du " +
        "résultat par ordre de grandeur — souvent négligé alors qu'il désamorce la plupart des " +
        "erreurs de pose. Les propriétés nommées (commutativité, associativité) ne sont pas " +
        "exigibles sous ce vocabulaire en sixième : la question 5 de l'évaluation peut se traiter " +
        "en langage courant.",

  erreurs: [
    {
      titre: "Aligner à droite au lieu d'aligner les virgules",
      eleve: "Pour $12{,}4 + 3{,}75$, l'élève aligne les derniers chiffres écrits : le $5$ des centièmes " +
             "tombe sous le $4$ des dixièmes, et il obtient $15{,}79$ au lieu de $16{,}15$.",
      cause: "La pose des entiers s'aligne à droite, et cette règle est automatisée depuis le CE2. " +
             "Avec des décimaux de longueurs différentes, l'automatisme place des dixièmes sous " +
             "des centièmes sans que rien ne le signale.",
      remede: "Faire compléter par des zéros AVANT de poser, pour que les deux nombres aient le même " +
              "nombre de décimales : $12{,}40$ et $3{,}75$. L'alignement à droite redevient alors " +
              "correct, et l'élève n'a plus deux règles concurrentes à choisir.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Soustraire le petit chiffre du grand, colonne par colonne",
      eleve: "Pour $20{,}03 - 8{,}7$, l'élève traite chaque colonne isolément et soustrait toujours " +
             "le plus petit chiffre du plus grand, évitant ainsi toute retenue.",
      cause: "La retenue en soustraction est coûteuse, et l'élève cherche un chemin qui n'en demande " +
             "pas. Le résultat obtenu reste plausible, ce qui ne déclenche aucune alerte.",
      remede: "Faire estimer avant de poser : $20$ moins $9$, donc environ $11$. Un résultat éloigné " +
              "de l'estimation signale l'erreur sans qu'il faille relire toute l'opération. " +
              "La vérification $(a-b)+b = a$ du livre joue le même rôle après coup.",
      // 2026-09-12 : renvoyait à la question 2 de l'ÉVALUATION. L'exercice 5
      // ($39{,}52 - 8{,}96$) impose deux retenues successives, exactement ce que
      // l'élève cherche à éviter en soustrayant colonne par colonne.
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Oublier les décimales d'un entier",
      eleve: "Pour rendre la monnaie sur un billet de $20$ €, l'élève pose $20 - 6{,}09$ en alignant " +
             "le $20$ sur les unités et se perd dans les rangs.",
      cause: "Un entier ne porte pas de virgule visible : rien ne rappelle qu'il a une partie " +
             "décimale nulle. L'élève n'a pas de place où écrire les colonnes manquantes.",
      remede: "Imposer l'écriture $20{,}00$ dès que l'autre terme a des décimales, comme le fait le " +
              "corrigé du livre. Le contexte de la monnaie aide : personne n'écrit un prix sans " +
              "ses centimes.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Additionner au lieu de chercher le complément",
      eleve: "« Deux trajets font $33{,}22$ km, le premier fait $5{,}27$ km » : l'élève additionne les " +
             "deux nombres au lieu de soustraire.",
      cause: "Deux nombres dans un énoncé appellent l'opération la plus familière. Le mot « total », " +
             "présent dans la phrase, déclenche l'addition alors qu'il décrit ici le résultat connu " +
             "et non la question posée.",
      remede: "Faire écrire la relation avant de calculer : « premier $+$ second $= 33{,}22$ ». " +
              "L'inconnue apparaît alors à sa place, et l'opération à faire se lit sur la ligne " +
              "plutôt que sur les mots de l'énoncé.",
      exercice: { type: "exercice", n: 3 }
    }
  ],

  // Q1 addition posée, Q2 soustraction avec retenue, Q3 JUGER une explication,
  // Q4 problème à deux étapes, Q5 CHERCHER un contre-exemple.
  //
  // 2026-09-12 : deux énoncés ont été RÉÉCRITS dans
  // js/data/6e/6e-addition-soustraction.js pour que l'étiquette dise vrai.
  // Q3 proposait quatre options de trois mots que le seul résultat numérique
  // départageait ; les quatre annoncent désormais la même valeur juste et c'est
  // la formulation qui est jugée — « communiquer ». Q5 demandait de reconnaître
  // le mot « commutativité », que la note ci-dessus signale comme non exigible
  // en sixième ; elle demande maintenant de trouver un contre-exemple montrant
  // que la soustraction, elle, ne se renverse pas — « chercher ».
  competences: {
    evaluation: ["calculer", "calculer", "communiquer", "modéliser", "chercher"]
  }
};
