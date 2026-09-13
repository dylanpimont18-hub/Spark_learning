/* =========================================================
   Spark Learning – js/data/prof/4e/4e-triangle-rectangle-cercle.prof.js
   Fiche professeur du chapitre « Triangle rectangle et cercle circonscrit »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.
   Écrite le 2026-09-13, sur le modèle du chapitre pilote 4e-pythagore.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["4e-triangle-rectangle-cercle"] = {

  /* ch. 3 (Pythagore) : dès que le diamètre donne l'angle droit, le calcul du
     troisième côté est un Pythagore. La tâche « troisieme-cote » du générateur et
     la question 4 de l'évaluation en dépendent entièrement. */
  prerequis: [3],

  /* Rang conseillé 6, juste après Pythagore (rang 5). L'ordre est contraint :
     ce chapitre fournit l'angle droit, Pythagore l'exploite, et les deux se
     combinent dans presque tous les exercices. */
  rangConseille: 6,

  attendus: [
    "Caractériser le triangle rectangle par son cercle circonscrit",
    "Utiliser la propriété de l'angle inscrit dans un demi-cercle et sa réciproque",
    "Savoir que le milieu de l'hypoténuse est le centre du cercle circonscrit",
    "Calculer la longueur de la médiane issue de l'angle droit"
  ],

  note: "La caractérisation du triangle rectangle par le cercle circonscrit est au programme de " +
        "quatrième, dans les deux sens (propriété directe et réciproque).<br/><br/>" +
        "Attention au vocabulaire : ce chapitre est souvent présenté sous le nom de « théorème de " +
        "l'angle inscrit », mais le théorème de l'angle inscrit GÉNÉRAL (un angle inscrit vaut la " +
        "moitié de l'angle au centre) relève de la troisième. Seul le cas particulier du " +
        "demi-cercle est de quatrième. Ne pas annoncer aux élèves un théorème plus général que " +
        "celui qu'on démontre.",

  erreurs: [
    {
      titre: "Croire que la position du point sur le cercle change l'angle",
      eleve: "« L'angle est droit seulement si $A$ est juste au-dessus du centre », ou bien l'élève " +
             "refuse de conclure quand $A$ est placé très près de $B$.",
      cause: "Toutes les figures vues en classe placent le sommet à peu près au milieu de l'arc, et " +
             "l'élève en déduit une condition de position. De plus, quand $A$ approche de $B$, le " +
             "triangle devient très aplati et l'angle droit ne « ressemble » plus à un angle droit.",
      remede: "Faire la manipulation, elle est décisive : tracer un cercle, son diamètre, puis placer " +
              "SIX points différents sur le demi-cercle et mesurer les six angles à l'équerre. Les six " +
              "sont droits, y compris celui du triangle le plus aplati.<br/><br/>" +
              "Énoncer ensuite la propriété avec son quantificateur : <strong>tout</strong> point du " +
              "cercle distinct de $B$ et de $C$ voit le diamètre sous un angle droit. Le mot « tout » " +
              "est la propriété ; sans lui, il ne reste qu'une observation.<br/><br/>" +
              "Le cas limite mérite d'être dit : si $A$ est confondu avec $B$ ou $C$, il n'y a plus de " +
              "triangle. C'est la seule exclusion, et elle n'a rien à voir avec la position.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est une tâche « angle-inscrit » — « un point $A$ est placé
         sur le cercle, distinct de $B$ et de $C$ : combien vaut l'angle ? »,
         réponse 90. L'énoncé ne donne AUCUNE position précise, ce qui est
         exactement le point : la réponse ne peut pas en dépendre. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Prendre le rayon pour l'hypoténuse",
      eleve: "Le cercle a un rayon de $5$ cm, et l'élève applique Pythagore avec $5$ comme hypoténuse " +
             "au lieu de $10$.",
      cause: "Deux longueurs sont en jeu — le rayon et le diamètre — et c'est le rayon qui est donné " +
             "dans l'énoncé. L'élève utilise la donnée telle quelle, sans l'étape de conversion, " +
             "d'autant que le mot « hypoténuse » n'apparaît pas.",
      remede: "Exiger une ligne d'identification avant tout calcul, écrite noir sur blanc : " +
              "« l'hypoténuse est le diamètre, donc elle vaut $2R$ ». Cette ligne n'est pas du " +
              "remplissage : c'est là que se joue le chapitre, le calcul qui suit n'étant qu'un " +
              "Pythagore de routine.<br/><br/>" +
              "Donner aussi un contrôle de grandeur : l'hypoténuse est le plus long côté du triangle. " +
              "Si un côté annoncé dépasse l'hypoténuse supposée, c'est le rayon qui a été pris pour " +
              "le diamètre — et c'est ce qui arrive immédiatement si l'on prend $5$ pour hypoténuse " +
              "d'un triangle dont un côté mesure $12$.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 donne un cercle
         de rayon 5 cm et $AB = 8$ cm, et demande le troisième côté. Prendre 5
         pour hypoténuse rend le calcul IMPOSSIBLE — on chercherait la racine d'un
         nombre négatif — ce qui signale l'erreur sans ambiguïté. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Confondre le centre du cercle circonscrit avec le centre de gravité",
      eleve: "Interrogé sur le point équidistant des trois sommets, l'élève répond « le centre de " +
             "gravité », ou place le point d'intersection des médianes.",
      cause: "Plusieurs points remarquables du triangle sont vus dans la même année, tous décrits " +
              "comme « le point où trois droites se coupent ». Rien ne les distingue dans la " +
              "formulation, et le centre de gravité est le plus souvent cité.",
      remede: "Associer chaque point à la PROPRIÉTÉ qui le définit, et non à la famille de droites " +
              "dont il vient : le centre du cercle circonscrit est le point à égale distance des trois " +
              "<strong>sommets</strong> (d'où les médiatrices) ; le centre du cercle inscrit est à " +
              "égale distance des trois <strong>côtés</strong> (d'où les bissectrices) ; le centre de " +
              "gravité est le point d'<strong>équilibre</strong> (d'où les médianes).<br/><br/>" +
              "Dans le cas particulier du triangle rectangle, la réponse est encore plus simple et " +
              "vaut la peine d'être retenue comme telle : le centre du cercle circonscrit est le " +
              "<strong>milieu de l'hypoténuse</strong>. C'est visible sur la figure, sans construction.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 est une tâche
         « rayon-median » — « le triangle est rectangle en $A$, $M$ est le milieu
         de $[BC]$, que vaut $AM$ ? », réponse 4 pour $BC = 8$. La solution
         imprimée explique que $MA = MB = MC$ sont trois RAYONS, ce qui est
         précisément la propriété à retenir. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Appliquer la réciproque sans vérifier que le côté est bien un diamètre",
      eleve: "Devant un triangle inscrit dans un cercle, l'élève conclut qu'il est rectangle sans " +
             "avoir regardé si l'un de ses côtés passe par le centre.",
      cause: "La propriété est mémorisée sous une forme tronquée : « triangle inscrit dans un cercle, " +
             "donc rectangle ». La condition sur le diamètre, qui est l'hypothèse essentielle, " +
             "disparaît de la formule retenue parce qu'elle est plus longue à dire.",
      remede: "Montrer un contre-exemple, une fois, et il suffit : tracer un cercle et un triangle " +
              "inscrit quelconque dont aucun côté ne passe par le centre. Il n'a aucun angle droit, et " +
              "tout triangle est inscriptible dans un cercle. La propriété tronquée est donc fausse " +
              "pour presque tous les triangles.<br/><br/>" +
              "Faire ensuite énoncer la propriété en deux temps, l'hypothèse d'abord : « SI un côté " +
              "est un diamètre, ALORS l'angle opposé est droit ». Puis exiger, dans chaque rédaction, " +
              "que la phrase commence par la vérification de l'hypothèse.",
      /* Volontairement SANS renvoi. Tous les exercices du chapitre ANNONCENT que
         le côté est un diamètre, ou que le triangle est rectangle : aucun ne
         demande de vérifier l'hypothèse, et aucun ne propose de triangle inscrit
         sans diamètre. La remédiation passe par une figure à tracer, et un renvoi
         vers un exercice qui donne l'hypothèse serait un faux renvoi. */
      exercice: null
    }
  ],

  /* Q1 conclut d'une hypothèse géométrique à une mesure d'angle sans calcul :
     « raisonner ».
     Q2 calcule un rayon à partir de l'hypoténuse : « calculer ».
     Q3 demande de situer le centre du cercle circonscrit, donc de mettre une
     propriété en correspondance avec un point de la figure : « représenter ».
     Q4 a été RÉÉCRITE le 2026-09-13 : l'ancien énoncé donnait le rayon et
     désignait l'angle droit, les deux gestes étaient annoncés. Le nouveau donne
     un PÉRIMÈTRE de cercle, et l'élève doit remonter au rayon, puis au diamètre,
     puis reconnaître l'hypoténuse — « chercher ».
     Q5 a été RÉÉCRITE : elle demandait de nommer une conclusion que son énoncé
     livrait déjà (il disait « hypoténuse »). Elle demande maintenant de choisir
     la JUSTIFICATION correcte — « communiquer ». */
  competences: {
    evaluation: ["raisonner", "calculer", "représenter", "chercher", "communiquer"]
  }
};
