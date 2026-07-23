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
- `.content-table-wrap` / `.content-table` — tableau généré par `convertMarkdownTables()` (js/utils/ui-helpers.js) à partir d'un tableau markdown dans le contenu d'un module
- `@media print` (~L3440+) — mise en page A4 des fiches (`.print-fiche`, `.print-fiche-header`, etc.) ; `body.printing` bascule l'affichage de `#app` vers `#print-container` ; `#print-container` fige les variables CSS couleur (`--primary`, `--text`, `--bg-card`...) sur le thème clair, pour que les illustrations riches (`renderCoursDiagram`) restent lisibles en PDF même si le site est en thème sombre à l'impression
- `.td-weakpoint-*` / `.td-weakpoints-section` — bloc "Points faibles de la classe" dans TeacherDashboard (bordure `--error` à gauche pour signaler visuellement)

## ads.txt
Fichier de vérification standard IAB pour Google AdSense (`google.com, pub-5320273649803132, DIRECT, ...`).

## images/modules/{niveau}/{slug}.jpg
Nouveau dossier d'assets (2026-07-21) : photos réelles utilisées en complément d'un schéma SVG dans `cours.diagram` (jamais en remplacement), référencées via `<img src="images/modules/...">` dans le champ `diagram.svg`/`html`. Uniquement des images sous licence libre (domaine public, CC) car le site est public — contrairement aux fiches BTS FED internes, aucune tolérance "tous droits réservés" ici. Premier exemple : `si-bts/verin-hydraulique-coupe.jpg` (domaine public, Hotdogcartman/Hyco, Wikimedia Commons).

## firestore.rules
Règles de sécurité Firestore.
- `config/{doc}` — lecture publique (invités inclus, pour lire `maintenanceMode`/annonce), écriture réservée admin
- `classes/{classCode}` — lecture restreinte à l'enseignant propriétaire/admin/élèves inscrits (plus de listing global) ; un élève peut s'auto-ajouter/retirer du champ `students` uniquement
- `progress/{uid}` — lecture enseignant conditionnée au tableau dénormalisé `teacherIds` (élève dans une de ses classes), au lieu d'un accès enseignant global
- `assignments/{id}` — lecture restreinte enseignant propriétaire/admin/élèves de la classe concernée (plus de listing global)
- `tutoringStudents/{studentId}` / `tutoringSessions/{sessionId}` — lecture/écriture réservées aux comptes `tutorAccess: true` (`isTutor()`), fermé à tous les autres rôles
- `positioningTests/{token}` — lecture/écriture réservées `isTutor()` ; aucun accès public en direct, l'élève non authentifié qui passe le test de positionnement transite exclusivement par les Cloud Functions `onCall` (SDK Admin, contourne ces règles)

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
- Route `/positionnement/:token` (view `positioning`) → `PositioningTest.render(token)` (voir `js/views/positioning/positioningTest.js`) ; page publique, non authentifiée, hors flux `AuthGuard`
- `navigate(view, data)` — change la vue active via `history.pushState` (plus de hash routing)
- `renderMath()` — déclenche KaTeX sur `#app` ; macro `\cdotp` redirigée vers le glyphe unicode ⋅ car le caractère « · » tapé dans le contenu (`\text{M·L}`) plante KaTeX (`\cdotp` indéfini en mode texte)
- Appelle `initAdSlots()` (voir `js/components/adSlot.js`) et `trackPageView()` (voir `js/analytics.js`) après chaque rendu de vue dans le dispatcher `render()` — sauf branches `admin`/`teacher` (return anticipé, hors suivi)
- `createConfetti()` — animation confetti de succès
- `showToast(msg, type)` — notification toast
- `_checkMaintenance()` — lit `config/settings.maintenanceMode`, affiche la page maintenance si actif (invités + comptes non-admin) ; fail-open assumé si Firestore inaccessible
- `_syncModuleAccess()` — lit `config/moduleAccess.statuses` (Firestore, source de vérité) et remplace `state.moduleAccess` + le cache local `Storage`, pour que le verrouillage/maintenance décidé par un admin s'applique à tous les utilisateurs
- `_setupCommonListeners()` — bind nav globale ; recalcule à chaque appel la visibilité `nav-teacher`/`nav-homework`/`nav-signout`/`nav-login` selon `AuthGuard.isAuthenticated()`
- Impression (`printFiche`, mode batch), panneau de contact, modale "piège enseignant" et recherche globale (Ctrl+K) ont été extraits respectivement dans `js/print.js`, `js/components/contactPanel.js`, `js/components/teacherErrorModal.js` et `js/components/globalSearch.js` ; les setters d'accès admin (`setSubjectAccessMode`, `setModuleAccessMode`) sont dans `js/views/adminPanel.js`
- `filterModules(query)` / `sortModules(criterion)` / `_applyModuleFilters()` — filtre/trie les cartes de `#modules-grid` côté client ; masque aussi `#modules-ad-slot` (voir `js/views/home.js`) quand la recherche ne donne aucun résultat, pour ne jamais afficher de pub sur une grille vide (conformité AdSense)
- Mode invité : `onAuthStateChanged` sans `firebaseUser` → `AuthGuard.reset()` + `_checkMaintenance()` + `_syncModuleAccess()` + `_setupStudentApp()` (accès direct au contenu sans connexion)

## js/print.js
Impression des fiches de cours (extrait de `js/app.js`).
- `printFiche(moduleId)` — imprime la fiche de synthèse d'un module (via `#print-container` + `renderFicheCours()`, voir `js/utils/ui-helpers.js`) ; réservé enseignant (`AuthGuard.isTeacher()`)
- `toggleBatchPrintMode()` / `togglePrintSelection()` / `selectAllForPrint()` / `deselectAllForPrint()` / `printSelectedFiches()` — sélection multi-modules sur la grille puis impression groupée via `renderFichesBatch()` ; `toggleBatchPrintMode()` et `printSelectedFiches()` réservées enseignant

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

## js/components/renderCours.js
Rendu HTML de l'onglet Cours d'un module (écran, pas impression).
- `renderCours(mod)` — intro, définitions, méthode, exemple, formules, illustration, piège, récap, application ; bouton "Imprimer la fiche" visible seulement si `AuthGuard.isTeacher()`
- `renderCoursDiagram(diagram, subjectId)` — rend une illustration au format legacy (string HTML) ou riche (objet `{svg, title, kicker, description, notes, reading, caption, theme}`) ; réutilisée par `renderFicheCours()` (`js/utils/ui-helpers.js`) pour l'impression

## js/components/moduleTabs.js
Rendu des onglets d'un module (cours / quiz / exercice / problème / évaluation / flashcards).
- `renderTabContent()` — sélectionne et rend l'onglet actif ; passe le HTML par `convertMarkdownTables()` avant `innerHTML` pour transformer les tableaux markdown éventuels en `<table>`

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

## js/components/contactPanel.js
Panneau de contact flottant (extrait de `js/app.js`), envoie vers Formspree.
- `toggleContactPanel()` / `closeContactPanel()` — ouvre/ferme le panneau
- `handleContactSubmit(e)` — soumet le formulaire (catégorie erreur/remarque/question) via `fetch` vers Formspree
- `_restoreContactForm()` — réinjecte le formulaire vierge après un envoi réussi

## js/components/globalSearch.js
Recherche globale de modules (Ctrl/Cmd+K), extrait de `js/app.js`.
- `openGlobalSearchPanel()` / `closeGlobalSearchPanel()` / `toggleGlobalSearchPanel()` — ouvre/ferme le panneau
- `_findGlobalModules(query)` — cherche dans `window.MODULES` (titre/sous-titre/mots-clés), scoring léger, limite à 8 résultats
- `openModuleFromGlobalSearch(moduleId)` — ferme le panneau et navigue vers le module

## js/components/teacherErrorModal.js
Modale enseignant "proposer un piège fréquent" sur un module, extrait de `js/app.js`.
- `openTeacherErrorModal(moduleId)` / `closeTeacherErrorModal()` — ouvre/ferme la modale
- `submitTeacherError(moduleId)` — envoie la suggestion via `fetch` vers Formspree

## js/views/home.js
Vues globales : accueil, liste matières, niveaux, modules, détail module.
- `renderContinueSection()` — section "Reprendre ton parcours"
- `renderHome()` — page d'accueil
- `renderSubjects()` — liste des matières
- `renderLevels()` — niveaux d'une matière
- `renderModules()` — grille des modules d'un niveau
- `renderModule(moduleId)` — page détail d'un module
- `renderSubjects()` — inclut un `renderAdSlot(...)` (voir `js/components/adSlot.js`) en bas de grille, seulement si `window.MODULES` contient au moins un module (jamais sur une grille sans contenu)
- `renderModulesList()` — inclut un `renderAdSlot(...)` dans un wrapper `#modules-ad-slot`, seulement si `modules.length > 0` ; ce wrapper est masqué dynamiquement par `_applyModuleFilters()` (`js/app.js`) quand une recherche ne donne aucun résultat
- `renderModulesList()` — le bouton "Imprimer les fiches 🖨️" (`toggleBatchPrintMode()`) n'est rendu que si `AuthGuard.isTeacher()`
- `renderHome()` — page d'accueil, volontairement sans bloc pub (page à contenu essentiellement promotionnel, retiré suite à un rejet AdSense "contenu à faible valeur informative") ; jamais de pub non plus dans les onglets d'apprentissage actif (`module`)
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
- `AuthGuard.isTutor()` — accesseur : `tutorAccess === true` sur le profil chargé (tutorat privé, indépendant du champ `role`)

## js/views/authView.js
Pages Inscription / Connexion (overlay plein `#app`, header/nav restent visibles). Email + mot de passe uniquement — l'auth par téléphone (SMS) a été retirée (nécessitait l'offre payante Firebase Blaze, refusée par le projet).
- `AuthView.render(fromGuest)` — affiche l'écran de connexion ; si `fromGuest`, ajoute un bouton `.auth-close` (✕)
- `AuthView._closeToGuest()` — ferme l'écran de connexion et revient à l'accueil en mode invité (`navigate('home')`)
- `AuthView.renderPending()` — écran d'attente de validation enseignant

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
- `setSubjectAccessMode(subjectId, mode)` / `setModuleAccessMode(moduleId, mode)` — fonctions globales (hors objet `AdminPanel`, extraites de `js/app.js`) : verrouillage/maintenance par matière ou par module, mettent à jour `Storage` puis poussent la carte complète vers `AuthService.saveModuleAccess()`

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

## js/tutoring/tutoringService.js
Firestore CRUD pour le suivi de cours particuliers (tutorat privé, réservé aux comptes `tutorAccess: true`).
- `getStudents()` / `getStudent(id)` — liste (non archivés) / détail d'un élève
- `createStudent(data)` / `updateStudent(id, patch)` / `archiveStudent(id)` — CRUD élève (soft delete via `archived`)
- `watchStudentSessions(studentId, callback)` / `createSession(studentId, data)` — écoute temps réel de l'historique et création de séance (`status: 'draft'`)
- `rateSession(sessionId, rating, remarks)` — note une séance 1-10 + remarques, passe en `status: 'rated'`
- `requestGeneration(sessionId, opts)` — déclenche la génération IA (Cloud Function)
- `createPositioningTest(opts)` — crée un doc `positioningTests` (l'id du doc sert de token de lien public), lié à `opts.studentId` ou `null` pour un nouvel élève pas encore fiché
- `getPendingPositioningTests()` — tests non rattachés (`studentId: null`), non `reviewed`, avec au moins une matière `completed` (pour le bloc "à traiter" de `tutoringHome.js`)
- `watchStudentPositioningTests(studentId, callback)` — écoute temps réel des tests de positionnement rattachés à un élève
- `markPositioningTestReviewed(token)` / `attachPositioningTestToNewStudent(token, studentData)` / `attachPositioningTestToStudent(token, studentId)` — marque un test traité, ou le rattache en créant une nouvelle fiche élève / à un élève existant

## js/views/tutoring/tutoringHome.js
Liste des élèves de cours particuliers (route `/tutorat`), réservée aux comptes tutor.
- `TutoringHome.render()` — charge élèves + tests de positionnement en attente, puis affiche la grille
- `TutoringHome._renderList(filter)` — recherche client-side par nom
- `TutoringHome._showAddForm()` / `_submitAddForm(e)` — formulaire de création d'élève
- `TutoringHome._sendPositioningLink()` — crée un lien de test (`createPositioningTest`) et l'affiche via `window.prompt` pour copie/envoi manuel
- `TutoringHome._showAttachForm(token)` / `_submitAttachForm(e, token)` — bloc "Tests de positionnement à traiter" : crée la fiche élève à partir des infos saisies pendant le test, puis rattache le test
- `TutoringHome._showAttachToExistingForm(token)` / `_submitAttachToExisting(e, token)` — rattache un test en attente à un élève déjà fiché

## js/views/tutoring/tutoringStudent.js
Fiche élève (route `/tutorat/:studentId`) : notes générales, historique des séances (temps réel), notation, génération IA, tests de positionnement.
- `TutoringStudent.render(studentId)` — charge l'élève puis s'abonne aux séances (`watchStudentSessions`) et aux tests de positionnement (`watchStudentPositioningTests`)
- `TutoringStudent._saveNotes()` / `_archive()` — édition notes générales / soft delete élève
- `TutoringStudent._showSessionForm()` / `_submitSessionForm(e, generate)` — création d'une séance (`status: 'draft'`), option "Générer un cours" immédiat
- `TutoringStudent._showRatingForm(sessionId)` / `_submitRating(e, sessionId)` — notation d'une séance (1-10 + remarques)
- `TutoringStudent._renderGenerationBadge(sess)` — badge d'état de génération (generating/generated/failed)
- `TutoringStudent._requestGeneration(sessionId, contentType, figuresCount)` — relance la génération sur une séance existante
- `TutoringStudent._sendPositioningLink()` — crée un lien de test de positionnement pré-rattaché à cet élève (`createPositioningTest`), affiché via `window.prompt`
- `TutoringStudent._renderPositioningReports()` — affiche, par test complété, le niveau estimé par thème + une recommandation (`positioningBuildRecommendation`, voir `js/positioning/positioningReport.js`) comparée au niveau déclaré de l'élève

## js/positioning/positioningClient.js
Wrapper d'appel aux 3 Cloud Functions publiques du test de positionnement (utilisé côté page de test non authentifiée ET côté `js/views/tutoring/`).
- `PositioningClient.getLinkInfo(token)` — infos du lien (nom élève déjà connu ? matières déjà complétées ?)
- `PositioningClient.getQuestionBank(subject)` — récupère la banque de questions QCM d'une matière (`maths`/`physique`)
- `PositioningClient.submitResult(token, subject, payload)` — soumet nom/niveau déclarés + réponses pour correction serveur

## js/positioning/positioningReport.js
Logique pure de comparaison niveau déclaré / niveaux estimés par thème (consommée par `tutoringStudent.js`).
- `positioningNormalizeLevel(raw)` — convertit un libellé de classe (ex: `"3e"`, `"Tle"`) en palier numérique 1-9
- `positioningBuildRecommendation(declaredLevel, themeResults)` — texte de recommandation ("lacunes probables sur…") si un thème est ≥2 paliers en dessous du niveau déclaré, sinon message neutre

## js/views/positioning/positioningTest.js
Page publique (route `/positionnement/:token`), non authentifiée : passage du test par l'élève.
- `PositioningTest.render(token)` — charge les infos du lien ; formulaire prénom/classe si élève inconnu, sinon choix de matière direct
- `PositioningTest._chooseSubject(subject)` — charge la banque de questions (`PositioningClient.getQuestionBank`) et démarre le test
- `PositioningTest._renderQuestion()` / `_answerQuestion(selectedOption)` — affiche une question (options mélangées à l'affichage, l'index original est soumis) ; rejoue localement l'algorithme "escalier" (mêmes constantes que `positioningStaircase.js`) pour choisir le palier de la question suivante, palier remis à 5 à chaque nouveau thème
- `PositioningTest._finishSubject()` — soumet les réponses via `PositioningClient.submitResult` (la notation finale/autoritaire est recalculée côté serveur) puis affiche le remerciement
- `PositioningTest._renderThankYou()` — remerciement + option d'enchaîner sur l'autre matière si elle n'a pas déjà été testée

## functions/ (Cloud Functions — générateur de cours IA, tutorat Phase 2 + test de positionnement)
- `functions/index.js` — trigger `generateCourse` (`onDocumentWritten` sur `tutoringSessions`, filtré sur `generationStatus === 'generating'`) ; `onCall` publics `getPositioningLinkInfo`, `getPositioningQuestionBank`, `submitPositioningResult` (test de positionnement, accessibles sans authentification, délèguent à `functions/src/positioning.js`)
- `functions/src/generateCourse.js` — orchestrateur : verrou anti-double-déclenchement, rédaction, relecture, compilation (retry jusqu'à 3x), livraison Storage + email
- `functions/src/anthropicClient.js` — appels Claude Opus 4.8 (code execution + web search), gestion `pause_turn` (jusqu'à 5 continuations)
- `functions/src/promptBuilder.js` — construction des prompts rédaction/relecture/fix-compile
- `functions/src/latexCompiler.js` — compilation via Tectonic (binaire téléchargé au `postinstall`, Linux uniquement)
- `functions/src/mailer.js` — écriture dans la collection `mail` (extension Firebase "Trigger Email")
- `functions/src/lock.js`, `errors.js`, `storagePaths.js` — utilitaires purs (verrou 10 min, formatage d'erreur, chemins Storage)
- `functions/src/positioning.js` — logique métier du test de positionnement
  - `handleGetLinkInfo(testRef)` — lit le doc `positioningTests/{token}`, retourne si le nom élève est connu et quelles matières sont déjà `completed`
  - `handleSubmitResult(testRef, params, deps)` — corrige les réponses via la banque (`deps.getBank`), calcule le niveau par thème (`runStaircase`/`palierToLabel`), écrit `results.{subject}` (refuse si la matière est déjà complétée sur ce lien)
- `functions/src/positioningStaircase.js` — algorithme adaptatif "escalier" utilisé pour noter chaque thème
  - `runStaircase(correctFlags)` — part du palier `START_PALIER = 5` (sur 9) et applique 6 pas décroissants (`STAIRCASE_STEPS = [4,2,1,1,1,1]`, +/- selon réponse correcte), clampé entre 1 et 9
  - `palierToLabel(palier)` — convertit le palier numérique en libellé de classe (`LEVEL_LABELS`: 6e → BTS2)
- `functions/src/positioningBank/validate.js` — validateur de schéma de la banque, appelé au chargement (fail-fast)
  - `validateQuestion(q, context)` — vérifie id/question/4 options/`correctIndex` 0-3
  - `validateTheme(theme)` — vérifie que chaque palier 1-9 a 2 ou 3 questions, ids uniques dans le thème
  - `validateBank(bank, expectedThemeIds)` — valide tous les thèmes attendus d'une banque
- `functions/src/positioningBank/maths/*.js` *(5 fichiers thème)* et `functions/src/positioningBank/physique/*.js` *(5 fichiers thème)* — banque de questions QCM du test de positionnement, un fichier par thème, format `{id, label, levels: {1..9: [questions]}}` ; Maths : `numerique-calcul`, `algebre-equations`, `geometrie`, `fonctions`, `statistiques-probabilites` ; Physique-Chimie : `mecanique`, `electricite`, `energie-thermique`, `matiere-chimie`, `ondes-optique`
- `functions/src/positioningBank/maths/index.js` / `functions/src/positioningBank/physique/index.js` — assemblent les 5 thèmes de la matière en `{themes: {...}}`
- `functions/src/positioningBank/index.js` — `getBank(subject)` — valide (`validateBank`) les deux banques au chargement du module, puis expose `maths`/`physique` assemblées

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
- `convertMarkdownTables(html)` — convertit les tableaux markdown (`| a | b |` + ligne `|---|---|`) présents dans le contenu (`def`, `steps`, `context`...) en vrais `<table>` HTML ; appelé sur le HTML assemblé dans `moduleTabs.js` et `renderFicheCours()`, pas dans `js/data/`
- `renderLoading()` — squelette de chargement
- `renderErreurConseil(piege)` — bloc conseil sur l'erreur classique
- `renderFicheCours(mod)` — fiche de synthèse imprimable A4 d'un module (intro, définitions, méthode, exemple, formules, illustration, piège, récap) ; consommée par `printFiche()` dans `js/app.js` ; l'illustration utilise `renderCoursDiagram()` (voir `js/components/renderCours.js`), qui gère le format legacy (string) et le format riche (objet `{svg, notes...}`)
- `renderFichesBatch(modules)` — concatène plusieurs `renderFicheCours()` pour l'impression groupée
- `_printLevelLabel(mod)` — libellé "Matière · Niveau — Classe" affiché en en-tête de fiche
