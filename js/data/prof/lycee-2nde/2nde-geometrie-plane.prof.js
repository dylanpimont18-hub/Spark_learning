/* =========================================================
   Spark Learning – js/data/prof/lycee-2nde/2nde-geometrie-plane.prof.js
   Fiche professeur du chapitre « Géométrie plane » (seconde), pour
   l'édition du professeur. JAMAIS chargée par le site.

   Écrite le 2026-09-13, sur le modèle du chapitre pilote vecteurs.prof.js.

   CHAPITRE DE REPRISE LE PLUS COMPLET DE L'ANNÉE : Thalès, Pythagore, les
   droites remarquables et les aires viennent tous du collège. Ce que la
   seconde ajoute n'est pas un contenu mais une EXIGENCE — celle de la
   démonstration rédigée, où l'on nomme le théorème employé et où l'on
   vérifie ses hypothèses. La fiche insiste là-dessus, parce que c'est le
   seul endroit où l'enseignant peut créer de la valeur sur ce chapitre.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["2nde-geometrie-plane"] = {

  /* Prérequis, en numéros de chapitres DE CE NIVEAU.

     ch. 4 (calcul algébrique) : Thalès produit des égalités de quotients
     qu'il faut résoudre, et le rapport des aires demande de manipuler des
     carrés de fractions. Sans calcul algébrique sûr, l'élève bute sur
     l'algèbre et non sur la géométrie.

     ch. 8 (repérage dans le plan) : le chapitre précédent dans la
     progression conseillée fournit une SECONDE méthode de démonstration,
     par les coordonnées. Les deux approches se complètent et il est
     précieux de pouvoir les comparer sur une même configuration.

     Le chapitre 1 (vecteurs) n'est PAS retenu : aucune configuration de ce
     chapitre n'emploie de vecteur, et le déclarer serait décoratif. */
  prerequis: [4, 8],

  /* Rang conseillé (2026-09-13) : rang 10.

     Après le repérage dans le plan (rang 9), dont il peut réutiliser la
     méthode analytique, et en clôture du bloc de géométrie. Le placer plus
     tôt est possible — le chapitre ne dépend presque que du collège — mais
     on perdrait la possibilité de traiter une même configuration par les
     deux voies, qui est le meilleur moment de la séquence.

     Le LIVRE le range aussi en chapitre 10 : les deux ordres coïncident. */
  rangConseille: 10,

  // Attendus de fin d'année de seconde (programme de 2019), partie
  // « Géométrie », sous-partie « Configurations du plan ».
  attendus: [
    "Utiliser le théorème de Thalès et sa réciproque dans une configuration donnée",
    "Reconnaître et utiliser les droites remarquables d'un triangle",
    "Calculer des longueurs et des aires dans des configurations classiques",
    "Utiliser l'effet d'un rapport de réduction sur les longueurs et sur les aires",
    "Rédiger une démonstration en citant le théorème utilisé et en vérifiant ses hypothèses"
  ],

  note: "Tout le contenu de ce chapitre est au programme de seconde. Il n'en déborde sur " +
        "aucun point.<br/><br/>" +
        "<strong>C'est le chapitre de reprise le plus complet de l'année, et il faut décider " +
        "à l'avance de ce qu'on y apporte.</strong> Thalès, Pythagore, les droites " +
        "remarquables du triangle et les formules d'aires sont tous au programme du collège, " +
        "certains depuis la cinquième. Redonner ces contenus à l'identique occupe des " +
        "semaines sans rien produire.<br/><br/>" +
        "<strong>Ce que la seconde ajoute est une exigence, pas un contenu : la " +
        "démonstration rédigée.</strong> Au collège, l'élève applique Thalès ; en seconde, on " +
        "attend qu'il ÉNONCE le théorème qu'il utilise, VÉRIFIE que ses hypothèses sont " +
        "réunies, et conclue proprement. C'est là, et seulement là, qu'il faut mettre le " +
        "temps. Un élève capable de calculer $MN$ mais incapable de dire pourquoi Thalès " +
        "s'applique n'a pas progressé depuis la troisième.<br/><br/>" +
        "<strong>Le meilleur moment de la séquence</strong>, si la progression le permet, " +
        "est celui où l'on traite une même configuration de DEUX façons : par les " +
        "configurations classiques, puis par les coordonnées du chapitre précédent. L'élève " +
        "découvre qu'un même résultat se démontre par des chemins différents, ce qui est une " +
        "idée mathématique de premier ordre et qu'aucun autre chapitre de l'année n'offre " +
        "aussi facilement.<br/><br/>" +
        "<strong>Un point à connaître sur l'étendue du chapitre.</strong> Le programme " +
        "mentionne aussi la trigonométrie du triangle rectangle (sinus, cosinus, tangente) " +
        "parmi les configurations à mobiliser. Ce chapitre ne la traite pas : ni le cours, " +
        "ni la banque, ni l'évaluation. Les vecteurs (chapitre 1) emploient bien cosinus et " +
        "sinus, mais pour projeter des forces, ce qui est un autre usage. Si l'on veut " +
        "travailler la trigonométrie du triangle rectangle, il faut prévoir des énoncés " +
        "écrits à la main.",

  /* Quatre erreurs typiques. Renvois vérifiés contre le tirage réel de la
     graine du livre (2026-09-13).

     DEUX RÈGLES ÉDITORIALES respectées sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ;
     — un renvoi faux est pire qu'un renvoi absent. */
  erreurs: [
    {
      titre: "Appliquer le rapport de réduction aux aires comme aux longueurs",
      eleve: "Pour une réduction de rapport $k = \\dfrac{2}{5}$, l'élève annonce que l'aire est " +
             "elle aussi multipliée par $\\dfrac{2}{5}$, au lieu de $\\dfrac{4}{25}$.",
      cause: "Le coefficient de réduction est donné une fois dans l'énoncé, et l'élève " +
             "l'applique à tout ce qu'on lui demande. Rien ne lui signale que les longueurs " +
             "et les aires ne se comportent pas de la même façon — ce sont deux grandeurs " +
             "de NATURES différentes, l'une en mètres, l'autre en mètres carrés.<br/><br/>" +
             "L'erreur est d'autant plus solide que l'élève a raison sur les longueurs : sa " +
             "règle marche à moitié.",
      remede: "Faire l'expérience sur un cas où le calcul est immédiat, plutôt que d'énoncer " +
              "la règle : un carré de côté $10$ réduit au rapport $\\frac{1}{2}$ devient un " +
              "carré de côté $5$. Les aires passent de $100$ à $25$, soit une division par " +
              "$4$ et non par $2$. L'élève produit lui-même le facteur carré.<br/><br/>" +
              "Faire ensuite le dessin qui l'explique : dans le carré réduit, il en tient " +
              "exactement <strong>quatre</strong> dans le grand. La raison est visible, et " +
              "elle vaut pour toute figure, pas seulement pour le carré.<br/><br/>" +
              "Rattacher enfin à l'unité, ce qui donne une règle générale : une longueur est " +
              "en mètres, une aire en mètres carrés. Si les longueurs sont multipliées par " +
              "$k$, les aires le sont par $k^2$ — et, l'année prochaine, les volumes par " +
              "$k^3$. L'élève dispose alors d'une règle qu'il peut reconstruire au lieu de " +
              "la mémoriser.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 3 donne un
         rapport de réduction et l'aire du grand triangle, et demande celle
         du petit. Son corrigé s'ouvre sur « les longueurs sont dans le
         rapport k » puis passe au carré, ce qui met l'écart en évidence à
         l'endroit exact où l'élève se trompe. L'exercice 7 est du même
         type. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Confondre les quatre droites remarquables du triangle",
      eleve: "L'élève désigne comme « hauteur » la droite qui passe par un sommet et le " +
             "milieu du côté opposé, ou confond médiatrice et médiane.",
      cause: "Quatre objets, quatre noms qui se ressemblent — médiane, médiatrice, hauteur, " +
             "bissectrice — et deux d'entre eux partagent presque la même racine. Les noms " +
             "ont été appris comme un vocabulaire à mémoriser, sans que leur DÉFINITION " +
             "GÉOMÉTRIQUE serve à les distinguer.<br/><br/>" +
             "S'y ajoute que dans un triangle équilatéral — figure sur laquelle beaucoup " +
             "d'élèves se représentent tout — les quatre coïncident. L'expérience visuelle " +
             "de l'élève ne les sépare donc jamais.",
      remede: "Faire tracer les quatre droites issues d'un même sommet sur un triangle " +
              "franchement <strong>quelconque</strong>, très aplati de préférence. Elles se " +
              "séparent nettement, et l'élève voit quatre objets distincts là où il en " +
              "voyait un. C'est la manipulation la plus rentable du chapitre.<br/><br/>" +
              "Rattacher ensuite chaque nom à ce qu'il fait, en une formule courte : la " +
              "médiane va au <strong>milieu</strong>, la hauteur tombe perpendiculairement, " +
              "la médiatrice est perpendiculaire ET passe par le milieu (mais ne part pas " +
              "d'un sommet), la bissectrice coupe l'angle en deux. Chaque définition contient " +
              "le mot qui la distingue.<br/><br/>" +
              "Signaler enfin explicitement le cas du triangle équilatéral, où les quatre " +
              "sont confondues. Le dire évite que l'élève généralise ce qu'il a vu sur la " +
              "figure la plus dessinée de sa scolarité.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 5 demande
         d'identifier la droite remarquable à partir de sa DÉFINITION
         (« coupe un côté perpendiculairement en son milieu »), parmi quatre
         numérotées. La question porte donc exactement sur la distinction, et
         non sur un calcul. L'exercice 10 est du même type avec une autre
         droite. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Appliquer Thalès sans vérifier le parallélisme",
      eleve: "Devant deux triangles emboîtés, l'élève écrit l'égalité des rapports sans " +
             "s'assurer que les deux droites concernées sont parallèles, ni le mentionner.",
      cause: "Au collège, la configuration de Thalès est presque toujours donnée avec le " +
             "parallélisme explicite dans l'énoncé. L'élève a donc appris à reconnaître un " +
             "DESSIN — deux triangles emboîtés — et non à vérifier une hypothèse.<br/><br/>" +
             "Le parallélisme n'est pas perçu comme une condition d'application : il fait " +
             "partie du décor de la figure.",
      remede: "Montrer un contre-exemple, une fois, et il suffit : deux triangles emboîtés " +
              "dont les bases ne sont PAS parallèles. Les rapports n'y sont pas égaux, et " +
              "l'élève constate que la configuration visuelle ne garantit rien.<br/><br/>" +
              "Imposer ensuite une structure de rédaction en trois temps, la même pour tous " +
              "les théorèmes de l'année : je nomme le théorème, je vérifie ses hypothèses, " +
              "j'écris la conclusion. C'est exactement l'exigence nouvelle de la seconde, et " +
              "ce chapitre est le meilleur endroit pour l'installer.<br/><br/>" +
              "Faire distinguer enfin le théorème direct de sa réciproque, car les deux " +
              "s'utilisent ici : on part du parallélisme pour obtenir des rapports égaux, ou " +
              "l'inverse. Demander à chaque fois « qu'est-ce que je sais, qu'est-ce que je " +
              "veux montrer ? » suffit à choisir.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 2 est une
         configuration de Thalès où l'énoncé DÉCLARE explicitement
         $(MN) \parallel (BC)$, et le corrigé s'ouvre sur le rapport de
         réduction. L'hypothèse figure donc noir sur blanc, ce qui permet de
         la faire repérer et citer — premier pas vers sa vérification.
         L'exercice 8 est du même type. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Prendre n'importe quel côté pour base sans changer la hauteur",
      eleve: "Pour calculer l'aire d'un triangle, l'élève multiplie une base par une hauteur " +
             "qui ne lui est pas associée, ou utilise un côté oblique comme hauteur.",
      cause: "La formule est mémorisée comme « base fois hauteur sur deux », c'est-à-dire " +
             "comme un produit de deux nombres pris dans l'énoncé. Le lien entre les deux — " +
             "la hauteur est RELATIVE à la base choisie — n'est pas dans la formule, et " +
             "l'élève ne peut donc pas le deviner.<br/><br/>" +
             "L'erreur est encouragée par les triangles rectangles, où deux côtés jouent " +
             "effectivement ce rôle : l'élève généralise à tort qu'un côté peut servir de " +
             "hauteur.",
      remede: "Faire calculer l'aire d'un même triangle <strong>trois fois</strong>, en " +
              "prenant successivement chacun des trois côtés comme base. On trouve trois " +
              "fois le même résultat, à condition de prendre à chaque fois la bonne hauteur. " +
              "C'est la manipulation qui installe la relativité de la hauteur, et elle est " +
              "convaincante parce que le résultat se confirme.<br/><br/>" +
              "Exiger ensuite que la hauteur soit TRACÉE sur la figure avant tout calcul, " +
              "avec son angle droit codé. Un élève qui a tracé le segment ne peut plus " +
              "utiliser un côté oblique à sa place.<br/><br/>" +
              "Traiter enfin le cas du triangle obtusangle, où la hauteur tombe " +
              "<strong>hors</strong> du triangle. C'est le cas qui déroute le plus et qui est " +
              "presque toujours évité ; le rencontrer une fois accompagné vaut mieux que le " +
              "découvrir en contrôle.",
      /* Vérifié contre le tirage réel (2026-09-13) : l'exercice 4 donne une
         base ET « la hauteur RELATIVE À CETTE BASE », formulation qui nomme
         explicitement le lien que l'élève ignore. Le corrigé rappelle la
         formule complète. L'exercice 9 est du même type. */
      exercice: { type: "exercice", n: 4 }
    }
  ],

  /* Une compétence par question de l'évaluation, dans l'ordre.

     Q1 troisième angle d'un triangle connaissant les deux autres :
        application de la somme des angles. « calculer ».
     Q2 longueur MN par Thalès : l'élève doit reconnaître la configuration,
        écrire l'égalité des rapports, puis résoudre. Le calcul est simple ;
        ce qui est en jeu est la lecture de la configuration et la mise en
        correspondance des segments. « représenter ».
     Q3 ce qu'est la hauteur issue de A, parmi quatre définitions : l'élève
        doit reconnaître l'énoncé correct et écarter les trois autres
        droites remarquables. Employer à bon escient le vocabulaire
        géométrique, c'est « communiquer ».
     Q4 aire d'un triangle de base et hauteur données : application directe.
        « calculer ».
     Q5 rapport des aires connaissant le rapport de réduction : l'élève doit
        conclure d'une propriété (les aires varient comme le carré) à un
        résultat numérique, en écartant le distracteur proportionnel qui est
        l'erreur la plus fréquente du chapitre. « raisonner ».

     « Chercher » et « modéliser » ne sont PAS déclarées : aucune des cinq
     questions ne demande d'explorer une piste ni de traduire une situation
     concrète en modèle géométrique. Elles sont portées par d'autres
     chapitres du niveau — l'étiquette suit l'énoncé, jamais l'inverse. */
  competences: {
    evaluation: ["calculer", "représenter", "communiquer", "calculer", "raisonner"]
  }
};
