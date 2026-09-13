# Prompt — produire les manuels de maths 5e et 4e au niveau de référence

Prompt prêt à coller, pour porter `college-maths-5e` puis `college-maths-4e` au niveau du manuel de référence `college-maths-6e`.

**Mode d'emploi.** Traiter la 5e d'abord, en entier, avant d'ouvrir la 4e : la 6e a montré qu'un ouvrage pilote mené jusqu'au bout révèle les difficultés avant qu'elles ne soient reproduites. Le prompt est écrit pour un seul ouvrage à la fois — remplacer le niveau dans l'en-tête.

Après chaque ouvrage livré, mettre à jour [le suivi](SUIVI-generalisation.md).

---

## Le prompt

> Projet : Spark Learning, `C:\Users\Dylan\Desktop\Creation_site\Spark_learning`. Branche `manuels-spark`.
>
> **Mission : porter l'ouvrage `college-maths-5e` au niveau du manuel de référence `college-maths-6e`.** (Pour la 4e : remplacer partout `5e` par `4e` et `14 modules` par `12 modules`.)
>
> ### Lis d'abord, dans cet ordre
>
> 1. `docs/manuels/cahier-des-charges-generalisation.md` — le cadre complet. Les sections 9, 10 et 11 sont tes règles de travail : conventions de figures, contenu d'une fiche professeur, calibrage de la banque d'exercices.
> 2. `js/data/prof/6e/6e-fractions.prof.js` — le modèle d'une fiche professeur, commentaires compris.
> 3. `js/data/6e/6e-figures-geometriques.js`, champ `cours.intro` — le modèle d'un « Découvrir » réussi.
> 4. `js/data/6e/6e-perimetres-aires.js`, ses `cours.diagrams[]` — le modèle des schémas secondaires.
>
> Ne lis pas tout le corpus 6e : ces quatre points suffisent à te caler.
>
> ### État de départ, mesuré le 2026-09-13
>
> 14 modules, tous avec une évaluation, tous avec une figure principale et **aucun schéma secondaire**. 70 questions d'évaluation. Aucune fiche professeur. L'ouvrage compile à 145 pages en édition professeur, mais c'est une coquille : la progression est vide, les erreurs fréquentes et la grille de compétences sont absentes, et le mode d'emploi annonce pourtant ces rubriques.
>
> Trois modules ne portent pas de préfixe de niveau dans leur nom de fichier. En 5e c'est `reperage-graphique.js`, dont l'identifiant est `reperage-graphique`. La fiche professeur prend le nom de l'**identifiant**, pas du fichier : ce sera `js/data/prof/5e/reperage-graphique.prof.js`. Ne renomme rien.
>
> ### Ce que tu dois produire
>
> **A. Une fiche professeur par module**, dans `js/data/prof/5e/<id>.prof.js`. Format et règles : section 10 du cahier des charges. Pour chaque fiche :
> - au moins trois erreurs fréquentes, chacune avec ce que l'élève écrit, d'où cela vient, comment y remédier, et vers quel exercice ;
> - une compétence du référentiel par question d'évaluation ;
> - les prérequis réels, en numéros de chapitres ;
> - le rang conseillé — tout ou rien : si une fiche le porte, toutes doivent le porter, et les rangs forment une suite complète sans trou ni doublon ;
> - les attendus officiels de fin d'année, sans lesquels le suivi des notions ne s'imprime pas ;
> - la place dans le programme, en signalant ce qui déborde de l'année.
>
> **Deux règles éditoriales absolues.** Une remédiation ne renvoie **jamais** vers l'évaluation notée : on remédie avant d'évaluer. Et un renvoi faux est pire qu'un renvoi absent : si aucun exercice ne travaille réellement l'erreur, laisse le renvoi vide et dis-le dans le remède.
>
> **Le piège des compétences.** Déclarer une compétence ne suffit pas, la question doit réellement la mobiliser. Sur la 6e, « chercher » et « communiquer » n'étaient jamais évaluées alors que la grille imprimait leurs colonnes. Les corriger a demandé de **réécrire onze énoncés**, pas de renommer des étiquettes. Attends-toi au même travail : vérifie la répartition finale, aucune compétence ne doit dépasser 35 % des questions, et les six doivent être présentes.
>
> **B. Les schémas secondaires**, trois par chapitre, dans `cours.diagrams[]`. Le mécanisme existe et fonctionne, aucun module de 5e ne l'utilise. Applique les conventions de la section 9 du cahier des charges. Le principe directeur : **une figure par malentendu, pas une figure par formule**. Si un chapitre ne mérite honnêtement que deux figures, fais-en deux et dis-le.
>
> **C. Les figures d'exercices**, via les helpers de `js/data/figures-exercices.js`. Priorité à la géométrie et aux grandeurs. Un chapitre de calcul pur n'en a pas besoin : n'en mets pas pour faire du chiffre. Si un type de figure manque à la bibliothèque, ajoute-le en suivant les conventions existantes — les nouveaux helpers serviront à la 4e et à la 3e.
>
> **D. Les « Découvrir ».** Vérifie les 14 intros. Le test : **si on peut répondre à la question d'ouverture sans la notion du chapitre, la question est mal choisie.** Réécris celles qui ouvrent sur une définition. Attention au travers inverse, une mise en situation décorative est pire qu'une définition ; sur un chapitre technique, une entrée historique ou une difficulté réelle vaut mieux qu'une anecdote plaquée. Si une intro est déjà bonne, laisse-la et dis-le.
>
> Registre : le manuel **tutoie l'élève** partout. Sur la 6e, sept ruptures de vouvoiement se sont glissées dans les nouvelles intros, dont une phrase mêlant les deux registres. Vérifie systématiquement.
>
> **E. La banque d'exercices.** Elle se calibre, elle ne se décide pas. Compter les énoncés distincts ne sert à rien : les générateurs combinent des valeurs à l'infini. Mesure les **moules**, c'est-à-dire les énoncés dont tous les nombres sont masqués, et plafonne les répétitions par moule. Sur la 6e, les périmètres ont reçu 30 énoncés et les angles 15, parce que leurs générateurs saturent différemment. Ne fixe aucun quota uniforme.
>
> **Avertissement.** Élargir la banque exerce des générateurs jamais sollicités et fait remonter des défauts anciens. C'est ainsi qu'un pourcentage non échappé a cassé un ouvrage entier le 2026-09-13. Attends-toi à ce genre de découverte, et traite-la comme une bonne nouvelle : le défaut existait, il était invisible.
>
> ### Méthode imposée
>
> **Un chapitre pilote d'abord**, mené jusqu'au bout et vérifié dans le PDF, avant de dérouler les treize autres. Choisis un chapitre de géométrie, qui exercera à la fois les figures de cours et les figures d'exercices.
>
> **Calcule, ne juge pas à l'œil.** Pour toute figure, écris un script qui extrait les coordonnées et vérifie les propriétés : aires, rapports, angles par produit scalaire, distances. Sur la 6e, onze erreurs de figures ont été trouvées **uniquement par le calcul** : un angle de 35 degrés dessiné à 36, un point placé à 7,803 au lieu de 7,83, des parts de galette plus petites que les galettes dont elles provenaient. Aucune n'était visible à la relecture.
>
> **Vérifie l'artefact, jamais ton propre rapport.** Un agent a rapporté avoir corrigé le défaut le plus grave du manuel de référence ; la ligne était intacte. Relis tes corrections dans le `.tex` généré et regarde les pages nouvelles en image.
>
> ### Contraintes projet
>
> Vanilla JS, pas d'`import`/`export`. Notation décimale française avec accolades — `0{,}75` et jamais `0.75` —, via `fr()` de `js/data/helpers.js`, jamais `.replace()` à la main. Couleurs uniquement par les variables du projet. Ton socratique, jamais punitif. Aération obligatoire, `<br/><br/>` entre les idées. Commentaires en français expliquant le **pourquoi** et datés.
>
> Contraintes d'écriture des étiquettes de figures : pas d'article élidé ni de lettre isolée, sous peine d'italique parasite ; pas de capitales, qui se fracturent ; structure plate en coordonnées absolues ; une seule pointe de flèche par trait.
>
> ### Contrôles de recette — ne déclare rien fait sans avoir vu la sortie
>
> - `node scripts/manuel/verifier-corpus.js` → 248/248 modules valides
> - `node --test "scripts/manuel/tests/*.test.js"` → 313 tests au vert aujourd'hui, plus les tiens
> - `node scripts/check-decimal-notation.js` → 4 erreurs préexistantes hors périmètre, n'en ajoute aucune
> - `node scripts/manuel/build.js college-maths-5e --prof` → 0 erreur, 0 débordement, 0 figure refusée
> - `node scripts/manuel/build.js college-maths` → l'ouvrage de cycle ne doit pas régresser
> - contrôle visuel sur images rendues des pages nouvelles
>
> **Piège connu** : deux compilations simultanées du même ouvrage se corrompent, faute de verrou. Si tu vois des octets nuls ou « File ended while scanning », ce n'est pas ton code : nettoie les auxiliaires et recompile.
>
> ### Rapport final
>
> Par module : la fiche écrite, le nombre de figures ajoutées, l'intro réécrite ou conservée avec la raison. Puis la répartition finale des compétences, le calibrage de la banque avec la mesure qui le justifie, la pagination avant et après, et la liste franche de ce dont tu es le moins satisfait. Signale toute limite du pipeline rencontrée plutôt que de la contourner en silence : elle enrichira le cahier des charges.

---

## Avant de lancer

Deux correctifs d'outillage devraient précéder ce travail, sans le bloquer absolument :

- l'édition professeur sans fiches doit refuser de se déclarer publiable ;
- le mode d'emploi ne doit annoncer que les rubriques présentes.

Sans eux, un ouvrage à moitié traité continuera de sortir un PDF « publiable » et mensonger. Avec eux, chaque ouvrage non fini échoue visiblement, ce qui est exactement ce qu'on veut pendant un chantier de cette taille.
