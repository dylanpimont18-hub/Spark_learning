/* =========================================================
   Spark Learning – js/data/prof/physique-1re/physique-1re-lewis.prof.js
   Fiche professeur du chapitre « Structure des entités chimiques » (première
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-1re-newton.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE, ET C'EST ICI UNE CONTRAINTE
   DURE. Relevé le 2026-09-17, graine du livre 20260816 + rang 7, ouvrage
   MONO-NIVEAU `lycee-physique-1re` : SEPT énoncés tirés seulement. C'est, de
   très loin, le chapitre le plus pauvre du niveau — vingt à quarante-deux
   énoncés ailleurs, sept ici.

   Deux conséquences que cette fiche respecte à la lettre :
     1. Les sept énoncés sont tous numérotés (le corps du chapitre en accepte
        douze) : le renvoi maximal autorisé est donc « exercice 7 ».
     2. Il ne reste RIEN pour la banque supplémentaire, qui est vide. Tout
        renvoi de type "supplement" est refusé par validerProf — et
        légitimement, puisqu'il désignerait une page inexistante.

   Pourquoi sept. Le générateur produit un énoncé par MOLÉCULE de sa table
   (H2O, NH3, CH4, HF, PH3, HCl, H2S), et une molécule ne se décline pas en
   valeurs numériques comme une force ou une concentration : il n'y a que sept
   cas chimiquement distincts, et le tirage les épuise tous. Ce n'est donc pas
   un défaut de configuration qu'on pourrait corriger en augmentant le nombre
   de tirages — c'est la nature du contenu.

   Ce que le tirage couvre réellement, et c'est étroit : les sept énoncés
   posent EXACTEMENT la même question (« combien de doublets non liants ? »)
   sur sept atomes centraux différents. Trois réponses seulement apparaissent :
   0 doublet (ex. 3, carbone), 1 doublet (ex. 2 azote, ex. 5 phosphore),
   2 doublets (ex. 1 oxygène, ex. 7 soufre), 3 doublets (ex. 4 fluor,
   ex. 6 chlore). Aucun énoncé ne demande une géométrie, aucun ne demande de
   dessiner un schéma de Lewis. Les erreurs 2, 3 et 4 de cette fiche en tirent
   les conséquences.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-1re-lewis"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (première).

     AUCUN chapitre de première ne précède celui-ci dans l'ordre des
     dépendances, et c'est net : ce chapitre porte sur la STRUCTURE des
     entités, les deux autres chapitres de chimie du niveau sur leur
     TRANSFORMATION. Les objets sont différents, les outils aussi.

     ch. 6 (Avancement et stœchiométrie) : ÉCARTÉ. La tentation existe — les
     deux sont de la chimie et le 6 vient avant dans le livre — mais il n'y a
     aucune dépendance de contenu. Le chapitre 6 manipule des moles, des
     coefficients et des tableaux ; celui-ci compte des électrons de valence.
     On peut parfaitement enseigner Lewis avant l'avancement : c'est même ce
     que font beaucoup de progressions, qui ouvrent l'année de chimie par la
     structure de la matière.

     ch. 7 (Titrage) : ÉCARTÉ pour la même raison, et plus nettement encore.

     Le vrai prérequis — la configuration électronique et la classification
     périodique — est un chapitre de SECONDE, non déclarable ici. La `note` le
     dit, et c'est important : sans lui, le chapitre n'a aucun point d'appui. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 8, celui du livre.

     Le rang est ici le MOINS contraint du niveau, et il faut le dire à
     l'enseignant plutôt que de laisser croire à une nécessité : ce chapitre ne
     dépend d'aucun chapitre de première, et aucun chapitre de première ne
     dépend de lui. Il est mobile.

     Deux placements se défendent. Le rang 8, celui du livre, groupe les trois
     chapitres de chimie (6, 7, 8) en un bloc continu — c'est ce qu'on retient
     ici, par cohérence de domaine. Mais placer ce chapitre EN OUVERTURE du
     bloc de chimie, avant le chapitre 6, est tout aussi défendable et même
     plus logique sur le fond : on décrit les entités avant de les faire
     réagir, et l'élève voit alors les formules chimiques du chapitre 6
     ($CH_4$, $NH_3$, $H_2O$) comme des objets dont il connaît la structure au
     lieu de symboles opaques. Si la progression le permet, c'est l'ordre à
     préférer.

     PRÉREQUIS MATHÉMATIQUE À SURVEILLER : aucun, littéralement. Le seul calcul
     du chapitre est une soustraction suivie d'une division par deux. C'est le
     chapitre le plus léger de l'année de ce point de vue, et il peut donc être
     placé dès septembre sans aucune difficulté d'outillage — ce qui est un
     argument de plus en faveur d'un placement précoce. La difficulté est
     entièrement spatiale et conceptuelle. */
  rangConseille: 8,

  /* Attendus de fin de première, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     PREMIÈRE (2019), thème « Constitution et transformations de la matière ».
     Repris aux mots du programme. */
  attendus: [
    "Déterminer le schéma de Lewis d'une molécule ou d'un ion à partir du nombre d'électrons de valence des atomes",
    "Interpréter le nombre de liaisons covalentes que peut établir un atome par la règle du duet ou de l'octet",
    "Déterminer la géométrie d'une entité à partir du dénombrement des doublets liants et non liants autour de l'atome central"
  ],

  note: "Le schéma de Lewis, les règles du duet et de l'octet, et la géométrie des molécules par " +
        "le modèle VSEPR sont au programme de spécialité de première : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Aucun prérequis de première, un prérequis de SECONDE non déclarable et " +
        "absolument indispensable.</strong> La colonne « S'appuie sur » affichera un tiret, et " +
        "c'est exact : ce chapitre ne dépend d'aucun chapitre du niveau, et aucun ne dépend de " +
        "lui — il est <strong>mobile</strong> dans l'année, ce qui est rare et bon à savoir. Il " +
        "suppose en revanche acquises la <strong>configuration électronique</strong> et la " +
        "lecture de la <strong>classification périodique</strong>, qui sont de " +
        "<strong>seconde</strong>. Sans elles, l'élève ne peut pas trouver le nombre d'électrons " +
        "de valence d'un atome, et tout le chapitre s'arrête à la première ligne. C'est le " +
        "prérequis le plus impératif du niveau : si le doute existe, une reprise de vingt " +
        "minutes (numéro de colonne ⟹ nombre d'électrons de valence) est " +
        "<strong>obligatoire</strong>, pas souhaitable.<br/><br/>" +
        "<strong>Aucun prérequis mathématique.</strong> Le seul calcul du chapitre est " +
        "« électrons de valence moins nombre de liaisons, divisé par deux ». Rien d'autre : pas " +
        "de vecteur, pas de puissance de dix, pas de racine. Ce chapitre peut donc être placé " +
        "dès septembre sans la moindre difficulté d'outillage — argument de plus pour l'ouvrir " +
        "le bloc de chimie plutôt que de le fermer. La difficulté est entièrement " +
        "<strong>spatiale</strong> : se représenter des doublets dans l'espace, dont certains " +
        "sont invisibles.<br/><br/>" +
        "<strong>Ce que les exercices travaillent, et ce qu'ils ne travaillent pas — lire " +
        "attentivement, ce chapitre est à part.</strong> Le tirage ne produit que " +
        "<strong>SEPT</strong> exercices, contre vingt à quarante-deux dans les autres chapitres " +
        "du niveau, et la <strong>banque supplémentaire est vide</strong>. Ce n'est pas un " +
        "réglage à corriger : le générateur produit un énoncé par molécule de sa table (eau, " +
        "ammoniac, méthane, fluorure d'hydrogène, phosphine, chlorure d'hydrogène, sulfure " +
        "d'hydrogène), et une molécule ne se décline pas en valeurs numériques comme une force " +
        "ou une concentration. Les sept cas chimiquement distincts sont épuisés.<br/><br/>" +
        "Conséquence directe pour la préparation : <strong>ce chapitre est celui où il faudra " +
        "apporter le plus d'exercices personnels</strong>, et il faut le prévoir. Les sept " +
        "énoncés posent en outre tous <strong>exactement la même question</strong> — compter les " +
        "doublets non liants d'un atome central — si bien que deux des trois attendus officiels " +
        "ne sont travaillés par aucun exercice. <strong>Dessiner un schéma de Lewis</strong> " +
        "(premier attendu) n'est jamais demandé : on compte des doublets, on ne les représente " +
        "jamais. Et la <strong>géométrie</strong> (troisième attendu) n'apparaît dans aucun " +
        "énoncé ; seule la question 3 de l'évaluation la porte. Les molécules multiatomiques, " +
        "les liaisons multiples et les ions sont également absents. Il y a donc ici un vrai " +
        "travail de complément à construire, et c'est la principale information que cette fiche " +
        "doit transmettre.",

  erreurs: [
    {
      titre: "Compter les électrons de valence de travers",
      eleve: "L'élève attribue $6$ électrons de valence au carbone (il compte le numéro atomique) " +
             "ou $7$ au soufre (il confond avec le chlore, voisin de colonne). Le calcul des " +
             "doublets non liants qui suit est alors mécaniquement faux, alors que la méthode, " +
             "elle, est correctement appliquée.",
      cause: "L'erreur n'est pas dans le chapitre, elle est <strong>en amont</strong> — c'est " +
             "le prérequis de seconde qui manque. Deux confusions dominent. La première : " +
             "prendre le numéro atomique $Z$ (le nombre TOTAL d'électrons) pour le nombre " +
             "d'électrons de valence (ceux de la dernière couche seulement) ; pour le carbone, " +
             "$Z = 6$ mais la valence est $4$. La seconde : chercher l'information dans la LIGNE " +
             "de la classification au lieu de la COLONNE. L'élève n'a alors aucun moyen de " +
             "détecter sa faute, puisque la suite du calcul se déroule normalement.",
      remede: "Réinstaller la règle de lecture de la classification, qui est le seul point " +
              "d'appui du chapitre et qui tient en une phrase : le nombre d'électrons de valence " +
              "se lit dans la <strong>colonne</strong>. Colonne 14 (carbone, silicium) ⟹ $4$ ; " +
              "colonne 15 (azote, phosphore) ⟹ $5$ ; colonne 16 (oxygène, soufre) ⟹ $6$ ; " +
              "colonne 17 (fluor, chlore) ⟹ $7$. Faire écrire ce petit tableau en tête de " +
              "cahier, et l'y laisser toute l'année.<br/><br/>" +
              "Utiliser la <strong>parenté de colonne</strong> comme contrôle croisé, et c'est " +
              "ici que le tirage rend service : l'oxygène et le soufre sont dans la même " +
              "colonne, donc même nombre d'électrons de valence, donc même nombre de doublets " +
              "non liants — l'élève peut vérifier son propre résultat sur deux exercices " +
              "différents. Même chose pour l'azote et le phosphore, pour le fluor et le chlore. " +
              "Trois paires de vérification, gratuites.<br/><br/>" +
              "Faire enfin <strong>vérifier l'octet en fin de calcul</strong>, ce qui attrape " +
              "l'erreur à coup sûr : doublets liants $+$ doublets non liants doit donner $4$ " +
              "(soit $8$ électrons) pour tout atome autre que $H$. Un élève qui trouve $3$ ou $5$ " +
              "doublets autour d'un atome central sait immédiatement qu'il s'est trompé quelque " +
              "part — et le plus souvent, c'est ici.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 7) : l'exercice 7 porte sur le soufre dans
         H2S — 6 électrons de valence, 2 liaisons, réponse 2 doublets non
         liants. C'est le meilleur des sept pour cette erreur, et pour une
         raison de tirage : l'exercice 1 (oxygène dans H2O, 6 électrons de
         valence, 2 liaisons, réponse 2) pose exactement le même calcul sur
         l'atome de la MÊME COLONNE. Les deux exercices se contrôlent l'un
         l'autre — un élève qui trouve deux réponses différentes pour l'oxygène
         et le soufre sait qu'il a mal lu la classification, sans qu'on ait
         besoin de le lui dire. Le soufre est préféré à l'oxygène comme point
         d'entrée parce qu'il est le moins familier des deux, donc celui où la
         confusion avec le chlore (7 électrons, voisin de ligne) se produit
         réellement. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Oublier les doublets non liants dans la géométrie",
      eleve: "L'élève annonce que $NH_3$ est <strong>plane</strong> « puisqu'il y a trois liaisons " +
             "autour de l'azote », ou que $H_2O$ est <strong>linéaire</strong> « puisqu'il y a " +
             "deux liaisons ». Il compte les traits visibles et ignore les paires libres.",
      cause: "Les doublets non liants sont <strong>invisibles dans le contour</strong> de la " +
             "molécule, et le mot « géométrie » évoque une forme qu'on voit. L'élève compte donc " +
             "ce qui se dessine. L'obstacle est renforcé par le fait qu'un doublet non liant " +
             "n'est représenté que par deux points ou un petit trait, typographiquement discret, " +
             "à côté de liaisons tracées en grand. Le piège du cours l'identifie explicitement — " +
             "c'est l'erreur emblématique du chapitre.",
      remede: "Faire compter <strong>quatre directions</strong>, pas trois liaisons : autour d'un " +
              "atome central qui respecte l'octet, il y a toujours quatre doublets, donc quatre " +
              "directions occupées dans l'espace. Que certaines portent un atome et d'autres non " +
              "ne change rien à la répulsion — c'est le principe même du modèle VSEPR, et le " +
              "cours l'écrit.<br/><br/>" +
              "Rendre les doublets non liants <strong>matériellement visibles</strong> : un " +
              "modèle moléculaire avec quatre branches dont on laisse une ou deux vides, ou des " +
              "ballons de baudruche noués ensemble, qui se repoussent exactement comme des " +
              "doublets. Le geste vaut ici toute l'explication — l'obstacle est spatial, la " +
              "remédiation doit l'être aussi.<br/><br/>" +
              "Faire enfin construire le <strong>tableau des trois cas</strong> à quatre " +
              "doublets, à partir d'exemples que la classe connaît : $4$ liants et $0$ non " +
              "liant ⟹ tétraédrique ($CH_4$) ; $3$ liants et $1$ non liant ⟹ pyramidale " +
              "($NH_3$) ; $2$ liants et $2$ non liants ⟹ coudée ($H_2O$). Trois lignes, trois " +
              "molécules familières. Chaque doublet non liant « mange » un sommet du tétraèdre — " +
              "la formule est imagée et elle tient.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 porte sur
         l'azote dans NH3 — 5 électrons de valence, 3 liaisons, réponse
         1 doublet non liant. Le renvoi est indirect et c'est assumé : aucun
         des sept énoncés ne demande une géométrie (le tirage ne produit que
         des comptages de doublets). Mais l'exercice 2 est le point d'entrée
         obligé de l'erreur, parce que NH3 est précisément la molécule que le
         piège du cours prend en exemple : l'élève y établit qu'il y a
         1 doublet non liant, et c'est ce 1 — trouvé par lui-même — qui rend
         ensuite indéfendable l'affirmation « NH3 est plane ». La remédiation
         consiste à PROLONGER l'exercice 2 d'une question orale (« combien de
         directions occupées au total ? quelle forme ? »), et le remède dit
         comment. Rappel de contrainte : ce chapitre ne tire que sept énoncés
         et n'a AUCUNE banque supplémentaire ; les renvois y sont bornés à 7 et
         type:"supplement" y est refusé. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Appliquer la règle de l'octet à l'hydrogène",
      eleve: "L'élève cherche à entourer chaque atome d'hydrogène de huit électrons, et ajoute " +
             "des doublets non liants sur les $H$ de $H_2O$ ou de $CH_4$. Ou bien, calculant " +
             "$(1 - 1)/2 = 0$, il conclut que « l'hydrogène ne respecte aucune règle ».",
      cause: "La règle de l'octet est énoncée en premier, répétée le plus souvent, et elle finit " +
             "par absorber la règle du duet — qui ne concerne que deux éléments et paraît " +
             "anecdotique. L'élève retient « huit électrons » comme la règle générale de la " +
             "chimie. Le mot « octet » lui-même, plus marquant que « duet », y contribue. Or " +
             "l'hydrogène n'a qu'une seule couche, la couche K, qui ne peut " +
             "<strong>physiquement</strong> pas contenir plus de deux électrons : il ne s'agit " +
             "pas d'une exception arbitraire.",
      remede: "Justifier la règle du duet par la <strong>structure de l'atome</strong> plutôt que " +
              "de la présenter comme une exception à retenir : la couche K n'a de place que pour " +
              "deux électrons. L'hydrogène ne peut donc pas viser huit, c'est matériellement " +
              "impossible. Une règle qui s'explique ne s'oublie pas comme une liste " +
              "d'exceptions.<br/><br/>" +
              "Rattacher ensuite les deux règles à la même <strong>idée unique</strong>, ce qui " +
              "les rend inséparables : tout atome tend à <strong>saturer sa couche " +
              "externe</strong>. Pour l'hydrogène (couche K), saturer signifie deux électrons ; " +
              "pour le carbone, l'azote ou l'oxygène (couche L), saturer signifie huit. Une seule " +
              "idée, deux nombres — au lieu de deux règles concurrentes dont l'une éclipse " +
              "l'autre.<br/><br/>" +
              "Faire enfin <strong>vérifier chaque hydrogène</strong> à la fin de tout schéma de " +
              "Lewis, systématiquement : un trait, et rien d'autre. Jamais de doublet non liant " +
              "sur un $H$. C'est une règle de relecture qui prend trois secondes et qui attrape " +
              "l'erreur à tous les coups.",
      /* Volontairement SANS renvoi, et vérifié : les sept énoncés tirés
         portent TOUS sur l'atome CENTRAL (O, N, C, F, P, Cl, S) et jamais sur
         l'hydrogène, qui n'apparaît dans les énoncés que dans les formules
         (H2O, NH3, CH4, HF, PH3, HCl, H2S). Le générateur n'a produit aucun
         énoncé « combien de doublets non liants porte l'atome d'hydrogène ? »,
         et il ne le peut pas : la réponse serait invariablement 0 et
         l'exercice serait vide. Aucun renvoi n'est donc possible, ni vers un
         exercice (sept seulement) ni vers un supplément (la banque est VIDE
         sur ce chapitre — validerProf refuse tout type:"supplement" ici).
         L'erreur se traite au moment du schéma de Lewis complet, geste que le
         chapitre ne fait travailler nulle part : le remède dit comment, et
         c'est une relecture, pas un exercice. */
      exercice: null
    },
    {
      titre: "Croire que la formule du cours suffit dans tous les cas",
      eleve: "L'élève applique $\\dfrac{\\text{valence} - \\text{liaisons}}{2}$ sans réfléchir, et " +
             "tombe en défaut dès qu'il sort des sept molécules du chapitre : sur $CO_2$ " +
             "(liaisons doubles), sur l'ion $NH_4^+$ (charge), ou sur un atome qui ne respecte " +
             "pas l'octet. Devant un résultat non entier, il arrondit.",
      cause: "Les sept exercices du chapitre portent tous sur des molécules " +
             "<strong>simples</strong>, à liaisons simples, sans charge, dont l'atome central " +
             "respecte l'octet. La formule y fonctionne à tous les coups, et l'élève en conclut " +
             "— légitimement — qu'elle est universelle. C'est un effet direct de la pauvreté du " +
             "tirage : sept énoncés d'un seul moule ne peuvent pas montrer les limites de la " +
             "méthode qu'ils appliquent. L'élève n'est pas fautif ; il généralise à partir de " +
             "tout ce qu'on lui a montré.",
      remede: "Dire explicitement ce que la formule <strong>suppose</strong>, au moment même où " +
              "on l'introduit, plutôt que de laisser l'élève le découvrir en contrôle : elle vaut " +
              "pour un atome <strong>neutre</strong>, à liaisons <strong>simples</strong>, qui " +
              "<strong>respecte l'octet</strong>. Trois conditions, à écrire à côté de la " +
              "formule dans le cahier, en petit — et qui suffisent à prévenir la " +
              "sur-généralisation.<br/><br/>" +
              "Montrer <strong>au moins un contre-exemple</strong> en classe, sans quoi la mise " +
              "en garde reste abstraite : dans $CO_2$, le carbone forme deux liaisons " +
              "<strong>doubles</strong>, soit quatre doublets liants ; la formule appliquée " +
              "naïvement avec « 2 liaisons » donnerait $(4-2)/2 = 1$ doublet non liant sur le " +
              "carbone, ce qui est faux — le carbone n'en porte aucun. Ce qu'il faut compter, " +
              "ce sont les <strong>doublets</strong> engagés, pas les traits entre atomes.<br/><br/>" +
              "Revenir enfin au <strong>dénombrement direct</strong> comme méthode de secours, " +
              "toujours valable là où la formule échoue : on compte les électrons de valence " +
              "disponibles, on place les liaisons, on complète les octets, on vérifie le total. " +
              "C'est plus lent, et c'est la seule méthode qui ne tombe jamais en défaut — la " +
              "formule n'en est qu'un raccourci pour les cas simples.",
      /* Volontairement SANS renvoi, et c'est ici une nécessité absolue,
         vérifiée : les SEPT énoncés tirés (et il n'y en a que sept, sans
         aucune banque supplémentaire) sont tous des cas où la formule
         fonctionne — molécules neutres, liaisons simples, octet respecté.
         Aucun ne comporte de liaison multiple, aucun ne porte de charge, aucun
         n'est un ion. Renvoyer vers l'un d'eux pour remédier à une
         sur-généralisation reviendrait à renvoyer vers la cause du problème.
         L'évaluation du chapitre ne fournit pas non plus de contre-exemple
         (ses cinq questions restent dans le même périmètre). C'est LA limite
         du chapitre, et elle est structurelle : le remède fournit donc le
         contre-exemple lui-même (CO2), puisque le livre ne le contient pas. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — soufre, $6$ électrons de valence, $2$ liaisons : calculer les
          doublets non liants. La relation est donnée au cours
          ($(\text{valence} - \text{liaisons})/2$) et s'applique dans le sens
          direct : exécution, donc « réaliser ».
     Q2 — la règle de l'octet, choix multiple. Restitution pure de la
          définition telle que le cours l'énonce, avec le distracteur « 2
          électrons » qui est la règle du duet (erreur 3 de cette fiche) :
          « s'approprier ».
     Q3 — $4$ doublets dont $2$ liants et $2$ non liants : quelle géométrie ?
          Il faut relier un dénombrement à une forme dans l'espace, en tenant
          compte des doublets INVISIBLES — c'est exactement l'erreur 2 de cette
          fiche, et le distracteur « linéaire » y correspond. Ce n'est pas une
          restitution mais une mise en relation : « analyser ».
     Q4 — fluor, $7$ électrons de valence, $1$ liaison : calculer les doublets
          non liants. Même structure que Q1, sens direct : « réaliser ».
     Q5 — pourquoi $NH_3$ est-elle pyramidale plutôt que plane ? La question ne
          demande pas la géométrie (elle est donnée dans l'énoncé) mais
          d'évaluer quatre EXPLICATIONS concurrentes, dont une affirmation
          franchement fausse (« NH3 est en réalité plane ») et deux raisons
          sans rapport (la masse de l'azote, des liaisons doubles). Juger la
          validité d'une explication : « valider ».

     Bilan honnête de l'évaluation, à connaître avant de composer un devoir :
     deux questions sur cinq sont le MÊME calcul (Q1 et Q4), sur deux atomes
     différents. C'est le reflet exact d'un chapitre dont les sept exercices
     posent tous la même question. Si un devoir doit compléter quelque chose,
     c'est là : un schéma de Lewis à dessiner, et une géométrie à déduire sur
     une molécule qui n'est pas dans la liste des sept.
     « Communiquer » n'est pas mobilisé : aucune question ne demande de
     produire une explication rédigée — la question 5 s'en approche le plus,
     mais le format en choix multiple ne fait que sélectionner une explication
     déjà écrite, il n'en fait pas produire. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "réaliser", "valider"]
  }
};
