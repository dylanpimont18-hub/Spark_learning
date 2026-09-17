/* =========================================================
   Spark Learning – js/data/prof/bts/bts-suites-appliquees.prof.js
   Fiche professeur du chapitre « Suites numériques appliquées » (programme
   BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce fichier
   n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 23 (ce chapitre est le vingt-quatrième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun donne un capital $C_0$ (de $1000$
   à $5000$ €), un taux $t$ (de $2$ à $5\,\%$) et une durée $n$ (de $2$ à $4$
   ans), et demande la valeur acquise $C_n = C_0(1+t)^n$ en intérêts
   composés. Seuls le contexte (plan d'épargne entreprise, livret bancaire,
   trésorerie de PME, réserves d'une coopérative, fonds de pension, compte à
   terme d'artisan) et le triplet changent.

   Ce que cela implique et qu'il faut avoir en tête avant d'écrire la moindre
   remédiation : les DURÉES SONT COURTES (2 à 4 ans) et les taux FAIBLES
   (2 à 5 %). Or c'est exactement le domaine où intérêts simples et intérêts
   composés donnent des résultats très voisins — sur 3000 € à 3 % pendant
   2 ans, l'écart entre les deux formules est de 2,70 €, soit moins d'un
   millième du capital. Le chapitre veut enseigner que la capitalisation fait
   une « énorme différence » (récapitulatif) ; ses douze exercices sont tous
   dans la zone où elle n'en fait aucune.

   Ce que les douze exercices ne travaillent JAMAIS, alors que le cours en
   fait son sujet : les INTÉRÊTS SIMPLES (D1) et leur comparaison aux
   composés, les ANNUITÉS CONSTANTES (D3), la VALEUR ACQUISE d'une suite de
   versements (D4), l'AMORTISSEMENT constant (méthode 3), la recherche de la
   DURÉE par logarithme (formules). Or quatre des cinq questions de
   l'évaluation portent là-dessus.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-suites-appliquees"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     AUCUN prérequis retenu, et c'est un choix argumenté, pas un oubli. Ce
     chapitre est le seul du dossier à traiter de mathématiques financières,
     et il est mathématiquement autonome : une suite géométrique, une
     puissance, un logarithme pour la durée. Rien de ce qui précède dans le
     dossier n'y intervient.

     Candidats examinés et ÉCARTÉS :
     - ch. 5 (Fonctions d'une variable réelle) : c'est le candidat le plus
       sérieux, et il est écarté après examen. La formule de la durée,
       $n = \dfrac{\ln(C_n/C_0)}{\ln(1+t)}$, utilise bien le logarithme — mais
       le chapitre 5 ne l'enseigne pas : il le suppose déjà connu (il n'en
       donne que la dérivée, et le cite dans une condition de domaine). Le
       logarithme lui-même vient de la remise à niveau. Déclarer le chapitre 5
       en prérequis afficherait donc un appui qui n'existe pas.
     - ch. 6 (Dérivation appliquée) : le vocabulaire économique est commun
       (coût, profit, optimisation), mais aucune technique n'est partagée :
       ce chapitre-ci ne dérive rien, et le chapitre 6 n'a aucune suite.
     - ch. 7 (Intégrales appliquées) : on pourrait voir un lien entre somme
       de suite géométrique et intégrale (accumulation dans les deux cas),
       mais il est purement analogique — aucune formule n'est partagée.
     - ch. 1 à ch. 4, ch. 8, ch. 9 : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, et ils sont ici DÉCISIFS — c'est la raison
     pour laquelle `prerequis` reste vide sans que le chapitre soit pour
     autant sans appui. Les PUISSANCES et leurs règles ($1{,}04^3$ est le
     calcul de tous les exercices, et $(1+t)^{-n}$ apparaît dans la formule
     des annuités), les POURCENTAGES et leur conversion en coefficient
     multiplicateur ($5\,\% \to 1{,}05$, qui est LA difficulté d'entrée du
     chapitre), et le LOGARITHME pour la recherche de durée viennent tous de
     la REMISE À NIVEAU (`bts-prep`), qui est dans un AUTRE dossier.
     `prerequis` ne vise qu'un chapitre du même dossier, donc rien ne les
     affichera. La `note` le dit explicitement. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 10 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 24 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 10 est celui du livre, et les deux ordres coïncident.

     Aucune contrainte stricte ne fixe ce placement : le chapitre ne déclare
     aucun prérequis et ne prépare aucun chapitre du dossier, ce que les deux
     colonnes du tableau de progression montreront par des tirets. Il est donc
     LIBREMENT DÉPLAÇABLE, ce qui est une information utile en mars quand il
     faut arbitrer sur un programme en retard.
     Deux raisons de le laisser ici. D'abord, il forme avec le chapitre 6
     (Dérivation appliquée) le couple des chapitres à contexte économique de
     la partie : les rapprocher donne une cohérence de vocabulaire — coût,
     capital, rentabilité — que l'étudiant de groupement tertiaire retrouve.
     Ensuite, il offre une respiration bienvenue entre le bloc probabiliste
     (9) et le bloc technique lourd qui suit (matrices, Fourier, Laplace). */
  rangConseille: 10,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et ce chapitre est de tous celui dont l'appartenance
     est la plus INÉGALE : les suites arithmétiques et géométriques sont dans
     le tronc commun de tous les groupements, mais les APPLICATIONS
     FINANCIÈRES (annuités, amortissement, valeur acquise) relèvent nettement
     des BTS tertiaires — gestion, comptabilité, banque, professions
     immobilières — et sont souvent absentes ailleurs.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« suite géométrique », « terme général », « somme ») et n'inventent
     aucune spécialité. La `note` insiste sur ce point plus que pour les
     autres chapitres, parce que le risque de citer des attendus hors filière
     y est le plus élevé. */
  attendus: [
    "Reconnaître une suite arithmétique ou géométrique et déterminer sa raison",
    "Calculer un terme de rang donné à partir de l'expression du terme général",
    "Calculer la somme des termes d'une suite géométrique et l'utiliser dans un problème d'accumulation"
  ],

  note: "Les suites numériques appliquées — intérêts simples et composés, annuités, valeur " +
        "acquise — s'appuient sur les suites arithmétiques et géométriques du tronc commun de " +
        "mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus, " +
        "et plus attentivement ici qu'ailleurs.</strong> Il n'existe pas un programme unique de " +
        "mathématiques en BTS, mais un tronc commun décliné par <strong>groupement</strong> " +
        "(A, B, C, D...). Le chapitre ne déclare pas le sien, et c'est celui dont l'appartenance " +
        "est <strong>la plus inégale de toute la partie</strong> : les suites elles-mêmes sont " +
        "partout, mais les <strong>applications financières</strong> — annuités, amortissement, " +
        "tableau de remboursement — relèvent nettement des BTS <strong>tertiaires</strong> " +
        "(gestion, comptabilité, banque, professions immobilières) et sont souvent absentes des " +
        "groupements industriels. Les trois attendus ci-dessus sont donc formulés sur les suites " +
        "seules, sans mention financière.<br/><br/>" +
        "<strong>Le prérequis le plus important de ce chapitre ne sera pas affiché.</strong> La " +
        "colonne « S'appuie sur » portera un tiret : c'est exact pour cette partie-là, aucun " +
        "chapitre BTS n'étant utilisé ici. Mais tout repose sur les <strong>puissances</strong> " +
        "($1{,}04^3$ est le calcul des douze exercices) et surtout sur le passage d'un " +
        "<strong>pourcentage à un coefficient multiplicateur</strong> — $5\\,\\%$ donne $1{,}05$, " +
        "et c'est LA difficulté d'entrée du chapitre. Le <strong>logarithme</strong> est en outre " +
        "nécessaire pour la recherche de durée. Tout cela est dans la <strong>remise à " +
        "niveau</strong>, l'autre partie de l'ouvrage. Un prérequis ne pouvant viser qu'un " +
        "chapitre de la même partie, <strong>rien ne le montrera</strong> : si le groupe écrit " +
        "$1{,}5$ pour $5\\,\\%$, c'est là qu'il faut revenir, pas dans ce chapitre.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "elle est subtile.</strong> Les douze énoncés numérotés sont <strong>tous le même " +
        "exercice</strong> : $C_n = C_0(1+t)^n$ en intérêts composés. Mais le vrai problème n'est " +
        "pas la répétition — c'est le <strong>domaine des valeurs tirées</strong> : des durées de " +
        "$2$ à $4$ ans et des taux de $2$ à $5\\,\\%$. Or c'est précisément la zone où intérêts " +
        "simples et composés donnent <strong>presque le même résultat</strong> : sur $3000$ € à " +
        "$3\\,\\%$ pendant $2$ ans, l'écart entre les deux formules est de <strong>$2{,}70$ €</strong>. " +
        "Le cours affirme — à juste titre — que la capitalisation fait une « énorme différence » ; " +
        "aucun de ses douze exercices ne permet de le constater. Un étudiant appliquant la " +
        "mauvaise formule tomberait à quelques euros de la bonne réponse et ne s'en apercevrait " +
        "jamais.<br/><br/>" +
        "Ne sont travaillés nulle part non plus : les <strong>intérêts simples</strong>, les " +
        "<strong>annuités constantes</strong>, la <strong>valeur acquise</strong> d'une suite de " +
        "versements, l'<strong>amortissement</strong>, la recherche de <strong>durée</strong> par " +
        "logarithme. Or ce sont <strong>quatre des cinq questions du devoir noté</strong>. " +
        "L'exemple résolu du cours (l'épargne de $200$ € par mois sur $20$ ans, qui rapporte " +
        "$41\\,\\%$ de plus que les versements) fait, lui, apparaître la capitalisation dans toute " +
        "son ampleur : <strong>c'est lui qu'il faut prendre comme modèle</strong>. Prévoir " +
        "impérativement un exercice sur $20$ ou $30$ ans, où la différence saute aux yeux.",

  erreurs: [
    {
      titre: "Confondre intérêts simples et intérêts composés",
      eleve: "Sur $3000$ € à $4\\,\\%$ pendant $2$ ans, l'élève calcule " +
             "$3000 \\times (1 + 2 \\times 0{,}04) = 3240$ € au lieu de " +
             "$3000 \\times 1{,}04^2 = 3244{,}80$ €. L'écart est de $4{,}80$ € : l'erreur passe " +
             "totalement inaperçue.",
      cause: "Les deux formules se ressemblent — $C_0(1 + nt)$ et $C_0(1+t)^n$ — et ne diffèrent " +
             "que par la position du $n$ : facteur dans l'une, exposant dans l'autre. L'écriture " +
             "linéaire est en outre la plus intuitive : « $4\\,\\%$ par an pendant $2$ ans, donc " +
             "$8\\,\\%$ » est un raisonnement de bon sens, que la vie courante confirme " +
             "constamment. L'idée que <strong>les intérêts produisent eux-mêmes des intérêts</strong> " +
             "est au contraire un mécanisme à comprendre, pas une évidence. Mais la cause la plus " +
             "lourde ici est <strong>dans le support</strong> : avec des durées de $2$ à $4$ ans et " +
             "des taux de $2$ à $5\\,\\%$, l'écart entre les deux formules est de quelques euros. " +
             "L'étudiant qui se trompe obtient une réponse presque juste, ne reçoit aucun signal, " +
             "et consolide l'erreur exercice après exercice.",
      remede: "Faire construire le <strong>tableau année par année</strong>, une fois, avant toute " +
              "formule : année 1, intérêts sur $3000$ ; année 2, intérêts sur " +
              "<strong>$3120$</strong> — et non plus sur $3000$. La différence apparaît là, à la " +
              "deuxième ligne, et elle devient évidente : on gagne des intérêts sur des intérêts " +
              "déjà gagnés. Trois lignes de tableau valent mieux que la formule.<br/><br/>" +
              "Forcer l'<strong>écart à devenir visible</strong> en sortant du domaine des " +
              "exercices, car c'est le seul moyen : le chapitre tire des durées de $2$ à $4$ ans, " +
              "où l'écart se compte en euros. Poser une seule fois la question sur " +
              "<strong>$30$ ans à $5\\,\\%$</strong> : les intérêts simples donnent " +
              "$2{,}5 \\times C_0$, les composés $4{,}32 \\times C_0$ — près du double. C'est le " +
              "chiffre du récapitulatif du cours, et il est indispensable de le faire calculer " +
              "réellement, pas seulement de le lire.<br/><br/>" +
              "Ancrer sur la <strong>règle des $72$</strong>, qui frappe et qui sert : un capital " +
              "double en environ $72/t$ années — $12$ ans à $6\\,\\%$, $24$ ans à $3\\,\\%$. Cette " +
              "règle n'existe QUE pour les intérêts composés ; en simples, doubler à $6\\,\\%$ " +
              "demanderait $16{,}7$ ans. Un étudiant qui a calculé les deux une fois ne confond " +
              "plus jamais — et il dispose d'un repère qu'il utilisera dans sa vie personnelle, ce " +
              "qui n'est pas le moindre des intérêts de ce chapitre.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 23) : l'exercice 3 est la PME plaçant 3000 € à 5 %
         pendant 4 ans, réponse 3647 €. C'est le meilleur support de cette
         erreur PARMI CEUX DU TIRAGE, et le choix demande une justification
         honnête :
           - il porte la durée la plus longue (4 ans) ET le taux le plus élevé
             (5 %) du tirage, donc c'est l'exercice où l'écart entre les deux
             formules est MAXIMAL : intérêts simples donneraient
             3000 × 1,20 = 3600 € contre 3647 € en composés, soit 47 € — près
             de 1,3 % du capital. C'est peu, mais c'est huit fois plus que sur
             l'exercice 11 (3000 € à 2 % sur 2 ans, écart 3,60 €) ;
           - l'écart de 47 € est enfin assez grand pour être remarqué à la
             correction, ce qui n'est vrai d'aucun autre énoncé du tirage.
             C'est la raison décisive du choix ;
           - il reste vrai, et c'est dit dans le remède, que 47 € ne suffit
             pas à faire sentir l'ampleur du phénomène. L'exercice sert donc
             de POINT DE DÉPART — « voyez, il y a déjà un écart » — et
             l'enseignant doit enchaîner sur les 30 ans du deuxième
             paragraphe. Le renvoi est légitime (l'exercice fait bien
             appliquer la formule des composés, donc il travaille l'erreur)
             mais il n'est pas suffisant à lui seul, et il faut le savoir.
         Les exercices 6 (3000 € à 5 % sur 3 ans) et 7 (5000 € à 4 % sur
         3 ans) sont les suivants dans l'ordre d'écart. Distinct du renvoi de
         l'erreur 3 (exercice 4), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Se tromper en passant du pourcentage au coefficient multiplicateur",
      eleve: "Sur un taux de $4\\,\\%$, l'élève écrit $C_n = 3000 \\times 4^2$, ou " +
             "$3000 \\times 0{,}04^2$, ou $3000 \\times 1{,}4^2$. Les trois donnent des résultats " +
             "absurdes — $48\\,000$ €, $4{,}80$ € et $5880$ € — mais il les rend sans les " +
             "regarder.",
      cause: "Le passage de « $4\\,\\%$ » à « $\\times 1{,}04$ » est une <strong>double " +
             "transformation</strong> qui n'a rien d'évident : diviser par $100$, puis ajouter $1$. " +
             "Chacune des deux peut sauter, et l'oubli du $+1$ est le plus fréquent — il " +
             "correspond à calculer les intérêts seuls au lieu du capital final, ce qui est une " +
             "confusion de <strong>nature</strong> et non de calcul. L'erreur $1{,}4$ au lieu de " +
             "$1{,}04$ est une faute de placement de virgule, banale mais dévastatrice ici, " +
             "puisqu'elle multiplie le taux par dix. Chez un public d'adultes qui manipulent " +
             "pourtant des pourcentages tous les jours — remises, TVA, augmentations — cette " +
             "difficulté surprend souvent l'enseignant : la pratique courante des pourcentages est " +
             "<strong>additive</strong> (« $20\\,\\%$ de remise, donc je retire $20$ € sur $100$ »), " +
             "pas multiplicative, et c'est le passage au coefficient qui n'a jamais été installé.",
      remede: "Imposer l'<strong>écriture du coefficient sur sa propre ligne</strong>, avant tout " +
              "calcul : « $t = 4\\,\\% = 0{,}04$, donc $1 + t = 1{,}04$ ». Deux lignes de " +
              "dépouillement qui règlent la question avant qu'elle ne se pose, et qui permettent " +
              "de repérer l'erreur d'un coup d'œil à la correction, sans lire tout le " +
              "calcul.<br/><br/>" +
              "Expliquer le <strong>$1$</strong> par son sens, car c'est lui qui manque le plus " +
              "souvent : il représente le <strong>capital qu'on garde</strong>. " +
              "$1{,}04 = 100\\,\\%$ (ce que j'avais) $+\\ 4\\,\\%$ (ce que je gagne). Sans le $1$, " +
              "on ne calcule que les intérêts et on a perdu le capital — ce qui, dit ainsi, se " +
              "remarque immédiatement.<br/><br/>" +
              "Installer un <strong>contrôle d'ordre de grandeur</strong> qui attrape les trois " +
              "variantes d'un coup : sur quelques années à un taux de quelques pour cent, le " +
              "capital final doit être <strong>légèrement supérieur</strong> au capital initial — " +
              "de quelques pour cent par an, jamais du double ni du dixième. Sur $3000$ € à " +
              "$4\\,\\%$ pendant $2$ ans, la réponse est <strong>entre $3000$ et $3400$ €</strong>. " +
              "$48\\,000$ €, $4{,}80$ € et $5880$ € sont tous les trois éliminés sans le moindre " +
              "calcul. C'est aussi le réflexe d'un professionnel de la banque : on estime avant de " +
              "calculer, et on ne présente jamais au client un chiffre qu'on n'a pas su prévoir " +
              "grossièrement.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 est la
         coopérative agricole plaçant 2000 € à 2 % pendant 4 ans, réponse
         2165 €. C'est le meilleur support de cette erreur, et le taux de 2 %
         en est la raison principale :
           - 2 % est le PLUS PETIT taux du tirage, donc celui où les trois
             variantes de l'erreur donnent les résultats les plus
             spectaculairement faux : ×2² = 8000 €, ×0,02⁴ = 0,00032 €,
             ×1,2⁴ = 4147 € — contre 2165 € attendus. Le contrôle d'ordre de
             grandeur du remède se démontre dessus sans discussion ;
           - c'est surtout le taux où la confusion virgule est la PLUS
             coûteuse en valeur relative : écrire 1,2 au lieu de 1,02
             multiplie le taux par dix et double presque le résultat, alors
             que sur 5 % (1,5 au lieu de 1,05) l'effet, quoique grand, est
             moins caricatural ;
           - la durée de 4 ans, la plus longue du tirage, amplifie chacune de
             ces erreurs par l'exposant, ce qui les rend encore plus visibles ;
           - le capital 2000 € est rond, donc la vérification mentale
             « entre 2000 et 2200 € » est immédiate.
         L'exercice 4 porte aussi 2 % mais sur 2 ans (5000 €, réponse 5202 €)
         et il est réservé à l'erreur 3. Distinct des trois autres renvois de
         la fiche, conformément à la règle du projet. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Rendre un capital final sans dire ce qu'il rapporte",
      eleve: "L'élève écrit « $5202$ € » et s'arrête là. Interrogé sur ce que le placement a " +
             "rapporté, il ne sait pas le dire sans refaire un calcul — alors que c'est " +
             "$5202 - 5000 = 202$ €, et que c'est le seul chiffre qui intéresse le client.",
      cause: "L'énoncé demande la valeur acquise et l'élève donne la valeur acquise : il répond " +
             "exactement à ce qu'on lui demande, et l'habitude scolaire veut que la réponse soit le " +
             "résultat du calcul. Ce n'est pas une négligence, c'est un <strong>contrat " +
             "implicite</strong>. Mais il y a ici une seconde cause, propre au sujet : le capital " +
             "final et le gain sont deux nombres d'<strong>ordres de grandeur très " +
             "différents</strong> — $5202$ contre $202$ — et le grand nombre masque le petit. " +
             "L'étudiant qui voit $5202$ a le sentiment d'un résultat substantiel, alors que la " +
             "performance réelle du placement tient dans les $202$ €, soit $4\\,\\%$ en deux ans. " +
             "C'est exactement l'illusion que la communication financière exploite.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion à trois nombres</strong> : " +
              "le capital final, le <strong>gain</strong>, et le gain rapporté au capital initial. " +
              "« Le placement rapporte $202$ € sur $5000$ €, soit $4{,}04\\,\\%$ en deux ans » " +
              "plutôt que « $5202$ € ». C'est ce que l'épreuve attend, et c'est littéralement ce " +
              "qu'un conseiller doit dire à son client.<br/><br/>" +
              "Faire calculer <strong>systématiquement l'intérêt total</strong> $C_n - C_0$, même " +
              "quand l'énoncé ne le demande pas : c'est un ajout de cinq secondes qui double la " +
              "valeur de l'exercice et prépare aux questions en deux temps de l'examen. C'est aussi " +
              "le seul chiffre comparable d'un placement à l'autre — les capitaux initiaux " +
              "diffèrent, les gains relatifs se comparent.<br/><br/>" +
              "Introduire enfin, à cette occasion, la question que personne ne pose et qui change " +
              "tout : <strong>que vaut ce gain face à l'inflation ?</strong> Un placement à " +
              "$2\\,\\%$ dans une économie à $2\\,\\%$ d'inflation ne rapporte rigoureusement " +
              "<strong>rien</strong> en pouvoir d'achat — le capital nominal grossit, le capital " +
              "réel stagne. La distinction entre taux nominal et taux réel n'est pas au programme, " +
              "mais la mentionner une fois transforme la perception qu'ont les étudiants de tout " +
              "le chapitre, et c'est une compétence de citoyen autant que de technicien.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 est la
         coopérative agricole plaçant 5000 € à 2 % pendant 2 ans, réponse
         5202 €. Le renvoi est utilisable pour cette erreur alors même que
         tous les exercices partagent le même moule, et c'est assumé :
         l'erreur ne porte pas sur le RÉSULTAT (5202 sera juste) mais sur la
         LECTURE, et l'enseignant peut exiger la phrase de conclusion sur cet
         énoncé précis.
         Choix du 4 plutôt qu'un autre, pour trois raisons de contenu :
           - le gain, 202 €, se calcule de tête à partir de 5202 et 5000 : la
             conclusion exigée par le remède ne coûte donc aucun effort de
             calcul et ne peut pas être refusée pour raison de temps ;
           - c'est le plus GROS capital du tirage (5000 €) associé au plus
             PETIT taux (2 %), donc l'écart entre le nombre affiché (5202,
             impressionnant) et le gain réel (202, modeste) est maximal : le
             contraste sur lequel repose toute la `cause` se démontre là ;
           - c'est enfin le meilleur support du troisième paragraphe du
             remède : à 2 % sur deux ans, l'inflation de la période efface
             exactement le gain, et la question du taux réel se pose d'elle-
             même. Sur un exercice à 5 % (le 3, le 6, le 10) la remarque
             passerait pour un détail.
         L'exercice 7 (5000 € à 4 % sur 3 ans, 5624 €) conviendrait aussi mais
         son gain de 624 € est moins propice à la démonstration. Distinct des
         trois autres renvois de la fiche. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Confondre un versement unique et une suite de versements",
      eleve: "Sur « on place $500$ € chaque année pendant $5$ ans à $3\\,\\%$ », l'élève applique " +
             "$C_n = C_0(1+t)^n$ avec $C_0 = 500$ et trouve $580$ €, ou avec " +
             "$C_0 = 500 \\times 5 = 2500$ € et trouve $2898$ €. La bonne réponse est $2655$ €, et " +
             "aucun des deux calculs n'en approche.",
      cause: "Les douze exercices du chapitre portent tous sur un <strong>versement unique</strong> " +
             "qui fructifie. L'étudiant a donc douze fois appliqué $C_0(1+t)^n$, et c'est la seule " +
             "formule qu'il ait pratiquée. Devant un énoncé nouveau, il applique l'outil qu'il " +
             "possède — comportement rationnel, et l'erreur est donc dans le support avant d'être " +
             "dans la copie. La difficulté de fond est réelle : quand on verse $500$ € chaque " +
             "année pendant $5$ ans, <strong>chaque versement fructifie pendant une durée " +
             "différente</strong> — le premier pendant $5$ ans, le dernier pendant aucune. Il " +
             "faut donc sommer cinq termes, et c'est cette somme que la formule de la valeur " +
             "acquise abrège. Additionner les versements puis capitaliser le total revient à " +
             "supposer que tout a été versé au début, ce qui est faux.",
      remede: "Faire <strong>écrire les cinq termes à la main</strong>, une seule fois, avant de " +
              "donner la formule : $500 \\times 1{,}03^4 + 500 \\times 1{,}03^3 + \\ldots + 500$. " +
              "On voit alors deux choses d'un coup : que les exposants <strong>décroissent</strong>, " +
              "et que le dernier versement ne rapporte rien. Les cinq lignes écrites valent tous " +
              "les commentaires, et la formule $a\\dfrac{(1+t)^n - 1}{t}$ apparaît ensuite comme " +
              "un raccourci, pas comme une règle de plus.<br/><br/>" +
              "Installer un <strong>triage préalable en deux questions</strong>, à poser avant " +
              "tout calcul : <strong>combien de versements ?</strong> Un seul, c'est " +
              "$C_0(1+t)^n$. Plusieurs, c'est la valeur acquise $a\\dfrac{(1+t)^n - 1}{t}$. Et " +
              "s'il s'agit de rembourser plutôt que d'épargner, c'est l'annuité " +
              "$a = C_0\\dfrac{t}{1-(1+t)^{-n}}$. Trois situations, trois formules, une question " +
              "pour trancher.<br/><br/>" +
              "Ajouter un <strong>contrôle d'encadrement</strong> qui ne coûte rien et qui attrape " +
              "les deux variantes : la valeur acquise de $n$ versements de $a$ est " +
              "nécessairement <strong>comprise entre $n \\times a$</strong> (le total versé, si le " +
              "taux était nul) <strong>et $n \\times a \\times (1+t)^n$</strong> (si tout avait été " +
              "versé au début). Sur l'exemple, entre $2500$ € et $2898$ € : $2655$ € passe, $580$ € " +
              "et $2898$ € sont éliminés. Lecture métier : c'est exactement le raisonnement qu'on " +
              "tient devant un plan d'épargne — le capital accumulé est toujours supérieur à la " +
              "somme versée, et toujours inférieur à ce qu'aurait donné un versement unique au " +
              "départ.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés portent TOUS sur un versement unique. Les mots
         « chaque année », « annuité », « versement périodique » et « valeur
         acquise d'annuités » n'apparaissent dans aucun des douze énoncés :
         tous disent « place 3000 € » ou « verse 3000 € » au singulier, une
         fois, et demandent la valeur après n années. Il est donc
         structurellement impossible qu'un de ces exercices fasse rencontrer
         la distinction — et, pire, les douze CONSTRUISENT l'automatisme
         C_0(1+t)^n qui est précisément la source de l'erreur. Pointer l'un
         d'eux ne remédierait pas à l'erreur, il la consoliderait. Les
         questions 3 et 4 de l'évaluation la travaillent (annuité constante
         puis valeur acquise), mais une remédiation ne renvoie jamais vers le
         devoir noté. Le remède ramène donc à l'exemple résolu du cours
         (l'épargne de 2400 €/an sur 20 ans, qui fait le calcul complet et
         montre les 19 872 € de gain) et à la méthode 4, et demande à
         l'enseignant de fabriquer le support. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $8\,000$ € à $4\,\%$ pendant $3$ ans, calculer la valeur acquise.
          C'est exactement la tâche des douze exercices : appliquer
          $C_0(1+t)^n$. Exécution d'une procédure connue sur des nombres
          donnés : « calculer ».
     Q2 — la durée pour doubler un capital est donnée par : $2/t$,
          $\ln 2/\ln(1+t)$, $1/(2t)$, $t/\ln 2$ ? Aucun calcul n'est demandé.
          Il faut reconnaître laquelle des quatre expressions résout
          $(1+t)^n = 2$, c'est-à-dire suivre le passage au logarithme et
          écarter trois formules qui ne s'en déduisent pas. C'est un jugement
          sur la validité d'une transformation : « raisonner ».
     Q3 — emprunt de $20\,000$ € à $5\,\%$ sur $4$ ans, calculer l'annuité.
          La formule $a = C_0 \dfrac{t}{1-(1+t)^{-n}}$ est ÉCRITE dans
          l'énoncé : il ne reste que l'application numérique, avec un exposant
          négatif. Aucun choix de méthode : « calculer ».
     Q4 — $500$ € par an pendant $5$ ans à $3\,\%$, calculer la valeur acquise.
          La formule $V = a\dfrac{(1+t)^n - 1}{t}$ est également ÉCRITE dans
          l'énoncé — ce qui retire à la question l'essentiel de sa difficulté,
          puisque le choix entre versement unique et suite de versements (voir
          l'erreur 4 de cette fiche) est ainsi tranché par le rédacteur.
          Il ne reste qu'une application numérique : « calculer ».
     Q5 — d'où vient la différence entre intérêts simples et composés sur
          $10$ ans ? Les quatre options proposent « aucune différence »,
          « la capitalisation », « l'inflation », « seulement au-dessus de
          $10\,\%$ ». Aucun calcul : il faut identifier le MÉCANISME qui
          produit l'écart et écarter trois explications plausibles mais
          fausses, dont une (l'inflation) relève d'un autre phénomène
          entièrement. « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 2. « chercher »,
     « modéliser », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de mettre une situation
     en équation, de produire ou lire un graphique, ni de rédiger une
     explication. C'est un constat sur les cinq énoncés, pas un choix — et il
     rejoint celui du corpus entier, dont les 130 questions sont toutes
     `numeric` ou à choix multiple.

     À signaler, parce que c'est l'occasion manquée la plus nette du devoir :
     les Q3 et Q4 FOURNISSENT leur formule dans l'énoncé. Or le geste difficile
     de ce chapitre n'est pas d'appliquer une formule financière, c'est de
     CHOISIR laquelle des quatre convient — versement unique, valeur acquise,
     annuité, amortissement. En donnant la formule, les deux questions
     suppriment précisément ce qu'elles pourraient évaluer, et « modéliser »
     reste à 0 alors que c'est la compétence centrale du chapitre. Un
     enseignant qui veut l'évaluer n'a qu'à reprendre les mêmes énoncés en
     retirant la formule. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "calculer", "raisonner"]
  }
};
