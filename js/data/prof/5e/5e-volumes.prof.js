/* =========================================================
   Spark Learning – js/data/prof/5e/5e-volumes.prof.js
   Fiche professeur du chapitre « Volumes (prismes et cylindres) »
   (cinquième). JAMAIS chargée par le site : seul scripts/manuel/prof.js
   la lit, au moment de compiler le livre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-volumes"] = {

  /* ch. 11 (aires et périmètres) : la formule du chapitre est
     $V = \mathcal{A}_{\text{base}} \times h$. Elle est inutilisable si l'aire de
     la base n'est pas acquise — et pour un cylindre, cette base est un DISQUE,
     dont l'aire est précisément l'objet du chapitre 11. Le prérequis est donc
     strict : un élève qui se trompe sur $\pi r^2$ se trompera sur le volume du
     cylindre, et l'erreur sera imputée au volume. */
  prerequis: [11],

  /* Rang conseillé 12 sur 14, immédiatement après les aires : c'est la même
     progression que le livre, qui le range aussi en 12e position. Le volume
     clôt le domaine « Grandeurs et mesures » avant les deux chapitres de
     statistiques et de probabilités. */
  rangConseille: 12,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Grandeurs et mesures ».
  attendus: [
    "Calculer le volume d'un prisme droit et d'un cylindre de révolution",
    "Effectuer des conversions entre unités de volume, et entre volumes et contenances (litres)",
    "Identifier la hauteur d'un solide comme la longueur perpendiculaire aux deux bases"
  ],

  note: "Le volume du prisme droit et du cylindre est au programme de cinquième, conversions et " +
        "contenances comprises. Trois réserves. " +
        "Le PRISME OBLIQUE, évoqué dans le cours (« si le prisme est incliné, la hauteur diffère du côté " +
        "latéral »), n'est pas au programme du cycle 4 : la remarque est juste et utile pour comprendre ce " +
        "qu'est une hauteur, mais aucun calcul sur un solide oblique n'est exigible. " +
        "Le générateur d'exercices a été élargi le 2026-09-13 : il ne produisait que des volumes de pavés " +
        "droits, alors que l'évaluation teste le cylindre, la contenance en litres et une conversion. " +
        "Les quatre tâches du devoir ont désormais chacune leurs exercices d'entraînement, et les " +
        "remédiations ci-dessous y renvoient. " +
        "Enfin, la mention de la fiole jaugée relève de la chimie et n'est qu'une illustration de " +
        "l'égalité $1$ mL $= 1$ cm³, qui elle est bien attendue.",

  erreurs: [
    {
      titre: "Utiliser le diamètre au lieu du rayon dans le volume d'un cylindre",
      eleve: "Pour un cylindre de diamètre $10$ cm et de hauteur $8$ cm, l'élève calcule " +
             "$\\pi \\times 10^2 \\times 8 \\approx 2\\,512$ cm³ au lieu de $628$ cm³.",
      cause: "L'énoncé donne le diamètre, la formule demande le rayon, et rien dans l'écriture " +
             "$V = \\pi r^2 h$ ne rappelle de vérifier laquelle des deux grandeurs on possède. " +
             "L'erreur est celle du chapitre des aires, reportée sur le volume, et elle est ici " +
             "QUADRUPLÉE au lieu d'être doublée puisque le rayon est au carré.",
      remede: "Imposer l'étape écrite « on me donne $d = 10$ cm, donc $r = 5$ cm » avant toute formule, " +
              "comme au chapitre des aires. Faire ensuite mesurer l'ampleur de l'erreur, ce qui la rend " +
              "mémorable : utiliser le diamètre au lieu du rayon multiplie le résultat par QUATRE, et non " +
              "par deux, parce que le rayon est au carré. Un volume quadruple de ce qu'on attendait est " +
              "donc la signature de cette confusion. Contrôle de vraisemblance : un cylindre de $10$ cm " +
              "de diamètre et $8$ cm de haut tient dans une boîte de $10 \\times 10 \\times 8 = 800$ cm³, " +
              "donc un résultat de $2\\,512$ cm³ est impossible — le solide serait plus gros que la boîte " +
              "qui le contient.",
      /* 2026-09-13 : le generateur ne produisait QUE des paves droits, et ce
         renvoi devait rester vide. Une tache « cylindre a partir du DIAMETRE » a
         donc ete ajoutee, precisement pour cette remediation : l'exercice 4 du
         tirage donne le diametre et la hauteur, et sa correction commence par
         prendre la moitie du diametre avant d'appliquer la formule. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Convertir un volume comme une longueur",
      eleve: "$2{,}5$ dm³ devient $25$ cm³ au lieu de $2\\,500$ cm³ : l'élève multiplie par $10$.",
      cause: "Même mécanique que pour les aires, aggravée d'un degré : le facteur de conversion des " +
             "longueurs est connu, mais l'exposant $3$ de l'unité n'est pas relié au facteur. Un volume " +
             "met en jeu TROIS longueurs, donc trois conversions successives.",
      remede: "Reprendre le raisonnement du cube, qui produit le facteur au lieu de le faire retenir : " +
              "dans un cube de $1$ dm de côté, on range $10$ cubes de $1$ cm en longueur, $10$ en largeur " +
              "et $10$ en hauteur, donc $10 \\times 10 \\times 10 = 1\\,000$. Écrire ensuite " +
              "$1$ dm³ $= (10\\ \\text{cm})^3 = 10^3$ cm³ $= 1\\,000$ cm³, où l'exposant se lit sur " +
              "l'unité. Faire le parallèle explicite avec les aires vues au chapitre précédent : " +
              "facteur au carré pour une aire, au cube pour un volume — c'est le même raisonnement à un " +
              "degré près, et le dire évite d'avoir deux règles à mémoriser.",
      /* 2026-09-13 : tache de conversion AJOUTEE au generateur pour cette
         remediation, qui n'avait aucun exercice ou renvoyer. L'exercice 3 du
         tirage convertit un volume, et sa correction fait apparaitre le facteur
         au CUBE a partir du facteur des longueurs. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Oublier que la hauteur est perpendiculaire aux bases",
      eleve: "Sur un prisme dessiné en perspective, l'élève prend l'arête latérale oblique pour la " +
             "hauteur, ou bien multiplie les trois dimensions d'un pavé sans identifier laquelle est la " +
             "hauteur quand la base change.",
      cause: "Sur un pavé droit, les trois dimensions se multiplient et l'ordre est sans importance : " +
             "l'élève n'a donc jamais eu besoin de distinguer la base de la hauteur. Dès que la base " +
             "n'est plus un rectangle — triangle, disque —, cette indifférence devient une impasse, car " +
             "il faut savoir quelle face est la base.",
      remede: "Faire identifier la BASE avant tout calcul, à partir d'un critère simple : ce sont les " +
              "deux faces identiques et parallèles, celles qu'on retrouverait en tranchant le solide en " +
              "rondelles. La hauteur est alors la distance entre ces deux faces, et elle leur est " +
              "perpendiculaire. Faire énoncer la formule dans cet ordre : « aire d'une rondelle, fois le " +
              "nombre de rondelles empilées ». Sur un pavé droit, montrer qu'on peut choisir trois bases " +
              "différentes et qu'on obtient le même volume — ce qui explique pourquoi l'élève n'a " +
              "jamais eu à choisir jusqu'ici, et pourquoi il doit le faire maintenant.",
      /* 2026-09-13 : renvoi verifie contre le tirage reel et CORRIGE. Il visait
         l'exercice 1, qui est une contenance de cube — or un cube ne permet pas
         de distinguer la base de la hauteur, les trois dimensions y etant
         egales, donc il ne travaille pas l'erreur. L'exercice 2 est un pave
         droit de trois dimensions DIFFERENTES, accompagne de sa perspective
         cavaliere : c'est la que le choix de la base se pose. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Q1 hauteur manquante d'un pavé     -> chercher
     Q2 volume d'un cylindre            -> calculer
     Q3 contenance d'un cube en litres  -> modéliser
     Q4 conversion dm³ vers cm³         -> représenter
     Q5 juger l'erreur d'un élève       -> communiquer

     Q3 est « modéliser » : l'élève doit relier un volume géométrique (en cm³) à
     une contenance (en litres), c'est-à-dire passer du solide au liquide qu'il
     peut recevoir — une traduction, pas un calcul. Q4 est « représenter », comme
     la conversion d'aire du chapitre précédent : c'est le registre des unités
     qui est évalué. Q5, déjà rédigée comme l'analyse du calcul d'un élève avec
     sa justification, mobilise réellement « communiquer » et n'a pas eu besoin
     d'être réécrite. */
  competences: {
    evaluation: ["chercher", "calculer", "modéliser", "représenter", "communiquer"]
  }
};
