/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-dynamique.prof.js
   Fiche professeur du chapitre « Dynamique newtonienne » (terminale
   spécialité), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 2 : 30 énoncés tirés, dont 12 numérotés et 18 en
   banque supplémentaire. Deux moules strictement alternés, tous deux fondés
   sur la conservation de la quantité de mouvement au départ du repos :
     - moule ÉJECTION (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : un système de
       masse M éjecte une masse m à la vitesse v, on demande la vitesse de
       recul V = mv/M ;
     - moule RÉPULSION (exercices PAIRS 2, 4, 6, 8, 10, 12) : deux personnes
       de masses m1 et m2 se repoussent, on demande v2 = m1*v1/m2.
   Aucun exercice ne porte sur la troisième loi de Newton (action-réaction),
   ni sur le principe d'inertie, ni sur le PFD sous forme differentielle
   $\sum\vec F = d\vec p/dt$ : c'est ce qui contraint l'erreur 2 à rester sans
   renvoi. TOUS les énoncés partent du REPOS, ce qui rend l'erreur 4 (signe et
   caractère vectoriel) presque invisible dans les exercices — le renvoi
   choisi est celui où elle se voit encore.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-dynamique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     AUCUN chapitre de terminale n'est un prérequis réel de celui-ci, et il
     faut le dire franchement plutôt que d'en inventer un.

     ch. 1 (Mouvement dans un champ uniforme) : ÉCARTÉ, et c'est le candidat le
     plus tentant puisqu'il applique le PFD. Mais la dépendance va dans
     l'AUTRE sens : c'est le ch. 1 qui utilise $\sum\vec F = m\vec a$, forme
     que ce chapitre-ci ne fait que GÉNÉRALISER en $\sum\vec F = d\vec p/dt$.
     Un chapitre ne peut pas dépendre d'une application de lui-même. Le ch. 1
     est d'ailleurs parfaitement lisible sans la quantité de mouvement, puisque
     la masse y est constante.

     ch. 2 (Satellites) : ÉCARTÉ, même raison — il applique le PFD sans jamais
     avoir besoin de $\vec p$ ni de la conservation.
     ch. 4 (Énergie mécanique) : ÉCARTÉ, la dépendance va dans l'autre sens
     (voir la fiche du ch. 4, qui déclare le 3).
     ch. 5 à 11 : aucun lien.

     LE VRAI PRÉREQUIS EST EN PREMIÈRE : le chapitre « Mouvement et lois de
     Newton », qui installe le bilan des forces, le référentiel galiléen et
     $\sum\vec F = m\vec a$. Sans lui, ce chapitre-ci n'a rien à généraliser.
     Il est traité dans `note`, qui est imprimée. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 3, celui du livre.

     Aucune contrainte dure ne le lie à un chapitre de terminale — il pourrait
     ouvrir l'année. Deux raisons de le laisser au rang 3.

     La première est pédagogique : la quantité de mouvement est une grandeur
     ABSTRAITE, qui ne se voit ni ne se mesure directement. La placer après
     deux chapitres où le PFD a déjà servi sur des situations concrètes
     (parabole, orbite) permet de la présenter comme une généralisation de
     quelque chose de connu, et non comme une définition tombée du ciel.

     PRÉREQUIS MATHÉMATIQUE, décisif pour ne pas le placer plus tôt : le PFD
     s'énonce ici sous forme <strong>dérivée</strong>, $\sum\vec F = d\vec p/dt$.
     C'est la première fois de l'année qu'une loi de physique s'écrit comme une
     dérivée par rapport au temps, et la notation $d/dt$ n'est pas familière —
     elle ne coïncide pas avec le $f'(x)$ des mathématiques. Placer ce chapitre
     en toute première position obligerait à installer cette notation avant
     toute autre chose, ce qui est un mauvais départ. Le rang 3 laisse le temps
     d'y venir. Le chapitre n'exige en revanche AUCUNE résolution d'équation
     différentielle : la dérivée y est lue, jamais intégrée. */
  rangConseille: 3,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser la deuxième loi de Newton sous la forme d'une relation entre la somme des forces et la dérivée du vecteur quantité de mouvement",
    "Exploiter la conservation de la quantité de mouvement d'un système isolé ou pseudo-isolé",
    "Exploiter la troisième loi de Newton dans le cas de l'interaction entre deux systèmes"
  ],

  note: "La quantité de mouvement, les trois lois de Newton et la conservation de $\\vec{p}$ dans un " +
        "système isolé sont au programme de spécialité de terminale : le chapitre ne déborde " +
        "pas.<br/><br/>" +
        "<strong>Le prérequis de ce chapitre n'est pas déclarable, et il est massif.</strong> La " +
        "colonne « S'appuie sur » du tableau de progression affichera un <strong>tiret</strong> : " +
        "c'est exact, aucun chapitre de terminale ne le précède dans l'ordre des dépendances. Mais " +
        "le chapitre suppose entièrement acquis <strong>« Mouvement et lois de Newton »</strong>, " +
        "chapitre de <strong>première</strong>, qui installe le bilan des forces, le référentiel " +
        "galiléen et la relation $\\sum\\vec{F} = m\\vec{a}$ — car tout ce chapitre-ci consiste à " +
        "<strong>généraliser</strong> cette relation. Un prérequis ne pouvant viser qu'un chapitre " +
        "du même niveau, <strong>rien ne le montrera</strong>. Si la classe ne sait plus faire un " +
        "bilan des forces, aucune séance de ce chapitre ne sera rentable : le reprendre " +
        "avant.<br/><br/>" +
        "<strong>Le prérequis mathématique conditionne le placement.</strong> La deuxième loi " +
        "s'écrit ici $\\sum\\vec{F} = \\dfrac{d\\vec{p}}{dt}$ : c'est la première loi de l'année " +
        "énoncée comme une <strong>dérivée par rapport au temps</strong>, et la notation $d/dt$ " +
        "n'est pas celle que les élèves rencontrent en mathématiques. Elle demande une mise au " +
        "point explicite — ce qu'est un taux de variation instantané, pourquoi on l'écrit ainsi en " +
        "physique — et c'est la raison de ne pas placer ce chapitre en tout début d'année. Bonne " +
        "nouvelle en revanche : <strong>aucune équation différentielle n'est à résoudre</strong>, " +
        "la dérivée est seulement lue.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés " +
        "n'exercent qu'une seule chose : la conservation de $\\vec{p}$ au départ du " +
        "<strong>repos</strong>, sous deux habillages (éjection de masse, répulsion mutuelle). " +
        "Aucun ne porte sur la <strong>troisième loi de Newton</strong> — pourtant troisième " +
        "attendu officiel et objet du piège du cours —, aucun sur le principe d'inertie, aucun sur " +
        "le PFD sous forme dérivée, et aucun ne part d'un système déjà en mouvement, ce qui " +
        "escamote presque entièrement la question des <strong>signes</strong>. Prévoir un travail " +
        "spécifique sur l'action-réaction et sur un cas de collision, que le manuel ne fournit pas " +
        "sous forme d'exercice.",

  erreurs: [
    {
      titre: "Confondre la masse éjectée et la masse restante",
      eleve: "Pour un canon de masse totale $M = 600$ kg qui tire un obus de $m = 12$ kg à " +
             "$v = 400$ m/s, l'élève écrit $V = \\dfrac{Mv}{m}$ et annonce $20\\,000$ m/s au lieu " +
             "de $8$ m/s. Ou bien il divise par $M - m$ au lieu de $M$, et trouve $8{,}16$ m/s : " +
             "une erreur de $2\\%$, invisible à la correction rapide.",
      cause: "La relation de conservation $mv = MV$ met en jeu deux masses et deux vitesses, et " +
             "l'élève doit apparier correctement chaque masse avec SA vitesse. Rien dans les " +
             "symboles ne l'y aide : $m$ et $M$ ne diffèrent que par la casse, $v$ et $V$ aussi. " +
             "Le fond du problème est que l'élève mémorise une <strong>formule</strong> " +
             "($V = mv/M$) au lieu de reconstruire une <strong>égalité</strong> (la quantité de " +
             "mouvement du projectile égale celle du reste, en sens opposé). Une formule mémorisée " +
             "s'inverse une fois sur deux.",
      remede: "Faire écrire la conservation <strong>avant</strong> d'isoler quoi que ce soit : " +
              "« quantité de mouvement de l'obus = quantité de mouvement du canon », soit " +
              "$m \\times v = M \\times V$. L'isolement de $V$ vient après, comme une étape " +
              "d'algèbre. Une égalité posée ne s'inverse pas, contrairement à une formule " +
              "recopiée.<br/><br/>" +
              "Imposer ensuite le <strong>contrôle de vraisemblance</strong>, qui tranche à lui " +
              "seul et qui est le plus rentable du chapitre : le système lourd recule " +
              "<strong>lentement</strong>, le projectile léger part <strong>vite</strong>. Si la " +
              "vitesse de recul annoncée dépasse celle du projectile, la réponse est fausse avant " +
              "d'être vérifiée. Un canon ne recule pas à $20$ km/s.<br/><br/>" +
              "Traiter enfin séparément le cas du $M - m$, qui est une erreur de " +
              "<strong>modèle</strong> et non de calcul, et qui mérite d'être saluée plutôt que " +
              "corrigée sèchement : l'élève qui écrit $M - m$ a raison en toute rigueur, puisque " +
              "c'est bien la masse restante qui recule. Les énoncés du chapitre négligent " +
              "délibérément cette correction parce que $m \\ll M$ — la correction du cours l'écrit " +
              "d'ailleurs « $MV \\approx mv$ ». Le dire explicitement évite de décourager l'élève " +
              "le plus rigoureux de la classe.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 2) : l'exercice 7 donne M = 600 kg, m = 12 kg,
         v = 400 m/s, réponse 8 m/s — la seule réponse ENTIÈRE du moule
         éjection, ce qui rend la correction lisible d'un coup d'œil. C'est
         aussi le tirage au plus fort rapport m/M (12/600 = 2 %), donc celui où
         l'écart entre M et M - m est le plus grand du chapitre : l'élève qui
         divise par M - m = 588 trouve 8,16 m/s, et l'écart de 2 % se voit
         encore, alors que sur l'exercice 3 (m/M = 0,57 %) il serait
         indiscernable de l'arrondi. Le renvoi est donc contraint par la
         pédagogie, pas seulement disponible. */
      exercice: { type: "exercice", n: 7 }
    },
    {
      titre: "Croire que les forces d'action et de réaction s'annulent",
      eleve: "L'élève affirme que « si les deux patineurs se poussent avec des forces opposées de " +
             "même norme, la somme est nulle, donc aucun des deux ne bouge ». Il conclut " +
             "qu'un cheval ne peut pas tirer une charrette, puisque la charrette tire le cheval " +
             "aussi fort.",
      cause: "L'élève applique une règle correcte — deux vecteurs opposés se somment à zéro — dans " +
             "un contexte où elle ne s'applique pas. Deux forces ne se somment que si elles " +
             "s'exercent sur le <strong>même système</strong>. Ici l'une s'exerce sur le patineur A " +
             "et l'autre sur le patineur B : elles n'apparaissent jamais dans le même bilan, donc " +
             "jamais dans la même somme. Rien dans l'écriture $\\vec{F}_{B \\to A} = -\\vec{F}_{A \\to B}$ " +
             "ne rappelle que les deux vecteurs vivent dans deux bilans différents — l'indice le " +
             "dit, mais il se lit vite.",
      remede: "Imposer la <strong>question préalable</strong>, systématiquement, avant toute somme " +
              "de forces : « sur QUEL système cette force s'applique-t-elle ? ». Faire tracer " +
              "<strong>deux schémas séparés</strong>, un par patineur, avec une seule flèche sur " +
              "chacun. Deux schémas, deux bilans, deux applications du PFD : les forces ne se " +
              "rencontrent jamais, et la question de leur somme ne se pose plus.<br/><br/>" +
              "Faire ensuite la <strong>différence entre égalité des forces et égalité des " +
              "effets</strong>, qui est le cœur de l'affaire. Les forces ont exactement la même " +
              "norme — c'est la troisième loi, et c'est absolu. Mais les accélérations, elles, " +
              "diffèrent : $a = F/m$, donc le plus léger accélère le plus. C'est pourquoi le " +
              "patineur de $45$ kg part à $2{,}9$ m/s quand celui de $85$ kg ne part qu'à " +
              "$1{,}54$ m/s, sous des forces rigoureusement identiques. Ce couple de nombres vaut " +
              "tous les discours.<br/><br/>" +
              "Résoudre enfin le <strong>paradoxe du cheval</strong>, qui vient toujours et qu'il " +
              "vaut mieux traiter que d'esquiver : le cheval avance parce que le SOL le pousse " +
              "vers l'avant, force qui n'a rien à voir avec le couple cheval-charrette. C'est en " +
              "faisant le bilan sur le bon système que le paradoxe se dissout, et cela redit la " +
              "règle : l'erreur n'est jamais dans la loi, elle est dans le choix du système.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés tirés demandent TOUS une vitesse (de recul ou de la seconde
         personne), obtenue par conservation de la quantité de mouvement.
         Aucun ne demande de comparer deux forces, aucun ne mentionne
         l'action-réaction, aucun ne demande sur quel système une force
         s'applique. La troisième loi de Newton — troisième attendu officiel du
         chapitre et objet du piège du cours — n'est travaillée par aucun
         exercice. Le seul support du livre est la question 5 de l'évaluation
         (patineur léger et patineur lourd, comparer les forces), mais la règle
         éditoriale du projet interdit de renvoyer vers l'évaluation notée : on
         remédie avant d'évaluer. Le remède s'appuie donc sur les deux schémas
         séparés et sur les valeurs de l'exercice 8 (45 kg / 85 kg ; 2,9 m/s /
         1,54 m/s), qu'il cite nommément : elles sont dans le tirage et
         illustrent que les forces égales donnent des vitesses différentes. */
      exercice: null
    },
    {
      titre: "Confondre la quantité de mouvement et l'énergie cinétique",
      eleve: "L'élève écrit $p = \\frac{1}{2}mv^2$, ou raisonne en affirmant que « le patineur " +
             "lourd a plus d'énergie donc il va plus vite ». Devant deux patineurs qui se " +
             "repoussent, il cherche à égaliser des énergies au lieu d'égaliser des quantités de " +
             "mouvement, et trouve un rapport de vitesses en $\\sqrt{m_1/m_2}$ au lieu de " +
             "$m_1/m_2$.",
      cause: "Deux grandeurs construites sur les mêmes ingrédients — une masse et une vitesse — se " +
             "conservent toutes deux dans certaines conditions, et l'élève les range au même " +
             "endroit. La différence est pourtant profonde : $\\vec{p} = m\\vec{v}$ est " +
             "<strong>vectorielle</strong> et linéaire en $v$, $E_c = \\frac{1}{2}mv^2$ est " +
             "<strong>scalaire</strong> et quadratique. Deux patineurs qui se repoussent ont des " +
             "quantités de mouvement opposées, qui s'annulent — mais des énergies cinétiques " +
             "toutes deux positives, qui s'ajoutent. L'énergie cinétique totale a d'ailleurs " +
             "AUGMENTÉ pendant la poussée, alors qu'elle était nulle au départ : la conserver " +
             "serait faux.",
      remede: "Faire constater l'<strong>opposition</strong> sur un cas chiffré du chapitre plutôt " +
              "que de l'énoncer : deux patineurs partis du repos ont une quantité de mouvement " +
              "totale nulle avant ET après (les deux vecteurs se compensent), mais une énergie " +
              "cinétique nulle avant et strictement positive après. L'une se conserve, l'autre " +
              "non : ce sont donc bien deux grandeurs différentes, et le calcul le " +
              "montre.<br/><br/>" +
              "Ancrer la distinction sur la <strong>flèche</strong> : $\\vec{p}$ porte une flèche, " +
              "$E_c$ n'en porte pas. Une grandeur fléchée peut être négative sur un axe et annuler " +
              "sa jumelle ; une grandeur non fléchée est toujours positive et ne s'annule jamais " +
              "avec rien. La notation contient toute l'information, à condition de la lire " +
              "— et c'est une raison de refuser les $\\vec{p}$ écrits sans flèche.<br/><br/>" +
              "Séparer enfin les <strong>domaines d'emploi</strong>, ce qui rend le choix " +
              "automatique : quand un système se sépare ou que deux corps interagissent brièvement, " +
              "on utilise $\\vec{p}$ ; quand il s'agit de hauteurs, de vitesses et de frottements, " +
              "on utilise l'énergie — ce sera le chapitre 4. Deux outils, deux situations, et une " +
              "question à se poser avant de choisir : « ai-je une interaction ou un trajet ? ».",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 8 donne
         m1 = 45 kg, m2 = 85 kg, v1 = 2,9 m/s, réponse v2 = 1,54 m/s. C'est le
         tirage au plus grand rapport de masses du moule répulsion
         (85/45 = 1,89), donc celui où les deux modèles s'écartent le plus :
         la conservation de p donne v2 = 45 x 2,9 / 85 = 1,54 m/s, tandis que
         l'élève qui égalise les énergies cinétiques trouve
         v2 = 2,9 x racine(45/85) = 2,11 m/s, soit 37 % d'écart. Sur
         l'exercice 10 (65 kg / 60 kg, masses presque égales), les deux modèles
         donneraient 2,38 et 2,29 m/s : indiscernables. Le renvoi est donc
         choisi pour que l'erreur produise un nombre franchement différent, et
         la correction gagne à faire calculer les deux valeurs. */
      exercice: { type: "exercice", n: 8 }
    },
    {
      titre: "Traiter la quantité de mouvement comme un nombre au lieu d'un vecteur",
      eleve: "L'élève écrit $m_1 v_1 + m_2 v_2 = 0$ puis, constatant que tout est positif, conclut " +
             "que « c'est impossible » et se bloque. Ou bien il écrit " +
             "$m_1 v_1 + m_2 v_2 = 0$ avec les deux vitesses positives, trouve une valeur négative " +
             "et l'annonce telle quelle : « $v_2 = -3{,}02$ m/s ».",
      cause: "L'égalité vectorielle $m_1\\vec{v_1} + m_2\\vec{v_2} = \\vec{0}$ est correcte, et " +
             "l'élève la recopie fidèlement — en oubliant seulement les flèches. Or le passage du " +
             "vecteur au nombre n'est pas une simplification d'écriture : c'est une " +
             "<strong>projection sur un axe orienté</strong>, et elle change les signes. Les deux " +
             "personnes partant en sens opposés, leurs vitesses ont des signes opposés sur l'axe " +
             "choisi : $-m_1 v_1 + m_2 v_2 = 0$. L'élève qui garde deux plus obtient une " +
             "contradiction, et n'a aucun moyen de savoir d'où elle vient. La méthode 3 du cours le " +
             "dit — « attention aux signes : deux parties qui s'éloignent en sens opposés ont des " +
             "vitesses de signes opposés » — mais cette phrase se lit sans s'appliquer.",
      remede: "Imposer le <strong>tracé de l'axe</strong> sur la copie, avant toute équation, avec " +
              "son orientation marquée par une flèche. Puis faire écrire, sous le schéma, le signe " +
              "de chaque vitesse sur cet axe. L'équation vient en troisième position seulement. " +
              "Trois lignes au lieu d'une, et l'erreur de signe disparaît.<br/><br/>" +
              "Distinguer explicitement la <strong>norme</strong> (toujours positive, c'est ce que " +
              "l'énoncé donne quand il dit « une vitesse de norme $v_1 = 2{,}8$ m/s ») et la " +
              "<strong>composante</strong> sur l'axe (qui peut être négative). L'énoncé du chapitre " +
              "emploie systématiquement le mot « norme », et ce n'est pas un hasard : c'est un " +
              "signal qu'il faut apprendre à lire. La réponse attendue est elle aussi une norme, " +
              "donc positive.<br/><br/>" +
              "Faire enfin du résultat négatif un <strong>diagnostic</strong> plutôt qu'une faute : " +
              "un signe moins sur une vitesse dont on demande la norme signifie presque toujours " +
              "que l'axe a été orienté dans l'autre sens, ce qui est parfaitement légitime — il " +
              "suffit alors de conclure « la personne 2 part dans le sens opposé, à " +
              "$3{,}02$ m/s ». L'élève n'a pas fait d'erreur de physique, seulement de rédaction, " +
              "et le lui dire change tout.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         m1 = 70 kg, m2 = 65 kg, v1 = 2,8 m/s, réponse 3,02 m/s. Il est choisi
         parce que c'est le SEUL exercice du moule répulsion où la personne 2
         est plus LÉGÈRE que la personne 1 (65 < 70), donc le seul où v2 > v1 :
         l'élève y trouve une vitesse plus grande que celle donnée, ce qui
         l'oblige à relire son schéma et fait surgir la question de
         l'orientation de l'axe. Les cinq autres exercices du moule
         (40/70, 60/90, 45/85, 65/60, 55/75) donnent quatre fois v2 < v1 —
         résultat rassurant qui n'interroge personne — et le 10 (65/60) donne
         v2 = 2,38 > 2,2 mais avec un écart trop faible pour être remarqué. Le
         renvoi est donc contraint : c'est le tirage où le signe et
         l'orientation deviennent une vraie question. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — $m_1 = 40$ kg, $m_2 = 50$ kg, $v_1 = 2{,}5$ m/s, calculer $v_2$. La
          relation $m_1 v_1 = m_2 v_2$ est dans les formules du cours et
          s'applique dans le sens direct, avec des nombres ronds :
          « réaliser ».
     Q2 — que dit le principe d'inertie d'un système pseudo-isolé ? Restitution
          de la définition D2, avec « toujours immobile » en distracteur :
          « s'approprier ».
     Q3 — canon $M = 750$ kg, obus $m = 5$ kg à $450$ m/s, calculer $V$. La
          situation diffère de Q1 (éjection et non répulsion) et la relation
          $MV \approx mv$ suppose de reconnaître que la masse de l'obus est
          négligeable devant celle du canon — un choix de modèle, pas une
          substitution. La correction du cours écrit d'ailleurs « $\approx$ » :
          « analyser ».
     Q4 — comment s'exprime $\vec p$ ? Restitution de la définition D1, avec
          $\frac12 m\vec v^2$ et $m\vec a$ en distracteurs — exactement
          l'erreur 3 de cette fiche : « s'approprier ».
     Q5 — deux patineurs de masses différentes se repoussent : comment se
          comparent les forces ? Il faut juger quatre affirmations plausibles
          et rejeter celles qui lient la force à la masse ou à la vitesse
          finale. C'est un contrôle de cohérence sur la troisième loi, pas une
          récitation : « valider ». C'est l'erreur 2 de cette fiche.

     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. C'est coûteux sur ce chapitre, où le
     baccalauréat demande régulièrement de JUSTIFIER À L'ÉCRIT qu'un système est
     pseudo-isolé avant d'écrire la conservation — une justification que les
     exercices tirés fournissent toute faite (« on néglige tout frottement »).
     « Réaliser » n'apparaît qu'une fois, ce qui est honnête : Q3 exige un
     choix de modèle, et deux des cinq questions sont des restitutions. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "s'approprier", "valider"]
  }
};
