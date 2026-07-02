# Plan Sprint Pré-Rentrée — Fondations Techniques & Monétisation

Contexte : le produit pédagogique (contenu, moteurs, design system) est mature (~150+ modules, refactoring terminé), mais le site est structurellement invisible pour Google (routing 100% hash → une seule URL indexable sur tout le site), non mesuré (zéro analytics), et sa monétisation est à l'arrêt (AdSense en attente d'approbation, pas de page de dons, pas de bannière de consentement cookies). Ce plan comble ces manques en 4 semaines, sans toucher au contenu pédagogique ni rouvrir le sujet de l'abonnement enseignant (décision déjà actée : pub AdSense + dons uniquement, contenu élève toujours gratuit — voir mémoire `project_monetisation_spark_learning`).

Diagnostic et arbitrages discutés avec l'utilisateur le 2026-07-02. Objectif calendaire : être prêt avant le pic de trafic de la rentrée scolaire (~1er septembre 2026), en laissant à Google le temps d'indexer.

Backlog produit (diagnostic d'entrée, révision espacée, journal d'erreurs, carte des prérequis...) : voir `ameliorations-site.md`, **non traité ici** — prochain sprint.

Format : l'agent IA prend quelques tâches `[ ]` à chaque session, les réalise, et coche `[x]`. Les tâches marquées **[Externe]** sont à réaliser par l'utilisateur (comptes, validations tierces) — l'agent ne peut pas les faire à sa place.

---

## Semaine 1 — Migration du routeur (hash → pushState)

Objectif : sortir du hash-routing qui rend le site invisible pour Google, sans casser l'app existante. Périmètre confirmé restreint : la logique de routage est déjà centralisée dans `js/app.js` (`buildHash`, `parseHash`, `navigate`), aucun `href="#route"` éparpillé ailleurs dans le code (vérifié par grep).

### 1.1 Cœur du routeur
- [ ] Réécrire `buildHash(view, data)` en `buildPath(view, data)` dans `js/app.js` : même `switch/case`, générer des chemins réels (`/modules/4e-pythagore/cours`) au lieu de `#module/...`
- [ ] Réécrire `parseHash(hash)` en `parsePath(pathname)` : même logique de parsing, lire `location.pathname` au lieu de `location.hash`
- [ ] Remplacer les 2 assignations `window.location.hash = buildHash(...)` (`js/app.js` ~ligne 165 et ~305) par `history.pushState(null, '', buildPath(...))`
- [ ] Remplacer l'écouteur `window.addEventListener('hashchange', ...)` (~ligne 1071) par `popstate`, appelant `parsePath(location.pathname)`
- [ ] Mettre à jour les 3 appels restants à `parseHash(window.location.hash)` (~lignes 1073, 1078, 1290) vers `parsePath(window.location.pathname)`
- [ ] Vérifier que `<base href="/" />` (déjà présent dans `index.html`) reste cohérent avec des chemins absolus

### 1.2 Compatibilité serveur (déploiement)
- [ ] Confirmer le mode de déploiement exact du site (`sparklearning.fr` via `CNAME` — aucun workflow GitHub Actions détecté, ni `firebase.json` hosting, ni config Netlify/Vercel : probable GitHub Pages "Deploy from branch" configuré dans Settings). À vérifier avant d'implémenter le fallback ci-dessous.
- [ ] Si GitHub Pages confirmé : créer `404.html` à la racine avec le script de redirection standard "spa-github-pages" (stocke le chemin demandé, redirige vers `/?p=/chemin`, `index.html` restaure via `history.replaceState`)
- [ ] Ajouter le script de restauration correspondant dans `index.html` (avant le chargement de `js/app.js`)
- [ ] Vérifier en conditions réelles (post-déploiement) qu'une URL profonde ouverte directement fonctionne

### 1.3 Rétrocompatibilité des anciens liens
- [ ] Au boot de `js/app.js`, détecter un `location.hash` non vide de l'ancien format (`#module/...`, `#playlist/...`, `#modules/...`, etc.) et rediriger vers l'équivalent pushState — même esprit que la rétrocompat déjà existante pour `#modules/1` dans `parseHash()`
- [ ] Tester spécifiquement le partage de playlist (`generatePlaylistLink()` dans `js/playlist.js`) : un lien déjà généré et partagé par un enseignant doit continuer à fonctionner

### 1.4 QA manuelle (pas de suite de tests automatisée dans ce repo)
- [ ] Naviguer vers chaque type de vue (home, subjects, levels, modules, module/tab, companion, flashcards, chrono, teacher, admin, playlist) et vérifier l'URL + le rendu
- [ ] Tester le bouton retour/avant du navigateur sur plusieurs navigations successives
- [ ] Ouvrir une URL profonde directement dans un nouvel onglet
- [ ] Tester un lien playlist généré avant la migration
- [ ] Tester en navigation invité ET connecté (élève/enseignant/admin)
- [ ] Bump `?v=N` sur toutes les balises `<script>`/`<link>` locales dans `index.html` (convention du projet, cf. `CLAUDE.md`)

---

## Semaine 2 — SEO on-page + contenu indexable

Objectif : maintenant que les URLs sont réelles, donner à Google de quoi comprendre et indexer chaque page.

### 2.1 Métadonnées dynamiques par route
- [ ] Étendre `updatePageTitle()` (`js/app.js`) en `updatePageMeta()` : ajouter/mettre à jour dynamiquement `<meta name="description">`, `<link rel="canonical">`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`
- [ ] Rédiger une description courte par type de vue (home, subjects, levels, modules, module) — réutiliser `mod.subtitle`/`mod.title` déjà disponibles sur les modules pour les pages module

### 2.2 Données structurées
- [ ] Ajouter un bloc JSON-LD (`schema.org/Course` ou `LearningResource`) injecté dynamiquement sur les pages module

### 2.3 Sitemap & robots
- [ ] Créer `scripts/generate-sitemap.js` (Node, même logique que `scripts/split-data-modules.js` existant) qui parcourt les manifests `js/data/*/index.js` et génère `sitemap.xml` à la racine avec toutes les routes réelles
- [ ] Créer `robots.txt` à la racine référençant `sitemap.xml`, autorisant l'indexation complète
- [ ] Documenter dans le workflow d'ajout de module (`CLAUDE.md` section 3) : régénérer le sitemap après ajout de nouveaux modules

### 2.4 Identité visuelle minimale pour le partage
- [ ] Créer une image Open Graph par défaut 1200×630 (`images/og-default.png`) à partir du logo existant
- [ ] Générer un set de favicons complet (`favicon.ico`, `apple-touch-icon.png`, `favicon-32x32.png`) à partir de `images/Logo_noir.jpeg`
- [ ] Créer `manifest.json` minimal (nom, icônes, couleur de thème `var(--primary)`) et le lier dans `index.html`

---

## Semaine 3 — Confiance + activation monétisation

Objectif : lever le seul vrai bloquant légal avant d'activer de la pub réelle, et finir ce qui a déjà été décidé mais jamais construit.

### 3.1 Consentement cookies (bloquant avant toute vraie pub)
- [ ] **[Externe]** Choisir une solution de CMP conforme à la politique "EU User Consent Policy" de Google (ex. solution gratuite type consentmanager.net, ou CMP maison respectant les critères Google : refus aussi facile qu'acceptation, pas de cases pré-cochées)
- [ ] Intégrer le script du CMP choisi dans `index.html`, avant le script `adsbygoogle.js`
- [ ] Bloquer le chargement effectif des ad units tant que le consentement n'est pas donné (adapter `js/components/adSlot.js` / `js/adsConfig.js` si nécessaire)
- [ ] Ajouter un lien "Gérer mes préférences cookies" dans le footer, à côté du lien "Politique de confidentialité" déjà présent

### 3.2 Page de dons
- [ ] **[Externe]** Créer le compte Ko-fi (ou équivalent) mentionné dans les décisions de monétisation précédentes
- [ ] Créer `js/views/soutenir.js` — page statique présentant la démarche (contenu élève gratuit, pub non intrusive, dons libres) avec le lien Ko-fi
- [ ] Ajouter le routage correspondant (`/soutenir`, logique pushState de la semaine 1) dans `js/app.js`
- [ ] Déclarer `js/views/soutenir.js` dans `index.html`
- [ ] Ajouter un lien discret "Soutenir le projet" dans le footer et/ou la nav

### 3.3 Checklist d'activation AdSense
- [ ] **[Externe]** Suivre la validation du compte AdSense (déjà en attente depuis les commits précédents)
- [ ] **[Externe]** Une fois validé, créer les ad units dans le dashboard AdSense (home, subjects, modules)
- [ ] Renseigner les IDs réels dans `AD_SLOTS` (`js/adsConfig.js`)
- [ ] Passer `ADS_ENABLED` à `true` — uniquement après que 3.1 (CMP) soit en place

---

## Semaine 4 — Mesure, polish, prêt pour la rentrée

Objectif : pouvoir mesurer ce qui marche, et laisser à Google le temps d'indexer avant le pic de trafic de rentrée.

### 4.1 Analytics & Search Console
- [ ] **[Externe]** Créer une propriété Google Analytics 4
- [ ] **[Externe]** Créer une propriété Google Search Console, vérifier la propriété du domaine `sparklearning.fr`
- [ ] Intégrer GA4 dans `index.html`, avec anonymisation IP, chargé uniquement après consentement (cohérent avec 3.1)
- [ ] **[Externe]** Soumettre `sitemap.xml` dans Search Console — à faire tôt dans la semaine pour maximiser le délai d'indexation avant la rentrée

### 4.2 Performance & accessibilité (passe rapide)
- [ ] Auditer les images pour `loading="lazy"` là où pertinent
- [ ] Vérifier `alt` sur toutes les images (`images/Logo_*.jpeg` notamment)
- [ ] Contrôle rapide de contraste sur les variables CSS de `css/styles.css` (thèmes clair/sombre)

### 4.3 QA finale
- [ ] Parcours complet multi-device (mobile/desktop) sur le site déployé, post-migration routeur
- [ ] Vérifier l'absence d'erreurs console sur les vues principales
- [ ] Vérifier que le mode maintenance (`maintenance.html`, verrouillage module) fonctionne toujours avec les nouvelles URLs

---

## Actions externes — récapitulatif (utilisateur)

- [ ] Choisir/souscrire une solution de CMP (3.1)
- [ ] Créer le compte Ko-fi (3.2)
- [ ] Suivre la validation AdSense + créer les ad units (3.3)
- [ ] Créer les propriétés GA4 et Search Console, vérifier le domaine (4.1)
- [ ] Soumettre le sitemap dans Search Console (4.1)

---

## Hors scope de ce sprint (backlog toujours valide)

- `ameliorations-site.md` — diagnostic d'entrée, révision espacée, journal d'erreurs, carte des prérequis, etc. Prochain sprint.
- Abonnement enseignant payant — sujet non rouvert par décision explicite de l'utilisateur (2026-07-02).
- Refactor de `js/app.js` (1300 lignes) au-delà de ce qu'impose la migration du routeur.
- `refactoring-plan.md` Phase 4 (Spark Companion) — en cours indépendamment.

## Contrainte produit à conserver
- Le site doit rester utilisable sans création de compte, contenu élève 100% gratuit.
- Stack Vanilla JS : pas de bundler, pas de npm. Tout script déclaré dans `index.html`.
- Aucune pub dans les onglets d'apprentissage actif (cours/quiz/exercice/problème/évaluation/companion) — décision déjà actée.
- Pas de mécanique "regarder une pub pour débloquer/soutenir" (risque de suspension AdSense).
