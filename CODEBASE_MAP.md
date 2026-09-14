# CODEBASE_MAP — Spark Learning

SPA Vanilla JS sans bundler. Chargement des scripts via `index.html` (ordre critique). État centralisé dans `state.js`.

---

## index.html
Point d'entrée unique. Déclare l'ordre de chargement de tous les scripts.
- Chargement : `<script src="...">` dans l'ordre exact requis (Firebase → authService → views (authView, teacherDashboard, adminPanel) → sync → data → engines → components → app)
- `#nav-login` — bouton nav (masqué par défaut), affiché en mode invité pour ouvrir `AuthView`
- `#nav-shop` — lien nav (pas un `<button>`) vers la boutique Shopify (`f1niwf-wr.myshopify.com`), `target="_blank"`, à côté des autres boutons de nav
- `<head>` — meta SEO statiques par défaut (description, canonical, robots, OG, Twitter Card, `manifest.json`) ; réécrites dynamiquement par vue via `updatePageMeta()` (`js/app.js`)

## js/hero3d.js
Couche 3D décorative de l'accueil. Aucun impact fonctionnel : si le fichier ne charge pas, la page reste identique en tout point.
- `initHero3D()` (exposé sur `window`) — seul point d'entrée, appelé par `render()` dans `js/app.js` après chaque rendu de vue. **Doit rester ré-exécutable** : la SPA recrée le DOM à chaque navigation, donc la fonction coupe le timer précédent et les écouteurs globaux ne sont posés qu'une fois (ils ne font rien tant qu'on n'est pas sur l'accueil)
- Bannière rotative (`#promoDrum`, markup dans `renderHome()`) — prisme à 3 faces, rotation toutes les 4 s ; se met en pause au survol, au focus clavier et quand l'onglet passe en arrière-plan
- Profondeur des `.math-float` du hero — parallaxe souris (5° max) et scroll, lissée en `requestAnimationFrame`
- Inclinaison des `.feature-card` au survol — la classe `.is-tilting` coupe la transition de `.card-base` pendant le geste, sinon l'inclinaison traîne de 250 ms
- Neutralisé sous `prefers-reduced-motion` et sur pointeur grossier (`pointer: coarse`) ; styles associés en fin de `css/styles.css` (section « COUCHE 3D DE L'ACCUEIL »)

## docs/charte-graphique.md
Charte graphique du site, extraite du code le 2026-08-21 (elle n'existait pas avant). Décrit l'existant — `css/styles.css` reste la source de vérité.
- Couleurs (clair + `[data-theme="dark"]`), rôle réel de chaque token (`--accent` = couleur d'action, `--primary` = autorité, `--secondary` = accent ponctuel)
- Typo (Poppins/Inter), formes (`--radius`, ombres douces), composants de référence (`.card-base`, `.btn-primary`)
- Signature du hero (halo à 8 %, 6 formules flottantes à `opacity: .07`, 4 stats)
- À consulter avant toute évolution visuelle, pour ne pas partir d'une tendance externe

## docs/manuels/argumentaire-edition-professeur.md
Argumentaire de vente de l'édition professeur des manuels (défaut 21 de l'audit, 2026-09-12). Document interne, pas une plaquette.
- Positionnement (cible = contractuels, soutien, IEF — pas les titulaires, qui ont le livre du prof gratuit), différentiel élève/prof chiffré, texte de fiche produit Shopify, 7 objections et leurs réponses
- Chiffres établis sur `college-maths-6e` au 2026-09-12 : 84 p. élève / 152 p. prof, 120 vs 270 énoncés, 150 exercices supplémentaires, 190 corrigés, 40 fiches d'erreurs
- **§7 « Chiffres à revérifier »** : chaque nombre cité est repéré (C1…C20) avec sa commande de recomptage sur le `.tex` livré. Ne jamais recopier un nombre depuis la prose
- Signale que la 4e de couverture et l'avant-propos de l'édition prof sont **identiques** à ceux de l'élève (bloquant pour la vente), et que seule la 6e a la couche prof v2

## docs/manuels/positionnement-prix.md
Positionnement prix des deux éditions (défaut 24 de l'audit, 2026-09-12). Sépare FAIT (compté) / MARCHÉ (sourcé, URL) / RECOMMANDATION (jugement).
- Répartition des pages par type de contenu, pour les deux éditions, reconstituée depuis les `.toc`
- Données de marché sourcées au 2026-09-12 : manuel élève 6e = quasi-monoprix 24,90–25,90 € pour ~310 p. ; **livre du professeur gratuit en numérique** chez la plupart des éditeurs (fait décisif) ; Sésamath 6,90 € ; segment ressource enseignant Génération 5 = 19–69 €
- Recommandation : élève 12 €, professeur 29 € — mais **ne pas vendre l'édition élève 6e seule** (24 p. d'exercices seulement) et **n'ouvrir l'édition prof que sur la 6e**
- 10 leviers classés effort/impact ; le n°1 est de porter la banque de 15 à 30 énoncés par chapitre (paramètre du pipeline, pas une réécriture)

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
Photos réelles utilisées en complément d'un schéma SVG dans `cours.diagram` (jamais en remplacement), référencées via `<img src="images/modules/...">` dans le champ `diagram.svg`/`html`. Uniquement des images sous licence libre (domaine public, CC) car le site est public — contrairement aux fiches BTS FED internes, aucune tolérance "tous droits réservés" ici. Premier exemple : `si-bts/verin-hydraulique-coupe.jpg` (domaine public, Hotdogcartman/Hyco, Wikimedia Commons). Téléchargées par le skill `generer-image` (étape de repli, licence libre uniquement) — jamais par génération IA.

## images/modules/sources.json
Registre de provenance des images de repli téléchargées par le skill `generer-image` (module, fichier, url_source, auteur, licence, date_ajout). Les diagrammes construits par code n'y figurent pas — leur provenance est le calcul/gabarit lui-même.

## images/mascotte/
Mascotte de marque **Sparky** (renard a lunettes et echarpe aqua), validee le 2026-08-25, renommee de Fixou vers Sparky le 2026-08-27. Le second narrateur, le loup **Lumen**, vit dans `tiktok/assets/sparky/adulte/` et non ici. Generee par le skill `generer-image` via Mammouth `gemini-2.5-flash-image`, palette calquee sur `images/Logo_blanc.jpeg` (orange #F0A83C, jaune #F0D860, aqua #6CE4D8, bleu ciel #48C0D8), contour navy. **Aucun code ne consomme encore ces fichiers** : le site sert toujours `images/Logo_noir.jpeg` en favicon (`index.html` ligne 13) et le `companionEngine` n'affiche pas d'avatar.

Toutes les PNG sont detourees (fond transparent, sans halo blanc sur fond sombre) et partagent le meme canevas 1024x1024, ce qui preserve l'echelle relative entre les poses — les redimensionner uniformement suffit.

**Couleurs harmonisees** : les generations successives derivaient (fourrure entre #F08840 et #F09848 selon la pose). Les 4 poses d'expression ont ete recalees en TSV sur `sparky.png`, seule reference calee sur le logo — fourrure #F0A840 (teinte 34,7 deg / sat 0,733) et echarpe aqua (teinte 167 deg / sat 0,376) identiques sur les 5 fichiers. Regenerer une pose isolement reintroduit la derive : la reharmoniser sur `sparky.png` avant de l'integrer.
- `sparky.png` — pose principale, tient un livre "Spark Learning" (bicolore : "Spark" orange, "Learning" bleu ciel) surmontant un eclair dore
- `sparky-encourage.png` — pouce leve, clin d'oeil (avant un exercice)
- `sparky-felicite.png` — bras leves, etincelles dorees (bonne reponse)
- `sparky-reflechit.png` — patte sous le menton (chargement, indice)
- `sparky-console.png` — patte tendue, sourire doux (apres une erreur ; ton non punitif)
- `sparky-tete.png` — tete seule 512x512 transparente, source des icones

## tiktok/assets/sparky/adulte/
Sprites du loup **Lumen**, second narrateur (persona `adulte` de `tiktok/config.py`), ajoutes le 2026-08-27. Il porte les videos BTS et la ligne « maths x vie reelle » ; Sparky garde college et lycee.

Genere en **une seule planche 2x2** par Gamma, puis decoupe : un rendu unique est ce qui garantit le meme animal sur les quatre poses, la generation pose par pose derivant systematiquement (meme piege que pour Sparky). Script de post-traitement conserve dans `tiktok/.travail/lumen/decouper.py` — detourage par remplissage depuis les bords (un seuillage global mangerait le poitrail creme), reharmonisation TSV sur la palette Sparky (orange #F0A840 teinte 34,7 deg / sat 0,733, contour #202040), recadrage a hauteur 780 px et appui bas 120 px sur 1024x1024.

Design : pelage ardoise, creme au museau, poitrail, oreilles et bout de queue, lunettes rectangulaires et echarpe cotelee orange — l'inverse de Sparky, meme univers, aucune confusion possible a l'ecran. Les noms de fichiers restent ceux du jeu Sparky : `config.POSES` mappe un moment du script vers un nom de fichier, commun a tous les jeux.
- `sparky.png` — de face, tient un livre (vierge, sans le titre du jeu Sparky)
- `sparky-reflechit.png` — patte sous le menton
- `sparky-console.png` — patte tendue, geste rassurant
- `sparky-felicite.png` — bras leves, etincelles dorees

## images/mascotte/favicon/
Jeu d'icones derive de `sparky-tete.png`. Non reference dans `index.html` ni `manifest.json` pour l'instant.
- `favicon.ico` (16/32/48), `favicon-16.png`, `favicon-32.png`, `favicon-48.png` — transparents. Le 16px reste confus : un renard dessine ne tient pas a cette taille, les navigateurs recents servent surtout le 32
- `apple-touch-icon.png` (180), `icon-192.png`, `icon-512.png` — fond creme #FDFBF5 opaque, Apple et les PWA ignorant la transparence

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
- `pick(arr)` — tirage **sans remise** : sert chaque liste par tournées mélangées (tous les éléments sortent une fois avant qu'aucun ne revienne, et une tournée ne redémarre jamais sur l'élément qui vient d'être servi). Mémoire `_tournees` indexée par le *contenu* de la liste, car un `generate()` reconstruit son tableau littéral à chaque appel. Reste déterministe sous `Math.random` ensemencé (`scripts/manuel/extract.js`). Avant (tirage uniforme), 25 paires d'exercices consécutifs partageaient leur contexte narratif dans 19 chapitres sur 48 de college-maths
- `fr(value, decimals)` — formate un nombre en notation décimale française pour LaTeX (`fr(1.5)` → `"1{,}5"`) ; à utiliser dans tout `exercice.generate()` au lieu de `.replace('.', '{,}')` à la main
- **Variété des `generate()` (règle du 2026-09-08)** : un générateur doit tirer plusieurs **tâches** distinctes, pas un seul calcul réhabillé — le manuel appelle `generate()` en boucle (3 tirages en édition élève, 6 en édition professeur), si bien qu'un générateur mono-tâche imprime trois fois le même exercice. **Les 10 chapitres de 6e sont passés à ce modèle le 2026-09-08** (4 tâches chacun) : `fractions` (simplifier/comparer/compléter/partager), `volumes` (pavé/cube/convertir/hauteur), `angles` (triangle/complémentaire/supplémentaire/isocèle), `nombres-decimaux` (comparer/encadrer/arrondir/chiffre de rang), `addition-soustraction` (somme/différence/monnaie/terme manquant), `multiplication` (produit/×10ⁿ/facteur manquant/aire), `division` (quotient/reste/décimale/÷10ⁿ) ; `figures-geometriques`, `symetrie-axiale` et `perimetres-aires` avaient déjà plusieurs tâches. Chaque variante reste au programme et rend un nombre (le moteur n'accepte qu'une réponse numérique — d'où « réponds par le numérateur » dans la comparaison de fractions). Conséquence à surveiller : un renvoi de remédiation « exercice n » d'une fiche prof ne désigne plus une tâche prévisible

## js/data/figures-exercices.js
Générateurs de **figures paramétriques d'exercice** (2026-09-12). Chargé après `helpers.js` (dont il utilise `fr()`) et avant les modules, dans `index.html` comme dans `scripts/manuel/extract.js`. Répond au plus gros manque pédagogique du manuel : un exercice de périmètre sans figure oblige l'élève à construire mentalement la figure avant de calculer, ce qui n'est pas la compétence évaluée.
- **Pourquoi des helpers partagés et non du SVG à la main dans chaque `generate()`** : les exercices sont dynamiques, une figure fixe *mentirait* sur les cotes tirées. Un `generate()` appelle donc `figureRectangle(L, l)` avec les valeurs de **son** tirage. Mutualisé, donc cohérent graphiquement, et directement réutilisable par les ~20 autres manuels
- **Pourquoi du SVG et non du TikZ** : `scripts/manuel/figures.js` n'accepte une figure que si elle vient d'un SVG source (provenance `svg-exact`, empreinte SHA). Une figure écrite directement en TikZ serait refusée
- **Règle d'échelle : les figures sont À L'ÉCHELLE** (un rectangle 12×7 est dessiné dans le rapport 12/7). `echelleFigure()` est commune à la largeur et à la hauteur, sinon la forme mentirait. `RAPPORT_MAX = 4` borne les cas dégénérés (un 15×2 donnerait un trait de 3 mm) : au-delà le dessin est comprimé **et le déclare** via `figureHorsEchelle()`. Seule exception assumée : la perspective cavalière du pavé (fuyante réduite de moitié), qui est la convention du collège
- `figureRectangle(L, l, {unite})` / `figureCarre(c)` — cotes L et l à l'extérieur de l'aplat (`svg2tikz` supprime la réserve blanche dans un aplat)
- `figureTriangle(b, h)` — hauteur en pointillés + angle droit codé ; sommet au-dessus du *milieu* (l'aire n'en dépend pas, la forme isocèle est la plus lisible)
- `figureDisque(r, {diametre})` — trace le rayon, ou le diamètre de bord à bord si l'énoncé donne `d`
- `figurePave(L, l, h, {cube, hauteurInconnue})` — perspective cavalière, arêtes cachées en pointillés. `hauteurInconnue` écrit « h = ? » quand la hauteur *est* la réponse cherchée. La fuyante montre la **vraie** profondeur : elle était bornée en silence par `min(l, max(L, h))` (un pavé 20×40×30 dessinait 30 cm sous l'étiquette « l = 40 cm »), elle passe désormais par `borner()` comme les autres formes et déclare sa compression (audit du 2026-09-12)
- `figureTriangleAngles(a1, a2, {cherche})` — triangle construit aux **vrais** angles (loi des sinus) : lisible au rapporteur. L'angle cherché porte `?` et n'est jamais chiffré. `cherche: 'base'` pour le triangle isocèle (sommet donné, base cherchée)
- `figureAnglesAdjacents(a, total)` — deux angles adjacents formant un angle droit (`total` 90) ou plat (180), tracés à leur vraie mesure
- `figureSymetrie(valeurA, valeurAxe, {variable})` — droite graduée aux vraies abscisses, axe en pointillés (la « pliure »), symétrique marqué d'un cercle vide et d'un `?` — la figure montre *où* il est, jamais sa valeur. Au pas de 2, la graduation est **calée sur la parité de l'axe** : partir de `min` n'affichait que les impairs quand A, l'axe et la réponse étaient pairs, et aucune des trois valeurs n'avait de trait (audit du 2026-09-12). **1-D seulement** : la symétrie *centrale* de 5e est dans un repère 2-D, ce helper ne s'y applique pas
- `figureLosange(d1, d2)` / `figureParallelogramme(base, hauteur)` (2026-09-13, pour la 5e) — le losange est inscrit dans le rectangle de ses diagonales ; le parallélogramme porte sa hauteur perpendiculaire, distincte du côté oblique
- `figureSecanteParalleles(angle, type, {marque})` (2026-09-13, pour la 5e ; réutilisable en 4e et 3e) — deux parallèles coupées par une sécante, `type` ∈ `alterne-interne` / `correspondant` / `interne`. **L'inclinaison de la sécante est calculée à partir de l'angle tiré**, jamais fixe : dessiner 47° comme 121° ferait mentir la figure. L'angle connu est chiffré au croisement du haut, l'angle cherché porte `?` au croisement du bas. Vérifié sur les 42 tirages du livre : écart annoncé/dessiné < 0,5°, zéro élément hors cadre. Répond au fait que l'énoncé *nomme* la position de l'angle (« alterne-interne ») sans la montrer, alors que reconstituer la configuration à huit angles **est** la difficulté du chapitre
- **Réserve pour les cotes extérieures** : `echelleFigure()` accepte `reserveGauche`/`reserveDroite`, calculées par `largeurEtiquette()`. `FIG_MARGE` (34 unités) ne suffisait pas à « l = 12 cm » (≈ 56) : l'étiquette sortait du `viewBox`, que `svg2tikz` fige comme boîte TikZ (`\useasboundingbox`) — donc **aucun Overfull signalé** et impression par-dessus le texte voisin (12 des 89 figures du tirage courant, jusqu'à 3,9 mm)
- **Contraintes de conversion respectées** : `viewBox` obligatoire ; uniquement `rect/line/polygon/circle/path/text` ; le style passe par les classes CSS du projet (`frame-line`, `guide-line`, `grid-line`, `axis`, `annotation-label`, `tick-label`, `label-soft`, `plot-point`), **aucune couleur en dur** ; les cotes passent par `fr()`
- Tests : `scripts/manuel/tests/figures-exercices.test.js` (24 tests), dont le test central compare les cotes de la figure aux valeurs de l'énoncé sur 5 modules × 4 graines. Depuis l'audit du 2026-09-12, sept tests **balaient tout le domaine atteignable** (les `rand()` des `generate()` appelants) et non plus un échantillon : débordement du `viewBox`, fidélité de la fuyante, chevauchement des étiquettes d'angle, graduation de la règle, non-divulgation de la réponse, notation décimale

## scripts/check-decimal-notation.js
Détecte les régressions du bug de notation décimale française dans `js/data/`. Trois familles :
- **statique** — accolade `{,` sans `}` (casse KaTeX) ; `.toFixed(n)` interpolé sans `fr()` (avertissement)
- **statique** — `{,}` dans une étiquette `<text>` d'un SVG : KaTeX ne s'y exécute pas, les accolades s'impriment
- **dynamique** — exécute chaque `exercice.generate()` sur 3 graines × 40 tirages (via `manuel/extract.js` + `manuel/verifier-corpus.js:listerModules`) et cherche `\d+\.\d+` dans `statement`/`hint`/`unit`/`solution`/`correction`, balisage retiré. **C'est la seule famille qui attrape le vrai bug récurrent** : un `${aire}` interpolé nu ne vaut `31.5` que si le tirage tombe sur un demi-entier — invisible dans le source, il faut exécuter. `answer` est volontairement exclu (Number, toujours passé par `fr()`/`nombreFr()`)
- Usage : `node scripts/check-decimal-notation.js` — à lancer après toute modification d'un `exercice.generate()` (voir `CLAUDE.md` section 2)
- **État au 2026-08-16** : 0 faute dans college-maths ; **23 modules restent fautifs hors de cet ouvrage** (lycée 2nde/1re/Tle, SI, FED) — non corrigés, hors périmètre du chantier manuel

## scripts/manuel/schema.js
Valide la forme d'un module de `js/data/` avant conversion vers LaTeX.
- `validerModule(mod)` — contrôle les champs obligatoires, renvoie erreurs et avertissements
- `normaliserExercice(ex)` — `solution` toujours en tableau, données ramenées dans le realm hôte. **Reconstruit l'exercice champ par champ : tout champ non recopié ici est silencieusement perdu** entre le `generate()` du module et le chapitre LaTeX (piège rencontré le 2026-09-12 en ajoutant `figure`). Normalise `figure` (chaîne SVG ou `{svg, caption}`) vers `{svg, caption?}` ou `null`, pour que `chapitre.js` n'ait qu'un cas à traiter

## scripts/manuel/extract.js
Charge un module hors navigateur (contexte `vm`) avec un tirage d'exercices reproductible **et sans doublon**.
- `chargerModule(chemin, {graine, tirages, repetitionsMax})` — `Math.random` ensemencé, donc même graine = même livre. Depuis le 2026-09-12, retire tant que l'énoncé est déjà vu, avec un budget borné : indispensable depuis que l'édition professeur tire une banque par chapitre, où les modules les moins variés répétaient jusqu'à deux énoncés. Budget épuisé = banque plus courte, jamais de boucle ni de doublon
- **`repetitionsMax` (2026-09-13) — le second plafond, celui qui dimensionne vraiment la banque du professeur.** La déduplication par énoncé EXACT ne sature jamais : les valeurs numériques sont quasi infiniment combinables, si bien que 60 tirages « tous distincts » en `6e-angles` sortaient de **9 moules** seulement — le même exercice imprimé sept fois avec d'autres nombres. On plafonne donc le nombre de fois qu'un même **moule** (`squeletteEnonce`, le texte nombres masqués) peut ressortir. Un chapitre riche va au bout des tirages demandés, un chapitre pauvre s'arrête de lui-même : c'est le résultat voulu, pas un défaut. `Infinity` par défaut (comportement d'avant). Budget d'essais porté à `tirages * 40` quand le plafond joue — une fois les moules courants saturés, seuls les moules rares font encore avancer le compteur, et le générateur les tire rarement
- `squeletteEnonce(texte)` — l'énoncé avec tous ses nombres remplacés par `#`, **notation décimale française comprise** (`3{,}5` et `12{,}75` donnent le même squelette). Deux énoncés de même squelette sortent du même moule du générateur
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
- `∩ ∪ ∖` ajoutés le 2026-08-16 : faute de les trouver ici, les diagrammes de Venn du corpus
  écrivaient « inter » en toutes lettres dans leurs étiquettes.

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
- `LARGEUR_FIGURE_MM` — largeur utile du bloc de texte du livre (128 mm, schémas de chapitre)
- `preparerFigureExercice(mod, exercice, rang)` / `preparerFiguresExercices(mod, exercices)` (2026-09-12) — convertissent la figure portée par un exercice tiré. **Même contrôle de provenance `svg-exact`** que les schémas de cours : la figure vient des helpers de `js/data/figures-exercices.js`, sous forme de SVG. `preparerFiguresExercices` renvoie un tableau *parallèle* à `exercices` (`null` quand l'exercice n'a pas de figure — la majorité)
- `LARGEUR_FIGURE_EXERCICE_MM` — **52 mm**, contre 128 pour un schéma de chapitre. Un chapitre porte 12 exercices : à 128 mm chacun la seule section « Exercices » gagnerait une quinzaine de pages. Valeur retenue après essais entre 45 et 60 — à 45 les cotes tombaient sous le plancher typographique de `svg2tikz` (`CORPS_MIN = 5,2 pt`) et se composaient toutes à la même taille, à 60 la figure occupait plus de place que son énoncé

## scripts/manuel/svg2tikz.js
Convertit un SVG du corpus en TikZ. Aucune coordonnée n'est recalculée — seule l'ordonnée
est niée, l'axe y du SVG descendant — d'où la provenance `svg-exact` et son empreinte SHA1.
- `etiquette(source, origine)` — typographie d'un libellé : îlots math, indices, unités, réserve blanche. Normalise `{,}` (virgule KaTeX) en virgule nue : KaTeX ne s'exécute jamais dans un `<text>` SVG, les accolades s'imprimaient telles quelles à l'écran comme sur le papier. Une étiquette qui n'est QU'une fraction reste en `\frac` (jamais `\dfrac` : deux lignes de haut, elle recouvrirait les bandes des diagrammes de fractions) — une étiquette trop petite se corrige à la source, par l'attribut `font-size` du `<text>`, prioritaire sur la taille de sa classe
- `retirerDefs(svg)` — un `<defs>` **déclare** des formes (marqueurs de flèche), il ne se dessine pas. Les recopier posait la pointe du `<marker>` en forme autonome au coin supérieur gauche, dans son repère à elle : petit triangle parasite en tête de 3 figures de college-maths. Les pointes restent rendues par TikZ via `marker-start`/`marker-end`
- `versTikz(svg, ...)` — géométrie : traits, aplats, arcs et Béziers
- **Réserve blanche des étiquettes et `zonesRemplies`** — une étiquette posée sur un trait reçoit un `fill=white` (sinon le trait barre les chiffres), **sauf** si elle tombe dans un aplat déjà posé, où la réserve dessinerait une tache claire. **Corrigé le 2026-09-13** : `zonesRemplies` n'était alimenté que par les `<rect>`, jamais par les `<polygon>` — les 3 étiquettes intérieures d'un triangle d'angles (`76°`, `?`, `?`) et le `h` d'un triangle de périmètres gardaient leur réserve et déposaient une pastille blanche sur l'aplat teinté. **34 figures sur 226** en étaient atteintes en 6e ; les 192 autres sont inchangées au caractère près
- `dansLaZone(zone, x, y)` (2026-09-13) — un point est-il dans un aplat ? Rectangle : test de bornes. Polygone : **lancer de rayon** (« even-odd »), pas la boîte englobante — celle d'un triangle déborde très largement la surface teintée et priverait de réserve des étiquettes posées **à côté** du triangle, sur du blanc (le `base = 11 cm` sous un triangle, par exemple). On aurait échangé une tache contre des chiffres barrés. Seul `<polygon>` alimente les zones, jamais `<polyline>` : une ligne brisée n'est pas une surface, même quand le SVG lui laisse un `fill`
- `ACCENTS` — couleur d'accent par matière ; chaque nom doit exister dans `COULEURS_CHARTE`, sinon l'ouvrage entier échoue
- L'espace source entre deux jetons n'est rendu implicitement que si l'un des voisins est un opérateur **binaire** (`=`, `+`, `×`… qui portent leur propre espacement) ; sinon elle est demandée explicitement (`\ `). Un délimiteur n'en porte aucune : « 8/12 (= 2/3) » s'imprimait « 8/12(= 2/3) », l'espace avalée par le mode math
- Les deux moitiés sont séparées : la typographie et la géométrie changent pour des raisons différentes

## scripts/manuel/planche.js
Planche de contrôle : toutes les figures d'un ouvrage, une par page, à la taille du livre.
- `construire(cle, filtre)` — préambule identique à celui de l'ouvrage, sinon la planche ne prouve rien
- Usage : `node scripts/manuel/planche.js college-maths [module...]`, puis rastériser et REGARDER
- Raison d'être : « 0 erreur LaTeX » ne prouve pas qu'une figure est juste

## scripts/manuel/chapitre.js
Compose un module en chapitre LaTeX, édition élève ou professeur. Tests : `tests/chapitre.test.js`.
- `composerChapitre(mod, exercices, {professeur, figure})` — structure complète du chapitre
- **`EXERCICES_VISIBLES = 12`** — inchangé le 2026-09-13 alors que le tirage passait de 18 à 42 (`build.js`) : **c'est le point de la manœuvre**. 12 suffisent à l'élève, tout le surplus va à la banque du professeur. La valeur est redite dans `prof.js` (`EXERCICES_NUMEROTES`, pas d'`import` : `chapitre.js` require `prof.js`, l'inverse ferait un cycle) et un test vérifie que les deux restent égales
- **Banque du professeur groupée par tâche** (2026-09-12) : `grouperParTache(exercices)` et `signatureTache(exercice)` signent sur la **première ligne de solution**, pas sur l'énoncé — l'énoncé porte le contexte (« Un chimiste note… », « En cuisine… ») et éclatait une même méthode en 10 groupes isolés sur 15 énoncés ; la solution nomme la méthode et rend 1 à 4 groupes nets. `titreDeGroupe` en tire un intertitre débarrassé de ses formules (une `$\dfrac{}{}$` en gras est illisible), en gardant l'espace française avant `:` `;` `!` `?`. Les groupes d'un seul énoncé sont fondus dans « Exercices variés »
- **`spcorrige` et non `spexemple`** dans l'édition professeur (2026-09-12) : la résolution qui suit un exercice est son **corrigé**, pas un « Exemple résolu ». `spexemple` reste réservé à l'exemple du cours (`cours.example`)
- **Couche professeur v2** (2026-09-07) : `opts.prof` (la fiche `js/data/prof/…`) et `opts.referentiel` ; en édition professeur, l'encadré enseignant reçoit la place dans le programme (le « Volume conseillé : N séances » a été retiré le 2026-09-08 — le livre ne parle plus jamais d'heures) (`\par\medskip` obligatoire : un `\medskip` en mode horizontal trouait l'encadré), la page « Erreurs fréquentes et remédiation » suit le piège, chaque question d'évaluation porte sa compétence et la grille des points par compétence ferme l'évaluation (`prof.js`)
- `objectifs(mod)` / `prerequis(mod)` — couche professeur, déduite du contenu réel. **Renvoient du texte BRUT, jamais du LaTeX** : c'est `liste()` qui convertit, une fois. Les faire convertir aussi produisait une double conversion — le `\ensuremath{\to}` du 1er passage repassait à l'échappement du 2e (`\` → `\textbackslash{}`, puis ses accolades ré-échappées) et le livre imprimait `\{}ensuremath{\{}to}` en clair
- `reponseInline(valeur, unite)` — valeur + unité sans espace fantôme quand l'unité est vide ; sans lui les corrigés d'évaluation sortaient « Corrigé (3 ) », 83 fois dans college-maths
- `espaceReponse(hauteurCm)` — espace de rédaction élève **borné et annoncé** (« Ta réponse : » + deux filets) : un `\vspace` nu se lisait comme un trou de composition
- `figureExercice(entree)` (2026-09-12) — figure paramétrique d'un exercice, imprimée **sous l'énoncé et avant le coup de pouce** : elle fait partie de la donnée, pas de l'aide. Rendue dans un `center` **non flottant** et **sans `\caption`** — un flottant se détacherait de son exercice et remonterait d'une page (certitude à 12 exercices par chapitre), et un « Figure 3.7 » à côté d'un « Exercice 3.7 » se lirait comme un renvoi. Sert aussi la banque supplémentaire du professeur, où le rang se retrouve par **identité** de l'objet exercice (`grouperParTache()` réordonne la banque : un compteur local pointerait sur la figure d'un autre exercice)
- `baremeVisuel(evaluation)` — une seule teinte claire, libellés en `encre`. La version à trois gris tournants écrivait en blanc sur `ardoise!25` (contraste < 1,5:1) et son dégradé laissait croire à un codage, alors que seule la largeur porte l'information

## scripts/manuel/ouvrage.js
Maquette du livre : préambule, couverture, liminaires, fin d'ouvrage, couverture imprimeur.
- `gouttierePourPages(n)` — marge intérieure exigée selon l'épaisseur
- `COULEURS_CHARTE` — palette LaTeX. **Accent des figures, une couleur par matière** (`accentmaths`, `accentphysique`, `accentsi`, `accentfed`), consommée par `svg2tikz.js`. `accentmaths` = `bleumaths` #1F6FB2 depuis le 2026-09-08 : c'était `ardoise` (#2C3E50), la couleur du **texte**, si bien qu'un aplat SVG à 55 % sortait gris (#8B959F) — le schéma « parts coloriées » du chapitre Fractions n'avait aucune part coloriée. Le turquoise assombri a été écarté : #389D89 est indistinguable de `accentphysique` (#369784)
- `largeurDosMm(n)` — largeur de dos pour la couverture séparée
- `\cleardoublepage` **redéfini en `\clearpage`** (2026-09-08) : plus aucun verso blanc. L'ancienne version insérait une page vide pour démarrer chaque section sur une belle page (recto), convention du livre imprimé — 11 pages blanches sur 111 en 6e, soit 111 → 100 pages. Les manuels sont diffusés en numérique uniquement ; à rétablir tel quel si un tirage papier recto-verso est un jour commandé
- `platUn(config, coinSO, coinNE)` — plat 1 composé une fois, servi à la page de titre ET à la couverture imprimeur. **Couverture v3 (validée 2026-08-28) : une couleur par année.** Bandeau de tête de 20 mm portant la ou les teintes des années couvertes (segmenté à parts égales sur un volume de cycle) ; zone sombre avec motif TikZ vectoriel par matière ; bandeau clair de 92 mm avec titre, niveau dans la teinte de l'année, échelle de pastilles du cursus, promesses, auteur et QR
- `ANNEE_DE_DOSSIER` / `CURSUS` / `anneesDe()` / `familleDe()` — dérivent l'année et le cursus depuis `config.dossiers` ; toute nouvelle clé de dossier doit être ajoutée à la table
- `motifDiscipline(collection, c)` — motif vectoriel par matière : géométrie (maths), onde/lentille/circuit (physique-chimie), chaîne d'énergie (SI et FED)
- `mascotteDe(config, famille)` — Sparky sur les maths, Lumen sur la physique-chimie ; 76 mm au collège, 46 mm au lycée, 28 mm en BTS ; passe à gauche sur l'édition professeur pour ne pas être recouverte par l'onglet
- `traitBicolore(largeurCm)` — le petit trait turquoise/jaune, motif répété sur couverture, page de titre, copyright, ouverture de partie : une seule définition
- `COULEURS_CHARTE` — LA palette du livre, couverture et intérieur, reprise de `css/styles.css` ; exportée pour `planche.js`
- `MACROS_MARQUE` — logo TikZ de secours (cycle + éclair), utilisé seulement si `config.logoIcone` est absent
- `corpsTitre(titre)` — réduit le corps par paliers, un titre long ne doit pas se couper
- `niveauxUtiles(config)` — supprime la ligne de niveaux quand elle répète le sous-titre
- `ligneNiveaux(n)` — la puce pleine devient un point médian aéré
- `AUTEUR` / `AUTEUR_LIGNE` — signature écrite une fois, reprise aux quatre endroits qui la portent
- `preambule/couverture/liminaires/ouverturePartie/finOuvrage/couvertureSeparee`
- **Texte éditorial décliné par édition** (2026-09-12). L'édition du professeur imprimait mot pour mot le texte de l'élève — tutoiement compris — puis y collait un paragraphe professeur en appendice. Quatre textes ont désormais deux versions, toutes pilotées par le seul `config.professeur` :
  - `avantPropos(config)` / `AVANT_PROPOS_ELEVE` / `AVANT_PROPOS_PROF` — **le texte a quitté `build.js`** pour vivre ici avec le reste du texte éditorial. `config.avantPropos` reste prioritaire si un ouvrage veut le sien
  - `modeDEmploi(prof)` — « Comment utiliser ce manuel ». Version élève : ce qu'il doit faire de chaque section. Version professeur : à quoi chaque section sert **en classe** (ce qui se projette, ce qui se donne à la maison), les contenus exclusifs fondus dans le déroulé du chapitre et non en post-scriptum
  - `quatriemeDeCouverture(config, couleurTexte, couleurTitre)` — l'argumentaire, **écrit une seule fois** pour le colophon et le plat 4 de la couverture imprimeur. Deux règles dures : (1) **aucun chiffre en dur** sur le différentiel d'exercices — c'est un paramètre de build (`tirages`, `EXERCICES_VISIBLES`) qui a bougé deux fois en une journée, un chiffre figé serait faux au prochain build sur la page qui sert d'argument de vente ; (2) **aucune revendication de supériorité** sur les éditeurs — le livre du professeur est gratuit chez les cinq grands sur adresse académique, le positionnement retenu est l'**accès** (contractuels, soutien, cours particuliers, IEF). Voir `docs/manuels/argumentaire-edition-professeur.md`
  - Page « Réponses aux exercices » → **« Récapitulatif des réponses »** en édition professeur : tous les exercices y sont déjà corrigés en place, la page ferait doublon. Conservée mais requalifiée — un récapitulatif compact pour corriger au tableau sans feuilleter. L'édition élève garde la sienne, mot pour mot, c'est là qu'elle sert
- **Marqueur d'édition, défaut 20** (2026-09-12) : les deux PDF partageaient titre et maquette. `ancyfoot[LE,RO]{Édition du professeur}` en pied de **toutes** les pages (côté extérieur, le folio central est déjà pris ; gris #6C757D sur papier #F8F9FA = 4,7:1, au-dessus de AA) ; onglet orange en réserve blanche sur le plat 1 (5,2:1 — l'orange en texte sur le papier ne donnerait que 2,7:1) ; mention abrégée sur le dos ; argumentaire propre sur le plat 4
- `longtable` chargé dans `preambule()` pour le tableau de progression de `prof.js` (un `tabular` de deux pages est insécable et ne peut jamais commencer en cours de page)
- **Couche professeur v2** (2026-09-07) : boîte `sperreur` (teinte du piège assombrie pour un titre blanc lisible) et paquet `array` dans `preambule()` ; `liminaires()` insère `config.progression` (chapitre « Progression annuelle ») avant la table des matières et un paragraphe « Dans l'édition du professeur » dans le mode d'emploi ; `finOuvrage()` ouvre le back-matter sur `config.annexeProf` (grille de suivi de classe)
- `preambule()` charge `hyperref` en dernier avec `[hidelinks]` (couleur des liens gérée à la main via `\color`, pas par hyperref)
- `liminaires()` — la page de copyright se cale **en pied** (un seul `\vspace*{\fill}`, avant le pavé) ; en avoir un de chaque côté la centrait verticalement au milieu d'une page par ailleurs vide. Table des matières limitée aux chapitres (`\setcounter{tocdepth}{0}`) : les 9 sous-parties par chapitre (identiques d'un chapitre à l'autre) faisaient passer la table de 3 à 13 pages
- Page « Comment utiliser ce manuel » : les couleurs citées (turquoise/gris ardoise/jaune/rouge) doivent correspondre EXACTEMENT au `colframe` des tcolorbox `spdef/spexemple/spretenir/sppiege` du préambule — les quatre étaient fausses jusqu'au 2026-08-17 (bleu/vert/rouge/jaune annoncés, turquoise/ardoise/jaune/rouge réels)
- `finOuvrage()` : quatrième de couverture avec trame sombre (`turquoise!15!ardoise`, jamais `turquoise!12` seul qui se mélange au BLANC par défaut), QR code (`config.qrCode`) + lien cliquable vers sparklearning.fr, logo en colophon
- **Ligne ISBN supprimée** (2026-08-16) : le placeholder « à attribuer » s'imprimait dans le livre. Non requis pour un PDF vendu en direct ; à réintroduire seulement le jour d'une distribution en librairie
- La page de copyright et l'`accroche` de `build.js` ne portent **plus de revendication de couverture** (« intégralité du programme », « Tout le programme ») : le croisement du 2026-08-16 avec `docs/programmes-maths.md` a montré qu'il manque « Fonctions affines et linéaires » (3e). Ne remonter la formule qu'une fois le chapitre écrit
- `Dépôt légal : {annee}` **affirme** un dépôt fait : vérifier avant diffusion, sinon retirer la ligne

## scripts/manuel/build.js
Orchestration : extraction, figures, chapitres, deux passes de gouttière, garde-fous.
- `construire(cle, {professeur, graine})` — produit le PDF et `etat-*.json`
- `OUVRAGES` — les sept ouvrages niveau × matière ; `IMAGE_COLLEGE_MATHS` (même fichier) est branché sur les cinq ouvrages collège (`college-maths` + les variantes `-6e/-5e/-4e/-3e` — décision utilisateur du 2026-08-17, une seule illustration pour toute la collection) ; les six ouvrages lycée/BTS n'en ont pas encore (retombent sur l'aplat `ardoise` dans `platUn()`)
- `imagePath(relatif)` — chemin absolu barres obliques normalisées vers `images/manuels/`, `null` si le fichier n'existe pas (dégradation silencieuse dans `ouvrage.js`)
- `LOGO_ICONE` / `QR_CODE` — logo réel et QR vers sparklearning.fr, injectés dans `config` pour tous les ouvrages (pas seulement college-maths)
- `LIVRABLES` (`Manuel scolaire/PDF/`) — dossier plat, un PDF par édition (« Mathématiques Sixième - Édition élève.pdf »...), sans les `.tex`/`.log`/figures de travail. Rempli uniquement quand `blocages` est vide : jamais de brouillon bloqué copié dedans
- Usage : `node scripts/manuel/build.js college-maths [--prof]` ; `--liste` pour les clés
- `--prototype <module>` (2026-09-07) — l'édition professeur réduite à UN chapitre, avec le front-matter complet (dont la progression de tout l'ouvrage) et les annexes, une seule passe, sans couverture ni copie dans les livrables : `college-maths-prof-prototype.pdf`. Sert à juger la maquette professeur v2 avant de rédiger les 48 fiches
- En édition professeur, `construire()` charge la fiche de chaque module (`P.chargerProf`), la valide contre le module réel et le référentiel (`P.validerProf`, une fiche refusée bloque le build), calcule la progression (`P.planifier`) et passe `prof`/`referentiel` à `composerChapitre`

- **`tirages = 42` + `repetitionsMax = 3`** (2026-09-13, était `18` pour les deux éditions depuis le 2026-09-12, et `prof ? 18 : 3` avant) : le partage 12 visibles / 6 en banque était un compromis pour ne pas alourdir l'édition élève — il n'a plus lieu d'être depuis que **l'édition professeur est la cible**. L'élève garde ses 12 premiers tirages (`EXERCICES_VISIBLES`, inchangé, donc les deux éditions restent superposables : l'exercice 7 de l'un est l'exercice 7 de l'autre) ; **tout le reste part dans la banque du professeur**.
  - 42 n'est **pas** le nombre d'énoncés : c'est un plafond haut que la combinatoire réelle du générateur rabote chapitre par chapitre via `repetitionsMax` (`extract.js`). Mesure du 2026-09-13 sur la graine du livre — banque obtenue : périmètres-aires / division / figures-géométriques / volumes **30**, addition-soustraction **27**, fractions / décimaux / symétrie **24**, multiplication **18**, angles **15**. Soit **252 énoncés de banque**, 25,2 par chapitre.
  - Pourquoi pas 60 : au-delà, seuls les quatre chapitres les plus riches progressent, et uniquement en répétant des moules déjà vus trois fois. `6e-angles` ne connaît que **9 moules** — lui donner 30 suppléments, ce serait imprimer sept fois le même exercice
- Pagination `college-maths-6e` au 2026-09-13 : **prof 279 p.** (était 209), **élève 158 p.** (inchangé — la banque ne l'atteint pas)
## images/manuels/
Assets des manuels, hors pipeline TikZ habituel (seule exception raster de tout l'ouvrage).
- `logo-icone.png` — logo Spark Learning recadré (icône seule, sans le mot-symbole), fond noir rendu transparent par seuillage, découpé depuis `images/Logo_noir.jpeg`
- `fond-college-maths.jpg` — illustration de couverture générée (skill `generer-image`), cadrée au ratio exact 170:244mm, 49 Ko
- `qr-sparklearning.png` — QR vers sparklearning.fr, généré via le module Python `qrcode`, coloré `ardoise` sur `papier` (pas noir pur) pour rester dans la charte

## scripts/manuel/progression.js
Régénère `docs/manuels/PROGRESSION.md` par scan (jamais édité à la main).
- `construireTableau()` — compare les modules de `js/data/` aux chapitres déjà intégrés

## scripts/manuel/couverture-v3.js
Générateur autonome de couvertures « proposition v3 » (une couleur par année) — n'écrit rien dans le pipeline de production, sort dans `Manuel scolaire/couvertures-propositions/`.
- `ANNEE` / `CURSUS` — 9 teintes d'année (toutes ≥ 4,5:1) et cursus par matière
- `plat(ouvrage)` — compose le LaTeX d'une couverture 170×244 mm
- `motifMaths()` / `motifPhysique()` — motifs TikZ vectoriels, un par matière
- `volumetrie(cle, prof)` — lit chapitres et pages dans `etat-prof.json` ou `etat-eleve.json` **selon l'édition** (2026-09-12) : la couverture professeur annonçait « 121 pages », la pagination de l'élève, pour un volume qui en fait 166 — le chiffre faux que cette fonction devait justement empêcher
- **`--prof`** (2026-09-12) : les mêmes plats en édition du professeur (onglet orange, mascotte déplacée à gauche, suffixe `-prof` sur la clé de sortie). Un drapeau plutôt que 19 entrées de plus dans `OUVRAGES` — deux listes en parallèle finissent toujours par diverger. Le marqueur est repris **à l'identique** de `platUn()` dans `ouvrage.js`
- `compiler(cle)` — deux passes pdflatex + garde-fou anti-PDF-vide (< 40 ko)
- `planche(cles)` / `lisezMoi(cles)` — planche de contact et note de lecture

## js/data/6e/index.js
Manifest 6e — liste et ordre des modules (chargés via `<script>` dans index.html).

## js/data/6e/6e-*.js *(10 modules)*
Modules pédagogiques Maths 6e : `6e-addition-soustraction`, `6e-angles`, `6e-division`, `6e-figures-geometriques`, `6e-fractions`, `6e-multiplication`, `6e-nombres-decimaux`, `6e-perimetres-aires`, `6e-symetrie-axiale`, `6e-volumes`.
- **Révision pédagogique du 2026-09-12** (audit de l'édition professeur), sur les blocs `evaluation` et le champ `physics` uniquement :
  - **Hors-programme retiré de l'évaluation** : la Q3 de `6e-fractions` exigeait le **produit en croix**, notion de cycle 4, dans le devoir noté. Elle se résout désormais par mise au même dénominateur (méthode de sixième), à compétence et barème constants. Le produit en croix reste dans le cours comme prolongement signalé (`recap`, `formulas`, note prof) — il est enseignable, pas exigible. Aucune autre évaluation du corpus 6e ne l'imposait (vérifié par `grep croix`)
  - **Onze énoncés d'évaluation réécrits** pour que la compétence déclarée dans la fiche prof corresponde à ce que la question demande vraiment : « communiquer » = juger une explication rédigée (les quatre options portent alors le **même résultat juste**, seule la formulation les sépare), « chercher » = trouver un exemple ou procéder par essais. L'étiquette suit l'énoncé, jamais l'inverse
  - **`physics` (imprimé « Prolongement possible » par `chapitre.js`)** : `6e-fractions` annonçait « fraction massique, fraction volumique, rapport de grandeurs en chimie » et `6e-angles` « Snell-Descartes, décomposition de forces » — deux reliquats de génération, de niveau lycée. Remplacés par la proportionnalité de 5e et les angles alternes-internes du cycle 4
  - **`6e-fractions`, variante « comparer » de `generate()`** : la consigne « Réponds par le numérateur de la fraction gagnante » était un artefact du format quiz web (il fallait un nombre à saisir). Sur papier, un numérateur isolé ne veut rien dire. L'énoncé demande maintenant une **phrase de conclusion**, le numérateur devenant la valeur de **contrôle** à reporter — `answer` reste numérique (le site corrige automatiquement, et la page « Réponses aux exercices » imprime ce nombre), et les deux dernières étapes du corrigé le disent

- **Réécriture des « Découvrir » du 2026-09-13** (champ `cours.intro` uniquement, aucune figure ni exercice touché) : l'avant-propos promettait que « chaque chapitre s'ouvre sur une question concrète avant d'introduire le moindre symbole ». La promesse avait dû être **retirée** (commentaire dans `ouvrage.js`) parce que **9 chapitres sur 10 ouvraient sur une définition** — `6e-fractions` posait $a/b$ dès la première phrase. Les 9 intros concernées sont réécrites ; la promesse peut remonter dans l'avant-propos.
  - **Modèle suivi** : `6e-figures-geometriques`, seul chapitre qui tenait déjà la promesse, laissé **inchangé**. Ce qui le fait fonctionner et qu'on a répliqué : il ne décrit pas une situation, il nomme un **geste réellement accompli** (le maçon qui tend un fil, la pointe du compas qu'on plante) puis **identifie ce geste à l'objet mathématique dans la même phrase**. L'abstraction est présentée comme la forme épurée d'un acte concret, jamais comme un décor
  - **Test de validité d'une entrée en matière** (généralisable aux ~20 autres manuels) : *si l'on peut répondre à la question d'entrée sans la notion du chapitre, la question est mal choisie*. D'où le partage qui **ne tombe pas juste** (fractions), la porte dont **aucune longueur** ne décrit l'ouverture (angles), les deux récipients que **l'œil ne sait pas départager** (volumes)
  - **Chapitres techniques : pas d'anecdote plaquée.** Pour `6e-nombres-decimaux`, `6e-addition-soustraction` et `6e-multiplication`, l'entrée part de la **difficulté réelle** et non d'une scène de la vie quotidienne — mesurer entre deux graduations, l'alignement des virgules, le placement de la virgule dans un produit. Une entrée **historique** ou une **erreur constatée** vaut mieux qu'une mise en situation décorative, qui est le travers inverse et le pire des deux
  - **Une erreur montrée doit être une vraie erreur** : dans `6e-addition-soustraction`, le total faux annoncé ($50$ € au lieu de $16{,}25$ €) est **réellement** celui que produit la faute décrite ($125 + 375$). Un résultat faux inventé pour les besoins du récit se repère et décrédibilise le chapitre
  - **Aucun trou pédagogique** : le contenu notionnel des anciennes intros n'est pas supprimé mais **déplacé après** la situation d'entrée, ou laissé à la section « Définitions » qui suit immédiatement et qui portait déjà tout le formalisme. Seules les formules de coordonnées de `6e-symetrie-axiale`, très denses en ouverture, quittent l'intro — elles restent dans `definitions` et dans la méthode
  - **Impact maquette nul** : 279 pages avant comme après, 0 Overfull, 0 erreur LaTeX (édition professeur)
- **Enrichissement en schémas secondaires du 2026-09-12** (bloc `cours` uniquement) : les 10 chapitres portaient **une** figure chacun, ce qui est pauvre pour un niveau où la géométrie et les grandeurs s'apprennent par l'œil. Chacun porte désormais `cours.diagram` (principal, inchangé) **et** `cours.diagrams[]` (3 schémas secondaires) — soit **40 figures** au lieu de 10. Le mécanisme existait déjà de bout en bout (`figures.js` → `.secondaires`, `chapitre.js` → section « Schéma » unique, `coursDiagramList()` côté site) et n'a pas été modifié
  - **Une figure par malentendu, pas une figure par formule** : une formule se lit dans l'encadré, un malentendu ne se dissipe qu'à l'œil. D'où le choix des sujets — distinction aire/périmètre à périmètre égal, empilement qui *fabrique* le litre, lecture du rapporteur et piège de ses deux graduations, partage avec reste, `1{,}9 > 1{,}12`, alignement des virgules
  - **Conventions de composition** (à reprendre pour les autres niveaux, elles sont commentées à l'endroit concerné dans chaque SVG) : figure de **comparaison** → même ligne de base et même échelle, la grandeur étudiée est la seule différence visible ; figure **piège** → la forme juste en premier et en teinte d'accent, l'erreur dessous en trait tireté, **sans jamais dégrader sa lisibilité** (un contre-exemple illisible n'enseigne rien) ; figure **pas à pas** → vignettes de gauche à droite, chacune rejoue la précédente et n'ajoute qu'un élément ; **hiérarchie** → ce qui explique (quadrillage, pavage) reste en `grid-line` et ne concurrence jamais l'objet, en `frame-line` ; un **groupement** se dessine comme une forme fermée, pas par un simple espacement
  - **Pièges du convertisseur SVG→TikZ payés sur ce lot** (voir `svg2tikz.js`) : une **lettre élidée** devant apostrophe dans un `<text>` (« l'autre », « c'est ») est prise pour une variable et sort en italique math coupée du mot — reformuler sans élision **dans les étiquettes SVG seulement** (le texte courant n'est pas concerné) ; même piège pour une **minuscule isolée privée de son accent** (« a éviter » → `$a$ eviter`), donc les `<text>` s'écrivent **avec** leurs accents, seuls les `<desc>` s'en passent ; une étiquette **tout en majuscules** se fracture en îlots math ; `plot-point` impose un rayon **fixe de 1,7 pt** quel que soit le `r` du SVG (bon pour marquer une position, à proscrire dès que le disque représente un objet qui a une taille — utiliser alors un cercle à `stroke` explicite) ; `optionsTrace` ne pose **qu'une pointe de flèche par trait** (`marker-end` **ou** `marker-start`), une droite fléchée aux deux bouts se dessine en `<path>` ; enfin le `viewBox` doit **épouser le dessin**, `\useasboundingbox` figeant la boîte sur le viewBox entier — toute bande vide devient du blanc payé en pages
  - Pagination : édition professeur **166 → 207 p.**, édition élève **121 → 158 p.**, les deux à **0 erreur LaTeX et 0 Overfull**, **0 figure bloquée** (les 40 portent la provenance `svg-exact`)

## js/data/5e/index.js
Manifest 5e.

## js/data/5e/5e-*.js + reperage-graphique.js *(14 modules)*
Modules Maths 5e : relatifs, fractions, proportionnalité, expressions littérales, probabilités, statistiques, géométrie, volumes. (`proportionnalite.js`, doublon de moindre qualité de `5e-proportionnalite.js`, supprimé le 2026-07-31 — retiré de `js/loader.js` DATA_FILES/MODULE_INDEX et de `sitemap.xml`.)
- **Portés au niveau de référence les 2026-09-13** (chantier `manuels-5e`, cf. `docs/manuels/cahier-des-charges-generalisation.md`) :
  - `cours.diagrams[]` sur **les 14 modules** (42 schémas secondaires, 3 par chapitre), là où seuls parallélogrammes, triangles et angles en avaient. Règle : *une figure par malentendu, pas une figure par formule*. Toutes les proportions vérifiées par le calcul, jamais à l'œil — c'est ainsi qu'ont été trouvés un contre-exemple placé à 64,41 de O quand OA valait 93,74 (symétrie), et deux points marqués hors de la droite qui les portait (repérage)
  - **premières lignes de `solution[]`** : elles servent d'intertitre à la banque du professeur (`titreDeGroupe`, `scripts/manuel/chapitre.js`), nombres et formules retirés. Une formule seule y donnait un titre vide ou mutilé (« Le plus grand côté mesure cm »). Elles nomment désormais la **méthode**
  - **générateurs** : la mesure utile n'est pas le nombre de *moules* (le texte, nombres masqués) mais le nombre de **tâches** — `pick()` faisait varier le décor sans changer la question, si bien que six habillages d'une même tâche passaient sous le plafond `repetitionsMax`. Quatre chapitres tiraient tout d'UNE tâche : `reperage-graphique` (banque **vide**, 0 supplément), `symetrie-centrale`, `expressions-litterales`, `fractions-operations`. Portés à 4 tâches chacun ; banque de l'ouvrage 291 → 369 énoncés, sans quota uniforme (priorités reste à 9, proportionnalité à 12)
  - **11 « Découvrir » réécrits** sur 14 : ils ouvraient sur une définition. Trois conservés (parallélogrammes, symétrie centrale, expressions littérales) partaient déjà d'une situation concrète

## js/data/prof/5e/*.prof.js *(14 fiches)*
Fiches professeur de 5e, écrites le 2026-09-13, jamais chargées par le site (seul `scripts/manuel/prof.js` les lit). Rangs conseillés 1→14 sans trou ni doublon ; 70 questions d'évaluation étiquetées, les six compétences présentes, aucune au-delà de 35 % (calculer 34,3 %, raisonner 21,4 %, représenter 12,9 %, communiquer 11,4 %, chercher et modéliser 10 %).
- **Limite connue du pipeline, non corrigée** : ces fiches déclarent des prérequis vers des chapitres de **6e**, ce qui est pédagogiquement juste et que `validerPrerequis` refuse dans l'ouvrage de cycle `college-maths` (« le tableau de progression est par niveau »). Conséquence : `college-maths-5e` compile, `college-maths` échoue sur 15 refus. Défaut **préexistant** au chantier des figures, vérifié sur le commit `d26da7c`

## js/data/4e/index.js
Manifest 4e.

## js/data/4e/*.js *(11 modules)*
Modules Maths 4e : puissances, calcul algébrique, pythagore, cosinus, translations, volumes, statistiques, probabilités, etc.

## js/data/3e/index.js
Manifest 3e.

## js/data/3e/*.js *(13 modules)*
Modules Maths 3e : trigonométrie, systèmes, Thalès, arithmétique, identités remarquables, équations-inéquations, fonctions, **fonctions affines et linéaires**, homothéties, sections solides, volumes, stats-probas, algorithmique.
- `3e-fonctions-affines.js` — écrit le 2026-08-16. Le croisement programme × `js/data` × chapitres composés avait montré que la notion (centrale au brevet : coefficient directeur, ordonnée à l'origine, droite, lien avec la proportionnalité) n'existait **nulle part** dans le corpus, alors que `docs/programmes-maths.md` la donnait pour faite. Déclaré dans `js/data/3e/index.js`, `js/loader.js` (`DATA_FILES` + `MODULE_INDEX`), `contenu.md`.

## js/data/lycee-2nde/index.js
Manifest Lycée 2nde.

## js/data/lycee-2nde/*.js *(14 modules)*
Modules Maths 2nde : vecteurs, fonctions affines, ensembles de nombres, calcul algébrique, équations-inéquations, généralités sur les fonctions, fonctions de référence, repérage plan, droites-systèmes, géométrie plane, statistiques, probabilités, échantillonnage, algorithmique. **Deux modules sans préfixe de niveau** : `fonctions-affines.js` et `vecteurs.js` (ne pas renommer, `js/loader.js` les référence ainsi).

**Portés au niveau du manuel de référence les 2026-09-13** (ouvrage `lycee-maths-2nde`, premier ouvrage de LYCÉE traité) : sections « Découvrir » réécrites, banques d'exercices élargies, et **40 schémas secondaires** dans `cours.diagrams[]`. Trois par chapitre, sauf `2nde-calcul-algebrique` et `2nde-ensembles-nombres` qui n'en portent que **deux, délibérément** — leur troisième erreur de fiche est soit déjà traitée par la figure principale du chapitre (le carré de côté $(x+4)$ découpé en aires, pour le double produit), soit non dessinable (un décimal périodique est rationnel : cela se tranche par un calcul, et une figure y serait décorative). Des tests figent ces deux choix pour qu'ils ne soient pas pris, à la vague suivante, pour un travail interrompu.

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

## js/data/physique-4e/index.js
Manifest Physique-Chimie 4e (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-4e/physique-4e-*.js *(6 modules, complet)*
Modules Physique-Chimie 4e : atomes et molécules, transformations chimiques, vitesse (distance/temps/mouvement), intensité et tension électrique, lois des circuits (série/dérivation), lumière (propagation, couleur).

## js/data/physique-3e/index.js
Manifest Physique-Chimie 3e (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-3e/physique-3e-*.js *(6 modules, complet)*
Modules Physique-Chimie 3e : structure de l'atome et ions, réactions chimiques (équilibrage), énergie cinétique et potentielle, résistance électrique et loi d'Ohm, puissance et énergie électrique, gravitation universelle.

## js/data/physique-2nde/index.js
Manifest Physique-Chimie 2nde (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-2nde/physique-2nde-*.js *(10 modules, complet)*
Modules Physique-Chimie 2nde : description d'un mouvement, forces (action mécanique), principe d'inertie, corps purs et mélanges, solutions aqueuses (concentration), transformation physique/chimique, modèle de l'atome, signaux et capteurs, émission/perception du son, lumière (réfraction, spectre).

## js/data/physique-1re/index.js
Manifest Physique-Chimie 1re (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-1re/physique-1re-*.js *(11 modules, complet)*
Modules Physique-Chimie 1re : champ gravitationnel, champ électrostatique, cinématique, lois de Newton, travail d'une force et énergie, réaction chimique (avancement/stœchiométrie), titrage, structure des entités chimiques (Lewis), ondes mécaniques, lumière (modèle ondulatoire), circuits électriques (lois de Kirchhoff).

## js/data/physique-tle/index.js
Manifest Physique-Chimie Terminale (vide, chargement direct via `DATA_FILES` dans `js/loader.js`).

## js/data/physique-tle/physique-tle-*.js *(11 modules, complet)*
Modules Physique-Chimie Tle : mouvement dans un champ uniforme, satellites et planètes, dynamique newtonienne, énergie mécanique et conservation, thermodynamique (1er principe), évolution spontanée d'un système chimique, acides et bases (pH, Ka), oxydoréduction et piles, ondes et signaux (interférences/diffraction), physique quantique (dualité, niveaux d'énergie), radioactivité et réactions nucléaires.

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

## js/components/manuelPromo.js
Encart « ce chapitre en manuel » en bas de l'onglet Cours : met en avant le manuel de l'ANNÉE du module, avec le pack du cycle en montée en gamme secondaire.
- `manuelHandlesPour(mod)` — appariement **déterministe** module → handles produit, dérivé du PRÉFIXE de `mod.id` (`6e-`, `physique-tle-`, `bts-prep-`…). N'utilise PAS `mod.level`, qui ne vaut que 1/2/3 (Collège/Lycée/BTS) et ne distingue pas la Sixième de la Troisième. `MANUEL_ANNEES` est ordonné du plus spécifique au plus général : `bts-prep-` DOIT précéder `bts-`, sinon la remise à niveau est appariée au manuel BTS (même piège que les paliers de `labo-duo.liquid`)
- `manuelEdition()` — enseignant connecté → `edition-professeur`, sinon `edition-eleve` ; change le handle ET le texte de l'encart
- `manuelFetchProduit(handle)` — prix/dispo/couverture en direct via l'endpoint **public** `boutique.sparklearning.fr/products/<handle>.js`. Choisi plutôt que la Storefront API : cette dernière imposerait de créer une app Shopify et d'exposer un token dans le front, alors que l'endpoint `.js` répond `access-control-allow-origin: *` sans aucune authentification. Ne rejette jamais : réseau coupé, 404, produit indisponible ou JSON invalide renvoient tous `null`
- `renderManuelPromoSlot(mod)` — rend un conteneur VIDE (`.manuel-promo-slot`), jamais un squelette optimiste
- `initManuelPromo()` — remplit le slot en asynchrone ; appelée depuis `js/app.js` après `render()` **et** dans `switchTab()` (le changement d'onglet réécrit `.tab-content` sans repasser par `render()`)
- **Garde-fou central** : sans confirmation Shopify que le produit existe ET qu'il est disponible, aucun encart n'est rendu. Un manuel archivé fait donc disparaître l'encart au lieu d'envoyer l'élève sur un 404 — cas rencontré réellement le 2026-08-30, où les 38 produits se sont retrouvés archivés
- Le manuel de l'année est obligatoire : sans lui, pas d'encart du tout (proposer le pack seul enverrait un élève de 6e vers un produit à 24,99 € alors que celui qui le concerne à 9,99 € est indisponible)
- **`si-*` et `fed-*` n'ont volontairement aucune règle** : aucun produit correspondant n'existe en boutique. Les deux PDF « Sciences de l'ingénieur BTS » sont produits localement (`Manuel scolaire/PDF/`) mais NON publiés sur Shopify — le jour où ils le seront, ajouter la règle `si-bts-` suffit
- Cache `sessionStorage` + mémoire, TTL 1 h, clé `sparkManuel:<handle>` ; les absences (404) sont aussi mises en cache pour ne pas refaire la requête sur chaque module de la même année. Dégradation silencieuse si `sessionStorage` est indisponible (navigation privée)
- Styles : `css/styles.css` (`.manuel-promo*`), masqué en `@media print` — une promotion commerciale n'a pas sa place sur une fiche imprimée
- Retiré du HTML pré-rendu (`.manuel-promo-slot` dans la liste de nettoyage de `scripts/prerender.js`) : rempli en asynchrone, il serait capturé ou non selon le timing de la réponse Shopify, rendant le pré-rendu non déterministe

## js/components/renderCours.js
Rendu HTML de l'onglet Cours d'un module (écran, pas impression).
- Se termine par `renderManuelPromoSlot(mod)` (voir `js/components/manuelPromo.js`) : conteneur vide de l'encart « ce chapitre en manuel », rempli en asynchrone après le rendu
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

---

## Shopify/ (boutique — hors git, `.gitignore`)
Copie de travail du thème **Horizon** de `boutique.sparklearning.fr` (thème live `188654780796`).
Synchronisation par la CLI Shopify : `shopify theme pull|push --theme <id>` depuis ce dossier.
### Direction « Laboratoire » — étendue aux 9 gabarits (2026-08-30)
Les 9 templates rendent désormais des sections maison préfixées `labo-`, toutes bâties sur les mêmes jetons.
- `snippets/charte-spark-laboratoire.liquid` — **jetons partagés** (`--sl-encre`, `--sl-accent`, `--sl-vite`…) + le conteneur `.sl-wrap`. Un seul endroit à corriger : c'est ce qui empêche les deux systèmes chromatiques relevés à l'audit de réapparaître à la neuvième copie. Accent `#257E6D` = turquoise de charte assombri, **4,65:1** sur papier et **4,90:1** sous blanc (le turquoise brut `#48c9b0` ne donne que **1,94:1**, très en dessous de AA)
- `snippets/labo-carte-produit.liquid` + `labo-carte-styles.liquid` — carte produit unique (accueil, collection, recherche). Niveau/matière/édition lus dans les **tags** (`collège`, `mathématiques`, `édition élève`…), jamais saisis à la main. Coupe le suffixe « - Édition élève » du titre, déjà porté par sa propre ligne
- `templates/index.json` — accueil : hero mascottes → réassurance 4 cartes → rayons **par matière** → packs → 3 étapes (fond ardoise) → à propos → FAQ. Les 7 sections d'origine conservées, textes repris mot pour mot
- `templates/product.json` → `labo-produit` — fiche : couverture collante, prix, achat, garanties, description. **Aucune mascotte** (elle détournerait de l'achat). Liseuse « Feuilleter un extrait » en `<dialog>` natif ; les pages d'aperçu sont reconnues au **nom de fichier** (`-sommaire`, `-methode`) car la galerie contient aussi l'ancienne couverture en image 2
- `snippets/labo-duo.liquid` — **bloc « duo » VISUEL** (2026-08-30) : les DEUX couvertures côte à côte séparées d'un « + », le total barré → total remisé, « Économisez X € » (en euros : un pourcentage demande un calcul sur un total qu'on n'a pas), et un bouton **« Ajouter les deux au panier »** qui poste les 2 variantes en un seul `/cart/add.js` puis redirige vers `/cart`. Chaîne vérifiée de bout en bout : 1 clic → 2 articles → règle « Duo » appliquée → physique à 5,00 € → total 14,99 €. Piège d'arrondi : `999 | divided_by: 2` = 499 en division entière Liquid alors que Shopify facture 500 — d'où le `| plus: 1` avant la division, sans quoi la carte annonçait un centime de moins que le panier. Sur le repli pack, PAS de bouton d'ajout groupé (le pack contient déjà le manuel consulté : ce serait payer deux fois) mais un lien « Voir le pack ».
- `snippets/labo-duo.liquid` — logique d'appariement : propose la matière complémentaire du MÊME niveau et de la MÊME édition, apparié par les tags. Le −50 % n'est affiché que si une règle Shopify couvre vraiment le couple, et seulement jusqu'au 30/09/2026 (`promo_active`) — après quoi le jumeau reste suggéré au prix plein. **16 règles « Duo » actives** (8 maths→physique d'origine + 8 physique→maths créées le 2026-08-30), toutes `usesPerOrderLimit: 1`. Piège : « Mathématiques Remise à niveau » porte À LA FOIS `remise à niveau` et `bts` — la liste des paliers va donc du PLUS SPÉCIFIQUE au plus général, sinon ce manuel était apparié à Physique BTS et annonçait une remise que le panier n'aurait pas appliquée. Physique-chimie commençant en 4e, les fiches 6e/5e reçoivent le pack du cycle en repli, sans mention de remise
- `templates/collection.json` → `labo-collection` — rayon : mascotte **de la matière** déduite du handle, sans bulle sur les rayons BTS (public adulte) ; `{% paginate %}` par 24
- `templates/cart.json` → `labo-panier` — Sparky **uniquement sur le panier vide** ; note « aucun frais de livraison » sous le total
- `templates/404.json` → `labo-404` — Sparky, 3 portes de sortie et un champ de recherche ; ton non punitif
- `templates/search.json` → `labo-recherche` — champ re-rendu avec la requête ; sans résultat, 3 rayons de repli. Pas de mascotte
- `templates/page.json` → `labo-page` — prose en colonne de 68ch ; styles sur `.lpg__contenu > *` (le contenu vient de l'éditeur riche, sans classes possibles)
- `templates/page.contact.json` → `labo-contact` — 2 réponses fréquentes avant le formulaire natif `form 'contact'`
- `templates/list-collections.json` → `labo-rayons-liste` — rayons groupés par matière ; exclut les collections techniques `frontpage`/`all`
- **Piège Liquid** : `{# … #}` n'est PAS un commentaire Liquid (c'est du Jinja) — il s'affiche en clair et casse les grilles. Utiliser `{%- comment -%}`
- **Piège Liquid** : `alt: a | append: b` applique le filtre à l'argument du tag, pas à la variable — composer l'alt dans un `assign` avant le tag
- **Piège Liquid** : `and`/`or` s'évaluent de droite à gauche, sans priorité — décomposer les conditions mixtes en `if` imbriqués
- `sections/header-group.json` — barre d'annonce + menu `main-menu` (Mathématiques / Physique-Chimie à sous-menus, Packs, Comment ça marche, Contact)
- `sections/footer-group.json` — 3 colonnes : marque + contact, menu `footer`, newsletter + moyens de paiement ; « Propulsé par Shopify » désactivé
- `blocks/buy-buttons.liquid` — **modifié** : réglage `show_quantity` ajouté (masque le sélecteur de quantité sur les produits numériques)
- `snippets/product-media.liquid` — **modifié** : la première image passe en `loading="eager"` (elle porte déjà `fetchpriority="high"`)
- `assets/base.css` — **modifié** : blocs ajoutés en fin de fichier — titre de menu du pied de page, `-webkit-line-clamp: 3` sur les titres de carte produit (sinon « Édition élève / professeur » saute sur mobile), et hiérarchie du menu mobile (matières en intertitre 12px, niveaux à 16px, tiroir pleine largeur via `--drawer-width`)
- `snippets/cart-products.liquid` — **modifié** : le sélecteur de quantité n'est rendu que si `item.requires_shipping` (un PDF ne s'achète qu'une fois)
- `sections/prototype-a-papier.liquid` — **prototype, non installé** : accueil « Papier », hero typographique sans image, fond crème `#FAF8F4`, serif, cartes sans ombre. CSS autonome dans son bloc `stylesheet`, liseuse `<dialog>` native en 24 lignes de JS
- `sections/prototype-b-laboratoire.liquid` — **prototype, non installé** : accueil « Laboratoire », split-screen sur `#F9FAFB`, planche de 3 couvertures, repère millimétré en `linear-gradient` (zéro image), 3 chiffres de preuve. Même liseuse que le prototype A
- `templates/page.prototype-a.json` / `page.prototype-b.json` — instancient les deux prototypes en pages séparées, sans toucher à `index.json`
- **Thème d'aperçu `#188939305340` « APERCU — prototypes (ne pas publier) »** : porte la refonte « Laboratoire » des 9 gabarits, vérifiée page par page en captures réelles (le cookie se pose via `/?preview_theme_id=…`). **Live `#188654780796` inchangé.**
- **Thème d'essai `#188938748284` « Mascottes — Sparky & Lumen (essai) »**, non publié : porte les sections mascottes et les 2 prototypes. Live inchangé (`#188654780796`). Pages d'essai : `/pages/essai-accueil-mascottes`, `/pages/essai-prototype-a`, `/pages/essai-prototype-b`
- **Piège Horizon** : la classe `page-width` n'existe pas (les utilitaires sont `page-width-normal|wide|narrow`, qui ne posent que des variables) — une section qui s'y fie se colle au bord gauche. Utiliser son propre conteneur.
- **Piège Horizon** : `html` est en `height:100dvh; overflow:hidden` au-dessus de 990 px, le défilement étant délégué à `.page-wrapper`. Conséquence : les images en `loading="lazy"` ne se déclenchent jamais, et `fullPage` de Puppeteer s'arrête à la hauteur de l'écran.
- `snippets/mascotte.liquid` — affiche Sparky (renard) ou Lumen (loup) avec une bulle. `loading="eager"` obligatoire (voir le piège ci-dessus). **Répartition canonique : PAR MATIÈRE, jamais par niveau** — Sparky = mathématiques, Lumen = physique-chimie, du collège au BTS. Source qui fait autorité : `mascotteDe()` dans `scripts/manuel/ouvrage.js`, qui teste `/Physique/i` sur la **collection**. (Une ancienne règle par niveau — Sparky = collège/lycée, Lumen = BTS — a existé jusqu'au 2026-08-29 : elle est périmée, la rétablir ferait diverger la boutique des couvertures des 38 manuels.) Les mascottes **tutoient**, le reste de la boutique **vouvoie** : écart délibéré, elles sont des voix et non la marque
- `sections/hero-mascottes.liquid` — **installé sur l'accueil** : hero avec les deux mascottes, aucune image de fond, aucune hauteur imposée, transitions à 160 ms
- `sections/rayons-guides.liquid` — **installé sur l'accueil** : « Choisissez votre rayon » en 2 groupes **par matière** (Sparky ouvre les 3 rayons de maths, Lumen les 3 de physique) ; lit les vrais `all_products_count` ; réglage `collection_parente` + `lien_tout` pour le lien « Tout voir » en retrait vers la collection de la matière
- `templates/page.accueil-mascottes.json` — instancie les deux sections avec les handles réels (`mathematiques-college`, `mathematiques-bts`…), sans toucher à `index.json`
- `assets/{sparky,lumen}-{salue,presente}.webp` + `-reflechit-sm.webp` — 6 sprites détourés sur la boîte alpha, 292 ko au total (contre ~2 Mo en PNG source)
- `locales/fr.json` — **modifié** : `shipping_policy*` et `taxes_included*` réécrits pour un produit numérique (« Prix TTC. Aucun frais de livraison… »)

Les fichiers marqués **modifié** sortent du thème d'origine : à reporter en cas de mise à jour d'Horizon.

## Manuel scolaire/PDF/
Les 38 PDF livrés à la boutique, nommés exactement comme les titres produits (aux parenthèses de cycle près :
le produit « Mathématiques Collège (6e-3e) » correspond au fichier « Mathématiques Collège »).
Servent de source aux aperçus intérieurs des fiches produit (extraction par `pdftotext` + `pdftoppm`, MiKTeX).
---

## scripts/manuel/prof.js
**Couche professeur v2** (2026-09-07) : progression annuelle, erreurs fréquentes, compétences. Trois contenus absents du site (gratuit, pour l'élève), qui vivent dans une couche de données à part `js/data/prof/<dossier>/<module>.prof.js`, **jamais chargée par index.html ni loader.js** : seul ce fichier la lit (bac à sable `vm`, comme `extract.js`). Rien n'est inventé hors des données : la progression est **calculée**, les erreurs et compétences sont **écrites** dans la fiche et validées. Conception : `docs/superpowers/specs/2026-09-07-edition-professeur-v2-design.md`.
- `REFERENTIELS` / `referentielDe(collection)` — compétences officielles par matière (maths : chercher, modéliser, représenter, raisonner, calculer, communiquer ; physique : s'approprier, analyser, réaliser, valider, communiquer). Une compétence hors liste est refusée
- `chargerProf(moduleId, dossier)` — la fiche, ou `null` si le module n'en a pas encore
- `validerProf(fiche, mod, referentiel)` — refuse une erreur incomplète, un renvoi vers une question qui n'existe pas, un nombre de compétences différent du nombre de questions, une compétence hors référentiel
- `validerPrerequis(items)` — validation à l'échelle de l'**ouvrage** (après numérotation dans `build.js`) : refuse un prérequis vers un chapitre absent du livre, vers soi-même, vers un autre niveau (le tableau est par niveau), un rang conseillé en double / hors de 1..n / partiel, et tout **cycle** (nommé en un seul reproche `ch. 1 → ch. 2 → ch. 1`). **CHANGEMENT DE RÈGLE du 2026-09-12** : la contrainte n'est plus « le prérequis précède dans le **LIVRE** » mais « il précède dans la **PROGRESSION CONSEILLÉE** ». L'ancienne règle confondait deux ordres de fonction différente (le livre range par domaine, une progression par dépendance) et rendait certains prérequis **vrais interdits d'écriture** : 5 fiches de 6e sur 10 avaient `prerequis: []`, dont 4 à tort, deux d'entre elles portant leur prérequis en commentaire faute de pouvoir le porter en donnée. Compatibilité : sans aucun `rangConseille` (les 19 autres ouvrages), le rang retombe sur l'ordre du livre et la règle redevient l'ancienne — rien à migrer
- `rangsConseilles(items)` — Map `{numéro → rang}` : le `rangConseille` **écrit** dans la fiche, à défaut le rang dans le livre (compté par niveau). C'est ce repli qui rend le changement de règle sans effet sur les ouvrages sans progression conseillée
- `ordonner(items)` — met les chapitres en **suite logique** par niveau. **Trie par rang conseillé** depuis le 2026-09-12, plus par ordre du livre : chaque ligne porte les DEUX repères, `rang` (enseignement) et `numero` (pagination). C'était le défaut de fond — l'ancienne page n'était pas une progression mais la table des matières avec des colonnes. `slice()` avant `sort` : `items` appartient à `build.js`, qui compose le corps du livre avec. **`decale`** : le chapitre s'appuie sur un chapitre situé **plus loin dans le livre** (3 en 6e : Fractions ch. 1, Volumes ch. 2, Angles ch. 3). Restreint après contrôle visuel — signaler tout écart rang/livre marquait les 10 chapitres, et un signal qui se déclenche partout n'est plus un signal. **Aucun calendrier** (2026-09-08, décision de Dylan) : ni semaines, ni séances, ni horaire hebdomadaire — le découpage temporel dépend de la classe et se périme chaque année. Remplace l'ancien `planifier` (horaires officiels, 36 semaines), supprimé avec `HEURES_PAR_SEMAINE`/`SEMAINES`/`PART_UTILE` et le champ `seances` des fiches. Pur, testé. **`prepare`** (2026-09-12) : le lien de prérequis lu à l'envers — quels chapitres s'appuient sur celui-ci, donc ce qu'il en coûte de le sauter. Dérivé, rien d'inventé
- `progressionLatex(lignes, niveaux)` — le chapitre « Progression annuelle », **refondu en outil de pilotage PAYSAGE le 2026-09-12** (`pdflscape`). Un `longtable` par niveau : `Rang / Chap. / Chapitre / S'appuie sur / Prépare / Traité`. **Les attendus en sont sortis** — 3 phrases de programme par ligne mangeaient la moitié du tableau ; ils deviennent la matière de `suiviNotionsLatex`. Le tableau porte désormais de quoi cocher (C commencé / F fini / É évalué) et signale en `erreur!75!black` + `$\triangleright$` les chapitres à ne pas prendre dans l'ordre du livre (couleur jamais seule : photocopie N&B, daltonisme). Titre et chapeau sont composés **dans** le paysage (un `\chapter*` forcerait un `clearpage` et rendrait une page portrait aux ¾ vide). **Aucune colonne de volume ni de séances** : décision reconfirmée le 2026-09-12 après un aller-retour — rien dans les données ne permet de la dériver, et un chiffre écrit à la main finit cité en conseil d'enseignement. Une ligne de légende suffit à le dire, plus un paragraphe
- `suiviNotionsLatex(lignes, niveaux)` — **NOUVEAU 2026-09-12**, le chapitre « Suivi des notions », en paysage à la suite de la progression. Grille à cocher au fil de l'année : `Chap. / Attendu / Vu / À revoir / Évalué / Date`, une ligne de tête par chapitre. **Maille = les 30 attendus officiels**, pas les 55 `keywords` : on ne coche pas « Pi », qui est une étiquette d'indexation et non une chose qu'on traite. **Une ligne par attendu sur toute la largeur** (12,2 cm ≈ 100 car.) : les abréger changerait la portée des mots du programme, les numéroter imposerait deux allers-retours par case. Rend `''` si aucune fiche ne porte d'attendus (les 19 autres ouvrages) — une grille vide serait pire qu'absente
- `sectionErreurs(fiche)` — une boîte `sperreur` par erreur, quatre entrées fixes (ce que l'élève écrit, d'où ça vient, pour y remédier, renvoi de remédiation)
- `etiquetteCompetence` / `totauxCompetences` / `grilleCompetences(evaluation, fiche, referentiel)` — compétence par question et grille des points par compétence sous l'évaluation
- `grilleSuiviClasse(referentiel, rangs)` — annexe à photocopier. **30 élèves et 3 colonnes par compétence (T1/T2/T3), sur deux pages de 15** depuis le 2026-09-12 : 26 lignes ne logeaient pas une classe de 30, et une seule case enregistrait un **état** au lieu d'une **progression**. Les 30 lignes × 18 colonnes ne tiennent pas sur une page — le premier essai a rendu `Overfull hbox (183,7 pt)` et `Overfull box (85,0 pt)`, le calcul de largeur ayant oublié `	abcolsep` (6 pt × 2 × 19 colonnes = 80 mm). D'où `	abcolsep` à 1,5 pt, le nom à 38 mm, les cases à 4,6 mm (142,0 mm pour 143 utiles) et un `clearpage` explicite entre les deux moitiés
- Pièges LaTeX encodés en commentaire : `\par\medskip` (un `\medskip` en mode horizontal troue le paragraphe), `\textcolor{}` et non `{\color…}` en tête d'une cellule `p{}` (le texte tombait une ligne plus bas)
- **Trois pièges du paysage, tous trouvés au contrôle visuel et invisibles dans le log** (2026-09-12). (1) **Tête courante** : `\markboth` ne prend pas dans un `landscape` — `\leftmark`/`\rightmark` rendent la marque en vigueur à la coupure, si bien que les 5 pages tournées portaient « Comment utiliser ce manuel », titre du chapitre précédent. Corrigé en redéfinissant `\fancyhead` **en dur dans un groupe TeX** refermé après `\end{landscape}`, ce qui restaure la tête du préambule sans la dupliquer. Vérifié au `pdftotext`, pas à l'œil. (2) **Légende orpheline** : posée en paragraphe après le `longtable`, elle basculait seule sur la page suivante en y entraînant l'en-tête rejouée par `\endhead`. Elle est donc **dans** le tableau, en `\multicolumn`+`\parbox` sur la dernière ligne, et `arraystretch` est passé de 1,45 à 1,3 pour lui faire la place (le tableau remplissait la page à 3 mm près). (3) **Filet de date désaligné** : la ligne de base d'une cellule `p{}` est la **dernière** de la rangée — sur les attendus à deux lignes, le filet se retrouvait en face de l'attendu suivant, et une date sur la mauvaise ligne est pire qu'une case vide. Ni `\rule` seul ni `\raisebox` de compensation ne règlent le cas (l'écart dépend du contenu de la cellule voisine) : c'est `\parbox[t]{…}{\vspace{0pt}…}` qui aligne par construction. Mesuré au recadrage `pdftoppm -r 200`, le décalage d'un interligne ne se voyant pas à l'échelle de la page. `\nopagebreak` après chaque attendu sauf le dernier garde chaque chapitre avec ses 3 attendus

- **Largeurs des deux tableaux paysage** (2026-09-12) : la page tournée offre **20,8 cm utiles** (244 mm de papier − 18 − 18 de marges) contre ~14,3 en portrait. Progression : `1.2/1.3/6.0/3.6/3.6/3.3` + `tabcolsep` 3 pt = 20,3 cm. Suivi : `1.3/11.6/1.3/1.7/1.5/2.2` + `tabcolsep` 2 pt = 20,45 cm. Un test (`gabaritPaysage`) recalcule la somme **`tabcolsep` compris** et refuse tout dépassement : c'est l'oubli du `tabcolsep` (6 pt × 2 × n colonnes) qui avait fait déborder la grille de classe de 183,7 pt. Les 3 colonnes à cocher n'ont pas la même largeur : chacune est calée sur SON en-tête, `À revoir` étant le plus long — un `p{}` ne coupe pas ce qui dépasse. Historique portrait (abandonné) : `0.7/3.3/1.5/1.5/5.6`, et avant `0.7/3.9/1.4/6.2`, `5.1/1.5/4.9`
- **`longtable` et non `tabular` pour le tableau de progression** (2026-09-12). Le tableau des 10 chapitres de 6e fait **deux pages à lui seul** depuis que les attendus officiels sont rédigés : un `tabular` est une boîte insécable, LaTeX ne pouvait donc jamais le commencer en cours de page et le renvoyait entier à la suivante, laissant derrière lui une page quasi vide, titre de niveau compris. `needspace` n'y pouvait rien — il réserve de la place, il ne rend pas une boîte sécable. `longtable` coupe entre deux lignes et rejoue son en-tête (`endhead`) en haut de chaque page ; `needspace{4 baselineskip}` reste, pour le seul titre de niveau. Paquet chargé dans `ouvrage.js`
## js/data/prof/
Fiches professeur, une par module, **hors du site** (non référencées par `index.html`). Format : `window.SPARK_PROF["<id>"] = { prerequis[], rangConseille, attendus[], note, erreurs[{titre, eleve, cause, remede, exercice{type: exercice|evaluation|quiz, n}}], competences: { evaluation: [] } }`. **`rangConseille`** (2026-09-12) : le rang d'**enseignement**, écrit à la main, distinct du numéro de chapitre du livre ; les rangs d'un niveau doivent former 1..n. Ordre conseillé de la 6e : décimaux (ch. 4) → figures (8) → addition (5) → multiplication (6) → angles (3) → division (7) → fractions (1) → symétrie (9) → périmètres/aires (10) → volumes (2), soit deux fils entrelacés, numérique et géométrique. **Toujours pas de champ `seances`** : envisagé puis écarté le 2026-09-12, un test le vérifie sur les 10 fiches réelles. Écrites à la main et relues : une fiche engage le livre sur le programme officiel. `prerequis` = **numéros de chapitre du même NIVEAU** (et non du livre), validés par `validerPrerequis` (le champ `seances` a été supprimé le 2026-09-08 avec le calendrier). **Résolution par niveau depuis le 2026-09-13** : une fiche de 4e écrit « ch. 3 » pour le 3ᵉ chapitre de la 4e, sans pouvoir connaître son numéro dans un ouvrage de cycle, qui dépend des niveaux empilés avant lui. Tant que la 6e — premier niveau — était seule à porter des fiches, les deux numérotations coïncidaient et rien ne le révélait ; l'ajout des fiches de 4e a fait échouer `college-maths` sur 14 refus « prérequis vers un chapitre d'un autre niveau ». Les quatre endroits qui lisent ce champ (validation, détection de cycle, tableau de progression, renvoi d'ouverture) résolvent désormais dans le niveau de la fiche ; le numéro **imprimé** reste celui du livre, puisqu'il sert de repère de pagination, mais le titre affiché est celui du chapitre réellement visé (`indexerParNiveau`, `prof.js`). **Piège des renvois de remédiation** : depuis que les `generate()` tirent plusieurs tâches distinctes, `exercice{type:"exercice", n}` ne désigne plus une tâche prévisible — **vérifier l'énoncé réellement tiré** avec la graine du livre (`graine: 20260816 + rang`, 18 tirages en édition professeur) avant d'écrire un numéro. `validerProf` refuse un renvoi au-delà des `EXERCICES_NUMEROTES` (12) et au-delà de la banque réellement imprimée (6 suppléments).
**Un renvoi `type:"evaluation"` est proscrit depuis le 2026-09-12** : 23 des 40 fiches d'erreur de la sixième pointaient une question du **devoir noté**, ce qui est un contresens didactique — on remédie AVANT d'évaluer. La règle antérieure (« viser une question d'évaluation, écrite donc fixe ») privilégiait la stabilité du renvoi sur son sens pédagogique ; elle est abandonnée. Le type reste accepté par `validerProf` pour les autres niveaux, mais aucune fiche 6e ne l'emploie. Deuxième règle : **deux erreurs d'un même chapitre ne pointent jamais le même énoncé** (9 fiches renvoyaient toutes vers l'exercice 1). Répartition 6e après correction : 29 `exercice`, 3 `supplement`, 1 `quiz`, 7 `null` **Sixième complète depuis le 2026-09-12** : les 10 fiches de `6e/` sont écrites (3 attendus officiels, 4 erreurs et 5 compétences chacune), ce qui remplit entièrement le tableau de progression. `exercice: null` est accepté et n'imprime aucun renvoi : employé quand le chapitre ne contient aucune question qui traite l'erreur (mesure au rapporteur en `6e-angles`, axe oblique en `6e-symetrie-axiale`) — mieux vaut le dire que renvoyer à côté. Deux fiches signalent un écart au programme plutôt que de le masquer : `6e-symetrie-axiale` (traitée par coordonnées, donc cycle 4) et `6e-angles` (complémentaires/supplémentaires).
**Couverture des compétences, rééquilibrée le 2026-09-12** : la grille de suivi photocopiable de fin d'ouvrage porte les **six** colonnes du référentiel, mais les 50 questions d'évaluation de la sixième n'en déclaraient que quatre — « chercher » et « communiquer » à **zéro**, deux colonnes vides toute l'année, et « calculer » à 42 %. Après correction : calculer 17 (34 %), représenter 8, raisonner 7, communiquer 7, chercher 6, modéliser 5. **Règle d'honnêteté** : une compétence ne se redéclare pas sur un énoncé inchangé — onze énoncés ont été réécrits dans `js/data/6e/` pour mobiliser réellement la compétence annoncée.

**Quatrième complète depuis le 2026-09-13** : les 12 fiches de `4e/` sont écrites (rangs 1 à 12 sans trou, 4 erreurs et 5 compétences chacune, 60 questions d'évaluation). Répartition mesurée : calculer 20 (33,3 %), communiquer 12 (20 %), chercher 10 (16,7 %), représenter 7, raisonner 6, modéliser 5 — les six présentes, aucune au-delà de 35 %. Les cinq questions « communiquer » demandent toutes de **juger une explication d'élève**, jamais de refaire un calcul. Banque d'exercices calibrée au **moule** (énoncé dont les nombres sont masqués), plafond de 3 répétitions : de 39 énoncés pour 13 moules (cosinus, générateur qui sature vite) à 60 pour 45 moules (statistiques). Aucun quota uniforme. **35 schémas secondaires** dans `cours.diagrams[]`, trois par chapitre sauf `4e-fractions-mult-div` qui n'en porte que deux — le chapitre a déjà une figure principale traitant la multiplication, et une troisième aurait illustré une formule au lieu d'un malentendu.


**Troisième complète depuis le 2026-09-13** : les 13 fiches de `3e/` sont écrites (rangs 1 à 13 sans trou, 5 compétences chacune, **65** questions d'évaluation — et non 91, chiffre d'un brief qui confondait avec le résultat `S = 91` du devoir d'algorithmique). Répartition mesurée sur l'état final : calculer 22 (33,8 %), raisonner 16 (24,6 %), modéliser 8, chercher 7, représenter 6, communiquer 6 — les six présentes, aucune au-delà de 35 %. **30 schémas secondaires** dans `cours.diagrams[]`, et **délibérément pas trois partout** : trois pour les huit chapitres géométriques ou graphiques, deux pour `3e-fonctions-affines`, `3e-stats-probas` et `3e-equations-inequations` (leur figure principale traite déjà un des malentendus), **un seul** pour `3e-arithmetique` et `3e-algorithmique`, les deux chapitres les moins demandeurs du niveau — l'un parce que ses autres difficultés sont des règles et non des images, l'autre parce que son objet *est* déjà une figure. `3e-systemes`, qui n'en portait **aucun**, en reçoit un : sa figure principale ne montrait que le cas où les droites se coupent, alors que le récapitulatif annonce trois cas — l'élève lisait « si les droites sont parallèles, le système n'a aucune solution » sans avoir jamais vu à quoi cela ressemble, et devant un système sans solution concluait non pas « aucune solution » mais qu'il s'était trompé. Deux écarts au standard des trois autres niveaux, trouvés en **comparant les quatre niveaux** plutôt qu'en relisant, et corrigés : deux devoirs notés barémés sur 13 et sur 12 quand les 36 chapitres de 6e/5e/4e le sont tous sur 10 (une moyenne inter-chapitres était donc fausse sans que rien sur la page l'annonce), et douze abréviations ordinales `1ère`/`2ème` là où les trois autres niveaux n'en portent aucune.

## scripts/manuel/tests/diagrams-3e.test.js
Garde les **schémas secondaires** de la 3e (`cours.diagrams[]`, écrits à la main en SVG), que ne couvre aucun test de helper — 33 tests au 2026-09-13. Vérifie par le **calcul** ce que chaque figure affirme : parallélisme au produit vectoriel (Thalès, tolérance 5e-4 en sinus), côté de $O$ au produit scalaire (papillon), pente réelle mesurée **en pixels** (fonctions affines), largeur de barre proportionnelle à la fréquence recalculée depuis le tableau croisé (statistiques), symétrie exacte autour de zéro (inéquations), PGCD/PPCM recalculés par Euclide et comparés aux **ordonnées** du dessin (arithmétique), table de suivi comparée case à case à une **exécution réelle** de l'algorithme (algorithmique), homothétie de rapport 2 en entiers exacts sur arête *et* fuite (volumes), triangles superposables par translation et rapports trigonométriques recalculés depuis les sommets (trigonométrie), classification des trois positions de deux droites par **déterminant** et par pente mesurée en pixels (systèmes). Trois défauts trouvés ici et invisibles autrement : une pente de $-3{,}00034$ là où la figure annonce $-3$ (arrondi des extrémités au centième, corrigé par des coordonnées exactes), un **cercle « vide » qui s'imprimait en aplat gris** parce qu'un `fill` inline ne traverse pas le convertisseur — lequel travaille par classes, `plot-point` plein et `plot-point-alt` ouvert —, et deux étiquettes d'arête posées 92 unités au-dessus de leur cube. Le fichier porte aussi trois **garde-fous de niveau** qui ne concernent pas les figures : pourcent non échappé, saut de ligne brut, remplissage en dur sur un marqueur de point (seuil de rayon à 12 unités, pour ne pas viser les grands aplats de zone), barème d'évaluation sur 10, et abréviations ordinales ancrées sur un chiffre.

**Seconde complète depuis le 2026-09-13**, premier niveau de LYCÉE : les 14 fiches de `prof/lycee-2nde/` sont écrites (rangs 1 à 14 sans trou ni doublon, au moins 3 erreurs et 5 compétences chacune, **70 questions d'évaluation** — 5 par module, comme aux trois niveaux de collège). Répartition mesurée sur l'état final : calculer 24 (34,3 %), représenter 14 (20 %), raisonner 14 (20 %), communiquer 9 (12,9 %), chercher 5 (7,1 %), modéliser 4 (5,7 %) — les six présentes, aucune au-delà de 35 %, aucune hors référentiel (il n'existe **pas** de référentiel « lycée » distinct : c'est celui de mathématiques). **Piège de chemin propre au lycée** : le dossier est `js/data/prof/lycee-2nde/`, calqué sur le nom du DOSSIER de données et non sur le nom du niveau — écrire `prof/2nde/` produit des fiches que le pipeline ne trouve jamais, sans aucun message d'erreur.

**Dérive des renvois après élargissement d'une banque** (constatée le 2026-09-13 sur 5 renvois de seconde) : un renvoi `exercice{n}` écrit contre un tirage donné devient faux dès que la banque du chapitre s'élargit, puisque les rangs se décalent. Le symptôme est traître — le renvoi pointe vers un exercice qui EXISTE, donc `validerProf` l'accepte, mais qui parle d'autre chose. Deux commentaires de fiche décrivaient même un exercice qui n'était plus à l'indice cité. Garde : `prof-2nde.test.js`, qui rapproche chaque renvoi du tirage réel par mots-clés.

## scripts/manuel/tests/diagrams-2nde.test.js
Garde les **schémas secondaires de la seconde** (`cours.diagrams[]`) par le calcul, plus quatre contrôles **génériques étendus aux quatorze chapitres** le 2026-09-13 : appartenance au `viewBox` (rayon des disques compris, un point étant un disque et non son centre), absence d'étiquette en capitales, une seule pointe de flèche par trait, et présence de la légende, des notes et d'un `<desc>` d'au moins 40 caractères. Ces quatre contrôles ne tournaient que sur le chapitre pilote `vecteurs` ; les 29 schémas des dix autres chapitres n'étaient gardés par rien, et leur extension a immédiatement trouvé un **débordement réel** (`2nde-probabilites` schéma 3 ancrait une étiquette à l'ordonnée 300 dans un `viewBox` haut de 290 — cela s'imprime par-dessus le texte voisin sans le moindre avertissement de LaTeX, qui ne voit que la boîte TikZ figée sur le `viewBox` déclaré).

Vérifications propres au niveau : composantes **strictement** égales des représentants d'un même vecteur (et non « visuellement parallèles »), relation de Chasles exacte et points non alignés, chaque point d'une courbe conforme à sa définition à moins de 0,005 unité (paraboles $x^2 \pm 9$, racine de $3x-12$), sommet de parabole tombant **exactement** sur l'origine, racines posées **sur** l'axe et non à côté, bornes d'intervalle recalculées depuis $I$ et $J$ plutôt que relues, barres proportionnelles aux euros. Cas particulier de `2nde-algorithmique` : ses figures n'affirment pas des propriétés géométriques mais des **résultats d'exécution**, le test **rejoue** donc le programme (`s = s + i` sur `range(4)`) et compare les douze valeurs du tableau de suivi imprimé, au lieu de relire des coordonnées.

## scripts/manuel/tests/prof-2nde.test.js
Gardes des fiches de seconde que le pipeline ne peut pas poser lui-même : les 14 rangs forment 1..14 sans trou ni doublon, aucune remédiation ne renvoie vers l'évaluation notée, chaque renvoi tombe sur un exercice dont le corrigé **parle réellement du sujet** (mots-clés sur le tirage réel de la graine du livre), et toute compétence déclarée appartient au référentiel de mathématiques.

**Piège des clés inertes** (corrigé le 2026-09-13) : la table `ATTENDUS` est indexée par le **titre** de l'erreur, et le test sort silencieusement (`if (!mots) continue`) sur un titre absent — comportement voulu, pour que la table se complète vague après vague sans bloquer. Mais huit clés portaient l'apostrophe **courbe** « ’ » là où les fiches écrivent l'apostrophe droite : elles ne correspondaient donc à aucun titre et ne vérifiaient rien, tout en donnant l'apparence d'une couverture. Un test `aucune cle de la table ne reste inerte` interdit désormais la récidive ; c'est lui qui a révélé deux renvois faux de plus dès qu'il a été posé.

**Première complète depuis le 2026-09-14**, deuxième niveau de LYCÉE : les 10 fiches de `prof/lycee-1re/` sont écrites (rangs 1 à 10 sans trou ni doublon, 4 à 5 erreurs fréquentes chacune, **50 questions d'évaluation** — 5 par module, la convention du corpus). Répartition mesurée sur l'état final : calculer 17 (34 %), raisonner 12 (24 %), modéliser 7 (14 %), communiquer 6 (12 %), représenter 5 (10 %), chercher 3 (6 %) — les six présentes, aucune au-delà de 35 %. Y parvenir a demandé de **réécrire huit énoncés**, pas de renommer des étiquettes : « calculer » pesait 50 % au départ et « chercher » 2 %. Deux de ces réécritures ont corrigé un défaut de fond indépendant — une question exigeait la formule factorielle du coefficient binomial, **hors programme de première**, dans un devoir noté ; une autre demandait $\cos^2(\pi/4) + \sin^2(\pi/3)$, expression qui ressemble à la relation fondamentale sans en être une et dont la bonne réponse punissait l'élève ayant compris le cours.

**L'ordre des chapitres du livre ne suit PAS l'ordre alphabétique des fichiers** : il vient de `DATA_FILES` dans `js/loader.js`. Pour la première : 1 dérivation, 2 suites, 3 produit scalaire, 4 second degré, 5 polynômes et signe, 6 trigonométrie, 7 géométrie repérée, 8 probabilités conditionnelles, 9 variables aléatoires, 10 information chiffrée. C'est le piège le plus coûteux de la vague : les deux sessions parallèles et la session principale avaient toutes trois écrit leurs `prerequis` et leurs renvois contre l'ordre alphabétique. **Quatre prérequis** pointaient vers des chapitres sans aucun rapport (les suites déclaraient le produit scalaire, le second degré déclarait les probabilités) et **onze renvois sur seize** visaient des exercices réels mais hors sujet — le rang détermine la graine du tirage, donc se tromper d'ordre revient à vérifier ses renvois contre un tirage qui n'existe pas. `validerProf` acceptait tout, puisque les numéros existaient.

## js/data/prof/lycee-1re/*.prof.js *(10 fiches)*
Fiches professeur de la première. Même format et mêmes règles que la seconde (voir plus haut), même piège de chemin : le dossier est `lycee-1re`, calqué sur le nom du DOSSIER de données. Chapitre pilote : `1re-derivation.prof.js`, dont les commentaires portent les conventions du niveau.

Deux fiches sont écrites **pour être lues par la vague terminale** : `1re-suites` et `1re-second-degre` nomment explicitement, dans leurs `attendus`, ce que l'élève doit maîtriser en sortie et sur quoi la terminale s'appuiera sans le réexpliquer (terme général explicite pour les limites, comportement de $q^n$ selon $q$, signe d'un trinôme pour toute étude de convexité).

## scripts/manuel/tests/diagrams-1re.test.js
Garde les **25 schémas secondaires de la première** par le calcul. La propriété propre au niveau est la **tangente** : chaque tangente dessinée a exactement la pente $f'(a)$ annoncée et passe par $(a\,;\,f(a))$ — une pente de $-3{,}00034$ affichée $-3$ se relit sans que rien n'attire l'attention. Vérifie aussi : pentes des sécantes égales au taux de variation exact, horizontalité rigoureuse là où $f'$ s'annule, séparations d'un tableau de signes tombant sous les points de tangence, paraboles passant par leurs racines et leur sommet exacts, projections orthogonales à produit scalaire nul, probabilités d'arbre sommant à 1 à chaque nœud, tableau croisé redonnant l'arbre case par case, hauteurs de bâtons proportionnelles aux vraies probabilités d'une loi qui somme à 1, et dénombrement complet et sans doublon des six dispositions de $\binom{4}{2}$.

Défaut trouvé ici et invisible autrement : l'effectif de la case commune du tableau croisé, obtenu par $0{,}4 \times 0{,}7 \times 1000$ en flottant, valait **279,99999999999994**. Les effectifs sont depuis posés en entiers, et le test vérifie qu'ils correspondent bien à l'arbre.

## scripts/manuel/tests/renvois-1re.test.js
Rapproche **chaque renvoi de remédiation du tirage réel du livre** par mots-clés, et vérifie les deux règles éditoriales (aucun renvoi vers l'évaluation notée, pas deux erreurs d'une même fiche visant le même exercice) ainsi que la cohérence de la progression (rangs formant une suite complète, prérequis de rang strictement inférieur). C'est ce test qui a trouvé les quatre prérequis faux décrits plus haut, dès sa première exécution.

## scripts/manuel/tests/dollars-1re.test.js
Deux familles de fautes de composition que ni le corpus ni la compilation ne voient, parce qu'elles n'apparaissent que sur certains tirages.

**Parité des délimiteurs mathématiques.** Un « $ » ouvrant manquant dans un corrigé de `1re-polynomes-signe` n'a pas fermé un mode mathématique : il en a **ouvert** un, resté ouvert jusqu'à la fin de l'environnement. Résultat : 28 erreurs « Command \end{enumerate} invalid in math mode » et **publication bloquée** de l'ouvrage entier. Le test couvre les exercices générés, le cours, les évaluations et les fiches professeur ; il a trouvé sept occurrences de plus dans une seconde tâche dès qu'il a été posé.

**Signes doubles.** « + -5 », « \times -1 » : une valeur négative interpolée là où le gabarit a déjà posé un signe. **Soixante-neuf occurrences** sur cinq générateurs, trouvées au contrôle visuel de la banque puis balayées par ce test — intermittentes par nature, puisqu'elles ne se voient que sur les tirages où la valeur est effectivement négative.

## scripts/manuel/tests/etiquettes-1re.test.js
Détecte les **étiquettes qui se chevauchent** dans les schémas, en estimant la boîte de chaque texte à partir de sa longueur, de sa classe et de son ancrage. Né du contrôle visuel : « longueur 2 » et « pied » s'imprimaient l'une par-dessus l'autre dans le schéma de projection du produit scalaire, alors que les coordonnées étaient justes, les deux étiquettes dans le cadre, le corpus valide et la compilation propre. Le test a ensuite trouvé lui-même deux autres cas, dont deux **entités HTML mutilées** (`&>;` et `&<;`) qui s'imprimaient telles quelles. C'est une approximation assumée — la largeur réelle dépend de la fonte —, donc le seuil est posé large pour ne signaler que ce qu'un lecteur verrait ; elle ne remplace pas l'épreuve en image, elle en retient les leçons.

## Limite connue de `titreDeGroupe` (scripts/manuel/chapitre.js), contournée et non corrigée
L'intertitre de la banque professeur est construit en retirant **d'abord** les balises HTML, **puis** les formules. Un « < » nu dans une formule fait donc que la suite du texte, jusqu'au `<strong>` suivant, ressemble à une balise : le retrait des balises emporte le « $ » fermant, la parité est rompue, et l'intertitre imprimé porte un « $ » orphelin — « Extra }, or forgotten $ », **publication bloquée**. Le correctif propre est d'inverser les deux retraits dans `chapitre.js`, mais il touche tout le corpus et sort d'un chantier de niveau : `1re-polynomes-signe` écrit donc « le coefficient $a$ est négatif » plutôt que « $a = -2 < 0$ ». Le défaut reste entier pour les vagues suivantes.

Second effet du même code, cosmétique celui-là : le retrait des formules laisse des intertitres parfois incompréhensibles (« L'équation de la tangente en est, et ici donne »), puisqu'il ne reste que les mots de liaison.

## scripts/manuel/tests/diagrams-4e.test.js
Garde les **schémas secondaires** de la 4e (`cours.diagrams[]`, écrits à la main en SVG), que ne couvre aucun test de helper. Vérifie par le **calcul** ce que chaque figure affirme : angle droit au produit scalaire, appartenance au cercle, rapport $2/3$ et alignement du centre de gravité, égalité stricte des vecteurs de translation, disques réellement disjoints ou sécants, rubriques et `<desc>` présents, total de 35 schémas. Écrit le 2026-09-13 après trois défauts trouvés **uniquement par le calcul** et invisibles à la relecture : une vignette « hypoténuse horizontale » dont l'angle droit était à un autre sommet (carré d'angle droit posé à 87 unités du vrai sommet), un point annoncé sur un cercle de rayon 70 mais placé à 69,995 (angle 90,0082° au lieu de 90), et deux centres de cercles circonscrits posés à vue dont le cercle ne passait par aucun sommet. Un test refuse aussi un triangle « obtus » à 90,8°, où la sortie du centre ne se voit pas.

## scripts/manuel/tests/figures-4e.test.js
Figures d'exercice paramétriques de la 4e. Deux propriétés au-delà de `figures-exercices.test.js` : l'angle droit est vérifié **au produit scalaire**, et la figure ne doit **rien coter que l'énoncé ne donne** — défaut réel du chapitre cosinus, où le côté opposé était coté alors que l'énoncé ne le fournissait pas, permettant de conclure par Pythagore sans employer le cosinus.

## scripts/manuel/tests/prof.test.js
Tests de la couche professeur : répartition de l'année (somme sur le budget, chapitre à fiche conservé, semaines qui se suivent, niveaux séparés), validation (compétence hors référentiel, renvoi inexistant, erreur sans remède), totaux de la grille, renvois, chargement de la fiche pilote contre le module réel.

## tiktok/ — pipeline de vidéos TikTok

Projet Python autonome (venv local, `requirements.txt`). **Trois lignes éditoriales** qui ne partagent que le moteur de rendu (voix → capture → montage) :
- `main.py` — part d'un module de `js/data/` et en tire 3 vidéos, une par angle. Narrateur Sparky, mémoire `production.json`, sortie `output/`.
- `culture.py` — part d'un sujet d'ado et remonte vers une notion, 1 vidéo. Narrateur Lumen, mémoire `sujets.json`, sortie `output-culture/`.
- `interview.py` — vidéos de présentation, Sparky interroge Lumen. **Seule ligne en paysage 1920×1080**, seule ligne sans mémoire ni dépôt Drive. Sortie `output-interview/`.
- `promo.py` — **campagnes promotionnelles** (ajoutée le 2026-09-06) : vidéos verticales écrites à la main dans `promos.py`, programmées sur **TikTok seulement** via Postiz. Ni mémoire ni dépôt Drive, **volontairement** : les dossiers Drive sont les files d'attente de n8n. Sortie `output-promo/`. Brief de la première campagne : `tiktok/campagnes/STUDENT2026.md`.

Sorties gitignorées. Voir `tiktok/README.md`.

## tiktok/config.py
Tous les réglages : identité, personas, géométrie du cadre, chemins. Aucun secret (ils viennent de `.env`).
- `PERSONAS` — voix + `pitch` + traitement de `formants` + jeu de sprites. **Deux curseurs distincts** : `pitch` (natif edge-tts) descend la hauteur en laissant le timbre intact, `formants` retraite l'échantillonnage et change le timbre (1,00 = brut, 1,25 = chipmunk). Défaut `naturelle` retenu le 2026-08-26 sans traitement de formants, puis **abaissé à `pitch: "-6Hz"` le 2026-09-01** — Sparky sonnait trop aigu ; le pitch a été préféré aux formants pour éviter le filtre qui avait fait rejeter les variantes rajeunies
- `PERSONA_PAR_TRANCHE` — `naturelle` partout dans le périmètre actuel ; l'entrée `bts` → `adulte` est inutilisée
- `TRANCHES_ACTIVES` — périmètre éditorial (`college`, `lycee`). Le BTS est exclu du tirage ET de la recherche par libellé depuis le 2026-08-26 ; y revenir = ajouter `"bts"`, rien d'autre
- `persona_pour(tranche, forcee)` — résout la persona d'un module
- `sprite(moment, jeu)` — chemin du visuel de la mascotte, repli sur `images/mascotte/` si `assets/sparky/<jeu>/` n'existe pas
- `TEL_*`, `ECHELLE_CAPTURE` — géométrie partagée capture/montage : le site est filmé à la taille exacte du mockup, donc aucune trame n'est redimensionnée au montage
- `BOUTIQUE` / `BOUTIQUE_URL` / `SORTIE_PROMO` — la boutique Shopify, filmée par les campagnes
- `PROMO_TIKTOK` — pied de légende ajouté sous chaque publication TikTok pendant une campagne (vide hors campagne). Le texte de référence vit dans `promos.py` ; `.env` n'en est qu'une copie, pour que `livraison.py` / `publication.py` n'aient pas à connaître les campagnes
- `POSTIZ_API_KEY` / `POSTIZ_BASE_URL` — l'API Postiz, la même que les workflows n8n ; ne sert qu'à `promo.py --programmer --oui`
- `SEUIL_RATTACHEMENT` — score minimal pour rattacher un module à une vidéo « vie réelle ». Relevé de calibration du 2026-08-27 **écrit en commentaire au-dessus** : `_score` n'a pas d'échelle théorique, et c'est ce relevé qui a montré que la requête devait être la notion seule
- `MEMOIRE_SUJETS`, `SORTIE_CULTURE`, `DOSSIER_DRIVE_CIBLE_CULTURE` — la ligne « vie réelle » a sa propre mémoire, sa propre sortie et son propre dossier Drive, pour qu'aucune des deux lignes ne marche sur l'autre
- `VOIX_INTERVIEW` / `JEU_SPRITES` / `COULEUR_LOCUTEUR` / `NOM_LOCUTEUR` — le couple voix + sprites + couleur de chaque mascotte en interview. Sans lip-sync, c'est ce qui rend le dialogue lisible : trois signaux redondants désignent qui parle (la voix, la couleur du mot en cours, la seule mascotte qui bouge)
- `persona_locuteur(locuteur)` — voix d'une mascotte en interview, pendant de `persona_pour()`
- `INTERVIEW_VIEWPORT`, `ECRAN_*`, `NAVIGATEUR_*`, `MASCOTTE_*`, `INTERVIEW_SOUS_TITRE_*` — géométrie du format paysage. **Ces valeurs sont liées** : la largeur de l'écran est bornée par les mascottes (~350 px dans chaque coin bas) et le bandeau de sous-titres passe sous le cadre et entre elles. En changer une isolément fait se chevaucher les couches — vérifier sur une trame fixe avant de rendre
- `SILENCE_REPLIQUE` — blanc entre deux répliques. Sous ~0,2 s les voix se marchent dessus, au-delà de ~0,4 s l'interview traîne

## tiktok/main.py
Orchestrateur CLI. Ordre imposé : IA → voix → capture → montage (la capture doit durer exactement la longueur de l'audio).
- `main(argv)` — `--module`/`--aleatoire`/`--tranche`/`--matiere`, `--angles`, `--persona`, `--scripts-seuls`, `--lot N` (production de nuit), `--refaire`, `--etat`, `--sans-verification`
- `_traiter(module, ...)` — un module : scripts vérifiés, puis vidéos, puis mémoire enregistrée angle par angle
- `_afficher_etat(...)` — avancement sans rien produire
- `rafraichir_catalogue(force)` — réexporte `catalogue.json` si `js/loader.js` est plus récent
- `produire(module, angle, script, persona, ...)` — chaîne complète d'une vidéo + son JSON de métadonnées. Le fond bascule du cours vers l'onglet **`/exercice` au SINGULIER** à 72 % : c'est le slug qu'attend le routeur (`js/app.js`). Le pluriel `/exercices`, corrigé le 2026-09-01, tombait sur une route inconnue et laissait le site sur le cours — les 96 vidéos produites avant cette date filment donc deux fois la même page

## tiktok/tools/export-modules.js
Exporte les 248 modules de `js/data/` en JSON pour Python. Réutilise `chargerModule` de `scripts/manuel/extract.js` au lieu de refaire un bac à sable `vm`.
- `catalogue()` — liste des modules avec `url`, `tranche` (college/lycee/bts) et le contenu pédagogique nettoyé de `cours.diagram` (SVG inutile ici)
- `tranche(dossier)` — déduit la tranche du dossier ; c'est elle qui pilote le choix de la voix

## tiktok/tools/screencast.js
Capture animée du site avec Puppeteer. Pilote lui-même le défilement et prend une capture par trame — `Page.startScreencast` livre des trames à cadence irrégulière, inutilisable pour un montage.
- `capturer({url, url2, duree, fps, echelle, bascule, plan, bureau, vw, vh})` — scrolle le cours puis bascule sur l'onglet exercices ; la capture est mise en pause pendant la navigation, donc aucune trame blanche
- `capturerPlan(page, plan, ...)` — mode interview : N segments datés, une URL chacun, le défilement repart de zéro à chaque segment (un segment est un plan, pas la suite du précédent). Le découpage est calculé côté Python (`capture.plan_segments`) pour être testable sans navigateur
- `--bureau` / `--vw` / `--vh` — viewport bureau au lieu du viewport mobile ; sert au format paysage, où montrer la version mobile du site n'aurait aucun sens
- `A_SUPPRIMER` — chrome d'UI éphémère retiré avant capture : bannière RGPD, toasts, confettis (comme `scripts/prerender.js`), **les emplacements publicitaires** (`.ad-slot-placeholder`, `ins.adsbygoogle`) et **le bandeau cookies de Shopify** (`#shopify-pc__banner`, `#shopify-pc__prefs`) — les quatre ajoutés le 2026-08-27. Le placeholder « Emplacement publicitaire (exemple) » apparaissait en clair dans les captures, et une vraie annonce n'y a pas davantage sa place : on ne fait pas la promotion du site en filmant la publicité de quelqu'un d'autre
- `preparer(page, url)` — pose **une règle CSS** `display:none` en plus du retrait des nœuds. Le retrait ne vaut que pour ce qui existe déjà : le bandeau Shopify est injecté par l'API Customer Privacy **une à deux secondes après** le chargement, donc en plein milieu du plan. Il masquait le centre de la page produit dans le premier rendu de l'interview boutique

## tiktok/pipeline/texte.py
Rend le contenu des modules prononçable, et vérifie que la réponse du modèle l'est.
- `html_vers_texte(source)` — retire le balisage ; le double `<br/>` du projet devient un vrai saut de paragraphe
- `math_vers_parle(source)` — KaTeX en français dit à voix haute (`\dfrac{1}{2}` → « un demi », `x^2` → « x au carré »)
- `symboles_interdits(texte)` — garde-fou : `$`, `\`, balise, accolade, décimale anglaise

## tiktok/pipeline/scripts.py
Écriture des scripts par le modèle (API Mammouth, SDK OpenAI).
- `ANGLES` — les trois angles éditoriaux et leur consigne
- `generer(module, client, modele, angles)` — un appel produit les 3 scripts ; une réponse invalide est renvoyée au modèle avec la liste des reproches. **Repli assumé au dernier essai** : si un angle reste refusé, les angles valides sont livrés quand même plutôt que de perdre le module — l'appelant reçoit alors une clé `_abandonnes` (`{angles, raisons}`) qu'il doit `pop()` avant d'itérer. Ajoutée le 2026-09-01 : ce repli existait déjà mais **en silence**, et un angle perdu ne se découvrait qu'en comptant les MP4 (vécu sur `tle-exponentielle-logarithme`). `main.py` le journalise en `ABANDON :`
- `assembler(script)` — **recompose** `full_text` depuis hook/body/cta au lieu de faire confiance au modèle
- `valider(script)` / `duree_estimee(texte)` / `extraire_json(reponse)` — garde-fous
- `construire_brief(module)` — matière première envoyée au modèle, dont `cours.piege`

## tiktok/pipeline/voix.py
Voix off gratuite et timings mot à mot.
- `dire(texte, persona, destination)` — MP3 + mots datés + durée exacte
- `_synthetiser(...)` — **`boundary="WordBoundary"` obligatoire** : edge-tts ne rend que des frontières de phrase par défaut
- `_decaler_formants(source, destination, facteur)` — rajeunit la voix en préservant la durée (donc les sous-titres restent synchronisés)
- `dire_dialogue(repliques, destination, silence)` — bande son d'une interview. edge-tts ne rend **qu'une voix par appel** : chaque réplique est synthétisée à part puis recollée, et `dialogue.fusionner()` recale les timings. Mesuré sur l'interview « pourquoi » : 0,05 s de dérive sur 75 s
- `_coller(morceaux, silence, destination)` — concat ffmpeg. L'`aformat` sur chaque entrée n'est pas décoratif : le filtre `concat` exige le même format partout, or edge-tts ne le garantit pas d'une voix à l'autre. Les silences sont des entrées `lavfi` (une entrée de filtre ne se consomme qu'une fois, il en faut une par intervalle)

## tiktok/pipeline/soustitres.py
Sous-titres calés sur la voix, sans transcription.
- `depuis_edge_tts(evenements)` — offsets en 100 ns → secondes
- `grouper(mots, max_mots, max_duree, silence_max)` — pavés de 2-3 mots, coupés sur la ponctuation et les respirations
- `bornes_sections(script, mots)` — date hook/body/cta ; pilote le changement de pose de la mascotte

## tiktok/pipeline/catalogue.py
- `dans_perimetre(modules, tranches)` — même filtre que `choisir()`, exposé pour que l'affichage d'avancement compte exactement ce que le tirage peut sortir
- `charger(chemin)` / `choisir(modules, identifiant, tranche, matiere, graine, tranches)` — `identifiant` accepte la clé exacte ou un libellé approximatif sans accents ; une demande à moitié satisfaite est refusée (« calcul quantique » ne doit pas tomber sur « calcul algébrique »), et un module hors périmètre est refusé **en le disant** plutôt que remplacé en silence

## tiktok/pipeline/memoire.py
Ce qui a déjà été fabriqué. Le catalogue dit ce qui est possible, cette mémoire dit ce qui est fait.
- `charger(chemin)` / `sauver(memoire, chemin)` — JSON indenté et trié, corrigeable à la main : retirer une entrée force la régénération de cet angle
- `reste_a_faire(modules, memoire, angles)` — juge sur les angles DEMANDÉS, pas sur les trois (on doit pouvoir parcourir le catalogue sur le seul angle « erreur »)
- `enregistrer(memoire, module_id, angle, fichier)` — appelé après CHAQUE angle, pour qu'un plantage au troisième ne fasse pas refaire les deux premiers
- Un fichier corrompu renvoie une mémoire vide plutôt que de bloquer la production

## tiktok/pipeline/verification.py
Vérification arithmétique par un second appel au modèle (température 0). Ne rejuge pas le contenu des modules, déjà relu : contrôle uniquement les exemples chiffrés que le modèle invente.
- `verifier(script, module, client, modele)` — liste vide = calculs exacts ; une panne du vérificateur remonte comme un problème, jamais comme un succès
- `construire_demande(script, module)` — le module fait autorité, la vidéo est ce qu'on juge
- `interpreter(reponse)` — lève sur réponse illisible : un vérificateur muet ne doit pas valoir « rien à signaler »
- Motivé par un cas réel : « six plus trois sur neuf plus trois donne dix sur douze » (c'est 9/12), produit deux fois de suite sur le module Fractions

## tiktok/pipeline/capture.py
- `filmer(url, duree, sortie, url2, bascule, fps)` — lance `screencast.js` ; la durée vient de l'audio déjà synthétisé
- `filmer_plan(etapes, duree, sortie, fps)` — tournage multi-segments en viewport bureau, pour les interviews
- `filmer_plan_mobile(etapes, duree, sortie, fps)` — même tournage sur plan mais en viewport **téléphone** et à l'échelle du mockup, pour les campagnes ; les deux passent par `_filmer_plan()`
- Une étape peut porter un `defilement` (fraction de la hauteur de page jusqu'où scroller) : une fiche produit se lit en haut, une grille de couvertures se parcourt jusqu'en bas. Refusé hors [0, 1]
- `plan_segments(etapes, duree)` — convertit des bornes en **fraction** de la vidéo en segments datés. Les fractions plutôt que des secondes parce que le plan de tournage est écrit avant que la voix off existe. Refuse les bornes qui reculent ou sortent de ]0, 1] ; tolère au contraire un `jusqu_a` en trop sur la dernière étape (coquille fréquente, et la refuser coûterait un rendu de plusieurs minutes)

## tiktok/pipeline/montage.py
Composition 1080×1920 avec MoviePy 2.x.
- `monter(trames, fps_capture, audio, mots, bornes, destination, jeu_sprites, marque, plaque, dialogue)` — assemble et exporte. Les trois derniers paramètres servent aux campagnes et ne changent rien quand ils sont absents : `marque` (domaine de la pastille), `plaque` (code promo par-dessus l'écran), `dialogue` (`{repliques, poses}` : deux mascottes au lieu d'une, `mots` portent alors un `locuteur`)
- `debut_plaque(plaque, bornes, mots, duree)` — quand la plaque apparaît : au premier mot qui commence par `plaque["mot"]` (le code, prononcé), sinon à la fraction `plaque["des"]`, sinon au début du CTA. Une consigne introuvable retombe sur le CTA plutôt que de perdre un rendu
- `_image_plaque_code(plaque)` — plaque jaune de la charte (libellé · remise / code / sous-texte), posée à `PLAQUE_BAS` px du bas de l'écran du téléphone ; `_clips_plaque()` l'anime en deux clips (un « pop » de `PLAQUE_POP` s puis une image fixe) pour ne pas redimensionner 30 fois par seconde
- `_clips_mascottes_dialogue(repliques, enveloppe, duree, poses)` — les deux mascottes dans les coins bas (`MASCOTTE_DIALOGUE_*`), celle qui parle rebondit, l'autre est estompée ; `_etiquette()` pose le nom sous les pieds. Géométrie liée : un pavé de deux lignes descend à ~1510 px, le sommet des mascottes est à 1498 px
- `taille_ajustee(mots, taille)` — réduit un pavé dont un mot insécable déborde (« boutique.sparklearning.fr »), même règle que le paysage ; `_image_sous_titre()` prend aussi une couleur d'`accent` (celle du locuteur en dialogue)
- `_fond_complet()` — dégradé + halos + pastille aplatis en UNE image : composer trois couches transparentes plein cadre à chaque trame était le premier poste de coût
- `_cadre_telephone()` — coque percée posée par-dessus la capture : fabrique les coins arrondis sans retoucher les trames une par une
- `_image_sous_titre(groupe, index_actif)` — rendu PIL mot par mot (un `TextClip` ne sait pas colorer un seul mot d'une ligne)
- `_lignes(mots, police, largeur_max, rendu)` — retour à la ligne. **`rendu` doit être la même transformation que celle appliquée au dessin** : les sous-titres sont dessinés en CAPITALES, plus larges que les minuscules en ExtraBold, et mesurer la minuscule fait déborder le pavé hors du cadre (constaté le 2026-08-27 en paysage). Le format vertical passait encore sans `rendu` — **corrigé le 2026-09-01** (`rendu=str.upper` dans `_image_sous_titre`), le débordement latent est levé
- `_enveloppe(audio, duree)` — énergie de la voix ; la mascotte rebondit sur ce qui est dit, pas sur une horloge

## tiktok/pipeline/dialogue.py
Recollage des répliques d'une interview en une seule frise temporelle. Ne touche pas à l'audio (c'est `voix._coller`) : toute la logique de synchronisation est ainsi testable sans synthétiser une seconde de son.
- `fusionner(pistes, silence)` — décale les offsets, attache un locuteur à chaque mot, rend la frise des répliques. Le silence est intercalé **entre** les répliques, jamais après la dernière
- `locuteur_a(repliques, instant)` — qui parle. Un silence appartient à celui qui **va** parler, pas à celui qui vient de finir : la mascotte se tourne vers son interlocuteur avant qu'il ouvre la bouche
- `grouper_repliques(mots, **reglages)` — pavés de sous-titres qui ne mélangent jamais deux locuteurs. `soustitres.grouper()` ne connaît que le rythme de la voix ; sans cette coupure, la fin de la question et le début de la réponse tomberaient dans le même pavé, affiché d'une seule couleur

## tiktok/pipeline/montage_interview.py
Composition paysage 1920×1080. Réutilise les briques de `montage.py` (dégradé, halo, sprite, enveloppe, police) plutôt que de les dupliquer.
- `monter(trames, fps_capture, audio, mots, repliques, destination, domaine, poses)` — assemble et exporte
- `_cadre_navigateur(domaine)` — coque de navigateur percée, même principe que `_cadre_telephone` ; la barre d'adresse affiche le domaine filmé
- `_clips_mascottes(repliques, enveloppe, duree, poses)` — les deux mascottes sur toute la durée : celle qui parle rebondit, celle qui écoute est estompée et immobile
- `_estompe(image)` — version en retrait de celle qui écoute. Sans lip-sync c'est le seul moyen de désigner le locuteur ; on assombrit sans effacer, les deux restent dans le champ comme sur un plateau
- `_plaque_nom(locuteur, actif)` — étiquette de plateau TV, **affichée en permanence** : un spectateur qui arrive en cours de vidéo sait qui est qui
- `_image_sous_titre(groupe, index_actif)` — le mot en cours prend la couleur du locuteur (`config.COULEUR_LOCUTEUR`)
- `taille_ajustee(mots, taille)` — plus grande taille à laquelle le pavé tient dans la bande. Le retour à la ligne ne suffit pas toujours : `boutique.sparklearning.fr` est **un seul mot** de 1009 px pour une bande utile de 968. On ne peut ni le couper ni le laisser sortir du cadre, donc on réduit ce pavé-là et lui seul. Plancher à `TAILLE_SOUS_TITRE_MINI` — un pavé illisible est pire qu'un pavé qui déborde un peu

## tiktok/pipeline/sujets.py
Choix du sujet du jour et mémoire des sujets déjà sortis. Le risque n'est pas la qualité d'un sujet isolé, c'est l'effondrement de la diversité : le pipeline impose donc la **famille**, le modèle n'invente qu'à l'intérieur.
- `FAMILLES` — les 8 familles de sujets (jeu-video, sport, argent, musique, reseaux, nourriture, transport, mode)
- `famille_du_jour(jour)` — rotation déterministe sur le calendrier ; le calendrier fait foi plutôt qu'un compteur, pour qu'une mémoire effacée retombe sur la même famille
- `famille_suivante(famille)` — famille d'après en bouclant ; sert quand une famille est épuisée et quand un lot dépasse 8 vidéos
- `identifiant(sujet)` — slug sans accent ni apostrophe ; sans lui la liste d'exclusion laisserait passer un doublon à une apostrophe près
- `charger(chemin)` / `sauver(memoire, chemin)` — `sujets.json`, calqué sur `memoire.py`
- `noter(memoire, sujet, notion, famille, module, brule, reproches)` — écrit dans la mémoire **reçue** (et non une copie) : la marque « brûlé » est posée par un `produire()` qui rend `None`, elle ne peut pas voyager par le retour. `reproches` conserve ce qui a fait tomber le sujet — sans cette trace, un lot de nuit rend un calendrier troué sans aucune piste sur la cause
- `deja_sortis(memoire, limite)` — les N derniers sujets, brûlés compris : un sujet qui a résisté aux vérificateurs échouerait pareil au tour suivant
- `choisir(client, modele, famille, exclusions, tentatives, sujet_impose)` — un appel ; un sujet re-proposé malgré l'exclusion est rejeté et l'appel refait. Lève `LookupError` à l'épuisement, pour que l'appelant change de famille au lieu de perdre le lot

## tiktok/pipeline/culture.py
Rédaction et contrôles de la ligne « maths × vie réelle ». **Doublé de `verification.py`, pas adapté** : là-bas le module fait autorité, ici tout est inventé, et tordre ce postulat le rendrait faux pour son usage d'origine. Ne réutilise que `extraire_json()` et `interpreter()`.
- `SYSTEME_REDACTION` — reprend les contraintes de prononçabilité de `scripts.SYSTEME` et y ajoute l'**interdiction des données périssables** (prix, statistiques, abonnés, classements). Un second appel au même modèle ne peut pas trancher « est-ce encore vrai ? » — il partage la même date de coupure : on interdit donc en amont plutôt que de contrôler en aval
- `SYSTEME_FAITS` / `verifier_faits(script, client, modele)` — affirmations sur le monde réel : indéfendables ou périssables. Ne juge ni style ni pédagogie, ne recalcule rien
- `SYSTEME_CALCULS` / `verifier_calculs(script, client, modele)` — arithmétique. Ne nomme aucun module : lui parler d'une référence qui n'existe pas l'inciterait à s'y fier
- `ecrire(client, modele, sujet, notion, mascotte, reproches)` — un appel, validé par `scripts.valider()`. Sans état : les reproches repartent dans la consigne, pas dans un historique
- `rattacher_module(modules, sujet, notion, seuil)` — la requête est la **notion**, pas le sujet : `_score` exige que plus de la moitié des mots tombent dans le titre, ce qu'un sujet de 4-6 mots ne peut jamais atteindre. `None` est un cas normal, pas une erreur
- `produire(client, modele, famille, memoire, modules, ...)` — choix → rédaction → les DEUX contrôles → reprise. Les deux contrôles passent toujours, même si le premier a trouvé : corriger un reproche pour découvrir l'autre coûterait une tentative entière. Rend `None` et marque le sujet brûlé après 2 échecs

## tiktok/culture.py
CLI de la ligne « maths × vie réelle », à côté de `publier.py`. Le pipeline ne date rien : il fabrique un stock, n8n en publie une par jour.
- `main(argv)` — `--lot N`, `--sujet`, `--famille`, `--sans-verification`, `--etat`. La production passe par `_produire_le_lot()`, appelée **sous verrou**
- `verrou(chemin)` — interdit deux lots simultanés. Vécu le 2026-08-27 : une relance de ce qu'on croyait être un lot mort a fait tourner deux processus, qui ont écrasé mutuellement `sujets.json` et se sont disputé les fichiers temporaires de MoviePy — deux dossiers se sont retrouvés avec un MP4 mais sans métadonnées, invisibles jusqu'à la publication. C'est un verrou de **fichier**, pas un fichier-témoin : le système le relâche à la mort du processus, donc un plantage ne laisse jamais de verrou fantôme. Deux pièges Windows encodés dans le code : le mode `a+` ignore `seek()` à l'écriture, et la zone verrouillée est **illisible** aux autres handles — d'où le PID stocké à l'octet 1, hors du verrou, en binaire. `--etat` reste consultable pendant qu'un lot tourne
- `metadonnees(resultat, duree, persona, url_base)` — fiche JSON. **`legende`, `hashtags` et `url` sont le contrat avec n8n** : les renommer casserait la publication sans qu'aucun test ne bronche. `url` n'est jamais vide — sans module rattaché elle tombe sur l'accueil
- `rendre(resultat, persona, travail, sortie, url_base)` — voix → capture → montage, calqué sur `main.py::produire` qui ne peut pas être appelé ici (il attend un module, or cette ligne n'en a pas forcément)
- `_plan_de_capture(...)` — avec module on filme son cours puis son onglet **`/exercice` au SINGULIER** (slug du routeur, `js/app.js` ; pluriel corrigé le 2026-09-01) ; sans module l'accueil seul, une bascule n'aurait aucun sens
- `_ecrire_un_sujet(...)` — fait le tour des familles avant d'abandonner ; un sujet qui échoue n'emporte jamais le lot

## tiktok/interviews.py
Les deux dialogues et leurs plans de tournage, **écrits à la main**. Un modèle produirait une histoire plausible plutôt que la vraie — et ça s'entend : ces vidéos racontent pourquoi le site existe.
- `INTERVIEWS["pourquoi"]` — le fondateur enseignait, ses étudiants voulaient devenir techniciens, et les sciences les ralentissaient ; tout ce qui existait était payant. La thèse tombe à la 4e réplique. La dernière (« et ça le reste ») est la **charnière** avec l'interview boutique, qui répond à « alors pourquoi vendre ? »
- `INTERVIEWS["boutique"]` — s'ouvre sur la question gênante (le site est gratuit, pourquoi vendre ?) parce que le spectateur se la pose de toute façon. Le pivot n'est pas le prix mais l'**édition professeur**
- Contraintes d'écriture : aucun symbole imprononçable, et les **prix en toutes lettres** — edge-tts lit « 9,99 € » de façon irrégulière selon le contexte
- Le segment « tout était payant » ne filme ni ne nomme aucun concurrent : on reste sur le site
- `poses(interview)` — la pose de sprite de chaque réplique (`hook` = réfléchit, `body` = console, `cta` = félicite)

## tiktok/interview.py
CLI de la ligne interviews, à côté de `main.py` et `culture.py`.
- `main(argv)` — `--sujet pourquoi|boutique`, `--tous`, `--voix-seule` (synthétise la bande son et s'arrête : permet d'écouter un dialogue sans payer les ~10 min de capture + montage), `--sortie`
- `produire(nom, sortie, travail, voix_seule)` — voix → capture → montage, même ordre imposé qu'ailleurs
- Ni mémoire de production ni dépôt Drive, **volontairement** : on refait une vidéo de présentation quand elle a changé, pas quand elle manque

## tiktok/pipeline/livraison.py
Dépôt des livrables sur le dossier Drive synchronisé, et les deux légendes : celle à coller à la main et celle réellement publiée.
- `pied_promo(promo)` — pied de campagne : `None` = celui de `config.PROMO_TIKTOK` (vide hors campagne), une chaîne explicite, même vide, l'emporte
- `texte_publication(metadonnees, promo)` — accroche, pied, hashtags, puis « lien à mettre en bio » (s'adresse à la personne qui publie)
- `legende_api(metadonnees, promo)` — accroche, pied, hashtags (s'adresse aux spectateurs) ; hors campagne la légende est inchangée
- `dossier_drive_detecte(chemin)` / `deposer_livrables(fichiers, racine, cible, sous_dossier)` — copie dans le Drive synchronisé, sans API ni jeton

## tiktok/pipeline/publication.py
Voie Upload-Post (historique, supplantée par Postiz + n8n le 2026-08-26 mais toujours utilisable par `publier.py`).
- `calendrier(modules, depart, creneaux, angles)` — un module par jour, ses angles en rotation sur les créneaux, pour lire séparément l'effet du format et celui de l'heure
- `_legende_tiktok(meta, promo)` — accroche, pied de campagne éventuel (`livraison.pied_promo`), hashtags
- `parametres(ligne, meta, utilisateur, aigc, plateformes)` / `envoyer(...)` — champs du multipart Upload-Post, `scheduled_date` en UTC explicite

## tiktok/promos.py
Les campagnes et leurs plans de tournage, **écrits à la main** : une campagne engage la boutique sur des chiffres, et chaque nombre a été vérifié contre Shopify le jour de l'écriture (prix, mécanique du Duo, réglages du code).
- `CAMPAGNES["student2026"]` — code -20 % sur toute la commande, cumulable avec les Duos (0,75 × 0,8 = 0,6, soit -40 % sur un duo). Quatre vidéos : `question` (dialogue, la question gênante, **à épingler**), `pourcentages` (Sparky, vraie leçon d'évolutions successives sur l'offre elle-même, filmée sur `1re-information-chiffree`), `dedans` (Lumen, le contenu du manuel), `teaser` (rappel de 15 s). Créneau 19:15, jours 0 / 1 / 3 / 6. Coupées à 28-33 s le 2026-09-06 (première version 35-46 s : TikTok récompense la complétion), plaque du code à 15 % de la vidéo (`plaque["des"]`), appel au partage en outro
- Le code se dit « STUDENT 2026 » avec une espace : edge-tts lit le mot puis le nombre, le sous-titre affiche les deux ; la plaque porte le code exact
- `campagne(nom)` / `video(campagne, nom)` / `videos_dans_l_ordre(campagne)` — accès, l'identifiant à l'intérieur
- `texte_parle(video)` — tout ce que la voix dit ; `poses(video)` — pose de chaque réplique d'un dialogue
- `legende_tiktok(campagne, video)` — accroche, pied de campagne, hashtags (via `livraison.legende_api`)
- `calendrier(campagne, depart)` — une ligne par vidéo, datée en heure de Paris
- `valider(campagne)` — refuse un code jamais prononcé, un symbole imprononçable, une durée hors [6, 45] s, un plan aux bornes qui reculent, une bio > 80, un commentaire > 150, une légende > 2200, ou un nombre de vidéos à épingler différent de 1

## tiktok/promo.py
CLI des campagnes, à côté de `main.py`, `culture.py` et `interview.py`. Rien ne part de lui-même.
- `main(argv)` — `--valider`, `--video X` / `--toutes`, `--voix-seule`, `--legendes` (écrit `legendes.md`), `--programmer --depart AAAA-MM-JJ` avec `--simuler` (défaut : journal des requêtes sans envoi) ou `--oui` (réel, exige `POSTIZ_API_KEY`)
- `bande_son(video, dossier)` — voix seule ou dialogue, même contrat en sortie (audio, mots, durée, bornes, jeu de sprites, `dialogue`)
- `produire(campagne, nom, sortie, travail, voix_seule)` — voix → capture mobile sur plan → montage avec plaque, marque boutique et dialogue éventuel ; écrit `video.json` (dont `plaque_des`, l'instant d'apparition du code) et `legende.txt`
- `programmer(campagne, depart, sortie, simuler, oui)` — en simulation, `programmation.json` contient les corps exacts de `POST /posts` avec des marqueurs à la place de ce que seul Postiz fournit ; en réel, le journal est réécrit après **chaque** envoi

## tiktok/pipeline/postiz.py
Le strict nécessaire de l'API Postiz en Python, pour que quatre vidéos sur TikTok seul n'aient pas besoin d'un workflow n8n de plus. Tout ce qui construit une requête est pur et testé ; seuls `televerser()`, `programmer()`, `etats()` et `integration_tiktok()` parlent au réseau.
- `quand(depart, jour, creneau)` / `en_utc(instant)` — date en heure de Paris **avec fuseau**, convertie en UTC explicite (19:15 Paris en septembre = 17:15Z)
- `chemin_media(upload)` — corrige le `.mp4s` renvoyé parfois par l'upload
- `reglages_tiktok(type, titre, ia, marque)` — `brand_organic_toggle` (« Votre marque », exigé quand on met en avant son propre produit) et `video_made_with_ai` à vrai, `DIRECT_POST`
- `corps_post(integration, media, legende, titre, instant)` — un seul post, une seule intégration
- `trouver_tiktok(integrations)` — le type est lu tel que l'API le déclare (`tiktok-business`), jamais deviné : un `__type` faux ne lève pas d'erreur, il vide les réglages
- `client(cle, base_url)` — clé **nue** dans `Authorization`, sans `Bearer`

## tiktok/campagnes/STUDENT2026.md
Brief de la première campagne (2026-09-06) : l'offre vérifiée, le fil des quatre vidéos, ce qui est prêt, la procédure de lancement dans l'ordre (J-1, J+0 matin, J+0 soir, fin), la mesure, et les décisions restantes (`video_made_with_ai` incohérent entre prod et copie versionnée, date de fin du code, prononciation de « STUDENT », TikTok Promote). Section « Journal » : la vidéo `question` a été **publiée sur TikTok le 2026-09-06 à 23:51** par le workflow n8n manuel `4iuVBidPbm6diS42` (Drive → Postiz, TikTok seul, non versionné ici), état `PUBLISHED` vérifié ; les trois autres restent à programmer.

## tiktok/n8n/campagne-modules-construire-les-posts.js, tiktok/n8n/campagne-vie-reelle-construire-les-posts.js
Code complet des deux nœuds « Construire les posts » (workflows `bx1hubE3ShEmzubj` et `kly59keEBizbGhRg`) **avec** la constante `PROMO_TIKTOK` : pied de campagne entre l'accroche et les hashtags TikTok, label « Votre marque » posé tant qu'elle n'est pas vide. YouTube et LinkedIn inchangés. Écrits par le script de préparation, **pas appliqués** dans n8n : à coller (ou pousser par `update_workflow`) le matin du lancement, à vider à la fin. Vérifiés hors n8n avec Node (légende, label, correction `.mp4s`). Le fichier modules reprend le code **live** (`video_made_with_ai: false`), le fichier vie réelle la copie versionnée (`true`) — incohérence à trancher avant d'appliquer.

## tiktok/n8n/vie-reelle-publication-quotidienne.json
Workflow n8n de publication de la ligne « vie réelle », versionné ici parce qu'il n'existait jusque-là qu'à un seul endroit — l'instance n8n. **Créé le 2026-08-27 sous l'id `kly59keEBizbGhRg`** (fuseau Europe/Paris, workflow d'erreur `xESU9wNV8sMwSyIz`). Déclencheur quotidien 09:15, programme **une** vidéo à 22:00 (heure de Paris) sur TikTok, YouTube Shorts et la **page entreprise LinkedIn**, en un seul `POST /public/v1/posts`.
- `Resoudre les reseaux` — lit les identifiants d'intégration Postiz **à l'exécution** au lieu de les figer : reconnecter un compte change son id, et un id périmé échoue en silence. Résout aussi le piège `linkedin` (profil) / `linkedin-page` (page entreprise) — un `__type` qui ne correspond pas retombe sur des réglages vides **sans lever d'erreur**, donc le type vient de l'API, jamais d'une valeur devinée
- `Choisir le sujet du jour` — trie par `createdTime`, pas par nom : le pipeline fait tourner 8 familles de sujets, un tri alphabétique regrouperait les sujets par première lettre et détruirait l'alternance
- `Preparer la publication` — créneau 22:00, choisi pour ne pas marcher sur les 12:30 / 18:00 / 20:30 de la ligne des modules
- `Construire les posts` — un texte par réseau. TikTok : accroche + hashtags (le lien n'y est pas cliquable). YouTube : + lien + `#Shorts`. LinkedIn page : accroche + phrase de cadrage adressée à des adultes + lien en clair + hashtags sobres — la vidéo tutoie un ado, le public de la page ne l'est pas. Corrige aussi le `.mp4s` renvoyé par l'upload Postiz
- Créneau 22:00 et dossiers Drive `1Ko-Wvt…` (source) / `1VUBsOVSUmcfztpSvDKyHfcXW4YRd1VpE` (Publiés)
