# Audit pédagogique — Modules de Mathématiques Spark Learning

**Date** : 2026-07-13
**Périmètre** : 112 modules dans `js/data/{6e,5e,4e,3e,bts-prep,bts,lycee-2nde,lycee-1re,lycee-tle}/`
**Méthode** : lecture intégrale fichier par fichier par 6 agents en parallèle (un par groupe de niveaux), notation selon la grille CLAUDE.md /100.

---

## 1. Tableaux par niveau

### 6e — moyenne 94,3/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 6e-addition-soustraction | 96 | 8 scénarios narratifs variés, vérification $(a-b)+b=a$ | RAS |
| 6e-angles | 92 | Lien Snell-Descartes, méthode claire | generate() (l.69-74) : 4 contextes courts seulement |
| 6e-division | 96 | 8 scénarios, vérification $b\times q+r=a$ | RAS |
| 6e-figures-geometriques | 94 | 8 objets concrets variés | Formule unique répétée |
| 6e-fractions | 97 | Lien chimie (fraction massique), bon piège | Contexte generate() (l.83-88) un peu artificiel |
| 6e-multiplication | 96 | 8 scénarios, gestion entier/décimal | RAS |
| 6e-nombres-decimaux | 95 | Piège $1{,}12$ vs $1{,}9$ bien traité | 4 contextes seulement |
| 6e-perimetres-aires | 91 | Tableau récap clair | generate() (l.63-101) sans habillage narratif |
| 6e-symetrie-axiale | 89 | Formule bien justifiée | generate() (l.66-95) reste abstrait |
| 6e-volumes | 97 | Lien densité/gaz parfaits, 4 scénarios | RAS |

**Problèmes systémiques 6e** : géométrie (angles, périmètres/aires, symétrie axiale) — `generate()` peu ou pas habillé narrativement ; listes de contextes courtes (4) vs modules modèles (8).

### 5e — moyenne 94,5/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 5e-aires-perimetres | 94 | Piège conversion d'aires bien traité | generate() limité à une formule |
| 5e-angles-parallelisme | 89 | Configurations Z/F/U bien expliquées | generate() (l.85-110) sans habillage narratif |
| 5e-expressions-litterales | 92 | Intro arithmétique→algèbre excellente | generate() (l.87-112) thin |
| 5e-fractions-operations | 96 | 5 contextes riches et différenciés | RAS |
| 5e-nombres-relatifs | 98 | 5 contextes cohérents avec le signe | RAS |
| 5e-parallelogrammes | 94 | Hiérarchie carré/rectangle/losange bien expliquée | generate() limité à une formule |
| 5e-priorites-operations | 99 | 5 contextes physiques réellement différents | RAS |
| 5e-probabilites | 93 | Sophisme du joueur bien traité | 4 contextes répétitifs |
| 5e-proportionnalite (appliquée) | 94 | Piège pourcentages successifs | Une seule structure de calcul |
| 5e-statistiques | 93 | Moyenne faussée par valeur extrême | 4 thèmes, structure figée |
| 5e-symetrie-centrale | 97 | 5 contextes très créatifs | RAS |
| 5e-triangles | 95 | Intro indéformabilité du triangle | 4 contextes, formule unique |
| 5e-volumes | 94 | Bon lien conversions L/dm³/cm³ | generate() limité au pavé droit |
| proportionnalite.js | 94 | Lien loi d'Ohm | Une seule structure de calcul |
| reperage-graphique.js | 96 | Diagramme SVG interactif, problème pH excellent | 4 contextes |

**Problèmes systémiques 5e** : mêmes limites que 6e sur la richesse narrative des `generate()` à structure de calcul unique.

### 4e — moyenne 93,75/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 4e-cosinus | 97 | 6 scénarios narratifs, piège isolé | RAS |
| 4e-droites-remarquables | 96 | Tableau récap, question méta-cognitive | Calcul peu varié malgré 4 contextes |
| 4e-fractions-mult-div | 96 | Simplification croisée bien pédagogisée | RAS |
| 4e-probabilites | 90 | Cours rigoureux union/intersection | generate() (l.82-100) **sans pick() narratif** |
| 4e-pythagore | 91 | Diagramme SVG, réciproque traitée | generate() (l.123-149) sans habillage narratif |
| 4e-relatifs-mult-div | 97 | 7 scénarios avec adaptation monte/descend | RAS |
| 4e-statistiques | 90 | Médiane/quartiles bien traités | generate() (l.81-98) sans habillage narratif |
| 4e-translations | 95 | 5 contextes narratifs | Exercice incomplet (n'interroge que l'abscisse) |
| 4e-triangle-rectangle-cercle | 96 | 4 contextes, théorème+réciproque | RAS |
| 4e-volumes | 93 | 5 contextes riches | **Erreur de calcul réelle** (voir §3) |
| calcul-algebrique | 96 | Pont maths/physique, 5 contextes | RAS |
| puissances | 88 | Notation scientifique bien pédagogisée | **Bug décimal** (voir §3) |

### 3e — moyenne 90,17/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 3e-algorithmique | 90 | Affectation vs équation, trace d'exécution | generate() sans variation narrative |
| 3e-arithmetique | 90 | PGCD/Euclide, piège "1 n'est pas premier" | generate() : statement identique à chaque tirage |
| 3e-equations-inequations | 90 | Changement de sens de l'inégalité | Exercice purement formel |
| 3e-fonctions | 91 | Diagramme SVG lecture graphique | Exercice purement formel |
| 3e-homotheties | 90 | Piège aires $k^2$ vs longueurs $k$ | Exercice sans habillage narratif |
| 3e-identites-remarquables | 90 | Calcul mental $99\times101$ | Exercice sans habillage narratif |
| 3e-sections-solides | 90 | Tableau récap solide/coupe | Exercice sans habillage narratif |
| 3e-stats-probas | 90 | Fréquence globale/conditionnelle | Exercice sans habillage narratif |
| 3e-systemes | 90 | Lien lois de Kirchhoff | Exercice sans habillage narratif |
| 3e-thales | 91 | Diagramme SVG, grandissement optique | Exercice sans habillage narratif |
| 3e-volumes | 90 | Piège $r^3$ vs $r$ | Exercice sans habillage narratif |
| trigonometrie | 90 | SOH-CAH-TOA / physique | Exercice sans habillage narratif |

**Problème systémique majeur 3e** : **12/12 modules** — aucun `pick()` narratif dans `exercice.generate()`, régression nette par rapport au niveau 4e.

### BTS-prep (remise à niveau) — moyenne 91,4/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| bts-prep-analyse-dim | 97 | 4 exemples contextualisés, decimal handling propre | RAS |
| bts-prep-calcul-litteral | 85 | Méthode isolation très claire | **Erreur de contenu réelle** (voir §3) |
| bts-prep-conversions | 96 | Tableaux complets, exemples industriels réels | RAS |
| bts-prep-donnees-techniques | 80 | Fiches techniques riches (IP, NPSH, AC-3) | **Bug décimal systémique** dans generate() |
| bts-prep-equations-transf | 78 | Cours solide (racines, ln/exp, dB) | **Bug décimal généralisé** + ~20% exercices cassés (branche impedance_R) |
| bts-prep-equations | 96 | Discriminant/systèmes clairs | RAS |
| bts-prep-fonctions | 97 | Diagramme SVG interactif | RAS |
| bts-prep-graphiques | 80 | Interpolation/extrapolation/échelle log | **Bug décimal généralisé** dans generate() |
| bts-prep-logarithme | 97 | RC, dB, demi-vie ; decimal handling correct | RAS |
| bts-prep-proportionnalite | 96 | Rendement, règle de 3 | RAS |
| bts-prep-puissances | 88 | Notation scientifique/préfixes SI | **Options de quiz dupliquées** (voir §3) |
| bts-prep-si-unites | 96 | 7 grandeurs, unités dérivées | RAS |
| bts-prep-trigonometrie | 97 | Phase électrique, plan incliné | RAS |
| bts-prep-vecteurs | 97 | Grue avec équilibre statique vérifié | RAS |

### BTS avancé — moyenne 86,8/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| bts-derivation-appliquee | 90 | Seuil rentabilité vs max profit | generate() 100% numérique |
| bts-fonctions-reelles | 90 | Piège trou/asymptote | generate() 100% numérique |
| bts-fourier | 93 | Diagramme SVG spectre, puissance relative vérifiée | pick() numérique seulement |
| bts-integrales-appliquees | 84 | Aire algébrique/géométrique | **Bug décimal** dans solution |
| bts-laplace | 85 | Piège $-f(0)$ bien traité | **Randomisation cosmétique** (voir §3) |
| bts-loi-normale | 90 | Piège $2\Phi(-z)$ vs $\Phi(z)-\Phi(-z)$ | generate() numérique seulement |
| bts-matrices | 91 | Circuit 2 mailles vérifié | generate() numérique seulement |
| bts-probas-discretes | 84 | Approximation Poisson↔binomiale | **Bug décimal** dans solution |
| bts-stats-deux-variables | 70 | Corrélation ≠ causalité | **Erreur de calcul réelle** (voir §3) |
| bts-suites-appliquees | 82 | Exemple épargne bien mené | **Bug décimal double** |
| complexes | 92 | Z_L/Z_C/résonance impeccable | generate() numérique seulement |
| eq-diff-2 | 92 | 3 régimes bien structurés | generate() numérique seulement |
| statistiques | 85 | Bessel, incertitude type A | **Bug décimal** possible dans solution |

### 2nde — moyenne 85,7/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 2nde-algorithmique | 95 | Piège range(), 3 types d'exercices | RAS |
| 2nde-calcul-algebrique | 85 | Identités remarquables pédagogisées | Décimal point-anglais l.~81 |
| 2nde-droites-systemes | 92 | Contextes variés | RAS |
| 2nde-echantillonnage | 78 | Marge d'erreur $1/\sqrt n$ | Décimales point-anglais répétées l.83-88 |
| 2nde-ensembles-nombres | 93 | Piège $\sqrt{49}\in\mathbb{Q}$ | RAS |
| 2nde-equations-inequations | 93 | Sens de l'inégalité répété | RAS |
| 2nde-fonctions-generalites | 80 | TVI bien amené | **Erreur de contenu réelle** (voir §3) |
| 2nde-fonctions-reference | 78 | Piège $\sqrt{a+b}$ | Décimales point-anglais l.83-84, 134 |
| 2nde-geometrie-plane | 93 | Médiane/hauteur/médiatrice/bissectrice | RAS |
| 2nde-probabilites | 80 | Sophisme du joueur | Décimales point-anglais l.85-87 |
| 2nde-reperage-plan | 82 | Triplets pythagoriciens malins | Milieu point-anglais possible l.86 |
| 2nde-statistiques | 76 | Variance bien expliquée | Décimales point-anglais nombreuses l.87-90 |
| fonctions-affines | 95 | Lien Beer-Lambert | RAS |
| vecteurs | 80 | Piège plan incliné | Décimales point-anglais l.139-141 |

### 1re — moyenne 82,1/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| 1re-derivation | 95 | Nombre dérivé vs fonction dérivée | RAS |
| 1re-geometrie-reperee | 83 | Vecteur normal vs directeur | Décimal point-anglais l.105 |
| 1re-information-chiffree | 55 | Coefficient multiplicateur clair | **Cours incomplet** (pas d'example/recap), quiz à 3 questions seulement, **aucun pick()** |
| 1re-polynomes-signe | 93 | Piège signe de $a$ martelé | Coquille de notation mineure (voir §3) |
| 1re-probas-conditionnelles | 72 | Erreur du procureur, Bayes | Décimales point-anglais systématiques l.69-82 |
| 1re-produit-scalaire | 80 | Travail d'une force | Décimal point-anglais l.133-135 |
| 1re-second-degre | 94 | Racines toujours entières | RAS |
| 1re-suites | 95 | Arithmétique/géométrique, carbone 14 | RAS |
| 1re-trigonometrie | 78 | Valeurs remarquables mnémotechnisées | Décimal JS approx. affiché point-anglais l.88 |
| 1re-variables-aleatoires | 76 | Piège "oubli des puissances" | Décimales point-anglais l.86-88 |

### Terminale — moyenne 91,5/100

| Module (id) | Note | Points forts | À améliorer |
|---|---|---|---|
| tle-convexite | 95 | Contre-exemple $x^4$ | Décimal point-anglais l.83 |
| tle-denombrement | 97 | Aucun bug décimal, narration variée | RAS |
| tle-derivation-complements | 93 | Piège "diviser les dérivées" | Décimal point-anglais l.86 |
| tle-equations-differentielles | 90 | Piège 63,2% vs 100% | Décimal point-anglais l.123, 125 |
| tle-exponentielle-logarithme | 93 | pH/demi-vie bien reliés | Décimal point-anglais l.135 |
| tle-geometrie-espace | 85 | Droites gauches bien expliquées | **Aucun pick()**, point fixé à l'origine, décimal l.73 |
| tle-limites-continuite | 92 | Formes indéterminées, TVI | Décimal point-anglais l.82 |
| tle-logarithme | 93 | Bon usage de `.replace()` pour un cas | `answer` final non converti l.83 |
| tle-lois-continues | 98 | **Modèle de gestion décimale correcte** | RAS |
| tle-orthogonalite-espace | 82 | Distance point-plan bien expliquée | **Aucun pick()**, point M toujours à l'origine, décimal l.78 |
| tle-primitives-integrales | 92 | Piège "diviser vs multiplier" | Décimal point-anglais l.121 |
| tle-suites-complements | 88 | Récurrence pédagogisée (métaphore échelle) | `pick()` calculé mais **jamais utilisé** (code mort) ; décimal l.86 |

---

## 2. Synthèse globale

| Niveau | Modules | Moyenne /100 |
|---|---|---|
| 5e | 15 | 94,5 |
| 6e | 10 | 94,3 |
| 4e | 12 | 93,75 |
| Terminale | 12 | 91,5 |
| BTS-prep | 14 | 91,4 |
| 3e | 12 | 90,17 |
| BTS avancé | 13 | 86,8 |
| 2nde | 14 | 85,7 |
| 1re | 10 | 82,1 |

**Moyenne pondérée globale (112 modules) : ≈ 90,1/100**

**Classement du meilleur au moins bon** : 5e > 6e > 4e > Terminale > BTS-prep > 3e > BTS avancé > 2nde > **1re** (maillon le plus faible)

**Constat transversal** : le collège (6e-5e-4e) est nettement le socle le plus solide et homogène. Le lycée général (2nde, 1re) est la zone la plus faible, dominée par un seul bug répété (décimales), pas par des lacunes de fond. Le BTS avancé souffre en plus d'exercices `generate()` purement numériques (aucune variation de contexte) sur la totalité des 13 modules.

---

## 3. Vraies erreurs de contenu (prioritaires)

1. **`js/data/bts/bts-stats-deux-variables.js`** (probleme, ~l.78-89) — erreur de calcul en cascade : $\overline{xy}$ annoncé $38{,}4$ au lieu de $39{,}4$, ce qui fausse la covariance, la pente $a$, l'ordonnée $b$ et l'estimation finale ($15{,}6$ affiché vs $17{,}1$ correct).
2. **`js/data/lycee-2nde/2nde-fonctions-generalites.js`** (probleme, solutions[2], ~l.103) — vérification fausse : $C(8)=C(15)=2400$ affirmé mais $C(8)=2720$ et $C(15)=3000$ ; les vraies racines de $C(p)=2400$ sont irrationnelles.
3. **`js/data/bts-prep/bts-prep-calcul-litteral.js`** (quiz, ~l.138-141) — `answer` pointe vers une option fausse (836 kJ) alors que le calcul donne 33,44 MJ (option B), et le texte de correction se contredit lui-même en désignant une troisième option (A).
4. **`js/data/bts/bts-laplace.js`** (generate(), l.65-75) — randomisation cosmétique : `p` fixé à `a+2` rend $F(p)=1/(p-a)$ toujours égal à $0{,}5$ quel que soit `a` tiré.
5. **`js/data/bts-prep/bts-prep-equations-transf.js`** (generate(), l.169) — branche `impedance_R` : ~20% des tirages retombent sur une réponse de repli cassée ("Recalcul...", answer=0).
6. **`js/data/4e/4e-volumes.js`** (probleme.solutions[0], ~l.111) — erreur arithmétique mineure : "2 573 133 m³" affiché au lieu de $\approx 2\,574\,467$ m³ (≈0,05% d'écart).
7. **`js/data/bts-prep/bts-prep-puissances.js`** (quiz, l.79-82) — deux options de QCM identiques (doublon "$7\times10^{12}$").
8. **`js/data/4e/puissances.js`** (generate(), ~l.94-110) — bug de rendu déclenchable : quand l'exposant final $\le -7$, `toString()` bascule en notation scientifique JS (`"3e-8"`), le `.replace('.', '{,}')` ne trouve rien à convertir et affiche un résultat non conforme à la consigne de l'énoncé.
9. **`js/data/lycee-1re/1re-polynomes-signe.js`** (probleme.solutions[2], l.99) — coquille de notation : « $6/(-2)=3$ » (devrait être $-6/(-2)=3$), résultat final correct mais étape intermédiaire incohérente.
10. **`js/data/lycee-tle/tle-suites-complements.js`** (generate(), l.66-78) — `pick()` calcule un contexte narratif jamais inséré dans le `statement` (code mort, pas de vraie variation).

---

## 4. Liste priorisée d'améliorations

### (a) Corrections mécaniques à fort impact, faible effort

1. **Bug décimal généralisé dans `generate()` → `solution`/`hint`** — de très loin le problème le plus répandu (touche ~25 fichiers sur 112 : 3 en bts-prep, 5 en bts, 10 en Terminale, 7 en 2nde, 5 en 1re, 1 en 4e). Le texte statique respecte toujours la règle française, mais dès qu'une valeur calculée dynamiquement (`toFixed()`, `parseFloat()`, valeur `pick()`-ée) est interpolée directement dans un template `solution`/`hint`, elle s'affiche en point anglais. Le pattern correct existe déjà (`.replace('.', '{,}')`, bien appliqué dans `tle-lois-continues.js`, `bts-prep-logarithme.js`, etc.) — recommandation : créer un helper `fr(n)` unique et l'imposer partout où une valeur numérique dynamique est affichée.
2. **Corriger les 4 vraies erreurs de calcul/contenu** listées en §3 (points 1, 2, 3, 6, 9) — impact direct sur la confiance des élèves, faible effort de correction unitaire.
3. **Corriger les 2 exercices structurellement cassés** : `bts-laplace.js` (randomisation cosmétique) et `bts-prep-equations-transf.js` (branche à 20% de casse).
4. **Corriger le doublon d'options** dans `bts-prep-puissances.js`.
5. **Corriger le bug de notation scientifique** dans `puissances.js` (4e) pour les petits exposants.

### (b) Améliorations de fond plus longues

1. **3e (12/12 modules)** : aucun `pick()` narratif dans `exercice.generate()` — retravailler systématiquement pour retrouver le niveau de variation narrative du collège (6e/5e/4e).
2. **BTS avancé (13/13 modules)** : `generate()` purement numérique, aucune variation de contexte — chantier plus lourd car ces modules techniques nécessitent des scénarios physiques/électriques crédibles.
3. **`1re-information-chiffree.js`** : refonte nécessaire — cours incomplet (pas d'`example` ni de `recap`), quiz au minimum strict (3 questions), aucun `pick()`.
4. **`tle-geometrie-espace.js` et `tle-orthogonalite-espace.js`** : ajouter `pick()` narratif et varier le point de référence (actuellement toujours à l'origine).
5. **Homogénéiser la richesse narrative** des modules 6e/5e à 4 contextes seulement (angles, périmètres-aires, symétrie axiale, angles-parallélisme, expressions littérales) vers le standard 5-8 contextes des meilleurs modules du même niveau.
6. **`tle-suites-complements.js`** : brancher le contexte `pick()` déjà calculé dans le `statement` (code mort à activer).
