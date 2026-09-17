/* =========================================================
   Spark Learning – js/data/prof/bts/bts-derivation-appliquee.prof.js
   Fiche professeur du chapitre « Dérivation appliquée » (programme BTS), pour
   l'édition du professeur. JAMAIS chargée par le site : ce fichier n'est
   référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   CHAPITRE PILOTE du dossier `bts` (2026-09-17) : les conventions des douze
   autres fiches du dossier y sont calées.

   RÉFÉRENTIEL MATHÉMATIQUES : chercher, modéliser, représenter, raisonner,
   calculer, communiquer.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 19. ATTENTION au rang : ce chapitre est le vingtième
   de `bts-maths` (les quatorze de `bts-prep` le précèdent), et il n'existe
   PAS dans `bts-maths-prep`. Sa graine est donc +19 et non +5.

   21 énoncés tirés, dont 12 numérotés et 9 en banque supplémentaire.

   FAIT DÉCISIF, et il contraint toute la fiche : les douze exercices
   numérotés sont TOUS LE MÊME MOULE. Chacun donne un profit
   $\Pi(x) = -ax^2 + bx - 10$ déjà construit et demande le $x^*$ qui le
   maximise ; seuls le contexte (imprimerie, menuiserie, panneaux solaires...)
   et les coefficients changent. Aucun exercice ne demande de CONSTRUIRE le
   profit à partir d'une recette et d'un coût, de calculer un coût marginal,
   de distinguer le seuil de rentabilité du maximum, ni de vérifier la nature
   de l'extremum — alors que ce sont les définitions D1, D3 et D4 du cours et
   trois des cinq questions de l'évaluation.

   Deux des quatre erreurs ci-dessous sont donc volontairement SANS renvoi :
   pointer un exercice qui ne travaille pas l'erreur serait un renvoi faux, ce
   que le projet tient pour pire qu'un renvoi absent. C'est l'inverse de
   `bts-prep-logarithme` (huit moules, quatre renvois sur quatre) : la
   richesse du tirage varie fortement d'un chapitre à l'autre dans ce corpus,
   et il faut la mesurer chapitre par chapitre.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["bts-derivation-appliquee"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `bts`, et non du livre —
     voir la longue note de `validerPrerequis` dans scripts/manuel/prof.js.
     Le dossier compte 13 chapitres (numéros locaux 1 à 13), qui sont les
     chapitres 15 à 27 de l'ouvrage `bts-maths`.

     ch. 5 (Fonctions réelles, `bts-fonctions-reelles`) : RETENU. C'est lui
     qui installe la dérivée — la notion, les formules de dérivation d'un
     polynôme, et la lecture du signe de $f'$. Ce chapitre-ci ne la redéfinit
     pas : il l'APPLIQUE à un contexte économique, en lui donnant des noms
     métier (coût marginal, recette marginale). Un étudiant qui ne sait pas
     dériver $-2x^2 + 16x - 10$ ne peut pas commencer.

     Candidats examinés et ÉCARTÉS :
     - ch. 7 (Intégrales appliquées) : c'est l'opération inverse, et le lien
       est réel — mais il joue dans l'AUTRE sens (l'intégrale s'appuie sur la
       dérivée, pas l'inverse). Le déclarer ici créerait un cycle que
       `validerPrerequis` refuse, à juste titre.
     - ch. 1 (Complexes) et ch. 2 (Équations différentielles) : aucun lien.
       Les équations différentielles utilisent la dérivée, mais elles ne sont
       pas un prérequis de ce chapitre-ci : elles en sont une autre
       application, parallèle et indépendante.
     - ch. 3 (Statistiques) à ch. 13 : aucun lien.

     PRÉREQUIS NON DÉCLARABLE, traité dans la `note` : la résolution d'une
     équation du premier degré ($-4x + 24 = 0$) vient du chapitre 2 de la
     REMISE À NIVEAU (`bts-prep-equations`), qui est dans un AUTRE dossier.
     `prerequis` ne vise qu'un chapitre du même dossier, donc rien ne
     l'affichera. */
  prerequis: [5],

  /* Rang conseillé (2026-09-17) : rang 6 DANS LE DOSSIER `bts` — ce qui
     correspond au chapitre 20 de l'ouvrage `bts-maths`.

     Attention à ne pas confondre les deux numérotations : `rangConseille` se
     compte par DOSSIER (1..13 ici), comme le fait `indexerParNiveau()`. Le
     rang 6 est celui du livre, et les deux ordres coïncident.

     Le placement est contraint par le chapitre 5 (Fonctions réelles), qui
     donne la dérivée et doit précéder. Il l'est aussi, plus faiblement, par
     l'intérêt de garder ensemble le bloc analyse : fonctions (5), dérivation
     appliquée (6), intégrales appliquées (7). Déplacer ce chapitre plus tôt
     supposerait de déplacer aussi le chapitre 5, ce qui n'a pas d'intérêt ;
     le déplacer plus tard casserait l'enchaînement vers les intégrales, qui
     réutilisent immédiatement la notion de primitive d'un coût marginal. */
  rangConseille: 6,

  /* Attendus. Le BTS n'a pas UN programme de mathématiques mais un TRONC
     COMMUN décliné par groupement (A, B, C, D...). Le module ne déclare aucun
     groupement, et l'optimisation par la dérivée avec vocabulaire économique
     relève des groupements tertiaires et de plusieurs BTS industriels.

     Les trois attendus ci-dessous restent donc sur le TRONC COMMUN
     (« calculer une dérivée », « étudier les variations », « résoudre un
     problème d'optimisation ») et n'inventent aucune spécialité. La `note` le
     signale explicitement, pour qu'un enseignant vérifie le référentiel de SA
     filière avant de les citer. */
  attendus: [
    "Calculer la dérivée d'une fonction polynôme et interpréter son signe en termes de variations",
    "Déterminer un extremum d'une fonction et vérifier sa nature par le signe de la dérivée",
    "Résoudre un problème d'optimisation issu d'un contexte économique et interpréter le résultat"
  ],

  note: "La dérivée appliquée à l'optimisation économique — coût marginal, recette marginale, " +
        "quantité optimale — relève du tronc commun de mathématiques du BTS.<br/><br/>" +
        "<strong>Vérifiez le référentiel de VOTRE filière avant de citer les attendus ci-dessus.</strong> " +
        "Il n'existe pas un programme unique de mathématiques en BTS, mais un tronc commun décliné " +
        "par <strong>groupement</strong> (A, B, C, D...). Le chapitre ne déclare pas le sien : les " +
        "trois attendus sont donc formulés sur le tronc commun et ne préjugent d'aucune " +
        "spécialité.<br/><br/>" +
        "<strong>Un prérequis compte et ne sera pas affiché.</strong> Le chapitre s'appuie sur " +
        "« Fonctions réelles » (chapitre 5 de cette partie), qui installe la dérivée — cela, la " +
        "colonne « S'appuie sur » l'affiche. Mais il suppose aussi de savoir résoudre une équation " +
        "du premier degré, qui est le chapitre 2 de la <strong>remise à niveau</strong>, dans " +
        "l'autre partie de l'ouvrage. Un prérequis ne pouvant viser qu'un chapitre de la même " +
        "partie, <strong>rien ne le montrera</strong> : si le groupe bute sur $-4x + 24 = 0$, c'est " +
        "là qu'il faut revenir, pas dans ce chapitre.<br/><br/>" +
        "<strong>La limite la plus importante à connaître avant de distribuer les exercices.</strong> " +
        "Les douze énoncés numérotés sont <strong>tous le même exercice</strong> : un profit " +
        "$\\Pi(x)$ déjà construit, dont on demande le maximum. Seuls le contexte et les " +
        "coefficients changent. Aucun ne demande de <strong>construire</strong> le profit à partir " +
        "d'une recette et d'un coût, de calculer un <strong>coût marginal</strong>, ni de " +
        "distinguer le <strong>seuil de rentabilité</strong> du maximum — alors que ce sont les " +
        "définitions D1, D3 et D4 du cours, et trois des cinq questions du devoir noté. L'exemple " +
        "résolu du cours (la PME de capteurs), lui, fait le chemin complet : " +
        "<strong>c'est lui qu'il faut prendre comme modèle de la tâche attendue</strong>, et non " +
        "les exercices. Prévoir en complément deux ou trois énoncés partant de $R$ et $C$ séparés, " +
        "que le manuel ne fournit pas.<br/><br/>" +
        "Dernier point, utile en correction : les coefficients tirés donnent " +
        "<strong>toujours</strong> un $x^*$ entier. C'est confortable, mais cela masque la " +
        "difficulté que le cours signale — si $x^* = 4{,}7$, il faut comparer $\\Pi(4)$ et " +
        "$\\Pi(5)$, une quantité produite étant entière. Posez au moins une fois la question à " +
        "l'oral sur un cas non entier.",

  erreurs: [
    {
      titre: "Confondre le seuil de rentabilité et le maximum de profit",
      eleve: "Pour trouver la quantité la plus rentable, l'élève résout $R(x) = C(x)$ au lieu de " +
             "$R'(x) = C'(x)$. Il trouve le point où l'entreprise commence à gagner de l'argent et " +
             "l'annonce comme l'optimum — deux quantités qui n'ont rien à voir.",
      cause: "Les deux conditions se ressemblent typographiquement (une égalité entre $R$ et $C$), " +
             "et le vocabulaire courant les confond : « rentable » désigne dans la langue de tous " +
             "les jours aussi bien « qui ne perd pas d'argent » que « qui en rapporte le plus ». " +
             "S'y ajoute, chez un public de BTS tertiaire, une intuition de gestion mal calibrée — " +
             "on cherche spontanément le point d'équilibre, parce que c'est l'indicateur dont on " +
             "entend parler en entreprise. Ce n'est pas une erreur de calcul : c'est une erreur de " +
             "traduction entre le métier et les mathématiques.",
      remede: "Séparer les deux questions en les faisant <strong>formuler en français</strong> " +
              "avant toute écriture : « à partir de quand est-ce que je ne perds plus d'argent ? » " +
              "(seuil de rentabilité, $\\Pi = 0$) et « quand est-ce que j'en gagne le plus ? » " +
              "(maximum, $\\Pi' = 0$). Deux questions différentes, donc deux équations " +
              "différentes.<br/><br/>" +
              "Appuyer sur la <strong>courbe</strong>, qui rend la distinction évidente et " +
              "définitive : le profit est une parabole tournée vers le bas. Elle coupe l'axe des " +
              "abscisses en <strong>deux</strong> points — les deux seuils de rentabilité, entrée " +
              "et sortie — et atteint son sommet <strong>entre les deux</strong>. Un dessin au " +
              "tableau suffit, et il montre du même coup qu'il y a deux seuils, ce que personne " +
              "n'anticipe.<br/><br/>" +
              "Retenir enfin la formule sous sa forme métier, qui est celle du cours et celle des " +
              "examens : <strong>on produit une unité de plus tant qu'elle rapporte plus qu'elle " +
              "ne coûte</strong>. On s'arrête quand recette marginale et coût marginal " +
              "s'égalisent. Dit ainsi, $R'(x) = C'(x)$ n'est plus une formule à retenir mais une " +
              "évidence de gestion.",
      /* Volontairement SANS renvoi, et vérifié sur le tirage : les douze
         exercices numérotés DONNENT tous le profit Pi(x) déjà construit et ne
         demandent que son maximum. Aucun ne met en scène une recette et un
         coût séparés, donc aucun ne peut faire apparaître la confusion entre
         R(x) = C(x) et R'(x) = C'(x) — l'élève n'y rencontre jamais R ni C.
         Pointer l'un d'eux enverrait l'enseignant vers une remédiation qui
         n'en est pas une. Le seul support du livre est l'exemple résolu du
         cours (la PME de capteurs), qui part bien de R et de C : c'est vers
         lui que le remède ramène. La question 2 de l'évaluation la travaille
         aussi, mais une remédiation ne renvoie jamais vers le devoir noté. */
      exercice: null
    },
    {
      titre: "Oublier de vérifier la nature de l'extremum",
      eleve: "L'élève résout $\\Pi'(x) = 0$, trouve $x^* = 4$ et conclut « le profit est maximal " +
             "pour $4$ unités » sans un mot de justification. Sur une fonction de coût à minimiser, " +
             "le même réflexe lui fait annoncer un maximum là où il y a un minimum.",
      cause: "Sur tous les exercices du chapitre, la réponse est juste <strong>sans</strong> la " +
             "vérification : le profit est une parabole tournée vers le bas, donc le point " +
             "stationnaire est toujours un maximum. L'élève apprend donc, par l'expérience répétée " +
             "de douze exercices, qu'annuler la dérivée suffit — et il a raison douze fois sur " +
             "douze. L'habitude se prend précisément parce qu'elle fonctionne, et elle lâche le " +
             "jour où l'énoncé demande de minimiser un coût.",
      remede: "Exiger la <strong>troisième ligne</strong> dès le premier exercice, et la compter " +
              "dans le barème : (1) je dérive, (2) j'annule, <strong>(3) je justifie la " +
              "nature</strong>. La justification tient en une ligne — $\\Pi''(x) = -4 < 0$, donc " +
              "maximum — mais c'est elle qui transforme un réflexe en raisonnement, et c'est elle " +
              "que l'examen sanctionne.<br/><br/>" +
              "Donner la lecture <strong>immédiate sur le coefficient</strong>, qui rend la " +
              "vérification indolore sur une parabole : le signe de $a$ dans $ax^2 + bx + c$ suffit. " +
              "Si $a < 0$, la parabole est tournée vers le bas, le sommet est un maximum ; si " +
              "$a > 0$, c'est un minimum. Aucun calcul de dérivée seconde n'est nécessaire, et " +
              "l'élève n'a plus d'excuse pour sauter l'étape.<br/><br/>" +
              "Poser enfin une fois la question inverse, à l'oral : « et si l'énoncé vous demandait " +
              "de <strong>minimiser un coût</strong>, votre méthode donnerait-elle la bonne " +
              "réponse ? ». C'est en découvrant que la réponse est non que l'élève comprend " +
              "pourquoi on lui réclame cette ligne depuis le début.",
      /* Vérifié contre le tirage réel de la graine du livre (2026-09-17,
         graine 20260816 + rang 19) : l'exercice 2 donne
         Pi(x) = -5x^2 + 40x - 10, réponse x* = 4. Le renvoi est utilisable
         pour cette erreur alors même que tous les exercices partagent le même
         moule, et c'est assumé : l'erreur ne porte pas sur le RÉSULTAT (qui
         sera juste) mais sur la RÉDACTION, et l'enseignant peut donc exiger
         la troisième ligne sur cet exercice précis. Le choix du 2 plutôt que
         du 1 tient au coefficient : a = -5 est le plus grand en valeur
         absolue parmi les premiers tirages, donc celui où la parabole est la
         plus resserrée et où le dessin au tableau montre le mieux que le
         sommet est un maximum. */
      exercice: { type: "exercice", n: 2 }
    },
    {
      titre: "Dériver le terme constant, ou se tromper de coefficient",
      eleve: "Sur $\\Pi(x) = -2x^2 + 16x - 10$, l'élève écrit $\\Pi'(x) = -2x + 16 - 10$ (il traîne " +
             "la constante), ou $\\Pi'(x) = -4x + 16x$ (il dérive le premier terme et pas le " +
             "second), ou encore $\\Pi'(x) = -2x + 16$ (il oublie de multiplier par l'exposant).",
      cause: "La dérivation d'un polynôme est une procédure à plusieurs règles qui s'appliquent " +
             "<strong>terme à terme</strong> — multiplier par l'exposant et le diminuer de un, et " +
             "annuler la constante. Pour un adulte qui a appris cela il y a des années, il reste " +
             "souvent une règle partielle appliquée uniformément. L'erreur sur la constante est la " +
             "plus tenace : $-10$ est visible dans l'énoncé, et le faire disparaître demande de " +
             "faire confiance à une règle plutôt qu'à ses yeux.",
      remede: "Faire dériver <strong>terme par terme, en colonne</strong>, un terme par ligne, " +
              "plutôt qu'en une seule expression. La disposition verticale rend l'oubli visible : " +
              "chaque ligne de départ doit avoir sa ligne d'arrivée, et la constante a la " +
              "sienne — qui vaut $0$.<br/><br/>" +
              "Justifier l'annulation de la constante par le <strong>sens</strong> plutôt que par " +
              "la règle : la dérivée mesure la <strong>variation</strong>. Le terme $-10$ est un " +
              "coût fixe — un loyer, un abonnement — qui ne change pas quand on produit une unité " +
              "de plus. Sa contribution à la variation est donc nulle. Formulé ainsi, l'élève ne " +
              "le « supprime » pas : il constate qu'il ne varie pas.<br/><br/>" +
              "Installer enfin un <strong>contrôle de cohérence</strong> propre à ce chapitre : la " +
              "dérivée d'un polynôme du second degré est du <strong>premier</strong> degré, donc de " +
              "la forme $ax + b$. Si l'expression obtenue contient encore un $x^2$, ou deux termes " +
              "en $x$, ou une constante isolée en trop, elle est fausse avant même d'être utilisée.",
      /* Vérifié contre le tirage réel (2026-09-17) : l'exercice 1 donne
         Pi(x) = -2x^2 + 16x - 10, réponse x* = 4. C'est le premier énoncé du
         chapitre, donc celui sur lequel l'enseignant peut imposer la
         disposition en colonne dès le départ, et ses coefficients sont les
         plus simples du tirage. Le -10 y est présent comme dans les onze
         autres (le générateur le fixe), ce qui en fait le support naturel de
         l'erreur sur la constante. Distinct du renvoi de l'erreur 2
         (exercice 2), conformément à la règle du projet : deux erreurs d'un
         même chapitre ne pointent jamais le même énoncé. */
      exercice: { type: "exercice", n: 1 }
    },
    {
      titre: "Rendre une quantité optimale sans la ramener au réel",
      eleve: "L'élève annonce « $x^* = 4$ » et s'arrête là. Interrogé sur ce que représente ce " +
             "nombre, il ne sait pas dire s'il s'agit de meubles, de lots ou d'euros — et il ne " +
             "calcule pas le profit correspondant, alors que c'est le chiffre qui intéresse " +
             "l'entreprise.",
      cause: "L'énoncé est habillé d'un contexte professionnel, mais la tâche demandée s'arrête à " +
             "un nombre : l'élève répond exactement à ce qu'on lui demande. L'habitude scolaire " +
             "veut d'ailleurs que la réponse soit le résultat du calcul, pas son interprétation. " +
             "Ce n'est donc pas une négligence, c'est un contrat implicite — et il faudra le " +
             "changer explicitement, parce que l'épreuve de BTS, elle, évalue l'interprétation.",
      remede: "Réclamer systématiquement une <strong>phrase de conclusion</strong> qui contienne " +
              "trois choses : la valeur, son <strong>unité métier</strong>, et la grandeur " +
              "optimisée. « Produire $4$ lots de catalogues maximise le profit, à $22$ k€ » plutôt " +
              "que « $x = 4$ ». C'est ce que l'épreuve attend, et c'est ce qu'un employeur " +
              "comprendra.<br/><br/>" +
              "Faire calculer $\\Pi(x^*)$ <strong>à chaque fois</strong>, même quand l'énoncé ne le " +
              "demande pas : trouver la quantité sans le profit associé n'a aucun intérêt en " +
              "gestion. C'est un ajout de trente secondes qui double la valeur de l'exercice et " +
              "prépare aux questions en deux temps de l'examen.<br/><br/>" +
              "Profiter enfin de la conclusion pour un <strong>contrôle de plausibilité</strong> : " +
              "la quantité doit être <strong>entière et positive</strong>. Le cours le signale — si " +
              "le calcul donne $x^* = 4{,}7$, on compare $\\Pi(4)$ et $\\Pi(5)$. Les tirages du " +
              "chapitre donnent tous un entier, ce qui rend le contrôle invisible : posez la " +
              "question sur un cas fabriqué, sans quoi l'étudiant découvrira la difficulté le jour " +
              "de l'épreuve.",
      /* Volontairement SANS renvoi, et pour une raison vérifiée sur le
         tirage : les douze énoncés demandent « trouve la quantité x* qui
         maximise le profit » et leur champ réponse attend un nombre d'unités.
         Aucun ne demande le profit correspondant ni une phrase
         d'interprétation — la tâche s'arrête précisément là où l'erreur
         commence. Renvoyer à l'un d'eux pour remédier à un défaut
         d'interprétation serait un contresens : l'exercice n'exige pas ce
         qu'on reproche à l'élève de ne pas faire. Le remède demande donc à
         l'enseignant d'ÉTENDRE la consigne, ce qui est le vrai geste de
         remédiation ici. */
      exercice: null
    }
  ],

  /* Une compétence du référentiel MATHÉMATIQUES par question, dans l'ordre.
     Cinq questions, donc cinq compétences. Étiquetage honnête : la compétence
     est lue sur la tâche réellement demandée.

     Q1 — $\Pi(x) = -2x^2 + 24x - 50$, calculer $x^*$. Le profit est DONNÉ,
          la méthode est celle des douze exercices : dériver, annuler,
          résoudre. Exécution d'une procédure connue sur des nombres donnés :
          « calculer ».
     Q2 — « le profit est maximal quand : », avec $R(x) = C(x)$ en
          distracteur. Il faut distinguer deux conditions voisines et écarter
          celle qui correspond au seuil de rentabilité — c'est exactement
          l'erreur 1 de cette fiche. Juger la validité de quatre énoncés
          concurrents : « raisonner ».
     Q3 — $C(x) = 0{,}1x^3 - 1{,}5x^2 + 10x + 20$, calculer $C'(5)$. Dérivée
          d'un polynôme du TROISIÈME degré, puis évaluation numérique. Aucun
          choix de méthode : « calculer ».
     Q4 — $\Pi'$ change de signe en $x = 10$ : quelle est la nature du point ?
          Il faut relier le signe de la dérivée aux variations, puis conclure
          sur la nature de l'extremum, sans aucun calcul. C'est une déduction
          sur le comportement d'une fonction : « raisonner ».
     Q5 — prix unitaire $30$ €, $C(x) = x^2 + 10x + 20$, calculer le profit
          maximal. Ici seuls la recette et le coût sont donnés : il faut
          CONSTRUIRE $R(x) = 30x$, puis $\Pi = R - C$, avant de pouvoir
          dériver. La mise en équation est le vrai travail, et c'est la seule
          question du devoir qui la demande : « modéliser ».

     RÉPARTITION DE CE CHAPITRE : calculer 2, raisonner 2, modéliser 1.
     « chercher », « représenter » et « communiquer » ne sont pas mobilisés :
     aucune question ne demande d'essayer une piste, de produire ou lire un
     graphique, ni de rédiger une explication. C'est un constat sur les cinq
     énoncés, pas un choix — et il rejoint celui du corpus entier, dont les
     130 questions sont toutes `numeric` ou à choix multiple.

     À signaler : la Q5 est la seule question de tout le chapitre à demander
     de construire le profit à partir de $R$ et $C$, geste que les douze
     exercices ne travaillent jamais (voir la `note`). Un étudiant qui n'aurait
     fait que les exercices la découvrirait le jour du devoir. */
  competences: {
    evaluation: ["calculer", "raisonner", "calculer", "raisonner", "modéliser"]
  }
};
