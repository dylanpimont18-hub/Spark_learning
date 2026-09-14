/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-limites-continuite.prof.js
   Fiche professeur du chapitre « Limites de fonctions et continuité »
   (terminale), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14 sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales.prof.js), dont elle reprend toutes les
   conventions sans exception.

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

window.SPARK_PROF["tle-limites-continuite"] = {

  /* Prérequis : AUCUN chapitre du niveau.

     Ce n'est pas un oubli, c'est le statut du chapitre. Les limites ouvrent
     l'analyse de terminale : elles fondent la dérivation (dont le taux
     d'accroissement est une limite), l'intégration (définie comme limite de
     sommes), les équations différentielles et l'étude des suites. Rien dans
     le programme de terminale ne les précède.

     Ce qu'elles supposent appartient à la PREMIÈRE — factoriser un trinôme,
     manipuler une expression conjuguée, lire un tableau de variations — et
     le champ `prerequis` ne référence que des chapitres du même niveau. Y
     mettre un numéro pour ne pas laisser le tableau vide donnerait un
     prérequis faux, ce qui est pire qu'un prérequis absent.

     C'est donc volontairement un chapitre d'OUVERTURE, et la fiche le dit à
     l'enseignant plutôt que de le lui laisser deviner. */
  prerequis: [],

  /* Rang conseillé (2026-09-14) : rang 4.

     Le rang 4 et non le rang 1, alors que le chapitre n'a pourtant aucun
     prérequis. La raison est pratique : les premières semaines de terminale
     se passent traditionnellement sur les suites et sur l'exponentielle, qui
     réactivent la première et rassurent la classe. Ouvrir l'année sur les
     formes indéterminées serait brutal.

     En revanche il doit venir AVANT tout le reste de l'analyse : avant les
     compléments de dérivation (rang 5), avant la convexité (rang 6), et
     surtout avant l'intégration, dont la définition même est une limite.

     Le rang 4 est donc le plus tard où l'on puisse encore le placer sans
     devoir employer le mot « limite » avant de l'avoir défini. */
  rangConseille: 4,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse », sous-parties
  // « Limites de fonctions » et « Continuité ».
  attendus: [
    "Déterminer la limite d'une fonction en un point ou en l'infini, éventuellement après avoir levé une indétermination",
    "Interpréter graphiquement une limite en termes d'asymptote horizontale ou verticale",
    "Étudier la continuité d'une fonction en un point, et reconnaître une fonction continue sur un intervalle",
    "Appliquer le théorème des valeurs intermédiaires pour justifier l'existence d'une solution à une équation",
    "Déterminer par balayage ou dichotomie une valeur approchée de la solution d'une équation"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe. */
  note: "Les limites en un point et en l'infini, les formes indéterminées, les asymptotes, la " +
        "continuité et le théorème des valeurs intermédiaires sont tous au programme de " +
        "terminale.<br/><br/>" +
        "<strong>Trois points méritent un arbitrage avant la séance.</strong><br/><br/>" +
        "D'abord la <strong>définition de la limite</strong>. Le programme de terminale ne demande " +
        "aucune définition quantifiée : la formulation « $f(x)$ devient aussi proche que l'on veut " +
        "de $L$ » suffit, et la définition en epsilon relève du supérieur. Le troisième schéma du " +
        "cours, « Plus on regarde de près, plus la limite se précise », approche volontairement " +
        "cette idée par le zoom plutôt que par les quantificateurs : c'est conforme, mais on " +
        "évitera d'écrire au tableau le moindre $\\varepsilon$, qui dépasserait l'attendu.<br/><br/>" +
        "Ensuite le <strong>corollaire du théorème des valeurs intermédiaires</strong> — celui qui " +
        "ajoute la stricte monotonie pour obtenir l'UNICITÉ de la solution. Il est au programme, " +
        "mais ce chapitre ne le traite pas : la septième tâche de la banque et le quiz s'en tiennent " +
        "à l'existence, et disent explicitement que le théorème donne un minimum de solutions. " +
        "L'unicité devra être traitée à part, en prolongement, sans quoi les élèves répondront " +
        "« au moins une » à des questions qui attendent « exactement une ».<br/><br/>" +
        "Enfin les <strong>croissances comparées</strong>, mentionnées dans le cours parmi les " +
        "moyens de lever une indétermination mais absentes de toute la banque d'exercices. Elles " +
        "supposent l'exponentielle et le logarithme, donc elles arrivent naturellement plus tard " +
        "dans l'année. Si l'on traite ce chapitre au rang conseillé, on les annoncera comme une " +
        "technique à venir plutôt que comme un outil disponible.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous ont
       tous été vérifiés contre un tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions au plus 3) le 2026-09-14. */
  erreurs: [
    {
      titre: "Traiter une forme indéterminée comme un résultat",
      eleve: "Pour $\\lim_{x \\to 2} \\dfrac{x^2 - 4}{x - 2}$, l'élève écrit « $\\dfrac{0}{0}$, donc " +
             "la limite vaut $0$ » — ou, tout aussi souvent, « $\\dfrac{0}{0}$, donc la limite " +
             "n'existe pas ». La bonne réponse est $4$.",
      cause: "L'écriture $\\dfrac{0}{0}$ ressemble à un résultat : elle a la forme d'une fraction, " +
             "elle est faite de chiffres, et elle apparaît au bout d'un calcul. Rien dans son " +
             "apparence ne signale qu'elle n'est pas un nombre.<br/><br/>" +
             "S'ajoute une habitude de quatre ans : depuis la quatrième, substituer a toujours " +
             "donné la réponse. L'élève n'a jamais rencontré de situation où le calcul aboutit à " +
             "une expression qu'il faut <strong>jeter</strong> pour recommencer autrement.",
      remede: "Ne pas se contenter de dire « c'est indéterminé » : ce mot est entendu comme " +
              "« compliqué », pas comme « sans valeur ». Faire produire la preuve par l'élève, en " +
              "lui demandant de calculer trois limites qui donnent toutes $\\dfrac{0}{0}$ : " +
              "$\\dfrac{x^2}{x}$, $\\dfrac{x}{x}$ et $\\dfrac{x}{x^2}$ en $0^+$. Elles valent " +
              "respectivement $0$, $1$ et $+\\infty$.<br/><br/>" +
              "La conclusion s'impose alors d'elle-même : trois calculs aboutissant au même " +
              "$\\dfrac{0}{0}$ donnent trois réponses différentes, donc $\\dfrac{0}{0}$ ne peut pas " +
              "être une réponse. C'est un <strong>signal d'alarme</strong>, pas un résultat.<br/><br/>" +
              "Installer ensuite le geste : quand la substitution donne $\\dfrac{0}{0}$, la seule " +
              "chose à faire est de <strong>factoriser</strong>, parce que le facteur qui s'annule " +
              "est présent en haut ET en bas. Le faire remarquer : ce n'est pas un hasard, c'est " +
              "pour cela que la simplification marche toujours dans ce cas.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 7 demande
         $\lim_{x \to 4} \frac{x^2-16}{x-4}$, et son corrigé écrit
         explicitement la première ligne « substitution directe : $\frac{0}{0}$
         — forme indéterminée, on ne conclut pas » avant de factoriser. Tâche
         créée ce jour : la banque ne contenait que des limites en l'infini. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Comparer les coefficients au lieu de comparer les degrés",
      eleve: "Pour $\\lim_{x \\to +\\infty} \\dfrac{5x + 4}{2x^2 + 1}$, l'élève annonce $2{,}5$ : il " +
             "a divisé $5$ par $2$. La limite vaut $0$.",
      cause: "La règle a été rencontrée pour la première fois sur un quotient de <strong>même " +
             "degré</strong>, où elle se résume effectivement au rapport des coefficients " +
             "dominants. C'est ce cas-là que l'élève a mémorisé, et il l'applique partout — ce qui " +
             "est un raisonnement par analogie parfaitement normal.<br/><br/>" +
             "Le cas des degrés égaux étant de loin le plus fréquent dans les exercices types, rien " +
             "ne vient contredire la généralisation avant le jour du contrôle.",
      remede: "Imposer un ordre de lecture, et le faire écrire : <strong>d'abord les degrés, " +
              "ensuite seulement les coefficients</strong>. Tant que l'élève n'a pas entouré les " +
              "deux degrés, il n'a pas le droit de regarder les coefficients.<br/><br/>" +
              "Faire ensuite construire le tableau des trois cas, avec un exemple pour chacun : " +
              "degré du haut plus petit (la limite est $0$), degrés égaux (c'est le quotient des " +
              "coefficients), degré du haut plus grand (la limite est infinie). Trois cas, trois " +
              "exemples — et la règle cesse d'être une formule pour devenir un arbre de " +
              "décision.<br/><br/>" +
              "Un appui d'intuition qui fonctionne bien : demander lequel des deux polynômes " +
              "« court le plus vite » quand $x$ grandit. Un $x^2$ dépasse n'importe quel multiple " +
              "de $x$, quelle que soit la constante devant — il suffit d'attendre. Le coefficient " +
              "ne fait que retarder le moment où l'écart devient visible, il ne change jamais qui " +
              "gagne.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 1 est très
         exactement $\lim_{x \to +\infty} \frac{5x+4}{2x^2+1}$, le cas où
         l'élève qui divise les coefficients obtient 2,5 au lieu de 0.
         L'indication dit mot pour mot « compare les DEGRÉS avant de comparer
         les coefficients ». Tâche créée ce jour. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Échanger les deux sortes d'asymptotes",
      eleve: "Une courbe a pour asymptotes $x = 2$ et $y = 5$. L'élève écrit " +
             "$\\lim_{x \\to 5} f(x) = 2$, ou annonce que l'asymptote verticale est $y = 5$.",
      cause: "Les deux asymptotes sont présentées ensemble, dans la même leçon, avec des écritures " +
             "presque identiques — une lettre, un signe égal, un nombre. Elles se mémorisent donc " +
             "comme une paire, et une paire s'inverse.<br/><br/>" +
             "Le vocabulaire n'aide pas : une asymptote <strong>verticale</strong> est une droite " +
             "verticale, mais elle correspond à une limite INFINIE, et son équation porte sur " +
             "l'abscisse. Trois informations à coordonner pour un seul mot, et rien qui les relie " +
             "naturellement.",
      remede: "Ne pas faire apprendre les deux définitions en parallèle : c'est justement ce qui " +
              "les fait s'échanger. Les rattacher plutôt à deux <strong>questions</strong> " +
              "différentes, à poser à voix haute.<br/><br/>" +
              "L'asymptote horizontale répond à « <strong>où va la courbe quand je m'éloigne " +
              "?</strong> ». On regarde donc tout au bout du dessin, à droite et à gauche, et on " +
              "lit une <strong>hauteur</strong>.<br/><br/>" +
              "L'asymptote verticale répond à « <strong>où la fonction est-elle interdite ?</strong> ». " +
              "On regarde donc le dénominateur, on cherche où il s'annule, et on lit une " +
              "<strong>abscisse</strong>.<br/><br/>" +
              "Le premier schéma du cours, « Une asymptote horizontale et une asymptote verticale " +
              "sur la même courbe », est fait pour cela : il porte les deux sur un seul dessin, avec " +
              "les étiquettes « hauteur égale à deux » et « abscisse égale à un ». Faire désigner " +
              "chacune du doigt avant de rien écrire.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 5 donne
         $f(x) = \frac{6x+2}{x-2}$ et demande l'ABSCISSE de l'asymptote
         verticale — le mot « abscisse » est dans l'énoncé, et le corrigé
         vérifie en plus que le numérateur ne s'annule pas au même endroit,
         condition que les élèves ignorent le plus souvent. Tâche créée ce
         jour. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Croire que « définie en $a$ » veut dire « continue en $a$ »",
      eleve: "Sur une fonction définie par deux formules qui se raccordent mal, l'élève déclare " +
             "qu'elle est continue « puisqu'elle a bien une valeur en $2$ ». Il ne compare jamais " +
             "les deux limites latérales.",
      cause: "La définition de la continuité comporte trois conditions — $f(a)$ existe, la limite " +
             "existe, et elles sont égales — mais seule la première se vérifie d'un coup d'œil. " +
             "L'élève s'arrête donc à celle-là, ce qui est un comportement économique " +
             "raisonnable.<br/><br/>" +
             "L'image du crayon aggrave les choses : « on trace sans lever le crayon » suggère que " +
             "la difficulté serait un TROU, c'est-à-dire une valeur manquante. Le cas du SAUT — " +
             "où toutes les valeurs existent et où la courbe est pourtant coupée — n'est pas " +
             "couvert par l'image.",
      remede: "Faire dessiner par l'élève, à main levée, une fonction qui est définie partout et " +
              "qui n'est PAS continue. C'est un exercice de trente secondes, et la plupart y " +
              "arrivent : il suffit de deux paliers. Le contre-exemple étant produit par lui, la " +
              "règle qu'il contredit ne revient pas.<br/><br/>" +
              "S'appuyer ensuite sur le deuxième schéma du cours, « Une fonction peut manquer un " +
              "point sans perdre sa limite », qui oppose exactement les deux situations : à gauche " +
              "un trou (la valeur manque, la limite existe), à droite un saut (la valeur existe, la " +
              "limite manque). Les deux sont discontinues, pour des raisons opposées.<br/><br/>" +
              "Installer enfin la vérification en trois temps, à écrire systématiquement : la " +
              "limite à gauche, la limite à droite, la valeur. La continuité exige que les trois " +
              "coïncident, et il faut les écrire toutes les trois pour pouvoir le dire.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 4 donne une
         fonction définie par deux formules de part et d'autre d'un seuil et
         demande la valeur de $k$ qui la rend continue. L'élève ne peut pas
         s'en tirer en constatant que la fonction est définie : elle l'est
         pour TOUT $k$, et une seule valeur la rend continue. Tâche créée ce
         jour. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Lire dans le théorème des valeurs intermédiaires une unicité qu'il ne donne pas",
      eleve: "L'élève applique le théorème sur $[0\\,;\\,3]$ avec un changement de signe, et conclut " +
             "« l'équation $f(x) = 0$ a une solution », sous-entendu une seule. Le théorème n'en " +
             "garantit qu'au moins une.",
      cause: "L'énoncé du théorème dit « il existe $c$ tel que... », et en français courant « il " +
             "existe un nombre » s'entend spontanément comme « il en existe un, donc un seul ». " +
             "C'est un décalage entre la langue et la logique, pas une méconnaissance du " +
             "cours.<br/><br/>" +
             "S'ajoute que la plupart des exercices d'entraînement portent sur des fonctions " +
             "strictement monotones, où la solution est effectivement unique. L'élève n'a jamais " +
             "rencontré le cas contraire, et sa généralisation est raisonnable.",
      remede: "Faire dessiner une fonction continue qui change de signe entre $0$ et $3$ et qui " +
              "s'annule <strong>trois fois</strong>. C'est immédiat à main levée, et cela règle la " +
              "question mieux qu'une mise en garde : le théorème n'interdit rien de tel.<br/><br/>" +
              "Faire ensuite formuler la distinction entre les deux énoncés. Le théorème seul donne " +
              "l'<strong>existence</strong> : au moins une solution. C'est l'ajout de la " +
              "<strong>stricte monotonie</strong> — le corollaire — qui donne l'unicité, parce " +
              "qu'une fonction strictement croissante ne peut pas repasser par la même valeur.<br/><br/>" +
              "Imposer enfin une formulation écrite qui ne triche pas : « l'équation admet " +
              "<strong>au moins une</strong> solution » tant que la monotonie n'a pas été établie. " +
              "Le jour où elle l'est, on écrit « exactement une », et l'on dit pourquoi.",
      /* Vérifié contre le tirage réel (2026-09-14) : l'exercice 3 donne
         quatre valeurs d'une fonction continue avec DEUX changements de
         signe, et demande combien de solutions on peut GARANTIR. Le mot est
         dans l'énoncé, et le corrigé se termine par « le théorème donne un
         MINIMUM, jamais un nombre exact ». Tâche créée ce jour. */
      exercice: { type: "exercice", n: 3 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est bien celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 $\lim_{x \to +\infty} \frac{3x^2-x+1}{2x^2+5}$ : comparaison des
        degrés puis quotient des coefficients. C'est « calculer ».
     Q2 lire deux asymptotes décrites en mots et les traduire en deux
        écritures de limites. Aucune expression n'est donnée, donc rien à
        calculer : l'élève interprète une représentation. C'est
        « représenter ».
        CETTE QUESTION A ÉTÉ RÉÉCRITE le 2026-09-14 (c'était une deuxième
        factorisation, dans une évaluation entièrement calculatoire).
     Q3 $\sqrt{x^2+6x} - x$ en $+\infty$ : aucune méthode n'est donnée et
        aucune de celles du chapitre ne s'applique directement. L'élève doit
        explorer numériquement avant de conjecturer. C'est « chercher ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (c'était un troisième calcul de
        degrés).
     Q4 traduire « ne descendra jamais sous un certain seuil, même en le
        laissant tourner indéfiniment » en $\lim_{t \to +\infty} C(t)$, puis
        réinterpréter le nombre trouvé dans le contexte industriel. C'est
        « modéliser ».
        ÉGALEMENT RÉÉCRITE le 2026-09-14 (c'était une question de vocabulaire
        sur la forme $\frac{0}{0}$, qui se cochait à la reconnaissance).
     Q5 $\lim_{x \to 1} \frac{x^2-1}{x^2-x}$ : double factorisation et
        simplification. C'est « calculer ».

     « Raisonner » et « communiquer » ne sont PAS déclarées ici : aucune des
     cinq questions ne demande de passer d'une propriété à une autre sans
     calcul, ni de juger l'énoncé produit par quelqu'un d'autre. Les deux
     compétences sont portées par d'autres chapitres du niveau, où les
     énoncés ont été écrits pour cela. */
  competences: {
    evaluation: ["calculer", "représenter", "chercher", "modéliser", "calculer"]
  }
};
