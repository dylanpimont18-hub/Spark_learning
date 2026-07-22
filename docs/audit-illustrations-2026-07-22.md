# Audit des illustrations visuelles — 2026-07-22

Exécution complète du prompt réutilisable [`docs/prompt-audit-illustrations.md`](prompt-audit-illustrations.md) sur les 13 combinaisons niveau/matière du projet (13 sub-agents en parallèle, lecture seule). Fait suite à l'audit du 2026-07-21 (voir mémoire projet) qui avait établi les chiffres globaux ; celui-ci produit le détail module par module qui manquait, et confirme l'état après la livraison du lot pilote (`si-tle-bode`, `1re-trigonometrie`, `si-bts-automatique`, `si-bts-hydraulique`, commit `40f8674`).

**Mise à jour 2026-07-22 (lot 2, non commité)** : 10 modules supplémentaires livrés, couvrant les 5 priorités transversales identifiées ci-dessous en intégralité — `bts-loi-normale`, `tle-lois-continues` (Gauss), `si-1re-statique-pfs` (poutre isostatique), `6e-symetrie-axiale`, `5e-symetrie-centrale` (symétries), `si-1re-asservissement`, `si-tle-asservis-pid` (schémas-blocs asservissement), `bts-prep-trigonometrie`, `trigonometrie` (3e), `4e-cosinus` (triangle SOH-CAH-TOA). Chaque module a été produit par un agent dédié suivant le pipeline de la spec (calcul indépendant + double vérification), puis contrôlé une seconde fois (rendu réel clair/sombre en headless Chrome, `node --check`, portée du diff limitée au champ `diagram`).

**Mise à jour 2026-07-22 (lot 3, non commité)** : 15 modules supplémentaires livrés par 8 agents en parallèle — `6e-figures-geometriques`, `6e-angles`, `5e-angles-parallelisme`, `5e-nombres-relatifs`, `5e-triangles`, `4e-triangle-rectangle-cercle`, `3e-sections-solides`, `fonctions-affines`, `2nde-fonctions-reference`, `vecteurs` (2nde), `1re-polynomes-signe`, `tle-suites-complements`, `bts-fonctions-reelles`, `si-2nde-mecanique-base`, `si-tle-grafcet`. Même protocole que le lot 2 (calcul/géométrie vérifiés indépendamment, rendu réel clair/sombre contrôlé). Deux découvertes techniques significatives à cette occasion, documentées dans la mémoire projet : (1) le KaTeX (`$...$`) placé dans un `&lt;text&gt;` SVG casse silencieusement le rendu — à proscrire, texte brut uniquement dans le SVG ; (2) un **bug de rendu pré-existant et répandu** a été découvert et corrigé — le champ `mod.physics` était interpolé sans garde dans `renderCours.js` (section "Application physique-chimie") et `home.js` (carte module + en-tête de détail), donc tout module avec `physics: false` ou `physics: true` (littéral, ~76 modules au total) affichait le texte "false"/"true" en production. Corrigé à la source (3 lignes, 2 fichiers) plutôt que module par module.

**Mise à jour 2026-07-22 (wave 4, non commitée)** : 29 modules supplémentaires livrés par 11 agents en parallèle, couvrant la quasi-totalité du reliquat collège (6e/5e/4e/3e) — les dossiers **6e et 3e sont désormais à 100% riches**. Plus : correction des 14 derniers `physics: true` restants (1 agent dédié) et d'un bug de contenu pré-existant repéré au passage (`puissances.js` disait « un écart de $10^{41}$ ordres de grandeur », corrigé en « 41 ordres de grandeur »). Détail modules : `6e-addition-soustraction`, `6e-division`, `6e-fractions`, `6e-multiplication`, `6e-nombres-decimaux`, `6e-perimetres-aires`, `6e-volumes`, `5e-aires-perimetres`, `5e-fractions-operations`, `5e-parallelogrammes`, `5e-probabilites`, `5e-proportionnalite`, `5e-statistiques`, `5e-volumes`, `proportionnalite`, `4e-droites-remarquables`, `4e-probabilites`, `4e-statistiques`, `4e-translations`, `4e-volumes`, `puissances`, `3e-algorithmique`, `3e-arithmetique`, `3e-equations-inequations`, `3e-homotheties`, `3e-identites-remarquables`, `3e-stats-probas`, `3e-systemes`, `3e-volumes`.

**Mise à jour 2026-07-22 (wave 5, non commitée)** : 29 modules supplémentaires livrés par 14 agents en parallèle, couvrant l'intégralité du reliquat lycée Maths — **les dossiers `js/data/lycee-2nde/`, `js/data/lycee-1re/` et `js/data/lycee-tle/` sont désormais 100% riches**. Détail : `2nde-algorithmique`, `2nde-calcul-algebrique`, `2nde-droites-systemes`, `2nde-echantillonnage`, `2nde-ensembles-nombres`, `2nde-equations-inequations`, `2nde-fonctions-generalites`, `2nde-geometrie-plane`, `2nde-probabilites`, `2nde-reperage-plan`, `2nde-statistiques`, `1re-derivation`, `1re-geometrie-reperee`, `1re-information-chiffree`, `1re-probas-conditionnelles`, `1re-produit-scalaire`, `1re-second-degre`, `1re-suites`, `1re-variables-aleatoires`, `tle-convexite`, `tle-denombrement`, `tle-derivation-complements`, `tle-equations-differentielles`, `tle-exponentielle-logarithme`, `tle-geometrie-espace`, `tle-limites-continuite`, `tle-logarithme`, `tle-orthogonalite-espace`, `tle-primitives-integrales`. Trois bugs pré-existants découverts et corrigés au passage : (1) un vrai bug de routage dans `js/loader.js` — `MODULE_INDEX` mappait 4 modules Tle/1re sous d'anciens identifiants (`exp-log`, `eq-diff-1`, `integration`, `derivation`), donc tout lien direct vers ces pages échouait silencieusement ; (2) une étape intermédiaire arithmétiquement fausse dans l'exemple résolu de `tle-primitives-integrales.js` (résultat final correct par un autre chemin, mais l'étape affichée ne l'était pas) ; (3) un exemple de « droites gauches » en réalité parallèles dans un quiz de `tle-geometrie-espace.js`.

Total après lot 2 + lot 3 + wave 4 + wave 5 : **93/140 modules riches (66%)**. Tableaux ci-dessous mis à jour en conséquence ; les lignes concernées portent la mention *(livré 2026-07-22, lot 2)*, *(livré 2026-07-22, lot 3)*, *(livré 2026-07-22, wave 4)* ou *(livré 2026-07-22, wave 5)*.

**Mise à jour 2026-07-22 (waves 6 à 9, COMMITÉES ET PUSHÉES — chantier terminé)** : le reliquat complet (SI 2nde/1re/Tle/BTS, Maths BTS, BTS Prep — 42 modules) a été traité en 4 vagues de 5-6 agents parallèles, avec commit+push intermédiaire après vérification de chaque vague (au lieu d'un unique commit final) :
- **Wave 6** (commit `0142956`, 10 modules, 5 agents) : `si-2nde-analyse-fonctionnelle`, `si-2nde-chaines-energie-info`, `si-2nde-capteurs-actionneurs`, `si-2nde-programmation`, `si-1re-cinematique`, `si-1re-rdm`, `si-1re-energie-rendement`, `si-1re-logique-boole`, `si-1re-poo`, `si-1re-sysml` — **SI 2nde et SI 1re à 100%**.
- **Wave 7** (commit `2adbc66`, 10 modules, 5 agents) : `si-tle-transmission`, `si-tle-energie-cinetique`, `si-tle-dynamique-pfd`, `si-tle-reseaux`, `si-bts-cao`, `si-bts-capteurs-industriels`, `si-bts-electrotechnique`, `si-bts-gestion-energie`, `si-bts-mecanique-solides`, `si-bts-rdm-avancee` — **SI Tle et SI BTS à 100% ; le dossier SI est désormais intégralement illustré (20/20 modules)**.
- **Wave 8** (commit `01aa8cb`, 10 modules, 5 agents) : `bts-derivation-appliquee`, `bts-integrales-appliquees`, `bts-laplace`, `bts-matrices`, `bts-probas-discretes`, `bts-stats-deux-variables`, `bts-suites-appliquees`, `complexes`, `eq-diff-2`, `statistiques` — **Maths BTS à 100% (13/13)**. *Incident de session* : les 5 agents de la première tentative de cette vague ont échoué simultanément (limite d'usage API du compte atteinte, reset 17h50 Paris) ; seul `bts-laplace` avait été traité avant la coupure (vérifié complet et correct) ; la vague a été relancée avec succès après le reset pour les 9 modules restants.
- **Wave 9** (commit `cc7e1f8`, 12 modules, 6 agents) : `bts-prep-analyse-dim`, `bts-prep-calcul-litteral`, `bts-prep-conversions`, `bts-prep-donnees-techniques`, `bts-prep-equations-transf`, `bts-prep-equations`, `bts-prep-graphiques`, `bts-prep-logarithme`, `bts-prep-proportionnalite`, `bts-prep-puissances`, `bts-prep-si-unites`, `bts-prep-vecteurs` — **BTS Prep à 100% (14/14)**.

**Mise à jour 2026-07-22 (wave 10, non commitée)** : les 5 derniers modules marqués "aucun changement nécessaire" à l'audit initial ont finalement été convertis, pour clore le dossier à 140/140 — `5e-priorites-operations` (résolution en 4 étapes de $2 + 3^2 \times (7-4) \div 3 - 1 = 10$, portion traitée mise en évidence à chaque étape), `5e-expressions-litterales` (regroupement $3x+5x=8x$), `4e-fractions-mult-div` (modèle d'aire $\frac{2}{3}\times\frac{5}{7}=\frac{10}{21}$, grille 3×7=21 dont 10 cases surlignées), `4e-relatifs-mult-div` (droites graduées miroir pour $(-2)\times3=-6$ vs $(-2)\times(-3)=+6$), `calcul-algebrique` (balance à 2 plateaux pour $4x=20 \Rightarrow x=5$, même gabarit que `bts-prep-calcul-litteral`). 5 agents en parallèle, chaque valeur recalculée indépendamment, `node --check` OK sur les 5 fichiers, diff strictement limité au champ `diagram`. Aucune vérification de rendu réel navigateur (clair/sombre) effectuée à ce stade — à faire avant commit.

**Total final : 140/140 modules riches (100%)**. **Le chantier d'illustrations pédagogiques est donc terminé** au sens de la spec `docs/superpowers/specs/2026-07-21-illustrations-pedagogiques-design.md` : tous les modules ont désormais un SVG calculé/vérifié.

Chaque module de ces 4 vagues a suivi le protocole de double vérification complet : recalcul indépendant des valeurs (par l'agent producteur) puis contrôle visuel réel (rendu Chromium headless clair **et** sombre, effectué par l'orchestrateur après chaque vague, avant tout commit). Aucune régression de rendu (`node --check`, absence de KaTeX dans les `<text>` SVG) sur les 42 modules. Quelques incohérences de contenu pédagogique préexistantes ont été repérées et signalées sans être corrigées silencieusement (hors périmètre du chantier illustration) : phrase erronée sur le déphasage capacitif dans `complexes.js` (le texte dit "retard" là où la formule du module implique "avance"), correction de quiz auto-contradictoire dans `bts-prep-puissances.js`, rendement de chaudière non donné dans un problème de `bts-prep-si-unites.js`.

**Écart de comptage constaté** : `CODEBASE_MAP.md` liste des effectifs de modules obsolètes pour plusieurs dossiers (ex. `si-1re` y est indiqué à 2 modules, il en contient réellement 8 ; `si-bts` à 1, il en contient 8 ; `lycee-2nde` à 7, il en contient 14). Les effectifs ci-dessous sont vérifiés par lecture directe du système de fichiers.

## Vue d'ensemble

| Niveau/Matière | Modules | Riche | Legacy-correct | Legacy-pauvre | Absent |
|---|---:|---:|---:|---:|---:|
| Maths 6e | 10 | **10** | 0 | 0 | 0 |
| Maths 5e | 15 | 13 | 2 | 0 | 0 |
| Maths 4e | 12 | 9 | 0 | 3 | 0 |
| Maths 3e | 12 | **12** | 0 | 0 | 0 |
| Maths 2nde | 14 | 3 | 1 | 0 | 10 |
| Maths 1re | 10 | 2 | 0 | 0 | 8 |
| Maths Tle | 12 | 2 | 0 | 0 | 10 |
| Maths BTS | 13 | 3 | 2 | 0 | 8 |
| BTS Prep (remise à niveau) | 14 | 2 | 8 | 4 | 0 |
| SI 2nde | 5 | 1 | 0 | 4 | 0 |
| SI 1re | 8 | 2 | 6 | 0 | 0 |
| SI Tle | 7 | 3 | 4 | 0 | 0 |
| SI BTS | 8 | 2 | 6 | 0 | 0 |
| **Total** | **140** | **64** | **29** | **11** | **36** |

**64/140 modules (46%)** ont une illustration visuelle réelle (mise à jour 2026-07-22, lot 2 + lot 3 + wave 4, 54 modules livrés au total dans la journée). 76 modules restent à traiter, dont 36 n'ont même aucun `diagram` et 11 n'ont qu'un habillage ASCII/table qui n'illustre rien. Le reliquat collège (6e-5e-4e-3e) est quasiment épuisé (seuls `5e-priorites-operations`, `5e-expressions-litterales`, `4e-fractions-mult-div`, `4e-relatifs-mult-div`, `calcul-algebrique` restent, tous marqués "aucun changement nécessaire"). Le gros du reliquat est maintenant concentré en lycée Maths (2nde/1re/Tle, 28 modules) et en filière BTS/SI (48 modules).

*Correction au passage : la ligne BTS Prep de ce tableau comptait 7 legacy-correct depuis l'audit initial du 2026-07-21 alors que le tableau détaillé ci-dessous (source de vérité) en liste 8 — corrigé ici à l'occasion de cette mise à jour.*

## Tableau détaillé par module

### Maths 6e — `js/data/6e/` (10 modules, **10 riches — dossier complet** 🎉)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 6e-addition-soustraction | **riche** *(livré 2026-07-22, wave 4)* | — | Soustraction décimale posée en colonnes avec retenues, $15{,}20-6{,}75=8{,}45$ |
| 6e-angles | **riche** *(livré 2026-07-22, lot 3)* | — | 4 secteurs annotés (aigu/droit/obtus/plat) + triangle 37°/53°/90° sommant à 180° |
| 6e-division | **riche** *(livré 2026-07-22, wave 4)* | — | Division posée « en potence », $157\div12=13$ reste $1$, vérifié par Playwright |
| 6e-figures-geometriques | **riche** *(livré 2026-07-22, lot 3)* | — | Droite $(AB)$, segment $[AB]$, demi-droite $[AB)$ et cercle $(O,r)$ sur une figure annotée commune |
| 6e-fractions | **riche** *(livré 2026-07-22, wave 4)* | — | Disque/bande/grille $\frac12=\frac36=\frac{50}{100}$, trois représentations |
| 6e-multiplication | **riche** *(livré 2026-07-22, wave 4)* | — | Rectangle d'aire découpé, $7\times5{,}2=7\times5+7\times0{,}2$ |
| 6e-nombres-decimaux | **riche** *(livré 2026-07-22, wave 4)* | — | Droite graduée, $5{,}007<5{,}07<5{,}7=5{,}70$ (exemple du cours) |
| 6e-perimetres-aires | **riche** *(livré 2026-07-22, wave 4)* | — | Rectangle/triangle/disque, contour vs surface teintée |
| 6e-symetrie-axiale | **riche** *(livré 2026-07-22, lot 2)* | — | Axe $d$, point $A(5;2)$, pied $H(3;2)$, symétrique $A'(1;2)$ |
| 6e-volumes | **riche** *(livré 2026-07-22, wave 4)* | — | Cube 1cm³=1mL + pavé droit aquarium 60×30×40cm = 72L |

**Priorités niveau** : dossier 6e entièrement traité 2026-07-22 (lot 2 + lot 3 + wave 4).

### Maths 5e — `js/data/5e/` (15 modules, 15 riches — 100%)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 5e-aires-perimetres | **riche** *(livré 2026-07-22, wave 4)* | — | Terrain 30×20m avec piscine circulaire (rayon 4m) découpée, $400-50{,}3=349{,}7$ m² |
| 5e-angles-parallelisme | **riche** *(livré 2026-07-22, lot 3)* | — | 2 parallèles + sécante, 8 angles numérotés, alternes-internes/correspondants/coalternes-internes |
| 5e-expressions-litterales | **riche** *(livré 2026-07-22, wave 10)* | — | Regroupement de termes semblables $3x+5x=8x$, blocs convergents |
| 5e-fractions-operations | **riche** *(livré 2026-07-22, wave 4)* | — | Bandes fractionnaires $\frac23+\frac34=\frac{17}{12}$ ramenées au dénominateur 12 |
| 5e-nombres-relatifs | **riche** *(livré 2026-07-22, lot 3)* | — | Droite graduée, sous-marin $-120\to-75\to-155$ |
| 5e-parallelogrammes | **riche** *(livré 2026-07-22, wave 4)* | — | Parallélogramme/rectangle/losange/carré, diagonales et tics d'égalité vérifiés |
| 5e-priorites-operations | **riche** *(livré 2026-07-22, wave 10)* | — | Résolution en 4 étapes de $2+3^2\times(7-4)\div3-1=10$, portion active encadrée à chaque étape |
| 5e-probabilites | **riche** *(livré 2026-07-22, wave 4)* | — | Règle graduée 0→1, curseur impossible/équiprobable/certain |
| proportionnalite | **riche** *(livré 2026-07-22, wave 4)* | — | Droite $y=1{,}5x$, points $(5;7{,}50)$ et $(8;12)$, pente annotée |
| 5e-proportionnalite | **riche** *(livré 2026-07-22, wave 4)* | — | Double règle cm/m à l'échelle $1/25\,000$ (1cm→250m, 6cm→1500m) |
| 5e-statistiques | **riche** *(livré 2026-07-22, wave 4)* | — | Diagramme en bâtons des notes + moyenne $11{,}6$ en pointillé |
| reperage-graphique | **riche** | — | Gabarit du dossier |
| 5e-symetrie-centrale | **riche** *(livré 2026-07-22, lot 2)* | — | Repère, $A(5;3)$, centre $O(2;1)$, symétrique $A'(-1;-1)$ — gabarit reperage-graphique réutilisé |
| 5e-triangles | **riche** *(livré 2026-07-22, lot 3)* | — | Isocèle/équilatéral/rectangle côte à côte, tics d'égalité et angle droit marqués |
| 5e-volumes | **riche** *(livré 2026-07-22, wave 4)* | — | Pavé et cylindre en perspective, $V\approx942$ cm³=0,94L |

**Priorités niveau** : dossier 5e à 100% riche depuis wave 10 (2026-07-22).

### Maths 4e — `js/data/4e/` (12 modules, 12 riches — 100%)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 4e-cosinus | **riche** *(livré 2026-07-22, lot 2)* | — | Triangle $ABC$ rectangle en $C$, angle $\hat A$, seuls adjacent/hypoténuse nommés (sinus hors-programme à ce niveau) |
| 4e-droites-remarquables | **riche** *(livré 2026-07-22, wave 4)* | — | 4 droites remarquables + 4 points de concours vérifiés (centroïde, circoncentre, orthocentre, incentre) |
| 4e-fractions-mult-div | **riche** *(livré 2026-07-22, wave 10)* | — | Modèle d'aire, grille 3×7=21 cases, produit $\frac23\times\frac57=\frac{10}{21}$ (10 cases surlignées) |
| 4e-probabilites | **riche** *(livré 2026-07-22, wave 4)* | — | Venn $A\cap B$ (cœur/roi, jeu de 32 cartes), 7+1+3+21=32 vérifié |
| 4e-pythagore | **riche** | — | Gabarit du dossier |
| 4e-relatifs-mult-div | **riche** *(livré 2026-07-22, wave 10)* | — | Droites graduées miroir : $(-2)\times3=-6$ (3 sauts à gauche) vs $(-2)\times(-3)=+6$ (3 sauts à droite) |
| 4e-statistiques | **riche** *(livré 2026-07-22, wave 4)* | — | Boîte à moustaches, 8 coureurs, médiane 12,15s/Q1 11,65s/Q3 13,1s recalculés |
| 4e-translations | **riche** *(livré 2026-07-22, wave 4)* | — | $A(3;1)$, $\vec v(2;-4)$, $A'(5;-3)$, décomposition en escalier |
| 4e-triangle-rectangle-cercle | **riche** *(livré 2026-07-22, lot 3)* | — | Cercle, diamètre $[BC]$, point $A$ hors sommet, angle droit en $A$ vérifié à 90,003° |
| 4e-volumes | **riche** *(livré 2026-07-22, wave 4)* | — | Cône (entonnoir r=4cm, h=9cm), génératrice vs hauteur distinguées |
| calcul-algebrique | **riche** *(livré 2026-07-22, wave 10)* | — | Balance à 2 plateaux, $4x=20 \Rightarrow x=5$ (même gabarit que `bts-prep-calcul-litteral`) |
| puissances | **riche** *(livré 2026-07-22, wave 4)* | — | Échelle log $10^{-15}$ à $10^{26}$ m, repères réels du cours ; bug de contenu "$10^{41}$ ordres de grandeur" → "41 ordres de grandeur" corrigé au passage |

**Priorités niveau** : dossier 4e traité 2026-07-22 (lot 2 + lot 3 + wave 4), restent 3 modules explicitement marqués "aucun changement nécessaire".

### Maths 3e — `js/data/3e/` (12 modules, **12 riches — dossier complet** 🎉)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 3e-algorithmique | **riche** *(livré 2026-07-22, wave 4)* | — | Algorigramme normalisé, boucle `pour i de 1 à 3`, $S=1^2+2^2+3^2=14$ vérifié |
| 3e-arithmetique | **riche** *(livré 2026-07-22, wave 4)* | — | Arbre de décomposition $180=2^2\times3^2\times5$ |
| 3e-equations-inequations | **riche** *(livré 2026-07-22, wave 4)* | — | Droite graduée, $x>7$ (résolu de $3(x-2)>2x+1$), cercle ouvert + hachures |
| 3e-fonctions | **riche** | — | Gabarit du dossier |
| 3e-homotheties | **riche** *(livré 2026-07-22, wave 4)* | — | Triangle $ABC$ et image $A'B'C'$, centre $O$, $k=2$, $\vec{OA'}=2\vec{OA}$ vérifié |
| 3e-identites-remarquables | **riche** *(livré 2026-07-22, wave 4)* | — | Carré $(3+2)^2=9+6+6+4=25$ découpé en 4 aires |
| 3e-sections-solides | **riche** *(livré 2026-07-22, lot 3)* | — | Pyramide (côté 8cm, hauteur 12cm) coupée à 4cm du sommet, $k=1/3$, triangles semblables |
| 3e-stats-probas | **riche** *(livré 2026-07-22, wave 4)* | — | Venn Sportifs(80)/Musiciens(60), intersection 25, 200 élèves — 55+35+25+85=200 vérifié |
| 3e-systemes | **riche** *(livré 2026-07-22, wave 4)* | — | 2 droites $2x+y=7$ et $x-y=2$, intersection $(3;1)$ vérifiée |
| 3e-thales | **riche** | — | Gabarit du dossier |
| 3e-volumes | **riche** *(livré 2026-07-22, wave 4)* | — | 2 sphères $r=3$/$2r=6$cm, $V=113{,}04$/$904{,}32$ cm³, ratio 8 vérifié |
| trigonometrie | **riche** *(livré 2026-07-22, lot 2)* | — | Triangle SOH-CAH-TOA de référence, exemple chiffré hyp=13cm/θ=30° |

**Priorités niveau** : dossier 3e entièrement traité 2026-07-22 (lot 2 + lot 3 + wave 4).

### Maths 2nde — `js/data/lycee-2nde/` (14 modules, 0 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 2nde-algorithmique | absent | schéma normalisé | Organigramme boucle for/while |
| 2nde-calcul-algebrique | absent | schéma normalisé | Carré $(a+b)^2$ découpé en 4 aires |
| 2nde-droites-systemes | absent | courbe calculée | 2 droites, intersection $(2;5)$ |
| 2nde-echantillonnage | absent | courbe calculée | Courbe en cloche, intervalle $[f-e;f+e]$ surligné |
| 2nde-ensembles-nombres | absent | schéma normalisé | Cercles concentriques $\mathbb N\subset\mathbb Z\subset\mathbb Q\subset\mathbb R$ + droite graduée |
| 2nde-equations-inequations | absent | schéma normalisé | Droite graduée, ensemble solution $]-\infty;-3]$ |
| 2nde-fonctions-generalites | absent | courbe calculée | Courbe avec lecture image/antécédent, maximum annoté |
| 2nde-fonctions-reference | **riche** *(livré 2026-07-22, lot 3)* | — | Carré, inverse, racine carrée calculées point par point, 3 panneaux |
| 2nde-geometrie-plane | legacy-correct | schéma normalisé | Configuration de Thalès annotée |
| 2nde-probabilites | absent | schéma normalisé | Diagramme de Venn $A\cup B$ |
| 2nde-reperage-plan | absent | schéma normalisé | Repère, $A$/$B$, triangle des écarts $\Delta x$/$\Delta y$ |
| 2nde-statistiques | absent | courbe calculée | Nuage de points, moyenne et $[\bar x-\sigma;\bar x+\sigma]$ |
| fonctions-affines | **riche** *(livré 2026-07-22, lot 3)* | — | Droite $y=3x+1$ (exemple du cours), triangle de pente, point $(0;1)$ |
| vecteurs | **riche** *(livré 2026-07-22, lot 3)* | — | Vecteur $\vec T$ (câble traîneau, 50N à 30°), projections $T_x\approx43{,}3$N/$T_y=25$N |

**Priorités niveau** : ~~`fonctions-affines`~~, ~~`2nde-fonctions-reference`~~, ~~`vecteurs`~~ livrés 2026-07-22 — les 3 priorités du niveau sont traitées, restent les 10 modules "absent" pour une passe future.

### Maths 1re — `js/data/lycee-1re/` (10 modules, 1 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| 1re-derivation | absent | courbe calculée | Cubique + tangente horizontale en $x_0=1$ |
| 1re-geometrie-reperee | absent | schéma normalisé | Droite $ax+by+c=0$, vecteurs normal/directeur distincts |
| 1re-information-chiffree | absent | schéma normalisé | Frise multiplicative $V_i\to V_{interm}\to V_f$ |
| 1re-polynomes-signe | **riche** *(livré 2026-07-22, lot 3)* | — | 2 paraboles ($a>0$/$a<0$) issues du cours, zones de signe coloriées |
| 1re-probas-conditionnelles | absent | schéma normalisé | Arbre pondéré à 2 niveaux, chemins vers $A\cap B$ |
| 1re-produit-scalaire | absent | schéma normalisé | Vecteurs $\vec u$/$\vec v$, projection orthogonale en pointillés |
| 1re-second-degre | absent | courbe calculée | Parabole $2x^2-8x+6$, racines 1 et 3, sommet |
| 1re-suites | absent | courbe calculée | Nuage $(n,u_n)$ arithmétique vs géométrique |
| 1re-trigonometrie | **riche** | — | Pilote livré 2026-07-21 |
| 1re-variables-aleatoires | absent | courbe calculée | Diagramme en bâtons loi $\mathcal B(n,p)$, $E(X)$ annoté |

**Priorités niveau** : ~~`1re-polynomes-signe`~~ livré 2026-07-22 ; restent `1re-second-degre` (même piège du signe de $a$), `1re-probas-conditionnelles` (méthode enseignée jamais montrée).

### Maths Tle — `js/data/lycee-tle/` (12 modules, 0 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| tle-convexite | absent | courbe calculée | Cubique, zones concave/convexe, point d'inflexion |
| tle-denombrement | absent | schéma normalisé | Arbre "ordre compte/ne compte pas" |
| tle-derivation-complements | absent | courbe calculée | $f(x)=e^x/(x^2+1)$ + tangente |
| tle-equations-differentielles | absent (slot `schema:null` déjà réservé) | courbe calculée | Charge $U_C(t)=E(1-e^{-t/\tau})$, repère à $\tau$=63,2% |
| tle-exponentielle-logarithme | absent | courbe calculée | Décroissance radioactive, paliers de demi-vie |
| tle-geometrie-espace | absent | schéma normalisé | Perspective 3D, droites sécante/parallèle/gauche |
| tle-limites-continuite | absent | courbe calculée | Asymptotes verticale + horizontale, discontinuité |
| tle-logarithme | absent | courbe calculée | $\ln x$ vs $x$, croissances comparées |
| tle-lois-continues | **riche** *(livré 2026-07-22, lot 2)* | — | Gauss $\mathcal N(20000;2000^2)$, zones 68-95-99,7% (durée de vie LED) |
| tle-orthogonalite-espace | absent | schéma normalisé | Plan, point $M$, perpendiculaire $MH$ |
| tle-primitives-integrales | absent | courbe calculée | $x^2-1$, aires positive/négative hachurées |
| tle-suites-complements | **riche** *(livré 2026-07-22, lot 3)* | — | Toile d'araignée $u_{n+1}=\frac12u_n+3$, $u_0=5\to\ell=6$, 6 itérations |

**Priorités niveau** : ~~`tle-lois-continues`~~, ~~`tle-suites-complements`~~ livrés 2026-07-22 ; reste `tle-equations-differentielles` (exemple déjà quantifié, slot réservé).

### Maths BTS — `js/data/bts/` (13 modules, 1 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| bts-derivation-appliquee | absent | courbe calculée | Parabole profit $\Pi(x)$, sommet vs racines distingués |
| bts-fonctions-reelles | **riche** *(livré 2026-07-22, lot 3)* | — | $\eta(x)=100x/(x+5)$, asymptote $y=100$ |
| bts-fourier | **riche** | — | Gabarit du dossier |
| bts-integrales-appliquees | absent | courbe calculée | Aire algébrique hachurée (positive/négative) |
| bts-laplace | legacy-correct | courbe calculée (complément) | Réponse RC $u_C(t)=5(1-e^{-t})$, $\tau$ annoté |
| bts-loi-normale | **riche** *(livré 2026-07-22, lot 2)* | — | Gauss $\mathcal N(100;15^2)$, zones 68-95-99,7% |
| bts-matrices | absent | schéma normalisé | Circuit 2 mailles, $I_1$/$I_2$ annotés |
| complexes | legacy-correct | schéma normalisé | Diagramme de Fresnel, inductif vs capacitif |
| eq-diff-2 | absent | courbe calculée | 3 régimes (pseudo-périodique/critique/apériodique) superposés |
| statistiques | absent | schéma normalisé | Axe gradué, $\bar x\pm u_A$/$\pm2u_A$ |
| bts-probas-discretes | absent | courbe calculée | Diagramme en bâtons loi de Poisson |
| bts-suites-appliquees | absent | courbe calculée | Intérêts simples (droite) vs composés (exponentielle) |
| bts-stats-deux-variables | absent | courbe calculée | Nuage + droite de régression, résidus |

**Priorités niveau** : ~~`bts-loi-normale`~~, ~~`bts-fonctions-reelles`~~ livrés 2026-07-22 ; reste `eq-diff-2`.

### BTS Prep (remise à niveau) — `js/data/bts-prep/` (14 modules, 1 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| bts-prep-analyse-dim | legacy-correct | schéma normalisé | Tuyauterie en écoulement, ρ/v/D/µ étiquetés (Reynolds) |
| bts-prep-calcul-litteral | legacy-correct | schéma normalisé | Balance à 2 plateaux |
| bts-prep-conversions | legacy-correct | schéma normalisé | Réglettes graduées bar/Pa, m³·h⁻¹/l·min⁻¹ |
| bts-prep-donnees-techniques | legacy-pauvre (ASCII) | courbe calculée | HMT(Q) décroissante, point nominal annoté |
| bts-prep-equations-transf | legacy-correct | courbe calculée | $e^x$ et $\ln x$ symétriques par rapport à $y=x$ |
| bts-prep-equations | legacy-correct | courbe calculée | 3 paraboles selon signe de $\Delta$ |
| bts-prep-fonctions | **riche** | — | Gabarit du dossier |
| bts-prep-graphiques | legacy-pauvre (ASCII) | schéma normalisé | Construction géométrique de l'interpolation linéaire |
| bts-prep-logarithme | legacy-pauvre (ASCII) | courbe calculée | Charge RC, repères $\tau$/$2\tau$/$5\tau$ |
| bts-prep-proportionnalite | legacy-correct | schéma normalisé | Chaîne énergétique $P_{absorbée}\to P_{utile}+P_{pertes}$ |
| bts-prep-puissances | legacy-correct | schéma normalisé | Axe log $10^{-12}$ à $10^{12}$ avec préfixes SI |
| bts-prep-si-unites | legacy-correct | schéma normalisé | Idem (à mutualiser avec puissances) |
| bts-prep-trigonometrie | **riche** *(livré 2026-07-22, lot 2)* | — | Triangle générique + application circuit RL ($Z=100\,\Omega$, $\varphi\approx53,1°$) |
| bts-prep-vecteurs | legacy-pauvre (ASCII) | schéma normalisé | Vecteur $F$, projections $F_x$/$F_y$ |

**Priorités niveau** : ~~`bts-prep-trigonometrie`~~ livré 2026-07-22 ; restent `bts-prep-logarithme`, `bts-prep-vecteurs` (esquisse ASCII déjà présente, signe du besoin perçu — conversion directe vers SVG riche).

### SI 2nde — `js/data/si-2nde/` (5 modules, 0 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| si-2nde-analyse-fonctionnelle | legacy-pauvre | schéma normalisé | Diagramme pieuvre, traits pleins (FS) vs pointillés (FC) |
| si-2nde-capteurs-actionneurs | legacy-pauvre | courbe calculée | Escalier de quantification CAN, quantum $q$ annoté |
| si-2nde-chaines-energie-info | legacy-pauvre | schéma normalisé | Schéma-bloc SysML 4 blocs énergie + 3 blocs information |
| si-2nde-mecanique-base | **riche** *(livré 2026-07-22, lot 3)* | — | Brouette, $F_1{\times}d_1=F_2{\times}d_2=120$ N·m (exemple du cours) |
| si-2nde-programmation | legacy-pauvre | schéma normalisé | Organigramme boucle for (somme des carrés) |

**Priorités niveau** : ~~`si-2nde-mecanique-base`~~ livré 2026-07-22 ; restent `si-2nde-chaines-energie-info` (module pivot de la filière), `si-2nde-analyse-fonctionnelle`.

### SI 1re — `js/data/si-1re/` (8 modules, 0 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| si-1re-asservissement | **riche** *(livré 2026-07-22, lot 2)* | — | Schéma-bloc à 5 éléments (comparateur/correcteur/actionneur/système/capteur) |
| si-1re-cinematique | legacy-correct | courbe calculée | $v(t)$/$x(t)$ MRUA, pente/aire annotées |
| si-1re-energie-rendement | legacy-correct | schéma normalisé | Bilan Sankey $P_{absorbée}\to P_{utile}+P_{pertes}$ |
| si-1re-logique-boole | legacy-correct | schéma normalisé | Logigramme, simplification De Morgan |
| si-1re-poo | legacy-correct | schéma normalisé | Diagramme de classes UML, héritage `Capteur`→`CapteurAlarme` |
| si-1re-rdm | legacy-correct | courbe calculée | $\sigma=f(\varepsilon)$, acier vs alu, pente $E$ |
| si-1re-statique-pfs | **riche** *(livré 2026-07-22, lot 2)* | — | Poutre isostatique $L=4$m, $F=600$N à $d=1$m de A, $R_A=450$N/$R_B=150$N |
| si-1re-sysml | legacy-correct | schéma normalisé | Diagramme bdd, portail automatique en 6 blocs |

**Priorités niveau** : ~~`si-1re-statique-pfs`~~ et ~~`si-1re-asservissement`~~ livrés 2026-07-22 ; reste `si-1re-cinematique`.

### SI Tle — `js/data/si-tle/` (7 modules, 1 riche)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| si-tle-grafcet | **riche** *(livré 2026-07-22, lot 3)* | — | GRAFCET portail (E0→E1→E2→E0), notation officielle, étape initiale double carré |
| si-tle-transmission | legacy-correct | schéma normalisé | Engrenage + courroie-poulie, sens de rotation |
| si-tle-energie-cinetique | legacy-correct | courbe calculée | Distance de freinage $d(v)$, facteur 4 entre $v$ et $2v$ |
| si-tle-dynamique-pfd | legacy-correct | schéma normalisé | Solide + forces $\vec P$/$\vec N$/$\vec F$/$\vec f$ |
| si-tle-asservis-pid | **riche** *(livré 2026-07-22, lot 2)* | — | Boucle fermée + réponses P/PI/PID superposées (dépassement qualitatif documenté en caption) |
| si-tle-reseaux | legacy-correct | schéma normalisé | Encapsulation TCP/IP en poupées russes |
| si-tle-bode | **riche** | — | Pilote livré 2026-07-21, gabarit du dossier |

**Priorités niveau** : ~~`si-tle-grafcet`~~, ~~`si-tle-asservis-pid`~~ livrés 2026-07-22 ; reste `si-tle-transmission`.

### SI BTS — `js/data/si-bts/` (8 modules, 2 riches)

| Module | État | Type suggéré | Suggestion |
|---|---|---|---|
| si-bts-automatique | **riche** | — | Pilote livré 2026-07-21 |
| si-bts-cao | legacy-correct | schéma normalisé | Coupe ajustement H7/g6, zones de tolérance |
| si-bts-capteurs-industriels | legacy-correct | schéma normalisé | Pont de Wheatstone (cité 6× dans le module, jamais dessiné) |
| si-bts-electrotechnique | legacy-correct | courbe calculée | Caractéristique couple-vitesse $C(n)$ moteur asynchrone |
| si-bts-gestion-energie | legacy-correct | courbe calculée | Diagramme de Ragone (données déjà présentes dans la table) |
| si-bts-hydraulique | **riche** | — | Pilote livré 2026-07-21 |
| si-bts-mecanique-solides | legacy-correct | schéma normalisé | Construction du CIR (vitesses de 2 points, perpendiculaires) |
| si-bts-rdm-avancee | legacy-correct | schéma normalisé | Coupe d'arbre, répartitions $\sigma(y)$ et $\tau(r)$ |

**Priorités niveau** : `si-bts-mecanique-solides` (CIR décrit en toutes lettres, jamais montré), `si-bts-capteurs-industriels` (Wheatstone omniprésent, absent visuellement), `si-bts-gestion-energie` (gain immédiat, données déjà chiffrées).

## Synthèse globale et priorités transversales

Sur 140 modules, seuls 10 (7%) ont une illustration réelle — les 6 pré-existants (`3e-thales`, `3e-fonctions`, `4e-pythagore`, `5e-reperage-graphique`, `bts-prep-fonctions`, `bts-fourier`) et les 4 du lot pilote 2026-07-21. Les 130 restants se répartissent en 58 legacy-correct (tables informatives mais qui n'illustrent rien), 28 legacy-pauvre/ASCII (dont 5 modules `bts-prep` ont déjà une tentative ASCII — signe explicite du besoin), et 44 totalement dépourvus de `diagram` (concentrés en 2nde, 1re et Tle Maths : 33 des 36 modules lycée Maths sont sans aucun diagram).

**Constat par filière** :
- **Maths collège (6e-5e-4e-3e)** : contenu texte déjà riche et aéré, mais quasi aucune figure — c'est là où le gain pédagogique par module est le plus élevé car les sujets sont très majoritairement géométriques (symétries, triangles, Thalès, figures de base).
- **Maths lycée (2nde-1re-Tle)** : le trou le plus large et le plus homogène — 33/36 modules sans aucun diagram, alors que fonctions et courbes de référence sont le cœur du programme. Priorité : les modules "courbe de référence" (`fonctions-affines`, `2nde-fonctions-reference`, `tle-lois-continues`) où le calcul numérique est direct.
- **SI (2nde à BTS)** : bonne base textuelle (tables toutes legacy-correct sauf SI 2nde), mais les schémas normalisés propres à la discipline (schéma-bloc, GRAFCET, Wheatstone, CIR, statique) sont systématiquement absents alors que ce sont des conventions attendues à l'examen. Plusieurs gabarits sont directement réutilisables entre niveaux (`si-bts-automatique` → `si-1re-asservissement`/`si-tle-asservis-pid`).
- **BTS/BTS Prep Maths** : `bts-loi-normale` est le trou le plus visible (figure canonique du programme, citée partout, absente).

**5 priorités transversales pour la suite du chantier** — **toutes livrées le 2026-07-22 (lot 2)** :
1. ~~`bts-loi-normale.js` / `tle-lois-continues.js`~~ — Gauss 68-95-99,7%, livré.
2. ~~`si-1re-statique-pfs.js`~~ — poutre isostatique, livré.
3. ~~`6e-symetrie-axiale.js` / `5e-symetrie-centrale.js`~~ — livré, `5e-symetrie-centrale` a bien réutilisé le SVG de `reperage-graphique.js`.
4. ~~Trio `si-1re-asservissement` / `si-tle-asservis-pid`~~ (déjà fait : `si-bts-automatique`) — livré, gabarit de schéma-bloc décliné sur les 3 niveaux.
5. ~~`bts-prep-trigonometrie.js` / `trigonometrie.js` (3e) / `4e-cosinus.js`~~ — livré, triangle SOH-CAH-TOA décliné sur 3 niveaux, géométrie adjacent/opposé/hypoténuse vérifiée sur chacun.

Prochaines priorités à définir : voir les priorités niveau par niveau encore ouvertes ci-dessus (ex. `fonctions-affines`, `2nde-fonctions-reference`, `si-2nde-mecanique-base`, `si-bts-mecanique-solides`...).

La production réelle (calcul Python des courbes, écriture SVG, vérification double) suit le pipeline décrit dans `docs/superpowers/specs/2026-07-21-illustrations-pedagogiques-design.md`.
