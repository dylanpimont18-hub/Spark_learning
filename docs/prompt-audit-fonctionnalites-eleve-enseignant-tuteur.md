# Prompt — Audit fonctionnel élève / enseignant / tuteur / admin (+ propositions d'amélioration)

À utiliser tel quel comme prompt de lancement d'une session Claude Code dédiée.

---

Tu vas auditer les **fonctionnalités** de Spark Learning (Vanilla JS SPA, voir CLAUDE.md) pour les 4 rôles du site — élève, enseignant, tuteur privé, admin — puis proposer des améliorations. Ce **n'est pas** un audit de contenu pédagogique (cours/quiz/exercices déjà audités par ailleurs) : ne lis pas `js/data/` sauf besoin ponctuel de contexte. L'objectif : vérifier que chaque parcours fonctionne réellement en conditions réelles (pas juste « le code semble correct » à la lecture), corriger les bugs évidents trouvés en route, et proposer une liste priorisée d'améliorations fonctionnelles/UX par rôle.

## Contexte déjà établi (ne pas rouvrir, juste exécuter)

- 4 rôles distincts, permissions Firestore différentes (`js/auth/authService.js`, `firestore.rules`) :
  - **Élève** : `role: 'student'` (défaut à l'inscription), `status: 'active'`.
  - **Enseignant** : `role: 'teacher'`, `status: 'pending'` à l'inscription — doit être approuvé par un admin (`adminPanel.js`, passe `status` à `'active'`) avant d'accéder à `teacherDashboard.js`.
  - **Tuteur privé** : compte enseignant + flag `tutorAccess: true` (posé manuellement, pas via le formulaire d'inscription), donne accès à `/tutorat`.
  - **Admin** : Dylan seul, accès à `adminPanel.js`.
- **Pas d'émulateur Firebase configuré** (`firebase.json` ne déclare aucun `emulators`) : tout test Puppeteer avec un vrai compte tape directement sur le Firestore de **production**. Traite ça comme une contrainte de méthode, pas un détail — voir garde-fous.
- Deux audits précédents ont déjà noté le **contenu** pédagogique /100 (mémoire `project_audit_pedagogique_2026-07`, `project_audit_panel_maths_2026-07`) : ne pas refaire ce travail ici.
- Un audit fonctionnel+perf plus général a eu lieu le 2026-08-19 (mémoire `project_audit_perf_2026-08-19`) : 0 bug applicatif trouvé à l'époque sur les parcours élève de base — sert de point de référence, pas une garantie que rien n'a changé depuis.

## Garde-fous avant de commencer

- `git status` et `git branch --show-current` d'abord — repo partagé, une autre session peut être active en parallèle (mémoire `feedback_concurrent_sessions_shared_worktree`).
- **Comptes de test** : crée des comptes clairement identifiables (ex. `audit-fonctionnel-2026-08-19+eleve@...`, `+enseignant@...`, `+tuteur@...`), jamais sur un compte élève/enseignant réel existant. La suppression d'un compte Firebase **Auth** (pas juste le document Firestore associé) n'est probablement pas possible depuis le SDK client sans droits admin — si c'est le cas, liste-les clairement dans le rapport final pour suppression manuelle par Dylan depuis la console Firebase ; ne prétends pas les avoir supprimés si tu ne peux pas le vérifier.
- Pour approuver un compte enseignant de test, utilise le panneau admin avec le compte admin existant de Dylan — ne crée pas de 2e compte admin.
- Si isolation nécessaire (worktree + jonction `node_modules`) : jamais `Remove-Item -Recurse` ni `git worktree remove --force` directement sur une jonction (mémoire `feedback_node_modules_junction_worktree_removal`).

## Partie A — Cartographie (revue de code, avant tout test navigateur)

Fichiers déjà identifiés par rôle — à relire avant de commencer, pas besoin de repartir de zéro :

**Élève**
- `js/views/home.js` — accueil, matières, niveaux, modules.
- `js/components/moduleTabs.js` + `js/engines/{quiz,exercice,probleme,evaluation,companion}Engine.js` — les 6 onglets d'un module.
- `js/components/companion.js` / `companionEngine.js` — remédiation, badges, répétition espacée.
- `js/flashcards.js`, `js/playlist.js` (mode guidé côté élève), `js/storage.js` (progression localStorage), `js/components/globalSearch.js`.

**Enseignant**
- `js/views/teacherDashboard.js` — classes, élèves, progression, devoirs, grading.
- `js/views/gradingPanel.js` — notation comparative élèves × modules + export Pronote CSV.
- `js/components/teacherErrorModal.js` — proposer un piège fréquent sur un module.
- `js/playlist.js` (création de parcours personnalisés côté enseignant).

**Tuteur privé**
- `js/tutoring/tutoringService.js` — CRUD Firestore du suivi de cours particuliers.
- `js/views/tutoring/tutoringHome.js` — liste des élèves suivis (`/tutorat`).
- `js/views/tutoring/tutoringStudent.js` — fiche élève : notes, séances temps réel, notation, génération IA, tests de positionnement.
- `js/views/positioning/positioningTest.js` — page publique non authentifiée, passage du test par l'élève (`/positionnement:token`).

**Admin**
- `js/views/adminPanel.js` — enseignants en attente, comptes utilisateurs, modules, historique.

**Transversal**
- `js/auth/authService.js`, `js/auth/authGuard.js`, `js/views/authView.js` — inscription/connexion, garde de rôle.
- `js/app.js` — routage ; doit refuser proprement l'accès à une route hors du rôle courant (ex. un élève qui tape `/tutorat` à la main).

Note en fin de partie A les hypothèses ou incohérences repérées à la lecture, à vérifier en Partie B (ex. un état de chargement qui semble absent, une permission qui semble trop large).

## Partie B — Parcours réels (Puppeteer, un par rôle)

Pour chaque rôle, joue le parcours complet dans le navigateur avec un compte de test, pas juste les écrans isolés. Note toute friction (clic qui ne mène nulle part, état de chargement infini, message d'erreur peu clair, action sans confirmation ni feedback), pas seulement les erreurs bloquantes.

- **Élève** : inscription → un module (cours → quiz → exercice → problème → évaluation → companion) → flashcards → recherche globale → vérifie que la progression survit à un rafraîchissement de page.
- **Enseignant** : inscription (`status: pending`) → **bloqué avant approbation admin** (vérifie que c'est bien le cas, pas juste supposé) → approbation via admin → dashboard → création d'une classe → ajout d'un devoir/parcours (`playlist.js`) → notation d'un élève → export Pronote CSV → signalement d'un piège fréquent sur un module.
- **Tuteur privé** : compte enseignant existant + `tutorAccess: true` (à poser manuellement en Firestore, documente comment) → `/tutorat` → ajout d'un élève → fiche élève → séance (temps réel) → notation → génération IA → envoi d'un test de positionnement → passage du test côté élève via le lien public `/positionnement:token` (sans être connecté).
- **Admin** : liste des enseignants en attente → approbation/rejet → gestion d'un compte utilisateur → historique.

## Partie C — Transversal

- **Étanchéité des rôles** : un élève connecté ne doit jamais pouvoir atteindre une route/donnée enseignant, tuteur ou admin (test manuel : taper l'URL directement, pas juste vérifier l'absence de lien dans l'UI). Croise avec `firestore.rules` — une route cachée côté UI mais lisible côté Firestore est une vraie faille, pas un détail cosmétique.
- **États de chargement et d'erreur** : chaque action réseau (Firestore) a-t-elle un état visible pendant l'attente, et un message compréhensible en cas d'échec (pas juste une erreur console silencieuse) ?
- **Responsive mobile** : les 4 tableaux de bord (élève, enseignant, tuteur, admin) sont-ils utilisables sur un viewport mobile — beaucoup d'enseignants et d'élèves consultent depuis un téléphone.

## Partie D — Propositions d'amélioration

Pour chaque rôle, une liste **priorisée** (pas un inventaire brut) de pistes d'amélioration fonctionnelle/UX déduites de ce qui a été observé en Parties B et C — pas des idées génériques hors-sol. Pour chaque proposition : le problème concret observé, l'amélioration proposée, une estimation grossière d'effort (petit/moyen/gros).

**Ne rien implémenter dans cette partie** — uniquement proposer. Contrairement aux bugs de la Partie B (corrigés si évidents), les améliorations attendent la validation de Dylan avant tout développement.

## Livrable

Rapport structuré par rôle : ✅ ce qui fonctionne (avec preuve — capture ou parcours rejoué), 🐛 bugs trouvés — corrigés directement si évidents et sans risque (avant/après), sinon juste listés avec repro, 🔍 propositions d'amélioration classées par priorité. Section finale : liste des comptes de test créés (email, rôle, UID si possible) pour suppression manuelle par Dylan si nécessaire.
