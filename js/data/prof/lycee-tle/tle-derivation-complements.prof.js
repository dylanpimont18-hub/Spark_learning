/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-derivation-complements.prof.js
   Fiche professeur du chapitre « Compléments sur la dérivation »
   (terminale), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales).

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau. Une fiche écrite dans
   `js/data/prof/tle/` ne serait jamais trouvée par le pipeline, et l'ouvrage
   compilerait en se déclarant simplement « sans fiche » — sans le moindre
   message d'erreur.

   Contenu écrit à la main : une fiche engage le livre sur le programme
   officiel. Conventions du projet : KaTeX inline, virgule décimale en {,},
   ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-derivation-complements"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 4 (limites de fonctions et continuité) : la dérivée est définie
     comme la LIMITE du taux d'accroissement, et toute la justification des
     trois règles du chapitre passe par des limites de quotients. Un élève
     qui n'a pas stabilisé les formes indéterminées ne peut pas comprendre
     pourquoi le terme $\delta u\,\delta v$ disparaît du produit — il le
     retient comme une consigne, pas comme un résultat.

     Le chapitre sur l'exponentielle (ch. 1) n'est PAS déclaré, bien que la
     banque d'exercices et l'évaluation manipulent $e^x$ et $\ln$ : leurs
     dérivées sont données dans le formulaire du chapitre, et aucune
     propriété de ces fonctions n'est mobilisée au-delà de $(e^x)' = e^x$ et
     $(\ln x)' = 1/x$. Le déclarer serait un prérequis décoratif, et le
     cahier des charges demande les prérequis RÉELS. */
  prerequis: [4],

  /* Rang conseillé (2026-09-14) : rang 5.

     La dérivation vient nécessairement APRÈS les limites (rang 4), dont
     elle est une application directe. Elle vient AVANT tout le reste de
     l'analyse : la convexité (qui dérive deux fois), les primitives (qui
     remontent une dérivation), les équations différentielles (qui relient
     une fonction à sa dérivée). C'est le chapitre-outil de l'année, et le
     retarder pénalise quatre chapitres d'un coup.

     Le LIVRE le range en chapitre 5, ce qui coïncide ici avec le rang
     conseillé — ce n'est pas toujours le cas dans l'ouvrage. */
  rangConseille: 5,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse ».
  attendus: [
    "Calculer la dérivée d'un produit et d'un quotient de fonctions dérivables",
    "Calculer la dérivée d'une fonction composée, notamment de la forme u^n, e^u, ln(u) et racine de u",
    "Déterminer une équation de la tangente à une courbe en un point donné",
    "Étudier le sens de variation d'une fonction à partir du signe de sa dérivée",
    "Interpréter le nombre dérivé comme coefficient directeur de la tangente"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "La dérivée d'un produit, d'un quotient et d'une composée, l'équation de la tangente et " +
        "l'étude des variations par le signe de la dérivée sont tous au programme de terminale, " +
        "enseignement de spécialité.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord les <strong>fonctions trigonométriques</strong>, qui apparaissent dans le quiz et " +
        "dans la cinquième question de l'évaluation ($\\sin$, $\\cos$). Elles sont bien au programme " +
        "de terminale, mais dans un chapitre distinct, souvent traité plus tard dans l'année. Si la " +
        "trigonométrie n'a pas encore été vue, l'exemple de $\\dfrac{x^2}{\\sin x}$ reste utilisable " +
        "— il sert de support à un contre-exemple, non à un calcul — mais on pourra le remplacer " +
        "par $\\dfrac{x^2}{e^x}$ sans rien perdre du raisonnement.<br/><br/>" +
        "Ensuite la <strong>dérivée seconde</strong> : elle n'est pas traitée ici, alors que le " +
        "chapitre sur la convexité (chapitre 7 du livre) en dépend entièrement. Prévoir d'y revenir " +
        "explicitement plutôt que de compter sur la continuité entre les deux chapitres.<br/><br/>" +
        "Enfin, ce chapitre ne comporte que <strong>deux schémas secondaires</strong> au lieu de " +
        "trois. C'est délibéré : le reste de son contenu est de la technique algébrique, et une " +
        "figure de plus n'illustrerait qu'une formule. Les deux figures retenues ciblent les deux " +
        "malentendus qui coûtent réellement le chapitre.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
     y répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous
       ont tous été vérifiés contre le tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions plafonnées à 3), le 2026-09-14. */
  erreurs: [
    {
      titre: "Dériver chaque facteur d'un produit",
      eleve: "Pour $f(x) = (3x + 2)e^x$, l'élève écrit $f'(x) = 3e^x$ : il a dérivé le premier " +
             "facteur, dérivé le second, et multiplié les deux résultats. Il annonce " +
             "$f'(1) \\approx 8{,}15$ au lieu de $f'(1) \\approx 21{,}7$.",
      cause: "Ce n'est pas de l'étourderie, c'est une <strong>généralisation raisonnable</strong>. " +
             "Depuis un an, tout ce qu'il dérive se dérive terme à terme : $(u + v)' = u' + v'$, " +
             "et cela marche à chaque fois. Rien dans l'écriture d'un produit ne signale que la " +
             "règle change ; la multiplication et l'addition s'écrivent avec la même sobriété.<br/><br/>" +
             "Plus profondément, il ne se représente pas ce qui se passe : il croit que deux " +
             "facteurs varient <strong>indépendamment</strong>, alors qu'ils s'entraînent l'un " +
             "l'autre.",
      remede: "Ne pas commencer par réénoncer $(uv)' = u'v + uv'$ : la formule est écrite au " +
              "tableau depuis le début de l'heure, et ce n'est pas elle qui manque.<br/><br/>" +
              "Faire d'abord <strong>tomber la recette</strong>, avec la fonction la plus simple " +
              "qui soit : $f(x) = x \\times x$. Tout le monde sait que c'est $x^2$, donc que " +
              "$f'(x) = 2x$. Et la recette « je dérive chaque facteur » donnerait $1 \\times 1 = 1$. " +
              "L'élève constate seul que sa méthode est fausse, sans qu'on la lui corrige.<br/><br/>" +
              "Ensuite seulement, montrer d'où viennent les deux termes, avec le second schéma " +
              "secondaire du cours (« La dérivée du produit contre le produit des dérivées »). Un " +
              "rectangle de $5$ sur $3$ qu'on allonge de $1{,}4$ et qu'on rehausse de $1$ gagne " +
              "$4{,}2$ d'un côté, $5$ de l'autre, et $1{,}4$ dans le coin. Les deux bandes sont la " +
              "formule ; le petit coin est ce que l'élève propose, et c'est justement le seul " +
              "morceau qui s'efface quand les variations deviennent petites.<br/><br/>" +
              "La phrase à faire dire : <strong>« quand deux choses varient à la fois, chacune " +
              "profite de l'autre »</strong>. C'est le sens des deux termes.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 2
         est « $f(x) = (3x + 3)e^x$, calculer $f'(2)$ ». C'est exactement la
         forme sur laquelle l'erreur se produit, et l'écart est grand — la
         recette fausse donne $3e^2 \approx 22{,}2$ contre $12e^2 \approx
         88{,}7$ — donc visible sans qu'on le désigne. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier le facteur $u'$ dans une composée",
      eleve: "Pour $f(t) = 3e^{3t}$, l'élève écrit $f'(t) = 3e^{3t}$ : il a reconnu que " +
             "l'exponentielle est sa propre dérivée, et il s'est arrêté là. Il annonce $f'(0) = 3$ " +
             "au lieu de $9$.",
      cause: "L'écriture $e^{3t}$ ressemble trop à $e^t$. Le $3$ de l'exposant est typographiquement " +
             "minuscule, et il n'y a aucun symbole d'opération entre l'extérieur et l'intérieur : " +
             "rien ne dit à l'œil qu'il y a <strong>deux fonctions</strong> emboîtées.<br/><br/>" +
             "L'élève ne doute d'ailleurs pas : il a appliqué une vraie règle, correctement, à ce " +
             "qu'il a cru voir. Le problème est de <strong>lecture</strong>, pas de règle.",
      remede: "Installer un geste de lecture avant tout calcul : devant une expression, se demander " +
              "à voix haute « qu'est-ce que je ferais <strong>en dernier</strong> si je calculais " +
              "cette valeur à la calculatrice ? ». Pour $e^{3t}$ : je multiplierais d'abord par $3$, " +
              "puis j'appliquerais l'exponentielle. Il y a donc bien deux étapes, et deux étapes " +
              "veulent dire deux dérivées.<br/><br/>" +
              "Ce test est décisif parce qu'il fonctionne sur toutes les composées du chapitre — " +
              "$\\sqrt{4x+1}$, $\\ln(2x+1)$, $(3x+1)^4$ — là où une règle apprise par cœur ne " +
              "transfère pas d'une forme à l'autre.<br/><br/>" +
              "Puis s'appuyer sur le premier schéma secondaire du cours (« Deux variations " +
              "emboîtées se multiplient »), qui pose deux repères côte à côte : le premier maillon " +
              "amplifie $3$ fois, le second $6$ fois, et le total vaut $18$. Faire remarquer qu'un " +
              "élève qui oublie $u'$ n'annonce que le second maillon — son résultat est " +
              "<strong>trois fois trop petit</strong>, ce qu'un ordre de grandeur détecte.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 6
         est « $f(t) = 3e^{3t}$, calculer $f'(0)$ ». La valeur $t_0 = 0$ est
         ici un avantage pédagogique : $e^0 = 1$, donc toute la difficulté se
         concentre sur le facteur oublié, et la réponse fausse (3) comme la
         bonne (9) sont des entiers que l'élève peut comparer d'un coup
         d'œil. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Inverser l'ordre au numérateur du quotient",
      eleve: "Pour $f(x) = \\dfrac{3x}{x+3}$, l'élève écrit " +
             "$f'(x) = \\dfrac{3x \\times 1 - 3(x+3)}{(x+3)^2} = \\dfrac{-9}{(x+3)^2}$ : il a posé " +
             "$uv' - u'v$ au lieu de $u'v - uv'$. Il annonce $f'(1) = -0{,}563$ au lieu de " +
             "$+0{,}563$ — le bon nombre, avec le mauvais signe.",
      cause: "La formule du produit, $u'v + uv'$, est <strong>symétrique</strong> : l'ordre des " +
             "deux termes n'y change rien, et l'élève a passé une semaine à s'en convaincre. " +
             "Celle du quotient ne l'est pas, mais elle lui ressemble tellement — mêmes lettres, " +
             "même disposition — que la différence ne s'inscrit pas.<br/><br/>" +
             "Et l'erreur est <strong>silencieuse</strong> : le résultat reste une expression " +
             "plausible, du bon degré, avec le bon dénominateur. Rien ne l'alerte.",
      remede: "Plutôt qu'un moyen mnémotechnique de plus, donner à l'élève un moyen de se " +
              "<strong>contrôler tout seul</strong>. Le meilleur est un cas où il connaît déjà la " +
              "réponse : $f(x) = \\dfrac{x}{1} = x$, dont la dérivée vaut évidemment $1$. Avec " +
              "l'ordre correct on trouve $\\dfrac{1 \\times 1 - x \\times 0}{1} = 1$ ; avec l'ordre " +
              "inversé on trouve $-1$. Une fonction croissante ne peut pas avoir une dérivée " +
              "négative : l'ordre est tranché, et il l'est par le sens, pas par la mémoire.<br/><br/>" +
              "Installer ensuite un réflexe de vérification par le <strong>sens de variation</strong> : " +
              "avant de conclure, regarder si la fonction monte ou descend sur l'intervalle " +
              "considéré, et vérifier que le signe obtenu concorde. Ici $\\dfrac{3x}{x+3}$ croît " +
              "visiblement ($0$ en $0$, puis $0{,}75$, puis $1{,}5$...), donc une dérivée négative " +
              "est impossible.<br/><br/>" +
              "Ce réflexe vaut mieux qu'une formule de plus, parce qu'il sert toute l'année, y " +
              "compris dans les chapitres suivants.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 1
         est « $f(x) = \dfrac{3x}{x + 3}$, calculer $f'(1)$ ». Le signe est
         ici le seul enjeu, puisque la valeur absolue est la même dans les
         deux ordres : l'exercice isole donc exactement l'erreur. La tâche
         « quotient » n'existait pas dans la banque avant ce jour. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre l'ordonnée de la tangente et celle de la courbe",
      eleve: "On demande l'ordonnée, en $x = 4$, de la tangente à $f(x) = 3x^2 + 1$ au point " +
             "d'abscisse $1$. L'élève calcule $f(4) = 49$ au lieu de $22$ : il a évalué la " +
             "<strong>courbe</strong> là où on lui demandait la <strong>droite</strong>.",
      cause: "Dans tout le chapitre, la tangente est définie puis aussitôt abandonnée : on calcule " +
             "$f'(a)$, on s'arrête, et personne ne s'en sert. L'élève n'a donc jamais eu à " +
             "distinguer deux objets qui coïncident en un point et qu'il n'a vus que collés l'un à " +
             "l'autre sur un dessin.<br/><br/>" +
             "S'ajoute une difficulté d'écriture : dans $y = f'(a)(x - a) + f(a)$, la lettre $f$ " +
             "apparaît deux fois et la lettre $x$ deux fois. Beaucoup remplacent $x$ ET $a$ par la " +
             "même valeur, ce qui ramène mécaniquement au point de tangence.",
      remede: "Commencer par faire nommer les deux objets à haute voix, sur le dessin : « voici la " +
              "courbe, voici la droite ; elles se touchent en un point et s'écartent partout " +
              "ailleurs ». Puis demander l'écart en un point éloigné — ici $49 - 22 = 27$, qui " +
              "n'est pas une petite différence.<br/><br/>" +
              "Ensuite, imposer une <strong>écriture en trois lignes séparées</strong>, jamais en " +
              "une : d'abord $f(a)$, puis $f'(a)$, puis seulement l'équation de la droite. Tant que " +
              "les trois calculs se font sur la même ligne, les valeurs se mélangent.<br/><br/>" +
              "Un contrôle final gratuit : la tangente évaluée <strong>en $a$</strong> doit " +
              "redonner $f(a)$. Si ce n'est pas le cas, l'équation est fausse ; si c'est le cas, " +
              "elle est presque sûrement juste. Faire systématiquement ce test avant de remplacer " +
              "$x$ par la valeur demandée.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 3
         est « $f(x) = 3x^2 + 1$, tangente au point d'abscisse 1, ordonnée en
         $x = 2$ ». L'énoncé nomme explicitement la droite et rappelle en
         indication que son ordonnée n'est pas $f(2)$ : le piège est signalé
         sans que la réponse le soit. Tâche créée ce jour ; la banque ne
         contenait aucun exercice de tangente. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 dériver $x^3 e^x$ puis évaluer en $0$ : application directe de la
        règle du produit, donc « calculer ».
     Q2 conclure au sens de variation à partir du SIGNE de
        $f'(x) = \dfrac{e^x(x-1)^2}{(x^2+1)^2}$, sans calculer aucune valeur.
        L'élève passe d'une propriété (« un carré est positif », « une
        exponentielle est positive ») à une autre (« $f$ est croissante ») :
        c'est « raisonner ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant la
        dérivée de $\frac{x}{x+1}$, c'est-à-dire un deuxième calcul.
     Q3 dériver $(2x+3)^5$ en $x = -1$ : composée, donc « calculer ».
     Q4 lire le nombre dérivé comme coefficient directeur d'une tangente
        donnée par deux points. Aucune dérivation : l'élève passe du registre
        GRAPHIQUE au registre numérique, ce qui est « représenter ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant $h'(2)$
        pour $h(x) = \sqrt{4x+1}$, un troisième calcul de dérivée.
     Q5 choisir l'ARGUMENT qui convaincra un camarade que sa méthode est
        fausse. L'élève ne produit aucun nombre : il juge la valeur
        persuasive de quatre énoncés, et reconnaît qu'un contre-exemple
        réfute là où une formule récitée ne convainc pas. C'est
        « communiquer ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle se refermait auparavant sur un
        « a-t-il raison ? » dont la réponse était devinable sans comprendre.

     « Chercher » et « modéliser » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande d'explorer une piste sans méthode donnée, ni
     de traduire une situation concrète en écriture mathématique. Les deux
     compétences sont portées par d'autres chapitres du niveau, où les
     énoncés ont été écrits pour cela. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "représenter", "communiquer"]
  }
};
