# Prompt de lancement — BTS FED, savoir S8 (3 premiers modules) — à coller dans une nouvelle session

> Contexte : préparé le 2026-08-02, à la suite du chantier qui a importé le référentiel S8 et construit `docs/programmes-fed.md` (54 notions, 0 module créé). Colle le bloc ci-dessous tel quel dans une nouvelle conversation Claude Code, dans ce même projet.
>
> **Différence importante avec le prompt physique-chimie BTS** : celui-là continuait une matière déjà enregistrée sur le site. Ici, **BTS FED n'existe pas encore comme matière** dans la navigation — cette session doit d'abord la créer (plomberie), puis générer les 3 premiers modules.

---

## PROMPT À COLLER

On lance la génération des tout premiers modules BTS FED (Fluides Énergies Domotique, option GCF) sur Spark Learning. Contexte déjà établi (ne pas re-vérifier, juste exécuter) :

**État actuel :**
- `docs/programmes-fed.md` existe : 54 notions du savoir S8 (Études technologiques des systèmes), toutes 🔴, avec niveaux GCF/FCA/DBC. `docs/referentiel-fed-S8.md` est la copie brute du référentiel officiel, source de vérité pour tout niveau/limite de connaissance.
- **Aucun module FED n'existe encore.** Pas de dossier `js/data/fed-bts/`, pas d'entrée `'fed'` dans `SUBJECT_DEFS` (`js/state.js`), pas de clé `'fed-3'` dans `DATA_FILES`/`MODULE_INDEX` (`js/loader.js`). Il faut créer cette plomberie AVANT le premier module (pas après), sinon rien ne s'affiche.
- Cache-busting actuel dans `index.html` : `?v=43` sur `css/styles.css`, `js/loader.js`, `js/app.js` (vérifier que ça n'a pas bougé depuis ; sinon prendre N+1).

**Décision déjà prise (ne pas rediscuter) : BTS FED est une matière à part entière** dans la navigation (pas une sous-catégorie de "Sciences de l'Ingénieur"), car ce n'est pas du SI générique — ce sont des savoirs spécifiques à l'option GCF (thermique, fluides, systèmes CVC, réglementations).

### Étape 0 — Plomberie (une seule fois, avant le premier module)

1. **`js/state.js`** — ajouter une 4e entrée dans `SUBJECT_DEFS` (après `si`, ligne ~118) :
   ```js
   {
     id: 'fed', icon: '🌡️', label: 'BTS FED',
     color: 'var(--fed)',
     description: 'Thermique, fluides, systèmes CVC — les savoirs techniques du BTS Fluides Énergies Domotique, option Génie Climatique et Fluidique.',
     availableLevels: [3],
     applicationLabel: 'Application chantier',
     applicationIcon: '🏗️',
     applicationQuestion: 'Où retrouve-t-on ce principe sur une installation réelle ?',
     formulasLabel: 'Relations clés',
     formulasIcon: '🌡️'
   }
   ```
   `availableLevels: [3]` uniquement (BTS seulement, pas de déclinaison lycée pour cette matière).

2. **`css/styles.css`** — ajouter la variable couleur à côté de `--primary`/`--secondary`/`--accent` (ligne ~9) :
   ```css
   --fed: #E67E22;
   ```
   Choisir une teinte visuellement distincte des trois couleurs existantes (`#2C3E50` bleu foncé, `#48C9B0` turquoise, `#F4D03F` jaune) — l'orange proposé (`#E67E22`, évoque chaleur/énergie) convient mais vérifie le contraste texte/fond en clair ET en sombre pendant la QA visuelle (étape 4). Ajouter aussi la règle de thème diagramme, à côté de `.diagram-theme-si` (css/styles.css ligne ~1786) :
   ```css
   .diagram-theme-fed {
     --diagram-accent: var(--fed);
   }
   ```

3. **`js/loader.js`** — ajouter la clé `'fed-3'` dans `DATA_FILES` (à côté de `'physique-3'`) et brancher les 3 modules dans `MODULE_INDEX` (voir étape 3 ci-dessous pour les ids exacts). Ne PAS toucher `index.html` pour la déclaration des fichiers `js/data/` — ils se chargent dynamiquement via `ensureLevelData()`, jamais en `<script>`.

4. **`js/views/adminPanel.js:655`** — ajouter `fed: 'BTS FED'` au dictionnaire `subjectLabel` (sinon le panel enseignant affichera l'id brut `fed` au lieu du libellé).

5. Créer le dossier `js/data/fed-bts/` avec un `index.js` vide (même convention que `js/data/si-bts/index.js` : fichier intentionnellement vide, commentaire expliquant que les modules sont chargés individuellement par `js/loader.js`).

### Étape 1 — Les 3 notions à traiter (dans cet ordre, depuis `docs/programmes-fed.md` section A)

1. **A1-1 Thermique des tubes** (GCF 2) → `fed-bts-a1-1-thermique-tubes`
2. **A1-2 Hygrothermie** (GCF 3) → `fed-bts-a1-2-hygrothermie`
3. **A2-1 Génie civil, structure et architecture** (GCF 2) → `fed-bts-a2-1-genie-civil`

Limites de connaissances exactes (à respecter, ne pas déborder) : voir `docs/referentiel-fed-S8.md`, sections `## A1) Thermique` et `## A2) Performance énergétique du bâtiment`. Ce sont les tout premiers savoirs de la progression GCF — prérequis pour tout le reste (S8-A avant S8-B).

### Étape 2 — Gabarit

Lire en premier **`js/data/si-bts/si-bts-hydraulique.js`** en entier comme référence directe — c'est le module technique/ingénierie le plus proche du style attendu pour FED (schéma SVG fait main, calculs d'ingénieur, ton appliqué). Structure à reproduire : `id`, `level: 3`, `subject: 'fed'`, `icon`, `title`, `subtitle`, `keywords`, `physics` (accroche d'intro), puis `cours` (`intro`, `definitions[]`, `method`, `example`, `formulas[]`, `diagram`, `recap[]`, `piege`), `quiz` (3 QCM), `exercice.generate()`, `probleme`, `evaluation` (4-5 questions notées).

⚠️ **Piège dans le gabarit lui-même** : `si-bts-hydraulique.js` contient plusieurs `.replace('.', '{,}')` écrits à la main dans `exercice.generate()` (lignes ~195-198) — c'est justement l'anti-pattern interdit par `CLAUDE.md`. Ne le recopie PAS. Utilise `fr(value, decimals)` (défini dans `js/data/helpers.js:16`) partout où le gabarit fait ce `.replace()`. Fonctions disponibles dans `generate()` : `rand(min, max)` (entier), `randFloat(min, max, d=1)` (flottant arrondi), `pick(arr)` (élément aléatoire), `fr(value, decimals)` (notation française, `decimals` optionnel).

⚠️ **`cours.piege`** : rendu en 2 panneaux ("L'erreur fréquente" / "La suggestion") par `renderErreurConseil()` (`js/utils/ui-helpers.js:96`), qui coupe au premier point suivi d'un espace hors mode maths (`$...$`). Toujours rédiger `piege` en **2 phrases** : la première décrit l'erreur, la seconde (ex. "Attention…") donne le réflexe correct. Sinon un seul panneau s'affiche.

**Règles de contenu (rappel CLAUDE.md, section 2 — obligatoires)** :
- Style "SI" aéré : `<br/><br/>` entre chaque idée/étape, `<strong>` sur les concepts clés et lois, rédaction narrative même pour les calculs.
- KaTeX (`$...$`, `$$...$$`), virgule française avec accolades (`1{,}5`, jamais `1.5`) — toujours via `fr()`, jamais de `.replace()` à la main.
- Ton socratique, jamais punitif — pas de "Faux"/"Erreur".
- `generate()` doit varier les contextes (via `pick()`), pas juste les valeurs numériques.

**Diagrammes (`cours.diagram`)** : `theme: 'fed'` (utilise la nouvelle classe `.diagram-theme-fed` créée à l'étape 0). SVG fait main, réutiliser les classes CSS génériques déjà existantes (`curve-main`, `frame-line`, `plot-point`, `plot-point-alt`, `guide-line`, `tick-label`, `annotation-label`, `label-soft`) — ne pas en inventer. Vérifier que tous les éléments (notamment les labels) restent DANS le `viewBox` et qu'aucun label ne chevauche une flèche ou un autre label — calculer les coordonnées à la main avant d'écrire le SVG.

### Étape 3 — Après CHAQUE module créé

1. Ajouter le fichier à `DATA_FILES['fed-3']` et son `id` à `MODULE_INDEX` (avec la valeur `'fed-3'`) dans `js/loader.js`.
2. Faire passer son statut 🔴 → 🟢 dans `docs/programmes-fed.md` (colonne Statut de la ligne concernée).
3. `node scripts/check-decimal-notation.js` — doit rester à 0 erreur.

### Étape 4 — Vérification visuelle obligatoire (après les 3 modules, ou au fil de l'eau)

1. Lancer `node scripts/tmp-static-server.js 5177` en arrière-plan.
2. Piloter Chromium headless via Playwright (`C:\Users\Dylan\node_modules\playwright`, disponible globalement — recréer un script driver dans le scratchpad de session).
3. Naviguer directement vers `http://localhost:5177/module/{id}/{tab}` (routeur pushState, PAS de hash `#module/...`).
4. Forcer le thème sombre via `localStorage.setItem('sparkTheme','dark')` puis reload. Screenshoter `.cours-diagram-stage` en clair ET en sombre pour les 3 modules — vérifier spécifiquement le contraste de la nouvelle couleur `--fed` sur les deux thèmes (c'est une couleur neuve, jamais testée visuellement).
5. Vérifier `console --errors` vide sur les 5 onglets (cours/quiz/exercice/probleme/evaluation) de chaque module.
6. Un message `@firebase/firestore: ... Could not reach Cloud Firestore backend` est normal en local — pas bloquant.
7. Vérifier aussi la page d'accueil / sélecteur de matière : la nouvelle carte "BTS FED" doit s'afficher correctement à côté de Maths/Physique-Chimie/SI, icône et couleur lisibles.
8. Écrire les scripts Node avec des chemins en slash `/` (`C:/Users/Dylan/...`), pas en backslash — le heredoc Bash de cet environnement corrompt les doubles backslashes.
9. Corriger tout problème visuel repéré avant de passer au module suivant.
10. Arrêter le serveur (`taskkill //PID <pid> //F`, PID trouvable via `Get-NetTCPConnection -LocalPort 5177`) une fois les 3 modules terminés.

### Étape 5 — Finalisation

- Mettre à jour `contenu.md` : ajouter la ligne de la nouvelle matière FED (3/54 notions S8 traitées) à côté des lignes Maths/Physique/SI déjà présentes.
- Régénérer `sitemap.xml` : `node scripts/generate-sitemap.js` (lit directement `js/loader.js`, rien à maintenir à la main).
- Incrémenter le `?v=` de TOUTES les balises locales `<script>`/`<link>` d'`index.html` (43 → 44, ou N+1 sur la valeur actuelle si elle a bougé) — `js/loader.js`, `js/state.js` et `css/styles.css` sont tous modifiés.

**Arrêt** : s'arrêter proprement après ces 3 modules (3/54 notions S8, section A). Indiquer le prochain 🔴 à reprendre (A2-2 Simulation dynamique thermique) et le nombre de notions restantes en section A (8) et au total (51). Ne pas committer sans demande explicite — proposer le commit une fois le lot terminé et vérifié, laisser l'utilisateur valider.

---

*Fin du prompt à coller.*
