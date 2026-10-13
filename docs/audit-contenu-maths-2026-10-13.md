# Audit du contenu mathématiques — 2026-10-13

Synthèse des phases 1 (mesure automatique) et 2 (lecture pédagogique) de l'audit du corpus maths, puis plan de correction (phase 4).

- Mesure automatique : `node scripts/analyser-corpus.js`, sorties `docs/analyse-corpus-maths-2026-10-13.{csv,md}`.
- Lecture pédagogique : 9 rapports par niveau (grille à 5 axes notés de 0 à 3, total /15, chaque défaut cité `fichier:ligne` avec une réécriture prête à coller). Les rapports bruts sont restés dans le scratchpad de la session et ne sont pas versionnés ; leurs conclusions sont reprises ici.

## 1. Résultats chiffrés

### Phase 1 — les 112 modules, 60 tirages de `generate()` chacun

| Mesure | Résultat |
|---|---|
| Score composite moyen | **85,9 / 100** (min 79 : `5e-priorites-operations`, max 91,8 : `2nde-equations-inequations`) |
| Exceptions dans `generate()` | 0 |
| Décimale anglaise dans un énoncé | 0 |
| Générateur à un seul moule d'énoncé | 0 |
| `solution` renvoyée en chaîne au lieu d'un tableau | **9 modules**, tous `bts-prep` |
| Quiz dont toutes les bonnes réponses sont au même index | quasi tous les quiz à 3 questions du collège (6e → 3e) |

Le score composite mesure la forme (fiabilité, variété, présence des blocs). Il ne voit pas une réponse fausse, une notion hors niveau ou un distracteur absurde : c'est le rôle de la phase 2.

### Phase 2 — lecture complète de 38 modules (les plus faibles de chaque niveau)

| Niveau | Modules lus | Note moyenne /15 | Plus faible | Défauts g0 / g1 / g2 |
|---|---|---|---|---|
| 6e | 9 | 10,1 | `6e-symetrie-axiale`, `6e-angles` (7) | 4 / 4 / 27 |
| 5e | 6 | 10,0 | `5e-fractions-operations` (8) | 0 / 6 / 26 |
| 4e | 5 | 9,4 | `4e-droites-remarquables`, `calcul-algebrique` (8) | 0 / 11 / 22 |
| 3e | 4 | 9,5 | `trigonometrie` (6) | 2 / 4 / 21 |
| 2nde | 2 | 7,0 | les deux (7) | 0 / 8 / 11 |
| 1re | 2 | 8,5 | `1re-suites` (8) | 1 / 2 / 10 |
| Tle | 2 | 9,0 | `tle-derivation-complements` (8) | 0 / 3 / 14 |
| bts-prep | 6 | 8,2 | `bts-prep-graphiques`, `bts-prep-trigonometrie` (7) | 5 / 12 / 18 |
| BTS | 2 | 7,5 | `eq-diff-2` (7) | 0 / 8 / 9 |
| **Total** | **38** | **9,4** | | **12 / 58 / 158** |

Gravité : 0 = trompe ou bloque l'élève ; 1 = défaut net ; 2 = défaut mineur.

Les 12 défauts de gravité 0 :

| Module | Défaut |
|---|---|
| `1re-suites` | Le problème (carbone 14) est insoluble en 1re : il demande un logarithme. |
| `3e-equations-inequations` | La tâche `equationNue` peut tirer $4x + 2 = 4x + 2$ et attendre $x = 11$. |
| `3e-equations-inequations` | La tâche `comparer` attend la borne au lieu de l'entier strictement supérieur quand le seuil est entier. |
| `6e-symetrie-axiale` | Exercice, quiz et évaluation attendent des nombres négatifs et une formule algébrique ($x' = 2k - x$) en 6e. |
| `6e-nombres-decimaux` | « Arrondir au dixième » contredit la règle enseignée quand le chiffre des centièmes vaut 5 (≈ 0,5 % des tirages). |
| `6e-angles` | « Les deux graduations sont complémentaires à 180° » : le module contredit sa propre définition. |
| `6e-angles` | Équations à inconnue $x$ dans le quiz et l'évaluation (2 points). |
| `bts-prep-graphiques`, `-equations-transf`, `-vecteurs`, `-si-unites`, `-trigonometrie` | `solution` en chaîne : la correction et l'écran de réussite ne s'affichent jamais (5 lus, 9 au total). |

## 2. Défauts systémiques (classés par effet sur l'élève)

1. **Réponse attendue fausse ou ambiguë sur certains tirages de `generate()`.** Cas dégénérés non filtrés : équation identité (3e), seuil entier (3e), arrondi au 5 (6e), équation affichée arrondie qui rejette la bonne réponse (4e `calcul-algebrique`, 23 % des tirages), question sans réponse dans 47 % des tirages (2nde `fonctions-generalites`), branche `a0` qui vaut toujours 0 (`bts-fourier`). Corriger dans le générateur, pas dans l'énoncé.
2. **`solution` en chaîne dans 9 modules `bts-prep`.** Le moteur attend un tableau d'étapes ; la correction ne s'affiche pas. Correctif mécanique.
3. **Notions hors niveau enseignées, exercées ou évaluées.** Négatifs et équations en 6e (symétrie, angles), puissances de 10 négatives en 6e-volumes, multiplication/division de fractions en 5e, pente et coefficient directeur dans `reperage-graphique` (5e), vecteurs et vocabulaire anglais (« circumcentre », « incentre ») en 4e, physique de lycée dans le quiz de trigonométrie de 3e, $\sum$ et $n(n+1)/2$ en 2nde, logarithme en 1re, $(\ln u)'$ avant le chapitre du logarithme en Tle.
4. **Notions évaluées jamais enseignées (alignement).** `//` en 2nde algorithmique, « point de fonctionnement » et « courbe de réseau » en bts-prep-graphiques, $\omega = 2\pi f$ en bts-prep-trigonometrie, inconnue des deux côtés en 4e, résolution de l'équation différentielle en `eq-diff-2`, « disque » en 6e.
5. **Quiz devinable.** Le moteur (`js/engines/quizEngine.js:11`) ne mélange que l'ordre des questions, jamais les options ; la plupart des quiz du collège ont leurs 3 bonnes réponses au même index, et les quiz bts-prep en enchaînent jusqu'à 10 d'affilée.
6. **Distracteurs qui ne correspondent à aucune erreur d'élève**, parfois égaux à la bonne réponse (4e fractions Q3, bts-prep-vecteurs Q5) ou aberrants ; corrections qui n'expliquent que la bonne réponse ; option correcte trois fois plus longue que les autres (bts-prep).
7. **Figure et énoncé qui se contredisent.** Croisement de courbes mal placé (bts-prep-graphiques), « β − α = 20° » contre γ = 10° (bts-prep-trigonometrie), figure de la tâche tangente cotée avec d'autres longueurs (3e trigonométrie), notes de schéma décrivant des traits absents (4e).
8. **Contextes incohérents avec les valeurs tirées.** Cycliste à 2 km/h, aquarium de 5 × 5 × 3 cm, piscine d'un litre, pneu de rayon 12 cm, rampe d'accès à 60°, durée négative, débit « vectoriel », tapis de convoyeur à 54 km/h, problème bts-prep-si-unites qui ignore la donnée « 25 kW ».
9. **Formatage des cas limites dans les énoncés générés.** « $1x$ », « $+ 0$ », « $- \times$ », « $4 + -4$ », « $e^{-t/1}$ », « de le », « de une », et sur-accentuation (« litrès », « mètrès », « centilitrès » dans 4 fichiers de 4e).
10. **Pièges et méthodes mal ciblés.** Le `piege` vise souvent une erreur marginale ou hors niveau au lieu de l'erreur que le module évalue ; certaines étapes de `method` introduisent trois nouveautés à la fois ; quelques étiquettes SVG visibles sans accents ; coquille « vin> » (pour « vingt ») dans 4 fichiers de 1re.

## 3. Plan de correction par niveau (phase 4)

Un commit par lot. Avant chaque édition, le module est relu en entier ; toute réponse attendue modifiée est recalculée à la main. Après chaque lot : `node --check`, `node scripts/check-decimal-notation.js`, `node scripts/manuel/verifier-corpus.js`, 60 tirages de `generate()` par module touché, `node scripts/analyser-corpus.js`.

| Lot | Contenu |
|---|---|
| 0 — gains rapides | « vin> » → « vingt » (4 fichiers de 1re) ; `solution` en tableau dans les 9 modules bts-prep. |
| 1 — 5e | Quiz réindexés et distracteurs adossés à des erreurs réelles ; retrait de la multiplication/division de fractions ; contextes réalistes ; piège sur rayon/diamètre (volumes) et sur la pondération (statistiques). |
| 2 — bts-prep | `bts-prep-si-unites` tâche 4 (25 kW) en priorité ; figures cohérentes (graphiques, trigonométrie) ; notions évaluées enseignées ; coche « ✓ » visible retirée ; quiz réindexés. |
| 3 — 4e | Piège et distracteurs des fractions ; consigne d'arrondi ; vocabulaire de collège dans droites remarquables ; inconnue des deux côtés enseignée ; sur-accentuation corrigée. |
| 4 — 6e | Symétrie axiale et angles ramenés au programme de 6e (gravité 0) ; arrondi au 5 ; puissances négatives retirées ; contextes. |
| 5 — 3e | Générateur d'équations (gravité 0) ; quiz et piège de trigonométrie recentrés sur le chapitre ; solutions de pseudo-code sur plusieurs lignes. |
| 6 — 2nde | `//` enseigné ; programmes sur plusieurs lignes ; tâche `images` sans question vide ; « tableau de variations » enseigné ou retiré. |
| 7 — 1re | Problème carbone 14 rendu soluble en 1re (priorité) ; évaluation trigonométrie Q3 à une seule bonne option. |
| 8 — Tle | $(\ln u)'$ ; inférence « vitesse croissante » corrigée ; contextes de `expComposee`. |
| 9 — BTS | Résolution de l'équation différentielle enseignée ; « phénomène de Gibbs » et formule de puissance corrigés ; branche `a0` ; évaluation distincte du quiz. |

## 4. Limites

- **Échantillon.** La lecture complète porte sur 38 modules sur 112, choisis parmi les plus faibles au score composite. Les 74 autres n'ont que la mesure automatique ; les défauts systémiques 5, 6, 8 et 9 y sont probables.
- **Mélange des options du quiz.** Le corriger dans le moteur réglerait tout le corpus d'un coup, mais 31 corrections (toutes matières) citent une lettre d'option et deviendraient fausses. En attendant cette décision, les quiz sont réindexés dans les données des modules lus.
- **Décisions de programme laissées à l'auteur** : rattachement de `reperage-graphique` en 5e ; $\sin^2 + \cos^2 = 1$ et notation d'intervalle en 3e (enrichissement assumé ou retrait) ; périmètre des droites remarquables en 4e ; passerelles de physique (`physics`) en 3e trigonométrie et 5e priorités ; projeté sur une droite en Tle ; couverture du 1er ordre en BTS.
- **Saisie à virgule.** Les réponses passent par `<input type="number">` puis `parseFloat` (`js/engines/shared.js:8`). Une virgule refusée par le navigateur donne une valeur vide et le message « Entre un nombre » : pas de note fausse, mais une friction possible selon le navigateur. Non testé sur poste réel.
- **Hors périmètre.** Les étiquettes « oppose » / « hypotenuse » sans accent viennent de `js/data/figures-exercices.js` (contrainte historique du convertisseur de manuels, à revérifier) ; `figureSymetrie` affiche « axe x = 2 ».

## 5. Bilan de la phase 4 (2026-10-13)

Les 38 modules lus ont été corrigés, en un commit par lot : 5c742b5 (gains rapides), e9c3f08 (1re), 1804559 (Tle), b769691 (2nde), a083670 (BTS), 59115ae (3e), c9c4234 (5e), e01ffb4 (bts-prep), 8043552 (6e), b11cd35 (4e), 2fc570e (figure de symétrie), e898f71 (`?v=64`).

- Les 12 défauts de gravité 0 et tous les défauts de gravité 1 sont corrigés. Les défauts de gravité 2 le sont aussi, sauf les réécritures que les correcteurs ont écartées ou adaptées parce qu'elles étaient fausses. Exemple : un distracteur « 836 kJ » proposé en remplacement était égal à la bonne réponse (0,836 MJ).
- Toute réponse attendue modifiée a été recalculée à la main. Les plus visibles :
  - `1re-suites` : 17 190 ans au lieu de 8 108 ans obtenus par logarithme ;
  - `bts-prep-si-unites` : 14 000 € contre 10 800 €, soit 3 200 € d'économie ;
  - `3e-equations-inequations` : un seuil entier de 8 donne la réponse 9 ;
  - `6e-symetrie-axiale` : l'évaluation Q1 attend 7 au lieu de −7.
- Contrôles finaux sur les 112 modules :
  - 60 tirages de `generate()` par module, aucun problème ;
  - `check-decimal-notation` : 0 erreur ;
  - `verifier-corpus` : 248/248 modules valides ;
  - score composite moyen : 85,9 → **87,0**.
- Quiz : dans les modules lus, les bonnes réponses ont été réindexées dans les données, et plus aucune correction ne cite une lettre ou une position d'option.

### Décisions restant à l'auteur

1. **Mélange des options dans `quizEngine.js`.** Il réglerait aussi les 74 modules non lus. Il faut d'abord reformuler les corrections qui citent une option par sa lettre (« option B ») ou par sa position (« la réponse 3 ») : il en reste par exemple dans `5e-expressions-litterales`, `5e-parallelogrammes`, `5e-triangles`, `tle-equations-differentielles`, `tle-logarithme` et `2nde-geometrie-plane`.
2. **Les points de programme listés au § 4**, inchangés.
3. **Programme de 6e-angles.** La somme des angles du triangle et le triangle isocèle structurent tout le module : c'est une avance sur le programme de 6e.
4. **Arrondi au dixième en 6e-nombres-decimaux** : il est exercé mais pas expliqué dans le cours.
5. **`bts-prep-graphiques`, problème** : le cahier des charges « 7 m³/h à 30 m » ne colle pas à la loi de réseau (19,7 m).
6. **Fichiers `js/data` chargés par `_loadScript()` (`js/loader.js`)** : ils n'ont pas de suffixe `?v=`. Seul le cache HTTP décide quand un navigateur reprend une version corrigée.
