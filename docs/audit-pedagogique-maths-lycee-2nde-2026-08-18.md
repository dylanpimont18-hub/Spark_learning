# Audit pédagogique — Mathématiques Lycée, Niveau 2nde

> Date : 2026-08-18
> Périmètre : les 13 modules de 2nde (`js/data/lycee-2nde/*.js`, hors `index.js` qui est un stub vide) + `docs/programmes-maths.md`, `js/data/helpers.js`, `scripts/check-decimal-notation.js` comme référentiels transverses.
> Méthode : relecture critique sur 5 axes (exactitude mathématique, conformité au programme, typographie mathématique/française, clarté pédagogique, orthographe/intégrité des données) + exécution effective de `node scripts/check-decimal-notation.js` pour détecter les bugs dynamiques de notation décimale (ceux invisibles à la simple lecture du source, révélés uniquement à l'exécution de `generate()`).

---

# 🎓 Rapport d'analyse : Niveau 2nde

## 🚨 Alertes Critiques (Rigueur Mathématique et Programme)

- **`js/data/lycee-2nde/vecteurs.js` — Hors-programme, chapitre entier manquant.** Le programme officiel de 2nde (`docs/programmes-maths.md`, item 6 : *« Vecteurs (notion, coordonnées, opérations) »*, id suggéré `2nde-vecteurs`) attend la **notion de vecteur** (translation, notation $\vec{AB}$, égalité de vecteurs), les **coordonnées d'un vecteur** ($x_B-x_A\,;\,y_B-y_A$), la **somme de deux vecteurs** (relation de Chasles), la **multiplication par un réel**, et la **colinéarité**. Or l'unique module vecteurs de 2nde (`id: 'vecteurs'`, confirmé être le seul via `index.js`, qui est vide) traite exclusivement la **projection trigonométrique d'une force** ($F_x = F\cos\theta$, $F_y = F\sin\theta$, plan incliné) — un contenu de *physique appliquée* qui présuppose déjà acquise la notion de vecteur, sans jamais l'enseigner. Aucun exercice sur l'addition de vecteurs, le calcul de coordonnées à partir de deux points, ou la colinéarité. **C'est un trou de programme complet**, pas une simple lacune de contenu : un élève qui ne suit que ce module n'aura jamais vu la définition d'un vecteur en mathématiques.
- **Bug dynamique de notation décimale confirmé par exécution** (`node scripts/check-decimal-notation.js`, 3 graines × 40 tirages = 120 exécutions de `generate()` par module) — décimale anglaise (`0.55` au lieu de `0{,}55`) affichée aux élèves dans le `hint` ou la `solution` de l'exercice, alors que le **source** ne montre rien d'anormal (c'est le bug « invisible à la lecture » documenté dans l'en-tête du script). Touche **5 des 14 modules** :
  - `2nde-echantillonnage.js` — **1200 occurrences / 120 tirages** (quasi systématique, `hint` + `solution`)
  - `2nde-probabilites.js` — 354 occurrences (`solution`)
  - `2nde-reperage-plan.js` — 288 occurrences (`solution`)
  - `vecteurs.js` — 202 occurrences (`solution`, ligne de vérification par la norme)
  - `2nde-fonctions-reference.js` — 72 occurrences (`solution`, branche « domaine »)

  Détail et correctifs exacts ci-dessous, fichier par fichier.

## 🔍 Corrections détaillées par fichier

### Fichier : `2nde-echantillonnage.js`
- Clé `exercice.generate()` — `fActual`, `e`, `bInf`, `bSup` sont calculés avec `.toFixed(4)` puis interpolés **nus** dans `hint` et `solution` (seule la dernière ligne utilise déjà `fr()`) →
  ```js
  hint: `$f = \\frac{${fav}}{${n}} = ${fr(fActual)}$. Puis $e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${fr(e)}$.`,
  solution: [
    `$f = \\frac{${fav}}{${n}} = ${fr(fActual)}$`,
    `$e = \\frac{1}{\\sqrt{${n}}} = \\frac{1}{${sqrtN}} = ${fr(e)}$`,
    `IC = $[${fr(fActual)} - ${fr(e)} ; ${fr(fActual)} + ${fr(e)}] = [${fr(bInf)} ; ${fr(bSup)}]$`,
    `On est sûr à $95\\%$ que la vraie proportion est entre $${fr(bInf * 100, 1)}\\%$ et $${fr(bSup * 100, 1)}\\%$.`
  ]
  ```
  (`sqrtN` reste tel quel : c'est toujours un entier puisque `n` est tiré dans `[100, 225, 400, 625, 900]`, tous des carrés parfaits.)
- Clé `cours.intro` / `cours.piege` : *« Cette formule est une approximation valable pour $n \geq 30$ »*. Le référentiel officiel (Éduscol, 2de, thème Échantillonnage) admet la formule $[f-1/\sqrt n\,;\,f+1/\sqrt n]$ pour $n \geq 25$ (et $0{,}2 \le p \le 0{,}8$), pas $n \geq 30$. Correction suggérée →
  ```
  Cette formule est une approximation valable pour n ≥ 25 (et une fréquence f ni trop proche de 0, ni de 1).
  ```

### Fichier : `2nde-fonctions-reference.js`
- Clé `exercice.generate()`, branche `'domaine'` — `borne` (résultat de `.toFixed(2)`) est interpolé nu avec `\approx`, et `borneExact` (qui vaut `borne` quand la division n'est pas entière) l'est aussi dans la ligne « Domaine » →
  ```js
  solution: [
    `Condition : ${ctx.cond}`,
    `${ctx.sol}$${b % a === 0 ? ` = ${b / a}` : ` \\approx ${fr(borne)}`}$`,
    `Domaine : $${ctx.borneType === 'inf' ? `[${fr(borneExact)};+\\infty[` : `]-\\infty;${fr(borneExact)}]`}$`
  ]
  ```
  (Quand `b % a === 0`, `fr()` sur un entier ne fait rien de nuisible : `fr(3)` → `"3"`.)

### Fichier : `2nde-probabilites.js`
- Clé `exercice.generate()` — `pAuB` et `pNi` (`.toFixed(4)`) interpolés nus dans `solution`, alors que la ligne suivante utilise déjà `fr()` correctement →
  ```js
  solution: [
    `$P(A \\cup B) = \\frac{${nA} + ${nB} - ${nAB}}{${n}} = \\frac{${nAuB}}{${n}} \\approx ${fr(pAuB)}$`,
    `$P(\\overline{A \\cup B}) = 1 - ${fr(pAuB)} = ${fr(pNi)}$`,
    `Il y a environ $${fr(pNi * 100, 1)}\\%$ de chances que l'élève ne fasse aucune des deux activités.`
  ]
  ```

### Fichier : `2nde-reperage-plan.js`
- Clé `exercice.generate()` — `mx`, `my` (milieu, peut être un demi-entier comme $8{,}5$) et `t[2]/2` interpolés nus dans `solution` →
  ```js
  solution: [
    `$AB = \\sqrt{(${x2}-(${x1}))^2+(${y2}-(${y1}))^2} = \\sqrt{${t[0]}^2+${t[1]}^2} = \\sqrt{${t[0]*t[0]}+${t[1]*t[1]}} = \\sqrt{${t[2]*t[2]}} = ${t[2]}$`,
    `Milieu $M\\left(\\frac{${x1}+${x2}}{2};\\frac{${y1}+${y2}}{2}\\right) = M(${fr(mx)};${fr(my)})$`,
    `Vérification : $MA = ${fr(t[2] / 2)}$ et $MB = ${fr(t[2] / 2)}$ ✓`
  ]
  ```

### Fichier : `vecteurs.js`
- Clé `exercice.generate()` — les deux premières lignes de `solution` enveloppent bien `Fx`/`Fy` avec `fr()`, mais la **ligne de vérification par la norme** réutilise `Fx`/`Fy` nus →
  ```js
  solution: [
    `Composante horizontale : $F_x = F\\cos(\\theta) = ${F} \\times \\cos(${angle}°) = ${F} \\times ${fr(cosVals[angle], 3)} \\approx ${fr(Fx)}$ N`,
    `Composante verticale : $F_y = F\\sin(\\theta) = ${F} \\times \\sin(${angle}°) = ${F} \\times ${fr(sinVals[angle], 3)} \\approx ${fr(Fy)}$ N`,
    `Vérification par la norme : $\\sqrt{${fr(Fx)}^2 + ${fr(Fy)}^2} = \\sqrt{${fr(Fx * Fx, 1)} + ${fr(Fy * Fy, 1)}} \\approx ${fr(norm)}$ N $\\approx ${F}$ N ✓`
  ]
  ```

### Fichier : `2nde-equations-inequations.js`
- Clé `exercice.generate()`, branche de repli (`sol` non entier ou `< 1`) — trois variables sont calculées mais **jamais utilisées** : `negCoeff` (déclarée, jamais lue), `rhs` (calculée, jamais lue), `lhs_a` (alias inutile de `a2`). Ce n'est pas une erreur visible par l'élève, mais un reliquat de refactor qui fragilise la maintenance future →
  ```js
  // Supprimer ces trois lignes mortes :
  // const negCoeff = -rand(2, 5);
  // ...
  // const rhs = negCoeff * ans2 + c;
  // const lhs_a = a2;
  ```
  Le reste de la branche fonctionne à l'identique sans ces variables (seuls `a2`, `b2`, `ans2`, `total` sont réellement utilisés).

### Fichier : `2nde-fonctions-generalites.js`
- Clé `quiz[4]` (question sur $f$ décroissante avec $f(0)=10$, $f(5)=2$, résoudre $f(x)=7$) — la correction nomme explicitement le **théorème des valeurs intermédiaires**, qui est un contenu de *Terminale* (programme de spécialité), pas de 2nde. Le raisonnement lui-même (lecture d'un encadrement à partir de la monotonie) est parfaitement de niveau 2nde ; c'est uniquement l'étiquette théorique qui est en avance sur le programme. Suggestion : garder le raisonnement, retirer le nom du théorème →
  ```
  correction: 'f est décroissante sur [0;5] avec f(0) = 10 ≥ 7 ≥ 2 = f(5). Comme f décroît continûment de 10 à 2, elle prend toutes les valeurs intermédiaires : il existe donc une unique valeur c telle que f(c) = 7.'
  ```
  (Aucune urgence : c'est une question bonus dans un quiz, pas le cours — à corriger en même temps que d'autres passages du fichier si retouché.)

## 💡 Suggestions d'enrichissement méthodologique

1. **Créer le véritable module « notion de vecteur »** avant (ou en remplacement partiel de) `vecteurs.js` : translation, $\vec{AB}$, coordonnées $(x_B-x_A\,;\,y_B-y_A)$, somme par la relation de Chasles, produit par un réel, condition de colinéarité $x y' - x' y = 0$. Le contenu physique actuel (projection, plan incliné) est solide et bien fait — il peut rester comme second module ou comme partie « applications » *après* que la notion de base a été posée, mais ne doit pas être le seul point d'entrée du chapitre vecteurs en 2nde.
2. **Étendre `check-decimal-notation.js` pour couvrir le champ `hint`** de façon plus systématique dans les revues manuelles futures : sur les 5 fichiers en défaut, 4 cachaient le bug dans `solution` et 1 (`2nde-echantillonnage.js`) le cachait aussi dans `hint` — les deux champs sont lus par l'élève avant de voir la correction, donc les deux comptent également pour l'expérience pédagogique (le script les couvre déjà tous les deux via `CHAMPS`, bien noté — le point est plutôt de vérifier après coup que le taux d'occurrence, ici 1200/120, n'est pas ignoré parce que « seulement un warning »).
3. **Pour la géométrie plane (Thalès) et les fonctions de référence**, envisager un exercice inverse type « on donne le rapport des AIRES, retrouver le rapport des longueurs » (racine carrée du rapport) — c'est l'erreur la plus fréquente signalée par les propres `quiz` du corpus (confondre rapport de longueurs et rapport d'aires), mais aucun `exercice.generate()` ne l'entraîne dans le sens inverse (aires → longueurs) alors que le quiz le teste dans le sens direct.

---
