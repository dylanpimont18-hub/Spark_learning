# Spec — Tutorat privé, Phase 2 : Générateur de cours IA

**Date :** 2026-07-16
**Statut :** Approuvé
**Contexte projet :** Suite de la Phase 1 (Fondations, voir `docs/superpowers/specs/2026-07-16-tutorat-fondations-design.md`), déjà implémentée : espace privé Dylan+Simon, fiche élève, séances, notation manuelle. Cette phase ajoute la génération automatique de contenu pédagogique (cours et/ou exercices) via l'API Claude, avec compilation LaTeX et envoi par email.

**Exigence de qualité (contrainte structurante) :** usage professionnel réel avec des élèves payants — aucune tolérance pour une erreur de français, de mathématiques, de sciences, dans les schémas ou les courbes générées. Cette contrainte a orienté plusieurs choix ci-dessous (modèle Opus, passe de relecture dédiée, retry sur échec de compilation).

---

## 1. Architecture

Tout reste dans l'écosystème **Firebase** — aucune plateforme supplémentaire (pas de Cloud Run séparé, pas de conteneur à gérer) :

- **Cloud Functions (2ᵉ génération)** — nouvelle, déclenchée par l'écriture Firestore d'un document `tutoringSessions/{sessionId}` passant `generationStatus` à `"generating"`. Orchestre 4 étapes :
  1. **Rédaction** — appel API Anthropic, modèle **Claude Opus 4.8**, avec les outils *code execution* (Python/matplotlib, pour générer figures et courbes) et *web search* (pour retrouver des schémas existants pertinents). Produit un fichier `.tex` et les fichiers de figures associés.
  2. **Relecture** — second appel Opus, indépendant du premier, qui reçoit le `.tex` généré **et** les images des figures produites. Vérifie : cohérence mathématique, exactitude scientifique, orthographe/grammaire française, cohérence entre figures et texte. Corrige le `.tex` si nécessaire avant de passer à l'étape suivante.
  3. **Compilation** — **Tectonic** (moteur LaTeX à binaire unique, ~80 Mo, qui télécharge et met en cache les packages à la volée) compile le `.tex` final en PDF. Le binaire est récupéré via un script `postinstall` npm au déploiement (technique standard type `ffmpeg-static`), appelé ensuite en `child_process` — pas de Dockerfile, pas d'image à builder.
  4. **Livraison** — upload du PDF + du `.md` source sur Firebase Storage, mise à jour du document séance, écriture d'un document dans la collection `mail` pour déclencher l'envoi.
- **Firestore** (existant) — `tutoringSessions` porte l'état du pipeline (voir §2).
- **Firebase Storage** (nouveau) — stocke `tutoringSessions/{sessionId}/cours.pdf` et `cours.md`. Lecture réservée à `isTutor()` (même garde que Firestore). Écriture réservée au SDK Admin (Cloud Function) — aucune règle client en écriture.
- **Extension Firebase "Trigger Email"** (nouvelle) — écrire un document dans la collection `mail` déclenche l'envoi SMTP. Succès → email à Dylan+Simon avec lien de téléchargement. Échec (après épuisement des tentatives, voir §4) → email uniquement à `generationRequestedBy` (celui qui a cliqué "Générer un cours"), avec le message d'erreur.

Modèle retenu : **Claude Opus 4.8** pour la rédaction et la relecture (priorité à la qualité sur le coût, cohérent avec l'usage professionnel et le faible volume attendu — quelques générations par semaine).

## 2. Modèle de données

Extension de `tutoringSessions/{sessionId}` (aucune migration nécessaire — champs absents = valeurs par défaut, comme prévu dans le spec Phase 1) :

```json
{
  "...": "champs Phase 1 inchangés : studentId, tutorUid, date, subject, topic, difficultiesObserved, status (draft|rated), rating, ratingRemarks, createdAt",

  "generationStatus": "none | generating | generated | failed",
  "generationRequestedBy": "uid",
  "generationError": "string | null",
  "generationLockAt": "timestamp | null",
  "contentType": "cours | exercices | les_deux",
  "figuresCount": "number",
  "pdfUrl": "string | null",
  "mdUrl": "string | null",
  "generatedAt": "timestamp | null"
}
```

Notes de conception :
- `generationStatus` absent équivaut à `"none"` — pas d'état "requested" transitoire séparé : l'écriture client de `"generating"` déclenche directement la Cloud Function.
- `generationRequestedBy` est **distinct** de `tutorUid` (créateur de la séance) : Dylan peut créer une séance et Simon peut être celui qui déclenche la génération plus tard (ou l'inverse) — l'email d'échec doit joindre celui qui a cliqué, pas nécessairement le créateur.
- `status` (notation) et `generationStatus` (génération) sont **deux champs indépendants** : une séance peut être `rated` sans jamais avoir eu de génération, ou `generated` sans être encore `rated`.
- `generationLockAt` sert de verrou anti-double-déclenchement (voir §4) — pas exposé dans l'UI.
- `contentType` et `figuresCount` ne sont renseignés qu'au moment d'une demande de génération (absents sinon).
- **Régénération** : si une séance est déjà `generated` et qu'on reclique "Générer un cours", le nouveau PDF/MD **écrase** l'ancien au même chemin Storage (un seul cours à jour par séance, pas d'historique de versions).

### Règles Firestore (ajout)
Aucune règle nouvelle nécessaire : les champs de génération sont sur le même document `tutoringSessions`, déjà couvert par `allow read, write: if isTutor();` du spec Phase 1.

### Règles Storage (nouveau fichier `storage.rules`, nouveau dans `firebase.json`)
```
match /tutoringSessions/{sessionId}/{fileName} {
  allow read: if isTutor();
  allow write: if false; // écriture réservée au SDK Admin (Cloud Function)
}
```

## 3. Flux détaillé

1. Sur la fiche élève (`js/views/tutoring/tutoringStudent.js`), le formulaire "+ Nouvelle séance" existant gagne deux champs après ceux de la Phase 1 : *type de contenu* (select : cours / exercices / les deux) et *nombre de figures* (number, défaut 2). Un second bouton **"Générer un cours"** apparaît à côté de "Enregistrer la séance".
   - "Enregistrer la séance" seul → comportement Phase 1 inchangé (`generationStatus` reste absent).
   - "Générer un cours" → écrit/actualise la séance avec `generationStatus: "generating"`, `generationRequestedBy`, `contentType`, `figuresCount`, `generationLockAt: now()`.
2. Cette écriture déclenche la Cloud Function (`onDocumentWritten`, filtrée sur transition vers `"generating"`).
3. La fonction vérifie le verrou (`generationLockAt` récent = sortie immédiate, voir §4), puis exécute rédaction → relecture → compilation (avec retry, voir §4).
4. **Succès** : upload Storage, `generationStatus: "generated"`, `pdfUrl`/`mdUrl`/`generatedAt` renseignés, document `mail` créé pour Dylan+Simon avec lien de téléchargement.
5. **Échec** (après épuisement des tentatives) : `generationStatus: "failed"`, `generationError` renseigné, document `mail` créé pour `generationRequestedBy` uniquement.
6. La fiche élève écoute les séances via `onSnapshot` (au lieu d'un `get()` ponctuel) : les badges d'état se mettent à jour sans rechargement manuel.
7. Chaque carte séance affiche un badge sous les difficultés observées :
   - *absent* → rien.
   - `generating` → "Génération en cours..." + spinner CSS léger.
   - `generated` → badge succès + lien `<a href="{pdfUrl}" target="_blank">Télécharger le PDF</a>`.
   - `failed` → badge erreur + `generationError` affiché + bouton "Générer un cours" redisponible sur cette séance existante.

Nouveau service : `TutoringService.requestGeneration(sessionId, {contentType, figuresCount})`.

## 4. Gestion des erreurs & cas limites

- **Double-déclenchement** : en début d'exécution, la fonction relit le document ; si `generationLockAt` date de moins de 10 minutes et que `generationStatus` est toujours `"generating"`, elle s'arrête immédiatement (protection contre la garantie *at-least-once* des triggers Firestore).
- **Erreur transitoire API** (timeout, rate limit) pendant rédaction ou relecture : jusqu'à 2 nouvelles tentatives de l'appel concerné avant abandon.
- **Erreur de compilation LaTeX** : le message d'erreur Tectonic est renvoyé à Claude pour correction du `.tex`, jusqu'à 3 tentatives, avant abandon.
- **Abandon final** : `generationStatus: "failed"`, `generationError` = message court et compréhensible (pas la stack trace brute), email uniquement à `generationRequestedBy`.
- **Élève ou séance archivé(e) pendant une génération en cours** : la génération continue jusqu'au bout, le résultat reste attaché à la séance même si l'élève est archivé entre-temps.
- **`figuresCount` = 0** : valide ("pas de figure demandée"), explicité dans le prompt de rédaction plutôt que laissé ambigu.
- **Régénération d'une séance déjà `generated`** : écrase l'ancien PDF/MD (voir §2), `generatedAt` mis à jour.

## 5. Vues & UI

Modifications de `js/views/tutoring/tutoringStudent.js` uniquement (aucun nouveau fichier de vue) :
- `_showSessionForm` : ajout des champs *type de contenu* / *nombre de figures* + bouton "Générer un cours".
- `_renderSessionsList` : ajout du badge d'état de génération (4 états, voir §3.7).
- `render` : passage de `get()` à un listener `onSnapshot` sur les séances de l'élève.
- Style : réutilise les classes et variables CSS existantes (`.card`, `--primary`, etc.), comme en Phase 1 — aucun nouveau système visuel.

## 6. Validation

Pas de framework de test automatisé (vanilla JS sans build) — validation manuelle :
- Configurer la clé API Anthropic en secret Cloud Functions (`firebase functions:secrets:set ANTHROPIC_API_KEY`), jamais en dur dans le code.
- Ajouter `storage.rules` + section `storage` dans `firebase.json` (absents aujourd'hui).
- Installer et configurer l'extension Firebase "Trigger Email" (SMTP à renseigner en console Firebase).
- Test bout-en-bout : créer une séance, cliquer "Générer un cours" (1-2 figures) → badge "en cours" → badge "généré" + PDF téléchargeable → email Dylan+Simon reçu avec lien.
- Test échec : invalider temporairement la clé API → badge "failed" + email uniquement au demandeur + bouton "Générer un cours" redisponible.
- Test régénération : régénérer une séance déjà `generated` → vérifier que l'ancien PDF est bien remplacé, pas de doublon Storage.
- **Relecture manuelle obligatoire** d'au moins les premiers PDF générés par un formateur avant tout envoi à un usage réel avec élèves — la contrainte "zéro erreur" ne peut pas reposer uniquement sur la passe de relecture automatique pour ce premier lot.

## 7. Hors scope (Phase 2)

- Historique de versions des cours régénérés (écrasement simple retenu).
- Interface de suivi/logs détaillé du pipeline de génération pour le tutor (seul le badge d'état est visible).
- Génération pour plusieurs élèves en lot / plusieurs tutors au-delà de Dylan et Simon.
- Édition manuelle du contenu généré depuis l'interface (le PDF est le livrable final ; toute correction repasse par une régénération).
