/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-asservissement.prof.js
   Fiche professeur du chapitre « Asservissement et régulation (introduction) »
   (première SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE du dossier `si-1re` (2026-09-17) : les conventions des sept
   autres fiches du dossier y sont calées.

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. Voir l'en-tête de
   `si-2nde-analyse-fonctionnelle.prof.js` pour l'historique de son ajout et
   pour la raison pour laquelle `expérimenter` et `concevoir` resteront vides
   dans tout l'ouvrage.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 9.

   27 énoncés tirés, dont 12 numérotés et 15 en banque supplémentaire, sur
   TROIS MOULES distincts — c'est l'un des chapitres les mieux dotés de
   l'ouvrage, et cela change tout par rapport à la Terminale. Les trois
   familles, relevées énoncé par énoncé sur les quatorze premiers tirages :
     - écart $\varepsilon = C - M$ (direct)      : exercices 2, 4, 8, 11 ;
     - commande $U = K_p \times \varepsilon$      : exercices 1, 6, 9, 12 ;
     - mesure $M = C - \varepsilon$ (inversion)   : exercices 3, 5, 7, 10.
   Trois contextes tournent sur les trois moules (four industriel, régulateur
   de vitesse, système de remplissage).

   UN FAIT MESURÉ QUI CONTRAINT LA FICHE : dans les 27 tirages, l'écart
   $\varepsilon$ est TOUJOURS POSITIF (la mesure est toujours sous la
   consigne). Or la question 4 de l'évaluation porte sur $\varepsilon < 0$.
   L'erreur « signe de l'écart » ne peut donc PAS renvoyer à un exercice : il
   n'en existe aucun où le cas se présente. Elle renvoie au quiz 1, bâti
   exactement sur $C = 50$, $M = 53$, $\varepsilon = -3$. C'est le genre de
   vérification qui justifie la règle du projet : un renvoi plausible aurait
   été faux.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-asservissement"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8) — voir la note de `validerPrerequis` dans prof.js.

     ch. 1 (Modélisation des systèmes, SysML) : RETENU. Tout ce chapitre se
     lit sur un SCHÉMA-BLOC — consigne, comparateur, correcteur, système,
     capteur, et la flèche de retour qui ferme la boucle. La question 5 de
     l'évaluation demande littéralement le nom d'un bloc (« l'élément qui
     calcule $\varepsilon = C - M$ »), et la question 1 la différence entre
     boucle ouverte et boucle fermée, qui est une différence de TOPOLOGIE du
     schéma. Un élève qui ne lit pas un diagramme de blocs et de flux ne voit
     pas la boucle, et sans la boucle il n'y a pas d'asservissement à
     comprendre. C'est le prérequis structurant, et il est en amont.

     Candidats examinés et ÉCARTÉS :
     - ch. 2 (Cinématique du solide) : fournit les grandeurs qui servent de
       consigne dans la moitié des énoncés (vitesse en tr/min, en km/h). Mais
       ce chapitre-ci n'en demande AUCUN calcul cinématique : la vitesse y est
       une valeur donnée qu'on soustrait, rien de plus. Lien thématique, pas
       opératoire. Écarté — c'est toutefois le candidat le plus défendable, et
       un enseignant gagnera à réutiliser un système déjà étudié en
       cinématique comme support.
     - ch. 4 (Circuits logiques et algèbre de Boole) : tentant parce que la
       régulation « tout ou rien » (thermostat) est le premier exemple
       intuitif d'asservissement. Mais le chapitre ne traite QUE la correction
       proportionnelle, c'est-à-dire continue ; l'algèbre de Boole n'y sert
       nulle part. Écarté.
     - ch. 3 (Statique, PFS) et ch. 7 (RDM) : aucun lien. Écartés.
     - ch. 8 (POO) : aucun lien. Le correcteur n'est pas programmé ici. Écarté.

     NOTE SUR CE QUI MANQUE, et qui est dit dans la `note` imprimée : le vrai
     prérequis MATHÉMATIQUE de ce chapitre est la proportionnalité
     ($U = K_p \times \varepsilon$) et le calcul sur les relatifs (un écart
     négatif). Aucun des deux ne peut être déclaré ici : `prerequis` ne vise
     qu'un chapitre du même dossier, et ces notions relèvent du programme de
     mathématiques, pas de la SI. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 5, celui du livre.

     Le rang 5 place le chapitre après SysML (rang 1), ce qu'exige son
     prérequis, et après la cinématique (rang 2), ce qui est un confort réel :
     les consignes de vitesse y prennent un sens physique. Il le place aussi
     AVANT l'énergie-rendement (rang 6) et la RDM (rang 7), qui n'en dépendent
     pas, et surtout avant le chapitre `si-tle-asservis-pid` de Terminale, qui
     en dépend directement — voir la `note`.

     Le livre le range en chapitre 5 de son niveau : les deux ordres
     coïncident, pas de triangle d'alerte dans la colonne « Chap. ».

     `rangConseille` est tout ou rien par dossier : les huit fiches de `si-1re`
     le portent (rangs 1 à 8, permutation complète). */
  rangConseille: 5,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 5 de première) et le
     programme de spécialité SI (2019), partie « Analyser et modéliser le
     comportement des systèmes asservis ».

     Bornés à ce que le chapitre traite VRAIMENT : la boucle fermée, l'écart,
     et la correction proportionnelle seule. Rien sur les correcteurs PI/PID,
     ni sur la stabilité, ni sur la réponse temporelle — tout cela est en
     Terminale (`si-tle-asservis-pid`), et le cours de ce chapitre l'annonce
     lui-même dans son encadré « piège ». Ne pas extrapoler vers la Terminale
     serait ici une faute : le professeur citerait des attendus que ses élèves
     n'ont pas encore à atteindre. */
  attendus: [
    "Distinguer un système en boucle ouverte d'un système en boucle fermée, et identifier les blocs d'une chaîne asservie",
    "Déterminer l'écart entre consigne et mesure, et interpréter son signe en termes de comportement du système",
    "Déterminer la commande délivrée par un correcteur proportionnel et analyser l'effet du gain sur le comportement"
  ],

  note: "La boucle fermée et son intérêt face à la boucle ouverte, les blocs de la chaîne asservie, " +
        "l'écart $\\varepsilon = C - M$ et la correction proportionnelle $U = K_p \\times " +
        "\\varepsilon$ : le chapitre installe le vocabulaire et le premier calcul de " +
        "l'asservissement.<br/><br/>" +
        "<strong>Ce chapitre est le socle d'un chapitre de Terminale.</strong> " +
        "<em>Systèmes asservis (schéma-blocs, correcteur P/PI/PID)</em> le prolonge directement : " +
        "erreur statique, correcteur intégral, PID. La colonne « S'appuie sur » de ce chapitre-là " +
        "affichera un tiret, parce qu'un prérequis ne peut désigner qu'un chapitre du " +
        "<strong>même niveau</strong> — la dépendance est réelle mais n'est pas déclarable dans " +
        "les données. Si vous enseignez les deux années, traitez celui-ci sérieusement : c'est ici " +
        "que se joue la compréhension de la boucle.<br/><br/>" +
        "<strong>Deux prérequis hors SI, à vérifier avant de commencer.</strong> Le calcul " +
        "$U = K_p \\times \\varepsilon$ est une proportionnalité, et l'interprétation d'un écart " +
        "négatif demande d'être à l'aise avec les nombres relatifs. Ces deux acquis relèvent des " +
        "mathématiques et ne figurent pas dans la colonne des prérequis, qui ne peut désigner que " +
        "des chapitres de SI.<br/><br/>" +
        "<strong>Un angle mort du tirage, à combler à l'oral.</strong> Les 27 énoncés de ce " +
        "chapitre présentent tous une mesure <strong>inférieure</strong> à la consigne : " +
        "l'écart y est toujours positif. Le cas $\\varepsilon < 0$ — le four qui a dépassé sa " +
        "température — n'apparaît que dans le quiz et dans l'évaluation. Posez-le explicitement en " +
        "classe, sinon vos élèves le rencontreront pour la première fois en situation notée.",

  erreurs: [
    {
      titre: "Inverser les termes de l'écart",
      eleve: "La consigne est $273$ °C et la mesure $266$ °C, donc $\\varepsilon = 266 - 273 = -7$ °C.",
      cause: "L'élève soustrait dans l'ordre où les valeurs apparaissent dans l'énoncé, ou bien " +
             "calcule « la différence » sans se soucier du sens. La convention $\\varepsilon = C - M$ " +
             "n'est pas arbitraire : elle fait qu'un écart positif signifie « il en faut plus », ce " +
             "qui est la lecture utile pour le correcteur.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 9, deuxième
         tirage) : four industriel, $C = 273$ °C, $M = 266$ °C,
         $\varepsilon = 7$ °C. La correction du tirage détaille les trois
         étapes, dont « On identifie les grandeurs », qui est exactement le
         geste manquant.
         COMPARÉ AUX AUTRES CANDIDATS du même moule : l'exercice 4 (354 et
         352, écart 2) et l'exercice 11 (114 et 113, écart 1) donnent des
         écarts trop petits — un élève qui inverse obtient $-2$ ou $-1$ et
         peut croire à une étourderie de signe. L'exercice 8 (78 et 71) et
         l'exercice 2 (273 et 266) donnent tous deux 7 ; l'exercice 2 est
         retenu parce qu'il est le premier du moule dans le livre et que ses
         valeurs à trois chiffres rendent l'inversion plus visible. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites poser les deux grandeurs AVANT tout calcul, l'une sous l'autre et étiquetées, " +
              "comme le fait la correction de l'exercice 2 : $C = 273$ °C, puis $M = 266$ °C. " +
              "L'ordre de la soustraction suit alors l'ordre de la formule, pas celui de " +
              "l'énoncé.<br/><br/>" +
              "Le moyen de retenir le sens, par le système réel : <strong>l'écart, c'est ce qui " +
              "manque pour atteindre la consigne</strong>. Le four est à $266$ °C et on en veut " +
              "$273$ : il manque $7$ °C, donc $\\varepsilon = +7$. Un élève qui se demande « il en " +
              "manque ou il y en a trop ? » retrouve le signe sans réciter la formule."
    },
    {
      titre: "Ne pas savoir lire le signe de l'écart",
      eleve: "L'écart vaut $-3$, donc la sortie est trop faible et le correcteur doit augmenter la " +
             "commande.",
      cause: "L'élève associe « négatif » à « insuffisant », par analogie avec un solde bancaire. " +
             "Or avec $\\varepsilon = C - M$, un écart négatif veut dire que la mesure DÉPASSE la " +
             "consigne : le four est trop chaud, la voiture va trop vite. Le correcteur doit alors " +
             "réduire, pas augmenter.",
      /* exercice: null aurait été FAUX ici, mais un renvoi d'exercice aussi :
         MESURE FAITE, les 27 tirages ont tous un écart POSITIF (mesure sous la
         consigne). Aucun exercice du livre ne présente le cas $\varepsilon < 0$
         — un renvoi vers l'un d'eux aurait été plausible et faux.
         Le quiz 1 est bâti exactement sur ce cas : $C = 50$, $M = 53$,
         $\varepsilon = -3$, avec pour bonne réponse « la sortie dépasse la
         consigne, le correcteur doit diminuer la commande ». C'est le seul
         support du livre qui traite l'erreur, et il la traite de front. */
      exercice: { type: "quiz", n: 1 },
      remede: "Le quiz 1 est fait pour cette erreur : $C = 50$, $M = 53$, donc $\\varepsilon = -3$, " +
              "et la bonne réponse est que le correcteur doit <strong>diminuer</strong> la " +
              "commande.<br/><br/>" +
              "Attention, les exercices du chapitre ne vous aideront pas ici : les 27 énoncés " +
              "présentent tous une mesure inférieure à la consigne, donc un écart positif. Le cas " +
              "négatif est à poser vous-même.<br/><br/>" +
              "Le support qui marche, parce qu'il est vécu : <strong>le régulateur de vitesse</strong>. " +
              "Consigne $110$ km/h, la voiture descend une côte et le compteur affiche $117$ : " +
              "$\\varepsilon = -7$. Tout le monde sait ce que fait la voiture — elle lève le pied. " +
              "Écart négatif, on réduit. Faites ensuite le cas de la montée ($103$ km/h, " +
              "$\\varepsilon = +7$, elle accélère) et la règle est installée pour l'année."
    },
    {
      titre: "Appliquer la formule du correcteur sans inverser quand on cherche la mesure",
      eleve: "La consigne est $84$ km/h et l'écart $13$ km/h, donc $M = 84 + 13 = 97$ km/h.",
      cause: "Confusion entre les deux relations du chapitre. L'élève a retenu qu'il faut combiner " +
             "consigne et écart, mais reconstitue le sens au hasard. Additionner donne d'ailleurs " +
             "une mesure supérieure à la consigne, ce qui contredit un écart positif : l'erreur est " +
             "détectable par l'élève lui-même, à condition qu'il y pense.",
      /* RENVOI VÉRIFIÉ. Exercice 3 du livre (graine 20260816 + 9, troisième
         tirage) : régulateur de vitesse, $C = 84$ km/h, $\varepsilon = 13$
         km/h, donc $M = 84 - 13 = 71$ km/h. C'est le PREMIER tirage du moule
         d'inversion, et sa correction montre l'isolement de $M$ explicitement
         (« On isole $M$ dans la formule de l'écart »), ce qui est précisément
         le geste que l'élève escamote.
         COMPARÉ AUX AUTRES CANDIDATS du même moule (exercices 5, 7, 10) :
         tous trois conviendraient, mais l'exercice 3 est le seul dont les
         valeurs rendent l'erreur ARITHMÉTIQUEMENT ABSURDE de façon lisible —
         $97$ km/h pour une consigne de $84$ km/h avec un écart annoncé
         positif. L'exercice 5 (68 et 15) donnerait 83, moins parlant. */
      exercice: { type: "exercice", n: 3 },
      remede: "Faites traiter l'exercice 3 en écrivant d'abord la formule COMPLÈTE, puis en isolant : " +
              "$\\varepsilon = C - M$ donne $M = C - \\varepsilon$. La correction du livre détaille " +
              "cette étape, qui est celle que l'élève saute.<br/><br/>" +
              "Puis installez le réflexe de vérification, qui vaut pour tout le chapitre : " +
              "<strong>un écart positif signifie que la mesure est SOUS la consigne</strong>. " +
              "L'élève qui trouve $97$ km/h pour une consigne de $84$ km/h avec un écart positif " +
              "tient une réponse impossible, et peut le voir seul. Demandez systématiquement " +
              "« ta mesure est au-dessus ou en dessous de la consigne, et est-ce cohérent avec le " +
              "signe de l'écart ? »"
    },
    {
      titre: "Croire qu'un correcteur proportionnel suffit à annuler l'écart",
      eleve: "Puisque le correcteur corrige, l'écart finit par valoir $0$ : il suffit d'attendre.",
      cause: "L'élève raisonne juste sur l'intention du système, mais pas sur son mécanisme : si " +
             "$\\varepsilon$ devenait nul, la commande $U = K_p \\times \\varepsilon$ deviendrait " +
             "nulle aussi, et le four cesserait de chauffer. C'est précisément parce qu'il reste un " +
             "écart que la commande existe. Un correcteur proportionnel pur laisse donc toujours une " +
             "erreur statique — ce que le cours annonce dans son encadré « piège ».",
      /* exercice: null — ASSUMÉ ET MOTIVÉ.
         Les trois moules du chapitre calculent une valeur ponctuelle
         ($\varepsilon$, $U$ ou $M$) à un instant donné. AUCUN ne fait varier
         le temps ni n'observe un régime permanent : la notion d'erreur
         statique est structurellement hors de portée du tirage.
         Le quiz 2 approche le sujet (effet du gain : doubler $K_p$ double la
         commande) mais conclut sur la proportionnalité, pas sur l'erreur
         résiduelle — y renvoyer laisserait croire que la question est traitée.
         Le sujet est repris au chapitre `si-tle-asservis-pid` de Terminale,
         dont la question 3 d'évaluation porte exactement sur « quel correcteur
         annule l'erreur statique ». Donc `null`, franchement, et le remède
         renvoie à l'encadré « piège » du cours, qui est le bon support. */
      exercice: null,
      remede: "Aucun exercice du chapitre ne peut montrer cela : les trois familles d'énoncés " +
              "calculent une valeur à un instant donné, jamais l'évolution vers un régime " +
              "permanent. L'encadré <strong>« piège »</strong> du cours est le support à " +
              "utiliser.<br/><br/>" +
              "L'argument qui convainc, et il tient en une ligne : <strong>si l'écart devenait nul, " +
              "la commande deviendrait nulle</strong> — et le four s'arrêterait de chauffer. " +
              "C'est donc parce qu'il reste un petit écart que la chauffe continue. Un correcteur " +
              "proportionnel seul conserve toujours une <strong>erreur statique</strong>.<br/><br/>" +
              "Faites sentir le compromis en faisant varier $K_p$ à l'oral : augmenter le gain " +
              "réduit cette erreur (la commande reste forte pour un écart plus petit) mais rend le " +
              "système nerveux, puis oscillant. C'est exactement la porte d'entrée du chapitre de " +
              "Terminale sur le correcteur intégral, qui, lui, annule l'erreur statique."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé, pas supposé.

     Q1 (ce qui différencie boucle fermée et boucle ouverte) → analyser :
        identifier la structure d'une chaîne asservie, en l'occurrence la
        présence du capteur de retour.
     Q2 ($C = 100$, $M = 85$, calculer $\varepsilon$) → résoudre : application
        directe de la relation.
     Q3 ($K_p = 0{,}5$, $\varepsilon = 15$, calculer la commande) → résoudre :
        application directe, autre relation.
     Q4 (que signifie $\varepsilon < 0$) → analyser : interpréter un signe en
        termes de comportement du système réel. Ce n'est pas un calcul — la
        valeur est donnée — mais la caractérisation d'un état.
     Q5 (nom de l'élément qui calcule $C - M$ : le comparateur) → communiquer :
        employer le vocabulaire normalisé du schéma-bloc.
     Aucune question n'est `modéliser` : les cinq portent sur une chaîne déjà
     modélisée, jamais sur sa construction. */
  competences: {
    evaluation: ['analyser', 'résoudre', 'résoudre', 'analyser', 'communiquer']
  }
};
