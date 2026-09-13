/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-statistiques.prof.js
   Fiche professeur du chapitre « Statistiques descriptives » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE DE REPRISE EN APPARENCE SEULEMENT. La moyenne est connue depuis
   l'école primaire, la médiane depuis la quatrième ; l'enseignant est donc
   tenté d'aller vite. Mais ce que la seconde ajoute — la DISPERSION, et
   l'idée qu'un indicateur ne vaut que rapporté à elle — est entièrement
   neuf et conceptuellement plus difficile que tout le reste du chapitre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-statistiques"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 3 (ensembles de nombres) : l'écart-type est une racine carrée, donc
     presque toujours irrationnel. L'élève doit savoir qu'un tel nombre est
     légitime et qu'on l'arrondit pour le lire, sans croire à une erreur.

     Aucun autre prérequis réel. Le chapitre est volontairement peu dépendant
     du reste de l'année, ce qui permet de le placer où l'on veut — et c'est
     une information utile pour construire une progression. */
  prerequis: [3],

  /* Rang conseillé (2026-09-13) : rang 11.

     Ouvre le bloc « données » de fin d'année : statistiques (rang 11),
     probabilités (rang 12), échantillonnage (rang 13). L'ordre est contraint
     par le fond — l'échantillonnage a besoin des deux autres — mais le bloc
     lui-même peut être avancé sans dommage, ce chapitre ne dépendant
     presque de rien.

     Le LIVRE le range en chapitre 11 : les deux ordres coïncident
     exactement ici. */
  rangConseille: 11,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Statistiques et probabilités », sous-partie « Statistique descriptive ».
  attendus: [
    "Calculer la moyenne et la médiane d'une série statistique",
    "Choisir l'indicateur de tendance centrale adapté à une série",
    "Calculer la variance et l'écart-type d'une série",
    "Interpréter l'écart-type comme une mesure de dispersion",
    "Comparer deux séries de même moyenne à l'aide de leur dispersion"
  ],

  note: "Tout le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>Attention à un piège de préparation : ce chapitre a l'air d'une reprise, et " +
        "il ne l'est qu'à moitié.</strong> La moyenne est connue depuis l'école primaire et " +
        "la médiane depuis la quatrième ; on est donc tenté de les expédier. Mais ce que la " +
        "seconde ajoute — la <strong>dispersion</strong> — est entièrement nouveau, et " +
        "conceptuellement plus difficile que tout ce qui précède dans le chapitre. Le temps " +
        "gagné sur la moyenne doit y être reporté intégralement.<br/><br/>" +
        "<strong>L'idée à installer</strong> n'est pas la formule de la variance, qui " +
        "s'applique mécaniquement, mais le fait qu'<strong>une moyenne seule ne décrit " +
        "rien</strong>. Deux classes de moyenne $10$ peuvent être radicalement différentes : " +
        "l'une où tout le monde a entre $9$ et $11$, l'autre où la moitié a $2$ et l'autre " +
        "moitié $18$. Tant que l'élève n'a pas vu ces deux séries côte à côte, l'écart-type " +
        "reste une formule de plus.<br/><br/>" +
        "<strong>Sur la variance, un arbitrage à faire.</strong> Elle ne s'interprète pas " +
        "directement : elle s'exprime dans le carré de l'unité des données, ce qui ne veut " +
        "rien dire concrètement (des « centimètres carrés » pour des tailles d'élèves). Elle " +
        "n'est qu'une étape de calcul vers l'écart-type, qui lui est lisible sur les données. " +
        "On gagne à le dire franchement plutôt qu'à laisser croire que la variance a un sens " +
        "physique.<br/><br/>" +
        "<strong>Un point à surveiller.</strong> Le programme mentionne aussi les quartiles " +
        "et l'écart interquartile comme mesure de dispersion. Ils sont absents de ce " +
        "chapitre, qui traite exclusivement la variance et l'écart-type. Si l'on veut les " +
        "travailler — et c'est défendable, car ils résistent mieux aux valeurs extrêmes —, " +
        "il faut écrire les énoncés à la main.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Croire que la moyenne suffit à décrire une série",
      eleve: "Devant deux séries de même moyenne, l'élève affirme qu'elles « se valent » ou " +
             "qu'elles sont « pareilles », sans regarder la répartition des valeurs.",
      cause: "Toute la scolarité antérieure a utilisé la moyenne comme LE résumé d'une série : " +
             "moyenne de classe, moyenne trimestrielle, moyenne générale. Rien n'a jamais " +
             "suggéré qu'elle pût être insuffisante, et l'élève n'a aucune raison de s'en " +
             "méfier.<br/><br/>" +
             "Il ne commet donc pas une erreur de calcul : il applique fidèlement une " +
             "habitude que l'école lui a donnée, et que ce chapitre vient précisément " +
             "corriger.",
      remede: "Ouvrir sur deux séries construites pour trancher : $\\{9 ; 10 ; 11\\}$ et " +
              "$\\{0 ; 10 ; 20\\}$. Même moyenne, même effectif, et pourtant personne ne " +
              "soutiendra qu'elles décrivent la même chose. La question « qu'est-ce qui les " +
              "distingue, et comment le mesurer ? » est alors posée par la classe, et non " +
              "par l'enseignant.<br/><br/>" +
              "Rattacher ensuite à une décision concrète, ce qui donne un enjeu au calcul : " +
              "deux trains ont dix minutes de retard en moyenne, l'un toujours dix minutes, " +
              "l'autre jamais ou une heure. Lequel prendre pour un rendez-vous important ? La " +
              "moyenne ne répond pas ; la dispersion, oui.<br/><br/>" +
              "Exiger enfin, à chaque série étudiée dans l'année, les <strong>deux</strong> " +
              "indicateurs : une tendance centrale ET une dispersion. Un résumé qui n'en " +
              "comporte qu'un est incomplet, et la consigne installe le réflexe mieux qu'une " +
              "explication.",
      /* Renvoi RECALCULÉ le 2026-09-13 sur le tirage définitif du livre.
         Il pointait vers l'exercice 5, qui était le bon AVANT l'élargissement
         de la banque ; celui-ci a décalé les rangs et l'exercice 5 est devenu
         une question d'unité de l'écart-type, hors sujet. C'est précisément le
         défaut que le cahier des charges nomme « un renvoi faux est pire qu'un
         renvoi absent », et la garde de prof-2nde.test.js l'a attrapé.

         L'exercice 8 du tirage donne deux séries de MÊME MOYENNE et demande
         laquelle est la plus homogène : c'est exactement la question que
         l'élève ne se pose pas. Son corrigé commence par constater l'égalité
         des moyennes, ce qui rend le critère de décision visible. Les
         exercices 13 et 24 sont du même type, si l'enseignant veut varier. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Prendre la valeur du milieu de la liste pour la médiane",
      eleve: "Pour la série $\\{10 ; 35 ; 11 ; 12 ; 14\\}$, l'élève annonce une médiane de " +
             "$11$, en prenant la troisième valeur telle qu'elle est écrite, sans trier.",
      cause: "La définition retenue est « la valeur du milieu », et l'élève l'applique à la " +
             "liste telle qu'elle lui est présentée. L'étape de tri n'est pas perçue comme " +
             "faisant partie de la méthode : elle ressemble à une mise en forme " +
             "facultative.<br/><br/>" +
             "L'erreur passe d'autant plus inaperçue que le résultat obtenu est une valeur " +
             "de la série, donc toujours plausible.",
      remede: "Reformuler la définition de façon que le tri y soit inclus et non ajouté : la " +
              "médiane est la valeur qui <strong>partage la série en deux moitiés de même " +
              "effectif</strong>. Cette formulation rend le tri nécessaire par construction, " +
              "puisqu'on ne peut pas partager une liste en désordre.<br/><br/>" +
              "Faire écrire la série triée sur une ligne séparée, systématiquement, même " +
              "quand elle semble déjà ordonnée. La ligne coûte trois secondes et supprime " +
              "l'erreur.<br/><br/>" +
              "Faire ensuite vérifier le partage en comptant de part et d'autre. Un élève qui " +
              "trouve deux valeurs d'un côté et trois de l'autre sait qu'il s'est " +
              "trompé.<br/><br/>" +
              "Profiter enfin de ces séries pour montrer l'intérêt propre de la médiane : sur " +
              "$\\{10 ; 11 ; 12 ; 14 ; 35\\}$, la moyenne est tirée vers le haut par le $35$ " +
              "alors que la médiane reste à $12$. C'est l'argument qui justifie qu'on dispose " +
              "de deux indicateurs plutôt qu'un.",
      /* Renvoi RECALCULÉ le 2026-09-13 sur le tirage définitif : il visait
         l'exercice 4, devenu une recherche de valeur manquante après
         l'élargissement de la banque.

         L'exercice 1 est une série de salaires contenant une valeur extrême
         ($35$ contre quatre valeurs entre $10$ et $14$), et son corrigé
         s'ouvre littéralement sur « on range les valeurs dans l'ordre
         croissant » avant de conclure sur l'écart entre moyenne et médiane.
         Le contexte des salaires est aussi celui où cet écart a un sens
         social immédiat. Les exercices 16 et 22 sont du même type. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre la variance et l'écart-type, et se tromper d'unité",
      eleve: "Pour une série de tailles en centimètres de variance $16$, l'élève annonce un " +
             "écart-type de $16$ cm, ou bien une variance de $4$ cm.",
      cause: "Les deux indicateurs mesurent la même chose et ne diffèrent que par une racine " +
             "carrée, ce qui les rend interchangeables dans l'esprit de l'élève. Rien dans " +
             "leurs noms ne dit lequel vient en premier.<br/><br/>" +
             "La difficulté de fond est l'unité, et elle est rarement traitée : la variance " +
             "s'exprime dans le CARRÉ de l'unité des données — des centimètres carrés pour " +
             "des tailles — ce qui n'a aucun sens concret. C'est précisément pour cela qu'on " +
             "en prend la racine.",
      remede: "Donner à chaque indicateur son rôle, plutôt que de les présenter comme deux " +
              "résultats de même rang : la variance est une <strong>étape de calcul</strong>, " +
              "l'écart-type est le <strong>résultat qu'on lit</strong>. L'ordre devient alors " +
              "mémorisable parce qu'il est justifié.<br/><br/>" +
              "Faire écrire l'unité à chaque ligne du calcul. L'élève constate que la variance " +
              "sort en cm², ce qu'on ne sait pas interpréter pour des tailles, et que la " +
              "racine ramène en cm, ce qui se lit directement sur les données.<br/><br/>" +
              "Installer un contrôle de vraisemblance efficace et simple : l'écart-type est " +
              "du même ordre de grandeur que les écarts typiques à la moyenne. Pour des " +
              "tailles d'élèves comprises entre $150$ et $180$ cm, un écart-type de $4$ cm " +
              "est plausible, un écart-type de $16$ cm beaucoup moins. L'élève peut trancher " +
              "seul.",
      /* Renvoi CONFIRMÉ sur le tirage définitif le 2026-09-13. Le numéro était
         bon, mais la justification décrivait une série de TEMPÉRATURES : c'est
         une série de DURÉES de trajet. La rédaction datait d'un tirage
         antérieur à l'élargissement de la banque ; seule la description avait
         glissé, pas l'indice.

         L'exercice 2 enchaîne bien les trois étapes dans l'ordre — moyenne,
         puis variance, puis écart-type — et son corrigé fait apparaître la
         racine carrée comme dernière opération, en minutes. Les exercices 14,
         20 et 26 sont du même type sur d'autres grandeurs. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Additionner les écarts au lieu de leurs carrés",
      eleve: "Pour mesurer la dispersion, l'élève calcule la moyenne des écarts " +
             "$x_i - \\bar{x}$, trouve $0$, et en conclut que la série n'est pas dispersée.",
      cause: "C'est l'idée naturelle, et c'est même la bonne intuition : mesurer la dispersion " +
             "par l'écart moyen à la moyenne. L'élève ne se trompe pas de direction, il " +
             "tombe sur un obstacle réel.<br/><br/>" +
             "La somme des écarts est en effet TOUJOURS nulle, par construction de la " +
             "moyenne : les écarts positifs compensent exactement les négatifs. Le résultat " +
             "$0$ n'est donc pas une erreur de calcul, c'est une propriété — et rien " +
             "n'indique à l'élève qu'elle rend sa méthode inutilisable.",
      remede: "Commencer par valider la démarche, ce qui est à la fois juste et encourageant : " +
              "l'idée de regarder les écarts à la moyenne est exactement la bonne, et c'est " +
              "celle que les mathématiciens ont suivie.<br/><br/>" +
              "Faire ensuite constater l'obstacle sur un exemple, en faisant calculer les " +
              "écarts un par un : les positifs et les négatifs s'annulent, et l'on obtient " +
              "$0$ pour n'importe quelle série, dispersée ou non. Un indicateur qui vaut " +
              "toujours la même chose ne mesure rien.<br/><br/>" +
              "Poser alors la question de la solution : comment empêcher les signes de " +
              "s'annuler ? La classe propose en général la valeur absolue, qui est une " +
              "réponse légitime — on peut dire qu'elle existe et qu'elle est utilisée. Le " +
              "carré est retenu parce qu'il se manipule beaucoup mieux, et parce qu'il pèse " +
              "davantage les grands écarts, ce qui est souvent souhaitable.<br/><br/>" +
              "La racine finale apparaît alors pour ce qu'elle est : le moyen de revenir à " +
              "l'unité de départ après être passé par des carrés. Toute la construction se " +
              "tient, et aucune étape n'est arbitraire.",
      /* Renvoi RECALCULÉ le 2026-09-13 sur le tirage définitif : il visait
         l'exercice 3, devenu un calcul de moyenne simple après
         l'élargissement de la banque.

         L'exercice 6 ajoute une valeur très éloignée ($70$) à une série
         resserrée et demande de combien la moyenne se déplace, ce qui fait
         travailler le rapport entre les écarts et l'indicateur. Aucun
         exercice de la banque ne fait calculer la somme des écarts SIMPLES
         pour en constater la nullité — c'est une manipulation à mener au
         tableau, et le remède l'indique plutôt que de renvoyer à un exercice
         approximatif. Les exercices 10 et 18 sont du même type. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 RÉÉCRITE le 2026-09-13 : l'ancienne demandait la moyenne de cinq
        nombres, l'application la plus directe du devoir. La nouvelle donne
        la moyenne visée et efface une note, ce qui oblige à remonter de
        l'indicateur aux données au lieu de descendre. « chercher ». La
        réponse est $12$, et la série complète a bien pour moyenne $8$.
     Q2 variance d'une série dont la moyenne est donnée : application de la
        formule, en plusieurs étapes. « calculer ».
     Q3 RÉÉCRITE le 2026-09-13 par la session précédente : ce que l'écart-type
        représente et dans quelle unité il s'exprime. Le calcul ($\sqrt{16}$)
        est trivial ; ce qui est en jeu est de relier un indicateur à la
        grandeur qu'il décrit. « représenter ».
     Q4 comparer deux séries de même moyenne par leur écart-type : l'élève
        doit conclure d'une comparaison de nombres à une propriété des
        séries, en écartant les distracteurs. « raisonner ».
     Q5 pourquoi les carrés plutôt que les écarts simples : la réponse
        correcte invoque la nullité de la somme des écarts. L'élève doit
        reconnaître et formuler une justification mathématique.
        « communiquer ».

     « Chercher » et « modéliser » ne sont PAS déclarées : aucune des cinq
     questions ne demande d'explorer une piste ni de construire un modèle à
     partir d'une situation. Elles sont portées par d'autres chapitres du
     niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["chercher", "calculer", "représenter", "raisonner", "communiquer"]
  }
};
