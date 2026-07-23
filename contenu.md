# Index du projet Spark Learning

Contrainte structurante : le projet reste une SPA purement statique, sans serveur, sans backend et avec persistance locale côté navigateur.

Ce fichier est la **source de vérité** pour la structure de fichiers du projet. Mis à jour après chaque création ou déplacement majeur.

## Racine & Configuration
| Fichier | Rôle |
|---------|------|
| index.html | Point d'entrée principal de l'application SPA |
| CLAUDE.md | Instructions système Claude et workflow |
| contenu.md | Carte architecturale du projet (ce fichier) |
| robots.txt | Règles d'indexation pour les robots ; référence `sitemap.xml` |
| sitemap.xml | Généré par `scripts/generate-sitemap.js`, jamais édité à la main |
| manifest.json | Manifeste PWA minimal (nom, icône, couleur de thème) |
| scripts/generate-sitemap.js | Génère `sitemap.xml` à partir de `js/loader.js` — à relancer après ajout de module |
| scripts/check-decimal-notation.js | Détecte les régressions de notation décimale française dans `js/data/` — à relancer après modification d'un `exercice.generate()` |

## Interface & Style
| Dossier/Fichier | Rôle |
|---------|------|
| css/styles.css | Styles de l'application |
| images/ | Ressources graphiques (logos, icônes) |

## Core Application (Vanilla JS)
| Fichier | Rôle |
|---------|------|
| js/app.js | Point de montage principal, routeur, initialisation des modules |
| js/print.js | Impression des fiches de cours (individuelle + sélection multiple) |
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
| js/components/contactPanel.js | Panneau de contact flottant (signalement erreur/remarque/question) |
| js/components/globalSearch.js | Recherche globale de modules (Ctrl/Cmd+K) |
| js/components/teacherErrorModal.js | Modale enseignant : proposer un piège fréquent sur un module |

## Tutorat privé (réservé à 2 comptes, js/tutoring/ + js/views/tutoring/)
| Fichier | Rôle |
|---------|------|
| js/tutoring/tutoringService.js | CRUD Firestore élèves/séances de cours particuliers + tests de positionnement |
| js/views/tutoring/tutoringHome.js | Liste des élèves (route /tutorat), envoi de lien de test, traitement des tests en attente |
| js/views/tutoring/tutoringStudent.js | Fiche élève : notes, historique séances (temps réel), notation, génération IA, rapport de positionnement |

- Phase 2 (générateur IA) : backend `functions/` (Cloud Functions) — voir docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md

### Test de positionnement (adaptatif, lien public envoyé aux nouveaux élèves)

Permet au tuteur d'envoyer un lien à un futur élève pour évaluer son niveau réel (Maths et/ou Physique-Chimie) avant le premier cours, sans que l'élève ait besoin d'un compte.

- **Collection Firestore `positioningTests/{token}`** — l'id du document sert directement de token dans l'URL publique. Champs : `studentId` (`null` tant que non rattaché à une fiche élève), `studentNameInput`/`studentLevelInput` (saisis par l'élève si nouveau), `createdBy`, `results.{maths|physique}` (`{status, themes: {themeId: {label, level}}, completedAt}`), `reviewed` (bool, coché quand le tuteur a traité le résultat). Lecture/écriture Firestore réservées `isTutor()` — l'élève non authentifié n'y accède jamais directement, uniquement via les Cloud Functions `onCall` ci-dessous (voir `firestore.rules`).
- **Route publique `/positionnement/:token`** (`js/views/positioning/positioningTest.js`, `PositioningTest`) — hors flux `AuthGuard`, accessible sans connexion. Recueille prénom/classe si l'élève est nouveau, propose le choix de la matière, fait passer 5 thèmes × 6 questions QCM adaptatives par matière, puis soumet le résultat.
- **Algorithme adaptatif "escalier"** (`functions/src/positioningStaircase.js`, dupliqué côté client dans `positioningTest.js` pour le choix de question en direct) : part du palier 5/9, applique 6 pas `[4,2,1,1,1,1]` (+ si correct, − sinon), clampé entre 1 (6e) et 9 (BTS2) — `LEVEL_LABELS` fait la correspondance palier → classe.
- **Banque de questions** (`functions/src/positioningBank/`) : 10 thèmes fixes (5 Maths, 5 Physique-Chimie), 2-3 questions QCM par palier et par thème, validés au chargement par `functions/src/positioningBank/validate.js` (fail-fast si un thème/palier est incomplet).
- **3 Cloud Functions `onCall`** (déclarées dans `functions/index.js`, logique dans `functions/src/positioning.js`) :
  - `getPositioningLinkInfo` — infos du lien (nom élève déjà connu ? matières déjà complétées ?)
  - `getPositioningQuestionBank` — sert la banque de questions d'une matière au client
  - `submitPositioningResult` — corrige les réponses côté serveur (autoritaire, indépendant du calcul client), calcule le niveau par thème via l'algorithme escalier, écrit `results.{subject}` dans le doc
- **Côté tuteur** : `js/tutoring/tutoringService.js` expose `createPositioningTest`, `getPendingPositioningTests`, `watchStudentPositioningTests`, `markPositioningTestReviewed`, `attachPositioningTestToNewStudent`, `attachPositioningTestToStudent`. `tutoringHome.js` affiche un bloc "Tests à traiter" (rattachement à une fiche nouvelle ou existante) ; `tutoringStudent.js` affiche le rapport par thème + une recommandation générée par `js/positioning/positioningReport.js` (compare le niveau déclaré de l'élève aux niveaux estimés par thème).

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
| **bts-prep/** | Prérequis BTS Scientifique — **TERMINÉ** (14 modules remise à niveau) |
| bts-prep/bts-prep-calcul-litteral.js | Calcul littéral — Isolation de l'inconnue |
| bts-prep/bts-prep-equations.js | Équations 1er/2nd degré, systèmes 2×2 |
| bts-prep/bts-prep-proportionnalite.js | Proportionnalité, règle de trois, rendement |
| bts-prep/bts-prep-puissances.js | Puissances de 10, notation scientifique, préfixes SI |
| bts-prep/bts-prep-fonctions.js | Fonctions affine/carré/inverse, pente, intersection |
| bts-prep/bts-prep-trigonometrie.js | Sin/cos/tan, triangle rectangle, valeurs remarquables |
| bts-prep/bts-prep-logarithme.js | ln/exp, propriétés, décibels, constante de temps RC |
| bts-prep/bts-prep-vecteurs.js | Composantes, norme, addition, produit scalaire |
| bts-prep/bts-prep-si-unites.js | 7 grandeurs SI, unités dérivées, préfixes, conversions |
| bts-prep/bts-prep-analyse-dim.js | Homogénéité, dimensions, détection d'erreurs |
| bts-prep/bts-prep-conversions.js | Pression, débit, énergie, vitesse angulaire |
| bts-prep/bts-prep-equations-transf.js | Inverser racine, puissance, exp, ln |
| bts-prep/bts-prep-graphiques.js | Interpolation linéaire, pente, extrapolation, abaques |
| bts-prep/bts-prep-donnees-techniques.js | Catalogues Grundfos/Daikin/Schneider, NPSH, COP |
| bts-prep/index.js | Manifest d'ordre de chargement |
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
