/* =========================================================
   Spark Learning – js/data/prof/4e/4e-volumes.prof.js
   Fiche professeur du chapitre « Volumes des pyramides et cônes » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-volumes"] = {

  /* ch. 1 (puissances de 10) : les conversions d'unités de volume — du cm³ au
     dm³, du litre au m³ — sont des puissances de 10, et c'est par elles que les
     erreurs de facteur 1000 se produisent.
     ch. 4 (fractions) : le facteur un tiers est une fraction, et la tâche inverse
     (retrouver la hauteur à partir du volume) demande de multiplier les deux
     membres par 3, ce qui est un maniement de fraction. */
  prerequis: [1, 4],

  /* Rang conseillé 10 : après toute la géométrie plane, dont le chapitre a besoin
     pour calculer les aires de base (un disque pour le cône, un carré ou un
     triangle pour la pyramide). Placer les volumes plus tôt obligerait à donner
     les aires de base sans que l'élève sache les calculer. */
  rangConseille: 10,

  attendus: [
    "Calculer le volume d'une pyramide et d'un cône de révolution",
    "Savoir que ce volume vaut le tiers de celui du prisme ou du cylindre de même base et même hauteur",
    "Distinguer la hauteur d'une pyramide de son arête latérale et de son apothème",
    "Effectuer des conversions d'unités de volume et de contenance"
  ],

  note: "Le volume de la pyramide et du cône de révolution est au programme de quatrième, ainsi que " +
        "le rapport d'un tiers avec le prisme ou le cylindre associé.<br/><br/>" +
        "Le facteur $\\dfrac{1}{3}$ est ADMIS au collège : sa démonstration demande un passage à la " +
        "limite ou un découpage qui n'est pas de ce niveau. Le présenter comme un résultat " +
        "expérimental — trois pyramides d'eau remplissent le prisme — est la bonne approche, et " +
        "c'est exactement ce que demande la question 5 de l'évaluation.<br/><br/>" +
        "Le calcul de l'APOTHÈME (la hauteur d'une face latérale) par Pythagore, qui apparaît dans " +
        "beaucoup de manuels de quatrième, n'est pas travaillé ici : ni le cours ni la banque ne le " +
        "proposent. C'est un ajout possible, qui combine ce chapitre avec le chapitre 3, et qui " +
        "demande une séance.",

  erreurs: [
    {
      titre: "Oublier le facteur un tiers",
      eleve: "Pour une pyramide de base $36$ cm² et de hauteur $8$ cm, l'élève répond $288$ cm³ : " +
             "il a calculé le volume du prisme.",
      cause: "La formule de l'aire de base multipliée par la hauteur est celle du prisme, longuement " +
             "exercée en cinquième. Le facteur $\\dfrac{1}{3}$ est un ajout récent, et il disparaît " +
             "sous la charge du calcul d'aire qui l'a précédé.",
      remede: "Installer un contrôle d'encadrement, qui vaut mieux qu'un rappel de formule : le volume " +
              "d'une pyramide est forcément PLUS PETIT que celui de la boîte qui la contient. " +
              "L'élève calcule d'abord le prisme, puis divise par $3$ : l'ordre des gestes rend " +
              "l'oubli visible, puisque la division devient la dernière chose à faire.<br/><br/>" +
              "Appuyer sur l'expérience, qui donne un sens au nombre : trois pyramides remplies d'eau " +
              "remplissent exactement le prisme de même base et même hauteur. Faire la manipulation " +
              "une fois, ou la montrer, ancre le facteur plus sûrement qu'une formule au tableau.<br/><br/>" +
              "La tâche inverse du chapitre (retrouver la hauteur à partir du volume) est le meilleur " +
              "révélateur : l'élève qui oublie le $3$ trouve une hauteur trois fois trop petite, ce " +
              "que la figure démentit aussitôt.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est une tâche « hauteur-inverse » — « un vase en forme de
         pyramide contient 28 cm³, son aire de base vaut 12 cm² : quelle est sa
         hauteur ? », réponse 7. Oublier le facteur 3 donne 2{,}33 cm au lieu de
         7 cm, et la solution imprimée nomme explicitement cet écart de trois. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Prendre l'arête latérale pour la hauteur",
      eleve: "L'élève utilise la longueur de l'arête qui va du sommet à un coin de la base comme " +
             "hauteur de la pyramide.",
      cause: "Sur une représentation en perspective, l'arête latérale est visible et cotée, tandis que " +
             "la hauteur est une longueur intérieure, souvent tracée en pointillés ou absente. L'élève " +
             "utilise ce qu'il voit.",
      remede: "Définir la hauteur par la perpendicularité, pas par le dessin : c'est la distance du " +
              "sommet au PLAN de la base, donc le segment perpendiculaire à la base. Elle tombe " +
              "à l'intérieur du solide, et pas sur un coin.<br/><br/>" +
              "Faire voir qu'elle est toujours la plus courte : l'arête latérale est l'hypoténuse d'un " +
              "triangle rectangle dont la hauteur est un côté de l'angle droit, donc " +
              "$\\text{arête} > \\text{hauteur}$, toujours. C'est aussi comment on passe de l'une à " +
              "l'autre par Pythagore, si l'on veut aller plus loin.<br/><br/>" +
              "Exiger enfin que l'élève MONTRE la hauteur du doigt sur la figure avant de calculer. " +
              "Le geste attrape l'erreur avant qu'elle ne devienne un nombre.",
      /* Volontairement SANS renvoi. Tous les exercices du chapitre DONNENT la
         hauteur en toutes lettres : aucun ne propose une figure où il faudrait la
         distinguer d'une arête latérale, et aucun ne cote une arête. La
         remédiation demande un solide en perspective à annoter, à préparer hors du
         livre. C'est la limite la plus nette de ce chapitre, et un renvoi vers un
         exercice qui donne la hauteur ne travaillerait pas l'erreur. */
      exercice: null
    },
    {
      titre: "Élever au carré le produit pi fois rayon",
      eleve: "Pour l'aire de base d'un cône de rayon $5$ cm, l'élève calcule " +
             "$(\\pi \\times 5)^2 \\approx 246$ cm² au lieu de $\\pi \\times 5^2 = 78{,}5$ cm².",
      cause: "L'écriture $\\pi r^2$ est lue comme un bloc, et l'exposant est attribué à l'ensemble. " +
             "Aucune parenthèse ne vient dire le contraire, et l'élève ne sait pas que leur absence " +
             "est elle-même une information.",
      remede: "Poser la règle générale, qui dépasse ce chapitre : <strong>un exposant ne saisit que ce " +
              "qu'il touche</strong>. Dans $\\pi r^2$, il touche le $r$, pas le $\\pi$. C'est la même " +
              "règle qui distingue $(-5)^2$ de $-5^2$ au chapitre des relatifs, et la rapprocher de " +
              "celle-là aide l'élève qui l'a déjà rencontrée.<br/><br/>" +
              "Donner un encadrement de contrôle, qui tranche sans refaire le calcul : l'aire d'un " +
              "disque est toujours comprise entre l'aire du carré construit sur son rayon ($25$ cm²) " +
              "et celle du carré construit sur son diamètre ($100$ cm²). La valeur $78{,}5$ est bien " +
              "entre les deux ; $246$ ne l'est pas, et de loin.<br/><br/>" +
              "Exiger enfin l'écriture en deux temps : $r^2$ d'abord, puis la multiplication par " +
              "$\\pi$. L'ordre des gestes rend l'erreur impossible.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est une tâche
         « cone » — rayon 2 cm, hauteur 11 cm, réponse 46{,}1 cm³. Sa solution
         imprimée détaille l'aire du disque AVANT le volume et avertit
         explicitement que le rayon seul est au carré. Avec un rayon de 2, l'erreur
         donne 144,6 cm3 au lieu de 46,1 cm3, soit plus du TRIPLE — un entonnoir de
         la taille d'un seau. L'ecart grandit avec le rayon. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Se tromper de facteur dans une conversion de volume",
      eleve: "L'élève convertit $1$ dm³ en $100$ cm³ au lieu de $1000$ cm³, en appliquant le facteur " +
             "des longueurs ou celui des aires.",
      cause: "Trois facteurs coexistent — $10$ pour les longueurs, $100$ pour les aires, $1000$ pour " +
             "les volumes — et l'élève les retient comme une liste arbitraire. Rien ne lui dit d'où ils " +
             "viennent.",
      remede: "Faire reconstruire le facteur au lieu de le mémoriser : un cube de $1$ dm de côté vaut " +
              "$10$ cm de côté, donc son volume est $10 \\times 10 \\times 10 = 1000$ cm³. Le " +
              "facteur $1000$ est $10^3$, et l'exposant $3$ est celui du volume — comme $10^2$ pour " +
              "une aire et $10^1$ pour une longueur.<br/><br/>" +
              "L'unité le dit d'ailleurs elle-même : le petit $3$ de « cm³ » est exactement l'exposant " +
              "du facteur de conversion. Une fois ce lien vu, il n'y a plus trois nombres à retenir " +
              "mais une seule règle.<br/><br/>" +
              "Ajouter l'équivalence utile en pratique : $1$ L $= 1$ dm³ $= 1000$ cm³. C'est elle qui " +
              "sert dès qu'un énoncé parle de contenance.",
      /* Volontairement SANS renvoi. Le générateur ne tire AUCUNE conversion
         d'unité : tous ses énoncés restent en cm et cm³. Les conversions
         n'apparaissent ni dans la banque ni dans l'évaluation de ce chapitre,
         alors qu'elles sont un attendu du programme. La remédiation se construit
         au tableau, et le chapitre gagnerait à recevoir une tâche de conversion. */
      exercice: null
    }
  ],

  /* Q1 applique la formule du volume de la pyramide : « calculer ».
     Q2 porte sur le cône, dont l'aire de base est à construire avant toute
     application de formule : « modéliser ». Son corrigé a été détaillé le
     2026-09-13 pour faire apparaître cette étape, qui était implicite.
     Q3 compare le cône au cylindre de même base et même hauteur : la réponse
     s'obtient par le rapport, sans aucun calcul à poser — « raisonner ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancienne question demandait de
     reconnaître la définition de la hauteur parmi quatre propositions, soit du
     vocabulaire. La nouvelle demande d'inverser la formule du volume, et rien ne
     le dit — « chercher ».
     Q5 a été RÉÉCRITE : c'était une application directe de la formule. Elle
     demande maintenant d'expliquer d'où vient le facteur un tiers et de réfuter
     une explication plausible mais fausse — « communiquer ». */
  competences: {
    evaluation: ["calculer", "modéliser", "raisonner", "chercher", "communiquer"]
  }
};
