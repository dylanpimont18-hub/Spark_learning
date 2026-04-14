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

Objectif : sortir d'une logique "non complété = lacune" et calculer une priorité de remédiation à partir des erreurs réelles, du temps passé et du niveau d'autonomie.

### 3.1. Unifier la donnée de suivi

- [ ] Auditer `sparkTracking` existant dans `js/storage.js` et décider d'une source de vérité unique : éviter un doublon entre `sparkTracking` et `moduleStats` si une migration suffit
- [ ] Définir un schéma cible par module puis par section (`quiz`, `exercice`, `evaluation`) avec : `attempts`, `correct`, `wrong`, `bestScore`, `lastScore`, `avgTimeMs`, `hintCount`, `solutionCount`, `lastAttemptAt`, `questionStats`
- [ ] Ajouter une migration one-shot au démarrage pour convertir les anciennes données vers le nouveau schéma sans casser l'existant
- [ ] Exposer des helpers stables dans `js/storage.js` : `getModuleStats(moduleId)`, `recordAttempt(...)`, `recordSessionSummary(...)`, `getWeakQuestions(moduleId)`

### 3.2. Instrumenter chaque activité

- [ ] Quiz : démarrer un timer à la première question, enregistrer chaque réponse, le score final, le temps moyen par question et la liste des questions ratées
- [ ] Exercice : enregistrer chaque mauvaise tentative, le temps avant réussite, l'affichage d'indice et l'affichage de solution
- [ ] Évaluation : enregistrer le score, les questions ratées, le temps total et l'abandon éventuel
- [ ] Chrono et problème : garder ce périmètre pour une phase 2, après stabilisation de `quiz`, `exercice` et `evaluation`

### 3.3. Calculer un score de lacune pondéré

- [ ] Réécrire `detectLacunes()` dans `js/engines/companionEngine.js` pour utiliser un score pondéré au lieu d'un simple booléen de complétion
- [ ] Pondération V1 proposée : taux d'erreur `45 %`, faible score `20 %`, usage d'indice `15 %`, solution révélée `10 %`, temps anormalement long `10 %`
- [ ] Ajouter une décroissance temporelle : une erreur ancienne doit peser moins qu'une erreur récente
- [ ] Distinguer trois états par module : `jamais vu`, `en cours mais fragile`, `maîtrisé`
- [ ] Retourner pour chaque module un objet explicable : `score`, `raisons`, `questionsFaibles`, `nextAction`

### 3.4. Rendre la remédiation lisible dans l'interface

- [ ] Ajouter dans `js/components/companion.js` un bloc `À retravailler en priorité` avec les 3 modules les plus fragiles
- [ ] Afficher pour chaque recommandation une raison concrète : `2 quiz ratés`, `indice affiché 3 fois`, `score d'évaluation < 50 %`
- [ ] Ajouter un CTA par besoin : `Revoir le cours`, `Refaire le quiz`, `Lancer un exercice ciblé`
- [ ] Ajouter un écran de fin de remédiation avec progression avant/après, points gagnés et prochaine recommandation

### 3.5. Déploiement progressif

- [ ] Piloter la V1 sur 3 modules repères : `4e-pythagore`, `trigonometrie`, `1re-derivation`
- [ ] Simuler plusieurs profils élèves en local pour vérifier que le tri des priorités reste cohérent
- [ ] Ajuster les poids de calcul avant généralisation à tout le catalogue
- [ ] Mettre à jour `contenu.md` si un nouveau moteur ou un nouveau script est ajouté en `js/`

---

## 4. Mode "Révision espacée" (Spaced Repetition)

Objectif : créer une file de révision quotidienne courte, stable et réellement utile, sans essayer de mettre tout le site en SM-2 dès la V1.

### 4.1. Définir un périmètre V1 réaliste

- [ ] Limiter la V1 aux questions de quiz et aux flashcards : exclure les exercices génératifs tant que les identifiants ne sont pas stables d'une session à l'autre
- [ ] Définir des identifiants stables de révision : `moduleId:quiz:index` pour les quiz et `moduleId:flashcard:index` pour les cartes mémoire
- [ ] Décider d'un plafond quotidien simple pour la V1 : par exemple `10 à 20` révisions dues maximum par jour

### 4.2. Séparer la logique SM-2 de la persistance

- [ ] Créer `js/engines/revisionEngine.js` pour implémenter la logique de planification SM-2 sans DOM
- [ ] Ajouter dans `js/storage.js` la persistance des objets de révision : `easiness`, `intervalDays`, `repetition`, `nextReviewAt`, `lastReviewedAt`, `lastResult`
- [ ] Exposer des helpers de stockage : `getReviews()`, `saveReviewItem()`, `getDueReviews()`, `saveQuestionResult(moduleId, questionId, correct)`
- [ ] En V1, mapper `correct = true` vers une qualité SM-2 élevée et `correct = false` vers une qualité basse ; garder une V2 plus fine avec auto-évaluation `facile / fragile / à revoir`

### 4.3. Alimenter la base de révision

- [ ] Brancher `saveQuestionResult()` dans le moteur de quiz au moment où la réponse est validée
- [ ] Réutiliser les flashcards existantes : `Je sais` décale la prochaine révision, `À revoir` la rapproche
- [ ] Prévoir un bootstrap initial : lorsqu'un module est terminé, injecter ses cartes de base dans la file de révision
- [ ] Ajouter un mécanisme anti-bruit : ne pas recréer plusieurs entrées pour la même question

### 4.4. Construire la vue de révision

- [ ] Créer `js/views/revision.js` avec une expérience `une carte / une question à la fois`
- [ ] Ajouter le routage `#revision` dans `js/app.js`
- [ ] Déclarer `js/views/revision.js` dans `index.html`
- [ ] Afficher pour chaque item : module, type (`quiz` ou `flashcard`), question, réponse attendue, boutons `Je savais`, `À revoir`
- [ ] Ajouter un écran de fin : nombre d'items traités, taux de réussite, prochains items dus

### 4.5. Intégrer la révision au tableau de bord

- [ ] Ajouter sur l'accueil un compteur `X révisions dues aujourd'hui`
- [ ] Ajouter un CTA direct `Lancer mes révisions`
- [ ] Ajouter un petit historique : `dernière session`, `série en cours`, `prochaine échéance`
- [ ] Mettre à jour `contenu.md` immédiatement après ajout de `js/engines/revisionEngine.js` ou `js/views/revision.js`

---

## 5. Journal d'erreurs personnel

Objectif : transformer chaque erreur en objet révisable, compréhensible et actionnable, au lieu de laisser les mauvaises réponses disparaître après la session.

### 5.1. Définir le modèle de donnée

- [ ] Ajouter dans `js/storage.js` un journal `errorJournal` avec : `id`, `moduleId`, `sourceType`, `sourceId`, `prompt`, `userAnswer`, `correctAnswer`, `correction`, `hint`, `createdAt`, `lastReviewedAt`, `status`
- [ ] Réutiliser les mêmes identifiants stables que la révision espacée pour relier une erreur à une question ou une carte précise
- [ ] Prévoir une déduplication minimale : éviter 10 entrées identiques si l'élève rate la même question 10 fois d'affilée dans la même session

### 5.2. Définir quand une erreur doit être enregistrée

- [ ] Quiz : enregistrer immédiatement toute mauvaise réponse avec la correction associée
- [ ] Exercice : enregistrer une erreur seulement après `2` échecs ou dès que la solution complète est affichée, pour éviter un journal trop bruyant
- [ ] Évaluation : phase 2, après stabilisation du flux quiz + exercice
- [ ] Ajouter `markErrorUnderstood(errorId)` et `reopenError(errorId)` pour distinguer `nouvelle`, `à revoir`, `comprise`

### 5.3. Brancher le journal sur les moteurs existants

- [ ] Quiz : appeler `saveError(...)` depuis le moteur de quiz juste après la validation d'une mauvaise réponse
- [ ] Exercice : appeler `saveError(...)` depuis le moteur d'exercice quand le seuil d'échec est atteint ou quand la solution est dévoilée
- [ ] Renseigner systématiquement : énoncé, réponse de l'élève, bonne réponse, correction, module source
- [ ] Corriger ou remplacer `js/engines/errorAnalysisEngine.js`, actuellement non compatible avec l'architecture Vanilla JS globale

### 5.4. Construire la vue `Mes erreurs`

- [ ] Créer `js/views/erreurs.js` avec filtres par matière, module, statut et date
- [ ] Ajouter le routage `#erreurs` dans `js/app.js`
- [ ] Déclarer `js/views/erreurs.js` dans `index.html`
- [ ] Afficher par carte : énoncé, réponse donnée, bonne réponse, correction, date, module, boutons `Comprise`, `Réviser`, `Revoir le cours`
- [ ] Ajouter un état vide utile : `Aucune erreur en attente`, avec renvoi vers les révisions ou les modules recommandés

### 5.5. Relier le journal au reste du produit

- [ ] Ajouter un lien `Mes erreurs` dans la navigation principale avec badge du nombre d'erreurs non comprises
- [ ] Ajouter un bouton `Réviser` qui envoie soit vers `#revision`, soit vers le module source avec l'onglet pertinent
- [ ] Ajouter sur l'accueil un mini-widget `Erreurs à revoir aujourd'hui`
- [ ] Mettre à jour `contenu.md` immédiatement après ajout de `js/views/erreurs.js` ou d'un nouveau moteur associé

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
- [x] Vérifier que ce message est visible sans scroll sur mobile (viewport < 400 px)
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

Objectif : fiabiliser et enrichir un partage déjà partiellement présent, sans ajouter d'authentification ni de backend.

### 10.1. État actuel déjà présent dans le code

- [x] Le partage par lien hash existe déjà via `generatePlaylistLink()` dans `js/playlist.js`
- [x] Le décodage et le chargement de `#playlist/...` existent déjà via `parseHash()` dans `js/app.js` et `loadPlaylist()` dans `js/playlist.js`
- [x] La structure de base `title + steps` est déjà sérialisée en base64 et limitée à `20` étapes

### 10.2. Refactoriser l'existant en API claire

- [ ] Extraire une API explicite : `generateShareUrl({ title, steps })`, `parseSharedPlaylist(hash)`, `isValidSharedPlaylist(data)`
- [ ] Versionner le payload partagé : `{ v: 1, title, steps }` pour permettre des évolutions futures sans casser les anciens liens
- [ ] Centraliser l'encodage/décodage dans un seul endroit pour éviter la duplication entre builder, routeur et lecture de hash

### 10.3. Sécuriser et valider les liens importés

- [ ] Vérifier côté import : structure JSON valide, longueur maximale, onglets autorisés, `moduleId` existants, titre nettoyé
- [ ] Gérer les erreurs utilisateur proprement : `lien invalide`, `module supprimé`, `playlist vide`, `version non supportée`
- [ ] Ajouter des garde-fous si le lien est trop long ou contient trop d'étapes

### 10.4. Améliorer l'expérience de partage enseignant

- [ ] Ajouter un vrai bouton `Partager` dans l'interface playlist, distinct du simple `Générer le lien`
- [ ] Afficher dans un panneau unique : URL copiable, bouton `Copier`, bouton `Ouvrir comme élève`, aperçu du nombre d'étapes
- [ ] Intégrer un QR code via un script CDN léger `qrcode.js`, déclaré dans `index.html` sans dépendance npm
- [ ] Ajouter un message clair côté enseignant : `Aucun compte requis — le lien suffit pour lancer le parcours`

### 10.5. Rendre le partage plus robuste côté produit

- [ ] Sauvegarder localement la dernière playlist partagée pour pouvoir la régénérer sans tout reconstruire
- [ ] Ajouter un mini mode `aperçu élève` depuis l'espace enseignant avant copie du lien
- [ ] Prévoir une stratégie si l'URL devient trop longue : alerte, réduction du nombre d'étapes, ou suppression des métadonnées non essentielles
- [ ] Mettre à jour `contenu.md` si un nouveau script est ajouté pour le QR code ou pour le parsing partagé

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
