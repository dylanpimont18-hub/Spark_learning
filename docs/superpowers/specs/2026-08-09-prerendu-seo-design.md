# Pré-rendu statique pour l'indexation Google — Design

## Contexte

Google Search Console montre 220 pages soumises via `sitemap.xml`, dont **1 seule indexée**. Répartition :
- 216 "Détectée, actuellement non indexée"
- 2 "Page avec redirection"
- 1 "Autre page avec balise canonique correcte"

Ce chantier avait déjà été identifié comme piste de secours (non traitée) dans `2026-07-24-adsense-conformite-contenu-design.md` §"Hors scope" — un refus AdSense a cité "pages sans contenu d'éditeur" comme motif, et l'hypothèse d'un rendu 100% client-side vide au moment du crawl y était explicitement mentionnée comme non confirmée. Ce chantier confirme et corrige cette hypothèse.

**Cause racine** (confirmée par lecture de code, `js/app.js`) : le contenu réel de chaque page (titre, description, canonical, contenu du cours) n'apparaît qu'après une chaîne asynchrone longue :

```
DOMContentLoaded → AuthService.init() → onAuthStateChanged (résolution SDK Firebase)
  → _checkMaintenance() (lecture Firestore)
  → _syncModuleAccess() (lecture Firestore)
  → _setupStudentApp() → parse URL → ensureModuleData() (fetch async)
  → navigate() → render() → updatePageMeta()
```

(`js/app.js:750-809`, `js/app.js:917-963`)

Avant la fin de cette chaîne, **toutes les URLs du site servent le même HTML brut générique** (`index.html:7-10` : même `<title>`, même `canonical="https://sparklearning.fr/"`, `#app` vide). Si le budget de rendu de Googlebot (Web Rendering Service) expire avant la fin de la chaîne — probable vu le nombre d'allers-retours réseau impliqués — Google voit ~220 pages quasi identiques et vides, d'où le statut "Détectée, non indexée" en masse.

Un fichier `404.html` utilisant l'astuce `spa-github-pages` a aussi été repéré comme code mort : le site est hébergé sur Firebase Hosting, qui a déjà une règle de rewrite propre (`firebase.json` : `** → /index.html`). Sans impact sur ce chantier, à nettoyer un jour à l'occasion.

## Objectif

Garantir que le HTML brut renvoyé pour chaque URL publique du sitemap contient déjà le vrai contenu (titre, meta, corps du cours), **sans dépendre de l'exécution JS par Google** — de façon robuste et automatique à chaque déploiement, sans étape manuelle à retenir.

## Décisions actées avec l'utilisateur

- **Mécanisme retenu : pré-rendu par snapshot du vrai rendu client (Puppeteer)**, plutôt qu'un formatteur Node maison qui dupliquerait la logique d'affichage. Zéro divergence avec ce que voient les vrais visiteurs, zéro maintenance parallèle. Contrepartie assumée : premier ajout d'une dépendance npm (`puppeteer`, devDependency) au projet, qui interdisait jusqu'ici tout npm — **scope strictement limité à ce script de build CI**, jamais livré au navigateur ni requis pour développer l'app.
- **Modules verrouillés/en maintenance** : leur contenu pédagogique peut être présent dans le HTML statique généré même si l'app masque normalement l'accès. Le verrouillage sert à afficher "en travaux", pas à protéger du contenu payant/confidentiel.
- **Le site ne doit jamais être indisponible à cause de ce chantier** : le déploiement dynamique (comportement actuel) doit toujours réussir et rendre le site pleinement fonctionnel *avant* que le pré-rendu ne démarre. Un échec du pré-rendu ne doit jamais empêcher ni dégrader le site déjà déployé.
- **Régénération automatique de `sitemap.xml`** intégrée au même pipeline CI (actuellement une étape manuelle documentée dans `CLAUDE.md` §3) — ferme une autre source d'oubli qui empêcherait un nouveau module d'être pré-rendu.

## Architecture

### Pipeline CI en 2 phases (`.github/workflows/firebase-hosting-merge.yml`)

```
push sur main
   │
   ├─ Étape 0 : node scripts/generate-sitemap.js
   │     → sitemap.xml à jour, source unique des URLs pour tout le reste
   │
   ├─ Phase 1 : firebase deploy --only hosting (comme aujourd'hui)
   │     → site live et pleinement fonctionnel → fin de la garantie de disponibilité
   │
   ├─ npm install (installe uniquement puppeteer, scope CI)
   │
   ├─ Phase 2 : node scripts/prerender.js
   │     → lit sitemap.xml
   │     → pour chaque URL : ouvre https://sparklearning.fr/<route> en Chrome headless,
   │       attend un signal de contenu réel (titre ≠ titre générique, #app non vide)
   │     → applique la vérification de contenu (voir Garde-fous)
   │     → écrit le HTML capturé dans <route>/index.html, dans le checkout CI local
   │       (jamais commité dans git — régénéré à chaque run)
   │
   └─ Phase 2b : firebase deploy --only hosting (2e appel)
         → envoie les fichiers statiques générés, qui prennent le pas sur la règle
           de rewrite SPA pour leurs routes exactes (comportement par défaut de
           Firebase Hosting : fichier statique exact prioritaire sur les rewrites)
```

Pour un vrai visiteur avec JS activé, le SPA boot normalement par-dessus le HTML statique et ré-affiche tout dynamiquement — aucun changement de comportement utilisateur perçu. Le HTML statique n'est qu'un filet de sécurité pour les robots / JS désactivé.

### `scripts/prerender.js`

- Source des URLs : parse `<loc>` dans `sitemap.xml` (pas de liste dupliquée à maintenir).
- Un seul navigateur Puppeteer réutilisé sur toutes les pages (pas de relance par page, pour la vitesse).
- Accepte un flag `--base-url` (défaut `https://sparklearning.fr`) pour pouvoir cibler un canal de preview Firebase lors des tests, sans toucher la prod.
- Écrit chaque fichier à `<segments-de-la-route>/index.html` relatif à la racine du repo (ex. `module/6e-fractions/cours/index.html`), cohérent avec `firebase.json` (`hosting.public: "."`).

## Garde-fous ("ne recommence jamais")

- **Vérification de contenu par page** avant d'accepter le HTML capturé : le `<title>` doit différer du titre générique par défaut ET le texte de `#app` doit dépasser un seuil de longueur minimal. Une page qui échoue ce test est suspecte (chaîne d'init cassée, bug de données du module...).
- **Échec isolé vs échec systémique** : une poignée de pages en échec → ignorées cette fois-ci (warning loggé), sans bloquer les autres. Si plus de ~20% des pages échouent → le job CI échoue bruyamment (signal d'un problème systémique, ex. régression dans la chaîne d'init de `js/app.js`, Firestore indisponible). C'est le mécanisme anti-récidive central : toute régression future qui viderait le rendu est détectée à **chaque déploiement**, au lieu d'être découverte des semaines plus tard dans Search Console.
- Si Phase 2 ou 2b échoue pour toute autre raison (erreur réseau, crash Puppeteer), le job échoue mais **le site déployé en Phase 1 reste en place et fonctionnel** — aucun scénario où une erreur de pré-rendu casse ou coupe le site.
- **Verrou de concurrence** (`concurrency: firebase-hosting-live`, `cancel-in-progress: false`) : le job dure désormais 15-45 min au lieu de ~1 min. Sans ce verrou, deux merges rapprochés se chevauchent et la Phase 2b du job le plus ancien déploie *son* checkout (js/, css/, index.html d'avant) par-dessus la Phase 1 du plus récent — retour en arrière silencieux de la production. Les runs sont donc mis en file d'attente, jamais annulés en vol.

## Conséquence opérationnelle assumée : fenêtre « SPA nu » à chaque déploiement

Une release Firebase Hosting est un **instantané complet** du dossier uploadé : la Phase 1 déploie un checkout propre, qui ne contient aucun dossier de route pré-rendu (ils sont générés en Phase 2 et git-ignorés). Il en découle deux faits, corrects et acceptés :

1. **Entre la fin de la Phase 1 et la fin de la Phase 2b — soit toute la durée du pré-rendu, 15 à 45 min — le site ne sert que le SPA brut**, sans aucun HTML pré-rendu. C'est exactement le comportement d'avant ce chantier : le site est pleinement fonctionnel pour les visiteurs, seuls les robots qui passeraient pendant cette fenêtre reverraient des pages vides.
2. **Si la Phase 2 (ou 2b) échoue, le site reste dans cet état jusqu'au prochain run réussi.** Il n'y a pas de conservation des fichiers du run précédent : ils ont disparu dès la Phase 1. Un échec de pré-rendu ne dégrade donc jamais la disponibilité, mais il annule le bénéfice SEO jusqu'à la correction — un job rouge sur `main` doit être traité, pas ignoré.

Corollaire technique : le run N ne voit jamais les fichiers du run N-1 quand il crawle la production. Le mécanisme d'attente d'un signal de rendu explicite (`window.__sparkRouteReady`) reste néanmoins le bon critère — non pas à cause de fichiers périmés en production, mais parce qu'un simple seuil de longueur de texte mesure la présence de contenu servi, pas le fait que *cette* route vienne d'être rendue par le JS (faux positif observé en local contre `scripts/tmp-static-server.js`, qui servait les restes d'un run précédent).

## Fichiers impactés

**Nouveaux :**
- `package.json` — devDependency `puppeteer` uniquement
- `scripts/prerender.js`

**Modifiés :**
- `.github/workflows/firebase-hosting-merge.yml` — ajout des étapes décrites ci-dessus
- `.gitignore` — exclusion de sécurité des dossiers de routes générés (`/module/`, `/modules/`, `/levels/`, `/subjects/`), au cas où le script serait lancé en local
- `CLAUDE.md` — exception explicite documentée à la règle "aucun npm" (scope : uniquement ce script de build CI) ; l'étape manuelle "régénérer sitemap.xml" en §3 devient une note "automatisé en CI"
- `CODEBASE_MAP.md` — entrée pour `scripts/prerender.js` (à la fin de l'implémentation)

## Plan de validation

1. Tester `scripts/prerender.js` en local/CI avec `--base-url` pointant vers un canal de preview Firebase (`firebase hosting:channel:deploy`), pas directement `sparklearning.fr`.
2. Inspecter à la main quelques fichiers générés (une page module, une page de listing, la home) : titre correct, contenu du cours présent, pas de fuite de données spécifiques à un utilisateur.
3. Une fois validé sur preview, activer les nouvelles étapes sur le pipeline `main`.
4. Après un déploiement réel, vérifier dans Search Console → Inspection de l'URL sur quelques pages que le HTML brut (pas le rendu) contient déjà le contenu.
5. Resoumettre `sitemap.xml` dans Search Console et surveiller la progression du statut "Détectée, non indexée" sur les jours suivants.

## Hors scope de ce chantier

- Découpler le rendu client de la chaîne auth/Firestore pour accélérer l'expérience des vrais visiteurs invités (améliorerait aussi le SEO indirectement, mais pas nécessaire vu que Puppeteer n'a pas la contrainte de budget de rendu de Google — chantier UX/perf séparé, non traité ici).
- Nettoyage du `404.html` mort (astuce `spa-github-pages` obsolète depuis la migration vers Firebase Hosting).
- Activation des vraies pubs AdSense (reste gated par l'approbation du compte, indépendant de ce chantier).
