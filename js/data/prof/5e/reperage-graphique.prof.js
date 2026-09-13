/* =========================================================
   Spark Learning – js/data/prof/5e/reperage-graphique.prof.js
   Fiche professeur du chapitre « Repérage spatial et Lecture Graphique »
   (cinquième). JAMAIS chargée par le site : seul scripts/manuel/prof.js
   la lit, au moment de compiler le livre.

   NOM DU FICHIER : le module ne porte pas de prefixe de niveau (son
   identifiant est « reperage-graphique », pas « 5e-reperage-graphique »), et
   la fiche professeur prend le nom de l'IDENTIFIANT, pas celui du niveau.
   C'est pourquoi ce fichier s'appelle reperage-graphique.prof.js alors que
   ses treize voisins commencent par « 5e- ». Ne pas renommer : prof.js
   cherche le fichier par l'identifiant du module.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["reperage-graphique"] = {

  /* ch. 2 (nombres relatifs) : un repère a QUATRE quadrants, et les
     coordonnées y sont négatives dans trois d'entre eux. La question 1 de
     l'évaluation porte d'ailleurs sur un point d'ordonnée $-2$. Sans les
     relatifs, le chapitre se réduirait au premier quadrant, ce qui n'est plus
     le programme de cinquième. */
  prerequis: [2],

  /* Rang conseillé 4 sur 14, contre la 1re place dans le LIVRE : c'est, avec la
     symétrie centrale, le décalage le plus net de l'ouvrage. Le livre ouvre par
     ce chapitre parce qu'il sert d'entrée visuelle et concrète dans l'année ;
     la progression le place après les relatifs (rang 2), dont il a besoin pour
     sortir du premier quadrant. Un enseignant qui suit l'ordre du livre à la
     lettre traiterait donc les coordonnées négatives avant les nombres
     négatifs : c'est exactement le genre de contradiction que la colonne
     « rang conseillé » du tableau de progression sert à rendre visible. */
  rangConseille: 4,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaines « Espace et géométrie » et « Organisation et gestion de données ».
  attendus: [
    "Repérer un point dans le plan par ses coordonnées dans un repère orthogonal, y compris avec des valeurs négatives",
    "Lire, interpréter et exploiter un graphique représentant une relation entre deux grandeurs",
    "Estimer une valeur intermédiaire par interpolation, et distinguer interpolation et extrapolation"
  ],

  note: "Le repérage dans le plan et la lecture de graphiques sont au programme de cinquième. En revanche, " +
        "le chapitre aborde deux notions qui relèvent du LYCÉE et qu'il faut traiter avec prudence. " +
        "Le COEFFICIENT DIRECTEUR (la « pente ») n'est pas un objet du cycle 4 : les fonctions affines " +
        "apparaissent en troisième, et leur coefficient directeur en seconde. Or trois questions sur cinq " +
        "de l'évaluation (Q2, Q3 et Q5) reposent sur lui. En cinquième, cela doit rester une lecture " +
        "CONCRÈTE — « combien de kilomètres gagnés par heure », « combien de centimètres par semaine » — et " +
        "jamais un calcul formel de $\\dfrac{\\Delta y}{\\Delta x}$. Présenté comme un taux d'accroissement " +
        "lu sur un graphique, l'objet est accessible et utile ; présenté comme une formule, il est hors " +
        "programme et décourageant. " +
        "Le vocabulaire « interpoler / extrapoler » n'est pas exigible, mais la distinction qu'il recouvre " +
        "l'est bien : estimer entre deux mesures est fiable, prolonger au-delà est risqué. " +
        "C'est le chapitre de l'ouvrage dont l'écart au programme est le plus net, et il est prudent de " +
        "l'alléger pour une classe fragile.",

  erreurs: [
    {
      titre: "Inverser abscisse et ordonnée",
      eleve: "Pour le point $M(4 ; -2)$, l'élève donne $4$ comme ordonnée ; ou place le point en " +
             "$(-2 ; 4)$ sur le graphique.",
      cause: "Les deux mots sont abstraits, proches, et rien dans leur forme ne dit lequel va avec quel " +
             "axe. L'ordre du couple $(x ; y)$ est une convention, donc arbitraire et invisible. " +
             "L'erreur est d'autant plus tenace que l'élève a souvent retenu la règle sans le moyen de la " +
             "retrouver s'il l'oublie.",
      remede: "Donner un repère de mémoire qui se reconstruit seul plutôt qu'une règle à retenir : " +
              "l'ordre alphabétique, abscisse avant ordonnée, est le même que l'ordre du couple ; et " +
              "l'abscisse se lit en marchant d'abord horizontalement, comme on lit une ligne, avant de " +
              "monter. Exiger ensuite le geste en deux temps sur le quadrillage, doigt sur l'axe " +
              "horizontal puis montée verticale, avant d'écrire quoi que ce soit. " +
              "Faire enfin constater que $(4 ; -2)$ et $(-2 ; 4)$ sont deux points DIFFÉRENTS du plan, " +
              "situés dans deux quadrants distincts : l'ordre n'est pas un détail de notation.",
      exercice: null
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE. Les quatre moules du generateur
         portent tous sur le CALCUL d'une pente et d'une interpolation a partir
         de deux couples donnes en toutes lettres ; aucun exercice ne demande de
         LIRE ou de PLACER un point dans un repere, qui est pourtant le premier
         attendu du chapitre et l'objet de la question 1 de l'evaluation. Le
         generateur n'a pas ete elargi ici, a la difference d'autres chapitres :
         un exercice de lecture de repere exige une figure de repere COMPLETE
         avec quadrillage et point a placer, que la bibliotheque de figures
         d'exercices ne fournit pas encore (voir le rapport de chantier). Un
         renvoi vers un calcul de pente ne travaillerait pas l'erreur. */
    },
    {
      titre: "Calculer la pente en divisant dans le mauvais sens",
      eleve: "Pour $A(1 ; 3)$ et $B(5 ; 11)$, l'élève calcule $\\dfrac{5 - 1}{11 - 3} = 0{,}5$ au lieu " +
             "de $\\dfrac{11 - 3}{5 - 1} = 2$.",
      cause: "Les quatre nombres sont disponibles et rien, dans la mémoire d'une formule, ne dit lequel " +
             "va au numérateur. L'élève écrit la division dans l'ordre où il lit les points. " +
             "C'est la même erreur que l'inversion de $v = \\dfrac{d}{t}$ au chapitre de la " +
             "proportionnalité, et elle se traite de la même façon.",
      remede: "Passer par l'UNITÉ plutôt que par la formule, ce qui donne l'ordre sans rien mémoriser : " +
              "une pente se lit « tant de kilomètres PAR heure », donc des kilomètres (l'axe vertical) " +
              "divisés par des heures (l'axe horizontal). La grandeur cherchée nomme elle-même sa " +
              "division. Ajouter le contrôle de sens : sur ce graphique, on gagne $8$ km en $4$ h, donc " +
              "plus de $1$ km par heure — la réponse $0{,}5$ est donc trop petite, et l'élève peut " +
              "l'écarter seul. Exiger enfin l'écriture des deux écarts séparément, $\\Delta y = 8$ et " +
              "$\\Delta x = 4$, avant de former le quotient.",
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Extrapoler comme on interpole",
      eleve: "« Le plant mesure $3{,}3$ cm à $3$ semaines et $8{,}8$ cm à $8$ semaines, donc il mesurera " +
             "$55$ cm à $50$ semaines » — la régularité observée est prolongée sans réserve.",
      cause: "Rien dans le calcul ne distingue une estimation faite ENTRE deux mesures d'une estimation " +
             "faite AU-DELÀ : l'opération est identique, seule la position du point change. L'élève, qui " +
             "n'a que le calcul pour guide, ne voit pas qu'il a changé de statut épistémique.",
      remede: "Opposer deux questions sur le même graphique : la taille à $5$ semaines, qui est encadrée " +
              "par des mesures, et la taille à $50$ semaines, qui ne l'est pas. Faire chercher ce qui se " +
              "passera réellement : le plant finira par cesser de grandir, donc la droite ne peut pas " +
              "continuer. La limite n'est pas mathématique mais physique, et c'est ce qui la rend " +
              "convaincante. " +
              "Installer la règle de prudence : on interpole sans réserve, on extrapole en disant " +
              "toujours à quelle condition — « SI la croissance reste régulière ». Un élève qui écrit " +
              "cette condition a compris l'essentiel du chapitre.",
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Q1 ordonnée d'un point             -> représenter
     Q2 pente d'une droite              -> calculer
     Q3 interpoler ou extrapoler ?      -> raisonner
     Q4 définir « interpoler »          -> communiquer
     Q5 pente nulle d'une horizontale   -> raisonner

     Q1 est « représenter » : c'est la lecture d'un couple de coordonnées, donc
     le passage du registre numérique au registre graphique.
     Q4 demande de choisir, parmi quatre formulations en mots, celle qui définit
     correctement l'interpolation : c'est bien « communiquer », et l'énoncé
     n'a pas eu besoin d'être réécrit.
     Q5 est « raisonner » : aucun calcul n'est attendu, il faut comprendre
     qu'une droite horizontale n'a aucune variation verticale, donc une pente
     nulle — et non une pente « impossible », qui est l'erreur courante. */
  competences: {
    evaluation: ["représenter", "calculer", "raisonner", "communiquer", "raisonner"]
  }
};
