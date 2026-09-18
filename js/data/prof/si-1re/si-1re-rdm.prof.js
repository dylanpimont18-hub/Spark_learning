/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-rdm.prof.js
   Fiche professeur du chapitre « Résistance des matériaux » (première SI),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 11 (chapitre 12 du livre `lycee-si`).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   DEUX MOULES, relevés énoncé par énoncé sur les quatorze premiers tirages
   (l'alternance n'est PAS régulière, contrairement aux autres chapitres du
   dossier — il faut la relever, pas la déduire) :
     - contrainte, $\sigma = F/S$ en MPa                  : exercices 2, 4, 6,
       8, 9, 11, 13, 14 ;
     - coefficient de sécurité, $s = \sigma_e / \sigma$   : exercices 1, 3, 5,
       7, 10, 12.
   Trois matériaux tournent (acier, aluminium, cuivre), et le second moule
   donne à chaque fois une limite élastique $\sigma_e$ tirée au hasard.

   CE QUE LE TIRAGE NE TRAVAILLE JAMAIS, et c'est la moitié du cours : la LOI
   DE HOOKE ($\sigma = E\varepsilon$), la DÉFORMATION $\varepsilon$, le
   MODULE DE YOUNG $E$, et l'ALLONGEMENT $\Delta L = FL_0/(ES)$. Aucun des 18
   énoncés ne mentionne $E$, ni une longueur, ni un allongement. Or les
   questions 2 et 4 de l'évaluation portent exactement là-dessus (Hooke, puis
   $\Delta L$ d'une barre acier), et le quiz 1 aussi.

   FAIT MESURÉ ET DÉRANGEANT, qui vaut d'être signalé au professeur : trois
   des six énoncés du moule « coefficient de sécurité » donnent un $s$
   INFÉRIEUR À $1$ — exercice 5 ($s = 0{,}7$), exercice 10 ($s = 0{,}9$),
   exercice 12 ($s = 0{,}5$). Physiquement, la barre est déjà rompue. Aucune
   correction ne le commente : elle annonce la valeur et s'arrête. C'est une
   occasion pédagogique en or (voir l'erreur 4) mais aussi un piège si le
   professeur ne l'a pas vu venir.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-rdm"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     ch. 3 (Statique, PFS) : RETENU, et c'est une dépendance forte, pas un
     voisinage thématique. La RDM part d'un EFFORT et d'une SECTION pour en
     déduire une contrainte : $\sigma = F/S$. L'effort $F$, c'est exactement
     ce que la statique apprend à calculer — la réaction d'appui, la tension
     d'une bielle, l'action dans une barre. Les 18 énoncés de ce chapitre
     DONNENT le $F$ tout fait (« subit $F = 16$ kN »), ce qui masque la
     dépendance dans les exercices, mais elle est réelle dès qu'on quitte le
     manuel : sur une pièce d'un mécanisme, personne ne vous donne l'effort,
     il faut l'isoler et l'écrire. Un élève qui ne sait pas faire un bilan
     d'actions ne peut pas dimensionner quoi que ce soit.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Cinématique du solide) : culture mécanique commune, mais la RDM
       ne fait intervenir aucun mouvement, aucune vitesse, aucune
       accélération. Les 18 énoncés sont tous statiques. Écarté.
     - ch. 1 (SysML) : aucun des 18 énoncés ne s'appuie sur un diagramme, et
       aucun raisonnement du chapitre n'est systémique. Écarté.
     - ch. 6 (Énergie et rendement) : la notion de travail de déformation
       ferait le pont vers l'énergie élastique, mais ce chapitre ne la traite
       pas (il s'arrête à la loi de Hooke) et l'énergie ne parle jamais de
       contrainte. Écarté.
     - ch. 4 (Boole), ch. 5 (Asservissement), ch. 8 (POO) : aucun lien.
       Écartés.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : les PUISSANCES DE
     $10$ et la conversion d'unités d'aire (mm² → m², facteur $10^{-6}$), qui
     est l'objet même de l'encadré « piège » du cours et de la question 5 de
     l'évaluation ; et la PROPORTIONNALITÉ INVERSE pour comprendre que
     l'allongement diminue quand $E$ augmente. Notions de mathématiques, non
     déclarables ici. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 7, celui du livre. L'ordre complet des
     huit rangs du dossier est justifié une fois dans
     `si-1re-sysml.prof.js` (rang 1).

     Le rang 7 est CONTRAINT par le prérequis : la statique porte le rang 3,
     donc ce chapitre doit lui être strictement postérieur. La marge de quatre
     chapitres est confortable et volontaire — elle laisse le temps d'oublier,
     ce qui n'est pas un défaut : revenir sur un bilan d'actions au moment
     d'attaquer les contraintes est un excellent réinvestissement.

     Le placer plus tôt (rang 4 ou 5) serait légal mais collerait les deux
     chapitres mécaniques les plus exigeants de l'année ; le placer en dernier
     priverait l'année de sa conclusion naturelle en POO, qui n'a besoin de
     rien et clôt bien.

     Le livre le range en chapitre 12 de l'ouvrage, soit le 7e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 7,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 7 de première, dont
     le titre complet est « Résistance des matériaux (contraintes,
     déformations) » — vérifié, et c'est tout ce que le document donne) et le
     programme de spécialité SI (2019), partie « Modéliser et prévoir le
     comportement mécanique des pièces ».

     Bornés à ce que le chapitre traite VRAIMENT : la traction simple, la
     contrainte normale, la déformation, la loi de Hooke dans le domaine
     élastique, et le coefficient de sécurité. Rien sur la flexion, la torsion
     ni le cisaillement (non cités par le cours), rien sur la fatigue, rien
     sur le flambage. Citer un attendu sur le moment fléchissant serait citer
     ce que le chapitre n'enseigne pas. */
  attendus: [
    "Déterminer la contrainte normale dans une pièce sollicitée en traction simple, en respectant les conversions d'unités",
    "Relier contrainte et déformation par la loi de Hooke dans le domaine élastique, et calculer l'allongement d'une pièce",
    "Vérifier la tenue d'une pièce en comparant la contrainte à la limite élastique par un coefficient de sécurité"
  ],

  note: "La contrainte $\\sigma = \\dfrac{F}{S}$, la déformation " +
        "$\\varepsilon = \\dfrac{\\Delta L}{L_0}$, la loi de Hooke " +
        "$\\sigma = E\\varepsilon$ et le coefficient de sécurité " +
        "$s = \\dfrac{\\sigma_e}{\\sigma}$ : le chapitre installe la vérification d'une pièce, " +
        "c'est-à-dire le moment où la mécanique devient un engagement de sécurité.<br/><br/>" +
        "<strong>Le prérequis affiché est le bon, et il est exigeant.</strong> Ce chapitre " +
        "s'appuie sur la <strong>statique</strong> (chapitre $3$ de cette partie) : la contrainte " +
        "se calcule à partir d'un effort, et l'effort vient d'un bilan d'actions. Les $18$ " +
        "énoncés du chapitre <strong>donnent</strong> l'effort tout fait (« subit $F = 16$ kN »), " +
        "ce qui masque la dépendance — mais sur une pièce réelle, personne ne vous donne $F$. Si " +
        "vous voulez que la RDM serve à quelque chose, faites au moins une fois la chaîne " +
        "complète : isoler, calculer la réaction, puis la contrainte.<br/><br/>" +
        "<strong>Deux prérequis hors SI, à vérifier avant de commencer.</strong> Les " +
        "<strong>puissances de $10$</strong> et la conversion d'aire mm² → m² (facteur $10^{-6}$), " +
        "qui est l'objet de l'encadré « piège » du cours et d'une question du devoir ; et la " +
        "<strong>proportionnalité inverse</strong>, sans laquelle « $E$ plus grand donc " +
        "allongement plus petit » reste incompréhensible. Ces acquis relèvent des mathématiques " +
        "et ne figurent pas dans la colonne des prérequis, qui ne peut désigner que des chapitres " +
        "de SI.<br/><br/>" +
        "<strong>LA MOITIÉ DU COURS N'A AUCUN EXERCICE, il faut le savoir avant de préparer la " +
        "séquence.</strong> Les $18$ énoncés tirés se partagent en deux moules seulement : " +
        "calculer une <strong>contrainte</strong> $\\sigma = F/S$, ou un <strong>coefficient de " +
        "sécurité</strong> $s = \\sigma_e/\\sigma$. <strong>Aucun</strong> ne mentionne le module " +
        "de Young, la déformation $\\varepsilon$, la loi de Hooke ni l'allongement $\\Delta L$ — " +
        "alors que ce sont deux des cinq questions du devoir noté (dont le calcul de $\\Delta L$ " +
        "sur une barre acier) et le deuxième attendu du chapitre. Le <strong>quiz</strong> " +
        "rattrape une partie du retard : sa première question compare l'allongement de l'acier et " +
        "de l'aluminium à $E$ différents. Prévoyez malgré tout deux ou trois calculs " +
        "d'allongement, que le manuel ne fournit pas.<br/><br/>" +
        "<strong>Enfin, une particularité du tirage à ne pas subir en direct.</strong> Trois des " +
        "six énoncés de coefficient de sécurité donnent un résultat <strong>inférieur à " +
        "$1$</strong> — l'exercice $5$ ($s = 0{,}7$), l'exercice $10$ ($s = 0{,}9$) et " +
        "l'exercice $12$ ($s = 0{,}5$). Physiquement, ces barres sont déjà rompues, et aucune " +
        "correction ne le dit. C'est une occasion magnifique de faire interpréter un résultat " +
        "plutôt que de l'annoncer — mais préparez-la, plutôt que de la découvrir au tableau.",

  erreurs: [
    {
      titre: "Oublier de convertir la section de mm² en m²",
      eleve: "Pour $S = 63$ mm² et $F = 36$ kN, l'élève écrit " +
             "$\\sigma = \\dfrac{36\\,000}{63} = 571$ Pa, au lieu de $571{,}4$ MPa. Le résultat " +
             "est faux d'un facteur un million.",
      cause: "La conversion d'une AIRE n'est pas celle d'une longueur : $1$ mm $= 10^{-3}$ m, donc " +
             "$1$ mm² $= 10^{-6}$ m², et le facteur est au carré. L'élève applique le facteur " +
             "$10^{-3}$ qu'il connaît, ou n'en applique aucun, parce que rien dans l'écriture " +
             "« mm² » ne signale que l'exposant agit sur le préfixe. C'est l'erreur d'unités " +
             "emblématique de la culture mécanique — le cours la désigne lui-même comme " +
             "« l'erreur la plus fréquente » dans son encadré « piège ». Elle est d'autant plus " +
             "tenace que le résultat reste un nombre d'allure raisonnable si l'on ne regarde pas " +
             "l'unité.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 11, deuxième
         tirage) : barre en cuivre, $S = 63$ mm², $F = 36$ kN, donc
         $\sigma = 571{,}4$ MPa. Sa correction consacre sa PREMIÈRE ligne
         entière aux deux conversions, explicitement écrites —
         « Conversion : $F = 36$ kN $= 36\,000$ N ; $S = 63$ mm²
         $= 63 \times 10^{-6}$ m² » — avant tout calcul. C'est exactement le
         geste que l'élève escamote, et c'est le premier énoncé du moule
         « contrainte » dans le livre, donc celui sur lequel on peut imposer
         la ligne de conversion dès le départ.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 4, 6, 8, 9,
         11) : tous portent la même ligne de conversion, donc tous
         conviendraient formellement. L'exercice 2 est retenu sur un critère
         mesuré : sa contrainte ($571{,}4$ MPa) est la PLUS FORTE du moule,
         très au-dessus de toute limite élastique usuelle, parce que sa
         section est la plus petite ($63$ mm²) pour une force élevée ($36$ kN).
         L'élève qui oublie la conversion annonce $571$ Pa, soit une contrainte
         ridiculement faible, et l'écart entre les deux réponses est donc
         maximal et parlant. L'exercice 4 aurait été le plus mauvais choix du
         moule : $\sigma = 51$ MPa tout rond, et « $51$ Pa » contre
         « $51$ MPa » ne diffèrent que par l'unité — rien ne saute aux yeux
         dans le nombre. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'<strong>exercice $2$</strong> en recopiant sa première ligne telle " +
              "quelle, avant tout calcul : « $F = 36$ kN $= 36\\,000$ N ; $S = 63$ mm² " +
              "$= 63 \\times 10^{-6}$ m² ». La correction du livre lui consacre une ligne " +
              "entière, et c'est exactement l'étape sautée.<br/><br/>" +
              "Choisissez cet énoncé plutôt qu'un autre du même type : sa section est la plus " +
              "petite du chapitre pour une force élevée, donc sa contrainte est la plus forte " +
              "($571{,}4$ MPa). L'écart avec la réponse fausse ($571$ Pa) est maximal, et il se " +
              "voit. Sur l'exercice $4$, dont la réponse est $51$ MPa, l'oubli passerait presque " +
              "inaperçu.<br/><br/>" +
              "Faites <strong>démontrer le facteur</strong> plutôt que l'apprendre, parce qu'une " +
              "règle démontrée ne s'oublie pas : $1$ mm² est un carré de $1$ mm de côté, soit " +
              "$10^{-3}$ m $\\times$ $10^{-3}$ m $= 10^{-6}$ m². <strong>Le facteur est au carré " +
              "parce que la grandeur est une surface.</strong> Faites-le dessiner une fois, un " +
              "carré coté.<br/><br/>" +
              "Donnez enfin le <strong>contrôle par les ordres de grandeur</strong>, qui rattrape " +
              "l'oubli tout seul : en mécanique, une contrainte de travail se compte en " +
              "<strong>dizaines ou centaines de MPa</strong>, jamais en pascals. Le cours donne " +
              "les repères ($\\sigma_e$ de l'acier entre $200$ et $400$ MPa). Un élève qui trouve " +
              "$571$ Pa a obtenu une contrainte un million de fois trop faible : la barre ne " +
              "sentirait rien. Posez la question systématiquement — « ton résultat, il ressemble " +
              "aux valeurs du cours ? »"
    },
    {
      titre: "Croire que le matériau le plus rigide est celui qui s'allonge le plus",
      eleve: "« L'acier a $E = 210$ GPa, donc il se déforme plus que l'aluminium à $70$ GPa : son " +
             "module est plus grand. »",
      cause: "Un grand nombre évoque spontanément un grand effet, et l'élève associe « module " +
             "élevé » à « déformation élevée ». Or $E$ mesure la RAIDEUR, et " +
             "$\\Delta L = \\dfrac{FL_0}{ES}$ le place au DÉNOMINATEUR : plus $E$ est grand, moins " +
             "la pièce s'allonge. Il faut donc renverser une intuition de proportionnalité " +
             "directe, ce qui est l'obstacle mathématique le plus classique du chapitre. Ce n'est " +
             "pas un défaut de mémoire — la formule peut être sue par cœur et l'erreur commise " +
             "quand même, parce qu'on raisonne sur le mot et non sur la fraction.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 1 est bâti exactement sur cette comparaison : « un câble en
         acier ($E = 210$ GPa) et un câble en aluminium ($E = 70$ GPa) de même
         section et longueur subissent la même force, lequel s'allonge le
         plus ? », bonne réponse « l'aluminium, car son module de Young est $3$
         fois plus faible », avec en distracteurs « l'acier, car son module
         est plus grand » — littéralement l'erreur de l'élève. Sa correction
         énonce la raison : « à $F$, $L_0$ et $S$ identiques, $\Delta L$ est
         inversement proportionnel à $E$ ».
         COMPARÉ AUX CANDIDATS EXERCICES : MESURE FAITE sur les 18 énoncés
         tirés, AUCUN ne mentionne le module de Young, ni un allongement, ni
         une longueur. Les deux moules calculent $\sigma = F/S$ ou
         $s = \sigma_e/\sigma$, où $E$ n'intervient jamais. Les énoncés
         nomment bien des matériaux (acier, aluminium, cuivre), ce qui rend un
         renvoi TENTANT — mais le matériau n'y sert qu'à fournir une limite
         élastique $\sigma_e$, pas un module. Renvoyer à l'exercice 1
         (aluminium) ou 3 (acier) pour une erreur sur $E$ aurait été un renvoi
         plausible et FAUX. Le quiz 1 est le seul support du livre. */
      exercice: { type: "quiz", n: 1 },
      remede: "Le <strong>quiz $1$</strong> est fait pour cette erreur, et son distracteur est mot " +
              "pour mot le raisonnement à défaire (« l'acier, car son module est plus grand »). La " +
              "bonne réponse est l'aluminium, et la correction donne la raison : à $F$, $L_0$ et " +
              "$S$ identiques, $\\Delta L$ est <strong>inversement proportionnel</strong> à " +
              "$E$.<br/><br/>" +
              "Les exercices ne vous serviront à rien ici, et il faut le savoir : les $18$ énoncés " +
              "nomment des matériaux, mais uniquement pour donner une limite élastique. " +
              "<strong>Aucun ne contient le module de Young</strong>, aucun ne calcule un " +
              "allongement.<br/><br/>" +
              "Traduisez $E$ en mot, une fois pour toutes : <strong>$E$ est la raideur, pas la " +
              "souplesse</strong>. Un grand $E$ veut dire « difficile à déformer ». Faites " +
              "remplacer mentalement « module de Young » par « raideur » dans chaque phrase du " +
              "cours : « l'acier a une raideur $3$ fois plus grande que l'aluminium, donc il " +
              "s'allonge $3$ fois moins ». La phrase devient évidente.<br/><br/>" +
              "Appuyez sur l'<strong>expérience de pensée</strong> qui tranche, parce qu'elle est " +
              "vécue : une <strong>règle en acier</strong> et une <strong>règle en " +
              "plastique</strong> de mêmes dimensions. Laquelle plie le plus sous le même doigt ? " +
              "Le plastique, qui a le plus petit module. Personne n'hésite sur cette " +
              "question — et c'est exactement la même que celle du quiz.<br/><br/>" +
              "Installez enfin le <strong>réflexe de la fraction</strong> : avant de conclure sur " +
              "un « plus » ou un « moins », l'élève regarde où se trouve la grandeur. $E$ est " +
              "<strong>en bas</strong> de $\\dfrac{FL_0}{ES}$ : quand le bas grandit, le résultat " +
              "diminue. C'est un geste de lecture de formule, et il vaut pour tout le programme."
    },
    {
      titre: "Diviser la contrainte par la limite élastique au lieu de l'inverse",
      eleve: "Une barre acier a $\\sigma_e = 387$ MPa et travaille à $\\sigma = 123{,}1$ MPa. " +
             "L'élève écrit $s = \\dfrac{123{,}1}{387} = 0{,}32$ et conclut que la pièce est " +
             "dangereuse, alors que $s = 3{,}1$ et qu'elle est bien dimensionnée.",
      cause: "Les deux grandeurs sont des contraintes, en MPa toutes les deux, et rien dans leurs " +
             "notations ne dit laquelle va au numérateur. L'élève sait qu'il faut faire un " +
             "rapport, mais il l'oriente au hasard — et le résultat, un nombre entre $0$ et $1$, " +
             "n'a rien d'alarmant en soi. Ce n'est pas un défaut de calcul, c'est un défaut de " +
             "SENS : le coefficient de sécurité répond à la question « de combien de fois " +
             "suis-je en dessous du danger ? », et une réponse à cette question doit être " +
             "supérieure à $1$ pour rassurer.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 11, troisième
         tirage) : barre en acier, $\sigma_e = 387$ MPa, $S = 65$ mm²,
         $F = 8$ kN, donc $\sigma = 123{,}1$ MPa et $s = 3{,}1$. Sa correction
         écrit la formule ORIENTÉE avant de calculer — « Coefficient de
         sécurité : $s = \dfrac{\sigma_e}{\sigma} = \dfrac{387}{123{,}1}$ » —
         ce qui met le bon ordre sous les yeux.
         POURQUOI CELUI-LÀ, et c'est mesuré. Le moule « coefficient de
         sécurité » compte six énoncés numérotés (1, 3, 5, 7, 10, 12), mais
         TROIS sont disqualifiés pour cette erreur précise : les exercices 5
         ($s = 0{,}7$), 10 ($s = 0{,}9$) et 12 ($s = 0{,}5$) donnent déjà un
         résultat inférieur à $1$, donc l'élève qui inverse obtient un nombre
         SUPÉRIEUR à $1$ — l'erreur y produit un résultat rassurant et
         l'exercice ne peut rien remédier. Restent 1 ($s = 2{,}1$), 3
         ($s = 3{,}1$) et 7 ($s = 1{,}2$). L'exercice 7 est faible : $1{,}2$
         inversé donne $0{,}83$, et les deux nombres sont trop proches pour
         que l'écart parle. L'exercice 1 ($2{,}1$ contre $0{,}48$)
         conviendrait. L'exercice 3 est retenu parce que son rapport est le
         plus franc du chapitre — $3{,}1$ contre $0{,}32$, soit un facteur
         $10$ — et parce que sa valeur juste ($3{,}1$) tombe pile dans la
         fourchette de sécurité que le cours donne ($s = 2$ à $5$), ce qui
         permet de conclure « cette pièce est correctement dimensionnée » et
         d'opposer nettement les deux interprétations. Distinct du renvoi de
         l'erreur 1 (exercice 2), conformément à la règle du projet. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'<strong>exercice $3$</strong> en recopiant la formule orientée " +
              "AVANT les nombres, comme le fait sa correction : " +
              "« $s = \\dfrac{\\sigma_e}{\\sigma} = \\dfrac{387}{123{,}1}$ », donc $s = 3{,}1$. La " +
              "limite élastique en haut, la contrainte de travail en bas — toujours.<br/><br/>" +
              "Choisissez cet énoncé plutôt qu'un autre du même type, et pour une raison mesurée : " +
              "les exercices $5$, $10$ et $12$ donnent déjà un coefficient inférieur à $1$, donc " +
              "un élève qui inverse la fraction y obtient un nombre <strong>supérieur</strong> à " +
              "$1$ — c'est-à-dire un résultat rassurant. Ces trois énoncés ne peuvent pas servir " +
              "au diagnostic. L'exercice $3$, lui, oppose franchement $3{,}1$ et $0{,}32$, soit un " +
              "facteur $10$.<br/><br/>" +
              "Donnez le <strong>sens de la question</strong>, qui oriente la fraction sans qu'on " +
              "ait à la retenir : <strong>« combien de fois suis-je en dessous du danger ? »</strong>. " +
              "Si la barre casse à $387$ MPa et travaille à $123$ MPa, je suis " +
              "<strong>trois fois</strong> en dessous — donc $s = 3$. Formulé ainsi, le " +
              "numérateur va de soi : c'est la limite, et on la divise par ce qu'on subit " +
              "réellement.<br/><br/>" +
              "Installez le <strong>contrôle par la fourchette du cours</strong>, et faites-le " +
              "exiger dans chaque conclusion : le cours donne $s = 2$ à $5$ selon les " +
              "applications. Un coefficient de $3{,}1$ est une pièce correctement dimensionnée ; " +
              "un coefficient de $0{,}32$ signifierait que la pièce travaille TROIS FOIS AU-DELÀ " +
              "de sa limite, c'est-à-dire qu'elle est cassée. Un élève qui doit conclure par une " +
              "phrase (« la pièce tient, avec une marge de $3$ ») ne peut plus rendre un rapport " +
              "orienté au hasard."
    },
    {
      titre: "Annoncer un coefficient de sécurité sans l'interpréter",
      eleve: "L'élève trouve $s = 0{,}5$ et écrit « $s = 0{,}5$ » comme réponse finale, sans un " +
             "mot. Interrogé, il ne sait pas dire si la pièce tient ou si elle casse.",
      cause: "La tâche demandée s'arrête à un nombre — « calcule le coefficient de sécurité » — et " +
             "l'élève répond exactement à ce qu'on lui demande. L'habitude scolaire veut d'ailleurs " +
             "que la réponse soit le résultat du calcul, pas son jugement. Le tirage renforce ce " +
             "contrat : aucune des six corrections du moule ne commente sa valeur, y compris les " +
             "trois qui annoncent une barre rompue. Ce n'est donc pas de la négligence, c'est un " +
             "contrat implicite — et en RDM il est particulièrement grave, puisque tout l'intérêt " +
             "du coefficient est justement de conclure sur la tenue d'une pièce.",
      /* exercice: null — ASSUMÉ ET MOTIVÉ, et c'est le null le plus
         intéressant de cette fiche.
         Un renvoi serait ici un CONTRESENS de méthode : les six énoncés du
         moule demandent « calcule le coefficient de sécurité $s$ » et leur
         champ réponse attend un nombre. Aucun ne demande d'interpréter, aucune
         correction ne conclut sur la tenue de la pièce. L'exercice n'exige
         donc jamais ce qu'on reproche à l'élève de ne pas faire — c'est le
         même cas de figure que l'erreur 4 de
         `bts-derivation-appliquee.prof.js`.
         Le vrai geste de remédiation est d'ÉTENDRE la consigne, ce que le
         remède demande. Et le tirage offre pour cela un matériau
         exceptionnel, MESURÉ : les exercices 5 ($s = 0{,}7$), 10
         ($s = 0{,}9$) et 12 ($s = 0{,}5$) donnent des barres déjà rompues,
         sans que rien ne le signale. Ces énoncés ne sont pas cités en
         `exercice` parce qu'ils ne travaillent pas l'interprétation — ils
         l'exigent de l'enseignant, pas de l'élève.
         Le quiz ne peut pas aider non plus : sa question 2 calcule $s = 3$ et
         conclut « le boulon est correctement dimensionné », donc elle
         interprète… à la place de l'élève. Et le quiz 1 est déjà pris par
         l'erreur 2. */
      exercice: null,
      remede: "Aucun exercice du chapitre ne peut remédier à cela, parce qu'aucun ne le demande : " +
              "les six énoncés de coefficient de sécurité attendent un nombre, et " +
              "<strong>aucune de leurs corrections ne conclut sur la tenue de la pièce</strong>. " +
              "Le vrai geste de remédiation est donc d'<strong>étendre la consigne</strong>, et le " +
              "tirage vous en donne l'occasion idéale.<br/><br/>" +
              "<strong>Servez-vous des trois énoncés « dangereux » du chapitre.</strong> Les " +
              "exercices $5$ ($s = 0{,}7$), $10$ ($s = 0{,}9$) et $12$ ($s = 0{,}5$) décrivent des " +
              "barres qui travaillent AU-DELÀ de leur limite élastique : elles sont déjà " +
              "déformées de façon irréversible, voire rompues. Le corrigé annonce la valeur sans " +
              "rien en dire. Faites-les traiter, puis demandez : « alors, cette barre, elle tient " +
              "ou pas ? ». Le silence du corrigé devient votre meilleur " +
              "outil.<br/><br/>" +
              "Réclamez systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur, la <strong>comparaison à la fourchette</strong> du cours " +
              "($s = 2$ à $5$), et le <strong>verdict</strong>. « $s = 0{,}5$ : la contrainte " +
              "dépasse le double de la limite élastique, la barre est ruinée, il faut doubler la " +
              "section » plutôt que « $s = 0{,}5$ ».<br/><br/>" +
              "Dites enfin pourquoi cela compte, parce que l'argument porte en SI : " +
              "<strong>un coefficient de sécurité n'est pas un résultat de calcul, c'est une " +
              "décision</strong>. Un ingénieur qui rend « $0{,}5$ » sans commentaire a fait le " +
              "calcul et manqué son travail. Les élèves entendent très bien cet argument-là, " +
              "beaucoup mieux qu'un rappel de barème."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 ($S = 100$ mm², $F = 20\,000$ N, contrainte en MPa → $200$) →
        résoudre : application directe de $\sigma = F/S$ avec la conversion,
        le moule des exercices pairs.
     Q2 ($\sigma = 150$ MPa, $E = 210$ GPa, déformation $\varepsilon$ ?
        → $7{,}14 \times 10^{-4}$) → résoudre : inversion de la loi de Hooke
        et application numérique avec des puissances de $10$. Notion jamais
        travaillée par les 18 exercices (voir la `note`).
     Q3 ($\sigma = 80$ MPa, $\sigma_e = 240$ MPa, coefficient de sécurité
        → $3$) → résoudre : application directe, le moule des exercices
        impairs.
     Q4 (allongement d'une barre acier, $E = 210$ GPa, $L_0 = 2$ m,
        $S = 50$ mm², $F = 10\,000$ N → $1{,}9$ mm) → résoudre : application
        de $\Delta L = FL_0/(ES)$, quatre grandeurs et deux conversions. C'est
        la question la plus lourde du devoir, et elle porte sur la formule que
        les exercices n'emploient JAMAIS.
     Q5 ($1$ mm² vaut combien de m² ? → $10^{-6}$) → analyser : caractériser
        une relation entre unités, sans aucun calcul à conduire. Restitution
        raisonnée sur la conversion, rattachée à `analyser` comme les
        questions de restitution de l'ouvrage (voir REFERENTIELS dans
        prof.js). C'est aussi le rappel explicite de l'encadré « piège », et
        donc de l'erreur 1 de cette fiche.

     RÉPARTITION DE CE CHAPITRE : résoudre 4, analyser 1. C'est un devoir
     d'application, comme celui de la cinématique.
     `modéliser` n'est pas mobilisé, ce qui est notable : aucune question ne
     demande de choisir un modèle de sollicitation, de décider quelle section
     est critique, ni de dimensionner une pièce à partir d'un cahier des
     charges. `communiquer` non plus — et c'est le manque le plus voyant, vu
     que l'erreur 4 de cette fiche porte précisément sur l'absence de phrase
     de conclusion. Si vous voulez évaluer l'interprétation, il faudra ajouter
     votre propre question : par exemple, reprendre la Q3 et demander une
     conclusion rédigée sur la tenue de la pièce.
     `expérimenter` et `concevoir` ne sont pas mobilisés non plus, comme dans
     tout l'ouvrage — ce qui, sur un chapitre dont l'essai de traction est
     l'expérience fondatrice, mérite d'être signalé. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'résoudre', 'résoudre', 'analyser']
  }
};
