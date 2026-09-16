/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-energie.prof.js
   Fiche professeur du chapitre « L'énergie cinétique et potentielle »
   (troisième). JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-3e-resistance-ohm.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-energie"] = {

  /* Aucun prérequis de troisième : le chapitre ouvre la physique du niveau et
     ne consomme rien des deux chapitres de chimie qui le précèdent dans le
     livre.

     Son prérequis réel est la VITESSE, chapitre de quatrième : $E_c$ se
     calcule à partir de $v$, et un élève qui ne sait pas ce qu'est une vitesse
     en m/s ne peut pas entrer dans le chapitre. Non déclarable ici
     (`prerequis` ne vise que le même niveau) ; la note le signale.

     Le prérequis mathématique compte aussi : le carré d'un décimal et la
     racine carrée, tous deux nécessaires, et la racine carrée n'est pas
     toujours encore consolidée en début de troisième. */
  prerequis: [],

  /* Rang conseillé (2026-09-16) : rang 3, celui du livre. Le chapitre ouvre la
     physique de la troisième après le bloc chimie, et il doit précéder
     « Puissance et énergie électrique » (rang 5), qui réutilise le joule et la
     notion de conversion d'énergie — même si le lien passe par la grandeur et
     non par une formule, ce qui explique qu'il ne soit pas déclaré en
     prérequis de ce chapitre-là.

     Il gagne à être placé APRÈS que la racine carrée a été revue en
     mathématiques : le calcul de la vitesse en bas d'une pente en demande
     une, et c'est la seule difficulté technique du chapitre. */
  rangConseille: 3,

  // Attendus de fin d'année, cycle 4 (2020), thème « L'énergie et ses
  // conversions ». Aux mots du programme.
  attendus: [
    "Identifier les différentes formes d'énergie, dont l'énergie cinétique et l'énergie potentielle de position",
    "Établir un bilan énergétique pour un système simple et identifier les conversions d'énergie",
    "Exploiter l'expression de l'énergie cinétique pour étudier un mouvement"
  ],

  note: "Énergie cinétique, énergie potentielle de pesanteur, énergie mécanique et sa " +
        "conservation sont au programme du cycle 4.<br/><br/>" +
        "<strong>Deux prérequis extérieurs au niveau.</strong> Le chapitre suppose la " +
        "<strong>vitesse</strong> acquise (chapitre de quatrième) : sans elle, $E_c$ n'a pas de " +
        "sens. Et il demande la <strong>racine carrée</strong>, pour calculer la vitesse atteinte " +
        "en bas d'une pente — c'est la seule difficulté technique du chapitre, et elle est " +
        "mathématique. Si la racine carrée n'a pas été revue, ces exercices bloquent sur un " +
        "obstacle qui n'est pas de la physique.<br/><br/>" +
        "<strong>Deux valeurs tirées demandent un mot en classe.</strong> Le générateur tire la " +
        "hauteur entre $2$ et $50$ m pour tous les contextes indifféremment, si bien qu'il peut " +
        "produire un « plan incliné de laboratoire de hauteur $32{,}1$ m » — mathématiquement " +
        "exploitable, physiquement absurde pour une salle de sciences. Le signaler à l'oral quand " +
        "le cas se présente, plutôt que de laisser croire que l'ordre de grandeur n'importe pas : " +
        "c'est même une occasion d'exercer le regard critique que l'erreur 4 de cette fiche " +
        "demande.<br/><br/>" +
        "<strong>Sur $g$</strong> : le cours prend $g \\approx 9{,}8$ N/kg et l'évaluation le " +
        "rappelle dans son énoncé. Certains manuels arrondissent à $10$ pour alléger le calcul ; " +
        "ici on garde $9{,}8$, donc la calculatrice est nécessaire. Le dire avant le devoir.",

  erreurs: [
    {
      titre: "Oublier le carré de la vitesse",
      eleve: "Pour $m = 55{,}6$ kg et $v = 6$ m/s, l'élève calcule " +
             "$0{,}5 \\times 55{,}6 \\times 6 = 166{,}8$ J au lieu de $1\\,000{,}8$ J : il " +
             "multiplie par la vitesse au lieu de son carré.",
      cause: "La formule est lue comme une suite de facteurs à multiplier, et l'exposant — " +
             "typographiquement discret — est traité comme un détail d'écriture. L'élève ne " +
             "perçoit pas que le carré est le contenu <strong>physique</strong> de la relation, " +
             "celui qui distingue l'énergie cinétique d'une simple proportionnalité à la vitesse.",
      remede: "Faire dire la formule à voix haute avant de calculer, en nommant l'opération : " +
              "« un demi, fois la masse, fois la vitesse <strong>au carré</strong> ». Puis " +
              "imposer l'ordre de calcul : <strong>d'abord</strong> $v^2$, seul, écrit sur sa " +
              "propre ligne ; ensuite le produit. Un carré calculé à part ne peut plus être " +
              "oublié.<br/><br/>" +
              "Montrer ce que le carré <strong>signifie</strong>, car c'est là que l'erreur se " +
              "règle définitivement : doubler la vitesse <strong>quadruple</strong> l'énergie " +
              "cinétique. C'est la raison pour laquelle une collision à $100$ km/h est quatre " +
              "fois plus violente qu'à $50$, et non deux fois. La définition D1 du cours l'énonce " +
              "exactement ainsi, et aucun élève n'oublie le carré après avoir compris cela.<br/><br/>" +
              "Ajouter un contrôle d'ordre de grandeur, facile ici : l'énergie cinétique d'une " +
              "personne qui court se compte en centaines ou milliers de joules. Un résultat de " +
              "$166$ J pour une luge de $55$ kg à $6$ m/s est trop petit d'un facteur six.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 2) : l'exercice 2 est « une luge avec son
         occupant, de masse totale m = 55,6 kg, se déplace à une vitesse
         v = 6 m/s ; calcule son énergie cinétique » — réponse 1000,8 J. Le
         tirage est favorable au diagnostic : la vitesse est un entier simple
         (6), son carré (36) est immédiat, et l'oubli du carré donne 166,8 J,
         soit exactement six fois moins — un écart qu'un contrôle d'ordre de
         grandeur attrape sans refaire le calcul. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Confondre énergie cinétique et énergie potentielle",
      eleve: "Pour un objet en haut d'une pente, immobile, l'élève calcule une énergie cinétique " +
             "non nulle. Ou, pour un objet qui roule à plat, une énergie potentielle qui " +
             "dépendrait de sa vitesse.",
      cause: "Les deux grandeurs se notent presque pareil ($E_c$ et $E_{pp}$), se mesurent dans la " +
             "même unité et arrivent dans la même séance. Ce qui manque, c'est l'association de " +
             "chacune à <strong>ce dont elle dépend</strong> : le mouvement pour l'une, " +
             "l'altitude pour l'autre.",
      remede: "Faire nommer la <strong>cause</strong> avant d'écrire la formule, toujours dans le " +
              "même ordre : « l'objet bouge-t-il ? » (énergie cinétique) et « est-il en " +
              "hauteur ? » (énergie potentielle). Deux questions, deux réponses indépendantes — " +
              "un objet peut avoir les deux, une seule, ou aucune.<br/><br/>" +
              "Le cas décisif est celui de l'objet <strong>immobile en haut</strong> : " +
              "$E_c = 0$ (il ne bouge pas) et $E_{pp}$ maximale (il est haut). Le faire énoncer " +
              "par les élèves, puis le cas symétrique de l'objet en bas juste avant l'impact : " +
              "$E_c$ maximale, $E_{pp}$ nulle. Les deux extrêmes installent la distinction mieux " +
              "que la définition.<br/><br/>" +
              "Exploiter ensuite ce couple pour la conservation, qui est le fait du chapitre : " +
              "toute l'énergie potentielle du haut s'est convertie en énergie cinétique en bas, " +
              "sans perte s'il n'y a pas de frottement. C'est ce raisonnement qui permet de " +
              "calculer la vitesse en bas d'une pente <strong>sans connaître la masse</strong>, " +
              "ce qui étonne toujours les élèves — et l'étonnement est le signe qu'ils ont " +
              "compris que les deux énergies sont les deux faces d'une même quantité.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 1 est « un plan
         incliné de hauteur h = 32,1 m, frottements négligés, objet partant
         SANS VITESSE INITIALE du sommet ; calcule la vitesse atteinte en bas ».
         C'est exactement le cas décisif du remède : en haut Ec = 0 et Epp
         maximale, en bas l'inverse, et la résolution passe par l'égalité des
         deux. L'énoncé dit « sans vitesse initiale », ce qui donne le point de
         départ du raisonnement. La masse n'est pas donnée, et c'est ce qui
         force à raisonner par conservation plutôt que par formule. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que la masse intervient dans la vitesse de chute",
      eleve: "« On ne peut pas calculer la vitesse en bas, la masse n'est pas donnée. » Ou l'élève " +
             "invente une masse pour pouvoir appliquer ses deux formules.",
      cause: "Les deux formules du chapitre contiennent $m$, donc l'élève en déduit qu'aucun " +
             "calcul n'est possible sans elle. Le raisonnement est honnête : ce qui manque, c'est " +
             "de voir que $m$ se <strong>simplifie</strong> lorsqu'on égale les deux énergies, " +
             "et que ce n'est pas un hasard de calcul mais un fait physique — tous les corps " +
             "tombent à la même vitesse dans le vide.",
      remede: "Faire écrire l'égalité complète avant de chercher à calculer : " +
              "$\\dfrac{1}{2}mv^2 = mgh$. La masse apparaît des deux côtés, donc elle " +
              "<strong>disparaît</strong> : il reste $v^2 = 2gh$, et $v = \\sqrt{2gh}$. La " +
              "simplification se voit sur la feuille, elle ne se devine pas.<br/><br/>" +
              "Rattacher immédiatement au fait physique, sans quoi la simplification reste un " +
              "tour de calcul : sans frottement, un objet lourd et un objet léger lâchés de la " +
              "même hauteur arrivent en bas à la même vitesse. C'est l'expérience de la plume et " +
              "du marteau sur la Lune, que les élèves connaissent souvent, et elle est exactement " +
              "ce que l'équation dit.<br/><br/>" +
              "Lever l'objection qui vient toujours — « mais une plume tombe moins vite ! » — " +
              "parce qu'y répondre consolide la notion : c'est vrai dans l'air, à cause des " +
              "<strong>frottements</strong>, et c'est précisément pour cela que tous les énoncés " +
              "du chapitre précisent « en négligeant les frottements ». La condition de l'énoncé " +
              "cesse alors d'être une formule rituelle.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 3 est « un
         module de montagnes russes de hauteur h = 25,5 m, frottements
         négligés ; calcule la vitesse atteinte en bas » — et, comme l'exercice
         1, il ne donne AUCUNE masse. C'est le second tirage de ce type, donc
         celui où l'élève qui a buté sur le premier peut vérifier qu'il a
         compris : la masse manque toujours, et le calcul aboutit quand même.
         Deux occurrences valent mieux qu'une pour cette erreur, qui est une
         conviction et non un oubli. */
      exercice: { type: "exercice", n: 3 }
    },
    {
      titre: "Ne pas juger la vraisemblance d'une vitesse ou d'une hauteur",
      eleve: "L'élève annonce sans réagir une vitesse de $25$ m/s en bas d'un plan incliné de " +
             "laboratoire, ou accepte un « plan incliné de laboratoire de $32$ m de hauteur » sans " +
             "relever l'absurdité.",
      cause: "Échec de <strong>valider</strong>. Le calcul est traité comme l'objectif, et les " +
             "joules comme les mètres par seconde sont des unités dont l'élève de troisième n'a " +
             "pas encore d'intuition chiffrée. Rien ne déclenche donc la confrontation du " +
             "résultat au monde réel, ni même celle de l'énoncé.",
      remede: "Construire et afficher une <strong>échelle de référence</strong> que la classe " +
              "garde : un piéton marche à $1{,}5$ m/s, un cycliste roule à $6$ m/s, une voiture " +
              "en ville à $14$ m/s. Une vitesse de $25$ m/s, c'est $90$ km/h — plausible en bas " +
              "de montagnes russes, absurde en bas d'un plan incliné de salle de " +
              "sciences.<br/><br/>" +
              "Faire convertir systématiquement en km/h pour juger, parce que les mètres par " +
              "seconde ne parlent à personne : multiplier par $3{,}6$ coûte une seconde et rend " +
              "le résultat évaluable. C'est le pont avec le chapitre de vitesse de quatrième, et " +
              "il vaut la peine d'être fait.<br/><br/>" +
              "Faire aussi critiquer l'<strong>énoncé</strong> lui-même, et pas seulement le " +
              "résultat : un plan incliné de laboratoire mesure au plus un ou deux mètres. " +
              "Apprendre à dire « cette donnée ne peut pas être vraie » est une compétence du " +
              "programme, et les tirages du chapitre en offrent de vraies occasions — " +
              "autant s'en servir plutôt que de les subir.",
      /* Volontairement SANS renvoi, et pour un motif de fond : l'erreur porte
         sur le REGARD que l'élève pose sur un résultat, pas sur un type de
         tâche. Les trente exercices tirés se répartissent en deux moules
         (énergie cinétique, vitesse en bas d'une pente) et aucun ne DEMANDE de
         juger une vraisemblance — pointer l'un d'eux suggérerait à
         l'enseignant qu'il y trouvera une consigne de validation, qui n'y est
         pas. La remédiation se fait sur n'importe quel exercice, en ajoutant
         la question à l'oral, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — $m = 5$ kg à $v = 4$ m/s, énergie cinétique. Application directe de
          la formule, données fournies : « s'approprier ».
     Q2 — l'expression de $E_{pp}$ : $mgh$, $m+g+h$, ou $mg/h$ ? Il faut juger
          trois écritures dont deux sont fausses : « valider ».
     Q3 — vitesse en bas d'une pente de $10$ m sans frottement. Il faut poser
          la conservation de l'énergie mécanique et constater que la masse
          n'est pas nécessaire, ce qui est l'erreur 3 de cette fiche :
          « analyser ».
     Q4 — ce qui reste constant en l'absence de frottement. Il faut distinguer
          les trois énergies et identifier laquelle se conserve :
          « analyser ».
     Q5 — avec frottements, l'énergie mécanique : … ? Restitution de la
          définition D4 du cours : « s'approprier ».

     « Réaliser » et « communiquer » ne sont pas mobilisés. Pour « réaliser »
     c'est un vrai manque du chapitre : l'étude d'un mouvement se prête
     pourtant très bien à une mesure (chronométrage d'une bille sur un plan
     incliné, pointage vidéo), et rien dans l'ouvrage ne la propose. Un
     enseignant qui veut la couvrir a là le meilleur candidat de la
     troisième. */
  competences: {
    evaluation: ["s'approprier", "valider", "analyser", "analyser", "s'approprier"]
  }
};
