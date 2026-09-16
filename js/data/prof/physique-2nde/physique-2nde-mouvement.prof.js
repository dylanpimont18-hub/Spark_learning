/* =========================================================
   Spark Learning – js/data/prof/physique-2nde/physique-2nde-mouvement.prof.js
   Fiche professeur du chapitre « Description d'un mouvement » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre PILOTE du niveau,
   physique-2nde-forces.prof.js (2026-09-17).

   RÉFÉRENTIEL PHYSIQUE : s'approprier, analyser, réaliser, valider,
   communiquer. Le même qu'au collège — il n'existe pas de référentiel
   « lycée » distinct (voir REFERENTIELS.physique dans scripts/manuel/prof.js).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 0, ouvrage MONO-NIVEAU `lycee-physique-2nde` :
   30 énoncés tirés, dont 12 numérotés et 18 en banque supplémentaire. Les
   trente se ramènent à DEUX moules, strictement alternés :
     - moule A ($v_{moy} = d/\Delta t$, en km/h) : exercices IMPAIRS 1, 3, 5,
       7, 9, 11 ;
     - moule B (vitesse instantanée approchée $v_i = (x_{i+1}-x_{i-1})/2\tau$,
       en m/s) : exercices PAIRS 2, 4, 6, 8, 10, 12.
   Aucun exercice ne demande de NOMMER un référentiel, de CARACTÉRISER un
   mouvement (uniforme / accéléré / ralenti), de TRACER un vecteur vitesse, ni
   de CONVERTIR entre km/h et m/s — alors que ces quatre gestes occupent trois
   des quatre définitions du cours, tout le « piège » du cours, et deux des
   cinq questions d'évaluation. Deux des quatre erreurs ci-dessous sont donc
   volontairement SANS renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-2nde-mouvement"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (seconde), et non du livre de
     cycle — voir la longue note de `validerPrerequis` dans
     scripts/manuel/prof.js.

     Aucun. Et ce n'est pas une facilité : ce chapitre OUVRE la seconde, il est
     le premier maillon du bloc mécanique (décrire un mouvement → modéliser ce
     qui le cause → énoncer le lien entre les deux) et il ne peut donc rien
     avoir devant lui.

     Candidats examinés et écartés un par un :
     - ch. 2 (Forces) et ch. 3 (Principe d'inertie) : ce sont eux qui
       s'appuient sur celui-ci, pas l'inverse. Le pilote (ch. 2) déclare
       d'ailleurs explicitement `prerequis: [1]`, et le ch. 3 fera de même.
       Les déclarer ici créerait le cycle que `validerPrerequis` refuse, à
       juste titre.
     - ch. 8 (Signaux et capteurs) : tentant, parce que la vitesse
       instantanée approchée est un taux d'accroissement et que le ch. 8
       travaille une pente $a = (U_2-U_1)/(G_2-G_1)$. Mais la dépendance joue
       dans l'autre sens chronologique (ch. 8 vient après) et, surtout, elle
       est MATHÉMATIQUE, pas physique : ce qui manque à l'élève n'est pas un
       chapitre de physique, c'est l'aisance avec les quotients. Écarté.
     - ch. 4 à 7, 9, 10 (chimie, son, lumière) : aucun lien. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1, celui du livre. Le bloc mécanique de
     la seconde se tient en trois chapitres strictement ordonnés — décrire (1),
     modéliser la cause (2), relier les deux (3) — et celui-ci est le seul qui
     puisse ouvrir : on ne peut pas dire « les forces se compensent, donc le
     mouvement est rectiligne uniforme » avant d'avoir défini ce qu'est un
     mouvement rectiligne uniforme, ni même ce qu'est un référentiel.

     Un autre argument, de terrain celui-là : c'est le chapitre le plus proche
     de ce que la classe a déjà fait au collège (vitesse moyenne, conversion
     km/h ↔ m/s). L'ouvrir l'année avec lui donne à chacun une prise immédiate,
     avant d'introduire le vecteur, qui est la vraie nouveauté du niveau.

     Le livre le place aussi en chapitre 1 : les deux ordres coïncident, et la
     colonne « Chap. » de la progression ne portera pas le triangle d'alerte. */
  rangConseille: 1,

  /* Attendus de fin de seconde, programme de PHYSIQUE-CHIMIE DE SECONDE
     (2019 — et non le programme de cycle 4 de 2020, qui ne vaut qu'au
     collège), thème « Mouvement et interactions », partie « Décrire un
     mouvement ». Repris aux mots du programme. */
  attendus: [
    "Caractériser un mouvement par la description de la trajectoire d'un point du système dans un référentiel donné",
    "Caractériser le vecteur vitesse moyenne d'un point et exploiter le caractère approché du vecteur vitesse instantanée",
    "Utiliser des enregistrements vidéo ou des chronophotographies pour déterminer une vitesse"
  ],

  note: "Le référentiel, la trajectoire, la vitesse moyenne, le vecteur vitesse et l'exploitation " +
        "d'une chronophotographie sont au programme de seconde : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les trente énoncés tirés ne travaillent que <strong>deux</strong> gestes de calcul : diviser " +
        "une distance par une durée pour obtenir une vitesse moyenne, et appliquer " +
        "$v_i \\approx \\dfrac{x_{i+1}-x_{i-1}}{2\\tau}$ pour obtenir une vitesse instantanée " +
        "approchée. C'est utile, mais cela laisse de côté quatre gestes que le cours enseigne : " +
        "<strong>nommer</strong> le référentiel choisi, <strong>caractériser</strong> un mouvement " +
        "(uniforme, accéléré, ralenti) en comparant des écarts, <strong>tracer</strong> un vecteur " +
        "vitesse tangent à la trajectoire, et <strong>convertir</strong> entre km/h et m/s — ce " +
        "dernier étant pourtant le « piège » que le cours signale lui-même. L'exemple résolu de la " +
        "luge, lui, est complet : il fixe le référentiel, compare les écarts, conclut « accéléré », " +
        "puis calcule. <strong>C'est cet exemple, et non les exercices, qu'il faut prendre comme " +
        "modèle de la tâche attendue.</strong><br/><br/>" +
        "Une remarque de terrain sur les valeurs tirées. Le moule « vitesse moyenne » produit des " +
        "résultats parfois peu réalistes — un vélo à $150$ km/h à l'exercice 1, un bus scolaire à " +
        "$111{,}8$ km/h à l'exercice 11. Plutôt que de les corriger en silence, il vaut mieux en " +
        "faire un exercice supplémentaire gratuit : <strong>« ce résultat est-il plausible ? »</strong> " +
        "est exactement la compétence <em>valider</em>, et elle ne se travaille jamais mieux que sur " +
        "un nombre visiblement faux. Enfin, la notion de vecteur vitesse suppose de savoir ce qu'est " +
        "une <strong>tangente</strong> : c'est un objet de mathématiques abordé en " +
        "<strong>première</strong>, qu'on emploie ici de façon purement intuitive (« la direction " +
        "que l'objet suit à cet instant précis ») — la colonne « S'appuie sur » ne peut pas le " +
        "montrer, puisqu'un prérequis ne vise qu'un chapitre du même niveau.",

  /* Quatre erreurs typiques. Les deux règles éditoriales du projet sont
     respectées sans exception : jamais de renvoi vers l'évaluation notée, et
     jamais de renvoi non vérifié contre le tirage réel de la graine.

     L'erreur 1 est celle que le cours lui-même désigne dans son encadré
     « piège » (les unités de vitesse) ; l'erreur 2 est l'erreur de LECTURE du
     moule B, la plus coûteuse en points sur ce chapitre ; les erreurs 3 et 4
     sont les deux erreurs conceptuelles du chapitre (référentiel et vecteur),
     nouvelles au lycée et sans renvoi possible. */
  erreurs: [
    {
      titre: "Mélanger les km/h et les m/s sans convertir",
      eleve: "Pour comparer un cycliste à $25$ km/h et un coureur à $7$ m/s, l'élève annonce que le " +
             "cycliste va « beaucoup plus vite », parce que $25 > 7$. Ou, à l'inverse, il multiplie " +
             "par $3{,}6$ quand il fallait diviser, et transforme $90$ km/h en $324$ m/s.",
      cause: "Deux nombres sans leur unité se comparent spontanément comme deux nombres, et la " +
             "comparaison paraît évidente au point de ne pas mériter de vérification. Quant au sens " +
             "du facteur $3{,}6$, il est mémorisé comme une règle isolée, sans appui : rien dans " +
             "« $3{,}6$ » ne dit de quel côté il va, et une chance sur deux le place du mauvais.",
      remede: "Imposer une règle d'écriture avant toute règle de calcul : <strong>on convertit " +
              "toujours tout dans la même unité avant de comparer ou d'additionner</strong>, et la " +
              "conversion s'écrit sur sa propre ligne. Un calcul qui mélange deux unités est " +
              "incomplet, pas faux — et c'est ainsi qu'il faut le rendre.<br/><br/>" +
              "Puis donner au facteur $3{,}6$ un appui qui le rend impossible à retourner : " +
              "<strong>un nombre de m/s est toujours plus petit que le même nombre de km/h</strong>, " +
              "parce qu'une seconde est une durée bien plus courte qu'une heure — en une seconde, on " +
              "parcourt forcément moins de chemin qu'en une heure. Donc en passant des km/h aux m/s, " +
              "le nombre <strong>diminue</strong> : on divise. $90$ km/h $\\to 25$ m/s, jamais " +
              "l'inverse. L'élève n'a plus rien à mémoriser, il a à raisonner trois secondes.<br/><br/>" +
              "Installer enfin <strong>deux repères corporels</strong> que la classe garde toute " +
              "l'année : un piéton marche à environ $1{,}4$ m/s (soit $5$ km/h), une voiture en " +
              "ville roule à $50$ km/h (soit environ $14$ m/s). Toute réponse qui s'en écarte d'un " +
              "facteur $3{,}6$ trahit une conversion prise à l'envers.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 0) : l'exercice 1 donne d = 255 km et
         Delta t = 1,7 h, et demande une vitesse moyenne EN KM/H, soit
         150 km/h. Le renvoi le préfère à tout autre pour une raison précise :
         c'est le seul tirage du chapitre où le résultat est à la fois exact et
         physiquement absurde — un vélo sur voie verte à 150 km/h. L'énoncé ne
         demande donc pas la conversion, mais il l'APPELLE : 150 km/h font
         41,7 m/s, et l'élève qui pose ce chiffre à côté de « je marche à
         1,4 m/s » voit d'un coup ce que vaut son résultat. C'est le support le
         plus économique pour faire travailler ensemble l'unité et l'ordre de
         grandeur. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Diviser par $\\tau$ au lieu de $2\\tau$ dans la vitesse instantanée",
      eleve: "Sur une chronophotographie prise toutes les $\\tau = 0{,}10$ s, avec " +
             "$x_{i-1} = 1{,}26$ m et $x_{i+1} = 3{,}32$ m, l'élève écrit " +
             "$v_i = \\dfrac{3{,}32 - 1{,}26}{0{,}10} = 20{,}6$ m/s au lieu de $10{,}3$ m/s. " +
             "Le résultat est exactement le double du bon.",
      cause: "La formule de la vitesse moyenne, $v = d/\\Delta t$, est solidement installée depuis " +
             "le collège, et l'élève la réutilise telle quelle. Ce qui lui échappe n'est pas le " +
             "calcul, c'est que la <strong>durée</strong> concernée n'est pas $\\tau$ : entre " +
             "l'image $i-1$ et l'image $i+1$, il s'est écoulé <strong>deux</strong> intervalles. " +
             "L'erreur est donc une erreur de lecture de la situation, pas de formule — et c'est " +
             "pour cela qu'elle résiste à la simple relecture de la formule.",
      remede: "Faire <strong>dessiner la ligne du temps</strong> avant tout calcul, avec ses trois " +
              "positions et ses deux flèches : $M_{i-1} \\to M_i$ puis $M_i \\to M_{i+1}$. Deux " +
              "flèches, donc deux $\\tau$. Un schéma fait une fois rend l'oubli du facteur $2$ " +
              "presque impossible ensuite.<br/><br/>" +
              "Renommer ensuite la formule pour ce qu'elle est : ce n'est pas une formule nouvelle, " +
              "c'est <strong>la vitesse moyenne appliquée à l'encadrement du point</strong>. " +
              "$v_i \\approx \\dfrac{\\text{distance de } M_{i-1} \\text{ à } M_{i+1}}" +
              "{\\text{durée de } M_{i-1} \\text{ à } M_{i+1}}$, et cette durée vaut $2\\tau$. " +
              "L'élève n'a plus deux formules concurrentes à trier, il en a une, appliquée deux " +
              "fois.<br/><br/>" +
              "Donner enfin le <strong>test du double</strong>, qui attrape l'erreur sans " +
              "comprendre : si la réponse trouvée est exactement le double de celle du voisin, " +
              "l'un des deux a oublié le $2$. C'est la signature de cette erreur, et elle est très " +
              "reconnaissable à la correction.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         tau = 0,10 s, x_{i-1} = 1,26 m, x_{i+1} = 3,32 m, réponse 10,3 m/s.
         Ce tirage est le meilleur support possible pour CETTE erreur, et pas
         seulement parce qu'il est du bon moule : tau = 0,10 s est une valeur
         ronde, donc l'élève qui oublie le facteur 2 obtient 20,6 m/s, un
         nombre propre qui ne l'alerte pas — alors que 20,6 m/s font 74 km/h,
         soit deux fois le record du monde du 100 m. L'erreur produit donc un
         résultat calculatoirement plausible et physiquement impossible : c'est
         exactement la configuration où la remédiation par l'ordre de grandeur
         est la plus démonstrative. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Parler de mouvement sans préciser par rapport à quoi",
      eleve: "Interrogé sur un passager assis dans un TGV, l'élève tranche : « il est immobile » — " +
             "ou « il va à $300$ km/h » — sans jamais dire par rapport à quoi. Devant les deux " +
             "réponses affichées côte à côte, il cherche laquelle est la bonne, alors que les deux " +
             "le sont.",
      cause: "Dans la vie courante, le référentiel est toujours le sol, et il est si constant qu'il " +
             "devient invisible : personne ne précise « la voiture roule à $50$ km/h par rapport à " +
             "la route ». L'élève n'a donc pas une lacune, il a une <strong>convention implicite</strong> " +
             "qui a toujours suffi. Lui demander de la nommer, c'est lui demander de voir ce qu'il " +
             "regarde à travers depuis dix ans — et cela ne se fait pas en une phrase.",
      remede: "Provoquer le conflit plutôt que de l'éviter : faire répondre la classe sur le " +
              "passager du train, laisser les deux camps s'affronter, puis annoncer que " +
              "<strong>les deux ont raison</strong>. L'inconfort de ce moment est ce qui installe " +
              "la notion ; une définition donnée d'emblée passerait sans laisser de trace.<br/><br/>" +
              "Rendre ensuite la précision <strong>obligatoire à l'écrit</strong>, dans une " +
              "formule de phrase imposée : « dans le référentiel <em>terrestre</em>, la trajectoire " +
              "est … ». Tant que le référentiel n'est pas nommé, la phrase n'est pas finie — pas " +
              "fausse, inachevée.<br/><br/>" +
              "Faire enfin manipuler le <strong>changement</strong> de référentiel sur un objet " +
              "unique, par exemple la valve d'une roue de vélo qui avance : circulaire dans le " +
              "référentiel du cycliste, mais décrivant une courbe en arceaux dans le référentiel " +
              "terrestre. Un seul objet, deux trajectoires : la trajectoire n'appartient donc pas " +
              "à l'objet, elle appartient au couple objet-référentiel.",
      /* Volontairement SANS renvoi, et pour une raison de fond vérifiée sur le
         tirage : les trente énoncés fixent le référentiel dans le décor (« un
         véhicule parcourt », « une caméra prend une image toutes les tau »)
         et n'en demandent jamais ni le choix ni la mention. La tâche
         demandée reste, dans tous les cas, de diviser. Un élève peut donc
         réussir les douze exercices numérotés en conservant intacte la
         conception décrite ici. Pointer l'un d'eux enverrait l'enseignant vers
         une fausse remédiation, ce que le projet tient pour pire qu'un renvoi
         absent. La remédiation est orale, en début de chapitre, et le remède
         le dit. */
      exercice: null
    },
    {
      titre: "Croire que le vecteur vitesse pointe vers l'arrivée",
      eleve: "Sur un virage, l'élève trace le vecteur vitesse dirigé vers la sortie du virage, ou " +
             "vers le centre du cercle, au lieu de le tracer tangent à la trajectoire. Sur une " +
             "trajectoire quelconque, il le dessine comme la corde qui joint deux points repérés.",
      cause: "L'élève confond deux choses que l'expérience quotidienne ne sépare jamais : " +
             "<strong>où l'on va</strong> (la destination, à l'échelle de tout le trajet) et " +
             "<strong>dans quelle direction on avance en cet instant précis</strong>. La confusion " +
             "est d'autant plus naturelle que, sur une trajectoire rectiligne — le seul cas traité " +
             "par les exercices —, les deux coïncident exactement. Elle ne se révèle donc que sur " +
             "une courbe, et le chapitre n'en fait pratiquer aucune.",
      remede: "Casser la coïncidence par une <strong>expérience de pensée</strong> qui parle : que " +
              "se passe-t-il si une pierre attachée à une ficelle qu'on fait tourner est lâchée " +
              "d'un coup ? Elle ne part ni vers le centre, ni vers le lanceur : elle part " +
              "<strong>droit devant, le long de la tangente</strong>. Le vecteur vitesse est " +
              "exactement la direction que l'objet suivrait si tout le reste cessait d'agir.<br/><br/>" +
              "Faire ensuite tracer <strong>plusieurs</strong> vecteurs vitesse le long d'une même " +
              "trajectoire courbe, et non un seul. Un seul vecteur ne montre rien ; une série " +
              "montre que la direction tourne avec la courbe, et que sa longueur suit la valeur de " +
              "la vitesse — c'est le sens du mot « tangent », bien plus que la définition.<br/><br/>" +
              "Rappeler enfin les <strong>quatre caractéristiques</strong>, dans le même ordre que " +
              "pour le vecteur force du chapitre suivant : point d'application (le point $M$ " +
              "considéré), direction (la tangente), sens (celui du mouvement), valeur (la vitesse " +
              "instantanée, en m/s). Employer le même rituel dans les deux chapitres fait gagner " +
              "du temps au second et consolide le premier.",
      /* Volontairement SANS renvoi, même raison que l'erreur 3 et vérifiée sur
         le même tirage. Les trente énoncés produisent tous une réponse
         NUMÉRIQUE unique (« en m/s, arrondie au centième »), et un exercice à
         réponse numérique ne peut pas évaluer un tracé ni une direction. Plus
         décisif encore : les deux moules ne mettent en scène que des
         déplacements RECTILIGNES, sur lesquels l'erreur décrite ici est
         invisible par construction — le vecteur vitesse y pointe effectivement
         vers l'arrivée. Aucun exercice du chapitre ne peut donc la révéler,
         et encore moins la remédier. Le travail est au tableau, sur une
         trajectoire courbe, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée par l'énoncé, jamais choisie pour équilibrer la
     grille.

     Q1 — $d = 126$ km, $\Delta t = 1{,}4$ h, calculer $v_{moy}$ en km/h. La
          relation est donnée par le cours et s'applique dans le sens direct,
          sans transformation ni conversion : « réaliser ».
     Q2 — « le vecteur vitesse a pour direction : … », avec « la perpendiculaire
          à la trajectoire » et « le rayon, si elle est circulaire » en
          distracteurs. Il faut restituer la définition D4 du cours et la
          confronter à quatre propositions : « s'approprier ».
     Q3 — RÉÉCRITE le 2026-09-17. Elle demandait de convertir $72$ km/h en
          m/s, geste que la Q1 et la Q4 du même devoir mobilisent déjà et que
          les trente exercices du chapitre répètent : la question était
          redondante, et elle étiquetait « réaliser » une quatrième exécution.
          Elle demande maintenant de juger deux affirmations contradictoires
          en apparence (« je suis immobile » / « tu vas à $20$ m/s ») et
          d'EXPLIQUER pourquoi les deux sont vraies dans des référentiels
          différents : produire une explication, donc « communiquer ».
          La conversion reste nécessaire pour écarter le distracteur 3, qui
          multiplie par $3{,}6$ au lieu de diviser.
          La question porte désormais sur l'erreur 3 de cette fiche — la
          relativité du mouvement — qui n'a aucun support dans le tirage.
     Q4 — chronophotographie, $\tau = 0{,}1$ s, $x_{i-1} = 3{,}0$ m,
          $x_{i+1} = 5{,}4$ m, calculer $v_i$. Ici l'élève doit repérer que la
          durée concernée est $2\tau$ et non $\tau$ : c'est un choix de lecture
          de la situation avant tout calcul, donc « analyser ». C'est
          exactement l'erreur 2 de cette fiche.
     Q5 — les écarts diminuent régulièrement, le mouvement est : … Il faut
          juger une observation et en tirer une conclusion qualitative, entre
          quatre conclusions dont une (« nécessairement circulaire ») ne se
          déduit d'aucune donnée : « valider ».

     « Communiquer » n'est PAS mobilisé, et ce n'est pas un oubli : aucune des
     cinq questions ne demande de produire une explication rédigée — les deux
     types disponibles dans le corpus (`numeric` et `multiple-choice`) ne le
     permettent pas. Le constat vaut pour les 160 questions d'évaluation des
     32 chapitres du lycée physique-chimie ; il est mesuré et assumé plutôt que
     masqué par un étiquetage complaisant. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "communiquer", "analyser", "valider"]
  }
};
