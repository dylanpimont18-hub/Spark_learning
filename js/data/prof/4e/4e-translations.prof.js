/* =========================================================
   Spark Learning – js/data/prof/4e/4e-translations.prof.js
   Fiche professeur du chapitre « Translations et rotations » (quatrième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-translations"] = {

  /* ch. 5 (relatifs) : toutes les coordonnées et toutes les composantes de
     vecteur sont des relatifs, et la quasi-totalité des exercices consiste à
     ajouter ou soustraire des nombres signés. L'erreur 1 de cette fiche est en
     réalité une erreur de relatifs qui se manifeste ici. */
  prerequis: [5],

  /* Rang conseillé 9 : la géométrie des transformations n'a aucune dépendance
     envers le bloc du triangle rectangle, mais elle demande une pratique sûre
     des coordonnées relatives. La placer après ce bloc laisse le temps d'y
     arriver, et elle prépare les volumes (rang 10) par le travail sur l'espace. */
  rangConseille: 9,

  attendus: [
    "Transformer une figure par translation et reconnaître l'image obtenue",
    "Transformer une figure par rotation et par symétrie centrale",
    "Déterminer les coordonnées de l'image d'un point par une translation",
    "Savoir que ces transformations conservent les longueurs, les angles et les aires"
  ],

  note: "Les translations, les rotations et la symétrie centrale sont au programme de quatrième, " +
        "ainsi que la conservation des longueurs, des angles et des aires.<br/><br/>" +
        "Une réserve importante sur le vocabulaire : le chapitre emploie la notation " +
        "$\\vec{v}(a ; b)$ et parle de « vecteur de translation ». Le VECTEUR comme objet " +
        "mathématique, avec sa somme et ses propriétés, relève de la seconde. En quatrième, " +
        "$\\vec{v}(a ; b)$ doit être présenté comme un simple raccourci d'écriture pour " +
        "« se déplacer de $a$ horizontalement et de $b$ verticalement ». Ne pas introduire " +
        "la somme de vecteurs comme une notion nouvelle — ce qui est demandé à la question 4 " +
        "de l'évaluation s'explique entièrement comme l'enchaînement de deux déplacements.<br/><br/>" +
        "Les rotations ne sont exercées que par l'évaluation et le cours : le générateur " +
        "d'exercices ne tire que des translations. C'est une limite connue de la banque, " +
        "signalée dans l'erreur 4 ci-dessous.",

  erreurs: [
    {
      titre: "Soustraire les composantes au lieu de les ajouter",
      eleve: "Pour l'image de $A(4 ; 1)$ par la translation de vecteur $\\vec{v}(3 ; 3)$, l'élève " +
             "écrit $A'(1 ; -2)$ : il soustrait les composantes du vecteur aux coordonnées du point.",
      cause: "Le sens du déplacement n'est pas lié au signe des composantes. L'élève manipule deux " +
             "couples de nombres et choisit une opération, sans représentation du mouvement.",
      remede: "Faire EXÉCUTER le déplacement sur un quadrillage avant tout calcul : partir du point, " +
              "avancer de $3$ vers la droite, puis de $3$ vers le haut, et lire l'arrivée. Le résultat " +
              "obtenu à la main fixe le sens de l'opération, et le calcul ne fait plus que le " +
              "retrouver.<br/><br/>" +
              "Installer ensuite un contrôle de signe systématique : une composante POSITIVE fait " +
              "augmenter la coordonnée, une composante NÉGATIVE la fait diminuer. L'élève qui obtient " +
              "une abscisse plus petite alors que la composante est positive voit son erreur sans " +
              "refaire le calcul.<br/><br/>" +
              "Cette erreur est souvent une erreur de relatifs déguisée : si l'élève bute sur " +
              "$-4 + 3$, c'est là qu'il faut revenir, pas sur les translations.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 4 est « $A(-3 ; 5)$ par $\vec{v}(-1 ; -2)$, quelle abscisse ? »,
         réponse $-4$. Les deux nombres sont négatifs, donc soustraire au lieu
         d'ajouter donne $-2$, une valeur PLUS GRANDE : l'élève qui applique le
         contrôle de signe (composante négative, donc l'abscisse doit diminuer)
         détecte l'erreur sans aide. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Calculer le vecteur dans le mauvais sens",
      eleve: "Sachant que $B(-1 ; 5)$ a pour image $B'(2 ; 1)$, l'élève calcule les composantes en " +
             "faisant « départ moins arrivée » et trouve $\\vec{v}(-3 ; 4)$ au lieu de " +
             "$\\vec{v}(3 ; -4)$.",
      cause: "La soustraction de coordonnées est connue, mais l'ordre des termes ne l'est pas : rien " +
             "dans la formule mémorisée ne dit lequel des deux points vient en premier.",
      remede: "Rattacher l'ordre au sens du déplacement, qui n'est pas arbitraire : le vecteur va " +
              "<strong>du départ vers l'arrivée</strong>, donc on calcule " +
              "« arrivée moins départ ». La formule suit le mouvement, elle ne le précède pas.<br/><br/>" +
              "Le contrôle est immédiat et n'exige rien de neuf : appliquer le vecteur trouvé au point " +
              "de départ doit redonner l'image. Avec $\\vec{v}(-3 ; 4)$, on obtiendrait " +
              "$(-4 ; 9)$ et non $(2 ; 1)$ : l'erreur est visible en une ligne.<br/><br/>" +
              "Un appui graphique tranche aussi : sur le quadrillage, $B'$ est à DROITE de $B$, donc " +
              "la première composante est positive. Un signe moins est alors exclu avant tout calcul.",
      /* Volontairement SANS renvoi. Le générateur de ce chapitre ne tire que des
         tâches DIRECTES (un point et un vecteur, trouver l'image) : aucune ne
         demande de retrouver le vecteur à partir du point et de son image, alors
         que l'évaluation le demande deux fois (questions 2 et 3). Un renvoi vers
         une tâche directe ne travaillerait pas l'erreur. À construire au tableau,
         en inversant simplement un énoncé existant. */
      exercice: null
    },
    {
      titre: "Croire qu'une transformation change les dimensions",
      eleve: "« Après la translation, le segment est plus loin donc il est plus long », ou bien l'élève " +
             "hésite à affirmer que l'aire est conservée.",
      cause: "Le mot « transformation » suggère un changement de nature, et l'élève a souvent " +
             "rencontré auparavant des agrandissements et des réductions, où les longueurs changent " +
             "effectivement. Rien ne lui a dit que ces transformations-ci sont d'une autre espèce.",
      remede: "Nommer la propriété et la justifier par le geste : une translation, une rotation et une " +
              "symétrie sont des <strong>isométries</strong> — elles conservent toutes les distances. " +
              "Le calque le démontre en une manipulation : on décalque la figure, on déplace le " +
              "calque, et la figure n'a pas changé. C'est la même figure, ailleurs.<br/><br/>" +
              "En tirer la conséquence sur les aires, qui est ce que demande la question 5 de " +
              "l'évaluation : si tous les côtés ont les mêmes longueurs et tous les angles les mêmes " +
              "mesures, la figure est identique, donc son aire aussi. L'aire est conservée PARCE QUE " +
              "les longueurs le sont, et non par une propriété supplémentaire.<br/><br/>" +
              "Opposer explicitement à l'agrandissement-réduction, qui sera vu en troisième : là, les " +
              "longueurs changent, et c'est justement ce qui le distingue.",
      /* Volontairement SANS renvoi. Tous les exercices du chapitre portent sur des
         COORDONNÉES d'images de points : aucun ne demande de comparer une longueur
         ou une aire avant et après transformation. La propriété de conservation
         n'est exercée que par le cours et l'évaluation, et on ne remédie jamais
         avec le devoir noté. La remédiation se fait au calque, en trois minutes. */
      exercice: null
    },
    {
      titre: "Appliquer une rotation comme une symétrie centrale quelconque",
      eleve: "Pour une rotation de $180°$ autour de l'origine appliquée à $A(3 ; 2)$, l'élève répond " +
             "$A'(3 ; -2)$ ou $A'(-3 ; 2)$ : il change un seul signe.",
      cause: "La rotation de $180°$ est confondue avec une symétrie axiale, qui ne change qu'une " +
             "coordonnée. L'élève connaît bien les symétries axiales de sixième et applique ce qu'il " +
             "en sait.",
      remede: "Faire le tour complet à la main : une rotation d'un demi-tour autour de l'origine envoie " +
              "chaque point de l'autre côté du centre, à la même distance. Les DEUX coordonnées " +
              "changent donc de signe : $A(3 ; 2)$ devient $A'(-3 ; -2)$.<br/><br/>" +
              "Nommer le lien, qui simplifie tout : une rotation de $180°$ autour d'un point EST la " +
              "symétrie centrale de centre ce point. Deux noms, une seule transformation.<br/><br/>" +
              "Le contrôle graphique est le plus convaincant : le centre doit être le MILIEU du " +
              "segment $[AA']$. Avec $A'(3 ; -2)$, le milieu de $[AA']$ est $(3 ; 0)$, qui n'est pas " +
              "l'origine — l'erreur est visible sur le quadrillage sans aucun calcul.",
      /* Volontairement SANS renvoi. Le générateur ne tire AUCUNE rotation : ses
         tirages portent tous sur des translations. Les rotations n'apparaissent
         que dans le cours et à la question 4 de l'évaluation. C'est la limite la
         plus nette de la banque de ce chapitre, et elle est signalée dans la note
         ci-dessus plutôt que comblée par un renvoi faux. */
      exercice: null
    }
  ],

  /* Q1 applique une translation à un point en lisant le déplacement dans le
     repère : « représenter ».
     Q2 et Q3 calculent les deux composantes d'un vecteur : « calculer ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancienne question appliquait une rotation
     de 180°, ce que le cours donne tel quel. La nouvelle demande de COMPOSER deux
     translations et de comprendre qu'une seule suffit, ce que rien ne suggère —
     « chercher ».
     Q5 a été RÉÉCRITE : elle demandait une longueur que son propre corrigé
     donnait en une ligne. Elle demande maintenant d'expliquer pourquoi une aire
     est conservée, en articulant conservation des longueurs et identité de la
     figure — « communiquer ».

     TROIS REMÉDIATIONS SUR QUATRE SONT SANS RENVOI dans cette fiche, ce qui est
     exceptionnel et mérite d'être dit : le générateur de ce chapitre ne tire
     qu'une seule tâche (image d'un point par une translation), alors que le
     chapitre couvre aussi les rotations, la recherche du vecteur et la
     conservation des grandeurs. La banque est riche en NOMBRE (74 moules, le
     record du niveau) et pauvre en VARIÉTÉ DE TÂCHES. C'est le chantier le plus
     utile à reprendre sur ce chapitre. */
  competences: {
    evaluation: ["représenter", "calculer", "calculer", "chercher", "communiquer"]
  }
};
