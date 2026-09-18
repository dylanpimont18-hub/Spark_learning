/* =========================================================
   Spark Learning – js/data/prof/si-1re/si-1re-poo.prof.js
   Fiche professeur du chapitre « Programmation orientée objet (Python) »
   (première SI), pour l'édition du professeur. JAMAIS chargée par le site :
   ce fichier n'est référencé ni dans index.html ni dans js/loader.js. Seul
   scripts/manuel/prof.js le lit, au moment de compiler le livre.

   Conventions calées sur le chapitre pilote du dossier,
   `si-1re-asservissement.prof.js` (2026-09-17).

   RÉFÉRENTIEL SI (2019) : analyser, modéliser, résoudre, expérimenter,
   concevoir, communiquer. `expérimenter` et `concevoir` ne sont jamais tirés
   par cet ouvrage.

   CE QUE LE TIRAGE RÉEL IMPOSE À CETTE FICHE. Relevé le 2026-09-17, graine du
   livre 20260816 + rang 12 (chapitre 13 du livre `lycee-si`).

   42 énoncés tirés, dont 12 numérotés et 30 en banque supplémentaire. C'est
   le chapitre LE MIEUX DOTÉ de tout l'ouvrage en volume — cinq fois plus que
   `si-1re-logique-boole` (8 énoncés).

   ET POURTANT UN SEUL MOULE, ce qui est le fait décisif de cette fiche. Les
   42 énoncés sont le même exercice : une classe à un attribut numérique, deux
   méthodes symétriques (l'une ajoute, l'autre retire), une suite de deux à
   cinq appels, et on demande la valeur finale de l'attribut. Seuls varient le
   nom de la classe, la valeur initiale, la longueur de la séquence et les
   arguments. Trois habillages tournent :
     - `Stock` / `quantite` / ajouter, retirer     : exercices 1, 6, 9, 12 ;
     - `Reservoir` / `niveau` / remplir, vider     : exercices 2, 4, 8, 10 ;
     - `Compteur` / `valeur` / incrementer, decrementer : exercices 3, 5, 7,
       11.
   Le volume est donc de la RÉPÉTITION, pas de la variété : c'est l'inverse de
   ce que le chiffre 42 laisse croire, et il faut le dire au professeur.

   CE QUE LES 42 ÉNONCÉS NE TRAVAILLENT JAMAIS, alors que le cours le traite :
   l'HÉRITAGE et `super().__init__()` (un quart du cours, une définition, une
   ligne du récapitulatif), le rôle de `self` (l'encadré « piège » entier),
   la distinction CLASSE / INSTANCE, et l'existence de PLUSIEURS objets d'une
   même classe. Les énoncés créent un objet unique, nommé `obj`, et n'écrivent
   jamais une ligne de code — ils décrivent la classe en français.
   Or l'évaluation demande le mot-clé `class` (Q1), l'héritage (Q3) et `self`
   (Q4) : trois questions sur cinq portent sur ce que les exercices ignorent.
   Le quiz comble deux de ces trous — héritage (Q2) et indépendance de deux
   instances (Q3) — et c'est là que vont deux des quatre renvois de cette
   fiche.

   Contenu écrit à la main. Conventions du projet : KaTeX inline, virgule
   décimale en {,}, ton jamais punitif.
   ========================================================= */

window.SPARK_PROF = window.SPARK_PROF || {};

window.SPARK_PROF["si-1re-poo"] = {

  /* Prérequis en numéros de chapitre DU DOSSIER `si-1re` (8 chapitres, donc
     de 1 à 8). Numérotation locale : 1=sysml, 2=cinematique,
     3=statique-pfs, 4=logique-boole, 5=asservissement, 6=energie-rendement,
     7=rdm, 8=poo.

     ch. 1 (Modélisation des systèmes, SysML) : RETENU, et le lien est plus
     profond qu'il n'y paraît. Un BLOC SysML et une CLASSE Python sont le même
     objet conceptuel : un composant défini par ses attributs (les données) et
     ses opérations (les méthodes) — le cours de SysML emploie littéralement
     ces deux mots dans sa définition du bloc (« un bloc possède des
     attributs, des opérations et des ports de flux »), et le cours de POO
     les reprend à l'identique pour la classe. Ce n'est pas une analogie
     pédagogique : SysML est né d'UML, qui est le langage de modélisation de
     la POO. Un élève qui a modélisé un système en blocs a déjà, sans le
     savoir, écrit des classes ; le nommer fait gagner une séance entière.
     Et le sens de la dépendance est le bon — SysML porte le rang 1, la POO
     le rang 8.

     Candidats examinés et ÉCARTÉS :
     - ch. 4 (Circuits logiques et algèbre de Boole) : c'est LE candidat qu'on
       écrirait par réflexe, les deux chapitres étant « de l'informatique ».
       MESURE FAITE, et elle tranche : les 42 énoncés de POO ne contiennent
       aucun booléen, aucune condition, aucun opérateur logique — que des
       additions et des soustractions d'entiers. Les 8 énoncés de Boole ne
       contiennent aucune ligne de code. Les deux chapitres ne se croisent
       nulle part dans le corpus. Lien de culture, pas de dépendance. Écarté.
     - ch. 5 (Asservissement) : programmer un correcteur proportionnel serait
       le projet idéal pour réunir les deux chapitres, et la progression
       conseillée le permet (rangs 5 puis 8). Mais l'asservissement ne contient
       pas une ligne de code, et la POO ne calcule aucun écart. Écarté — c'est
       toutefois le meilleur sujet de projet que ce dossier autorise.
     - ch. 6 (Énergie), ch. 7 (RDM) : les habillages des énoncés sont
       industriels (`Reservoir`, `Stock`), mais aucun calcul de physique n'y
       intervient. Écartés.
     - ch. 2 (Cinématique), ch. 3 (Statique) : aucun lien. Écartés.

     PRÉREQUIS NON DÉCLARABLES, traités dans la `note` : les bases de la
     PROGRAMMATION IMPÉRATIVE en Python — variable, affectation, appel de
     fonction, et surtout le fait qu'une instruction MODIFIE un état. Sans
     cela, la suite d'appels des 42 énoncés est illisible. Cela relève de
     l'enseignement de seconde (SNT) et des mathématiques (algorithmique) :
     non déclarable ici. */
  prerequis: [1],

  /* Rang conseillé (2026-09-17) : rang 8, celui du livre — et c'est le
     dernier du niveau. L'ordre complet des huit rangs du dossier est justifié
     une fois dans `si-1re-sysml.prof.js` (rang 1).

     Le rang 8 respecte le prérequis déclaré (SysML, rang 1) avec la marge
     maximale, ce qui est volontaire et pas seulement commode : le
     rapprochement bloc / classe n'a de valeur que si les blocs ont été
     pratiqués longtemps, sur plusieurs systèmes. Fait en fin d'année, il
     éclaire rétrospectivement toute la modélisation de l'année.

     Le placer en fin de niveau a un second intérêt : la POO est le seul
     chapitre du dossier qui se prête à un PROJET, et un projet a besoin des
     autres chapitres pour avoir un objet (piloter une chaîne asservie,
     calculer un rendement). Le placer plus tôt le priverait de matière.
     Aucun chapitre du dossier ne le déclare en prérequis, donc rien ne
     contraint à le remonter.

     Le livre le range en chapitre 13 de l'ouvrage, soit le 8e du niveau
     `si-1re` : les deux ordres coïncident, pas de triangle d'alerte dans la
     colonne « Chap. ». */
  rangConseille: 8,

  /* Attendus. Source : `docs/programmes-si.md` (chapitre 8 de première, qui
     ne donne que le TITRE — vérifié) et le programme de spécialité SI (2019),
     partie « Concevoir et coder un programme structuré pilotant un système ».

     Bornés à ce que le chapitre traite VRAIMENT : classe, objet, attribut,
     méthode, constructeur, `self`, et l'héritage avec `super()`. Rien sur
     l'encapsulation et les accesseurs (non cités), rien sur le polymorphisme
     au-delà du mot « surcharge » employé une fois, rien sur les exceptions ni
     les modules. Citer un attendu sur l'encapsulation serait citer ce que le
     chapitre n'enseigne pas. */
  attendus: [
    "Distinguer une classe de ses instances, et identifier attributs et méthodes dans la définition d'une classe",
    "Écrire une classe dotée d'un constructeur et de méthodes agissant sur ses attributs par l'intermédiaire de self",
    "Exploiter l'héritage pour spécialiser une classe existante en réutilisant ses attributs et ses méthodes"
  ],

  note: "Classe et objet, attributs et méthodes, le constructeur " +
        "<code>__init__</code>, le rôle de <code>self</code> et l'héritage avec " +
        "<code>super()</code> : le chapitre installe la façon d'organiser un programme autour des " +
        "composants d'un système plutôt qu'autour de fonctions isolées.<br/><br/>" +
        "<strong>Le prérequis affiché n'est pas celui qu'on attendrait, et il est le " +
        "bon.</strong> Ce chapitre s'appuie sur <strong>SysML</strong> (chapitre $1$ de cette " +
        "partie), pas sur l'algèbre de Boole. La raison est structurelle : un " +
        "<strong>bloc</strong> SysML et une <strong>classe</strong> Python sont le même objet — " +
        "un composant défini par ses attributs et ses opérations, et les deux cours emploient " +
        "littéralement ces deux mots. SysML est d'ailleurs né d'UML, le langage de modélisation " +
        "de la programmation objet. Dites-le à vos élèves : ils ont déjà écrit des classes sans " +
        "le savoir, en dessinant des blocs. Cela fait gagner une séance.<br/><br/>" +
        "<strong>Un prérequis compte et ne sera pas affiché.</strong> Le chapitre suppose les " +
        "bases de la <strong>programmation impérative</strong> en Python : variable, affectation, " +
        "appel de fonction, et surtout l'idée qu'une instruction <strong>modifie un " +
        "état</strong>. Cela vient de la seconde (SNT) et des mathématiques, pas de la SI, donc " +
        "rien ne le montrera. Sans cet acquis, la suite d'appels des énoncés est " +
        "illisible.<br/><br/>" +
        "<strong>LE PIÈGE DE CE CHAPITRE EST SON ABONDANCE, et il faut le connaître.</strong> " +
        "Avec $42$ énoncés tirés — dont $30$ en banque supplémentaire — c'est le chapitre le " +
        "mieux doté de l'ouvrage. Mais les $42$ sont <strong>un seul et même exercice</strong> : " +
        "une classe à un attribut numérique, deux méthodes symétriques, une suite d'appels, " +
        "trouver la valeur finale. Seuls changent le nom de la classe (<code>Stock</code>, " +
        "<code>Reservoir</code>, <code>Compteur</code>), la valeur de départ et les arguments. " +
        "Le volume est de la <strong>répétition</strong>, pas de la variété. Un élève qui en fait " +
        "vingt ne sait pas vingt fois plus de POO : il sait suivre une suite " +
        "d'additions.<br/><br/>" +
        "<strong>Et ce moule laisse de côté l'essentiel du cours.</strong> " +
        "<strong>Aucun</strong> des $42$ énoncés ne traite l'<strong>héritage</strong> ni " +
        "<code>super()</code>, aucun n'interroge le rôle de <code>self</code>, aucun ne crée " +
        "<strong>deux objets</strong> d'une même classe, et aucun ne comporte une seule ligne de " +
        "code Python — ils décrivent la classe en français. Or le devoir noté demande le mot-clé " +
        "<code>class</code>, l'héritage et <code>self</code> : <strong>trois questions sur " +
        "cinq</strong>. Le <strong>quiz</strong> est votre recours et il est bien fait : il " +
        "traite l'héritage et l'indépendance de deux instances, et il donne du vrai code. " +
        "Faites-le passer, et prévoyez surtout du clavier — ce chapitre ne s'apprend pas sans " +
        "écrire de code, et le manuel n'en fait écrire aucun.",

  erreurs: [
    {
      titre: "Confondre la classe et l'objet",
      eleve: "« J'appelle <code>Compteur.inc()</code> pour incrémenter », ou « la classe " +
             "<code>Stock</code> contient $12$ articles ». L'élève attribue à la classe l'état " +
             "d'un objet.",
      cause: "La classe et l'objet portent presque le même nom (<code>Stock</code> et " +
             "<code>obj</code> créé à partir de <code>Stock</code>), et la classe est le seul des " +
             "deux que l'élève VOIT écrit dans le cours — l'objet, lui, naît à l'exécution. La " +
             "distinction plan / réalisation n'a rien d'évident quand on n'a jamais eu deux " +
             "réalisations sous les yeux. C'est l'erreur fondatrice de la culture objet, et elle " +
             "n'est pas un défaut d'attention : c'est un manque d'expérience du pluriel.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 3 est bâti exactement sur ce point : « on crée deux objets :
         $a$ = Compteur() et $b$ = Compteur(). Après a.inc(), la valeur de b.n
         est : », bonne réponse $0$, avec une correction qui énonce le principe
         — « chaque objet possède ses PROPRES attributs [...] b.n reste à 0
         car b est un objet distinct, avec sa propre copie de n ». C'est le
         SEUL endroit du livre où deux instances d'une même classe coexistent,
         et c'est précisément ce pluriel qui fait comprendre la distinction.
         COMPARÉ AUX CANDIDATS EXERCICES : MESURE FAITE sur les 42 énoncés,
         TOUS créent un objet UNIQUE, systématiquement nommé `obj`
         (« Après obj = Stock(9), on exécute... »). Aucun n'en crée deux,
         aucun ne distingue la classe de l'instance — au contraire, ils
         entretiennent la confusion en écrivant la classe et l'objet dans la
         même phrase avec la même valeur. Un élève qui confond les deux
         réussit les 42 sans jamais s'en apercevoir : un renvoi aurait été
         plausible et FAUX. Le quiz 3 est le seul support. */
      exercice: { type: "quiz", n: 3 },
      remede: "Le <strong>quiz $3$</strong> est le bon support, et c'est le seul endroit du livre " +
              "où <strong>deux objets</strong> d'une même classe existent en même temps : " +
              "<code>a = Compteur()</code> et <code>b = Compteur()</code>, puis " +
              "<code>a.inc()</code>, et <code>b.n</code> vaut toujours $0$. C'est ce pluriel qui " +
              "fait tout comprendre.<br/><br/>" +
              "Les exercices ne vous aideront pas ici, et il faut le savoir : les $42$ énoncés " +
              "créent tous <strong>un objet unique</strong>, toujours appelé <code>obj</code>. " +
              "Aucun n'en crée deux. Un élève qui confond classe et objet réussit les $42$ sans " +
              "s'en apercevoir.<br/><br/>" +
              "L'analogie qui fonctionne, et qui vient du chapitre SysML : <strong>la classe est " +
              "le plan, l'objet est la pièce fabriquée</strong>. Le plan d'un réservoir ne " +
              "contient pas $20$ litres ; le réservoir installé dans l'atelier, oui. Et avec un " +
              "seul plan, on fabrique dix réservoirs, chacun avec son propre niveau. C'est " +
              "exactement le bloc SysML et ses instances.<br/><br/>" +
              "Le geste de substitution qui installe la distinction définitivement, et il vaut " +
              "cinq minutes de clavier : reprenez n'importe quel énoncé du chapitre et " +
              "<strong>doublez l'objet</strong>. Sur l'exercice $2$ (<code>Reservoir(9)</code>), " +
              "faites créer <code>r1 = Reservoir(9)</code> ET <code>r2 = Reservoir(9)</code>, puis " +
              "appeler <code>r1.vider(6)</code>, et demander les deux niveaux. Quand les élèves " +
              "voient $3$ et $9$, la classe et l'objet ne se confondent plus."
    },
    {
      titre: "Oublier self, ou croire qu'on peut s'en passer",
      eleve: "L'élève écrit <code>def remplir(quantite):</code> au lieu de " +
             "<code>def remplir(self, quantite):</code>, ou bien <code>volume = volume + n</code> " +
             "au lieu de <code>self.volume = self.volume + n</code>.",
      cause: "Le paramètre <code>self</code> ne sert à rien de visible dans l'appel : on écrit " +
             "<code>obj.remplir(5)</code> avec un seul argument, alors que la méthode en déclare " +
             "deux. L'élève en conclut logiquement qu'il est décoratif. Or c'est " +
             "<code>self</code> qui dit À QUEL OBJET l'attribut appartient — sans lui, Python crée " +
             "une variable locale qui disparaît à la fin de la méthode, et l'objet n'est pas " +
             "modifié. L'erreur est d'autant plus tenace que le code semble fonctionner : aucune " +
             "exception n'est levée, la valeur ne change simplement pas. C'est l'erreur " +
             "n° 1 des débutants en POO, et le cours lui consacre son encadré « piège ».",
      /* exercice: null — ASSUMÉ ET MOTIVÉ, sur mesure.
         MESURE FAITE : les 42 énoncés tirés ne contiennent PAS UNE LIGNE de
         code Python. Ils DÉCRIVENT la classe en français (« On définit une
         classe Stock avec un attribut quantite initialisé à 9. La méthode
         ajouter(n) ajoute n... »), puis donnent une suite d'appels. Le mot
         `self` n'apparaît dans aucun énoncé, dans aucune correction, et
         aucune signature de méthode n'est écrite. L'erreur ne peut donc pas
         s'y manifester : renvoyer à l'un d'eux serait un renvoi faux.
         Le quiz ne traite pas `self` non plus : ses trois questions portent
         sur une suite d'appels, sur la syntaxe de l'héritage et sur deux
         instances indépendantes. Le quiz 1 donne bien du code, mais son
         `self` est CORRECT et n'est jamais interrogé — y renvoyer laisserait
         croire que la question est traitée.
         La question 4 de l'évaluation porte exactement sur `self` (« dans une
         méthode Python, self représente : »), mais une remédiation ne renvoie
         JAMAIS vers le devoir noté.
         Donc `null`, franchement. Le seul support du livre est l'encadré
         « piège » du cours, qui traite l'erreur de front et donne même le
         contre-exemple `def remplir(quantite):`. Le remède y ramène et donne
         le geste de substitution, qui passe obligatoirement par le clavier. */
      exercice: null,
      remede: "Aucun exercice du chapitre ne peut montrer cela, et la raison est radicale : les " +
              "$42$ énoncés ne contiennent <strong>pas une ligne de code Python</strong>. Ils " +
              "décrivent la classe en français et donnent une suite d'appels. Le mot " +
              "<code>self</code> n'y apparaît jamais. L'encadré <strong>« piège »</strong> du " +
              "cours est le support, et il est écrit exactement pour cette erreur — il donne même " +
              "le contre-exemple <code>def remplir(quantite):</code>.<br/><br/>" +
              "<strong>Le geste de substitution passe par le clavier, et il n'y a pas de " +
              "raccourci.</strong> Faites écrire la classe de l'exercice $2$ " +
              "(<code>Reservoir</code>, attribut <code>niveau</code>, méthodes " +
              "<code>remplir</code> et <code>vider</code>) <strong>sans</strong> " +
              "<code>self.</code> devant l'attribut, puis exécuter. Le programme ne plante pas, et " +
              "le niveau ne change pas. Ce silence est le meilleur professeur du " +
              "chapitre.<br/><br/>" +
              "Expliquez ce que <code>self</code> désigne, en une phrase et sans jargon : " +
              "<strong><code>self</code>, c'est « moi, cet objet-ci »</strong>. Quand on écrit " +
              "<code>obj.remplir(5)</code>, Python passe <code>obj</code> en premier argument, " +
              "automatiquement. <code>self.niveau</code> veut dire « le niveau DE CET " +
              "OBJET », tandis que <code>niveau</code> tout seul est une variable de passage qui " +
              "s'évapore.<br/><br/>" +
              "Installez enfin les <strong>deux règles jumelles</strong>, à écrire au tableau et à " +
              "garder affichées : <code>self</code> est le <strong>premier paramètre de chaque " +
              "méthode</strong>, et <strong>tout attribut s'écrit <code>self.quelque_chose</code></strong>. " +
              "Deux règles, aucune exception dans ce chapitre. La plupart des erreurs de POO de " +
              "l'année viennent de l'oubli de l'une des deux."
    },
    {
      titre: "Appliquer les appels dans le désordre, ou sur la valeur initiale",
      eleve: "Sur <code>c = Compteur()</code> puis <code>c.inc()</code>, <code>c.inc()</code>, " +
             "<code>c.double()</code>, <code>c.inc()</code>, l'élève annonce $6$ : il a doublé " +
             "en dernier, ou appliqué <code>double()</code> au résultat final au lieu du $n$ " +
             "courant.",
      cause: "L'élève lit la suite d'appels comme une FORMULE à composer, alors que c'est une " +
             "SÉQUENCE : chaque méthode agit sur l'état laissé par la précédente. Il traite " +
             "l'objet comme une expression mathématique, où l'ordre des opérations est régi par " +
             "des priorités, au lieu d'un état qui évolue dans le temps. C'est le premier " +
             "obstacle de la programmation impérative, et il est d'autant plus discret ici que " +
             "l'addition est commutative : sur une suite de <code>ajouter</code> et " +
             "<code>retirer</code> seule, l'ordre ne change RIEN au résultat. L'erreur reste donc " +
             "invisible jusqu'à ce qu'une multiplication apparaisse.",
      /* RENVOI VÉRIFIÉ, et le raisonnement de comparaison est décisif ici.
         Le quiz 1 est le seul support du livre où l'ORDRE compte réellement :
         `c.inc()`, `c.inc()`, `c.double()`, `c.inc()` sur un compteur à $0$
         donne $0 \to 1 \to 2 \to 4 \to 5$. Sa correction dit exactement le
         point : « l'ordre des appels est crucial : double() s'applique au n
         courant ($2$) et donne $4$, pas $6$ ». La méthode `double()`
         (multiplication) casse la commutativité, ce qui rend l'erreur
         DÉTECTABLE.
         COMPARÉ AUX CANDIDATS EXERCICES : les 42 énoncés n'ont QUE deux
         méthodes, une qui ajoute et une qui retire. Mesuré sur l'exercice 1
         (`retirer(9)`, `ajouter(9)`, `retirer(10)`, `ajouter(5)` sur $9$) :
         l'addition étant commutative, TOUT ordre des quatre appels donne la
         même valeur finale $4$. Un élève qui les applique dans le désordre
         obtient donc la bonne réponse sur les 42 énoncés. Il en va de même
         pour les exercices 6, 12 et tous les autres, quelle que soit la
         longueur de la séquence. Aucun exercice ne peut révéler l'erreur — un
         renvoi aurait été plausible et faux. C'est un cas où l'abondance du
         tirage ($42$ énoncés) ne sert à rien.
         Distinct des renvois des erreurs 1 (quiz 3) et 4 (quiz 2). */
      exercice: { type: "quiz", n: 1 },
      remede: "Le <strong>quiz $1$</strong> est le seul support du livre où l'ordre compte " +
              "vraiment : <code>inc()</code>, <code>inc()</code>, <code>double()</code>, " +
              "<code>inc()</code> sur un compteur à $0$ donne $5$, et sa correction le dit — " +
              "« <code>double()</code> s'applique au $n$ courant ($2$) et donne $4$, pas " +
              "$6$ ».<br/><br/>" +
              "<strong>Voici pourquoi les exercices ne peuvent pas vous servir, et c'est " +
              "contre-intuitif.</strong> Les $42$ énoncés n'ont que deux méthodes, une qui ajoute " +
              "et une qui retire. L'addition étant commutative, <strong>n'importe quel ordre " +
              "donne la même réponse</strong> : sur l'exercice $1$, les quatre appels mélangés " +
              "donnent $4$ dans tous les cas. Vos élèves peuvent réussir les $42$ exercices en " +
              "ignorant l'ordre. L'abondance du chapitre ne protège de rien ici.<br/><br/>" +
              "Imposez le <strong>tableau de suivi d'état</strong>, une ligne par appel, avec la " +
              "valeur AVANT et APRÈS. C'est exactement ce que font les corrections du chapitre " +
              "(« Après retirer(9) : $9 - 9 = 0$ », « Après ajouter(9) : $0 + 9 = 9$ »...), et " +
              "c'est la bonne habitude : l'élève ne compose pas une formule, il suit un état qui " +
              "change.<br/><br/>" +
              "Donnez le geste de substitution qui rend l'ordre visible : <strong>ajoutez une " +
              "méthode multiplicative</strong> à un énoncé du chapitre. Sur l'exercice $3$ " +
              "(<code>Compteur</code>), inventez <code>doubler()</code> et demandez la valeur " +
              "finale de <code>incrementer(5)</code>, <code>doubler()</code> puis de " +
              "<code>doubler()</code>, <code>incrementer(5)</code>. Les deux réponses diffèrent, " +
              "et l'élève comprend d'un coup pourquoi on parle de séquence et non de calcul."
    },
    {
      titre: "Croire qu'une classe fille recopie ou remplace sa classe mère",
      eleve: "Devant <code>class VoitureElectrique(Voiture):</code>, l'élève comprend que " +
             "<code>Voiture</code> est supprimée, ou que la fille est une copie indépendante, ou " +
             "encore que c'est <code>VoitureElectrique</code> qui est la mère.",
      cause: "La syntaxe <code>class Fille(Mere):</code> ressemble typographiquement à un appel de " +
             "fonction avec un argument, et rien dans les parenthèses n'indique un sens de " +
             "lecture. L'élève doit donc apprendre une convention : le nom entre parenthèses est " +
             "le PARENT, et la classe déclarée en hérite. S'y ajoute une difficulté conceptuelle " +
             "réelle — l'héritage n'est ni une copie (les modifications de la mère se répercutent) " +
             "ni un remplacement (les deux classes coexistent) : c'est une relation de " +
             "spécialisation, et il n'y a pas d'équivalent dans ce que l'élève connaît déjà.",
      /* RENVOI VÉRIFIÉ, et c'est un renvoi au QUIZ délibérément.
         Le quiz 2 est bâti exactement sur cette erreur : « on écrit
         `class VoitureElectrique(Voiture):`. Cela signifie que : », bonne
         réponse « VoitureElectrique hérite de Voiture et accède à ses
         attributs et méthodes », avec en distracteurs les TROIS lectures
         fausses de l'élève — « VoitureElectrique est une classe mère de
         Voiture » (sens inversé), « Voiture est supprimée et remplacée »
         (remplacement), « les deux classes sont identiques » (copie). Sa
         correction établit la convention de lecture et cite la surcharge.
         COMPARÉ AUX CANDIDATS EXERCICES : MESURE FAITE sur les 42 énoncés,
         AUCUN ne comporte d'héritage. Tous définissent UNE classe isolée
         (`Stock`, `Reservoir`, `Compteur`), sans classe mère, sans
         `super()`, sans aucune relation entre classes. L'héritage est
         pourtant un quart du cours, une définition, une ligne du
         récapitulatif, et une question du devoir noté. Renvoyer à un
         exercice aurait été impossible sans mentir. Le quiz 2 est le seul
         support du livre, et il est excellent — ses distracteurs couvrent les
         trois contresens.
         Distinct des renvois des erreurs 1 (quiz 3) et 3 (quiz 1). Les trois
         questions du quiz sont donc utilisées, chacune une fois, et c'est le
         signe que le quiz porte ici la charge que les exercices ne portent
         pas. */
      exercice: { type: "quiz", n: 2 },
      remede: "Le <strong>quiz $2$</strong> est fait pour cette erreur, et ses trois distracteurs " +
              "sont les trois contresens réels : sens inversé, remplacement, et copie identique. " +
              "Faites justifier le rejet de chacun — c'est plus formateur que de cocher la bonne " +
              "case.<br/><br/>" +
              "Aucun exercice ne peut aider, et c'est le trou le plus large du chapitre : " +
              "<strong>aucun des $42$ énoncés ne comporte d'héritage</strong>. Tous définissent " +
              "une classe isolée, sans mère, sans <code>super()</code>. L'héritage occupe pourtant " +
              "un quart du cours et une question du devoir noté.<br/><br/>" +
              "Fixez la <strong>convention de lecture</strong> par une phrase à dire à voix " +
              "haute : <code>class Fille(Mere):</code> se lit « <strong>Fille EST UNE sorte de " +
              "Mere</strong> ». Une voiture électrique est une sorte de voiture — pas l'inverse, " +
              "et la voiture ordinaire continue d'exister. Le mot entre parenthèses est toujours " +
              "le <strong>plus général</strong> des deux.<br/><br/>" +
              "Utilisez enfin le <strong>pont avec SysML</strong>, qui est le prérequis déclaré de " +
              "ce chapitre et qui donne ici sa meilleure récolte : l'héritage, c'est exactement " +
              "l'arbre de composition d'un diagramme <em>bdd</em> lu comme une " +
              "<strong>spécialisation</strong>. « Moteur » en haut, « Moteur électrique » et " +
              "« Moteur thermique » en dessous : les deux sont des moteurs, ils partagent la " +
              "puissance et le couple, chacun ajoute ce qui lui est propre. Vos élèves ont dessiné " +
              "cet arbre en début d'année ; dites-leur que <code>super().__init__(...)</code> est " +
              "la façon de l'écrire en Python."
    }
  ],

  /* Compétences, une par question d'évaluation, dans l'ordre. Cinq questions
     ici — COMPTÉ sur le module chargé avec voir-module.js, pas supposé.

     Q1 (quel mot-clé permet de créer une classe ? → `class`) →
        communiquer : employer le lexique exact du langage, avec `def`,
        `object` et `new` en distracteurs. C'est une question de vocabulaire
        normalisé, que le programme rattache à `communiquer` (maîtrise des
        langages de description et de programmation).
     Q2 (`b = Boite(5)`, `b.ajouter(3)`, `b.ajouter(2)`, valeur de `b.objets` ?
        → $10$) → résoudre : suivi d'état sur une séquence d'appels, le moule
        exact des 42 exercices.
     Q3 (l'héritage permet à une classe fille de… → réutiliser et ajouter) →
        analyser : caractériser le mécanisme d'héritage parmi quatre
        descriptions concurrentes, dont trois contresens. Aucun code à écrire
        ni à exécuter : c'est l'identification d'une relation entre
        constituants, rattachée à `analyser` comme les questions de
        restitution de l'ouvrage (voir REFERENTIELS dans prof.js).
     Q4 (dans une méthode, `self` représente… → l'objet sur lequel la méthode
        est appelée) → analyser : même nature, sur le mécanisme de liaison
        objet/méthode. La réponse exige de comprendre ce qui se passe à
        l'appel, pas de restituer une syntaxe.
     Q5 (`c = Compteur()`, `inc()`, `double()`, `inc()`, `double()`, valeur de
        `c.n` ? → $6$) → résoudre : suivi d'état, avec ici une multiplication
        qui rend l'ordre déterminant — c'est l'erreur 3 de cette fiche, et la
        seule question du devoir que les exercices ne savent pas préparer
        (voir le renvoi de l'erreur 3).

     RÉPARTITION DE CE CHAPITRE : résoudre 2, analyser 2, communiquer 1.
     `modéliser` n'est pas mobilisé, ce qui est le manque le plus voyant de ce
     devoir : aucune question ne demande d'écrire une classe à partir d'un
     besoin, ni de décider quels attributs et quelles méthodes donner à un
     composant — alors que c'est le deuxième attendu du chapitre et le geste
     professionnel du programmeur objet. `concevoir` est dans le même cas, et
     `expérimenter` aussi (aucune exécution de code n'est demandée), comme
     dans tout l'ouvrage.
     Si vous voulez évaluer `modéliser` et `concevoir`, il faudra ajouter
     votre propre tâche : donner un composant d'un système déjà étudié dans
     l'année — un réservoir, un moteur, un capteur — et faire écrire sa classe
     au clavier. C'est aussi, et ce n'est pas un hasard, le seul moyen de
     travailler les trois erreurs de cette fiche qui n'ont aucun support
     d'exercice. */
  competences: {
    evaluation: ['communiquer', 'résoudre', 'analyser', 'analyser', 'résoudre']
  }
};
