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
| scripts/analyser-corpus.js | Mesure le corpus maths (112 modules) : 60 tirages de `generate()` par module, complétude du cours, quiz, évaluation, alignement cours ↔ questions, langue ; écrit `docs/analyse-corpus-maths-<date>.csv` + `.md` avec un score de priorisation /100 — à relancer après un lot de corrections de contenu |
| scripts/build-bts-fed.js | Publie les TD BTS FED (L'Escale) : copie vidéos/PDF/maquettes du dossier d'enseignement vers `media/bts-fed/`, écrit `js/data/bts-fed.js` — à relancer pour ajouter un TD ou remplacer une vidéo |
| scripts/bts-fed.config.json | Réglages de la page BTS FED : film de présentation, fichiers complémentaires, dates de mise en ligne des corrigés, modules liés |
| media/bts-fed/ | Fichiers servis tels quels (videos/, td/, depart/, complements/, posters/) ; jamais réécrits par le rewrite SPA (404 si absents), cache navigateur 7 jours (`firebase.json`) |
| scripts/lib/ | Chargeur de modules hors navigateur (extract, schema, corpus) utilisé par `check-decimal-notation.js` et `analyser-corpus.js` |

## Interface & Style
| Dossier/Fichier | Rôle |
|---------|------|
| css/styles.css | Styles de l'application |
| images/ | Ressources graphiques (logos, icônes) |

## Core Application (Vanilla JS)
| Fichier | Rôle |
|---------|------|
| js/app.js | Point de montage principal, routeur, initialisation des modules |
| js/state.js | Gestion de l'état global et session |
| js/storage.js | Gestion de la persistance (LocalStorage, sauvegarde progrès) |
| js/views/ + js/components/ | Vues globales, onglets et rendu des modules |
| js/loader.js | Chargement asynchrone des données et modules |

## Modules Fonctionnels
| Fichier | Rôle |
|---------|------|
| js/flashcards.js | Logique d'affichage et de révision des cartes d'apprentissage |
| js/chrono.js | Gestion du minuteur (sessions d'étude, Pomodoro) |
| js/recommendations.js | Algorithme de suggestion de contenus selon le profil |
| js/hero3d.js | Couche 3D de l'accueil : bannière rotative, profondeur des formules du hero, inclinaison des cartes |

## Module devoir en classe (js/devoir/) — docs/evaluation/
| Fichier | Rôle |
|---------|------|
| js/devoir/devoirEngine.js | Moteur de variantes : validation d'un exercice paramétré, tirage, corrigé calculé (mathjs restreint), virgule française |
| js/devoir/devoirStore.js | Accès Firestore enseignant : `devoir_classes`, `devoir_exercices` (admin seul) |
| scripts/devoir-verifier-lot.js | Vérifie un lot d'exercices (dépôt BTS FED, privé) avant import dans la banque |
| js/devoir/devoirAdmin.js | Onglet « Devoirs » du panneau admin : banque d'exercices (éditeur JSON + 3 variantes), classes, sessions |
| js/devoir/devoirFirebase.js | Appel des Cloud Functions (europe-west1) et bascule sur les émulateurs en local (port 5055) |
| js/devoir/devoirEleve.js | Vue étudiant (`devoir.html`, `/devoir`) : code, nom, blocs de réponse, brouillon, minuteur, rendu, signalement des sorties de page et des collages |
| js/devoir/devoirSessions.js | Sous-onglet « Sessions » : création, ouverture, tableau de bord en direct, incidents anti-triche |
| js/devoir/devoirCorrection.js | Relecture des copies : pré-correction IA lancée à la main, modification, validation, note finale |
| devoir.html | Page d'épreuve épurée, sans navigation ni mesure d'audience |
| functions/ | Cloud Functions (TypeScript) : sessions, anti-triche, correction IA. Seul dossier à utiliser npm avec les outils de build |
| scripts/devoir-emulateurs.js | Essai local et tests dans la Firebase Emulator Suite |
| scripts/test-devoir-*.js, scripts/lib/devoir-*.js | Tests (règles, fonctions, bout en bout, contrôles IA), jeu de démonstration, fausse IA |
| docs/evaluation/RAPPORT-MVP-2-4.md | État, décisions, gestes de mise en service, essai local |

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
| js/components/contactPanel.js | Panneau de contact flottant (signalement erreur/remarque/question), lien de pont vers la page dédiée /contact |
| js/views/contact.js | Page de contact dédiée /contact (question, erreur, proposition commerciale, partenariat, presse) |
| js/components/globalSearch.js | Recherche globale de modules (Ctrl/Cmd+K) |
| js/views/btsFed.js | Page BTS FED : sommaire `/bts-fed` et pages `/bts-fed/td0` à `/td6` (vidéos, énoncé, corrigé, maquette de départ) ; entrée « BTS FED » de la barre du haut |

## Données Scolaires (js/data/)
| Fichier | Rôle |
|---------|------|
| helpers.js | Fonctions utilitaires partagées par les bases de données |
| bts-fed.js | Données de la page BTS FED (`var BTS_FED`), **générées** par `scripts/build-bts-fed.js` — ne pas éditer ; chargées à la demande, hors catalogue des modules |
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
| **3e/** | Contenus Collège 3e — **refactoring TERMINÉ** (13 sous-modules) |
| 3e/trigonometrie.js | Trigonométrie dans le Triangle Rectangle |
| 3e/3e-systemes.js | Systèmes d'équations |
| 3e/3e-thales.js | Théorème de Thalès |
| 3e/3e-arithmetique.js | Arithmétique (PGCD, nombres premiers) |
| 3e/3e-identites-remarquables.js | Identités remarquables |
| 3e/3e-equations-inequations.js | Équations et inéquations |
| 3e/3e-fonctions.js | Fonctions (généralités) |
| 3e/3e-fonctions-affines.js | Fonctions affines et linéaires (coefficient directeur, ordonnée à l'origine) |
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
| **physique-4e/** | Contenus Physique-Chimie 4e — complet (6/6 sous-modules) |
| **physique-3e/** | Contenus Physique-Chimie 3e — complet (6/6 sous-modules) |
| **physique-2nde/** | Contenus Physique-Chimie 2nde — complet (10/10 sous-modules) |
| **physique-1re/** | Contenus Physique-Chimie 1re — complet (11/11 sous-modules) |
| **physique-tle/** | Contenus Physique-Chimie Tle — complet (11/11 sous-modules) |
| **physique-bts/** | Contenus Physique-Chimie BTS — complet (10/10 sous-modules) |
| **physique-4e/** | Contenus Physique-Chimie 4e — complet (6/6 sous-modules) |
| **physique-3e/** | Contenus Physique-Chimie 3e — complet (6/6 sous-modules) |
| **physique-2nde/** | Contenus Physique-Chimie 2nde — complet (10/10 sous-modules) |
| **physique-1re/** | Contenus Physique-Chimie 1re spécialité — complet (11/11 sous-modules) |
| **physique-tle/** | Contenus Physique-Chimie Tle spécialité — complet (11/11 sous-modules) |
| **fed-bts/** | Contenus BTS FED (savoir S8) — **54/54 notions — S8 complet** (section A 11/11 ; section B 34/34 : ..., B10, B11 ; section C 4/4 : C1-1, C2-1, C2-2, C3 ; section D 5/5 : D1-1, D1-2, D2-1, D2-2, D2-3) |

## Documentation (docs/)
| Fichier | Rôle |
|---------|------|
| programmes-*.md | Référentiels de compétences officiels (Maths, Physique, SI, FED) |
| referentiel-fed-S8.md | Copie brute du référentiel officiel BTS FED, savoir S8 (source pour programmes-fed.md) |

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
