/* =========================================================
   Spark Learning – js/data/prof/bts/bts-loi-normale.prof.js
   Fiche professeur du chapitre « Loi normale » (programme BTS), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine
   du livre 20260816 + 17 (ce chapitre est le dix-huitième de `bts-maths` :
   les quatorze de `bts-prep` le précèdent).

   18 énoncés tirés, dont 12 numérotés et 6 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE, et ce moule est d'une pauvreté
   particulière. Chacun donne une loi $\mathcal{N}(\mu, \sigma^2)$ et demande
   la BORNE SUPÉRIEURE de l'intervalle $[\mu - k\sigma ; \mu + k\sigma]$ pour
   $k$ valant 1, 2 ou 3. La tâche se réduit donc à l'addition
   $\mu + k\sigma$ — une addition et une multiplication d'entiers.

   Ce que cela implique et qu'il faut avoir en tête avant d'écrire la
   moindre remédiation : l'étudiant peut réussir les douze exercices
   SANS JAMAIS SAVOIR ce qu'est une loi normale. Aucun énoncé ne demande la
   borne INFÉRIEURE, aucun ne demande le POURCENTAGE associé (68-95-99,7),
   aucun ne demande de z-score, aucun ne demande d'intervalle de confiance,
   aucun ne mentionne $\sqrt{n}$. La règle empirique, qui est le cœur du
   chapitre, n'est jamais mise en jeu : $k$ sert de coefficient
   multiplicateur, pas de niveau de confiance.

   Or quatre des cinq questions de l'évaluation portent précisément sur ce
   que les exercices ne travaillent pas.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux,
   ce que le projet tient pour pire qu'un renvoi absent.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-loi-normale"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 3 (Statistiques et Calculs d'Incertitudes, `statistiques`) : RETENU,
     et c'est le prérequis le plus solide du dossier. Trois raisons, chacune
     vérifiable dans le cours de ce chapitre-ci :
       - $\mu$ et $\sigma$ ne sont définis ici que par contraste avec
         $\bar{x}$ et $s$ du chapitre 3 (voir le piège du cours, qui porte
         exactement sur cette distinction population/échantillon) ;
       - l'intervalle de confiance $\bar{x} \pm 1{,}96\,\sigma/\sqrt{n}$ (D4)
         est la version « avec quantile exact » de l'incertitude élargie
         $\bar{x} \pm k u_A$ du chapitre 3, et le $\sqrt{n}$ au dénominateur y
         est identique ;
       - le facteur $k = 2$ admis au chapitre 3 comme convention trouve ici
         sa justification ($1{,}96 \approx 2$). Le chapitre 4 PAIE la dette
         contractée au chapitre 3.

     Candidats examinés et ÉCARTÉS :
     - ch. 9 (Lois de probabilité discrètes) : le lien existe — la binomiale
       tend vers la loi normale quand $n$ grandit, et le théorème central
       limite est cité dans l'introduction — mais il n'est jamais UTILISÉ
       dans ce chapitre : aucune question, aucun exercice, aucune méthode n'y
       recourt. Un prérequis affiché mais non utilisé trompe le lecteur du
       tableau autant qu'un prérequis manquant. C'est en outre le chapitre 9
       qui cite l'approximation, donc le lien joue plutôt dans l'autre sens.
     - ch. 8 (Statistiques à deux variables) : aucun lien, et rang supérieur.
     - ch. 1 (Complexes), ch. 2 (Équations différentielles) : aucun lien.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : la racine carrée
     ($\sqrt{n}$, $\sqrt{64} = 8$), les pourcentages et le calcul sur les
     puissances viennent de la REMISE À NIVEAU (`bts-prep`), qui est dans un
     AUTRE dossier. `prerequis` ne vise qu'un chapitre du même dossier, donc
     rien ne les affichera. */
  prerequis: [3],

  /* Rang conseillé (2026-09-17) : rang 4 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 18 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 4 est celui du livre, et les deux ordres coïncident.

     Le placement est contraint par le chapitre 3 (Statistiques), qui doit
     précéder pour deux raisons développées ci-dessus : il installe $\bar{x}$
     et $s$, dont $\mu$ et $\sigma$ se distinguent, et il laisse en suspens la
     justification du facteur $k = 2$ que ce chapitre-ci fournit. Le déplacer
     plus tard le séparerait de ce dont il est la suite immédiate ; le
     déplacer plus tôt supposerait de déplacer aussi le chapitre 3. */
  rangConseille: 4,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare
     aucun groupement, et la loi normale est l'un des rares points présents
     dans presque tous les groupements — mais sous des formes inégales : ici
     la lecture de table, là le seul usage de la calculatrice, ailleurs les
     tests d'hypothèse.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« calculer une probabilité », « centrer-réduire », « intervalle de
     confiance ») et n'inventent aucune spécialité. La `note` le signale
     explicitement, pour qu'un enseignant vérifie le référentiel de SA filière
     avant de les citer. */
  attendus: [
    "Reconnaître une situation modélisée par une loi normale et en identifier les paramètres",
    "Centrer et réduire une variable pour calculer une probabilité à l'aide de la table ou de la calculatrice",
    "Déterminer un intervalle de confiance d'une moyenne et l'interpréter dans le contexte étudié"
  ],

  note: "La loi normale — paramètres $\\mu$ et $\\sigma$, règle des $68$-$95$-$99{,}7$, " +
        "centration-réduction, intervalle de confiance — relève du tronc commun de mathématiques " +
        "du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité. La loi normale figure dans presque tous les groupements, mais sous des formes " +
        "inégales — lecture de table ici, calculatrice seule là, tests d'hypothèse ailleurs : " +
        "c'est un point où les référentiels divergent particulièrement.<br/><br/>" +
        "<strong>Des prérequis comptent et ne seront pas affichés.</strong> Le chapitre s'appuie " +
        "sur « Statistiques et Calculs d'Incertitudes » (chapitre 3 de cette partie) — cela, la " +
        "colonne « S'appuie sur » l'affiche. Mais il suppose aussi de manier une <strong>racine " +
        "carrée</strong> ($\\sqrt{64} = 8$ dans le devoir) et des <strong>pourcentages</strong>, " +
        "qui sont dans la <strong>remise à niveau</strong>, l'autre partie de l'ouvrage. Un " +
        "prérequis ne pouvant viser qu'un chapitre de la même partie, <strong>rien ne le " +
        "montrera</strong>.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices, et " +
        "elle est sévère.</strong> Les douze énoncés numérotés sont <strong>tous le même " +
        "exercice</strong> : une loi $\\mathcal{N}(\\mu, \\sigma^2)$ est donnée et l'on demande la " +
        "<strong>borne supérieure</strong> de $[\\mu - k\\sigma ; \\mu + k\\sigma]$. La tâche se " +
        "réduit donc à l'addition $\\mu + k\\sigma$. Aucun énoncé ne demande la borne " +
        "<strong>inférieure</strong>, aucun ne demande le <strong>pourcentage</strong> associé à " +
        "$k$, aucun ne calcule de <strong>z-score</strong>, aucun ne fait intervenir " +
        "$\\sqrt{n}$ ni d'intervalle de confiance. Autrement dit : <strong>un étudiant peut " +
        "réussir les douze exercices sans savoir ce qu'est une loi normale</strong>. Le $k$ y est " +
        "un coefficient multiplicateur, pas un niveau de confiance — et c'est précisément " +
        "l'inverse de ce que le chapitre veut enseigner.<br/><br/>" +
        "Or <strong>quatre des cinq questions du devoir noté</strong> portent sur ce que les " +
        "exercices ne travaillent pas. L'exemple résolu du cours (les résistances de $470$ Ω) fait, " +
        "lui, le chemin complet : intervalle de confiance, comparaison à la tolérance, conclusion " +
        "de conformité. <strong>C'est lui qu'il faut prendre comme modèle de la tâche " +
        "attendue</strong>, et non les exercices. Prévoir impérativement trois ou quatre énoncés " +
        "demandant un pourcentage et un intervalle de confiance, que le manuel ne fournit pas.",

  erreurs: [
    {
      titre: "Confondre $\\sigma$ et $\\sigma^2$ dans la notation $\\mathcal{N}(\\mu, \\sigma^2)$",
      eleve: "Sur $\\mathcal{N}(68, 17^2)$, l'élève prend $\\sigma = 17^2 = 289$ et annonce une " +
             "borne supérieure de $357$ au lieu de $85$. Ou, dans l'autre sens, sur " +
             "$\\mathcal{N}(50\\,;\\,8^2)$ il calcule le z-score en divisant par $64$ au lieu " +
             "de $8$.",
      cause: "La notation est objectivement piégeuse, et il faut le reconnaître devant le groupe " +
             "plutôt que de traiter l'erreur comme de l'inattention : le second paramètre écrit " +
             "est la <strong>variance</strong> $\\sigma^2$, mais toutes les formules du chapitre " +
             "utilisent l'<strong>écart-type</strong> $\\sigma$. L'exposant $2$ est déjà là, " +
             "imprimé : l'étudiant qui l'applique une seconde fois ne fait qu'obéir à ce qu'il " +
             "voit. S'y ajoute le souvenir du chapitre 3, où l'on élevait bel et bien au carré " +
             "pour calculer une variance — le geste a donc été renforcé une semaine plus tôt, dans " +
             "un contexte où il était juste.",
      remede: "Faire <strong>écrire $\\sigma$ à part</strong>, sur sa propre ligne, avant tout " +
              "calcul : « $\\mathcal{N}(68, 17^2)$ donc $\\mu = 68$ et $\\sigma = 17$ ». Une ligne " +
              "de dépouillement des données, systématique, qui règle la question avant qu'elle ne " +
              "se pose. C'est aussi ce que fait tout sujet d'examen bien rédigé.<br/><br/>" +
              "Donner la <strong>clé de lecture de la notation</strong>, qui la rend définitivement " +
              "transparente : le carré est <strong>déjà écrit</strong>. $\\mathcal{N}(68, 17^2)$ " +
              "se lit « moyenne $68$, écart-type $17$ » — le $17$ est directement l'écart-type, il " +
              "n'y a rien à en faire. Si l'énoncé avait voulu dire « variance $289$ », il aurait " +
              "écrit $\\mathcal{N}(68, 289)$, sans exposant.<br/><br/>" +
              "Installer un <strong>contrôle d'ordre de grandeur</strong> qui attrape l'erreur à " +
              "coup sûr : $\\sigma$ est une <strong>largeur</strong>, dans la même unité que $\\mu$ " +
              "et généralement bien plus petite que lui. Un écart-type de $289$ sur une moyenne de " +
              "$68$ signifierait que les pièces usinées varient de plus de quatre fois leur propre " +
              "cote — un atelier qui produirait cela serait fermé. En métrologie, un $\\sigma$ " +
              "comparable à $\\mu$ est le signe d'une erreur de calcul, jamais d'un procédé.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + 17) : l'exercice 1 est le diamètre de pièces
         usinées, N(68, 17²), k = 1, réponse 85 (= 68 + 17). C'est le meilleur
         support de cette erreur, et les valeurs le justifient précisément :
           - sigma = 17 est le plus GRAND écart-type du tirage relativement à
             sa moyenne (17 pour 68, soit 25 %), donc la confusion sigma/
             sigma² y est la plus spectaculaire : 289 contre 17, et une borne
             de 357 au lieu de 85 ;
           - k = 1, donc rien d'autre ne peut se tromper dans le calcul : la
             réponse est la simple somme mu + sigma. L'exercice ISOLE l'erreur
             visée, ce qui est exactement ce qu'on demande d'un support de
             remédiation. Sur un exercice à k = 3 (le 2, le 4, le 8, le 10),
             une erreur de coefficient viendrait se superposer et brouillerait
             le diagnostic ;
           - le contrôle d'ordre de grandeur du remède se démontre dessus
             sans effort : des pièces usinées dont le diamètre varierait de
             289 centièmes de mm autour de 68 n'existent pas.
         C'est en outre le premier énoncé du chapitre. Distinct du renvoi de
         l'erreur 3 (exercice 4), conformément à la règle du projet : deux
         erreurs d'un même chapitre ne pointent jamais le même énoncé. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Croire que $\\pm 2\\sigma$ contient tout, ou confondre les trois pourcentages",
      eleve: "L'élève annonce que $[\\mu - 2\\sigma ; \\mu + 2\\sigma]$ contient $99{,}7\\,\\%$ des " +
             "valeurs, ou que $\\pm 1\\sigma$ en contient $95\\,\\%$. Interrogé sur ce qui se passe " +
             "hors de $\\pm 3\\sigma$, il répond « rien » — alors qu'il y reste $0{,}3\\,\\%$ des " +
             "pièces, c'est-à-dire trois sur mille.",
      cause: "Les trois nombres $68$, $95$ et $99{,}7$ s'apprennent ensemble, dans le même souffle, " +
             "et rien dans la formule ne les relie à $1$, $2$ et $3$ : c'est une correspondance " +
             "arbitraire à mémoriser, donc une correspondance qui se permute. L'idée que la courbe " +
             "ne touche <strong>jamais</strong> l'axe est en outre contre-intuitive pour qui " +
             "n'a pas manipulé de fonction à asymptote : on imagine spontanément que la cloche " +
             "« s'arrête » quelque part. Enfin, l'expérience de l'atelier renforce l'erreur — on " +
             "ne voit jamais de pièce à $4\\sigma$, donc on conclut qu'il n'y en a pas, alors " +
             "qu'il y en a une sur seize mille.",
      remede: "Faire <strong>dessiner la cloche une fois pour toutes</strong>, avec les trois " +
              "zones hachurées et les trois nombres écrits dessus. Une figure au tableau, recopiée " +
              "sur la première page du cahier, remplace trois nombres flottants par une image " +
              "ordonnée : les surfaces croissent visiblement avec $k$, et l'ordre ne peut plus " +
              "s'inverser.<br/><br/>" +
              "Retenir plutôt <strong>ce qui reste dehors</strong>, qui est bien plus parlant en " +
              "production que ce qui est dedans : $\\pm 1\\sigma$ laisse dehors <strong>une pièce " +
              "sur trois</strong>, $\\pm 2\\sigma$ <strong>une sur vingt</strong>, $\\pm 3\\sigma$ " +
              "<strong>trois sur mille</strong>. Dit ainsi, chacun sent immédiatement qu'un " +
              "contrôle à $\\pm 1\\sigma$ ne contrôle rien du tout.<br/><br/>" +
              "Ancrer sur une <strong>référence métier que les étudiants ont déjà entendue</strong> : " +
              "la démarche « six sigma » vise moins de quatre pièces défectueuses par million. " +
              "C'est dire que même $\\pm 3\\sigma$ — trois pour mille, soit trois mille par " +
              "million — est considéré comme <strong>largement insuffisant</strong> dans " +
              "l'industrie exigeante. La queue de la courbe n'est jamais vide, et c'est même tout " +
              "le sujet du contrôle qualité.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés utilisent k = 1, 2 ou 3 comme simple COEFFICIENT
         MULTIPLICATEUR (mu + k×sigma), et aucun ne demande le pourcentage
         associé. Les mots « 68 », « 95 », « 99,7 » et « confiance »
         n'apparaissent dans AUCUN des douze énoncés. Un étudiant qui traite
         les douze exercices n'a donc pas une seule occasion de rencontrer la
         règle empirique — il apprend seulement que k vaut 1, 2 ou 3 et qu'on
         multiplie. Pointer l'un d'eux serait exactement le contresens que le
         projet interdit : l'exercice ne travaille pas ce qu'on veut
         remédier. Les questions 2 et 5 de l'évaluation la travaillent, mais
         une remédiation ne renvoie jamais vers le devoir noté. Le remède
         ramène donc au cours (D2 et le récapitulatif, qui portent les trois
         pourcentages) et demande à l'enseignant de fabriquer le support. */
      exercice: null
    },
    {
      titre: "Calculer une borne sans la placer, ou confondre borne et intervalle",
      eleve: "Sur $\\mathcal{N}(112, 15^2)$ avec $k = 3$, l'élève annonce $157$ — juste — mais " +
             "interrogé sur la borne inférieure, il propose $157 - 15$, ou dit qu'elle vaut « la " +
             "même chose en négatif ». Il a exécuté une addition sans se représenter l'intervalle " +
             "qu'elle délimite.",
      cause: "Les douze énoncés demandent la borne SUPÉRIEURE, toujours, et une addition suffit à " +
             "y répondre. L'étudiant apprend donc, par douze répétitions, une <strong>procédure " +
             "sans objet</strong> : « je prends le premier nombre, j'ajoute $k$ fois le second ». " +
             "Rien dans cette procédure ne fait apparaître un intervalle, ni une symétrie, ni une " +
             "courbe. Ce n'est pas de la paresse : c'est ce que les exercices enseignent " +
             "réellement, et l'étudiant l'a parfaitement appris. L'erreur est donc dans le tirage " +
             "avant d'être dans la copie.",
      remede: "Exiger que l'<strong>intervalle complet soit écrit</strong> à chaque fois, même " +
              "quand l'énoncé ne demande qu'une borne : $[112 - 45 ; 112 + 45] = [67 ; 157]$, puis " +
              "seulement la réponse. Le surcoût est de dix secondes, et il transforme une addition " +
              "en lecture d'intervalle — c'est-à-dire en ce que le chapitre veut " +
              "enseigner.<br/><br/>" +
              "Faire <strong>placer les deux bornes sur un axe</strong>, avec $\\mu$ au milieu. La " +
              "<strong>symétrie</strong> devient alors une propriété visible et non une règle : " +
              "$\\mu$ est à égale distance des deux bornes, toujours, parce que la cloche est " +
              "symétrique. Un étudiant qui a vu le dessin ne propose plus « la même chose en " +
              "négatif ».<br/><br/>" +
              "Poser enfin la <strong>question de tolérance</strong>, qui donne à l'intervalle sa " +
              "raison d'être : une cote est spécifiée $[\\text{mini} ; \\text{maxi}]$, jamais par " +
              "un seul nombre. Demander la borne supérieure seule, c'est demander si les pièces " +
              "sont trop grosses — sans se soucier de celles qui seraient trop petites, qui sont " +
              "tout aussi <strong>rebutées</strong>. En contrôle de réception, on regarde toujours " +
              "les deux côtés.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 4 est le
         débit d'une pompe hydraulique, N(112, 15²), k = 3, réponse 157
         (= 112 + 45). C'est le meilleur support de cette erreur, et le choix
         de k = 3 en est la raison principale :
           - avec k = 3, l'écart 3×15 = 45 est GRAND devant mu = 112, donc
             l'intervalle complet [67 ; 157] est visiblement large et la
             question « et en dessous ? » se pose d'elle-même. Sur un exercice
             à k = 1 (le 1, le 5, le 7, le 11) l'écart est faible et
             l'intervalle passe inaperçu ;
           - les nombres sont ronds (15, 45, 157), donc la borne inférieure
             67 se calcule de tête : l'exigence du remède (écrire l'intervalle
             complet) ne coûte rien et ne peut pas être refusée pour raison
             de temps ;
           - le contexte, un débit de pompe, rend la borne inférieure
             concrètement importante : une pompe qui débite trop peu est aussi
             défaillante qu'une qui débite trop, ce qui n'est pas vrai de
             toutes les grandeurs.
         Les autres exercices à k = 3 sont le 2 (188, sigma 6), le 8 (147,
         sigma 15) et le 10 (123, sigma 6) ; le 4 les devance par la
         combinaison « grand sigma + grand k + nombres ronds ». Distinct du
         renvoi de l'erreur 1 (exercice 1), conformément à la règle du projet.
         */
      exercice: { type: "exercice", n: 4 }
    },
    {
      titre: "Oublier le $\\sqrt{n}$ de l'intervalle de confiance",
      eleve: "Sur $n = 64$ mesures, $\\bar{x} = 120$, $\\sigma = 16$, l'élève calcule la demi-" +
             "largeur $1{,}96 \\times 16 = 31{,}4$ au lieu de " +
             "$1{,}96 \\times 16/\\sqrt{64} = 3{,}92$. Il annonce un intervalle huit fois trop " +
             "large et conclut que rien n'est conforme.",
      cause: "L'oubli n'est pas typographique, il est <strong>conceptuel</strong>, et c'est la même " +
             "confusion qu'au chapitre 3 sous un autre habillage : on mélange la dispersion des " +
             "<strong>pièces</strong> ($\\sigma$, qui ne diminue jamais) et l'incertitude sur leur " +
             "<strong>moyenne</strong> ($\\sigma/\\sqrt{n}$, qui diminue avec l'échantillon). " +
             "L'étudiant qui a en tête « $\\pm 2\\sigma$ contient $95\\,\\%$ » — la règle qu'on " +
             "vient de lui faire mémoriser — applique cette formule à la moyenne, ce qui est un " +
             "transfert logique et faux. S'ajoute que $\\sqrt{n}$ est visuellement discret, coincé " +
             "sous une barre de fraction en fin de formule.",
      remede: "Faire nommer <strong>de quoi on parle</strong> avant d'écrire la formule, en une " +
              "question : « cet intervalle contient $95\\,\\%$ de QUOI ? ». Des pièces " +
              "individuelles ? Alors c'est $\\pm 2\\sigma$, sans $\\sqrt{n}$. Des moyennes " +
              "d'échantillons ? Alors c'est $\\pm 1{,}96\\,\\sigma/\\sqrt{n}$. Deux objets " +
              "différents, deux formules différentes — et la question posée à voix haute suffit " +
              "presque toujours à trancher.<br/><br/>" +
              "Montrer que le <strong>$\\sqrt{n}$ est ce qui rend l'échantillonnage utile</strong> : " +
              "sans lui, mesurer $64$ pièces donnerait la même précision qu'en mesurer une, et " +
              "aucun plan de contrôle n'aurait de sens. C'est lui qui justifie le coût du " +
              "prélèvement, et c'est donc le terme le plus important de la formule, pas le plus " +
              "accessoire.<br/><br/>" +
              "Installer enfin un <strong>contrôle de plausibilité</strong> immédiat : la " +
              "demi-largeur d'un intervalle de confiance est <strong>toujours plus petite</strong> " +
              "que $\\sigma$ dès que $n > 4$, et bien plus petite dès que $n$ est grand. Sur " +
              "$\\sigma = 16$ et $n = 64$, une demi-largeur de $31{,}4$ est aberrante — elle est " +
              "deux fois l'écart-type des pièces elles-mêmes. Un coup d'œil, et l'erreur est vue " +
              "avant d'être écrite.",
      /* Volontairement SANS renvoi, et pour une raison vérifiée sur le
         tirage : ni sqrt(n), ni n, ni 1,96, ni le mot « confiance »
         n'apparaissent dans aucun des douze énoncés numérotés. Les douze
         travaillent la DISPERSION DES INDIVIDUS (mu ± k sigma) et jamais
         l'incertitude sur une moyenne — qui est précisément l'objet de cette
         erreur. Pire pour la remédiation : les douze renforcent activement la
         formule SANS sqrt(n), puisque c'est celle qu'ils font pratiquer douze
         fois. Pointer l'un d'eux ne remédierait donc pas à l'erreur, il la
         consoliderait. Les questions 3 de l'évaluation la travaille, mais une
         remédiation ne renvoie jamais vers le devoir noté. Le seul support du
         livre est l'exemple résolu du cours (les résistances de 470 Ω, n = 36,
         sigma = 12, demi-largeur 1,96 × 12/6 = 3,92), qui fait le calcul
         complet avec le sqrt(n) : c'est vers lui que le remède ramène. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\mathcal{N}(50\,;\,8^2)$, calculer le z-score de $x = 66$. La
          formule $Z = (x - \mu)/\sigma$ est au programme du chapitre et son
          application est directe : soustraire, diviser. Exécution d'une
          procédure connue sur des nombres donnés : « calculer ».
     Q2 — $[\mu - 2\sigma ; \mu + 2\sigma]$ contient environ : $68$, $95$,
          $99{,}7$ ou $50\,\%$ ? Aucun calcul possible : c'est la restitution
          d'une correspondance apprise. On pourrait hésiter avec
          « raisonner », mais il n'y a rien à déduire — les trois valeurs sont
          mémorisées ou elles ne le sont pas : « calculer » au sens
          « appliquer une règle connue ».
     Q3 — $n = 64$, $\bar{x} = 120$, $\sigma = 16$ : demi-largeur de l'IC à
          $95\,\%$. La formule $1{,}96 \times \sigma/\sqrt{n}$ est ÉCRITE dans
          l'énoncé ; le travail est l'application numérique, racine carrée
          comprise. Aucun choix de méthode : « calculer ».
     Q4 — la centration-réduction transforme $X$ en : $\mathcal{N}(\mu, 1)$,
          $\mathcal{N}(0, \sigma^2)$, $\mathcal{N}(0,1)$ ou $\mathcal{N}(1,0)$ ?
          Les quatre options sont des permutations des mêmes symboles : il
          faut comprendre que la soustraction de $\mu$ recentre et que la
          division par $\sigma$ normalise, donc suivre l'effet de chaque
          opération sur chaque paramètre. C'est une déduction, pas une
          mémorisation : « raisonner ».
     Q5 — $X \sim \mathcal{N}(20\,;\,0{,}5^2)$ : quel pourcentage entre $19$
          et $21$ mm ? Le travail réel est de RECONNAÎTRE que $19$ et $21$
          sont exactement $\mu - 2\sigma$ et $\mu + 2\sigma$ — l'énoncé ne le
          dit pas, il donne des cotes en millimètres. Il faut donc traduire
          une situation concrète (un intervalle de tolérance) dans les termes
          du modèle avant de pouvoir répondre : « modéliser ».

     RÉPARTITION DE CE CHAPITRE : calculer 3, raisonner 1, modéliser 1.
     « chercher », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de produire ou lire un
     graphique, ni de rédiger une explication. C'est un constat sur les cinq
     énoncés, pas un choix — et il rejoint celui du corpus entier, dont les
     130 questions sont toutes `numeric` ou à choix multiple.

     À signaler : la Q5 est la seule question du chapitre à demander de
     reconnaître soi-même un $\pm 2\sigma$ derrière des cotes en millimètres,
     geste que les douze exercices ne travaillent jamais (ils donnent $k$
     explicitement, voir la `note`). Un étudiant qui n'aurait fait que les
     exercices la découvrirait le jour du devoir. */
  competences: {
    evaluation: ["calculer", "calculer", "calculer", "raisonner", "modéliser"]
  }
};
