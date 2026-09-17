/* =========================================================
   Spark Learning – js/data/prof/bts-prep/bts-prep-equations-transf.prof.js
   Fiche professeur du chapitre « Équations à Transformations » (remise à
   niveau BTS), pour l'édition du professeur. JAMAIS chargée par le site : ce
   fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `bts-prep-logarithme.prof.js` (2026-09-17).

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer — `bts-maths` porte « Collection Mathématiques ».

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 11. 42 énoncés tirés, dont 12 numérotés et 30 en
   banque supplémentaire. SIX MOULES parmi les douze numérotés :
     - allongement d'un ressort depuis $E_p = \frac{1}{2}kx^2$ : exercices 1 et 7 ;
     - retrouver $R$ depuis $Z = \sqrt{R^2 + X^2}$             : exercices 2 et 9 ;
     - $[H^+]$ depuis un pH entier                             : exercices 3 et 10 ;
     - vitesse depuis $E_c = \frac{1}{2}mv^2$                   : exercices 4 et 12 ;
     - vitesse depuis $p_d = \frac{1}{2}\rho v^2$               : exercices 5 et 11 ;
     - instant $t$ depuis une charge RC $u_C = U(1 - e^{-t/\tau})$ : exercices 6 et 8.
   RICHESSE REMARQUABLE : quatre des cinq transformations annoncées par le
   cours sont représentées dans les exercices (racine, carré, exponentielle,
   logarithme décimal), et les trois moules à racine (1/7, 4/12, 5/11) plus le
   moule 2/9 offrent quatre variantes du même geste sur des formules
   différentes. Les quatre erreurs reçoivent toutes un renvoi vérifié.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-prep-equations-transf"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts-prep`, pas du livre.
     14 chapitres, donc numéros de 1 à 14.

     ch. 2 (Équations & systèmes) : RETENU. L'intitulé du cours le dit
     lui-même dès sa première phrase — « ce module complète le module
     Équations » — et ce n'est pas une politesse éditoriale : tous les
     exercices commencent par la même manœuvre qu'au chapitre 2 (isoler le
     terme qui porte l'inconnue en opérant sur les deux membres) et n'ajoutent
     qu'une étape finale, la transformation inverse. Un stagiaire qui ne sait
     pas ramener $0{,}50 = \frac{1}{2} \times 400 \times x^2$ à
     $x^2 = 0{,}0025$ ne peut pas commencer, quelle que soit sa maîtrise de la
     racine carrée. Le prérequis porte sur l'ISOLATION, pas sur le second
     degré ni sur les systèmes.

     Candidats examinés et ÉCARTÉS :
     - ch. 7 (Logarithmes & exponentielles) : c'est le candidat le plus
       sérieux, et il mérite un examen attentif. Quatre exercices en dépendent
       en apparence — les 3 et 10 (pH et $\log_{10}$), les 6 et 8 (charge RC
       et $\ln$). MAIS le chapitre 12 REDÉFINIT entièrement ce dont il a
       besoin dans ses définitions D3 et D4, sous forme de règles d'inversion
       ($e^x = a \Rightarrow x = \ln a$) qui s'appliquent mécaniquement, sans
       aucune propriété algébrique du logarithme. Aucun exercice ne demande de
       développer $\ln(ab)$ ni de combiner des décibels. Le chapitre 7 donne
       le SENS, ce chapitre-ci donne la TECHNIQUE, et la technique est
       autonome. Écarté — mais c'est de loin le lien le plus fécond, et un
       enseignant qui a traité le chapitre 7 gagnera énormément à enchaîner
       ici. La `note` le dit explicitement.
     - ch. 1 (Calcul littéral) : même geste que le chapitre 2, mais sur des
       lettres plutôt que sur des nombres. Le chapitre 2 le couvre par
       transitivité (il le déclare lui-même en prérequis). Écarté pour ne pas
       alourdir.
     - ch. 6 (Trigonométrie) : aucun lien. Les exercices 2 et 9 utilisent
       $Z = \sqrt{R^2 + X^2}$, ce qui est du Pythagore, pas de la
       trigonométrie — aucun angle n'intervient. Écarté.
     Aucun autre candidat sérieux. */
  prerequis: [2],

  /* Rang conseillé (2026-09-17) : rang 12, celui du livre.

     CE QUE « rangConseille » VEUT DIRE DANS UNE REMISE À NIVEAU.
     `bts-maths-prep` n'est pas une année : c'est un recueil dans lequel
     l'enseignant PIOCHE selon les lacunes de son groupe. Le rang décrit un
     ORDRE DE DÉPENDANCE TECHNIQUE, pas un déroulé annuel — c'est dit dans la
     `note`, qui est imprimée.

     Le rang 12 respecte la contrainte déclarée (être supérieur à 2) avec une
     large marge, et il place surtout ce chapitre APRÈS le chapitre 7
     (Logarithmes, rang 7), ce qui n'est pas exigé mais est fortement
     souhaitable : un stagiaire qui a vu $\ln$ et $\exp$ au chapitre 7 aborde
     les exercices 6 et 8 en terrain connu, alors que sans lui il applique une
     règle d'inversion qu'il ne comprend pas. Le livre le range aussi en
     chapitre 12 : les deux ordres coïncident, la colonne « Chap. » de la
     progression ne portera pas le triangle d'alerte. */
  rangConseille: 12,

  /* Attendus. ATTENTION à la nature de la source : `bts-maths-prep` est une
     REMISE À NIVEAU qui ne correspond à AUCUN programme officiel — ni celui du
     BTS, ni celui du lycée. Les trois attendus sont formulés en VERBES
     D'ACTION vérifiables, strictement limités à ce que les 42 énoncés tirés
     demandent. La `note` le dit pour que l'enseignant ne les cite pas comme
     des items de référentiel. */
  attendus: [
    "Isoler le terme qui porte l'inconnue avant d'appliquer une transformation inverse",
    "Résoudre une équation où l'inconnue est sous une racine, à une puissance, dans une exponentielle ou dans un logarithme",
    "Choisir la solution physiquement acceptable et vérifier qu'elle satisfait l'équation de départ"
  ],

  note: "Racine, carré, exponentielle, logarithme : le chapitre installe la dernière technique de " +
        "résolution dont le BTS a besoin — celle qui permet de retrouver une résistance dans une " +
        "impédance, une vitesse dans une énergie cinétique, un instant dans une charge de " +
        "condensateur.<br/><br/>" +
        "<strong>Ce que ce livre est, et ce qu'il n'est pas.</strong> " +
        "<em>Mathématiques BTS — Remise à niveau</em> ne suit aucun programme officiel : c'est un " +
        "recueil destiné à combler les lacunes d'un public qui arrive en BTS sans les automatismes " +
        "du lycée. Les trois attendus ci-dessus sont des <strong>objectifs de fin de " +
        "chapitre</strong>, formulés à partir de ce que les exercices demandent réellement — et " +
        "<strong>non des items d'un référentiel</strong>. Ne les citez pas comme tels.<br/><br/>" +
        "<strong>Le rang conseillé n'est pas un calendrier.</strong> Dans une remise à niveau, on " +
        "pioche : l'ordre des quatorze chapitres décrit des <strong>dépendances techniques</strong>, " +
        "pas un déroulé annuel. Ce chapitre-ci suppose les <strong>équations</strong> acquises " +
        "(chapitre 2) : avant toute racine et toute exponentielle, il faut savoir isoler le terme " +
        "qui porte l'inconnue, et c'est là que la moitié des élèves bloquent. Un lien non " +
        "déclarable mais très fécond : le <strong>chapitre 7</strong> (Logarithmes et " +
        "exponentielles) donne le SENS de ce que les définitions D3 et D4 d'ici présentent comme " +
        "des règles mécaniques. Le chapitre est techniquement autonome sans lui, mais un groupe " +
        "qui a vu le chapitre 7 comprendra les exercices 6 et 8 au lieu de les exécuter. Si vous " +
        "traitez les deux, traitez le 7 d'abord.<br/><br/>" +
        "<strong>Ce que les exercices tirés ne travaillent PAS — à lire avant de composer un " +
        "devoir.</strong> Deux absences. D'abord, la <strong>fausse solution introduite par la " +
        "mise au carré</strong> : le piège du cours avertit que $\\sqrt{x} = -2$ n'a pas de " +
        "solution mais que l'élévation au carré en fabrique une, or aucun exercice ne présente ce " +
        "cas — la question 4 de l'évaluation vérifie d'ailleurs sa solution, mais elle est " +
        "valide. Ensuite, le choix du <strong>signe d'une racine</strong> : tous les exercices " +
        "portent sur des grandeurs positives (longueur, vitesse, résistance) où la solution " +
        "négative s'écarte sans discussion, donc la question ne se pose jamais vraiment. Si ces " +
        "deux points vous importent, composez vos énoncés : ce sont deux erreurs de " +
        "raisonnement, pas de calcul, et elles coûtent cher en examen.",

  /* Quatre erreurs typiques. Règles éditoriales respectées sans exception :
     jamais de renvoi vers l'évaluation notée, jamais de renvoi non vérifié
     contre le tirage réel de la graine.

     LES QUATRE ONT UN RENVOI : avec six moules couvrant quatre
     transformations différentes, le chapitre est l'un des plus riches du
     recueil et chaque erreur trouve un support qui la déclenche vraiment.

     LE PUBLIC CHANGE LE TON DES CAUSES. Adultes en reprise d'études et
     alternants : leurs erreurs sont des procédures anciennes mal
     reconstruites, appliquées avec assurance. Ce chapitre réveille par
     ailleurs beaucoup d'anxiété — la racine carrée et le logarithme sont les
     deux objets que ce public déclare le plus souvent « n'avoir jamais
     compris ». Le champ `cause` en tient compte. */
  erreurs: [
    {
      titre: "Appliquer la transformation inverse avant d'avoir isolé le terme",
      eleve: "Sur $u_C = 24(1 - e^{-t})$ qui vaut $18$, l'élève « passe au $\\ln$ » tout de suite et " +
             "écrit $\\ln 18 = \\ln 24 + \\ln(1) - t$, ou quelque chose d'approchant. Il produit " +
             "une expression dont il ne sait plus quoi faire.",
      cause: "L'élève a parfaitement retenu la règle utile — « pour enlever une exponentielle, on " +
             "prend le logarithme » — et il l'applique dès qu'il en voit une. Ce qui manque est " +
             "l'ORDRE : la transformation ne s'applique qu'à une exponentielle SEULE d'un côté, " +
             "pas à une expression qui la contient. Cette condition d'emploi n'est presque jamais " +
             "énoncée, parce qu'elle paraît évidente à qui maîtrise déjà. Chez un adulte, elle " +
             "est d'autant plus difficile à retrouver que sa mémoire du logarithme est un unique " +
             "réflexe (« le ln annule le exp ») sans la procédure qui va autour. Ce n'est pas de " +
             "la précipitation : c'est une règle vraie appliquée hors de son domaine, exactement " +
             "comme au chapitre 7 pour $\\ln(a+b)$.",
      remede: "Imposer la <strong>règle des deux temps</strong>, écrite au tableau et jamais " +
              "abrégée : <strong>d'abord ISOLER, ensuite TRANSFORMER</strong>. Sur l'exemple : " +
              "$18 = 24(1 - e^{-t})$ donne $0{,}75 = 1 - e^{-t}$, donne $e^{-t} = 0{,}25$, et " +
              "SEULEMENT LÀ on applique le logarithme. Trois lignes avant le $\\ln$, et aucune " +
              "n'est facultative.<br/><br/>" +
              "Faire <strong>entourer le terme à isoler</strong> avant de commencer, physiquement, " +
              "au crayon : ici $e^{-t}$. Tant qu'il n'est pas seul d'un côté du signe égal, on " +
              "n'a pas le droit d'écrire un $\\ln$. La contrainte paraît rigide ; c'est ce qui la " +
              "rend efficace, parce qu'elle remplace un jugement par une vérification.<br/><br/>" +
              "Rappeler enfin la <strong>raison profonde</strong>, qui vaut pour tout le " +
              "chapitre : $\\ln$, $\\sqrt{\\ }$ et les autres transformations ne se " +
              "DISTRIBUENT pas sur une somme. $\\ln(a - b)$ n'est pas $\\ln a - \\ln b$, " +
              "$\\sqrt{a + b}$ n'est pas $\\sqrt a + \\sqrt b$ — le piège du cours le signale " +
              "pour le logarithme. Le dire une fois pour toutes évite quatre erreurs différentes.",
      /* Vérifié contre le tirage réel (2026-09-17, graine 20260816 + rang 11) :
         l'exercice 6 donne u_C(t) = 24(1 - e^(-t/1)) et demande t pour
         u_C = 18 V, réponse 1,39 s. C'est LE tirage du chapitre où l'ordre
         est obligatoire : l'exponentielle est enfermée dans une parenthèse
         avec une soustraction ET multipliée par 24, donc il faut DEUX
         isolations successives avant toute transformation. L'élève qui
         attaque au ln produit une expression sans issue — l'erreur se
         sanctionne d'elle-même, ce qui est exactement ce qu'on veut d'un
         support de remédiation. Préféré à l'exercice 8
         (u_C = 48(1 - e^(-t/5)), u_C = 43,2 V, réponse 11,51 s) parce que sur
         le 8 le rapport 43,2/48 = 0,9 est moins « rond » que 18/24 = 0,75 :
         sur le 6 l'élève voit tout de suite que 0,75 puis 0,25 sont des
         nombres propres, ce qui le conforte dans la bonne voie et isole la
         difficulté sur l'ORDRE plutôt que sur l'arithmétique. Les exercices
         1 et 7 (ressort) posent le même problème en plus simple (une seule
         isolation avant la racine) et constituent une bonne entrée en
         matière. */
      exercice: { type: "exercice", n: 6 }
    },
    {
      titre: "Prendre la racine terme à terme dans $Z = \\sqrt{R^2 + X^2}$",
      eleve: "Pour $Z = 100$ et $X = 30$, l'élève écrit $R = 100 - 30 = 70\\ \\Omega$ au lieu de " +
             "$95{,}4\\ \\Omega$. Ou il calcule $\\sqrt{100 - 30} = 8{,}4$.",
      cause: "C'est la surgénéralisation la plus tenace des mathématiques élémentaires : on attend " +
             "de toute opération qu'elle se distribue, parce que la multiplication et la division " +
             "le font ($\\sqrt{ab} = \\sqrt a \\sqrt b$ est d'ailleurs vrai). La racine d'une " +
             "somme est l'exception, et rien dans son écriture ne le signale — la barre de racine " +
             "recouvre les deux termes exactement comme elle en recouvrirait un seul. S'y ajoute " +
             "un renfort spécifique à ce contexte : sur une impédance, l'élève SAIT que $Z$, $R$ " +
             "et $X$ sont liées et que $Z$ est la plus grande ; soustraire lui paraît donc " +
             "raisonnable, et ce n'est pas absurde — c'est simplement la mauvaise opération. " +
             "Un adulte qui répond $70\\ \\Omega$ a un modèle mental correct du problème et une " +
             "technique fausse.",
      remede: "Faire tester sur un <strong>contre-exemple numérique</strong> avant toute " +
              "explication, parce que c'est ce qui convainc : $\\sqrt{9 + 16} = \\sqrt{25} = 5$, " +
              "tandis que $\\sqrt 9 + \\sqrt{16} = 3 + 4 = 7$. Deux nombres différents, vérifiés " +
              "en dix secondes. La règle est fausse, et l'élève l'a constaté lui-même.<br/><br/>" +
              "Imposer ensuite la <strong>méthode du carré des deux membres</strong>, qui est la " +
              "seule juste et qui est mécanique : $Z^2 = R^2 + X^2$, donc " +
              "$R^2 = Z^2 - X^2 = 10\\,000 - 900 = 9100$, donc $R = 95{,}4$. Trois lignes, " +
              "aucune décision — on élève d'abord, on soustrait ensuite, on extrait en dernier. " +
              "C'est l'exemple 1 du cours, mot pour mot.<br/><br/>" +
              "Ancrer enfin le <strong>repère du triangle rectangle</strong>, qui rend l'erreur " +
              "visible sans aucun calcul : $Z$ est l'hypoténuse, $R$ et $X$ sont les côtés. Un " +
              "côté est toujours plus court que l'hypoténuse mais PAS de la différence des deux " +
              "autres. Quand $X$ est petit devant $Z$, $R$ est presque égal à $Z$ — ici $95{,}4$ " +
              "contre $100$, et non $70$. Sur une mesure d'impédance de ligne, c'est ce repère " +
              "qui permet de flairer une valeur aberrante avant de la reporter sur un schéma.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 2 donne
         Z = 100 ohms et X = 30 ohms, réponse R = 95,4 ohms. Le tirage est
         idéal pour cette erreur parce que X est PETIT devant Z : la vraie
         réponse (95,4) est très proche de Z, alors que la soustraction naïve
         donne 70 — un écart de 25 ohms parfaitement visible, et surtout un
         écart qui va dans le sens que le repère du remède rejette (R doit
         être presque égal à Z quand X est petit). Préféré à l'exercice 9
         (Z = 130, X = 60, réponse 115,3) parce que sur le 9 la soustraction
         donne 70 également, mais la vraie réponse (115,3) est plus éloignée
         de Z : le contraste « R presque égal à Z » y est moins frappant, donc
         le repère géométrique moins parlant. Coïncidence à connaître : les
         deux exercices donnent 70 par l'erreur — ne pas les enchaîner dans un
         devoir. L'exercice 9 fait néanmoins un bon second support. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Oublier le facteur $\\frac{1}{2}$ ou le coefficient avant de prendre la racine",
      eleve: "Sur un ressort de raideur $k = 400$ N/m stockant $E_p = 0{,}50$ J, l'élève écrit " +
             "$x = \\sqrt{0{,}50/400} = 0{,}035$ m et annonce $3{,}5$ cm au lieu de $5$ cm. Il a " +
             "oublié de doubler.",
      cause: "La formule $E_p = \\frac{1}{2}kx^2$ est mémorisée comme un bloc, et le $\\frac{1}{2}$ " +
             "y est le morceau le plus discret : il n'a pas d'unité, il n'a pas de nom, et il " +
             "disparaît le premier quand on reconstruit la formule de tête. L'élève qui l'oublie " +
             "n'a pas fauté sur la technique de résolution — il a divisé, il a extrait, tout est " +
             "juste — mais sur une donnée. Et l'erreur est particulièrement sournoise : elle ne " +
             "produit pas un résultat absurde, seulement un résultat plus petit d'un facteur " +
             "$\\sqrt 2$, soit $30\\ \\%$. Un adulte qui vérifie son ordre de grandeur ne voit " +
             "rien. Rappelons d'ailleurs que le chapitre 10 l'a dit : l'analyse dimensionnelle " +
             "elle-même ne détecte PAS un facteur numérique manquant. C'est le type d'erreur " +
             "qu'aucun contrôle automatique n'attrape.",
      remede: "Faire <strong>isoler le carré complètement avant d'extraire</strong>, en une ligne " +
              "séparée et écrite : $x^2 = \\dfrac{2E_p}{k} = \\dfrac{2 \\times 0{,}50}{400} = " +
              "0{,}0025$, PUIS $x = 0{,}05$ m. Séparer les deux gestes rend le $\\frac{1}{2}$ " +
              "visible au moment où il compte, au lieu de le laisser se perdre dans une " +
              "manipulation mentale.<br/><br/>" +
              "Faire <strong>vérifier en remontant</strong>, ce qui est le seul contrôle qui " +
              "attrape cette erreur : $\\frac{1}{2} \\times 400 \\times 0{,}05^2 = 0{,}50$ J. " +
              "Cela tombe juste. Avec $x = 0{,}035$, on obtiendrait $0{,}245$ J, soit la moitié " +
              "de l'énoncé — l'écart se voit et se nomme. Le cours l'exige d'ailleurs pour les " +
              "racines ; l'étendre à toutes les résolutions est le meilleur réflexe du " +
              "chapitre.<br/><br/>" +
              "Nommer enfin l'<strong>ampleur de l'erreur</strong>, qui explique pourquoi elle " +
              "est dangereuse : oublier un facteur 2 sous une racine donne $30\\ \\%$ d'écart, " +
              "pas $50\\ \\%$. C'est trop peu pour choquer et trop pour être toléré. Sur un " +
              "dimensionnement de butoir de quai ou d'amortisseur, $30\\ \\%$ de course en moins, " +
              "c'est un élément qui arrive en butée.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         k = 400 N/m et E_p = 0,50 J, réponse x = 5 cm. Le tirage est retenu
         pour une propriété précieuse : la bonne réponse est un nombre ROND
         (5 cm exactement), alors que l'erreur donne 3,54 cm — un nombre sale.
         L'élève dispose donc d'un signal de plus que le simple écart : quand
         le résultat tombe rond, c'est en général qu'on a pris la bonne
         formule. Préféré à l'exercice 7 (k = 800, E_p = 4,00 J, réponse
         10 cm) parce que sur le 7, l'oubli du facteur 2 donne 7,07 cm, un
         nombre qui reste plausible pour un tampon de quai ; et surtout parce
         que sur le 1 les nombres sont assez petits pour que tout le calcul
         se pose de tête une fois la formule correctement isolée. Les
         exercices 4, 5, 11 et 12 (énergie cinétique et pression dynamique)
         portent le MÊME facteur 1/2 dans quatre contextes différents : les
         donner en série est le meilleur moyen d'installer la vérification
         du remède. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Inverser le signe en passant du pH à la concentration",
      eleve: "Pour un $pH = 3$, l'élève annonce $[H^+] = 10^{3} = 1000$ mol/L au lieu de " +
             "$10^{-3}$ mol/L. Ou il écrit $[H^+] = -3$, sans même remarquer qu'une concentration " +
             "négative n'existe pas.",
      cause: "La formule $pH = -\\log_{10}[H^+]$ porte un signe moins dont la RAISON n'est jamais " +
             "expliquée : il est là uniquement pour que le pH soit un nombre positif et " +
             "maniable, puisque les concentrations en ions sont toutes très petites. Ce moins " +
             "n'a aucune signification chimique, il est purement cosmétique — et c'est " +
             "précisément ce qui le rend impossible à retenir par le sens. L'élève qui inverse la " +
             "relation doit donc se souvenir de placer un signe dont il ignore la fonction, ce " +
             "qui est la pire situation de mémorisation qui soit. S'y ajoute chez un adulte le " +
             "souvenir scolaire du pH comme « une échelle de 0 à 14 » sans lien avec une " +
             "concentration, donc sans aucun ancrage numérique pour se contrôler.",
      remede: "Donner d'abord la <strong>raison du signe moins</strong>, ce qui supprime la " +
              "mémorisation : les concentrations en ions $H^+$ valent $10^{-3}$, $10^{-7}$, " +
              "$10^{-12}$ mol/L — toujours des exposants négatifs. Le moins de la formule ne fait " +
              "que les retourner pour donner des pH de $3$, $7$ ou $12$. Une fois cette phrase " +
              "posée, l'inversion se reconstruit : un pH positif vient forcément d'un exposant " +
              "négatif.<br/><br/>" +
              "Installer ensuite l'<strong>équivalence à retenir dans les deux sens</strong>, " +
              "sous sa forme la plus courte : $pH = 3$ signifie " +
              "$[H^+] = 10^{-3}$ mol/L, et réciproquement. La règle tient en une ligne : " +
              "<strong>le pH est l'exposant, changé de signe</strong>. C'est la définition D4 du " +
              "cours, dépouillée.<br/><br/>" +
              "Ancrer enfin un <strong>contrôle de domaine</strong> qui rejette l'erreur sans " +
              "aucun calcul : une concentration en ions $H^+$ dans une solution aqueuse est " +
              "TOUJOURS un nombre minuscule, jamais supérieure à $1$ mol/L. $1000$ mol/L est " +
              "physiquement impossible. Sur un bain de traitement de surface ou une eau de " +
              "process — les contextes exacts des exercices — c'est le genre de valeur qu'un " +
              "automate refuserait, et qu'un technicien doit savoir rejeter de lui-même.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 10 donne
         pH = 3 et demande [H+], réponse 0,001 mol/L. Choisi plutôt que
         l'exercice 3 (pH = 6, réponse 0,000001) pour une raison de lisibilité
         à la correction : sur le 10, l'erreur de signe donne 1000, un nombre
         franchement absurde qui déclenche immédiatement le contrôle de
         domaine du remède. Sur le 3, elle donnerait 10^6, tout aussi absurde,
         mais la bonne réponse (0,000001) est un nombre que beaucoup d'élèves
         peinent à écrire correctement en décimal — la difficulté de notation
         se mêle alors à la difficulté de signe et brouille le diagnostic.
         Sur le 10, 0,001 s'écrit sans hésitation : ce qui reste, c'est
         exactement l'erreur qu'on cherche. L'exercice 3 fait un bon second
         support, à donner après, pour travailler la notation scientifique des
         très petits nombres (et il renvoie utilement au chapitre 4). */
      exercice: { type: "exercice", n: 10 }
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     QUATRE questions ici — cas le plus fréquent du dossier, mais pas une
     règle (la trigonométrie en a huit). Compter dans le dump avant d'écrire.

     ÉTIQUETAGE HONNÊTE (règle du projet) : la compétence est lue sur la tâche
     RÉELLEMENT demandée, jamais choisie pour équilibrer la grille.

     Q1 — décharge $u_C(t) = 48 e^{-t/3}$, trouver $t$ pour $u_C = 12$ V.
          L'équation est fournie et la méthode D3 du cours en donne les trois
          étapes (diviser, appliquer $\ln$, multiplier). Exécution d'une
          procédure connue sur des nombres donnés. « calculer ».
     Q2 — puissance acoustique depuis $L_W = 10\log_{10}(W/W_0)$ avec
          $L_W = 85$ dB, résultat en mW. La formule est donnée, mais l'énoncé
          enchaîne plusieurs décisions que rien n'annonce : diviser par 10,
          repasser en puissance de dix, multiplier par $W_0 = 10^{-12}$, puis
          convertir en milliwatts. Chaque maillon conditionne le suivant et
          l'ordre n'est pas donné. « raisonner ».
     Q3 — allongement d'un ressort depuis $E_p = \frac{1}{2}kx^2 = 2{,}5$ J.
          Même moule que les exercices 1 et 7, formule fournie : isoler le
          carré, extraire, convertir en cm. Exécution. « calculer ».
     Q4 — résoudre $\sqrt{3x - 5} = 4$. Équation purement mathématique, sans
          contexte : élever au carré, résoudre le premier degré, et — la
          correction y insiste — VÉRIFIER la solution dans l'équation
          d'origine, ce que le piège du cours réclame parce que la mise au
          carré peut fabriquer de fausses solutions. La vérification et sa
          justification font de cette question un enchaînement de déductions
          plutôt qu'une application. « raisonner ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2.
     « chercher », « modéliser », « représenter » et « communiquer » ne sont
     PAS mobilisés : aucune question ne demande de tâtonner, de traduire une
     situation concrète en relation (toutes les formules sont fournies, y
     compris dans les énoncés à contexte technique), de tracer ni de rédiger.
     Constat sur les quatre énoncés, non corrigé par complaisance. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner"]
  }
};
