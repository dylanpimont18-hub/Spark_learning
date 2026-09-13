/* =========================================================
   Spark Learning – js/data/prof/3e/3e-sections-solides.prof.js
   Fiche professeur du chapitre « Sections de solides » (troisième), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions reprises du CHAPITRE PILOTE du niveau, js/data/prof/3e/
   3e-thales.prof.js (2026-09-13) : KaTeX inline, virgule décimale en {,}, ton
   jamais punitif, remèdes longs et gestes de classe réalisables, renvois
   vérifiés contre le tirage réel de la graine du livre.

   CE CHAPITRE EN PARTICULIER, ET SA PLACE DANS LE NIVEAU. C'est le seul
   chapitre de troisième dont la difficulté principale n'est ni calculatoire ni
   rédactionnelle : elle est de VISUALISATION. Prévoir la forme d'une coupe
   demande de se figurer un plan traversant un volume, et c'est un geste mental
   que rien, avant lui, n'a entraîné. C'est pourquoi deux des cinq compétences
   déclarées plus bas sont « représenter » — c'est le meilleur endroit du
   niveau pour le faire honnêtement, et ailleurs ce serait de la complaisance.

   C'est aussi le chapitre qui referme la série ouverte par Thalès : une coupe
   parallèle à la base est une configuration de Thalès transportée dans
   l'espace, et le rapport de réduction y est un rapport d'homothétie. Les
   trois chapitres se répondent, et le dire en classe fait gagner du temps.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-sections-solides"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js).

     ch. 9 (homothéties, rang 9) : le « rapport de réduction » $k = h'/h$ du
     chapitre n'est rien d'autre qu'un rapport d'homothétie, et la section
     parallèle à la base EST l'image de la base par une homothétie de centre le
     sommet. Le dire explicitement évite d'introduire une notion neuve là où il
     n'y en a pas, et donne d'un coup l'effet sur les aires ($k^2$), qui est la
     question la plus rapportée au brevet sur ce chapitre.

     ch. 11 (volumes, rang 11) : le chapitre parle sans cesse de cônes, de
     pyramides, de cylindres, de bases, de hauteurs et de sommets. Ce
     vocabulaire, et l'aisance à se représenter ces solides, viennent du
     chapitre précédent. Un élève qui hésite encore sur ce qu'est la hauteur
     d'un cône ne peut pas discuter de la section d'un cône.

     Thalès (rang 8) n'est pas listé comme prérequis DIRECT bien que la vue de
     profil du schéma du cours soit une configuration de Thalès pure : il passe
     ici par l'intermédiaire des homothéties, qui en sont la reformulation, et
     empiler les deux renvois alourdirait la progression sans rien apporter. */
  prerequis: [9, 11],

  /* Rang conseillé (2026-09-13) : rang 12, avant-dernier chapitre de la
     progression. Ce placement tardif n'est pas une relégation, c'est une
     nécessité : le chapitre ne mobilise presque aucune technique nouvelle, mais
     il suppose acquis le vocabulaire des solides (rang 11), le rapport de
     réduction (rang 9) et la configuration de Thalès (rang 8). Il est
     littéralement leur point de rencontre, et il n'a de sens qu'après eux.

     C'est aussi, en fin d'année, un excellent chapitre de SYNTHÈSE : une seule
     question bien posée y fait réviser trois chapitres à la fois. À ce titre,
     il gagne beaucoup à être traité sans hâte plutôt que sacrifié au calendrier.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. */
  rangConseille: 12,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie », thème des solides.
  attendus: [
    "Déterminer et représenter la nature de la section d'un pavé droit, d'un cylindre, d'un cône ou d'une pyramide par un plan parallèle à une face, à une base ou à l'axe",
    "Reconnaître qu'une section parallèle à la base d'un cône ou d'une pyramide est une réduction de cette base, et déterminer le rapport de réduction",
    "Calculer les dimensions et l'aire d'une section à partir du rapport de réduction, en mobilisant l'effet $k$ sur les longueurs et $k^2$ sur les aires",
    "Se représenter et décrire une configuration de l'espace, en distinguant la figure réelle de sa représentation en perspective cavalière",
    "Mobiliser le théorème de Thalès dans une vue de profil pour justifier un rapport de réduction dans l'espace"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "Les sections de solides sont au programme de troisième, et elles y sont attendues sous une " +
        "forme précise : <strong>sections par un plan parallèle à une face, à une base ou " +
        "perpendiculaire à un axe</strong>. La section d'un cône ou d'une pyramide par un plan " +
        "<strong>parallèle à la base</strong> relève pleinement de l'année, avec le rapport de " +
        "réduction et son effet sur les longueurs et les aires : c'est même le cœur du chapitre, et " +
        "la situation la plus fréquemment évaluée au brevet.<br/><br/>" +
        "Les <strong>sections obliques dépassent l'année</strong>, et le cours en contient " +
        "plusieurs. L'affirmation « la section oblique d'un cylindre est une <strong>ellipse</strong> » " +
        "est exacte, elle apparaît dans le piège du cours, dans une question du quiz et dans " +
        "l'introduction — mais l'ellipse n'est <strong>pas une notion du collège</strong>, et sa " +
        "démonstration relève des coniques, donc du supérieur. C'est un très bel objet à montrer et " +
        "un excellent moment de classe, mais il doit être traité en <strong>observation</strong> " +
        "(couper un cylindre de pâte à modeler en biais, regarder la trace) et jamais en exigence. " +
        "Une évaluation de troisième qui demanderait la nature d'une section oblique serait hors " +
        "programme.<br/><br/>" +
        "Même réserve pour la section d'un pavé par un plan oblique, annoncée comme un " +
        "<strong>parallélogramme</strong> dans la méthode du cours : l'affirmation n'est vraie que " +
        "sous conditions, un plan oblique quelconque coupant un pavé selon un triangle, un pentagone " +
        "ou un hexagone selon son orientation. À ne pas énoncer comme une règle générale.<br/><br/>" +
        "En revanche, un point est <strong>au programme et manque au cours</strong> : la " +
        "<strong>représentation en perspective cavalière</strong> et la construction d'une section " +
        "sur un patron ou une vue en perspective. Le chapitre calcule beaucoup et fait dessiner peu, " +
        "alors que le brevet demande régulièrement de <strong>tracer</strong> une section. Prévoir " +
        "une séance de construction à la règle, sur papier, est nécessaire : elle n'est fournie " +
        "nulle part ici.",

  /* Quatre erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent.

     ÉTAT DE LA BANQUE (vérifié contre le tirage réel de la graine du livre,
     2026-09-13) : les huit exercices numérotés posent tous la même tâche,
     « côté de la section $= c \times h'/h$ pour une pyramide coupée
     parallèlement à la base », dans six habillages différents (pyramide
     souvenir, tente, abat-jour, chocolat, silo, présentoir). Aucun ne porte sur
     un cylindre, un cône ou un pavé ; aucun ne demande une nature de section ;
     aucun ne calcule une aire. Deux des quatre remédiations ci-dessous sont
     donc SANS RENVOI, et chacune dit où trouver l'entraînement utile. */
  erreurs: [
    {
      titre: "Croire que la section reproduit une face du solide",
      eleve: "Devant un cylindre coupé par un plan parallèle aux bases, l'élève répond " +
             "« un rectangle », parce que c'est la forme qu'il voit sur le dessin en perspective. " +
             "Devant un cône coupé parallèlement à la base, il répond « un triangle », pour la même " +
             "raison.",
      cause: "Les solides n'ont presque jamais été manipulés en volume : ils ont été rencontrés " +
             "comme des <strong>dessins</strong>, et un dessin en perspective d'un cylindre est " +
             "effectivement composé d'un rectangle et de deux ellipses. L'élève lit donc la figure " +
             "qu'il a sous les yeux, ce qui est un comportement raisonnable. Il croit par ailleurs " +
             "qu'une coupe « aplatit » le solide ou « rabat » une de ses faces, alors que la section " +
             "est une figure <strong>nouvelle</strong>, qui n'existait nulle part avant la coupe. " +
             "C'est le malentendu central du chapitre, et c'est précisément ce que l'ouverture du " +
             "cours, avec son saucisson, cherche à faire vaciller.",
      remede: "Faire couper pour de vrai. C'est le seul chapitre de l'année où le matériel change " +
              "tout, et il coûte deux euros : de la pâte à modeler, ou une pomme de terre, ou un " +
              "rouleau de pâte à sel, et un fil de couture tendu entre deux doigts. Faire fabriquer " +
              "un cylindre, puis le couper <strong>perpendiculairement à l'axe</strong> — un disque " +
              "apparaît. Le refaire <strong>le long de l'axe</strong> — un rectangle. Même solide, " +
              "deux formes, et personne ne discute le résultat parce que chacun l'a dans la main.<br/><br/>" +
              "Formuler alors la phrase que tout le chapitre développe, et la faire recopier : la " +
              "forme de la section <strong>n'appartient pas au solide seul</strong>, elle appartient " +
              "au couple « solide $+$ plan ». Changer le plan change la réponse.<br/><br/>" +
              "Installer un <strong>rituel d'analyse en deux questions</strong>, avant toute réponse, " +
              "qui suffit à traiter toutes les situations exigibles : premièrement, de quel solide " +
              "s'agit-il ? deuxièmement, comment le plan est-il placé — parallèle à la base, " +
              "contenant l'axe, ou autre ? Les deux réponses déterminent la section, et aucune ne " +
              "s'obtient en regardant un dessin en perspective.<br/><br/>" +
              "Faire enfin <strong>dessiner la section séparément</strong>, à côté du solide, dans " +
              "sa vraie forme et sans perspective. Ce geste sépare matériellement la figure de sa " +
              "représentation, et c'est lui qui fait disparaître l'erreur durablement.<br/><br/>" +
              "Les huit exercices numérotés portent tous sur une pyramide coupée parallèlement à la " +
              "base et donnent la nature de la section dans l'énoncé : ils ne travaillent donc pas " +
              "la reconnaissance. L'entraînement utile est dans les trois questions du quiz, qui " +
              "portent respectivement sur un cylindre coupé en biais, une pyramide et un cône.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés annoncent tous, dans leur énoncé, une
         pyramide à base carrée coupée parallèlement à la base, et demandent
         seulement le côté de la section. La nature de la section n'est jamais
         à trouver — elle est donnée. Renvoyer à l'un d'eux pour le malentendu
         central du chapitre serait un renvoi faux. Les trois questions du quiz,
         qui balaient cylindre, pyramide et cône, sont nommées dans le remède. */
      exercice: null
    },
    {
      titre: "Prendre le rapport de réduction à l'envers",
      eleve: "Pour une pyramide de hauteur $12$ cm coupée à $9$ cm du sommet, avec une base de côté " +
             "$13$ cm, l'élève écrit $k = \\dfrac{12}{9}$ puis " +
             "$c' = 13 \\times \\dfrac{12}{9} \\approx 17{,}3$ cm — une section plus grande que la " +
             "base dont elle est pourtant une réduction.",
      cause: "Rien dans les mots « hauteur » et « distance au sommet » ne dit lequel des deux va au " +
             "numérateur, et l'élève place les nombres dans l'ordre où l'énoncé les lui donne. " +
             "C'est exactement l'erreur d'inversion des rapports rencontrée dans le chapitre sur " +
             "Thalès, dans un habillage d'espace : la difficulté n'est pas de connaître la formule, " +
             "elle est de savoir dans quel sens l'écrire. S'y ajoute une difficulté propre à ce " +
             "chapitre : les deux longueurs se mesurent <strong>toutes deux depuis le sommet</strong>, " +
             "ce qui les rend faciles à intervertir, alors que dans Thalès les deux rapports " +
             "portaient sur des segments visiblement différents.",
      remede: "Réinstaller le <strong>contrôle de grandeur avant tout calcul</strong>, exactement " +
              "comme dans le chapitre sur Thalès : la section est-elle plus petite ou plus grande " +
              "que la base ? Puisqu'on coupe entre le sommet et la base, elle est toujours plus " +
              "petite, donc <strong>$k$ est toujours inférieur à $1$</strong>. Un rapport supérieur " +
              "à $1$ est faux, sans qu'il soit besoin de relire une ligne. Faire écrire cette " +
              "phrase en tête du chapitre.<br/><br/>" +
              "Exploiter ensuite la <strong>vue de profil</strong> du schéma du cours, qui est la " +
              "clé pédagogique du chapitre : à droite du schéma, la coupe passant par le sommet " +
              "montre deux triangles emboîtés, le petit dans le grand, avec $h' = 4$ cm et " +
              "$h = 12$ cm. La configuration de Thalès y est immédiatement reconnaissable, et le " +
              "rapport se lit comme on l'a appris quatre chapitres plus tôt : <strong>petit sur " +
              "grand</strong>.<br/><br/>" +
              "Le geste décisif, et il ne coûte rien : exiger que l'élève <strong>redessine la vue " +
              "de profil</strong> pour chaque exercice, avant de calculer. Deux triangles emboîtés, " +
              "deux hauteurs annotées. Passer de l'espace au plan, c'est ramener le problème à " +
              "quelque chose qu'il sait déjà traiter, et l'inversion disparaît en même temps que la " +
              "perspective.<br/><br/>" +
              "Faire vérifier enfin, à la fin de chaque calcul : « ma section est-elle bien plus " +
              "petite que ma base ? ». Deux secondes, et l'erreur ne survit jamais à cette question.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 1 est « une pyramide souvenir de base 8 cm et de hauteur
         6 cm, coupée à 2 cm du sommet ». Le rapport y vaut 2/6, soit un tiers,
         et la section fait 2,7 cm contre une base de 8 cm : l'écart est
         spectaculaire, donc immédiatement contrôlable à l'œil. Un élève qui
         inverse trouve 24 cm pour une section prise DANS une pyramide de 8 cm
         de base — l'absurdité est flagrante, et c'est ce qui en fait le
         meilleur support de remédiation du chapitre. Sa solution imprimée
         écrit le rapport sous forme fractionnaire avant de calculer, ce que le
         remède demande d'exiger. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Appliquer le rapport simple à une aire",
      eleve: "Pour un tétraèdre de hauteur $20$ cm coupé à $10$ cm du sommet, l'élève répond que " +
             "l'aire de la section vaut la <strong>moitié</strong> de celle de la base, au lieu du " +
             "quart. Ou bien, sur un cône coupé au rapport $\\dfrac{2}{3}$, il écrit " +
             "$\\mathcal{A}' = \\mathcal{A} \\times \\dfrac{2}{3}$.",
      cause: "Le rapport $k$ vient d'être établi, il est présent à l'esprit, et l'élève l'applique à " +
             "la grandeur qu'on lui demande — quelle qu'elle soit. C'est la même erreur que celle " +
             "des aires dans le chapitre des homothéties, à ceci près qu'elle est ici " +
             "<strong>doublement masquée</strong> : la difficulté visible du chapitre est la " +
             "visualisation de la coupe, si bien que l'élève, une fois la section identifiée, croit " +
             "le plus dur derrière lui et relâche son attention exactement là où se joue la " +
             "question.",
      remede: "Faire le lien explicitement avec le chapitre des homothéties, et ne pas réintroduire " +
              "la règle comme si elle était neuve : la section parallèle à la base <strong>est</strong> " +
              "l'image de la base par une homothétie de centre le sommet et de rapport $k$. Tout ce " +
              "qui a été établi là-bas vaut ici sans modification — longueurs $\\times k$, aires " +
              "$\\times k^2$. L'élève n'a rien de nouveau à apprendre, il a un pont à faire, et c'est " +
              "à l'enseignant de le nommer.<br/><br/>" +
              "Réactiver au besoin le comptage des cases du schéma des aires du chapitre des " +
              "homothéties : un carré agrandi au rapport $2$ contient quatre copies du petit. Le " +
              "même comptage, lu à l'envers, donne le quart pour une réduction de rapport " +
              "$\\dfrac{1}{2}$.<br/><br/>" +
              "Exiger enfin l'<strong>annonce du facteur avant le calcul</strong>, comme une ligne à " +
              "part entière : « je cherche une aire, donc j'utilise $k^2 = \\dfrac{1}{4}$ ». Écrite " +
              "avant de toucher la calculatrice, cette ligne rend l'erreur presque impossible ; " +
              "écrite après, elle ne sert à rien.<br/><br/>" +
              "Une vérification qui referme la boucle et qui plaît aux élèves : l'exemple du cours " +
              "donne une section de $7{,}11$ cm² pour une base de $64$ cm², et " +
              "$7{,}11 \\div 64 \\approx 0{,}11$, soit bien $\\dfrac{1}{9} = k^2$. Faire poser cette " +
              "division par les élèves plutôt que la leur annoncer.<br/><br/>" +
              "Les huit exercices numérotés demandent tous une <strong>longueur</strong>, jamais une " +
              "aire : ils ne peuvent pas servir ici. L'entraînement chiffré est dans le problème " +
              "guidé du chapitre, dont la troisième tâche fait calculer l'aire d'une section de " +
              "cône, et dans le chapitre des homothéties.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés demandent tous « le côté de la section »,
         c'est-à-dire une longueur. Aucun ne demande une aire, aucun ne fait
         intervenir k². Renvoyer à l'un d'eux pour l'erreur du carré du rapport
         serait un renvoi faux : l'élève ferait l'exercice juste sans jamais
         rencontrer la difficulté. Le problème guidé, nommé dans le remède,
         travaille réellement le point mais n'est pas un exercice numéroté. */
      exercice: null
    },
    {
      titre: "Donner la nature de la section sans justifier l'orientation du plan",
      eleve: "À la question « quelle est la section d'un cylindre par un plan parallèle à ses " +
             "bases ? », l'élève écrit « un disque » et s'arrête. Aucune mention de la position du " +
             "plan, aucun argument sur le rayon, aucune précision sur le fait qu'il s'agit du " +
             "<strong>même</strong> rayon que les bases. Sur une pyramide, il écrit $2{,}7$ cm sans " +
             "avoir nommé le rapport ni dit d'où il vient.",
      cause: "Le résultat est ici souvent trouvé par <strong>intuition visuelle</strong>, et " +
             "l'intuition ne produit pas de phrase : l'élève « voit » un disque, il l'écrit. Il ne " +
             "dissimule pas un raisonnement, il n'en a pas parcouru. Or c'est précisément " +
             "l'<strong>orientation du plan</strong> qui détermine la réponse, et le brevet évalue " +
             "cette prise en compte bien davantage que le mot final. S'y ajoute le contrat implicite " +
             "qui a changé sans être annoncé : depuis la sixième, une bonne réponse valait tous les " +
             "points.",
      remede: "Rendre le contrat explicite et l'afficher. Une réponse complète sur une section tient " +
              "en trois éléments, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. Le solide et l'orientation du plan</strong> : « le plan est parallèle aux " +
              "bases du cylindre ».<br/><br/>" +
              "<strong>2. La propriété invoquée</strong> : « une section parallèle à la base d'un " +
              "cylindre est un disque de même rayon », ou, pour un cône ou une pyramide, « la " +
              "section est une réduction de la base de rapport $k = \\dfrac{h'}{h}$, d'après le " +
              "théorème de Thalès appliqué dans la vue de profil ».<br/><br/>" +
              "<strong>3. La conclusion</strong>, avec les dimensions et leur unité.<br/><br/>" +
              "Un exercice de classe qui prend dix minutes et qui installe le point durablement : " +
              "donner le <strong>même solide</strong> — un cône — et trois plans différents " +
              "(parallèle à la base, contenant le sommet et l'axe, oblique). Les trois réponses " +
              "diffèrent, et il devient impossible d'affirmer quoi que ce soit sans avoir d'abord " +
              "dit où passe le plan. La nécessité de la justification n'est alors plus une règle de " +
              "présentation, elle est une évidence pratique.<br/><br/>" +
              "Un mot sur la rédaction en fin d'année, parce que ce chapitre tombe juste avant le " +
              "brevet : c'est le moment de rappeler que le mot « <strong>donc</strong> » et le nom " +
              "du théorème invoqué ne sont pas décoratifs, ils <strong>sont</strong> la " +
              "démonstration. Une réponse exacte non justifiée y perd la majorité des points, et " +
              "cela se joue en une phrase.<br/><br/>" +
              "Les huit exercices numérotés sont à réponse numérique seule, mais leurs solutions " +
              "imprimées écrivent le rapport sous forme fractionnaire avant de conclure : elles " +
              "servent de modèle minimal à imiter.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 11 est
         « un présentoir de vitrine pyramidal de côté 14 cm et de hauteur 10 cm,
         étagère fixée à 5 cm du sommet » — le rapport y vaut exactement 5/10,
         soit un demi, et la section 7 cm tout rond. Mais l'exercice 11 dépasse
         la numérotation du livre, qui s'arrête à 8. On renvoie donc à
         l'exercice 6 (présentoir de côté 8 cm, hauteur 14 cm, étagère à 5 cm),
         dont la solution imprimée écrit successivement le rapport 5/14, la
         fraction 40/14 et le résultat 2,9 cm avec son unité : c'est la chaîne
         complète que le remède demande de faire recopier, et les valeurs non
         rondes obligent à passer par l'écriture fractionnaire plutôt que par
         un calcul mental non justifié. */
      exercice: { type: "exercice", n: 6 }
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     LE MEILLEUR ENDROIT DU NIVEAU POUR « REPRÉSENTER » (2026-09-13). Sur les
     treize chapitres de troisième, celui-ci est le seul dont plusieurs
     questions consistent réellement à se figurer une configuration de
     l'espace sans qu'aucune figure ne soit fournie et sans qu'aucun calcul ne
     soit possible. Déclarer « représenter » ailleurs serait de la complaisance ;
     ici, ce serait le manquer que d'être malhonnête. Deux questions sur cinq
     le portent, et elles le portent pleinement.

     Q1 (pyramide 10 cm de côté, 15 cm de haut, coupée à 5 cm) : le rapport se
     lit dans l'énoncé, la formule est au cours, l'élève applique. « calculer ».

     Q2 (QCM, cylindre coupé parallèlement aux bases) : aucun chiffre, aucune
     figure, aucun calcul. L'élève doit se figurer un plan horizontal traversant
     un cylindre et voir que la trace est un disque de MÊME rayon — le
     distracteur « disque de rayon plus petit » n'est écarté que par cette
     visualisation, puisque l'analogie avec le cône, elle, suggérerait une
     réduction. C'est « représenter » au sens strict.

     Q3 (cône, rapport 8/12, aire de la section) : trois étapes enchaînées —
     rapport, rayon réduit, aire du disque — toutes techniques, aucune décision
     nouvelle. « calculer ».

     Q4 (QCM, pavé coupé par un plan contenant une diagonale de face et
     perpendiculaire à cette face) : c'est la question la plus difficile de
     l'évaluation, et sa difficulté est entièrement mentale. Il n'y a rien à
     calculer et rien à appliquer : il faut construire dans sa tête un plan
     vertical passant par une diagonale du dessus, et voir la trace qu'il laisse
     sur le pavé. « représenter ».

     Q5 (QCM, tétraèdre coupé à mi-hauteur, rapport des aires) : l'élève doit
     conclure de k = 1/2 sur les longueurs à k² = 1/4 sur les aires, c'est-à-dire
     inférer un facteur à partir d'un autre sans que l'énoncé fournisse la
     moindre dimension. Aucune aire n'est calculable ici. C'est « raisonner ».

     Bilan : représenter ×2, calculer ×2, raisonner. Aucune compétence ne
     dépasse deux questions sur cinq. « modéliser » et « communiquer » ne sont
     pas déclarées : aucune question ne part d'une situation réelle à mettre en
     forme, et aucune ne demande de produire une explication. */
  competences: {
    evaluation: ["calculer", "représenter", "calculer", "représenter", "raisonner"]
  }
};
