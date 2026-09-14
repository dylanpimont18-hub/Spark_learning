/* =========================================================
   Spark Learning – js/data/prof/lycee-tle/tle-exponentielle-logarithme.prof.js
   Fiche professeur du chapitre « Fonctions Exponentielle et Logarithme »
   (terminale), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Écrite le 2026-09-14, sur le modèle du chapitre pilote du niveau
   (tle-primitives-integrales).

   POINT D'ATTENTION ÉDITORIAL : ce chapitre RECOUVRE partiellement le
   chapitre 6 du livre (« Fonction logarithme népérien »). Le champ `note`
   ci-dessous dit à l'enseignant, en clair, ce que chacun traite, ce qu'il ne
   traite pas, et dans quel ordre les prendre. La fiche du chapitre 6 porte
   le renvoi symétrique. Les deux chapitres sont volontairement CONSERVÉS :
   en supprimer un décalerait la numérotation de tout l'ouvrage.

   ATTENTION AU CHEMIN : le dossier des fiches suit le nom du DOSSIER DE
   DONNÉES (`lycee-tle`), pas le nom du niveau.

   Conventions du projet : KaTeX inline, virgule décimale en {,}, ton jamais
   punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["tle-exponentielle-logarithme"] = {

  /* Prérequis, en numéros de chapitres DU LIVRE (ordre de js/loader.js).

     ch. 5 (compléments sur la dérivation) : la dernière tâche de la banque
     et le quiz dérivent $e^{-\lambda t}$ et $e^{3x}$, c'est-à-dire des
     COMPOSÉES. Un élève qui n'a pas stabilisé $(e^u)' = u'e^u$ perd
     systématiquement le facteur $-\lambda$, et retrouve alors une dérivée
     positive pour une grandeur qui décroît.

     Le chapitre 6 (logarithme népérien) n'est PAS déclaré en prérequis, bien
     que les deux chapitres se recouvrent : celui-ci n'utilise du logarithme
     que ce dont il a besoin pour inverser une exponentielle, et la fiche
     recommande d'ailleurs de le traiter AVANT le chapitre 6 (voir la note).
     Le déclarer créerait une dépendance circulaire avec l'ordre conseillé. */
  prerequis: [5],

  /* Rang conseillé (2026-09-14) : rang 7.

     L'exponentielle suppose la dérivation (rang 5), dont elle est
     l'application la plus frappante : c'est la seule fonction égale à sa
     propre dérivée, et cette phrase n'a de sens que pour qui sait dériver.

     Elle vient AVANT l'étude algébrique du logarithme népérien (rang 9) : la
     réciproque se comprend mieux une fois qu'on a rencontré la fonction dont
     elle est la réciproque, et les phénomènes de croissance-décroissance
     donnent au logarithme un usage avant qu'on ne l'étudie pour lui-même.

     Elle vient aussi AVANT les équations différentielles (rang 10), dont
     toutes les solutions sont des exponentielles.

     Le LIVRE la range en chapitre 1, ce qui est un choix de rangement par
     domaine et non un conseil d'enseignement : ouvrir l'année de terminale
     par l'exponentielle reviendrait à demander des dérivées de composées à
     des élèves qui n'ont pas encore revu la dérivation. */
  rangConseille: 7,

  // Attendus de fin d'année de terminale, enseignement de spécialité
  // mathématiques (programme de 2019), partie « Analyse ».
  attendus: [
    "Utiliser la fonction exponentielle et ses propriétés algébriques, notamment e^(a+b) = e^a e^b",
    "Modéliser une évolution à taux de variation proportionnel à la grandeur par une fonction exponentielle",
    "Résoudre une équation ou une inéquation faisant intervenir l'exponentielle ou le logarithme",
    "Utiliser la fonction logarithme népérien comme réciproque de la fonction exponentielle",
    "Interpréter une échelle logarithmique, notamment en chimie (pH) et en acoustique (décibels)"
  ],

  /* Là où le chapitre déborde du programme de l'année, on le dit à
     l'enseignant plutôt que de le lui laisser découvrir en classe.

     C'EST ICI QUE SE RÈGLE LE CHEVAUCHEMENT avec le chapitre 6. On dit à
     l'enseignant exactement ce que chacun couvre, ce qu'il ne couvre pas, et
     dans quel ordre les prendre — plutôt que de le lui laisser découvrir en
     ouvrant les deux chapitres la veille de la séance. */
  note: "L'exponentielle, ses propriétés algébriques, les modèles de croissance et de décroissance " +
        "et l'usage du logarithme pour résoudre une équation sont tous au programme de terminale, " +
        "enseignement de spécialité.<br/><br/>" +
        "<strong>Ce chapitre et le chapitre 6 se recouvrent : il faut le savoir avant de préparer " +
        "sa progression.</strong><br/><br/>" +
        "Les deux parlent du logarithme, mais ils n'en parlent pas de la même manière, et aucun des " +
        "deux ne rend l'autre inutile.<br/><br/>" +
        "<strong>Ce chapitre-ci</strong> traite l'exponentielle comme modèle des phénomènes à taux " +
        "proportionnel — décroissance radioactive, demi-vie, croissance de population — et n'appelle " +
        "le logarithme que comme <strong>outil d'inversion</strong> : quand l'inconnue est dans " +
        "l'exposant, on prend le logarithme pour la faire descendre. Il traite en revanche à fond " +
        "le logarithme <strong>DÉCIMAL</strong>, que le chapitre 6 n'aborde pas du tout : pH, " +
        "décibels, échelles où une unité vaut un facteur $10$.<br/><br/>" +
        "<strong>Le chapitre 6</strong> traite le logarithme <strong>NÉPÉRIEN</strong> pour lui-même : " +
        "propriétés algébriques ($\\ln(ab)$, $\\ln(a/b)$, $\\ln(a^n)$), dérivée $\\frac{1}{x}$, " +
        "croissances comparées, résolution d'équations et d'inéquations. Il ne parle ni de pH ni de " +
        "demi-vie.<br/><br/>" +
        "<strong>Ce qui se recouvre réellement</strong> tient en deux points : la relation de " +
        "réciprocité ($\\ln(e^x) = x$ et $e^{\\ln x} = x$), énoncée dans les deux, et l'usage de " +
        "$\\ln$ pour résoudre $e^{kt} = c$, présent dans les deux banques d'exercices. Ce " +
        "recouvrement n'est pas une redite inutile : ici la relation sert à un calcul de durée, là " +
        "elle est l'objet même de l'étude.<br/><br/>" +
        "<strong>Ordre conseillé : celui-ci d'abord, le chapitre 6 ensuite.</strong> Un élève qui a " +
        "eu besoin du logarithme pour trouver au bout de combien de jours il reste $10$ mg d'iode " +
        "aborde le chapitre 6 avec une question déjà posée. Dans l'ordre inverse, les propriétés " +
        "algébriques de $\\ln$ tombent sans motif, et c'est la configuration où l'erreur " +
        "$\\ln(a+b) = \\ln a + \\ln b$ s'installe le plus durablement.<br/><br/>" +
        "<strong>Deux points débordent enfin du seul cours de mathématiques.</strong> Le pH et les " +
        "décibels relèvent respectivement de la physique-chimie de terminale et d'une culture " +
        "scientifique générale : en mathématiques seules, les deux formules peuvent être admises " +
        "sans être justifiées. Et la décroissance radioactive suppose l'équation différentielle " +
        "$N' = -\\lambda N$, qui est le chapitre 3 du livre : ici on donne la solution, on ne la " +
        "démontre pas.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi
     y répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. Les renvois ci-dessous
       ont tous été vérifiés contre le tirage réel de la graine du livre
       (graine 0, 60 tirages, répétitions plafonnées à 3), le 2026-09-14. */
  erreurs: [
    {
      titre: "Interpoler linéairement entre deux demi-vies",
      eleve: "On demande ce qu'il reste de $160$ mg d'iode 131 ($t_{1/2} = 8$ jours) après $12$ " +
             "jours. L'élève répond $60$ mg : il a pris le milieu entre $80$ (à $8$ jours) et $40$ " +
             "(à $16$ jours). La bonne réponse est $56{,}6$ mg.",
      cause: "Ce n'est pas une faute de calcul, c'est une faute de <strong>modèle</strong>, et le " +
             "modèle qu'il applique est celui qui marche partout ailleurs : entre deux valeurs " +
             "connues, on interpole. Depuis le collège, toutes les situations qu'on lui a données " +
             "à compléter étaient proportionnelles.<br/><br/>" +
             "Rien dans l'énoncé ne l'avertit du contraire, et le résultat qu'il obtient est " +
             "<strong>plausible</strong> : $60$ mg est du bon ordre de grandeur, à $6\\%$ près de " +
             "la vraie valeur. L'erreur ne se voit pas.",
      remede: "Ne pas répondre par la formule $m(t) = m_0e^{-\\lambda t}$ : elle règle le calcul " +
              "sans régler le malentendu, et l'élève interpolera de nouveau la fois suivante.<br/><br/>" +
              "Faire d'abord <strong>tomber la méthode par incohérence</strong>, comme le fait le " +
              "« Découvrir » du chapitre : si l'on interpole avec un pas de $4$ jours, on trouve " +
              "une valeur ; avec un pas de $2$ jours, une autre ; avec un pas de $1$ jour, une " +
              "troisième. Une réponse qui dépend de la façon dont on découpe le temps ne peut pas " +
              "être la bonne réponse. L'élève le constate en trois lignes, sans qu'on le lui dise.<br/><br/>" +
              "Ensuite, s'appuyer sur le deuxième schéma secondaire du cours (« Des paliers " +
              "réguliers dans le temps, une division par deux à chaque fois ») : les trois segments " +
              "tracés à gauche mesurent les pertes successives — $80$, puis $40$, puis $20$ mg — " +
              "et rétrécissent visiblement, alors que les intervalles de temps, eux, sont " +
              "identiques. La perte n'est pas régulière ; le <strong>rapport</strong> l'est.<br/><br/>" +
              "La phrase à faire formuler : <strong>« ce qui se répète, ce n'est pas ce qu'on " +
              "enlève, c'est ce par quoi on multiplie »</strong>.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 1
         demande la masse restante de radon 222 ($t_{1/2} = 4$ jours) après
         une durée qui ne tombe PAS sur un palier. La tâche « durée
         quelconque » a été créée ce jour ; auparavant la banque ne
         contenait que des multiples entiers de la demi-vie, c'est-à-dire
         exactement les cas où l'interpolation ne se voit pas. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Écrire $\\ln(10^{-4}) = -4$",
      eleve: "L'élève applique $\\log(10^n) = n$ au logarithme népérien et annonce $-4$. La valeur " +
             "correcte est $-4\\ln(10) \\approx -9{,}21$ : il se trompe d'un facteur $2{,}3$.",
      cause: "Les deux fonctions s'écrivent presque pareil — trois lettres contre deux — et " +
             "produisent des courbes d'allure identique. Surtout, l'élève rencontre les deux dans " +
             "le MÊME chapitre, souvent dans la même heure, et personne ne lui dit qu'il y en a " +
             "deux avant qu'il ait déjà employé l'une pour l'autre.<br/><br/>" +
             "Le pH aggrave la confusion : c'est un contexte où le logarithme décimal est " +
             "obligatoire, mais rien dans la notation $pH = -\\log[H_3O^+]$ ne crie la base.",
      remede: "Installer une <strong>question rituelle</strong> avant tout calcul de logarithme : " +
              "« de quelle base a-t-on besoin ici ? ». La réponse se déduit du contexte, pas de " +
              "l'écriture : une unité de pH ou de décibel doit correspondre à un facteur $10$, " +
              "donc c'est le décimal ; une équation différentielle ou une dérivée fait intervenir " +
              "$e$, donc c'est le népérien.<br/><br/>" +
              "Puis montrer que les deux ne sont pas deux fonctions étrangères mais une seule à un " +
              "facteur près, avec le troisième schéma secondaire du cours (« Le logarithme décimal " +
              "est le népérien, à une constante près »). Les deux courbes s'y annulent au même " +
              "point, $x = 1$, et le rapport de leurs hauteurs vaut $2{,}303$ partout. C'est " +
              "rassurant : il n'y a pas deux théories à retenir, il y a une conversion.<br/><br/>" +
              "Enfin, faire écrire la conversion une fois pour toutes, sous une forme qu'on relit : " +
              "$\\log x = \\dfrac{\\ln x}{\\ln 10}$. Et faire remarquer le contrôle de vraisemblance : " +
              "$\\ln$ donne toujours un nombre <strong>plus grand en valeur absolue</strong> que " +
              "$\\log$. Si un calcul de pH donne $9{,}21$ au lieu de $4$, c'est le signe qu'on a " +
              "employé le mauvais.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 5
         demande le pH d'une eau de piscine à partir de sa concentration.
         L'élève qui emploie $\ln$ au lieu de $\log$ obtient un pH de l'ordre
         de 15, valeur physiquement impossible — l'échelle des pH s'arrête à
         14 — donc l'erreur est détectable par l'élève lui-même, ce qui est
         le meilleur des cas. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Chercher une durée sans passer par le logarithme",
      eleve: "On demande au bout de combien d'années il ne reste plus que $40$ mg sur $200$ mg de " +
             "strontium 90. L'élève cherche à « diviser » l'exponentielle, écrit " +
             "$e^{-\\lambda t} = 0{,}2$ puis $-\\lambda t = 0{,}2$, et trouve une durée négative " +
             "ou absurde.",
      cause: "L'inconnue est <strong>dans l'exposant</strong>, position dans laquelle l'élève n'a " +
             "jamais eu à isoler quoi que ce soit. Tous les gestes qu'il connaît — soustraire des " +
             "deux côtés, diviser des deux côtés, passer à la racine — agissent sur la base, " +
             "jamais sur l'exposant.<br/><br/>" +
             "Il ne lui manque donc pas une règle de plus : il lui manque de savoir qu'il existe " +
             "une opération <strong>faite pour cela</strong>.",
      remede: "Poser la question en termes de fonction réciproque, et l'illustrer par le premier " +
              "schéma secondaire du cours (« Deux courbes en miroir de part et d'autre de la " +
              "première bissectrice »). L'exponentielle envoie une durée sur une masse ; pour faire " +
              "le trajet inverse, il faut la fonction qui la retourne, et c'est exactement ce que " +
              "la symétrie par rapport à $y = x$ donne à voir.<br/><br/>" +
              "Faire ensuite écrire le geste en trois temps, toujours dans le même ordre : " +
              "<strong>isoler l'exponentielle</strong> (elle doit être seule d'un côté), " +
              "<strong>prendre le logarithme des deux côtés</strong>, <strong>isoler $t$</strong> " +
              "qui est maintenant un facteur ordinaire. Tant que la première étape est sautée, la " +
              "deuxième ne peut pas fonctionner.<br/><br/>" +
              "Un contrôle de vraisemblance à installer en même temps : la durée trouvée doit être " +
              "<strong>positive</strong>, et se situer entre le nombre de demi-vies qui encadre le " +
              "rapport. Ici $\\dfrac{200}{40} = 5$, qui est entre $4$ et $8$ : la réponse doit donc " +
              "tomber entre $2$ et $3$ demi-vies. Un élève qui pose cet encadrement avant de " +
              "calculer détecte toute erreur de signe.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 6
         demande précisément au bout de combien d'années il ne reste plus
         qu'une fraction donnée d'un déchet au strontium 90, et son corrigé
         sépare les trois étapes. Tâche créée ce jour : la banque d'origine
         n'allait jamais dans ce sens-là. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Perdre le facteur $-\\lambda$ en dérivant",
      eleve: "Pour $f(t) = 6e^{-0{,}5t}$, l'élève écrit $f'(t) = 6e^{-0{,}5t}$ et annonce " +
             "$f'(0) = 6$, un nombre <strong>positif</strong>, pour une grandeur qui décroît. La " +
             "bonne valeur est $-3$.",
      cause: "« L'exponentielle est sa propre dérivée » est la phrase la plus mémorable du " +
             "chapitre, et elle est vraie — pour $e^t$. L'élève l'applique à $e^{-0{,}5t}$ parce " +
             "que rien, à l'œil, ne distingue les deux écritures : le facteur est dans l'exposant, " +
             "en petits caractères, sans symbole d'opération.<br/><br/>" +
             "S'ajoute le fait que le signe du résultat ne l'alerte pas : dans ce chapitre, " +
             "beaucoup de nombres sont positifs, et une dérivée positive ne lui paraît pas " +
             "suspecte.",
      remede: "Faire du <strong>signe</strong> le premier contrôle, avant tout calcul. Demander " +
              "systématiquement : « cette grandeur monte-t-elle ou descend-elle ? ». Si elle " +
              "descend, la dérivée sera négative, quoi qu'il arrive. Ce réflexe attrape l'erreur à " +
              "coup sûr, et il ne suppose aucune formule nouvelle.<br/><br/>" +
              "Puis reprendre le geste de lecture des composées, installé au chapitre 5 : " +
              "« qu'est-ce que je ferais en dernier si je calculais cette valeur ? ». Pour " +
              "$e^{-0{,}5t}$ : je multiplierais d'abord par $-0{,}5$, puis j'appliquerais " +
              "l'exponentielle. Deux étapes, donc deux dérivées, donc un facteur à ne pas " +
              "perdre.<br/><br/>" +
              "Enfin, donner un sens physique au facteur oublié : $-\\lambda$ est le taux de " +
              "désintégration, c'est-à-dire la proportion qui disparaît par unité de temps. " +
              "L'oublier, c'est dire que la substance disparaît à la même vitesse quelle que soit " +
              "sa demi-vie — ce qui ne tient pas.",
      /* Vérifié contre le tirage réel (graine 0, 2026-09-14) : l'exercice 10
         demande $f'(0)$ pour $f(t) = 6e^{-0{,}5t}$, c'est-à-dire exactement
         le cas décrit ci-dessus. La valeur $t_0 = 0$ concentre toute la
         difficulté sur le facteur, puisque $e^0 = 1$ : l'élève qui l'oublie
         annonce 6 au lieu de -3, et l'indication de l'exercice l'avertit
         d'attendre un résultat négatif. Tâche créée ce jour. */
      exercice: { type: "exercice", n: 10 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     Le référentiel employé est celui des MATHÉMATIQUES, qui couvre
     explicitement le lycée (voir REFERENTIELS dans scripts/manuel/prof.js).
     Aucune compétence « lycée » ou « spécialité » n'existe : une étiquette
     hors liste est refusée à la validation.

     Q1 deux pH mesurés, et l'on demande le FACTEUR entre les deux
        concentrations. Aucune formule n'est rappelée : l'élève doit décider
        que la relation est multiplicative, l'écrire, puis calculer. Traduire
        une situation concrète en écriture mathématique, c'est « modéliser ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle donnait auparavant le pH et
        demandait la concentration, application directe d'une formule.
     Q2 calculer $\lambda$ à partir de la demi-vie du carbone 14 : application
        de $\lambda = \ln 2 / t_{1/2}$, donc « calculer ».
     Q3 reconnaître, parmi deux suites de relevés, laquelle décroît
        exponentiellement, et dire à quoi on le voit. L'élève lit un tableau
        de valeurs et en tire une propriété de la fonction : c'est
        « représenter ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant la
        dérivée de $e^{3x}$, un calcul qui relève du chapitre 5.
     Q4 trouver au bout de combien de demi-vies entières un stock passe sous
        un seuil, SANS méthode imposée — divisions successives, essais ou
        logarithme, au choix. Explorer une piste sans méthode donnée, c'est
        « chercher ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant de
        simplifier $\log(10^{-2}\times 10^5)$, application en deux lignes.
     Q5 juger si la demi-vie d'un échantillon déjà entamé est encore la même.
        Aucun nombre à produire : l'élève passe d'une propriété de la
        fonction exponentielle à une conclusion sur une situation nouvelle.
        C'est « raisonner ».
        QUESTION RÉÉCRITE le 2026-09-14 : elle demandait auparavant la masse
        restante après trois demi-vies, soit la tâche même dont la banque
        d'exercices était alors entièrement faite.

     « Calculer » n'apparaît qu'une fois ici, et c'est voulu : l'évaluation
     d'origine en comptait cinq. La répartition de l'ouvrage confie les
     calculs aux chapitres où ils sont l'enjeu (dérivation, logarithme
     népérien) et fait porter à celui-ci la modélisation et la lecture, qui
     sont ce que la radioactivité et le pH exigent réellement.
     « Communiquer » n'est pas déclarée : aucune des cinq questions ne
     demande de juger ou de corriger un énoncé produit par quelqu'un. */
  competences: {
    evaluation: ["modéliser", "calculer", "représenter", "chercher", "raisonner"]
  }
};
