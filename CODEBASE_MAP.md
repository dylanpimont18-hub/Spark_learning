# CODEBASE_MAP — Spark Learning

SPA Vanilla JS sans bundler. Chargement des scripts via `index.html` (ordre critique). État centralisé dans `state.js`.

---

## index.html
Point d'entrée unique. Déclare l'ordre de chargement de tous les scripts.
- Chargement : `<script src="...">` dans l'ordre exact requis (Firebase → authService → views (authView, teacherDashboard, adminPanel) → sync → data → engines → components → app)

## css/styles.css
Système de design complet : variables CSS (`--primary`, `--secondary`, `--accent`, `--error`, `--space-*`), thèmes, composants UI.
- `.ap-*` classes pour AdminPanel (conteneur, header, tabs, search, cartes utilisateurs, boutons actions)

---

## js/state.js
État global de la SPA, constantes, lookup modules, recherche.
- `state` — objet global unique (subject, level, moduleId, tab, quizState, exerciceState, companionState…)
- `LEVEL_DEFS`, `LEVEL_NAMES` — définitions des niveaux (Collège/Lycée/BTS)
- `MODULE_THEME_RULES` — règles regex pour catégoriser les modules par thème
- `getModuleThemes(mod)` — retourne les thèmes d'un module
- `getModuleSearchKeywords(mod)` — mots-clés pour la recherche

## js/app.js
Routeur hash SPA, init, KaTeX, confetti.
- `buildHash(view, data)` — construit un hash `#view/data`
- `navigateTo(view, data)` — change la vue active via hash
- `renderMath()` — déclenche KaTeX sur `#app`
- `createConfetti()` — animation confetti de succès
- `showToast(msg, type)` — notification toast

## js/loader.js
Lazy loading des fichiers de données par niveau/matière.
- `DATA_FILES` — map `'matière-niveau' → [chemins fichiers]`
- `ensureLevelData(subject, level)` — charge dynamiquement les scripts d'un niveau

## js/storage.js
Centralise toute la persistance localStorage.
- `Storage.getProgress()` / `saveProgress(moduleId, type)` — lecture/écriture progression
- `Storage.getStreak()` / `updateStreak()` — suivi des séries journalières
- `Storage.getFlashcards()` / `saveFlashcard()` — état des flashcards
- `Storage.getRecent()` / `addRecent(moduleId)` — modules récemment visités

---

## js/data/helpers.js
Initialise `window.MODULES = []`, utilitaires aléatoires.
- `rand(min, max)` — entier aléatoire
- `randFloat(min, max, d)` — flottant aléatoire
- `pick(arr)` — élément aléatoire dans un tableau

## js/data/6e/index.js
Manifest 6e — liste et ordre des modules (chargés via `<script>` dans index.html).

## js/data/6e/6e-*.js *(10 modules)*
Modules pédagogiques Maths 6e : `6e-addition-soustraction`, `6e-angles`, `6e-division`, `6e-figures-geometriques`, `6e-fractions`, `6e-multiplication`, `6e-nombres-decimaux`, `6e-perimetres-aires`, `6e-symetrie-axiale`, `6e-volumes`.

## js/data/5e/index.js
Manifest 5e.

## js/data/5e/5e-*.js + proportionnalite.js *(14 modules)*
Modules Maths 5e : relatifs, fractions, proportionnalité, expressions littérales, probabilités, statistiques, géométrie, volumes.

## js/data/4e/index.js
Manifest 4e.

## js/data/4e/*.js *(11 modules)*
Modules Maths 4e : puissances, calcul algébrique, pythagore, cosinus, translations, volumes, statistiques, probabilités, etc.

## js/data/3e/index.js
Manifest 3e.

## js/data/3e/*.js *(10 modules)*
Modules Maths 3e : trigonométrie, systèmes, Thalès, arithmétique, identités remarquables, homotéthies, sections solides, volumes, stats-probas, algorithmique.

## js/data/lycee-2nde/index.js
Manifest Lycée 2nde.

## js/data/lycee-2nde/*.js *(7 modules)*
Modules Maths 2nde : fonctions affines, vecteurs, équations-inéquations, droites-systèmes, repérage plan, statistiques, échantillonnage, algorithmique.

## js/data/lycee-1re/index.js
Manifest Lycée 1re.

## js/data/lycee-1re/1re-*.js *(10 modules)*
Modules Maths 1re : second degré, dérivation, suites, trigonométrie, produit scalaire, géométrie repérée, polynômes, probas conditionnelles, variables aléatoires, info chiffrée.

## js/data/lycee-tle/index.js
Manifest Terminale.

## js/data/lycee-tle/tle-*.js *(13 modules)*
Modules Maths Tle : exponentielle-logarithme, limites, dérivation compléments, convexité, primitives-intégrales, équations différentielles, suites compléments, géométrie espace, orthogonalité, dénombrement, lois continues, logarithme.

## js/data/bts/index.js
Manifest BTS Maths.

## js/data/bts/*.js *(14 modules)*
Modules Maths BTS : fonctions réelles, dérivation, intégrales, matrices, complexes, suites, probas discrètes, stats deux variables, loi normale, Laplace, Fourier, équations diff 2.

## js/data/si-2nde/index.js
Manifest SI 2nde.

## js/data/si-2nde/si-2nde-*.js *(5 modules)*
Modules SI 2nde : analyse fonctionnelle, chaînes énergie-info, capteurs-actionneurs, mécanique de base, programmation.

## js/data/si-1re/index.js
Manifest SI 1re.

## js/data/si-1re/si-1re-*.js *(2 modules)*
Modules SI 1re : cinématique, statique PFS.

## js/data/si-tle/index.js
Manifest SI Terminale.

## js/data/si-tle/si-tle-*.js *(8 modules)*
Modules SI Tle : dynamique PFD, énergie cinétique, asservis PID, Bode, GRAFCET, réseaux, transmission.

## js/data/si-bts/index.js
Manifest SI BTS.

## js/data/si-bts/si-bts-*.js *(1 module)*
Modules SI BTS : automatique.

---

## js/engines/shared.js
Utilitaires partagés entre tous les moteurs.
- `_setEngineTimeout(fn, delay)` — setTimeout tracé pour nettoyage
- `clearEngineTimers()` — vide tous les timers actifs
- `_checkModuleComplete(moduleId)` — vérifie et notifie la complétion d'un module

## js/engines/quizEngine.js
Moteur de quiz.
- `submitQuizAnswer(moduleId, questionIndex, optionIndex)` — traite une réponse quiz
- `nextQuizQuestion(moduleId)` — passe à la question suivante
- `restartQuiz(moduleId)` — remet à zéro le quiz

## js/engines/exerciceEngine.js
Moteur d'exercice dynamique.
- `submitExerciceAnswer(moduleId)` — valide la réponse saisie
- `getErrorFeedback(mod, attempts)` — génère un message d'erreur adapté
- `regenerateExercice(moduleId)` — génère un nouvel exercice aléatoire

## js/engines/problemeEngine.js
Moteur de problème multi-étapes.
- `revealSolution(moduleId, taskIndex)` — dévoile la solution d'une étape

## js/engines/evaluationEngine.js
Moteur d'évaluation (questions numériques).
- `submitEvaluationAnswer(moduleId)` — valide une réponse d'évaluation

## js/engines/companionEngine.js
Moteur Spark Companion : remédiation, rattrapage, CCF.
- `detectLacunes(moduleId)` — détecte les lacunes de l'élève
- `generateRemediationPlan(moduleId)` — crée un plan de rattrapage

---

## js/components/moduleTabs.js
Rendu des onglets d'un module (cours / quiz / exercice / problème / évaluation / flashcards).
- `renderTabContent()` — sélectionne et rend l'onglet actif

## js/components/quiz.js
Rendu HTML du quiz.
- `renderQuiz(mod)` — rendu question ou résultats selon état
- `renderQuizQuestion(mod)` — HTML d'une question
- `renderQuizResults(mod)` — écran de résultats

## js/components/probleme.js
Rendu HTML d'un problème.
- `renderProbleme(mod)` — rendu des étapes et boutons révéler

## js/components/evaluation.js
Rendu HTML de l'évaluation.
- `renderEvaluation(mod)` — rendu des questions numériques

## js/components/companion.js
Interface Spark Companion.
- `renderCompanionHome()` — accueil companion (badges, sélection module)
- `renderCompanionSession(moduleId)` — session de remédiation active

## js/views/home.js
Vues globales : accueil, liste matières, niveaux, modules, détail module.
- `renderContinueSection()` — section "Reprendre ton parcours"
- `renderHome()` — page d'accueil
- `renderSubjects()` — liste des matières
- `renderLevels()` — niveaux d'une matière
- `renderModules()` — grille des modules d'un niveau
- `renderModule(moduleId)` — page détail d'un module
- `renderAssignmentWidget()` — async, injecte l'encart "Devoir en cours" pour l'élève connecté à une classe

## js/auth/authService.js
Service d'authentification et d'autorisations Firestore.
- `signUp(email, password, role)` — crée un compte
- `signIn(email, password)` — connecte l'utilisateur
- `signOut()` — déconnecte
- `setTeacherApprovalStatus(uid, isApproved)` — approuve/refuse un enseignant
- `createClass(teacherUid, className, description)` — crée une classe
- `getTeacherClasses(teacherUid)` — récupère les classes d'un enseignant
- `addStudentToClass(studentUid, classCode)` — ajoute un élève à une classe (batch update users + classes)
- `removeStudentFromClass(studentUid, classCode)` — retire un élève d'une classe (batch update users + classes)
- `createAssignment(classCode, moduleId, dueDate)` — crée un devoir dans la collection assignments
- `getClassAssignments(classCode)` — récupère les devoirs d'une classe, triés par date côté client
- `deleteAssignment(assignmentId)` — supprime un devoir

## js/views/adminPanel.js
Panneau d'administration : gestion des enseignants en attente et comptes utilisateurs.
- `AdminPanel.render()` — point d'entrée async, affiche le panneau
- `AdminPanel._switchTab(tab)` — bascule entre onglets (pending/all)
- `AdminPanel._loadTab(tab)` — charge les données de l'onglet actif via `AuthService`
- `AdminPanel._renderPending(pending)` — rendu liste enseignants en attente avec boutons Approuver/Refuser
- `AdminPanel._renderAll(users)` — rendu tous les comptes avec barre de recherche et filtrage
- `AdminPanel._approve(uid)` / `_reject(uid)` — approuve/refuse un enseignant
- `AdminPanel._setStatus(uid, status)` — modifie le statut d'un utilisateur

## js/views/teacherDashboard.js
Tableau de bord enseignant : classes, élèves, progression, devoirs, grading.
- `TeacherDashboard.render(backCode)` — charge les classes de l'enseignant
- `TeacherDashboard._viewClass(classIndex)` — charge profils + progressions en parallèle (Promise.all)
- `TeacherDashboard._renderClassDetail(cls, students, progressMap)` — vue classe : stats bar, liste élèves, devoirs, bouton grading
- `TeacherDashboard._renderStudentProgress(uid, classId, profile, progress)` — progression lisible par titre de module, détail quiz/exo/eval
- `TeacherDashboard._removeStudent(uid, classCode, classIndex)` — retire un élève
- `TeacherDashboard._openGrading(classIndex)` — ouvre GradingPanel avec les données déjà chargées
- `TeacherDashboard._addAssignment(classIndex)` — crée un devoir pour la classe
- `TeacherDashboard._deleteAssignment(assignmentId, classIndex)` — supprime un devoir

## js/views/gradingPanel.js
Panneau de notation enseignant : tableau comparatif élèves × modules + export Pronote CSV.
- `GradingPanel.render({ cls, students, progressMap, backIndex })` — point d'entrée, reçoit les données de TeacherDashboard (pas de double requête Firestore)
- `GradingPanel._renderGradeTable()` — tableau de saisie /20 + appréciation pour le module sélectionné
- `GradingPanel._exportCSV()` — génère et télécharge le CSV via Blob + URL.createObjectURL

---

## js/flashcards.js
Flashcards générées automatiquement depuis les données cours.
- `buildFlashcardDeck(mod)` — construit le deck depuis `definitions[]`, `formulas[]`, `recap[]`
- `renderFlashcard(mod)` — rendu de la carte active
- `flipCard()` — retourne la carte

## js/chrono.js
Défi Chrono : exercices en 3 minutes.
- `initChrono(moduleId)` — démarre le défi
- `renderChrono(mod)` — rendu du chronomètre et exercice
- `submitChronoAnswer(moduleId)` — valide la réponse en mode chrono

## js/playlist.js
Parcours personnalisés (enseignants) et mode guidé.
- `initPlaylistState()` — initialise l'état playlist
- `renderPlaylist()` — rendu du gestionnaire de playlist
- `addToPlaylist(moduleId, type)` — ajoute un élément au parcours

## js/homework.js
Générateur de devoirs avec export PDF.
- `initHomeworkState()` — initialise l'état devoir
- `renderHomework()` — rendu de l'interface devoir
- `exportHomeworkPDF()` — génère le PDF via `window.print()`

## js/recommendations.js
Recommandations adaptatives basées sur la progression.
- `getRecommendations(moduleId)` — retourne des modules suggérés

## js/utils/ui-helpers.js
Helpers de rendu et utilitaires UI partagés.
- `renderLoading()` — squelette de chargement
- `renderErreurConseil(piege)` — bloc conseil sur l'erreur classique
- `showToast(message, type)` — notification toast temporaire
