/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-trigonometrie.prof.js
   Fiche professeur du chapitre « Trigonométrie » (remise à niveau BTS), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   ATTENTION — CE CHAPITRE EST LE SEUL DU DOSSIER À HUIT QUESTIONS
   D'ÉVALUATION. Les treize autres en ont quatre ou cinq. `validerProf` exige
   EXACTEMENT autant de compétences que de questions : huit entrées dans
   `competences.evaluation`, pas cinq. Les huit questions forment par ailleurs
   trois groupes enchaînés (Q2-Q3 sur un même transformateur, Q4-Q5 sur une
   même canalisation, Q6-Q7-Q8 sur un même signal), ce qui change la lecture
   des compétences : la première question d'un groupe fait le travail de
   modélisation, les suivantes exécutent.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 5. 42 énoncés tirés, dont 12 numérotés et 30 en banque
   supplémentaire. SIX MOULES parmi les douze numérotés :
     - composante du poids PERPENDICULAIRE au plan incliné : exercices 1 et 7 ;
     - composante du poids PARALLÈLE au plan incliné       : exercices 4 et 11 ;
     - pulsation $\omega = 2\pi f$ d'un signal             : exercices 2 et 10 ;
     - impédance et déphasage d'un circuit RL              : exercices 3 et 9 ;
     - angle d'une pente par arctan                        : exercices 5 et 8 ;
     - composante d'une force orientée                     : exercices 6 et 12.
   UNE ANOMALIE DE TIRAGE À SIGNALER : les exercices 3 et 9 demandent DEUX
   grandeurs ($Z$ et $\varphi$) mais n'attendent qu'UNE réponse, l'angle — et
   comme ils ont tous deux $R = X_L$, cet angle vaut $45°$ dans les deux cas.
   Ils ne discriminent donc rien sur le déphasage. C'est dit dans la `note`.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-trigonometrie"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     AUCUN PRÉREQUIS. Le chapitre est techniquement autonome : il définit
     lui-même ses trois fonctions, ses valeurs remarquables et sa conversion
     degré/radian, et ses douze exercices se résolvent tous par une
     substitution dans SOH-CAH-TOA ou dans $\omega = 2\pi f$.

     Candidats examinés et ÉCARTÉS :
     - ch. 8 (Vecteurs & géométrie) : c'est le candidat le plus sérieux, et le
       lien est réel — décomposer une force en $F\cos\theta$ et $F\sin\theta$
       est la méthode 1 du chapitre 8, et les exercices 6 et 12 d'ici font
       exactement cela. MAIS la dépendance va dans l'AUTRE SENS : le chapitre 8
       suppose la trigonométrie acquise pour décomposer, alors qu'ici on ne
       manipule jamais de composantes vectorielles, seulement des longueurs
       dans un triangle rectangle. En faire un prérequis créerait une
       dépendance circulaire avec le chapitre 8, dont le rang est supérieur.
       Écarté fermement — c'est le chapitre 8 qui dépend de celui-ci.
     - ch. 1 (Calcul littéral) : l'étape 4 de la méthode demande d'« isoler
       l'inconnu algébriquement ». Mais dans les douze tirages, l'inconnue est
       toujours déjà isolée par la formule donnée ($P_\perp = P\cos\theta$,
       $\omega = 2\pi f$) : il n'y a rien à retourner. Écarté.
     - ch. 4 (Puissances) : aucun exercice ne fait intervenir de puissance de
       dix. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [],

  /* Rang conseillé (2026-09-17) : rang 6, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 6 est contraint par l'aval : le chapitre 8 (Vecteurs) déclare
     celui-ci en prérequis, donc son rang doit rester strictement inférieur à
     8 — ce que 6 respecte. Le livre le range en chapitre 6 : les deux ordres
     coïncident, la colonne « Chap. » de la progression ne portera pas le
     triangle d'alerte. */
  rangConseille: 6,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Calculer un côté ou un angle dans un triangle rectangle à l'aide de sinus, cosinus, tangente et de leurs réciproques",
    "Décomposer une force ou un poids en composantes parallèle et perpendiculaire à une direction donnée",
    "Exploiter les caractéristiques d'un signal sinusoïdal : pulsation, fréquence, déphasage, valeur maximale"
  ],

  note: "Sinus, cosinus, tangente dans le triangle rectangle, fonctions réciproques, conversion " +
        "degré/radian, cercle trigonométrique et signaux alternatifs : le chapitre couvre l'outil " +
        "angulaire que le BTS technique utilise partout — déphasage en électrotechnique, pente en " +
        "BTP, effort sur plan incliné en mécanique.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci est <strong>sans prérequis</strong> — il redéfinit " +
        "tout ce dont il a besoin — mais le <strong>chapitre 8</strong> (Vecteurs) dépend de lui : " +
        "décomposer une force en $F\\cos\\theta$ et $F\\sin\\theta$ suppose SOH-CAH-TOA acquis. " +
        "Ne traitez pas les vecteurs avant celui-ci.<br/><br/>" +
        "<strong>Deux particularités à connaître avant de composer un devoir.</strong> D'abord, " +
        "ce chapitre est le seul du recueil dont l'évaluation compte <strong>huit questions</strong> " +
        "au lieu de quatre ou cinq, et elles sont organisées en <strong>trois groupes " +
        "enchaînés</strong> (Q2-Q3, Q4-Q5, Q6-Q7-Q8) : une erreur sur la première question d'un " +
        "groupe se propage aux suivantes. Pensez-y au barème. Ensuite, les exercices 3 et 9 " +
        "annoncent deux grandeurs à calculer ($Z$ et $\\varphi$) mais <strong>n'attendent que " +
        "l'angle</strong> — et comme les deux tirages ont $R = X_L$, cet angle vaut $45°$ dans " +
        "les deux cas. Ils ne font donc pas travailler le déphasage général : seule la question 3 " +
        "de l'évaluation le fait, avec $\\arctan(2{,}25)$. Si le déphasage vous importe, " +
        "composez un énoncé où $R \\neq X_L$.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI : avec six moules dont deux quasi-jumeaux
     (perpendiculaire / parallèle), le chapitre offre un support pour chaque
     confusion typique — et c'est justement cette proximité entre moules qui
     rend le diagnostic possible.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. La trigonométrie est par
     ailleurs le chapitre du recueil qui réveille le plus d'anxiété — c'est
     celui qu'on a « jamais compris » au lycée. Le champ `cause` en tient
     compte. */
  erreurs: [
    {
      titre: "Prendre le cosinus pour le sinus en décomposant un poids sur un plan incliné",
      eleve: "Pour une charge de $250$ kg sur un plan à $30°$, l'élève calcule la composante " +
             "parallèle avec $\\cos 30°$ et annonce $2124$ N au lieu de $1226$ N. Ou l'inverse : il " +
             "calcule la perpendiculaire avec le sinus.",
      cause: "SOH-CAH-TOA se retient parfaitement, et ce n'est pas là que ça casse. Ce qui casse, " +
             "c'est l'étape d'AVANT, celle que le cours appelle « nommer les trois côtés par " +
             "rapport à $\\theta$ » : sur un plan incliné, l'angle du plan n'est pas l'angle du " +
             "triangle des forces, et il faut voir que l'angle entre le poids (vertical) et la " +
             "perpendiculaire au plan vaut aussi $\\theta$. Cette égalité d'angles est un " +
             "raisonnement géométrique, pas une formule — et c'est exactement le raisonnement que " +
             "personne n'a le temps de refaire en situation. Un adulte se rabat alors sur une " +
             "règle mémorisée (« sur un plan incliné c'est le sinus »), qui est vraie pour une " +
             "des deux composantes seulement, et qu'il applique aux deux. L'erreur n'est pas de " +
             "l'étourderie : c'est une lacune géométrique masquée par une mnémotechnique.",
      remede: "Faire <strong>tracer le triangle des forces</strong>, systématiquement et même quand " +
              "on croit savoir : le poids vertical, la composante le long du plan, la composante " +
              "perpendiculaire. Sur ce dessin, l'angle $\\theta$ se retrouve entre le poids et la " +
              "perpendiculaire, et la question « opposé ou adjacent ? » se répond d'elle-même. " +
              "Trente secondes de crayon contre une erreur qui ne se voit pas.<br/><br/>" +
              "Ancrer ensuite un <strong>contrôle par les cas extrêmes</strong>, qui est " +
              "imparable et ne demande aucun dessin : sur un plan HORIZONTAL ($\\theta = 0$), " +
              "rien ne glisse — la composante parallèle est NULLE, et $\\sin 0 = 0$, donc c'est " +
              "bien le sinus qui la donne. Sur un plan VERTICAL ($\\theta = 90°$), tout le poids " +
              "tire vers le bas du plan, et $\\sin 90° = 1$. Le sinus va donc avec le parallèle, " +
              "le cosinus avec le perpendiculaire, et cela se reconstruit en dix secondes sans " +
              "rien mémoriser.<br/><br/>" +
              "Relier enfin à la <strong>conséquence de terrain</strong>, qui parle aux " +
              "alternants : la composante parallèle dimensionne le treuil ou le frein d'un " +
              "convoyeur incliné, la perpendiculaire dimensionne les rouleaux et le châssis. " +
              "Les intervertir sur une rampe à $30°$, c'est se tromper d'un facteur $1{,}7$ sur " +
              "l'effort de retenue — un frein sous-dimensionné, et une charge qui part.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 5) :
         l'exercice 4 donne m = 250 kg sur un plan à 30° et demande la
         composante PARALLÈLE, réponse 1226 N. Le tirage est le plus
         diagnostique du chapitre pour cette confusion, pour une raison
         précise : à 30°, sin et cos valent 0,5 et 0,866, donc l'erreur donne
         2124 N au lieu de 1226 N — un rapport de 1,73 parfaitement visible.
         Et surtout, l'exercice 1 (m = 100 kg, 30°, réponse 850 N) demande la
         composante PERPENDICULAIRE sur le MÊME angle : donner les deux à la
         suite oblige l'élève à distinguer les deux cas au lieu d'appliquer
         une règle unique, ce qui est tout l'objet du remède. L'exercice 7
         (250 kg à 25°, perpendiculaire, réponse 2223 N) et l'exercice 11
         (300 kg à 15°, parallèle, réponse 762 N) complètent la série : à 15°,
         l'écart entre sin et cos est maximal (0,26 contre 0,97), donc
         l'erreur y est encore plus criante. Les quatre forment une
         progression cohérente ; l'exercice 4 est le point d'entrée parce
         qu'il demande le parallèle, qui est la composante que les élèves
         calculent le plus souvent faux. */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Laisser la calculatrice en radians (ou en grades) pour un angle donné en degrés",
      eleve: "Pour une force de $600$ N à $25°$, l'élève obtient $-79$ N au lieu de $254$ N — la " +
             "machine a calculé $\\sin(25\\ \\text{rad})$. Ou, à $30°$, il trouve $-197$ N au lieu " +
             "de $100$ N.",
      cause: "Le mode de la calculatrice est un réglage INVISIBLE : rien dans la saisie « sin 25 » " +
             "ne dit dans quelle unité la machine va lire le $25$, et l'affichage de $-79$ ne " +
             "ressemble pas à un message d'erreur. Le mode se change par une combinaison qu'on a " +
             "apprise une fois, qu'on oublie, et qui se déplace d'un modèle à l'autre. S'y ajoute " +
             "un facteur que l'on sous-estime : les calculatrices se PRÊTENT entre stagiaires en " +
             "reprise d'études, et le mode change sans que personne ne s'en aperçoive. Enfin, un " +
             "adulte qui a peur des mathématiques fait davantage confiance à la machine qu'à son " +
             "propre jugement — c'est précisément ce qui l'empêche de contester un résultat " +
             "aberrant.",
      remede: "Imposer un <strong>test d'étalonnage en début de chaque séance</strong>, toujours le " +
              "même et connu par cœur : taper $\\sin(30)$. Si l'écran affiche $0{,}5$, le mode " +
              "degré est bon ; s'il affiche $-0{,}988$, il est en radians. Cinq secondes, et " +
              "toute la séance est sécurisée. Le faire faire à voix haute, collectivement, " +
              "installe le réflexe en trois séances.<br/><br/>" +
              "Installer ensuite le <strong>contrôle du domaine</strong>, qui attrape l'erreur " +
              "même sans étalonnage : un sinus et un cosinus sont TOUJOURS compris entre $-1$ et " +
              "$1$, et dans un problème d'angle aigu (entre $0°$ et $90°$) ils sont toujours " +
              "POSITIFS. Une composante négative sur une force orientée vers le haut est " +
              "impossible : le signe seul signale le mauvais mode.<br/><br/>" +
              "Nommer enfin le <strong>repère de vraisemblance métier</strong> : la composante " +
              "verticale d'une force inclinée à $25°$ vaut « à peu près quatre dixièmes » de la " +
              "force totale. Sur $600$ N, on attend donc environ $250$ N. Ce n'est pas un calcul, " +
              "c'est un ordre de grandeur — et il suffit à rejeter $-79$ avant d'avoir rien " +
              "vérifié.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 6 donne
         F = 600 N à 25° de l'horizontale et demande la composante VERTICALE,
         réponse 254 N. C'est le meilleur support du chapitre pour cette
         erreur, et il le doit à une propriété du nombre 25 : sin(25 rad)
         vaut environ -0,132, donc le mode radian produit une réponse
         NÉGATIVE (-79 N) sur une composante qui ne peut pas l'être. Le
         contrôle de signe du remède tranche immédiatement, sans même
         connaître la bonne valeur. Sur l'exercice 12 (300 N à 20°,
         composante horizontale, réponse 282 N), sin(20 rad) = 0,913 et
         cos(20 rad) = 0,408 : le mode radian donnerait 122 N, un nombre
         positif et plausible — l'erreur y est donc INVISIBLE au contrôle de
         signe. C'est ce qui départage les deux, et cela vaut d'être dit aux
         élèves : le contrôle de signe ne marche pas toujours, le test
         d'étalonnage, si. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Confondre une pente en pourcentage avec un angle en degrés",
      eleve: "Devant une canalisation qui descend de $1{,}5$ m sur $10$ m, l'élève annonce " +
             "« $15°$ de pente » au lieu de $8{,}5°$. Ou, sur une pente annoncée à $5\\ \\%$, il " +
             "cherche $\\arctan(5)$ et trouve $78{,}7°$.",
      cause: "La pente en pourcentage est une grandeur de MÉTIER — c'est ainsi que se lisent les " +
             "plans de VRD, les fiches d'assainissement, les panneaux routiers — et un alternant " +
             "l'a souvent pratiquée bien avant d'aborder l'arctangente. Il a donc un savoir " +
             "solide, mais dans une autre unité, et rien ne lui a jamais dit comment les deux se " +
             "relient. La confusion est renforcée par le fait que les deux nombres sont proches " +
             "pour les petites pentes ($2\\ \\%$ donne $1{,}15°$, $5\\ \\%$ donne $2{,}86°$) : " +
             "l'erreur ne se voit pas sur le terrain, où les pentes sont faibles, et ne se révèle " +
             "que sur les grandes valeurs. Une pente de $100\\ \\%$, c'est $45°$ et non $90°$ — " +
             "le cours le dit, mais l'information arrive après l'habitude.",
      remede: "Faire écrire la <strong>définition de la pente en pourcentage</strong>, une fois, " +
              "clairement : c'est la dénivelée divisée par la longueur HORIZONTALE, multipliée " +
              "par cent. Autrement dit, $\\text{pente \\%} = \\tan\\theta \\times 100$. La " +
              "tangente est donc le PONT entre les deux mondes, et une fois le pont nommé, les " +
              "deux conversions se font sans hésitation dans les deux sens.<br/><br/>" +
              "Ancrer ensuite le <strong>repère des 100 %</strong>, qui est le contrôle le plus " +
              "efficace parce qu'il est contre-intuitif et donc mémorable : une pente de " +
              "$100\\ \\%$ vaut $45°$, pas $90°$. Une réponse en degrés supérieure à la pente en " +
              "pourcentage est forcément fausse dès que la pente dépasse quelques pour cent.<br/><br/>" +
              "Relier enfin à la <strong>conséquence de terrain</strong>, qui est le quotidien du " +
              "BTP : une canalisation d'assainissement se pose entre $1$ et $3\\ \\%$ — moins, " +
              "elle ne s'auto-cure pas et se bouche ; plus, l'eau file en laissant les solides " +
              "derrière elle. Confondre $1{,}5\\ \\%$ et $1{,}5°$ (soit $2{,}6\\ \\%$), c'est " +
              "doubler la pente réelle et manquer la plage réglementaire.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 5 donne une
         dénivellation de 1,5 m sur 10 m horizontaux et demande l'angle,
         réponse 8,5°. Le tirage est excellent pour cette erreur parce que le
         rapport 1,5/10 = 0,15 s'écrit aussi « 15 % », et que 15 et 8,5 sont
         deux nombres nettement distincts : l'élève qui confond annonce 15°,
         et l'écart se lit d'un coup à la correction. Préféré à l'exercice 8
         (2 m sur 20 m, réponse 5,7°) parce que sur le 8 le rapport vaut 10 %
         et que 10° contre 5,7° est un écart moindre, sur des valeurs plus
         petites — et surtout parce qu'un élève peut y retrouver la bonne
         réponse par tâtonnement. Sur le 5, il faut vraiment utiliser
         l'arctangente. L'exercice 8 fait un bon second support, et les
         questions 4 et 5 de l'évaluation prolongent le sujet avec une pente
         donnée EN POURCENTAGE, soit le sens inverse de la conversion. */
      exercice: { type: "exercice", n: 5 }
    },
    {
      titre: "Confondre fréquence et pulsation, ou oublier le facteur $2\\pi$",
      eleve: "Pour un signal à $60$ Hz, l'élève annonce $\\omega = 60$ rad/s au lieu de " +
             "$377$ rad/s. Ou il divise par $2\\pi$ au lieu de multiplier et trouve " +
             "$9{,}5$ rad/s.",
      cause: "Fréquence et pulsation décrivent la même chose — la rapidité d'un signal — dans deux " +
             "unités différentes, et rien dans les symboles $f$ et $\\omega$ ne rappelle laquelle " +
             "est laquelle. Pire : sur le terrain, on ne parle jamais de pulsation. Un électricien " +
             "dit « du 50 hertz », jamais « du 314 radians par seconde ». La pulsation est donc " +
             "une grandeur purement calculatoire, sans ancrage professionnel, ce qui la rend " +
             "impossible à retenir par l'usage — contrairement à toutes les autres grandeurs de " +
             "ce recueil. Quant au sens du facteur $2\\pi$, il repose sur une idée jamais " +
             "énoncée : un tour complet fait $2\\pi$ radians, donc $f$ tours par seconde font " +
             "$2\\pi f$ radians par seconde. L'élève qui n'a pas cette phrase hésite légitimement " +
             "entre multiplier et diviser.",
      remede: "Donner la <strong>phrase qui fabrique la formule</strong>, et ne plus jamais donner " +
              "la formule seule : « un tour, c'est $2\\pi$ radians ; $50$ tours par seconde, " +
              "c'est $50 \\times 2\\pi$ radians par seconde ». La formule $\\omega = 2\\pi f$ " +
              "n'est plus à retenir, elle se reconstruit — et le sens du facteur ne peut plus " +
              "s'inverser.<br/><br/>" +
              "Ancrer ensuite <strong>deux valeurs de référence</strong> qui couvrent la quasi-" +
              "totalité des cas rencontrés en BTS : $50$ Hz donne $314$ rad/s, $60$ Hz donne " +
              "$377$ rad/s. Ces deux nombres traînent sur toutes les plaques signalétiques ; les " +
              "reconnaître dispense de recalculer et signale immédiatement une erreur.<br/><br/>" +
              "Nommer enfin la <strong>règle d'ordre de grandeur</strong> qui rejette l'erreur " +
              "sans calcul : la pulsation est TOUJOURS environ six fois la fréquence. Une " +
              "pulsation égale à la fréquence, ou six fois plus petite, signale le facteur " +
              "oublié ou inversé. Sur un calcul de réactance $X_L = L\\omega$ — le contexte réel " +
              "de la formule — un facteur six d'erreur donne une impédance fausse et un " +
              "dimensionnement de condensateur de compensation sans rapport.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne un
         signal à f = 60 Hz et demande la pulsation, réponse 377 rad/s. Choisi
         plutôt que l'exercice 10 (400 V, 50 Hz, réponse 314 rad/s) pour une
         raison de diagnostic : 377 n'est pas un nombre « connu » comme 314,
         donc l'élève ne peut pas le restituer de mémoire ni le reconnaître —
         il doit réellement poser omega = 2.pi.f. Sur le 10, un élève qui a
         croisé 314 rad/s une fois dans sa vie l'écrit sans comprendre, et
         l'exercice ne diagnostique rien. À noter aussi : l'énoncé donne
         l'amplitude (325 V) qui ne sert à rien dans le calcul — un distracteur
         utile, qui oblige à trier les données. Les deux exercices sont à
         donner l'un après l'autre : le 2 pour diagnostiquer, le 10 pour
         installer le repère des 314 rad/s cité dans le remède. */
      exercice: { type: "exercice", n: 2 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     HUIT questions ici — c'est le SEUL chapitre du dossier dans ce cas, les
     treize autres en ont quatre ou cinq. `validerProf` exige exactement huit
     entrées : les compter dans le dump avant d'écrire, ne jamais supposer.

     UNE PARTICULARITÉ DE STRUCTURE QUI COMMANDE L'ÉTIQUETAGE : les huit
     questions forment trois groupes enchaînés. Dans chaque groupe, la
     PREMIÈRE question porte le travail de traduction (comprendre la situation,
     choisir la relation) et les SUIVANTES exécutent sur le même dispositif,
     avec les données déjà mises en place. L'étiquetage suit fidèlement cette
     asymétrie plutôt que de répéter la même compétence par groupe.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — bras de robot, $F = 1200$ N à $25°$ DE LA VERTICALE, composante
          horizontale. Le piège est entier dans l'énoncé : l'angle est mesuré
          depuis la verticale et non depuis l'horizontale, donc c'est le sinus
          qui donne l'horizontale — l'inverse du réflexe. Il faut traduire la
          géométrie décrite en français dans le bon choix de fonction avant
          tout calcul. « modéliser ».
     Q2 — impédance $Z = \sqrt{R^2 + X_L^2}$ pour $R = 0{,}4$ et
          $X_L = 0{,}9$. Formule donnée par le cours, deux nombres fournis :
          exécution. « calculer ».
     Q3 — déphasage du MÊME transformateur, $\varphi = \arctan(X_L/R)$. Les
          données sont déjà posées par Q2 ; il reste à appliquer l'arctangente.
          Exécution. « calculer ».
     Q4 — canalisation à 5 % sur 400 m, différence de hauteur. Il faut d'abord
          comprendre ce qu'est une pente en pourcentage — que l'énoncé
          n'explicite pas — puis traduire « 5 % sur 400 m » en une
          multiplication. C'est la mise en relation qui fait le travail, le
          calcul est trivial. « modéliser ».
     Q5 — angle de la MÊME canalisation, $\arctan(0{,}05)$. La traduction a été
          faite en Q4 ; il reste une touche de calculatrice. « calculer ».
     Q6 — valeur maximale de $u(t) = 230\sqrt{2}\sin(100\pi t - \pi/6)$. Il
          faut IDENTIFIER, dans une écriture symbolique, quel facteur joue le
          rôle d'amplitude — reconnaître la structure $U_{\max}\sin(\omega t +
          \varphi)$ dans une expression concrète — puis calculer. La lecture de
          structure est le vrai travail. « modéliser ».
     Q7 — fréquence du MÊME signal, $f = \omega/(2\pi)$ avec
          $\omega = 100\pi$. La structure a été lue en Q6 ; il reste une
          division. Exécution. « calculer ».
     Q8 — déphasage à l'origine du MÊME signal : $-\pi/6$, converti en $-30°$.
          Même remarque, et la conversion radian/degré est au programme du
          cours. Exécution. « calculer ».

     RÉPARTITION DE CE CHAPITRE : calculer 5, modéliser 3.
     « chercher », « raisonner », « représenter » et « communiquer » ne sont
     PAS mobilisés. L'absence de « raisonner » mérite un mot : aucune des huit
     questions ne demande de juger la validité d'une affirmation ni de
     démontrer — toutes les huit sont `numeric`, et c'est le seul chapitre du
     recueil sans aucune question à choix multiple. C'est un constat sur les
     huit énoncés, non corrigé par un étiquetage complaisant. */
  competences: {
    evaluation: ["modéliser", "calculer", "calculer", "modéliser", "calculer",
                 "modéliser", "calculer", "calculer"]
  }
};
