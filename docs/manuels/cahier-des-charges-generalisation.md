# Généraliser le manuel de référence aux 21 autres ouvrages

**Statut** : cahier des charges, rédigé le 2026-09-13 après l'achèvement du manuel de référence `college-maths-6e`.
**Point de départ** : commits `2d91ee5` et `fd1c7e9` sur `manuels-spark`, plus la correction de `bts-prep-fonctions.js`.
**Portée** : 21 ouvrages, 238 modules, 4 matières.

Ce document sert à deux choses : décider quoi produire, et briefer les agents qui le produiront. Chaque exigence est écrite pour être vérifiable.

---

## 1. Ce que le manuel de référence a établi

Le travail sur la 6e a produit deux choses de nature très différente, et c'est la distinction structurante de tout ce document.

**L'outillage, écrit une fois, réutilisable tel quel.** Environ 3 600 lignes dans `scripts/manuel/` : la couche professeur (`prof.js`), la bibliothèque de figures paramétriques (`js/data/figures-exercices.js`), la progression conseillée, le suivi des notions, les garde-fous de provenance, et 313 tests. Rien de tout cela n'est à refaire.

**Le contenu, propre à la 6e, à reproduire 21 fois.** Environ 4 700 lignes : 10 fiches professeur, 40 figures de cours, 10 sections « Découvrir », les corrections de compétences et de remédiations.

Le coût de la généralisation est donc presque entièrement rédactionnel. C'est ce qui rend indispensables les priorités de la section 3.

### L'état réel du catalogue, mesuré

| Ouvrage | Modules | Couche prof | Compilation constatée |
|---|---|---|---|
| `college-maths-6e` | 10 | complète | 279 p, référence |
| `college-maths` et 5e/4e/3e | 49 | absente | compile |
| `lycee-maths` et 3 niveaux | 36 | absente | compile |
| `bts-maths` | 27 | absente | compile |
| `bts-maths-prep` | 14 | absente | **cassé, corrigé le 2026-09-13** |
| Physique-chimie, 6 ouvrages | 54 | absente | compile |
| `lycee-si` | 20 | absente | **jamais compilé avant ce jour** |
| `bts-si` | 8 | absente | compile |
| `bts-fed` | 54 | absente | **jamais compilé avant ce jour** |

Deux ouvrages représentant 30 % du catalogue n'avaient jamais été compilés. Un troisième avait régressé sans que personne le sache.

---

## 2. Le problème central : un livrable invendable passe tous les contrôles

C'est la découverte la plus importante de l'audit, et elle conditionne tout le reste.

L'édition professeur de `bts-fed` compile aujourd'hui **sans erreur**, produit **806 pages**, et se déclare **publiable**. Or elle est invendable :

- Elle **annonce trois rubriques qu'elle ne contient pas**. Le mode d'emploi promet les erreurs fréquentes, la grille de compétences et la place dans le programme. Aucune n'existe dans le livre, faute de fiches professeur.
- Sa **progression annuelle est vide** : les 54 lignes affichent un tiret dans les colonnes de prérequis, et la colonne du rang conseillé duplique le numéro de chapitre. C'est exactement le défaut diagnostiqué sur la 6e, où la progression n'était que la table des matières avec des colonnes en plus.
- Elle attribue à un BTS Fluides-Énergies-Domotique les **compétences mathématiques du collège**. La grille imprime « chercher, modéliser, représenter, raisonner, calculer, communiquer » sur un manuel de GRAFCET et de pompes à chaleur.

La cause est un défaut de conception du garde-fou : il vérifie la provenance des figures, les caractères non traduits et les erreurs LaTeX, mais jamais **la présence de ce que le livre promet**.

> **Exigence 1, bloquante et préalable à tout le reste.** L'édition professeur d'un ouvrage dépourvu de fiches doit refuser de se déclarer publiable. Le message doit nommer les modules sans fiche. Un ouvrage partiellement couvert doit échouer aussi longtemps qu'un seul module manque : une édition professeur à trous est pire qu'une édition élève assumée.

> **Exigence 2.** Le mode d'emploi ne doit annoncer que les rubriques réellement présentes. Il se dérive de ce que l'ouvrage contient, il ne le proclame pas.

---

## 3. Priorités : ne pas traiter les 21 ouvrages de la même façon

Viser la parité complète partout représente environ 28 500 lignes de fiches et le triplement du nombre de figures. Ce n'est pas réaliste en un seul mouvement, et ce n'est pas souhaitable : tous les ouvrages n'ont pas la même valeur commerciale.

Trois niveaux d'exigence sont donc définis. Chaque ouvrage en reçoit un.

### Niveau 1 — Socle publiable (tous les ouvrages, sans exception)

Ce niveau garantit qu'un ouvrage ne ment pas. Il ne demande aucune rédaction pédagogique.

1. L'ouvrage compile, dans les deux éditions, sans erreur LaTeX ni débordement.
2. Aucune figure ni schéma secondaire refusé au contrôle de provenance.
3. Le référentiel de compétences est celui de la matière, ou l'ouvrage refuse de se compiler en édition professeur.
4. Le mode d'emploi n'annonce aucune rubrique absente.
5. Aucun caractère non traduit, y compris dans les étiquettes de figures.

Un ouvrage au niveau 1 se vend en édition élève. Son édition professeur reste bloquée tant qu'il n'atteint pas le niveau 2.

### Niveau 2 — Édition professeur vendable

C'est la parité fonctionnelle avec la 6e, hors perfectionnement.

6. Une fiche professeur par module : objectifs, prérequis, place dans le programme, attendus, compétence par question d'évaluation, et au moins trois erreurs fréquentes documentées.
7. Aucune remédiation ne renvoie vers l'évaluation notée.
8. Toutes les compétences du référentiel de la matière sont mobilisées, et aucune ne dépasse 35 % des questions.
9. La progression conseillée est renseignée, avec les prérequis réels.
10. Le suivi des notions s'imprime.

### Niveau 3 — Qualité de référence

Le niveau de la 6e, réservé aux ouvrages prioritaires.

11. Trois à quatre figures de cours par chapitre, contre une aujourd'hui.
12. Les exercices de géométrie et de grandeurs portent une figure paramétrique.
13. Chaque « Découvrir » part d'une situation où la notion est la seule réponse possible.
14. Douze exercices visibles par chapitre et une banque professeur calibrée sur la diversité réelle des générateurs.

### Affectation proposée

| Ouvrages | Niveau visé | Raison |
|---|---|---|
| Collège maths 5e, 4e, 3e | 3 | même matière et même public que la référence, l'outillage s'y applique directement |
| `bts-fed` | 2 | 54 modules, le plus gros ouvrage, public professionnel qui achète |
| Lycée maths, BTS maths | 2 | volume important, marché réel |
| Physique-chimie | 2 | six ouvrages, référentiel déjà défini dans le code |
| `lycee-si`, `bts-si` | 1 puis 2 | jamais compilés, dette technique à solder d'abord |

Cette affectation est une proposition. Elle se discute selon vos priorités commerciales, mais l'ordre des niveaux, lui, ne se discute pas : un ouvrage ne passe pas au niveau supérieur avant d'avoir validé le précédent.

---

## 4. Corriger l'outillage avant de produire du contenu

Trois heuristiques héritées des mathématiques sont fausses pour les autres matières. Ce sont des correctifs courts et à fort levier. Les faire après aurait pour effet de reprendre du contenu déjà écrit.

### 4.1 Le référentiel de compétences

Aujourd'hui, la matière est devinée en cherchant le mot « physique » dans le libellé de collection. Tout le reste retombe sur les mathématiques, silencieusement. D'où les compétences du collège sur un BTS.

> **Exigence 3.** Chaque ouvrage déclare explicitement son référentiel. Une collection sans référentiel connu fait échouer la compilation de l'édition professeur, elle ne retombe pas sur un défaut.

Deux référentiels sont à écrire : les sciences de l'ingénieur, qui s'articulent sur analyser, modéliser, résoudre, expérimenter et communiquer, et le BTS FED, qui raisonne en blocs de compétences professionnelles et non en compétences transversales. Ces deux référentiels doivent être validés par quelqu'un qui enseigne la matière avant d'être imprimés.

### 4.2 Les points de figure écrasés

La classe qui marque un point impose un rayon fixe. En mathématiques c'est correct, un point n'a pas de taille. Dans les autres matières, 92 cercles ont un rayon supérieur à 5 : ce sont des composants, un ampèremètre, un noyau atomique. Ils sont réduits à un point de 1,7 mm, et leur étiquette flotte à côté du vide.

> **Exigence 4.** Le rayon fixe ne s'applique qu'aux cercles de petit rayon. Au-delà, le rayon déclaré est respecté.

### 4.3 Le code source dans les figures

Les sciences de l'ingénieur comportent 306 blocs de code, inexistants en mathématiques. Leur indentation s'imprime en tildes visibles, les apostrophes deviennent typographiques et les chevrons sortent en caractères espagnols inversés.

> **Exigence 5.** Un bloc de code passe par un traitement verbatim. Trente-et-une occurrences fautives figurent déjà dans un ouvrage qui se déclare publiable.

### 4.4 Trois caractères manquants

Trois indices Unicode ne sont pas traduits, dans cinq passages de physique. Ils ont échappé au contrôle parce qu'il ignore les figures. Correctif de trois lignes.

> **Exigence 6.** Le contrôle du corpus inspecte aussi les étiquettes de figures.

---

## 5. Le contrôle visuel est aveugle sur les trois quarts des figures

La planche de contrôle n'affiche que la figure principale de chaque module. Or les schémas secondaires sont désormais trois fois plus nombreux, et les figures d'exercices davantage encore.

C'est une lacune sérieuse, parce que les deux défauts les plus fréquents ne produisent **aucune alerte** : une figure qui déborde de son cadre reste invisible dans les journaux, et une étiquette qui perd sa réserve blanche aussi. Sur la 6e, douze figures sur quatre-vingt-neuf débordaient jusqu'à 3,9 mm sans le moindre avertissement.

> **Exigence 7.** La planche de contrôle affiche toutes les figures, principales, secondaires et d'exercices.

> **Exigence 8.** Un contrôle automatique vérifie qu'aucun élément ne sort du cadre déclaré. Ce contrôle existe déjà sous forme de script d'audit, il doit devenir un test.

---

## 6. La provenance ne garantit pas la fidélité

Le pipeline accorde la mention « conforme à la source » dès qu'une forme quelconque a été produite. Il ne vérifie jamais que le dessin final ressemble au dessin d'origine. Six constructions sont pourtant perdues ou déformées **en silence** :

- un groupe déplacé perd son déplacement, et toute la figure se décale ;
- un texte en portions disparaît entièrement ;
- les couleurs nommées ou hexadécimales deviennent noires, donc un schéma polychrome sort monochrome ;
- l'opacité est ignorée, donc un aplat semi-transparent efface ce qu'il recouvre ;
- les motifs de pointillés se confondent tous ;
- une rotation appliquée à autre chose qu'un texte est ignorée, ce qui concerne quatre rectangles inclinés d'un pont de Wheatstone.

> **Exigence 9.** Le convertisseur refuse la mention de conformité en présence d'une construction qu'il ne sait pas traduire. Un échec bruyant vaut infiniment mieux qu'une figure fausse déclarée conforme.

C'est le correctif le plus rentable du document : quelques détections transforment six défaillances silencieuses en refus explicites.

---

## 7. Deux compilations simultanées se détruisent

Le dossier de sortie n'a aucun verrou, et le chemin est déterministe. Deux compilations du même ouvrage écrivent dans les mêmes fichiers auxiliaires et se corrompent mutuellement.

Ce n'est pas théorique : trois agents l'ont rencontré pendant ces deux jours, l'un a d'abord cru à un bug de son propre code. Le risque grave est ailleurs : la décision de publier se prend en relisant le journal et le PDF **après** la compilation. Si un autre processus les a réécrits entre-temps, **un ouvrage cassé peut être déclaré publiable et copié dans les livrables**.

> **Exigence 10.** Un verrou par ouvrage, ou un dossier de travail distinct par compilation. Indispensable avant toute production parallélisée, ce qui sera le cas pour 21 ouvrages.

---

## 8. Conventions de composition des figures

Ces règles sont issues du manuel de référence. Elles sont documentées dans le code, à l'endroit concerné. Elles s'appliquent à toutes les matières.

### Ce qu'une figure ne doit jamais faire

**Mentir sur une proportion.** C'est la faute la plus fréquente et la plus grave, parce qu'elle est invisible à la relecture. Sur la 6e, onze erreurs de ce type ont été trouvées, uniquement par le calcul : un angle de 35 degrés dessiné à 36, un point placé à 7,803 au lieu de 7,83, des axes de symétrie ne passant par aucun sommet, et surtout des parts de galette dessinées à une échelle plus petite que les galettes dont elles proviennent.

Une figure fausse est pire que pas de figure. Corollaire : quand une figure ne peut pas être à l'échelle, elle le déclare explicitement.

**Divulguer ce qu'elle demande de trouver.** La hauteur cherchée porte un point d'interrogation, jamais sa valeur. Le symétrique à construire est un cercle vide. La figure pose la question, elle ne la résout pas.

**Déborder de son cadre.** Un élément hors cadre s'imprime par-dessus le texte voisin sans qu'aucun avertissement soit émis.

**Être écrite directement en TikZ.** Le pipeline exige une source vectorielle, dont il calcule une empreinte.

### Quatre patrons éprouvés

**Comparaison.** Les deux objets partagent la même ligne de base et la même échelle. La grandeur qui varie doit être la seule différence visible, car toute autre différence sera lue comme faisant partie de la démonstration.

**Piège.** Le calcul juste se place en premier, en teinte d'accent. L'erreur vient dessous, en teinte faible et en trait tireté. L'œil lit le haut d'abord.

**Pas à pas.** De gauche à droite, chaque vignette rejoue la précédente à l'identique et n'ajoute qu'un seul élément nouveau.

**Une figure par malentendu, pas une figure par formule.** On n'ajoute pas de figure pour faire du chiffre.

### Règles de forme

Aucune couleur en dur, uniquement les variables du projet. L'intensité de l'aplat encode la hiérarchie : discret pour le décor, moyen pour le standard, fort pour l'unique objet à isoler. Les cotes se posent hors des zones remplies. L'étiquette d'un angle se place sur la bissectrice, seul emplacement correct quelle que soit la forme. Un angle droit se code par un carré, jamais par un arc.

### Contraintes d'écriture imposées par le convertisseur

Pas d'article élidé ni de lettre isolée dans une étiquette, sous peine d'italique parasite. Pas d'étiquette en capitales, qui se fracture. Une structure plate, sans groupes ni définitions, en coordonnées absolues. Une seule pointe de flèche par trait.

---

## 9. Ce qu'une fiche professeur doit contenir

Une fiche par module, dans `js/data/prof/<dossier>/<module>.prof.js`. Elle n'est jamais chargée par le site.

| Élément | Obligatoire | Règle |
|---|---|---|
| Erreurs fréquentes | oui, au moins trois | ce que l'élève écrit, d'où cela vient, comment y remédier, vers quel exercice |
| Compétence par question | oui si le module a une évaluation | libellé du référentiel de la matière |
| Prérequis | non | numéros de chapitres, qui doivent précéder dans la progression conseillée |
| Rang conseillé | tout ou rien par niveau | les rangs forment une suite complète sans trou ni doublon |
| Attendus officiels | recommandé | alimentent le suivi des notions, qui ne s'imprime pas sans eux |
| Place dans le programme | recommandé | signale notamment ce qui déborde de l'année |

### Deux règles éditoriales absolues

**Une remédiation ne renvoie jamais vers l'évaluation notée.** On remédie avant d'évaluer. Vingt-deux renvois de ce type ont été corrigés sur la 6e.

**Un renvoi faux est pire qu'un renvoi absent.** Six remédiations de la 6e restent délibérément sans renvoi, parce qu'aucun exercice ne travaille réellement l'erreur. Le remède le dit alors explicitement. Ne comblez jamais un trou par un exercice approximatif.

### Le piège des compétences

Déclarer une compétence ne suffit pas : la question doit réellement la mobiliser. Sur la 6e, deux compétences du référentiel n'étaient jamais évaluées alors que la grille imprimait leurs colonnes, qui seraient donc restées vides toute l'année. Les corriger a demandé de **réécrire onze énoncés**, pas de renommer des étiquettes. Prévoyez ce travail : c'est de la rédaction, pas de la saisie.

---

## 10. Calibrer la banque d'exercices

Le nombre d'exercices ne se décide pas, il se mesure.

Compter les énoncés distincts ne sert à rien : les générateurs combinent des valeurs numériques presque à l'infini, donc soixante tirages donnent toujours soixante énoncés « différents ». Sur un chapitre de la 6e, ces soixante énoncés provenaient de **neuf moules** seulement, soit le même exercice imprimé sept fois avec d'autres nombres.

> **Exigence 11.** La diversité se mesure sur le moule, c'est-à-dire l'énoncé dont tous les nombres ont été masqués, et le nombre de répétitions par moule est plafonné.

Le résultat s'adapte de lui-même : sur la 6e, les périmètres reçoivent trente énoncés supplémentaires et les angles quinze, parce que leurs générateurs saturent plus tôt. Ne fixez jamais un quota uniforme.

**Avertissement.** Élargir la banque exerce des générateurs jamais sollicités et fait remonter des défauts anciens. C'est ainsi qu'un pourcentage non échappé, présent depuis longtemps dans un module de remise à niveau, a cassé la compilation d'un ouvrage entier. Prévoyez ce type de découverte sur chaque ouvrage, et traitez-la comme une bonne nouvelle : le défaut existait déjà, il était seulement invisible.

---

## 11. Méthode de travail

### Établir la ligne de base d'abord

> **Exigence 12.** Compiler les 22 ouvrages dans les deux éditions avant de commencer, et consigner le résultat. Deux ouvrages n'avaient jamais été compilés, un troisième avait régressé sans que personne le sache. Sans cette ligne de base, il sera impossible de distinguer une régression introduite d'un défaut préexistant.

### Un ouvrage pilote par matière

N'attaquez pas une matière sur ses dix ouvrages à la fois. La 6e a montré qu'un chapitre pilote mené jusqu'au bout révèle les difficultés avant qu'elles ne soient reproduites partout. Faites de même par matière : un ouvrage complet, vérifié, puis le reste.

La physique-chimie et les sciences de l'ingénieur poseront des problèmes que les mathématiques n'ont pas rencontrés, notamment les schémas de circuits, les blocs de code et la notation chimique, dont les symboles sortent aujourd'hui en italique alors que l'usage impose le romain.

### Vérifier l'artefact, jamais le rapport

C'est la leçon la plus coûteuse de ces deux jours. Un agent a rapporté avoir corrigé le défaut le plus grave du manuel, l'exigence d'une notion hors programme dans un devoir noté. La ligne était intacte. Le reste de son rapport était exact.

> **Exigence 13.** Toute correction se vérifie dans le fichier généré, jamais sur la foi d'un compte rendu. Pour une figure, cela veut dire recalculer la géométrie ; pour une mise en page, regarder la page rendue en image.

### Contrôles de recette

À exécuter et à consigner pour chaque ouvrage livré :

- le corpus reste intégralement valide ;
- la suite de tests passe sans échec ;
- aucune notation décimale anglaise n'apparaît dans les énoncés générés ;
- les deux éditions compilent sans erreur ni débordement ;
- aucune figure n'est refusée ;
- les pages nouvelles ou modifiées sont regardées en image, pas seulement dans les journaux.

---

## 12. Ce que ce document ne tranche pas

**Le temps humain.** Le volume produit est mesurable, l'effort ne l'est pas. Une fiche professeur fait environ cent vingt lignes, mais chaque erreur fréquente est un diagnostic didactique et chaque renvoi se vérifie contre un tirage réel.

**Les deux référentiels manquants.** Ceux des sciences de l'ingénieur et du BTS FED doivent être validés par un enseignant de la matière. Les imprimer faux serait pire que l'état actuel, car ils auraient l'air justes.

**Les quasi-doublons entre exercices visibles et banque.** Des énoncés partagent les mêmes nombres sous un habillage différent. Les éliminer demande de toucher aux générateurs, ce qui dépasse le cadre de la généralisation.

**L'ordre commercial.** L'affectation des niveaux de la section 3 est une proposition technique. Elle doit être arbitrée selon ce que vous comptez vendre, et dans quel ordre.
