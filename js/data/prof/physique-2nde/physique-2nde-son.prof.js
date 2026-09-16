/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-son.prof.js
   Fiche professeur du chapitre « Émission et perception du son » (seconde),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 8, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   30 énoncés tirés, dont 12 numérotés et 18 en banque supplémentaire. Les
   trente se ramènent à DEUX moules, strictement alternés, qui sont en réalité
   la MÊME relation prise dans ses deux sens :
     - moule A ($f = 1/T$, avec $T$ donnée en ms) : exercices IMPAIRS 1, 3,
       5, 7, 9, 11 ;
     - moule B ($T = 1/f$, avec $f$ donnée en Hz, réponse en ms) : exercices
       PAIRS 2, 4, 6, 8, 10, 12.
   Aucun exercice ne demande de LIRE une période sur un oscillogramme, de
   situer une fréquence dans le DOMAINE AUDIBLE, de raisonner sur l'AMPLITUDE,
   ni d'employer le NIVEAU D'INTENSITÉ SONORE en décibels — alors que ces
   trois dernières notions sont les définitions D3 et D4 du cours et l'objet
   de son encadré « piège ». Deux des quatre erreurs ci-dessous sont donc
   volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-son"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Ce chapitre est le deuxième du bloc « Ondes et signaux » et se
     traite sans aucun des huit chapitres qui le précèdent.

     Candidats examinés et écartés un par un :
     - ch. 8 (Signaux et capteurs) : le candidat le plus sérieux, et il faut
       le discuter honnêtement. Ce chapitre-ci parle d'oscillogramme, donc
       d'un signal électrique obtenu par un microphone — c'est-à-dire par un
       CAPTEUR, notion que le chapitre 8 installe. On pourrait donc plaider
       la dépendance. Elle est pourtant écartée, parce qu'elle ne porte rien :
       aucun des trente énoncés, aucune définition du cours et aucune
       question d'évaluation ne demande de savoir comment le microphone
       fabrique sa tension, ni d'exploiter une relation d'étalonnage. Le mot
       « microphone » y est un DÉCOR, comme « caméra » au chapitre 1. Un
       élève qui aurait manqué le chapitre 8 lirait un oscillogramme
       exactement aussi bien. Déclarer ce prérequis ferait dire à la colonne
       « S'appuie sur » une dépendance que l'enseignement ne vit pas.
     - ch. 1 (Description d'un mouvement) : la vitesse du son ($340$ m/s)
       figure dans les formules du cours. Mais elle n'est utilisée dans aucun
       exercice, aucune question d'évaluation, et le chapitre ne fait aucun
       calcul de propagation. Écarté.
     - ch. 10 (Lumière) : il vient APRÈS et, surtout, il traite l'autre
       nature d'onde. Aucun des deux ne s'appuie sur l'autre ; leur mise en
       regard (le son a besoin d'un milieu, la lumière non) est un contenu
       d'enseignement, pas une dépendance. Écarté.
     - ch. 2 à 7 (mécanique et chimie) : aucun lien. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 9, celui du livre. Ce chapitre est le
     deuxième du bloc « Ondes et signaux », entre le chapitre 8, qui installe
     la notion générale de signal, et le chapitre 10, qui traite le signal
     lumineux.

     L'ordre son puis lumière se défend mieux que l'inverse, pour une raison
     de progression conceptuelle : le son est une onde MÉCANIQUE, c'est-à-dire
     une vibration de matière qu'on peut voir, toucher et même sentir sur un
     haut-parleur. La lumière, elle, se propage dans le vide et ne s'incarne
     dans rien de palpable. Commencer par ce qui se touche et finir par ce qui
     ne se touche pas est le sens naturel de la difficulté, et le contraste
     « le son a besoin d'un milieu, la lumière non » n'a sa force que dans cet
     ordre-là.

     Le chapitre est par ailleurs indépendant de tous les autres et pourrait
     techniquement se placer ailleurs. Le déplacer romprait le bloc sans rien
     apporter. Le livre le place aussi en chapitre 9 : les deux ordres
     coïncident, et la colonne « Chap. » de la progression ne portera pas le
     triangle d'alerte. */
  rangConseille: 9,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Ondes et signaux », partie « Émission et perception
     d'un son ». Repris aux mots du programme. */
  attendus: [
    "Décrire le principe de l'émission d'un son par la mise en vibration d'un objet et de sa réception par l'oreille ou un microphone",
    "Utiliser une chaîne de mesure pour déterminer la période et la fréquence d'un signal sonore périodique",
    "Citer le domaine de fréquences des sons audibles et associer le niveau d'intensité sonore à l'échelle de niveau sonore et aux risques auditifs"
  ],

  note: "L'onde sonore, la période, la fréquence, l'amplitude, le domaine audible et le niveau " +
        "d'intensité sonore en décibels sont au programme de seconde : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les trente énoncés tirés ne travaillent qu'<strong>une seule</strong> relation, prise " +
        "dans ses deux sens : $f = 1/T$ et $T = 1/f$. C'est un inverse, et rien d'autre. Trois " +
        "manques comptent. D'abord, aucun exercice ne fait <strong>lire une période sur un " +
        "oscillogramme</strong> : la valeur de $T$ est toujours donnée dans le texte, alors que " +
        "l'oscillogramme est mentionné dans chaque énoncé et que sa lecture est la première étape " +
        "de la méthode du cours et le cœur du deuxième attendu officiel. Ensuite, aucun exercice " +
        "ne demande de <strong>situer la fréquence dans le domaine audible</strong> — la " +
        "troisième étape de la méthode, pourtant — alors même que les valeurs tirées s'y prêtent " +
        "remarquablement : $29{,}2$ Hz à l'exercice 5, $46{,}7$ Hz à l'exercice 9 et $45{,}6$ Hz " +
        "à l'exercice 11 sont des sons graves à la limite basse de l'audition, et le supplément S5 " +
        "descend à $25{,}2$ Hz. Il suffit d'ajouter oralement <strong>« ce son est-il " +
        "audible ? »</strong> à chaque réponse pour récupérer gratuitement toute cette partie du " +
        "cours. Enfin, l'<strong>amplitude</strong> et le <strong>niveau d'intensité sonore en " +
        "décibels</strong> — définitions D3 et D4, troisième attendu officiel, et sujet de " +
        "l'encadré « piège » du cours — n'apparaissent dans aucun des trente " +
        "énoncés.<br/><br/>" +
        "Deux remarques de terrain. La première : la partie <strong>santé auditive</strong> du " +
        "programme (le seuil de $85$ dB, les risques d'exposition prolongée) n'est portée que par " +
        "une définition du cours, sans aucun exercice. C'est pourtant le contenu qui touche le " +
        "plus directement des élèves de quinze ans, casque sur les oreilles : lui consacrer dix " +
        "minutes et un sonomètre — la plupart des téléphones en embarquent un — vaut toutes les " +
        "applications numériques du chapitre. La seconde : la conversion " +
        "<strong>millisecondes $\\leftrightarrow$ secondes</strong> est présente dans les trente " +
        "énoncés et constitue la difficulté réelle du chapitre, bien plus que l'inverse " +
        "lui-même ; elle relève des puissances de dix, qui sont un acquis de collège et un " +
        "chapitre de <strong>mathématiques</strong> — la colonne « S'appuie sur » ne peut pas le " +
        "montrer, puisqu'un prérequis ne vise qu'un chapitre du même niveau, de la même " +
        "discipline.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (oubli de la conversion ms → s) est, de loin, la plus coûteuse
     du chapitre et la seule qui touche les trente énoncés ; l'erreur 2 est la
     confusion hauteur / intensité, que le cours désigne dans son encadré
     « piège » ; l'erreur 3 est l'erreur de lecture de l'oscillogramme ;
     l'erreur 4 est la conception du son qui se propage dans le vide. */
  erreurs: [
    {
      titre: "Oublier de convertir les millisecondes en secondes",
      eleve: "Pour $T = 1{,}85$ ms, l'élève écrit $f = \\dfrac{1}{1{,}85} = 0{,}54$ Hz au lieu de " +
             "$540{,}5$ Hz. Dans l'autre sens, pour $f = 526$ Hz, il annonce $T = 0{,}0019$ ms au " +
             "lieu de $1{,}90$ ms. Le résultat est toujours mille fois trop petit ou mille fois " +
             "trop grand.",
      cause: "La relation $f = 1/T$ <strong>ne fonctionne qu'en unités du système " +
             "international</strong> : des secondes d'un côté, des hertz de l'autre. Or les " +
             "périodes sonores sont si courtes qu'on les exprime toujours en millisecondes — c'est " +
             "ainsi que les oscilloscopes les affichent. L'élève doit donc opérer une conversion " +
             "que <strong>rien dans la formule ne réclame</strong> : la formule ne porte aucune " +
             "unité, elle a l'air de marcher avec n'importe quel nombre. Ce n'est pas une " +
             "étourderie, c'est une condition d'emploi invisible.",
      remede: "Imposer une <strong>ligne de conversion séparée</strong>, écrite avant le calcul et " +
              "jamais dans la tête : « $T = 1{,}85$ ms $= 1{,}85 \\times 10^{-3}$ s ». Une ligne " +
              "qui existe ne s'oublie pas. Faire annoncer à voix haute la règle qui la " +
              "justifie : <strong>la formule $f = 1/T$ ne connaît que les secondes</strong>, et " +
              "elle ne prévient pas quand on lui donne autre chose.<br/><br/>" +
              "Installer ensuite un <strong>ordre de grandeur de référence</strong> qui rend " +
              "l'erreur visible sans calcul : les sons audibles vont de $20$ Hz à $20\\,000$ Hz, " +
              "donc leurs périodes vont de $50$ ms à $0{,}05$ ms. Une fréquence de $0{,}54$ Hz " +
              "correspondrait à un battement toutes les deux secondes — c'est le rythme d'un " +
              "cœur au repos, pas un son. Une réponse hors du domaine audible, sur un chapitre qui " +
              "ne parle que de guitares et de diapasons, signale une conversion oubliée avant " +
              "toute relecture.<br/><br/>" +
              "Ancrer enfin la relation sur un <strong>cas mémorisable</strong>, que la classe " +
              "garde toute l'année : le La du diapason vibre à $440$ Hz, soit une période de " +
              "$2{,}27$ ms. Un son musical a une période de l'ordre du millième de seconde. Tout " +
              "résultat mille fois au-dessus ou en dessous se repère en une seconde.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 8) : l'exercice 1 donne T = 1,85 ms et demande
         f, réponse 540,5 Hz. Le renvoi le choisit parmi les six du moule A
         pour deux raisons. D'abord c'est le premier tirage du chapitre, donc
         celui où le pli de la conversion se prend. Ensuite et surtout, c'est
         le tirage où la valeur oubliée est la plus DÉMONSTRATIVE : sans
         conversion, l'élève annonce 0,54 Hz, soit un battement toutes les deux
         secondes — un nombre qu'aucun son ne peut porter, et qui se
         disqualifie par le seul rappel du domaine audible que le remède
         installe. Sur les tirages 5, 9 et 11 (T = 34,28 ; 21,41 ; 21,91 ms),
         l'oubli donnerait des fréquences de l'ordre de 0,03 à 0,05 Hz, tout
         aussi fausses mais moins parlantes ; et ces trois tirages portent par
         ailleurs des réponses correctes proches de la limite basse de
         l'audible (29,2 ; 46,7 ; 45,6 Hz), ce qui brouillerait le message en
         mêlant deux discussions. Le tirage 1, avec ses 540,5 Hz franchement
         audibles et proches du La du diapason, est le support le plus net. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'un son aigu est forcément un son fort",
      eleve: "L'élève affirme qu'« augmenter la fréquence rend le son plus fort », ou qu'« un son " +
             "grave est toujours plus faible ». Sur un oscillogramme, il désigne un signal de " +
             "grande amplitude comme « plus aigu ».",
      cause: "Le langage courant confond systématiquement les deux : on dit d'un cri qu'il est " +
             "« strident », d'une voix qu'elle « monte » quand on s'énerve, et un enfant qui crie " +
             "produit effectivement un son à la fois fort ET aigu. La corrélation est réelle dans " +
             "l'expérience quotidienne, même si elle n'est pas une loi physique. L'élève " +
             "généralise donc une observation exacte — et il n'a, à ce stade, aucune raison de " +
             "soupçonner que deux caractéristiques indépendantes se cachent derrière un seul mot.",
      remede: "Séparer les deux par l'<strong>expérience</strong>, et non par la définition : avec " +
              "un générateur de fréquences et un haut-parleur, faire varier la " +
              "<strong>fréquence</strong> à volume constant — le son devient aigu sans devenir " +
              "plus fort ; puis faire varier le <strong>volume</strong> à fréquence constante — " +
              "le son devient fort sans changer de hauteur. Deux boutons différents, deux effets " +
              "différents. Aucun discours ne remplace ce moment.<br/><br/>" +
              "Faire ensuite <strong>lire les deux grandeurs sur un même oscillogramme</strong>, " +
              "en montrant qu'elles se lisent dans deux directions perpendiculaires : la " +
              "<strong>période</strong> se mesure horizontalement (elle donne la fréquence, donc " +
              "la hauteur), l'<strong>amplitude</strong> se mesure verticalement (elle donne " +
              "l'intensité, donc le volume). Deux axes indépendants — on peut allonger l'un sans " +
              "toucher à l'autre, et le dessin le montre.<br/><br/>" +
              "Ancrer enfin sur des <strong>contre-exemples de la vie réelle</strong>, qui " +
              "achèvent de casser la corrélation : un orgue d'église joue des notes " +
              "extrêmement graves et assourdissantes ; un sifflement de moustique est très aigu " +
              "et à peine audible. Grave et fort, aigu et faible : les quatre combinaisons " +
              "existent, donc les deux caractéristiques sont indépendantes.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : le mot « amplitude » n'apparaît dans AUCUN des trente
         énoncés, ni le mot « décibel », ni le mot « intensité ». Les deux
         moules ne manipulent que T et f, c'est-à-dire la seule hauteur. La
         confrontation des deux grandeurs, qui est le seul geste capable de
         remédier à cette erreur, n'a donc aucun support dans les exercices :
         un élève peut réussir les douze exercices numérotés en croyant
         fermement qu'aigu signifie fort. C'est précisément ce qui rend cette
         conception si durable, et ce qui interdit de la renvoyer à l'un
         d'eux. La remédiation se fait au générateur de fréquences, et le
         remède le dit. */
      exercice: null
    },
    {
      titre: "Lire plusieurs motifs comme une seule période",
      eleve: "Sur un oscillogramme, l'élève mesure l'écart entre deux sommets non consécutifs, ou " +
             "relève la largeur de trois oscillations en croyant lire une période. Sa fréquence " +
             "est alors deux ou trois fois trop petite.",
      cause: "Un signal sonore périodique présente <strong>plusieurs sommets identiques</strong>, " +
             "et rien sur l'écran ne dit lesquels sont voisins dans le motif : à l'œil, tous les " +
             "sommets se ressemblent. La difficulté est aggravée par le vocabulaire — « un motif " +
             "qui se répète » suppose d'avoir d'abord identifié le motif, ce qui est justement ce " +
             "qu'on demande. C'est une <strong>lecture de graphique</strong>, pas un calcul, et " +
             "les lectures de graphique ne sont jamais spontanées.",
      remede: "Imposer un <strong>geste de repérage</strong> avant toute mesure : surligner au " +
              "crayon <strong>un</strong> motif complet, du début d'une montée jusqu'au début de " +
              "la montée suivante, et vérifier qu'en le décalant on retombe exactement sur la " +
              "suite de la courbe. Un motif qui se superpose à la suite est le bon ; un motif qui " +
              "ne se superpose pas est trop long ou trop court.<br/><br/>" +
              "Utiliser ensuite la <strong>méthode des $n$ périodes</strong>, qui est celle des " +
              "laboratoires et qui améliore en plus la précision : mesurer la largeur de " +
              "<strong>dix</strong> oscillations, puis diviser par dix. L'erreur de lecture sur " +
              "les extrémités est alors divisée par dix elle aussi. C'est un cas rare où la " +
              "méthode la plus sûre est aussi la plus précise, et il vaut la peine de le " +
              "dire.<br/><br/>" +
              "Faire enfin <strong>vérifier par le résultat</strong>, ce qui ne coûte rien : si " +
              "la fréquence obtenue tombe hors du domaine audible alors qu'on a bien entendu le " +
              "son, c'est qu'on a compté trop de motifs. Cette erreur donne toujours une " +
              "fréquence <strong>trop petite</strong> d'un facteur entier ($2$, $3$…) : c'est sa " +
              "signature, et elle est très reconnaissable à la correction.",
      /* Volontairement SANS renvoi, même raison que l'erreur 2 et vérifiée sur
         le même tirage : les trente énoncés MENTIONNENT tous un oscillogramme
         (« l'oscillogramme relevé montre un signal périodique de période
         T = 1,85 ms ») mais n'en fournissent AUCUN. La valeur de T ou de f est
         donnée dans le texte, toute mesurée, et la tâche demandée se réduit à
         l'inverse. Aucun exercice ne comporte de courbe, d'échelle de temps ni
         de division d'écran. Un énoncé qui donne la période ne peut pas
         évaluer la lecture d'une période, et pointer l'un d'eux enverrait
         l'enseignant vers une fausse remédiation, ce que le projet tient pour
         pire qu'un renvoi absent. La remédiation se fait sur un oscillogramme
         réel, projeté ou relevé en TP, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Inverser la relation entre période et fréquence",
      eleve: "Pour $f = 526$ Hz, l'élève écrit $T = 526$ ms, ou multiplie au lieu de diviser. Il " +
             "affirme qu'« un son aigu a une grande période, puisqu'il a une grande fréquence ».",
      cause: "Période et fréquence décrivent la même chose et varient en sens " +
             "<strong>opposés</strong>, ce qui est contre-intuitif : dans l'expérience ordinaire, " +
             "« plus » va avec « plus ». L'élève doit ici retenir que plus la fréquence est " +
             "grande, plus la période est <strong>petite</strong>. S'y ajoute que les deux " +
             "grandeurs portent des noms voisins et se calculent par la même touche de " +
             "calculatrice : rien ne les distingue au moment du geste.",
      remede: "Traduire les deux grandeurs en <strong>français</strong> avant de les calculer, ce " +
              "qui rend l'inversion impossible : la <strong>période</strong>, c'est « combien de " +
              "temps dure UNE vibration » ; la <strong>fréquence</strong>, c'est « combien de " +
              "vibrations tiennent dans UNE seconde ». Posées ainsi, l'opposition est " +
              "évidente — si chaque vibration est très courte, il en tient beaucoup dans une " +
              "seconde.<br/><br/>" +
              "Prendre ensuite un <strong>cas mental sans calculatrice</strong> qui verrouille le " +
              "sens : un son à $10$ Hz, ce sont dix vibrations par seconde, donc chacune dure un " +
              "dixième de seconde. $f = 10$ donne $T = 0{,}1$ s, et non $T = 10$. L'élève peut " +
              "refaire ce raisonnement à chaque fois en trois secondes, alors qu'il ne peut pas " +
              "vérifier une formule mémorisée.<br/><br/>" +
              "Imposer enfin le <strong>contrôle par le produit</strong>, qui est gratuit et ne " +
              "rate jamais : $f \\times T = 1$ toujours, à condition que $T$ soit en secondes. " +
              "Avec $f = 526$ Hz et $T = 1{,}90$ ms $= 0{,}00190$ s, le produit donne $1{,}00$ — " +
              "c'est bon. Avec $T = 526$ ms, il donnerait $277$, ce qui n'est pas $1$. Un " +
              "contrôle qui ne demande aucune mémoire et qui tranche immédiatement.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         f = 526 Hz et demande T, réponse 1,90 ms. Le renvoi le choisit parmi
         les six du moule B pour une raison précise : c'est le tirage où
         l'inversion est la plus grossièrement visible, parce que la fréquence
         (526 Hz) et la période attendue (1,90 ms) sont deux nombres
         d'ordres de grandeur très éloignés — un élève qui recopierait 526
         comme période annoncerait une vibration d'une demi-seconde, soit un
         battement qu'on verrait à l'œil nu plutôt qu'un son qu'on entend. Le
         contrôle par le produit f*T = 1 du remède se vérifie ici de tête :
         526 * 0,00190 = 1,00. Les tirages 4, 8 et 12 (f = 1773, 1694 et
         1153 Hz) donnent des périodes inférieures à la milliseconde (0,56 ;
         0,59 ; 0,87 ms), sur lesquelles l'arrondi au centième masque une
         partie du raisonnement ; le tirage 10 (f = 225 Hz, T = 4,44 ms) est
         bon également mais arrive trop tard pour installer le réflexe. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — « le son est une onde qui : … », avec « se propage dans le vide » et
          « ne se propage que dans l'air » en distracteurs. Pure restitution de
          la définition D1 du cours : « s'approprier ».
     Q2 — $T = 8$ ms, calculer $f$. Relation donnée, sens direct, un inverse —
          avec la conversion ms → s à exécuter, ce qui reste une exécution et
          non un choix de méthode : « réaliser ». C'est le moule A du chapitre
          et l'erreur 1 de cette fiche.
     Q3 — $f = 250$ Hz, calculer $T$ en ms. Même relation dans l'autre sens.
          On aurait pu plaider « analyser » au motif que la relation se
          renverse ; ce serait excessif, car $f = 1/T$ et $T = 1/f$ sont TOUTES
          DEUX données par le cours et par sa méthode — il n'y a pas de
          transformation à décider, seulement la bonne à choisir dans une liste
          de deux : « réaliser ».
     Q4 — un son grave et un son aigu peuvent-ils avoir la même intensité ? Les
          distracteurs « un son grave est toujours plus faible » et « un son
          aigu est toujours plus fort » sont exactement l'erreur 2 de cette
          fiche. Il faut juger la validité de quatre affirmations sur
          l'indépendance de deux grandeurs, sans aucun calcul : « valider ».
     Q5 — un signal à $25\,000$ Hz, qu'est-ce ? Il faut comparer une valeur à
          l'encadrement du domaine audible ($20$ Hz à $20\,000$ Hz) et en
          déduire un classement. Ce n'est pas une restitution — le nombre
          $20\,000$ n'apparaît dans aucune option — mais un raisonnement de
          comparaison, troisième étape de la méthode du cours : « analyser ».

     « Réaliser » est donc mobilisé DEUX fois (Q2 et Q3), ce qui est
     l'étiquetage honnête d'un chapitre dont les deux moules d'exercices sont
     la même relation prise dans ses deux sens : l'évaluation reflète
     fidèlement le corpus, et il aurait été complaisant de requalifier l'un des
     deux en « analyser » pour diversifier la grille. « Communiquer » n'est PAS
     mobilisé, et ce n'est pas un oubli : aucune des cinq questions ne demande
     de produire une explication rédigée — les deux types disponibles dans le
     corpus (`numeric` et `multiple-choice`) ne le permettent pas. */
  competences: {
    evaluation: ["s'approprier", "réaliser", "réaliser", "valider", "analyser"]
  }
};
