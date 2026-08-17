# CODEBASE_MAP — Spark Learning

SPA Vanilla JS sans bundler. Chargement des scripts via `index.html` (ordre critique). État centralisé dans `state.js`.

---

## index.html
Point d'entrée unique. Déclare l'ordre de chargement de tous les scripts.
- Chargement : `<script src="...">` dans l'ordre exact requis (Firebase → authService → views (authView, teacherDashboard, adminPanel) → sync → data → engines → components → app)
- `#nav-login` — bouton nav (masqué par défaut), affiché en mode invité pour ouvrir `AuthView`
- `#nav-shop` — lien nav (pas un `<button>`) vers la boutique Shopify (`f1niwf-wr.myshopify.com`), `target="_blank"`, à côté des autres boutons de nav
- `<head>` — meta SEO statiques par défaut (description, canonical, robots, OG, Twitter Card, `manifest.json`) ; réécrites dynamiquement par vue via `updatePageMeta()` (`js/app.js`)

## robots.txt
Autorise l'indexation complète sauf les vues privées/éphémères (teacher, homework, admin, tutorat, positionnement, playlist) ; référence `sitemap.xml`.

## sitemap.xml
Généré, jamais édité à la main — voir `scripts/generate-sitemap.js`.

## manifest.json
Manifeste PWA minimal (nom, icône = logo existant, `theme_color` = `--primary`). Pas d'icônes PNG dédiées (aucun outil de manipulation d'image dans l'environnement agent).

## scripts/generate-sitemap.js
Génère `sitemap.xml` à la racine à partir des manifests réels de `js/loader.js` (`DATA_FILES` + `MODULE_INDEX`), sans dupliquer la liste des modules à la main.
- `extractConst(src, name)` — extrait un objet littéral `const NAME = {...}` d'un fichier source par comptage d'accolades (pas de dépendance `acorn`)
- Usage : `node scripts/generate-sitemap.js` — à relancer après tout ajout de module (voir `CLAUDE.md` section 3)

## scripts/prerender.js
Pré-rend en HTML statique chaque URL de `sitemap.xml` via Puppeteer headless, pour que Google indexe le vrai contenu sans exécuter le JS de l'app. Testé unitairement (`scripts/test-prerender.js`) sur les fonctions pures ; `main()` (orchestration Puppeteer) vérifié manuellement contre un serveur local. Design et garde-fous : `docs/superpowers/specs/2026-08-09-prerendu-seo-design.md`.
- `parseArgs(argv)` — lève sur un argument inconnu (une faute de frappe comme `--baseurl` ferait sinon crawler la production par défaut)
- `parseSitemapXml(xml)` — extrait les chemins de route des balises `<loc>`, indépendamment du host (utile pour tester contre un serveur local)
- `routeClass(routePath)` — classe de route déduite du 1er segment (`/`, `/subjects`, `/confidentialite`, `/levels/*`, `/modules/*`, `/module/*`) pour le bilan par classe et la règle stricte
- `renderRoute(page, url, routePath)` — attend le flag `window.__sparkRouteReady` (mis par `_markRouteReady()` dans `js/app.js` une fois `render()`+`updatePageMeta()` exécutés pour la route courante **avec ses données**) **plus** `#app.innerText.length > 50`, au lieu d'un simple seuil de longueur : un seuil est satisfait par n'importe quel contenu déjà présent dans le HTML servi (observé en local contre `scripts/tmp-static-server.js`, qui servait les restes d'un run précédent) et ne prouve donc pas que *cette* route ait été rendue. Un attribut DOM ne conviendrait pas non plus : il serait sérialisé dans le HTML capturé et referait remonter le même faux-positif au run suivant. Si le signal n'arrive pas avant `CONTENT_WAIT_TIMEOUT_MS` : échec dur (throw) sur les routes à tolérance zéro, simple `console.warn` puis capture sur les routes `/module/*` — sans quoi une home au catalogue vide serait publiée telle quelle dans le `index.html` racine, qui sert de repli à tout le site. Assainit ensuite le DOM avant sérialisation : retire les `<script src="js/data/…">` injectés à l'exécution dans `<head>` par `_loadScript()` (sinon ils s'exécuteraient avant `js/data/helpers.js`, script de `<body>` qui crée `window.MODULES`, → `TypeError` sur chaque page pré-rendue) et le chrome d'UI éphémère (`#consent-banner`, `.toast`, `.confetti-container`, `.celebration-*`)
- `isZeroToleranceClass(cls)` — vrai pour toute classe hors `/module/*` (les 12 routes à forte valeur) ; sert à la fois au throw de `renderRoute()` et à la règle stricte de `main()`
- `isValidRender(result, routePath)` — rejette un rendu si `appTextLength < MIN_APP_TEXT_LENGTH` ou si le `<title>` reste générique ("Spark Learning", doublon de `base` dans `updatePageMeta()`) sur une route non-home
- `outputFileForRoute(routePath)` — la route `/` écrit dans `index.html` à la racine (fichier **suivi par git** : `main()` affiche un avertissement bruyant avec la commande de restauration) ; les autres routes écrivent dans `chemin/index.html` (dossiers gitignorés, régénérés à chaque run)
- `main()` — deux règles d'échec cumulatives : ratio global > `MAX_FAILURE_RATIO` (20%), **et** aucune tolérance sur les routes hors `/module/*` (peu nombreuses, à forte valeur — `/` sert en plus de repli via le rewrite `**`)
- Usage : `node scripts/prerender.js [--base-url URL] [--sitemap-file PATH]`

## css/styles.css
Système de design complet : variables CSS (`--primary`, `--secondary`, `--accent`, `--error`, `--space-*`), thèmes, composants UI.
- `.ap-*` classes pour AdminPanel (conteneur, header, tabs, search, cartes utilisateurs, boutons actions)
- `.auth-close` — bouton ✕ sur `.auth-card` pour fermer l'écran de connexion et revenir au mode invité
- `.ad-slot-placeholder` — cadre pointillé pour les emplacements publicitaires (placeholder, pas de pub réelle encore)
- `.hub-intro-text` — court paragraphe éditorial (`--text-muted`) sous le titre des pages hub (`/subjects`, `/levels/:subject`), ajouté pour la conformité contenu AdSense
- `.content-table-wrap` / `.content-table` — tableau généré par `convertMarkdownTables()` (js/utils/ui-helpers.js) à partir d'un tableau markdown dans le contenu d'un module
- `@media print` (~L3440+) — mise en page A4 des fiches (`.print-fiche`, `.print-fiche-header`, etc.) ; `body.printing` bascule l'affichage de `#app` vers `#print-container` ; `#print-container` fige les variables CSS couleur (`--primary`, `--text`, `--bg-card`...) sur le thème clair, pour que les illustrations riches (`renderCoursDiagram`) restent lisibles en PDF même si le site est en thème sombre à l'impression
- `.td-weakpoint-*` / `.td-weakpoints-section` — bloc "Points faibles de la classe" dans TeacherDashboard (bordure `--error` à gauche pour signaler visuellement)
- `.td-students-toolbar` — sélecteur de tri (nom/score/inactivité) au-dessus de la liste d'élèves d'une classe (TeacherDashboard)
- `.stats-levels-details` / `.stats-levels-summary` — replie le détail de progression par niveau (accueil, `renderStatsSection()`) dans un `<details>` pour laisser les widgets d'action en haut de page

## ads.txt
Fichier de vérification standard IAB pour Google AdSense (`google.com, pub-5320273649803132, DIRECT, ...`).

## images/modules/{niveau}/{slug}.jpg
Nouveau dossier d'assets (2026-07-21) : photos réelles utilisées en complément d'un schéma SVG dans `cours.diagram` (jamais en remplacement), référencées via `<img src="images/modules/...">` dans le champ `diagram.svg`/`html`. Uniquement des images sous licence libre (domaine public, CC) car le site est public — contrairement aux fiches BTS FED internes, aucune tolérance "tous droits réservés" ici. Premier exemple : `si-bts/verin-hydraulique-coupe.jpg` (domaine public, Hotdogcartman/Hyco, Wikimedia Commons).

## firestore.rules
Règles de sécurité Firestore.
- `config/{doc}` — lecture publique (invités inclus, pour lire `maintenanceMode`/annonce), écriture réservée admin
- `classes/{classCode}` — lecture restreinte à l'enseignant propriétaire/admin/élèves inscrits (plus de listing global) ; un élève peut s'auto-ajouter/retirer du champ `students` uniquement ; **création** exigeant `teacherId == request.auth.uid` (sauf admin) — sinon un compte enseignant pouvait, via un appel Firestore direct, créer une classe attribuée à un autre `teacherId`
- `progress/{uid}` — lecture enseignant conditionnée au tableau dénormalisé `teacherIds` (élève dans une de ses classes), au lieu d'un accès enseignant global
- `assignments/{id}` — lecture restreinte enseignant propriétaire/admin/élèves de la classe concernée (plus de listing global) ; **création** exigeant `teacherId == request.auth.uid` ET `isOwningTeacherOfClass(classCode)` (sauf admin) — sinon un enseignant pouvait injecter un devoir sur le `classCode` d'un collègue, visible par ses élèves à lui
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
- `state.evalBuilderMode` / `state.selectedEvalQuestions` — mode "composer une évaluation" (grille de modules, enseignant) et sélection courante `{ moduleId: [indexQuestion,...] }`, gérés par `js/print.js`
- `defaultQuizState()` — inclut `correctStreak` (compteur de bonnes réponses consécutives dans le quiz courant, remis à 0 sur erreur, déclenche `celebrate('streak')` à 5 dans `js/engines/quizEngine.js`)
- `defaultExerciceState()` — inclut `startedAt: Date.now()` (horodatage de début de tentative, réinitialisé à chaque nouvel exercice) utilisé pour mesurer `durationMs` dans `Storage.trackAttempt()`

## js/app.js
Routeur SPA (pushState), init, KaTeX, confetti.
- `buildPath(view, data)` — construit un chemin d'URL réel `/view/data` (pushState)
- `parsePath(pathname)` / `parseLegacyHash(hash)` — parsent respectivement une URL réelle et un ancien lien `#hash` (rétrocompat), partagent `_parseRouteParts(parts)`
- Route `/positionnement/:token` (view `positioning`) → `PositioningTest.render(token)` (voir `js/views/positioning/positioningTest.js`) ; page publique, non authentifiée, hors flux `AuthGuard`
- `navigate(view, data)` — change la vue active via `history.pushState` (plus de hash routing) ; branche à chargement asynchrone (`module`/`modules`/`flashcards`/`chrono`/`companion`/`teacher`/`homework`/`admin`) : appelle `updatePageMeta()` une fois avant le chargement (titre générique) puis **de nouveau après** `render()` une fois `loadPromise` résolu — sans ce second appel (bug corrigé le 2026-08-09), le `<title>`/meta restent génériques sur toute première navigation directe vers une page module malgré un contenu réel déjà affiché ; met aussi `window.__sparkRouteReady` à `false` en entrée puis appelle `_markRouteReady(view)` juste après `render()`+`updatePageMeta()` dans les deux branches (guardé par `_navSequence !== seq` côté async) — signal de disponibilité consommé par `scripts/prerender.js` (`renderRoute()`), voir cette entrée
- `_markRouteReady(view)` / `DATA_DEPENDENT_VIEWS` (`home`/`subjects`/`levels`) / `window.__sparkCatalogReady` — ces trois vues lisent `window.MODULES` **synchronement** dans leur `render()` et n'ont pas de `loadPromise` dans `navigate()` : leur premier rendu est complet mais vide (0 carte matière, "0 modules"). Le signal n'est donc levé pour elles qu'une fois `ensureAllData()` résolu et le re-render fait dans `_setupStudentApp()` — sans ce verrou (bug corrigé le 2026-08-09), le pré-rendu capturait `/`, `/subjects` et `/levels/*` avec un catalogue vide, et `/` sert de page de repli pour tout le site via le rewrite `**`
- `_setupStudentApp()` — restaure la route depuis l'URL puis précharge tout le catalogue ; `.then()` pose `window.__sparkCatalogReady = true`, re-rend les vues catalogue et lève le signal retenu. Le `.catch()` laisse volontairement le signal à `false` (un pré-rendu de la home sans catalogue doit échouer bruyamment)
- `updatePageMeta()` — remplace l'ancien `updatePageTitle()` : en plus du `document.title`, met à jour dynamiquement description, `<link rel="canonical">`, OG/Twitter Card et `meta name="robots"` (`noindex` sur les vues privées listées dans `NOINDEX_VIEWS`) ; `_updateJsonLd(mod)` injecte/retire un bloc `schema.org/LearningResource` sur les pages module
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
Impression des fiches de cours et des évaluations (extrait de `js/app.js`).
- `printFiche(moduleId)` — imprime la fiche de synthèse d'un module (via `#print-container` + `renderFicheCours()`, voir `js/utils/ui-helpers.js`) ; réservé enseignant (`AuthGuard.isTeacher()`)
- `toggleBatchPrintMode()` / `togglePrintSelection()` / `selectAllForPrint()` / `deselectAllForPrint()` / `printSelectedFiches()` — sélection multi-modules sur la grille puis impression groupée via `renderFichesBatch()` ; `toggleBatchPrintMode()` et `printSelectedFiches()` réservées enseignant ; les checkboxes injectées portent un `aria-label` avec le titre du module
- `toggleEvalBuilderMode()` — active/désactive le mode "composer une évaluation" sur `#modules-grid` (réservé enseignant) : injecte une case à cocher (module entier, toutes ses `evaluation.questions` par défaut, `aria-label` avec le titre du module) + un lien "✎ Ajuster" par carte de module possédant une banque d'évaluation non vide
- `toggleBatchPrintMode()` et `toggleEvalBuilderMode()` sont mutuellement exclusifs : activer l'un désactive l'autre s'il était en cours (les deux partagent `#modules-grid` et une toolbar flottante) ; `navigate()` (`js/app.js`) nettoie aussi les deux modes (état + toolbar DOM) en quittant la vue `modules`
- `toggleEvalModuleSelection(moduleId)` / `toggleEvalQuestion(moduleId, index)` / `toggleEvalQuestionPicker(moduleId, card)` — gèrent `state.selectedEvalQuestions` (sélection fine question par question via le panneau "Ajuster")
- `showEvalToolbar()` / `hideEvalToolbar()` / `updateEvalCount()` — barre flottante (questions/points sélectionnés) et boutons d'impression
- `_collectSelectedEvalQuestions()` — aplatit `state.selectedEvalQuestions` en liste `{moduleTitle, question}` triée par index
- `printEvaluationSubject()` / `printEvaluationCorrection()` — impriment respectivement la copie élève (vierge) et le corrigé (réponses + barème) via `renderEvaluationPrintSheet()` (voir `js/utils/ui-helpers.js`) ; réservées enseignant, composition éphémère (rien n'est sauvegardé côté serveur)

## js/loader.js
Lazy loading des fichiers de données par niveau/matière.
- `DATA_FILES` — map `'matière-niveau' → [chemins fichiers]`
- `ensureLevelData(subject, level)` — charge dynamiquement les scripts d'un niveau

## js/storage.js
Centralise toute la persistance localStorage.
- `Storage.getProgress()` / `saveProgress(moduleId, type)` — lecture/écriture progression
- `Storage.getTracking(moduleId)` / `trackAttempt(moduleId, section, isCorrect, durationMs)` / `trackQuizScore(...)` / `trackEvaluationScore(...)` — tentatives, temps cumulé, meilleur score par module/section (clé `sparkTracking`) ; consommé par `detectLacunes()` (`js/engines/companionEngine.js`) pour le score de lacune pondéré
- `Storage.trackHintUsed(moduleId, section)` / `Storage.trackSolutionRevealed(moduleId, section)` — incrémentent `hintCount`/`solutionCount` sur l'entrée de tracking existante (créée si absente) ; appelés depuis `js/engines/exerciceEngine.js` (`showHint`/`showSolution`), alimentent la pondération 15%/10% du score de lacune
- `Storage.getStreak()` / `updateStreak()` — suivi des séries journalières (streak affichée dès 1 jour, voir `js/views/home.js:renderStreakBadge()`)
- `Storage.getExerciceStreak()` / `updateExerciceStreak(firstTry)` — série de réussites du premier coup en exercice, toast tous les 3
- `Storage.getFlashcardState(moduleId)` / `saveFlashcardKnown(moduleId, knownIndices)` — état des flashcards
- `Storage.getRecent()` / `trackRecent(moduleId)` — modules récemment visités
- `Storage.getModuleStatuses()` / `setModuleStatus(id, patch)` / `resetModuleStatus(id)` — cache local verrouillage/maintenance par module
- `Storage.setAllModuleStatuses(all)` — remplace tout le cache local par la carte reçue de Firestore (`config/moduleAccess`)
- `Storage.getConsent(category)` / `setConsent(category, granted)` — consentement RGPD par catégorie (expire après 6 mois)

---

## js/data/helpers.js
Initialise `window.MODULES = []`, utilitaires aléatoires.
- `rand(min, max)` — entier aléatoire
- `randFloat(min, max, d)` — flottant aléatoire
- `pick(arr)` — élément aléatoire dans un tableau
- `fr(value, decimals)` — formate un nombre en notation décimale française pour LaTeX (`fr(1.5)` → `"1{,}5"`) ; à utiliser dans tout `exercice.generate()` au lieu de `.replace('.', '{,}')` à la main

## scripts/check-decimal-notation.js
Détecte les régressions du bug de notation décimale française dans `js/data/` (accolade `{,` manquante, `.toFixed(n)` interpolé sans `fr()`).
- Usage : `node scripts/check-decimal-notation.js` — à lancer après toute modification d'un `exercice.generate()` (voir `CLAUDE.md` section 2)

## scripts/manuel/schema.js
Valide la forme d'un module de `js/data/` avant conversion vers LaTeX.
- `validerModule(mod)` — contrôle les champs obligatoires, renvoie erreurs et avertissements
- `normaliserExercice(ex)` — `solution` toujours en tableau, données ramenées dans le realm hôte

## scripts/manuel/extract.js
Charge un module hors navigateur (contexte `vm`) avec un tirage d'exercices reproductible.
- `chargerModule(chemin, {graine, tirages})` — `Math.random` ensemencé, donc même graine = même livre
- `RACINE` — chemin absolu du dépôt

## scripts/manuel/unicode.js
Traduit en commandes LaTeX les 245 caractères hors couverture pdfTeX/T1 du corpus, et signale les inconnus.
- `enMath(texte, ou)` — commandes math via `\ensuremath` (survit aux `\text{}` imbriqués)
- `enTexte(texte, ou, emettre)` — symboles rencontrés en mode texte
- `symbole(caractere)` — accès brut à la table, pour les étiquettes qui composent leur propre mode
- `nonMappes` — registre des caractères non traduits, jamais avalés silencieusement
- Trois familles se composent faux **sans provoquer d'erreur** : les dix symboles Latin-1
  (`° × ÷ ² ³ ¹ ± ¬ µ ·`, faux en mode math), les lettres accentuées (`ACCENTUEES`, enveloppées
  dans `\text{}`), et les commandes de la table `TEXTE` (`• € ℃ ①`), qui doivent traverser
  `envelopperTexte` sous peine d'être ré-échappées et imprimées littéralement.

## scripts/manuel/latex.js
Convertit le HTML et le KaTeX des modules en LaTeX. L'ordre des étapes est critique (voir commentaire en tête).
- `versLatex(valeur)` — conversion complète d'une chaîne de contenu
- `nombreFr(valeur)` — virgule française pour les champs numériques bruts (`answer`)
- `definirOrigine(id)` — localise un caractère inconnu dans les rapports

## scripts/manuel/verifier-corpus.js
Passe le socle sur les 203 modules réels : filet anti-régression de la conversion.
- `listerModules()` — chemins de tous les modules de `js/data/`
- `verifierCorpus({graine, tirages})` — rapport { total, valides, echecs, symbolesInconnus }
- Usage : `node scripts/manuel/verifier-corpus.js` ; tests : `node --test scripts/manuel/tests/*.test.js`

## scripts/manuel/figures.js
Trie et prépare les schémas des modules en TikZ inséré en ligne, avec provenance obligatoire.
- `preparerFigures(modules)` — synchrone, sans navigateur : `{ id: { tikz, provenance, empreinte, elements } }`
- `figureUtilisable(entree)` — garde-fou : pas de provenance, pas d'insertion
- `LARGEUR_FIGURE_MM` — largeur utile du bloc de texte du livre

## scripts/manuel/svg2tikz.js
Convertit un SVG du corpus en TikZ. Aucune coordonnée n'est recalculée — seule l'ordonnée
est niée, l'axe y du SVG descendant — d'où la provenance `svg-exact` et son empreinte SHA1.
- `etiquette(source, origine)` — typographie d'un libellé : îlots math, indices, unités, réserve blanche
- `versTikz(svg, ...)` — géométrie : traits, aplats, arcs et Béziers
- Les deux moitiés sont séparées : la typographie et la géométrie changent pour des raisons différentes

## scripts/manuel/planche.js
Planche de contrôle : toutes les figures d'un ouvrage, une par page, à la taille du livre.
- `construire(cle, filtre)` — préambule identique à celui de l'ouvrage, sinon la planche ne prouve rien
- Usage : `node scripts/manuel/planche.js college-maths [module...]`, puis rastériser et REGARDER
- Raison d'être : « 0 erreur LaTeX » ne prouve pas qu'une figure est juste

## scripts/manuel/chapitre.js
Compose un module en chapitre LaTeX, édition élève ou professeur.
- `composerChapitre(mod, exercices, {professeur, figure})` — structure complète du chapitre
- `objectifs(mod)` / `prerequis(mod)` — couche professeur, déduite du contenu réel

## scripts/manuel/ouvrage.js
Maquette du livre : préambule, couverture, liminaires, fin d'ouvrage, couverture imprimeur.
- `gouttierePourPages(n)` — marge intérieure exigée selon l'épaisseur
- `largeurDosMm(n)` — largeur de dos pour la couverture séparée
- `blocTitre(config, ancreNord, ancreSud)` — plat 1 composé une fois, servi à la page de titre ET à la couverture imprimeur
- `AUTEUR` / `AUTEUR_LIGNE` — signature écrite une fois, reprise aux quatre endroits qui la portent
- `preambule/couverture/liminaires/ouverturePartie/finOuvrage/couvertureSeparee`

## scripts/manuel/build.js
Orchestration : extraction, figures, chapitres, deux passes de gouttière, garde-fous.
- `construire(cle, {professeur, graine, logo})` — produit le PDF et `etat-*.json`
- `logoDisponible()` — le logo n'entre dans la maquette que si `images/logo-spark.png` existe (PNG détouré)
- `OUVRAGES` — les sept ouvrages niveau × matière
- Usage : `node scripts/manuel/build.js college-maths [--prof]` ; `--liste` pour les clés

## scripts/manuel/progression.js
Régénère `docs/manuels/PROGRESSION.md` par scan (jamais édité à la main).
- `construireTableau()` — compare les modules de `js/data/` aux chapitres déjà intégrés

## js/data/6e/index.js
Manifest 6e — liste et ordre des modules (chargés via `<script>` dans index.html).

## js/data/6e/6e-*.js *(10 modules)*
Modules pédagogiques Maths 6e : `6e-addition-soustraction`, `6e-angles`, `6e-division`, `6e-figures-geometriques`, `6e-fractions`, `6e-multiplication`, `6e-nombres-decimaux`, `6e-perimetres-aires`, `6e-symetrie-axiale`, `6e-volumes`.

## js/data/5e/index.js
Manifest 5e.

## js/data/5e/5e-*.js + reperage-graphique.js *(14 modules)*
Modules Maths 5e : relatifs, fractions, proportionnalité, expressions littérales, probabilités, statistiques, géométrie, volumes. (`proportionnalite.js`, doublon de moindre qualité de `5e-proportionnalite.js`, supprimé le 2026-07-31 — retiré de `js/loader.js` DATA_FILES/MODULE_INDEX et de `sitemap.xml`.)

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

## js/data/physique-bts/index.js
Manifest Physique-Chimie BTS (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-bts/physique-bts-*.js *(10 modules, complet)*
Modules Physique-Chimie BTS : mécanique du point, statique/dynamique des fluides, thermodynamique, circuits en régime continu/sinusoïdal, optique géométrique, chimie des solutions (pH/tampons/titrages), cinétique chimique, électromagnétisme (champs, induction).

---

## js/engines/shared.js
Utilitaires partagés entre tous les moteurs.
- `_setEngineTimeout(fn, delay)` — setTimeout tracé pour nettoyage
- `clearEngineTimers()` — vide tous les timers actifs
- `_checkModuleComplete(moduleId)` — vérifie et notifie la complétion d'un module ; déclenche `celebrate('level-complete')` (`js/components/celebration.js`) en plus du toast quand tous les modules d'un niveau sont complétés

## js/engines/quizEngine.js
Moteur de quiz.
- `submitQuizAnswer(moduleId, questionIndex, optionIndex)` — traite une réponse quiz ; incrémente `state.quizState.correctStreak` sur bonne réponse (remis à 0 sur erreur) et déclenche `celebrate('streak')` à la 5e bonne réponse consécutive
- `nextQuizQuestion(moduleId)` — passe à la question suivante
- `resetQuiz(moduleId)` — remet à zéro le quiz

## js/engines/exerciceEngine.js
Moteur d'exercice dynamique.
- `submitExerciceAnswer(moduleId)` — valide la réponse saisie ; mesure la durée depuis `state.exerciceState.startedAt` et l'envoie à `Storage.trackAttempt(..., durationMs)`, alimente le poids "temps anormal" du score de lacune
- `getErrorFeedback(mod, attempts)` — génère un message d'erreur adapté
- `showHint(moduleId)` / `showSolution(moduleId)` — affichent indice/solution et appellent `Storage.trackHintUsed`/`Storage.trackSolutionRevealed` (voir `js/storage.js`)
- `generateNewExercice(moduleId)` — génère un nouvel exercice aléatoire, réinitialise `state.exerciceState` (dont `startedAt`)

## js/engines/problemeEngine.js
Moteur de problème multi-étapes.
- `revealSolution(moduleId, taskIndex)` — dévoile la solution d'une étape

## js/engines/evaluationEngine.js
Moteur d'évaluation (questions numériques).
- `submitEvaluationAnswer(moduleId)` — valide une réponse d'évaluation

## js/engines/companionEngine.js
Moteur Spark Companion : remédiation, rattrapage, badges, répétition espacée (granularité module).
- `detectLacunes(moduleId)` — calcule un score de lacune pondéré par section (`quiz`/`exercice`/`probleme`) à partir de `Storage.getTracking()` : taux d'erreur 45%, score faible 20%, indice utilisé 15%, solution révélée 10%, temps anormal 10% (constantes `LACUNE_SEVERITY_THRESHOLD`, `LACUNE_SLOW_ATTEMPT_MS`) ; retourne `{ section, label, severity, reasons }[]`, une section jamais tentée obtenant une sévérité maximale
- `getRemediationRecommendations(subject, level)` — modules du sujet/niveau ayant au moins une lacune, triés par sévérité décroissante ; expose `severity`, `reasons`, `weakestSection` par module, consommé par `renderCompanionHome()` (`js/components/companion.js`)
- `generateRemedialExercise(moduleId, topic)` / `validateRemedialAnswer(...)` — génère et valide un exercice de remédiation simplifié pour une session Companion
- `addBadge(badgeId, label)` — ajoute un badge (dédupliqué par id) et déclenche `celebrate('badge')` uniquement à l'ajout effectif d'un nouveau badge
- `addCompanionPoints(amount)` / `completeObjective(objectiveId)` / `initRemediationContext(moduleId)` / `trackRemediationAttempt(...)` — points, objectifs CCF, contexte de session Companion
- `scheduleReview(moduleId, isCorrect)` — réplanifie la révision espacée d'un **module entier** sur l'échelle `SRS_LADDER_DAYS = [1,3,7,16,35]` (retour à l'échelon 0 en cas d'échec, bonus de 15 points Companion si une révision en retard est réussie) ; appelée depuis `quizEngine.js`/`exerciceEngine.js`/`evaluationEngine.js` à chaque tentative validée
- `getDueReviews()` — modules dus/en retard (triés, hors modules verrouillés/introuvables), consommé par `renderSrsReviewWidget()` (`js/views/home.js`)

---

## js/consent.js
Bannière de consentement cookies (RGPD/CNIL) ; un seul consentement global couvre pub ET mesure d'audience.
- `Consent.hasAdConsent()` — lit `Storage.getConsent('ads')`, utilisé aussi bien par `adSlot.js` que par `analytics.js`
- `Consent.accept()` / `Consent.reject()` — enregistrent le choix ; `accept()` déclenche `initAdSlots()` et `trackPageView()`
- `Consent.init()` / `Consent.showBanner()` / `Consent.hideBanner()` / `Consent.openPreferences()` — cycle d'affichage de la bannière ; `init()` **retire** un `#consent-banner` déjà présent dans le HTML servi quand le choix est déjà fait (auto-réparation d'une bannière figée dans une page pré-rendue, qui donnerait sinon l'impression que le choix RGPD est ignoré à chaque chargement)

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
- `AD_SLOTS` — map `{ home, moduleTab } → data-ad-slot`, à renseigner quand les ad units seront créés dans le dashboard AdSense (emplacements `subjects`/`modules` retirés le 2026-07-30, refus AdSense "pages sans contenu d'éditeur")

## js/components/adSlot.js
Emplacement publicitaire : placeholder visuel tant qu'`ADS_ENABLED` est à `false`, sinon vrai bloc `<ins class="adsbygoogle">`.
- `renderAdSlot(placement, slotKey)` — rend le placeholder ou l'ad unit réel selon `js/adsConfig.js` ; un seul emplacement `moduleTab` en bas de contenu des onglets de module, plus l'emplacement accueil — jamais sur une page de navigation pure, jamais dans un onglet d'apprentissage en cours d'interaction
- `initAdSlots()` — pousse les nouveaux `<ins class="adsbygoogle">` injectés dans le DOM vers `adsbygoogle.push({})` ; appelée depuis `js/app.js` après chaque rendu de vue ; sans effet tant qu'`ADS_ENABLED` est à `false`

## js/components/renderCours.js
Rendu HTML de l'onglet Cours d'un module (écran, pas impression).
- `renderCours(mod)` — intro, définitions, méthode, exemple, formules, illustration(s), piège, récap, application ; bouton "Imprimer la fiche" visible seulement si `AuthGuard.isTeacher()`
- `coursDiagramList(c)` — liste normalisée des schémas d'un cours : `cours.diagram` (un seul, format historique) et/ou `cours.diagrams: []` (plusieurs) ; le titre de section bascule en "Illustrations" au pluriel dès qu'il y en a plus d'un ; utilisée aussi par `renderFicheCours()` pour l'impression
- `renderCoursDiagram(diagram, subjectId)` — rend une illustration au format legacy (string HTML) ou riche (objet `{svg, title, kicker, description, notes, reading, caption, theme}`) ; réutilisée par `renderFicheCours()` (`js/utils/ui-helpers.js`) pour l'impression

## js/components/moduleTabs.js
Rendu des onglets d'un module (cours / quiz / exercice / problème / évaluation / flashcards).
- `renderTabContent()` — sélectionne et rend l'onglet actif ; passe le HTML par `convertMarkdownTables()` avant `innerHTML` pour transformer les tableaux markdown éventuels en `<table>`

## js/components/quiz.js
Rendu HTML du quiz.
- `renderQuiz(mod)` — rendu question ou résultats selon état
- `renderQuizQuestion(mod)` — HTML d'une question ; rend `q.figure` via `renderQuestionFigure()` (`js/utils/ui-helpers.js`) entre l'énoncé et les options
- `renderQuizResults(mod)` — écran de résultats

## js/components/probleme.js
Rendu HTML d'un problème.
- `renderProbleme(mod)` — rendu des étapes et boutons révéler ; `probleme.figure` (objet `{svg, caption}`) est rendu dans un `.question-figure.probleme-figure`, l'ancien `probleme.schema` (texte/ASCII) ne sert plus que de repli si `figure` est absent

## js/components/evaluation.js
Rendu HTML de l'évaluation.
- `renderEvaluation(mod)` — rendu des questions numériques ou QCM ; les questions DOIVENT suivre le schéma `{statement, type:'numeric'|'multiple-choice', answer, tolerance, unit, points, correction, figure?}` — un ancien format `{q, answer:texte}` fait planter `renderEvaluationQuestion()` sur `q.options.map` (corrigé en août 2026 sur les 5 modules `bts-prep` concernés) ; `q.figure` est rendu sous l'énoncé et dans le bloc de correction

## js/components/companion.js
Interface Spark Companion.
- `renderCompanionHome()` — accueil companion (badges, objectifs CCF) ; section "💡 À retravailler en priorité" alimentée par `getRemediationRecommendations()` (`js/engines/companionEngine.js`) : top 3 modules par sévérité, raison concrète affichée (`rec.reasons`), CTA contextuel selon `rec.weakestSection` (Revoir le cours / Refaire le quiz / Lancer un exercice ciblé / Revoir le problème)
- `renderCompanionSession(moduleId)` — session de remédiation active ; la liste des lacunes (`ctx.lacunes`) est un array d'objets `{ section, label, severity, reasons }` (pas des tuples `[topic, count]`)

## js/components/contactPanel.js
Panneau de contact flottant (extrait de `js/app.js`), envoie vers Formspree.
- `toggleContactPanel()` / `closeContactPanel()` — ouvre/ferme le panneau
- `handleContactSubmit(e)` — soumet le formulaire (catégorie erreur/remarque/question) via `fetch` vers Formspree
- `_restoreContactForm()` — réinjecte le formulaire vierge après un envoi réussi
- Le panneau inclut un lien de pont (`.contact-panel-bridge-link` dans `index.html`) vers la page dédiée `/contact` (`js/views/contact.js`) pour les demandes pro (proposition/partenariat) ; bouton `#contact-toggle` avec icône SVG (plus de `?` texte)

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
- `renderStreakBadge()` — badge streak 🔥 factorisé (utilisé par `renderHome()`, indépendamment de `renderStatsSection()`) ; affiché dès le jour 1 ("Tu démarres ta série aujourd'hui") pour renforcer l'habitude dès la première visite, message différent à partir de 2 jours
- `renderStatsSection()` — "Mes statistiques" : total global toujours visible, détail par niveau replié dans un `<details class="stats-levels-details">` pour ne pas noyer les blocs d'action au-dessus
- `renderNextStepWidget()` — widget "Prochaine étape : …" basé sur `getRecommendations()` (`js/recommendations.js`) ancré sur le dernier module visité (`getRecentModules()[0]`) ; ne s'affiche que si aucune révision n'est due (`getDueReviews()`), pour n'exposer qu'une seule action prioritaire à la fois sur l'accueil
- `renderHome()` — page d'accueil ; empile dans l'ordre `renderStreakBadge()` → `renderSrsReviewWidget()` → `renderNextStepWidget()` → `renderContinueSection()` → `renderStatsSection()` ; dernière section = CTA "Nos cahiers de révision" vers la boutique Shopify
- `renderSubjects()` — liste des matières
- `renderLevels()` — niveaux d'une matière
- `renderModulesList()` — grille des modules d'un niveau
- `renderModuleDetail()` — page détail d'un module
- `renderSubjects()` — filtre les matières à 0 module (plus de badge "Bientôt disponible" public), affiche un court texte éditorial (`.hub-intro-text`) au-dessus de la grille ; plus d'emplacement pub sur cette page (retiré 2026-07-30)
- `renderLevels()` — affiche `subjectDef.description` en texte éditorial (`.hub-intro-text`) sous le titre
- `renderModuleDetail()` — inclut un `renderAdSlot('onglet module — bas de contenu', 'moduleTab')` après `.tab-content`, seul emplacement pub restant avec l'accueil
- `renderModulesList()` — inclut un `renderAdSlot(...)` dans un wrapper `#modules-ad-slot`, seulement si `modules.length > 0` ; ce wrapper est masqué dynamiquement par `_applyModuleFilters()` (`js/app.js`) quand une recherche ne donne aucun résultat
- `renderModulesList()` — les boutons "Imprimer les fiches 🖨️" (`toggleBatchPrintMode()`) et "Composer une évaluation 📝" (`toggleEvalBuilderMode()`, voir `js/print.js`) ne sont rendus que si `AuthGuard.isTeacher()`
- `renderHome()` — page d'accueil, volontairement sans bloc pub (page à contenu essentiellement promotionnel, retiré suite à un rejet AdSense "contenu à faible valeur informative") ; jamais de pub non plus dans les onglets d'apprentissage actif (`module`)
- `renderAssignmentWidget()` — async, injecte l'encart "Devoir en cours" pour l'élève connecté à une classe
- `renderSrsReviewWidget()` — encart "À réviser aujourd'hui" alimenté par `getDueReviews()` (`js/engines/companionEngine.js`), priorité la plus haute des widgets d'action de l'accueil

## js/views/confidentialite.js
Politique de confidentialité (RGPD, exigence Google AdSense).
- `renderConfidentialite()` — page statique : localStorage sans compte, données Firebase si compte créé, publicité AdSense non personnalisée, formulaire de contact (Formspree, bulle + page `/contact`), droits RGPD. Route `#confidentialite`, lien en footer.

## js/views/contact.js
Page de contact dédiée (question, erreur, proposition commerciale, partenariat, presse), complément pro de la bulle flottante (`js/components/contactPanel.js`).
- `renderContact()` — page statique : formulaire nom/email/catégorie (5 chips)/message. Route `#contact` (`/contact`), lien en footer.
- `handleContactPageSubmit(e)` — soumet via `fetch` vers le même endpoint Formspree que la bulle (`xnjgyrjd`), inclut `name`/`email` pour activer le reply-to natif Formspree

## js/auth/authService.js
Service d'authentification et d'autorisations Firestore.
- `signUp(email, password, role)` — crée un compte
- `signIn(email, password)` — connecte l'utilisateur
- `signOut()` — déconnecte
- `setTeacherApprovalStatus(uid, isApproved)` — approuve/refuse un enseignant
- `createClass(teacherUid, className)` — crée une classe ; code généré (préfixe nom + suffixe aléatoire) vérifié via transaction Firestore check-then-set avec retry (jusqu'à 5 tentatives) pour ne jamais écraser silencieusement une classe existante en cas de collision
- `getTeacherClasses(teacherUid)` — récupère les classes d'un enseignant
- `joinClass(uid, classCode)` — ajoute un élève à une classe (batch update users + classes) + dénormalise `progress.teacherIds`
- `removeStudentFromClass(studentUid, classCode)` — retire un élève d'une classe (batch update users + classes) + retire `progress.teacherIds`
- `backfillProgressTeacherIds()` — migration one-shot : reconstruit `progress.teacherIds` pour les élèves déjà inscrits (bouton admin) ; retourne `{ updated, failed, failedUids }` (plus un simple nombre) pour que l'admin voie les échecs individuels au lieu d'un compteur de succès trompeur
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
- `AuthView._finishRegistration(user, contactData, displayName)` — si un ou plusieurs codes de classe saisis à l'inscription élève sont invalides, `joinClass()` échoue par code mais le compte reste créé (impossible d'annuler l'inscription à ce stade) ; un `showToast` liste les codes en échec au lieu de les avaler silencieusement

## js/views/adminPanel.js
Panneau d'administration : gestion des enseignants en attente, comptes utilisateurs, modules et historique.
- `AdminPanel.render()` — point d'entrée async, affiche le panneau
- `AdminPanel._switchTab(tab)` — bascule entre onglets (pending/all/modules/logs)
- `AdminPanel._loadTab(tab)` — charge les données de l'onglet actif via `AuthService` ; onglet `modules` attend `ensureAllData()` avant de rendre (nécessaire car le chemin `role === 'admin'` de `js/app.js` appelle `AdminPanel.render()` directement, sans passer par `navigate()` qui charge normalement toutes les données)
- `AdminPanel._renderPending(pending)` — rendu liste enseignants en attente avec boutons Approuver/Refuser
- `AdminPanel._renderAll(users, orphans)` — rendu tous les comptes avec filtres de rôle (`_roleFilter`), barre de recherche et classes orphelines ; alimente `_allUsersCache`/`_orphanClassesCache`
- `AdminPanel._applyRoleFilter(users)` / `_setRoleFilter(role)` — filtre client-side par rôle (Tous/Élèves/Enseignants/Admins), combiné avec la recherche texte dans `_filterUsers`
- `AdminPanel._goToUsers(role)` — appelée par les cartes KPI du dashboard (élèves/enseignants) : bascule sur l'onglet "Tous les comptes" pré-filtré par rôle
- `AdminPanel._renderModulesTab()` — onglet "Modules" : verrouillage/maintenance par matière (`setSubjectAccessMode`) ou par module (`setModuleAccessMode`) ; réintègre l'UI qui vivait auparavant dans la page morte `renderAdminPage()` (`js/views/home.js`, supprimée) — sans cet onglet, il n'existait plus aucun moyen dans l'interface de verrouiller un module
- `AdminPanel._renderLogs(logs)` / `_renderLogsList()` — onglet Historique avec filtres par type d'action (`_logActionFilter`) et par admin (`_logAdminFilter`), calculés dynamiquement à partir des logs chargés (`_logsCache`)
- `AdminPanel._approve(uid)` / `_reject(uid)` — approuve/refuse un enseignant
- `AdminPanel._setStatus(uid, status)` — modifie le statut d'un utilisateur
- `AdminPanel._runBackfillTeacherIds()` — lance la migration `progress.teacherIds` (à exécuter une fois après déploiement des règles) ; affiche distinctement le nombre d'échecs individuels (`result.failed`) plutôt qu'un simple compteur de succès, pour ne pas laisser croire à une migration complète
- `AdminPanel._archiveClass(classId)` — recherche la classe dans `_orphanClassesCache` pour afficher son nom et son nombre d'élèves dans la confirmation avant d'archiver (au lieu d'un message générique)
- `setSubjectAccessMode(subjectId, mode)` / `setModuleAccessMode(moduleId, mode)` — fonctions globales async (hors objet `AdminPanel`, extraites de `js/app.js`) : verrouillage/maintenance par matière ou par module ; calculent la carte cible puis **attendent la confirmation d'écriture** (`AuthService.saveModuleAccess()`) avant de mettre à jour `Storage`/`state.moduleAccess` et de re-render — sinon l'admin voyait le verrouillage confirmé localement même si l'écriture Firestore (lue par tous, y compris invités) avait échoué ; appelées désormais depuis l'onglet Modules d'`AdminPanel` (ex-`renderAdminPage()` de `home.js`, supprimée)

## js/views/teacherDashboard.js
Tableau de bord enseignant : classes, élèves, progression, devoirs, grading.
- `TeacherDashboard.render(backCode)` — charge les classes de l'enseignant ; attend aussi `ensureAllData()` (`js/loader.js`) avant de rendre — sans ça, un enseignant arrivant directement sur ce tableau de bord (ex: juste après connexion) avait `window.MODULES` vide : sélecteur "Assigner un devoir" vide, titres de modules affichés en ID brut dans points faibles/devoirs
- `TeacherDashboard._moduleScorePct(mod, trackingEntry)` — calcule le % de score réel d'un module depuis `progress.tracking[moduleId]` (priorité évaluation > quiz > exercice, même agrégation que `_computeWeakPoints`) ; réutilisé par `GradingPanel` (chargé après ce fichier dans `index.html`) — `progress.progress[moduleId].score`/`.evaluationScore` ne sont **jamais écrits** par les moteurs (`Storage.saveProgress` ne pose qu'un booléen `completed`), donc tout code qui les lisait affichait toujours "—"/vide
- `TeacherDashboard._sortStudents(students, progressMap)` / `_renderStudentsSection(cls, students, progressMap, classIndex)` / `_changeSortMode(mode, classIndex)` — tri client-side de la liste d'élèves d'une classe (nom / score moyen le plus faible via `_studentAvgScorePct` / inactivité via `_studentLastActiveMs`) ; `_changeSortMode` regénère uniquement `#td-students-section` depuis `_currentStudents`/`_currentProgressMap` (pas de rechargement Firestore)
- Formulaire "Assigner un devoir" (`_renderClassDetail`) — le `<select>` de modules exclut ceux verrouillés/en maintenance (`isModuleUnavailable`, `js/state.js`), pour ne pas assigner un module inaccessible aux élèves
- `TeacherDashboard._viewClass(classIndex)` — charge profils + progressions en parallèle via `Promise.allSettled` (pas `Promise.all`) : un élève dont `progress/{uid}` est inaccessible (permission-denied, réseau) n'empêche plus l'affichage du reste de la classe — il apparaît avec un badge "⚠️ données incomplètes" et une bannière `td-inline-warning` récapitule le nombre d'échecs
- `TeacherDashboard._renderClassDetail(cls, students, progressMap, loadErrorCount)` — vue classe : stats bar, points faibles, liste élèves, devoirs, bouton grading ; distingue "aucun devoir" d'un échec réseau de chargement des devoirs (bannière + bouton "Réessayer" au lieu d'une liste vide silencieuse) ; priorité `evaluationScore` puis `score` pour l'affichage du score d'un module, alignée sur `GradingPanel` (sinon même élève affichait un % différent selon l'écran)
- `TeacherDashboard._computeWeakPoints(students, progressMap)` — agrège `progress.tracking` (scores réels quiz/évaluation/exercice, distinct des booléens de `progress.progress`) par module sur toute la classe ; retourne le top 5 des modules sous 80% de moyenne avec la section la plus faible
- `TeacherDashboard._prefillAssignment(classIndex, moduleId)` — pré-remplit le sélecteur de devoir avec un module repéré comme point faible et y scrolle
- `TeacherDashboard._renderStudentProgress(uid, classId, profile, progress)` — progression lisible par titre de module, détail quiz/exo/eval
- `TeacherDashboard._removeStudent(uid, classCode, classIndex)` — retire un élève
- `TeacherDashboard._openGrading(classIndex)` — ouvre GradingPanel avec les données déjà chargées
- `TeacherDashboard._addAssignment(classIndex)` — crée un devoir pour la classe
- `TeacherDashboard._deleteAssignment(assignmentId, classIndex)` — supprime un devoir

## js/views/gradingPanel.js
Panneau de notation enseignant : tableau comparatif élèves × modules + export Pronote CSV.
- `GradingPanel.render({ cls, students, progressMap, backIndex })` — point d'entrée, reçoit les données de TeacherDashboard (pas de double requête Firestore) ; initialise `_gradeDrafts` (brouillons de saisie par module, en mémoire pour la session)
- Tableau comparatif et auto-remplissage des notes (`_renderGradeTable`) lisent le score via `TeacherDashboard._moduleScorePct(mod, progress.tracking[moduleId])` — pas `progress.progress[moduleId].score` (champ jamais écrit, voir `js/views/teacherDashboard.js`)
- `GradingPanel._onModuleChange()` — appelé par le `<select>` module au lieu de `_renderGradeTable()` directement : capture d'abord la saisie en cours (`_captureCurrentDraft()`) avant de changer de module, pour ne pas la perdre si l'enseignant revient dessus
- `GradingPanel._renderGradeTable()` — tableau de saisie /20 + appréciation pour le module sélectionné, pré-rempli depuis `_gradeDrafts[moduleId]` si l'enseignant y était déjà passé dans cette session
- `GradingPanel._exportCSV()` — génère et télécharge le CSV via Blob + URL.createObjectURL
- `GradingPanel._csvSafe(value)` — neutralise l'injection de formule CSV (préfixe `'` si valeur commence par `=+-@`)

## js/tutoring/tutoringService.js
Firestore CRUD pour le suivi de cours particuliers (tutorat privé, réservé aux comptes `tutorAccess: true`).
- `getStudents()` / `getStudent(id)` — liste (non archivés) / détail d'un élève
- `createStudent(data)` / `updateStudent(id, patch)` / `archiveStudent(id)` — CRUD élève (soft delete via `archived`)
- `watchStudentSessions(studentId, callback, onError)` / `createSession(studentId, data)` — écoute temps réel de l'historique et création de séance (`status: 'draft'`) ; `onError` (optionnel) reçoit les erreurs Firestore du listener (sinon la vue restait bloquée sur "Chargement..." en cas d'échec silencieux)
- `rateSession(sessionId, rating, remarks)` — note une séance 1-10 + remarques, passe en `status: 'rated'`
- `requestGeneration(sessionId, opts)` — déclenche la génération IA (Cloud Function)
- `createPositioningTest(opts)` — crée un doc `positioningTests` (l'id du doc sert de token de lien public), lié à `opts.studentId` ou `null` pour un nouvel élève pas encore fiché
- `getPendingPositioningTests()` — tests non rattachés (`studentId: null`), non `reviewed`, avec au moins une matière `completed` (pour le bloc "à traiter" de `tutoringHome.js`)
- `watchStudentPositioningTests(studentId, callback, onError)` — écoute temps réel des tests de positionnement rattachés à un élève
- `markPositioningTestReviewed(token)` / `attachPositioningTestToNewStudent(token, studentData)` / `attachPositioningTestToStudent(token, studentId)` — marque un test traité, ou le rattache en créant une nouvelle fiche élève / à un élève existant

## js/views/tutoring/tutoringHome.js
Liste des élèves de cours particuliers (route `/tutorat`), réservée aux comptes tutor.
- `TutoringHome.render()` — charge élèves + tests de positionnement en attente, puis affiche la grille
- `TutoringHome._renderList(filter)` — recherche client-side par nom
- `TutoringHome._showAddForm()` / `_submitAddForm(e)` — formulaire de création d'élève
- `TutoringHome._sendPositioningLink()` — crée un lien de test (`createPositioningTest`) et l'affiche via `showCopyLinkModal()` (`js/utils/ui-helpers.js`) pour copie/envoi manuel
- `TutoringHome._showAttachForm(token)` / `_submitAttachForm(e, token)` — bloc "Tests de positionnement à traiter" : crée la fiche élève à partir des infos saisies pendant le test, puis rattache le test
- `TutoringHome._showAttachToExistingForm(token)` / `_submitAttachToExisting(e, token)` — rattache un test en attente à un élève déjà fiché

## js/views/tutoring/tutoringStudent.js
Fiche élève (route `/tutorat/:studentId`) : notes générales, historique des séances (temps réel), notation, génération IA, tests de positionnement.
- `TutoringStudent.render(studentId)` — charge l'élève puis s'abonne aux séances (`watchStudentSessions`) et aux tests de positionnement (`watchStudentPositioningTests`) ; affiche la fiche immédiatement (sans attendre le 1er snapshot) et bascule `_syncError` + bannière "Réessayer" si un listener remonte une erreur
- `TutoringStudent._saveNotes()` / `_archive()` — édition notes générales / soft delete élève
- `TutoringStudent._showSessionForm()` / `_submitSessionForm(e, generate)` — création d'une séance (`status: 'draft'`), option "Générer un cours" immédiat
- `TutoringStudent._showRatingForm(sessionId)` / `_submitRating(e, sessionId)` — notation d'une séance (1-10 + remarques)
- `TutoringStudent._renderGenerationBadge(sess)` — badge d'état de génération (generating/generated/failed)
- `TutoringStudent._requestGeneration(sessionId, contentType, figuresCount)` — relance la génération sur une séance existante
- `TutoringStudent._sendPositioningLink()` — crée un lien de test de positionnement pré-rattaché à cet élève (`createPositioningTest`), affiché via `showCopyLinkModal()`
- `TutoringStudent._renderPositioningReports()` — affiche, par test complété, le niveau estimé par thème + une recommandation textuelle (`positioningBuildRecommendation`) comparée au niveau déclaré de l'élève, plus des boutons de lien direct vers les modules `bts-prep` concernés (`positioningRecommendedModules`, voir `js/positioning/positioningReport.js`)

## js/positioning/positioningClient.js
Wrapper d'appel aux 3 Cloud Functions publiques du test de positionnement (utilisé côté page de test non authentifiée ET côté `js/views/tutoring/`).
- `PositioningClient.getLinkInfo(token)` — infos du lien (nom élève déjà connu ? matières déjà complétées ?)
- `PositioningClient.getQuestionBank(subject)` — récupère la banque de questions QCM d'une matière (`maths`/`physique`)
- `PositioningClient.submitResult(token, subject, payload)` — soumet nom/niveau déclarés + réponses pour correction serveur

## js/positioning/positioningReport.js
Logique pure de comparaison niveau déclaré / niveaux estimés par thème (consommée par `tutoringStudent.js`).
- `positioningNormalizeLevel(raw)` — convertit un libellé de classe (ex: `"3e"`, `"Tle"`) en palier numérique 1-9
- `positioningBuildRecommendation(declaredLevel, themeResults)` — texte de recommandation ("lacunes probables sur…") si un thème est ≥2 paliers en dessous du niveau déclaré, sinon message neutre
- `positioningRecommendedModules(declaredLevel, themeResults)` — retourne les modules `js/data/bts-prep/` (tag `prep`) correspondant aux thèmes maths où l'élève est ≥2 paliers en dessous (même seuil que `positioningBuildRecommendation`), via la table statique `POSITIONING_THEME_TO_BTS_PREP` ; aucun mapping côté Physique-Chimie (pas encore de contenu `physique` sur le site)

## js/views/positioning/positioningTest.js
Page publique (route `/positionnement/:token`), non authentifiée : passage du test par l'élève.
- `PositioningTest.render(token)` — charge les infos du lien ; formulaire prénom/classe si élève inconnu, sinon choix de matière direct
- `PositioningTest._chooseSubject(subject)` — charge la banque de questions (`PositioningClient.getQuestionBank`) et démarre le test
- `PositioningTest._renderQuestion()` / `_answerQuestion(selectedOption)` — affiche une question (options mélangées à l'affichage, l'index original est soumis) ; rejoue localement l'algorithme "escalier" (mêmes constantes que `positioningStaircase.js`) pour choisir le palier de la question suivante, palier remis à 5 à chaque nouveau thème
- `PositioningTest._finishSubject()` — soumet les réponses via `PositioningClient.submitResult` (la notation finale/autoritaire est recalculée côté serveur) puis affiche le remerciement ; en cas d'échec réseau, affiche un bouton "Réessayer l'envoi" qui rappelle `_finishSubject()` sans perdre `_answers` (pas besoin de refaire les ~24 questions)
- `PositioningTest._renderThankYou()` — remerciement + option d'enchaîner sur l'autre matière si elle n'a pas déjà été testée

## functions/ (Cloud Functions — générateur de cours IA, tutorat Phase 2 + test de positionnement)
- `functions/index.js` — trigger `generateCourse` (`onDocumentWritten` sur `tutoringSessions`, filtré sur `generationStatus === 'generating'`) ; `onCall` publics `getPositioningLinkInfo`, `getPositioningQuestionBank`, `submitPositioningResult` (test de positionnement, accessibles sans authentification, délèguent à `functions/src/positioning.js`)
- `functions/src/generateCourse.js` — orchestrateur : verrou anti-double-déclenchement, rédaction, relecture, téléchargement des figures générées (`deps.downloadGeneratedFile`) + écriture dans `workDir` avant compilation, compilation (retry jusqu'à 3x), livraison Storage + email ; le bloc de livraison (upload + update Firestore + email) est dans son propre `try/catch` → `failSession()` sur échec (sinon une séance restait bloquée en `generating` indéfiniment si l'upload réseau échouait après une compilation réussie)
- `functions/src/anthropicClient.js` — appels Claude Opus 4.8 (code execution + web search), gestion `pause_turn` (jusqu'à 5 continuations)
  - `downloadGeneratedFile(anthropic, fileId)` — télécharge le contenu binaire d'une figure générée par `code_execution` via l'API Files (`GET /v1/files/{id}/content`, `__binaryResponse: true` — pas de resource dédiée dans le SDK installé) ; sans ça les figures n'étaient jamais matérialisées sur disque et toute séance avec `figuresCount > 0` échouait systématiquement à la compilation
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

## js/data/bts-prep/
14 modules de remise à niveau BTS (`tag: 'prep'`, `level: 3`). Chaque module : `cours` (+ `diagram` et/ou `diagrams[]`), `quiz`, `exercice.generate()`, `probleme` (avec `figure`), `evaluation`.
- Les figures sont des SVG inline utilisant EXCLUSIVEMENT les classes du thème (`frame-line`, `axis`, `grid-line`, `curve-main`, `graph-line`, `guide-line`, `plot-point`, `plot-point-alt`, `axis-label`, `annotation-label`, `tick-label`, `label-soft`) et les variables CSS (`var(--primary)`, `var(--secondary)`, `var(--accent)`, `var(--error)`) — jamais de couleur codée en dur, sinon l'illustration casse en thème sombre et à l'impression
- Gotcha récurrent : un `<text>` trop long déborde du `viewBox` et est **coupé** (pas de retour à la ligne en SVG). Garder les phrases courtes dans le SVG et déporter les explications longues dans `caption`/`notes`, qui sont du HTML et passent à la ligne

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
- `escapeHtml(str)` — échappement HTML partagé (auparavant dupliqué à l'identique en 6 endroits : `teacherDashboard.js`, `gradingPanel.js`, `adminPanel.js`, `tutoringHome.js`, `tutoringStudent.js`, `positioningTest.js`) ; ces fichiers chargent AVANT ce fichier dans `index.html`, donc chacun garde un wrapper local `_esc: function(str) { return escapeHtml(str); }` (une référence directe `_esc: escapeHtml` casserait au chargement, `escapeHtml` n'existant pas encore)
- `showCopyLinkModal(url, message)` — panneau modal "copier le lien" (bouton copier-presse-papiers + fallback `execCommand('copy')` + sélection manuelle) ; remplace `window.prompt()` (fragile sur mobile/webview) pour partager les liens de test de positionnement (`tutoringHome.js`, `tutoringStudent.js`)
- `convertMarkdownTables(html)` — convertit les tableaux markdown (`| a | b |` + ligne `|---|---|`) présents dans le contenu (`def`, `steps`, `context`...) en vrais `<table>` HTML ; appelé sur le HTML assemblé dans `moduleTabs.js` et `renderFicheCours()`, pas dans `js/data/`
- `renderLoading()` — squelette de chargement
- `renderErreurConseil(piege)` — bloc conseil sur l'erreur classique
- `renderQuestionFigure(figure)` — rend la figure attachée à une question de quiz, un exercice généré ou une question d'évaluation ; accepte une chaîne (SVG brut) ou un objet `{svg, caption}` ; le conteneur interne réutilise la classe `.cours-diagram-stage` pour hériter du thème SVG partagé (`.curve-main`, `.plot-point`, `.annotation-label`…) tandis que `.question-figure` porte les variables `--diagram-*`
- `renderFicheCours(mod)` — fiche de synthèse imprimable A4 d'un module (intro, définitions, méthode, exemple, formules, illustration, piège, récap) ; consommée par `printFiche()` dans `js/app.js` ; l'illustration utilise `renderCoursDiagram()` (voir `js/components/renderCours.js`), qui gère le format legacy (string) et le format riche (objet `{svg, notes...}`)
- `renderFichesBatch(modules)` — concatène plusieurs `renderFicheCours()` pour l'impression groupée
- `_printLevelLabel(mod)` — libellé "Matière · Niveau — Classe" affiché en en-tête de fiche
- `renderEvaluationPrintSheet(items, mode)` — sujet imprimable (`mode:'subject'`, réponses vierges) ou corrigé (`mode:'correction'`, réponses + barème) à partir d'une liste `{moduleTitle, question}` où `question` suit le schéma `evaluation.questions` (`statement`, `type:'numeric'|'multiple-choice'`, `answer`, `unit`, `points`, `correction`) ; consommée par `printEvaluationSubject()`/`printEvaluationCorrection()` (voir `js/print.js`)
