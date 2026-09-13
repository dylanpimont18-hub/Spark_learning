/* =========================================================
   Spark Learning – js/data/prof/3e/3e-homotheties.prof.js
   Fiche professeur du chapitre « Homothéties » (troisième), pour l'édition du
   professeur. JAMAIS chargée par le site : ce fichier n'est référencé ni dans
   index.html ni dans js/loader.js. Seul scripts/manuel/prof.js le lit, au
   moment de compiler le livre.

   Conventions reprises du CHAPITRE PILOTE du niveau, js/data/prof/3e/
   3e-thales.prof.js (2026-09-13) : KaTeX inline, virgule décimale en {,}, ton
   jamais punitif, remèdes longs et gestes de classe réalisables, renvois
   vérifiés contre le tirage réel de la graine du livre.

   CE CHAPITRE EN PARTICULIER. L'homothétie est la lecture « transformation »
   de ce que Thalès dit en termes de rapports : c'est pourquoi elle le suit
   immédiatement dans la progression. Elle apporte en propre deux difficultés
   que Thalès ne rencontre jamais, et qui structurent cette fiche : le SIGNE du
   rapport (erreur 1) et le passage des longueurs aux AIRES (erreur 2). Les
   trois schémas secondaires du cours ont été écrits pour ces deux points
   précis, et les remèdes ci-dessous s'y appuient nommément.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["3e-homotheties"] = {

  /* Chapitres de CE livre sur lesquels celui-ci s'appuie, par numéro de
     chapitre DE LA TROISIÈME. La contrainte porte sur le rang de la
     PROGRESSION CONSEILLÉE, pas sur l'ordre du livre (voir `validerPrerequis`,
     scripts/manuel/prof.js).

     ch. 3 (théorème de Thalès, rang 8) : une homothétie de centre $O$ et de
     rapport $k$ produit exactement la configuration de Thalès, sécantes issues
     de $O$ et parallèles. L'égalité $A'B' = |k| \times AB$ n'est pas une
     formule de plus : c'est la conclusion de Thalès relue. L'élève qui a
     compris Thalès a déjà la moitié du chapitre, et le lui dire économise une
     leçon entière.

     Le calcul littéral n'est PAS listé comme prérequis, bien que $k^2$
     apparaisse partout : ce qui est en jeu ici n'est pas de développer une
     expression mais de comprendre pourquoi un carré surgit quand on passe des
     longueurs aux aires. C'est une question de sens, pas de technique. */
  prerequis: [3],

  /* Rang conseillé (2026-09-13) : rang 9, immédiatement après Thalès. Les deux
     chapitres disent la même chose dans deux langues différentes, et les
     enchaîner permet de faire le pont explicitement — « ce que tu appelais
     rapport de réduction porte un nom, c'est le rapport de l'homothétie ».
     Séparés de plusieurs semaines, le pont ne se fait plus, et l'élève range
     l'homothétie parmi les transformations vues en cinquième, sans lien avec
     les rapports.

     Il précède les volumes (rang 11) et les sections de solides (rang 12), qui
     tous deux réutilisent le passage rapport → rapport au carré → rapport au
     cube. C'est ici qu'il se joue pour la première fois.

     Le LIVRE, lui, le place ailleurs, parce qu'il range par domaine. */
  rangConseille: 9,

  // Attendus de fin d'année de troisième (programme du cycle 4, 2020),
  // domaine « Espace et géométrie », thème des transformations.
  attendus: [
    "Comprendre l'effet d'une homothétie sur une figure : conservation des angles, multiplication des longueurs par le rapport",
    "Construire l'image d'une figure par une homothétie de centre et de rapport donnés, y compris dans un repère",
    "Reconnaître qu'une homothétie de rapport négatif retourne la figure, et que le rapport $-1$ est la symétrie centrale",
    "Calculer l'effet d'un agrandissement ou d'une réduction sur les longueurs, les aires et les volumes d'une figure",
    "Résoudre un problème d'échelle ou de maquette en mobilisant un rapport d'agrandissement ou de réduction"
  ],

  // Là où le chapitre déborde du programme de l'année, on le dit à
  // l'enseignant plutôt que de le lui laisser découvrir en classe.
  note: "L'homothétie est au programme de troisième, et c'est la dernière transformation " +
        "introduite au collège, après les symétries, la translation et la rotation. L'attendu " +
        "central est qu'elle <strong>conserve les angles</strong> et <strong>multiplie les " +
        "longueurs par $|k|$</strong>, avec ses conséquences sur les aires et les volumes.<br/><br/>" +
        "Un point déborde nettement : l'<strong>écriture vectorielle</strong> " +
        "$\\vec{OA'} = k \\cdot \\vec{OA}$, qui figure dans les définitions du cours. Le produit " +
        "d'un vecteur par un nombre relève de la <strong>seconde</strong>, pas du cycle 4. En " +
        "troisième, on définit l'homothétie par des longueurs et un côté (« $OA'$ vaut $|k|$ fois " +
        "$OA$, du même côté de $O$ si $k > 0$, de l'autre côté si $k < 0$ »). L'écriture " +
        "vectorielle est à garder pour les classes qui la demandent, et jamais à exiger en " +
        "évaluation.<br/><br/>" +
        "Deux points sont en revanche <strong>au programme et souvent oubliés</strong>. D'abord " +
        "l'effet sur les <strong>volumes</strong> ($\\times k^3$), qui n'apparaît pas dans le " +
        "cours de ce chapitre mais qui est exigible, et qu'on retrouvera dans le chapitre sur les " +
        "volumes : c'est l'occasion de le poser ici en une phrase. Ensuite le lien avec " +
        "l'<strong>échelle</strong> d'un plan ou d'une carte, qui est la seule forme sous laquelle " +
        "cette notion tombe presque systématiquement au brevet — deux des cinq questions de " +
        "l'évaluation en relèvent.<br/><br/>" +
        "Enfin, le <strong>grandissement optique</strong> évoqué en fin d'introduction relève de " +
        "la physique-chimie de troisième. Il est excellent comme ancrage, mais il ne peut pas " +
        "être exigé dans une évaluation de mathématiques.",

  /* Cinq erreurs typiques : ce que l'élève écrit, d'où ça vient, par quoi y
     répondre, et l'exercice du livre qui sert de remédiation.

     DEUX RÈGLES ÉDITORIALES respectées ici sans exception :
     — une remédiation ne renvoie JAMAIS vers l'évaluation notée ; on remédie
       avant d'évaluer ;
     — un renvoi faux est pire qu'un renvoi absent.

     ÉTAT DE LA BANQUE (vérifié contre le tirage réel de la graine du livre,
     2026-09-13) : les huit exercices numérotés du chapitre posent tous la même
     tâche, « longueur image $= |k| \times$ longueur de départ », dans six
     habillages différents. Aucun ne porte sur une aire, aucun n'utilise un
     rapport négatif, aucun ne demande une justification. Trois des cinq
     remédiations ci-dessous sont donc SANS RENVOI, et chacune dit où trouver
     l'entraînement utile. C'est un résultat honnête, pas un échec de la fiche :
     un renvoi vers un exercice qui ne travaille pas l'erreur enverrait
     l'enseignant dans le mur. */
  erreurs: [
    {
      titre: "Croire qu'un rapport négatif rapetisse la figure",
      eleve: "Pour l'homothétie de centre $O$ et de rapport $k = -2$ appliquée à un point $A$ tel que " +
             "$OA = 5$ cm, l'élève écrit $OA' = -2 \\times 5 = -10$ cm, puis rature et répond " +
             "$OA' = 2{,}5$ cm — « puisque c'est négatif, ça réduit ». Sur une construction, il place " +
             "systématiquement $A'$ entre $O$ et $A$.",
      cause: "Le signe moins a été appris dans un seul contexte, celui des nombres relatifs, où il " +
             "signifie « plus petit que zéro », donc « moins ». Rien dans la scolarité antérieure ne " +
             "l'a jamais utilisé pour désigner un <strong>côté</strong> plutôt qu'une quantité. " +
             "L'élève transporte donc le seul sens qu'il connaît, et il a raison de le faire : c'est " +
             "le sens dominant. Une longueur négative n'existant pas, il « corrige » en inventant une " +
             "réduction. C'est de la logique, pas de l'inattention.",
      remede: "Séparer explicitement les deux informations que $k$ transporte, et les écrire au " +
              "tableau comme deux lignes distinctes : la <strong>valeur absolue</strong> $|k|$ dit de " +
              "combien on multiplie les longueurs, le <strong>signe</strong> dit de quel côté de $O$ " +
              "on se trouve. Deux questions, deux réponses, jamais mélangées.<br/><br/>" +
              "Le schéma « Un rapport négatif fait basculer la figure de l'autre côté » du cours est " +
              "construit exactement pour cela : les deux dessins ont le même centre, le même triangle " +
              "de départ et la même valeur absolue $1{,}6$. Les deux triangles images ont donc " +
              "rigoureusement la même taille, ce qui se vérifie à la règle sur la page. Seul le côté " +
              "change. L'élève qui croit que le négatif réduit voit là, en une seconde, que les deux " +
              "images sont identiques.<br/><br/>" +
              "Le geste de classe qui règle l'affaire : faire suivre un rayon <strong>du doigt</strong>, " +
              "en partant du sommet $A$ et en allant vers son image. À gauche le doigt s'éloigne de " +
              "$O$ ; à droite il doit <strong>passer par $O$</strong> et continuer au-delà. Faire dire " +
              "la phrase à voix haute : « le rapport est négatif, donc je traverse le centre ».<br/><br/>" +
              "Enchaîner ensuite sur le schéma « Le rapport moins un est exactement la symétrie " +
              "centrale », qui donne au signe négatif un nom que l'élève connaît depuis la cinquième. " +
              "Le cas $k = -1$ est le plus facile à accepter, et il sert de point d'appui pour tous " +
              "les autres rapports négatifs.<br/><br/>" +
              "Aucun exercice numéroté du chapitre n'utilise de rapport négatif : les huit tirent " +
              "$k$ dans $\\{2\\,;\\,3\\,;\\,0{,}5\\}$. La remédiation doit donc se faire sur les " +
              "schémas du cours et sur des constructions au tableau, pas sur la banque d'exercices.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         le générateur du chapitre tire k dans {2 ; 3 ; 0,5}, trois valeurs
         positives. Aucun des huit exercices numérotés ne fait donc intervenir
         de rapport négatif, et l'énoncé de chacun se contente de demander une
         longueur. Renvoyer à l'un d'eux pour LE malentendu du chapitre serait
         un renvoi faux : l'élève ferait l'exercice juste sans jamais rencontrer
         la difficulté. */
      exercice: null
    },
    {
      titre: "Multiplier l'aire par $k$ au lieu de $k^2$",
      eleve: "Pour un plan à l'échelle $\\dfrac{1}{50}$ et un jardin carré de $6$ cm de côté sur le " +
             "plan, l'élève calcule l'aire sur le plan, $6 \\times 6 = 36$ cm², puis écrit " +
             "$36 \\times 50 = 1\\,800$ cm² pour l'aire réelle — au lieu de " +
             "$36 \\times 50^2 = 90\\,000$ cm², soit $9$ m². Il se trompe d'un facteur $50$.",
      cause: "La proportionnalité est, depuis la sixième, le modèle universel de tout ce qui " +
             "« s'agrandit » : si tout est multiplié par $50$, l'aire l'est aussi. Or l'aire n'est " +
             "pas une longueur, c'est un produit de deux longueurs, et <strong>chacune</strong> est " +
             "multipliée par $50$. L'élève n'applique pas une mauvaise règle, il applique la bonne " +
             "règle au mauvais objet. Tant qu'il n'a pas vu qu'une aire contient deux longueurs, le " +
             "carré du rapport reste une formule arbitraire de plus à mémoriser.",
      remede: "Faire compter, pas démontrer. Le schéma « Les longueurs doublent, la surface est " +
              "multipliée par quatre » du cours montre un carré agrandi par $k = 2$, découpé en " +
              "quatre cases numérotées, chacune ayant exactement la taille du carré de départ. " +
              "L'élève compte : <strong>un, deux, trois, quatre</strong>. Il ne croit pas le " +
              "résultat sur parole, il le constate.<br/><br/>" +
              "Prolonger immédiatement à voix haute : « et avec $k = 3$, combien de cases ? ». La " +
              "classe répond neuf en dessinant. Avec $k = 10$, cent. Le carré cesse alors d'être une " +
              "formule et devient un comptage.<br/><br/>" +
              "Installer ensuite le <strong>réflexe de lecture d'énoncé</strong>, qui est ce qui " +
              "sauve en évaluation : dès qu'un énoncé parle de surface, de superficie, de peinture, " +
              "de carrelage, de gazon ou de tissu, le facteur est $k^2$. Faire surligner ces mots " +
              "dans les énoncés avant tout calcul, pendant deux ou trois séances.<br/><br/>" +
              "Ajouter enfin, en une phrase, la suite qui servira deux chapitres plus loin : les " +
              "<strong>volumes</strong> sont multipliés par $k^3$, parce qu'un volume contient trois " +
              "longueurs. L'élève qui a compté les quatre cases accepte les huit cubes sans " +
              "résistance.<br/><br/>" +
              "Les huit exercices numérotés du chapitre portent tous sur une longueur, aucun sur " +
              "une aire : l'entraînement chiffré est à prendre dans les questions du quiz et dans " +
              "le problème de l'affiche du photographe, qui fait explicitement vérifier " +
              "$2\\,400 \\div 150 = 16 = 4^2$.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés demandent tous « la longueur de l'image »,
         jamais une aire. Le seul support chiffré du chapitre qui travaille
         réellement le carré du rapport est le problème guidé (affiche 10x15
         agrandie au rapport 4, avec vérification du facteur 16) — mais ce n'est
         pas un exercice numéroté, et le remède l'indique nommément plutôt que
         de pointer un numéro qui ne travaillerait pas l'erreur. */
      exercice: null
    },
    {
      titre: "Prendre l'échelle à l'envers",
      eleve: "Sur un plan au $\\dfrac{1}{200}$, une pièce mesure $4$ cm. L'élève écrit " +
             "$4 \\div 200 = 0{,}02$ cm et répond que la pièce réelle mesure $0{,}02$ cm, sans " +
             "s'étonner d'une pièce de deux dixièmes de millimètre.",
      cause: "L'écriture $\\dfrac{1}{200}$ contient une division, et l'élève applique l'opération " +
             "qu'il voit écrite. Le sens de l'échelle — « $1$ cm sur le plan représente $200$ cm en " +
             "vrai » — n'est pas lu dans la fraction, il doit être reconstruit, et rien dans la " +
             "notation ne le signale. C'est la même difficulté que l'inversion des rapports dans " +
             "Thalès, dans un habillage différent : l'élève sait faire le calcul, il ne sait pas " +
             "dans quel sens le faire.",
      remede: "Refuser le calcul tant que la <strong>phrase</strong> n'est pas écrite. Avant toute " +
              "opération, l'élève écrit en toutes lettres : « $1$ cm sur le plan représente $200$ cm " +
              "en réalité ». Une fois cette phrase posée, le sens du calcul ne fait plus de doute " +
              "pour personne — on multiplie.<br/><br/>" +
              "Doubler cette exigence d'un <strong>contrôle de vraisemblance</strong> systématique, " +
              "qui est le même geste que celui installé dans le chapitre sur Thalès : « le réel " +
              "est-il plus grand ou plus petit que le plan ? ». Une pièce de $0{,}02$ cm se repère " +
              "alors sans relire une ligne de calcul. Faire formuler l'absurdité à voix haute, sans " +
              "jamais la tourner en faute : « une pièce plus petite qu'un grain de riz, est-ce que " +
              "ça te paraît possible ? ».<br/><br/>" +
              "Un exercice de classe rapide et très efficace : donner cinq échelles " +
              /* \frac et non \dfrac (2026-09-13) : trois fractions en ligne dans un
                 paragraphe courant. En \dfrac elles sont composées à la taille du
                 mode « display », dépassent la hauteur de ligne et CHEVAUCHENT la
                 ligne suivante — défaut invisible aux tests, vu à l'épreuve sur la
                 page 252 de l'édition professeur. En ligne, on écrit \frac. */
              "($\\frac{1}{25}$, $\\frac{1}{500}$, $\\frac{1}{100\\,000}$, puis $2$ et $50$ pour " +
              "un microscope) et demander uniquement, pour chacune, « agrandissement ou réduction ? ». " +
              "Aucun calcul. Le tri se fait en trois minutes et fixe le sens pour de bon.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-13) :
         l'exercice 2 est « une maquette d'avion au rapport k = 0,5, une pièce
         d'origine mesure 7 cm, quelle est sa longueur sur la maquette ». C'est
         le seul des huit dont le rapport est une RÉDUCTION explicite, et sa
         solution imprimée donne 3,5 cm, c'est-à-dire un résultat plus petit que
         la donnée. Un élève qui prend le rapport à l'envers trouve 14 cm et se
         contredit lui-même : l'énoncé prend l'erreur à revers. Les exercices 5,
         8 et 12 sont les autres tirages à k = 0,5 ; on renvoie au 2, le premier
         des quatre dans le livre. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Multiplier au lieu de diviser pour remonter à la figure de départ",
      eleve: "« Sur la maquette au rapport $k = 0{,}5$, une pièce mesure $3{,}5$ cm ; quelle est sa " +
             "longueur réelle ? » L'élève écrit $3{,}5 \\times 0{,}5 = 1{,}75$ cm, et conclut que " +
             "l'objet réel est plus petit que sa maquette.",
      cause: "Le cours n'a présenté l'homothétie que dans un sens, de l'original vers l'image, et " +
             "la formule $A'B' = |k| \\times AB$ a été mémorisée comme « on multiplie par $k$ », " +
             "sans que les deux rôles de $AB$ et $A'B'$ soient distingués. Face à la question " +
             "inverse, l'élève réutilise le seul geste disponible. Il ne manque pas de méthode, il " +
             "n'en a qu'une.",
      remede: "Faire nommer les deux longueurs <strong>avant</strong> d'écrire quoi que ce soit : " +
              "laquelle est celle de départ, laquelle est celle de l'image ? Tant que cette question " +
              "n'est pas tranchée, la formule ne peut pas être appliquée, et l'élève qui se trompe " +
              "n'a en réalité jamais répondu à cette question-là.<br/><br/>" +
              "Écrire alors la formule avec ses vrais noms, et non avec des lettres muettes : " +
              "$\\text{image} = |k| \\times \\text{départ}$. La question inverse devient une " +
              "équation à une inconnue, exactement celle du chapitre sur les équations : " +
              "$3{,}5 = 0{,}5 \\times x$. L'élève sait la résoudre, et le sens du calcul ne se joue " +
              "plus sur une intuition.<br/><br/>" +
              "Le contrôle de vraisemblance vaut ici aussi, et il est immédiat : une maquette est " +
              "plus petite que l'avion. Un résultat qui dit le contraire se repère sans relire le " +
              "calcul. Faire prendre l'habitude d'annoncer le sens du résultat avant de le calculer.<br/><br/>" +
              "Aucun exercice numéroté du chapitre ne pose la question dans ce sens : les huit " +
              "donnent l'original et demandent l'image. L'entraînement utile est à construire en " +
              "classe, en reprenant simplement l'un de ces énoncés et en échangeant la donnée et la " +
              "question — c'est une minute de préparation, et c'est exactement la tâche manquante.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés donnent tous la longueur d'origine et
         demandent l'image. Aucun ne remonte de l'image à l'original. Renvoyer
         vers l'un d'eux entraînerait l'élève sur la tâche qu'il réussit déjà,
         pas sur celle qu'il rate — un renvoi faux. Le remède dit comment
         fabriquer la tâche manquante en retournant un énoncé existant. */
      exercice: null
    },
    {
      titre: "Donner le résultat sans nommer la transformation ni justifier",
      eleve: "À la question « une homothétie de rapport $k = -1$ est équivalente à quoi ? », l'élève " +
             "coche « symétrie centrale » et s'arrête là. Sur une construction, il place correctement " +
             "$A'$, $B'$ et $C'$ mais n'écrit ni le centre utilisé, ni le rapport, ni la propriété " +
             "qui lui permet d'affirmer que $A'B'C'$ est bien l'image de $ABC$.",
      cause: "La géométrie des transformations a toujours été évaluée, jusqu'en quatrième, sur le " +
             "dessin : si la figure est juste, le travail est juste. Le contrat change en troisième " +
             "sans que personne l'annonce — le brevet demande de <strong>justifier</strong> qu'une " +
             "figure est l'image d'une autre, et une construction correcte non justifiée y perd " +
             "l'essentiel des points. Ce n'est pas de la négligence : c'est un contrat implicite qui " +
             "a changé.",
      remede: "Rendre le contrat explicite et l'afficher. Une justification d'homothétie tient en " +
              "trois éléments, et les trois sont exigibles.<br/><br/>" +
              "<strong>1. La transformation nommée</strong> : « l'homothétie de centre $O$ et de " +
              "rapport $k = -1$ ».<br/><br/>" +
              "<strong>2. La propriété invoquée</strong> : « une homothétie multiplie les longueurs " +
              "par $|k|$ et conserve les angles », ou, pour $k = -1$, « $O$ est le milieu de " +
              "$[AA']$ ».<br/><br/>" +
              "<strong>3. La conclusion</strong>, avec son unité quand il y en a une.<br/><br/>" +
              "Un exercice de classe très rentable, et qui prend dix minutes : distribuer deux " +
              "copies fictives d'un même exercice, l'une avec la bonne figure et aucune phrase, " +
              "l'autre avec une figure maladroite mais les trois éléments écrits. Demander aux " +
              "élèves de les noter eux-mêmes, puis de justifier leur barème. Ils découvrent le " +
              "changement de contrat par eux-mêmes, ce qu'aucun discours sur la rigueur n'obtient " +
              "aussi vite.<br/><br/>" +
              "Accepter les trois éléments dans un ordre personnel, mais jamais leur absence : on " +
              "évalue un raisonnement écrit, pas une mise en page.<br/><br/>" +
              "Les huit exercices numérotés sont à réponse numérique seule et ne demandent aucune " +
              "rédaction : la remédiation passe par les constructions au tableau et par le problème " +
              "guidé du chapitre, dont les trois tâches successives obligent à écrire ce qu'on fait " +
              "avant de donner un nombre.",
      /* Volontairement SANS renvoi. Vérifié contre le tirage réel (2026-09-13) :
         les huit exercices numérotés sont de type 'numeric' — l'élève saisit un
         nombre, et la solution imprimée tient en une ligne de calcul. Aucun
         n'exige, ni ne permet d'évaluer, une justification rédigée. Le seul
         support du chapitre qui impose d'écrire un raisonnement est le problème
         guidé, nommé dans le remède. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel par question de l'évaluation, dans l'ordre
     des questions (chercher, modéliser, représenter, raisonner, calculer,
     communiquer).

     HONNÊTETÉ DU RELEVÉ (2026-09-13). L'évaluation de ce chapitre est, telle
     qu'elle est écrite, très largement calculatoire : quatre questions sur cinq
     demandent un nombre, et trois d'entre elles s'obtiennent en appliquant une
     formule donnée dans le cours. On ne déclare donc pas ce qu'on aimerait
     voir, on déclare ce que la question mobilise réellement.

     Q1 (aire multipliée par k²) : la formule $\mathcal{A}' = k^2 \mathcal{A}$
     est au recap du cours, l'élève l'applique. C'est « calculer », même si le
     carré du rapport est conceptuellement riche : le conceptuel est dans le
     cours, pas dans cette question.

     Q2 (plan au 1/200, longueur réelle) : rien dans l'énoncé ne dit qu'il
     s'agit d'une homothétie, ni quel est le rapport, ni dans quel sens
     l'appliquer. L'élève doit traduire une situation d'échelle en rapport
     d'agrandissement avant tout calcul. C'est « modéliser ».

     Q3 (k = -2, distance OA') : c'est LE piège du chapitre. L'élève doit
     trancher que le signe ne concerne pas la distance mais le côté, donc
     raisonner sur la structure du rapport avant de poser une multiplication.
     Un élève qui calcule sans raisonner écrit -10 ou 2,5. C'est « raisonner ».

     Q4 (k = -1, QCM) : aucun calcul, aucune donnée numérique. L'élève doit
     reconnaître qu'une transformation décrite par un rapport EST une
     transformation qu'il connaît sous un autre nom — se figurer la
     configuration, point fixe et images de l'autre côté. C'est « représenter ».

     Q5 (jardin carré au 1/50, aire réelle en m²) : deux étapes enchaînées,
     passage à l'échelle puis calcul d'aire, avec conversion d'unités. Aucune
     modélisation nouvelle par rapport à Q2, mais une chaîne de calculs plus
     longue où l'erreur se loge. C'est « calculer ».

     Bilan : calculer ×2, modéliser, raisonner, représenter. Aucune compétence
     ne domine, et « communiquer » n'est pas déclarée — aucune des cinq
     questions ne demande de produire une explication, et la déclarer ici
     imprimerait une colonne qui ne serait jamais remplie. */
  competences: {
    evaluation: ["calculer", "modéliser", "raisonner", "représenter", "calculer"]
  }
};
