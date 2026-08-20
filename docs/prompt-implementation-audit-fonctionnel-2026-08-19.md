# Prompt — Implémentation des 16 améliorations (audit fonctionnel 2026-08-19)

À utiliser tel quel comme prompt de lancement d'une session Claude Code dédiée.

---

Tu vas implémenter les 16 améliorations identifiées lors de l'audit fonctionnel élève/enseignant/tuteur/admin du 2026-08-19 (rapport complet ci-dessous — tu n'as pas besoin d'aller le rechercher ailleurs, tout le contexte nécessaire est ici). Les 2 bugs critiques trouvés pendant cet audit (échec systématique de `joinClass()`, coquille admin/enseignant accessible à tout compte connecté) sont **déjà corrigés et vérifiés** — ne les retouche pas, ils sont mentionnés ici uniquement comme contexte.

## Contexte déjà établi (ne pas rouvrir, juste exécuter)

- **Pas d'émulateur Firebase configuré** (`firebase.json` ne déclare aucun `emulators`) : tout test avec un vrai compte tape directement sur le Firestore de **production** (`spark-learning-7d96b`). Sers l'app en local (`node scripts/tmp-static-server.js <port>`, existe déjà) pour éviter de dépendre du hosting déployé — ça reste le même projet Firebase, donc mêmes précautions.
- **Comptes de test** : crée des comptes clairement identifiables (préfixe `impl-audit-2026-08-19-...`), jamais sur un compte réel. Un compte admin est nécessaire pour certains points (#4, #9, #14, #15) — soit tu réutilises un compte de test admin déjà existant si Dylan t'en fournit un, soit tu demandes une approbation manuelle de 30 secondes le moment venu plutôt que de bloquer dessus (cf. le déroulement de l'audit initial).
- `git status` et `git branch --show-current` d'abord — repo partagé, une autre session peut être active en parallèle.
- **Cache-busting** : toute modification dans `js/` ou `css/styles.css` exige d'incrémenter `?v=N` sur les **52 balises locales** de `index.html` (une seule passe finale, pas à chaque fichier).
- `js/data/` : aucun de ces 16 points ne touche au contenu pédagogique, inutile d'y toucher.

## Garde-fous

- Chaque groupe ci-dessous peut être traité indépendamment (peu de dépendances entre eux) — traite-les dans l'ordre, mais n'hésite pas à sauter un point s'il bloque et à y revenir, plutôt que de rester coincé.
- Pour tout point touchant les règles Firestore (`firestore.rules`) : relis la règle existante concernée avant de la modifier, et n'élargis jamais un accès en lecture au-delà du strict nécessaire (c'est exactement le genre de règle trop restrictive — cf. bug #1 de l'audit — ou trop permissive qui a des conséquences concrètes sur ce projet).
- Vérifie chaque point implémenté avec un test réel (compte de test + navigateur), pas seulement à la lecture du code — c'est en testant réellement que les 2 bugs critiques de l'audit initial ont été trouvés, alors qu'ils semblaient corrects à la lecture.

---

## Groupe A — Correctifs rapides et indépendants (Petit effort)

**#1 — Toast de classe masqué par la bannière cookies**
Le toast d'erreur (`showToast`, `js/app.js` ~ligne 691) et la bannière de consentement (`js/consent.js`) se superposent visuellement en bas d'écran. Décale le conteneur de toasts (ou la bannière) pour qu'ils ne se chevauchent jamais, y compris sur mobile.

**#2 — Lien "Enseignant" visible aux élèves**
`index.html` : le bouton `#nav-teacher` n'est actuellement masqué que pour les invités (`js/app.js`, `_setupCommonListeners`, `isGuest`). Conditionne aussi son affichage à `AuthGuard.isTeacher()`, sur le même modèle que `#nav-tutoring` avec `AuthGuard.isTutor()` juste en dessous dans le même fichier.

**#7 — Rejoindre une classe en libre-service**
`AuthService.joinClass(uid, classCode)` (`js/auth/authService.js`) n'est aujourd'hui appelée que depuis l'inscription (`js/views/authView.js`). Ajoute un point d'entrée accessible à un élève déjà connecté (ex. depuis l'accueil élève ou une page profil si elle existe) pour saisir un code et rejoindre une classe supplémentaire, en réutilisant `joinClass()` telle quelle — elle a été corrigée pendant l'audit et fonctionne déjà hors du parcours d'inscription.

---

## Groupe B — Composant partagé de recherche de module (#3, #12, #14)

Trois emplacements différents réinventent chacun une liste de modules non filtrée sur les 204 modules de la plateforme :
- `js/views/teacherDashboard.js` — sélecteur d'assignation de devoir (`<select id="td-assign-module">`, tous les modules, pas de recherche).
- `js/playlist.js` — sélecteur de la playlist (`_builderContentHTML`) : **plus grave, fait `modules.slice(0, 50)`**, donc les modules au-delà du 50ᵉ sont aujourd'hui impossibles à ajouter à une playlist, silencieusement.
- `js/views/adminPanel.js` — grille de gestion des modules (`_renderModulesTab`), tous les modules, pas de recherche.

Construis **un seul composant/fonction réutilisable** (recherche texte sur titre/matière/niveau, résultats filtrés en direct) et branche-le aux trois emplacements. Pour la playlist, supprime le `.slice(0, 50)` — c'est la partie la plus importante de ce groupe, elle rend une fonctionnalité existante partiellement inutilisable.

---

## Groupe C — Remplacer les dialogues natifs du navigateur (#5)

`prompt()`/`confirm()` sont utilisés à plusieurs endroits : `js/views/adminPanel.js`, `js/app.js`, `js/views/teacherDashboard.js` (création de classe, suppression de devoir, retrait d'élève), `js/views/tutoring/tutoringStudent.js` (archivage). Remplace-les par une modale légère cohérente avec le reste du design system (toasts et modales déjà présentes ailleurs dans le projet, ex. `teacherErrorModal.js` comme gabarit de modale simple). Un seul composant de modale générique (titre, message, champ de saisie optionnel, boutons confirmer/annuler) suffit pour couvrir tous les cas.

---

## Groupe D — Gestion de classe côté enseignant (#6)

Aucun moyen actuel pour un enseignant d'archiver/supprimer une classe créée par erreur depuis son tableau de bord — seul un outil admin "classes orphelines" existe (`AuthService`, section "Admin : classes orphelines" dans `authService.js`), pas exposé en UI accessible à l'enseignant lui-même. Ajoute un bouton d'archivage de classe dans `js/views/teacherDashboard.js`, sur le modèle de celui déjà présent côté tutorat (`tutoringStudent.js`, `_archive()` — confirmation, action non destructive, historique conservé). Vérifie les règles Firestore existantes sur `classes/{classCode}` (`allow update`) : l'archivage doit rester réservé au prof propriétaire ou à l'admin.

---

## Groupe E — Synchronisation cross-device (#8, #11, #13)

Ce groupe touche au modèle de données. Prends le temps de vérifier chaque changement avec un compte de test avant de l'considérer terminé.

**#8 — Modules récents dérivés de la progression serveur**
`js/state.js` (`trackRecentModule`/`getRecentModules`) est purement `localStorage` (clé `sparkRecent`). Pour un compte connecté, dérive plutôt les modules récents des horodatages disponibles dans `progress/{uid}` (déjà lu par `teacherDashboard.js`/`gradingPanel.js` — regarde comment `progress.tracking` est structuré avant de choisir quel horodatage utiliser). Garde le `localStorage` comme fallback pour les invités (pas de compte = pas de `progress/{uid}`).

**#11 — Spark Companion synchronisé (badges, répétition espacée)**
`js/engines/companionEngine.js` persiste `state.companionState` uniquement via `localStorage.setItem('sparkCompanionState', ...)` (5 points d'appel dans ce fichier). Pour un compte connecté, écris au minimum les badges obtenus et les dates de session dans `progress/{uid}` (même document, `.set(..., {merge:true})` — regarde `js/auth/authService.js`, la dénormalisation `teacherIds` dans `joinClass()`/`removeStudentFromClass()` comme gabarit du pattern déjà en place). Vérifie `firestore.rules` : la règle `progress/{uid}` autorise déjà `isOwner(uid)` en écriture complète, donc un élève qui écrit ses propres données Companion ne nécessite normalement **aucune modification des règles**. Ensuite, fais apparaître un minimum de visibilité de cet usage dans `js/views/teacherDashboard.js` (à toi de juger de la forme : indicateur simple, colonne dans le tableau comparatif, etc. — pas besoin de reproduire toute l'UI Companion côté enseignant).
Décide et documente ta position sur la migration des données déjà présentes en `localStorage` chez les utilisateurs existants (upload silencieux à la prochaine connexion, ou pas de rétro-compatibilité — les nouvelles données suffisent à partir de maintenant) : les deux sont défendables, choisis-en une et explique pourquoi dans ton rapport final.

**#13 — Traçabilité des playlists**
Aujourd'hui, une playlist générée (`js/playlist.js`, `encodePlaylist`/`buildPath('playlist', ...)`) est un lien autonome sans aucune trace Firestore. Deux options légitimes, à trancher toi-même selon ce qui te semble proportionné à l'usage réel de cette fonctionnalité : (a) un suivi léger côté serveur (création + complétion, sur le modèle de `assignments`) ou (b) documenter explicitement (commentaire dans le code + mention dans ton rapport) que la playlist est un outil volontairement "hors suivi", et ne pas construire de système pour un besoin qui n'existe peut-être pas. Ne te lance dans l'option (a) que si tu as une bonne raison de penser qu'elle est nécessaire.

---

## Groupe F — Admin et qualité des données (#4, #9, #10, #15, #16)

**#4 — Stat "Enseignants actifs" (à trancher, pas un correctif automatique)**
`AuthService.getAdminStats()` compte uniquement `role === 'teacher'`, pas les comptes `role === 'admin'` qui utilisent aussi l'espace enseignant. Ce n'est pas forcément un bug — ça peut être voulu (distinguer les "vrais" enseignants externes des comptes admin). Ne change rien sans avoir d'abord regardé si ce nombre est utilisé ailleurs (ex. dans une communication, un tableau de bord externe) ; si le changement est sans risque, tu peux inclure les admins actifs à teacher-utilisant dans le compte, sinon documente la question dans ton rapport pour que Dylan tranche.

**#9 — Contexte sur une demande de compte enseignant**
Le formulaire d'inscription enseignant (`js/views/authView.js`, `_renderRegister`) ne demande que nom/email/mot de passe. Ajoute deux champs optionnels — établissement et matière enseignée — stockés sur le profil (`AuthService.createUserProfile`) et affichés sur la carte "en attente" du panneau admin (`js/views/adminPanel.js`, `_renderPending`).

**#10 — Visibilité des tests de positionnement non complétés**
`TutoringService.getPendingPositioningTests()` (`js/tutoring/tutoringService.js`) ne renvoie que les tests **complétés** et non rattachés (`results.maths.status === 'completed'` ou `results.physique.status === 'completed'`). Ajoute une liste (même section ou une nouvelle) des tests créés mais jamais complétés, avec leur date de création, pour permettre une relance ciblée depuis `js/views/tutoring/tutoringHome.js`.

**#15 — Traçabilité des suggestions "piège fréquent"**
`js/components/teacherErrorModal.js` envoie directement à Formspree (`fetch('https://formspree.io/f/xnjgyrjd', ...)`), sans jamais transiter par Firestore — c'est la seule action enseignant de tout le produit sans trace dans l'Historique admin (`js/views/adminPanel.js`, `_logActionLabels`/`logAdminAction`). Écris aussi la suggestion dans une nouvelle collection Firestore (ex. `teacherFeedback`) et ajoute une vue admin pour la consulter (nouvel onglet ou section dans l'existant), en gardant si tu veux l'envoi Formspree en parallèle comme notification immédiate. Ajoute la règle Firestore correspondante (lecture réservée à l'admin, écriture réservée à un compte enseignant/admin authentifié).

**#16 — Perte silencieuse des notes de la notation Pronote**
`js/views/gradingPanel.js` : les notes/appréciations saisies (`_gradeDrafts`) ne sont jamais persistées côté serveur — le code le documente déjà lui-même. Deux niveaux de correctif, fais au moins le premier :
1. Minimum : avertir avant de quitter la page s'il y a une saisie non exportée (`window.addEventListener('beforeunload', ...)`, conditionné à `_gradeDrafts` non vide).
2. Mieux, si le temps le permet : sauvegarder les brouillons dans Firestore comme le reste des données enseignant (nouvelle sous-collection ou champ sur le devoir/assignment concerné), pour survivre à une fermeture d'onglet sans même un avertissement raté.

---

## Vérification

Pour chaque point : test réel avec un compte de test dans le navigateur (pas seulement une relecture du code), `node scripts/check-decimal-notation.js` si tu touches à du texte affiché avec des nombres, et confirme l'absence de régression sur les parcours déjà vérifiés lors de l'audit (inscription élève avec code classe, `/admin` et `/teacher` bloqués pour un élève).

## Livrable

Rapport structuré par groupe (A à F) : ✅ ce qui est fait et vérifié, 🐛 toute régression ou effet de bord trouvé en testant, 🔍 les décisions prises sur les points à trancher (#4, #11 migration, #13 option choisie) avec la justification. Liste finale des comptes/données de test créés, comme dans le rapport d'audit initial.
