# Spec — Tutorat privé : cycle de vie du PDF généré (Phase 1 du backlog fonctionnalités)

**Date :** 2026-07-23
**Statut :** Approuvé
**Contexte projet :** Suite du générateur de cours IA (Phase 2 tutorat, voir `docs/superpowers/specs/2026-07-16-tutorat-phase2-generateur-design.md`), en production. Un audit de code (2026-07-23) puis une session de brainstorming ont identifié trois lacunes liées entre elles autour du cycle de vie d'une génération, regroupées en une seule phase d'implémentation : (1) impossible de régénérer un cours déjà réussi, (2) une séance peut rester bloquée en `generating` indéfiniment sans recours, (3) une erreur transitoire de l'API Anthropic est traitée comme une vraie erreur de contenu. Cette spec **révise explicitement** la décision "Hors scope" du spec Phase 2 ("Historique de versions des cours régénérés (écrasement simple retenu)") : l'écrasement simple est remplacé par un historique borné.

**Exigence de qualité (héritée du spec Phase 2, inchangée) :** usage professionnel avec des élèves payants, tolérance zéro erreur — la régénération existe précisément pour corriger une erreur repérée en relecture manuelle après une génération "réussie".

---

## 1. Architecture

Aucun nouveau service. Modifications dans l'écosystème existant :
- **Cloud Functions** (`functions/src/generateCourse.js`, `functions/src/anthropicClient.js`) — gestion de la rotation d'historique à la livraison, et retry sur erreurs transitoires pendant la rédaction/relecture/correction.
- **Firestore** (`tutoringSessions/{sessionId}`) — trois nouveaux champs (§2).
- **Firebase Storage** — chemins de PDF/MD versionnés au lieu d'un chemin fixe écrasé à chaque génération.
- **Frontend** (`js/views/tutoring/tutoringStudent.js`, `js/tutoring/tutoringService.js`) — bouton "Régénérer" sur succès, liste des versions précédentes, bouton "forcer l'échec" après 10 min sans réponse.

## 2. Modèle de données

Extension de `tutoringSessions/{sessionId}` :

```json
{
  "...": "champs Phase 1/2 inchangés : studentId, tutorUid, date, subject, topic, difficultiesObserved, status, rating, ratingRemarks, createdAt, generationStatus, generationRequestedBy, generationError, generationLockAt, contentType, figuresCount, pdfUrl, mdUrl, generatedAt",

  "generationVersion": "number (0 par défaut, incrémenté à chaque génération réussie)",
  "generationRequestedAt": "timestamp",
  "generationHistory": [
    { "version": "number", "pdfUrl": "string", "mdUrl": "string", "generatedAt": "timestamp", "contentType": "string", "figuresCount": "number" }
  ]
}
```

Notes de conception :
- `generationVersion` est un compteur **strictement croissant**, distinct de la longueur de `generationHistory` (qui reste plafonnée à 3) — sert à construire un chemin Storage unique par génération, jamais réutilisé même après rotation. Ordre d'opération sans ambiguïté : à chaque livraison réussie, on **incrémente d'abord** `generationVersion` (0 → 1 pour la toute première génération), **puis** on construit le chemin Storage avec la nouvelle valeur — la toute première génération d'une séance produit donc `v1`, jamais `v0`.
- `generationHistory` : FIFO plafonné à 3 entrées. À la 4ᵉ génération réussie (et suivantes), l'entrée la plus ancienne est retirée du tableau **et** son fichier Storage est supprimé (`bucket.file(path).delete()`), pour ne pas accumuler indéfiniment.
- `pdfUrl` / `mdUrl` / `generatedAt` (champs existants, top-level) restent en place et reflètent toujours la **dernière** entrée de `generationHistory` — `_renderGenerationBadge()` continue de les lire sans changement pour l'affichage principal.
- `generationRequestedAt` est posé **côté client**, à chaque clic sur "Générer un cours" ou "Régénérer", avant même l'écriture qui déclenche la Cloud Function. Distinct de `generationLockAt` (posé côté serveur, seulement une fois la fonction démarrée) : sans ce champ client, impossible de détecter un blocage si le trigger ne se déclenche jamais.
- Aucune migration nécessaire : champs absents = comportement par défaut (`generationVersion` absent traité comme `0`, `generationHistory` absent traité comme tableau vide).

### Règles Firestore / Storage
Aucun changement : `tutoringSessions` reste sous `allow read, write: if isTutor();` (Firestore) ; les nouveaux chemins Storage `tutoringSessions/{sessionId}/v{n}/...` restent sous la règle existante `allow read: if isTutor(); allow write: if false;` (écriture réservée au SDK Admin).

## 3. Flux détaillé

### 3.1 Régénération sur un succès
1. Sur une carte de séance avec `generationStatus: "generated"`, un bouton **"Régénérer"** apparaît à côté du lien de téléchargement (en plus, pas en remplacement).
2. Au clic, un mini-formulaire s'ouvre : type de contenu + nombre de figures, **pré-rempli avec les valeurs de la dernière génération** (`contentType`/`figuresCount` actuels), modifiables avant de relancer.
3. La soumission appelle `TutoringService.requestGeneration(sessionId, {contentType, figuresCount})` (fonction existante, inchangée niveau signature) — qui pose en plus `generationRequestedAt: serverTimestamp()`.
4. Le pipeline de génération (rédaction → relecture → compilation) est identique à une première génération.
5. À la livraison réussie : `generationVersion` incrémenté, upload vers `tutoringSessions/{sessionId}/v{generationVersion}/cours.{pdf,md}`, nouvelle entrée ajoutée à `generationHistory`, rotation si > 3 entrées (suppression Storage de l'entrée évincée), `pdfUrl`/`mdUrl`/`generatedAt` mis à jour pour pointer vers la nouvelle version.
6. La carte de séance affiche, sous le lien principal, une liste dépliable "Versions précédentes" (date + lien de téléchargement pour chaque entrée de `generationHistory` autre que la dernière).

### 3.2 Génération bloquée / reprise manuelle
1. Sur une carte avec `generationStatus: "generating"`, si `Date.now() - generationRequestedAt.toMillis() > 10 * 60 * 1000` (10 min), un bouton **"Ça prend trop de temps ? Forcer l'échec"** apparaît sous le spinner existant.
2. Au clic : écriture cliente directe `{ generationStatus: "failed", generationError: "Marqué en échec manuellement après 10 minutes sans réponse." }` sur le document séance (autorisé par les règles Firestore existantes, `isTutor()` a un accès `write` complet sur `tutoringSessions`).
3. Le badge d'échec habituel s'affiche ensuite, avec le bouton "Générer un cours" déjà existant pour relancer.
4. Si la Cloud Function finit par répondre après coup (cas rare : elle avait fini par démarrer juste avant le clic), sa propre écriture Firestore écrase simplement le statut manuel — pas de conflit géré explicitement, dernier écrivain gagne (comportement Firestore par défaut, acceptable vu la fréquence rarissime de ce chevauchement).

### 3.3 Retry sur erreur transitoire (Anthropic API)
1. Dans `functions/src/anthropicClient.js`, `runMessageWithPauseHandling` enveloppe chaque appel `anthropic.messages.stream(...).finalMessage()` (y compris lors des continuations `pause_turn`) d'un retry local : jusqu'à 2 tentatives supplémentaires (3 au total), backoff fixe ~1s puis ~2s.
2. Une erreur est considérée **transitoire** si `err.status` vaut 429, 500, 502, 503 ou 529 (codes standards + `overloaded_error` Anthropic), ou si `err.code` correspond à une erreur réseau Node (`ECONNRESET`, `ETIMEDOUT`, `ECONNREFUSED`).
3. Si l'erreur persiste après épuisement du retry local, elle remonte normalement à l'appelant (`draftCourse`/`reviewDraft`/`fixCompileError`) — le comportement existant (échec de session, ou consommation d'une tentative de correction de compilation) s'applique alors comme avant. Une erreur **non transitoire** (ex. erreur de contenu, réponse invalide) n'est jamais retentée par ce mécanisme — elle remonte immédiatement.

## 4. Gestion des erreurs & cas limites

- **Rotation d'historique et suppression Storage concurrente** : si la suppression du fichier évincé échoue (ex. déjà supprimé), elle est loggée (`console.warn`) sans faire échouer la livraison — la génération reste un succès même si le nettoyage Storage rate.
- **`generationRequestedAt` absent** (séance créée avant ce changement, jamais régénérée depuis) : le bouton "forcer l'échec" ne s'affiche simplement jamais pour cette séance tant qu'aucune nouvelle génération n'a été demandée — pas de faux positif au chargement d'anciennes données.
- **Double clic sur "forcer l'échec"** : idempotent, la seconde écriture ne fait que répéter le même statut `failed`.
- **Retry transitoire et budget de temps** : le retry local (max ~3s de délai cumulé) est négligeable face au timeout global de la fonction (540s) — ne risque pas de provoquer un nouveau type de blocage.
- **Régénération alors qu'une génération est déjà `generating`** : impossible depuis l'UI (le bouton "Régénérer" n'apparaît que sur `generated`, jamais en parallèle d'un `generating` en cours) — pas de double-déclenchement à gérer ici, le verrou existant (`lock.js`) reste la protection de fond.
- **Séance déjà `generated` avant cette phase** (pas encore de `generationVersion`/`generationHistory`) : la première régénération après déploiement traite `generationVersion` absent comme `0`, incrémente vers `1`, et initialise `generationHistory` avec cette seule nouvelle entrée. L'ancien PDF (stocké à l'ancien chemin fixe `tutoringSessions/{sessionId}/cours.pdf`) n'est **pas** migré dans l'historique ni supprimé — il reste un fichier orphelin inoffensif sur Storage (aucune règle ne le référence plus, mais il n'est pas non plus effacé automatiquement). Accepté comme compromis : pas de logique de migration pour un nombre de séances concerné très faible (2 tuteurs, usage encore en phase de démarrage).

## 5. Vues & UI

Modifications de `js/views/tutoring/tutoringStudent.js` :
- `_renderGenerationBadge(sess)` : ajoute le bouton "Régénérer" sur l'état `generated`, la liste dépliable des versions précédentes, et le bouton conditionnel "forcer l'échec" sur `generating` (condition sur `generationRequestedAt`).
- **Correction par rapport à une hypothèse initiale** : il n'existe *pas* de mini-formulaire pour la relance sur échec — le bouton "Générer un cours" de l'état `failed` relance directement avec les mêmes `contentType`/`figuresCount`, sans formulaire. Le petit formulaire d'ajustement (type de contenu + figures, pré-rempli) est donc un **nouvel élément**, `_showRegenerateForm`, propre au bouton "Régénérer" — repris visuellement du formulaire "+ Nouvelle séance" existant, mais pas littéralement le même code. Le flux de relance sur échec reste inchangé.
- Aucun nouveau fichier de vue, aucune nouvelle classe CSS structurante hormis les 4 règles ajoutées pour la liste "Versions précédentes" (réutilise sinon `.tt-gen-badge`, `.tt-rate-btn` existantes).

Modifications de `js/tutoring/tutoringService.js` :
- `requestGeneration(sessionId, opts)` : ajoute `generationRequestedAt: firebase.firestore.FieldValue.serverTimestamp()` à l'écriture existante.

## 6. Validation

- `functions/test/generateCourse.test.js` : test de rotation (4 générations réussies successives → `generationHistory` garde les 3 dernières, la 1ʳᵉ est évincée et son fichier Storage "supprimé" selon le mock) ; test que `generationVersion` s'incrémente correctement et ne redescend jamais.
- `functions/test/anthropicClient.test.js` : mock renvoyant une erreur 529 une fois puis un succès → doit aboutir sans propager d'erreur ; mock renvoyant systématiquement une erreur 529 → doit propager après épuisement des 3 tentatives ; mock renvoyant une erreur non-transitoire (ex. 400) → ne doit **pas** être retenté, propage immédiatement.
- Test manuel en navigateur : régénérer une séance déjà générée, vérifier la nouvelle version + l'ancienne toujours accessible dans "Versions précédentes" ; simuler un blocage (couper le réseau avant que la fonction ne réponde) et vérifier l'apparition du bouton "forcer l'échec" après 10 min.

## 7. Hors scope (cette phase)

- Confirmation ("es-tu sûr ?") avant de cliquer "Générer"/"Régénérer" — prévu dans le lot "petites corrections UX" (Phase 2 du backlog plus large, `project_tutorat_backlog_ameliorations`).
- Vue d'ensemble des générations en cours sur toute la liste d'élèves — également Phase 2.
- Recommandations Physique-Chimie du test de positionnement, modèles de séance, bibliothèque de contenus — phases ultérieures du backlog fonctionnalités, sans lien direct avec le cycle de vie du PDF.
- Watchdog serveur automatique pour les sessions bloquées (ex. Cloud Function planifiée qui scanne périodiquement) — jugé disproportionné pour 2 utilisateurs ; le bouton manuel côté UI suffit.
