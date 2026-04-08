# 📘 Guide d'Épuration des Modules — Style SI Obligatoire

**Objectif** : Appliquer systématiquement les règles d'esthétique du `CLAUDE.md` à TOUS les 138 modules.
**Règles clés** : Aération maximale (`<br/><br/>`), `<strong>` sur concepts, narratif vs brut.

---

## 1. DIAGNOSTIC : Identifier la Densité

### Signes d'une intro DENSE ❌
```js
intro: 'Une fraction a/b représente a parts d\'un tout divisé b parts égales. C\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion. Quand a > b, la fraction est dite impropre...'
```
- ✗ Un SEUL bloc monolithique
- ✗ Pas de `<br/><br/>` entre les idées
- ✗ Aucun `<strong>` sur concepts clés
- ✗ Difficile à scanner visuellement

### Signes d'une intro AÉRÉE ✅
```js
intro: 'Une <strong>fraction</strong> $\\dfrac{a}{b}$ représente $a$ parts d\'un tout divisé en $b$ parts égales. C\'est aussi un rapport, une division, et une façon de mesurer n\'importe quelle proportion.<br/><br/>' +
  'Quand $a > b$, la fraction est dite <strong>impropre</strong> ($\\dfrac{7}{3} > 1$) : elle représente plus d\'un entier...<br/><br/>' +
  'En chimie, la <strong>fraction massique</strong>...'
```
- ✓ Multiples blocs séparés par `<br/><br/>`
- ✓ `<strong>` sur : fraction, impropre, fraction massique
- ✓ Facile à scanner
- ✓ Respire visuellement

---

## 2. RÈGLES D'AÉRATION : Les 4 Principes

### Principe 1 : Aération Entre Idées Logiques
**Une nouvelle idée = un paragraphe séparé par `<br/><br/>`**

#### ❌ AVANT (DENSE)
```js
intro: 'Le cosinus d\'un angle dans un triangle rectangle est le rapport entre le côté adjacent et l\'hypoténuse. C\'est une fonction trigonométrique fondamentale. On l\'utilise pour projeter des forces, calculer des distances, résoudre des triangles. La valeur du cosinus est toujours entre -1 et 1.'
```

#### ✅ APRÈS (AÉRÉ)
```js
intro: 'Le <strong>cosinus</strong> d\'un angle dans un triangle rectangle est le rapport entre le <strong>côté adjacent</strong> et l\'<strong>hypoténuse</strong> : $\\cos(\\theta) = \\dfrac{\\text{adjacent}}{\\text{hypoténuse}}$.<br/><br/>' +
  'C\'est une <strong>fonction trigonométrique fondamentale</strong> : on l\'utilise pour projeter des forces, calculer des distances, résoudre des triangles.<br/><br/>' +
  'La valeur du cosinus est toujours entre $-1$ et $1$ (domaine limité). Pour les angles aigus ($0° < \\theta < 90°$), le cosinus décroît de $1$ à $0$.'
```

---

### Principe 2 : `<strong>` sur Concepts Clés
**Mise en valeur = gras sur termes importants, symboles, résultats**

#### Règles :
- ✓ Termes de définition (première occurrence)
- ✓ Noms d'opérations (« simplifier », « projeter »)
- ✓ Résultats numériques/formules clés
- ✓ Pièges ou points critiques

#### Exemples :
```js
// ✓ BON
'Cherchons le <strong>PGCD</strong> de $42$ et $56$...'

// ✓ BON
'Le <strong>signe</strong> dépend du quadrant où pointe le vecteur.'

// ✓ BON
'La <strong>fraction irréductible</strong> est obtenue en divisant par le PGCD.'

// ✗ MAUVAIS (trop de gras)
'<strong>Cherchons</strong> le <strong>PGCD</strong> de <strong>$42$</strong> et <strong>$56$</strong>'

// ✗ MAUVAIS (gras inutile sur texte vague)
'<strong>C\'est important</strong>' ou '<strong>D\'ailleurs</strong>'
```

---

### Principe 3 : Structure INTRO = 3 Blocs Minimum

**Idéal** : 3 blocs séparés par `<br/><br/>` :

1. **Bloc 1** : Définition fondamentale + symbole/notation
2. **Bloc 2** : Contexte/utilité + applications
3. **Bloc 3** : Point critique / cas particulier / extension

#### Template :
```js
intro: 'Un <strong>CONCEPT</strong> est DÉFINITION. Notation/Symbole: SYMBOLE.<br/><br/>' +
  'Utilité : APPLICATION1, APPLICATION2. Point clé : PROPRIÉTÉ1.<br/><br/>' +
  'Cas particulier : CAS_SPEC. Piège fréquent : PIEGE. En pratique : CONTEXTE.'
```

---

### Principe 4 : Narratif vs Brut

**Éviter des listes brutes d'équations. Raconter POURQUOI.**

#### ❌ AVANT (BRUT)
```js
'Les formules sont : $a = b + c$, $d = e - f$, $g = h \\times i$ ...'
```

#### ✅ APRÈS (NARRATIF)
```js
'Pour calculer X, on utilise la <strong>première relation</strong> : $a = b + c$. Ensuite, on soustrait Y selon la <strong>deuxième formule</strong> : $d = e - f$. Enfin, on multiplie le résultat...'
```

---

## 3. SECTIONS À ÉPURER : Priorités

### Toujours Épurer (OBLIGATOIRE)
1. **`intro`** — Premier point de contact étudiant
2. **`definitions` (def)** — Chaque définition doit être claire
3. **`method.steps`** — Chaque étape doit respirer

### Souvent Nécessaire
4. **`example.steps`** — Les calculs doivent être guidés pas à pas
5. **`corrections`** dans quiz/évaluations — Expliquer l'erreur
6. **`recap`** — Synthèse finale

### Moins Critique
7. `formulas` — Peuvent être brutes (juste des équations)
8. `keywords` — Une ligne = OK

### Hors Scope
- Fichiers de configuration (`index.js`)
- `helpers.js` (utilitaires techniques)
- Logique TypeScript/math complexe (engines)

---

## 4. CHECKLIST DE VÉRIFICATION : Avant/Après

**À appliquer sur CHAQUE module épuré :**

### Intro (`cours.intro`)
- [ ] **Min 2-3 blocs** séparés par `<br/><br/>`
- [ ] **Min 3 mots** en `<strong>` (concepts, pièges)
- [ ] **Pas de ligne > 200 caractères** sans `<br/>`
- [ ] **KaTeX correct** : `$...$` inline, symboles français `{,}` pour décimales
- [ ] **Narratif** : pas de chaîne d'équations brutes

### Definitions (`cours.definitions`)
- [ ] **Chaque `def`** est une phrase complète (min 15 mots)
- [ ] **1 `<strong>` minimum** en tête (le terme lui-même)
- [ ] **Pas de bloc dense** : max 2 lignes par définition

### Method Steps (`cours.method.steps`)
- [ ] **Chaque étape** commence par action en `<strong>` : « **Étape 1** », « **Calculer** », etc.
- [ ] **Exemple inclus** : `<em>Exemple :</em>` dans chaque step
- [ ] **Pas > 150 chars** sans pause

### Example (`cours.example.steps`)
- [ ] **Chaque step numéroté** et aéré
- [ ] **KaTeX correct** avec décimales françaises
- [ ] **Pas d'équation orpheline** : accompagnée d'explication

### Quiz Corrections
- [ ] **Pas de « Faux ! »** ou ton punitif
- [ ] **Explication positive** : « La bonne réponse est... car... »
- [ ] **Min 2 phrases** par correction

### Recap
- [ ] **4 points min** (résumé final)
- [ ] **Chaque point** est une phrase complète
- [ ] **1-2 `<strong>`** pour concepts clés

---

## 5. PATTERNS RÉUTILISABLES

### Pattern A : Intro Standard (Maths)
```js
intro: 'Un <strong>CONCEPT</strong> est un DÉFINITION_SIMPLE. On la note : $NOTATION$.<br/><br/>' +
  'En pratique, on l\'utilise pour UTILITÉ1 et UTILITÉ2. Exemple simple : CONTEXTE_CONCRET.<br/><br/>' +
  'Le <strong>piège fréquent</strong> : PIEGE. Astuce pour l\'éviter : ASTUCE.'
```

### Pattern B : Intro Standard (Géométrie)
```js
intro: 'La <strong>FORME</strong> est définie par PROPRIÉTÉ1 et PROPRIÉTÉ2. On la dessine avec : DESCRIPTION_VISUELLE.<br/><br/>' +
  'Ses <strong>caractéristiques principales</strong> sont : CARACT1 ($FORMULE1$), CARACT2 ($FORMULE2$).<br/><br/>' +
  'Cas particuliers : CAS1, CAS2. Comment la reconnaître : INDICE.'
```

### Pattern C : Method Steps (3 étapes génériques)
```js
steps: [
  '<strong>Identifier</strong> : repérer les données, les inconnues. <em>Exemple :</em> données = ..., cherchons = ...',
  '<strong>Appliquer</strong> : choisir la formule/théorème. <em>Exemple :</em> on utilise ... car ...',
  '<strong>Calculer</strong> : remplacer les valeurs, simplifier. <em>Exemple :</em> résultat = ... $\\approx 5{,}5$'
]
```

---

## 6. WORKFLOW D'EXÉCUTION : Par Batch

### Batch 1 : Les 12 modules 3e (PRIORITAIRES)
**Fichiers à traiter** :
```
3e-trigonometrie.js
3e-volumes.js
3e-thales.js
3e-sections-solides.js
3e-systemes.js
3e-homotheties.js
3e-arithmetique.js
3e-equations-inequations.js
3e-algorithmique.js
3e-identites-remarquables.js
3e-fonctions.js
3e-stats-probas.js
```

**Étapes** :
1. Lire le module entièrement
2. Identifier les zones DENSES (intro, definitions, steps, corrections)
3. Appliquer patterns A/B/C selon le contexte
4. Valider vs checklist section 4
5. Exécuter les remplacements en parallèle (multi_replace_string_in_file)

**Temps estimé** : 2-3 minutes par module (une fois le pattern maîtrisé)

### Batch 2 : Les 7 modules lycée-2nde
Même workflow, mais attention aux concepts plus abstraits (fonctions, ensembles).

### Batch 3 : Reste
Appliquer progressivement : 4e, 5e, 6e, puis BTS/SI.

---

## 7. VALIDATION FINALE

### Post-Epuration : Tester
```bash
# 1. Ouvrir le module dans le navigateur
http://localhost/Spark_learning/#view/3e-trigonometrie

# 2. Vérifier visuellement :
#    - Intro respire
#    - Gras visibles sur concepts
#    - Pas de décimales avec .
#    - KaTeX rend correctement
```

### Documenter
Après chaque batch, noter dans `/memories/session/` :
```md
## Batch 1 : 3e (12 modules)
✅ COMPLÉTÉ : 2024-04-08
- Méthodologie validée ✓
- Patterns appliqués ✓
- Avant/après: vérifiés ✓
```

---

## 8. RÈGLES SPÉCIALES

### SI (Sciences de l'Ingénieur)
- **Même aération** que Maths
- **Plus de `<strong>`** sur : système, fonction, entrée/sortie
- **Diagrammes** : garder en HTML, simplifier le texte autour

### BTS
- Aération **identique aux autres niveaux** (pas de bloc dense)
- Focus prioritaire : intro, `method.steps`, `example.steps`, récap
- Les contenus avancés restent narratifs et guidés (pas de liste brute de formules)

### Chimie/Physique
- **Obligation française** : décimales = `1{,}5` jamais `1.5`
- Plus de `<strong>` sur : noms d'atomes, grandeurs, unités
- Contexte pratique en intro = prioritaire

---

## 9. COMMANDES UTILES

### Déterminer la position d'une intro
```py
grep -n "intro:" js/data/3e/3e-trigonometrie.js | head -1
# Retourne : 15:    intro: 'Un...'
```

### Vérifier densité
```py
grep "intro:" js/data/3e/3e-trigonometrie.js | sed -n 's/.*intro: //' | wc -c
# Retourne nb caractères : > 300 = DENSE
```

---

## 10. CHECKLIST MASTER : Avant de Lancer

- [ ] Lire ce guide entièrement
- [ ] Comprendre les patterns A/B/C
- [ ] Valider checklist section 4 sur 1 exemple
- [ ] Tester multi_replace_string_in_file sur 1 module
- [ ] Prêt pour Batch 1 (3e)

---

**Prochain pas** : Utiliser la section 11 comme validation finale avant toute livraison de module.

---

## 11. CAHIER DES CHARGES ANTI-DENSITÉ (RÉFÉRENCE OFFICIELLE)

### Objectif
Garantir que chaque cours reste lisible, aéré, progressif et non intimidant pour l'élève, sans perte de rigueur mathématique/physique/SI.

### Exigences OBLIGATOIRES (bloquantes)
- `cours.intro` contient au minimum 3 blocs séparés par `<br/><br/>`.
- Chaque bloc introduit une seule idée centrale (définition, utilité, vigilance).
- `cours.intro` contient au moins 3 occurrences pertinentes de `<strong>`.
- Chaque entrée de `cours.method.steps` commence par `<strong>Concept</strong> :`.
- Chaque entrée de `cours.method.steps` contient une explication narrative (pas uniquement une formule).
- Chaque entrée de `cours.example.steps` explicite la logique du calcul, pas seulement le résultat.
- Les décimales en KaTeX utilisent la virgule française avec accolades : `1{,}5`.
- Le ton est encourageant et explicatif, sans formulation punitive.

### Exigences RECOMMANDÉES (qualité cible)
- Longueur visuelle maîtrisée : éviter les lignes très longues sans respiration.
- Introduire un contexte concret (industrie, vie courante, SI) dans l'intro.
- Garder 1 idée principale par phrase quand possible.
- Placer le gras sur les concepts, pas sur des mots de liaison.

### Interdits
- Bloc d'intro monolithique sans `<br/><br/>`.
- Étapes de méthode qui démarrent directement par du texte brut sans concept en `<strong>`.
- Enchaînement de plusieurs équations sans phrase d'interprétation.
- Décimales en format point (`1.5`) dans le contenu pédagogique.

### Critères d'acceptation (Definition of Done)
- Un module est "conforme" uniquement si toutes les exigences OBLIGATOIRES sont validées.
- En cas de doute, priorité à la lisibilité élève plutôt qu'à la compacité du texte.
- Aucun module n'est livré si une section clé (`intro`, `method.steps`, `example.steps`) reste dense.
