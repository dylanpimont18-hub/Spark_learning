# CODEBASE_MAP — Spark Learning

SPA Vanilla JS sans bundler. Chargement des scripts via `index.html` (ordre critique). État centralisé dans `state.js`.

---

## index.html
Point d'entrée unique. Déclare l'ordre de chargement de tous les scripts.
- Chargement : `<script defer src="...">` dans l'ordre exact requis (Firebase → authService → views (authView, adminPanel) → data → engines → components → app) ; `defer` sur toutes les balises locales/externes pour ne plus bloquer le parsing HTML — l'ordre relatif d'exécution est préservé par la spec `defer`
- `preconnect` posés pour les 4 origines externes utilisées (`fonts.googleapis.com`/`fonts.gstatic.com`, `www.gstatic.com` Firebase, `cdn.jsdelivr.net` KaTeX)
- Aucun bouton de connexion dans l'interface (retiré le 2026-11-22) : les comptes existants se connectent via l'adresse non listée `/connexion` (vue `connexion` → `AuthView.render(true)`, noindex, absente du sitemap)
- Barre du haut (2026-11-23) : `#nav-parcours` renommé « Modules pré-bac » (bouton, vers `/subjects`) et `#nav-btsfed` « BTS FED » (vrai lien `<a href="/bts-fed">`, crawlable, navigation SPA au clic) ; sous 600 px, libellés courts en texte (`.nav-short-text`) : « Pré-bac » / « BTS FED », tient à 360 px
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

## robots.txt
Autorise l'indexation complète sauf les vues privées/éphémères (admin) ; référence `sitemap.xml`.

## firebase.json
Config Firebase Hosting (`public: "."`).
- Rewrite SPA en `regex` RE2 : tout vers `/index.html` **sauf** `/media/…` (RE2 n'a pas de lookahead, d'où les alternatives `[^m]|m[^e]|…`) — un média absent renvoie une vraie 404, pas l'accueil
- En-têtes `/media/**` : `Cache-Control: public, max-age=604800` ; `.rvt` / `.rfa` : `application/octet-stream` + `Content-Disposition: attachment`
- Piège Windows : l'émulateur (superstatic → `glob-slash`) normalise `/bts-fed` en `\bts-fed` sous Windows, donc aucune règle ancrée sur `/` ne s'y applique (même le `**` d'origine sur les routes profondes) ; tester avec un superstatic forcé en `path.posix`, la prod (Linux) n'est pas concernée

## 404.html
Page servie par Firebase quand aucun fichier ni rewrite ne correspond, donc désormais seulement pour `/media/…` absent. Hérité de GitHub Pages (redirection `spa-github-pages`) : la redirection JS est désactivée sous `/media/`, qui affiche « Fichier introuvable ».

## media/bts-fed/
Médias de la page BTS FED, **copiés** par `scripts/build-bts-fed.js` (jamais à la main) : `videos/<id>.mp4` (45), `td/TD{n}-*-etudiant|corrige.pdf` (14), `depart/TD{n}_depart.rvt` (5), `complements/` (TD4 : `Normes_CVC.rvt` + 3 familles `.rfa`), `posters/<id>.jpg` (vignettes produites par ffmpeg) — ~228 Mio, aucun fichier > 50 Mio (pas de Git LFS : Firebase ne lit pas les pointeurs LFS). Référencés avec `?v=<sha1 court>` pour qu'un remplacement (vidéo voisée) contourne le cache de 7 jours.

## sitemap.xml
Généré, jamais édité à la main — voir `scripts/generate-sitemap.js`.

## manifest.json
Manifeste PWA minimal (nom, icône = logo existant, `theme_color` = `--primary`). Pas d'icônes PNG dédiées (aucun outil de manipulation d'image dans l'environnement agent).

## scripts/generate-sitemap.js
Génère `sitemap.xml` à la racine à partir des manifests réels de `js/loader.js` (`DATA_FILES` + `MODULE_INDEX`), sans dupliquer la liste des modules à la main.
- `extractConst(src, name)` — extrait un objet littéral `const NAME = {...}` d'un fichier source par comptage d'accolades (pas de dépendance `acorn`)
- `SECTION_SUBJECTS` — matières à champ `section` (lu par regex dans `js/state.js`) : pas d'URL `/levels/<matière>` (elle redirige vers la section)
- `readBtsFed()` — exécute `js/data/bts-fed.js` en bac à sable (`vm`) et ajoute `/bts-fed` + une URL par TD : aucune liste de TD à maintenir
- Usage : `node scripts/generate-sitemap.js` — à relancer après tout ajout de module (voir `CLAUDE.md` section 3)

## scripts/prerender.js
Pré-rend en HTML statique chaque URL de `sitemap.xml` via Puppeteer headless, pour que Google indexe le vrai contenu sans exécuter le JS de l'app. Testé unitairement (`scripts/test-prerender.js`) sur les fonctions pures ; `main()` (orchestration Puppeteer) vérifié manuellement contre un serveur local. Design et garde-fous : `docs/superpowers/specs/2026-08-09-prerendu-seo-design.md`.
- `parseArgs(argv)` — lève sur un argument inconnu (une faute de frappe comme `--baseurl` ferait sinon crawler la production par défaut)
- `parseSitemapXml(xml)` — extrait les chemins de route des balises `<loc>`, indépendamment du host (utile pour tester contre un serveur local)
- `routeClass(routePath)` — classe de route déduite du 1er segment (`/`, `/subjects`, `/confidentialite`, `/levels/*`, `/modules/*`, `/module/*`) pour le bilan par classe et la règle stricte ; `/bts-fed` et `/bts-fed/tdN` forment une seule classe `/bts-fed`, à **tolérance zéro** (données locales, un échec = vraie panne)
- `renderRoute(page, url, routePath)` — attend le flag `window.__sparkRouteReady` (mis par `_markRouteReady()` dans `js/app.js` une fois `render()`+`updatePageMeta()` exécutés pour la route courante **avec ses données**) **plus** `#app.innerText.length > 50`, au lieu d'un simple seuil de longueur : un seuil est satisfait par n'importe quel contenu déjà présent dans le HTML servi (observé en local contre `scripts/tmp-static-server.js`, qui servait les restes d'un run précédent) et ne prouve donc pas que *cette* route ait été rendue. Un attribut DOM ne conviendrait pas non plus : il serait sérialisé dans le HTML capturé et referait remonter le même faux-positif au run suivant. Si le signal n'arrive pas avant `CONTENT_WAIT_TIMEOUT_MS` : échec dur (throw) sur les routes à tolérance zéro, simple `console.warn` puis capture sur les routes `/module/*` — sans quoi une home au catalogue vide serait publiée telle quelle dans le `index.html` racine, qui sert de repli à tout le site. Assainit ensuite le DOM avant sérialisation : retire les `<script src="js/data/…">` injectés à l'exécution dans `<head>` par `_loadScript()` (sinon ils s'exécuteraient avant `js/data/helpers.js`, script de `<body>` qui crée `window.MODULES`, → `TypeError` sur chaque page pré-rendue) et le chrome d'UI éphémère (`#consent-banner`, `.toast`, `.confetti-container`, `.celebration-*`) ; nettoyage et sérialisation dans **un seul** `page.evaluate()` depuis le 2026-11-23 : en deux appels, le préchargement différé du catalogue (`requestIdleCallback`) réinjectait ses 248 scripts entre les deux (constaté sur `/bts-fed/td6`, route au rendu instantané)
- `isZeroToleranceClass(cls)` — vrai pour toute classe hors `/module/*` (les 12 routes à forte valeur) ; sert à la fois au throw de `renderRoute()` et à la règle stricte de `main()`
- `isValidRender(result, routePath)` — rejette un rendu si `appTextLength < MIN_APP_TEXT_LENGTH` ou si le `<title>` reste générique ("Spark Learning", doublon de `base` dans `updatePageMeta()`) sur une route non-home
- `outputFileForRoute(routePath)` — la route `/` écrit dans `index.html` à la racine (fichier **suivi par git** : `main()` affiche un avertissement bruyant avec la commande de restauration) ; les autres routes écrivent dans `chemin/index.html` (dossiers gitignorés, régénérés à chaque run)
- `main()` — deux règles d'échec cumulatives : ratio global > `MAX_FAILURE_RATIO` (20%), **et** aucune tolérance sur les routes hors `/module/*` (peu nombreuses, à forte valeur — `/` sert en plus de repli via le rewrite `**`)
- Usage : `node scripts/prerender.js [--base-url URL] [--sitemap-file PATH]`

## css/styles.css
Système de design complet : variables CSS (`--primary`, `--secondary`, `--accent`, `--error`, `--space-*`), thèmes, composants UI.
- (2026-10-13, mobile) `.contact-btn` passe en bas à **droite** sous 1024 px et `.scroll-top-btn` s'empile au-dessus : à gauche, la bulle recouvrait la réponse D des quiz, « Valider » des évaluations et les liens du footer ; `.footer` reçoit un `padding-bottom` à ≤ 600 px pour que les deux boutons flottent sur du vide en fin de page
- `.scroll-fade[data-fade=left|right|both]` — fondu de bord (`mask-image`) d'un conteneur qui défile horizontalement (`.tab-bar`, `.level-switch-tabs`, `.theme-switch-tabs`) ; l'attribut est posé par `initScrollFades()` (`js/utils/ui-helpers.js`), jamais à la main
- Cibles tactiles ≥ 24 px (WCAG 2.2) sans changer le visuel : `.breadcrumb-link`, `.footer-legal-link`, `.promo-link` (padding + marges négatives), `.promo-dot` (pseudo-élément `::before` de 32 × 24 px), `.promo-pause` et `.contact-panel-close` (`min-width/height: 32px`)
- `.hero-title { text-wrap: balance }` + espace insécable avant le « : » dans `js/views/home.js` : sur mobile, le deux-points se retrouvait seul sur sa ligne
- `.ap-*` classes pour AdminPanel (conteneur, header, tabs, search, cartes utilisateurs, boutons actions)
- `.auth-close` — bouton ✕ sur `.auth-card` pour fermer l'écran de connexion et revenir au mode invité
- `.auth-subtitle` — sous-titre de l'écran de connexion ; remplace `.auth-tabs`/`.auth-tab`, `.auth-role-*` et `.auth-class-tag`, supprimés le 2026-10-12 avec l'onglet Inscription
- `.ad-slot-placeholder` — cadre pointillé pour les emplacements publicitaires (placeholder, pas de pub réelle encore)
- `.hub-intro-text` — court paragraphe éditorial (`--text-muted`) sous le titre des pages hub (`/subjects`, `/levels/:subject`), ajouté pour la conformité contenu AdSense
- `.content-table-wrap` / `.content-table` — tableau généré par `convertMarkdownTables()` (js/utils/ui-helpers.js) à partir d'un tableau markdown dans le contenu d'un module
- `@media print` (~L3440+) — mise en page A4 des fiches (`.print-fiche`, `.print-fiche-header`, etc.) ; `body.printing` bascule l'affichage de `#app` vers `#print-container` ; `#print-container` fige les variables CSS couleur (`--primary`, `--text`, `--bg-card`...) sur le thème clair, pour que les illustrations riches (`renderCoursDiagram`) restent lisibles en PDF même si le site est en thème sombre à l'impression
- `.stats-levels-details` / `.stats-levels-summary` — replie le détail de progression par niveau (accueil, `renderStatsSection()`) dans un `<details>` pour laisser les widgets d'action en haut de page

## images/modules/{niveau}/{slug}.jpg
Photos réelles utilisées en complément d'un schéma SVG dans `cours.diagram` (jamais en remplacement), référencées via `<img src="images/modules/...">` dans le champ `diagram.svg`/`html`. Uniquement des images sous licence libre (domaine public, CC) car le site est public — contrairement aux fiches BTS FED internes, aucune tolérance "tous droits réservés" ici. Premier exemple : `si-bts/verin-hydraulique-coupe.jpg` (domaine public, Hotdogcartman/Hyco, Wikimedia Commons). Téléchargées par le skill `generer-image` (étape de repli, licence libre uniquement) — jamais par génération IA.

## images/modules/sources.json
Registre de provenance des images de repli téléchargées par le skill `generer-image` (module, fichier, url_source, auteur, licence, date_ajout). Les diagrammes construits par code n'y figurent pas — leur provenance est le calcul/gabarit lui-même.

## firestore.rules
Règles de sécurité Firestore.
- `config/{doc}` — lecture publique (invités inclus, pour lire `maintenanceMode`/annonce), écriture réservée admin
- `devoir_classes/{id}`, `devoir_exercices/{id}` — admin seul (module devoir en classe, 2026-11-26) ; les étudiants n'y accèdent jamais
- `devoir_sessions`, `devoir_copies_prive`, `devoir_evenements`, `devoir_corrections` — lecture admin, **aucune écriture cliente** (Cloud Functions seulement, 2026-11-27)
- `devoir_copies/{id}` — `get` par l'étudiant dont `uid` est celui de la copie (connexion anonyme), `list` admin, aucune écriture cliente ; ne contient ni corrigé, ni barème, ni note
- `devoir_codes`, `devoir_tentatives`, `devoir_historique` — aucune règle : accès serveur uniquement
- Tests : `node scripts/devoir-emulateurs.js test regles` (à passer AVANT tout commit de ce fichier : le hook post-commit le publie en production)
- `users/{uid}` — lecture propriétaire/admin ; **création réservée à l'admin depuis le 2026-10-12** (l'auto-inscription élève/enseignant est retirée de l'interface ; sans ce verrou, n'importe qui pouvait encore créer un compte via l'API Firebase Auth puis écrire son propre profil). Un compte se crée désormais dans la console Firebase, qui contourne ces règles. Rappel : tout commit touchant ce fichier déploie en prod (hook post-commit)

---

## js/state.js
État global de la SPA, constantes, lookup modules, recherche.
- `state` — objet global unique (subject, level, moduleId, tab, quizState, exerciceState, companionState…)
- `LEVEL_DEFS`, `LEVEL_NAMES` — définitions des niveaux (Collège/Lycée/BTS)
- `MODULE_THEME_RULES` — règles regex pour catégoriser les modules par thème
- `getModuleThemes(mod)` — retourne les thèmes d'un module ; si la matière a des `themeGroups` (BTS FED : blocs S8-A à S8-D par préfixe d'identifiant), ils remplacent les règles regex
- `getThemeLabel(themeId)` — libellé d'un thème (règles regex ou `themeGroups`)
- `SUBJECT_DEFS` — matières ; `fed` porte `section: 'btsfed'` (rattachée à la page BTS FED, absente des modules pré-bac) et `themeGroups`
- `isSectionSubject(id)` — vrai pour une matière à section (BTS FED)
- `getModuleSearchKeywords(mod)` — mots-clés pour la recherche
- `defaultQuizState()` — inclut `correctStreak` (compteur de bonnes réponses consécutives dans le quiz courant, remis à 0 sur erreur, déclenche `celebrate('streak')` à 5 dans `js/engines/quizEngine.js`)
- `defaultExerciceState()` — inclut `startedAt: Date.now()` (horodatage de début de tentative, réinitialisé à chaque nouvel exercice) utilisé pour mesurer `durationMs` dans `Storage.trackAttempt()`

## js/app.js
Routeur SPA (pushState), init, KaTeX, confetti.
- Matière à section (BTS FED, 2026-11-24) : `navigate('levels', {subject:'fed'})` redirige vers `btsfed` (adresse comprise) ; le sommaire `btsfed` charge aussi `ensureLevelData('fed', 3)`, même en maintenance ; `updateNavActive()` allume « BTS FED » sur les listes et modules `fed` ; titre « Cours du BTS FED » pour `/modules/fed/3`
- `buildPath(view, data)` — construit (data obligatoire, `{}` au minimum) un chemin d'URL réel `/view/data` (pushState)
- `parsePath(pathname)` / `parseLegacyHash(hash)` — parsent respectivement une URL réelle et un ancien lien `#hash` (rétrocompat), partagent `_parseRouteParts(parts)`
- `navigate(view, data)` — change la vue active via `history.pushState` (plus de hash routing) ; branche à chargement asynchrone (`module`/`modules`/`flashcards`/`chrono`/`companion`/`teacher`/`homework`/`admin`) : appelle `updatePageMeta()` une fois avant le chargement (titre générique) puis **de nouveau après** `render()` une fois `loadPromise` résolu — sans ce second appel (bug corrigé le 2026-08-09), le `<title>`/meta restent génériques sur toute première navigation directe vers une page module malgré un contenu réel déjà affiché ; met aussi `window.__sparkRouteReady` à `false` en entrée puis appelle `_markRouteReady(view)` juste après `render()`+`updatePageMeta()` dans les deux branches (guardé par `_navSequence !== seq` côté async) — signal de disponibilité consommé par `scripts/prerender.js` (`renderRoute()`), voir cette entrée
- Vue `btsfed` (2026-11-23) : routes `/bts-fed` et `/bts-fed/:td` (`buildPath`/`_parseRouteParts`, `state.btsTd`) ; `navigate()` charge `ensureBtsFedData()` (échec absorbé → message d'indisponibilité) ; `updatePageMeta()` titre/description par TD, `noindex` sur un TD inconnu ; `_markRouteReady()` retient le signal tant que `window.BTS_FED` manque
- `_markRouteReady(view)` / `DATA_DEPENDENT_VIEWS` (`home`/`subjects`/`levels`) / `window.__sparkCatalogReady` — ces trois vues lisent `window.MODULES` **synchronement** dans leur `render()` et n'ont pas de `loadPromise` dans `navigate()` : leur premier rendu est complet mais vide (0 carte matière, "0 modules"). Le signal n'est donc levé pour elles qu'une fois `ensureAllData()` résolu et le re-render fait dans `_setupStudentApp()` — sans ce verrou (bug corrigé le 2026-08-09), le pré-rendu capturait `/`, `/subjects` et `/levels/*` avec un catalogue vide, et `/` sert de page de repli pour tout le site via le rewrite `**`
- `_setupStudentApp()` — restaure la route depuis l'URL puis précharge tout le catalogue (`ensureAllData()`) ; immédiat sur `home`/`subjects`/`levels` (`DATA_DEPENDENT_VIEWS`, requis pour leur propre rendu et pour le pré-rendu SEO), différé via `requestIdleCallback` sur les autres routes (mesuré : sinon un lien direct vers un seul module télécharge quand même les 248 fichiers `js/data/*`, ~4,85 Mio). Le `.then()` pose `window.__sparkCatalogReady = true`, re-rend les vues catalogue et lève le signal retenu. Le `.catch()` laisse volontairement le signal à `false` (un pré-rendu de la home sans catalogue doit échouer bruyamment)
- `updatePageMeta()` — remplace l'ancien `updatePageTitle()` : en plus du `document.title`, met à jour dynamiquement description, `<link rel="canonical">`, OG/Twitter Card et `meta name="robots"` (`noindex` sur les vues privées listées dans `NOINDEX_VIEWS`) ; `_updateJsonLd(mod)` injecte/retire un bloc `schema.org/LearningResource` sur les pages module
- `renderMath()` — déclenche KaTeX sur `#app` ; macro `\cdotp` redirigée vers le glyphe unicode ⋅ car le caractère « · » tapé dans le contenu (`\text{M·L}`) plante KaTeX (`\cdotp` indéfini en mode texte)
- Appelle `trackPageView()` (voir `js/analytics.js`) après chaque rendu de vue dans le dispatcher `render()` — sauf branches `admin`/`teacher` (return anticipé, hors suivi)
- `createConfetti()` — animation confetti de succès
- `showToast(msg, type)` — notification toast
- `_checkMaintenance()` — lit `config/settings.maintenanceMode`, affiche la page maintenance si actif (invités + comptes non-admin) ; fail-open assumé si Firestore inaccessible
- `_syncModuleAccess()` — lit `config/moduleAccess.statuses` (Firestore, source de vérité) et remplace `state.moduleAccess` + le cache local `Storage`, pour que le verrouillage/maintenance décidé par un admin s'applique à tous les utilisateurs
- `_setupCommonListeners()` — bind nav globale ; recalcule à chaque appel la visibilité `nav-teacher` (bouton « Admin », admins seulement) et `nav-signout` selon `AuthGuard`
- `filterModules(query)` / `sortModules(criterion)` / `_applyModuleFilters()` — filtre/trie les cartes de `#modules-grid` côté client ; masque aussi `#modules-ad-slot` (voir `js/views/home.js`) quand la recherche ne donne aucun résultat, pour ne jamais afficher de pub sur une grille vide (conformité AdSense)
- Mode invité : `onAuthStateChanged` sans `firebaseUser` → `AuthGuard.reset()` + `_checkMaintenance()` + `_syncModuleAccess()` + `_setupStudentApp()` (accès direct au contenu sans connexion)

## js/loader.js
Lazy loading des fichiers de données par niveau/matière.
- `DATA_FILES` — map `'matière-niveau' → [chemins fichiers]`
- `ensureLevelData(subject, level)` — charge dynamiquement les scripts d'un niveau
- `ensureBtsFedData()` — charge `js/data/bts-fed.js` une fois (pas chargé du tout tant que la page est fermée au visiteur) (promesse mémorisée, remise à zéro en cas d'échec) ; hors `ensureAllData()`

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
- `Storage.getBtsFedSeen()` / `setBtsFedSeen(videoId, seen)` — vidéos BTS FED cochées « Vue » (clé `sparkBtsFedSeen`)
- `Storage.getConsent(category)` / `setConsent(category, granted)` — consentement RGPD par catégorie (expire après 6 mois)

---

## js/data/helpers.js
Initialise `window.MODULES = []`, utilitaires aléatoires.
- `rand(min, max)` — entier aléatoire
- `randFloat(min, max, d)` — flottant aléatoire
- `pick(arr)` — tirage **sans remise** : sert chaque liste par tournées mélangées (tous les éléments sortent une fois avant qu'aucun ne revienne, et une tournée ne redémarre jamais sur l'élément qui vient d'être servi). Mémoire `_tournees` indexée par le *contenu* de la liste, car un `generate()` reconstruit son tableau littéral à chaque appel. Reste déterministe sous `Math.random` ensemencé. Avant (tirage uniforme), des paires d'exercices consécutifs partageaient souvent leur contexte narratif.
- `fr(value, decimals)` — formate un nombre en notation décimale française pour LaTeX (`fr(1.5)` → `"1{,}5"`) ; à utiliser dans tout `exercice.generate()` au lieu de `.replace('.', '{,}')` à la main

## scripts/check-decimal-notation.js
Détecte les régressions du bug de notation décimale française dans `js/data/` (accolade `{,` manquante, `.toFixed(n)` interpolé sans `fr()`).
- Usage : `node scripts/check-decimal-notation.js` — à lancer après toute modification d'un `exercice.generate()` (voir `CLAUDE.md` section 2)

## scripts/build-bts-fed.js
Publie les TD L'Escale (BTS FED) depuis `Desktop\Enseignement\BTS FED` (chemin relatif au dépôt, option `--source`) : copie vers `media/bts-fed/` et écrit `js/data/bts-fed.js`. Relançable, sans dépendance npm ; requiert `ffprobe`, `ffmpeg`, `pdftotext`.
- `syncFile(src, dest)` — copie si taille/date diffèrent, reporte la date source ; refuse > 50 Mio
- `probeVideo(file)` — durée (ffprobe) ; voix = pic sonore > −50 dB (ffmpeg volumedetect) : les vidéos muettes portent une piste AAC de silence, la présence d'une piste ne prouve rien
- `isFastStart(file)` — vérifie que l'atome `moov` précède `mdat` (lecture/avance sans tout télécharger)
- `parseVideoSheet(md)` — publie seulement titre, « Ce qu'on retient » et « Pièges » ; filet `FORBIDDEN` (chemins, crochets de places réservées, « lien à compléter », notes de tournage « hors caméra / la voix le dit ») ; un item « hors caméra » écarté pose `horsChamp: true`
- `parseStatement(pdf)` — page 1 de l'énoncé via `pdftotext` (césures U+00AD recollées) : titre, durée, « À la fin de ce TD, je saurai… », « Fichier de départ »
- Version voisée : `<id>-AVEC-VOIX.mp4` prioritaire sur `<id>.mp4`, publiée sous `<id>.mp4` ; exclusions : `TD1-C-niveaux-pilote`, `sources-TD0`, `*.0001.rvt`, `TD-maison-*`
- Réglages : `scripts/bts-fed.config.json` (`presentation`, `fichiersComplementaires`, `disponibleLe`, `modulesLies`) via `loadConfig()`
- `loadYoutube()` — lit `scripts/bts-fed.youtube.json` ; pose `youtube: <id>` sur une vidéo seulement si le `hash` envoyé correspond au fichier actuel (sinon avertissement, le site lit le fichier local)

## scripts/youtube-daily.js
Tâche planifiée Windows « Spark Learning - envoi YouTube » (chaque jour à 11 h, session ouverte) : pull sur `main` (rien si autre branche), envoi des vidéos suivantes (limite YouTube 10/jour), `--thumbnails-only`, `--publish` une fois les 45 envoyées, `--apply`, puis commit + push des seuls `js/data/bts-fed.js`, `scripts/bts-fed.youtube.json`, `index.html` (`?v=` +1). Se supprime quand tout est envoyé, public et en ligne. Journal : `~/.config/spark-youtube/daily.log`.

## scripts/youtube-upload.js
Envoie les vidéos des TD BTS FED sur la chaîne YouTube « Spark Learning » (non répertoriées, une playlist par TD + une pour le film de présentation), via l'API YouTube Data v3, sans dépendance npm. Identifiants hors dépôt : `~/.config/spark-youtube/` (`client_secret.json` client OAuth bureau du projet `spark-learning-7d96b`, `token.json`). Écrit `scripts/bts-fed.youtube.json` après chaque envoi (reprise possible).
- `--whoami [--confirm-channel]` — affiche / enregistre la chaîne d'envoi ; tout envoi refuse une autre chaîne
- `--dry-run`, `--max N`, `--only <id>`, `--no-thumbnails`, `--thumbnails-only` (rattrape les vignettes, flag `thumb`), `--publish` (vidéos + playlists en publique, flag `public`)
- `--apply` / `applyToSiteData()` — reporte les identifiants dans `js/data/bts-fed.js` avec la même règle et le même ordre de clés que `build-bts-fed.js` (fichier identique), sans recopier les médias
- `metadata(item, data)` — titre, description (lien du TD, chapitres YouTube depuis 00:00, « À retenir »), catégorie Éducation, `unlisted`, pas « conçu pour les enfants »
- `authorize(client)` — OAuth bureau + PKCE, redirection `http://localhost:<port>` ; depuis un autre ordinateur : rejouer l'adresse finale sur `127.0.0.1:<port>` de ce PC
- Quota du jour atteint (`QuotaError`) : arrêt propre, relancer le lendemain. Vignettes personnalisées : refusées tant que la chaîne n'est pas vérifiée par téléphone (désactivées pour la suite du lot)
- `makePoster()` — vignette JPEG 960 px (carte de titre si le minutage la situe, sinon image à 2 s), refaite seulement quand la vidéo change
- `parseChapters()` — minutage `segments.json` (muette) ou `montage.json` (voisée) × libellés du tableau d'étapes de la fiche ; TD6 n'a pas de `segments.json` → pas de chapitres
- `extractControls()` — « Contrôle : … » et résultats chiffrés avec unité tirés des points à retenir (hors « par défaut » / « après l'import »)
- `resolveModules()` — vérifie chaque `fed-bts-…` lié et lit son titre
- Signale les fichiers publiés dont la source a disparu (ne supprime rien)

## scripts/lib/
Chargeur de modules hors navigateur (rescapé de l'ancienne chaîne des manuels, supprimée le 2026-11-21), utilisé par `check-decimal-notation.js` et `analyser-corpus.js`.
- extract.js:chargerModule(chemin, graine) — exécute un module en bac à sable
- schema.js:validerModule(m) — valide la structure d'un module
- corpus.js:listerModules() — liste les modules de js/data (exclut `bts-fed.js`, données de page et non module)

## scripts/analyser-corpus.js
Mesure le corpus mathématiques (9 niveaux, 112 modules) sans lecture manuelle : charge chaque module hors navigateur (contexte `vm` + `helpers.js` + `figures-exercices.js`, `Math.random` ensemencé), tire `generate()` 60 fois sous `try/catch`, et écrit `docs/analyse-corpus-maths-<date>.csv` (une ligne par module, séparateur `;`) et `.md` (distribution par niveau, 20 modules les plus faibles, liste exhaustive des défauts avec `fichier:ligne`). Créé pour l'audit de contenu du 2026-10-13.
- Mesures : complétude et longueur de chaque champ du cours, blocs denses (≥ 60 mots sans `<br/><br/>`), `<strong>` ; quiz (questions, options, corrections, doublons, index fixe, distracteurs aberrants) ; exercice (exceptions, moules via `squeletteEnonce`, contextes, `answer` non fini, décimale anglaise, `undefined`/`NaN`, `hint`, type de `solution`) ; problème ; évaluation (points, durée, compétences) ; alignement lexical cours ↔ questions (lexique technique = `keywords` + `<strong>` courts de tout le corpus) ; langue (mots non accentués dans le texte affiché, les `<text>` et les `<title>`/`<desc>` des SVG ; phrases > 35 mots).
- Score composite /100 dont la pondération est écrite en tête du script (fiabilité 30, variété 15, quiz 20, cours 15, évaluation 10, alignement 5, langue 5) : sert à **prioriser** les lectures, pas à juger.
- Usage : `node scripts/analyser-corpus.js [--niveaux 6e,5e] [--modules id1,id2] [--tirages 60] [--date AAAA-MM-JJ] [--sortie docs] [--json chemin]` — à relancer après un lot de corrections pour vérifier que les modules touchés ont bougé dans le bon sens.
- Réutilise `scripts/lib/extract.js` (`chargerModule`, `squeletteEnonce`), sinon un chargeur interne équivalent.
- Pièges calibrés le 2026-10-13 : lookarounds Unicode obligatoires (`\w` ne voit pas « è » et « mètres » faisait remonter un faux « tres ») ; les `<desc>` des SVG sont systématiquement non accentués (convention d'écriture, lecteurs d'écran seulement) donc pesés à 0,1 ; un écart d'ordre de grandeur n'est pas un distracteur aberrant quand la question porte sur une échelle, une puissance de dix ou une conversion.

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

## js/data/3e/*.js *(13 modules)*
Modules Maths 3e : trigonométrie, systèmes, Thalès, arithmétique, identités remarquables, équations-inéquations, fonctions, **fonctions affines et linéaires**, homothéties, sections solides, volumes, stats-probas, algorithmique.
- `3e-fonctions-affines.js` — écrit le 2026-08-16. Le croisement programme × `js/data` × chapitres composés avait montré que la notion (centrale au brevet : coefficient directeur, ordonnée à l'origine, droite, lien avec la proportionnalité) n'existait **nulle part** dans le corpus, alors que `docs/programmes-maths.md` la donnait pour faite. Déclaré dans `js/data/3e/index.js`, `js/loader.js` (`DATA_FILES` + `MODULE_INDEX`), `contenu.md`.

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

## js/data/physique-4e/*.js + physique-3e/*.js *(12 modules, complet)*
Modules Physique-Chimie collège (`level: 1`), dossiers séparés des dossiers maths `4e/`/`3e/` de même grade. 4e : atomes/molécules, transformations chimiques, vitesse, intensité/tension, lois des circuits, lumière. 3e : structure de l'atome/ions, réactions chimiques, énergie cinétique/potentielle, résistance/loi d'Ohm, puissance électrique, gravitation.

## js/data/physique-2nde/*.js + physique-1re/*.js + physique-tle/*.js *(32 modules, complet)*
Modules Physique-Chimie lycée (`level: 2`), dossiers séparés des dossiers maths `lycee-2nde/`/`lycee-1re/`/`lycee-tle/`. Seconde (10) : mouvement, forces, inertie, corps purs/mélanges, solutions, transformations, modèle de l'atome, signaux/capteurs, son, lumière. Première spé (11) : champ gravitationnel, champ électrostatique, cinématique, lois de Newton, travail/énergie, avancement de réaction, titrage, Lewis, ondes mécaniques, lumière ondulatoire, Kirchhoff. Terminale spé (11) : mouvement en champ uniforme, satellites/planètes, dynamique newtonienne, énergie mécanique, thermodynamique, évolution chimique, acides/bases, oxydoréduction, ondes/signaux, physique quantique, radioactivité. Généré le 2026-08-19 via 8 agents parallèles (un par grade, deux lots pour 2nde/1re/Tle) ; intégré dans `js/loader.js` (`DATA_FILES['physique-1']`/`['physique-2']`, `MODULE_INDEX`) depuis un worktree isolé pour ne pas perturber une session concurrente active sur `manuels-spark`.

---

## js/engines/shared.js
Utilitaires partagés entre tous les moteurs.
- `_setEngineTimeout(fn, delay)` — setTimeout tracé pour nettoyage
- `clearEngineTimers()` — vide tous les timers actifs
- `_checkModuleComplete(moduleId)` — vérifie et notifie la complétion d'un module ; déclenche `celebrate('level-complete')` (`js/components/celebration.js`) en plus du toast et du badge `addBadge('niveau-complete-{subject}-{level}', ...)` (`js/engines/companionEngine.js`) quand tous les modules d'un niveau sont complétés
- `_readNumericInput(inputEl)` — parse la saisie, applique le style d'erreur (bordure + placeholder) et retourne `null` si invalide ; factorisé depuis `exerciceEngine.js`/`evaluationEngine.js` (audit 2026-08-19, code dupliqué identique dans les deux)

## js/engines/quizEngine.js
Moteur de quiz.
- `submitQuizAnswer(moduleId, questionIndex, optionIndex)` — traite une réponse quiz ; incrémente `state.quizState.correctStreak` sur bonne réponse (remis à 0 sur erreur) et déclenche `celebrate('streak')` à la 5e bonne réponse consécutive
- `nextQuizQuestion(moduleId)` — passe à la question suivante
- `resetQuiz(moduleId)` — remet à zéro le quiz

## js/engines/exerciceEngine.js
Moteur d'exercice dynamique.
- `submitExerciceAnswer(moduleId)` — valide la réponse saisie (via `_readNumericInput`, `js/engines/shared.js`) ; mesure la durée depuis `state.exerciceState.startedAt` et l'envoie à `Storage.trackAttempt(..., durationMs)`, alimente le poids "temps anormal" du score de lacune
- `getErrorFeedback(mod, attempts)` — génère un message d'erreur adapté
- `showHint(moduleId)` / `showSolution(moduleId)` — affichent indice/solution et appellent `Storage.trackHintUsed`/`Storage.trackSolutionRevealed` (voir `js/storage.js`)
- `generateNewExercice(moduleId)` — génère un nouvel exercice aléatoire, réinitialise `state.exerciceState` (dont `startedAt`)

## js/engines/problemeEngine.js
Moteur de problème multi-étapes.
- `revealSolution(moduleId, taskIndex)` — dévoile la solution d'une étape

## js/engines/evaluationEngine.js
Moteur d'évaluation (questions numériques).
- `submitEvaluationAnswer(moduleId)` — valide une réponse d'évaluation (via `_readNumericInput`, `js/engines/shared.js`)

## js/engines/companionEngine.js
Moteur Spark Companion : remédiation, rattrapage, badges, répétition espacée (granularité module).
- `detectLacunes(moduleId)` — calcule un score de lacune pondéré par section (`quiz`/`exercice`/`probleme`) à partir de `Storage.getTracking()` : taux d'erreur 45%, score faible 20%, indice utilisé 15%, solution révélée 10%, temps anormal 10% (constantes `LACUNE_SEVERITY_THRESHOLD`, `LACUNE_SLOW_ATTEMPT_MS`) ; retourne `{ section, label, severity, reasons }[]`, une section jamais tentée obtenant une sévérité maximale
- `getRemediationRecommendations(subject, level)` — modules du sujet/niveau ayant au moins une lacune, triés par sévérité décroissante ; expose `severity`, `reasons`, `weakestSection` par module, consommé par `renderCompanionHome()` (`js/components/companion.js`)
- `generateRemedialExercise(moduleId, topic)` — génère un exercice de remédiation (quiz/exercice/problème) pour une session Companion
- `validateRemedialAnswer(moduleId, exerciseType, answer, expectedAnswer)` — valide une réponse (égalité stricte après `parseFloat`, pas de tolérance) ; appelée par `submitCompanionQuiz`/`submitCompanionExercise` (`js/components/companion.js`) qui retrouvent l'exercice via `state.companionState.remediation.currentExercises` (corrigé le 2026-08-19 : ces deux fonctions ignoraient la vraie réponse et validaient sur un raccourci codé en dur — cf. commentaires "Simplifié" retirés)
- `addBadge(badgeId, label)` — ajoute un badge (dédupliqué par id) et déclenche `celebrate('badge')` uniquement à l'ajout effectif d'un nouveau badge. Déclencheurs câblés le 2026-08-19 : `niveau-complete-{subject}-{level}` dans `_checkModuleComplete()` (`js/engines/shared.js`, quand tous les modules d'un niveau/matière sont complétés) et `rattrapage-complet` dans `_checkRemediationSessionComplete()` (`js/components/companion.js`, quand tous les exercices générés d'une session ont été tentés au moins une fois)
- `addCompanionPoints(amount)` / `initRemediationContext(moduleId)` / `trackRemediationAttempt(...)` — points, contexte de session Companion
- `completeObjective(objectiveId)` — déplace un objectif CCF de `inProgress` vers `completed`. **Toujours jamais appelée nulle part** (audit 2026-08-19, non résolu) : `state.companionState.objectives.inProgress` n'est alimenté par AUCUN code — il n'existe nulle part de liste d'objectifs CCF réels à pousser dedans. Cabler `completeObjective()` nécessite d'abord une vraie source de contenu (liste d'objectifs CCF par spécialité BTS), pas juste un appel de fonction ; non fait pour éviter d'inventer du contenu pédagogique
- `scheduleReview(moduleId, isCorrect)` — réplanifie la révision espacée d'un **module entier** sur l'échelle `SRS_LADDER_DAYS = [1,3,7,16,35]` (retour à l'échelon 0 en cas d'échec, bonus de 15 points Companion si une révision en retard est réussie) ; appelée depuis `quizEngine.js`/`exerciceEngine.js`/`evaluationEngine.js` à chaque tentative validée
- `getDueReviews()` — modules dus/en retard (triés, hors modules verrouillés/introuvables), consommé par `renderSrsReviewWidget()` (`js/views/home.js`)

---

## js/consent.js
Bannière de consentement cookies (RGPD/CNIL) ; un seul consentement global couvre pub ET mesure d'audience.
- `Consent.hasAdConsent()` — lit `Storage.getConsent('ads')`, utilisé par `analytics.js` (plus aucune publicité depuis le 2026-11-22)
- `Consent.accept()` / `Consent.reject()` — enregistrent le choix ; `accept()` déclenche `trackPageView()`
- `Consent.init()` / `Consent.showBanner()` / `Consent.hideBanner()` / `Consent.openPreferences()` — cycle d'affichage de la bannière ; `init()` **retire** un `#consent-banner` déjà présent dans le HTML servi quand le choix est déjà fait (auto-réparation d'une bannière figée dans une page pré-rendue, qui donnerait sinon l'impression que le choix RGPD est ignoré à chaque chargement)

## js/analyticsConfig.js
Point unique de contrôle du suivi d'audience (Google Analytics 4).
- `ANALYTICS_ENABLED` — `true` : suivi actif (propriété GA4 créée le 2026-07-06)
- `GA_MEASUREMENT_ID` — `G-QPNXD2D9VD`, Measurement ID de la propriété GA4 de sparklearning.fr

## js/analytics.js
Chargement différé de gtag.js (GA4) et suivi des pages vues (SPA pushState, pas de détection automatique des routes par GA4).
- `loadAnalytics()` — injecte le script `gtag.js` si `ANALYTICS_ENABLED` + `GA_MEASUREMENT_ID` + `Consent.hasAdConsent()` ; idempotent (`window._gaLoaded`)
- `trackEvent(name, params)` — événement GA4 personnalisé, mêmes garde-fous (activé + consentement) ; utilisé par `js/views/btsFed.js`
- `trackPageView()` — envoie un événement `page_view` (path/title/location courants) ; appelée depuis `js/app.js` (dispatcher `render()`) et `Consent.accept()`

## js/components/renderCours.js
Rendu HTML de l'onglet Cours d'un module (écran, pas impression).
- `renderCours(mod)` — intro, définitions, méthode, exemple, formules, illustration(s), piège, récap, application
- `coursDiagramList(c)` — liste normalisée des schémas d'un cours : `cours.diagram` (un seul, format historique) et/ou `cours.diagrams: []` (plusieurs) ; le titre de section bascule en "Illustrations" au pluriel dès qu'il y en a plus d'un ; utilisée aussi par `renderFicheCours()` pour l'impression
- `renderCoursDiagram(diagram, subjectId)` — rend une illustration au format legacy (string HTML) ou riche (objet `{svg, title, kicker, description, notes, reading, caption, theme}`) ; réutilisée par `renderFicheCours()` (`js/utils/ui-helpers.js`) pour l'impression

## js/components/moduleTabs.js
Rendu des onglets d'un module (cours / quiz / exercice / problème / évaluation / flashcards).
- `renderTabContent()` — après avoir marqué l'onglet actif, le fait défiler au centre de `.tab-bar` quand la barre déborde (mobile : six onglets pour ~350 px, « Évaluation » et « Remédiation » étaient hors écran sans indice) et rafraîchit le fondu de bord via `initScrollFades()`
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
- `renderCompanionSession()` — l'en-tête `.session-header` (styles inline dans le composant, pas dans `css/styles.css`) est en `flex-wrap: wrap` depuis le 2026-10-13 : sur mobile, « N lacune(s) détectée(s) » débordait à droite et faisait défiler toute la page de 34 px
- `renderCompanionHome()` — accueil companion (badges, objectifs CCF) ; section "💡 À retravailler en priorité" alimentée par `getRemediationRecommendations()` (`js/engines/companionEngine.js`) : top 3 modules par sévérité, raison concrète affichée (`rec.reasons`), CTA contextuel selon `rec.weakestSection` (Revoir le cours / Refaire le quiz / Lancer un exercice ciblé / Revoir le problème)
- `renderCompanionSession(moduleId)` — session de remédiation active ; la liste des lacunes (`ctx.lacunes`) est un array d'objets `{ section, label, severity, reasons }` (pas des tuples `[topic, count]`) ; persiste les 3 exercices générés dans `state.companionState.remediation.currentExercises` pour que `submitCompanionQuiz`/`submitCompanionExercise` (ci-dessous) puissent retrouver la vraie réponse attendue
- `submitCompanionQuiz(moduleId, exerciseId, optionIndex)` / `submitCompanionExercise(moduleId, exerciseId)` — retrouvent l'exercice dans `currentExercises` et appellent `validateRemedialAnswer()` (`js/engines/companionEngine.js`), puis `_checkRemediationSessionComplete()`
- `_checkRemediationSessionComplete()` — décerne le badge `rattrapage-complet` la première fois que tous les exercices de `currentExercises` ont été tentés au moins une fois (`state.companionState.remediation.attempts`)

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

## js/views/home.js
Vues globales : accueil, liste matières, niveaux, modules, détail module.
- `renderModulesList()` / `renderModuleDetail()` — `.level-switch-tabs`, `.theme-switch-tabs` et `.tab-bar` portent la classe `scroll-fade` (défilement horizontal + fondu de bord). Piège : `.level-switch-tabs` est un **frère** de `.level-switcher`, pas un enfant — le `overflow-x: auto` du switcher ne le couvrait pas et, sur mobile, la liste des modules faisait défiler toute la page de 24 px
- Cartes de navigation (matière/niveau/module/reprise/breadcrumb/prev-next) rendues en `<a href="${buildPath(...)}">` (pas des `<div onclick>`) — 2026-08-18, fix indexation Search Console : Google ne trouvait aucun lien interne crawlable, seulement 3/220 pages indexées
- `renderContinueSection()` — section "Reprendre ton parcours"
- `renderStreakBadge()` — badge streak 🔥 factorisé (utilisé par `renderHome()`, indépendamment de `renderStatsSection()`) ; affiché dès le jour 1 ("Tu démarres ta série aujourd'hui") pour renforcer l'habitude dès la première visite, message différent à partir de 2 jours
- `renderStatsSection()` — "Mes statistiques" : total global toujours visible, détail par niveau replié dans un `<details class="stats-levels-details">` pour ne pas noyer les blocs d'action au-dessus
- `renderNextStepWidget()` — widget "Prochaine étape : …" basé sur `getRecommendations()` (`js/recommendations.js`) ancré sur le dernier module visité (`getRecentModules()[0]`) ; ne s'affiche que si aucune révision n'est due (`getDueReviews()`), pour n'exposer qu'une seule action prioritaire à la fois sur l'accueil
- `renderHome()` — page d'accueil ; empile dans l'ordre `renderStreakBadge()` → `renderSrsReviewWidget()` → `renderNextStepWidget()` → `renderContinueSection()` → `renderStatsSection()` ; dernière section = CTA "Nos cahiers de révision" vers la boutique Shopify
- `renderSubjects()` — liste des matières pré-bac (exclut les matières à `section`, donc BTS FED)
- `renderLevels()` — niveaux d'une matière
- `renderModulesList()` — grille des modules d'un niveau ; matière à section : parcours par thème seul, retour vers la section
- `renderModuleDetail()` — page détail d'un module ; matière à section : fil d'Ariane « 🌡️ BTS FED › Cours › module »
- `renderSubjects()` — filtre les matières à 0 module (plus de badge "Bientôt disponible" public), affiche un court texte éditorial (`.hub-intro-text`) au-dessus de la grille ; plus d'emplacement pub sur cette page (retiré 2026-07-30)
- `renderLevels()` — affiche `subjectDef.description` en texte éditorial (`.hub-intro-text`) sous le titre
- `renderHome()` — page d'accueil, volontairement sans bloc pub (page à contenu essentiellement promotionnel, retiré suite à un rejet AdSense "contenu à faible valeur informative") ; jamais de pub non plus dans les onglets d'apprentissage actif (`module`)
- `renderSrsReviewWidget()` — encart "À réviser aujourd'hui" alimenté par `getDueReviews()` (`js/engines/companionEngine.js`), priorité la plus haute des widgets d'action de l'accueil

## js/views/confidentialite.js
Politique de confidentialité (RGPD). Section publicité retirée le 2026-11-22.
- `renderConfidentialite()` — page statique : localStorage sans compte, données Firebase pour les comptes existants (plus aucune création de compte possible depuis le 2026-10-12, section 2 reformulée), publicité AdSense non personnalisée, formulaire de contact (Formspree, bulle + page `/contact`), lecteur YouTube des vidéos BTS FED (youtube-nocookie, chargé au clic, ajouté le 2026-11-24), droits RGPD. Route `#confidentialite`, lien en footer.

## js/views/contact.js
Page de contact dédiée (question, erreur, proposition commerciale, partenariat, presse), complément pro de la bulle flottante (`js/components/contactPanel.js`).
- `renderContact()` — page statique : formulaire nom/email/catégorie (5 chips)/message. Route `#contact` (`/contact`), lien en footer.
- `handleContactPageSubmit(e)` — soumet via `fetch` vers le même endpoint Formspree que la bulle (`xnjgyrjd`), inclut `name`/`email` pour activer le reply-to natif Formspree

## js/views/btsFed.js
Page BTS FED (TD Revit / ArchiWIZARD, projet L'Escale), données `window.BTS_FED`. Vouvoiement, comme les énoncés.
- `isBtsFedOpen()` / `isBtsFedAdmin()` / `isBtsFedClosedForViewer()` — ouverture au public pilotée par `config/settings.btsFedOpen` (Firestore, case du panneau admin), lu via `window.__sparkPlatformSettings` (posé par `_checkMaintenance()` de `js/app.js`). **Fermée par défaut** (champ absent ou lecture impossible) ; un admin voit toujours la page, avec bandeau. Fermée : `renderBtsFedMaintenance()` (avec la section « Les cours »), noindex, aucune donnée des TD chargée. Le pré-rendu CI capture l'état du moment du déploiement
- `getBtsFedTd(id)` — TD par identifiant (`td0`…`td6`)
- `renderBtsFedHome()` — sommaire : film de présentation (`BTS_FED.presentation`) puis une carte `.bts-td-card` par TD (numéro, titre, logiciel, vidéos, progression « vues », « Corrigé le … » avant la date), puis `_btsCourses()`
- `_btsCourses()` — section « Les cours » (`#bts-cours`) : modules de la matière `fed` (retirés des modules pré-bac le 2026-11-24), une carte « Tous les cours » + une par bloc S8 ; aussi affichée sur la page de maintenance
- `btsOpenCourses(themeId)` — ouvre `/modules/fed/3` filtré sur un bloc
- `_btsYtPlayer(v, tdId)` / `btsYtStart(videoId, t)` — vidéo à `youtube` : vignette du site jusqu'au clic, puis lecteur youtube-nocookie piloté par l'API IFrame (chargée au clic) ; `btsSeek()` passe par `_btsYtSeek()` ; repli sur `_btsFilePlayer()` si YouTube ne charge pas
- `_btsStarted(el)` / `_btsCompleted(el)` — suivi commun aux deux lecteurs : `video_start`, case « Vue » et `video_complete` à 90 %
- `renderBtsFedTd(id)` — en-tête (objectif + point de départ tirés de l'énoncé), boutons `download` (énoncé, corrigé, maquette, mémo), fichiers complémentaires, encadré « Valeurs pour vérifier votre travail », vidéos `preload="none"` avec vignette (`poster`), chapitres cliquables, case « Vue », points à retenir / pièges, « Revoir les notions » (modules S8), pager. Avant `disponibleLe` : corrigé, vidéos, contrôles et mémo masqués
- `_btsDisponible(td)` — date de mise en ligne atteinte (ou admin) ; simple masquage, les fichiers restent dans le dépôt public
- `btsSeek(videoId, t)` — saut à un chapitre (charge les métadonnées si `preload="none"`, puis lecture)
- `btsToggleSeen(videoId, seen)` — case « Vue » (`Storage.setBtsFedSeen`), cochée d'office à 90 % de lecture
- `btsPrintMemo(tdId)` — remplit `#bts-print-memo` et imprime : seul ce bloc sort (`body.bts-printing`, `@media print`), 2 colonnes
- Écouteurs `play`/`timeupdate`/`ended` (capture, sur `document`) et clics `a[data-bts-file]` → `trackEvent()` : `video_start`, `video_complete`, `bts_download`, `bts_print_memo`
- Styles : section « BTS FED » en fin de `css/styles.css` (`.bts-*`, accent `--fed`)

## js/data/bts-fed.js
**Généré** par `scripts/build-bts-fed.js`, ne pas éditer. `var BTS_FED = { projet, presentation: <vidéo>, tds: [{ id, num, titre, logiciel, duree, niveauGcf, objectif, depart, disponibleLe, enonce, corrige, maquette, complements, modules: [{id, titre}], controles: [{texte, video}], videos: [{ id, titre, duree, voix, url, poster, taille, chapitres: [{t, titre}], retenir, pieges, horsChamp }] }] }`. Lu aussi par `scripts/generate-sitemap.js`.

## js/auth/authService.js
Service d'authentification et d'autorisations Firestore.
- (2026-10-12) `signUpWithEmail()` et `createUserProfile()` supprimés : l'inscription publique n'existe plus ; un compte se crée dans la console Firebase (Auth + document `users/{uid}`)
- `signIn(email, password)` — connecte l'utilisateur
- `signOut()` — déconnecte
- `getPlatformSettings()` / `savePlatformSettings(data)` — lit/écrit `config/settings` (dont `maintenanceMode`)
- `getModuleAccess()` / `saveModuleAccess(statuses)` — lit/écrit `config/moduleAccess.statuses` (verrouillage/maintenance par module, lecture publique, écriture admin) : rend le verrouillage admin effectif pour tous les utilisateurs

## js/auth/authGuard.js
Vérifie l'état Firebase auth avant d'afficher l'app (profil, rôle, statut).
- `AuthGuard.init(user)` — reçoit l'utilisateur Firebase déjà résolu par l'unique listener global de `js/app.js`, charge le profil Firestore une fois ; NE s'abonne PAS lui-même à `onAuthStateChanged` (évite l'empilement de listeners imbriqués à chaque rafraîchissement de token)
- `AuthGuard.reset()` — efface `_currentUser`/`_currentProfile` (utilisé au retour en mode invité)
- `AuthGuard.isAuthenticated() / getRole() / getStatus()` — accesseurs d'état

## js/views/authView.js
Page Connexion uniquement (overlay plein `#app`, header/nav restent visibles). Email + mot de passe. L'onglet Inscription (choix du rôle élève/enseignant, codes de classe) a été **supprimé le 2026-10-12** : les comptes publics n'étaient pas utilisés ; les comptes restants (enseignants, classes, tutorat) se créent à la main dans la console Firebase. L'auth par téléphone (SMS) avait déjà été retirée (offre Blaze refusée).
- `AuthView.render(fromGuest)` — affiche l'écran de connexion (titre « Connexion » + `.auth-subtitle` précisant que tout le contenu reste accessible sans compte) ; si `fromGuest`, ajoute un bouton `.auth-close` (✕)
- `AuthView._closeToGuest()` — ferme l'écran de connexion et revient à l'accueil en mode invité (`navigate('home')`)
- `AuthView.renderPending()` — écran d'attente de validation enseignant (conservé pour d'éventuels comptes `pending` déjà existants)
- `AuthView._renderLogin()` — vrai `<form>` (soumission à Entrée), labels liés par `for`, `autocomplete` email / current-password, zone d'erreur `role="alert"`
- `AuthView._loginEmail()` — désactive le bouton et affiche « Connexion… » pendant l'appel Firebase ; ne le réactive qu'en cas d'échec (le succès est pris en charge par `onAuthStateChanged` dans `js/app.js`)

## js/views/adminPanel.js
Panneau d'administration (espace enseignant retiré le 2026-11-22) : annonce globale, mode maintenance, verrouillage/maintenance des modules, comptes, historique.
- `AdminPanel.render()` — point d'entrée async, affiche le panneau
- `AdminPanel._switchTab(tab)` — bascule entre onglets (all/modules/logs/devoirs ; `devoirs` délègue à `DevoirAdmin.render()`, voir `js/devoir/devoirAdmin.js`)
- `AdminPanel._loadTab(tab)` — charge les données de l'onglet actif via `AuthService` ; onglet `modules` attend `ensureAllData()` avant de rendre (nécessaire car le chemin `role === 'admin'` de `js/app.js` appelle `AdminPanel.render()` directement, sans passer par `navigate()` qui charge normalement toutes les données)
- `AdminPanel._renderAll(users)` — rendu tous les comptes avec filtres de rôle (`_roleFilter`) et barre de recherche ; alimente `_allUsersCache`
- `AdminPanel._applyRoleFilter(users)` / `_setRoleFilter(role)` — filtre client-side par rôle (Tous/Élèves/Admins), combiné avec la recherche texte dans `_filterUsers`
- `AdminPanel._renderModulesTab()` — onglet "Modules" : verrouillage/maintenance par matière (`setSubjectAccessMode`) ou par module (`setModuleAccessMode`) ; réintègre l'UI qui vivait auparavant dans la page morte `renderAdminPage()` (`js/views/home.js`, supprimée) — sans cet onglet, il n'existait plus aucun moyen dans l'interface de verrouiller un module
- `AdminPanel._renderLogs(logs)` / `_renderLogsList()` — onglet Historique avec filtres par type d'action (`_logActionFilter`) et par admin (`_logAdminFilter`), calculés dynamiquement à partir des logs chargés (`_logsCache`)
- `AdminPanel._setStatus(uid, status)` — modifie le statut d'un utilisateur
- `AdminPanel._saveSettings()` — enregistre `maintenanceMode` et `btsFedOpen` (case « Page BTS FED ouverte au public ») dans `config/settings`, et met à jour `window.__sparkPlatformSettings` pour un effet immédiat ; la case « Inscription enseignants activée » (`teacherSignupEnabled`) a été retirée le 2026-10-12 avec l'inscription publique (elle n'était d'ailleurs lue nulle part)
- `setSubjectAccessMode(subjectId, mode)` / `setModuleAccessMode(moduleId, mode)` — fonctions globales async (hors objet `AdminPanel`, extraites de `js/app.js`) : verrouillage/maintenance par matière ou par module ; calculent la carte cible puis **attendent la confirmation d'écriture** (`AuthService.saveModuleAccess()`) avant de mettre à jour `Storage`/`state.moduleAccess` et de re-render — sinon l'admin voyait le verrouillage confirmé localement même si l'écriture Firestore (lue par tous, y compris invités) avait échoué ; appelées désormais depuis l'onglet Modules d'`AdminPanel` (ex-`renderAdminPage()` de `home.js`, supprimée)

## js/devoir/devoirEngine.js
Moteur de variantes du module devoir en classe (MVP-1, 2026-11-26). Pur, sans DOM ; navigateur + Node (`module.exports`), réutilisable par les Cloud Functions. Format : `docs/evaluation/CAHIER-DES-CHARGES.md` §11 + paramètres liste `{nom, valeurs}` et ligne de catalogue `{nom, colonnes, lignes}`.
- `CHAPITRES` / `chapitreDe(id)` / `libelleChapitre(id)` — périmètre : les 16 chapitres enseignés par Dylan (dossier `Desktop/cours/Dylan` : 01…10c, 12, 13, 15, 16), avec savoir et notion ; `chapitre` obligatoire dans `valider()`
- `creerCalculateur(math)` — instance mathjs, fonctions dangereuses désactivées
- `pourStockage(ex)` / `depuisStockage(ex)` — lignes de catalogue `[[..]]` ↔ `[{v:[..]}]` (Firestore refuse les tableaux imbriqués) ; toute écriture/lecture d'exercice y passe
- `valider(ex, calc)` — `{erreurs, avertissements}` : schéma, symboles en liste blanche, toutes combinaisons calculées
- `instancier(ex, calc, {rng})` — tire valeurs, calcule données, rend énoncé/corrigé
- `variantesDistinctes(ex, calc, n, {rng})` — n variantes aux valeurs différentes
- `nombreVariantes(ex)` — produit des choix par paramètre
- `formaterNombre(x, dec, enMaths)` — `{,}` en KaTeX, `,` hors maths
- `rendreGabarit(gabarit, valeurs, defs)` — `{{nom}}` selon le mode maths
- `verifierOrigine(ex, calc)` — garde-fou d'import : avec `ex.origine.valeurs`, la formule doit retrouver `ex.origine.resultat` (1 % par défaut) ; appelé par `valider()`
- `valider()` refuse aussi tout caractère de contrôle dans l'énoncé ou les étapes (barre oblique perdue : `\times` devenu tabulation)
- `rngGraine(n)` — aléatoire reproductible pour les tests
- `nouvelExercice()` / `blocsParDefaut()` — gabarit (déperditions d'un mur, chapitre 05), barème 40/30/20/10
- Tests : `node scripts/test-devoir-engine.js`

## scripts/devoir-verifier-lot.js
Vérifie un lot d'exercices avant import (validation, garde-fou, une variante affichée). Usage : `node scripts/devoir-verifier-lot.js <lot.json>`. Les lots (avec corrigés) vivent dans `Enseignement/BTS FED/production/devoirs-en-ligne/`, **jamais dans ce dépôt public**.

## js/devoir/devoirStore.js
Accès Firestore enseignant du module devoir. Collections `devoir_classes` (`{nom, annee_scolaire, etudiants:[{id, nom, mode_dys, actif}]}`) et `devoir_exercices` (id du document = `ex.id`), admin seul dans `firestore.rules`.
- `listClasses()` / `saveClasse(c)` / `deleteClasse(id)` — CRUD des classes
- `listExercices()` / `exerciceExiste(id)` / `saveExercice(ex, actif, createdAt)` — banque ; écriture complète, sans merge, via `DevoirEngine.pourStockage` / `depuisStockage`
- `setExerciceActif(id, actif)` / `deleteExercice(id)` — retrait du tirage, suppression
- `nouvelId(collection)` — identifiant Firestore généré côté client

## js/devoir/devoirAdmin.js
Onglet « Devoirs » du panneau admin (`AdminPanel._loadTab('devoirs')`). Charge mathjs 15.3.0 par CDN à la première ouverture.
- `render(container)` — charge banque, classes, mathjs
- `_ouvrirExercice(id)` / `_previsualiser()` / `_enregistrerExercice()` — éditeur JSON, 3 variantes avec corrigé ; l'id ne change plus après création
- `_enregistrerTousPrets()` — enregistre d'un coup les exercices de la file sans erreur (garde-fou compris), après confirmation
- `_filtreChapitre` — filtre de la liste de la banque par chapitre (menu déroulant)
- `_importerLot(input)` / `_htmlFile()` / `_ouvrirBrouillon(i)` — file « À valider » (localStorage `spark_devoir_file_import`) alimentée par un lot JSON ; chaque exercice se relit dans l'éditeur puis sort de la file à l'enregistrement
- `_ouvrirClasse(id)` / `_ajouterEtudiants()` / `_enregistrerClasse()` — liste de noms (un par ligne), Dys, actif ; doublons refusés
- Styles : section `.dv-*` en fin de `css/styles.css`

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

## js/data/bts-prep/
14 modules de remise à niveau BTS (`tag: 'prep'`, `level: 3`). Chaque module : `cours` (+ `diagram` et/ou `diagrams[]`), `quiz`, `exercice.generate()`, `probleme` (avec `figure`), `evaluation`.
- Les figures sont des SVG inline utilisant EXCLUSIVEMENT les classes du thème (`frame-line`, `axis`, `grid-line`, `curve-main`, `graph-line`, `guide-line`, `plot-point`, `plot-point-alt`, `axis-label`, `annotation-label`, `tick-label`, `label-soft`) et les variables CSS (`var(--primary)`, `var(--secondary)`, `var(--accent)`, `var(--error)`) — jamais de couleur codée en dur, sinon l'illustration casse en thème sombre et à l'impression
- `exercice.generate()` renvoie `solution` en **tableau d'étapes**, jamais en chaîne : `renderSolutionSteps()` (`js/components/exercice.js`) appelle `steps.map()`, une chaîne fait planter la correction et l'écran de réussite. Neuf modules bts-prep étaient touchés, corrigés le 2026-10-13 (5c742b5).
- Gotcha récurrent : un `<text>` trop long déborde du `viewBox` et est **coupé** (pas de retour à la ligne en SVG). Garder les phrases courtes dans le SVG et déporter les explications longues dans `caption`/`notes`, qui sont du HTML et passent à la ligne

## js/recommendations.js
Recommandations adaptatives basées sur la progression.
- `getRecommendations(moduleId)` — retourne des modules suggérés

## js/utils/ui-helpers.js
Helpers de rendu et utilitaires UI partagés.
- `updateScrollFade(el)` / `initScrollFades(root)` — posent `data-fade` (`none|left|right|both`) sur chaque `.scroll-fade` selon sa position de défilement ; un `MutationObserver` sur `#app` + `resize` relancent l'init après chaque rendu, aucune vue n'a à s'en occuper
- `escapeHtml(str)` — échappement HTML partagé (auparavant dupliqué à l'identique dans `adminPanel.js`) ; ce fichier charge AVANT ce fichier dans `index.html`, donc il garde un wrapper local `_esc: function(str) { return escapeHtml(str); }` (une référence directe `_esc: escapeHtml` casserait au chargement, `escapeHtml` n'existant pas encore)
- `convertMarkdownTables(html)` — convertit les tableaux markdown (`| a | b |` + ligne `|---|---|`) présents dans le contenu (`def`, `steps`, `context`...) en vrais `<table>` HTML ; appelé sur le HTML assemblé dans `moduleTabs.js` et `renderFicheCours()`, pas dans `js/data/`
- `renderLoading()` — squelette de chargement
- `renderErreurConseil(piege)` — bloc conseil sur l'erreur classique
- `renderQuestionFigure(figure)` — rend la figure attachée à une question de quiz, un exercice généré ou une question d'évaluation ; accepte une chaîne (SVG brut) ou un objet `{svg, caption}` ; le conteneur interne réutilise la classe `.cours-diagram-stage` pour hériter du thème SVG partagé (`.curve-main`, `.plot-point`, `.annotation-label`…) tandis que `.question-figure` porte les variables `--diagram-*`

## Module devoir en classe — MVP-2 à 4 (2026-11-27)
Rapport, décisions et gestes de mise en service : `docs/evaluation/RAPPORT-MVP-2-4.md`. Lancer : `node scripts/devoir-emulateurs.js` (essai local) ou `… test [ia|regles|fonctions|e2e]`.

## functions/src/commun.ts
Socle des Cloud Functions (europe-west1) : Firestore admin, constantes, journal.
- `exigerEnseignant(req)` — refuse si `users/{uid}.role` n'est pas admin
- `journaliser(e)` / `donneesEvenement(e)` — ajoute au journal `devoir_evenements`
- `COL`, `DEFAUTS`, `GRACE_MS`, `estActive(copie)` — noms de collections, valeurs par défaut

## functions/src/tirage.ts
Tirage serveur avec le moteur partagé (`functions/vendor/devoirEngine.js`, copié au build par `copier-moteur.js`).
- `choisirExercices(candidats, dejaFaits, exclus, n)` — priorité aux exercices jamais faits
- `construireAttribution(ex, rang, remplace)` — partie publique + partie privée (corrigé, barème)

## functions/src/session.ts
MVP-2 : sessions, entrée, brouillon, rendu.
- `createSession` / `updateSession` — crée, ouvre (code), ferme, prolonge, archive
- `listOpenClasses` — classes ayant un devoir ouvert (premier écran étudiant)
- `joinSession` — classe, code puis nom ; copie `en_attente` tant que l'épreuve n'est pas lancée
- `updateSession` action `lancer` / `demarrerCopie(sessionId, session, copieId…)` — tirage et départ du temps, même fin pour tous
- `leaveWaiting` — l'étudiant rend son nom avant le lancement
- `saveDraft` / `submitCopy` — brouillon versionné, rendu ; temps vérifié côté serveur
- `releaseName` / `syncSession` — libère un nom ; rend les copies expirées
- `figer(tx, ref, copie, statut…)` / `finaliserExpirees(sessionId…)` — fige une copie

## functions/src/antitriche.ts
MVP-3 : perte de focus, remplacement, collage, annulation.
- `logEvent` — focus_perdu, focus_revenu, paste_blocked, drop_blocked
- `traiterRetour(copieId, uid, o)` — mesure l'absence, remplace ou verrouille
- `replaceAssignment` / `cancelIncident` / `unlockCopy` — actions de l'enseignant

## functions/src/ia.ts
MVP-4 : prompt (§6), schéma, appel Anthropic, contrôles. Sans Firestore, testable seul.
- `construireMessage(d)` — données et réponse, sous code interne
- `validerSortie(brut, d)` / `controler(o, d)` — schéma, points bornés, note recalculée
- `preCorriger(d, appel)` — un nouvel essai au plus, puis erreur IA
- `appelerModele(reglages, d)` — `messages.create` avec sortie structurée

## functions/src/correction.ts
MVP-4 : fiches `devoir_corrections`, note finale dans `devoir_copies_prive.correction`.
- `runPreCorrection` — par copie, secret `ANTHROPIC_API_KEY`, option `sans_ia`
- `saveCorrection` — modification manuelle, proposition IA conservée
- `validateCorrection` / `noteSur20(points, max)` — note sur 20 au demi-point

## devoir.html
Page étudiant épurée, servie sur `/devoirs` (réécriture dans `firebase.json`). Charge `styles.css`, KaTeX, Firebase, `devoirFirebase.js`, `devoirEleve.js`.

## js/devoir/devoirFirebase.js
Appel des Cloud Functions et bascule sur les émulateurs (uniquement sur `localhost:5055`).
- `preparer()` / `brancher(app)` — avant et après `initializeApp` (appelés par `AuthService.init`)
- `appeler(nom, donnees)` — charge le SDK Functions à la demande, appelle

## js/devoir/devoirEleve.js
Vue étudiant : code, nom, copie, minuteur, rendu. Application Firebase nommée `devoir` (identité anonyme séparée du site).
- `init()` / `_reprendre()` — connexion anonyme, reprise de la copie mémorisée
- `_ecranClasse()` / `_ecranCode()` — choix de la classe, puis code
- `_entrer(etudiantId)` — joinSession, liste des noms puis copie
- `_ecranAttente(copie)` — nom en grand jusqu'au lancement
- `_surCopie(copie)` / `_ecranCopie()` — état serveur en direct, écran d'épreuve
- `_envoyer(attId, force)` / `_toutEnvoyer()` — brouillon automatique, reprise hors ligne
- `_battement()` / `_rendre(auto)` — minuteur, rendu anticipé ou automatique
- `_surFocus()` / `_collageBloque(type, champ)` — signale sorties de page et collages

## js/devoir/devoirSessions.js
Sous-onglet « Sessions » : liste, création, tableau de bord en direct.
- `render(zone)` / `quitter()` — entrée, arrêt des écoutes
- `_creer()` / `_ouvrir(id)` — crée puis ouvre une session
- `_ouvrirDirect(id)` / `_htmlDirect()` — tableau de bord temps réel, incidents
- `_htmlAttente()` / `_lancer()` — salle d'attente (tuiles prêt/en attente), lancement
- `_prolonger()` / `_fermer()` / `_liberer(copieId)` — actions de session
- `_annulerIncident(id)` / `_deverrouiller(copieId)` — anti-triche
- `_corriger(id)` — passe la main à `DevoirCorrection`

## js/devoir/devoirCorrection.js
Relecture des copies : liste triée (confiance basse en tête), copie par copie, validation.
- `ouvrir(zone, session)` — écoute copies et fiches
- `_lancer(sansIa)` — pré-correction copie par copie, avec avancement
- `_htmlCopie()` / `_htmlFiche(a, fiche)` — réponse à gauche, correction à droite
- `_enregistrer(ficheId, avecRetour)` / `_valider()` — saveCorrection, validateCorrection

## scripts/devoir-emulateurs.js
Lanceur des émulateurs (auth, firestore, functions, hosting) : essai local ou tests. Trouve Java dans `%USERPROFILE%\tools\jdk`, compile `functions/`, écrit `.secret.local` et `.env.local`.

## scripts/lib/devoir-emulateur.js
Outils REST des tests : `ecrire`, `lire`, `chercher`, `majChamps`, `appeler(nom, donnees, jeton)`, `connexionAnonyme`, `semer()`, `toutEffacer()`.

## scripts/lib/devoir-demo.js / scripts/devoir-demo.js
Classe de 11 étudiants et 6 exercices génériques de démonstration ; script qui les charge pour l'essai local.

## scripts/lib/devoir-fausse-ia.js
Fausse API Anthropic locale (port 5998) : aucun appel réel. Mots-clés `IA_JSON_INVALIDE_UNE_FOIS`, `IA_TOUJOURS_INVALIDE`, `IA_SOMME_FAUSSE`, `IA_CONFIANCE_BASSE`.

## scripts/test-devoir-{ia,regles,fonctions,e2e,tout}.js
Suites de tests du module (125 tests) : contrôles IA, règles Firestore, Cloud Functions, bout en bout Puppeteer, enchaînement.
