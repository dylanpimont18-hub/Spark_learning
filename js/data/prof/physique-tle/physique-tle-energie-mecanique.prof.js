/* =========================================================
   Spark Learning – js/data/prof/physique-tle/physique-tle-energie-mecanique.prof.js
   Fiche professeur du chapitre « Énergie mécanique et conservation »
   (terminale spécialité), pour l'édition du professeur. JAMAIS chargée par le
   site : ce fichier n'est référencé ni dans index.html ni dans js/loader.js.
   Seul scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du niveau,
   physique-tle-acides-bases.prof.js (2026-09-17).

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 3 : 30 énoncés tirés, dont 12 numérotés et 18 en
   banque supplémentaire. Deux moules strictement alternés :
     - moule SANS FROTTEMENT (exercices IMPAIRS 1, 3, 5, 7, 9, 11) : masse m
       et hauteur h données, on demande la vitesse d'arrivée
       $v = \sqrt{2gh}$ — la masse est donnée mais NE SERT PAS ;
     - moule AVEC FROTTEMENT (exercices PAIRS 2, 4, 6, 8, 10, 12) : masse m,
       hauteur h et vitesse mesurée v données, on demande l'énergie dissipée
       $mgh - \frac12 mv^2$ — ici la masse SERT.
   Cette alternance est une aubaine pédagogique : le même symbole $m$ est tantôt
   inutile, tantôt indispensable, à une page d'intervalle. C'est ce qui fonde
   les renvois croisés de l'erreur 1.
   Aucun exercice n'applique le théorème de l'énergie cinétique, ne fait
   intervenir une force perpendiculaire au déplacement, ni ne demande de
   discuter la nature d'une force : c'est ce qui contraint l'erreur 4 à rester
   sans renvoi.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif, tutoiement de l'élève.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-tle-energie-mecanique"] = {

  /* Prérequis en numéros de chapitre DU NIVEAU (terminale).

     ch. 3 (Dynamique newtonienne) : RETENU. La dépendance n'est pas celle
     qu'on croit — ce chapitre-ci n'utilise ni $\vec p$ ni la conservation de
     la quantité de mouvement. Elle est METHODOLOGIQUE et elle est réelle :
     l'approche énergétique se définit par CONTRASTE avec l'approche par les
     forces. Toute la valeur du chapitre tient dans le fait qu'on obtient
     $v = \sqrt{2gh}$ sans jamais écrire le PFD ni intégrer quoi que ce soit, ce
     qui n'a de sens que pour un élève qui vient de passer trois chapitres à
     appliquer le PFD. Le ch. 3 est celui qui installe le plus explicitement la
     notion de SYSTÈME et la question « sur quoi s'applique cette force ? »,
     question qui redevient centrale ici pour décider quelles forces
     travaillent. Et le ch. 3 introduit la première grandeur CONSERVÉE de
     l'année ($\vec p$), dont l'énergie mécanique est la seconde : la
     conservation est un raisonnement, et il vaut mieux l'avoir déjà rencontré.

     ch. 1 (Mouvement dans un champ uniforme) : ÉCARTÉ. Ce serait défendable —
     la chute libre y est traitée — mais ce chapitre-ci ne réutilise aucune de
     ses équations horaires, et le ch. 3 couvre déjà la dépendance
     méthodologique. Déclarer les deux surchargerait le tableau sans rien
     ajouter.
     ch. 2 (Satellites) : ÉCARTÉ, aucun bilan énergétique n'y figure.
     ch. 5 (Thermodynamique) : ÉCARTÉ, la dépendance va dans l'autre sens — le
     premier principe généralise la conservation de l'énergie, il ne la fonde
     pas.
     ch. 6 à 11 : aucun lien.

     LE PRÉREQUIS LE PLUS LOURD N'EST PAS DÉCLARABLE : c'est le chapitre
     « Travail et énergie » de PREMIÈRE, qui installe $E_c$, $E_{pp}$ et la
     notion de travail d'une force. Il est traité dans `note`, qui est
     imprimée. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 4, celui du livre.

     Contrainte dure : ce chapitre doit suivre le chapitre 3, dont il est le
     contrepoint méthodologique. Le bloc mécanique de la terminale se tient
     dans l'ordre 1 -> 2 -> 3 -> 4, et le livre le respecte déjà.

     PRÉREQUIS MATHÉMATIQUE, remarquablement léger et c'est ce qui rend ce
     chapitre reposant après le chapitre 3 : une racine carrée, un carré, et
     rien d'autre. Aucune dérivée, aucune équation différentielle, aucun
     logarithme. Après un chapitre 3 qui exige de lire $d\vec p/dt$, celui-ci
     offre une respiration bienvenue, et c'est un argument supplémentaire pour
     ne pas l'avancer avant le 3 : la difficulté de l'année doit monter, pas
     alterner au hasard. */
  rangConseille: 4,

  /* Attendus de fin de terminale, programme de SPÉCIALITÉ PHYSIQUE-CHIMIE DE
     TERMINALE (2019), thème « Mouvement et interactions ». Repris aux mots du
     programme. */
  attendus: [
    "Utiliser le théorème de l'énergie cinétique pour déterminer une vitesse ou le travail d'une force",
    "Identifier des situations de conservation et de non-conservation de l'énergie mécanique",
    "Exploiter la conservation de l'énergie mécanique dans le cas d'un mouvement sans frottement"
  ],

  note: "L'énergie cinétique, l'énergie potentielle de pesanteur, l'énergie mécanique, sa " +
        "conservation et le théorème de l'énergie cinétique sont au programme de spécialité de " +
        "terminale : le chapitre ne déborde pas.<br/><br/>" +
        "<strong>Deux prérequis comptent, et un seul est visible.</strong> Le chapitre s'appuie sur " +
        "le chapitre 3 (« Dynamique newtonienne ») — non pour sa quantité de mouvement, dont il n'a " +
        "aucun usage, mais parce que l'approche énergétique ne prend son sens que par " +
        "<strong>contraste</strong> avec l'approche par les forces, et parce que $\\vec{p}$ est la " +
        "première grandeur conservée que l'élève a rencontrée ; cela, la colonne « S'appuie sur » " +
        "l'affiche. Mais il suppose aussi acquis le <strong>« Travail et énergie »</strong> de " +
        "<strong>première</strong>, qui installe $E_c$, $E_{pp}$ et surtout la notion de " +
        "<strong>travail d'une force</strong> : un prérequis ne pouvant viser qu'un chapitre du " +
        "même niveau, <strong>rien ne le montrera</strong>. Si la classe ne sait plus ce qu'est le " +
        "travail d'une force, le reprendre avant : le chapitre 4 ne le redéfinit pas et l'emploie " +
        "dès sa première page.<br/><br/>" +
        "<strong>Le prérequis mathématique est le plus léger de l'année :</strong> une racine " +
        "carrée et un carré, rien de plus. Ni dérivée, ni équation différentielle, ni logarithme. " +
        "Après le chapitre 3, qui demande de lire $\\dfrac{d\\vec{p}}{dt}$, celui-ci offre une " +
        "respiration — raison de plus pour respecter l'ordre $3 \\rightarrow 4$ plutôt que de " +
        "l'inverser.<br/><br/>" +
        "<strong>Ce que les exercices ne travaillent pas.</strong> Les trente énoncés tirés " +
        "alternent deux moules seulement : vitesse d'arrivée <strong>sans</strong> frottement, et " +
        "énergie dissipée <strong>avec</strong> frottement. Aucun n'applique le " +
        "<strong>théorème de l'énergie cinétique</strong> — pourtant premier attendu officiel et " +
        "seul outil valable dans tous les cas —, aucun ne fait intervenir une force " +
        "perpendiculaire au déplacement (réaction normale, tension d'un fil) alors que c'est " +
        "l'objet du piège du cours, et aucun ne demande de <strong>discuter</strong> si l'énergie " +
        "mécanique se conserve : l'énoncé le dit toujours. Prévoir un travail spécifique sur ces " +
        "trois points, que le manuel ne fournit pas sous forme d'exercice.",

  erreurs: [
    {
      titre: "Croire que la masse intervient toujours, ou qu'elle ne sert jamais",
      eleve: "Devant un exercice sans frottement, l'élève se bloque : « on me donne $m = 65$ kg mais " +
             "la formule $v = \\sqrt{2gh}$ ne la contient pas, il manque quelque chose ». Ou bien, " +
             "ayant retenu que « la masse ne compte pas », il l'oublie dans un exercice avec " +
             "frottement et annonce une énergie dissipée en joules par kilogramme sans s'en " +
             "apercevoir.",
      cause: "Les deux moules d'exercices se ressemblent au mot près — même objet, même hauteur, " +
             "même $g$ — et l'élève ne perçoit pas que la <strong>question posée</strong> change " +
             "tout. Pour une vitesse, la masse se simplifie ($mgh = \\frac{1}{2}mv^2$) et " +
             "disparaît. Pour une énergie, elle ne se simplifie pas et gouverne le résultat : une " +
             "luge deux fois plus lourde dissipe deux fois plus d'énergie. L'élève a retenu une " +
             "conclusion — « la masse ne compte pas » — sans le calcul qui la produit ni le " +
             "domaine où elle vaut.",
      remede: "Faire écrire l'équation <strong>avant</strong> de simplifier, et faire barrer le $m$ " +
              "au tableau quand il se simplifie : dans $mgh = \\frac{1}{2}mv^2$, la simplification " +
              "se <strong>voit</strong>. Dans $E_{dissipée} = mgh - \\frac{1}{2}mv^2$, il n'y a " +
              "rien à barrer, et cela se voit aussi. Deux lignes au tableau valent mieux qu'une " +
              "règle.<br/><br/>" +
              "Formuler ensuite la <strong>bonne règle</strong>, qui n'est pas celle que l'élève a " +
              "retenue : ce sont les <strong>vitesses</strong> qui ne dépendent pas de la masse, " +
              "pas les <strong>énergies</strong>. Une énergie est toujours proportionnelle à la " +
              "masse — c'est même ce qui la rend physiquement utile. Deux skieurs de masses " +
              "différentes arrivent à la même vitesse mais n'ont pas la même énergie à " +
              "dissiper : c'est pourquoi le plus lourd use davantage ses freins.<br/><br/>" +
              "Faire enfin du <strong>contrôle d'unité</strong> une habitude de fin de calcul : une " +
              "énergie s'exprime en joules, et un joule est un kg·m²/s². Si la masse n'apparaît " +
              "nulle part dans le calcul, le résultat ne peut pas être en joules. La vérification " +
              "prend cinq secondes et attrape l'erreur à coup sûr.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 3) : le tirage offre gratuitement la
         démonstration, parce que deux exercices tirent des masses différentes
         pour la MÊME hauteur. L'exercice 3 (m = 80 kg, h = 15 m, sans
         frottement) donne v = 17,16 m/s, et le supplément S1 (m = 70 kg,
         h = 15 m) donne EXACTEMENT la même valeur, 17,16 m/s : dix kilogrammes
         d'écart, aucune différence sur la vitesse. Le renvoi pointe le 3 parce
         qu'il est numéroté et donc citable en classe ; faire lire S1 juste
         après rend la conclusion indiscutable. À l'inverse l'exercice 6
         (m = 60 kg, h = 15 m, AVEC frottement) donne 1 519 J, alors que la
         même situation à 80 kg en donnerait 2 025 : là, la masse gouverne tout.
         Les trois énoncés se lisent utilement à la suite. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Oublier le carré, ou le placer au mauvais endroit",
      eleve: "Pour $h = 25$ m, l'élève annonce $v = 2 \\times 9{,}81 \\times 25 = 490{,}5$ m/s au " +
             "lieu de $22{,}15$ m/s : il a oublié la racine. Ou bien, calculant une énergie " +
             "cinétique, il écrit $E_c = \\frac{1}{2}mv$ et perd un facteur égal à la vitesse " +
             "elle-même.",
      cause: "La relation $v = \\sqrt{2gh}$ n'est pas une formule du cours : c'est le RÉSULTAT " +
             "d'une simplification que l'élève doit conduire lui-même à partir de " +
             "$mgh = \\frac{1}{2}mv^2$. Le carré disparaît au moment où l'on isole $v$, et c'est " +
             "précisément l'étape où l'attention se relâche — la simplification de $m$ vient d'être " +
             "faite, l'élève croit avoir terminé. Le fond du problème est que l'énergie cinétique " +
             "est <strong>quadratique</strong> en vitesse alors que toutes les relations " +
             "rencontrées jusqu'ici sont linéaires : rien dans l'habitude de l'élève ne l'y " +
             "prépare.",
      remede: "Faire du <strong>contrôle d'ordre de grandeur</strong> un réflexe de fin de calcul, " +
              "car il rejette l'erreur immédiatement et sans calculatrice : une chute de " +
              "quelques dizaines de mètres donne une vitesse de quelques dizaines de mètres par " +
              "seconde, soit une centaine de kilomètres par heure. Une réponse de $490$ m/s " +
              "— $1\\,760$ km/h, la vitesse d'un avion de chasse — est fausse avant d'être " +
              "vérifiée.<br/><br/>" +
              "Donner ensuite un <strong>repère chiffré mémorisable</strong> qui sert d'étalon " +
              "toute l'année : une chute de $5$ m donne environ $10$ m/s, une chute de $20$ m " +
              "environ $20$ m/s, une chute de $45$ m environ $30$ m/s. On retient trois couples, et " +
              "on encadre n'importe quel résultat. L'exemple résolu du cours fournit le " +
              "troisième.<br/><br/>" +
              "Faire enfin observer la <strong>conséquence physique du carré</strong>, qui est le " +
              "meilleur moyen de ne plus l'oublier : quadrupler la hauteur ne quadruple pas la " +
              "vitesse, il la double seulement. C'est pourquoi une chute de $40$ m n'est pas quatre " +
              "fois plus rapide qu'une chute de $10$ m. Le carré n'est pas un ornement de la " +
              "formule, il dit quelque chose sur le monde — et un élève qui a vu cela ne l'oublie " +
              "plus.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 (m = 60 kg,
         h = 40 m, sans frottement) donne v = 28,01 m/s, et l'exercice 1
         (m = 65 kg, h = 25 m) donne v = 22,15 m/s. Le renvoi pointe le 5 parce
         que c'est la plus grande hauteur du moule sans frottement, donc celle
         où l'erreur produit le nombre le plus absurde : l'élève qui oublie la
         racine annonce 784,8 m/s, soit plus de deux fois la vitesse du son —
         une réponse que le contrôle d'ordre de grandeur rejette sans aucun
         calcul. Le tirage permet en outre de vérifier la conséquence du carré
         énoncée dans le remède : h = 15 m donne 17,16 m/s (exercice 3) et
         h = 40 m donne 28,01 m/s, soit un rapport de hauteurs de 2,67 pour un
         rapport de vitesses de 1,63 = racine(2,67). */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Se tromper de signe sur l'énergie dissipée",
      eleve: "Pour une luge partie de $h = 20$ m et arrivant à $14{,}06$ m/s, l'élève calcule " +
             "$\\frac{1}{2}mv^2 - mgh$ et annonce $-6\\,815$ J, puis conclut que « les frottements " +
             "ont apporté de l'énergie ». Ou bien il garde le signe moins et écrit « énergie " +
             "dissipée $= -6\\,815$ J », sans voir la contradiction entre le mot « dissipée » et le " +
             "signe négatif.",
      cause: "Le chapitre manipule deux quantités de signes opposés qui portent des noms proches. " +
             "La <strong>variation</strong> d'énergie mécanique, " +
             "$\\Delta E_m = E_{m,final} - E_{m,initial}$, " +
             "est <strong>négative</strong> en présence de frottements, comme le " +
             "récapitulatif du cours l'écrit. L'<strong>énergie dissipée</strong>, elle, est ce " +
             "qu'on a perdu : c'est une quantité <strong>positive</strong>, égale à " +
             "$|\\Delta E_m|$. Rien dans les symboles ne distingue les deux, et l'élève applique la " +
             "convention « final moins initial » apprise partout ailleurs, sans se demander si la " +
             "question porte sur une variation ou sur une perte.",
      remede: "Faire lire la <strong>question</strong> avant d'écrire la soustraction, et la " +
              "traduire en français : « quelle énergie a été perdue ? » demande un nombre positif. " +
              "On soustrait donc le plus petit du plus grand — ici " +
              "$E_{m,départ} - E_{m,arrivée}$ — " +
              "et la question du signe ne se pose même pas. C'est exactement ce " +
              "que fait la correction du cours.<br/><br/>" +
              "Ancrer ensuite sur le <strong>sens physique</strong>, qui est infaillible : les " +
              "frottements font toujours <strong>perdre</strong> de l'énergie mécanique, jamais " +
              "gagner. Une luge freinée par la neige arrive forcément plus lentement qu'une luge " +
              "idéale. On sait donc AVANT de calculer que la réponse est positive, et un résultat " +
              "négatif signale une soustraction à l'envers, pas une découverte.<br/><br/>" +
              "Faire enfin poser un <strong>encadrement préalable</strong>, qui vérifie aussi " +
              "l'ordre de grandeur : l'énergie dissipée est nécessairement comprise entre $0$ et " +
              "$mgh$, puisqu'on ne peut pas perdre plus que ce qu'on avait. Ici $mgh = 13\\,734$ J, " +
              "donc une réponse de $6\\,815$ J est plausible — un peu moins de la moitié — tandis " +
              "qu'une réponse de $20\\,000$ J serait impossible. Cet encadrement ne coûte qu'une " +
              "multiplication et attrape aussi les erreurs de conversion.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         m = 70 kg, h = 20 m, v = 14,06 m/s, réponse 6 815 J. Le calcul est
         mgh = 70 x 9,81 x 20 = 13 734 J et 1/2 mv² = 0,5 x 70 x 197,7 =
         6 919 J, soit une dissipation de 6 815 J — presque exactement la
         MOITIÉ de l'énergie initiale. Ce tirage est le meilleur support de
         l'erreur pour deux raisons : l'élève qui inverse la soustraction
         trouve -6 815 J, un nombre dont le signe crie l'erreur ; et
         l'encadrement du remède (0 < E_dissipée < 13 734 J) est ici
         particulièrement lisible puisque la réponse tombe au milieu. Sur
         l'exercice 12 (m = 70 kg, h = 30 m, v = 16,98 m/s, réponse 10 510 J),
         la dissipation atteint 51 % de mgh = 20 601 J : même structure, mais
         des nombres moins ronds. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire qu'une force intense fait forcément varier l'énergie mécanique",
      eleve: "Devant une bille sur un rail incurvé, l'élève refuse d'appliquer la conservation : " +
             "« le rail exerce une force énorme sur la bille, donc l'énergie mécanique ne peut pas " +
             "se conserver ». Ou bien il cherche à calculer le travail de la réaction du support " +
             "et se bloque faute de connaître son intensité.",
      cause: "L'élève confond l'<strong>intensité</strong> d'une force et son " +
             "<strong>travail</strong>. Une force peut être aussi grande qu'on veut : si elle est " +
             "perpendiculaire au déplacement, son travail est rigoureusement nul et elle ne change " +
             "rien à l'énergie. C'est contre-intuitif parce que l'expérience quotidienne associe " +
             "« force intense » et « effet important ». Le mot « travail » lui-même trahit, puisque " +
             "dans la langue courante porter une charge lourde est un travail — alors qu'en " +
             "physique, porter une valise en marchant sur du plat a un travail nul.",
      remede: "Faire de la <strong>direction</strong> le seul critère qui compte, avant toute " +
              "considération d'intensité : une force fait varier l'énergie si et seulement si elle " +
              "a une composante <strong>le long</strong> du déplacement. Perpendiculaire, elle ne " +
              "travaille pas — quelle que soit sa valeur. Le piège du cours l'énonce exactement " +
              "ainsi, et il vaut la peine de le relire au moment de l'erreur plutôt qu'à " +
              "l'avance.<br/><br/>" +
              "Donner l'<strong>exemple qui fait basculer</strong>, et qui vaut tous les " +
              "raisonnements : la Lune tourne autour de la Terre depuis quatre milliards d'années " +
              "sous une force gravitationnelle colossale, perpendiculaire à sa vitesse — et sa " +
              "vitesse n'a pas changé d'un mètre par seconde. C'est le chapitre 2 qui le dit, et " +
              "faire le lien explicitement ancre les deux chapitres l'un dans l'autre.<br/><br/>" +
              "Faire enfin établir la <strong>liste de tri</strong> une fois pour toutes, à " +
              "recopier dans le cahier : le poids travaille (conservatif) ; les frottements " +
              "travaillent (non conservatifs, toujours négativement) ; la réaction normale et la " +
              "tension d'un fil ne travaillent jamais. Trois lignes, et la décision « l'énergie " +
              "mécanique se conserve-t-elle ? » devient mécanique.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les trente
         énoncés tirés ANNONCENT toujours le régime — « on néglige tout
         frottement » ou « en raison des frottements, la vitesse mesurée n'est
         que v ». Aucun ne demande de DÉCIDER si l'énergie mécanique se
         conserve, aucun ne mentionne une réaction normale ni une tension de
         fil, aucun n'exige de trier les forces selon qu'elles travaillent ou
         non. L'erreur ne peut donc pas être remédiée par un exercice du
         chapitre : elle porte sur une décision que les énoncés prennent à la
         place de l'élève, et c'est la limite signalée dans la `note`. Le seul
         support du livre est la question 2 de l'évaluation (quelle force ne
         travaille jamais ?), mais la règle éditoriale du projet interdit de
         renvoyer vers l'évaluation notée. Le remède s'appuie donc sur le piège
         du cours, sur le rappel du chapitre 2 et sur une liste de tri à
         constituer en classe. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête.

     Q1 — chute libre de $h = 20$ m, calculer $v$. La relation $v = \sqrt{2gh}$
          est établie dans l'exemple résolu et s'applique dans le sens direct.
          La masse $m = 3$ kg est donnée et ne sert pas, mais l'élève n'a aucun
          choix à faire : « réaliser ».
     Q2 — quelle force ne travaille jamais ? Restitution de la propriété du
          cours et du piège, avec le poids et les frottements en distracteurs :
          « s'approprier ». C'est l'erreur 4 de cette fiche.
     Q3 — $m$, $h$ et $v$ donnés, calculer l'énergie dissipée. Il faut décider
          d'une soustraction et de son sens — c'est exactement l'erreur 3 de
          cette fiche — et aucune formule du cours ne donne directement
          l'énergie dissipée : il faut la composer. Choix de méthode :
          « analyser ».
     Q4 — comment se définit $E_m$ ? Restitution de la définition D3, avec le
          produit et la différence en distracteurs : « s'approprier ».
     Q5 — dans quels cas le théorème de l'énergie cinétique est-il valable ? Il
          faut juger le domaine de validité d'un outil et le distinguer de
          celui de la conservation de $E_m$, ce qui est un contrôle de
          cohérence et non une récitation : « valider ».

     « Communiquer » n'est pas mobilisé : aucune des cinq questions ne demande
     de produire une explication rédigée. C'est coûteux sur ce chapitre, où le
     baccalauréat demande régulièrement de JUSTIFIER À L'ÉCRIT que l'énergie
     mécanique se conserve avant de l'écrire — justification que les exercices
     tirés fournissent toute faite dans l'énoncé. */
  competences: {
    evaluation: ["réaliser", "s'approprier", "analyser", "s'approprier", "valider"]
  }
};
