/* =========================================================
   Spark Learning – js/data/prof/5e/5e-parallelogrammes.prof.js
   Fiche professeur du chapitre « Parallélogrammes et propriétés »
   (cinquième), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la cinquième (2026-09-13) : c'est sur lui qu'ont été
   éprouvés, avant d'être étendus aux treize autres, l'écriture des fiches, les
   schémas secondaires, les figures d'exercices et l'élargissement du
   générateur. Les choix commentés ici valent donc pour tout l'ouvrage.

   Contenu écrit à la main et relu : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["5e-parallelogrammes"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro.
     La progression annuelle en fait la colonne « S'appuie sur ».

     ch. 8 (triangles) : toute la démonstration des propriétés du
     parallélogramme passe par le découpage en deux triangles égaux suivant une
     diagonale — c'est de là que viennent l'égalité des côtés opposés et celle
     des angles opposés. L'aire elle-même se lit comme deux fois l'aire d'un
     triangle. Traiter les quadrilatères avant les triangles obligerait à
     admettre ces propriétés au lieu de les établir.

     Pas de renvoi vers l'aire (ch. 11) : c'est l'inverse qui est vrai, le
     chapitre des aires composées s'appuie sur celui-ci. La relation est
     déclarée une seule fois, dans le sens où elle existe, et la colonne
     « Prépare » de la progression l'affiche automatiquement en sens inverse. */
  prerequis: [8],

  /* Rang conseillé 8 sur 14. La géométrie de l'année s'ouvre par les triangles
     (rang 7), dont ce chapitre est la suite immédiate.

     Noter l'écart avec le LIVRE, qui range ce chapitre en 9e position : les
     deux ordres sont proches ici, et c'est normal — le livre suit les domaines,
     la progression suit les dépendances, et sur la géométrie les deux
     coïncident presque. */
  rangConseille: 8,

  // Attendus de fin d'année de cinquième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie » et domaine « Grandeurs et mesures ».
  attendus: [
    "Reconnaître et caractériser les parallélogrammes particuliers (rectangle, losange, carré) par leurs côtés, leurs angles et leurs diagonales",
    "Utiliser les propriétés des parallélogrammes pour justifier une égalité de longueurs ou d'angles",
    "Calculer l'aire d'un parallélogramme et d'un losange, et choisir la grandeur pertinente (base et hauteur, ou diagonales)"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Le programme de cinquième demande de reconnaître et de caractériser les parallélogrammes " +
        "particuliers, et d'en calculer l'aire. Deux points de ce chapitre vont au-delà. " +
        "D'abord la HIÉRARCHIE présentée comme une implication logique (« tout carré est un losange ») : " +
        "c'est un raisonnement d'inclusion, formalisé en quatrième ; en cinquième on l'installe sur des " +
        "exemples et des contre-exemples, sans exiger l'écriture symbolique. " +
        "Ensuite la DÉMONSTRATION des propriétés par le découpage en triangles égaux, qui suppose les cas " +
        "d'égalité des triangles, hors programme de cinquième : on la conduit donc comme une " +
        "vérification guidée sur figure, jamais comme une preuve rédigée exigible. " +
        "La question 4 de l'évaluation, qui porte sur la hiérarchie, est à ce titre la plus exigeante du " +
        "devoir ; son barème la traite comme les autres, ce qui est un choix délibéré pour ne pas " +
        "décourager — mais elle discrimine nettement.",

  // Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
  // y répondre, et l'exercice du livre qui sert de remédiation.
  //
  // REGLE TENUE SANS EXCEPTION : aucun renvoi ne vise l'évaluation notée. On
  // remédie AVANT d'évaluer. Les renvois ci-dessous pointent tous vers des
  // exercices du corps du chapitre, et chacun a été vérifié contre un tirage
  // réel du livre — non pas « l'exercice existe », mais « l'exercice travaille
  // bien CETTE erreur-là ».
  erreurs: [
    {
      titre: "Multiplier la base par le côté oblique",
      eleve: "Pour l'aire d'un parallélogramme de base $8$ cm dont le côté oblique mesure $6$ cm, " +
             "l'élève écrit $\\mathcal{A} = 8 \\times 6 = 48$ cm², alors que la hauteur vaut $5$ cm " +
             "et que l'aire est $40$ cm².",
      cause: "Transfert de la formule du rectangle, où « les deux côtés » suffisent parce qu'ils sont " +
             "perpendiculaires. Dans un parallélogramme incliné, le côté oblique est le trait que " +
             "l'élève VOIT, tandis que la hauteur n'est pas dessinée dans l'énoncé : il prend donc le " +
             "trait disponible. L'erreur est d'autant plus tenace que le résultat obtenu est plausible.",
      /* 2026-09-13 : ce remède est la raison d'être du premier schéma secondaire
         du chapitre. Le contre-argument décisif n'est pas « ce n'est pas la
         bonne formule » mais « le côté oblique est PLUS LONG que la hauteur,
         donc ton aire est trop grande » — un élève peut le constater lui-même
         sur la figure, à la règle. */
      remede: "Faire mesurer les deux traits sur le schéma « La hauteur n'est pas le côté oblique » : " +
              "la hauteur $5$ cm, le côté oblique $\\approx 5{,}83$ cm. Le côté oblique est toujours le " +
              "plus long, puisque la hauteur est le plus court chemin du sommet à la base — l'aire " +
              "calculée avec lui est donc toujours trop grande, ce qui donne à l'élève un moyen de " +
              "détecter son erreur seul. Puis installer le geste : poser l'équerre sur la base, et ne " +
              "retenir que le trait qui la suit. Dans les exercices, la figure trace la hauteur en " +
              "pointillé et ne chiffre jamais le côté oblique, précisément pour ne pas tendre le piège.",
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Prendre les diagonales du losange pour ses côtés",
      eleve: "Pour un losange de diagonales $6$ cm et $4$ cm, l'élève écrit $\\mathcal{A} = 6 \\times 4 = 24$ cm² " +
             "(il oublie la division par $2$), ou bien traite $6$ et $4$ comme deux côtés et cherche un " +
             "périmètre.",
      cause: "Deux nombres donnés pour un quadrilatère évoquent immédiatement « longueur et largeur ». " +
             "Rien dans l'énoncé écrit ne dit que ces nombres sont des traits INTÉRIEURS à la figure, " +
             "et un losange n'a de toute façon qu'une seule longueur de côté, ce qui rend l'hypothèse " +
             "« deux côtés » géométriquement impossible — mais l'élève ne le voit pas.",
      /* 2026-09-13 : le « pourquoi » du facteur un demi est ce qui manque le
         plus souvent. La deuxième figure du chapitre le donne par l'aire, pas
         par un mot à retenir : le losange occupe exactement la moitié du
         rectangle bâti sur ses diagonales, ce qui est vérifiable au quadrillage. */
      remede: "Revenir au schéma « L'aire du losange, vue comme un rectangle » : le losange de " +
              "diagonales $8$ cm et $6$ cm est inscrit dans le rectangle $8 \\times 6$, dont il occupe " +
              "exactement la moitié — $48$ cm² contre $24$ cm². Le $\\div 2$ cesse alors d'être une " +
              "consigne à mémoriser. Faire ensuite constater sur la figure d'exercice que les deux " +
              "nombres cotés sont les traits qui traversent la figure, jamais son contour : les quatre " +
              "côtés d'un losange étant égaux, deux nombres différents ne peuvent pas être des côtés.",
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Attribuer à tout parallélogramme les propriétés du rectangle ou du losange",
      eleve: "« Les diagonales d'un parallélogramme sont perpendiculaires », ou « elles sont de même " +
             "longueur » — affirmé d'un parallélogramme quelconque.",
      cause: "La mémoire visuelle retient les cas particuliers, parce que ce sont eux qu'on dessine le " +
             "plus : un parallélogramme « propre » tracé au tableau ressemble souvent à un rectangle " +
             "penché. L'élève généralise alors une propriété vraie d'un sous-cas à toute la famille, " +
             "c'est-à-dire qu'il lit l'inclusion à l'envers.",
      remede: "Utiliser le schéma « Trois quadrilatères, trois comportements des diagonales », où les " +
              "trois figures partagent la même ligne de base et la même échelle : seul le comportement " +
              "des diagonales change. Faire énoncer ce qui est COMMUN (elles se coupent en leur milieu, " +
              "dans les trois cas) avant ce qui est PROPRE (égales pour le rectangle, perpendiculaires " +
              "pour le losange). Le geste de contrôle tient en deux mesures : comparer les longueurs des " +
              "diagonales, puis vérifier leur croisement à l'équerre — sans mesurer un seul côté. " +
              "Insister sur le sens de l'inclusion avec un contre-exemple dessiné : un parallélogramme " +
              "franchement incliné, dont les diagonales ne sont ni égales ni perpendiculaires.",
      /* 2026-09-13 : RENVOI DELIBEREMENT VIDE, et c'est dit dans le remède
         ci-dessus. Le générateur du chapitre ne produit que des calculs d'aire
         et de demi-diagonale ; AUCUN exercice ne demande de juger une propriété
         des diagonales d'un parallélogramme quelconque. La seule question qui le
         fasse est la question 3 de l'évaluation, donc le devoir noté, vers
         lequel une remédiation ne renvoie jamais. Plutôt que de pointer un
         exercice d'aire qui ne travaille pas l'erreur — un renvoi faux est pire
         qu'un renvoi absent —, la fiche laisse le renvoi vide et appuie le
         remède sur le schéma de cours, qui lui traite exactement cela. */
      exercice: null
    },
    {
      titre: "Oublier que le point d'intersection des diagonales en est le milieu",
      eleve: "Les diagonales d'un rectangle mesurent $12$ cm et se coupent en $O$ ; l'élève répond " +
             "$OA = 12$ cm, ou bien cherche à appliquer un théorème.",
      cause: "L'énoncé donne un nombre, l'élève le rend. La propriété « les diagonales se coupent en " +
             "leur milieu » a été apprise comme une caractérisation du parallélogramme — un critère " +
             "pour le RECONNAÎTRE — et non comme un outil de CALCUL de longueur. Elle n'est donc pas " +
             "mobilisée quand c'est une longueur qui est demandée.",
      remede: "Faire tracer le rectangle et ses deux diagonales, puis marquer $O$ et coder les quatre " +
              "segments $OA$, $OB$, $OC$, $OD$ du même tic. L'élève voit alors quatre segments égaux " +
              "formant deux diagonales : chacun vaut la moitié d'une diagonale. Formuler la propriété " +
              "dans les deux sens — « se coupent en leur milieu » sert à reconnaître la figure ET à " +
              "calculer une longueur. Les exercices de demi-diagonale du chapitre ont été ajoutés " +
              "exactement pour cela : ils donnent la diagonale et demandent $OA$, sans autre détour.",
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Q1 losange par ses diagonales          -> calculer
     Q2 parallélogramme par base x hauteur  -> calculer
     Q3 propriété des diagonales            -> raisonner
     Q4 hiérarchie des quadrilatères        -> raisonner
     Q5 juger l'explication d'un élève      -> communiquer

     2026-09-13 : la question 5 a été RÉÉCRITE dans
     js/data/5e/5e-parallelogrammes.js. Elle demandait la longueur $OA$ à partir
     d'une diagonale de $12$ cm, c'est-à-dire une division par deux — une
     troisième question de « calculer » sur cinq, et surtout un doublon exact de
     la tâche de demi-diagonale désormais travaillée dans les exercices.
     Elle demande maintenant de juger le raisonnement d'un camarade et de dire
     où il se trompe, ce qui mobilise réellement « communiquer ». L'étiquette
     suit l'énoncé, jamais l'inverse : renommer l'ancienne question en
     « communiquer » aurait rempli la colonne de la grille sans que l'élève ait
     eu une seule fois à expliquer quoi que ce soit. */
  competences: {
    evaluation: ["calculer", "calculer", "raisonner", "raisonner", "communiquer"]
  }
};
