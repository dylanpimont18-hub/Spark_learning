/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-modele-atome.prof.js
   Fiche professeur du chapitre « Le modèle de l'atome » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 6, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés :
     - moule A (électrons sur la couche M, soit $Z - 10$, K et L étant
       saturées) : exercices IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (nombre de neutrons, $N = A - Z$) : exercices PAIRS 2, 4, 6,
       8, 10, 12.
   Aucun exercice ne demande d'écrire une structure électronique COMPLÈTE
   K(2)L(8)M(x), ni de raisonner sur un ION, ni d'exploiter le symbole
   $^A_Z X$ — alors que l'ion est la définition D4 du cours et que le symbole
   est au cœur de son encadré « piège ». Deux des quatre erreurs ci-dessous
   sont donc volontairement SANS renvoi.

   UNE ANOMALIE DU TIRAGE, DÉTECTÉE PUIS CORRIGÉE À LA SOURCE (2026-09-17).
   La première version de cette fiche signalait que le générateur produisait
   des noyaux physiquement impossibles : le nombre de neutrons était tiré
   INDÉPENDAMMENT de $Z$, si bien que 13 des 27 énoncés donnaient moins de
   neutrons que de protons (impossible au-delà de $Z \approx 20$), et que le
   supplément 8 tirait $Z = 25$ avec $A = 25$, soit un noyau à ZÉRO neutron.
   Arithmétiquement corrects, physiquement inexistants.

   Le défaut a été corrigé dans `js/data/physique-2nde/physique-2nde-modele-atome.js`
   plutôt que contourné dans la fiche : $N$ y est désormais tiré entre $Z$ et
   $Z + 8$, ce qui est la règle de remplissage réelle. Les 27 énoncés du
   tirage sont maintenant TOUS plausibles (vérifié : 0 noyau douteux), et la
   valeur de $A$ de chaque exercice a changé en conséquence — les renvois
   ci-dessous ont été revérifiés un par un contre le nouveau tirage.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-modele-atome"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Ce chapitre est le seul du bloc chimie de la seconde à pouvoir se
     traiter isolément, et c'est une propriété réelle du contenu : il décrit
     une STRUCTURE (noyau, électrons, couches) et n'utilise aucune des
     notions installées par les chapitres 4, 5 et 6.

     Candidats examinés et écartés un par un :
     - ch. 4 (Corps purs et mélanges) : sa définition D1 mentionne les
       « atomes, molécules ou ions », qui sont le vocabulaire de ce
       chapitre-ci. Mais le rapport est purement lexical, et il joue en fait
       dans l'autre sens : c'est le chapitre 4 qui emprunte des mots au
       collège, pas ce chapitre-ci qui aurait besoin du chapitre 4 pour les
       définir. Un élève peut apprendre $A = Z + N$ sans savoir ce qu'est un
       corps pur. Écarté.
     - ch. 6 (Transformations) : l'ajustement d'une équation compte des
       atomes de chaque élément, et l'électroneutralité éclaire la
       conservation de la charge. Mais c'est le chapitre 6 qui gagnerait à
       être précédé par celui-ci, pas l'inverse — et le chapitre 6 a un rang
       INFÉRIEUR (6 contre 7), si bien que le déclarer serait de toute façon
       refusé par `validerPrerequis`. Le vrai constat est donc l'inverse :
       voir plus bas, dans le commentaire du rang.
     - ch. 5 (Solutions) : la masse molaire $M$ est une grandeur atomique,
       mais le chapitre 5 la reçoit comme une donnée d'énoncé et ce
       chapitre-ci ne la définit pas davantage. Aucun lien réel. Écarté.
     - ch. 1 à 3 (mécanique), 8 à 10 (signaux, son, lumière) : aucun lien. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 7, celui du livre. Ce chapitre clôt le
     bloc chimie de la seconde.

     Il faut dire honnêtement qu'un autre ordre se défend, et même se défend
     bien : placer le modèle de l'atome AVANT le chapitre 6 donnerait à
     l'ajustement des équations et à la conservation des éléments un appui
     structurel — on comprend mieux pourquoi le nombre d'atomes se conserve
     quand on sait ce qu'est un atome. Plusieurs progressions académiques font
     ce choix.

     Le rang du livre est néanmoins conservé, pour deux raisons. La première
     est de méthode : la chimie de seconde progresse du MACROSCOPIQUE
     (ce qu'on voit, ce qu'on pèse : mélanges, concentrations, masses qui se
     conservent) vers le MICROSCOPIQUE (ce qu'on modélise), et ce sens-là est
     celui de la démarche expérimentale — on ne postule pas l'atome, on y
     arrive. La seconde est pratique : aucun exercice du chapitre 6 ne demande
     réellement d'ajuster une équation (voir la fiche de ce chapitre), si bien
     que le gain espéré de l'inversion ne se matérialiserait pas dans les
     exercices du manuel.

     La permutation resterait possible et ne créerait aucun cycle, puisque
     aucune des deux fiches ne déclare l'autre en prérequis. Elle est
     simplement jugée moins bonne. Le livre place aussi ce chapitre en
     chapitre 7 : les deux ordres coïncident, et la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 7,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Constitution et transformations de la matière »,
     partie « Description et caractérisation de la matière » / « Vers des
     entités plus stables chimiquement ». Repris aux mots du programme. */
  attendus: [
    "Déterminer la composition d'un atome ou d'un ion monoatomique à partir de la donnée du numéro atomique et du nombre de masse",
    "Utiliser le symbole des éléments et le tableau périodique pour établir la position d'un élément et déterminer sa structure électronique",
    "Déterminer la charge électrique d'un ion monoatomique à partir de la configuration électronique de l'atome correspondant"
  ],

  note: "Le numéro atomique $Z$, le nombre de masse $A$, l'électroneutralité, la répartition en " +
        "couches K, L, M et la notion d'ion sont au programme de seconde : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés ne travaillent que <strong>deux</strong> soustractions : " +
        "$N = A - Z$, et le nombre d'électrons de la couche M, soit $Z - 10$ quand K et L sont " +
        "saturées. Trois manques comptent. D'abord, la structure électronique n'est " +
        "<strong>jamais écrite en entier</strong> : les énoncés du moule A offrent la réponse dans " +
        "leur propre texte (« K et L étant saturées »), si bien que l'élève n'a plus qu'à " +
        "soustraire $10$ — le raisonnement de remplissage, qui est tout l'objet de la méthode du " +
        "cours, lui est épargné. Ensuite, <strong>aucun exercice ne porte sur les ions</strong>, " +
        "alors que c'est la définition D4 du cours et le troisième attendu officiel ci-dessus. " +
        "Enfin, le <strong>symbole $^A_Z X$ n'apparaît dans aucun énoncé</strong>, alors que " +
        "l'inversion de $A$ et $Z$ dans ce symbole est précisément ce que l'encadré « piège » du " +
        "cours désigne comme l'erreur la plus fréquente du chapitre. Prévoir en complément des " +
        "exercices d'écriture de structures électroniques complètes et des exercices sur les ions, " +
        "que le manuel ne fournit pas.<br/><br/>" +
        "<strong>Les noyaux tirés sont tous plausibles, et c'est récent.</strong> Jusqu'au " +
        "2026-09-17, le générateur tirait le nombre de neutrons sans aucun lien avec $Z$ : près " +
        "de la moitié des énoncés proposaient des noyaux <strong>physiquement impossibles</strong> " +
        "(moins de neutrons que de protons, et jusqu'à un noyau de $25$ protons sans aucun " +
        "neutron), arithmétiquement corrects mais inexistants. Le générateur a été corrigé — $N$ " +
        "est désormais tiré entre $Z$ et $Z + 8$ — et les vingt-sept énoncés sont maintenant " +
        "conformes à la règle réelle : un noyau contient, à partir du carbone, au moins autant de " +
        "neutrons que de protons, et c'est ce qui le tient assemblé.<br/><br/>" +
        "L'occasion pédagogique demeure, et elle est même plus saine : poser " +
        "<strong>« ce noyau peut-il exister ? »</strong> sur un noyau inventé au tableau " +
        "(par exemple $Z = 21$ et $A = 24$) travaille exactement la compétence <em>valider</em>, " +
        "sans que le livre ait à imprimer un énoncé faux. Rappeler que le scandium ($Z = 21$) a " +
        "en réalité $24$ neutrons et un nombre de masse de $45$ : l'élève retient la règle par le " +
        "contre-exemple, choisi à dessein plutôt que subi.<br/><br/>" +
        "Enfin, " +
        "la raison profonde du remplissage des couches — pourquoi K s'arrête à $2$ et L à $8$ — " +
        "relève de la <strong>première</strong> et de la physique quantique de " +
        "<strong>terminale</strong> ; la colonne « S'appuie sur » ne peut pas le montrer, " +
        "puisqu'un prérequis ne vise qu'un chapitre du même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 (inverser A et Z) est celle que le cours désigne dans son
     encadré « piège » ; l'erreur 2 est l'erreur de remplissage des couches,
     la plus coûteuse en points ; l'erreur 3 porte sur les ions et n'a aucun
     support dans le tirage ; l'erreur 4 est la conception de l'atome plein,
     qui est un obstacle de représentation et non de calcul. */
  erreurs: [
    {
      titre: "Inverser $A$ et $Z$, ou calculer $N = Z - A$",
      eleve: "Pour un noyau de $Z = 19$ et $A = 45$, l'élève annonce $N = 19 - 45 = -26$ neutrons, " +
             "ou bien $45$ protons et $19$ nucléons. Dans le symbole $^{45}_{19}K$, il lit le " +
             "chiffre du haut comme le nombre de protons.",
      cause: "Les deux nombres sont écrits l'un au-dessus de l'autre, sans étiquette, et rien dans " +
             "leur position ne dit lequel est lequel : l'élève doit mémoriser une " +
             "<strong>convention pure</strong>. Or une convention sans appui se retient une " +
             "semaine. S'y ajoute que la soustraction $A - Z$ n'a pas d'ordre évident pour qui n'a " +
             "pas compris ce que chaque lettre compte — et l'ordre, lui, décide de tout.",
      remede: "Cesser de mémoriser une position et raisonner sur ce que chaque lettre " +
              "<strong>compte</strong>. $Z$ compte les <strong>protons</strong> ; $A$ compte " +
              "<strong>tous</strong> les nucléons, protons et neutrons réunis. Un total est " +
              "toujours plus grand qu'une de ses parties, donc $A \\geqslant Z$ " +
              "<strong>toujours</strong>, et les neutrons s'obtiennent en retirant du total la " +
              "part qu'on connaît : $N = A - Z$. Un élève qui a compris « total moins partie » ne " +
              "peut plus inverser, parce qu'il verrait aussitôt un nombre négatif.<br/><br/>" +
              "Ancrer ensuite la position dans le symbole par une image visuelle simple et " +
              "durable : le <strong>gros nombre est en haut</strong>. $A$, qui est le plus grand, " +
              "occupe la place du haut ; $Z$, plus petit, celle du bas. Un contrôle qui ne demande " +
              "aucune mémoire : si le chiffre du haut est inférieur à celui du bas, le symbole est " +
              "mal recopié.<br/><br/>" +
              "Imposer enfin le <strong>test du signe</strong>, qui attrape l'erreur à tous les " +
              "coups : un nombre de neutrons est un décompte d'objets réels, il ne peut donc " +
              "jamais être négatif. Une réponse négative signale l'inversion avant toute " +
              "relecture. Et un nombre de neutrons nul ou dérisoire devant $Z$ signale, lui, un " +
              "noyau qui n'existe pas — voir la note de cette fiche.",
      /* Vérifié contre le tirage réel de la graine du livre, RELEVÉ À NOUVEAU
         le 2026-09-17 après la correction du générateur (graine 20260816 +
         rang 6) : l'exercice 2 donne Z = 19 et A = 45, réponse N = 26.

         Le renvoi le choisit parmi les six du moule « neutrons » pour une
         raison précise : c'est celui où l'inversion produit le résultat le
         plus parlant. 19 - 45 = -26, un nombre NÉGATIF, immédiatement
         impossible pour un décompte de particules — l'élève n'a pas besoin de
         la correction, il lui suffit du test du signe que le remède installe.

         Les cinq autres tirages du moule donneraient eux aussi un négatif
         (Ex4 : -22, Ex6 : -33, Ex8 : -17, Ex10 : -10, Ex12 : -6), mais les
         deux derniers portent sur de petits noyaux où l'écart reste modeste,
         donc moins spectaculaire à la lecture. Le couple 19/45 offre le
         meilleur compromis : inversion franchement négative, et noyau
         parfaitement plausible (le potassium a bien une vingtaine de
         neutrons).

         NOTE DE MAINTENANCE : ce renvoi a été revérifié parce que la
         correction du générateur (N tiré en fonction de Z) a changé les
         valeurs de A sans changer l'ordre des moules. Le numéro d'exercice et
         la valeur de Z sont inchangés ; seul A est passé de 36 à 45. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Remplir les couches électroniques dans le désordre",
      eleve: "Pour $Z = 16$, l'élève écrit K(2) L(10) M(4), ou K(8) L(8), ou commence par remplir " +
             "la couche M. Il place parfois $10$ électrons sur la couche L « parce qu'il en " +
             "restait $14$ et qu'il fallait bien les mettre quelque part ».",
      cause: "Deux règles doivent tenir ensemble, et l'élève n'en applique qu'une : la " +
             "<strong>capacité maximale</strong> de chaque couche ($2$, puis $8$) et l'" +
             "<strong>ordre de remplissage</strong> (K avant L avant M, chaque couche saturée " +
             "avant la suivante). Rien dans les lettres K, L, M ne dit laquelle vient d'abord — " +
             "ce sont trois lettres consécutives de l'alphabet prises au milieu, sans lien avec " +
             "leur rang. Et la contrainte de saturation est un raisonnement, pas une donnée : elle " +
             "ne se lit nulle part dans l'énoncé.",
      remede: "Faire un <strong>dessin</strong> avant tout calcul : trois cercles concentriques " +
              "autour du noyau, avec leur capacité écrite dessus ($2$, $8$, puis la suite). " +
              "Remplir de l'intérieur vers l'extérieur, en barrant les électrons placés au fur et " +
              "à mesure. L'ordre devient géométrique — on ne peut pas passer au cercle suivant " +
              "sans avoir rempli celui d'avant — et cesse d'être une règle à retenir.<br/><br/>" +
              "Utiliser ensuite l'image de l'<strong>amphithéâtre</strong>, qui rend les deux " +
              "règles évidentes d'un coup : on remplit les rangs du bas avant ceux du haut, et " +
              "chaque rang a un nombre fixe de places. K est le premier rang ($2$ places), L le " +
              "deuxième ($8$ places). Personne ne s'assied au troisième rang tant qu'il reste de " +
              "la place au deuxième.<br/><br/>" +
              "Imposer enfin la <strong>vérification par la somme</strong>, qui attrape toutes " +
              "les erreurs de ce type sans en comprendre aucune : la somme des électrons des " +
              "couches doit valoir exactement $Z$. K(2) L(10) M(4) donne $16$, donc la somme est " +
              "bonne — mais la couche L est au-dessus de sa capacité, ce qui est l'autre moitié " +
              "du contrôle. Les deux tests ensemble, la somme et les capacités, ne laissent " +
              "passer aucune structure fausse.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne Z = 16
         et demande le nombre d'électrons de la couche M, réponse 6.
         Un avertissement s'impose sur ce renvoi et il est assumé : l'énoncé
         PRÉCISE que « K et L étant saturées », ce qui offre une partie du
         raisonnement à l'élève. Le renvoi reste néanmoins juste, et c'est le
         seul du chapitre qui travaille réellement le remplissage : Z = 16 est
         le tirage du moule A où l'écart entre les capacités est le plus
         instructif (2 + 8 = 10, il reste 6 sur M, donc M n'est PAS saturée),
         ce qui permet de faire dire à l'élève que la dernière couche occupée
         peut rester incomplète — exactement le point que l'exemple résolu du
         cours (l'aluminium, M(3)) travaille. Les tirages 9 et 11 (Z = 18,
         M(8)) sont trompeurs à l'inverse : la couche M y tombe pile à 8, ce
         qui laisserait croire qu'elle sature aussi à 8. Ils sont donc écartés
         au profit du 1. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire qu'un ion a gagné ou perdu des protons",
      eleve: "Pour expliquer l'ion $Na^+$, l'élève affirme que « l'atome de sodium a gagné un " +
             "proton ». Ou, pour l'ion chlorure $Cl^-$, qu'« il a perdu un proton, donc il est " +
             "devenu négatif ». Certains concluent que l'ion sodium n'est plus du sodium.",
      cause: "La charge positive est mentalement associée au <strong>proton</strong>, qui est la " +
             "particule positive : pour devenir positif, il semble logique d'en gagner un. Le " +
             "raisonnement est cohérent, il est simplement fondé sur la mauvaise particule " +
             "mobile. Ce qui manque, c'est un fait que rien n'impose de deviner : le " +
             "<strong>noyau ne bouge pas</strong> dans les réactions chimiques, seuls les " +
             "électrons de la périphérie se déplacent. Sans ce fait, les deux explications se " +
             "valent.",
      remede: "Poser d'emblée la <strong>frontière</strong> qui gouverne toute la chimie : le " +
              "noyau est intouchable, c'est le domaine de la physique nucléaire ; les électrons " +
              "de la couche externe sont mobiles, c'est le domaine de la chimie. " +
              "<strong>Toucher au noyau, ce n'est plus faire de la chimie, c'est changer " +
              "d'élément.</strong> Si le sodium gagnait un proton, il deviendrait du magnésium — " +
              "et aucune réaction chimique ne transforme le sodium en magnésium.<br/><br/>" +
              "Faire ensuite raisonner sur le <strong>bilan des charges</strong>, qui est le seul " +
              "raisonnement nécessaire et qui se refait à chaque fois : un atome neutre a autant " +
              "de charges $+$ que de charges $-$. S'il perd une charge $-$ (un électron), il reste " +
              "une charge $+$ en excès : l'ion est positif. C'est un comptage, pas une règle à " +
              "mémoriser, et il donne le signe correct à tous les coups.<br/><br/>" +
              "Lever enfin le <strong>contresens sur le vocabulaire</strong>, qui est la vraie " +
              "source de la confusion pour beaucoup : un <strong>cation</strong> est positif " +
              "alors qu'il a PERDU un électron, ce qui heurte l'intuition. L'astuce du « t » de " +
              "ca<strong>t</strong>ion qui dessine un « $+$ » aide à retenir le signe ; " +
              "l'important reste que le signe se retrouve par le comptage, et non par l'astuce.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : AUCUN des vingt-sept énoncés ne met en scène un ion. Les deux
         moules ne parlent que d'atomes NEUTRES (« on considère un atome neutre
         de numéro atomique Z ») ou de noyaux. Le mot « ion », le mot
         « cation », le mot « anion » et le moindre exposant de charge sont
         absents des douze exercices numérotés comme des quinze supplémentaires.
         La définition D4 du cours et le troisième attendu officiel du
         programme n'ont donc aucun support dans les exercices. Pointer l'un
         d'eux serait un renvoi faux, ce que le projet tient pour pire qu'un
         renvoi absent : un exercice qui demande un nombre de neutrons ne peut
         pas remédier à une conception sur les électrons. La remédiation se
         fait sur le bilan des charges au tableau, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Se représenter l'atome comme une bille pleine",
      eleve: "L'élève dessine l'atome comme un disque plein, ou représente le noyau presque aussi " +
             "gros que l'atome entier. Interrogé sur ce qui occupe l'espace entre le noyau et les " +
             "électrons, il répond « de l'air ».",
      cause: "Toutes les images vues jusque-là — schémas de manuels, illustrations, logos — " +
             "dessinent le noyau et les électrons à des échelles <strong>compatibles</strong>, " +
             "parce qu'un schéma à l'échelle réelle serait impossible à imprimer. L'élève tire " +
             "donc de ces images exactement ce qu'elles montrent, et elles montrent un objet " +
             "compact. Quant à « de l'air », c'est le mot que le langage courant donne au vide : " +
             "l'idée qu'il n'y ait <strong>rien</strong>, littéralement rien, n'a aucun " +
             "précédent dans l'expérience.",
      remede: "Donner l'ordre de grandeur en <strong>rapport</strong> plutôt qu'en puissances de " +
              "dix, qui ne parlent à personne : le noyau est environ <strong>cent mille " +
              "fois</strong> plus petit que l'atome. Puis l'incarner par une comparaison qui se " +
              "visualise : si le noyau était une bille de $1$ cm posée au centre du rond central " +
              "d'un stade de football, les électrons circuleraient dans les tribunes, et tout " +
              "l'espace entre les deux serait <strong>vide</strong>.<br/><br/>" +
              "Prolonger la comparaison sur la <strong>masse</strong>, ce qui la rend encore plus " +
              "frappante : cette bille minuscule concentre pourtant plus de $99{,}9\\,\\%$ de la " +
              "masse de tout le stade. L'atome n'est donc pas seulement vide, il est vide " +
              "<strong>et</strong> extraordinairement déséquilibré — c'est ce double fait que le " +
              "mot « modèle » recouvre.<br/><br/>" +
              "Prévenir enfin l'erreur en annonçant, chaque fois qu'on dessine un atome au " +
              "tableau, que le <strong>schéma n'est pas à l'échelle</strong> : c'est une carte, " +
              "pas une photographie. Dire ce qu'un schéma ne montre pas est aussi utile que de " +
              "dire ce qu'il montre, et cela vaut pour tous les modèles de l'année.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 et vérifiée sur
         le même tirage : les vingt-sept énoncés sont purement numériques et
         demandent tous un décompte (un nombre de neutrons, un nombre
         d'électrons). Aucun ne comporte de schéma, aucun ne pose de question
         sur la structure spatiale de l'atome, aucun ne mentionne une taille ni
         une masse. Un exercice à réponse numérique unique ne peut pas évaluer
         une représentation, et un élève peut réussir les douze exercices
         numérotés en imaginant l'atome comme une bille pleine — c'est
         précisément ce qui rend cette conception si durable. La remédiation
         est orale, sur la comparaison du stade, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — $Z = 6$, $A = 13$, calculer $N$. La relation $A = Z + N$ est donnée
          par le cours et il faut la renverser en $N = A - Z$ ; mais le cours
          fournit explicitement cette forme dans son encadré « piège », et la
          tâche se réduit à exécuter une soustraction dans le bon ordre :
          « réaliser ».
     Q2 — « le numéro atomique $Z$ représente : … », avec « le nombre de
          neutrons » et « le nombre total de nucléons » en distracteurs. Pure
          restitution de la définition D1 du cours : « s'approprier ».
     Q3 — RÉÉCRITE le 2026-09-17. L'ancien énoncé (un atome neutre a
          $Z = 17$ : combien d'électrons ?) se répondait en recopiant $Z$ :
          rien à calculer, et une propriété — l'électroneutralité — que la Q2
          (ce que compte $Z$) et la Q5 (l'ion qui perd un électron) du même
          devoir travaillent déjà, la Q4 couvrant en outre les couches. La
          question était redondante avec trois autres du même devoir.
          Le nouvel énoncé demande de juger la lecture que Yanis fait du
          symbole $^{45}_{19}K$ — il annonce $N = 19 - 45 = -26$ neutrons — et
          d'EXPLIQUER pourquoi le résultat négatif signale l'inversion :
          produire une explication, donc « communiquer ».
          Le calcul reste nécessaire pour écarter le distracteur 1, qui arrive
          au bon nombre ($45 - 19 = 26$) en conservant la lecture fausse du
          symbole.
          La question porte désormais sur l'erreur 1 de cette fiche —
          « inverser $A$ et $Z$, ou calculer $N = Z - A$ » — c'est-à-dire sur
          une convention pure que rien dans la notation ne rappelle.
     Q4 — quelle est la répartition électronique correcte pour $Z = 12$ ? Il
          faut construire mentalement le remplissage, puis écarter trois
          propositions dont chacune viole une règle différente (L(10) dépasse
          la capacité, K(4) aussi, la dernière écrit deux fois la couche L).
          C'est le raisonnement de remplissage complet, avec choix de méthode :
          « analyser ». C'est aussi l'erreur 2 de cette fiche.
     Q5 — un atome qui perd un électron devient … ? Le distracteur « un anion »
          est exactement l'erreur 3 de cette fiche, et « un isotope » teste la
          frontière noyau / électrons. Il faut juger quatre conclusions tirées
          d'un même événement et retenir celle dont le bilan de charge est
          cohérent : « valider ».

     « Communiquer » est mobilisé une fois depuis la réécriture de la Q3, sur
     le format « juger le raisonnement d'un élève » : le type
     `multiple-choice` ne permet pas de rédiger, mais il permet de CHOISIR la
     meilleure explication parmi quatre, ce qui est déjà une tâche de
     communication scientifique. Les cinq compétences du référentiel sont
     désormais toutes représentées dans ce devoir. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "communiquer", "analyser", "valider"]
  }
};
