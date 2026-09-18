/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-reseaux.prof.js
   Fiche professeur du chapitre « Réseaux et protocoles de communication »
   (terminale SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 19 (chapitre 20 de l'ouvrage `lycee-si`, dernier de
   l'ouvrage).

   NEUF énoncés tirés seulement — moins que les 12 exercices numérotés du corps
   du chapitre. Deux conséquences dures, vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 9, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($9 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation.

   TROIS MOULES, relevés un par un :
     - temps de transfert d'un fichier, avec conversion Mo → Mbit
       → exercices 1, 5, 8 ;
     - nombre d'hôtes utilisables d'un sous-réseau, $2^{32-n} - 2$
       → exercices 2, 4, 7 ;
     - débit utile à partir d'un débit brut et d'un overhead
       → exercices 3, 6, 9.

   COUVERTURE MESURÉE, et elle est la MEILLEURE des six chapitres de cette
   campagne : quatre des cinq questions du devoir (Q1, Q2, Q4, Q5) ont un moule
   voisin, et les trois moules couvrent les trois familles de calcul du cours.
   Le seul trou est la question 3 (« quel protocole de transport garantit la
   livraison ordonnée ? » → TCP) : aucun des neuf énoncés ne mentionne TCP,
   UDP, une couche du modèle, ni le moindre protocole. Les neuf sont des
   calculs numériques.

   Le QUIZ comble ce trou et c'est heureux : sa question 2 porte exactement sur
   la distinction TCP/UDP, et sa question 3 sur la lecture d'un masque de
   sous-réseau appliqué à deux adresses réelles — la seule tâche de tout le
   chapitre qui ne soit pas un calcul. Les deux renvois de cette fiche vers le
   quiz sont vérifiés sur son contenu réel.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-reseaux"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     AUCUN prérequis DANS CE DOSSIER, et c'est un constat mesuré, pas une
     facilité. Ce chapitre est le seul du niveau à relever du domaine de
     l'INFORMATION NUMÉRIQUE : il ne partage aucun outil avec la mécanique
     (chapitres 1, 2, 5), aucun avec l'automatique continue (3, 6), et pas
     davantage avec le séquentiel (4).

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (GRAFCET) : le candidat le plus sérieux, et c'est le seul qui
       mérite une vraie discussion. Les deux appartiennent à la partie
       « information » du programme, et un GRAFCET s'implante dans un automate
       qui communique en réseau — c'est même le cas d'usage industriel
       dominant. Mais rien du chapitre 4 n'est NÉCESSAIRE ici : aucun des neuf
       exercices ne mentionne un automate, une étape ni une réceptivité, et le
       cours n'y fait aucun renvoi. C'est une adjacence industrielle, pas une
       dépendance pédagogique. La fiche du chapitre 4 fait exactement la même
       analyse en sens inverse, et écarte celui-ci pour la même raison :
       les deux fiches sont cohérentes. Écarté.
     - ch. 6 (Bode) : rang $6 < 7$, donc déclarable, et la parenté est
       tentante — « bande passante » se dit des deux côtés, et un câble réseau
       a bel et bien une bande passante au sens fréquentiel. Mais c'est une
       HOMONYMIE : la bande passante de ce chapitre est un débit en bit/s, pas
       une plage de fréquences en Hz, et aucun exercice ne fait le pont. Le
       cours ne le fait pas non plus. Écarté.
     - ch. 1, 2, 3, 5 : mécanique et automatique continue. Aucun lien.
       Écartés.

     PRÉREQUIS NON DÉCLARABLE, traité dans la `note` : ce chapitre suppose le
     CODAGE BINAIRE de l'information, vu en seconde et en première (le bit,
     l'octet, les puissances de deux, la conversion binaire/décimal). Les trois
     exercices du moule « sous-réseau » calculent $2^{32-n} - 2$, ce qui est
     inabordable sans cela. `prerequis` ne pouvant désigner qu'un chapitre du
     même niveau, cette dépendance ne peut pas être déclarée en donnée : la
     colonne « S'appuie sur » affichera un tiret. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 7 dans le dossier `si-tle`, celui du
     livre (chapitre 20 de l'ouvrage, 7e et dernier du dossier).

     Le rang 7 n'est pas un rang par défaut, et le raisonnement mérite d'être
     écrit puisque ce chapitre n'a aucun prérequis dans le niveau : il pourrait
     s'enseigner n'importe quand. Trois raisons de le garder en clôture.

     1. IL NE BLOQUE RIEN. Aucun autre chapitre du niveau n'en dépend — c'est
        le seul du domaine information avec le GRAFCET, et le GRAFCET ne
        l'utilise pas. Le placer tôt ne débloquerait aucun autre chapitre,
        alors que placer tôt le chapitre 1 (PFD) en débloque trois.
     2. IL EST LE PLUS ACCESSIBLE DU NIVEAU, et c'est un argument de fin
        d'année. Ses outils mathématiques sont les plus légers de la partie
        terminale : des multiplications par $8$, des puissances de deux, des
        pourcentages. Ni dérivée, ni logarithme, ni complexe. Un chapitre
        abordable en clôture d'année, quand la fatigue est réelle et que les
        révisions commencent, est un choix pédagogique et non un pis-aller.
     3. IL OUVRE SUR L'APRÈS. Les systèmes communicants, l'IoT et la
        cybersécurité sont le prolongement naturel vers le supérieur : terminer
        l'année là-dessus laisse les élèves sur ce qui les attend en BTS ou en
        école, plutôt que sur une formule de mécanique.

     Le livre le range aussi en 7e position de son niveau : les deux ordres
     coïncident, pas de triangle d'alerte.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 7,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 7 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     partie « Analyser et caractériser la transmission de l'information dans un
     système communicant ».

     Bornés à ce que le chapitre traite RÉELLEMENT : le modèle TCP/IP en quatre
     couches, l'adressage IPv4 et le masque de sous-réseau, le débit et sa
     conversion, la distinction TCP/UDP. Rien sur le routage proprement dit,
     rien sur les protocoles applicatifs au-delà de leur nom (HTTP, MQTT),
     rien sur la sécurité — que le corpus n'aborde pas. */
  attendus: [
    "Situer un protocole dans les quatre couches du modèle TCP/IP et justifier le choix de TCP ou d'UDP au regard d'un besoin de fiabilité ou de rapidité",
    "Calculer un temps de transfert ou un débit utile en maîtrisant la conversion entre octets et bits et la part d'overhead protocolaire",
    "Déterminer la capacité d'adressage d'un sous-réseau IPv4 à partir de son masque et dire si deux machines peuvent communiquer directement"
  ],

  note: "Le modèle TCP/IP en quatre couches, l'adressage IPv4 et le masque de sous-réseau, le " +
        "calcul des débits, la distinction TCP/UDP : le chapitre donne de quoi comprendre — et " +
        "surtout de quoi <strong>diagnostiquer</strong> — un système communicant. C'est le seul " +
        "chapitre de la partie terminale dont les élèves utilisent l'objet tous les " +
        "jours.<br/><br/>" +
        "<strong>Le prérequis de ce chapitre est en seconde et en première, et la colonne " +
        "« S'appuie sur » affiche un tiret.</strong> Il suppose le <strong>codage binaire de " +
        "l'information</strong> : le bit, l'octet, les puissances de deux, la conversion " +
        "binaire/décimal. Les trois exercices sur les sous-réseaux calculent $2^{32-n} - 2$, ce " +
        "qui est inabordable sans cela. Un prérequis ne pouvant désigner qu'un chapitre du même " +
        "niveau, cette dépendance ne peut pas figurer dans le tableau ; vérifiez-la vous-même " +
        "avant de commencer, en particulier la table des puissances de deux jusqu'à " +
        "$2^{10}$.<br/><br/>" +
        "Côté mathématiques, <strong>c'est le chapitre le plus léger de la partie " +
        "terminale</strong>, et c'est ce qui justifie sa place en clôture d'année : des " +
        "multiplications par $8$, des puissances de deux, des pourcentages. Ni dérivée " +
        "(contrairement au chapitre 1), ni logarithme, ni nombre complexe (contrairement aux " +
        "chapitres 3 et 6). Si votre groupe a été mis à l'épreuve par l'automatique, ce chapitre " +
        "est un bon endroit pour finir l'année en confiance — et il ouvre sur ce qui les attend " +
        "dans le supérieur.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas.</strong> Le tirage " +
        "comporte <strong>9 énoncés</strong>, en trois moules bien répartis : temps de transfert " +
        "avec conversion Mo → Mbit (exercices 1, 5, 8), nombre d'hôtes d'un sous-réseau (2, 4, 7), " +
        "débit utile à partir d'un débit brut et d'un overhead (3, 6, 9). C'est la " +
        "<strong>meilleure couverture de toute la partie terminale</strong> : les trois familles " +
        "de calcul du cours sont travaillées, et quatre des cinq questions du devoir y trouvent un " +
        "exercice voisin.<br/><br/>" +
        "Le trou, unique : <strong>aucun des neuf énoncés ne mentionne un protocole</strong>. Ni " +
        "TCP, ni UDP, ni IP, ni une couche du modèle — les neuf sont des calculs. La question $3$ " +
        "du devoir noté porte pourtant exactement là-dessus (« quel protocole de transport " +
        "garantit la livraison ordonnée ? »). Le quiz la couvre (sa question $2$ compare TCP et " +
        "UDP en détail), et sa question $3$ est même la <strong>seule tâche non calculatoire de " +
        "tout le chapitre</strong> : deux adresses IP réelles et un masque, à comparer. C'est " +
        "votre meilleur support pour la partie « lecture » du chapitre, et cela vaut la peine de " +
        "ne pas le sauter.",

  erreurs: [
    {
      titre: "Confondre bits et octets, ou oublier le facteur $8$",
      eleve: "Pour un fichier de $71$ Mo sur un lien à $50$ Mbit/s, l'élève écrit " +
             "$t = 71/50 = 1{,}42$ s au lieu de $11{,}36$ s. Ou, inversement, il multiplie le " +
             "débit par $8$ au lieu du fichier.",
      cause: "Les deux unités s'abrègent presque de la même manière — « Mo » et « Mbit », parfois " +
             "« MB » et « Mb » — et l'usage commercial entretient délibérément la confusion : un " +
             "abonnement est vendu en mégabits par seconde, un fichier se mesure en mégaoctets. " +
             "Le facteur $8$ est donc caché dans le vocabulaire, pas dans le calcul. C'est " +
             "l'erreur la plus fréquente du chapitre, et le cours la signale explicitement dans " +
             "son encadré « piège », ce qui confirme qu'elle est structurelle et non anecdotique.",
      /* RENVOI VÉRIFIÉ. Exercice 1 du livre (graine 20260816 + 19, premier
         tirage) : fichier de 71 Mo sur un lien à 50 Mbit/s, donc
         71 × 8 = 568 Mbit puis t = 568/50 = 11,36 s.
         POURQUOI L'EXERCICE 1 ET NON 5 NI 8 (même moule) : mesure des trois
         tirages et de l'écart que produit l'oubli du facteur 8.
           - exercice 1 (71 Mo, 50 Mbit/s)   : juste 11,36 s ; sans le ×8,
             1,42 s → l'erreur fait passer d'une dizaine de secondes à une
             seconde, deux ordres de grandeur PERCEPTIBLES ;
           - exercice 5 (76 Mo, 500 Mbit/s)  : juste 1,22 s ; sans le ×8,
             0,15 s → deux valeurs également « instantanées », l'erreur ne
             choque pas ;
           - exercice 8 (84 Mo, 1000 Mbit/s) : juste 0,67 s ; sans le ×8,
             0,084 s → même problème, tout est instantané.
         L'exercice 1 est le SEUL des trois dont le résultat juste soit de
         l'ordre de la dizaine de secondes, donc le seul où la réponse fausse
         est physiquement invraisemblable pour un élève qui a déjà téléchargé
         un fichier. C'est ce qui rend la discussion possible sans autorité :
         le remède s'en sert.
         Il a de plus le débit le plus PLAUSIBLE des trois pour une connexion
         domestique (50 Mbit/s), ce qui permet la comparaison avec l'abonnement
         familial — autre levier du remède. */
      exercice: { type: "exercice", n: 1 },
      remede: "Faites traiter l'exercice 1 ($71$ Mo à $50$ Mbit/s, réponse $11{,}36$ s) en imposant " +
              "la <strong>conversion sur sa propre ligne</strong>, avant toute division : " +
              "$71$ Mo $= 71 \\times 8 = 568$ Mbit. Une ligne, une opération, et on ne divise " +
              "qu'ensuite.<br/><br/>" +
              "Ce tirage est de loin le mieux choisi des trois pour cette erreur, et cela vaut la " +
              "peine de le savoir : son résultat juste est d'une <strong>dizaine de " +
              "secondes</strong>, donc la réponse erronée ($1{,}42$ s) est " +
              "<strong>invraisemblable</strong> pour quiconque a déjà téléchargé un fichier de " +
              "$71$ Mo sur une connexion à $50$ Mbit/s. Sur les exercices 5 et 8, les deux " +
              "réponses — juste et fausse — sont toutes deux inférieures à $1{,}5$ s : l'erreur " +
              "ne choquerait personne.<br/><br/>" +
              "La règle à faire écrire une fois, et elle suffit : <strong>on compare toujours des " +
              "bits avec des bits</strong>. Le débit est en bit/s, donc le fichier doit être en " +
              "bits. Un octet valant $8$ bits, on multiplie. Et le sens ne s'oublie plus si l'on " +
              "retient que <strong>l'octet est la grosse unité</strong> : convertir en bits donne " +
              "forcément un nombre plus grand.<br/><br/>" +
              "Le système réel qui règle la question pour de bon, et il est dans toutes les " +
              "familles : la <strong>box internet</strong>. L'abonnement annonce " +
              "$300$ Mbit/s ; le navigateur affiche un téléchargement à $37$ Mo/s. Les élèves " +
              "constatent tous les jours cet écart de $8$ et le prennent souvent pour de la " +
              "publicité mensongère. <strong>Ce ne sont pas les mêmes unités, c'est " +
              "tout</strong> — et faire ce calcul-là en classe ($300/8 = 37{,}5$) est la " +
              "meilleure entrée du chapitre. Faites-leur vérifier sur leur propre abonnement : " +
              "c'est un exercice qu'ils refont chez eux."
    },
    {
      titre: "Ignorer l'overhead protocolaire, ou croire que le débit annoncé est le débit disponible",
      eleve: "« Le lien fait $100$ Mbit/s, donc mon fichier passe à $100$ Mbit/s. » Sur un " +
             "exercice avec $20\\%$ d'overhead, l'élève ignore l'information ou la retranche du " +
             "résultat final au lieu du débit.",
      cause: "L'overhead est une information que l'énoncé ajoute et dont l'élève ne voit pas la " +
             "nécessité : il a un débit, il a une taille, il sait faire la division. Le " +
             "pourcentage lui semble un raffinement. Plus profondément, l'idée qu'une " +
             "transmission transporte des données <strong>sur</strong> les données — des " +
             "en-têtes, des acquittements, des numéros de séquence — n'est pas intuitive : on " +
             "imagine le réseau comme un tuyau où l'on verse le fichier, pas comme un service " +
             "postal où chaque paquet a son enveloppe et son adresse.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 19, troisième
         tirage) : débit brut 100 Mbit/s, overhead 20 %, donc
         D_utile = 100 × 0,80 = 80 Mbit/s.
         POURQUOI L'EXERCICE 3 ET NON 6 NI 9 (même moule) : mesure des trois.
           - exercice 3 : 100 Mbit/s, overhead 20 % → 80 Mbit/s ;
           - exercice 6 : 1000 Mbit/s, overhead 15 % → 850 Mbit/s ;
           - exercice 9 : 500 Mbit/s, overhead 10 % → 450 Mbit/s.
         L'exercice 3 est retenu pour deux raisons.
         D'abord son overhead est le PLUS GRAND des trois (20 %), donc l'oubli
         se voit le mieux : 100 au lieu de 80, soit un quart de trop. Sur
         l'exercice 9 (10 %), l'écart serait de 500 contre 450, plus facile à
         confondre avec un arrondi.
         Ensuite son débit brut vaut 100, ce qui rend le pourcentage LISIBLE
         SANS CALCUL : 20 % de 100 c'est 20, donc il reste 80. L'élève voit
         l'opération plutôt que de la subir, et cela permet de discuter du
         SENS (retrancher du débit, pas du résultat) sans que l'arithmétique
         fasse écran. C'est le seul des trois où le débit brut est 100.
         ÉCART AVEC LE DEVOIR VÉRIFIÉ : la question 4 de l'évaluation donne
         500 Mbit/s avec 20 % d'overhead. L'exercice 9 (500 Mbit/s) et
         l'exercice 3 (20 %) partagent chacun UNE des deux valeurs, mais aucun
         ne reprend le couple complet : pas de risque de reconnaissance. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 ($100$ Mbit/s brut, $20\\%$ d'overhead, réponse " +
              "$80$ Mbit/s), et choisissez-le précisément : c'est le seul des trois tirages dont " +
              "le débit brut vaille $100$, donc le seul où le pourcentage <strong>se lit sans " +
              "calcul</strong> — $20\\%$ de $100$, c'est $20$, il reste $80$. L'élève voit " +
              "l'opération au lieu de la subir, et c'est ce qui permet de discuter du " +
              "<strong>sens</strong>. C'est aussi le tirage au plus fort overhead des trois " +
              "($20\\%$ contre $15\\%$ et $10\\%$), donc celui où l'oubli se voit le " +
              "mieux.<br/><br/>" +
              "Le point à faire formuler : l'overhead s'applique au <strong>débit</strong>, pas au " +
              "fichier ni au résultat. Ce n'est pas le fichier qui rétrécit, c'est " +
              "<strong>le tuyau qui est partiellement occupé par autre chose</strong>. Faites " +
              "écrire la formule dans cet ordre : d'abord le débit utile, ensuite seulement le " +
              "temps de transfert.<br/><br/>" +
              "Le système réel qui rend l'overhead visible, et c'est l'image qui marche le mieux : " +
              "le <strong>colis et son emballage</strong>. Quand on expédie un objet, le carton, " +
              "le calage et l'étiquette voyagent aussi — et le transporteur les facture. Sur un " +
              "réseau c'est pareil : chaque paquet transporte son en-tête IP, son en-tête TCP, " +
              "l'adresse de l'expéditeur, le numéro de séquence. Ces octets-là occupent le lien " +
              "sans être vos données. <strong>L'overhead, ce sont les enveloppes.</strong><br/><br/>" +
              "Deux prolongements à poser à l'oral, qui ancrent le chapitre dans le réel et qui " +
              "n'existent dans aucun exercice du livre. D'abord : <strong>pourquoi un gros fichier " +
              "se transfère-t-il plus efficacement que mille petits ?</strong> Parce que chaque " +
              "fichier paie ses enveloppes — mille enveloppes coûtent plus qu'une. Ensuite : " +
              "<strong>pourquoi UDP est-il plus rapide que TCP ?</strong> Moins d'en-têtes, pas " +
              "d'acquittement — donc moins d'overhead. C'est la même notion qui explique les deux, " +
              "et cela fait le pont vers la question de protocole du devoir."
    },
    {
      titre: "Oublier de retirer les deux adresses réservées d'un sous-réseau, ou confondre bits de réseau et bits d'hôte",
      eleve: "Sur un masque $/28$, l'élève répond $16$ hôtes au lieu de $14$. Ou il calcule " +
             "$2^{28}$ au lieu de $2^{32-28} = 2^4$, et annonce $268$ millions d'adresses pour un " +
             "petit réseau d'atelier.",
      cause: "Deux difficultés superposées. La première est la soustraction $32 - n$ : le nombre " +
             "écrit dans le masque est celui des bits de <strong>réseau</strong>, pas des bits " +
             "d'<strong>hôte</strong>, et rien dans la notation « $/28$ » ne le dit. La seconde " +
             "est le $-2$ final, qui relève d'une <strong>convention</strong> et non d'un " +
             "calcul : la première adresse désigne le réseau lui-même, la dernière est l'adresse " +
             "de diffusion. Un élève qui ne sait pas cela n'a aucune raison de retrancher deux, et " +
             "il ne peut pas le deviner — c'est un savoir à donner, pas à déduire.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 19, deuxième
         tirage) : masque /28, donc 32 - 28 = 4 bits d'hôte, 2^4 = 16 adresses
         totales, 16 - 2 = 14 hôtes utilisables.
         POURQUOI L'EXERCICE 2 ET NON 4 NI 7 (même moule) : mesure des trois.
           - exercice 2 (/28) : 4 bits d'hôte, 16 - 2 = 14 ;
           - exercice 4 (/25) : 7 bits d'hôte, 128 - 2 = 126 ;
           - exercice 7 (/27) : 5 bits d'hôte, 32 - 2 = 30.
         L'exercice 2 est le meilleur support pour cette erreur précise, et
         pour une raison arithmétique nette : c'est celui dont les nombres sont
         les plus PETITS (16 adresses), donc le seul où le -2 représente une
         part visible du total — 2 sur 16, soit un huitième. Sur l'exercice 4
         (126 sur 128), l'oubli du -2 donne une erreur de 1,6 % qu'aucun élève
         ne remarquera ; sur l'exercice 7 (30 sur 32), 6 %.
         Décisif en plus : avec 16 adresses seulement, on peut les ÉNUMÉRER au
         tableau (.0 à .15) et montrer du doigt les deux réservées. C'est
         impossible avec 128. C'est exactement ce que demande le remède, et
         c'est ce qui transforme la convention en évidence.
         ÉCART AVEC LE DEVOIR VÉRIFIÉ : la question 5 de l'évaluation porte
         sur /24 (254 hôtes), qu'aucun des trois exercices ne reprend. Pas de
         risque de reconnaissance. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 (masque $/28$, réponse $14$ hôtes), et choisissez-le " +
              "précisément : c'est celui dont les nombres sont les plus petits des trois " +
              "($16$ adresses au total), donc le seul où le $-2$ pèse visiblement — deux sur " +
              "seize, un huitième du réseau. Sur l'exercice 4 ($/25$, $126$ sur $128$), l'oubli " +
              "passerait totalement inaperçu.<br/><br/>" +
              "<strong>Le geste qui transforme la convention en évidence, et il n'est possible que " +
              "sur ce tirage : énumérez les seize adresses au tableau.</strong> Écrivez-les de " +
              "$x.x.x.0$ à $x.x.x.15$, puis entourez la première et la dernière. La première " +
              "($.0$) <strong>désigne le réseau lui-même</strong> — c'est le nom du réseau, pas " +
              "une machine. La dernière ($.15$) est l'adresse de <strong>diffusion</strong> : un " +
              "paquet envoyé là part vers <strong>toutes</strong> les machines à la fois. Il en " +
              "reste quatorze pour les équipements. Avec $128$ adresses, cette énumération serait " +
              "impossible ; avec seize, elle prend une minute et règle la question définitivement." +
              "<br/><br/>" +
              "Imposez ensuite la résolution <strong>en trois lignes numérotées</strong>, comme la " +
              "correction du livre la présente : (1) bits d'hôte $= 32 - 28 = 4$ ; (2) adresses " +
              "totales $= 2^4 = 16$ ; (3) hôtes utilisables $= 16 - 2 = 14$. La ligne 1 est celle " +
              "qu'on saute, et c'est celle qui donne les erreurs à plusieurs millions : " +
              "<strong>le nombre après la barre compte les bits de réseau, pas ceux " +
              "d'hôte</strong>.<br/><br/>" +
              "Le contrôle de vraisemblance à installer : <strong>plus le nombre après la barre " +
              "est grand, plus le réseau est petit</strong>. C'est contre-intuitif, donc il faut " +
              "le dire — un $/30$ n'accueille que deux machines, un $/8$ en accueille " +
              "seize millions. Si le calcul donne l'inverse, c'est le $32 - n$ qui a été " +
              "oublié.<br/><br/>" +
              "Le système réel qui donne un repère durable, et vos élèves l'ont chez eux : la " +
              "<strong>box internet en $192.168.1.x$ avec un masque $/24$</strong>, soit $254$ " +
              "appareils possibles. C'est exactement la question $5$ du devoir. Faites-leur " +
              "raconter combien d'appareils sont connectés chez eux — dix, quinze — puis " +
              "demandez pourquoi le constructeur a prévu $254$ : <strong>parce qu'un " +
              "sous-réseau se dimensionne par puissances de deux, pas au besoin exact</strong>. " +
              "C'est une vraie décision d'ingénieur, et elle explique le chiffre bizarre."
    },
    {
      titre: "Confondre TCP et UDP, ou croire que TCP est « meilleur » parce qu'il est fiable",
      eleve: "« TCP est fiable, donc on l'utilise toujours ; UDP sert quand on ne sait pas " +
             "faire. » Ou l'inverse, sur un exercice de débit : « UDP est plus rapide, donc il a " +
             "un plus gros débit. »",
      cause: "L'élève classe les deux protocoles sur une échelle de qualité alors qu'ils relèvent " +
             "d'un <strong>arbitrage</strong> : la fiabilité se paie en latence et en overhead. " +
             "Le mot « fiable » est valorisant dans la langue courante, et rien dans le cours " +
             "n'oblige à considérer un cas où la fiabilité serait un <strong>défaut</strong>. Or " +
             "c'est précisément le cas en visioconférence ou en jeu en réseau : retransmettre une " +
             "image vieille de $200$ ms est pire que l'abandonner. Sans ce contre-exemple, TCP " +
             "reste « le bon » et UDP « le bricolage ».",
      /* RENVOI VÉRIFIÉ, et VOLONTAIREMENT VERS LE QUIZ. Mesure faite : les
         neuf exercices tirés sont NEUF CALCULS NUMÉRIQUES.
           - moule temps de transfert (1, 5, 8) : une conversion et une
             division ;
           - moule sous-réseau (2, 4, 7) : une puissance de deux moins deux ;
           - moule débit utile (3, 6, 9) : un pourcentage.
         AUCUN des neuf ne mentionne TCP, UDP, IP, Ethernet, ni une couche du
         modèle TCP/IP. Aucun ne demande de choisir un protocole. Renvoyer
         vers l'un d'eux serait un renvoi FAUX : l'exercice ne travaille pas
         la notion.
         Le quiz 2 traite exactement cette erreur : « Le protocole TCP se
         distingue d'UDP par : », bonne réponse « La fiabilité : connexion
         préalable, acquittement et retransmission des paquets perdus », et
         surtout un distracteur « Un débit toujours supérieur à UDP » qui EST
         la seconde moitié de l'erreur de l'élève. La correction détaille le
         3-way handshake, la numérotation des segments, les acquittements, et
         conclut que « UDP est plus léger et rapide mais ne garantit ni la
         livraison ni l'ordre des paquets » — c'est l'arbitrage, énoncé comme
         tel.
         Le remède l'appuie sur le quiz 3 (deux adresses IP réelles et un
         masque /24, à comparer), qui est la SEULE tâche non calculatoire de
         tout le chapitre et le seul endroit du livre où un masque est
         appliqué à de vraies adresses. Les deux renvois sont vérifiés sur le
         contenu réel du quiz. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le quiz 2 est exactement la question manquante, et son distracteur « <em>un débit " +
              "toujours supérieur à UDP</em> » est mot pour mot la seconde moitié de l'erreur. Sa " +
              "correction détaille ce que TCP fait en plus — connexion préalable, numérotation des " +
              "segments, acquittements, retransmission — puis énonce l'arbitrage : UDP est plus " +
              "léger et plus rapide <strong>mais</strong> ne garantit ni la livraison ni " +
              "l'ordre.<br/><br/>" +
              "N'utilisez <strong>aucun exercice</strong> du livre pour cette erreur, et il vaut " +
              "mieux le savoir avant la séance : les neuf énoncés tirés sont neuf calculs. " +
              "<strong>Aucun ne mentionne TCP, UDP, IP ni une couche du modèle</strong>, et aucun " +
              "ne demande de choisir un protocole — alors que c'est la question $3$ du devoir " +
              "noté. Le quiz est votre seule ressource imprimée sur ce point.<br/><br/>" +
              "La formulation à installer, qui interdit le classement par qualité : " +
              "<strong>TCP et UDP ne se classent pas, ils se choisissent</strong>. La question " +
              "n'est jamais « lequel est le meilleur ? » mais « <em>qu'est-ce qui est le pire ici : " +
              "perdre une donnée, ou arriver en retard ?</em> ». Si c'est perdre une donnée → TCP. " +
              "Si c'est arriver en retard → UDP.<br/><br/>" +
              "Les deux systèmes réels qui rendent l'arbitrage évident, et ils sont dans leur " +
              "quotidien. Un <strong>virement bancaire</strong> ou un téléchargement de fichier : " +
              "perdre un octet est inacceptable, attendre une seconde de plus est indifférent → " +
              "<strong>TCP</strong>. Une <strong>visioconférence</strong> ou un jeu en réseau : " +
              "une image perdue ne se voit pas, une image en retard <strong>gèle " +
              "l'écran</strong> → <strong>UDP</strong>. Faites-leur constater que dans un appel " +
              "vidéo, l'image se dégrade parfois mais ne se met jamais en pause pour rattraper le " +
              "passé : <strong>c'est UDP qui abandonne, et c'est un choix, pas une " +
              "panne</strong>.<br/><br/>" +
              "Profitez enfin de ce moment pour traiter la question $3$ du quiz, qui est " +
              "la <strong>seule tâche non calculatoire de tout le chapitre</strong> : deux adresses " +
              "réelles ($192.168.1.10$ et $192.168.2.20$) avec un masque $/24$, et la question de " +
              "savoir si elles communiquent directement. C'est le seul endroit du livre où un " +
              "masque est appliqué à de vraies adresses plutôt qu'à un décompte, et c'est le geste " +
              "qu'un technicien fait tous les jours pour diagnostiquer une panne réseau. " +
              "<strong>Ne le sautez pas : c'est la question la plus professionnelle du " +
              "chapitre.</strong>"
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ sur le module chargé ; `validerProf` exige exactement autant
     de compétences que de questions.

     Q1 ($20$ Mo → $160$ Mbit) → résoudre : application directe du facteur 8,
        une seule multiplication.
     Q2 ($160$ Mbit à $200$ Mbit/s → $0{,}8$ s) → résoudre : une division,
        unités déjà homogènes (pas de conversion à faire). Volontairement plus
        simple que Q1 sur ce point.
     Q3 (protocole garantissant la livraison ordonnée → TCP) → analyser :
        restitution d'une propriété d'un constituant, à distinguer de trois
        distracteurs qui appartiennent à d'autres couches (UDP au transport, IP
        au réseau, Ethernet à l'accès). Aucun calcul. Rattachée à `analyser`
        selon la convention du référentiel SI de l'ouvrage (voir
        REFERENTIELS.si dans prof.js : les questions de restitution y sont
        rattachées à `analyser`, « identifier et caractériser une grandeur ou
        un constituant »).
     Q4 ($500$ Mbit/s brut, $20\%$ d'overhead → $400$ Mbit/s) → résoudre :
        application directe de $D_{\text{utile}} = D_{\text{brut}}(1 - h)$.
     Q5 (masque $/24$ → $254$ hôtes) → modéliser : c'est la seule question du
        devoir où l'élève doit CONSTRUIRE la démarche en trois étapes — passer
        de $24$ à $32-24 = 8$ bits d'hôte, élever $2$ à cette puissance, puis
        retrancher les deux adresses réservées. Aucune formule unique n'est
        fournie par l'énoncé, et les deux premières étapes sont des décisions
        de modélisation (quel exposant ? pourquoi $-2$ ?). C'est la question la
        plus composite du devoir.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés, et le
     cas de `expérimenter` est frappant sur ce chapitre : diagnostiquer un
     réseau est par excellence une tâche de manipulation (ping, traceroute,
     lecture d'une configuration IP), et le corpus n'en propose rien — ni
     exercice, ni question. Voir la note de REFERENTIELS.si dans prof.js : sur
     les 96 questions de l'ouvrage, `expérimenter` et `concevoir` ne sont
     JAMAIS tirés.

     À SIGNALER : Q3 est la seule question du devoir sans exercice
     correspondant — aucun des neuf énoncés ne mentionne un protocole. Le quiz
     la couvre (son énoncé 2). Les quatre autres questions ont chacune un moule
     voisin, ce qui fait de ce chapitre LE MIEUX COUVERT de la partie
     terminale. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'résoudre', 'modéliser']
  }
};
