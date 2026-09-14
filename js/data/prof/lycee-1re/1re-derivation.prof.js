/* =========================================================
   Spark Learning – js/data/prof/lycee-1re/1re-derivation.prof.js
   Fiche professeur du chapitre « La Dérivation » (première), pour l'édition
   du professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni
   dans index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit,
   au moment de compiler le livre.

   CHAPITRE PILOTE DE LA PREMIÈRE (2026-09-14). C'est sur lui qu'ont été
   calées les conventions reprises dans les neuf autres fiches du niveau, et
   c'est lui qui a servi à vérifier la chaîne complète jusqu'au PDF.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-1re`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/1re/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["1re-derivation"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU (le pipeline les résout
     par niveau depuis le correctif 6eb58c7 ; le numéro imprimé reste celui du
     livre).

     ATTENTION, PIÈGE VÉRIFIÉ LE 2026-09-14 : la numérotation des chapitres du
     livre vient de l'ordre de `DATA_FILES` dans js/loader.js, et NON de
     l'ordre alphabétique des fichiers. Pour ce niveau, elle est :
     1 dérivation, 2 suites, 3 produit scalaire, 4 second degré,
     5 polynômes et signe, 6 trigonométrie, 7 géométrie repérée,
     8 probabilités conditionnelles, 9 variables aléatoires,
     10 information chiffrée.
     Une première version de cette fiche déclarait [4, 7] en croyant viser le
     second degré et les polynômes ; elle visait en réalité le second degré et
     la géométrie repérée. Le renvoi aurait été imprimé faux, et rien ne
     l'aurait signalé.

     ch. 4 (second degré, rang conseillé 3) : toutes les dérivées du chapitre
     sont des polynômes, et l'étude du signe de $f'$ — qui est l'usage
     principal de la dérivée en première — revient systématiquement à étudier
     le signe d'un trinôme. Sans le discriminant, l'élève sait dériver mais ne
     sait rien en faire.

     ch. 5 (polynômes et signe, rang conseillé 4) : le tableau de signes est
     l'outil dans lequel le résultat de la dérivation se déverse. C'est le
     prérequis le plus immédiatement mobilisé du chapitre.

     La géométrie repérée n'est PAS retenue, bien qu'un coefficient directeur y
     apparaisse : le chapitre n'utilise aucune équation de droite sous forme
     générale, seulement la forme $y = f'(a)(x-a) + f(a)$, qui se construit
     ici. Le déclarer serait un prérequis décoratif. */
  prerequis: [4, 5],

  /* Rang conseillé (2026-09-14) : rang 6.

     Le LIVRE ouvre sur la dérivation, qui est son chapitre 1 — un rangement
     par importance, pas un conseil d'enseignement. Commencer l'année de
     première par la dérivation reviendrait à demander le signe d'un trinôme à
     des élèves qui n'ont pas encore vu le discriminant.

     La progression conseillée place donc la dérivation au rang 6, après le
     second degré (rang 4) et l'étude du signe des polynômes (rang 5), qui lui
     fournissent tous deux son outil de travail. Elle reste dans la première
     moitié de l'année : c'est le pivot du programme, et tout ce qui suit — et
     toute la terminale — s'appuie dessus. */
  rangConseille: 6,

  // Attendus de fin d'année de première générale, spécialité mathématiques
  // (programme de 2019), partie « Analyse », sous-partie « Dérivation ».
  attendus: [
    "Interpréter le nombre dérivé comme coefficient directeur de la tangente à la courbe",
    "Déterminer le nombre dérivé en un point comme limite du taux de variation",
    "Calculer la dérivée d'un polynôme, d'un produit et de l'exponentielle composée",
    "Déterminer une équation de la tangente à une courbe en un point donné",
    "Étudier les variations d'une fonction à partir du signe de sa dérivée",
    "Déterminer les extremums d'une fonction sur un intervalle"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Le nombre dérivé, la tangente, les dérivées usuelles, la dérivée d'un produit et le lien " +
        "entre signe de $f'$ et variations de $f$ sont tous au programme de première.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la dérivée du <strong>logarithme</strong>, $(\\ln x)' = \\dfrac{1}{x}$, qui figure dans le " +
        "formulaire du cours. La fonction logarithme n'est pas au programme de première : elle est " +
        "introduite en terminale. La formule est donnée ici comme une ouverture et n'est mobilisée par " +
        "aucun exercice ni aucune question d'évaluation — on gagnera à la signaler comme telle plutôt " +
        "qu'à la faire apprendre.<br/><br/>" +
        "Ensuite la <strong>dérivée seconde</strong>, qu'une des sept tâches de la banque demande de " +
        "calculer sous le nom d'accélération. Dériver deux fois un polynôme ne pose aucune difficulté " +
        "technique et le contexte cinématique la rend naturelle ; en revanche, la notion de " +
        "<strong>convexité</strong> qui lui donne son sens mathématique relève de la terminale. " +
        "L'exercice reste faisable, il ne faut simplement pas en attendre une interprétation.<br/><br/>" +
        "Enfin la <strong>composée avec l'exponentielle</strong>, $(e^u)' = u'e^u$ : elle est bien au " +
        "programme de première, mais seulement après que la fonction exponentielle a été introduite. " +
        "Si ce chapitre est traité tôt dans l'année, les deux tâches qui la mobilisent sont à réserver " +
        "pour une reprise ultérieure.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre le tirage réel de la graine du livre
       (2026-09-14), APRÈS l'élargissement de la banque : un renvoi écrit
       contre l'ancien tirage aurait été décalé par les nouveaux rangs. */
  erreurs: [
    {
      titre: "Confondre le nombre dérivé et l'image",
      eleve: "Pour $f(x) = x^2$ en $x_0 = 3$, l'élève annonce que « la pente de la tangente vaut $9$ », " +
             "en donnant $f(3)$ là où la question porte sur $f'(3) = 6$.",
      cause: "Les deux nombres se lisent au même endroit de la courbe et s'écrivent presque pareil, " +
             "à une apostrophe près. Surtout, l'élève n'a jamais eu besoin de distinguer deux " +
             "informations attachées à un même point : jusqu'ici, un point de la courbe portait une " +
             "seule donnée, son ordonnée. Il ne lui manque pas une règle, il lui manque l'idée qu'un " +
             "point porte désormais <strong>deux</strong> renseignements distincts — où il est, et " +
             "dans quel sens la courbe le traverse.",
      remede: "Ne pas commencer par corriger la notation : l'apostrophe est le symptôme, pas la " +
              "cause.<br/><br/>" +
              "Partir du schéma « Le nombre dérivé se lit comme une pente », qui montre trois " +
              "tangentes sur une <strong>même</strong> courbe. Faire constater que les trois points " +
              "de tangence ont des ordonnées différentes ET des pentes différentes, puis poser la " +
              "question qui tranche : au point d'abscisse $3$, la courbe est à la hauteur " +
              "$4{,}5$ et pourtant sa tangente est horizontale, donc de pente $0$. Deux nombres " +
              "différents pour un même point — l'un ne peut donc pas remplacer l'autre.<br/><br/>" +
              "Exiger ensuite, pendant deux séances, que toute réponse soit lue à voix haute en " +
              "toutes lettres : « $f$ prime de trois vaut six » plutôt que « $f$ prime trois égale " +
              "six ». La verbalisation sépare ce que l'écriture confond.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 6 demande
         explicitement de calculer $T'(t)$ PUIS d'en déduire la pente en
         $t_0 = 3$. L'élève qui répond par une image obtient un nombre sans
         rapport avec la pente demandée, et les deux étapes de l'énoncé le
         forcent à écrire la fonction dérivée avant de l'évaluer. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Oublier le facteur $u'$ dans la composée",
      eleve: "Pour $f(x) = 3e^{5x}$, l'élève écrit $f'(x) = 3e^{5x}$, en gardant la fonction " +
             "inchangée au lieu de $15e^{5x}$.",
      cause: "L'exponentielle a été installée comme « la fonction qui est sa propre dérivée », et " +
             "cette phrase, juste pour $e^x$, est appliquée telle quelle à $e^{5x}$. L'élève ne " +
             "commet pas une erreur de calcul : il applique correctement une règle dont il n'a pas " +
             "vu la condition. Tant que tous les exemples portent sur $e^x$, rien ne peut le " +
             "détromper.",
      remede: "Faire vérifier la règle par un cas où elle donne visiblement faux, plutôt que de la " +
              "réénoncer. Demander la dérivée de $e^{2x}$ par deux chemins : d'une part par la " +
              "formule de la composée, d'autre part en écrivant $e^{2x} = e^x \\times e^x$ et en " +
              "appliquant la dérivée d'un produit — que l'élève connaît déjà. Le second chemin donne " +
              "$e^x e^x + e^x e^x = 2e^{2x}$, et le facteur $2$ apparaît sans qu'on l'ait " +
              "annoncé.<br/><br/>" +
              "Poser ensuite la règle sous une forme qui rende la condition visible : « la dérivée " +
              "de $e$ puissance <strong>quelque chose</strong>, c'est la dérivée de ce quelque chose " +
              "multipliée par $e$ puissance ce même quelque chose ». Le mot « quelque chose », " +
              "répété trois fois, est ce qui empêche de revenir à $e^x$ par défaut.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 porte sur
         $f(x) = 2e^{2x}$ et demande explicitement le COEFFICIENT $A$ de
         $f'(x) = A e^{2x}$. L'élève qui oublie le facteur répond $2$ au lieu
         de $4$ : la question isole exactement le nombre qui manque, au lieu de
         le noyer dans une expression. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Prendre la pente moyenne pour la pente instantanée",
      eleve: "Interrogé sur la vitesse à $t = 2$ s d'un mobile parti depuis $4$ s, l'élève divise la " +
             "distance totale par $4$ et annonce ce quotient comme la vitesse à cet instant.",
      cause: "C'est la seule vitesse que l'élève ait jamais calculée, et elle a toujours donné la " +
             "bonne réponse jusqu'ici, parce que les exercices d'avant portaient sur des mouvements " +
             "uniformes où les deux nombres coïncident. Rien dans son expérience ne distingue encore " +
             "une pente moyenne d'une pente en un point : il lui manque un contre-exemple, pas une " +
             "définition.",
      remede: "Prendre un mouvement où les deux nombres s'écartent franchement, et les faire " +
              "calculer tous les deux. Pour $f(t) = t^2$, la vitesse moyenne entre $0$ et $4$ vaut " +
              "$4$, alors que la vitesse à l'instant $4$ vaut $8$ : le double. L'élève voit deux " +
              "réponses coexister, et c'est cette coexistence qui fait la notion — tant qu'il croit " +
              "que l'une des deux est « la » bonne, aucune définition ne prendra.<br/><br/>" +
              "Reprendre ensuite le schéma « La sécante bascule, et devient tangente » : les trois " +
              "pentes $3{,}5$, $2{,}8$ et $2{,}3$ y sont toutes des pentes moyennes, parfaitement " +
              "calculables, et aucune n'est la réponse. C'est leur <strong>limite</strong>, $2$, qui " +
              "l'est.<br/><br/>" +
              "Le « Découvrir » du chapitre est construit sur cette même impasse — mesurer une " +
              "vitesse sur une durée nulle — et peut servir d'entrée si l'erreur apparaît tôt.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 demande le
         taux de variation de $f(x) = 2x^2$ entre $2$ et $4$, dont le corrigé
         se termine en nommant explicitement l'écart avec $f'(2)$. C'est la
         tâche « taux », ajoutée le 2026-09-14 : elle n'existait pas dans la
         banque d'origine, qui ne tirait qu'une seule tâche. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Écrire la tangente sans le point de tangence",
      eleve: "Pour la tangente en $x_0 = 2$ à une courbe où $f'(2) = 11$, l'élève écrit " +
             "« $y = 11x$ », en gardant la pente et en oubliant tout le reste.",
      cause: "La formule $y = f'(x_0)(x - x_0) + f(x_0)$ comporte trois ingrédients dont un seul, la " +
             "pente, a été travaillé pendant tout le chapitre. Les deux autres ne sont pas oubliés " +
             "par distraction : ils n'ont, du point de vue de l'élève, aucune raison d'être là. Une " +
             "droite, pour lui, c'est une pente — l'ordonnée à l'origine n'a jamais eu à être " +
             "calculée, elle se lisait.",
      remede: "Faire tracer, sur un même graphique, trois droites de pente $11$ passant par trois " +
              "points différents. Les trois sont parallèles et une seule touche la courbe au point " +
              "voulu. La question devient alors évidente : « la pente dit l'inclinaison, mais qui " +
              "dit à quelle hauteur ? ».<br/><br/>" +
              "Interdire ensuite, pendant quelques séances, d'écrire directement l'équation " +
              "développée. Exiger les trois nombres d'abord, posés séparément et nommés : la pente " +
              "$f'(x_0)$, l'abscisse $x_0$, l'ordonnée $f(x_0)$. Le développement ne vient qu'après. " +
              "L'élève qui oublie un ingrédient s'en aperçoit en voyant une case vide, au lieu " +
              "d'écrire une équation qui a l'air complète.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 5 donne
         justement la pente ($y = 11x + p$) et demande le SEUL nombre que
         l'élève a tendance à omettre, l'ordonnée à l'origine. Il ne peut pas
         répondre en recopiant la pente : la question porte exactement sur ce
         qui manque dans son écriture spontanée. */
      exercice: { type: "exercice", n: 5 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ni « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 dériver un polynôme et évaluer en un point : application directe des
        règles du cours, donc « calculer ».
     Q2 accélération d'un mobile à partir de sa position : l'élève doit décider
        seul qu'il faut dériver DEUX fois, l'énoncé ne le disant pas en
        termes mathématiques. Traduire « accélération » en « dérivée de la
        dérivée » est du « modéliser ».
     Q3 dérivée d'un produit $x^2e^x$ : application de la formule, donc
        « calculer ».
     Q4 déterminer où $f'$ s'annule : l'élève conclut d'une propriété
        géométrique (tangente horizontale) à une équation à résoudre, puis
        écarte la racine négative au vu de la contrainte. C'est « raisonner ».
     Q5 lire $f'(2)$ sur une tangente donnée par deux de ses points : aucune
        dérivation, une lecture graphique. C'est « représenter ».

     QUESTION 5 AJOUTÉE le 2026-09-14, et « représenter » avec elle. Ce
     chapitre était le seul des dix de la première à ne porter que quatre
     questions, et ses quatre questions demandaient toutes un calcul de
     dérivée : la compétence qui porte le malentendu fondateur du chapitre —
     lire une pente sur un dessin — n'y était jamais évaluée. L'énoncé a été
     écrit pour elle, l'étiquette n'a pas été posée sur un énoncé existant.

     « Chercher » et « communiquer » ne sont pas déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni de
     rédiger une explication. Les deux compétences sont portées par d'autres
     chapitres du niveau, où les énoncés ont été écrits pour cela. */
  competences: {
    evaluation: ["calculer", "modéliser", "calculer", "raisonner", "représenter"]
  }
};
