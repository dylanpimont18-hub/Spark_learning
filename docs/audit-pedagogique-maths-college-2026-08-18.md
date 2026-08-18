# Audit pédagogique — Mathématiques Collège (6e à 3e)

> Date : 2026-08-18
> Périmètre : les 4 niveaux du collège (6e, 5e, 4e, 3e), soit 51 fichiers `js/data/{niveau}/*.js` + `docs/programmes-maths.md` + `js/data/helpers.js` + `scripts/check-decimal-notation.js` comme référentiels transverses.
> Méthode : relecture critique sur 5 axes (exactitude mathématique, conformité au programme, typographie mathématique/française, clarté pédagogique, orthographe/intégrité des données), niveau par niveau.

## Sommaire

- [Rapport d'analyse : Niveau 6e](#-rapport-danalyse--niveau-6e)
- [Rapport d'analyse : Niveau 5e](#-rapport-danalyse--niveau-5e)
- [Rapport d'analyse : Niveau 4e](#-rapport-danalyse--niveau-4e)
- [Rapport d'analyse : Niveau 3e](#-rapport-danalyse--niveau-3e)
- [Synthèse transverse](#synthèse-transverse)

---

# 🎓 Rapport d'analyse : Niveau 6e

## 🚨 Alertes Critiques (Mathématiques et Programme)

- **`js/data/6e/6e-volumes.js`** — Le module utilise la **densité** ($\rho = m/V$, avec isolement de $V$) dans le **quiz** (question 3, calcul de $V = 400/0{,}8$) et dans le **problème** (masse de solution, concentration en g/L). Or le champ `physics` du même objet précise explicitement *« masse volumique au cycle 4 »* — c'est-à-dire **pas en 6e** (cycle 3). Le module se contredit lui-même : il traite comme acquis en 6e une notion qu'il annonce lui-même comme relevant du cycle 4. À déplacer vers un module de cycle 4 (4e-volumes ou physique-chimie) ou à retirer du quiz/problème 6e.
- **`js/data/6e/6e-symetrie-axiale.js`** — Le cours et les exercices utilisent un **formalisme algébrique de coordonnées** ($x_{A'} = 2k - x_A$, avec lettres, indices et paramètre $k$) pour construire un symétrique. Le programme officiel de 6e traite la symétrie axiale de façon **graphique** (pliage, quadrillage, report au compas/à l'équerre) ; l'usage de lettres pour désigner des inconnues n'est formellement introduit qu'en 5e (« Expressions littérales », chapitre 5 du programme 5e). Cette approche par formule paramétrée est probablement **trop abstraite pour le niveau** — à vérifier avec le programme cycle 3 et, le cas échéant, à reformuler en construction géométrique (report de distance, médiatrice) sans généraliser à une formule symbolique.
- **Pattern technique récurrent, transverse à 4 fichiers** — Plusieurs `exercice.generate()` appellent `.toString().replace('.', '{,}')` ou `.toFixed(n).replace('.', '{,}')` **« à la main »** au lieu du helper `fr()` de `js/data/helpers.js`, en violation directe de la règle CLAUDE.md *(« bug récurrent, corrigé au moins 2 fois »)*. Le script `scripts/check-decimal-notation.js` ne détecte **pas** ces occurrences car son regex `RAW_TOFIXED` cherche `.toFixed(n)` immédiatement suivi de `}`, pas `.toFixed(n).replace(...)`. Fichiers concernés : `6e-addition-soustraction.js`, `6e-nombres-decimaux.js` (redéfinit une fonction locale `fr` qui duplique le helper), `6e-perimetres-aires.js`, `6e-volumes.js`. Détail des corrections ci-dessous.

## 🔍 Corrections détaillées par fichier

### Fichier : `6e-addition-soustraction.js`
- Clé `exercice.generate()` (lignes 125-127, 136, 138) : notation manuelle `.replace('.', '{,}')` au lieu du helper →
  ```js
  const aStr = fr(a);
  const bStr = fr(b);
  const sumStr = fr(sum);
  // ...
  hint: `Aligne les virgules : écris $${aStr}$ comme $${fr(a, 2)}$, puis additionne colonne par colonne.`,
  solution: [
    `Aligner les virgules : $${fr(a, 2)} + ${fr(b, 2)}$`,
    ...
  ```

### Fichier : `6e-nombres-decimaux.js`
- Clé `exercice.generate()` (ligne 130) : redéfinition locale de `fr`, qui duplique le helper global au lieu de l'utiliser →
  ```js
  // Supprimer entièrement : const fr = n => n.toString().replace('.', '{,}');
  // Le helper global fr(value) de js/data/helpers.js fait déjà exactement cela.
  ```
  Le reste du code (`fr(a)`, `fr(b)`, etc.) fonctionne alors avec le helper global sans modification supplémentaire.

### Fichier : `6e-perimetres-aires.js`
- Clé `exercice.generate()`, branche `triangle` (ligne 144) →
  ```js
  solution: [`$\\mathcal{A} = \\dfrac{${b} \\times ${h}}{2} = \\dfrac{${b * h}}{2} = ${fr(aire)}$ cm²`]
  ```
- Clé `exercice.generate()`, branche `disque` (ligne 163) →
  ```js
  solution: [`$\\mathcal{A} = 3{,}14 \\times ${r * r} = ${fr(aire)}$ cm²`]
  ```

### Fichier : `6e-volumes.js`
- Clé `exercice.generate()` (ligne 143) →
  ```js
  `$V = \\dfrac{${vcm3}}{1000} = ${fr(vL)}\\,\\text{L}$`
  ```
- Clé `quiz[2]` et `probleme` (masse volumique) : à retirer ou déplacer vers un niveau cycle 4, voir alerte critique ci-dessus.

### Fichier : `6e-symetrie-axiale.js`
- Voir alerte critique ci-dessus (conformité programme). Aucune faute d'orthographe ou de calcul relevée ; le contenu est mathématiquement exact, la question porte sur son niveau d'abstraction.

**Aucune autre erreur mathématique, faute d'orthographe/grammaire ou incohérence de structure n'a été relevée** dans `6e-multiplication.js`, `6e-division.js`, `6e-fractions.js`, `6e-angles.js`, `6e-figures-geometriques.js` : cours, exemples, quiz, exercices dynamiques et évaluations sont cohérents entre eux, la notation décimale française est correcte partout ailleurs, et le ton reste socratique et non punitif conformément à la charte. `index.js` est conforme à l'architecture décrite (fichier volontairement vide, chargement individuel via `js/loader.js`).

## 💡 Suggestions d'enrichissement pédagogique

1. **6e-symetrie-axiale.js** : si le formalisme algébrique est conservé, ajouter une phrase de transition explicite type *« On retrouvera cette écriture avec des lettres l'an prochain — pour l'instant, retiens surtout le geste : reporter la même distance de l'autre côté »* pour désamorcer l'aspect « trop tôt » plutôt que de le retirer entièrement.
2. **6e-volumes.js** : remplacer les questions de densité par une variante purement 6e (ex. remplissage d'un pavé droit avec des cubes de $1$ cm³, comptage direct) — le lien $1\,\text{cm}^3 = 1\,\text{mL}$ déjà présent dans le cours suffit à ancrer la notion sans introduire $\rho = m/V$.
3. Plusieurs modules (`6e-addition-soustraction`, `6e-multiplication`, `6e-division`) gagneraient à ajouter une propriété `astuce` courte dans l'objet `cours` (ex. « astuce calcul mental ») pour varier le rythme visuel entre `piege` (ce qu'il ne faut pas faire) et une astuce positive (ce qu'il faut faire vite) — cohérent avec le ton encourageant déjà en place.

---

# 🎓 Rapport d'analyse : Niveau 5e

## 🚨 Alertes Critiques (Mathématiques et Programme)

- **`5e-triangles.js`** — Le théorème de Pythagore (et sa réciproque) est utilisé sans y avoir été introduit : l'exemple du cours (« Vérifier si rectangle : $5^2+7^2=74$, $10^2=100$ ») et le `probleme` (« Ce triangle est-il rectangle ? Vérifier avec le théorème de Pythagore ») s'appuient sur un théorème qui n'est officiellement enseigné qu'en **4e** (cf. `js/data/4e/4e-pythagore.js`). Un élève de 5e n'a pas les moyens de résoudre cette étape.
- **`5e-parallelogrammes.js`** — Même défaut : l'exemple du cours et les notes du diagramme calculent le côté du losange « par Pythagore : $\sqrt{4^2+3^2}=5$ cm », alors que ce théorème n'est pas encore vu en 5e.
- **`reperage-graphique.js`** — Le module dépasse la lecture graphique de base (interpolation/extrapolation) attendue en 5e pour introduire un formalisme de **fonction affine** complet : calcul de la pente $a=\Delta y/\Delta x$, détermination algébrique de l'ordonnée à l'origine $b = y_1 - a x_1$, écriture de l'équation $y=ax+b$. Ce contenu (équation d'une droite) relève normalement du chapitre « fonctions affines » de 3e (dont un module `3e-fonctions-affines.js` existe déjà dans le projet) — risque de sur-abstraction et de chevauchement de programme.
- **`5e-angles-parallelisme.js`** — Le terme « angles coalternes-internes » (utilisé dans le titre, le cours, le quiz et l'évaluation) n'est pas le vocabulaire officiellement attendu au collège français pour cette configuration (seuls « alternes-internes » et « correspondants » sont couramment normalisés à ce niveau) ; à vérifier contre `docs/programmes-maths.md` avant de le diffuser tel quel aux élèves.

## 🔍 Corrections détaillées par fichier

### Fichier : `5e-fractions-operations.js`
- Clé `exercice.generate().solution` (ligne 227) : notation décimale tapée à la main avec `.toString().replace('.', '{,}')` au lieu de `fr()` — violation de la règle projet (même si l'accolade est actuellement bien fermée). ->
```js
// Avant
`Somme : $\\dfrac{${num}}{${lcm}}${g > 1 ? ` = \\dfrac{${answerNum}}{${answerDen}}` : ''} \\approx ${parseFloat(answer.toFixed(2)).toString().replace('.', '{,}')}$.`
// Après
`Somme : $\\dfrac{${num}}{${lcm}}${g > 1 ? ` = \\dfrac{${answerNum}}{${answerDen}}` : ''} \\approx ${fr(answer, 2)}$.`
```

### Fichier : `5e-proportionnalite.js`
- Clé `exercice.generate().solution` (lignes 158-159) : deux occurrences de `.toString().replace('.', '{,}')` à la main (`reduction`, `newPrix`) — certains couples `prix`/`taux` du tirage (ex. $250$ € à $-25\%$) produisent une réduction non entière ($62{,}5$), donc ce code est un vrai point de fragilité, même s'il fonctionne actuellement. ->
```js
// Avant
solution: [
  `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${reduction.toString().replace('.', '{,}')}$ €.`,
  `Nouveau prix : $${prix} - ${reduction.toString().replace('.', '{,}')} = ${newPrix.toString().replace('.', '{,}')}$ €.`
]
// Après
solution: [
  `Réduction : $\\dfrac{${taux}}{100} \\times ${prix} = ${fr(reduction)}$ €.`,
  `Nouveau prix : $${prix} - ${fr(reduction)} = ${fr(newPrix)}$ €.`
]
```

### Fichier : `5e-aires-perimetres.js`
- Clé `exercice.generate().solution` (ligne 137) : `.toString().replace('.', '{,}')` à la main. ->
```js
// Avant
solution: [`$\\mathcal{A} = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r} = ${parseFloat((3.14 * r * r).toFixed(1)).toString().replace('.', '{,}')}$ cm².`]
// Après
solution: [`$\\mathcal{A} = 3{,}14 \\times ${r}^2 = 3{,}14 \\times ${r * r} = ${fr(3.14 * r * r, 1)}$ cm².`]
```

### Fichier : `5e-statistiques.js`
- Clé `exercice.generate().solution` (ligne 161) : `.toString().replace('.', '{,}')` à la main sur `mean`. ->
```js
// Avant
`Moyenne : $${sum} \\div ${n} = ${mean.toString().replace('.', '{,}')}$.`
// Après
`Moyenne : $${sum} \\div ${n} = ${fr(mean)}$.`
```

### Fichier : `5e-probabilites.js`
- Clé `exercice.generate().solution` (ligne 160) : `.toString().replace('.', '{,}')` à la main sur `p`. ->
```js
// Avant
solution: [`$P = \\dfrac{${fav}}{${total}} = ${p.toString().replace('.', '{,}')}$.`]
// Après
solution: [`$P = \\dfrac{${fav}}{${total}} = ${fr(p)}$.`]
```

### Fichier : `5e-nombres-relatifs.js`
- Clé `cours.piege` : ton sec/punitif avec « (FAUX) » en majuscules, contraire à la règle « jamais de Faux/Erreur sèche ». ->
```js
// Avant
piege: 'Le signe $-$ devant une parenthèse change TOUS les signes à l\'intérieur : $-(a - b) = -a + b$. Erreur classique : $-(3 - 5) = -3 - 5$ (FAUX). La bonne réponse est $-3 + 5 = 2$.'
// Après
piege: 'Le signe $-$ devant une parenthèse change TOUS les signes à l\'intérieur : $-(a - b) = -a + b$. Piège fréquent : écrire $-(3 - 5) = -3 - 5$ en oubliant de changer le second signe. La bonne méthode donne $-3 + 5 = 2$.'
```

### Fichier : `5e-triangles.js`
- Clé `cours.example` : dépend du théorème de Pythagore, non vu en 5e. ->
```js
example: {
  statement: 'Peut-on construire un triangle avec des côtés de $5$ cm, $7$ cm et $10$ cm ? Si oui, quelle est la nature du triangle ?',
  steps: [
    'Plus grand côté : $10$. Somme des deux autres : $5 + 7 = 12$. $10 < 12$ ✓ → triangle possible.',
    'Tous les côtés sont différents → triangle scalène (quelconque).'
  ],
  answer: 'Triangle scalène (quelconque)'
}
```
- Clé `probleme.tasks`/`solutions` (charpente 5 m / 8 m / 11 m) : la question 2 exige Pythagore. ->
```js
tasks: [
  'Vérifier que ces trois longueurs forment bien un triangle (inégalité triangulaire).',
  'Quelle est la nature de ce triangle (isocèle, équilatéral ou scalène) au vu des longueurs des trois côtés ?',
  'Si l\'un des angles de la charpente mesure $40°$ et un autre $65°$, quel est le troisième angle ?'
],
solutions: [
  '$11 < 5 + 8 = 13$ ✓. L\'inégalité est vérifiée, le triangle existe.',
  'Les trois côtés ($5$, $8$ et $11$ m) sont tous différents : c\'est un triangle scalène (quelconque).',
  '$180 - 40 - 65 = 75°$.'
]
```

### Fichier : `5e-parallelogrammes.js`
- Clé `cours.example` et `diagram.notes` : la détermination du côté du losange « par Pythagore » anticipe le programme de 4e. -> Donner directement le côté ($5$ cm) comme donnée de l'énoncé plutôt que de le calculer par Pythagore, par ex. :
```js
example: {
  statement: 'Un losange a des diagonales de $8$ cm et $6$ cm, et un côté de $5$ cm. Calcule son aire.',
  steps: [
    'Aire : $\\mathcal{A} = \\dfrac{d_1 \\times d_2}{2} = \\dfrac{8 \\times 6}{2} = 24$ cm².',
    'Les diagonales se coupent perpendiculairement en leur milieu → demi-diagonales : $4$ et $3$ cm.'
  ],
  answer: 'Aire = $24$ cm²'
}
```
(retirer de même la phrase « par Pythagore, le côté vaut $\sqrt{4^2+3^2}=5$ cm » dans `diagram.notes`).

### Fichier : `5e-angles-parallelisme.js`
- Clé `title`/`cours`/`quiz`/`evaluation` (usage systématique de « coalternes-internes ») : vérifier ce terme contre le vocabulaire officiel attendu (`docs/programmes-maths.md`) avant diffusion ; si non standard, le remplacer par une formulation descriptive du type « angles internes du même côté de la sécante (supplémentaires) ».

### Fichier : `reperage-graphique.js`
- Clés `cours.example`, `cours.method`, `cours.formulas` : la détermination algébrique de l'équation d'une droite ($b = y_1 - ax_1$, $y=ax+b$) est un contenu de 3e. -> Recentrer le module 5e sur la lecture de coordonnées, la pente comme rapport de variations (sans dériver formellement $b$), et l'interpolation/extrapolation ; déplacer le calcul complet de l'équation de droite vers `3e-fonctions-affines.js`.

Fichiers sans problème relevé : `js/data/5e/index.js` (architecture cohérente, chargement individuel via `loader.js`), `5e-priorites-operations.js`, `5e-expressions-litterales.js` (usage de `x^2` en substitution jugé acceptable à ce niveau), `5e-symetrie-centrale.js`, `5e-volumes.js`.

## 💡 Suggestions d'enrichissement pédagogique

- **Croiser proportionnalité et aires** : ajouter un exercice ou un « piège » dans `5e-proportionnalite.js` ou `5e-aires-perimetres.js` sur l'effet d'un agrandissement d'échelle sur l'aire (doubler les longueurs quadruple l'aire) — erreur d'intuition très fréquente à cet âge, et connexion naturelle entre deux chapitres déjà traités séparément.
- **Définir la « médiane »** dans `5e-statistiques.js` : le terme est mentionné dans `cours.intro` (« la médiane est parfois plus représentative ») mais jamais défini dans `definitions`, ni repris en quiz/exercice — ajouter une courte définition évite qu'un mot nouveau reste flottant sans ancrage.
- **Activité de simulation concrète** dans `5e-probabilites.js` : proposer un petit protocole (lancer une pièce 20 fois, noter les fréquences) pour illustrer visuellement la loi des grands nombres déjà évoquée dans le `piege`, en complément du contenu théorique existant.

---

# 🎓 Rapport d'analyse : Niveau 4e

## 🚨 Alertes Critiques (Mathématiques et Programme)

- **`4e-cosinus.js`** — Le `probleme` (tâches 2 et 3, vérifié : lignes 161-167) fait explicitement appel au **sinus** (`\sin 5° \approx 0{,}087`) alors que le cours du même module affirme noir sur blanc : *« À ce niveau, seul le cosinus est au programme (…) le troisième côté n'a pas besoin de nom pour l'instant »* et que le sinus/la tangente sont réservés à la 3e. C'est une incohérence interne au module et une anticipation de programme.
- **`calcul-algebrique.js`** — La correction du quiz Q3 contient l'expression *« Faux ! »*, en violation directe de la règle de ton obligatoire du projet (« jamais punitif (pas de "Faux" ou "Erreur") »).
- **Violation systémique de la règle décimale française** — 7 des 13 fichiers utilisent `.replace('.', '{,}')` écrit à la main dans `exercice.generate()` au lieu de `fr()`, en violation directe de la règle CRITIQUE du projet (« interdiction explicite de taper `.replace('.', '{,}')` à la main »). Le rendu visuel est correct dans tous les cas relevés (donc invisible pour l'élève et invisible au script `check-decimal-notation.js`), mais c'est une dette technique/règle de projet à corriger : `puissances.js`, `4e-fractions-mult-div.js`, `4e-cosinus.js` (×2), `4e-triangle-rectangle-cercle.js`, `4e-droites-remarquables.js`, `4e-volumes.js`, `4e-probabilites.js` (×4).

## 🔍 Corrections détaillées par fichier

### Fichier : `index.js`
- Aucun problème relevé — fichier intentionnellement vide, cohérent avec l'architecture (`loader.js` charge les modules individuellement).

### Fichier : `calcul-algebrique.js`
- Clé `quiz[2].correction` : Utilise le mot **« Faux ! »**, interdit par la charte de ton du projet -> remplacer par une formulation socratique neutre :
  ```js
  correction: 'Vérification : $2 \\times 2 - 6 = 4 - 6 = -2 \\neq 10$, ce qui ne correspond pas à l\'équation de départ : l\'élève s\'est trompé dans l\'ordre des étapes. La bonne résolution : $2x - 6 = 10 \\Rightarrow 2x = 10 + 6 = 16 \\Rightarrow x = 8$. Vérification : $2 \\times 8 - 6 = 16 - 6 = 10$ ✓. Il faut toujours isoler le terme en $x$ avant de diviser.'
  ```

### Fichier : `puissances.js`
- Clé `exercice.generate()` (ligne 165) : `.replace('.', '{,}')` écrit à la main -> utiliser `fr()` :
  ```js
  const fullAnswerDisplay = fr(fullAnswer, decimals);
  ```
- Clé `evaluation.questions[2].correction` : le nombre `5300` (dans « $= 5300\,\text{nm}$ ») est écrit sans espace insécable pour un nombre à 4 chiffres -> `5\,300\,\text{nm}` (cohérent avec le reste du fichier qui utilise `\,` pour séparer les milliers, ex. dans le diagramme).

### Fichier : `4e-relatifs-mult-div.js`
- Aucun problème relevé — mathématiques, notation et ton corrects.

### Fichier : `4e-fractions-mult-div.js`
- Clé `exercice.generate()` (ligne 153) : `.replace('.', '{,}')` écrit à la main -> utiliser `fr()` :
  ```js
  `Valeur décimale : $${fr(answer)}$`
  ```

### Fichier : `4e-pythagore.js`
- Aucun problème relevé — sens direct/réciproque du théorème, formules et diagramme cohérents (les commentaires internes du SVG montrent d'ailleurs un historique de correction de bug sur l'échelle du triangle).

### Fichier : `4e-cosinus.js`
- Clé `probleme.tasks[1]` / `probleme.solutions[1]` : utilise le sinus, hors-programme pour ce module (voir alerte critique, vérifié aux lignes 161-167) -> reformuler en restant dans le cadre Pythagore + cosinus déjà couverts par le programme 4e :
  ```js
  tasks: [
    'Calculer la longueur horizontale couverte par la rampe.',
    'La hauteur de la marche surmontée est $h$. En utilisant le théorème de Pythagore avec la longueur de la rampe (hypoténuse $= 4$ m) et la distance horizontale trouvée à la question précédente (adjacent $\\approx 3{,}98$ m), calculer $h$.',
    // tâche 3 à reformuler de la même façon, ou à retirer si elle ne peut être posée sans invoquer le sinus
  ],
  solutions: [
    '$\\text{adj} = 4 \\times \\cos(5°) \\approx 4 \\times 0{,}996 = 3{,}98$ m.',
    '$h = \\sqrt{4^2 - 3{,}98^2} = \\sqrt{16 - 15{,}84} \\approx \\sqrt{0{,}16} \\approx 0{,}35$ m $= 35$ cm.'
  ]
  ```
- Clé `exercice.generate()` (lignes 152-153) : deux `.replace('.', '{,}')` manuels -> utiliser `fr()` :
  ```js
  hint: `$\\text{côté adjacent} = \\text{hypoténuse} \\times \\cos(${a}°) = ${hyp} \\times ${fr(cos)}$.`,
  solution: [`$\\text{adj} = ${hyp} \\times \\cos(${a}°) = ${hyp} \\times ${fr(cos)} = ${fr(adj)}$ ${scenario.emoji === '📐' ? 'cm' : 'm'}.`]
  ```

### Fichier : `4e-triangle-rectangle-cercle.js`
- Clé `exercice.generate()` (ligne 125) : `.replace('.', '{,}')` écrit à la main -> utiliser `fr()` :
  ```js
  solution: [`$R = \\dfrac{${diam}}{2} = ${fr(diam / 2)}$ cm.`]
  ```

### Fichier : `4e-droites-remarquables.js`
- Clé `exercice.generate()` (ligne 193) : `.replace('.', '{,}')` écrit à la main -> utiliser `fr()` :
  ```js
  solution: [`$AG = \\dfrac{2}{3} \\times ${am} = \\dfrac{${2*am}}{3} = ${fr(ag)}$ cm.`]
  ```
  (Par ailleurs, ce module ne fait tourner `exercice.generate()` que sur la médiane/centroïde alors que 4 familles de droites sont enseignées — voir suggestions.)

### Fichier : `4e-translations.js`
- Aucun problème relevé sur l'exactitude/notation — mais `exercice.generate()` ne teste que la translation, jamais la rotation malgré le titre du module (voir suggestions).

### Fichier : `4e-volumes.js`
- Clé `exercice.generate()` (ligne 133) : `.replace('.', '{,}')` écrit à la main -> utiliser `fr()` :
  ```js
  solution: [`$V = \\dfrac{${a*a} \\times ${h}}{3} = \\dfrac{${a*a*h}}{3} = ${fr(v)}$ cm³.`]
  ```
- Clé `probleme.solutions[0]` : le nombre `52900` (dans « $\times 52900 \times 146$ ») est écrit sans espace insécable, alors que le reste de la même ligne utilise `\,` pour `7\,723\,400` et `2\,574\,467` -> `52\,900` pour rester cohérent.

### Fichier : `4e-statistiques.js`
- Aucun problème relevé — définitions, formules de médiane/quartiles et exemple chiffré (8 coureurs) vérifiés et corrects.

### Fichier : `4e-probabilites.js`
- Clé `exercice.generate()` (lignes 129-132) : quatre `.replace('.', '{,}')` écrits à la main -> utiliser `fr()` :
  ```js
  const paStr = fr(pa);
  const pbStr = fr(pb);
  const pabStr = fr(pab);
  const punionStr = fr(punion);
  ```

## 💡 Suggestions d'enrichissement pédagogique

1. **`4e-translations.js`** : `exercice.generate()` ne génère que des exercices de translation, jamais de rotation, alors que le module (cours, quiz, évaluation) couvre les deux transformations à parts égales. Ajouter une variante `pick()` entre translation et rotation de $90°$/$180°$ autour de l'origine donnerait un entraînement dynamique fidèle au contenu enseigné.
2. **`4e-volumes.js`** : `exercice.generate()` ne produit que des pyramides à base carrée ; le cône (pourtant central dans le cours, l'exemple et l'évaluation) n'apparaît jamais en génération aléatoire. Ajouter une variante cône (avec $\pi$) diversifierait l'entraînement et couvrirait mieux la formule $V = \frac{1}{3}\pi r^2 h$.
3. **`4e-droites-remarquables.js`** : `exercice.generate()` ne teste que le rapport médiane/centroïde ($AG = \frac{2}{3}AM$), jamais les trois autres droites remarquables (médiatrice, bissectrice, hauteur) pourtant développées en détail dans le cours et le quiz. Un exercice alternant entre les quatre familles renforcerait la maîtrise de l'ensemble du chapitre plutôt que d'un seul de ses quatre points.

---

# 🎓 Rapport d'analyse : Niveau 3e

## 🚨 Alertes Critiques (Mathématiques et Programme)

- **Violation systémique de la règle de notation décimale** : 7 des 13 fichiers analysés utilisent `.replace('.', '{,}')` écrit à la main dans `exercice.generate()` au lieu de `fr()` — en violation directe de la règle projet rappelée jusque dans le commentaire de `js/data/helpers.js` lui-même. Fichiers concernés : `3e-equations-inequations.js`, `trigonometrie.js`, `3e-thales.js`, `3e-homotheties.js`, `3e-sections-solides.js`, `3e-volumes.js`, `3e-stats-probas.js`.
- **Bug d'intégrité mathématique dans `3e-systemes.js`** (vérifié aux lignes 161-168) : le générateur d'exercice tire les coefficients `d` et `e` (`rand(1,3)` chacun) sans jamais vérifier que le système reste non-dégénéré. Avec `a,b,d,e` uniformes dans `{1,2,3}`, une partie non négligeable des systèmes générés a un déterminant nul (ex. `a=1,b=1,d=2,e=2` → la 2e équation est juste le double de la 1ère) : le système admet alors une infinité de solutions, mais l'exercice continue d'exiger une unique valeur de `x` comme réponse — un élève qui trouve un autre couple $(x,y)$ tout aussi valide serait compté faux.
- **Contenu hors-programme dans le `probleme` de `3e-thales.js`** : la relation de conjugaison des lentilles minces $\dfrac{1}{\overline{OA'}} - \dfrac{1}{\overline{OA}} = \dfrac{1}{f'}$ avec distances algébriques signées est un contenu de lycée (1ère spécialité Physique-Chimie), largement au-dessus du niveau 3e, même en tant qu'extension physique. Le module gère pourtant très bien le grandissement simple $|\gamma| = |OA'|/|OA|$ ailleurs (quiz) — la marche est trop haute ici pour un exercice noté.

## 🔍 Corrections détaillées par fichier

### Fichier : `3e-equations-inequations.js`
- Clé `exercice.generate()` (ligne 143) : `const solStr = String(sol).replace('.', '{,}');` viole la règle `fr()`. -> `const solStr = fr(sol, 2);`

### Fichier : `trigonometrie.js`
- Clé `exercice.generate()` (lignes 155-156) : `cosVals[idx].toFixed(3).replace('.', '{,}')` et `String(adj).replace('.', '{,}')` à remplacer. ->
```js
const cosStr = fr(cosVals[idx], 3);
const adjStr = fr(adj);
```

### Fichier : `3e-thales.js`
- Clé `exercice.generate()` (lignes 137-139) : trois `.replace('.', '{,}')` manuels. ->
```js
const oaPStr = fr(oaP);
const ratioStr = fr(ratio);
const abPStr = fr(abP);
```
- Clé `probleme` : la relation de conjugaison des lentilles ($1/\overline{OA'} - 1/\overline{OA} = 1/f'$) est un contenu de lycée. -> Remplacer par un problème d'optique fondé uniquement sur le grandissement direct $|\gamma| = |OA'|/|OA| = A'B'/AB$ (comme dans le quiz du même module), sans distances algébriques ni formule de conjugaison, pour rester dans le cadre du théorème de Thalès enseigné en 3e.

### Fichier : `3e-homotheties.js`
- Clé `exercice.generate()` (lignes 128-130) : trois `.replace('.', '{,}')` manuels. ->
```js
const kStr = fr(k);
const absKStr = fr(Math.abs(k));
const resultStr = fr(Math.abs(k) * ab);
```

### Fichier : `3e-sections-solides.js`
- Clé `exercice.generate()`, champ `solution` (ligne 172) : `${String(cprime).replace('.', '{,}')}` inline. -> Extraire une variable `const cprimeStr = fr(cprime);` avant le `return`, puis utiliser `${cprimeStr}` dans le template.

### Fichier : `3e-volumes.js`
- Clé `exercice.generate()` (lignes 117-118) : `String(v).replace('.', '{,}')` et `String(parseFloat(...).toFixed(2)).replace('.', '{,}')`. ->
```js
const vStr = fr(v);
const numStr = fr(4 * 3.14 * r * r * r, 2);
```
- Clé `evaluation.questions[0].correction` (ligne 165) : `\\dfrac{1570}{3}` — nombre $\geq 1\,000$ sans espace insécable. -> `\\dfrac{1\\,570}{3}` (idem pour le `3140` de la correction de la question 5, à écrire `3\\,140`).

### Fichier : `3e-stats-probas.js`
- Clé `exercice.generate()` (ligne 116) : `const fcondStr = String(fcond).replace('.', '{,}');`. -> `const fcondStr = fr(fcond);`

### Fichier : `3e-systemes.js`
- Clé `exercice.generate()` (ligne 167) : `const d = rand(1, 3), e = rand(1, 3);` ne garantit pas un système déterminé (déterminant nul possible). -> Ajouter une garde contre le déterminant nul :
```js
let d, e;
do {
  d = rand(1, 3); e = rand(1, 3);
} while (a * e === b * d);
const f = d * x + e * y;
```

### Fichiers sans problème relevé
`js/data/3e/index.js`, `3e-arithmetique.js`, `3e-identites-remarquables.js`, `3e-fonctions.js`, `3e-fonctions-affines.js` (bon exemple d'usage systématique de `fr()`), `3e-algorithmique.js`.

## 💡 Suggestions d'enrichissement pédagogique

- **Problème de synthèse géométrique** : créer un exercice combiné Thalès + Homothéties (les deux notions sont mathématiquement les mêmes rapports de longueurs vus sous deux angles) pour que les élèves relient explicitement « configuration de Thalès » et « image par une homothétie » — actuellement les deux chapitres restent cloisonnés alors que le programme les rapproche naturellement.
- **Piège spécifique aux boucles bornées** dans `3e-algorithmique.js` : ajouter une mise en garde sur l'erreur classique de compter le nombre d'itérations d'une boucle `pour i de 1 à n` (confusion entre `n` itérations et `n+1`), en lien avec les blocs Scratch réels du programme.
- **Problèmes type Brevet croisant systèmes et fonctions affines** : les sujets du DNB associent très souvent seuil de rentabilité (système) et lecture graphique (fonctions affines) dans le même exercice ; un `probleme` combinant les deux dans `3e-systemes.js` ou `3e-fonctions-affines.js` renforcerait directement la préparation à l'examen.

---

## Synthèse transverse

Deux problèmes récurrents traversent les 4 niveaux et méritent un traitement global plutôt que fichier par fichier :

1. **Notation décimale manuelle au lieu de `fr()`** — présent dans au moins 4 fichiers en 6e, 5 en 5e, 7 en 4e, 7 en 3e (~23 fichiers sur 51). Le rendu est presque toujours correct aujourd'hui (donc invisible aux élèves et au script `check-decimal-notation.js`), mais chaque occurrence est un point de fragilité identique au bug déjà corrigé 2 fois selon `js/data/helpers.js`. C'est la correction la plus mécanique et la plus sûre à automatiser en premier.
2. **Chevauchements de programme entre niveaux consécutifs** — plusieurs modules d'un niveau N s'appuient sur une notion officiellement enseignée en N+1 (Pythagore utilisé en 5e alors qu'il est du programme 4e ; sinus utilisé dans un module 4e-cosinus qui l'exclut explicitement de son propre programme ; équation de droite en 5e alors qu'elle est du programme 3e ; conjugaison des lentilles en 3e alors que c'est un contenu de lycée). Ce n'est pas une erreur de calcul mais un problème de séquencement pédagogique — à corriger avant tout ajout de nouveau contenu, car cela peut dérouter un élève qui suit les modules dans l'ordre du programme.

Aucune erreur d'orthographe/grammaire significative n'a été relevée sur l'ensemble du corpus ; le ton reste globalement socratique et encourageant à l'exception des deux occurrences signalées (« FAUX » en 5e, « Faux ! » en 4e).
