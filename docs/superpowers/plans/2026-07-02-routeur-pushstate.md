# Migration Routeur Hash → PushState — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Remplacer le routage 100% `#hash` de Spark Learning par des URLs réelles via l'API History (`pushState`/`popstate`), pour que Google puisse indexer chaque module comme une page distincte, sans casser la navigation existante ni les liens de playlist déjà partagés.

**Architecture:** Le routage est déjà centralisé dans `js/app.js` autour de trois fonctions (`buildHash`, `parseHash`, `navigate`) et deux points d'écriture de l'URL (`navigate()`, `switchTab()`). On introduit des équivalents "path" (`buildPath`, `parsePath`) à côté des originaux (non-destructif), on bascule les points d'écriture/lecture un par un, puis on ajoute le fallback serveur nécessaire pour que GitHub Pages serve `index.html` sur toute URL profonde.

**Tech Stack:** Vanilla JS (aucun bundler, aucun npm), API History native du navigateur, GitHub Pages (déploiement par branche, domaine custom `sparklearning.fr` via `CNAME`).

## Global Constraints

- Vanilla JS strict : pas d'`export`/`import`, pas de bundler, pas de npm. Toute nouvelle balise `<script>` déclarée dans `index.html`.
- Cache-busting : incrémenter le suffixe `?v=N` sur **toutes** les balises `<script>`/`<link>` locales de `index.html` dès qu'un fichier JS/CSS local est modifié (convention du projet, `CLAUDE.md`).
- Aucune suite de tests automatisée dans ce repo — toute vérification est manuelle, dans un navigateur, avec des étapes concrètes et un résultat attendu explicite.
- Ne jamais casser un lien de playlist déjà partagé par un enseignant (`generatePlaylistLink()` dans `js/playlist.js`) : les anciens liens `#playlist/...` doivent continuer à fonctionner après la migration.
- Ne jamais casser le lien d'accessibilité "Aller au contenu principal" (`<a href="#app">` dans `index.html`), qui utilise lui aussi un `#fragment` mais n'est pas une route applicative.
- Après chaque tâche qui modifie `js/app.js`, mettre à jour les entrées correspondantes dans `CODEBASE_MAP.md` (règle globale du projet).

---

### Task 1: Ajouter le routage par chemin (buildPath, parsePath, parseLegacyHash) — additif, sans changer le comportement actuel

**Files:**
- Modify: `js/app.js:48-106` (bloc "Hash routing helpers")

**Interfaces:**
- Produces: `buildPath(view: string, data: object): string` — même contrat que `buildHash` existant, mais retourne un chemin réel (`/module/xxx/quiz`) au lieu d'un hash (`#module/xxx/quiz`)
- Produces: `parsePath(pathname: string): {view, ...}` — même contrat que `parseHash` existant, lit un `pathname` au lieu d'un `hash`
- Produces: `parseLegacyHash(hash: string): {view, ...}` — identique à l'ancien `parseHash`, conservé sous ce nom pour rediriger les anciens liens `#...` (Task 3)
- Consumes: rien (fonctions pures, pas de dépendance sur les tâches suivantes)

- [ ] **Step 1: Ajouter `buildPath` juste après `buildHash` existant (ne pas encore supprimer `buildHash`)**

Dans `js/app.js`, juste après la fermeture de `buildHash` (après la ligne `}` qui suit `default: return '#home';`), ajouter :

```javascript
function buildPath(view, data) {
  switch (view) {
    case 'home':       return '/';
    case 'subjects':   return '/subjects';
    case 'levels':     return `/levels/${data.subject || state.subject || 'maths'}`;
    case 'modules': {
      const level = data.level !== undefined ? data.level : state.level;
      const levelPart = level === 'all' ? 'all' : level;
      return `/modules/${data.subject || state.subject || 'maths'}/${levelPart}`;
    }
    case 'module': {
      const mid = data.moduleId || state.moduleId;
      const tab = data.tab || state.tab || 'cours';
      return `/module/${mid}/${tab}`;
    }
    case 'companion': {
      const mid = data.moduleId || state.moduleId;
      return mid ? `/companion/${mid}` : '/companion';
    }
    case 'flashcards': return `/flashcards/${data.moduleId || state.moduleId}`;
    case 'chrono':     return `/chrono/${data.moduleId || state.moduleId}`;
    case 'teacher':    return '/teacher';
    case 'homework':   return '/homework';
    case 'playlist':   return '/playlist/' + (data.playlistData || '');
    case 'admin':      return '/admin';
    case 'confidentialite': return '/confidentialite';
    default:           return '/';
  }
}
```

- [ ] **Step 2: Ajouter `_parseRouteParts`/`parsePath`/`parseLegacyHash` juste après `parseHash` — sans toucher `parseHash`**

**Ne pas supprimer ni modifier `parseHash` à cette étape.** Ses 3 appelants (`hashchange`, `popstate`, restauration de route au boot) ne sont mis à jour qu'en Task 3 ; le supprimer maintenant romprait l'app dès le premier chargement (`ReferenceError: parseHash is not defined`). La duplication temporaire de logique entre `parseHash` et `_parseRouteParts` ci-dessous est assumée : `parseHash` sera supprimé en Task 3 une fois ses appelants basculés.

Juste après la fermeture de la fonction `parseHash` existante (après le `}` qui suit `case 'home': default: return { view: 'home' };`), ajouter :

```javascript
function _parseRouteParts(parts) {
  switch (parts[0]) {
    case 'subjects': return { view: 'subjects' };
    case 'levels':   return { view: 'levels', subject: parts[1] || 'maths' };
    case 'modules':
      // Rétrocompat : .../modules/1 (ancien format sans subject)
      if (/^\d+$/.test(parts[1])) return { view: 'modules', subject: 'maths', level: parseInt(parts[1]) };
      if (parts[2] === 'all') return { view: 'modules', subject: parts[1] || 'maths', level: 'all' };
      return { view: 'modules', subject: parts[1] || 'maths', level: parseInt(parts[2]) || 1 };
    case 'module':      return { view: 'module', moduleId: parts[1], tab: parts[2] || 'cours' };
    case 'companion':   return { view: 'companion', moduleId: parts[1] };
    case 'flashcards':  return { view: 'flashcards', moduleId: parts[1] };
    case 'chrono':      return { view: 'chrono', moduleId: parts[1] };
    case 'teacher':     return { view: 'teacher' };
    case 'playlist': {
      // slice(1).join('/') reconstruit fidèlement les données base64 même si elles contiennent '/'
      const encoded = parts.slice(1).join('/');
      return { view: 'playlist', playlistData: encoded };
    }
    case 'homework':    return { view: 'homework' };
    case 'admin':       return { view: 'admin' };
    case 'confidentialite': return { view: 'confidentialite' };
    case 'home':
    default:            return { view: 'home' };
  }
}

function parsePath(pathname) {
  const parts = (pathname || '/').replace(/^\//, '').split('/');
  return _parseRouteParts(parts);
}

function parseLegacyHash(hash) {
  const parts = (hash || '').replace(/^#\/?/, '').split('/');
  return _parseRouteParts(parts);
}
```

- [ ] **Step 3: Vérification manuelle (console navigateur)**

Ouvrir le site actuel (avant toute autre modification) dans le navigateur, ouvrir la console DevTools, et exécuter :

```javascript
buildPath('module', { moduleId: '4e-pythagore', tab: 'quiz' })
// Attendu : "/module/4e-pythagore/quiz"

parsePath('/module/4e-pythagore/quiz')
// Attendu : { view: 'module', moduleId: '4e-pythagore', tab: 'quiz' }

parseLegacyHash('#playlist/eyJ0aXRsZSI6IngifQ==')
// Attendu : { view: 'playlist', playlistData: 'eyJ0aXRsZSI6IngifQ==' }

buildHash('home')  // toujours présent, doit encore fonctionner
// Attendu : "#home"
```

Confirmer que l'app fonctionne toujours normalement (rien n'a encore changé dans `navigate()` ni dans les listeners) : `buildHash` et `parseHash` sont toujours intacts et restent les seuls chemins réellement utilisés par l'app jusqu'à la Task 2/3 ; `buildPath`, `parsePath`, `parseLegacyHash` existent mais ne sont encore appelés par aucun code applicatif.

- [ ] **Step 4: Commit**

```bash
git add js/app.js
git commit -m "feat: add path-based routing helpers (buildPath, parsePath, parseLegacyHash)"
```

---

### Task 2: Basculer l'écriture d'URL sur pushState (navigate, switchTab, lien de playlist)

**Files:**
- Modify: `js/app.js` (fonction `navigate`, fonction `switchTab`, suppression de `buildHash`)
- Modify: `js/playlist.js:196` (`generatePlaylistLink`)

**Interfaces:**
- Consumes: `buildPath(view, data)` de la Task 1
- Produces: aucune nouvelle interface — la signature de `navigate(view, data, options)` ne change pas, donc tous les appelants existants (`onclick="navigate(...)"` dans toutes les vues/composants) continuent de fonctionner sans modification

- [ ] **Step 1: Remplacer le bloc de synchronisation d'URL dans `navigate()`**

Dans `js/app.js`, remplacer :

```javascript
  // Sync URL (suppress hashchange listener to avoid double render)
  if (!skipUrlSync) {
    _suppressHashChange = true;
    window.location.hash = buildHash(view, data);
    requestAnimationFrame(() => { _suppressHashChange = false; });
  }
```

par :

```javascript
  // Sync URL (pushState ne déclenche jamais popstate dans le même onglet,
  // donc pas besoin de flag de suppression comme avec hashchange)
  if (!skipUrlSync) {
    history.pushState(null, '', buildPath(view, data));
  }
```

- [ ] **Step 2: Remplacer le bloc équivalent dans `switchTab()`**

Remplacer :

```javascript
  // Update hash to reflect current tab
  _suppressHashChange = true;
  window.location.hash = buildHash('module', { moduleId: state.moduleId, tab: tabName });
  requestAnimationFrame(() => { _suppressHashChange = false; });
```

par :

```javascript
  // Update URL to reflect current tab
  history.pushState(null, '', buildPath('module', { moduleId: state.moduleId, tab: tabName }));
```

- [ ] **Step 3: Supprimer `buildHash`, maintenant inutilisée**

Supprimer entièrement la fonction `buildHash` (bloc `function buildHash(view, data) { ... }`). Vérifier qu'il ne reste aucune référence à `buildHash` dans `js/app.js`.

**Ne pas supprimer `let _suppressHashChange = false;` à cette étape.** Le listener `hashchange` (encore présent jusqu'à la Task 3) lit encore cette variable (`if (_suppressHashChange) return;`) ; la supprimer maintenant provoquerait une `ReferenceError` dès que `location.hash` change entre les deux tâches (ex. clic sur le lien d'accessibilité `<a href="#app">`). Elle sera supprimée dans la Task 3, en même temps que le listener qui la lit.

- [ ] **Step 4: Corriger `generatePlaylistLink()` dans `js/playlist.js`**

`window.location.pathname` n'est plus toujours `/` maintenant que l'app utilise de vraies routes : un enseignant qui génère un lien de playlist depuis la page d'un module produirait un lien cassé (`/module/xxx#playlist/...`) si on ne corrige pas ce point.

Remplacer (ligne ~196) :

```javascript
  pb.generatedLink = window.location.origin + window.location.pathname + '#playlist/' + encoded;
```

par :

```javascript
  pb.generatedLink = window.location.origin + buildPath('playlist', { playlistData: encoded });
```

- [ ] **Step 5: Vérification manuelle**

Lancer un serveur local depuis la racine du repo :

```bash
python -m http.server 8000
```

Ouvrir `http://localhost:8000/` et :
1. Cliquer Accueil → Matières → un niveau → un module → chaque onglet (cours/quiz/exercice/problème/évaluation) : à chaque clic, vérifier dans la barre d'adresse que l'URL devient un vrai chemin (`/module/.../quiz`), pas un `#hash`.
2. Aucune erreur dans la console DevTools pendant toute la navigation.
3. Depuis l'espace enseignant (si un compte de test est disponible) ou en simulant `state.playlistBuilder` : générer un lien de playlist depuis une page de module (pas juste depuis l'accueil), vérifier que le lien généré est de la forme `http://localhost:8000/playlist/<données>` et non `http://localhost:8000/module/xxx/quiz#playlist/<données>`.

Ne pas encore tester le rechargement de page (F5) ou l'ouverture directe d'une URL profonde à ce stade — c'est le rôle de la Task 3 (le code qui restaure la route au démarrage n'est pas encore modifié).

- [ ] **Step 6: Commit**

```bash
git add js/app.js js/playlist.js
git commit -m "feat: switch navigation writes to pushState instead of location.hash"
```

---

### Task 3: Basculer la lecture d'URL sur pushState (popstate, démarrage) + rétrocompatibilité des anciens liens hash

**Files:**
- Modify: `js/app.js` (listener `hashchange` supprimé, listener `popstate`, fonction `_setupStudentApp`, suppression de `_suppressHashChange` et `parseHash`)
- Modify: `CODEBASE_MAP.md` (entrées `js/app.js`)

**Interfaces:**
- Consumes: `parsePath`, `parseLegacyHash`, `buildPath` de la Task 1

- [ ] **Step 1: Supprimer le listener `hashchange`, garder et adapter le listener `popstate`**

Dans `js/app.js`, remplacer le bloc :

```javascript
/* ── Hash change listener (back/forward buttons) ── */
window.addEventListener('hashchange', () => {
  if (_suppressHashChange) return;
  const route = parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });
});

window.addEventListener('popstate', () => {
  const route = parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });
});
```

par :

```javascript
/* ── Back/forward buttons ── */
window.addEventListener('popstate', () => {
  const route = parsePath(window.location.pathname);
  navigate(route.view, route, { skipUrlSync: true });
});
```

Le listener `hashchange` est supprimé (pas seulement adapté) : le code applicatif n'écrit plus jamais dans `location.hash`, et le laisser actif casserait le lien d'accessibilité `<a href="#app">` ("Aller au contenu principal") en le faisant passer par `navigate()` vers la page d'accueil à chaque clic.

Supprimer aussi, maintenant que son dernier lecteur (le listener `hashchange`) a disparu, la ligne `let _suppressHashChange = false;` (bloc "Hash routing helpers" en haut du fichier, juste avant l'ancien `buildHash`/nouveau `buildPath`).

- [ ] **Step 2: Adapter la restauration de route au démarrage dans `_setupStudentApp()`**

Dans `js/app.js`, remplacer (fin de `_setupStudentApp()`) :

```javascript
  // Restore route from hash
  const route = parseHash(window.location.hash);
  navigate(route.view, route, { skipUrlSync: true });
```

par :

```javascript
  // Restore route from URL. Un ancien lien #hash (déjà partagé/en favori) est
  // redirigé une fois vers le chemin équivalent, puis le routage normal prend le relais.
  let route;
  if (window.location.hash) {
    route = parseLegacyHash(window.location.hash);
    history.replaceState(null, '', buildPath(route.view, route));
  } else {
    route = parsePath(window.location.pathname);
  }
  navigate(route.view, route, { skipUrlSync: true });
```

- [ ] **Step 3: Supprimer `parseHash`, maintenant inutilisée**

Après les Steps 1-2, `parseHash` (l'originale, de la Task 1 — pas `parseLegacyHash`) n'a plus aucun appelant : ses 3 usages (`hashchange`, `popstate`, boot) viennent d'être basculés sur `parsePath`/`parseLegacyHash`. Supprimer entièrement la fonction `parseHash` (bloc `function parseHash(hash) { ... }` ajouté à l'origine, laissé intact jusqu'ici). Vérifier qu'il ne reste aucune référence à `parseHash` dans `js/app.js` (seuls `parsePath`/`parseLegacyHash`/`_parseRouteParts` doivent subsister).

- [ ] **Step 4: Vérification manuelle**

Avec `python -m http.server 8000` toujours actif depuis la racine du repo :

1. **Lien legacy module** : ouvrir `http://localhost:8000/#module/4e-pythagore/quiz` (remplacer par un vrai `moduleId` existant si besoin). Attendu : l'URL se transforme automatiquement en `http://localhost:8000/module/4e-pythagore/quiz` (sans hash) et la page affiche bien l'onglet quiz du module.
2. **Lien legacy playlist** : construire une URL `http://localhost:8000/#playlist/<données encodées>` avec des données générées via `encodePlaylist` (ou réutiliser un lien généré avant la Task 2). Attendu : redirection vers `http://localhost:8000/playlist/<données>` et la playlist se charge normalement.
3. **Skip-to-content** : sur n'importe quelle page, appuyer sur Tab dès le chargement pour faire apparaître le lien "Aller au contenu principal", puis Entrée (ou cliquer dessus). Attendu : la page défile vers `#app` **sans** déclencher de navigation vers l'accueil (vérifier que la vue affichée reste la même qu'avant le clic).
4. **Back/forward** : naviguer Accueil → Matières → un module → un autre onglet, puis utiliser le bouton retour du navigateur 3 fois de suite, puis avancer 2 fois. Attendu : à chaque étape, l'URL et le contenu affiché correspondent bien à l'étape de navigation correspondante, sans erreur console.

- [ ] **Step 5: Mettre à jour `CODEBASE_MAP.md`**

Dans la section `## js/app.js`, remplacer les lignes décrivant `buildHash(view, data)` et le hash routing par une description du nouveau routage :

```
- `buildPath(view, data)` — construit un chemin d'URL réel `/view/data` (pushState)
- `parsePath(pathname)` / `parseLegacyHash(hash)` — parsent respectivement une URL réelle et un ancien lien `#hash` (rétrocompat), partagent `_parseRouteParts(parts)`
- `navigate(view, data)` — change la vue active via `history.pushState` (plus de hash routing)
```

- [ ] **Step 6: Commit**

```bash
git add js/app.js CODEBASE_MAP.md
git commit -m "fix: read routes from pathname via popstate, redirect legacy hash links"
```

---

### Task 4: Fallback serveur GitHub Pages (404.html) + cache-busting

**Files:**
- Create: `404.html`
- Modify: `index.html` (script de restauration + bump `?v=N`)

**Interfaces:**
- Consumes: rien côté JS applicatif (fichiers statiques indépendants)

- [ ] **Step 1: Confirmer le mode de déploiement avant d'implémenter**

Ouvrir `https://github.com/dylanpimont18-hub/Spark_learning/settings/pages` et vérifier que la source est bien "Deploy from a branch" sur `main`. Le repo ne contient aucun workflow GitHub Actions, aucune config Netlify/Vercel, et `firebase.json` ne configure que Firestore (pas de hosting) — la présence du fichier `CNAME` (`sparklearning.fr`) est cohérente avec du GitHub Pages classique. Si la vérification montre autre chose (ex. un service tiers), adapter les steps suivants au mécanisme de fallback SPA propre à cet hébergeur au lieu du 404.html ci-dessous.

- [ ] **Step 2: Créer `404.html` à la racine**

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Spark Learning</title>
    <script>
      // Redirige toute URL profonde inconnue de GitHub Pages vers index.html,
      // en préservant le chemin d'origine (technique standard spa-github-pages).
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body></body>
</html>
```

- [ ] **Step 3: Ajouter le script de restauration dans `index.html`, avant tout autre script**

Dans `index.html`, juste après `<meta name="viewport" ...>` et avant le premier `<link rel="preconnect" ...>` (donc tout en haut de `<head>`), ajouter :

```html
<script>
  // Restaure l'URL propre après un aller-retour par 404.html (spa-github-pages)
  (function (l) {
    if (l.search[1] === '/') {
      var decoded = l.search.slice(1).split('&').map(function (s) {
        return s.replace(/~and~/g, '&');
      }).join('?');
      window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
    }
  }(window.location));
</script>
```

- [ ] **Step 4: Bump cache-busting sur toutes les balises locales de `index.html`**

Incrémenter `?v=5` en `?v=6` sur **toutes** les balises `<script src="js/...">` et `<link ... href="css/styles.css?v=5">` locales de `index.html` (convention du projet — sans ça, certains navigateurs/CDN continuent de servir l'ancien `js/app.js` en cache après déploiement).

- [ ] **Step 5: Vérification manuelle (locale, approximative)**

Optionnel mais recommandé avant de déployer : tester le fallback SPA localement avec un serveur qui simule le comportement GitHub Pages, via `npx` en usage ponctuel (ne modifie pas les dépendances du projet) :

```bash
npx serve -s . -l 8000
```

Ouvrir `http://localhost:8000/module/4e-pythagore/quiz` directement (URL tapée, pas cliquée). Attendu : la page se charge normalement sur le bon module/onglet (le flag `-s` de `serve` simule le fallback `index.html` que 404.html fournira sur GitHub Pages).

- [ ] **Step 6: Commit**

```bash
git add 404.html index.html
git commit -m "feat: add GitHub Pages SPA fallback (404.html) and bump cache-busting to v6"
```

- [ ] **Step 7: Vérification post-déploiement (après push + déploiement réel)**

Une fois la branche déployée sur `sparklearning.fr` : ouvrir `https://sparklearning.fr/modules/maths/4` directement dans un nouvel onglet (URL tapée à la main, pas de clic depuis l'app). Attendu : la page affiche la liste des modules Maths 4e, pas une 404 GitHub ni une page blanche.

---

### Task 5: QA manuelle complète sur toutes les vues et tous les rôles

**Files:** aucun (vérification uniquement — toute correction de bug trouvée ici doit être un commit séparé, minimal, ciblé sur le bug précis)

- [ ] **Step 1: Parcourir chaque type de vue en mode invité**

Sur le site déployé (ou en local avec `npx serve -s .`), en mode invité (sans connexion), visiter successivement et noter toute erreur console ou rendu incorrect : accueil, matières, niveaux, liste de modules, détail d'un module (chaque onglet : cours/quiz/exercice/problème/évaluation), companion, flashcards, chrono, playlist (avec un lien généré), confidentialité.

- [ ] **Step 2: Répéter en mode connecté élève, puis enseignant, puis admin (si comptes de test disponibles)**

Vérifier en particulier : `teacher`, `homework`, `admin` — ces vues sont bloquées en mode invité par `navigate()` (redirection vers `home`), confirmer que ce comportement est inchangé après la migration.

- [ ] **Step 3: Vérifier le mode maintenance et le verrouillage de module avec les nouvelles URLs**

Si un accès admin est disponible : activer le mode maintenance, confirmer que la page de maintenance s'affiche toujours correctement (elle ne dépend pas du routage, mais vérifier qu'aucune régression n'apparaît). Désactiver ensuite.

- [ ] **Step 4: Recherche de régressions liées au cache**

Vider le cache navigateur (ou ouvrir en navigation privée) et recharger le site déployé, pour confirmer que le bump `?v=6` de la Task 4 force bien le rechargement des nouveaux scripts.

- [ ] **Step 5: Consigner le résultat**

Si tout est correct, cocher cette tâche comme terminée dans `plan-fondations-monetisation.md` (section 1.4) et dans ce plan. Si des bugs sont trouvés, les corriger avec des commits séparés et ciblés avant de considérer la Semaine 1 terminée.
