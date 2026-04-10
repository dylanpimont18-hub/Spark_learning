# Spark Learning - AI System Directives

## 1. Stack & Architecture Globale
- **Vanilla JS SPA** : Aucun bundler, pas de build, pas de npm. Tout passe par `index.html`.
- **Ordre de chargement** : `index.html` est la source de vérité pour l'ordre des scripts. `js/loader.js` gère le chargement asynchrone des données via `ensureLevelData(subject, level)`.
- **Règle de séparation stricte** : 
  - DOM/UI : `js/views/` (vues complètes) et `js/components/` (onglets, quiz, exercices...). `js/render.js` est un stub léger.
  - État/State : Uniquement dans `js/state.js` (objet `state` unique).
  - Logique métiers/moteurs : `js/engines/` (10 fichiers : quizEngine, exerciceEngine, companionEngine...).
  - Routage/Events : `js/app.js` (Hash routing `#view/data`).
- **Gotcha** : Ne jamais utiliser `export`/`import` dans `js/engines/` ou `js/data/` — pas de bundler. `progressionEngine.js` utilise `export default` et est actuellement inaccessible.
- **Styling** : Utiliser exclusivement les variables CSS de `css/styles.css` (ex: `var(--primary)`). Ne jamais hardcoder de couleurs.

## 2. Règles de création de contenu (Modules)
Lors de la création ou modification dans `js/data/` :

- **Esthétique stricte (Style "SI" obligatoire pour TOUTES les matières)** : 
  - **Aération maximale** : Interdiction absolue d'écrire des blocs de texte denses. Tu DOIS forcer le saut de ligne avec `<br/><br/>` entre chaque idée, explication ou étape de calcul.
  - **Guidage visuel** : Utiliser systématiquement la balise `<strong>` pour mettre en valeur les concepts clés, les lois physiques, ou les résultats importants.
  - **Narratif vs Brut** : Même en Mathématiques, privilégier une rédaction narrative et explicative des calculs plutôt que d'enchaîner des équations brutes.

- **Mathématiques & Physique** : 
  - Utiliser KaTeX (`$inline$`, `$$display$$`). 
  - **Obligation absolue** : utiliser la virgule française avec accolades pour les décimales (ex: `1{,}5` et JAMAIS `1.5`).
  - Les longues démonstrations ou étapes de calcul doivent être découpées et aérées textuellement.

- **Ton** : Socratique, encourageant, jamais punitif (pas de "Faux" ou "Erreur").

- **Exercices dynamiques** : La fonction `generate()` doit utiliser `pick()` pour varier les contextes textuels, pas juste les valeurs numériques.

## 3. Workflow d'ajout de module (Génération)
1. Vérifier le programme dans `docs/programmes-{subject}.md` (Ne traiter que les chapitres 🔴).
2. Ajouter l'objet dans `js/data/{level}/{level}-{topic}.js`. Déclarer le fichier dans `js/data/{level}/index.js` ET dans `index.html` (ordre de chargement). Mettre à jour `contenu.md`.
3. Passer le statut à 🟢 dans le fichier markdown du programme.

## 4. Optimisation du Contexte (INTERDICTIONS)
- **NE LIS JAMAIS** les fichiers du dossier `js/data/` à moins d'une demande explicite concernant le contenu pédagogique.
- **NE LIS JAMAIS** les fichiers `docs/programmes-*.md` à moins d'une demande de génération de nouveaux modules.
- Pour débugger, commence toujours par analyser l'état (`state.js`) et le routage (`app.js`).