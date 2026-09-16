/* =========================================================
   Spark Learning – js/data/prof/physique-4e/physique-4e-lumiere.prof.js
   Fiche professeur du chapitre « La lumière : propagation et couleur »
   (quatrième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-4e-lois-circuits.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-4e-lumiere"] = {

  /* Aucun prérequis de quatrième en physique-chimie : le chapitre est
     autonome et n'utilise rien des cinq chapitres qui le précèdent dans le
     livre — ni la chimie, ni la vitesse (malgré l'apparence : la durée de
     propagation se calcule par $t = d/c$, qui est la même relation que
     $v = d/t$, mais le chapitre la réintroduit complètement et ne suppose pas
     le chapitre 3 traité).

     Le prérequis réel est mathématique et il est lourd : les exercices
     d'ombre portée demandent une PROPORTIONNALITÉ entre deux triangles
     semblables, soit le théorème de Thalès, qui est au programme de
     quatrième en mathématiques mais pas nécessairement déjà traité. La note
     le signale, parce que c'est le seul point du chapitre qui peut le rendre
     inabordable au mauvais moment de l'année. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 6, celui du livre — le chapitre ferme
     l'année. Deux raisons de ne pas l'avancer.

     La première est mathématique : les exercices d'ombre portée demandent une
     proportionnalité entre triangles semblables, et le chapitre gagne
     beaucoup à être traité APRÈS le Thalès de quatrième en mathématiques. Le
     placer en début d'année transforme un exercice d'optique en obstacle de
     géométrie.

     La seconde est de programme : l'optique est le seul thème du niveau qui
     ne conditionne aucun autre chapitre de quatrième, ni de troisième. Il est
     donc le meilleur candidat pour la fin d'année — et, s'il faut écourter un
     chapitre en juin, le seul dont l'écourtement ne coûte rien à la suite.
     C'est ce que la colonne « Prépare » de la progression montrera par un
     tiret. */
  rangConseille: 6,

  // Attendus de fin d'année, cycle 4 (2020), thème « Des signaux pour
  // observer et communiquer ». Aux mots du programme.
  attendus: [
    "Caractériser la lumière par sa propagation rectiligne et sa vitesse",
    "Exploiter la propagation rectiligne de la lumière pour construire des ombres et expliquer des phénomènes",
    "Interpréter la couleur perçue d'un objet à partir de la lumière qu'il diffuse et de celle qui l'éclaire"
  ],

  note: "Propagation rectiligne, vitesse de la lumière, décomposition, synthèse additive et " +
        "couleur des objets sont au programme du cycle 4.<br/><br/>" +
        "<strong>Un prérequis mathématique à vérifier avant de commencer.</strong> La moitié des " +
        "exercices tirés portent sur une <strong>ombre portée</strong> et demandent d'écrire une " +
        "proportionnalité entre deux triangles semblables : " +
        "$\\dfrac{H}{d+x} = \\dfrac{h}{x}$, puis d'en isoler $x$. C'est du Thalès, et c'est du " +
        "calcul littéral avec une inconnue au dénominateur — objectivement plus difficile que " +
        "toute la physique du chapitre. Si le Thalès de quatrième n'a pas encore été traité en " +
        "mathématiques, ces exercices sont hors de portée et il vaut mieux décaler le chapitre " +
        "que les donner.<br/><br/>" +
        "<strong>Le chapitre est coupé en deux et les exercices ne couvrent qu'une moitié.</strong> " +
        "Le cours traite la propagation ET la couleur ; les seize exercices tirés ne traitent que " +
        "la propagation (ombre portée, durée de propagation). Toute la partie " +
        "<strong>couleur</strong> — diffusion, absorption, objet éclairé en lumière colorée — " +
        "n'est entraînée que par le cours, le quiz et l'évaluation (questions 2, 4 et 5). C'est " +
        "elle qui porte l'erreur conceptuelle la plus tenace du chapitre, et elle demande donc " +
        "des exercices hors du livre.<br/><br/>" +
        "Deux tirages à surveiller. Le générateur peut produire un poteau de $7{,}3$ m sous un " +
        "lampadaire de $8$ m : l'ombre mesure alors $41{,}7$ m, ce qui est mathématiquement " +
        "exact et physiquement peu parlant. Et les durées de propagation vers Jupiter " +
        "($2\\,593$ s, soit $43$ min) gagnent à être converties en minutes à l'oral, sans quoi " +
        "le nombre ne dit rien.",

  erreurs: [
    {
      titre: "Croire qu'un objet coloré produit sa couleur",
      eleve: "« Un pull rouge est rouge, donc il reste rouge sous une lumière verte. » L'élève " +
             "traite la couleur comme une propriété de l'objet, indépendante de l'éclairage.",
      cause: "C'est l'expérience quotidienne qui l'installe, et elle est presque toujours " +
             "confirmée : nous vivons sous lumière blanche, où chaque objet diffuse effectivement " +
             "la couleur qu'on lui attribue. Rien, dans une vie d'élève, ne contredit l'idée que " +
             "la couleur appartient à l'objet. L'erreur n'est donc pas une négligence, c'est une " +
             "théorie cohérente qu'il faut mettre en échec.",
      remede: "Ne pas commencer par la règle mais par l'<strong>expérience</strong>, sans " +
              "annoncer le résultat : éclairer des objets colorés avec une lampe rouge, puis " +
              "verte, puis bleue, dans une salle sombre. Laisser les élèves prédire, puis " +
              "constater. Un pull rouge qui devient noir sous lumière verte est " +
              "spectaculaire, et aucune explication préalable ne produit le même effet.<br/><br/>" +
              "Reformuler ensuite la règle dans le bon sens : un objet non lumineux ne " +
              "<strong>fabrique</strong> rien, il <strong>trie</strong>. Il renvoie une partie de " +
              "ce qu'il reçoit et absorbe le reste. D'où la conséquence décisive, à faire énoncer " +
              "par l'élève : s'il ne reçoit pas de rouge, il ne peut pas en renvoyer — on ne peut " +
              "pas trier ce qu'on n'a pas reçu.<br/><br/>" +
              "Prolonger par un cas que les élèves ont déjà vécu, ce qui ancre la notion hors du " +
              "laboratoire : un vêtement acheté sous l'éclairage d'un magasin et qui « n'a plus " +
              "la même couleur » dehors. Ce n'est pas le vêtement qui a changé, c'est la lumière " +
              "qui l'éclaire.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les seize exercices tirés portent TOUS sur la propagation
         (deux moules — ombre portée et durée de propagation) et aucun ne parle
         de couleur. Cette erreur, qui est la plus importante du chapitre sur
         le plan conceptuel, n'est donc travaillée par aucun exercice du livre.
         Le quiz et l'évaluation la traitent, mais une remédiation ne renvoie
         jamais vers l'évaluation notée, et le quiz sert déjà d'appui à
         l'erreur 2. La remédiation est expérimentale, comme le dit le remède,
         et les exercices écrits sur la couleur sont à prévoir hors du livre. */
      exercice: null
    },
    {
      titre: "Croire que le prisme fabrique les couleurs",
      eleve: "« Le prisme colore la lumière » ou « le prisme ajoute des couleurs à la lumière " +
             "blanche », là où il ne fait que la séparer.",
      cause: "L'observation est saisissante : du blanc entre, des couleurs sortent. En l'absence " +
             "d'un modèle où le blanc <strong>contient déjà</strong> toutes les couleurs, la seule " +
             "explication disponible est que le prisme les produit. L'élève applique le schéma " +
             "« l'appareil fait quelque chose », qui est correct pour une lampe et faux ici.",
      remede: "Faire le trajet inverse, et c'est l'argument qui tranche : un <strong>second " +
              "prisme</strong> retourné, ou un disque de Newton mis en rotation, " +
              "<strong>recompose</strong> du blanc à partir des couleurs séparées. Si le prisme " +
              "fabriquait les couleurs, rien ne pourrait les faire disparaître. La " +
              "réversibilité prouve la séparation.<br/><br/>" +
              "Renommer l'opération, parce que le mot porte l'erreur : le prisme ne colore pas, il " +
              "<strong>décompose</strong> — comme un tri de billes mélangées, qui ne crée aucune " +
              "bille. Le mot « décomposer » est celui du programme et il dit exactement le bon " +
              "geste.<br/><br/>" +
              "Utiliser enfin l'arc-en-ciel, que les élèves connaissent : les gouttes d'eau ne " +
              "sont pas colorées et ne fabriquent rien, elles décomposent la lumière du Soleil. " +
              "Le schéma du cours montre la même chose avec le rouge le moins dévié et le violet " +
              "le plus dévié, ce qui donne au passage la raison de la séparation.",
      /* Renvoi vers le QUIZ 1, qui pose exactement cette question (« un prisme
         décompose la lumière blanche : que peut-on en conclure ? ») et dont le
         premier distracteur est « le prisme fabrique lui-même les couleurs »,
         mot pour mot l'erreur. Aucun exercice tiré ne traite la décomposition,
         le quiz est donc le seul appui du livre — et c'est un appui réel, pas
         un pis-aller. */
      exercice: { type: "quiz", n: 1 }
    },
    {
      titre: "Confondre la hauteur du poteau et la longueur de l'ombre",
      eleve: "Dans le triangle de l'ombre portée, l'élève écrit " +
             "$\\dfrac{H}{d} = \\dfrac{h}{x}$ : il oublie que la grande base vaut $d + x$ et non " +
             "$d$, et trouve une ombre systématiquement trop courte.",
      cause: "Erreur de <strong>lecture de figure</strong> plutôt que de calcul. Les deux " +
             "triangles semblables partagent leur sommet à la source et l'élève apparie les " +
             "longueurs qui « se ressemblent » sur le dessin, sans identifier lesquelles sont " +
             "réellement homologues. La grande base commence au pied du lampadaire et finit au " +
             "<strong>bout de l'ombre</strong> : elle contient donc $d$ ET $x$, ce qui ne se voit " +
             "que si la figure est correctement lue.",
      remede: "Faire tracer la figure, toujours, et y marquer les deux triangles " +
              "<strong>séparément</strong> avant d'écrire quoi que ce soit : le petit (poteau et " +
              "son ombre) et le grand (lampadaire et la base entière). Nommer les quatre " +
              "longueurs sur le dessin, puis seulement écrire la proportion. L'ordre compte : " +
              "une proportion écrite avant la figure est écrite au hasard.<br/><br/>" +
              "Faire vérifier que chaque rapport compare bien une <strong>hauteur</strong> à sa " +
              "<strong>base</strong> dans le <strong>même</strong> triangle. Le contrôle le plus " +
              "rapide est de constater que $d + x > x$ : la grande base est forcément plus longue " +
              "que la petite, donc écrire $d$ au lieu de $d+x$ rapetisse le grand triangle " +
              "au-dessous du petit, ce qui est impossible.<br/><br/>" +
              "Les nouveaux schémas d'exercice tracent la configuration complète, avec le rayon " +
              "qui rase le sommet du poteau, la cote $d$ et la cote $x$ sur deux niveaux " +
              "distincts : l'élève n'a plus à reconstruire la scène, il a à lire quelles longueurs " +
              "vont ensemble.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 5) : l'exercice 1 est « une lanterne de
         chantier, H = 3 m, éclaire un poteau vertical de h = 2,0 m situé à
         d = 4 m » — réponse x = 8 m. Le tirage est le plus favorable du
         chapitre pour cette erreur, parce que l'ombre (8 m) est DEUX FOIS la
         distance au pied (4 m) : un élève qui écrit H/d = h/x trouve 2,67 m,
         soit une ombre plus courte que la distance au poteau, et l'écart avec
         la figure dessinée saute aux yeux. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Ne pas convertir une durée de propagation en unité lisible",
      eleve: "L'élève trouve $2\\,593$ s pour la lumière de Jupiter et s'arrête là, sans percevoir " +
             "que cela fait plus de quarante minutes. Ou annonce $500$ s pour le Soleil sans " +
             "réagir à ce que ce nombre signifie.",
      cause: "Échec de <strong>valider</strong>, dans sa forme la plus discrète : le calcul est " +
             "juste, l'unité est juste, et pourtant le résultat ne dit rien à l'élève. Les " +
             "secondes cessent d'être parlantes au-delà de la centaine, et rien dans l'énoncé ne " +
             "demande de traduire — l'élève n'a donc aucune raison de le faire.",
      remede: "Exiger une <strong>traduction systématique</strong> en unité de la vie courante dès " +
              "qu'une durée dépasse la minute : $500$ s deviennent « un peu plus de huit " +
              "minutes », $2\\,593$ s deviennent « environ quarante-trois minutes ». La " +
              "traduction n'est pas une décoration : c'est elle qui rend le résultat " +
              "vérifiable.<br/><br/>" +
              "Faire ensuite dire ce que le nombre <strong>signifie</strong>, en une phrase : " +
              "« si le Soleil s'éteignait maintenant, nous le verrions huit minutes plus tard ». " +
              "C'est ce qui donne son intérêt au chapitre, et c'est aussi ce qui permet de " +
              "repérer une erreur de facteur mille — un élève qui annonce huit " +
              "<strong>heures</strong> n'a pas seulement un mauvais nombre, il a une phrase " +
              "fausse.<br/><br/>" +
              "Installer enfin deux repères de comparaison que la classe garde : la Lune est à " +
              "un peu plus d'une seconde-lumière, le Soleil à huit minutes. Tout résultat du " +
              "chapitre se juge par rapport à ces deux-là.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 2 est la
         distance Terre-Soleil (150 000 000 km), réponse 500 s. C'est le cas
         canonique du chapitre : le nombre est rond, la traduction (8 min 20 s)
         est immédiate, et le fait physique — nous voyons le Soleil tel qu'il
         était il y a huit minutes — est le plus marquant de l'année. C'est
         donc l'exercice où installer le réflexe, avant que le tirage de
         Jupiter (2593 s) ne le rende indispensable. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — ombre portée d'un poteau sous un lampadaire, calculer $x$. Il faut
          construire la proportionnalité entre les deux triangles, ce qui est
          l'erreur 3 de cette fiche : « analyser ».
     Q2 — la lumière blanche est … ? Restitution d'une propriété du cours :
          « s'approprier ».
     Q3 — durée de propagation Terre-Lune. Application directe de $t = d/c$
          avec les données fournies : « s'approprier ».
     Q4 — un pull vert éclairé en lumière bleue pure : quelle couleur ? Il
          faut raisonner sur ce que l'objet reçoit et peut diffuser, sur un
          cas non vu en cours (le cours traite vert sous rouge) : « analyser ».
     Q5 — quelle couleur est la moins déviée par un prisme ? Restitution d'un
          fait du schéma de cours : « s'approprier ».

     Ni « réaliser » ni « valider » ne sont mobilisés. Pour « réaliser », le
     chapitre a pourtant de quoi faire — l'expérience des lumières colorées
     que demande le remède de l'erreur 1 est un vrai protocole — mais elle ne
     s'évalue pas sur copie. Pour « valider », c'est un manque, et l'erreur 4
     de cette fiche montre laquelle : aucune question ne demande de juger la
     vraisemblance d'une durée de propagation. Un enseignant qui veut la
     couvrir peut demander de traduire le résultat de Q3 en langage courant et
     de dire ce qu'il signifie. */
  competences: {
    evaluation: ["analyser", "s'approprier", "s'approprier", "analyser", "s'approprier"]
  }
};
