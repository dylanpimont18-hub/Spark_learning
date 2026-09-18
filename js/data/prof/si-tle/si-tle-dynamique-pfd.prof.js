/* =========================================================
   Spark Learning – js/data/prof/si-tle/si-tle-dynamique-pfd.prof.js
   Fiche professeur du chapitre « Dynamique du solide (PFD) » (terminale SI),
   pour l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-tle-grafcet.prof.js` (voir son en-tête).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 13 (chapitre 14 de l'ouvrage `lycee-si`).

   SIX énoncés tirés seulement — LE CHAPITRE LE PLUS PAUVRE DE TOUT L'OUVRAGE.
   Trois conséquences dures, toutes vérifiées contre `validerProf` :
     - le renvoi maximal en `type:"exercice"` est 6, et non 12 ;
     - il n'y a AUCUNE banque supplémentaire ($6 - 12 < 0$) : tout
       `type:"supplement"` serait refusé à la compilation ;
     - les six énoncés ne couvrent que DEUX MOULES, relevés un par un :
         * couple moteur sur un cylindre plein, $\alpha = M / (\frac{1}{2}mR^2)$
           → exercices 1, 3, 5 (impairs) ;
         * chariot tiré avec frottements, $a = (F - f)/m$
           → exercices 2, 4, 6 (pairs).

   CE QUE LES SIX ÉNONCÉS NE SAVENT PAS FAIRE, et c'est décisif pour préparer
   la séance. Aucun des six :
     - ne demande une force ou un frottement INCONNU à partir de
       l'accélération (l'inconnue est toujours $a$ ou $\alpha$, jamais $f$) —
       alors que c'est la question 2 de l'évaluation notée ;
     - ne fait intervenir la formule du moment d'inertie pour une autre
       géométrie que le cylindre (la sphère $\frac{2}{5}mR^2$, l'anneau $mR^2$)
       — alors que la question 3 de l'évaluation est exactement là-dessus ;
     - ne chaîne le PFD avec une équation de cinématique ($v^2 = 2ad$) — alors
       que c'est la question 5, la plus longue du devoir.
   Le QUIZ comble deux de ces trois trous : sa question 3 demande justement le
   frottement inconnu, et sa question 2 porte sur le moment d'inertie de la
   sphère. C'est la ressource principale de cette fiche, et les deux renvois
   vers lui sont vérifiés sur son contenu réel (voir les commentaires).

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-tle-dynamique-pfd"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-tle` (7 chapitres, donc de
     1 à 7) — voir la note de `validerPrerequis` dans prof.js.

     AUCUN prérequis DANS CE DOSSIER, et c'est une conséquence mécanique du
     rang : ce chapitre est le PREMIER de la progression conseillée (rang 1),
     et un prérequis doit avoir un rang strictement inférieur. Il n'y a donc
     rien à déclarer, par construction.

     Candidats examinés et ÉCARTÉS, pour mémoire :
     - ch. 2 (Énergie cinétique) : le lien est réel mais il joue dans l'AUTRE
       sens — le théorème de l'énergie cinétique est une conséquence intégrée
       du PFD, et le chapitre 2 réutilise le moment d'inertie installé ici. Le
       déclarer créerait un cycle que `validerPrerequis` refuse, à juste titre.
     - ch. 5 (Transmission de puissance) : partage le couple et le moment,
       mais raisonne en régime établi (rapports de vitesses, rendement) sans
       jamais dériver. Aucune dépendance. Écarté.
     - ch. 3, 4, 6, 7 : automatique continue, séquentiel et information. Aucun
       lien. Écartés.

     LE VRAI PRÉREQUIS EST EN PREMIÈRE, et c'est dit dans la `note` imprimée :
     ce chapitre suppose la statique du solide (`si-1re-statique-pfs`), c'est-à
     -dire le PFS, le bilan des forces et le moment d'une force. Le PFD n'est
     rien d'autre que le PFS dont le second membre n'est plus nul.
     `prerequis` ne pouvant désigner qu'un chapitre du même niveau, cette
     dépendance ne peut pas être déclarée en donnée : la colonne « S'appuie
     sur » affichera un tiret. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 1 dans le dossier `si-tle`, celui du
     livre (chapitre 14 de l'ouvrage, 1er du dossier).

     Le rang 1 n'est pas un rang par défaut, c'est une contrainte. Le PFD
     installe deux objets que trois autres chapitres du niveau réutilisent sans
     les redéfinir :
     - le MOMENT D'INERTIE $J$, repris tel quel par le chapitre 2 (énergie
       cinétique de rotation $\frac{1}{2}J\omega^2$) ;
     - le COUPLE et la relation $\sum M = J\alpha$, que le chapitre 5
       (transmission) prolonge en régime établi.
     Le mettre plus tard obligerait à définir $J$ deux fois.

     Contrepartie à connaître : c'est aussi le chapitre le plus exigeant en
     OUTILS MATHÉMATIQUES du niveau (dérivées, vecteurs, moments), et le placer
     en ouverture d'année suppose que ces outils soient disponibles. La `note`
     le dit explicitement, parce que la décision appartient à l'enseignant qui
     connaît son groupe : si les dérivées ne sont pas installées en maths,
     l'ouverture par le chapitre 4 (GRAFCET, rang 4, sans aucun prérequis
     mathématique) est une permutation légitime.

     `rangConseille` est tout ou rien par dossier : les sept fiches de `si-tle`
     le portent (rangs 1 à 7, permutation complète). */
  rangConseille: 1,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 1 de terminale, qui
     ne donne qu'un titre — vérifié) et le programme de spécialité SI (2019),
     compétence « Modéliser et résoudre » du domaine « Comportement mécanique
     des systèmes ».

     Bornés à ce que le chapitre traite RÉELLEMENT : le PFD en translation, le
     PFD en rotation autour d'un axe fixe, le moment d'inertie et la condition
     de référentiel galiléen. Rien sur le torseur dynamique, rien sur le
     théorème du moment cinétique en axe mobile, rien sur les liaisons — que le
     corpus n'aborde pas. */
  attendus: [
    "Établir le bilan des forces extérieures appliquées à un solide et projeter le PFD sur un axe pour déterminer une accélération ou une force inconnue",
    "Appliquer le PFD en rotation autour d'un axe fixe en identifiant le moment d'inertie correspondant à la géométrie du solide",
    "Vérifier la validité du modèle en contrôlant le caractère galiléen du référentiel et l'homogénéité des unités (N, kg, m/s², kg·m², rad/s²)"
  ],

  note: "Le principe fondamental de la dynamique en translation ($\\sum \\vec{F} = m\\vec{a}_G$) et " +
        "en rotation ($\\sum M_\\Delta = J_\\Delta \\alpha$), le moment d'inertie, la condition de " +
        "référentiel galiléen : le chapitre donne l'outil qui relie les forces au " +
        "<strong>mouvement</strong>, là où la statique de première ne parlait que " +
        "d'équilibre.<br/><br/>" +
        "<strong>Le prérequis principal de ce chapitre est en première, et la colonne « S'appuie " +
        "sur » affiche un tiret.</strong> Le PFD suppose la statique du solide " +
        "(<em>Statique du solide et PFS</em>, première) : le bilan des forces, la projection sur un " +
        "axe, et le <strong>moment d'une force</strong>. Dit autrement, le PFD est le PFS dont le " +
        "second membre n'est plus nul — $\\sum \\vec{F} = \\vec{0}$ devient " +
        "$\\sum \\vec{F} = m\\vec{a}_G$. Un prérequis ne pouvant désigner qu'un chapitre du même " +
        "niveau, cette dépendance ne peut pas figurer dans le tableau ; vérifiez-la vous-même avant " +
        "de commencer, en particulier le tracé du bilan des forces, dont tout le reste " +
        "dépend.<br/><br/>" +
        "<strong>Les prérequis mathématiques sont lourds, et ils décident du moment où ce chapitre " +
        "est abordable.</strong> Il en faut trois : les <strong>dérivées</strong> (l'accélération " +
        "est $\\dot{v}$, l'accélération angulaire est $\\dot{\\omega}$ — sans la notion de dérivée, " +
        "$\\alpha = \\mathrm{d}\\omega/\\mathrm{d}t$ n'est qu'un symbole) ; les " +
        "<strong>vecteurs</strong> et leur projection sur un axe ; les <strong>moments</strong>, " +
        "c'est-à-dire le produit d'une force par un bras de levier. Ce chapitre est placé au " +
        "rang $1$ parce qu'il installe le moment d'inertie que trois autres chapitres réutilisent " +
        "— mais si les dérivées ne sont pas encore vues en mathématiques, " +
        "<strong>commencez par le chapitre 4 (GRAFCET), qui n'exige aucun outil " +
        "mathématique</strong>, et revenez ici ensuite. Le tableau de progression est un conseil, " +
        "pas une contrainte.<br/><br/>" +
        "<strong>Ce que les exercices du livre font, et ce qu'ils ne font pas — à lire avant de " +
        "préparer votre séance.</strong> Le tirage de ce chapitre ne comporte que " +
        "<strong>6 énoncés</strong>, le plus petit nombre de tout l'ouvrage, et ils se répartissent " +
        "en <strong>deux moules seulement</strong> : trois cylindres pleins sous couple moteur " +
        "(exercices 1, 3, 5) et trois chariots tirés avec frottements (exercices 2, 4, 6). Dans les " +
        "six cas, l'inconnue est <strong>l'accélération</strong>. Aucun exercice ne demande de " +
        "remonter à une force inconnue, aucun ne sort du cylindre plein pour le moment d'inertie, " +
        "aucun ne chaîne le PFD avec une équation de cinématique — alors que ce sont les " +
        "questions $2$, $3$ et $5$ du devoir noté, soit trois des cinq. Le quiz rattrape deux de " +
        "ces trois manques (frottement inconnu, moment d'inertie de la sphère) : c'est votre " +
        "ressource pour ces points. Pour le troisième — PFD puis $v^2 = 2ad$ — prévoyez un énoncé " +
        "à vous : deux lignes suffisent, mais le livre ne le fournit pas.",

  erreurs: [
    {
      titre: "Confondre la masse et le poids dans le bilan des forces",
      eleve: "Sur un chariot de $3$ kg tiré horizontalement, l'élève écrit $F - f = P \\, a$ avec " +
             "$P = mg = 29{,}4$ N, ou remplace $m$ par $30$ dans $\\sum F = ma$ « parce que le poids " +
             "vaut à peu près dix fois la masse ».",
      cause: "Dans la langue courante, « poids » et « masse » sont synonymes : on se pèse en " +
             "kilogrammes. En mécanique, ce sont deux grandeurs de natures différentes — la masse " +
             "est une quantité de matière en kg, le poids est une FORCE en newtons. Le PFD demande " +
             "la masse au second membre et le poids (quand il travaille) au premier : la même " +
             "lettre $m$ apparaît des deux côtés de l'énoncé avec deux rôles distincts, et c'est " +
             "cela qui embrouille. L'erreur est d'autant plus tenace qu'en SI les élèves manipulent " +
             "des documents constructeur où « poids : 3 kg » est écrit noir sur blanc.",
      /* RENVOI VÉRIFIÉ. Exercice 2 du livre (graine 20260816 + 13, deuxième
         tirage) : chariot de m = 3 kg, F = 53 N, f = 18 N, donc
         a = (53 - 18)/3 = 11,67 m/s².
         POURQUOI L'EXERCICE 2 ET NON 4 NI 6 : c'est le tirage du moule
         « chariot » dont la masse est la plus PETITE (3 kg contre 2 kg pour
         l'exercice 4 et 5 kg pour le 6) tout en donnant un résultat NON
         entier. Deux avantages concrets :
           - avec m = 3, l'élève qui divise par le poids (29,4 au lieu de 3)
             obtient 1,19 m/s² au lieu de 11,67 : un facteur 10 visible à
             l'oeil nu, donc discutable sans calcul ;
           - le résultat 11,67 m/s² n'est pas rond, ce qui interdit de
             « retrouver » la bonne réponse par hasard.
         L'exercice 4 (m = 2, a = 6 m/s² exactement) a été ÉCARTÉ pour la
         raison inverse : son résultat rond rend l'erreur moins parlante.
         Le moule « cylindre » (ex. 1, 3, 5) ne convient pas du tout ici : la
         masse y intervient dans J = ½mR², où l'erreur masse/poids donne un
         résultat divisé par 10 sans qu'on voie où. */
      exercice: { type: "exercice", n: 2 },
      remede: "Faites traiter l'exercice 2 ($m = 3$ kg, $F = 53$ N, $f = 18$ N) en exigeant " +
              "l'<strong>unité écrite à côté de chaque nombre</strong> avant tout calcul. " +
              "L'élève qui a divisé par le poids obtient $1{,}19$ m/s² au lieu de $11{,}67$ : un " +
              "facteur $10$, visible immédiatement, et c'est la meilleure entrée en " +
              "discussion.<br/><br/>" +
              "Le contrôle qui règle la question définitivement : <strong>une masse s'écrit en kg, " +
              "une force en N</strong>. Dans $\\sum F = ma$, le membre de gauche est en newtons, " +
              "donc le membre de droite aussi : $\\text{kg} \\times \\text{m/s}^2 = \\text{N}$. Si " +
              "on y met des newtons, on obtient des $\\text{N}\\cdot\\text{m/s}^2$, qui n'existent " +
              "pas.<br/><br/>" +
              "Le système réel qui emporte l'adhésion, et qui est du registre de vos élèves : " +
              "sur la <strong>plaque d'un vérin ou d'un moteur</strong>, la charge admissible est " +
              "donnée en kg alors que l'effort développé est en N — parce que le fabricant suppose " +
              "la gravité terrestre. Faites poser la question : <strong>et sur la Lune ?</strong> " +
              "Le chariot de $3$ kg a toujours $3$ kg, et il faut toujours $35$ N pour l'accélérer " +
              "à $11{,}67$ m/s² — mais son poids n'est plus le même. La masse résiste au " +
              "mouvement, le poids attire vers le bas : deux choses différentes."
    },
    {
      titre: "Oublier de retrancher les frottements, ou ne pas savoir remonter à une force inconnue",
      eleve: "Sur le chariot tiré par $F = 53$ N avec $f = 18$ N, l'élève écrit " +
             "$a = F/m = 53/3 = 17{,}7$ m/s². Ou bien, quand on lui donne l'accélération et qu'on " +
             "demande le frottement, il ne sait pas par quel bout prendre l'énoncé.",
      cause: "Deux faces d'une même chose : l'élève applique $\\sum F = ma$ en remplaçant " +
             "$\\sum F$ par la première force qu'il lit, au lieu de faire la SOMME ALGÉBRIQUE de " +
             "toutes les forces projetées. Le mot « somme » du premier membre est celui qu'on " +
             "saute, parce qu'il n'y a souvent qu'une force écrite dans les exemples les plus " +
             "simples. Et comme les six exercices du livre demandent tous $a$ (jamais $f$), " +
             "l'élève ne rencontre jamais l'écriture $f = F - ma$ : il n'a pas manqué de " +
             "travailler, il n'a simplement pas eu l'occasion.",
      /* RENVOI VÉRIFIÉ, et VOLONTAIREMENT VERS LE QUIZ plutôt que vers un
         exercice. Mesure faite : les six exercices demandent tous
         l'accélération, jamais une force. Renvoyer à l'exercice 4 ou 6
         travaillerait la première moitié de l'erreur (l'oubli du
         « - f ») mais pas la seconde (remonter à l'inconnue), qui est
         pourtant celle que la question 2 de l'évaluation notée interroge.
         Le quiz 3 fait EXACTEMENT les deux : « Un chariot de m = 20 kg
         accélère à 2 m/s² sous l'effet d'une force motrice F_m = 50 N et de
         frottements f. La force de frottement vaut : » — bonne réponse
         f = 10 N, avec une correction qui écrit la chaîne complète
         F_m - f = ma, donc f = F_m - ma = 50 - 40 = 10 N, et qui ajoute que
         « les frottements s'opposent au mouvement et sont bien positifs ».
         Renvoi retenu et vérifié sur le contenu réel du quiz. Le remède
         demande de l'enchaîner avec l'exercice 6, ce qui donne les deux sens
         de lecture de la même équation. */
      exercice: { type: "quiz", n: 3 },
      remede: "Le quiz 3 est exactement la tâche manquante : on donne $m = 20$ kg, $a = 2$ m/s², " +
              "$F_m = 50$ N, et on demande $f$. Sa correction écrit la chaîne complète — " +
              "$F_m - f = ma$, donc $f = F_m - ma = 50 - 40 = 10$ N — et signale que les " +
              "frottements trouvés sont bien <strong>positifs</strong>, ce qui est le contrôle de " +
              "vraisemblance à installer.<br/><br/>" +
              "Enchaînez immédiatement avec l'exercice 6 du livre ($m = 5$ kg, $F = 105$ N, " +
              "$f = 27$ N, $a = 15{,}6$ m/s²), qui est la <strong>même équation lue dans l'autre " +
              "sens</strong>. Faites écrire les deux au tableau l'une sous l'autre : c'est une " +
              "seule relation, $F - f = ma$, dont on isole tantôt $a$, tantôt $f$. L'élève qui voit " +
              "les deux ensemble n'apprend plus deux méthodes mais une.<br/><br/>" +
              "Le réflexe à imposer avant toute écriture : <strong>lister les forces, puis les " +
              "signer</strong>. Ce qui pousse est $+$, ce qui retient est $-$. Sur le " +
              "<strong>portail automatique</strong> de l'atelier, le moteur pousse et le frottement " +
              "des galets retient : si on oublie le second, on calcule l'accélération d'un portail " +
              "qui glisserait sur de la glace, et la mesure au banc ne le confirmera jamais. " +
              "<strong>Les frottements ne sont pas un détail de correction, ce sont eux qui font " +
              "l'écart entre le calcul et le réel.</strong>"
    },
    {
      titre: "Traiter le moment d'inertie comme si c'était la masse, ou utiliser la mauvaise formule de géométrie",
      eleve: "Sur le cylindre de $m = 9$ kg soumis à $M = 3{,}8$ N·m, l'élève écrit " +
             "$\\alpha = M/m = 3{,}8/9 = 0{,}42$ rad/s². Ou bien il pense à $J$ mais applique " +
             "$J = mR^2$, ou $J = \\frac{2}{5}mR^2$, sans vérifier de quelle géométrie il s'agit.",
      cause: "L'analogie translation/rotation est un excellent outil — $\\sum F = ma$ devient " +
             "$\\sum M = J\\alpha$ — mais elle se paie : l'élève transpose la STRUCTURE de " +
             "l'équation et croit avoir transposé aussi les grandeurs. Or $J$ n'est pas la masse, " +
             "c'est la masse ET sa répartition autour de l'axe : le même solide a plusieurs moments " +
             "d'inertie selon l'axe qu'on choisit. Quant au choix de la formule, les trois " +
             "expressions du cours ($\\frac{1}{2}mR^2$, $\\frac{2}{5}mR^2$, $mR^2$) ne se " +
             "distinguent que par un coefficient : rien dans leur écriture ne rappelle à quelle " +
             "forme elles appartiennent.",
      /* RENVOI VÉRIFIÉ, et VERS LE QUIZ, pour une raison mesurée : les trois
         exercices du moule « cylindre » (1, 3, 5) utilisent TOUS le même
         solide et donc la même formule J = ½mR². Aucun ne propose une sphère
         ni un anneau, donc aucun ne peut faire apparaître l'erreur de CHOIX
         de formule — la moitié la plus coûteuse de cette erreur, et celle
         que la question 3 de l'évaluation notée interroge.
         Le quiz 2 la traite de front : « Le moment d'inertie d'une sphère
         pleine de masse m et de rayon R autour d'un diamètre vaut : », bonne
         réponse (2/5)mR², avec une correction qui ÉNUMÈRE les trois cas
         (« ½mR² correspond au cylindre plein, et mR² à l'anneau mince ») —
         c'est exactement le tableau de comparaison qui manque aux exercices.
         Renvoi retenu et vérifié sur le contenu réel du quiz.
         Le remède l'appuie sur l'exercice 1 (m = 9 kg, R = 0,29 m,
         M = 3,8 N·m, J = 0,3784 kg·m², alpha ≈ 10 rad/s²), retenu parmi les
         trois cylindres parce que c'est le PREMIER énoncé du chapitre — donc
         celui sur lequel on peut imposer la disposition en deux temps dès le
         départ — et parce que son alpha tombe sur 10 rad/s², ordre de
         grandeur facile à retenir pour la comparaison avec le 0,42 erroné. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le quiz 2 fait le travail que les exercices ne font pas : il demande le moment " +
              "d'inertie d'une <strong>sphère pleine</strong>, et sa correction énumère les trois " +
              "cas côte à côte — $\\frac{1}{2}mR^2$ pour le cylindre plein, $\\frac{2}{5}mR^2$ pour " +
              "la sphère, $mR^2$ pour l'anneau mince. Les trois exercices de cylindre du livre " +
              "(1, 3, 5) utilisent tous la même formule, donc ils n'exercent jamais le " +
              "<strong>choix</strong> : c'est le quiz qui le fait.<br/><br/>" +
              "Ensuite, sur l'exercice 1 ($m = 9$ kg, $R = 0{,}29$ m, $M = 3{,}8$ N·m), imposez la " +
              "résolution <strong>en deux temps séparés par un trait</strong> : d'abord $J$ seul " +
              "($J = \\frac{1}{2} \\times 9 \\times 0{,}29^2 = 0{,}3784$ kg·m²), ensuite $\\alpha$ " +
              "($\\alpha = 3{,}8 / 0{,}3784 \\approx 10$ rad/s²). L'élève qui divise par la masse " +
              "trouve $0{,}42$ rad/s² : comparez les deux à haute voix, l'écart est d'un facteur " +
              "$24$.<br/><br/>" +
              "Le système réel qui installe l'idée d'inertie de rotation, et il est " +
              "manipulable : le <strong>volant d'inertie</strong> d'une presse ou la roue d'un " +
              "vélo. Prenez une roue de vélo démontée et faites-la lancer d'abord par la jante, " +
              "puis par le moyeu : <strong>même masse, effort tout autre</strong>. C'est cela que " +
              "$J$ mesure, et cela explique pourquoi la formule dépend de la géométrie : ce qui " +
              "compte, c'est <strong>à quelle distance de l'axe la matière se trouve</strong>. La " +
              "sphère, plus « ramassée » autour de son centre, a un coefficient plus petit " +
              "($\\frac{2}{5} < \\frac{1}{2}$) ; l'anneau, dont toute la matière est au bord, a le " +
              "plus grand ($1$). Dit ainsi, les trois formules se retrouvent au lieu de s'apprendre."
    },
    {
      titre: "S'arrêter à l'accélération quand la question demande une distance ou une vitesse",
      eleve: "Sur le véhicule de $1200$ kg (force motrice $3600$ N, frottements $600$ N) dont on " +
             "demande la distance pour atteindre $20$ m/s, l'élève calcule " +
             "$a = 2{,}5$ m/s² et s'arrête là — ou répond « $2{,}5$ m », en confondant la valeur " +
             "trouvée avec la grandeur demandée.",
      cause: "Ce n'est pas une erreur de PFD : le PFD est juste. C'est un problème à " +
             "<strong>deux étages</strong> — dynamique puis cinématique — et l'élève n'a jamais vu " +
             "d'exercice à deux étages dans ce chapitre, puisque les six énoncés du livre " +
             "s'arrêtent tous à l'accélération. Il répond donc au problème qu'il connaît, pas à " +
             "celui qu'on lui pose. L'habitude prise est légitime, elle a fonctionné six fois sur " +
             "six ; elle lâche exactement là où le devoir noté la pousse.",
      /* exercice: null ASSUMÉ, et c'est le null le mieux motivé de cette
         fiche. MESURE FAITE sur les six tirages : chacun demande a ou alpha
         comme RÉPONSE FINALE, et le champ de réponse attend cette valeur.
         Aucun ne poursuit vers une distance, une vitesse atteinte ou une
         durée. Renvoyer vers l'un d'eux serait un contresens : l'exercice ne
         demande pas ce qu'on reproche à l'élève de ne pas faire (c'est le
         même motif que l'erreur 4 de bts-derivation-appliquee).
         Le quiz ne fournit rien non plus : ses trois questions portent sur
         a = F/m, sur J de la sphère et sur f inconnu — aucun enchaînement
         vers la cinématique.
         Le seul support du livre est la question 5 de l'évaluation, et une
         remédiation ne renvoie JAMAIS vers le devoir noté. Le remède demande
         donc à l'enseignant de PROLONGER un énoncé existant, ce qui est le
         vrai geste de remédiation ici, et lui donne les valeurs prêtes à
         l'emploi pour le faire en trente secondes. */
      exercice: null,
      remede: "Aucun exercice du livre ne peut servir ici, et il vaut mieux le savoir avant la " +
              "séance : les six énoncés tirés s'arrêtent tous à l'accélération, et le quiz " +
              "également. Le seul problème à deux étages du chapitre est la question $5$ du devoir " +
              "noté — donc hors de portée pour une remédiation.<br/><br/>" +
              "<strong>Le geste de substitution, et il coûte trente secondes.</strong> Reprenez " +
              "l'exercice 6 du livre ($m = 5$ kg, $F = 105$ N, $f = 27$ N, réponse " +
              "$a = 15{,}6$ m/s²) et ajoutez une question à l'oral : « <em>et quelle distance " +
              "parcourt-il pour atteindre $10$ m/s en partant du repos ?</em> » — la réponse est " +
              "$d = v^2/(2a) = 100/31{,}2 \\approx 3{,}2$ m. Faites la même chose sur l'exercice 4. " +
              "Vous avez alors deux problèmes à deux étages, construits sur des énoncés que les " +
              "élèves ont déjà résolus : ils n'ont plus qu'une seule nouveauté à " +
              "affronter.<br/><br/>" +
              "Le schéma à installer et à faire répéter, parce que c'est lui que l'épreuve " +
              "attend : <strong>forces $\\rightarrow$ accélération $\\rightarrow$ mouvement</strong>. " +
              "Le PFD donne l'accélération ; la cinématique ($v = at$, $v^2 = 2ad$, " +
              "$d = \\frac{1}{2}at^2$) donne le reste. L'accélération est un " +
              "<strong>intermédiaire</strong>, pas une réponse — sauf quand on la demande " +
              "explicitement.<br/><br/>" +
              "Le système réel qui donne envie d'aller au bout du calcul : la " +
              "<strong>distance d'arrêt d'un véhicule</strong>, ou la course d'un chariot " +
              "de manutention avant l'arrêt d'urgence. Personne, dans un bureau d'études, ne " +
              "commande une accélération : on commande une <strong>distance</strong> (« le chariot " +
              "doit s'arrêter en moins de $2$ m ») ou une <strong>durée</strong> de cycle. " +
              "L'accélération est ce qu'on calcule au milieu, et le client ne la voit jamais."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. CINQ questions
     ici — COMPTÉ sur le module chargé ; `validerProf` exige exactement autant
     de compétences que de questions.

     Q1 ($m = 15$ kg, $\sum F = 45$ N → $a = 3$ m/s²) → résoudre : application
        directe du PFD, une seule étape, aucun choix de méthode.
     Q2 ($m = 6$ kg, $a = 4$ m/s², $F = 30$ N → $f = 6$ N) → résoudre : la même
        équation lue dans l'autre sens. C'est un pas de plus que Q1 (il faut
        isoler l'inconnue) mais cela reste l'exécution d'une relation connue,
        donc `résoudre` et non `modéliser` : l'équation est fournie par le
        cours, rien n'est à construire.
     Q3 (moment d'inertie du cylindre plein : $\frac{1}{2}mR^2$) → analyser :
        restitution d'une caractéristique d'un constituant, à distinguer de
        deux distracteurs de même forme ($\frac{2}{5}mR^2$ pour la sphère,
        $mR^2$ pour l'anneau). Aucun calcul. Rattachée à `analyser` selon la
        convention du référentiel SI de l'ouvrage (voir REFERENTIELS.si dans
        prof.js : les questions de restitution y sont rattachées à `analyser`,
        « identifier et caractériser une grandeur ou un constituant »).
     Q4 ($m = 2$ kg, $R = 0{,}2$ m, $M = 0{,}8$ N·m → $\alpha = 20$ rad/s²) →
        résoudre : deux calculs enchaînés ($J$ puis $\alpha$), mais les deux
        formules sont données par le cours.
     Q5 ($1200$ kg, $3600$ N, $600$ N, $v = 20$ m/s → $d = 80$ m) →
        modéliser : c'est la SEULE question du devoir qui demande de CHOISIR
        et d'ENCHAÎNER deux modèles — le PFD pour obtenir $a$, puis la
        cinématique $v^2 = 2ad$ pour obtenir $d$. Rien dans l'énoncé ne dit
        qu'il faut passer par l'accélération : c'est l'élève qui doit décider
        de la découper en deux, et c'est exactement ce que `modéliser`
        désigne.

     RÉPARTITION DE CE CHAPITRE : résoudre 3, analyser 1, modéliser 1.
     `expérimenter`, `concevoir` et `communiquer` ne sont pas mobilisés, et
     c'est un constat mesuré sur les cinq énoncés : aucune question ne demande
     de mesurer, de concevoir, ni de rédiger une explication. Voir la note de
     REFERENTIELS.si dans prof.js : sur les 96 questions de l'ouvrage,
     `expérimenter` et `concevoir` ne sont JAMAIS tirés, le corpus ne
     contenant ni TP ni tâche de conception.

     À SIGNALER, et c'est écrit dans la `note` : Q2, Q3 et Q5 n'ont AUCUN
     support dans les six exercices du livre (aucun ne cherche une force
     inconnue, aucun ne sort du cylindre, aucun ne va jusqu'à une distance).
     Un élève qui n'aurait fait que les exercices découvrirait trois des cinq
     questions le jour du devoir. */
  competences: {
    evaluation: ['résoudre', 'résoudre', 'analyser', 'résoudre', 'modéliser']
  }
};
