# CODEBASE_MAP — Spark Learning

SPA Vanilla JS sans bundler. Chargement des scripts via `index.html` (ordre critique). État centralisé dans `state.js`.

---

## index.html
Point d'entrée unique. Déclare l'ordre de chargement de tous les scripts.
- Chargement : `<script src="...">` dans l'ordre exact requis (Firebase → authService → views (authView, teacherDashboard, adminPanel) → sync → data → engines → components → app)
- `#nav-login` — bouton nav (masqué par défaut), affiché en mode invité pour ouvrir `AuthView`

## css/styles.css
Système de design complet : variables CSS (`--primary`, `--secondary`, `--accent`, `--error`, `--space-*`), thèmes, composants UI.
- `.ap-*` classes pour AdminPanel (conteneur, header, tabs, search, cartes utilisateurs, boutons actions)
- `.auth-close` — bouton ✕ sur `.auth-card` pour fermer l'écran de connexion et revenir au mode invité
- `.ad-slot-placeholder` — cadre pointillé pour les emplacements publicitaires (placeholder, pas de pub réelle encore)
- `@media print` (~L3440+) — mise en page A4 des fiches (`.print-fiche`, `.print-fiche-header`, etc.) ; `body.printing` bascule l'affichage de `#app` vers `#print-container`
- `.td-weakpoint-*` / `.td-weakpoints-section` — bloc "Points faibles de la classe" dans TeacherDashboard (bordure `--error` à gauche pour signaler visuellement)

## ads.txt
Fichier de vérification standard IAB pour Google AdSense (`google.com, pub-5320273649803132, DIRECT, ...`).

## firestore.rules
Règles de sécurité Firestore.
- `config/{doc}` — lecture publique (invités inclus, pour lire `maintenanceMode`/annonce), écriture réservée admin
- `classes/{classCode}` — lecture restreinte à l'enseignant propriétaire/admin/élèves inscrits (plus de listing global) ; un élève peut s'auto-ajouter/retirer du champ `students` uniquement
- `progress/{uid}` — lecture enseignant conditionnée au tableau dénormalisé `teacherIds` (élève dans une de ses classes), au lieu d'un accès enseignant global
- `assignments/{id}` — lecture restreinte enseignant propriétaire/admin/élèves de la classe concernée (plus de listing global)

---

## js/state.js
État global de la SPA, constantes, lookup modules, recherche.
- `state` — objet global unique (subject, level, moduleId, tab, quizState, exerciceState, companionState…)
- `LEVEL_DEFS`, `LEVEL_NAMES` — définitions des niveaux (Collège/Lycée/BTS)
- `MODULE_THEME_RULES` — règles regex pour catégoriser les modules par thème
- `getModuleThemes(mod)` — retourne les thèmes d'un module
- `getModuleSearchKeywords(mod)` — mots-clés pour la recherche

## js/app.js
Routeur SPA (pushState), init, KaTeX, confetti.
- `buildPath(view, data)` — construit un chemin d'URL réel `/view/data` (pushState)
- `parsePath(pathname)` / `parseLegacyHash(hash)` — parsent respectivement une URL réelle et un ancien lien `#hash` (rétrocompat), partagent `_parseRouteParts(parts)`
- `navigate(view, data)` — change la vue active via `history.pushState` (plus de hash routing)
- `renderMath()` — déclenche KaTeX sur `#app`
- Appelle `initAdSlots()` (voir `js/components/adSlot.js`) et `trackPageView()` (voir `js/analytics.js`) après chaque rendu de vue dans le dispatcher `render()` — sauf branches `admin`/`teacher` (return anticipé, hors suivi)
- `createConfetti()` — animation confetti de succès
- `showToast(msg, type)` — notification toast
- `printFiche(moduleId)` — imprime la fiche de synthèse d'un module (via `#print-container` + `renderFicheCours()`, voir `js/utils/ui-helpers.js`)
- `toggleBatchPrintMode()` / `togglePrintSelection()` / `selectAllForPrint()` / `printSelectedFiches()` — sélection multi-modules sur la grille (`renderModules()`) puis impression groupée via `renderFichesBatch()`
- `_checkMaintenance()` — lit `config/settings.maintenanceMode`, affiche la page maintenance si actif (invités + comptes non-admin) ; fail-open assumé si Firestore inaccessible
- `_syncModuleAccess()` — lit `config/moduleAccess.statuses` (Firestore, source de vérité) et remplace `state.moduleAccess` + le cache local `Storage`, pour que le verrouillage/maintenance décidé par un admin s'applique à tous les utilisateurs
- `setSubjectAccessMode(subjectId, mode)` / `setModuleAccessMode(moduleId, mode)` — admin : met à jour `Storage` puis pousse la carte complète vers `AuthService.saveModuleAccess()`
- `_setupCommonListeners()` — bind nav globale ; recalcule à chaque appel la visibilité `nav-teacher`/`nav-homework`/`nav-signout`/`nav-login` selon `AuthGuard.isAuthenticated()`
- Mode invité : `onAuthStateChanged` sans `firebaseUser` → `AuthGuard.reset()` + `_checkMaintenance()` + `_syncModuleAccess()` + `_setupStudentApp()` (accès direct au contenu sans connexion)

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
- `Storage.getModuleStatuses()` / `setModuleStatus(id, patch)` / `resetModuleStatus(id)` — cache local verrouillage/maintenance par module
- `Storage.setAllModuleStatuses(all)` — remplace tout le cache local par la carte reçue de Firestore (`config/moduleAccess`)

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

## js/consent.js
Bannière de consentement cookies (RGPD/CNIL) ; un seul consentement global couvre pub ET mesure d'audience.
- `Consent.hasAdConsent()` — lit `Storage.getConsent('ads')`, utilisé aussi bien par `adSlot.js` que par `analytics.js`
- `Consent.accept()` / `Consent.reject()` — enregistrent le choix ; `accept()` déclenche `initAdSlots()` et `trackPageView()`
- `Consent.init()` / `Consent.showBanner()` / `Consent.hideBanner()` / `Consent.openPreferences()` — cycle d'affichage de la bannière

## js/analyticsConfig.js
Point unique de contrôle du suivi d'audience (Google Analytics 4).
- `ANALYTICS_ENABLED` — `true` : suivi actif (propriété GA4 créée le 2026-07-06)
- `GA_MEASUREMENT_ID` — `G-QPNXD2D9VD`, Measurement ID de la propriété GA4 de sparklearning.fr

## js/analytics.js
Chargement différé de gtag.js (GA4) et suivi des pages vues (SPA pushState, pas de détection automatique des routes par GA4).
- `loadAnalytics()` — injecte le script `gtag.js` si `ANALYTICS_ENABLED` + `GA_MEASUREMENT_ID` + `Consent.hasAdConsent()` ; idempotent (`window._gaLoaded`)
- `trackPageView()` — envoie un événement `page_view` (path/title/location courants) ; appelée depuis `js/app.js` (dispatcher `render()`) et `Consent.accept()`

## js/adsConfig.js
Point unique de contrôle des emplacements publicitaires AdSense.
- `ADS_ENABLED` — tant qu'à `false`, tous les emplacements restent en placeholder visuel (aucun ad unit réel créé côté AdSense)
- `ADSENSE_CLIENT` — identifiant éditeur (`ca-pub-...`)
- `AD_SLOTS` — map `{ home, subjects, modules } → data-ad-slot`, à renseigner quand les ad units seront créés dans le dashboard AdSense

## js/components/adSlot.js
Emplacement publicitaire : placeholder visuel tant qu'`ADS_ENABLED` est à `false`, sinon vrai bloc `<ins class="adsbygoogle">`.
- `renderAdSlot(placement, slotKey)` — rend le placeholder ou l'ad unit réel selon `js/adsConfig.js`, utilisé uniquement sur les pages de navigation (accueil, matières, modules) — jamais dans les onglets d'apprentissage actif d'un module
- `initAdSlots()` — pousse les nouveaux `<ins class="adsbygoogle">` injectés dans le DOM vers `adsbygoogle.push({})` ; appelée depuis `js/app.js` après chaque rendu de vue ; sans effet tant qu'`ADS_ENABLED` est à `false`

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
- `renderHome()`, `renderSubjects()`, `renderModulesList()` — incluent chacune un `renderAdSlot(...)` (voir `js/components/adSlot.js`) en bas de section ; jamais dans les onglets d'apprentissage actif
- `renderAssignmentWidget()` — async, injecte l'encart "Devoir en cours" pour l'élève connecté à une classe

## js/views/confidentialite.js
Politique de confidentialité (RGPD, exigence Google AdSense).
- `renderConfidentialite()` — page statique : localStorage sans compte, données Firebase si compte créé, publicité AdSense non personnalisée, formulaire de contact (Formspree), droits RGPD. Route `#confidentialite`, lien en footer.

## js/auth/authService.js
Service d'authentification et d'autorisations Firestore.
- `signUp(email, password, role)` — crée un compte
- `signIn(email, password)` — connecte l'utilisateur
- `signOut()` — déconnecte
- `setTeacherApprovalStatus(uid, isApproved)` — approuve/refuse un enseignant
- `createClass(teacherUid, className, description)` — crée une classe
- `getTeacherClasses(teacherUid)` — récupère les classes d'un enseignant
- `joinClass(uid, classCode)` — ajoute un élève à une classe (batch update users + classes) + dénormalise `progress.teacherIds`
- `removeStudentFromClass(studentUid, classCode)` — retire un élève d'une classe (batch update users + classes) + retire `progress.teacherIds`
- `backfillProgressTeacherIds()` — migration one-shot : reconstruit `progress.teacherIds` pour les élèves déjà inscrits (bouton admin)
- `createAssignment(classCode, moduleId, dueDate)` — crée un devoir dans la collection assignments
- `getClassAssignments(classCode)` — récupère les devoirs d'une classe, triés par date côté client
- `deleteAssignment(assignmentId)` — supprime un devoir
- `getPlatformSettings()` / `savePlatformSettings(data)` — lit/écrit `config/settings` (dont `maintenanceMode`)
- `getModuleAccess()` / `saveModuleAccess(statuses)` — lit/écrit `config/moduleAccess.statuses` (verrouillage/maintenance par module, lecture publique, écriture admin) : rend le verrouillage admin effectif pour tous les utilisateurs

## js/auth/authGuard.js
Vérifie l'état Firebase auth avant d'afficher l'app (profil, rôle, statut).
- `AuthGuard.init(user)` — reçoit l'utilisateur Firebase déjà résolu par l'unique listener global de `js/app.js`, charge le profil Firestore une fois ; NE s'abonne PAS lui-même à `onAuthStateChanged` (évite l'empilement de listeners imbriqués à chaque rafraîchissement de token)
- `AuthGuard.reset()` — efface `_currentUser`/`_currentProfile` (utilisé au retour en mode invité)
- `AuthGuard.isAuthenticated() / getRole() / getStatus()` — accesseurs d'état

## js/views/authView.js
Pages Inscription / Connexion (overlay plein `#app`, header/nav restent visibles).
- `AuthView.render(fromGuest)` — affiche l'écran de connexion ; si `fromGuest`, ajoute un bouton `.auth-close` (✕)
- `AuthView._closeToGuest()` — ferme l'écran de connexion et revient à l'accueil en mode invité (`navigate('home')`)
- `AuthView.renderPending()` — écran d'attente de validation enseignant
- `AuthView._normalizePhone(raw)` — retire tout sauf `+` et chiffres avant envoi à Firebase (le placeholder `+33 6 00 00 00 00` contient des espaces que l'utilisateur reproduit ; Firebase exige un E.164 strict sans espace) ; utilisé par `_loginSendOTP()` et `_registerSendOTP()`

## js/views/adminPanel.js
Panneau d'administration : gestion des enseignants en attente et comptes utilisateurs.
- `AdminPanel.render()` — point d'entrée async, affiche le panneau
- `AdminPanel._switchTab(tab)` — bascule entre onglets (pending/all)
- `AdminPanel._loadTab(tab)` — charge les données de l'onglet actif via `AuthService`
- `AdminPanel._renderPending(pending)` — rendu liste enseignants en attente avec boutons Approuver/Refuser
- `AdminPanel._renderAll(users)` — rendu tous les comptes avec barre de recherche et filtrage
- `AdminPanel._approve(uid)` / `_reject(uid)` — approuve/refuse un enseignant
- `AdminPanel._setStatus(uid, status)` — modifie le statut d'un utilisateur
- `AdminPanel._runBackfillTeacherIds()` — lance la migration `progress.teacherIds` (à exécuter une fois après déploiement des règles)

## js/views/teacherDashboard.js
Tableau de bord enseignant : classes, élèves, progression, devoirs, grading.
- `TeacherDashboard.render(backCode)` — charge les classes de l'enseignant
- `TeacherDashboard._viewClass(classIndex)` — charge profils + progressions en parallèle (Promise.all)
- `TeacherDashboard._renderClassDetail(cls, students, progressMap)` — vue classe : stats bar, points faibles, liste élèves, devoirs, bouton grading
- `TeacherDashboard._computeWeakPoints(students, progressMap)` — agrège `progress.tracking` (scores réels quiz/évaluation/exercice, distinct des booléens de `progress.progress`) par module sur toute la classe ; retourne le top 5 des modules sous 80% de moyenne avec la section la plus faible
- `TeacherDashboard._prefillAssignment(classIndex, moduleId)` — pré-remplit le sélecteur de devoir avec un module repéré comme point faible et y scrolle
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
- `GradingPanel._csvSafe(value)` — neutralise l'injection de formule CSV (préfixe `'` si valeur commence par `=+-@`)

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
- `renderFicheCours(mod)` — fiche de synthèse imprimable A4 d'un module (intro, définitions, méthode, exemple, formules, piège, récap) ; consommée par `printFiche()` dans `js/app.js`
- `renderFichesBatch(modules)` — concatène plusieurs `renderFicheCours()` pour l'impression groupée
- `_printLevelLabel(mod)` — libellé "Matière · Niveau — Classe" affiché en en-tête de fiche
