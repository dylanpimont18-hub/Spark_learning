# Prompt de lancement — Physique-Chimie BTS, chapitres 6-8 (à coller dans une nouvelle session)

> Contexte : préparé le 2026-07-24, à la suite de la session qui a créé les chapitres 3-5. Colle le bloc ci-dessous tel quel dans une nouvelle conversation Claude Code, dans ce même projet.

---

## PROMPT À COLLER

On continue la génération des modules Physique-Chimie BTS sur Spark Learning. Contexte déjà établi (ne pas re-vérifier, juste exécuter) :

**État actuel :**
- 5/10 modules BTS déjà créés et validés, dans `js/data/physique-bts/` : `physique-bts-mecanique-point`, `physique-bts-statique-fluides`, `physique-bts-dynamique-fluides`, `physique-bts-thermodynamique`, `physique-bts-circuits-continu`.
- Plomberie déjà en place : `js/data/physique-bts/index.js` (vide), `DATA_FILES['physique-3']` et `MODULE_INDEX` dans `js/loader.js` référencent déjà ces 5 modules, `contenu.md` indique "5/10 sous-modules", `docs/programmes-physique.md` a déjà les statuts 🟢 pour les chapitres 1 à 5. Le cache-busting `?v=` d'`index.html` est déjà à 32 (vérifier qu'il n'a pas bougé depuis ; sinon prendre N+1).
- **Correction importante par rapport à un ancien prompt de lancement** : les fichiers de `js/data/` ne sont **jamais** déclarés en `<script>` dans `index.html` — ils sont chargés dynamiquement par `ensureLevelData()` via `DATA_FILES` dans `js/loader.js`. Ne pas toucher `index.html` pour ça (seul le bump `?v=` compte s'il y a modif de `js/`).

**Chapitres 🔴 à traiter dans cet ordre** (depuis `docs/programmes-physique.md`, section BTS) :
6. Circuits en régime sinusoïdal (impédance) — `physique-bts-regime-sinusoidal`
7. Optique géométrique — `physique-bts-optique`
8. Chimie des solutions (pH, tampons, titrages) — `physique-bts-chimie-solutions`

**Gabarit** : lire en premier `js/data/physique-bts/physique-bts-circuits-continu.js` (électricité, proche du chapitre 6) et `js/data/physique-bts/physique-bts-dynamique-fluides.js` (diagramme SVG bien réussi) comme référence directe — ce sont déjà des modules `physique`/BTS complets avec le bon niveau de détail. Même structure : `id`, `level: 3`, `subject: 'physique'`, `icon`, `title`, `subtitle`, `keywords`, `physics`, puis `cours` (intro, definitions[], method, diagram, example, formulas[], recap[], piege), `quiz` (3 QCM), `exercice.generate()`, `probleme`, `evaluation` (5 questions).

⚠️ **Chapitre 8 (chimie) change de domaine** : pH, tampons, titrages n'ont pas besoin de `physics: true`/notation vectorielle — garder la même structure de module mais adapter le diagramme (ex. courbe de titrage pH = f(V) plutôt qu'un schéma mécanique/électrique).

**Règles de contenu (rappel CLAUDE.md)** : style "SI" aéré (`<br/><br/>` entre idées, `<strong>` sur les concepts clés, rédaction narrative), KaTeX avec virgule française accolée (`1{,}5`, jamais `1.5`), ton socratique jamais punitif, `generate()` utilise `pick()`/`rand()`/`randFloat()` + `fr(value, decimals)` (jamais `.replace('.', '{,}')` à la main).

⚠️ **Piège découvert en session précédente** : le champ `cours.piege` est rendu en 2 panneaux ("L'erreur fréquente" / "La suggestion") par `renderErreurConseil()` (`js/utils/ui-helpers.js`), qui découpe le texte au **premier point suivi d'un espace hors mode maths** (`$...$`). Si `piege` est une seule longue phrase, un seul panneau s'affiche (pas un bug, mais incohérent avec les autres modules). Toujours rédiger `piege` en **2 phrases** : la première décrit l'erreur, la seconde (ex. commençant par "Attention…") donne le réflexe correct.

**Diagrammes (`cours.diagram`)** : SVG fait main en priorité (`theme: 'physique'`), réutiliser les classes CSS génériques déjà existantes (`curve-main`, `frame-line`, `plot-point`, `plot-point-alt`, `guide-line`, `tick-label`, `annotation-label`, `label-soft`) — ne pas inventer de nouvelles classes. ⚠️ Vérifier que tous les éléments (notamment les labels) restent bien À L'INTÉRIEUR du `viewBox` (sinon clippés silencieusement) et qu'aucun label n'entre en collision avec une flèche ou un autre label — calculer les coordonnées à la main avant d'écrire le SVG, pas d'à-peu-près.

**Vérification obligatoire après CHAQUE module créé :**
1. `node scripts/check-decimal-notation.js` — doit rester à 0 erreur (16 avertissements pré-existants acceptés, ne pas en ajouter).
2. Ajouter temporairement le module à `DATA_FILES['physique-3']` et `MODULE_INDEX` dans `js/loader.js` (sera de toute façon fait pour de bon ensuite).
3. Lancer `node scripts/tmp-static-server.js 5177` en arrière-plan (déjà présent dans le repo), puis piloter Chromium headless via Playwright (`C:\Users\Dylan\node_modules\playwright`, disponible globalement — recréer un script driver dans le scratchpad de session, celui des sessions précédentes n'a pas persisté).
   - **Naviguer directement vers `http://localhost:5177/module/{id}/{tab}`** (routeur pushState, PAS de hash `#module/...` — ça charge la page d'accueil et rien d'autre).
   - Forcer le thème sombre via `localStorage.setItem('sparkTheme','dark')` puis reload, screenshoter `.cours-diagram-stage` en clair ET en sombre, vérifier `console --errors` vide sur les 5 onglets (cours/quiz/exercice/probleme/evaluation).
   - Un message console `@firebase/firestore: ... Could not reach Cloud Firestore backend` est normal en local sans connexion — ne pas le traiter comme une erreur bloquante.
   - Écrire les scripts Node avec des chemins en **slash `/`** (`C:/Users/Dylan/...`), pas en backslash `\` — le heredoc Bash de cet environnement corrompt les doubles backslashes.
4. Corriger tout problème visuel repéré avant de passer au module suivant.
5. Arrêter le serveur (`taskkill //PID <pid> //F`, PID trouvable via `Get-NetTCPConnection -LocalPort 5177`) une fois les 3 modules du lot terminés.

**Après chaque module créé :**
- Ajouter le fichier à `DATA_FILES['physique-3']` et son `id` à `MODULE_INDEX` dans `js/loader.js`.
- Faire passer son statut 🔴 → 🟢 dans `docs/programmes-physique.md`.
- Mettre à jour le compteur dans `contenu.md` (X/10).

**Arrêt** : s'arrêter proprement après ces 3 modules (8/10 au total). Indiquer le dernier chapitre traité, le prochain 🔴 à reprendre (n°9, Cinétique chimique), et le nombre de modules restants. Une fois les 3 modules terminés, incrémenter le `?v=` de TOUTES les balises locales `<script>`/`<link>` d'`index.html` (32 → 33, ou N+1 sur la valeur actuelle si elle a bougé) puisque `js/loader.js` aura été modifié. Ne pas committer sans demande explicite — proposer le commit une fois le lot terminé, laisser l'utilisateur valider.

---

*Fin du prompt à coller.*
