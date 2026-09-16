/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-transformations.prof.js
   Fiche professeur du chapitre « Transformation physique et chimique »
   (seconde), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 5, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire. Les
   vingt-sept se ramènent à DEUX moules, strictement alternés, et tous deux
   sont des applications ARITHMÉTIQUES de la loi de Lavoisier :
     - moule A (soustraction : $m_2 = m_{réactifs} - m_1$) : exercices
       IMPAIRS 1, 3, 5, 7, 9, 11 ;
     - moule B (addition : $m_{produits} = m_1 + m_2$) : exercices PAIRS 2,
       4, 6, 8, 10, 12.
   Aucun exercice ne demande de CLASSER une transformation en physique ou
   chimique, d'IDENTIFIER réactifs et produits, ni d'AJUSTER une équation de
   réaction — c'est-à-dire aucun des trois gestes que la méthode du cours
   enseigne, et dont deux sont l'objet des définitions D1, D2 et D4. Deux des
   quatre erreurs ci-dessous sont donc volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-transformations"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     ch. 4 (Corps purs et mélanges) : RETENU, et c'est un prérequis de fond.
     Les définitions D1 et D2 de ce chapitre reposent entièrement sur la
     phrase « une nouvelle ESPÈCE CHIMIQUE apparaît » : toute la distinction
     entre transformation physique et chimique tient à ce mot-là, et c'est le
     chapitre 4 qui le définit (sa définition D1). Sans lui, la frontière du
     chapitre est purement verbale — l'élève apprend deux étiquettes au lieu
     d'un critère. Le chapitre 4 fournit en outre l'idée qu'une espèce se
     reconnaît à des grandeurs mesurables, ce qui donne à « nouvelle espèce »
     un contenu expérimental et non seulement déclaratif.

     Écartés, avec leurs arguments :
     - ch. 5 (Solutions aqueuses) : candidat sérieux, puisque la dissolution
       est l'exemple canonique de transformation PHYSIQUE, qu'elle apparaît
       dans le « piège » du cours (le sucre dans l'eau) et dans la question
       Q5 de l'évaluation (le sel dans l'eau). Écarté quand même : le
       chapitre 5 ENSEIGNE à quantifier une dissolution (concentrations,
       dilution), il n'enseigne pas la dissolution elle-même, qui est un
       acquis de collège. Ce chapitre-ci n'a besoin que du fait brut « le
       sucre dissous est toujours du sucre », et ce fait ne demande aucune
       concentration. Le déclarer surchargerait la colonne « S'appuie sur »
       d'une dépendance que l'enseignement ne vit pas.
     - ch. 7 (Le modèle de l'atome) : l'ajustement d'une équation compte des
       ATOMES de chaque élément, et la question Q3 de l'évaluation le fait
       explicitement. Mais le chapitre 7 vient APRÈS (rang 7 contre rang 6),
       et `validerPrerequis` refuserait à juste titre un prérequis de rang
       supérieur. Sur le fond, compter des atomes dans $3\,H_2$ ne demande
       pas de savoir ce qu'est un proton : c'est de la lecture de formule,
       acquise au collège.
     - ch. 1 à 3 (mécanique), 8 à 10 (signaux, son, lumière) : aucun lien. */
  prerequis: [4],

  /* Rang conseillé (2026-09-17) : rang 6, celui du livre. Ce chapitre est le
     troisième du bloc chimie de la seconde et doit venir après le chapitre 4,
     dont il réutilise la notion centrale d'espèce chimique.

     Sa place après le chapitre 5 se défend aussi, même si le lien n'est pas
     déclaré en prérequis : les solutions y fournissent la dissolution comme
     exemple le plus disputé de transformation physique, et la classe l'aborde
     alors avec une expérience récente et quantifiée plutôt qu'avec un souvenir
     de collège. Inverser 5 et 6 resterait possible et ne créerait aucun
     cycle — mais ferait perdre cet appui, pour rien en échange.

     Le livre le place aussi en chapitre 6 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 6,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Constitution et transformations de la matière »,
     partie « Transformation physique » et « Transformation chimique ». Repris
     aux mots du programme. */
  attendus: [
    "Identifier le sens du transfert thermique lors d'un changement d'état et le relier au terme exothermique ou endothermique",
    "Identifier le réactif limitant à partir de la composition initiale du système et de l'équation de réaction",
    "Modéliser une transformation chimique par une équation de réaction et établir la conservation des éléments et de la charge électrique"
  ],

  note: "La distinction entre transformation physique et transformation chimique, les réactifs et " +
        "les produits, l'équation de réaction et la conservation de la masse sont au programme de " +
        "seconde : le chapitre ne déborde pas. Il faut toutefois savoir qu'il en couvre une " +
        "<strong>partie seulement</strong>. Le programme officiel attend aussi, dans ce thème, le " +
        "sens du <strong>transfert thermique</strong> (exothermique / endothermique) et " +
        "l'identification du <strong>réactif limitant</strong> : le chapitre ne les aborde pas, et " +
        "l'enseignant qui suit le manuel seul devra les traiter en dehors de lui. Les attendus " +
        "ci-dessus sont ceux du programme, pas ceux du chapitre — l'écart est signalé ici plutôt " +
        "que dissimulé.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les vingt-sept énoncés tirés ne travaillent qu'<strong>une seule</strong> chose : " +
        "l'arithmétique de la loi de Lavoisier — une addition ou une soustraction de masses. C'est " +
        "beaucoup plus étroit que le chapitre. Aucun exercice ne demande de " +
        "<strong>classer</strong> une transformation en physique ou chimique, d'" +
        "<strong>identifier</strong> réactifs et produits, ni d'<strong>ajuster</strong> une " +
        "équation de réaction — alors que ce sont les trois étapes de la méthode du cours et " +
        "l'objet de trois de ses quatre définitions. Un élève peut donc réussir les douze " +
        "exercices numérotés sans savoir ce qu'est une transformation chimique. " +
        "<strong>L'exemple résolu de la combustion du méthane, lui, est complet</strong> : il lit " +
        "les coefficients d'une équation ajustée, en tire les masses des deux côtés, et vérifie la " +
        "conservation. C'est cet exemple qu'il faut prendre comme modèle de la tâche attendue ; " +
        "prévoir en complément une série d'équations à ajuster et une liste de transformations à " +
        "classer, que le manuel ne fournit pas.<br/><br/>" +
        "Deux remarques de terrain. D'abord, l'arithmétique des exercices est si simple qu'elle " +
        "masque la difficulté réelle : ce qui est dur dans Lavoisier n'est pas d'additionner deux " +
        "masses, c'est de croire que <strong>rien ne s'est perdu</strong> quand une bûche laisse " +
        "trois cendres. Aucun énoncé ne met l'élève devant cette difficulté, et il faut donc la " +
        "poser soi-même. Ensuite, le <strong>système fermé</strong> est la condition de validité " +
        "de toute la loi : les énoncés la rappellent tous (« en enceinte étanche », « dans un " +
        "système fermé »), mais aucun ne fait réfléchir à ce qui se passe quand elle n'est pas " +
        "remplie. Or c'est exactement le cas de toutes les combustions observées dans la vie " +
        "courante, et c'est la clé de l'erreur la plus tenace du chapitre.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 est la confusion physique / chimique, la plus fréquente du
     chapitre, et celle que le cours désigne dans son encadré « piège » ;
     l'erreur 2 est la conception « la masse diminue quand ça brûle », qui est
     l'obstacle historique de Lavoisier lui-même ; l'erreur 3 est l'erreur
     d'ajustement des équations ; l'erreur 4 est l'erreur de lecture du moule A
     et c'est la seule erreur de calcul du chapitre. */
  erreurs: [
    {
      titre: "Classer une dissolution parmi les transformations chimiques",
      eleve: "Devant du sucre qui se dissout dans l'eau, l'élève conclut : « le sucre a disparu, " +
             "donc il s'est transformé ». Il classe de même la fusion de la glace parmi les " +
             "transformations chimiques, « parce que ce n'est plus la même chose ».",
      cause: "Le critère qu'utilise l'élève est le seul dont il dispose : <strong>ce qu'il " +
             "voit</strong>. Or disparaître à l'œil nu et disparaître chimiquement sont deux " +
             "choses très différentes, et rien dans l'observation ne les sépare. La difficulté est " +
             "d'autant plus réelle que le critère correct — « une nouvelle espèce chimique " +
             "apparaît-elle ? » — porte sur des entités <strong>invisibles</strong> : on demande à " +
             "l'élève de trancher sur ce qu'il ne peut pas voir, en ignorant ce qu'il voit. C'est " +
             "un renversement complet de sa façon habituelle de conclure.",
      remede: "Remplacer le critère visuel par une <strong>question unique</strong>, posée dans les " +
              "mêmes termes à chaque fois : « les espèces chimiques présentes à la fin sont-elles " +
              "les mêmes qu'au début ? ». Oui → physique. Non → chimique. Une seule question, et " +
              "elle ne parle jamais d'apparence.<br/><br/>" +
              "Apporter ensuite la <strong>preuve expérimentale</strong> que le sucre est toujours " +
              "là, sans quoi l'élève doit croire le professeur sur parole : on peut le goûter " +
              "(l'eau est sucrée), on peut le récupérer intégralement par évaporation, et sa masse " +
              "n'a pas changé. Un sucre qu'on peut faire revenir n'a pas été transformé, il a été " +
              "dispersé. La <strong>réversibilité par un moyen physique</strong> est d'ailleurs le " +
              "meilleur indice pratique : on refait de l'eau à partir de glace, on ne refait pas " +
              "une bûche à partir de cendres.<br/><br/>" +
              "Faire enfin trier une <strong>liste mélangée</strong> de situations quotidiennes, " +
              "et surtout les défendre à l'oral : la glace qui fond, le fer qui rouille, le sel " +
              "qui se dissout, le pain qui grille, l'eau qui bout, le lait qui tourne. C'est la " +
              "discussion sur les cas litigieux — le pain grillé, le lait tourné — qui installe le " +
              "critère, bien plus que la correction du tri.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : aucun des vingt-sept énoncés ne demande de CLASSER une
         transformation. Les douze exercices numérotés et les quinze
         supplémentaires demandent tous une somme ou une différence de masses,
         et le mot « chimique » n'y apparaît que dans le décor (« une réaction
         acido-basique en système fermé »), jamais comme la réponse attendue.
         Aucun énoncé ne met d'ailleurs en scène une transformation PHYSIQUE :
         les vingt-sept sont des transformations chimiques, ce qui prive
         l'élève de tout contraste. Pointer l'un d'eux serait un renvoi faux,
         ce que le projet tient pour pire qu'un renvoi absent. La remédiation
         se fait sur la liste à trier, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Croire que la masse diminue quand quelque chose brûle",
      eleve: "Devant une bûche réduite en un tas de cendres, l'élève affirme que « la masse a " +
             "diminué, donc de la matière a disparu ». Devant une paille de fer qui brûle et dont " +
             "la masse augmente, il conclut que la balance est déréglée.",
      cause: "L'observation est exacte : le tas de cendres pèse effectivement beaucoup moins que " +
             "la bûche. Ce qui manque à l'élève, ce n'est donc pas l'observation, c'est " +
             "l'<strong>inventaire complet</strong> — les gaz produits, dioxyde de carbone et " +
             "vapeur d'eau, sont partis dans l'atmosphère sans être pesés. Et les gaz ne comptent " +
             "pas comme de la matière dans l'intuition ordinaire : ils sont invisibles, légers, " +
             "impalpables. Cette conception n'a rien d'une négligence, c'est très exactement celle " +
             "que la chimie a tenue jusqu'à Lavoisier — qui a dû peser des gaz en vase clos pour " +
             "en sortir.",
      remede: "Donner d'abord raison à l'observation, puis déplacer la question : ce n'est pas " +
              "« où est passée la masse ? », c'est « <strong>qu'a-t-on oublié de peser ?</strong> ». " +
              "Reformulée ainsi, la classe trouve les fumées toute seule, et l'obstacle devient le " +
              "levier.<br/><br/>" +
              "Montrer ensuite l'expérience <strong>symétrique</strong>, qui est décisive et trop " +
              "rarement faite : la combustion d'une paille de fer, dont la masse " +
              "<strong>augmente</strong>. Si la matière disparaissait en brûlant, cette expérience " +
              "serait impossible. Le fer s'est combiné au dioxygène de l'air, qui pesait quelque " +
              "chose : la masse n'a ni disparu ni été créée, elle a changé de place. Deux " +
              "expériences de sens opposé valent mieux qu'une règle affirmée.<br/><br/>" +
              "Faire enfin peser une réaction en <strong>système fermé</strong>, dans un flacon " +
              "bouché, et constater que la balance ne bouge pas d'un milligramme — puis rouvrir le " +
              "flacon et voir la masse chuter. C'est ce contraste, et non la loi énoncée, qui fait " +
              "comprendre pourquoi les énoncés répètent tous « dans un système fermé » : ce n'est " +
              "pas une formule rituelle, c'est la condition sans laquelle la loi est fausse.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 5) : l'exercice 2 met en scène « la combustion
         du bois dans une enceinte fermée » et donne m_1 = 39,8 g et
         m_2 = 24,8 g de réactifs, pour une masse de produits de 64,6 g. Le
         renvoi le choisit parce qu'il est le seul, parmi les douze exercices
         numérotés, qui mette en scène exactement la situation de l'erreur — la
         COMBUSTION DU BOIS, c'est-à-dire la bûche qui laisse des cendres — et
         qui la traite en ENCEINTE FERMÉE. Le contraste est donc porté par
         l'énoncé lui-même : la même bûche, pesée en système fermé, ne perd
         rien. Les deux réactifs (39,8 g de bois et 24,8 g de dioxygène) sont
         en outre du même ordre de grandeur, ce qui rend visible que le gaz
         pèse — et pèse lourd. C'est le support le plus économique pour faire
         toucher du doigt qu'on avait simplement oublié de peser l'air. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Ajuster une équation en modifiant les formules chimiques",
      eleve: "Pour équilibrer la combustion du méthane, l'élève écrit $CH_4 + O_4 \\rightarrow " +
             "CO_2 + H_2O_2$, ou transforme $H_2O$ en $H_2O_2$ pour « faire tomber les comptes ». " +
             "Il modifie les indices au lieu de placer des coefficients devant les formules.",
      cause: "L'élève traite l'équation comme une <strong>égalité mathématique</strong> : à " +
             "gauche et à droite, il faut le même compte, et tous les chiffres visibles semblent " +
             "disponibles pour y parvenir. Rien dans l'écriture ne signale que les deux positions " +
             "n'ont pas du tout le même statut — l'indice fait partie du <strong>nom</strong> de " +
             "l'espèce, le coefficient dit seulement <strong>combien</strong> on en prend. La " +
             "confusion est donc une confusion de niveau de lecture, pas de calcul.",
      remede: "Poser une analogie qui rend la règle évidente et qu'on peut rappeler d'un mot " +
              "toute l'année : $H_2O$, c'est <strong>le nom d'une recette</strong> ; le " +
              "coefficient devant, c'est <strong>le nombre de parts</strong>. Écrire $H_2O_2$ " +
              "pour avoir plus d'oxygène, c'est changer la recette au lieu d'en refaire une " +
              "fournée — et $H_2O_2$ n'est pas de l'eau, c'est de l'eau oxygénée, qui décolore " +
              "les cheveux et désinfecte les plaies. Deux substances totalement " +
              "différentes.<br/><br/>" +
              "Imposer ensuite un geste matériel qui interdit l'erreur : faire " +
              "<strong>encadrer chaque formule</strong> avant d'ajuster. Ce qui est dans le cadre " +
              "est intouchable ; on n'écrit qu'<strong>devant</strong> les cadres. La règle cesse " +
              "d'être une consigne à retenir pour devenir une contrainte du " +
              "papier.<br/><br/>" +
              "Faire enfin tenir un <strong>tableau de comptage</strong> à trois colonnes — " +
              "élément, nombre d'atomes à gauche, nombre à droite — et l'ajuster " +
              "élément par élément, en commençant par ceux qui n'apparaissent que dans une seule " +
              "formule de chaque côté. Le tableau transforme un tâtonnement en méthode, et rend " +
              "visible ce qui est déjà équilibré à chaque étape.",
      /* Volontairement SANS renvoi, même raison que l'erreur 1 et vérifiée sur
         le même tirage : AUCUN des vingt-sept énoncés ne comporte d'équation
         de réaction. Ni formule chimique, ni symbole d'élément, ni coefficient
         stœchiométrique n'y apparaissent : les deux moules ne manipulent que
         des masses en grammes, désignées par « un premier réactif » et « un
         second réactif ». L'ajustement, qui est pourtant l'objet de la
         définition D4 et de la troisième étape de la méthode du cours, n'a
         donc aucun support dans les exercices. L'exemple résolu du cours (la
         combustion du méthane) et la question Q3 de l'évaluation sont les
         SEULS endroits du chapitre où une équation est écrite — mais la Q3
         appartient à l'évaluation notée, vers laquelle le projet interdit
         tout renvoi de remédiation. La remédiation se fait donc sur une série
         d'équations à ajuster, que l'enseignant doit fournir, et le remède le
         dit. */
      exercice: null
    },
    {
      titre: "Additionner au lieu de soustraire dans un bilan de masses",
      eleve: "Pour une réaction dont les réactifs pèsent $129{,}2$ g et dont le premier produit " +
             "pèse $5{,}7$ g, l'élève annonce $m_2 = 129{,}2 + 5{,}7 = 134{,}9$ g au lieu de " +
             "$123{,}5$ g : le second produit pèserait alors plus lourd que tous les réactifs " +
             "réunis.",
      cause: "Les énoncés des deux moules du chapitre se ressemblent beaucoup — mêmes mots, mêmes " +
             "masses en grammes, même référence à Lavoisier — et ne diffèrent que par ce qui est " +
             "<strong>donné</strong> et ce qui est <strong>cherché</strong>. L'élève reconnaît " +
             "« Lavoisier », se souvient que « ça s'additionne », et applique. Ce n'est donc pas " +
             "une erreur de calcul ni de loi : c'est une <strong>lecture d'énoncé trop " +
             "rapide</strong>, favorisée par la répétition d'un même moule.",
      remede: "Imposer, avant tout calcul, un <strong>schéma en deux colonnes</strong> : " +
              "RÉACTIFS à gauche, PRODUITS à droite, et chaque masse écrite dans sa colonne. La " +
              "question « que me demande-t-on ? » trouve alors sa réponse sur le dessin : si la " +
              "case vide est à droite et qu'on connaît le total de gauche, on " +
              "<strong>soustrait</strong> ; si l'on connaît les deux cases de gauche et qu'on " +
              "veut le total de droite, on <strong>additionne</strong>. Le schéma décide, pas la " +
              "mémoire.<br/><br/>" +
              "Faire ensuite énoncer la loi comme une <strong>balance à deux plateaux</strong>, " +
              "image qui porte à elle seule les deux moules : le plateau des réactifs et le " +
              "plateau des produits sont toujours à l'équilibre. Trouver une masse manquante, " +
              "c'est simplement compléter le plateau le plus léger — et l'on ne complète jamais " +
              "un plateau en ajoutant au plateau d'en face.<br/><br/>" +
              "Installer enfin un <strong>contrôle de cohérence immédiat</strong>, qui attrape " +
              "l'erreur sans rien comprendre : <strong>un seul produit ne peut jamais peser plus " +
              "lourd que tous les réactifs réunis</strong>. Une réponse supérieure au total donné " +
              "est fausse avant d'être vérifiée. Ce test est gratuit et ne rate jamais cette " +
              "erreur-là.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         m_réactifs = 129,2 g et m_1 = 5,7 g, réponse m_2 = 123,5 g. Le renvoi
         le choisit parmi les six du moule A pour une raison chiffrée : c'est
         celui où le DÉSÉQUILIBRE entre les deux produits est le plus fort
         (5,7 g contre 123,5 g, soit un rapport de plus de vingt). L'addition
         fautive donne 134,9 g, un nombre à peine plus grand que le total des
         réactifs (129,2 g) — assez proche pour ne pas choquer au premier coup
         d'œil, assez au-dessus pour être impossible. C'est exactement la
         configuration où le contrôle de cohérence du remède (« un produit ne
         peut pas peser plus que tous les réactifs ») fait son travail sans que
         l'élève ait besoin de refaire le calcul. Les autres tirages du moule
         (70,0/26,1 ; 57,5/27,3 ; 58,3/14,5 ; 68,8/41,0 ; 78,9/62,8) donnent
         des produits plus équilibrés, sur lesquels l'absurdité de l'addition
         est moins immédiate. */
      exercice: { type: "exercice", n: 1 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — la vaporisation de l'eau est une transformation … ? Il faut
          appliquer le critère du cours (les espèces sont-elles les mêmes ?) à
          une situation concrète pour la classer, ce qui est la première étape
          de la méthode du cours et non une restitution : « analyser ».
     Q2 — $m_1 = 25$ g et $m_2 = 15$ g réagissent, calculer la masse de
          produits. Relation donnée, sens direct, une addition : « réaliser ».
     Q3 — combien d'atomes d'hydrogène dans $N_2 + 3\,H_2$ ? Il faut lire une
          formule chimique, distinguer coefficient et indice, et les
          multiplier. C'est un dénombrement à exécuter sur une donnée
          fournie, sans choix de méthode : « réaliser ». C'est aussi le seul
          endroit du chapitre, évaluation comprise, où une équation est lue.
     Q4 — masse des réactifs $90$ g, premier produit $35$ g, calculer le
          second. C'est le moule A, et l'erreur 4 de cette fiche. La relation
          de Lavoisier est donnée sous forme d'égalité et doit être RENVERSÉE
          en soustraction, après avoir décidé de quel côté se trouve la
          grandeur manquante : « analyser ».
     Q5 — dissoudre du sel fait disparaître le sel : est-ce chimique ? Le
          distracteur « oui, car le sel n'est plus visible » est exactement
          l'erreur 1 de cette fiche. Il faut juger la validité d'une
          conclusion tirée d'une observation, et reconnaître que l'observation
          ne prouve pas ce qu'elle semble prouver : « valider ».

     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. */
  competences: {
    evaluation: ["analyser", "réaliser", "réaliser", "analyser", "valider"]
  }
};
