/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-thermodynamique.prof.js
   Fiche professeur du chapitre « Thermodynamique : premier principe »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 4 : 42 énoncés tirés — le chapitre le plus fourni du
   niveau avec la quantique —, dont 12 numérotés et 30 en banque
   supplémentaire. Deux moules strictement alternés :
     - moule CALORIMÉTRIE (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : résistance
       chauffante de puissance P pendant une durée dt dans m kg d'eau, système
       parfaitement isolé (Q = 0), on demande l'élévation de température
       $\Delta T = P\,\Delta t/(mc)$ ;
     - moule PREMIER PRINCIPE ALGÉBRIQUE (exercices PAIRS 2, 4, 6, 8, 10, 12) :
       W et Q donnés avec leur SIGNE, on demande $\Delta U = W + Q$.
   Le moule pair est une aubaine : le tirage couvre les quatre combinaisons de
   signes (++, +-, -+, --), ce qui permet des renvois précis sur la convention
   récepteur. Aucun exercice, en revanche, ne demande de DÉTERMINER le signe à
   partir d'une description physique (« le système cède 80 J ») : les signes
   sont toujours donnés tout faits. C'est ce qui contraint l'erreur 1 à
   s'appuyer sur un cas déjà signé, et l'erreur 4 à rester sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-thermodynamique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale n'est un prérequis réel de celui-ci, et il
     vaut mieux l'écrire que d'inventer une dépendance de convenance.

     ch. 4 (Énergie mécanique) : ÉCARTÉ, et c'est le candidat le plus sérieux —
     les deux chapitres parlent d'énergie et de conservation. Mais la
     dépendance est THÉMATIQUE, pas OPÉRATOIRE : le premier principe ne
     réutilise ni $E_c$, ni $E_{pp}$, ni $E_m$, ni le théorème de l'énergie
     cinétique. Il introduit une grandeur entièrement nouvelle, l'énergie
     interne $U$, définie à l'échelle microscopique, et une relation nouvelle,
     $\Delta U = W + Q$. Un élève qui n'aurait pas fait le ch. 4 pourrait
     suivre celui-ci sans aucune gêne. Déclarer le prérequis contraindrait
     l'ordre de la progression sans nécessité, et ferait dire au tableau
     imprimé quelque chose de faux.
     Cela dit, l'enchaînement 4 -> 5 reste CONFORTABLE : voir `rangConseille`.

     ch. 1 à 3 : aucun lien opératoire.
     ch. 6 à 11 : aucun lien. Le ch. 8 (oxydoréduction) partage la lettre Q
     (quantité d'électricité chez lui, transfert thermique ici) mais ce n'est
     qu'une collision de notation — signalée dans la `note` de cette fiche.

     LE PRÉREQUIS LE PLUS UTILE N'EST PAS DÉCLARABLE : c'est la puissance
     électrique $P = UI$ et la relation $W = P\Delta t$, vues en PREMIÈRE
     (« Circuits et lois de Kirchhoff ») et même au collège. Il est traité dans
     `note`, qui est imprimée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre.

     Aucune contrainte dure ne le lie à un chapitre de terminale. Deux raisons
     de le laisser au rang 5.

     La première est thématique : il clôt proprement le bloc « énergie » ouvert
     par le chapitre 4. L'élève vient de voir qu'en présence de frottements
     l'énergie mécanique DIMINUE, sans savoir où elle passe ; le chapitre 5
     répond exactement à cette question (elle devient de l'énergie interne, la
     température monte). Poser la question au chapitre 4 et y répondre au
     chapitre 5 est une progression naturelle, et c'est la seule bonne raison
     de les garder voisins. Ce n'est pas un prérequis au sens strict — d'où la
     liste vide — mais c'est un enchaînement qu'il serait dommage de casser.

     La seconde est pratique : le chapitre 5 sépare le bloc mécanique
     (chapitres 1 à 4) du bloc chimie (chapitres 6 à 8), et sert de respiration
     entre deux styles de raisonnement.

     PRÉREQUIS MATHÉMATIQUE : négligeable, et c'est à noter. Le chapitre ne
     demande qu'une addition d'entiers relatifs et une division. La seule vraie
     difficulté est l'usage des nombres NÉGATIFS dans un contexte physique,
     ce qui relève de la convention plutôt que du calcul. Le chapitre peut donc
     être placé n'importe où dans l'année sans risque mathématique. */
  rangConseille: 5,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « L'énergie : conversions et transferts ». Repris
     aux mots du programme. */
  attendus: [
    "Exploiter le premier principe de la thermodynamique pour effectuer un bilan énergétique d'un système",
    "Relier la variation d'énergie interne d'un système incompressible à sa variation de température",
    "Mettre en œuvre un protocole pour réaliser un bilan énergétique d'un système en transformation"
  ],

  note: "L'énergie interne, le premier principe $\\Delta U = W + Q$, la capacité thermique massique " +
        "et la calorimétrie par effet Joule sont au programme de spécialité de terminale : le " +
        "chapitre ne déborde pas.<br/><br/>" +
        "<strong>Ce chapitre ne dépend d'aucun autre chapitre de terminale, et la colonne " +
        "« S'appuie sur » affichera donc un tiret — c'est exact.</strong> Le chapitre 4 " +
        "(« Énergie mécanique ») en est le voisin naturel, mais pas le prérequis : le premier " +
        "principe ne réutilise ni $E_c$, ni $E_{pp}$, ni le théorème de l'énergie cinétique. En " +
        "revanche le chapitre suppose acquise la relation <strong>$W = P \\times \\Delta t$</strong> " +
        "entre puissance, durée et énergie — vue en <strong>première</strong> dans " +
        "« Circuits électriques », et même au collège — car elle intervient dans la moitié des " +
        "exercices sans jamais être redémontrée : un prérequis ne pouvant viser qu'un chapitre du " +
        "même niveau, <strong>rien ne le montrera</strong>. Si la classe hésite sur " +
        "$W = P \\Delta t$ ou sur la conversion des minutes en secondes, dix minutes de reprise " +
        "avant le chapitre en font gagner une heure.<br/><br/>" +
        "<strong>Le prérequis mathématique est négligeable, et c'est ce qui permet de placer ce " +
        "chapitre n'importe où dans l'année.</strong> Une addition d'entiers relatifs et une " +
        "division suffisent : ni dérivée, ni logarithme, ni équation différentielle. La seule " +
        "difficulté réelle est l'usage <strong>physique</strong> des nombres négatifs — décider " +
        "qu'un transfert se compte négativement — et cela relève de la convention, pas du " +
        "calcul.<br/><br/>" +
        "<strong>Attention à une collision de notation entre chapitres.</strong> La lettre $Q$ " +
        "désigne ici le <strong>transfert thermique</strong>, en joules ; au chapitre 8 " +
        "(« Oxydoréduction »), elle désignera la <strong>quantité d'électricité</strong>, en " +
        "coulombs ; au chapitre 6, $Q_r$ est le quotient de réaction, sans dimension. Trois sens " +
        "pour une lettre en une seule année : le signaler explicitement évite des confusions en " +
        "épreuve.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les quarante-deux énoncés tirés " +
        "alternent deux moules : calorimétrie par effet Joule, et somme algébrique " +
        "$\\Delta U = W + Q$. Dans le second, les signes de $W$ et $Q$ sont " +
        "<strong>toujours donnés tout faits</strong> par l'énoncé : aucun exercice ne demande de " +
        "<strong>déterminer</strong> un signe à partir d'une description physique (« le système " +
        "cède $80$ J au milieu extérieur »), alors que c'est là que la convention récepteur se " +
        "joue vraiment et que le baccalauréat l'attend. Aucun exercice non plus ne porte sur une " +
        "compression de gaz, ni ne demande de remonter de $\\Delta T$ à la capacité thermique $c$ — " +
        "pourtant le but du protocole décrit dans le troisième attendu officiel. Prévoir un travail " +
        "spécifique sur la détermination des signes, que le manuel ne fournit pas sous forme " +
        "d'exercice.",

  erreurs: [
    {
      titre: "Additionner les valeurs absolues au lieu des valeurs algébriques",
      eleve: "Pour un système qui reçoit $W = 50$ J et cède $Q = -80$ J, l'élève annonce " +
             "$\\Delta U = 130$ J au lieu de $-30$ J : il a additionné les deux nombres sans leur " +
             "signe. Ou bien, voyant un signe moins, il soustrait deux fois et trouve $-130$ J.",
      cause: "Le mot « somme » du premier principe est lu comme « addition de deux quantités », et " +
             "les quantités d'énergie sont spontanément pensées comme positives — on ne parle pas " +
             "d'une chaleur négative dans la vie courante. Le fond du problème est que " +
             "$\\Delta U = W + Q$ est une <strong>somme algébrique</strong> : le signe ne " +
             "qualifie pas l'énergie, il indique le <strong>sens du transfert</strong>. Un $Q$ " +
             "négatif ne signifie pas « une chaleur négative », qui n'aurait aucun sens, mais « de " +
             "l'énergie qui sort du système ». Rien dans l'écriture ne le rappelle.",
      remede: "Faire lire chaque terme comme une <strong>flèche</strong> avant de calculer : un " +
              "nombre positif est une flèche qui <strong>entre</strong> dans le système, un nombre " +
              "négatif une flèche qui <strong>sort</strong>. Faire dessiner le système en boîte, " +
              "avec les deux flèches et leurs valeurs. La somme algébrique devient alors un bilan " +
              "visuel : ce qui entre moins ce qui sort.<br/><br/>" +
              "Imposer ensuite le <strong>pronostic avant calcul</strong>, qui ne coûte rien et " +
              "attrape l'erreur : si ce qui sort dépasse ce qui entre, l'énergie interne " +
              "<strong>diminue</strong>, donc $\\Delta U < 0$, donc le système se refroidit. On " +
              "sait avant d'additionner que la réponse sera négative, et un résultat de $+130$ J " +
              "se rejette immédiatement.<br/><br/>" +
              "Ancrer enfin sur le <strong>sens physique</strong>, qui est le meilleur garde-fou : " +
              "un système qui reçoit $50$ J et en perd $80$ a perdu $30$ J au total. Un enfant " +
              "saurait le dire avec de l'argent de poche ; c'est exactement le même calcul, et le " +
              "rappeler dédramatise. Le premier principe n'est rien d'autre qu'un bilan comptable " +
              "de l'énergie.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 4) : l'exercice 4 donne W = 50 J et Q = -80 J,
         réponse -30 J. C'est le seul exercice du tirage à MÉLANGER un terme
         positif et un terme négatif dans cet ordre, et c'est le meilleur
         support de l'erreur pour trois raisons : la réponse est négative (donc
         l'élève qui additionne les valeurs absolues trouve +130 J, dont le
         signe crie l'erreur) ; le terme négatif est le PLUS GRAND en valeur
         absolue (80 > 50), donc le pronostic du remède s'applique
         directement ; et les nombres sont assez petits pour être traités de
         tête, ce qui concentre l'attention sur le signe et non sur le calcul.
         L'exercice 6 (W = -200 J, Q = 80 J, réponse -120 J) est la variante
         symétrique et se lit utilement juste après ; l'exercice 12
         (W = -100 J, Q = -120 J, réponse -220 J) est le seul cas où les deux
         termes sont négatifs, et il est le plus facile puisqu'aucun mélange
         n'est en jeu. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier de convertir les minutes en secondes",
      eleve: "Pour une résistance de $P = 60$ W fonctionnant pendant $\\Delta t = 8$ min, l'élève " +
             "écrit $W = 60 \\times 8 = 480$ J au lieu de $28\\,800$ J, et annonce une élévation de " +
             "température de $0{,}38$ °C au lieu de $22{,}97$ °C. Le résultat est faux d'un facteur " +
             "$60$.",
      cause: "Le watt est une énergie <strong>par seconde</strong>, et c'est une information portée " +
             "par l'unité, pas par le symbole. L'élève voit $P$ et $\\Delta t$, applique " +
             "$W = P \\Delta t$, et rien dans la formule ne lui rappelle quelle unité de temps elle " +
             "suppose. Les énoncés du chapitre alternent délibérément les secondes ($480$ s, " +
             "$300$ s) et les minutes ($8$ min, $10$ min), ce qui est réaliste — un protocole de " +
             "travaux pratiques se chronomètre en minutes — mais désamorce toute routine : " +
             "l'élève qui a pris l'habitude de ne pas convertir se fait piéger au premier énoncé " +
             "en minutes.",
      remede: "Faire du <strong>décodage de l'unité</strong> un réflexe : « watt » se lit " +
              "« joule par seconde ». Si l'énergie doit sortir en joules, le temps doit entrer en " +
              "secondes. Ce n'est pas une règle supplémentaire, c'est la définition du watt, et la " +
              "faire énoncer à voix haute avant le premier calcul suffit souvent.<br/><br/>" +
              "Imposer ensuite une <strong>ligne de conversion séparée</strong>, avant la formule, " +
              "sur le modèle de l'exemple résolu du cours qui écrit " +
              "$\\Delta t = 10 \\times 60 = 600$ s. Tant que le temps n'est pas en secondes sur la " +
              "copie, on n'ouvre pas $W = P\\Delta t$. Une ligne de plus, et l'erreur " +
              "disparaît.<br/><br/>" +
              "Donner enfin un <strong>repère d'ordre de grandeur</strong> qui rejette le résultat " +
              "sans le refaire : chauffer un quart de litre d'eau de quelques dizaines de degrés " +
              "demande quelques <strong>dizaines de milliers</strong> de joules, et une résistance " +
              "de quelques dizaines de watts met plusieurs <strong>minutes</strong> à le faire. Une " +
              "élévation de $0{,}4$ °C après huit minutes de chauffage est invraisemblable : " +
              "personne ne monterait un calorimètre pour mesurer cela.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         P = 60 W, m = 0,30 kg, dt = 480 s, réponse 22,97 °C. Le tirage est ici
         particulièrement instructif : les six exercices du moule calorimétrie
         donnent TOUS leur durée en SECONDES (480, 300, 600, 420, 360, 300 s),
         de sorte qu'aucun exercice numéroté ne pose la question de la
         conversion. L'élève est donc entraîné sur une routine que l'évaluation
         casse aussitôt — sa question 1 donne dt = 8 min, soit exactement les
         480 s de l'exercice 1 sous une autre écriture. Le renvoi pointe donc
         le 1 à dessein : c'est le même problème physique que la question
         d'évaluation, à la conversion près, et le faire remarquer en classe
         installe le réflexe avant l'épreuve plutôt qu'après. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre le transfert thermique et la température",
      eleve: "L'élève écrit « $Q = 20$ °C » ou « le système a reçu une chaleur de $35$ degrés ». " +
             "Devant $\\Delta U = mc\\Delta T$, il remplace $\\Delta T$ par la température finale " +
             "($35$ °C) au lieu de l'élévation, ou raisonne comme si un corps « contenait de la " +
             "chaleur ».",
      cause: "La langue courante confond les deux : on dit « il fait chaud », « la chaleur de " +
             "l'été », et un corps chaud semble « contenir de la chaleur ». En physique la " +
             "distinction est stricte. La <strong>température</strong> est une grandeur d'état, en " +
             "degrés ou en kelvins, qui caractérise le système à un instant. Le <strong>transfert " +
             "thermique $Q$</strong> est une énergie <strong>échangée</strong>, en joules, qui " +
             "n'existe que pendant une transformation : un système ne « possède » pas de $Q$, il en " +
             "reçoit ou en cède. La définition D3 du cours le dit — c'est un " +
             "<strong>transfert</strong> —, mais le mot « chaleur » entre parenthèses réactive " +
             "aussitôt l'usage courant.",
      remede: "Séparer les deux par leur <strong>unité</strong>, qui ne ment jamais : $Q$ en " +
              "joules, $T$ en degrés Celsius ou en kelvins. Une phrase qui associe un $Q$ à des " +
              "degrés est fausse avant d'être discutée. C'est le contrôle le plus rapide et il " +
              "ne demande aucune mémoire.<br/><br/>" +
              "Faire ensuite la différence entre ce qu'on <strong>possède</strong> et ce qu'on " +
              "<strong>échange</strong>, qui est le cœur du chapitre : l'énergie interne $U$ et la " +
              "température $T$ décrivent l'<strong>état</strong> du système ; $W$ et $Q$ décrivent " +
              "un <strong>échange</strong> avec l'extérieur. C'est exactement ce que dit la " +
              "définition D1 en appelant $U$ une « fonction d'état », et c'est aussi ce que teste " +
              "l'évaluation. Un bon test : on peut demander « quelle est la température de ce " +
              "corps ? », jamais « quelle est la chaleur de ce corps ? ».<br/><br/>" +
              "Faire enfin lire $\\Delta T$ comme une <strong>différence</strong> et non comme une " +
              "valeur : le symbole $\\Delta$ signifie « variation de », ici « élévation de " +
              "température ». Écrire $\\Delta T = T_{final} - T_{initial}$ une fois au tableau lève " +
              "l'ambiguïté. C'est d'ailleurs la raison pour laquelle une élévation de température " +
              "a la même valeur en degrés Celsius et en kelvins, ce qui surprend toujours et mérite " +
              "d'être expliqué : les deux échelles ont le même pas.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne
         P = 50 W, m = 0,20 kg, dt = 600 s, réponse 35,89 °C. C'est la plus
         forte élévation du tirage, et c'est précisément ce qui en fait le bon
         support : 35,89 °C est un nombre qui RESSEMBLE à une température
         ambiante plausible, ce qui invite l'élève à le lire comme la
         température finale de l'eau plutôt que comme une élévation. Faire
         poser la question « l'eau est-elle à 35,89 °C à la fin ? » oblige à
         constater que l'énoncé ne donne AUCUNE température initiale — donc que
         la réponse ne peut être qu'une variation. Sur l'exercice 7 (réponse
         5,74 °C) la question ne se poserait pas : personne ne confond 5,74 °C
         avec la température d'un calorimètre. Le renvoi est donc choisi pour
         que l'ambiguïté soit VISIBLE et discutable en classe. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Décider du signe d'après le sens du mot plutôt que d'après le système",
      eleve: "Devant « le gaz fournit un travail de $200$ J à l'extérieur », l'élève écrit " +
             "$W = +200$ J parce que le mot « fournit » lui paraît positif. Ou, devant « le système " +
             "est refroidi, il perd $150$ J », il hésite longuement puis choisit au hasard, sans " +
             "savoir ce qui décide.",
      cause: "La convention récepteur est une règle d'orientation, et l'élève l'applique sans " +
             "avoir identifié par rapport à quoi elle s'oriente. Tout dépend du " +
             "<strong>point de vue adopté</strong> : la même énergie de $200$ J est positive pour " +
             "celui qui la reçoit et négative pour celui qui la donne. La convention récepteur " +
             "impose de se placer <strong>du point de vue du système étudié</strong>, et rien " +
             "d'autre — mais les énoncés emploient des verbes (« fournit », « cède », " +
             "« perd », « absorbe ») dont la charge affective brouille la lecture. L'élève répond " +
             "au mot au lieu de répondre à la question.",
      remede: "Imposer la <strong>question unique</strong>, toujours la même, avant d'écrire le " +
              "moindre signe : « cette énergie ENTRE-t-elle dans mon système, ou en SORT-elle ? ». " +
              "Entre : plus. Sort : moins. Aucun autre critère, et surtout pas le verbe employé. " +
              "Faire écrire la question en toutes lettres dans la marge les premières fois.<br/><br/>" +
              "Faire ensuite <strong>encadrer le système</strong> sur la copie, littéralement : un " +
              "trait fermé autour de ce qu'on étudie, les flèches d'énergie qui le traversent. " +
              "Beaucoup d'hésitations viennent de ce que l'élève n'a jamais décidé où passe la " +
              "frontière. La méthode 1 du cours commence d'ailleurs par « définir le système fermé " +
              "étudié », et ce n'est pas une formalité de rédaction.<br/><br/>" +
              "Traduire enfin le <strong>vocabulaire des énoncés</strong> une fois pour toutes, en " +
              "tableau au tableau : « reçoit », « absorbe », « on lui apporte » $\\rightarrow$ " +
              "positif ; « cède », « fournit », « perd », « dégage », « est refroidi » " +
              "$\\rightarrow$ négatif. Cinq minutes de traduction collective valent mieux que dix " +
              "corrections individuelles, et le tableau reste valable jusqu'au baccalauréat.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les quarante-
         deux énoncés tirés qui portent sur le premier principe DONNENT tous
         les signes tout faits, et le disent explicitement — « valeurs
         algébriques : positives si reçues, négatives si cédées ». Aucun énoncé
         ne décrit une situation physique en français dont l'élève devrait
         DÉDUIRE le signe. L'erreur ne peut donc pas être remédiée par un
         exercice du chapitre : les exercices testent l'addition algébrique
         (erreur 1 de cette fiche), jamais la détermination du signe. C'est la
         limite signalée dans la `note`, et elle est sérieuse puisque le
         baccalauréat, lui, donne des énoncés en français. Le seul support du
         livre est la question 2 de l'évaluation (« un travail cédé est compté
         comment ? ») et, depuis le 2026-09-17, la question 3 réécrite — qui
         décrit la situation en français et fait DÉDUIRE les deux signes —,
         mais la règle éditoriale du projet interdit de renvoyer
         vers l'évaluation notée : on remédie avant d'évaluer. Le remède
         s'appuie donc sur le piège du cours — qui décrit exactement cette
         erreur — et sur un tableau de traduction à construire en classe. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $P = 25$ W, $\Delta t = 8$ min, $m = 0{,}20$ kg, calculer $\Delta T$.
          Trois étapes enchaînées (conversion, $W = P\Delta t$, puis
          $\Delta T = W/(mc)$), mais toutes dans le sens direct et toutes
          données par le cours : c'est une exécution en chaîne, « réaliser ».
     Q2 — un travail cédé est compté comment ? Restitution de la convention
          récepteur, énoncée dans la définition D2 et dans le piège du cours :
          « s'approprier ». C'est l'erreur 4 de cette fiche.
     Q3 — RÉÉCRITE le 2026-09-17. L'ancien énoncé ($W = 200$ J, $Q = -60$ J,
          calculer $\Delta U$) DONNAIT les deux signes tout faits et ne
          demandait qu'une addition ; la Q2 du même devoir énonce déjà la
          convention récepteur et la Q5 l'applique au cas $Q = 0$. Trois
          questions sur cinq portaient sur la même convention, dont une sans
          aucune difficulté.
          Le nouvel énoncé décrit la situation EN FRANÇAIS — un gaz qui
          « fournit » $200$ J de travail et « reçoit » $60$ J de la flamme — et
          demande de juger Léo, qui additionne les deux au motif que les deux
          verbes lui paraissent positifs. Il faut EXPLIQUER que le signe se lit
          dans le sens du transfert par rapport au système, jamais dans le
          verbe : produire une explication, donc « communiquer ».
          Le calcul reste nécessaire, et il porte sur les quatre combinaisons
          de signes possibles : $-200 + 60 = -140$ J contre $+260$, $+140$ et
          $-260$ J. Le distracteur 1 est le plus retors, car il tombe sur le
          bon écart avec le signe inverse.
          La question porte désormais sur l'erreur 4 de cette fiche — « décider
          du signe d'après le sens du mot plutôt que d'après le système » —
          explicitement SANS renvoi parce que les quarante-deux énoncés tirés
          donnent TOUS les signes tout faits. La limite est sérieuse, puisque
          le baccalauréat, lui, donne des énoncés en français.
     Q4 — que signifie « fonction d'état » ? Il faut juger quatre affirmations
          sur ce dont $\Delta U$ dépend et ne dépend pas, et écarter notamment
          « dépend du chemin suivi » — qui est vrai de $W$ et $Q$ pris
          séparément. C'est un contrôle de cohérence, pas une récitation :
          « valider ».
     Q5 — un système isolé qui reçoit un travail électrique : que devient son
          énergie interne ? Il faut spécialiser $\Delta U = W + Q$ au cas
          $Q = 0$, c'est-à-dire choisir la forme adaptée de la loi générale.
          C'est un raisonnement de cas particulier, pas une restitution :
          « analyser ».

     « Communiquer » est mobilisé une fois depuis la réécriture de la Q3, sur
     le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique — et c'est la seule question du chapitre à
     faire DÉDUIRE les signes d'un énoncé en français, comme le fait le
     baccalauréat. Reste hors de portée ce que celui-ci demande aussi :
     COMMENTER un bilan énergétique en rédigeant, c'est-à-dire dire où
     l'énergie est passée, ce qu'aucun des deux types du corpus ne permet. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "communiquer", "valider", "analyser"]
  }
};
