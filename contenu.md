# Index du projet Spark Learning

Ce fichier est la **source de vérité** pour la structure de fichiers du projet. Mis à jour après chaque création ou déplacement majeur.

## Racine & Configuration
| Fichier | Rôle |
|---------|------|
| index.html | Point d'entrée principal de l'application SPA |
| CLAUDE.md | Instructions système Claude et workflow |
| contenu.md | Carte architecturale du projet (ce fichier) |

## Interface & Style
| Dossier/Fichier | Rôle |
|---------|------|
| css/styles.css | Styles de l'application |
| images/ | Ressources graphiques (logos, icônes) |

## Core Application (Vanilla JS)
| Fichier | Rôle |
|---------|------|
| js/app.js | Point de montage principal, initialisation des modules |
| js/state.js | Gestion de l'état global et session |
| js/storage.js | Gestion de la persistance (LocalStorage, sauvegarde progrès) |
| js/views/ + js/components/ | Vues globales, onglets et rendu des modules |
| js/loader.js | Chargement asynchrone des données et modules |

## Modules Fonctionnels
| Fichier | Rôle |
|---------|------|
| js/flashcards.js | Logique d'affichage et de révision des cartes d'apprentissage |
| js/chrono.js | Gestion du minuteur (sessions d'étude, Pomodoro) |
| js/playlist.js | Création et lecture de parcours de révision |
| js/recommendations.js | Algorithme de suggestion de contenus selon le profil |
| js/homework.js | Interface de suivi des devoirs et tâches |

## Moteurs (js/engines/)
| Fichier | Rôle |
|---------|------|
| js/engines/shared.js | Moteurs partagés pour quiz, exercices, problèmes et évaluations |
| js/engines/companionEngine.js | **[PHASE 4]** Moteur Spark Companion : remédiation, rattrapage, génération d'exos dynamiques |

## Composants d'Interface (js/components/)
| Fichier | Rôle |
|---------|------|
| js/components/moduleTabs.js | Onglets du module (cours, quiz, exercice, etc.) |
| js/components/renderCours.js | Rendu du contenu de cours |
| js/components/quiz.js | Interface des quiz |
| js/components/exercice.js | Interface des exercices |
| js/components/probleme.js | Interface des problèmes |
| js/components/evaluation.js | Interface des évaluations |
| js/components/companion.js | **[PHASE 4]** Interface Spark Companion : accueil, remédiation, suivi CCF |

## Données Scolaires (js/data/)
| Fichier | Rôle |
|---------|------|
| helpers.js | Fonctions utilitaires partagées par les bases de données |
| **6e/** | Contenus Collège 6e — **refactoring TERMINÉ** (9 sous-modules) |
| **5e/** | Contenus Collège 5e — **refactoring TERMINÉ** (15 sous-modules) |
| **4e/** | Contenus Collège 4e — **refactoring TERMINÉ** (12 sous-modules) |
| 4e/puissances.js | Puissances de 10 et Notation Scientifique |
| 4e/calcul-algebrique.js | Calcul Algébrique – Isoler une inconnue |
| 4e/4e-pythagore.js | Théorème de Pythagore |
| 4e/4e-fractions-mult-div.js | Fractions – Multiplication et Division |
| 4e/4e-relatifs-mult-div.js | Nombres Relatifs – Multiplication et Division |
| 4e/4e-triangle-rectangle-cercle.js | Triangle Rectangle et Cercle |
| 4e/4e-translations.js | Translations |
| 4e/4e-droites-remarquables.js | Droites Remarquables du Triangle |
| 4e/4e-cosinus.js | Cosinus et Trigonométrie |
| 4e/4e-volumes.js | Volumes de Solides |
| 4e/4e-statistiques.js | Statistiques |
| 4e/4e-probabilites.js | Probabilités |
| 4e/index.js | Manifest d'ordre de chargement |
| **3e/** | Contenus Collège 3e — **refactoring TERMINÉ** (12 sous-modules) |
| 3e/trigonometrie.js | Trigonométrie dans le Triangle Rectangle |
| 3e/3e-systemes.js | Systèmes d'équations |
| 3e/3e-thales.js | Théorème de Thalès |
| 3e/3e-arithmetique.js | Arithmétique (PGCD, nombres premiers) |
| 3e/3e-identites-remarquables.js | Identités remarquables |
| 3e/3e-equations-inequations.js | Équations et inéquations |
| 3e/3e-fonctions.js | Fonctions (généralités) |
| 3e/3e-homotheties.js | Homothéties |
| 3e/3e-sections-solides.js | Sections de solides |
| 3e/3e-volumes.js | Volumes de solides |
| 3e/3e-stats-probas.js | Statistiques et probabilités |
| 3e/3e-algorithmique.js | Algorithmique |
| 3e/index.js | Manifest d'ordre de chargement |
| **bts/** | Contenus BTS (Maths) — **refactoring TERMINÉ** (13 sous-modules) |
| bts/complexes.js | Nombres Complexes (impédances, régimes AC) |
| bts/eq-diff-2.js | Équations Différentielles 2nd ordre |
| bts/statistiques.js | Statistiques descriptives |
| bts/bts-loi-normale.js | Loi Normale |
| bts/bts-fonctions-reelles.js | Fonctions Réelles (limites, asymptotes) |
| bts/bts-derivation-appliquee.js | Dérivation Appliquée |
| bts/bts-integrales-appliquees.js | Intégrales Appliquées |
| bts/bts-stats-deux-variables.js | Statistiques à deux variables |
| bts/bts-probas-discretes.js | Probabilités Discrètes |
| bts/bts-suites-appliquees.js | Suites Appliquées |
| bts/bts-matrices.js | Calcul Matriciel |
| bts/bts-fourier.js | Série de Fourier |
| bts/bts-laplace.js | Transformée de Laplace |
| bts/index.js | Manifest d'ordre de chargement |
| **lycee-2nde/** | Contenus Lycée 2nde — refactoring terminé |
| **lycee-1re/** | Contenus Lycée 1re — refactoring terminé |
| **lycee-tle/** | Contenus Lycée Tle — refactoring terminé |
| **si-2nde/** | Contenus SI 2nde — refactoring terminé |
| **si-1re/** | Contenus SI 1re — refactoring terminé |
| **si-tle/** | Contenus SI Tle — refactoring terminé |
| **si-bts/** | Contenus SI BTS — refactoring terminé |

## Documentation (docs/)
| Fichier | Rôle |
|---------|------|
| programmes-*.md | Référentiels de compétences officiels (Maths, Physique, SI) |

---

## Phase 4 : Spark Companion (Module de Remédiation & Rattrapage)

### Statut : 🟢 EN COURS

**Spark Companion** est un nouveau module qui offre la **remédiation ciblée** et **la préparation aux évaluations (CCF)**.

### Fonctionnalités

- **Détection automatique des lacunes** : Analyse des réponses pour identifier les points faibles
- **Exercices dynamiques** : Génération d'exercices variés avec contextes textuels aléatoires (utilise `pick()`)
- **Suivi personnalisé** : Points, badges, progression vers objectifs CCF
- **Parcours libre** : Les élèves peuvent progresser hors séquence pour préparer leur CCF
- **Recommandations ciblées** : Suggestions de modules à revoir selon les lacunes

### Architecture

#### État Global (`companionState` dans `js/state.js`)
```javascript
companionState: {
  points: 0,                           // Points accumulés
  badges: [],                          // Badges d'accomplissement
  objectives: { completed: [], inProgress: [] },  // CCF prep
  remediation: {
    moduleId: null,
    lacunes: [],                       // [topicId, failureCount]
    attempts: {}                       // Tracking des tentatives
  },
  freeMode: {
    enabled: false,
    level: null                        // Niveau choisi en mode libre
  }
}
```

#### Moteur (`js/engines/companionEngine.js`)
Fonctions principales :
- `detectLacunes(moduleId)` — Analyse les points faibles
- `generateRemedialExercise(moduleId, topic)` — Génère un exo dynamique
- `validateRemedialAnswer()` — Valide une réponse et retourne feedback
- `getRemediationRecommendations()` — Liste les modules prioritaires
- `addBadge()`, `completeObjective()`, `addCompanionPoints()` — Progression

#### Interface (`js/components/companion.js`)
- `renderCompanionHome()` — Accueil avec sélection module + progression + objectifs CCF
- `renderCompanionSession(moduleId)` — Session remédiation pour un module
- Handlers : `submitCompanionQuiz()`, `submitCompanionExercise()`

#### Routage (`js/app.js`)
- `#companion` — Accueil Spark Companion (vue globale)
- `#companion/{moduleId}` — Session remédiation pour ce module

### Intégration

- Scripts ajoutés dans `index.html` :
  - `js/engines/companionEngine.js` (après shared.js)
  - `js/components/companion.js` (avec autres composants)
- État restauré depuis `localStorage` au démarrage
- Compatible avec tous les modules existants (Maths, Physique, SI)

### Points d'entrée pour l'utilisateur

1. **Depuis l'accueil** : Navigation vers `#companion`
2. **Depuis un module** : Futur onglet "Spark Companion" à ajouter
3. **Liste recommandations** : Suggestions basées sur lacunes détectées

---
