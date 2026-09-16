/* =========================================================
   Spark Learning – js/data/prof/physique-3e/physique-3e-puissance-electrique.prof.js
   Fiche professeur du chapitre « Puissance et énergie électrique » (troisième).
   JAMAIS chargée par le site : seul scripts/manuel/prof.js la lit.

   Conventions calées sur le chapitre pilote du niveau
   (physique-3e-resistance-ohm.prof.js). Référentiel PHYSIQUE.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["physique-3e-puissance-electrique"] = {

  /* ch. 4 (La résistance électrique et la loi d'Ohm) est le prérequis, par un
     lien direct : ce chapitre-ci calcule $P = U \times I$ et, dans la moitié
     de ses exercices, REMONTE de $P$ et $U$ vers $I$. Manipuler les trois
     grandeurs $U$, $I$ et leur relation est exactement ce que le chapitre 4 a
     installé. Un élève qui n'a pas la loi d'Ohm peut mécaniquement appliquer
     $P = UI$, mais il ne comprend pas pourquoi une résistance chauffe, ce qui
     est l'effet Joule du chapitre.

     ch. 3 (L'énergie cinétique et potentielle) n'est PAS retenu, malgré le mot
     « énergie » commun aux deux : le chapitre 3 traite l'énergie mécanique en
     joules, celui-ci l'énergie électrique en kilowattheures, et aucune
     formule ne passe de l'un à l'autre. Le lien est conceptuel (l'énergie se
     conserve et se convertit) et mérite d'être fait à l'oral, mais ce n'est
     pas une dépendance : ce chapitre se traite sans le chapitre 3. */
  prerequis: [4],

  /* Rang conseillé (2026-09-16) : rang 5, celui du livre. Le chapitre suit
     immédiatement la loi d'Ohm (rang 4), dont il est le prolongement
     naturel — on définit $U$ et $I$, on les relie, puis on en tire la
     puissance et l'énergie. Les deux forment le bloc électricité de la
     troisième et se traitent d'un tenant.

     C'est aussi le chapitre le plus concret de l'année : il se termine sur
     une facture d'électricité, ce qui en fait un bon avant-dernier
     chapitre — les élèves y voient à quoi sert ce qu'ils ont appris. */
  rangConseille: 5,

  // Attendus de fin d'année, cycle 4 (2020), thème « L'énergie et ses
  // conversions ». Aux mots du programme.
  attendus: [
    "Exploiter la relation entre puissance, tension et intensité pour un appareil électrique",
    "Calculer une énergie électrique consommée et la convertir en kilowattheures",
    "Réaliser un bilan énergétique et identifier les conversions d'énergie, dont l'effet Joule"
  ],

  note: "Puissance électrique, énergie électrique, kilowattheure et effet Joule sont au programme " +
        "du cycle 4.<br/><br/>" +
        "<strong>Deux unités d'énergie cohabitent, et c'est la difficulté du chapitre.</strong> " +
        "Le joule est l'unité du système international ($E = P \\times t$ avec $t$ en " +
        "<strong>secondes</strong>) ; le kilowattheure est l'unité de la facture " +
        "($E = P \\times t$ avec $P$ en <strong>kW</strong> et $t$ en <strong>heures</strong>). " +
        "La même formule, deux jeux d'unités : c'est là que les élèves se perdent, et non dans le " +
        "calcul. Les exercices tirés demandent tous des <strong>kWh</strong>, ce qui est le choix " +
        "utile, mais l'évaluation du chapitre aussi — le joule n'est donc jamais entraîné. Si le " +
        "brevet le demande, le prévoir en complément.<br/><br/>" +
        "<strong>Le chapitre est le plus concret de l'année.</strong> Une vraie facture " +
        "d'électricité apportée en classe vaut mieux que n'importe quel exercice : les élèves y " +
        "trouvent des kWh, un prix unitaire, et peuvent recalculer le montant. La question 5 de " +
        "l'évaluation fait exactement cela, avec un tarif de $0{,}18$ €/kWh — à actualiser " +
        "plutôt qu'à prendre pour argent comptant, le prix de l'électricité changeant chaque " +
        "année.<br/><br/>" +
        "<strong>Sur les valeurs tirées</strong> : les puissances sont réalistes (four à " +
        "$2\\,500$ W, aspirateur à $458$ W) mais certaines durées sont longues — un four " +
        "électrique pendant $4{,}5$ h. Le signaler quand le cas se présente, c'est exercer le " +
        "regard critique que l'erreur 4 de cette fiche demande.",

  erreurs: [
    {
      titre: "Mélanger watts et kilowatts dans un calcul de kWh",
      eleve: "Pour un four de $2\\,500$ W pendant $4{,}5$ h, l'élève écrit " +
             "$2\\,500 \\times 4{,}5 = 11\\,250$ et annonce « $11\\,250$ kWh » au lieu de " +
             "$11{,}25$ kWh.",
      cause: "La formule $E = P \\times t$ est appliquée correctement, mais avec une puissance en " +
             "<strong>watts</strong> et une unité de réponse en <strong>kilo</strong>wattheures. " +
             "Le préfixe « kilo » du résultat n'est pas relié au préfixe « kilo » qu'il faudrait " +
             "mettre dans la donnée : l'élève lit l'unité demandée comme une étiquette à recopier, " +
             "pas comme une contrainte sur le calcul.",
      remede: "Imposer la <strong>conversion en tête de calcul</strong>, avant la multiplication, " +
              "et sur sa propre ligne : $2\\,500$ W $= 2{,}5$ kW. La formule s'applique ensuite " +
              "sans piège. Convertir après coup est possible mais bien plus fragile, parce qu'il " +
              "faut alors se souvenir de le faire.<br/><br/>" +
              "Faire écrire les unités <strong>dans</strong> le calcul, jamais seulement au " +
              "résultat : « $2{,}5$ kW $\\times 4{,}5$ h $= 11{,}25$ kWh ». L'unité du produit se " +
              "lit alors directement, et l'élève qui a gardé des watts obtient des Wh, ce qui lui " +
              "montre son oubli sans qu'on ait à le corriger.<br/><br/>" +
              "Ajouter un repère de vraisemblance domestique, qui tranche immédiatement : un " +
              "foyer français consomme de l'ordre de $10$ kWh par jour. Annoncer $11\\,250$ kWh " +
              "pour un four utilisé une après-midi, c'est annoncer trois ans de consommation d'un " +
              "logement entier.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-16,
         graine 20260816 + rang 4) : l'exercice 1 est « sur l'étiquette d'un
         four électrique, on lit P = 2500 W ; fonctionne pendant t = 4,5 h ;
         calcule l'énergie en kWh » — réponse 11,25 kWh. Le tirage est le pire
         cas possible pour cette erreur, et donc le meilleur pour la remédier :
         la puissance est donnée en W (pas en kW) et la réponse est demandée en
         kWh, si bien que l'élève DOIT convertir. Un facteur mille d'écart est
         immédiatement visible au contrôle de vraisemblance. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Confondre puissance et énergie",
      eleve: "« Ce four consomme $2\\,500$ kWh » (il donne la puissance pour une énergie), ou " +
             "« mon radiateur a consommé $1\\,200$ W hier soir ». Les deux grandeurs et leurs " +
             "unités sont employées l'une pour l'autre.",
      cause: "Le langage courant les confond en permanence — on parle d'un appareil " +
             "« puissant » comme d'un appareil « qui consomme » — et les deux grandeurs se " +
             "calculent avec la même relation. Ce qui manque, c'est la <strong>durée</strong> : " +
             "une puissance est instantanée, une énergie s'accumule.",
      remede: "Séparer les deux par le temps, en une phrase que l'élève doit pouvoir redire : la " +
              "puissance dit <strong>à quelle vitesse</strong> on consomme, l'énergie dit " +
              "<strong>combien</strong> on a consommé en tout. La puissance est un débit, " +
              "l'énergie un total.<br/><br/>" +
              "L'analogie du robinet est exacte et vaut d'être filée : la puissance est le débit " +
              "en litres par minute, l'énergie est le volume du seau rempli. Deux robinets de " +
              "même débit remplissent des seaux différents s'ils coulent des durées " +
              "différentes — et c'est bien le volume, non le débit, que l'on paie.<br/><br/>" +
              "Ancrer sur ce que les élèves connaissent : l'étiquette d'un appareil porte une " +
              "<strong>puissance</strong> en W, la facture porte une <strong>énergie</strong> en " +
              "kWh. Une ampoule de $60$ W laissée allumée cent heures consomme $6$ kWh ; sa " +
              "puissance n'a pas changé pendant ce temps. C'est la distinction la plus utile du " +
              "chapitre hors de l'école.",
      /* Vérifié contre le tirage réel (2026-09-16) : l'exercice 2 est « un
         aspirateur a une puissance nominale P = 458 W et se branche sous
         U = 230 V ; calcule l'intensité nominale I ». L'exercice manipule la
         PUISSANCE seule, sans aucune durée — c'est le seul type d'exercice du
         chapitre où le temps n'intervient pas, et c'est précisément ce qui en
         fait la bonne remédiation : l'élève constate qu'on peut parler de
         puissance sans parler de durée, donc que les deux notions sont
         distinctes. Il alterne avec l'exercice 1, qui est le type « énergie ».
         Le va-et-vient entre les deux types est l'entraînement. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Croire que le kilowattheure est une unité de temps",
      eleve: "« Le kWh, c'est des kilowatts par heure » — et l'élève divise la puissance par la " +
             "durée au lieu de la multiplier.",
      cause: "La formulation orale « kilowattheure » est entendue comme « kilowatts " +
             "<strong>par</strong> heure », par analogie avec les km/h qui sont familiers. Or " +
             "c'est un <strong>produit</strong>, pas un quotient : kilowatt " +
             "<strong>fois</strong> heure. L'analogie avec les km/h, qui aide partout ailleurs, " +
             "induit ici exactement l'erreur inverse.",
      remede: "Corriger la <strong>lecture orale</strong>, car c'est elle qui porte l'erreur : on " +
              "dit « kilowatt-heure », avec un trait d'union, jamais « kilowatts par heure ». Le " +
              "nom de l'unité est la formule : kW $\\times$ h. Faire prononcer correctement " +
              "plusieurs fois vaut mieux qu'une explication.<br/><br/>" +
              "Opposer explicitement les deux structures d'unité, puisque c'est là qu'est la " +
              "confusion : les km/h sont un <strong>quotient</strong> (une distance divisée par " +
              "une durée), le kWh est un <strong>produit</strong>. La barre de division, présente " +
              "dans l'un et absente dans l'autre, est le seul indice — et c'est pour cela qu'il " +
              "faut la regarder.<br/><br/>" +
              "Utiliser la définition D3 du cours, qui est opérationnelle : $1$ kWh est l'énergie " +
              "d'un appareil de $1$ kW qui fonctionne pendant $1$ heure. Faire calculer alors " +
              "l'énergie d'un appareil de $2$ kW pendant $3$ h : si c'était un quotient, on " +
              "trouverait moins d'énergie en le faisant fonctionner plus longtemps, ce qui est " +
              "absurde. L'absurdité de l'hypothèse est le meilleur argument.",
      /* Volontairement SANS renvoi. Un renvoi faux est pire qu'un renvoi
         absent : les trente-trois exercices tirés se répartissent en deux
         moules (énergie en kWh, intensité à partir de P et U) et ne demandent
         jamais d'INTERPRÉTER l'unité — ils l'utilisent. Le quiz 2 traite bien
         le kWh, mais sous l'angle du choix d'unité pratique, pas de sa
         structure de produit. L'erreur se remédie sur la lecture orale du nom
         de l'unité, en classe, et le remède le dit. */
      exercice: null
    },
    {
      titre: "Ne pas juger l'ordre de grandeur d'une consommation",
      eleve: "L'élève annonce une consommation de $0{,}003$ kWh pour un radiateur allumé six " +
             "heures, ou de $500$ kWh pour un four utilisé une heure, sans réagir.",
      cause: "Échec de <strong>valider</strong>. Le kilowattheure est une unité dont l'élève de " +
             "troisième n'a aucune intuition chiffrée — contrairement au mètre ou au kilogramme, " +
             "il ne l'a jamais manipulée hors de l'école. Un résultat en kWh est donc un nombre " +
             "sans repère, que rien ne permet de juger.",
      remede: "Donner deux ou trois <strong>repères domestiques</strong> à afficher, et s'y " +
              "référer à chaque exercice : un foyer consomme environ $10$ kWh par jour ; une " +
              "ampoule LED de $10$ W allumée une soirée, à peine $0{,}05$ kWh ; un four à " +
              "$2\\,500$ W pendant une heure, $2{,}5$ kWh. Trois repères suffisent à juger " +
              "n'importe quel résultat du chapitre.<br/><br/>" +
              "Faire systématiquement <strong>convertir en euros</strong>, ce qui est la " +
              "vérification la plus parlante et la plus formatrice : à environ $0{,}20$ €/kWh, " +
              "$11{,}25$ kWh font un peu plus de $2$ €. Un élève qui annonce $500$ kWh annonce " +
              "$100$ € pour une heure de four, et il n'a pas besoin qu'on lui dise que c'est " +
              "faux.<br/><br/>" +
              "Prolonger vers ce qui rend le chapitre utile hors du cours : comparer le coût " +
              "annuel de plusieurs appareils, ou chercher lequel pèse le plus dans une facture. " +
              "C'est le seul chapitre de l'année où la physique donne une prise directe sur une " +
              "dépense du foyer, et l'ordre de grandeur y est l'outil, pas une consigne.",
      /* Volontairement SANS renvoi, et pour la même raison que dans la fiche
         de l'énergie mécanique : l'erreur porte sur le REGARD posé sur un
         résultat, pas sur un type de tâche. Aucun des trente-trois exercices
         tirés ne DEMANDE de juger une vraisemblance ni de convertir en euros —
         seule la question 5 de l'évaluation le fait, et une remédiation ne
         renvoie jamais vers l'évaluation notée. La remédiation s'ajoute à
         l'oral sur n'importe quel exercice, et le remède le dit. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel PHYSIQUE par question, dans l'ordre.

     Q1 — $P = 1\,500$ W pendant $t = 2$ h, énergie en kWh. Il faut convertir
          les watts en kilowatts avant d'appliquer la formule, ce qui est
          l'erreur 1 de cette fiche : « analyser ».
     Q2 — l'énergie s'écrit $E = P \times t$ ? Choix parmi des écritures dont
          deux sont fausses : restitution de la relation du cours, donc
          « s'approprier ».
     Q3 — $P = 1\,150$ W sous $U = 230$ V, calculer $I$. La relation
          $P = U \times I$ doit être réécrite dans l'autre sens :
          « analyser ».
     Q4 — choisir le protocole permettant de vérifier la puissance inscrite
          sur l'étiquette d'un radiateur. RÉÉCRITE le 2026-09-16 : elle
          demandait d'identifier l'énergie à l'aire sous la courbe de
          puissance, ce que pose déjà le quiz 3 du chapitre. Elle porte
          maintenant sur un geste de mesure, que le chapitre n'évaluait pas
          du tout : « réaliser ».
     Q5 — $10$ kWh à $0{,}18$ €/kWh : le coût. Application directe d'un prix
          unitaire, et seule question de l'ouvrage à sortir de la physique
          pure : « s'approprier ».

     « Communiquer » n'est pas mobilisé : aucune question ne demande de
     produire une explication rédigée. « Réaliser » l'est depuis la réécriture
     de Q4, sous sa forme la moins coûteuse — choisir un protocole sur le
     papier. La mesure réelle, au wattmètre ou à l'ampèremètre, reste à faire
     en classe : c'est la manipulation la plus simple et la plus frappante du
     chapitre, et l'étiquette d'un appareil apporté de la maison suffit à la
     lancer. */
  competences: {
    evaluation: ["analyser", "s'approprier", "analyser", "réaliser", "s'approprier"]
  }
};
