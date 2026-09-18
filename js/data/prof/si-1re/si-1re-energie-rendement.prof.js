/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-energie-rendement.prof.js
   Fiche professeur du chapitre « Énergie et rendement des systèmes »
   (première SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 10 (chapitre 11 du livre `lycee-si`).

   36 énoncés tirés, dont 12 numérotés et 24 en banque supplémentaire. C'est le
   deuxième chapitre le mieux doté du dossier, derrière la POO (42).

   TROIS MOULES, qui tournent régulièrement, relevés énoncé par énoncé sur les
   quatorze premiers tirages :
     - puissance utile, $P_u = \eta \times P_a$ : exercices 1, 4, 8, 11 ;
     - rendement, $\eta = P_u / P_a$ en %        : exercices 2, 5, 7, 10 ;
     - pertes, $P_{\text{pertes}} = P_a - P_u$   : exercices 3, 6, 9, 12.
   Quatre contextes tournent (pompe hydraulique, compresseur d'air, moteur de
   véhicule électrique, moteur électrique industriel).

   LE DÉSÉQUILIBRE MESURÉ, et il gouverne cette fiche : les 36 énoncés
   travaillent la CHAÎNE DE PUISSANCE ($P_a$, $P_u$, pertes, $\eta$) et rien
   d'autre. Aucun ne calcule une énergie cinétique, aucun une énergie
   potentielle, aucun un rendement GLOBAL de chaîne (produit de rendements),
   aucun ne fait intervenir le temps ($E = P \times t$).
   Or l'évaluation demande $E_c$ (Q1), un rendement global de trois
   convertisseurs (Q3), la relation $E = P \times t$ (Q4) et $E_p$ (Q5) : donc
   QUATRE questions sur cinq portent sur ce que les exercices n'abordent
   jamais, et la seule qui relève du moule des exercices est la Q2.
   Le quiz, lui, traite le rendement global (Q1) et la conversion kWh → J
   (Q3) : il comble deux des quatre trous.
   Conséquence : deux renvois d'exercice, un renvoi au quiz, un `null` motivé.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-energie-rendement"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     ch. 2 (Cinématique du solide) : RETENU. La question 1 de l'évaluation
     demande l'énergie cinétique d'une voiture de $1200$ kg roulant à $20$
     m/s, et la définition D1 du cours pose $E_c = \frac{1}{2}mv^2$ : la
     VITESSE est une donnée d'entrée du chapitre, avec son unité SI (m/s) et
     son ordre de grandeur. Un élève qui n'a pas travaillé la cinématique ne
     sait pas d'où sort ce $v$, ni pourquoi il doit être en m/s et non en
     km/h — et il élèvera au carré une valeur en km/h. Le lien est
     opératoire, pas thématique.

     ch. 1 (SysML) : RETENU, et c'est le prérequis structurant du chapitre.
     Tout ce chapitre raisonne sur une CHAÎNE DE PUISSANCE lue comme une
     suite de blocs, avec un flux d'énergie qui entre ($P_a$), un flux qui
     sort ($P_u$) et un flux qui fuit (les pertes). La conservation
     $P_a = P_u + P_{\text{pertes}}$ EST un bilan de flux sur un bloc, et la
     mise en série de rendements (quiz 1, question 3 du devoir) est la lecture
     d'un enchaînement de blocs. La distinction des flux (énergie, matière,
     information) que SysML installe est exactement l'outil qui permet de ne
     pas confondre ce qui entre et ce qui sort. Deux prérequis déclarés, et
     les deux sont en amont (rangs 1 et 2 contre rang 6).

     Candidats examinés et ÉCARTÉS :
     - ch. 5 (Asservissement) : la parenté est réelle — les deux chapitres
       lisent un schéma-bloc, et le rendement d'une chaîne de puissance
       PILOTÉE est un sujet naturel. Mais aucun des 36 énoncés ne comporte de
       consigne, d'écart ni de boucle de retour, et l'asservissement ne parle
       jamais de puissance. Écarté — c'est toutefois un rapprochement utile à
       faire à l'oral, puisque les deux chapitres se suivent dans la
       progression conseillée (rangs 5 et 6).
     - ch. 3 (Statique) : la notion de travail d'une force ferait le pont,
       mais ce chapitre ne calcule aucun travail, et la statique aucun
       déplacement. Écarté.
     - ch. 4 (Boole), ch. 7 (RDM), ch. 8 (POO) : aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : le POURCENTAGE et le
     passage $69\% \leftrightarrow 0{,}69$ (tous les énoncés du premier moule
     le demandent), le carré d'un nombre décimal ($v^2$), et les puissances
     de $10$ pour les conversions ($1$ kWh $= 3{,}6 \times 10^6$ J). Notions
     de mathématiques, non déclarables ici. */
  prerequis: [1, 2],

  /* Rang conseillé (2026-09-17) : rang 6, celui du livre. L'ordre complet des
     huit rangs du dossier est justifié une fois dans
     `si-1re-sysml.prof.js` (rang 1).

     Le rang 6 respecte les deux prérequis déclarés — SysML (rang 1) et la
     cinématique (rang 2) — avec une large marge, ce qui est confortable : la
     vitesse aura été travaillée quatre chapitres plus tôt. Il place aussi ce
     chapitre juste après l'asservissement (rang 5), ce qui permet de lire la
     même chaîne de puissance sous deux angles successifs : d'abord comment on
     la pilote, ensuite ce qu'elle coûte en pertes. Enfin il le place avant la
     RDM (rang 7) et la POO (rang 8), qui n'en dépendent pas.

     Le livre le range en chapitre 11 de l'ouvrage, soit le 6e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 6,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 6 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser les flux et le rendement d'une chaîne d'énergie ».

     Bornés à ce que le chapitre traite VRAIMENT : les formes d'énergie
     citées, la conservation, la puissance, le rendement d'un maillon et
     d'une chaîne. Rien sur les bilans thermiques détaillés, rien sur le
     stockage, rien sur le rendement exergétique — non cités par le cours.
     Citer un attendu sur le rendement de Carnot serait citer ce que le
     chapitre n'enseigne pas. */
  attendus: [
    "Identifier les formes d'énergie mises en jeu dans un système et les flux échangés entre ses constituants",
    "Établir un bilan de puissance sur un convertisseur en appliquant la conservation de l'énergie, et en déduire les pertes",
    "Déterminer le rendement d'un convertisseur puis d'une chaîne de conversion, et comparer le résultat aux ordres de grandeur industriels"
  ],

  note: "Les formes d'énergie, la conservation " +
        "($P_{\\text{absorbée}} = P_{\\text{utile}} + P_{\\text{pertes}}$), la puissance comme " +
        "débit d'énergie, le rendement d'un maillon puis d'une chaîne : le chapitre installe le " +
        "bilan énergétique, qui est le regard de l'ingénieur sur n'importe quel " +
        "système.<br/><br/>" +
        "<strong>Ce chapitre est le socle d'un chapitre de Terminale.</strong> " +
        "<em>Énergie cinétique et dynamique</em> le prolonge directement. La colonne " +
        "« S'appuie sur » de ce chapitre-là affichera un tiret, parce qu'un prérequis ne peut " +
        "désigner qu'un chapitre du <strong>même niveau</strong> — la dépendance est réelle mais " +
        "n'est pas déclarable dans les données. Si vous enseignez les deux années, ne bâclez pas " +
        "la définition de $E_c$ ici : c'est là qu'elle se joue.<br/><br/>" +
        "<strong>Trois prérequis hors SI, à vérifier avant de commencer.</strong> Le passage du " +
        "<strong>pourcentage au coefficient</strong> ($69\\%$ devient $0{,}69$), qui est demandé " +
        "par un tiers des énoncés ; le <strong>carré d'un décimal</strong> pour $E_c$ ; et les " +
        "<strong>puissances de $10$</strong> pour la conversion $1$ kWh $= 3{,}6 \\times 10^6$ J. " +
        "Ces trois acquis relèvent des mathématiques et ne figurent pas dans la colonne des " +
        "prérequis, qui ne peut désigner que des chapitres de SI.<br/><br/>" +
        "<strong>LE DÉSÉQUILIBRE À CONNAÎTRE AVANT DE DISTRIBUER LES EXERCICES.</strong> " +
        "Le chapitre est richement doté — $36$ énoncés, dont $24$ en banque supplémentaire — mais " +
        "tous portent sur la <strong>chaîne de puissance</strong>, et sur elle seule : trouver " +
        "$P_u$, trouver $\\eta$, trouver les pertes. <strong>Aucun</strong> ne calcule une " +
        "<strong>énergie cinétique</strong> ou <strong>potentielle</strong>, aucun ne fait " +
        "intervenir le <strong>temps</strong> ($E = P \\times t$), aucun ne calcule un " +
        "<strong>rendement global de chaîne</strong>. Or ce sont <strong>quatre des cinq " +
        "questions du devoir noté</strong> ; la seule qui corresponde aux exercices est la " +
        "deuxième. C'est le décalage le plus large du dossier entre entraînement et " +
        "évaluation.<br/><br/>" +
        "<strong>Le quiz comble la moitié du trou, servez-vous-en.</strong> Sa première question " +
        "traite le rendement global de deux convertisseurs en série ($0{,}9 \\times 0{,}8$), sa " +
        "troisième la conversion kWh → J. Restent $E_c$ et $E_p$, pour lesquelles le manuel ne " +
        "fournit que les définitions du cours : prévoyez trois ou quatre énoncés de votre cru, " +
        "sans quoi vos élèves les découvriront le jour du devoir.",

  erreurs: [
    {
      titre: "Additionner les rendements d'une chaîne au lieu de les multiplier",
      eleve: "Un moteur à $90\\%$ entraîne un réducteur à $80\\%$ : l'élève annonce $170\\%$, ou " +
             "bien fait la moyenne et annonce $85\\%$.",
      cause: "Le mot « chaîne » suggère une accumulation, et l'élève cherche instinctivement à " +
             "combiner deux nombres par une addition ou une moyenne — les deux opérations qu'il " +
             "maîtrise. Ce qui manque est le raisonnement en CASCADE : le deuxième maillon ne " +
             "reçoit pas la puissance d'entrée du système, il reçoit ce que le premier lui a " +
             "laissé. C'est un raisonnement de proportion appliquée deux fois, et il n'est " +
             "spontané pour personne. Le résultat de $170\\%$ a d'ailleurs l'avantage d'être " +
             "absurde — un rendement supérieur à $1$ créerait de l'énergie.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 1 est bâti exactement sur cette erreur : « un moteur
         électrique ($\eta_1 = 90\%$) entraîne un réducteur ($\eta_2 = 80\%$),
         le rendement global est : », bonne réponse $72\%$, avec en
         distracteurs $170\%$ (l'addition) et $85\%$ (la moyenne) — les deux
         erreurs réelles, nommées. Sa correction donne en plus la règle de
         contrôle : « le rendement global est toujours inférieur au plus petit
         rendement individuel. On multiplie, on n'additionne pas. »
         COMPARÉ AUX CANDIDATS EXERCICES : MESURE FAITE sur les 36 énoncés
         tirés, aucun ne met en série deux convertisseurs. Les trois moules
         traitent un maillon UNIQUE : $P_u = \eta P_a$, $\eta = P_u/P_a$, ou
         les pertes. L'erreur ne peut donc pas s'y manifester, et un renvoi
         aurait été plausible et faux. Le quiz 1 est le seul support du livre
         qui la piège, et la question 3 de l'évaluation la travaille aussi
         (trois convertisseurs, $50{,}4\%$) — mais une remédiation ne renvoie
         jamais vers le devoir noté. */
      exercice: { type: "quiz", n: 1 },
      remede: "Le <strong>quiz $1$</strong> est fait pour cette erreur, et ses deux distracteurs " +
              "sont les deux réponses fausses réelles : $170\\%$ (on a additionné) et $85\\%$ (on " +
              "a fait la moyenne). La bonne réponse est $0{,}9 \\times 0{,}8 = 0{,}72$, soit " +
              "$72\\%$.<br/><br/>" +
              "Les exercices du chapitre ne vous aideront pas ici : les $36$ énoncés traitent " +
              "tous un <strong>maillon unique</strong>. Aucun ne met deux convertisseurs en série, " +
              "alors que le devoir noté le demande sur trois.<br/><br/>" +
              "Faites raisonner <strong>en cascade sur des watts, pas sur des pourcentages</strong> : " +
              "c'est le geste qui débloque tout. Je pars de $1000$ W. Le moteur en rend $90\\%$, " +
              "donc $900$ W. Le réducteur reçoit ces <strong>$900$ W</strong> — pas les $1000$ — et " +
              "en rend $80\\%$, donc $720$ W. Sur $1000$ W entrés, $720$ sortent : $72\\%$. " +
              "L'élève qui a fait ce calcul une fois n'additionne plus jamais.<br/><br/>" +
              "Installez enfin les <strong>deux contrôles gratuits</strong> que donne la " +
              "correction du quiz : un rendement global est toujours " +
              "<strong>inférieur au plus petit</strong> des rendements de la chaîne, et il ne " +
              "dépasse <strong>jamais $100\\%$</strong> — sans quoi la machine créerait de " +
              "l'énergie. Un élève qui annonce $170\\%$ peut le rejeter seul."
    },
    {
      titre: "Confondre puissance et énergie",
      eleve: "« Ce moteur consomme $1450$ W par heure. » Ou, devant un calcul d'énergie : l'élève " +
             "annonce un résultat en joules sans avoir multiplié par la durée.",
      cause: "Dans la langue courante, « consommation » désigne indifféremment les deux, et les " +
             "factures d'électricité parlent de kWh, une unité qui MÉLANGE une puissance et un " +
             "temps dans son nom. L'élève n'a donc aucun repère linguistique pour séparer un " +
             "<strong>débit</strong> (la puissance, en W) d'une <strong>quantité totale</strong> " +
             "(l'énergie, en J). L'encadré « piège » du cours est consacré à cette distinction. " +
             "S'y ajoute un fait mesuré du chapitre : les $36$ énoncés ne parlent QUE de " +
             "puissances, jamais de durées — l'élève n'a donc jamais eu à distinguer les deux.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ, sur mesure.
         MESURE FAITE : les 36 énoncés tirés ne contiennent AUCUNE durée et
         aucune énergie. Les trois moules manipulent exclusivement des
         puissances en watts ($P_a$, $P_u$, pertes) et un rendement sans
         unité. La relation $E = P \times t$ n'apparaît dans aucun énoncé ni
         dans aucune correction. Un élève qui confond énergie et puissance
         réussit donc les 36 exercices sans jamais rencontrer la difficulté :
         un renvoi aurait été un contresens, l'exercice n'exigeant pas ce
         qu'on reproche à l'élève de ne pas savoir.
         Le quiz 3 approche le sujet — il convertit $1$ kWh en $3{,}6 \times
         10^6$ J — mais il porte sur la CONVERSION D'UNITÉ d'énergie, pas sur
         la distinction puissance/énergie elle-même ; et le quiz 1 est déjà
         pris par l'erreur 1. Y renvoyer laisserait croire que la question est
         traitée alors qu'elle n'est qu'effleurée.
         La question 4 de l'évaluation porte exactement sur $E = P \times t$,
         mais une remédiation ne renvoie jamais vers le devoir noté.
         Donc `null`, franchement, et le remède ramène à l'encadré « piège »
         du cours, qui est le bon support, plus le geste de substitution. */
      exercice: null,
      remede: "Aucun exercice du chapitre ne peut montrer cela, et c'est important de le savoir : " +
              "les $36$ énoncés ne contiennent <strong>aucune durée</strong> et aucune énergie — " +
              "ils ne manipulent que des puissances en watts. Un élève qui confond les deux " +
              "notions réussit les $36$. L'encadré <strong>« piège »</strong> du cours est le " +
              "support à utiliser.<br/><br/>" +
              "L'analogie qui règle la question en une phrase, et elle est physique : " +
              "<strong>la puissance est un débit, l'énergie est une quantité</strong>. Le robinet " +
              "coule à $10$ litres par minute : c'est le débit, c'est la puissance. La baignoire " +
              "contient $200$ litres : c'est la quantité, c'est l'énergie. On ne dit pas « ma " +
              "baignoire fait $10$ L/min ».<br/><br/>" +
              "Le geste de substitution, et il coûte une minute : reprenez n'importe quel énoncé " +
              "du chapitre et <strong>ajoutez une durée</strong>. Sur l'exercice $4$ (moteur " +
              "industriel, $P_a = 1450$ W, $\\eta = 94\\%$, donc $P_u = 1363$ W), demandez " +
              "« et combien d'énergie utile en $10$ minutes ? » — réponse " +
              "$1363 \\times 600 = 818$ kJ environ. Le calcul est trivial, mais il force à " +
              "traverser la frontière entre les deux grandeurs.<br/><br/>" +
              "Imposez enfin le <strong>contrôle par l'unité</strong>, qui est infaillible : une " +
              "réponse en <strong>W</strong> est une puissance, une réponse en <strong>J</strong> " +
              "est une énergie. « $1450$ W par heure » ne veut rien dire, et l'élève peut le voir " +
              "seul — un débit ne se divise pas par un temps."
    },
    {
      titre: "Employer le rendement en pourcentage sans le convertir en coefficient",
      eleve: "Une pompe absorbe $P_a = 1750$ W avec $\\eta = 69\\%$. L'élève écrit " +
             "$P_u = 69 \\times 1750 = 120\\,750$ W — une puissance utile soixante-neuf fois " +
             "supérieure à la puissance absorbée.",
      cause: "L'énoncé donne « $69\\%$ », l'élève reporte $69$. Le symbole $\\%$ n'est pas lu " +
             "comme une opération (une division par $100$) mais comme une simple unité, au même " +
             "titre que « W » — et une unité, on la recopie. L'erreur est donc de lecture de " +
             "notation, pas de raisonnement sur l'énergie ; elle produit néanmoins un résultat " +
             "physiquement impossible, ce qui la rend détectable par l'élève lui-même s'il y " +
             "pense.",
      /* RENVOI VÉRIFIÉ. Exercice 1 du livre (graine 20260816 + 10, premier
         tirage) : pompe hydraulique, $P_a = 1750$ W, $\eta = 69\%$, donc
         $P_u = 0{,}69 \times 1750 = 1207{,}5$ W. La correction du tirage
         écrit la conversion EXPLICITEMENT dans sa première ligne —
         « On identifie : $P_a = 1750$ W, $\eta = 69\% = 0{,}69$ » — ce qui
         est précisément le geste que l'élève escamote.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 4, 8, 11) :
         tous trois portent la même ligne de conversion. Mais leurs rendements
         sont ÉLEVÉS — $94\%$ (ex. 4), $95\%$ (ex. 8), $90\%$ (ex. 11), donc
         des coefficients $0{,}94$ à $0{,}95$ très proches de $1$, où la
         puissance utile est presque égale à la puissance absorbée. Sur ces
         énoncés, l'élève voit mal ce que la conversion change. L'exercice 1,
         avec $\eta = 69\%$, est le seul des quatre dont le rendement est
         franchement inférieur à $1$ : $1207{,}5$ W contre $1750$ W, l'écart
         est visible, et l'erreur ($120\,750$ W) est spectaculairement
         absurde. C'est le meilleur support pour installer le contrôle de
         plausibilité du remède. */
      exercice: { type: "exercice", n: 1 },
      remede: "Faites traiter l'<strong>exercice $1$</strong> en recopiant sa première ligne telle " +
              "quelle, avant tout calcul : « $\\eta = 69\\% = 0{,}69$ ». La correction du livre " +
              "l'écrit explicitement, et c'est exactement l'étape que l'élève saute. Le résultat " +
              "est alors $P_u = 0{,}69 \\times 1750 = 1207{,}5$ W.<br/><br/>" +
              "Choisissez cet énoncé plutôt qu'un autre du même type, et pour une raison précise : " +
              "avec $\\eta = 69\\%$, la puissance utile ($1207{,}5$ W) est nettement inférieure à " +
              "la puissance absorbée ($1750$ W), donc la conversion se VOIT. Sur les exercices $4$, " +
              "$8$ et $11$, dont les rendements valent $94\\%$, $95\\%$ et $90\\%$, l'écart est si " +
              "faible que rien ne saute aux yeux.<br/><br/>" +
              "Donnez le sens du symbole, une fois pour l'année : <strong>$\\%$ veut dire " +
              "« divisé par cent »</strong>, ce n'est pas une unité mais une opération. " +
              "$69\\% = \\dfrac{69}{100} = 0{,}69$. Un élève qui lit le symbole comme une consigne " +
              "de calcul ne l'oublie plus.<br/><br/>" +
              "Installez le <strong>contrôle de plausibilité</strong>, qui rattrape tout seul et " +
              "qui vaut pour tout le chapitre : <strong>la puissance utile est toujours plus " +
              "petite que la puissance absorbée</strong>. Un élève qui trouve $120\\,750$ W en " +
              "sortie d'une pompe qui en absorbe $1750$ a fabriqué de l'énergie : c'est " +
              "impossible, et il peut le voir avant de rendre sa copie. Posez la question à chaque " +
              "correction — « ta sortie est plus petite que ton entrée ? »"
    },
    {
      titre: "Prendre les pertes pour la puissance utile (ou l'inverse)",
      eleve: "Un système absorbe $800$ W et perd $200$ W : l'élève annonce un rendement de " +
             "$200/800 = 25\\%$. Ou bien, devant « $P_a = 4100$ W, $P_u = 3034$ W, calcule les " +
             "pertes », il divise au lieu de soustraire.",
      cause: "Trois grandeurs circulent dans le chapitre — $P_a$, $P_u$ et $P_{\\text{pertes}}$ — " +
             "et deux relations les lient. L'élève sait qu'il faut « faire quelque chose avec deux " +
             "des trois », mais il reconstitue au hasard laquelle. Le vocabulaire n'aide pas : " +
             "« perdue » et « utile » sont deux adjectifs, rien dans les mots ne dit laquelle des " +
             "deux va au numérateur du rendement. C'est un défaut de représentation de la chaîne " +
             "d'énergie plutôt qu'un défaut de calcul : l'élève n'a pas d'image de ce qui entre, " +
             "de ce qui sort et de ce qui fuit.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 10, troisième
         tirage) : moteur de véhicule électrique, $P_a = 38\,350$ W,
         $P_u = 34\,131{,}5$ W, pertes demandées. La correction du tirage
         nomme la LOI avant de calculer — « Conservation de l'énergie :
         $P_{\text{pertes}} = P_a - P_u$ », puis $38\,350 - 34\,131{,}5 =
         4\,218{,}5$ W — ce qui met sous les yeux les trois grandeurs et leur
         relation, exactement l'image qui manque.
         C'est aussi le PREMIER énoncé du moule « pertes » dans le livre.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 6, 9, 12) :
         tous conviendraient structurellement, mais l'exercice 3 a un avantage
         mesuré et décisif pour CETTE erreur — ses pertes ($4\,218{,}5$ W) ne
         représentent qu'environ $11\%$ de la puissance absorbée, très loin de
         la puissance utile. Un élève qui les confond obtient donc un
         rendement de $11\%$ pour un moteur électrique, ce que le cours signale
         comme impossible (un moteur électrique est à $85$-$95\%$) : l'erreur
         se dénonce elle-même. Sur l'exercice 9 ($P_a = 4100$, $P_u = 3034$,
         pertes $1066$), le rapport est de $26\%$, moins flagrant ; sur
         l'exercice 6 ($1800$ et $1458$, pertes $342$), les nombres sont plus
         petits et le contraste moins parlant. Distinct du renvoi de l'erreur 3
         (exercice 1), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'<strong>exercice $3$</strong> en recopiant d'abord la loi, comme le " +
              "fait sa correction : « Conservation de l'énergie : " +
              "$P_{\\text{pertes}} = P_a - P_u$ ». Puis le calcul : " +
              "$38\\,350 - 34\\,131{,}5 = 4\\,218{,}5$ W. La loi écrite avant les nombres, c'est " +
              "l'étape qui empêche de reconstituer la relation au hasard.<br/><br/>" +
              "Imposez le <strong>schéma des trois flèches</strong> avant tout calcul, et gardez-le " +
              "toute la séquence : une flèche qui <strong>entre</strong> ($P_a$), une flèche qui " +
              "<strong>sort tout droit</strong> ($P_u$), une flèche qui <strong>fuit sur le " +
              "côté</strong> ($P_{\\text{pertes}}$, en chaleur). Trois secondes de dessin, et les " +
              "deux relations deviennent évidentes : ce qui entre se partage en deux " +
              "($P_a = P_u + P_{\\text{pertes}}$), et le rendement compare ce qui sort tout droit à " +
              "ce qui est entré.<br/><br/>" +
              "Faites de la définition du rendement une <strong>phrase, pas une fraction</strong> : " +
              "« le rendement, c'est ce que j'obtiens divisé par ce que j'ai payé ». On ne divise " +
              "jamais par ce qu'on a perdu — personne ne paie ses pertes " +
              "volontairement.<br/><br/>" +
              "Utilisez enfin les <strong>ordres de grandeur du cours comme contrôle</strong>, ce " +
              "que cet exercice permet particulièrement bien : les pertes trouvées " +
              "($4\\,218{,}5$ W) représentent $11\\%$ de la puissance absorbée. Un élève qui les " +
              "prendrait pour la puissance utile annoncerait un rendement de $11\\%$ pour un " +
              "moteur électrique — or le cours dit $85$ à $95\\%$. L'erreur se dénonce " +
              "d'elle-même, à condition d'avoir appris à comparer son résultat au réel."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 (énergie cinétique d'une voiture de $1200$ kg à $20$ m/s → $240\,000$
        J) → résoudre : application directe de $E_c = \frac{1}{2}mv^2$. À
        signaler : aucun des 36 exercices ne le demande jamais (voir la
        `note`).
     Q2 ($P_a = 800$ W, pertes $200$ W, rendement ? → $75\%$) → résoudre :
        deux étapes enchaînées (la soustraction puis le quotient), mais chacune
        est une application de relation connue. C'est la seule question du
        devoir qui relève du moule des exercices.
     Q3 (trois convertisseurs à $90\%$, $80\%$, $70\%$, rendement global →
        $50{,}4\%$) → modéliser : il faut comprendre que les maillons se
        COMPOSENT, donc construire le modèle de la chaîne avant de calculer.
        Le distracteur naturel (additionner) est écarté par le raisonnement
        sur la structure, pas par l'arithmétique — c'est exactement l'erreur 1
        de cette fiche.
     Q4 (relation entre énergie, puissance et temps → $E = P \times t$) →
        analyser : il faut caractériser la relation correcte entre trois
        grandeurs parmi quatre propositions, sans aucun calcul. Restitution
        raisonnée, rattachée à `analyser` comme les questions de restitution
        de l'ouvrage (voir REFERENTIELS dans prof.js).
     Q5 (énergie potentielle de $5$ kg à $10$ m, $g = 9{,}81$ → $490{,}5$ J)
        → résoudre : application directe de $E_p = mgh$. Comme la Q1, jamais
        travaillée par les exercices.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, modéliser 1, analyser 1.
     `communiquer` n'est pas mobilisé : aucune question ne demande de rédiger
     ni de présenter un bilan énergétique, alors que c'est typiquement ce
     qu'on attend d'un bilan en situation professionnelle. `expérimenter` et
     `concevoir` non plus, comme dans tout l'ouvrage — et c'est ici
     particulièrement regrettable, un bilan de puissance étant d'abord une
     mesure sur un banc.

     À SIGNALER, parce que cela se voit dans la grille : les questions 1, 3, 4
     et 5 portent sur des notions que les $36$ exercices ne travaillent
     JAMAIS. Un élève qui n'aurait fait que les exercices serait préparé à une
     seule des cinq questions. Voir la `note`. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'modéliser', 'analyser', 'résoudre']
  }
};
