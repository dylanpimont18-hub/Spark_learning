# Améliorations du site — Backlog de tâches

Contexte : backlog des évolutions à venir. L'agent IA prend quelques tâches `[ ]` à chaque session, les réalise, et coche `[x]`.
Sans création de compte, sans connexion obligatoire. Données utilisateur locales par défaut.

---

## 1. Diagnostic d'entrée rapide

- [ ] Créer `js/views/diagnostic.js` — vue SPA avec 3 étapes : choix matière → choix niveau → notions difficiles (checkboxes)
- [ ] Ajouter le routage `#diagnostic` dans `js/app.js` et un lien depuis la nav
- [ ] Déclarer `js/views/diagnostic.js` dans `index.html` (après les autres vues)
- [ ] Implémenter la sauvegarde du profil diagnostic dans `js/storage.js` (clé `diagnosticProfile`)
- [ ] Brancher le profil dans `js/recommendations.js` pour filtrer les suggestions selon les notions choisies
- [ ] Ajouter un bouton "Faire le diagnostic" sur la page d'accueil (`js/views/home.js`) visible uniquement si aucun profil n'existe encore

---

## 2. Accueil transformé en tableau de bord d'action

- [ ] Lire `js/views/home.js` pour comprendre la structure actuelle avant toute modification
- [ ] Ajouter un bloc "Continuer" affichant le dernier module consulté (lu depuis `js/storage.js`)
- [ ] Ajouter un bloc "Prochaine étape recommandée" utilisant `js/recommendations.js`
- [ ] Ajouter un compteur "X révisions dues aujourd'hui" (alimenté par le module Spaced Repetition, tâche 4)
- [ ] Masquer ou réduire les statistiques secondaires actuelles pour mettre en avant les blocs d'action
- [ ] Styliser le tableau de bord avec les variables CSS existantes de `css/styles.css`

---

## 3. Remédiation réellement adaptative

- [ ] Étendre le schéma de `js/storage.js` : stocker tentatives, scores et temps passé par module (clé `moduleStats`)
- [ ] Modifier `js/components/quiz.js` et `js/components/exercice.js` pour appeler une fonction `recordAttempt(moduleId, score, timeMs)` après chaque session
- [ ] Mettre à jour `js/engines/companionEngine.js` : `detectLacunes()` lit `moduleStats` et calcule un score de lacune pondéré
- [ ] Modifier `getRemediationRecommendations()` pour trier les modules par score de lacune décroissant
- [ ] Ajouter dans `js/components/companion.js` un bloc "À retravailler en priorité" avec les 3 modules les plus lacunaires

---

## 4. Mode "Révision espacée" (Spaced Repetition)

- [ ] Ajouter dans `js/storage.js` la fonction `saveQuestionResult(moduleId, questionId, correct)` — calcule et stocke l'intervalle SM-2 suivant
- [ ] Ajouter `getDueReviews()` retournant toutes les questions dont la date de prochaine révision est dépassée
- [ ] Créer `js/views/revision.js` — vue listant les questions dues une par une avec validation
- [ ] Ajouter le routage `#revision` dans `js/app.js`
- [ ] Déclarer `js/views/revision.js` dans `index.html`
- [ ] Brancher `saveQuestionResult()` dans `js/components/quiz.js` après chaque réponse validée
- [ ] Ajouter le compteur "X révisions dues" sur l'accueil dans `js/views/home.js`

---

## 5. Journal d'erreurs personnel

- [ ] Ajouter dans `js/storage.js` les fonctions `saveError(moduleId, questionText, correctAnswer)`, `getErrors()` et `markErrorUnderstood(errorId)`
- [ ] Brancher `saveError()` dans `js/components/quiz.js` après chaque mauvaise réponse
- [ ] Brancher `saveError()` dans `js/components/exercice.js` après chaque mauvaise réponse
- [ ] Créer `js/views/erreurs.js` — vue listant les erreurs avec : intitulé, bonne réponse, module, date, bouton "Comprise", bouton "Réviser"
- [ ] Ajouter le routage `#erreurs` dans `js/app.js`
- [ ] Déclarer `js/views/erreurs.js` dans `index.html`
- [ ] Ajouter un lien "Mes erreurs" dans la navigation principale (avec compteur de badge si erreurs non comprises)

---

## 6. Minuteur Pomodoro intégré aux sessions

- [ ] Lire `js/chrono.js` pour comprendre l'API et les fonctions exposées
- [ ] Créer `js/components/pomodoro.js` — pastille Pomodoro autonome (25 min travail / 5 min pause, transitions CSS)
- [ ] Injecter la pastille dans `js/components/moduleTabs.js` au montage d'un module (position fixe en bas à droite)
- [ ] Ajouter les styles de la pastille dans `css/styles.css` (variables CSS, pas de couleurs hardcodées)
- [ ] Déclarer `js/components/pomodoro.js` dans `index.html`
- [ ] Ajouter une option "Activer le Pomodoro" dans un menu paramètres ou en toggle sur la pastille, sauvegardée dans `js/storage.js` (clé `pomodoroEnabled`)

---

## 7. "Expliquer autrement" sur les définitions

- [ ] Documenter dans `js/data/helpers.js` (en commentaire) le champ optionnel `alternativeExplanations: ['...', '...']` sur les blocs de cours
- [ ] Modifier `js/components/renderCours.js` : détecter `alternativeExplanations` et afficher un bouton "Voir une autre explication"
- [ ] Implémenter la rotation cyclique des explications (indice stocké en mémoire locale de la vue, pas en localStorage)
- [ ] Ajouter le style du bouton dans `css/styles.css` (bouton discret, outline, small)
- [ ] Ajouter des `alternativeExplanations` sur 3 modules pilotes : `js/data/4e/4e-pythagore.js`, `js/data/3e/trigonometrie.js`, `js/data/lycee-1re/1re-derivation.js`

---

## 8. Promesse "sans compte" rendue explicite

- [x] Ajouter dans `js/views/home.js` un bandeau ou une ligne sous le titre : "Aucun compte requis — ta progression est sauvegardée sur cet appareil"
- [ ] Vérifier que ce message est visible sans scroll sur mobile (viewport < 400 px)
- [x] Ajouter une icône d'info (ℹ️ en texte ou SVG inline) avec tooltip expliquant brièvement le localStorage

---

## 9. Recherche améliorée

- [ ] Lire le code de recherche actuel (chercher la fonction de recherche dans `js/views/` ou `js/app.js`) avant modification
- [ ] Implémenter une distance de Levenshtein légère (< 30 lignes) pour tolérance aux fautes de frappe (seuil : 2 caractères)
- [ ] Créer `js/data/synonymes.js` avec les alias courants (ex : `"dérivée" → "dérivation"`, `"trigo" → "trigonométrie"`)
- [ ] Déclarer `js/data/synonymes.js` dans `index.html`
- [ ] Ajouter la sauvegarde des 5 dernières recherches dans `js/storage.js` (clé `searchHistory`)
- [ ] Afficher l'historique en dropdown sous la barre de recherche au focus
- [ ] Ajouter des boutons "Cours", "Quiz", "Exercice" dans chaque résultat de recherche, renvoyant vers l'onglet correspondant

---

## 10. Partage enseignant sans authentification

- [ ] Lire `js/playlist.js` pour comprendre la structure des playlists existantes
- [ ] Ajouter `generateShareUrl(playlistId)` encodant la playlist en base64 dans le hash URL
- [ ] Ajouter `importFromUrl()` décodant et chargeant une playlist depuis l'URL au démarrage dans `js/app.js`
- [ ] Intégrer la génération de QR code via un script CDN léger (ex: `qrcode.js`) déclaré dans `index.html`
- [ ] Ajouter un bouton "Partager" dans l'interface playlist affichant l'URL copiable et le QR code

---

## 11. Vue "Carte des prérequis"

- [ ] Créer `js/data/prerequis.js` — objet `{ moduleId: ['prereqId', ...] }` pour les matières Maths (lycée + BTS en priorité)
- [ ] Déclarer `js/data/prerequis.js` dans `index.html`
- [ ] Créer `js/views/prerequis.js` — génère un SVG inline dynamique (nœuds + flèches) à partir du graphe
- [ ] Colorier les nœuds selon l'état (complété = `var(--success)`, prérequis manquant = `var(--warning)`, non démarré = gris)
- [ ] Ajouter le routage `#prerequis` dans `js/app.js`
- [ ] Déclarer `js/views/prerequis.js` dans `index.html`
- [ ] Ajouter un bouton "Voir les prérequis" depuis la vue d'un module (dans `js/components/moduleTabs.js`)

---

## 12. Célébrations contextuelles

- [ ] Créer `js/components/celebration.js` exposant `celebrate(type)` avec les types : `'level-complete'`, `'streak'`, `'badge'`
- [ ] Définir les 3 animations dans `css/styles.css` via `@keyframes` : confetti (particules CSS), message flash (fade + scale), badge pulse
- [ ] Déclarer `js/components/celebration.js` dans `index.html`
- [ ] Brancher `celebrate('level-complete')` dans la logique de complétion de niveau dans `js/storage.js`
- [ ] Brancher `celebrate('streak')` après 5 bonnes réponses consécutives dans `js/components/quiz.js`
- [ ] Brancher `celebrate('badge')` dans `js/engines/companionEngine.js` lors de l'attribution d'un badge

---

## 13. Optimisation pour smartphone

- [x] Auditer `css/styles.css` : identifier tous les boutons de quiz/exercice avec hauteur < 48 px et les passer à `min-height: 48px`
- [x] Ajouter `overflow-x: auto; -webkit-overflow-scrolling: touch;` sur les blocs `.katex-display` dans `css/styles.css`
- [ ] Réduire le menu de navigation mobile dans `css/styles.css` : icônes + labels courts, pas de texte long tronqué
- [ ] Ajouter un bouton "Reprendre" sur l'accueil mobile dans `js/views/home.js` (visible uniquement si un module est en cours, viewport < 768 px)
- [ ] Modifier `js/components/exercice.js` : après focus sur `<input>`, appeler `element.scrollIntoView({ behavior: 'smooth', block: 'center' })` pour éviter l'écrasement par le clavier virtuel

---

## Contrainte produit à conserver

- Le site doit rester utilisable sans création de compte.
- Les données utilisateur doivent rester locales par défaut.
- Si un partage est ajouté, il doit fonctionner via lien, export ou QR code, sans authentification obligatoire.
- Stack Vanilla JS : pas de bundler, pas de npm. Tout script déclaré dans `index.html`.
