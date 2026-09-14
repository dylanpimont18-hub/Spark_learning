# Généraliser le manuel de référence — collège et lycée, maths, physique-chimie et SI

**Statut** : cahier des charges, rédigé le 2026-09-13 après l'achèvement du manuel de référence `college-maths-6e`.
**Point de départ** : commits `2d91ee5`, `fd1c7e9` et `e37cf58` sur `manuels-spark`.
**Périmètre** : 14 niveaux, 139 modules, 3 matières. Le BTS et le BTS FED sont hors sujet ici (voir §11).

Ce document sert à deux choses : décider quoi produire et dans quel ordre, puis briefer les agents qui le produiront. Chaque exigence est écrite pour être vérifiable.

---

## 1. Le périmètre

| Matière | Niveaux | Modules | Couche professeur |
|---|---|---|---|
| Maths collège | 5e, 4e, 3e | 39 | absente |
| Maths lycée | 2de, 1re, Tle | 36 | absente |
| Physique-chimie collège | 4e, 3e | 12 | absente |
| Physique-chimie lycée | 2de, 1re, Tle | 32 | absente |
| Sciences de l'ingénieur | 2de, 1re, Tle | 20 | absente |

Le manuel de référence, `college-maths-6e`, porte 10 modules et la seule couche professeur existante.

Ces 139 modules alimentent aussi les ouvrages agrégés (`college-maths`, `lycee-maths`, `college-physique`, `lycee-physique`, `lycee-si`) : un module traité une fois bénéficie à l'ouvrage du niveau **et** à l'ouvrage de cycle.

---

## 2. Ce que la 6e a établi, et ce qui se reproduit

Le travail sur la 6e a produit deux choses de nature très différente. C'est la distinction structurante de tout ce document.

**L'outillage, écrit une fois, réutilisable tel quel.** Environ 3 600 lignes dans `scripts/manuel/` : la couche professeur, la bibliothèque de figures paramétriques, la progression conseillée, le suivi des notions, les garde-fous, et 313 tests. Rien de tout cela n'est à refaire.

**Le contenu, propre à un ouvrage, à reproduire.** Environ 4 700 lignes pour 10 modules : fiches professeur, figures de cours, sections « Découvrir », corrections de compétences et de remédiations.

Une fiche professeur fait environ 120 lignes. Pour 139 modules, cela représente de l'ordre de 17 000 lignes de rédaction, sans compter les figures. Le coût de la généralisation est donc presque entièrement rédactionnel, et c'est ce qui rend les priorités du §4 indispensables.

---

## 3. Le problème à régler avant tout : une édition professeur vide se déclare publiable

C'est la découverte la plus importante de l'audit, et elle concerne **tous les ouvrages du périmètre**, dès aujourd'hui.

Compilez l'édition professeur de la 5e maintenant : elle sort 145 pages sans erreur et se déclare publiable. Or, faute de fiches professeur, elle est invendable.

- Elle **annonce trois rubriques qu'elle ne contient pas**. Le mode d'emploi promet les erreurs fréquentes, la grille de compétences et la place dans le programme. Aucune n'existe dans le livre.
- Sa **progression annuelle est vide** : toutes les lignes affichent un tiret dans les colonnes de prérequis, et la colonne du rang conseillé duplique le numéro de chapitre. C'est exactement le défaut diagnostiqué sur la 6e, où la progression n'était que la table des matières avec des colonnes en plus.
- Son **suivi des notions est absent**, ce qui est le comportement voulu : une grille vide serait pire qu'une grille absente.

La cause est un défaut de conception du contrôle : il vérifie la provenance des figures, les caractères non traduits et les erreurs de composition, mais jamais **la présence de ce que le livre promet**.

> **Exigence 1, bloquante et préalable à tout le reste.** L'édition professeur d'un ouvrage dépourvu de fiches doit refuser de se déclarer publiable, en nommant les modules manquants. Un ouvrage partiellement couvert échoue tant qu'un seul module manque : une édition professeur à trous est pire qu'une édition élève assumée.

> **Exigence 2.** Le mode d'emploi ne doit annoncer que les rubriques réellement présentes. Il se dérive de ce que l'ouvrage contient, il ne le proclame pas.

Ces deux exigences protègent aussi le travail à venir : elles transforment chaque ouvrage non traité en échec visible plutôt qu'en faux livrable.

---

## 4. Ordre de traitement

L'ordre proposé suit la proximité avec le manuel de référence, donc le coût décroissant par ouvrage.

### Vague 1 — Maths collège : 5e, 4e, 3e (39 modules)

Même matière, même public, même référentiel, mêmes générateurs d'exercices que la référence. L'outillage s'y applique sans aucune adaptation, et les conventions de figures ont été éprouvées sur exactement ce type de contenu. C'est aussi ce qui complète l'ouvrage de cycle `college-maths`, qui devient alors intégralement traité.

Aucun piège technique connu sur cette vague. C'est la seule dont je peux dire cela.

### Vague 2 — Maths lycée : 2de, 1re, Tle (36 modules)

Même matière et même référentiel, mais un contenu plus abstrait : les figures y sont davantage des courbes, des tangentes et des aires sous la courbe que des objets à mesurer. Les patrons de figures de la 6e s'appliquent moins directement, et le patron « comparaison » y perdra sans doute de son utilité.

À surveiller : les exercices de lycée ont des générateurs plus complexes, donc le risque de défaut révélé par l'élargissement de la banque y est plus élevé (voir §8).

### Vague 3 — Physique-chimie, collège puis lycée (44 modules)

Le référentiel existe déjà dans le code, avec ses cinq compétences de démarche scientifique. C'est le seul acquis.

Un piège technique certain, mesuré : **40 cercles de rayon supérieur à 5** sont écrasés à un point fixe de 1,7 mm. Ce sont des composants, un ampèremètre, un noyau atomique, pas des points de repère. Répartition : 16 en seconde, 14 en quatrième, 10 en troisième. Le correctif est court et doit précéder la vague.

Trois caractères d'indice ne sont pas traduits, dans cinq passages de physique lycée. Ils ont échappé au contrôle parce qu'il ignore les étiquettes de figures.

### Vague 4 — Sciences de l'ingénieur : 2de, 1re, Tle (20 modules)

La vague la plus coûteuse par module, malgré son faible volume.

**Le référentiel n'existe pas.** Les ouvrages SI reçoivent aujourd'hui le référentiel de mathématiques, par défaut silencieux. La grille de suivi d'un manuel de GRAFCET imprime donc « chercher, modéliser, représenter, raisonner, calculer, communiquer ». Le programme de SI s'articule sur analyser, modéliser, résoudre, expérimenter et communiquer.

**Les blocs de code, inexistants ailleurs.** 111 blocs, concentrés sur trois modules : la programmation en seconde en compte 42, la programmation orientée objet en première 60. Leur indentation s'imprime aujourd'hui en tildes visibles, et 31 occurrences fautives figurent déjà dans un ouvrage qui se déclare publiable.

**Quatre rectangles inclinés** d'un pont de Wheatstone sortent droits et superposés, la rotation étant ignorée hors des textes.

---

## 5. Trois niveaux d'exigence

Viser la parité complète partout n'est ni réaliste ni souhaitable : tous les ouvrages n'ont pas la même valeur. Chaque ouvrage reçoit un niveau, et ne passe au suivant qu'après avoir validé le précédent.

### Niveau 1 — Socle publiable

Garantit qu'un ouvrage ne ment pas. Aucune rédaction pédagogique requise.

1. Les deux éditions compilent sans erreur ni débordement.
2. Aucune figure ni schéma secondaire refusé au contrôle de provenance.
3. Le référentiel de compétences est celui de la matière, ou l'édition professeur refuse de se compiler.
4. Le mode d'emploi n'annonce aucune rubrique absente.
5. Aucun caractère non traduit, étiquettes de figures comprises.

Un ouvrage au niveau 1 se vend en édition élève, son édition professeur restant bloquée.

### Niveau 2 — Édition professeur vendable

Parité fonctionnelle avec la 6e.

6. Une fiche par module : objectifs, prérequis, place dans le programme, attendus, compétence par question d'évaluation, au moins trois erreurs fréquentes.
7. Aucune remédiation ne renvoie vers l'évaluation notée.
8. Toutes les compétences du référentiel sont mobilisées, aucune ne dépasse 35 % des questions.
9. Progression conseillée renseignée, avec les prérequis réels.
10. Suivi des notions imprimé.

### Niveau 3 — Qualité de référence

11. Trois à quatre figures de cours par chapitre, contre une aujourd'hui.
12. Les exercices de géométrie et de grandeurs portent une figure paramétrique.
13. Chaque « Découvrir » part d'une situation où la notion est la seule réponse possible.
14. Banque professeur calibrée sur la diversité réelle des générateurs.

### Affectation proposée

| Ouvrages | Niveau visé |
|---|---|
| Maths collège 5e, 4e, 3e | 3 |
| Maths lycée | 2, puis 3 sur la seconde |
| Physique-chimie | 2 |
| Sciences de l'ingénieur | 1, puis 2 |

L'affectation se discute selon vos priorités commerciales. L'ordre des niveaux, lui, ne se discute pas.

---

## 6. Corriger l'outillage avant de produire du contenu

Ces correctifs sont courts et à fort levier. Les faire après obligerait à reprendre du contenu déjà écrit.

**Le référentiel de compétences.** La matière est aujourd'hui devinée en cherchant le mot « physique » dans le libellé de collection ; tout le reste retombe sur les mathématiques, sans avertissement.

> **Exigence 3.** Chaque ouvrage déclare explicitement son référentiel. Une collection sans référentiel connu fait échouer l'édition professeur au lieu de retomber sur un défaut. Le référentiel des sciences de l'ingénieur est à écrire, et à faire valider par un enseignant de la matière avant impression.

**Les points de figure écrasés.**

> **Exigence 4.** Le rayon fixe ne s'applique qu'aux petits cercles ; au-delà, le rayon déclaré est respecté. 40 figures de physique sont concernées.

**Le code source.**

> **Exigence 5.** Un bloc de code passe par un traitement verbatim. 111 blocs en SI, dont 31 déjà imprimés de façon fautive.

**Les caractères manquants.**

> **Exigence 6.** Le contrôle du corpus inspecte aussi les étiquettes de figures. Trois caractères d'indice à ajouter, correctif de trois lignes.

---

## 7. Deux angles morts du contrôle

### Le contrôle visuel ne voit qu'une figure sur quatre

La planche de contrôle n'affiche que la figure principale de chaque module, alors que les schémas secondaires sont trois fois plus nombreux et les figures d'exercices davantage encore.

C'est sérieux, parce que les deux défauts les plus fréquents ne produisent **aucune alerte** : une figure qui déborde de son cadre reste invisible dans les journaux, et une étiquette qui perd sa réserve blanche aussi. Sur la 6e, douze figures sur quatre-vingt-neuf débordaient jusqu'à 3,9 mm sans le moindre avertissement.

> **Exigence 7.** La planche affiche toutes les figures.

> **Exigence 8.** Un contrôle automatique vérifie qu'aucun élément ne sort du cadre déclaré.

### La provenance ne garantit pas la fidélité

Le pipeline accorde la mention « conforme à la source » dès qu'une forme quelconque a été produite, sans vérifier que le dessin final ressemble à l'original. Six constructions sont perdues **en silence** : un groupe déplacé perd son déplacement, un texte en portions disparaît, les couleurs nommées deviennent noires, l'opacité est ignorée, les motifs de pointillés se confondent, une rotation hors texte est ignorée.

Les trois premières sont peu probables sur ce périmètre, dont le corpus est du même dialecte que la 6e. La dernière est avérée sur quatre figures de SI.

> **Exigence 9.** Le convertisseur refuse la mention de conformité en présence d'une construction qu'il ne sait pas traduire. Un échec bruyant vaut mieux qu'une figure fausse déclarée conforme.

C'est le correctif le plus rentable du document : quelques détections transforment six défaillances silencieuses en refus explicites.

---

## 8. Deux compilations simultanées se détruisent

Le dossier de sortie n'a aucun verrou et le chemin est déterministe. Deux compilations du même ouvrage se corrompent mutuellement. Trois agents l'ont rencontré pendant ces deux jours, l'un croyant d'abord à un bug de son propre code.

Le risque grave est ailleurs : la décision de publier se prend en relisant le journal et le PDF **après** la compilation. Si un autre processus les a réécrits entre-temps, un ouvrage cassé peut être déclaré publiable.

> **Exigence 10.** Un verrou par ouvrage, ou un dossier de travail distinct par compilation. Indispensable avant toute production parallélisée, ce qui sera le cas sur 14 niveaux.

---

## 9. Conventions de composition des figures

Issues du manuel de référence, documentées dans le code à l'endroit concerné, applicables aux trois matières.

### Ce qu'une figure ne doit jamais faire

**Mentir sur une proportion.** La faute la plus fréquente et la plus grave, parce qu'invisible à la relecture. Onze erreurs de ce type ont été trouvées sur la 6e, uniquement par le calcul : un angle de 35 degrés dessiné à 36, un point placé à 7,803 au lieu de 7,83, des axes de symétrie ne passant par aucun sommet, des parts de galette plus petites que les galettes dont elles proviennent.

Une figure fausse est pire que pas de figure. Quand une figure ne peut pas être à l'échelle, elle le déclare.

**Divulguer ce qu'elle demande de trouver.** La hauteur cherchée porte un point d'interrogation, jamais sa valeur. Le symétrique à construire est un cercle vide. La figure pose la question, elle ne la résout pas.

**Déborder de son cadre.** L'élément hors cadre s'imprime par-dessus le texte voisin, sans avertissement.

**Être écrite directement en TikZ.** Le pipeline exige une source vectorielle dont il calcule une empreinte.

### Quatre patrons éprouvés

**Comparaison.** Les deux objets partagent la même ligne de base et la même échelle. La grandeur qui varie doit être la seule différence visible, car toute autre sera lue comme faisant partie de la démonstration.

**Piège.** Le calcul juste en premier, en teinte d'accent. L'erreur dessous, en teinte faible et en trait tireté. L'œil lit le haut d'abord.

**Pas à pas.** De gauche à droite, chaque vignette rejoue la précédente à l'identique et n'ajoute qu'un seul élément.

**Une figure par malentendu, pas une figure par formule.** On n'ajoute pas de figure pour faire du chiffre.

### Règles de forme

Aucune couleur en dur, uniquement les variables du projet. L'intensité de l'aplat encode la hiérarchie : discret pour le décor, fort pour l'unique objet à isoler. Les cotes se posent hors des zones remplies. L'étiquette d'un angle se place sur la bissectrice. Un angle droit se code par un carré, jamais par un arc.

### Contraintes d'écriture imposées par le convertisseur

Pas d'article élidé ni de lettre isolée dans une étiquette, sous peine d'italique parasite. Pas d'étiquette en capitales, qui se fracture. Structure plate, sans groupes ni définitions, en coordonnées absolues. Une seule pointe de flèche par trait.

### Règle d'insertion des helpers, et collision de noms entre sessions parallèles

Les helpers de `js/data/figures-exercices.js` s'ajoutent à la **toute fin du fichier**, dans un bloc commenté qui nomme le niveau (`HELPERS AJOUTES POUR LA TROISIEME`), jamais au milieu. Cette règle évite le conflit textuel entre deux sessions qui écrivent en parallèle.

**Elle ne suffit pas.** Lors de la vague 3e/2nde, les deux sessions l'ont respectée et ont malgré tout produit une collision : chacune a écrit une fonction `figureThales` aux signatures incompatibles — `(OA, OAp, AB, options)` pour la troisième, `(am, ab, bc)` pour la seconde. Git n'a rien vu, les blocs étant à des endroits distincts du fichier, et en JavaScript la dernière déclaration gagne : les quatre figures de Thalès de `3e-thales.js` seraient sorties vides en production, sans erreur de compilation.

D'où la règle, qui s'ajoute à la précédente : **chaque helper porte le niveau en préfixe** (`figure1reTangente`, `figureTleAire`, et non `figureTangente`). Avant de commiter, vérifier qu'aucun nom ajouté n'existe déjà :

```
grep -n "^function <nom>" js/data/figures-exercices.js
```

Voir le correctif d'outillage E13 du [suivi](SUIVI-generalisation.md), qui vise à faire porter ce contrôle par un test plutôt que par la discipline.

---

## 10. Ce qu'une fiche professeur doit contenir

Une fiche par module, dans `js/data/prof/<dossier>/<module>.prof.js`, jamais chargée par le site.

| Élément | Obligatoire | Règle |
|---|---|---|
| Erreurs fréquentes | oui, au moins trois | ce que l'élève écrit, d'où cela vient, comment y remédier, vers quel exercice |
| Compétence par question | oui si le module a une évaluation | libellé du référentiel de la matière |
| Prérequis | non | numéros de chapitres, précédant dans la progression conseillée |
| Rang conseillé | tout ou rien par niveau | les rangs forment une suite complète sans trou ni doublon |
| Attendus officiels | recommandé | alimentent le suivi des notions, qui ne s'imprime pas sans eux |
| Place dans le programme | recommandé | signale notamment ce qui déborde de l'année |

### Deux règles éditoriales absolues

**Une remédiation ne renvoie jamais vers l'évaluation notée.** On remédie avant d'évaluer. Vingt-deux renvois de ce type ont été corrigés sur la 6e.

**Un renvoi faux est pire qu'un renvoi absent.** Six remédiations de la 6e restent délibérément sans renvoi, faute d'exercice travaillant réellement l'erreur ; le remède le dit alors explicitement. Ne comblez jamais un trou par un exercice approximatif.

### Le piège des compétences

Déclarer une compétence ne suffit pas, la question doit réellement la mobiliser. Sur la 6e, deux compétences n'étaient jamais évaluées alors que la grille imprimait leurs colonnes, qui seraient restées vides toute l'année. Les corriger a demandé de **réécrire onze énoncés**, pas de renommer des étiquettes. Prévoyez ce travail : c'est de la rédaction.

### Le piège du « Découvrir »

Sur la 6e, neuf sections sur dix ouvraient sur une définition alors que l'avant-propos promettait une question concrète avant tout symbole. La promesse avait dû être retirée du livre.

Le test qui a servi à les réécrire : **si on peut répondre à la question d'ouverture sans la notion du chapitre, la question est mal choisie.** Trois gâteaux pour quatre personnes, où ni zéro ni un ne conviennent. Une porte entrouverte, qu'aucune longueur ne décrit.

Attention au travers inverse : une mise en situation décorative est pire qu'une définition. Sur les chapitres techniques, une entrée historique ou une difficulté réelle vaut mieux qu'une anecdote plaquée.

---

## 11. Calibrer la banque d'exercices

Le nombre d'exercices ne se décide pas, il se mesure.

Compter les énoncés distincts ne sert à rien : les générateurs combinent des valeurs numériques presque à l'infini, donc soixante tirages donnent toujours soixante énoncés « différents ». Sur un chapitre de la 6e, ces soixante énoncés provenaient de **neuf moules** seulement, soit le même exercice imprimé sept fois avec d'autres nombres.

> **Exigence 11.** La diversité se mesure sur le moule, c'est-à-dire l'énoncé dont tous les nombres ont été masqués, et le nombre de répétitions par moule est plafonné.

Le résultat s'adapte de lui-même : sur la 6e, les périmètres reçoivent trente énoncés supplémentaires et les angles quinze. Ne fixez jamais un quota uniforme.

**Avertissement, vérifié à nos dépens.** Élargir la banque exerce des générateurs jamais sollicités et fait remonter des défauts anciens. Un pourcentage non échappé, présent de longue date dans un module de remise à niveau, a ainsi cassé la compilation d'un ouvrage entier le 2026-09-13. Attendez-vous à ce type de découverte sur chaque ouvrage, surtout en lycée où les générateurs sont plus complexes. Traitez-la comme une bonne nouvelle : le défaut existait déjà, il était seulement invisible.

---

## 12. Méthode de travail

### Établir la ligne de base d'abord

> **Exigence 12.** Compiler les ouvrages du périmètre dans les deux éditions avant de commencer, et consigner le résultat. Un ouvrage de SI n'avait jamais été compilé avant ce jour ; un ouvrage de BTS avait régressé sans que personne le sache. Sans ligne de base, impossible de distinguer une régression introduite d'un défaut préexistant.

### Un ouvrage pilote par vague

N'attaquez pas une vague sur tous ses niveaux à la fois. La 6e a montré qu'un chapitre pilote mené jusqu'au bout révèle les difficultés avant qu'elles ne soient reproduites partout. Faites de même par vague : un ouvrage complet, vérifié, puis le reste.

### Vérifier l'artefact, jamais le rapport

C'est la leçon la plus coûteuse de ces deux jours. Un agent a rapporté avoir corrigé le défaut le plus grave du manuel, l'exigence d'une notion hors programme dans un devoir noté. La ligne était intacte. Le reste de son rapport était exact.

> **Exigence 13.** Toute correction se vérifie dans le fichier généré, jamais sur la foi d'un compte rendu. Pour une figure, cela veut dire recalculer la géométrie ; pour une mise en page, regarder la page rendue en image.

### Contrôles de recette

À exécuter et consigner pour chaque ouvrage livré : le corpus reste intégralement valide ; la suite de tests passe sans échec ; aucune notation décimale anglaise dans les énoncés générés ; les deux éditions compilent sans erreur ni débordement ; aucune figure refusée ; les pages nouvelles ou modifiées regardées en image.

---

## 13. Ce que ce document ne tranche pas

**Le temps humain.** Le volume produit est mesurable, l'effort ne l'est pas. Une fiche fait environ 120 lignes, mais chaque erreur fréquente est un diagnostic didactique et chaque renvoi se vérifie contre un tirage réel.

**Le référentiel des sciences de l'ingénieur.** À écrire et à faire valider par un enseignant de la matière. L'imprimer faux serait pire que l'état actuel, car il aurait l'air juste.

**Les quasi-doublons** entre exercices visibles et banque, qui partagent les mêmes nombres sous un habillage différent. Les éliminer demande de toucher aux générateurs.

**L'ordre commercial.** L'affectation des niveaux du §5 est une proposition technique, à arbitrer selon ce que vous comptez vendre.

**Le BTS et le BTS FED**, volontairement hors périmètre. Ils représentent 99 modules supplémentaires, dont 54 pour le seul BTS FED, avec un référentiel en blocs de compétences professionnelles qui n'a rien à voir avec les référentiels scolaires. Ils feront l'objet d'un document distinct, une fois le collège et le lycée traités. Deux points les concernant sont toutefois à connaître dès maintenant : ces ouvrages souffrent des mêmes exigences 1 à 3 que le reste du catalogue, et l'un d'eux produit aujourd'hui 806 pages qui se déclarent publiables tout en annonçant des rubriques absentes.
