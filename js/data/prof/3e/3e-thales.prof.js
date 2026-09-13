/* =========================================================
   Spark Learning – js/data/prof/3e/3e-thales.prof.js
   Fiche professeur du chapitre « Théorème de Thalès » (troisième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE de la troisième (2026-09-13) : c'est sur lui qu'ont été
   calées les conventions reprises dans les douze autres fiches du niveau, et
   c'est lui qui a servi à vérifier la chaîne complète jusqu'au PDF avant de
   dérouler le reste.

   CE QUE LA TROISIÈME CHANGE. C'est l'année du brevet, et la démonstration y
   devient un attendu et non un ornement. Les fiches de ce niveau nomment donc
   explicitement, dans leurs erreurs fréquentes, ce qui relève de la RÉDACTION
   d'un raisonnement et non du calcul : citer le théorème, vérifier ses
   hypothèses, conclure. C'est ce que le brevet évalue, et c'est ce que les
   élèves omettent en premier.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-thales"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js) : le livre range par domaine, une progression range
     par dépendance.

     ch. 6 (équations et inéquations) : tout Thalès se ramène à résoudre
     $\dfrac{a}{b} = \dfrac{x}{c}$, c'est-à-dire une équation à une inconnue
     traitée par produit en croix. L'élève qui bute sur le produit en croix
     n'échoue pas sur Thalès, il échoue sur l'équation — et c'est l'erreur 4 de
     cette fiche.

     Le théorème de Pythagore de quatrième n'est PAS un prérequis, contrairement
     à ce qu'on attend : Thalès ne mobilise aucun carré ni aucune racine. Les
     deux théorèmes se ressemblent par leur place dans l'année, pas par leur
     contenu, et le dire à l'enseignant évite une révision inutile. */
  prerequis: [6],

  /* Rang conseillé (2026-09-13) : rang 8. Thalès ouvre la géométrie de
     l'année, après le socle calculatoire (identités remarquables, équations,
     arithmétique) dont il a besoin pour isoler une inconnue dans une
     proportion. Il précède immédiatement les homothéties (rang 9), qui en sont
     la lecture en termes de transformation, et la trigonométrie (rang 10), qui
     réutilise le même triangle rectangle de référence.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. Les deux
     ordres diffèrent, et c'est normal. */
  rangConseille: 8,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie ».
  attendus: [
    "Mener des raisonnements et démontrer en utilisant le théorème de Thalès et sa réciproque",
    "Calculer une longueur dans une configuration de Thalès, dans les deux dispositions (triangle emboîté et papillon)",
    "Déterminer si deux droites sont parallèles à partir de rapports de longueurs",
    "Utiliser le rapport d'agrandissement ou de réduction entre deux figures de même forme"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Le théorème de Thalès et sa réciproque sont au programme de troisième, " +
        "dans les deux configurations, emboîtée et croisée.<br/><br/>" +
        "Deux points vont au-delà. D'abord les <strong>mesures algébriques</strong> et le " +
        "grandissement négatif, évoqués dans le piège du cours : la notion de mesure " +
        "signée n'est pas au programme du collège, et ce passage est à traiter en " +
        "ouverture orale plutôt qu'en exigence. En troisième, on se contente de dire que " +
        "l'image est renversée, sans l'écrire avec un signe.<br/><br/>" +
        "Ensuite le <strong>grandissement optique</strong> lui-même, qui relève de la " +
        "physique-chimie de troisième et non des mathématiques. Il figure ici parce qu'il " +
        "donne au rapport de Thalès son application la plus parlante, mais il ne peut pas " +
        "être exigé dans une évaluation de mathématiques. C'est en revanche une excellente " +
        "occasion de travail interdisciplinaire avec le collègue de physique.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre. */
  erreurs: [
    {
      titre: "Mélanger le sens des deux rapports",
      eleve: "Pour $OA = 6$, $OM = 9$ et $AB = 6$, l'élève écrit $\\dfrac{OA}{OM} = \\dfrac{MN}{AB}$, " +
             "soit $\\dfrac{6}{9} = \\dfrac{MN}{6}$, et conclut $MN = 4$ cm — un segment plus petit que " +
             "celui dont il est pourtant l'agrandissement.",
      cause: "L'égalité de Thalès est mémorisée comme une suite de lettres à recopier, pas comme une " +
             "comparaison entre deux triangles. L'élève retient qu'il faut « les mêmes lettres des deux " +
             "côtés » et ne perçoit pas que chaque quotient doit placer la grande longueur au même " +
             "endroit. Rien dans l'écriture ne le lui signale : les deux fractions ont l'air également " +
             "plausibles.",
      remede: "Installer un <strong>contrôle de grandeur avant tout calcul</strong>, exactement comme on " +
              "le fait pour Pythagore : demander systématiquement « la longueur que je cherche est-elle " +
              "plus grande ou plus petite que celle qu'on me donne ? ». Un résultat du mauvais côté se " +
              "repère alors sans relire une seule ligne.<br/><br/>" +
              "Le schéma « Un rapport se lit toujours dans le même sens » du cours est fait pour cela : " +
              "le calcul juste est en haut, en teinte d'accent, l'écriture fautive en dessous, en trait " +
              "tireté, avec le résultat impossible qu'elle produit. Les deux partent des mêmes données, " +
              "si bien que la seule différence visible est l'orientation des quotients.<br/><br/>" +
              "Un geste qui règle l'erreur durablement : faire écrire les deux fractions l'une sous " +
              "l'autre et entourer les deux grandes longueurs. Si les deux cercles ne sont pas à la même " +
              "hauteur, l'égalité est fausse.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 6 est « une maquette et le bâtiment réel vus depuis le même
         point O ; on donne MN, OM et OA, calcule AB ». C'est la tâche 'inverse'
         du générateur, celle qui demande de remonter du GRAND au PETIT : un
         élève qui inverse les rapports trouve un résultat plus grand que le
         bâtiment lui-même. L'énoncé prend donc l'erreur à revers, et sa
         solution imprimée commence par le contrôle de grandeur que le remède
         demande d'exiger. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Ne pas reconnaître la configuration en papillon",
      eleve: "Devant une figure où le point $O$ est entre les deux parallèles, l'élève écrit « on ne peut " +
             "pas appliquer Thalès ici », ou bien cherche à redresser la figure pour la faire ressembler " +
             "au dessin du cours.",
      cause: "Toutes les configurations rencontrées jusque-là sont emboîtées, et le théorème a donc été " +
             "identifié à une IMAGE plutôt qu'à des hypothèses. Rien n'a jamais mis cette association à " +
             "l'épreuve, si bien qu'elle tient lieu de condition d'application. L'élève ne refuse pas le " +
             "théorème, il ne le reconnaît pas.",
      remede: "Revenir aux hypothèses, et à elles seules : deux sécantes passant par un même point, deux " +
              "droites parallèles. Rien dans cet énoncé ne dit de quel côté de $O$ se trouvent les " +
              "points. Faire relire la propriété du cours en soulignant qu'aucune position n'y est " +
              "exigée.<br/><br/>" +
              "Le schéma « Le papillon est une configuration de Thalès » montre les deux dispositions " +
              "côte à côte, avec les mêmes lettres et les mêmes rapports. La seule différence visible " +
              "est la place de $O$, et l'égalité écrite dessous est mot pour mot la même.<br/><br/>" +
              "Un geste efficace : faire tracer la configuration emboîtée, puis faire prolonger les deux " +
              "sécantes au-delà de $O$ et placer la seconde parallèle de l'autre côté. L'élève construit " +
              "lui-même le papillon à partir de la figure qu'il reconnaît, et voit qu'il n'a rien changé " +
              "aux hypothèses.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 8 est
         « deux routes se croisent au rond-point O, les villages A et M sont de
         part et d'autre ». L'énoncé annonce explicitement le papillon, ce qui
         est le bon niveau pour une remédiation : l'élève n'a pas à reconnaître
         la configuration ET à calculer du même coup, il s'entraîne d'abord à
         calculer dedans. La figure jointe est réellement croisée (vérifié au
         produit scalaire par scripts/manuel/tests/figures-3e.test.js). */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Conclure au parallélisme sur des rapports « presque » égaux",
      eleve: "Pour $\\dfrac{OM}{OA} = 2$ et $\\dfrac{ON}{OB} = 1{,}9$ : « c'est presque pareil, donc les " +
             "droites sont parallèles ».",
      cause: "Transfert d'une habitude légitime ailleurs : en mesure, on arrondit, et deux valeurs " +
             "proches sont « les mêmes ». L'élève ne perçoit pas que la réciproque est un test logique " +
             "et non une comparaison de mesures. C'est exactement l'erreur commise un an plus tôt sur la " +
             "réciproque de Pythagore, et la reconnaître comme telle aide beaucoup les élèves qui l'ont " +
             "déjà travaillée.",
      remede: "Montrer ce que coûte l'approximation. Le schéma « Rapports égaux ou droites parallèles, " +
              "jamais à peu près » du cours porte sur deux configurations aux mêmes sécantes : à gauche " +
              "les deux rapports valent $2$ et les droites sont parallèles, à droite l'un vaut $1{,}45$ " +
              "et l'écart angulaire atteint près de $18°$, ce qui se voit à l'œil nu et se mesure au " +
              "rapporteur.<br/><br/>" +
              "Faire ensuite prolonger les deux segments à la règle sur la figure de droite : ils se " +
              "coupent sur la feuille. Le calcul et le dessin disent alors la même chose, et c'est le " +
              "calcul qui a tranché le premier.<br/><br/>" +
              "Insister enfin sur la rédaction, qui est ce que le brevet évalue : une conclusion de " +
              "réciproque s'écrit « les rapports sont égaux, <strong>donc</strong> d'après la réciproque " +
              "du théorème de Thalès les droites sont parallèles ». Le mot « donc » et le nom du théorème " +
              "ne sont pas décoratifs, ils sont la démonstration.",
      /* Vérifié contre le tirage réel (2026-09-13) : les exercices 5 et 10 sont
         tous deux des tâches 'reciproque'. Le générateur tire une fois sur deux
         un couple FAUX obtenu en décalant ON d'une seule unité, si bien que
         l'écart est trop petit pour que l'oeil tranche : l'exercice prend donc
         l'erreur à revers. On renvoie au 5, le premier des deux dans le livre. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Se tromper de sens dans le produit en croix",
      eleve: "De $\\dfrac{9}{6} = \\dfrac{MN}{6}$, l'élève écrit $MN = \\dfrac{6 \\times 6}{9} = 4$ au lieu " +
             "de $MN = \\dfrac{9 \\times 6}{6} = 9$.",
      cause: "Le produit en croix est appliqué comme un geste mécanique — « je multiplie en diagonale et " +
             "je divise par ce qui reste » — sans que l'élève sache lequel des trois nombres est « ce qui " +
             "reste ». L'erreur n'est donc pas géométrique : c'est une difficulté d'équation qui se " +
             "manifeste dans un habillage de géométrie, et la traiter comme un problème de Thalès ne la " +
             "corrige jamais.",
      remede: "Sortir de la géométrie le temps de la remédiation. Faire résoudre trois équations nues du " +
              "type $\\dfrac{3}{4} = \\dfrac{x}{8}$, où l'inconnue est visiblement seule d'un côté, et " +
              "faire dire à voix haute « $x$ est multiplié par $8$, donc je multiplie l'autre membre par " +
              "$8$ ». Le produit en croix redevient alors une multiplication des deux membres, ce qu'il " +
              "est.<br/><br/>" +
              "Puis revenir à Thalès en exigeant l'étape intermédiaire écrite : " +
              "$MN = AB \\times \\dfrac{OM}{OA}$. Sous cette forme, l'élève voit qu'il multiplie la " +
              "longueur connue par le rapport, et le sens du calcul ne se joue plus sur une diagonale.<br/><br/>" +
              "Aucun exercice du chapitre ne travaille réellement cette erreur, et c'est normal : tous " +
              "posent une situation géométrique complète, alors que la difficulté est purement " +
              "calculatoire. La remédiation demande des équations nues, à prendre dans le chapitre sur " +
              "les équations et inéquations plutôt qu'ici.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi absent :
         pointer un exercice de Thalès pour une difficulté d'équation enverrait
         l'enseignant vers une remédiation qui n'en est pas une — l'élève
         referait la même erreur sur un autre habillage. Le remède dit
         explicitement où chercher l'entraînement utile, comme le font déjà six
         remédiations de la sixième et une de la quatrième. */
      exercice: null
    },
    {
      titre: "Calculer juste sans rien démontrer",
      eleve: "L'élève pose $\\dfrac{9}{6} = \\dfrac{MN}{6}$, trouve $MN = 9$ cm, et s'arrête là. Aucune " +
             "mention du théorème, aucune vérification des hypothèses, aucune phrase de conclusion.",
      cause: "Depuis la sixième, une réponse juste vaut tous les points : l'élève a appris que le " +
             "résultat EST le travail. Or le brevet évalue la démonstration, et une réponse exacte non " +
             "justifiée y perd la majorité des points. Ce n'est pas de la négligence, c'est un contrat " +
             "implicite qui a changé sans qu'on le dise.",
      remede: "Rendre le contrat explicite, et l'écrire au tableau une fois pour toutes : une " +
              "démonstration de Thalès tient en trois lignes, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. Les hypothèses</strong> : « les points $O$, $A$, $M$ sont alignés, les points " +
              "$O$, $B$, $N$ aussi, et $(AB) \\parallel (MN)$ ».<br/><br/>" +
              "<strong>2. Le théorème</strong> : « d'après le théorème de Thalès, " +
              "$\\dfrac{OM}{OA} = \\dfrac{ON}{OB} = \\dfrac{MN}{AB}$ ».<br/><br/>" +
              "<strong>3. La conclusion chiffrée</strong>, avec son unité.<br/><br/>" +
              "Un exercice de classe très efficace, et rapide : donner une démonstration complète, " +
              "correcte, et demander aux élèves de barrer tout ce qui pourrait être supprimé sans perdre " +
              "de points. Ils découvrent qu'on ne peut presque rien enlever, ce qu'aucun discours sur la " +
              "rigueur n'obtient aussi vite.<br/><br/>" +
              "Accepter les trois lignes dans un ordre personnel, mais jamais leur absence : on évalue " +
              "un raisonnement écrit, pas une mise en page.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est un
         chantier où deux câbles partent du même point d'ancrage — la tâche
         'segment', c'est-à-dire la démonstration directe la plus simple du
         chapitre. C'est le bon support pour exiger la rédaction complète :
         l'élève n'a aucune difficulté de calcul à gérer en même temps, et
         sa solution imprimée commence précisément par la phrase d'hypothèses
         (« les deux sécantes passent par O et (AB) est parallèle à (MN) »)
         que le remède demande d'obtenir. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     DEUX QUESTIONS ONT ÉTÉ RÉÉCRITES dans js/data/3e/3e-thales.js le
     2026-09-13, parce que déclarer une compétence ne suffit pas : la question
     doit réellement la mobiliser. Les cinq questions étaient auparavant cinq
     applications numériques, dont trois strictement identiques dans leur
     démarche.

     Q4 donnait $OA$, $OA'$ et $OB$ et demandait $OB'$ — la troisième
     application directe de l'évaluation. Elle pose maintenant une configuration
     en PAPILLON dans laquelle le rapport n'est pas lisible sur la sécante
     qu'on croit : l'élève doit chercher lequel des deux couples de longueurs
     lui donne $k$, ce que rien dans l'énoncé ne signale. C'est « chercher ».

     Q5 appliquait un grandissement donné, soit une multiplication. Elle demande
     maintenant de juger le raisonnement d'une élève et d'expliquer pourquoi il
     échoue : produire une explication, non un nombre. C'est « communiquer », et
     c'était la compétence la moins évaluée de l'ouvrage. L'erreur soumise au
     jugement est celle que cette fiche traite en premier, ce qui referme la
     boucle entre le diagnostic et l'évaluation.

     Q1 applique le théorème directement : « calculer ».
     Q2 est la situation des ombres : rien n'y nomme Thalès, et l'élève doit
     reconnaître que les rayons parallèles créent deux triangles semblables
     avant tout calcul. C'est « modéliser ».
     Q3 applique la réciproque, donc conclut d'une égalité de rapports à une
     propriété géométrique : « raisonner ». */
  competences: {
    evaluation: ["calculer", "modéliser", "raisonner", "chercher", "communiquer"]
  }
};
